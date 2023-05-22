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
	public static readonly DELIMITER = 274;
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
                                                            "'GRAPHVIZ'", 
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
                                                             "GRANTS", "GRAPHVIZ", 
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2071862276) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294691839) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1872232215) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 4289639863) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 3923771327) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4152344575) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 3757047807) !== 0) || ((((_la - 227)) & ~0x1F) === 0 && ((1 << (_la - 227)) & 2248668125) !== 0) || ((((_la - 259)) & ~0x1F) === 0 && ((1 << (_la - 259)) & 1023) !== 0)) {
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
			this.state = 890;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
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
				if (_la===240) {
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
				if (_la===34 || _la===183) {
					{
					this.state = 237;
					_la = this._input.LA(1);
					if(!(_la===34 || _la===183)) {
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
				if (_la===240) {
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
				if (_la===240) {
					{
					this.state = 281;
					this.match(trinoSqlParserParser.WITH);
					this.state = 283;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===142) {
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
				if (_la===240) {
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
				if (_la===238) {
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
				case 259:
				case 260:
					{
					this.state = 352;
					this.string_();
					}
					break;
				case 146:
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
				case 259:
				case 260:
					{
					this.state = 361;
					this.string_();
					}
					break;
				case 146:
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
				if (_la===240) {
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
				if (_la===155) {
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
				if (_la===240) {
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
				if (_la===155) {
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
				if (_la===196) {
					{
					this.state = 461;
					this.match(trinoSqlParserParser.SECURITY);
					this.state = 462;
					_la = this._input.LA(1);
					if(!(_la===60 || _la===110)) {
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
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1872231699) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 4289639607) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 3923771327) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4152344063) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 3756982255) !== 0) || ((((_la - 227)) & ~0x1F) === 0 && ((1 << (_la - 227)) & 2248659805) !== 0) || ((((_la - 259)) & ~0x1F) === 0 && ((1 << (_la - 259)) & 1023) !== 0)) {
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
				if (_la===240) {
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
				if (_la===101) {
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
				if (_la===240) {
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

				}
				break;
			case 32:
				localctx = new RevokeRolesContext(this, localctx);
				this.enterOuterAlt(localctx, 32);
				{
				this.state = 552;
				this.match(trinoSqlParserParser.REVOKE);
				this.state = 556;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 553;
					this.match(trinoSqlParserParser.ADMIN);
					this.state = 554;
					this.match(trinoSqlParserParser.OPTION);
					this.state = 555;
					this.match(trinoSqlParserParser.FOR);
					}
					break;
				}
				this.state = 558;
				this.roles();
				this.state = 559;
				this.match(trinoSqlParserParser.FROM);
				this.state = 560;
				this.principal();
				this.state = 565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 561;
					this.match(trinoSqlParserParser.T__3);
					this.state = 562;
					this.principal();
					}
					}
					this.state = 567;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===91) {
					{
					this.state = 568;
					this.match(trinoSqlParserParser.GRANTED);
					this.state = 569;
					this.match(trinoSqlParserParser.BY);
					this.state = 570;
					this.grantor();
					}
				}

				}
				break;
			case 33:
				localctx = new SetRoleContext(this, localctx);
				this.enterOuterAlt(localctx, 33);
				{
				this.state = 573;
				this.match(trinoSqlParserParser.SET);
				this.state = 574;
				this.match(trinoSqlParserParser.ROLE);
				this.state = 578;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 50, this._ctx) ) {
				case 1:
					{
					this.state = 575;
					this.match(trinoSqlParserParser.ALL);
					}
					break;
				case 2:
					{
					this.state = 576;
					this.match(trinoSqlParserParser.NONE);
					}
					break;
				case 3:
					{
					this.state = 577;
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
				this.state = 580;
				this.match(trinoSqlParserParser.GRANT);
				this.state = 591;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 61:
				case 106:
				case 198:
				case 229:
					{
					this.state = 581;
					this.privilege();
					this.state = 586;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 582;
						this.match(trinoSqlParserParser.T__3);
						this.state = 583;
						this.privilege();
						}
						}
						this.state = 588;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 20:
					{
					this.state = 589;
					this.match(trinoSqlParserParser.ALL);
					this.state = 590;
					this.match(trinoSqlParserParser.PRIVILEGES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 593;
				this.match(trinoSqlParserParser.ON);
				this.state = 595;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 53, this._ctx) ) {
				case 1:
					{
					this.state = 594;
					_la = this._input.LA(1);
					if(!(_la===193 || _la===210)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 597;
				this.qualifiedName();
				this.state = 598;
				this.match(trinoSqlParserParser.TO);
				this.state = 599;
				(localctx as GrantContext)._grantee = this.principal();
				this.state = 603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===240) {
					{
					this.state = 600;
					this.match(trinoSqlParserParser.WITH);
					this.state = 601;
					this.match(trinoSqlParserParser.GRANT);
					this.state = 602;
					this.match(trinoSqlParserParser.OPTION);
					}
				}

				}
				break;
			case 35:
				localctx = new RevokeContext(this, localctx);
				this.enterOuterAlt(localctx, 35);
				{
				this.state = 605;
				this.match(trinoSqlParserParser.REVOKE);
				this.state = 609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 606;
					this.match(trinoSqlParserParser.GRANT);
					this.state = 607;
					this.match(trinoSqlParserParser.OPTION);
					this.state = 608;
					this.match(trinoSqlParserParser.FOR);
					}
				}

				this.state = 621;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 61:
				case 106:
				case 198:
				case 229:
					{
					this.state = 611;
					this.privilege();
					this.state = 616;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 612;
						this.match(trinoSqlParserParser.T__3);
						this.state = 613;
						this.privilege();
						}
						}
						this.state = 618;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 20:
					{
					this.state = 619;
					this.match(trinoSqlParserParser.ALL);
					this.state = 620;
					this.match(trinoSqlParserParser.PRIVILEGES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 623;
				this.match(trinoSqlParserParser.ON);
				this.state = 625;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 624;
					_la = this._input.LA(1);
					if(!(_la===193 || _la===210)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 627;
				this.qualifiedName();
				this.state = 628;
				this.match(trinoSqlParserParser.FROM);
				this.state = 629;
				(localctx as RevokeContext)._grantee = this.principal();
				}
				break;
			case 36:
				localctx = new ShowGrantsContext(this, localctx);
				this.enterOuterAlt(localctx, 36);
				{
				this.state = 631;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 632;
				this.match(trinoSqlParserParser.GRANTS);
				this.state = 638;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===151) {
					{
					this.state = 633;
					this.match(trinoSqlParserParser.ON);
					this.state = 635;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===210) {
						{
						this.state = 634;
						this.match(trinoSqlParserParser.TABLE);
						}
					}

					this.state = 637;
					this.qualifiedName();
					}
				}

				}
				break;
			case 37:
				localctx = new ExplainContext(this, localctx);
				this.enterOuterAlt(localctx, 37);
				{
				this.state = 640;
				this.match(trinoSqlParserParser.EXPLAIN);
				this.state = 642;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 61, this._ctx) ) {
				case 1:
					{
					this.state = 641;
					this.match(trinoSqlParserParser.ANALYZE);
					}
					break;
				}
				this.state = 645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===235) {
					{
					this.state = 644;
					this.match(trinoSqlParserParser.VERBOSE);
					}
				}

				this.state = 658;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 64, this._ctx) ) {
				case 1:
					{
					this.state = 647;
					this.match(trinoSqlParserParser.T__1);
					this.state = 648;
					this.explainOption();
					this.state = 653;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 649;
						this.match(trinoSqlParserParser.T__3);
						this.state = 650;
						this.explainOption();
						}
						}
						this.state = 655;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 656;
					this.match(trinoSqlParserParser.T__2);
					}
					break;
				}
				this.state = 660;
				this.statement();
				}
				break;
			case 38:
				localctx = new ShowCreateTableContext(this, localctx);
				this.enterOuterAlt(localctx, 38);
				{
				this.state = 661;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 662;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 663;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 664;
				this.qualifiedName();
				}
				break;
			case 39:
				localctx = new ShowCreateSchemaContext(this, localctx);
				this.enterOuterAlt(localctx, 39);
				{
				this.state = 665;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 666;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 667;
				this.match(trinoSqlParserParser.SCHEMA);
				this.state = 668;
				this.qualifiedName();
				}
				break;
			case 40:
				localctx = new ShowCreateViewContext(this, localctx);
				this.enterOuterAlt(localctx, 40);
				{
				this.state = 669;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 670;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 671;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 672;
				this.qualifiedName();
				}
				break;
			case 41:
				localctx = new ShowCreateMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 41);
				{
				this.state = 673;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 674;
				this.match(trinoSqlParserParser.CREATE);
				this.state = 675;
				this.match(trinoSqlParserParser.MATERIALIZED);
				this.state = 676;
				this.match(trinoSqlParserParser.VIEW);
				this.state = 677;
				this.qualifiedName();
				}
				break;
			case 42:
				localctx = new ShowTablesContext(this, localctx);
				this.enterOuterAlt(localctx, 42);
				{
				this.state = 678;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 679;
				this.match(trinoSqlParserParser.TABLES);
				this.state = 682;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===87 || _la===101) {
					{
					this.state = 680;
					_la = this._input.LA(1);
					if(!(_la===87 || _la===101)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 681;
					this.qualifiedName();
					}
				}

				this.state = 690;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===120) {
					{
					this.state = 684;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 685;
					(localctx as ShowTablesContext)._pattern = this.string_();
					this.state = 688;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 686;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 687;
						(localctx as ShowTablesContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 43:
				localctx = new ShowSchemasContext(this, localctx);
				this.enterOuterAlt(localctx, 43);
				{
				this.state = 692;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 693;
				this.match(trinoSqlParserParser.SCHEMAS);
				this.state = 696;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===87 || _la===101) {
					{
					this.state = 694;
					_la = this._input.LA(1);
					if(!(_la===87 || _la===101)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 695;
					this.identifier();
					}
				}

				this.state = 704;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===120) {
					{
					this.state = 698;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 699;
					(localctx as ShowSchemasContext)._pattern = this.string_();
					this.state = 702;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 700;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 701;
						(localctx as ShowSchemasContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 44:
				localctx = new ShowCatalogsContext(this, localctx);
				this.enterOuterAlt(localctx, 44);
				{
				this.state = 706;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 707;
				this.match(trinoSqlParserParser.CATALOGS);
				this.state = 714;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===120) {
					{
					this.state = 708;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 709;
					(localctx as ShowCatalogsContext)._pattern = this.string_();
					this.state = 712;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 710;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 711;
						(localctx as ShowCatalogsContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 45:
				localctx = new ShowColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 45);
				{
				this.state = 716;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 717;
				this.match(trinoSqlParserParser.COLUMNS);
				this.state = 718;
				_la = this._input.LA(1);
				if(!(_la===87 || _la===101)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 720;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1596214615) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 1567190687) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 3162472435) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 4286316499) !== 0) || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 4009750519) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 262585051) !== 0) || ((((_la - 265)) & ~0x1F) === 0 && ((1 << (_la - 265)) & 15) !== 0)) {
					{
					this.state = 719;
					this.qualifiedName();
					}
				}

				this.state = 728;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===120) {
					{
					this.state = 722;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 723;
					(localctx as ShowColumnsContext)._pattern = this.string_();
					this.state = 726;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 724;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 725;
						(localctx as ShowColumnsContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 46:
				localctx = new ShowStatsContext(this, localctx);
				this.enterOuterAlt(localctx, 46);
				{
				this.state = 730;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 731;
				this.match(trinoSqlParserParser.STATS);
				this.state = 732;
				this.match(trinoSqlParserParser.FOR);
				this.state = 733;
				this.qualifiedName();
				}
				break;
			case 47:
				localctx = new ShowStatsForQueryContext(this, localctx);
				this.enterOuterAlt(localctx, 47);
				{
				this.state = 734;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 735;
				this.match(trinoSqlParserParser.STATS);
				this.state = 736;
				this.match(trinoSqlParserParser.FOR);
				this.state = 737;
				this.match(trinoSqlParserParser.T__1);
				this.state = 738;
				this.query();
				this.state = 739;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 48:
				localctx = new ShowRolesContext(this, localctx);
				this.enterOuterAlt(localctx, 48);
				{
				this.state = 741;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 743;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===47) {
					{
					this.state = 742;
					this.match(trinoSqlParserParser.CURRENT);
					}
				}

				this.state = 745;
				this.match(trinoSqlParserParser.ROLES);
				this.state = 748;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===87 || _la===101) {
					{
					this.state = 746;
					_la = this._input.LA(1);
					if(!(_la===87 || _la===101)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 747;
					this.identifier();
					}
				}

				}
				break;
			case 49:
				localctx = new ShowRoleGrantsContext(this, localctx);
				this.enterOuterAlt(localctx, 49);
				{
				this.state = 750;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 751;
				this.match(trinoSqlParserParser.ROLE);
				this.state = 752;
				this.match(trinoSqlParserParser.GRANTS);
				this.state = 755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===87 || _la===101) {
					{
					this.state = 753;
					_la = this._input.LA(1);
					if(!(_la===87 || _la===101)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 754;
					this.identifier();
					}
				}

				}
				break;
			case 50:
				localctx = new ShowColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 50);
				{
				this.state = 757;
				this.match(trinoSqlParserParser.DESCRIBE);
				this.state = 758;
				this.qualifiedName();
				}
				break;
			case 51:
				localctx = new ShowColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 51);
				{
				this.state = 759;
				this.match(trinoSqlParserParser.DESC);
				this.state = 760;
				this.qualifiedName();
				}
				break;
			case 52:
				localctx = new ShowFunctionsContext(this, localctx);
				this.enterOuterAlt(localctx, 52);
				{
				this.state = 761;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 762;
				this.match(trinoSqlParserParser.FUNCTIONS);
				this.state = 769;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===120) {
					{
					this.state = 763;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 764;
					(localctx as ShowFunctionsContext)._pattern = this.string_();
					this.state = 767;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 765;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 766;
						(localctx as ShowFunctionsContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 53:
				localctx = new ShowSessionContext(this, localctx);
				this.enterOuterAlt(localctx, 53);
				{
				this.state = 771;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 772;
				this.match(trinoSqlParserParser.SESSION);
				this.state = 779;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===120) {
					{
					this.state = 773;
					this.match(trinoSqlParserParser.LIKE);
					this.state = 774;
					(localctx as ShowSessionContext)._pattern = this.string_();
					this.state = 777;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===72) {
						{
						this.state = 775;
						this.match(trinoSqlParserParser.ESCAPE);
						this.state = 776;
						(localctx as ShowSessionContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 54:
				localctx = new SetSessionContext(this, localctx);
				this.enterOuterAlt(localctx, 54);
				{
				this.state = 781;
				this.match(trinoSqlParserParser.SET);
				this.state = 782;
				this.match(trinoSqlParserParser.SESSION);
				this.state = 783;
				this.qualifiedName();
				this.state = 784;
				this.match(trinoSqlParserParser.EQ);
				this.state = 785;
				this.expression();
				}
				break;
			case 55:
				localctx = new ResetSessionContext(this, localctx);
				this.enterOuterAlt(localctx, 55);
				{
				this.state = 787;
				this.match(trinoSqlParserParser.RESET);
				this.state = 788;
				this.match(trinoSqlParserParser.SESSION);
				this.state = 789;
				this.qualifiedName();
				}
				break;
			case 56:
				localctx = new StartTransactionContext(this, localctx);
				this.enterOuterAlt(localctx, 56);
				{
				this.state = 790;
				this.match(trinoSqlParserParser.START);
				this.state = 791;
				this.match(trinoSqlParserParser.TRANSACTION);
				this.state = 800;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===113 || _la===175) {
					{
					this.state = 792;
					this.transactionMode();
					this.state = 797;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 793;
						this.match(trinoSqlParserParser.T__3);
						this.state = 794;
						this.transactionMode();
						}
						}
						this.state = 799;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;
			case 57:
				localctx = new CommitContext(this, localctx);
				this.enterOuterAlt(localctx, 57);
				{
				this.state = 802;
				this.match(trinoSqlParserParser.COMMIT);
				this.state = 804;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===242) {
					{
					this.state = 803;
					this.match(trinoSqlParserParser.WORK);
					}
				}

				}
				break;
			case 58:
				localctx = new RollbackContext(this, localctx);
				this.enterOuterAlt(localctx, 58);
				{
				this.state = 806;
				this.match(trinoSqlParserParser.ROLLBACK);
				this.state = 808;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===242) {
					{
					this.state = 807;
					this.match(trinoSqlParserParser.WORK);
					}
				}

				}
				break;
			case 59:
				localctx = new PrepareContext(this, localctx);
				this.enterOuterAlt(localctx, 59);
				{
				this.state = 810;
				this.match(trinoSqlParserParser.PREPARE);
				this.state = 811;
				this.identifier();
				this.state = 812;
				this.match(trinoSqlParserParser.FROM);
				this.state = 813;
				this.statement();
				}
				break;
			case 60:
				localctx = new DeallocateContext(this, localctx);
				this.enterOuterAlt(localctx, 60);
				{
				this.state = 815;
				this.match(trinoSqlParserParser.DEALLOCATE);
				this.state = 816;
				this.match(trinoSqlParserParser.PREPARE);
				this.state = 817;
				this.identifier();
				}
				break;
			case 61:
				localctx = new ExecuteContext(this, localctx);
				this.enterOuterAlt(localctx, 61);
				{
				this.state = 818;
				this.match(trinoSqlParserParser.EXECUTE);
				this.state = 819;
				this.identifier();
				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===232) {
					{
					this.state = 820;
					this.match(trinoSqlParserParser.USING);
					this.state = 821;
					this.expression();
					this.state = 826;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 822;
						this.match(trinoSqlParserParser.T__3);
						this.state = 823;
						this.expression();
						}
						}
						this.state = 828;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;
			case 62:
				localctx = new DescribeInputContext(this, localctx);
				this.enterOuterAlt(localctx, 62);
				{
				this.state = 831;
				this.match(trinoSqlParserParser.DESCRIBE);
				this.state = 832;
				this.match(trinoSqlParserParser.INPUT);
				this.state = 833;
				this.identifier();
				}
				break;
			case 63:
				localctx = new DescribeOutputContext(this, localctx);
				this.enterOuterAlt(localctx, 63);
				{
				this.state = 834;
				this.match(trinoSqlParserParser.DESCRIBE);
				this.state = 835;
				this.match(trinoSqlParserParser.OUTPUT);
				this.state = 836;
				this.identifier();
				}
				break;
			case 64:
				localctx = new SetPathContext(this, localctx);
				this.enterOuterAlt(localctx, 64);
				{
				this.state = 837;
				this.match(trinoSqlParserParser.SET);
				this.state = 838;
				this.match(trinoSqlParserParser.PATH);
				this.state = 839;
				this.pathSpecification();
				}
				break;
			case 65:
				localctx = new SetTimeZoneContext(this, localctx);
				this.enterOuterAlt(localctx, 65);
				{
				this.state = 840;
				this.match(trinoSqlParserParser.SET);
				this.state = 841;
				this.match(trinoSqlParserParser.TIME);
				this.state = 842;
				this.match(trinoSqlParserParser.ZONE);
				this.state = 845;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 843;
					this.match(trinoSqlParserParser.LOCAL);
					}
					break;
				case 2:
					{
					this.state = 844;
					this.expression();
					}
					break;
				}
				}
				break;
			case 66:
				localctx = new UpdateContext(this, localctx);
				this.enterOuterAlt(localctx, 66);
				{
				this.state = 847;
				this.match(trinoSqlParserParser.UPDATE);
				this.state = 848;
				this.qualifiedName();
				this.state = 849;
				this.match(trinoSqlParserParser.SET);
				this.state = 850;
				this.updateAssignment();
				this.state = 855;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 851;
					this.match(trinoSqlParserParser.T__3);
					this.state = 852;
					this.updateAssignment();
					}
					}
					this.state = 857;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 860;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===238) {
					{
					this.state = 858;
					this.match(trinoSqlParserParser.WHERE);
					this.state = 859;
					(localctx as UpdateContext)._where = this.booleanExpression(0);
					}
				}

				}
				break;
			case 67:
				localctx = new MergeContext(this, localctx);
				this.enterOuterAlt(localctx, 67);
				{
				this.state = 862;
				this.match(trinoSqlParserParser.MERGE);
				this.state = 863;
				this.match(trinoSqlParserParser.INTO);
				this.state = 864;
				this.qualifiedName();
				this.state = 869;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140015023) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1596214615) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 1567190687) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 3162472435) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 4286316499) !== 0) || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 4009750519) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 262585051) !== 0) || ((((_la - 265)) & ~0x1F) === 0 && ((1 << (_la - 265)) & 15) !== 0)) {
					{
					this.state = 866;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===26) {
						{
						this.state = 865;
						this.match(trinoSqlParserParser.AS);
						}
					}

					this.state = 868;
					this.identifier();
					}
				}

				this.state = 871;
				this.match(trinoSqlParserParser.USING);
				this.state = 872;
				this.relation(0);
				this.state = 873;
				this.match(trinoSqlParserParser.ON);
				this.state = 874;
				this.expression();
				this.state = 876;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 875;
					this.mergeCase();
					}
					}
					this.state = 878;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===237);
				}
				break;
			case 68:
				localctx = new ShowTableCommentContext(this, localctx);
				this.enterOuterAlt(localctx, 68);
				{
				this.state = 880;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 881;
				this.match(trinoSqlParserParser.COMMENT);
				this.state = 882;
				this.match(trinoSqlParserParser.ON);
				this.state = 883;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 884;
				this.qualifiedName();
				}
				break;
			case 69:
				localctx = new ShowColumnCommentContext(this, localctx);
				this.enterOuterAlt(localctx, 69);
				{
				this.state = 885;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 886;
				this.match(trinoSqlParserParser.COMMENT);
				this.state = 887;
				this.match(trinoSqlParserParser.ON);
				this.state = 888;
				this.match(trinoSqlParserParser.COLUMN);
				this.state = 889;
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
			this.state = 893;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===240) {
				{
				this.state = 892;
				this.with_();
				}
			}

			this.state = 895;
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
			this.state = 897;
			this.match(trinoSqlParserParser.WITH);
			this.state = 899;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===176) {
				{
				this.state = 898;
				this.match(trinoSqlParserParser.RECURSIVE);
				}
			}

			this.state = 901;
			this.namedQuery();
			this.state = 906;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 902;
				this.match(trinoSqlParserParser.T__3);
				this.state = 903;
				this.namedQuery();
				}
				}
				this.state = 908;
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
			this.state = 911;
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
			case 96:
			case 98:
			case 99:
			case 100:
			case 102:
			case 103:
			case 105:
			case 108:
			case 110:
			case 111:
			case 113:
			case 115:
			case 116:
			case 117:
			case 119:
			case 121:
			case 122:
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
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 147:
			case 148:
			case 149:
			case 150:
			case 152:
			case 153:
			case 154:
			case 157:
			case 159:
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
			case 172:
			case 173:
			case 174:
			case 175:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 186:
			case 187:
			case 188:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 199:
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
			case 211:
			case 212:
			case 213:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 221:
			case 222:
			case 224:
			case 225:
			case 227:
			case 229:
			case 230:
			case 231:
			case 233:
			case 235:
			case 236:
			case 239:
			case 241:
			case 242:
			case 243:
			case 244:
			case 245:
			case 265:
			case 266:
			case 267:
			case 268:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 909;
				this.columnDefinition();
				}
				break;
			case 120:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 910;
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
			this.state = 913;
			this.identifier();
			this.state = 914;
			this.type_(0);
			this.state = 917;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===145) {
				{
				this.state = 915;
				this.match(trinoSqlParserParser.NOT);
				this.state = 916;
				this.match(trinoSqlParserParser.NULL);
				}
			}

			this.state = 921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===40) {
				{
				this.state = 919;
				this.match(trinoSqlParserParser.COMMENT);
				this.state = 920;
				this.string_();
				}
			}

			this.state = 925;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===240) {
				{
				this.state = 923;
				this.match(trinoSqlParserParser.WITH);
				this.state = 924;
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
			this.state = 927;
			this.match(trinoSqlParserParser.LIKE);
			this.state = 928;
			this.qualifiedName();
			this.state = 931;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===74 || _la===102) {
				{
				this.state = 929;
				localctx._optionType = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===74 || _la===102)) {
				    localctx._optionType = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 930;
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
			this.state = 933;
			this.match(trinoSqlParserParser.T__1);
			this.state = 934;
			this.property();
			this.state = 939;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 935;
				this.match(trinoSqlParserParser.T__3);
				this.state = 936;
				this.property();
				}
				}
				this.state = 941;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 942;
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
			this.state = 944;
			this.identifier();
			this.state = 945;
			this.match(trinoSqlParserParser.EQ);
			this.state = 946;
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
			this.state = 948;
			this.queryTerm(0);
			this.state = 959;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===156) {
				{
				this.state = 949;
				this.match(trinoSqlParserParser.ORDER);
				this.state = 950;
				this.match(trinoSqlParserParser.BY);
				this.state = 951;
				this.sortItem();
				this.state = 956;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 952;
					this.match(trinoSqlParserParser.T__3);
					this.state = 953;
					this.sortItem();
					}
					}
					this.state = 958;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 966;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===149) {
				{
				this.state = 961;
				this.match(trinoSqlParserParser.OFFSET);
				this.state = 962;
				localctx._offset = this.rowCount();
				this.state = 964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===190 || _la===191) {
					{
					this.state = 963;
					_la = this._input.LA(1);
					if(!(_la===190 || _la===191)) {
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

			this.state = 981;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 121:
				{
				{
				this.state = 968;
				this.match(trinoSqlParserParser.LIMIT);
				this.state = 969;
				localctx._limit = this.limitRowCount();
				}
				}
				break;
			case 80:
				{
				{
				this.state = 970;
				this.match(trinoSqlParserParser.FETCH);
				this.state = 971;
				_la = this._input.LA(1);
				if(!(_la===83 || _la===137)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 973;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===258 || _la===262) {
					{
					this.state = 972;
					localctx._fetchFirst = this.rowCount();
					}
				}

				this.state = 975;
				_la = this._input.LA(1);
				if(!(_la===190 || _la===191)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 979;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 153:
					{
					this.state = 976;
					this.match(trinoSqlParserParser.ONLY);
					}
					break;
				case 240:
					{
					this.state = 977;
					this.match(trinoSqlParserParser.WITH);
					this.state = 978;
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
			case 240:
			case 269:
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
			this.state = 985;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 983;
				this.match(trinoSqlParserParser.ALL);
				}
				break;
			case 258:
			case 262:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 984;
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
			this.state = 987;
			_la = this._input.LA(1);
			if(!(_la===258 || _la===262)) {
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

			this.state = 990;
			this.queryPrimary();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1006;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 116, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1004;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 115, this._ctx) ) {
					case 1:
						{
						localctx = new SetOperationContext(this, new QueryTermContext(this, _parentctx, _parentState));
						(localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_queryTerm);
						this.state = 992;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 993;
						(localctx as SetOperationContext)._operator = this.match(trinoSqlParserParser.INTERSECT);
						this.state = 995;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===20 || _la===65) {
							{
							this.state = 994;
							this.setQuantifier();
							}
						}

						this.state = 997;
						(localctx as SetOperationContext)._right = this.queryTerm(3);
						}
						break;
					case 2:
						{
						localctx = new SetOperationContext(this, new QueryTermContext(this, _parentctx, _parentState));
						(localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_queryTerm);
						this.state = 998;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 999;
						(localctx as SetOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===73 || _la===226)) {
						    (localctx as SetOperationContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1001;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===20 || _la===65) {
							{
							this.state = 1000;
							this.setQuantifier();
							}
						}

						this.state = 1003;
						(localctx as SetOperationContext)._right = this.queryTerm(2);
						}
						break;
					}
					}
				}
				this.state = 1008;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 116, this._ctx);
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
			this.state = 1025;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 198:
				localctx = new QueryPrimaryDefaultContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1009;
				this.querySpecification();
				}
				break;
			case 210:
				localctx = new TableContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1010;
				this.match(trinoSqlParserParser.TABLE);
				this.state = 1011;
				this.qualifiedName();
				}
				break;
			case 234:
				localctx = new InlineTableContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1012;
				this.match(trinoSqlParserParser.VALUES);
				this.state = 1013;
				this.expression();
				this.state = 1018;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 117, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1014;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1015;
						this.expression();
						}
						}
					}
					this.state = 1020;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 117, this._ctx);
				}
				}
				break;
			case 2:
				localctx = new SubqueryContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1021;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1022;
				this.queryNoWith();
				this.state = 1023;
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
			this.state = 1027;
			this.expression();
			this.state = 1029;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===27 || _la===62) {
				{
				this.state = 1028;
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

			this.state = 1033;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===148) {
				{
				this.state = 1031;
				this.match(trinoSqlParserParser.NULLS);
				this.state = 1032;
				localctx._nullOrdering = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===83 || _la===116)) {
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
			this.state = 1035;
			this.match(trinoSqlParserParser.SELECT);
			this.state = 1037;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				{
				this.state = 1036;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1039;
			this.selectItem();
			this.state = 1044;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 122, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1040;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1041;
					this.selectItem();
					}
					}
				}
				this.state = 1046;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 122, this._ctx);
			}
			this.state = 1056;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				{
				this.state = 1047;
				this.match(trinoSqlParserParser.FROM);
				this.state = 1048;
				this.relation(0);
				this.state = 1053;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 123, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1049;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1050;
						this.relation(0);
						}
						}
					}
					this.state = 1055;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 123, this._ctx);
				}
				}
				break;
			}
			this.state = 1060;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				{
				this.state = 1058;
				this.match(trinoSqlParserParser.WHERE);
				this.state = 1059;
				localctx._where = this.booleanExpression(0);
				}
				break;
			}
			this.state = 1065;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				{
				this.state = 1062;
				this.match(trinoSqlParserParser.GROUP);
				this.state = 1063;
				this.match(trinoSqlParserParser.BY);
				this.state = 1064;
				this.groupBy();
				}
				break;
			}
			this.state = 1069;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				{
				this.state = 1067;
				this.match(trinoSqlParserParser.HAVING);
				this.state = 1068;
				localctx._having = this.booleanExpression(0);
				}
				break;
			}
			this.state = 1080;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				{
				this.state = 1071;
				this.match(trinoSqlParserParser.WINDOW);
				this.state = 1072;
				this.windowDefinition();
				this.state = 1077;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 128, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1073;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1074;
						this.windowDefinition();
						}
						}
					}
					this.state = 1079;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 128, this._ctx);
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
			this.state = 1083;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				{
				this.state = 1082;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1085;
			this.groupingElement();
			this.state = 1090;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 131, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1086;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1087;
					this.groupingElement();
					}
					}
				}
				this.state = 1092;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 131, this._ctx);
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
			this.state = 1133;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				localctx = new SingleGroupingSetContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1093;
				this.groupingSet();
				}
				break;
			case 2:
				localctx = new RollupContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1094;
				this.match(trinoSqlParserParser.ROLLUP);
				this.state = 1095;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1872231699) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 4289639607) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 3923771327) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4152344063) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 3756982255) !== 0) || ((((_la - 227)) & ~0x1F) === 0 && ((1 << (_la - 227)) & 2248659805) !== 0) || ((((_la - 259)) & ~0x1F) === 0 && ((1 << (_la - 259)) & 1023) !== 0)) {
					{
					this.state = 1096;
					this.expression();
					this.state = 1101;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1097;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1098;
						this.expression();
						}
						}
						this.state = 1103;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1106;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 3:
				localctx = new CubeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1107;
				this.match(trinoSqlParserParser.CUBE);
				this.state = 1108;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1872231699) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 4289639607) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 3923771327) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4152344063) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 3756982255) !== 0) || ((((_la - 227)) & ~0x1F) === 0 && ((1 << (_la - 227)) & 2248659805) !== 0) || ((((_la - 259)) & ~0x1F) === 0 && ((1 << (_la - 259)) & 1023) !== 0)) {
					{
					this.state = 1109;
					this.expression();
					this.state = 1114;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1110;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1111;
						this.expression();
						}
						}
						this.state = 1116;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1119;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 4:
				localctx = new MultipleGroupingSetsContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1120;
				this.match(trinoSqlParserParser.GROUPING);
				this.state = 1121;
				this.match(trinoSqlParserParser.SETS);
				this.state = 1122;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1123;
				this.groupingSet();
				this.state = 1128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1124;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1125;
					this.groupingSet();
					}
					}
					this.state = 1130;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1131;
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
			this.state = 1148;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1135;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1872231699) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 4289639607) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 3923771327) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4152344063) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 3756982255) !== 0) || ((((_la - 227)) & ~0x1F) === 0 && ((1 << (_la - 227)) & 2248659805) !== 0) || ((((_la - 259)) & ~0x1F) === 0 && ((1 << (_la - 259)) & 1023) !== 0)) {
					{
					this.state = 1136;
					this.expression();
					this.state = 1141;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1137;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1138;
						this.expression();
						}
						}
						this.state = 1143;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1146;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1147;
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
			this.state = 1150;
			localctx._name = this.identifier();
			this.state = 1151;
			this.match(trinoSqlParserParser.AS);
			this.state = 1152;
			this.match(trinoSqlParserParser.T__1);
			this.state = 1153;
			this.windowSpecification();
			this.state = 1154;
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
			this.state = 1157;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 1156;
				localctx._existingWindowName = this.identifier();
				}
				break;
			}
			this.state = 1169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===161) {
				{
				this.state = 1159;
				this.match(trinoSqlParserParser.PARTITION);
				this.state = 1160;
				this.match(trinoSqlParserParser.BY);
				this.state = 1161;
				localctx._expression = this.expression();
				localctx._partition.push(localctx._expression);
				this.state = 1166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1162;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1163;
					localctx._expression = this.expression();
					localctx._partition.push(localctx._expression);
					}
					}
					this.state = 1168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===156) {
				{
				this.state = 1171;
				this.match(trinoSqlParserParser.ORDER);
				this.state = 1172;
				this.match(trinoSqlParserParser.BY);
				this.state = 1173;
				this.sortItem();
				this.state = 1178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1174;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1175;
					this.sortItem();
					}
					}
					this.state = 1180;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===96 || _la===132 || _la===174 || _la===191) {
				{
				this.state = 1183;
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
			this.state = 1186;
			localctx._name = this.identifier();
			this.state = 1188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 1187;
				this.columnAliases();
				}
			}

			this.state = 1190;
			this.match(trinoSqlParserParser.AS);
			this.state = 1191;
			this.match(trinoSqlParserParser.T__1);
			this.state = 1192;
			this.query();
			this.state = 1193;
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
			this.state = 1195;
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
			this.state = 1212;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				localctx = new SelectSingleContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1197;
				this.expression();
				this.state = 1202;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 149, this._ctx) ) {
				case 1:
					{
					this.state = 1199;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===26) {
						{
						this.state = 1198;
						this.match(trinoSqlParserParser.AS);
						}
					}

					this.state = 1201;
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
				this.state = 1204;
				this.primaryExpression(0);
				this.state = 1205;
				this.match(trinoSqlParserParser.T__0);
				this.state = 1206;
				this.match(trinoSqlParserParser.ASTERISK);
				this.state = 1209;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 150, this._ctx) ) {
				case 1:
					{
					this.state = 1207;
					this.match(trinoSqlParserParser.AS);
					this.state = 1208;
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
				this.state = 1211;
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

			this.state = 1215;
			this.sampledRelation();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1235;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
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
					this.state = 1217;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1231;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 45:
						{
						this.state = 1218;
						this.match(trinoSqlParserParser.CROSS);
						this.state = 1219;
						this.match(trinoSqlParserParser.JOIN);
						this.state = 1220;
						(localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					case 88:
					case 104:
					case 114:
					case 118:
					case 185:
						{
						this.state = 1221;
						this.joinType();
						this.state = 1222;
						this.match(trinoSqlParserParser.JOIN);
						this.state = 1223;
						(localctx as JoinRelationContext)._rightRelation = this.relation(0);
						this.state = 1224;
						this.joinCriteria();
						}
						break;
					case 136:
						{
						this.state = 1226;
						this.match(trinoSqlParserParser.NATURAL);
						this.state = 1227;
						this.joinType();
						this.state = 1228;
						this.match(trinoSqlParserParser.JOIN);
						this.state = 1229;
						(localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 1237;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
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
			this.state = 1253;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 104:
			case 114:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===104) {
					{
					this.state = 1238;
					this.match(trinoSqlParserParser.INNER);
					}
				}

				}
				break;
			case 118:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1241;
				this.match(trinoSqlParserParser.LEFT);
				this.state = 1243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===158) {
					{
					this.state = 1242;
					this.match(trinoSqlParserParser.OUTER);
					}
				}

				}
				break;
			case 185:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1245;
				this.match(trinoSqlParserParser.RIGHT);
				this.state = 1247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===158) {
					{
					this.state = 1246;
					this.match(trinoSqlParserParser.OUTER);
					}
				}

				}
				break;
			case 88:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1249;
				this.match(trinoSqlParserParser.FULL);
				this.state = 1251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===158) {
					{
					this.state = 1250;
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
			this.state = 1269;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 151:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1255;
				this.match(trinoSqlParserParser.ON);
				this.state = 1256;
				this.booleanExpression(0);
				}
				break;
			case 232:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1257;
				this.match(trinoSqlParserParser.USING);
				this.state = 1258;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1259;
				this.identifier();
				this.state = 1264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1260;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1261;
					this.identifier();
					}
					}
					this.state = 1266;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1267;
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
			this.state = 1271;
			this.patternRecognition();
			this.state = 1278;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				{
				this.state = 1272;
				this.match(trinoSqlParserParser.TABLESAMPLE);
				this.state = 1273;
				this.sampleType();
				this.state = 1274;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1275;
				localctx._percentage = this.expression();
				this.state = 1276;
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
			this.state = 1280;
			_la = this._input.LA(1);
			if(!(_la===30 || _la===209)) {
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
			this.state = 1282;
			this.aliasedRelation();
			this.state = 1365;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				{
				this.state = 1283;
				this.match(trinoSqlParserParser.MATCH_RECOGNIZE);
				this.state = 1284;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===161) {
					{
					this.state = 1285;
					this.match(trinoSqlParserParser.PARTITION);
					this.state = 1286;
					this.match(trinoSqlParserParser.BY);
					this.state = 1287;
					localctx._expression = this.expression();
					localctx._partition.push(localctx._expression);
					this.state = 1292;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1288;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1289;
						localctx._expression = this.expression();
						localctx._partition.push(localctx._expression);
						}
						}
						this.state = 1294;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===156) {
					{
					this.state = 1297;
					this.match(trinoSqlParserParser.ORDER);
					this.state = 1298;
					this.match(trinoSqlParserParser.BY);
					this.state = 1299;
					this.sortItem();
					this.state = 1304;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1300;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1301;
						this.sortItem();
						}
						}
						this.state = 1306;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===132) {
					{
					this.state = 1309;
					this.match(trinoSqlParserParser.MEASURES);
					this.state = 1310;
					this.measureDefinition();
					this.state = 1315;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1311;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1312;
						this.measureDefinition();
						}
						}
						this.state = 1317;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20 || _la===152) {
					{
					this.state = 1320;
					this.rowsPerMatch();
					}
				}

				this.state = 1326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19) {
					{
					this.state = 1323;
					this.match(trinoSqlParserParser.AFTER);
					this.state = 1324;
					this.match(trinoSqlParserParser.MATCH);
					this.state = 1325;
					this.skipTo();
					}
				}

				this.state = 1329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===103 || _la===197) {
					{
					this.state = 1328;
					_la = this._input.LA(1);
					if(!(_la===103 || _la===197)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 1331;
				this.match(trinoSqlParserParser.PATTERN);
				this.state = 1332;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1333;
				this.rowPattern(0);
				this.state = 1334;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===207) {
					{
					this.state = 1335;
					this.match(trinoSqlParserParser.SUBSET);
					this.state = 1336;
					this.subsetDefinition();
					this.state = 1341;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1337;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1338;
						this.subsetDefinition();
						}
						}
						this.state = 1343;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1346;
				this.match(trinoSqlParserParser.DEFINE);
				this.state = 1347;
				this.variableDefinition();
				this.state = 1352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1348;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1349;
					this.variableDefinition();
					}
					}
					this.state = 1354;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1355;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1363;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 176, this._ctx) ) {
				case 1:
					{
					this.state = 1357;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===26) {
						{
						this.state = 1356;
						this.match(trinoSqlParserParser.AS);
						}
					}

					this.state = 1359;
					this.identifier();
					this.state = 1361;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
					case 1:
						{
						this.state = 1360;
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
			this.state = 1367;
			this.expression();
			this.state = 1368;
			this.match(trinoSqlParserParser.AS);
			this.state = 1369;
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
			this.state = 1382;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 152:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1371;
				this.match(trinoSqlParserParser.ONE);
				this.state = 1372;
				this.match(trinoSqlParserParser.ROW);
				this.state = 1373;
				this.match(trinoSqlParserParser.PER);
				this.state = 1374;
				this.match(trinoSqlParserParser.MATCH);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1375;
				this.match(trinoSqlParserParser.ALL);
				this.state = 1376;
				this.match(trinoSqlParserParser.ROWS);
				this.state = 1377;
				this.match(trinoSqlParserParser.PER);
				this.state = 1378;
				this.match(trinoSqlParserParser.MATCH);
				this.state = 1380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===150 || _la===203 || _la===240) {
					{
					this.state = 1379;
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
			this.state = 1393;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 203:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1384;
				this.match(trinoSqlParserParser.SHOW);
				this.state = 1385;
				this.match(trinoSqlParserParser.EMPTY);
				this.state = 1386;
				this.match(trinoSqlParserParser.MATCHES);
				}
				break;
			case 150:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1387;
				this.match(trinoSqlParserParser.OMIT);
				this.state = 1388;
				this.match(trinoSqlParserParser.EMPTY);
				this.state = 1389;
				this.match(trinoSqlParserParser.MATCHES);
				}
				break;
			case 240:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1390;
				this.match(trinoSqlParserParser.WITH);
				this.state = 1391;
				this.match(trinoSqlParserParser.UNMATCHED);
				this.state = 1392;
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
			this.state = 1414;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1395;
				this.match(trinoSqlParserParser.T__4);
				this.state = 1396;
				this.match(trinoSqlParserParser.TO);
				this.state = 1397;
				this.match(trinoSqlParserParser.NEXT);
				this.state = 1398;
				this.match(trinoSqlParserParser.ROW);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1399;
				this.match(trinoSqlParserParser.T__4);
				this.state = 1400;
				this.match(trinoSqlParserParser.PAST);
				this.state = 1401;
				this.match(trinoSqlParserParser.LAST);
				this.state = 1402;
				this.match(trinoSqlParserParser.ROW);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1403;
				this.match(trinoSqlParserParser.T__4);
				this.state = 1404;
				this.match(trinoSqlParserParser.TO);
				this.state = 1405;
				this.match(trinoSqlParserParser.FIRST);
				this.state = 1406;
				this.identifier();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1407;
				this.match(trinoSqlParserParser.T__4);
				this.state = 1408;
				this.match(trinoSqlParserParser.TO);
				this.state = 1409;
				this.match(trinoSqlParserParser.LAST);
				this.state = 1410;
				this.identifier();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1411;
				this.match(trinoSqlParserParser.T__4);
				this.state = 1412;
				this.match(trinoSqlParserParser.TO);
				this.state = 1413;
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
			this.state = 1416;
			localctx._name = this.identifier();
			this.state = 1417;
			this.match(trinoSqlParserParser.EQ);
			this.state = 1418;
			this.match(trinoSqlParserParser.T__1);
			this.state = 1419;
			localctx._identifier = this.identifier();
			localctx._union.push(localctx._identifier);
			this.state = 1424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 1420;
				this.match(trinoSqlParserParser.T__3);
				this.state = 1421;
				localctx._identifier = this.identifier();
				localctx._union.push(localctx._identifier);
				}
				}
				this.state = 1426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1427;
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
			this.state = 1429;
			this.identifier();
			this.state = 1430;
			this.match(trinoSqlParserParser.AS);
			this.state = 1431;
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
			this.state = 1433;
			this.relationPrimary();
			this.state = 1441;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				{
				this.state = 1435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26) {
					{
					this.state = 1434;
					this.match(trinoSqlParserParser.AS);
					}
				}

				this.state = 1437;
				this.identifier();
				this.state = 1439;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 184, this._ctx) ) {
				case 1:
					{
					this.state = 1438;
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
			this.state = 1443;
			this.match(trinoSqlParserParser.T__1);
			this.state = 1444;
			this.identifier();
			this.state = 1449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 1445;
				this.match(trinoSqlParserParser.T__3);
				this.state = 1446;
				this.identifier();
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
	public relationPrimary(): RelationPrimaryContext {
		let localctx: RelationPrimaryContext = new RelationPrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, trinoSqlParserParser.RULE_relationPrimary);
		let _la: number;
		try {
			this.state = 1483;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				localctx = new TableNameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1454;
				this.qualifiedName();
				}
				break;
			case 2:
				localctx = new SubqueryRelationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1455;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1456;
				this.query();
				this.state = 1457;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 3:
				localctx = new UnnestContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1459;
				this.match(trinoSqlParserParser.UNNEST);
				this.state = 1460;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1461;
				this.expression();
				this.state = 1466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1462;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1463;
					this.expression();
					}
					}
					this.state = 1468;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1469;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1472;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 188, this._ctx) ) {
				case 1:
					{
					this.state = 1470;
					this.match(trinoSqlParserParser.WITH);
					this.state = 1471;
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
				this.state = 1474;
				this.match(trinoSqlParserParser.LATERAL);
				this.state = 1475;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1476;
				this.query();
				this.state = 1477;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 5:
				localctx = new ParenthesizedRelationContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1479;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1480;
				this.relation(0);
				this.state = 1481;
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
			this.state = 1485;
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
			this.state = 1494;
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
			case 95:
			case 96:
			case 98:
			case 99:
			case 100:
			case 102:
			case 103:
			case 105:
			case 108:
			case 110:
			case 111:
			case 113:
			case 115:
			case 116:
			case 117:
			case 119:
			case 121:
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
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 152:
			case 153:
			case 154:
			case 157:
			case 159:
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
			case 172:
			case 173:
			case 174:
			case 175:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 186:
			case 187:
			case 188:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 199:
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
			case 211:
			case 212:
			case 213:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 224:
			case 225:
			case 227:
			case 229:
			case 230:
			case 231:
			case 233:
			case 235:
			case 236:
			case 239:
			case 241:
			case 242:
			case 243:
			case 244:
			case 245:
			case 252:
			case 253:
			case 258:
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
				{
				localctx = new PredicatedContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1488;
				(localctx as PredicatedContext)._valueExpression = this.valueExpression(0);
				this.state = 1490;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 190, this._ctx) ) {
				case 1:
					{
					this.state = 1489;
					this.predicate((localctx as PredicatedContext)._valueExpression);
					}
					break;
				}
				}
				break;
			case 145:
				{
				localctx = new LogicalNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1492;
				this.match(trinoSqlParserParser.NOT);
				this.state = 1493;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1504;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 193, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1502;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
					case 1:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_booleanExpression);
						this.state = 1496;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1497;
						(localctx as LogicalBinaryContext)._operator = this.match(trinoSqlParserParser.AND);
						this.state = 1498;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;
					case 2:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_booleanExpression);
						this.state = 1499;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1500;
						(localctx as LogicalBinaryContext)._operator = this.match(trinoSqlParserParser.OR);
						this.state = 1501;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1506;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 193, this._ctx);
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
			this.state = 1568;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				localctx = new ComparisonContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1507;
				this.comparisonOperator();
				this.state = 1508;
				(localctx as ComparisonContext)._right = this.valueExpression(0);
				}
				break;
			case 2:
				localctx = new QuantifiedComparisonContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1510;
				this.comparisonOperator();
				this.state = 1511;
				this.comparisonQuantifier();
				this.state = 1512;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1513;
				this.query();
				this.state = 1514;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 3:
				localctx = new BetweenContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===145) {
					{
					this.state = 1516;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1519;
				this.match(trinoSqlParserParser.BETWEEN);
				this.state = 1520;
				(localctx as BetweenContext)._lower = this.valueExpression(0);
				this.state = 1521;
				this.match(trinoSqlParserParser.AND);
				this.state = 1522;
				(localctx as BetweenContext)._upper = this.valueExpression(0);
				}
				break;
			case 4:
				localctx = new InListContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===145) {
					{
					this.state = 1524;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1527;
				this.match(trinoSqlParserParser.IN);
				this.state = 1528;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1529;
				this.expression();
				this.state = 1534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1530;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1531;
					this.expression();
					}
					}
					this.state = 1536;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1537;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 5:
				localctx = new InSubqueryContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1540;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===145) {
					{
					this.state = 1539;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1542;
				this.match(trinoSqlParserParser.IN);
				this.state = 1543;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1544;
				this.query();
				this.state = 1545;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 6:
				localctx = new LikeContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===145) {
					{
					this.state = 1547;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1550;
				this.match(trinoSqlParserParser.LIKE);
				this.state = 1551;
				(localctx as LikeContext)._pattern = this.valueExpression(0);
				this.state = 1554;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 199, this._ctx) ) {
				case 1:
					{
					this.state = 1552;
					this.match(trinoSqlParserParser.ESCAPE);
					this.state = 1553;
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
				this.state = 1556;
				this.match(trinoSqlParserParser.IS);
				this.state = 1558;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===145) {
					{
					this.state = 1557;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1560;
				this.match(trinoSqlParserParser.NULL);
				}
				break;
			case 8:
				localctx = new DistinctFromContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1561;
				this.match(trinoSqlParserParser.IS);
				this.state = 1563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===145) {
					{
					this.state = 1562;
					this.match(trinoSqlParserParser.NOT);
					}
				}

				this.state = 1565;
				this.match(trinoSqlParserParser.DISTINCT);
				this.state = 1566;
				this.match(trinoSqlParserParser.FROM);
				this.state = 1567;
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
			this.state = 1574;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				{
				localctx = new ValueExpressionDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1571;
				this.primaryExpression(0);
				}
				break;
			case 2:
				{
				localctx = new ArithmeticUnaryContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1572;
				(localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===252 || _la===253)) {
				    (localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1573;
				this.valueExpression(4);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1590;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 205, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1588;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 204, this._ctx) ) {
					case 1:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_valueExpression);
						this.state = 1576;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1577;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 254)) & ~0x1F) === 0 && ((1 << (_la - 254)) & 7) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1578;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;
					case 2:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_valueExpression);
						this.state = 1579;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1580;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===252 || _la===253)) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1581;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;
					case 3:
						{
						localctx = new ConcatenationContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ConcatenationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_valueExpression);
						this.state = 1582;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1583;
						this.match(trinoSqlParserParser.CONCAT);
						this.state = 1584;
						(localctx as ConcatenationContext)._right = this.valueExpression(2);
						}
						break;
					case 4:
						{
						localctx = new AtTimeZoneContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_valueExpression);
						this.state = 1585;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1586;
						this.match(trinoSqlParserParser.AT);
						this.state = 1587;
						this.timeZoneSpecifier();
						}
						break;
					}
					}
				}
				this.state = 1592;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 205, this._ctx);
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
			this.state = 1842;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 235, this._ctx) ) {
			case 1:
				{
				localctx = new NullLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1594;
				this.match(trinoSqlParserParser.NULL);
				}
				break;
			case 2:
				{
				localctx = new IntervalLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1595;
				this.interval();
				}
				break;
			case 3:
				{
				localctx = new TypeConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1596;
				this.identifier();
				this.state = 1597;
				this.string_();
				}
				break;
			case 4:
				{
				localctx = new TypeConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1599;
				this.match(trinoSqlParserParser.DOUBLE);
				this.state = 1600;
				this.match(trinoSqlParserParser.PRECISION);
				this.state = 1601;
				this.string_();
				}
				break;
			case 5:
				{
				localctx = new NumericLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1602;
				this.number_();
				}
				break;
			case 6:
				{
				localctx = new BooleanLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1603;
				this.booleanValue();
				}
				break;
			case 7:
				{
				localctx = new StringLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1604;
				this.string_();
				}
				break;
			case 8:
				{
				localctx = new BinaryLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1605;
				this.match(trinoSqlParserParser.BINARY_LITERAL);
				}
				break;
			case 9:
				{
				localctx = new ParameterContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1606;
				this.match(trinoSqlParserParser.QUESTION_MARK);
				}
				break;
			case 10:
				{
				localctx = new PositionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1607;
				this.match(trinoSqlParserParser.POSITION);
				this.state = 1608;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1609;
				this.valueExpression(0);
				this.state = 1610;
				this.match(trinoSqlParserParser.IN);
				this.state = 1611;
				this.valueExpression(0);
				this.state = 1612;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 11:
				{
				localctx = new RowConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1614;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1615;
				this.expression();
				this.state = 1618;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1616;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1617;
					this.expression();
					}
					}
					this.state = 1620;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===4);
				this.state = 1622;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 12:
				{
				localctx = new RowConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1624;
				this.match(trinoSqlParserParser.ROW);
				this.state = 1625;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1626;
				this.expression();
				this.state = 1631;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1627;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1628;
					this.expression();
					}
					}
					this.state = 1633;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1634;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 13:
				{
				localctx = new FunctionCallContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1636;
				this.qualifiedName();
				this.state = 1637;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1638;
				this.match(trinoSqlParserParser.ASTERISK);
				this.state = 1639;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1641;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
				case 1:
					{
					this.state = 1640;
					this.filter();
					}
					break;
				}
				this.state = 1644;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
				case 1:
					{
					this.state = 1643;
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
				this.state = 1647;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 210, this._ctx) ) {
				case 1:
					{
					this.state = 1646;
					this.processingMode();
					}
					break;
				}
				this.state = 1649;
				this.qualifiedName();
				this.state = 1650;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1662;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 3744463399) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 4289639607) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 3923771327) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4152344063) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 3756982255) !== 0) || ((((_la - 227)) & ~0x1F) === 0 && ((1 << (_la - 227)) & 2248659805) !== 0) || ((((_la - 259)) & ~0x1F) === 0 && ((1 << (_la - 259)) & 1023) !== 0)) {
					{
					this.state = 1652;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 211, this._ctx) ) {
					case 1:
						{
						this.state = 1651;
						this.setQuantifier();
						}
						break;
					}
					this.state = 1654;
					this.expression();
					this.state = 1659;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1655;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1656;
						this.expression();
						}
						}
						this.state = 1661;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===156) {
					{
					this.state = 1664;
					this.match(trinoSqlParserParser.ORDER);
					this.state = 1665;
					this.match(trinoSqlParserParser.BY);
					this.state = 1666;
					this.sortItem();
					this.state = 1671;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1667;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1668;
						this.sortItem();
						}
						}
						this.state = 1673;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1676;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1678;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 216, this._ctx) ) {
				case 1:
					{
					this.state = 1677;
					this.filter();
					}
					break;
				}
				this.state = 1684;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 218, this._ctx) ) {
				case 1:
					{
					this.state = 1681;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===100 || _la===182) {
						{
						this.state = 1680;
						this.nullTreatment();
						}
					}

					this.state = 1683;
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
				this.state = 1686;
				this.identifier();
				this.state = 1687;
				this.over();
				}
				break;
			case 16:
				{
				localctx = new LambdaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1689;
				this.identifier();
				this.state = 1690;
				this.match(trinoSqlParserParser.T__5);
				this.state = 1691;
				this.expression();
				}
				break;
			case 17:
				{
				localctx = new LambdaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1693;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1702;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1596214615) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 1567190687) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 3162472435) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 4286316499) !== 0) || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 4009750519) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 262585051) !== 0) || ((((_la - 265)) & ~0x1F) === 0 && ((1 << (_la - 265)) & 15) !== 0)) {
					{
					this.state = 1694;
					this.identifier();
					this.state = 1699;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1695;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1696;
						this.identifier();
						}
						}
						this.state = 1701;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1704;
				this.match(trinoSqlParserParser.T__2);
				this.state = 1705;
				this.match(trinoSqlParserParser.T__5);
				this.state = 1706;
				this.expression();
				}
				break;
			case 18:
				{
				localctx = new SubqueryExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1707;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1708;
				this.query();
				this.state = 1709;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 19:
				{
				localctx = new ExistsContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1711;
				this.match(trinoSqlParserParser.EXISTS);
				this.state = 1712;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1713;
				this.query();
				this.state = 1714;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 20:
				{
				localctx = new SimpleCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1716;
				this.match(trinoSqlParserParser.CASE);
				this.state = 1717;
				(localctx as SimpleCaseContext)._operand = this.expression();
				this.state = 1719;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1718;
					this.whenClause();
					}
					}
					this.state = 1721;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===237);
				this.state = 1725;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===69) {
					{
					this.state = 1723;
					this.match(trinoSqlParserParser.ELSE);
					this.state = 1724;
					(localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1727;
				this.match(trinoSqlParserParser.END);
				}
				break;
			case 21:
				{
				localctx = new SearchedCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1729;
				this.match(trinoSqlParserParser.CASE);
				this.state = 1731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1730;
					this.whenClause();
					}
					}
					this.state = 1733;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===237);
				this.state = 1737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===69) {
					{
					this.state = 1735;
					this.match(trinoSqlParserParser.ELSE);
					this.state = 1736;
					(localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1739;
				this.match(trinoSqlParserParser.END);
				}
				break;
			case 22:
				{
				localctx = new CastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1741;
				this.match(trinoSqlParserParser.CAST);
				this.state = 1742;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1743;
				this.expression();
				this.state = 1744;
				this.match(trinoSqlParserParser.AS);
				this.state = 1745;
				this.type_(0);
				this.state = 1746;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 23:
				{
				localctx = new CastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1748;
				this.match(trinoSqlParserParser.TRY_CAST);
				this.state = 1749;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1750;
				this.expression();
				this.state = 1751;
				this.match(trinoSqlParserParser.AS);
				this.state = 1752;
				this.type_(0);
				this.state = 1753;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 24:
				{
				localctx = new ArrayConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1755;
				this.match(trinoSqlParserParser.ARRAY);
				this.state = 1756;
				this.match(trinoSqlParserParser.T__6);
				this.state = 1765;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2885403647) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1872231699) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 4289639607) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 3923771327) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4152344063) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 3756982255) !== 0) || ((((_la - 227)) & ~0x1F) === 0 && ((1 << (_la - 227)) & 2248659805) !== 0) || ((((_la - 259)) & ~0x1F) === 0 && ((1 << (_la - 259)) & 1023) !== 0)) {
					{
					this.state = 1757;
					this.expression();
					this.state = 1762;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1758;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1759;
						this.expression();
						}
						}
						this.state = 1764;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1767;
				this.match(trinoSqlParserParser.T__7);
				}
				break;
			case 25:
				{
				localctx = new ColumnReferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1768;
				this.identifier();
				}
				break;
			case 26:
				{
				localctx = new SpecialDateTimeFunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1769;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParserParser.CURRENT_DATE);
				}
				break;
			case 27:
				{
				localctx = new SpecialDateTimeFunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1770;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParserParser.CURRENT_TIME);
				this.state = 1774;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 227, this._ctx) ) {
				case 1:
					{
					this.state = 1771;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1772;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(trinoSqlParserParser.INTEGER_VALUE);
					this.state = 1773;
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
				this.state = 1776;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParserParser.CURRENT_TIMESTAMP);
				this.state = 1780;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 228, this._ctx) ) {
				case 1:
					{
					this.state = 1777;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1778;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(trinoSqlParserParser.INTEGER_VALUE);
					this.state = 1779;
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
				this.state = 1782;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParserParser.LOCALTIME);
				this.state = 1786;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 229, this._ctx) ) {
				case 1:
					{
					this.state = 1783;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1784;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(trinoSqlParserParser.INTEGER_VALUE);
					this.state = 1785;
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
				this.state = 1788;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParserParser.LOCALTIMESTAMP);
				this.state = 1792;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 230, this._ctx) ) {
				case 1:
					{
					this.state = 1789;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1790;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(trinoSqlParserParser.INTEGER_VALUE);
					this.state = 1791;
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
				this.state = 1794;
				(localctx as CurrentUserContext)._name = this.match(trinoSqlParserParser.CURRENT_USER);
				}
				break;
			case 32:
				{
				localctx = new CurrentCatalogContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1795;
				(localctx as CurrentCatalogContext)._name = this.match(trinoSqlParserParser.CURRENT_CATALOG);
				}
				break;
			case 33:
				{
				localctx = new CurrentSchemaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1796;
				(localctx as CurrentSchemaContext)._name = this.match(trinoSqlParserParser.CURRENT_SCHEMA);
				}
				break;
			case 34:
				{
				localctx = new CurrentPathContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1797;
				(localctx as CurrentPathContext)._name = this.match(trinoSqlParserParser.CURRENT_PATH);
				}
				break;
			case 35:
				{
				localctx = new SubstringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1798;
				this.match(trinoSqlParserParser.SUBSTRING);
				this.state = 1799;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1800;
				this.valueExpression(0);
				this.state = 1801;
				this.match(trinoSqlParserParser.FROM);
				this.state = 1802;
				this.valueExpression(0);
				this.state = 1805;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===85) {
					{
					this.state = 1803;
					this.match(trinoSqlParserParser.FOR);
					this.state = 1804;
					this.valueExpression(0);
					}
				}

				this.state = 1807;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 36:
				{
				localctx = new NormalizeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1809;
				this.match(trinoSqlParserParser.NORMALIZE);
				this.state = 1810;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1811;
				this.valueExpression(0);
				this.state = 1814;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4) {
					{
					this.state = 1812;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1813;
					this.normalForm();
					}
				}

				this.state = 1816;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 37:
				{
				localctx = new ExtractContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1818;
				this.match(trinoSqlParserParser.EXTRACT);
				this.state = 1819;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1820;
				this.identifier();
				this.state = 1821;
				this.match(trinoSqlParserParser.FROM);
				this.state = 1822;
				this.valueExpression(0);
				this.state = 1823;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 38:
				{
				localctx = new ParenthesizedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1825;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1826;
				this.expression();
				this.state = 1827;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 39:
				{
				localctx = new GroupingOperationContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1829;
				this.match(trinoSqlParserParser.GROUPING);
				this.state = 1830;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1839;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1596214615) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 1567190687) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 3162472435) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 4286316499) !== 0) || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 4009750519) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 262585051) !== 0) || ((((_la - 265)) & ~0x1F) === 0 && ((1 << (_la - 265)) & 15) !== 0)) {
					{
					this.state = 1831;
					this.qualifiedName();
					this.state = 1836;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1832;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1833;
						this.qualifiedName();
						}
						}
						this.state = 1838;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1841;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1854;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 237, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1852;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 236, this._ctx) ) {
					case 1:
						{
						localctx = new SubscriptContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						(localctx as SubscriptContext)._value = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_primaryExpression);
						this.state = 1844;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1845;
						this.match(trinoSqlParserParser.T__6);
						this.state = 1846;
						(localctx as SubscriptContext)._index = this.valueExpression(0);
						this.state = 1847;
						this.match(trinoSqlParserParser.T__7);
						}
						break;
					case 2:
						{
						localctx = new DereferenceContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						(localctx as DereferenceContext)._base = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_primaryExpression);
						this.state = 1849;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1850;
						this.match(trinoSqlParserParser.T__0);
						this.state = 1851;
						(localctx as DereferenceContext)._fieldName = this.identifier();
						}
						break;
					}
					}
				}
				this.state = 1856;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 237, this._ctx);
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
			this.state = 1857;
			_la = this._input.LA(1);
			if(!(_la===82 || _la===192)) {
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
			this.state = 1863;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 100:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1859;
				this.match(trinoSqlParserParser.IGNORE);
				this.state = 1860;
				this.match(trinoSqlParserParser.NULLS);
				}
				break;
			case 182:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1861;
				this.match(trinoSqlParserParser.RESPECT);
				this.state = 1862;
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
			this.state = 1871;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 259:
				localctx = new BasicStringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1865;
				this.match(trinoSqlParserParser.STRING);
				}
				break;
			case 260:
				localctx = new UnicodeStringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1866;
				this.match(trinoSqlParserParser.UNICODE_STRING);
				this.state = 1869;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 239, this._ctx) ) {
				case 1:
					{
					this.state = 1867;
					this.match(trinoSqlParserParser.UESCAPE);
					this.state = 1868;
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
			this.state = 1879;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 241, this._ctx) ) {
			case 1:
				localctx = new TimeZoneIntervalContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1873;
				this.match(trinoSqlParserParser.TIME);
				this.state = 1874;
				this.match(trinoSqlParserParser.ZONE);
				this.state = 1875;
				this.interval();
				}
				break;
			case 2:
				localctx = new TimeZoneStringContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1876;
				this.match(trinoSqlParserParser.TIME);
				this.state = 1877;
				this.match(trinoSqlParserParser.ZONE);
				this.state = 1878;
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
			this.state = 1881;
			_la = this._input.LA(1);
			if(!(((((_la - 246)) & ~0x1F) === 0 && ((1 << (_la - 246)) & 63) !== 0))) {
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
			this.state = 1883;
			_la = this._input.LA(1);
			if(!(_la===20 || _la===24 || _la===204)) {
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
			this.state = 1885;
			_la = this._input.LA(1);
			if(!(_la===79 || _la===220)) {
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
			this.state = 1887;
			this.match(trinoSqlParserParser.INTERVAL);
			this.state = 1889;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===252 || _la===253) {
				{
				this.state = 1888;
				localctx._sign = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===252 || _la===253)) {
				    localctx._sign = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 1891;
			this.string_();
			this.state = 1892;
			localctx._from_ = this.intervalField();
			this.state = 1895;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 243, this._ctx) ) {
			case 1:
				{
				this.state = 1893;
				this.match(trinoSqlParserParser.TO);
				this.state = 1894;
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
			this.state = 1897;
			_la = this._input.LA(1);
			if(!(_la===58 || _la===98 || _la===134 || _la===135 || _la===195 || _la===244)) {
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
			this.state = 1899;
			_la = this._input.LA(1);
			if(!(((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & 15) !== 0))) {
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
			this.state = 1992;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 254, this._ctx) ) {
			case 1:
				{
				localctx = new RowTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1902;
				this.match(trinoSqlParserParser.ROW);
				this.state = 1903;
				this.match(trinoSqlParserParser.T__1);
				this.state = 1904;
				this.rowField();
				this.state = 1909;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1905;
					this.match(trinoSqlParserParser.T__3);
					this.state = 1906;
					this.rowField();
					}
					}
					this.state = 1911;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1912;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 2:
				{
				localctx = new IntervalTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1914;
				this.match(trinoSqlParserParser.INTERVAL);
				this.state = 1915;
				(localctx as IntervalTypeContext)._from_ = this.intervalField();
				this.state = 1918;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 245, this._ctx) ) {
				case 1:
					{
					this.state = 1916;
					this.match(trinoSqlParserParser.TO);
					this.state = 1917;
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
				this.state = 1920;
				(localctx as DateTimeTypeContext)._base = this.match(trinoSqlParserParser.TIMESTAMP);
				this.state = 1925;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 246, this._ctx) ) {
				case 1:
					{
					this.state = 1921;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1922;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 1923;
					this.match(trinoSqlParserParser.T__2);
					}
					break;
				}
				this.state = 1930;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 247, this._ctx) ) {
				case 1:
					{
					this.state = 1927;
					this.match(trinoSqlParserParser.WITHOUT);
					this.state = 1928;
					this.match(trinoSqlParserParser.TIME);
					this.state = 1929;
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
				this.state = 1932;
				(localctx as DateTimeTypeContext)._base = this.match(trinoSqlParserParser.TIMESTAMP);
				this.state = 1937;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 1933;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1934;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 1935;
					this.match(trinoSqlParserParser.T__2);
					}
				}

				this.state = 1939;
				this.match(trinoSqlParserParser.WITH);
				this.state = 1940;
				this.match(trinoSqlParserParser.TIME);
				this.state = 1941;
				this.match(trinoSqlParserParser.ZONE);
				}
				break;
			case 5:
				{
				localctx = new DateTimeTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1942;
				(localctx as DateTimeTypeContext)._base = this.match(trinoSqlParserParser.TIME);
				this.state = 1947;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 249, this._ctx) ) {
				case 1:
					{
					this.state = 1943;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1944;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 1945;
					this.match(trinoSqlParserParser.T__2);
					}
					break;
				}
				this.state = 1952;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 250, this._ctx) ) {
				case 1:
					{
					this.state = 1949;
					this.match(trinoSqlParserParser.WITHOUT);
					this.state = 1950;
					this.match(trinoSqlParserParser.TIME);
					this.state = 1951;
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
				this.state = 1954;
				(localctx as DateTimeTypeContext)._base = this.match(trinoSqlParserParser.TIME);
				this.state = 1959;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 1955;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1956;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 1957;
					this.match(trinoSqlParserParser.T__2);
					}
				}

				this.state = 1961;
				this.match(trinoSqlParserParser.WITH);
				this.state = 1962;
				this.match(trinoSqlParserParser.TIME);
				this.state = 1963;
				this.match(trinoSqlParserParser.ZONE);
				}
				break;
			case 7:
				{
				localctx = new DoublePrecisionTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1964;
				this.match(trinoSqlParserParser.DOUBLE);
				this.state = 1965;
				this.match(trinoSqlParserParser.PRECISION);
				}
				break;
			case 8:
				{
				localctx = new LegacyArrayTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1966;
				this.match(trinoSqlParserParser.ARRAY);
				this.state = 1967;
				this.match(trinoSqlParserParser.LT);
				this.state = 1968;
				this.type_(0);
				this.state = 1969;
				this.match(trinoSqlParserParser.GT);
				}
				break;
			case 9:
				{
				localctx = new LegacyMapTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1971;
				this.match(trinoSqlParserParser.MAP);
				this.state = 1972;
				this.match(trinoSqlParserParser.LT);
				this.state = 1973;
				(localctx as LegacyMapTypeContext)._keyType = this.type_(0);
				this.state = 1974;
				this.match(trinoSqlParserParser.T__3);
				this.state = 1975;
				(localctx as LegacyMapTypeContext)._valueType = this.type_(0);
				this.state = 1976;
				this.match(trinoSqlParserParser.GT);
				}
				break;
			case 10:
				{
				localctx = new GenericTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1978;
				this.identifier();
				this.state = 1990;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 253, this._ctx) ) {
				case 1:
					{
					this.state = 1979;
					this.match(trinoSqlParserParser.T__1);
					this.state = 1980;
					this.typeParameter();
					this.state = 1985;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1981;
						this.match(trinoSqlParserParser.T__3);
						this.state = 1982;
						this.typeParameter();
						}
						}
						this.state = 1987;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1988;
					this.match(trinoSqlParserParser.T__2);
					}
					break;
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2003;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 256, this._ctx);
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
					this.state = 1994;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1995;
					this.match(trinoSqlParserParser.ARRAY);
					this.state = 1999;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 255, this._ctx) ) {
					case 1:
						{
						this.state = 1996;
						this.match(trinoSqlParserParser.T__6);
						this.state = 1997;
						this.match(trinoSqlParserParser.INTEGER_VALUE);
						this.state = 1998;
						this.match(trinoSqlParserParser.T__7);
						}
						break;
					}
					}
					}
				}
				this.state = 2005;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 256, this._ctx);
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
			this.state = 2010;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2006;
				this.type_(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2007;
				this.identifier();
				this.state = 2008;
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
			this.state = 2014;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 262:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2012;
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
			case 96:
			case 98:
			case 99:
			case 100:
			case 102:
			case 103:
			case 105:
			case 108:
			case 110:
			case 111:
			case 113:
			case 115:
			case 116:
			case 117:
			case 119:
			case 121:
			case 122:
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
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 147:
			case 148:
			case 149:
			case 150:
			case 152:
			case 153:
			case 154:
			case 157:
			case 159:
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
			case 172:
			case 173:
			case 174:
			case 175:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 186:
			case 187:
			case 188:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 199:
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
			case 211:
			case 212:
			case 213:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 221:
			case 222:
			case 224:
			case 225:
			case 227:
			case 229:
			case 230:
			case 231:
			case 233:
			case 235:
			case 236:
			case 239:
			case 241:
			case 242:
			case 243:
			case 244:
			case 245:
			case 265:
			case 266:
			case 267:
			case 268:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2013;
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
			this.state = 2016;
			this.match(trinoSqlParserParser.WHEN);
			this.state = 2017;
			localctx._condition = this.expression();
			this.state = 2018;
			this.match(trinoSqlParserParser.THEN);
			this.state = 2019;
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
			this.state = 2021;
			this.match(trinoSqlParserParser.FILTER);
			this.state = 2022;
			this.match(trinoSqlParserParser.T__1);
			this.state = 2023;
			this.match(trinoSqlParserParser.WHERE);
			this.state = 2024;
			this.booleanExpression(0);
			this.state = 2025;
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
			this.state = 2091;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 266, this._ctx) ) {
			case 1:
				localctx = new MergeUpdateContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2027;
				this.match(trinoSqlParserParser.WHEN);
				this.state = 2028;
				this.match(trinoSqlParserParser.MATCHED);
				this.state = 2031;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===23) {
					{
					this.state = 2029;
					this.match(trinoSqlParserParser.AND);
					this.state = 2030;
					(localctx as MergeUpdateContext)._condition = this.expression();
					}
				}

				this.state = 2033;
				this.match(trinoSqlParserParser.THEN);
				this.state = 2034;
				this.match(trinoSqlParserParser.UPDATE);
				this.state = 2035;
				this.match(trinoSqlParserParser.SET);
				this.state = 2036;
				(localctx as MergeUpdateContext)._identifier = this.identifier();
				(localctx as MergeUpdateContext)._targets.push((localctx as MergeUpdateContext)._identifier);
				this.state = 2037;
				this.match(trinoSqlParserParser.EQ);
				this.state = 2038;
				(localctx as MergeUpdateContext)._expression = this.expression();
				(localctx as MergeUpdateContext)._values.push((localctx as MergeUpdateContext)._expression);
				this.state = 2046;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2039;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2040;
					(localctx as MergeUpdateContext)._identifier = this.identifier();
					(localctx as MergeUpdateContext)._targets.push((localctx as MergeUpdateContext)._identifier);
					this.state = 2041;
					this.match(trinoSqlParserParser.EQ);
					this.state = 2042;
					(localctx as MergeUpdateContext)._expression = this.expression();
					(localctx as MergeUpdateContext)._values.push((localctx as MergeUpdateContext)._expression);
					}
					}
					this.state = 2048;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				localctx = new MergeDeleteContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2049;
				this.match(trinoSqlParserParser.WHEN);
				this.state = 2050;
				this.match(trinoSqlParserParser.MATCHED);
				this.state = 2053;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===23) {
					{
					this.state = 2051;
					this.match(trinoSqlParserParser.AND);
					this.state = 2052;
					(localctx as MergeDeleteContext)._condition = this.expression();
					}
				}

				this.state = 2055;
				this.match(trinoSqlParserParser.THEN);
				this.state = 2056;
				this.match(trinoSqlParserParser.DELETE);
				}
				break;
			case 3:
				localctx = new MergeInsertContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2057;
				this.match(trinoSqlParserParser.WHEN);
				this.state = 2058;
				this.match(trinoSqlParserParser.NOT);
				this.state = 2059;
				this.match(trinoSqlParserParser.MATCHED);
				this.state = 2062;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===23) {
					{
					this.state = 2060;
					this.match(trinoSqlParserParser.AND);
					this.state = 2061;
					(localctx as MergeInsertContext)._condition = this.expression();
					}
				}

				this.state = 2064;
				this.match(trinoSqlParserParser.THEN);
				this.state = 2065;
				this.match(trinoSqlParserParser.INSERT);
				this.state = 2077;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 2066;
					this.match(trinoSqlParserParser.T__1);
					this.state = 2067;
					(localctx as MergeInsertContext)._identifier = this.identifier();
					(localctx as MergeInsertContext)._targets.push((localctx as MergeInsertContext)._identifier);
					this.state = 2072;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 2068;
						this.match(trinoSqlParserParser.T__3);
						this.state = 2069;
						(localctx as MergeInsertContext)._identifier = this.identifier();
						(localctx as MergeInsertContext)._targets.push((localctx as MergeInsertContext)._identifier);
						}
						}
						this.state = 2074;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2075;
					this.match(trinoSqlParserParser.T__2);
					}
				}

				this.state = 2079;
				this.match(trinoSqlParserParser.VALUES);
				this.state = 2080;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2081;
				(localctx as MergeInsertContext)._expression = this.expression();
				(localctx as MergeInsertContext)._values.push((localctx as MergeInsertContext)._expression);
				this.state = 2086;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2082;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2083;
					(localctx as MergeInsertContext)._expression = this.expression();
					(localctx as MergeInsertContext)._values.push((localctx as MergeInsertContext)._expression);
					}
					}
					this.state = 2088;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2089;
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
			this.state = 2093;
			this.match(trinoSqlParserParser.OVER);
			this.state = 2099;
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
			case 96:
			case 98:
			case 99:
			case 100:
			case 102:
			case 103:
			case 105:
			case 108:
			case 110:
			case 111:
			case 113:
			case 115:
			case 116:
			case 117:
			case 119:
			case 121:
			case 122:
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
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 147:
			case 148:
			case 149:
			case 150:
			case 152:
			case 153:
			case 154:
			case 157:
			case 159:
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
			case 172:
			case 173:
			case 174:
			case 175:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 186:
			case 187:
			case 188:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 199:
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
			case 211:
			case 212:
			case 213:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 221:
			case 222:
			case 224:
			case 225:
			case 227:
			case 229:
			case 230:
			case 231:
			case 233:
			case 235:
			case 236:
			case 239:
			case 241:
			case 242:
			case 243:
			case 244:
			case 245:
			case 265:
			case 266:
			case 267:
			case 268:
				{
				this.state = 2094;
				localctx._windowName = this.identifier();
				}
				break;
			case 2:
				{
				this.state = 2095;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2096;
				this.windowSpecification();
				this.state = 2097;
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
			this.state = 2110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===132) {
				{
				this.state = 2101;
				this.match(trinoSqlParserParser.MEASURES);
				this.state = 2102;
				this.measureDefinition();
				this.state = 2107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2103;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2104;
					this.measureDefinition();
					}
					}
					this.state = 2109;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2112;
			this.frameExtent();
			this.state = 2116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 2113;
				this.match(trinoSqlParserParser.AFTER);
				this.state = 2114;
				this.match(trinoSqlParserParser.MATCH);
				this.state = 2115;
				this.skipTo();
				}
			}

			this.state = 2119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===103 || _la===197) {
				{
				this.state = 2118;
				_la = this._input.LA(1);
				if(!(_la===103 || _la===197)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 2126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===165) {
				{
				this.state = 2121;
				this.match(trinoSqlParserParser.PATTERN);
				this.state = 2122;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2123;
				this.rowPattern(0);
				this.state = 2124;
				this.match(trinoSqlParserParser.T__2);
				}
			}

			this.state = 2137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===207) {
				{
				this.state = 2128;
				this.match(trinoSqlParserParser.SUBSET);
				this.state = 2129;
				this.subsetDefinition();
				this.state = 2134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2130;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2131;
					this.subsetDefinition();
					}
					}
					this.state = 2136;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===64) {
				{
				this.state = 2139;
				this.match(trinoSqlParserParser.DEFINE);
				this.state = 2140;
				this.variableDefinition();
				this.state = 2145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2141;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2142;
					this.variableDefinition();
					}
					}
					this.state = 2147;
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
			this.state = 2174;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 277, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2150;
				localctx._frameType = this.match(trinoSqlParserParser.RANGE);
				this.state = 2151;
				localctx._start = this.frameBound();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2152;
				localctx._frameType = this.match(trinoSqlParserParser.ROWS);
				this.state = 2153;
				localctx._start = this.frameBound();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2154;
				localctx._frameType = this.match(trinoSqlParserParser.GROUPS);
				this.state = 2155;
				localctx._start = this.frameBound();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2156;
				localctx._frameType = this.match(trinoSqlParserParser.RANGE);
				this.state = 2157;
				this.match(trinoSqlParserParser.BETWEEN);
				this.state = 2158;
				localctx._start = this.frameBound();
				this.state = 2159;
				this.match(trinoSqlParserParser.AND);
				this.state = 2160;
				localctx._end = this.frameBound();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2162;
				localctx._frameType = this.match(trinoSqlParserParser.ROWS);
				this.state = 2163;
				this.match(trinoSqlParserParser.BETWEEN);
				this.state = 2164;
				localctx._start = this.frameBound();
				this.state = 2165;
				this.match(trinoSqlParserParser.AND);
				this.state = 2166;
				localctx._end = this.frameBound();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2168;
				localctx._frameType = this.match(trinoSqlParserParser.GROUPS);
				this.state = 2169;
				this.match(trinoSqlParserParser.BETWEEN);
				this.state = 2170;
				localctx._start = this.frameBound();
				this.state = 2171;
				this.match(trinoSqlParserParser.AND);
				this.state = 2172;
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
			this.state = 2185;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 278, this._ctx) ) {
			case 1:
				localctx = new UnboundedFrameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2176;
				this.match(trinoSqlParserParser.UNBOUNDED);
				this.state = 2177;
				(localctx as UnboundedFrameContext)._boundType = this.match(trinoSqlParserParser.PRECEDING);
				}
				break;
			case 2:
				localctx = new UnboundedFrameContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2178;
				this.match(trinoSqlParserParser.UNBOUNDED);
				this.state = 2179;
				(localctx as UnboundedFrameContext)._boundType = this.match(trinoSqlParserParser.FOLLOWING);
				}
				break;
			case 3:
				localctx = new CurrentRowBoundContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2180;
				this.match(trinoSqlParserParser.CURRENT);
				this.state = 2181;
				this.match(trinoSqlParserParser.ROW);
				}
				break;
			case 4:
				localctx = new BoundedFrameContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2182;
				this.expression();
				this.state = 2183;
				(localctx as BoundedFrameContext)._boundType = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===84 || _la===169)) {
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

			this.state = 2188;
			this.patternPrimary();
			this.state = 2190;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 279, this._ctx) ) {
			case 1:
				{
				this.state = 2189;
				this.patternQuantifier();
				}
				break;
			}
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2199;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 281, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2197;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 280, this._ctx) ) {
					case 1:
						{
						localctx = new PatternConcatenationContext(this, new RowPatternContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_rowPattern);
						this.state = 2192;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2193;
						this.rowPattern(3);
						}
						break;
					case 2:
						{
						localctx = new PatternAlternationContext(this, new RowPatternContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParserParser.RULE_rowPattern);
						this.state = 2194;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2195;
						this.match(trinoSqlParserParser.T__8);
						this.state = 2196;
						this.rowPattern(2);
						}
						break;
					}
					}
				}
				this.state = 2201;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 281, this._ctx);
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
			this.state = 2227;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 283, this._ctx) ) {
			case 1:
				localctx = new PatternVariableContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2202;
				this.identifier();
				}
				break;
			case 2:
				localctx = new EmptyPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2203;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2204;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 3:
				localctx = new PatternPermutationContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2205;
				this.match(trinoSqlParserParser.PERMUTE);
				this.state = 2206;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2207;
				this.rowPattern(0);
				this.state = 2212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2208;
					this.match(trinoSqlParserParser.T__3);
					this.state = 2209;
					this.rowPattern(0);
					}
					}
					this.state = 2214;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2215;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 4:
				localctx = new GroupedPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2217;
				this.match(trinoSqlParserParser.T__1);
				this.state = 2218;
				this.rowPattern(0);
				this.state = 2219;
				this.match(trinoSqlParserParser.T__2);
				}
				break;
			case 5:
				localctx = new PartitionStartAnchorContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2221;
				this.match(trinoSqlParserParser.T__9);
				}
				break;
			case 6:
				localctx = new PartitionEndAnchorContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2222;
				this.match(trinoSqlParserParser.T__10);
				}
				break;
			case 7:
				localctx = new ExcludedPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2223;
				this.match(trinoSqlParserParser.T__11);
				this.state = 2224;
				this.rowPattern(0);
				this.state = 2225;
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
			this.state = 2259;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 291, this._ctx) ) {
			case 1:
				localctx = new ZeroOrMoreQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2229;
				this.match(trinoSqlParserParser.ASTERISK);
				this.state = 2231;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 284, this._ctx) ) {
				case 1:
					{
					this.state = 2230;
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
				this.state = 2233;
				this.match(trinoSqlParserParser.PLUS);
				this.state = 2235;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 285, this._ctx) ) {
				case 1:
					{
					this.state = 2234;
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
				this.state = 2237;
				this.match(trinoSqlParserParser.QUESTION_MARK);
				this.state = 2239;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 286, this._ctx) ) {
				case 1:
					{
					this.state = 2238;
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
				this.state = 2241;
				this.match(trinoSqlParserParser.T__13);
				this.state = 2242;
				(localctx as RangeQuantifierContext)._exactly = this.match(trinoSqlParserParser.INTEGER_VALUE);
				this.state = 2243;
				this.match(trinoSqlParserParser.T__14);
				this.state = 2245;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 287, this._ctx) ) {
				case 1:
					{
					this.state = 2244;
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
				this.state = 2247;
				this.match(trinoSqlParserParser.T__13);
				this.state = 2249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===262) {
					{
					this.state = 2248;
					(localctx as RangeQuantifierContext)._atLeast = this.match(trinoSqlParserParser.INTEGER_VALUE);
					}
				}

				this.state = 2251;
				this.match(trinoSqlParserParser.T__3);
				this.state = 2253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===262) {
					{
					this.state = 2252;
					(localctx as RangeQuantifierContext)._atMost = this.match(trinoSqlParserParser.INTEGER_VALUE);
					}
				}

				this.state = 2255;
				this.match(trinoSqlParserParser.T__14);
				this.state = 2257;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 290, this._ctx) ) {
				case 1:
					{
					this.state = 2256;
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
			this.state = 2261;
			this.identifier();
			this.state = 2262;
			this.match(trinoSqlParserParser.EQ);
			this.state = 2263;
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
			this.state = 2269;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				localctx = new ExplainFormatContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2265;
				this.match(trinoSqlParserParser.FORMAT);
				this.state = 2266;
				(localctx as ExplainFormatContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===93 || _la===115 || _la===213)) {
				    (localctx as ExplainFormatContext)._value = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 222:
				localctx = new ExplainTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2267;
				this.match(trinoSqlParserParser.TYPE);
				this.state = 2268;
				(localctx as ExplainTypeContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===66 || _la===111 || _la===125 || _la===233)) {
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
			this.state = 2276;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 113:
				localctx = new IsolationLevelContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2271;
				this.match(trinoSqlParserParser.ISOLATION);
				this.state = 2272;
				this.match(trinoSqlParserParser.LEVEL);
				this.state = 2273;
				this.levelOfIsolation();
				}
				break;
			case 175:
				localctx = new TransactionAccessModeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2274;
				this.match(trinoSqlParserParser.READ);
				this.state = 2275;
				(localctx as TransactionAccessModeContext)._accessMode = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===153 || _la===243)) {
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
			this.state = 2285;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 294, this._ctx) ) {
			case 1:
				localctx = new ReadUncommittedContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2278;
				this.match(trinoSqlParserParser.READ);
				this.state = 2279;
				this.match(trinoSqlParserParser.UNCOMMITTED);
				}
				break;
			case 2:
				localctx = new ReadCommittedContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2280;
				this.match(trinoSqlParserParser.READ);
				this.state = 2281;
				this.match(trinoSqlParserParser.COMMITTED);
				}
				break;
			case 3:
				localctx = new RepeatableReadContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2282;
				this.match(trinoSqlParserParser.REPEATABLE);
				this.state = 2283;
				this.match(trinoSqlParserParser.READ);
				}
				break;
			case 4:
				localctx = new SerializableContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2284;
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
			this.state = 2292;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 295, this._ctx) ) {
			case 1:
				localctx = new PositionalArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2287;
				this.expression();
				}
				break;
			case 2:
				localctx = new NamedArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2288;
				this.identifier();
				this.state = 2289;
				this.match(trinoSqlParserParser.T__15);
				this.state = 2290;
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
			this.state = 2299;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 296, this._ctx) ) {
			case 1:
				localctx = new QualifiedArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2294;
				this.identifier();
				this.state = 2295;
				this.match(trinoSqlParserParser.T__0);
				this.state = 2296;
				this.identifier();
				}
				break;
			case 2:
				localctx = new UnqualifiedArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2298;
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
			this.state = 2301;
			this.pathElement();
			this.state = 2306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 2302;
				this.match(trinoSqlParserParser.T__3);
				this.state = 2303;
				this.pathElement();
				}
				}
				this.state = 2308;
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
			this.state = 2309;
			_la = this._input.LA(1);
			if(!(_la===61 || _la===106 || _la===198 || _la===229)) {
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
			this.state = 2311;
			this.identifier();
			this.state = 2316;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 298, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2312;
					this.match(trinoSqlParserParser.T__0);
					this.state = 2313;
					this.identifier();
					}
					}
				}
				this.state = 2318;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 298, this._ctx);
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
			this.state = 2322;
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
			case 96:
			case 98:
			case 99:
			case 100:
			case 102:
			case 103:
			case 105:
			case 108:
			case 110:
			case 111:
			case 113:
			case 115:
			case 116:
			case 117:
			case 119:
			case 121:
			case 122:
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
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 147:
			case 148:
			case 149:
			case 150:
			case 152:
			case 153:
			case 154:
			case 157:
			case 159:
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
			case 172:
			case 173:
			case 174:
			case 175:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 186:
			case 187:
			case 188:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 199:
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
			case 211:
			case 212:
			case 213:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 221:
			case 222:
			case 224:
			case 225:
			case 227:
			case 229:
			case 230:
			case 231:
			case 233:
			case 235:
			case 236:
			case 239:
			case 241:
			case 242:
			case 243:
			case 244:
			case 245:
			case 265:
			case 266:
			case 267:
			case 268:
				localctx = new SpecifiedPrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2319;
				this.principal();
				}
				break;
			case 55:
				localctx = new CurrentUserGrantorContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2320;
				this.match(trinoSqlParserParser.CURRENT_USER);
				}
				break;
			case 51:
				localctx = new CurrentRoleGrantorContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2321;
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
			this.state = 2329;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 300, this._ctx) ) {
			case 1:
				localctx = new UnspecifiedPrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2324;
				this.identifier();
				}
				break;
			case 2:
				localctx = new UserPrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2325;
				this.match(trinoSqlParserParser.USER);
				this.state = 2326;
				this.identifier();
				}
				break;
			case 3:
				localctx = new RolePrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2327;
				this.match(trinoSqlParserParser.ROLE);
				this.state = 2328;
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
			this.state = 2331;
			this.identifier();
			this.state = 2336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 2332;
				this.match(trinoSqlParserParser.T__3);
				this.state = 2333;
				this.identifier();
				}
				}
				this.state = 2338;
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
			this.state = 2344;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 265:
				localctx = new UnquotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2339;
				this.match(trinoSqlParserParser.IDENTIFIER);
				}
				break;
			case 267:
				localctx = new QuotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2340;
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
			case 96:
			case 98:
			case 99:
			case 100:
			case 102:
			case 103:
			case 105:
			case 108:
			case 110:
			case 111:
			case 113:
			case 115:
			case 116:
			case 117:
			case 119:
			case 121:
			case 122:
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
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 147:
			case 148:
			case 149:
			case 150:
			case 152:
			case 153:
			case 154:
			case 157:
			case 159:
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
			case 172:
			case 173:
			case 174:
			case 175:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 186:
			case 187:
			case 188:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 199:
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
			case 211:
			case 212:
			case 213:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 221:
			case 222:
			case 224:
			case 225:
			case 227:
			case 229:
			case 230:
			case 231:
			case 233:
			case 235:
			case 236:
			case 239:
			case 241:
			case 242:
			case 243:
			case 244:
			case 245:
				localctx = new UnquotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2341;
				this.nonReserved();
				}
				break;
			case 268:
				localctx = new BackQuotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2342;
				this.match(trinoSqlParserParser.BACKQUOTED_IDENTIFIER);
				}
				break;
			case 266:
				localctx = new DigitIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2343;
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
			this.state = 2358;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 306, this._ctx) ) {
			case 1:
				localctx = new DecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===253) {
					{
					this.state = 2346;
					this.match(trinoSqlParserParser.MINUS);
					}
				}

				this.state = 2349;
				this.match(trinoSqlParserParser.DECIMAL_VALUE);
				}
				break;
			case 2:
				localctx = new DoubleLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2351;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===253) {
					{
					this.state = 2350;
					this.match(trinoSqlParserParser.MINUS);
					}
				}

				this.state = 2353;
				this.match(trinoSqlParserParser.DOUBLE_VALUE);
				}
				break;
			case 3:
				localctx = new IntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===253) {
					{
					this.state = 2354;
					this.match(trinoSqlParserParser.MINUS);
					}
				}

				this.state = 2357;
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
			this.state = 2360;
			_la = this._input.LA(1);
			if(!(((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1596214615) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 1567190687) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 3162472435) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 4286316499) !== 0) || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 4009750519) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 262585051) !== 0))) {
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

	public static readonly _serializedATN: number[] = [4,1,274,2363,2,0,7,0,
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
	1,7,1,7,3,7,546,8,7,1,7,1,7,1,7,3,7,551,8,7,1,7,1,7,1,7,1,7,3,7,557,8,7,
	1,7,1,7,1,7,1,7,1,7,5,7,564,8,7,10,7,12,7,567,9,7,1,7,1,7,1,7,3,7,572,8,
	7,1,7,1,7,1,7,1,7,1,7,3,7,579,8,7,1,7,1,7,1,7,1,7,5,7,585,8,7,10,7,12,7,
	588,9,7,1,7,1,7,3,7,592,8,7,1,7,1,7,3,7,596,8,7,1,7,1,7,1,7,1,7,1,7,1,7,
	3,7,604,8,7,1,7,1,7,1,7,1,7,3,7,610,8,7,1,7,1,7,1,7,5,7,615,8,7,10,7,12,
	7,618,9,7,1,7,1,7,3,7,622,8,7,1,7,1,7,3,7,626,8,7,1,7,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,3,7,636,8,7,1,7,3,7,639,8,7,1,7,1,7,3,7,643,8,7,1,7,3,7,646,8,
	7,1,7,1,7,1,7,1,7,5,7,652,8,7,10,7,12,7,655,9,7,1,7,1,7,3,7,659,8,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,3,7,683,8,7,1,7,1,7,1,7,1,7,3,7,689,8,7,3,7,691,8,7,1,7,1,7,
	1,7,1,7,3,7,697,8,7,1,7,1,7,1,7,1,7,3,7,703,8,7,3,7,705,8,7,1,7,1,7,1,7,
	1,7,1,7,1,7,3,7,713,8,7,3,7,715,8,7,1,7,1,7,1,7,1,7,3,7,721,8,7,1,7,1,7,
	1,7,1,7,3,7,727,8,7,3,7,729,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,3,7,744,8,7,1,7,1,7,1,7,3,7,749,8,7,1,7,1,7,1,7,1,7,1,7,3,7,
	756,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,768,8,7,3,7,770,8,7,
	1,7,1,7,1,7,1,7,1,7,1,7,3,7,778,8,7,3,7,780,8,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,796,8,7,10,7,12,7,799,9,7,3,7,801,8,
	7,1,7,1,7,3,7,805,8,7,1,7,1,7,3,7,809,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,825,8,7,10,7,12,7,828,9,7,3,7,830,8,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,846,8,7,1,7,1,7,
	1,7,1,7,1,7,1,7,5,7,854,8,7,10,7,12,7,857,9,7,1,7,1,7,3,7,861,8,7,1,7,1,
	7,1,7,1,7,3,7,867,8,7,1,7,3,7,870,8,7,1,7,1,7,1,7,1,7,1,7,4,7,877,8,7,11,
	7,12,7,878,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,891,8,7,1,8,3,8,
	894,8,8,1,8,1,8,1,9,1,9,3,9,900,8,9,1,9,1,9,1,9,5,9,905,8,9,10,9,12,9,908,
	9,9,1,10,1,10,3,10,912,8,10,1,11,1,11,1,11,1,11,3,11,918,8,11,1,11,1,11,
	3,11,922,8,11,1,11,1,11,3,11,926,8,11,1,12,1,12,1,12,1,12,3,12,932,8,12,
	1,13,1,13,1,13,1,13,5,13,938,8,13,10,13,12,13,941,9,13,1,13,1,13,1,14,1,
	14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,5,15,955,8,15,10,15,12,15,958,
	9,15,3,15,960,8,15,1,15,1,15,1,15,3,15,965,8,15,3,15,967,8,15,1,15,1,15,
	1,15,1,15,1,15,3,15,974,8,15,1,15,1,15,1,15,1,15,3,15,980,8,15,3,15,982,
	8,15,1,16,1,16,3,16,986,8,16,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,3,
	18,996,8,18,1,18,1,18,1,18,1,18,3,18,1002,8,18,1,18,5,18,1005,8,18,10,18,
	12,18,1008,9,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,5,19,1017,8,19,10,19,
	12,19,1020,9,19,1,19,1,19,1,19,1,19,3,19,1026,8,19,1,20,1,20,3,20,1030,
	8,20,1,20,1,20,3,20,1034,8,20,1,21,1,21,3,21,1038,8,21,1,21,1,21,1,21,5,
	21,1043,8,21,10,21,12,21,1046,9,21,1,21,1,21,1,21,1,21,5,21,1052,8,21,10,
	21,12,21,1055,9,21,3,21,1057,8,21,1,21,1,21,3,21,1061,8,21,1,21,1,21,1,
	21,3,21,1066,8,21,1,21,1,21,3,21,1070,8,21,1,21,1,21,1,21,1,21,5,21,1076,
	8,21,10,21,12,21,1079,9,21,3,21,1081,8,21,1,22,3,22,1084,8,22,1,22,1,22,
	1,22,5,22,1089,8,22,10,22,12,22,1092,9,22,1,23,1,23,1,23,1,23,1,23,1,23,
	5,23,1100,8,23,10,23,12,23,1103,9,23,3,23,1105,8,23,1,23,1,23,1,23,1,23,
	1,23,1,23,5,23,1113,8,23,10,23,12,23,1116,9,23,3,23,1118,8,23,1,23,1,23,
	1,23,1,23,1,23,1,23,1,23,5,23,1127,8,23,10,23,12,23,1130,9,23,1,23,1,23,
	3,23,1134,8,23,1,24,1,24,1,24,1,24,5,24,1140,8,24,10,24,12,24,1143,9,24,
	3,24,1145,8,24,1,24,1,24,3,24,1149,8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,
	26,3,26,1158,8,26,1,26,1,26,1,26,1,26,1,26,5,26,1165,8,26,10,26,12,26,1168,
	9,26,3,26,1170,8,26,1,26,1,26,1,26,1,26,1,26,5,26,1177,8,26,10,26,12,26,
	1180,9,26,3,26,1182,8,26,1,26,3,26,1185,8,26,1,27,1,27,3,27,1189,8,27,1,
	27,1,27,1,27,1,27,1,27,1,28,1,28,1,29,1,29,3,29,1200,8,29,1,29,3,29,1203,
	8,29,1,29,1,29,1,29,1,29,1,29,3,29,1210,8,29,1,29,3,29,1213,8,29,1,30,1,
	30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,
	1,30,3,30,1232,8,30,5,30,1234,8,30,10,30,12,30,1237,9,30,1,31,3,31,1240,
	8,31,1,31,1,31,3,31,1244,8,31,1,31,1,31,3,31,1248,8,31,1,31,1,31,3,31,1252,
	8,31,3,31,1254,8,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,5,32,1263,8,32,10,
	32,12,32,1266,9,32,1,32,1,32,3,32,1270,8,32,1,33,1,33,1,33,1,33,1,33,1,
	33,1,33,3,33,1279,8,33,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
	5,35,1291,8,35,10,35,12,35,1294,9,35,3,35,1296,8,35,1,35,1,35,1,35,1,35,
	1,35,5,35,1303,8,35,10,35,12,35,1306,9,35,3,35,1308,8,35,1,35,1,35,1,35,
	1,35,5,35,1314,8,35,10,35,12,35,1317,9,35,3,35,1319,8,35,1,35,3,35,1322,
	8,35,1,35,1,35,1,35,3,35,1327,8,35,1,35,3,35,1330,8,35,1,35,1,35,1,35,1,
	35,1,35,1,35,1,35,1,35,5,35,1340,8,35,10,35,12,35,1343,9,35,3,35,1345,8,
	35,1,35,1,35,1,35,1,35,5,35,1351,8,35,10,35,12,35,1354,9,35,1,35,1,35,3,
	35,1358,8,35,1,35,1,35,3,35,1362,8,35,3,35,1364,8,35,3,35,1366,8,35,1,36,
	1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,1381,8,
	37,3,37,1383,8,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,3,38,1394,
	8,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,
	39,1,39,1,39,1,39,1,39,1,39,3,39,1415,8,39,1,40,1,40,1,40,1,40,1,40,1,40,
	5,40,1423,8,40,10,40,12,40,1426,9,40,1,40,1,40,1,41,1,41,1,41,1,41,1,42,
	1,42,3,42,1436,8,42,1,42,1,42,3,42,1440,8,42,3,42,1442,8,42,1,43,1,43,1,
	43,1,43,5,43,1448,8,43,10,43,12,43,1451,9,43,1,43,1,43,1,44,1,44,1,44,1,
	44,1,44,1,44,1,44,1,44,1,44,1,44,5,44,1465,8,44,10,44,12,44,1468,9,44,1,
	44,1,44,1,44,3,44,1473,8,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,
	3,44,1484,8,44,1,45,1,45,1,46,1,46,1,46,3,46,1491,8,46,1,46,1,46,3,46,1495,
	8,46,1,46,1,46,1,46,1,46,1,46,1,46,5,46,1503,8,46,10,46,12,46,1506,9,46,
	1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,1518,8,47,1,47,1,
	47,1,47,1,47,1,47,1,47,3,47,1526,8,47,1,47,1,47,1,47,1,47,1,47,5,47,1533,
	8,47,10,47,12,47,1536,9,47,1,47,1,47,1,47,3,47,1541,8,47,1,47,1,47,1,47,
	1,47,1,47,1,47,3,47,1549,8,47,1,47,1,47,1,47,1,47,3,47,1555,8,47,1,47,1,
	47,3,47,1559,8,47,1,47,1,47,1,47,3,47,1564,8,47,1,47,1,47,1,47,3,47,1569,
	8,47,1,48,1,48,1,48,1,48,3,48,1575,8,48,1,48,1,48,1,48,1,48,1,48,1,48,1,
	48,1,48,1,48,1,48,1,48,1,48,5,48,1589,8,48,10,48,12,48,1592,9,48,1,49,1,
	49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,
	1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,4,49,1619,8,49,11,49,12,49,
	1620,1,49,1,49,1,49,1,49,1,49,1,49,1,49,5,49,1630,8,49,10,49,12,49,1633,
	9,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,1642,8,49,1,49,3,49,1645,8,
	49,1,49,3,49,1648,8,49,1,49,1,49,1,49,3,49,1653,8,49,1,49,1,49,1,49,5,49,
	1658,8,49,10,49,12,49,1661,9,49,3,49,1663,8,49,1,49,1,49,1,49,1,49,1,49,
	5,49,1670,8,49,10,49,12,49,1673,9,49,3,49,1675,8,49,1,49,1,49,3,49,1679,
	8,49,1,49,3,49,1682,8,49,1,49,3,49,1685,8,49,1,49,1,49,1,49,1,49,1,49,1,
	49,1,49,1,49,1,49,1,49,1,49,5,49,1698,8,49,10,49,12,49,1701,9,49,3,49,1703,
	8,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
	49,1,49,4,49,1720,8,49,11,49,12,49,1721,1,49,1,49,3,49,1726,8,49,1,49,1,
	49,1,49,1,49,4,49,1732,8,49,11,49,12,49,1733,1,49,1,49,3,49,1738,8,49,1,
	49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,
	1,49,1,49,1,49,1,49,1,49,1,49,5,49,1761,8,49,10,49,12,49,1764,9,49,3,49,
	1766,8,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,1775,8,49,1,49,1,49,1,
	49,1,49,3,49,1781,8,49,1,49,1,49,1,49,1,49,3,49,1787,8,49,1,49,1,49,1,49,
	1,49,3,49,1793,8,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
	49,3,49,1806,8,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,1815,8,49,1,49,
	1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
	49,1,49,1,49,5,49,1835,8,49,10,49,12,49,1838,9,49,3,49,1840,8,49,1,49,3,
	49,1843,8,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,5,49,1853,8,49,10,
	49,12,49,1856,9,49,1,50,1,50,1,51,1,51,1,51,1,51,3,51,1864,8,51,1,52,1,
	52,1,52,1,52,3,52,1870,8,52,3,52,1872,8,52,1,53,1,53,1,53,1,53,1,53,1,53,
	3,53,1880,8,53,1,54,1,54,1,55,1,55,1,56,1,56,1,57,1,57,3,57,1890,8,57,1,
	57,1,57,1,57,1,57,3,57,1896,8,57,1,58,1,58,1,59,1,59,1,60,1,60,1,60,1,60,
	1,60,1,60,5,60,1908,8,60,10,60,12,60,1911,9,60,1,60,1,60,1,60,1,60,1,60,
	1,60,3,60,1919,8,60,1,60,1,60,1,60,1,60,1,60,3,60,1926,8,60,1,60,1,60,1,
	60,3,60,1931,8,60,1,60,1,60,1,60,1,60,1,60,3,60,1938,8,60,1,60,1,60,1,60,
	1,60,1,60,1,60,1,60,1,60,3,60,1948,8,60,1,60,1,60,1,60,3,60,1953,8,60,1,
	60,1,60,1,60,1,60,1,60,3,60,1960,8,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,
	1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,
	60,5,60,1984,8,60,10,60,12,60,1987,9,60,1,60,1,60,3,60,1991,8,60,3,60,1993,
	8,60,1,60,1,60,1,60,1,60,1,60,3,60,2000,8,60,5,60,2002,8,60,10,60,12,60,
	2005,9,60,1,61,1,61,1,61,1,61,3,61,2011,8,61,1,62,1,62,3,62,2015,8,62,1,
	63,1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,
	3,65,2032,8,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,5,
	65,2045,8,65,10,65,12,65,2048,9,65,1,65,1,65,1,65,1,65,3,65,2054,8,65,1,
	65,1,65,1,65,1,65,1,65,1,65,1,65,3,65,2063,8,65,1,65,1,65,1,65,1,65,1,65,
	1,65,5,65,2071,8,65,10,65,12,65,2074,9,65,1,65,1,65,3,65,2078,8,65,1,65,
	1,65,1,65,1,65,1,65,5,65,2085,8,65,10,65,12,65,2088,9,65,1,65,1,65,3,65,
	2092,8,65,1,66,1,66,1,66,1,66,1,66,1,66,3,66,2100,8,66,1,67,1,67,1,67,1,
	67,5,67,2106,8,67,10,67,12,67,2109,9,67,3,67,2111,8,67,1,67,1,67,1,67,1,
	67,3,67,2117,8,67,1,67,3,67,2120,8,67,1,67,1,67,1,67,1,67,1,67,3,67,2127,
	8,67,1,67,1,67,1,67,1,67,5,67,2133,8,67,10,67,12,67,2136,9,67,3,67,2138,
	8,67,1,67,1,67,1,67,1,67,5,67,2144,8,67,10,67,12,67,2147,9,67,3,67,2149,
	8,67,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,
	68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,3,68,2175,8,68,1,69,
	1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,3,69,2186,8,69,1,70,1,70,1,70,3,
	70,2191,8,70,1,70,1,70,1,70,1,70,1,70,5,70,2198,8,70,10,70,12,70,2201,9,
	70,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,5,71,2211,8,71,10,71,12,71,2214,
	9,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,3,71,2228,
	8,71,1,72,1,72,3,72,2232,8,72,1,72,1,72,3,72,2236,8,72,1,72,1,72,3,72,2240,
	8,72,1,72,1,72,1,72,1,72,3,72,2246,8,72,1,72,1,72,3,72,2250,8,72,1,72,1,
	72,3,72,2254,8,72,1,72,1,72,3,72,2258,8,72,3,72,2260,8,72,1,73,1,73,1,73,
	1,73,1,74,1,74,1,74,1,74,3,74,2270,8,74,1,75,1,75,1,75,1,75,1,75,3,75,2277,
	8,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,3,76,2286,8,76,1,77,1,77,1,77,1,
	77,1,77,3,77,2293,8,77,1,78,1,78,1,78,1,78,1,78,3,78,2300,8,78,1,79,1,79,
	1,79,5,79,2305,8,79,10,79,12,79,2308,9,79,1,80,1,80,1,81,1,81,1,81,5,81,
	2315,8,81,10,81,12,81,2318,9,81,1,82,1,82,1,82,3,82,2323,8,82,1,83,1,83,
	1,83,1,83,1,83,3,83,2330,8,83,1,84,1,84,1,84,5,84,2335,8,84,10,84,12,84,
	2338,9,84,1,85,1,85,1,85,1,85,1,85,3,85,2345,8,85,1,86,3,86,2348,8,86,1,
	86,1,86,3,86,2352,8,86,1,86,1,86,3,86,2356,8,86,1,86,3,86,2359,8,86,1,87,
	1,87,1,87,0,7,36,60,92,96,98,120,140,88,0,2,4,6,8,10,12,14,16,18,20,22,
	24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
	72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,
	116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,
	152,154,156,158,160,162,164,166,168,170,172,174,0,28,2,0,34,34,183,183,
	2,0,60,60,110,110,2,0,193,193,210,210,2,0,87,87,101,101,2,0,74,74,102,102,
	1,0,190,191,2,0,83,83,137,137,2,0,258,258,262,262,2,0,73,73,226,226,2,0,
	27,27,62,62,2,0,83,83,116,116,2,0,20,20,65,65,2,0,30,30,209,209,2,0,103,
	103,197,197,1,0,252,253,1,0,254,256,2,0,82,82,192,192,1,0,246,251,3,0,20,
	20,24,24,204,204,2,0,79,79,220,220,5,0,58,58,98,98,134,135,195,195,244,
	244,1,0,138,141,2,0,84,84,169,169,3,0,93,93,115,115,213,213,4,0,66,66,111,
	111,125,125,233,233,2,0,153,153,243,243,4,0,61,61,106,106,198,198,229,229,
	49,0,17,20,22,22,24,25,27,30,33,34,37,42,47,47,56,58,60,60,62,62,64,64,
	66,67,70,70,74,74,77,77,80,84,86,86,89,93,96,96,98,100,102,103,105,105,
	108,108,110,111,113,113,115,117,119,119,121,122,125,135,137,143,147,150,
	152,154,157,157,159,170,172,175,177,184,186,188,190,197,199,209,211,213,
	215,219,221,222,224,225,227,227,229,231,233,233,235,236,239,239,241,245,
	2744,0,179,1,0,0,0,2,189,1,0,0,0,4,191,1,0,0,0,6,194,1,0,0,0,8,197,1,0,
	0,0,10,200,1,0,0,0,12,203,1,0,0,0,14,890,1,0,0,0,16,893,1,0,0,0,18,897,
	1,0,0,0,20,911,1,0,0,0,22,913,1,0,0,0,24,927,1,0,0,0,26,933,1,0,0,0,28,
	944,1,0,0,0,30,948,1,0,0,0,32,985,1,0,0,0,34,987,1,0,0,0,36,989,1,0,0,0,
	38,1025,1,0,0,0,40,1027,1,0,0,0,42,1035,1,0,0,0,44,1083,1,0,0,0,46,1133,
	1,0,0,0,48,1148,1,0,0,0,50,1150,1,0,0,0,52,1157,1,0,0,0,54,1186,1,0,0,0,
	56,1195,1,0,0,0,58,1212,1,0,0,0,60,1214,1,0,0,0,62,1253,1,0,0,0,64,1269,
	1,0,0,0,66,1271,1,0,0,0,68,1280,1,0,0,0,70,1282,1,0,0,0,72,1367,1,0,0,0,
	74,1382,1,0,0,0,76,1393,1,0,0,0,78,1414,1,0,0,0,80,1416,1,0,0,0,82,1429,
	1,0,0,0,84,1433,1,0,0,0,86,1443,1,0,0,0,88,1483,1,0,0,0,90,1485,1,0,0,0,
	92,1494,1,0,0,0,94,1568,1,0,0,0,96,1574,1,0,0,0,98,1842,1,0,0,0,100,1857,
	1,0,0,0,102,1863,1,0,0,0,104,1871,1,0,0,0,106,1879,1,0,0,0,108,1881,1,0,
	0,0,110,1883,1,0,0,0,112,1885,1,0,0,0,114,1887,1,0,0,0,116,1897,1,0,0,0,
	118,1899,1,0,0,0,120,1992,1,0,0,0,122,2010,1,0,0,0,124,2014,1,0,0,0,126,
	2016,1,0,0,0,128,2021,1,0,0,0,130,2091,1,0,0,0,132,2093,1,0,0,0,134,2110,
	1,0,0,0,136,2174,1,0,0,0,138,2185,1,0,0,0,140,2187,1,0,0,0,142,2227,1,0,
	0,0,144,2259,1,0,0,0,146,2261,1,0,0,0,148,2269,1,0,0,0,150,2276,1,0,0,0,
	152,2285,1,0,0,0,154,2292,1,0,0,0,156,2299,1,0,0,0,158,2301,1,0,0,0,160,
	2309,1,0,0,0,162,2311,1,0,0,0,164,2322,1,0,0,0,166,2329,1,0,0,0,168,2331,
	1,0,0,0,170,2344,1,0,0,0,172,2358,1,0,0,0,174,2360,1,0,0,0,176,178,3,2,
	1,0,177,176,1,0,0,0,178,181,1,0,0,0,179,177,1,0,0,0,179,180,1,0,0,0,180,
	182,1,0,0,0,181,179,1,0,0,0,182,183,5,0,0,1,183,1,1,0,0,0,184,190,3,4,2,
	0,185,190,3,6,3,0,186,190,3,8,4,0,187,190,3,10,5,0,188,190,3,12,6,0,189,
	184,1,0,0,0,189,185,1,0,0,0,189,186,1,0,0,0,189,187,1,0,0,0,189,188,1,0,
	0,0,190,3,1,0,0,0,191,192,3,14,7,0,192,193,5,269,0,0,193,5,1,0,0,0,194,
	195,3,90,45,0,195,196,5,269,0,0,196,7,1,0,0,0,197,198,3,158,79,0,198,199,
	5,269,0,0,199,9,1,0,0,0,200,201,3,120,60,0,201,202,5,269,0,0,202,11,1,0,
	0,0,203,204,3,140,70,0,204,205,5,269,0,0,205,13,1,0,0,0,206,891,3,16,8,
	0,207,208,5,230,0,0,208,891,3,170,85,0,209,210,5,230,0,0,210,211,3,170,
	85,0,211,212,5,1,0,0,212,213,3,170,85,0,213,891,1,0,0,0,214,215,5,44,0,
	0,215,219,5,193,0,0,216,217,5,99,0,0,217,218,5,145,0,0,218,220,5,76,0,0,
	219,216,1,0,0,0,219,220,1,0,0,0,220,221,1,0,0,0,221,224,3,162,81,0,222,
	223,5,29,0,0,223,225,3,166,83,0,224,222,1,0,0,0,224,225,1,0,0,0,225,228,
	1,0,0,0,226,227,5,240,0,0,227,229,3,26,13,0,228,226,1,0,0,0,228,229,1,0,
	0,0,229,891,1,0,0,0,230,231,5,68,0,0,231,234,5,193,0,0,232,233,5,99,0,0,
	233,235,5,76,0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,236,1,0,0,0,236,238,
	3,162,81,0,237,239,7,0,0,0,238,237,1,0,0,0,238,239,1,0,0,0,239,891,1,0,
	0,0,240,241,5,21,0,0,241,242,5,193,0,0,242,243,3,162,81,0,243,244,5,178,
	0,0,244,245,5,218,0,0,245,246,3,170,85,0,246,891,1,0,0,0,247,248,5,21,0,
	0,248,249,5,193,0,0,249,250,3,162,81,0,250,251,5,201,0,0,251,252,5,29,0,
	0,252,253,3,166,83,0,253,891,1,0,0,0,254,255,5,44,0,0,255,259,5,210,0,0,
	256,257,5,99,0,0,257,258,5,145,0,0,258,260,5,76,0,0,259,256,1,0,0,0,259,
	260,1,0,0,0,260,261,1,0,0,0,261,263,3,162,81,0,262,264,3,86,43,0,263,262,
	1,0,0,0,263,264,1,0,0,0,264,267,1,0,0,0,265,266,5,40,0,0,266,268,3,104,
	52,0,267,265,1,0,0,0,267,268,1,0,0,0,268,271,1,0,0,0,269,270,5,240,0,0,
	270,272,3,26,13,0,271,269,1,0,0,0,271,272,1,0,0,0,272,273,1,0,0,0,273,279,
	5,26,0,0,274,280,3,16,8,0,275,276,5,2,0,0,276,277,3,16,8,0,277,278,5,3,
	0,0,278,280,1,0,0,0,279,274,1,0,0,0,279,275,1,0,0,0,280,286,1,0,0,0,281,
	283,5,240,0,0,282,284,5,142,0,0,283,282,1,0,0,0,283,284,1,0,0,0,284,285,
	1,0,0,0,285,287,5,56,0,0,286,281,1,0,0,0,286,287,1,0,0,0,287,891,1,0,0,
	0,288,289,5,44,0,0,289,293,5,210,0,0,290,291,5,99,0,0,291,292,5,145,0,0,
	292,294,5,76,0,0,293,290,1,0,0,0,293,294,1,0,0,0,294,295,1,0,0,0,295,296,
	3,162,81,0,296,297,5,2,0,0,297,302,3,20,10,0,298,299,5,4,0,0,299,301,3,
	20,10,0,300,298,1,0,0,0,301,304,1,0,0,0,302,300,1,0,0,0,302,303,1,0,0,0,
	303,305,1,0,0,0,304,302,1,0,0,0,305,308,5,3,0,0,306,307,5,40,0,0,307,309,
	3,104,52,0,308,306,1,0,0,0,308,309,1,0,0,0,309,312,1,0,0,0,310,311,5,240,
	0,0,311,313,3,26,13,0,312,310,1,0,0,0,312,313,1,0,0,0,313,891,1,0,0,0,314,
	315,5,68,0,0,315,318,5,210,0,0,316,317,5,99,0,0,317,319,5,76,0,0,318,316,
	1,0,0,0,318,319,1,0,0,0,319,320,1,0,0,0,320,891,3,162,81,0,321,322,5,106,
	0,0,322,323,5,109,0,0,323,325,3,162,81,0,324,326,3,86,43,0,325,324,1,0,
	0,0,325,326,1,0,0,0,326,327,1,0,0,0,327,328,3,16,8,0,328,891,1,0,0,0,329,
	330,5,61,0,0,330,331,5,87,0,0,331,334,3,162,81,0,332,333,5,238,0,0,333,
	335,3,92,46,0,334,332,1,0,0,0,334,335,1,0,0,0,335,891,1,0,0,0,336,337,5,
	21,0,0,337,340,5,210,0,0,338,339,5,99,0,0,339,341,5,76,0,0,340,338,1,0,
	0,0,340,341,1,0,0,0,341,342,1,0,0,0,342,343,3,162,81,0,343,344,5,178,0,
	0,344,345,5,218,0,0,345,346,3,162,81,0,346,891,1,0,0,0,347,348,5,40,0,0,
	348,349,5,151,0,0,349,350,5,210,0,0,350,351,3,162,81,0,351,354,5,112,0,
	0,352,355,3,104,52,0,353,355,5,146,0,0,354,352,1,0,0,0,354,353,1,0,0,0,
	355,891,1,0,0,0,356,357,5,40,0,0,357,358,5,151,0,0,358,359,5,38,0,0,359,
	360,3,162,81,0,360,363,5,112,0,0,361,364,3,104,52,0,362,364,5,146,0,0,363,
	361,1,0,0,0,363,362,1,0,0,0,364,891,1,0,0,0,365,366,5,21,0,0,366,369,5,
	210,0,0,367,368,5,99,0,0,368,370,5,76,0,0,369,367,1,0,0,0,369,370,1,0,0,
	0,370,371,1,0,0,0,371,372,3,162,81,0,372,373,5,178,0,0,373,376,5,38,0,0,
	374,375,5,99,0,0,375,377,5,76,0,0,376,374,1,0,0,0,376,377,1,0,0,0,377,378,
	1,0,0,0,378,379,3,170,85,0,379,380,5,218,0,0,380,381,3,170,85,0,381,891,
	1,0,0,0,382,383,5,21,0,0,383,386,5,210,0,0,384,385,5,99,0,0,385,387,5,76,
	0,0,386,384,1,0,0,0,386,387,1,0,0,0,387,388,1,0,0,0,388,389,3,162,81,0,
	389,390,5,68,0,0,390,393,5,38,0,0,391,392,5,99,0,0,392,394,5,76,0,0,393,
	391,1,0,0,0,393,394,1,0,0,0,394,395,1,0,0,0,395,396,3,162,81,0,396,891,
	1,0,0,0,397,398,5,21,0,0,398,401,5,210,0,0,399,400,5,99,0,0,400,402,5,76,
	0,0,401,399,1,0,0,0,401,402,1,0,0,0,402,403,1,0,0,0,403,404,3,162,81,0,
	404,405,5,17,0,0,405,409,5,38,0,0,406,407,5,99,0,0,407,408,5,145,0,0,408,
	410,5,76,0,0,409,406,1,0,0,0,409,410,1,0,0,0,410,411,1,0,0,0,411,412,3,
	22,11,0,412,891,1,0,0,0,413,414,5,21,0,0,414,415,5,210,0,0,415,416,3,162,
	81,0,416,417,5,201,0,0,417,418,5,29,0,0,418,419,3,166,83,0,419,891,1,0,
	0,0,420,421,5,22,0,0,421,424,3,162,81,0,422,423,5,240,0,0,423,425,3,26,
	13,0,424,422,1,0,0,0,424,425,1,0,0,0,425,891,1,0,0,0,426,429,5,44,0,0,427,
	428,5,155,0,0,428,430,5,180,0,0,429,427,1,0,0,0,429,430,1,0,0,0,430,431,
	1,0,0,0,431,432,5,131,0,0,432,436,5,236,0,0,433,434,5,99,0,0,434,435,5,
	145,0,0,435,437,5,76,0,0,436,433,1,0,0,0,436,437,1,0,0,0,437,438,1,0,0,
	0,438,441,3,162,81,0,439,440,5,40,0,0,440,442,3,104,52,0,441,439,1,0,0,
	0,441,442,1,0,0,0,442,445,1,0,0,0,443,444,5,240,0,0,444,446,3,26,13,0,445,
	443,1,0,0,0,445,446,1,0,0,0,446,447,1,0,0,0,447,448,5,26,0,0,448,449,3,
	16,8,0,449,891,1,0,0,0,450,453,5,44,0,0,451,452,5,155,0,0,452,454,5,180,
	0,0,453,451,1,0,0,0,453,454,1,0,0,0,454,455,1,0,0,0,455,456,5,236,0,0,456,
	459,3,162,81,0,457,458,5,40,0,0,458,460,3,104,52,0,459,457,1,0,0,0,459,
	460,1,0,0,0,460,463,1,0,0,0,461,462,5,196,0,0,462,464,7,1,0,0,463,461,1,
	0,0,0,463,464,1,0,0,0,464,465,1,0,0,0,465,466,5,26,0,0,466,467,3,16,8,0,
	467,891,1,0,0,0,468,469,5,177,0,0,469,470,5,131,0,0,470,471,5,236,0,0,471,
	891,3,162,81,0,472,473,5,68,0,0,473,474,5,131,0,0,474,477,5,236,0,0,475,
	476,5,99,0,0,476,478,5,76,0,0,477,475,1,0,0,0,477,478,1,0,0,0,478,479,1,
	0,0,0,479,891,3,162,81,0,480,481,5,68,0,0,481,484,5,236,0,0,482,483,5,99,
	0,0,483,485,5,76,0,0,484,482,1,0,0,0,484,485,1,0,0,0,485,486,1,0,0,0,486,
	891,3,162,81,0,487,488,5,21,0,0,488,489,5,236,0,0,489,490,3,162,81,0,490,
	491,5,178,0,0,491,492,5,218,0,0,492,493,3,162,81,0,493,891,1,0,0,0,494,
	495,5,21,0,0,495,496,5,236,0,0,496,497,3,162,81,0,497,498,5,201,0,0,498,
	499,5,29,0,0,499,500,3,166,83,0,500,891,1,0,0,0,501,502,5,33,0,0,502,503,
	3,162,81,0,503,512,5,2,0,0,504,509,3,154,77,0,505,506,5,4,0,0,506,508,3,
	154,77,0,507,505,1,0,0,0,508,511,1,0,0,0,509,507,1,0,0,0,509,510,1,0,0,
	0,510,513,1,0,0,0,511,509,1,0,0,0,512,504,1,0,0,0,512,513,1,0,0,0,513,514,
	1,0,0,0,514,515,5,3,0,0,515,891,1,0,0,0,516,517,5,44,0,0,517,518,5,186,
	0,0,518,522,3,170,85,0,519,520,5,240,0,0,520,521,5,18,0,0,521,523,3,164,
	82,0,522,519,1,0,0,0,522,523,1,0,0,0,523,526,1,0,0,0,524,525,5,101,0,0,
	525,527,3,170,85,0,526,524,1,0,0,0,526,527,1,0,0,0,527,891,1,0,0,0,528,
	529,5,68,0,0,529,530,5,186,0,0,530,891,3,170,85,0,531,532,5,90,0,0,532,
	533,3,168,84,0,533,534,5,218,0,0,534,539,3,166,83,0,535,536,5,4,0,0,536,
	538,3,166,83,0,537,535,1,0,0,0,538,541,1,0,0,0,539,537,1,0,0,0,539,540,
	1,0,0,0,540,545,1,0,0,0,541,539,1,0,0,0,542,543,5,240,0,0,543,544,5,18,
	0,0,544,546,5,154,0,0,545,542,1,0,0,0,545,546,1,0,0,0,546,550,1,0,0,0,547,
	548,5,91,0,0,548,549,5,32,0,0,549,551,3,164,82,0,550,547,1,0,0,0,550,551,
	1,0,0,0,551,891,1,0,0,0,552,556,5,184,0,0,553,554,5,18,0,0,554,555,5,154,
	0,0,555,557,5,85,0,0,556,553,1,0,0,0,556,557,1,0,0,0,557,558,1,0,0,0,558,
	559,3,168,84,0,559,560,5,87,0,0,560,565,3,166,83,0,561,562,5,4,0,0,562,
	564,3,166,83,0,563,561,1,0,0,0,564,567,1,0,0,0,565,563,1,0,0,0,565,566,
	1,0,0,0,566,571,1,0,0,0,567,565,1,0,0,0,568,569,5,91,0,0,569,570,5,32,0,
	0,570,572,3,164,82,0,571,568,1,0,0,0,571,572,1,0,0,0,572,891,1,0,0,0,573,
	574,5,201,0,0,574,578,5,186,0,0,575,579,5,20,0,0,576,579,5,143,0,0,577,
	579,3,170,85,0,578,575,1,0,0,0,578,576,1,0,0,0,578,577,1,0,0,0,579,891,
	1,0,0,0,580,591,5,90,0,0,581,586,3,160,80,0,582,583,5,4,0,0,583,585,3,160,
	80,0,584,582,1,0,0,0,585,588,1,0,0,0,586,584,1,0,0,0,586,587,1,0,0,0,587,
	592,1,0,0,0,588,586,1,0,0,0,589,590,5,20,0,0,590,592,5,172,0,0,591,581,
	1,0,0,0,591,589,1,0,0,0,592,593,1,0,0,0,593,595,5,151,0,0,594,596,7,2,0,
	0,595,594,1,0,0,0,595,596,1,0,0,0,596,597,1,0,0,0,597,598,3,162,81,0,598,
	599,5,218,0,0,599,603,3,166,83,0,600,601,5,240,0,0,601,602,5,90,0,0,602,
	604,5,154,0,0,603,600,1,0,0,0,603,604,1,0,0,0,604,891,1,0,0,0,605,609,5,
	184,0,0,606,607,5,90,0,0,607,608,5,154,0,0,608,610,5,85,0,0,609,606,1,0,
	0,0,609,610,1,0,0,0,610,621,1,0,0,0,611,616,3,160,80,0,612,613,5,4,0,0,
	613,615,3,160,80,0,614,612,1,0,0,0,615,618,1,0,0,0,616,614,1,0,0,0,616,
	617,1,0,0,0,617,622,1,0,0,0,618,616,1,0,0,0,619,620,5,20,0,0,620,622,5,
	172,0,0,621,611,1,0,0,0,621,619,1,0,0,0,622,623,1,0,0,0,623,625,5,151,0,
	0,624,626,7,2,0,0,625,624,1,0,0,0,625,626,1,0,0,0,626,627,1,0,0,0,627,628,
	3,162,81,0,628,629,5,87,0,0,629,630,3,166,83,0,630,891,1,0,0,0,631,632,
	5,203,0,0,632,638,5,92,0,0,633,635,5,151,0,0,634,636,5,210,0,0,635,634,
	1,0,0,0,635,636,1,0,0,0,636,637,1,0,0,0,637,639,3,162,81,0,638,633,1,0,
	0,0,638,639,1,0,0,0,639,891,1,0,0,0,640,642,5,77,0,0,641,643,5,22,0,0,642,
	641,1,0,0,0,642,643,1,0,0,0,643,645,1,0,0,0,644,646,5,235,0,0,645,644,1,
	0,0,0,645,646,1,0,0,0,646,658,1,0,0,0,647,648,5,2,0,0,648,653,3,148,74,
	0,649,650,5,4,0,0,650,652,3,148,74,0,651,649,1,0,0,0,652,655,1,0,0,0,653,
	651,1,0,0,0,653,654,1,0,0,0,654,656,1,0,0,0,655,653,1,0,0,0,656,657,5,3,
	0,0,657,659,1,0,0,0,658,647,1,0,0,0,658,659,1,0,0,0,659,660,1,0,0,0,660,
	891,3,14,7,0,661,662,5,203,0,0,662,663,5,44,0,0,663,664,5,210,0,0,664,891,
	3,162,81,0,665,666,5,203,0,0,666,667,5,44,0,0,667,668,5,193,0,0,668,891,
	3,162,81,0,669,670,5,203,0,0,670,671,5,44,0,0,671,672,5,236,0,0,672,891,
	3,162,81,0,673,674,5,203,0,0,674,675,5,44,0,0,675,676,5,131,0,0,676,677,
	5,236,0,0,677,891,3,162,81,0,678,679,5,203,0,0,679,682,5,211,0,0,680,681,
	7,3,0,0,681,683,3,162,81,0,682,680,1,0,0,0,682,683,1,0,0,0,683,690,1,0,
	0,0,684,685,5,120,0,0,685,688,3,104,52,0,686,687,5,72,0,0,687,689,3,104,
	52,0,688,686,1,0,0,0,688,689,1,0,0,0,689,691,1,0,0,0,690,684,1,0,0,0,690,
	691,1,0,0,0,691,891,1,0,0,0,692,693,5,203,0,0,693,696,5,194,0,0,694,695,
	7,3,0,0,695,697,3,170,85,0,696,694,1,0,0,0,696,697,1,0,0,0,697,704,1,0,
	0,0,698,699,5,120,0,0,699,702,3,104,52,0,700,701,5,72,0,0,701,703,3,104,
	52,0,702,700,1,0,0,0,702,703,1,0,0,0,703,705,1,0,0,0,704,698,1,0,0,0,704,
	705,1,0,0,0,705,891,1,0,0,0,706,707,5,203,0,0,707,714,5,37,0,0,708,709,
	5,120,0,0,709,712,3,104,52,0,710,711,5,72,0,0,711,713,3,104,52,0,712,710,
	1,0,0,0,712,713,1,0,0,0,713,715,1,0,0,0,714,708,1,0,0,0,714,715,1,0,0,0,
	715,891,1,0,0,0,716,717,5,203,0,0,717,718,5,39,0,0,718,720,7,3,0,0,719,
	721,3,162,81,0,720,719,1,0,0,0,720,721,1,0,0,0,721,728,1,0,0,0,722,723,
	5,120,0,0,723,726,3,104,52,0,724,725,5,72,0,0,725,727,3,104,52,0,726,724,
	1,0,0,0,726,727,1,0,0,0,727,729,1,0,0,0,728,722,1,0,0,0,728,729,1,0,0,0,
	729,891,1,0,0,0,730,731,5,203,0,0,731,732,5,206,0,0,732,733,5,85,0,0,733,
	891,3,162,81,0,734,735,5,203,0,0,735,736,5,206,0,0,736,737,5,85,0,0,737,
	738,5,2,0,0,738,739,3,16,8,0,739,740,5,3,0,0,740,891,1,0,0,0,741,743,5,
	203,0,0,742,744,5,47,0,0,743,742,1,0,0,0,743,744,1,0,0,0,744,745,1,0,0,
	0,745,748,5,187,0,0,746,747,7,3,0,0,747,749,3,170,85,0,748,746,1,0,0,0,
	748,749,1,0,0,0,749,891,1,0,0,0,750,751,5,203,0,0,751,752,5,186,0,0,752,
	755,5,92,0,0,753,754,7,3,0,0,754,756,3,170,85,0,755,753,1,0,0,0,755,756,
	1,0,0,0,756,891,1,0,0,0,757,758,5,63,0,0,758,891,3,162,81,0,759,760,5,62,
	0,0,760,891,3,162,81,0,761,762,5,203,0,0,762,769,5,89,0,0,763,764,5,120,
	0,0,764,767,3,104,52,0,765,766,5,72,0,0,766,768,3,104,52,0,767,765,1,0,
	0,0,767,768,1,0,0,0,768,770,1,0,0,0,769,763,1,0,0,0,769,770,1,0,0,0,770,
	891,1,0,0,0,771,772,5,203,0,0,772,779,5,200,0,0,773,774,5,120,0,0,774,777,
	3,104,52,0,775,776,5,72,0,0,776,778,3,104,52,0,777,775,1,0,0,0,777,778,
	1,0,0,0,778,780,1,0,0,0,779,773,1,0,0,0,779,780,1,0,0,0,780,891,1,0,0,0,
	781,782,5,201,0,0,782,783,5,200,0,0,783,784,3,162,81,0,784,785,5,246,0,
	0,785,786,3,90,45,0,786,891,1,0,0,0,787,788,5,181,0,0,788,789,5,200,0,0,
	789,891,3,162,81,0,790,791,5,205,0,0,791,800,5,219,0,0,792,797,3,150,75,
	0,793,794,5,4,0,0,794,796,3,150,75,0,795,793,1,0,0,0,796,799,1,0,0,0,797,
	795,1,0,0,0,797,798,1,0,0,0,798,801,1,0,0,0,799,797,1,0,0,0,800,792,1,0,
	0,0,800,801,1,0,0,0,801,891,1,0,0,0,802,804,5,41,0,0,803,805,5,242,0,0,
	804,803,1,0,0,0,804,805,1,0,0,0,805,891,1,0,0,0,806,808,5,188,0,0,807,809,
	5,242,0,0,808,807,1,0,0,0,808,809,1,0,0,0,809,891,1,0,0,0,810,811,5,171,
	0,0,811,812,3,170,85,0,812,813,5,87,0,0,813,814,3,14,7,0,814,891,1,0,0,
	0,815,816,5,59,0,0,816,817,5,171,0,0,817,891,3,170,85,0,818,819,5,75,0,
	0,819,829,3,170,85,0,820,821,5,232,0,0,821,826,3,90,45,0,822,823,5,4,0,
	0,823,825,3,90,45,0,824,822,1,0,0,0,825,828,1,0,0,0,826,824,1,0,0,0,826,
	827,1,0,0,0,827,830,1,0,0,0,828,826,1,0,0,0,829,820,1,0,0,0,829,830,1,0,
	0,0,830,891,1,0,0,0,831,832,5,63,0,0,832,833,5,105,0,0,833,891,3,170,85,
	0,834,835,5,63,0,0,835,836,5,159,0,0,836,891,3,170,85,0,837,838,5,201,0,
	0,838,839,5,164,0,0,839,891,3,158,79,0,840,841,5,201,0,0,841,842,5,216,
	0,0,842,845,5,245,0,0,843,846,5,122,0,0,844,846,3,90,45,0,845,843,1,0,0,
	0,845,844,1,0,0,0,846,891,1,0,0,0,847,848,5,229,0,0,848,849,3,162,81,0,
	849,850,5,201,0,0,850,855,3,146,73,0,851,852,5,4,0,0,852,854,3,146,73,0,
	853,851,1,0,0,0,854,857,1,0,0,0,855,853,1,0,0,0,855,856,1,0,0,0,856,860,
	1,0,0,0,857,855,1,0,0,0,858,859,5,238,0,0,859,861,3,92,46,0,860,858,1,0,
	0,0,860,861,1,0,0,0,861,891,1,0,0,0,862,863,5,133,0,0,863,864,5,109,0,0,
	864,869,3,162,81,0,865,867,5,26,0,0,866,865,1,0,0,0,866,867,1,0,0,0,867,
	868,1,0,0,0,868,870,3,170,85,0,869,866,1,0,0,0,869,870,1,0,0,0,870,871,
	1,0,0,0,871,872,5,232,0,0,872,873,3,60,30,0,873,874,5,151,0,0,874,876,3,
	90,45,0,875,877,3,130,65,0,876,875,1,0,0,0,877,878,1,0,0,0,878,876,1,0,
	0,0,878,879,1,0,0,0,879,891,1,0,0,0,880,881,5,203,0,0,881,882,5,40,0,0,
	882,883,5,151,0,0,883,884,5,210,0,0,884,891,3,162,81,0,885,886,5,203,0,
	0,886,887,5,40,0,0,887,888,5,151,0,0,888,889,5,38,0,0,889,891,3,162,81,
	0,890,206,1,0,0,0,890,207,1,0,0,0,890,209,1,0,0,0,890,214,1,0,0,0,890,230,
	1,0,0,0,890,240,1,0,0,0,890,247,1,0,0,0,890,254,1,0,0,0,890,288,1,0,0,0,
	890,314,1,0,0,0,890,321,1,0,0,0,890,329,1,0,0,0,890,336,1,0,0,0,890,347,
	1,0,0,0,890,356,1,0,0,0,890,365,1,0,0,0,890,382,1,0,0,0,890,397,1,0,0,0,
	890,413,1,0,0,0,890,420,1,0,0,0,890,426,1,0,0,0,890,450,1,0,0,0,890,468,
	1,0,0,0,890,472,1,0,0,0,890,480,1,0,0,0,890,487,1,0,0,0,890,494,1,0,0,0,
	890,501,1,0,0,0,890,516,1,0,0,0,890,528,1,0,0,0,890,531,1,0,0,0,890,552,
	1,0,0,0,890,573,1,0,0,0,890,580,1,0,0,0,890,605,1,0,0,0,890,631,1,0,0,0,
	890,640,1,0,0,0,890,661,1,0,0,0,890,665,1,0,0,0,890,669,1,0,0,0,890,673,
	1,0,0,0,890,678,1,0,0,0,890,692,1,0,0,0,890,706,1,0,0,0,890,716,1,0,0,0,
	890,730,1,0,0,0,890,734,1,0,0,0,890,741,1,0,0,0,890,750,1,0,0,0,890,757,
	1,0,0,0,890,759,1,0,0,0,890,761,1,0,0,0,890,771,1,0,0,0,890,781,1,0,0,0,
	890,787,1,0,0,0,890,790,1,0,0,0,890,802,1,0,0,0,890,806,1,0,0,0,890,810,
	1,0,0,0,890,815,1,0,0,0,890,818,1,0,0,0,890,831,1,0,0,0,890,834,1,0,0,0,
	890,837,1,0,0,0,890,840,1,0,0,0,890,847,1,0,0,0,890,862,1,0,0,0,890,880,
	1,0,0,0,890,885,1,0,0,0,891,15,1,0,0,0,892,894,3,18,9,0,893,892,1,0,0,0,
	893,894,1,0,0,0,894,895,1,0,0,0,895,896,3,30,15,0,896,17,1,0,0,0,897,899,
	5,240,0,0,898,900,5,176,0,0,899,898,1,0,0,0,899,900,1,0,0,0,900,901,1,0,
	0,0,901,906,3,54,27,0,902,903,5,4,0,0,903,905,3,54,27,0,904,902,1,0,0,0,
	905,908,1,0,0,0,906,904,1,0,0,0,906,907,1,0,0,0,907,19,1,0,0,0,908,906,
	1,0,0,0,909,912,3,22,11,0,910,912,3,24,12,0,911,909,1,0,0,0,911,910,1,0,
	0,0,912,21,1,0,0,0,913,914,3,170,85,0,914,917,3,120,60,0,915,916,5,145,
	0,0,916,918,5,146,0,0,917,915,1,0,0,0,917,918,1,0,0,0,918,921,1,0,0,0,919,
	920,5,40,0,0,920,922,3,104,52,0,921,919,1,0,0,0,921,922,1,0,0,0,922,925,
	1,0,0,0,923,924,5,240,0,0,924,926,3,26,13,0,925,923,1,0,0,0,925,926,1,0,
	0,0,926,23,1,0,0,0,927,928,5,120,0,0,928,931,3,162,81,0,929,930,7,4,0,0,
	930,932,5,173,0,0,931,929,1,0,0,0,931,932,1,0,0,0,932,25,1,0,0,0,933,934,
	5,2,0,0,934,939,3,28,14,0,935,936,5,4,0,0,936,938,3,28,14,0,937,935,1,0,
	0,0,938,941,1,0,0,0,939,937,1,0,0,0,939,940,1,0,0,0,940,942,1,0,0,0,941,
	939,1,0,0,0,942,943,5,3,0,0,943,27,1,0,0,0,944,945,3,170,85,0,945,946,5,
	246,0,0,946,947,3,90,45,0,947,29,1,0,0,0,948,959,3,36,18,0,949,950,5,156,
	0,0,950,951,5,32,0,0,951,956,3,40,20,0,952,953,5,4,0,0,953,955,3,40,20,
	0,954,952,1,0,0,0,955,958,1,0,0,0,956,954,1,0,0,0,956,957,1,0,0,0,957,960,
	1,0,0,0,958,956,1,0,0,0,959,949,1,0,0,0,959,960,1,0,0,0,960,966,1,0,0,0,
	961,962,5,149,0,0,962,964,3,34,17,0,963,965,7,5,0,0,964,963,1,0,0,0,964,
	965,1,0,0,0,965,967,1,0,0,0,966,961,1,0,0,0,966,967,1,0,0,0,967,981,1,0,
	0,0,968,969,5,121,0,0,969,982,3,32,16,0,970,971,5,80,0,0,971,973,7,6,0,
	0,972,974,3,34,17,0,973,972,1,0,0,0,973,974,1,0,0,0,974,975,1,0,0,0,975,
	979,7,5,0,0,976,980,5,153,0,0,977,978,5,240,0,0,978,980,5,215,0,0,979,976,
	1,0,0,0,979,977,1,0,0,0,980,982,1,0,0,0,981,968,1,0,0,0,981,970,1,0,0,0,
	981,982,1,0,0,0,982,31,1,0,0,0,983,986,5,20,0,0,984,986,3,34,17,0,985,983,
	1,0,0,0,985,984,1,0,0,0,986,33,1,0,0,0,987,988,7,7,0,0,988,35,1,0,0,0,989,
	990,6,18,-1,0,990,991,3,38,19,0,991,1006,1,0,0,0,992,993,10,2,0,0,993,995,
	5,107,0,0,994,996,3,56,28,0,995,994,1,0,0,0,995,996,1,0,0,0,996,997,1,0,
	0,0,997,1005,3,36,18,3,998,999,10,1,0,0,999,1001,7,8,0,0,1000,1002,3,56,
	28,0,1001,1000,1,0,0,0,1001,1002,1,0,0,0,1002,1003,1,0,0,0,1003,1005,3,
	36,18,2,1004,992,1,0,0,0,1004,998,1,0,0,0,1005,1008,1,0,0,0,1006,1004,1,
	0,0,0,1006,1007,1,0,0,0,1007,37,1,0,0,0,1008,1006,1,0,0,0,1009,1026,3,42,
	21,0,1010,1011,5,210,0,0,1011,1026,3,162,81,0,1012,1013,5,234,0,0,1013,
	1018,3,90,45,0,1014,1015,5,4,0,0,1015,1017,3,90,45,0,1016,1014,1,0,0,0,
	1017,1020,1,0,0,0,1018,1016,1,0,0,0,1018,1019,1,0,0,0,1019,1026,1,0,0,0,
	1020,1018,1,0,0,0,1021,1022,5,2,0,0,1022,1023,3,30,15,0,1023,1024,5,3,0,
	0,1024,1026,1,0,0,0,1025,1009,1,0,0,0,1025,1010,1,0,0,0,1025,1012,1,0,0,
	0,1025,1021,1,0,0,0,1026,39,1,0,0,0,1027,1029,3,90,45,0,1028,1030,7,9,0,
	0,1029,1028,1,0,0,0,1029,1030,1,0,0,0,1030,1033,1,0,0,0,1031,1032,5,148,
	0,0,1032,1034,7,10,0,0,1033,1031,1,0,0,0,1033,1034,1,0,0,0,1034,41,1,0,
	0,0,1035,1037,5,198,0,0,1036,1038,3,56,28,0,1037,1036,1,0,0,0,1037,1038,
	1,0,0,0,1038,1039,1,0,0,0,1039,1044,3,58,29,0,1040,1041,5,4,0,0,1041,1043,
	3,58,29,0,1042,1040,1,0,0,0,1043,1046,1,0,0,0,1044,1042,1,0,0,0,1044,1045,
	1,0,0,0,1045,1056,1,0,0,0,1046,1044,1,0,0,0,1047,1048,5,87,0,0,1048,1053,
	3,60,30,0,1049,1050,5,4,0,0,1050,1052,3,60,30,0,1051,1049,1,0,0,0,1052,
	1055,1,0,0,0,1053,1051,1,0,0,0,1053,1054,1,0,0,0,1054,1057,1,0,0,0,1055,
	1053,1,0,0,0,1056,1047,1,0,0,0,1056,1057,1,0,0,0,1057,1060,1,0,0,0,1058,
	1059,5,238,0,0,1059,1061,3,92,46,0,1060,1058,1,0,0,0,1060,1061,1,0,0,0,
	1061,1065,1,0,0,0,1062,1063,5,94,0,0,1063,1064,5,32,0,0,1064,1066,3,44,
	22,0,1065,1062,1,0,0,0,1065,1066,1,0,0,0,1066,1069,1,0,0,0,1067,1068,5,
	97,0,0,1068,1070,3,92,46,0,1069,1067,1,0,0,0,1069,1070,1,0,0,0,1070,1080,
	1,0,0,0,1071,1072,5,239,0,0,1072,1077,3,50,25,0,1073,1074,5,4,0,0,1074,
	1076,3,50,25,0,1075,1073,1,0,0,0,1076,1079,1,0,0,0,1077,1075,1,0,0,0,1077,
	1078,1,0,0,0,1078,1081,1,0,0,0,1079,1077,1,0,0,0,1080,1071,1,0,0,0,1080,
	1081,1,0,0,0,1081,43,1,0,0,0,1082,1084,3,56,28,0,1083,1082,1,0,0,0,1083,
	1084,1,0,0,0,1084,1085,1,0,0,0,1085,1090,3,46,23,0,1086,1087,5,4,0,0,1087,
	1089,3,46,23,0,1088,1086,1,0,0,0,1089,1092,1,0,0,0,1090,1088,1,0,0,0,1090,
	1091,1,0,0,0,1091,45,1,0,0,0,1092,1090,1,0,0,0,1093,1134,3,48,24,0,1094,
	1095,5,189,0,0,1095,1104,5,2,0,0,1096,1101,3,90,45,0,1097,1098,5,4,0,0,
	1098,1100,3,90,45,0,1099,1097,1,0,0,0,1100,1103,1,0,0,0,1101,1099,1,0,0,
	0,1101,1102,1,0,0,0,1102,1105,1,0,0,0,1103,1101,1,0,0,0,1104,1096,1,0,0,
	0,1104,1105,1,0,0,0,1105,1106,1,0,0,0,1106,1134,5,3,0,0,1107,1108,5,46,
	0,0,1108,1117,5,2,0,0,1109,1114,3,90,45,0,1110,1111,5,4,0,0,1111,1113,3,
	90,45,0,1112,1110,1,0,0,0,1113,1116,1,0,0,0,1114,1112,1,0,0,0,1114,1115,
	1,0,0,0,1115,1118,1,0,0,0,1116,1114,1,0,0,0,1117,1109,1,0,0,0,1117,1118,
	1,0,0,0,1118,1119,1,0,0,0,1119,1134,5,3,0,0,1120,1121,5,95,0,0,1121,1122,
	5,202,0,0,1122,1123,5,2,0,0,1123,1128,3,48,24,0,1124,1125,5,4,0,0,1125,
	1127,3,48,24,0,1126,1124,1,0,0,0,1127,1130,1,0,0,0,1128,1126,1,0,0,0,1128,
	1129,1,0,0,0,1129,1131,1,0,0,0,1130,1128,1,0,0,0,1131,1132,5,3,0,0,1132,
	1134,1,0,0,0,1133,1093,1,0,0,0,1133,1094,1,0,0,0,1133,1107,1,0,0,0,1133,
	1120,1,0,0,0,1134,47,1,0,0,0,1135,1144,5,2,0,0,1136,1141,3,90,45,0,1137,
	1138,5,4,0,0,1138,1140,3,90,45,0,1139,1137,1,0,0,0,1140,1143,1,0,0,0,1141,
	1139,1,0,0,0,1141,1142,1,0,0,0,1142,1145,1,0,0,0,1143,1141,1,0,0,0,1144,
	1136,1,0,0,0,1144,1145,1,0,0,0,1145,1146,1,0,0,0,1146,1149,5,3,0,0,1147,
	1149,3,90,45,0,1148,1135,1,0,0,0,1148,1147,1,0,0,0,1149,49,1,0,0,0,1150,
	1151,3,170,85,0,1151,1152,5,26,0,0,1152,1153,5,2,0,0,1153,1154,3,52,26,
	0,1154,1155,5,3,0,0,1155,51,1,0,0,0,1156,1158,3,170,85,0,1157,1156,1,0,
	0,0,1157,1158,1,0,0,0,1158,1169,1,0,0,0,1159,1160,5,161,0,0,1160,1161,5,
	32,0,0,1161,1166,3,90,45,0,1162,1163,5,4,0,0,1163,1165,3,90,45,0,1164,1162,
	1,0,0,0,1165,1168,1,0,0,0,1166,1164,1,0,0,0,1166,1167,1,0,0,0,1167,1170,
	1,0,0,0,1168,1166,1,0,0,0,1169,1159,1,0,0,0,1169,1170,1,0,0,0,1170,1181,
	1,0,0,0,1171,1172,5,156,0,0,1172,1173,5,32,0,0,1173,1178,3,40,20,0,1174,
	1175,5,4,0,0,1175,1177,3,40,20,0,1176,1174,1,0,0,0,1177,1180,1,0,0,0,1178,
	1176,1,0,0,0,1178,1179,1,0,0,0,1179,1182,1,0,0,0,1180,1178,1,0,0,0,1181,
	1171,1,0,0,0,1181,1182,1,0,0,0,1182,1184,1,0,0,0,1183,1185,3,134,67,0,1184,
	1183,1,0,0,0,1184,1185,1,0,0,0,1185,53,1,0,0,0,1186,1188,3,170,85,0,1187,
	1189,3,86,43,0,1188,1187,1,0,0,0,1188,1189,1,0,0,0,1189,1190,1,0,0,0,1190,
	1191,5,26,0,0,1191,1192,5,2,0,0,1192,1193,3,16,8,0,1193,1194,5,3,0,0,1194,
	55,1,0,0,0,1195,1196,7,11,0,0,1196,57,1,0,0,0,1197,1202,3,90,45,0,1198,
	1200,5,26,0,0,1199,1198,1,0,0,0,1199,1200,1,0,0,0,1200,1201,1,0,0,0,1201,
	1203,3,170,85,0,1202,1199,1,0,0,0,1202,1203,1,0,0,0,1203,1213,1,0,0,0,1204,
	1205,3,98,49,0,1205,1206,5,1,0,0,1206,1209,5,254,0,0,1207,1208,5,26,0,0,
	1208,1210,3,86,43,0,1209,1207,1,0,0,0,1209,1210,1,0,0,0,1210,1213,1,0,0,
	0,1211,1213,5,254,0,0,1212,1197,1,0,0,0,1212,1204,1,0,0,0,1212,1211,1,0,
	0,0,1213,59,1,0,0,0,1214,1215,6,30,-1,0,1215,1216,3,66,33,0,1216,1235,1,
	0,0,0,1217,1231,10,2,0,0,1218,1219,5,45,0,0,1219,1220,5,114,0,0,1220,1232,
	3,66,33,0,1221,1222,3,62,31,0,1222,1223,5,114,0,0,1223,1224,3,60,30,0,1224,
	1225,3,64,32,0,1225,1232,1,0,0,0,1226,1227,5,136,0,0,1227,1228,3,62,31,
	0,1228,1229,5,114,0,0,1229,1230,3,66,33,0,1230,1232,1,0,0,0,1231,1218,1,
	0,0,0,1231,1221,1,0,0,0,1231,1226,1,0,0,0,1232,1234,1,0,0,0,1233,1217,1,
	0,0,0,1234,1237,1,0,0,0,1235,1233,1,0,0,0,1235,1236,1,0,0,0,1236,61,1,0,
	0,0,1237,1235,1,0,0,0,1238,1240,5,104,0,0,1239,1238,1,0,0,0,1239,1240,1,
	0,0,0,1240,1254,1,0,0,0,1241,1243,5,118,0,0,1242,1244,5,158,0,0,1243,1242,
	1,0,0,0,1243,1244,1,0,0,0,1244,1254,1,0,0,0,1245,1247,5,185,0,0,1246,1248,
	5,158,0,0,1247,1246,1,0,0,0,1247,1248,1,0,0,0,1248,1254,1,0,0,0,1249,1251,
	5,88,0,0,1250,1252,5,158,0,0,1251,1250,1,0,0,0,1251,1252,1,0,0,0,1252,1254,
	1,0,0,0,1253,1239,1,0,0,0,1253,1241,1,0,0,0,1253,1245,1,0,0,0,1253,1249,
	1,0,0,0,1254,63,1,0,0,0,1255,1256,5,151,0,0,1256,1270,3,92,46,0,1257,1258,
	5,232,0,0,1258,1259,5,2,0,0,1259,1264,3,170,85,0,1260,1261,5,4,0,0,1261,
	1263,3,170,85,0,1262,1260,1,0,0,0,1263,1266,1,0,0,0,1264,1262,1,0,0,0,1264,
	1265,1,0,0,0,1265,1267,1,0,0,0,1266,1264,1,0,0,0,1267,1268,5,3,0,0,1268,
	1270,1,0,0,0,1269,1255,1,0,0,0,1269,1257,1,0,0,0,1270,65,1,0,0,0,1271,1278,
	3,70,35,0,1272,1273,5,212,0,0,1273,1274,3,68,34,0,1274,1275,5,2,0,0,1275,
	1276,3,90,45,0,1276,1277,5,3,0,0,1277,1279,1,0,0,0,1278,1272,1,0,0,0,1278,
	1279,1,0,0,0,1279,67,1,0,0,0,1280,1281,7,12,0,0,1281,69,1,0,0,0,1282,1365,
	3,84,42,0,1283,1284,5,130,0,0,1284,1295,5,2,0,0,1285,1286,5,161,0,0,1286,
	1287,5,32,0,0,1287,1292,3,90,45,0,1288,1289,5,4,0,0,1289,1291,3,90,45,0,
	1290,1288,1,0,0,0,1291,1294,1,0,0,0,1292,1290,1,0,0,0,1292,1293,1,0,0,0,
	1293,1296,1,0,0,0,1294,1292,1,0,0,0,1295,1285,1,0,0,0,1295,1296,1,0,0,0,
	1296,1307,1,0,0,0,1297,1298,5,156,0,0,1298,1299,5,32,0,0,1299,1304,3,40,
	20,0,1300,1301,5,4,0,0,1301,1303,3,40,20,0,1302,1300,1,0,0,0,1303,1306,
	1,0,0,0,1304,1302,1,0,0,0,1304,1305,1,0,0,0,1305,1308,1,0,0,0,1306,1304,
	1,0,0,0,1307,1297,1,0,0,0,1307,1308,1,0,0,0,1308,1318,1,0,0,0,1309,1310,
	5,132,0,0,1310,1315,3,72,36,0,1311,1312,5,4,0,0,1312,1314,3,72,36,0,1313,
	1311,1,0,0,0,1314,1317,1,0,0,0,1315,1313,1,0,0,0,1315,1316,1,0,0,0,1316,
	1319,1,0,0,0,1317,1315,1,0,0,0,1318,1309,1,0,0,0,1318,1319,1,0,0,0,1319,
	1321,1,0,0,0,1320,1322,3,74,37,0,1321,1320,1,0,0,0,1321,1322,1,0,0,0,1322,
	1326,1,0,0,0,1323,1324,5,19,0,0,1324,1325,5,127,0,0,1325,1327,3,78,39,0,
	1326,1323,1,0,0,0,1326,1327,1,0,0,0,1327,1329,1,0,0,0,1328,1330,7,13,0,
	0,1329,1328,1,0,0,0,1329,1330,1,0,0,0,1330,1331,1,0,0,0,1331,1332,5,165,
	0,0,1332,1333,5,2,0,0,1333,1334,3,140,70,0,1334,1344,5,3,0,0,1335,1336,
	5,207,0,0,1336,1341,3,80,40,0,1337,1338,5,4,0,0,1338,1340,3,80,40,0,1339,
	1337,1,0,0,0,1340,1343,1,0,0,0,1341,1339,1,0,0,0,1341,1342,1,0,0,0,1342,
	1345,1,0,0,0,1343,1341,1,0,0,0,1344,1335,1,0,0,0,1344,1345,1,0,0,0,1345,
	1346,1,0,0,0,1346,1347,5,64,0,0,1347,1352,3,82,41,0,1348,1349,5,4,0,0,1349,
	1351,3,82,41,0,1350,1348,1,0,0,0,1351,1354,1,0,0,0,1352,1350,1,0,0,0,1352,
	1353,1,0,0,0,1353,1355,1,0,0,0,1354,1352,1,0,0,0,1355,1363,5,3,0,0,1356,
	1358,5,26,0,0,1357,1356,1,0,0,0,1357,1358,1,0,0,0,1358,1359,1,0,0,0,1359,
	1361,3,170,85,0,1360,1362,3,86,43,0,1361,1360,1,0,0,0,1361,1362,1,0,0,0,
	1362,1364,1,0,0,0,1363,1357,1,0,0,0,1363,1364,1,0,0,0,1364,1366,1,0,0,0,
	1365,1283,1,0,0,0,1365,1366,1,0,0,0,1366,71,1,0,0,0,1367,1368,3,90,45,0,
	1368,1369,5,26,0,0,1369,1370,3,170,85,0,1370,73,1,0,0,0,1371,1372,5,152,
	0,0,1372,1373,5,190,0,0,1373,1374,5,166,0,0,1374,1383,5,127,0,0,1375,1376,
	5,20,0,0,1376,1377,5,191,0,0,1377,1378,5,166,0,0,1378,1380,5,127,0,0,1379,
	1381,3,76,38,0,1380,1379,1,0,0,0,1380,1381,1,0,0,0,1381,1383,1,0,0,0,1382,
	1371,1,0,0,0,1382,1375,1,0,0,0,1383,75,1,0,0,0,1384,1385,5,203,0,0,1385,
	1386,5,70,0,0,1386,1394,5,129,0,0,1387,1388,5,150,0,0,1388,1389,5,70,0,
	0,1389,1394,5,129,0,0,1390,1391,5,240,0,0,1391,1392,5,227,0,0,1392,1394,
	5,191,0,0,1393,1384,1,0,0,0,1393,1387,1,0,0,0,1393,1390,1,0,0,0,1394,77,
	1,0,0,0,1395,1396,5,5,0,0,1396,1397,5,218,0,0,1397,1398,5,137,0,0,1398,
	1415,5,190,0,0,1399,1400,5,5,0,0,1400,1401,5,163,0,0,1401,1402,5,116,0,
	0,1402,1415,5,190,0,0,1403,1404,5,5,0,0,1404,1405,5,218,0,0,1405,1406,5,
	83,0,0,1406,1415,3,170,85,0,1407,1408,5,5,0,0,1408,1409,5,218,0,0,1409,
	1410,5,116,0,0,1410,1415,3,170,85,0,1411,1412,5,5,0,0,1412,1413,5,218,0,
	0,1413,1415,3,170,85,0,1414,1395,1,0,0,0,1414,1399,1,0,0,0,1414,1403,1,
	0,0,0,1414,1407,1,0,0,0,1414,1411,1,0,0,0,1415,79,1,0,0,0,1416,1417,3,170,
	85,0,1417,1418,5,246,0,0,1418,1419,5,2,0,0,1419,1424,3,170,85,0,1420,1421,
	5,4,0,0,1421,1423,3,170,85,0,1422,1420,1,0,0,0,1423,1426,1,0,0,0,1424,1422,
	1,0,0,0,1424,1425,1,0,0,0,1425,1427,1,0,0,0,1426,1424,1,0,0,0,1427,1428,
	5,3,0,0,1428,81,1,0,0,0,1429,1430,3,170,85,0,1430,1431,5,26,0,0,1431,1432,
	3,90,45,0,1432,83,1,0,0,0,1433,1441,3,88,44,0,1434,1436,5,26,0,0,1435,1434,
	1,0,0,0,1435,1436,1,0,0,0,1436,1437,1,0,0,0,1437,1439,3,170,85,0,1438,1440,
	3,86,43,0,1439,1438,1,0,0,0,1439,1440,1,0,0,0,1440,1442,1,0,0,0,1441,1435,
	1,0,0,0,1441,1442,1,0,0,0,1442,85,1,0,0,0,1443,1444,5,2,0,0,1444,1449,3,
	170,85,0,1445,1446,5,4,0,0,1446,1448,3,170,85,0,1447,1445,1,0,0,0,1448,
	1451,1,0,0,0,1449,1447,1,0,0,0,1449,1450,1,0,0,0,1450,1452,1,0,0,0,1451,
	1449,1,0,0,0,1452,1453,5,3,0,0,1453,87,1,0,0,0,1454,1484,3,162,81,0,1455,
	1456,5,2,0,0,1456,1457,3,16,8,0,1457,1458,5,3,0,0,1458,1484,1,0,0,0,1459,
	1460,5,228,0,0,1460,1461,5,2,0,0,1461,1466,3,90,45,0,1462,1463,5,4,0,0,
	1463,1465,3,90,45,0,1464,1462,1,0,0,0,1465,1468,1,0,0,0,1466,1464,1,0,0,
	0,1466,1467,1,0,0,0,1467,1469,1,0,0,0,1468,1466,1,0,0,0,1469,1472,5,3,0,
	0,1470,1471,5,240,0,0,1471,1473,5,157,0,0,1472,1470,1,0,0,0,1472,1473,1,
	0,0,0,1473,1484,1,0,0,0,1474,1475,5,117,0,0,1475,1476,5,2,0,0,1476,1477,
	3,16,8,0,1477,1478,5,3,0,0,1478,1484,1,0,0,0,1479,1480,5,2,0,0,1480,1481,
	3,60,30,0,1481,1482,5,3,0,0,1482,1484,1,0,0,0,1483,1454,1,0,0,0,1483,1455,
	1,0,0,0,1483,1459,1,0,0,0,1483,1474,1,0,0,0,1483,1479,1,0,0,0,1484,89,1,
	0,0,0,1485,1486,3,92,46,0,1486,91,1,0,0,0,1487,1488,6,46,-1,0,1488,1490,
	3,96,48,0,1489,1491,3,94,47,0,1490,1489,1,0,0,0,1490,1491,1,0,0,0,1491,
	1495,1,0,0,0,1492,1493,5,145,0,0,1493,1495,3,92,46,3,1494,1487,1,0,0,0,
	1494,1492,1,0,0,0,1495,1504,1,0,0,0,1496,1497,10,2,0,0,1497,1498,5,23,0,
	0,1498,1503,3,92,46,3,1499,1500,10,1,0,0,1500,1501,5,155,0,0,1501,1503,
	3,92,46,2,1502,1496,1,0,0,0,1502,1499,1,0,0,0,1503,1506,1,0,0,0,1504,1502,
	1,0,0,0,1504,1505,1,0,0,0,1505,93,1,0,0,0,1506,1504,1,0,0,0,1507,1508,3,
	108,54,0,1508,1509,3,96,48,0,1509,1569,1,0,0,0,1510,1511,3,108,54,0,1511,
	1512,3,110,55,0,1512,1513,5,2,0,0,1513,1514,3,16,8,0,1514,1515,5,3,0,0,
	1515,1569,1,0,0,0,1516,1518,5,145,0,0,1517,1516,1,0,0,0,1517,1518,1,0,0,
	0,1518,1519,1,0,0,0,1519,1520,5,31,0,0,1520,1521,3,96,48,0,1521,1522,5,
	23,0,0,1522,1523,3,96,48,0,1523,1569,1,0,0,0,1524,1526,5,145,0,0,1525,1524,
	1,0,0,0,1525,1526,1,0,0,0,1526,1527,1,0,0,0,1527,1528,5,101,0,0,1528,1529,
	5,2,0,0,1529,1534,3,90,45,0,1530,1531,5,4,0,0,1531,1533,3,90,45,0,1532,
	1530,1,0,0,0,1533,1536,1,0,0,0,1534,1532,1,0,0,0,1534,1535,1,0,0,0,1535,
	1537,1,0,0,0,1536,1534,1,0,0,0,1537,1538,5,3,0,0,1538,1569,1,0,0,0,1539,
	1541,5,145,0,0,1540,1539,1,0,0,0,1540,1541,1,0,0,0,1541,1542,1,0,0,0,1542,
	1543,5,101,0,0,1543,1544,5,2,0,0,1544,1545,3,16,8,0,1545,1546,5,3,0,0,1546,
	1569,1,0,0,0,1547,1549,5,145,0,0,1548,1547,1,0,0,0,1548,1549,1,0,0,0,1549,
	1550,1,0,0,0,1550,1551,5,120,0,0,1551,1554,3,96,48,0,1552,1553,5,72,0,0,
	1553,1555,3,96,48,0,1554,1552,1,0,0,0,1554,1555,1,0,0,0,1555,1569,1,0,0,
	0,1556,1558,5,112,0,0,1557,1559,5,145,0,0,1558,1557,1,0,0,0,1558,1559,1,
	0,0,0,1559,1560,1,0,0,0,1560,1569,5,146,0,0,1561,1563,5,112,0,0,1562,1564,
	5,145,0,0,1563,1562,1,0,0,0,1563,1564,1,0,0,0,1564,1565,1,0,0,0,1565,1566,
	5,65,0,0,1566,1567,5,87,0,0,1567,1569,3,96,48,0,1568,1507,1,0,0,0,1568,
	1510,1,0,0,0,1568,1517,1,0,0,0,1568,1525,1,0,0,0,1568,1540,1,0,0,0,1568,
	1548,1,0,0,0,1568,1556,1,0,0,0,1568,1561,1,0,0,0,1569,95,1,0,0,0,1570,1571,
	6,48,-1,0,1571,1575,3,98,49,0,1572,1573,7,14,0,0,1573,1575,3,96,48,4,1574,
	1570,1,0,0,0,1574,1572,1,0,0,0,1575,1590,1,0,0,0,1576,1577,10,3,0,0,1577,
	1578,7,15,0,0,1578,1589,3,96,48,4,1579,1580,10,2,0,0,1580,1581,7,14,0,0,
	1581,1589,3,96,48,3,1582,1583,10,1,0,0,1583,1584,5,257,0,0,1584,1589,3,
	96,48,2,1585,1586,10,5,0,0,1586,1587,5,28,0,0,1587,1589,3,106,53,0,1588,
	1576,1,0,0,0,1588,1579,1,0,0,0,1588,1582,1,0,0,0,1588,1585,1,0,0,0,1589,
	1592,1,0,0,0,1590,1588,1,0,0,0,1590,1591,1,0,0,0,1591,97,1,0,0,0,1592,1590,
	1,0,0,0,1593,1594,6,49,-1,0,1594,1843,5,146,0,0,1595,1843,3,114,57,0,1596,
	1597,3,170,85,0,1597,1598,3,104,52,0,1598,1843,1,0,0,0,1599,1600,5,67,0,
	0,1600,1601,5,170,0,0,1601,1843,3,104,52,0,1602,1843,3,172,86,0,1603,1843,
	3,112,56,0,1604,1843,3,104,52,0,1605,1843,5,261,0,0,1606,1843,5,258,0,0,
	1607,1608,5,168,0,0,1608,1609,5,2,0,0,1609,1610,3,96,48,0,1610,1611,5,101,
	0,0,1611,1612,3,96,48,0,1612,1613,5,3,0,0,1613,1843,1,0,0,0,1614,1615,5,
	2,0,0,1615,1618,3,90,45,0,1616,1617,5,4,0,0,1617,1619,3,90,45,0,1618,1616,
	1,0,0,0,1619,1620,1,0,0,0,1620,1618,1,0,0,0,1620,1621,1,0,0,0,1621,1622,
	1,0,0,0,1622,1623,5,3,0,0,1623,1843,1,0,0,0,1624,1625,5,190,0,0,1625,1626,
	5,2,0,0,1626,1631,3,90,45,0,1627,1628,5,4,0,0,1628,1630,3,90,45,0,1629,
	1627,1,0,0,0,1630,1633,1,0,0,0,1631,1629,1,0,0,0,1631,1632,1,0,0,0,1632,
	1634,1,0,0,0,1633,1631,1,0,0,0,1634,1635,5,3,0,0,1635,1843,1,0,0,0,1636,
	1637,3,162,81,0,1637,1638,5,2,0,0,1638,1639,5,254,0,0,1639,1641,5,3,0,0,
	1640,1642,3,128,64,0,1641,1640,1,0,0,0,1641,1642,1,0,0,0,1642,1644,1,0,
	0,0,1643,1645,3,132,66,0,1644,1643,1,0,0,0,1644,1645,1,0,0,0,1645,1843,
	1,0,0,0,1646,1648,3,100,50,0,1647,1646,1,0,0,0,1647,1648,1,0,0,0,1648,1649,
	1,0,0,0,1649,1650,3,162,81,0,1650,1662,5,2,0,0,1651,1653,3,56,28,0,1652,
	1651,1,0,0,0,1652,1653,1,0,0,0,1653,1654,1,0,0,0,1654,1659,3,90,45,0,1655,
	1656,5,4,0,0,1656,1658,3,90,45,0,1657,1655,1,0,0,0,1658,1661,1,0,0,0,1659,
	1657,1,0,0,0,1659,1660,1,0,0,0,1660,1663,1,0,0,0,1661,1659,1,0,0,0,1662,
	1652,1,0,0,0,1662,1663,1,0,0,0,1663,1674,1,0,0,0,1664,1665,5,156,0,0,1665,
	1666,5,32,0,0,1666,1671,3,40,20,0,1667,1668,5,4,0,0,1668,1670,3,40,20,0,
	1669,1667,1,0,0,0,1670,1673,1,0,0,0,1671,1669,1,0,0,0,1671,1672,1,0,0,0,
	1672,1675,1,0,0,0,1673,1671,1,0,0,0,1674,1664,1,0,0,0,1674,1675,1,0,0,0,
	1675,1676,1,0,0,0,1676,1678,5,3,0,0,1677,1679,3,128,64,0,1678,1677,1,0,
	0,0,1678,1679,1,0,0,0,1679,1684,1,0,0,0,1680,1682,3,102,51,0,1681,1680,
	1,0,0,0,1681,1682,1,0,0,0,1682,1683,1,0,0,0,1683,1685,3,132,66,0,1684,1681,
	1,0,0,0,1684,1685,1,0,0,0,1685,1843,1,0,0,0,1686,1687,3,170,85,0,1687,1688,
	3,132,66,0,1688,1843,1,0,0,0,1689,1690,3,170,85,0,1690,1691,5,6,0,0,1691,
	1692,3,90,45,0,1692,1843,1,0,0,0,1693,1702,5,2,0,0,1694,1699,3,170,85,0,
	1695,1696,5,4,0,0,1696,1698,3,170,85,0,1697,1695,1,0,0,0,1698,1701,1,0,
	0,0,1699,1697,1,0,0,0,1699,1700,1,0,0,0,1700,1703,1,0,0,0,1701,1699,1,0,
	0,0,1702,1694,1,0,0,0,1702,1703,1,0,0,0,1703,1704,1,0,0,0,1704,1705,5,3,
	0,0,1705,1706,5,6,0,0,1706,1843,3,90,45,0,1707,1708,5,2,0,0,1708,1709,3,
	16,8,0,1709,1710,5,3,0,0,1710,1843,1,0,0,0,1711,1712,5,76,0,0,1712,1713,
	5,2,0,0,1713,1714,3,16,8,0,1714,1715,5,3,0,0,1715,1843,1,0,0,0,1716,1717,
	5,35,0,0,1717,1719,3,90,45,0,1718,1720,3,126,63,0,1719,1718,1,0,0,0,1720,
	1721,1,0,0,0,1721,1719,1,0,0,0,1721,1722,1,0,0,0,1722,1725,1,0,0,0,1723,
	1724,5,69,0,0,1724,1726,3,90,45,0,1725,1723,1,0,0,0,1725,1726,1,0,0,0,1726,
	1727,1,0,0,0,1727,1728,5,71,0,0,1728,1843,1,0,0,0,1729,1731,5,35,0,0,1730,
	1732,3,126,63,0,1731,1730,1,0,0,0,1732,1733,1,0,0,0,1733,1731,1,0,0,0,1733,
	1734,1,0,0,0,1734,1737,1,0,0,0,1735,1736,5,69,0,0,1736,1738,3,90,45,0,1737,
	1735,1,0,0,0,1737,1738,1,0,0,0,1738,1739,1,0,0,0,1739,1740,5,71,0,0,1740,
	1843,1,0,0,0,1741,1742,5,36,0,0,1742,1743,5,2,0,0,1743,1744,3,90,45,0,1744,
	1745,5,26,0,0,1745,1746,3,120,60,0,1746,1747,5,3,0,0,1747,1843,1,0,0,0,
	1748,1749,5,221,0,0,1749,1750,5,2,0,0,1750,1751,3,90,45,0,1751,1752,5,26,
	0,0,1752,1753,3,120,60,0,1753,1754,5,3,0,0,1754,1843,1,0,0,0,1755,1756,
	5,25,0,0,1756,1765,5,7,0,0,1757,1762,3,90,45,0,1758,1759,5,4,0,0,1759,1761,
	3,90,45,0,1760,1758,1,0,0,0,1761,1764,1,0,0,0,1762,1760,1,0,0,0,1762,1763,
	1,0,0,0,1763,1766,1,0,0,0,1764,1762,1,0,0,0,1765,1757,1,0,0,0,1765,1766,
	1,0,0,0,1766,1767,1,0,0,0,1767,1843,5,8,0,0,1768,1843,3,170,85,0,1769,1843,
	5,49,0,0,1770,1774,5,53,0,0,1771,1772,5,2,0,0,1772,1773,5,262,0,0,1773,
	1775,5,3,0,0,1774,1771,1,0,0,0,1774,1775,1,0,0,0,1775,1843,1,0,0,0,1776,
	1780,5,54,0,0,1777,1778,5,2,0,0,1778,1779,5,262,0,0,1779,1781,5,3,0,0,1780,
	1777,1,0,0,0,1780,1781,1,0,0,0,1781,1843,1,0,0,0,1782,1786,5,123,0,0,1783,
	1784,5,2,0,0,1784,1785,5,262,0,0,1785,1787,5,3,0,0,1786,1783,1,0,0,0,1786,
	1787,1,0,0,0,1787,1843,1,0,0,0,1788,1792,5,124,0,0,1789,1790,5,2,0,0,1790,
	1791,5,262,0,0,1791,1793,5,3,0,0,1792,1789,1,0,0,0,1792,1793,1,0,0,0,1793,
	1843,1,0,0,0,1794,1843,5,55,0,0,1795,1843,5,48,0,0,1796,1843,5,52,0,0,1797,
	1843,5,50,0,0,1798,1799,5,208,0,0,1799,1800,5,2,0,0,1800,1801,3,96,48,0,
	1801,1802,5,87,0,0,1802,1805,3,96,48,0,1803,1804,5,85,0,0,1804,1806,3,96,
	48,0,1805,1803,1,0,0,0,1805,1806,1,0,0,0,1806,1807,1,0,0,0,1807,1808,5,
	3,0,0,1808,1843,1,0,0,0,1809,1810,5,144,0,0,1810,1811,5,2,0,0,1811,1814,
	3,96,48,0,1812,1813,5,4,0,0,1813,1815,3,118,59,0,1814,1812,1,0,0,0,1814,
	1815,1,0,0,0,1815,1816,1,0,0,0,1816,1817,5,3,0,0,1817,1843,1,0,0,0,1818,
	1819,5,78,0,0,1819,1820,5,2,0,0,1820,1821,3,170,85,0,1821,1822,5,87,0,0,
	1822,1823,3,96,48,0,1823,1824,5,3,0,0,1824,1843,1,0,0,0,1825,1826,5,2,0,
	0,1826,1827,3,90,45,0,1827,1828,5,3,0,0,1828,1843,1,0,0,0,1829,1830,5,95,
	0,0,1830,1839,5,2,0,0,1831,1836,3,162,81,0,1832,1833,5,4,0,0,1833,1835,
	3,162,81,0,1834,1832,1,0,0,0,1835,1838,1,0,0,0,1836,1834,1,0,0,0,1836,1837,
	1,0,0,0,1837,1840,1,0,0,0,1838,1836,1,0,0,0,1839,1831,1,0,0,0,1839,1840,
	1,0,0,0,1840,1841,1,0,0,0,1841,1843,5,3,0,0,1842,1593,1,0,0,0,1842,1595,
	1,0,0,0,1842,1596,1,0,0,0,1842,1599,1,0,0,0,1842,1602,1,0,0,0,1842,1603,
	1,0,0,0,1842,1604,1,0,0,0,1842,1605,1,0,0,0,1842,1606,1,0,0,0,1842,1607,
	1,0,0,0,1842,1614,1,0,0,0,1842,1624,1,0,0,0,1842,1636,1,0,0,0,1842,1647,
	1,0,0,0,1842,1686,1,0,0,0,1842,1689,1,0,0,0,1842,1693,1,0,0,0,1842,1707,
	1,0,0,0,1842,1711,1,0,0,0,1842,1716,1,0,0,0,1842,1729,1,0,0,0,1842,1741,
	1,0,0,0,1842,1748,1,0,0,0,1842,1755,1,0,0,0,1842,1768,1,0,0,0,1842,1769,
	1,0,0,0,1842,1770,1,0,0,0,1842,1776,1,0,0,0,1842,1782,1,0,0,0,1842,1788,
	1,0,0,0,1842,1794,1,0,0,0,1842,1795,1,0,0,0,1842,1796,1,0,0,0,1842,1797,
	1,0,0,0,1842,1798,1,0,0,0,1842,1809,1,0,0,0,1842,1818,1,0,0,0,1842,1825,
	1,0,0,0,1842,1829,1,0,0,0,1843,1854,1,0,0,0,1844,1845,10,17,0,0,1845,1846,
	5,7,0,0,1846,1847,3,96,48,0,1847,1848,5,8,0,0,1848,1853,1,0,0,0,1849,1850,
	10,15,0,0,1850,1851,5,1,0,0,1851,1853,3,170,85,0,1852,1844,1,0,0,0,1852,
	1849,1,0,0,0,1853,1856,1,0,0,0,1854,1852,1,0,0,0,1854,1855,1,0,0,0,1855,
	99,1,0,0,0,1856,1854,1,0,0,0,1857,1858,7,16,0,0,1858,101,1,0,0,0,1859,1860,
	5,100,0,0,1860,1864,5,148,0,0,1861,1862,5,182,0,0,1862,1864,5,148,0,0,1863,
	1859,1,0,0,0,1863,1861,1,0,0,0,1864,103,1,0,0,0,1865,1872,5,259,0,0,1866,
	1869,5,260,0,0,1867,1868,5,223,0,0,1868,1870,5,259,0,0,1869,1867,1,0,0,
	0,1869,1870,1,0,0,0,1870,1872,1,0,0,0,1871,1865,1,0,0,0,1871,1866,1,0,0,
	0,1872,105,1,0,0,0,1873,1874,5,216,0,0,1874,1875,5,245,0,0,1875,1880,3,
	114,57,0,1876,1877,5,216,0,0,1877,1878,5,245,0,0,1878,1880,3,104,52,0,1879,
	1873,1,0,0,0,1879,1876,1,0,0,0,1880,107,1,0,0,0,1881,1882,7,17,0,0,1882,
	109,1,0,0,0,1883,1884,7,18,0,0,1884,111,1,0,0,0,1885,1886,7,19,0,0,1886,
	113,1,0,0,0,1887,1889,5,108,0,0,1888,1890,7,14,0,0,1889,1888,1,0,0,0,1889,
	1890,1,0,0,0,1890,1891,1,0,0,0,1891,1892,3,104,52,0,1892,1895,3,116,58,
	0,1893,1894,5,218,0,0,1894,1896,3,116,58,0,1895,1893,1,0,0,0,1895,1896,
	1,0,0,0,1896,115,1,0,0,0,1897,1898,7,20,0,0,1898,117,1,0,0,0,1899,1900,
	7,21,0,0,1900,119,1,0,0,0,1901,1902,6,60,-1,0,1902,1903,5,190,0,0,1903,
	1904,5,2,0,0,1904,1909,3,122,61,0,1905,1906,5,4,0,0,1906,1908,3,122,61,
	0,1907,1905,1,0,0,0,1908,1911,1,0,0,0,1909,1907,1,0,0,0,1909,1910,1,0,0,
	0,1910,1912,1,0,0,0,1911,1909,1,0,0,0,1912,1913,5,3,0,0,1913,1993,1,0,0,
	0,1914,1915,5,108,0,0,1915,1918,3,116,58,0,1916,1917,5,218,0,0,1917,1919,
	3,116,58,0,1918,1916,1,0,0,0,1918,1919,1,0,0,0,1919,1993,1,0,0,0,1920,1925,
	5,217,0,0,1921,1922,5,2,0,0,1922,1923,3,124,62,0,1923,1924,5,3,0,0,1924,
	1926,1,0,0,0,1925,1921,1,0,0,0,1925,1926,1,0,0,0,1926,1930,1,0,0,0,1927,
	1928,5,241,0,0,1928,1929,5,216,0,0,1929,1931,5,245,0,0,1930,1927,1,0,0,
	0,1930,1931,1,0,0,0,1931,1993,1,0,0,0,1932,1937,5,217,0,0,1933,1934,5,2,
	0,0,1934,1935,3,124,62,0,1935,1936,5,3,0,0,1936,1938,1,0,0,0,1937,1933,
	1,0,0,0,1937,1938,1,0,0,0,1938,1939,1,0,0,0,1939,1940,5,240,0,0,1940,1941,
	5,216,0,0,1941,1993,5,245,0,0,1942,1947,5,216,0,0,1943,1944,5,2,0,0,1944,
	1945,3,124,62,0,1945,1946,5,3,0,0,1946,1948,1,0,0,0,1947,1943,1,0,0,0,1947,
	1948,1,0,0,0,1948,1952,1,0,0,0,1949,1950,5,241,0,0,1950,1951,5,216,0,0,
	1951,1953,5,245,0,0,1952,1949,1,0,0,0,1952,1953,1,0,0,0,1953,1993,1,0,0,
	0,1954,1959,5,216,0,0,1955,1956,5,2,0,0,1956,1957,3,124,62,0,1957,1958,
	5,3,0,0,1958,1960,1,0,0,0,1959,1955,1,0,0,0,1959,1960,1,0,0,0,1960,1961,
	1,0,0,0,1961,1962,5,240,0,0,1962,1963,5,216,0,0,1963,1993,5,245,0,0,1964,
	1965,5,67,0,0,1965,1993,5,170,0,0,1966,1967,5,25,0,0,1967,1968,5,248,0,
	0,1968,1969,3,120,60,0,1969,1970,5,250,0,0,1970,1993,1,0,0,0,1971,1972,
	5,126,0,0,1972,1973,5,248,0,0,1973,1974,3,120,60,0,1974,1975,5,4,0,0,1975,
	1976,3,120,60,0,1976,1977,5,250,0,0,1977,1993,1,0,0,0,1978,1990,3,170,85,
	0,1979,1980,5,2,0,0,1980,1985,3,124,62,0,1981,1982,5,4,0,0,1982,1984,3,
	124,62,0,1983,1981,1,0,0,0,1984,1987,1,0,0,0,1985,1983,1,0,0,0,1985,1986,
	1,0,0,0,1986,1988,1,0,0,0,1987,1985,1,0,0,0,1988,1989,5,3,0,0,1989,1991,
	1,0,0,0,1990,1979,1,0,0,0,1990,1991,1,0,0,0,1991,1993,1,0,0,0,1992,1901,
	1,0,0,0,1992,1914,1,0,0,0,1992,1920,1,0,0,0,1992,1932,1,0,0,0,1992,1942,
	1,0,0,0,1992,1954,1,0,0,0,1992,1964,1,0,0,0,1992,1966,1,0,0,0,1992,1971,
	1,0,0,0,1992,1978,1,0,0,0,1993,2003,1,0,0,0,1994,1995,10,2,0,0,1995,1999,
	5,25,0,0,1996,1997,5,7,0,0,1997,1998,5,262,0,0,1998,2000,5,8,0,0,1999,1996,
	1,0,0,0,1999,2000,1,0,0,0,2000,2002,1,0,0,0,2001,1994,1,0,0,0,2002,2005,
	1,0,0,0,2003,2001,1,0,0,0,2003,2004,1,0,0,0,2004,121,1,0,0,0,2005,2003,
	1,0,0,0,2006,2011,3,120,60,0,2007,2008,3,170,85,0,2008,2009,3,120,60,0,
	2009,2011,1,0,0,0,2010,2006,1,0,0,0,2010,2007,1,0,0,0,2011,123,1,0,0,0,
	2012,2015,5,262,0,0,2013,2015,3,120,60,0,2014,2012,1,0,0,0,2014,2013,1,
	0,0,0,2015,125,1,0,0,0,2016,2017,5,237,0,0,2017,2018,3,90,45,0,2018,2019,
	5,214,0,0,2019,2020,3,90,45,0,2020,127,1,0,0,0,2021,2022,5,81,0,0,2022,
	2023,5,2,0,0,2023,2024,5,238,0,0,2024,2025,3,92,46,0,2025,2026,5,3,0,0,
	2026,129,1,0,0,0,2027,2028,5,237,0,0,2028,2031,5,128,0,0,2029,2030,5,23,
	0,0,2030,2032,3,90,45,0,2031,2029,1,0,0,0,2031,2032,1,0,0,0,2032,2033,1,
	0,0,0,2033,2034,5,214,0,0,2034,2035,5,229,0,0,2035,2036,5,201,0,0,2036,
	2037,3,170,85,0,2037,2038,5,246,0,0,2038,2046,3,90,45,0,2039,2040,5,4,0,
	0,2040,2041,3,170,85,0,2041,2042,5,246,0,0,2042,2043,3,90,45,0,2043,2045,
	1,0,0,0,2044,2039,1,0,0,0,2045,2048,1,0,0,0,2046,2044,1,0,0,0,2046,2047,
	1,0,0,0,2047,2092,1,0,0,0,2048,2046,1,0,0,0,2049,2050,5,237,0,0,2050,2053,
	5,128,0,0,2051,2052,5,23,0,0,2052,2054,3,90,45,0,2053,2051,1,0,0,0,2053,
	2054,1,0,0,0,2054,2055,1,0,0,0,2055,2056,5,214,0,0,2056,2092,5,61,0,0,2057,
	2058,5,237,0,0,2058,2059,5,145,0,0,2059,2062,5,128,0,0,2060,2061,5,23,0,
	0,2061,2063,3,90,45,0,2062,2060,1,0,0,0,2062,2063,1,0,0,0,2063,2064,1,0,
	0,0,2064,2065,5,214,0,0,2065,2077,5,106,0,0,2066,2067,5,2,0,0,2067,2072,
	3,170,85,0,2068,2069,5,4,0,0,2069,2071,3,170,85,0,2070,2068,1,0,0,0,2071,
	2074,1,0,0,0,2072,2070,1,0,0,0,2072,2073,1,0,0,0,2073,2075,1,0,0,0,2074,
	2072,1,0,0,0,2075,2076,5,3,0,0,2076,2078,1,0,0,0,2077,2066,1,0,0,0,2077,
	2078,1,0,0,0,2078,2079,1,0,0,0,2079,2080,5,234,0,0,2080,2081,5,2,0,0,2081,
	2086,3,90,45,0,2082,2083,5,4,0,0,2083,2085,3,90,45,0,2084,2082,1,0,0,0,
	2085,2088,1,0,0,0,2086,2084,1,0,0,0,2086,2087,1,0,0,0,2087,2089,1,0,0,0,
	2088,2086,1,0,0,0,2089,2090,5,3,0,0,2090,2092,1,0,0,0,2091,2027,1,0,0,0,
	2091,2049,1,0,0,0,2091,2057,1,0,0,0,2092,131,1,0,0,0,2093,2099,5,160,0,
	0,2094,2100,3,170,85,0,2095,2096,5,2,0,0,2096,2097,3,52,26,0,2097,2098,
	5,3,0,0,2098,2100,1,0,0,0,2099,2094,1,0,0,0,2099,2095,1,0,0,0,2100,133,
	1,0,0,0,2101,2102,5,132,0,0,2102,2107,3,72,36,0,2103,2104,5,4,0,0,2104,
	2106,3,72,36,0,2105,2103,1,0,0,0,2106,2109,1,0,0,0,2107,2105,1,0,0,0,2107,
	2108,1,0,0,0,2108,2111,1,0,0,0,2109,2107,1,0,0,0,2110,2101,1,0,0,0,2110,
	2111,1,0,0,0,2111,2112,1,0,0,0,2112,2116,3,136,68,0,2113,2114,5,19,0,0,
	2114,2115,5,127,0,0,2115,2117,3,78,39,0,2116,2113,1,0,0,0,2116,2117,1,0,
	0,0,2117,2119,1,0,0,0,2118,2120,7,13,0,0,2119,2118,1,0,0,0,2119,2120,1,
	0,0,0,2120,2126,1,0,0,0,2121,2122,5,165,0,0,2122,2123,5,2,0,0,2123,2124,
	3,140,70,0,2124,2125,5,3,0,0,2125,2127,1,0,0,0,2126,2121,1,0,0,0,2126,2127,
	1,0,0,0,2127,2137,1,0,0,0,2128,2129,5,207,0,0,2129,2134,3,80,40,0,2130,
	2131,5,4,0,0,2131,2133,3,80,40,0,2132,2130,1,0,0,0,2133,2136,1,0,0,0,2134,
	2132,1,0,0,0,2134,2135,1,0,0,0,2135,2138,1,0,0,0,2136,2134,1,0,0,0,2137,
	2128,1,0,0,0,2137,2138,1,0,0,0,2138,2148,1,0,0,0,2139,2140,5,64,0,0,2140,
	2145,3,82,41,0,2141,2142,5,4,0,0,2142,2144,3,82,41,0,2143,2141,1,0,0,0,
	2144,2147,1,0,0,0,2145,2143,1,0,0,0,2145,2146,1,0,0,0,2146,2149,1,0,0,0,
	2147,2145,1,0,0,0,2148,2139,1,0,0,0,2148,2149,1,0,0,0,2149,135,1,0,0,0,
	2150,2151,5,174,0,0,2151,2175,3,138,69,0,2152,2153,5,191,0,0,2153,2175,
	3,138,69,0,2154,2155,5,96,0,0,2155,2175,3,138,69,0,2156,2157,5,174,0,0,
	2157,2158,5,31,0,0,2158,2159,3,138,69,0,2159,2160,5,23,0,0,2160,2161,3,
	138,69,0,2161,2175,1,0,0,0,2162,2163,5,191,0,0,2163,2164,5,31,0,0,2164,
	2165,3,138,69,0,2165,2166,5,23,0,0,2166,2167,3,138,69,0,2167,2175,1,0,0,
	0,2168,2169,5,96,0,0,2169,2170,5,31,0,0,2170,2171,3,138,69,0,2171,2172,
	5,23,0,0,2172,2173,3,138,69,0,2173,2175,1,0,0,0,2174,2150,1,0,0,0,2174,
	2152,1,0,0,0,2174,2154,1,0,0,0,2174,2156,1,0,0,0,2174,2162,1,0,0,0,2174,
	2168,1,0,0,0,2175,137,1,0,0,0,2176,2177,5,224,0,0,2177,2186,5,169,0,0,2178,
	2179,5,224,0,0,2179,2186,5,84,0,0,2180,2181,5,47,0,0,2181,2186,5,190,0,
	0,2182,2183,3,90,45,0,2183,2184,7,22,0,0,2184,2186,1,0,0,0,2185,2176,1,
	0,0,0,2185,2178,1,0,0,0,2185,2180,1,0,0,0,2185,2182,1,0,0,0,2186,139,1,
	0,0,0,2187,2188,6,70,-1,0,2188,2190,3,142,71,0,2189,2191,3,144,72,0,2190,
	2189,1,0,0,0,2190,2191,1,0,0,0,2191,2199,1,0,0,0,2192,2193,10,2,0,0,2193,
	2198,3,140,70,3,2194,2195,10,1,0,0,2195,2196,5,9,0,0,2196,2198,3,140,70,
	2,2197,2192,1,0,0,0,2197,2194,1,0,0,0,2198,2201,1,0,0,0,2199,2197,1,0,0,
	0,2199,2200,1,0,0,0,2200,141,1,0,0,0,2201,2199,1,0,0,0,2202,2228,3,170,
	85,0,2203,2204,5,2,0,0,2204,2228,5,3,0,0,2205,2206,5,167,0,0,2206,2207,
	5,2,0,0,2207,2212,3,140,70,0,2208,2209,5,4,0,0,2209,2211,3,140,70,0,2210,
	2208,1,0,0,0,2211,2214,1,0,0,0,2212,2210,1,0,0,0,2212,2213,1,0,0,0,2213,
	2215,1,0,0,0,2214,2212,1,0,0,0,2215,2216,5,3,0,0,2216,2228,1,0,0,0,2217,
	2218,5,2,0,0,2218,2219,3,140,70,0,2219,2220,5,3,0,0,2220,2228,1,0,0,0,2221,
	2228,5,10,0,0,2222,2228,5,11,0,0,2223,2224,5,12,0,0,2224,2225,3,140,70,
	0,2225,2226,5,13,0,0,2226,2228,1,0,0,0,2227,2202,1,0,0,0,2227,2203,1,0,
	0,0,2227,2205,1,0,0,0,2227,2217,1,0,0,0,2227,2221,1,0,0,0,2227,2222,1,0,
	0,0,2227,2223,1,0,0,0,2228,143,1,0,0,0,2229,2231,5,254,0,0,2230,2232,5,
	258,0,0,2231,2230,1,0,0,0,2231,2232,1,0,0,0,2232,2260,1,0,0,0,2233,2235,
	5,252,0,0,2234,2236,5,258,0,0,2235,2234,1,0,0,0,2235,2236,1,0,0,0,2236,
	2260,1,0,0,0,2237,2239,5,258,0,0,2238,2240,5,258,0,0,2239,2238,1,0,0,0,
	2239,2240,1,0,0,0,2240,2260,1,0,0,0,2241,2242,5,14,0,0,2242,2243,5,262,
	0,0,2243,2245,5,15,0,0,2244,2246,5,258,0,0,2245,2244,1,0,0,0,2245,2246,
	1,0,0,0,2246,2260,1,0,0,0,2247,2249,5,14,0,0,2248,2250,5,262,0,0,2249,2248,
	1,0,0,0,2249,2250,1,0,0,0,2250,2251,1,0,0,0,2251,2253,5,4,0,0,2252,2254,
	5,262,0,0,2253,2252,1,0,0,0,2253,2254,1,0,0,0,2254,2255,1,0,0,0,2255,2257,
	5,15,0,0,2256,2258,5,258,0,0,2257,2256,1,0,0,0,2257,2258,1,0,0,0,2258,2260,
	1,0,0,0,2259,2229,1,0,0,0,2259,2233,1,0,0,0,2259,2237,1,0,0,0,2259,2241,
	1,0,0,0,2259,2247,1,0,0,0,2260,145,1,0,0,0,2261,2262,3,170,85,0,2262,2263,
	5,246,0,0,2263,2264,3,90,45,0,2264,147,1,0,0,0,2265,2266,5,86,0,0,2266,
	2270,7,23,0,0,2267,2268,5,222,0,0,2268,2270,7,24,0,0,2269,2265,1,0,0,0,
	2269,2267,1,0,0,0,2270,149,1,0,0,0,2271,2272,5,113,0,0,2272,2273,5,119,
	0,0,2273,2277,3,152,76,0,2274,2275,5,175,0,0,2275,2277,7,25,0,0,2276,2271,
	1,0,0,0,2276,2274,1,0,0,0,2277,151,1,0,0,0,2278,2279,5,175,0,0,2279,2286,
	5,225,0,0,2280,2281,5,175,0,0,2281,2286,5,42,0,0,2282,2283,5,179,0,0,2283,
	2286,5,175,0,0,2284,2286,5,199,0,0,2285,2278,1,0,0,0,2285,2280,1,0,0,0,
	2285,2282,1,0,0,0,2285,2284,1,0,0,0,2286,153,1,0,0,0,2287,2293,3,90,45,
	0,2288,2289,3,170,85,0,2289,2290,5,16,0,0,2290,2291,3,90,45,0,2291,2293,
	1,0,0,0,2292,2287,1,0,0,0,2292,2288,1,0,0,0,2293,155,1,0,0,0,2294,2295,
	3,170,85,0,2295,2296,5,1,0,0,2296,2297,3,170,85,0,2297,2300,1,0,0,0,2298,
	2300,3,170,85,0,2299,2294,1,0,0,0,2299,2298,1,0,0,0,2300,157,1,0,0,0,2301,
	2306,3,156,78,0,2302,2303,5,4,0,0,2303,2305,3,156,78,0,2304,2302,1,0,0,
	0,2305,2308,1,0,0,0,2306,2304,1,0,0,0,2306,2307,1,0,0,0,2307,159,1,0,0,
	0,2308,2306,1,0,0,0,2309,2310,7,26,0,0,2310,161,1,0,0,0,2311,2316,3,170,
	85,0,2312,2313,5,1,0,0,2313,2315,3,170,85,0,2314,2312,1,0,0,0,2315,2318,
	1,0,0,0,2316,2314,1,0,0,0,2316,2317,1,0,0,0,2317,163,1,0,0,0,2318,2316,
	1,0,0,0,2319,2323,3,166,83,0,2320,2323,5,55,0,0,2321,2323,5,51,0,0,2322,
	2319,1,0,0,0,2322,2320,1,0,0,0,2322,2321,1,0,0,0,2323,165,1,0,0,0,2324,
	2330,3,170,85,0,2325,2326,5,231,0,0,2326,2330,3,170,85,0,2327,2328,5,186,
	0,0,2328,2330,3,170,85,0,2329,2324,1,0,0,0,2329,2325,1,0,0,0,2329,2327,
	1,0,0,0,2330,167,1,0,0,0,2331,2336,3,170,85,0,2332,2333,5,4,0,0,2333,2335,
	3,170,85,0,2334,2332,1,0,0,0,2335,2338,1,0,0,0,2336,2334,1,0,0,0,2336,2337,
	1,0,0,0,2337,169,1,0,0,0,2338,2336,1,0,0,0,2339,2345,5,265,0,0,2340,2345,
	5,267,0,0,2341,2345,3,174,87,0,2342,2345,5,268,0,0,2343,2345,5,266,0,0,
	2344,2339,1,0,0,0,2344,2340,1,0,0,0,2344,2341,1,0,0,0,2344,2342,1,0,0,0,
	2344,2343,1,0,0,0,2345,171,1,0,0,0,2346,2348,5,253,0,0,2347,2346,1,0,0,
	0,2347,2348,1,0,0,0,2348,2349,1,0,0,0,2349,2359,5,263,0,0,2350,2352,5,253,
	0,0,2351,2350,1,0,0,0,2351,2352,1,0,0,0,2352,2353,1,0,0,0,2353,2359,5,264,
	0,0,2354,2356,5,253,0,0,2355,2354,1,0,0,0,2355,2356,1,0,0,0,2356,2357,1,
	0,0,0,2357,2359,5,262,0,0,2358,2347,1,0,0,0,2358,2351,1,0,0,0,2358,2355,
	1,0,0,0,2359,173,1,0,0,0,2360,2361,7,27,0,0,2361,175,1,0,0,0,307,179,189,
	219,224,228,234,238,259,263,267,271,279,283,286,293,302,308,312,318,325,
	334,340,354,363,369,376,386,393,401,409,424,429,436,441,445,453,459,463,
	477,484,509,512,522,526,539,545,550,556,565,571,578,586,591,595,603,609,
	616,621,625,635,638,642,645,653,658,682,688,690,696,702,704,712,714,720,
	726,728,743,748,755,767,769,777,779,797,800,804,808,826,829,845,855,860,
	866,869,878,890,893,899,906,911,917,921,925,931,939,956,959,964,966,973,
	979,981,985,995,1001,1004,1006,1018,1025,1029,1033,1037,1044,1053,1056,
	1060,1065,1069,1077,1080,1083,1090,1101,1104,1114,1117,1128,1133,1141,1144,
	1148,1157,1166,1169,1178,1181,1184,1188,1199,1202,1209,1212,1231,1235,1239,
	1243,1247,1251,1253,1264,1269,1278,1292,1295,1304,1307,1315,1318,1321,1326,
	1329,1341,1344,1352,1357,1361,1363,1365,1380,1382,1393,1414,1424,1435,1439,
	1441,1449,1466,1472,1483,1490,1494,1502,1504,1517,1525,1534,1540,1548,1554,
	1558,1563,1568,1574,1588,1590,1620,1631,1641,1644,1647,1652,1659,1662,1671,
	1674,1678,1681,1684,1699,1702,1721,1725,1733,1737,1762,1765,1774,1780,1786,
	1792,1805,1814,1836,1839,1842,1852,1854,1863,1869,1871,1879,1889,1895,1909,
	1918,1925,1930,1937,1947,1952,1959,1985,1990,1992,1999,2003,2010,2014,2031,
	2046,2053,2062,2072,2077,2086,2091,2099,2107,2110,2116,2119,2126,2134,2137,
	2145,2148,2174,2185,2190,2197,2199,2212,2227,2231,2235,2239,2245,2249,2253,
	2257,2259,2269,2276,2285,2292,2299,2306,2316,2322,2329,2336,2344,2347,2351,
	2355,2358];

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
