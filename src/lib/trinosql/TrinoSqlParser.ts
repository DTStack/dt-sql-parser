// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/trinosql/TrinoSql.g4 by ANTLR 4.12.0
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
import TrinoSqlListener from "./TrinoSqlListener.js";
import TrinoSqlVisitor from "./TrinoSqlVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class TrinoSqlParser extends Parser {
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
	public static readonly DEFAULT = 59;
	public static readonly DEALLOCATE = 60;
	public static readonly DEFINER = 61;
	public static readonly DELETE = 62;
	public static readonly DESC = 63;
	public static readonly DESCRIBE = 64;
	public static readonly DEFINE = 65;
	public static readonly DISTINCT = 66;
	public static readonly DISTRIBUTED = 67;
	public static readonly DOUBLE = 68;
	public static readonly DROP = 69;
	public static readonly ELSE = 70;
	public static readonly EMPTY = 71;
	public static readonly END = 72;
	public static readonly ESCAPE = 73;
	public static readonly EXCEPT = 74;
	public static readonly EXCLUDING = 75;
	public static readonly EXECUTE = 76;
	public static readonly EXISTS = 77;
	public static readonly EXPLAIN = 78;
	public static readonly EXTRACT = 79;
	public static readonly FALSE = 80;
	public static readonly FETCH = 81;
	public static readonly FILTER = 82;
	public static readonly FINAL = 83;
	public static readonly FIRST = 84;
	public static readonly FOLLOWING = 85;
	public static readonly FOR = 86;
	public static readonly FORMAT = 87;
	public static readonly FROM = 88;
	public static readonly FULL = 89;
	public static readonly FUNCTIONS = 90;
	public static readonly GRANT = 91;
	public static readonly GRANTED = 92;
	public static readonly GRANTS = 93;
	public static readonly DENY = 94;
	public static readonly GRAPHVIZ = 95;
	public static readonly GROUP = 96;
	public static readonly GROUPING = 97;
	public static readonly GROUPS = 98;
	public static readonly HAVING = 99;
	public static readonly HOUR = 100;
	public static readonly IF = 101;
	public static readonly IGNORE = 102;
	public static readonly IN = 103;
	public static readonly INCLUDING = 104;
	public static readonly INITIAL = 105;
	public static readonly INNER = 106;
	public static readonly INPUT = 107;
	public static readonly INSERT = 108;
	public static readonly INTERSECT = 109;
	public static readonly INTERVAL = 110;
	public static readonly INTO = 111;
	public static readonly INVOKER = 112;
	public static readonly IO = 113;
	public static readonly IS = 114;
	public static readonly ISOLATION = 115;
	public static readonly JOIN = 116;
	public static readonly JSON = 117;
	public static readonly LAST = 118;
	public static readonly LATERAL = 119;
	public static readonly LEFT = 120;
	public static readonly LEVEL = 121;
	public static readonly LIKE = 122;
	public static readonly LIMIT = 123;
	public static readonly LOCAL = 124;
	public static readonly LOCALTIME = 125;
	public static readonly LOCALTIMESTAMP = 126;
	public static readonly LOGICAL = 127;
	public static readonly MAP = 128;
	public static readonly MATCH = 129;
	public static readonly MATCHED = 130;
	public static readonly MATCHES = 131;
	public static readonly MATCH_RECOGNIZE = 132;
	public static readonly MATERIALIZED = 133;
	public static readonly MEASURES = 134;
	public static readonly MERGE = 135;
	public static readonly MINUTE = 136;
	public static readonly MONTH = 137;
	public static readonly NATURAL = 138;
	public static readonly NEXT = 139;
	public static readonly NFC = 140;
	public static readonly NFD = 141;
	public static readonly NFKC = 142;
	public static readonly NFKD = 143;
	public static readonly NO = 144;
	public static readonly NONE = 145;
	public static readonly NORMALIZE = 146;
	public static readonly NOT = 147;
	public static readonly NULL = 148;
	public static readonly NULLIF = 149;
	public static readonly NULLS = 150;
	public static readonly OFFSET = 151;
	public static readonly OMIT = 152;
	public static readonly ON = 153;
	public static readonly ONE = 154;
	public static readonly ONLY = 155;
	public static readonly OPTION = 156;
	public static readonly OR = 157;
	public static readonly ORDER = 158;
	public static readonly ORDINALITY = 159;
	public static readonly OUTER = 160;
	public static readonly OUTPUT = 161;
	public static readonly OVER = 162;
	public static readonly PARTITION = 163;
	public static readonly PARTITIONS = 164;
	public static readonly PAST = 165;
	public static readonly PATH = 166;
	public static readonly PATTERN = 167;
	public static readonly PER = 168;
	public static readonly PERMUTE = 169;
	public static readonly POSITION = 170;
	public static readonly PRECEDING = 171;
	public static readonly PRECISION = 172;
	public static readonly PREPARE = 173;
	public static readonly PRIVILEGES = 174;
	public static readonly PROPERTIES = 175;
	public static readonly RANGE = 176;
	public static readonly READ = 177;
	public static readonly RECURSIVE = 178;
	public static readonly REFRESH = 179;
	public static readonly RENAME = 180;
	public static readonly REPEATABLE = 181;
	public static readonly REPLACE = 182;
	public static readonly RESET = 183;
	public static readonly RESPECT = 184;
	public static readonly RESTRICT = 185;
	public static readonly REVOKE = 186;
	public static readonly RIGHT = 187;
	public static readonly ROLE = 188;
	public static readonly ROLES = 189;
	public static readonly ROLLBACK = 190;
	public static readonly ROLLUP = 191;
	public static readonly ROW = 192;
	public static readonly ROWS = 193;
	public static readonly RUNNING = 194;
	public static readonly SCHEMA = 195;
	public static readonly SCHEMAS = 196;
	public static readonly SECOND = 197;
	public static readonly SECURITY = 198;
	public static readonly SEEK = 199;
	public static readonly SELECT = 200;
	public static readonly SERIALIZABLE = 201;
	public static readonly SESSION = 202;
	public static readonly SET = 203;
	public static readonly SETS = 204;
	public static readonly SHOW = 205;
	public static readonly SOME = 206;
	public static readonly START = 207;
	public static readonly STATS = 208;
	public static readonly SUBSET = 209;
	public static readonly SUBSTRING = 210;
	public static readonly SYSTEM = 211;
	public static readonly TABLE = 212;
	public static readonly TABLES = 213;
	public static readonly TABLESAMPLE = 214;
	public static readonly TEXT = 215;
	public static readonly THEN = 216;
	public static readonly TIES = 217;
	public static readonly TIME = 218;
	public static readonly TIMESTAMP = 219;
	public static readonly TO = 220;
	public static readonly TRANSACTION = 221;
	public static readonly TRUNCATE = 222;
	public static readonly TRUE = 223;
	public static readonly TRY_CAST = 224;
	public static readonly TYPE = 225;
	public static readonly UESCAPE = 226;
	public static readonly UNBOUNDED = 227;
	public static readonly UNCOMMITTED = 228;
	public static readonly UNION = 229;
	public static readonly UNMATCHED = 230;
	public static readonly UNNEST = 231;
	public static readonly UPDATE = 232;
	public static readonly USE = 233;
	public static readonly USER = 234;
	public static readonly USING = 235;
	public static readonly VALIDATE = 236;
	public static readonly VALUES = 237;
	public static readonly VERBOSE = 238;
	public static readonly VIEW = 239;
	public static readonly WHEN = 240;
	public static readonly WHERE = 241;
	public static readonly WINDOW = 242;
	public static readonly WITH = 243;
	public static readonly WITHOUT = 244;
	public static readonly WORK = 245;
	public static readonly WRITE = 246;
	public static readonly YEAR = 247;
	public static readonly ZONE = 248;
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
	public static readonly QUESTION_MARK = 261;
	public static readonly STRING = 262;
	public static readonly UNICODE_STRING = 263;
	public static readonly BINARY_LITERAL = 264;
	public static readonly INTEGER_VALUE = 265;
	public static readonly DECIMAL_VALUE = 266;
	public static readonly DOUBLE_VALUE = 267;
	public static readonly IDENTIFIER = 268;
	public static readonly DIGIT_IDENTIFIER = 269;
	public static readonly QUOTED_IDENTIFIER = 270;
	public static readonly BACKQUOTED_IDENTIFIER = 271;
	public static readonly SEMICOLON = 272;
	public static readonly SIMPLE_COMMENT = 273;
	public static readonly BRACKETED_COMMENT = 274;
	public static readonly WS = 275;
	public static readonly UNRECOGNIZED = 276;
	public static readonly DELIMITER = 277;
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
	public static readonly RULE_propertyAssignments = 14;
	public static readonly RULE_property = 15;
	public static readonly RULE_propertyValue = 16;
	public static readonly RULE_queryNoWith = 17;
	public static readonly RULE_limitRowCount = 18;
	public static readonly RULE_rowCount = 19;
	public static readonly RULE_queryTerm = 20;
	public static readonly RULE_queryPrimary = 21;
	public static readonly RULE_sortItem = 22;
	public static readonly RULE_querySpecification = 23;
	public static readonly RULE_groupBy = 24;
	public static readonly RULE_groupingElement = 25;
	public static readonly RULE_groupingSet = 26;
	public static readonly RULE_windowDefinition = 27;
	public static readonly RULE_windowSpecification = 28;
	public static readonly RULE_namedQuery = 29;
	public static readonly RULE_setQuantifier = 30;
	public static readonly RULE_selectItem = 31;
	public static readonly RULE_relation = 32;
	public static readonly RULE_joinType = 33;
	public static readonly RULE_joinCriteria = 34;
	public static readonly RULE_sampledRelation = 35;
	public static readonly RULE_sampleType = 36;
	public static readonly RULE_patternRecognition = 37;
	public static readonly RULE_measureDefinition = 38;
	public static readonly RULE_rowsPerMatch = 39;
	public static readonly RULE_emptyMatchHandling = 40;
	public static readonly RULE_skipTo = 41;
	public static readonly RULE_subsetDefinition = 42;
	public static readonly RULE_variableDefinition = 43;
	public static readonly RULE_aliasedRelation = 44;
	public static readonly RULE_columnAliases = 45;
	public static readonly RULE_relationPrimary = 46;
	public static readonly RULE_expression = 47;
	public static readonly RULE_booleanExpression = 48;
	public static readonly RULE_predicate = 49;
	public static readonly RULE_valueExpression = 50;
	public static readonly RULE_primaryExpression = 51;
	public static readonly RULE_processingMode = 52;
	public static readonly RULE_nullTreatment = 53;
	public static readonly RULE_string = 54;
	public static readonly RULE_timeZoneSpecifier = 55;
	public static readonly RULE_comparisonOperator = 56;
	public static readonly RULE_comparisonQuantifier = 57;
	public static readonly RULE_booleanValue = 58;
	public static readonly RULE_interval = 59;
	public static readonly RULE_intervalField = 60;
	public static readonly RULE_normalForm = 61;
	public static readonly RULE_type = 62;
	public static readonly RULE_rowField = 63;
	public static readonly RULE_typeParameter = 64;
	public static readonly RULE_whenClause = 65;
	public static readonly RULE_filter = 66;
	public static readonly RULE_mergeCase = 67;
	public static readonly RULE_over = 68;
	public static readonly RULE_windowFrame = 69;
	public static readonly RULE_frameExtent = 70;
	public static readonly RULE_frameBound = 71;
	public static readonly RULE_rowPattern = 72;
	public static readonly RULE_patternPrimary = 73;
	public static readonly RULE_patternQuantifier = 74;
	public static readonly RULE_updateAssignment = 75;
	public static readonly RULE_explainOption = 76;
	public static readonly RULE_transactionMode = 77;
	public static readonly RULE_levelOfIsolation = 78;
	public static readonly RULE_callArgument = 79;
	public static readonly RULE_pathElement = 80;
	public static readonly RULE_pathSpecification = 81;
	public static readonly RULE_privilege = 82;
	public static readonly RULE_qualifiedName = 83;
	public static readonly RULE_grantor = 84;
	public static readonly RULE_principal = 85;
	public static readonly RULE_roles = 86;
	public static readonly RULE_identifier = 87;
	public static readonly RULE_number = 88;
	public static readonly RULE_nonReserved = 89;
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
                                                            "'DAY'", "'DEFAULT'", 
                                                            "'DEALLOCATE'", 
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
                                                             "DAY", "DEFAULT", 
                                                             "DEALLOCATE", 
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
		"tableElement", "columnDefinition", "likeClause", "properties", "propertyAssignments", 
		"property", "propertyValue", "queryNoWith", "limitRowCount", "rowCount", 
		"queryTerm", "queryPrimary", "sortItem", "querySpecification", "groupBy", 
		"groupingElement", "groupingSet", "windowDefinition", "windowSpecification", 
		"namedQuery", "setQuantifier", "selectItem", "relation", "joinType", "joinCriteria", 
		"sampledRelation", "sampleType", "patternRecognition", "measureDefinition", 
		"rowsPerMatch", "emptyMatchHandling", "skipTo", "subsetDefinition", "variableDefinition", 
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
	public get grammarFileName(): string { return "TrinoSql.g4"; }
	public get literalNames(): (string | null)[] { return TrinoSqlParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return TrinoSqlParser.symbolicNames; }
	public get ruleNames(): string[] { return TrinoSqlParser.ruleNames; }
	public get serializedATN(): number[] { return TrinoSqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, TrinoSqlParser._ATN, TrinoSqlParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, TrinoSqlParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2071862276) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294691839) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2120219741) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4252347835) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 1325399551) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3153985535) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4286578687) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 3237903277) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2047) !== 0)) {
				{
				{
				this.state = 180;
				this.statements();
				}
				}
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 186;
			this.match(TrinoSqlParser.EOF);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 2, TrinoSqlParser.RULE_statements);
		try {
			this.state = 193;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 188;
				this.singleStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 189;
				this.standaloneExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 190;
				this.standalonePathSpecification();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 191;
				this.standaloneType();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 192;
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
		this.enterRule(localctx, 4, TrinoSqlParser.RULE_singleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 195;
			this.statement();
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===272) {
				{
				this.state = 196;
				this.match(TrinoSqlParser.SEMICOLON);
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
	public standaloneExpression(): StandaloneExpressionContext {
		let localctx: StandaloneExpressionContext = new StandaloneExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, TrinoSqlParser.RULE_standaloneExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 199;
			this.expression();
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===272) {
				{
				this.state = 200;
				this.match(TrinoSqlParser.SEMICOLON);
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
	public standalonePathSpecification(): StandalonePathSpecificationContext {
		let localctx: StandalonePathSpecificationContext = new StandalonePathSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, TrinoSqlParser.RULE_standalonePathSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 203;
			this.pathSpecification();
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===272) {
				{
				this.state = 204;
				this.match(TrinoSqlParser.SEMICOLON);
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
	public standaloneType(): StandaloneTypeContext {
		let localctx: StandaloneTypeContext = new StandaloneTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, TrinoSqlParser.RULE_standaloneType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 207;
			this.type_(0);
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===272) {
				{
				this.state = 208;
				this.match(TrinoSqlParser.SEMICOLON);
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
	public standaloneRowPattern(): StandaloneRowPatternContext {
		let localctx: StandaloneRowPatternContext = new StandaloneRowPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, TrinoSqlParser.RULE_standaloneRowPattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 211;
			this.rowPattern(0);
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===272) {
				{
				this.state = 212;
				this.match(TrinoSqlParser.SEMICOLON);
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
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, TrinoSqlParser.RULE_statement);
		let _la: number;
		try {
			this.state = 985;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				localctx = new StatementDefaultContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 215;
				this.query();
				}
				break;
			case 2:
				localctx = new UseContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 216;
				this.match(TrinoSqlParser.USE);
				this.state = 217;
				(localctx as UseContext)._schema = this.identifier();
				}
				break;
			case 3:
				localctx = new UseContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 218;
				this.match(TrinoSqlParser.USE);
				this.state = 219;
				(localctx as UseContext)._catalog = this.identifier();
				this.state = 220;
				this.match(TrinoSqlParser.T__0);
				this.state = 221;
				(localctx as UseContext)._schema = this.identifier();
				}
				break;
			case 4:
				localctx = new CreateSchemaContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 223;
				this.match(TrinoSqlParser.CREATE);
				this.state = 224;
				this.match(TrinoSqlParser.SCHEMA);
				this.state = 228;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 225;
					this.match(TrinoSqlParser.IF);
					this.state = 226;
					this.match(TrinoSqlParser.NOT);
					this.state = 227;
					this.match(TrinoSqlParser.EXISTS);
					}
					break;
				}
				this.state = 230;
				this.qualifiedName();
				this.state = 233;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 231;
					this.match(TrinoSqlParser.AUTHORIZATION);
					this.state = 232;
					this.principal();
					}
					break;
				}
				this.state = 237;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 235;
					this.match(TrinoSqlParser.WITH);
					this.state = 236;
					this.properties();
					}
					break;
				}
				}
				break;
			case 5:
				localctx = new DropSchemaContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 239;
				this.match(TrinoSqlParser.DROP);
				this.state = 240;
				this.match(TrinoSqlParser.SCHEMA);
				this.state = 243;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 241;
					this.match(TrinoSqlParser.IF);
					this.state = 242;
					this.match(TrinoSqlParser.EXISTS);
					}
					break;
				}
				this.state = 245;
				this.qualifiedName();
				this.state = 247;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 246;
					_la = this._input.LA(1);
					if(!(_la===34 || _la===185)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				}
				break;
			case 6:
				localctx = new RenameSchemaContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 249;
				this.match(TrinoSqlParser.ALTER);
				this.state = 250;
				this.match(TrinoSqlParser.SCHEMA);
				this.state = 251;
				this.qualifiedName();
				this.state = 252;
				this.match(TrinoSqlParser.RENAME);
				this.state = 253;
				this.match(TrinoSqlParser.TO);
				this.state = 254;
				this.identifier();
				}
				break;
			case 7:
				localctx = new SetSchemaAuthorizationContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 256;
				this.match(TrinoSqlParser.ALTER);
				this.state = 257;
				this.match(TrinoSqlParser.SCHEMA);
				this.state = 258;
				this.qualifiedName();
				this.state = 259;
				this.match(TrinoSqlParser.SET);
				this.state = 260;
				this.match(TrinoSqlParser.AUTHORIZATION);
				this.state = 261;
				this.principal();
				}
				break;
			case 8:
				localctx = new CreateTableAsSelectContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 263;
				this.match(TrinoSqlParser.CREATE);
				this.state = 264;
				this.match(TrinoSqlParser.TABLE);
				this.state = 268;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 265;
					this.match(TrinoSqlParser.IF);
					this.state = 266;
					this.match(TrinoSqlParser.NOT);
					this.state = 267;
					this.match(TrinoSqlParser.EXISTS);
					}
					break;
				}
				this.state = 270;
				this.qualifiedName();
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 271;
					this.columnAliases();
					}
				}

				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===40) {
					{
					this.state = 274;
					this.match(TrinoSqlParser.COMMENT);
					this.state = 275;
					this.string_();
					}
				}

				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===243) {
					{
					this.state = 278;
					this.match(TrinoSqlParser.WITH);
					this.state = 279;
					this.properties();
					}
				}

				this.state = 282;
				this.match(TrinoSqlParser.AS);
				this.state = 288;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 283;
					this.query();
					}
					break;
				case 2:
					{
					this.state = 284;
					this.match(TrinoSqlParser.T__1);
					this.state = 285;
					this.query();
					this.state = 286;
					this.match(TrinoSqlParser.T__2);
					}
					break;
				}
				this.state = 295;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 290;
					this.match(TrinoSqlParser.WITH);
					this.state = 292;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===144) {
						{
						this.state = 291;
						this.match(TrinoSqlParser.NO);
						}
					}

					this.state = 294;
					this.match(TrinoSqlParser.DATA);
					}
					break;
				}
				}
				break;
			case 9:
				localctx = new CreateTableContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 297;
				this.match(TrinoSqlParser.CREATE);
				this.state = 298;
				this.match(TrinoSqlParser.TABLE);
				this.state = 302;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 299;
					this.match(TrinoSqlParser.IF);
					this.state = 300;
					this.match(TrinoSqlParser.NOT);
					this.state = 301;
					this.match(TrinoSqlParser.EXISTS);
					}
					break;
				}
				this.state = 304;
				this.qualifiedName();
				this.state = 305;
				this.match(TrinoSqlParser.T__1);
				this.state = 306;
				this.tableElement();
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 307;
					this.match(TrinoSqlParser.T__3);
					this.state = 308;
					this.tableElement();
					}
					}
					this.state = 313;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 314;
				this.match(TrinoSqlParser.T__2);
				this.state = 317;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 315;
					this.match(TrinoSqlParser.COMMENT);
					this.state = 316;
					this.string_();
					}
					break;
				}
				this.state = 321;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 319;
					this.match(TrinoSqlParser.WITH);
					this.state = 320;
					this.properties();
					}
					break;
				}
				}
				break;
			case 10:
				localctx = new DropTableContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 323;
				this.match(TrinoSqlParser.DROP);
				this.state = 324;
				this.match(TrinoSqlParser.TABLE);
				this.state = 327;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 325;
					this.match(TrinoSqlParser.IF);
					this.state = 326;
					this.match(TrinoSqlParser.EXISTS);
					}
					break;
				}
				this.state = 329;
				this.qualifiedName();
				}
				break;
			case 11:
				localctx = new InsertIntoContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 330;
				this.match(TrinoSqlParser.INSERT);
				this.state = 331;
				this.match(TrinoSqlParser.INTO);
				this.state = 332;
				this.qualifiedName();
				this.state = 334;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 333;
					this.columnAliases();
					}
					break;
				}
				this.state = 336;
				this.query();
				}
				break;
			case 12:
				localctx = new DeleteContext(this, localctx);
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 338;
				this.match(TrinoSqlParser.DELETE);
				this.state = 339;
				this.match(TrinoSqlParser.FROM);
				this.state = 340;
				this.qualifiedName();
				this.state = 343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===241) {
					{
					this.state = 341;
					this.match(TrinoSqlParser.WHERE);
					this.state = 342;
					this.booleanExpression(0);
					}
				}

				}
				break;
			case 13:
				localctx = new TruncateTableContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 345;
				this.match(TrinoSqlParser.TRUNCATE);
				this.state = 346;
				this.match(TrinoSqlParser.TABLE);
				this.state = 347;
				this.qualifiedName();
				}
				break;
			case 14:
				localctx = new RenameTableContext(this, localctx);
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 348;
				this.match(TrinoSqlParser.ALTER);
				this.state = 349;
				this.match(TrinoSqlParser.TABLE);
				this.state = 352;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 350;
					this.match(TrinoSqlParser.IF);
					this.state = 351;
					this.match(TrinoSqlParser.EXISTS);
					}
					break;
				}
				this.state = 354;
				(localctx as RenameTableContext)._from_ = this.qualifiedName();
				this.state = 355;
				this.match(TrinoSqlParser.RENAME);
				this.state = 356;
				this.match(TrinoSqlParser.TO);
				this.state = 357;
				(localctx as RenameTableContext)._to = this.qualifiedName();
				}
				break;
			case 15:
				localctx = new CommentTableContext(this, localctx);
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 359;
				this.match(TrinoSqlParser.COMMENT);
				this.state = 360;
				this.match(TrinoSqlParser.ON);
				this.state = 361;
				this.match(TrinoSqlParser.TABLE);
				this.state = 362;
				this.qualifiedName();
				this.state = 363;
				this.match(TrinoSqlParser.IS);
				this.state = 366;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 262:
				case 263:
					{
					this.state = 364;
					this.string_();
					}
					break;
				case 148:
					{
					this.state = 365;
					this.match(TrinoSqlParser.NULL);
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
				this.state = 368;
				this.match(TrinoSqlParser.COMMENT);
				this.state = 369;
				this.match(TrinoSqlParser.ON);
				this.state = 370;
				this.match(TrinoSqlParser.COLUMN);
				this.state = 371;
				this.qualifiedName();
				this.state = 372;
				this.match(TrinoSqlParser.IS);
				this.state = 375;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 262:
				case 263:
					{
					this.state = 373;
					this.string_();
					}
					break;
				case 148:
					{
					this.state = 374;
					this.match(TrinoSqlParser.NULL);
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
				this.state = 377;
				this.match(TrinoSqlParser.ALTER);
				this.state = 378;
				this.match(TrinoSqlParser.TABLE);
				this.state = 381;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 379;
					this.match(TrinoSqlParser.IF);
					this.state = 380;
					this.match(TrinoSqlParser.EXISTS);
					}
					break;
				}
				this.state = 383;
				(localctx as RenameColumnContext)._tableName = this.qualifiedName();
				this.state = 384;
				this.match(TrinoSqlParser.RENAME);
				this.state = 385;
				this.match(TrinoSqlParser.COLUMN);
				this.state = 388;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 386;
					this.match(TrinoSqlParser.IF);
					this.state = 387;
					this.match(TrinoSqlParser.EXISTS);
					}
					break;
				}
				this.state = 390;
				(localctx as RenameColumnContext)._from_ = this.identifier();
				this.state = 391;
				this.match(TrinoSqlParser.TO);
				this.state = 392;
				(localctx as RenameColumnContext)._to = this.identifier();
				}
				break;
			case 18:
				localctx = new DropColumnContext(this, localctx);
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 394;
				this.match(TrinoSqlParser.ALTER);
				this.state = 395;
				this.match(TrinoSqlParser.TABLE);
				this.state = 398;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 396;
					this.match(TrinoSqlParser.IF);
					this.state = 397;
					this.match(TrinoSqlParser.EXISTS);
					}
					break;
				}
				this.state = 400;
				(localctx as DropColumnContext)._tableName = this.qualifiedName();
				this.state = 401;
				this.match(TrinoSqlParser.DROP);
				this.state = 402;
				this.match(TrinoSqlParser.COLUMN);
				this.state = 405;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 403;
					this.match(TrinoSqlParser.IF);
					this.state = 404;
					this.match(TrinoSqlParser.EXISTS);
					}
					break;
				}
				this.state = 407;
				(localctx as DropColumnContext)._column = this.qualifiedName();
				}
				break;
			case 19:
				localctx = new AddColumnContext(this, localctx);
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 409;
				this.match(TrinoSqlParser.ALTER);
				this.state = 410;
				this.match(TrinoSqlParser.TABLE);
				this.state = 413;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 411;
					this.match(TrinoSqlParser.IF);
					this.state = 412;
					this.match(TrinoSqlParser.EXISTS);
					}
					break;
				}
				this.state = 415;
				(localctx as AddColumnContext)._tableName = this.qualifiedName();
				this.state = 416;
				this.match(TrinoSqlParser.ADD);
				this.state = 417;
				this.match(TrinoSqlParser.COLUMN);
				this.state = 421;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					this.state = 418;
					this.match(TrinoSqlParser.IF);
					this.state = 419;
					this.match(TrinoSqlParser.NOT);
					this.state = 420;
					this.match(TrinoSqlParser.EXISTS);
					}
					break;
				}
				this.state = 423;
				(localctx as AddColumnContext)._column = this.columnDefinition();
				}
				break;
			case 20:
				localctx = new SetTableAuthorizationContext(this, localctx);
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 425;
				this.match(TrinoSqlParser.ALTER);
				this.state = 426;
				this.match(TrinoSqlParser.TABLE);
				this.state = 427;
				(localctx as SetTableAuthorizationContext)._tableName = this.qualifiedName();
				this.state = 428;
				this.match(TrinoSqlParser.SET);
				this.state = 429;
				this.match(TrinoSqlParser.AUTHORIZATION);
				this.state = 430;
				this.principal();
				}
				break;
			case 21:
				localctx = new SetTablePropertiesContext(this, localctx);
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 432;
				this.match(TrinoSqlParser.ALTER);
				this.state = 433;
				this.match(TrinoSqlParser.TABLE);
				this.state = 434;
				(localctx as SetTablePropertiesContext)._tableName = this.qualifiedName();
				this.state = 435;
				this.match(TrinoSqlParser.SET);
				this.state = 436;
				this.match(TrinoSqlParser.PROPERTIES);
				this.state = 437;
				this.propertyAssignments();
				}
				break;
			case 22:
				localctx = new TableExecuteContext(this, localctx);
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 439;
				this.match(TrinoSqlParser.ALTER);
				this.state = 440;
				this.match(TrinoSqlParser.TABLE);
				this.state = 441;
				(localctx as TableExecuteContext)._tableName = this.qualifiedName();
				this.state = 442;
				this.match(TrinoSqlParser.EXECUTE);
				this.state = 443;
				(localctx as TableExecuteContext)._procedureName = this.identifier();
				this.state = 456;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 444;
					this.match(TrinoSqlParser.T__1);
					this.state = 453;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1476117503) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2120217677) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4252345787) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 1325399551) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3153981439) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4286054271) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 3237637037) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2047) !== 0)) {
						{
						this.state = 445;
						this.callArgument();
						this.state = 450;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===4) {
							{
							{
							this.state = 446;
							this.match(TrinoSqlParser.T__3);
							this.state = 447;
							this.callArgument();
							}
							}
							this.state = 452;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
					}

					this.state = 455;
					this.match(TrinoSqlParser.T__2);
					}
					break;
				}
				this.state = 460;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===241) {
					{
					this.state = 458;
					this.match(TrinoSqlParser.WHERE);
					this.state = 459;
					(localctx as TableExecuteContext)._where = this.booleanExpression(0);
					}
				}

				}
				break;
			case 23:
				localctx = new AnalyzeContext(this, localctx);
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 462;
				this.match(TrinoSqlParser.ANALYZE);
				this.state = 463;
				this.qualifiedName();
				this.state = 466;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 464;
					this.match(TrinoSqlParser.WITH);
					this.state = 465;
					this.properties();
					}
					break;
				}
				}
				break;
			case 24:
				localctx = new CreateMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 24);
				{
				this.state = 468;
				this.match(TrinoSqlParser.CREATE);
				this.state = 471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===157) {
					{
					this.state = 469;
					this.match(TrinoSqlParser.OR);
					this.state = 470;
					this.match(TrinoSqlParser.REPLACE);
					}
				}

				this.state = 473;
				this.match(TrinoSqlParser.MATERIALIZED);
				this.state = 474;
				this.match(TrinoSqlParser.VIEW);
				this.state = 478;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 475;
					this.match(TrinoSqlParser.IF);
					this.state = 476;
					this.match(TrinoSqlParser.NOT);
					this.state = 477;
					this.match(TrinoSqlParser.EXISTS);
					}
					break;
				}
				this.state = 480;
				this.qualifiedName();
				this.state = 483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===40) {
					{
					this.state = 481;
					this.match(TrinoSqlParser.COMMENT);
					this.state = 482;
					this.string_();
					}
				}

				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===243) {
					{
					this.state = 485;
					this.match(TrinoSqlParser.WITH);
					this.state = 486;
					this.properties();
					}
				}

				this.state = 489;
				this.match(TrinoSqlParser.AS);
				this.state = 490;
				this.query();
				}
				break;
			case 25:
				localctx = new CreateViewContext(this, localctx);
				this.enterOuterAlt(localctx, 25);
				{
				this.state = 492;
				this.match(TrinoSqlParser.CREATE);
				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===157) {
					{
					this.state = 493;
					this.match(TrinoSqlParser.OR);
					this.state = 494;
					this.match(TrinoSqlParser.REPLACE);
					}
				}

				this.state = 497;
				this.match(TrinoSqlParser.VIEW);
				this.state = 498;
				this.qualifiedName();
				this.state = 501;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===40) {
					{
					this.state = 499;
					this.match(TrinoSqlParser.COMMENT);
					this.state = 500;
					this.string_();
					}
				}

				this.state = 505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===198) {
					{
					this.state = 503;
					this.match(TrinoSqlParser.SECURITY);
					this.state = 504;
					_la = this._input.LA(1);
					if(!(_la===61 || _la===112)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 507;
				this.match(TrinoSqlParser.AS);
				this.state = 508;
				this.query();
				}
				break;
			case 26:
				localctx = new RefreshMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 26);
				{
				this.state = 510;
				this.match(TrinoSqlParser.REFRESH);
				this.state = 511;
				this.match(TrinoSqlParser.MATERIALIZED);
				this.state = 512;
				this.match(TrinoSqlParser.VIEW);
				this.state = 513;
				this.qualifiedName();
				}
				break;
			case 27:
				localctx = new DropMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 27);
				{
				this.state = 514;
				this.match(TrinoSqlParser.DROP);
				this.state = 515;
				this.match(TrinoSqlParser.MATERIALIZED);
				this.state = 516;
				this.match(TrinoSqlParser.VIEW);
				this.state = 519;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 517;
					this.match(TrinoSqlParser.IF);
					this.state = 518;
					this.match(TrinoSqlParser.EXISTS);
					}
					break;
				}
				this.state = 521;
				this.qualifiedName();
				}
				break;
			case 28:
				localctx = new RenameMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 28);
				{
				this.state = 522;
				this.match(TrinoSqlParser.ALTER);
				this.state = 523;
				this.match(TrinoSqlParser.MATERIALIZED);
				this.state = 524;
				this.match(TrinoSqlParser.VIEW);
				this.state = 527;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 525;
					this.match(TrinoSqlParser.IF);
					this.state = 526;
					this.match(TrinoSqlParser.EXISTS);
					}
					break;
				}
				this.state = 529;
				(localctx as RenameMaterializedViewContext)._from_ = this.qualifiedName();
				this.state = 530;
				this.match(TrinoSqlParser.RENAME);
				this.state = 531;
				this.match(TrinoSqlParser.TO);
				this.state = 532;
				(localctx as RenameMaterializedViewContext)._to = this.qualifiedName();
				}
				break;
			case 29:
				localctx = new SetMaterializedViewPropertiesContext(this, localctx);
				this.enterOuterAlt(localctx, 29);
				{
				this.state = 534;
				this.match(TrinoSqlParser.ALTER);
				this.state = 535;
				this.match(TrinoSqlParser.MATERIALIZED);
				this.state = 536;
				this.match(TrinoSqlParser.VIEW);
				this.state = 537;
				this.qualifiedName();
				this.state = 538;
				this.match(TrinoSqlParser.SET);
				this.state = 539;
				this.match(TrinoSqlParser.PROPERTIES);
				this.state = 540;
				this.propertyAssignments();
				}
				break;
			case 30:
				localctx = new DropViewContext(this, localctx);
				this.enterOuterAlt(localctx, 30);
				{
				this.state = 542;
				this.match(TrinoSqlParser.DROP);
				this.state = 543;
				this.match(TrinoSqlParser.VIEW);
				this.state = 546;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 544;
					this.match(TrinoSqlParser.IF);
					this.state = 545;
					this.match(TrinoSqlParser.EXISTS);
					}
					break;
				}
				this.state = 548;
				this.qualifiedName();
				}
				break;
			case 31:
				localctx = new RenameViewContext(this, localctx);
				this.enterOuterAlt(localctx, 31);
				{
				this.state = 549;
				this.match(TrinoSqlParser.ALTER);
				this.state = 550;
				this.match(TrinoSqlParser.VIEW);
				this.state = 551;
				(localctx as RenameViewContext)._from_ = this.qualifiedName();
				this.state = 552;
				this.match(TrinoSqlParser.RENAME);
				this.state = 553;
				this.match(TrinoSqlParser.TO);
				this.state = 554;
				(localctx as RenameViewContext)._to = this.qualifiedName();
				}
				break;
			case 32:
				localctx = new SetViewAuthorizationContext(this, localctx);
				this.enterOuterAlt(localctx, 32);
				{
				this.state = 556;
				this.match(TrinoSqlParser.ALTER);
				this.state = 557;
				this.match(TrinoSqlParser.VIEW);
				this.state = 558;
				(localctx as SetViewAuthorizationContext)._from_ = this.qualifiedName();
				this.state = 559;
				this.match(TrinoSqlParser.SET);
				this.state = 560;
				this.match(TrinoSqlParser.AUTHORIZATION);
				this.state = 561;
				this.principal();
				}
				break;
			case 33:
				localctx = new CallContext(this, localctx);
				this.enterOuterAlt(localctx, 33);
				{
				this.state = 563;
				this.match(TrinoSqlParser.CALL);
				this.state = 564;
				this.qualifiedName();
				this.state = 565;
				this.match(TrinoSqlParser.T__1);
				this.state = 574;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1476117503) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2120217677) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4252345787) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 1325399551) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3153981439) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4286054271) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 3237637037) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2047) !== 0)) {
					{
					this.state = 566;
					this.callArgument();
					this.state = 571;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 567;
						this.match(TrinoSqlParser.T__3);
						this.state = 568;
						this.callArgument();
						}
						}
						this.state = 573;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 576;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 34:
				localctx = new CreateRoleContext(this, localctx);
				this.enterOuterAlt(localctx, 34);
				{
				this.state = 578;
				this.match(TrinoSqlParser.CREATE);
				this.state = 579;
				this.match(TrinoSqlParser.ROLE);
				this.state = 580;
				(localctx as CreateRoleContext)._name = this.identifier();
				this.state = 584;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 52, this._ctx) ) {
				case 1:
					{
					this.state = 581;
					this.match(TrinoSqlParser.WITH);
					this.state = 582;
					this.match(TrinoSqlParser.ADMIN);
					this.state = 583;
					this.grantor();
					}
					break;
				}
				this.state = 588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===103) {
					{
					this.state = 586;
					this.match(TrinoSqlParser.IN);
					this.state = 587;
					(localctx as CreateRoleContext)._catalog = this.identifier();
					}
				}

				}
				break;
			case 35:
				localctx = new DropRoleContext(this, localctx);
				this.enterOuterAlt(localctx, 35);
				{
				this.state = 590;
				this.match(TrinoSqlParser.DROP);
				this.state = 591;
				this.match(TrinoSqlParser.ROLE);
				this.state = 592;
				(localctx as DropRoleContext)._name = this.identifier();
				}
				break;
			case 36:
				localctx = new GrantRolesContext(this, localctx);
				this.enterOuterAlt(localctx, 36);
				{
				this.state = 593;
				this.match(TrinoSqlParser.GRANT);
				this.state = 594;
				this.roles();
				this.state = 595;
				this.match(TrinoSqlParser.TO);
				this.state = 596;
				this.principal();
				this.state = 601;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 597;
					this.match(TrinoSqlParser.T__3);
					this.state = 598;
					this.principal();
					}
					}
					this.state = 603;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 607;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 55, this._ctx) ) {
				case 1:
					{
					this.state = 604;
					this.match(TrinoSqlParser.WITH);
					this.state = 605;
					this.match(TrinoSqlParser.ADMIN);
					this.state = 606;
					this.match(TrinoSqlParser.OPTION);
					}
					break;
				}
				this.state = 612;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 56, this._ctx) ) {
				case 1:
					{
					this.state = 609;
					this.match(TrinoSqlParser.GRANTED);
					this.state = 610;
					this.match(TrinoSqlParser.BY);
					this.state = 611;
					this.grantor();
					}
					break;
				}
				this.state = 616;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===103) {
					{
					this.state = 614;
					this.match(TrinoSqlParser.IN);
					this.state = 615;
					(localctx as GrantRolesContext)._catalog = this.identifier();
					}
				}

				}
				break;
			case 37:
				localctx = new RevokeRolesContext(this, localctx);
				this.enterOuterAlt(localctx, 37);
				{
				this.state = 618;
				this.match(TrinoSqlParser.REVOKE);
				this.state = 622;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 619;
					this.match(TrinoSqlParser.ADMIN);
					this.state = 620;
					this.match(TrinoSqlParser.OPTION);
					this.state = 621;
					this.match(TrinoSqlParser.FOR);
					}
					break;
				}
				this.state = 624;
				this.roles();
				this.state = 625;
				this.match(TrinoSqlParser.FROM);
				this.state = 626;
				this.principal();
				this.state = 631;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 627;
					this.match(TrinoSqlParser.T__3);
					this.state = 628;
					this.principal();
					}
					}
					this.state = 633;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 637;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 60, this._ctx) ) {
				case 1:
					{
					this.state = 634;
					this.match(TrinoSqlParser.GRANTED);
					this.state = 635;
					this.match(TrinoSqlParser.BY);
					this.state = 636;
					this.grantor();
					}
					break;
				}
				this.state = 641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===103) {
					{
					this.state = 639;
					this.match(TrinoSqlParser.IN);
					this.state = 640;
					(localctx as RevokeRolesContext)._catalog = this.identifier();
					}
				}

				}
				break;
			case 38:
				localctx = new SetRoleContext(this, localctx);
				this.enterOuterAlt(localctx, 38);
				{
				this.state = 643;
				this.match(TrinoSqlParser.SET);
				this.state = 644;
				this.match(TrinoSqlParser.ROLE);
				this.state = 648;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
				case 1:
					{
					this.state = 645;
					this.match(TrinoSqlParser.ALL);
					}
					break;
				case 2:
					{
					this.state = 646;
					this.match(TrinoSqlParser.NONE);
					}
					break;
				case 3:
					{
					this.state = 647;
					(localctx as SetRoleContext)._role = this.identifier();
					}
					break;
				}
				this.state = 652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===103) {
					{
					this.state = 650;
					this.match(TrinoSqlParser.IN);
					this.state = 651;
					(localctx as SetRoleContext)._catalog = this.identifier();
					}
				}

				}
				break;
			case 39:
				localctx = new GrantContext(this, localctx);
				this.enterOuterAlt(localctx, 39);
				{
				this.state = 654;
				this.match(TrinoSqlParser.GRANT);
				this.state = 665;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 62:
				case 108:
				case 200:
				case 232:
					{
					this.state = 655;
					this.privilege();
					this.state = 660;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 656;
						this.match(TrinoSqlParser.T__3);
						this.state = 657;
						this.privilege();
						}
						}
						this.state = 662;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 20:
					{
					this.state = 663;
					this.match(TrinoSqlParser.ALL);
					this.state = 664;
					this.match(TrinoSqlParser.PRIVILEGES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 667;
				this.match(TrinoSqlParser.ON);
				this.state = 669;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
				case 1:
					{
					this.state = 668;
					_la = this._input.LA(1);
					if(!(_la===195 || _la===212)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 671;
				this.qualifiedName();
				this.state = 672;
				this.match(TrinoSqlParser.TO);
				this.state = 673;
				(localctx as GrantContext)._grantee = this.principal();
				this.state = 677;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 67, this._ctx) ) {
				case 1:
					{
					this.state = 674;
					this.match(TrinoSqlParser.WITH);
					this.state = 675;
					this.match(TrinoSqlParser.GRANT);
					this.state = 676;
					this.match(TrinoSqlParser.OPTION);
					}
					break;
				}
				}
				break;
			case 40:
				localctx = new DenyContext(this, localctx);
				this.enterOuterAlt(localctx, 40);
				{
				this.state = 679;
				this.match(TrinoSqlParser.DENY);
				this.state = 690;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 62:
				case 108:
				case 200:
				case 232:
					{
					this.state = 680;
					this.privilege();
					this.state = 685;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 681;
						this.match(TrinoSqlParser.T__3);
						this.state = 682;
						this.privilege();
						}
						}
						this.state = 687;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 20:
					{
					this.state = 688;
					this.match(TrinoSqlParser.ALL);
					this.state = 689;
					this.match(TrinoSqlParser.PRIVILEGES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 692;
				this.match(TrinoSqlParser.ON);
				this.state = 694;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
				case 1:
					{
					this.state = 693;
					_la = this._input.LA(1);
					if(!(_la===195 || _la===212)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 696;
				this.qualifiedName();
				this.state = 697;
				this.match(TrinoSqlParser.TO);
				this.state = 698;
				(localctx as DenyContext)._grantee = this.principal();
				}
				break;
			case 41:
				localctx = new RevokeContext(this, localctx);
				this.enterOuterAlt(localctx, 41);
				{
				this.state = 700;
				this.match(TrinoSqlParser.REVOKE);
				this.state = 704;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===91) {
					{
					this.state = 701;
					this.match(TrinoSqlParser.GRANT);
					this.state = 702;
					this.match(TrinoSqlParser.OPTION);
					this.state = 703;
					this.match(TrinoSqlParser.FOR);
					}
				}

				this.state = 716;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 62:
				case 108:
				case 200:
				case 232:
					{
					this.state = 706;
					this.privilege();
					this.state = 711;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 707;
						this.match(TrinoSqlParser.T__3);
						this.state = 708;
						this.privilege();
						}
						}
						this.state = 713;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 20:
					{
					this.state = 714;
					this.match(TrinoSqlParser.ALL);
					this.state = 715;
					this.match(TrinoSqlParser.PRIVILEGES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 718;
				this.match(TrinoSqlParser.ON);
				this.state = 720;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 719;
					_la = this._input.LA(1);
					if(!(_la===195 || _la===212)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 722;
				this.qualifiedName();
				this.state = 723;
				this.match(TrinoSqlParser.FROM);
				this.state = 724;
				(localctx as RevokeContext)._grantee = this.principal();
				}
				break;
			case 42:
				localctx = new ShowGrantsContext(this, localctx);
				this.enterOuterAlt(localctx, 42);
				{
				this.state = 726;
				this.match(TrinoSqlParser.SHOW);
				this.state = 727;
				this.match(TrinoSqlParser.GRANTS);
				this.state = 733;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===153) {
					{
					this.state = 728;
					this.match(TrinoSqlParser.ON);
					this.state = 730;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===212) {
						{
						this.state = 729;
						this.match(TrinoSqlParser.TABLE);
						}
					}

					this.state = 732;
					this.qualifiedName();
					}
				}

				}
				break;
			case 43:
				localctx = new ExplainContext(this, localctx);
				this.enterOuterAlt(localctx, 43);
				{
				this.state = 735;
				this.match(TrinoSqlParser.EXPLAIN);
				this.state = 737;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
				case 1:
					{
					this.state = 736;
					this.match(TrinoSqlParser.ANALYZE);
					}
					break;
				}
				this.state = 740;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===238) {
					{
					this.state = 739;
					this.match(TrinoSqlParser.VERBOSE);
					}
				}

				this.state = 753;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
				case 1:
					{
					this.state = 742;
					this.match(TrinoSqlParser.T__1);
					this.state = 743;
					this.explainOption();
					this.state = 748;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 744;
						this.match(TrinoSqlParser.T__3);
						this.state = 745;
						this.explainOption();
						}
						}
						this.state = 750;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 751;
					this.match(TrinoSqlParser.T__2);
					}
					break;
				}
				this.state = 755;
				this.statement();
				}
				break;
			case 44:
				localctx = new ShowCreateTableContext(this, localctx);
				this.enterOuterAlt(localctx, 44);
				{
				this.state = 756;
				this.match(TrinoSqlParser.SHOW);
				this.state = 757;
				this.match(TrinoSqlParser.CREATE);
				this.state = 758;
				this.match(TrinoSqlParser.TABLE);
				this.state = 759;
				this.qualifiedName();
				}
				break;
			case 45:
				localctx = new ShowCreateSchemaContext(this, localctx);
				this.enterOuterAlt(localctx, 45);
				{
				this.state = 760;
				this.match(TrinoSqlParser.SHOW);
				this.state = 761;
				this.match(TrinoSqlParser.CREATE);
				this.state = 762;
				this.match(TrinoSqlParser.SCHEMA);
				this.state = 763;
				this.qualifiedName();
				}
				break;
			case 46:
				localctx = new ShowCreateViewContext(this, localctx);
				this.enterOuterAlt(localctx, 46);
				{
				this.state = 764;
				this.match(TrinoSqlParser.SHOW);
				this.state = 765;
				this.match(TrinoSqlParser.CREATE);
				this.state = 766;
				this.match(TrinoSqlParser.VIEW);
				this.state = 767;
				this.qualifiedName();
				}
				break;
			case 47:
				localctx = new ShowCreateMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 47);
				{
				this.state = 768;
				this.match(TrinoSqlParser.SHOW);
				this.state = 769;
				this.match(TrinoSqlParser.CREATE);
				this.state = 770;
				this.match(TrinoSqlParser.MATERIALIZED);
				this.state = 771;
				this.match(TrinoSqlParser.VIEW);
				this.state = 772;
				this.qualifiedName();
				}
				break;
			case 48:
				localctx = new ShowTablesContext(this, localctx);
				this.enterOuterAlt(localctx, 48);
				{
				this.state = 773;
				this.match(TrinoSqlParser.SHOW);
				this.state = 774;
				this.match(TrinoSqlParser.TABLES);
				this.state = 777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===88 || _la===103) {
					{
					this.state = 775;
					_la = this._input.LA(1);
					if(!(_la===88 || _la===103)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 776;
					this.qualifiedName();
					}
				}

				this.state = 785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===122) {
					{
					this.state = 779;
					this.match(TrinoSqlParser.LIKE);
					this.state = 780;
					(localctx as ShowTablesContext)._pattern = this.string_();
					this.state = 783;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===73) {
						{
						this.state = 781;
						this.match(TrinoSqlParser.ESCAPE);
						this.state = 782;
						(localctx as ShowTablesContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 49:
				localctx = new ShowSchemasContext(this, localctx);
				this.enterOuterAlt(localctx, 49);
				{
				this.state = 787;
				this.match(TrinoSqlParser.SHOW);
				this.state = 788;
				this.match(TrinoSqlParser.SCHEMAS);
				this.state = 791;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===88 || _la===103) {
					{
					this.state = 789;
					_la = this._input.LA(1);
					if(!(_la===88 || _la===103)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 790;
					this.identifier();
					}
				}

				this.state = 799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===122) {
					{
					this.state = 793;
					this.match(TrinoSqlParser.LIKE);
					this.state = 794;
					(localctx as ShowSchemasContext)._pattern = this.string_();
					this.state = 797;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===73) {
						{
						this.state = 795;
						this.match(TrinoSqlParser.ESCAPE);
						this.state = 796;
						(localctx as ShowSchemasContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 50:
				localctx = new ShowCatalogsContext(this, localctx);
				this.enterOuterAlt(localctx, 50);
				{
				this.state = 801;
				this.match(TrinoSqlParser.SHOW);
				this.state = 802;
				this.match(TrinoSqlParser.CATALOGS);
				this.state = 809;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===122) {
					{
					this.state = 803;
					this.match(TrinoSqlParser.LIKE);
					this.state = 804;
					(localctx as ShowCatalogsContext)._pattern = this.string_();
					this.state = 807;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===73) {
						{
						this.state = 805;
						this.match(TrinoSqlParser.ESCAPE);
						this.state = 806;
						(localctx as ShowCatalogsContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 51:
				localctx = new ShowColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 51);
				{
				this.state = 811;
				this.match(TrinoSqlParser.SHOW);
				this.state = 812;
				this.match(TrinoSqlParser.COLUMNS);
				this.state = 813;
				_la = this._input.LA(1);
				if(!(_la===88 || _la===103)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 815;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 814;
					this.qualifiedName();
					}
					break;
				}
				this.state = 823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===122) {
					{
					this.state = 817;
					this.match(TrinoSqlParser.LIKE);
					this.state = 818;
					(localctx as ShowColumnsContext)._pattern = this.string_();
					this.state = 821;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===73) {
						{
						this.state = 819;
						this.match(TrinoSqlParser.ESCAPE);
						this.state = 820;
						(localctx as ShowColumnsContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 52:
				localctx = new ShowStatsContext(this, localctx);
				this.enterOuterAlt(localctx, 52);
				{
				this.state = 825;
				this.match(TrinoSqlParser.SHOW);
				this.state = 826;
				this.match(TrinoSqlParser.STATS);
				this.state = 827;
				this.match(TrinoSqlParser.FOR);
				this.state = 828;
				this.qualifiedName();
				}
				break;
			case 53:
				localctx = new ShowStatsForQueryContext(this, localctx);
				this.enterOuterAlt(localctx, 53);
				{
				this.state = 829;
				this.match(TrinoSqlParser.SHOW);
				this.state = 830;
				this.match(TrinoSqlParser.STATS);
				this.state = 831;
				this.match(TrinoSqlParser.FOR);
				this.state = 832;
				this.match(TrinoSqlParser.T__1);
				this.state = 833;
				this.query();
				this.state = 834;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 54:
				localctx = new ShowRolesContext(this, localctx);
				this.enterOuterAlt(localctx, 54);
				{
				this.state = 836;
				this.match(TrinoSqlParser.SHOW);
				this.state = 838;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===47) {
					{
					this.state = 837;
					this.match(TrinoSqlParser.CURRENT);
					}
				}

				this.state = 840;
				this.match(TrinoSqlParser.ROLES);
				this.state = 843;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===88 || _la===103) {
					{
					this.state = 841;
					_la = this._input.LA(1);
					if(!(_la===88 || _la===103)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 842;
					this.identifier();
					}
				}

				}
				break;
			case 55:
				localctx = new ShowRoleGrantsContext(this, localctx);
				this.enterOuterAlt(localctx, 55);
				{
				this.state = 845;
				this.match(TrinoSqlParser.SHOW);
				this.state = 846;
				this.match(TrinoSqlParser.ROLE);
				this.state = 847;
				this.match(TrinoSqlParser.GRANTS);
				this.state = 850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===88 || _la===103) {
					{
					this.state = 848;
					_la = this._input.LA(1);
					if(!(_la===88 || _la===103)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 849;
					this.identifier();
					}
				}

				}
				break;
			case 56:
				localctx = new ShowColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 56);
				{
				this.state = 852;
				this.match(TrinoSqlParser.DESCRIBE);
				this.state = 853;
				this.qualifiedName();
				}
				break;
			case 57:
				localctx = new ShowColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 57);
				{
				this.state = 854;
				this.match(TrinoSqlParser.DESC);
				this.state = 855;
				this.qualifiedName();
				}
				break;
			case 58:
				localctx = new ShowFunctionsContext(this, localctx);
				this.enterOuterAlt(localctx, 58);
				{
				this.state = 856;
				this.match(TrinoSqlParser.SHOW);
				this.state = 857;
				this.match(TrinoSqlParser.FUNCTIONS);
				this.state = 864;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===122) {
					{
					this.state = 858;
					this.match(TrinoSqlParser.LIKE);
					this.state = 859;
					(localctx as ShowFunctionsContext)._pattern = this.string_();
					this.state = 862;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===73) {
						{
						this.state = 860;
						this.match(TrinoSqlParser.ESCAPE);
						this.state = 861;
						(localctx as ShowFunctionsContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 59:
				localctx = new ShowSessionContext(this, localctx);
				this.enterOuterAlt(localctx, 59);
				{
				this.state = 866;
				this.match(TrinoSqlParser.SHOW);
				this.state = 867;
				this.match(TrinoSqlParser.SESSION);
				this.state = 874;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===122) {
					{
					this.state = 868;
					this.match(TrinoSqlParser.LIKE);
					this.state = 869;
					(localctx as ShowSessionContext)._pattern = this.string_();
					this.state = 872;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===73) {
						{
						this.state = 870;
						this.match(TrinoSqlParser.ESCAPE);
						this.state = 871;
						(localctx as ShowSessionContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 60:
				localctx = new SetSessionContext(this, localctx);
				this.enterOuterAlt(localctx, 60);
				{
				this.state = 876;
				this.match(TrinoSqlParser.SET);
				this.state = 877;
				this.match(TrinoSqlParser.SESSION);
				this.state = 878;
				this.qualifiedName();
				this.state = 879;
				this.match(TrinoSqlParser.EQ);
				this.state = 880;
				this.expression();
				}
				break;
			case 61:
				localctx = new ResetSessionContext(this, localctx);
				this.enterOuterAlt(localctx, 61);
				{
				this.state = 882;
				this.match(TrinoSqlParser.RESET);
				this.state = 883;
				this.match(TrinoSqlParser.SESSION);
				this.state = 884;
				this.qualifiedName();
				}
				break;
			case 62:
				localctx = new StartTransactionContext(this, localctx);
				this.enterOuterAlt(localctx, 62);
				{
				this.state = 885;
				this.match(TrinoSqlParser.START);
				this.state = 886;
				this.match(TrinoSqlParser.TRANSACTION);
				this.state = 895;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 100, this._ctx) ) {
				case 1:
					{
					this.state = 887;
					this.transactionMode();
					this.state = 892;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 888;
						this.match(TrinoSqlParser.T__3);
						this.state = 889;
						this.transactionMode();
						}
						}
						this.state = 894;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				}
				}
				break;
			case 63:
				localctx = new CommitContext(this, localctx);
				this.enterOuterAlt(localctx, 63);
				{
				this.state = 897;
				this.match(TrinoSqlParser.COMMIT);
				this.state = 899;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 898;
					this.match(TrinoSqlParser.WORK);
					}
					break;
				}
				}
				break;
			case 64:
				localctx = new RollbackContext(this, localctx);
				this.enterOuterAlt(localctx, 64);
				{
				this.state = 901;
				this.match(TrinoSqlParser.ROLLBACK);
				this.state = 903;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 902;
					this.match(TrinoSqlParser.WORK);
					}
					break;
				}
				}
				break;
			case 65:
				localctx = new PrepareContext(this, localctx);
				this.enterOuterAlt(localctx, 65);
				{
				this.state = 905;
				this.match(TrinoSqlParser.PREPARE);
				this.state = 906;
				this.identifier();
				this.state = 907;
				this.match(TrinoSqlParser.FROM);
				this.state = 908;
				this.statement();
				}
				break;
			case 66:
				localctx = new DeallocateContext(this, localctx);
				this.enterOuterAlt(localctx, 66);
				{
				this.state = 910;
				this.match(TrinoSqlParser.DEALLOCATE);
				this.state = 911;
				this.match(TrinoSqlParser.PREPARE);
				this.state = 912;
				this.identifier();
				}
				break;
			case 67:
				localctx = new ExecuteContext(this, localctx);
				this.enterOuterAlt(localctx, 67);
				{
				this.state = 913;
				this.match(TrinoSqlParser.EXECUTE);
				this.state = 914;
				this.identifier();
				this.state = 924;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===235) {
					{
					this.state = 915;
					this.match(TrinoSqlParser.USING);
					this.state = 916;
					this.expression();
					this.state = 921;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 917;
						this.match(TrinoSqlParser.T__3);
						this.state = 918;
						this.expression();
						}
						}
						this.state = 923;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;
			case 68:
				localctx = new DescribeInputContext(this, localctx);
				this.enterOuterAlt(localctx, 68);
				{
				this.state = 926;
				this.match(TrinoSqlParser.DESCRIBE);
				this.state = 927;
				this.match(TrinoSqlParser.INPUT);
				this.state = 928;
				this.identifier();
				}
				break;
			case 69:
				localctx = new DescribeOutputContext(this, localctx);
				this.enterOuterAlt(localctx, 69);
				{
				this.state = 929;
				this.match(TrinoSqlParser.DESCRIBE);
				this.state = 930;
				this.match(TrinoSqlParser.OUTPUT);
				this.state = 931;
				this.identifier();
				}
				break;
			case 70:
				localctx = new SetPathContext(this, localctx);
				this.enterOuterAlt(localctx, 70);
				{
				this.state = 932;
				this.match(TrinoSqlParser.SET);
				this.state = 933;
				this.match(TrinoSqlParser.PATH);
				this.state = 934;
				this.pathSpecification();
				}
				break;
			case 71:
				localctx = new SetTimeZoneContext(this, localctx);
				this.enterOuterAlt(localctx, 71);
				{
				this.state = 935;
				this.match(TrinoSqlParser.SET);
				this.state = 936;
				this.match(TrinoSqlParser.TIME);
				this.state = 937;
				this.match(TrinoSqlParser.ZONE);
				this.state = 940;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
				case 1:
					{
					this.state = 938;
					this.match(TrinoSqlParser.LOCAL);
					}
					break;
				case 2:
					{
					this.state = 939;
					this.expression();
					}
					break;
				}
				}
				break;
			case 72:
				localctx = new UpdateContext(this, localctx);
				this.enterOuterAlt(localctx, 72);
				{
				this.state = 942;
				this.match(TrinoSqlParser.UPDATE);
				this.state = 943;
				this.qualifiedName();
				this.state = 944;
				this.match(TrinoSqlParser.SET);
				this.state = 945;
				this.updateAssignment();
				this.state = 950;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 946;
					this.match(TrinoSqlParser.T__3);
					this.state = 947;
					this.updateAssignment();
					}
					}
					this.state = 952;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 955;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===241) {
					{
					this.state = 953;
					this.match(TrinoSqlParser.WHERE);
					this.state = 954;
					(localctx as UpdateContext)._where = this.booleanExpression(0);
					}
				}

				}
				break;
			case 73:
				localctx = new MergeContext(this, localctx);
				this.enterOuterAlt(localctx, 73);
				{
				this.state = 957;
				this.match(TrinoSqlParser.MERGE);
				this.state = 958;
				this.match(TrinoSqlParser.INTO);
				this.state = 959;
				this.qualifiedName();
				this.state = 964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140015023) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 3192429231) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 3134381375) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3162472435) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 4286316499) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 4009750519) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 525170103) !== 0) || ((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & 15) !== 0)) {
					{
					this.state = 961;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===26) {
						{
						this.state = 960;
						this.match(TrinoSqlParser.AS);
						}
					}

					this.state = 963;
					this.identifier();
					}
				}

				this.state = 966;
				this.match(TrinoSqlParser.USING);
				this.state = 967;
				this.relation(0);
				this.state = 968;
				this.match(TrinoSqlParser.ON);
				this.state = 969;
				this.expression();
				this.state = 971;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 970;
					this.mergeCase();
					}
					}
					this.state = 973;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===240);
				}
				break;
			case 74:
				localctx = new ShowTableCommentContext(this, localctx);
				this.enterOuterAlt(localctx, 74);
				{
				this.state = 975;
				this.match(TrinoSqlParser.SHOW);
				this.state = 976;
				this.match(TrinoSqlParser.COMMENT);
				this.state = 977;
				this.match(TrinoSqlParser.ON);
				this.state = 978;
				this.match(TrinoSqlParser.TABLE);
				this.state = 979;
				this.qualifiedName();
				}
				break;
			case 75:
				localctx = new ShowColumnCommentContext(this, localctx);
				this.enterOuterAlt(localctx, 75);
				{
				this.state = 980;
				this.match(TrinoSqlParser.SHOW);
				this.state = 981;
				this.match(TrinoSqlParser.COMMENT);
				this.state = 982;
				this.match(TrinoSqlParser.ON);
				this.state = 983;
				this.match(TrinoSqlParser.COLUMN);
				this.state = 984;
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
		this.enterRule(localctx, 16, TrinoSqlParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 988;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===243) {
				{
				this.state = 987;
				this.with_();
				}
			}

			this.state = 990;
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
		this.enterRule(localctx, 18, TrinoSqlParser.RULE_with);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 992;
			this.match(TrinoSqlParser.WITH);
			this.state = 994;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===178) {
				{
				this.state = 993;
				this.match(TrinoSqlParser.RECURSIVE);
				}
			}

			this.state = 996;
			this.namedQuery();
			this.state = 1001;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 997;
				this.match(TrinoSqlParser.T__3);
				this.state = 998;
				this.namedQuery();
				}
				}
				this.state = 1003;
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
		this.enterRule(localctx, 20, TrinoSqlParser.RULE_tableElement);
		try {
			this.state = 1006;
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
			case 59:
			case 61:
			case 63:
			case 65:
			case 67:
			case 68:
			case 71:
			case 75:
			case 78:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 87:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 98:
			case 100:
			case 101:
			case 102:
			case 104:
			case 105:
			case 107:
			case 110:
			case 112:
			case 113:
			case 115:
			case 117:
			case 118:
			case 119:
			case 121:
			case 123:
			case 124:
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
			case 137:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 149:
			case 150:
			case 151:
			case 152:
			case 154:
			case 155:
			case 156:
			case 159:
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
			case 172:
			case 174:
			case 175:
			case 176:
			case 177:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 188:
			case 189:
			case 190:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
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
			case 211:
			case 213:
			case 214:
			case 215:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 224:
			case 225:
			case 227:
			case 228:
			case 230:
			case 232:
			case 233:
			case 234:
			case 236:
			case 238:
			case 239:
			case 242:
			case 244:
			case 245:
			case 246:
			case 247:
			case 248:
			case 268:
			case 269:
			case 270:
			case 271:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1004;
				this.columnDefinition();
				}
				break;
			case 122:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1005;
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
		this.enterRule(localctx, 22, TrinoSqlParser.RULE_columnDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1008;
			this.identifier();
			this.state = 1009;
			this.type_(0);
			this.state = 1012;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				{
				this.state = 1010;
				this.match(TrinoSqlParser.NOT);
				this.state = 1011;
				this.match(TrinoSqlParser.NULL);
				}
				break;
			}
			this.state = 1016;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1014;
				this.match(TrinoSqlParser.COMMENT);
				this.state = 1015;
				this.string_();
				}
				break;
			}
			this.state = 1020;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				{
				this.state = 1018;
				this.match(TrinoSqlParser.WITH);
				this.state = 1019;
				this.properties();
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
	public likeClause(): LikeClauseContext {
		let localctx: LikeClauseContext = new LikeClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, TrinoSqlParser.RULE_likeClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1022;
			this.match(TrinoSqlParser.LIKE);
			this.state = 1023;
			this.qualifiedName();
			this.state = 1026;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75 || _la===104) {
				{
				this.state = 1024;
				localctx._optionType = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===75 || _la===104)) {
				    localctx._optionType = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1025;
				this.match(TrinoSqlParser.PROPERTIES);
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
		this.enterRule(localctx, 26, TrinoSqlParser.RULE_properties);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1028;
			this.match(TrinoSqlParser.T__1);
			this.state = 1029;
			this.propertyAssignments();
			this.state = 1030;
			this.match(TrinoSqlParser.T__2);
			}
		}
		catch (re) {
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
	public propertyAssignments(): PropertyAssignmentsContext {
		let localctx: PropertyAssignmentsContext = new PropertyAssignmentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, TrinoSqlParser.RULE_propertyAssignments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1032;
			this.property();
			this.state = 1037;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 1033;
				this.match(TrinoSqlParser.T__3);
				this.state = 1034;
				this.property();
				}
				}
				this.state = 1039;
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
	public property(): PropertyContext {
		let localctx: PropertyContext = new PropertyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, TrinoSqlParser.RULE_property);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1040;
			this.identifier();
			this.state = 1041;
			this.match(TrinoSqlParser.EQ);
			this.state = 1042;
			this.propertyValue();
			}
		}
		catch (re) {
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
	public propertyValue(): PropertyValueContext {
		let localctx: PropertyValueContext = new PropertyValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, TrinoSqlParser.RULE_propertyValue);
		try {
			this.state = 1046;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				localctx = new DefaultPropertyValueContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1044;
				this.match(TrinoSqlParser.DEFAULT);
				}
				break;
			case 2:
				localctx = new NonDefaultPropertyValueContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1045;
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
	public queryNoWith(): QueryNoWithContext {
		let localctx: QueryNoWithContext = new QueryNoWithContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, TrinoSqlParser.RULE_queryNoWith);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1048;
			this.queryTerm(0);
			this.state = 1059;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===158) {
				{
				this.state = 1049;
				this.match(TrinoSqlParser.ORDER);
				this.state = 1050;
				this.match(TrinoSqlParser.BY);
				this.state = 1051;
				this.sortItem();
				this.state = 1056;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1052;
					this.match(TrinoSqlParser.T__3);
					this.state = 1053;
					this.sortItem();
					}
					}
					this.state = 1058;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1066;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				{
				this.state = 1061;
				this.match(TrinoSqlParser.OFFSET);
				this.state = 1062;
				localctx._offset = this.rowCount();
				this.state = 1064;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 124, this._ctx) ) {
				case 1:
					{
					this.state = 1063;
					_la = this._input.LA(1);
					if(!(_la===192 || _la===193)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				}
				break;
			}
			this.state = 1081;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1068;
				this.match(TrinoSqlParser.LIMIT);
				this.state = 1069;
				localctx._limit = this.limitRowCount();
				}
				}
				break;
			case 2:
				{
				{
				this.state = 1070;
				this.match(TrinoSqlParser.FETCH);
				this.state = 1071;
				_la = this._input.LA(1);
				if(!(_la===84 || _la===139)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1073;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===261 || _la===265) {
					{
					this.state = 1072;
					localctx._fetchFirst = this.rowCount();
					}
				}

				this.state = 1075;
				_la = this._input.LA(1);
				if(!(_la===192 || _la===193)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1079;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 155:
					{
					this.state = 1076;
					this.match(TrinoSqlParser.ONLY);
					}
					break;
				case 243:
					{
					this.state = 1077;
					this.match(TrinoSqlParser.WITH);
					this.state = 1078;
					this.match(TrinoSqlParser.TIES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
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
	public limitRowCount(): LimitRowCountContext {
		let localctx: LimitRowCountContext = new LimitRowCountContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, TrinoSqlParser.RULE_limitRowCount);
		try {
			this.state = 1085;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1083;
				this.match(TrinoSqlParser.ALL);
				}
				break;
			case 261:
			case 265:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1084;
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
		this.enterRule(localctx, 38, TrinoSqlParser.RULE_rowCount);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1087;
			_la = this._input.LA(1);
			if(!(_la===261 || _la===265)) {
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
		let _startState: number = 40;
		this.enterRecursionRule(localctx, 40, TrinoSqlParser.RULE_queryTerm, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new QueryTermDefaultContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 1090;
			this.queryPrimary();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1106;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 133, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1104;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 132, this._ctx) ) {
					case 1:
						{
						localctx = new SetOperationContext(this, new QueryTermContext(this, _parentctx, _parentState));
						(localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, TrinoSqlParser.RULE_queryTerm);
						this.state = 1092;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1093;
						(localctx as SetOperationContext)._operator = this.match(TrinoSqlParser.INTERSECT);
						this.state = 1095;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===20 || _la===66) {
							{
							this.state = 1094;
							this.setQuantifier();
							}
						}

						this.state = 1097;
						(localctx as SetOperationContext)._right = this.queryTerm(3);
						}
						break;
					case 2:
						{
						localctx = new SetOperationContext(this, new QueryTermContext(this, _parentctx, _parentState));
						(localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, TrinoSqlParser.RULE_queryTerm);
						this.state = 1098;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1099;
						(localctx as SetOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===74 || _la===229)) {
						    (localctx as SetOperationContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1101;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===20 || _la===66) {
							{
							this.state = 1100;
							this.setQuantifier();
							}
						}

						this.state = 1103;
						(localctx as SetOperationContext)._right = this.queryTerm(2);
						}
						break;
					}
					}
				}
				this.state = 1108;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 133, this._ctx);
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
		this.enterRule(localctx, 42, TrinoSqlParser.RULE_queryPrimary);
		try {
			let _alt: number;
			this.state = 1125;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 200:
				localctx = new QueryPrimaryDefaultContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1109;
				this.querySpecification();
				}
				break;
			case 212:
				localctx = new TableContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1110;
				this.match(TrinoSqlParser.TABLE);
				this.state = 1111;
				this.qualifiedName();
				}
				break;
			case 237:
				localctx = new InlineTableContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1112;
				this.match(TrinoSqlParser.VALUES);
				this.state = 1113;
				this.expression();
				this.state = 1118;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 134, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1114;
						this.match(TrinoSqlParser.T__3);
						this.state = 1115;
						this.expression();
						}
						}
					}
					this.state = 1120;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 134, this._ctx);
				}
				}
				break;
			case 2:
				localctx = new SubqueryContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1121;
				this.match(TrinoSqlParser.T__1);
				this.state = 1122;
				this.queryNoWith();
				this.state = 1123;
				this.match(TrinoSqlParser.T__2);
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
		this.enterRule(localctx, 44, TrinoSqlParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1127;
			this.expression();
			this.state = 1129;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				{
				this.state = 1128;
				localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===27 || _la===63)) {
				    localctx._ordering = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this.state = 1133;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				{
				this.state = 1131;
				this.match(TrinoSqlParser.NULLS);
				this.state = 1132;
				localctx._nullOrdering = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===84 || _la===118)) {
				    localctx._nullOrdering = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
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
	public querySpecification(): QuerySpecificationContext {
		let localctx: QuerySpecificationContext = new QuerySpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, TrinoSqlParser.RULE_querySpecification);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1135;
			this.match(TrinoSqlParser.SELECT);
			this.state = 1137;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				{
				this.state = 1136;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1139;
			this.selectItem();
			this.state = 1144;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 139, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1140;
					this.match(TrinoSqlParser.T__3);
					this.state = 1141;
					this.selectItem();
					}
					}
				}
				this.state = 1146;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 139, this._ctx);
			}
			this.state = 1156;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 1147;
				this.match(TrinoSqlParser.FROM);
				this.state = 1148;
				this.relation(0);
				this.state = 1153;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 140, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1149;
						this.match(TrinoSqlParser.T__3);
						this.state = 1150;
						this.relation(0);
						}
						}
					}
					this.state = 1155;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 140, this._ctx);
				}
				}
				break;
			}
			this.state = 1160;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 1158;
				this.match(TrinoSqlParser.WHERE);
				this.state = 1159;
				localctx._where = this.booleanExpression(0);
				}
				break;
			}
			this.state = 1165;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				{
				this.state = 1162;
				this.match(TrinoSqlParser.GROUP);
				this.state = 1163;
				this.match(TrinoSqlParser.BY);
				this.state = 1164;
				this.groupBy();
				}
				break;
			}
			this.state = 1169;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				{
				this.state = 1167;
				this.match(TrinoSqlParser.HAVING);
				this.state = 1168;
				localctx._having = this.booleanExpression(0);
				}
				break;
			}
			this.state = 1180;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1171;
				this.match(TrinoSqlParser.WINDOW);
				this.state = 1172;
				this.windowDefinition();
				this.state = 1177;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 145, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1173;
						this.match(TrinoSqlParser.T__3);
						this.state = 1174;
						this.windowDefinition();
						}
						}
					}
					this.state = 1179;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 145, this._ctx);
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
		this.enterRule(localctx, 48, TrinoSqlParser.RULE_groupBy);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1183;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				{
				this.state = 1182;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1185;
			this.groupingElement();
			this.state = 1190;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 148, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1186;
					this.match(TrinoSqlParser.T__3);
					this.state = 1187;
					this.groupingElement();
					}
					}
				}
				this.state = 1192;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 148, this._ctx);
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
		this.enterRule(localctx, 50, TrinoSqlParser.RULE_groupingElement);
		let _la: number;
		try {
			this.state = 1233;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				localctx = new SingleGroupingSetContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1193;
				this.groupingSet();
				}
				break;
			case 2:
				localctx = new RollupContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1194;
				this.match(TrinoSqlParser.ROLLUP);
				this.state = 1195;
				this.match(TrinoSqlParser.T__1);
				this.state = 1204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1476117503) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2120217677) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4252345787) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 1325399551) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3153981439) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4286054271) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 3237637037) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2047) !== 0)) {
					{
					this.state = 1196;
					this.expression();
					this.state = 1201;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1197;
						this.match(TrinoSqlParser.T__3);
						this.state = 1198;
						this.expression();
						}
						}
						this.state = 1203;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1206;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 3:
				localctx = new CubeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1207;
				this.match(TrinoSqlParser.CUBE);
				this.state = 1208;
				this.match(TrinoSqlParser.T__1);
				this.state = 1217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1476117503) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2120217677) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4252345787) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 1325399551) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3153981439) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4286054271) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 3237637037) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2047) !== 0)) {
					{
					this.state = 1209;
					this.expression();
					this.state = 1214;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1210;
						this.match(TrinoSqlParser.T__3);
						this.state = 1211;
						this.expression();
						}
						}
						this.state = 1216;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1219;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 4:
				localctx = new MultipleGroupingSetsContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1220;
				this.match(TrinoSqlParser.GROUPING);
				this.state = 1221;
				this.match(TrinoSqlParser.SETS);
				this.state = 1222;
				this.match(TrinoSqlParser.T__1);
				this.state = 1223;
				this.groupingSet();
				this.state = 1228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1224;
					this.match(TrinoSqlParser.T__3);
					this.state = 1225;
					this.groupingSet();
					}
					}
					this.state = 1230;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1231;
				this.match(TrinoSqlParser.T__2);
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
		this.enterRule(localctx, 52, TrinoSqlParser.RULE_groupingSet);
		let _la: number;
		try {
			this.state = 1248;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1235;
				this.match(TrinoSqlParser.T__1);
				this.state = 1244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1476117503) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2120217677) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4252345787) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 1325399551) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3153981439) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4286054271) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 3237637037) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2047) !== 0)) {
					{
					this.state = 1236;
					this.expression();
					this.state = 1241;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1237;
						this.match(TrinoSqlParser.T__3);
						this.state = 1238;
						this.expression();
						}
						}
						this.state = 1243;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1246;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1247;
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
		this.enterRule(localctx, 54, TrinoSqlParser.RULE_windowDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1250;
			localctx._name = this.identifier();
			this.state = 1251;
			this.match(TrinoSqlParser.AS);
			this.state = 1252;
			this.match(TrinoSqlParser.T__1);
			this.state = 1253;
			this.windowSpecification();
			this.state = 1254;
			this.match(TrinoSqlParser.T__2);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 56, TrinoSqlParser.RULE_windowSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1257;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				{
				this.state = 1256;
				localctx._existingWindowName = this.identifier();
				}
				break;
			}
			this.state = 1269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===163) {
				{
				this.state = 1259;
				this.match(TrinoSqlParser.PARTITION);
				this.state = 1260;
				this.match(TrinoSqlParser.BY);
				this.state = 1261;
				localctx._expression = this.expression();
				localctx._partition.push(localctx._expression);
				this.state = 1266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1262;
					this.match(TrinoSqlParser.T__3);
					this.state = 1263;
					localctx._expression = this.expression();
					localctx._partition.push(localctx._expression);
					}
					}
					this.state = 1268;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===158) {
				{
				this.state = 1271;
				this.match(TrinoSqlParser.ORDER);
				this.state = 1272;
				this.match(TrinoSqlParser.BY);
				this.state = 1273;
				this.sortItem();
				this.state = 1278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1274;
					this.match(TrinoSqlParser.T__3);
					this.state = 1275;
					this.sortItem();
					}
					}
					this.state = 1280;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===98 || _la===134 || _la===176 || _la===193) {
				{
				this.state = 1283;
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
		this.enterRule(localctx, 58, TrinoSqlParser.RULE_namedQuery);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1286;
			localctx._name = this.identifier();
			this.state = 1288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 1287;
				this.columnAliases();
				}
			}

			this.state = 1290;
			this.match(TrinoSqlParser.AS);
			this.state = 1291;
			this.match(TrinoSqlParser.T__1);
			this.state = 1292;
			this.query();
			this.state = 1293;
			this.match(TrinoSqlParser.T__2);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 60, TrinoSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1295;
			_la = this._input.LA(1);
			if(!(_la===20 || _la===66)) {
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
		this.enterRule(localctx, 62, TrinoSqlParser.RULE_selectItem);
		let _la: number;
		try {
			this.state = 1312;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				localctx = new SelectSingleContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1297;
				this.expression();
				this.state = 1302;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 166, this._ctx) ) {
				case 1:
					{
					this.state = 1299;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===26) {
						{
						this.state = 1298;
						this.match(TrinoSqlParser.AS);
						}
					}

					this.state = 1301;
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
				this.state = 1304;
				this.primaryExpression(0);
				this.state = 1305;
				this.match(TrinoSqlParser.T__0);
				this.state = 1306;
				this.match(TrinoSqlParser.ASTERISK);
				this.state = 1309;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 167, this._ctx) ) {
				case 1:
					{
					this.state = 1307;
					this.match(TrinoSqlParser.AS);
					this.state = 1308;
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
				this.state = 1311;
				this.match(TrinoSqlParser.ASTERISK);
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
		let _startState: number = 64;
		this.enterRecursionRule(localctx, 64, TrinoSqlParser.RULE_relation, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new RelationDefaultContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 1315;
			this.sampledRelation();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1335;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 170, this._ctx);
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
					this.pushNewRecursionContext(localctx, _startState, TrinoSqlParser.RULE_relation);
					this.state = 1317;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1331;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 45:
						{
						this.state = 1318;
						this.match(TrinoSqlParser.CROSS);
						this.state = 1319;
						this.match(TrinoSqlParser.JOIN);
						this.state = 1320;
						(localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					case 89:
					case 106:
					case 116:
					case 120:
					case 187:
						{
						this.state = 1321;
						this.joinType();
						this.state = 1322;
						this.match(TrinoSqlParser.JOIN);
						this.state = 1323;
						(localctx as JoinRelationContext)._rightRelation = this.relation(0);
						this.state = 1324;
						this.joinCriteria();
						}
						break;
					case 138:
						{
						this.state = 1326;
						this.match(TrinoSqlParser.NATURAL);
						this.state = 1327;
						this.joinType();
						this.state = 1328;
						this.match(TrinoSqlParser.JOIN);
						this.state = 1329;
						(localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 1337;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 170, this._ctx);
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
		this.enterRule(localctx, 66, TrinoSqlParser.RULE_joinType);
		let _la: number;
		try {
			this.state = 1353;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 106:
			case 116:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===106) {
					{
					this.state = 1338;
					this.match(TrinoSqlParser.INNER);
					}
				}

				}
				break;
			case 120:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1341;
				this.match(TrinoSqlParser.LEFT);
				this.state = 1343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===160) {
					{
					this.state = 1342;
					this.match(TrinoSqlParser.OUTER);
					}
				}

				}
				break;
			case 187:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1345;
				this.match(TrinoSqlParser.RIGHT);
				this.state = 1347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===160) {
					{
					this.state = 1346;
					this.match(TrinoSqlParser.OUTER);
					}
				}

				}
				break;
			case 89:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1349;
				this.match(TrinoSqlParser.FULL);
				this.state = 1351;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===160) {
					{
					this.state = 1350;
					this.match(TrinoSqlParser.OUTER);
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
		this.enterRule(localctx, 68, TrinoSqlParser.RULE_joinCriteria);
		let _la: number;
		try {
			this.state = 1369;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 153:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1355;
				this.match(TrinoSqlParser.ON);
				this.state = 1356;
				this.booleanExpression(0);
				}
				break;
			case 235:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1357;
				this.match(TrinoSqlParser.USING);
				this.state = 1358;
				this.match(TrinoSqlParser.T__1);
				this.state = 1359;
				this.identifier();
				this.state = 1364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1360;
					this.match(TrinoSqlParser.T__3);
					this.state = 1361;
					this.identifier();
					}
					}
					this.state = 1366;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1367;
				this.match(TrinoSqlParser.T__2);
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
		this.enterRule(localctx, 70, TrinoSqlParser.RULE_sampledRelation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1371;
			this.patternRecognition();
			this.state = 1378;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1372;
				this.match(TrinoSqlParser.TABLESAMPLE);
				this.state = 1373;
				this.sampleType();
				this.state = 1374;
				this.match(TrinoSqlParser.T__1);
				this.state = 1375;
				localctx._percentage = this.expression();
				this.state = 1376;
				this.match(TrinoSqlParser.T__2);
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
		this.enterRule(localctx, 72, TrinoSqlParser.RULE_sampleType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1380;
			_la = this._input.LA(1);
			if(!(_la===30 || _la===211)) {
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
		this.enterRule(localctx, 74, TrinoSqlParser.RULE_patternRecognition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1382;
			this.aliasedRelation();
			this.state = 1465;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				{
				this.state = 1383;
				this.match(TrinoSqlParser.MATCH_RECOGNIZE);
				this.state = 1384;
				this.match(TrinoSqlParser.T__1);
				this.state = 1395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===163) {
					{
					this.state = 1385;
					this.match(TrinoSqlParser.PARTITION);
					this.state = 1386;
					this.match(TrinoSqlParser.BY);
					this.state = 1387;
					localctx._expression = this.expression();
					localctx._partition.push(localctx._expression);
					this.state = 1392;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1388;
						this.match(TrinoSqlParser.T__3);
						this.state = 1389;
						localctx._expression = this.expression();
						localctx._partition.push(localctx._expression);
						}
						}
						this.state = 1394;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===158) {
					{
					this.state = 1397;
					this.match(TrinoSqlParser.ORDER);
					this.state = 1398;
					this.match(TrinoSqlParser.BY);
					this.state = 1399;
					this.sortItem();
					this.state = 1404;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1400;
						this.match(TrinoSqlParser.T__3);
						this.state = 1401;
						this.sortItem();
						}
						}
						this.state = 1406;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===134) {
					{
					this.state = 1409;
					this.match(TrinoSqlParser.MEASURES);
					this.state = 1410;
					this.measureDefinition();
					this.state = 1415;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1411;
						this.match(TrinoSqlParser.T__3);
						this.state = 1412;
						this.measureDefinition();
						}
						}
						this.state = 1417;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20 || _la===154) {
					{
					this.state = 1420;
					this.rowsPerMatch();
					}
				}

				this.state = 1426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19) {
					{
					this.state = 1423;
					this.match(TrinoSqlParser.AFTER);
					this.state = 1424;
					this.match(TrinoSqlParser.MATCH);
					this.state = 1425;
					this.skipTo();
					}
				}

				this.state = 1429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===105 || _la===199) {
					{
					this.state = 1428;
					_la = this._input.LA(1);
					if(!(_la===105 || _la===199)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 1431;
				this.match(TrinoSqlParser.PATTERN);
				this.state = 1432;
				this.match(TrinoSqlParser.T__1);
				this.state = 1433;
				this.rowPattern(0);
				this.state = 1434;
				this.match(TrinoSqlParser.T__2);
				this.state = 1444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===209) {
					{
					this.state = 1435;
					this.match(TrinoSqlParser.SUBSET);
					this.state = 1436;
					this.subsetDefinition();
					this.state = 1441;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1437;
						this.match(TrinoSqlParser.T__3);
						this.state = 1438;
						this.subsetDefinition();
						}
						}
						this.state = 1443;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1446;
				this.match(TrinoSqlParser.DEFINE);
				this.state = 1447;
				this.variableDefinition();
				this.state = 1452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1448;
					this.match(TrinoSqlParser.T__3);
					this.state = 1449;
					this.variableDefinition();
					}
					}
					this.state = 1454;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1455;
				this.match(TrinoSqlParser.T__2);
				this.state = 1463;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 193, this._ctx) ) {
				case 1:
					{
					this.state = 1457;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===26) {
						{
						this.state = 1456;
						this.match(TrinoSqlParser.AS);
						}
					}

					this.state = 1459;
					this.identifier();
					this.state = 1461;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
					case 1:
						{
						this.state = 1460;
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
		this.enterRule(localctx, 76, TrinoSqlParser.RULE_measureDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1467;
			this.expression();
			this.state = 1468;
			this.match(TrinoSqlParser.AS);
			this.state = 1469;
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
		this.enterRule(localctx, 78, TrinoSqlParser.RULE_rowsPerMatch);
		let _la: number;
		try {
			this.state = 1482;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 154:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1471;
				this.match(TrinoSqlParser.ONE);
				this.state = 1472;
				this.match(TrinoSqlParser.ROW);
				this.state = 1473;
				this.match(TrinoSqlParser.PER);
				this.state = 1474;
				this.match(TrinoSqlParser.MATCH);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1475;
				this.match(TrinoSqlParser.ALL);
				this.state = 1476;
				this.match(TrinoSqlParser.ROWS);
				this.state = 1477;
				this.match(TrinoSqlParser.PER);
				this.state = 1478;
				this.match(TrinoSqlParser.MATCH);
				this.state = 1480;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===152 || _la===205 || _la===243) {
					{
					this.state = 1479;
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
		this.enterRule(localctx, 80, TrinoSqlParser.RULE_emptyMatchHandling);
		try {
			this.state = 1493;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 205:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1484;
				this.match(TrinoSqlParser.SHOW);
				this.state = 1485;
				this.match(TrinoSqlParser.EMPTY);
				this.state = 1486;
				this.match(TrinoSqlParser.MATCHES);
				}
				break;
			case 152:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1487;
				this.match(TrinoSqlParser.OMIT);
				this.state = 1488;
				this.match(TrinoSqlParser.EMPTY);
				this.state = 1489;
				this.match(TrinoSqlParser.MATCHES);
				}
				break;
			case 243:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1490;
				this.match(TrinoSqlParser.WITH);
				this.state = 1491;
				this.match(TrinoSqlParser.UNMATCHED);
				this.state = 1492;
				this.match(TrinoSqlParser.ROWS);
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
		this.enterRule(localctx, 82, TrinoSqlParser.RULE_skipTo);
		try {
			this.state = 1514;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 198, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1495;
				this.match(TrinoSqlParser.T__4);
				this.state = 1496;
				this.match(TrinoSqlParser.TO);
				this.state = 1497;
				this.match(TrinoSqlParser.NEXT);
				this.state = 1498;
				this.match(TrinoSqlParser.ROW);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1499;
				this.match(TrinoSqlParser.T__4);
				this.state = 1500;
				this.match(TrinoSqlParser.PAST);
				this.state = 1501;
				this.match(TrinoSqlParser.LAST);
				this.state = 1502;
				this.match(TrinoSqlParser.ROW);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1503;
				this.match(TrinoSqlParser.T__4);
				this.state = 1504;
				this.match(TrinoSqlParser.TO);
				this.state = 1505;
				this.match(TrinoSqlParser.FIRST);
				this.state = 1506;
				this.identifier();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1507;
				this.match(TrinoSqlParser.T__4);
				this.state = 1508;
				this.match(TrinoSqlParser.TO);
				this.state = 1509;
				this.match(TrinoSqlParser.LAST);
				this.state = 1510;
				this.identifier();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1511;
				this.match(TrinoSqlParser.T__4);
				this.state = 1512;
				this.match(TrinoSqlParser.TO);
				this.state = 1513;
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
		this.enterRule(localctx, 84, TrinoSqlParser.RULE_subsetDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1516;
			localctx._name = this.identifier();
			this.state = 1517;
			this.match(TrinoSqlParser.EQ);
			this.state = 1518;
			this.match(TrinoSqlParser.T__1);
			this.state = 1519;
			localctx._identifier = this.identifier();
			localctx._union.push(localctx._identifier);
			this.state = 1524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 1520;
				this.match(TrinoSqlParser.T__3);
				this.state = 1521;
				localctx._identifier = this.identifier();
				localctx._union.push(localctx._identifier);
				}
				}
				this.state = 1526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1527;
			this.match(TrinoSqlParser.T__2);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 86, TrinoSqlParser.RULE_variableDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1529;
			this.identifier();
			this.state = 1530;
			this.match(TrinoSqlParser.AS);
			this.state = 1531;
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
		this.enterRule(localctx, 88, TrinoSqlParser.RULE_aliasedRelation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1533;
			this.relationPrimary();
			this.state = 1541;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				{
				this.state = 1535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26) {
					{
					this.state = 1534;
					this.match(TrinoSqlParser.AS);
					}
				}

				this.state = 1537;
				this.identifier();
				this.state = 1539;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 201, this._ctx) ) {
				case 1:
					{
					this.state = 1538;
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
		this.enterRule(localctx, 90, TrinoSqlParser.RULE_columnAliases);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1543;
			this.match(TrinoSqlParser.T__1);
			this.state = 1544;
			this.identifier();
			this.state = 1549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 1545;
				this.match(TrinoSqlParser.T__3);
				this.state = 1546;
				this.identifier();
				}
				}
				this.state = 1551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1552;
			this.match(TrinoSqlParser.T__2);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 92, TrinoSqlParser.RULE_relationPrimary);
		let _la: number;
		try {
			this.state = 1583;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 206, this._ctx) ) {
			case 1:
				localctx = new TableNameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1554;
				this.qualifiedName();
				}
				break;
			case 2:
				localctx = new SubqueryRelationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1555;
				this.match(TrinoSqlParser.T__1);
				this.state = 1556;
				this.query();
				this.state = 1557;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 3:
				localctx = new UnnestContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1559;
				this.match(TrinoSqlParser.UNNEST);
				this.state = 1560;
				this.match(TrinoSqlParser.T__1);
				this.state = 1561;
				this.expression();
				this.state = 1566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1562;
					this.match(TrinoSqlParser.T__3);
					this.state = 1563;
					this.expression();
					}
					}
					this.state = 1568;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1569;
				this.match(TrinoSqlParser.T__2);
				this.state = 1572;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 205, this._ctx) ) {
				case 1:
					{
					this.state = 1570;
					this.match(TrinoSqlParser.WITH);
					this.state = 1571;
					this.match(TrinoSqlParser.ORDINALITY);
					}
					break;
				}
				}
				break;
			case 4:
				localctx = new LateralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1574;
				this.match(TrinoSqlParser.LATERAL);
				this.state = 1575;
				this.match(TrinoSqlParser.T__1);
				this.state = 1576;
				this.query();
				this.state = 1577;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 5:
				localctx = new ParenthesizedRelationContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1579;
				this.match(TrinoSqlParser.T__1);
				this.state = 1580;
				this.relation(0);
				this.state = 1581;
				this.match(TrinoSqlParser.T__2);
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
		this.enterRule(localctx, 94, TrinoSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1585;
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
		let _startState: number = 96;
		this.enterRecursionRule(localctx, 96, TrinoSqlParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1594;
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
			case 59:
			case 61:
			case 63:
			case 65:
			case 67:
			case 68:
			case 71:
			case 75:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 87:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 97:
			case 98:
			case 100:
			case 101:
			case 102:
			case 104:
			case 105:
			case 107:
			case 110:
			case 112:
			case 113:
			case 115:
			case 117:
			case 118:
			case 119:
			case 121:
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
			case 137:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 154:
			case 155:
			case 156:
			case 159:
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
			case 172:
			case 174:
			case 175:
			case 176:
			case 177:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 188:
			case 189:
			case 190:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
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
			case 211:
			case 213:
			case 214:
			case 215:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 225:
			case 227:
			case 228:
			case 230:
			case 232:
			case 233:
			case 234:
			case 236:
			case 238:
			case 239:
			case 242:
			case 244:
			case 245:
			case 246:
			case 247:
			case 248:
			case 255:
			case 256:
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
			case 271:
				{
				localctx = new PredicatedContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1588;
				(localctx as PredicatedContext)._valueExpression = this.valueExpression(0);
				this.state = 1590;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 207, this._ctx) ) {
				case 1:
					{
					this.state = 1589;
					this.predicate((localctx as PredicatedContext)._valueExpression);
					}
					break;
				}
				}
				break;
			case 147:
				{
				localctx = new LogicalNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1592;
				this.match(TrinoSqlParser.NOT);
				this.state = 1593;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1604;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 210, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1602;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
					case 1:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, TrinoSqlParser.RULE_booleanExpression);
						this.state = 1596;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1597;
						(localctx as LogicalBinaryContext)._operator = this.match(TrinoSqlParser.AND);
						this.state = 1598;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;
					case 2:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, TrinoSqlParser.RULE_booleanExpression);
						this.state = 1599;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1600;
						(localctx as LogicalBinaryContext)._operator = this.match(TrinoSqlParser.OR);
						this.state = 1601;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1606;
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
	// @RuleVersion(0)
	public predicate(value: ParserRuleContext): PredicateContext {
		let localctx: PredicateContext = new PredicateContext(this, this._ctx, this.state, value);
		this.enterRule(localctx, 98, TrinoSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1668;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				localctx = new ComparisonContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1607;
				this.comparisonOperator();
				this.state = 1608;
				(localctx as ComparisonContext)._right = this.valueExpression(0);
				}
				break;
			case 2:
				localctx = new QuantifiedComparisonContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1610;
				this.comparisonOperator();
				this.state = 1611;
				this.comparisonQuantifier();
				this.state = 1612;
				this.match(TrinoSqlParser.T__1);
				this.state = 1613;
				this.query();
				this.state = 1614;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 3:
				localctx = new BetweenContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1617;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===147) {
					{
					this.state = 1616;
					this.match(TrinoSqlParser.NOT);
					}
				}

				this.state = 1619;
				this.match(TrinoSqlParser.BETWEEN);
				this.state = 1620;
				(localctx as BetweenContext)._lower = this.valueExpression(0);
				this.state = 1621;
				this.match(TrinoSqlParser.AND);
				this.state = 1622;
				(localctx as BetweenContext)._upper = this.valueExpression(0);
				}
				break;
			case 4:
				localctx = new InListContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1625;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===147) {
					{
					this.state = 1624;
					this.match(TrinoSqlParser.NOT);
					}
				}

				this.state = 1627;
				this.match(TrinoSqlParser.IN);
				this.state = 1628;
				this.match(TrinoSqlParser.T__1);
				this.state = 1629;
				this.expression();
				this.state = 1634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1630;
					this.match(TrinoSqlParser.T__3);
					this.state = 1631;
					this.expression();
					}
					}
					this.state = 1636;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1637;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 5:
				localctx = new InSubqueryContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===147) {
					{
					this.state = 1639;
					this.match(TrinoSqlParser.NOT);
					}
				}

				this.state = 1642;
				this.match(TrinoSqlParser.IN);
				this.state = 1643;
				this.match(TrinoSqlParser.T__1);
				this.state = 1644;
				this.query();
				this.state = 1645;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 6:
				localctx = new LikeContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1648;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===147) {
					{
					this.state = 1647;
					this.match(TrinoSqlParser.NOT);
					}
				}

				this.state = 1650;
				this.match(TrinoSqlParser.LIKE);
				this.state = 1651;
				(localctx as LikeContext)._pattern = this.valueExpression(0);
				this.state = 1654;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 216, this._ctx) ) {
				case 1:
					{
					this.state = 1652;
					this.match(TrinoSqlParser.ESCAPE);
					this.state = 1653;
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
				this.state = 1656;
				this.match(TrinoSqlParser.IS);
				this.state = 1658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===147) {
					{
					this.state = 1657;
					this.match(TrinoSqlParser.NOT);
					}
				}

				this.state = 1660;
				this.match(TrinoSqlParser.NULL);
				}
				break;
			case 8:
				localctx = new DistinctFromContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1661;
				this.match(TrinoSqlParser.IS);
				this.state = 1663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===147) {
					{
					this.state = 1662;
					this.match(TrinoSqlParser.NOT);
					}
				}

				this.state = 1665;
				this.match(TrinoSqlParser.DISTINCT);
				this.state = 1666;
				this.match(TrinoSqlParser.FROM);
				this.state = 1667;
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
		let _startState: number = 100;
		this.enterRecursionRule(localctx, 100, TrinoSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1674;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 220, this._ctx) ) {
			case 1:
				{
				localctx = new ValueExpressionDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1671;
				this.primaryExpression(0);
				}
				break;
			case 2:
				{
				localctx = new ArithmeticUnaryContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1672;
				(localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===255 || _la===256)) {
				    (localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1673;
				this.valueExpression(4);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1690;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 222, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1688;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 221, this._ctx) ) {
					case 1:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, TrinoSqlParser.RULE_valueExpression);
						this.state = 1676;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1677;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 257)) & ~0x1F) === 0 && ((1 << (_la - 257)) & 7) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1678;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;
					case 2:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, TrinoSqlParser.RULE_valueExpression);
						this.state = 1679;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1680;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===255 || _la===256)) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1681;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;
					case 3:
						{
						localctx = new ConcatenationContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ConcatenationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, TrinoSqlParser.RULE_valueExpression);
						this.state = 1682;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1683;
						this.match(TrinoSqlParser.CONCAT);
						this.state = 1684;
						(localctx as ConcatenationContext)._right = this.valueExpression(2);
						}
						break;
					case 4:
						{
						localctx = new AtTimeZoneContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TrinoSqlParser.RULE_valueExpression);
						this.state = 1685;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1686;
						this.match(TrinoSqlParser.AT);
						this.state = 1687;
						this.timeZoneSpecifier();
						}
						break;
					}
					}
				}
				this.state = 1692;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 222, this._ctx);
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
		let _startState: number = 102;
		this.enterRecursionRule(localctx, 102, TrinoSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1942;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 252, this._ctx) ) {
			case 1:
				{
				localctx = new NullLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1694;
				this.match(TrinoSqlParser.NULL);
				}
				break;
			case 2:
				{
				localctx = new IntervalLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1695;
				this.interval();
				}
				break;
			case 3:
				{
				localctx = new TypeConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1696;
				this.identifier();
				this.state = 1697;
				this.string_();
				}
				break;
			case 4:
				{
				localctx = new TypeConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1699;
				this.match(TrinoSqlParser.DOUBLE);
				this.state = 1700;
				this.match(TrinoSqlParser.PRECISION);
				this.state = 1701;
				this.string_();
				}
				break;
			case 5:
				{
				localctx = new NumericLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1702;
				this.number_();
				}
				break;
			case 6:
				{
				localctx = new BooleanLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1703;
				this.booleanValue();
				}
				break;
			case 7:
				{
				localctx = new StringLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1704;
				this.string_();
				}
				break;
			case 8:
				{
				localctx = new BinaryLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1705;
				this.match(TrinoSqlParser.BINARY_LITERAL);
				}
				break;
			case 9:
				{
				localctx = new ParameterContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1706;
				this.match(TrinoSqlParser.QUESTION_MARK);
				}
				break;
			case 10:
				{
				localctx = new PositionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1707;
				this.match(TrinoSqlParser.POSITION);
				this.state = 1708;
				this.match(TrinoSqlParser.T__1);
				this.state = 1709;
				this.valueExpression(0);
				this.state = 1710;
				this.match(TrinoSqlParser.IN);
				this.state = 1711;
				this.valueExpression(0);
				this.state = 1712;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 11:
				{
				localctx = new RowConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1714;
				this.match(TrinoSqlParser.T__1);
				this.state = 1715;
				this.expression();
				this.state = 1718;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1716;
					this.match(TrinoSqlParser.T__3);
					this.state = 1717;
					this.expression();
					}
					}
					this.state = 1720;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===4);
				this.state = 1722;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 12:
				{
				localctx = new RowConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1724;
				this.match(TrinoSqlParser.ROW);
				this.state = 1725;
				this.match(TrinoSqlParser.T__1);
				this.state = 1726;
				this.expression();
				this.state = 1731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1727;
					this.match(TrinoSqlParser.T__3);
					this.state = 1728;
					this.expression();
					}
					}
					this.state = 1733;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1734;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 13:
				{
				localctx = new FunctionCallContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1736;
				this.qualifiedName();
				this.state = 1737;
				this.match(TrinoSqlParser.T__1);
				this.state = 1738;
				this.match(TrinoSqlParser.ASTERISK);
				this.state = 1739;
				this.match(TrinoSqlParser.T__2);
				this.state = 1741;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 225, this._ctx) ) {
				case 1:
					{
					this.state = 1740;
					this.filter();
					}
					break;
				}
				this.state = 1744;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 226, this._ctx) ) {
				case 1:
					{
					this.state = 1743;
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
				this.state = 1747;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 227, this._ctx) ) {
				case 1:
					{
					this.state = 1746;
					this.processingMode();
					}
					break;
				}
				this.state = 1749;
				this.qualifiedName();
				this.state = 1750;
				this.match(TrinoSqlParser.T__1);
				this.state = 1762;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1476117503) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2120217679) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4252345787) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 1325399551) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3153981439) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4286054271) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 3237637037) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2047) !== 0)) {
					{
					this.state = 1752;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 228, this._ctx) ) {
					case 1:
						{
						this.state = 1751;
						this.setQuantifier();
						}
						break;
					}
					this.state = 1754;
					this.expression();
					this.state = 1759;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1755;
						this.match(TrinoSqlParser.T__3);
						this.state = 1756;
						this.expression();
						}
						}
						this.state = 1761;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1774;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===158) {
					{
					this.state = 1764;
					this.match(TrinoSqlParser.ORDER);
					this.state = 1765;
					this.match(TrinoSqlParser.BY);
					this.state = 1766;
					this.sortItem();
					this.state = 1771;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1767;
						this.match(TrinoSqlParser.T__3);
						this.state = 1768;
						this.sortItem();
						}
						}
						this.state = 1773;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1776;
				this.match(TrinoSqlParser.T__2);
				this.state = 1778;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 233, this._ctx) ) {
				case 1:
					{
					this.state = 1777;
					this.filter();
					}
					break;
				}
				this.state = 1784;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 235, this._ctx) ) {
				case 1:
					{
					this.state = 1781;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===102 || _la===184) {
						{
						this.state = 1780;
						this.nullTreatment();
						}
					}

					this.state = 1783;
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
				this.state = 1786;
				this.identifier();
				this.state = 1787;
				this.over();
				}
				break;
			case 16:
				{
				localctx = new LambdaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1789;
				this.identifier();
				this.state = 1790;
				this.match(TrinoSqlParser.T__5);
				this.state = 1791;
				this.expression();
				}
				break;
			case 17:
				{
				localctx = new LambdaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1793;
				this.match(TrinoSqlParser.T__1);
				this.state = 1802;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 3192429231) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 3134381375) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3162472435) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 4286316499) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 4009750519) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 525170103) !== 0) || ((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & 15) !== 0)) {
					{
					this.state = 1794;
					this.identifier();
					this.state = 1799;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1795;
						this.match(TrinoSqlParser.T__3);
						this.state = 1796;
						this.identifier();
						}
						}
						this.state = 1801;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1804;
				this.match(TrinoSqlParser.T__2);
				this.state = 1805;
				this.match(TrinoSqlParser.T__5);
				this.state = 1806;
				this.expression();
				}
				break;
			case 18:
				{
				localctx = new SubqueryExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1807;
				this.match(TrinoSqlParser.T__1);
				this.state = 1808;
				this.query();
				this.state = 1809;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 19:
				{
				localctx = new ExistsContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1811;
				this.match(TrinoSqlParser.EXISTS);
				this.state = 1812;
				this.match(TrinoSqlParser.T__1);
				this.state = 1813;
				this.query();
				this.state = 1814;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 20:
				{
				localctx = new SimpleCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1816;
				this.match(TrinoSqlParser.CASE);
				this.state = 1817;
				(localctx as SimpleCaseContext)._operand = this.expression();
				this.state = 1819;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1818;
					this.whenClause();
					}
					}
					this.state = 1821;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===240);
				this.state = 1825;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===70) {
					{
					this.state = 1823;
					this.match(TrinoSqlParser.ELSE);
					this.state = 1824;
					(localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1827;
				this.match(TrinoSqlParser.END);
				}
				break;
			case 21:
				{
				localctx = new SearchedCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1829;
				this.match(TrinoSqlParser.CASE);
				this.state = 1831;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1830;
					this.whenClause();
					}
					}
					this.state = 1833;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===240);
				this.state = 1837;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===70) {
					{
					this.state = 1835;
					this.match(TrinoSqlParser.ELSE);
					this.state = 1836;
					(localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1839;
				this.match(TrinoSqlParser.END);
				}
				break;
			case 22:
				{
				localctx = new CastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1841;
				this.match(TrinoSqlParser.CAST);
				this.state = 1842;
				this.match(TrinoSqlParser.T__1);
				this.state = 1843;
				this.expression();
				this.state = 1844;
				this.match(TrinoSqlParser.AS);
				this.state = 1845;
				this.type_(0);
				this.state = 1846;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 23:
				{
				localctx = new CastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1848;
				this.match(TrinoSqlParser.TRY_CAST);
				this.state = 1849;
				this.match(TrinoSqlParser.T__1);
				this.state = 1850;
				this.expression();
				this.state = 1851;
				this.match(TrinoSqlParser.AS);
				this.state = 1852;
				this.type_(0);
				this.state = 1853;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 24:
				{
				localctx = new ArrayConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1855;
				this.match(TrinoSqlParser.ARRAY);
				this.state = 1856;
				this.match(TrinoSqlParser.T__6);
				this.state = 1865;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757956) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1476117503) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2120217677) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4252345787) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 1325399551) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3153981439) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4286054271) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 3237637037) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2047) !== 0)) {
					{
					this.state = 1857;
					this.expression();
					this.state = 1862;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1858;
						this.match(TrinoSqlParser.T__3);
						this.state = 1859;
						this.expression();
						}
						}
						this.state = 1864;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1867;
				this.match(TrinoSqlParser.T__7);
				}
				break;
			case 25:
				{
				localctx = new ColumnReferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1868;
				this.identifier();
				}
				break;
			case 26:
				{
				localctx = new SpecialDateTimeFunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1869;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.CURRENT_DATE);
				}
				break;
			case 27:
				{
				localctx = new SpecialDateTimeFunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1870;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.CURRENT_TIME);
				this.state = 1874;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 244, this._ctx) ) {
				case 1:
					{
					this.state = 1871;
					this.match(TrinoSqlParser.T__1);
					this.state = 1872;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(TrinoSqlParser.INTEGER_VALUE);
					this.state = 1873;
					this.match(TrinoSqlParser.T__2);
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
				this.state = 1876;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.CURRENT_TIMESTAMP);
				this.state = 1880;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 245, this._ctx) ) {
				case 1:
					{
					this.state = 1877;
					this.match(TrinoSqlParser.T__1);
					this.state = 1878;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(TrinoSqlParser.INTEGER_VALUE);
					this.state = 1879;
					this.match(TrinoSqlParser.T__2);
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
				this.state = 1882;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.LOCALTIME);
				this.state = 1886;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 246, this._ctx) ) {
				case 1:
					{
					this.state = 1883;
					this.match(TrinoSqlParser.T__1);
					this.state = 1884;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(TrinoSqlParser.INTEGER_VALUE);
					this.state = 1885;
					this.match(TrinoSqlParser.T__2);
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
				this.state = 1888;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.LOCALTIMESTAMP);
				this.state = 1892;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 247, this._ctx) ) {
				case 1:
					{
					this.state = 1889;
					this.match(TrinoSqlParser.T__1);
					this.state = 1890;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(TrinoSqlParser.INTEGER_VALUE);
					this.state = 1891;
					this.match(TrinoSqlParser.T__2);
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
				this.state = 1894;
				(localctx as CurrentUserContext)._name = this.match(TrinoSqlParser.CURRENT_USER);
				}
				break;
			case 32:
				{
				localctx = new CurrentCatalogContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1895;
				(localctx as CurrentCatalogContext)._name = this.match(TrinoSqlParser.CURRENT_CATALOG);
				}
				break;
			case 33:
				{
				localctx = new CurrentSchemaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1896;
				(localctx as CurrentSchemaContext)._name = this.match(TrinoSqlParser.CURRENT_SCHEMA);
				}
				break;
			case 34:
				{
				localctx = new CurrentPathContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1897;
				(localctx as CurrentPathContext)._name = this.match(TrinoSqlParser.CURRENT_PATH);
				}
				break;
			case 35:
				{
				localctx = new SubstringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1898;
				this.match(TrinoSqlParser.SUBSTRING);
				this.state = 1899;
				this.match(TrinoSqlParser.T__1);
				this.state = 1900;
				this.valueExpression(0);
				this.state = 1901;
				this.match(TrinoSqlParser.FROM);
				this.state = 1902;
				this.valueExpression(0);
				this.state = 1905;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===86) {
					{
					this.state = 1903;
					this.match(TrinoSqlParser.FOR);
					this.state = 1904;
					this.valueExpression(0);
					}
				}

				this.state = 1907;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 36:
				{
				localctx = new NormalizeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1909;
				this.match(TrinoSqlParser.NORMALIZE);
				this.state = 1910;
				this.match(TrinoSqlParser.T__1);
				this.state = 1911;
				this.valueExpression(0);
				this.state = 1914;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4) {
					{
					this.state = 1912;
					this.match(TrinoSqlParser.T__3);
					this.state = 1913;
					this.normalForm();
					}
				}

				this.state = 1916;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 37:
				{
				localctx = new ExtractContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1918;
				this.match(TrinoSqlParser.EXTRACT);
				this.state = 1919;
				this.match(TrinoSqlParser.T__1);
				this.state = 1920;
				this.identifier();
				this.state = 1921;
				this.match(TrinoSqlParser.FROM);
				this.state = 1922;
				this.valueExpression(0);
				this.state = 1923;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 38:
				{
				localctx = new ParenthesizedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1925;
				this.match(TrinoSqlParser.T__1);
				this.state = 1926;
				this.expression();
				this.state = 1927;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 39:
				{
				localctx = new GroupingOperationContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1929;
				this.match(TrinoSqlParser.GROUPING);
				this.state = 1930;
				this.match(TrinoSqlParser.T__1);
				this.state = 1939;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 3192429231) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 3134381375) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3162472435) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 4286316499) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 4009750519) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 525170103) !== 0) || ((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & 15) !== 0)) {
					{
					this.state = 1931;
					this.qualifiedName();
					this.state = 1936;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 1932;
						this.match(TrinoSqlParser.T__3);
						this.state = 1933;
						this.qualifiedName();
						}
						}
						this.state = 1938;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1941;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1954;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 254, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1952;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 253, this._ctx) ) {
					case 1:
						{
						localctx = new SubscriptContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						(localctx as SubscriptContext)._value = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, TrinoSqlParser.RULE_primaryExpression);
						this.state = 1944;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1945;
						this.match(TrinoSqlParser.T__6);
						this.state = 1946;
						(localctx as SubscriptContext)._index = this.valueExpression(0);
						this.state = 1947;
						this.match(TrinoSqlParser.T__7);
						}
						break;
					case 2:
						{
						localctx = new DereferenceContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						(localctx as DereferenceContext)._base = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, TrinoSqlParser.RULE_primaryExpression);
						this.state = 1949;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1950;
						this.match(TrinoSqlParser.T__0);
						this.state = 1951;
						(localctx as DereferenceContext)._fieldName = this.identifier();
						}
						break;
					}
					}
				}
				this.state = 1956;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 254, this._ctx);
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
		this.enterRule(localctx, 104, TrinoSqlParser.RULE_processingMode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1957;
			_la = this._input.LA(1);
			if(!(_la===83 || _la===194)) {
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
		this.enterRule(localctx, 106, TrinoSqlParser.RULE_nullTreatment);
		try {
			this.state = 1963;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 102:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1959;
				this.match(TrinoSqlParser.IGNORE);
				this.state = 1960;
				this.match(TrinoSqlParser.NULLS);
				}
				break;
			case 184:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1961;
				this.match(TrinoSqlParser.RESPECT);
				this.state = 1962;
				this.match(TrinoSqlParser.NULLS);
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
		this.enterRule(localctx, 108, TrinoSqlParser.RULE_string);
		try {
			this.state = 1971;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 262:
				localctx = new BasicStringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1965;
				this.match(TrinoSqlParser.STRING);
				}
				break;
			case 263:
				localctx = new UnicodeStringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1966;
				this.match(TrinoSqlParser.UNICODE_STRING);
				this.state = 1969;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 256, this._ctx) ) {
				case 1:
					{
					this.state = 1967;
					this.match(TrinoSqlParser.UESCAPE);
					this.state = 1968;
					this.match(TrinoSqlParser.STRING);
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
		this.enterRule(localctx, 110, TrinoSqlParser.RULE_timeZoneSpecifier);
		try {
			this.state = 1979;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 258, this._ctx) ) {
			case 1:
				localctx = new TimeZoneIntervalContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1973;
				this.match(TrinoSqlParser.TIME);
				this.state = 1974;
				this.match(TrinoSqlParser.ZONE);
				this.state = 1975;
				this.interval();
				}
				break;
			case 2:
				localctx = new TimeZoneStringContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1976;
				this.match(TrinoSqlParser.TIME);
				this.state = 1977;
				this.match(TrinoSqlParser.ZONE);
				this.state = 1978;
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
		this.enterRule(localctx, 112, TrinoSqlParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1981;
			_la = this._input.LA(1);
			if(!(((((_la - 249)) & ~0x1F) === 0 && ((1 << (_la - 249)) & 63) !== 0))) {
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
		this.enterRule(localctx, 114, TrinoSqlParser.RULE_comparisonQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1983;
			_la = this._input.LA(1);
			if(!(_la===20 || _la===24 || _la===206)) {
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
		this.enterRule(localctx, 116, TrinoSqlParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1985;
			_la = this._input.LA(1);
			if(!(_la===80 || _la===223)) {
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
		this.enterRule(localctx, 118, TrinoSqlParser.RULE_interval);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1987;
			this.match(TrinoSqlParser.INTERVAL);
			this.state = 1989;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===255 || _la===256) {
				{
				this.state = 1988;
				localctx._sign = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===255 || _la===256)) {
				    localctx._sign = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 1991;
			this.string_();
			this.state = 1992;
			localctx._from_ = this.intervalField();
			this.state = 1995;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 260, this._ctx) ) {
			case 1:
				{
				this.state = 1993;
				this.match(TrinoSqlParser.TO);
				this.state = 1994;
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
		this.enterRule(localctx, 120, TrinoSqlParser.RULE_intervalField);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1997;
			_la = this._input.LA(1);
			if(!(_la===58 || _la===100 || _la===136 || _la===137 || _la===197 || _la===247)) {
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
		this.enterRule(localctx, 122, TrinoSqlParser.RULE_normalForm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1999;
			_la = this._input.LA(1);
			if(!(((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & 15) !== 0))) {
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
		let _startState: number = 124;
		this.enterRecursionRule(localctx, 124, TrinoSqlParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2092;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 271, this._ctx) ) {
			case 1:
				{
				localctx = new RowTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 2002;
				this.match(TrinoSqlParser.ROW);
				this.state = 2003;
				this.match(TrinoSqlParser.T__1);
				this.state = 2004;
				this.rowField();
				this.state = 2009;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2005;
					this.match(TrinoSqlParser.T__3);
					this.state = 2006;
					this.rowField();
					}
					}
					this.state = 2011;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2012;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 2:
				{
				localctx = new IntervalTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2014;
				this.match(TrinoSqlParser.INTERVAL);
				this.state = 2015;
				(localctx as IntervalTypeContext)._from_ = this.intervalField();
				this.state = 2018;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 262, this._ctx) ) {
				case 1:
					{
					this.state = 2016;
					this.match(TrinoSqlParser.TO);
					this.state = 2017;
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
				this.state = 2020;
				(localctx as DateTimeTypeContext)._base = this.match(TrinoSqlParser.TIMESTAMP);
				this.state = 2025;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 263, this._ctx) ) {
				case 1:
					{
					this.state = 2021;
					this.match(TrinoSqlParser.T__1);
					this.state = 2022;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 2023;
					this.match(TrinoSqlParser.T__2);
					}
					break;
				}
				this.state = 2030;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 264, this._ctx) ) {
				case 1:
					{
					this.state = 2027;
					this.match(TrinoSqlParser.WITHOUT);
					this.state = 2028;
					this.match(TrinoSqlParser.TIME);
					this.state = 2029;
					this.match(TrinoSqlParser.ZONE);
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
				this.state = 2032;
				(localctx as DateTimeTypeContext)._base = this.match(TrinoSqlParser.TIMESTAMP);
				this.state = 2037;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 2033;
					this.match(TrinoSqlParser.T__1);
					this.state = 2034;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 2035;
					this.match(TrinoSqlParser.T__2);
					}
				}

				this.state = 2039;
				this.match(TrinoSqlParser.WITH);
				this.state = 2040;
				this.match(TrinoSqlParser.TIME);
				this.state = 2041;
				this.match(TrinoSqlParser.ZONE);
				}
				break;
			case 5:
				{
				localctx = new DateTimeTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2042;
				(localctx as DateTimeTypeContext)._base = this.match(TrinoSqlParser.TIME);
				this.state = 2047;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 266, this._ctx) ) {
				case 1:
					{
					this.state = 2043;
					this.match(TrinoSqlParser.T__1);
					this.state = 2044;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 2045;
					this.match(TrinoSqlParser.T__2);
					}
					break;
				}
				this.state = 2052;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 267, this._ctx) ) {
				case 1:
					{
					this.state = 2049;
					this.match(TrinoSqlParser.WITHOUT);
					this.state = 2050;
					this.match(TrinoSqlParser.TIME);
					this.state = 2051;
					this.match(TrinoSqlParser.ZONE);
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
				this.state = 2054;
				(localctx as DateTimeTypeContext)._base = this.match(TrinoSqlParser.TIME);
				this.state = 2059;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 2055;
					this.match(TrinoSqlParser.T__1);
					this.state = 2056;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 2057;
					this.match(TrinoSqlParser.T__2);
					}
				}

				this.state = 2061;
				this.match(TrinoSqlParser.WITH);
				this.state = 2062;
				this.match(TrinoSqlParser.TIME);
				this.state = 2063;
				this.match(TrinoSqlParser.ZONE);
				}
				break;
			case 7:
				{
				localctx = new DoublePrecisionTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2064;
				this.match(TrinoSqlParser.DOUBLE);
				this.state = 2065;
				this.match(TrinoSqlParser.PRECISION);
				}
				break;
			case 8:
				{
				localctx = new LegacyArrayTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2066;
				this.match(TrinoSqlParser.ARRAY);
				this.state = 2067;
				this.match(TrinoSqlParser.LT);
				this.state = 2068;
				this.type_(0);
				this.state = 2069;
				this.match(TrinoSqlParser.GT);
				}
				break;
			case 9:
				{
				localctx = new LegacyMapTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2071;
				this.match(TrinoSqlParser.MAP);
				this.state = 2072;
				this.match(TrinoSqlParser.LT);
				this.state = 2073;
				(localctx as LegacyMapTypeContext)._keyType = this.type_(0);
				this.state = 2074;
				this.match(TrinoSqlParser.T__3);
				this.state = 2075;
				(localctx as LegacyMapTypeContext)._valueType = this.type_(0);
				this.state = 2076;
				this.match(TrinoSqlParser.GT);
				}
				break;
			case 10:
				{
				localctx = new GenericTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2078;
				this.identifier();
				this.state = 2090;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 270, this._ctx) ) {
				case 1:
					{
					this.state = 2079;
					this.match(TrinoSqlParser.T__1);
					this.state = 2080;
					this.typeParameter();
					this.state = 2085;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 2081;
						this.match(TrinoSqlParser.T__3);
						this.state = 2082;
						this.typeParameter();
						}
						}
						this.state = 2087;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2088;
					this.match(TrinoSqlParser.T__2);
					}
					break;
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2103;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 273, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ArrayTypeContext(this, new TypeContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, TrinoSqlParser.RULE_type);
					this.state = 2094;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 2095;
					this.match(TrinoSqlParser.ARRAY);
					this.state = 2099;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 272, this._ctx) ) {
					case 1:
						{
						this.state = 2096;
						this.match(TrinoSqlParser.T__6);
						this.state = 2097;
						this.match(TrinoSqlParser.INTEGER_VALUE);
						this.state = 2098;
						this.match(TrinoSqlParser.T__7);
						}
						break;
					}
					}
					}
				}
				this.state = 2105;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 273, this._ctx);
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
		this.enterRule(localctx, 126, TrinoSqlParser.RULE_rowField);
		try {
			this.state = 2110;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 274, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2106;
				this.type_(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2107;
				this.identifier();
				this.state = 2108;
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
		this.enterRule(localctx, 128, TrinoSqlParser.RULE_typeParameter);
		try {
			this.state = 2114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 265:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2112;
				this.match(TrinoSqlParser.INTEGER_VALUE);
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
			case 59:
			case 61:
			case 63:
			case 65:
			case 67:
			case 68:
			case 71:
			case 75:
			case 78:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 87:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 98:
			case 100:
			case 101:
			case 102:
			case 104:
			case 105:
			case 107:
			case 110:
			case 112:
			case 113:
			case 115:
			case 117:
			case 118:
			case 119:
			case 121:
			case 123:
			case 124:
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
			case 137:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 149:
			case 150:
			case 151:
			case 152:
			case 154:
			case 155:
			case 156:
			case 159:
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
			case 172:
			case 174:
			case 175:
			case 176:
			case 177:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 188:
			case 189:
			case 190:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
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
			case 211:
			case 213:
			case 214:
			case 215:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 224:
			case 225:
			case 227:
			case 228:
			case 230:
			case 232:
			case 233:
			case 234:
			case 236:
			case 238:
			case 239:
			case 242:
			case 244:
			case 245:
			case 246:
			case 247:
			case 248:
			case 268:
			case 269:
			case 270:
			case 271:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2113;
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
		this.enterRule(localctx, 130, TrinoSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2116;
			this.match(TrinoSqlParser.WHEN);
			this.state = 2117;
			localctx._condition = this.expression();
			this.state = 2118;
			this.match(TrinoSqlParser.THEN);
			this.state = 2119;
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
		this.enterRule(localctx, 132, TrinoSqlParser.RULE_filter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2121;
			this.match(TrinoSqlParser.FILTER);
			this.state = 2122;
			this.match(TrinoSqlParser.T__1);
			this.state = 2123;
			this.match(TrinoSqlParser.WHERE);
			this.state = 2124;
			this.booleanExpression(0);
			this.state = 2125;
			this.match(TrinoSqlParser.T__2);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 134, TrinoSqlParser.RULE_mergeCase);
		let _la: number;
		try {
			this.state = 2191;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 283, this._ctx) ) {
			case 1:
				localctx = new MergeUpdateContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2127;
				this.match(TrinoSqlParser.WHEN);
				this.state = 2128;
				this.match(TrinoSqlParser.MATCHED);
				this.state = 2131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===23) {
					{
					this.state = 2129;
					this.match(TrinoSqlParser.AND);
					this.state = 2130;
					(localctx as MergeUpdateContext)._condition = this.expression();
					}
				}

				this.state = 2133;
				this.match(TrinoSqlParser.THEN);
				this.state = 2134;
				this.match(TrinoSqlParser.UPDATE);
				this.state = 2135;
				this.match(TrinoSqlParser.SET);
				this.state = 2136;
				(localctx as MergeUpdateContext)._identifier = this.identifier();
				(localctx as MergeUpdateContext)._targets.push((localctx as MergeUpdateContext)._identifier);
				this.state = 2137;
				this.match(TrinoSqlParser.EQ);
				this.state = 2138;
				(localctx as MergeUpdateContext)._expression = this.expression();
				(localctx as MergeUpdateContext)._values.push((localctx as MergeUpdateContext)._expression);
				this.state = 2146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2139;
					this.match(TrinoSqlParser.T__3);
					this.state = 2140;
					(localctx as MergeUpdateContext)._identifier = this.identifier();
					(localctx as MergeUpdateContext)._targets.push((localctx as MergeUpdateContext)._identifier);
					this.state = 2141;
					this.match(TrinoSqlParser.EQ);
					this.state = 2142;
					(localctx as MergeUpdateContext)._expression = this.expression();
					(localctx as MergeUpdateContext)._values.push((localctx as MergeUpdateContext)._expression);
					}
					}
					this.state = 2148;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				localctx = new MergeDeleteContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2149;
				this.match(TrinoSqlParser.WHEN);
				this.state = 2150;
				this.match(TrinoSqlParser.MATCHED);
				this.state = 2153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===23) {
					{
					this.state = 2151;
					this.match(TrinoSqlParser.AND);
					this.state = 2152;
					(localctx as MergeDeleteContext)._condition = this.expression();
					}
				}

				this.state = 2155;
				this.match(TrinoSqlParser.THEN);
				this.state = 2156;
				this.match(TrinoSqlParser.DELETE);
				}
				break;
			case 3:
				localctx = new MergeInsertContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2157;
				this.match(TrinoSqlParser.WHEN);
				this.state = 2158;
				this.match(TrinoSqlParser.NOT);
				this.state = 2159;
				this.match(TrinoSqlParser.MATCHED);
				this.state = 2162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===23) {
					{
					this.state = 2160;
					this.match(TrinoSqlParser.AND);
					this.state = 2161;
					(localctx as MergeInsertContext)._condition = this.expression();
					}
				}

				this.state = 2164;
				this.match(TrinoSqlParser.THEN);
				this.state = 2165;
				this.match(TrinoSqlParser.INSERT);
				this.state = 2177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 2166;
					this.match(TrinoSqlParser.T__1);
					this.state = 2167;
					(localctx as MergeInsertContext)._identifier = this.identifier();
					(localctx as MergeInsertContext)._targets.push((localctx as MergeInsertContext)._identifier);
					this.state = 2172;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 2168;
						this.match(TrinoSqlParser.T__3);
						this.state = 2169;
						(localctx as MergeInsertContext)._identifier = this.identifier();
						(localctx as MergeInsertContext)._targets.push((localctx as MergeInsertContext)._identifier);
						}
						}
						this.state = 2174;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2175;
					this.match(TrinoSqlParser.T__2);
					}
				}

				this.state = 2179;
				this.match(TrinoSqlParser.VALUES);
				this.state = 2180;
				this.match(TrinoSqlParser.T__1);
				this.state = 2181;
				(localctx as MergeInsertContext)._expression = this.expression();
				(localctx as MergeInsertContext)._values.push((localctx as MergeInsertContext)._expression);
				this.state = 2186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2182;
					this.match(TrinoSqlParser.T__3);
					this.state = 2183;
					(localctx as MergeInsertContext)._expression = this.expression();
					(localctx as MergeInsertContext)._values.push((localctx as MergeInsertContext)._expression);
					}
					}
					this.state = 2188;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2189;
				this.match(TrinoSqlParser.T__2);
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
		this.enterRule(localctx, 136, TrinoSqlParser.RULE_over);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2193;
			this.match(TrinoSqlParser.OVER);
			this.state = 2199;
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
			case 59:
			case 61:
			case 63:
			case 65:
			case 67:
			case 68:
			case 71:
			case 75:
			case 78:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 87:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 98:
			case 100:
			case 101:
			case 102:
			case 104:
			case 105:
			case 107:
			case 110:
			case 112:
			case 113:
			case 115:
			case 117:
			case 118:
			case 119:
			case 121:
			case 123:
			case 124:
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
			case 137:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 149:
			case 150:
			case 151:
			case 152:
			case 154:
			case 155:
			case 156:
			case 159:
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
			case 172:
			case 174:
			case 175:
			case 176:
			case 177:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 188:
			case 189:
			case 190:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
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
			case 211:
			case 213:
			case 214:
			case 215:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 224:
			case 225:
			case 227:
			case 228:
			case 230:
			case 232:
			case 233:
			case 234:
			case 236:
			case 238:
			case 239:
			case 242:
			case 244:
			case 245:
			case 246:
			case 247:
			case 248:
			case 268:
			case 269:
			case 270:
			case 271:
				{
				this.state = 2194;
				localctx._windowName = this.identifier();
				}
				break;
			case 2:
				{
				this.state = 2195;
				this.match(TrinoSqlParser.T__1);
				this.state = 2196;
				this.windowSpecification();
				this.state = 2197;
				this.match(TrinoSqlParser.T__2);
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
		this.enterRule(localctx, 138, TrinoSqlParser.RULE_windowFrame);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===134) {
				{
				this.state = 2201;
				this.match(TrinoSqlParser.MEASURES);
				this.state = 2202;
				this.measureDefinition();
				this.state = 2207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2203;
					this.match(TrinoSqlParser.T__3);
					this.state = 2204;
					this.measureDefinition();
					}
					}
					this.state = 2209;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2212;
			this.frameExtent();
			this.state = 2216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 2213;
				this.match(TrinoSqlParser.AFTER);
				this.state = 2214;
				this.match(TrinoSqlParser.MATCH);
				this.state = 2215;
				this.skipTo();
				}
			}

			this.state = 2219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===105 || _la===199) {
				{
				this.state = 2218;
				_la = this._input.LA(1);
				if(!(_la===105 || _la===199)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 2226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===167) {
				{
				this.state = 2221;
				this.match(TrinoSqlParser.PATTERN);
				this.state = 2222;
				this.match(TrinoSqlParser.T__1);
				this.state = 2223;
				this.rowPattern(0);
				this.state = 2224;
				this.match(TrinoSqlParser.T__2);
				}
			}

			this.state = 2237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===209) {
				{
				this.state = 2228;
				this.match(TrinoSqlParser.SUBSET);
				this.state = 2229;
				this.subsetDefinition();
				this.state = 2234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2230;
					this.match(TrinoSqlParser.T__3);
					this.state = 2231;
					this.subsetDefinition();
					}
					}
					this.state = 2236;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===65) {
				{
				this.state = 2239;
				this.match(TrinoSqlParser.DEFINE);
				this.state = 2240;
				this.variableDefinition();
				this.state = 2245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2241;
					this.match(TrinoSqlParser.T__3);
					this.state = 2242;
					this.variableDefinition();
					}
					}
					this.state = 2247;
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
		this.enterRule(localctx, 140, TrinoSqlParser.RULE_frameExtent);
		try {
			this.state = 2274;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 294, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2250;
				localctx._frameType = this.match(TrinoSqlParser.RANGE);
				this.state = 2251;
				localctx._start = this.frameBound();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2252;
				localctx._frameType = this.match(TrinoSqlParser.ROWS);
				this.state = 2253;
				localctx._start = this.frameBound();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2254;
				localctx._frameType = this.match(TrinoSqlParser.GROUPS);
				this.state = 2255;
				localctx._start = this.frameBound();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2256;
				localctx._frameType = this.match(TrinoSqlParser.RANGE);
				this.state = 2257;
				this.match(TrinoSqlParser.BETWEEN);
				this.state = 2258;
				localctx._start = this.frameBound();
				this.state = 2259;
				this.match(TrinoSqlParser.AND);
				this.state = 2260;
				localctx._end = this.frameBound();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2262;
				localctx._frameType = this.match(TrinoSqlParser.ROWS);
				this.state = 2263;
				this.match(TrinoSqlParser.BETWEEN);
				this.state = 2264;
				localctx._start = this.frameBound();
				this.state = 2265;
				this.match(TrinoSqlParser.AND);
				this.state = 2266;
				localctx._end = this.frameBound();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2268;
				localctx._frameType = this.match(TrinoSqlParser.GROUPS);
				this.state = 2269;
				this.match(TrinoSqlParser.BETWEEN);
				this.state = 2270;
				localctx._start = this.frameBound();
				this.state = 2271;
				this.match(TrinoSqlParser.AND);
				this.state = 2272;
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
		this.enterRule(localctx, 142, TrinoSqlParser.RULE_frameBound);
		let _la: number;
		try {
			this.state = 2285;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 295, this._ctx) ) {
			case 1:
				localctx = new UnboundedFrameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2276;
				this.match(TrinoSqlParser.UNBOUNDED);
				this.state = 2277;
				(localctx as UnboundedFrameContext)._boundType = this.match(TrinoSqlParser.PRECEDING);
				}
				break;
			case 2:
				localctx = new UnboundedFrameContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2278;
				this.match(TrinoSqlParser.UNBOUNDED);
				this.state = 2279;
				(localctx as UnboundedFrameContext)._boundType = this.match(TrinoSqlParser.FOLLOWING);
				}
				break;
			case 3:
				localctx = new CurrentRowBoundContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2280;
				this.match(TrinoSqlParser.CURRENT);
				this.state = 2281;
				this.match(TrinoSqlParser.ROW);
				}
				break;
			case 4:
				localctx = new BoundedFrameContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2282;
				this.expression();
				this.state = 2283;
				(localctx as BoundedFrameContext)._boundType = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===85 || _la===171)) {
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
		let _startState: number = 144;
		this.enterRecursionRule(localctx, 144, TrinoSqlParser.RULE_rowPattern, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new QuantifiedPrimaryContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2288;
			this.patternPrimary();
			this.state = 2290;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 296, this._ctx) ) {
			case 1:
				{
				this.state = 2289;
				this.patternQuantifier();
				}
				break;
			}
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2299;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 298, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2297;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 297, this._ctx) ) {
					case 1:
						{
						localctx = new PatternConcatenationContext(this, new RowPatternContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TrinoSqlParser.RULE_rowPattern);
						this.state = 2292;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2293;
						this.rowPattern(3);
						}
						break;
					case 2:
						{
						localctx = new PatternAlternationContext(this, new RowPatternContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, TrinoSqlParser.RULE_rowPattern);
						this.state = 2294;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2295;
						this.match(TrinoSqlParser.T__8);
						this.state = 2296;
						this.rowPattern(2);
						}
						break;
					}
					}
				}
				this.state = 2301;
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
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternPrimary(): PatternPrimaryContext {
		let localctx: PatternPrimaryContext = new PatternPrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, TrinoSqlParser.RULE_patternPrimary);
		let _la: number;
		try {
			this.state = 2327;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 300, this._ctx) ) {
			case 1:
				localctx = new PatternVariableContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2302;
				this.identifier();
				}
				break;
			case 2:
				localctx = new EmptyPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2303;
				this.match(TrinoSqlParser.T__1);
				this.state = 2304;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 3:
				localctx = new PatternPermutationContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2305;
				this.match(TrinoSqlParser.PERMUTE);
				this.state = 2306;
				this.match(TrinoSqlParser.T__1);
				this.state = 2307;
				this.rowPattern(0);
				this.state = 2312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 2308;
					this.match(TrinoSqlParser.T__3);
					this.state = 2309;
					this.rowPattern(0);
					}
					}
					this.state = 2314;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2315;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 4:
				localctx = new GroupedPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2317;
				this.match(TrinoSqlParser.T__1);
				this.state = 2318;
				this.rowPattern(0);
				this.state = 2319;
				this.match(TrinoSqlParser.T__2);
				}
				break;
			case 5:
				localctx = new PartitionStartAnchorContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2321;
				this.match(TrinoSqlParser.T__9);
				}
				break;
			case 6:
				localctx = new PartitionEndAnchorContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2322;
				this.match(TrinoSqlParser.T__10);
				}
				break;
			case 7:
				localctx = new ExcludedPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2323;
				this.match(TrinoSqlParser.T__11);
				this.state = 2324;
				this.rowPattern(0);
				this.state = 2325;
				this.match(TrinoSqlParser.T__12);
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
		this.enterRule(localctx, 148, TrinoSqlParser.RULE_patternQuantifier);
		let _la: number;
		try {
			this.state = 2359;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 308, this._ctx) ) {
			case 1:
				localctx = new ZeroOrMoreQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2329;
				this.match(TrinoSqlParser.ASTERISK);
				this.state = 2331;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 301, this._ctx) ) {
				case 1:
					{
					this.state = 2330;
					(localctx as ZeroOrMoreQuantifierContext)._reluctant = this.match(TrinoSqlParser.QUESTION_MARK);
					}
					break;
				}
				}
				break;
			case 2:
				localctx = new OneOrMoreQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2333;
				this.match(TrinoSqlParser.PLUS);
				this.state = 2335;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 302, this._ctx) ) {
				case 1:
					{
					this.state = 2334;
					(localctx as OneOrMoreQuantifierContext)._reluctant = this.match(TrinoSqlParser.QUESTION_MARK);
					}
					break;
				}
				}
				break;
			case 3:
				localctx = new ZeroOrOneQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2337;
				this.match(TrinoSqlParser.QUESTION_MARK);
				this.state = 2339;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 303, this._ctx) ) {
				case 1:
					{
					this.state = 2338;
					(localctx as ZeroOrOneQuantifierContext)._reluctant = this.match(TrinoSqlParser.QUESTION_MARK);
					}
					break;
				}
				}
				break;
			case 4:
				localctx = new RangeQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2341;
				this.match(TrinoSqlParser.T__13);
				this.state = 2342;
				(localctx as RangeQuantifierContext)._exactly = this.match(TrinoSqlParser.INTEGER_VALUE);
				this.state = 2343;
				this.match(TrinoSqlParser.T__14);
				this.state = 2345;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 304, this._ctx) ) {
				case 1:
					{
					this.state = 2344;
					(localctx as RangeQuantifierContext)._reluctant = this.match(TrinoSqlParser.QUESTION_MARK);
					}
					break;
				}
				}
				break;
			case 5:
				localctx = new RangeQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2347;
				this.match(TrinoSqlParser.T__13);
				this.state = 2349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===265) {
					{
					this.state = 2348;
					(localctx as RangeQuantifierContext)._atLeast = this.match(TrinoSqlParser.INTEGER_VALUE);
					}
				}

				this.state = 2351;
				this.match(TrinoSqlParser.T__3);
				this.state = 2353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===265) {
					{
					this.state = 2352;
					(localctx as RangeQuantifierContext)._atMost = this.match(TrinoSqlParser.INTEGER_VALUE);
					}
				}

				this.state = 2355;
				this.match(TrinoSqlParser.T__14);
				this.state = 2357;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 307, this._ctx) ) {
				case 1:
					{
					this.state = 2356;
					(localctx as RangeQuantifierContext)._reluctant = this.match(TrinoSqlParser.QUESTION_MARK);
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
		this.enterRule(localctx, 150, TrinoSqlParser.RULE_updateAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2361;
			this.identifier();
			this.state = 2362;
			this.match(TrinoSqlParser.EQ);
			this.state = 2363;
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
		this.enterRule(localctx, 152, TrinoSqlParser.RULE_explainOption);
		let _la: number;
		try {
			this.state = 2369;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 87:
				localctx = new ExplainFormatContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2365;
				this.match(TrinoSqlParser.FORMAT);
				this.state = 2366;
				(localctx as ExplainFormatContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===95 || _la===117 || _la===215)) {
				    (localctx as ExplainFormatContext)._value = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 225:
				localctx = new ExplainTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2367;
				this.match(TrinoSqlParser.TYPE);
				this.state = 2368;
				(localctx as ExplainTypeContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===67 || _la===113 || _la===127 || _la===236)) {
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
		this.enterRule(localctx, 154, TrinoSqlParser.RULE_transactionMode);
		let _la: number;
		try {
			this.state = 2376;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 115:
				localctx = new IsolationLevelContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2371;
				this.match(TrinoSqlParser.ISOLATION);
				this.state = 2372;
				this.match(TrinoSqlParser.LEVEL);
				this.state = 2373;
				this.levelOfIsolation();
				}
				break;
			case 177:
				localctx = new TransactionAccessModeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2374;
				this.match(TrinoSqlParser.READ);
				this.state = 2375;
				(localctx as TransactionAccessModeContext)._accessMode = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===155 || _la===246)) {
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
		this.enterRule(localctx, 156, TrinoSqlParser.RULE_levelOfIsolation);
		try {
			this.state = 2385;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 311, this._ctx) ) {
			case 1:
				localctx = new ReadUncommittedContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2378;
				this.match(TrinoSqlParser.READ);
				this.state = 2379;
				this.match(TrinoSqlParser.UNCOMMITTED);
				}
				break;
			case 2:
				localctx = new ReadCommittedContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2380;
				this.match(TrinoSqlParser.READ);
				this.state = 2381;
				this.match(TrinoSqlParser.COMMITTED);
				}
				break;
			case 3:
				localctx = new RepeatableReadContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2382;
				this.match(TrinoSqlParser.REPEATABLE);
				this.state = 2383;
				this.match(TrinoSqlParser.READ);
				}
				break;
			case 4:
				localctx = new SerializableContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2384;
				this.match(TrinoSqlParser.SERIALIZABLE);
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
		this.enterRule(localctx, 158, TrinoSqlParser.RULE_callArgument);
		try {
			this.state = 2392;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 312, this._ctx) ) {
			case 1:
				localctx = new PositionalArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2387;
				this.expression();
				}
				break;
			case 2:
				localctx = new NamedArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2388;
				this.identifier();
				this.state = 2389;
				this.match(TrinoSqlParser.T__15);
				this.state = 2390;
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
		this.enterRule(localctx, 160, TrinoSqlParser.RULE_pathElement);
		try {
			this.state = 2399;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 313, this._ctx) ) {
			case 1:
				localctx = new QualifiedArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2394;
				this.identifier();
				this.state = 2395;
				this.match(TrinoSqlParser.T__0);
				this.state = 2396;
				this.identifier();
				}
				break;
			case 2:
				localctx = new UnqualifiedArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2398;
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
		this.enterRule(localctx, 162, TrinoSqlParser.RULE_pathSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2401;
			this.pathElement();
			this.state = 2406;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 2402;
				this.match(TrinoSqlParser.T__3);
				this.state = 2403;
				this.pathElement();
				}
				}
				this.state = 2408;
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
		this.enterRule(localctx, 164, TrinoSqlParser.RULE_privilege);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2409;
			_la = this._input.LA(1);
			if(!(_la===62 || _la===108 || _la===200 || _la===232)) {
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
		this.enterRule(localctx, 166, TrinoSqlParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2411;
			this.identifier();
			this.state = 2416;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 315, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2412;
					this.match(TrinoSqlParser.T__0);
					this.state = 2413;
					this.identifier();
					}
					}
				}
				this.state = 2418;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 315, this._ctx);
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
		this.enterRule(localctx, 168, TrinoSqlParser.RULE_grantor);
		try {
			this.state = 2422;
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
			case 59:
			case 61:
			case 63:
			case 65:
			case 67:
			case 68:
			case 71:
			case 75:
			case 78:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 87:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 98:
			case 100:
			case 101:
			case 102:
			case 104:
			case 105:
			case 107:
			case 110:
			case 112:
			case 113:
			case 115:
			case 117:
			case 118:
			case 119:
			case 121:
			case 123:
			case 124:
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
			case 137:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 149:
			case 150:
			case 151:
			case 152:
			case 154:
			case 155:
			case 156:
			case 159:
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
			case 172:
			case 174:
			case 175:
			case 176:
			case 177:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 188:
			case 189:
			case 190:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
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
			case 211:
			case 213:
			case 214:
			case 215:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 224:
			case 225:
			case 227:
			case 228:
			case 230:
			case 232:
			case 233:
			case 234:
			case 236:
			case 238:
			case 239:
			case 242:
			case 244:
			case 245:
			case 246:
			case 247:
			case 248:
			case 268:
			case 269:
			case 270:
			case 271:
				localctx = new SpecifiedPrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2419;
				this.principal();
				}
				break;
			case 55:
				localctx = new CurrentUserGrantorContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2420;
				this.match(TrinoSqlParser.CURRENT_USER);
				}
				break;
			case 51:
				localctx = new CurrentRoleGrantorContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2421;
				this.match(TrinoSqlParser.CURRENT_ROLE);
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
		this.enterRule(localctx, 170, TrinoSqlParser.RULE_principal);
		try {
			this.state = 2429;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 317, this._ctx) ) {
			case 1:
				localctx = new UnspecifiedPrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2424;
				this.identifier();
				}
				break;
			case 2:
				localctx = new UserPrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2425;
				this.match(TrinoSqlParser.USER);
				this.state = 2426;
				this.identifier();
				}
				break;
			case 3:
				localctx = new RolePrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2427;
				this.match(TrinoSqlParser.ROLE);
				this.state = 2428;
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
		this.enterRule(localctx, 172, TrinoSqlParser.RULE_roles);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2431;
			this.identifier();
			this.state = 2436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 2432;
				this.match(TrinoSqlParser.T__3);
				this.state = 2433;
				this.identifier();
				}
				}
				this.state = 2438;
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
		this.enterRule(localctx, 174, TrinoSqlParser.RULE_identifier);
		try {
			this.state = 2444;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 268:
				localctx = new UnquotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2439;
				this.match(TrinoSqlParser.IDENTIFIER);
				}
				break;
			case 270:
				localctx = new QuotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2440;
				this.match(TrinoSqlParser.QUOTED_IDENTIFIER);
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
			case 59:
			case 61:
			case 63:
			case 65:
			case 67:
			case 68:
			case 71:
			case 75:
			case 78:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 87:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 98:
			case 100:
			case 101:
			case 102:
			case 104:
			case 105:
			case 107:
			case 110:
			case 112:
			case 113:
			case 115:
			case 117:
			case 118:
			case 119:
			case 121:
			case 123:
			case 124:
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
			case 137:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 149:
			case 150:
			case 151:
			case 152:
			case 154:
			case 155:
			case 156:
			case 159:
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
			case 172:
			case 174:
			case 175:
			case 176:
			case 177:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 188:
			case 189:
			case 190:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
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
			case 211:
			case 213:
			case 214:
			case 215:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 224:
			case 225:
			case 227:
			case 228:
			case 230:
			case 232:
			case 233:
			case 234:
			case 236:
			case 238:
			case 239:
			case 242:
			case 244:
			case 245:
			case 246:
			case 247:
			case 248:
				localctx = new UnquotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2441;
				this.nonReserved();
				}
				break;
			case 271:
				localctx = new BackQuotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2442;
				this.match(TrinoSqlParser.BACKQUOTED_IDENTIFIER);
				}
				break;
			case 269:
				localctx = new DigitIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2443;
				this.match(TrinoSqlParser.DIGIT_IDENTIFIER);
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
		this.enterRule(localctx, 176, TrinoSqlParser.RULE_number);
		let _la: number;
		try {
			this.state = 2458;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 323, this._ctx) ) {
			case 1:
				localctx = new DecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2447;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===256) {
					{
					this.state = 2446;
					this.match(TrinoSqlParser.MINUS);
					}
				}

				this.state = 2449;
				this.match(TrinoSqlParser.DECIMAL_VALUE);
				}
				break;
			case 2:
				localctx = new DoubleLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===256) {
					{
					this.state = 2450;
					this.match(TrinoSqlParser.MINUS);
					}
				}

				this.state = 2453;
				this.match(TrinoSqlParser.DOUBLE_VALUE);
				}
				break;
			case 3:
				localctx = new IntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===256) {
					{
					this.state = 2454;
					this.match(TrinoSqlParser.MINUS);
					}
				}

				this.state = 2457;
				this.match(TrinoSqlParser.INTEGER_VALUE);
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
		this.enterRule(localctx, 178, TrinoSqlParser.RULE_nonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2460;
			_la = this._input.LA(1);
			if(!(((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 3192429231) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 3134381375) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3162472435) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 4286316499) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 4009750519) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 525170103) !== 0))) {
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
		case 20:
			return this.queryTerm_sempred(localctx as QueryTermContext, predIndex);
		case 32:
			return this.relation_sempred(localctx as RelationContext, predIndex);
		case 48:
			return this.booleanExpression_sempred(localctx as BooleanExpressionContext, predIndex);
		case 50:
			return this.valueExpression_sempred(localctx as ValueExpressionContext, predIndex);
		case 51:
			return this.primaryExpression_sempred(localctx as PrimaryExpressionContext, predIndex);
		case 62:
			return this.type_sempred(localctx as TypeContext, predIndex);
		case 72:
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

	public static readonly _serializedATN: number[] = [4,1,277,2463,2,0,7,0,
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
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,1,0,5,0,182,8,0,10,0,12,0,185,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,194,
	8,1,1,2,1,2,3,2,198,8,2,1,3,1,3,3,3,202,8,3,1,4,1,4,3,4,206,8,4,1,5,1,5,
	3,5,210,8,5,1,6,1,6,3,6,214,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,3,7,229,8,7,1,7,1,7,1,7,3,7,234,8,7,1,7,1,7,3,7,238,8,7,1,7,
	1,7,1,7,1,7,3,7,244,8,7,1,7,1,7,3,7,248,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,269,8,7,1,7,1,7,3,7,
	273,8,7,1,7,1,7,3,7,277,8,7,1,7,1,7,3,7,281,8,7,1,7,1,7,1,7,1,7,1,7,1,7,
	3,7,289,8,7,1,7,1,7,3,7,293,8,7,1,7,3,7,296,8,7,1,7,1,7,1,7,1,7,1,7,3,7,
	303,8,7,1,7,1,7,1,7,1,7,1,7,5,7,310,8,7,10,7,12,7,313,9,7,1,7,1,7,1,7,3,
	7,318,8,7,1,7,1,7,3,7,322,8,7,1,7,1,7,1,7,1,7,3,7,328,8,7,1,7,1,7,1,7,1,
	7,1,7,3,7,335,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,344,8,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,3,7,353,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
	7,3,7,367,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,376,8,7,1,7,1,7,1,7,1,7,3,
	7,382,8,7,1,7,1,7,1,7,1,7,1,7,3,7,389,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
	7,3,7,399,8,7,1,7,1,7,1,7,1,7,1,7,3,7,406,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,
	7,414,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,422,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
	7,5,7,449,8,7,10,7,12,7,452,9,7,3,7,454,8,7,1,7,3,7,457,8,7,1,7,1,7,3,7,
	461,8,7,1,7,1,7,1,7,1,7,3,7,467,8,7,1,7,1,7,1,7,3,7,472,8,7,1,7,1,7,1,7,
	1,7,1,7,3,7,479,8,7,1,7,1,7,1,7,3,7,484,8,7,1,7,1,7,3,7,488,8,7,1,7,1,7,
	1,7,1,7,1,7,1,7,3,7,496,8,7,1,7,1,7,1,7,1,7,3,7,502,8,7,1,7,1,7,3,7,506,
	8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,520,8,7,1,7,1,7,
	1,7,1,7,1,7,1,7,3,7,528,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,3,7,547,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,570,8,7,10,7,12,7,573,
	9,7,3,7,575,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,585,8,7,1,7,1,7,3,7,
	589,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,600,8,7,10,7,12,7,603,9,
	7,1,7,1,7,1,7,3,7,608,8,7,1,7,1,7,1,7,3,7,613,8,7,1,7,1,7,3,7,617,8,7,1,
	7,1,7,1,7,1,7,3,7,623,8,7,1,7,1,7,1,7,1,7,1,7,5,7,630,8,7,10,7,12,7,633,
	9,7,1,7,1,7,1,7,3,7,638,8,7,1,7,1,7,3,7,642,8,7,1,7,1,7,1,7,1,7,1,7,3,7,
	649,8,7,1,7,1,7,3,7,653,8,7,1,7,1,7,1,7,1,7,5,7,659,8,7,10,7,12,7,662,9,
	7,1,7,1,7,3,7,666,8,7,1,7,1,7,3,7,670,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,678,
	8,7,1,7,1,7,1,7,1,7,5,7,684,8,7,10,7,12,7,687,9,7,1,7,1,7,3,7,691,8,7,1,
	7,1,7,3,7,695,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,705,8,7,1,7,1,7,1,
	7,5,7,710,8,7,10,7,12,7,713,9,7,1,7,1,7,3,7,717,8,7,1,7,1,7,3,7,721,8,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,731,8,7,1,7,3,7,734,8,7,1,7,1,7,3,7,
	738,8,7,1,7,3,7,741,8,7,1,7,1,7,1,7,1,7,5,7,747,8,7,10,7,12,7,750,9,7,1,
	7,1,7,3,7,754,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,778,8,7,1,7,1,7,1,7,1,7,3,7,784,8,
	7,3,7,786,8,7,1,7,1,7,1,7,1,7,3,7,792,8,7,1,7,1,7,1,7,1,7,3,7,798,8,7,3,
	7,800,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,808,8,7,3,7,810,8,7,1,7,1,7,1,7,1,
	7,3,7,816,8,7,1,7,1,7,1,7,1,7,3,7,822,8,7,3,7,824,8,7,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,839,8,7,1,7,1,7,1,7,3,7,844,8,7,1,
	7,1,7,1,7,1,7,1,7,3,7,851,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,
	7,863,8,7,3,7,865,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,873,8,7,3,7,875,8,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,891,8,7,10,7,
	12,7,894,9,7,3,7,896,8,7,1,7,1,7,3,7,900,8,7,1,7,1,7,3,7,904,8,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,920,8,7,10,7,12,7,
	923,9,7,3,7,925,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,3,7,941,8,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,949,8,7,10,7,12,7,952,9,7,1,
	7,1,7,3,7,956,8,7,1,7,1,7,1,7,1,7,3,7,962,8,7,1,7,3,7,965,8,7,1,7,1,7,1,
	7,1,7,1,7,4,7,972,8,7,11,7,12,7,973,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,3,7,986,8,7,1,8,3,8,989,8,8,1,8,1,8,1,9,1,9,3,9,995,8,9,1,9,1,9,1,9,
	5,9,1000,8,9,10,9,12,9,1003,9,9,1,10,1,10,3,10,1007,8,10,1,11,1,11,1,11,
	1,11,3,11,1013,8,11,1,11,1,11,3,11,1017,8,11,1,11,1,11,3,11,1021,8,11,1,
	12,1,12,1,12,1,12,3,12,1027,8,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,5,14,
	1036,8,14,10,14,12,14,1039,9,14,1,15,1,15,1,15,1,15,1,16,1,16,3,16,1047,
	8,16,1,17,1,17,1,17,1,17,1,17,1,17,5,17,1055,8,17,10,17,12,17,1058,9,17,
	3,17,1060,8,17,1,17,1,17,1,17,3,17,1065,8,17,3,17,1067,8,17,1,17,1,17,1,
	17,1,17,1,17,3,17,1074,8,17,1,17,1,17,1,17,1,17,3,17,1080,8,17,3,17,1082,
	8,17,1,18,1,18,3,18,1086,8,18,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,3,
	20,1096,8,20,1,20,1,20,1,20,1,20,3,20,1102,8,20,1,20,5,20,1105,8,20,10,
	20,12,20,1108,9,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,5,21,1117,8,21,10,
	21,12,21,1120,9,21,1,21,1,21,1,21,1,21,3,21,1126,8,21,1,22,1,22,3,22,1130,
	8,22,1,22,1,22,3,22,1134,8,22,1,23,1,23,3,23,1138,8,23,1,23,1,23,1,23,5,
	23,1143,8,23,10,23,12,23,1146,9,23,1,23,1,23,1,23,1,23,5,23,1152,8,23,10,
	23,12,23,1155,9,23,3,23,1157,8,23,1,23,1,23,3,23,1161,8,23,1,23,1,23,1,
	23,3,23,1166,8,23,1,23,1,23,3,23,1170,8,23,1,23,1,23,1,23,1,23,5,23,1176,
	8,23,10,23,12,23,1179,9,23,3,23,1181,8,23,1,24,3,24,1184,8,24,1,24,1,24,
	1,24,5,24,1189,8,24,10,24,12,24,1192,9,24,1,25,1,25,1,25,1,25,1,25,1,25,
	5,25,1200,8,25,10,25,12,25,1203,9,25,3,25,1205,8,25,1,25,1,25,1,25,1,25,
	1,25,1,25,5,25,1213,8,25,10,25,12,25,1216,9,25,3,25,1218,8,25,1,25,1,25,
	1,25,1,25,1,25,1,25,1,25,5,25,1227,8,25,10,25,12,25,1230,9,25,1,25,1,25,
	3,25,1234,8,25,1,26,1,26,1,26,1,26,5,26,1240,8,26,10,26,12,26,1243,9,26,
	3,26,1245,8,26,1,26,1,26,3,26,1249,8,26,1,27,1,27,1,27,1,27,1,27,1,27,1,
	28,3,28,1258,8,28,1,28,1,28,1,28,1,28,1,28,5,28,1265,8,28,10,28,12,28,1268,
	9,28,3,28,1270,8,28,1,28,1,28,1,28,1,28,1,28,5,28,1277,8,28,10,28,12,28,
	1280,9,28,3,28,1282,8,28,1,28,3,28,1285,8,28,1,29,1,29,3,29,1289,8,29,1,
	29,1,29,1,29,1,29,1,29,1,30,1,30,1,31,1,31,3,31,1300,8,31,1,31,3,31,1303,
	8,31,1,31,1,31,1,31,1,31,1,31,3,31,1310,8,31,1,31,3,31,1313,8,31,1,32,1,
	32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
	1,32,3,32,1332,8,32,5,32,1334,8,32,10,32,12,32,1337,9,32,1,33,3,33,1340,
	8,33,1,33,1,33,3,33,1344,8,33,1,33,1,33,3,33,1348,8,33,1,33,1,33,3,33,1352,
	8,33,3,33,1354,8,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,5,34,1363,8,34,10,
	34,12,34,1366,9,34,1,34,1,34,3,34,1370,8,34,1,35,1,35,1,35,1,35,1,35,1,
	35,1,35,3,35,1379,8,35,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,
	5,37,1391,8,37,10,37,12,37,1394,9,37,3,37,1396,8,37,1,37,1,37,1,37,1,37,
	1,37,5,37,1403,8,37,10,37,12,37,1406,9,37,3,37,1408,8,37,1,37,1,37,1,37,
	1,37,5,37,1414,8,37,10,37,12,37,1417,9,37,3,37,1419,8,37,1,37,3,37,1422,
	8,37,1,37,1,37,1,37,3,37,1427,8,37,1,37,3,37,1430,8,37,1,37,1,37,1,37,1,
	37,1,37,1,37,1,37,1,37,5,37,1440,8,37,10,37,12,37,1443,9,37,3,37,1445,8,
	37,1,37,1,37,1,37,1,37,5,37,1451,8,37,10,37,12,37,1454,9,37,1,37,1,37,3,
	37,1458,8,37,1,37,1,37,3,37,1462,8,37,3,37,1464,8,37,3,37,1466,8,37,1,38,
	1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,1481,8,
	39,3,39,1483,8,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,3,40,1494,
	8,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,
	41,1,41,1,41,1,41,1,41,1,41,3,41,1515,8,41,1,42,1,42,1,42,1,42,1,42,1,42,
	5,42,1523,8,42,10,42,12,42,1526,9,42,1,42,1,42,1,43,1,43,1,43,1,43,1,44,
	1,44,3,44,1536,8,44,1,44,1,44,3,44,1540,8,44,3,44,1542,8,44,1,45,1,45,1,
	45,1,45,5,45,1548,8,45,10,45,12,45,1551,9,45,1,45,1,45,1,46,1,46,1,46,1,
	46,1,46,1,46,1,46,1,46,1,46,1,46,5,46,1565,8,46,10,46,12,46,1568,9,46,1,
	46,1,46,1,46,3,46,1573,8,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,
	3,46,1584,8,46,1,47,1,47,1,48,1,48,1,48,3,48,1591,8,48,1,48,1,48,3,48,1595,
	8,48,1,48,1,48,1,48,1,48,1,48,1,48,5,48,1603,8,48,10,48,12,48,1606,9,48,
	1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,1618,8,49,1,49,1,
	49,1,49,1,49,1,49,1,49,3,49,1626,8,49,1,49,1,49,1,49,1,49,1,49,5,49,1633,
	8,49,10,49,12,49,1636,9,49,1,49,1,49,1,49,3,49,1641,8,49,1,49,1,49,1,49,
	1,49,1,49,1,49,3,49,1649,8,49,1,49,1,49,1,49,1,49,3,49,1655,8,49,1,49,1,
	49,3,49,1659,8,49,1,49,1,49,1,49,3,49,1664,8,49,1,49,1,49,1,49,3,49,1669,
	8,49,1,50,1,50,1,50,1,50,3,50,1675,8,50,1,50,1,50,1,50,1,50,1,50,1,50,1,
	50,1,50,1,50,1,50,1,50,1,50,5,50,1689,8,50,10,50,12,50,1692,9,50,1,51,1,
	51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,
	1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,4,51,1719,8,51,11,51,12,51,
	1720,1,51,1,51,1,51,1,51,1,51,1,51,1,51,5,51,1730,8,51,10,51,12,51,1733,
	9,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,3,51,1742,8,51,1,51,3,51,1745,8,
	51,1,51,3,51,1748,8,51,1,51,1,51,1,51,3,51,1753,8,51,1,51,1,51,1,51,5,51,
	1758,8,51,10,51,12,51,1761,9,51,3,51,1763,8,51,1,51,1,51,1,51,1,51,1,51,
	5,51,1770,8,51,10,51,12,51,1773,9,51,3,51,1775,8,51,1,51,1,51,3,51,1779,
	8,51,1,51,3,51,1782,8,51,1,51,3,51,1785,8,51,1,51,1,51,1,51,1,51,1,51,1,
	51,1,51,1,51,1,51,1,51,1,51,5,51,1798,8,51,10,51,12,51,1801,9,51,3,51,1803,
	8,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,
	51,1,51,4,51,1820,8,51,11,51,12,51,1821,1,51,1,51,3,51,1826,8,51,1,51,1,
	51,1,51,1,51,4,51,1832,8,51,11,51,12,51,1833,1,51,1,51,3,51,1838,8,51,1,
	51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,
	1,51,1,51,1,51,1,51,1,51,1,51,5,51,1861,8,51,10,51,12,51,1864,9,51,3,51,
	1866,8,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,3,51,1875,8,51,1,51,1,51,1,
	51,1,51,3,51,1881,8,51,1,51,1,51,1,51,1,51,3,51,1887,8,51,1,51,1,51,1,51,
	1,51,3,51,1893,8,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,
	51,3,51,1906,8,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,3,51,1915,8,51,1,51,
	1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,
	51,1,51,1,51,5,51,1935,8,51,10,51,12,51,1938,9,51,3,51,1940,8,51,1,51,3,
	51,1943,8,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,5,51,1953,8,51,10,
	51,12,51,1956,9,51,1,52,1,52,1,53,1,53,1,53,1,53,3,53,1964,8,53,1,54,1,
	54,1,54,1,54,3,54,1970,8,54,3,54,1972,8,54,1,55,1,55,1,55,1,55,1,55,1,55,
	3,55,1980,8,55,1,56,1,56,1,57,1,57,1,58,1,58,1,59,1,59,3,59,1990,8,59,1,
	59,1,59,1,59,1,59,3,59,1996,8,59,1,60,1,60,1,61,1,61,1,62,1,62,1,62,1,62,
	1,62,1,62,5,62,2008,8,62,10,62,12,62,2011,9,62,1,62,1,62,1,62,1,62,1,62,
	1,62,3,62,2019,8,62,1,62,1,62,1,62,1,62,1,62,3,62,2026,8,62,1,62,1,62,1,
	62,3,62,2031,8,62,1,62,1,62,1,62,1,62,1,62,3,62,2038,8,62,1,62,1,62,1,62,
	1,62,1,62,1,62,1,62,1,62,3,62,2048,8,62,1,62,1,62,1,62,3,62,2053,8,62,1,
	62,1,62,1,62,1,62,1,62,3,62,2060,8,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,
	1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,
	62,5,62,2084,8,62,10,62,12,62,2087,9,62,1,62,1,62,3,62,2091,8,62,3,62,2093,
	8,62,1,62,1,62,1,62,1,62,1,62,3,62,2100,8,62,5,62,2102,8,62,10,62,12,62,
	2105,9,62,1,63,1,63,1,63,1,63,3,63,2111,8,63,1,64,1,64,3,64,2115,8,64,1,
	65,1,65,1,65,1,65,1,65,1,66,1,66,1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,67,
	3,67,2132,8,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,5,
	67,2145,8,67,10,67,12,67,2148,9,67,1,67,1,67,1,67,1,67,3,67,2154,8,67,1,
	67,1,67,1,67,1,67,1,67,1,67,1,67,3,67,2163,8,67,1,67,1,67,1,67,1,67,1,67,
	1,67,5,67,2171,8,67,10,67,12,67,2174,9,67,1,67,1,67,3,67,2178,8,67,1,67,
	1,67,1,67,1,67,1,67,5,67,2185,8,67,10,67,12,67,2188,9,67,1,67,1,67,3,67,
	2192,8,67,1,68,1,68,1,68,1,68,1,68,1,68,3,68,2200,8,68,1,69,1,69,1,69,1,
	69,5,69,2206,8,69,10,69,12,69,2209,9,69,3,69,2211,8,69,1,69,1,69,1,69,1,
	69,3,69,2217,8,69,1,69,3,69,2220,8,69,1,69,1,69,1,69,1,69,1,69,3,69,2227,
	8,69,1,69,1,69,1,69,1,69,5,69,2233,8,69,10,69,12,69,2236,9,69,3,69,2238,
	8,69,1,69,1,69,1,69,1,69,5,69,2244,8,69,10,69,12,69,2247,9,69,3,69,2249,
	8,69,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,
	70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,3,70,2275,8,70,1,71,
	1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,3,71,2286,8,71,1,72,1,72,1,72,3,
	72,2291,8,72,1,72,1,72,1,72,1,72,1,72,5,72,2298,8,72,10,72,12,72,2301,9,
	72,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,5,73,2311,8,73,10,73,12,73,2314,
	9,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,3,73,2328,
	8,73,1,74,1,74,3,74,2332,8,74,1,74,1,74,3,74,2336,8,74,1,74,1,74,3,74,2340,
	8,74,1,74,1,74,1,74,1,74,3,74,2346,8,74,1,74,1,74,3,74,2350,8,74,1,74,1,
	74,3,74,2354,8,74,1,74,1,74,3,74,2358,8,74,3,74,2360,8,74,1,75,1,75,1,75,
	1,75,1,76,1,76,1,76,1,76,3,76,2370,8,76,1,77,1,77,1,77,1,77,1,77,3,77,2377,
	8,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,3,78,2386,8,78,1,79,1,79,1,79,1,
	79,1,79,3,79,2393,8,79,1,80,1,80,1,80,1,80,1,80,3,80,2400,8,80,1,81,1,81,
	1,81,5,81,2405,8,81,10,81,12,81,2408,9,81,1,82,1,82,1,83,1,83,1,83,5,83,
	2415,8,83,10,83,12,83,2418,9,83,1,84,1,84,1,84,3,84,2423,8,84,1,85,1,85,
	1,85,1,85,1,85,3,85,2430,8,85,1,86,1,86,1,86,5,86,2435,8,86,10,86,12,86,
	2438,9,86,1,87,1,87,1,87,1,87,1,87,3,87,2445,8,87,1,88,3,88,2448,8,88,1,
	88,1,88,3,88,2452,8,88,1,88,1,88,3,88,2456,8,88,1,88,3,88,2459,8,88,1,89,
	1,89,1,89,0,7,40,64,96,100,102,124,144,90,0,2,4,6,8,10,12,14,16,18,20,22,
	24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
	72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,
	116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,
	152,154,156,158,160,162,164,166,168,170,172,174,176,178,0,28,2,0,34,34,
	185,185,2,0,61,61,112,112,2,0,195,195,212,212,2,0,88,88,103,103,2,0,75,
	75,104,104,1,0,192,193,2,0,84,84,139,139,2,0,261,261,265,265,2,0,74,74,
	229,229,2,0,27,27,63,63,2,0,84,84,118,118,2,0,20,20,66,66,2,0,30,30,211,
	211,2,0,105,105,199,199,1,0,255,256,1,0,257,259,2,0,83,83,194,194,1,0,249,
	254,3,0,20,20,24,24,206,206,2,0,80,80,223,223,5,0,58,58,100,100,136,137,
	197,197,247,247,1,0,140,143,2,0,85,85,171,171,3,0,95,95,117,117,215,215,
	4,0,67,67,113,113,127,127,236,236,2,0,155,155,246,246,4,0,62,62,108,108,
	200,200,232,232,49,0,17,20,22,22,24,25,27,30,33,34,37,42,47,47,56,59,61,
	61,63,63,65,65,67,68,71,71,75,75,78,78,81,85,87,87,90,95,98,98,100,102,
	104,105,107,107,110,110,112,113,115,115,117,119,121,121,123,124,127,137,
	139,145,149,152,154,156,159,159,161,172,174,177,179,186,188,190,192,199,
	201,211,213,215,217,222,224,225,227,228,230,230,232,234,236,236,238,239,
	242,242,244,248,2865,0,183,1,0,0,0,2,193,1,0,0,0,4,195,1,0,0,0,6,199,1,
	0,0,0,8,203,1,0,0,0,10,207,1,0,0,0,12,211,1,0,0,0,14,985,1,0,0,0,16,988,
	1,0,0,0,18,992,1,0,0,0,20,1006,1,0,0,0,22,1008,1,0,0,0,24,1022,1,0,0,0,
	26,1028,1,0,0,0,28,1032,1,0,0,0,30,1040,1,0,0,0,32,1046,1,0,0,0,34,1048,
	1,0,0,0,36,1085,1,0,0,0,38,1087,1,0,0,0,40,1089,1,0,0,0,42,1125,1,0,0,0,
	44,1127,1,0,0,0,46,1135,1,0,0,0,48,1183,1,0,0,0,50,1233,1,0,0,0,52,1248,
	1,0,0,0,54,1250,1,0,0,0,56,1257,1,0,0,0,58,1286,1,0,0,0,60,1295,1,0,0,0,
	62,1312,1,0,0,0,64,1314,1,0,0,0,66,1353,1,0,0,0,68,1369,1,0,0,0,70,1371,
	1,0,0,0,72,1380,1,0,0,0,74,1382,1,0,0,0,76,1467,1,0,0,0,78,1482,1,0,0,0,
	80,1493,1,0,0,0,82,1514,1,0,0,0,84,1516,1,0,0,0,86,1529,1,0,0,0,88,1533,
	1,0,0,0,90,1543,1,0,0,0,92,1583,1,0,0,0,94,1585,1,0,0,0,96,1594,1,0,0,0,
	98,1668,1,0,0,0,100,1674,1,0,0,0,102,1942,1,0,0,0,104,1957,1,0,0,0,106,
	1963,1,0,0,0,108,1971,1,0,0,0,110,1979,1,0,0,0,112,1981,1,0,0,0,114,1983,
	1,0,0,0,116,1985,1,0,0,0,118,1987,1,0,0,0,120,1997,1,0,0,0,122,1999,1,0,
	0,0,124,2092,1,0,0,0,126,2110,1,0,0,0,128,2114,1,0,0,0,130,2116,1,0,0,0,
	132,2121,1,0,0,0,134,2191,1,0,0,0,136,2193,1,0,0,0,138,2210,1,0,0,0,140,
	2274,1,0,0,0,142,2285,1,0,0,0,144,2287,1,0,0,0,146,2327,1,0,0,0,148,2359,
	1,0,0,0,150,2361,1,0,0,0,152,2369,1,0,0,0,154,2376,1,0,0,0,156,2385,1,0,
	0,0,158,2392,1,0,0,0,160,2399,1,0,0,0,162,2401,1,0,0,0,164,2409,1,0,0,0,
	166,2411,1,0,0,0,168,2422,1,0,0,0,170,2429,1,0,0,0,172,2431,1,0,0,0,174,
	2444,1,0,0,0,176,2458,1,0,0,0,178,2460,1,0,0,0,180,182,3,2,1,0,181,180,
	1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,186,1,0,0,0,
	185,183,1,0,0,0,186,187,5,0,0,1,187,1,1,0,0,0,188,194,3,4,2,0,189,194,3,
	6,3,0,190,194,3,8,4,0,191,194,3,10,5,0,192,194,3,12,6,0,193,188,1,0,0,0,
	193,189,1,0,0,0,193,190,1,0,0,0,193,191,1,0,0,0,193,192,1,0,0,0,194,3,1,
	0,0,0,195,197,3,14,7,0,196,198,5,272,0,0,197,196,1,0,0,0,197,198,1,0,0,
	0,198,5,1,0,0,0,199,201,3,94,47,0,200,202,5,272,0,0,201,200,1,0,0,0,201,
	202,1,0,0,0,202,7,1,0,0,0,203,205,3,162,81,0,204,206,5,272,0,0,205,204,
	1,0,0,0,205,206,1,0,0,0,206,9,1,0,0,0,207,209,3,124,62,0,208,210,5,272,
	0,0,209,208,1,0,0,0,209,210,1,0,0,0,210,11,1,0,0,0,211,213,3,144,72,0,212,
	214,5,272,0,0,213,212,1,0,0,0,213,214,1,0,0,0,214,13,1,0,0,0,215,986,3,
	16,8,0,216,217,5,233,0,0,217,986,3,174,87,0,218,219,5,233,0,0,219,220,3,
	174,87,0,220,221,5,1,0,0,221,222,3,174,87,0,222,986,1,0,0,0,223,224,5,44,
	0,0,224,228,5,195,0,0,225,226,5,101,0,0,226,227,5,147,0,0,227,229,5,77,
	0,0,228,225,1,0,0,0,228,229,1,0,0,0,229,230,1,0,0,0,230,233,3,166,83,0,
	231,232,5,29,0,0,232,234,3,170,85,0,233,231,1,0,0,0,233,234,1,0,0,0,234,
	237,1,0,0,0,235,236,5,243,0,0,236,238,3,26,13,0,237,235,1,0,0,0,237,238,
	1,0,0,0,238,986,1,0,0,0,239,240,5,69,0,0,240,243,5,195,0,0,241,242,5,101,
	0,0,242,244,5,77,0,0,243,241,1,0,0,0,243,244,1,0,0,0,244,245,1,0,0,0,245,
	247,3,166,83,0,246,248,7,0,0,0,247,246,1,0,0,0,247,248,1,0,0,0,248,986,
	1,0,0,0,249,250,5,21,0,0,250,251,5,195,0,0,251,252,3,166,83,0,252,253,5,
	180,0,0,253,254,5,220,0,0,254,255,3,174,87,0,255,986,1,0,0,0,256,257,5,
	21,0,0,257,258,5,195,0,0,258,259,3,166,83,0,259,260,5,203,0,0,260,261,5,
	29,0,0,261,262,3,170,85,0,262,986,1,0,0,0,263,264,5,44,0,0,264,268,5,212,
	0,0,265,266,5,101,0,0,266,267,5,147,0,0,267,269,5,77,0,0,268,265,1,0,0,
	0,268,269,1,0,0,0,269,270,1,0,0,0,270,272,3,166,83,0,271,273,3,90,45,0,
	272,271,1,0,0,0,272,273,1,0,0,0,273,276,1,0,0,0,274,275,5,40,0,0,275,277,
	3,108,54,0,276,274,1,0,0,0,276,277,1,0,0,0,277,280,1,0,0,0,278,279,5,243,
	0,0,279,281,3,26,13,0,280,278,1,0,0,0,280,281,1,0,0,0,281,282,1,0,0,0,282,
	288,5,26,0,0,283,289,3,16,8,0,284,285,5,2,0,0,285,286,3,16,8,0,286,287,
	5,3,0,0,287,289,1,0,0,0,288,283,1,0,0,0,288,284,1,0,0,0,289,295,1,0,0,0,
	290,292,5,243,0,0,291,293,5,144,0,0,292,291,1,0,0,0,292,293,1,0,0,0,293,
	294,1,0,0,0,294,296,5,56,0,0,295,290,1,0,0,0,295,296,1,0,0,0,296,986,1,
	0,0,0,297,298,5,44,0,0,298,302,5,212,0,0,299,300,5,101,0,0,300,301,5,147,
	0,0,301,303,5,77,0,0,302,299,1,0,0,0,302,303,1,0,0,0,303,304,1,0,0,0,304,
	305,3,166,83,0,305,306,5,2,0,0,306,311,3,20,10,0,307,308,5,4,0,0,308,310,
	3,20,10,0,309,307,1,0,0,0,310,313,1,0,0,0,311,309,1,0,0,0,311,312,1,0,0,
	0,312,314,1,0,0,0,313,311,1,0,0,0,314,317,5,3,0,0,315,316,5,40,0,0,316,
	318,3,108,54,0,317,315,1,0,0,0,317,318,1,0,0,0,318,321,1,0,0,0,319,320,
	5,243,0,0,320,322,3,26,13,0,321,319,1,0,0,0,321,322,1,0,0,0,322,986,1,0,
	0,0,323,324,5,69,0,0,324,327,5,212,0,0,325,326,5,101,0,0,326,328,5,77,0,
	0,327,325,1,0,0,0,327,328,1,0,0,0,328,329,1,0,0,0,329,986,3,166,83,0,330,
	331,5,108,0,0,331,332,5,111,0,0,332,334,3,166,83,0,333,335,3,90,45,0,334,
	333,1,0,0,0,334,335,1,0,0,0,335,336,1,0,0,0,336,337,3,16,8,0,337,986,1,
	0,0,0,338,339,5,62,0,0,339,340,5,88,0,0,340,343,3,166,83,0,341,342,5,241,
	0,0,342,344,3,96,48,0,343,341,1,0,0,0,343,344,1,0,0,0,344,986,1,0,0,0,345,
	346,5,222,0,0,346,347,5,212,0,0,347,986,3,166,83,0,348,349,5,21,0,0,349,
	352,5,212,0,0,350,351,5,101,0,0,351,353,5,77,0,0,352,350,1,0,0,0,352,353,
	1,0,0,0,353,354,1,0,0,0,354,355,3,166,83,0,355,356,5,180,0,0,356,357,5,
	220,0,0,357,358,3,166,83,0,358,986,1,0,0,0,359,360,5,40,0,0,360,361,5,153,
	0,0,361,362,5,212,0,0,362,363,3,166,83,0,363,366,5,114,0,0,364,367,3,108,
	54,0,365,367,5,148,0,0,366,364,1,0,0,0,366,365,1,0,0,0,367,986,1,0,0,0,
	368,369,5,40,0,0,369,370,5,153,0,0,370,371,5,38,0,0,371,372,3,166,83,0,
	372,375,5,114,0,0,373,376,3,108,54,0,374,376,5,148,0,0,375,373,1,0,0,0,
	375,374,1,0,0,0,376,986,1,0,0,0,377,378,5,21,0,0,378,381,5,212,0,0,379,
	380,5,101,0,0,380,382,5,77,0,0,381,379,1,0,0,0,381,382,1,0,0,0,382,383,
	1,0,0,0,383,384,3,166,83,0,384,385,5,180,0,0,385,388,5,38,0,0,386,387,5,
	101,0,0,387,389,5,77,0,0,388,386,1,0,0,0,388,389,1,0,0,0,389,390,1,0,0,
	0,390,391,3,174,87,0,391,392,5,220,0,0,392,393,3,174,87,0,393,986,1,0,0,
	0,394,395,5,21,0,0,395,398,5,212,0,0,396,397,5,101,0,0,397,399,5,77,0,0,
	398,396,1,0,0,0,398,399,1,0,0,0,399,400,1,0,0,0,400,401,3,166,83,0,401,
	402,5,69,0,0,402,405,5,38,0,0,403,404,5,101,0,0,404,406,5,77,0,0,405,403,
	1,0,0,0,405,406,1,0,0,0,406,407,1,0,0,0,407,408,3,166,83,0,408,986,1,0,
	0,0,409,410,5,21,0,0,410,413,5,212,0,0,411,412,5,101,0,0,412,414,5,77,0,
	0,413,411,1,0,0,0,413,414,1,0,0,0,414,415,1,0,0,0,415,416,3,166,83,0,416,
	417,5,17,0,0,417,421,5,38,0,0,418,419,5,101,0,0,419,420,5,147,0,0,420,422,
	5,77,0,0,421,418,1,0,0,0,421,422,1,0,0,0,422,423,1,0,0,0,423,424,3,22,11,
	0,424,986,1,0,0,0,425,426,5,21,0,0,426,427,5,212,0,0,427,428,3,166,83,0,
	428,429,5,203,0,0,429,430,5,29,0,0,430,431,3,170,85,0,431,986,1,0,0,0,432,
	433,5,21,0,0,433,434,5,212,0,0,434,435,3,166,83,0,435,436,5,203,0,0,436,
	437,5,175,0,0,437,438,3,28,14,0,438,986,1,0,0,0,439,440,5,21,0,0,440,441,
	5,212,0,0,441,442,3,166,83,0,442,443,5,76,0,0,443,456,3,174,87,0,444,453,
	5,2,0,0,445,450,3,158,79,0,446,447,5,4,0,0,447,449,3,158,79,0,448,446,1,
	0,0,0,449,452,1,0,0,0,450,448,1,0,0,0,450,451,1,0,0,0,451,454,1,0,0,0,452,
	450,1,0,0,0,453,445,1,0,0,0,453,454,1,0,0,0,454,455,1,0,0,0,455,457,5,3,
	0,0,456,444,1,0,0,0,456,457,1,0,0,0,457,460,1,0,0,0,458,459,5,241,0,0,459,
	461,3,96,48,0,460,458,1,0,0,0,460,461,1,0,0,0,461,986,1,0,0,0,462,463,5,
	22,0,0,463,466,3,166,83,0,464,465,5,243,0,0,465,467,3,26,13,0,466,464,1,
	0,0,0,466,467,1,0,0,0,467,986,1,0,0,0,468,471,5,44,0,0,469,470,5,157,0,
	0,470,472,5,182,0,0,471,469,1,0,0,0,471,472,1,0,0,0,472,473,1,0,0,0,473,
	474,5,133,0,0,474,478,5,239,0,0,475,476,5,101,0,0,476,477,5,147,0,0,477,
	479,5,77,0,0,478,475,1,0,0,0,478,479,1,0,0,0,479,480,1,0,0,0,480,483,3,
	166,83,0,481,482,5,40,0,0,482,484,3,108,54,0,483,481,1,0,0,0,483,484,1,
	0,0,0,484,487,1,0,0,0,485,486,5,243,0,0,486,488,3,26,13,0,487,485,1,0,0,
	0,487,488,1,0,0,0,488,489,1,0,0,0,489,490,5,26,0,0,490,491,3,16,8,0,491,
	986,1,0,0,0,492,495,5,44,0,0,493,494,5,157,0,0,494,496,5,182,0,0,495,493,
	1,0,0,0,495,496,1,0,0,0,496,497,1,0,0,0,497,498,5,239,0,0,498,501,3,166,
	83,0,499,500,5,40,0,0,500,502,3,108,54,0,501,499,1,0,0,0,501,502,1,0,0,
	0,502,505,1,0,0,0,503,504,5,198,0,0,504,506,7,1,0,0,505,503,1,0,0,0,505,
	506,1,0,0,0,506,507,1,0,0,0,507,508,5,26,0,0,508,509,3,16,8,0,509,986,1,
	0,0,0,510,511,5,179,0,0,511,512,5,133,0,0,512,513,5,239,0,0,513,986,3,166,
	83,0,514,515,5,69,0,0,515,516,5,133,0,0,516,519,5,239,0,0,517,518,5,101,
	0,0,518,520,5,77,0,0,519,517,1,0,0,0,519,520,1,0,0,0,520,521,1,0,0,0,521,
	986,3,166,83,0,522,523,5,21,0,0,523,524,5,133,0,0,524,527,5,239,0,0,525,
	526,5,101,0,0,526,528,5,77,0,0,527,525,1,0,0,0,527,528,1,0,0,0,528,529,
	1,0,0,0,529,530,3,166,83,0,530,531,5,180,0,0,531,532,5,220,0,0,532,533,
	3,166,83,0,533,986,1,0,0,0,534,535,5,21,0,0,535,536,5,133,0,0,536,537,5,
	239,0,0,537,538,3,166,83,0,538,539,5,203,0,0,539,540,5,175,0,0,540,541,
	3,28,14,0,541,986,1,0,0,0,542,543,5,69,0,0,543,546,5,239,0,0,544,545,5,
	101,0,0,545,547,5,77,0,0,546,544,1,0,0,0,546,547,1,0,0,0,547,548,1,0,0,
	0,548,986,3,166,83,0,549,550,5,21,0,0,550,551,5,239,0,0,551,552,3,166,83,
	0,552,553,5,180,0,0,553,554,5,220,0,0,554,555,3,166,83,0,555,986,1,0,0,
	0,556,557,5,21,0,0,557,558,5,239,0,0,558,559,3,166,83,0,559,560,5,203,0,
	0,560,561,5,29,0,0,561,562,3,170,85,0,562,986,1,0,0,0,563,564,5,33,0,0,
	564,565,3,166,83,0,565,574,5,2,0,0,566,571,3,158,79,0,567,568,5,4,0,0,568,
	570,3,158,79,0,569,567,1,0,0,0,570,573,1,0,0,0,571,569,1,0,0,0,571,572,
	1,0,0,0,572,575,1,0,0,0,573,571,1,0,0,0,574,566,1,0,0,0,574,575,1,0,0,0,
	575,576,1,0,0,0,576,577,5,3,0,0,577,986,1,0,0,0,578,579,5,44,0,0,579,580,
	5,188,0,0,580,584,3,174,87,0,581,582,5,243,0,0,582,583,5,18,0,0,583,585,
	3,168,84,0,584,581,1,0,0,0,584,585,1,0,0,0,585,588,1,0,0,0,586,587,5,103,
	0,0,587,589,3,174,87,0,588,586,1,0,0,0,588,589,1,0,0,0,589,986,1,0,0,0,
	590,591,5,69,0,0,591,592,5,188,0,0,592,986,3,174,87,0,593,594,5,91,0,0,
	594,595,3,172,86,0,595,596,5,220,0,0,596,601,3,170,85,0,597,598,5,4,0,0,
	598,600,3,170,85,0,599,597,1,0,0,0,600,603,1,0,0,0,601,599,1,0,0,0,601,
	602,1,0,0,0,602,607,1,0,0,0,603,601,1,0,0,0,604,605,5,243,0,0,605,606,5,
	18,0,0,606,608,5,156,0,0,607,604,1,0,0,0,607,608,1,0,0,0,608,612,1,0,0,
	0,609,610,5,92,0,0,610,611,5,32,0,0,611,613,3,168,84,0,612,609,1,0,0,0,
	612,613,1,0,0,0,613,616,1,0,0,0,614,615,5,103,0,0,615,617,3,174,87,0,616,
	614,1,0,0,0,616,617,1,0,0,0,617,986,1,0,0,0,618,622,5,186,0,0,619,620,5,
	18,0,0,620,621,5,156,0,0,621,623,5,86,0,0,622,619,1,0,0,0,622,623,1,0,0,
	0,623,624,1,0,0,0,624,625,3,172,86,0,625,626,5,88,0,0,626,631,3,170,85,
	0,627,628,5,4,0,0,628,630,3,170,85,0,629,627,1,0,0,0,630,633,1,0,0,0,631,
	629,1,0,0,0,631,632,1,0,0,0,632,637,1,0,0,0,633,631,1,0,0,0,634,635,5,92,
	0,0,635,636,5,32,0,0,636,638,3,168,84,0,637,634,1,0,0,0,637,638,1,0,0,0,
	638,641,1,0,0,0,639,640,5,103,0,0,640,642,3,174,87,0,641,639,1,0,0,0,641,
	642,1,0,0,0,642,986,1,0,0,0,643,644,5,203,0,0,644,648,5,188,0,0,645,649,
	5,20,0,0,646,649,5,145,0,0,647,649,3,174,87,0,648,645,1,0,0,0,648,646,1,
	0,0,0,648,647,1,0,0,0,649,652,1,0,0,0,650,651,5,103,0,0,651,653,3,174,87,
	0,652,650,1,0,0,0,652,653,1,0,0,0,653,986,1,0,0,0,654,665,5,91,0,0,655,
	660,3,164,82,0,656,657,5,4,0,0,657,659,3,164,82,0,658,656,1,0,0,0,659,662,
	1,0,0,0,660,658,1,0,0,0,660,661,1,0,0,0,661,666,1,0,0,0,662,660,1,0,0,0,
	663,664,5,20,0,0,664,666,5,174,0,0,665,655,1,0,0,0,665,663,1,0,0,0,666,
	667,1,0,0,0,667,669,5,153,0,0,668,670,7,2,0,0,669,668,1,0,0,0,669,670,1,
	0,0,0,670,671,1,0,0,0,671,672,3,166,83,0,672,673,5,220,0,0,673,677,3,170,
	85,0,674,675,5,243,0,0,675,676,5,91,0,0,676,678,5,156,0,0,677,674,1,0,0,
	0,677,678,1,0,0,0,678,986,1,0,0,0,679,690,5,94,0,0,680,685,3,164,82,0,681,
	682,5,4,0,0,682,684,3,164,82,0,683,681,1,0,0,0,684,687,1,0,0,0,685,683,
	1,0,0,0,685,686,1,0,0,0,686,691,1,0,0,0,687,685,1,0,0,0,688,689,5,20,0,
	0,689,691,5,174,0,0,690,680,1,0,0,0,690,688,1,0,0,0,691,692,1,0,0,0,692,
	694,5,153,0,0,693,695,7,2,0,0,694,693,1,0,0,0,694,695,1,0,0,0,695,696,1,
	0,0,0,696,697,3,166,83,0,697,698,5,220,0,0,698,699,3,170,85,0,699,986,1,
	0,0,0,700,704,5,186,0,0,701,702,5,91,0,0,702,703,5,156,0,0,703,705,5,86,
	0,0,704,701,1,0,0,0,704,705,1,0,0,0,705,716,1,0,0,0,706,711,3,164,82,0,
	707,708,5,4,0,0,708,710,3,164,82,0,709,707,1,0,0,0,710,713,1,0,0,0,711,
	709,1,0,0,0,711,712,1,0,0,0,712,717,1,0,0,0,713,711,1,0,0,0,714,715,5,20,
	0,0,715,717,5,174,0,0,716,706,1,0,0,0,716,714,1,0,0,0,717,718,1,0,0,0,718,
	720,5,153,0,0,719,721,7,2,0,0,720,719,1,0,0,0,720,721,1,0,0,0,721,722,1,
	0,0,0,722,723,3,166,83,0,723,724,5,88,0,0,724,725,3,170,85,0,725,986,1,
	0,0,0,726,727,5,205,0,0,727,733,5,93,0,0,728,730,5,153,0,0,729,731,5,212,
	0,0,730,729,1,0,0,0,730,731,1,0,0,0,731,732,1,0,0,0,732,734,3,166,83,0,
	733,728,1,0,0,0,733,734,1,0,0,0,734,986,1,0,0,0,735,737,5,78,0,0,736,738,
	5,22,0,0,737,736,1,0,0,0,737,738,1,0,0,0,738,740,1,0,0,0,739,741,5,238,
	0,0,740,739,1,0,0,0,740,741,1,0,0,0,741,753,1,0,0,0,742,743,5,2,0,0,743,
	748,3,152,76,0,744,745,5,4,0,0,745,747,3,152,76,0,746,744,1,0,0,0,747,750,
	1,0,0,0,748,746,1,0,0,0,748,749,1,0,0,0,749,751,1,0,0,0,750,748,1,0,0,0,
	751,752,5,3,0,0,752,754,1,0,0,0,753,742,1,0,0,0,753,754,1,0,0,0,754,755,
	1,0,0,0,755,986,3,14,7,0,756,757,5,205,0,0,757,758,5,44,0,0,758,759,5,212,
	0,0,759,986,3,166,83,0,760,761,5,205,0,0,761,762,5,44,0,0,762,763,5,195,
	0,0,763,986,3,166,83,0,764,765,5,205,0,0,765,766,5,44,0,0,766,767,5,239,
	0,0,767,986,3,166,83,0,768,769,5,205,0,0,769,770,5,44,0,0,770,771,5,133,
	0,0,771,772,5,239,0,0,772,986,3,166,83,0,773,774,5,205,0,0,774,777,5,213,
	0,0,775,776,7,3,0,0,776,778,3,166,83,0,777,775,1,0,0,0,777,778,1,0,0,0,
	778,785,1,0,0,0,779,780,5,122,0,0,780,783,3,108,54,0,781,782,5,73,0,0,782,
	784,3,108,54,0,783,781,1,0,0,0,783,784,1,0,0,0,784,786,1,0,0,0,785,779,
	1,0,0,0,785,786,1,0,0,0,786,986,1,0,0,0,787,788,5,205,0,0,788,791,5,196,
	0,0,789,790,7,3,0,0,790,792,3,174,87,0,791,789,1,0,0,0,791,792,1,0,0,0,
	792,799,1,0,0,0,793,794,5,122,0,0,794,797,3,108,54,0,795,796,5,73,0,0,796,
	798,3,108,54,0,797,795,1,0,0,0,797,798,1,0,0,0,798,800,1,0,0,0,799,793,
	1,0,0,0,799,800,1,0,0,0,800,986,1,0,0,0,801,802,5,205,0,0,802,809,5,37,
	0,0,803,804,5,122,0,0,804,807,3,108,54,0,805,806,5,73,0,0,806,808,3,108,
	54,0,807,805,1,0,0,0,807,808,1,0,0,0,808,810,1,0,0,0,809,803,1,0,0,0,809,
	810,1,0,0,0,810,986,1,0,0,0,811,812,5,205,0,0,812,813,5,39,0,0,813,815,
	7,3,0,0,814,816,3,166,83,0,815,814,1,0,0,0,815,816,1,0,0,0,816,823,1,0,
	0,0,817,818,5,122,0,0,818,821,3,108,54,0,819,820,5,73,0,0,820,822,3,108,
	54,0,821,819,1,0,0,0,821,822,1,0,0,0,822,824,1,0,0,0,823,817,1,0,0,0,823,
	824,1,0,0,0,824,986,1,0,0,0,825,826,5,205,0,0,826,827,5,208,0,0,827,828,
	5,86,0,0,828,986,3,166,83,0,829,830,5,205,0,0,830,831,5,208,0,0,831,832,
	5,86,0,0,832,833,5,2,0,0,833,834,3,16,8,0,834,835,5,3,0,0,835,986,1,0,0,
	0,836,838,5,205,0,0,837,839,5,47,0,0,838,837,1,0,0,0,838,839,1,0,0,0,839,
	840,1,0,0,0,840,843,5,189,0,0,841,842,7,3,0,0,842,844,3,174,87,0,843,841,
	1,0,0,0,843,844,1,0,0,0,844,986,1,0,0,0,845,846,5,205,0,0,846,847,5,188,
	0,0,847,850,5,93,0,0,848,849,7,3,0,0,849,851,3,174,87,0,850,848,1,0,0,0,
	850,851,1,0,0,0,851,986,1,0,0,0,852,853,5,64,0,0,853,986,3,166,83,0,854,
	855,5,63,0,0,855,986,3,166,83,0,856,857,5,205,0,0,857,864,5,90,0,0,858,
	859,5,122,0,0,859,862,3,108,54,0,860,861,5,73,0,0,861,863,3,108,54,0,862,
	860,1,0,0,0,862,863,1,0,0,0,863,865,1,0,0,0,864,858,1,0,0,0,864,865,1,0,
	0,0,865,986,1,0,0,0,866,867,5,205,0,0,867,874,5,202,0,0,868,869,5,122,0,
	0,869,872,3,108,54,0,870,871,5,73,0,0,871,873,3,108,54,0,872,870,1,0,0,
	0,872,873,1,0,0,0,873,875,1,0,0,0,874,868,1,0,0,0,874,875,1,0,0,0,875,986,
	1,0,0,0,876,877,5,203,0,0,877,878,5,202,0,0,878,879,3,166,83,0,879,880,
	5,249,0,0,880,881,3,94,47,0,881,986,1,0,0,0,882,883,5,183,0,0,883,884,5,
	202,0,0,884,986,3,166,83,0,885,886,5,207,0,0,886,895,5,221,0,0,887,892,
	3,154,77,0,888,889,5,4,0,0,889,891,3,154,77,0,890,888,1,0,0,0,891,894,1,
	0,0,0,892,890,1,0,0,0,892,893,1,0,0,0,893,896,1,0,0,0,894,892,1,0,0,0,895,
	887,1,0,0,0,895,896,1,0,0,0,896,986,1,0,0,0,897,899,5,41,0,0,898,900,5,
	245,0,0,899,898,1,0,0,0,899,900,1,0,0,0,900,986,1,0,0,0,901,903,5,190,0,
	0,902,904,5,245,0,0,903,902,1,0,0,0,903,904,1,0,0,0,904,986,1,0,0,0,905,
	906,5,173,0,0,906,907,3,174,87,0,907,908,5,88,0,0,908,909,3,14,7,0,909,
	986,1,0,0,0,910,911,5,60,0,0,911,912,5,173,0,0,912,986,3,174,87,0,913,914,
	5,76,0,0,914,924,3,174,87,0,915,916,5,235,0,0,916,921,3,94,47,0,917,918,
	5,4,0,0,918,920,3,94,47,0,919,917,1,0,0,0,920,923,1,0,0,0,921,919,1,0,0,
	0,921,922,1,0,0,0,922,925,1,0,0,0,923,921,1,0,0,0,924,915,1,0,0,0,924,925,
	1,0,0,0,925,986,1,0,0,0,926,927,5,64,0,0,927,928,5,107,0,0,928,986,3,174,
	87,0,929,930,5,64,0,0,930,931,5,161,0,0,931,986,3,174,87,0,932,933,5,203,
	0,0,933,934,5,166,0,0,934,986,3,162,81,0,935,936,5,203,0,0,936,937,5,218,
	0,0,937,940,5,248,0,0,938,941,5,124,0,0,939,941,3,94,47,0,940,938,1,0,0,
	0,940,939,1,0,0,0,941,986,1,0,0,0,942,943,5,232,0,0,943,944,3,166,83,0,
	944,945,5,203,0,0,945,950,3,150,75,0,946,947,5,4,0,0,947,949,3,150,75,0,
	948,946,1,0,0,0,949,952,1,0,0,0,950,948,1,0,0,0,950,951,1,0,0,0,951,955,
	1,0,0,0,952,950,1,0,0,0,953,954,5,241,0,0,954,956,3,96,48,0,955,953,1,0,
	0,0,955,956,1,0,0,0,956,986,1,0,0,0,957,958,5,135,0,0,958,959,5,111,0,0,
	959,964,3,166,83,0,960,962,5,26,0,0,961,960,1,0,0,0,961,962,1,0,0,0,962,
	963,1,0,0,0,963,965,3,174,87,0,964,961,1,0,0,0,964,965,1,0,0,0,965,966,
	1,0,0,0,966,967,5,235,0,0,967,968,3,64,32,0,968,969,5,153,0,0,969,971,3,
	94,47,0,970,972,3,134,67,0,971,970,1,0,0,0,972,973,1,0,0,0,973,971,1,0,
	0,0,973,974,1,0,0,0,974,986,1,0,0,0,975,976,5,205,0,0,976,977,5,40,0,0,
	977,978,5,153,0,0,978,979,5,212,0,0,979,986,3,166,83,0,980,981,5,205,0,
	0,981,982,5,40,0,0,982,983,5,153,0,0,983,984,5,38,0,0,984,986,3,166,83,
	0,985,215,1,0,0,0,985,216,1,0,0,0,985,218,1,0,0,0,985,223,1,0,0,0,985,239,
	1,0,0,0,985,249,1,0,0,0,985,256,1,0,0,0,985,263,1,0,0,0,985,297,1,0,0,0,
	985,323,1,0,0,0,985,330,1,0,0,0,985,338,1,0,0,0,985,345,1,0,0,0,985,348,
	1,0,0,0,985,359,1,0,0,0,985,368,1,0,0,0,985,377,1,0,0,0,985,394,1,0,0,0,
	985,409,1,0,0,0,985,425,1,0,0,0,985,432,1,0,0,0,985,439,1,0,0,0,985,462,
	1,0,0,0,985,468,1,0,0,0,985,492,1,0,0,0,985,510,1,0,0,0,985,514,1,0,0,0,
	985,522,1,0,0,0,985,534,1,0,0,0,985,542,1,0,0,0,985,549,1,0,0,0,985,556,
	1,0,0,0,985,563,1,0,0,0,985,578,1,0,0,0,985,590,1,0,0,0,985,593,1,0,0,0,
	985,618,1,0,0,0,985,643,1,0,0,0,985,654,1,0,0,0,985,679,1,0,0,0,985,700,
	1,0,0,0,985,726,1,0,0,0,985,735,1,0,0,0,985,756,1,0,0,0,985,760,1,0,0,0,
	985,764,1,0,0,0,985,768,1,0,0,0,985,773,1,0,0,0,985,787,1,0,0,0,985,801,
	1,0,0,0,985,811,1,0,0,0,985,825,1,0,0,0,985,829,1,0,0,0,985,836,1,0,0,0,
	985,845,1,0,0,0,985,852,1,0,0,0,985,854,1,0,0,0,985,856,1,0,0,0,985,866,
	1,0,0,0,985,876,1,0,0,0,985,882,1,0,0,0,985,885,1,0,0,0,985,897,1,0,0,0,
	985,901,1,0,0,0,985,905,1,0,0,0,985,910,1,0,0,0,985,913,1,0,0,0,985,926,
	1,0,0,0,985,929,1,0,0,0,985,932,1,0,0,0,985,935,1,0,0,0,985,942,1,0,0,0,
	985,957,1,0,0,0,985,975,1,0,0,0,985,980,1,0,0,0,986,15,1,0,0,0,987,989,
	3,18,9,0,988,987,1,0,0,0,988,989,1,0,0,0,989,990,1,0,0,0,990,991,3,34,17,
	0,991,17,1,0,0,0,992,994,5,243,0,0,993,995,5,178,0,0,994,993,1,0,0,0,994,
	995,1,0,0,0,995,996,1,0,0,0,996,1001,3,58,29,0,997,998,5,4,0,0,998,1000,
	3,58,29,0,999,997,1,0,0,0,1000,1003,1,0,0,0,1001,999,1,0,0,0,1001,1002,
	1,0,0,0,1002,19,1,0,0,0,1003,1001,1,0,0,0,1004,1007,3,22,11,0,1005,1007,
	3,24,12,0,1006,1004,1,0,0,0,1006,1005,1,0,0,0,1007,21,1,0,0,0,1008,1009,
	3,174,87,0,1009,1012,3,124,62,0,1010,1011,5,147,0,0,1011,1013,5,148,0,0,
	1012,1010,1,0,0,0,1012,1013,1,0,0,0,1013,1016,1,0,0,0,1014,1015,5,40,0,
	0,1015,1017,3,108,54,0,1016,1014,1,0,0,0,1016,1017,1,0,0,0,1017,1020,1,
	0,0,0,1018,1019,5,243,0,0,1019,1021,3,26,13,0,1020,1018,1,0,0,0,1020,1021,
	1,0,0,0,1021,23,1,0,0,0,1022,1023,5,122,0,0,1023,1026,3,166,83,0,1024,1025,
	7,4,0,0,1025,1027,5,175,0,0,1026,1024,1,0,0,0,1026,1027,1,0,0,0,1027,25,
	1,0,0,0,1028,1029,5,2,0,0,1029,1030,3,28,14,0,1030,1031,5,3,0,0,1031,27,
	1,0,0,0,1032,1037,3,30,15,0,1033,1034,5,4,0,0,1034,1036,3,30,15,0,1035,
	1033,1,0,0,0,1036,1039,1,0,0,0,1037,1035,1,0,0,0,1037,1038,1,0,0,0,1038,
	29,1,0,0,0,1039,1037,1,0,0,0,1040,1041,3,174,87,0,1041,1042,5,249,0,0,1042,
	1043,3,32,16,0,1043,31,1,0,0,0,1044,1047,5,59,0,0,1045,1047,3,94,47,0,1046,
	1044,1,0,0,0,1046,1045,1,0,0,0,1047,33,1,0,0,0,1048,1059,3,40,20,0,1049,
	1050,5,158,0,0,1050,1051,5,32,0,0,1051,1056,3,44,22,0,1052,1053,5,4,0,0,
	1053,1055,3,44,22,0,1054,1052,1,0,0,0,1055,1058,1,0,0,0,1056,1054,1,0,0,
	0,1056,1057,1,0,0,0,1057,1060,1,0,0,0,1058,1056,1,0,0,0,1059,1049,1,0,0,
	0,1059,1060,1,0,0,0,1060,1066,1,0,0,0,1061,1062,5,151,0,0,1062,1064,3,38,
	19,0,1063,1065,7,5,0,0,1064,1063,1,0,0,0,1064,1065,1,0,0,0,1065,1067,1,
	0,0,0,1066,1061,1,0,0,0,1066,1067,1,0,0,0,1067,1081,1,0,0,0,1068,1069,5,
	123,0,0,1069,1082,3,36,18,0,1070,1071,5,81,0,0,1071,1073,7,6,0,0,1072,1074,
	3,38,19,0,1073,1072,1,0,0,0,1073,1074,1,0,0,0,1074,1075,1,0,0,0,1075,1079,
	7,5,0,0,1076,1080,5,155,0,0,1077,1078,5,243,0,0,1078,1080,5,217,0,0,1079,
	1076,1,0,0,0,1079,1077,1,0,0,0,1080,1082,1,0,0,0,1081,1068,1,0,0,0,1081,
	1070,1,0,0,0,1081,1082,1,0,0,0,1082,35,1,0,0,0,1083,1086,5,20,0,0,1084,
	1086,3,38,19,0,1085,1083,1,0,0,0,1085,1084,1,0,0,0,1086,37,1,0,0,0,1087,
	1088,7,7,0,0,1088,39,1,0,0,0,1089,1090,6,20,-1,0,1090,1091,3,42,21,0,1091,
	1106,1,0,0,0,1092,1093,10,2,0,0,1093,1095,5,109,0,0,1094,1096,3,60,30,0,
	1095,1094,1,0,0,0,1095,1096,1,0,0,0,1096,1097,1,0,0,0,1097,1105,3,40,20,
	3,1098,1099,10,1,0,0,1099,1101,7,8,0,0,1100,1102,3,60,30,0,1101,1100,1,
	0,0,0,1101,1102,1,0,0,0,1102,1103,1,0,0,0,1103,1105,3,40,20,2,1104,1092,
	1,0,0,0,1104,1098,1,0,0,0,1105,1108,1,0,0,0,1106,1104,1,0,0,0,1106,1107,
	1,0,0,0,1107,41,1,0,0,0,1108,1106,1,0,0,0,1109,1126,3,46,23,0,1110,1111,
	5,212,0,0,1111,1126,3,166,83,0,1112,1113,5,237,0,0,1113,1118,3,94,47,0,
	1114,1115,5,4,0,0,1115,1117,3,94,47,0,1116,1114,1,0,0,0,1117,1120,1,0,0,
	0,1118,1116,1,0,0,0,1118,1119,1,0,0,0,1119,1126,1,0,0,0,1120,1118,1,0,0,
	0,1121,1122,5,2,0,0,1122,1123,3,34,17,0,1123,1124,5,3,0,0,1124,1126,1,0,
	0,0,1125,1109,1,0,0,0,1125,1110,1,0,0,0,1125,1112,1,0,0,0,1125,1121,1,0,
	0,0,1126,43,1,0,0,0,1127,1129,3,94,47,0,1128,1130,7,9,0,0,1129,1128,1,0,
	0,0,1129,1130,1,0,0,0,1130,1133,1,0,0,0,1131,1132,5,150,0,0,1132,1134,7,
	10,0,0,1133,1131,1,0,0,0,1133,1134,1,0,0,0,1134,45,1,0,0,0,1135,1137,5,
	200,0,0,1136,1138,3,60,30,0,1137,1136,1,0,0,0,1137,1138,1,0,0,0,1138,1139,
	1,0,0,0,1139,1144,3,62,31,0,1140,1141,5,4,0,0,1141,1143,3,62,31,0,1142,
	1140,1,0,0,0,1143,1146,1,0,0,0,1144,1142,1,0,0,0,1144,1145,1,0,0,0,1145,
	1156,1,0,0,0,1146,1144,1,0,0,0,1147,1148,5,88,0,0,1148,1153,3,64,32,0,1149,
	1150,5,4,0,0,1150,1152,3,64,32,0,1151,1149,1,0,0,0,1152,1155,1,0,0,0,1153,
	1151,1,0,0,0,1153,1154,1,0,0,0,1154,1157,1,0,0,0,1155,1153,1,0,0,0,1156,
	1147,1,0,0,0,1156,1157,1,0,0,0,1157,1160,1,0,0,0,1158,1159,5,241,0,0,1159,
	1161,3,96,48,0,1160,1158,1,0,0,0,1160,1161,1,0,0,0,1161,1165,1,0,0,0,1162,
	1163,5,96,0,0,1163,1164,5,32,0,0,1164,1166,3,48,24,0,1165,1162,1,0,0,0,
	1165,1166,1,0,0,0,1166,1169,1,0,0,0,1167,1168,5,99,0,0,1168,1170,3,96,48,
	0,1169,1167,1,0,0,0,1169,1170,1,0,0,0,1170,1180,1,0,0,0,1171,1172,5,242,
	0,0,1172,1177,3,54,27,0,1173,1174,5,4,0,0,1174,1176,3,54,27,0,1175,1173,
	1,0,0,0,1176,1179,1,0,0,0,1177,1175,1,0,0,0,1177,1178,1,0,0,0,1178,1181,
	1,0,0,0,1179,1177,1,0,0,0,1180,1171,1,0,0,0,1180,1181,1,0,0,0,1181,47,1,
	0,0,0,1182,1184,3,60,30,0,1183,1182,1,0,0,0,1183,1184,1,0,0,0,1184,1185,
	1,0,0,0,1185,1190,3,50,25,0,1186,1187,5,4,0,0,1187,1189,3,50,25,0,1188,
	1186,1,0,0,0,1189,1192,1,0,0,0,1190,1188,1,0,0,0,1190,1191,1,0,0,0,1191,
	49,1,0,0,0,1192,1190,1,0,0,0,1193,1234,3,52,26,0,1194,1195,5,191,0,0,1195,
	1204,5,2,0,0,1196,1201,3,94,47,0,1197,1198,5,4,0,0,1198,1200,3,94,47,0,
	1199,1197,1,0,0,0,1200,1203,1,0,0,0,1201,1199,1,0,0,0,1201,1202,1,0,0,0,
	1202,1205,1,0,0,0,1203,1201,1,0,0,0,1204,1196,1,0,0,0,1204,1205,1,0,0,0,
	1205,1206,1,0,0,0,1206,1234,5,3,0,0,1207,1208,5,46,0,0,1208,1217,5,2,0,
	0,1209,1214,3,94,47,0,1210,1211,5,4,0,0,1211,1213,3,94,47,0,1212,1210,1,
	0,0,0,1213,1216,1,0,0,0,1214,1212,1,0,0,0,1214,1215,1,0,0,0,1215,1218,1,
	0,0,0,1216,1214,1,0,0,0,1217,1209,1,0,0,0,1217,1218,1,0,0,0,1218,1219,1,
	0,0,0,1219,1234,5,3,0,0,1220,1221,5,97,0,0,1221,1222,5,204,0,0,1222,1223,
	5,2,0,0,1223,1228,3,52,26,0,1224,1225,5,4,0,0,1225,1227,3,52,26,0,1226,
	1224,1,0,0,0,1227,1230,1,0,0,0,1228,1226,1,0,0,0,1228,1229,1,0,0,0,1229,
	1231,1,0,0,0,1230,1228,1,0,0,0,1231,1232,5,3,0,0,1232,1234,1,0,0,0,1233,
	1193,1,0,0,0,1233,1194,1,0,0,0,1233,1207,1,0,0,0,1233,1220,1,0,0,0,1234,
	51,1,0,0,0,1235,1244,5,2,0,0,1236,1241,3,94,47,0,1237,1238,5,4,0,0,1238,
	1240,3,94,47,0,1239,1237,1,0,0,0,1240,1243,1,0,0,0,1241,1239,1,0,0,0,1241,
	1242,1,0,0,0,1242,1245,1,0,0,0,1243,1241,1,0,0,0,1244,1236,1,0,0,0,1244,
	1245,1,0,0,0,1245,1246,1,0,0,0,1246,1249,5,3,0,0,1247,1249,3,94,47,0,1248,
	1235,1,0,0,0,1248,1247,1,0,0,0,1249,53,1,0,0,0,1250,1251,3,174,87,0,1251,
	1252,5,26,0,0,1252,1253,5,2,0,0,1253,1254,3,56,28,0,1254,1255,5,3,0,0,1255,
	55,1,0,0,0,1256,1258,3,174,87,0,1257,1256,1,0,0,0,1257,1258,1,0,0,0,1258,
	1269,1,0,0,0,1259,1260,5,163,0,0,1260,1261,5,32,0,0,1261,1266,3,94,47,0,
	1262,1263,5,4,0,0,1263,1265,3,94,47,0,1264,1262,1,0,0,0,1265,1268,1,0,0,
	0,1266,1264,1,0,0,0,1266,1267,1,0,0,0,1267,1270,1,0,0,0,1268,1266,1,0,0,
	0,1269,1259,1,0,0,0,1269,1270,1,0,0,0,1270,1281,1,0,0,0,1271,1272,5,158,
	0,0,1272,1273,5,32,0,0,1273,1278,3,44,22,0,1274,1275,5,4,0,0,1275,1277,
	3,44,22,0,1276,1274,1,0,0,0,1277,1280,1,0,0,0,1278,1276,1,0,0,0,1278,1279,
	1,0,0,0,1279,1282,1,0,0,0,1280,1278,1,0,0,0,1281,1271,1,0,0,0,1281,1282,
	1,0,0,0,1282,1284,1,0,0,0,1283,1285,3,138,69,0,1284,1283,1,0,0,0,1284,1285,
	1,0,0,0,1285,57,1,0,0,0,1286,1288,3,174,87,0,1287,1289,3,90,45,0,1288,1287,
	1,0,0,0,1288,1289,1,0,0,0,1289,1290,1,0,0,0,1290,1291,5,26,0,0,1291,1292,
	5,2,0,0,1292,1293,3,16,8,0,1293,1294,5,3,0,0,1294,59,1,0,0,0,1295,1296,
	7,11,0,0,1296,61,1,0,0,0,1297,1302,3,94,47,0,1298,1300,5,26,0,0,1299,1298,
	1,0,0,0,1299,1300,1,0,0,0,1300,1301,1,0,0,0,1301,1303,3,174,87,0,1302,1299,
	1,0,0,0,1302,1303,1,0,0,0,1303,1313,1,0,0,0,1304,1305,3,102,51,0,1305,1306,
	5,1,0,0,1306,1309,5,257,0,0,1307,1308,5,26,0,0,1308,1310,3,90,45,0,1309,
	1307,1,0,0,0,1309,1310,1,0,0,0,1310,1313,1,0,0,0,1311,1313,5,257,0,0,1312,
	1297,1,0,0,0,1312,1304,1,0,0,0,1312,1311,1,0,0,0,1313,63,1,0,0,0,1314,1315,
	6,32,-1,0,1315,1316,3,70,35,0,1316,1335,1,0,0,0,1317,1331,10,2,0,0,1318,
	1319,5,45,0,0,1319,1320,5,116,0,0,1320,1332,3,70,35,0,1321,1322,3,66,33,
	0,1322,1323,5,116,0,0,1323,1324,3,64,32,0,1324,1325,3,68,34,0,1325,1332,
	1,0,0,0,1326,1327,5,138,0,0,1327,1328,3,66,33,0,1328,1329,5,116,0,0,1329,
	1330,3,70,35,0,1330,1332,1,0,0,0,1331,1318,1,0,0,0,1331,1321,1,0,0,0,1331,
	1326,1,0,0,0,1332,1334,1,0,0,0,1333,1317,1,0,0,0,1334,1337,1,0,0,0,1335,
	1333,1,0,0,0,1335,1336,1,0,0,0,1336,65,1,0,0,0,1337,1335,1,0,0,0,1338,1340,
	5,106,0,0,1339,1338,1,0,0,0,1339,1340,1,0,0,0,1340,1354,1,0,0,0,1341,1343,
	5,120,0,0,1342,1344,5,160,0,0,1343,1342,1,0,0,0,1343,1344,1,0,0,0,1344,
	1354,1,0,0,0,1345,1347,5,187,0,0,1346,1348,5,160,0,0,1347,1346,1,0,0,0,
	1347,1348,1,0,0,0,1348,1354,1,0,0,0,1349,1351,5,89,0,0,1350,1352,5,160,
	0,0,1351,1350,1,0,0,0,1351,1352,1,0,0,0,1352,1354,1,0,0,0,1353,1339,1,0,
	0,0,1353,1341,1,0,0,0,1353,1345,1,0,0,0,1353,1349,1,0,0,0,1354,67,1,0,0,
	0,1355,1356,5,153,0,0,1356,1370,3,96,48,0,1357,1358,5,235,0,0,1358,1359,
	5,2,0,0,1359,1364,3,174,87,0,1360,1361,5,4,0,0,1361,1363,3,174,87,0,1362,
	1360,1,0,0,0,1363,1366,1,0,0,0,1364,1362,1,0,0,0,1364,1365,1,0,0,0,1365,
	1367,1,0,0,0,1366,1364,1,0,0,0,1367,1368,5,3,0,0,1368,1370,1,0,0,0,1369,
	1355,1,0,0,0,1369,1357,1,0,0,0,1370,69,1,0,0,0,1371,1378,3,74,37,0,1372,
	1373,5,214,0,0,1373,1374,3,72,36,0,1374,1375,5,2,0,0,1375,1376,3,94,47,
	0,1376,1377,5,3,0,0,1377,1379,1,0,0,0,1378,1372,1,0,0,0,1378,1379,1,0,0,
	0,1379,71,1,0,0,0,1380,1381,7,12,0,0,1381,73,1,0,0,0,1382,1465,3,88,44,
	0,1383,1384,5,132,0,0,1384,1395,5,2,0,0,1385,1386,5,163,0,0,1386,1387,5,
	32,0,0,1387,1392,3,94,47,0,1388,1389,5,4,0,0,1389,1391,3,94,47,0,1390,1388,
	1,0,0,0,1391,1394,1,0,0,0,1392,1390,1,0,0,0,1392,1393,1,0,0,0,1393,1396,
	1,0,0,0,1394,1392,1,0,0,0,1395,1385,1,0,0,0,1395,1396,1,0,0,0,1396,1407,
	1,0,0,0,1397,1398,5,158,0,0,1398,1399,5,32,0,0,1399,1404,3,44,22,0,1400,
	1401,5,4,0,0,1401,1403,3,44,22,0,1402,1400,1,0,0,0,1403,1406,1,0,0,0,1404,
	1402,1,0,0,0,1404,1405,1,0,0,0,1405,1408,1,0,0,0,1406,1404,1,0,0,0,1407,
	1397,1,0,0,0,1407,1408,1,0,0,0,1408,1418,1,0,0,0,1409,1410,5,134,0,0,1410,
	1415,3,76,38,0,1411,1412,5,4,0,0,1412,1414,3,76,38,0,1413,1411,1,0,0,0,
	1414,1417,1,0,0,0,1415,1413,1,0,0,0,1415,1416,1,0,0,0,1416,1419,1,0,0,0,
	1417,1415,1,0,0,0,1418,1409,1,0,0,0,1418,1419,1,0,0,0,1419,1421,1,0,0,0,
	1420,1422,3,78,39,0,1421,1420,1,0,0,0,1421,1422,1,0,0,0,1422,1426,1,0,0,
	0,1423,1424,5,19,0,0,1424,1425,5,129,0,0,1425,1427,3,82,41,0,1426,1423,
	1,0,0,0,1426,1427,1,0,0,0,1427,1429,1,0,0,0,1428,1430,7,13,0,0,1429,1428,
	1,0,0,0,1429,1430,1,0,0,0,1430,1431,1,0,0,0,1431,1432,5,167,0,0,1432,1433,
	5,2,0,0,1433,1434,3,144,72,0,1434,1444,5,3,0,0,1435,1436,5,209,0,0,1436,
	1441,3,84,42,0,1437,1438,5,4,0,0,1438,1440,3,84,42,0,1439,1437,1,0,0,0,
	1440,1443,1,0,0,0,1441,1439,1,0,0,0,1441,1442,1,0,0,0,1442,1445,1,0,0,0,
	1443,1441,1,0,0,0,1444,1435,1,0,0,0,1444,1445,1,0,0,0,1445,1446,1,0,0,0,
	1446,1447,5,65,0,0,1447,1452,3,86,43,0,1448,1449,5,4,0,0,1449,1451,3,86,
	43,0,1450,1448,1,0,0,0,1451,1454,1,0,0,0,1452,1450,1,0,0,0,1452,1453,1,
	0,0,0,1453,1455,1,0,0,0,1454,1452,1,0,0,0,1455,1463,5,3,0,0,1456,1458,5,
	26,0,0,1457,1456,1,0,0,0,1457,1458,1,0,0,0,1458,1459,1,0,0,0,1459,1461,
	3,174,87,0,1460,1462,3,90,45,0,1461,1460,1,0,0,0,1461,1462,1,0,0,0,1462,
	1464,1,0,0,0,1463,1457,1,0,0,0,1463,1464,1,0,0,0,1464,1466,1,0,0,0,1465,
	1383,1,0,0,0,1465,1466,1,0,0,0,1466,75,1,0,0,0,1467,1468,3,94,47,0,1468,
	1469,5,26,0,0,1469,1470,3,174,87,0,1470,77,1,0,0,0,1471,1472,5,154,0,0,
	1472,1473,5,192,0,0,1473,1474,5,168,0,0,1474,1483,5,129,0,0,1475,1476,5,
	20,0,0,1476,1477,5,193,0,0,1477,1478,5,168,0,0,1478,1480,5,129,0,0,1479,
	1481,3,80,40,0,1480,1479,1,0,0,0,1480,1481,1,0,0,0,1481,1483,1,0,0,0,1482,
	1471,1,0,0,0,1482,1475,1,0,0,0,1483,79,1,0,0,0,1484,1485,5,205,0,0,1485,
	1486,5,71,0,0,1486,1494,5,131,0,0,1487,1488,5,152,0,0,1488,1489,5,71,0,
	0,1489,1494,5,131,0,0,1490,1491,5,243,0,0,1491,1492,5,230,0,0,1492,1494,
	5,193,0,0,1493,1484,1,0,0,0,1493,1487,1,0,0,0,1493,1490,1,0,0,0,1494,81,
	1,0,0,0,1495,1496,5,5,0,0,1496,1497,5,220,0,0,1497,1498,5,139,0,0,1498,
	1515,5,192,0,0,1499,1500,5,5,0,0,1500,1501,5,165,0,0,1501,1502,5,118,0,
	0,1502,1515,5,192,0,0,1503,1504,5,5,0,0,1504,1505,5,220,0,0,1505,1506,5,
	84,0,0,1506,1515,3,174,87,0,1507,1508,5,5,0,0,1508,1509,5,220,0,0,1509,
	1510,5,118,0,0,1510,1515,3,174,87,0,1511,1512,5,5,0,0,1512,1513,5,220,0,
	0,1513,1515,3,174,87,0,1514,1495,1,0,0,0,1514,1499,1,0,0,0,1514,1503,1,
	0,0,0,1514,1507,1,0,0,0,1514,1511,1,0,0,0,1515,83,1,0,0,0,1516,1517,3,174,
	87,0,1517,1518,5,249,0,0,1518,1519,5,2,0,0,1519,1524,3,174,87,0,1520,1521,
	5,4,0,0,1521,1523,3,174,87,0,1522,1520,1,0,0,0,1523,1526,1,0,0,0,1524,1522,
	1,0,0,0,1524,1525,1,0,0,0,1525,1527,1,0,0,0,1526,1524,1,0,0,0,1527,1528,
	5,3,0,0,1528,85,1,0,0,0,1529,1530,3,174,87,0,1530,1531,5,26,0,0,1531,1532,
	3,94,47,0,1532,87,1,0,0,0,1533,1541,3,92,46,0,1534,1536,5,26,0,0,1535,1534,
	1,0,0,0,1535,1536,1,0,0,0,1536,1537,1,0,0,0,1537,1539,3,174,87,0,1538,1540,
	3,90,45,0,1539,1538,1,0,0,0,1539,1540,1,0,0,0,1540,1542,1,0,0,0,1541,1535,
	1,0,0,0,1541,1542,1,0,0,0,1542,89,1,0,0,0,1543,1544,5,2,0,0,1544,1549,3,
	174,87,0,1545,1546,5,4,0,0,1546,1548,3,174,87,0,1547,1545,1,0,0,0,1548,
	1551,1,0,0,0,1549,1547,1,0,0,0,1549,1550,1,0,0,0,1550,1552,1,0,0,0,1551,
	1549,1,0,0,0,1552,1553,5,3,0,0,1553,91,1,0,0,0,1554,1584,3,166,83,0,1555,
	1556,5,2,0,0,1556,1557,3,16,8,0,1557,1558,5,3,0,0,1558,1584,1,0,0,0,1559,
	1560,5,231,0,0,1560,1561,5,2,0,0,1561,1566,3,94,47,0,1562,1563,5,4,0,0,
	1563,1565,3,94,47,0,1564,1562,1,0,0,0,1565,1568,1,0,0,0,1566,1564,1,0,0,
	0,1566,1567,1,0,0,0,1567,1569,1,0,0,0,1568,1566,1,0,0,0,1569,1572,5,3,0,
	0,1570,1571,5,243,0,0,1571,1573,5,159,0,0,1572,1570,1,0,0,0,1572,1573,1,
	0,0,0,1573,1584,1,0,0,0,1574,1575,5,119,0,0,1575,1576,5,2,0,0,1576,1577,
	3,16,8,0,1577,1578,5,3,0,0,1578,1584,1,0,0,0,1579,1580,5,2,0,0,1580,1581,
	3,64,32,0,1581,1582,5,3,0,0,1582,1584,1,0,0,0,1583,1554,1,0,0,0,1583,1555,
	1,0,0,0,1583,1559,1,0,0,0,1583,1574,1,0,0,0,1583,1579,1,0,0,0,1584,93,1,
	0,0,0,1585,1586,3,96,48,0,1586,95,1,0,0,0,1587,1588,6,48,-1,0,1588,1590,
	3,100,50,0,1589,1591,3,98,49,0,1590,1589,1,0,0,0,1590,1591,1,0,0,0,1591,
	1595,1,0,0,0,1592,1593,5,147,0,0,1593,1595,3,96,48,3,1594,1587,1,0,0,0,
	1594,1592,1,0,0,0,1595,1604,1,0,0,0,1596,1597,10,2,0,0,1597,1598,5,23,0,
	0,1598,1603,3,96,48,3,1599,1600,10,1,0,0,1600,1601,5,157,0,0,1601,1603,
	3,96,48,2,1602,1596,1,0,0,0,1602,1599,1,0,0,0,1603,1606,1,0,0,0,1604,1602,
	1,0,0,0,1604,1605,1,0,0,0,1605,97,1,0,0,0,1606,1604,1,0,0,0,1607,1608,3,
	112,56,0,1608,1609,3,100,50,0,1609,1669,1,0,0,0,1610,1611,3,112,56,0,1611,
	1612,3,114,57,0,1612,1613,5,2,0,0,1613,1614,3,16,8,0,1614,1615,5,3,0,0,
	1615,1669,1,0,0,0,1616,1618,5,147,0,0,1617,1616,1,0,0,0,1617,1618,1,0,0,
	0,1618,1619,1,0,0,0,1619,1620,5,31,0,0,1620,1621,3,100,50,0,1621,1622,5,
	23,0,0,1622,1623,3,100,50,0,1623,1669,1,0,0,0,1624,1626,5,147,0,0,1625,
	1624,1,0,0,0,1625,1626,1,0,0,0,1626,1627,1,0,0,0,1627,1628,5,103,0,0,1628,
	1629,5,2,0,0,1629,1634,3,94,47,0,1630,1631,5,4,0,0,1631,1633,3,94,47,0,
	1632,1630,1,0,0,0,1633,1636,1,0,0,0,1634,1632,1,0,0,0,1634,1635,1,0,0,0,
	1635,1637,1,0,0,0,1636,1634,1,0,0,0,1637,1638,5,3,0,0,1638,1669,1,0,0,0,
	1639,1641,5,147,0,0,1640,1639,1,0,0,0,1640,1641,1,0,0,0,1641,1642,1,0,0,
	0,1642,1643,5,103,0,0,1643,1644,5,2,0,0,1644,1645,3,16,8,0,1645,1646,5,
	3,0,0,1646,1669,1,0,0,0,1647,1649,5,147,0,0,1648,1647,1,0,0,0,1648,1649,
	1,0,0,0,1649,1650,1,0,0,0,1650,1651,5,122,0,0,1651,1654,3,100,50,0,1652,
	1653,5,73,0,0,1653,1655,3,100,50,0,1654,1652,1,0,0,0,1654,1655,1,0,0,0,
	1655,1669,1,0,0,0,1656,1658,5,114,0,0,1657,1659,5,147,0,0,1658,1657,1,0,
	0,0,1658,1659,1,0,0,0,1659,1660,1,0,0,0,1660,1669,5,148,0,0,1661,1663,5,
	114,0,0,1662,1664,5,147,0,0,1663,1662,1,0,0,0,1663,1664,1,0,0,0,1664,1665,
	1,0,0,0,1665,1666,5,66,0,0,1666,1667,5,88,0,0,1667,1669,3,100,50,0,1668,
	1607,1,0,0,0,1668,1610,1,0,0,0,1668,1617,1,0,0,0,1668,1625,1,0,0,0,1668,
	1640,1,0,0,0,1668,1648,1,0,0,0,1668,1656,1,0,0,0,1668,1661,1,0,0,0,1669,
	99,1,0,0,0,1670,1671,6,50,-1,0,1671,1675,3,102,51,0,1672,1673,7,14,0,0,
	1673,1675,3,100,50,4,1674,1670,1,0,0,0,1674,1672,1,0,0,0,1675,1690,1,0,
	0,0,1676,1677,10,3,0,0,1677,1678,7,15,0,0,1678,1689,3,100,50,4,1679,1680,
	10,2,0,0,1680,1681,7,14,0,0,1681,1689,3,100,50,3,1682,1683,10,1,0,0,1683,
	1684,5,260,0,0,1684,1689,3,100,50,2,1685,1686,10,5,0,0,1686,1687,5,28,0,
	0,1687,1689,3,110,55,0,1688,1676,1,0,0,0,1688,1679,1,0,0,0,1688,1682,1,
	0,0,0,1688,1685,1,0,0,0,1689,1692,1,0,0,0,1690,1688,1,0,0,0,1690,1691,1,
	0,0,0,1691,101,1,0,0,0,1692,1690,1,0,0,0,1693,1694,6,51,-1,0,1694,1943,
	5,148,0,0,1695,1943,3,118,59,0,1696,1697,3,174,87,0,1697,1698,3,108,54,
	0,1698,1943,1,0,0,0,1699,1700,5,68,0,0,1700,1701,5,172,0,0,1701,1943,3,
	108,54,0,1702,1943,3,176,88,0,1703,1943,3,116,58,0,1704,1943,3,108,54,0,
	1705,1943,5,264,0,0,1706,1943,5,261,0,0,1707,1708,5,170,0,0,1708,1709,5,
	2,0,0,1709,1710,3,100,50,0,1710,1711,5,103,0,0,1711,1712,3,100,50,0,1712,
	1713,5,3,0,0,1713,1943,1,0,0,0,1714,1715,5,2,0,0,1715,1718,3,94,47,0,1716,
	1717,5,4,0,0,1717,1719,3,94,47,0,1718,1716,1,0,0,0,1719,1720,1,0,0,0,1720,
	1718,1,0,0,0,1720,1721,1,0,0,0,1721,1722,1,0,0,0,1722,1723,5,3,0,0,1723,
	1943,1,0,0,0,1724,1725,5,192,0,0,1725,1726,5,2,0,0,1726,1731,3,94,47,0,
	1727,1728,5,4,0,0,1728,1730,3,94,47,0,1729,1727,1,0,0,0,1730,1733,1,0,0,
	0,1731,1729,1,0,0,0,1731,1732,1,0,0,0,1732,1734,1,0,0,0,1733,1731,1,0,0,
	0,1734,1735,5,3,0,0,1735,1943,1,0,0,0,1736,1737,3,166,83,0,1737,1738,5,
	2,0,0,1738,1739,5,257,0,0,1739,1741,5,3,0,0,1740,1742,3,132,66,0,1741,1740,
	1,0,0,0,1741,1742,1,0,0,0,1742,1744,1,0,0,0,1743,1745,3,136,68,0,1744,1743,
	1,0,0,0,1744,1745,1,0,0,0,1745,1943,1,0,0,0,1746,1748,3,104,52,0,1747,1746,
	1,0,0,0,1747,1748,1,0,0,0,1748,1749,1,0,0,0,1749,1750,3,166,83,0,1750,1762,
	5,2,0,0,1751,1753,3,60,30,0,1752,1751,1,0,0,0,1752,1753,1,0,0,0,1753,1754,
	1,0,0,0,1754,1759,3,94,47,0,1755,1756,5,4,0,0,1756,1758,3,94,47,0,1757,
	1755,1,0,0,0,1758,1761,1,0,0,0,1759,1757,1,0,0,0,1759,1760,1,0,0,0,1760,
	1763,1,0,0,0,1761,1759,1,0,0,0,1762,1752,1,0,0,0,1762,1763,1,0,0,0,1763,
	1774,1,0,0,0,1764,1765,5,158,0,0,1765,1766,5,32,0,0,1766,1771,3,44,22,0,
	1767,1768,5,4,0,0,1768,1770,3,44,22,0,1769,1767,1,0,0,0,1770,1773,1,0,0,
	0,1771,1769,1,0,0,0,1771,1772,1,0,0,0,1772,1775,1,0,0,0,1773,1771,1,0,0,
	0,1774,1764,1,0,0,0,1774,1775,1,0,0,0,1775,1776,1,0,0,0,1776,1778,5,3,0,
	0,1777,1779,3,132,66,0,1778,1777,1,0,0,0,1778,1779,1,0,0,0,1779,1784,1,
	0,0,0,1780,1782,3,106,53,0,1781,1780,1,0,0,0,1781,1782,1,0,0,0,1782,1783,
	1,0,0,0,1783,1785,3,136,68,0,1784,1781,1,0,0,0,1784,1785,1,0,0,0,1785,1943,
	1,0,0,0,1786,1787,3,174,87,0,1787,1788,3,136,68,0,1788,1943,1,0,0,0,1789,
	1790,3,174,87,0,1790,1791,5,6,0,0,1791,1792,3,94,47,0,1792,1943,1,0,0,0,
	1793,1802,5,2,0,0,1794,1799,3,174,87,0,1795,1796,5,4,0,0,1796,1798,3,174,
	87,0,1797,1795,1,0,0,0,1798,1801,1,0,0,0,1799,1797,1,0,0,0,1799,1800,1,
	0,0,0,1800,1803,1,0,0,0,1801,1799,1,0,0,0,1802,1794,1,0,0,0,1802,1803,1,
	0,0,0,1803,1804,1,0,0,0,1804,1805,5,3,0,0,1805,1806,5,6,0,0,1806,1943,3,
	94,47,0,1807,1808,5,2,0,0,1808,1809,3,16,8,0,1809,1810,5,3,0,0,1810,1943,
	1,0,0,0,1811,1812,5,77,0,0,1812,1813,5,2,0,0,1813,1814,3,16,8,0,1814,1815,
	5,3,0,0,1815,1943,1,0,0,0,1816,1817,5,35,0,0,1817,1819,3,94,47,0,1818,1820,
	3,130,65,0,1819,1818,1,0,0,0,1820,1821,1,0,0,0,1821,1819,1,0,0,0,1821,1822,
	1,0,0,0,1822,1825,1,0,0,0,1823,1824,5,70,0,0,1824,1826,3,94,47,0,1825,1823,
	1,0,0,0,1825,1826,1,0,0,0,1826,1827,1,0,0,0,1827,1828,5,72,0,0,1828,1943,
	1,0,0,0,1829,1831,5,35,0,0,1830,1832,3,130,65,0,1831,1830,1,0,0,0,1832,
	1833,1,0,0,0,1833,1831,1,0,0,0,1833,1834,1,0,0,0,1834,1837,1,0,0,0,1835,
	1836,5,70,0,0,1836,1838,3,94,47,0,1837,1835,1,0,0,0,1837,1838,1,0,0,0,1838,
	1839,1,0,0,0,1839,1840,5,72,0,0,1840,1943,1,0,0,0,1841,1842,5,36,0,0,1842,
	1843,5,2,0,0,1843,1844,3,94,47,0,1844,1845,5,26,0,0,1845,1846,3,124,62,
	0,1846,1847,5,3,0,0,1847,1943,1,0,0,0,1848,1849,5,224,0,0,1849,1850,5,2,
	0,0,1850,1851,3,94,47,0,1851,1852,5,26,0,0,1852,1853,3,124,62,0,1853,1854,
	5,3,0,0,1854,1943,1,0,0,0,1855,1856,5,25,0,0,1856,1865,5,7,0,0,1857,1862,
	3,94,47,0,1858,1859,5,4,0,0,1859,1861,3,94,47,0,1860,1858,1,0,0,0,1861,
	1864,1,0,0,0,1862,1860,1,0,0,0,1862,1863,1,0,0,0,1863,1866,1,0,0,0,1864,
	1862,1,0,0,0,1865,1857,1,0,0,0,1865,1866,1,0,0,0,1866,1867,1,0,0,0,1867,
	1943,5,8,0,0,1868,1943,3,174,87,0,1869,1943,5,49,0,0,1870,1874,5,53,0,0,
	1871,1872,5,2,0,0,1872,1873,5,265,0,0,1873,1875,5,3,0,0,1874,1871,1,0,0,
	0,1874,1875,1,0,0,0,1875,1943,1,0,0,0,1876,1880,5,54,0,0,1877,1878,5,2,
	0,0,1878,1879,5,265,0,0,1879,1881,5,3,0,0,1880,1877,1,0,0,0,1880,1881,1,
	0,0,0,1881,1943,1,0,0,0,1882,1886,5,125,0,0,1883,1884,5,2,0,0,1884,1885,
	5,265,0,0,1885,1887,5,3,0,0,1886,1883,1,0,0,0,1886,1887,1,0,0,0,1887,1943,
	1,0,0,0,1888,1892,5,126,0,0,1889,1890,5,2,0,0,1890,1891,5,265,0,0,1891,
	1893,5,3,0,0,1892,1889,1,0,0,0,1892,1893,1,0,0,0,1893,1943,1,0,0,0,1894,
	1943,5,55,0,0,1895,1943,5,48,0,0,1896,1943,5,52,0,0,1897,1943,5,50,0,0,
	1898,1899,5,210,0,0,1899,1900,5,2,0,0,1900,1901,3,100,50,0,1901,1902,5,
	88,0,0,1902,1905,3,100,50,0,1903,1904,5,86,0,0,1904,1906,3,100,50,0,1905,
	1903,1,0,0,0,1905,1906,1,0,0,0,1906,1907,1,0,0,0,1907,1908,5,3,0,0,1908,
	1943,1,0,0,0,1909,1910,5,146,0,0,1910,1911,5,2,0,0,1911,1914,3,100,50,0,
	1912,1913,5,4,0,0,1913,1915,3,122,61,0,1914,1912,1,0,0,0,1914,1915,1,0,
	0,0,1915,1916,1,0,0,0,1916,1917,5,3,0,0,1917,1943,1,0,0,0,1918,1919,5,79,
	0,0,1919,1920,5,2,0,0,1920,1921,3,174,87,0,1921,1922,5,88,0,0,1922,1923,
	3,100,50,0,1923,1924,5,3,0,0,1924,1943,1,0,0,0,1925,1926,5,2,0,0,1926,1927,
	3,94,47,0,1927,1928,5,3,0,0,1928,1943,1,0,0,0,1929,1930,5,97,0,0,1930,1939,
	5,2,0,0,1931,1936,3,166,83,0,1932,1933,5,4,0,0,1933,1935,3,166,83,0,1934,
	1932,1,0,0,0,1935,1938,1,0,0,0,1936,1934,1,0,0,0,1936,1937,1,0,0,0,1937,
	1940,1,0,0,0,1938,1936,1,0,0,0,1939,1931,1,0,0,0,1939,1940,1,0,0,0,1940,
	1941,1,0,0,0,1941,1943,5,3,0,0,1942,1693,1,0,0,0,1942,1695,1,0,0,0,1942,
	1696,1,0,0,0,1942,1699,1,0,0,0,1942,1702,1,0,0,0,1942,1703,1,0,0,0,1942,
	1704,1,0,0,0,1942,1705,1,0,0,0,1942,1706,1,0,0,0,1942,1707,1,0,0,0,1942,
	1714,1,0,0,0,1942,1724,1,0,0,0,1942,1736,1,0,0,0,1942,1747,1,0,0,0,1942,
	1786,1,0,0,0,1942,1789,1,0,0,0,1942,1793,1,0,0,0,1942,1807,1,0,0,0,1942,
	1811,1,0,0,0,1942,1816,1,0,0,0,1942,1829,1,0,0,0,1942,1841,1,0,0,0,1942,
	1848,1,0,0,0,1942,1855,1,0,0,0,1942,1868,1,0,0,0,1942,1869,1,0,0,0,1942,
	1870,1,0,0,0,1942,1876,1,0,0,0,1942,1882,1,0,0,0,1942,1888,1,0,0,0,1942,
	1894,1,0,0,0,1942,1895,1,0,0,0,1942,1896,1,0,0,0,1942,1897,1,0,0,0,1942,
	1898,1,0,0,0,1942,1909,1,0,0,0,1942,1918,1,0,0,0,1942,1925,1,0,0,0,1942,
	1929,1,0,0,0,1943,1954,1,0,0,0,1944,1945,10,17,0,0,1945,1946,5,7,0,0,1946,
	1947,3,100,50,0,1947,1948,5,8,0,0,1948,1953,1,0,0,0,1949,1950,10,15,0,0,
	1950,1951,5,1,0,0,1951,1953,3,174,87,0,1952,1944,1,0,0,0,1952,1949,1,0,
	0,0,1953,1956,1,0,0,0,1954,1952,1,0,0,0,1954,1955,1,0,0,0,1955,103,1,0,
	0,0,1956,1954,1,0,0,0,1957,1958,7,16,0,0,1958,105,1,0,0,0,1959,1960,5,102,
	0,0,1960,1964,5,150,0,0,1961,1962,5,184,0,0,1962,1964,5,150,0,0,1963,1959,
	1,0,0,0,1963,1961,1,0,0,0,1964,107,1,0,0,0,1965,1972,5,262,0,0,1966,1969,
	5,263,0,0,1967,1968,5,226,0,0,1968,1970,5,262,0,0,1969,1967,1,0,0,0,1969,
	1970,1,0,0,0,1970,1972,1,0,0,0,1971,1965,1,0,0,0,1971,1966,1,0,0,0,1972,
	109,1,0,0,0,1973,1974,5,218,0,0,1974,1975,5,248,0,0,1975,1980,3,118,59,
	0,1976,1977,5,218,0,0,1977,1978,5,248,0,0,1978,1980,3,108,54,0,1979,1973,
	1,0,0,0,1979,1976,1,0,0,0,1980,111,1,0,0,0,1981,1982,7,17,0,0,1982,113,
	1,0,0,0,1983,1984,7,18,0,0,1984,115,1,0,0,0,1985,1986,7,19,0,0,1986,117,
	1,0,0,0,1987,1989,5,110,0,0,1988,1990,7,14,0,0,1989,1988,1,0,0,0,1989,1990,
	1,0,0,0,1990,1991,1,0,0,0,1991,1992,3,108,54,0,1992,1995,3,120,60,0,1993,
	1994,5,220,0,0,1994,1996,3,120,60,0,1995,1993,1,0,0,0,1995,1996,1,0,0,0,
	1996,119,1,0,0,0,1997,1998,7,20,0,0,1998,121,1,0,0,0,1999,2000,7,21,0,0,
	2000,123,1,0,0,0,2001,2002,6,62,-1,0,2002,2003,5,192,0,0,2003,2004,5,2,
	0,0,2004,2009,3,126,63,0,2005,2006,5,4,0,0,2006,2008,3,126,63,0,2007,2005,
	1,0,0,0,2008,2011,1,0,0,0,2009,2007,1,0,0,0,2009,2010,1,0,0,0,2010,2012,
	1,0,0,0,2011,2009,1,0,0,0,2012,2013,5,3,0,0,2013,2093,1,0,0,0,2014,2015,
	5,110,0,0,2015,2018,3,120,60,0,2016,2017,5,220,0,0,2017,2019,3,120,60,0,
	2018,2016,1,0,0,0,2018,2019,1,0,0,0,2019,2093,1,0,0,0,2020,2025,5,219,0,
	0,2021,2022,5,2,0,0,2022,2023,3,128,64,0,2023,2024,5,3,0,0,2024,2026,1,
	0,0,0,2025,2021,1,0,0,0,2025,2026,1,0,0,0,2026,2030,1,0,0,0,2027,2028,5,
	244,0,0,2028,2029,5,218,0,0,2029,2031,5,248,0,0,2030,2027,1,0,0,0,2030,
	2031,1,0,0,0,2031,2093,1,0,0,0,2032,2037,5,219,0,0,2033,2034,5,2,0,0,2034,
	2035,3,128,64,0,2035,2036,5,3,0,0,2036,2038,1,0,0,0,2037,2033,1,0,0,0,2037,
	2038,1,0,0,0,2038,2039,1,0,0,0,2039,2040,5,243,0,0,2040,2041,5,218,0,0,
	2041,2093,5,248,0,0,2042,2047,5,218,0,0,2043,2044,5,2,0,0,2044,2045,3,128,
	64,0,2045,2046,5,3,0,0,2046,2048,1,0,0,0,2047,2043,1,0,0,0,2047,2048,1,
	0,0,0,2048,2052,1,0,0,0,2049,2050,5,244,0,0,2050,2051,5,218,0,0,2051,2053,
	5,248,0,0,2052,2049,1,0,0,0,2052,2053,1,0,0,0,2053,2093,1,0,0,0,2054,2059,
	5,218,0,0,2055,2056,5,2,0,0,2056,2057,3,128,64,0,2057,2058,5,3,0,0,2058,
	2060,1,0,0,0,2059,2055,1,0,0,0,2059,2060,1,0,0,0,2060,2061,1,0,0,0,2061,
	2062,5,243,0,0,2062,2063,5,218,0,0,2063,2093,5,248,0,0,2064,2065,5,68,0,
	0,2065,2093,5,172,0,0,2066,2067,5,25,0,0,2067,2068,5,251,0,0,2068,2069,
	3,124,62,0,2069,2070,5,253,0,0,2070,2093,1,0,0,0,2071,2072,5,128,0,0,2072,
	2073,5,251,0,0,2073,2074,3,124,62,0,2074,2075,5,4,0,0,2075,2076,3,124,62,
	0,2076,2077,5,253,0,0,2077,2093,1,0,0,0,2078,2090,3,174,87,0,2079,2080,
	5,2,0,0,2080,2085,3,128,64,0,2081,2082,5,4,0,0,2082,2084,3,128,64,0,2083,
	2081,1,0,0,0,2084,2087,1,0,0,0,2085,2083,1,0,0,0,2085,2086,1,0,0,0,2086,
	2088,1,0,0,0,2087,2085,1,0,0,0,2088,2089,5,3,0,0,2089,2091,1,0,0,0,2090,
	2079,1,0,0,0,2090,2091,1,0,0,0,2091,2093,1,0,0,0,2092,2001,1,0,0,0,2092,
	2014,1,0,0,0,2092,2020,1,0,0,0,2092,2032,1,0,0,0,2092,2042,1,0,0,0,2092,
	2054,1,0,0,0,2092,2064,1,0,0,0,2092,2066,1,0,0,0,2092,2071,1,0,0,0,2092,
	2078,1,0,0,0,2093,2103,1,0,0,0,2094,2095,10,2,0,0,2095,2099,5,25,0,0,2096,
	2097,5,7,0,0,2097,2098,5,265,0,0,2098,2100,5,8,0,0,2099,2096,1,0,0,0,2099,
	2100,1,0,0,0,2100,2102,1,0,0,0,2101,2094,1,0,0,0,2102,2105,1,0,0,0,2103,
	2101,1,0,0,0,2103,2104,1,0,0,0,2104,125,1,0,0,0,2105,2103,1,0,0,0,2106,
	2111,3,124,62,0,2107,2108,3,174,87,0,2108,2109,3,124,62,0,2109,2111,1,0,
	0,0,2110,2106,1,0,0,0,2110,2107,1,0,0,0,2111,127,1,0,0,0,2112,2115,5,265,
	0,0,2113,2115,3,124,62,0,2114,2112,1,0,0,0,2114,2113,1,0,0,0,2115,129,1,
	0,0,0,2116,2117,5,240,0,0,2117,2118,3,94,47,0,2118,2119,5,216,0,0,2119,
	2120,3,94,47,0,2120,131,1,0,0,0,2121,2122,5,82,0,0,2122,2123,5,2,0,0,2123,
	2124,5,241,0,0,2124,2125,3,96,48,0,2125,2126,5,3,0,0,2126,133,1,0,0,0,2127,
	2128,5,240,0,0,2128,2131,5,130,0,0,2129,2130,5,23,0,0,2130,2132,3,94,47,
	0,2131,2129,1,0,0,0,2131,2132,1,0,0,0,2132,2133,1,0,0,0,2133,2134,5,216,
	0,0,2134,2135,5,232,0,0,2135,2136,5,203,0,0,2136,2137,3,174,87,0,2137,2138,
	5,249,0,0,2138,2146,3,94,47,0,2139,2140,5,4,0,0,2140,2141,3,174,87,0,2141,
	2142,5,249,0,0,2142,2143,3,94,47,0,2143,2145,1,0,0,0,2144,2139,1,0,0,0,
	2145,2148,1,0,0,0,2146,2144,1,0,0,0,2146,2147,1,0,0,0,2147,2192,1,0,0,0,
	2148,2146,1,0,0,0,2149,2150,5,240,0,0,2150,2153,5,130,0,0,2151,2152,5,23,
	0,0,2152,2154,3,94,47,0,2153,2151,1,0,0,0,2153,2154,1,0,0,0,2154,2155,1,
	0,0,0,2155,2156,5,216,0,0,2156,2192,5,62,0,0,2157,2158,5,240,0,0,2158,2159,
	5,147,0,0,2159,2162,5,130,0,0,2160,2161,5,23,0,0,2161,2163,3,94,47,0,2162,
	2160,1,0,0,0,2162,2163,1,0,0,0,2163,2164,1,0,0,0,2164,2165,5,216,0,0,2165,
	2177,5,108,0,0,2166,2167,5,2,0,0,2167,2172,3,174,87,0,2168,2169,5,4,0,0,
	2169,2171,3,174,87,0,2170,2168,1,0,0,0,2171,2174,1,0,0,0,2172,2170,1,0,
	0,0,2172,2173,1,0,0,0,2173,2175,1,0,0,0,2174,2172,1,0,0,0,2175,2176,5,3,
	0,0,2176,2178,1,0,0,0,2177,2166,1,0,0,0,2177,2178,1,0,0,0,2178,2179,1,0,
	0,0,2179,2180,5,237,0,0,2180,2181,5,2,0,0,2181,2186,3,94,47,0,2182,2183,
	5,4,0,0,2183,2185,3,94,47,0,2184,2182,1,0,0,0,2185,2188,1,0,0,0,2186,2184,
	1,0,0,0,2186,2187,1,0,0,0,2187,2189,1,0,0,0,2188,2186,1,0,0,0,2189,2190,
	5,3,0,0,2190,2192,1,0,0,0,2191,2127,1,0,0,0,2191,2149,1,0,0,0,2191,2157,
	1,0,0,0,2192,135,1,0,0,0,2193,2199,5,162,0,0,2194,2200,3,174,87,0,2195,
	2196,5,2,0,0,2196,2197,3,56,28,0,2197,2198,5,3,0,0,2198,2200,1,0,0,0,2199,
	2194,1,0,0,0,2199,2195,1,0,0,0,2200,137,1,0,0,0,2201,2202,5,134,0,0,2202,
	2207,3,76,38,0,2203,2204,5,4,0,0,2204,2206,3,76,38,0,2205,2203,1,0,0,0,
	2206,2209,1,0,0,0,2207,2205,1,0,0,0,2207,2208,1,0,0,0,2208,2211,1,0,0,0,
	2209,2207,1,0,0,0,2210,2201,1,0,0,0,2210,2211,1,0,0,0,2211,2212,1,0,0,0,
	2212,2216,3,140,70,0,2213,2214,5,19,0,0,2214,2215,5,129,0,0,2215,2217,3,
	82,41,0,2216,2213,1,0,0,0,2216,2217,1,0,0,0,2217,2219,1,0,0,0,2218,2220,
	7,13,0,0,2219,2218,1,0,0,0,2219,2220,1,0,0,0,2220,2226,1,0,0,0,2221,2222,
	5,167,0,0,2222,2223,5,2,0,0,2223,2224,3,144,72,0,2224,2225,5,3,0,0,2225,
	2227,1,0,0,0,2226,2221,1,0,0,0,2226,2227,1,0,0,0,2227,2237,1,0,0,0,2228,
	2229,5,209,0,0,2229,2234,3,84,42,0,2230,2231,5,4,0,0,2231,2233,3,84,42,
	0,2232,2230,1,0,0,0,2233,2236,1,0,0,0,2234,2232,1,0,0,0,2234,2235,1,0,0,
	0,2235,2238,1,0,0,0,2236,2234,1,0,0,0,2237,2228,1,0,0,0,2237,2238,1,0,0,
	0,2238,2248,1,0,0,0,2239,2240,5,65,0,0,2240,2245,3,86,43,0,2241,2242,5,
	4,0,0,2242,2244,3,86,43,0,2243,2241,1,0,0,0,2244,2247,1,0,0,0,2245,2243,
	1,0,0,0,2245,2246,1,0,0,0,2246,2249,1,0,0,0,2247,2245,1,0,0,0,2248,2239,
	1,0,0,0,2248,2249,1,0,0,0,2249,139,1,0,0,0,2250,2251,5,176,0,0,2251,2275,
	3,142,71,0,2252,2253,5,193,0,0,2253,2275,3,142,71,0,2254,2255,5,98,0,0,
	2255,2275,3,142,71,0,2256,2257,5,176,0,0,2257,2258,5,31,0,0,2258,2259,3,
	142,71,0,2259,2260,5,23,0,0,2260,2261,3,142,71,0,2261,2275,1,0,0,0,2262,
	2263,5,193,0,0,2263,2264,5,31,0,0,2264,2265,3,142,71,0,2265,2266,5,23,0,
	0,2266,2267,3,142,71,0,2267,2275,1,0,0,0,2268,2269,5,98,0,0,2269,2270,5,
	31,0,0,2270,2271,3,142,71,0,2271,2272,5,23,0,0,2272,2273,3,142,71,0,2273,
	2275,1,0,0,0,2274,2250,1,0,0,0,2274,2252,1,0,0,0,2274,2254,1,0,0,0,2274,
	2256,1,0,0,0,2274,2262,1,0,0,0,2274,2268,1,0,0,0,2275,141,1,0,0,0,2276,
	2277,5,227,0,0,2277,2286,5,171,0,0,2278,2279,5,227,0,0,2279,2286,5,85,0,
	0,2280,2281,5,47,0,0,2281,2286,5,192,0,0,2282,2283,3,94,47,0,2283,2284,
	7,22,0,0,2284,2286,1,0,0,0,2285,2276,1,0,0,0,2285,2278,1,0,0,0,2285,2280,
	1,0,0,0,2285,2282,1,0,0,0,2286,143,1,0,0,0,2287,2288,6,72,-1,0,2288,2290,
	3,146,73,0,2289,2291,3,148,74,0,2290,2289,1,0,0,0,2290,2291,1,0,0,0,2291,
	2299,1,0,0,0,2292,2293,10,2,0,0,2293,2298,3,144,72,3,2294,2295,10,1,0,0,
	2295,2296,5,9,0,0,2296,2298,3,144,72,2,2297,2292,1,0,0,0,2297,2294,1,0,
	0,0,2298,2301,1,0,0,0,2299,2297,1,0,0,0,2299,2300,1,0,0,0,2300,145,1,0,
	0,0,2301,2299,1,0,0,0,2302,2328,3,174,87,0,2303,2304,5,2,0,0,2304,2328,
	5,3,0,0,2305,2306,5,169,0,0,2306,2307,5,2,0,0,2307,2312,3,144,72,0,2308,
	2309,5,4,0,0,2309,2311,3,144,72,0,2310,2308,1,0,0,0,2311,2314,1,0,0,0,2312,
	2310,1,0,0,0,2312,2313,1,0,0,0,2313,2315,1,0,0,0,2314,2312,1,0,0,0,2315,
	2316,5,3,0,0,2316,2328,1,0,0,0,2317,2318,5,2,0,0,2318,2319,3,144,72,0,2319,
	2320,5,3,0,0,2320,2328,1,0,0,0,2321,2328,5,10,0,0,2322,2328,5,11,0,0,2323,
	2324,5,12,0,0,2324,2325,3,144,72,0,2325,2326,5,13,0,0,2326,2328,1,0,0,0,
	2327,2302,1,0,0,0,2327,2303,1,0,0,0,2327,2305,1,0,0,0,2327,2317,1,0,0,0,
	2327,2321,1,0,0,0,2327,2322,1,0,0,0,2327,2323,1,0,0,0,2328,147,1,0,0,0,
	2329,2331,5,257,0,0,2330,2332,5,261,0,0,2331,2330,1,0,0,0,2331,2332,1,0,
	0,0,2332,2360,1,0,0,0,2333,2335,5,255,0,0,2334,2336,5,261,0,0,2335,2334,
	1,0,0,0,2335,2336,1,0,0,0,2336,2360,1,0,0,0,2337,2339,5,261,0,0,2338,2340,
	5,261,0,0,2339,2338,1,0,0,0,2339,2340,1,0,0,0,2340,2360,1,0,0,0,2341,2342,
	5,14,0,0,2342,2343,5,265,0,0,2343,2345,5,15,0,0,2344,2346,5,261,0,0,2345,
	2344,1,0,0,0,2345,2346,1,0,0,0,2346,2360,1,0,0,0,2347,2349,5,14,0,0,2348,
	2350,5,265,0,0,2349,2348,1,0,0,0,2349,2350,1,0,0,0,2350,2351,1,0,0,0,2351,
	2353,5,4,0,0,2352,2354,5,265,0,0,2353,2352,1,0,0,0,2353,2354,1,0,0,0,2354,
	2355,1,0,0,0,2355,2357,5,15,0,0,2356,2358,5,261,0,0,2357,2356,1,0,0,0,2357,
	2358,1,0,0,0,2358,2360,1,0,0,0,2359,2329,1,0,0,0,2359,2333,1,0,0,0,2359,
	2337,1,0,0,0,2359,2341,1,0,0,0,2359,2347,1,0,0,0,2360,149,1,0,0,0,2361,
	2362,3,174,87,0,2362,2363,5,249,0,0,2363,2364,3,94,47,0,2364,151,1,0,0,
	0,2365,2366,5,87,0,0,2366,2370,7,23,0,0,2367,2368,5,225,0,0,2368,2370,7,
	24,0,0,2369,2365,1,0,0,0,2369,2367,1,0,0,0,2370,153,1,0,0,0,2371,2372,5,
	115,0,0,2372,2373,5,121,0,0,2373,2377,3,156,78,0,2374,2375,5,177,0,0,2375,
	2377,7,25,0,0,2376,2371,1,0,0,0,2376,2374,1,0,0,0,2377,155,1,0,0,0,2378,
	2379,5,177,0,0,2379,2386,5,228,0,0,2380,2381,5,177,0,0,2381,2386,5,42,0,
	0,2382,2383,5,181,0,0,2383,2386,5,177,0,0,2384,2386,5,201,0,0,2385,2378,
	1,0,0,0,2385,2380,1,0,0,0,2385,2382,1,0,0,0,2385,2384,1,0,0,0,2386,157,
	1,0,0,0,2387,2393,3,94,47,0,2388,2389,3,174,87,0,2389,2390,5,16,0,0,2390,
	2391,3,94,47,0,2391,2393,1,0,0,0,2392,2387,1,0,0,0,2392,2388,1,0,0,0,2393,
	159,1,0,0,0,2394,2395,3,174,87,0,2395,2396,5,1,0,0,2396,2397,3,174,87,0,
	2397,2400,1,0,0,0,2398,2400,3,174,87,0,2399,2394,1,0,0,0,2399,2398,1,0,
	0,0,2400,161,1,0,0,0,2401,2406,3,160,80,0,2402,2403,5,4,0,0,2403,2405,3,
	160,80,0,2404,2402,1,0,0,0,2405,2408,1,0,0,0,2406,2404,1,0,0,0,2406,2407,
	1,0,0,0,2407,163,1,0,0,0,2408,2406,1,0,0,0,2409,2410,7,26,0,0,2410,165,
	1,0,0,0,2411,2416,3,174,87,0,2412,2413,5,1,0,0,2413,2415,3,174,87,0,2414,
	2412,1,0,0,0,2415,2418,1,0,0,0,2416,2414,1,0,0,0,2416,2417,1,0,0,0,2417,
	167,1,0,0,0,2418,2416,1,0,0,0,2419,2423,3,170,85,0,2420,2423,5,55,0,0,2421,
	2423,5,51,0,0,2422,2419,1,0,0,0,2422,2420,1,0,0,0,2422,2421,1,0,0,0,2423,
	169,1,0,0,0,2424,2430,3,174,87,0,2425,2426,5,234,0,0,2426,2430,3,174,87,
	0,2427,2428,5,188,0,0,2428,2430,3,174,87,0,2429,2424,1,0,0,0,2429,2425,
	1,0,0,0,2429,2427,1,0,0,0,2430,171,1,0,0,0,2431,2436,3,174,87,0,2432,2433,
	5,4,0,0,2433,2435,3,174,87,0,2434,2432,1,0,0,0,2435,2438,1,0,0,0,2436,2434,
	1,0,0,0,2436,2437,1,0,0,0,2437,173,1,0,0,0,2438,2436,1,0,0,0,2439,2445,
	5,268,0,0,2440,2445,5,270,0,0,2441,2445,3,178,89,0,2442,2445,5,271,0,0,
	2443,2445,5,269,0,0,2444,2439,1,0,0,0,2444,2440,1,0,0,0,2444,2441,1,0,0,
	0,2444,2442,1,0,0,0,2444,2443,1,0,0,0,2445,175,1,0,0,0,2446,2448,5,256,
	0,0,2447,2446,1,0,0,0,2447,2448,1,0,0,0,2448,2449,1,0,0,0,2449,2459,5,266,
	0,0,2450,2452,5,256,0,0,2451,2450,1,0,0,0,2451,2452,1,0,0,0,2452,2453,1,
	0,0,0,2453,2459,5,267,0,0,2454,2456,5,256,0,0,2455,2454,1,0,0,0,2455,2456,
	1,0,0,0,2456,2457,1,0,0,0,2457,2459,5,265,0,0,2458,2447,1,0,0,0,2458,2451,
	1,0,0,0,2458,2455,1,0,0,0,2459,177,1,0,0,0,2460,2461,7,27,0,0,2461,179,
	1,0,0,0,324,183,193,197,201,205,209,213,228,233,237,243,247,268,272,276,
	280,288,292,295,302,311,317,321,327,334,343,352,366,375,381,388,398,405,
	413,421,450,453,456,460,466,471,478,483,487,495,501,505,519,527,546,571,
	574,584,588,601,607,612,616,622,631,637,641,648,652,660,665,669,677,685,
	690,694,704,711,716,720,730,733,737,740,748,753,777,783,785,791,797,799,
	807,809,815,821,823,838,843,850,862,864,872,874,892,895,899,903,921,924,
	940,950,955,961,964,973,985,988,994,1001,1006,1012,1016,1020,1026,1037,
	1046,1056,1059,1064,1066,1073,1079,1081,1085,1095,1101,1104,1106,1118,1125,
	1129,1133,1137,1144,1153,1156,1160,1165,1169,1177,1180,1183,1190,1201,1204,
	1214,1217,1228,1233,1241,1244,1248,1257,1266,1269,1278,1281,1284,1288,1299,
	1302,1309,1312,1331,1335,1339,1343,1347,1351,1353,1364,1369,1378,1392,1395,
	1404,1407,1415,1418,1421,1426,1429,1441,1444,1452,1457,1461,1463,1465,1480,
	1482,1493,1514,1524,1535,1539,1541,1549,1566,1572,1583,1590,1594,1602,1604,
	1617,1625,1634,1640,1648,1654,1658,1663,1668,1674,1688,1690,1720,1731,1741,
	1744,1747,1752,1759,1762,1771,1774,1778,1781,1784,1799,1802,1821,1825,1833,
	1837,1862,1865,1874,1880,1886,1892,1905,1914,1936,1939,1942,1952,1954,1963,
	1969,1971,1979,1989,1995,2009,2018,2025,2030,2037,2047,2052,2059,2085,2090,
	2092,2099,2103,2110,2114,2131,2146,2153,2162,2172,2177,2186,2191,2199,2207,
	2210,2216,2219,2226,2234,2237,2245,2248,2274,2285,2290,2297,2299,2312,2327,
	2331,2335,2339,2345,2349,2353,2357,2359,2369,2376,2385,2392,2399,2406,2416,
	2422,2429,2436,2444,2447,2451,2455,2458];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TrinoSqlParser.__ATN) {
			TrinoSqlParser.__ATN = new ATNDeserializer().deserialize(TrinoSqlParser._serializedATN);
		}

		return TrinoSqlParser.__ATN;
	}


	static DecisionsToDFA = TrinoSqlParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(TrinoSqlParser.EOF, 0);
	}
	public statements_list(): StatementsContext[] {
		return this.getTypedRuleContexts(StatementsContext) as StatementsContext[];
	}
	public statements(i: number): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, i) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_program;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return TrinoSqlParser.RULE_statements;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterStatements) {
	 		listener.enterStatements(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitStatements) {
	 		listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleStatementContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TrinoSqlParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_singleStatement;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSingleStatement) {
	 		listener.enterSingleStatement(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSingleStatement) {
	 		listener.exitSingleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSingleStatement) {
			return visitor.visitSingleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StandaloneExpressionContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TrinoSqlParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_standaloneExpression;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterStandaloneExpression) {
	 		listener.enterStandaloneExpression(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitStandaloneExpression) {
	 		listener.exitStandaloneExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitStandaloneExpression) {
			return visitor.visitStandaloneExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StandalonePathSpecificationContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pathSpecification(): PathSpecificationContext {
		return this.getTypedRuleContext(PathSpecificationContext, 0) as PathSpecificationContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TrinoSqlParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_standalonePathSpecification;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterStandalonePathSpecification) {
	 		listener.enterStandalonePathSpecification(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitStandalonePathSpecification) {
	 		listener.exitStandalonePathSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitStandalonePathSpecification) {
			return visitor.visitStandalonePathSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StandaloneTypeContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TrinoSqlParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_standaloneType;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterStandaloneType) {
	 		listener.enterStandaloneType(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitStandaloneType) {
	 		listener.exitStandaloneType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitStandaloneType) {
			return visitor.visitStandaloneType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StandaloneRowPatternContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public rowPattern(): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, 0) as RowPatternContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TrinoSqlParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_standaloneRowPattern;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterStandaloneRowPattern) {
	 		listener.enterStandaloneRowPattern(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitStandaloneRowPattern) {
	 		listener.exitStandaloneRowPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitStandaloneRowPattern) {
			return visitor.visitStandaloneRowPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_statement;
	}
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ExplainContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXPLAIN(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXPLAIN, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public ANALYZE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ANALYZE, 0);
	}
	public VERBOSE(): TerminalNode {
		return this.getToken(TrinoSqlParser.VERBOSE, 0);
	}
	public explainOption_list(): ExplainOptionContext[] {
		return this.getTypedRuleContexts(ExplainOptionContext) as ExplainOptionContext[];
	}
	public explainOption(i: number): ExplainOptionContext {
		return this.getTypedRuleContext(ExplainOptionContext, i) as ExplainOptionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterExplain) {
	 		listener.enterExplain(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitExplain) {
	 		listener.exitExplain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitExplain) {
			return visitor.visitExplain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrepareContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PREPARE(): TerminalNode {
		return this.getToken(TrinoSqlParser.PREPARE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(TrinoSqlParser.FROM, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterPrepare) {
	 		listener.enterPrepare(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitPrepare) {
	 		listener.exitPrepare(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitPrepare) {
			return visitor.visitPrepare(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropMaterializedViewContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP(): TerminalNode {
		return this.getToken(TrinoSqlParser.DROP, 0);
	}
	public MATERIALIZED(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATERIALIZED, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(TrinoSqlParser.VIEW, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IF(): TerminalNode {
		return this.getToken(TrinoSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXISTS, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDropMaterializedView) {
	 		listener.enterDropMaterializedView(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDropMaterializedView) {
	 		listener.exitDropMaterializedView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitDropMaterializedView) {
			return visitor.visitDropMaterializedView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetMaterializedViewPropertiesContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALTER, 0);
	}
	public MATERIALIZED(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATERIALIZED, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(TrinoSqlParser.VIEW, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public SET(): TerminalNode {
		return this.getToken(TrinoSqlParser.SET, 0);
	}
	public PROPERTIES(): TerminalNode {
		return this.getToken(TrinoSqlParser.PROPERTIES, 0);
	}
	public propertyAssignments(): PropertyAssignmentsContext {
		return this.getTypedRuleContext(PropertyAssignmentsContext, 0) as PropertyAssignmentsContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSetMaterializedViewProperties) {
	 		listener.enterSetMaterializedViewProperties(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSetMaterializedViewProperties) {
	 		listener.exitSetMaterializedViewProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSetMaterializedViewProperties) {
			return visitor.visitSetMaterializedViewProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UseContext extends StatementContext {
	public _schema!: IdentifierContext;
	public _catalog!: IdentifierContext;
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public USE(): TerminalNode {
		return this.getToken(TrinoSqlParser.USE, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterUse) {
	 		listener.enterUse(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitUse) {
	 		listener.exitUse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitUse) {
			return visitor.visitUse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeallocateContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DEALLOCATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.DEALLOCATE, 0);
	}
	public PREPARE(): TerminalNode {
		return this.getToken(TrinoSqlParser.PREPARE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDeallocate) {
	 		listener.enterDeallocate(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDeallocate) {
	 		listener.exitDeallocate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public RENAME(): TerminalNode {
		return this.getToken(TrinoSqlParser.RENAME, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(TrinoSqlParser.TO, 0);
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public IF(): TerminalNode {
		return this.getToken(TrinoSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXISTS, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRenameTable) {
	 		listener.enterRenameTable(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRenameTable) {
	 		listener.exitRenameTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitRenameTable) {
			return visitor.visitRenameTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommitContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMIT(): TerminalNode {
		return this.getToken(TrinoSqlParser.COMMIT, 0);
	}
	public WORK(): TerminalNode {
		return this.getToken(TrinoSqlParser.WORK, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCommit) {
	 		listener.enterCommit(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCommit) {
	 		listener.exitCommit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.CREATE, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROLE, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(TrinoSqlParser.WITH, 0);
	}
	public ADMIN(): TerminalNode {
		return this.getToken(TrinoSqlParser.ADMIN, 0);
	}
	public grantor(): GrantorContext {
		return this.getTypedRuleContext(GrantorContext, 0) as GrantorContext;
	}
	public IN(): TerminalNode {
		return this.getToken(TrinoSqlParser.IN, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCreateRole) {
	 		listener.enterCreateRole(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCreateRole) {
	 		listener.exitCreateRole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public DROP(): TerminalNode {
		return this.getToken(TrinoSqlParser.DROP, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(TrinoSqlParser.COLUMN, 0);
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public IF_list(): TerminalNode[] {
	    	return this.getTokens(TrinoSqlParser.IF);
	}
	public IF(i: number): TerminalNode {
		return this.getToken(TrinoSqlParser.IF, i);
	}
	public EXISTS_list(): TerminalNode[] {
	    	return this.getTokens(TrinoSqlParser.EXISTS);
	}
	public EXISTS(i: number): TerminalNode {
		return this.getToken(TrinoSqlParser.EXISTS, i);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDropColumn) {
	 		listener.enterDropColumn(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDropColumn) {
	 		listener.exitDropColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitDropColumn) {
			return visitor.visitDropColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropViewContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP(): TerminalNode {
		return this.getToken(TrinoSqlParser.DROP, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(TrinoSqlParser.VIEW, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IF(): TerminalNode {
		return this.getToken(TrinoSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXISTS, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDropView) {
	 		listener.enterDropView(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDropView) {
	 		listener.exitDropView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public TABLES(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLES, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public LIKE(): TerminalNode {
		return this.getToken(TrinoSqlParser.LIKE, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(TrinoSqlParser.FROM, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(TrinoSqlParser.IN, 0);
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ESCAPE, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterShowTables) {
	 		listener.enterShowTables(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitShowTables) {
	 		listener.exitShowTables(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitShowTables) {
			return visitor.visitShowTables(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetViewAuthorizationContext extends StatementContext {
	public _from_!: QualifiedNameContext;
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALTER, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(TrinoSqlParser.VIEW, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(TrinoSqlParser.SET, 0);
	}
	public AUTHORIZATION(): TerminalNode {
		return this.getToken(TrinoSqlParser.AUTHORIZATION, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSetViewAuthorization) {
	 		listener.enterSetViewAuthorization(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSetViewAuthorization) {
	 		listener.exitSetViewAuthorization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSetViewAuthorization) {
			return visitor.visitSetViewAuthorization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowTableCommentContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(TrinoSqlParser.COMMENT, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(TrinoSqlParser.ON, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterShowTableComment) {
	 		listener.enterShowTableComment(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitShowTableComment) {
	 		listener.exitShowTableComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public CATALOGS(): TerminalNode {
		return this.getToken(TrinoSqlParser.CATALOGS, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(TrinoSqlParser.LIKE, 0);
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ESCAPE, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterShowCatalogs) {
	 		listener.enterShowCatalogs(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitShowCatalogs) {
	 		listener.exitShowCatalogs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitShowCatalogs) {
			return visitor.visitShowCatalogs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowRolesContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public ROLES(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROLES, 0);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(TrinoSqlParser.CURRENT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(TrinoSqlParser.FROM, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(TrinoSqlParser.IN, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterShowRoles) {
	 		listener.enterShowRoles(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitShowRoles) {
	 		listener.exitShowRoles(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitShowRoles) {
			return visitor.visitShowRoles(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MergeContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MERGE(): TerminalNode {
		return this.getToken(TrinoSqlParser.MERGE, 0);
	}
	public INTO(): TerminalNode {
		return this.getToken(TrinoSqlParser.INTO, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public USING(): TerminalNode {
		return this.getToken(TrinoSqlParser.USING, 0);
	}
	public relation(): RelationContext {
		return this.getTypedRuleContext(RelationContext, 0) as RelationContext;
	}
	public ON(): TerminalNode {
		return this.getToken(TrinoSqlParser.ON, 0);
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
		return this.getToken(TrinoSqlParser.AS, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterMerge) {
	 		listener.enterMerge(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitMerge) {
	 		listener.exitMerge(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public RENAME(): TerminalNode {
		return this.getToken(TrinoSqlParser.RENAME, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(TrinoSqlParser.COLUMN, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(TrinoSqlParser.TO, 0);
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
	    	return this.getTokens(TrinoSqlParser.IF);
	}
	public IF(i: number): TerminalNode {
		return this.getToken(TrinoSqlParser.IF, i);
	}
	public EXISTS_list(): TerminalNode[] {
	    	return this.getTokens(TrinoSqlParser.EXISTS);
	}
	public EXISTS(i: number): TerminalNode {
		return this.getToken(TrinoSqlParser.EXISTS, i);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRenameColumn) {
	 		listener.enterRenameColumn(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRenameColumn) {
	 		listener.exitRenameColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitRenameColumn) {
			return visitor.visitRenameColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommentColumnContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(TrinoSqlParser.COMMENT, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(TrinoSqlParser.ON, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(TrinoSqlParser.COLUMN, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IS(): TerminalNode {
		return this.getToken(TrinoSqlParser.IS, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public NULL(): TerminalNode {
		return this.getToken(TrinoSqlParser.NULL, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCommentColumn) {
	 		listener.enterCommentColumn(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCommentColumn) {
	 		listener.exitCommentColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCommentColumn) {
			return visitor.visitCommentColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RevokeRolesContext extends StatementContext {
	public _catalog!: IdentifierContext;
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REVOKE(): TerminalNode {
		return this.getToken(TrinoSqlParser.REVOKE, 0);
	}
	public roles(): RolesContext {
		return this.getTypedRuleContext(RolesContext, 0) as RolesContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(TrinoSqlParser.FROM, 0);
	}
	public principal_list(): PrincipalContext[] {
		return this.getTypedRuleContexts(PrincipalContext) as PrincipalContext[];
	}
	public principal(i: number): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, i) as PrincipalContext;
	}
	public ADMIN(): TerminalNode {
		return this.getToken(TrinoSqlParser.ADMIN, 0);
	}
	public OPTION(): TerminalNode {
		return this.getToken(TrinoSqlParser.OPTION, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(TrinoSqlParser.FOR, 0);
	}
	public GRANTED(): TerminalNode {
		return this.getToken(TrinoSqlParser.GRANTED, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(TrinoSqlParser.BY, 0);
	}
	public grantor(): GrantorContext {
		return this.getTypedRuleContext(GrantorContext, 0) as GrantorContext;
	}
	public IN(): TerminalNode {
		return this.getToken(TrinoSqlParser.IN, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRevokeRoles) {
	 		listener.enterRevokeRoles(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRevokeRoles) {
	 		listener.exitRevokeRoles(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitRevokeRoles) {
			return visitor.visitRevokeRoles(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCreateTableContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.CREATE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterShowCreateTable) {
	 		listener.enterShowCreateTable(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitShowCreateTable) {
	 		listener.exitShowCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public COLUMNS(): TerminalNode {
		return this.getToken(TrinoSqlParser.COLUMNS, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(TrinoSqlParser.FROM, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(TrinoSqlParser.IN, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public LIKE(): TerminalNode {
		return this.getToken(TrinoSqlParser.LIKE, 0);
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ESCAPE, 0);
	}
	public DESCRIBE(): TerminalNode {
		return this.getToken(TrinoSqlParser.DESCRIBE, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(TrinoSqlParser.DESC, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterShowColumns) {
	 		listener.enterShowColumns(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitShowColumns) {
	 		listener.exitShowColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitShowColumns) {
			return visitor.visitShowColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowRoleGrantsContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROLE, 0);
	}
	public GRANTS(): TerminalNode {
		return this.getToken(TrinoSqlParser.GRANTS, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(TrinoSqlParser.FROM, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(TrinoSqlParser.IN, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterShowRoleGrants) {
	 		listener.enterShowRoleGrants(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitShowRoleGrants) {
	 		listener.exitShowRoleGrants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public ADD(): TerminalNode {
		return this.getToken(TrinoSqlParser.ADD, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(TrinoSqlParser.COLUMN, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public columnDefinition(): ColumnDefinitionContext {
		return this.getTypedRuleContext(ColumnDefinitionContext, 0) as ColumnDefinitionContext;
	}
	public IF_list(): TerminalNode[] {
	    	return this.getTokens(TrinoSqlParser.IF);
	}
	public IF(i: number): TerminalNode {
		return this.getToken(TrinoSqlParser.IF, i);
	}
	public EXISTS_list(): TerminalNode[] {
	    	return this.getTokens(TrinoSqlParser.EXISTS);
	}
	public EXISTS(i: number): TerminalNode {
		return this.getToken(TrinoSqlParser.EXISTS, i);
	}
	public NOT(): TerminalNode {
		return this.getToken(TrinoSqlParser.NOT, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterAddColumn) {
	 		listener.enterAddColumn(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitAddColumn) {
	 		listener.exitAddColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitAddColumn) {
			return visitor.visitAddColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DenyContext extends StatementContext {
	public _grantee!: PrincipalContext;
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DENY(): TerminalNode {
		return this.getToken(TrinoSqlParser.DENY, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(TrinoSqlParser.ON, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public TO(): TerminalNode {
		return this.getToken(TrinoSqlParser.TO, 0);
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
		return this.getToken(TrinoSqlParser.ALL, 0);
	}
	public PRIVILEGES(): TerminalNode {
		return this.getToken(TrinoSqlParser.PRIVILEGES, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(TrinoSqlParser.SCHEMA, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDeny) {
	 		listener.enterDeny(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDeny) {
	 		listener.exitDeny(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitDeny) {
			return visitor.visitDeny(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ResetSessionContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RESET(): TerminalNode {
		return this.getToken(TrinoSqlParser.RESET, 0);
	}
	public SESSION(): TerminalNode {
		return this.getToken(TrinoSqlParser.SESSION, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterResetSession) {
	 		listener.enterResetSession(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitResetSession) {
	 		listener.exitResetSession(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitResetSession) {
			return visitor.visitResetSession(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InsertIntoContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INSERT(): TerminalNode {
		return this.getToken(TrinoSqlParser.INSERT, 0);
	}
	public INTO(): TerminalNode {
		return this.getToken(TrinoSqlParser.INTO, 0);
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
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterInsertInto) {
	 		listener.enterInsertInto(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitInsertInto) {
	 		listener.exitInsertInto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public SESSION(): TerminalNode {
		return this.getToken(TrinoSqlParser.SESSION, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(TrinoSqlParser.LIKE, 0);
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ESCAPE, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterShowSession) {
	 		listener.enterShowSession(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitShowSession) {
	 		listener.exitShowSession(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitShowSession) {
			return visitor.visitShowSession(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateSchemaContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.CREATE, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(TrinoSqlParser.SCHEMA, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IF(): TerminalNode {
		return this.getToken(TrinoSqlParser.IF, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(TrinoSqlParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXISTS, 0);
	}
	public AUTHORIZATION(): TerminalNode {
		return this.getToken(TrinoSqlParser.AUTHORIZATION, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(TrinoSqlParser.WITH, 0);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCreateSchema) {
	 		listener.enterCreateSchema(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCreateSchema) {
	 		listener.exitCreateSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCreateSchema) {
			return visitor.visitCreateSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecuteContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXECUTE(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXECUTE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public USING(): TerminalNode {
		return this.getToken(TrinoSqlParser.USING, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterExecute) {
	 		listener.enterExecute(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitExecute) {
	 		listener.exitExecute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitExecute) {
			return visitor.visitExecute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameSchemaContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALTER, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(TrinoSqlParser.SCHEMA, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public RENAME(): TerminalNode {
		return this.getToken(TrinoSqlParser.RENAME, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(TrinoSqlParser.TO, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRenameSchema) {
	 		listener.enterRenameSchema(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRenameSchema) {
	 		listener.exitRenameSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitRenameSchema) {
			return visitor.visitRenameSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropRoleContext extends StatementContext {
	public _name!: IdentifierContext;
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP(): TerminalNode {
		return this.getToken(TrinoSqlParser.DROP, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROLE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDropRole) {
	 		listener.enterDropRole(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDropRole) {
	 		listener.exitDropRole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitDropRole) {
			return visitor.visitDropRole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AnalyzeContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ANALYZE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ANALYZE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(TrinoSqlParser.WITH, 0);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterAnalyze) {
	 		listener.enterAnalyze(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitAnalyze) {
	 		listener.exitAnalyze(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitAnalyze) {
			return visitor.visitAnalyze(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetRoleContext extends StatementContext {
	public _role!: IdentifierContext;
	public _catalog!: IdentifierContext;
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SET(): TerminalNode {
		return this.getToken(TrinoSqlParser.SET, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROLE, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALL, 0);
	}
	public NONE(): TerminalNode {
		return this.getToken(TrinoSqlParser.NONE, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public IN(): TerminalNode {
		return this.getToken(TrinoSqlParser.IN, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSetRole) {
	 		listener.enterSetRole(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSetRole) {
	 		listener.exitSetRole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSetRole) {
			return visitor.visitSetRole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowGrantsContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public GRANTS(): TerminalNode {
		return this.getToken(TrinoSqlParser.GRANTS, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(TrinoSqlParser.ON, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterShowGrants) {
	 		listener.enterShowGrants(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitShowGrants) {
	 		listener.exitShowGrants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitShowGrants) {
			return visitor.visitShowGrants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropSchemaContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP(): TerminalNode {
		return this.getToken(TrinoSqlParser.DROP, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(TrinoSqlParser.SCHEMA, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IF(): TerminalNode {
		return this.getToken(TrinoSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXISTS, 0);
	}
	public CASCADE(): TerminalNode {
		return this.getToken(TrinoSqlParser.CASCADE, 0);
	}
	public RESTRICT(): TerminalNode {
		return this.getToken(TrinoSqlParser.RESTRICT, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDropSchema) {
	 		listener.enterDropSchema(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDropSchema) {
	 		listener.exitDropSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitDropSchema) {
			return visitor.visitDropSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetTableAuthorizationContext extends StatementContext {
	public _tableName!: QualifiedNameContext;
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(TrinoSqlParser.SET, 0);
	}
	public AUTHORIZATION(): TerminalNode {
		return this.getToken(TrinoSqlParser.AUTHORIZATION, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSetTableAuthorization) {
	 		listener.enterSetTableAuthorization(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSetTableAuthorization) {
	 		listener.exitSetTableAuthorization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSetTableAuthorization) {
			return visitor.visitSetTableAuthorization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCreateViewContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.CREATE, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(TrinoSqlParser.VIEW, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterShowCreateView) {
	 		listener.enterShowCreateView(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitShowCreateView) {
	 		listener.exitShowCreateView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitShowCreateView) {
			return visitor.visitShowCreateView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowColumnCommentContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(TrinoSqlParser.COMMENT, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(TrinoSqlParser.ON, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(TrinoSqlParser.COLUMN, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterShowColumnComment) {
	 		listener.enterShowColumnComment(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitShowColumnComment) {
	 		listener.exitShowColumnComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitShowColumnComment) {
			return visitor.visitShowColumnComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTableContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.CREATE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
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
		return this.getToken(TrinoSqlParser.IF, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(TrinoSqlParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXISTS, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(TrinoSqlParser.COMMENT, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(TrinoSqlParser.WITH, 0);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCreateTable) {
	 		listener.enterCreateTable(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCreateTable) {
	 		listener.exitCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCreateTable) {
			return visitor.visitCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StartTransactionContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public START(): TerminalNode {
		return this.getToken(TrinoSqlParser.START, 0);
	}
	public TRANSACTION(): TerminalNode {
		return this.getToken(TrinoSqlParser.TRANSACTION, 0);
	}
	public transactionMode_list(): TransactionModeContext[] {
		return this.getTypedRuleContexts(TransactionModeContext) as TransactionModeContext[];
	}
	public transactionMode(i: number): TransactionModeContext {
		return this.getTypedRuleContext(TransactionModeContext, i) as TransactionModeContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterStartTransaction) {
	 		listener.enterStartTransaction(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitStartTransaction) {
	 		listener.exitStartTransaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitStartTransaction) {
			return visitor.visitStartTransaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTableAsSelectContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.CREATE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public AS(): TerminalNode {
		return this.getToken(TrinoSqlParser.AS, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public IF(): TerminalNode {
		return this.getToken(TrinoSqlParser.IF, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(TrinoSqlParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXISTS, 0);
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
	public COMMENT(): TerminalNode {
		return this.getToken(TrinoSqlParser.COMMENT, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public WITH_list(): TerminalNode[] {
	    	return this.getTokens(TrinoSqlParser.WITH);
	}
	public WITH(i: number): TerminalNode {
		return this.getToken(TrinoSqlParser.WITH, i);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
	public DATA(): TerminalNode {
		return this.getToken(TrinoSqlParser.DATA, 0);
	}
	public NO(): TerminalNode {
		return this.getToken(TrinoSqlParser.NO, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCreateTableAsSelect) {
	 		listener.enterCreateTableAsSelect(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCreateTableAsSelect) {
	 		listener.exitCreateTableAsSelect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCreateTableAsSelect) {
			return visitor.visitCreateTableAsSelect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowStatsContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public STATS(): TerminalNode {
		return this.getToken(TrinoSqlParser.STATS, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(TrinoSqlParser.FOR, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterShowStats) {
	 		listener.enterShowStats(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitShowStats) {
	 		listener.exitShowStats(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitShowStats) {
			return visitor.visitShowStats(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCreateSchemaContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.CREATE, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(TrinoSqlParser.SCHEMA, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterShowCreateSchema) {
	 		listener.enterShowCreateSchema(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitShowCreateSchema) {
	 		listener.exitShowCreateSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitShowCreateSchema) {
			return visitor.visitShowCreateSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RevokeContext extends StatementContext {
	public _grantee!: PrincipalContext;
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REVOKE(): TerminalNode {
		return this.getToken(TrinoSqlParser.REVOKE, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(TrinoSqlParser.ON, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(TrinoSqlParser.FROM, 0);
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
		return this.getToken(TrinoSqlParser.ALL, 0);
	}
	public PRIVILEGES(): TerminalNode {
		return this.getToken(TrinoSqlParser.PRIVILEGES, 0);
	}
	public GRANT(): TerminalNode {
		return this.getToken(TrinoSqlParser.GRANT, 0);
	}
	public OPTION(): TerminalNode {
		return this.getToken(TrinoSqlParser.OPTION, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(TrinoSqlParser.FOR, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(TrinoSqlParser.SCHEMA, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRevoke) {
	 		listener.enterRevoke(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRevoke) {
	 		listener.exitRevoke(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitRevoke) {
			return visitor.visitRevoke(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UpdateContext extends StatementContext {
	public _where!: BooleanExpressionContext;
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UPDATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.UPDATE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public SET(): TerminalNode {
		return this.getToken(TrinoSqlParser.SET, 0);
	}
	public updateAssignment_list(): UpdateAssignmentContext[] {
		return this.getTypedRuleContexts(UpdateAssignmentContext) as UpdateAssignmentContext[];
	}
	public updateAssignment(i: number): UpdateAssignmentContext {
		return this.getTypedRuleContext(UpdateAssignmentContext, i) as UpdateAssignmentContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(TrinoSqlParser.WHERE, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterUpdate) {
	 		listener.enterUpdate(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitUpdate) {
	 		listener.exitUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitUpdate) {
			return visitor.visitUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableExecuteContext extends StatementContext {
	public _tableName!: QualifiedNameContext;
	public _procedureName!: IdentifierContext;
	public _where!: BooleanExpressionContext;
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public EXECUTE(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXECUTE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(TrinoSqlParser.WHERE, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public callArgument_list(): CallArgumentContext[] {
		return this.getTypedRuleContexts(CallArgumentContext) as CallArgumentContext[];
	}
	public callArgument(i: number): CallArgumentContext {
		return this.getTypedRuleContext(CallArgumentContext, i) as CallArgumentContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterTableExecute) {
	 		listener.enterTableExecute(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitTableExecute) {
	 		listener.exitTableExecute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitTableExecute) {
			return visitor.visitTableExecute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeleteContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DELETE(): TerminalNode {
		return this.getToken(TrinoSqlParser.DELETE, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(TrinoSqlParser.FROM, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(TrinoSqlParser.WHERE, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDelete) {
	 		listener.enterDelete(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDelete) {
	 		listener.exitDelete(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitDelete) {
			return visitor.visitDelete(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DescribeInputContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DESCRIBE(): TerminalNode {
		return this.getToken(TrinoSqlParser.DESCRIBE, 0);
	}
	public INPUT(): TerminalNode {
		return this.getToken(TrinoSqlParser.INPUT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDescribeInput) {
	 		listener.enterDescribeInput(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDescribeInput) {
	 		listener.exitDescribeInput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitDescribeInput) {
			return visitor.visitDescribeInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowStatsForQueryContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public STATS(): TerminalNode {
		return this.getToken(TrinoSqlParser.STATS, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(TrinoSqlParser.FOR, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterShowStatsForQuery) {
	 		listener.enterShowStatsForQuery(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitShowStatsForQuery) {
	 		listener.exitShowStatsForQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitShowStatsForQuery) {
			return visitor.visitShowStatsForQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StatementDefaultContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterStatementDefault) {
	 		listener.enterStatementDefault(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitStatementDefault) {
	 		listener.exitStatementDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitStatementDefault) {
			return visitor.visitStatementDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetTimeZoneContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SET(): TerminalNode {
		return this.getToken(TrinoSqlParser.SET, 0);
	}
	public TIME(): TerminalNode {
		return this.getToken(TrinoSqlParser.TIME, 0);
	}
	public ZONE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ZONE, 0);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(TrinoSqlParser.LOCAL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSetTimeZone) {
	 		listener.enterSetTimeZone(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSetTimeZone) {
	 		listener.exitSetTimeZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSetTimeZone) {
			return visitor.visitSetTimeZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TruncateTableContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TRUNCATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TRUNCATE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterTruncateTable) {
	 		listener.enterTruncateTable(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitTruncateTable) {
	 		listener.exitTruncateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitTruncateTable) {
			return visitor.visitTruncateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateMaterializedViewContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.CREATE, 0);
	}
	public MATERIALIZED(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATERIALIZED, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(TrinoSqlParser.VIEW, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public AS(): TerminalNode {
		return this.getToken(TrinoSqlParser.AS, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public OR(): TerminalNode {
		return this.getToken(TrinoSqlParser.OR, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(TrinoSqlParser.REPLACE, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(TrinoSqlParser.IF, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(TrinoSqlParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXISTS, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(TrinoSqlParser.COMMENT, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(TrinoSqlParser.WITH, 0);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCreateMaterializedView) {
	 		listener.enterCreateMaterializedView(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCreateMaterializedView) {
	 		listener.exitCreateMaterializedView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCreateMaterializedView) {
			return visitor.visitCreateMaterializedView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetSessionContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SET(): TerminalNode {
		return this.getToken(TrinoSqlParser.SET, 0);
	}
	public SESSION(): TerminalNode {
		return this.getToken(TrinoSqlParser.SESSION, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(TrinoSqlParser.EQ, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSetSession) {
	 		listener.enterSetSession(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSetSession) {
	 		listener.exitSetSession(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSetSession) {
			return visitor.visitSetSession(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateViewContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.CREATE, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(TrinoSqlParser.VIEW, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public AS(): TerminalNode {
		return this.getToken(TrinoSqlParser.AS, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public OR(): TerminalNode {
		return this.getToken(TrinoSqlParser.OR, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(TrinoSqlParser.REPLACE, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(TrinoSqlParser.COMMENT, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public SECURITY(): TerminalNode {
		return this.getToken(TrinoSqlParser.SECURITY, 0);
	}
	public DEFINER(): TerminalNode {
		return this.getToken(TrinoSqlParser.DEFINER, 0);
	}
	public INVOKER(): TerminalNode {
		return this.getToken(TrinoSqlParser.INVOKER, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCreateView) {
	 		listener.enterCreateView(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCreateView) {
	 		listener.exitCreateView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCreateView) {
			return visitor.visitCreateView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameMaterializedViewContext extends StatementContext {
	public _from_!: QualifiedNameContext;
	public _to!: QualifiedNameContext;
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALTER, 0);
	}
	public MATERIALIZED(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATERIALIZED, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(TrinoSqlParser.VIEW, 0);
	}
	public RENAME(): TerminalNode {
		return this.getToken(TrinoSqlParser.RENAME, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(TrinoSqlParser.TO, 0);
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public IF(): TerminalNode {
		return this.getToken(TrinoSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXISTS, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRenameMaterializedView) {
	 		listener.enterRenameMaterializedView(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRenameMaterializedView) {
	 		listener.exitRenameMaterializedView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitRenameMaterializedView) {
			return visitor.visitRenameMaterializedView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowSchemasContext extends StatementContext {
	public _pattern!: StringContext;
	public _escape!: StringContext;
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public SCHEMAS(): TerminalNode {
		return this.getToken(TrinoSqlParser.SCHEMAS, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LIKE(): TerminalNode {
		return this.getToken(TrinoSqlParser.LIKE, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(TrinoSqlParser.FROM, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(TrinoSqlParser.IN, 0);
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ESCAPE, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterShowSchemas) {
	 		listener.enterShowSchemas(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitShowSchemas) {
	 		listener.exitShowSchemas(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitShowSchemas) {
			return visitor.visitShowSchemas(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropTableContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP(): TerminalNode {
		return this.getToken(TrinoSqlParser.DROP, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IF(): TerminalNode {
		return this.getToken(TrinoSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXISTS, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDropTable) {
	 		listener.enterDropTable(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDropTable) {
	 		listener.exitDropTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitDropTable) {
			return visitor.visitDropTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetSchemaAuthorizationContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALTER, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(TrinoSqlParser.SCHEMA, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public SET(): TerminalNode {
		return this.getToken(TrinoSqlParser.SET, 0);
	}
	public AUTHORIZATION(): TerminalNode {
		return this.getToken(TrinoSqlParser.AUTHORIZATION, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSetSchemaAuthorization) {
	 		listener.enterSetSchemaAuthorization(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSetSchemaAuthorization) {
	 		listener.exitSetSchemaAuthorization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSetSchemaAuthorization) {
			return visitor.visitSetSchemaAuthorization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RollbackContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ROLLBACK(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROLLBACK, 0);
	}
	public WORK(): TerminalNode {
		return this.getToken(TrinoSqlParser.WORK, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRollback) {
	 		listener.enterRollback(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRollback) {
	 		listener.exitRollback(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitRollback) {
			return visitor.visitRollback(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommentTableContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(TrinoSqlParser.COMMENT, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(TrinoSqlParser.ON, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IS(): TerminalNode {
		return this.getToken(TrinoSqlParser.IS, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public NULL(): TerminalNode {
		return this.getToken(TrinoSqlParser.NULL, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCommentTable) {
	 		listener.enterCommentTable(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCommentTable) {
	 		listener.exitCommentTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALTER, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(TrinoSqlParser.VIEW, 0);
	}
	public RENAME(): TerminalNode {
		return this.getToken(TrinoSqlParser.RENAME, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(TrinoSqlParser.TO, 0);
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRenameView) {
	 		listener.enterRenameView(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRenameView) {
	 		listener.exitRenameView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitRenameView) {
			return visitor.visitRenameView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetPathContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SET(): TerminalNode {
		return this.getToken(TrinoSqlParser.SET, 0);
	}
	public PATH(): TerminalNode {
		return this.getToken(TrinoSqlParser.PATH, 0);
	}
	public pathSpecification(): PathSpecificationContext {
		return this.getTypedRuleContext(PathSpecificationContext, 0) as PathSpecificationContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSetPath) {
	 		listener.enterSetPath(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSetPath) {
	 		listener.exitSetPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSetPath) {
			return visitor.visitSetPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GrantRolesContext extends StatementContext {
	public _catalog!: IdentifierContext;
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GRANT(): TerminalNode {
		return this.getToken(TrinoSqlParser.GRANT, 0);
	}
	public roles(): RolesContext {
		return this.getTypedRuleContext(RolesContext, 0) as RolesContext;
	}
	public TO(): TerminalNode {
		return this.getToken(TrinoSqlParser.TO, 0);
	}
	public principal_list(): PrincipalContext[] {
		return this.getTypedRuleContexts(PrincipalContext) as PrincipalContext[];
	}
	public principal(i: number): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, i) as PrincipalContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(TrinoSqlParser.WITH, 0);
	}
	public ADMIN(): TerminalNode {
		return this.getToken(TrinoSqlParser.ADMIN, 0);
	}
	public OPTION(): TerminalNode {
		return this.getToken(TrinoSqlParser.OPTION, 0);
	}
	public GRANTED(): TerminalNode {
		return this.getToken(TrinoSqlParser.GRANTED, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(TrinoSqlParser.BY, 0);
	}
	public grantor(): GrantorContext {
		return this.getTypedRuleContext(GrantorContext, 0) as GrantorContext;
	}
	public IN(): TerminalNode {
		return this.getToken(TrinoSqlParser.IN, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterGrantRoles) {
	 		listener.enterGrantRoles(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitGrantRoles) {
	 		listener.exitGrantRoles(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitGrantRoles) {
			return visitor.visitGrantRoles(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CALL(): TerminalNode {
		return this.getToken(TrinoSqlParser.CALL, 0);
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
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCall) {
	 		listener.enterCall(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCall) {
	 		listener.exitCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCall) {
			return visitor.visitCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RefreshMaterializedViewContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REFRESH(): TerminalNode {
		return this.getToken(TrinoSqlParser.REFRESH, 0);
	}
	public MATERIALIZED(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATERIALIZED, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(TrinoSqlParser.VIEW, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRefreshMaterializedView) {
	 		listener.enterRefreshMaterializedView(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRefreshMaterializedView) {
	 		listener.exitRefreshMaterializedView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitRefreshMaterializedView) {
			return visitor.visitRefreshMaterializedView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCreateMaterializedViewContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.CREATE, 0);
	}
	public MATERIALIZED(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATERIALIZED, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(TrinoSqlParser.VIEW, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterShowCreateMaterializedView) {
	 		listener.enterShowCreateMaterializedView(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitShowCreateMaterializedView) {
	 		listener.exitShowCreateMaterializedView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public FUNCTIONS(): TerminalNode {
		return this.getToken(TrinoSqlParser.FUNCTIONS, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(TrinoSqlParser.LIKE, 0);
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ESCAPE, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterShowFunctions) {
	 		listener.enterShowFunctions(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitShowFunctions) {
	 		listener.exitShowFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitShowFunctions) {
			return visitor.visitShowFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DescribeOutputContext extends StatementContext {
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DESCRIBE(): TerminalNode {
		return this.getToken(TrinoSqlParser.DESCRIBE, 0);
	}
	public OUTPUT(): TerminalNode {
		return this.getToken(TrinoSqlParser.OUTPUT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDescribeOutput) {
	 		listener.enterDescribeOutput(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDescribeOutput) {
	 		listener.exitDescribeOutput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitDescribeOutput) {
			return visitor.visitDescribeOutput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GrantContext extends StatementContext {
	public _grantee!: PrincipalContext;
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GRANT_list(): TerminalNode[] {
	    	return this.getTokens(TrinoSqlParser.GRANT);
	}
	public GRANT(i: number): TerminalNode {
		return this.getToken(TrinoSqlParser.GRANT, i);
	}
	public ON(): TerminalNode {
		return this.getToken(TrinoSqlParser.ON, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public TO(): TerminalNode {
		return this.getToken(TrinoSqlParser.TO, 0);
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
		return this.getToken(TrinoSqlParser.ALL, 0);
	}
	public PRIVILEGES(): TerminalNode {
		return this.getToken(TrinoSqlParser.PRIVILEGES, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(TrinoSqlParser.WITH, 0);
	}
	public OPTION(): TerminalNode {
		return this.getToken(TrinoSqlParser.OPTION, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(TrinoSqlParser.SCHEMA, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterGrant) {
	 		listener.enterGrant(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitGrant) {
	 		listener.exitGrant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitGrant) {
			return visitor.visitGrant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetTablePropertiesContext extends StatementContext {
	public _tableName!: QualifiedNameContext;
	constructor(parser: TrinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(TrinoSqlParser.SET, 0);
	}
	public PROPERTIES(): TerminalNode {
		return this.getToken(TrinoSqlParser.PROPERTIES, 0);
	}
	public propertyAssignments(): PropertyAssignmentsContext {
		return this.getTypedRuleContext(PropertyAssignmentsContext, 0) as PropertyAssignmentsContext;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSetTableProperties) {
	 		listener.enterSetTableProperties(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSetTableProperties) {
	 		listener.exitSetTableProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSetTableProperties) {
			return visitor.visitSetTableProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return TrinoSqlParser.RULE_query;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterQuery) {
	 		listener.enterQuery(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitQuery) {
	 		listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(TrinoSqlParser.WITH, 0);
	}
	public namedQuery_list(): NamedQueryContext[] {
		return this.getTypedRuleContexts(NamedQueryContext) as NamedQueryContext[];
	}
	public namedQuery(i: number): NamedQueryContext {
		return this.getTypedRuleContext(NamedQueryContext, i) as NamedQueryContext;
	}
	public RECURSIVE(): TerminalNode {
		return this.getToken(TrinoSqlParser.RECURSIVE, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_with;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterWith) {
	 		listener.enterWith(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitWith) {
	 		listener.exitWith(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitWith) {
			return visitor.visitWith(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableElementContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return TrinoSqlParser.RULE_tableElement;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterTableElement) {
	 		listener.enterTableElement(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitTableElement) {
	 		listener.exitTableElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitTableElement) {
			return visitor.visitTableElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnDefinitionContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getToken(TrinoSqlParser.NOT, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(TrinoSqlParser.NULL, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(TrinoSqlParser.COMMENT, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(TrinoSqlParser.WITH, 0);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_columnDefinition;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterColumnDefinition) {
	 		listener.enterColumnDefinition(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitColumnDefinition) {
	 		listener.exitColumnDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitColumnDefinition) {
			return visitor.visitColumnDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikeClauseContext extends ParserRuleContext {
	public _optionType!: Token;
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LIKE(): TerminalNode {
		return this.getToken(TrinoSqlParser.LIKE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public PROPERTIES(): TerminalNode {
		return this.getToken(TrinoSqlParser.PROPERTIES, 0);
	}
	public INCLUDING(): TerminalNode {
		return this.getToken(TrinoSqlParser.INCLUDING, 0);
	}
	public EXCLUDING(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXCLUDING, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_likeClause;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterLikeClause) {
	 		listener.enterLikeClause(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitLikeClause) {
	 		listener.exitLikeClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitLikeClause) {
			return visitor.visitLikeClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertiesContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyAssignments(): PropertyAssignmentsContext {
		return this.getTypedRuleContext(PropertyAssignmentsContext, 0) as PropertyAssignmentsContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_properties;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterProperties) {
	 		listener.enterProperties(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitProperties) {
	 		listener.exitProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitProperties) {
			return visitor.visitProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyAssignmentsContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return TrinoSqlParser.RULE_propertyAssignments;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterPropertyAssignments) {
	 		listener.enterPropertyAssignments(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitPropertyAssignments) {
	 		listener.exitPropertyAssignments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitPropertyAssignments) {
			return visitor.visitPropertyAssignments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(TrinoSqlParser.EQ, 0);
	}
	public propertyValue(): PropertyValueContext {
		return this.getTypedRuleContext(PropertyValueContext, 0) as PropertyValueContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_property;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterProperty) {
	 		listener.enterProperty(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitProperty) {
	 		listener.exitProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyValueContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_propertyValue;
	}
	public copyFrom(ctx: PropertyValueContext): void {
		super.copyFrom(ctx);
	}
}
export class DefaultPropertyValueContext extends PropertyValueContext {
	constructor(parser: TrinoSqlParser, ctx: PropertyValueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(TrinoSqlParser.DEFAULT, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDefaultPropertyValue) {
	 		listener.enterDefaultPropertyValue(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDefaultPropertyValue) {
	 		listener.exitDefaultPropertyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitDefaultPropertyValue) {
			return visitor.visitDefaultPropertyValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NonDefaultPropertyValueContext extends PropertyValueContext {
	constructor(parser: TrinoSqlParser, ctx: PropertyValueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterNonDefaultPropertyValue) {
	 		listener.enterNonDefaultPropertyValue(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitNonDefaultPropertyValue) {
	 		listener.exitNonDefaultPropertyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitNonDefaultPropertyValue) {
			return visitor.visitNonDefaultPropertyValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryNoWithContext extends ParserRuleContext {
	public _offset!: RowCountContext;
	public _limit!: LimitRowCountContext;
	public _fetchFirst!: RowCountContext;
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public queryTerm(): QueryTermContext {
		return this.getTypedRuleContext(QueryTermContext, 0) as QueryTermContext;
	}
	public ORDER(): TerminalNode {
		return this.getToken(TrinoSqlParser.ORDER, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(TrinoSqlParser.BY, 0);
	}
	public sortItem_list(): SortItemContext[] {
		return this.getTypedRuleContexts(SortItemContext) as SortItemContext[];
	}
	public sortItem(i: number): SortItemContext {
		return this.getTypedRuleContext(SortItemContext, i) as SortItemContext;
	}
	public OFFSET(): TerminalNode {
		return this.getToken(TrinoSqlParser.OFFSET, 0);
	}
	public rowCount_list(): RowCountContext[] {
		return this.getTypedRuleContexts(RowCountContext) as RowCountContext[];
	}
	public rowCount(i: number): RowCountContext {
		return this.getTypedRuleContext(RowCountContext, i) as RowCountContext;
	}
	public LIMIT(): TerminalNode {
		return this.getToken(TrinoSqlParser.LIMIT, 0);
	}
	public FETCH(): TerminalNode {
		return this.getToken(TrinoSqlParser.FETCH, 0);
	}
	public limitRowCount(): LimitRowCountContext {
		return this.getTypedRuleContext(LimitRowCountContext, 0) as LimitRowCountContext;
	}
	public FIRST(): TerminalNode {
		return this.getToken(TrinoSqlParser.FIRST, 0);
	}
	public NEXT(): TerminalNode {
		return this.getToken(TrinoSqlParser.NEXT, 0);
	}
	public ROW_list(): TerminalNode[] {
	    	return this.getTokens(TrinoSqlParser.ROW);
	}
	public ROW(i: number): TerminalNode {
		return this.getToken(TrinoSqlParser.ROW, i);
	}
	public ROWS_list(): TerminalNode[] {
	    	return this.getTokens(TrinoSqlParser.ROWS);
	}
	public ROWS(i: number): TerminalNode {
		return this.getToken(TrinoSqlParser.ROWS, i);
	}
	public ONLY(): TerminalNode {
		return this.getToken(TrinoSqlParser.ONLY, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(TrinoSqlParser.WITH, 0);
	}
	public TIES(): TerminalNode {
		return this.getToken(TrinoSqlParser.TIES, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_queryNoWith;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterQueryNoWith) {
	 		listener.enterQueryNoWith(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitQueryNoWith) {
	 		listener.exitQueryNoWith(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitQueryNoWith) {
			return visitor.visitQueryNoWith(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LimitRowCountContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALL(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALL, 0);
	}
	public rowCount(): RowCountContext {
		return this.getTypedRuleContext(RowCountContext, 0) as RowCountContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_limitRowCount;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterLimitRowCount) {
	 		listener.enterLimitRowCount(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitLimitRowCount) {
	 		listener.exitLimitRowCount(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitLimitRowCount) {
			return visitor.visitLimitRowCount(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowCountContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER_VALUE(): TerminalNode {
		return this.getToken(TrinoSqlParser.INTEGER_VALUE, 0);
	}
	public QUESTION_MARK(): TerminalNode {
		return this.getToken(TrinoSqlParser.QUESTION_MARK, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_rowCount;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRowCount) {
	 		listener.enterRowCount(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRowCount) {
	 		listener.exitRowCount(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitRowCount) {
			return visitor.visitRowCount(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryTermContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_queryTerm;
	}
	public copyFrom(ctx: QueryTermContext): void {
		super.copyFrom(ctx);
	}
}
export class QueryTermDefaultContext extends QueryTermContext {
	constructor(parser: TrinoSqlParser, ctx: QueryTermContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public queryPrimary(): QueryPrimaryContext {
		return this.getTypedRuleContext(QueryPrimaryContext, 0) as QueryPrimaryContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterQueryTermDefault) {
	 		listener.enterQueryTermDefault(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitQueryTermDefault) {
	 		listener.exitQueryTermDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: QueryTermContext) {
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
		return this.getToken(TrinoSqlParser.INTERSECT, 0);
	}
	public setQuantifier(): SetQuantifierContext {
		return this.getTypedRuleContext(SetQuantifierContext, 0) as SetQuantifierContext;
	}
	public UNION(): TerminalNode {
		return this.getToken(TrinoSqlParser.UNION, 0);
	}
	public EXCEPT(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXCEPT, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSetOperation) {
	 		listener.enterSetOperation(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSetOperation) {
	 		listener.exitSetOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSetOperation) {
			return visitor.visitSetOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryPrimaryContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_queryPrimary;
	}
	public copyFrom(ctx: QueryPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class SubqueryContext extends QueryPrimaryContext {
	constructor(parser: TrinoSqlParser, ctx: QueryPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public queryNoWith(): QueryNoWithContext {
		return this.getTypedRuleContext(QueryNoWithContext, 0) as QueryNoWithContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSubquery) {
	 		listener.enterSubquery(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSubquery) {
	 		listener.exitSubquery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSubquery) {
			return visitor.visitSubquery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QueryPrimaryDefaultContext extends QueryPrimaryContext {
	constructor(parser: TrinoSqlParser, ctx: QueryPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public querySpecification(): QuerySpecificationContext {
		return this.getTypedRuleContext(QuerySpecificationContext, 0) as QuerySpecificationContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterQueryPrimaryDefault) {
	 		listener.enterQueryPrimaryDefault(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitQueryPrimaryDefault) {
	 		listener.exitQueryPrimaryDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitQueryPrimaryDefault) {
			return visitor.visitQueryPrimaryDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableContext extends QueryPrimaryContext {
	constructor(parser: TrinoSqlParser, ctx: QueryPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterTable) {
	 		listener.enterTable(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitTable) {
	 		listener.exitTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitTable) {
			return visitor.visitTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InlineTableContext extends QueryPrimaryContext {
	constructor(parser: TrinoSqlParser, ctx: QueryPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VALUES(): TerminalNode {
		return this.getToken(TrinoSqlParser.VALUES, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterInlineTable) {
	 		listener.enterInlineTable(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitInlineTable) {
	 		listener.exitInlineTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public NULLS(): TerminalNode {
		return this.getToken(TrinoSqlParser.NULLS, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(TrinoSqlParser.ASC, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(TrinoSqlParser.DESC, 0);
	}
	public FIRST(): TerminalNode {
		return this.getToken(TrinoSqlParser.FIRST, 0);
	}
	public LAST(): TerminalNode {
		return this.getToken(TrinoSqlParser.LAST, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_sortItem;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSortItem) {
	 		listener.enterSortItem(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSortItem) {
	 		listener.exitSortItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SELECT(): TerminalNode {
		return this.getToken(TrinoSqlParser.SELECT, 0);
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
		return this.getToken(TrinoSqlParser.FROM, 0);
	}
	public relation_list(): RelationContext[] {
		return this.getTypedRuleContexts(RelationContext) as RelationContext[];
	}
	public relation(i: number): RelationContext {
		return this.getTypedRuleContext(RelationContext, i) as RelationContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(TrinoSqlParser.WHERE, 0);
	}
	public GROUP(): TerminalNode {
		return this.getToken(TrinoSqlParser.GROUP, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(TrinoSqlParser.BY, 0);
	}
	public groupBy(): GroupByContext {
		return this.getTypedRuleContext(GroupByContext, 0) as GroupByContext;
	}
	public HAVING(): TerminalNode {
		return this.getToken(TrinoSqlParser.HAVING, 0);
	}
	public WINDOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.WINDOW, 0);
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
    	return TrinoSqlParser.RULE_querySpecification;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterQuerySpecification) {
	 		listener.enterQuerySpecification(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitQuerySpecification) {
	 		listener.exitQuerySpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitQuerySpecification) {
			return visitor.visitQuerySpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupByContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return TrinoSqlParser.RULE_groupBy;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterGroupBy) {
	 		listener.enterGroupBy(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitGroupBy) {
	 		listener.exitGroupBy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitGroupBy) {
			return visitor.visitGroupBy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingElementContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_groupingElement;
	}
	public copyFrom(ctx: GroupingElementContext): void {
		super.copyFrom(ctx);
	}
}
export class MultipleGroupingSetsContext extends GroupingElementContext {
	constructor(parser: TrinoSqlParser, ctx: GroupingElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GROUPING(): TerminalNode {
		return this.getToken(TrinoSqlParser.GROUPING, 0);
	}
	public SETS(): TerminalNode {
		return this.getToken(TrinoSqlParser.SETS, 0);
	}
	public groupingSet_list(): GroupingSetContext[] {
		return this.getTypedRuleContexts(GroupingSetContext) as GroupingSetContext[];
	}
	public groupingSet(i: number): GroupingSetContext {
		return this.getTypedRuleContext(GroupingSetContext, i) as GroupingSetContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterMultipleGroupingSets) {
	 		listener.enterMultipleGroupingSets(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitMultipleGroupingSets) {
	 		listener.exitMultipleGroupingSets(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitMultipleGroupingSets) {
			return visitor.visitMultipleGroupingSets(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SingleGroupingSetContext extends GroupingElementContext {
	constructor(parser: TrinoSqlParser, ctx: GroupingElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public groupingSet(): GroupingSetContext {
		return this.getTypedRuleContext(GroupingSetContext, 0) as GroupingSetContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSingleGroupingSet) {
	 		listener.enterSingleGroupingSet(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSingleGroupingSet) {
	 		listener.exitSingleGroupingSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSingleGroupingSet) {
			return visitor.visitSingleGroupingSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CubeContext extends GroupingElementContext {
	constructor(parser: TrinoSqlParser, ctx: GroupingElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CUBE(): TerminalNode {
		return this.getToken(TrinoSqlParser.CUBE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCube) {
	 		listener.enterCube(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCube) {
	 		listener.exitCube(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCube) {
			return visitor.visitCube(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RollupContext extends GroupingElementContext {
	constructor(parser: TrinoSqlParser, ctx: GroupingElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ROLLUP(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROLLUP, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRollup) {
	 		listener.enterRollup(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRollup) {
	 		listener.exitRollup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitRollup) {
			return visitor.visitRollup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingSetContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return TrinoSqlParser.RULE_groupingSet;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterGroupingSet) {
	 		listener.enterGroupingSet(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitGroupingSet) {
	 		listener.exitGroupingSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitGroupingSet) {
			return visitor.visitGroupingSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowDefinitionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AS(): TerminalNode {
		return this.getToken(TrinoSqlParser.AS, 0);
	}
	public windowSpecification(): WindowSpecificationContext {
		return this.getTypedRuleContext(WindowSpecificationContext, 0) as WindowSpecificationContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_windowDefinition;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterWindowDefinition) {
	 		listener.enterWindowDefinition(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitWindowDefinition) {
	 		listener.exitWindowDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PARTITION(): TerminalNode {
		return this.getToken(TrinoSqlParser.PARTITION, 0);
	}
	public BY_list(): TerminalNode[] {
	    	return this.getTokens(TrinoSqlParser.BY);
	}
	public BY(i: number): TerminalNode {
		return this.getToken(TrinoSqlParser.BY, i);
	}
	public ORDER(): TerminalNode {
		return this.getToken(TrinoSqlParser.ORDER, 0);
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
    	return TrinoSqlParser.RULE_windowSpecification;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterWindowSpecification) {
	 		listener.enterWindowSpecification(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitWindowSpecification) {
	 		listener.exitWindowSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitWindowSpecification) {
			return visitor.visitWindowSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedQueryContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AS(): TerminalNode {
		return this.getToken(TrinoSqlParser.AS, 0);
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
    	return TrinoSqlParser.RULE_namedQuery;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterNamedQuery) {
	 		listener.enterNamedQuery(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitNamedQuery) {
	 		listener.exitNamedQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitNamedQuery) {
			return visitor.visitNamedQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetQuantifierContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(TrinoSqlParser.DISTINCT, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALL, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_setQuantifier;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSetQuantifier) {
	 		listener.enterSetQuantifier(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSetQuantifier) {
	 		listener.exitSetQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSetQuantifier) {
			return visitor.visitSetQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectItemContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_selectItem;
	}
	public copyFrom(ctx: SelectItemContext): void {
		super.copyFrom(ctx);
	}
}
export class SelectAllContext extends SelectItemContext {
	constructor(parser: TrinoSqlParser, ctx: SelectItemContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public ASTERISK(): TerminalNode {
		return this.getToken(TrinoSqlParser.ASTERISK, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(TrinoSqlParser.AS, 0);
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSelectAll) {
	 		listener.enterSelectAll(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSelectAll) {
	 		listener.exitSelectAll(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSelectAll) {
			return visitor.visitSelectAll(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectSingleContext extends SelectItemContext {
	constructor(parser: TrinoSqlParser, ctx: SelectItemContext) {
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
		return this.getToken(TrinoSqlParser.AS, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSelectSingle) {
	 		listener.enterSelectSingle(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSelectSingle) {
	 		listener.exitSelectSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSelectSingle) {
			return visitor.visitSelectSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_relation;
	}
	public copyFrom(ctx: RelationContext): void {
		super.copyFrom(ctx);
	}
}
export class RelationDefaultContext extends RelationContext {
	constructor(parser: TrinoSqlParser, ctx: RelationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public sampledRelation(): SampledRelationContext {
		return this.getTypedRuleContext(SampledRelationContext, 0) as SampledRelationContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRelationDefault) {
	 		listener.enterRelationDefault(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRelationDefault) {
	 		listener.exitRelationDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: RelationContext) {
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
		return this.getToken(TrinoSqlParser.CROSS, 0);
	}
	public JOIN(): TerminalNode {
		return this.getToken(TrinoSqlParser.JOIN, 0);
	}
	public joinType(): JoinTypeContext {
		return this.getTypedRuleContext(JoinTypeContext, 0) as JoinTypeContext;
	}
	public joinCriteria(): JoinCriteriaContext {
		return this.getTypedRuleContext(JoinCriteriaContext, 0) as JoinCriteriaContext;
	}
	public NATURAL(): TerminalNode {
		return this.getToken(TrinoSqlParser.NATURAL, 0);
	}
	public sampledRelation(): SampledRelationContext {
		return this.getTypedRuleContext(SampledRelationContext, 0) as SampledRelationContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterJoinRelation) {
	 		listener.enterJoinRelation(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitJoinRelation) {
	 		listener.exitJoinRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitJoinRelation) {
			return visitor.visitJoinRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinTypeContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INNER(): TerminalNode {
		return this.getToken(TrinoSqlParser.INNER, 0);
	}
	public LEFT(): TerminalNode {
		return this.getToken(TrinoSqlParser.LEFT, 0);
	}
	public OUTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.OUTER, 0);
	}
	public RIGHT(): TerminalNode {
		return this.getToken(TrinoSqlParser.RIGHT, 0);
	}
	public FULL(): TerminalNode {
		return this.getToken(TrinoSqlParser.FULL, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_joinType;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterJoinType) {
	 		listener.enterJoinType(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitJoinType) {
	 		listener.exitJoinType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitJoinType) {
			return visitor.visitJoinType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinCriteriaContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON(): TerminalNode {
		return this.getToken(TrinoSqlParser.ON, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public USING(): TerminalNode {
		return this.getToken(TrinoSqlParser.USING, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_joinCriteria;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterJoinCriteria) {
	 		listener.enterJoinCriteria(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitJoinCriteria) {
	 		listener.exitJoinCriteria(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitJoinCriteria) {
			return visitor.visitJoinCriteria(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SampledRelationContext extends ParserRuleContext {
	public _percentage!: ExpressionContext;
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public patternRecognition(): PatternRecognitionContext {
		return this.getTypedRuleContext(PatternRecognitionContext, 0) as PatternRecognitionContext;
	}
	public TABLESAMPLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLESAMPLE, 0);
	}
	public sampleType(): SampleTypeContext {
		return this.getTypedRuleContext(SampleTypeContext, 0) as SampleTypeContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_sampledRelation;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSampledRelation) {
	 		listener.enterSampledRelation(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSampledRelation) {
	 		listener.exitSampledRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSampledRelation) {
			return visitor.visitSampledRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SampleTypeContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BERNOULLI(): TerminalNode {
		return this.getToken(TrinoSqlParser.BERNOULLI, 0);
	}
	public SYSTEM(): TerminalNode {
		return this.getToken(TrinoSqlParser.SYSTEM, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_sampleType;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSampleType) {
	 		listener.enterSampleType(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSampleType) {
	 		listener.exitSampleType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public aliasedRelation(): AliasedRelationContext {
		return this.getTypedRuleContext(AliasedRelationContext, 0) as AliasedRelationContext;
	}
	public MATCH_RECOGNIZE(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATCH_RECOGNIZE, 0);
	}
	public PATTERN(): TerminalNode {
		return this.getToken(TrinoSqlParser.PATTERN, 0);
	}
	public rowPattern(): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, 0) as RowPatternContext;
	}
	public DEFINE(): TerminalNode {
		return this.getToken(TrinoSqlParser.DEFINE, 0);
	}
	public variableDefinition_list(): VariableDefinitionContext[] {
		return this.getTypedRuleContexts(VariableDefinitionContext) as VariableDefinitionContext[];
	}
	public variableDefinition(i: number): VariableDefinitionContext {
		return this.getTypedRuleContext(VariableDefinitionContext, i) as VariableDefinitionContext;
	}
	public PARTITION(): TerminalNode {
		return this.getToken(TrinoSqlParser.PARTITION, 0);
	}
	public BY_list(): TerminalNode[] {
	    	return this.getTokens(TrinoSqlParser.BY);
	}
	public BY(i: number): TerminalNode {
		return this.getToken(TrinoSqlParser.BY, i);
	}
	public ORDER(): TerminalNode {
		return this.getToken(TrinoSqlParser.ORDER, 0);
	}
	public sortItem_list(): SortItemContext[] {
		return this.getTypedRuleContexts(SortItemContext) as SortItemContext[];
	}
	public sortItem(i: number): SortItemContext {
		return this.getTypedRuleContext(SortItemContext, i) as SortItemContext;
	}
	public MEASURES(): TerminalNode {
		return this.getToken(TrinoSqlParser.MEASURES, 0);
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
		return this.getToken(TrinoSqlParser.AFTER, 0);
	}
	public MATCH(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATCH, 0);
	}
	public skipTo(): SkipToContext {
		return this.getTypedRuleContext(SkipToContext, 0) as SkipToContext;
	}
	public SUBSET(): TerminalNode {
		return this.getToken(TrinoSqlParser.SUBSET, 0);
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
		return this.getToken(TrinoSqlParser.INITIAL, 0);
	}
	public SEEK(): TerminalNode {
		return this.getToken(TrinoSqlParser.SEEK, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(TrinoSqlParser.AS, 0);
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_patternRecognition;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterPatternRecognition) {
	 		listener.enterPatternRecognition(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitPatternRecognition) {
	 		listener.exitPatternRecognition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitPatternRecognition) {
			return visitor.visitPatternRecognition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MeasureDefinitionContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public AS(): TerminalNode {
		return this.getToken(TrinoSqlParser.AS, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_measureDefinition;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterMeasureDefinition) {
	 		listener.enterMeasureDefinition(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitMeasureDefinition) {
	 		listener.exitMeasureDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitMeasureDefinition) {
			return visitor.visitMeasureDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowsPerMatchContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ONE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ONE, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROW, 0);
	}
	public PER(): TerminalNode {
		return this.getToken(TrinoSqlParser.PER, 0);
	}
	public MATCH(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATCH, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALL, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROWS, 0);
	}
	public emptyMatchHandling(): EmptyMatchHandlingContext {
		return this.getTypedRuleContext(EmptyMatchHandlingContext, 0) as EmptyMatchHandlingContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_rowsPerMatch;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRowsPerMatch) {
	 		listener.enterRowsPerMatch(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRowsPerMatch) {
	 		listener.exitRowsPerMatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitRowsPerMatch) {
			return visitor.visitRowsPerMatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyMatchHandlingContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public EMPTY(): TerminalNode {
		return this.getToken(TrinoSqlParser.EMPTY, 0);
	}
	public MATCHES(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATCHES, 0);
	}
	public OMIT(): TerminalNode {
		return this.getToken(TrinoSqlParser.OMIT, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(TrinoSqlParser.WITH, 0);
	}
	public UNMATCHED(): TerminalNode {
		return this.getToken(TrinoSqlParser.UNMATCHED, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROWS, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_emptyMatchHandling;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterEmptyMatchHandling) {
	 		listener.enterEmptyMatchHandling(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitEmptyMatchHandling) {
	 		listener.exitEmptyMatchHandling(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitEmptyMatchHandling) {
			return visitor.visitEmptyMatchHandling(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SkipToContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TO(): TerminalNode {
		return this.getToken(TrinoSqlParser.TO, 0);
	}
	public NEXT(): TerminalNode {
		return this.getToken(TrinoSqlParser.NEXT, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROW, 0);
	}
	public PAST(): TerminalNode {
		return this.getToken(TrinoSqlParser.PAST, 0);
	}
	public LAST(): TerminalNode {
		return this.getToken(TrinoSqlParser.LAST, 0);
	}
	public FIRST(): TerminalNode {
		return this.getToken(TrinoSqlParser.FIRST, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_skipTo;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSkipTo) {
	 		listener.enterSkipTo(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSkipTo) {
	 		listener.exitSkipTo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(TrinoSqlParser.EQ, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_subsetDefinition;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSubsetDefinition) {
	 		listener.enterSubsetDefinition(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSubsetDefinition) {
	 		listener.exitSubsetDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSubsetDefinition) {
			return visitor.visitSubsetDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDefinitionContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public AS(): TerminalNode {
		return this.getToken(TrinoSqlParser.AS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_variableDefinition;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterVariableDefinition) {
	 		listener.enterVariableDefinition(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitVariableDefinition) {
	 		listener.exitVariableDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitVariableDefinition) {
			return visitor.visitVariableDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasedRelationContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getToken(TrinoSqlParser.AS, 0);
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_aliasedRelation;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterAliasedRelation) {
	 		listener.enterAliasedRelation(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitAliasedRelation) {
	 		listener.exitAliasedRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitAliasedRelation) {
			return visitor.visitAliasedRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnAliasesContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return TrinoSqlParser.RULE_columnAliases;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterColumnAliases) {
	 		listener.enterColumnAliases(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitColumnAliases) {
	 		listener.exitColumnAliases(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitColumnAliases) {
			return visitor.visitColumnAliases(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationPrimaryContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_relationPrimary;
	}
	public copyFrom(ctx: RelationPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class SubqueryRelationContext extends RelationPrimaryContext {
	constructor(parser: TrinoSqlParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSubqueryRelation) {
	 		listener.enterSubqueryRelation(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSubqueryRelation) {
	 		listener.exitSubqueryRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSubqueryRelation) {
			return visitor.visitSubqueryRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedRelationContext extends RelationPrimaryContext {
	constructor(parser: TrinoSqlParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public relation(): RelationContext {
		return this.getTypedRuleContext(RelationContext, 0) as RelationContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterParenthesizedRelation) {
	 		listener.enterParenthesizedRelation(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitParenthesizedRelation) {
	 		listener.exitParenthesizedRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitParenthesizedRelation) {
			return visitor.visitParenthesizedRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnnestContext extends RelationPrimaryContext {
	constructor(parser: TrinoSqlParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UNNEST(): TerminalNode {
		return this.getToken(TrinoSqlParser.UNNEST, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(TrinoSqlParser.WITH, 0);
	}
	public ORDINALITY(): TerminalNode {
		return this.getToken(TrinoSqlParser.ORDINALITY, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterUnnest) {
	 		listener.enterUnnest(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitUnnest) {
	 		listener.exitUnnest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitUnnest) {
			return visitor.visitUnnest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LateralContext extends RelationPrimaryContext {
	constructor(parser: TrinoSqlParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LATERAL(): TerminalNode {
		return this.getToken(TrinoSqlParser.LATERAL, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterLateral) {
	 		listener.enterLateral(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitLateral) {
	 		listener.exitLateral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitLateral) {
			return visitor.visitLateral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableNameContext extends RelationPrimaryContext {
	constructor(parser: TrinoSqlParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterTableName) {
	 		listener.enterTableName(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitTableName) {
	 		listener.exitTableName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitTableName) {
			return visitor.visitTableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_expression;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_booleanExpression;
	}
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NOT(): TerminalNode {
		return this.getToken(TrinoSqlParser.NOT, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterLogicalNot) {
	 		listener.enterLogicalNot(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitLogicalNot) {
	 		listener.exitLogicalNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitLogicalNot) {
			return visitor.visitLogicalNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredicatedContext extends BooleanExpressionContext {
	public _valueExpression!: ValueExpressionContext;
	constructor(parser: TrinoSqlParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public predicate(): PredicateContext {
		return this.getTypedRuleContext(PredicateContext, 0) as PredicateContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterPredicated) {
	 		listener.enterPredicated(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitPredicated) {
	 		listener.exitPredicated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: BooleanExpressionContext) {
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
		return this.getToken(TrinoSqlParser.AND, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(TrinoSqlParser.OR, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterLogicalBinary) {
	 		listener.enterLogicalBinary(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitLogicalBinary) {
	 		listener.exitLogicalBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitLogicalBinary) {
			return visitor.visitLogicalBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public value: ParserRuleContext;
	constructor(parser: TrinoSqlParser, parent: ParserRuleContext, invokingState: number, value: ParserRuleContext) {
		super(parent, invokingState);
    	this.parser = parser;
        this.value = value;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_predicate;
	}
	public copyFrom(ctx: PredicateContext): void {
		super.copyFrom(ctx);
		this.value = ctx.value;
	}
}
export class ComparisonContext extends PredicateContext {
	public _right!: ValueExpressionContext;
	constructor(parser: TrinoSqlParser, ctx: PredicateContext) {
		super(parser, ctx.parentCtx, ctx.invokingState, ctx.value);
		super.copyFrom(ctx);
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext;
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterComparison) {
	 		listener.enterComparison(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitComparison) {
	 		listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: PredicateContext) {
		super(parser, ctx.parentCtx, ctx.invokingState, ctx.value);
		super.copyFrom(ctx);
	}
	public LIKE(): TerminalNode {
		return this.getToken(TrinoSqlParser.LIKE, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(TrinoSqlParser.NOT, 0);
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ESCAPE, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterLike) {
	 		listener.enterLike(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitLike) {
	 		listener.exitLike(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitLike) {
			return visitor.visitLike(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InSubqueryContext extends PredicateContext {
	constructor(parser: TrinoSqlParser, ctx: PredicateContext) {
		super(parser, ctx.parentCtx, ctx.invokingState, ctx.value);
		super.copyFrom(ctx);
	}
	public IN(): TerminalNode {
		return this.getToken(TrinoSqlParser.IN, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(TrinoSqlParser.NOT, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterInSubquery) {
	 		listener.enterInSubquery(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitInSubquery) {
	 		listener.exitInSubquery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitInSubquery) {
			return visitor.visitInSubquery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DistinctFromContext extends PredicateContext {
	public _right!: ValueExpressionContext;
	constructor(parser: TrinoSqlParser, ctx: PredicateContext) {
		super(parser, ctx.parentCtx, ctx.invokingState, ctx.value);
		super.copyFrom(ctx);
	}
	public IS(): TerminalNode {
		return this.getToken(TrinoSqlParser.IS, 0);
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(TrinoSqlParser.DISTINCT, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(TrinoSqlParser.FROM, 0);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(TrinoSqlParser.NOT, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDistinctFrom) {
	 		listener.enterDistinctFrom(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDistinctFrom) {
	 		listener.exitDistinctFrom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitDistinctFrom) {
			return visitor.visitDistinctFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InListContext extends PredicateContext {
	constructor(parser: TrinoSqlParser, ctx: PredicateContext) {
		super(parser, ctx.parentCtx, ctx.invokingState, ctx.value);
		super.copyFrom(ctx);
	}
	public IN(): TerminalNode {
		return this.getToken(TrinoSqlParser.IN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(TrinoSqlParser.NOT, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterInList) {
	 		listener.enterInList(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitInList) {
	 		listener.exitInList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitInList) {
			return visitor.visitInList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullPredicateContext extends PredicateContext {
	constructor(parser: TrinoSqlParser, ctx: PredicateContext) {
		super(parser, ctx.parentCtx, ctx.invokingState, ctx.value);
		super.copyFrom(ctx);
	}
	public IS(): TerminalNode {
		return this.getToken(TrinoSqlParser.IS, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(TrinoSqlParser.NULL, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(TrinoSqlParser.NOT, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterNullPredicate) {
	 		listener.enterNullPredicate(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitNullPredicate) {
	 		listener.exitNullPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: PredicateContext) {
		super(parser, ctx.parentCtx, ctx.invokingState, ctx.value);
		super.copyFrom(ctx);
	}
	public BETWEEN(): TerminalNode {
		return this.getToken(TrinoSqlParser.BETWEEN, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(TrinoSqlParser.AND, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(TrinoSqlParser.NOT, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterBetween) {
	 		listener.enterBetween(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitBetween) {
	 		listener.exitBetween(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitBetween) {
			return visitor.visitBetween(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuantifiedComparisonContext extends PredicateContext {
	constructor(parser: TrinoSqlParser, ctx: PredicateContext) {
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
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterQuantifiedComparison) {
	 		listener.enterQuantifiedComparison(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitQuantifiedComparison) {
	 		listener.exitQuantifiedComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitQuantifiedComparison) {
			return visitor.visitQuantifiedComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueExpressionContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_valueExpression;
	}
	public copyFrom(ctx: ValueExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterValueExpressionDefault) {
	 		listener.enterValueExpressionDefault(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitValueExpressionDefault) {
	 		listener.exitValueExpressionDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CONCAT(): TerminalNode {
		return this.getToken(TrinoSqlParser.CONCAT, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterConcatenation) {
	 		listener.enterConcatenation(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitConcatenation) {
	 		listener.exitConcatenation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: ValueExpressionContext) {
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
		return this.getToken(TrinoSqlParser.ASTERISK, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(TrinoSqlParser.SLASH, 0);
	}
	public PERCENT(): TerminalNode {
		return this.getToken(TrinoSqlParser.PERCENT, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(TrinoSqlParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(TrinoSqlParser.MINUS, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterArithmeticBinary) {
	 		listener.enterArithmeticBinary(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitArithmeticBinary) {
	 		listener.exitArithmeticBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitArithmeticBinary) {
			return visitor.visitArithmeticBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
	public _operator!: Token;
	constructor(parser: TrinoSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(TrinoSqlParser.MINUS, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(TrinoSqlParser.PLUS, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterArithmeticUnary) {
	 		listener.enterArithmeticUnary(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitArithmeticUnary) {
	 		listener.exitArithmeticUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitArithmeticUnary) {
			return visitor.visitArithmeticUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AtTimeZoneContext extends ValueExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public AT(): TerminalNode {
		return this.getToken(TrinoSqlParser.AT, 0);
	}
	public timeZoneSpecifier(): TimeZoneSpecifierContext {
		return this.getTypedRuleContext(TimeZoneSpecifierContext, 0) as TimeZoneSpecifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterAtTimeZone) {
	 		listener.enterAtTimeZone(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitAtTimeZone) {
	 		listener.exitAtTimeZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitAtTimeZone) {
			return visitor.visitAtTimeZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_primaryExpression;
	}
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class DereferenceContext extends PrimaryExpressionContext {
	public _base!: PrimaryExpressionContext;
	public _fieldName!: IdentifierContext;
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDereference) {
	 		listener.enterDereference(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDereference) {
	 		listener.exitDereference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitDereference) {
			return visitor.visitDereference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeConstructorContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
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
		return this.getToken(TrinoSqlParser.DOUBLE, 0);
	}
	public PRECISION(): TerminalNode {
		return this.getToken(TrinoSqlParser.PRECISION, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterTypeConstructor) {
	 		listener.enterTypeConstructor(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitTypeConstructor) {
	 		listener.exitTypeConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_DATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.CURRENT_DATE, 0);
	}
	public CURRENT_TIME(): TerminalNode {
		return this.getToken(TrinoSqlParser.CURRENT_TIME, 0);
	}
	public INTEGER_VALUE(): TerminalNode {
		return this.getToken(TrinoSqlParser.INTEGER_VALUE, 0);
	}
	public CURRENT_TIMESTAMP(): TerminalNode {
		return this.getToken(TrinoSqlParser.CURRENT_TIMESTAMP, 0);
	}
	public LOCALTIME(): TerminalNode {
		return this.getToken(TrinoSqlParser.LOCALTIME, 0);
	}
	public LOCALTIMESTAMP(): TerminalNode {
		return this.getToken(TrinoSqlParser.LOCALTIMESTAMP, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSpecialDateTimeFunction) {
	 		listener.enterSpecialDateTimeFunction(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSpecialDateTimeFunction) {
	 		listener.exitSpecialDateTimeFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSpecialDateTimeFunction) {
			return visitor.visitSpecialDateTimeFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubstringContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SUBSTRING(): TerminalNode {
		return this.getToken(TrinoSqlParser.SUBSTRING, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(TrinoSqlParser.FROM, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(TrinoSqlParser.FOR, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSubstring) {
	 		listener.enterSubstring(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSubstring) {
	 		listener.exitSubstring(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSubstring) {
			return visitor.visitSubstring(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CAST(): TerminalNode {
		return this.getToken(TrinoSqlParser.CAST, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public AS(): TerminalNode {
		return this.getToken(TrinoSqlParser.AS, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public TRY_CAST(): TerminalNode {
		return this.getToken(TrinoSqlParser.TRY_CAST, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCast) {
	 		listener.enterCast(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCast) {
	 		listener.exitCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCast) {
			return visitor.visitCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
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
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterLambda) {
	 		listener.enterLambda(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitLambda) {
	 		listener.exitLambda(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitLambda) {
			return visitor.visitLambda(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterParenthesizedExpression) {
	 		listener.enterParenthesizedExpression(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitParenthesizedExpression) {
	 		listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParameterContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public QUESTION_MARK(): TerminalNode {
		return this.getToken(TrinoSqlParser.QUESTION_MARK, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NormalizeContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NORMALIZE(): TerminalNode {
		return this.getToken(TrinoSqlParser.NORMALIZE, 0);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public normalForm(): NormalFormContext {
		return this.getTypedRuleContext(NormalFormContext, 0) as NormalFormContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterNormalize) {
	 		listener.enterNormalize(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitNormalize) {
	 		listener.exitNormalize(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitNormalize) {
			return visitor.visitNormalize(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntervalLiteralContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public interval(): IntervalContext {
		return this.getTypedRuleContext(IntervalContext, 0) as IntervalContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterIntervalLiteral) {
	 		listener.enterIntervalLiteral(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitIntervalLiteral) {
	 		listener.exitIntervalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitIntervalLiteral) {
			return visitor.visitIntervalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericLiteralContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterNumericLiteral) {
	 		listener.enterNumericLiteral(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitNumericLiteral) {
	 		listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanValue(): BooleanValueContext {
		return this.getTypedRuleContext(BooleanValueContext, 0) as BooleanValueContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterBooleanLiteral) {
	 		listener.enterBooleanLiteral(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitBooleanLiteral) {
	 		listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CASE(): TerminalNode {
		return this.getToken(TrinoSqlParser.CASE, 0);
	}
	public END(): TerminalNode {
		return this.getToken(TrinoSqlParser.END, 0);
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
		return this.getToken(TrinoSqlParser.ELSE, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSimpleCase) {
	 		listener.enterSimpleCase(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSimpleCase) {
	 		listener.exitSimpleCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSimpleCase) {
			return visitor.visitSimpleCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterColumnReference) {
	 		listener.enterColumnReference(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitColumnReference) {
	 		listener.exitColumnReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitColumnReference) {
			return visitor.visitColumnReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullLiteralContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NULL(): TerminalNode {
		return this.getToken(TrinoSqlParser.NULL, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterNullLiteral) {
	 		listener.enterNullLiteral(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitNullLiteral) {
	 		listener.exitNullLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitNullLiteral) {
			return visitor.visitNullLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RowConstructorContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
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
		return this.getToken(TrinoSqlParser.ROW, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRowConstructor) {
	 		listener.enterRowConstructor(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRowConstructor) {
	 		listener.exitRowConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSubscript) {
	 		listener.enterSubscript(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSubscript) {
	 		listener.exitSubscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSubscript) {
			return visitor.visitSubscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentPathContext extends PrimaryExpressionContext {
	public _name!: Token;
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_PATH(): TerminalNode {
		return this.getToken(TrinoSqlParser.CURRENT_PATH, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCurrentPath) {
	 		listener.enterCurrentPath(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCurrentPath) {
	 		listener.exitCurrentPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCurrentPath) {
			return visitor.visitCurrentPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSubqueryExpression) {
	 		listener.enterSubqueryExpression(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSubqueryExpression) {
	 		listener.exitSubqueryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSubqueryExpression) {
			return visitor.visitSubqueryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryLiteralContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BINARY_LITERAL(): TerminalNode {
		return this.getToken(TrinoSqlParser.BINARY_LITERAL, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterBinaryLiteral) {
	 		listener.enterBinaryLiteral(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitBinaryLiteral) {
	 		listener.exitBinaryLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitBinaryLiteral) {
			return visitor.visitBinaryLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentUserContext extends PrimaryExpressionContext {
	public _name!: Token;
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_USER(): TerminalNode {
		return this.getToken(TrinoSqlParser.CURRENT_USER, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCurrentUser) {
	 		listener.enterCurrentUser(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCurrentUser) {
	 		listener.exitCurrentUser(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCurrentUser) {
			return visitor.visitCurrentUser(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MeasureContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public over(): OverContext {
		return this.getTypedRuleContext(OverContext, 0) as OverContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterMeasure) {
	 		listener.enterMeasure(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitMeasure) {
	 		listener.exitMeasure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitMeasure) {
			return visitor.visitMeasure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExtractContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXTRACT(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXTRACT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(TrinoSqlParser.FROM, 0);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterExtract) {
	 		listener.enterExtract(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitExtract) {
	 		listener.exitExtract(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitExtract) {
			return visitor.visitExtract(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterStringLiteral) {
	 		listener.enterStringLiteral(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitStringLiteral) {
	 		listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayConstructorContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ARRAY(): TerminalNode {
		return this.getToken(TrinoSqlParser.ARRAY, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterArrayConstructor) {
	 		listener.enterArrayConstructor(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitArrayConstructor) {
	 		listener.exitArrayConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitArrayConstructor) {
			return visitor.visitArrayConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public ASTERISK(): TerminalNode {
		return this.getToken(TrinoSqlParser.ASTERISK, 0);
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
		return this.getToken(TrinoSqlParser.ORDER, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(TrinoSqlParser.BY, 0);
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
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentSchemaContext extends PrimaryExpressionContext {
	public _name!: Token;
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_SCHEMA(): TerminalNode {
		return this.getToken(TrinoSqlParser.CURRENT_SCHEMA, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCurrentSchema) {
	 		listener.enterCurrentSchema(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCurrentSchema) {
	 		listener.exitCurrentSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCurrentSchema) {
			return visitor.visitCurrentSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistsContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXISTS, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterExists) {
	 		listener.enterExists(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitExists) {
	 		listener.exitExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitExists) {
			return visitor.visitExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PositionContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public POSITION(): TerminalNode {
		return this.getToken(TrinoSqlParser.POSITION, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public IN(): TerminalNode {
		return this.getToken(TrinoSqlParser.IN, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterPosition) {
	 		listener.enterPosition(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitPosition) {
	 		listener.exitPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitPosition) {
			return visitor.visitPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SearchedCaseContext extends PrimaryExpressionContext {
	public _elseExpression!: ExpressionContext;
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CASE(): TerminalNode {
		return this.getToken(TrinoSqlParser.CASE, 0);
	}
	public END(): TerminalNode {
		return this.getToken(TrinoSqlParser.END, 0);
	}
	public whenClause_list(): WhenClauseContext[] {
		return this.getTypedRuleContexts(WhenClauseContext) as WhenClauseContext[];
	}
	public whenClause(i: number): WhenClauseContext {
		return this.getTypedRuleContext(WhenClauseContext, i) as WhenClauseContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ELSE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSearchedCase) {
	 		listener.enterSearchedCase(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSearchedCase) {
	 		listener.exitSearchedCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSearchedCase) {
			return visitor.visitSearchedCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentCatalogContext extends PrimaryExpressionContext {
	public _name!: Token;
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_CATALOG(): TerminalNode {
		return this.getToken(TrinoSqlParser.CURRENT_CATALOG, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCurrentCatalog) {
	 		listener.enterCurrentCatalog(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCurrentCatalog) {
	 		listener.exitCurrentCatalog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCurrentCatalog) {
			return visitor.visitCurrentCatalog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GroupingOperationContext extends PrimaryExpressionContext {
	constructor(parser: TrinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GROUPING(): TerminalNode {
		return this.getToken(TrinoSqlParser.GROUPING, 0);
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterGroupingOperation) {
	 		listener.enterGroupingOperation(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitGroupingOperation) {
	 		listener.exitGroupingOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitGroupingOperation) {
			return visitor.visitGroupingOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessingModeContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RUNNING(): TerminalNode {
		return this.getToken(TrinoSqlParser.RUNNING, 0);
	}
	public FINAL(): TerminalNode {
		return this.getToken(TrinoSqlParser.FINAL, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_processingMode;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterProcessingMode) {
	 		listener.enterProcessingMode(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitProcessingMode) {
	 		listener.exitProcessingMode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitProcessingMode) {
			return visitor.visitProcessingMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NullTreatmentContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IGNORE(): TerminalNode {
		return this.getToken(TrinoSqlParser.IGNORE, 0);
	}
	public NULLS(): TerminalNode {
		return this.getToken(TrinoSqlParser.NULLS, 0);
	}
	public RESPECT(): TerminalNode {
		return this.getToken(TrinoSqlParser.RESPECT, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_nullTreatment;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterNullTreatment) {
	 		listener.enterNullTreatment(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitNullTreatment) {
	 		listener.exitNullTreatment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitNullTreatment) {
			return visitor.visitNullTreatment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_string;
	}
	public copyFrom(ctx: StringContext): void {
		super.copyFrom(ctx);
	}
}
export class UnicodeStringLiteralContext extends StringContext {
	constructor(parser: TrinoSqlParser, ctx: StringContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UNICODE_STRING(): TerminalNode {
		return this.getToken(TrinoSqlParser.UNICODE_STRING, 0);
	}
	public UESCAPE(): TerminalNode {
		return this.getToken(TrinoSqlParser.UESCAPE, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(TrinoSqlParser.STRING, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterUnicodeStringLiteral) {
	 		listener.enterUnicodeStringLiteral(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitUnicodeStringLiteral) {
	 		listener.exitUnicodeStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitUnicodeStringLiteral) {
			return visitor.visitUnicodeStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BasicStringLiteralContext extends StringContext {
	constructor(parser: TrinoSqlParser, ctx: StringContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING(): TerminalNode {
		return this.getToken(TrinoSqlParser.STRING, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterBasicStringLiteral) {
	 		listener.enterBasicStringLiteral(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitBasicStringLiteral) {
	 		listener.exitBasicStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitBasicStringLiteral) {
			return visitor.visitBasicStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeZoneSpecifierContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_timeZoneSpecifier;
	}
	public copyFrom(ctx: TimeZoneSpecifierContext): void {
		super.copyFrom(ctx);
	}
}
export class TimeZoneIntervalContext extends TimeZoneSpecifierContext {
	constructor(parser: TrinoSqlParser, ctx: TimeZoneSpecifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TIME(): TerminalNode {
		return this.getToken(TrinoSqlParser.TIME, 0);
	}
	public ZONE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ZONE, 0);
	}
	public interval(): IntervalContext {
		return this.getTypedRuleContext(IntervalContext, 0) as IntervalContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterTimeZoneInterval) {
	 		listener.enterTimeZoneInterval(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitTimeZoneInterval) {
	 		listener.exitTimeZoneInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitTimeZoneInterval) {
			return visitor.visitTimeZoneInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimeZoneStringContext extends TimeZoneSpecifierContext {
	constructor(parser: TrinoSqlParser, ctx: TimeZoneSpecifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TIME(): TerminalNode {
		return this.getToken(TrinoSqlParser.TIME, 0);
	}
	public ZONE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ZONE, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterTimeZoneString) {
	 		listener.enterTimeZoneString(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitTimeZoneString) {
	 		listener.exitTimeZoneString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitTimeZoneString) {
			return visitor.visitTimeZoneString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(TrinoSqlParser.EQ, 0);
	}
	public NEQ(): TerminalNode {
		return this.getToken(TrinoSqlParser.NEQ, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(TrinoSqlParser.LT, 0);
	}
	public LTE(): TerminalNode {
		return this.getToken(TrinoSqlParser.LTE, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(TrinoSqlParser.GT, 0);
	}
	public GTE(): TerminalNode {
		return this.getToken(TrinoSqlParser.GTE, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_comparisonOperator;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterComparisonOperator) {
	 		listener.enterComparisonOperator(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitComparisonOperator) {
	 		listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonQuantifierContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALL(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALL, 0);
	}
	public SOME(): TerminalNode {
		return this.getToken(TrinoSqlParser.SOME, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(TrinoSqlParser.ANY, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_comparisonQuantifier;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterComparisonQuantifier) {
	 		listener.enterComparisonQuantifier(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitComparisonQuantifier) {
	 		listener.exitComparisonQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitComparisonQuantifier) {
			return visitor.visitComparisonQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(TrinoSqlParser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_booleanValue;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterBooleanValue) {
	 		listener.enterBooleanValue(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitBooleanValue) {
	 		listener.exitBooleanValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTERVAL(): TerminalNode {
		return this.getToken(TrinoSqlParser.INTERVAL, 0);
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
		return this.getToken(TrinoSqlParser.TO, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(TrinoSqlParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(TrinoSqlParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_interval;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterInterval) {
	 		listener.enterInterval(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitInterval) {
	 		listener.exitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitInterval) {
			return visitor.visitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalFieldContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public YEAR(): TerminalNode {
		return this.getToken(TrinoSqlParser.YEAR, 0);
	}
	public MONTH(): TerminalNode {
		return this.getToken(TrinoSqlParser.MONTH, 0);
	}
	public DAY(): TerminalNode {
		return this.getToken(TrinoSqlParser.DAY, 0);
	}
	public HOUR(): TerminalNode {
		return this.getToken(TrinoSqlParser.HOUR, 0);
	}
	public MINUTE(): TerminalNode {
		return this.getToken(TrinoSqlParser.MINUTE, 0);
	}
	public SECOND(): TerminalNode {
		return this.getToken(TrinoSqlParser.SECOND, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_intervalField;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterIntervalField) {
	 		listener.enterIntervalField(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitIntervalField) {
	 		listener.exitIntervalField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitIntervalField) {
			return visitor.visitIntervalField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalFormContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NFD(): TerminalNode {
		return this.getToken(TrinoSqlParser.NFD, 0);
	}
	public NFC(): TerminalNode {
		return this.getToken(TrinoSqlParser.NFC, 0);
	}
	public NFKD(): TerminalNode {
		return this.getToken(TrinoSqlParser.NFKD, 0);
	}
	public NFKC(): TerminalNode {
		return this.getToken(TrinoSqlParser.NFKC, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_normalForm;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterNormalForm) {
	 		listener.enterNormalForm(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitNormalForm) {
	 		listener.exitNormalForm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitNormalForm) {
			return visitor.visitNormalForm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_type;
	}
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class RowTypeContext extends TypeContext {
	constructor(parser: TrinoSqlParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ROW(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROW, 0);
	}
	public rowField_list(): RowFieldContext[] {
		return this.getTypedRuleContexts(RowFieldContext) as RowFieldContext[];
	}
	public rowField(i: number): RowFieldContext {
		return this.getTypedRuleContext(RowFieldContext, i) as RowFieldContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRowType) {
	 		listener.enterRowType(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRowType) {
	 		listener.exitRowType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTERVAL(): TerminalNode {
		return this.getToken(TrinoSqlParser.INTERVAL, 0);
	}
	public intervalField_list(): IntervalFieldContext[] {
		return this.getTypedRuleContexts(IntervalFieldContext) as IntervalFieldContext[];
	}
	public intervalField(i: number): IntervalFieldContext {
		return this.getTypedRuleContext(IntervalFieldContext, i) as IntervalFieldContext;
	}
	public TO(): TerminalNode {
		return this.getToken(TrinoSqlParser.TO, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterIntervalType) {
	 		listener.enterIntervalType(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitIntervalType) {
	 		listener.exitIntervalType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitIntervalType) {
			return visitor.visitIntervalType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayTypeContext extends TypeContext {
	constructor(parser: TrinoSqlParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public ARRAY(): TerminalNode {
		return this.getToken(TrinoSqlParser.ARRAY, 0);
	}
	public INTEGER_VALUE(): TerminalNode {
		return this.getToken(TrinoSqlParser.INTEGER_VALUE, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterArrayType) {
	 		listener.enterArrayType(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitArrayType) {
	 		listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoublePrecisionTypeContext extends TypeContext {
	constructor(parser: TrinoSqlParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.DOUBLE, 0);
	}
	public PRECISION(): TerminalNode {
		return this.getToken(TrinoSqlParser.PRECISION, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDoublePrecisionType) {
	 		listener.enterDoublePrecisionType(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDoublePrecisionType) {
	 		listener.exitDoublePrecisionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitDoublePrecisionType) {
			return visitor.visitDoublePrecisionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LegacyArrayTypeContext extends TypeContext {
	constructor(parser: TrinoSqlParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ARRAY(): TerminalNode {
		return this.getToken(TrinoSqlParser.ARRAY, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(TrinoSqlParser.LT, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public GT(): TerminalNode {
		return this.getToken(TrinoSqlParser.GT, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterLegacyArrayType) {
	 		listener.enterLegacyArrayType(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitLegacyArrayType) {
	 		listener.exitLegacyArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitLegacyArrayType) {
			return visitor.visitLegacyArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GenericTypeContext extends TypeContext {
	constructor(parser: TrinoSqlParser, ctx: TypeContext) {
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
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterGenericType) {
	 		listener.enterGenericType(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitGenericType) {
	 		listener.exitGenericType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TIMESTAMP(): TerminalNode {
		return this.getToken(TrinoSqlParser.TIMESTAMP, 0);
	}
	public WITHOUT(): TerminalNode {
		return this.getToken(TrinoSqlParser.WITHOUT, 0);
	}
	public TIME_list(): TerminalNode[] {
	    	return this.getTokens(TrinoSqlParser.TIME);
	}
	public TIME(i: number): TerminalNode {
		return this.getToken(TrinoSqlParser.TIME, i);
	}
	public ZONE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ZONE, 0);
	}
	public typeParameter(): TypeParameterContext {
		return this.getTypedRuleContext(TypeParameterContext, 0) as TypeParameterContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(TrinoSqlParser.WITH, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDateTimeType) {
	 		listener.enterDateTimeType(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDateTimeType) {
	 		listener.exitDateTimeType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MAP(): TerminalNode {
		return this.getToken(TrinoSqlParser.MAP, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(TrinoSqlParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(TrinoSqlParser.GT, 0);
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterLegacyMapType) {
	 		listener.enterLegacyMapType(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitLegacyMapType) {
	 		listener.exitLegacyMapType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitLegacyMapType) {
			return visitor.visitLegacyMapType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowFieldContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return TrinoSqlParser.RULE_rowField;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRowField) {
	 		listener.enterRowField(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRowField) {
	 		listener.exitRowField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitRowField) {
			return visitor.visitRowField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER_VALUE(): TerminalNode {
		return this.getToken(TrinoSqlParser.INTEGER_VALUE, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_typeParameter;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterTypeParameter) {
	 		listener.enterTypeParameter(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitTypeParameter) {
	 		listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHEN(): TerminalNode {
		return this.getToken(TrinoSqlParser.WHEN, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(TrinoSqlParser.THEN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_whenClause;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterWhenClause) {
	 		listener.enterWhenClause(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitWhenClause) {
	 		listener.exitWhenClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitWhenClause) {
			return visitor.visitWhenClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilterContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FILTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.FILTER, 0);
	}
	public WHERE(): TerminalNode {
		return this.getToken(TrinoSqlParser.WHERE, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_filter;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterFilter) {
	 		listener.enterFilter(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitFilter) {
	 		listener.exitFilter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitFilter) {
			return visitor.visitFilter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MergeCaseContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_mergeCase;
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
	constructor(parser: TrinoSqlParser, ctx: MergeCaseContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public WHEN(): TerminalNode {
		return this.getToken(TrinoSqlParser.WHEN, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(TrinoSqlParser.NOT, 0);
	}
	public MATCHED(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATCHED, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(TrinoSqlParser.THEN, 0);
	}
	public INSERT(): TerminalNode {
		return this.getToken(TrinoSqlParser.INSERT, 0);
	}
	public VALUES(): TerminalNode {
		return this.getToken(TrinoSqlParser.VALUES, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public AND(): TerminalNode {
		return this.getToken(TrinoSqlParser.AND, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterMergeInsert) {
	 		listener.enterMergeInsert(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitMergeInsert) {
	 		listener.exitMergeInsert(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: MergeCaseContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public WHEN(): TerminalNode {
		return this.getToken(TrinoSqlParser.WHEN, 0);
	}
	public MATCHED(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATCHED, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(TrinoSqlParser.THEN, 0);
	}
	public UPDATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.UPDATE, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(TrinoSqlParser.SET, 0);
	}
	public EQ_list(): TerminalNode[] {
	    	return this.getTokens(TrinoSqlParser.EQ);
	}
	public EQ(i: number): TerminalNode {
		return this.getToken(TrinoSqlParser.EQ, i);
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
		return this.getToken(TrinoSqlParser.AND, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterMergeUpdate) {
	 		listener.enterMergeUpdate(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitMergeUpdate) {
	 		listener.exitMergeUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitMergeUpdate) {
			return visitor.visitMergeUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MergeDeleteContext extends MergeCaseContext {
	public _condition!: ExpressionContext;
	constructor(parser: TrinoSqlParser, ctx: MergeCaseContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public WHEN(): TerminalNode {
		return this.getToken(TrinoSqlParser.WHEN, 0);
	}
	public MATCHED(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATCHED, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(TrinoSqlParser.THEN, 0);
	}
	public DELETE(): TerminalNode {
		return this.getToken(TrinoSqlParser.DELETE, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(TrinoSqlParser.AND, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterMergeDelete) {
	 		listener.enterMergeDelete(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitMergeDelete) {
	 		listener.exitMergeDelete(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitMergeDelete) {
			return visitor.visitMergeDelete(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverContext extends ParserRuleContext {
	public _windowName!: IdentifierContext;
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OVER(): TerminalNode {
		return this.getToken(TrinoSqlParser.OVER, 0);
	}
	public windowSpecification(): WindowSpecificationContext {
		return this.getTypedRuleContext(WindowSpecificationContext, 0) as WindowSpecificationContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_over;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterOver) {
	 		listener.enterOver(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitOver) {
	 		listener.exitOver(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitOver) {
			return visitor.visitOver(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowFrameContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public frameExtent(): FrameExtentContext {
		return this.getTypedRuleContext(FrameExtentContext, 0) as FrameExtentContext;
	}
	public MEASURES(): TerminalNode {
		return this.getToken(TrinoSqlParser.MEASURES, 0);
	}
	public measureDefinition_list(): MeasureDefinitionContext[] {
		return this.getTypedRuleContexts(MeasureDefinitionContext) as MeasureDefinitionContext[];
	}
	public measureDefinition(i: number): MeasureDefinitionContext {
		return this.getTypedRuleContext(MeasureDefinitionContext, i) as MeasureDefinitionContext;
	}
	public AFTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.AFTER, 0);
	}
	public MATCH(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATCH, 0);
	}
	public skipTo(): SkipToContext {
		return this.getTypedRuleContext(SkipToContext, 0) as SkipToContext;
	}
	public PATTERN(): TerminalNode {
		return this.getToken(TrinoSqlParser.PATTERN, 0);
	}
	public rowPattern(): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, 0) as RowPatternContext;
	}
	public SUBSET(): TerminalNode {
		return this.getToken(TrinoSqlParser.SUBSET, 0);
	}
	public subsetDefinition_list(): SubsetDefinitionContext[] {
		return this.getTypedRuleContexts(SubsetDefinitionContext) as SubsetDefinitionContext[];
	}
	public subsetDefinition(i: number): SubsetDefinitionContext {
		return this.getTypedRuleContext(SubsetDefinitionContext, i) as SubsetDefinitionContext;
	}
	public DEFINE(): TerminalNode {
		return this.getToken(TrinoSqlParser.DEFINE, 0);
	}
	public variableDefinition_list(): VariableDefinitionContext[] {
		return this.getTypedRuleContexts(VariableDefinitionContext) as VariableDefinitionContext[];
	}
	public variableDefinition(i: number): VariableDefinitionContext {
		return this.getTypedRuleContext(VariableDefinitionContext, i) as VariableDefinitionContext;
	}
	public INITIAL(): TerminalNode {
		return this.getToken(TrinoSqlParser.INITIAL, 0);
	}
	public SEEK(): TerminalNode {
		return this.getToken(TrinoSqlParser.SEEK, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_windowFrame;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterWindowFrame) {
	 		listener.enterWindowFrame(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitWindowFrame) {
	 		listener.exitWindowFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RANGE(): TerminalNode {
		return this.getToken(TrinoSqlParser.RANGE, 0);
	}
	public frameBound_list(): FrameBoundContext[] {
		return this.getTypedRuleContexts(FrameBoundContext) as FrameBoundContext[];
	}
	public frameBound(i: number): FrameBoundContext {
		return this.getTypedRuleContext(FrameBoundContext, i) as FrameBoundContext;
	}
	public ROWS(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROWS, 0);
	}
	public GROUPS(): TerminalNode {
		return this.getToken(TrinoSqlParser.GROUPS, 0);
	}
	public BETWEEN(): TerminalNode {
		return this.getToken(TrinoSqlParser.BETWEEN, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(TrinoSqlParser.AND, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_frameExtent;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterFrameExtent) {
	 		listener.enterFrameExtent(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitFrameExtent) {
	 		listener.exitFrameExtent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitFrameExtent) {
			return visitor.visitFrameExtent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FrameBoundContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_frameBound;
	}
	public copyFrom(ctx: FrameBoundContext): void {
		super.copyFrom(ctx);
	}
}
export class BoundedFrameContext extends FrameBoundContext {
	public _boundType!: Token;
	constructor(parser: TrinoSqlParser, ctx: FrameBoundContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public PRECEDING(): TerminalNode {
		return this.getToken(TrinoSqlParser.PRECEDING, 0);
	}
	public FOLLOWING(): TerminalNode {
		return this.getToken(TrinoSqlParser.FOLLOWING, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterBoundedFrame) {
	 		listener.enterBoundedFrame(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitBoundedFrame) {
	 		listener.exitBoundedFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitBoundedFrame) {
			return visitor.visitBoundedFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnboundedFrameContext extends FrameBoundContext {
	public _boundType!: Token;
	constructor(parser: TrinoSqlParser, ctx: FrameBoundContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UNBOUNDED(): TerminalNode {
		return this.getToken(TrinoSqlParser.UNBOUNDED, 0);
	}
	public PRECEDING(): TerminalNode {
		return this.getToken(TrinoSqlParser.PRECEDING, 0);
	}
	public FOLLOWING(): TerminalNode {
		return this.getToken(TrinoSqlParser.FOLLOWING, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterUnboundedFrame) {
	 		listener.enterUnboundedFrame(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitUnboundedFrame) {
	 		listener.exitUnboundedFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitUnboundedFrame) {
			return visitor.visitUnboundedFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentRowBoundContext extends FrameBoundContext {
	constructor(parser: TrinoSqlParser, ctx: FrameBoundContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(TrinoSqlParser.CURRENT, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROW, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCurrentRowBound) {
	 		listener.enterCurrentRowBound(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCurrentRowBound) {
	 		listener.exitCurrentRowBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCurrentRowBound) {
			return visitor.visitCurrentRowBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowPatternContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_rowPattern;
	}
	public copyFrom(ctx: RowPatternContext): void {
		super.copyFrom(ctx);
	}
}
export class QuantifiedPrimaryContext extends RowPatternContext {
	constructor(parser: TrinoSqlParser, ctx: RowPatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public patternPrimary(): PatternPrimaryContext {
		return this.getTypedRuleContext(PatternPrimaryContext, 0) as PatternPrimaryContext;
	}
	public patternQuantifier(): PatternQuantifierContext {
		return this.getTypedRuleContext(PatternQuantifierContext, 0) as PatternQuantifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterQuantifiedPrimary) {
	 		listener.enterQuantifiedPrimary(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitQuantifiedPrimary) {
	 		listener.exitQuantifiedPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitQuantifiedPrimary) {
			return visitor.visitQuantifiedPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternConcatenationContext extends RowPatternContext {
	constructor(parser: TrinoSqlParser, ctx: RowPatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public rowPattern_list(): RowPatternContext[] {
		return this.getTypedRuleContexts(RowPatternContext) as RowPatternContext[];
	}
	public rowPattern(i: number): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, i) as RowPatternContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterPatternConcatenation) {
	 		listener.enterPatternConcatenation(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitPatternConcatenation) {
	 		listener.exitPatternConcatenation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitPatternConcatenation) {
			return visitor.visitPatternConcatenation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternAlternationContext extends RowPatternContext {
	constructor(parser: TrinoSqlParser, ctx: RowPatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public rowPattern_list(): RowPatternContext[] {
		return this.getTypedRuleContexts(RowPatternContext) as RowPatternContext[];
	}
	public rowPattern(i: number): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, i) as RowPatternContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterPatternAlternation) {
	 		listener.enterPatternAlternation(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitPatternAlternation) {
	 		listener.exitPatternAlternation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitPatternAlternation) {
			return visitor.visitPatternAlternation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternPrimaryContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_patternPrimary;
	}
	public copyFrom(ctx: PatternPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class PatternPermutationContext extends PatternPrimaryContext {
	constructor(parser: TrinoSqlParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PERMUTE(): TerminalNode {
		return this.getToken(TrinoSqlParser.PERMUTE, 0);
	}
	public rowPattern_list(): RowPatternContext[] {
		return this.getTypedRuleContexts(RowPatternContext) as RowPatternContext[];
	}
	public rowPattern(i: number): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, i) as RowPatternContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterPatternPermutation) {
	 		listener.enterPatternPermutation(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitPatternPermutation) {
	 		listener.exitPatternPermutation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitPatternPermutation) {
			return visitor.visitPatternPermutation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PartitionEndAnchorContext extends PatternPrimaryContext {
	constructor(parser: TrinoSqlParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterPartitionEndAnchor) {
	 		listener.enterPartitionEndAnchor(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitPartitionEndAnchor) {
	 		listener.exitPartitionEndAnchor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitPartitionEndAnchor) {
			return visitor.visitPartitionEndAnchor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternVariableContext extends PatternPrimaryContext {
	constructor(parser: TrinoSqlParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterPatternVariable) {
	 		listener.enterPatternVariable(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitPatternVariable) {
	 		listener.exitPatternVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitPatternVariable) {
			return visitor.visitPatternVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExcludedPatternContext extends PatternPrimaryContext {
	constructor(parser: TrinoSqlParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public rowPattern(): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, 0) as RowPatternContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterExcludedPattern) {
	 		listener.enterExcludedPattern(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitExcludedPattern) {
	 		listener.exitExcludedPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitExcludedPattern) {
			return visitor.visitExcludedPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PartitionStartAnchorContext extends PatternPrimaryContext {
	constructor(parser: TrinoSqlParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterPartitionStartAnchor) {
	 		listener.enterPartitionStartAnchor(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitPartitionStartAnchor) {
	 		listener.exitPartitionStartAnchor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitPartitionStartAnchor) {
			return visitor.visitPartitionStartAnchor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmptyPatternContext extends PatternPrimaryContext {
	constructor(parser: TrinoSqlParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterEmptyPattern) {
	 		listener.enterEmptyPattern(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitEmptyPattern) {
	 		listener.exitEmptyPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitEmptyPattern) {
			return visitor.visitEmptyPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GroupedPatternContext extends PatternPrimaryContext {
	constructor(parser: TrinoSqlParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public rowPattern(): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, 0) as RowPatternContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterGroupedPattern) {
	 		listener.enterGroupedPattern(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitGroupedPattern) {
	 		listener.exitGroupedPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitGroupedPattern) {
			return visitor.visitGroupedPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternQuantifierContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_patternQuantifier;
	}
	public copyFrom(ctx: PatternQuantifierContext): void {
		super.copyFrom(ctx);
	}
}
export class ZeroOrMoreQuantifierContext extends PatternQuantifierContext {
	public _reluctant!: Token;
	constructor(parser: TrinoSqlParser, ctx: PatternQuantifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ASTERISK(): TerminalNode {
		return this.getToken(TrinoSqlParser.ASTERISK, 0);
	}
	public QUESTION_MARK(): TerminalNode {
		return this.getToken(TrinoSqlParser.QUESTION_MARK, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterZeroOrMoreQuantifier) {
	 		listener.enterZeroOrMoreQuantifier(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitZeroOrMoreQuantifier) {
	 		listener.exitZeroOrMoreQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitZeroOrMoreQuantifier) {
			return visitor.visitZeroOrMoreQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OneOrMoreQuantifierContext extends PatternQuantifierContext {
	public _reluctant!: Token;
	constructor(parser: TrinoSqlParser, ctx: PatternQuantifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PLUS(): TerminalNode {
		return this.getToken(TrinoSqlParser.PLUS, 0);
	}
	public QUESTION_MARK(): TerminalNode {
		return this.getToken(TrinoSqlParser.QUESTION_MARK, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterOneOrMoreQuantifier) {
	 		listener.enterOneOrMoreQuantifier(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitOneOrMoreQuantifier) {
	 		listener.exitOneOrMoreQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitOneOrMoreQuantifier) {
			return visitor.visitOneOrMoreQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ZeroOrOneQuantifierContext extends PatternQuantifierContext {
	public _reluctant!: Token;
	constructor(parser: TrinoSqlParser, ctx: PatternQuantifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public QUESTION_MARK_list(): TerminalNode[] {
	    	return this.getTokens(TrinoSqlParser.QUESTION_MARK);
	}
	public QUESTION_MARK(i: number): TerminalNode {
		return this.getToken(TrinoSqlParser.QUESTION_MARK, i);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterZeroOrOneQuantifier) {
	 		listener.enterZeroOrOneQuantifier(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitZeroOrOneQuantifier) {
	 		listener.exitZeroOrOneQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
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
	constructor(parser: TrinoSqlParser, ctx: PatternQuantifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER_VALUE_list(): TerminalNode[] {
	    	return this.getTokens(TrinoSqlParser.INTEGER_VALUE);
	}
	public INTEGER_VALUE(i: number): TerminalNode {
		return this.getToken(TrinoSqlParser.INTEGER_VALUE, i);
	}
	public QUESTION_MARK(): TerminalNode {
		return this.getToken(TrinoSqlParser.QUESTION_MARK, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRangeQuantifier) {
	 		listener.enterRangeQuantifier(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRangeQuantifier) {
	 		listener.exitRangeQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitRangeQuantifier) {
			return visitor.visitRangeQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateAssignmentContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(TrinoSqlParser.EQ, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_updateAssignment;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterUpdateAssignment) {
	 		listener.enterUpdateAssignment(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitUpdateAssignment) {
	 		listener.exitUpdateAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitUpdateAssignment) {
			return visitor.visitUpdateAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplainOptionContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_explainOption;
	}
	public copyFrom(ctx: ExplainOptionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExplainFormatContext extends ExplainOptionContext {
	public _value!: Token;
	constructor(parser: TrinoSqlParser, ctx: ExplainOptionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FORMAT(): TerminalNode {
		return this.getToken(TrinoSqlParser.FORMAT, 0);
	}
	public TEXT(): TerminalNode {
		return this.getToken(TrinoSqlParser.TEXT, 0);
	}
	public GRAPHVIZ(): TerminalNode {
		return this.getToken(TrinoSqlParser.GRAPHVIZ, 0);
	}
	public JSON(): TerminalNode {
		return this.getToken(TrinoSqlParser.JSON, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterExplainFormat) {
	 		listener.enterExplainFormat(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitExplainFormat) {
	 		listener.exitExplainFormat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitExplainFormat) {
			return visitor.visitExplainFormat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExplainTypeContext extends ExplainOptionContext {
	public _value!: Token;
	constructor(parser: TrinoSqlParser, ctx: ExplainOptionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TYPE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TYPE, 0);
	}
	public LOGICAL(): TerminalNode {
		return this.getToken(TrinoSqlParser.LOGICAL, 0);
	}
	public DISTRIBUTED(): TerminalNode {
		return this.getToken(TrinoSqlParser.DISTRIBUTED, 0);
	}
	public VALIDATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.VALIDATE, 0);
	}
	public IO(): TerminalNode {
		return this.getToken(TrinoSqlParser.IO, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterExplainType) {
	 		listener.enterExplainType(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitExplainType) {
	 		listener.exitExplainType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitExplainType) {
			return visitor.visitExplainType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransactionModeContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_transactionMode;
	}
	public copyFrom(ctx: TransactionModeContext): void {
		super.copyFrom(ctx);
	}
}
export class TransactionAccessModeContext extends TransactionModeContext {
	public _accessMode!: Token;
	constructor(parser: TrinoSqlParser, ctx: TransactionModeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public READ(): TerminalNode {
		return this.getToken(TrinoSqlParser.READ, 0);
	}
	public ONLY(): TerminalNode {
		return this.getToken(TrinoSqlParser.ONLY, 0);
	}
	public WRITE(): TerminalNode {
		return this.getToken(TrinoSqlParser.WRITE, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterTransactionAccessMode) {
	 		listener.enterTransactionAccessMode(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitTransactionAccessMode) {
	 		listener.exitTransactionAccessMode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitTransactionAccessMode) {
			return visitor.visitTransactionAccessMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IsolationLevelContext extends TransactionModeContext {
	constructor(parser: TrinoSqlParser, ctx: TransactionModeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ISOLATION(): TerminalNode {
		return this.getToken(TrinoSqlParser.ISOLATION, 0);
	}
	public LEVEL(): TerminalNode {
		return this.getToken(TrinoSqlParser.LEVEL, 0);
	}
	public levelOfIsolation(): LevelOfIsolationContext {
		return this.getTypedRuleContext(LevelOfIsolationContext, 0) as LevelOfIsolationContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterIsolationLevel) {
	 		listener.enterIsolationLevel(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitIsolationLevel) {
	 		listener.exitIsolationLevel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitIsolationLevel) {
			return visitor.visitIsolationLevel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LevelOfIsolationContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_levelOfIsolation;
	}
	public copyFrom(ctx: LevelOfIsolationContext): void {
		super.copyFrom(ctx);
	}
}
export class ReadUncommittedContext extends LevelOfIsolationContext {
	constructor(parser: TrinoSqlParser, ctx: LevelOfIsolationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public READ(): TerminalNode {
		return this.getToken(TrinoSqlParser.READ, 0);
	}
	public UNCOMMITTED(): TerminalNode {
		return this.getToken(TrinoSqlParser.UNCOMMITTED, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterReadUncommitted) {
	 		listener.enterReadUncommitted(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitReadUncommitted) {
	 		listener.exitReadUncommitted(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitReadUncommitted) {
			return visitor.visitReadUncommitted(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SerializableContext extends LevelOfIsolationContext {
	constructor(parser: TrinoSqlParser, ctx: LevelOfIsolationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SERIALIZABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.SERIALIZABLE, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSerializable) {
	 		listener.enterSerializable(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSerializable) {
	 		listener.exitSerializable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSerializable) {
			return visitor.visitSerializable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReadCommittedContext extends LevelOfIsolationContext {
	constructor(parser: TrinoSqlParser, ctx: LevelOfIsolationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public READ(): TerminalNode {
		return this.getToken(TrinoSqlParser.READ, 0);
	}
	public COMMITTED(): TerminalNode {
		return this.getToken(TrinoSqlParser.COMMITTED, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterReadCommitted) {
	 		listener.enterReadCommitted(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitReadCommitted) {
	 		listener.exitReadCommitted(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitReadCommitted) {
			return visitor.visitReadCommitted(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RepeatableReadContext extends LevelOfIsolationContext {
	constructor(parser: TrinoSqlParser, ctx: LevelOfIsolationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REPEATABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.REPEATABLE, 0);
	}
	public READ(): TerminalNode {
		return this.getToken(TrinoSqlParser.READ, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRepeatableRead) {
	 		listener.enterRepeatableRead(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRepeatableRead) {
	 		listener.exitRepeatableRead(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitRepeatableRead) {
			return visitor.visitRepeatableRead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallArgumentContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_callArgument;
	}
	public copyFrom(ctx: CallArgumentContext): void {
		super.copyFrom(ctx);
	}
}
export class PositionalArgumentContext extends CallArgumentContext {
	constructor(parser: TrinoSqlParser, ctx: CallArgumentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterPositionalArgument) {
	 		listener.enterPositionalArgument(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitPositionalArgument) {
	 		listener.exitPositionalArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitPositionalArgument) {
			return visitor.visitPositionalArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NamedArgumentContext extends CallArgumentContext {
	constructor(parser: TrinoSqlParser, ctx: CallArgumentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterNamedArgument) {
	 		listener.enterNamedArgument(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitNamedArgument) {
	 		listener.exitNamedArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitNamedArgument) {
			return visitor.visitNamedArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathElementContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_pathElement;
	}
	public copyFrom(ctx: PathElementContext): void {
		super.copyFrom(ctx);
	}
}
export class QualifiedArgumentContext extends PathElementContext {
	constructor(parser: TrinoSqlParser, ctx: PathElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterQualifiedArgument) {
	 		listener.enterQualifiedArgument(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitQualifiedArgument) {
	 		listener.exitQualifiedArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitQualifiedArgument) {
			return visitor.visitQualifiedArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnqualifiedArgumentContext extends PathElementContext {
	constructor(parser: TrinoSqlParser, ctx: PathElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterUnqualifiedArgument) {
	 		listener.enterUnqualifiedArgument(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitUnqualifiedArgument) {
	 		listener.exitUnqualifiedArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitUnqualifiedArgument) {
			return visitor.visitUnqualifiedArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathSpecificationContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return TrinoSqlParser.RULE_pathSpecification;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterPathSpecification) {
	 		listener.enterPathSpecification(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitPathSpecification) {
	 		listener.exitPathSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitPathSpecification) {
			return visitor.visitPathSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrivilegeContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SELECT(): TerminalNode {
		return this.getToken(TrinoSqlParser.SELECT, 0);
	}
	public DELETE(): TerminalNode {
		return this.getToken(TrinoSqlParser.DELETE, 0);
	}
	public INSERT(): TerminalNode {
		return this.getToken(TrinoSqlParser.INSERT, 0);
	}
	public UPDATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.UPDATE, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_privilege;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterPrivilege) {
	 		listener.enterPrivilege(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitPrivilege) {
	 		listener.exitPrivilege(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitPrivilege) {
			return visitor.visitPrivilege(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return TrinoSqlParser.RULE_qualifiedName;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterQualifiedName) {
	 		listener.enterQualifiedName(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitQualifiedName) {
	 		listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GrantorContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_grantor;
	}
	public copyFrom(ctx: GrantorContext): void {
		super.copyFrom(ctx);
	}
}
export class CurrentUserGrantorContext extends GrantorContext {
	constructor(parser: TrinoSqlParser, ctx: GrantorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_USER(): TerminalNode {
		return this.getToken(TrinoSqlParser.CURRENT_USER, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCurrentUserGrantor) {
	 		listener.enterCurrentUserGrantor(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCurrentUserGrantor) {
	 		listener.exitCurrentUserGrantor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCurrentUserGrantor) {
			return visitor.visitCurrentUserGrantor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SpecifiedPrincipalContext extends GrantorContext {
	constructor(parser: TrinoSqlParser, ctx: GrantorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterSpecifiedPrincipal) {
	 		listener.enterSpecifiedPrincipal(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitSpecifiedPrincipal) {
	 		listener.exitSpecifiedPrincipal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSpecifiedPrincipal) {
			return visitor.visitSpecifiedPrincipal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentRoleGrantorContext extends GrantorContext {
	constructor(parser: TrinoSqlParser, ctx: GrantorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_ROLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.CURRENT_ROLE, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterCurrentRoleGrantor) {
	 		listener.enterCurrentRoleGrantor(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitCurrentRoleGrantor) {
	 		listener.exitCurrentRoleGrantor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCurrentRoleGrantor) {
			return visitor.visitCurrentRoleGrantor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrincipalContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_principal;
	}
	public copyFrom(ctx: PrincipalContext): void {
		super.copyFrom(ctx);
	}
}
export class UnspecifiedPrincipalContext extends PrincipalContext {
	constructor(parser: TrinoSqlParser, ctx: PrincipalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterUnspecifiedPrincipal) {
	 		listener.enterUnspecifiedPrincipal(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitUnspecifiedPrincipal) {
	 		listener.exitUnspecifiedPrincipal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitUnspecifiedPrincipal) {
			return visitor.visitUnspecifiedPrincipal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UserPrincipalContext extends PrincipalContext {
	constructor(parser: TrinoSqlParser, ctx: PrincipalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public USER(): TerminalNode {
		return this.getToken(TrinoSqlParser.USER, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterUserPrincipal) {
	 		listener.enterUserPrincipal(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitUserPrincipal) {
	 		listener.exitUserPrincipal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitUserPrincipal) {
			return visitor.visitUserPrincipal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RolePrincipalContext extends PrincipalContext {
	constructor(parser: TrinoSqlParser, ctx: PrincipalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ROLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROLE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRolePrincipal) {
	 		listener.enterRolePrincipal(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRolePrincipal) {
	 		listener.exitRolePrincipal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitRolePrincipal) {
			return visitor.visitRolePrincipal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RolesContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return TrinoSqlParser.RULE_roles;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterRoles) {
	 		listener.enterRoles(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitRoles) {
	 		listener.exitRoles(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitRoles) {
			return visitor.visitRoles(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_identifier;
	}
	public copyFrom(ctx: IdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class BackQuotedIdentifierContext extends IdentifierContext {
	constructor(parser: TrinoSqlParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BACKQUOTED_IDENTIFIER(): TerminalNode {
		return this.getToken(TrinoSqlParser.BACKQUOTED_IDENTIFIER, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterBackQuotedIdentifier) {
	 		listener.enterBackQuotedIdentifier(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitBackQuotedIdentifier) {
	 		listener.exitBackQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitBackQuotedIdentifier) {
			return visitor.visitBackQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuotedIdentifierContext extends IdentifierContext {
	constructor(parser: TrinoSqlParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public QUOTED_IDENTIFIER(): TerminalNode {
		return this.getToken(TrinoSqlParser.QUOTED_IDENTIFIER, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterQuotedIdentifier) {
	 		listener.enterQuotedIdentifier(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitQuotedIdentifier) {
	 		listener.exitQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifier) {
			return visitor.visitQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DigitIdentifierContext extends IdentifierContext {
	constructor(parser: TrinoSqlParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DIGIT_IDENTIFIER(): TerminalNode {
		return this.getToken(TrinoSqlParser.DIGIT_IDENTIFIER, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDigitIdentifier) {
	 		listener.enterDigitIdentifier(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDigitIdentifier) {
	 		listener.exitDigitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitDigitIdentifier) {
			return visitor.visitDigitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnquotedIdentifierContext extends IdentifierContext {
	constructor(parser: TrinoSqlParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(TrinoSqlParser.IDENTIFIER, 0);
	}
	public nonReserved(): NonReservedContext {
		return this.getTypedRuleContext(NonReservedContext, 0) as NonReservedContext;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterUnquotedIdentifier) {
	 		listener.enterUnquotedIdentifier(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitUnquotedIdentifier) {
	 		listener.exitUnquotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitUnquotedIdentifier) {
			return visitor.visitUnquotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_number;
	}
	public copyFrom(ctx: NumberContext): void {
		super.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends NumberContext {
	constructor(parser: TrinoSqlParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DECIMAL_VALUE(): TerminalNode {
		return this.getToken(TrinoSqlParser.DECIMAL_VALUE, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(TrinoSqlParser.MINUS, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDecimalLiteral) {
	 		listener.enterDecimalLiteral(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDecimalLiteral) {
	 		listener.exitDecimalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitDecimalLiteral) {
			return visitor.visitDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoubleLiteralContext extends NumberContext {
	constructor(parser: TrinoSqlParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOUBLE_VALUE(): TerminalNode {
		return this.getToken(TrinoSqlParser.DOUBLE_VALUE, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(TrinoSqlParser.MINUS, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterDoubleLiteral) {
	 		listener.enterDoubleLiteral(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitDoubleLiteral) {
	 		listener.exitDoubleLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitDoubleLiteral) {
			return visitor.visitDoubleLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntegerLiteralContext extends NumberContext {
	constructor(parser: TrinoSqlParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER_VALUE(): TerminalNode {
		return this.getToken(TrinoSqlParser.INTEGER_VALUE, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(TrinoSqlParser.MINUS, 0);
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterIntegerLiteral) {
	 		listener.enterIntegerLiteral(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitIntegerLiteral) {
	 		listener.exitIntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonReservedContext extends ParserRuleContext {
	constructor(parser?: TrinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ADD(): TerminalNode {
		return this.getToken(TrinoSqlParser.ADD, 0);
	}
	public ADMIN(): TerminalNode {
		return this.getToken(TrinoSqlParser.ADMIN, 0);
	}
	public AFTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.AFTER, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(TrinoSqlParser.ALL, 0);
	}
	public ANALYZE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ANALYZE, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(TrinoSqlParser.ANY, 0);
	}
	public ARRAY(): TerminalNode {
		return this.getToken(TrinoSqlParser.ARRAY, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(TrinoSqlParser.ASC, 0);
	}
	public AT(): TerminalNode {
		return this.getToken(TrinoSqlParser.AT, 0);
	}
	public AUTHORIZATION(): TerminalNode {
		return this.getToken(TrinoSqlParser.AUTHORIZATION, 0);
	}
	public BERNOULLI(): TerminalNode {
		return this.getToken(TrinoSqlParser.BERNOULLI, 0);
	}
	public CALL(): TerminalNode {
		return this.getToken(TrinoSqlParser.CALL, 0);
	}
	public CASCADE(): TerminalNode {
		return this.getToken(TrinoSqlParser.CASCADE, 0);
	}
	public CATALOGS(): TerminalNode {
		return this.getToken(TrinoSqlParser.CATALOGS, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(TrinoSqlParser.COLUMN, 0);
	}
	public COLUMNS(): TerminalNode {
		return this.getToken(TrinoSqlParser.COLUMNS, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(TrinoSqlParser.COMMENT, 0);
	}
	public COMMIT(): TerminalNode {
		return this.getToken(TrinoSqlParser.COMMIT, 0);
	}
	public COMMITTED(): TerminalNode {
		return this.getToken(TrinoSqlParser.COMMITTED, 0);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(TrinoSqlParser.CURRENT, 0);
	}
	public DATA(): TerminalNode {
		return this.getToken(TrinoSqlParser.DATA, 0);
	}
	public DATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.DATE, 0);
	}
	public DAY(): TerminalNode {
		return this.getToken(TrinoSqlParser.DAY, 0);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(TrinoSqlParser.DEFAULT, 0);
	}
	public DEFINE(): TerminalNode {
		return this.getToken(TrinoSqlParser.DEFINE, 0);
	}
	public DEFINER(): TerminalNode {
		return this.getToken(TrinoSqlParser.DEFINER, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(TrinoSqlParser.DESC, 0);
	}
	public DISTRIBUTED(): TerminalNode {
		return this.getToken(TrinoSqlParser.DISTRIBUTED, 0);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.DOUBLE, 0);
	}
	public EMPTY(): TerminalNode {
		return this.getToken(TrinoSqlParser.EMPTY, 0);
	}
	public EXCLUDING(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXCLUDING, 0);
	}
	public EXPLAIN(): TerminalNode {
		return this.getToken(TrinoSqlParser.EXPLAIN, 0);
	}
	public FETCH(): TerminalNode {
		return this.getToken(TrinoSqlParser.FETCH, 0);
	}
	public FILTER(): TerminalNode {
		return this.getToken(TrinoSqlParser.FILTER, 0);
	}
	public FINAL(): TerminalNode {
		return this.getToken(TrinoSqlParser.FINAL, 0);
	}
	public FIRST(): TerminalNode {
		return this.getToken(TrinoSqlParser.FIRST, 0);
	}
	public FOLLOWING(): TerminalNode {
		return this.getToken(TrinoSqlParser.FOLLOWING, 0);
	}
	public FORMAT(): TerminalNode {
		return this.getToken(TrinoSqlParser.FORMAT, 0);
	}
	public FUNCTIONS(): TerminalNode {
		return this.getToken(TrinoSqlParser.FUNCTIONS, 0);
	}
	public GRANT(): TerminalNode {
		return this.getToken(TrinoSqlParser.GRANT, 0);
	}
	public GRANTED(): TerminalNode {
		return this.getToken(TrinoSqlParser.GRANTED, 0);
	}
	public GRANTS(): TerminalNode {
		return this.getToken(TrinoSqlParser.GRANTS, 0);
	}
	public DENY(): TerminalNode {
		return this.getToken(TrinoSqlParser.DENY, 0);
	}
	public GRAPHVIZ(): TerminalNode {
		return this.getToken(TrinoSqlParser.GRAPHVIZ, 0);
	}
	public GROUPS(): TerminalNode {
		return this.getToken(TrinoSqlParser.GROUPS, 0);
	}
	public HOUR(): TerminalNode {
		return this.getToken(TrinoSqlParser.HOUR, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(TrinoSqlParser.IF, 0);
	}
	public IGNORE(): TerminalNode {
		return this.getToken(TrinoSqlParser.IGNORE, 0);
	}
	public INCLUDING(): TerminalNode {
		return this.getToken(TrinoSqlParser.INCLUDING, 0);
	}
	public INITIAL(): TerminalNode {
		return this.getToken(TrinoSqlParser.INITIAL, 0);
	}
	public INPUT(): TerminalNode {
		return this.getToken(TrinoSqlParser.INPUT, 0);
	}
	public INTERVAL(): TerminalNode {
		return this.getToken(TrinoSqlParser.INTERVAL, 0);
	}
	public INVOKER(): TerminalNode {
		return this.getToken(TrinoSqlParser.INVOKER, 0);
	}
	public IO(): TerminalNode {
		return this.getToken(TrinoSqlParser.IO, 0);
	}
	public ISOLATION(): TerminalNode {
		return this.getToken(TrinoSqlParser.ISOLATION, 0);
	}
	public JSON(): TerminalNode {
		return this.getToken(TrinoSqlParser.JSON, 0);
	}
	public LAST(): TerminalNode {
		return this.getToken(TrinoSqlParser.LAST, 0);
	}
	public LATERAL(): TerminalNode {
		return this.getToken(TrinoSqlParser.LATERAL, 0);
	}
	public LEVEL(): TerminalNode {
		return this.getToken(TrinoSqlParser.LEVEL, 0);
	}
	public LIMIT(): TerminalNode {
		return this.getToken(TrinoSqlParser.LIMIT, 0);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(TrinoSqlParser.LOCAL, 0);
	}
	public LOGICAL(): TerminalNode {
		return this.getToken(TrinoSqlParser.LOGICAL, 0);
	}
	public MAP(): TerminalNode {
		return this.getToken(TrinoSqlParser.MAP, 0);
	}
	public MATCH(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATCH, 0);
	}
	public MATCHED(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATCHED, 0);
	}
	public MATCHES(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATCHES, 0);
	}
	public MATCH_RECOGNIZE(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATCH_RECOGNIZE, 0);
	}
	public MATERIALIZED(): TerminalNode {
		return this.getToken(TrinoSqlParser.MATERIALIZED, 0);
	}
	public MEASURES(): TerminalNode {
		return this.getToken(TrinoSqlParser.MEASURES, 0);
	}
	public MERGE(): TerminalNode {
		return this.getToken(TrinoSqlParser.MERGE, 0);
	}
	public MINUTE(): TerminalNode {
		return this.getToken(TrinoSqlParser.MINUTE, 0);
	}
	public MONTH(): TerminalNode {
		return this.getToken(TrinoSqlParser.MONTH, 0);
	}
	public NEXT(): TerminalNode {
		return this.getToken(TrinoSqlParser.NEXT, 0);
	}
	public NFC(): TerminalNode {
		return this.getToken(TrinoSqlParser.NFC, 0);
	}
	public NFD(): TerminalNode {
		return this.getToken(TrinoSqlParser.NFD, 0);
	}
	public NFKC(): TerminalNode {
		return this.getToken(TrinoSqlParser.NFKC, 0);
	}
	public NFKD(): TerminalNode {
		return this.getToken(TrinoSqlParser.NFKD, 0);
	}
	public NO(): TerminalNode {
		return this.getToken(TrinoSqlParser.NO, 0);
	}
	public NONE(): TerminalNode {
		return this.getToken(TrinoSqlParser.NONE, 0);
	}
	public NULLIF(): TerminalNode {
		return this.getToken(TrinoSqlParser.NULLIF, 0);
	}
	public NULLS(): TerminalNode {
		return this.getToken(TrinoSqlParser.NULLS, 0);
	}
	public OFFSET(): TerminalNode {
		return this.getToken(TrinoSqlParser.OFFSET, 0);
	}
	public OMIT(): TerminalNode {
		return this.getToken(TrinoSqlParser.OMIT, 0);
	}
	public ONE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ONE, 0);
	}
	public ONLY(): TerminalNode {
		return this.getToken(TrinoSqlParser.ONLY, 0);
	}
	public OPTION(): TerminalNode {
		return this.getToken(TrinoSqlParser.OPTION, 0);
	}
	public ORDINALITY(): TerminalNode {
		return this.getToken(TrinoSqlParser.ORDINALITY, 0);
	}
	public OUTPUT(): TerminalNode {
		return this.getToken(TrinoSqlParser.OUTPUT, 0);
	}
	public OVER(): TerminalNode {
		return this.getToken(TrinoSqlParser.OVER, 0);
	}
	public PARTITION(): TerminalNode {
		return this.getToken(TrinoSqlParser.PARTITION, 0);
	}
	public PARTITIONS(): TerminalNode {
		return this.getToken(TrinoSqlParser.PARTITIONS, 0);
	}
	public PAST(): TerminalNode {
		return this.getToken(TrinoSqlParser.PAST, 0);
	}
	public PATH(): TerminalNode {
		return this.getToken(TrinoSqlParser.PATH, 0);
	}
	public PATTERN(): TerminalNode {
		return this.getToken(TrinoSqlParser.PATTERN, 0);
	}
	public PER(): TerminalNode {
		return this.getToken(TrinoSqlParser.PER, 0);
	}
	public PERMUTE(): TerminalNode {
		return this.getToken(TrinoSqlParser.PERMUTE, 0);
	}
	public POSITION(): TerminalNode {
		return this.getToken(TrinoSqlParser.POSITION, 0);
	}
	public PRECEDING(): TerminalNode {
		return this.getToken(TrinoSqlParser.PRECEDING, 0);
	}
	public PRECISION(): TerminalNode {
		return this.getToken(TrinoSqlParser.PRECISION, 0);
	}
	public PRIVILEGES(): TerminalNode {
		return this.getToken(TrinoSqlParser.PRIVILEGES, 0);
	}
	public PROPERTIES(): TerminalNode {
		return this.getToken(TrinoSqlParser.PROPERTIES, 0);
	}
	public RANGE(): TerminalNode {
		return this.getToken(TrinoSqlParser.RANGE, 0);
	}
	public READ(): TerminalNode {
		return this.getToken(TrinoSqlParser.READ, 0);
	}
	public REFRESH(): TerminalNode {
		return this.getToken(TrinoSqlParser.REFRESH, 0);
	}
	public RENAME(): TerminalNode {
		return this.getToken(TrinoSqlParser.RENAME, 0);
	}
	public REPEATABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.REPEATABLE, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(TrinoSqlParser.REPLACE, 0);
	}
	public RESET(): TerminalNode {
		return this.getToken(TrinoSqlParser.RESET, 0);
	}
	public RESPECT(): TerminalNode {
		return this.getToken(TrinoSqlParser.RESPECT, 0);
	}
	public RESTRICT(): TerminalNode {
		return this.getToken(TrinoSqlParser.RESTRICT, 0);
	}
	public REVOKE(): TerminalNode {
		return this.getToken(TrinoSqlParser.REVOKE, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROLE, 0);
	}
	public ROLES(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROLES, 0);
	}
	public ROLLBACK(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROLLBACK, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROW, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(TrinoSqlParser.ROWS, 0);
	}
	public RUNNING(): TerminalNode {
		return this.getToken(TrinoSqlParser.RUNNING, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(TrinoSqlParser.SCHEMA, 0);
	}
	public SCHEMAS(): TerminalNode {
		return this.getToken(TrinoSqlParser.SCHEMAS, 0);
	}
	public SECOND(): TerminalNode {
		return this.getToken(TrinoSqlParser.SECOND, 0);
	}
	public SECURITY(): TerminalNode {
		return this.getToken(TrinoSqlParser.SECURITY, 0);
	}
	public SEEK(): TerminalNode {
		return this.getToken(TrinoSqlParser.SEEK, 0);
	}
	public SERIALIZABLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.SERIALIZABLE, 0);
	}
	public SESSION(): TerminalNode {
		return this.getToken(TrinoSqlParser.SESSION, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(TrinoSqlParser.SET, 0);
	}
	public SETS(): TerminalNode {
		return this.getToken(TrinoSqlParser.SETS, 0);
	}
	public SHOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.SHOW, 0);
	}
	public SOME(): TerminalNode {
		return this.getToken(TrinoSqlParser.SOME, 0);
	}
	public START(): TerminalNode {
		return this.getToken(TrinoSqlParser.START, 0);
	}
	public STATS(): TerminalNode {
		return this.getToken(TrinoSqlParser.STATS, 0);
	}
	public SUBSET(): TerminalNode {
		return this.getToken(TrinoSqlParser.SUBSET, 0);
	}
	public SUBSTRING(): TerminalNode {
		return this.getToken(TrinoSqlParser.SUBSTRING, 0);
	}
	public SYSTEM(): TerminalNode {
		return this.getToken(TrinoSqlParser.SYSTEM, 0);
	}
	public TABLES(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLES, 0);
	}
	public TABLESAMPLE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TABLESAMPLE, 0);
	}
	public TEXT(): TerminalNode {
		return this.getToken(TrinoSqlParser.TEXT, 0);
	}
	public TIES(): TerminalNode {
		return this.getToken(TrinoSqlParser.TIES, 0);
	}
	public TIME(): TerminalNode {
		return this.getToken(TrinoSqlParser.TIME, 0);
	}
	public TIMESTAMP(): TerminalNode {
		return this.getToken(TrinoSqlParser.TIMESTAMP, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(TrinoSqlParser.TO, 0);
	}
	public TRANSACTION(): TerminalNode {
		return this.getToken(TrinoSqlParser.TRANSACTION, 0);
	}
	public TRUNCATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TRUNCATE, 0);
	}
	public TRY_CAST(): TerminalNode {
		return this.getToken(TrinoSqlParser.TRY_CAST, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(TrinoSqlParser.TYPE, 0);
	}
	public UNBOUNDED(): TerminalNode {
		return this.getToken(TrinoSqlParser.UNBOUNDED, 0);
	}
	public UNCOMMITTED(): TerminalNode {
		return this.getToken(TrinoSqlParser.UNCOMMITTED, 0);
	}
	public UNMATCHED(): TerminalNode {
		return this.getToken(TrinoSqlParser.UNMATCHED, 0);
	}
	public UPDATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.UPDATE, 0);
	}
	public USE(): TerminalNode {
		return this.getToken(TrinoSqlParser.USE, 0);
	}
	public USER(): TerminalNode {
		return this.getToken(TrinoSqlParser.USER, 0);
	}
	public VALIDATE(): TerminalNode {
		return this.getToken(TrinoSqlParser.VALIDATE, 0);
	}
	public VERBOSE(): TerminalNode {
		return this.getToken(TrinoSqlParser.VERBOSE, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(TrinoSqlParser.VIEW, 0);
	}
	public WINDOW(): TerminalNode {
		return this.getToken(TrinoSqlParser.WINDOW, 0);
	}
	public WITHOUT(): TerminalNode {
		return this.getToken(TrinoSqlParser.WITHOUT, 0);
	}
	public WORK(): TerminalNode {
		return this.getToken(TrinoSqlParser.WORK, 0);
	}
	public WRITE(): TerminalNode {
		return this.getToken(TrinoSqlParser.WRITE, 0);
	}
	public YEAR(): TerminalNode {
		return this.getToken(TrinoSqlParser.YEAR, 0);
	}
	public ZONE(): TerminalNode {
		return this.getToken(TrinoSqlParser.ZONE, 0);
	}
    public get ruleIndex(): number {
    	return TrinoSqlParser.RULE_nonReserved;
	}
	public enterRule(listener: TrinoSqlListener): void {
	    if(listener.enterNonReserved) {
	 		listener.enterNonReserved(this);
		}
	}
	public exitRule(listener: TrinoSqlListener): void {
	    if(listener.exitNonReserved) {
	 		listener.exitNonReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitNonReserved) {
			return visitor.visitNonReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
