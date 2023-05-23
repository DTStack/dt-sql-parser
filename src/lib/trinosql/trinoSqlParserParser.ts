// Generated from /Users/zhenglin/Documents/parser/dt-sql-parser/src/grammar/trinosql/trinoSqlParser.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import trinoSqlParserListener from "./trinoSqlParserListener.js";
import trinoSqlParserVisitor from "./trinoSqlParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class trinoSqlParserParser extends Parser {
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
	public static readonly DELIMITER = 275;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_statements = 1;
	public static readonly RULE_singleStatement = 2;
	public static readonly RULE_standaloneExpression = 3;
	public static readonly RULE_standalonePathSpecification = 4;
	public static readonly RULE_standaloneType = 5;
	public static readonly RULE_standaloneRowPattern = 6;
	public static readonly RULE_statement = 7;
	public static readonly RULE_query = 8;
	public static readonly RULE_with = 9;
	public static readonly RULE_tableElement = 10;
	public static readonly RULE_columnDefinition = 11;
	public static readonly RULE_likeClause = 12;
	public static readonly RULE_properties = 13;
	public static readonly RULE_property = 14;
	public static readonly RULE_queryNoWith = 15;
	public static readonly RULE_limitRowCount = 16;
	public static readonly RULE_rowCount = 17;
	public static readonly RULE_queryTerm = 18;
	public static readonly RULE_queryPrimary = 19;
	public static readonly RULE_sortItem = 20;
	public static readonly RULE_querySpecification = 21;
	public static readonly RULE_groupBy = 22;
	public static readonly RULE_groupingElement = 23;
	public static readonly RULE_groupingSet = 24;
	public static readonly RULE_windowDefinition = 25;
	public static readonly RULE_windowSpecification = 26;
	public static readonly RULE_namedQuery = 27;
	public static readonly RULE_setQuantifier = 28;
	public static readonly RULE_selectItem = 29;
	public static readonly RULE_relation = 30;
	public static readonly RULE_joinType = 31;
	public static readonly RULE_joinCriteria = 32;
	public static readonly RULE_sampledRelation = 33;
	public static readonly RULE_sampleType = 34;
	public static readonly RULE_patternRecognition = 35;
	public static readonly RULE_measureDefinition = 36;
	public static readonly RULE_rowsPerMatch = 37;
	public static readonly RULE_emptyMatchHandling = 38;
	public static readonly RULE_skipTo = 39;
	public static readonly RULE_subsetDefinition = 40;
	public static readonly RULE_variableDefinition = 41;
	public static readonly RULE_aliasedRelation = 42;
	public static readonly RULE_columnAliases = 43;
	public static readonly RULE_relationPrimary = 44;
	public static readonly RULE_expression = 45;
	public static readonly RULE_booleanExpression = 46;
	public static readonly RULE_predicate = 47;
	public static readonly RULE_valueExpression = 48;
	public static readonly RULE_primaryExpression = 49;
	public static readonly RULE_processingMode = 50;
	public static readonly RULE_nullTreatment = 51;
	public static readonly RULE_string = 52;
	public static readonly RULE_timeZoneSpecifier = 53;
	public static readonly RULE_comparisonOperator = 54;
	public static readonly RULE_comparisonQuantifier = 55;
	public static readonly RULE_booleanValue = 56;
	public static readonly RULE_interval = 57;
	public static readonly RULE_intervalField = 58;
	public static readonly RULE_normalForm = 59;
	public static readonly RULE_type = 60;
	public static readonly RULE_rowField = 61;
	public static readonly RULE_typeParameter = 62;
	public static readonly RULE_whenClause = 63;
	public static readonly RULE_filter = 64;
	public static readonly RULE_mergeCase = 65;
	public static readonly RULE_over = 66;
	public static readonly RULE_windowFrame = 67;
	public static readonly RULE_frameExtent = 68;
	public static readonly RULE_frameBound = 69;
	public static readonly RULE_rowPattern = 70;
	public static readonly RULE_patternPrimary = 71;
	public static readonly RULE_patternQuantifier = 72;
	public static readonly RULE_updateAssignment = 73;
	public static readonly RULE_explainOption = 74;
	public static readonly RULE_transactionMode = 75;
	public static readonly RULE_levelOfIsolation = 76;
	public static readonly RULE_callArgument = 77;
	public static readonly RULE_pathElement = 78;
	public static readonly RULE_pathSpecification = 79;
	public static readonly RULE_privilege = 80;
	public static readonly RULE_qualifiedName = 81;
	public static readonly RULE_grantor = 82;
	public static readonly RULE_principal = 83;
	public static readonly RULE_roles = 84;
	public static readonly RULE_identifier = 85;
	public static readonly RULE_number = 86;
	public static readonly RULE_nonReserved = 87;
	public static readonly literalNames: (string | null)[] = [ null, "'.'", 
                                                            "'('", "')'", 
                                                            "','", "'SKIP'", 
                                                            "'->'", "'['", 
                                                            "']'", "'|'", 
                                                            "'^'", "'$'", 
                                                            "'{-'", "'-}'", 
                                                            "'{'", "'}'", 
                                                            "'=>'", "'ADD'", 
                                                            "'ADMIN'", "'AFTER'", 
                                                            "'ALL'", "'ALTER'", 
                                                            "'ANALYZE'", 
                                                            "'AND'", "'ANY'", 
                                                            "'ARRAY'", "'AS'", 
                                                            "'ASC'", "'AT'", 
                                                            "'AUTHORIZATION'", 
                                                            "'BERNOULLI'", 
                                                            "'BETWEEN'", 
                                                            "'BY'", "'CALL'", 
                                                            "'CASCADE'", 
                                                            "'CASE'", "'CAST'", 
                                                            "'CATALOGS'", 
                                                            "'COLUMN'", 
                                                            "'COLUMNS'", 
                                                            "'COMMENT'", 
                                                            "'COMMIT'", 
                                                            "'COMMITTED'", 
                                                            "'CONSTRAINT'", 
                                                            "'CREATE'", 
                                                            "'CROSS'", "'CUBE'", 
                                                            "'CURRENT'", 
                                                            "'CURRENT_CATALOG'", 
                                                            "'CURRENT_DATE'", 
                                                            "'CURRENT_PATH'", 
                                                            "'CURRENT_ROLE'", 
                                                            "'CURRENT_SCHEMA'", 
                                                            "'CURRENT_TIME'", 
                                                            "'CURRENT_TIMESTAMP'", 
                                                            "'CURRENT_USER'", 
                                                            "'DATA'", "'DATE'", 
                                                            "'DAY'", "'DEALLOCATE'", 
                                                            "'DEFINER'", 
                                                            "'DELETE'", 
                                                            "'DESC'", "'DESCRIBE'", 
                                                            "'DEFINE'", 
                                                            "'DISTINCT'", 
                                                            "'DISTRIBUTED'", 
                                                            "'DOUBLE'", 
                                                            "'DROP'", "'ELSE'", 
                                                            "'EMPTY'", "'END'", 
                                                            "'ESCAPE'", 
                                                            "'EXCEPT'", 
                                                            "'EXCLUDING'", 
                                                            "'EXECUTE'", 
                                                            "'EXISTS'", 
                                                            "'EXPLAIN'", 
                                                            "'EXTRACT'", 
                                                            "'FALSE'", "'FETCH'", 
                                                            "'FILTER'", 
                                                            "'FINAL'", "'FIRST'", 
                                                            "'FOLLOWING'", 
                                                            "'FOR'", "'FORMAT'", 
                                                            "'FROM'", "'FULL'", 
                                                            "'FUNCTIONS'", 
                                                            "'GRANT'", "'GRANTED'", 
                                                            "'GRANTS'", 
                                                            "'DENY'", "'GRAPHVIZ'", 
                                                            "'GROUP'", "'GROUPING'", 
                                                            "'GROUPS'", 
                                                            "'HAVING'", 
                                                            "'HOUR'", "'IF'", 
                                                            "'IGNORE'", 
                                                            "'IN'", "'INCLUDING'", 
                                                            "'INITIAL'", 
                                                            "'INNER'", "'INPUT'", 
                                                            "'INSERT'", 
                                                            "'INTERSECT'", 
                                                            "'INTERVAL'", 
                                                            "'INTO'", "'INVOKER'", 
                                                            "'IO'", "'IS'", 
                                                            "'ISOLATION'", 
                                                            "'JOIN'", "'JSON'", 
                                                            "'LAST'", "'LATERAL'", 
                                                            "'LEFT'", "'LEVEL'", 
                                                            "'LIKE'", "'LIMIT'", 
                                                            "'LOCAL'", "'LOCALTIME'", 
                                                            "'LOCALTIMESTAMP'", 
                                                            "'LOGICAL'", 
                                                            "'MAP'", "'MATCH'", 
                                                            "'MATCHED'", 
                                                            "'MATCHES'", 
                                                            "'MATCH_RECOGNIZE'", 
                                                            "'MATERIALIZED'", 
                                                            "'MEASURES'", 
                                                            "'MERGE'", "'MINUTE'", 
                                                            "'MONTH'", "'NATURAL'", 
                                                            "'NEXT'", "'NFC'", 
                                                            "'NFD'", "'NFKC'", 
                                                            "'NFKD'", "'NO'", 
                                                            "'NONE'", "'NORMALIZE'", 
                                                            "'NOT'", "'NULL'", 
                                                            "'NULLIF'", 
                                                            "'NULLS'", "'OFFSET'", 
                                                            "'OMIT'", "'ON'", 
                                                            "'ONE'", "'ONLY'", 
                                                            "'OPTION'", 
                                                            "'OR'", "'ORDER'", 
                                                            "'ORDINALITY'", 
                                                            "'OUTER'", "'OUTPUT'", 
                                                            "'OVER'", "'PARTITION'", 
                                                            "'PARTITIONS'", 
                                                            "'PAST'", "'PATH'", 
                                                            "'PATTERN'", 
                                                            "'PER'", "'PERMUTE'", 
                                                            "'POSITION'", 
                                                            "'PRECEDING'", 
                                                            "'PRECISION'", 
                                                            "'PREPARE'", 
                                                            "'PRIVILEGES'", 
                                                            "'PROPERTIES'", 
                                                            "'RANGE'", "'READ'", 
                                                            "'RECURSIVE'", 
                                                            "'REFRESH'", 
                                                            "'RENAME'", 
                                                            "'REPEATABLE'", 
                                                            "'REPLACE'", 
                                                            "'RESET'", "'RESPECT'", 
                                                            "'RESTRICT'", 
                                                            "'REVOKE'", 
                                                            "'RIGHT'", "'ROLE'", 
                                                            "'ROLES'", "'ROLLBACK'", 
                                                            "'ROLLUP'", 
                                                            "'ROW'", "'ROWS'", 
                                                            "'RUNNING'", 
                                                            "'SCHEMA'", 
                                                            "'SCHEMAS'", 
                                                            "'SECOND'", 
                                                            "'SECURITY'", 
                                                            "'SEEK'", "'SELECT'", 
                                                            "'SERIALIZABLE'", 
                                                            "'SESSION'", 
                                                            "'SET'", "'SETS'", 
                                                            "'SHOW'", "'SOME'", 
                                                            "'START'", "'STATS'", 
                                                            "'SUBSET'", 
                                                            "'SUBSTRING'", 
                                                            "'SYSTEM'", 
                                                            "'TABLE'", "'TABLES'", 
                                                            "'TABLESAMPLE'", 
                                                            "'TEXT'", "'THEN'", 
                                                            "'TIES'", "'TIME'", 
                                                            "'TIMESTAMP'", 
                                                            "'TO'", "'TRANSACTION'", 
                                                            "'TRUE'", "'TRY_CAST'", 
                                                            "'TYPE'", "'UESCAPE'", 
                                                            "'UNBOUNDED'", 
                                                            "'UNCOMMITTED'", 
                                                            "'UNION'", "'UNMATCHED'", 
                                                            "'UNNEST'", 
                                                            "'UPDATE'", 
                                                            "'USE'", "'USER'", 
                                                            "'USING'", "'VALIDATE'", 
                                                            "'VALUES'", 
                                                            "'VERBOSE'", 
                                                            "'VIEW'", "'WHEN'", 
                                                            "'WHERE'", "'WINDOW'", 
                                                            "'WITH'", "'WITHOUT'", 
                                                            "'WORK'", "'WRITE'", 
                                                            "'YEAR'", "'ZONE'", 
                                                            "'='", null, 
                                                            "'<'", "'<='", 
                                                            "'>'", "'>='", 
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'", 
                                                            "'%'", "'||'", 
                                                            "'?'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "';'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "ADD", 
                                                             "ADMIN", "AFTER", 
                                                             "ALL", "ALTER", 
                                                             "ANALYZE", 
                                                             "AND", "ANY", 
                                                             "ARRAY", "AS", 
                                                             "ASC", "AT", 
                                                             "AUTHORIZATION", 
                                                             "BERNOULLI", 
                                                             "BETWEEN", 
                                                             "BY", "CALL", 
                                                             "CASCADE", 
                                                             "CASE", "CAST", 
                                                             "CATALOGS", 
                                                             "COLUMN", "COLUMNS", 
                                                             "COMMENT", 
                                                             "COMMIT", "COMMITTED", 
                                                             "CONSTRAINT", 
                                                             "CREATE", "CROSS", 
                                                             "CUBE", "CURRENT", 
                                                             "CURRENT_CATALOG", 
                                                             "CURRENT_DATE", 
                                                             "CURRENT_PATH", 
                                                             "CURRENT_ROLE", 
                                                             "CURRENT_SCHEMA", 
                                                             "CURRENT_TIME", 
                                                             "CURRENT_TIMESTAMP", 
                                                             "CURRENT_USER", 
                                                             "DATA", "DATE", 
                                                             "DAY", "DEALLOCATE", 
                                                             "DEFINER", 
                                                             "DELETE", "DESC", 
                                                             "DESCRIBE", 
                                                             "DEFINE", "DISTINCT", 
                                                             "DISTRIBUTED", 
                                                             "DOUBLE", "DROP", 
                                                             "ELSE", "EMPTY", 
                                                             "END", "ESCAPE", 
                                                             "EXCEPT", "EXCLUDING", 
                                                             "EXECUTE", 
                                                             "EXISTS", "EXPLAIN", 
                                                             "EXTRACT", 
                                                             "FALSE", "FETCH", 
                                                             "FILTER", "FINAL", 
                                                             "FIRST", "FOLLOWING", 
                                                             "FOR", "FORMAT", 
                                                             "FROM", "FULL", 
                                                             "FUNCTIONS", 
                                                             "GRANT", "GRANTED", 
                                                             "GRANTS", "DENY", 
                                                             "GRAPHVIZ", 
                                                             "GROUP", "GROUPING", 
                                                             "GROUPS", "HAVING", 
                                                             "HOUR", "IF", 
                                                             "IGNORE", "IN", 
                                                             "INCLUDING", 
                                                             "INITIAL", 
                                                             "INNER", "INPUT", 
                                                             "INSERT", "INTERSECT", 
                                                             "INTERVAL", 
                                                             "INTO", "INVOKER", 
                                                             "IO", "IS", 
                                                             "ISOLATION", 
                                                             "JOIN", "JSON", 
                                                             "LAST", "LATERAL", 
                                                             "LEFT", "LEVEL", 
                                                             "LIKE", "LIMIT", 
                                                             "LOCAL", "LOCALTIME", 
                                                             "LOCALTIMESTAMP", 
                                                             "LOGICAL", 
                                                             "MAP", "MATCH", 
                                                             "MATCHED", 
                                                             "MATCHES", 
                                                             "MATCH_RECOGNIZE", 
                                                             "MATERIALIZED", 
                                                             "MEASURES", 
                                                             "MERGE", "MINUTE", 
                                                             "MONTH", "NATURAL", 
                                                             "NEXT", "NFC", 
                                                             "NFD", "NFKC", 
                                                             "NFKD", "NO", 
                                                             "NONE", "NORMALIZE", 
                                                             "NOT", "NULL", 
                                                             "NULLIF", "NULLS", 
                                                             "OFFSET", "OMIT", 
                                                             "ON", "ONE", 
                                                             "ONLY", "OPTION", 
                                                             "OR", "ORDER", 
                                                             "ORDINALITY", 
                                                             "OUTER", "OUTPUT", 
                                                             "OVER", "PARTITION", 
                                                             "PARTITIONS", 
                                                             "PAST", "PATH", 
                                                             "PATTERN", 
                                                             "PER", "PERMUTE", 
                                                             "POSITION", 
                                                             "PRECEDING", 
                                                             "PRECISION", 
                                                             "PREPARE", 
                                                             "PRIVILEGES", 
                                                             "PROPERTIES", 
                                                             "RANGE", "READ", 
                                                             "RECURSIVE", 
                                                             "REFRESH", 
                                                             "RENAME", "REPEATABLE", 
                                                             "REPLACE", 
                                                             "RESET", "RESPECT", 
                                                             "RESTRICT", 
                                                             "REVOKE", "RIGHT", 
                                                             "ROLE", "ROLES", 
                                                             "ROLLBACK", 
                                                             "ROLLUP", "ROW", 
                                                             "ROWS", "RUNNING", 
                                                             "SCHEMA", "SCHEMAS", 
                                                             "SECOND", "SECURITY", 
                                                             "SEEK", "SELECT", 
                                                             "SERIALIZABLE", 
                                                             "SESSION", 
                                                             "SET", "SETS", 
                                                             "SHOW", "SOME", 
                                                             "START", "STATS", 
                                                             "SUBSET", "SUBSTRING", 
                                                             "SYSTEM", "TABLE", 
                                                             "TABLES", "TABLESAMPLE", 
                                                             "TEXT", "THEN", 
                                                             "TIES", "TIME", 
                                                             "TIMESTAMP", 
                                                             "TO", "TRANSACTION", 
                                                             "TRUE", "TRY_CAST", 
                                                             "TYPE", "UESCAPE", 
                                                             "UNBOUNDED", 
                                                             "UNCOMMITTED", 
                                                             "UNION", "UNMATCHED", 
                                                             "UNNEST", "UPDATE", 
                                                             "USE", "USER", 
                                                             "USING", "VALIDATE", 
                                                             "VALUES", "VERBOSE", 
                                                             "VIEW", "WHEN", 
                                                             "WHERE", "WINDOW", 
                                                             "WITH", "WITHOUT", 
                                                             "WORK", "WRITE", 
                                                             "YEAR", "ZONE", 
                                                             "EQ", "NEQ", 
                                                             "LT", "LTE", 
                                                             "GT", "GTE", 
                                                             "PLUS", "MINUS", 
                                                             "ASTERISK", 
                                                             "SLASH", "PERCENT", 
                                                             "CONCAT", "QUESTION_MARK", 
                                                             "STRING", "UNICODE_STRING", 
                                                             "BINARY_LITERAL", 
                                                             "INTEGER_VALUE", 
                                                             "DECIMAL_VALUE", 
                                                             "DOUBLE_VALUE", 
                                                             "IDENTIFIER", 
                                                             "DIGIT_IDENTIFIER", 
                                                             "QUOTED_IDENTIFIER", 
                                                             "BACKQUOTED_IDENTIFIER", 
                                                             "SEMICOLON", 
                                                             "SIMPLE_COMMENT", 
                                                             "BRACKETED_COMMENT", 
                                                             "WS", "UNRECOGNIZED", 
                                                             "DELIMITER" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statements", "singleStatement", "standaloneExpression", "standalonePathSpecification", 
		"standaloneType", "standaloneRowPattern", "statement", "query", "with", 
		"tableElement", "columnDefinition", "likeClause", "properties", "property", 
		"queryNoWith", "limitRowCount", "rowCount", "queryTerm", "queryPrimary", 
		"sortItem", "querySpecification", "groupBy", "groupingElement", "groupingSet", 
		"windowDefinition", "windowSpecification", "namedQuery", "setQuantifier", 
		"selectItem", "relation", "joinType", "joinCriteria", "sampledRelation", 
		"sampleType", "patternRecognition", "measureDefinition", "rowsPerMatch", 
		"emptyMatchHandling", "skipTo", "subsetDefinition", "variableDefinition", 
		"aliasedRelation", "columnAliases", "relationPrimary", "expression", "booleanExpression", 
		"predicate", "valueExpression", "primaryExpression", "processingMode", 
		"nullTreatment", "string", "timeZoneSpecifier", "comparisonOperator", 
		"comparisonQuantifier", "booleanValue", "interval", "intervalField", "normalForm", 
		"type", "rowField", "typeParameter", "whenClause", "filter", "mergeCase", 
		"over", "windowFrame", "frameExtent", "frameBound", "rowPattern", "patternPrimary", 
		"patternQuantifier", "updateAssignment", "explainOption", "transactionMode", 
		"levelOfIsolation", "callArgument", "pathElement", "pathSpecification", 
		"privilege", "qualifiedName", "grantor", "principal", "roles", "identifier", 
		"number", "nonReserved",
	];
	public get grammarFileName(): string { return "trinoSqlParser.g4"; }
	public get literalNames(): (string | null)[] { return trinoSqlParserParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return trinoSqlParserParser.symbolicNames; }
	public get ruleNames(): string[] { return trinoSqlParserParser.ruleNames; }
	public get serializedATN(): number[] { return trinoSqlParserParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, trinoSqlParserParser._ATN, trinoSqlParserParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, trinoSqlParserParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2071862276) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294691839) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 3751280407) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4289639863) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 3923771327) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4152344575) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 3757047807) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 2248668125) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 1023) !== 0)) {
				{
				{
				this.state = 176;
				this.statements();
				}
				}
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 182;
			this.match(trinoSqlParserParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statements(): StatementsContext {
		let localctx: StatementsContext = new StatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, trinoSqlParserParser.RULE_statements);
		try {
			this.state = 189;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 184;
				this.singleStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 185;
				this.standaloneExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 186;
				this.standalonePathSpecification();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 187;
				this.standaloneType();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 188;
				this.standaloneRowPattern();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleStatement(): SingleStatementContext {
		let localctx: SingleStatementContext = new SingleStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, trinoSqlParserParser.RULE_singleStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 191;
			this.statement();
			this.state = 192;
			this.match(trinoSqlParserParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public standaloneExpression(): StandaloneExpressionContext {
		let localctx: StandaloneExpressionContext = new StandaloneExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, trinoSqlParserParser.RULE_standaloneExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 194;
			this.expression();
			this.state = 195;
			this.match(trinoSqlParserParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public standalonePathSpecification(): StandalonePathSpecificationContext {
		let localctx: StandalonePathSpecificationContext = new StandalonePathSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, trinoSqlParserParser.RULE_standalonePathSpecification);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 197;
			this.pathSpecification();
			this.state = 198;
			this.match(trinoSqlParserParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public standaloneType(): StandaloneTypeContext {
		let localctx: StandaloneTypeContext = new StandaloneTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, trinoSqlParserParser.RULE_standaloneType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 200;
			this.type_(0);
			this.state = 201;
			this.match(trinoSqlParserParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public standaloneRowPattern(): StandaloneRowPatternContext {
		let localctx: StandaloneRowPatternContext = new StandaloneRowPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, trinoSqlParserParser.RULE_standaloneRowPattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 203;
			this.rowPattern(0);
			this.state = 204;
			this.match(trinoSqlParserParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, trinoSqlParserParser.RULE_statement);
		let _la: number;
		try {
			this.state = 915;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				localctx = new StatementDefaultContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 206;
				this.query();
				}
				break;
			case 2:
				localctx = new UseContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 207;
				this.match(trinoSqlParserParser.USE);
				this.state = 208;
				(localctx as UseContext)._schema = this.identifier();
				}
				break;
			case 3:
				localctx = new UseContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 209;
				this.match(trinoSqlParserParser.USE);
				this.state = 210;
				(localctx as UseContext)._catalog = this.identifier();
				this.state = 211;
				this.match(trinoSqlParserParser.T__0);
				this.state = 212;
				(localctx as UseContext)._schema = this.identifier();
				}
				break;
			case 4:
				localctx = new CreateSchemaContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 214;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 215;
				this.match(trinoSqlParserParser.SCHEMA);
				this.state = 219;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 216;
					this.match(trinoSqlParserParser.IF);
					this.state = 217;
					this.match(trinoSqlParserParser.NOT);
					this.state = 218;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 221;
				this.qualifiedName();
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===29) {
					{
					this.state = 222;
					this.match(trinoSqlParserParser.AUTHORIZATION);
					this.state = 223;
					this.principal();
					}
				}

				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===241) {
					{
					this.state = 226;
					this.match(trinoSqlParserParser.WITH);
					this.state = 227;
					this.properties();
					}
				}

				}
				break;
			case 5:
				localctx = new DropSchemaContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 230;
				this.match(trinoSqlParserParser.DROP);
				this.state = 231;
				this.match(trinoSqlParserParser.SCHEMA);
				this.state = 234;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 232;
					this.match(trinoSqlParserParser.IF);
					this.state = 233;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 236;
				this.qualifiedName();
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===34 || _la===184) {
					{
					this.state = 237;
					_la = this._input.LA(1);
					if(!(_la===34 || _la===184)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				}
				break;
			case 6:
				localctx = new RenameSchemaContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 240;
				this.match(trinoSqlParserParser.ALTER);
				this.state = 241;
				this.match(trinoSqlParserParser.SCHEMA);
				this.state = 242;
				this.qualifiedName();
				this.state = 243;
				this.match(trinoSqlParserParser.RENAME);
				this.state = 244;
				this.match(trinoSqlParserParser.TO);
				this.state = 245;
				this.identifier();
				}
				break;
			case 7:
				localctx = new SetSchemaAuthorizationContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 247;
				this.match(trinoSqlParserParser.ALTER);
				this.state = 248;
				this.match(trinoSqlParserParser.SCHEMA);
				this.state = 249;
				this.qualifiedName();
				this.state = 250;
				this.match(trinoSqlParserParser.SET);
				this.state = 251;
				this.match(trinoSqlParserParser.AUTHORIZATION);
				this.state = 252;
				this.principal();
				}
				break;
			case 8:
				localctx = new CreateTableAsSelectContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 254;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 255;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 259;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 256;
					this.match(trinoSqlParserParser.IF);
					this.state = 257;
					this.match(trinoSqlParserParser.NOT);
					this.state = 258;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 261;
				this.qualifiedName();
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 262;
					this.columnAliases();
					}
				}

				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===40) {
					{
					this.state = 265;
					this.match(trinoSqlParserParser.COMMENT);
					this.state = 266;
					this.string_();
					}
				}

				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===241) {
					{
					this.state = 269;
					this.match(trinoSqlParserParser.WITH);
					this.state = 270;
					this.properties();
					}
				}

				this.state = 273;
				this.match(trinoSqlParserParser.AS);
				this.state = 279;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 274;
					this.query();
					}
					break;
				case 2:
					{
					this.state = 275;
					this.match(trinoSqlParserParser.T__1);
					this.state = 276;
					this.query();
					this.state = 277;
					this.match(trinoSqlParserParser.T__2);
					}
					break;
				}
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===241) {
					{
					this.state = 281;
					this.match(trinoSqlParserParser.WITH);
					this.state = 283;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===143) {
						{
						this.state = 282;
						this.match(trinoSqlParserParser.NO);
						}
					}

					this.state = 285;
					this.match(trinoSqlParserParser.DATA);
					}
				}

				}
				break;
			case 9:
				localctx = new CreateTableContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 288;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 289;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 293;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 290;
					this.match(trinoSqlParserParser.IF);
					this.state = 291;
					this.match(trinoSqlParserParser.NOT);
					this.state = 292;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 295;
				this.qualifiedName();
				this.state = 296;
				this.match(trinoSqlParserParser.T__1);
				this.state = 297;
				this.tableElement();
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 298;
					this.match(trinoSqlParserParser.T__3);
					this.state = 299;
					this.tableElement();
					}
					}
					this.state = 304;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 305;
				this.match(trinoSqlParserParser.T__2);
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===40) {
					{
					this.state = 306;
					this.match(trinoSqlParserParser.COMMENT);
					this.state = 307;
					this.string_();
					}
				}

				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===241) {
					{
					this.state = 310;
					this.match(trinoSqlParserParser.WITH);
					this.state = 311;
					this.properties();
					}
				}

				}
				break;
			case 10:
				localctx = new DropTableContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 314;
				this.match(trinoSqlParserParser.DROP);
				this.state = 315;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 318;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 316;
					this.match(trinoSqlParserParser.IF);
					this.state = 317;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 320;
				this.qualifiedName();
				}
				break;
			case 11:
				localctx = new InsertIntoContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 321;
				this.match(trinoSqlParserParser.INSERT);
				this.state = 322;
				this.match(trinoSqlParserParser.INTO);
				this.state = 323;
				this.qualifiedName();
				this.state = 325;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 324;
					this.columnAliases();
					}
					break;
				}
				this.state = 327;
				this.query();
				}
				break;
			case 12:
				localctx = new DeleteContext(this, localctx);
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 329;
				this.match(trinoSqlParserParser.DELETE);
				this.state = 330;
				this.match(trinoSqlParserParser.FROM);
				this.state = 331;
				this.qualifiedName();
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===239) {
					{
					this.state = 332;
					this.match(trinoSqlParserParser.WHERE);
					this.state = 333;
					this.booleanExpression(0);
					}
				}

				}
				break;
			case 13:
				localctx = new RenameTableContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 336;
				this.match(trinoSqlParserParser.ALTER);
				this.state = 337;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 340;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 338;
					this.match(trinoSqlParserParser.IF);
					this.state = 339;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 342;
				(localctx as RenameTableContext)._from_ = this.qualifiedName();
				this.state = 343;
				this.match(trinoSqlParserParser.RENAME);
				this.state = 344;
				this.match(trinoSqlParserParser.TO);
				this.state = 345;
				(localctx as RenameTableContext)._to = this.qualifiedName();
				}
				break;
			case 14:
				localctx = new CommentTableContext(this, localctx);
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 347;
				this.match(trinoSqlParserParser.COMMENT);
				this.state = 348;
				this.match(trinoSqlParserParser.ON);
				this.state = 349;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 350;
				this.qualifiedName();
				this.state = 351;
				this.match(trinoSqlParserParser.IS);
				this.state = 354;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 260:
				case 261:
					{
					this.state = 352;
					this.string_();
					}
					break;
				case 147:
					{
					this.state = 353;
					this.match(trinoSqlParserParser.NULL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 15:
				localctx = new CommentColumnContext(this, localctx);
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 356;
				this.match(trinoSqlParserParser.COMMENT);
				this.state = 357;
				this.match(trinoSqlParserParser.ON);
				this.state = 358;
				this.match(trinoSqlParserParser.COLUMN);
				this.state = 359;
				this.qualifiedName();
				this.state = 360;
				this.match(trinoSqlParserParser.IS);
				this.state = 363;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 260:
				case 261:
					{
					this.state = 361;
					this.string_();
					}
					break;
				case 147:
					{
					this.state = 362;
					this.match(trinoSqlParserParser.NULL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 16:
				localctx = new RenameColumnContext(this, localctx);
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 365;
				this.match(trinoSqlParserParser.ALTER);
				this.state = 366;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 369;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 367;
					this.match(trinoSqlParserParser.IF);
					this.state = 368;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 371;
				(localctx as RenameColumnContext)._tableName = this.qualifiedName();
				this.state = 372;
				this.match(trinoSqlParserParser.RENAME);
				this.state = 373;
				this.match(trinoSqlParserParser.COLUMN);
				this.state = 376;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 374;
					this.match(trinoSqlParserParser.IF);
					this.state = 375;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 378;
				(localctx as RenameColumnContext)._from_ = this.identifier();
				this.state = 379;
				this.match(trinoSqlParserParser.TO);
				this.state = 380;
				(localctx as RenameColumnContext)._to = this.identifier();
				}
				break;
			case 17:
				localctx = new DropColumnContext(this, localctx);
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 382;
				this.match(trinoSqlParserParser.ALTER);
				this.state = 383;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 386;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 384;
					this.match(trinoSqlParserParser.IF);
					this.state = 385;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 388;
				(localctx as DropColumnContext)._tableName = this.qualifiedName();
				this.state = 389;
				this.match(trinoSqlParserParser.DROP);
				this.state = 390;
				this.match(trinoSqlParserParser.COLUMN);
				this.state = 393;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 391;
					this.match(trinoSqlParserParser.IF);
					this.state = 392;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 395;
				(localctx as DropColumnContext)._column = this.qualifiedName();
				}
				break;
			case 18:
				localctx = new AddColumnContext(this, localctx);
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 397;
				this.match(trinoSqlParserParser.ALTER);
				this.state = 398;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 401;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 399;
					this.match(trinoSqlParserParser.IF);
					this.state = 400;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 403;
				(localctx as AddColumnContext)._tableName = this.qualifiedName();
				this.state = 404;
				this.match(trinoSqlParserParser.ADD);
				this.state = 405;
				this.match(trinoSqlParserParser.COLUMN);
				this.state = 409;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 406;
					this.match(trinoSqlParserParser.IF);
					this.state = 407;
					this.match(trinoSqlParserParser.NOT);
					this.state = 408;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 411;
				(localctx as AddColumnContext)._column = this.columnDefinition();
				}
				break;
			case 19:
				localctx = new SetTableAuthorizationContext(this, localctx);
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 413;
				this.match(trinoSqlParserParser.ALTER);
				this.state = 414;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 415;
				(localctx as SetTableAuthorizationContext)._tableName = this.qualifiedName();
				this.state = 416;
				this.match(trinoSqlParserParser.SET);
				this.state = 417;
				this.match(trinoSqlParserParser.AUTHORIZATION);
				this.state = 418;
				this.principal();
				}
				break;
			case 20:
				localctx = new AnalyzeContext(this, localctx);
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 420;
				this.match(trinoSqlParserParser.ANALYZE);
				this.state = 421;
				this.qualifiedName();
				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===241) {
					{
					this.state = 422;
					this.match(trinoSqlParserParser.WITH);
					this.state = 423;
					this.properties();
					}
				}

				}
				break;
			case 21:
				localctx = new CreateMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 426;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===156) {
					{
					this.state = 427;
					this.match(trinoSqlParserParser.OR);
					this.state = 428;
					this.match(trinoSqlParserParser.REPLACE);
					}
				}

				this.state = 431;
				this.match(trinoSqlParserParser.MATERIALIZED);
				this.state = 432;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 436;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 433;
					this.match(trinoSqlParserParser.IF);
					this.state = 434;
					this.match(trinoSqlParserParser.NOT);
					this.state = 435;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 438;
				this.qualifiedName();
				this.state = 441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===40) {
					{
					this.state = 439;
					this.match(trinoSqlParserParser.COMMENT);
					this.state = 440;
					this.string_();
					}
				}

				this.state = 445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===241) {
					{
					this.state = 443;
					this.match(trinoSqlParserParser.WITH);
					this.state = 444;
					this.properties();
					}
				}

				this.state = 447;
				this.match(trinoSqlParserParser.AS);
				this.state = 448;
				this.query();
				}
				break;
			case 22:
				localctx = new CreateViewContext(this, localctx);
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 450;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===156) {
					{
					this.state = 451;
					this.match(trinoSqlParserParser.OR);
					this.state = 452;
					this.match(trinoSqlParserParser.REPLACE);
					}
				}

				this.state = 455;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 456;
				this.qualifiedName();
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===40) {
					{
					this.state = 457;
					this.match(trinoSqlParserParser.COMMENT);
					this.state = 458;
					this.string_();
					}
				}

				this.state = 463;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===197) {
					{
					this.state = 461;
					this.match(trinoSqlParserParser.SECURITY);
					this.state = 462;
					_la = this._input.LA(1);
					if(!(_la===60 || _la===111)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 465;
				this.match(trinoSqlParserParser.AS);
				this.state = 466;
				this.query();
				}
				break;
			case 23:
				localctx = new RefreshMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 468;
				this.match(trinoSqlParserParser.REFRESH);
				this.state = 469;
				this.match(trinoSqlParserParser.MATERIALIZED);
				this.state = 470;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 471;
				this.qualifiedName();
				}
				break;
			case 24:
				localctx = new DropMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 24);
				{
				this.state = 472;
				this.match(trinoSqlParserParser.DROP);
				this.state = 473;
				this.match(trinoSqlParserParser.MATERIALIZED);
				this.state = 474;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 477;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 475;
					this.match(trinoSqlParserParser.IF);
					this.state = 476;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 479;
				this.qualifiedName();
				}
				break;
			case 25:
				localctx = new DropViewContext(this, localctx);
				this.enterOuterAlt(localctx, 25);
				{
				this.state = 480;
				this.match(trinoSqlParserParser.DROP);
				this.state = 481;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 484;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 482;
					this.match(trinoSqlParserParser.IF);
					this.state = 483;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 486;
				this.qualifiedName();
				}
				break;
			case 26:
				localctx = new RenameViewContext(this, localctx);
				this.enterOuterAlt(localctx, 26);
				{
				this.state = 487;
				this.match(trinoSqlParserParser.ALTER);
				this.state = 488;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 489;
				(localctx as RenameViewContext)._from_ = this.qualifiedName();
				this.state = 490;
				this.match(trinoSqlParserParser.RENAME);
				this.state = 491;
				this.match(trinoSqlParserParser.TO);
				this.state = 492;
				(localctx as RenameViewContext)._to = this.qualifiedName();
				}
				break;
			case 27:
				localctx = new SetViewAuthorizationContext(this, localctx);
				this.enterOuterAlt(localctx, 27);
				{
				this.state = 494;
				this.match(trinoSqlParserParser.ALTER);
				this.state = 495;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 496;
				(localctx as SetViewAuthorizationContext)._from_ = this.qualifiedName();
				this.state = 497;
				this.match(trinoSqlParserParser.SET);
				this.state = 498;
				this.match(trinoSqlParserParser.AUTHORIZATION);
				this.state = 499;
				this.principal();
				}
				break;
			case 28:
				localctx = new CallContext(this, localctx);
				this.enterOuterAlt(localctx, 28);
				{
				this.state = 501;
				this.match(trinoSqlParserParser.CALL);
				this.state = 502;
				this.qualifiedName();
				this.state = 503;
				this.match(trinoSqlParserParser.T__1);
				this.state = 512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 3751279891) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4289639607) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 3923771327) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4152344063) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 3756982255) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 2248659805) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 1023) !== 0)) {
					{
					this.state = 504;
					this.callArgument();
					this.state = 509;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 505;
						this.match(trinoSqlParserParser.T__3);
						this.state = 506;
						this.callArgument();
						}
						}
						this.state = 511;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 514;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 29:
				localctx = new CreateRoleContext(this, localctx);
				this.enterOuterAlt(localctx, 29);
				{
				this.state = 516;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 517;
				this.match(trinoSqlParserParser.ROLE);
				this.state = 518;
				(localctx as CreateRoleContext)._name = this.identifier();
				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===241) {
					{
					this.state = 519;
					this.match(trinoSqlParserParser.WITH);
					this.state = 520;
					this.match(trinoSqlParserParser.ADMIN);
					this.state = 521;
					this.grantor();
					}
				}

				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===102) {
					{
					this.state = 524;
					this.match(trinoSqlParserParser.IN);
					this.state = 525;
					(localctx as CreateRoleContext)._catalog = this.identifier();
					}
				}

				}
				break;
			case 30:
				localctx = new DropRoleContext(this, localctx);
				this.enterOuterAlt(localctx, 30);
				{
				this.state = 528;
				this.match(trinoSqlParserParser.DROP);
				this.state = 529;
				this.match(trinoSqlParserParser.ROLE);
				this.state = 530;
				(localctx as DropRoleContext)._name = this.identifier();
				}
				break;
			case 31:
				localctx = new GrantRolesContext(this, localctx);
				this.enterOuterAlt(localctx, 31);
				{
				this.state = 531;
				this.match(trinoSqlParserParser.GRANT);
				this.state = 532;
				this.roles();
				this.state = 533;
				this.match(trinoSqlParserParser.TO);
				this.state = 534;
				this.principal();
				this.state = 539;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 535;
					this.match(trinoSqlParserParser.T__3);
					this.state = 536;
					this.principal();
					}
					}
					this.state = 541;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===241) {
					{
					this.state = 542;
					this.match(trinoSqlParserParser.WITH);
					this.state = 543;
					this.match(trinoSqlParserParser.ADMIN);
					this.state = 544;
					this.match(trinoSqlParserParser.OPTION);
					}
				}

				this.state = 550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===91) {
					{
					this.state = 547;
					this.match(trinoSqlParserParser.GRANTED);
					this.state = 548;
					this.match(trinoSqlParserParser.BY);
					this.state = 549;
					this.grantor();
					}
				}

				this.state = 554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===102) {
					{
					this.state = 552;
					this.match(trinoSqlParserParser.IN);
					this.state = 553;
					(localctx as GrantRolesContext)._catalog = this.identifier();
					}
				}

				}
				break;
			case 32:
				localctx = new RevokeRolesContext(this, localctx);
				this.enterOuterAlt(localctx, 32);
				{
				this.state = 556;
				this.match(trinoSqlParserParser.REVOKE);
				this.state = 560;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 557;
					this.match(trinoSqlParserParser.ADMIN);
					this.state = 558;
					this.match(trinoSqlParserParser.OPTION);
					this.state = 559;
					this.match(trinoSqlParserParser.FOR);
					}
					break;
				}
				this.state = 562;
				this.roles();
				this.state = 563;
				this.match(trinoSqlParserParser.FROM);
				this.state = 564;
				this.principal();
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 565;
					this.match(trinoSqlParserParser.T__3);
					this.state = 566;
					this.principal();
					}
					}
					this.state = 571;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===91) {
					{
					this.state = 572;
					this.match(trinoSqlParserParser.GRANTED);
					this.state = 573;
					this.match(trinoSqlParserParser.BY);
					this.state = 574;
					this.grantor();
					}
				}

				}
				break;
			case 33:
				localctx = new SetRoleContext(this, localctx);
				this.enterOuterAlt(localctx, 33);
				{
				this.state = 577;
				this.match(trinoSqlParserParser.SET);
				this.state = 578;
				this.match(trinoSqlParserParser.ROLE);
				this.state = 582;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
				case 1:
					{
					this.state = 579;
					this.match(trinoSqlParserParser.ALL);
					}
					break;
				case 2:
					{
					this.state = 580;
					this.match(trinoSqlParserParser.NONE);
					}
					break;
				case 3:
					{
					this.state = 581;
					(localctx as SetRoleContext)._role = this.identifier();
					}
					break;
				}
				}
				break;
			case 34:
				localctx = new GrantContext(this, localctx);
				this.enterOuterAlt(localctx, 34);
				{
				this.state = 584;
				this.match(trinoSqlParserParser.GRANT);
				this.state = 595;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 61:
				case 107:
				case 199:
				case 230:
					{
					this.state = 585;
					this.privilege();
					this.state = 590;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 586;
						this.match(trinoSqlParserParser.T__3);
						this.state = 587;
						this.privilege();
						}
						}
						this.state = 592;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 20:
					{
					this.state = 593;
					this.match(trinoSqlParserParser.ALL);
					this.state = 594;
					this.match(trinoSqlParserParser.PRIVILEGES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 597;
				this.match(trinoSqlParserParser.ON);
				this.state = 599;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 54, this._ctx) ) {
				case 1:
					{
					this.state = 598;
					_la = this._input.LA(1);
					if(!(_la===194 || _la===211)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 601;
				this.qualifiedName();
				this.state = 602;
				this.match(trinoSqlParserParser.TO);
				this.state = 603;
				(localctx as GrantContext)._grantee = this.principal();
				this.state = 607;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===241) {
					{
					this.state = 604;
					this.match(trinoSqlParserParser.WITH);
					this.state = 605;
					this.match(trinoSqlParserParser.GRANT);
					this.state = 606;
					this.match(trinoSqlParserParser.OPTION);
					}
				}

				}
				break;
			case 35:
				localctx = new DenyContext(this, localctx);
				this.enterOuterAlt(localctx, 35);
				{
				this.state = 609;
				this.match(trinoSqlParserParser.DENY);
				this.state = 620;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 61:
				case 107:
				case 199:
				case 230:
					{
					this.state = 610;
					this.privilege();
					this.state = 615;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 611;
						this.match(trinoSqlParserParser.T__3);
						this.state = 612;
						this.privilege();
						}
						}
						this.state = 617;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 20:
					{
					this.state = 618;
					this.match(trinoSqlParserParser.ALL);
					this.state = 619;
					this.match(trinoSqlParserParser.PRIVILEGES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 622;
				this.match(trinoSqlParserParser.ON);
				this.state = 624;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 623;
					_la = this._input.LA(1);
					if(!(_la===194 || _la===211)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 626;
				this.qualifiedName();
				this.state = 627;
				this.match(trinoSqlParserParser.TO);
				this.state = 628;
				(localctx as DenyContext)._grantee = this.principal();
				}
				break;
			case 36:
				localctx = new RevokeContext(this, localctx);
				this.enterOuterAlt(localctx, 36);
				{
				this.state = 630;
				this.match(trinoSqlParserParser.REVOKE);
				this.state = 634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 631;
					this.match(trinoSqlParserParser.GRANT);
					this.state = 632;
					this.match(trinoSqlParserParser.OPTION);
					this.state = 633;
					this.match(trinoSqlParserParser.FOR);
					}
				}

				this.state = 646;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 61:
				case 107:
				case 199:
				case 230:
					{
					this.state = 636;
					this.privilege();
					this.state = 641;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 637;
						this.match(trinoSqlParserParser.T__3);
						this.state = 638;
						this.privilege();
						}
						}
						this.state = 643;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 20:
					{
					this.state = 644;
					this.match(trinoSqlParserParser.ALL);
					this.state = 645;
					this.match(trinoSqlParserParser.PRIVILEGES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 648;
				this.match(trinoSqlParserParser.ON);
				this.state = 650;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
				case 1:
					{
					this.state = 649;
					_la = this._input.LA(1);
					if(!(_la===194 || _la===211)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 652;
				this.qualifiedName();
				this.state = 653;
				this.match(trinoSqlParserParser.FROM);
				this.state = 654;
				(localctx as RevokeContext)._grantee = this.principal();
				}
				break;
			case 37:
				localctx = new ShowGrantsContext(this, localctx);
				this.enterOuterAlt(localctx, 37);
				{
				this.state = 656;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 657;
				this.match(trinoSqlParserParser.GRANTS);
				this.state = 663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===152) {
					{
					this.state = 658;
					this.match(trinoSqlParserParser.ON);
					this.state = 660;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===211) {
						{
						this.state = 659;
						this.match(trinoSqlParserParser.TABLE);
						}
					}

					this.state = 662;
					this.qualifiedName();
					}
				}

				}
				break;
			case 38:
				localctx = new ExplainContext(this, localctx);
				this.enterOuterAlt(localctx, 38);
				{
				this.state = 665;
				this.match(trinoSqlParserParser.EXPLAIN);
				this.state = 667;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
				case 1:
					{
					this.state = 666;
					this.match(trinoSqlParserParser.ANALYZE);
					}
					break;
				}
				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===236) {
					{
					this.state = 669;
					this.match(trinoSqlParserParser.VERBOSE);
					}
				}

				this.state = 683;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
				case 1:
					{
					this.state = 672;
					this.match(trinoSqlParserParser.T__1);
					this.state = 673;
					this.explainOption();
					this.state = 678;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 674;
						this.match(trinoSqlParserParser.T__3);
						this.state = 675;
						this.explainOption();
						}
						}
						this.state = 680;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 681;
					this.match(trinoSqlParserParser.T__2);
					}
					break;
				}
				this.state = 685;
				this.statement();
				}
				break;
			case 39:
				localctx = new ShowCreateTableContext(this, localctx);
				this.enterOuterAlt(localctx, 39);
				{
				this.state = 686;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 687;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 688;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 689;
				this.qualifiedName();
				}
				break;
			case 40:
				localctx = new ShowCreateSchemaContext(this, localctx);
				this.enterOuterAlt(localctx, 40);
				{
				this.state = 690;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 691;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 692;
				this.match(trinoSqlParserParser.SCHEMA);
				this.state = 693;
				this.qualifiedName();
				}
				break;
			case 41:
				localctx = new ShowCreateViewContext(this, localctx);
				this.enterOuterAlt(localctx, 41);
				{
				this.state = 694;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 695;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 696;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 697;
				this.qualifiedName();
				}
				break;
			case 42:
				localctx = new ShowCreateMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 42);
				{
				this.state = 698;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 699;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 700;
				this.match(trinoSqlParserParser.MATERIALIZED);
				this.state = 701;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 702;
				this.qualifiedName();
				}
				break;
			case 43:
				localctx = new ShowTablesContext(this, localctx);
				this.enterOuterAlt(localctx, 43);
				{
				this.state = 703;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 704;
				this.match(trinoSqlParserParser.TABLES);
				this.state = 707;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===87 || _la===102) {
					{
					this.state = 705;
					_la = this._input.LA(1);
					if(!(_la===87 || _la===102)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 706;
					this.qualifiedName();
					}
				}

				this.state = 715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===121) {
					{
					this.state = 709;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 710;
					(localctx as ShowTablesContext)._pattern = this.string_();
					this.state = 713;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 711;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 712;
						(localctx as ShowTablesContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 44:
				localctx = new ShowSchemasContext(this, localctx);
				this.enterOuterAlt(localctx, 44);
				{
				this.state = 717;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 718;
				this.match(trinoSqlParserParser.SCHEMAS);
				this.state = 721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===87 || _la===102) {
					{
					this.state = 719;
					_la = this._input.LA(1);
					if(!(_la===87 || _la===102)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 720;
					this.identifier();
					}
				}

				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===121) {
					{
					this.state = 723;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 724;
					(localctx as ShowSchemasContext)._pattern = this.string_();
					this.state = 727;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 725;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 726;
						(localctx as ShowSchemasContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 45:
				localctx = new ShowCatalogsContext(this, localctx);
				this.enterOuterAlt(localctx, 45);
				{
				this.state = 731;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 732;
				this.match(trinoSqlParserParser.CATALOGS);
				this.state = 739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===121) {
					{
					this.state = 733;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 734;
					(localctx as ShowCatalogsContext)._pattern = this.string_();
					this.state = 737;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 735;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 736;
						(localctx as ShowCatalogsContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 46:
				localctx = new ShowColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 46);
				{
				this.state = 741;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 742;
				this.match(trinoSqlParserParser.COLUMNS);
				this.state = 743;
				_la = this._input.LA(1);
				if(!(_la===87 || _la===102)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 745;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1596214615) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 3134381375) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 3162472435) !== 0) || ((((_la - 154)) & ~0x1F) === 0 && ((1 << (_la - 154)) & 4286316499) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & 4009750519) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 262585051) !== 0) || ((((_la - 266)) & ~0x1F) === 0 && ((1 << (_la - 266)) & 15) !== 0)) {
					{
					this.state = 744;
					this.qualifiedName();
					}
				}

				this.state = 753;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===121) {
					{
					this.state = 747;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 748;
					(localctx as ShowColumnsContext)._pattern = this.string_();
					this.state = 751;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 749;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 750;
						(localctx as ShowColumnsContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 47:
				localctx = new ShowStatsContext(this, localctx);
				this.enterOuterAlt(localctx, 47);
				{
				this.state = 755;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 756;
				this.match(trinoSqlParserParser.STATS);
				this.state = 757;
				this.match(trinoSqlParserParser.FOR);
				this.state = 758;
				this.qualifiedName();
				}
				break;
			case 48:
				localctx = new ShowStatsForQueryContext(this, localctx);
				this.enterOuterAlt(localctx, 48);
				{
				this.state = 759;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 760;
				this.match(trinoSqlParserParser.STATS);
				this.state = 761;
				this.match(trinoSqlParserParser.FOR);
				this.state = 762;
				this.match(trinoSqlParserParser.T__1);
				this.state = 763;
				this.query();
				this.state = 764;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 49:
				localctx = new ShowRolesContext(this, localctx);
				this.enterOuterAlt(localctx, 49);
				{
				this.state = 766;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 768;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===47) {
					{
					this.state = 767;
					this.match(trinoSqlParserParser.CURRENT);
					}
				}

				this.state = 770;
				this.match(trinoSqlParserParser.ROLES);
				this.state = 773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===87 || _la===102) {
					{
					this.state = 771;
					_la = this._input.LA(1);
					if(!(_la===87 || _la===102)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 772;
					this.identifier();
					}
				}

				}
				break;
			case 50:
				localctx = new ShowRoleGrantsContext(this, localctx);
				this.enterOuterAlt(localctx, 50);
				{
				this.state = 775;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 776;
				this.match(trinoSqlParserParser.ROLE);
				this.state = 777;
				this.match(trinoSqlParserParser.GRANTS);
				this.state = 780;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===87 || _la===102) {
					{
					this.state = 778;
					_la = this._input.LA(1);
					if(!(_la===87 || _la===102)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 779;
					this.identifier();
					}
				}

				}
				break;
			case 51:
				localctx = new ShowColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 51);
				{
				this.state = 782;
				this.match(trinoSqlParserParser.DESCRIBE);
				this.state = 783;
				this.qualifiedName();
				}
				break;
			case 52:
				localctx = new ShowColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 52);
				{
				this.state = 784;
				this.match(trinoSqlParserParser.DESC);
				this.state = 785;
				this.qualifiedName();
				}
				break;
			case 53:
				localctx = new ShowFunctionsContext(this, localctx);
				this.enterOuterAlt(localctx, 53);
				{
				this.state = 786;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 787;
				this.match(trinoSqlParserParser.FUNCTIONS);
				this.state = 794;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===121) {
					{
					this.state = 788;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 789;
					(localctx as ShowFunctionsContext)._pattern = this.string_();
					this.state = 792;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 790;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 791;
						(localctx as ShowFunctionsContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 54:
				localctx = new ShowSessionContext(this, localctx);
				this.enterOuterAlt(localctx, 54);
				{
				this.state = 796;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 797;
				this.match(trinoSqlParserParser.SESSION);
				this.state = 804;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===121) {
					{
					this.state = 798;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 799;
					(localctx as ShowSessionContext)._pattern = this.string_();
					this.state = 802;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 800;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 801;
						(localctx as ShowSessionContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 55:
				localctx = new SetSessionContext(this, localctx);
				this.enterOuterAlt(localctx, 55);
				{
				this.state = 806;
				this.match(trinoSqlParserParser.SET);
				this.state = 807;
				this.match(trinoSqlParserParser.SESSION);
				this.state = 808;
				this.qualifiedName();
				this.state = 809;
				this.match(trinoSqlParserParser.EQ);
				this.state = 810;
				this.expression();
				}
				break;
			case 56:
				localctx = new ResetSessionContext(this, localctx);
				this.enterOuterAlt(localctx, 56);
				{
				this.state = 812;
				this.match(trinoSqlParserParser.RESET);
				this.state = 813;
				this.match(trinoSqlParserParser.SESSION);
				this.state = 814;
				this.qualifiedName();
				}
				break;
			case 57:
				localctx = new StartTransactionContext(this, localctx);
				this.enterOuterAlt(localctx, 57);
				{
				this.state = 815;
				this.match(trinoSqlParserParser.START);
				this.state = 816;
				this.match(trinoSqlParserParser.TRANSACTION);
				this.state = 825;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===114 || _la===176) {
					{
					this.state = 817;
					this.transactionMode();
					this.state = 822;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 818;
						this.match(trinoSqlParserParser.T__3);
						this.state = 819;
						this.transactionMode();
						}
						}
						this.state = 824;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;
			case 58:
				localctx = new CommitContext(this, localctx);
				this.enterOuterAlt(localctx, 58);
				{
				this.state = 827;
				this.match(trinoSqlParserParser.COMMIT);
				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===243) {
					{
					this.state = 828;
					this.match(trinoSqlParserParser.WORK);
					}
				}

				}
				break;
			case 59:
				localctx = new RollbackContext(this, localctx);
				this.enterOuterAlt(localctx, 59);
				{
				this.state = 831;
				this.match(trinoSqlParserParser.ROLLBACK);
				this.state = 833;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===243) {
					{
					this.state = 832;
					this.match(trinoSqlParserParser.WORK);
					}
				}

				}
				break;
			case 60:
				localctx = new PrepareContext(this, localctx);
				this.enterOuterAlt(localctx, 60);
				{
				this.state = 835;
				this.match(trinoSqlParserParser.PREPARE);
				this.state = 836;
				this.identifier();
				this.state = 837;
				this.match(trinoSqlParserParser.FROM);
				this.state = 838;
				this.statement();
				}
				break;
			case 61:
				localctx = new DeallocateContext(this, localctx);
				this.enterOuterAlt(localctx, 61);
				{
				this.state = 840;
				this.match(trinoSqlParserParser.DEALLOCATE);
				this.state = 841;
				this.match(trinoSqlParserParser.PREPARE);
				this.state = 842;
				this.identifier();
				}
				break;
			case 62:
				localctx = new ExecuteContext(this, localctx);
				this.enterOuterAlt(localctx, 62);
				{
				this.state = 843;
				this.match(trinoSqlParserParser.EXECUTE);
				this.state = 844;
				this.identifier();
				this.state = 854;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===233) {
					{
					this.state = 845;
					this.match(trinoSqlParserParser.USING);
					this.state = 846;
					this.expression();
					this.state = 851;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 847;
						this.match(trinoSqlParserParser.T__3);
						this.state = 848;
						this.expression();
						}
						}
						this.state = 853;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;
			case 63:
				localctx = new DescribeInputContext(this, localctx);
				this.enterOuterAlt(localctx, 63);
				{
				this.state = 856;
				this.match(trinoSqlParserParser.DESCRIBE);
				this.state = 857;
				this.match(trinoSqlParserParser.INPUT);
				this.state = 858;
				this.identifier();
				}
				break;
			case 64:
				localctx = new DescribeOutputContext(this, localctx);
				this.enterOuterAlt(localctx, 64);
				{
				this.state = 859;
				this.match(trinoSqlParserParser.DESCRIBE);
				this.state = 860;
				this.match(trinoSqlParserParser.OUTPUT);
				this.state = 861;
				this.identifier();
				}
				break;
			case 65:
				localctx = new SetPathContext(this, localctx);
				this.enterOuterAlt(localctx, 65);
				{
				this.state = 862;
				this.match(trinoSqlParserParser.SET);
				this.state = 863;
				this.match(trinoSqlParserParser.PATH);
				this.state = 864;
				this.pathSpecification();
				}
				break;
			case 66:
				localctx = new SetTimeZoneContext(this, localctx);
				this.enterOuterAlt(localctx, 66);
				{
				this.state = 865;
				this.match(trinoSqlParserParser.SET);
				this.state = 866;
				this.match(trinoSqlParserParser.TIME);
				this.state = 867;
				this.match(trinoSqlParserParser.ZONE);
				this.state = 870;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 93, this._ctx) ) {
				case 1:
					{
					this.state = 868;
					this.match(trinoSqlParserParser.LOCAL);
					}
					break;
				case 2:
					{
					this.state = 869;
					this.expression();
					}
					break;
				}
				}
				break;
			case 67:
				localctx = new UpdateContext(this, localctx);
				this.enterOuterAlt(localctx, 67);
				{
				this.state = 872;
				this.match(trinoSqlParserParser.UPDATE);
				this.state = 873;
				this.qualifiedName();
				this.state = 874;
				this.match(trinoSqlParserParser.SET);
				this.state = 875;
				this.updateAssignment();
				this.state = 880;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 876;
					this.match(trinoSqlParserParser.T__3);
					this.state = 877;
					this.updateAssignment();
					}
					}
					this.state = 882;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===239) {
					{
					this.state = 883;
					this.match(trinoSqlParserParser.WHERE);
					this.state = 884;
					(localctx as UpdateContext)._where = this.booleanExpression(0);
					}
				}

				}
				break;
			case 68:
				localctx = new MergeContext(this, localctx);
				this.enterOuterAlt(localctx, 68);
				{
				this.state = 887;
				this.match(trinoSqlParserParser.MERGE);
				this.state = 888;
				this.match(trinoSqlParserParser.INTO);
				this.state = 889;
				this.qualifiedName();
				this.state = 894;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140015023) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1596214615) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 3134381375) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 3162472435) !== 0) || ((((_la - 154)) & ~0x1F) === 0 && ((1 << (_la - 154)) & 4286316499) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & 4009750519) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 262585051) !== 0) || ((((_la - 266)) & ~0x1F) === 0 && ((1 << (_la - 266)) & 15) !== 0)) {
					{
					this.state = 891;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===26) {
						{
						this.state = 890;
						this.match(trinoSqlParserParser.AS);
						}
					}

					this.state = 893;
					this.identifier();
					}
				}

				this.state = 896;
				this.match(trinoSqlParserParser.USING);
				this.state = 897;
				this.relation(0);
				this.state = 898;
				this.match(trinoSqlParserParser.ON);
				this.state = 899;
				this.expression();
				this.state = 901;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 900;
					this.mergeCase();
					}
					}
					this.state = 903;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===238);
				}
				break;
			case 69:
				localctx = new ShowTableCommentContext(this, localctx);
				this.enterOuterAlt(localctx, 69);
				{
				this.state = 905;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 906;
				this.match(trinoSqlParserParser.COMMENT);
				this.state = 907;
				this.match(trinoSqlParserParser.ON);
				this.state = 908;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 909;
				this.qualifiedName();
				}
				break;
			case 70:
				localctx = new ShowColumnCommentContext(this, localctx);
				this.enterOuterAlt(localctx, 70);
				{
				this.state = 910;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 911;
				this.match(trinoSqlParserParser.COMMENT);
				this.state = 912;
				this.match(trinoSqlParserParser.ON);
				this.state = 913;
				this.match(trinoSqlParserParser.COLUMN);
				this.state = 914;
				this.qualifiedName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let localctx: QueryContext = new QueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, trinoSqlParserParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 918;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===241) {
				{
				this.state = 917;
				this.with_();
				}
			}

			this.state = 920;
			this.queryNoWith();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public with_(): WithContext {
		let localctx: WithContext = new WithContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, trinoSqlParserParser.RULE_with);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 922;
			this.match(trinoSqlParserParser.WITH);
			this.state = 924;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===177) {
				{
				this.state = 923;
				this.match(trinoSqlParserParser.RECURSIVE);
				}
			}

			this.state = 926;
			this.namedQuery();
			this.state = 931;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 927;
				this.match(trinoSqlParserParser.T__3);
				this.state = 928;
				this.namedQuery();
				}
				}
				this.state = 933;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tableElement(): TableElementContext {
		let localctx: TableElementContext = new TableElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, trinoSqlParserParser.RULE_tableElement);
		try {
			this.state = 936;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 17:
			case 18:
			case 19:
			case 20:
			case 22:
			case 24:
			case 25:
			case 27:
			case 28:
			case 29:
			case 30:
			case 33:
			case 34:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 47:
			case 56:
			case 57:
			case 58:
			case 60:
			case 62:
			case 64:
			case 66:
			case 67:
			case 70:
			case 74:
			case 77:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 86:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 97:
			case 99:
			case 100:
			case 101:
			case 103:
			case 104:
			case 106:
			case 109:
			case 111:
			case 112:
			case 114:
			case 116:
			case 117:
			case 118:
			case 120:
			case 122:
			case 123:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 148:
			case 149:
			case 150:
			case 151:
			case 153:
			case 154:
			case 155:
			case 158:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 173:
			case 174:
			case 175:
			case 176:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 187:
			case 188:
			case 189:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 200:
			case 201:
			case 202:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 209:
			case 210:
			case 212:
			case 213:
			case 214:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 222:
			case 223:
			case 225:
			case 226:
			case 228:
			case 230:
			case 231:
			case 232:
			case 234:
			case 236:
			case 237:
			case 240:
			case 242:
			case 243:
			case 244:
			case 245:
			case 246:
			case 266:
			case 267:
			case 268:
			case 269:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 934;
				this.columnDefinition();
				}
				break;
			case 121:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 935;
				this.likeClause();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public columnDefinition(): ColumnDefinitionContext {
		let localctx: ColumnDefinitionContext = new ColumnDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, trinoSqlParserParser.RULE_columnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 938;
			this.identifier();
			this.state = 939;
			this.type_(0);
			this.state = 942;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===146) {
				{
				this.state = 940;
				this.match(trinoSqlParserParser.NOT);
				this.state = 941;
				this.match(trinoSqlParserParser.NULL);
				}
			}

			this.state = 946;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===40) {
				{
				this.state = 944;
				this.match(trinoSqlParserParser.COMMENT);
				this.state = 945;
				this.string_();
				}
			}

			this.state = 950;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===241) {
				{
				this.state = 948;
				this.match(trinoSqlParserParser.WITH);
				this.state = 949;
				this.properties();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public likeClause(): LikeClauseContext {
		let localctx: LikeClauseContext = new LikeClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, trinoSqlParserParser.RULE_likeClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 952;
			this.match(trinoSqlParserParser.LIKE);
			this.state = 953;
			this.qualifiedName();
			this.state = 956;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===74 || _la===103) {
				{
				this.state = 954;
				localctx._optionType = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===74 || _la===103)) {
				    localctx._optionType = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 955;
				this.match(trinoSqlParserParser.PROPERTIES);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public properties(): PropertiesContext {
		let localctx: PropertiesContext = new PropertiesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, trinoSqlParserParser.RULE_properties);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 958;
			this.match(trinoSqlParserParser.T__1);
			this.state = 959;
			this.property();
			this.state = 964;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 960;
				this.match(trinoSqlParserParser.T__3);
				this.state = 961;
				this.property();
				}
				}
				this.state = 966;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 967;
			this.match(trinoSqlParserParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public property(): PropertyContext {
		let localctx: PropertyContext = new PropertyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, trinoSqlParserParser.RULE_property);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 969;
			this.identifier();
			this.state = 970;
			this.match(trinoSqlParserParser.EQ);
			this.state = 971;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public queryNoWith(): QueryNoWithContext {
		let localctx: QueryNoWithContext = new QueryNoWithContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, trinoSqlParserParser.RULE_queryNoWith);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 973;
			this.queryTerm(0);
			this.state = 984;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===157) {
				{
				this.state = 974;
				this.match(trinoSqlParserParser.ORDER);
				this.state = 975;
				this.match(trinoSqlParserParser.BY);
				this.state = 976;
				this.sortItem();
				this.state = 981;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 977;
					this.match(trinoSqlParserParser.T__3);
					this.state = 978;
					this.sortItem();
					}
					}
					this.state = 983;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 991;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===150) {
				{
				this.state = 986;
				this.match(trinoSqlParserParser.OFFSET);
				this.state = 987;
				localctx._offset = this.rowCount();
				this.state = 989;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===191 || _la===192) {
					{
					this.state = 988;
					_la = this._input.LA(1);
					if(!(_la===191 || _la===192)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				}
			}

			this.state = 1006;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 122:
				{
				{
				this.state = 993;
				this.match(trinoSqlParserParser.LIMIT);
				this.state = 994;
				localctx._limit = this.limitRowCount();
				}
				}
				break;
			case 80:
				{
				{
				this.state = 995;
				this.match(trinoSqlParserParser.FETCH);
				this.state = 996;
				_la = this._input.LA(1);
				if(!(_la===83 || _la===138)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 998;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===259 || _la===263) {
					{
					this.state = 997;
					localctx._fetchFirst = this.rowCount();
					}
				}

				this.state = 1000;
				_la = this._input.LA(1);
				if(!(_la===191 || _la===192)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1004;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 154:
					{
					this.state = 1001;
					this.match(trinoSqlParserParser.ONLY);
					}
					break;
				case 241:
					{
					this.state = 1002;
					this.match(trinoSqlParserParser.WITH);
					this.state = 1003;
					this.match(trinoSqlParserParser.TIES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;
			case 3:
			case 241:
			case 270:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public limitRowCount(): LimitRowCountContext {
		let localctx: LimitRowCountContext = new LimitRowCountContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, trinoSqlParserParser.RULE_limitRowCount);
		try {
			this.state = 1010;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1008;
				this.match(trinoSqlParserParser.ALL);
				}
				break;
			case 259:
			case 263:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1009;
				this.rowCount();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rowCount(): RowCountContext {
		let localctx: RowCountContext = new RowCountContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, trinoSqlParserParser.RULE_rowCount);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1012;
			_la = this._input.LA(1);
			if(!(_la===259 || _la===263)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public queryTerm(): QueryTermContext;
	public queryTerm(_p: number): QueryTermContext;
	// @RuleVersion(0)
	public queryTerm(_p?: number): QueryTermContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: QueryTermContext = new QueryTermContext(this, this._ctx, _parentState);
		let _prevctx: QueryTermContext = localctx;
		let _startState: number = 36;
		this.enterRecursionRule(localctx, 36, trinoSqlParserParser.RULE_queryTerm, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new QueryTermDefaultContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 1015;
			this.queryPrimary();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1031;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 120, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1029;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
					case 1:
						{
						localctx = new SetOperationContext(this, new QueryTermContext(this, _parentctx, _parentState));
						(localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_queryTerm);
						this.state = 1017;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1018;
						(localctx as SetOperationContext)._operator = this.match(trinoSqlParserParser.INTERSECT);
						this.state = 1020;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===20 || _la===65) {
							{
							this.state = 1019;
							this.setQuantifier();
							}
						}

						this.state = 1022;
						(localctx as SetOperationContext)._right = this.queryTerm(3);
						}
						break;
					case 2:
						{
						localctx = new SetOperationContext(this, new QueryTermContext(this, _parentctx, _parentState));
						(localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_queryTerm);
						this.state = 1023;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1024;
						(localctx as SetOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===73 || _la===227)) {
						    (localctx as SetOperationContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1026;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===20 || _la===65) {
							{
							this.state = 1025;
							this.setQuantifier();
							}
						}

						this.state = 1028;
						(localctx as SetOperationContext)._right = this.queryTerm(2);
						}
						break;
					}
					}
				}
				this.state = 1033;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 120, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public queryPrimary(): QueryPrimaryContext {
		let localctx: QueryPrimaryContext = new QueryPrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, trinoSqlParserParser.RULE_queryPrimary);
		try {
			let _alt: number;
			this.state = 1050;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 199:
				localctx = new QueryPrimaryDefaultContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1034;
				this.querySpecification();
				}
				break;
			case 211:
				localctx = new TableContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1035;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 1036;
				this.qualifiedName();
				}
				break;
			case 235:
				localctx = new InlineTableContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1037;
				this.match(trinoSqlParserParser.VALUES);
				this.state = 1038;
				this.expression();
				this.state = 1043;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 121, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1039;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1040;
						this.expression();
						}
						}
					}
					this.state = 1045;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 121, this._ctx);
				}
				}
				break;
			case 2:
				localctx = new SubqueryContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1046;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1047;
				this.queryNoWith();
				this.state = 1048;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sortItem(): SortItemContext {
		let localctx: SortItemContext = new SortItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, trinoSqlParserParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1052;
			this.expression();
			this.state = 1054;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===27 || _la===62) {
				{
				this.state = 1053;
				localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===27 || _la===62)) {
				    localctx._ordering = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 1058;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===149) {
				{
				this.state = 1056;
				this.match(trinoSqlParserParser.NULLS);
				this.state = 1057;
				localctx._nullOrdering = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===83 || _la===117)) {
				    localctx._nullOrdering = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public querySpecification(): QuerySpecificationContext {
		let localctx: QuerySpecificationContext = new QuerySpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, trinoSqlParserParser.RULE_querySpecification);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1060;
			this.match(trinoSqlParserParser.SELECT);
			this.state = 1062;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				{
				this.state = 1061;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1064;
			this.selectItem();
			this.state = 1069;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 126, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1065;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1066;
					this.selectItem();
					}
					}
				}
				this.state = 1071;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 126, this._ctx);
			}
			this.state = 1081;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				{
				this.state = 1072;
				this.match(trinoSqlParserParser.FROM);
				this.state = 1073;
				this.relation(0);
				this.state = 1078;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 127, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1074;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1075;
						this.relation(0);
						}
						}
					}
					this.state = 1080;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 127, this._ctx);
				}
				}
				break;
			}
			this.state = 1085;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				{
				this.state = 1083;
				this.match(trinoSqlParserParser.WHERE);
				this.state = 1084;
				localctx._where = this.booleanExpression(0);
				}
				break;
			}
			this.state = 1090;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				{
				this.state = 1087;
				this.match(trinoSqlParserParser.GROUP);
				this.state = 1088;
				this.match(trinoSqlParserParser.BY);
				this.state = 1089;
				this.groupBy();
				}
				break;
			}
			this.state = 1094;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				{
				this.state = 1092;
				this.match(trinoSqlParserParser.HAVING);
				this.state = 1093;
				localctx._having = this.booleanExpression(0);
				}
				break;
			}
			this.state = 1105;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				{
				this.state = 1096;
				this.match(trinoSqlParserParser.WINDOW);
				this.state = 1097;
				this.windowDefinition();
				this.state = 1102;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 132, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1098;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1099;
						this.windowDefinition();
						}
						}
					}
					this.state = 1104;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 132, this._ctx);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupBy(): GroupByContext {
		let localctx: GroupByContext = new GroupByContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, trinoSqlParserParser.RULE_groupBy);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1108;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				{
				this.state = 1107;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1110;
			this.groupingElement();
			this.state = 1115;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 135, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1111;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1112;
					this.groupingElement();
					}
					}
				}
				this.state = 1117;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 135, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupingElement(): GroupingElementContext {
		let localctx: GroupingElementContext = new GroupingElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, trinoSqlParserParser.RULE_groupingElement);
		let _la: number;
		try {
			this.state = 1158;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				localctx = new SingleGroupingSetContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1118;
				this.groupingSet();
				}
				break;
			case 2:
				localctx = new RollupContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1119;
				this.match(trinoSqlParserParser.ROLLUP);
				this.state = 1120;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 3751279891) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4289639607) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 3923771327) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4152344063) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 3756982255) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 2248659805) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 1023) !== 0)) {
					{
					this.state = 1121;
					this.expression();
					this.state = 1126;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1122;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1123;
						this.expression();
						}
						}
						this.state = 1128;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1131;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 3:
				localctx = new CubeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1132;
				this.match(trinoSqlParserParser.CUBE);
				this.state = 1133;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 3751279891) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4289639607) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 3923771327) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4152344063) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 3756982255) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 2248659805) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 1023) !== 0)) {
					{
					this.state = 1134;
					this.expression();
					this.state = 1139;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1135;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1136;
						this.expression();
						}
						}
						this.state = 1141;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1144;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 4:
				localctx = new MultipleGroupingSetsContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1145;
				this.match(trinoSqlParserParser.GROUPING);
				this.state = 1146;
				this.match(trinoSqlParserParser.SETS);
				this.state = 1147;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1148;
				this.groupingSet();
				this.state = 1153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1149;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1150;
					this.groupingSet();
					}
					}
					this.state = 1155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1156;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupingSet(): GroupingSetContext {
		let localctx: GroupingSetContext = new GroupingSetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, trinoSqlParserParser.RULE_groupingSet);
		let _la: number;
		try {
			this.state = 1173;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1160;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 3751279891) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4289639607) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 3923771327) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4152344063) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 3756982255) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 2248659805) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 1023) !== 0)) {
					{
					this.state = 1161;
					this.expression();
					this.state = 1166;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1162;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1163;
						this.expression();
						}
						}
						this.state = 1168;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1171;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1172;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public windowDefinition(): WindowDefinitionContext {
		let localctx: WindowDefinitionContext = new WindowDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, trinoSqlParserParser.RULE_windowDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1175;
			localctx._name = this.identifier();
			this.state = 1176;
			this.match(trinoSqlParserParser.AS);
			this.state = 1177;
			this.match(trinoSqlParserParser.T__1);
			this.state = 1178;
			this.windowSpecification();
			this.state = 1179;
			this.match(trinoSqlParserParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public windowSpecification(): WindowSpecificationContext {
		let localctx: WindowSpecificationContext = new WindowSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, trinoSqlParserParser.RULE_windowSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1182;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 1181;
				localctx._existingWindowName = this.identifier();
				}
				break;
			}
			this.state = 1194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===162) {
				{
				this.state = 1184;
				this.match(trinoSqlParserParser.PARTITION);
				this.state = 1185;
				this.match(trinoSqlParserParser.BY);
				this.state = 1186;
				localctx._expression = this.expression();
				localctx._partition.push(localctx._expression);
				this.state = 1191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1187;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1188;
					localctx._expression = this.expression();
					localctx._partition.push(localctx._expression);
					}
					}
					this.state = 1193;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===157) {
				{
				this.state = 1196;
				this.match(trinoSqlParserParser.ORDER);
				this.state = 1197;
				this.match(trinoSqlParserParser.BY);
				this.state = 1198;
				this.sortItem();
				this.state = 1203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1199;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1200;
					this.sortItem();
					}
					}
					this.state = 1205;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===97 || _la===133 || _la===175 || _la===192) {
				{
				this.state = 1208;
				this.windowFrame();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namedQuery(): NamedQueryContext {
		let localctx: NamedQueryContext = new NamedQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, trinoSqlParserParser.RULE_namedQuery);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1211;
			localctx._name = this.identifier();
			this.state = 1213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 1212;
				this.columnAliases();
				}
			}

			this.state = 1215;
			this.match(trinoSqlParserParser.AS);
			this.state = 1216;
			this.match(trinoSqlParserParser.T__1);
			this.state = 1217;
			this.query();
			this.state = 1218;
			this.match(trinoSqlParserParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setQuantifier(): SetQuantifierContext {
		let localctx: SetQuantifierContext = new SetQuantifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, trinoSqlParserParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1220;
			_la = this._input.LA(1);
			if(!(_la===20 || _la===65)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selectItem(): SelectItemContext {
		let localctx: SelectItemContext = new SelectItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, trinoSqlParserParser.RULE_selectItem);
		let _la: number;
		try {
			this.state = 1237;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				localctx = new SelectSingleContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1222;
				this.expression();
				this.state = 1227;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 153, this._ctx) ) {
				case 1:
					{
					this.state = 1224;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===26) {
						{
						this.state = 1223;
						this.match(trinoSqlParserParser.AS);
						}
					}

					this.state = 1226;
					this.identifier();
					}
					break;
				}
				}
				break;
			case 2:
				localctx = new SelectAllContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1229;
				this.primaryExpression(0);
				this.state = 1230;
				this.match(trinoSqlParserParser.T__0);
				this.state = 1231;
				this.match(trinoSqlParserParser.ASTERISK);
				this.state = 1234;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 154, this._ctx) ) {
				case 1:
					{
					this.state = 1232;
					this.match(trinoSqlParserParser.AS);
					this.state = 1233;
					this.columnAliases();
					}
					break;
				}
				}
				break;
			case 3:
				localctx = new SelectAllContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1236;
				this.match(trinoSqlParserParser.ASTERISK);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public relation(): RelationContext;
	public relation(_p: number): RelationContext;
	// @RuleVersion(0)
	public relation(_p?: number): RelationContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: RelationContext = new RelationContext(this, this._ctx, _parentState);
		let _prevctx: RelationContext = localctx;
		let _startState: number = 60;
		this.enterRecursionRule(localctx, 60, trinoSqlParserParser.RULE_relation, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new RelationDefaultContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 1240;
			this.sampledRelation();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1260;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 157, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new JoinRelationContext(this, new RelationContext(this, _parentctx, _parentState));
					(localctx as JoinRelationContext)._left = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_relation);
					this.state = 1242;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1256;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 45:
						{
						this.state = 1243;
						this.match(trinoSqlParserParser.CROSS);
						this.state = 1244;
						this.match(trinoSqlParserParser.JOIN);
						this.state = 1245;
						(localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					case 88:
					case 105:
					case 115:
					case 119:
					case 186:
						{
						this.state = 1246;
						this.joinType();
						this.state = 1247;
						this.match(trinoSqlParserParser.JOIN);
						this.state = 1248;
						(localctx as JoinRelationContext)._rightRelation = this.relation(0);
						this.state = 1249;
						this.joinCriteria();
						}
						break;
					case 137:
						{
						this.state = 1251;
						this.match(trinoSqlParserParser.NATURAL);
						this.state = 1252;
						this.joinType();
						this.state = 1253;
						this.match(trinoSqlParserParser.JOIN);
						this.state = 1254;
						(localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 1262;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 157, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public joinType(): JoinTypeContext {
		let localctx: JoinTypeContext = new JoinTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, trinoSqlParserParser.RULE_joinType);
		let _la: number;
		try {
			this.state = 1278;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 105:
			case 115:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===105) {
					{
					this.state = 1263;
					this.match(trinoSqlParserParser.INNER);
					}
				}

				}
				break;
			case 119:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1266;
				this.match(trinoSqlParserParser.LEFT);
				this.state = 1268;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===159) {
					{
					this.state = 1267;
					this.match(trinoSqlParserParser.OUTER);
					}
				}

				}
				break;
			case 186:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1270;
				this.match(trinoSqlParserParser.RIGHT);
				this.state = 1272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===159) {
					{
					this.state = 1271;
					this.match(trinoSqlParserParser.OUTER);
					}
				}

				}
				break;
			case 88:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1274;
				this.match(trinoSqlParserParser.FULL);
				this.state = 1276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===159) {
					{
					this.state = 1275;
					this.match(trinoSqlParserParser.OUTER);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public joinCriteria(): JoinCriteriaContext {
		let localctx: JoinCriteriaContext = new JoinCriteriaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, trinoSqlParserParser.RULE_joinCriteria);
		let _la: number;
		try {
			this.state = 1294;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 152:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1280;
				this.match(trinoSqlParserParser.ON);
				this.state = 1281;
				this.booleanExpression(0);
				}
				break;
			case 233:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1282;
				this.match(trinoSqlParserParser.USING);
				this.state = 1283;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1284;
				this.identifier();
				this.state = 1289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1285;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1286;
					this.identifier();
					}
					}
					this.state = 1291;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1292;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sampledRelation(): SampledRelationContext {
		let localctx: SampledRelationContext = new SampledRelationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, trinoSqlParserParser.RULE_sampledRelation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1296;
			this.patternRecognition();
			this.state = 1303;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 165, this._ctx) ) {
			case 1:
				{
				this.state = 1297;
				this.match(trinoSqlParserParser.TABLESAMPLE);
				this.state = 1298;
				this.sampleType();
				this.state = 1299;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1300;
				localctx._percentage = this.expression();
				this.state = 1301;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sampleType(): SampleTypeContext {
		let localctx: SampleTypeContext = new SampleTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, trinoSqlParserParser.RULE_sampleType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1305;
			_la = this._input.LA(1);
			if(!(_la===30 || _la===210)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternRecognition(): PatternRecognitionContext {
		let localctx: PatternRecognitionContext = new PatternRecognitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, trinoSqlParserParser.RULE_patternRecognition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1307;
			this.aliasedRelation();
			this.state = 1390;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				{
				this.state = 1308;
				this.match(trinoSqlParserParser.MATCH_RECOGNIZE);
				this.state = 1309;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1320;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===162) {
					{
					this.state = 1310;
					this.match(trinoSqlParserParser.PARTITION);
					this.state = 1311;
					this.match(trinoSqlParserParser.BY);
					this.state = 1312;
					localctx._expression = this.expression();
					localctx._partition.push(localctx._expression);
					this.state = 1317;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1313;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1314;
						localctx._expression = this.expression();
						localctx._partition.push(localctx._expression);
						}
						}
						this.state = 1319;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===157) {
					{
					this.state = 1322;
					this.match(trinoSqlParserParser.ORDER);
					this.state = 1323;
					this.match(trinoSqlParserParser.BY);
					this.state = 1324;
					this.sortItem();
					this.state = 1329;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1325;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1326;
						this.sortItem();
						}
						}
						this.state = 1331;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===133) {
					{
					this.state = 1334;
					this.match(trinoSqlParserParser.MEASURES);
					this.state = 1335;
					this.measureDefinition();
					this.state = 1340;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1336;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1337;
						this.measureDefinition();
						}
						}
						this.state = 1342;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1346;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20 || _la===153) {
					{
					this.state = 1345;
					this.rowsPerMatch();
					}
				}

				this.state = 1351;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19) {
					{
					this.state = 1348;
					this.match(trinoSqlParserParser.AFTER);
					this.state = 1349;
					this.match(trinoSqlParserParser.MATCH);
					this.state = 1350;
					this.skipTo();
					}
				}

				this.state = 1354;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===104 || _la===198) {
					{
					this.state = 1353;
					_la = this._input.LA(1);
					if(!(_la===104 || _la===198)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 1356;
				this.match(trinoSqlParserParser.PATTERN);
				this.state = 1357;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1358;
				this.rowPattern(0);
				this.state = 1359;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===208) {
					{
					this.state = 1360;
					this.match(trinoSqlParserParser.SUBSET);
					this.state = 1361;
					this.subsetDefinition();
					this.state = 1366;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1362;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1363;
						this.subsetDefinition();
						}
						}
						this.state = 1368;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1371;
				this.match(trinoSqlParserParser.DEFINE);
				this.state = 1372;
				this.variableDefinition();
				this.state = 1377;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1373;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1374;
					this.variableDefinition();
					}
					}
					this.state = 1379;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1380;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1388;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
				case 1:
					{
					this.state = 1382;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===26) {
						{
						this.state = 1381;
						this.match(trinoSqlParserParser.AS);
						}
					}

					this.state = 1384;
					this.identifier();
					this.state = 1386;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 179, this._ctx) ) {
					case 1:
						{
						this.state = 1385;
						this.columnAliases();
						}
						break;
					}
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public measureDefinition(): MeasureDefinitionContext {
		let localctx: MeasureDefinitionContext = new MeasureDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, trinoSqlParserParser.RULE_measureDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1392;
			this.expression();
			this.state = 1393;
			this.match(trinoSqlParserParser.AS);
			this.state = 1394;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rowsPerMatch(): RowsPerMatchContext {
		let localctx: RowsPerMatchContext = new RowsPerMatchContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, trinoSqlParserParser.RULE_rowsPerMatch);
		let _la: number;
		try {
			this.state = 1407;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 153:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1396;
				this.match(trinoSqlParserParser.ONE);
				this.state = 1397;
				this.match(trinoSqlParserParser.ROW);
				this.state = 1398;
				this.match(trinoSqlParserParser.PER);
				this.state = 1399;
				this.match(trinoSqlParserParser.MATCH);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1400;
				this.match(trinoSqlParserParser.ALL);
				this.state = 1401;
				this.match(trinoSqlParserParser.ROWS);
				this.state = 1402;
				this.match(trinoSqlParserParser.PER);
				this.state = 1403;
				this.match(trinoSqlParserParser.MATCH);
				this.state = 1405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===151 || _la===204 || _la===241) {
					{
					this.state = 1404;
					this.emptyMatchHandling();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public emptyMatchHandling(): EmptyMatchHandlingContext {
		let localctx: EmptyMatchHandlingContext = new EmptyMatchHandlingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, trinoSqlParserParser.RULE_emptyMatchHandling);
		try {
			this.state = 1418;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 204:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1409;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 1410;
				this.match(trinoSqlParserParser.EMPTY);
				this.state = 1411;
				this.match(trinoSqlParserParser.MATCHES);
				}
				break;
			case 151:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1412;
				this.match(trinoSqlParserParser.OMIT);
				this.state = 1413;
				this.match(trinoSqlParserParser.EMPTY);
				this.state = 1414;
				this.match(trinoSqlParserParser.MATCHES);
				}
				break;
			case 241:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1415;
				this.match(trinoSqlParserParser.WITH);
				this.state = 1416;
				this.match(trinoSqlParserParser.UNMATCHED);
				this.state = 1417;
				this.match(trinoSqlParserParser.ROWS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public skipTo(): SkipToContext {
		let localctx: SkipToContext = new SkipToContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, trinoSqlParserParser.RULE_skipTo);
		try {
			this.state = 1439;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1420;
				this.match(trinoSqlParserParser.T__4);
				this.state = 1421;
				this.match(trinoSqlParserParser.TO);
				this.state = 1422;
				this.match(trinoSqlParserParser.NEXT);
				this.state = 1423;
				this.match(trinoSqlParserParser.ROW);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1424;
				this.match(trinoSqlParserParser.T__4);
				this.state = 1425;
				this.match(trinoSqlParserParser.PAST);
				this.state = 1426;
				this.match(trinoSqlParserParser.LAST);
				this.state = 1427;
				this.match(trinoSqlParserParser.ROW);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1428;
				this.match(trinoSqlParserParser.T__4);
				this.state = 1429;
				this.match(trinoSqlParserParser.TO);
				this.state = 1430;
				this.match(trinoSqlParserParser.FIRST);
				this.state = 1431;
				this.identifier();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1432;
				this.match(trinoSqlParserParser.T__4);
				this.state = 1433;
				this.match(trinoSqlParserParser.TO);
				this.state = 1434;
				this.match(trinoSqlParserParser.LAST);
				this.state = 1435;
				this.identifier();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1436;
				this.match(trinoSqlParserParser.T__4);
				this.state = 1437;
				this.match(trinoSqlParserParser.TO);
				this.state = 1438;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subsetDefinition(): SubsetDefinitionContext {
		let localctx: SubsetDefinitionContext = new SubsetDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, trinoSqlParserParser.RULE_subsetDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1441;
			localctx._name = this.identifier();
			this.state = 1442;
			this.match(trinoSqlParserParser.EQ);
			this.state = 1443;
			this.match(trinoSqlParserParser.T__1);
			this.state = 1444;
			localctx._identifier = this.identifier();
			localctx._union.push(localctx._identifier);
			this.state = 1449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 1445;
				this.match(trinoSqlParserParser.T__3);
				this.state = 1446;
				localctx._identifier = this.identifier();
				localctx._union.push(localctx._identifier);
				}
				}
				this.state = 1451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1452;
			this.match(trinoSqlParserParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDefinition(): VariableDefinitionContext {
		let localctx: VariableDefinitionContext = new VariableDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, trinoSqlParserParser.RULE_variableDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1454;
			this.identifier();
			this.state = 1455;
			this.match(trinoSqlParserParser.AS);
			this.state = 1456;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aliasedRelation(): AliasedRelationContext {
		let localctx: AliasedRelationContext = new AliasedRelationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, trinoSqlParserParser.RULE_aliasedRelation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1458;
			this.relationPrimary();
			this.state = 1466;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				{
				this.state = 1460;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26) {
					{
					this.state = 1459;
					this.match(trinoSqlParserParser.AS);
					}
				}

				this.state = 1462;
				this.identifier();
				this.state = 1464;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 188, this._ctx) ) {
				case 1:
					{
					this.state = 1463;
					this.columnAliases();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public columnAliases(): ColumnAliasesContext {
		let localctx: ColumnAliasesContext = new ColumnAliasesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, trinoSqlParserParser.RULE_columnAliases);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1468;
			this.match(trinoSqlParserParser.T__1);
			this.state = 1469;
			this.identifier();
			this.state = 1474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 1470;
				this.match(trinoSqlParserParser.T__3);
				this.state = 1471;
				this.identifier();
				}
				}
				this.state = 1476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1477;
			this.match(trinoSqlParserParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationPrimary(): RelationPrimaryContext {
		let localctx: RelationPrimaryContext = new RelationPrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, trinoSqlParserParser.RULE_relationPrimary);
		let _la: number;
		try {
			this.state = 1508;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 193, this._ctx) ) {
			case 1:
				localctx = new TableNameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1479;
				this.qualifiedName();
				}
				break;
			case 2:
				localctx = new SubqueryRelationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1480;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1481;
				this.query();
				this.state = 1482;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 3:
				localctx = new UnnestContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1484;
				this.match(trinoSqlParserParser.UNNEST);
				this.state = 1485;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1486;
				this.expression();
				this.state = 1491;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1487;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1488;
					this.expression();
					}
					}
					this.state = 1493;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1494;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1497;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
				case 1:
					{
					this.state = 1495;
					this.match(trinoSqlParserParser.WITH);
					this.state = 1496;
					this.match(trinoSqlParserParser.ORDINALITY);
					}
					break;
				}
				}
				break;
			case 4:
				localctx = new LateralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1499;
				this.match(trinoSqlParserParser.LATERAL);
				this.state = 1500;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1501;
				this.query();
				this.state = 1502;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 5:
				localctx = new ParenthesizedRelationContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1504;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1505;
				this.relation(0);
				this.state = 1506;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, trinoSqlParserParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1510;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public booleanExpression(): BooleanExpressionContext;
	public booleanExpression(_p: number): BooleanExpressionContext;
	// @RuleVersion(0)
	public booleanExpression(_p?: number): BooleanExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: BooleanExpressionContext = new BooleanExpressionContext(this, this._ctx, _parentState);
		let _prevctx: BooleanExpressionContext = localctx;
		let _startState: number = 92;
		this.enterRecursionRule(localctx, 92, trinoSqlParserParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1519;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
			case 17:
			case 18:
			case 19:
			case 20:
			case 22:
			case 24:
			case 25:
			case 27:
			case 28:
			case 29:
			case 30:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 47:
			case 48:
			case 49:
			case 50:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 60:
			case 62:
			case 64:
			case 66:
			case 67:
			case 70:
			case 74:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 86:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 96:
			case 97:
			case 99:
			case 100:
			case 101:
			case 103:
			case 104:
			case 106:
			case 109:
			case 111:
			case 112:
			case 114:
			case 116:
			case 117:
			case 118:
			case 120:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 153:
			case 154:
			case 155:
			case 158:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 173:
			case 174:
			case 175:
			case 176:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 187:
			case 188:
			case 189:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 200:
			case 201:
			case 202:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 209:
			case 210:
			case 212:
			case 213:
			case 214:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 225:
			case 226:
			case 228:
			case 230:
			case 231:
			case 232:
			case 234:
			case 236:
			case 237:
			case 240:
			case 242:
			case 243:
			case 244:
			case 245:
			case 246:
			case 253:
			case 254:
			case 259:
			case 260:
			case 261:
			case 262:
			case 263:
			case 264:
			case 265:
			case 266:
			case 267:
			case 268:
			case 269:
				{
				localctx = new PredicatedContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1513;
				(localctx as PredicatedContext)._valueExpression = this.valueExpression(0);
				this.state = 1515;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 194, this._ctx) ) {
				case 1:
					{
					this.state = 1514;
					this.predicate((localctx as PredicatedContext)._valueExpression);
					}
					break;
				}
				}
				break;
			case 146:
				{
				localctx = new LogicalNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1517;
				this.match(trinoSqlParserParser.NOT);
				this.state = 1518;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1529;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 197, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1527;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
					case 1:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_booleanExpression);
						this.state = 1521;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1522;
						(localctx as LogicalBinaryContext)._operator = this.match(trinoSqlParserParser.AND);
						this.state = 1523;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;
					case 2:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_booleanExpression);
						this.state = 1524;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1525;
						(localctx as LogicalBinaryContext)._operator = this.match(trinoSqlParserParser.OR);
						this.state = 1526;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1531;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 197, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public predicate(value: ParserRuleContext): PredicateContext {
		let localctx: PredicateContext = new PredicateContext(this, this._ctx, this.state, value);
		this.enterRule(localctx, 94, trinoSqlParserParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1593;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 206, this._ctx) ) {
			case 1:
				localctx = new ComparisonContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1532;
				this.comparisonOperator();
				this.state = 1533;
				(localctx as ComparisonContext)._right = this.valueExpression(0);
				}
				break;
			case 2:
				localctx = new QuantifiedComparisonContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1535;
				this.comparisonOperator();
				this.state = 1536;
				this.comparisonQuantifier();
				this.state = 1537;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1538;
				this.query();
				this.state = 1539;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 3:
				localctx = new BetweenContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===146) {
					{
					this.state = 1541;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1544;
				this.match(trinoSqlParserParser.BETWEEN);
				this.state = 1545;
				(localctx as BetweenContext)._lower = this.valueExpression(0);
				this.state = 1546;
				this.match(trinoSqlParserParser.AND);
				this.state = 1547;
				(localctx as BetweenContext)._upper = this.valueExpression(0);
				}
				break;
			case 4:
				localctx = new InListContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===146) {
					{
					this.state = 1549;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1552;
				this.match(trinoSqlParserParser.IN);
				this.state = 1553;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1554;
				this.expression();
				this.state = 1559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1555;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1556;
					this.expression();
					}
					}
					this.state = 1561;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1562;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 5:
				localctx = new InSubqueryContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===146) {
					{
					this.state = 1564;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1567;
				this.match(trinoSqlParserParser.IN);
				this.state = 1568;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1569;
				this.query();
				this.state = 1570;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 6:
				localctx = new LikeContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1573;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===146) {
					{
					this.state = 1572;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1575;
				this.match(trinoSqlParserParser.LIKE);
				this.state = 1576;
				(localctx as LikeContext)._pattern = this.valueExpression(0);
				this.state = 1579;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
				case 1:
					{
					this.state = 1577;
					this.match(trinoSqlParserParser.ESCAPE);
					this.state = 1578;
					(localctx as LikeContext)._escape = this.valueExpression(0);
					}
					break;
				}
				}
				break;
			case 7:
				localctx = new NullPredicateContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1581;
				this.match(trinoSqlParserParser.IS);
				this.state = 1583;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===146) {
					{
					this.state = 1582;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1585;
				this.match(trinoSqlParserParser.NULL);
				}
				break;
			case 8:
				localctx = new DistinctFromContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1586;
				this.match(trinoSqlParserParser.IS);
				this.state = 1588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===146) {
					{
					this.state = 1587;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1590;
				this.match(trinoSqlParserParser.DISTINCT);
				this.state = 1591;
				this.match(trinoSqlParserParser.FROM);
				this.state = 1592;
				(localctx as DistinctFromContext)._right = this.valueExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public valueExpression(): ValueExpressionContext;
	public valueExpression(_p: number): ValueExpressionContext;
	// @RuleVersion(0)
	public valueExpression(_p?: number): ValueExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ValueExpressionContext = new ValueExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ValueExpressionContext = localctx;
		let _startState: number = 96;
		this.enterRecursionRule(localctx, 96, trinoSqlParserParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1599;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 207, this._ctx) ) {
			case 1:
				{
				localctx = new ValueExpressionDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1596;
				this.primaryExpression(0);
				}
				break;
			case 2:
				{
				localctx = new ArithmeticUnaryContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1597;
				(localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===253 || _la===254)) {
				    (localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1598;
				this.valueExpression(4);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1615;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 209, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1613;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
					case 1:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_valueExpression);
						this.state = 1601;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1602;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & 7) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1603;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;
					case 2:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_valueExpression);
						this.state = 1604;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1605;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===253 || _la===254)) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1606;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;
					case 3:
						{
						localctx = new ConcatenationContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ConcatenationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_valueExpression);
						this.state = 1607;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1608;
						this.match(trinoSqlParserParser.CONCAT);
						this.state = 1609;
						(localctx as ConcatenationContext)._right = this.valueExpression(2);
						}
						break;
					case 4:
						{
						localctx = new AtTimeZoneContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_valueExpression);
						this.state = 1610;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1611;
						this.match(trinoSqlParserParser.AT);
						this.state = 1612;
						this.timeZoneSpecifier();
						}
						break;
					}
					}
				}
				this.state = 1617;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 209, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public primaryExpression(): PrimaryExpressionContext;
	public primaryExpression(_p: number): PrimaryExpressionContext;
	// @RuleVersion(0)
	public primaryExpression(_p?: number): PrimaryExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this, this._ctx, _parentState);
		let _prevctx: PrimaryExpressionContext = localctx;
		let _startState: number = 98;
		this.enterRecursionRule(localctx, 98, trinoSqlParserParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1867;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 239, this._ctx) ) {
			case 1:
				{
				localctx = new NullLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1619;
				this.match(trinoSqlParserParser.NULL);
				}
				break;
			case 2:
				{
				localctx = new IntervalLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1620;
				this.interval();
				}
				break;
			case 3:
				{
				localctx = new TypeConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1621;
				this.identifier();
				this.state = 1622;
				this.string_();
				}
				break;
			case 4:
				{
				localctx = new TypeConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1624;
				this.match(trinoSqlParserParser.DOUBLE);
				this.state = 1625;
				this.match(trinoSqlParserParser.PRECISION);
				this.state = 1626;
				this.string_();
				}
				break;
			case 5:
				{
				localctx = new NumericLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1627;
				this.number_();
				}
				break;
			case 6:
				{
				localctx = new BooleanLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1628;
				this.booleanValue();
				}
				break;
			case 7:
				{
				localctx = new StringLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1629;
				this.string_();
				}
				break;
			case 8:
				{
				localctx = new BinaryLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1630;
				this.match(trinoSqlParserParser.BINARY_LITERAL);
				}
				break;
			case 9:
				{
				localctx = new ParameterContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1631;
				this.match(trinoSqlParserParser.QUESTION_MARK);
				}
				break;
			case 10:
				{
				localctx = new PositionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1632;
				this.match(trinoSqlParserParser.POSITION);
				this.state = 1633;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1634;
				this.valueExpression(0);
				this.state = 1635;
				this.match(trinoSqlParserParser.IN);
				this.state = 1636;
				this.valueExpression(0);
				this.state = 1637;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 11:
				{
				localctx = new RowConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1639;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1640;
				this.expression();
				this.state = 1643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1641;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1642;
					this.expression();
					}
					}
					this.state = 1645;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===4);
				this.state = 1647;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 12:
				{
				localctx = new RowConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1649;
				this.match(trinoSqlParserParser.ROW);
				this.state = 1650;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1651;
				this.expression();
				this.state = 1656;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1652;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1653;
					this.expression();
					}
					}
					this.state = 1658;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1659;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 13:
				{
				localctx = new FunctionCallContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1661;
				this.qualifiedName();
				this.state = 1662;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1663;
				this.match(trinoSqlParserParser.ASTERISK);
				this.state = 1664;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1666;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 212, this._ctx) ) {
				case 1:
					{
					this.state = 1665;
					this.filter();
					}
					break;
				}
				this.state = 1669;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 213, this._ctx) ) {
				case 1:
					{
					this.state = 1668;
					this.over();
					}
					break;
				}
				}
				break;
			case 14:
				{
				localctx = new FunctionCallContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1672;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 214, this._ctx) ) {
				case 1:
					{
					this.state = 1671;
					this.processingMode();
					}
					break;
				}
				this.state = 1674;
				this.qualifiedName();
				this.state = 1675;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1687;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 3207592487) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4273656541) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 2810183423) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3724474367) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 2143027135) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 809409259) !== 0) || ((((_la - 259)) & ~0x1F) === 0 && ((1 << (_la - 259)) & 2047) !== 0)) {
					{
					this.state = 1677;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 215, this._ctx) ) {
					case 1:
						{
						this.state = 1676;
						this.setQuantifier();
						}
						break;
					}
					this.state = 1679;
					this.expression();
					this.state = 1684;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1680;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1681;
						this.expression();
						}
						}
						this.state = 1686;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===157) {
					{
					this.state = 1689;
					this.match(trinoSqlParserParser.ORDER);
					this.state = 1690;
					this.match(trinoSqlParserParser.BY);
					this.state = 1691;
					this.sortItem();
					this.state = 1696;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1692;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1693;
						this.sortItem();
						}
						}
						this.state = 1698;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1701;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1703;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 220, this._ctx) ) {
				case 1:
					{
					this.state = 1702;
					this.filter();
					}
					break;
				}
				this.state = 1709;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 222, this._ctx) ) {
				case 1:
					{
					this.state = 1706;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===101 || _la===183) {
						{
						this.state = 1705;
						this.nullTreatment();
						}
					}

					this.state = 1708;
					this.over();
					}
					break;
				}
				}
				break;
			case 15:
				{
				localctx = new MeasureContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1711;
				this.identifier();
				this.state = 1712;
				this.over();
				}
				break;
			case 16:
				{
				localctx = new LambdaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1714;
				this.identifier();
				this.state = 1715;
				this.match(trinoSqlParserParser.T__5);
				this.state = 1716;
				this.expression();
				}
				break;
			case 17:
				{
				localctx = new LambdaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1718;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1727;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1596214615) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 3134381375) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 3162472435) !== 0) || ((((_la - 154)) & ~0x1F) === 0 && ((1 << (_la - 154)) & 4286316499) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & 4009750519) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 262585051) !== 0) || ((((_la - 266)) & ~0x1F) === 0 && ((1 << (_la - 266)) & 15) !== 0)) {
					{
					this.state = 1719;
					this.identifier();
					this.state = 1724;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1720;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1721;
						this.identifier();
						}
						}
						this.state = 1726;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1729;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1730;
				this.match(trinoSqlParserParser.T__5);
				this.state = 1731;
				this.expression();
				}
				break;
			case 18:
				{
				localctx = new SubqueryExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1732;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1733;
				this.query();
				this.state = 1734;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 19:
				{
				localctx = new ExistsContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1736;
				this.match(trinoSqlParserParser.EXISTS);
				this.state = 1737;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1738;
				this.query();
				this.state = 1739;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 20:
				{
				localctx = new SimpleCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1741;
				this.match(trinoSqlParserParser.CASE);
				this.state = 1742;
				(localctx as SimpleCaseContext)._operand = this.expression();
				this.state = 1744;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1743;
					this.whenClause();
					}
					}
					this.state = 1746;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===238);
				this.state = 1750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===69) {
					{
					this.state = 1748;
					this.match(trinoSqlParserParser.ELSE);
					this.state = 1749;
					(localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1752;
				this.match(trinoSqlParserParser.END);
				}
				break;
			case 21:
				{
				localctx = new SearchedCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1754;
				this.match(trinoSqlParserParser.CASE);
				this.state = 1756;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1755;
					this.whenClause();
					}
					}
					this.state = 1758;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===238);
				this.state = 1762;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===69) {
					{
					this.state = 1760;
					this.match(trinoSqlParserParser.ELSE);
					this.state = 1761;
					(localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1764;
				this.match(trinoSqlParserParser.END);
				}
				break;
			case 22:
				{
				localctx = new CastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1766;
				this.match(trinoSqlParserParser.CAST);
				this.state = 1767;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1768;
				this.expression();
				this.state = 1769;
				this.match(trinoSqlParserParser.AS);
				this.state = 1770;
				this.type_(0);
				this.state = 1771;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 23:
				{
				localctx = new CastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1773;
				this.match(trinoSqlParserParser.TRY_CAST);
				this.state = 1774;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1775;
				this.expression();
				this.state = 1776;
				this.match(trinoSqlParserParser.AS);
				this.state = 1777;
				this.type_(0);
				this.state = 1778;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 24:
				{
				localctx = new ArrayConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1780;
				this.match(trinoSqlParserParser.ARRAY);
				this.state = 1781;
				this.match(trinoSqlParserParser.T__6);
				this.state = 1790;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 3751279891) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4289639607) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 3923771327) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4152344063) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 3756982255) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 2248659805) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 1023) !== 0)) {
					{
					this.state = 1782;
					this.expression();
					this.state = 1787;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1783;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1784;
						this.expression();
						}
						}
						this.state = 1789;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1792;
				this.match(trinoSqlParserParser.T__7);
				}
				break;
			case 25:
				{
				localctx = new ColumnReferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1793;
				this.identifier();
				}
				break;
			case 26:
				{
				localctx = new SpecialDateTimeFunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1794;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParserParser.CURRENT_DATE);
				}
				break;
			case 27:
				{
				localctx = new SpecialDateTimeFunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1795;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParserParser.CURRENT_TIME);
				this.state = 1799;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 231, this._ctx) ) {
				case 1:
					{
					this.state = 1796;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1797;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(trinoSqlParserParser.INTEGER_VALUE);
					this.state = 1798;
					this.match(trinoSqlParserParser.T__2);
					}
					break;
				}
				}
				break;
			case 28:
				{
				localctx = new SpecialDateTimeFunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1801;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParserParser.CURRENT_TIMESTAMP);
				this.state = 1805;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 232, this._ctx) ) {
				case 1:
					{
					this.state = 1802;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1803;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(trinoSqlParserParser.INTEGER_VALUE);
					this.state = 1804;
					this.match(trinoSqlParserParser.T__2);
					}
					break;
				}
				}
				break;
			case 29:
				{
				localctx = new SpecialDateTimeFunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1807;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParserParser.LOCALTIME);
				this.state = 1811;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 233, this._ctx) ) {
				case 1:
					{
					this.state = 1808;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1809;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(trinoSqlParserParser.INTEGER_VALUE);
					this.state = 1810;
					this.match(trinoSqlParserParser.T__2);
					}
					break;
				}
				}
				break;
			case 30:
				{
				localctx = new SpecialDateTimeFunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1813;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParserParser.LOCALTIMESTAMP);
				this.state = 1817;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 234, this._ctx) ) {
				case 1:
					{
					this.state = 1814;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1815;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(trinoSqlParserParser.INTEGER_VALUE);
					this.state = 1816;
					this.match(trinoSqlParserParser.T__2);
					}
					break;
				}
				}
				break;
			case 31:
				{
				localctx = new CurrentUserContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1819;
				(localctx as CurrentUserContext)._name = this.match(trinoSqlParserParser.CURRENT_USER);
				}
				break;
			case 32:
				{
				localctx = new CurrentCatalogContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1820;
				(localctx as CurrentCatalogContext)._name = this.match(trinoSqlParserParser.CURRENT_CATALOG);
				}
				break;
			case 33:
				{
				localctx = new CurrentSchemaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1821;
				(localctx as CurrentSchemaContext)._name = this.match(trinoSqlParserParser.CURRENT_SCHEMA);
				}
				break;
			case 34:
				{
				localctx = new CurrentPathContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1822;
				(localctx as CurrentPathContext)._name = this.match(trinoSqlParserParser.CURRENT_PATH);
				}
				break;
			case 35:
				{
				localctx = new SubstringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1823;
				this.match(trinoSqlParserParser.SUBSTRING);
				this.state = 1824;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1825;
				this.valueExpression(0);
				this.state = 1826;
				this.match(trinoSqlParserParser.FROM);
				this.state = 1827;
				this.valueExpression(0);
				this.state = 1830;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===85) {
					{
					this.state = 1828;
					this.match(trinoSqlParserParser.FOR);
					this.state = 1829;
					this.valueExpression(0);
					}
				}

				this.state = 1832;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 36:
				{
				localctx = new NormalizeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1834;
				this.match(trinoSqlParserParser.NORMALIZE);
				this.state = 1835;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1836;
				this.valueExpression(0);
				this.state = 1839;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4) {
					{
					this.state = 1837;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1838;
					this.normalForm();
					}
				}

				this.state = 1841;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 37:
				{
				localctx = new ExtractContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1843;
				this.match(trinoSqlParserParser.EXTRACT);
				this.state = 1844;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1845;
				this.identifier();
				this.state = 1846;
				this.match(trinoSqlParserParser.FROM);
				this.state = 1847;
				this.valueExpression(0);
				this.state = 1848;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 38:
				{
				localctx = new ParenthesizedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1850;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1851;
				this.expression();
				this.state = 1852;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 39:
				{
				localctx = new GroupingOperationContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1854;
				this.match(trinoSqlParserParser.GROUPING);
				this.state = 1855;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1864;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1596214615) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 3134381375) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 3162472435) !== 0) || ((((_la - 154)) & ~0x1F) === 0 && ((1 << (_la - 154)) & 4286316499) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & 4009750519) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 262585051) !== 0) || ((((_la - 266)) & ~0x1F) === 0 && ((1 << (_la - 266)) & 15) !== 0)) {
					{
					this.state = 1856;
					this.qualifiedName();
					this.state = 1861;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1857;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1858;
						this.qualifiedName();
						}
						}
						this.state = 1863;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1866;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1879;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 241, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1877;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 240, this._ctx) ) {
					case 1:
						{
						localctx = new SubscriptContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						(localctx as SubscriptContext)._value = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_primaryExpression);
						this.state = 1869;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1870;
						this.match(trinoSqlParserParser.T__6);
						this.state = 1871;
						(localctx as SubscriptContext)._index = this.valueExpression(0);
						this.state = 1872;
						this.match(trinoSqlParserParser.T__7);
						}
						break;
					case 2:
						{
						localctx = new DereferenceContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						(localctx as DereferenceContext)._base = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_primaryExpression);
						this.state = 1874;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1875;
						this.match(trinoSqlParserParser.T__0);
						this.state = 1876;
						(localctx as DereferenceContext)._fieldName = this.identifier();
						}
						break;
					}
					}
				}
				this.state = 1881;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 241, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public processingMode(): ProcessingModeContext {
		let localctx: ProcessingModeContext = new ProcessingModeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, trinoSqlParserParser.RULE_processingMode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1882;
			_la = this._input.LA(1);
			if(!(_la===82 || _la===193)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nullTreatment(): NullTreatmentContext {
		let localctx: NullTreatmentContext = new NullTreatmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, trinoSqlParserParser.RULE_nullTreatment);
		try {
			this.state = 1888;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 101:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1884;
				this.match(trinoSqlParserParser.IGNORE);
				this.state = 1885;
				this.match(trinoSqlParserParser.NULLS);
				}
				break;
			case 183:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1886;
				this.match(trinoSqlParserParser.RESPECT);
				this.state = 1887;
				this.match(trinoSqlParserParser.NULLS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_(): StringContext {
		let localctx: StringContext = new StringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, trinoSqlParserParser.RULE_string);
		try {
			this.state = 1896;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 260:
				localctx = new BasicStringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1890;
				this.match(trinoSqlParserParser.STRING);
				}
				break;
			case 261:
				localctx = new UnicodeStringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1891;
				this.match(trinoSqlParserParser.UNICODE_STRING);
				this.state = 1894;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 243, this._ctx) ) {
				case 1:
					{
					this.state = 1892;
					this.match(trinoSqlParserParser.UESCAPE);
					this.state = 1893;
					this.match(trinoSqlParserParser.STRING);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timeZoneSpecifier(): TimeZoneSpecifierContext {
		let localctx: TimeZoneSpecifierContext = new TimeZoneSpecifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, trinoSqlParserParser.RULE_timeZoneSpecifier);
		try {
			this.state = 1904;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 245, this._ctx) ) {
			case 1:
				localctx = new TimeZoneIntervalContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1898;
				this.match(trinoSqlParserParser.TIME);
				this.state = 1899;
				this.match(trinoSqlParserParser.ZONE);
				this.state = 1900;
				this.interval();
				}
				break;
			case 2:
				localctx = new TimeZoneStringContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1901;
				this.match(trinoSqlParserParser.TIME);
				this.state = 1902;
				this.match(trinoSqlParserParser.ZONE);
				this.state = 1903;
				this.string_();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, trinoSqlParserParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1906;
			_la = this._input.LA(1);
			if(!(((((_la - 247)) & ~0x1F) === 0 && ((1 << (_la - 247)) & 63) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparisonQuantifier(): ComparisonQuantifierContext {
		let localctx: ComparisonQuantifierContext = new ComparisonQuantifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, trinoSqlParserParser.RULE_comparisonQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1908;
			_la = this._input.LA(1);
			if(!(_la===20 || _la===24 || _la===205)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanValue(): BooleanValueContext {
		let localctx: BooleanValueContext = new BooleanValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, trinoSqlParserParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1910;
			_la = this._input.LA(1);
			if(!(_la===79 || _la===221)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interval(): IntervalContext {
		let localctx: IntervalContext = new IntervalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, trinoSqlParserParser.RULE_interval);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1912;
			this.match(trinoSqlParserParser.INTERVAL);
			this.state = 1914;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===253 || _la===254) {
				{
				this.state = 1913;
				localctx._sign = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===253 || _la===254)) {
				    localctx._sign = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 1916;
			this.string_();
			this.state = 1917;
			localctx._from_ = this.intervalField();
			this.state = 1920;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 247, this._ctx) ) {
			case 1:
				{
				this.state = 1918;
				this.match(trinoSqlParserParser.TO);
				this.state = 1919;
				localctx._to = this.intervalField();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public intervalField(): IntervalFieldContext {
		let localctx: IntervalFieldContext = new IntervalFieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, trinoSqlParserParser.RULE_intervalField);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1922;
			_la = this._input.LA(1);
			if(!(_la===58 || _la===99 || _la===135 || _la===136 || _la===196 || _la===245)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public normalForm(): NormalFormContext {
		let localctx: NormalFormContext = new NormalFormContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, trinoSqlParserParser.RULE_normalForm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1924;
			_la = this._input.LA(1);
			if(!(((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 15) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public type_(): TypeContext;
	public type_(_p: number): TypeContext;
	// @RuleVersion(0)
	public type_(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: TypeContext = new TypeContext(this, this._ctx, _parentState);
		let _prevctx: TypeContext = localctx;
		let _startState: number = 120;
		this.enterRecursionRule(localctx, 120, trinoSqlParserParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2017;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 258, this._ctx) ) {
			case 1:
				{
				localctx = new RowTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1927;
				this.match(trinoSqlParserParser.ROW);
				this.state = 1928;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1929;
				this.rowField();
				this.state = 1934;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1930;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1931;
					this.rowField();
					}
					}
					this.state = 1936;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1937;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 2:
				{
				localctx = new IntervalTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1939;
				this.match(trinoSqlParserParser.INTERVAL);
				this.state = 1940;
				(localctx as IntervalTypeContext)._from_ = this.intervalField();
				this.state = 1943;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 249, this._ctx) ) {
				case 1:
					{
					this.state = 1941;
					this.match(trinoSqlParserParser.TO);
					this.state = 1942;
					(localctx as IntervalTypeContext)._to = this.intervalField();
					}
					break;
				}
				}
				break;
			case 3:
				{
				localctx = new DateTimeTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1945;
				(localctx as DateTimeTypeContext)._base = this.match(trinoSqlParserParser.TIMESTAMP);
				this.state = 1950;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 250, this._ctx) ) {
				case 1:
					{
					this.state = 1946;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1947;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 1948;
					this.match(trinoSqlParserParser.T__2);
					}
					break;
				}
				this.state = 1955;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 251, this._ctx) ) {
				case 1:
					{
					this.state = 1952;
					this.match(trinoSqlParserParser.WITHOUT);
					this.state = 1953;
					this.match(trinoSqlParserParser.TIME);
					this.state = 1954;
					this.match(trinoSqlParserParser.ZONE);
					}
					break;
				}
				}
				break;
			case 4:
				{
				localctx = new DateTimeTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1957;
				(localctx as DateTimeTypeContext)._base = this.match(trinoSqlParserParser.TIMESTAMP);
				this.state = 1962;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 1958;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1959;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 1960;
					this.match(trinoSqlParserParser.T__2);
					}
				}

				this.state = 1964;
				this.match(trinoSqlParserParser.WITH);
				this.state = 1965;
				this.match(trinoSqlParserParser.TIME);
				this.state = 1966;
				this.match(trinoSqlParserParser.ZONE);
				}
				break;
			case 5:
				{
				localctx = new DateTimeTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1967;
				(localctx as DateTimeTypeContext)._base = this.match(trinoSqlParserParser.TIME);
				this.state = 1972;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 253, this._ctx) ) {
				case 1:
					{
					this.state = 1968;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1969;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 1970;
					this.match(trinoSqlParserParser.T__2);
					}
					break;
				}
				this.state = 1977;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 254, this._ctx) ) {
				case 1:
					{
					this.state = 1974;
					this.match(trinoSqlParserParser.WITHOUT);
					this.state = 1975;
					this.match(trinoSqlParserParser.TIME);
					this.state = 1976;
					this.match(trinoSqlParserParser.ZONE);
					}
					break;
				}
				}
				break;
			case 6:
				{
				localctx = new DateTimeTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1979;
				(localctx as DateTimeTypeContext)._base = this.match(trinoSqlParserParser.TIME);
				this.state = 1984;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 1980;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1981;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 1982;
					this.match(trinoSqlParserParser.T__2);
					}
				}

				this.state = 1986;
				this.match(trinoSqlParserParser.WITH);
				this.state = 1987;
				this.match(trinoSqlParserParser.TIME);
				this.state = 1988;
				this.match(trinoSqlParserParser.ZONE);
				}
				break;
			case 7:
				{
				localctx = new DoublePrecisionTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1989;
				this.match(trinoSqlParserParser.DOUBLE);
				this.state = 1990;
				this.match(trinoSqlParserParser.PRECISION);
				}
				break;
			case 8:
				{
				localctx = new LegacyArrayTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1991;
				this.match(trinoSqlParserParser.ARRAY);
				this.state = 1992;
				this.match(trinoSqlParserParser.LT);
				this.state = 1993;
				this.type_(0);
				this.state = 1994;
				this.match(trinoSqlParserParser.GT);
				}
				break;
			case 9:
				{
				localctx = new LegacyMapTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1996;
				this.match(trinoSqlParserParser.MAP);
				this.state = 1997;
				this.match(trinoSqlParserParser.LT);
				this.state = 1998;
				(localctx as LegacyMapTypeContext)._keyType = this.type_(0);
				this.state = 1999;
				this.match(trinoSqlParserParser.T__3);
				this.state = 2000;
				(localctx as LegacyMapTypeContext)._valueType = this.type_(0);
				this.state = 2001;
				this.match(trinoSqlParserParser.GT);
				}
				break;
			case 10:
				{
				localctx = new GenericTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2003;
				this.identifier();
				this.state = 2015;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 257, this._ctx) ) {
				case 1:
					{
					this.state = 2004;
					this.match(trinoSqlParserParser.T__1);
					this.state = 2005;
					this.typeParameter();
					this.state = 2010;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 2006;
						this.match(trinoSqlParserParser.T__3);
						this.state = 2007;
						this.typeParameter();
						}
						}
						this.state = 2012;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2013;
					this.match(trinoSqlParserParser.T__2);
					}
					break;
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2028;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 260, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ArrayTypeContext(this, new TypeContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_type);
					this.state = 2019;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 2020;
					this.match(trinoSqlParserParser.ARRAY);
					this.state = 2024;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 259, this._ctx) ) {
					case 1:
						{
						this.state = 2021;
						this.match(trinoSqlParserParser.T__6);
						this.state = 2022;
						this.match(trinoSqlParserParser.INTEGER_VALUE);
						this.state = 2023;
						this.match(trinoSqlParserParser.T__7);
						}
						break;
					}
					}
					}
				}
				this.state = 2030;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 260, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rowField(): RowFieldContext {
		let localctx: RowFieldContext = new RowFieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, trinoSqlParserParser.RULE_rowField);
		try {
			this.state = 2035;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 261, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2031;
				this.type_(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2032;
				this.identifier();
				this.state = 2033;
				this.type_(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let localctx: TypeParameterContext = new TypeParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, trinoSqlParserParser.RULE_typeParameter);
		try {
			this.state = 2039;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 263:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2037;
				this.match(trinoSqlParserParser.INTEGER_VALUE);
				}
				break;
			case 17:
			case 18:
			case 19:
			case 20:
			case 22:
			case 24:
			case 25:
			case 27:
			case 28:
			case 29:
			case 30:
			case 33:
			case 34:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 47:
			case 56:
			case 57:
			case 58:
			case 60:
			case 62:
			case 64:
			case 66:
			case 67:
			case 70:
			case 74:
			case 77:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 86:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 97:
			case 99:
			case 100:
			case 101:
			case 103:
			case 104:
			case 106:
			case 109:
			case 111:
			case 112:
			case 114:
			case 116:
			case 117:
			case 118:
			case 120:
			case 122:
			case 123:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 148:
			case 149:
			case 150:
			case 151:
			case 153:
			case 154:
			case 155:
			case 158:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 173:
			case 174:
			case 175:
			case 176:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 187:
			case 188:
			case 189:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 200:
			case 201:
			case 202:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 209:
			case 210:
			case 212:
			case 213:
			case 214:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 222:
			case 223:
			case 225:
			case 226:
			case 228:
			case 230:
			case 231:
			case 232:
			case 234:
			case 236:
			case 237:
			case 240:
			case 242:
			case 243:
			case 244:
			case 245:
			case 246:
			case 266:
			case 267:
			case 268:
			case 269:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2038;
				this.type_(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whenClause(): WhenClauseContext {
		let localctx: WhenClauseContext = new WhenClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, trinoSqlParserParser.RULE_whenClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2041;
			this.match(trinoSqlParserParser.WHEN);
			this.state = 2042;
			localctx._condition = this.expression();
			this.state = 2043;
			this.match(trinoSqlParserParser.THEN);
			this.state = 2044;
			localctx._result = this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public filter(): FilterContext {
		let localctx: FilterContext = new FilterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, trinoSqlParserParser.RULE_filter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2046;
			this.match(trinoSqlParserParser.FILTER);
			this.state = 2047;
			this.match(trinoSqlParserParser.T__1);
			this.state = 2048;
			this.match(trinoSqlParserParser.WHERE);
			this.state = 2049;
			this.booleanExpression(0);
			this.state = 2050;
			this.match(trinoSqlParserParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mergeCase(): MergeCaseContext {
		let localctx: MergeCaseContext = new MergeCaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, trinoSqlParserParser.RULE_mergeCase);
		let _la: number;
		try {
			this.state = 2116;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 270, this._ctx) ) {
			case 1:
				localctx = new MergeUpdateContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2052;
				this.match(trinoSqlParserParser.WHEN);
				this.state = 2053;
				this.match(trinoSqlParserParser.MATCHED);
				this.state = 2056;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===23) {
					{
					this.state = 2054;
					this.match(trinoSqlParserParser.AND);
					this.state = 2055;
					(localctx as MergeUpdateContext)._condition = this.expression();
					}
				}

				this.state = 2058;
				this.match(trinoSqlParserParser.THEN);
				this.state = 2059;
				this.match(trinoSqlParserParser.UPDATE);
				this.state = 2060;
				this.match(trinoSqlParserParser.SET);
				this.state = 2061;
				(localctx as MergeUpdateContext)._identifier = this.identifier();
				(localctx as MergeUpdateContext)._targets.push((localctx as MergeUpdateContext)._identifier);
				this.state = 2062;
				this.match(trinoSqlParserParser.EQ);
				this.state = 2063;
				(localctx as MergeUpdateContext)._expression = this.expression();
				(localctx as MergeUpdateContext)._values.push((localctx as MergeUpdateContext)._expression);
				this.state = 2071;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2064;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2065;
					(localctx as MergeUpdateContext)._identifier = this.identifier();
					(localctx as MergeUpdateContext)._targets.push((localctx as MergeUpdateContext)._identifier);
					this.state = 2066;
					this.match(trinoSqlParserParser.EQ);
					this.state = 2067;
					(localctx as MergeUpdateContext)._expression = this.expression();
					(localctx as MergeUpdateContext)._values.push((localctx as MergeUpdateContext)._expression);
					}
					}
					this.state = 2073;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				localctx = new MergeDeleteContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2074;
				this.match(trinoSqlParserParser.WHEN);
				this.state = 2075;
				this.match(trinoSqlParserParser.MATCHED);
				this.state = 2078;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===23) {
					{
					this.state = 2076;
					this.match(trinoSqlParserParser.AND);
					this.state = 2077;
					(localctx as MergeDeleteContext)._condition = this.expression();
					}
				}

				this.state = 2080;
				this.match(trinoSqlParserParser.THEN);
				this.state = 2081;
				this.match(trinoSqlParserParser.DELETE);
				}
				break;
			case 3:
				localctx = new MergeInsertContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2082;
				this.match(trinoSqlParserParser.WHEN);
				this.state = 2083;
				this.match(trinoSqlParserParser.NOT);
				this.state = 2084;
				this.match(trinoSqlParserParser.MATCHED);
				this.state = 2087;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===23) {
					{
					this.state = 2085;
					this.match(trinoSqlParserParser.AND);
					this.state = 2086;
					(localctx as MergeInsertContext)._condition = this.expression();
					}
				}

				this.state = 2089;
				this.match(trinoSqlParserParser.THEN);
				this.state = 2090;
				this.match(trinoSqlParserParser.INSERT);
				this.state = 2102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 2091;
					this.match(trinoSqlParserParser.T__1);
					this.state = 2092;
					(localctx as MergeInsertContext)._identifier = this.identifier();
					(localctx as MergeInsertContext)._targets.push((localctx as MergeInsertContext)._identifier);
					this.state = 2097;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 2093;
						this.match(trinoSqlParserParser.T__3);
						this.state = 2094;
						(localctx as MergeInsertContext)._identifier = this.identifier();
						(localctx as MergeInsertContext)._targets.push((localctx as MergeInsertContext)._identifier);
						}
						}
						this.state = 2099;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2100;
					this.match(trinoSqlParserParser.T__2);
					}
				}

				this.state = 2104;
				this.match(trinoSqlParserParser.VALUES);
				this.state = 2105;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2106;
				(localctx as MergeInsertContext)._expression = this.expression();
				(localctx as MergeInsertContext)._values.push((localctx as MergeInsertContext)._expression);
				this.state = 2111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2107;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2108;
					(localctx as MergeInsertContext)._expression = this.expression();
					(localctx as MergeInsertContext)._values.push((localctx as MergeInsertContext)._expression);
					}
					}
					this.state = 2113;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2114;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public over(): OverContext {
		let localctx: OverContext = new OverContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, trinoSqlParserParser.RULE_over);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2118;
			this.match(trinoSqlParserParser.OVER);
			this.state = 2124;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 17:
			case 18:
			case 19:
			case 20:
			case 22:
			case 24:
			case 25:
			case 27:
			case 28:
			case 29:
			case 30:
			case 33:
			case 34:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 47:
			case 56:
			case 57:
			case 58:
			case 60:
			case 62:
			case 64:
			case 66:
			case 67:
			case 70:
			case 74:
			case 77:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 86:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 97:
			case 99:
			case 100:
			case 101:
			case 103:
			case 104:
			case 106:
			case 109:
			case 111:
			case 112:
			case 114:
			case 116:
			case 117:
			case 118:
			case 120:
			case 122:
			case 123:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 148:
			case 149:
			case 150:
			case 151:
			case 153:
			case 154:
			case 155:
			case 158:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 173:
			case 174:
			case 175:
			case 176:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 187:
			case 188:
			case 189:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 200:
			case 201:
			case 202:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 209:
			case 210:
			case 212:
			case 213:
			case 214:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 222:
			case 223:
			case 225:
			case 226:
			case 228:
			case 230:
			case 231:
			case 232:
			case 234:
			case 236:
			case 237:
			case 240:
			case 242:
			case 243:
			case 244:
			case 245:
			case 246:
			case 266:
			case 267:
			case 268:
			case 269:
				{
				this.state = 2119;
				localctx._windowName = this.identifier();
				}
				break;
			case 2:
				{
				this.state = 2120;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2121;
				this.windowSpecification();
				this.state = 2122;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public windowFrame(): WindowFrameContext {
		let localctx: WindowFrameContext = new WindowFrameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, trinoSqlParserParser.RULE_windowFrame);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===133) {
				{
				this.state = 2126;
				this.match(trinoSqlParserParser.MEASURES);
				this.state = 2127;
				this.measureDefinition();
				this.state = 2132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2128;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2129;
					this.measureDefinition();
					}
					}
					this.state = 2134;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2137;
			this.frameExtent();
			this.state = 2141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 2138;
				this.match(trinoSqlParserParser.AFTER);
				this.state = 2139;
				this.match(trinoSqlParserParser.MATCH);
				this.state = 2140;
				this.skipTo();
				}
			}

			this.state = 2144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===104 || _la===198) {
				{
				this.state = 2143;
				_la = this._input.LA(1);
				if(!(_la===104 || _la===198)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 2151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===166) {
				{
				this.state = 2146;
				this.match(trinoSqlParserParser.PATTERN);
				this.state = 2147;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2148;
				this.rowPattern(0);
				this.state = 2149;
				this.match(trinoSqlParserParser.T__2);
				}
			}

			this.state = 2162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===208) {
				{
				this.state = 2153;
				this.match(trinoSqlParserParser.SUBSET);
				this.state = 2154;
				this.subsetDefinition();
				this.state = 2159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2155;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2156;
					this.subsetDefinition();
					}
					}
					this.state = 2161;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===64) {
				{
				this.state = 2164;
				this.match(trinoSqlParserParser.DEFINE);
				this.state = 2165;
				this.variableDefinition();
				this.state = 2170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2166;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2167;
					this.variableDefinition();
					}
					}
					this.state = 2172;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public frameExtent(): FrameExtentContext {
		let localctx: FrameExtentContext = new FrameExtentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, trinoSqlParserParser.RULE_frameExtent);
		try {
			this.state = 2199;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 281, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2175;
				localctx._frameType = this.match(trinoSqlParserParser.RANGE);
				this.state = 2176;
				localctx._start = this.frameBound();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2177;
				localctx._frameType = this.match(trinoSqlParserParser.ROWS);
				this.state = 2178;
				localctx._start = this.frameBound();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2179;
				localctx._frameType = this.match(trinoSqlParserParser.GROUPS);
				this.state = 2180;
				localctx._start = this.frameBound();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2181;
				localctx._frameType = this.match(trinoSqlParserParser.RANGE);
				this.state = 2182;
				this.match(trinoSqlParserParser.BETWEEN);
				this.state = 2183;
				localctx._start = this.frameBound();
				this.state = 2184;
				this.match(trinoSqlParserParser.AND);
				this.state = 2185;
				localctx._end = this.frameBound();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2187;
				localctx._frameType = this.match(trinoSqlParserParser.ROWS);
				this.state = 2188;
				this.match(trinoSqlParserParser.BETWEEN);
				this.state = 2189;
				localctx._start = this.frameBound();
				this.state = 2190;
				this.match(trinoSqlParserParser.AND);
				this.state = 2191;
				localctx._end = this.frameBound();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2193;
				localctx._frameType = this.match(trinoSqlParserParser.GROUPS);
				this.state = 2194;
				this.match(trinoSqlParserParser.BETWEEN);
				this.state = 2195;
				localctx._start = this.frameBound();
				this.state = 2196;
				this.match(trinoSqlParserParser.AND);
				this.state = 2197;
				localctx._end = this.frameBound();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public frameBound(): FrameBoundContext {
		let localctx: FrameBoundContext = new FrameBoundContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, trinoSqlParserParser.RULE_frameBound);
		let _la: number;
		try {
			this.state = 2210;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 282, this._ctx) ) {
			case 1:
				localctx = new UnboundedFrameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2201;
				this.match(trinoSqlParserParser.UNBOUNDED);
				this.state = 2202;
				(localctx as UnboundedFrameContext)._boundType = this.match(trinoSqlParserParser.PRECEDING);
				}
				break;
			case 2:
				localctx = new UnboundedFrameContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2203;
				this.match(trinoSqlParserParser.UNBOUNDED);
				this.state = 2204;
				(localctx as UnboundedFrameContext)._boundType = this.match(trinoSqlParserParser.FOLLOWING);
				}
				break;
			case 3:
				localctx = new CurrentRowBoundContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2205;
				this.match(trinoSqlParserParser.CURRENT);
				this.state = 2206;
				this.match(trinoSqlParserParser.ROW);
				}
				break;
			case 4:
				localctx = new BoundedFrameContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2207;
				this.expression();
				this.state = 2208;
				(localctx as BoundedFrameContext)._boundType = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===84 || _la===170)) {
				    (localctx as BoundedFrameContext)._boundType = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public rowPattern(): RowPatternContext;
	public rowPattern(_p: number): RowPatternContext;
	// @RuleVersion(0)
	public rowPattern(_p?: number): RowPatternContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: RowPatternContext = new RowPatternContext(this, this._ctx, _parentState);
		let _prevctx: RowPatternContext = localctx;
		let _startState: number = 140;
		this.enterRecursionRule(localctx, 140, trinoSqlParserParser.RULE_rowPattern, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new QuantifiedPrimaryContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2213;
			this.patternPrimary();
			this.state = 2215;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 283, this._ctx) ) {
			case 1:
				{
				this.state = 2214;
				this.patternQuantifier();
				}
				break;
			}
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2224;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 285, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2222;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 284, this._ctx) ) {
					case 1:
						{
						localctx = new PatternConcatenationContext(this, new RowPatternContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_rowPattern);
						this.state = 2217;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2218;
						this.rowPattern(3);
						}
						break;
					case 2:
						{
						localctx = new PatternAlternationContext(this, new RowPatternContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_rowPattern);
						this.state = 2219;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2220;
						this.match(trinoSqlParserParser.T__8);
						this.state = 2221;
						this.rowPattern(2);
						}
						break;
					}
					}
				}
				this.state = 2226;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 285, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternPrimary(): PatternPrimaryContext {
		let localctx: PatternPrimaryContext = new PatternPrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, trinoSqlParserParser.RULE_patternPrimary);
		let _la: number;
		try {
			this.state = 2252;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 287, this._ctx) ) {
			case 1:
				localctx = new PatternVariableContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2227;
				this.identifier();
				}
				break;
			case 2:
				localctx = new EmptyPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2228;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2229;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 3:
				localctx = new PatternPermutationContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2230;
				this.match(trinoSqlParserParser.PERMUTE);
				this.state = 2231;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2232;
				this.rowPattern(0);
				this.state = 2237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2233;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2234;
					this.rowPattern(0);
					}
					}
					this.state = 2239;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2240;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 4:
				localctx = new GroupedPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2242;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2243;
				this.rowPattern(0);
				this.state = 2244;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 5:
				localctx = new PartitionStartAnchorContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2246;
				this.match(trinoSqlParserParser.T__9);
				}
				break;
			case 6:
				localctx = new PartitionEndAnchorContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2247;
				this.match(trinoSqlParserParser.T__10);
				}
				break;
			case 7:
				localctx = new ExcludedPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2248;
				this.match(trinoSqlParserParser.T__11);
				this.state = 2249;
				this.rowPattern(0);
				this.state = 2250;
				this.match(trinoSqlParserParser.T__12);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternQuantifier(): PatternQuantifierContext {
		let localctx: PatternQuantifierContext = new PatternQuantifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, trinoSqlParserParser.RULE_patternQuantifier);
		let _la: number;
		try {
			this.state = 2284;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 295, this._ctx) ) {
			case 1:
				localctx = new ZeroOrMoreQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2254;
				this.match(trinoSqlParserParser.ASTERISK);
				this.state = 2256;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 288, this._ctx) ) {
				case 1:
					{
					this.state = 2255;
					(localctx as ZeroOrMoreQuantifierContext)._reluctant = this.match(trinoSqlParserParser.QUESTION_MARK);
					}
					break;
				}
				}
				break;
			case 2:
				localctx = new OneOrMoreQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2258;
				this.match(trinoSqlParserParser.PLUS);
				this.state = 2260;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 289, this._ctx) ) {
				case 1:
					{
					this.state = 2259;
					(localctx as OneOrMoreQuantifierContext)._reluctant = this.match(trinoSqlParserParser.QUESTION_MARK);
					}
					break;
				}
				}
				break;
			case 3:
				localctx = new ZeroOrOneQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2262;
				this.match(trinoSqlParserParser.QUESTION_MARK);
				this.state = 2264;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 290, this._ctx) ) {
				case 1:
					{
					this.state = 2263;
					(localctx as ZeroOrOneQuantifierContext)._reluctant = this.match(trinoSqlParserParser.QUESTION_MARK);
					}
					break;
				}
				}
				break;
			case 4:
				localctx = new RangeQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2266;
				this.match(trinoSqlParserParser.T__13);
				this.state = 2267;
				(localctx as RangeQuantifierContext)._exactly = this.match(trinoSqlParserParser.INTEGER_VALUE);
				this.state = 2268;
				this.match(trinoSqlParserParser.T__14);
				this.state = 2270;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 291, this._ctx) ) {
				case 1:
					{
					this.state = 2269;
					(localctx as RangeQuantifierContext)._reluctant = this.match(trinoSqlParserParser.QUESTION_MARK);
					}
					break;
				}
				}
				break;
			case 5:
				localctx = new RangeQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2272;
				this.match(trinoSqlParserParser.T__13);
				this.state = 2274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===263) {
					{
					this.state = 2273;
					(localctx as RangeQuantifierContext)._atLeast = this.match(trinoSqlParserParser.INTEGER_VALUE);
					}
				}

				this.state = 2276;
				this.match(trinoSqlParserParser.T__3);
				this.state = 2278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===263) {
					{
					this.state = 2277;
					(localctx as RangeQuantifierContext)._atMost = this.match(trinoSqlParserParser.INTEGER_VALUE);
					}
				}

				this.state = 2280;
				this.match(trinoSqlParserParser.T__14);
				this.state = 2282;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 294, this._ctx) ) {
				case 1:
					{
					this.state = 2281;
					(localctx as RangeQuantifierContext)._reluctant = this.match(trinoSqlParserParser.QUESTION_MARK);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public updateAssignment(): UpdateAssignmentContext {
		let localctx: UpdateAssignmentContext = new UpdateAssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, trinoSqlParserParser.RULE_updateAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2286;
			this.identifier();
			this.state = 2287;
			this.match(trinoSqlParserParser.EQ);
			this.state = 2288;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public explainOption(): ExplainOptionContext {
		let localctx: ExplainOptionContext = new ExplainOptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, trinoSqlParserParser.RULE_explainOption);
		let _la: number;
		try {
			this.state = 2294;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				localctx = new ExplainFormatContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2290;
				this.match(trinoSqlParserParser.FORMAT);
				this.state = 2291;
				(localctx as ExplainFormatContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===94 || _la===116 || _la===214)) {
				    (localctx as ExplainFormatContext)._value = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 223:
				localctx = new ExplainTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2292;
				this.match(trinoSqlParserParser.TYPE);
				this.state = 2293;
				(localctx as ExplainTypeContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===66 || _la===112 || _la===126 || _la===234)) {
				    (localctx as ExplainTypeContext)._value = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public transactionMode(): TransactionModeContext {
		let localctx: TransactionModeContext = new TransactionModeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, trinoSqlParserParser.RULE_transactionMode);
		let _la: number;
		try {
			this.state = 2301;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 114:
				localctx = new IsolationLevelContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2296;
				this.match(trinoSqlParserParser.ISOLATION);
				this.state = 2297;
				this.match(trinoSqlParserParser.LEVEL);
				this.state = 2298;
				this.levelOfIsolation();
				}
				break;
			case 176:
				localctx = new TransactionAccessModeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2299;
				this.match(trinoSqlParserParser.READ);
				this.state = 2300;
				(localctx as TransactionAccessModeContext)._accessMode = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===154 || _la===244)) {
				    (localctx as TransactionAccessModeContext)._accessMode = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public levelOfIsolation(): LevelOfIsolationContext {
		let localctx: LevelOfIsolationContext = new LevelOfIsolationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, trinoSqlParserParser.RULE_levelOfIsolation);
		try {
			this.state = 2310;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 298, this._ctx) ) {
			case 1:
				localctx = new ReadUncommittedContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2303;
				this.match(trinoSqlParserParser.READ);
				this.state = 2304;
				this.match(trinoSqlParserParser.UNCOMMITTED);
				}
				break;
			case 2:
				localctx = new ReadCommittedContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2305;
				this.match(trinoSqlParserParser.READ);
				this.state = 2306;
				this.match(trinoSqlParserParser.COMMITTED);
				}
				break;
			case 3:
				localctx = new RepeatableReadContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2307;
				this.match(trinoSqlParserParser.REPEATABLE);
				this.state = 2308;
				this.match(trinoSqlParserParser.READ);
				}
				break;
			case 4:
				localctx = new SerializableContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2309;
				this.match(trinoSqlParserParser.SERIALIZABLE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public callArgument(): CallArgumentContext {
		let localctx: CallArgumentContext = new CallArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, trinoSqlParserParser.RULE_callArgument);
		try {
			this.state = 2317;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 299, this._ctx) ) {
			case 1:
				localctx = new PositionalArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2312;
				this.expression();
				}
				break;
			case 2:
				localctx = new NamedArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2313;
				this.identifier();
				this.state = 2314;
				this.match(trinoSqlParserParser.T__15);
				this.state = 2315;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pathElement(): PathElementContext {
		let localctx: PathElementContext = new PathElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, trinoSqlParserParser.RULE_pathElement);
		try {
			this.state = 2324;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 300, this._ctx) ) {
			case 1:
				localctx = new QualifiedArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2319;
				this.identifier();
				this.state = 2320;
				this.match(trinoSqlParserParser.T__0);
				this.state = 2321;
				this.identifier();
				}
				break;
			case 2:
				localctx = new UnqualifiedArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2323;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pathSpecification(): PathSpecificationContext {
		let localctx: PathSpecificationContext = new PathSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, trinoSqlParserParser.RULE_pathSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2326;
			this.pathElement();
			this.state = 2331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 2327;
				this.match(trinoSqlParserParser.T__3);
				this.state = 2328;
				this.pathElement();
				}
				}
				this.state = 2333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public privilege(): PrivilegeContext {
		let localctx: PrivilegeContext = new PrivilegeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, trinoSqlParserParser.RULE_privilege);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2334;
			_la = this._input.LA(1);
			if(!(_la===61 || _la===107 || _la===199 || _la===230)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let localctx: QualifiedNameContext = new QualifiedNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, trinoSqlParserParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2336;
			this.identifier();
			this.state = 2341;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 302, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2337;
					this.match(trinoSqlParserParser.T__0);
					this.state = 2338;
					this.identifier();
					}
					}
				}
				this.state = 2343;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 302, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public grantor(): GrantorContext {
		let localctx: GrantorContext = new GrantorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, trinoSqlParserParser.RULE_grantor);
		try {
			this.state = 2347;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 17:
			case 18:
			case 19:
			case 20:
			case 22:
			case 24:
			case 25:
			case 27:
			case 28:
			case 29:
			case 30:
			case 33:
			case 34:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 47:
			case 56:
			case 57:
			case 58:
			case 60:
			case 62:
			case 64:
			case 66:
			case 67:
			case 70:
			case 74:
			case 77:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 86:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 97:
			case 99:
			case 100:
			case 101:
			case 103:
			case 104:
			case 106:
			case 109:
			case 111:
			case 112:
			case 114:
			case 116:
			case 117:
			case 118:
			case 120:
			case 122:
			case 123:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 148:
			case 149:
			case 150:
			case 151:
			case 153:
			case 154:
			case 155:
			case 158:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 173:
			case 174:
			case 175:
			case 176:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 187:
			case 188:
			case 189:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 200:
			case 201:
			case 202:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 209:
			case 210:
			case 212:
			case 213:
			case 214:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 222:
			case 223:
			case 225:
			case 226:
			case 228:
			case 230:
			case 231:
			case 232:
			case 234:
			case 236:
			case 237:
			case 240:
			case 242:
			case 243:
			case 244:
			case 245:
			case 246:
			case 266:
			case 267:
			case 268:
			case 269:
				localctx = new SpecifiedPrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2344;
				this.principal();
				}
				break;
			case 55:
				localctx = new CurrentUserGrantorContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2345;
				this.match(trinoSqlParserParser.CURRENT_USER);
				}
				break;
			case 51:
				localctx = new CurrentRoleGrantorContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2346;
				this.match(trinoSqlParserParser.CURRENT_ROLE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public principal(): PrincipalContext {
		let localctx: PrincipalContext = new PrincipalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, trinoSqlParserParser.RULE_principal);
		try {
			this.state = 2354;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 304, this._ctx) ) {
			case 1:
				localctx = new UnspecifiedPrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2349;
				this.identifier();
				}
				break;
			case 2:
				localctx = new UserPrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2350;
				this.match(trinoSqlParserParser.USER);
				this.state = 2351;
				this.identifier();
				}
				break;
			case 3:
				localctx = new RolePrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2352;
				this.match(trinoSqlParserParser.ROLE);
				this.state = 2353;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public roles(): RolesContext {
		let localctx: RolesContext = new RolesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, trinoSqlParserParser.RULE_roles);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2356;
			this.identifier();
			this.state = 2361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 2357;
				this.match(trinoSqlParserParser.T__3);
				this.state = 2358;
				this.identifier();
				}
				}
				this.state = 2363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, trinoSqlParserParser.RULE_identifier);
		try {
			this.state = 2369;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 266:
				localctx = new UnquotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2364;
				this.match(trinoSqlParserParser.IDENTIFIER);
				}
				break;
			case 268:
				localctx = new QuotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2365;
				this.match(trinoSqlParserParser.QUOTED_IDENTIFIER);
				}
				break;
			case 17:
			case 18:
			case 19:
			case 20:
			case 22:
			case 24:
			case 25:
			case 27:
			case 28:
			case 29:
			case 30:
			case 33:
			case 34:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 47:
			case 56:
			case 57:
			case 58:
			case 60:
			case 62:
			case 64:
			case 66:
			case 67:
			case 70:
			case 74:
			case 77:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 86:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 97:
			case 99:
			case 100:
			case 101:
			case 103:
			case 104:
			case 106:
			case 109:
			case 111:
			case 112:
			case 114:
			case 116:
			case 117:
			case 118:
			case 120:
			case 122:
			case 123:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 148:
			case 149:
			case 150:
			case 151:
			case 153:
			case 154:
			case 155:
			case 158:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 173:
			case 174:
			case 175:
			case 176:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 187:
			case 188:
			case 189:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 200:
			case 201:
			case 202:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 209:
			case 210:
			case 212:
			case 213:
			case 214:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 222:
			case 223:
			case 225:
			case 226:
			case 228:
			case 230:
			case 231:
			case 232:
			case 234:
			case 236:
			case 237:
			case 240:
			case 242:
			case 243:
			case 244:
			case 245:
			case 246:
				localctx = new UnquotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2366;
				this.nonReserved();
				}
				break;
			case 269:
				localctx = new BackQuotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2367;
				this.match(trinoSqlParserParser.BACKQUOTED_IDENTIFIER);
				}
				break;
			case 267:
				localctx = new DigitIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2368;
				this.match(trinoSqlParserParser.DIGIT_IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public number_(): NumberContext {
		let localctx: NumberContext = new NumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, trinoSqlParserParser.RULE_number);
		let _la: number;
		try {
			this.state = 2383;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 310, this._ctx) ) {
			case 1:
				localctx = new DecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===254) {
					{
					this.state = 2371;
					this.match(trinoSqlParserParser.MINUS);
					}
				}

				this.state = 2374;
				this.match(trinoSqlParserParser.DECIMAL_VALUE);
				}
				break;
			case 2:
				localctx = new DoubleLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===254) {
					{
					this.state = 2375;
					this.match(trinoSqlParserParser.MINUS);
					}
				}

				this.state = 2378;
				this.match(trinoSqlParserParser.DOUBLE_VALUE);
				}
				break;
			case 3:
				localctx = new IntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===254) {
					{
					this.state = 2379;
					this.match(trinoSqlParserParser.MINUS);
					}
				}

				this.state = 2382;
				this.match(trinoSqlParserParser.INTEGER_VALUE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nonReserved(): NonReservedContext {
		let localctx: NonReservedContext = new NonReservedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, trinoSqlParserParser.RULE_nonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2385;
			_la = this._input.LA(1);
			if(!(((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1596214615) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 3134381375) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 3162472435) !== 0) || ((((_la - 154)) & ~0x1F) === 0 && ((1 << (_la - 154)) & 4286316499) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & 4009750519) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 262585051) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 18:
			return this.queryTerm_sempred(localctx as QueryTermContext, predIndex);
		case 30:
			return this.relation_sempred(localctx as RelationContext, predIndex);
		case 46:
			return this.booleanExpression_sempred(localctx as BooleanExpressionContext, predIndex);
		case 48:
			return this.valueExpression_sempred(localctx as ValueExpressionContext, predIndex);
		case 49:
			return this.primaryExpression_sempred(localctx as PrimaryExpressionContext, predIndex);
		case 60:
			return this.type_sempred(localctx as TypeContext, predIndex);
		case 70:
			return this.rowPattern_sempred(localctx as RowPatternContext, predIndex);
		}
		return true;
	}
	private queryTerm_sempred(localctx: QueryTermContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relation_sempred(localctx: RelationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private booleanExpression_sempred(localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private valueExpression_sempred(localctx: ValueExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 3);
		case 6:
			return this.precpred(this._ctx, 2);
		case 7:
			return this.precpred(this._ctx, 1);
		case 8:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}
	private primaryExpression_sempred(localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 17);
		case 10:
			return this.precpred(this._ctx, 15);
		}
		return true;
	}
	private type_sempred(localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private rowPattern_sempred(localctx: RowPatternContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.precpred(this._ctx, 2);
		case 13:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,275,2388,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,1,0,5,0,178,8,0,
	10,0,12,0,181,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,190,8,1,1,2,1,2,1,2,1,
	3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,220,8,7,1,7,1,7,1,7,3,7,225,8,7,1,7,1,7,3,
	7,229,8,7,1,7,1,7,1,7,1,7,3,7,235,8,7,1,7,1,7,3,7,239,8,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,260,8,
	7,1,7,1,7,3,7,264,8,7,1,7,1,7,3,7,268,8,7,1,7,1,7,3,7,272,8,7,1,7,1,7,1,
	7,1,7,1,7,1,7,3,7,280,8,7,1,7,1,7,3,7,284,8,7,1,7,3,7,287,8,7,1,7,1,7,1,
	7,1,7,1,7,3,7,294,8,7,1,7,1,7,1,7,1,7,1,7,5,7,301,8,7,10,7,12,7,304,9,7,
	1,7,1,7,1,7,3,7,309,8,7,1,7,1,7,3,7,313,8,7,1,7,1,7,1,7,1,7,3,7,319,8,7,
	1,7,1,7,1,7,1,7,1,7,3,7,326,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,335,8,7,
	1,7,1,7,1,7,1,7,3,7,341,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,3,7,355,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,364,8,7,1,7,1,7,1,7,1,7,
	3,7,370,8,7,1,7,1,7,1,7,1,7,1,7,3,7,377,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,3,7,387,8,7,1,7,1,7,1,7,1,7,1,7,3,7,394,8,7,1,7,1,7,1,7,1,7,1,7,1,7,
	3,7,402,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,410,8,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,425,8,7,1,7,1,7,1,7,3,7,430,8,7,1,7,1,7,
	1,7,1,7,1,7,3,7,437,8,7,1,7,1,7,1,7,3,7,442,8,7,1,7,1,7,3,7,446,8,7,1,7,
	1,7,1,7,1,7,1,7,1,7,3,7,454,8,7,1,7,1,7,1,7,1,7,3,7,460,8,7,1,7,1,7,3,7,
	464,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,478,8,7,1,7,
	1,7,1,7,1,7,1,7,3,7,485,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,508,8,7,10,7,12,7,511,9,7,3,
	7,513,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,523,8,7,1,7,1,7,3,7,527,8,
	7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,538,8,7,10,7,12,7,541,9,7,1,7,
	1,7,1,7,3,7,546,8,7,1,7,1,7,1,7,3,7,551,8,7,1,7,1,7,3,7,555,8,7,1,7,1,7,
	1,7,1,7,3,7,561,8,7,1,7,1,7,1,7,1,7,1,7,5,7,568,8,7,10,7,12,7,571,9,7,1,
	7,1,7,1,7,3,7,576,8,7,1,7,1,7,1,7,1,7,1,7,3,7,583,8,7,1,7,1,7,1,7,1,7,5,
	7,589,8,7,10,7,12,7,592,9,7,1,7,1,7,3,7,596,8,7,1,7,1,7,3,7,600,8,7,1,7,
	1,7,1,7,1,7,1,7,1,7,3,7,608,8,7,1,7,1,7,1,7,1,7,5,7,614,8,7,10,7,12,7,617,
	9,7,1,7,1,7,3,7,621,8,7,1,7,1,7,3,7,625,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,3,7,635,8,7,1,7,1,7,1,7,5,7,640,8,7,10,7,12,7,643,9,7,1,7,1,7,3,7,647,
	8,7,1,7,1,7,3,7,651,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,661,8,7,1,7,
	3,7,664,8,7,1,7,1,7,3,7,668,8,7,1,7,3,7,671,8,7,1,7,1,7,1,7,1,7,5,7,677,
	8,7,10,7,12,7,680,9,7,1,7,1,7,3,7,684,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,708,8,7,1,
	7,1,7,1,7,1,7,3,7,714,8,7,3,7,716,8,7,1,7,1,7,1,7,1,7,3,7,722,8,7,1,7,1,
	7,1,7,1,7,3,7,728,8,7,3,7,730,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,738,8,7,3,
	7,740,8,7,1,7,1,7,1,7,1,7,3,7,746,8,7,1,7,1,7,1,7,1,7,3,7,752,8,7,3,7,754,
	8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,769,8,7,1,7,
	1,7,1,7,3,7,774,8,7,1,7,1,7,1,7,1,7,1,7,3,7,781,8,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,3,7,793,8,7,3,7,795,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,
	803,8,7,3,7,805,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,5,7,821,8,7,10,7,12,7,824,9,7,3,7,826,8,7,1,7,1,7,3,7,830,8,7,1,7,1,
	7,3,7,834,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,
	7,850,8,7,10,7,12,7,853,9,7,3,7,855,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,3,7,871,8,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,879,8,7,
	10,7,12,7,882,9,7,1,7,1,7,3,7,886,8,7,1,7,1,7,1,7,1,7,3,7,892,8,7,1,7,3,
	7,895,8,7,1,7,1,7,1,7,1,7,1,7,4,7,902,8,7,11,7,12,7,903,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,3,7,916,8,7,1,8,3,8,919,8,8,1,8,1,8,1,9,1,9,3,9,
	925,8,9,1,9,1,9,1,9,5,9,930,8,9,10,9,12,9,933,9,9,1,10,1,10,3,10,937,8,
	10,1,11,1,11,1,11,1,11,3,11,943,8,11,1,11,1,11,3,11,947,8,11,1,11,1,11,
	3,11,951,8,11,1,12,1,12,1,12,1,12,3,12,957,8,12,1,13,1,13,1,13,1,13,5,13,
	963,8,13,10,13,12,13,966,9,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,
	15,1,15,1,15,1,15,5,15,980,8,15,10,15,12,15,983,9,15,3,15,985,8,15,1,15,
	1,15,1,15,3,15,990,8,15,3,15,992,8,15,1,15,1,15,1,15,1,15,1,15,3,15,999,
	8,15,1,15,1,15,1,15,1,15,3,15,1005,8,15,3,15,1007,8,15,1,16,1,16,3,16,1011,
	8,16,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,3,18,1021,8,18,1,18,1,18,1,
	18,1,18,3,18,1027,8,18,1,18,5,18,1030,8,18,10,18,12,18,1033,9,18,1,19,1,
	19,1,19,1,19,1,19,1,19,1,19,5,19,1042,8,19,10,19,12,19,1045,9,19,1,19,1,
	19,1,19,1,19,3,19,1051,8,19,1,20,1,20,3,20,1055,8,20,1,20,1,20,3,20,1059,
	8,20,1,21,1,21,3,21,1063,8,21,1,21,1,21,1,21,5,21,1068,8,21,10,21,12,21,
	1071,9,21,1,21,1,21,1,21,1,21,5,21,1077,8,21,10,21,12,21,1080,9,21,3,21,
	1082,8,21,1,21,1,21,3,21,1086,8,21,1,21,1,21,1,21,3,21,1091,8,21,1,21,1,
	21,3,21,1095,8,21,1,21,1,21,1,21,1,21,5,21,1101,8,21,10,21,12,21,1104,9,
	21,3,21,1106,8,21,1,22,3,22,1109,8,22,1,22,1,22,1,22,5,22,1114,8,22,10,
	22,12,22,1117,9,22,1,23,1,23,1,23,1,23,1,23,1,23,5,23,1125,8,23,10,23,12,
	23,1128,9,23,3,23,1130,8,23,1,23,1,23,1,23,1,23,1,23,1,23,5,23,1138,8,23,
	10,23,12,23,1141,9,23,3,23,1143,8,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,
	5,23,1152,8,23,10,23,12,23,1155,9,23,1,23,1,23,3,23,1159,8,23,1,24,1,24,
	1,24,1,24,5,24,1165,8,24,10,24,12,24,1168,9,24,3,24,1170,8,24,1,24,1,24,
	3,24,1174,8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,26,3,26,1183,8,26,1,26,1,
	26,1,26,1,26,1,26,5,26,1190,8,26,10,26,12,26,1193,9,26,3,26,1195,8,26,1,
	26,1,26,1,26,1,26,1,26,5,26,1202,8,26,10,26,12,26,1205,9,26,3,26,1207,8,
	26,1,26,3,26,1210,8,26,1,27,1,27,3,27,1214,8,27,1,27,1,27,1,27,1,27,1,27,
	1,28,1,28,1,29,1,29,3,29,1225,8,29,1,29,3,29,1228,8,29,1,29,1,29,1,29,1,
	29,1,29,3,29,1235,8,29,1,29,3,29,1238,8,29,1,30,1,30,1,30,1,30,1,30,1,30,
	1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,1257,8,30,5,
	30,1259,8,30,10,30,12,30,1262,9,30,1,31,3,31,1265,8,31,1,31,1,31,3,31,1269,
	8,31,1,31,1,31,3,31,1273,8,31,1,31,1,31,3,31,1277,8,31,3,31,1279,8,31,1,
	32,1,32,1,32,1,32,1,32,1,32,1,32,5,32,1288,8,32,10,32,12,32,1291,9,32,1,
	32,1,32,3,32,1295,8,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,3,33,1304,8,33,
	1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,5,35,1316,8,35,10,35,
	12,35,1319,9,35,3,35,1321,8,35,1,35,1,35,1,35,1,35,1,35,5,35,1328,8,35,
	10,35,12,35,1331,9,35,3,35,1333,8,35,1,35,1,35,1,35,1,35,5,35,1339,8,35,
	10,35,12,35,1342,9,35,3,35,1344,8,35,1,35,3,35,1347,8,35,1,35,1,35,1,35,
	3,35,1352,8,35,1,35,3,35,1355,8,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
	35,5,35,1365,8,35,10,35,12,35,1368,9,35,3,35,1370,8,35,1,35,1,35,1,35,1,
	35,5,35,1376,8,35,10,35,12,35,1379,9,35,1,35,1,35,3,35,1383,8,35,1,35,1,
	35,3,35,1387,8,35,3,35,1389,8,35,3,35,1391,8,35,1,36,1,36,1,36,1,36,1,37,
	1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,1406,8,37,3,37,1408,8,37,1,
	38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,3,38,1419,8,38,1,39,1,39,1,39,
	1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,
	39,1,39,3,39,1440,8,39,1,40,1,40,1,40,1,40,1,40,1,40,5,40,1448,8,40,10,
	40,12,40,1451,9,40,1,40,1,40,1,41,1,41,1,41,1,41,1,42,1,42,3,42,1461,8,
	42,1,42,1,42,3,42,1465,8,42,3,42,1467,8,42,1,43,1,43,1,43,1,43,5,43,1473,
	8,43,10,43,12,43,1476,9,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,
	1,44,1,44,1,44,5,44,1490,8,44,10,44,12,44,1493,9,44,1,44,1,44,1,44,3,44,
	1498,8,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,3,44,1509,8,44,1,
	45,1,45,1,46,1,46,1,46,3,46,1516,8,46,1,46,1,46,3,46,1520,8,46,1,46,1,46,
	1,46,1,46,1,46,1,46,5,46,1528,8,46,10,46,12,46,1531,9,46,1,47,1,47,1,47,
	1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,1543,8,47,1,47,1,47,1,47,1,47,1,
	47,1,47,3,47,1551,8,47,1,47,1,47,1,47,1,47,1,47,5,47,1558,8,47,10,47,12,
	47,1561,9,47,1,47,1,47,1,47,3,47,1566,8,47,1,47,1,47,1,47,1,47,1,47,1,47,
	3,47,1574,8,47,1,47,1,47,1,47,1,47,3,47,1580,8,47,1,47,1,47,3,47,1584,8,
	47,1,47,1,47,1,47,3,47,1589,8,47,1,47,1,47,1,47,3,47,1594,8,47,1,48,1,48,
	1,48,1,48,3,48,1600,8,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,
	48,1,48,1,48,5,48,1614,8,48,10,48,12,48,1617,9,48,1,49,1,49,1,49,1,49,1,
	49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,
	1,49,1,49,1,49,1,49,1,49,1,49,4,49,1644,8,49,11,49,12,49,1645,1,49,1,49,
	1,49,1,49,1,49,1,49,1,49,5,49,1655,8,49,10,49,12,49,1658,9,49,1,49,1,49,
	1,49,1,49,1,49,1,49,1,49,3,49,1667,8,49,1,49,3,49,1670,8,49,1,49,3,49,1673,
	8,49,1,49,1,49,1,49,3,49,1678,8,49,1,49,1,49,1,49,5,49,1683,8,49,10,49,
	12,49,1686,9,49,3,49,1688,8,49,1,49,1,49,1,49,1,49,1,49,5,49,1695,8,49,
	10,49,12,49,1698,9,49,3,49,1700,8,49,1,49,1,49,3,49,1704,8,49,1,49,3,49,
	1707,8,49,1,49,3,49,1710,8,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
	49,1,49,1,49,5,49,1723,8,49,10,49,12,49,1726,9,49,3,49,1728,8,49,1,49,1,
	49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,4,49,
	1745,8,49,11,49,12,49,1746,1,49,1,49,3,49,1751,8,49,1,49,1,49,1,49,1,49,
	4,49,1757,8,49,11,49,12,49,1758,1,49,1,49,3,49,1763,8,49,1,49,1,49,1,49,
	1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
	49,1,49,1,49,1,49,5,49,1786,8,49,10,49,12,49,1789,9,49,3,49,1791,8,49,1,
	49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,1800,8,49,1,49,1,49,1,49,1,49,3,49,
	1806,8,49,1,49,1,49,1,49,1,49,3,49,1812,8,49,1,49,1,49,1,49,1,49,3,49,1818,
	8,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,1831,8,
	49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,1840,8,49,1,49,1,49,1,49,1,49,
	1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,5,
	49,1860,8,49,10,49,12,49,1863,9,49,3,49,1865,8,49,1,49,3,49,1868,8,49,1,
	49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,5,49,1878,8,49,10,49,12,49,1881,9,
	49,1,50,1,50,1,51,1,51,1,51,1,51,3,51,1889,8,51,1,52,1,52,1,52,1,52,3,52,
	1895,8,52,3,52,1897,8,52,1,53,1,53,1,53,1,53,1,53,1,53,3,53,1905,8,53,1,
	54,1,54,1,55,1,55,1,56,1,56,1,57,1,57,3,57,1915,8,57,1,57,1,57,1,57,1,57,
	3,57,1921,8,57,1,58,1,58,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,5,60,1933,
	8,60,10,60,12,60,1936,9,60,1,60,1,60,1,60,1,60,1,60,1,60,3,60,1944,8,60,
	1,60,1,60,1,60,1,60,1,60,3,60,1951,8,60,1,60,1,60,1,60,3,60,1956,8,60,1,
	60,1,60,1,60,1,60,1,60,3,60,1963,8,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,
	1,60,3,60,1973,8,60,1,60,1,60,1,60,3,60,1978,8,60,1,60,1,60,1,60,1,60,1,
	60,3,60,1985,8,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,
	1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,5,60,2009,8,60,10,
	60,12,60,2012,9,60,1,60,1,60,3,60,2016,8,60,3,60,2018,8,60,1,60,1,60,1,
	60,1,60,1,60,3,60,2025,8,60,5,60,2027,8,60,10,60,12,60,2030,9,60,1,61,1,
	61,1,61,1,61,3,61,2036,8,61,1,62,1,62,3,62,2040,8,62,1,63,1,63,1,63,1,63,
	1,63,1,64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,3,65,2057,8,65,1,
	65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,5,65,2070,8,65,10,
	65,12,65,2073,9,65,1,65,1,65,1,65,1,65,3,65,2079,8,65,1,65,1,65,1,65,1,
	65,1,65,1,65,1,65,3,65,2088,8,65,1,65,1,65,1,65,1,65,1,65,1,65,5,65,2096,
	8,65,10,65,12,65,2099,9,65,1,65,1,65,3,65,2103,8,65,1,65,1,65,1,65,1,65,
	1,65,5,65,2110,8,65,10,65,12,65,2113,9,65,1,65,1,65,3,65,2117,8,65,1,66,
	1,66,1,66,1,66,1,66,1,66,3,66,2125,8,66,1,67,1,67,1,67,1,67,5,67,2131,8,
	67,10,67,12,67,2134,9,67,3,67,2136,8,67,1,67,1,67,1,67,1,67,3,67,2142,8,
	67,1,67,3,67,2145,8,67,1,67,1,67,1,67,1,67,1,67,3,67,2152,8,67,1,67,1,67,
	1,67,1,67,5,67,2158,8,67,10,67,12,67,2161,9,67,3,67,2163,8,67,1,67,1,67,
	1,67,1,67,5,67,2169,8,67,10,67,12,67,2172,9,67,3,67,2174,8,67,1,68,1,68,
	1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,
	68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,3,68,2200,8,68,1,69,1,69,1,69,1,69,
	1,69,1,69,1,69,1,69,1,69,3,69,2211,8,69,1,70,1,70,1,70,3,70,2216,8,70,1,
	70,1,70,1,70,1,70,1,70,5,70,2223,8,70,10,70,12,70,2226,9,70,1,71,1,71,1,
	71,1,71,1,71,1,71,1,71,1,71,5,71,2236,8,71,10,71,12,71,2239,9,71,1,71,1,
	71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,3,71,2253,8,71,1,72,
	1,72,3,72,2257,8,72,1,72,1,72,3,72,2261,8,72,1,72,1,72,3,72,2265,8,72,1,
	72,1,72,1,72,1,72,3,72,2271,8,72,1,72,1,72,3,72,2275,8,72,1,72,1,72,3,72,
	2279,8,72,1,72,1,72,3,72,2283,8,72,3,72,2285,8,72,1,73,1,73,1,73,1,73,1,
	74,1,74,1,74,1,74,3,74,2295,8,74,1,75,1,75,1,75,1,75,1,75,3,75,2302,8,75,
	1,76,1,76,1,76,1,76,1,76,1,76,1,76,3,76,2311,8,76,1,77,1,77,1,77,1,77,1,
	77,3,77,2318,8,77,1,78,1,78,1,78,1,78,1,78,3,78,2325,8,78,1,79,1,79,1,79,
	5,79,2330,8,79,10,79,12,79,2333,9,79,1,80,1,80,1,81,1,81,1,81,5,81,2340,
	8,81,10,81,12,81,2343,9,81,1,82,1,82,1,82,3,82,2348,8,82,1,83,1,83,1,83,
	1,83,1,83,3,83,2355,8,83,1,84,1,84,1,84,5,84,2360,8,84,10,84,12,84,2363,
	9,84,1,85,1,85,1,85,1,85,1,85,3,85,2370,8,85,1,86,3,86,2373,8,86,1,86,1,
	86,3,86,2377,8,86,1,86,1,86,3,86,2381,8,86,1,86,3,86,2384,8,86,1,87,1,87,
	1,87,0,7,36,60,92,96,98,120,140,88,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
	28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
	76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,
	118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,
	154,156,158,160,162,164,166,168,170,172,174,0,28,2,0,34,34,184,184,2,0,
	60,60,111,111,2,0,194,194,211,211,2,0,87,87,102,102,2,0,74,74,103,103,1,
	0,191,192,2,0,83,83,138,138,2,0,259,259,263,263,2,0,73,73,227,227,2,0,27,
	27,62,62,2,0,83,83,117,117,2,0,20,20,65,65,2,0,30,30,210,210,2,0,104,104,
	198,198,1,0,253,254,1,0,255,257,2,0,82,82,193,193,1,0,247,252,3,0,20,20,
	24,24,205,205,2,0,79,79,221,221,5,0,58,58,99,99,135,136,196,196,245,245,
	1,0,139,142,2,0,84,84,170,170,3,0,94,94,116,116,214,214,4,0,66,66,112,112,
	126,126,234,234,2,0,154,154,244,244,4,0,61,61,107,107,199,199,230,230,49,
	0,17,20,22,22,24,25,27,30,33,34,37,42,47,47,56,58,60,60,62,62,64,64,66,
	67,70,70,74,74,77,77,80,84,86,86,89,94,97,97,99,101,103,104,106,106,109,
	109,111,112,114,114,116,118,120,120,122,123,126,136,138,144,148,151,153,
	155,158,158,160,171,173,176,178,185,187,189,191,198,200,210,212,214,216,
	220,222,223,225,226,228,228,230,232,234,234,236,237,240,240,242,246,2774,
	0,179,1,0,0,0,2,189,1,0,0,0,4,191,1,0,0,0,6,194,1,0,0,0,8,197,1,0,0,0,10,
	200,1,0,0,0,12,203,1,0,0,0,14,915,1,0,0,0,16,918,1,0,0,0,18,922,1,0,0,0,
	20,936,1,0,0,0,22,938,1,0,0,0,24,952,1,0,0,0,26,958,1,0,0,0,28,969,1,0,
	0,0,30,973,1,0,0,0,32,1010,1,0,0,0,34,1012,1,0,0,0,36,1014,1,0,0,0,38,1050,
	1,0,0,0,40,1052,1,0,0,0,42,1060,1,0,0,0,44,1108,1,0,0,0,46,1158,1,0,0,0,
	48,1173,1,0,0,0,50,1175,1,0,0,0,52,1182,1,0,0,0,54,1211,1,0,0,0,56,1220,
	1,0,0,0,58,1237,1,0,0,0,60,1239,1,0,0,0,62,1278,1,0,0,0,64,1294,1,0,0,0,
	66,1296,1,0,0,0,68,1305,1,0,0,0,70,1307,1,0,0,0,72,1392,1,0,0,0,74,1407,
	1,0,0,0,76,1418,1,0,0,0,78,1439,1,0,0,0,80,1441,1,0,0,0,82,1454,1,0,0,0,
	84,1458,1,0,0,0,86,1468,1,0,0,0,88,1508,1,0,0,0,90,1510,1,0,0,0,92,1519,
	1,0,0,0,94,1593,1,0,0,0,96,1599,1,0,0,0,98,1867,1,0,0,0,100,1882,1,0,0,
	0,102,1888,1,0,0,0,104,1896,1,0,0,0,106,1904,1,0,0,0,108,1906,1,0,0,0,110,
	1908,1,0,0,0,112,1910,1,0,0,0,114,1912,1,0,0,0,116,1922,1,0,0,0,118,1924,
	1,0,0,0,120,2017,1,0,0,0,122,2035,1,0,0,0,124,2039,1,0,0,0,126,2041,1,0,
	0,0,128,2046,1,0,0,0,130,2116,1,0,0,0,132,2118,1,0,0,0,134,2135,1,0,0,0,
	136,2199,1,0,0,0,138,2210,1,0,0,0,140,2212,1,0,0,0,142,2252,1,0,0,0,144,
	2284,1,0,0,0,146,2286,1,0,0,0,148,2294,1,0,0,0,150,2301,1,0,0,0,152,2310,
	1,0,0,0,154,2317,1,0,0,0,156,2324,1,0,0,0,158,2326,1,0,0,0,160,2334,1,0,
	0,0,162,2336,1,0,0,0,164,2347,1,0,0,0,166,2354,1,0,0,0,168,2356,1,0,0,0,
	170,2369,1,0,0,0,172,2383,1,0,0,0,174,2385,1,0,0,0,176,178,3,2,1,0,177,
	176,1,0,0,0,178,181,1,0,0,0,179,177,1,0,0,0,179,180,1,0,0,0,180,182,1,0,
	0,0,181,179,1,0,0,0,182,183,5,0,0,1,183,1,1,0,0,0,184,190,3,4,2,0,185,190,
	3,6,3,0,186,190,3,8,4,0,187,190,3,10,5,0,188,190,3,12,6,0,189,184,1,0,0,
	0,189,185,1,0,0,0,189,186,1,0,0,0,189,187,1,0,0,0,189,188,1,0,0,0,190,3,
	1,0,0,0,191,192,3,14,7,0,192,193,5,270,0,0,193,5,1,0,0,0,194,195,3,90,45,
	0,195,196,5,270,0,0,196,7,1,0,0,0,197,198,3,158,79,0,198,199,5,270,0,0,
	199,9,1,0,0,0,200,201,3,120,60,0,201,202,5,270,0,0,202,11,1,0,0,0,203,204,
	3,140,70,0,204,205,5,270,0,0,205,13,1,0,0,0,206,916,3,16,8,0,207,208,5,
	231,0,0,208,916,3,170,85,0,209,210,5,231,0,0,210,211,3,170,85,0,211,212,
	5,1,0,0,212,213,3,170,85,0,213,916,1,0,0,0,214,215,5,44,0,0,215,219,5,194,
	0,0,216,217,5,100,0,0,217,218,5,146,0,0,218,220,5,76,0,0,219,216,1,0,0,
	0,219,220,1,0,0,0,220,221,1,0,0,0,221,224,3,162,81,0,222,223,5,29,0,0,223,
	225,3,166,83,0,224,222,1,0,0,0,224,225,1,0,0,0,225,228,1,0,0,0,226,227,
	5,241,0,0,227,229,3,26,13,0,228,226,1,0,0,0,228,229,1,0,0,0,229,916,1,0,
	0,0,230,231,5,68,0,0,231,234,5,194,0,0,232,233,5,100,0,0,233,235,5,76,0,
	0,234,232,1,0,0,0,234,235,1,0,0,0,235,236,1,0,0,0,236,238,3,162,81,0,237,
	239,7,0,0,0,238,237,1,0,0,0,238,239,1,0,0,0,239,916,1,0,0,0,240,241,5,21,
	0,0,241,242,5,194,0,0,242,243,3,162,81,0,243,244,5,179,0,0,244,245,5,219,
	0,0,245,246,3,170,85,0,246,916,1,0,0,0,247,248,5,21,0,0,248,249,5,194,0,
	0,249,250,3,162,81,0,250,251,5,202,0,0,251,252,5,29,0,0,252,253,3,166,83,
	0,253,916,1,0,0,0,254,255,5,44,0,0,255,259,5,211,0,0,256,257,5,100,0,0,
	257,258,5,146,0,0,258,260,5,76,0,0,259,256,1,0,0,0,259,260,1,0,0,0,260,
	261,1,0,0,0,261,263,3,162,81,0,262,264,3,86,43,0,263,262,1,0,0,0,263,264,
	1,0,0,0,264,267,1,0,0,0,265,266,5,40,0,0,266,268,3,104,52,0,267,265,1,0,
	0,0,267,268,1,0,0,0,268,271,1,0,0,0,269,270,5,241,0,0,270,272,3,26,13,0,
	271,269,1,0,0,0,271,272,1,0,0,0,272,273,1,0,0,0,273,279,5,26,0,0,274,280,
	3,16,8,0,275,276,5,2,0,0,276,277,3,16,8,0,277,278,5,3,0,0,278,280,1,0,0,
	0,279,274,1,0,0,0,279,275,1,0,0,0,280,286,1,0,0,0,281,283,5,241,0,0,282,
	284,5,143,0,0,283,282,1,0,0,0,283,284,1,0,0,0,284,285,1,0,0,0,285,287,5,
	56,0,0,286,281,1,0,0,0,286,287,1,0,0,0,287,916,1,0,0,0,288,289,5,44,0,0,
	289,293,5,211,0,0,290,291,5,100,0,0,291,292,5,146,0,0,292,294,5,76,0,0,
	293,290,1,0,0,0,293,294,1,0,0,0,294,295,1,0,0,0,295,296,3,162,81,0,296,
	297,5,2,0,0,297,302,3,20,10,0,298,299,5,4,0,0,299,301,3,20,10,0,300,298,
	1,0,0,0,301,304,1,0,0,0,302,300,1,0,0,0,302,303,1,0,0,0,303,305,1,0,0,0,
	304,302,1,0,0,0,305,308,5,3,0,0,306,307,5,40,0,0,307,309,3,104,52,0,308,
	306,1,0,0,0,308,309,1,0,0,0,309,312,1,0,0,0,310,311,5,241,0,0,311,313,3,
	26,13,0,312,310,1,0,0,0,312,313,1,0,0,0,313,916,1,0,0,0,314,315,5,68,0,
	0,315,318,5,211,0,0,316,317,5,100,0,0,317,319,5,76,0,0,318,316,1,0,0,0,
	318,319,1,0,0,0,319,320,1,0,0,0,320,916,3,162,81,0,321,322,5,107,0,0,322,
	323,5,110,0,0,323,325,3,162,81,0,324,326,3,86,43,0,325,324,1,0,0,0,325,
	326,1,0,0,0,326,327,1,0,0,0,327,328,3,16,8,0,328,916,1,0,0,0,329,330,5,
	61,0,0,330,331,5,87,0,0,331,334,3,162,81,0,332,333,5,239,0,0,333,335,3,
	92,46,0,334,332,1,0,0,0,334,335,1,0,0,0,335,916,1,0,0,0,336,337,5,21,0,
	0,337,340,5,211,0,0,338,339,5,100,0,0,339,341,5,76,0,0,340,338,1,0,0,0,
	340,341,1,0,0,0,341,342,1,0,0,0,342,343,3,162,81,0,343,344,5,179,0,0,344,
	345,5,219,0,0,345,346,3,162,81,0,346,916,1,0,0,0,347,348,5,40,0,0,348,349,
	5,152,0,0,349,350,5,211,0,0,350,351,3,162,81,0,351,354,5,113,0,0,352,355,
	3,104,52,0,353,355,5,147,0,0,354,352,1,0,0,0,354,353,1,0,0,0,355,916,1,
	0,0,0,356,357,5,40,0,0,357,358,5,152,0,0,358,359,5,38,0,0,359,360,3,162,
	81,0,360,363,5,113,0,0,361,364,3,104,52,0,362,364,5,147,0,0,363,361,1,0,
	0,0,363,362,1,0,0,0,364,916,1,0,0,0,365,366,5,21,0,0,366,369,5,211,0,0,
	367,368,5,100,0,0,368,370,5,76,0,0,369,367,1,0,0,0,369,370,1,0,0,0,370,
	371,1,0,0,0,371,372,3,162,81,0,372,373,5,179,0,0,373,376,5,38,0,0,374,375,
	5,100,0,0,375,377,5,76,0,0,376,374,1,0,0,0,376,377,1,0,0,0,377,378,1,0,
	0,0,378,379,3,170,85,0,379,380,5,219,0,0,380,381,3,170,85,0,381,916,1,0,
	0,0,382,383,5,21,0,0,383,386,5,211,0,0,384,385,5,100,0,0,385,387,5,76,0,
	0,386,384,1,0,0,0,386,387,1,0,0,0,387,388,1,0,0,0,388,389,3,162,81,0,389,
	390,5,68,0,0,390,393,5,38,0,0,391,392,5,100,0,0,392,394,5,76,0,0,393,391,
	1,0,0,0,393,394,1,0,0,0,394,395,1,0,0,0,395,396,3,162,81,0,396,916,1,0,
	0,0,397,398,5,21,0,0,398,401,5,211,0,0,399,400,5,100,0,0,400,402,5,76,0,
	0,401,399,1,0,0,0,401,402,1,0,0,0,402,403,1,0,0,0,403,404,3,162,81,0,404,
	405,5,17,0,0,405,409,5,38,0,0,406,407,5,100,0,0,407,408,5,146,0,0,408,410,
	5,76,0,0,409,406,1,0,0,0,409,410,1,0,0,0,410,411,1,0,0,0,411,412,3,22,11,
	0,412,916,1,0,0,0,413,414,5,21,0,0,414,415,5,211,0,0,415,416,3,162,81,0,
	416,417,5,202,0,0,417,418,5,29,0,0,418,419,3,166,83,0,419,916,1,0,0,0,420,
	421,5,22,0,0,421,424,3,162,81,0,422,423,5,241,0,0,423,425,3,26,13,0,424,
	422,1,0,0,0,424,425,1,0,0,0,425,916,1,0,0,0,426,429,5,44,0,0,427,428,5,
	156,0,0,428,430,5,181,0,0,429,427,1,0,0,0,429,430,1,0,0,0,430,431,1,0,0,
	0,431,432,5,132,0,0,432,436,5,237,0,0,433,434,5,100,0,0,434,435,5,146,0,
	0,435,437,5,76,0,0,436,433,1,0,0,0,436,437,1,0,0,0,437,438,1,0,0,0,438,
	441,3,162,81,0,439,440,5,40,0,0,440,442,3,104,52,0,441,439,1,0,0,0,441,
	442,1,0,0,0,442,445,1,0,0,0,443,444,5,241,0,0,444,446,3,26,13,0,445,443,
	1,0,0,0,445,446,1,0,0,0,446,447,1,0,0,0,447,448,5,26,0,0,448,449,3,16,8,
	0,449,916,1,0,0,0,450,453,5,44,0,0,451,452,5,156,0,0,452,454,5,181,0,0,
	453,451,1,0,0,0,453,454,1,0,0,0,454,455,1,0,0,0,455,456,5,237,0,0,456,459,
	3,162,81,0,457,458,5,40,0,0,458,460,3,104,52,0,459,457,1,0,0,0,459,460,
	1,0,0,0,460,463,1,0,0,0,461,462,5,197,0,0,462,464,7,1,0,0,463,461,1,0,0,
	0,463,464,1,0,0,0,464,465,1,0,0,0,465,466,5,26,0,0,466,467,3,16,8,0,467,
	916,1,0,0,0,468,469,5,178,0,0,469,470,5,132,0,0,470,471,5,237,0,0,471,916,
	3,162,81,0,472,473,5,68,0,0,473,474,5,132,0,0,474,477,5,237,0,0,475,476,
	5,100,0,0,476,478,5,76,0,0,477,475,1,0,0,0,477,478,1,0,0,0,478,479,1,0,
	0,0,479,916,3,162,81,0,480,481,5,68,0,0,481,484,5,237,0,0,482,483,5,100,
	0,0,483,485,5,76,0,0,484,482,1,0,0,0,484,485,1,0,0,0,485,486,1,0,0,0,486,
	916,3,162,81,0,487,488,5,21,0,0,488,489,5,237,0,0,489,490,3,162,81,0,490,
	491,5,179,0,0,491,492,5,219,0,0,492,493,3,162,81,0,493,916,1,0,0,0,494,
	495,5,21,0,0,495,496,5,237,0,0,496,497,3,162,81,0,497,498,5,202,0,0,498,
	499,5,29,0,0,499,500,3,166,83,0,500,916,1,0,0,0,501,502,5,33,0,0,502,503,
	3,162,81,0,503,512,5,2,0,0,504,509,3,154,77,0,505,506,5,4,0,0,506,508,3,
	154,77,0,507,505,1,0,0,0,508,511,1,0,0,0,509,507,1,0,0,0,509,510,1,0,0,
	0,510,513,1,0,0,0,511,509,1,0,0,0,512,504,1,0,0,0,512,513,1,0,0,0,513,514,
	1,0,0,0,514,515,5,3,0,0,515,916,1,0,0,0,516,517,5,44,0,0,517,518,5,187,
	0,0,518,522,3,170,85,0,519,520,5,241,0,0,520,521,5,18,0,0,521,523,3,164,
	82,0,522,519,1,0,0,0,522,523,1,0,0,0,523,526,1,0,0,0,524,525,5,102,0,0,
	525,527,3,170,85,0,526,524,1,0,0,0,526,527,1,0,0,0,527,916,1,0,0,0,528,
	529,5,68,0,0,529,530,5,187,0,0,530,916,3,170,85,0,531,532,5,90,0,0,532,
	533,3,168,84,0,533,534,5,219,0,0,534,539,3,166,83,0,535,536,5,4,0,0,536,
	538,3,166,83,0,537,535,1,0,0,0,538,541,1,0,0,0,539,537,1,0,0,0,539,540,
	1,0,0,0,540,545,1,0,0,0,541,539,1,0,0,0,542,543,5,241,0,0,543,544,5,18,
	0,0,544,546,5,155,0,0,545,542,1,0,0,0,545,546,1,0,0,0,546,550,1,0,0,0,547,
	548,5,91,0,0,548,549,5,32,0,0,549,551,3,164,82,0,550,547,1,0,0,0,550,551,
	1,0,0,0,551,554,1,0,0,0,552,553,5,102,0,0,553,555,3,170,85,0,554,552,1,
	0,0,0,554,555,1,0,0,0,555,916,1,0,0,0,556,560,5,185,0,0,557,558,5,18,0,
	0,558,559,5,155,0,0,559,561,5,85,0,0,560,557,1,0,0,0,560,561,1,0,0,0,561,
	562,1,0,0,0,562,563,3,168,84,0,563,564,5,87,0,0,564,569,3,166,83,0,565,
	566,5,4,0,0,566,568,3,166,83,0,567,565,1,0,0,0,568,571,1,0,0,0,569,567,
	1,0,0,0,569,570,1,0,0,0,570,575,1,0,0,0,571,569,1,0,0,0,572,573,5,91,0,
	0,573,574,5,32,0,0,574,576,3,164,82,0,575,572,1,0,0,0,575,576,1,0,0,0,576,
	916,1,0,0,0,577,578,5,202,0,0,578,582,5,187,0,0,579,583,5,20,0,0,580,583,
	5,144,0,0,581,583,3,170,85,0,582,579,1,0,0,0,582,580,1,0,0,0,582,581,1,
	0,0,0,583,916,1,0,0,0,584,595,5,90,0,0,585,590,3,160,80,0,586,587,5,4,0,
	0,587,589,3,160,80,0,588,586,1,0,0,0,589,592,1,0,0,0,590,588,1,0,0,0,590,
	591,1,0,0,0,591,596,1,0,0,0,592,590,1,0,0,0,593,594,5,20,0,0,594,596,5,
	173,0,0,595,585,1,0,0,0,595,593,1,0,0,0,596,597,1,0,0,0,597,599,5,152,0,
	0,598,600,7,2,0,0,599,598,1,0,0,0,599,600,1,0,0,0,600,601,1,0,0,0,601,602,
	3,162,81,0,602,603,5,219,0,0,603,607,3,166,83,0,604,605,5,241,0,0,605,606,
	5,90,0,0,606,608,5,155,0,0,607,604,1,0,0,0,607,608,1,0,0,0,608,916,1,0,
	0,0,609,620,5,93,0,0,610,615,3,160,80,0,611,612,5,4,0,0,612,614,3,160,80,
	0,613,611,1,0,0,0,614,617,1,0,0,0,615,613,1,0,0,0,615,616,1,0,0,0,616,621,
	1,0,0,0,617,615,1,0,0,0,618,619,5,20,0,0,619,621,5,173,0,0,620,610,1,0,
	0,0,620,618,1,0,0,0,621,622,1,0,0,0,622,624,5,152,0,0,623,625,7,2,0,0,624,
	623,1,0,0,0,624,625,1,0,0,0,625,626,1,0,0,0,626,627,3,162,81,0,627,628,
	5,219,0,0,628,629,3,166,83,0,629,916,1,0,0,0,630,634,5,185,0,0,631,632,
	5,90,0,0,632,633,5,155,0,0,633,635,5,85,0,0,634,631,1,0,0,0,634,635,1,0,
	0,0,635,646,1,0,0,0,636,641,3,160,80,0,637,638,5,4,0,0,638,640,3,160,80,
	0,639,637,1,0,0,0,640,643,1,0,0,0,641,639,1,0,0,0,641,642,1,0,0,0,642,647,
	1,0,0,0,643,641,1,0,0,0,644,645,5,20,0,0,645,647,5,173,0,0,646,636,1,0,
	0,0,646,644,1,0,0,0,647,648,1,0,0,0,648,650,5,152,0,0,649,651,7,2,0,0,650,
	649,1,0,0,0,650,651,1,0,0,0,651,652,1,0,0,0,652,653,3,162,81,0,653,654,
	5,87,0,0,654,655,3,166,83,0,655,916,1,0,0,0,656,657,5,204,0,0,657,663,5,
	92,0,0,658,660,5,152,0,0,659,661,5,211,0,0,660,659,1,0,0,0,660,661,1,0,
	0,0,661,662,1,0,0,0,662,664,3,162,81,0,663,658,1,0,0,0,663,664,1,0,0,0,
	664,916,1,0,0,0,665,667,5,77,0,0,666,668,5,22,0,0,667,666,1,0,0,0,667,668,
	1,0,0,0,668,670,1,0,0,0,669,671,5,236,0,0,670,669,1,0,0,0,670,671,1,0,0,
	0,671,683,1,0,0,0,672,673,5,2,0,0,673,678,3,148,74,0,674,675,5,4,0,0,675,
	677,3,148,74,0,676,674,1,0,0,0,677,680,1,0,0,0,678,676,1,0,0,0,678,679,
	1,0,0,0,679,681,1,0,0,0,680,678,1,0,0,0,681,682,5,3,0,0,682,684,1,0,0,0,
	683,672,1,0,0,0,683,684,1,0,0,0,684,685,1,0,0,0,685,916,3,14,7,0,686,687,
	5,204,0,0,687,688,5,44,0,0,688,689,5,211,0,0,689,916,3,162,81,0,690,691,
	5,204,0,0,691,692,5,44,0,0,692,693,5,194,0,0,693,916,3,162,81,0,694,695,
	5,204,0,0,695,696,5,44,0,0,696,697,5,237,0,0,697,916,3,162,81,0,698,699,
	5,204,0,0,699,700,5,44,0,0,700,701,5,132,0,0,701,702,5,237,0,0,702,916,
	3,162,81,0,703,704,5,204,0,0,704,707,5,212,0,0,705,706,7,3,0,0,706,708,
	3,162,81,0,707,705,1,0,0,0,707,708,1,0,0,0,708,715,1,0,0,0,709,710,5,121,
	0,0,710,713,3,104,52,0,711,712,5,72,0,0,712,714,3,104,52,0,713,711,1,0,
	0,0,713,714,1,0,0,0,714,716,1,0,0,0,715,709,1,0,0,0,715,716,1,0,0,0,716,
	916,1,0,0,0,717,718,5,204,0,0,718,721,5,195,0,0,719,720,7,3,0,0,720,722,
	3,170,85,0,721,719,1,0,0,0,721,722,1,0,0,0,722,729,1,0,0,0,723,724,5,121,
	0,0,724,727,3,104,52,0,725,726,5,72,0,0,726,728,3,104,52,0,727,725,1,0,
	0,0,727,728,1,0,0,0,728,730,1,0,0,0,729,723,1,0,0,0,729,730,1,0,0,0,730,
	916,1,0,0,0,731,732,5,204,0,0,732,739,5,37,0,0,733,734,5,121,0,0,734,737,
	3,104,52,0,735,736,5,72,0,0,736,738,3,104,52,0,737,735,1,0,0,0,737,738,
	1,0,0,0,738,740,1,0,0,0,739,733,1,0,0,0,739,740,1,0,0,0,740,916,1,0,0,0,
	741,742,5,204,0,0,742,743,5,39,0,0,743,745,7,3,0,0,744,746,3,162,81,0,745,
	744,1,0,0,0,745,746,1,0,0,0,746,753,1,0,0,0,747,748,5,121,0,0,748,751,3,
	104,52,0,749,750,5,72,0,0,750,752,3,104,52,0,751,749,1,0,0,0,751,752,1,
	0,0,0,752,754,1,0,0,0,753,747,1,0,0,0,753,754,1,0,0,0,754,916,1,0,0,0,755,
	756,5,204,0,0,756,757,5,207,0,0,757,758,5,85,0,0,758,916,3,162,81,0,759,
	760,5,204,0,0,760,761,5,207,0,0,761,762,5,85,0,0,762,763,5,2,0,0,763,764,
	3,16,8,0,764,765,5,3,0,0,765,916,1,0,0,0,766,768,5,204,0,0,767,769,5,47,
	0,0,768,767,1,0,0,0,768,769,1,0,0,0,769,770,1,0,0,0,770,773,5,188,0,0,771,
	772,7,3,0,0,772,774,3,170,85,0,773,771,1,0,0,0,773,774,1,0,0,0,774,916,
	1,0,0,0,775,776,5,204,0,0,776,777,5,187,0,0,777,780,5,92,0,0,778,779,7,
	3,0,0,779,781,3,170,85,0,780,778,1,0,0,0,780,781,1,0,0,0,781,916,1,0,0,
	0,782,783,5,63,0,0,783,916,3,162,81,0,784,785,5,62,0,0,785,916,3,162,81,
	0,786,787,5,204,0,0,787,794,5,89,0,0,788,789,5,121,0,0,789,792,3,104,52,
	0,790,791,5,72,0,0,791,793,3,104,52,0,792,790,1,0,0,0,792,793,1,0,0,0,793,
	795,1,0,0,0,794,788,1,0,0,0,794,795,1,0,0,0,795,916,1,0,0,0,796,797,5,204,
	0,0,797,804,5,201,0,0,798,799,5,121,0,0,799,802,3,104,52,0,800,801,5,72,
	0,0,801,803,3,104,52,0,802,800,1,0,0,0,802,803,1,0,0,0,803,805,1,0,0,0,
	804,798,1,0,0,0,804,805,1,0,0,0,805,916,1,0,0,0,806,807,5,202,0,0,807,808,
	5,201,0,0,808,809,3,162,81,0,809,810,5,247,0,0,810,811,3,90,45,0,811,916,
	1,0,0,0,812,813,5,182,0,0,813,814,5,201,0,0,814,916,3,162,81,0,815,816,
	5,206,0,0,816,825,5,220,0,0,817,822,3,150,75,0,818,819,5,4,0,0,819,821,
	3,150,75,0,820,818,1,0,0,0,821,824,1,0,0,0,822,820,1,0,0,0,822,823,1,0,
	0,0,823,826,1,0,0,0,824,822,1,0,0,0,825,817,1,0,0,0,825,826,1,0,0,0,826,
	916,1,0,0,0,827,829,5,41,0,0,828,830,5,243,0,0,829,828,1,0,0,0,829,830,
	1,0,0,0,830,916,1,0,0,0,831,833,5,189,0,0,832,834,5,243,0,0,833,832,1,0,
	0,0,833,834,1,0,0,0,834,916,1,0,0,0,835,836,5,172,0,0,836,837,3,170,85,
	0,837,838,5,87,0,0,838,839,3,14,7,0,839,916,1,0,0,0,840,841,5,59,0,0,841,
	842,5,172,0,0,842,916,3,170,85,0,843,844,5,75,0,0,844,854,3,170,85,0,845,
	846,5,233,0,0,846,851,3,90,45,0,847,848,5,4,0,0,848,850,3,90,45,0,849,847,
	1,0,0,0,850,853,1,0,0,0,851,849,1,0,0,0,851,852,1,0,0,0,852,855,1,0,0,0,
	853,851,1,0,0,0,854,845,1,0,0,0,854,855,1,0,0,0,855,916,1,0,0,0,856,857,
	5,63,0,0,857,858,5,106,0,0,858,916,3,170,85,0,859,860,5,63,0,0,860,861,
	5,160,0,0,861,916,3,170,85,0,862,863,5,202,0,0,863,864,5,165,0,0,864,916,
	3,158,79,0,865,866,5,202,0,0,866,867,5,217,0,0,867,870,5,246,0,0,868,871,
	5,123,0,0,869,871,3,90,45,0,870,868,1,0,0,0,870,869,1,0,0,0,871,916,1,0,
	0,0,872,873,5,230,0,0,873,874,3,162,81,0,874,875,5,202,0,0,875,880,3,146,
	73,0,876,877,5,4,0,0,877,879,3,146,73,0,878,876,1,0,0,0,879,882,1,0,0,0,
	880,878,1,0,0,0,880,881,1,0,0,0,881,885,1,0,0,0,882,880,1,0,0,0,883,884,
	5,239,0,0,884,886,3,92,46,0,885,883,1,0,0,0,885,886,1,0,0,0,886,916,1,0,
	0,0,887,888,5,134,0,0,888,889,5,110,0,0,889,894,3,162,81,0,890,892,5,26,
	0,0,891,890,1,0,0,0,891,892,1,0,0,0,892,893,1,0,0,0,893,895,3,170,85,0,
	894,891,1,0,0,0,894,895,1,0,0,0,895,896,1,0,0,0,896,897,5,233,0,0,897,898,
	3,60,30,0,898,899,5,152,0,0,899,901,3,90,45,0,900,902,3,130,65,0,901,900,
	1,0,0,0,902,903,1,0,0,0,903,901,1,0,0,0,903,904,1,0,0,0,904,916,1,0,0,0,
	905,906,5,204,0,0,906,907,5,40,0,0,907,908,5,152,0,0,908,909,5,211,0,0,
	909,916,3,162,81,0,910,911,5,204,0,0,911,912,5,40,0,0,912,913,5,152,0,0,
	913,914,5,38,0,0,914,916,3,162,81,0,915,206,1,0,0,0,915,207,1,0,0,0,915,
	209,1,0,0,0,915,214,1,0,0,0,915,230,1,0,0,0,915,240,1,0,0,0,915,247,1,0,
	0,0,915,254,1,0,0,0,915,288,1,0,0,0,915,314,1,0,0,0,915,321,1,0,0,0,915,
	329,1,0,0,0,915,336,1,0,0,0,915,347,1,0,0,0,915,356,1,0,0,0,915,365,1,0,
	0,0,915,382,1,0,0,0,915,397,1,0,0,0,915,413,1,0,0,0,915,420,1,0,0,0,915,
	426,1,0,0,0,915,450,1,0,0,0,915,468,1,0,0,0,915,472,1,0,0,0,915,480,1,0,
	0,0,915,487,1,0,0,0,915,494,1,0,0,0,915,501,1,0,0,0,915,516,1,0,0,0,915,
	528,1,0,0,0,915,531,1,0,0,0,915,556,1,0,0,0,915,577,1,0,0,0,915,584,1,0,
	0,0,915,609,1,0,0,0,915,630,1,0,0,0,915,656,1,0,0,0,915,665,1,0,0,0,915,
	686,1,0,0,0,915,690,1,0,0,0,915,694,1,0,0,0,915,698,1,0,0,0,915,703,1,0,
	0,0,915,717,1,0,0,0,915,731,1,0,0,0,915,741,1,0,0,0,915,755,1,0,0,0,915,
	759,1,0,0,0,915,766,1,0,0,0,915,775,1,0,0,0,915,782,1,0,0,0,915,784,1,0,
	0,0,915,786,1,0,0,0,915,796,1,0,0,0,915,806,1,0,0,0,915,812,1,0,0,0,915,
	815,1,0,0,0,915,827,1,0,0,0,915,831,1,0,0,0,915,835,1,0,0,0,915,840,1,0,
	0,0,915,843,1,0,0,0,915,856,1,0,0,0,915,859,1,0,0,0,915,862,1,0,0,0,915,
	865,1,0,0,0,915,872,1,0,0,0,915,887,1,0,0,0,915,905,1,0,0,0,915,910,1,0,
	0,0,916,15,1,0,0,0,917,919,3,18,9,0,918,917,1,0,0,0,918,919,1,0,0,0,919,
	920,1,0,0,0,920,921,3,30,15,0,921,17,1,0,0,0,922,924,5,241,0,0,923,925,
	5,177,0,0,924,923,1,0,0,0,924,925,1,0,0,0,925,926,1,0,0,0,926,931,3,54,
	27,0,927,928,5,4,0,0,928,930,3,54,27,0,929,927,1,0,0,0,930,933,1,0,0,0,
	931,929,1,0,0,0,931,932,1,0,0,0,932,19,1,0,0,0,933,931,1,0,0,0,934,937,
	3,22,11,0,935,937,3,24,12,0,936,934,1,0,0,0,936,935,1,0,0,0,937,21,1,0,
	0,0,938,939,3,170,85,0,939,942,3,120,60,0,940,941,5,146,0,0,941,943,5,147,
	0,0,942,940,1,0,0,0,942,943,1,0,0,0,943,946,1,0,0,0,944,945,5,40,0,0,945,
	947,3,104,52,0,946,944,1,0,0,0,946,947,1,0,0,0,947,950,1,0,0,0,948,949,
	5,241,0,0,949,951,3,26,13,0,950,948,1,0,0,0,950,951,1,0,0,0,951,23,1,0,
	0,0,952,953,5,121,0,0,953,956,3,162,81,0,954,955,7,4,0,0,955,957,5,174,
	0,0,956,954,1,0,0,0,956,957,1,0,0,0,957,25,1,0,0,0,958,959,5,2,0,0,959,
	964,3,28,14,0,960,961,5,4,0,0,961,963,3,28,14,0,962,960,1,0,0,0,963,966,
	1,0,0,0,964,962,1,0,0,0,964,965,1,0,0,0,965,967,1,0,0,0,966,964,1,0,0,0,
	967,968,5,3,0,0,968,27,1,0,0,0,969,970,3,170,85,0,970,971,5,247,0,0,971,
	972,3,90,45,0,972,29,1,0,0,0,973,984,3,36,18,0,974,975,5,157,0,0,975,976,
	5,32,0,0,976,981,3,40,20,0,977,978,5,4,0,0,978,980,3,40,20,0,979,977,1,
	0,0,0,980,983,1,0,0,0,981,979,1,0,0,0,981,982,1,0,0,0,982,985,1,0,0,0,983,
	981,1,0,0,0,984,974,1,0,0,0,984,985,1,0,0,0,985,991,1,0,0,0,986,987,5,150,
	0,0,987,989,3,34,17,0,988,990,7,5,0,0,989,988,1,0,0,0,989,990,1,0,0,0,990,
	992,1,0,0,0,991,986,1,0,0,0,991,992,1,0,0,0,992,1006,1,0,0,0,993,994,5,
	122,0,0,994,1007,3,32,16,0,995,996,5,80,0,0,996,998,7,6,0,0,997,999,3,34,
	17,0,998,997,1,0,0,0,998,999,1,0,0,0,999,1000,1,0,0,0,1000,1004,7,5,0,0,
	1001,1005,5,154,0,0,1002,1003,5,241,0,0,1003,1005,5,216,0,0,1004,1001,1,
	0,0,0,1004,1002,1,0,0,0,1005,1007,1,0,0,0,1006,993,1,0,0,0,1006,995,1,0,
	0,0,1006,1007,1,0,0,0,1007,31,1,0,0,0,1008,1011,5,20,0,0,1009,1011,3,34,
	17,0,1010,1008,1,0,0,0,1010,1009,1,0,0,0,1011,33,1,0,0,0,1012,1013,7,7,
	0,0,1013,35,1,0,0,0,1014,1015,6,18,-1,0,1015,1016,3,38,19,0,1016,1031,1,
	0,0,0,1017,1018,10,2,0,0,1018,1020,5,108,0,0,1019,1021,3,56,28,0,1020,1019,
	1,0,0,0,1020,1021,1,0,0,0,1021,1022,1,0,0,0,1022,1030,3,36,18,3,1023,1024,
	10,1,0,0,1024,1026,7,8,0,0,1025,1027,3,56,28,0,1026,1025,1,0,0,0,1026,1027,
	1,0,0,0,1027,1028,1,0,0,0,1028,1030,3,36,18,2,1029,1017,1,0,0,0,1029,1023,
	1,0,0,0,1030,1033,1,0,0,0,1031,1029,1,0,0,0,1031,1032,1,0,0,0,1032,37,1,
	0,0,0,1033,1031,1,0,0,0,1034,1051,3,42,21,0,1035,1036,5,211,0,0,1036,1051,
	3,162,81,0,1037,1038,5,235,0,0,1038,1043,3,90,45,0,1039,1040,5,4,0,0,1040,
	1042,3,90,45,0,1041,1039,1,0,0,0,1042,1045,1,0,0,0,1043,1041,1,0,0,0,1043,
	1044,1,0,0,0,1044,1051,1,0,0,0,1045,1043,1,0,0,0,1046,1047,5,2,0,0,1047,
	1048,3,30,15,0,1048,1049,5,3,0,0,1049,1051,1,0,0,0,1050,1034,1,0,0,0,1050,
	1035,1,0,0,0,1050,1037,1,0,0,0,1050,1046,1,0,0,0,1051,39,1,0,0,0,1052,1054,
	3,90,45,0,1053,1055,7,9,0,0,1054,1053,1,0,0,0,1054,1055,1,0,0,0,1055,1058,
	1,0,0,0,1056,1057,5,149,0,0,1057,1059,7,10,0,0,1058,1056,1,0,0,0,1058,1059,
	1,0,0,0,1059,41,1,0,0,0,1060,1062,5,199,0,0,1061,1063,3,56,28,0,1062,1061,
	1,0,0,0,1062,1063,1,0,0,0,1063,1064,1,0,0,0,1064,1069,3,58,29,0,1065,1066,
	5,4,0,0,1066,1068,3,58,29,0,1067,1065,1,0,0,0,1068,1071,1,0,0,0,1069,1067,
	1,0,0,0,1069,1070,1,0,0,0,1070,1081,1,0,0,0,1071,1069,1,0,0,0,1072,1073,
	5,87,0,0,1073,1078,3,60,30,0,1074,1075,5,4,0,0,1075,1077,3,60,30,0,1076,
	1074,1,0,0,0,1077,1080,1,0,0,0,1078,1076,1,0,0,0,1078,1079,1,0,0,0,1079,
	1082,1,0,0,0,1080,1078,1,0,0,0,1081,1072,1,0,0,0,1081,1082,1,0,0,0,1082,
	1085,1,0,0,0,1083,1084,5,239,0,0,1084,1086,3,92,46,0,1085,1083,1,0,0,0,
	1085,1086,1,0,0,0,1086,1090,1,0,0,0,1087,1088,5,95,0,0,1088,1089,5,32,0,
	0,1089,1091,3,44,22,0,1090,1087,1,0,0,0,1090,1091,1,0,0,0,1091,1094,1,0,
	0,0,1092,1093,5,98,0,0,1093,1095,3,92,46,0,1094,1092,1,0,0,0,1094,1095,
	1,0,0,0,1095,1105,1,0,0,0,1096,1097,5,240,0,0,1097,1102,3,50,25,0,1098,
	1099,5,4,0,0,1099,1101,3,50,25,0,1100,1098,1,0,0,0,1101,1104,1,0,0,0,1102,
	1100,1,0,0,0,1102,1103,1,0,0,0,1103,1106,1,0,0,0,1104,1102,1,0,0,0,1105,
	1096,1,0,0,0,1105,1106,1,0,0,0,1106,43,1,0,0,0,1107,1109,3,56,28,0,1108,
	1107,1,0,0,0,1108,1109,1,0,0,0,1109,1110,1,0,0,0,1110,1115,3,46,23,0,1111,
	1112,5,4,0,0,1112,1114,3,46,23,0,1113,1111,1,0,0,0,1114,1117,1,0,0,0,1115,
	1113,1,0,0,0,1115,1116,1,0,0,0,1116,45,1,0,0,0,1117,1115,1,0,0,0,1118,1159,
	3,48,24,0,1119,1120,5,190,0,0,1120,1129,5,2,0,0,1121,1126,3,90,45,0,1122,
	1123,5,4,0,0,1123,1125,3,90,45,0,1124,1122,1,0,0,0,1125,1128,1,0,0,0,1126,
	1124,1,0,0,0,1126,1127,1,0,0,0,1127,1130,1,0,0,0,1128,1126,1,0,0,0,1129,
	1121,1,0,0,0,1129,1130,1,0,0,0,1130,1131,1,0,0,0,1131,1159,5,3,0,0,1132,
	1133,5,46,0,0,1133,1142,5,2,0,0,1134,1139,3,90,45,0,1135,1136,5,4,0,0,1136,
	1138,3,90,45,0,1137,1135,1,0,0,0,1138,1141,1,0,0,0,1139,1137,1,0,0,0,1139,
	1140,1,0,0,0,1140,1143,1,0,0,0,1141,1139,1,0,0,0,1142,1134,1,0,0,0,1142,
	1143,1,0,0,0,1143,1144,1,0,0,0,1144,1159,5,3,0,0,1145,1146,5,96,0,0,1146,
	1147,5,203,0,0,1147,1148,5,2,0,0,1148,1153,3,48,24,0,1149,1150,5,4,0,0,
	1150,1152,3,48,24,0,1151,1149,1,0,0,0,1152,1155,1,0,0,0,1153,1151,1,0,0,
	0,1153,1154,1,0,0,0,1154,1156,1,0,0,0,1155,1153,1,0,0,0,1156,1157,5,3,0,
	0,1157,1159,1,0,0,0,1158,1118,1,0,0,0,1158,1119,1,0,0,0,1158,1132,1,0,0,
	0,1158,1145,1,0,0,0,1159,47,1,0,0,0,1160,1169,5,2,0,0,1161,1166,3,90,45,
	0,1162,1163,5,4,0,0,1163,1165,3,90,45,0,1164,1162,1,0,0,0,1165,1168,1,0,
	0,0,1166,1164,1,0,0,0,1166,1167,1,0,0,0,1167,1170,1,0,0,0,1168,1166,1,0,
	0,0,1169,1161,1,0,0,0,1169,1170,1,0,0,0,1170,1171,1,0,0,0,1171,1174,5,3,
	0,0,1172,1174,3,90,45,0,1173,1160,1,0,0,0,1173,1172,1,0,0,0,1174,49,1,0,
	0,0,1175,1176,3,170,85,0,1176,1177,5,26,0,0,1177,1178,5,2,0,0,1178,1179,
	3,52,26,0,1179,1180,5,3,0,0,1180,51,1,0,0,0,1181,1183,3,170,85,0,1182,1181,
	1,0,0,0,1182,1183,1,0,0,0,1183,1194,1,0,0,0,1184,1185,5,162,0,0,1185,1186,
	5,32,0,0,1186,1191,3,90,45,0,1187,1188,5,4,0,0,1188,1190,3,90,45,0,1189,
	1187,1,0,0,0,1190,1193,1,0,0,0,1191,1189,1,0,0,0,1191,1192,1,0,0,0,1192,
	1195,1,0,0,0,1193,1191,1,0,0,0,1194,1184,1,0,0,0,1194,1195,1,0,0,0,1195,
	1206,1,0,0,0,1196,1197,5,157,0,0,1197,1198,5,32,0,0,1198,1203,3,40,20,0,
	1199,1200,5,4,0,0,1200,1202,3,40,20,0,1201,1199,1,0,0,0,1202,1205,1,0,0,
	0,1203,1201,1,0,0,0,1203,1204,1,0,0,0,1204,1207,1,0,0,0,1205,1203,1,0,0,
	0,1206,1196,1,0,0,0,1206,1207,1,0,0,0,1207,1209,1,0,0,0,1208,1210,3,134,
	67,0,1209,1208,1,0,0,0,1209,1210,1,0,0,0,1210,53,1,0,0,0,1211,1213,3,170,
	85,0,1212,1214,3,86,43,0,1213,1212,1,0,0,0,1213,1214,1,0,0,0,1214,1215,
	1,0,0,0,1215,1216,5,26,0,0,1216,1217,5,2,0,0,1217,1218,3,16,8,0,1218,1219,
	5,3,0,0,1219,55,1,0,0,0,1220,1221,7,11,0,0,1221,57,1,0,0,0,1222,1227,3,
	90,45,0,1223,1225,5,26,0,0,1224,1223,1,0,0,0,1224,1225,1,0,0,0,1225,1226,
	1,0,0,0,1226,1228,3,170,85,0,1227,1224,1,0,0,0,1227,1228,1,0,0,0,1228,1238,
	1,0,0,0,1229,1230,3,98,49,0,1230,1231,5,1,0,0,1231,1234,5,255,0,0,1232,
	1233,5,26,0,0,1233,1235,3,86,43,0,1234,1232,1,0,0,0,1234,1235,1,0,0,0,1235,
	1238,1,0,0,0,1236,1238,5,255,0,0,1237,1222,1,0,0,0,1237,1229,1,0,0,0,1237,
	1236,1,0,0,0,1238,59,1,0,0,0,1239,1240,6,30,-1,0,1240,1241,3,66,33,0,1241,
	1260,1,0,0,0,1242,1256,10,2,0,0,1243,1244,5,45,0,0,1244,1245,5,115,0,0,
	1245,1257,3,66,33,0,1246,1247,3,62,31,0,1247,1248,5,115,0,0,1248,1249,3,
	60,30,0,1249,1250,3,64,32,0,1250,1257,1,0,0,0,1251,1252,5,137,0,0,1252,
	1253,3,62,31,0,1253,1254,5,115,0,0,1254,1255,3,66,33,0,1255,1257,1,0,0,
	0,1256,1243,1,0,0,0,1256,1246,1,0,0,0,1256,1251,1,0,0,0,1257,1259,1,0,0,
	0,1258,1242,1,0,0,0,1259,1262,1,0,0,0,1260,1258,1,0,0,0,1260,1261,1,0,0,
	0,1261,61,1,0,0,0,1262,1260,1,0,0,0,1263,1265,5,105,0,0,1264,1263,1,0,0,
	0,1264,1265,1,0,0,0,1265,1279,1,0,0,0,1266,1268,5,119,0,0,1267,1269,5,159,
	0,0,1268,1267,1,0,0,0,1268,1269,1,0,0,0,1269,1279,1,0,0,0,1270,1272,5,186,
	0,0,1271,1273,5,159,0,0,1272,1271,1,0,0,0,1272,1273,1,0,0,0,1273,1279,1,
	0,0,0,1274,1276,5,88,0,0,1275,1277,5,159,0,0,1276,1275,1,0,0,0,1276,1277,
	1,0,0,0,1277,1279,1,0,0,0,1278,1264,1,0,0,0,1278,1266,1,0,0,0,1278,1270,
	1,0,0,0,1278,1274,1,0,0,0,1279,63,1,0,0,0,1280,1281,5,152,0,0,1281,1295,
	3,92,46,0,1282,1283,5,233,0,0,1283,1284,5,2,0,0,1284,1289,3,170,85,0,1285,
	1286,5,4,0,0,1286,1288,3,170,85,0,1287,1285,1,0,0,0,1288,1291,1,0,0,0,1289,
	1287,1,0,0,0,1289,1290,1,0,0,0,1290,1292,1,0,0,0,1291,1289,1,0,0,0,1292,
	1293,5,3,0,0,1293,1295,1,0,0,0,1294,1280,1,0,0,0,1294,1282,1,0,0,0,1295,
	65,1,0,0,0,1296,1303,3,70,35,0,1297,1298,5,213,0,0,1298,1299,3,68,34,0,
	1299,1300,5,2,0,0,1300,1301,3,90,45,0,1301,1302,5,3,0,0,1302,1304,1,0,0,
	0,1303,1297,1,0,0,0,1303,1304,1,0,0,0,1304,67,1,0,0,0,1305,1306,7,12,0,
	0,1306,69,1,0,0,0,1307,1390,3,84,42,0,1308,1309,5,131,0,0,1309,1320,5,2,
	0,0,1310,1311,5,162,0,0,1311,1312,5,32,0,0,1312,1317,3,90,45,0,1313,1314,
	5,4,0,0,1314,1316,3,90,45,0,1315,1313,1,0,0,0,1316,1319,1,0,0,0,1317,1315,
	1,0,0,0,1317,1318,1,0,0,0,1318,1321,1,0,0,0,1319,1317,1,0,0,0,1320,1310,
	1,0,0,0,1320,1321,1,0,0,0,1321,1332,1,0,0,0,1322,1323,5,157,0,0,1323,1324,
	5,32,0,0,1324,1329,3,40,20,0,1325,1326,5,4,0,0,1326,1328,3,40,20,0,1327,
	1325,1,0,0,0,1328,1331,1,0,0,0,1329,1327,1,0,0,0,1329,1330,1,0,0,0,1330,
	1333,1,0,0,0,1331,1329,1,0,0,0,1332,1322,1,0,0,0,1332,1333,1,0,0,0,1333,
	1343,1,0,0,0,1334,1335,5,133,0,0,1335,1340,3,72,36,0,1336,1337,5,4,0,0,
	1337,1339,3,72,36,0,1338,1336,1,0,0,0,1339,1342,1,0,0,0,1340,1338,1,0,0,
	0,1340,1341,1,0,0,0,1341,1344,1,0,0,0,1342,1340,1,0,0,0,1343,1334,1,0,0,
	0,1343,1344,1,0,0,0,1344,1346,1,0,0,0,1345,1347,3,74,37,0,1346,1345,1,0,
	0,0,1346,1347,1,0,0,0,1347,1351,1,0,0,0,1348,1349,5,19,0,0,1349,1350,5,
	128,0,0,1350,1352,3,78,39,0,1351,1348,1,0,0,0,1351,1352,1,0,0,0,1352,1354,
	1,0,0,0,1353,1355,7,13,0,0,1354,1353,1,0,0,0,1354,1355,1,0,0,0,1355,1356,
	1,0,0,0,1356,1357,5,166,0,0,1357,1358,5,2,0,0,1358,1359,3,140,70,0,1359,
	1369,5,3,0,0,1360,1361,5,208,0,0,1361,1366,3,80,40,0,1362,1363,5,4,0,0,
	1363,1365,3,80,40,0,1364,1362,1,0,0,0,1365,1368,1,0,0,0,1366,1364,1,0,0,
	0,1366,1367,1,0,0,0,1367,1370,1,0,0,0,1368,1366,1,0,0,0,1369,1360,1,0,0,
	0,1369,1370,1,0,0,0,1370,1371,1,0,0,0,1371,1372,5,64,0,0,1372,1377,3,82,
	41,0,1373,1374,5,4,0,0,1374,1376,3,82,41,0,1375,1373,1,0,0,0,1376,1379,
	1,0,0,0,1377,1375,1,0,0,0,1377,1378,1,0,0,0,1378,1380,1,0,0,0,1379,1377,
	1,0,0,0,1380,1388,5,3,0,0,1381,1383,5,26,0,0,1382,1381,1,0,0,0,1382,1383,
	1,0,0,0,1383,1384,1,0,0,0,1384,1386,3,170,85,0,1385,1387,3,86,43,0,1386,
	1385,1,0,0,0,1386,1387,1,0,0,0,1387,1389,1,0,0,0,1388,1382,1,0,0,0,1388,
	1389,1,0,0,0,1389,1391,1,0,0,0,1390,1308,1,0,0,0,1390,1391,1,0,0,0,1391,
	71,1,0,0,0,1392,1393,3,90,45,0,1393,1394,5,26,0,0,1394,1395,3,170,85,0,
	1395,73,1,0,0,0,1396,1397,5,153,0,0,1397,1398,5,191,0,0,1398,1399,5,167,
	0,0,1399,1408,5,128,0,0,1400,1401,5,20,0,0,1401,1402,5,192,0,0,1402,1403,
	5,167,0,0,1403,1405,5,128,0,0,1404,1406,3,76,38,0,1405,1404,1,0,0,0,1405,
	1406,1,0,0,0,1406,1408,1,0,0,0,1407,1396,1,0,0,0,1407,1400,1,0,0,0,1408,
	75,1,0,0,0,1409,1410,5,204,0,0,1410,1411,5,70,0,0,1411,1419,5,130,0,0,1412,
	1413,5,151,0,0,1413,1414,5,70,0,0,1414,1419,5,130,0,0,1415,1416,5,241,0,
	0,1416,1417,5,228,0,0,1417,1419,5,192,0,0,1418,1409,1,0,0,0,1418,1412,1,
	0,0,0,1418,1415,1,0,0,0,1419,77,1,0,0,0,1420,1421,5,5,0,0,1421,1422,5,219,
	0,0,1422,1423,5,138,0,0,1423,1440,5,191,0,0,1424,1425,5,5,0,0,1425,1426,
	5,164,0,0,1426,1427,5,117,0,0,1427,1440,5,191,0,0,1428,1429,5,5,0,0,1429,
	1430,5,219,0,0,1430,1431,5,83,0,0,1431,1440,3,170,85,0,1432,1433,5,5,0,
	0,1433,1434,5,219,0,0,1434,1435,5,117,0,0,1435,1440,3,170,85,0,1436,1437,
	5,5,0,0,1437,1438,5,219,0,0,1438,1440,3,170,85,0,1439,1420,1,0,0,0,1439,
	1424,1,0,0,0,1439,1428,1,0,0,0,1439,1432,1,0,0,0,1439,1436,1,0,0,0,1440,
	79,1,0,0,0,1441,1442,3,170,85,0,1442,1443,5,247,0,0,1443,1444,5,2,0,0,1444,
	1449,3,170,85,0,1445,1446,5,4,0,0,1446,1448,3,170,85,0,1447,1445,1,0,0,
	0,1448,1451,1,0,0,0,1449,1447,1,0,0,0,1449,1450,1,0,0,0,1450,1452,1,0,0,
	0,1451,1449,1,0,0,0,1452,1453,5,3,0,0,1453,81,1,0,0,0,1454,1455,3,170,85,
	0,1455,1456,5,26,0,0,1456,1457,3,90,45,0,1457,83,1,0,0,0,1458,1466,3,88,
	44,0,1459,1461,5,26,0,0,1460,1459,1,0,0,0,1460,1461,1,0,0,0,1461,1462,1,
	0,0,0,1462,1464,3,170,85,0,1463,1465,3,86,43,0,1464,1463,1,0,0,0,1464,1465,
	1,0,0,0,1465,1467,1,0,0,0,1466,1460,1,0,0,0,1466,1467,1,0,0,0,1467,85,1,
	0,0,0,1468,1469,5,2,0,0,1469,1474,3,170,85,0,1470,1471,5,4,0,0,1471,1473,
	3,170,85,0,1472,1470,1,0,0,0,1473,1476,1,0,0,0,1474,1472,1,0,0,0,1474,1475,
	1,0,0,0,1475,1477,1,0,0,0,1476,1474,1,0,0,0,1477,1478,5,3,0,0,1478,87,1,
	0,0,0,1479,1509,3,162,81,0,1480,1481,5,2,0,0,1481,1482,3,16,8,0,1482,1483,
	5,3,0,0,1483,1509,1,0,0,0,1484,1485,5,229,0,0,1485,1486,5,2,0,0,1486,1491,
	3,90,45,0,1487,1488,5,4,0,0,1488,1490,3,90,45,0,1489,1487,1,0,0,0,1490,
	1493,1,0,0,0,1491,1489,1,0,0,0,1491,1492,1,0,0,0,1492,1494,1,0,0,0,1493,
	1491,1,0,0,0,1494,1497,5,3,0,0,1495,1496,5,241,0,0,1496,1498,5,158,0,0,
	1497,1495,1,0,0,0,1497,1498,1,0,0,0,1498,1509,1,0,0,0,1499,1500,5,118,0,
	0,1500,1501,5,2,0,0,1501,1502,3,16,8,0,1502,1503,5,3,0,0,1503,1509,1,0,
	0,0,1504,1505,5,2,0,0,1505,1506,3,60,30,0,1506,1507,5,3,0,0,1507,1509,1,
	0,0,0,1508,1479,1,0,0,0,1508,1480,1,0,0,0,1508,1484,1,0,0,0,1508,1499,1,
	0,0,0,1508,1504,1,0,0,0,1509,89,1,0,0,0,1510,1511,3,92,46,0,1511,91,1,0,
	0,0,1512,1513,6,46,-1,0,1513,1515,3,96,48,0,1514,1516,3,94,47,0,1515,1514,
	1,0,0,0,1515,1516,1,0,0,0,1516,1520,1,0,0,0,1517,1518,5,146,0,0,1518,1520,
	3,92,46,3,1519,1512,1,0,0,0,1519,1517,1,0,0,0,1520,1529,1,0,0,0,1521,1522,
	10,2,0,0,1522,1523,5,23,0,0,1523,1528,3,92,46,3,1524,1525,10,1,0,0,1525,
	1526,5,156,0,0,1526,1528,3,92,46,2,1527,1521,1,0,0,0,1527,1524,1,0,0,0,
	1528,1531,1,0,0,0,1529,1527,1,0,0,0,1529,1530,1,0,0,0,1530,93,1,0,0,0,1531,
	1529,1,0,0,0,1532,1533,3,108,54,0,1533,1534,3,96,48,0,1534,1594,1,0,0,0,
	1535,1536,3,108,54,0,1536,1537,3,110,55,0,1537,1538,5,2,0,0,1538,1539,3,
	16,8,0,1539,1540,5,3,0,0,1540,1594,1,0,0,0,1541,1543,5,146,0,0,1542,1541,
	1,0,0,0,1542,1543,1,0,0,0,1543,1544,1,0,0,0,1544,1545,5,31,0,0,1545,1546,
	3,96,48,0,1546,1547,5,23,0,0,1547,1548,3,96,48,0,1548,1594,1,0,0,0,1549,
	1551,5,146,0,0,1550,1549,1,0,0,0,1550,1551,1,0,0,0,1551,1552,1,0,0,0,1552,
	1553,5,102,0,0,1553,1554,5,2,0,0,1554,1559,3,90,45,0,1555,1556,5,4,0,0,
	1556,1558,3,90,45,0,1557,1555,1,0,0,0,1558,1561,1,0,0,0,1559,1557,1,0,0,
	0,1559,1560,1,0,0,0,1560,1562,1,0,0,0,1561,1559,1,0,0,0,1562,1563,5,3,0,
	0,1563,1594,1,0,0,0,1564,1566,5,146,0,0,1565,1564,1,0,0,0,1565,1566,1,0,
	0,0,1566,1567,1,0,0,0,1567,1568,5,102,0,0,1568,1569,5,2,0,0,1569,1570,3,
	16,8,0,1570,1571,5,3,0,0,1571,1594,1,0,0,0,1572,1574,5,146,0,0,1573,1572,
	1,0,0,0,1573,1574,1,0,0,0,1574,1575,1,0,0,0,1575,1576,5,121,0,0,1576,1579,
	3,96,48,0,1577,1578,5,72,0,0,1578,1580,3,96,48,0,1579,1577,1,0,0,0,1579,
	1580,1,0,0,0,1580,1594,1,0,0,0,1581,1583,5,113,0,0,1582,1584,5,146,0,0,
	1583,1582,1,0,0,0,1583,1584,1,0,0,0,1584,1585,1,0,0,0,1585,1594,5,147,0,
	0,1586,1588,5,113,0,0,1587,1589,5,146,0,0,1588,1587,1,0,0,0,1588,1589,1,
	0,0,0,1589,1590,1,0,0,0,1590,1591,5,65,0,0,1591,1592,5,87,0,0,1592,1594,
	3,96,48,0,1593,1532,1,0,0,0,1593,1535,1,0,0,0,1593,1542,1,0,0,0,1593,1550,
	1,0,0,0,1593,1565,1,0,0,0,1593,1573,1,0,0,0,1593,1581,1,0,0,0,1593,1586,
	1,0,0,0,1594,95,1,0,0,0,1595,1596,6,48,-1,0,1596,1600,3,98,49,0,1597,1598,
	7,14,0,0,1598,1600,3,96,48,4,1599,1595,1,0,0,0,1599,1597,1,0,0,0,1600,1615,
	1,0,0,0,1601,1602,10,3,0,0,1602,1603,7,15,0,0,1603,1614,3,96,48,4,1604,
	1605,10,2,0,0,1605,1606,7,14,0,0,1606,1614,3,96,48,3,1607,1608,10,1,0,0,
	1608,1609,5,258,0,0,1609,1614,3,96,48,2,1610,1611,10,5,0,0,1611,1612,5,
	28,0,0,1612,1614,3,106,53,0,1613,1601,1,0,0,0,1613,1604,1,0,0,0,1613,1607,
	1,0,0,0,1613,1610,1,0,0,0,1614,1617,1,0,0,0,1615,1613,1,0,0,0,1615,1616,
	1,0,0,0,1616,97,1,0,0,0,1617,1615,1,0,0,0,1618,1619,6,49,-1,0,1619,1868,
	5,147,0,0,1620,1868,3,114,57,0,1621,1622,3,170,85,0,1622,1623,3,104,52,
	0,1623,1868,1,0,0,0,1624,1625,5,67,0,0,1625,1626,5,171,0,0,1626,1868,3,
	104,52,0,1627,1868,3,172,86,0,1628,1868,3,112,56,0,1629,1868,3,104,52,0,
	1630,1868,5,262,0,0,1631,1868,5,259,0,0,1632,1633,5,169,0,0,1633,1634,5,
	2,0,0,1634,1635,3,96,48,0,1635,1636,5,102,0,0,1636,1637,3,96,48,0,1637,
	1638,5,3,0,0,1638,1868,1,0,0,0,1639,1640,5,2,0,0,1640,1643,3,90,45,0,1641,
	1642,5,4,0,0,1642,1644,3,90,45,0,1643,1641,1,0,0,0,1644,1645,1,0,0,0,1645,
	1643,1,0,0,0,1645,1646,1,0,0,0,1646,1647,1,0,0,0,1647,1648,5,3,0,0,1648,
	1868,1,0,0,0,1649,1650,5,191,0,0,1650,1651,5,2,0,0,1651,1656,3,90,45,0,
	1652,1653,5,4,0,0,1653,1655,3,90,45,0,1654,1652,1,0,0,0,1655,1658,1,0,0,
	0,1656,1654,1,0,0,0,1656,1657,1,0,0,0,1657,1659,1,0,0,0,1658,1656,1,0,0,
	0,1659,1660,5,3,0,0,1660,1868,1,0,0,0,1661,1662,3,162,81,0,1662,1663,5,
	2,0,0,1663,1664,5,255,0,0,1664,1666,5,3,0,0,1665,1667,3,128,64,0,1666,1665,
	1,0,0,0,1666,1667,1,0,0,0,1667,1669,1,0,0,0,1668,1670,3,132,66,0,1669,1668,
	1,0,0,0,1669,1670,1,0,0,0,1670,1868,1,0,0,0,1671,1673,3,100,50,0,1672,1671,
	1,0,0,0,1672,1673,1,0,0,0,1673,1674,1,0,0,0,1674,1675,3,162,81,0,1675,1687,
	5,2,0,0,1676,1678,3,56,28,0,1677,1676,1,0,0,0,1677,1678,1,0,0,0,1678,1679,
	1,0,0,0,1679,1684,3,90,45,0,1680,1681,5,4,0,0,1681,1683,3,90,45,0,1682,
	1680,1,0,0,0,1683,1686,1,0,0,0,1684,1682,1,0,0,0,1684,1685,1,0,0,0,1685,
	1688,1,0,0,0,1686,1684,1,0,0,0,1687,1677,1,0,0,0,1687,1688,1,0,0,0,1688,
	1699,1,0,0,0,1689,1690,5,157,0,0,1690,1691,5,32,0,0,1691,1696,3,40,20,0,
	1692,1693,5,4,0,0,1693,1695,3,40,20,0,1694,1692,1,0,0,0,1695,1698,1,0,0,
	0,1696,1694,1,0,0,0,1696,1697,1,0,0,0,1697,1700,1,0,0,0,1698,1696,1,0,0,
	0,1699,1689,1,0,0,0,1699,1700,1,0,0,0,1700,1701,1,0,0,0,1701,1703,5,3,0,
	0,1702,1704,3,128,64,0,1703,1702,1,0,0,0,1703,1704,1,0,0,0,1704,1709,1,
	0,0,0,1705,1707,3,102,51,0,1706,1705,1,0,0,0,1706,1707,1,0,0,0,1707,1708,
	1,0,0,0,1708,1710,3,132,66,0,1709,1706,1,0,0,0,1709,1710,1,0,0,0,1710,1868,
	1,0,0,0,1711,1712,3,170,85,0,1712,1713,3,132,66,0,1713,1868,1,0,0,0,1714,
	1715,3,170,85,0,1715,1716,5,6,0,0,1716,1717,3,90,45,0,1717,1868,1,0,0,0,
	1718,1727,5,2,0,0,1719,1724,3,170,85,0,1720,1721,5,4,0,0,1721,1723,3,170,
	85,0,1722,1720,1,0,0,0,1723,1726,1,0,0,0,1724,1722,1,0,0,0,1724,1725,1,
	0,0,0,1725,1728,1,0,0,0,1726,1724,1,0,0,0,1727,1719,1,0,0,0,1727,1728,1,
	0,0,0,1728,1729,1,0,0,0,1729,1730,5,3,0,0,1730,1731,5,6,0,0,1731,1868,3,
	90,45,0,1732,1733,5,2,0,0,1733,1734,3,16,8,0,1734,1735,5,3,0,0,1735,1868,
	1,0,0,0,1736,1737,5,76,0,0,1737,1738,5,2,0,0,1738,1739,3,16,8,0,1739,1740,
	5,3,0,0,1740,1868,1,0,0,0,1741,1742,5,35,0,0,1742,1744,3,90,45,0,1743,1745,
	3,126,63,0,1744,1743,1,0,0,0,1745,1746,1,0,0,0,1746,1744,1,0,0,0,1746,1747,
	1,0,0,0,1747,1750,1,0,0,0,1748,1749,5,69,0,0,1749,1751,3,90,45,0,1750,1748,
	1,0,0,0,1750,1751,1,0,0,0,1751,1752,1,0,0,0,1752,1753,5,71,0,0,1753,1868,
	1,0,0,0,1754,1756,5,35,0,0,1755,1757,3,126,63,0,1756,1755,1,0,0,0,1757,
	1758,1,0,0,0,1758,1756,1,0,0,0,1758,1759,1,0,0,0,1759,1762,1,0,0,0,1760,
	1761,5,69,0,0,1761,1763,3,90,45,0,1762,1760,1,0,0,0,1762,1763,1,0,0,0,1763,
	1764,1,0,0,0,1764,1765,5,71,0,0,1765,1868,1,0,0,0,1766,1767,5,36,0,0,1767,
	1768,5,2,0,0,1768,1769,3,90,45,0,1769,1770,5,26,0,0,1770,1771,3,120,60,
	0,1771,1772,5,3,0,0,1772,1868,1,0,0,0,1773,1774,5,222,0,0,1774,1775,5,2,
	0,0,1775,1776,3,90,45,0,1776,1777,5,26,0,0,1777,1778,3,120,60,0,1778,1779,
	5,3,0,0,1779,1868,1,0,0,0,1780,1781,5,25,0,0,1781,1790,5,7,0,0,1782,1787,
	3,90,45,0,1783,1784,5,4,0,0,1784,1786,3,90,45,0,1785,1783,1,0,0,0,1786,
	1789,1,0,0,0,1787,1785,1,0,0,0,1787,1788,1,0,0,0,1788,1791,1,0,0,0,1789,
	1787,1,0,0,0,1790,1782,1,0,0,0,1790,1791,1,0,0,0,1791,1792,1,0,0,0,1792,
	1868,5,8,0,0,1793,1868,3,170,85,0,1794,1868,5,49,0,0,1795,1799,5,53,0,0,
	1796,1797,5,2,0,0,1797,1798,5,263,0,0,1798,1800,5,3,0,0,1799,1796,1,0,0,
	0,1799,1800,1,0,0,0,1800,1868,1,0,0,0,1801,1805,5,54,0,0,1802,1803,5,2,
	0,0,1803,1804,5,263,0,0,1804,1806,5,3,0,0,1805,1802,1,0,0,0,1805,1806,1,
	0,0,0,1806,1868,1,0,0,0,1807,1811,5,124,0,0,1808,1809,5,2,0,0,1809,1810,
	5,263,0,0,1810,1812,5,3,0,0,1811,1808,1,0,0,0,1811,1812,1,0,0,0,1812,1868,
	1,0,0,0,1813,1817,5,125,0,0,1814,1815,5,2,0,0,1815,1816,5,263,0,0,1816,
	1818,5,3,0,0,1817,1814,1,0,0,0,1817,1818,1,0,0,0,1818,1868,1,0,0,0,1819,
	1868,5,55,0,0,1820,1868,5,48,0,0,1821,1868,5,52,0,0,1822,1868,5,50,0,0,
	1823,1824,5,209,0,0,1824,1825,5,2,0,0,1825,1826,3,96,48,0,1826,1827,5,87,
	0,0,1827,1830,3,96,48,0,1828,1829,5,85,0,0,1829,1831,3,96,48,0,1830,1828,
	1,0,0,0,1830,1831,1,0,0,0,1831,1832,1,0,0,0,1832,1833,5,3,0,0,1833,1868,
	1,0,0,0,1834,1835,5,145,0,0,1835,1836,5,2,0,0,1836,1839,3,96,48,0,1837,
	1838,5,4,0,0,1838,1840,3,118,59,0,1839,1837,1,0,0,0,1839,1840,1,0,0,0,1840,
	1841,1,0,0,0,1841,1842,5,3,0,0,1842,1868,1,0,0,0,1843,1844,5,78,0,0,1844,
	1845,5,2,0,0,1845,1846,3,170,85,0,1846,1847,5,87,0,0,1847,1848,3,96,48,
	0,1848,1849,5,3,0,0,1849,1868,1,0,0,0,1850,1851,5,2,0,0,1851,1852,3,90,
	45,0,1852,1853,5,3,0,0,1853,1868,1,0,0,0,1854,1855,5,96,0,0,1855,1864,5,
	2,0,0,1856,1861,3,162,81,0,1857,1858,5,4,0,0,1858,1860,3,162,81,0,1859,
	1857,1,0,0,0,1860,1863,1,0,0,0,1861,1859,1,0,0,0,1861,1862,1,0,0,0,1862,
	1865,1,0,0,0,1863,1861,1,0,0,0,1864,1856,1,0,0,0,1864,1865,1,0,0,0,1865,
	1866,1,0,0,0,1866,1868,5,3,0,0,1867,1618,1,0,0,0,1867,1620,1,0,0,0,1867,
	1621,1,0,0,0,1867,1624,1,0,0,0,1867,1627,1,0,0,0,1867,1628,1,0,0,0,1867,
	1629,1,0,0,0,1867,1630,1,0,0,0,1867,1631,1,0,0,0,1867,1632,1,0,0,0,1867,
	1639,1,0,0,0,1867,1649,1,0,0,0,1867,1661,1,0,0,0,1867,1672,1,0,0,0,1867,
	1711,1,0,0,0,1867,1714,1,0,0,0,1867,1718,1,0,0,0,1867,1732,1,0,0,0,1867,
	1736,1,0,0,0,1867,1741,1,0,0,0,1867,1754,1,0,0,0,1867,1766,1,0,0,0,1867,
	1773,1,0,0,0,1867,1780,1,0,0,0,1867,1793,1,0,0,0,1867,1794,1,0,0,0,1867,
	1795,1,0,0,0,1867,1801,1,0,0,0,1867,1807,1,0,0,0,1867,1813,1,0,0,0,1867,
	1819,1,0,0,0,1867,1820,1,0,0,0,1867,1821,1,0,0,0,1867,1822,1,0,0,0,1867,
	1823,1,0,0,0,1867,1834,1,0,0,0,1867,1843,1,0,0,0,1867,1850,1,0,0,0,1867,
	1854,1,0,0,0,1868,1879,1,0,0,0,1869,1870,10,17,0,0,1870,1871,5,7,0,0,1871,
	1872,3,96,48,0,1872,1873,5,8,0,0,1873,1878,1,0,0,0,1874,1875,10,15,0,0,
	1875,1876,5,1,0,0,1876,1878,3,170,85,0,1877,1869,1,0,0,0,1877,1874,1,0,
	0,0,1878,1881,1,0,0,0,1879,1877,1,0,0,0,1879,1880,1,0,0,0,1880,99,1,0,0,
	0,1881,1879,1,0,0,0,1882,1883,7,16,0,0,1883,101,1,0,0,0,1884,1885,5,101,
	0,0,1885,1889,5,149,0,0,1886,1887,5,183,0,0,1887,1889,5,149,0,0,1888,1884,
	1,0,0,0,1888,1886,1,0,0,0,1889,103,1,0,0,0,1890,1897,5,260,0,0,1891,1894,
	5,261,0,0,1892,1893,5,224,0,0,1893,1895,5,260,0,0,1894,1892,1,0,0,0,1894,
	1895,1,0,0,0,1895,1897,1,0,0,0,1896,1890,1,0,0,0,1896,1891,1,0,0,0,1897,
	105,1,0,0,0,1898,1899,5,217,0,0,1899,1900,5,246,0,0,1900,1905,3,114,57,
	0,1901,1902,5,217,0,0,1902,1903,5,246,0,0,1903,1905,3,104,52,0,1904,1898,
	1,0,0,0,1904,1901,1,0,0,0,1905,107,1,0,0,0,1906,1907,7,17,0,0,1907,109,
	1,0,0,0,1908,1909,7,18,0,0,1909,111,1,0,0,0,1910,1911,7,19,0,0,1911,113,
	1,0,0,0,1912,1914,5,109,0,0,1913,1915,7,14,0,0,1914,1913,1,0,0,0,1914,1915,
	1,0,0,0,1915,1916,1,0,0,0,1916,1917,3,104,52,0,1917,1920,3,116,58,0,1918,
	1919,5,219,0,0,1919,1921,3,116,58,0,1920,1918,1,0,0,0,1920,1921,1,0,0,0,
	1921,115,1,0,0,0,1922,1923,7,20,0,0,1923,117,1,0,0,0,1924,1925,7,21,0,0,
	1925,119,1,0,0,0,1926,1927,6,60,-1,0,1927,1928,5,191,0,0,1928,1929,5,2,
	0,0,1929,1934,3,122,61,0,1930,1931,5,4,0,0,1931,1933,3,122,61,0,1932,1930,
	1,0,0,0,1933,1936,1,0,0,0,1934,1932,1,0,0,0,1934,1935,1,0,0,0,1935,1937,
	1,0,0,0,1936,1934,1,0,0,0,1937,1938,5,3,0,0,1938,2018,1,0,0,0,1939,1940,
	5,109,0,0,1940,1943,3,116,58,0,1941,1942,5,219,0,0,1942,1944,3,116,58,0,
	1943,1941,1,0,0,0,1943,1944,1,0,0,0,1944,2018,1,0,0,0,1945,1950,5,218,0,
	0,1946,1947,5,2,0,0,1947,1948,3,124,62,0,1948,1949,5,3,0,0,1949,1951,1,
	0,0,0,1950,1946,1,0,0,0,1950,1951,1,0,0,0,1951,1955,1,0,0,0,1952,1953,5,
	242,0,0,1953,1954,5,217,0,0,1954,1956,5,246,0,0,1955,1952,1,0,0,0,1955,
	1956,1,0,0,0,1956,2018,1,0,0,0,1957,1962,5,218,0,0,1958,1959,5,2,0,0,1959,
	1960,3,124,62,0,1960,1961,5,3,0,0,1961,1963,1,0,0,0,1962,1958,1,0,0,0,1962,
	1963,1,0,0,0,1963,1964,1,0,0,0,1964,1965,5,241,0,0,1965,1966,5,217,0,0,
	1966,2018,5,246,0,0,1967,1972,5,217,0,0,1968,1969,5,2,0,0,1969,1970,3,124,
	62,0,1970,1971,5,3,0,0,1971,1973,1,0,0,0,1972,1968,1,0,0,0,1972,1973,1,
	0,0,0,1973,1977,1,0,0,0,1974,1975,5,242,0,0,1975,1976,5,217,0,0,1976,1978,
	5,246,0,0,1977,1974,1,0,0,0,1977,1978,1,0,0,0,1978,2018,1,0,0,0,1979,1984,
	5,217,0,0,1980,1981,5,2,0,0,1981,1982,3,124,62,0,1982,1983,5,3,0,0,1983,
	1985,1,0,0,0,1984,1980,1,0,0,0,1984,1985,1,0,0,0,1985,1986,1,0,0,0,1986,
	1987,5,241,0,0,1987,1988,5,217,0,0,1988,2018,5,246,0,0,1989,1990,5,67,0,
	0,1990,2018,5,171,0,0,1991,1992,5,25,0,0,1992,1993,5,249,0,0,1993,1994,
	3,120,60,0,1994,1995,5,251,0,0,1995,2018,1,0,0,0,1996,1997,5,127,0,0,1997,
	1998,5,249,0,0,1998,1999,3,120,60,0,1999,2000,5,4,0,0,2000,2001,3,120,60,
	0,2001,2002,5,251,0,0,2002,2018,1,0,0,0,2003,2015,3,170,85,0,2004,2005,
	5,2,0,0,2005,2010,3,124,62,0,2006,2007,5,4,0,0,2007,2009,3,124,62,0,2008,
	2006,1,0,0,0,2009,2012,1,0,0,0,2010,2008,1,0,0,0,2010,2011,1,0,0,0,2011,
	2013,1,0,0,0,2012,2010,1,0,0,0,2013,2014,5,3,0,0,2014,2016,1,0,0,0,2015,
	2004,1,0,0,0,2015,2016,1,0,0,0,2016,2018,1,0,0,0,2017,1926,1,0,0,0,2017,
	1939,1,0,0,0,2017,1945,1,0,0,0,2017,1957,1,0,0,0,2017,1967,1,0,0,0,2017,
	1979,1,0,0,0,2017,1989,1,0,0,0,2017,1991,1,0,0,0,2017,1996,1,0,0,0,2017,
	2003,1,0,0,0,2018,2028,1,0,0,0,2019,2020,10,2,0,0,2020,2024,5,25,0,0,2021,
	2022,5,7,0,0,2022,2023,5,263,0,0,2023,2025,5,8,0,0,2024,2021,1,0,0,0,2024,
	2025,1,0,0,0,2025,2027,1,0,0,0,2026,2019,1,0,0,0,2027,2030,1,0,0,0,2028,
	2026,1,0,0,0,2028,2029,1,0,0,0,2029,121,1,0,0,0,2030,2028,1,0,0,0,2031,
	2036,3,120,60,0,2032,2033,3,170,85,0,2033,2034,3,120,60,0,2034,2036,1,0,
	0,0,2035,2031,1,0,0,0,2035,2032,1,0,0,0,2036,123,1,0,0,0,2037,2040,5,263,
	0,0,2038,2040,3,120,60,0,2039,2037,1,0,0,0,2039,2038,1,0,0,0,2040,125,1,
	0,0,0,2041,2042,5,238,0,0,2042,2043,3,90,45,0,2043,2044,5,215,0,0,2044,
	2045,3,90,45,0,2045,127,1,0,0,0,2046,2047,5,81,0,0,2047,2048,5,2,0,0,2048,
	2049,5,239,0,0,2049,2050,3,92,46,0,2050,2051,5,3,0,0,2051,129,1,0,0,0,2052,
	2053,5,238,0,0,2053,2056,5,129,0,0,2054,2055,5,23,0,0,2055,2057,3,90,45,
	0,2056,2054,1,0,0,0,2056,2057,1,0,0,0,2057,2058,1,0,0,0,2058,2059,5,215,
	0,0,2059,2060,5,230,0,0,2060,2061,5,202,0,0,2061,2062,3,170,85,0,2062,2063,
	5,247,0,0,2063,2071,3,90,45,0,2064,2065,5,4,0,0,2065,2066,3,170,85,0,2066,
	2067,5,247,0,0,2067,2068,3,90,45,0,2068,2070,1,0,0,0,2069,2064,1,0,0,0,
	2070,2073,1,0,0,0,2071,2069,1,0,0,0,2071,2072,1,0,0,0,2072,2117,1,0,0,0,
	2073,2071,1,0,0,0,2074,2075,5,238,0,0,2075,2078,5,129,0,0,2076,2077,5,23,
	0,0,2077,2079,3,90,45,0,2078,2076,1,0,0,0,2078,2079,1,0,0,0,2079,2080,1,
	0,0,0,2080,2081,5,215,0,0,2081,2117,5,61,0,0,2082,2083,5,238,0,0,2083,2084,
	5,146,0,0,2084,2087,5,129,0,0,2085,2086,5,23,0,0,2086,2088,3,90,45,0,2087,
	2085,1,0,0,0,2087,2088,1,0,0,0,2088,2089,1,0,0,0,2089,2090,5,215,0,0,2090,
	2102,5,107,0,0,2091,2092,5,2,0,0,2092,2097,3,170,85,0,2093,2094,5,4,0,0,
	2094,2096,3,170,85,0,2095,2093,1,0,0,0,2096,2099,1,0,0,0,2097,2095,1,0,
	0,0,2097,2098,1,0,0,0,2098,2100,1,0,0,0,2099,2097,1,0,0,0,2100,2101,5,3,
	0,0,2101,2103,1,0,0,0,2102,2091,1,0,0,0,2102,2103,1,0,0,0,2103,2104,1,0,
	0,0,2104,2105,5,235,0,0,2105,2106,5,2,0,0,2106,2111,3,90,45,0,2107,2108,
	5,4,0,0,2108,2110,3,90,45,0,2109,2107,1,0,0,0,2110,2113,1,0,0,0,2111,2109,
	1,0,0,0,2111,2112,1,0,0,0,2112,2114,1,0,0,0,2113,2111,1,0,0,0,2114,2115,
	5,3,0,0,2115,2117,1,0,0,0,2116,2052,1,0,0,0,2116,2074,1,0,0,0,2116,2082,
	1,0,0,0,2117,131,1,0,0,0,2118,2124,5,161,0,0,2119,2125,3,170,85,0,2120,
	2121,5,2,0,0,2121,2122,3,52,26,0,2122,2123,5,3,0,0,2123,2125,1,0,0,0,2124,
	2119,1,0,0,0,2124,2120,1,0,0,0,2125,133,1,0,0,0,2126,2127,5,133,0,0,2127,
	2132,3,72,36,0,2128,2129,5,4,0,0,2129,2131,3,72,36,0,2130,2128,1,0,0,0,
	2131,2134,1,0,0,0,2132,2130,1,0,0,0,2132,2133,1,0,0,0,2133,2136,1,0,0,0,
	2134,2132,1,0,0,0,2135,2126,1,0,0,0,2135,2136,1,0,0,0,2136,2137,1,0,0,0,
	2137,2141,3,136,68,0,2138,2139,5,19,0,0,2139,2140,5,128,0,0,2140,2142,3,
	78,39,0,2141,2138,1,0,0,0,2141,2142,1,0,0,0,2142,2144,1,0,0,0,2143,2145,
	7,13,0,0,2144,2143,1,0,0,0,2144,2145,1,0,0,0,2145,2151,1,0,0,0,2146,2147,
	5,166,0,0,2147,2148,5,2,0,0,2148,2149,3,140,70,0,2149,2150,5,3,0,0,2150,
	2152,1,0,0,0,2151,2146,1,0,0,0,2151,2152,1,0,0,0,2152,2162,1,0,0,0,2153,
	2154,5,208,0,0,2154,2159,3,80,40,0,2155,2156,5,4,0,0,2156,2158,3,80,40,
	0,2157,2155,1,0,0,0,2158,2161,1,0,0,0,2159,2157,1,0,0,0,2159,2160,1,0,0,
	0,2160,2163,1,0,0,0,2161,2159,1,0,0,0,2162,2153,1,0,0,0,2162,2163,1,0,0,
	0,2163,2173,1,0,0,0,2164,2165,5,64,0,0,2165,2170,3,82,41,0,2166,2167,5,
	4,0,0,2167,2169,3,82,41,0,2168,2166,1,0,0,0,2169,2172,1,0,0,0,2170,2168,
	1,0,0,0,2170,2171,1,0,0,0,2171,2174,1,0,0,0,2172,2170,1,0,0,0,2173,2164,
	1,0,0,0,2173,2174,1,0,0,0,2174,135,1,0,0,0,2175,2176,5,175,0,0,2176,2200,
	3,138,69,0,2177,2178,5,192,0,0,2178,2200,3,138,69,0,2179,2180,5,97,0,0,
	2180,2200,3,138,69,0,2181,2182,5,175,0,0,2182,2183,5,31,0,0,2183,2184,3,
	138,69,0,2184,2185,5,23,0,0,2185,2186,3,138,69,0,2186,2200,1,0,0,0,2187,
	2188,5,192,0,0,2188,2189,5,31,0,0,2189,2190,3,138,69,0,2190,2191,5,23,0,
	0,2191,2192,3,138,69,0,2192,2200,1,0,0,0,2193,2194,5,97,0,0,2194,2195,5,
	31,0,0,2195,2196,3,138,69,0,2196,2197,5,23,0,0,2197,2198,3,138,69,0,2198,
	2200,1,0,0,0,2199,2175,1,0,0,0,2199,2177,1,0,0,0,2199,2179,1,0,0,0,2199,
	2181,1,0,0,0,2199,2187,1,0,0,0,2199,2193,1,0,0,0,2200,137,1,0,0,0,2201,
	2202,5,225,0,0,2202,2211,5,170,0,0,2203,2204,5,225,0,0,2204,2211,5,84,0,
	0,2205,2206,5,47,0,0,2206,2211,5,191,0,0,2207,2208,3,90,45,0,2208,2209,
	7,22,0,0,2209,2211,1,0,0,0,2210,2201,1,0,0,0,2210,2203,1,0,0,0,2210,2205,
	1,0,0,0,2210,2207,1,0,0,0,2211,139,1,0,0,0,2212,2213,6,70,-1,0,2213,2215,
	3,142,71,0,2214,2216,3,144,72,0,2215,2214,1,0,0,0,2215,2216,1,0,0,0,2216,
	2224,1,0,0,0,2217,2218,10,2,0,0,2218,2223,3,140,70,3,2219,2220,10,1,0,0,
	2220,2221,5,9,0,0,2221,2223,3,140,70,2,2222,2217,1,0,0,0,2222,2219,1,0,
	0,0,2223,2226,1,0,0,0,2224,2222,1,0,0,0,2224,2225,1,0,0,0,2225,141,1,0,
	0,0,2226,2224,1,0,0,0,2227,2253,3,170,85,0,2228,2229,5,2,0,0,2229,2253,
	5,3,0,0,2230,2231,5,168,0,0,2231,2232,5,2,0,0,2232,2237,3,140,70,0,2233,
	2234,5,4,0,0,2234,2236,3,140,70,0,2235,2233,1,0,0,0,2236,2239,1,0,0,0,2237,
	2235,1,0,0,0,2237,2238,1,0,0,0,2238,2240,1,0,0,0,2239,2237,1,0,0,0,2240,
	2241,5,3,0,0,2241,2253,1,0,0,0,2242,2243,5,2,0,0,2243,2244,3,140,70,0,2244,
	2245,5,3,0,0,2245,2253,1,0,0,0,2246,2253,5,10,0,0,2247,2253,5,11,0,0,2248,
	2249,5,12,0,0,2249,2250,3,140,70,0,2250,2251,5,13,0,0,2251,2253,1,0,0,0,
	2252,2227,1,0,0,0,2252,2228,1,0,0,0,2252,2230,1,0,0,0,2252,2242,1,0,0,0,
	2252,2246,1,0,0,0,2252,2247,1,0,0,0,2252,2248,1,0,0,0,2253,143,1,0,0,0,
	2254,2256,5,255,0,0,2255,2257,5,259,0,0,2256,2255,1,0,0,0,2256,2257,1,0,
	0,0,2257,2285,1,0,0,0,2258,2260,5,253,0,0,2259,2261,5,259,0,0,2260,2259,
	1,0,0,0,2260,2261,1,0,0,0,2261,2285,1,0,0,0,2262,2264,5,259,0,0,2263,2265,
	5,259,0,0,2264,2263,1,0,0,0,2264,2265,1,0,0,0,2265,2285,1,0,0,0,2266,2267,
	5,14,0,0,2267,2268,5,263,0,0,2268,2270,5,15,0,0,2269,2271,5,259,0,0,2270,
	2269,1,0,0,0,2270,2271,1,0,0,0,2271,2285,1,0,0,0,2272,2274,5,14,0,0,2273,
	2275,5,263,0,0,2274,2273,1,0,0,0,2274,2275,1,0,0,0,2275,2276,1,0,0,0,2276,
	2278,5,4,0,0,2277,2279,5,263,0,0,2278,2277,1,0,0,0,2278,2279,1,0,0,0,2279,
	2280,1,0,0,0,2280,2282,5,15,0,0,2281,2283,5,259,0,0,2282,2281,1,0,0,0,2282,
	2283,1,0,0,0,2283,2285,1,0,0,0,2284,2254,1,0,0,0,2284,2258,1,0,0,0,2284,
	2262,1,0,0,0,2284,2266,1,0,0,0,2284,2272,1,0,0,0,2285,145,1,0,0,0,2286,
	2287,3,170,85,0,2287,2288,5,247,0,0,2288,2289,3,90,45,0,2289,147,1,0,0,
	0,2290,2291,5,86,0,0,2291,2295,7,23,0,0,2292,2293,5,223,0,0,2293,2295,7,
	24,0,0,2294,2290,1,0,0,0,2294,2292,1,0,0,0,2295,149,1,0,0,0,2296,2297,5,
	114,0,0,2297,2298,5,120,0,0,2298,2302,3,152,76,0,2299,2300,5,176,0,0,2300,
	2302,7,25,0,0,2301,2296,1,0,0,0,2301,2299,1,0,0,0,2302,151,1,0,0,0,2303,
	2304,5,176,0,0,2304,2311,5,226,0,0,2305,2306,5,176,0,0,2306,2311,5,42,0,
	0,2307,2308,5,180,0,0,2308,2311,5,176,0,0,2309,2311,5,200,0,0,2310,2303,
	1,0,0,0,2310,2305,1,0,0,0,2310,2307,1,0,0,0,2310,2309,1,0,0,0,2311,153,
	1,0,0,0,2312,2318,3,90,45,0,2313,2314,3,170,85,0,2314,2315,5,16,0,0,2315,
	2316,3,90,45,0,2316,2318,1,0,0,0,2317,2312,1,0,0,0,2317,2313,1,0,0,0,2318,
	155,1,0,0,0,2319,2320,3,170,85,0,2320,2321,5,1,0,0,2321,2322,3,170,85,0,
	2322,2325,1,0,0,0,2323,2325,3,170,85,0,2324,2319,1,0,0,0,2324,2323,1,0,
	0,0,2325,157,1,0,0,0,2326,2331,3,156,78,0,2327,2328,5,4,0,0,2328,2330,3,
	156,78,0,2329,2327,1,0,0,0,2330,2333,1,0,0,0,2331,2329,1,0,0,0,2331,2332,
	1,0,0,0,2332,159,1,0,0,0,2333,2331,1,0,0,0,2334,2335,7,26,0,0,2335,161,
	1,0,0,0,2336,2341,3,170,85,0,2337,2338,5,1,0,0,2338,2340,3,170,85,0,2339,
	2337,1,0,0,0,2340,2343,1,0,0,0,2341,2339,1,0,0,0,2341,2342,1,0,0,0,2342,
	163,1,0,0,0,2343,2341,1,0,0,0,2344,2348,3,166,83,0,2345,2348,5,55,0,0,2346,
	2348,5,51,0,0,2347,2344,1,0,0,0,2347,2345,1,0,0,0,2347,2346,1,0,0,0,2348,
	165,1,0,0,0,2349,2355,3,170,85,0,2350,2351,5,232,0,0,2351,2355,3,170,85,
	0,2352,2353,5,187,0,0,2353,2355,3,170,85,0,2354,2349,1,0,0,0,2354,2350,
	1,0,0,0,2354,2352,1,0,0,0,2355,167,1,0,0,0,2356,2361,3,170,85,0,2357,2358,
	5,4,0,0,2358,2360,3,170,85,0,2359,2357,1,0,0,0,2360,2363,1,0,0,0,2361,2359,
	1,0,0,0,2361,2362,1,0,0,0,2362,169,1,0,0,0,2363,2361,1,0,0,0,2364,2370,
	5,266,0,0,2365,2370,5,268,0,0,2366,2370,3,174,87,0,2367,2370,5,269,0,0,
	2368,2370,5,267,0,0,2369,2364,1,0,0,0,2369,2365,1,0,0,0,2369,2366,1,0,0,
	0,2369,2367,1,0,0,0,2369,2368,1,0,0,0,2370,171,1,0,0,0,2371,2373,5,254,
	0,0,2372,2371,1,0,0,0,2372,2373,1,0,0,0,2373,2374,1,0,0,0,2374,2384,5,264,
	0,0,2375,2377,5,254,0,0,2376,2375,1,0,0,0,2376,2377,1,0,0,0,2377,2378,1,
	0,0,0,2378,2384,5,265,0,0,2379,2381,5,254,0,0,2380,2379,1,0,0,0,2380,2381,
	1,0,0,0,2381,2382,1,0,0,0,2382,2384,5,263,0,0,2383,2372,1,0,0,0,2383,2376,
	1,0,0,0,2383,2380,1,0,0,0,2384,173,1,0,0,0,2385,2386,7,27,0,0,2386,175,
	1,0,0,0,311,179,189,219,224,228,234,238,259,263,267,271,279,283,286,293,
	302,308,312,318,325,334,340,354,363,369,376,386,393,401,409,424,429,436,
	441,445,453,459,463,477,484,509,512,522,526,539,545,550,554,560,569,575,
	582,590,595,599,607,615,620,624,634,641,646,650,660,663,667,670,678,683,
	707,713,715,721,727,729,737,739,745,751,753,768,773,780,792,794,802,804,
	822,825,829,833,851,854,870,880,885,891,894,903,915,918,924,931,936,942,
	946,950,956,964,981,984,989,991,998,1004,1006,1010,1020,1026,1029,1031,
	1043,1050,1054,1058,1062,1069,1078,1081,1085,1090,1094,1102,1105,1108,1115,
	1126,1129,1139,1142,1153,1158,1166,1169,1173,1182,1191,1194,1203,1206,1209,
	1213,1224,1227,1234,1237,1256,1260,1264,1268,1272,1276,1278,1289,1294,1303,
	1317,1320,1329,1332,1340,1343,1346,1351,1354,1366,1369,1377,1382,1386,1388,
	1390,1405,1407,1418,1439,1449,1460,1464,1466,1474,1491,1497,1508,1515,1519,
	1527,1529,1542,1550,1559,1565,1573,1579,1583,1588,1593,1599,1613,1615,1645,
	1656,1666,1669,1672,1677,1684,1687,1696,1699,1703,1706,1709,1724,1727,1746,
	1750,1758,1762,1787,1790,1799,1805,1811,1817,1830,1839,1861,1864,1867,1877,
	1879,1888,1894,1896,1904,1914,1920,1934,1943,1950,1955,1962,1972,1977,1984,
	2010,2015,2017,2024,2028,2035,2039,2056,2071,2078,2087,2097,2102,2111,2116,
	2124,2132,2135,2141,2144,2151,2159,2162,2170,2173,2199,2210,2215,2222,2224,
	2237,2252,2256,2260,2264,2270,2274,2278,2282,2284,2294,2301,2310,2317,2324,
	2331,2341,2347,2354,2361,2369,2372,2376,2380,2383];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!trinoSqlParserParser.__ATN) {
			trinoSqlParserParser.__ATN = new ATNDeserializer().deserialize(trinoSqlParserParser._serializedATN);
		}

		return trinoSqlParserParser.__ATN;
	}


	static DecisionsToDFA = trinoSqlParserParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EOF, 0);
	}
	public statements_list(): StatementsContext[] {
		return this.getTypedRuleContexts(StatementsContext) as StatementsContext[];
	}
	public statements(i: number): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, i) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_program;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public singleStatement(): SingleStatementContext {
		return this.getTypedRuleContext(SingleStatementContext, 0) as SingleStatementContext;
	}
	public standaloneExpression(): StandaloneExpressionContext {
		return this.getTypedRuleContext(StandaloneExpressionContext, 0) as StandaloneExpressionContext;
	}
	public standalonePathSpecification(): StandalonePathSpecificationContext {
		return this.getTypedRuleContext(StandalonePathSpecificationContext, 0) as StandalonePathSpecificationContext;
	}
	public standaloneType(): StandaloneTypeContext {
		return this.getTypedRuleContext(StandaloneTypeContext, 0) as StandaloneTypeContext;
	}
	public standaloneRowPattern(): StandaloneRowPatternContext {
		return this.getTypedRuleContext(StandaloneRowPatternContext, 0) as StandaloneRowPatternContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_statements;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterStatements) {
	 		listener.enterStatements(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitStatements) {
	 		listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleStatementContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_singleStatement;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSingleStatement) {
	 		listener.enterSingleStatement(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSingleStatement) {
	 		listener.exitSingleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSingleStatement) {
			return visitor.visitSingleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StandaloneExpressionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_standaloneExpression;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterStandaloneExpression) {
	 		listener.enterStandaloneExpression(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitStandaloneExpression) {
	 		listener.exitStandaloneExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitStandaloneExpression) {
			return visitor.visitStandaloneExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StandalonePathSpecificationContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pathSpecification(): PathSpecificationContext {
		return this.getTypedRuleContext(PathSpecificationContext, 0) as PathSpecificationContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_standalonePathSpecification;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterStandalonePathSpecification) {
	 		listener.enterStandalonePathSpecification(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitStandalonePathSpecification) {
	 		listener.exitStandalonePathSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitStandalonePathSpecification) {
			return visitor.visitStandalonePathSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StandaloneTypeContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_standaloneType;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterStandaloneType) {
	 		listener.enterStandaloneType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitStandaloneType) {
	 		listener.exitStandaloneType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitStandaloneType) {
			return visitor.visitStandaloneType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StandaloneRowPatternContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public rowPattern(): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, 0) as RowPatternContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_standaloneRowPattern;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterStandaloneRowPattern) {
	 		listener.enterStandaloneRowPattern(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitStandaloneRowPattern) {
	 		listener.exitStandaloneRowPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitStandaloneRowPattern) {
			return visitor.visitStandaloneRowPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_statement;
	}
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ExplainContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXPLAIN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXPLAIN, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public ANALYZE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ANALYZE, 0);
	}
	public VERBOSE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.VERBOSE, 0);
	}
	public explainOption_list(): ExplainOptionContext[] {
		return this.getTypedRuleContexts(ExplainOptionContext) as ExplainOptionContext[];
	}
	public explainOption(i: number): ExplainOptionContext {
		return this.getTypedRuleContext(ExplainOptionContext, i) as ExplainOptionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterExplain) {
	 		listener.enterExplain(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitExplain) {
	 		listener.exitExplain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitExplain) {
			return visitor.visitExplain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrepareContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PREPARE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PREPARE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FROM, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPrepare) {
	 		listener.enterPrepare(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPrepare) {
	 		listener.exitPrepare(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPrepare) {
			return visitor.visitPrepare(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropMaterializedViewContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DROP, 0);
	}
	public MATERIALIZED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MATERIALIZED, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.VIEW, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IF(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXISTS, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDropMaterializedView) {
	 		listener.enterDropMaterializedView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDropMaterializedView) {
	 		listener.exitDropMaterializedView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDropMaterializedView) {
			return visitor.visitDropMaterializedView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UseContext extends StatementContext {
	public _schema!: IdentifierContext;
	public _catalog!: IdentifierContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public USE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.USE, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUse) {
	 		listener.enterUse(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUse) {
	 		listener.exitUse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUse) {
			return visitor.visitUse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeallocateContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DEALLOCATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DEALLOCATE, 0);
	}
	public PREPARE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PREPARE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDeallocate) {
	 		listener.enterDeallocate(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDeallocate) {
	 		listener.exitDeallocate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDeallocate) {
			return visitor.visitDeallocate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameTableContext extends StatementContext {
	public _from_!: QualifiedNameContext;
	public _to!: QualifiedNameContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLE, 0);
	}
	public RENAME(): TerminalNode {
		return this.getToken(trinoSqlParserParser.RENAME, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TO, 0);
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public IF(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXISTS, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRenameTable) {
	 		listener.enterRenameTable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRenameTable) {
	 		listener.exitRenameTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRenameTable) {
			return visitor.visitRenameTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommitContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMIT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COMMIT, 0);
	}
	public WORK(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WORK, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCommit) {
	 		listener.enterCommit(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCommit) {
	 		listener.exitCommit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCommit) {
			return visitor.visitCommit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateRoleContext extends StatementContext {
	public _name!: IdentifierContext;
	public _catalog!: IdentifierContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CREATE, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROLE, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WITH, 0);
	}
	public ADMIN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ADMIN, 0);
	}
	public grantor(): GrantorContext {
		return this.getTypedRuleContext(GrantorContext, 0) as GrantorContext;
	}
	public IN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IN, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCreateRole) {
	 		listener.enterCreateRole(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCreateRole) {
	 		listener.exitCreateRole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateRole) {
			return visitor.visitCreateRole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropColumnContext extends StatementContext {
	public _tableName!: QualifiedNameContext;
	public _column!: QualifiedNameContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLE, 0);
	}
	public DROP(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DROP, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COLUMN, 0);
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public IF_list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParserParser.IF);
	}
	public IF(i: number): TerminalNode {
		return this.getToken(trinoSqlParserParser.IF, i);
	}
	public EXISTS_list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParserParser.EXISTS);
	}
	public EXISTS(i: number): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXISTS, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDropColumn) {
	 		listener.enterDropColumn(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDropColumn) {
	 		listener.exitDropColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDropColumn) {
			return visitor.visitDropColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropViewContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DROP, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.VIEW, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IF(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXISTS, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDropView) {
	 		listener.enterDropView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDropView) {
	 		listener.exitDropView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDropView) {
			return visitor.visitDropView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowTablesContext extends StatementContext {
	public _pattern!: StringContext;
	public _escape!: StringContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public TABLES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLES, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public LIKE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LIKE, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FROM, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IN, 0);
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ESCAPE, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowTables) {
	 		listener.enterShowTables(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowTables) {
	 		listener.exitShowTables(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowTables) {
			return visitor.visitShowTables(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetViewAuthorizationContext extends StatementContext {
	public _from_!: QualifiedNameContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALTER, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.VIEW, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SET, 0);
	}
	public AUTHORIZATION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AUTHORIZATION, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetViewAuthorization) {
	 		listener.enterSetViewAuthorization(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetViewAuthorization) {
	 		listener.exitSetViewAuthorization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetViewAuthorization) {
			return visitor.visitSetViewAuthorization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowTableCommentContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COMMENT, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ON, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowTableComment) {
	 		listener.enterShowTableComment(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowTableComment) {
	 		listener.exitShowTableComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowTableComment) {
			return visitor.visitShowTableComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCatalogsContext extends StatementContext {
	public _pattern!: StringContext;
	public _escape!: StringContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public CATALOGS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CATALOGS, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LIKE, 0);
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ESCAPE, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowCatalogs) {
	 		listener.enterShowCatalogs(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowCatalogs) {
	 		listener.exitShowCatalogs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowCatalogs) {
			return visitor.visitShowCatalogs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowRolesContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public ROLES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROLES, 0);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CURRENT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FROM, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IN, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowRoles) {
	 		listener.enterShowRoles(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowRoles) {
	 		listener.exitShowRoles(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowRoles) {
			return visitor.visitShowRoles(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MergeContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MERGE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MERGE, 0);
	}
	public INTO(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INTO, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public USING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.USING, 0);
	}
	public relation(): RelationContext {
		return this.getTypedRuleContext(RelationContext, 0) as RelationContext;
	}
	public ON(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public mergeCase_list(): MergeCaseContext[] {
		return this.getTypedRuleContexts(MergeCaseContext) as MergeCaseContext[];
	}
	public mergeCase(i: number): MergeCaseContext {
		return this.getTypedRuleContext(MergeCaseContext, i) as MergeCaseContext;
	}
	public AS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AS, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterMerge) {
	 		listener.enterMerge(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitMerge) {
	 		listener.exitMerge(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitMerge) {
			return visitor.visitMerge(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameColumnContext extends StatementContext {
	public _tableName!: QualifiedNameContext;
	public _from_!: IdentifierContext;
	public _to!: IdentifierContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLE, 0);
	}
	public RENAME(): TerminalNode {
		return this.getToken(trinoSqlParserParser.RENAME, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COLUMN, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TO, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public IF_list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParserParser.IF);
	}
	public IF(i: number): TerminalNode {
		return this.getToken(trinoSqlParserParser.IF, i);
	}
	public EXISTS_list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParserParser.EXISTS);
	}
	public EXISTS(i: number): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXISTS, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRenameColumn) {
	 		listener.enterRenameColumn(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRenameColumn) {
	 		listener.exitRenameColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRenameColumn) {
			return visitor.visitRenameColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommentColumnContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COMMENT, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ON, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COLUMN, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IS, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public NULL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NULL, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCommentColumn) {
	 		listener.enterCommentColumn(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCommentColumn) {
	 		listener.exitCommentColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCommentColumn) {
			return visitor.visitCommentColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RevokeRolesContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REVOKE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.REVOKE, 0);
	}
	public roles(): RolesContext {
		return this.getTypedRuleContext(RolesContext, 0) as RolesContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FROM, 0);
	}
	public principal_list(): PrincipalContext[] {
		return this.getTypedRuleContexts(PrincipalContext) as PrincipalContext[];
	}
	public principal(i: number): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, i) as PrincipalContext;
	}
	public ADMIN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ADMIN, 0);
	}
	public OPTION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.OPTION, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FOR, 0);
	}
	public GRANTED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GRANTED, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.BY, 0);
	}
	public grantor(): GrantorContext {
		return this.getTypedRuleContext(GrantorContext, 0) as GrantorContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRevokeRoles) {
	 		listener.enterRevokeRoles(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRevokeRoles) {
	 		listener.exitRevokeRoles(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRevokeRoles) {
			return visitor.visitRevokeRoles(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCreateTableContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CREATE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowCreateTable) {
	 		listener.enterShowCreateTable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowCreateTable) {
	 		listener.exitShowCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowCreateTable) {
			return visitor.visitShowCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowColumnsContext extends StatementContext {
	public _pattern!: StringContext;
	public _escape!: StringContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public COLUMNS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COLUMNS, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FROM, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IN, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public LIKE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LIKE, 0);
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ESCAPE, 0);
	}
	public DESCRIBE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DESCRIBE, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DESC, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowColumns) {
	 		listener.enterShowColumns(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowColumns) {
	 		listener.exitShowColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowColumns) {
			return visitor.visitShowColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowRoleGrantsContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROLE, 0);
	}
	public GRANTS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GRANTS, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FROM, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IN, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowRoleGrants) {
	 		listener.enterShowRoleGrants(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowRoleGrants) {
	 		listener.exitShowRoleGrants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowRoleGrants) {
			return visitor.visitShowRoleGrants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddColumnContext extends StatementContext {
	public _tableName!: QualifiedNameContext;
	public _column!: ColumnDefinitionContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLE, 0);
	}
	public ADD(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ADD, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COLUMN, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public columnDefinition(): ColumnDefinitionContext {
		return this.getTypedRuleContext(ColumnDefinitionContext, 0) as ColumnDefinitionContext;
	}
	public IF_list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParserParser.IF);
	}
	public IF(i: number): TerminalNode {
		return this.getToken(trinoSqlParserParser.IF, i);
	}
	public EXISTS_list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParserParser.EXISTS);
	}
	public EXISTS(i: number): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXISTS, i);
	}
	public NOT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NOT, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterAddColumn) {
	 		listener.enterAddColumn(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitAddColumn) {
	 		listener.exitAddColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitAddColumn) {
			return visitor.visitAddColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DenyContext extends StatementContext {
	public _grantee!: PrincipalContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DENY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DENY, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ON, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public TO(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TO, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public privilege_list(): PrivilegeContext[] {
		return this.getTypedRuleContexts(PrivilegeContext) as PrivilegeContext[];
	}
	public privilege(i: number): PrivilegeContext {
		return this.getTypedRuleContext(PrivilegeContext, i) as PrivilegeContext;
	}
	public ALL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALL, 0);
	}
	public PRIVILEGES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PRIVILEGES, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SCHEMA, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLE, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDeny) {
	 		listener.enterDeny(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDeny) {
	 		listener.exitDeny(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDeny) {
			return visitor.visitDeny(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ResetSessionContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RESET(): TerminalNode {
		return this.getToken(trinoSqlParserParser.RESET, 0);
	}
	public SESSION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SESSION, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterResetSession) {
	 		listener.enterResetSession(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitResetSession) {
	 		listener.exitResetSession(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitResetSession) {
			return visitor.visitResetSession(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InsertIntoContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INSERT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INSERT, 0);
	}
	public INTO(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INTO, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterInsertInto) {
	 		listener.enterInsertInto(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitInsertInto) {
	 		listener.exitInsertInto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitInsertInto) {
			return visitor.visitInsertInto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowSessionContext extends StatementContext {
	public _pattern!: StringContext;
	public _escape!: StringContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public SESSION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SESSION, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LIKE, 0);
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ESCAPE, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowSession) {
	 		listener.enterShowSession(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowSession) {
	 		listener.exitShowSession(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowSession) {
			return visitor.visitShowSession(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateSchemaContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CREATE, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SCHEMA, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IF(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IF, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXISTS, 0);
	}
	public AUTHORIZATION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AUTHORIZATION, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WITH, 0);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCreateSchema) {
	 		listener.enterCreateSchema(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCreateSchema) {
	 		listener.exitCreateSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateSchema) {
			return visitor.visitCreateSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecuteContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXECUTE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXECUTE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public USING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.USING, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterExecute) {
	 		listener.enterExecute(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitExecute) {
	 		listener.exitExecute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitExecute) {
			return visitor.visitExecute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameSchemaContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALTER, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SCHEMA, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public RENAME(): TerminalNode {
		return this.getToken(trinoSqlParserParser.RENAME, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TO, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRenameSchema) {
	 		listener.enterRenameSchema(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRenameSchema) {
	 		listener.exitRenameSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRenameSchema) {
			return visitor.visitRenameSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropRoleContext extends StatementContext {
	public _name!: IdentifierContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DROP, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROLE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDropRole) {
	 		listener.enterDropRole(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDropRole) {
	 		listener.exitDropRole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDropRole) {
			return visitor.visitDropRole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AnalyzeContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ANALYZE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ANALYZE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WITH, 0);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterAnalyze) {
	 		listener.enterAnalyze(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitAnalyze) {
	 		listener.exitAnalyze(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitAnalyze) {
			return visitor.visitAnalyze(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetRoleContext extends StatementContext {
	public _role!: IdentifierContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SET(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SET, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROLE, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALL, 0);
	}
	public NONE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NONE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetRole) {
	 		listener.enterSetRole(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetRole) {
	 		listener.exitSetRole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetRole) {
			return visitor.visitSetRole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowGrantsContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public GRANTS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GRANTS, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ON, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public TABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLE, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowGrants) {
	 		listener.enterShowGrants(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowGrants) {
	 		listener.exitShowGrants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowGrants) {
			return visitor.visitShowGrants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropSchemaContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DROP, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SCHEMA, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IF(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXISTS, 0);
	}
	public CASCADE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CASCADE, 0);
	}
	public RESTRICT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.RESTRICT, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDropSchema) {
	 		listener.enterDropSchema(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDropSchema) {
	 		listener.exitDropSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDropSchema) {
			return visitor.visitDropSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetTableAuthorizationContext extends StatementContext {
	public _tableName!: QualifiedNameContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLE, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SET, 0);
	}
	public AUTHORIZATION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AUTHORIZATION, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetTableAuthorization) {
	 		listener.enterSetTableAuthorization(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetTableAuthorization) {
	 		listener.exitSetTableAuthorization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetTableAuthorization) {
			return visitor.visitSetTableAuthorization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCreateViewContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CREATE, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.VIEW, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowCreateView) {
	 		listener.enterShowCreateView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowCreateView) {
	 		listener.exitShowCreateView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowCreateView) {
			return visitor.visitShowCreateView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowColumnCommentContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COMMENT, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ON, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COLUMN, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowColumnComment) {
	 		listener.enterShowColumnComment(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowColumnComment) {
	 		listener.exitShowColumnComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowColumnComment) {
			return visitor.visitShowColumnComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTableContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CREATE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public tableElement_list(): TableElementContext[] {
		return this.getTypedRuleContexts(TableElementContext) as TableElementContext[];
	}
	public tableElement(i: number): TableElementContext {
		return this.getTypedRuleContext(TableElementContext, i) as TableElementContext;
	}
	public IF(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IF, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXISTS, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COMMENT, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WITH, 0);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCreateTable) {
	 		listener.enterCreateTable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCreateTable) {
	 		listener.exitCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateTable) {
			return visitor.visitCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StartTransactionContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public START(): TerminalNode {
		return this.getToken(trinoSqlParserParser.START, 0);
	}
	public TRANSACTION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TRANSACTION, 0);
	}
	public transactionMode_list(): TransactionModeContext[] {
		return this.getTypedRuleContexts(TransactionModeContext) as TransactionModeContext[];
	}
	public transactionMode(i: number): TransactionModeContext {
		return this.getTypedRuleContext(TransactionModeContext, i) as TransactionModeContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterStartTransaction) {
	 		listener.enterStartTransaction(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitStartTransaction) {
	 		listener.exitStartTransaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitStartTransaction) {
			return visitor.visitStartTransaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTableAsSelectContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CREATE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public AS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AS, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public IF(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IF, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXISTS, 0);
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
	public COMMENT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COMMENT, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public WITH_list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParserParser.WITH);
	}
	public WITH(i: number): TerminalNode {
		return this.getToken(trinoSqlParserParser.WITH, i);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
	public DATA(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DATA, 0);
	}
	public NO(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NO, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCreateTableAsSelect) {
	 		listener.enterCreateTableAsSelect(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCreateTableAsSelect) {
	 		listener.exitCreateTableAsSelect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateTableAsSelect) {
			return visitor.visitCreateTableAsSelect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowStatsContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public STATS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.STATS, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FOR, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowStats) {
	 		listener.enterShowStats(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowStats) {
	 		listener.exitShowStats(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowStats) {
			return visitor.visitShowStats(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCreateSchemaContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CREATE, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SCHEMA, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowCreateSchema) {
	 		listener.enterShowCreateSchema(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowCreateSchema) {
	 		listener.exitShowCreateSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowCreateSchema) {
			return visitor.visitShowCreateSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RevokeContext extends StatementContext {
	public _grantee!: PrincipalContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REVOKE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.REVOKE, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ON, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FROM, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public privilege_list(): PrivilegeContext[] {
		return this.getTypedRuleContexts(PrivilegeContext) as PrivilegeContext[];
	}
	public privilege(i: number): PrivilegeContext {
		return this.getTypedRuleContext(PrivilegeContext, i) as PrivilegeContext;
	}
	public ALL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALL, 0);
	}
	public PRIVILEGES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PRIVILEGES, 0);
	}
	public GRANT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GRANT, 0);
	}
	public OPTION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.OPTION, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FOR, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SCHEMA, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLE, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRevoke) {
	 		listener.enterRevoke(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRevoke) {
	 		listener.exitRevoke(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRevoke) {
			return visitor.visitRevoke(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UpdateContext extends StatementContext {
	public _where!: BooleanExpressionContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UPDATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.UPDATE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public SET(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SET, 0);
	}
	public updateAssignment_list(): UpdateAssignmentContext[] {
		return this.getTypedRuleContexts(UpdateAssignmentContext) as UpdateAssignmentContext[];
	}
	public updateAssignment(i: number): UpdateAssignmentContext {
		return this.getTypedRuleContext(UpdateAssignmentContext, i) as UpdateAssignmentContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WHERE, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUpdate) {
	 		listener.enterUpdate(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUpdate) {
	 		listener.exitUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUpdate) {
			return visitor.visitUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeleteContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DELETE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DELETE, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FROM, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WHERE, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDelete) {
	 		listener.enterDelete(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDelete) {
	 		listener.exitDelete(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDelete) {
			return visitor.visitDelete(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DescribeInputContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DESCRIBE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DESCRIBE, 0);
	}
	public INPUT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INPUT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDescribeInput) {
	 		listener.enterDescribeInput(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDescribeInput) {
	 		listener.exitDescribeInput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDescribeInput) {
			return visitor.visitDescribeInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowStatsForQueryContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public STATS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.STATS, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FOR, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowStatsForQuery) {
	 		listener.enterShowStatsForQuery(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowStatsForQuery) {
	 		listener.exitShowStatsForQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowStatsForQuery) {
			return visitor.visitShowStatsForQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StatementDefaultContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterStatementDefault) {
	 		listener.enterStatementDefault(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitStatementDefault) {
	 		listener.exitStatementDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitStatementDefault) {
			return visitor.visitStatementDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetTimeZoneContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SET(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SET, 0);
	}
	public TIME(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TIME, 0);
	}
	public ZONE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ZONE, 0);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LOCAL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetTimeZone) {
	 		listener.enterSetTimeZone(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetTimeZone) {
	 		listener.exitSetTimeZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetTimeZone) {
			return visitor.visitSetTimeZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateMaterializedViewContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CREATE, 0);
	}
	public MATERIALIZED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MATERIALIZED, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.VIEW, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public AS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AS, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public OR(): TerminalNode {
		return this.getToken(trinoSqlParserParser.OR, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.REPLACE, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IF, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXISTS, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COMMENT, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WITH, 0);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCreateMaterializedView) {
	 		listener.enterCreateMaterializedView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCreateMaterializedView) {
	 		listener.exitCreateMaterializedView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateMaterializedView) {
			return visitor.visitCreateMaterializedView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetSessionContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SET(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SET, 0);
	}
	public SESSION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SESSION, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EQ, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetSession) {
	 		listener.enterSetSession(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetSession) {
	 		listener.exitSetSession(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetSession) {
			return visitor.visitSetSession(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateViewContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CREATE, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.VIEW, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public AS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AS, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public OR(): TerminalNode {
		return this.getToken(trinoSqlParserParser.OR, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.REPLACE, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COMMENT, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public SECURITY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SECURITY, 0);
	}
	public DEFINER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DEFINER, 0);
	}
	public INVOKER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INVOKER, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCreateView) {
	 		listener.enterCreateView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCreateView) {
	 		listener.exitCreateView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateView) {
			return visitor.visitCreateView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowSchemasContext extends StatementContext {
	public _pattern!: StringContext;
	public _escape!: StringContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public SCHEMAS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SCHEMAS, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LIKE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LIKE, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FROM, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IN, 0);
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ESCAPE, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowSchemas) {
	 		listener.enterShowSchemas(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowSchemas) {
	 		listener.exitShowSchemas(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowSchemas) {
			return visitor.visitShowSchemas(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropTableContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DROP, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IF(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXISTS, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDropTable) {
	 		listener.enterDropTable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDropTable) {
	 		listener.exitDropTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDropTable) {
			return visitor.visitDropTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetSchemaAuthorizationContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALTER, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SCHEMA, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public SET(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SET, 0);
	}
	public AUTHORIZATION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AUTHORIZATION, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetSchemaAuthorization) {
	 		listener.enterSetSchemaAuthorization(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetSchemaAuthorization) {
	 		listener.exitSetSchemaAuthorization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetSchemaAuthorization) {
			return visitor.visitSetSchemaAuthorization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RollbackContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ROLLBACK(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROLLBACK, 0);
	}
	public WORK(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WORK, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRollback) {
	 		listener.enterRollback(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRollback) {
	 		listener.exitRollback(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRollback) {
			return visitor.visitRollback(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommentTableContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COMMENT, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ON, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IS, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public NULL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NULL, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCommentTable) {
	 		listener.enterCommentTable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCommentTable) {
	 		listener.exitCommentTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCommentTable) {
			return visitor.visitCommentTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameViewContext extends StatementContext {
	public _from_!: QualifiedNameContext;
	public _to!: QualifiedNameContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALTER, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.VIEW, 0);
	}
	public RENAME(): TerminalNode {
		return this.getToken(trinoSqlParserParser.RENAME, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TO, 0);
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRenameView) {
	 		listener.enterRenameView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRenameView) {
	 		listener.exitRenameView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRenameView) {
			return visitor.visitRenameView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetPathContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SET(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SET, 0);
	}
	public PATH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PATH, 0);
	}
	public pathSpecification(): PathSpecificationContext {
		return this.getTypedRuleContext(PathSpecificationContext, 0) as PathSpecificationContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetPath) {
	 		listener.enterSetPath(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetPath) {
	 		listener.exitSetPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetPath) {
			return visitor.visitSetPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GrantRolesContext extends StatementContext {
	public _catalog!: IdentifierContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GRANT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GRANT, 0);
	}
	public roles(): RolesContext {
		return this.getTypedRuleContext(RolesContext, 0) as RolesContext;
	}
	public TO(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TO, 0);
	}
	public principal_list(): PrincipalContext[] {
		return this.getTypedRuleContexts(PrincipalContext) as PrincipalContext[];
	}
	public principal(i: number): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, i) as PrincipalContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WITH, 0);
	}
	public ADMIN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ADMIN, 0);
	}
	public OPTION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.OPTION, 0);
	}
	public GRANTED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GRANTED, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.BY, 0);
	}
	public grantor(): GrantorContext {
		return this.getTypedRuleContext(GrantorContext, 0) as GrantorContext;
	}
	public IN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IN, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterGrantRoles) {
	 		listener.enterGrantRoles(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitGrantRoles) {
	 		listener.exitGrantRoles(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitGrantRoles) {
			return visitor.visitGrantRoles(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CALL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CALL, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public callArgument_list(): CallArgumentContext[] {
		return this.getTypedRuleContexts(CallArgumentContext) as CallArgumentContext[];
	}
	public callArgument(i: number): CallArgumentContext {
		return this.getTypedRuleContext(CallArgumentContext, i) as CallArgumentContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCall) {
	 		listener.enterCall(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCall) {
	 		listener.exitCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCall) {
			return visitor.visitCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RefreshMaterializedViewContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REFRESH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.REFRESH, 0);
	}
	public MATERIALIZED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MATERIALIZED, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.VIEW, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRefreshMaterializedView) {
	 		listener.enterRefreshMaterializedView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRefreshMaterializedView) {
	 		listener.exitRefreshMaterializedView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRefreshMaterializedView) {
			return visitor.visitRefreshMaterializedView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCreateMaterializedViewContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CREATE, 0);
	}
	public MATERIALIZED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MATERIALIZED, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.VIEW, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowCreateMaterializedView) {
	 		listener.enterShowCreateMaterializedView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowCreateMaterializedView) {
	 		listener.exitShowCreateMaterializedView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowCreateMaterializedView) {
			return visitor.visitShowCreateMaterializedView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowFunctionsContext extends StatementContext {
	public _pattern!: StringContext;
	public _escape!: StringContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public FUNCTIONS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FUNCTIONS, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LIKE, 0);
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ESCAPE, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowFunctions) {
	 		listener.enterShowFunctions(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowFunctions) {
	 		listener.exitShowFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowFunctions) {
			return visitor.visitShowFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DescribeOutputContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DESCRIBE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DESCRIBE, 0);
	}
	public OUTPUT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.OUTPUT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDescribeOutput) {
	 		listener.enterDescribeOutput(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDescribeOutput) {
	 		listener.exitDescribeOutput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDescribeOutput) {
			return visitor.visitDescribeOutput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GrantContext extends StatementContext {
	public _grantee!: PrincipalContext;
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GRANT_list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParserParser.GRANT);
	}
	public GRANT(i: number): TerminalNode {
		return this.getToken(trinoSqlParserParser.GRANT, i);
	}
	public ON(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ON, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public TO(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TO, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public privilege_list(): PrivilegeContext[] {
		return this.getTypedRuleContexts(PrivilegeContext) as PrivilegeContext[];
	}
	public privilege(i: number): PrivilegeContext {
		return this.getTypedRuleContext(PrivilegeContext, i) as PrivilegeContext;
	}
	public ALL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALL, 0);
	}
	public PRIVILEGES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PRIVILEGES, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WITH, 0);
	}
	public OPTION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.OPTION, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SCHEMA, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLE, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterGrant) {
	 		listener.enterGrant(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitGrant) {
	 		listener.exitGrant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitGrant) {
			return visitor.visitGrant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public queryNoWith(): QueryNoWithContext {
		return this.getTypedRuleContext(QueryNoWithContext, 0) as QueryNoWithContext;
	}
	public with_(): WithContext {
		return this.getTypedRuleContext(WithContext, 0) as WithContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_query;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQuery) {
	 		listener.enterQuery(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQuery) {
	 		listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WITH, 0);
	}
	public namedQuery_list(): NamedQueryContext[] {
		return this.getTypedRuleContexts(NamedQueryContext) as NamedQueryContext[];
	}
	public namedQuery(i: number): NamedQueryContext {
		return this.getTypedRuleContext(NamedQueryContext, i) as NamedQueryContext;
	}
	public RECURSIVE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.RECURSIVE, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_with;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterWith) {
	 		listener.enterWith(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitWith) {
	 		listener.exitWith(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitWith) {
			return visitor.visitWith(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableElementContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public columnDefinition(): ColumnDefinitionContext {
		return this.getTypedRuleContext(ColumnDefinitionContext, 0) as ColumnDefinitionContext;
	}
	public likeClause(): LikeClauseContext {
		return this.getTypedRuleContext(LikeClauseContext, 0) as LikeClauseContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_tableElement;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTableElement) {
	 		listener.enterTableElement(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTableElement) {
	 		listener.exitTableElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTableElement) {
			return visitor.visitTableElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnDefinitionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NOT, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NULL, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COMMENT, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WITH, 0);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_columnDefinition;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterColumnDefinition) {
	 		listener.enterColumnDefinition(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitColumnDefinition) {
	 		listener.exitColumnDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnDefinition) {
			return visitor.visitColumnDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikeClauseContext extends ParserRuleContext {
	public _optionType!: Token;
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LIKE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LIKE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public PROPERTIES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PROPERTIES, 0);
	}
	public INCLUDING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INCLUDING, 0);
	}
	public EXCLUDING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXCLUDING, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_likeClause;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterLikeClause) {
	 		listener.enterLikeClause(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitLikeClause) {
	 		listener.exitLikeClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitLikeClause) {
			return visitor.visitLikeClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertiesContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public property_list(): PropertyContext[] {
		return this.getTypedRuleContexts(PropertyContext) as PropertyContext[];
	}
	public property(i: number): PropertyContext {
		return this.getTypedRuleContext(PropertyContext, i) as PropertyContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_properties;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterProperties) {
	 		listener.enterProperties(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitProperties) {
	 		listener.exitProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitProperties) {
			return visitor.visitProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EQ, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_property;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterProperty) {
	 		listener.enterProperty(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitProperty) {
	 		listener.exitProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryNoWithContext extends ParserRuleContext {
	public _offset!: RowCountContext;
	public _limit!: LimitRowCountContext;
	public _fetchFirst!: RowCountContext;
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public queryTerm(): QueryTermContext {
		return this.getTypedRuleContext(QueryTermContext, 0) as QueryTermContext;
	}
	public ORDER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ORDER, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.BY, 0);
	}
	public sortItem_list(): SortItemContext[] {
		return this.getTypedRuleContexts(SortItemContext) as SortItemContext[];
	}
	public sortItem(i: number): SortItemContext {
		return this.getTypedRuleContext(SortItemContext, i) as SortItemContext;
	}
	public OFFSET(): TerminalNode {
		return this.getToken(trinoSqlParserParser.OFFSET, 0);
	}
	public rowCount_list(): RowCountContext[] {
		return this.getTypedRuleContexts(RowCountContext) as RowCountContext[];
	}
	public rowCount(i: number): RowCountContext {
		return this.getTypedRuleContext(RowCountContext, i) as RowCountContext;
	}
	public LIMIT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LIMIT, 0);
	}
	public FETCH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FETCH, 0);
	}
	public limitRowCount(): LimitRowCountContext {
		return this.getTypedRuleContext(LimitRowCountContext, 0) as LimitRowCountContext;
	}
	public FIRST(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FIRST, 0);
	}
	public NEXT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NEXT, 0);
	}
	public ROW_list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParserParser.ROW);
	}
	public ROW(i: number): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROW, i);
	}
	public ROWS_list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParserParser.ROWS);
	}
	public ROWS(i: number): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROWS, i);
	}
	public ONLY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ONLY, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WITH, 0);
	}
	public TIES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TIES, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_queryNoWith;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQueryNoWith) {
	 		listener.enterQueryNoWith(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQueryNoWith) {
	 		listener.exitQueryNoWith(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQueryNoWith) {
			return visitor.visitQueryNoWith(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LimitRowCountContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALL, 0);
	}
	public rowCount(): RowCountContext {
		return this.getTypedRuleContext(RowCountContext, 0) as RowCountContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_limitRowCount;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterLimitRowCount) {
	 		listener.enterLimitRowCount(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitLimitRowCount) {
	 		listener.exitLimitRowCount(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitLimitRowCount) {
			return visitor.visitLimitRowCount(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowCountContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER_VALUE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INTEGER_VALUE, 0);
	}
	public QUESTION_MARK(): TerminalNode {
		return this.getToken(trinoSqlParserParser.QUESTION_MARK, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_rowCount;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRowCount) {
	 		listener.enterRowCount(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRowCount) {
	 		listener.exitRowCount(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRowCount) {
			return visitor.visitRowCount(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryTermContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_queryTerm;
	}
	public copyFrom(ctx: QueryTermContext): void {
		super.copyFrom(ctx);
	}
}
export class QueryTermDefaultContext extends QueryTermContext {
	constructor(parser: trinoSqlParserParser, ctx: QueryTermContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public queryPrimary(): QueryPrimaryContext {
		return this.getTypedRuleContext(QueryPrimaryContext, 0) as QueryPrimaryContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQueryTermDefault) {
	 		listener.enterQueryTermDefault(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQueryTermDefault) {
	 		listener.exitQueryTermDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQueryTermDefault) {
			return visitor.visitQueryTermDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetOperationContext extends QueryTermContext {
	public _left!: QueryTermContext;
	public _operator!: Token;
	public _right!: QueryTermContext;
	constructor(parser: trinoSqlParserParser, ctx: QueryTermContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public queryTerm_list(): QueryTermContext[] {
		return this.getTypedRuleContexts(QueryTermContext) as QueryTermContext[];
	}
	public queryTerm(i: number): QueryTermContext {
		return this.getTypedRuleContext(QueryTermContext, i) as QueryTermContext;
	}
	public INTERSECT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INTERSECT, 0);
	}
	public setQuantifier(): SetQuantifierContext {
		return this.getTypedRuleContext(SetQuantifierContext, 0) as SetQuantifierContext;
	}
	public UNION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.UNION, 0);
	}
	public EXCEPT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXCEPT, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetOperation) {
	 		listener.enterSetOperation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetOperation) {
	 		listener.exitSetOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetOperation) {
			return visitor.visitSetOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryPrimaryContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_queryPrimary;
	}
	public copyFrom(ctx: QueryPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class SubqueryContext extends QueryPrimaryContext {
	constructor(parser: trinoSqlParserParser, ctx: QueryPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public queryNoWith(): QueryNoWithContext {
		return this.getTypedRuleContext(QueryNoWithContext, 0) as QueryNoWithContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSubquery) {
	 		listener.enterSubquery(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSubquery) {
	 		listener.exitSubquery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSubquery) {
			return visitor.visitSubquery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QueryPrimaryDefaultContext extends QueryPrimaryContext {
	constructor(parser: trinoSqlParserParser, ctx: QueryPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public querySpecification(): QuerySpecificationContext {
		return this.getTypedRuleContext(QuerySpecificationContext, 0) as QuerySpecificationContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQueryPrimaryDefault) {
	 		listener.enterQueryPrimaryDefault(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQueryPrimaryDefault) {
	 		listener.exitQueryPrimaryDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQueryPrimaryDefault) {
			return visitor.visitQueryPrimaryDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableContext extends QueryPrimaryContext {
	constructor(parser: trinoSqlParserParser, ctx: QueryPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTable) {
	 		listener.enterTable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTable) {
	 		listener.exitTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTable) {
			return visitor.visitTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InlineTableContext extends QueryPrimaryContext {
	constructor(parser: trinoSqlParserParser, ctx: QueryPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VALUES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.VALUES, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterInlineTable) {
	 		listener.enterInlineTable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitInlineTable) {
	 		listener.exitInlineTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitInlineTable) {
			return visitor.visitInlineTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SortItemContext extends ParserRuleContext {
	public _ordering!: Token;
	public _nullOrdering!: Token;
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public NULLS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NULLS, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ASC, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DESC, 0);
	}
	public FIRST(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FIRST, 0);
	}
	public LAST(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LAST, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_sortItem;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSortItem) {
	 		listener.enterSortItem(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSortItem) {
	 		listener.exitSortItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSortItem) {
			return visitor.visitSortItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuerySpecificationContext extends ParserRuleContext {
	public _where!: BooleanExpressionContext;
	public _having!: BooleanExpressionContext;
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SELECT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SELECT, 0);
	}
	public selectItem_list(): SelectItemContext[] {
		return this.getTypedRuleContexts(SelectItemContext) as SelectItemContext[];
	}
	public selectItem(i: number): SelectItemContext {
		return this.getTypedRuleContext(SelectItemContext, i) as SelectItemContext;
	}
	public setQuantifier(): SetQuantifierContext {
		return this.getTypedRuleContext(SetQuantifierContext, 0) as SetQuantifierContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FROM, 0);
	}
	public relation_list(): RelationContext[] {
		return this.getTypedRuleContexts(RelationContext) as RelationContext[];
	}
	public relation(i: number): RelationContext {
		return this.getTypedRuleContext(RelationContext, i) as RelationContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WHERE, 0);
	}
	public GROUP(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GROUP, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.BY, 0);
	}
	public groupBy(): GroupByContext {
		return this.getTypedRuleContext(GroupByContext, 0) as GroupByContext;
	}
	public HAVING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.HAVING, 0);
	}
	public WINDOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WINDOW, 0);
	}
	public windowDefinition_list(): WindowDefinitionContext[] {
		return this.getTypedRuleContexts(WindowDefinitionContext) as WindowDefinitionContext[];
	}
	public windowDefinition(i: number): WindowDefinitionContext {
		return this.getTypedRuleContext(WindowDefinitionContext, i) as WindowDefinitionContext;
	}
	public booleanExpression_list(): BooleanExpressionContext[] {
		return this.getTypedRuleContexts(BooleanExpressionContext) as BooleanExpressionContext[];
	}
	public booleanExpression(i: number): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, i) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_querySpecification;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQuerySpecification) {
	 		listener.enterQuerySpecification(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQuerySpecification) {
	 		listener.exitQuerySpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQuerySpecification) {
			return visitor.visitQuerySpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupByContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public groupingElement_list(): GroupingElementContext[] {
		return this.getTypedRuleContexts(GroupingElementContext) as GroupingElementContext[];
	}
	public groupingElement(i: number): GroupingElementContext {
		return this.getTypedRuleContext(GroupingElementContext, i) as GroupingElementContext;
	}
	public setQuantifier(): SetQuantifierContext {
		return this.getTypedRuleContext(SetQuantifierContext, 0) as SetQuantifierContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_groupBy;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterGroupBy) {
	 		listener.enterGroupBy(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitGroupBy) {
	 		listener.exitGroupBy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupBy) {
			return visitor.visitGroupBy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingElementContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_groupingElement;
	}
	public copyFrom(ctx: GroupingElementContext): void {
		super.copyFrom(ctx);
	}
}
export class MultipleGroupingSetsContext extends GroupingElementContext {
	constructor(parser: trinoSqlParserParser, ctx: GroupingElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GROUPING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GROUPING, 0);
	}
	public SETS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SETS, 0);
	}
	public groupingSet_list(): GroupingSetContext[] {
		return this.getTypedRuleContexts(GroupingSetContext) as GroupingSetContext[];
	}
	public groupingSet(i: number): GroupingSetContext {
		return this.getTypedRuleContext(GroupingSetContext, i) as GroupingSetContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterMultipleGroupingSets) {
	 		listener.enterMultipleGroupingSets(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitMultipleGroupingSets) {
	 		listener.exitMultipleGroupingSets(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitMultipleGroupingSets) {
			return visitor.visitMultipleGroupingSets(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SingleGroupingSetContext extends GroupingElementContext {
	constructor(parser: trinoSqlParserParser, ctx: GroupingElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public groupingSet(): GroupingSetContext {
		return this.getTypedRuleContext(GroupingSetContext, 0) as GroupingSetContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSingleGroupingSet) {
	 		listener.enterSingleGroupingSet(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSingleGroupingSet) {
	 		listener.exitSingleGroupingSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSingleGroupingSet) {
			return visitor.visitSingleGroupingSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CubeContext extends GroupingElementContext {
	constructor(parser: trinoSqlParserParser, ctx: GroupingElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CUBE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CUBE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCube) {
	 		listener.enterCube(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCube) {
	 		listener.exitCube(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCube) {
			return visitor.visitCube(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RollupContext extends GroupingElementContext {
	constructor(parser: trinoSqlParserParser, ctx: GroupingElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ROLLUP(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROLLUP, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRollup) {
	 		listener.enterRollup(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRollup) {
	 		listener.exitRollup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRollup) {
			return visitor.visitRollup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingSetContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_groupingSet;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterGroupingSet) {
	 		listener.enterGroupingSet(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitGroupingSet) {
	 		listener.exitGroupingSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupingSet) {
			return visitor.visitGroupingSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowDefinitionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AS, 0);
	}
	public windowSpecification(): WindowSpecificationContext {
		return this.getTypedRuleContext(WindowSpecificationContext, 0) as WindowSpecificationContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_windowDefinition;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterWindowDefinition) {
	 		listener.enterWindowDefinition(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitWindowDefinition) {
	 		listener.exitWindowDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowDefinition) {
			return visitor.visitWindowDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowSpecificationContext extends ParserRuleContext {
	public _existingWindowName!: IdentifierContext;
	public _expression!: ExpressionContext;
	public _partition: ExpressionContext[] = [];
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PARTITION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PARTITION, 0);
	}
	public BY_list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParserParser.BY);
	}
	public BY(i: number): TerminalNode {
		return this.getToken(trinoSqlParserParser.BY, i);
	}
	public ORDER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ORDER, 0);
	}
	public sortItem_list(): SortItemContext[] {
		return this.getTypedRuleContexts(SortItemContext) as SortItemContext[];
	}
	public sortItem(i: number): SortItemContext {
		return this.getTypedRuleContext(SortItemContext, i) as SortItemContext;
	}
	public windowFrame(): WindowFrameContext {
		return this.getTypedRuleContext(WindowFrameContext, 0) as WindowFrameContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_windowSpecification;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterWindowSpecification) {
	 		listener.enterWindowSpecification(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitWindowSpecification) {
	 		listener.exitWindowSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowSpecification) {
			return visitor.visitWindowSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedQueryContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AS, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_namedQuery;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNamedQuery) {
	 		listener.enterNamedQuery(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNamedQuery) {
	 		listener.exitNamedQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNamedQuery) {
			return visitor.visitNamedQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetQuantifierContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DISTINCT, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALL, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_setQuantifier;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetQuantifier) {
	 		listener.enterSetQuantifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetQuantifier) {
	 		listener.exitSetQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetQuantifier) {
			return visitor.visitSetQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectItemContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_selectItem;
	}
	public copyFrom(ctx: SelectItemContext): void {
		super.copyFrom(ctx);
	}
}
export class SelectAllContext extends SelectItemContext {
	constructor(parser: trinoSqlParserParser, ctx: SelectItemContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public ASTERISK(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ASTERISK, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AS, 0);
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSelectAll) {
	 		listener.enterSelectAll(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSelectAll) {
	 		listener.exitSelectAll(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSelectAll) {
			return visitor.visitSelectAll(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectSingleContext extends SelectItemContext {
	constructor(parser: trinoSqlParserParser, ctx: SelectItemContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public AS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AS, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSelectSingle) {
	 		listener.enterSelectSingle(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSelectSingle) {
	 		listener.exitSelectSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSelectSingle) {
			return visitor.visitSelectSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_relation;
	}
	public copyFrom(ctx: RelationContext): void {
		super.copyFrom(ctx);
	}
}
export class RelationDefaultContext extends RelationContext {
	constructor(parser: trinoSqlParserParser, ctx: RelationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public sampledRelation(): SampledRelationContext {
		return this.getTypedRuleContext(SampledRelationContext, 0) as SampledRelationContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRelationDefault) {
	 		listener.enterRelationDefault(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRelationDefault) {
	 		listener.exitRelationDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRelationDefault) {
			return visitor.visitRelationDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JoinRelationContext extends RelationContext {
	public _left!: RelationContext;
	public _right!: SampledRelationContext;
	public _rightRelation!: RelationContext;
	constructor(parser: trinoSqlParserParser, ctx: RelationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public relation_list(): RelationContext[] {
		return this.getTypedRuleContexts(RelationContext) as RelationContext[];
	}
	public relation(i: number): RelationContext {
		return this.getTypedRuleContext(RelationContext, i) as RelationContext;
	}
	public CROSS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CROSS, 0);
	}
	public JOIN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.JOIN, 0);
	}
	public joinType(): JoinTypeContext {
		return this.getTypedRuleContext(JoinTypeContext, 0) as JoinTypeContext;
	}
	public joinCriteria(): JoinCriteriaContext {
		return this.getTypedRuleContext(JoinCriteriaContext, 0) as JoinCriteriaContext;
	}
	public NATURAL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NATURAL, 0);
	}
	public sampledRelation(): SampledRelationContext {
		return this.getTypedRuleContext(SampledRelationContext, 0) as SampledRelationContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJoinRelation) {
	 		listener.enterJoinRelation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJoinRelation) {
	 		listener.exitJoinRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJoinRelation) {
			return visitor.visitJoinRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinTypeContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INNER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INNER, 0);
	}
	public LEFT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LEFT, 0);
	}
	public OUTER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.OUTER, 0);
	}
	public RIGHT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.RIGHT, 0);
	}
	public FULL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FULL, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_joinType;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJoinType) {
	 		listener.enterJoinType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJoinType) {
	 		listener.exitJoinType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJoinType) {
			return visitor.visitJoinType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinCriteriaContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ON, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public USING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.USING, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_joinCriteria;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJoinCriteria) {
	 		listener.enterJoinCriteria(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJoinCriteria) {
	 		listener.exitJoinCriteria(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJoinCriteria) {
			return visitor.visitJoinCriteria(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SampledRelationContext extends ParserRuleContext {
	public _percentage!: ExpressionContext;
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public patternRecognition(): PatternRecognitionContext {
		return this.getTypedRuleContext(PatternRecognitionContext, 0) as PatternRecognitionContext;
	}
	public TABLESAMPLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLESAMPLE, 0);
	}
	public sampleType(): SampleTypeContext {
		return this.getTypedRuleContext(SampleTypeContext, 0) as SampleTypeContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_sampledRelation;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSampledRelation) {
	 		listener.enterSampledRelation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSampledRelation) {
	 		listener.exitSampledRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSampledRelation) {
			return visitor.visitSampledRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SampleTypeContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BERNOULLI(): TerminalNode {
		return this.getToken(trinoSqlParserParser.BERNOULLI, 0);
	}
	public SYSTEM(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SYSTEM, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_sampleType;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSampleType) {
	 		listener.enterSampleType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSampleType) {
	 		listener.exitSampleType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSampleType) {
			return visitor.visitSampleType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternRecognitionContext extends ParserRuleContext {
	public _expression!: ExpressionContext;
	public _partition: ExpressionContext[] = [];
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public aliasedRelation(): AliasedRelationContext {
		return this.getTypedRuleContext(AliasedRelationContext, 0) as AliasedRelationContext;
	}
	public MATCH_RECOGNIZE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MATCH_RECOGNIZE, 0);
	}
	public PATTERN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PATTERN, 0);
	}
	public rowPattern(): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, 0) as RowPatternContext;
	}
	public DEFINE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DEFINE, 0);
	}
	public variableDefinition_list(): VariableDefinitionContext[] {
		return this.getTypedRuleContexts(VariableDefinitionContext) as VariableDefinitionContext[];
	}
	public variableDefinition(i: number): VariableDefinitionContext {
		return this.getTypedRuleContext(VariableDefinitionContext, i) as VariableDefinitionContext;
	}
	public PARTITION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PARTITION, 0);
	}
	public BY_list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParserParser.BY);
	}
	public BY(i: number): TerminalNode {
		return this.getToken(trinoSqlParserParser.BY, i);
	}
	public ORDER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ORDER, 0);
	}
	public sortItem_list(): SortItemContext[] {
		return this.getTypedRuleContexts(SortItemContext) as SortItemContext[];
	}
	public sortItem(i: number): SortItemContext {
		return this.getTypedRuleContext(SortItemContext, i) as SortItemContext;
	}
	public MEASURES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MEASURES, 0);
	}
	public measureDefinition_list(): MeasureDefinitionContext[] {
		return this.getTypedRuleContexts(MeasureDefinitionContext) as MeasureDefinitionContext[];
	}
	public measureDefinition(i: number): MeasureDefinitionContext {
		return this.getTypedRuleContext(MeasureDefinitionContext, i) as MeasureDefinitionContext;
	}
	public rowsPerMatch(): RowsPerMatchContext {
		return this.getTypedRuleContext(RowsPerMatchContext, 0) as RowsPerMatchContext;
	}
	public AFTER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AFTER, 0);
	}
	public MATCH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MATCH, 0);
	}
	public skipTo(): SkipToContext {
		return this.getTypedRuleContext(SkipToContext, 0) as SkipToContext;
	}
	public SUBSET(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SUBSET, 0);
	}
	public subsetDefinition_list(): SubsetDefinitionContext[] {
		return this.getTypedRuleContexts(SubsetDefinitionContext) as SubsetDefinitionContext[];
	}
	public subsetDefinition(i: number): SubsetDefinitionContext {
		return this.getTypedRuleContext(SubsetDefinitionContext, i) as SubsetDefinitionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public INITIAL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INITIAL, 0);
	}
	public SEEK(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SEEK, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AS, 0);
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_patternRecognition;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPatternRecognition) {
	 		listener.enterPatternRecognition(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPatternRecognition) {
	 		listener.exitPatternRecognition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPatternRecognition) {
			return visitor.visitPatternRecognition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MeasureDefinitionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public AS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AS, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_measureDefinition;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterMeasureDefinition) {
	 		listener.enterMeasureDefinition(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitMeasureDefinition) {
	 		listener.exitMeasureDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitMeasureDefinition) {
			return visitor.visitMeasureDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowsPerMatchContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ONE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ONE, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROW, 0);
	}
	public PER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PER, 0);
	}
	public MATCH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MATCH, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALL, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROWS, 0);
	}
	public emptyMatchHandling(): EmptyMatchHandlingContext {
		return this.getTypedRuleContext(EmptyMatchHandlingContext, 0) as EmptyMatchHandlingContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_rowsPerMatch;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRowsPerMatch) {
	 		listener.enterRowsPerMatch(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRowsPerMatch) {
	 		listener.exitRowsPerMatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRowsPerMatch) {
			return visitor.visitRowsPerMatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyMatchHandlingContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public EMPTY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EMPTY, 0);
	}
	public MATCHES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MATCHES, 0);
	}
	public OMIT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.OMIT, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WITH, 0);
	}
	public UNMATCHED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.UNMATCHED, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROWS, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_emptyMatchHandling;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterEmptyMatchHandling) {
	 		listener.enterEmptyMatchHandling(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitEmptyMatchHandling) {
	 		listener.exitEmptyMatchHandling(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitEmptyMatchHandling) {
			return visitor.visitEmptyMatchHandling(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SkipToContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TO(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TO, 0);
	}
	public NEXT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NEXT, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROW, 0);
	}
	public PAST(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PAST, 0);
	}
	public LAST(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LAST, 0);
	}
	public FIRST(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FIRST, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_skipTo;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSkipTo) {
	 		listener.enterSkipTo(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSkipTo) {
	 		listener.exitSkipTo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSkipTo) {
			return visitor.visitSkipTo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubsetDefinitionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public _identifier!: IdentifierContext;
	public _union: IdentifierContext[] = [];
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EQ, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_subsetDefinition;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSubsetDefinition) {
	 		listener.enterSubsetDefinition(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSubsetDefinition) {
	 		listener.exitSubsetDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSubsetDefinition) {
			return visitor.visitSubsetDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDefinitionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public AS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_variableDefinition;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterVariableDefinition) {
	 		listener.enterVariableDefinition(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitVariableDefinition) {
	 		listener.exitVariableDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitVariableDefinition) {
			return visitor.visitVariableDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasedRelationContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationPrimary(): RelationPrimaryContext {
		return this.getTypedRuleContext(RelationPrimaryContext, 0) as RelationPrimaryContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public AS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AS, 0);
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_aliasedRelation;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterAliasedRelation) {
	 		listener.enterAliasedRelation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitAliasedRelation) {
	 		listener.exitAliasedRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitAliasedRelation) {
			return visitor.visitAliasedRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnAliasesContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_columnAliases;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterColumnAliases) {
	 		listener.enterColumnAliases(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitColumnAliases) {
	 		listener.exitColumnAliases(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnAliases) {
			return visitor.visitColumnAliases(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationPrimaryContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_relationPrimary;
	}
	public copyFrom(ctx: RelationPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class SubqueryRelationContext extends RelationPrimaryContext {
	constructor(parser: trinoSqlParserParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSubqueryRelation) {
	 		listener.enterSubqueryRelation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSubqueryRelation) {
	 		listener.exitSubqueryRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSubqueryRelation) {
			return visitor.visitSubqueryRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedRelationContext extends RelationPrimaryContext {
	constructor(parser: trinoSqlParserParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public relation(): RelationContext {
		return this.getTypedRuleContext(RelationContext, 0) as RelationContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterParenthesizedRelation) {
	 		listener.enterParenthesizedRelation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitParenthesizedRelation) {
	 		listener.exitParenthesizedRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedRelation) {
			return visitor.visitParenthesizedRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnnestContext extends RelationPrimaryContext {
	constructor(parser: trinoSqlParserParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UNNEST(): TerminalNode {
		return this.getToken(trinoSqlParserParser.UNNEST, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WITH, 0);
	}
	public ORDINALITY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ORDINALITY, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUnnest) {
	 		listener.enterUnnest(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUnnest) {
	 		listener.exitUnnest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUnnest) {
			return visitor.visitUnnest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LateralContext extends RelationPrimaryContext {
	constructor(parser: trinoSqlParserParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LATERAL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LATERAL, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterLateral) {
	 		listener.enterLateral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitLateral) {
	 		listener.exitLateral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitLateral) {
			return visitor.visitLateral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableNameContext extends RelationPrimaryContext {
	constructor(parser: trinoSqlParserParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTableName) {
	 		listener.enterTableName(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTableName) {
	 		listener.exitTableName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTableName) {
			return visitor.visitTableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_expression;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_booleanExpression;
	}
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NOT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NOT, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterLogicalNot) {
	 		listener.enterLogicalNot(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitLogicalNot) {
	 		listener.exitLogicalNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitLogicalNot) {
			return visitor.visitLogicalNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredicatedContext extends BooleanExpressionContext {
	public _valueExpression!: ValueExpressionContext;
	constructor(parser: trinoSqlParserParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public predicate(): PredicateContext {
		return this.getTypedRuleContext(PredicateContext, 0) as PredicateContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPredicated) {
	 		listener.enterPredicated(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPredicated) {
	 		listener.exitPredicated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPredicated) {
			return visitor.visitPredicated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalBinaryContext extends BooleanExpressionContext {
	public _left!: BooleanExpressionContext;
	public _operator!: Token;
	public _right!: BooleanExpressionContext;
	constructor(parser: trinoSqlParserParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanExpression_list(): BooleanExpressionContext[] {
		return this.getTypedRuleContexts(BooleanExpressionContext) as BooleanExpressionContext[];
	}
	public booleanExpression(i: number): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, i) as BooleanExpressionContext;
	}
	public AND(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AND, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(trinoSqlParserParser.OR, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterLogicalBinary) {
	 		listener.enterLogicalBinary(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitLogicalBinary) {
	 		listener.exitLogicalBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitLogicalBinary) {
			return visitor.visitLogicalBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public value: ParserRuleContext;
	constructor(parser: trinoSqlParserParser, parent: ParserRuleContext, invokingState: number, value: ParserRuleContext) {
		super(parent, invokingState);
    	this.parser = parser;
        this.value = value;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_predicate;
	}
	public copyFrom(ctx: PredicateContext): void {
		super.copyFrom(ctx);
		this.value = ctx.value;
	}
}
export class ComparisonContext extends PredicateContext {
	public _right!: ValueExpressionContext;
	constructor(parser: trinoSqlParserParser, ctx: PredicateContext) {
		super(parser, ctx.parentCtx, ctx.invokingState, ctx.value);
		super.copyFrom(ctx);
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext;
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterComparison) {
	 		listener.enterComparison(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitComparison) {
	 		listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LikeContext extends PredicateContext {
	public _pattern!: ValueExpressionContext;
	public _escape!: ValueExpressionContext;
	constructor(parser: trinoSqlParserParser, ctx: PredicateContext) {
		super(parser, ctx.parentCtx, ctx.invokingState, ctx.value);
		super.copyFrom(ctx);
	}
	public LIKE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LIKE, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NOT, 0);
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ESCAPE, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterLike) {
	 		listener.enterLike(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitLike) {
	 		listener.exitLike(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitLike) {
			return visitor.visitLike(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InSubqueryContext extends PredicateContext {
	constructor(parser: trinoSqlParserParser, ctx: PredicateContext) {
		super(parser, ctx.parentCtx, ctx.invokingState, ctx.value);
		super.copyFrom(ctx);
	}
	public IN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IN, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NOT, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterInSubquery) {
	 		listener.enterInSubquery(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitInSubquery) {
	 		listener.exitInSubquery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitInSubquery) {
			return visitor.visitInSubquery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DistinctFromContext extends PredicateContext {
	public _right!: ValueExpressionContext;
	constructor(parser: trinoSqlParserParser, ctx: PredicateContext) {
		super(parser, ctx.parentCtx, ctx.invokingState, ctx.value);
		super.copyFrom(ctx);
	}
	public IS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IS, 0);
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DISTINCT, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FROM, 0);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NOT, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDistinctFrom) {
	 		listener.enterDistinctFrom(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDistinctFrom) {
	 		listener.exitDistinctFrom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDistinctFrom) {
			return visitor.visitDistinctFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InListContext extends PredicateContext {
	constructor(parser: trinoSqlParserParser, ctx: PredicateContext) {
		super(parser, ctx.parentCtx, ctx.invokingState, ctx.value);
		super.copyFrom(ctx);
	}
	public IN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NOT, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterInList) {
	 		listener.enterInList(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitInList) {
	 		listener.exitInList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitInList) {
			return visitor.visitInList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullPredicateContext extends PredicateContext {
	constructor(parser: trinoSqlParserParser, ctx: PredicateContext) {
		super(parser, ctx.parentCtx, ctx.invokingState, ctx.value);
		super.copyFrom(ctx);
	}
	public IS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IS, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NULL, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NOT, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNullPredicate) {
	 		listener.enterNullPredicate(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNullPredicate) {
	 		listener.exitNullPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNullPredicate) {
			return visitor.visitNullPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BetweenContext extends PredicateContext {
	public _lower!: ValueExpressionContext;
	public _upper!: ValueExpressionContext;
	constructor(parser: trinoSqlParserParser, ctx: PredicateContext) {
		super(parser, ctx.parentCtx, ctx.invokingState, ctx.value);
		super.copyFrom(ctx);
	}
	public BETWEEN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.BETWEEN, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AND, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NOT, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterBetween) {
	 		listener.enterBetween(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitBetween) {
	 		listener.exitBetween(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitBetween) {
			return visitor.visitBetween(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuantifiedComparisonContext extends PredicateContext {
	constructor(parser: trinoSqlParserParser, ctx: PredicateContext) {
		super(parser, ctx.parentCtx, ctx.invokingState, ctx.value);
		super.copyFrom(ctx);
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext;
	}
	public comparisonQuantifier(): ComparisonQuantifierContext {
		return this.getTypedRuleContext(ComparisonQuantifierContext, 0) as ComparisonQuantifierContext;
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQuantifiedComparison) {
	 		listener.enterQuantifiedComparison(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQuantifiedComparison) {
	 		listener.exitQuantifiedComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQuantifiedComparison) {
			return visitor.visitQuantifiedComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueExpressionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_valueExpression;
	}
	public copyFrom(ctx: ValueExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterValueExpressionDefault) {
	 		listener.enterValueExpressionDefault(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitValueExpressionDefault) {
	 		listener.exitValueExpressionDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitValueExpressionDefault) {
			return visitor.visitValueExpressionDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConcatenationContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _right!: ValueExpressionContext;
	constructor(parser: trinoSqlParserParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CONCAT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CONCAT, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterConcatenation) {
	 		listener.enterConcatenation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitConcatenation) {
	 		listener.exitConcatenation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitConcatenation) {
			return visitor.visitConcatenation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _operator!: Token;
	public _right!: ValueExpressionContext;
	constructor(parser: trinoSqlParserParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public ASTERISK(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ASTERISK, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SLASH, 0);
	}
	public PERCENT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PERCENT, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MINUS, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterArithmeticBinary) {
	 		listener.enterArithmeticBinary(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitArithmeticBinary) {
	 		listener.exitArithmeticBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitArithmeticBinary) {
			return visitor.visitArithmeticBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
	public _operator!: Token;
	constructor(parser: trinoSqlParserParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MINUS, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PLUS, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterArithmeticUnary) {
	 		listener.enterArithmeticUnary(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitArithmeticUnary) {
	 		listener.exitArithmeticUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitArithmeticUnary) {
			return visitor.visitArithmeticUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AtTimeZoneContext extends ValueExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public AT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AT, 0);
	}
	public timeZoneSpecifier(): TimeZoneSpecifierContext {
		return this.getTypedRuleContext(TimeZoneSpecifierContext, 0) as TimeZoneSpecifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterAtTimeZone) {
	 		listener.enterAtTimeZone(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitAtTimeZone) {
	 		listener.exitAtTimeZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitAtTimeZone) {
			return visitor.visitAtTimeZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_primaryExpression;
	}
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class DereferenceContext extends PrimaryExpressionContext {
	public _base!: PrimaryExpressionContext;
	public _fieldName!: IdentifierContext;
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDereference) {
	 		listener.enterDereference(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDereference) {
	 		listener.exitDereference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDereference) {
			return visitor.visitDereference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeConstructorContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DOUBLE, 0);
	}
	public PRECISION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PRECISION, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTypeConstructor) {
	 		listener.enterTypeConstructor(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTypeConstructor) {
	 		listener.exitTypeConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTypeConstructor) {
			return visitor.visitTypeConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SpecialDateTimeFunctionContext extends PrimaryExpressionContext {
	public _name!: Token;
	public _precision!: Token;
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_DATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CURRENT_DATE, 0);
	}
	public CURRENT_TIME(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CURRENT_TIME, 0);
	}
	public INTEGER_VALUE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INTEGER_VALUE, 0);
	}
	public CURRENT_TIMESTAMP(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CURRENT_TIMESTAMP, 0);
	}
	public LOCALTIME(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LOCALTIME, 0);
	}
	public LOCALTIMESTAMP(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LOCALTIMESTAMP, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSpecialDateTimeFunction) {
	 		listener.enterSpecialDateTimeFunction(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSpecialDateTimeFunction) {
	 		listener.exitSpecialDateTimeFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSpecialDateTimeFunction) {
			return visitor.visitSpecialDateTimeFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubstringContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SUBSTRING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SUBSTRING, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FROM, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FOR, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSubstring) {
	 		listener.enterSubstring(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSubstring) {
	 		listener.exitSubstring(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSubstring) {
			return visitor.visitSubstring(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CAST(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CAST, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public AS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AS, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public TRY_CAST(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TRY_CAST, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCast) {
	 		listener.enterCast(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCast) {
	 		listener.exitCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCast) {
			return visitor.visitCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterLambda) {
	 		listener.enterLambda(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitLambda) {
	 		listener.exitLambda(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitLambda) {
			return visitor.visitLambda(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterParenthesizedExpression) {
	 		listener.enterParenthesizedExpression(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitParenthesizedExpression) {
	 		listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParameterContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public QUESTION_MARK(): TerminalNode {
		return this.getToken(trinoSqlParserParser.QUESTION_MARK, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NormalizeContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NORMALIZE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NORMALIZE, 0);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public normalForm(): NormalFormContext {
		return this.getTypedRuleContext(NormalFormContext, 0) as NormalFormContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNormalize) {
	 		listener.enterNormalize(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNormalize) {
	 		listener.exitNormalize(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNormalize) {
			return visitor.visitNormalize(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntervalLiteralContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public interval(): IntervalContext {
		return this.getTypedRuleContext(IntervalContext, 0) as IntervalContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterIntervalLiteral) {
	 		listener.enterIntervalLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitIntervalLiteral) {
	 		listener.exitIntervalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitIntervalLiteral) {
			return visitor.visitIntervalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericLiteralContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNumericLiteral) {
	 		listener.enterNumericLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNumericLiteral) {
	 		listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanValue(): BooleanValueContext {
		return this.getTypedRuleContext(BooleanValueContext, 0) as BooleanValueContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterBooleanLiteral) {
	 		listener.enterBooleanLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitBooleanLiteral) {
	 		listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleCaseContext extends PrimaryExpressionContext {
	public _operand!: ExpressionContext;
	public _elseExpression!: ExpressionContext;
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CASE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CASE, 0);
	}
	public END(): TerminalNode {
		return this.getToken(trinoSqlParserParser.END, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public whenClause_list(): WhenClauseContext[] {
		return this.getTypedRuleContexts(WhenClauseContext) as WhenClauseContext[];
	}
	public whenClause(i: number): WhenClauseContext {
		return this.getTypedRuleContext(WhenClauseContext, i) as WhenClauseContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ELSE, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSimpleCase) {
	 		listener.enterSimpleCase(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSimpleCase) {
	 		listener.exitSimpleCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSimpleCase) {
			return visitor.visitSimpleCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterColumnReference) {
	 		listener.enterColumnReference(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitColumnReference) {
	 		listener.exitColumnReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnReference) {
			return visitor.visitColumnReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullLiteralContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NULL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NULL, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNullLiteral) {
	 		listener.enterNullLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNullLiteral) {
	 		listener.exitNullLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNullLiteral) {
			return visitor.visitNullLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RowConstructorContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public ROW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROW, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRowConstructor) {
	 		listener.enterRowConstructor(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRowConstructor) {
	 		listener.exitRowConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRowConstructor) {
			return visitor.visitRowConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubscriptContext extends PrimaryExpressionContext {
	public _value!: PrimaryExpressionContext;
	public _index!: ValueExpressionContext;
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSubscript) {
	 		listener.enterSubscript(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSubscript) {
	 		listener.exitSubscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSubscript) {
			return visitor.visitSubscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentPathContext extends PrimaryExpressionContext {
	public _name!: Token;
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_PATH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CURRENT_PATH, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCurrentPath) {
	 		listener.enterCurrentPath(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCurrentPath) {
	 		listener.exitCurrentPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCurrentPath) {
			return visitor.visitCurrentPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSubqueryExpression) {
	 		listener.enterSubqueryExpression(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSubqueryExpression) {
	 		listener.exitSubqueryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSubqueryExpression) {
			return visitor.visitSubqueryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryLiteralContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BINARY_LITERAL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.BINARY_LITERAL, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterBinaryLiteral) {
	 		listener.enterBinaryLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitBinaryLiteral) {
	 		listener.exitBinaryLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitBinaryLiteral) {
			return visitor.visitBinaryLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentUserContext extends PrimaryExpressionContext {
	public _name!: Token;
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_USER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CURRENT_USER, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCurrentUser) {
	 		listener.enterCurrentUser(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCurrentUser) {
	 		listener.exitCurrentUser(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCurrentUser) {
			return visitor.visitCurrentUser(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MeasureContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public over(): OverContext {
		return this.getTypedRuleContext(OverContext, 0) as OverContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterMeasure) {
	 		listener.enterMeasure(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitMeasure) {
	 		listener.exitMeasure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitMeasure) {
			return visitor.visitMeasure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExtractContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXTRACT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXTRACT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FROM, 0);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterExtract) {
	 		listener.enterExtract(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitExtract) {
	 		listener.exitExtract(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitExtract) {
			return visitor.visitExtract(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterStringLiteral) {
	 		listener.enterStringLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitStringLiteral) {
	 		listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayConstructorContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ARRAY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ARRAY, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterArrayConstructor) {
	 		listener.enterArrayConstructor(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitArrayConstructor) {
	 		listener.exitArrayConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitArrayConstructor) {
			return visitor.visitArrayConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public ASTERISK(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ASTERISK, 0);
	}
	public filter(): FilterContext {
		return this.getTypedRuleContext(FilterContext, 0) as FilterContext;
	}
	public over(): OverContext {
		return this.getTypedRuleContext(OverContext, 0) as OverContext;
	}
	public processingMode(): ProcessingModeContext {
		return this.getTypedRuleContext(ProcessingModeContext, 0) as ProcessingModeContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public ORDER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ORDER, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.BY, 0);
	}
	public sortItem_list(): SortItemContext[] {
		return this.getTypedRuleContexts(SortItemContext) as SortItemContext[];
	}
	public sortItem(i: number): SortItemContext {
		return this.getTypedRuleContext(SortItemContext, i) as SortItemContext;
	}
	public setQuantifier(): SetQuantifierContext {
		return this.getTypedRuleContext(SetQuantifierContext, 0) as SetQuantifierContext;
	}
	public nullTreatment(): NullTreatmentContext {
		return this.getTypedRuleContext(NullTreatmentContext, 0) as NullTreatmentContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentSchemaContext extends PrimaryExpressionContext {
	public _name!: Token;
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_SCHEMA(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CURRENT_SCHEMA, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCurrentSchema) {
	 		listener.enterCurrentSchema(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCurrentSchema) {
	 		listener.exitCurrentSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCurrentSchema) {
			return visitor.visitCurrentSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistsContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXISTS, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterExists) {
	 		listener.enterExists(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitExists) {
	 		listener.exitExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitExists) {
			return visitor.visitExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PositionContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public POSITION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.POSITION, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public IN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IN, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPosition) {
	 		listener.enterPosition(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPosition) {
	 		listener.exitPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPosition) {
			return visitor.visitPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SearchedCaseContext extends PrimaryExpressionContext {
	public _elseExpression!: ExpressionContext;
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CASE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CASE, 0);
	}
	public END(): TerminalNode {
		return this.getToken(trinoSqlParserParser.END, 0);
	}
	public whenClause_list(): WhenClauseContext[] {
		return this.getTypedRuleContexts(WhenClauseContext) as WhenClauseContext[];
	}
	public whenClause(i: number): WhenClauseContext {
		return this.getTypedRuleContext(WhenClauseContext, i) as WhenClauseContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ELSE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSearchedCase) {
	 		listener.enterSearchedCase(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSearchedCase) {
	 		listener.exitSearchedCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSearchedCase) {
			return visitor.visitSearchedCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentCatalogContext extends PrimaryExpressionContext {
	public _name!: Token;
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_CATALOG(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CURRENT_CATALOG, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCurrentCatalog) {
	 		listener.enterCurrentCatalog(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCurrentCatalog) {
	 		listener.exitCurrentCatalog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCurrentCatalog) {
			return visitor.visitCurrentCatalog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GroupingOperationContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParserParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GROUPING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GROUPING, 0);
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterGroupingOperation) {
	 		listener.enterGroupingOperation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitGroupingOperation) {
	 		listener.exitGroupingOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupingOperation) {
			return visitor.visitGroupingOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessingModeContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RUNNING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.RUNNING, 0);
	}
	public FINAL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FINAL, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_processingMode;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterProcessingMode) {
	 		listener.enterProcessingMode(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitProcessingMode) {
	 		listener.exitProcessingMode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitProcessingMode) {
			return visitor.visitProcessingMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NullTreatmentContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IGNORE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IGNORE, 0);
	}
	public NULLS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NULLS, 0);
	}
	public RESPECT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.RESPECT, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_nullTreatment;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNullTreatment) {
	 		listener.enterNullTreatment(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNullTreatment) {
	 		listener.exitNullTreatment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNullTreatment) {
			return visitor.visitNullTreatment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_string;
	}
	public copyFrom(ctx: StringContext): void {
		super.copyFrom(ctx);
	}
}
export class UnicodeStringLiteralContext extends StringContext {
	constructor(parser: trinoSqlParserParser, ctx: StringContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UNICODE_STRING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.UNICODE_STRING, 0);
	}
	public UESCAPE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.UESCAPE, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.STRING, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUnicodeStringLiteral) {
	 		listener.enterUnicodeStringLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUnicodeStringLiteral) {
	 		listener.exitUnicodeStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUnicodeStringLiteral) {
			return visitor.visitUnicodeStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BasicStringLiteralContext extends StringContext {
	constructor(parser: trinoSqlParserParser, ctx: StringContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.STRING, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterBasicStringLiteral) {
	 		listener.enterBasicStringLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitBasicStringLiteral) {
	 		listener.exitBasicStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitBasicStringLiteral) {
			return visitor.visitBasicStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeZoneSpecifierContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_timeZoneSpecifier;
	}
	public copyFrom(ctx: TimeZoneSpecifierContext): void {
		super.copyFrom(ctx);
	}
}
export class TimeZoneIntervalContext extends TimeZoneSpecifierContext {
	constructor(parser: trinoSqlParserParser, ctx: TimeZoneSpecifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TIME(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TIME, 0);
	}
	public ZONE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ZONE, 0);
	}
	public interval(): IntervalContext {
		return this.getTypedRuleContext(IntervalContext, 0) as IntervalContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTimeZoneInterval) {
	 		listener.enterTimeZoneInterval(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTimeZoneInterval) {
	 		listener.exitTimeZoneInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTimeZoneInterval) {
			return visitor.visitTimeZoneInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimeZoneStringContext extends TimeZoneSpecifierContext {
	constructor(parser: trinoSqlParserParser, ctx: TimeZoneSpecifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TIME(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TIME, 0);
	}
	public ZONE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ZONE, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTimeZoneString) {
	 		listener.enterTimeZoneString(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTimeZoneString) {
	 		listener.exitTimeZoneString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTimeZoneString) {
			return visitor.visitTimeZoneString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EQ, 0);
	}
	public NEQ(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NEQ, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LT, 0);
	}
	public LTE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LTE, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GT, 0);
	}
	public GTE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GTE, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_comparisonOperator;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterComparisonOperator) {
	 		listener.enterComparisonOperator(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitComparisonOperator) {
	 		listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonQuantifierContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALL, 0);
	}
	public SOME(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SOME, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ANY, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_comparisonQuantifier;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterComparisonQuantifier) {
	 		listener.enterComparisonQuantifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitComparisonQuantifier) {
	 		listener.exitComparisonQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitComparisonQuantifier) {
			return visitor.visitComparisonQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_booleanValue;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterBooleanValue) {
	 		listener.enterBooleanValue(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitBooleanValue) {
	 		listener.exitBooleanValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitBooleanValue) {
			return visitor.visitBooleanValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalContext extends ParserRuleContext {
	public _sign!: Token;
	public _from_!: IntervalFieldContext;
	public _to!: IntervalFieldContext;
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTERVAL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INTERVAL, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public intervalField_list(): IntervalFieldContext[] {
		return this.getTypedRuleContexts(IntervalFieldContext) as IntervalFieldContext[];
	}
	public intervalField(i: number): IntervalFieldContext {
		return this.getTypedRuleContext(IntervalFieldContext, i) as IntervalFieldContext;
	}
	public TO(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TO, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_interval;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterInterval) {
	 		listener.enterInterval(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitInterval) {
	 		listener.exitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitInterval) {
			return visitor.visitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalFieldContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public YEAR(): TerminalNode {
		return this.getToken(trinoSqlParserParser.YEAR, 0);
	}
	public MONTH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MONTH, 0);
	}
	public DAY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DAY, 0);
	}
	public HOUR(): TerminalNode {
		return this.getToken(trinoSqlParserParser.HOUR, 0);
	}
	public MINUTE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MINUTE, 0);
	}
	public SECOND(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SECOND, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_intervalField;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterIntervalField) {
	 		listener.enterIntervalField(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitIntervalField) {
	 		listener.exitIntervalField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitIntervalField) {
			return visitor.visitIntervalField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalFormContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NFD(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NFD, 0);
	}
	public NFC(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NFC, 0);
	}
	public NFKD(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NFKD, 0);
	}
	public NFKC(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NFKC, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_normalForm;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNormalForm) {
	 		listener.enterNormalForm(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNormalForm) {
	 		listener.exitNormalForm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNormalForm) {
			return visitor.visitNormalForm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_type;
	}
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class RowTypeContext extends TypeContext {
	constructor(parser: trinoSqlParserParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ROW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROW, 0);
	}
	public rowField_list(): RowFieldContext[] {
		return this.getTypedRuleContexts(RowFieldContext) as RowFieldContext[];
	}
	public rowField(i: number): RowFieldContext {
		return this.getTypedRuleContext(RowFieldContext, i) as RowFieldContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRowType) {
	 		listener.enterRowType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRowType) {
	 		listener.exitRowType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRowType) {
			return visitor.visitRowType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntervalTypeContext extends TypeContext {
	public _from_!: IntervalFieldContext;
	public _to!: IntervalFieldContext;
	constructor(parser: trinoSqlParserParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTERVAL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INTERVAL, 0);
	}
	public intervalField_list(): IntervalFieldContext[] {
		return this.getTypedRuleContexts(IntervalFieldContext) as IntervalFieldContext[];
	}
	public intervalField(i: number): IntervalFieldContext {
		return this.getTypedRuleContext(IntervalFieldContext, i) as IntervalFieldContext;
	}
	public TO(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TO, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterIntervalType) {
	 		listener.enterIntervalType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitIntervalType) {
	 		listener.exitIntervalType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitIntervalType) {
			return visitor.visitIntervalType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayTypeContext extends TypeContext {
	constructor(parser: trinoSqlParserParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public ARRAY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ARRAY, 0);
	}
	public INTEGER_VALUE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INTEGER_VALUE, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterArrayType) {
	 		listener.enterArrayType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitArrayType) {
	 		listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoublePrecisionTypeContext extends TypeContext {
	constructor(parser: trinoSqlParserParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DOUBLE, 0);
	}
	public PRECISION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PRECISION, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDoublePrecisionType) {
	 		listener.enterDoublePrecisionType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDoublePrecisionType) {
	 		listener.exitDoublePrecisionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDoublePrecisionType) {
			return visitor.visitDoublePrecisionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LegacyArrayTypeContext extends TypeContext {
	constructor(parser: trinoSqlParserParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ARRAY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ARRAY, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LT, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public GT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GT, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterLegacyArrayType) {
	 		listener.enterLegacyArrayType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitLegacyArrayType) {
	 		listener.exitLegacyArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitLegacyArrayType) {
			return visitor.visitLegacyArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GenericTypeContext extends TypeContext {
	constructor(parser: trinoSqlParserParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public typeParameter_list(): TypeParameterContext[] {
		return this.getTypedRuleContexts(TypeParameterContext) as TypeParameterContext[];
	}
	public typeParameter(i: number): TypeParameterContext {
		return this.getTypedRuleContext(TypeParameterContext, i) as TypeParameterContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterGenericType) {
	 		listener.enterGenericType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitGenericType) {
	 		listener.exitGenericType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitGenericType) {
			return visitor.visitGenericType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateTimeTypeContext extends TypeContext {
	public _base!: Token;
	public _precision!: TypeParameterContext;
	constructor(parser: trinoSqlParserParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TIMESTAMP(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TIMESTAMP, 0);
	}
	public WITHOUT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WITHOUT, 0);
	}
	public TIME_list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParserParser.TIME);
	}
	public TIME(i: number): TerminalNode {
		return this.getToken(trinoSqlParserParser.TIME, i);
	}
	public ZONE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ZONE, 0);
	}
	public typeParameter(): TypeParameterContext {
		return this.getTypedRuleContext(TypeParameterContext, 0) as TypeParameterContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WITH, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDateTimeType) {
	 		listener.enterDateTimeType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDateTimeType) {
	 		listener.exitDateTimeType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDateTimeType) {
			return visitor.visitDateTimeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LegacyMapTypeContext extends TypeContext {
	public _keyType!: TypeContext;
	public _valueType!: TypeContext;
	constructor(parser: trinoSqlParserParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MAP(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MAP, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GT, 0);
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterLegacyMapType) {
	 		listener.enterLegacyMapType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitLegacyMapType) {
	 		listener.exitLegacyMapType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitLegacyMapType) {
			return visitor.visitLegacyMapType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowFieldContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_rowField;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRowField) {
	 		listener.enterRowField(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRowField) {
	 		listener.exitRowField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRowField) {
			return visitor.visitRowField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER_VALUE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INTEGER_VALUE, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_typeParameter;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTypeParameter) {
	 		listener.enterTypeParameter(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTypeParameter) {
	 		listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenClauseContext extends ParserRuleContext {
	public _condition!: ExpressionContext;
	public _result!: ExpressionContext;
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHEN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WHEN, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.THEN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_whenClause;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterWhenClause) {
	 		listener.enterWhenClause(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitWhenClause) {
	 		listener.exitWhenClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitWhenClause) {
			return visitor.visitWhenClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilterContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FILTER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FILTER, 0);
	}
	public WHERE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WHERE, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_filter;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterFilter) {
	 		listener.enterFilter(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitFilter) {
	 		listener.exitFilter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitFilter) {
			return visitor.visitFilter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MergeCaseContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_mergeCase;
	}
	public copyFrom(ctx: MergeCaseContext): void {
		super.copyFrom(ctx);
	}
}
export class MergeInsertContext extends MergeCaseContext {
	public _condition!: ExpressionContext;
	public _identifier!: IdentifierContext;
	public _targets: IdentifierContext[] = [];
	public _expression!: ExpressionContext;
	public _values: ExpressionContext[] = [];
	constructor(parser: trinoSqlParserParser, ctx: MergeCaseContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public WHEN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WHEN, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NOT, 0);
	}
	public MATCHED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MATCHED, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.THEN, 0);
	}
	public INSERT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INSERT, 0);
	}
	public VALUES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.VALUES, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public AND(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AND, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterMergeInsert) {
	 		listener.enterMergeInsert(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitMergeInsert) {
	 		listener.exitMergeInsert(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitMergeInsert) {
			return visitor.visitMergeInsert(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MergeUpdateContext extends MergeCaseContext {
	public _condition!: ExpressionContext;
	public _identifier!: IdentifierContext;
	public _targets: IdentifierContext[] = [];
	public _expression!: ExpressionContext;
	public _values: ExpressionContext[] = [];
	constructor(parser: trinoSqlParserParser, ctx: MergeCaseContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public WHEN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WHEN, 0);
	}
	public MATCHED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MATCHED, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.THEN, 0);
	}
	public UPDATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.UPDATE, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SET, 0);
	}
	public EQ_list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParserParser.EQ);
	}
	public EQ(i: number): TerminalNode {
		return this.getToken(trinoSqlParserParser.EQ, i);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public AND(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AND, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterMergeUpdate) {
	 		listener.enterMergeUpdate(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitMergeUpdate) {
	 		listener.exitMergeUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitMergeUpdate) {
			return visitor.visitMergeUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MergeDeleteContext extends MergeCaseContext {
	public _condition!: ExpressionContext;
	constructor(parser: trinoSqlParserParser, ctx: MergeCaseContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public WHEN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WHEN, 0);
	}
	public MATCHED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MATCHED, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.THEN, 0);
	}
	public DELETE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DELETE, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AND, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterMergeDelete) {
	 		listener.enterMergeDelete(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitMergeDelete) {
	 		listener.exitMergeDelete(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitMergeDelete) {
			return visitor.visitMergeDelete(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverContext extends ParserRuleContext {
	public _windowName!: IdentifierContext;
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OVER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.OVER, 0);
	}
	public windowSpecification(): WindowSpecificationContext {
		return this.getTypedRuleContext(WindowSpecificationContext, 0) as WindowSpecificationContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_over;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterOver) {
	 		listener.enterOver(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitOver) {
	 		listener.exitOver(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitOver) {
			return visitor.visitOver(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowFrameContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public frameExtent(): FrameExtentContext {
		return this.getTypedRuleContext(FrameExtentContext, 0) as FrameExtentContext;
	}
	public MEASURES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MEASURES, 0);
	}
	public measureDefinition_list(): MeasureDefinitionContext[] {
		return this.getTypedRuleContexts(MeasureDefinitionContext) as MeasureDefinitionContext[];
	}
	public measureDefinition(i: number): MeasureDefinitionContext {
		return this.getTypedRuleContext(MeasureDefinitionContext, i) as MeasureDefinitionContext;
	}
	public AFTER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AFTER, 0);
	}
	public MATCH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MATCH, 0);
	}
	public skipTo(): SkipToContext {
		return this.getTypedRuleContext(SkipToContext, 0) as SkipToContext;
	}
	public PATTERN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PATTERN, 0);
	}
	public rowPattern(): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, 0) as RowPatternContext;
	}
	public SUBSET(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SUBSET, 0);
	}
	public subsetDefinition_list(): SubsetDefinitionContext[] {
		return this.getTypedRuleContexts(SubsetDefinitionContext) as SubsetDefinitionContext[];
	}
	public subsetDefinition(i: number): SubsetDefinitionContext {
		return this.getTypedRuleContext(SubsetDefinitionContext, i) as SubsetDefinitionContext;
	}
	public DEFINE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DEFINE, 0);
	}
	public variableDefinition_list(): VariableDefinitionContext[] {
		return this.getTypedRuleContexts(VariableDefinitionContext) as VariableDefinitionContext[];
	}
	public variableDefinition(i: number): VariableDefinitionContext {
		return this.getTypedRuleContext(VariableDefinitionContext, i) as VariableDefinitionContext;
	}
	public INITIAL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INITIAL, 0);
	}
	public SEEK(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SEEK, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_windowFrame;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterWindowFrame) {
	 		listener.enterWindowFrame(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitWindowFrame) {
	 		listener.exitWindowFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowFrame) {
			return visitor.visitWindowFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FrameExtentContext extends ParserRuleContext {
	public _frameType!: Token;
	public _start!: FrameBoundContext;
	public _end!: FrameBoundContext;
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RANGE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.RANGE, 0);
	}
	public frameBound_list(): FrameBoundContext[] {
		return this.getTypedRuleContexts(FrameBoundContext) as FrameBoundContext[];
	}
	public frameBound(i: number): FrameBoundContext {
		return this.getTypedRuleContext(FrameBoundContext, i) as FrameBoundContext;
	}
	public ROWS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROWS, 0);
	}
	public GROUPS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GROUPS, 0);
	}
	public BETWEEN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.BETWEEN, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AND, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_frameExtent;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterFrameExtent) {
	 		listener.enterFrameExtent(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitFrameExtent) {
	 		listener.exitFrameExtent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitFrameExtent) {
			return visitor.visitFrameExtent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FrameBoundContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_frameBound;
	}
	public copyFrom(ctx: FrameBoundContext): void {
		super.copyFrom(ctx);
	}
}
export class BoundedFrameContext extends FrameBoundContext {
	public _boundType!: Token;
	constructor(parser: trinoSqlParserParser, ctx: FrameBoundContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public PRECEDING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PRECEDING, 0);
	}
	public FOLLOWING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FOLLOWING, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterBoundedFrame) {
	 		listener.enterBoundedFrame(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitBoundedFrame) {
	 		listener.exitBoundedFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitBoundedFrame) {
			return visitor.visitBoundedFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnboundedFrameContext extends FrameBoundContext {
	public _boundType!: Token;
	constructor(parser: trinoSqlParserParser, ctx: FrameBoundContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UNBOUNDED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.UNBOUNDED, 0);
	}
	public PRECEDING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PRECEDING, 0);
	}
	public FOLLOWING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FOLLOWING, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUnboundedFrame) {
	 		listener.enterUnboundedFrame(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUnboundedFrame) {
	 		listener.exitUnboundedFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUnboundedFrame) {
			return visitor.visitUnboundedFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentRowBoundContext extends FrameBoundContext {
	constructor(parser: trinoSqlParserParser, ctx: FrameBoundContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CURRENT, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROW, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCurrentRowBound) {
	 		listener.enterCurrentRowBound(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCurrentRowBound) {
	 		listener.exitCurrentRowBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCurrentRowBound) {
			return visitor.visitCurrentRowBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowPatternContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_rowPattern;
	}
	public copyFrom(ctx: RowPatternContext): void {
		super.copyFrom(ctx);
	}
}
export class QuantifiedPrimaryContext extends RowPatternContext {
	constructor(parser: trinoSqlParserParser, ctx: RowPatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public patternPrimary(): PatternPrimaryContext {
		return this.getTypedRuleContext(PatternPrimaryContext, 0) as PatternPrimaryContext;
	}
	public patternQuantifier(): PatternQuantifierContext {
		return this.getTypedRuleContext(PatternQuantifierContext, 0) as PatternQuantifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQuantifiedPrimary) {
	 		listener.enterQuantifiedPrimary(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQuantifiedPrimary) {
	 		listener.exitQuantifiedPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQuantifiedPrimary) {
			return visitor.visitQuantifiedPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternConcatenationContext extends RowPatternContext {
	constructor(parser: trinoSqlParserParser, ctx: RowPatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public rowPattern_list(): RowPatternContext[] {
		return this.getTypedRuleContexts(RowPatternContext) as RowPatternContext[];
	}
	public rowPattern(i: number): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, i) as RowPatternContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPatternConcatenation) {
	 		listener.enterPatternConcatenation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPatternConcatenation) {
	 		listener.exitPatternConcatenation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPatternConcatenation) {
			return visitor.visitPatternConcatenation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternAlternationContext extends RowPatternContext {
	constructor(parser: trinoSqlParserParser, ctx: RowPatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public rowPattern_list(): RowPatternContext[] {
		return this.getTypedRuleContexts(RowPatternContext) as RowPatternContext[];
	}
	public rowPattern(i: number): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, i) as RowPatternContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPatternAlternation) {
	 		listener.enterPatternAlternation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPatternAlternation) {
	 		listener.exitPatternAlternation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPatternAlternation) {
			return visitor.visitPatternAlternation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternPrimaryContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_patternPrimary;
	}
	public copyFrom(ctx: PatternPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class PatternPermutationContext extends PatternPrimaryContext {
	constructor(parser: trinoSqlParserParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PERMUTE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PERMUTE, 0);
	}
	public rowPattern_list(): RowPatternContext[] {
		return this.getTypedRuleContexts(RowPatternContext) as RowPatternContext[];
	}
	public rowPattern(i: number): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, i) as RowPatternContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPatternPermutation) {
	 		listener.enterPatternPermutation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPatternPermutation) {
	 		listener.exitPatternPermutation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPatternPermutation) {
			return visitor.visitPatternPermutation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PartitionEndAnchorContext extends PatternPrimaryContext {
	constructor(parser: trinoSqlParserParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPartitionEndAnchor) {
	 		listener.enterPartitionEndAnchor(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPartitionEndAnchor) {
	 		listener.exitPartitionEndAnchor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPartitionEndAnchor) {
			return visitor.visitPartitionEndAnchor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternVariableContext extends PatternPrimaryContext {
	constructor(parser: trinoSqlParserParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPatternVariable) {
	 		listener.enterPatternVariable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPatternVariable) {
	 		listener.exitPatternVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPatternVariable) {
			return visitor.visitPatternVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExcludedPatternContext extends PatternPrimaryContext {
	constructor(parser: trinoSqlParserParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public rowPattern(): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, 0) as RowPatternContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterExcludedPattern) {
	 		listener.enterExcludedPattern(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitExcludedPattern) {
	 		listener.exitExcludedPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitExcludedPattern) {
			return visitor.visitExcludedPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PartitionStartAnchorContext extends PatternPrimaryContext {
	constructor(parser: trinoSqlParserParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPartitionStartAnchor) {
	 		listener.enterPartitionStartAnchor(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPartitionStartAnchor) {
	 		listener.exitPartitionStartAnchor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPartitionStartAnchor) {
			return visitor.visitPartitionStartAnchor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmptyPatternContext extends PatternPrimaryContext {
	constructor(parser: trinoSqlParserParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterEmptyPattern) {
	 		listener.enterEmptyPattern(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitEmptyPattern) {
	 		listener.exitEmptyPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitEmptyPattern) {
			return visitor.visitEmptyPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GroupedPatternContext extends PatternPrimaryContext {
	constructor(parser: trinoSqlParserParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public rowPattern(): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, 0) as RowPatternContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterGroupedPattern) {
	 		listener.enterGroupedPattern(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitGroupedPattern) {
	 		listener.exitGroupedPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupedPattern) {
			return visitor.visitGroupedPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternQuantifierContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_patternQuantifier;
	}
	public copyFrom(ctx: PatternQuantifierContext): void {
		super.copyFrom(ctx);
	}
}
export class ZeroOrMoreQuantifierContext extends PatternQuantifierContext {
	public _reluctant!: Token;
	constructor(parser: trinoSqlParserParser, ctx: PatternQuantifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ASTERISK(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ASTERISK, 0);
	}
	public QUESTION_MARK(): TerminalNode {
		return this.getToken(trinoSqlParserParser.QUESTION_MARK, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterZeroOrMoreQuantifier) {
	 		listener.enterZeroOrMoreQuantifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitZeroOrMoreQuantifier) {
	 		listener.exitZeroOrMoreQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitZeroOrMoreQuantifier) {
			return visitor.visitZeroOrMoreQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OneOrMoreQuantifierContext extends PatternQuantifierContext {
	public _reluctant!: Token;
	constructor(parser: trinoSqlParserParser, ctx: PatternQuantifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PLUS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PLUS, 0);
	}
	public QUESTION_MARK(): TerminalNode {
		return this.getToken(trinoSqlParserParser.QUESTION_MARK, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterOneOrMoreQuantifier) {
	 		listener.enterOneOrMoreQuantifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitOneOrMoreQuantifier) {
	 		listener.exitOneOrMoreQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitOneOrMoreQuantifier) {
			return visitor.visitOneOrMoreQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ZeroOrOneQuantifierContext extends PatternQuantifierContext {
	public _reluctant!: Token;
	constructor(parser: trinoSqlParserParser, ctx: PatternQuantifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public QUESTION_MARK_list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParserParser.QUESTION_MARK);
	}
	public QUESTION_MARK(i: number): TerminalNode {
		return this.getToken(trinoSqlParserParser.QUESTION_MARK, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterZeroOrOneQuantifier) {
	 		listener.enterZeroOrOneQuantifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitZeroOrOneQuantifier) {
	 		listener.exitZeroOrOneQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitZeroOrOneQuantifier) {
			return visitor.visitZeroOrOneQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RangeQuantifierContext extends PatternQuantifierContext {
	public _exactly!: Token;
	public _reluctant!: Token;
	public _atLeast!: Token;
	public _atMost!: Token;
	constructor(parser: trinoSqlParserParser, ctx: PatternQuantifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER_VALUE_list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParserParser.INTEGER_VALUE);
	}
	public INTEGER_VALUE(i: number): TerminalNode {
		return this.getToken(trinoSqlParserParser.INTEGER_VALUE, i);
	}
	public QUESTION_MARK(): TerminalNode {
		return this.getToken(trinoSqlParserParser.QUESTION_MARK, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRangeQuantifier) {
	 		listener.enterRangeQuantifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRangeQuantifier) {
	 		listener.exitRangeQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRangeQuantifier) {
			return visitor.visitRangeQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateAssignmentContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EQ, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_updateAssignment;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUpdateAssignment) {
	 		listener.enterUpdateAssignment(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUpdateAssignment) {
	 		listener.exitUpdateAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUpdateAssignment) {
			return visitor.visitUpdateAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplainOptionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_explainOption;
	}
	public copyFrom(ctx: ExplainOptionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExplainFormatContext extends ExplainOptionContext {
	public _value!: Token;
	constructor(parser: trinoSqlParserParser, ctx: ExplainOptionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FORMAT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FORMAT, 0);
	}
	public TEXT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TEXT, 0);
	}
	public GRAPHVIZ(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GRAPHVIZ, 0);
	}
	public JSON(): TerminalNode {
		return this.getToken(trinoSqlParserParser.JSON, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterExplainFormat) {
	 		listener.enterExplainFormat(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitExplainFormat) {
	 		listener.exitExplainFormat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitExplainFormat) {
			return visitor.visitExplainFormat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExplainTypeContext extends ExplainOptionContext {
	public _value!: Token;
	constructor(parser: trinoSqlParserParser, ctx: ExplainOptionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TYPE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TYPE, 0);
	}
	public LOGICAL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LOGICAL, 0);
	}
	public DISTRIBUTED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DISTRIBUTED, 0);
	}
	public VALIDATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.VALIDATE, 0);
	}
	public IO(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IO, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterExplainType) {
	 		listener.enterExplainType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitExplainType) {
	 		listener.exitExplainType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitExplainType) {
			return visitor.visitExplainType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransactionModeContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_transactionMode;
	}
	public copyFrom(ctx: TransactionModeContext): void {
		super.copyFrom(ctx);
	}
}
export class TransactionAccessModeContext extends TransactionModeContext {
	public _accessMode!: Token;
	constructor(parser: trinoSqlParserParser, ctx: TransactionModeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public READ(): TerminalNode {
		return this.getToken(trinoSqlParserParser.READ, 0);
	}
	public ONLY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ONLY, 0);
	}
	public WRITE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WRITE, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTransactionAccessMode) {
	 		listener.enterTransactionAccessMode(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTransactionAccessMode) {
	 		listener.exitTransactionAccessMode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTransactionAccessMode) {
			return visitor.visitTransactionAccessMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IsolationLevelContext extends TransactionModeContext {
	constructor(parser: trinoSqlParserParser, ctx: TransactionModeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ISOLATION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ISOLATION, 0);
	}
	public LEVEL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LEVEL, 0);
	}
	public levelOfIsolation(): LevelOfIsolationContext {
		return this.getTypedRuleContext(LevelOfIsolationContext, 0) as LevelOfIsolationContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterIsolationLevel) {
	 		listener.enterIsolationLevel(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitIsolationLevel) {
	 		listener.exitIsolationLevel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitIsolationLevel) {
			return visitor.visitIsolationLevel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LevelOfIsolationContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_levelOfIsolation;
	}
	public copyFrom(ctx: LevelOfIsolationContext): void {
		super.copyFrom(ctx);
	}
}
export class ReadUncommittedContext extends LevelOfIsolationContext {
	constructor(parser: trinoSqlParserParser, ctx: LevelOfIsolationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public READ(): TerminalNode {
		return this.getToken(trinoSqlParserParser.READ, 0);
	}
	public UNCOMMITTED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.UNCOMMITTED, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterReadUncommitted) {
	 		listener.enterReadUncommitted(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitReadUncommitted) {
	 		listener.exitReadUncommitted(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitReadUncommitted) {
			return visitor.visitReadUncommitted(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SerializableContext extends LevelOfIsolationContext {
	constructor(parser: trinoSqlParserParser, ctx: LevelOfIsolationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SERIALIZABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SERIALIZABLE, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSerializable) {
	 		listener.enterSerializable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSerializable) {
	 		listener.exitSerializable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSerializable) {
			return visitor.visitSerializable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReadCommittedContext extends LevelOfIsolationContext {
	constructor(parser: trinoSqlParserParser, ctx: LevelOfIsolationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public READ(): TerminalNode {
		return this.getToken(trinoSqlParserParser.READ, 0);
	}
	public COMMITTED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COMMITTED, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterReadCommitted) {
	 		listener.enterReadCommitted(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitReadCommitted) {
	 		listener.exitReadCommitted(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitReadCommitted) {
			return visitor.visitReadCommitted(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RepeatableReadContext extends LevelOfIsolationContext {
	constructor(parser: trinoSqlParserParser, ctx: LevelOfIsolationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REPEATABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.REPEATABLE, 0);
	}
	public READ(): TerminalNode {
		return this.getToken(trinoSqlParserParser.READ, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRepeatableRead) {
	 		listener.enterRepeatableRead(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRepeatableRead) {
	 		listener.exitRepeatableRead(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRepeatableRead) {
			return visitor.visitRepeatableRead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallArgumentContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_callArgument;
	}
	public copyFrom(ctx: CallArgumentContext): void {
		super.copyFrom(ctx);
	}
}
export class PositionalArgumentContext extends CallArgumentContext {
	constructor(parser: trinoSqlParserParser, ctx: CallArgumentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPositionalArgument) {
	 		listener.enterPositionalArgument(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPositionalArgument) {
	 		listener.exitPositionalArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPositionalArgument) {
			return visitor.visitPositionalArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NamedArgumentContext extends CallArgumentContext {
	constructor(parser: trinoSqlParserParser, ctx: CallArgumentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNamedArgument) {
	 		listener.enterNamedArgument(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNamedArgument) {
	 		listener.exitNamedArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNamedArgument) {
			return visitor.visitNamedArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathElementContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_pathElement;
	}
	public copyFrom(ctx: PathElementContext): void {
		super.copyFrom(ctx);
	}
}
export class QualifiedArgumentContext extends PathElementContext {
	constructor(parser: trinoSqlParserParser, ctx: PathElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQualifiedArgument) {
	 		listener.enterQualifiedArgument(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQualifiedArgument) {
	 		listener.exitQualifiedArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQualifiedArgument) {
			return visitor.visitQualifiedArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnqualifiedArgumentContext extends PathElementContext {
	constructor(parser: trinoSqlParserParser, ctx: PathElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUnqualifiedArgument) {
	 		listener.enterUnqualifiedArgument(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUnqualifiedArgument) {
	 		listener.exitUnqualifiedArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUnqualifiedArgument) {
			return visitor.visitUnqualifiedArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathSpecificationContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pathElement_list(): PathElementContext[] {
		return this.getTypedRuleContexts(PathElementContext) as PathElementContext[];
	}
	public pathElement(i: number): PathElementContext {
		return this.getTypedRuleContext(PathElementContext, i) as PathElementContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_pathSpecification;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPathSpecification) {
	 		listener.enterPathSpecification(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPathSpecification) {
	 		listener.exitPathSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPathSpecification) {
			return visitor.visitPathSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrivilegeContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SELECT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SELECT, 0);
	}
	public DELETE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DELETE, 0);
	}
	public INSERT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INSERT, 0);
	}
	public UPDATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.UPDATE, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_privilege;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPrivilege) {
	 		listener.enterPrivilege(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPrivilege) {
	 		listener.exitPrivilege(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPrivilege) {
			return visitor.visitPrivilege(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_qualifiedName;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQualifiedName) {
	 		listener.enterQualifiedName(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQualifiedName) {
	 		listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GrantorContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_grantor;
	}
	public copyFrom(ctx: GrantorContext): void {
		super.copyFrom(ctx);
	}
}
export class CurrentUserGrantorContext extends GrantorContext {
	constructor(parser: trinoSqlParserParser, ctx: GrantorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_USER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CURRENT_USER, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCurrentUserGrantor) {
	 		listener.enterCurrentUserGrantor(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCurrentUserGrantor) {
	 		listener.exitCurrentUserGrantor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCurrentUserGrantor) {
			return visitor.visitCurrentUserGrantor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SpecifiedPrincipalContext extends GrantorContext {
	constructor(parser: trinoSqlParserParser, ctx: GrantorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSpecifiedPrincipal) {
	 		listener.enterSpecifiedPrincipal(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSpecifiedPrincipal) {
	 		listener.exitSpecifiedPrincipal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSpecifiedPrincipal) {
			return visitor.visitSpecifiedPrincipal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentRoleGrantorContext extends GrantorContext {
	constructor(parser: trinoSqlParserParser, ctx: GrantorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_ROLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CURRENT_ROLE, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCurrentRoleGrantor) {
	 		listener.enterCurrentRoleGrantor(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCurrentRoleGrantor) {
	 		listener.exitCurrentRoleGrantor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCurrentRoleGrantor) {
			return visitor.visitCurrentRoleGrantor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrincipalContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_principal;
	}
	public copyFrom(ctx: PrincipalContext): void {
		super.copyFrom(ctx);
	}
}
export class UnspecifiedPrincipalContext extends PrincipalContext {
	constructor(parser: trinoSqlParserParser, ctx: PrincipalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUnspecifiedPrincipal) {
	 		listener.enterUnspecifiedPrincipal(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUnspecifiedPrincipal) {
	 		listener.exitUnspecifiedPrincipal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUnspecifiedPrincipal) {
			return visitor.visitUnspecifiedPrincipal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UserPrincipalContext extends PrincipalContext {
	constructor(parser: trinoSqlParserParser, ctx: PrincipalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public USER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.USER, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUserPrincipal) {
	 		listener.enterUserPrincipal(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUserPrincipal) {
	 		listener.exitUserPrincipal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUserPrincipal) {
			return visitor.visitUserPrincipal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RolePrincipalContext extends PrincipalContext {
	constructor(parser: trinoSqlParserParser, ctx: PrincipalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ROLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROLE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRolePrincipal) {
	 		listener.enterRolePrincipal(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRolePrincipal) {
	 		listener.exitRolePrincipal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRolePrincipal) {
			return visitor.visitRolePrincipal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RolesContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_roles;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRoles) {
	 		listener.enterRoles(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRoles) {
	 		listener.exitRoles(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRoles) {
			return visitor.visitRoles(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_identifier;
	}
	public copyFrom(ctx: IdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class BackQuotedIdentifierContext extends IdentifierContext {
	constructor(parser: trinoSqlParserParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BACKQUOTED_IDENTIFIER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.BACKQUOTED_IDENTIFIER, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterBackQuotedIdentifier) {
	 		listener.enterBackQuotedIdentifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitBackQuotedIdentifier) {
	 		listener.exitBackQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitBackQuotedIdentifier) {
			return visitor.visitBackQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuotedIdentifierContext extends IdentifierContext {
	constructor(parser: trinoSqlParserParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public QUOTED_IDENTIFIER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.QUOTED_IDENTIFIER, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQuotedIdentifier) {
	 		listener.enterQuotedIdentifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQuotedIdentifier) {
	 		listener.exitQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifier) {
			return visitor.visitQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DigitIdentifierContext extends IdentifierContext {
	constructor(parser: trinoSqlParserParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DIGIT_IDENTIFIER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DIGIT_IDENTIFIER, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDigitIdentifier) {
	 		listener.enterDigitIdentifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDigitIdentifier) {
	 		listener.exitDigitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDigitIdentifier) {
			return visitor.visitDigitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnquotedIdentifierContext extends IdentifierContext {
	constructor(parser: trinoSqlParserParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IDENTIFIER, 0);
	}
	public nonReserved(): NonReservedContext {
		return this.getTypedRuleContext(NonReservedContext, 0) as NonReservedContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUnquotedIdentifier) {
	 		listener.enterUnquotedIdentifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUnquotedIdentifier) {
	 		listener.exitUnquotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUnquotedIdentifier) {
			return visitor.visitUnquotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_number;
	}
	public copyFrom(ctx: NumberContext): void {
		super.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends NumberContext {
	constructor(parser: trinoSqlParserParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DECIMAL_VALUE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DECIMAL_VALUE, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MINUS, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDecimalLiteral) {
	 		listener.enterDecimalLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDecimalLiteral) {
	 		listener.exitDecimalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDecimalLiteral) {
			return visitor.visitDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoubleLiteralContext extends NumberContext {
	constructor(parser: trinoSqlParserParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOUBLE_VALUE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DOUBLE_VALUE, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MINUS, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDoubleLiteral) {
	 		listener.enterDoubleLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDoubleLiteral) {
	 		listener.exitDoubleLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDoubleLiteral) {
			return visitor.visitDoubleLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntegerLiteralContext extends NumberContext {
	constructor(parser: trinoSqlParserParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER_VALUE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INTEGER_VALUE, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MINUS, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterIntegerLiteral) {
	 		listener.enterIntegerLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitIntegerLiteral) {
	 		listener.exitIntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonReservedContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParserParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ADD(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ADD, 0);
	}
	public ADMIN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ADMIN, 0);
	}
	public AFTER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AFTER, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ALL, 0);
	}
	public ANALYZE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ANALYZE, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ANY, 0);
	}
	public ARRAY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ARRAY, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ASC, 0);
	}
	public AT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AT, 0);
	}
	public AUTHORIZATION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.AUTHORIZATION, 0);
	}
	public BERNOULLI(): TerminalNode {
		return this.getToken(trinoSqlParserParser.BERNOULLI, 0);
	}
	public CALL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CALL, 0);
	}
	public CASCADE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CASCADE, 0);
	}
	public CATALOGS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CATALOGS, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COLUMN, 0);
	}
	public COLUMNS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COLUMNS, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COMMENT, 0);
	}
	public COMMIT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COMMIT, 0);
	}
	public COMMITTED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.COMMITTED, 0);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.CURRENT, 0);
	}
	public DATA(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DATA, 0);
	}
	public DATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DATE, 0);
	}
	public DAY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DAY, 0);
	}
	public DEFINE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DEFINE, 0);
	}
	public DEFINER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DEFINER, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DESC, 0);
	}
	public DISTRIBUTED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DISTRIBUTED, 0);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DOUBLE, 0);
	}
	public EMPTY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EMPTY, 0);
	}
	public EXCLUDING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXCLUDING, 0);
	}
	public EXPLAIN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.EXPLAIN, 0);
	}
	public FETCH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FETCH, 0);
	}
	public FILTER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FILTER, 0);
	}
	public FINAL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FINAL, 0);
	}
	public FIRST(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FIRST, 0);
	}
	public FOLLOWING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FOLLOWING, 0);
	}
	public FORMAT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FORMAT, 0);
	}
	public FUNCTIONS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.FUNCTIONS, 0);
	}
	public GRANT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GRANT, 0);
	}
	public GRANTED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GRANTED, 0);
	}
	public GRANTS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GRANTS, 0);
	}
	public DENY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.DENY, 0);
	}
	public GRAPHVIZ(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GRAPHVIZ, 0);
	}
	public GROUPS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.GROUPS, 0);
	}
	public HOUR(): TerminalNode {
		return this.getToken(trinoSqlParserParser.HOUR, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IF, 0);
	}
	public IGNORE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IGNORE, 0);
	}
	public INCLUDING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INCLUDING, 0);
	}
	public INITIAL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INITIAL, 0);
	}
	public INPUT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INPUT, 0);
	}
	public INTERVAL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INTERVAL, 0);
	}
	public INVOKER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.INVOKER, 0);
	}
	public IO(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IO, 0);
	}
	public ISOLATION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ISOLATION, 0);
	}
	public JSON(): TerminalNode {
		return this.getToken(trinoSqlParserParser.JSON, 0);
	}
	public LAST(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LAST, 0);
	}
	public LATERAL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LATERAL, 0);
	}
	public LEVEL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LEVEL, 0);
	}
	public LIMIT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LIMIT, 0);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LOCAL, 0);
	}
	public LOGICAL(): TerminalNode {
		return this.getToken(trinoSqlParserParser.LOGICAL, 0);
	}
	public MAP(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MAP, 0);
	}
	public MATCH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MATCH, 0);
	}
	public MATCHED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MATCHED, 0);
	}
	public MATCHES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MATCHES, 0);
	}
	public MATCH_RECOGNIZE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MATCH_RECOGNIZE, 0);
	}
	public MATERIALIZED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MATERIALIZED, 0);
	}
	public MEASURES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MEASURES, 0);
	}
	public MERGE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MERGE, 0);
	}
	public MINUTE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MINUTE, 0);
	}
	public MONTH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.MONTH, 0);
	}
	public NEXT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NEXT, 0);
	}
	public NFC(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NFC, 0);
	}
	public NFD(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NFD, 0);
	}
	public NFKC(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NFKC, 0);
	}
	public NFKD(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NFKD, 0);
	}
	public NO(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NO, 0);
	}
	public NONE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NONE, 0);
	}
	public NULLIF(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NULLIF, 0);
	}
	public NULLS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.NULLS, 0);
	}
	public OFFSET(): TerminalNode {
		return this.getToken(trinoSqlParserParser.OFFSET, 0);
	}
	public OMIT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.OMIT, 0);
	}
	public ONE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ONE, 0);
	}
	public ONLY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ONLY, 0);
	}
	public OPTION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.OPTION, 0);
	}
	public ORDINALITY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ORDINALITY, 0);
	}
	public OUTPUT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.OUTPUT, 0);
	}
	public OVER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.OVER, 0);
	}
	public PARTITION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PARTITION, 0);
	}
	public PARTITIONS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PARTITIONS, 0);
	}
	public PAST(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PAST, 0);
	}
	public PATH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PATH, 0);
	}
	public PATTERN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PATTERN, 0);
	}
	public PER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PER, 0);
	}
	public PERMUTE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PERMUTE, 0);
	}
	public POSITION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.POSITION, 0);
	}
	public PRECEDING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PRECEDING, 0);
	}
	public PRECISION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PRECISION, 0);
	}
	public PRIVILEGES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PRIVILEGES, 0);
	}
	public PROPERTIES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.PROPERTIES, 0);
	}
	public RANGE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.RANGE, 0);
	}
	public READ(): TerminalNode {
		return this.getToken(trinoSqlParserParser.READ, 0);
	}
	public REFRESH(): TerminalNode {
		return this.getToken(trinoSqlParserParser.REFRESH, 0);
	}
	public RENAME(): TerminalNode {
		return this.getToken(trinoSqlParserParser.RENAME, 0);
	}
	public REPEATABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.REPEATABLE, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.REPLACE, 0);
	}
	public RESET(): TerminalNode {
		return this.getToken(trinoSqlParserParser.RESET, 0);
	}
	public RESPECT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.RESPECT, 0);
	}
	public RESTRICT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.RESTRICT, 0);
	}
	public REVOKE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.REVOKE, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROLE, 0);
	}
	public ROLES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROLES, 0);
	}
	public ROLLBACK(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROLLBACK, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROW, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ROWS, 0);
	}
	public RUNNING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.RUNNING, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SCHEMA, 0);
	}
	public SCHEMAS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SCHEMAS, 0);
	}
	public SECOND(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SECOND, 0);
	}
	public SECURITY(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SECURITY, 0);
	}
	public SEEK(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SEEK, 0);
	}
	public SERIALIZABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SERIALIZABLE, 0);
	}
	public SESSION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SESSION, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SET, 0);
	}
	public SETS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SETS, 0);
	}
	public SHOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SHOW, 0);
	}
	public SOME(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SOME, 0);
	}
	public START(): TerminalNode {
		return this.getToken(trinoSqlParserParser.START, 0);
	}
	public STATS(): TerminalNode {
		return this.getToken(trinoSqlParserParser.STATS, 0);
	}
	public SUBSET(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SUBSET, 0);
	}
	public SUBSTRING(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SUBSTRING, 0);
	}
	public SYSTEM(): TerminalNode {
		return this.getToken(trinoSqlParserParser.SYSTEM, 0);
	}
	public TABLES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLES, 0);
	}
	public TABLESAMPLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLESAMPLE, 0);
	}
	public TEXT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TEXT, 0);
	}
	public TIES(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TIES, 0);
	}
	public TIME(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TIME, 0);
	}
	public TIMESTAMP(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TIMESTAMP, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TO, 0);
	}
	public TRANSACTION(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TRANSACTION, 0);
	}
	public TRY_CAST(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TRY_CAST, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TYPE, 0);
	}
	public UNBOUNDED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.UNBOUNDED, 0);
	}
	public UNCOMMITTED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.UNCOMMITTED, 0);
	}
	public UNMATCHED(): TerminalNode {
		return this.getToken(trinoSqlParserParser.UNMATCHED, 0);
	}
	public UPDATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.UPDATE, 0);
	}
	public USE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.USE, 0);
	}
	public USER(): TerminalNode {
		return this.getToken(trinoSqlParserParser.USER, 0);
	}
	public VALIDATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.VALIDATE, 0);
	}
	public VERBOSE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.VERBOSE, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.VIEW, 0);
	}
	public WINDOW(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WINDOW, 0);
	}
	public WITHOUT(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WITHOUT, 0);
	}
	public WORK(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WORK, 0);
	}
	public WRITE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.WRITE, 0);
	}
	public YEAR(): TerminalNode {
		return this.getToken(trinoSqlParserParser.YEAR, 0);
	}
	public ZONE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.ZONE, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParserParser.RULE_nonReserved;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNonReserved) {
	 		listener.enterNonReserved(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNonReserved) {
	 		listener.exitNonReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNonReserved) {
			return visitor.visitNonReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
