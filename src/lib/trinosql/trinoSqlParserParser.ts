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
	public static readonly TRUNCATE = 221;
	public static readonly TRUE = 222;
	public static readonly TRY_CAST = 223;
	public static readonly TYPE = 224;
	public static readonly UESCAPE = 225;
	public static readonly UNBOUNDED = 226;
	public static readonly UNCOMMITTED = 227;
	public static readonly UNION = 228;
	public static readonly UNMATCHED = 229;
	public static readonly UNNEST = 230;
	public static readonly UPDATE = 231;
	public static readonly USE = 232;
	public static readonly USER = 233;
	public static readonly USING = 234;
	public static readonly VALIDATE = 235;
	public static readonly VALUES = 236;
	public static readonly VERBOSE = 237;
	public static readonly VIEW = 238;
	public static readonly WHEN = 239;
	public static readonly WHERE = 240;
	public static readonly WINDOW = 241;
	public static readonly WITH = 242;
	public static readonly WITHOUT = 243;
	public static readonly WORK = 244;
	public static readonly WRITE = 245;
	public static readonly YEAR = 246;
	public static readonly ZONE = 247;
	public static readonly EQ = 248;
	public static readonly NEQ = 249;
	public static readonly LT = 250;
	public static readonly LTE = 251;
	public static readonly GT = 252;
	public static readonly GTE = 253;
	public static readonly PLUS = 254;
	public static readonly MINUS = 255;
	public static readonly ASTERISK = 256;
	public static readonly SLASH = 257;
	public static readonly PERCENT = 258;
	public static readonly CONCAT = 259;
	public static readonly QUESTION_MARK = 260;
	public static readonly STRING = 261;
	public static readonly UNICODE_STRING = 262;
	public static readonly BINARY_LITERAL = 263;
	public static readonly INTEGER_VALUE = 264;
	public static readonly DECIMAL_VALUE = 265;
	public static readonly DOUBLE_VALUE = 266;
	public static readonly IDENTIFIER = 267;
	public static readonly DIGIT_IDENTIFIER = 268;
	public static readonly QUOTED_IDENTIFIER = 269;
	public static readonly BACKQUOTED_IDENTIFIER = 270;
	public static readonly SEMICOLON = 271;
	public static readonly SIMPLE_COMMENT = 272;
	public static readonly BRACKETED_COMMENT = 273;
	public static readonly WS = 274;
	public static readonly UNRECOGNIZED = 275;
	public static readonly DELIMITER = 276;
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
                                                            "'TRUNCATE'", 
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
                                                             "TRUNCATE", 
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2071862276) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294691839) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 3751280407) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4289639863) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 3923771327) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4152344575) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 3220176895) !== 0) || ((((_la - 227)) & ~0x1F) === 0 && ((1 << (_la - 227)) & 404737909) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 2047) !== 0)) {
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
			this.state = 922;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 100, this._ctx) ) {
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
				if (_la===242) {
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
				if (_la===242) {
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
				if (_la===242) {
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
				if (_la===242) {
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
				if (_la===240) {
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
				localctx = new TruncateTableContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 336;
				this.match(trinoSqlParserParser.TRUNCATE);
				this.state = 337;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 338;
				this.qualifiedName();
				}
				break;
			case 14:
				localctx = new RenameTableContext(this, localctx);
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 339;
				this.match(trinoSqlParserParser.ALTER);
				this.state = 340;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 343;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 341;
					this.match(trinoSqlParserParser.IF);
					this.state = 342;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 345;
				(localctx as RenameTableContext)._from_ = this.qualifiedName();
				this.state = 346;
				this.match(trinoSqlParserParser.RENAME);
				this.state = 347;
				this.match(trinoSqlParserParser.TO);
				this.state = 348;
				(localctx as RenameTableContext)._to = this.qualifiedName();
				}
				break;
			case 15:
				localctx = new CommentTableContext(this, localctx);
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 350;
				this.match(trinoSqlParserParser.COMMENT);
				this.state = 351;
				this.match(trinoSqlParserParser.ON);
				this.state = 352;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 353;
				this.qualifiedName();
				this.state = 354;
				this.match(trinoSqlParserParser.IS);
				this.state = 357;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 261:
				case 262:
					{
					this.state = 355;
					this.string_();
					}
					break;
				case 147:
					{
					this.state = 356;
					this.match(trinoSqlParserParser.NULL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 16:
				localctx = new CommentColumnContext(this, localctx);
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 359;
				this.match(trinoSqlParserParser.COMMENT);
				this.state = 360;
				this.match(trinoSqlParserParser.ON);
				this.state = 361;
				this.match(trinoSqlParserParser.COLUMN);
				this.state = 362;
				this.qualifiedName();
				this.state = 363;
				this.match(trinoSqlParserParser.IS);
				this.state = 366;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 261:
				case 262:
					{
					this.state = 364;
					this.string_();
					}
					break;
				case 147:
					{
					this.state = 365;
					this.match(trinoSqlParserParser.NULL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 17:
				localctx = new RenameColumnContext(this, localctx);
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 368;
				this.match(trinoSqlParserParser.ALTER);
				this.state = 369;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 372;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 370;
					this.match(trinoSqlParserParser.IF);
					this.state = 371;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 374;
				(localctx as RenameColumnContext)._tableName = this.qualifiedName();
				this.state = 375;
				this.match(trinoSqlParserParser.RENAME);
				this.state = 376;
				this.match(trinoSqlParserParser.COLUMN);
				this.state = 379;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 377;
					this.match(trinoSqlParserParser.IF);
					this.state = 378;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 381;
				(localctx as RenameColumnContext)._from_ = this.identifier();
				this.state = 382;
				this.match(trinoSqlParserParser.TO);
				this.state = 383;
				(localctx as RenameColumnContext)._to = this.identifier();
				}
				break;
			case 18:
				localctx = new DropColumnContext(this, localctx);
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 385;
				this.match(trinoSqlParserParser.ALTER);
				this.state = 386;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 389;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 387;
					this.match(trinoSqlParserParser.IF);
					this.state = 388;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 391;
				(localctx as DropColumnContext)._tableName = this.qualifiedName();
				this.state = 392;
				this.match(trinoSqlParserParser.DROP);
				this.state = 393;
				this.match(trinoSqlParserParser.COLUMN);
				this.state = 396;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 394;
					this.match(trinoSqlParserParser.IF);
					this.state = 395;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 398;
				(localctx as DropColumnContext)._column = this.qualifiedName();
				}
				break;
			case 19:
				localctx = new AddColumnContext(this, localctx);
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 400;
				this.match(trinoSqlParserParser.ALTER);
				this.state = 401;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 404;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 402;
					this.match(trinoSqlParserParser.IF);
					this.state = 403;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 406;
				(localctx as AddColumnContext)._tableName = this.qualifiedName();
				this.state = 407;
				this.match(trinoSqlParserParser.ADD);
				this.state = 408;
				this.match(trinoSqlParserParser.COLUMN);
				this.state = 412;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 409;
					this.match(trinoSqlParserParser.IF);
					this.state = 410;
					this.match(trinoSqlParserParser.NOT);
					this.state = 411;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 414;
				(localctx as AddColumnContext)._column = this.columnDefinition();
				}
				break;
			case 20:
				localctx = new SetTableAuthorizationContext(this, localctx);
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 416;
				this.match(trinoSqlParserParser.ALTER);
				this.state = 417;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 418;
				(localctx as SetTableAuthorizationContext)._tableName = this.qualifiedName();
				this.state = 419;
				this.match(trinoSqlParserParser.SET);
				this.state = 420;
				this.match(trinoSqlParserParser.AUTHORIZATION);
				this.state = 421;
				this.principal();
				}
				break;
			case 21:
				localctx = new AnalyzeContext(this, localctx);
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 423;
				this.match(trinoSqlParserParser.ANALYZE);
				this.state = 424;
				this.qualifiedName();
				this.state = 427;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===242) {
					{
					this.state = 425;
					this.match(trinoSqlParserParser.WITH);
					this.state = 426;
					this.properties();
					}
				}

				}
				break;
			case 22:
				localctx = new CreateMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 429;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===156) {
					{
					this.state = 430;
					this.match(trinoSqlParserParser.OR);
					this.state = 431;
					this.match(trinoSqlParserParser.REPLACE);
					}
				}

				this.state = 434;
				this.match(trinoSqlParserParser.MATERIALIZED);
				this.state = 435;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 439;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 436;
					this.match(trinoSqlParserParser.IF);
					this.state = 437;
					this.match(trinoSqlParserParser.NOT);
					this.state = 438;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 441;
				this.qualifiedName();
				this.state = 444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===40) {
					{
					this.state = 442;
					this.match(trinoSqlParserParser.COMMENT);
					this.state = 443;
					this.string_();
					}
				}

				this.state = 448;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===242) {
					{
					this.state = 446;
					this.match(trinoSqlParserParser.WITH);
					this.state = 447;
					this.properties();
					}
				}

				this.state = 450;
				this.match(trinoSqlParserParser.AS);
				this.state = 451;
				this.query();
				}
				break;
			case 23:
				localctx = new CreateViewContext(this, localctx);
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 453;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===156) {
					{
					this.state = 454;
					this.match(trinoSqlParserParser.OR);
					this.state = 455;
					this.match(trinoSqlParserParser.REPLACE);
					}
				}

				this.state = 458;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 459;
				this.qualifiedName();
				this.state = 462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===40) {
					{
					this.state = 460;
					this.match(trinoSqlParserParser.COMMENT);
					this.state = 461;
					this.string_();
					}
				}

				this.state = 466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===197) {
					{
					this.state = 464;
					this.match(trinoSqlParserParser.SECURITY);
					this.state = 465;
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

				this.state = 468;
				this.match(trinoSqlParserParser.AS);
				this.state = 469;
				this.query();
				}
				break;
			case 24:
				localctx = new RefreshMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 24);
				{
				this.state = 471;
				this.match(trinoSqlParserParser.REFRESH);
				this.state = 472;
				this.match(trinoSqlParserParser.MATERIALIZED);
				this.state = 473;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 474;
				this.qualifiedName();
				}
				break;
			case 25:
				localctx = new DropMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 25);
				{
				this.state = 475;
				this.match(trinoSqlParserParser.DROP);
				this.state = 476;
				this.match(trinoSqlParserParser.MATERIALIZED);
				this.state = 477;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 480;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 478;
					this.match(trinoSqlParserParser.IF);
					this.state = 479;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 482;
				this.qualifiedName();
				}
				break;
			case 26:
				localctx = new DropViewContext(this, localctx);
				this.enterOuterAlt(localctx, 26);
				{
				this.state = 483;
				this.match(trinoSqlParserParser.DROP);
				this.state = 484;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 487;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 485;
					this.match(trinoSqlParserParser.IF);
					this.state = 486;
					this.match(trinoSqlParserParser.EXISTS);
					}
					break;
				}
				this.state = 489;
				this.qualifiedName();
				}
				break;
			case 27:
				localctx = new RenameViewContext(this, localctx);
				this.enterOuterAlt(localctx, 27);
				{
				this.state = 490;
				this.match(trinoSqlParserParser.ALTER);
				this.state = 491;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 492;
				(localctx as RenameViewContext)._from_ = this.qualifiedName();
				this.state = 493;
				this.match(trinoSqlParserParser.RENAME);
				this.state = 494;
				this.match(trinoSqlParserParser.TO);
				this.state = 495;
				(localctx as RenameViewContext)._to = this.qualifiedName();
				}
				break;
			case 28:
				localctx = new SetViewAuthorizationContext(this, localctx);
				this.enterOuterAlt(localctx, 28);
				{
				this.state = 497;
				this.match(trinoSqlParserParser.ALTER);
				this.state = 498;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 499;
				(localctx as SetViewAuthorizationContext)._from_ = this.qualifiedName();
				this.state = 500;
				this.match(trinoSqlParserParser.SET);
				this.state = 501;
				this.match(trinoSqlParserParser.AUTHORIZATION);
				this.state = 502;
				this.principal();
				}
				break;
			case 29:
				localctx = new CallContext(this, localctx);
				this.enterOuterAlt(localctx, 29);
				{
				this.state = 504;
				this.match(trinoSqlParserParser.CALL);
				this.state = 505;
				this.qualifiedName();
				this.state = 506;
				this.match(trinoSqlParserParser.T__1);
				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 3751279891) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4289639607) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 3923771327) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4152344063) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 3220111343) !== 0) || ((((_la - 227)) & ~0x1F) === 0 && ((1 << (_la - 227)) & 404704629) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 2047) !== 0)) {
					{
					this.state = 507;
					this.callArgument();
					this.state = 512;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 508;
						this.match(trinoSqlParserParser.T__3);
						this.state = 509;
						this.callArgument();
						}
						}
						this.state = 514;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 517;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 30:
				localctx = new CreateRoleContext(this, localctx);
				this.enterOuterAlt(localctx, 30);
				{
				this.state = 519;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 520;
				this.match(trinoSqlParserParser.ROLE);
				this.state = 521;
				(localctx as CreateRoleContext)._name = this.identifier();
				this.state = 525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===242) {
					{
					this.state = 522;
					this.match(trinoSqlParserParser.WITH);
					this.state = 523;
					this.match(trinoSqlParserParser.ADMIN);
					this.state = 524;
					this.grantor();
					}
				}

				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===102) {
					{
					this.state = 527;
					this.match(trinoSqlParserParser.IN);
					this.state = 528;
					(localctx as CreateRoleContext)._catalog = this.identifier();
					}
				}

				}
				break;
			case 31:
				localctx = new DropRoleContext(this, localctx);
				this.enterOuterAlt(localctx, 31);
				{
				this.state = 531;
				this.match(trinoSqlParserParser.DROP);
				this.state = 532;
				this.match(trinoSqlParserParser.ROLE);
				this.state = 533;
				(localctx as DropRoleContext)._name = this.identifier();
				}
				break;
			case 32:
				localctx = new GrantRolesContext(this, localctx);
				this.enterOuterAlt(localctx, 32);
				{
				this.state = 534;
				this.match(trinoSqlParserParser.GRANT);
				this.state = 535;
				this.roles();
				this.state = 536;
				this.match(trinoSqlParserParser.TO);
				this.state = 537;
				this.principal();
				this.state = 542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 538;
					this.match(trinoSqlParserParser.T__3);
					this.state = 539;
					this.principal();
					}
					}
					this.state = 544;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===242) {
					{
					this.state = 545;
					this.match(trinoSqlParserParser.WITH);
					this.state = 546;
					this.match(trinoSqlParserParser.ADMIN);
					this.state = 547;
					this.match(trinoSqlParserParser.OPTION);
					}
				}

				this.state = 553;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===91) {
					{
					this.state = 550;
					this.match(trinoSqlParserParser.GRANTED);
					this.state = 551;
					this.match(trinoSqlParserParser.BY);
					this.state = 552;
					this.grantor();
					}
				}

				this.state = 557;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===102) {
					{
					this.state = 555;
					this.match(trinoSqlParserParser.IN);
					this.state = 556;
					(localctx as GrantRolesContext)._catalog = this.identifier();
					}
				}

				}
				break;
			case 33:
				localctx = new RevokeRolesContext(this, localctx);
				this.enterOuterAlt(localctx, 33);
				{
				this.state = 559;
				this.match(trinoSqlParserParser.REVOKE);
				this.state = 563;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 560;
					this.match(trinoSqlParserParser.ADMIN);
					this.state = 561;
					this.match(trinoSqlParserParser.OPTION);
					this.state = 562;
					this.match(trinoSqlParserParser.FOR);
					}
					break;
				}
				this.state = 565;
				this.roles();
				this.state = 566;
				this.match(trinoSqlParserParser.FROM);
				this.state = 567;
				this.principal();
				this.state = 572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 568;
					this.match(trinoSqlParserParser.T__3);
					this.state = 569;
					this.principal();
					}
					}
					this.state = 574;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 578;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===91) {
					{
					this.state = 575;
					this.match(trinoSqlParserParser.GRANTED);
					this.state = 576;
					this.match(trinoSqlParserParser.BY);
					this.state = 577;
					this.grantor();
					}
				}

				this.state = 582;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===102) {
					{
					this.state = 580;
					this.match(trinoSqlParserParser.IN);
					this.state = 581;
					(localctx as RevokeRolesContext)._catalog = this.identifier();
					}
				}

				}
				break;
			case 34:
				localctx = new SetRoleContext(this, localctx);
				this.enterOuterAlt(localctx, 34);
				{
				this.state = 584;
				this.match(trinoSqlParserParser.SET);
				this.state = 585;
				this.match(trinoSqlParserParser.ROLE);
				this.state = 589;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 52, this._ctx) ) {
				case 1:
					{
					this.state = 586;
					this.match(trinoSqlParserParser.ALL);
					}
					break;
				case 2:
					{
					this.state = 587;
					this.match(trinoSqlParserParser.NONE);
					}
					break;
				case 3:
					{
					this.state = 588;
					(localctx as SetRoleContext)._role = this.identifier();
					}
					break;
				}
				}
				break;
			case 35:
				localctx = new GrantContext(this, localctx);
				this.enterOuterAlt(localctx, 35);
				{
				this.state = 591;
				this.match(trinoSqlParserParser.GRANT);
				this.state = 602;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 61:
				case 107:
				case 199:
				case 231:
					{
					this.state = 592;
					this.privilege();
					this.state = 597;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 593;
						this.match(trinoSqlParserParser.T__3);
						this.state = 594;
						this.privilege();
						}
						}
						this.state = 599;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 20:
					{
					this.state = 600;
					this.match(trinoSqlParserParser.ALL);
					this.state = 601;
					this.match(trinoSqlParserParser.PRIVILEGES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 604;
				this.match(trinoSqlParserParser.ON);
				this.state = 606;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 55, this._ctx) ) {
				case 1:
					{
					this.state = 605;
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
				this.state = 608;
				this.qualifiedName();
				this.state = 609;
				this.match(trinoSqlParserParser.TO);
				this.state = 610;
				(localctx as GrantContext)._grantee = this.principal();
				this.state = 614;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===242) {
					{
					this.state = 611;
					this.match(trinoSqlParserParser.WITH);
					this.state = 612;
					this.match(trinoSqlParserParser.GRANT);
					this.state = 613;
					this.match(trinoSqlParserParser.OPTION);
					}
				}

				}
				break;
			case 36:
				localctx = new DenyContext(this, localctx);
				this.enterOuterAlt(localctx, 36);
				{
				this.state = 616;
				this.match(trinoSqlParserParser.DENY);
				this.state = 627;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 61:
				case 107:
				case 199:
				case 231:
					{
					this.state = 617;
					this.privilege();
					this.state = 622;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 618;
						this.match(trinoSqlParserParser.T__3);
						this.state = 619;
						this.privilege();
						}
						}
						this.state = 624;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 20:
					{
					this.state = 625;
					this.match(trinoSqlParserParser.ALL);
					this.state = 626;
					this.match(trinoSqlParserParser.PRIVILEGES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 629;
				this.match(trinoSqlParserParser.ON);
				this.state = 631;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 59, this._ctx) ) {
				case 1:
					{
					this.state = 630;
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
				this.state = 633;
				this.qualifiedName();
				this.state = 634;
				this.match(trinoSqlParserParser.TO);
				this.state = 635;
				(localctx as DenyContext)._grantee = this.principal();
				}
				break;
			case 37:
				localctx = new RevokeContext(this, localctx);
				this.enterOuterAlt(localctx, 37);
				{
				this.state = 637;
				this.match(trinoSqlParserParser.REVOKE);
				this.state = 641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 638;
					this.match(trinoSqlParserParser.GRANT);
					this.state = 639;
					this.match(trinoSqlParserParser.OPTION);
					this.state = 640;
					this.match(trinoSqlParserParser.FOR);
					}
				}

				this.state = 653;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 61:
				case 107:
				case 199:
				case 231:
					{
					this.state = 643;
					this.privilege();
					this.state = 648;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 644;
						this.match(trinoSqlParserParser.T__3);
						this.state = 645;
						this.privilege();
						}
						}
						this.state = 650;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 20:
					{
					this.state = 651;
					this.match(trinoSqlParserParser.ALL);
					this.state = 652;
					this.match(trinoSqlParserParser.PRIVILEGES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 655;
				this.match(trinoSqlParserParser.ON);
				this.state = 657;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
				case 1:
					{
					this.state = 656;
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
				this.state = 659;
				this.qualifiedName();
				this.state = 660;
				this.match(trinoSqlParserParser.FROM);
				this.state = 661;
				(localctx as RevokeContext)._grantee = this.principal();
				}
				break;
			case 38:
				localctx = new ShowGrantsContext(this, localctx);
				this.enterOuterAlt(localctx, 38);
				{
				this.state = 663;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 664;
				this.match(trinoSqlParserParser.GRANTS);
				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===152) {
					{
					this.state = 665;
					this.match(trinoSqlParserParser.ON);
					this.state = 667;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===211) {
						{
						this.state = 666;
						this.match(trinoSqlParserParser.TABLE);
						}
					}

					this.state = 669;
					this.qualifiedName();
					}
				}

				}
				break;
			case 39:
				localctx = new ExplainContext(this, localctx);
				this.enterOuterAlt(localctx, 39);
				{
				this.state = 672;
				this.match(trinoSqlParserParser.EXPLAIN);
				this.state = 674;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
				case 1:
					{
					this.state = 673;
					this.match(trinoSqlParserParser.ANALYZE);
					}
					break;
				}
				this.state = 677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===237) {
					{
					this.state = 676;
					this.match(trinoSqlParserParser.VERBOSE);
					}
				}

				this.state = 690;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
				case 1:
					{
					this.state = 679;
					this.match(trinoSqlParserParser.T__1);
					this.state = 680;
					this.explainOption();
					this.state = 685;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 681;
						this.match(trinoSqlParserParser.T__3);
						this.state = 682;
						this.explainOption();
						}
						}
						this.state = 687;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 688;
					this.match(trinoSqlParserParser.T__2);
					}
					break;
				}
				this.state = 692;
				this.statement();
				}
				break;
			case 40:
				localctx = new ShowCreateTableContext(this, localctx);
				this.enterOuterAlt(localctx, 40);
				{
				this.state = 693;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 694;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 695;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 696;
				this.qualifiedName();
				}
				break;
			case 41:
				localctx = new ShowCreateSchemaContext(this, localctx);
				this.enterOuterAlt(localctx, 41);
				{
				this.state = 697;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 698;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 699;
				this.match(trinoSqlParserParser.SCHEMA);
				this.state = 700;
				this.qualifiedName();
				}
				break;
			case 42:
				localctx = new ShowCreateViewContext(this, localctx);
				this.enterOuterAlt(localctx, 42);
				{
				this.state = 701;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 702;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 703;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 704;
				this.qualifiedName();
				}
				break;
			case 43:
				localctx = new ShowCreateMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 43);
				{
				this.state = 705;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 706;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 707;
				this.match(trinoSqlParserParser.MATERIALIZED);
				this.state = 708;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 709;
				this.qualifiedName();
				}
				break;
			case 44:
				localctx = new ShowTablesContext(this, localctx);
				this.enterOuterAlt(localctx, 44);
				{
				this.state = 710;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 711;
				this.match(trinoSqlParserParser.TABLES);
				this.state = 714;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===87 || _la===102) {
					{
					this.state = 712;
					_la = this._input.LA(1);
					if(!(_la===87 || _la===102)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 713;
					this.qualifiedName();
					}
				}

				this.state = 722;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===121) {
					{
					this.state = 716;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 717;
					(localctx as ShowTablesContext)._pattern = this.string_();
					this.state = 720;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 718;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 719;
						(localctx as ShowTablesContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 45:
				localctx = new ShowSchemasContext(this, localctx);
				this.enterOuterAlt(localctx, 45);
				{
				this.state = 724;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 725;
				this.match(trinoSqlParserParser.SCHEMAS);
				this.state = 728;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===87 || _la===102) {
					{
					this.state = 726;
					_la = this._input.LA(1);
					if(!(_la===87 || _la===102)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 727;
					this.identifier();
					}
				}

				this.state = 736;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===121) {
					{
					this.state = 730;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 731;
					(localctx as ShowSchemasContext)._pattern = this.string_();
					this.state = 734;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 732;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 733;
						(localctx as ShowSchemasContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 46:
				localctx = new ShowCatalogsContext(this, localctx);
				this.enterOuterAlt(localctx, 46);
				{
				this.state = 738;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 739;
				this.match(trinoSqlParserParser.CATALOGS);
				this.state = 746;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===121) {
					{
					this.state = 740;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 741;
					(localctx as ShowCatalogsContext)._pattern = this.string_();
					this.state = 744;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 742;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 743;
						(localctx as ShowCatalogsContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 47:
				localctx = new ShowColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 47);
				{
				this.state = 748;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 749;
				this.match(trinoSqlParserParser.COLUMNS);
				this.state = 750;
				_la = this._input.LA(1);
				if(!(_la===87 || _la===102)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 752;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1596214615) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 3134381375) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 3162472435) !== 0) || ((((_la - 154)) & ~0x1F) === 0 && ((1 << (_la - 154)) & 4286316499) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & 4009750519) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 525170103) !== 0) || ((((_la - 267)) & ~0x1F) === 0 && ((1 << (_la - 267)) & 15) !== 0)) {
					{
					this.state = 751;
					this.qualifiedName();
					}
				}

				this.state = 760;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===121) {
					{
					this.state = 754;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 755;
					(localctx as ShowColumnsContext)._pattern = this.string_();
					this.state = 758;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 756;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 757;
						(localctx as ShowColumnsContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 48:
				localctx = new ShowStatsContext(this, localctx);
				this.enterOuterAlt(localctx, 48);
				{
				this.state = 762;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 763;
				this.match(trinoSqlParserParser.STATS);
				this.state = 764;
				this.match(trinoSqlParserParser.FOR);
				this.state = 765;
				this.qualifiedName();
				}
				break;
			case 49:
				localctx = new ShowStatsForQueryContext(this, localctx);
				this.enterOuterAlt(localctx, 49);
				{
				this.state = 766;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 767;
				this.match(trinoSqlParserParser.STATS);
				this.state = 768;
				this.match(trinoSqlParserParser.FOR);
				this.state = 769;
				this.match(trinoSqlParserParser.T__1);
				this.state = 770;
				this.query();
				this.state = 771;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 50:
				localctx = new ShowRolesContext(this, localctx);
				this.enterOuterAlt(localctx, 50);
				{
				this.state = 773;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 775;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===47) {
					{
					this.state = 774;
					this.match(trinoSqlParserParser.CURRENT);
					}
				}

				this.state = 777;
				this.match(trinoSqlParserParser.ROLES);
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
				localctx = new ShowRoleGrantsContext(this, localctx);
				this.enterOuterAlt(localctx, 51);
				{
				this.state = 782;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 783;
				this.match(trinoSqlParserParser.ROLE);
				this.state = 784;
				this.match(trinoSqlParserParser.GRANTS);
				this.state = 787;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===87 || _la===102) {
					{
					this.state = 785;
					_la = this._input.LA(1);
					if(!(_la===87 || _la===102)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 786;
					this.identifier();
					}
				}

				}
				break;
			case 52:
				localctx = new ShowColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 52);
				{
				this.state = 789;
				this.match(trinoSqlParserParser.DESCRIBE);
				this.state = 790;
				this.qualifiedName();
				}
				break;
			case 53:
				localctx = new ShowColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 53);
				{
				this.state = 791;
				this.match(trinoSqlParserParser.DESC);
				this.state = 792;
				this.qualifiedName();
				}
				break;
			case 54:
				localctx = new ShowFunctionsContext(this, localctx);
				this.enterOuterAlt(localctx, 54);
				{
				this.state = 793;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 794;
				this.match(trinoSqlParserParser.FUNCTIONS);
				this.state = 801;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===121) {
					{
					this.state = 795;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 796;
					(localctx as ShowFunctionsContext)._pattern = this.string_();
					this.state = 799;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 797;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 798;
						(localctx as ShowFunctionsContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 55:
				localctx = new ShowSessionContext(this, localctx);
				this.enterOuterAlt(localctx, 55);
				{
				this.state = 803;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 804;
				this.match(trinoSqlParserParser.SESSION);
				this.state = 811;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===121) {
					{
					this.state = 805;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 806;
					(localctx as ShowSessionContext)._pattern = this.string_();
					this.state = 809;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 807;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 808;
						(localctx as ShowSessionContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 56:
				localctx = new SetSessionContext(this, localctx);
				this.enterOuterAlt(localctx, 56);
				{
				this.state = 813;
				this.match(trinoSqlParserParser.SET);
				this.state = 814;
				this.match(trinoSqlParserParser.SESSION);
				this.state = 815;
				this.qualifiedName();
				this.state = 816;
				this.match(trinoSqlParserParser.EQ);
				this.state = 817;
				this.expression();
				}
				break;
			case 57:
				localctx = new ResetSessionContext(this, localctx);
				this.enterOuterAlt(localctx, 57);
				{
				this.state = 819;
				this.match(trinoSqlParserParser.RESET);
				this.state = 820;
				this.match(trinoSqlParserParser.SESSION);
				this.state = 821;
				this.qualifiedName();
				}
				break;
			case 58:
				localctx = new StartTransactionContext(this, localctx);
				this.enterOuterAlt(localctx, 58);
				{
				this.state = 822;
				this.match(trinoSqlParserParser.START);
				this.state = 823;
				this.match(trinoSqlParserParser.TRANSACTION);
				this.state = 832;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===114 || _la===176) {
					{
					this.state = 824;
					this.transactionMode();
					this.state = 829;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 825;
						this.match(trinoSqlParserParser.T__3);
						this.state = 826;
						this.transactionMode();
						}
						}
						this.state = 831;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;
			case 59:
				localctx = new CommitContext(this, localctx);
				this.enterOuterAlt(localctx, 59);
				{
				this.state = 834;
				this.match(trinoSqlParserParser.COMMIT);
				this.state = 836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===244) {
					{
					this.state = 835;
					this.match(trinoSqlParserParser.WORK);
					}
				}

				}
				break;
			case 60:
				localctx = new RollbackContext(this, localctx);
				this.enterOuterAlt(localctx, 60);
				{
				this.state = 838;
				this.match(trinoSqlParserParser.ROLLBACK);
				this.state = 840;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===244) {
					{
					this.state = 839;
					this.match(trinoSqlParserParser.WORK);
					}
				}

				}
				break;
			case 61:
				localctx = new PrepareContext(this, localctx);
				this.enterOuterAlt(localctx, 61);
				{
				this.state = 842;
				this.match(trinoSqlParserParser.PREPARE);
				this.state = 843;
				this.identifier();
				this.state = 844;
				this.match(trinoSqlParserParser.FROM);
				this.state = 845;
				this.statement();
				}
				break;
			case 62:
				localctx = new DeallocateContext(this, localctx);
				this.enterOuterAlt(localctx, 62);
				{
				this.state = 847;
				this.match(trinoSqlParserParser.DEALLOCATE);
				this.state = 848;
				this.match(trinoSqlParserParser.PREPARE);
				this.state = 849;
				this.identifier();
				}
				break;
			case 63:
				localctx = new ExecuteContext(this, localctx);
				this.enterOuterAlt(localctx, 63);
				{
				this.state = 850;
				this.match(trinoSqlParserParser.EXECUTE);
				this.state = 851;
				this.identifier();
				this.state = 861;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===234) {
					{
					this.state = 852;
					this.match(trinoSqlParserParser.USING);
					this.state = 853;
					this.expression();
					this.state = 858;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 854;
						this.match(trinoSqlParserParser.T__3);
						this.state = 855;
						this.expression();
						}
						}
						this.state = 860;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;
			case 64:
				localctx = new DescribeInputContext(this, localctx);
				this.enterOuterAlt(localctx, 64);
				{
				this.state = 863;
				this.match(trinoSqlParserParser.DESCRIBE);
				this.state = 864;
				this.match(trinoSqlParserParser.INPUT);
				this.state = 865;
				this.identifier();
				}
				break;
			case 65:
				localctx = new DescribeOutputContext(this, localctx);
				this.enterOuterAlt(localctx, 65);
				{
				this.state = 866;
				this.match(trinoSqlParserParser.DESCRIBE);
				this.state = 867;
				this.match(trinoSqlParserParser.OUTPUT);
				this.state = 868;
				this.identifier();
				}
				break;
			case 66:
				localctx = new SetPathContext(this, localctx);
				this.enterOuterAlt(localctx, 66);
				{
				this.state = 869;
				this.match(trinoSqlParserParser.SET);
				this.state = 870;
				this.match(trinoSqlParserParser.PATH);
				this.state = 871;
				this.pathSpecification();
				}
				break;
			case 67:
				localctx = new SetTimeZoneContext(this, localctx);
				this.enterOuterAlt(localctx, 67);
				{
				this.state = 872;
				this.match(trinoSqlParserParser.SET);
				this.state = 873;
				this.match(trinoSqlParserParser.TIME);
				this.state = 874;
				this.match(trinoSqlParserParser.ZONE);
				this.state = 877;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 94, this._ctx) ) {
				case 1:
					{
					this.state = 875;
					this.match(trinoSqlParserParser.LOCAL);
					}
					break;
				case 2:
					{
					this.state = 876;
					this.expression();
					}
					break;
				}
				}
				break;
			case 68:
				localctx = new UpdateContext(this, localctx);
				this.enterOuterAlt(localctx, 68);
				{
				this.state = 879;
				this.match(trinoSqlParserParser.UPDATE);
				this.state = 880;
				this.qualifiedName();
				this.state = 881;
				this.match(trinoSqlParserParser.SET);
				this.state = 882;
				this.updateAssignment();
				this.state = 887;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 883;
					this.match(trinoSqlParserParser.T__3);
					this.state = 884;
					this.updateAssignment();
					}
					}
					this.state = 889;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 892;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===240) {
					{
					this.state = 890;
					this.match(trinoSqlParserParser.WHERE);
					this.state = 891;
					(localctx as UpdateContext)._where = this.booleanExpression(0);
					}
				}

				}
				break;
			case 69:
				localctx = new MergeContext(this, localctx);
				this.enterOuterAlt(localctx, 69);
				{
				this.state = 894;
				this.match(trinoSqlParserParser.MERGE);
				this.state = 895;
				this.match(trinoSqlParserParser.INTO);
				this.state = 896;
				this.qualifiedName();
				this.state = 901;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140015023) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1596214615) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 3134381375) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 3162472435) !== 0) || ((((_la - 154)) & ~0x1F) === 0 && ((1 << (_la - 154)) & 4286316499) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & 4009750519) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 525170103) !== 0) || ((((_la - 267)) & ~0x1F) === 0 && ((1 << (_la - 267)) & 15) !== 0)) {
					{
					this.state = 898;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===26) {
						{
						this.state = 897;
						this.match(trinoSqlParserParser.AS);
						}
					}

					this.state = 900;
					this.identifier();
					}
				}

				this.state = 903;
				this.match(trinoSqlParserParser.USING);
				this.state = 904;
				this.relation(0);
				this.state = 905;
				this.match(trinoSqlParserParser.ON);
				this.state = 906;
				this.expression();
				this.state = 908;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 907;
					this.mergeCase();
					}
					}
					this.state = 910;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===239);
				}
				break;
			case 70:
				localctx = new ShowTableCommentContext(this, localctx);
				this.enterOuterAlt(localctx, 70);
				{
				this.state = 912;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 913;
				this.match(trinoSqlParserParser.COMMENT);
				this.state = 914;
				this.match(trinoSqlParserParser.ON);
				this.state = 915;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 916;
				this.qualifiedName();
				}
				break;
			case 71:
				localctx = new ShowColumnCommentContext(this, localctx);
				this.enterOuterAlt(localctx, 71);
				{
				this.state = 917;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 918;
				this.match(trinoSqlParserParser.COMMENT);
				this.state = 919;
				this.match(trinoSqlParserParser.ON);
				this.state = 920;
				this.match(trinoSqlParserParser.COLUMN);
				this.state = 921;
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
			this.state = 925;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===242) {
				{
				this.state = 924;
				this.with_();
				}
			}

			this.state = 927;
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
			this.state = 929;
			this.match(trinoSqlParserParser.WITH);
			this.state = 931;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===177) {
				{
				this.state = 930;
				this.match(trinoSqlParserParser.RECURSIVE);
				}
			}

			this.state = 933;
			this.namedQuery();
			this.state = 938;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 934;
				this.match(trinoSqlParserParser.T__3);
				this.state = 935;
				this.namedQuery();
				}
				}
				this.state = 940;
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
			this.state = 943;
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
			case 221:
			case 223:
			case 224:
			case 226:
			case 227:
			case 229:
			case 231:
			case 232:
			case 233:
			case 235:
			case 237:
			case 238:
			case 241:
			case 243:
			case 244:
			case 245:
			case 246:
			case 247:
			case 267:
			case 268:
			case 269:
			case 270:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 941;
				this.columnDefinition();
				}
				break;
			case 121:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 942;
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
			this.state = 945;
			this.identifier();
			this.state = 946;
			this.type_(0);
			this.state = 949;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===146) {
				{
				this.state = 947;
				this.match(trinoSqlParserParser.NOT);
				this.state = 948;
				this.match(trinoSqlParserParser.NULL);
				}
			}

			this.state = 953;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===40) {
				{
				this.state = 951;
				this.match(trinoSqlParserParser.COMMENT);
				this.state = 952;
				this.string_();
				}
			}

			this.state = 957;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===242) {
				{
				this.state = 955;
				this.match(trinoSqlParserParser.WITH);
				this.state = 956;
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
			this.state = 959;
			this.match(trinoSqlParserParser.LIKE);
			this.state = 960;
			this.qualifiedName();
			this.state = 963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===74 || _la===103) {
				{
				this.state = 961;
				localctx._optionType = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===74 || _la===103)) {
				    localctx._optionType = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 962;
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
			this.state = 965;
			this.match(trinoSqlParserParser.T__1);
			this.state = 966;
			this.property();
			this.state = 971;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 967;
				this.match(trinoSqlParserParser.T__3);
				this.state = 968;
				this.property();
				}
				}
				this.state = 973;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 974;
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
			this.state = 976;
			this.identifier();
			this.state = 977;
			this.match(trinoSqlParserParser.EQ);
			this.state = 978;
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
			this.state = 980;
			this.queryTerm(0);
			this.state = 991;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===157) {
				{
				this.state = 981;
				this.match(trinoSqlParserParser.ORDER);
				this.state = 982;
				this.match(trinoSqlParserParser.BY);
				this.state = 983;
				this.sortItem();
				this.state = 988;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 984;
					this.match(trinoSqlParserParser.T__3);
					this.state = 985;
					this.sortItem();
					}
					}
					this.state = 990;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 998;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===150) {
				{
				this.state = 993;
				this.match(trinoSqlParserParser.OFFSET);
				this.state = 994;
				localctx._offset = this.rowCount();
				this.state = 996;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===191 || _la===192) {
					{
					this.state = 995;
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

			this.state = 1013;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 122:
				{
				{
				this.state = 1000;
				this.match(trinoSqlParserParser.LIMIT);
				this.state = 1001;
				localctx._limit = this.limitRowCount();
				}
				}
				break;
			case 80:
				{
				{
				this.state = 1002;
				this.match(trinoSqlParserParser.FETCH);
				this.state = 1003;
				_la = this._input.LA(1);
				if(!(_la===83 || _la===138)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1005;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===260 || _la===264) {
					{
					this.state = 1004;
					localctx._fetchFirst = this.rowCount();
					}
				}

				this.state = 1007;
				_la = this._input.LA(1);
				if(!(_la===191 || _la===192)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1011;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 154:
					{
					this.state = 1008;
					this.match(trinoSqlParserParser.ONLY);
					}
					break;
				case 242:
					{
					this.state = 1009;
					this.match(trinoSqlParserParser.WITH);
					this.state = 1010;
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
			case 242:
			case 271:
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
			this.state = 1017;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1015;
				this.match(trinoSqlParserParser.ALL);
				}
				break;
			case 260:
			case 264:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1016;
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
			this.state = 1019;
			_la = this._input.LA(1);
			if(!(_la===260 || _la===264)) {
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

			this.state = 1022;
			this.queryPrimary();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1038;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 121, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1036;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
					case 1:
						{
						localctx = new SetOperationContext(this, new QueryTermContext(this, _parentctx, _parentState));
						(localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_queryTerm);
						this.state = 1024;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1025;
						(localctx as SetOperationContext)._operator = this.match(trinoSqlParserParser.INTERSECT);
						this.state = 1027;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===20 || _la===65) {
							{
							this.state = 1026;
							this.setQuantifier();
							}
						}

						this.state = 1029;
						(localctx as SetOperationContext)._right = this.queryTerm(3);
						}
						break;
					case 2:
						{
						localctx = new SetOperationContext(this, new QueryTermContext(this, _parentctx, _parentState));
						(localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_queryTerm);
						this.state = 1030;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1031;
						(localctx as SetOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===73 || _la===228)) {
						    (localctx as SetOperationContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1033;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===20 || _la===65) {
							{
							this.state = 1032;
							this.setQuantifier();
							}
						}

						this.state = 1035;
						(localctx as SetOperationContext)._right = this.queryTerm(2);
						}
						break;
					}
					}
				}
				this.state = 1040;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 121, this._ctx);
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
			this.state = 1057;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 199:
				localctx = new QueryPrimaryDefaultContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1041;
				this.querySpecification();
				}
				break;
			case 211:
				localctx = new TableContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1042;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 1043;
				this.qualifiedName();
				}
				break;
			case 236:
				localctx = new InlineTableContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1044;
				this.match(trinoSqlParserParser.VALUES);
				this.state = 1045;
				this.expression();
				this.state = 1050;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 122, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1046;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1047;
						this.expression();
						}
						}
					}
					this.state = 1052;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 122, this._ctx);
				}
				}
				break;
			case 2:
				localctx = new SubqueryContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1053;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1054;
				this.queryNoWith();
				this.state = 1055;
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
			this.state = 1059;
			this.expression();
			this.state = 1061;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===27 || _la===62) {
				{
				this.state = 1060;
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

			this.state = 1065;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===149) {
				{
				this.state = 1063;
				this.match(trinoSqlParserParser.NULLS);
				this.state = 1064;
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
			this.state = 1067;
			this.match(trinoSqlParserParser.SELECT);
			this.state = 1069;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				{
				this.state = 1068;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1071;
			this.selectItem();
			this.state = 1076;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 127, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1072;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1073;
					this.selectItem();
					}
					}
				}
				this.state = 1078;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 127, this._ctx);
			}
			this.state = 1088;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				{
				this.state = 1079;
				this.match(trinoSqlParserParser.FROM);
				this.state = 1080;
				this.relation(0);
				this.state = 1085;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 128, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1081;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1082;
						this.relation(0);
						}
						}
					}
					this.state = 1087;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 128, this._ctx);
				}
				}
				break;
			}
			this.state = 1092;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				{
				this.state = 1090;
				this.match(trinoSqlParserParser.WHERE);
				this.state = 1091;
				localctx._where = this.booleanExpression(0);
				}
				break;
			}
			this.state = 1097;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				{
				this.state = 1094;
				this.match(trinoSqlParserParser.GROUP);
				this.state = 1095;
				this.match(trinoSqlParserParser.BY);
				this.state = 1096;
				this.groupBy();
				}
				break;
			}
			this.state = 1101;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				{
				this.state = 1099;
				this.match(trinoSqlParserParser.HAVING);
				this.state = 1100;
				localctx._having = this.booleanExpression(0);
				}
				break;
			}
			this.state = 1112;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				{
				this.state = 1103;
				this.match(trinoSqlParserParser.WINDOW);
				this.state = 1104;
				this.windowDefinition();
				this.state = 1109;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 133, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1105;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1106;
						this.windowDefinition();
						}
						}
					}
					this.state = 1111;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 133, this._ctx);
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
			this.state = 1115;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				{
				this.state = 1114;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1117;
			this.groupingElement();
			this.state = 1122;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 136, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1118;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1119;
					this.groupingElement();
					}
					}
				}
				this.state = 1124;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 136, this._ctx);
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
			this.state = 1165;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				localctx = new SingleGroupingSetContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1125;
				this.groupingSet();
				}
				break;
			case 2:
				localctx = new RollupContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1126;
				this.match(trinoSqlParserParser.ROLLUP);
				this.state = 1127;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 3751279891) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4289639607) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 3923771327) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4152344063) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 3220111343) !== 0) || ((((_la - 227)) & ~0x1F) === 0 && ((1 << (_la - 227)) & 404704629) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 2047) !== 0)) {
					{
					this.state = 1128;
					this.expression();
					this.state = 1133;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1129;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1130;
						this.expression();
						}
						}
						this.state = 1135;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1138;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 3:
				localctx = new CubeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1139;
				this.match(trinoSqlParserParser.CUBE);
				this.state = 1140;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 3751279891) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4289639607) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 3923771327) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4152344063) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 3220111343) !== 0) || ((((_la - 227)) & ~0x1F) === 0 && ((1 << (_la - 227)) & 404704629) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 2047) !== 0)) {
					{
					this.state = 1141;
					this.expression();
					this.state = 1146;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1142;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1143;
						this.expression();
						}
						}
						this.state = 1148;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1151;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 4:
				localctx = new MultipleGroupingSetsContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1152;
				this.match(trinoSqlParserParser.GROUPING);
				this.state = 1153;
				this.match(trinoSqlParserParser.SETS);
				this.state = 1154;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1155;
				this.groupingSet();
				this.state = 1160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1156;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1157;
					this.groupingSet();
					}
					}
					this.state = 1162;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1163;
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
			this.state = 1180;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1167;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 3751279891) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4289639607) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 3923771327) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4152344063) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 3220111343) !== 0) || ((((_la - 227)) & ~0x1F) === 0 && ((1 << (_la - 227)) & 404704629) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 2047) !== 0)) {
					{
					this.state = 1168;
					this.expression();
					this.state = 1173;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1169;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1170;
						this.expression();
						}
						}
						this.state = 1175;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1178;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1179;
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
			this.state = 1182;
			localctx._name = this.identifier();
			this.state = 1183;
			this.match(trinoSqlParserParser.AS);
			this.state = 1184;
			this.match(trinoSqlParserParser.T__1);
			this.state = 1185;
			this.windowSpecification();
			this.state = 1186;
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
			this.state = 1189;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1188;
				localctx._existingWindowName = this.identifier();
				}
				break;
			}
			this.state = 1201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===162) {
				{
				this.state = 1191;
				this.match(trinoSqlParserParser.PARTITION);
				this.state = 1192;
				this.match(trinoSqlParserParser.BY);
				this.state = 1193;
				localctx._expression = this.expression();
				localctx._partition.push(localctx._expression);
				this.state = 1198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1194;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1195;
					localctx._expression = this.expression();
					localctx._partition.push(localctx._expression);
					}
					}
					this.state = 1200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===157) {
				{
				this.state = 1203;
				this.match(trinoSqlParserParser.ORDER);
				this.state = 1204;
				this.match(trinoSqlParserParser.BY);
				this.state = 1205;
				this.sortItem();
				this.state = 1210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1206;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1207;
					this.sortItem();
					}
					}
					this.state = 1212;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===97 || _la===133 || _la===175 || _la===192) {
				{
				this.state = 1215;
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
			this.state = 1218;
			localctx._name = this.identifier();
			this.state = 1220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 1219;
				this.columnAliases();
				}
			}

			this.state = 1222;
			this.match(trinoSqlParserParser.AS);
			this.state = 1223;
			this.match(trinoSqlParserParser.T__1);
			this.state = 1224;
			this.query();
			this.state = 1225;
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
			this.state = 1227;
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
			this.state = 1244;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				localctx = new SelectSingleContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1229;
				this.expression();
				this.state = 1234;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 154, this._ctx) ) {
				case 1:
					{
					this.state = 1231;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===26) {
						{
						this.state = 1230;
						this.match(trinoSqlParserParser.AS);
						}
					}

					this.state = 1233;
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
				this.state = 1236;
				this.primaryExpression(0);
				this.state = 1237;
				this.match(trinoSqlParserParser.T__0);
				this.state = 1238;
				this.match(trinoSqlParserParser.ASTERISK);
				this.state = 1241;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 155, this._ctx) ) {
				case 1:
					{
					this.state = 1239;
					this.match(trinoSqlParserParser.AS);
					this.state = 1240;
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
				this.state = 1243;
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

			this.state = 1247;
			this.sampledRelation();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1267;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 158, this._ctx);
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
					this.state = 1249;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1263;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 45:
						{
						this.state = 1250;
						this.match(trinoSqlParserParser.CROSS);
						this.state = 1251;
						this.match(trinoSqlParserParser.JOIN);
						this.state = 1252;
						(localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					case 88:
					case 105:
					case 115:
					case 119:
					case 186:
						{
						this.state = 1253;
						this.joinType();
						this.state = 1254;
						this.match(trinoSqlParserParser.JOIN);
						this.state = 1255;
						(localctx as JoinRelationContext)._rightRelation = this.relation(0);
						this.state = 1256;
						this.joinCriteria();
						}
						break;
					case 137:
						{
						this.state = 1258;
						this.match(trinoSqlParserParser.NATURAL);
						this.state = 1259;
						this.joinType();
						this.state = 1260;
						this.match(trinoSqlParserParser.JOIN);
						this.state = 1261;
						(localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 1269;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 158, this._ctx);
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
			this.state = 1285;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 105:
			case 115:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===105) {
					{
					this.state = 1270;
					this.match(trinoSqlParserParser.INNER);
					}
				}

				}
				break;
			case 119:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1273;
				this.match(trinoSqlParserParser.LEFT);
				this.state = 1275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===159) {
					{
					this.state = 1274;
					this.match(trinoSqlParserParser.OUTER);
					}
				}

				}
				break;
			case 186:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1277;
				this.match(trinoSqlParserParser.RIGHT);
				this.state = 1279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===159) {
					{
					this.state = 1278;
					this.match(trinoSqlParserParser.OUTER);
					}
				}

				}
				break;
			case 88:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1281;
				this.match(trinoSqlParserParser.FULL);
				this.state = 1283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===159) {
					{
					this.state = 1282;
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
			this.state = 1301;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 152:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1287;
				this.match(trinoSqlParserParser.ON);
				this.state = 1288;
				this.booleanExpression(0);
				}
				break;
			case 234:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1289;
				this.match(trinoSqlParserParser.USING);
				this.state = 1290;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1291;
				this.identifier();
				this.state = 1296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1292;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1293;
					this.identifier();
					}
					}
					this.state = 1298;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1299;
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
			this.state = 1303;
			this.patternRecognition();
			this.state = 1310;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 166, this._ctx) ) {
			case 1:
				{
				this.state = 1304;
				this.match(trinoSqlParserParser.TABLESAMPLE);
				this.state = 1305;
				this.sampleType();
				this.state = 1306;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1307;
				localctx._percentage = this.expression();
				this.state = 1308;
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
			this.state = 1312;
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
			this.state = 1314;
			this.aliasedRelation();
			this.state = 1397;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 182, this._ctx) ) {
			case 1:
				{
				this.state = 1315;
				this.match(trinoSqlParserParser.MATCH_RECOGNIZE);
				this.state = 1316;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===162) {
					{
					this.state = 1317;
					this.match(trinoSqlParserParser.PARTITION);
					this.state = 1318;
					this.match(trinoSqlParserParser.BY);
					this.state = 1319;
					localctx._expression = this.expression();
					localctx._partition.push(localctx._expression);
					this.state = 1324;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1320;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1321;
						localctx._expression = this.expression();
						localctx._partition.push(localctx._expression);
						}
						}
						this.state = 1326;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===157) {
					{
					this.state = 1329;
					this.match(trinoSqlParserParser.ORDER);
					this.state = 1330;
					this.match(trinoSqlParserParser.BY);
					this.state = 1331;
					this.sortItem();
					this.state = 1336;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1332;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1333;
						this.sortItem();
						}
						}
						this.state = 1338;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===133) {
					{
					this.state = 1341;
					this.match(trinoSqlParserParser.MEASURES);
					this.state = 1342;
					this.measureDefinition();
					this.state = 1347;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1343;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1344;
						this.measureDefinition();
						}
						}
						this.state = 1349;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20 || _la===153) {
					{
					this.state = 1352;
					this.rowsPerMatch();
					}
				}

				this.state = 1358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19) {
					{
					this.state = 1355;
					this.match(trinoSqlParserParser.AFTER);
					this.state = 1356;
					this.match(trinoSqlParserParser.MATCH);
					this.state = 1357;
					this.skipTo();
					}
				}

				this.state = 1361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===104 || _la===198) {
					{
					this.state = 1360;
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

				this.state = 1363;
				this.match(trinoSqlParserParser.PATTERN);
				this.state = 1364;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1365;
				this.rowPattern(0);
				this.state = 1366;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===208) {
					{
					this.state = 1367;
					this.match(trinoSqlParserParser.SUBSET);
					this.state = 1368;
					this.subsetDefinition();
					this.state = 1373;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1369;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1370;
						this.subsetDefinition();
						}
						}
						this.state = 1375;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1378;
				this.match(trinoSqlParserParser.DEFINE);
				this.state = 1379;
				this.variableDefinition();
				this.state = 1384;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1380;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1381;
					this.variableDefinition();
					}
					}
					this.state = 1386;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1387;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1395;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
				case 1:
					{
					this.state = 1389;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===26) {
						{
						this.state = 1388;
						this.match(trinoSqlParserParser.AS);
						}
					}

					this.state = 1391;
					this.identifier();
					this.state = 1393;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
					case 1:
						{
						this.state = 1392;
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
			this.state = 1399;
			this.expression();
			this.state = 1400;
			this.match(trinoSqlParserParser.AS);
			this.state = 1401;
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
			this.state = 1414;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 153:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1403;
				this.match(trinoSqlParserParser.ONE);
				this.state = 1404;
				this.match(trinoSqlParserParser.ROW);
				this.state = 1405;
				this.match(trinoSqlParserParser.PER);
				this.state = 1406;
				this.match(trinoSqlParserParser.MATCH);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1407;
				this.match(trinoSqlParserParser.ALL);
				this.state = 1408;
				this.match(trinoSqlParserParser.ROWS);
				this.state = 1409;
				this.match(trinoSqlParserParser.PER);
				this.state = 1410;
				this.match(trinoSqlParserParser.MATCH);
				this.state = 1412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===151 || _la===204 || _la===242) {
					{
					this.state = 1411;
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
			this.state = 1425;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 204:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1416;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 1417;
				this.match(trinoSqlParserParser.EMPTY);
				this.state = 1418;
				this.match(trinoSqlParserParser.MATCHES);
				}
				break;
			case 151:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1419;
				this.match(trinoSqlParserParser.OMIT);
				this.state = 1420;
				this.match(trinoSqlParserParser.EMPTY);
				this.state = 1421;
				this.match(trinoSqlParserParser.MATCHES);
				}
				break;
			case 242:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1422;
				this.match(trinoSqlParserParser.WITH);
				this.state = 1423;
				this.match(trinoSqlParserParser.UNMATCHED);
				this.state = 1424;
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
			this.state = 1446;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1427;
				this.match(trinoSqlParserParser.T__4);
				this.state = 1428;
				this.match(trinoSqlParserParser.TO);
				this.state = 1429;
				this.match(trinoSqlParserParser.NEXT);
				this.state = 1430;
				this.match(trinoSqlParserParser.ROW);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1431;
				this.match(trinoSqlParserParser.T__4);
				this.state = 1432;
				this.match(trinoSqlParserParser.PAST);
				this.state = 1433;
				this.match(trinoSqlParserParser.LAST);
				this.state = 1434;
				this.match(trinoSqlParserParser.ROW);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1435;
				this.match(trinoSqlParserParser.T__4);
				this.state = 1436;
				this.match(trinoSqlParserParser.TO);
				this.state = 1437;
				this.match(trinoSqlParserParser.FIRST);
				this.state = 1438;
				this.identifier();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1439;
				this.match(trinoSqlParserParser.T__4);
				this.state = 1440;
				this.match(trinoSqlParserParser.TO);
				this.state = 1441;
				this.match(trinoSqlParserParser.LAST);
				this.state = 1442;
				this.identifier();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1443;
				this.match(trinoSqlParserParser.T__4);
				this.state = 1444;
				this.match(trinoSqlParserParser.TO);
				this.state = 1445;
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
			this.state = 1448;
			localctx._name = this.identifier();
			this.state = 1449;
			this.match(trinoSqlParserParser.EQ);
			this.state = 1450;
			this.match(trinoSqlParserParser.T__1);
			this.state = 1451;
			localctx._identifier = this.identifier();
			localctx._union.push(localctx._identifier);
			this.state = 1456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 1452;
				this.match(trinoSqlParserParser.T__3);
				this.state = 1453;
				localctx._identifier = this.identifier();
				localctx._union.push(localctx._identifier);
				}
				}
				this.state = 1458;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1459;
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
			this.state = 1461;
			this.identifier();
			this.state = 1462;
			this.match(trinoSqlParserParser.AS);
			this.state = 1463;
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
			this.state = 1465;
			this.relationPrimary();
			this.state = 1473;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				{
				this.state = 1467;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26) {
					{
					this.state = 1466;
					this.match(trinoSqlParserParser.AS);
					}
				}

				this.state = 1469;
				this.identifier();
				this.state = 1471;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 189, this._ctx) ) {
				case 1:
					{
					this.state = 1470;
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
			this.state = 1475;
			this.match(trinoSqlParserParser.T__1);
			this.state = 1476;
			this.identifier();
			this.state = 1481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 1477;
				this.match(trinoSqlParserParser.T__3);
				this.state = 1478;
				this.identifier();
				}
				}
				this.state = 1483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1484;
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
			this.state = 1515;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				localctx = new TableNameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1486;
				this.qualifiedName();
				}
				break;
			case 2:
				localctx = new SubqueryRelationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1487;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1488;
				this.query();
				this.state = 1489;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 3:
				localctx = new UnnestContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1491;
				this.match(trinoSqlParserParser.UNNEST);
				this.state = 1492;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1493;
				this.expression();
				this.state = 1498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1494;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1495;
					this.expression();
					}
					}
					this.state = 1500;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1501;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1504;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 193, this._ctx) ) {
				case 1:
					{
					this.state = 1502;
					this.match(trinoSqlParserParser.WITH);
					this.state = 1503;
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
				this.state = 1506;
				this.match(trinoSqlParserParser.LATERAL);
				this.state = 1507;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1508;
				this.query();
				this.state = 1509;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 5:
				localctx = new ParenthesizedRelationContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1511;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1512;
				this.relation(0);
				this.state = 1513;
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
			this.state = 1517;
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
			this.state = 1526;
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
			case 224:
			case 226:
			case 227:
			case 229:
			case 231:
			case 232:
			case 233:
			case 235:
			case 237:
			case 238:
			case 241:
			case 243:
			case 244:
			case 245:
			case 246:
			case 247:
			case 254:
			case 255:
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
			case 270:
				{
				localctx = new PredicatedContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1520;
				(localctx as PredicatedContext)._valueExpression = this.valueExpression(0);
				this.state = 1522;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 195, this._ctx) ) {
				case 1:
					{
					this.state = 1521;
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
				this.state = 1524;
				this.match(trinoSqlParserParser.NOT);
				this.state = 1525;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1536;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 198, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1534;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 197, this._ctx) ) {
					case 1:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_booleanExpression);
						this.state = 1528;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1529;
						(localctx as LogicalBinaryContext)._operator = this.match(trinoSqlParserParser.AND);
						this.state = 1530;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;
					case 2:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_booleanExpression);
						this.state = 1531;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1532;
						(localctx as LogicalBinaryContext)._operator = this.match(trinoSqlParserParser.OR);
						this.state = 1533;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1538;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 198, this._ctx);
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
			this.state = 1600;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 207, this._ctx) ) {
			case 1:
				localctx = new ComparisonContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1539;
				this.comparisonOperator();
				this.state = 1540;
				(localctx as ComparisonContext)._right = this.valueExpression(0);
				}
				break;
			case 2:
				localctx = new QuantifiedComparisonContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1542;
				this.comparisonOperator();
				this.state = 1543;
				this.comparisonQuantifier();
				this.state = 1544;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1545;
				this.query();
				this.state = 1546;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 3:
				localctx = new BetweenContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1549;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===146) {
					{
					this.state = 1548;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1551;
				this.match(trinoSqlParserParser.BETWEEN);
				this.state = 1552;
				(localctx as BetweenContext)._lower = this.valueExpression(0);
				this.state = 1553;
				this.match(trinoSqlParserParser.AND);
				this.state = 1554;
				(localctx as BetweenContext)._upper = this.valueExpression(0);
				}
				break;
			case 4:
				localctx = new InListContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1557;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===146) {
					{
					this.state = 1556;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1559;
				this.match(trinoSqlParserParser.IN);
				this.state = 1560;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1561;
				this.expression();
				this.state = 1566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1562;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1563;
					this.expression();
					}
					}
					this.state = 1568;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1569;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 5:
				localctx = new InSubqueryContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===146) {
					{
					this.state = 1571;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1574;
				this.match(trinoSqlParserParser.IN);
				this.state = 1575;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1576;
				this.query();
				this.state = 1577;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 6:
				localctx = new LikeContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===146) {
					{
					this.state = 1579;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1582;
				this.match(trinoSqlParserParser.LIKE);
				this.state = 1583;
				(localctx as LikeContext)._pattern = this.valueExpression(0);
				this.state = 1586;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 204, this._ctx) ) {
				case 1:
					{
					this.state = 1584;
					this.match(trinoSqlParserParser.ESCAPE);
					this.state = 1585;
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
				this.state = 1588;
				this.match(trinoSqlParserParser.IS);
				this.state = 1590;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===146) {
					{
					this.state = 1589;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1592;
				this.match(trinoSqlParserParser.NULL);
				}
				break;
			case 8:
				localctx = new DistinctFromContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1593;
				this.match(trinoSqlParserParser.IS);
				this.state = 1595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===146) {
					{
					this.state = 1594;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1597;
				this.match(trinoSqlParserParser.DISTINCT);
				this.state = 1598;
				this.match(trinoSqlParserParser.FROM);
				this.state = 1599;
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
			this.state = 1606;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
			case 1:
				{
				localctx = new ValueExpressionDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1603;
				this.primaryExpression(0);
				}
				break;
			case 2:
				{
				localctx = new ArithmeticUnaryContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1604;
				(localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===254 || _la===255)) {
				    (localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1605;
				this.valueExpression(4);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1622;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 210, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1620;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
					case 1:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_valueExpression);
						this.state = 1608;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1609;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & 7) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1610;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;
					case 2:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_valueExpression);
						this.state = 1611;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1612;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===254 || _la===255)) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1613;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;
					case 3:
						{
						localctx = new ConcatenationContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ConcatenationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_valueExpression);
						this.state = 1614;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1615;
						this.match(trinoSqlParserParser.CONCAT);
						this.state = 1616;
						(localctx as ConcatenationContext)._right = this.valueExpression(2);
						}
						break;
					case 4:
						{
						localctx = new AtTimeZoneContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_valueExpression);
						this.state = 1617;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1618;
						this.match(trinoSqlParserParser.AT);
						this.state = 1619;
						this.timeZoneSpecifier();
						}
						break;
					}
					}
				}
				this.state = 1624;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 210, this._ctx);
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
			this.state = 1874;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				{
				localctx = new NullLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1626;
				this.match(trinoSqlParserParser.NULL);
				}
				break;
			case 2:
				{
				localctx = new IntervalLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1627;
				this.interval();
				}
				break;
			case 3:
				{
				localctx = new TypeConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1628;
				this.identifier();
				this.state = 1629;
				this.string_();
				}
				break;
			case 4:
				{
				localctx = new TypeConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1631;
				this.match(trinoSqlParserParser.DOUBLE);
				this.state = 1632;
				this.match(trinoSqlParserParser.PRECISION);
				this.state = 1633;
				this.string_();
				}
				break;
			case 5:
				{
				localctx = new NumericLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1634;
				this.number_();
				}
				break;
			case 6:
				{
				localctx = new BooleanLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1635;
				this.booleanValue();
				}
				break;
			case 7:
				{
				localctx = new StringLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1636;
				this.string_();
				}
				break;
			case 8:
				{
				localctx = new BinaryLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1637;
				this.match(trinoSqlParserParser.BINARY_LITERAL);
				}
				break;
			case 9:
				{
				localctx = new ParameterContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1638;
				this.match(trinoSqlParserParser.QUESTION_MARK);
				}
				break;
			case 10:
				{
				localctx = new PositionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1639;
				this.match(trinoSqlParserParser.POSITION);
				this.state = 1640;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1641;
				this.valueExpression(0);
				this.state = 1642;
				this.match(trinoSqlParserParser.IN);
				this.state = 1643;
				this.valueExpression(0);
				this.state = 1644;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 11:
				{
				localctx = new RowConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1646;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1647;
				this.expression();
				this.state = 1650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1648;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1649;
					this.expression();
					}
					}
					this.state = 1652;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===4);
				this.state = 1654;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 12:
				{
				localctx = new RowConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1656;
				this.match(trinoSqlParserParser.ROW);
				this.state = 1657;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1658;
				this.expression();
				this.state = 1663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1659;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1660;
					this.expression();
					}
					}
					this.state = 1665;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1666;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 13:
				{
				localctx = new FunctionCallContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1668;
				this.qualifiedName();
				this.state = 1669;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1670;
				this.match(trinoSqlParserParser.ASTERISK);
				this.state = 1671;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1673;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 213, this._ctx) ) {
				case 1:
					{
					this.state = 1672;
					this.filter();
					}
					break;
				}
				this.state = 1676;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 214, this._ctx) ) {
				case 1:
					{
					this.state = 1675;
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
				this.state = 1679;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 215, this._ctx) ) {
				case 1:
					{
					this.state = 1678;
					this.processingMode();
					}
					break;
				}
				this.state = 1681;
				this.qualifiedName();
				this.state = 1682;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 3207592487) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4273656541) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 2810183423) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3724474367) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4290510783) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 809409259) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 2047) !== 0)) {
					{
					this.state = 1684;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 216, this._ctx) ) {
					case 1:
						{
						this.state = 1683;
						this.setQuantifier();
						}
						break;
					}
					this.state = 1686;
					this.expression();
					this.state = 1691;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1687;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1688;
						this.expression();
						}
						}
						this.state = 1693;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1706;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===157) {
					{
					this.state = 1696;
					this.match(trinoSqlParserParser.ORDER);
					this.state = 1697;
					this.match(trinoSqlParserParser.BY);
					this.state = 1698;
					this.sortItem();
					this.state = 1703;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1699;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1700;
						this.sortItem();
						}
						}
						this.state = 1705;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1708;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1710;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 221, this._ctx) ) {
				case 1:
					{
					this.state = 1709;
					this.filter();
					}
					break;
				}
				this.state = 1716;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 223, this._ctx) ) {
				case 1:
					{
					this.state = 1713;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===101 || _la===183) {
						{
						this.state = 1712;
						this.nullTreatment();
						}
					}

					this.state = 1715;
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
				this.state = 1718;
				this.identifier();
				this.state = 1719;
				this.over();
				}
				break;
			case 16:
				{
				localctx = new LambdaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1721;
				this.identifier();
				this.state = 1722;
				this.match(trinoSqlParserParser.T__5);
				this.state = 1723;
				this.expression();
				}
				break;
			case 17:
				{
				localctx = new LambdaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1725;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1596214615) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 3134381375) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 3162472435) !== 0) || ((((_la - 154)) & ~0x1F) === 0 && ((1 << (_la - 154)) & 4286316499) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & 4009750519) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 525170103) !== 0) || ((((_la - 267)) & ~0x1F) === 0 && ((1 << (_la - 267)) & 15) !== 0)) {
					{
					this.state = 1726;
					this.identifier();
					this.state = 1731;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1727;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1728;
						this.identifier();
						}
						}
						this.state = 1733;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1736;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1737;
				this.match(trinoSqlParserParser.T__5);
				this.state = 1738;
				this.expression();
				}
				break;
			case 18:
				{
				localctx = new SubqueryExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1739;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1740;
				this.query();
				this.state = 1741;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 19:
				{
				localctx = new ExistsContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1743;
				this.match(trinoSqlParserParser.EXISTS);
				this.state = 1744;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1745;
				this.query();
				this.state = 1746;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 20:
				{
				localctx = new SimpleCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1748;
				this.match(trinoSqlParserParser.CASE);
				this.state = 1749;
				(localctx as SimpleCaseContext)._operand = this.expression();
				this.state = 1751;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1750;
					this.whenClause();
					}
					}
					this.state = 1753;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===239);
				this.state = 1757;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===69) {
					{
					this.state = 1755;
					this.match(trinoSqlParserParser.ELSE);
					this.state = 1756;
					(localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1759;
				this.match(trinoSqlParserParser.END);
				}
				break;
			case 21:
				{
				localctx = new SearchedCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1761;
				this.match(trinoSqlParserParser.CASE);
				this.state = 1763;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1762;
					this.whenClause();
					}
					}
					this.state = 1765;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===239);
				this.state = 1769;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===69) {
					{
					this.state = 1767;
					this.match(trinoSqlParserParser.ELSE);
					this.state = 1768;
					(localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1771;
				this.match(trinoSqlParserParser.END);
				}
				break;
			case 22:
				{
				localctx = new CastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1773;
				this.match(trinoSqlParserParser.CAST);
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
			case 23:
				{
				localctx = new CastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1780;
				this.match(trinoSqlParserParser.TRY_CAST);
				this.state = 1781;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1782;
				this.expression();
				this.state = 1783;
				this.match(trinoSqlParserParser.AS);
				this.state = 1784;
				this.type_(0);
				this.state = 1785;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 24:
				{
				localctx = new ArrayConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1787;
				this.match(trinoSqlParserParser.ARRAY);
				this.state = 1788;
				this.match(trinoSqlParserParser.T__6);
				this.state = 1797;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 3751279891) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4289639607) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 3923771327) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4152344063) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 3220111343) !== 0) || ((((_la - 227)) & ~0x1F) === 0 && ((1 << (_la - 227)) & 404704629) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 2047) !== 0)) {
					{
					this.state = 1789;
					this.expression();
					this.state = 1794;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1790;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1791;
						this.expression();
						}
						}
						this.state = 1796;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1799;
				this.match(trinoSqlParserParser.T__7);
				}
				break;
			case 25:
				{
				localctx = new ColumnReferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1800;
				this.identifier();
				}
				break;
			case 26:
				{
				localctx = new SpecialDateTimeFunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1801;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParserParser.CURRENT_DATE);
				}
				break;
			case 27:
				{
				localctx = new SpecialDateTimeFunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1802;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParserParser.CURRENT_TIME);
				this.state = 1806;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 232, this._ctx) ) {
				case 1:
					{
					this.state = 1803;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1804;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(trinoSqlParserParser.INTEGER_VALUE);
					this.state = 1805;
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
				this.state = 1808;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParserParser.CURRENT_TIMESTAMP);
				this.state = 1812;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 233, this._ctx) ) {
				case 1:
					{
					this.state = 1809;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1810;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(trinoSqlParserParser.INTEGER_VALUE);
					this.state = 1811;
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
				this.state = 1814;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParserParser.LOCALTIME);
				this.state = 1818;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 234, this._ctx) ) {
				case 1:
					{
					this.state = 1815;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1816;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(trinoSqlParserParser.INTEGER_VALUE);
					this.state = 1817;
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
				this.state = 1820;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParserParser.LOCALTIMESTAMP);
				this.state = 1824;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 235, this._ctx) ) {
				case 1:
					{
					this.state = 1821;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1822;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(trinoSqlParserParser.INTEGER_VALUE);
					this.state = 1823;
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
				this.state = 1826;
				(localctx as CurrentUserContext)._name = this.match(trinoSqlParserParser.CURRENT_USER);
				}
				break;
			case 32:
				{
				localctx = new CurrentCatalogContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1827;
				(localctx as CurrentCatalogContext)._name = this.match(trinoSqlParserParser.CURRENT_CATALOG);
				}
				break;
			case 33:
				{
				localctx = new CurrentSchemaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1828;
				(localctx as CurrentSchemaContext)._name = this.match(trinoSqlParserParser.CURRENT_SCHEMA);
				}
				break;
			case 34:
				{
				localctx = new CurrentPathContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1829;
				(localctx as CurrentPathContext)._name = this.match(trinoSqlParserParser.CURRENT_PATH);
				}
				break;
			case 35:
				{
				localctx = new SubstringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1830;
				this.match(trinoSqlParserParser.SUBSTRING);
				this.state = 1831;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1832;
				this.valueExpression(0);
				this.state = 1833;
				this.match(trinoSqlParserParser.FROM);
				this.state = 1834;
				this.valueExpression(0);
				this.state = 1837;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===85) {
					{
					this.state = 1835;
					this.match(trinoSqlParserParser.FOR);
					this.state = 1836;
					this.valueExpression(0);
					}
				}

				this.state = 1839;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 36:
				{
				localctx = new NormalizeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1841;
				this.match(trinoSqlParserParser.NORMALIZE);
				this.state = 1842;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1843;
				this.valueExpression(0);
				this.state = 1846;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4) {
					{
					this.state = 1844;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1845;
					this.normalForm();
					}
				}

				this.state = 1848;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 37:
				{
				localctx = new ExtractContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1850;
				this.match(trinoSqlParserParser.EXTRACT);
				this.state = 1851;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1852;
				this.identifier();
				this.state = 1853;
				this.match(trinoSqlParserParser.FROM);
				this.state = 1854;
				this.valueExpression(0);
				this.state = 1855;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 38:
				{
				localctx = new ParenthesizedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1857;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1858;
				this.expression();
				this.state = 1859;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 39:
				{
				localctx = new GroupingOperationContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1861;
				this.match(trinoSqlParserParser.GROUPING);
				this.state = 1862;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1871;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1596214615) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 3134381375) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 3162472435) !== 0) || ((((_la - 154)) & ~0x1F) === 0 && ((1 << (_la - 154)) & 4286316499) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & 4009750519) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 525170103) !== 0) || ((((_la - 267)) & ~0x1F) === 0 && ((1 << (_la - 267)) & 15) !== 0)) {
					{
					this.state = 1863;
					this.qualifiedName();
					this.state = 1868;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1864;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1865;
						this.qualifiedName();
						}
						}
						this.state = 1870;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1873;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1886;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 242, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1884;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 241, this._ctx) ) {
					case 1:
						{
						localctx = new SubscriptContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						(localctx as SubscriptContext)._value = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_primaryExpression);
						this.state = 1876;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1877;
						this.match(trinoSqlParserParser.T__6);
						this.state = 1878;
						(localctx as SubscriptContext)._index = this.valueExpression(0);
						this.state = 1879;
						this.match(trinoSqlParserParser.T__7);
						}
						break;
					case 2:
						{
						localctx = new DereferenceContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						(localctx as DereferenceContext)._base = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_primaryExpression);
						this.state = 1881;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1882;
						this.match(trinoSqlParserParser.T__0);
						this.state = 1883;
						(localctx as DereferenceContext)._fieldName = this.identifier();
						}
						break;
					}
					}
				}
				this.state = 1888;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 242, this._ctx);
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
			this.state = 1889;
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
			this.state = 1895;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 101:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1891;
				this.match(trinoSqlParserParser.IGNORE);
				this.state = 1892;
				this.match(trinoSqlParserParser.NULLS);
				}
				break;
			case 183:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1893;
				this.match(trinoSqlParserParser.RESPECT);
				this.state = 1894;
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
			this.state = 1903;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 261:
				localctx = new BasicStringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1897;
				this.match(trinoSqlParserParser.STRING);
				}
				break;
			case 262:
				localctx = new UnicodeStringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1898;
				this.match(trinoSqlParserParser.UNICODE_STRING);
				this.state = 1901;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 244, this._ctx) ) {
				case 1:
					{
					this.state = 1899;
					this.match(trinoSqlParserParser.UESCAPE);
					this.state = 1900;
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
			this.state = 1911;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 246, this._ctx) ) {
			case 1:
				localctx = new TimeZoneIntervalContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1905;
				this.match(trinoSqlParserParser.TIME);
				this.state = 1906;
				this.match(trinoSqlParserParser.ZONE);
				this.state = 1907;
				this.interval();
				}
				break;
			case 2:
				localctx = new TimeZoneStringContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1908;
				this.match(trinoSqlParserParser.TIME);
				this.state = 1909;
				this.match(trinoSqlParserParser.ZONE);
				this.state = 1910;
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
			this.state = 1913;
			_la = this._input.LA(1);
			if(!(((((_la - 248)) & ~0x1F) === 0 && ((1 << (_la - 248)) & 63) !== 0))) {
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
			this.state = 1915;
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
			this.state = 1917;
			_la = this._input.LA(1);
			if(!(_la===79 || _la===222)) {
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
			this.state = 1919;
			this.match(trinoSqlParserParser.INTERVAL);
			this.state = 1921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===254 || _la===255) {
				{
				this.state = 1920;
				localctx._sign = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===254 || _la===255)) {
				    localctx._sign = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 1923;
			this.string_();
			this.state = 1924;
			localctx._from_ = this.intervalField();
			this.state = 1927;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 248, this._ctx) ) {
			case 1:
				{
				this.state = 1925;
				this.match(trinoSqlParserParser.TO);
				this.state = 1926;
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
			this.state = 1929;
			_la = this._input.LA(1);
			if(!(_la===58 || _la===99 || _la===135 || _la===136 || _la===196 || _la===246)) {
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
			this.state = 1931;
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
			this.state = 2024;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 259, this._ctx) ) {
			case 1:
				{
				localctx = new RowTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1934;
				this.match(trinoSqlParserParser.ROW);
				this.state = 1935;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1936;
				this.rowField();
				this.state = 1941;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1937;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1938;
					this.rowField();
					}
					}
					this.state = 1943;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1944;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 2:
				{
				localctx = new IntervalTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1946;
				this.match(trinoSqlParserParser.INTERVAL);
				this.state = 1947;
				(localctx as IntervalTypeContext)._from_ = this.intervalField();
				this.state = 1950;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 250, this._ctx) ) {
				case 1:
					{
					this.state = 1948;
					this.match(trinoSqlParserParser.TO);
					this.state = 1949;
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
				this.state = 1952;
				(localctx as DateTimeTypeContext)._base = this.match(trinoSqlParserParser.TIMESTAMP);
				this.state = 1957;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 251, this._ctx) ) {
				case 1:
					{
					this.state = 1953;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1954;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 1955;
					this.match(trinoSqlParserParser.T__2);
					}
					break;
				}
				this.state = 1962;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 252, this._ctx) ) {
				case 1:
					{
					this.state = 1959;
					this.match(trinoSqlParserParser.WITHOUT);
					this.state = 1960;
					this.match(trinoSqlParserParser.TIME);
					this.state = 1961;
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
				this.state = 1964;
				(localctx as DateTimeTypeContext)._base = this.match(trinoSqlParserParser.TIMESTAMP);
				this.state = 1969;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 1965;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1966;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 1967;
					this.match(trinoSqlParserParser.T__2);
					}
				}

				this.state = 1971;
				this.match(trinoSqlParserParser.WITH);
				this.state = 1972;
				this.match(trinoSqlParserParser.TIME);
				this.state = 1973;
				this.match(trinoSqlParserParser.ZONE);
				}
				break;
			case 5:
				{
				localctx = new DateTimeTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1974;
				(localctx as DateTimeTypeContext)._base = this.match(trinoSqlParserParser.TIME);
				this.state = 1979;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 254, this._ctx) ) {
				case 1:
					{
					this.state = 1975;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1976;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 1977;
					this.match(trinoSqlParserParser.T__2);
					}
					break;
				}
				this.state = 1984;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 255, this._ctx) ) {
				case 1:
					{
					this.state = 1981;
					this.match(trinoSqlParserParser.WITHOUT);
					this.state = 1982;
					this.match(trinoSqlParserParser.TIME);
					this.state = 1983;
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
				this.state = 1986;
				(localctx as DateTimeTypeContext)._base = this.match(trinoSqlParserParser.TIME);
				this.state = 1991;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 1987;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1988;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 1989;
					this.match(trinoSqlParserParser.T__2);
					}
				}

				this.state = 1993;
				this.match(trinoSqlParserParser.WITH);
				this.state = 1994;
				this.match(trinoSqlParserParser.TIME);
				this.state = 1995;
				this.match(trinoSqlParserParser.ZONE);
				}
				break;
			case 7:
				{
				localctx = new DoublePrecisionTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1996;
				this.match(trinoSqlParserParser.DOUBLE);
				this.state = 1997;
				this.match(trinoSqlParserParser.PRECISION);
				}
				break;
			case 8:
				{
				localctx = new LegacyArrayTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1998;
				this.match(trinoSqlParserParser.ARRAY);
				this.state = 1999;
				this.match(trinoSqlParserParser.LT);
				this.state = 2000;
				this.type_(0);
				this.state = 2001;
				this.match(trinoSqlParserParser.GT);
				}
				break;
			case 9:
				{
				localctx = new LegacyMapTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2003;
				this.match(trinoSqlParserParser.MAP);
				this.state = 2004;
				this.match(trinoSqlParserParser.LT);
				this.state = 2005;
				(localctx as LegacyMapTypeContext)._keyType = this.type_(0);
				this.state = 2006;
				this.match(trinoSqlParserParser.T__3);
				this.state = 2007;
				(localctx as LegacyMapTypeContext)._valueType = this.type_(0);
				this.state = 2008;
				this.match(trinoSqlParserParser.GT);
				}
				break;
			case 10:
				{
				localctx = new GenericTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2010;
				this.identifier();
				this.state = 2022;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 258, this._ctx) ) {
				case 1:
					{
					this.state = 2011;
					this.match(trinoSqlParserParser.T__1);
					this.state = 2012;
					this.typeParameter();
					this.state = 2017;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 2013;
						this.match(trinoSqlParserParser.T__3);
						this.state = 2014;
						this.typeParameter();
						}
						}
						this.state = 2019;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2020;
					this.match(trinoSqlParserParser.T__2);
					}
					break;
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2035;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 261, this._ctx);
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
					this.state = 2026;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 2027;
					this.match(trinoSqlParserParser.ARRAY);
					this.state = 2031;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 260, this._ctx) ) {
					case 1:
						{
						this.state = 2028;
						this.match(trinoSqlParserParser.T__6);
						this.state = 2029;
						this.match(trinoSqlParserParser.INTEGER_VALUE);
						this.state = 2030;
						this.match(trinoSqlParserParser.T__7);
						}
						break;
					}
					}
					}
				}
				this.state = 2037;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 261, this._ctx);
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
			this.state = 2042;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 262, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2038;
				this.type_(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2039;
				this.identifier();
				this.state = 2040;
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
			this.state = 2046;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 264:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2044;
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
			case 221:
			case 223:
			case 224:
			case 226:
			case 227:
			case 229:
			case 231:
			case 232:
			case 233:
			case 235:
			case 237:
			case 238:
			case 241:
			case 243:
			case 244:
			case 245:
			case 246:
			case 247:
			case 267:
			case 268:
			case 269:
			case 270:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2045;
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
			this.state = 2048;
			this.match(trinoSqlParserParser.WHEN);
			this.state = 2049;
			localctx._condition = this.expression();
			this.state = 2050;
			this.match(trinoSqlParserParser.THEN);
			this.state = 2051;
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
			this.state = 2053;
			this.match(trinoSqlParserParser.FILTER);
			this.state = 2054;
			this.match(trinoSqlParserParser.T__1);
			this.state = 2055;
			this.match(trinoSqlParserParser.WHERE);
			this.state = 2056;
			this.booleanExpression(0);
			this.state = 2057;
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
			this.state = 2123;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 271, this._ctx) ) {
			case 1:
				localctx = new MergeUpdateContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2059;
				this.match(trinoSqlParserParser.WHEN);
				this.state = 2060;
				this.match(trinoSqlParserParser.MATCHED);
				this.state = 2063;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===23) {
					{
					this.state = 2061;
					this.match(trinoSqlParserParser.AND);
					this.state = 2062;
					(localctx as MergeUpdateContext)._condition = this.expression();
					}
				}

				this.state = 2065;
				this.match(trinoSqlParserParser.THEN);
				this.state = 2066;
				this.match(trinoSqlParserParser.UPDATE);
				this.state = 2067;
				this.match(trinoSqlParserParser.SET);
				this.state = 2068;
				(localctx as MergeUpdateContext)._identifier = this.identifier();
				(localctx as MergeUpdateContext)._targets.push((localctx as MergeUpdateContext)._identifier);
				this.state = 2069;
				this.match(trinoSqlParserParser.EQ);
				this.state = 2070;
				(localctx as MergeUpdateContext)._expression = this.expression();
				(localctx as MergeUpdateContext)._values.push((localctx as MergeUpdateContext)._expression);
				this.state = 2078;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2071;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2072;
					(localctx as MergeUpdateContext)._identifier = this.identifier();
					(localctx as MergeUpdateContext)._targets.push((localctx as MergeUpdateContext)._identifier);
					this.state = 2073;
					this.match(trinoSqlParserParser.EQ);
					this.state = 2074;
					(localctx as MergeUpdateContext)._expression = this.expression();
					(localctx as MergeUpdateContext)._values.push((localctx as MergeUpdateContext)._expression);
					}
					}
					this.state = 2080;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				localctx = new MergeDeleteContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2081;
				this.match(trinoSqlParserParser.WHEN);
				this.state = 2082;
				this.match(trinoSqlParserParser.MATCHED);
				this.state = 2085;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===23) {
					{
					this.state = 2083;
					this.match(trinoSqlParserParser.AND);
					this.state = 2084;
					(localctx as MergeDeleteContext)._condition = this.expression();
					}
				}

				this.state = 2087;
				this.match(trinoSqlParserParser.THEN);
				this.state = 2088;
				this.match(trinoSqlParserParser.DELETE);
				}
				break;
			case 3:
				localctx = new MergeInsertContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2089;
				this.match(trinoSqlParserParser.WHEN);
				this.state = 2090;
				this.match(trinoSqlParserParser.NOT);
				this.state = 2091;
				this.match(trinoSqlParserParser.MATCHED);
				this.state = 2094;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===23) {
					{
					this.state = 2092;
					this.match(trinoSqlParserParser.AND);
					this.state = 2093;
					(localctx as MergeInsertContext)._condition = this.expression();
					}
				}

				this.state = 2096;
				this.match(trinoSqlParserParser.THEN);
				this.state = 2097;
				this.match(trinoSqlParserParser.INSERT);
				this.state = 2109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 2098;
					this.match(trinoSqlParserParser.T__1);
					this.state = 2099;
					(localctx as MergeInsertContext)._identifier = this.identifier();
					(localctx as MergeInsertContext)._targets.push((localctx as MergeInsertContext)._identifier);
					this.state = 2104;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 2100;
						this.match(trinoSqlParserParser.T__3);
						this.state = 2101;
						(localctx as MergeInsertContext)._identifier = this.identifier();
						(localctx as MergeInsertContext)._targets.push((localctx as MergeInsertContext)._identifier);
						}
						}
						this.state = 2106;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2107;
					this.match(trinoSqlParserParser.T__2);
					}
				}

				this.state = 2111;
				this.match(trinoSqlParserParser.VALUES);
				this.state = 2112;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2113;
				(localctx as MergeInsertContext)._expression = this.expression();
				(localctx as MergeInsertContext)._values.push((localctx as MergeInsertContext)._expression);
				this.state = 2118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2114;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2115;
					(localctx as MergeInsertContext)._expression = this.expression();
					(localctx as MergeInsertContext)._values.push((localctx as MergeInsertContext)._expression);
					}
					}
					this.state = 2120;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2121;
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
			this.state = 2125;
			this.match(trinoSqlParserParser.OVER);
			this.state = 2131;
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
			case 221:
			case 223:
			case 224:
			case 226:
			case 227:
			case 229:
			case 231:
			case 232:
			case 233:
			case 235:
			case 237:
			case 238:
			case 241:
			case 243:
			case 244:
			case 245:
			case 246:
			case 247:
			case 267:
			case 268:
			case 269:
			case 270:
				{
				this.state = 2126;
				localctx._windowName = this.identifier();
				}
				break;
			case 2:
				{
				this.state = 2127;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2128;
				this.windowSpecification();
				this.state = 2129;
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
			this.state = 2142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===133) {
				{
				this.state = 2133;
				this.match(trinoSqlParserParser.MEASURES);
				this.state = 2134;
				this.measureDefinition();
				this.state = 2139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2135;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2136;
					this.measureDefinition();
					}
					}
					this.state = 2141;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2144;
			this.frameExtent();
			this.state = 2148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 2145;
				this.match(trinoSqlParserParser.AFTER);
				this.state = 2146;
				this.match(trinoSqlParserParser.MATCH);
				this.state = 2147;
				this.skipTo();
				}
			}

			this.state = 2151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===104 || _la===198) {
				{
				this.state = 2150;
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

			this.state = 2158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===166) {
				{
				this.state = 2153;
				this.match(trinoSqlParserParser.PATTERN);
				this.state = 2154;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2155;
				this.rowPattern(0);
				this.state = 2156;
				this.match(trinoSqlParserParser.T__2);
				}
			}

			this.state = 2169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===208) {
				{
				this.state = 2160;
				this.match(trinoSqlParserParser.SUBSET);
				this.state = 2161;
				this.subsetDefinition();
				this.state = 2166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2162;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2163;
					this.subsetDefinition();
					}
					}
					this.state = 2168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===64) {
				{
				this.state = 2171;
				this.match(trinoSqlParserParser.DEFINE);
				this.state = 2172;
				this.variableDefinition();
				this.state = 2177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2173;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2174;
					this.variableDefinition();
					}
					}
					this.state = 2179;
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
			this.state = 2206;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 282, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2182;
				localctx._frameType = this.match(trinoSqlParserParser.RANGE);
				this.state = 2183;
				localctx._start = this.frameBound();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2184;
				localctx._frameType = this.match(trinoSqlParserParser.ROWS);
				this.state = 2185;
				localctx._start = this.frameBound();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2186;
				localctx._frameType = this.match(trinoSqlParserParser.GROUPS);
				this.state = 2187;
				localctx._start = this.frameBound();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2188;
				localctx._frameType = this.match(trinoSqlParserParser.RANGE);
				this.state = 2189;
				this.match(trinoSqlParserParser.BETWEEN);
				this.state = 2190;
				localctx._start = this.frameBound();
				this.state = 2191;
				this.match(trinoSqlParserParser.AND);
				this.state = 2192;
				localctx._end = this.frameBound();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2194;
				localctx._frameType = this.match(trinoSqlParserParser.ROWS);
				this.state = 2195;
				this.match(trinoSqlParserParser.BETWEEN);
				this.state = 2196;
				localctx._start = this.frameBound();
				this.state = 2197;
				this.match(trinoSqlParserParser.AND);
				this.state = 2198;
				localctx._end = this.frameBound();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2200;
				localctx._frameType = this.match(trinoSqlParserParser.GROUPS);
				this.state = 2201;
				this.match(trinoSqlParserParser.BETWEEN);
				this.state = 2202;
				localctx._start = this.frameBound();
				this.state = 2203;
				this.match(trinoSqlParserParser.AND);
				this.state = 2204;
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
			this.state = 2217;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 283, this._ctx) ) {
			case 1:
				localctx = new UnboundedFrameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2208;
				this.match(trinoSqlParserParser.UNBOUNDED);
				this.state = 2209;
				(localctx as UnboundedFrameContext)._boundType = this.match(trinoSqlParserParser.PRECEDING);
				}
				break;
			case 2:
				localctx = new UnboundedFrameContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2210;
				this.match(trinoSqlParserParser.UNBOUNDED);
				this.state = 2211;
				(localctx as UnboundedFrameContext)._boundType = this.match(trinoSqlParserParser.FOLLOWING);
				}
				break;
			case 3:
				localctx = new CurrentRowBoundContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2212;
				this.match(trinoSqlParserParser.CURRENT);
				this.state = 2213;
				this.match(trinoSqlParserParser.ROW);
				}
				break;
			case 4:
				localctx = new BoundedFrameContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2214;
				this.expression();
				this.state = 2215;
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

			this.state = 2220;
			this.patternPrimary();
			this.state = 2222;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 284, this._ctx) ) {
			case 1:
				{
				this.state = 2221;
				this.patternQuantifier();
				}
				break;
			}
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2231;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 286, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2229;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 285, this._ctx) ) {
					case 1:
						{
						localctx = new PatternConcatenationContext(this, new RowPatternContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_rowPattern);
						this.state = 2224;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2225;
						this.rowPattern(3);
						}
						break;
					case 2:
						{
						localctx = new PatternAlternationContext(this, new RowPatternContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_rowPattern);
						this.state = 2226;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2227;
						this.match(trinoSqlParserParser.T__8);
						this.state = 2228;
						this.rowPattern(2);
						}
						break;
					}
					}
				}
				this.state = 2233;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 286, this._ctx);
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
			this.state = 2259;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 288, this._ctx) ) {
			case 1:
				localctx = new PatternVariableContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2234;
				this.identifier();
				}
				break;
			case 2:
				localctx = new EmptyPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2235;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2236;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 3:
				localctx = new PatternPermutationContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2237;
				this.match(trinoSqlParserParser.PERMUTE);
				this.state = 2238;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2239;
				this.rowPattern(0);
				this.state = 2244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2240;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2241;
					this.rowPattern(0);
					}
					}
					this.state = 2246;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2247;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 4:
				localctx = new GroupedPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2249;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2250;
				this.rowPattern(0);
				this.state = 2251;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 5:
				localctx = new PartitionStartAnchorContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2253;
				this.match(trinoSqlParserParser.T__9);
				}
				break;
			case 6:
				localctx = new PartitionEndAnchorContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2254;
				this.match(trinoSqlParserParser.T__10);
				}
				break;
			case 7:
				localctx = new ExcludedPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2255;
				this.match(trinoSqlParserParser.T__11);
				this.state = 2256;
				this.rowPattern(0);
				this.state = 2257;
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
			this.state = 2291;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 296, this._ctx) ) {
			case 1:
				localctx = new ZeroOrMoreQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2261;
				this.match(trinoSqlParserParser.ASTERISK);
				this.state = 2263;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 289, this._ctx) ) {
				case 1:
					{
					this.state = 2262;
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
				this.state = 2265;
				this.match(trinoSqlParserParser.PLUS);
				this.state = 2267;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 290, this._ctx) ) {
				case 1:
					{
					this.state = 2266;
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
				this.state = 2269;
				this.match(trinoSqlParserParser.QUESTION_MARK);
				this.state = 2271;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 291, this._ctx) ) {
				case 1:
					{
					this.state = 2270;
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
				this.state = 2273;
				this.match(trinoSqlParserParser.T__13);
				this.state = 2274;
				(localctx as RangeQuantifierContext)._exactly = this.match(trinoSqlParserParser.INTEGER_VALUE);
				this.state = 2275;
				this.match(trinoSqlParserParser.T__14);
				this.state = 2277;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 292, this._ctx) ) {
				case 1:
					{
					this.state = 2276;
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
				this.state = 2279;
				this.match(trinoSqlParserParser.T__13);
				this.state = 2281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===264) {
					{
					this.state = 2280;
					(localctx as RangeQuantifierContext)._atLeast = this.match(trinoSqlParserParser.INTEGER_VALUE);
					}
				}

				this.state = 2283;
				this.match(trinoSqlParserParser.T__3);
				this.state = 2285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===264) {
					{
					this.state = 2284;
					(localctx as RangeQuantifierContext)._atMost = this.match(trinoSqlParserParser.INTEGER_VALUE);
					}
				}

				this.state = 2287;
				this.match(trinoSqlParserParser.T__14);
				this.state = 2289;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 295, this._ctx) ) {
				case 1:
					{
					this.state = 2288;
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
			this.state = 2293;
			this.identifier();
			this.state = 2294;
			this.match(trinoSqlParserParser.EQ);
			this.state = 2295;
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
			this.state = 2301;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				localctx = new ExplainFormatContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2297;
				this.match(trinoSqlParserParser.FORMAT);
				this.state = 2298;
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
			case 224:
				localctx = new ExplainTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2299;
				this.match(trinoSqlParserParser.TYPE);
				this.state = 2300;
				(localctx as ExplainTypeContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===66 || _la===112 || _la===126 || _la===235)) {
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
			this.state = 2308;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 114:
				localctx = new IsolationLevelContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2303;
				this.match(trinoSqlParserParser.ISOLATION);
				this.state = 2304;
				this.match(trinoSqlParserParser.LEVEL);
				this.state = 2305;
				this.levelOfIsolation();
				}
				break;
			case 176:
				localctx = new TransactionAccessModeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2306;
				this.match(trinoSqlParserParser.READ);
				this.state = 2307;
				(localctx as TransactionAccessModeContext)._accessMode = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===154 || _la===245)) {
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
			this.state = 2317;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 299, this._ctx) ) {
			case 1:
				localctx = new ReadUncommittedContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2310;
				this.match(trinoSqlParserParser.READ);
				this.state = 2311;
				this.match(trinoSqlParserParser.UNCOMMITTED);
				}
				break;
			case 2:
				localctx = new ReadCommittedContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2312;
				this.match(trinoSqlParserParser.READ);
				this.state = 2313;
				this.match(trinoSqlParserParser.COMMITTED);
				}
				break;
			case 3:
				localctx = new RepeatableReadContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2314;
				this.match(trinoSqlParserParser.REPEATABLE);
				this.state = 2315;
				this.match(trinoSqlParserParser.READ);
				}
				break;
			case 4:
				localctx = new SerializableContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2316;
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
			this.state = 2324;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 300, this._ctx) ) {
			case 1:
				localctx = new PositionalArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2319;
				this.expression();
				}
				break;
			case 2:
				localctx = new NamedArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2320;
				this.identifier();
				this.state = 2321;
				this.match(trinoSqlParserParser.T__15);
				this.state = 2322;
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
			this.state = 2331;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 301, this._ctx) ) {
			case 1:
				localctx = new QualifiedArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2326;
				this.identifier();
				this.state = 2327;
				this.match(trinoSqlParserParser.T__0);
				this.state = 2328;
				this.identifier();
				}
				break;
			case 2:
				localctx = new UnqualifiedArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2330;
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
			this.state = 2333;
			this.pathElement();
			this.state = 2338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 2334;
				this.match(trinoSqlParserParser.T__3);
				this.state = 2335;
				this.pathElement();
				}
				}
				this.state = 2340;
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
			this.state = 2341;
			_la = this._input.LA(1);
			if(!(_la===61 || _la===107 || _la===199 || _la===231)) {
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
			this.state = 2343;
			this.identifier();
			this.state = 2348;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 303, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2344;
					this.match(trinoSqlParserParser.T__0);
					this.state = 2345;
					this.identifier();
					}
					}
				}
				this.state = 2350;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 303, this._ctx);
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
			this.state = 2354;
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
			case 221:
			case 223:
			case 224:
			case 226:
			case 227:
			case 229:
			case 231:
			case 232:
			case 233:
			case 235:
			case 237:
			case 238:
			case 241:
			case 243:
			case 244:
			case 245:
			case 246:
			case 247:
			case 267:
			case 268:
			case 269:
			case 270:
				localctx = new SpecifiedPrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2351;
				this.principal();
				}
				break;
			case 55:
				localctx = new CurrentUserGrantorContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2352;
				this.match(trinoSqlParserParser.CURRENT_USER);
				}
				break;
			case 51:
				localctx = new CurrentRoleGrantorContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2353;
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
			this.state = 2361;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 305, this._ctx) ) {
			case 1:
				localctx = new UnspecifiedPrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2356;
				this.identifier();
				}
				break;
			case 2:
				localctx = new UserPrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2357;
				this.match(trinoSqlParserParser.USER);
				this.state = 2358;
				this.identifier();
				}
				break;
			case 3:
				localctx = new RolePrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2359;
				this.match(trinoSqlParserParser.ROLE);
				this.state = 2360;
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
			this.state = 2363;
			this.identifier();
			this.state = 2368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 2364;
				this.match(trinoSqlParserParser.T__3);
				this.state = 2365;
				this.identifier();
				}
				}
				this.state = 2370;
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
			this.state = 2376;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 267:
				localctx = new UnquotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2371;
				this.match(trinoSqlParserParser.IDENTIFIER);
				}
				break;
			case 269:
				localctx = new QuotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2372;
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
			case 221:
			case 223:
			case 224:
			case 226:
			case 227:
			case 229:
			case 231:
			case 232:
			case 233:
			case 235:
			case 237:
			case 238:
			case 241:
			case 243:
			case 244:
			case 245:
			case 246:
			case 247:
				localctx = new UnquotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2373;
				this.nonReserved();
				}
				break;
			case 270:
				localctx = new BackQuotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2374;
				this.match(trinoSqlParserParser.BACKQUOTED_IDENTIFIER);
				}
				break;
			case 268:
				localctx = new DigitIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2375;
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
			this.state = 2390;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 311, this._ctx) ) {
			case 1:
				localctx = new DecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===255) {
					{
					this.state = 2378;
					this.match(trinoSqlParserParser.MINUS);
					}
				}

				this.state = 2381;
				this.match(trinoSqlParserParser.DECIMAL_VALUE);
				}
				break;
			case 2:
				localctx = new DoubleLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===255) {
					{
					this.state = 2382;
					this.match(trinoSqlParserParser.MINUS);
					}
				}

				this.state = 2385;
				this.match(trinoSqlParserParser.DOUBLE_VALUE);
				}
				break;
			case 3:
				localctx = new IntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===255) {
					{
					this.state = 2386;
					this.match(trinoSqlParserParser.MINUS);
					}
				}

				this.state = 2389;
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
			this.state = 2392;
			_la = this._input.LA(1);
			if(!(((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1596214615) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 3134381375) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 3162472435) !== 0) || ((((_la - 154)) & ~0x1F) === 0 && ((1 << (_la - 154)) & 4286316499) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & 4009750519) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 525170103) !== 0))) {
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

	public static readonly _serializedATN: number[] = [4,1,276,2395,2,0,7,0,
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
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,344,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,3,7,358,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,367,8,7,1,7,
	1,7,1,7,1,7,3,7,373,8,7,1,7,1,7,1,7,1,7,1,7,3,7,380,8,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,3,7,390,8,7,1,7,1,7,1,7,1,7,1,7,3,7,397,8,7,1,7,1,7,1,7,
	1,7,1,7,1,7,3,7,405,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,413,8,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,428,8,7,1,7,1,7,1,7,3,7,433,
	8,7,1,7,1,7,1,7,1,7,1,7,3,7,440,8,7,1,7,1,7,1,7,3,7,445,8,7,1,7,1,7,3,7,
	449,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,457,8,7,1,7,1,7,1,7,1,7,3,7,463,8,7,
	1,7,1,7,3,7,467,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,
	481,8,7,1,7,1,7,1,7,1,7,1,7,3,7,488,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,511,8,7,10,7,12,
	7,514,9,7,3,7,516,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,526,8,7,1,7,1,
	7,3,7,530,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,541,8,7,10,7,12,7,
	544,9,7,1,7,1,7,1,7,3,7,549,8,7,1,7,1,7,1,7,3,7,554,8,7,1,7,1,7,3,7,558,
	8,7,1,7,1,7,1,7,1,7,3,7,564,8,7,1,7,1,7,1,7,1,7,1,7,5,7,571,8,7,10,7,12,
	7,574,9,7,1,7,1,7,1,7,3,7,579,8,7,1,7,1,7,3,7,583,8,7,1,7,1,7,1,7,1,7,1,
	7,3,7,590,8,7,1,7,1,7,1,7,1,7,5,7,596,8,7,10,7,12,7,599,9,7,1,7,1,7,3,7,
	603,8,7,1,7,1,7,3,7,607,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,615,8,7,1,7,1,7,
	1,7,1,7,5,7,621,8,7,10,7,12,7,624,9,7,1,7,1,7,3,7,628,8,7,1,7,1,7,3,7,632,
	8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,642,8,7,1,7,1,7,1,7,5,7,647,8,7,
	10,7,12,7,650,9,7,1,7,1,7,3,7,654,8,7,1,7,1,7,3,7,658,8,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,3,7,668,8,7,1,7,3,7,671,8,7,1,7,1,7,3,7,675,8,7,1,7,3,
	7,678,8,7,1,7,1,7,1,7,1,7,5,7,684,8,7,10,7,12,7,687,9,7,1,7,1,7,3,7,691,
	8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,3,7,715,8,7,1,7,1,7,1,7,1,7,3,7,721,8,7,3,7,723,8,7,
	1,7,1,7,1,7,1,7,3,7,729,8,7,1,7,1,7,1,7,1,7,3,7,735,8,7,3,7,737,8,7,1,7,
	1,7,1,7,1,7,1,7,1,7,3,7,745,8,7,3,7,747,8,7,1,7,1,7,1,7,1,7,3,7,753,8,7,
	1,7,1,7,1,7,1,7,3,7,759,8,7,3,7,761,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,3,7,776,8,7,1,7,1,7,1,7,3,7,781,8,7,1,7,1,7,1,7,1,7,
	1,7,3,7,788,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,800,8,7,3,7,
	802,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,810,8,7,3,7,812,8,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,828,8,7,10,7,12,7,831,9,7,3,
	7,833,8,7,1,7,1,7,3,7,837,8,7,1,7,1,7,3,7,841,8,7,1,7,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,857,8,7,10,7,12,7,860,9,7,3,7,862,
	8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,878,8,7,
	1,7,1,7,1,7,1,7,1,7,1,7,5,7,886,8,7,10,7,12,7,889,9,7,1,7,1,7,3,7,893,8,
	7,1,7,1,7,1,7,1,7,3,7,899,8,7,1,7,3,7,902,8,7,1,7,1,7,1,7,1,7,1,7,4,7,909,
	8,7,11,7,12,7,910,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,923,8,7,1,
	8,3,8,926,8,8,1,8,1,8,1,9,1,9,3,9,932,8,9,1,9,1,9,1,9,5,9,937,8,9,10,9,
	12,9,940,9,9,1,10,1,10,3,10,944,8,10,1,11,1,11,1,11,1,11,3,11,950,8,11,
	1,11,1,11,3,11,954,8,11,1,11,1,11,3,11,958,8,11,1,12,1,12,1,12,1,12,3,12,
	964,8,12,1,13,1,13,1,13,1,13,5,13,970,8,13,10,13,12,13,973,9,13,1,13,1,
	13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,5,15,987,8,15,10,15,
	12,15,990,9,15,3,15,992,8,15,1,15,1,15,1,15,3,15,997,8,15,3,15,999,8,15,
	1,15,1,15,1,15,1,15,1,15,3,15,1006,8,15,1,15,1,15,1,15,1,15,3,15,1012,8,
	15,3,15,1014,8,15,1,16,1,16,3,16,1018,8,16,1,17,1,17,1,18,1,18,1,18,1,18,
	1,18,1,18,3,18,1028,8,18,1,18,1,18,1,18,1,18,3,18,1034,8,18,1,18,5,18,1037,
	8,18,10,18,12,18,1040,9,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,5,19,1049,
	8,19,10,19,12,19,1052,9,19,1,19,1,19,1,19,1,19,3,19,1058,8,19,1,20,1,20,
	3,20,1062,8,20,1,20,1,20,3,20,1066,8,20,1,21,1,21,3,21,1070,8,21,1,21,1,
	21,1,21,5,21,1075,8,21,10,21,12,21,1078,9,21,1,21,1,21,1,21,1,21,5,21,1084,
	8,21,10,21,12,21,1087,9,21,3,21,1089,8,21,1,21,1,21,3,21,1093,8,21,1,21,
	1,21,1,21,3,21,1098,8,21,1,21,1,21,3,21,1102,8,21,1,21,1,21,1,21,1,21,5,
	21,1108,8,21,10,21,12,21,1111,9,21,3,21,1113,8,21,1,22,3,22,1116,8,22,1,
	22,1,22,1,22,5,22,1121,8,22,10,22,12,22,1124,9,22,1,23,1,23,1,23,1,23,1,
	23,1,23,5,23,1132,8,23,10,23,12,23,1135,9,23,3,23,1137,8,23,1,23,1,23,1,
	23,1,23,1,23,1,23,5,23,1145,8,23,10,23,12,23,1148,9,23,3,23,1150,8,23,1,
	23,1,23,1,23,1,23,1,23,1,23,1,23,5,23,1159,8,23,10,23,12,23,1162,9,23,1,
	23,1,23,3,23,1166,8,23,1,24,1,24,1,24,1,24,5,24,1172,8,24,10,24,12,24,1175,
	9,24,3,24,1177,8,24,1,24,1,24,3,24,1181,8,24,1,25,1,25,1,25,1,25,1,25,1,
	25,1,26,3,26,1190,8,26,1,26,1,26,1,26,1,26,1,26,5,26,1197,8,26,10,26,12,
	26,1200,9,26,3,26,1202,8,26,1,26,1,26,1,26,1,26,1,26,5,26,1209,8,26,10,
	26,12,26,1212,9,26,3,26,1214,8,26,1,26,3,26,1217,8,26,1,27,1,27,3,27,1221,
	8,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,29,1,29,3,29,1232,8,29,1,29,3,
	29,1235,8,29,1,29,1,29,1,29,1,29,1,29,3,29,1242,8,29,1,29,3,29,1245,8,29,
	1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
	30,1,30,1,30,3,30,1264,8,30,5,30,1266,8,30,10,30,12,30,1269,9,30,1,31,3,
	31,1272,8,31,1,31,1,31,3,31,1276,8,31,1,31,1,31,3,31,1280,8,31,1,31,1,31,
	3,31,1284,8,31,3,31,1286,8,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,5,32,1295,
	8,32,10,32,12,32,1298,9,32,1,32,1,32,3,32,1302,8,32,1,33,1,33,1,33,1,33,
	1,33,1,33,1,33,3,33,1311,8,33,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,
	35,1,35,5,35,1323,8,35,10,35,12,35,1326,9,35,3,35,1328,8,35,1,35,1,35,1,
	35,1,35,1,35,5,35,1335,8,35,10,35,12,35,1338,9,35,3,35,1340,8,35,1,35,1,
	35,1,35,1,35,5,35,1346,8,35,10,35,12,35,1349,9,35,3,35,1351,8,35,1,35,3,
	35,1354,8,35,1,35,1,35,1,35,3,35,1359,8,35,1,35,3,35,1362,8,35,1,35,1,35,
	1,35,1,35,1,35,1,35,1,35,1,35,5,35,1372,8,35,10,35,12,35,1375,9,35,3,35,
	1377,8,35,1,35,1,35,1,35,1,35,5,35,1383,8,35,10,35,12,35,1386,9,35,1,35,
	1,35,3,35,1390,8,35,1,35,1,35,3,35,1394,8,35,3,35,1396,8,35,3,35,1398,8,
	35,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,
	1413,8,37,3,37,1415,8,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,3,
	38,1426,8,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,
	1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,1447,8,39,1,40,1,40,1,40,1,40,1,
	40,1,40,5,40,1455,8,40,10,40,12,40,1458,9,40,1,40,1,40,1,41,1,41,1,41,1,
	41,1,42,1,42,3,42,1468,8,42,1,42,1,42,3,42,1472,8,42,3,42,1474,8,42,1,43,
	1,43,1,43,1,43,5,43,1480,8,43,10,43,12,43,1483,9,43,1,43,1,43,1,44,1,44,
	1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,5,44,1497,8,44,10,44,12,44,1500,
	9,44,1,44,1,44,1,44,3,44,1505,8,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,
	44,1,44,3,44,1516,8,44,1,45,1,45,1,46,1,46,1,46,3,46,1523,8,46,1,46,1,46,
	3,46,1527,8,46,1,46,1,46,1,46,1,46,1,46,1,46,5,46,1535,8,46,10,46,12,46,
	1538,9,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,1550,8,
	47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,1558,8,47,1,47,1,47,1,47,1,47,1,47,
	5,47,1565,8,47,10,47,12,47,1568,9,47,1,47,1,47,1,47,3,47,1573,8,47,1,47,
	1,47,1,47,1,47,1,47,1,47,3,47,1581,8,47,1,47,1,47,1,47,1,47,3,47,1587,8,
	47,1,47,1,47,3,47,1591,8,47,1,47,1,47,1,47,3,47,1596,8,47,1,47,1,47,1,47,
	3,47,1601,8,47,1,48,1,48,1,48,1,48,3,48,1607,8,48,1,48,1,48,1,48,1,48,1,
	48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,5,48,1621,8,48,10,48,12,48,1624,9,
	48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,
	1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,4,49,1651,8,49,11,
	49,12,49,1652,1,49,1,49,1,49,1,49,1,49,1,49,1,49,5,49,1662,8,49,10,49,12,
	49,1665,9,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,1674,8,49,1,49,3,49,
	1677,8,49,1,49,3,49,1680,8,49,1,49,1,49,1,49,3,49,1685,8,49,1,49,1,49,1,
	49,5,49,1690,8,49,10,49,12,49,1693,9,49,3,49,1695,8,49,1,49,1,49,1,49,1,
	49,1,49,5,49,1702,8,49,10,49,12,49,1705,9,49,3,49,1707,8,49,1,49,1,49,3,
	49,1711,8,49,1,49,3,49,1714,8,49,1,49,3,49,1717,8,49,1,49,1,49,1,49,1,49,
	1,49,1,49,1,49,1,49,1,49,1,49,1,49,5,49,1730,8,49,10,49,12,49,1733,9,49,
	3,49,1735,8,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
	49,1,49,1,49,1,49,4,49,1752,8,49,11,49,12,49,1753,1,49,1,49,3,49,1758,8,
	49,1,49,1,49,1,49,1,49,4,49,1764,8,49,11,49,12,49,1765,1,49,1,49,3,49,1770,
	8,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
	49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,5,49,1793,8,49,10,49,12,49,1796,9,
	49,3,49,1798,8,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,1807,8,49,1,49,
	1,49,1,49,1,49,3,49,1813,8,49,1,49,1,49,1,49,1,49,3,49,1819,8,49,1,49,1,
	49,1,49,1,49,3,49,1825,8,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,
	1,49,1,49,3,49,1838,8,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,1847,8,
	49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,
	1,49,1,49,1,49,1,49,5,49,1867,8,49,10,49,12,49,1870,9,49,3,49,1872,8,49,
	1,49,3,49,1875,8,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,5,49,1885,8,
	49,10,49,12,49,1888,9,49,1,50,1,50,1,51,1,51,1,51,1,51,3,51,1896,8,51,1,
	52,1,52,1,52,1,52,3,52,1902,8,52,3,52,1904,8,52,1,53,1,53,1,53,1,53,1,53,
	1,53,3,53,1912,8,53,1,54,1,54,1,55,1,55,1,56,1,56,1,57,1,57,3,57,1922,8,
	57,1,57,1,57,1,57,1,57,3,57,1928,8,57,1,58,1,58,1,59,1,59,1,60,1,60,1,60,
	1,60,1,60,1,60,5,60,1940,8,60,10,60,12,60,1943,9,60,1,60,1,60,1,60,1,60,
	1,60,1,60,3,60,1951,8,60,1,60,1,60,1,60,1,60,1,60,3,60,1958,8,60,1,60,1,
	60,1,60,3,60,1963,8,60,1,60,1,60,1,60,1,60,1,60,3,60,1970,8,60,1,60,1,60,
	1,60,1,60,1,60,1,60,1,60,1,60,3,60,1980,8,60,1,60,1,60,1,60,3,60,1985,8,
	60,1,60,1,60,1,60,1,60,1,60,3,60,1992,8,60,1,60,1,60,1,60,1,60,1,60,1,60,
	1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,
	60,1,60,5,60,2016,8,60,10,60,12,60,2019,9,60,1,60,1,60,3,60,2023,8,60,3,
	60,2025,8,60,1,60,1,60,1,60,1,60,1,60,3,60,2032,8,60,5,60,2034,8,60,10,
	60,12,60,2037,9,60,1,61,1,61,1,61,1,61,3,61,2043,8,61,1,62,1,62,3,62,2047,
	8,62,1,63,1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,
	65,1,65,3,65,2064,8,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,
	1,65,5,65,2077,8,65,10,65,12,65,2080,9,65,1,65,1,65,1,65,1,65,3,65,2086,
	8,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,3,65,2095,8,65,1,65,1,65,1,65,1,
	65,1,65,1,65,5,65,2103,8,65,10,65,12,65,2106,9,65,1,65,1,65,3,65,2110,8,
	65,1,65,1,65,1,65,1,65,1,65,5,65,2117,8,65,10,65,12,65,2120,9,65,1,65,1,
	65,3,65,2124,8,65,1,66,1,66,1,66,1,66,1,66,1,66,3,66,2132,8,66,1,67,1,67,
	1,67,1,67,5,67,2138,8,67,10,67,12,67,2141,9,67,3,67,2143,8,67,1,67,1,67,
	1,67,1,67,3,67,2149,8,67,1,67,3,67,2152,8,67,1,67,1,67,1,67,1,67,1,67,3,
	67,2159,8,67,1,67,1,67,1,67,1,67,5,67,2165,8,67,10,67,12,67,2168,9,67,3,
	67,2170,8,67,1,67,1,67,1,67,1,67,5,67,2176,8,67,10,67,12,67,2179,9,67,3,
	67,2181,8,67,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,
	1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,3,68,2207,8,
	68,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,3,69,2218,8,69,1,70,1,70,
	1,70,3,70,2223,8,70,1,70,1,70,1,70,1,70,1,70,5,70,2230,8,70,10,70,12,70,
	2233,9,70,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,5,71,2243,8,71,10,71,
	12,71,2246,9,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,
	1,71,3,71,2260,8,71,1,72,1,72,3,72,2264,8,72,1,72,1,72,3,72,2268,8,72,1,
	72,1,72,3,72,2272,8,72,1,72,1,72,1,72,1,72,3,72,2278,8,72,1,72,1,72,3,72,
	2282,8,72,1,72,1,72,3,72,2286,8,72,1,72,1,72,3,72,2290,8,72,3,72,2292,8,
	72,1,73,1,73,1,73,1,73,1,74,1,74,1,74,1,74,3,74,2302,8,74,1,75,1,75,1,75,
	1,75,1,75,3,75,2309,8,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,3,76,2318,8,
	76,1,77,1,77,1,77,1,77,1,77,3,77,2325,8,77,1,78,1,78,1,78,1,78,1,78,3,78,
	2332,8,78,1,79,1,79,1,79,5,79,2337,8,79,10,79,12,79,2340,9,79,1,80,1,80,
	1,81,1,81,1,81,5,81,2347,8,81,10,81,12,81,2350,9,81,1,82,1,82,1,82,3,82,
	2355,8,82,1,83,1,83,1,83,1,83,1,83,3,83,2362,8,83,1,84,1,84,1,84,5,84,2367,
	8,84,10,84,12,84,2370,9,84,1,85,1,85,1,85,1,85,1,85,3,85,2377,8,85,1,86,
	3,86,2380,8,86,1,86,1,86,3,86,2384,8,86,1,86,1,86,3,86,2388,8,86,1,86,3,
	86,2391,8,86,1,87,1,87,1,87,0,7,36,60,92,96,98,120,140,88,0,2,4,6,8,10,
	12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
	60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,
	106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,
	142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,0,28,
	2,0,34,34,184,184,2,0,60,60,111,111,2,0,194,194,211,211,2,0,87,87,102,102,
	2,0,74,74,103,103,1,0,191,192,2,0,83,83,138,138,2,0,260,260,264,264,2,0,
	73,73,228,228,2,0,27,27,62,62,2,0,83,83,117,117,2,0,20,20,65,65,2,0,30,
	30,210,210,2,0,104,104,198,198,1,0,254,255,1,0,256,258,2,0,82,82,193,193,
	1,0,248,253,3,0,20,20,24,24,205,205,2,0,79,79,222,222,5,0,58,58,99,99,135,
	136,196,196,246,246,1,0,139,142,2,0,84,84,170,170,3,0,94,94,116,116,214,
	214,4,0,66,66,112,112,126,126,235,235,2,0,154,154,245,245,4,0,61,61,107,
	107,199,199,231,231,49,0,17,20,22,22,24,25,27,30,33,34,37,42,47,47,56,58,
	60,60,62,62,64,64,66,67,70,70,74,74,77,77,80,84,86,86,89,94,97,97,99,101,
	103,104,106,106,109,109,111,112,114,114,116,118,120,120,122,123,126,136,
	138,144,148,151,153,155,158,158,160,171,173,176,178,185,187,189,191,198,
	200,210,212,214,216,221,223,224,226,227,229,229,231,233,235,235,237,238,
	241,241,243,247,2783,0,179,1,0,0,0,2,189,1,0,0,0,4,191,1,0,0,0,6,194,1,
	0,0,0,8,197,1,0,0,0,10,200,1,0,0,0,12,203,1,0,0,0,14,922,1,0,0,0,16,925,
	1,0,0,0,18,929,1,0,0,0,20,943,1,0,0,0,22,945,1,0,0,0,24,959,1,0,0,0,26,
	965,1,0,0,0,28,976,1,0,0,0,30,980,1,0,0,0,32,1017,1,0,0,0,34,1019,1,0,0,
	0,36,1021,1,0,0,0,38,1057,1,0,0,0,40,1059,1,0,0,0,42,1067,1,0,0,0,44,1115,
	1,0,0,0,46,1165,1,0,0,0,48,1180,1,0,0,0,50,1182,1,0,0,0,52,1189,1,0,0,0,
	54,1218,1,0,0,0,56,1227,1,0,0,0,58,1244,1,0,0,0,60,1246,1,0,0,0,62,1285,
	1,0,0,0,64,1301,1,0,0,0,66,1303,1,0,0,0,68,1312,1,0,0,0,70,1314,1,0,0,0,
	72,1399,1,0,0,0,74,1414,1,0,0,0,76,1425,1,0,0,0,78,1446,1,0,0,0,80,1448,
	1,0,0,0,82,1461,1,0,0,0,84,1465,1,0,0,0,86,1475,1,0,0,0,88,1515,1,0,0,0,
	90,1517,1,0,0,0,92,1526,1,0,0,0,94,1600,1,0,0,0,96,1606,1,0,0,0,98,1874,
	1,0,0,0,100,1889,1,0,0,0,102,1895,1,0,0,0,104,1903,1,0,0,0,106,1911,1,0,
	0,0,108,1913,1,0,0,0,110,1915,1,0,0,0,112,1917,1,0,0,0,114,1919,1,0,0,0,
	116,1929,1,0,0,0,118,1931,1,0,0,0,120,2024,1,0,0,0,122,2042,1,0,0,0,124,
	2046,1,0,0,0,126,2048,1,0,0,0,128,2053,1,0,0,0,130,2123,1,0,0,0,132,2125,
	1,0,0,0,134,2142,1,0,0,0,136,2206,1,0,0,0,138,2217,1,0,0,0,140,2219,1,0,
	0,0,142,2259,1,0,0,0,144,2291,1,0,0,0,146,2293,1,0,0,0,148,2301,1,0,0,0,
	150,2308,1,0,0,0,152,2317,1,0,0,0,154,2324,1,0,0,0,156,2331,1,0,0,0,158,
	2333,1,0,0,0,160,2341,1,0,0,0,162,2343,1,0,0,0,164,2354,1,0,0,0,166,2361,
	1,0,0,0,168,2363,1,0,0,0,170,2376,1,0,0,0,172,2390,1,0,0,0,174,2392,1,0,
	0,0,176,178,3,2,1,0,177,176,1,0,0,0,178,181,1,0,0,0,179,177,1,0,0,0,179,
	180,1,0,0,0,180,182,1,0,0,0,181,179,1,0,0,0,182,183,5,0,0,1,183,1,1,0,0,
	0,184,190,3,4,2,0,185,190,3,6,3,0,186,190,3,8,4,0,187,190,3,10,5,0,188,
	190,3,12,6,0,189,184,1,0,0,0,189,185,1,0,0,0,189,186,1,0,0,0,189,187,1,
	0,0,0,189,188,1,0,0,0,190,3,1,0,0,0,191,192,3,14,7,0,192,193,5,271,0,0,
	193,5,1,0,0,0,194,195,3,90,45,0,195,196,5,271,0,0,196,7,1,0,0,0,197,198,
	3,158,79,0,198,199,5,271,0,0,199,9,1,0,0,0,200,201,3,120,60,0,201,202,5,
	271,0,0,202,11,1,0,0,0,203,204,3,140,70,0,204,205,5,271,0,0,205,13,1,0,
	0,0,206,923,3,16,8,0,207,208,5,232,0,0,208,923,3,170,85,0,209,210,5,232,
	0,0,210,211,3,170,85,0,211,212,5,1,0,0,212,213,3,170,85,0,213,923,1,0,0,
	0,214,215,5,44,0,0,215,219,5,194,0,0,216,217,5,100,0,0,217,218,5,146,0,
	0,218,220,5,76,0,0,219,216,1,0,0,0,219,220,1,0,0,0,220,221,1,0,0,0,221,
	224,3,162,81,0,222,223,5,29,0,0,223,225,3,166,83,0,224,222,1,0,0,0,224,
	225,1,0,0,0,225,228,1,0,0,0,226,227,5,242,0,0,227,229,3,26,13,0,228,226,
	1,0,0,0,228,229,1,0,0,0,229,923,1,0,0,0,230,231,5,68,0,0,231,234,5,194,
	0,0,232,233,5,100,0,0,233,235,5,76,0,0,234,232,1,0,0,0,234,235,1,0,0,0,
	235,236,1,0,0,0,236,238,3,162,81,0,237,239,7,0,0,0,238,237,1,0,0,0,238,
	239,1,0,0,0,239,923,1,0,0,0,240,241,5,21,0,0,241,242,5,194,0,0,242,243,
	3,162,81,0,243,244,5,179,0,0,244,245,5,219,0,0,245,246,3,170,85,0,246,923,
	1,0,0,0,247,248,5,21,0,0,248,249,5,194,0,0,249,250,3,162,81,0,250,251,5,
	202,0,0,251,252,5,29,0,0,252,253,3,166,83,0,253,923,1,0,0,0,254,255,5,44,
	0,0,255,259,5,211,0,0,256,257,5,100,0,0,257,258,5,146,0,0,258,260,5,76,
	0,0,259,256,1,0,0,0,259,260,1,0,0,0,260,261,1,0,0,0,261,263,3,162,81,0,
	262,264,3,86,43,0,263,262,1,0,0,0,263,264,1,0,0,0,264,267,1,0,0,0,265,266,
	5,40,0,0,266,268,3,104,52,0,267,265,1,0,0,0,267,268,1,0,0,0,268,271,1,0,
	0,0,269,270,5,242,0,0,270,272,3,26,13,0,271,269,1,0,0,0,271,272,1,0,0,0,
	272,273,1,0,0,0,273,279,5,26,0,0,274,280,3,16,8,0,275,276,5,2,0,0,276,277,
	3,16,8,0,277,278,5,3,0,0,278,280,1,0,0,0,279,274,1,0,0,0,279,275,1,0,0,
	0,280,286,1,0,0,0,281,283,5,242,0,0,282,284,5,143,0,0,283,282,1,0,0,0,283,
	284,1,0,0,0,284,285,1,0,0,0,285,287,5,56,0,0,286,281,1,0,0,0,286,287,1,
	0,0,0,287,923,1,0,0,0,288,289,5,44,0,0,289,293,5,211,0,0,290,291,5,100,
	0,0,291,292,5,146,0,0,292,294,5,76,0,0,293,290,1,0,0,0,293,294,1,0,0,0,
	294,295,1,0,0,0,295,296,3,162,81,0,296,297,5,2,0,0,297,302,3,20,10,0,298,
	299,5,4,0,0,299,301,3,20,10,0,300,298,1,0,0,0,301,304,1,0,0,0,302,300,1,
	0,0,0,302,303,1,0,0,0,303,305,1,0,0,0,304,302,1,0,0,0,305,308,5,3,0,0,306,
	307,5,40,0,0,307,309,3,104,52,0,308,306,1,0,0,0,308,309,1,0,0,0,309,312,
	1,0,0,0,310,311,5,242,0,0,311,313,3,26,13,0,312,310,1,0,0,0,312,313,1,0,
	0,0,313,923,1,0,0,0,314,315,5,68,0,0,315,318,5,211,0,0,316,317,5,100,0,
	0,317,319,5,76,0,0,318,316,1,0,0,0,318,319,1,0,0,0,319,320,1,0,0,0,320,
	923,3,162,81,0,321,322,5,107,0,0,322,323,5,110,0,0,323,325,3,162,81,0,324,
	326,3,86,43,0,325,324,1,0,0,0,325,326,1,0,0,0,326,327,1,0,0,0,327,328,3,
	16,8,0,328,923,1,0,0,0,329,330,5,61,0,0,330,331,5,87,0,0,331,334,3,162,
	81,0,332,333,5,240,0,0,333,335,3,92,46,0,334,332,1,0,0,0,334,335,1,0,0,
	0,335,923,1,0,0,0,336,337,5,221,0,0,337,338,5,211,0,0,338,923,3,162,81,
	0,339,340,5,21,0,0,340,343,5,211,0,0,341,342,5,100,0,0,342,344,5,76,0,0,
	343,341,1,0,0,0,343,344,1,0,0,0,344,345,1,0,0,0,345,346,3,162,81,0,346,
	347,5,179,0,0,347,348,5,219,0,0,348,349,3,162,81,0,349,923,1,0,0,0,350,
	351,5,40,0,0,351,352,5,152,0,0,352,353,5,211,0,0,353,354,3,162,81,0,354,
	357,5,113,0,0,355,358,3,104,52,0,356,358,5,147,0,0,357,355,1,0,0,0,357,
	356,1,0,0,0,358,923,1,0,0,0,359,360,5,40,0,0,360,361,5,152,0,0,361,362,
	5,38,0,0,362,363,3,162,81,0,363,366,5,113,0,0,364,367,3,104,52,0,365,367,
	5,147,0,0,366,364,1,0,0,0,366,365,1,0,0,0,367,923,1,0,0,0,368,369,5,21,
	0,0,369,372,5,211,0,0,370,371,5,100,0,0,371,373,5,76,0,0,372,370,1,0,0,
	0,372,373,1,0,0,0,373,374,1,0,0,0,374,375,3,162,81,0,375,376,5,179,0,0,
	376,379,5,38,0,0,377,378,5,100,0,0,378,380,5,76,0,0,379,377,1,0,0,0,379,
	380,1,0,0,0,380,381,1,0,0,0,381,382,3,170,85,0,382,383,5,219,0,0,383,384,
	3,170,85,0,384,923,1,0,0,0,385,386,5,21,0,0,386,389,5,211,0,0,387,388,5,
	100,0,0,388,390,5,76,0,0,389,387,1,0,0,0,389,390,1,0,0,0,390,391,1,0,0,
	0,391,392,3,162,81,0,392,393,5,68,0,0,393,396,5,38,0,0,394,395,5,100,0,
	0,395,397,5,76,0,0,396,394,1,0,0,0,396,397,1,0,0,0,397,398,1,0,0,0,398,
	399,3,162,81,0,399,923,1,0,0,0,400,401,5,21,0,0,401,404,5,211,0,0,402,403,
	5,100,0,0,403,405,5,76,0,0,404,402,1,0,0,0,404,405,1,0,0,0,405,406,1,0,
	0,0,406,407,3,162,81,0,407,408,5,17,0,0,408,412,5,38,0,0,409,410,5,100,
	0,0,410,411,5,146,0,0,411,413,5,76,0,0,412,409,1,0,0,0,412,413,1,0,0,0,
	413,414,1,0,0,0,414,415,3,22,11,0,415,923,1,0,0,0,416,417,5,21,0,0,417,
	418,5,211,0,0,418,419,3,162,81,0,419,420,5,202,0,0,420,421,5,29,0,0,421,
	422,3,166,83,0,422,923,1,0,0,0,423,424,5,22,0,0,424,427,3,162,81,0,425,
	426,5,242,0,0,426,428,3,26,13,0,427,425,1,0,0,0,427,428,1,0,0,0,428,923,
	1,0,0,0,429,432,5,44,0,0,430,431,5,156,0,0,431,433,5,181,0,0,432,430,1,
	0,0,0,432,433,1,0,0,0,433,434,1,0,0,0,434,435,5,132,0,0,435,439,5,238,0,
	0,436,437,5,100,0,0,437,438,5,146,0,0,438,440,5,76,0,0,439,436,1,0,0,0,
	439,440,1,0,0,0,440,441,1,0,0,0,441,444,3,162,81,0,442,443,5,40,0,0,443,
	445,3,104,52,0,444,442,1,0,0,0,444,445,1,0,0,0,445,448,1,0,0,0,446,447,
	5,242,0,0,447,449,3,26,13,0,448,446,1,0,0,0,448,449,1,0,0,0,449,450,1,0,
	0,0,450,451,5,26,0,0,451,452,3,16,8,0,452,923,1,0,0,0,453,456,5,44,0,0,
	454,455,5,156,0,0,455,457,5,181,0,0,456,454,1,0,0,0,456,457,1,0,0,0,457,
	458,1,0,0,0,458,459,5,238,0,0,459,462,3,162,81,0,460,461,5,40,0,0,461,463,
	3,104,52,0,462,460,1,0,0,0,462,463,1,0,0,0,463,466,1,0,0,0,464,465,5,197,
	0,0,465,467,7,1,0,0,466,464,1,0,0,0,466,467,1,0,0,0,467,468,1,0,0,0,468,
	469,5,26,0,0,469,470,3,16,8,0,470,923,1,0,0,0,471,472,5,178,0,0,472,473,
	5,132,0,0,473,474,5,238,0,0,474,923,3,162,81,0,475,476,5,68,0,0,476,477,
	5,132,0,0,477,480,5,238,0,0,478,479,5,100,0,0,479,481,5,76,0,0,480,478,
	1,0,0,0,480,481,1,0,0,0,481,482,1,0,0,0,482,923,3,162,81,0,483,484,5,68,
	0,0,484,487,5,238,0,0,485,486,5,100,0,0,486,488,5,76,0,0,487,485,1,0,0,
	0,487,488,1,0,0,0,488,489,1,0,0,0,489,923,3,162,81,0,490,491,5,21,0,0,491,
	492,5,238,0,0,492,493,3,162,81,0,493,494,5,179,0,0,494,495,5,219,0,0,495,
	496,3,162,81,0,496,923,1,0,0,0,497,498,5,21,0,0,498,499,5,238,0,0,499,500,
	3,162,81,0,500,501,5,202,0,0,501,502,5,29,0,0,502,503,3,166,83,0,503,923,
	1,0,0,0,504,505,5,33,0,0,505,506,3,162,81,0,506,515,5,2,0,0,507,512,3,154,
	77,0,508,509,5,4,0,0,509,511,3,154,77,0,510,508,1,0,0,0,511,514,1,0,0,0,
	512,510,1,0,0,0,512,513,1,0,0,0,513,516,1,0,0,0,514,512,1,0,0,0,515,507,
	1,0,0,0,515,516,1,0,0,0,516,517,1,0,0,0,517,518,5,3,0,0,518,923,1,0,0,0,
	519,520,5,44,0,0,520,521,5,187,0,0,521,525,3,170,85,0,522,523,5,242,0,0,
	523,524,5,18,0,0,524,526,3,164,82,0,525,522,1,0,0,0,525,526,1,0,0,0,526,
	529,1,0,0,0,527,528,5,102,0,0,528,530,3,170,85,0,529,527,1,0,0,0,529,530,
	1,0,0,0,530,923,1,0,0,0,531,532,5,68,0,0,532,533,5,187,0,0,533,923,3,170,
	85,0,534,535,5,90,0,0,535,536,3,168,84,0,536,537,5,219,0,0,537,542,3,166,
	83,0,538,539,5,4,0,0,539,541,3,166,83,0,540,538,1,0,0,0,541,544,1,0,0,0,
	542,540,1,0,0,0,542,543,1,0,0,0,543,548,1,0,0,0,544,542,1,0,0,0,545,546,
	5,242,0,0,546,547,5,18,0,0,547,549,5,155,0,0,548,545,1,0,0,0,548,549,1,
	0,0,0,549,553,1,0,0,0,550,551,5,91,0,0,551,552,5,32,0,0,552,554,3,164,82,
	0,553,550,1,0,0,0,553,554,1,0,0,0,554,557,1,0,0,0,555,556,5,102,0,0,556,
	558,3,170,85,0,557,555,1,0,0,0,557,558,1,0,0,0,558,923,1,0,0,0,559,563,
	5,185,0,0,560,561,5,18,0,0,561,562,5,155,0,0,562,564,5,85,0,0,563,560,1,
	0,0,0,563,564,1,0,0,0,564,565,1,0,0,0,565,566,3,168,84,0,566,567,5,87,0,
	0,567,572,3,166,83,0,568,569,5,4,0,0,569,571,3,166,83,0,570,568,1,0,0,0,
	571,574,1,0,0,0,572,570,1,0,0,0,572,573,1,0,0,0,573,578,1,0,0,0,574,572,
	1,0,0,0,575,576,5,91,0,0,576,577,5,32,0,0,577,579,3,164,82,0,578,575,1,
	0,0,0,578,579,1,0,0,0,579,582,1,0,0,0,580,581,5,102,0,0,581,583,3,170,85,
	0,582,580,1,0,0,0,582,583,1,0,0,0,583,923,1,0,0,0,584,585,5,202,0,0,585,
	589,5,187,0,0,586,590,5,20,0,0,587,590,5,144,0,0,588,590,3,170,85,0,589,
	586,1,0,0,0,589,587,1,0,0,0,589,588,1,0,0,0,590,923,1,0,0,0,591,602,5,90,
	0,0,592,597,3,160,80,0,593,594,5,4,0,0,594,596,3,160,80,0,595,593,1,0,0,
	0,596,599,1,0,0,0,597,595,1,0,0,0,597,598,1,0,0,0,598,603,1,0,0,0,599,597,
	1,0,0,0,600,601,5,20,0,0,601,603,5,173,0,0,602,592,1,0,0,0,602,600,1,0,
	0,0,603,604,1,0,0,0,604,606,5,152,0,0,605,607,7,2,0,0,606,605,1,0,0,0,606,
	607,1,0,0,0,607,608,1,0,0,0,608,609,3,162,81,0,609,610,5,219,0,0,610,614,
	3,166,83,0,611,612,5,242,0,0,612,613,5,90,0,0,613,615,5,155,0,0,614,611,
	1,0,0,0,614,615,1,0,0,0,615,923,1,0,0,0,616,627,5,93,0,0,617,622,3,160,
	80,0,618,619,5,4,0,0,619,621,3,160,80,0,620,618,1,0,0,0,621,624,1,0,0,0,
	622,620,1,0,0,0,622,623,1,0,0,0,623,628,1,0,0,0,624,622,1,0,0,0,625,626,
	5,20,0,0,626,628,5,173,0,0,627,617,1,0,0,0,627,625,1,0,0,0,628,629,1,0,
	0,0,629,631,5,152,0,0,630,632,7,2,0,0,631,630,1,0,0,0,631,632,1,0,0,0,632,
	633,1,0,0,0,633,634,3,162,81,0,634,635,5,219,0,0,635,636,3,166,83,0,636,
	923,1,0,0,0,637,641,5,185,0,0,638,639,5,90,0,0,639,640,5,155,0,0,640,642,
	5,85,0,0,641,638,1,0,0,0,641,642,1,0,0,0,642,653,1,0,0,0,643,648,3,160,
	80,0,644,645,5,4,0,0,645,647,3,160,80,0,646,644,1,0,0,0,647,650,1,0,0,0,
	648,646,1,0,0,0,648,649,1,0,0,0,649,654,1,0,0,0,650,648,1,0,0,0,651,652,
	5,20,0,0,652,654,5,173,0,0,653,643,1,0,0,0,653,651,1,0,0,0,654,655,1,0,
	0,0,655,657,5,152,0,0,656,658,7,2,0,0,657,656,1,0,0,0,657,658,1,0,0,0,658,
	659,1,0,0,0,659,660,3,162,81,0,660,661,5,87,0,0,661,662,3,166,83,0,662,
	923,1,0,0,0,663,664,5,204,0,0,664,670,5,92,0,0,665,667,5,152,0,0,666,668,
	5,211,0,0,667,666,1,0,0,0,667,668,1,0,0,0,668,669,1,0,0,0,669,671,3,162,
	81,0,670,665,1,0,0,0,670,671,1,0,0,0,671,923,1,0,0,0,672,674,5,77,0,0,673,
	675,5,22,0,0,674,673,1,0,0,0,674,675,1,0,0,0,675,677,1,0,0,0,676,678,5,
	237,0,0,677,676,1,0,0,0,677,678,1,0,0,0,678,690,1,0,0,0,679,680,5,2,0,0,
	680,685,3,148,74,0,681,682,5,4,0,0,682,684,3,148,74,0,683,681,1,0,0,0,684,
	687,1,0,0,0,685,683,1,0,0,0,685,686,1,0,0,0,686,688,1,0,0,0,687,685,1,0,
	0,0,688,689,5,3,0,0,689,691,1,0,0,0,690,679,1,0,0,0,690,691,1,0,0,0,691,
	692,1,0,0,0,692,923,3,14,7,0,693,694,5,204,0,0,694,695,5,44,0,0,695,696,
	5,211,0,0,696,923,3,162,81,0,697,698,5,204,0,0,698,699,5,44,0,0,699,700,
	5,194,0,0,700,923,3,162,81,0,701,702,5,204,0,0,702,703,5,44,0,0,703,704,
	5,238,0,0,704,923,3,162,81,0,705,706,5,204,0,0,706,707,5,44,0,0,707,708,
	5,132,0,0,708,709,5,238,0,0,709,923,3,162,81,0,710,711,5,204,0,0,711,714,
	5,212,0,0,712,713,7,3,0,0,713,715,3,162,81,0,714,712,1,0,0,0,714,715,1,
	0,0,0,715,722,1,0,0,0,716,717,5,121,0,0,717,720,3,104,52,0,718,719,5,72,
	0,0,719,721,3,104,52,0,720,718,1,0,0,0,720,721,1,0,0,0,721,723,1,0,0,0,
	722,716,1,0,0,0,722,723,1,0,0,0,723,923,1,0,0,0,724,725,5,204,0,0,725,728,
	5,195,0,0,726,727,7,3,0,0,727,729,3,170,85,0,728,726,1,0,0,0,728,729,1,
	0,0,0,729,736,1,0,0,0,730,731,5,121,0,0,731,734,3,104,52,0,732,733,5,72,
	0,0,733,735,3,104,52,0,734,732,1,0,0,0,734,735,1,0,0,0,735,737,1,0,0,0,
	736,730,1,0,0,0,736,737,1,0,0,0,737,923,1,0,0,0,738,739,5,204,0,0,739,746,
	5,37,0,0,740,741,5,121,0,0,741,744,3,104,52,0,742,743,5,72,0,0,743,745,
	3,104,52,0,744,742,1,0,0,0,744,745,1,0,0,0,745,747,1,0,0,0,746,740,1,0,
	0,0,746,747,1,0,0,0,747,923,1,0,0,0,748,749,5,204,0,0,749,750,5,39,0,0,
	750,752,7,3,0,0,751,753,3,162,81,0,752,751,1,0,0,0,752,753,1,0,0,0,753,
	760,1,0,0,0,754,755,5,121,0,0,755,758,3,104,52,0,756,757,5,72,0,0,757,759,
	3,104,52,0,758,756,1,0,0,0,758,759,1,0,0,0,759,761,1,0,0,0,760,754,1,0,
	0,0,760,761,1,0,0,0,761,923,1,0,0,0,762,763,5,204,0,0,763,764,5,207,0,0,
	764,765,5,85,0,0,765,923,3,162,81,0,766,767,5,204,0,0,767,768,5,207,0,0,
	768,769,5,85,0,0,769,770,5,2,0,0,770,771,3,16,8,0,771,772,5,3,0,0,772,923,
	1,0,0,0,773,775,5,204,0,0,774,776,5,47,0,0,775,774,1,0,0,0,775,776,1,0,
	0,0,776,777,1,0,0,0,777,780,5,188,0,0,778,779,7,3,0,0,779,781,3,170,85,
	0,780,778,1,0,0,0,780,781,1,0,0,0,781,923,1,0,0,0,782,783,5,204,0,0,783,
	784,5,187,0,0,784,787,5,92,0,0,785,786,7,3,0,0,786,788,3,170,85,0,787,785,
	1,0,0,0,787,788,1,0,0,0,788,923,1,0,0,0,789,790,5,63,0,0,790,923,3,162,
	81,0,791,792,5,62,0,0,792,923,3,162,81,0,793,794,5,204,0,0,794,801,5,89,
	0,0,795,796,5,121,0,0,796,799,3,104,52,0,797,798,5,72,0,0,798,800,3,104,
	52,0,799,797,1,0,0,0,799,800,1,0,0,0,800,802,1,0,0,0,801,795,1,0,0,0,801,
	802,1,0,0,0,802,923,1,0,0,0,803,804,5,204,0,0,804,811,5,201,0,0,805,806,
	5,121,0,0,806,809,3,104,52,0,807,808,5,72,0,0,808,810,3,104,52,0,809,807,
	1,0,0,0,809,810,1,0,0,0,810,812,1,0,0,0,811,805,1,0,0,0,811,812,1,0,0,0,
	812,923,1,0,0,0,813,814,5,202,0,0,814,815,5,201,0,0,815,816,3,162,81,0,
	816,817,5,248,0,0,817,818,3,90,45,0,818,923,1,0,0,0,819,820,5,182,0,0,820,
	821,5,201,0,0,821,923,3,162,81,0,822,823,5,206,0,0,823,832,5,220,0,0,824,
	829,3,150,75,0,825,826,5,4,0,0,826,828,3,150,75,0,827,825,1,0,0,0,828,831,
	1,0,0,0,829,827,1,0,0,0,829,830,1,0,0,0,830,833,1,0,0,0,831,829,1,0,0,0,
	832,824,1,0,0,0,832,833,1,0,0,0,833,923,1,0,0,0,834,836,5,41,0,0,835,837,
	5,244,0,0,836,835,1,0,0,0,836,837,1,0,0,0,837,923,1,0,0,0,838,840,5,189,
	0,0,839,841,5,244,0,0,840,839,1,0,0,0,840,841,1,0,0,0,841,923,1,0,0,0,842,
	843,5,172,0,0,843,844,3,170,85,0,844,845,5,87,0,0,845,846,3,14,7,0,846,
	923,1,0,0,0,847,848,5,59,0,0,848,849,5,172,0,0,849,923,3,170,85,0,850,851,
	5,75,0,0,851,861,3,170,85,0,852,853,5,234,0,0,853,858,3,90,45,0,854,855,
	5,4,0,0,855,857,3,90,45,0,856,854,1,0,0,0,857,860,1,0,0,0,858,856,1,0,0,
	0,858,859,1,0,0,0,859,862,1,0,0,0,860,858,1,0,0,0,861,852,1,0,0,0,861,862,
	1,0,0,0,862,923,1,0,0,0,863,864,5,63,0,0,864,865,5,106,0,0,865,923,3,170,
	85,0,866,867,5,63,0,0,867,868,5,160,0,0,868,923,3,170,85,0,869,870,5,202,
	0,0,870,871,5,165,0,0,871,923,3,158,79,0,872,873,5,202,0,0,873,874,5,217,
	0,0,874,877,5,247,0,0,875,878,5,123,0,0,876,878,3,90,45,0,877,875,1,0,0,
	0,877,876,1,0,0,0,878,923,1,0,0,0,879,880,5,231,0,0,880,881,3,162,81,0,
	881,882,5,202,0,0,882,887,3,146,73,0,883,884,5,4,0,0,884,886,3,146,73,0,
	885,883,1,0,0,0,886,889,1,0,0,0,887,885,1,0,0,0,887,888,1,0,0,0,888,892,
	1,0,0,0,889,887,1,0,0,0,890,891,5,240,0,0,891,893,3,92,46,0,892,890,1,0,
	0,0,892,893,1,0,0,0,893,923,1,0,0,0,894,895,5,134,0,0,895,896,5,110,0,0,
	896,901,3,162,81,0,897,899,5,26,0,0,898,897,1,0,0,0,898,899,1,0,0,0,899,
	900,1,0,0,0,900,902,3,170,85,0,901,898,1,0,0,0,901,902,1,0,0,0,902,903,
	1,0,0,0,903,904,5,234,0,0,904,905,3,60,30,0,905,906,5,152,0,0,906,908,3,
	90,45,0,907,909,3,130,65,0,908,907,1,0,0,0,909,910,1,0,0,0,910,908,1,0,
	0,0,910,911,1,0,0,0,911,923,1,0,0,0,912,913,5,204,0,0,913,914,5,40,0,0,
	914,915,5,152,0,0,915,916,5,211,0,0,916,923,3,162,81,0,917,918,5,204,0,
	0,918,919,5,40,0,0,919,920,5,152,0,0,920,921,5,38,0,0,921,923,3,162,81,
	0,922,206,1,0,0,0,922,207,1,0,0,0,922,209,1,0,0,0,922,214,1,0,0,0,922,230,
	1,0,0,0,922,240,1,0,0,0,922,247,1,0,0,0,922,254,1,0,0,0,922,288,1,0,0,0,
	922,314,1,0,0,0,922,321,1,0,0,0,922,329,1,0,0,0,922,336,1,0,0,0,922,339,
	1,0,0,0,922,350,1,0,0,0,922,359,1,0,0,0,922,368,1,0,0,0,922,385,1,0,0,0,
	922,400,1,0,0,0,922,416,1,0,0,0,922,423,1,0,0,0,922,429,1,0,0,0,922,453,
	1,0,0,0,922,471,1,0,0,0,922,475,1,0,0,0,922,483,1,0,0,0,922,490,1,0,0,0,
	922,497,1,0,0,0,922,504,1,0,0,0,922,519,1,0,0,0,922,531,1,0,0,0,922,534,
	1,0,0,0,922,559,1,0,0,0,922,584,1,0,0,0,922,591,1,0,0,0,922,616,1,0,0,0,
	922,637,1,0,0,0,922,663,1,0,0,0,922,672,1,0,0,0,922,693,1,0,0,0,922,697,
	1,0,0,0,922,701,1,0,0,0,922,705,1,0,0,0,922,710,1,0,0,0,922,724,1,0,0,0,
	922,738,1,0,0,0,922,748,1,0,0,0,922,762,1,0,0,0,922,766,1,0,0,0,922,773,
	1,0,0,0,922,782,1,0,0,0,922,789,1,0,0,0,922,791,1,0,0,0,922,793,1,0,0,0,
	922,803,1,0,0,0,922,813,1,0,0,0,922,819,1,0,0,0,922,822,1,0,0,0,922,834,
	1,0,0,0,922,838,1,0,0,0,922,842,1,0,0,0,922,847,1,0,0,0,922,850,1,0,0,0,
	922,863,1,0,0,0,922,866,1,0,0,0,922,869,1,0,0,0,922,872,1,0,0,0,922,879,
	1,0,0,0,922,894,1,0,0,0,922,912,1,0,0,0,922,917,1,0,0,0,923,15,1,0,0,0,
	924,926,3,18,9,0,925,924,1,0,0,0,925,926,1,0,0,0,926,927,1,0,0,0,927,928,
	3,30,15,0,928,17,1,0,0,0,929,931,5,242,0,0,930,932,5,177,0,0,931,930,1,
	0,0,0,931,932,1,0,0,0,932,933,1,0,0,0,933,938,3,54,27,0,934,935,5,4,0,0,
	935,937,3,54,27,0,936,934,1,0,0,0,937,940,1,0,0,0,938,936,1,0,0,0,938,939,
	1,0,0,0,939,19,1,0,0,0,940,938,1,0,0,0,941,944,3,22,11,0,942,944,3,24,12,
	0,943,941,1,0,0,0,943,942,1,0,0,0,944,21,1,0,0,0,945,946,3,170,85,0,946,
	949,3,120,60,0,947,948,5,146,0,0,948,950,5,147,0,0,949,947,1,0,0,0,949,
	950,1,0,0,0,950,953,1,0,0,0,951,952,5,40,0,0,952,954,3,104,52,0,953,951,
	1,0,0,0,953,954,1,0,0,0,954,957,1,0,0,0,955,956,5,242,0,0,956,958,3,26,
	13,0,957,955,1,0,0,0,957,958,1,0,0,0,958,23,1,0,0,0,959,960,5,121,0,0,960,
	963,3,162,81,0,961,962,7,4,0,0,962,964,5,174,0,0,963,961,1,0,0,0,963,964,
	1,0,0,0,964,25,1,0,0,0,965,966,5,2,0,0,966,971,3,28,14,0,967,968,5,4,0,
	0,968,970,3,28,14,0,969,967,1,0,0,0,970,973,1,0,0,0,971,969,1,0,0,0,971,
	972,1,0,0,0,972,974,1,0,0,0,973,971,1,0,0,0,974,975,5,3,0,0,975,27,1,0,
	0,0,976,977,3,170,85,0,977,978,5,248,0,0,978,979,3,90,45,0,979,29,1,0,0,
	0,980,991,3,36,18,0,981,982,5,157,0,0,982,983,5,32,0,0,983,988,3,40,20,
	0,984,985,5,4,0,0,985,987,3,40,20,0,986,984,1,0,0,0,987,990,1,0,0,0,988,
	986,1,0,0,0,988,989,1,0,0,0,989,992,1,0,0,0,990,988,1,0,0,0,991,981,1,0,
	0,0,991,992,1,0,0,0,992,998,1,0,0,0,993,994,5,150,0,0,994,996,3,34,17,0,
	995,997,7,5,0,0,996,995,1,0,0,0,996,997,1,0,0,0,997,999,1,0,0,0,998,993,
	1,0,0,0,998,999,1,0,0,0,999,1013,1,0,0,0,1000,1001,5,122,0,0,1001,1014,
	3,32,16,0,1002,1003,5,80,0,0,1003,1005,7,6,0,0,1004,1006,3,34,17,0,1005,
	1004,1,0,0,0,1005,1006,1,0,0,0,1006,1007,1,0,0,0,1007,1011,7,5,0,0,1008,
	1012,5,154,0,0,1009,1010,5,242,0,0,1010,1012,5,216,0,0,1011,1008,1,0,0,
	0,1011,1009,1,0,0,0,1012,1014,1,0,0,0,1013,1000,1,0,0,0,1013,1002,1,0,0,
	0,1013,1014,1,0,0,0,1014,31,1,0,0,0,1015,1018,5,20,0,0,1016,1018,3,34,17,
	0,1017,1015,1,0,0,0,1017,1016,1,0,0,0,1018,33,1,0,0,0,1019,1020,7,7,0,0,
	1020,35,1,0,0,0,1021,1022,6,18,-1,0,1022,1023,3,38,19,0,1023,1038,1,0,0,
	0,1024,1025,10,2,0,0,1025,1027,5,108,0,0,1026,1028,3,56,28,0,1027,1026,
	1,0,0,0,1027,1028,1,0,0,0,1028,1029,1,0,0,0,1029,1037,3,36,18,3,1030,1031,
	10,1,0,0,1031,1033,7,8,0,0,1032,1034,3,56,28,0,1033,1032,1,0,0,0,1033,1034,
	1,0,0,0,1034,1035,1,0,0,0,1035,1037,3,36,18,2,1036,1024,1,0,0,0,1036,1030,
	1,0,0,0,1037,1040,1,0,0,0,1038,1036,1,0,0,0,1038,1039,1,0,0,0,1039,37,1,
	0,0,0,1040,1038,1,0,0,0,1041,1058,3,42,21,0,1042,1043,5,211,0,0,1043,1058,
	3,162,81,0,1044,1045,5,236,0,0,1045,1050,3,90,45,0,1046,1047,5,4,0,0,1047,
	1049,3,90,45,0,1048,1046,1,0,0,0,1049,1052,1,0,0,0,1050,1048,1,0,0,0,1050,
	1051,1,0,0,0,1051,1058,1,0,0,0,1052,1050,1,0,0,0,1053,1054,5,2,0,0,1054,
	1055,3,30,15,0,1055,1056,5,3,0,0,1056,1058,1,0,0,0,1057,1041,1,0,0,0,1057,
	1042,1,0,0,0,1057,1044,1,0,0,0,1057,1053,1,0,0,0,1058,39,1,0,0,0,1059,1061,
	3,90,45,0,1060,1062,7,9,0,0,1061,1060,1,0,0,0,1061,1062,1,0,0,0,1062,1065,
	1,0,0,0,1063,1064,5,149,0,0,1064,1066,7,10,0,0,1065,1063,1,0,0,0,1065,1066,
	1,0,0,0,1066,41,1,0,0,0,1067,1069,5,199,0,0,1068,1070,3,56,28,0,1069,1068,
	1,0,0,0,1069,1070,1,0,0,0,1070,1071,1,0,0,0,1071,1076,3,58,29,0,1072,1073,
	5,4,0,0,1073,1075,3,58,29,0,1074,1072,1,0,0,0,1075,1078,1,0,0,0,1076,1074,
	1,0,0,0,1076,1077,1,0,0,0,1077,1088,1,0,0,0,1078,1076,1,0,0,0,1079,1080,
	5,87,0,0,1080,1085,3,60,30,0,1081,1082,5,4,0,0,1082,1084,3,60,30,0,1083,
	1081,1,0,0,0,1084,1087,1,0,0,0,1085,1083,1,0,0,0,1085,1086,1,0,0,0,1086,
	1089,1,0,0,0,1087,1085,1,0,0,0,1088,1079,1,0,0,0,1088,1089,1,0,0,0,1089,
	1092,1,0,0,0,1090,1091,5,240,0,0,1091,1093,3,92,46,0,1092,1090,1,0,0,0,
	1092,1093,1,0,0,0,1093,1097,1,0,0,0,1094,1095,5,95,0,0,1095,1096,5,32,0,
	0,1096,1098,3,44,22,0,1097,1094,1,0,0,0,1097,1098,1,0,0,0,1098,1101,1,0,
	0,0,1099,1100,5,98,0,0,1100,1102,3,92,46,0,1101,1099,1,0,0,0,1101,1102,
	1,0,0,0,1102,1112,1,0,0,0,1103,1104,5,241,0,0,1104,1109,3,50,25,0,1105,
	1106,5,4,0,0,1106,1108,3,50,25,0,1107,1105,1,0,0,0,1108,1111,1,0,0,0,1109,
	1107,1,0,0,0,1109,1110,1,0,0,0,1110,1113,1,0,0,0,1111,1109,1,0,0,0,1112,
	1103,1,0,0,0,1112,1113,1,0,0,0,1113,43,1,0,0,0,1114,1116,3,56,28,0,1115,
	1114,1,0,0,0,1115,1116,1,0,0,0,1116,1117,1,0,0,0,1117,1122,3,46,23,0,1118,
	1119,5,4,0,0,1119,1121,3,46,23,0,1120,1118,1,0,0,0,1121,1124,1,0,0,0,1122,
	1120,1,0,0,0,1122,1123,1,0,0,0,1123,45,1,0,0,0,1124,1122,1,0,0,0,1125,1166,
	3,48,24,0,1126,1127,5,190,0,0,1127,1136,5,2,0,0,1128,1133,3,90,45,0,1129,
	1130,5,4,0,0,1130,1132,3,90,45,0,1131,1129,1,0,0,0,1132,1135,1,0,0,0,1133,
	1131,1,0,0,0,1133,1134,1,0,0,0,1134,1137,1,0,0,0,1135,1133,1,0,0,0,1136,
	1128,1,0,0,0,1136,1137,1,0,0,0,1137,1138,1,0,0,0,1138,1166,5,3,0,0,1139,
	1140,5,46,0,0,1140,1149,5,2,0,0,1141,1146,3,90,45,0,1142,1143,5,4,0,0,1143,
	1145,3,90,45,0,1144,1142,1,0,0,0,1145,1148,1,0,0,0,1146,1144,1,0,0,0,1146,
	1147,1,0,0,0,1147,1150,1,0,0,0,1148,1146,1,0,0,0,1149,1141,1,0,0,0,1149,
	1150,1,0,0,0,1150,1151,1,0,0,0,1151,1166,5,3,0,0,1152,1153,5,96,0,0,1153,
	1154,5,203,0,0,1154,1155,5,2,0,0,1155,1160,3,48,24,0,1156,1157,5,4,0,0,
	1157,1159,3,48,24,0,1158,1156,1,0,0,0,1159,1162,1,0,0,0,1160,1158,1,0,0,
	0,1160,1161,1,0,0,0,1161,1163,1,0,0,0,1162,1160,1,0,0,0,1163,1164,5,3,0,
	0,1164,1166,1,0,0,0,1165,1125,1,0,0,0,1165,1126,1,0,0,0,1165,1139,1,0,0,
	0,1165,1152,1,0,0,0,1166,47,1,0,0,0,1167,1176,5,2,0,0,1168,1173,3,90,45,
	0,1169,1170,5,4,0,0,1170,1172,3,90,45,0,1171,1169,1,0,0,0,1172,1175,1,0,
	0,0,1173,1171,1,0,0,0,1173,1174,1,0,0,0,1174,1177,1,0,0,0,1175,1173,1,0,
	0,0,1176,1168,1,0,0,0,1176,1177,1,0,0,0,1177,1178,1,0,0,0,1178,1181,5,3,
	0,0,1179,1181,3,90,45,0,1180,1167,1,0,0,0,1180,1179,1,0,0,0,1181,49,1,0,
	0,0,1182,1183,3,170,85,0,1183,1184,5,26,0,0,1184,1185,5,2,0,0,1185,1186,
	3,52,26,0,1186,1187,5,3,0,0,1187,51,1,0,0,0,1188,1190,3,170,85,0,1189,1188,
	1,0,0,0,1189,1190,1,0,0,0,1190,1201,1,0,0,0,1191,1192,5,162,0,0,1192,1193,
	5,32,0,0,1193,1198,3,90,45,0,1194,1195,5,4,0,0,1195,1197,3,90,45,0,1196,
	1194,1,0,0,0,1197,1200,1,0,0,0,1198,1196,1,0,0,0,1198,1199,1,0,0,0,1199,
	1202,1,0,0,0,1200,1198,1,0,0,0,1201,1191,1,0,0,0,1201,1202,1,0,0,0,1202,
	1213,1,0,0,0,1203,1204,5,157,0,0,1204,1205,5,32,0,0,1205,1210,3,40,20,0,
	1206,1207,5,4,0,0,1207,1209,3,40,20,0,1208,1206,1,0,0,0,1209,1212,1,0,0,
	0,1210,1208,1,0,0,0,1210,1211,1,0,0,0,1211,1214,1,0,0,0,1212,1210,1,0,0,
	0,1213,1203,1,0,0,0,1213,1214,1,0,0,0,1214,1216,1,0,0,0,1215,1217,3,134,
	67,0,1216,1215,1,0,0,0,1216,1217,1,0,0,0,1217,53,1,0,0,0,1218,1220,3,170,
	85,0,1219,1221,3,86,43,0,1220,1219,1,0,0,0,1220,1221,1,0,0,0,1221,1222,
	1,0,0,0,1222,1223,5,26,0,0,1223,1224,5,2,0,0,1224,1225,3,16,8,0,1225,1226,
	5,3,0,0,1226,55,1,0,0,0,1227,1228,7,11,0,0,1228,57,1,0,0,0,1229,1234,3,
	90,45,0,1230,1232,5,26,0,0,1231,1230,1,0,0,0,1231,1232,1,0,0,0,1232,1233,
	1,0,0,0,1233,1235,3,170,85,0,1234,1231,1,0,0,0,1234,1235,1,0,0,0,1235,1245,
	1,0,0,0,1236,1237,3,98,49,0,1237,1238,5,1,0,0,1238,1241,5,256,0,0,1239,
	1240,5,26,0,0,1240,1242,3,86,43,0,1241,1239,1,0,0,0,1241,1242,1,0,0,0,1242,
	1245,1,0,0,0,1243,1245,5,256,0,0,1244,1229,1,0,0,0,1244,1236,1,0,0,0,1244,
	1243,1,0,0,0,1245,59,1,0,0,0,1246,1247,6,30,-1,0,1247,1248,3,66,33,0,1248,
	1267,1,0,0,0,1249,1263,10,2,0,0,1250,1251,5,45,0,0,1251,1252,5,115,0,0,
	1252,1264,3,66,33,0,1253,1254,3,62,31,0,1254,1255,5,115,0,0,1255,1256,3,
	60,30,0,1256,1257,3,64,32,0,1257,1264,1,0,0,0,1258,1259,5,137,0,0,1259,
	1260,3,62,31,0,1260,1261,5,115,0,0,1261,1262,3,66,33,0,1262,1264,1,0,0,
	0,1263,1250,1,0,0,0,1263,1253,1,0,0,0,1263,1258,1,0,0,0,1264,1266,1,0,0,
	0,1265,1249,1,0,0,0,1266,1269,1,0,0,0,1267,1265,1,0,0,0,1267,1268,1,0,0,
	0,1268,61,1,0,0,0,1269,1267,1,0,0,0,1270,1272,5,105,0,0,1271,1270,1,0,0,
	0,1271,1272,1,0,0,0,1272,1286,1,0,0,0,1273,1275,5,119,0,0,1274,1276,5,159,
	0,0,1275,1274,1,0,0,0,1275,1276,1,0,0,0,1276,1286,1,0,0,0,1277,1279,5,186,
	0,0,1278,1280,5,159,0,0,1279,1278,1,0,0,0,1279,1280,1,0,0,0,1280,1286,1,
	0,0,0,1281,1283,5,88,0,0,1282,1284,5,159,0,0,1283,1282,1,0,0,0,1283,1284,
	1,0,0,0,1284,1286,1,0,0,0,1285,1271,1,0,0,0,1285,1273,1,0,0,0,1285,1277,
	1,0,0,0,1285,1281,1,0,0,0,1286,63,1,0,0,0,1287,1288,5,152,0,0,1288,1302,
	3,92,46,0,1289,1290,5,234,0,0,1290,1291,5,2,0,0,1291,1296,3,170,85,0,1292,
	1293,5,4,0,0,1293,1295,3,170,85,0,1294,1292,1,0,0,0,1295,1298,1,0,0,0,1296,
	1294,1,0,0,0,1296,1297,1,0,0,0,1297,1299,1,0,0,0,1298,1296,1,0,0,0,1299,
	1300,5,3,0,0,1300,1302,1,0,0,0,1301,1287,1,0,0,0,1301,1289,1,0,0,0,1302,
	65,1,0,0,0,1303,1310,3,70,35,0,1304,1305,5,213,0,0,1305,1306,3,68,34,0,
	1306,1307,5,2,0,0,1307,1308,3,90,45,0,1308,1309,5,3,0,0,1309,1311,1,0,0,
	0,1310,1304,1,0,0,0,1310,1311,1,0,0,0,1311,67,1,0,0,0,1312,1313,7,12,0,
	0,1313,69,1,0,0,0,1314,1397,3,84,42,0,1315,1316,5,131,0,0,1316,1327,5,2,
	0,0,1317,1318,5,162,0,0,1318,1319,5,32,0,0,1319,1324,3,90,45,0,1320,1321,
	5,4,0,0,1321,1323,3,90,45,0,1322,1320,1,0,0,0,1323,1326,1,0,0,0,1324,1322,
	1,0,0,0,1324,1325,1,0,0,0,1325,1328,1,0,0,0,1326,1324,1,0,0,0,1327,1317,
	1,0,0,0,1327,1328,1,0,0,0,1328,1339,1,0,0,0,1329,1330,5,157,0,0,1330,1331,
	5,32,0,0,1331,1336,3,40,20,0,1332,1333,5,4,0,0,1333,1335,3,40,20,0,1334,
	1332,1,0,0,0,1335,1338,1,0,0,0,1336,1334,1,0,0,0,1336,1337,1,0,0,0,1337,
	1340,1,0,0,0,1338,1336,1,0,0,0,1339,1329,1,0,0,0,1339,1340,1,0,0,0,1340,
	1350,1,0,0,0,1341,1342,5,133,0,0,1342,1347,3,72,36,0,1343,1344,5,4,0,0,
	1344,1346,3,72,36,0,1345,1343,1,0,0,0,1346,1349,1,0,0,0,1347,1345,1,0,0,
	0,1347,1348,1,0,0,0,1348,1351,1,0,0,0,1349,1347,1,0,0,0,1350,1341,1,0,0,
	0,1350,1351,1,0,0,0,1351,1353,1,0,0,0,1352,1354,3,74,37,0,1353,1352,1,0,
	0,0,1353,1354,1,0,0,0,1354,1358,1,0,0,0,1355,1356,5,19,0,0,1356,1357,5,
	128,0,0,1357,1359,3,78,39,0,1358,1355,1,0,0,0,1358,1359,1,0,0,0,1359,1361,
	1,0,0,0,1360,1362,7,13,0,0,1361,1360,1,0,0,0,1361,1362,1,0,0,0,1362,1363,
	1,0,0,0,1363,1364,5,166,0,0,1364,1365,5,2,0,0,1365,1366,3,140,70,0,1366,
	1376,5,3,0,0,1367,1368,5,208,0,0,1368,1373,3,80,40,0,1369,1370,5,4,0,0,
	1370,1372,3,80,40,0,1371,1369,1,0,0,0,1372,1375,1,0,0,0,1373,1371,1,0,0,
	0,1373,1374,1,0,0,0,1374,1377,1,0,0,0,1375,1373,1,0,0,0,1376,1367,1,0,0,
	0,1376,1377,1,0,0,0,1377,1378,1,0,0,0,1378,1379,5,64,0,0,1379,1384,3,82,
	41,0,1380,1381,5,4,0,0,1381,1383,3,82,41,0,1382,1380,1,0,0,0,1383,1386,
	1,0,0,0,1384,1382,1,0,0,0,1384,1385,1,0,0,0,1385,1387,1,0,0,0,1386,1384,
	1,0,0,0,1387,1395,5,3,0,0,1388,1390,5,26,0,0,1389,1388,1,0,0,0,1389,1390,
	1,0,0,0,1390,1391,1,0,0,0,1391,1393,3,170,85,0,1392,1394,3,86,43,0,1393,
	1392,1,0,0,0,1393,1394,1,0,0,0,1394,1396,1,0,0,0,1395,1389,1,0,0,0,1395,
	1396,1,0,0,0,1396,1398,1,0,0,0,1397,1315,1,0,0,0,1397,1398,1,0,0,0,1398,
	71,1,0,0,0,1399,1400,3,90,45,0,1400,1401,5,26,0,0,1401,1402,3,170,85,0,
	1402,73,1,0,0,0,1403,1404,5,153,0,0,1404,1405,5,191,0,0,1405,1406,5,167,
	0,0,1406,1415,5,128,0,0,1407,1408,5,20,0,0,1408,1409,5,192,0,0,1409,1410,
	5,167,0,0,1410,1412,5,128,0,0,1411,1413,3,76,38,0,1412,1411,1,0,0,0,1412,
	1413,1,0,0,0,1413,1415,1,0,0,0,1414,1403,1,0,0,0,1414,1407,1,0,0,0,1415,
	75,1,0,0,0,1416,1417,5,204,0,0,1417,1418,5,70,0,0,1418,1426,5,130,0,0,1419,
	1420,5,151,0,0,1420,1421,5,70,0,0,1421,1426,5,130,0,0,1422,1423,5,242,0,
	0,1423,1424,5,229,0,0,1424,1426,5,192,0,0,1425,1416,1,0,0,0,1425,1419,1,
	0,0,0,1425,1422,1,0,0,0,1426,77,1,0,0,0,1427,1428,5,5,0,0,1428,1429,5,219,
	0,0,1429,1430,5,138,0,0,1430,1447,5,191,0,0,1431,1432,5,5,0,0,1432,1433,
	5,164,0,0,1433,1434,5,117,0,0,1434,1447,5,191,0,0,1435,1436,5,5,0,0,1436,
	1437,5,219,0,0,1437,1438,5,83,0,0,1438,1447,3,170,85,0,1439,1440,5,5,0,
	0,1440,1441,5,219,0,0,1441,1442,5,117,0,0,1442,1447,3,170,85,0,1443,1444,
	5,5,0,0,1444,1445,5,219,0,0,1445,1447,3,170,85,0,1446,1427,1,0,0,0,1446,
	1431,1,0,0,0,1446,1435,1,0,0,0,1446,1439,1,0,0,0,1446,1443,1,0,0,0,1447,
	79,1,0,0,0,1448,1449,3,170,85,0,1449,1450,5,248,0,0,1450,1451,5,2,0,0,1451,
	1456,3,170,85,0,1452,1453,5,4,0,0,1453,1455,3,170,85,0,1454,1452,1,0,0,
	0,1455,1458,1,0,0,0,1456,1454,1,0,0,0,1456,1457,1,0,0,0,1457,1459,1,0,0,
	0,1458,1456,1,0,0,0,1459,1460,5,3,0,0,1460,81,1,0,0,0,1461,1462,3,170,85,
	0,1462,1463,5,26,0,0,1463,1464,3,90,45,0,1464,83,1,0,0,0,1465,1473,3,88,
	44,0,1466,1468,5,26,0,0,1467,1466,1,0,0,0,1467,1468,1,0,0,0,1468,1469,1,
	0,0,0,1469,1471,3,170,85,0,1470,1472,3,86,43,0,1471,1470,1,0,0,0,1471,1472,
	1,0,0,0,1472,1474,1,0,0,0,1473,1467,1,0,0,0,1473,1474,1,0,0,0,1474,85,1,
	0,0,0,1475,1476,5,2,0,0,1476,1481,3,170,85,0,1477,1478,5,4,0,0,1478,1480,
	3,170,85,0,1479,1477,1,0,0,0,1480,1483,1,0,0,0,1481,1479,1,0,0,0,1481,1482,
	1,0,0,0,1482,1484,1,0,0,0,1483,1481,1,0,0,0,1484,1485,5,3,0,0,1485,87,1,
	0,0,0,1486,1516,3,162,81,0,1487,1488,5,2,0,0,1488,1489,3,16,8,0,1489,1490,
	5,3,0,0,1490,1516,1,0,0,0,1491,1492,5,230,0,0,1492,1493,5,2,0,0,1493,1498,
	3,90,45,0,1494,1495,5,4,0,0,1495,1497,3,90,45,0,1496,1494,1,0,0,0,1497,
	1500,1,0,0,0,1498,1496,1,0,0,0,1498,1499,1,0,0,0,1499,1501,1,0,0,0,1500,
	1498,1,0,0,0,1501,1504,5,3,0,0,1502,1503,5,242,0,0,1503,1505,5,158,0,0,
	1504,1502,1,0,0,0,1504,1505,1,0,0,0,1505,1516,1,0,0,0,1506,1507,5,118,0,
	0,1507,1508,5,2,0,0,1508,1509,3,16,8,0,1509,1510,5,3,0,0,1510,1516,1,0,
	0,0,1511,1512,5,2,0,0,1512,1513,3,60,30,0,1513,1514,5,3,0,0,1514,1516,1,
	0,0,0,1515,1486,1,0,0,0,1515,1487,1,0,0,0,1515,1491,1,0,0,0,1515,1506,1,
	0,0,0,1515,1511,1,0,0,0,1516,89,1,0,0,0,1517,1518,3,92,46,0,1518,91,1,0,
	0,0,1519,1520,6,46,-1,0,1520,1522,3,96,48,0,1521,1523,3,94,47,0,1522,1521,
	1,0,0,0,1522,1523,1,0,0,0,1523,1527,1,0,0,0,1524,1525,5,146,0,0,1525,1527,
	3,92,46,3,1526,1519,1,0,0,0,1526,1524,1,0,0,0,1527,1536,1,0,0,0,1528,1529,
	10,2,0,0,1529,1530,5,23,0,0,1530,1535,3,92,46,3,1531,1532,10,1,0,0,1532,
	1533,5,156,0,0,1533,1535,3,92,46,2,1534,1528,1,0,0,0,1534,1531,1,0,0,0,
	1535,1538,1,0,0,0,1536,1534,1,0,0,0,1536,1537,1,0,0,0,1537,93,1,0,0,0,1538,
	1536,1,0,0,0,1539,1540,3,108,54,0,1540,1541,3,96,48,0,1541,1601,1,0,0,0,
	1542,1543,3,108,54,0,1543,1544,3,110,55,0,1544,1545,5,2,0,0,1545,1546,3,
	16,8,0,1546,1547,5,3,0,0,1547,1601,1,0,0,0,1548,1550,5,146,0,0,1549,1548,
	1,0,0,0,1549,1550,1,0,0,0,1550,1551,1,0,0,0,1551,1552,5,31,0,0,1552,1553,
	3,96,48,0,1553,1554,5,23,0,0,1554,1555,3,96,48,0,1555,1601,1,0,0,0,1556,
	1558,5,146,0,0,1557,1556,1,0,0,0,1557,1558,1,0,0,0,1558,1559,1,0,0,0,1559,
	1560,5,102,0,0,1560,1561,5,2,0,0,1561,1566,3,90,45,0,1562,1563,5,4,0,0,
	1563,1565,3,90,45,0,1564,1562,1,0,0,0,1565,1568,1,0,0,0,1566,1564,1,0,0,
	0,1566,1567,1,0,0,0,1567,1569,1,0,0,0,1568,1566,1,0,0,0,1569,1570,5,3,0,
	0,1570,1601,1,0,0,0,1571,1573,5,146,0,0,1572,1571,1,0,0,0,1572,1573,1,0,
	0,0,1573,1574,1,0,0,0,1574,1575,5,102,0,0,1575,1576,5,2,0,0,1576,1577,3,
	16,8,0,1577,1578,5,3,0,0,1578,1601,1,0,0,0,1579,1581,5,146,0,0,1580,1579,
	1,0,0,0,1580,1581,1,0,0,0,1581,1582,1,0,0,0,1582,1583,5,121,0,0,1583,1586,
	3,96,48,0,1584,1585,5,72,0,0,1585,1587,3,96,48,0,1586,1584,1,0,0,0,1586,
	1587,1,0,0,0,1587,1601,1,0,0,0,1588,1590,5,113,0,0,1589,1591,5,146,0,0,
	1590,1589,1,0,0,0,1590,1591,1,0,0,0,1591,1592,1,0,0,0,1592,1601,5,147,0,
	0,1593,1595,5,113,0,0,1594,1596,5,146,0,0,1595,1594,1,0,0,0,1595,1596,1,
	0,0,0,1596,1597,1,0,0,0,1597,1598,5,65,0,0,1598,1599,5,87,0,0,1599,1601,
	3,96,48,0,1600,1539,1,0,0,0,1600,1542,1,0,0,0,1600,1549,1,0,0,0,1600,1557,
	1,0,0,0,1600,1572,1,0,0,0,1600,1580,1,0,0,0,1600,1588,1,0,0,0,1600,1593,
	1,0,0,0,1601,95,1,0,0,0,1602,1603,6,48,-1,0,1603,1607,3,98,49,0,1604,1605,
	7,14,0,0,1605,1607,3,96,48,4,1606,1602,1,0,0,0,1606,1604,1,0,0,0,1607,1622,
	1,0,0,0,1608,1609,10,3,0,0,1609,1610,7,15,0,0,1610,1621,3,96,48,4,1611,
	1612,10,2,0,0,1612,1613,7,14,0,0,1613,1621,3,96,48,3,1614,1615,10,1,0,0,
	1615,1616,5,259,0,0,1616,1621,3,96,48,2,1617,1618,10,5,0,0,1618,1619,5,
	28,0,0,1619,1621,3,106,53,0,1620,1608,1,0,0,0,1620,1611,1,0,0,0,1620,1614,
	1,0,0,0,1620,1617,1,0,0,0,1621,1624,1,0,0,0,1622,1620,1,0,0,0,1622,1623,
	1,0,0,0,1623,97,1,0,0,0,1624,1622,1,0,0,0,1625,1626,6,49,-1,0,1626,1875,
	5,147,0,0,1627,1875,3,114,57,0,1628,1629,3,170,85,0,1629,1630,3,104,52,
	0,1630,1875,1,0,0,0,1631,1632,5,67,0,0,1632,1633,5,171,0,0,1633,1875,3,
	104,52,0,1634,1875,3,172,86,0,1635,1875,3,112,56,0,1636,1875,3,104,52,0,
	1637,1875,5,263,0,0,1638,1875,5,260,0,0,1639,1640,5,169,0,0,1640,1641,5,
	2,0,0,1641,1642,3,96,48,0,1642,1643,5,102,0,0,1643,1644,3,96,48,0,1644,
	1645,5,3,0,0,1645,1875,1,0,0,0,1646,1647,5,2,0,0,1647,1650,3,90,45,0,1648,
	1649,5,4,0,0,1649,1651,3,90,45,0,1650,1648,1,0,0,0,1651,1652,1,0,0,0,1652,
	1650,1,0,0,0,1652,1653,1,0,0,0,1653,1654,1,0,0,0,1654,1655,5,3,0,0,1655,
	1875,1,0,0,0,1656,1657,5,191,0,0,1657,1658,5,2,0,0,1658,1663,3,90,45,0,
	1659,1660,5,4,0,0,1660,1662,3,90,45,0,1661,1659,1,0,0,0,1662,1665,1,0,0,
	0,1663,1661,1,0,0,0,1663,1664,1,0,0,0,1664,1666,1,0,0,0,1665,1663,1,0,0,
	0,1666,1667,5,3,0,0,1667,1875,1,0,0,0,1668,1669,3,162,81,0,1669,1670,5,
	2,0,0,1670,1671,5,256,0,0,1671,1673,5,3,0,0,1672,1674,3,128,64,0,1673,1672,
	1,0,0,0,1673,1674,1,0,0,0,1674,1676,1,0,0,0,1675,1677,3,132,66,0,1676,1675,
	1,0,0,0,1676,1677,1,0,0,0,1677,1875,1,0,0,0,1678,1680,3,100,50,0,1679,1678,
	1,0,0,0,1679,1680,1,0,0,0,1680,1681,1,0,0,0,1681,1682,3,162,81,0,1682,1694,
	5,2,0,0,1683,1685,3,56,28,0,1684,1683,1,0,0,0,1684,1685,1,0,0,0,1685,1686,
	1,0,0,0,1686,1691,3,90,45,0,1687,1688,5,4,0,0,1688,1690,3,90,45,0,1689,
	1687,1,0,0,0,1690,1693,1,0,0,0,1691,1689,1,0,0,0,1691,1692,1,0,0,0,1692,
	1695,1,0,0,0,1693,1691,1,0,0,0,1694,1684,1,0,0,0,1694,1695,1,0,0,0,1695,
	1706,1,0,0,0,1696,1697,5,157,0,0,1697,1698,5,32,0,0,1698,1703,3,40,20,0,
	1699,1700,5,4,0,0,1700,1702,3,40,20,0,1701,1699,1,0,0,0,1702,1705,1,0,0,
	0,1703,1701,1,0,0,0,1703,1704,1,0,0,0,1704,1707,1,0,0,0,1705,1703,1,0,0,
	0,1706,1696,1,0,0,0,1706,1707,1,0,0,0,1707,1708,1,0,0,0,1708,1710,5,3,0,
	0,1709,1711,3,128,64,0,1710,1709,1,0,0,0,1710,1711,1,0,0,0,1711,1716,1,
	0,0,0,1712,1714,3,102,51,0,1713,1712,1,0,0,0,1713,1714,1,0,0,0,1714,1715,
	1,0,0,0,1715,1717,3,132,66,0,1716,1713,1,0,0,0,1716,1717,1,0,0,0,1717,1875,
	1,0,0,0,1718,1719,3,170,85,0,1719,1720,3,132,66,0,1720,1875,1,0,0,0,1721,
	1722,3,170,85,0,1722,1723,5,6,0,0,1723,1724,3,90,45,0,1724,1875,1,0,0,0,
	1725,1734,5,2,0,0,1726,1731,3,170,85,0,1727,1728,5,4,0,0,1728,1730,3,170,
	85,0,1729,1727,1,0,0,0,1730,1733,1,0,0,0,1731,1729,1,0,0,0,1731,1732,1,
	0,0,0,1732,1735,1,0,0,0,1733,1731,1,0,0,0,1734,1726,1,0,0,0,1734,1735,1,
	0,0,0,1735,1736,1,0,0,0,1736,1737,5,3,0,0,1737,1738,5,6,0,0,1738,1875,3,
	90,45,0,1739,1740,5,2,0,0,1740,1741,3,16,8,0,1741,1742,5,3,0,0,1742,1875,
	1,0,0,0,1743,1744,5,76,0,0,1744,1745,5,2,0,0,1745,1746,3,16,8,0,1746,1747,
	5,3,0,0,1747,1875,1,0,0,0,1748,1749,5,35,0,0,1749,1751,3,90,45,0,1750,1752,
	3,126,63,0,1751,1750,1,0,0,0,1752,1753,1,0,0,0,1753,1751,1,0,0,0,1753,1754,
	1,0,0,0,1754,1757,1,0,0,0,1755,1756,5,69,0,0,1756,1758,3,90,45,0,1757,1755,
	1,0,0,0,1757,1758,1,0,0,0,1758,1759,1,0,0,0,1759,1760,5,71,0,0,1760,1875,
	1,0,0,0,1761,1763,5,35,0,0,1762,1764,3,126,63,0,1763,1762,1,0,0,0,1764,
	1765,1,0,0,0,1765,1763,1,0,0,0,1765,1766,1,0,0,0,1766,1769,1,0,0,0,1767,
	1768,5,69,0,0,1768,1770,3,90,45,0,1769,1767,1,0,0,0,1769,1770,1,0,0,0,1770,
	1771,1,0,0,0,1771,1772,5,71,0,0,1772,1875,1,0,0,0,1773,1774,5,36,0,0,1774,
	1775,5,2,0,0,1775,1776,3,90,45,0,1776,1777,5,26,0,0,1777,1778,3,120,60,
	0,1778,1779,5,3,0,0,1779,1875,1,0,0,0,1780,1781,5,223,0,0,1781,1782,5,2,
	0,0,1782,1783,3,90,45,0,1783,1784,5,26,0,0,1784,1785,3,120,60,0,1785,1786,
	5,3,0,0,1786,1875,1,0,0,0,1787,1788,5,25,0,0,1788,1797,5,7,0,0,1789,1794,
	3,90,45,0,1790,1791,5,4,0,0,1791,1793,3,90,45,0,1792,1790,1,0,0,0,1793,
	1796,1,0,0,0,1794,1792,1,0,0,0,1794,1795,1,0,0,0,1795,1798,1,0,0,0,1796,
	1794,1,0,0,0,1797,1789,1,0,0,0,1797,1798,1,0,0,0,1798,1799,1,0,0,0,1799,
	1875,5,8,0,0,1800,1875,3,170,85,0,1801,1875,5,49,0,0,1802,1806,5,53,0,0,
	1803,1804,5,2,0,0,1804,1805,5,264,0,0,1805,1807,5,3,0,0,1806,1803,1,0,0,
	0,1806,1807,1,0,0,0,1807,1875,1,0,0,0,1808,1812,5,54,0,0,1809,1810,5,2,
	0,0,1810,1811,5,264,0,0,1811,1813,5,3,0,0,1812,1809,1,0,0,0,1812,1813,1,
	0,0,0,1813,1875,1,0,0,0,1814,1818,5,124,0,0,1815,1816,5,2,0,0,1816,1817,
	5,264,0,0,1817,1819,5,3,0,0,1818,1815,1,0,0,0,1818,1819,1,0,0,0,1819,1875,
	1,0,0,0,1820,1824,5,125,0,0,1821,1822,5,2,0,0,1822,1823,5,264,0,0,1823,
	1825,5,3,0,0,1824,1821,1,0,0,0,1824,1825,1,0,0,0,1825,1875,1,0,0,0,1826,
	1875,5,55,0,0,1827,1875,5,48,0,0,1828,1875,5,52,0,0,1829,1875,5,50,0,0,
	1830,1831,5,209,0,0,1831,1832,5,2,0,0,1832,1833,3,96,48,0,1833,1834,5,87,
	0,0,1834,1837,3,96,48,0,1835,1836,5,85,0,0,1836,1838,3,96,48,0,1837,1835,
	1,0,0,0,1837,1838,1,0,0,0,1838,1839,1,0,0,0,1839,1840,5,3,0,0,1840,1875,
	1,0,0,0,1841,1842,5,145,0,0,1842,1843,5,2,0,0,1843,1846,3,96,48,0,1844,
	1845,5,4,0,0,1845,1847,3,118,59,0,1846,1844,1,0,0,0,1846,1847,1,0,0,0,1847,
	1848,1,0,0,0,1848,1849,5,3,0,0,1849,1875,1,0,0,0,1850,1851,5,78,0,0,1851,
	1852,5,2,0,0,1852,1853,3,170,85,0,1853,1854,5,87,0,0,1854,1855,3,96,48,
	0,1855,1856,5,3,0,0,1856,1875,1,0,0,0,1857,1858,5,2,0,0,1858,1859,3,90,
	45,0,1859,1860,5,3,0,0,1860,1875,1,0,0,0,1861,1862,5,96,0,0,1862,1871,5,
	2,0,0,1863,1868,3,162,81,0,1864,1865,5,4,0,0,1865,1867,3,162,81,0,1866,
	1864,1,0,0,0,1867,1870,1,0,0,0,1868,1866,1,0,0,0,1868,1869,1,0,0,0,1869,
	1872,1,0,0,0,1870,1868,1,0,0,0,1871,1863,1,0,0,0,1871,1872,1,0,0,0,1872,
	1873,1,0,0,0,1873,1875,5,3,0,0,1874,1625,1,0,0,0,1874,1627,1,0,0,0,1874,
	1628,1,0,0,0,1874,1631,1,0,0,0,1874,1634,1,0,0,0,1874,1635,1,0,0,0,1874,
	1636,1,0,0,0,1874,1637,1,0,0,0,1874,1638,1,0,0,0,1874,1639,1,0,0,0,1874,
	1646,1,0,0,0,1874,1656,1,0,0,0,1874,1668,1,0,0,0,1874,1679,1,0,0,0,1874,
	1718,1,0,0,0,1874,1721,1,0,0,0,1874,1725,1,0,0,0,1874,1739,1,0,0,0,1874,
	1743,1,0,0,0,1874,1748,1,0,0,0,1874,1761,1,0,0,0,1874,1773,1,0,0,0,1874,
	1780,1,0,0,0,1874,1787,1,0,0,0,1874,1800,1,0,0,0,1874,1801,1,0,0,0,1874,
	1802,1,0,0,0,1874,1808,1,0,0,0,1874,1814,1,0,0,0,1874,1820,1,0,0,0,1874,
	1826,1,0,0,0,1874,1827,1,0,0,0,1874,1828,1,0,0,0,1874,1829,1,0,0,0,1874,
	1830,1,0,0,0,1874,1841,1,0,0,0,1874,1850,1,0,0,0,1874,1857,1,0,0,0,1874,
	1861,1,0,0,0,1875,1886,1,0,0,0,1876,1877,10,17,0,0,1877,1878,5,7,0,0,1878,
	1879,3,96,48,0,1879,1880,5,8,0,0,1880,1885,1,0,0,0,1881,1882,10,15,0,0,
	1882,1883,5,1,0,0,1883,1885,3,170,85,0,1884,1876,1,0,0,0,1884,1881,1,0,
	0,0,1885,1888,1,0,0,0,1886,1884,1,0,0,0,1886,1887,1,0,0,0,1887,99,1,0,0,
	0,1888,1886,1,0,0,0,1889,1890,7,16,0,0,1890,101,1,0,0,0,1891,1892,5,101,
	0,0,1892,1896,5,149,0,0,1893,1894,5,183,0,0,1894,1896,5,149,0,0,1895,1891,
	1,0,0,0,1895,1893,1,0,0,0,1896,103,1,0,0,0,1897,1904,5,261,0,0,1898,1901,
	5,262,0,0,1899,1900,5,225,0,0,1900,1902,5,261,0,0,1901,1899,1,0,0,0,1901,
	1902,1,0,0,0,1902,1904,1,0,0,0,1903,1897,1,0,0,0,1903,1898,1,0,0,0,1904,
	105,1,0,0,0,1905,1906,5,217,0,0,1906,1907,5,247,0,0,1907,1912,3,114,57,
	0,1908,1909,5,217,0,0,1909,1910,5,247,0,0,1910,1912,3,104,52,0,1911,1905,
	1,0,0,0,1911,1908,1,0,0,0,1912,107,1,0,0,0,1913,1914,7,17,0,0,1914,109,
	1,0,0,0,1915,1916,7,18,0,0,1916,111,1,0,0,0,1917,1918,7,19,0,0,1918,113,
	1,0,0,0,1919,1921,5,109,0,0,1920,1922,7,14,0,0,1921,1920,1,0,0,0,1921,1922,
	1,0,0,0,1922,1923,1,0,0,0,1923,1924,3,104,52,0,1924,1927,3,116,58,0,1925,
	1926,5,219,0,0,1926,1928,3,116,58,0,1927,1925,1,0,0,0,1927,1928,1,0,0,0,
	1928,115,1,0,0,0,1929,1930,7,20,0,0,1930,117,1,0,0,0,1931,1932,7,21,0,0,
	1932,119,1,0,0,0,1933,1934,6,60,-1,0,1934,1935,5,191,0,0,1935,1936,5,2,
	0,0,1936,1941,3,122,61,0,1937,1938,5,4,0,0,1938,1940,3,122,61,0,1939,1937,
	1,0,0,0,1940,1943,1,0,0,0,1941,1939,1,0,0,0,1941,1942,1,0,0,0,1942,1944,
	1,0,0,0,1943,1941,1,0,0,0,1944,1945,5,3,0,0,1945,2025,1,0,0,0,1946,1947,
	5,109,0,0,1947,1950,3,116,58,0,1948,1949,5,219,0,0,1949,1951,3,116,58,0,
	1950,1948,1,0,0,0,1950,1951,1,0,0,0,1951,2025,1,0,0,0,1952,1957,5,218,0,
	0,1953,1954,5,2,0,0,1954,1955,3,124,62,0,1955,1956,5,3,0,0,1956,1958,1,
	0,0,0,1957,1953,1,0,0,0,1957,1958,1,0,0,0,1958,1962,1,0,0,0,1959,1960,5,
	243,0,0,1960,1961,5,217,0,0,1961,1963,5,247,0,0,1962,1959,1,0,0,0,1962,
	1963,1,0,0,0,1963,2025,1,0,0,0,1964,1969,5,218,0,0,1965,1966,5,2,0,0,1966,
	1967,3,124,62,0,1967,1968,5,3,0,0,1968,1970,1,0,0,0,1969,1965,1,0,0,0,1969,
	1970,1,0,0,0,1970,1971,1,0,0,0,1971,1972,5,242,0,0,1972,1973,5,217,0,0,
	1973,2025,5,247,0,0,1974,1979,5,217,0,0,1975,1976,5,2,0,0,1976,1977,3,124,
	62,0,1977,1978,5,3,0,0,1978,1980,1,0,0,0,1979,1975,1,0,0,0,1979,1980,1,
	0,0,0,1980,1984,1,0,0,0,1981,1982,5,243,0,0,1982,1983,5,217,0,0,1983,1985,
	5,247,0,0,1984,1981,1,0,0,0,1984,1985,1,0,0,0,1985,2025,1,0,0,0,1986,1991,
	5,217,0,0,1987,1988,5,2,0,0,1988,1989,3,124,62,0,1989,1990,5,3,0,0,1990,
	1992,1,0,0,0,1991,1987,1,0,0,0,1991,1992,1,0,0,0,1992,1993,1,0,0,0,1993,
	1994,5,242,0,0,1994,1995,5,217,0,0,1995,2025,5,247,0,0,1996,1997,5,67,0,
	0,1997,2025,5,171,0,0,1998,1999,5,25,0,0,1999,2000,5,250,0,0,2000,2001,
	3,120,60,0,2001,2002,5,252,0,0,2002,2025,1,0,0,0,2003,2004,5,127,0,0,2004,
	2005,5,250,0,0,2005,2006,3,120,60,0,2006,2007,5,4,0,0,2007,2008,3,120,60,
	0,2008,2009,5,252,0,0,2009,2025,1,0,0,0,2010,2022,3,170,85,0,2011,2012,
	5,2,0,0,2012,2017,3,124,62,0,2013,2014,5,4,0,0,2014,2016,3,124,62,0,2015,
	2013,1,0,0,0,2016,2019,1,0,0,0,2017,2015,1,0,0,0,2017,2018,1,0,0,0,2018,
	2020,1,0,0,0,2019,2017,1,0,0,0,2020,2021,5,3,0,0,2021,2023,1,0,0,0,2022,
	2011,1,0,0,0,2022,2023,1,0,0,0,2023,2025,1,0,0,0,2024,1933,1,0,0,0,2024,
	1946,1,0,0,0,2024,1952,1,0,0,0,2024,1964,1,0,0,0,2024,1974,1,0,0,0,2024,
	1986,1,0,0,0,2024,1996,1,0,0,0,2024,1998,1,0,0,0,2024,2003,1,0,0,0,2024,
	2010,1,0,0,0,2025,2035,1,0,0,0,2026,2027,10,2,0,0,2027,2031,5,25,0,0,2028,
	2029,5,7,0,0,2029,2030,5,264,0,0,2030,2032,5,8,0,0,2031,2028,1,0,0,0,2031,
	2032,1,0,0,0,2032,2034,1,0,0,0,2033,2026,1,0,0,0,2034,2037,1,0,0,0,2035,
	2033,1,0,0,0,2035,2036,1,0,0,0,2036,121,1,0,0,0,2037,2035,1,0,0,0,2038,
	2043,3,120,60,0,2039,2040,3,170,85,0,2040,2041,3,120,60,0,2041,2043,1,0,
	0,0,2042,2038,1,0,0,0,2042,2039,1,0,0,0,2043,123,1,0,0,0,2044,2047,5,264,
	0,0,2045,2047,3,120,60,0,2046,2044,1,0,0,0,2046,2045,1,0,0,0,2047,125,1,
	0,0,0,2048,2049,5,239,0,0,2049,2050,3,90,45,0,2050,2051,5,215,0,0,2051,
	2052,3,90,45,0,2052,127,1,0,0,0,2053,2054,5,81,0,0,2054,2055,5,2,0,0,2055,
	2056,5,240,0,0,2056,2057,3,92,46,0,2057,2058,5,3,0,0,2058,129,1,0,0,0,2059,
	2060,5,239,0,0,2060,2063,5,129,0,0,2061,2062,5,23,0,0,2062,2064,3,90,45,
	0,2063,2061,1,0,0,0,2063,2064,1,0,0,0,2064,2065,1,0,0,0,2065,2066,5,215,
	0,0,2066,2067,5,231,0,0,2067,2068,5,202,0,0,2068,2069,3,170,85,0,2069,2070,
	5,248,0,0,2070,2078,3,90,45,0,2071,2072,5,4,0,0,2072,2073,3,170,85,0,2073,
	2074,5,248,0,0,2074,2075,3,90,45,0,2075,2077,1,0,0,0,2076,2071,1,0,0,0,
	2077,2080,1,0,0,0,2078,2076,1,0,0,0,2078,2079,1,0,0,0,2079,2124,1,0,0,0,
	2080,2078,1,0,0,0,2081,2082,5,239,0,0,2082,2085,5,129,0,0,2083,2084,5,23,
	0,0,2084,2086,3,90,45,0,2085,2083,1,0,0,0,2085,2086,1,0,0,0,2086,2087,1,
	0,0,0,2087,2088,5,215,0,0,2088,2124,5,61,0,0,2089,2090,5,239,0,0,2090,2091,
	5,146,0,0,2091,2094,5,129,0,0,2092,2093,5,23,0,0,2093,2095,3,90,45,0,2094,
	2092,1,0,0,0,2094,2095,1,0,0,0,2095,2096,1,0,0,0,2096,2097,5,215,0,0,2097,
	2109,5,107,0,0,2098,2099,5,2,0,0,2099,2104,3,170,85,0,2100,2101,5,4,0,0,
	2101,2103,3,170,85,0,2102,2100,1,0,0,0,2103,2106,1,0,0,0,2104,2102,1,0,
	0,0,2104,2105,1,0,0,0,2105,2107,1,0,0,0,2106,2104,1,0,0,0,2107,2108,5,3,
	0,0,2108,2110,1,0,0,0,2109,2098,1,0,0,0,2109,2110,1,0,0,0,2110,2111,1,0,
	0,0,2111,2112,5,236,0,0,2112,2113,5,2,0,0,2113,2118,3,90,45,0,2114,2115,
	5,4,0,0,2115,2117,3,90,45,0,2116,2114,1,0,0,0,2117,2120,1,0,0,0,2118,2116,
	1,0,0,0,2118,2119,1,0,0,0,2119,2121,1,0,0,0,2120,2118,1,0,0,0,2121,2122,
	5,3,0,0,2122,2124,1,0,0,0,2123,2059,1,0,0,0,2123,2081,1,0,0,0,2123,2089,
	1,0,0,0,2124,131,1,0,0,0,2125,2131,5,161,0,0,2126,2132,3,170,85,0,2127,
	2128,5,2,0,0,2128,2129,3,52,26,0,2129,2130,5,3,0,0,2130,2132,1,0,0,0,2131,
	2126,1,0,0,0,2131,2127,1,0,0,0,2132,133,1,0,0,0,2133,2134,5,133,0,0,2134,
	2139,3,72,36,0,2135,2136,5,4,0,0,2136,2138,3,72,36,0,2137,2135,1,0,0,0,
	2138,2141,1,0,0,0,2139,2137,1,0,0,0,2139,2140,1,0,0,0,2140,2143,1,0,0,0,
	2141,2139,1,0,0,0,2142,2133,1,0,0,0,2142,2143,1,0,0,0,2143,2144,1,0,0,0,
	2144,2148,3,136,68,0,2145,2146,5,19,0,0,2146,2147,5,128,0,0,2147,2149,3,
	78,39,0,2148,2145,1,0,0,0,2148,2149,1,0,0,0,2149,2151,1,0,0,0,2150,2152,
	7,13,0,0,2151,2150,1,0,0,0,2151,2152,1,0,0,0,2152,2158,1,0,0,0,2153,2154,
	5,166,0,0,2154,2155,5,2,0,0,2155,2156,3,140,70,0,2156,2157,5,3,0,0,2157,
	2159,1,0,0,0,2158,2153,1,0,0,0,2158,2159,1,0,0,0,2159,2169,1,0,0,0,2160,
	2161,5,208,0,0,2161,2166,3,80,40,0,2162,2163,5,4,0,0,2163,2165,3,80,40,
	0,2164,2162,1,0,0,0,2165,2168,1,0,0,0,2166,2164,1,0,0,0,2166,2167,1,0,0,
	0,2167,2170,1,0,0,0,2168,2166,1,0,0,0,2169,2160,1,0,0,0,2169,2170,1,0,0,
	0,2170,2180,1,0,0,0,2171,2172,5,64,0,0,2172,2177,3,82,41,0,2173,2174,5,
	4,0,0,2174,2176,3,82,41,0,2175,2173,1,0,0,0,2176,2179,1,0,0,0,2177,2175,
	1,0,0,0,2177,2178,1,0,0,0,2178,2181,1,0,0,0,2179,2177,1,0,0,0,2180,2171,
	1,0,0,0,2180,2181,1,0,0,0,2181,135,1,0,0,0,2182,2183,5,175,0,0,2183,2207,
	3,138,69,0,2184,2185,5,192,0,0,2185,2207,3,138,69,0,2186,2187,5,97,0,0,
	2187,2207,3,138,69,0,2188,2189,5,175,0,0,2189,2190,5,31,0,0,2190,2191,3,
	138,69,0,2191,2192,5,23,0,0,2192,2193,3,138,69,0,2193,2207,1,0,0,0,2194,
	2195,5,192,0,0,2195,2196,5,31,0,0,2196,2197,3,138,69,0,2197,2198,5,23,0,
	0,2198,2199,3,138,69,0,2199,2207,1,0,0,0,2200,2201,5,97,0,0,2201,2202,5,
	31,0,0,2202,2203,3,138,69,0,2203,2204,5,23,0,0,2204,2205,3,138,69,0,2205,
	2207,1,0,0,0,2206,2182,1,0,0,0,2206,2184,1,0,0,0,2206,2186,1,0,0,0,2206,
	2188,1,0,0,0,2206,2194,1,0,0,0,2206,2200,1,0,0,0,2207,137,1,0,0,0,2208,
	2209,5,226,0,0,2209,2218,5,170,0,0,2210,2211,5,226,0,0,2211,2218,5,84,0,
	0,2212,2213,5,47,0,0,2213,2218,5,191,0,0,2214,2215,3,90,45,0,2215,2216,
	7,22,0,0,2216,2218,1,0,0,0,2217,2208,1,0,0,0,2217,2210,1,0,0,0,2217,2212,
	1,0,0,0,2217,2214,1,0,0,0,2218,139,1,0,0,0,2219,2220,6,70,-1,0,2220,2222,
	3,142,71,0,2221,2223,3,144,72,0,2222,2221,1,0,0,0,2222,2223,1,0,0,0,2223,
	2231,1,0,0,0,2224,2225,10,2,0,0,2225,2230,3,140,70,3,2226,2227,10,1,0,0,
	2227,2228,5,9,0,0,2228,2230,3,140,70,2,2229,2224,1,0,0,0,2229,2226,1,0,
	0,0,2230,2233,1,0,0,0,2231,2229,1,0,0,0,2231,2232,1,0,0,0,2232,141,1,0,
	0,0,2233,2231,1,0,0,0,2234,2260,3,170,85,0,2235,2236,5,2,0,0,2236,2260,
	5,3,0,0,2237,2238,5,168,0,0,2238,2239,5,2,0,0,2239,2244,3,140,70,0,2240,
	2241,5,4,0,0,2241,2243,3,140,70,0,2242,2240,1,0,0,0,2243,2246,1,0,0,0,2244,
	2242,1,0,0,0,2244,2245,1,0,0,0,2245,2247,1,0,0,0,2246,2244,1,0,0,0,2247,
	2248,5,3,0,0,2248,2260,1,0,0,0,2249,2250,5,2,0,0,2250,2251,3,140,70,0,2251,
	2252,5,3,0,0,2252,2260,1,0,0,0,2253,2260,5,10,0,0,2254,2260,5,11,0,0,2255,
	2256,5,12,0,0,2256,2257,3,140,70,0,2257,2258,5,13,0,0,2258,2260,1,0,0,0,
	2259,2234,1,0,0,0,2259,2235,1,0,0,0,2259,2237,1,0,0,0,2259,2249,1,0,0,0,
	2259,2253,1,0,0,0,2259,2254,1,0,0,0,2259,2255,1,0,0,0,2260,143,1,0,0,0,
	2261,2263,5,256,0,0,2262,2264,5,260,0,0,2263,2262,1,0,0,0,2263,2264,1,0,
	0,0,2264,2292,1,0,0,0,2265,2267,5,254,0,0,2266,2268,5,260,0,0,2267,2266,
	1,0,0,0,2267,2268,1,0,0,0,2268,2292,1,0,0,0,2269,2271,5,260,0,0,2270,2272,
	5,260,0,0,2271,2270,1,0,0,0,2271,2272,1,0,0,0,2272,2292,1,0,0,0,2273,2274,
	5,14,0,0,2274,2275,5,264,0,0,2275,2277,5,15,0,0,2276,2278,5,260,0,0,2277,
	2276,1,0,0,0,2277,2278,1,0,0,0,2278,2292,1,0,0,0,2279,2281,5,14,0,0,2280,
	2282,5,264,0,0,2281,2280,1,0,0,0,2281,2282,1,0,0,0,2282,2283,1,0,0,0,2283,
	2285,5,4,0,0,2284,2286,5,264,0,0,2285,2284,1,0,0,0,2285,2286,1,0,0,0,2286,
	2287,1,0,0,0,2287,2289,5,15,0,0,2288,2290,5,260,0,0,2289,2288,1,0,0,0,2289,
	2290,1,0,0,0,2290,2292,1,0,0,0,2291,2261,1,0,0,0,2291,2265,1,0,0,0,2291,
	2269,1,0,0,0,2291,2273,1,0,0,0,2291,2279,1,0,0,0,2292,145,1,0,0,0,2293,
	2294,3,170,85,0,2294,2295,5,248,0,0,2295,2296,3,90,45,0,2296,147,1,0,0,
	0,2297,2298,5,86,0,0,2298,2302,7,23,0,0,2299,2300,5,224,0,0,2300,2302,7,
	24,0,0,2301,2297,1,0,0,0,2301,2299,1,0,0,0,2302,149,1,0,0,0,2303,2304,5,
	114,0,0,2304,2305,5,120,0,0,2305,2309,3,152,76,0,2306,2307,5,176,0,0,2307,
	2309,7,25,0,0,2308,2303,1,0,0,0,2308,2306,1,0,0,0,2309,151,1,0,0,0,2310,
	2311,5,176,0,0,2311,2318,5,227,0,0,2312,2313,5,176,0,0,2313,2318,5,42,0,
	0,2314,2315,5,180,0,0,2315,2318,5,176,0,0,2316,2318,5,200,0,0,2317,2310,
	1,0,0,0,2317,2312,1,0,0,0,2317,2314,1,0,0,0,2317,2316,1,0,0,0,2318,153,
	1,0,0,0,2319,2325,3,90,45,0,2320,2321,3,170,85,0,2321,2322,5,16,0,0,2322,
	2323,3,90,45,0,2323,2325,1,0,0,0,2324,2319,1,0,0,0,2324,2320,1,0,0,0,2325,
	155,1,0,0,0,2326,2327,3,170,85,0,2327,2328,5,1,0,0,2328,2329,3,170,85,0,
	2329,2332,1,0,0,0,2330,2332,3,170,85,0,2331,2326,1,0,0,0,2331,2330,1,0,
	0,0,2332,157,1,0,0,0,2333,2338,3,156,78,0,2334,2335,5,4,0,0,2335,2337,3,
	156,78,0,2336,2334,1,0,0,0,2337,2340,1,0,0,0,2338,2336,1,0,0,0,2338,2339,
	1,0,0,0,2339,159,1,0,0,0,2340,2338,1,0,0,0,2341,2342,7,26,0,0,2342,161,
	1,0,0,0,2343,2348,3,170,85,0,2344,2345,5,1,0,0,2345,2347,3,170,85,0,2346,
	2344,1,0,0,0,2347,2350,1,0,0,0,2348,2346,1,0,0,0,2348,2349,1,0,0,0,2349,
	163,1,0,0,0,2350,2348,1,0,0,0,2351,2355,3,166,83,0,2352,2355,5,55,0,0,2353,
	2355,5,51,0,0,2354,2351,1,0,0,0,2354,2352,1,0,0,0,2354,2353,1,0,0,0,2355,
	165,1,0,0,0,2356,2362,3,170,85,0,2357,2358,5,233,0,0,2358,2362,3,170,85,
	0,2359,2360,5,187,0,0,2360,2362,3,170,85,0,2361,2356,1,0,0,0,2361,2357,
	1,0,0,0,2361,2359,1,0,0,0,2362,167,1,0,0,0,2363,2368,3,170,85,0,2364,2365,
	5,4,0,0,2365,2367,3,170,85,0,2366,2364,1,0,0,0,2367,2370,1,0,0,0,2368,2366,
	1,0,0,0,2368,2369,1,0,0,0,2369,169,1,0,0,0,2370,2368,1,0,0,0,2371,2377,
	5,267,0,0,2372,2377,5,269,0,0,2373,2377,3,174,87,0,2374,2377,5,270,0,0,
	2375,2377,5,268,0,0,2376,2371,1,0,0,0,2376,2372,1,0,0,0,2376,2373,1,0,0,
	0,2376,2374,1,0,0,0,2376,2375,1,0,0,0,2377,171,1,0,0,0,2378,2380,5,255,
	0,0,2379,2378,1,0,0,0,2379,2380,1,0,0,0,2380,2381,1,0,0,0,2381,2391,5,265,
	0,0,2382,2384,5,255,0,0,2383,2382,1,0,0,0,2383,2384,1,0,0,0,2384,2385,1,
	0,0,0,2385,2391,5,266,0,0,2386,2388,5,255,0,0,2387,2386,1,0,0,0,2387,2388,
	1,0,0,0,2388,2389,1,0,0,0,2389,2391,5,264,0,0,2390,2379,1,0,0,0,2390,2383,
	1,0,0,0,2390,2387,1,0,0,0,2391,173,1,0,0,0,2392,2393,7,27,0,0,2393,175,
	1,0,0,0,312,179,189,219,224,228,234,238,259,263,267,271,279,283,286,293,
	302,308,312,318,325,334,343,357,366,372,379,389,396,404,412,427,432,439,
	444,448,456,462,466,480,487,512,515,525,529,542,548,553,557,563,572,578,
	582,589,597,602,606,614,622,627,631,641,648,653,657,667,670,674,677,685,
	690,714,720,722,728,734,736,744,746,752,758,760,775,780,787,799,801,809,
	811,829,832,836,840,858,861,877,887,892,898,901,910,922,925,931,938,943,
	949,953,957,963,971,988,991,996,998,1005,1011,1013,1017,1027,1033,1036,
	1038,1050,1057,1061,1065,1069,1076,1085,1088,1092,1097,1101,1109,1112,1115,
	1122,1133,1136,1146,1149,1160,1165,1173,1176,1180,1189,1198,1201,1210,1213,
	1216,1220,1231,1234,1241,1244,1263,1267,1271,1275,1279,1283,1285,1296,1301,
	1310,1324,1327,1336,1339,1347,1350,1353,1358,1361,1373,1376,1384,1389,1393,
	1395,1397,1412,1414,1425,1446,1456,1467,1471,1473,1481,1498,1504,1515,1522,
	1526,1534,1536,1549,1557,1566,1572,1580,1586,1590,1595,1600,1606,1620,1622,
	1652,1663,1673,1676,1679,1684,1691,1694,1703,1706,1710,1713,1716,1731,1734,
	1753,1757,1765,1769,1794,1797,1806,1812,1818,1824,1837,1846,1868,1871,1874,
	1884,1886,1895,1901,1903,1911,1921,1927,1941,1950,1957,1962,1969,1979,1984,
	1991,2017,2022,2024,2031,2035,2042,2046,2063,2078,2085,2094,2104,2109,2118,
	2123,2131,2139,2142,2148,2151,2158,2166,2169,2177,2180,2206,2217,2222,2229,
	2231,2244,2259,2263,2267,2271,2277,2281,2285,2289,2291,2301,2308,2317,2324,
	2331,2338,2348,2354,2361,2368,2376,2379,2383,2387,2390];

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
	public _catalog!: IdentifierContext;
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
	public IN(): TerminalNode {
		return this.getToken(trinoSqlParserParser.IN, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
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
export class TruncateTableContext extends StatementContext {
	constructor(parser: trinoSqlParserParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TRUNCATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TRUNCATE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TABLE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTruncateTable) {
	 		listener.enterTruncateTable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTruncateTable) {
	 		listener.exitTruncateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTruncateTable) {
			return visitor.visitTruncateTable(this);
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
	public TRUNCATE(): TerminalNode {
		return this.getToken(trinoSqlParserParser.TRUNCATE, 0);
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
