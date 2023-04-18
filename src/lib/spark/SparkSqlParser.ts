// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/spark/SparkSql.g4 by ANTLR 4.12.0
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
import SparkSqlListener from "./SparkSqlListener.js";
import SparkSqlVisitor from "./SparkSqlVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class SparkSqlParser extends Parser {
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
	public static readonly ADD = 11;
	public static readonly AFTER = 12;
	public static readonly ALL = 13;
	public static readonly ALTER = 14;
	public static readonly ANALYZE = 15;
	public static readonly AND = 16;
	public static readonly ANTI = 17;
	public static readonly ANY = 18;
	public static readonly ARCHIVE = 19;
	public static readonly ARRAY = 20;
	public static readonly AS = 21;
	public static readonly ASC = 22;
	public static readonly AT = 23;
	public static readonly AUTHORIZATION = 24;
	public static readonly BETWEEN = 25;
	public static readonly BOTH = 26;
	public static readonly BUCKET = 27;
	public static readonly BUCKETS = 28;
	public static readonly BY = 29;
	public static readonly CACHE = 30;
	public static readonly CASCADE = 31;
	public static readonly CASE = 32;
	public static readonly CAST = 33;
	public static readonly CHANGE = 34;
	public static readonly CHECK = 35;
	public static readonly CLEAR = 36;
	public static readonly CLUSTER = 37;
	public static readonly CLUSTERED = 38;
	public static readonly CODEGEN = 39;
	public static readonly COLLATE = 40;
	public static readonly COLLECTION = 41;
	public static readonly COLUMN = 42;
	public static readonly COLUMNS = 43;
	public static readonly COMMENT = 44;
	public static readonly COMMIT = 45;
	public static readonly COMPACT = 46;
	public static readonly COMPACTIONS = 47;
	public static readonly COMPUTE = 48;
	public static readonly CONCATENATE = 49;
	public static readonly CONSTRAINT = 50;
	public static readonly COST = 51;
	public static readonly CREATE = 52;
	public static readonly CROSS = 53;
	public static readonly CUBE = 54;
	public static readonly CURRENT = 55;
	public static readonly CURRENT_DATE = 56;
	public static readonly CURRENT_TIME = 57;
	public static readonly CURRENT_TIMESTAMP = 58;
	public static readonly CURRENT_USER = 59;
	public static readonly DATA = 60;
	public static readonly DATABASE = 61;
	public static readonly DATABASES = 62;
	public static readonly DBPROPERTIES = 63;
	public static readonly DEFINED = 64;
	public static readonly DELETE = 65;
	public static readonly DELIMITED = 66;
	public static readonly DESC = 67;
	public static readonly DESCRIBE = 68;
	public static readonly DFS = 69;
	public static readonly DIRECTORIES = 70;
	public static readonly DIRECTORY = 71;
	public static readonly DISTINCT = 72;
	public static readonly DISTRIBUTE = 73;
	public static readonly DIV = 74;
	public static readonly DROP = 75;
	public static readonly ELSE = 76;
	public static readonly END = 77;
	public static readonly ESCAPE = 78;
	public static readonly ESCAPED = 79;
	public static readonly EXCEPT = 80;
	public static readonly EXCHANGE = 81;
	public static readonly EXISTS = 82;
	public static readonly EXPLAIN = 83;
	public static readonly EXPORT = 84;
	public static readonly EXTENDED = 85;
	public static readonly EXTERNAL = 86;
	public static readonly EXTRACT = 87;
	public static readonly FALSE = 88;
	public static readonly FETCH = 89;
	public static readonly FIELDS = 90;
	public static readonly FILTER = 91;
	public static readonly FILEFORMAT = 92;
	public static readonly FIRST = 93;
	public static readonly FOLLOWING = 94;
	public static readonly FOR = 95;
	public static readonly FOREIGN = 96;
	public static readonly FORMAT = 97;
	public static readonly FORMATTED = 98;
	public static readonly FROM = 99;
	public static readonly FULL = 100;
	public static readonly FUNCTION = 101;
	public static readonly FUNCTIONS = 102;
	public static readonly GLOBAL = 103;
	public static readonly GRANT = 104;
	public static readonly GROUP = 105;
	public static readonly GROUPING = 106;
	public static readonly HAVING = 107;
	public static readonly IF = 108;
	public static readonly IGNORE = 109;
	public static readonly IMPORT = 110;
	public static readonly IN = 111;
	public static readonly INDEX = 112;
	public static readonly INDEXES = 113;
	public static readonly INNER = 114;
	public static readonly INPATH = 115;
	public static readonly INPUTFORMAT = 116;
	public static readonly INSERT = 117;
	public static readonly INTERSECT = 118;
	public static readonly INTERVAL = 119;
	public static readonly INTO = 120;
	public static readonly IS = 121;
	public static readonly ITEMS = 122;
	public static readonly JOIN = 123;
	public static readonly KEYS = 124;
	public static readonly LAST = 125;
	public static readonly LATERAL = 126;
	public static readonly LAZY = 127;
	public static readonly LEADING = 128;
	public static readonly LEFT = 129;
	public static readonly LIKE = 130;
	public static readonly LIMIT = 131;
	public static readonly LINES = 132;
	public static readonly LIST = 133;
	public static readonly LOAD = 134;
	public static readonly LOCAL = 135;
	public static readonly LOCATION = 136;
	public static readonly LOCK = 137;
	public static readonly LOCKS = 138;
	public static readonly LOGICAL = 139;
	public static readonly MACRO = 140;
	public static readonly MAP = 141;
	public static readonly MATCHED = 142;
	public static readonly MERGE = 143;
	public static readonly MSCK = 144;
	public static readonly NAMESPACE = 145;
	public static readonly NAMESPACES = 146;
	public static readonly NATURAL = 147;
	public static readonly NO = 148;
	public static readonly NOT = 149;
	public static readonly NULL = 150;
	public static readonly NULLS = 151;
	public static readonly OF = 152;
	public static readonly ON = 153;
	public static readonly ONLY = 154;
	public static readonly OPTION = 155;
	public static readonly OPTIONS = 156;
	public static readonly OR = 157;
	public static readonly ORDER = 158;
	public static readonly OUT = 159;
	public static readonly OUTER = 160;
	public static readonly OUTPUTFORMAT = 161;
	public static readonly OVER = 162;
	public static readonly OVERLAPS = 163;
	public static readonly OVERLAY = 164;
	public static readonly OVERWRITE = 165;
	public static readonly PARTITION = 166;
	public static readonly PARTITIONED = 167;
	public static readonly PARTITIONS = 168;
	public static readonly PERCENTLIT = 169;
	public static readonly PIVOT = 170;
	public static readonly PLACING = 171;
	public static readonly POSITION = 172;
	public static readonly PRECEDING = 173;
	public static readonly PRIMARY = 174;
	public static readonly PRINCIPALS = 175;
	public static readonly PROPERTIES = 176;
	public static readonly PURGE = 177;
	public static readonly QUERY = 178;
	public static readonly RANGE = 179;
	public static readonly RECORDREADER = 180;
	public static readonly RECORDWRITER = 181;
	public static readonly RECOVER = 182;
	public static readonly REDUCE = 183;
	public static readonly REFERENCES = 184;
	public static readonly REFRESH = 185;
	public static readonly RENAME = 186;
	public static readonly REPAIR = 187;
	public static readonly REPLACE = 188;
	public static readonly RESET = 189;
	public static readonly RESTRICT = 190;
	public static readonly REVOKE = 191;
	public static readonly RIGHT = 192;
	public static readonly RLIKE = 193;
	public static readonly ROLE = 194;
	public static readonly ROLES = 195;
	public static readonly ROLLBACK = 196;
	public static readonly ROLLUP = 197;
	public static readonly ROW = 198;
	public static readonly ROWS = 199;
	public static readonly SCHEMA = 200;
	public static readonly SELECT = 201;
	public static readonly SEMI = 202;
	public static readonly SEPARATED = 203;
	public static readonly SERDE = 204;
	public static readonly SERDEPROPERTIES = 205;
	public static readonly SESSION_USER = 206;
	public static readonly SET = 207;
	public static readonly SETMINUS = 208;
	public static readonly SETS = 209;
	public static readonly SHOW = 210;
	public static readonly SKEWED = 211;
	public static readonly SOME = 212;
	public static readonly SORT = 213;
	public static readonly SORTED = 214;
	public static readonly START = 215;
	public static readonly STATISTICS = 216;
	public static readonly STORED = 217;
	public static readonly STRATIFY = 218;
	public static readonly STRUCT = 219;
	public static readonly SUBSTR = 220;
	public static readonly SUBSTRING = 221;
	public static readonly TABLE = 222;
	public static readonly TABLES = 223;
	public static readonly TABLESAMPLE = 224;
	public static readonly TBLPROPERTIES = 225;
	public static readonly TEMPORARY = 226;
	public static readonly TERMINATED = 227;
	public static readonly THEN = 228;
	public static readonly TIME = 229;
	public static readonly TO = 230;
	public static readonly TOUCH = 231;
	public static readonly TRAILING = 232;
	public static readonly TRANSACTION = 233;
	public static readonly TRANSACTIONS = 234;
	public static readonly TRANSFORM = 235;
	public static readonly TRIM = 236;
	public static readonly TRUE = 237;
	public static readonly TRUNCATE = 238;
	public static readonly TYPE = 239;
	public static readonly UNARCHIVE = 240;
	public static readonly UNBOUNDED = 241;
	public static readonly UNCACHE = 242;
	public static readonly UNION = 243;
	public static readonly UNIQUE = 244;
	public static readonly UNKNOWN = 245;
	public static readonly UNLOCK = 246;
	public static readonly UNSET = 247;
	public static readonly UPDATE = 248;
	public static readonly USE = 249;
	public static readonly USER = 250;
	public static readonly USING = 251;
	public static readonly VALUES = 252;
	public static readonly VIEW = 253;
	public static readonly VIEWS = 254;
	public static readonly WHEN = 255;
	public static readonly WHERE = 256;
	public static readonly WINDOW = 257;
	public static readonly WITH = 258;
	public static readonly ZONE = 259;
	public static readonly EQ = 260;
	public static readonly NSEQ = 261;
	public static readonly NEQ = 262;
	public static readonly NEQJ = 263;
	public static readonly LT = 264;
	public static readonly LTE = 265;
	public static readonly GT = 266;
	public static readonly GTE = 267;
	public static readonly PLUS = 268;
	public static readonly MINUS = 269;
	public static readonly ASTERISK = 270;
	public static readonly SLASH = 271;
	public static readonly PERCENT = 272;
	public static readonly TILDE = 273;
	public static readonly AMPERSAND = 274;
	public static readonly PIPE = 275;
	public static readonly CONCAT_PIPE = 276;
	public static readonly HAT = 277;
	public static readonly SEMICOLON = 278;
	public static readonly STRING = 279;
	public static readonly BIGINT_LITERAL = 280;
	public static readonly SMALLINT_LITERAL = 281;
	public static readonly TINYINT_LITERAL = 282;
	public static readonly INTEGER_VALUE = 283;
	public static readonly EXPONENT_VALUE = 284;
	public static readonly DECIMAL_VALUE = 285;
	public static readonly FLOAT_LITERAL = 286;
	public static readonly DOUBLE_LITERAL = 287;
	public static readonly BIGDECIMAL_LITERAL = 288;
	public static readonly IDENTIFIER = 289;
	public static readonly BACKQUOTED_IDENTIFIER = 290;
	public static readonly CUSTOM_VARS = 291;
	public static readonly SIMPLE_COMMENT = 292;
	public static readonly BRACKETED_COMMENT = 293;
	public static readonly WS = 294;
	public static readonly UNRECOGNIZED = 295;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_singleStatement = 1;
	public static readonly RULE_emptyStatement = 2;
	public static readonly RULE_singleExpression = 3;
	public static readonly RULE_singleTableIdentifier = 4;
	public static readonly RULE_singleMultipartIdentifier = 5;
	public static readonly RULE_singleDataType = 6;
	public static readonly RULE_singleTableSchema = 7;
	public static readonly RULE_statement = 8;
	public static readonly RULE_configKey = 9;
	public static readonly RULE_unsupportedHiveNativeCommands = 10;
	public static readonly RULE_createTableHeader = 11;
	public static readonly RULE_replaceTableHeader = 12;
	public static readonly RULE_bucketSpec = 13;
	public static readonly RULE_skewSpec = 14;
	public static readonly RULE_locationSpec = 15;
	public static readonly RULE_commentSpec = 16;
	public static readonly RULE_query = 17;
	public static readonly RULE_insertInto = 18;
	public static readonly RULE_partitionSpecLocation = 19;
	public static readonly RULE_partitionSpec = 20;
	public static readonly RULE_partitionVal = 21;
	public static readonly RULE_namespace = 22;
	public static readonly RULE_describeFuncName = 23;
	public static readonly RULE_describeColName = 24;
	public static readonly RULE_ctes = 25;
	public static readonly RULE_namedQuery = 26;
	public static readonly RULE_tableProvider = 27;
	public static readonly RULE_createTableClauses = 28;
	public static readonly RULE_tablePropertyList = 29;
	public static readonly RULE_tableProperty = 30;
	public static readonly RULE_tablePropertyKey = 31;
	public static readonly RULE_tablePropertyValue = 32;
	public static readonly RULE_constantList = 33;
	public static readonly RULE_nestedConstantList = 34;
	public static readonly RULE_createFileFormat = 35;
	public static readonly RULE_fileFormat = 36;
	public static readonly RULE_storageHandler = 37;
	public static readonly RULE_resource = 38;
	public static readonly RULE_dmlStatementNoWith = 39;
	public static readonly RULE_queryOrganization = 40;
	public static readonly RULE_multiInsertQueryBody = 41;
	public static readonly RULE_queryTerm = 42;
	public static readonly RULE_queryPrimary = 43;
	public static readonly RULE_sortItem = 44;
	public static readonly RULE_fromStatement = 45;
	public static readonly RULE_fromStatementBody = 46;
	public static readonly RULE_querySpecification = 47;
	public static readonly RULE_transformClause = 48;
	public static readonly RULE_selectClause = 49;
	public static readonly RULE_setClause = 50;
	public static readonly RULE_matchedClause = 51;
	public static readonly RULE_notMatchedClause = 52;
	public static readonly RULE_matchedAction = 53;
	public static readonly RULE_notMatchedAction = 54;
	public static readonly RULE_assignmentList = 55;
	public static readonly RULE_assignment = 56;
	public static readonly RULE_whereClause = 57;
	public static readonly RULE_havingClause = 58;
	public static readonly RULE_hint = 59;
	public static readonly RULE_hintStatement = 60;
	public static readonly RULE_fromClause = 61;
	public static readonly RULE_aggregationClause = 62;
	public static readonly RULE_groupingSet = 63;
	public static readonly RULE_pivotClause = 64;
	public static readonly RULE_pivotColumn = 65;
	public static readonly RULE_pivotValue = 66;
	public static readonly RULE_lateralView = 67;
	public static readonly RULE_setQuantifier = 68;
	public static readonly RULE_relation = 69;
	public static readonly RULE_joinRelation = 70;
	public static readonly RULE_joinType = 71;
	public static readonly RULE_joinCriteria = 72;
	public static readonly RULE_sample = 73;
	public static readonly RULE_sampleMethod = 74;
	public static readonly RULE_identifierList = 75;
	public static readonly RULE_identifierSeq = 76;
	public static readonly RULE_orderedIdentifierList = 77;
	public static readonly RULE_orderedIdentifier = 78;
	public static readonly RULE_identifierCommentList = 79;
	public static readonly RULE_identifierComment = 80;
	public static readonly RULE_relationPrimary = 81;
	public static readonly RULE_inlineTable = 82;
	public static readonly RULE_functionTable = 83;
	public static readonly RULE_tableAlias = 84;
	public static readonly RULE_rowFormat = 85;
	public static readonly RULE_multipartIdentifierList = 86;
	public static readonly RULE_multipartIdentifier = 87;
	public static readonly RULE_tableIdentifier = 88;
	public static readonly RULE_namedExpression = 89;
	public static readonly RULE_namedExpressionSeq = 90;
	public static readonly RULE_transformList = 91;
	public static readonly RULE_transform = 92;
	public static readonly RULE_transformArgument = 93;
	public static readonly RULE_expression = 94;
	public static readonly RULE_booleanExpression = 95;
	public static readonly RULE_predicate = 96;
	public static readonly RULE_valueExpression = 97;
	public static readonly RULE_primaryExpression = 98;
	public static readonly RULE_constant = 99;
	public static readonly RULE_comparisonOperator = 100;
	public static readonly RULE_arithmeticOperator = 101;
	public static readonly RULE_predicateOperator = 102;
	public static readonly RULE_booleanValue = 103;
	public static readonly RULE_interval = 104;
	public static readonly RULE_errorCapturingMultiUnitsInterval = 105;
	public static readonly RULE_multiUnitsInterval = 106;
	public static readonly RULE_errorCapturingUnitToUnitInterval = 107;
	public static readonly RULE_unitToUnitInterval = 108;
	public static readonly RULE_intervalValue = 109;
	public static readonly RULE_colPosition = 110;
	public static readonly RULE_dataType = 111;
	public static readonly RULE_qualifiedColTypeWithPositionList = 112;
	public static readonly RULE_qualifiedColTypeWithPosition = 113;
	public static readonly RULE_colTypeList = 114;
	public static readonly RULE_colType = 115;
	public static readonly RULE_complexColTypeList = 116;
	public static readonly RULE_complexColType = 117;
	public static readonly RULE_whenClause = 118;
	public static readonly RULE_windowClause = 119;
	public static readonly RULE_namedWindow = 120;
	public static readonly RULE_windowSpec = 121;
	public static readonly RULE_windowFrame = 122;
	public static readonly RULE_frameBound = 123;
	public static readonly RULE_qualifiedNameList = 124;
	public static readonly RULE_functionName = 125;
	public static readonly RULE_qualifiedName = 126;
	public static readonly RULE_errorCapturingIdentifier = 127;
	public static readonly RULE_errorCapturingIdentifierExtra = 128;
	public static readonly RULE_identifier = 129;
	public static readonly RULE_strictIdentifier = 130;
	public static readonly RULE_quotedIdentifier = 131;
	public static readonly RULE_number = 132;
	public static readonly RULE_alterColumnAction = 133;
	public static readonly RULE_ansiNonReserved = 134;
	public static readonly RULE_strictNonReserved = 135;
	public static readonly RULE_nonReserved = 136;
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'", "','", 
                                                            "'.'", "'/*+'", 
                                                            "'*/'", "'->'", 
                                                            "'['", "']'", 
                                                            "':'", "'ADD'", 
                                                            "'AFTER'", "'ALL'", 
                                                            "'ALTER'", "'ANALYZE'", 
                                                            "'AND'", "'ANTI'", 
                                                            "'ANY'", "'ARCHIVE'", 
                                                            "'ARRAY'", "'AS'", 
                                                            "'ASC'", "'AT'", 
                                                            "'AUTHORIZATION'", 
                                                            "'BETWEEN'", 
                                                            "'BOTH'", "'BUCKET'", 
                                                            "'BUCKETS'", 
                                                            "'BY'", "'CACHE'", 
                                                            "'CASCADE'", 
                                                            "'CASE'", "'CAST'", 
                                                            "'CHANGE'", 
                                                            "'CHECK'", "'CLEAR'", 
                                                            "'CLUSTER'", 
                                                            "'CLUSTERED'", 
                                                            "'CODEGEN'", 
                                                            "'COLLATE'", 
                                                            "'COLLECTION'", 
                                                            "'COLUMN'", 
                                                            "'COLUMNS'", 
                                                            "'COMMENT'", 
                                                            "'COMMIT'", 
                                                            "'COMPACT'", 
                                                            "'COMPACTIONS'", 
                                                            "'COMPUTE'", 
                                                            "'CONCATENATE'", 
                                                            "'CONSTRAINT'", 
                                                            "'COST'", "'CREATE'", 
                                                            "'CROSS'", "'CUBE'", 
                                                            "'CURRENT'", 
                                                            "'CURRENT_DATE'", 
                                                            "'CURRENT_TIME'", 
                                                            "'CURRENT_TIMESTAMP'", 
                                                            "'CURRENT_USER'", 
                                                            "'DATA'", "'DATABASE'", 
                                                            null, "'DBPROPERTIES'", 
                                                            "'DEFINED'", 
                                                            "'DELETE'", 
                                                            "'DELIMITED'", 
                                                            "'DESC'", "'DESCRIBE'", 
                                                            "'DFS'", "'DIRECTORIES'", 
                                                            "'DIRECTORY'", 
                                                            "'DISTINCT'", 
                                                            "'DISTRIBUTE'", 
                                                            "'DIV'", "'DROP'", 
                                                            "'ELSE'", "'END'", 
                                                            "'ESCAPE'", 
                                                            "'ESCAPED'", 
                                                            "'EXCEPT'", 
                                                            "'EXCHANGE'", 
                                                            "'EXISTS'", 
                                                            "'EXPLAIN'", 
                                                            "'EXPORT'", 
                                                            "'EXTENDED'", 
                                                            "'EXTERNAL'", 
                                                            "'EXTRACT'", 
                                                            "'FALSE'", "'FETCH'", 
                                                            "'FIELDS'", 
                                                            "'FILTER'", 
                                                            "'FILEFORMAT'", 
                                                            "'FIRST'", "'FOLLOWING'", 
                                                            "'FOR'", "'FOREIGN'", 
                                                            "'FORMAT'", 
                                                            "'FORMATTED'", 
                                                            "'FROM'", "'FULL'", 
                                                            "'FUNCTION'", 
                                                            "'FUNCTIONS'", 
                                                            "'GLOBAL'", 
                                                            "'GRANT'", "'GROUP'", 
                                                            "'GROUPING'", 
                                                            "'HAVING'", 
                                                            "'IF'", "'IGNORE'", 
                                                            "'IMPORT'", 
                                                            "'IN'", "'INDEX'", 
                                                            "'INDEXES'", 
                                                            "'INNER'", "'INPATH'", 
                                                            "'INPUTFORMAT'", 
                                                            "'INSERT'", 
                                                            "'INTERSECT'", 
                                                            "'INTERVAL'", 
                                                            "'INTO'", "'IS'", 
                                                            "'ITEMS'", "'JOIN'", 
                                                            "'KEYS'", "'LAST'", 
                                                            "'LATERAL'", 
                                                            "'LAZY'", "'LEADING'", 
                                                            "'LEFT'", "'LIKE'", 
                                                            "'LIMIT'", "'LINES'", 
                                                            "'LIST'", "'LOAD'", 
                                                            "'LOCAL'", "'LOCATION'", 
                                                            "'LOCK'", "'LOCKS'", 
                                                            "'LOGICAL'", 
                                                            "'MACRO'", "'MAP'", 
                                                            "'MATCHED'", 
                                                            "'MERGE'", "'MSCK'", 
                                                            "'NAMESPACE'", 
                                                            "'NAMESPACES'", 
                                                            "'NATURAL'", 
                                                            "'NO'", null, 
                                                            "'NULL'", "'NULLS'", 
                                                            "'OF'", "'ON'", 
                                                            "'ONLY'", "'OPTION'", 
                                                            "'OPTIONS'", 
                                                            "'OR'", "'ORDER'", 
                                                            "'OUT'", "'OUTER'", 
                                                            "'OUTPUTFORMAT'", 
                                                            "'OVER'", "'OVERLAPS'", 
                                                            "'OVERLAY'", 
                                                            "'OVERWRITE'", 
                                                            "'PARTITION'", 
                                                            "'PARTITIONED'", 
                                                            "'PARTITIONS'", 
                                                            "'PERCENT'", 
                                                            "'PIVOT'", "'PLACING'", 
                                                            "'POSITION'", 
                                                            "'PRECEDING'", 
                                                            "'PRIMARY'", 
                                                            "'PRINCIPALS'", 
                                                            "'PROPERTIES'", 
                                                            "'PURGE'", "'QUERY'", 
                                                            "'RANGE'", "'RECORDREADER'", 
                                                            "'RECORDWRITER'", 
                                                            "'RECOVER'", 
                                                            "'REDUCE'", 
                                                            "'REFERENCES'", 
                                                            "'REFRESH'", 
                                                            "'RENAME'", 
                                                            "'REPAIR'", 
                                                            "'REPLACE'", 
                                                            "'RESET'", "'RESTRICT'", 
                                                            "'REVOKE'", 
                                                            "'RIGHT'", null, 
                                                            "'ROLE'", "'ROLES'", 
                                                            "'ROLLBACK'", 
                                                            "'ROLLUP'", 
                                                            "'ROW'", "'ROWS'", 
                                                            "'SCHEMA'", 
                                                            "'SELECT'", 
                                                            "'SEMI'", "'SEPARATED'", 
                                                            "'SERDE'", "'SERDEPROPERTIES'", 
                                                            "'SESSION_USER'", 
                                                            "'SET'", "'MINUS'", 
                                                            "'SETS'", "'SHOW'", 
                                                            "'SKEWED'", 
                                                            "'SOME'", "'SORT'", 
                                                            "'SORTED'", 
                                                            "'START'", "'STATISTICS'", 
                                                            "'STORED'", 
                                                            "'STRATIFY'", 
                                                            "'STRUCT'", 
                                                            "'SUBSTR'", 
                                                            "'SUBSTRING'", 
                                                            "'TABLE'", "'TABLES'", 
                                                            "'TABLESAMPLE'", 
                                                            "'TBLPROPERTIES'", 
                                                            null, "'TERMINATED'", 
                                                            "'THEN'", "'TIME'", 
                                                            "'TO'", "'TOUCH'", 
                                                            "'TRAILING'", 
                                                            "'TRANSACTION'", 
                                                            "'TRANSACTIONS'", 
                                                            "'TRANSFORM'", 
                                                            "'TRIM'", "'TRUE'", 
                                                            "'TRUNCATE'", 
                                                            "'TYPE'", "'UNARCHIVE'", 
                                                            "'UNBOUNDED'", 
                                                            "'UNCACHE'", 
                                                            "'UNION'", "'UNIQUE'", 
                                                            "'UNKNOWN'", 
                                                            "'UNLOCK'", 
                                                            "'UNSET'", "'UPDATE'", 
                                                            "'USE'", "'USER'", 
                                                            "'USING'", "'VALUES'", 
                                                            "'VIEW'", "'VIEWS'", 
                                                            "'WHEN'", "'WHERE'", 
                                                            "'WINDOW'", 
                                                            "'WITH'", "'ZONE'", 
                                                            null, "'<=>'", 
                                                            "'<>'", "'!='", 
                                                            "'<'", null, 
                                                            "'>'", null, 
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'", 
                                                            "'%'", "'~'", 
                                                            "'&'", "'|'", 
                                                            "'||'", "'^'", 
                                                            "';'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "ADD", 
                                                             "AFTER", "ALL", 
                                                             "ALTER", "ANALYZE", 
                                                             "AND", "ANTI", 
                                                             "ANY", "ARCHIVE", 
                                                             "ARRAY", "AS", 
                                                             "ASC", "AT", 
                                                             "AUTHORIZATION", 
                                                             "BETWEEN", 
                                                             "BOTH", "BUCKET", 
                                                             "BUCKETS", 
                                                             "BY", "CACHE", 
                                                             "CASCADE", 
                                                             "CASE", "CAST", 
                                                             "CHANGE", "CHECK", 
                                                             "CLEAR", "CLUSTER", 
                                                             "CLUSTERED", 
                                                             "CODEGEN", 
                                                             "COLLATE", 
                                                             "COLLECTION", 
                                                             "COLUMN", "COLUMNS", 
                                                             "COMMENT", 
                                                             "COMMIT", "COMPACT", 
                                                             "COMPACTIONS", 
                                                             "COMPUTE", 
                                                             "CONCATENATE", 
                                                             "CONSTRAINT", 
                                                             "COST", "CREATE", 
                                                             "CROSS", "CUBE", 
                                                             "CURRENT", 
                                                             "CURRENT_DATE", 
                                                             "CURRENT_TIME", 
                                                             "CURRENT_TIMESTAMP", 
                                                             "CURRENT_USER", 
                                                             "DATA", "DATABASE", 
                                                             "DATABASES", 
                                                             "DBPROPERTIES", 
                                                             "DEFINED", 
                                                             "DELETE", "DELIMITED", 
                                                             "DESC", "DESCRIBE", 
                                                             "DFS", "DIRECTORIES", 
                                                             "DIRECTORY", 
                                                             "DISTINCT", 
                                                             "DISTRIBUTE", 
                                                             "DIV", "DROP", 
                                                             "ELSE", "END", 
                                                             "ESCAPE", "ESCAPED", 
                                                             "EXCEPT", "EXCHANGE", 
                                                             "EXISTS", "EXPLAIN", 
                                                             "EXPORT", "EXTENDED", 
                                                             "EXTERNAL", 
                                                             "EXTRACT", 
                                                             "FALSE", "FETCH", 
                                                             "FIELDS", "FILTER", 
                                                             "FILEFORMAT", 
                                                             "FIRST", "FOLLOWING", 
                                                             "FOR", "FOREIGN", 
                                                             "FORMAT", "FORMATTED", 
                                                             "FROM", "FULL", 
                                                             "FUNCTION", 
                                                             "FUNCTIONS", 
                                                             "GLOBAL", "GRANT", 
                                                             "GROUP", "GROUPING", 
                                                             "HAVING", "IF", 
                                                             "IGNORE", "IMPORT", 
                                                             "IN", "INDEX", 
                                                             "INDEXES", 
                                                             "INNER", "INPATH", 
                                                             "INPUTFORMAT", 
                                                             "INSERT", "INTERSECT", 
                                                             "INTERVAL", 
                                                             "INTO", "IS", 
                                                             "ITEMS", "JOIN", 
                                                             "KEYS", "LAST", 
                                                             "LATERAL", 
                                                             "LAZY", "LEADING", 
                                                             "LEFT", "LIKE", 
                                                             "LIMIT", "LINES", 
                                                             "LIST", "LOAD", 
                                                             "LOCAL", "LOCATION", 
                                                             "LOCK", "LOCKS", 
                                                             "LOGICAL", 
                                                             "MACRO", "MAP", 
                                                             "MATCHED", 
                                                             "MERGE", "MSCK", 
                                                             "NAMESPACE", 
                                                             "NAMESPACES", 
                                                             "NATURAL", 
                                                             "NO", "NOT", 
                                                             "NULL", "NULLS", 
                                                             "OF", "ON", 
                                                             "ONLY", "OPTION", 
                                                             "OPTIONS", 
                                                             "OR", "ORDER", 
                                                             "OUT", "OUTER", 
                                                             "OUTPUTFORMAT", 
                                                             "OVER", "OVERLAPS", 
                                                             "OVERLAY", 
                                                             "OVERWRITE", 
                                                             "PARTITION", 
                                                             "PARTITIONED", 
                                                             "PARTITIONS", 
                                                             "PERCENTLIT", 
                                                             "PIVOT", "PLACING", 
                                                             "POSITION", 
                                                             "PRECEDING", 
                                                             "PRIMARY", 
                                                             "PRINCIPALS", 
                                                             "PROPERTIES", 
                                                             "PURGE", "QUERY", 
                                                             "RANGE", "RECORDREADER", 
                                                             "RECORDWRITER", 
                                                             "RECOVER", 
                                                             "REDUCE", "REFERENCES", 
                                                             "REFRESH", 
                                                             "RENAME", "REPAIR", 
                                                             "REPLACE", 
                                                             "RESET", "RESTRICT", 
                                                             "REVOKE", "RIGHT", 
                                                             "RLIKE", "ROLE", 
                                                             "ROLES", "ROLLBACK", 
                                                             "ROLLUP", "ROW", 
                                                             "ROWS", "SCHEMA", 
                                                             "SELECT", "SEMI", 
                                                             "SEPARATED", 
                                                             "SERDE", "SERDEPROPERTIES", 
                                                             "SESSION_USER", 
                                                             "SET", "SETMINUS", 
                                                             "SETS", "SHOW", 
                                                             "SKEWED", "SOME", 
                                                             "SORT", "SORTED", 
                                                             "START", "STATISTICS", 
                                                             "STORED", "STRATIFY", 
                                                             "STRUCT", "SUBSTR", 
                                                             "SUBSTRING", 
                                                             "TABLE", "TABLES", 
                                                             "TABLESAMPLE", 
                                                             "TBLPROPERTIES", 
                                                             "TEMPORARY", 
                                                             "TERMINATED", 
                                                             "THEN", "TIME", 
                                                             "TO", "TOUCH", 
                                                             "TRAILING", 
                                                             "TRANSACTION", 
                                                             "TRANSACTIONS", 
                                                             "TRANSFORM", 
                                                             "TRIM", "TRUE", 
                                                             "TRUNCATE", 
                                                             "TYPE", "UNARCHIVE", 
                                                             "UNBOUNDED", 
                                                             "UNCACHE", 
                                                             "UNION", "UNIQUE", 
                                                             "UNKNOWN", 
                                                             "UNLOCK", "UNSET", 
                                                             "UPDATE", "USE", 
                                                             "USER", "USING", 
                                                             "VALUES", "VIEW", 
                                                             "VIEWS", "WHEN", 
                                                             "WHERE", "WINDOW", 
                                                             "WITH", "ZONE", 
                                                             "EQ", "NSEQ", 
                                                             "NEQ", "NEQJ", 
                                                             "LT", "LTE", 
                                                             "GT", "GTE", 
                                                             "PLUS", "MINUS", 
                                                             "ASTERISK", 
                                                             "SLASH", "PERCENT", 
                                                             "TILDE", "AMPERSAND", 
                                                             "PIPE", "CONCAT_PIPE", 
                                                             "HAT", "SEMICOLON", 
                                                             "STRING", "BIGINT_LITERAL", 
                                                             "SMALLINT_LITERAL", 
                                                             "TINYINT_LITERAL", 
                                                             "INTEGER_VALUE", 
                                                             "EXPONENT_VALUE", 
                                                             "DECIMAL_VALUE", 
                                                             "FLOAT_LITERAL", 
                                                             "DOUBLE_LITERAL", 
                                                             "BIGDECIMAL_LITERAL", 
                                                             "IDENTIFIER", 
                                                             "BACKQUOTED_IDENTIFIER", 
                                                             "CUSTOM_VARS", 
                                                             "SIMPLE_COMMENT", 
                                                             "BRACKETED_COMMENT", 
                                                             "WS", "UNRECOGNIZED" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "singleStatement", "emptyStatement", "singleExpression", "singleTableIdentifier", 
		"singleMultipartIdentifier", "singleDataType", "singleTableSchema", "statement", 
		"configKey", "unsupportedHiveNativeCommands", "createTableHeader", "replaceTableHeader", 
		"bucketSpec", "skewSpec", "locationSpec", "commentSpec", "query", "insertInto", 
		"partitionSpecLocation", "partitionSpec", "partitionVal", "namespace", 
		"describeFuncName", "describeColName", "ctes", "namedQuery", "tableProvider", 
		"createTableClauses", "tablePropertyList", "tableProperty", "tablePropertyKey", 
		"tablePropertyValue", "constantList", "nestedConstantList", "createFileFormat", 
		"fileFormat", "storageHandler", "resource", "dmlStatementNoWith", "queryOrganization", 
		"multiInsertQueryBody", "queryTerm", "queryPrimary", "sortItem", "fromStatement", 
		"fromStatementBody", "querySpecification", "transformClause", "selectClause", 
		"setClause", "matchedClause", "notMatchedClause", "matchedAction", "notMatchedAction", 
		"assignmentList", "assignment", "whereClause", "havingClause", "hint", 
		"hintStatement", "fromClause", "aggregationClause", "groupingSet", "pivotClause", 
		"pivotColumn", "pivotValue", "lateralView", "setQuantifier", "relation", 
		"joinRelation", "joinType", "joinCriteria", "sample", "sampleMethod", 
		"identifierList", "identifierSeq", "orderedIdentifierList", "orderedIdentifier", 
		"identifierCommentList", "identifierComment", "relationPrimary", "inlineTable", 
		"functionTable", "tableAlias", "rowFormat", "multipartIdentifierList", 
		"multipartIdentifier", "tableIdentifier", "namedExpression", "namedExpressionSeq", 
		"transformList", "transform", "transformArgument", "expression", "booleanExpression", 
		"predicate", "valueExpression", "primaryExpression", "constant", "comparisonOperator", 
		"arithmeticOperator", "predicateOperator", "booleanValue", "interval", 
		"errorCapturingMultiUnitsInterval", "multiUnitsInterval", "errorCapturingUnitToUnitInterval", 
		"unitToUnitInterval", "intervalValue", "colPosition", "dataType", "qualifiedColTypeWithPositionList", 
		"qualifiedColTypeWithPosition", "colTypeList", "colType", "complexColTypeList", 
		"complexColType", "whenClause", "windowClause", "namedWindow", "windowSpec", 
		"windowFrame", "frameBound", "qualifiedNameList", "functionName", "qualifiedName", 
		"errorCapturingIdentifier", "errorCapturingIdentifierExtra", "identifier", 
		"strictIdentifier", "quotedIdentifier", "number", "alterColumnAction", 
		"ansiNonReserved", "strictNonReserved", "nonReserved",
	];
	public get grammarFileName(): string { return "SparkSql.g4"; }
	public get literalNames(): (string | null)[] { return SparkSqlParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return SparkSqlParser.symbolicNames; }
	public get ruleNames(): string[] { return SparkSqlParser.ruleNames; }
	public get serializedATN(): number[] { return SparkSqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}


	    /**
	    * When false, INTERSECT is given the greater precedence over the other set
	    * operations (UNION, EXCEPT and MINUS) as per the SQL standard.
	    */
	    //  public boolean legacy_setops_precedence_enbled = false;
	    /**
	    * When false, a literal with an exponent would be converted into
	    * double type rather than decimal type.
	    */
	    //  public boolean legacy_exponent_literal_as_decimal_enabled = false;
	    global.legacy_exponent_literal_as_decimal_enabled = false;
	    /**
	    * When true, the behavior of keywords follows ANSI SQL standard.
	    */
	    //  public boolean SQL_standard_keyword_behavior = false;

	    global.legacy_setops_precedence_enbled = false;
	    global.legacy_exponent_literal_as_decimal_enabled = false;
	    global.SQL_standard_keyword_behavior = false;

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, SparkSqlParser._ATN, SparkSqlParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, SparkSqlParser.RULE_program);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 274;
			this.singleStatement();
			this.state = 275;
			this.match(SparkSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 2, SparkSqlParser.RULE_singleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1073793026) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 2684420865) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 2147582083) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 1610620993) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & 209) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 151265637) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2290090113) !== 0) || ((((_la - 248)) & ~0x1F) === 0 && ((1 << (_la - 248)) & 1073742867) !== 0)) {
				{
				this.state = 282;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 1:
				case 11:
				case 14:
				case 15:
				case 30:
				case 36:
				case 44:
				case 45:
				case 52:
				case 65:
				case 67:
				case 68:
				case 69:
				case 75:
				case 83:
				case 84:
				case 99:
				case 104:
				case 110:
				case 117:
				case 133:
				case 134:
				case 137:
				case 141:
				case 143:
				case 144:
				case 183:
				case 185:
				case 188:
				case 189:
				case 191:
				case 196:
				case 201:
				case 207:
				case 210:
				case 215:
				case 222:
				case 238:
				case 242:
				case 246:
				case 248:
				case 249:
				case 252:
				case 258:
					{
					this.state = 277;
					this.statement();
					this.state = 279;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 278;
						this.match(SparkSqlParser.SEMICOLON);
						}
						break;
					}
					}
					break;
				case 278:
					{
					this.state = 281;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 286;
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
	public emptyStatement(): EmptyStatementContext {
		let localctx: EmptyStatementContext = new EmptyStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, SparkSqlParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 287;
			this.match(SparkSqlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleExpression(): SingleExpressionContext {
		let localctx: SingleExpressionContext = new SingleExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, SparkSqlParser.RULE_singleExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 289;
			this.namedExpression();
			this.state = 290;
			this.match(SparkSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleTableIdentifier(): SingleTableIdentifierContext {
		let localctx: SingleTableIdentifierContext = new SingleTableIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, SparkSqlParser.RULE_singleTableIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 292;
			this.tableIdentifier();
			this.state = 293;
			this.match(SparkSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleMultipartIdentifier(): SingleMultipartIdentifierContext {
		let localctx: SingleMultipartIdentifierContext = new SingleMultipartIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, SparkSqlParser.RULE_singleMultipartIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 295;
			this.multipartIdentifier();
			this.state = 296;
			this.match(SparkSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleDataType(): SingleDataTypeContext {
		let localctx: SingleDataTypeContext = new SingleDataTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, SparkSqlParser.RULE_singleDataType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 298;
			this.dataType();
			this.state = 299;
			this.match(SparkSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleTableSchema(): SingleTableSchemaContext {
		let localctx: SingleTableSchemaContext = new SingleTableSchemaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, SparkSqlParser.RULE_singleTableSchema);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 301;
			this.colTypeList();
			this.state = 302;
			this.match(SparkSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 16, SparkSqlParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1048;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				localctx = new StatementDefaultContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 304;
				this.query();
				}
				break;
			case 2:
				localctx = new DmlStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===258) {
					{
					this.state = 305;
					this.ctes();
					}
				}

				this.state = 308;
				this.dmlStatementNoWith();
				}
				break;
			case 3:
				localctx = new UseContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 309;
				this.match(SparkSqlParser.USE);
				this.state = 311;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 310;
					this.match(SparkSqlParser.NAMESPACE);
					}
					break;
				}
				this.state = 313;
				this.multipartIdentifier();
				}
				break;
			case 4:
				localctx = new CreateNamespaceContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 314;
				this.match(SparkSqlParser.CREATE);
				this.state = 315;
				this.namespace();
				this.state = 319;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 316;
					this.match(SparkSqlParser.IF);
					this.state = 317;
					this.match(SparkSqlParser.NOT);
					this.state = 318;
					this.match(SparkSqlParser.EXISTS);
					}
					break;
				}
				this.state = 321;
				this.multipartIdentifier();
				this.state = 329;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 327;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 44:
							{
							this.state = 322;
							this.commentSpec();
							}
							break;
						case 136:
							{
							this.state = 323;
							this.locationSpec();
							}
							break;
						case 258:
							{
							{
							this.state = 324;
							this.match(SparkSqlParser.WITH);
							this.state = 325;
							_la = this._input.LA(1);
							if(!(_la===63 || _la===176)) {
							this._errHandler.recoverInline(this);
							}
							else {
								this._errHandler.reportMatch(this);
							    this.consume();
							}
							this.state = 326;
							this.tablePropertyList();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 331;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
				}
				}
				break;
			case 5:
				localctx = new SetNamespacePropertiesContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 332;
				this.match(SparkSqlParser.ALTER);
				this.state = 333;
				this.namespace();
				this.state = 334;
				this.multipartIdentifier();
				this.state = 335;
				this.match(SparkSqlParser.SET);
				this.state = 336;
				_la = this._input.LA(1);
				if(!(_la===63 || _la===176)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 337;
				this.tablePropertyList();
				}
				break;
			case 6:
				localctx = new SetNamespaceLocationContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 339;
				this.match(SparkSqlParser.ALTER);
				this.state = 340;
				this.namespace();
				this.state = 341;
				this.multipartIdentifier();
				this.state = 342;
				this.match(SparkSqlParser.SET);
				this.state = 343;
				this.locationSpec();
				}
				break;
			case 7:
				localctx = new DropNamespaceContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 345;
				this.match(SparkSqlParser.DROP);
				this.state = 346;
				this.namespace();
				this.state = 349;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 347;
					this.match(SparkSqlParser.IF);
					this.state = 348;
					this.match(SparkSqlParser.EXISTS);
					}
					break;
				}
				this.state = 351;
				this.multipartIdentifier();
				this.state = 353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===31 || _la===190) {
					{
					this.state = 352;
					_la = this._input.LA(1);
					if(!(_la===31 || _la===190)) {
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
			case 8:
				localctx = new ShowNamespacesContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 355;
				this.match(SparkSqlParser.SHOW);
				this.state = 356;
				_la = this._input.LA(1);
				if(!(_la===62 || _la===146)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 359;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 357;
					_la = this._input.LA(1);
					if(!(_la===99 || _la===111)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 358;
					this.multipartIdentifier();
					}
					break;
				}
				this.state = 365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===130 || _la===279) {
					{
					this.state = 362;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===130) {
						{
						this.state = 361;
						this.match(SparkSqlParser.LIKE);
						}
					}

					this.state = 364;
					(localctx as ShowNamespacesContext)._pattern = this.match(SparkSqlParser.STRING);
					}
				}

				}
				break;
			case 9:
				localctx = new CreateTableContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 367;
				this.createTableHeader();
				this.state = 372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 368;
					this.match(SparkSqlParser.T__0);
					this.state = 369;
					this.colTypeList();
					this.state = 370;
					this.match(SparkSqlParser.T__1);
					}
				}

				this.state = 374;
				this.tableProvider();
				this.state = 375;
				this.createTableClauses();
				this.state = 380;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 377;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===21) {
						{
						this.state = 376;
						this.match(SparkSqlParser.AS);
						}
					}

					this.state = 379;
					this.query();
					}
					break;
				}
				}
				break;
			case 10:
				localctx = new CreateHiveTableContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 382;
				this.createTableHeader();
				this.state = 387;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 383;
					this.match(SparkSqlParser.T__0);
					this.state = 384;
					(localctx as CreateHiveTableContext)._columns = this.colTypeList();
					this.state = 385;
					this.match(SparkSqlParser.T__1);
					}
					break;
				}
				this.state = 410;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 408;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 44:
							{
							this.state = 389;
							this.commentSpec();
							}
							break;
						case 167:
							{
							this.state = 399;
							this._errHandler.sync(this);
							switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
							case 1:
								{
								this.state = 390;
								this.match(SparkSqlParser.PARTITIONED);
								this.state = 391;
								this.match(SparkSqlParser.BY);
								this.state = 392;
								this.match(SparkSqlParser.T__0);
								this.state = 393;
								(localctx as CreateHiveTableContext)._partitionColumns = this.colTypeList();
								this.state = 394;
								this.match(SparkSqlParser.T__1);
								}
								break;
							case 2:
								{
								this.state = 396;
								this.match(SparkSqlParser.PARTITIONED);
								this.state = 397;
								this.match(SparkSqlParser.BY);
								this.state = 398;
								(localctx as CreateHiveTableContext)._partitionColumnNames = this.identifierList();
								}
								break;
							}
							}
							break;
						case 38:
							{
							this.state = 401;
							this.bucketSpec();
							}
							break;
						case 211:
							{
							this.state = 402;
							this.skewSpec();
							}
							break;
						case 198:
							{
							this.state = 403;
							this.rowFormat();
							}
							break;
						case 217:
							{
							this.state = 404;
							this.createFileFormat();
							}
							break;
						case 136:
							{
							this.state = 405;
							this.locationSpec();
							}
							break;
						case 225:
							{
							{
							this.state = 406;
							this.match(SparkSqlParser.TBLPROPERTIES);
							this.state = 407;
							(localctx as CreateHiveTableContext)._tableProps = this.tablePropertyList();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 412;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
				}
				this.state = 417;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 414;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===21) {
						{
						this.state = 413;
						this.match(SparkSqlParser.AS);
						}
					}

					this.state = 416;
					this.query();
					}
					break;
				}
				}
				break;
			case 11:
				localctx = new CreateTableLikeContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 419;
				this.match(SparkSqlParser.CREATE);
				this.state = 420;
				this.match(SparkSqlParser.TABLE);
				this.state = 424;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 421;
					this.match(SparkSqlParser.IF);
					this.state = 422;
					this.match(SparkSqlParser.NOT);
					this.state = 423;
					this.match(SparkSqlParser.EXISTS);
					}
					break;
				}
				this.state = 426;
				(localctx as CreateTableLikeContext)._target = this.tableIdentifier();
				this.state = 427;
				this.match(SparkSqlParser.LIKE);
				this.state = 428;
				(localctx as CreateTableLikeContext)._source = this.tableIdentifier();
				this.state = 437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===136 || ((((_la - 198)) & ~0x1F) === 0 && ((1 << (_la - 198)) & 134742017) !== 0) || _la===251) {
					{
					this.state = 435;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 251:
						{
						this.state = 429;
						this.tableProvider();
						}
						break;
					case 198:
						{
						this.state = 430;
						this.rowFormat();
						}
						break;
					case 217:
						{
						this.state = 431;
						this.createFileFormat();
						}
						break;
					case 136:
						{
						this.state = 432;
						this.locationSpec();
						}
						break;
					case 225:
						{
						{
						this.state = 433;
						this.match(SparkSqlParser.TBLPROPERTIES);
						this.state = 434;
						(localctx as CreateTableLikeContext)._tableProps = this.tablePropertyList();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 439;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 12:
				localctx = new ReplaceTableContext(this, localctx);
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 440;
				this.replaceTableHeader();
				this.state = 445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 441;
					this.match(SparkSqlParser.T__0);
					this.state = 442;
					this.colTypeList();
					this.state = 443;
					this.match(SparkSqlParser.T__1);
					}
				}

				this.state = 447;
				this.tableProvider();
				this.state = 448;
				this.createTableClauses();
				this.state = 453;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 450;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===21) {
						{
						this.state = 449;
						this.match(SparkSqlParser.AS);
						}
					}

					this.state = 452;
					this.query();
					}
					break;
				}
				}
				break;
			case 13:
				localctx = new AnalyzeContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 455;
				this.match(SparkSqlParser.ANALYZE);
				this.state = 456;
				this.match(SparkSqlParser.TABLE);
				this.state = 457;
				this.multipartIdentifier();
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===166) {
					{
					this.state = 458;
					this.partitionSpec();
					}
				}

				this.state = 461;
				this.match(SparkSqlParser.COMPUTE);
				this.state = 462;
				this.match(SparkSqlParser.STATISTICS);
				this.state = 470;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 463;
					this.identifier();
					}
					break;
				case 2:
					{
					this.state = 464;
					this.match(SparkSqlParser.FOR);
					this.state = 465;
					this.match(SparkSqlParser.COLUMNS);
					this.state = 466;
					this.identifierSeq();
					}
					break;
				case 3:
					{
					this.state = 467;
					this.match(SparkSqlParser.FOR);
					this.state = 468;
					this.match(SparkSqlParser.ALL);
					this.state = 469;
					this.match(SparkSqlParser.COLUMNS);
					}
					break;
				}
				}
				break;
			case 14:
				localctx = new AddTableColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 472;
				this.match(SparkSqlParser.ALTER);
				this.state = 473;
				this.match(SparkSqlParser.TABLE);
				this.state = 474;
				this.multipartIdentifier();
				this.state = 475;
				this.match(SparkSqlParser.ADD);
				this.state = 476;
				_la = this._input.LA(1);
				if(!(_la===42 || _la===43)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 477;
				(localctx as AddTableColumnsContext)._columns = this.qualifiedColTypeWithPositionList();
				}
				break;
			case 15:
				localctx = new AddTableColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 479;
				this.match(SparkSqlParser.ALTER);
				this.state = 480;
				this.match(SparkSqlParser.TABLE);
				this.state = 481;
				this.multipartIdentifier();
				this.state = 482;
				this.match(SparkSqlParser.ADD);
				this.state = 483;
				_la = this._input.LA(1);
				if(!(_la===42 || _la===43)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 484;
				this.match(SparkSqlParser.T__0);
				this.state = 485;
				(localctx as AddTableColumnsContext)._columns = this.qualifiedColTypeWithPositionList();
				this.state = 486;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 16:
				localctx = new RenameTableColumnContext(this, localctx);
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 488;
				this.match(SparkSqlParser.ALTER);
				this.state = 489;
				this.match(SparkSqlParser.TABLE);
				this.state = 490;
				(localctx as RenameTableColumnContext)._table = this.multipartIdentifier();
				this.state = 491;
				this.match(SparkSqlParser.RENAME);
				this.state = 492;
				this.match(SparkSqlParser.COLUMN);
				this.state = 493;
				(localctx as RenameTableColumnContext)._from_ = this.multipartIdentifier();
				this.state = 494;
				this.match(SparkSqlParser.TO);
				this.state = 495;
				(localctx as RenameTableColumnContext)._to = this.errorCapturingIdentifier();
				}
				break;
			case 17:
				localctx = new DropTableColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 497;
				this.match(SparkSqlParser.ALTER);
				this.state = 498;
				this.match(SparkSqlParser.TABLE);
				this.state = 499;
				this.multipartIdentifier();
				this.state = 500;
				this.match(SparkSqlParser.DROP);
				this.state = 501;
				_la = this._input.LA(1);
				if(!(_la===42 || _la===43)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 502;
				this.match(SparkSqlParser.T__0);
				this.state = 503;
				(localctx as DropTableColumnsContext)._columns = this.multipartIdentifierList();
				this.state = 504;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 18:
				localctx = new DropTableColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 506;
				this.match(SparkSqlParser.ALTER);
				this.state = 507;
				this.match(SparkSqlParser.TABLE);
				this.state = 508;
				this.multipartIdentifier();
				this.state = 509;
				this.match(SparkSqlParser.DROP);
				this.state = 510;
				_la = this._input.LA(1);
				if(!(_la===42 || _la===43)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 511;
				(localctx as DropTableColumnsContext)._columns = this.multipartIdentifierList();
				}
				break;
			case 19:
				localctx = new RenameTableContext(this, localctx);
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 513;
				this.match(SparkSqlParser.ALTER);
				this.state = 514;
				_la = this._input.LA(1);
				if(!(_la===222 || _la===253)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 515;
				(localctx as RenameTableContext)._from_ = this.multipartIdentifier();
				this.state = 516;
				this.match(SparkSqlParser.RENAME);
				this.state = 517;
				this.match(SparkSqlParser.TO);
				this.state = 518;
				(localctx as RenameTableContext)._to = this.multipartIdentifier();
				}
				break;
			case 20:
				localctx = new SetTablePropertiesContext(this, localctx);
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 520;
				this.match(SparkSqlParser.ALTER);
				this.state = 521;
				_la = this._input.LA(1);
				if(!(_la===222 || _la===253)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 522;
				this.multipartIdentifier();
				this.state = 523;
				this.match(SparkSqlParser.SET);
				this.state = 524;
				this.match(SparkSqlParser.TBLPROPERTIES);
				this.state = 525;
				this.tablePropertyList();
				}
				break;
			case 21:
				localctx = new UnsetTablePropertiesContext(this, localctx);
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 527;
				this.match(SparkSqlParser.ALTER);
				this.state = 528;
				_la = this._input.LA(1);
				if(!(_la===222 || _la===253)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 529;
				this.multipartIdentifier();
				this.state = 530;
				this.match(SparkSqlParser.UNSET);
				this.state = 531;
				this.match(SparkSqlParser.TBLPROPERTIES);
				this.state = 534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===108) {
					{
					this.state = 532;
					this.match(SparkSqlParser.IF);
					this.state = 533;
					this.match(SparkSqlParser.EXISTS);
					}
				}

				this.state = 536;
				this.tablePropertyList();
				}
				break;
			case 22:
				localctx = new AlterTableAlterColumnContext(this, localctx);
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 538;
				this.match(SparkSqlParser.ALTER);
				this.state = 539;
				this.match(SparkSqlParser.TABLE);
				this.state = 540;
				(localctx as AlterTableAlterColumnContext)._table = this.multipartIdentifier();
				this.state = 541;
				_la = this._input.LA(1);
				if(!(_la===14 || _la===34)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 543;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 542;
					this.match(SparkSqlParser.COLUMN);
					}
					break;
				}
				this.state = 545;
				(localctx as AlterTableAlterColumnContext)._column = this.multipartIdentifier();
				this.state = 547;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 546;
					this.alterColumnAction();
					}
					break;
				}
				}
				break;
			case 23:
				localctx = new HiveChangeColumnContext(this, localctx);
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 549;
				this.match(SparkSqlParser.ALTER);
				this.state = 550;
				this.match(SparkSqlParser.TABLE);
				this.state = 551;
				(localctx as HiveChangeColumnContext)._table = this.multipartIdentifier();
				this.state = 553;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===166) {
					{
					this.state = 552;
					this.partitionSpec();
					}
				}

				this.state = 555;
				this.match(SparkSqlParser.CHANGE);
				this.state = 557;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					this.state = 556;
					this.match(SparkSqlParser.COLUMN);
					}
					break;
				}
				this.state = 559;
				(localctx as HiveChangeColumnContext)._colName = this.multipartIdentifier();
				this.state = 560;
				this.colType();
				this.state = 562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12 || _la===93) {
					{
					this.state = 561;
					this.colPosition();
					}
				}

				}
				break;
			case 24:
				localctx = new HiveReplaceColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 24);
				{
				this.state = 564;
				this.match(SparkSqlParser.ALTER);
				this.state = 565;
				this.match(SparkSqlParser.TABLE);
				this.state = 566;
				(localctx as HiveReplaceColumnsContext)._table = this.multipartIdentifier();
				this.state = 568;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===166) {
					{
					this.state = 567;
					this.partitionSpec();
					}
				}

				this.state = 570;
				this.match(SparkSqlParser.REPLACE);
				this.state = 571;
				this.match(SparkSqlParser.COLUMNS);
				this.state = 572;
				this.match(SparkSqlParser.T__0);
				this.state = 573;
				(localctx as HiveReplaceColumnsContext)._columns = this.qualifiedColTypeWithPositionList();
				this.state = 574;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 25:
				localctx = new SetTableSerDeContext(this, localctx);
				this.enterOuterAlt(localctx, 25);
				{
				this.state = 576;
				this.match(SparkSqlParser.ALTER);
				this.state = 577;
				this.match(SparkSqlParser.TABLE);
				this.state = 578;
				this.multipartIdentifier();
				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===166) {
					{
					this.state = 579;
					this.partitionSpec();
					}
				}

				this.state = 582;
				this.match(SparkSqlParser.SET);
				this.state = 583;
				this.match(SparkSqlParser.SERDE);
				this.state = 584;
				this.match(SparkSqlParser.STRING);
				this.state = 588;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 585;
					this.match(SparkSqlParser.WITH);
					this.state = 586;
					this.match(SparkSqlParser.SERDEPROPERTIES);
					this.state = 587;
					this.tablePropertyList();
					}
					break;
				}
				}
				break;
			case 26:
				localctx = new SetTableSerDeContext(this, localctx);
				this.enterOuterAlt(localctx, 26);
				{
				this.state = 590;
				this.match(SparkSqlParser.ALTER);
				this.state = 591;
				this.match(SparkSqlParser.TABLE);
				this.state = 592;
				this.multipartIdentifier();
				this.state = 594;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===166) {
					{
					this.state = 593;
					this.partitionSpec();
					}
				}

				this.state = 596;
				this.match(SparkSqlParser.SET);
				this.state = 597;
				this.match(SparkSqlParser.SERDEPROPERTIES);
				this.state = 598;
				this.tablePropertyList();
				}
				break;
			case 27:
				localctx = new AddTablePartitionContext(this, localctx);
				this.enterOuterAlt(localctx, 27);
				{
				this.state = 600;
				this.match(SparkSqlParser.ALTER);
				this.state = 601;
				_la = this._input.LA(1);
				if(!(_la===222 || _la===253)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 602;
				this.multipartIdentifier();
				this.state = 603;
				this.match(SparkSqlParser.ADD);
				this.state = 607;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===108) {
					{
					this.state = 604;
					this.match(SparkSqlParser.IF);
					this.state = 605;
					this.match(SparkSqlParser.NOT);
					this.state = 606;
					this.match(SparkSqlParser.EXISTS);
					}
				}

				this.state = 610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 609;
					this.partitionSpecLocation();
					}
					}
					this.state = 612;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===166);
				}
				break;
			case 28:
				localctx = new RenameTablePartitionContext(this, localctx);
				this.enterOuterAlt(localctx, 28);
				{
				this.state = 614;
				this.match(SparkSqlParser.ALTER);
				this.state = 615;
				this.match(SparkSqlParser.TABLE);
				this.state = 616;
				this.multipartIdentifier();
				this.state = 617;
				(localctx as RenameTablePartitionContext)._from_ = this.partitionSpec();
				this.state = 618;
				this.match(SparkSqlParser.RENAME);
				this.state = 619;
				this.match(SparkSqlParser.TO);
				this.state = 620;
				(localctx as RenameTablePartitionContext)._to = this.partitionSpec();
				}
				break;
			case 29:
				localctx = new DropTablePartitionsContext(this, localctx);
				this.enterOuterAlt(localctx, 29);
				{
				this.state = 622;
				this.match(SparkSqlParser.ALTER);
				this.state = 623;
				_la = this._input.LA(1);
				if(!(_la===222 || _la===253)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 624;
				this.multipartIdentifier();
				this.state = 625;
				this.match(SparkSqlParser.DROP);
				this.state = 628;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===108) {
					{
					this.state = 626;
					this.match(SparkSqlParser.IF);
					this.state = 627;
					this.match(SparkSqlParser.EXISTS);
					}
				}

				this.state = 630;
				this.partitionSpec();
				this.state = 635;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3) {
					{
					{
					this.state = 631;
					this.match(SparkSqlParser.T__2);
					this.state = 632;
					this.partitionSpec();
					}
					}
					this.state = 637;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 639;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===177) {
					{
					this.state = 638;
					this.match(SparkSqlParser.PURGE);
					}
				}

				}
				break;
			case 30:
				localctx = new SetTableLocationContext(this, localctx);
				this.enterOuterAlt(localctx, 30);
				{
				this.state = 641;
				this.match(SparkSqlParser.ALTER);
				this.state = 642;
				this.match(SparkSqlParser.TABLE);
				this.state = 643;
				this.multipartIdentifier();
				this.state = 645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===166) {
					{
					this.state = 644;
					this.partitionSpec();
					}
				}

				this.state = 647;
				this.match(SparkSqlParser.SET);
				this.state = 648;
				this.locationSpec();
				}
				break;
			case 31:
				localctx = new RecoverPartitionsContext(this, localctx);
				this.enterOuterAlt(localctx, 31);
				{
				this.state = 650;
				this.match(SparkSqlParser.ALTER);
				this.state = 651;
				this.match(SparkSqlParser.TABLE);
				this.state = 652;
				this.multipartIdentifier();
				this.state = 653;
				this.match(SparkSqlParser.RECOVER);
				this.state = 654;
				this.match(SparkSqlParser.PARTITIONS);
				}
				break;
			case 32:
				localctx = new DropTableContext(this, localctx);
				this.enterOuterAlt(localctx, 32);
				{
				this.state = 656;
				this.match(SparkSqlParser.DROP);
				this.state = 657;
				this.match(SparkSqlParser.TABLE);
				this.state = 660;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
				case 1:
					{
					this.state = 658;
					this.match(SparkSqlParser.IF);
					this.state = 659;
					this.match(SparkSqlParser.EXISTS);
					}
					break;
				}
				this.state = 662;
				this.multipartIdentifier();
				this.state = 664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===177) {
					{
					this.state = 663;
					this.match(SparkSqlParser.PURGE);
					}
				}

				}
				break;
			case 33:
				localctx = new DropViewContext(this, localctx);
				this.enterOuterAlt(localctx, 33);
				{
				this.state = 666;
				this.match(SparkSqlParser.DROP);
				this.state = 667;
				this.match(SparkSqlParser.VIEW);
				this.state = 670;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 668;
					this.match(SparkSqlParser.IF);
					this.state = 669;
					this.match(SparkSqlParser.EXISTS);
					}
					break;
				}
				this.state = 672;
				this.multipartIdentifier();
				}
				break;
			case 34:
				localctx = new CreateViewContext(this, localctx);
				this.enterOuterAlt(localctx, 34);
				{
				this.state = 673;
				this.match(SparkSqlParser.CREATE);
				this.state = 676;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===157) {
					{
					this.state = 674;
					this.match(SparkSqlParser.OR);
					this.state = 675;
					this.match(SparkSqlParser.REPLACE);
					}
				}

				this.state = 682;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===103 || _la===226) {
					{
					this.state = 679;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===103) {
						{
						this.state = 678;
						this.match(SparkSqlParser.GLOBAL);
						}
					}

					this.state = 681;
					this.match(SparkSqlParser.TEMPORARY);
					}
				}

				this.state = 684;
				this.match(SparkSqlParser.VIEW);
				this.state = 688;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 52, this._ctx) ) {
				case 1:
					{
					this.state = 685;
					this.match(SparkSqlParser.IF);
					this.state = 686;
					this.match(SparkSqlParser.NOT);
					this.state = 687;
					this.match(SparkSqlParser.EXISTS);
					}
					break;
				}
				this.state = 690;
				this.multipartIdentifier();
				this.state = 692;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 691;
					this.identifierCommentList();
					}
				}

				this.state = 702;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===44 || _la===167 || _la===225) {
					{
					this.state = 700;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 44:
						{
						this.state = 694;
						this.commentSpec();
						}
						break;
					case 167:
						{
						{
						this.state = 695;
						this.match(SparkSqlParser.PARTITIONED);
						this.state = 696;
						this.match(SparkSqlParser.ON);
						this.state = 697;
						this.identifierList();
						}
						}
						break;
					case 225:
						{
						{
						this.state = 698;
						this.match(SparkSqlParser.TBLPROPERTIES);
						this.state = 699;
						this.tablePropertyList();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 704;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 705;
				this.match(SparkSqlParser.AS);
				this.state = 706;
				this.query();
				}
				break;
			case 35:
				localctx = new CreateTempViewUsingContext(this, localctx);
				this.enterOuterAlt(localctx, 35);
				{
				this.state = 708;
				this.match(SparkSqlParser.CREATE);
				this.state = 711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===157) {
					{
					this.state = 709;
					this.match(SparkSqlParser.OR);
					this.state = 710;
					this.match(SparkSqlParser.REPLACE);
					}
				}

				this.state = 714;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===103) {
					{
					this.state = 713;
					this.match(SparkSqlParser.GLOBAL);
					}
				}

				this.state = 716;
				this.match(SparkSqlParser.TEMPORARY);
				this.state = 717;
				this.match(SparkSqlParser.VIEW);
				this.state = 718;
				this.tableIdentifier();
				this.state = 723;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 719;
					this.match(SparkSqlParser.T__0);
					this.state = 720;
					this.colTypeList();
					this.state = 721;
					this.match(SparkSqlParser.T__1);
					}
				}

				this.state = 725;
				this.tableProvider();
				this.state = 728;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===156) {
					{
					this.state = 726;
					this.match(SparkSqlParser.OPTIONS);
					this.state = 727;
					this.tablePropertyList();
					}
				}

				}
				break;
			case 36:
				localctx = new AlterViewQueryContext(this, localctx);
				this.enterOuterAlt(localctx, 36);
				{
				this.state = 730;
				this.match(SparkSqlParser.ALTER);
				this.state = 731;
				this.match(SparkSqlParser.VIEW);
				this.state = 732;
				this.multipartIdentifier();
				this.state = 734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===21) {
					{
					this.state = 733;
					this.match(SparkSqlParser.AS);
					}
				}

				this.state = 736;
				this.query();
				}
				break;
			case 37:
				localctx = new CreateFunctionContext(this, localctx);
				this.enterOuterAlt(localctx, 37);
				{
				this.state = 738;
				this.match(SparkSqlParser.CREATE);
				this.state = 741;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===157) {
					{
					this.state = 739;
					this.match(SparkSqlParser.OR);
					this.state = 740;
					this.match(SparkSqlParser.REPLACE);
					}
				}

				this.state = 744;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===226) {
					{
					this.state = 743;
					this.match(SparkSqlParser.TEMPORARY);
					}
				}

				this.state = 746;
				this.match(SparkSqlParser.FUNCTION);
				this.state = 750;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
				case 1:
					{
					this.state = 747;
					this.match(SparkSqlParser.IF);
					this.state = 748;
					this.match(SparkSqlParser.NOT);
					this.state = 749;
					this.match(SparkSqlParser.EXISTS);
					}
					break;
				}
				this.state = 752;
				this.multipartIdentifier();
				this.state = 753;
				this.match(SparkSqlParser.AS);
				this.state = 754;
				(localctx as CreateFunctionContext)._className = this.match(SparkSqlParser.STRING);
				this.state = 764;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===251) {
					{
					this.state = 755;
					this.match(SparkSqlParser.USING);
					this.state = 756;
					this.resource();
					this.state = 761;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===3) {
						{
						{
						this.state = 757;
						this.match(SparkSqlParser.T__2);
						this.state = 758;
						this.resource();
						}
						}
						this.state = 763;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;
			case 38:
				localctx = new DropFunctionContext(this, localctx);
				this.enterOuterAlt(localctx, 38);
				{
				this.state = 766;
				this.match(SparkSqlParser.DROP);
				this.state = 768;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===226) {
					{
					this.state = 767;
					this.match(SparkSqlParser.TEMPORARY);
					}
				}

				this.state = 770;
				this.match(SparkSqlParser.FUNCTION);
				this.state = 773;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 67, this._ctx) ) {
				case 1:
					{
					this.state = 771;
					this.match(SparkSqlParser.IF);
					this.state = 772;
					this.match(SparkSqlParser.EXISTS);
					}
					break;
				}
				this.state = 775;
				this.multipartIdentifier();
				}
				break;
			case 39:
				localctx = new ExplainContext(this, localctx);
				this.enterOuterAlt(localctx, 39);
				{
				this.state = 776;
				this.match(SparkSqlParser.EXPLAIN);
				this.state = 778;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===39 || _la===51 || _la===85 || _la===98 || _la===139) {
					{
					this.state = 777;
					_la = this._input.LA(1);
					if(!(_la===39 || _la===51 || _la===85 || _la===98 || _la===139)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 780;
				this.statement();
				}
				break;
			case 40:
				localctx = new ShowTablesContext(this, localctx);
				this.enterOuterAlt(localctx, 40);
				{
				this.state = 781;
				this.match(SparkSqlParser.SHOW);
				this.state = 782;
				this.match(SparkSqlParser.TABLES);
				this.state = 785;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
				case 1:
					{
					this.state = 783;
					_la = this._input.LA(1);
					if(!(_la===99 || _la===111)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 784;
					this.multipartIdentifier();
					}
					break;
				}
				this.state = 791;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===130 || _la===279) {
					{
					this.state = 788;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===130) {
						{
						this.state = 787;
						this.match(SparkSqlParser.LIKE);
						}
					}

					this.state = 790;
					(localctx as ShowTablesContext)._pattern = this.match(SparkSqlParser.STRING);
					}
				}

				}
				break;
			case 41:
				localctx = new ShowTableContext(this, localctx);
				this.enterOuterAlt(localctx, 41);
				{
				this.state = 793;
				this.match(SparkSqlParser.SHOW);
				this.state = 794;
				this.match(SparkSqlParser.TABLE);
				this.state = 795;
				this.match(SparkSqlParser.EXTENDED);
				this.state = 798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===99 || _la===111) {
					{
					this.state = 796;
					_la = this._input.LA(1);
					if(!(_la===99 || _la===111)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 797;
					(localctx as ShowTableContext)._ns = this.multipartIdentifier();
					}
				}

				this.state = 800;
				this.match(SparkSqlParser.LIKE);
				this.state = 801;
				(localctx as ShowTableContext)._pattern = this.match(SparkSqlParser.STRING);
				this.state = 803;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===166) {
					{
					this.state = 802;
					this.partitionSpec();
					}
				}

				}
				break;
			case 42:
				localctx = new ShowTblPropertiesContext(this, localctx);
				this.enterOuterAlt(localctx, 42);
				{
				this.state = 805;
				this.match(SparkSqlParser.SHOW);
				this.state = 806;
				this.match(SparkSqlParser.TBLPROPERTIES);
				this.state = 807;
				(localctx as ShowTblPropertiesContext)._table = this.multipartIdentifier();
				this.state = 812;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 808;
					this.match(SparkSqlParser.T__0);
					this.state = 809;
					(localctx as ShowTblPropertiesContext)._key = this.tablePropertyKey();
					this.state = 810;
					this.match(SparkSqlParser.T__1);
					}
					break;
				}
				}
				break;
			case 43:
				localctx = new ShowColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 43);
				{
				this.state = 814;
				this.match(SparkSqlParser.SHOW);
				this.state = 815;
				this.match(SparkSqlParser.COLUMNS);
				this.state = 816;
				_la = this._input.LA(1);
				if(!(_la===99 || _la===111)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 817;
				(localctx as ShowColumnsContext)._table = this.multipartIdentifier();
				this.state = 820;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 818;
					_la = this._input.LA(1);
					if(!(_la===99 || _la===111)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 819;
					(localctx as ShowColumnsContext)._ns = this.multipartIdentifier();
					}
					break;
				}
				}
				break;
			case 44:
				localctx = new ShowViewsContext(this, localctx);
				this.enterOuterAlt(localctx, 44);
				{
				this.state = 822;
				this.match(SparkSqlParser.SHOW);
				this.state = 823;
				this.match(SparkSqlParser.VIEWS);
				this.state = 826;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
				case 1:
					{
					this.state = 824;
					_la = this._input.LA(1);
					if(!(_la===99 || _la===111)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 825;
					this.multipartIdentifier();
					}
					break;
				}
				this.state = 832;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===130 || _la===279) {
					{
					this.state = 829;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===130) {
						{
						this.state = 828;
						this.match(SparkSqlParser.LIKE);
						}
					}

					this.state = 831;
					(localctx as ShowViewsContext)._pattern = this.match(SparkSqlParser.STRING);
					}
				}

				}
				break;
			case 45:
				localctx = new ShowPartitionsContext(this, localctx);
				this.enterOuterAlt(localctx, 45);
				{
				this.state = 834;
				this.match(SparkSqlParser.SHOW);
				this.state = 835;
				this.match(SparkSqlParser.PARTITIONS);
				this.state = 836;
				this.multipartIdentifier();
				this.state = 838;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===166) {
					{
					this.state = 837;
					this.partitionSpec();
					}
				}

				}
				break;
			case 46:
				localctx = new ShowFunctionsContext(this, localctx);
				this.enterOuterAlt(localctx, 46);
				{
				this.state = 840;
				this.match(SparkSqlParser.SHOW);
				this.state = 842;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
				case 1:
					{
					this.state = 841;
					this.identifier();
					}
					break;
				}
				this.state = 844;
				this.match(SparkSqlParser.FUNCTIONS);
				this.state = 852;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 83, this._ctx) ) {
				case 1:
					{
					this.state = 846;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
					case 1:
						{
						this.state = 845;
						this.match(SparkSqlParser.LIKE);
						}
						break;
					}
					this.state = 850;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 82, this._ctx) ) {
					case 1:
						{
						this.state = 848;
						this.multipartIdentifier();
						}
						break;
					case 2:
						{
						this.state = 849;
						(localctx as ShowFunctionsContext)._pattern = this.match(SparkSqlParser.STRING);
						}
						break;
					}
					}
					break;
				}
				}
				break;
			case 47:
				localctx = new ShowCreateTableContext(this, localctx);
				this.enterOuterAlt(localctx, 47);
				{
				this.state = 854;
				this.match(SparkSqlParser.SHOW);
				this.state = 855;
				this.match(SparkSqlParser.CREATE);
				this.state = 856;
				this.match(SparkSqlParser.TABLE);
				this.state = 857;
				this.multipartIdentifier();
				this.state = 860;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===21) {
					{
					this.state = 858;
					this.match(SparkSqlParser.AS);
					this.state = 859;
					this.match(SparkSqlParser.SERDE);
					}
				}

				}
				break;
			case 48:
				localctx = new ShowCurrentNamespaceContext(this, localctx);
				this.enterOuterAlt(localctx, 48);
				{
				this.state = 862;
				this.match(SparkSqlParser.SHOW);
				this.state = 863;
				this.match(SparkSqlParser.CURRENT);
				this.state = 864;
				this.match(SparkSqlParser.NAMESPACE);
				}
				break;
			case 49:
				localctx = new DescribeFunctionContext(this, localctx);
				this.enterOuterAlt(localctx, 49);
				{
				this.state = 865;
				_la = this._input.LA(1);
				if(!(_la===67 || _la===68)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 866;
				this.match(SparkSqlParser.FUNCTION);
				this.state = 868;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
				case 1:
					{
					this.state = 867;
					this.match(SparkSqlParser.EXTENDED);
					}
					break;
				}
				this.state = 870;
				this.describeFuncName();
				}
				break;
			case 50:
				localctx = new DescribeNamespaceContext(this, localctx);
				this.enterOuterAlt(localctx, 50);
				{
				this.state = 871;
				_la = this._input.LA(1);
				if(!(_la===67 || _la===68)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 872;
				this.namespace();
				this.state = 874;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
				case 1:
					{
					this.state = 873;
					this.match(SparkSqlParser.EXTENDED);
					}
					break;
				}
				this.state = 876;
				this.multipartIdentifier();
				}
				break;
			case 51:
				localctx = new DescribeRelationContext(this, localctx);
				this.enterOuterAlt(localctx, 51);
				{
				this.state = 878;
				_la = this._input.LA(1);
				if(!(_la===67 || _la===68)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 880;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 879;
					this.match(SparkSqlParser.TABLE);
					}
					break;
				}
				this.state = 883;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 88, this._ctx) ) {
				case 1:
					{
					this.state = 882;
					(localctx as DescribeRelationContext)._option = this._input.LT(1);
					_la = this._input.LA(1);
					if(!(_la===85 || _la===98)) {
					    (localctx as DescribeRelationContext)._option = this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 885;
				this.multipartIdentifier();
				this.state = 887;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 886;
					this.partitionSpec();
					}
					break;
				}
				this.state = 890;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 90, this._ctx) ) {
				case 1:
					{
					this.state = 889;
					this.describeColName();
					}
					break;
				}
				}
				break;
			case 52:
				localctx = new DescribeQueryContext(this, localctx);
				this.enterOuterAlt(localctx, 52);
				{
				this.state = 892;
				_la = this._input.LA(1);
				if(!(_la===67 || _la===68)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 894;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===178) {
					{
					this.state = 893;
					this.match(SparkSqlParser.QUERY);
					}
				}

				this.state = 896;
				this.query();
				}
				break;
			case 53:
				localctx = new CommentNamespaceContext(this, localctx);
				this.enterOuterAlt(localctx, 53);
				{
				this.state = 897;
				this.match(SparkSqlParser.COMMENT);
				this.state = 898;
				this.match(SparkSqlParser.ON);
				this.state = 899;
				this.namespace();
				this.state = 900;
				this.multipartIdentifier();
				this.state = 901;
				this.match(SparkSqlParser.IS);
				this.state = 902;
				(localctx as CommentNamespaceContext)._comment = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===150 || _la===279)) {
				    (localctx as CommentNamespaceContext)._comment = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 54:
				localctx = new CommentTableContext(this, localctx);
				this.enterOuterAlt(localctx, 54);
				{
				this.state = 904;
				this.match(SparkSqlParser.COMMENT);
				this.state = 905;
				this.match(SparkSqlParser.ON);
				this.state = 906;
				this.match(SparkSqlParser.TABLE);
				this.state = 907;
				this.multipartIdentifier();
				this.state = 908;
				this.match(SparkSqlParser.IS);
				this.state = 909;
				(localctx as CommentTableContext)._comment = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===150 || _la===279)) {
				    (localctx as CommentTableContext)._comment = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 55:
				localctx = new RefreshTableContext(this, localctx);
				this.enterOuterAlt(localctx, 55);
				{
				this.state = 911;
				this.match(SparkSqlParser.REFRESH);
				this.state = 912;
				this.match(SparkSqlParser.TABLE);
				this.state = 913;
				this.multipartIdentifier();
				}
				break;
			case 56:
				localctx = new RefreshFunctionContext(this, localctx);
				this.enterOuterAlt(localctx, 56);
				{
				this.state = 914;
				this.match(SparkSqlParser.REFRESH);
				this.state = 915;
				this.match(SparkSqlParser.FUNCTION);
				this.state = 916;
				this.multipartIdentifier();
				}
				break;
			case 57:
				localctx = new RefreshResourceContext(this, localctx);
				this.enterOuterAlt(localctx, 57);
				{
				this.state = 917;
				this.match(SparkSqlParser.REFRESH);
				this.state = 925;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 93, this._ctx) ) {
				case 1:
					{
					this.state = 918;
					this.match(SparkSqlParser.STRING);
					}
					break;
				case 2:
					{
					this.state = 922;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 92, this._ctx);
					while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1 + 1) {
							{
							{
							this.state = 919;
							this.matchWildcard();
							}
							}
						}
						this.state = 924;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 92, this._ctx);
					}
					}
					break;
				}
				}
				break;
			case 58:
				localctx = new CacheTableContext(this, localctx);
				this.enterOuterAlt(localctx, 58);
				{
				this.state = 927;
				this.match(SparkSqlParser.CACHE);
				this.state = 929;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===127) {
					{
					this.state = 928;
					this.match(SparkSqlParser.LAZY);
					}
				}

				this.state = 931;
				this.match(SparkSqlParser.TABLE);
				this.state = 932;
				this.multipartIdentifier();
				this.state = 935;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===156) {
					{
					this.state = 933;
					this.match(SparkSqlParser.OPTIONS);
					this.state = 934;
					this.tablePropertyList();
					}
				}

				this.state = 941;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 97, this._ctx) ) {
				case 1:
					{
					this.state = 938;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===21) {
						{
						this.state = 937;
						this.match(SparkSqlParser.AS);
						}
					}

					this.state = 940;
					this.query();
					}
					break;
				}
				}
				break;
			case 59:
				localctx = new UncacheTableContext(this, localctx);
				this.enterOuterAlt(localctx, 59);
				{
				this.state = 943;
				this.match(SparkSqlParser.UNCACHE);
				this.state = 944;
				this.match(SparkSqlParser.TABLE);
				this.state = 947;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 98, this._ctx) ) {
				case 1:
					{
					this.state = 945;
					this.match(SparkSqlParser.IF);
					this.state = 946;
					this.match(SparkSqlParser.EXISTS);
					}
					break;
				}
				this.state = 949;
				this.multipartIdentifier();
				}
				break;
			case 60:
				localctx = new ClearCacheContext(this, localctx);
				this.enterOuterAlt(localctx, 60);
				{
				this.state = 950;
				this.match(SparkSqlParser.CLEAR);
				this.state = 951;
				this.match(SparkSqlParser.CACHE);
				}
				break;
			case 61:
				localctx = new LoadDataContext(this, localctx);
				this.enterOuterAlt(localctx, 61);
				{
				this.state = 952;
				this.match(SparkSqlParser.LOAD);
				this.state = 953;
				this.match(SparkSqlParser.DATA);
				this.state = 955;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===135) {
					{
					this.state = 954;
					this.match(SparkSqlParser.LOCAL);
					}
				}

				this.state = 957;
				this.match(SparkSqlParser.INPATH);
				this.state = 958;
				(localctx as LoadDataContext)._path = this.match(SparkSqlParser.STRING);
				this.state = 960;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===165) {
					{
					this.state = 959;
					this.match(SparkSqlParser.OVERWRITE);
					}
				}

				this.state = 962;
				this.match(SparkSqlParser.INTO);
				this.state = 963;
				this.match(SparkSqlParser.TABLE);
				this.state = 964;
				this.multipartIdentifier();
				this.state = 966;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===166) {
					{
					this.state = 965;
					this.partitionSpec();
					}
				}

				}
				break;
			case 62:
				localctx = new TruncateTableContext(this, localctx);
				this.enterOuterAlt(localctx, 62);
				{
				this.state = 968;
				this.match(SparkSqlParser.TRUNCATE);
				this.state = 969;
				this.match(SparkSqlParser.TABLE);
				this.state = 970;
				this.multipartIdentifier();
				this.state = 972;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===166) {
					{
					this.state = 971;
					this.partitionSpec();
					}
				}

				}
				break;
			case 63:
				localctx = new RepairTableContext(this, localctx);
				this.enterOuterAlt(localctx, 63);
				{
				this.state = 974;
				this.match(SparkSqlParser.MSCK);
				this.state = 975;
				this.match(SparkSqlParser.REPAIR);
				this.state = 976;
				this.match(SparkSqlParser.TABLE);
				this.state = 977;
				this.multipartIdentifier();
				}
				break;
			case 64:
				localctx = new ManageResourceContext(this, localctx);
				this.enterOuterAlt(localctx, 64);
				{
				this.state = 978;
				(localctx as ManageResourceContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===11 || _la===133)) {
				    (localctx as ManageResourceContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 979;
				this.identifier();
				this.state = 987;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 980;
					this.match(SparkSqlParser.STRING);
					}
					break;
				case 2:
					{
					this.state = 984;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 103, this._ctx);
					while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1 + 1) {
							{
							{
							this.state = 981;
							this.matchWildcard();
							}
							}
						}
						this.state = 986;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 103, this._ctx);
					}
					}
					break;
				}
				}
				break;
			case 65:
				localctx = new FailNativeCommandContext(this, localctx);
				this.enterOuterAlt(localctx, 65);
				{
				this.state = 989;
				this.match(SparkSqlParser.SET);
				this.state = 990;
				this.match(SparkSqlParser.ROLE);
				this.state = 994;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 105, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 991;
						this.matchWildcard();
						}
						}
					}
					this.state = 996;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 105, this._ctx);
				}
				}
				break;
			case 66:
				localctx = new SetTimeZoneContext(this, localctx);
				this.enterOuterAlt(localctx, 66);
				{
				this.state = 997;
				this.match(SparkSqlParser.SET);
				this.state = 998;
				this.match(SparkSqlParser.TIME);
				this.state = 999;
				this.match(SparkSqlParser.ZONE);
				this.state = 1000;
				this.interval();
				}
				break;
			case 67:
				localctx = new SetTimeZoneContext(this, localctx);
				this.enterOuterAlt(localctx, 67);
				{
				this.state = 1001;
				this.match(SparkSqlParser.SET);
				this.state = 1002;
				this.match(SparkSqlParser.TIME);
				this.state = 1003;
				this.match(SparkSqlParser.ZONE);
				this.state = 1004;
				(localctx as SetTimeZoneContext)._timezone = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===135 || _la===279)) {
				    (localctx as SetTimeZoneContext)._timezone = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 68:
				localctx = new SetTimeZoneContext(this, localctx);
				this.enterOuterAlt(localctx, 68);
				{
				this.state = 1005;
				this.match(SparkSqlParser.SET);
				this.state = 1006;
				this.match(SparkSqlParser.TIME);
				this.state = 1007;
				this.match(SparkSqlParser.ZONE);
				this.state = 1011;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 106, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1008;
						this.matchWildcard();
						}
						}
					}
					this.state = 1013;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 106, this._ctx);
				}
				}
				break;
			case 69:
				localctx = new SetQuotedConfigurationContext(this, localctx);
				this.enterOuterAlt(localctx, 69);
				{
				this.state = 1014;
				this.match(SparkSqlParser.SET);
				this.state = 1015;
				this.configKey();
				this.state = 1023;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===260) {
					{
					this.state = 1016;
					this.match(SparkSqlParser.EQ);
					this.state = 1020;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 107, this._ctx);
					while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1 + 1) {
							{
							{
							this.state = 1017;
							this.matchWildcard();
							}
							}
						}
						this.state = 1022;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 107, this._ctx);
					}
					}
				}

				}
				break;
			case 70:
				localctx = new SetConfigurationContext(this, localctx);
				this.enterOuterAlt(localctx, 70);
				{
				this.state = 1025;
				this.match(SparkSqlParser.SET);
				this.state = 1029;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 109, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1026;
						this.matchWildcard();
						}
						}
					}
					this.state = 1031;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 109, this._ctx);
				}
				}
				break;
			case 71:
				localctx = new ResetQuotedConfigurationContext(this, localctx);
				this.enterOuterAlt(localctx, 71);
				{
				this.state = 1032;
				this.match(SparkSqlParser.RESET);
				this.state = 1033;
				this.configKey();
				}
				break;
			case 72:
				localctx = new ResetConfigurationContext(this, localctx);
				this.enterOuterAlt(localctx, 72);
				{
				this.state = 1034;
				this.match(SparkSqlParser.RESET);
				this.state = 1038;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 110, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1035;
						this.matchWildcard();
						}
						}
					}
					this.state = 1040;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 110, this._ctx);
				}
				}
				break;
			case 73:
				localctx = new FailNativeCommandContext(this, localctx);
				this.enterOuterAlt(localctx, 73);
				{
				this.state = 1041;
				this.unsupportedHiveNativeCommands();
				this.state = 1045;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 111, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1042;
						this.matchWildcard();
						}
						}
					}
					this.state = 1047;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 111, this._ctx);
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
	public configKey(): ConfigKeyContext {
		let localctx: ConfigKeyContext = new ConfigKeyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, SparkSqlParser.RULE_configKey);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1050;
			this.quotedIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unsupportedHiveNativeCommands(): UnsupportedHiveNativeCommandsContext {
		let localctx: UnsupportedHiveNativeCommandsContext = new UnsupportedHiveNativeCommandsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, SparkSqlParser.RULE_unsupportedHiveNativeCommands);
		let _la: number;
		try {
			this.state = 1220;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1052;
				localctx._kw1 = this.match(SparkSqlParser.CREATE);
				this.state = 1053;
				localctx._kw2 = this.match(SparkSqlParser.ROLE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1054;
				localctx._kw1 = this.match(SparkSqlParser.DROP);
				this.state = 1055;
				localctx._kw2 = this.match(SparkSqlParser.ROLE);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1056;
				localctx._kw1 = this.match(SparkSqlParser.GRANT);
				this.state = 1058;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 113, this._ctx) ) {
				case 1:
					{
					this.state = 1057;
					localctx._kw2 = this.match(SparkSqlParser.ROLE);
					}
					break;
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1060;
				localctx._kw1 = this.match(SparkSqlParser.REVOKE);
				this.state = 1062;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
				case 1:
					{
					this.state = 1061;
					localctx._kw2 = this.match(SparkSqlParser.ROLE);
					}
					break;
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1064;
				localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1065;
				localctx._kw2 = this.match(SparkSqlParser.GRANT);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1066;
				localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1067;
				localctx._kw2 = this.match(SparkSqlParser.ROLE);
				this.state = 1069;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 115, this._ctx) ) {
				case 1:
					{
					this.state = 1068;
					localctx._kw3 = this.match(SparkSqlParser.GRANT);
					}
					break;
				}
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1071;
				localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1072;
				localctx._kw2 = this.match(SparkSqlParser.PRINCIPALS);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1073;
				localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1074;
				localctx._kw2 = this.match(SparkSqlParser.ROLES);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1075;
				localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1076;
				localctx._kw2 = this.match(SparkSqlParser.CURRENT);
				this.state = 1077;
				localctx._kw3 = this.match(SparkSqlParser.ROLES);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1078;
				localctx._kw1 = this.match(SparkSqlParser.EXPORT);
				this.state = 1079;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 1080;
				localctx._kw1 = this.match(SparkSqlParser.IMPORT);
				this.state = 1081;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 1082;
				localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1083;
				localctx._kw2 = this.match(SparkSqlParser.COMPACTIONS);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 1084;
				localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1085;
				localctx._kw2 = this.match(SparkSqlParser.CREATE);
				this.state = 1086;
				localctx._kw3 = this.match(SparkSqlParser.TABLE);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 1087;
				localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1088;
				localctx._kw2 = this.match(SparkSqlParser.TRANSACTIONS);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 1089;
				localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1090;
				localctx._kw2 = this.match(SparkSqlParser.INDEXES);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 1091;
				localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1092;
				localctx._kw2 = this.match(SparkSqlParser.LOCKS);
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 1093;
				localctx._kw1 = this.match(SparkSqlParser.CREATE);
				this.state = 1094;
				localctx._kw2 = this.match(SparkSqlParser.INDEX);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 1095;
				localctx._kw1 = this.match(SparkSqlParser.DROP);
				this.state = 1096;
				localctx._kw2 = this.match(SparkSqlParser.INDEX);
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 1097;
				localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1098;
				localctx._kw2 = this.match(SparkSqlParser.INDEX);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 1099;
				localctx._kw1 = this.match(SparkSqlParser.LOCK);
				this.state = 1100;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 1101;
				localctx._kw1 = this.match(SparkSqlParser.LOCK);
				this.state = 1102;
				localctx._kw2 = this.match(SparkSqlParser.DATABASE);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 1103;
				localctx._kw1 = this.match(SparkSqlParser.UNLOCK);
				this.state = 1104;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 1105;
				localctx._kw1 = this.match(SparkSqlParser.UNLOCK);
				this.state = 1106;
				localctx._kw2 = this.match(SparkSqlParser.DATABASE);
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 24);
				{
				this.state = 1107;
				localctx._kw1 = this.match(SparkSqlParser.CREATE);
				this.state = 1108;
				localctx._kw2 = this.match(SparkSqlParser.TEMPORARY);
				this.state = 1109;
				localctx._kw3 = this.match(SparkSqlParser.MACRO);
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 25);
				{
				this.state = 1110;
				localctx._kw1 = this.match(SparkSqlParser.DROP);
				this.state = 1111;
				localctx._kw2 = this.match(SparkSqlParser.TEMPORARY);
				this.state = 1112;
				localctx._kw3 = this.match(SparkSqlParser.MACRO);
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 26);
				{
				this.state = 1113;
				localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1114;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1115;
				this.tableIdentifier();
				this.state = 1116;
				localctx._kw3 = this.match(SparkSqlParser.NOT);
				this.state = 1117;
				localctx._kw4 = this.match(SparkSqlParser.CLUSTERED);
				}
				break;
			case 27:
				this.enterOuterAlt(localctx, 27);
				{
				this.state = 1119;
				localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1120;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1121;
				this.tableIdentifier();
				this.state = 1122;
				localctx._kw3 = this.match(SparkSqlParser.CLUSTERED);
				this.state = 1123;
				localctx._kw4 = this.match(SparkSqlParser.BY);
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 28);
				{
				this.state = 1125;
				localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1126;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1127;
				this.tableIdentifier();
				this.state = 1128;
				localctx._kw3 = this.match(SparkSqlParser.NOT);
				this.state = 1129;
				localctx._kw4 = this.match(SparkSqlParser.SORTED);
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 29);
				{
				this.state = 1131;
				localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1132;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1133;
				this.tableIdentifier();
				this.state = 1134;
				localctx._kw3 = this.match(SparkSqlParser.SKEWED);
				this.state = 1135;
				localctx._kw4 = this.match(SparkSqlParser.BY);
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 30);
				{
				this.state = 1137;
				localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1138;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1139;
				this.tableIdentifier();
				this.state = 1140;
				localctx._kw3 = this.match(SparkSqlParser.NOT);
				this.state = 1141;
				localctx._kw4 = this.match(SparkSqlParser.SKEWED);
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 31);
				{
				this.state = 1143;
				localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1144;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1145;
				this.tableIdentifier();
				this.state = 1146;
				localctx._kw3 = this.match(SparkSqlParser.NOT);
				this.state = 1147;
				localctx._kw4 = this.match(SparkSqlParser.STORED);
				this.state = 1148;
				localctx._kw5 = this.match(SparkSqlParser.AS);
				this.state = 1149;
				localctx._kw6 = this.match(SparkSqlParser.DIRECTORIES);
				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 32);
				{
				this.state = 1151;
				localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1152;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1153;
				this.tableIdentifier();
				this.state = 1154;
				localctx._kw3 = this.match(SparkSqlParser.SET);
				this.state = 1155;
				localctx._kw4 = this.match(SparkSqlParser.SKEWED);
				this.state = 1156;
				localctx._kw5 = this.match(SparkSqlParser.LOCATION);
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 33);
				{
				this.state = 1158;
				localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1159;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1160;
				this.tableIdentifier();
				this.state = 1161;
				localctx._kw3 = this.match(SparkSqlParser.EXCHANGE);
				this.state = 1162;
				localctx._kw4 = this.match(SparkSqlParser.PARTITION);
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 34);
				{
				this.state = 1164;
				localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1165;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1166;
				this.tableIdentifier();
				this.state = 1167;
				localctx._kw3 = this.match(SparkSqlParser.ARCHIVE);
				this.state = 1168;
				localctx._kw4 = this.match(SparkSqlParser.PARTITION);
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 35);
				{
				this.state = 1170;
				localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1171;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1172;
				this.tableIdentifier();
				this.state = 1173;
				localctx._kw3 = this.match(SparkSqlParser.UNARCHIVE);
				this.state = 1174;
				localctx._kw4 = this.match(SparkSqlParser.PARTITION);
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 36);
				{
				this.state = 1176;
				localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1177;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1178;
				this.tableIdentifier();
				this.state = 1179;
				localctx._kw3 = this.match(SparkSqlParser.TOUCH);
				}
				break;
			case 37:
				this.enterOuterAlt(localctx, 37);
				{
				this.state = 1181;
				localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1182;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1183;
				this.tableIdentifier();
				this.state = 1185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===166) {
					{
					this.state = 1184;
					this.partitionSpec();
					}
				}

				this.state = 1187;
				localctx._kw3 = this.match(SparkSqlParser.COMPACT);
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 38);
				{
				this.state = 1189;
				localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1190;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1191;
				this.tableIdentifier();
				this.state = 1193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===166) {
					{
					this.state = 1192;
					this.partitionSpec();
					}
				}

				this.state = 1195;
				localctx._kw3 = this.match(SparkSqlParser.CONCATENATE);
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 39);
				{
				this.state = 1197;
				localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1198;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1199;
				this.tableIdentifier();
				this.state = 1201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===166) {
					{
					this.state = 1200;
					this.partitionSpec();
					}
				}

				this.state = 1203;
				localctx._kw3 = this.match(SparkSqlParser.SET);
				this.state = 1204;
				localctx._kw4 = this.match(SparkSqlParser.FILEFORMAT);
				}
				break;
			case 40:
				this.enterOuterAlt(localctx, 40);
				{
				this.state = 1206;
				localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1207;
				localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1208;
				this.tableIdentifier();
				this.state = 1210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===166) {
					{
					this.state = 1209;
					this.partitionSpec();
					}
				}

				this.state = 1212;
				localctx._kw3 = this.match(SparkSqlParser.REPLACE);
				this.state = 1213;
				localctx._kw4 = this.match(SparkSqlParser.COLUMNS);
				}
				break;
			case 41:
				this.enterOuterAlt(localctx, 41);
				{
				this.state = 1215;
				localctx._kw1 = this.match(SparkSqlParser.START);
				this.state = 1216;
				localctx._kw2 = this.match(SparkSqlParser.TRANSACTION);
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 42);
				{
				this.state = 1217;
				localctx._kw1 = this.match(SparkSqlParser.COMMIT);
				}
				break;
			case 43:
				this.enterOuterAlt(localctx, 43);
				{
				this.state = 1218;
				localctx._kw1 = this.match(SparkSqlParser.ROLLBACK);
				}
				break;
			case 44:
				this.enterOuterAlt(localctx, 44);
				{
				this.state = 1219;
				localctx._kw1 = this.match(SparkSqlParser.DFS);
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
	public createTableHeader(): CreateTableHeaderContext {
		let localctx: CreateTableHeaderContext = new CreateTableHeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, SparkSqlParser.RULE_createTableHeader);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1222;
			this.match(SparkSqlParser.CREATE);
			this.state = 1224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===226) {
				{
				this.state = 1223;
				this.match(SparkSqlParser.TEMPORARY);
				}
			}

			this.state = 1227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===86) {
				{
				this.state = 1226;
				this.match(SparkSqlParser.EXTERNAL);
				}
			}

			this.state = 1229;
			this.match(SparkSqlParser.TABLE);
			this.state = 1233;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				{
				this.state = 1230;
				this.match(SparkSqlParser.IF);
				this.state = 1231;
				this.match(SparkSqlParser.NOT);
				this.state = 1232;
				this.match(SparkSqlParser.EXISTS);
				}
				break;
			}
			this.state = 1235;
			this.multipartIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public replaceTableHeader(): ReplaceTableHeaderContext {
		let localctx: ReplaceTableHeaderContext = new ReplaceTableHeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, SparkSqlParser.RULE_replaceTableHeader);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 1237;
				this.match(SparkSqlParser.CREATE);
				this.state = 1238;
				this.match(SparkSqlParser.OR);
				}
			}

			this.state = 1241;
			this.match(SparkSqlParser.REPLACE);
			this.state = 1242;
			this.match(SparkSqlParser.TABLE);
			this.state = 1243;
			this.multipartIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bucketSpec(): BucketSpecContext {
		let localctx: BucketSpecContext = new BucketSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, SparkSqlParser.RULE_bucketSpec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1245;
			this.match(SparkSqlParser.CLUSTERED);
			this.state = 1246;
			this.match(SparkSqlParser.BY);
			this.state = 1247;
			this.identifierList();
			this.state = 1251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===214) {
				{
				this.state = 1248;
				this.match(SparkSqlParser.SORTED);
				this.state = 1249;
				this.match(SparkSqlParser.BY);
				this.state = 1250;
				this.orderedIdentifierList();
				}
			}

			this.state = 1253;
			this.match(SparkSqlParser.INTO);
			this.state = 1254;
			this.match(SparkSqlParser.INTEGER_VALUE);
			this.state = 1255;
			this.match(SparkSqlParser.BUCKETS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public skewSpec(): SkewSpecContext {
		let localctx: SkewSpecContext = new SkewSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, SparkSqlParser.RULE_skewSpec);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1257;
			this.match(SparkSqlParser.SKEWED);
			this.state = 1258;
			this.match(SparkSqlParser.BY);
			this.state = 1259;
			this.identifierList();
			this.state = 1260;
			this.match(SparkSqlParser.ON);
			this.state = 1263;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				{
				this.state = 1261;
				this.constantList();
				}
				break;
			case 2:
				{
				this.state = 1262;
				this.nestedConstantList();
				}
				break;
			}
			this.state = 1268;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				{
				this.state = 1265;
				this.match(SparkSqlParser.STORED);
				this.state = 1266;
				this.match(SparkSqlParser.AS);
				this.state = 1267;
				this.match(SparkSqlParser.DIRECTORIES);
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
	public locationSpec(): LocationSpecContext {
		let localctx: LocationSpecContext = new LocationSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, SparkSqlParser.RULE_locationSpec);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1270;
			this.match(SparkSqlParser.LOCATION);
			this.state = 1271;
			this.match(SparkSqlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public commentSpec(): CommentSpecContext {
		let localctx: CommentSpecContext = new CommentSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, SparkSqlParser.RULE_commentSpec);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1273;
			this.match(SparkSqlParser.COMMENT);
			this.state = 1274;
			this.match(SparkSqlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 34, SparkSqlParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===258) {
				{
				this.state = 1276;
				this.ctes();
				}
			}

			this.state = 1279;
			this.queryTerm(0);
			this.state = 1280;
			this.queryOrganization();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public insertInto(): InsertIntoContext {
		let localctx: InsertIntoContext = new InsertIntoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, SparkSqlParser.RULE_insertInto);
		let _la: number;
		try {
			this.state = 1337;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				localctx = new InsertOverwriteTableContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1282;
				this.match(SparkSqlParser.INSERT);
				this.state = 1283;
				this.match(SparkSqlParser.OVERWRITE);
				this.state = 1285;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
				case 1:
					{
					this.state = 1284;
					this.match(SparkSqlParser.TABLE);
					}
					break;
				}
				this.state = 1287;
				this.multipartIdentifier();
				this.state = 1294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===166) {
					{
					this.state = 1288;
					this.partitionSpec();
					this.state = 1292;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===108) {
						{
						this.state = 1289;
						this.match(SparkSqlParser.IF);
						this.state = 1290;
						this.match(SparkSqlParser.NOT);
						this.state = 1291;
						this.match(SparkSqlParser.EXISTS);
						}
					}

					}
				}

				}
				break;
			case 2:
				localctx = new InsertIntoTableContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1296;
				this.match(SparkSqlParser.INSERT);
				this.state = 1297;
				this.match(SparkSqlParser.INTO);
				this.state = 1299;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 132, this._ctx) ) {
				case 1:
					{
					this.state = 1298;
					this.match(SparkSqlParser.TABLE);
					}
					break;
				}
				this.state = 1301;
				this.multipartIdentifier();
				this.state = 1303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===166) {
					{
					this.state = 1302;
					this.partitionSpec();
					}
				}

				this.state = 1308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===108) {
					{
					this.state = 1305;
					this.match(SparkSqlParser.IF);
					this.state = 1306;
					this.match(SparkSqlParser.NOT);
					this.state = 1307;
					this.match(SparkSqlParser.EXISTS);
					}
				}

				}
				break;
			case 3:
				localctx = new InsertOverwriteHiveDirContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1310;
				this.match(SparkSqlParser.INSERT);
				this.state = 1311;
				this.match(SparkSqlParser.OVERWRITE);
				this.state = 1313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===135) {
					{
					this.state = 1312;
					this.match(SparkSqlParser.LOCAL);
					}
				}

				this.state = 1315;
				this.match(SparkSqlParser.DIRECTORY);
				this.state = 1316;
				(localctx as InsertOverwriteHiveDirContext)._path = this.match(SparkSqlParser.STRING);
				this.state = 1318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===198) {
					{
					this.state = 1317;
					this.rowFormat();
					}
				}

				this.state = 1321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===217) {
					{
					this.state = 1320;
					this.createFileFormat();
					}
				}

				}
				break;
			case 4:
				localctx = new InsertOverwriteDirContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1323;
				this.match(SparkSqlParser.INSERT);
				this.state = 1324;
				this.match(SparkSqlParser.OVERWRITE);
				this.state = 1326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===135) {
					{
					this.state = 1325;
					this.match(SparkSqlParser.LOCAL);
					}
				}

				this.state = 1328;
				this.match(SparkSqlParser.DIRECTORY);
				this.state = 1330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===279) {
					{
					this.state = 1329;
					(localctx as InsertOverwriteDirContext)._path = this.match(SparkSqlParser.STRING);
					}
				}

				this.state = 1332;
				this.tableProvider();
				this.state = 1335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===156) {
					{
					this.state = 1333;
					this.match(SparkSqlParser.OPTIONS);
					this.state = 1334;
					this.tablePropertyList();
					}
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
	public partitionSpecLocation(): PartitionSpecLocationContext {
		let localctx: PartitionSpecLocationContext = new PartitionSpecLocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, SparkSqlParser.RULE_partitionSpecLocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1339;
			this.partitionSpec();
			this.state = 1341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===136) {
				{
				this.state = 1340;
				this.locationSpec();
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
	public partitionSpec(): PartitionSpecContext {
		let localctx: PartitionSpecContext = new PartitionSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, SparkSqlParser.RULE_partitionSpec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1343;
			this.match(SparkSqlParser.PARTITION);
			this.state = 1344;
			this.match(SparkSqlParser.T__0);
			this.state = 1345;
			this.partitionVal();
			this.state = 1350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 1346;
				this.match(SparkSqlParser.T__2);
				this.state = 1347;
				this.partitionVal();
				}
				}
				this.state = 1352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1353;
			this.match(SparkSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public partitionVal(): PartitionValContext {
		let localctx: PartitionValContext = new PartitionValContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, SparkSqlParser.RULE_partitionVal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1355;
			this.identifier();
			this.state = 1358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===260) {
				{
				this.state = 1356;
				this.match(SparkSqlParser.EQ);
				this.state = 1357;
				this.constant();
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
	public namespace(): NamespaceContext {
		let localctx: NamespaceContext = new NamespaceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, SparkSqlParser.RULE_namespace);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1360;
			_la = this._input.LA(1);
			if(!(_la===61 || _la===145 || _la===200)) {
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
	public describeFuncName(): DescribeFuncNameContext {
		let localctx: DescribeFuncNameContext = new DescribeFuncNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, SparkSqlParser.RULE_describeFuncName);
		try {
			this.state = 1367;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1362;
				this.qualifiedName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1363;
				this.match(SparkSqlParser.STRING);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1364;
				this.comparisonOperator();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1365;
				this.arithmeticOperator();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1366;
				this.predicateOperator();
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
	public describeColName(): DescribeColNameContext {
		let localctx: DescribeColNameContext = new DescribeColNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, SparkSqlParser.RULE_describeColName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1369;
			localctx._identifier = this.identifier();
			localctx._nameParts.push(localctx._identifier);
			this.state = 1374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 1370;
				this.match(SparkSqlParser.T__3);
				this.state = 1371;
				localctx._identifier = this.identifier();
				localctx._nameParts.push(localctx._identifier);
				}
				}
				this.state = 1376;
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
	public ctes(): CtesContext {
		let localctx: CtesContext = new CtesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, SparkSqlParser.RULE_ctes);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1377;
			this.match(SparkSqlParser.WITH);
			this.state = 1378;
			this.namedQuery();
			this.state = 1383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 1379;
				this.match(SparkSqlParser.T__2);
				this.state = 1380;
				this.namedQuery();
				}
				}
				this.state = 1385;
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
	public namedQuery(): NamedQueryContext {
		let localctx: NamedQueryContext = new NamedQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, SparkSqlParser.RULE_namedQuery);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1386;
			localctx._name = this.errorCapturingIdentifier();
			this.state = 1388;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				{
				this.state = 1387;
				localctx._columnAliases = this.identifierList();
				}
				break;
			}
			this.state = 1391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===21) {
				{
				this.state = 1390;
				this.match(SparkSqlParser.AS);
				}
			}

			this.state = 1393;
			this.match(SparkSqlParser.T__0);
			this.state = 1394;
			this.query();
			this.state = 1395;
			this.match(SparkSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tableProvider(): TableProviderContext {
		let localctx: TableProviderContext = new TableProviderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, SparkSqlParser.RULE_tableProvider);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1397;
			this.match(SparkSqlParser.USING);
			this.state = 1398;
			this.multipartIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createTableClauses(): CreateTableClausesContext {
		let localctx: CreateTableClausesContext = new CreateTableClausesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, SparkSqlParser.RULE_createTableClauses);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1412;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 151, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 1410;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 156:
						{
						{
						this.state = 1400;
						this.match(SparkSqlParser.OPTIONS);
						this.state = 1401;
						this.tablePropertyList();
						}
						}
						break;
					case 167:
						{
						{
						this.state = 1402;
						this.match(SparkSqlParser.PARTITIONED);
						this.state = 1403;
						this.match(SparkSqlParser.BY);
						this.state = 1404;
						localctx._partitioning = this.transformList();
						}
						}
						break;
					case 38:
						{
						this.state = 1405;
						this.bucketSpec();
						}
						break;
					case 136:
						{
						this.state = 1406;
						this.locationSpec();
						}
						break;
					case 44:
						{
						this.state = 1407;
						this.commentSpec();
						}
						break;
					case 225:
						{
						{
						this.state = 1408;
						this.match(SparkSqlParser.TBLPROPERTIES);
						this.state = 1409;
						localctx._tableProps = this.tablePropertyList();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 1414;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 151, this._ctx);
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
	public tablePropertyList(): TablePropertyListContext {
		let localctx: TablePropertyListContext = new TablePropertyListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, SparkSqlParser.RULE_tablePropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1415;
			this.match(SparkSqlParser.T__0);
			this.state = 1416;
			this.tableProperty();
			this.state = 1421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 1417;
				this.match(SparkSqlParser.T__2);
				this.state = 1418;
				this.tableProperty();
				}
				}
				this.state = 1423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1424;
			this.match(SparkSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tableProperty(): TablePropertyContext {
		let localctx: TablePropertyContext = new TablePropertyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, SparkSqlParser.RULE_tableProperty);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1426;
			localctx._key = this.tablePropertyKey();
			this.state = 1431;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===88 || _la===237 || _la===260 || ((((_la - 279)) & ~0x1F) === 0 && ((1 << (_la - 279)) & 81) !== 0)) {
				{
				this.state = 1428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===260) {
					{
					this.state = 1427;
					this.match(SparkSqlParser.EQ);
					}
				}

				this.state = 1430;
				localctx._value = this.tablePropertyValue();
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
	public tablePropertyKey(): TablePropertyKeyContext {
		let localctx: TablePropertyKeyContext = new TablePropertyKeyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, SparkSqlParser.RULE_tablePropertyKey);
		let _la: number;
		try {
			this.state = 1442;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1433;
				this.identifier();
				this.state = 1438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 1434;
					this.match(SparkSqlParser.T__3);
					this.state = 1435;
					this.identifier();
					}
					}
					this.state = 1440;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1441;
				this.match(SparkSqlParser.STRING);
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
	public tablePropertyValue(): TablePropertyValueContext {
		let localctx: TablePropertyValueContext = new TablePropertyValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, SparkSqlParser.RULE_tablePropertyValue);
		try {
			this.state = 1448;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 283:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1444;
				this.match(SparkSqlParser.INTEGER_VALUE);
				}
				break;
			case 285:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1445;
				this.match(SparkSqlParser.DECIMAL_VALUE);
				}
				break;
			case 88:
			case 237:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1446;
				this.booleanValue();
				}
				break;
			case 279:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1447;
				this.match(SparkSqlParser.STRING);
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
	public constantList(): ConstantListContext {
		let localctx: ConstantListContext = new ConstantListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, SparkSqlParser.RULE_constantList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1450;
			this.match(SparkSqlParser.T__0);
			this.state = 1451;
			this.constant();
			this.state = 1456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 1452;
				this.match(SparkSqlParser.T__2);
				this.state = 1453;
				this.constant();
				}
				}
				this.state = 1458;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1459;
			this.match(SparkSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nestedConstantList(): NestedConstantListContext {
		let localctx: NestedConstantListContext = new NestedConstantListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, SparkSqlParser.RULE_nestedConstantList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1461;
			this.match(SparkSqlParser.T__0);
			this.state = 1462;
			this.constantList();
			this.state = 1467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 1463;
				this.match(SparkSqlParser.T__2);
				this.state = 1464;
				this.constantList();
				}
				}
				this.state = 1469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1470;
			this.match(SparkSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createFileFormat(): CreateFileFormatContext {
		let localctx: CreateFileFormatContext = new CreateFileFormatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, SparkSqlParser.RULE_createFileFormat);
		try {
			this.state = 1478;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1472;
				this.match(SparkSqlParser.STORED);
				this.state = 1473;
				this.match(SparkSqlParser.AS);
				this.state = 1474;
				this.fileFormat();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1475;
				this.match(SparkSqlParser.STORED);
				this.state = 1476;
				this.match(SparkSqlParser.BY);
				this.state = 1477;
				this.storageHandler();
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
	public fileFormat(): FileFormatContext {
		let localctx: FileFormatContext = new FileFormatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, SparkSqlParser.RULE_fileFormat);
		try {
			this.state = 1485;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				localctx = new TableFileFormatContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1480;
				this.match(SparkSqlParser.INPUTFORMAT);
				this.state = 1481;
				(localctx as TableFileFormatContext)._inFmt = this.match(SparkSqlParser.STRING);
				this.state = 1482;
				this.match(SparkSqlParser.OUTPUTFORMAT);
				this.state = 1483;
				(localctx as TableFileFormatContext)._outFmt = this.match(SparkSqlParser.STRING);
				}
				break;
			case 2:
				localctx = new GenericFileFormatContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1484;
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
	public storageHandler(): StorageHandlerContext {
		let localctx: StorageHandlerContext = new StorageHandlerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, SparkSqlParser.RULE_storageHandler);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1487;
			this.match(SparkSqlParser.STRING);
			this.state = 1491;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				{
				this.state = 1488;
				this.match(SparkSqlParser.WITH);
				this.state = 1489;
				this.match(SparkSqlParser.SERDEPROPERTIES);
				this.state = 1490;
				this.tablePropertyList();
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
	public resource(): ResourceContext {
		let localctx: ResourceContext = new ResourceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, SparkSqlParser.RULE_resource);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1493;
			this.identifier();
			this.state = 1494;
			this.match(SparkSqlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dmlStatementNoWith(): DmlStatementNoWithContext {
		let localctx: DmlStatementNoWithContext = new DmlStatementNoWithContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, SparkSqlParser.RULE_dmlStatementNoWith);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1547;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 117:
				localctx = new SingleInsertQueryContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1496;
				this.insertInto();
				this.state = 1497;
				this.queryTerm(0);
				this.state = 1498;
				this.queryOrganization();
				}
				break;
			case 99:
				localctx = new MultiInsertQueryContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1500;
				this.fromClause();
				this.state = 1502;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1501;
						this.multiInsertQueryBody();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1504;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 163, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 65:
				localctx = new DeleteFromTableContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1506;
				this.match(SparkSqlParser.DELETE);
				this.state = 1507;
				this.match(SparkSqlParser.FROM);
				this.state = 1508;
				this.multipartIdentifier();
				this.state = 1509;
				this.tableAlias();
				this.state = 1511;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===256) {
					{
					this.state = 1510;
					this.whereClause();
					}
				}

				}
				break;
			case 248:
				localctx = new UpdateTableContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1513;
				this.match(SparkSqlParser.UPDATE);
				this.state = 1514;
				this.multipartIdentifier();
				this.state = 1515;
				this.tableAlias();
				this.state = 1516;
				this.setClause();
				this.state = 1518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===256) {
					{
					this.state = 1517;
					this.whereClause();
					}
				}

				}
				break;
			case 143:
				localctx = new MergeIntoTableContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1520;
				this.match(SparkSqlParser.MERGE);
				this.state = 1521;
				this.match(SparkSqlParser.INTO);
				this.state = 1522;
				(localctx as MergeIntoTableContext)._target = this.multipartIdentifier();
				this.state = 1523;
				(localctx as MergeIntoTableContext)._targetAlias = this.tableAlias();
				this.state = 1524;
				this.match(SparkSqlParser.USING);
				this.state = 1530;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 166, this._ctx) ) {
				case 1:
					{
					this.state = 1525;
					(localctx as MergeIntoTableContext)._source = this.multipartIdentifier();
					}
					break;
				case 2:
					{
					this.state = 1526;
					this.match(SparkSqlParser.T__0);
					this.state = 1527;
					(localctx as MergeIntoTableContext)._sourceQuery = this.query();
					this.state = 1528;
					this.match(SparkSqlParser.T__1);
					}
					break;
				}
				this.state = 1532;
				(localctx as MergeIntoTableContext)._sourceAlias = this.tableAlias();
				this.state = 1533;
				this.match(SparkSqlParser.ON);
				this.state = 1534;
				(localctx as MergeIntoTableContext)._mergeCondition = this.booleanExpression(0);
				this.state = 1538;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 167, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1535;
						this.matchedClause();
						}
						}
					}
					this.state = 1540;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 167, this._ctx);
				}
				this.state = 1544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===255) {
					{
					{
					this.state = 1541;
					this.notMatchedClause();
					}
					}
					this.state = 1546;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
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
	public queryOrganization(): QueryOrganizationContext {
		let localctx: QueryOrganizationContext = new QueryOrganizationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, SparkSqlParser.RULE_queryOrganization);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1559;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 171, this._ctx) ) {
			case 1:
				{
				this.state = 1549;
				this.match(SparkSqlParser.ORDER);
				this.state = 1550;
				this.match(SparkSqlParser.BY);
				this.state = 1551;
				localctx._sortItem = this.sortItem();
				localctx._order.push(localctx._sortItem);
				this.state = 1556;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 170, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1552;
						this.match(SparkSqlParser.T__2);
						this.state = 1553;
						localctx._sortItem = this.sortItem();
						localctx._order.push(localctx._sortItem);
						}
						}
					}
					this.state = 1558;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 170, this._ctx);
				}
				}
				break;
			}
			this.state = 1571;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				{
				this.state = 1561;
				this.match(SparkSqlParser.CLUSTER);
				this.state = 1562;
				this.match(SparkSqlParser.BY);
				this.state = 1563;
				localctx._expression = this.expression();
				localctx._clusterBy.push(localctx._expression);
				this.state = 1568;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 172, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1564;
						this.match(SparkSqlParser.T__2);
						this.state = 1565;
						localctx._expression = this.expression();
						localctx._clusterBy.push(localctx._expression);
						}
						}
					}
					this.state = 1570;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 172, this._ctx);
				}
				}
				break;
			}
			this.state = 1583;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				{
				this.state = 1573;
				this.match(SparkSqlParser.DISTRIBUTE);
				this.state = 1574;
				this.match(SparkSqlParser.BY);
				this.state = 1575;
				localctx._expression = this.expression();
				localctx._distributeBy.push(localctx._expression);
				this.state = 1580;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 174, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1576;
						this.match(SparkSqlParser.T__2);
						this.state = 1577;
						localctx._expression = this.expression();
						localctx._distributeBy.push(localctx._expression);
						}
						}
					}
					this.state = 1582;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 174, this._ctx);
				}
				}
				break;
			}
			this.state = 1595;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				{
				this.state = 1585;
				this.match(SparkSqlParser.SORT);
				this.state = 1586;
				this.match(SparkSqlParser.BY);
				this.state = 1587;
				localctx._sortItem = this.sortItem();
				localctx._sort.push(localctx._sortItem);
				this.state = 1592;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 176, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1588;
						this.match(SparkSqlParser.T__2);
						this.state = 1589;
						localctx._sortItem = this.sortItem();
						localctx._sort.push(localctx._sortItem);
						}
						}
					}
					this.state = 1594;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 176, this._ctx);
				}
				}
				break;
			}
			this.state = 1598;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1597;
				this.windowClause();
				}
				break;
			}
			this.state = 1605;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				{
				this.state = 1600;
				this.match(SparkSqlParser.LIMIT);
				this.state = 1603;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 179, this._ctx) ) {
				case 1:
					{
					this.state = 1601;
					this.match(SparkSqlParser.ALL);
					}
					break;
				case 2:
					{
					this.state = 1602;
					localctx._limit = this.expression();
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
	public multiInsertQueryBody(): MultiInsertQueryBodyContext {
		let localctx: MultiInsertQueryBodyContext = new MultiInsertQueryBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, SparkSqlParser.RULE_multiInsertQueryBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1607;
			this.insertInto();
			this.state = 1608;
			this.fromStatementBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		let _startState: number = 84;
		this.enterRecursionRule(localctx, 84, SparkSqlParser.RULE_queryTerm, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new QueryTermDefaultContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 1611;
			this.queryPrimary();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1636;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 185, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1634;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 184, this._ctx) ) {
					case 1:
						{
						localctx = new SetOperationContext(this, new QueryTermContext(this, _parentctx, _parentState));
						(localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, SparkSqlParser.RULE_queryTerm);
						this.state = 1613;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1614;
						if (!(legacy_setops_precedence_enbled)) {
							throw this.createFailedPredicateException("legacy_setops_precedence_enbled");
						}
						this.state = 1615;
						(localctx as SetOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===80 || _la===118 || _la===208 || _la===243)) {
						    (localctx as SetOperationContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1617;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===13 || _la===72) {
							{
							this.state = 1616;
							this.setQuantifier();
							}
						}

						this.state = 1619;
						(localctx as SetOperationContext)._right = this.queryTerm(4);
						}
						break;
					case 2:
						{
						localctx = new SetOperationContext(this, new QueryTermContext(this, _parentctx, _parentState));
						(localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, SparkSqlParser.RULE_queryTerm);
						this.state = 1620;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1621;
						if (!(!legacy_setops_precedence_enbled)) {
							throw this.createFailedPredicateException("!legacy_setops_precedence_enbled");
						}
						this.state = 1622;
						(localctx as SetOperationContext)._operator = this.match(SparkSqlParser.INTERSECT);
						this.state = 1624;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===13 || _la===72) {
							{
							this.state = 1623;
							this.setQuantifier();
							}
						}

						this.state = 1626;
						(localctx as SetOperationContext)._right = this.queryTerm(3);
						}
						break;
					case 3:
						{
						localctx = new SetOperationContext(this, new QueryTermContext(this, _parentctx, _parentState));
						(localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, SparkSqlParser.RULE_queryTerm);
						this.state = 1627;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1628;
						if (!(!legacy_setops_precedence_enbled)) {
							throw this.createFailedPredicateException("!legacy_setops_precedence_enbled");
						}
						this.state = 1629;
						(localctx as SetOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===80 || _la===208 || _la===243)) {
						    (localctx as SetOperationContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1631;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===13 || _la===72) {
							{
							this.state = 1630;
							this.setQuantifier();
							}
						}

						this.state = 1633;
						(localctx as SetOperationContext)._right = this.queryTerm(2);
						}
						break;
					}
					}
				}
				this.state = 1638;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 185, this._ctx);
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
		this.enterRule(localctx, 86, SparkSqlParser.RULE_queryPrimary);
		try {
			this.state = 1648;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 141:
			case 183:
			case 201:
				localctx = new QueryPrimaryDefaultContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1639;
				this.querySpecification();
				}
				break;
			case 99:
				localctx = new FromStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1640;
				this.fromStatement();
				}
				break;
			case 222:
				localctx = new TableContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1641;
				this.match(SparkSqlParser.TABLE);
				this.state = 1642;
				this.multipartIdentifier();
				}
				break;
			case 252:
				localctx = new InlineTableDefault1Context(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1643;
				this.inlineTable();
				}
				break;
			case 1:
				localctx = new SubqueryContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1644;
				this.match(SparkSqlParser.T__0);
				this.state = 1645;
				this.query();
				this.state = 1646;
				this.match(SparkSqlParser.T__1);
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
		this.enterRule(localctx, 88, SparkSqlParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1650;
			this.expression();
			this.state = 1652;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 187, this._ctx) ) {
			case 1:
				{
				this.state = 1651;
				localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===22 || _la===67)) {
				    localctx._ordering = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this.state = 1656;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 188, this._ctx) ) {
			case 1:
				{
				this.state = 1654;
				this.match(SparkSqlParser.NULLS);
				this.state = 1655;
				localctx._nullOrder = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===93 || _la===125)) {
				    localctx._nullOrder = this._errHandler.recoverInline(this);
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
	public fromStatement(): FromStatementContext {
		let localctx: FromStatementContext = new FromStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, SparkSqlParser.RULE_fromStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1658;
			this.fromClause();
			this.state = 1660;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1659;
					this.fromStatementBody();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1662;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 189, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fromStatementBody(): FromStatementBodyContext {
		let localctx: FromStatementBodyContext = new FromStatementBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, SparkSqlParser.RULE_fromStatementBody);
		try {
			let _alt: number;
			this.state = 1691;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1664;
				this.transformClause();
				this.state = 1666;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 190, this._ctx) ) {
				case 1:
					{
					this.state = 1665;
					this.whereClause();
					}
					break;
				}
				this.state = 1668;
				this.queryOrganization();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1670;
				this.selectClause();
				this.state = 1674;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 191, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1671;
						this.lateralView();
						}
						}
					}
					this.state = 1676;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 191, this._ctx);
				}
				this.state = 1678;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
				case 1:
					{
					this.state = 1677;
					this.whereClause();
					}
					break;
				}
				this.state = 1681;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 193, this._ctx) ) {
				case 1:
					{
					this.state = 1680;
					this.aggregationClause();
					}
					break;
				}
				this.state = 1684;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 194, this._ctx) ) {
				case 1:
					{
					this.state = 1683;
					this.havingClause();
					}
					break;
				}
				this.state = 1687;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 195, this._ctx) ) {
				case 1:
					{
					this.state = 1686;
					this.windowClause();
					}
					break;
				}
				this.state = 1689;
				this.queryOrganization();
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
	public querySpecification(): QuerySpecificationContext {
		let localctx: QuerySpecificationContext = new QuerySpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, SparkSqlParser.RULE_querySpecification);
		try {
			let _alt: number;
			this.state = 1722;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				localctx = new TransformQuerySpecificationContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1693;
				this.transformClause();
				this.state = 1695;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 197, this._ctx) ) {
				case 1:
					{
					this.state = 1694;
					this.fromClause();
					}
					break;
				}
				this.state = 1698;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 198, this._ctx) ) {
				case 1:
					{
					this.state = 1697;
					this.whereClause();
					}
					break;
				}
				}
				break;
			case 2:
				localctx = new RegularQuerySpecificationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1700;
				this.selectClause();
				this.state = 1702;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 199, this._ctx) ) {
				case 1:
					{
					this.state = 1701;
					this.fromClause();
					}
					break;
				}
				this.state = 1707;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 200, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1704;
						this.lateralView();
						}
						}
					}
					this.state = 1709;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 200, this._ctx);
				}
				this.state = 1711;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 201, this._ctx) ) {
				case 1:
					{
					this.state = 1710;
					this.whereClause();
					}
					break;
				}
				this.state = 1714;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
				case 1:
					{
					this.state = 1713;
					this.aggregationClause();
					}
					break;
				}
				this.state = 1717;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
				case 1:
					{
					this.state = 1716;
					this.havingClause();
					}
					break;
				}
				this.state = 1720;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 204, this._ctx) ) {
				case 1:
					{
					this.state = 1719;
					this.windowClause();
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
	public transformClause(): TransformClauseContext {
		let localctx: TransformClauseContext = new TransformClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, SparkSqlParser.RULE_transformClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1734;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 201:
				{
				this.state = 1724;
				this.match(SparkSqlParser.SELECT);
				this.state = 1725;
				localctx._kind = this.match(SparkSqlParser.TRANSFORM);
				this.state = 1726;
				this.match(SparkSqlParser.T__0);
				this.state = 1727;
				this.namedExpressionSeq();
				this.state = 1728;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 141:
				{
				this.state = 1730;
				localctx._kind = this.match(SparkSqlParser.MAP);
				this.state = 1731;
				this.namedExpressionSeq();
				}
				break;
			case 183:
				{
				this.state = 1732;
				localctx._kind = this.match(SparkSqlParser.REDUCE);
				this.state = 1733;
				this.namedExpressionSeq();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1737;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===198) {
				{
				this.state = 1736;
				localctx._inRowFormat = this.rowFormat();
				}
			}

			this.state = 1741;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===181) {
				{
				this.state = 1739;
				this.match(SparkSqlParser.RECORDWRITER);
				this.state = 1740;
				localctx._recordWriter = this.match(SparkSqlParser.STRING);
				}
			}

			this.state = 1743;
			this.match(SparkSqlParser.USING);
			this.state = 1744;
			localctx._script = this.match(SparkSqlParser.STRING);
			this.state = 1757;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				{
				this.state = 1745;
				this.match(SparkSqlParser.AS);
				this.state = 1755;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 210, this._ctx) ) {
				case 1:
					{
					this.state = 1746;
					this.identifierSeq();
					}
					break;
				case 2:
					{
					this.state = 1747;
					this.colTypeList();
					}
					break;
				case 3:
					{
					{
					this.state = 1748;
					this.match(SparkSqlParser.T__0);
					this.state = 1751;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
					case 1:
						{
						this.state = 1749;
						this.identifierSeq();
						}
						break;
					case 2:
						{
						this.state = 1750;
						this.colTypeList();
						}
						break;
					}
					this.state = 1753;
					this.match(SparkSqlParser.T__1);
					}
					}
					break;
				}
				}
				break;
			}
			this.state = 1760;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 212, this._ctx) ) {
			case 1:
				{
				this.state = 1759;
				localctx._outRowFormat = this.rowFormat();
				}
				break;
			}
			this.state = 1764;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 213, this._ctx) ) {
			case 1:
				{
				this.state = 1762;
				this.match(SparkSqlParser.RECORDREADER);
				this.state = 1763;
				localctx._recordReader = this.match(SparkSqlParser.STRING);
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
	public selectClause(): SelectClauseContext {
		let localctx: SelectClauseContext = new SelectClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, SparkSqlParser.RULE_selectClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1766;
			this.match(SparkSqlParser.SELECT);
			this.state = 1770;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 214, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1767;
					localctx._hint = this.hint();
					localctx._hints.push(localctx._hint);
					}
					}
				}
				this.state = 1772;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 214, this._ctx);
			}
			this.state = 1774;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 215, this._ctx) ) {
			case 1:
				{
				this.state = 1773;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1776;
			this.namedExpressionSeq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setClause(): SetClauseContext {
		let localctx: SetClauseContext = new SetClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, SparkSqlParser.RULE_setClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1778;
			this.match(SparkSqlParser.SET);
			this.state = 1779;
			this.assignmentList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public matchedClause(): MatchedClauseContext {
		let localctx: MatchedClauseContext = new MatchedClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, SparkSqlParser.RULE_matchedClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1781;
			this.match(SparkSqlParser.WHEN);
			this.state = 1782;
			this.match(SparkSqlParser.MATCHED);
			this.state = 1785;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1783;
				this.match(SparkSqlParser.AND);
				this.state = 1784;
				localctx._matchedCond = this.booleanExpression(0);
				}
			}

			this.state = 1787;
			this.match(SparkSqlParser.THEN);
			this.state = 1788;
			this.matchedAction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public notMatchedClause(): NotMatchedClauseContext {
		let localctx: NotMatchedClauseContext = new NotMatchedClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, SparkSqlParser.RULE_notMatchedClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1790;
			this.match(SparkSqlParser.WHEN);
			this.state = 1791;
			this.match(SparkSqlParser.NOT);
			this.state = 1792;
			this.match(SparkSqlParser.MATCHED);
			this.state = 1795;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1793;
				this.match(SparkSqlParser.AND);
				this.state = 1794;
				localctx._notMatchedCond = this.booleanExpression(0);
				}
			}

			this.state = 1797;
			this.match(SparkSqlParser.THEN);
			this.state = 1798;
			this.notMatchedAction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public matchedAction(): MatchedActionContext {
		let localctx: MatchedActionContext = new MatchedActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, SparkSqlParser.RULE_matchedAction);
		try {
			this.state = 1807;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 218, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1800;
				this.match(SparkSqlParser.DELETE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1801;
				this.match(SparkSqlParser.UPDATE);
				this.state = 1802;
				this.match(SparkSqlParser.SET);
				this.state = 1803;
				this.match(SparkSqlParser.ASTERISK);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1804;
				this.match(SparkSqlParser.UPDATE);
				this.state = 1805;
				this.match(SparkSqlParser.SET);
				this.state = 1806;
				this.assignmentList();
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
	public notMatchedAction(): NotMatchedActionContext {
		let localctx: NotMatchedActionContext = new NotMatchedActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, SparkSqlParser.RULE_notMatchedAction);
		let _la: number;
		try {
			this.state = 1827;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 220, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1809;
				this.match(SparkSqlParser.INSERT);
				this.state = 1810;
				this.match(SparkSqlParser.ASTERISK);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1811;
				this.match(SparkSqlParser.INSERT);
				this.state = 1812;
				this.match(SparkSqlParser.T__0);
				this.state = 1813;
				localctx._columns = this.multipartIdentifierList();
				this.state = 1814;
				this.match(SparkSqlParser.T__1);
				this.state = 1815;
				this.match(SparkSqlParser.VALUES);
				this.state = 1816;
				this.match(SparkSqlParser.T__0);
				this.state = 1817;
				this.expression();
				this.state = 1822;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3) {
					{
					{
					this.state = 1818;
					this.match(SparkSqlParser.T__2);
					this.state = 1819;
					this.expression();
					}
					}
					this.state = 1824;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1825;
				this.match(SparkSqlParser.T__1);
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
	public assignmentList(): AssignmentListContext {
		let localctx: AssignmentListContext = new AssignmentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, SparkSqlParser.RULE_assignmentList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1829;
			this.assignment();
			this.state = 1834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 1830;
				this.match(SparkSqlParser.T__2);
				this.state = 1831;
				this.assignment();
				}
				}
				this.state = 1836;
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
	public assignment(): AssignmentContext {
		let localctx: AssignmentContext = new AssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, SparkSqlParser.RULE_assignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1837;
			localctx._key = this.multipartIdentifier();
			this.state = 1838;
			this.match(SparkSqlParser.EQ);
			this.state = 1839;
			localctx._value = this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whereClause(): WhereClauseContext {
		let localctx: WhereClauseContext = new WhereClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, SparkSqlParser.RULE_whereClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1841;
			this.match(SparkSqlParser.WHERE);
			this.state = 1842;
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
	// @RuleVersion(0)
	public havingClause(): HavingClauseContext {
		let localctx: HavingClauseContext = new HavingClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, SparkSqlParser.RULE_havingClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1844;
			this.match(SparkSqlParser.HAVING);
			this.state = 1845;
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
	// @RuleVersion(0)
	public hint(): HintContext {
		let localctx: HintContext = new HintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, SparkSqlParser.RULE_hint);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1847;
			this.match(SparkSqlParser.T__4);
			this.state = 1848;
			localctx._hintStatement = this.hintStatement();
			localctx._hintStatements.push(localctx._hintStatement);
			this.state = 1855;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 223, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1850;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 222, this._ctx) ) {
					case 1:
						{
						this.state = 1849;
						this.match(SparkSqlParser.T__2);
						}
						break;
					}
					this.state = 1852;
					localctx._hintStatement = this.hintStatement();
					localctx._hintStatements.push(localctx._hintStatement);
					}
					}
				}
				this.state = 1857;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 223, this._ctx);
			}
			this.state = 1858;
			this.match(SparkSqlParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hintStatement(): HintStatementContext {
		let localctx: HintStatementContext = new HintStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, SparkSqlParser.RULE_hintStatement);
		let _la: number;
		try {
			this.state = 1873;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 225, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1860;
				localctx._hintName = this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1861;
				localctx._hintName = this.identifier();
				this.state = 1862;
				this.match(SparkSqlParser.T__0);
				this.state = 1863;
				localctx._primaryExpression = this.primaryExpression(0);
				localctx._parameters.push(localctx._primaryExpression);
				this.state = 1868;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3) {
					{
					{
					this.state = 1864;
					this.match(SparkSqlParser.T__2);
					this.state = 1865;
					localctx._primaryExpression = this.primaryExpression(0);
					localctx._parameters.push(localctx._primaryExpression);
					}
					}
					this.state = 1870;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1871;
				this.match(SparkSqlParser.T__1);
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
	public fromClause(): FromClauseContext {
		let localctx: FromClauseContext = new FromClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, SparkSqlParser.RULE_fromClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1875;
			this.match(SparkSqlParser.FROM);
			this.state = 1876;
			this.relation();
			this.state = 1881;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 226, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1877;
					this.match(SparkSqlParser.T__2);
					this.state = 1878;
					this.relation();
					}
					}
				}
				this.state = 1883;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 226, this._ctx);
			}
			this.state = 1887;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 227, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1884;
					this.lateralView();
					}
					}
				}
				this.state = 1889;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 227, this._ctx);
			}
			this.state = 1891;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				{
				this.state = 1890;
				this.pivotClause();
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
	public aggregationClause(): AggregationClauseContext {
		let localctx: AggregationClauseContext = new AggregationClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, SparkSqlParser.RULE_aggregationClause);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1937;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 233, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1893;
				this.match(SparkSqlParser.GROUP);
				this.state = 1894;
				this.match(SparkSqlParser.BY);
				this.state = 1895;
				localctx._expression = this.expression();
				localctx._groupingExpressions.push(localctx._expression);
				this.state = 1900;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 229, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1896;
						this.match(SparkSqlParser.T__2);
						this.state = 1897;
						localctx._expression = this.expression();
						localctx._groupingExpressions.push(localctx._expression);
						}
						}
					}
					this.state = 1902;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 229, this._ctx);
				}
				this.state = 1920;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 231, this._ctx) ) {
				case 1:
					{
					this.state = 1903;
					this.match(SparkSqlParser.WITH);
					this.state = 1904;
					localctx._kind = this.match(SparkSqlParser.ROLLUP);
					}
					break;
				case 2:
					{
					this.state = 1905;
					this.match(SparkSqlParser.WITH);
					this.state = 1906;
					localctx._kind = this.match(SparkSqlParser.CUBE);
					}
					break;
				case 3:
					{
					this.state = 1907;
					localctx._kind = this.match(SparkSqlParser.GROUPING);
					this.state = 1908;
					this.match(SparkSqlParser.SETS);
					this.state = 1909;
					this.match(SparkSqlParser.T__0);
					this.state = 1910;
					this.groupingSet();
					this.state = 1915;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===3) {
						{
						{
						this.state = 1911;
						this.match(SparkSqlParser.T__2);
						this.state = 1912;
						this.groupingSet();
						}
						}
						this.state = 1917;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1918;
					this.match(SparkSqlParser.T__1);
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1922;
				this.match(SparkSqlParser.GROUP);
				this.state = 1923;
				this.match(SparkSqlParser.BY);
				this.state = 1924;
				localctx._kind = this.match(SparkSqlParser.GROUPING);
				this.state = 1925;
				this.match(SparkSqlParser.SETS);
				this.state = 1926;
				this.match(SparkSqlParser.T__0);
				this.state = 1927;
				this.groupingSet();
				this.state = 1932;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3) {
					{
					{
					this.state = 1928;
					this.match(SparkSqlParser.T__2);
					this.state = 1929;
					this.groupingSet();
					}
					}
					this.state = 1934;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1935;
				this.match(SparkSqlParser.T__1);
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
		this.enterRule(localctx, 126, SparkSqlParser.RULE_groupingSet);
		let _la: number;
		try {
			this.state = 1952;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 236, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1939;
				this.match(SparkSqlParser.T__0);
				this.state = 1948;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 235, this._ctx) ) {
				case 1:
					{
					this.state = 1940;
					this.expression();
					this.state = 1945;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===3) {
						{
						{
						this.state = 1941;
						this.match(SparkSqlParser.T__2);
						this.state = 1942;
						this.expression();
						}
						}
						this.state = 1947;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				}
				this.state = 1950;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1951;
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
	public pivotClause(): PivotClauseContext {
		let localctx: PivotClauseContext = new PivotClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, SparkSqlParser.RULE_pivotClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1954;
			this.match(SparkSqlParser.PIVOT);
			this.state = 1955;
			this.match(SparkSqlParser.T__0);
			this.state = 1956;
			localctx._aggregates = this.namedExpressionSeq();
			this.state = 1957;
			this.match(SparkSqlParser.FOR);
			this.state = 1958;
			this.pivotColumn();
			this.state = 1959;
			this.match(SparkSqlParser.IN);
			this.state = 1960;
			this.match(SparkSqlParser.T__0);
			this.state = 1961;
			localctx._pivotValue = this.pivotValue();
			localctx._pivotValues.push(localctx._pivotValue);
			this.state = 1966;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 1962;
				this.match(SparkSqlParser.T__2);
				this.state = 1963;
				localctx._pivotValue = this.pivotValue();
				localctx._pivotValues.push(localctx._pivotValue);
				}
				}
				this.state = 1968;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1969;
			this.match(SparkSqlParser.T__1);
			this.state = 1970;
			this.match(SparkSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pivotColumn(): PivotColumnContext {
		let localctx: PivotColumnContext = new PivotColumnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, SparkSqlParser.RULE_pivotColumn);
		let _la: number;
		try {
			this.state = 1984;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 239, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1972;
				localctx._identifier = this.identifier();
				localctx._identifiers.push(localctx._identifier);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1973;
				this.match(SparkSqlParser.T__0);
				this.state = 1974;
				localctx._identifier = this.identifier();
				localctx._identifiers.push(localctx._identifier);
				this.state = 1979;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3) {
					{
					{
					this.state = 1975;
					this.match(SparkSqlParser.T__2);
					this.state = 1976;
					localctx._identifier = this.identifier();
					localctx._identifiers.push(localctx._identifier);
					}
					}
					this.state = 1981;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1982;
				this.match(SparkSqlParser.T__1);
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
	public pivotValue(): PivotValueContext {
		let localctx: PivotValueContext = new PivotValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, SparkSqlParser.RULE_pivotValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1986;
			this.expression();
			this.state = 1991;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 241, this._ctx) ) {
			case 1:
				{
				this.state = 1988;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 240, this._ctx) ) {
				case 1:
					{
					this.state = 1987;
					this.match(SparkSqlParser.AS);
					}
					break;
				}
				this.state = 1990;
				this.identifier();
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
	public lateralView(): LateralViewContext {
		let localctx: LateralViewContext = new LateralViewContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, SparkSqlParser.RULE_lateralView);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1993;
			this.match(SparkSqlParser.LATERAL);
			this.state = 1994;
			this.match(SparkSqlParser.VIEW);
			this.state = 1996;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				{
				this.state = 1995;
				this.match(SparkSqlParser.OUTER);
				}
				break;
			}
			this.state = 1998;
			this.qualifiedName();
			this.state = 1999;
			this.match(SparkSqlParser.T__0);
			this.state = 2008;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 244, this._ctx) ) {
			case 1:
				{
				this.state = 2000;
				this.expression();
				this.state = 2005;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3) {
					{
					{
					this.state = 2001;
					this.match(SparkSqlParser.T__2);
					this.state = 2002;
					this.expression();
					}
					}
					this.state = 2007;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 2010;
			this.match(SparkSqlParser.T__1);
			this.state = 2011;
			localctx._tblName = this.identifier();
			this.state = 2023;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 247, this._ctx) ) {
			case 1:
				{
				this.state = 2013;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 245, this._ctx) ) {
				case 1:
					{
					this.state = 2012;
					this.match(SparkSqlParser.AS);
					}
					break;
				}
				this.state = 2015;
				localctx._identifier = this.identifier();
				localctx._colName.push(localctx._identifier);
				this.state = 2020;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 246, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2016;
						this.match(SparkSqlParser.T__2);
						this.state = 2017;
						localctx._identifier = this.identifier();
						localctx._colName.push(localctx._identifier);
						}
						}
					}
					this.state = 2022;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 246, this._ctx);
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
	public setQuantifier(): SetQuantifierContext {
		let localctx: SetQuantifierContext = new SetQuantifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, SparkSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2025;
			_la = this._input.LA(1);
			if(!(_la===13 || _la===72)) {
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
	public relation(): RelationContext {
		let localctx: RelationContext = new RelationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, SparkSqlParser.RULE_relation);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2027;
			this.relationPrimary();
			this.state = 2031;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 248, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2028;
					this.joinRelation();
					}
					}
				}
				this.state = 2033;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 248, this._ctx);
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
	public joinRelation(): JoinRelationContext {
		let localctx: JoinRelationContext = new JoinRelationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, SparkSqlParser.RULE_joinRelation);
		try {
			this.state = 2045;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 17:
			case 53:
			case 100:
			case 114:
			case 123:
			case 129:
			case 192:
			case 202:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 2034;
				this.joinType();
				}
				this.state = 2035;
				this.match(SparkSqlParser.JOIN);
				this.state = 2036;
				localctx._right = this.relationPrimary();
				this.state = 2038;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 249, this._ctx) ) {
				case 1:
					{
					this.state = 2037;
					this.joinCriteria();
					}
					break;
				}
				}
				break;
			case 147:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2040;
				this.match(SparkSqlParser.NATURAL);
				this.state = 2041;
				this.joinType();
				this.state = 2042;
				this.match(SparkSqlParser.JOIN);
				this.state = 2043;
				localctx._right = this.relationPrimary();
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
	public joinType(): JoinTypeContext {
		let localctx: JoinTypeContext = new JoinTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, SparkSqlParser.RULE_joinType);
		let _la: number;
		try {
			this.state = 2071;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2048;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===114) {
					{
					this.state = 2047;
					this.match(SparkSqlParser.INNER);
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2050;
				this.match(SparkSqlParser.CROSS);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2051;
				this.match(SparkSqlParser.LEFT);
				this.state = 2053;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===160) {
					{
					this.state = 2052;
					this.match(SparkSqlParser.OUTER);
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2056;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===129) {
					{
					this.state = 2055;
					this.match(SparkSqlParser.LEFT);
					}
				}

				this.state = 2058;
				this.match(SparkSqlParser.SEMI);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2059;
				this.match(SparkSqlParser.RIGHT);
				this.state = 2061;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===160) {
					{
					this.state = 2060;
					this.match(SparkSqlParser.OUTER);
					}
				}

				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2063;
				this.match(SparkSqlParser.FULL);
				this.state = 2065;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===160) {
					{
					this.state = 2064;
					this.match(SparkSqlParser.OUTER);
					}
				}

				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2068;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===129) {
					{
					this.state = 2067;
					this.match(SparkSqlParser.LEFT);
					}
				}

				this.state = 2070;
				this.match(SparkSqlParser.ANTI);
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
	public joinCriteria(): JoinCriteriaContext {
		let localctx: JoinCriteriaContext = new JoinCriteriaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, SparkSqlParser.RULE_joinCriteria);
		try {
			this.state = 2077;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 153:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2073;
				this.match(SparkSqlParser.ON);
				this.state = 2074;
				this.booleanExpression(0);
				}
				break;
			case 251:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2075;
				this.match(SparkSqlParser.USING);
				this.state = 2076;
				this.identifierList();
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
	public sample(): SampleContext {
		let localctx: SampleContext = new SampleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, SparkSqlParser.RULE_sample);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2079;
			this.match(SparkSqlParser.TABLESAMPLE);
			this.state = 2080;
			this.match(SparkSqlParser.T__0);
			this.state = 2082;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 259, this._ctx) ) {
			case 1:
				{
				this.state = 2081;
				this.sampleMethod();
				}
				break;
			}
			this.state = 2084;
			this.match(SparkSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sampleMethod(): SampleMethodContext {
		let localctx: SampleMethodContext = new SampleMethodContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, SparkSqlParser.RULE_sampleMethod);
		let _la: number;
		try {
			this.state = 2110;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 263, this._ctx) ) {
			case 1:
				localctx = new SampleByPercentileContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2087;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===269) {
					{
					this.state = 2086;
					(localctx as SampleByPercentileContext)._negativeSign = this.match(SparkSqlParser.MINUS);
					}
				}

				this.state = 2089;
				(localctx as SampleByPercentileContext)._percentage = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===283 || _la===285)) {
				    (localctx as SampleByPercentileContext)._percentage = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2090;
				this.match(SparkSqlParser.PERCENTLIT);
				}
				break;
			case 2:
				localctx = new SampleByRowsContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2091;
				this.expression();
				this.state = 2092;
				this.match(SparkSqlParser.ROWS);
				}
				break;
			case 3:
				localctx = new SampleByBucketContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2094;
				(localctx as SampleByBucketContext)._sampleType = this.match(SparkSqlParser.BUCKET);
				this.state = 2095;
				(localctx as SampleByBucketContext)._numerator = this.match(SparkSqlParser.INTEGER_VALUE);
				this.state = 2096;
				this.match(SparkSqlParser.OUT);
				this.state = 2097;
				this.match(SparkSqlParser.OF);
				this.state = 2098;
				(localctx as SampleByBucketContext)._denominator = this.match(SparkSqlParser.INTEGER_VALUE);
				this.state = 2107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===153) {
					{
					this.state = 2099;
					this.match(SparkSqlParser.ON);
					this.state = 2105;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 261, this._ctx) ) {
					case 1:
						{
						this.state = 2100;
						this.identifier();
						}
						break;
					case 2:
						{
						this.state = 2101;
						this.qualifiedName();
						this.state = 2102;
						this.match(SparkSqlParser.T__0);
						this.state = 2103;
						this.match(SparkSqlParser.T__1);
						}
						break;
					}
					}
				}

				}
				break;
			case 4:
				localctx = new SampleByBytesContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2109;
				(localctx as SampleByBytesContext)._bytes = this.expression();
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
	public identifierList(): IdentifierListContext {
		let localctx: IdentifierListContext = new IdentifierListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, SparkSqlParser.RULE_identifierList);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2112;
			this.match(SparkSqlParser.T__0);
			this.state = 2113;
			this.identifierSeq();
			this.state = 2114;
			this.match(SparkSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierSeq(): IdentifierSeqContext {
		let localctx: IdentifierSeqContext = new IdentifierSeqContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, SparkSqlParser.RULE_identifierSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2116;
			localctx._errorCapturingIdentifier = this.errorCapturingIdentifier();
			localctx._ident.push(localctx._errorCapturingIdentifier);
			this.state = 2121;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 264, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2117;
					this.match(SparkSqlParser.T__2);
					this.state = 2118;
					localctx._errorCapturingIdentifier = this.errorCapturingIdentifier();
					localctx._ident.push(localctx._errorCapturingIdentifier);
					}
					}
				}
				this.state = 2123;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 264, this._ctx);
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
	public orderedIdentifierList(): OrderedIdentifierListContext {
		let localctx: OrderedIdentifierListContext = new OrderedIdentifierListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, SparkSqlParser.RULE_orderedIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2124;
			this.match(SparkSqlParser.T__0);
			this.state = 2125;
			this.orderedIdentifier();
			this.state = 2130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 2126;
				this.match(SparkSqlParser.T__2);
				this.state = 2127;
				this.orderedIdentifier();
				}
				}
				this.state = 2132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2133;
			this.match(SparkSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public orderedIdentifier(): OrderedIdentifierContext {
		let localctx: OrderedIdentifierContext = new OrderedIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, SparkSqlParser.RULE_orderedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2135;
			localctx._ident = this.errorCapturingIdentifier();
			this.state = 2137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===22 || _la===67) {
				{
				this.state = 2136;
				localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===22 || _la===67)) {
				    localctx._ordering = this._errHandler.recoverInline(this);
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
	public identifierCommentList(): IdentifierCommentListContext {
		let localctx: IdentifierCommentListContext = new IdentifierCommentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, SparkSqlParser.RULE_identifierCommentList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2139;
			this.match(SparkSqlParser.T__0);
			this.state = 2140;
			this.identifierComment();
			this.state = 2145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 2141;
				this.match(SparkSqlParser.T__2);
				this.state = 2142;
				this.identifierComment();
				}
				}
				this.state = 2147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2148;
			this.match(SparkSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierComment(): IdentifierCommentContext {
		let localctx: IdentifierCommentContext = new IdentifierCommentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, SparkSqlParser.RULE_identifierComment);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2150;
			this.identifier();
			this.state = 2152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===44) {
				{
				this.state = 2151;
				this.commentSpec();
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
	public relationPrimary(): RelationPrimaryContext {
		let localctx: RelationPrimaryContext = new RelationPrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, SparkSqlParser.RULE_relationPrimary);
		try {
			this.state = 2178;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 272, this._ctx) ) {
			case 1:
				localctx = new TableNameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2154;
				this.multipartIdentifier();
				this.state = 2156;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 269, this._ctx) ) {
				case 1:
					{
					this.state = 2155;
					this.sample();
					}
					break;
				}
				this.state = 2158;
				this.tableAlias();
				}
				break;
			case 2:
				localctx = new AliasedQueryContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2160;
				this.match(SparkSqlParser.T__0);
				this.state = 2161;
				this.query();
				this.state = 2162;
				this.match(SparkSqlParser.T__1);
				this.state = 2164;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 270, this._ctx) ) {
				case 1:
					{
					this.state = 2163;
					this.sample();
					}
					break;
				}
				this.state = 2166;
				this.tableAlias();
				}
				break;
			case 3:
				localctx = new AliasedRelationContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2168;
				this.match(SparkSqlParser.T__0);
				this.state = 2169;
				this.relation();
				this.state = 2170;
				this.match(SparkSqlParser.T__1);
				this.state = 2172;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 271, this._ctx) ) {
				case 1:
					{
					this.state = 2171;
					this.sample();
					}
					break;
				}
				this.state = 2174;
				this.tableAlias();
				}
				break;
			case 4:
				localctx = new InlineTableDefault2Context(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2176;
				this.inlineTable();
				}
				break;
			case 5:
				localctx = new TableValuedFunctionContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2177;
				this.functionTable();
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
	public inlineTable(): InlineTableContext {
		let localctx: InlineTableContext = new InlineTableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, SparkSqlParser.RULE_inlineTable);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2180;
			this.match(SparkSqlParser.VALUES);
			this.state = 2181;
			this.expression();
			this.state = 2186;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 273, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2182;
					this.match(SparkSqlParser.T__2);
					this.state = 2183;
					this.expression();
					}
					}
				}
				this.state = 2188;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 273, this._ctx);
			}
			this.state = 2189;
			this.tableAlias();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionTable(): FunctionTableContext {
		let localctx: FunctionTableContext = new FunctionTableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, SparkSqlParser.RULE_functionTable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2191;
			localctx._funcName = this.errorCapturingIdentifier();
			this.state = 2192;
			this.match(SparkSqlParser.T__0);
			this.state = 2201;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 275, this._ctx) ) {
			case 1:
				{
				this.state = 2193;
				this.expression();
				this.state = 2198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3) {
					{
					{
					this.state = 2194;
					this.match(SparkSqlParser.T__2);
					this.state = 2195;
					this.expression();
					}
					}
					this.state = 2200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 2203;
			this.match(SparkSqlParser.T__1);
			this.state = 2204;
			this.tableAlias();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tableAlias(): TableAliasContext {
		let localctx: TableAliasContext = new TableAliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, SparkSqlParser.RULE_tableAlias);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2213;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 278, this._ctx) ) {
			case 1:
				{
				this.state = 2207;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 276, this._ctx) ) {
				case 1:
					{
					this.state = 2206;
					this.match(SparkSqlParser.AS);
					}
					break;
				}
				this.state = 2209;
				this.strictIdentifier();
				this.state = 2211;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 277, this._ctx) ) {
				case 1:
					{
					this.state = 2210;
					this.identifierList();
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
	public rowFormat(): RowFormatContext {
		let localctx: RowFormatContext = new RowFormatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, SparkSqlParser.RULE_rowFormat);
		try {
			this.state = 2264;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 286, this._ctx) ) {
			case 1:
				localctx = new RowFormatSerdeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2215;
				this.match(SparkSqlParser.ROW);
				this.state = 2216;
				this.match(SparkSqlParser.FORMAT);
				this.state = 2217;
				this.match(SparkSqlParser.SERDE);
				this.state = 2218;
				(localctx as RowFormatSerdeContext)._name = this.match(SparkSqlParser.STRING);
				this.state = 2222;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 279, this._ctx) ) {
				case 1:
					{
					this.state = 2219;
					this.match(SparkSqlParser.WITH);
					this.state = 2220;
					this.match(SparkSqlParser.SERDEPROPERTIES);
					this.state = 2221;
					(localctx as RowFormatSerdeContext)._props = this.tablePropertyList();
					}
					break;
				}
				}
				break;
			case 2:
				localctx = new RowFormatDelimitedContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2224;
				this.match(SparkSqlParser.ROW);
				this.state = 2225;
				this.match(SparkSqlParser.FORMAT);
				this.state = 2226;
				this.match(SparkSqlParser.DELIMITED);
				this.state = 2236;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 281, this._ctx) ) {
				case 1:
					{
					this.state = 2227;
					this.match(SparkSqlParser.FIELDS);
					this.state = 2228;
					this.match(SparkSqlParser.TERMINATED);
					this.state = 2229;
					this.match(SparkSqlParser.BY);
					this.state = 2230;
					(localctx as RowFormatDelimitedContext)._fieldsTerminatedBy = this.match(SparkSqlParser.STRING);
					this.state = 2234;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 280, this._ctx) ) {
					case 1:
						{
						this.state = 2231;
						this.match(SparkSqlParser.ESCAPED);
						this.state = 2232;
						this.match(SparkSqlParser.BY);
						this.state = 2233;
						(localctx as RowFormatDelimitedContext)._escapedBy = this.match(SparkSqlParser.STRING);
						}
						break;
					}
					}
					break;
				}
				this.state = 2243;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 282, this._ctx) ) {
				case 1:
					{
					this.state = 2238;
					this.match(SparkSqlParser.COLLECTION);
					this.state = 2239;
					this.match(SparkSqlParser.ITEMS);
					this.state = 2240;
					this.match(SparkSqlParser.TERMINATED);
					this.state = 2241;
					this.match(SparkSqlParser.BY);
					this.state = 2242;
					(localctx as RowFormatDelimitedContext)._collectionItemsTerminatedBy = this.match(SparkSqlParser.STRING);
					}
					break;
				}
				this.state = 2250;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 283, this._ctx) ) {
				case 1:
					{
					this.state = 2245;
					this.match(SparkSqlParser.MAP);
					this.state = 2246;
					this.match(SparkSqlParser.KEYS);
					this.state = 2247;
					this.match(SparkSqlParser.TERMINATED);
					this.state = 2248;
					this.match(SparkSqlParser.BY);
					this.state = 2249;
					(localctx as RowFormatDelimitedContext)._keysTerminatedBy = this.match(SparkSqlParser.STRING);
					}
					break;
				}
				this.state = 2256;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 284, this._ctx) ) {
				case 1:
					{
					this.state = 2252;
					this.match(SparkSqlParser.LINES);
					this.state = 2253;
					this.match(SparkSqlParser.TERMINATED);
					this.state = 2254;
					this.match(SparkSqlParser.BY);
					this.state = 2255;
					(localctx as RowFormatDelimitedContext)._linesSeparatedBy = this.match(SparkSqlParser.STRING);
					}
					break;
				}
				this.state = 2262;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 285, this._ctx) ) {
				case 1:
					{
					this.state = 2258;
					this.match(SparkSqlParser.NULL);
					this.state = 2259;
					this.match(SparkSqlParser.DEFINED);
					this.state = 2260;
					this.match(SparkSqlParser.AS);
					this.state = 2261;
					(localctx as RowFormatDelimitedContext)._nullDefinedAs = this.match(SparkSqlParser.STRING);
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
	public multipartIdentifierList(): MultipartIdentifierListContext {
		let localctx: MultipartIdentifierListContext = new MultipartIdentifierListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, SparkSqlParser.RULE_multipartIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2266;
			this.multipartIdentifier();
			this.state = 2271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 2267;
				this.match(SparkSqlParser.T__2);
				this.state = 2268;
				this.multipartIdentifier();
				}
				}
				this.state = 2273;
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
	public multipartIdentifier(): MultipartIdentifierContext {
		let localctx: MultipartIdentifierContext = new MultipartIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, SparkSqlParser.RULE_multipartIdentifier);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2274;
			localctx._errorCapturingIdentifier = this.errorCapturingIdentifier();
			localctx._parts.push(localctx._errorCapturingIdentifier);
			this.state = 2279;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 288, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2275;
					this.match(SparkSqlParser.T__3);
					this.state = 2276;
					localctx._errorCapturingIdentifier = this.errorCapturingIdentifier();
					localctx._parts.push(localctx._errorCapturingIdentifier);
					}
					}
				}
				this.state = 2281;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 288, this._ctx);
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
	public tableIdentifier(): TableIdentifierContext {
		let localctx: TableIdentifierContext = new TableIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, SparkSqlParser.RULE_tableIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2285;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 289, this._ctx) ) {
			case 1:
				{
				this.state = 2282;
				localctx._db = this.errorCapturingIdentifier();
				this.state = 2283;
				this.match(SparkSqlParser.T__3);
				}
				break;
			}
			this.state = 2287;
			localctx._table = this.errorCapturingIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namedExpression(): NamedExpressionContext {
		let localctx: NamedExpressionContext = new NamedExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, SparkSqlParser.RULE_namedExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2289;
			this.expression();
			this.state = 2297;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 292, this._ctx) ) {
			case 1:
				{
				this.state = 2291;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 290, this._ctx) ) {
				case 1:
					{
					this.state = 2290;
					this.match(SparkSqlParser.AS);
					}
					break;
				}
				this.state = 2295;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 291, this._ctx) ) {
				case 1:
					{
					this.state = 2293;
					localctx._name = this.errorCapturingIdentifier();
					}
					break;
				case 2:
					{
					this.state = 2294;
					this.identifierList();
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
	public namedExpressionSeq(): NamedExpressionSeqContext {
		let localctx: NamedExpressionSeqContext = new NamedExpressionSeqContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, SparkSqlParser.RULE_namedExpressionSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2299;
			this.namedExpression();
			this.state = 2304;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 293, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2300;
					this.match(SparkSqlParser.T__2);
					this.state = 2301;
					this.namedExpression();
					}
					}
				}
				this.state = 2306;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 293, this._ctx);
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
	public transformList(): TransformListContext {
		let localctx: TransformListContext = new TransformListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, SparkSqlParser.RULE_transformList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2307;
			this.match(SparkSqlParser.T__0);
			this.state = 2308;
			localctx._transform = this.transform();
			localctx._transforms.push(localctx._transform);
			this.state = 2313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 2309;
				this.match(SparkSqlParser.T__2);
				this.state = 2310;
				localctx._transform = this.transform();
				localctx._transforms.push(localctx._transform);
				}
				}
				this.state = 2315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2316;
			this.match(SparkSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public transform(): TransformContext {
		let localctx: TransformContext = new TransformContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, SparkSqlParser.RULE_transform);
		let _la: number;
		try {
			this.state = 2331;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 296, this._ctx) ) {
			case 1:
				localctx = new IdentityTransformContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2318;
				this.qualifiedName();
				}
				break;
			case 2:
				localctx = new ApplyTransformContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2319;
				(localctx as ApplyTransformContext)._transformName = this.identifier();
				this.state = 2320;
				this.match(SparkSqlParser.T__0);
				this.state = 2321;
				(localctx as ApplyTransformContext)._transformArgument = this.transformArgument();
				(localctx as ApplyTransformContext)._argument.push((localctx as ApplyTransformContext)._transformArgument);
				this.state = 2326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3) {
					{
					{
					this.state = 2322;
					this.match(SparkSqlParser.T__2);
					this.state = 2323;
					(localctx as ApplyTransformContext)._transformArgument = this.transformArgument();
					(localctx as ApplyTransformContext)._argument.push((localctx as ApplyTransformContext)._transformArgument);
					}
					}
					this.state = 2328;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2329;
				this.match(SparkSqlParser.T__1);
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
	public transformArgument(): TransformArgumentContext {
		let localctx: TransformArgumentContext = new TransformArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, SparkSqlParser.RULE_transformArgument);
		try {
			this.state = 2335;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 297, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2333;
				this.qualifiedName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2334;
				this.constant();
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
		this.enterRule(localctx, 188, SparkSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2337;
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
		let _startState: number = 190;
		this.enterRecursionRule(localctx, 190, SparkSqlParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2351;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 299, this._ctx) ) {
			case 1:
				{
				localctx = new LogicalNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 2340;
				this.match(SparkSqlParser.NOT);
				this.state = 2341;
				this.booleanExpression(5);
				}
				break;
			case 2:
				{
				localctx = new ExistsContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2342;
				this.match(SparkSqlParser.EXISTS);
				this.state = 2343;
				this.match(SparkSqlParser.T__0);
				this.state = 2344;
				this.query();
				this.state = 2345;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 3:
				{
				localctx = new PredicatedContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2347;
				this.valueExpression(0);
				this.state = 2349;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 298, this._ctx) ) {
				case 1:
					{
					this.state = 2348;
					this.predicate();
					}
					break;
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2361;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 301, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2359;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 300, this._ctx) ) {
					case 1:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, SparkSqlParser.RULE_booleanExpression);
						this.state = 2353;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2354;
						(localctx as LogicalBinaryContext)._operator = this.match(SparkSqlParser.AND);
						this.state = 2355;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;
					case 2:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, SparkSqlParser.RULE_booleanExpression);
						this.state = 2356;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2357;
						(localctx as LogicalBinaryContext)._operator = this.match(SparkSqlParser.OR);
						this.state = 2358;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 2363;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 301, this._ctx);
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
	public predicate(): PredicateContext {
		let localctx: PredicateContext = new PredicateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, SparkSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 2446;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 315, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===149) {
					{
					this.state = 2364;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2367;
				localctx._kind = this.match(SparkSqlParser.BETWEEN);
				this.state = 2368;
				localctx._lower = this.valueExpression(0);
				this.state = 2369;
				this.match(SparkSqlParser.AND);
				this.state = 2370;
				localctx._upper = this.valueExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===149) {
					{
					this.state = 2372;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2375;
				localctx._kind = this.match(SparkSqlParser.IN);
				this.state = 2376;
				this.match(SparkSqlParser.T__0);
				this.state = 2377;
				this.expression();
				this.state = 2382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3) {
					{
					{
					this.state = 2378;
					this.match(SparkSqlParser.T__2);
					this.state = 2379;
					this.expression();
					}
					}
					this.state = 2384;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2385;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===149) {
					{
					this.state = 2387;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2390;
				localctx._kind = this.match(SparkSqlParser.IN);
				this.state = 2391;
				this.match(SparkSqlParser.T__0);
				this.state = 2392;
				this.query();
				this.state = 2393;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===149) {
					{
					this.state = 2395;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2398;
				localctx._kind = this.match(SparkSqlParser.RLIKE);
				this.state = 2399;
				localctx._pattern = this.valueExpression(0);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===149) {
					{
					this.state = 2400;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2403;
				localctx._kind = this.match(SparkSqlParser.LIKE);
				this.state = 2404;
				localctx._quantifier = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===13 || _la===18 || _la===212)) {
				    localctx._quantifier = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2418;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 309, this._ctx) ) {
				case 1:
					{
					this.state = 2405;
					this.match(SparkSqlParser.T__0);
					this.state = 2406;
					this.match(SparkSqlParser.T__1);
					}
					break;
				case 2:
					{
					this.state = 2407;
					this.match(SparkSqlParser.T__0);
					this.state = 2408;
					this.expression();
					this.state = 2413;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===3) {
						{
						{
						this.state = 2409;
						this.match(SparkSqlParser.T__2);
						this.state = 2410;
						this.expression();
						}
						}
						this.state = 2415;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2416;
					this.match(SparkSqlParser.T__1);
					}
					break;
				}
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===149) {
					{
					this.state = 2420;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2423;
				localctx._kind = this.match(SparkSqlParser.LIKE);
				this.state = 2424;
				localctx._pattern = this.valueExpression(0);
				this.state = 2427;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 311, this._ctx) ) {
				case 1:
					{
					this.state = 2425;
					this.match(SparkSqlParser.ESCAPE);
					this.state = 2426;
					localctx._escapeChar = this.match(SparkSqlParser.STRING);
					}
					break;
				}
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2429;
				this.match(SparkSqlParser.IS);
				this.state = 2431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===149) {
					{
					this.state = 2430;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2433;
				localctx._kind = this.match(SparkSqlParser.NULL);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2434;
				this.match(SparkSqlParser.IS);
				this.state = 2436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===149) {
					{
					this.state = 2435;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2438;
				localctx._kind = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===88 || _la===237 || _la===245)) {
				    localctx._kind = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 2439;
				this.match(SparkSqlParser.IS);
				this.state = 2441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===149) {
					{
					this.state = 2440;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2443;
				localctx._kind = this.match(SparkSqlParser.DISTINCT);
				this.state = 2444;
				this.match(SparkSqlParser.FROM);
				this.state = 2445;
				localctx._right = this.valueExpression(0);
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
		let _startState: number = 194;
		this.enterRecursionRule(localctx, 194, SparkSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2452;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 316, this._ctx) ) {
			case 1:
				{
				localctx = new ValueExpressionDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 2449;
				this.primaryExpression(0);
				}
				break;
			case 2:
				{
				localctx = new ArithmeticUnaryContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2450;
				(localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & 35) !== 0))) {
				    (localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2451;
				this.valueExpression(7);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2475;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 318, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2473;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 317, this._ctx) ) {
					case 1:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, SparkSqlParser.RULE_valueExpression);
						this.state = 2454;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 2455;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===74 || ((((_la - 270)) & ~0x1F) === 0 && ((1 << (_la - 270)) & 7) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 2456;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
						}
						break;
					case 2:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, SparkSqlParser.RULE_valueExpression);
						this.state = 2457;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 2458;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & 259) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 2459;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
						}
						break;
					case 3:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, SparkSqlParser.RULE_valueExpression);
						this.state = 2460;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 2461;
						(localctx as ArithmeticBinaryContext)._operator = this.match(SparkSqlParser.AMPERSAND);
						this.state = 2462;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
						}
						break;
					case 4:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, SparkSqlParser.RULE_valueExpression);
						this.state = 2463;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2464;
						(localctx as ArithmeticBinaryContext)._operator = this.match(SparkSqlParser.HAT);
						this.state = 2465;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;
					case 5:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, SparkSqlParser.RULE_valueExpression);
						this.state = 2466;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2467;
						(localctx as ArithmeticBinaryContext)._operator = this.match(SparkSqlParser.PIPE);
						this.state = 2468;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;
					case 6:
						{
						localctx = new ComparisonContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, SparkSqlParser.RULE_valueExpression);
						this.state = 2469;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2470;
						this.comparisonOperator();
						this.state = 2471;
						(localctx as ComparisonContext)._right = this.valueExpression(2);
						}
						break;
					}
					}
				}
				this.state = 2477;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 318, this._ctx);
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
		let _startState: number = 196;
		this.enterRecursionRule(localctx, 196, SparkSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2662;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 338, this._ctx) ) {
			case 1:
				{
				localctx = new CurrentDatetimeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 2479;
				(localctx as CurrentDatetimeContext)._name = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===56 || _la===58)) {
				    (localctx as CurrentDatetimeContext)._name = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 2:
				{
				localctx = new SearchedCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2480;
				this.match(SparkSqlParser.CASE);
				this.state = 2482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2481;
					this.whenClause();
					}
					}
					this.state = 2484;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===255);
				this.state = 2488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===76) {
					{
					this.state = 2486;
					this.match(SparkSqlParser.ELSE);
					this.state = 2487;
					(localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2490;
				this.match(SparkSqlParser.END);
				}
				break;
			case 3:
				{
				localctx = new SimpleCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2492;
				this.match(SparkSqlParser.CASE);
				this.state = 2493;
				(localctx as SimpleCaseContext)._value = this.expression();
				this.state = 2495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2494;
					this.whenClause();
					}
					}
					this.state = 2497;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===255);
				this.state = 2501;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===76) {
					{
					this.state = 2499;
					this.match(SparkSqlParser.ELSE);
					this.state = 2500;
					(localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2503;
				this.match(SparkSqlParser.END);
				}
				break;
			case 4:
				{
				localctx = new CastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2505;
				this.match(SparkSqlParser.CAST);
				this.state = 2506;
				this.match(SparkSqlParser.T__0);
				this.state = 2507;
				this.expression();
				this.state = 2508;
				this.match(SparkSqlParser.AS);
				this.state = 2509;
				this.dataType();
				this.state = 2510;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 5:
				{
				localctx = new StructContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2512;
				this.match(SparkSqlParser.STRUCT);
				this.state = 2513;
				this.match(SparkSqlParser.T__0);
				this.state = 2522;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 324, this._ctx) ) {
				case 1:
					{
					this.state = 2514;
					(localctx as StructContext)._namedExpression = this.namedExpression();
					(localctx as StructContext)._argument.push((localctx as StructContext)._namedExpression);
					this.state = 2519;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===3) {
						{
						{
						this.state = 2515;
						this.match(SparkSqlParser.T__2);
						this.state = 2516;
						(localctx as StructContext)._namedExpression = this.namedExpression();
						(localctx as StructContext)._argument.push((localctx as StructContext)._namedExpression);
						}
						}
						this.state = 2521;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				}
				this.state = 2524;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 6:
				{
				localctx = new FirstContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2525;
				this.match(SparkSqlParser.FIRST);
				this.state = 2526;
				this.match(SparkSqlParser.T__0);
				this.state = 2527;
				this.expression();
				this.state = 2530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===109) {
					{
					this.state = 2528;
					this.match(SparkSqlParser.IGNORE);
					this.state = 2529;
					this.match(SparkSqlParser.NULLS);
					}
				}

				this.state = 2532;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 7:
				{
				localctx = new LastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2534;
				this.match(SparkSqlParser.LAST);
				this.state = 2535;
				this.match(SparkSqlParser.T__0);
				this.state = 2536;
				this.expression();
				this.state = 2539;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===109) {
					{
					this.state = 2537;
					this.match(SparkSqlParser.IGNORE);
					this.state = 2538;
					this.match(SparkSqlParser.NULLS);
					}
				}

				this.state = 2541;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 8:
				{
				localctx = new PositionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2543;
				this.match(SparkSqlParser.POSITION);
				this.state = 2544;
				this.match(SparkSqlParser.T__0);
				this.state = 2545;
				(localctx as PositionContext)._substr = this.valueExpression(0);
				this.state = 2546;
				this.match(SparkSqlParser.IN);
				this.state = 2547;
				(localctx as PositionContext)._str = this.valueExpression(0);
				this.state = 2548;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 9:
				{
				localctx = new ConstantDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2550;
				this.constant();
				}
				break;
			case 10:
				{
				localctx = new StarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2551;
				this.match(SparkSqlParser.ASTERISK);
				}
				break;
			case 11:
				{
				localctx = new StarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2552;
				this.qualifiedName();
				this.state = 2553;
				this.match(SparkSqlParser.T__3);
				this.state = 2554;
				this.match(SparkSqlParser.ASTERISK);
				}
				break;
			case 12:
				{
				localctx = new RowConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2556;
				this.match(SparkSqlParser.T__0);
				this.state = 2557;
				this.namedExpression();
				this.state = 2560;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2558;
					this.match(SparkSqlParser.T__2);
					this.state = 2559;
					this.namedExpression();
					}
					}
					this.state = 2562;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===3);
				this.state = 2564;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 13:
				{
				localctx = new SubqueryExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2566;
				this.match(SparkSqlParser.T__0);
				this.state = 2567;
				this.query();
				this.state = 2568;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 14:
				{
				localctx = new FunctionCallContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2570;
				this.functionName();
				this.state = 2571;
				this.match(SparkSqlParser.T__0);
				this.state = 2583;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 330, this._ctx) ) {
				case 1:
					{
					this.state = 2573;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 328, this._ctx) ) {
					case 1:
						{
						this.state = 2572;
						this.setQuantifier();
						}
						break;
					}
					this.state = 2575;
					(localctx as FunctionCallContext)._expression = this.expression();
					(localctx as FunctionCallContext)._argument.push((localctx as FunctionCallContext)._expression);
					this.state = 2580;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===3) {
						{
						{
						this.state = 2576;
						this.match(SparkSqlParser.T__2);
						this.state = 2577;
						(localctx as FunctionCallContext)._expression = this.expression();
						(localctx as FunctionCallContext)._argument.push((localctx as FunctionCallContext)._expression);
						}
						}
						this.state = 2582;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				}
				this.state = 2585;
				this.match(SparkSqlParser.T__1);
				this.state = 2592;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 331, this._ctx) ) {
				case 1:
					{
					this.state = 2586;
					this.match(SparkSqlParser.FILTER);
					this.state = 2587;
					this.match(SparkSqlParser.T__0);
					this.state = 2588;
					this.match(SparkSqlParser.WHERE);
					this.state = 2589;
					(localctx as FunctionCallContext)._where = this.booleanExpression(0);
					this.state = 2590;
					this.match(SparkSqlParser.T__1);
					}
					break;
				}
				this.state = 2596;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 332, this._ctx) ) {
				case 1:
					{
					this.state = 2594;
					this.match(SparkSqlParser.OVER);
					this.state = 2595;
					this.windowSpec();
					}
					break;
				}
				}
				break;
			case 15:
				{
				localctx = new LambdaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2598;
				this.identifier();
				this.state = 2599;
				this.match(SparkSqlParser.T__6);
				this.state = 2600;
				this.expression();
				}
				break;
			case 16:
				{
				localctx = new LambdaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2602;
				this.match(SparkSqlParser.T__0);
				this.state = 2603;
				this.identifier();
				this.state = 2606;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2604;
					this.match(SparkSqlParser.T__2);
					this.state = 2605;
					this.identifier();
					}
					}
					this.state = 2608;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===3);
				this.state = 2610;
				this.match(SparkSqlParser.T__1);
				this.state = 2611;
				this.match(SparkSqlParser.T__6);
				this.state = 2612;
				this.expression();
				}
				break;
			case 17:
				{
				localctx = new ColumnReferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2614;
				this.identifier();
				}
				break;
			case 18:
				{
				localctx = new ParenthesizedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2615;
				this.match(SparkSqlParser.T__0);
				this.state = 2616;
				this.expression();
				this.state = 2617;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 19:
				{
				localctx = new ExtractContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2619;
				this.match(SparkSqlParser.EXTRACT);
				this.state = 2620;
				this.match(SparkSqlParser.T__0);
				this.state = 2621;
				(localctx as ExtractContext)._field = this.identifier();
				this.state = 2622;
				this.match(SparkSqlParser.FROM);
				this.state = 2623;
				(localctx as ExtractContext)._source = this.valueExpression(0);
				this.state = 2624;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 20:
				{
				localctx = new SubstringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2626;
				_la = this._input.LA(1);
				if(!(_la===220 || _la===221)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2627;
				this.match(SparkSqlParser.T__0);
				this.state = 2628;
				(localctx as SubstringContext)._str = this.valueExpression(0);
				this.state = 2629;
				_la = this._input.LA(1);
				if(!(_la===3 || _la===99)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2630;
				(localctx as SubstringContext)._pos = this.valueExpression(0);
				this.state = 2633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===3 || _la===95) {
					{
					this.state = 2631;
					_la = this._input.LA(1);
					if(!(_la===3 || _la===95)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 2632;
					(localctx as SubstringContext)._len = this.valueExpression(0);
					}
				}

				this.state = 2635;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 21:
				{
				localctx = new TrimContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2637;
				this.match(SparkSqlParser.TRIM);
				this.state = 2638;
				this.match(SparkSqlParser.T__0);
				this.state = 2640;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 335, this._ctx) ) {
				case 1:
					{
					this.state = 2639;
					(localctx as TrimContext)._trimOption = this._input.LT(1);
					_la = this._input.LA(1);
					if(!(_la===26 || _la===128 || _la===232)) {
					    (localctx as TrimContext)._trimOption = this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 2643;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 336, this._ctx) ) {
				case 1:
					{
					this.state = 2642;
					(localctx as TrimContext)._trimStr = this.valueExpression(0);
					}
					break;
				}
				this.state = 2645;
				this.match(SparkSqlParser.FROM);
				this.state = 2646;
				(localctx as TrimContext)._srcStr = this.valueExpression(0);
				this.state = 2647;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 22:
				{
				localctx = new OverlayContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2649;
				this.match(SparkSqlParser.OVERLAY);
				this.state = 2650;
				this.match(SparkSqlParser.T__0);
				this.state = 2651;
				(localctx as OverlayContext)._input = this.valueExpression(0);
				this.state = 2652;
				this.match(SparkSqlParser.PLACING);
				this.state = 2653;
				(localctx as OverlayContext)._replace = this.valueExpression(0);
				this.state = 2654;
				this.match(SparkSqlParser.FROM);
				this.state = 2655;
				(localctx as OverlayContext)._position = this.valueExpression(0);
				this.state = 2658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===95) {
					{
					this.state = 2656;
					this.match(SparkSqlParser.FOR);
					this.state = 2657;
					(localctx as OverlayContext)._length = this.valueExpression(0);
					}
				}

				this.state = 2660;
				this.match(SparkSqlParser.T__1);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2674;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 340, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2672;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 339, this._ctx) ) {
					case 1:
						{
						localctx = new SubscriptContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						(localctx as SubscriptContext)._value = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, SparkSqlParser.RULE_primaryExpression);
						this.state = 2664;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 2665;
						this.match(SparkSqlParser.T__7);
						this.state = 2666;
						(localctx as SubscriptContext)._index = this.valueExpression(0);
						this.state = 2667;
						this.match(SparkSqlParser.T__8);
						}
						break;
					case 2:
						{
						localctx = new DereferenceContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						(localctx as DereferenceContext)._base = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, SparkSqlParser.RULE_primaryExpression);
						this.state = 2669;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 2670;
						this.match(SparkSqlParser.T__3);
						this.state = 2671;
						(localctx as DereferenceContext)._fieldName = this.identifier();
						}
						break;
					}
					}
				}
				this.state = 2676;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 340, this._ctx);
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
	public constant(): ConstantContext {
		let localctx: ConstantContext = new ConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, SparkSqlParser.RULE_constant);
		try {
			let _alt: number;
			this.state = 2689;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 342, this._ctx) ) {
			case 1:
				localctx = new NullLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2677;
				this.match(SparkSqlParser.NULL);
				}
				break;
			case 2:
				localctx = new IntervalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2678;
				this.interval();
				}
				break;
			case 3:
				localctx = new TypeConstructorContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2679;
				this.identifier();
				this.state = 2680;
				this.match(SparkSqlParser.STRING);
				}
				break;
			case 4:
				localctx = new NumericLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2682;
				this.number_();
				}
				break;
			case 5:
				localctx = new BooleanLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2683;
				this.booleanValue();
				}
				break;
			case 6:
				localctx = new StringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2685;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 2684;
						this.match(SparkSqlParser.STRING);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 2687;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 341, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
		this.enterRule(localctx, 200, SparkSqlParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2691;
			_la = this._input.LA(1);
			if(!(((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 255) !== 0))) {
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
	public arithmeticOperator(): ArithmeticOperatorContext {
		let localctx: ArithmeticOperatorContext = new ArithmeticOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, SparkSqlParser.RULE_arithmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2693;
			_la = this._input.LA(1);
			if(!(_la===74 || ((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & 1023) !== 0))) {
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
	public predicateOperator(): PredicateOperatorContext {
		let localctx: PredicateOperatorContext = new PredicateOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, SparkSqlParser.RULE_predicateOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2695;
			_la = this._input.LA(1);
			if(!(_la===16 || _la===111 || _la===149 || _la===157)) {
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
		this.enterRule(localctx, 206, SparkSqlParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2697;
			_la = this._input.LA(1);
			if(!(_la===88 || _la===237)) {
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
		this.enterRule(localctx, 208, SparkSqlParser.RULE_interval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2699;
			this.match(SparkSqlParser.INTERVAL);
			this.state = 2702;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 343, this._ctx) ) {
			case 1:
				{
				this.state = 2700;
				this.errorCapturingMultiUnitsInterval();
				}
				break;
			case 2:
				{
				this.state = 2701;
				this.errorCapturingUnitToUnitInterval();
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
	public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext {
		let localctx: ErrorCapturingMultiUnitsIntervalContext = new ErrorCapturingMultiUnitsIntervalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, SparkSqlParser.RULE_errorCapturingMultiUnitsInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2704;
			this.multiUnitsInterval();
			this.state = 2706;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 344, this._ctx) ) {
			case 1:
				{
				this.state = 2705;
				this.unitToUnitInterval();
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
	public multiUnitsInterval(): MultiUnitsIntervalContext {
		let localctx: MultiUnitsIntervalContext = new MultiUnitsIntervalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, SparkSqlParser.RULE_multiUnitsInterval);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2711;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2708;
					this.intervalValue();
					this.state = 2709;
					localctx._identifier = this.identifier();
					localctx._unit.push(localctx._identifier);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2713;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 345, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext {
		let localctx: ErrorCapturingUnitToUnitIntervalContext = new ErrorCapturingUnitToUnitIntervalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, SparkSqlParser.RULE_errorCapturingUnitToUnitInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2715;
			localctx._body = this.unitToUnitInterval();
			this.state = 2718;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 346, this._ctx) ) {
			case 1:
				{
				this.state = 2716;
				localctx._error1 = this.multiUnitsInterval();
				}
				break;
			case 2:
				{
				this.state = 2717;
				localctx._error2 = this.unitToUnitInterval();
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
	public unitToUnitInterval(): UnitToUnitIntervalContext {
		let localctx: UnitToUnitIntervalContext = new UnitToUnitIntervalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, SparkSqlParser.RULE_unitToUnitInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2720;
			localctx._value = this.intervalValue();
			this.state = 2721;
			localctx._from_ = this.identifier();
			this.state = 2722;
			this.match(SparkSqlParser.TO);
			this.state = 2723;
			localctx._to = this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public intervalValue(): IntervalValueContext {
		let localctx: IntervalValueContext = new IntervalValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, SparkSqlParser.RULE_intervalValue);
		let _la: number;
		try {
			this.state = 2730;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 268:
			case 269:
			case 283:
			case 285:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2726;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===268 || _la===269) {
					{
					this.state = 2725;
					_la = this._input.LA(1);
					if(!(_la===268 || _la===269)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 2728;
				_la = this._input.LA(1);
				if(!(_la===283 || _la===285)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 279:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2729;
				this.match(SparkSqlParser.STRING);
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
	public colPosition(): ColPositionContext {
		let localctx: ColPositionContext = new ColPositionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, SparkSqlParser.RULE_colPosition);
		try {
			this.state = 2735;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 93:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2732;
				localctx._position = this.match(SparkSqlParser.FIRST);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2733;
				localctx._position = this.match(SparkSqlParser.AFTER);
				this.state = 2734;
				localctx._afterCol = this.errorCapturingIdentifier();
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
	public dataType(): DataTypeContext {
		let localctx: DataTypeContext = new DataTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, SparkSqlParser.RULE_dataType);
		let _la: number;
		try {
			this.state = 2771;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 354, this._ctx) ) {
			case 1:
				localctx = new ComplexDataTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2737;
				(localctx as ComplexDataTypeContext)._complex = this.match(SparkSqlParser.ARRAY);
				this.state = 2738;
				this.match(SparkSqlParser.LT);
				this.state = 2739;
				this.dataType();
				this.state = 2740;
				this.match(SparkSqlParser.GT);
				}
				break;
			case 2:
				localctx = new ComplexDataTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2742;
				(localctx as ComplexDataTypeContext)._complex = this.match(SparkSqlParser.MAP);
				this.state = 2743;
				this.match(SparkSqlParser.LT);
				this.state = 2744;
				this.dataType();
				this.state = 2745;
				this.match(SparkSqlParser.T__2);
				this.state = 2746;
				this.dataType();
				this.state = 2747;
				this.match(SparkSqlParser.GT);
				}
				break;
			case 3:
				localctx = new ComplexDataTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2749;
				(localctx as ComplexDataTypeContext)._complex = this.match(SparkSqlParser.STRUCT);
				this.state = 2756;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 264:
					{
					this.state = 2750;
					this.match(SparkSqlParser.LT);
					this.state = 2752;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 350, this._ctx) ) {
					case 1:
						{
						this.state = 2751;
						this.complexColTypeList();
						}
						break;
					}
					this.state = 2754;
					this.match(SparkSqlParser.GT);
					}
					break;
				case 262:
					{
					this.state = 2755;
					this.match(SparkSqlParser.NEQ);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 4:
				localctx = new PrimitiveDataTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2758;
				this.identifier();
				this.state = 2769;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 353, this._ctx) ) {
				case 1:
					{
					this.state = 2759;
					this.match(SparkSqlParser.T__0);
					this.state = 2760;
					this.match(SparkSqlParser.INTEGER_VALUE);
					this.state = 2765;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===3) {
						{
						{
						this.state = 2761;
						this.match(SparkSqlParser.T__2);
						this.state = 2762;
						this.match(SparkSqlParser.INTEGER_VALUE);
						}
						}
						this.state = 2767;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2768;
					this.match(SparkSqlParser.T__1);
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
	public qualifiedColTypeWithPositionList(): QualifiedColTypeWithPositionListContext {
		let localctx: QualifiedColTypeWithPositionListContext = new QualifiedColTypeWithPositionListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, SparkSqlParser.RULE_qualifiedColTypeWithPositionList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2773;
			this.qualifiedColTypeWithPosition();
			this.state = 2778;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 2774;
				this.match(SparkSqlParser.T__2);
				this.state = 2775;
				this.qualifiedColTypeWithPosition();
				}
				}
				this.state = 2780;
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
	public qualifiedColTypeWithPosition(): QualifiedColTypeWithPositionContext {
		let localctx: QualifiedColTypeWithPositionContext = new QualifiedColTypeWithPositionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, SparkSqlParser.RULE_qualifiedColTypeWithPosition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2781;
			localctx._name = this.multipartIdentifier();
			this.state = 2782;
			this.dataType();
			this.state = 2785;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===149) {
				{
				this.state = 2783;
				this.match(SparkSqlParser.NOT);
				this.state = 2784;
				this.match(SparkSqlParser.NULL);
				}
			}

			this.state = 2788;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 357, this._ctx) ) {
			case 1:
				{
				this.state = 2787;
				this.commentSpec();
				}
				break;
			}
			this.state = 2791;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12 || _la===93) {
				{
				this.state = 2790;
				this.colPosition();
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
	public colTypeList(): ColTypeListContext {
		let localctx: ColTypeListContext = new ColTypeListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, SparkSqlParser.RULE_colTypeList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2793;
			this.colType();
			this.state = 2798;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 359, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2794;
					this.match(SparkSqlParser.T__2);
					this.state = 2795;
					this.colType();
					}
					}
				}
				this.state = 2800;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 359, this._ctx);
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
	public colType(): ColTypeContext {
		let localctx: ColTypeContext = new ColTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, SparkSqlParser.RULE_colType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2801;
			localctx._colName = this.errorCapturingIdentifier();
			this.state = 2802;
			this.dataType();
			this.state = 2805;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 360, this._ctx) ) {
			case 1:
				{
				this.state = 2803;
				this.match(SparkSqlParser.NOT);
				this.state = 2804;
				this.match(SparkSqlParser.NULL);
				}
				break;
			}
			this.state = 2808;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 361, this._ctx) ) {
			case 1:
				{
				this.state = 2807;
				this.commentSpec();
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
	public complexColTypeList(): ComplexColTypeListContext {
		let localctx: ComplexColTypeListContext = new ComplexColTypeListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, SparkSqlParser.RULE_complexColTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2810;
			this.complexColType();
			this.state = 2815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 2811;
				this.match(SparkSqlParser.T__2);
				this.state = 2812;
				this.complexColType();
				}
				}
				this.state = 2817;
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
	public complexColType(): ComplexColTypeContext {
		let localctx: ComplexColTypeContext = new ComplexColTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, SparkSqlParser.RULE_complexColType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2818;
			this.identifier();
			this.state = 2819;
			this.match(SparkSqlParser.T__9);
			this.state = 2820;
			this.dataType();
			this.state = 2823;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===149) {
				{
				this.state = 2821;
				this.match(SparkSqlParser.NOT);
				this.state = 2822;
				this.match(SparkSqlParser.NULL);
				}
			}

			this.state = 2826;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===44) {
				{
				this.state = 2825;
				this.commentSpec();
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
	public whenClause(): WhenClauseContext {
		let localctx: WhenClauseContext = new WhenClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, SparkSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2828;
			this.match(SparkSqlParser.WHEN);
			this.state = 2829;
			localctx._condition = this.expression();
			this.state = 2830;
			this.match(SparkSqlParser.THEN);
			this.state = 2831;
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
	public windowClause(): WindowClauseContext {
		let localctx: WindowClauseContext = new WindowClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, SparkSqlParser.RULE_windowClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2833;
			this.match(SparkSqlParser.WINDOW);
			this.state = 2834;
			this.namedWindow();
			this.state = 2839;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 365, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2835;
					this.match(SparkSqlParser.T__2);
					this.state = 2836;
					this.namedWindow();
					}
					}
				}
				this.state = 2841;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 365, this._ctx);
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
	public namedWindow(): NamedWindowContext {
		let localctx: NamedWindowContext = new NamedWindowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 240, SparkSqlParser.RULE_namedWindow);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2842;
			localctx._name = this.errorCapturingIdentifier();
			this.state = 2843;
			this.match(SparkSqlParser.AS);
			this.state = 2844;
			this.windowSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public windowSpec(): WindowSpecContext {
		let localctx: WindowSpecContext = new WindowSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, SparkSqlParser.RULE_windowSpec);
		let _la: number;
		try {
			this.state = 2892;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 373, this._ctx) ) {
			case 1:
				localctx = new WindowRefContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2846;
				(localctx as WindowRefContext)._name = this.errorCapturingIdentifier();
				}
				break;
			case 2:
				localctx = new WindowRefContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2847;
				this.match(SparkSqlParser.T__0);
				this.state = 2848;
				(localctx as WindowRefContext)._name = this.errorCapturingIdentifier();
				this.state = 2849;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case 3:
				localctx = new WindowDefContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2851;
				this.match(SparkSqlParser.T__0);
				this.state = 2886;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 37:
					{
					this.state = 2852;
					this.match(SparkSqlParser.CLUSTER);
					this.state = 2853;
					this.match(SparkSqlParser.BY);
					this.state = 2854;
					(localctx as WindowDefContext)._expression = this.expression();
					(localctx as WindowDefContext)._partition.push((localctx as WindowDefContext)._expression);
					this.state = 2859;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===3) {
						{
						{
						this.state = 2855;
						this.match(SparkSqlParser.T__2);
						this.state = 2856;
						(localctx as WindowDefContext)._expression = this.expression();
						(localctx as WindowDefContext)._partition.push((localctx as WindowDefContext)._expression);
						}
						}
						this.state = 2861;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 2:
				case 73:
				case 158:
				case 166:
				case 179:
				case 199:
				case 213:
					{
					this.state = 2872;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===73 || _la===166) {
						{
						this.state = 2862;
						_la = this._input.LA(1);
						if(!(_la===73 || _la===166)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 2863;
						this.match(SparkSqlParser.BY);
						this.state = 2864;
						(localctx as WindowDefContext)._expression = this.expression();
						(localctx as WindowDefContext)._partition.push((localctx as WindowDefContext)._expression);
						this.state = 2869;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===3) {
							{
							{
							this.state = 2865;
							this.match(SparkSqlParser.T__2);
							this.state = 2866;
							(localctx as WindowDefContext)._expression = this.expression();
							(localctx as WindowDefContext)._partition.push((localctx as WindowDefContext)._expression);
							}
							}
							this.state = 2871;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
					}

					this.state = 2884;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===158 || _la===213) {
						{
						this.state = 2874;
						_la = this._input.LA(1);
						if(!(_la===158 || _la===213)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 2875;
						this.match(SparkSqlParser.BY);
						this.state = 2876;
						this.sortItem();
						this.state = 2881;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===3) {
							{
							{
							this.state = 2877;
							this.match(SparkSqlParser.T__2);
							this.state = 2878;
							this.sortItem();
							}
							}
							this.state = 2883;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2889;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===179 || _la===199) {
					{
					this.state = 2888;
					this.windowFrame();
					}
				}

				this.state = 2891;
				this.match(SparkSqlParser.T__1);
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
	public windowFrame(): WindowFrameContext {
		let localctx: WindowFrameContext = new WindowFrameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, SparkSqlParser.RULE_windowFrame);
		try {
			this.state = 2910;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 374, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2894;
				localctx._frameType = this.match(SparkSqlParser.RANGE);
				this.state = 2895;
				localctx._start = this.frameBound();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2896;
				localctx._frameType = this.match(SparkSqlParser.ROWS);
				this.state = 2897;
				localctx._start = this.frameBound();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2898;
				localctx._frameType = this.match(SparkSqlParser.RANGE);
				this.state = 2899;
				this.match(SparkSqlParser.BETWEEN);
				this.state = 2900;
				localctx._start = this.frameBound();
				this.state = 2901;
				this.match(SparkSqlParser.AND);
				this.state = 2902;
				localctx._end = this.frameBound();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2904;
				localctx._frameType = this.match(SparkSqlParser.ROWS);
				this.state = 2905;
				this.match(SparkSqlParser.BETWEEN);
				this.state = 2906;
				localctx._start = this.frameBound();
				this.state = 2907;
				this.match(SparkSqlParser.AND);
				this.state = 2908;
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
		this.enterRule(localctx, 246, SparkSqlParser.RULE_frameBound);
		let _la: number;
		try {
			this.state = 2919;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 375, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2912;
				this.match(SparkSqlParser.UNBOUNDED);
				this.state = 2913;
				localctx._boundType = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===94 || _la===173)) {
				    localctx._boundType = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2914;
				localctx._boundType = this.match(SparkSqlParser.CURRENT);
				this.state = 2915;
				this.match(SparkSqlParser.ROW);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2916;
				this.expression();
				this.state = 2917;
				localctx._boundType = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===94 || _la===173)) {
				    localctx._boundType = this._errHandler.recoverInline(this);
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
	// @RuleVersion(0)
	public qualifiedNameList(): QualifiedNameListContext {
		let localctx: QualifiedNameListContext = new QualifiedNameListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, SparkSqlParser.RULE_qualifiedNameList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2921;
			this.qualifiedName();
			this.state = 2926;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 2922;
				this.match(SparkSqlParser.T__2);
				this.state = 2923;
				this.qualifiedName();
				}
				}
				this.state = 2928;
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
	public functionName(): FunctionNameContext {
		let localctx: FunctionNameContext = new FunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 250, SparkSqlParser.RULE_functionName);
		try {
			this.state = 2933;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 377, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2929;
				this.qualifiedName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2930;
				this.match(SparkSqlParser.FILTER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2931;
				this.match(SparkSqlParser.LEFT);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2932;
				this.match(SparkSqlParser.RIGHT);
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
	public qualifiedName(): QualifiedNameContext {
		let localctx: QualifiedNameContext = new QualifiedNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 252, SparkSqlParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2935;
			this.identifier();
			this.state = 2940;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 378, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2936;
					this.match(SparkSqlParser.T__3);
					this.state = 2937;
					this.identifier();
					}
					}
				}
				this.state = 2942;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 378, this._ctx);
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
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		let localctx: ErrorCapturingIdentifierContext = new ErrorCapturingIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 254, SparkSqlParser.RULE_errorCapturingIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2943;
			this.identifier();
			this.state = 2944;
			this.errorCapturingIdentifierExtra();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
		let localctx: ErrorCapturingIdentifierExtraContext = new ErrorCapturingIdentifierExtraContext(this, this._ctx, this.state);
		this.enterRule(localctx, 256, SparkSqlParser.RULE_errorCapturingIdentifierExtra);
		try {
			let _alt: number;
			this.state = 2953;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 380, this._ctx) ) {
			case 1:
				localctx = new ErrorIdentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2948;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 2946;
						this.match(SparkSqlParser.MINUS);
						this.state = 2947;
						this.identifier();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 2950;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 379, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 2:
				localctx = new RealIdentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
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
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 258, SparkSqlParser.RULE_identifier);
		try {
			this.state = 2958;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 381, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2955;
				this.strictIdentifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2956;
				if (!(!SQL_standard_keyword_behavior)) {
					throw this.createFailedPredicateException("!SQL_standard_keyword_behavior");
				}
				this.state = 2957;
				this.strictNonReserved();
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
	public strictIdentifier(): StrictIdentifierContext {
		let localctx: StrictIdentifierContext = new StrictIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 260, SparkSqlParser.RULE_strictIdentifier);
		try {
			this.state = 2966;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 382, this._ctx) ) {
			case 1:
				localctx = new UnquotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2960;
				this.match(SparkSqlParser.IDENTIFIER);
				}
				break;
			case 2:
				localctx = new QuotedIdentifierAlternativeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2961;
				this.quotedIdentifier();
				}
				break;
			case 3:
				localctx = new UnquotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2962;
				if (!(SQL_standard_keyword_behavior)) {
					throw this.createFailedPredicateException("SQL_standard_keyword_behavior");
				}
				this.state = 2963;
				this.ansiNonReserved();
				}
				break;
			case 4:
				localctx = new UnquotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2964;
				if (!(!SQL_standard_keyword_behavior)) {
					throw this.createFailedPredicateException("!SQL_standard_keyword_behavior");
				}
				this.state = 2965;
				this.nonReserved();
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
	public quotedIdentifier(): QuotedIdentifierContext {
		let localctx: QuotedIdentifierContext = new QuotedIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, SparkSqlParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2968;
			this.match(SparkSqlParser.BACKQUOTED_IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 264, SparkSqlParser.RULE_number);
		let _la: number;
		try {
			this.state = 3013;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 393, this._ctx) ) {
			case 1:
				localctx = new ExponentLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2970;
				if (!(!legacy_exponent_literal_as_decimal_enabled)) {
					throw this.createFailedPredicateException("!legacy_exponent_literal_as_decimal_enabled");
				}
				this.state = 2972;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===269) {
					{
					this.state = 2971;
					this.match(SparkSqlParser.MINUS);
					}
				}

				this.state = 2974;
				this.match(SparkSqlParser.EXPONENT_VALUE);
				}
				break;
			case 2:
				localctx = new DecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2975;
				if (!(!legacy_exponent_literal_as_decimal_enabled)) {
					throw this.createFailedPredicateException("!legacy_exponent_literal_as_decimal_enabled");
				}
				this.state = 2977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===269) {
					{
					this.state = 2976;
					this.match(SparkSqlParser.MINUS);
					}
				}

				this.state = 2979;
				this.match(SparkSqlParser.DECIMAL_VALUE);
				}
				break;
			case 3:
				localctx = new LegacyDecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2980;
				if (!(legacy_exponent_literal_as_decimal_enabled)) {
					throw this.createFailedPredicateException("legacy_exponent_literal_as_decimal_enabled");
				}
				this.state = 2982;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===269) {
					{
					this.state = 2981;
					this.match(SparkSqlParser.MINUS);
					}
				}

				this.state = 2984;
				_la = this._input.LA(1);
				if(!(_la===284 || _la===285)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 4:
				localctx = new IntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===269) {
					{
					this.state = 2985;
					this.match(SparkSqlParser.MINUS);
					}
				}

				this.state = 2988;
				this.match(SparkSqlParser.INTEGER_VALUE);
				}
				break;
			case 5:
				localctx = new BigIntLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2990;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===269) {
					{
					this.state = 2989;
					this.match(SparkSqlParser.MINUS);
					}
				}

				this.state = 2992;
				this.match(SparkSqlParser.BIGINT_LITERAL);
				}
				break;
			case 6:
				localctx = new SmallIntLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2994;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===269) {
					{
					this.state = 2993;
					this.match(SparkSqlParser.MINUS);
					}
				}

				this.state = 2996;
				this.match(SparkSqlParser.SMALLINT_LITERAL);
				}
				break;
			case 7:
				localctx = new TinyIntLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2998;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===269) {
					{
					this.state = 2997;
					this.match(SparkSqlParser.MINUS);
					}
				}

				this.state = 3000;
				this.match(SparkSqlParser.TINYINT_LITERAL);
				}
				break;
			case 8:
				localctx = new DoubleLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 3002;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===269) {
					{
					this.state = 3001;
					this.match(SparkSqlParser.MINUS);
					}
				}

				this.state = 3004;
				this.match(SparkSqlParser.DOUBLE_LITERAL);
				}
				break;
			case 9:
				localctx = new FloatLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 3006;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===269) {
					{
					this.state = 3005;
					this.match(SparkSqlParser.MINUS);
					}
				}

				this.state = 3008;
				this.match(SparkSqlParser.FLOAT_LITERAL);
				}
				break;
			case 10:
				localctx = new BigDecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 3010;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===269) {
					{
					this.state = 3009;
					this.match(SparkSqlParser.MINUS);
					}
				}

				this.state = 3012;
				this.match(SparkSqlParser.BIGDECIMAL_LITERAL);
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
	public alterColumnAction(): AlterColumnActionContext {
		let localctx: AlterColumnActionContext = new AlterColumnActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 266, SparkSqlParser.RULE_alterColumnAction);
		let _la: number;
		try {
			this.state = 3022;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 239:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3015;
				this.match(SparkSqlParser.TYPE);
				this.state = 3016;
				this.dataType();
				}
				break;
			case 44:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3017;
				this.commentSpec();
				}
				break;
			case 12:
			case 93:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 3018;
				this.colPosition();
				}
				break;
			case 75:
			case 207:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 3019;
				localctx._setOrDrop = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===75 || _la===207)) {
				    localctx._setOrDrop = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 3020;
				this.match(SparkSqlParser.NOT);
				this.state = 3021;
				this.match(SparkSqlParser.NULL);
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
	public ansiNonReserved(): AnsiNonReservedContext {
		let localctx: AnsiNonReservedContext = new AnsiNonReservedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 268, SparkSqlParser.RULE_ansiNonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3024;
			_la = this._input.LA(1);
			if(!(((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 1587501915) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 3757971839) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 2630787025) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & 4291775415) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & 4285110655) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 3757043707) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 3908828923) !== 0) || ((((_la - 236)) & ~0x1F) === 0 && ((1 << (_la - 236)) & 10959999) !== 0))) {
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
	public strictNonReserved(): StrictNonReservedContext {
		let localctx: StrictNonReservedContext = new StrictNonReservedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 270, SparkSqlParser.RULE_strictNonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3026;
			_la = this._input.LA(1);
			if(!(_la===17 || _la===53 || _la===80 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 545538049) !== 0) || _la===147 || _la===153 || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 66561) !== 0) || _la===243 || _la===251)) {
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
	public nonReserved(): NonReservedContext {
		let localctx: NonReservedContext = new NonReservedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 272, SparkSqlParser.RULE_nonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3028;
			_la = this._input.LA(1);
			if(!(((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 4294967231) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 4294966271) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 4261412831) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 4290705279) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 4294950655) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & 2145386495) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & 4294967263) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & 33488639) !== 0))) {
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
		case 42:
			return this.queryTerm_sempred(localctx as QueryTermContext, predIndex);
		case 95:
			return this.booleanExpression_sempred(localctx as BooleanExpressionContext, predIndex);
		case 97:
			return this.valueExpression_sempred(localctx as ValueExpressionContext, predIndex);
		case 98:
			return this.primaryExpression_sempred(localctx as PrimaryExpressionContext, predIndex);
		case 129:
			return this.identifier_sempred(localctx as IdentifierContext, predIndex);
		case 130:
			return this.strictIdentifier_sempred(localctx as StrictIdentifierContext, predIndex);
		case 132:
			return this.number_sempred(localctx as NumberContext, predIndex);
		}
		return true;
	}
	private queryTerm_sempred(localctx: QueryTermContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return legacy_setops_precedence_enbled;
		case 2:
			return this.precpred(this._ctx, 2);
		case 3:
			return !legacy_setops_precedence_enbled;
		case 4:
			return this.precpred(this._ctx, 1);
		case 5:
			return !legacy_setops_precedence_enbled;
		}
		return true;
	}
	private booleanExpression_sempred(localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 2);
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private valueExpression_sempred(localctx: ValueExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 6);
		case 9:
			return this.precpred(this._ctx, 5);
		case 10:
			return this.precpred(this._ctx, 4);
		case 11:
			return this.precpred(this._ctx, 3);
		case 12:
			return this.precpred(this._ctx, 2);
		case 13:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private primaryExpression_sempred(localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.precpred(this._ctx, 8);
		case 15:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}
	private identifier_sempred(localctx: IdentifierContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return !SQL_standard_keyword_behavior;
		}
		return true;
	}
	private strictIdentifier_sempred(localctx: StrictIdentifierContext, predIndex: number): boolean {
		switch (predIndex) {
		case 17:
			return SQL_standard_keyword_behavior;
		case 18:
			return !SQL_standard_keyword_behavior;
		}
		return true;
	}
	private number_sempred(localctx: NumberContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return !legacy_exponent_literal_as_decimal_enabled;
		case 20:
			return !legacy_exponent_literal_as_decimal_enabled;
		case 21:
			return legacy_exponent_literal_as_decimal_enabled;
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,295,3031,2,0,7,0,
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
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,
	7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,2,121,
	7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,2,127,
	7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,2,133,
	7,133,2,134,7,134,2,135,7,135,2,136,7,136,1,0,1,0,1,0,1,1,1,1,3,1,280,8,
	1,1,1,5,1,283,8,1,10,1,12,1,286,9,1,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,5,
	1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,3,8,307,8,8,1,8,1,8,1,8,3,8,312,
	8,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,320,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,328,
	8,8,10,8,12,8,331,9,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
	8,1,8,1,8,1,8,1,8,3,8,350,8,8,1,8,1,8,3,8,354,8,8,1,8,1,8,1,8,1,8,3,8,360,
	8,8,1,8,3,8,363,8,8,1,8,3,8,366,8,8,1,8,1,8,1,8,1,8,1,8,3,8,373,8,8,1,8,
	1,8,1,8,3,8,378,8,8,1,8,3,8,381,8,8,1,8,1,8,1,8,1,8,1,8,3,8,388,8,8,1,8,
	1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,400,8,8,1,8,1,8,1,8,1,8,1,8,1,8,
	1,8,5,8,409,8,8,10,8,12,8,412,9,8,1,8,3,8,415,8,8,1,8,3,8,418,8,8,1,8,1,
	8,1,8,1,8,1,8,3,8,425,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,436,8,
	8,10,8,12,8,439,9,8,1,8,1,8,1,8,1,8,1,8,3,8,446,8,8,1,8,1,8,1,8,3,8,451,
	8,8,1,8,3,8,454,8,8,1,8,1,8,1,8,1,8,3,8,460,8,8,1,8,1,8,1,8,1,8,1,8,1,8,
	1,8,1,8,1,8,3,8,471,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
	1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
	1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
	1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,535,8,8,1,8,
	1,8,1,8,1,8,1,8,1,8,1,8,3,8,544,8,8,1,8,1,8,3,8,548,8,8,1,8,1,8,1,8,1,8,
	3,8,554,8,8,1,8,1,8,3,8,558,8,8,1,8,1,8,1,8,3,8,563,8,8,1,8,1,8,1,8,1,8,
	3,8,569,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,581,8,8,1,8,1,8,
	1,8,1,8,1,8,1,8,3,8,589,8,8,1,8,1,8,1,8,1,8,3,8,595,8,8,1,8,1,8,1,8,1,8,
	1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,608,8,8,1,8,4,8,611,8,8,11,8,12,8,612,1,
	8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,629,8,8,1,8,1,
	8,1,8,5,8,634,8,8,10,8,12,8,637,9,8,1,8,3,8,640,8,8,1,8,1,8,1,8,1,8,3,8,
	646,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,661,8,8,
	1,8,1,8,3,8,665,8,8,1,8,1,8,1,8,1,8,3,8,671,8,8,1,8,1,8,1,8,1,8,3,8,677,
	8,8,1,8,3,8,680,8,8,1,8,3,8,683,8,8,1,8,1,8,1,8,1,8,3,8,689,8,8,1,8,1,8,
	3,8,693,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,701,8,8,10,8,12,8,704,9,8,1,8,1,
	8,1,8,1,8,1,8,1,8,3,8,712,8,8,1,8,3,8,715,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
	8,3,8,724,8,8,1,8,1,8,1,8,3,8,729,8,8,1,8,1,8,1,8,1,8,3,8,735,8,8,1,8,1,
	8,1,8,1,8,1,8,3,8,742,8,8,1,8,3,8,745,8,8,1,8,1,8,1,8,1,8,3,8,751,8,8,1,
	8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,760,8,8,10,8,12,8,763,9,8,3,8,765,8,8,1,8,
	1,8,3,8,769,8,8,1,8,1,8,1,8,3,8,774,8,8,1,8,1,8,1,8,3,8,779,8,8,1,8,1,8,
	1,8,1,8,1,8,3,8,786,8,8,1,8,3,8,789,8,8,1,8,3,8,792,8,8,1,8,1,8,1,8,1,8,
	1,8,3,8,799,8,8,1,8,1,8,1,8,3,8,804,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,
	813,8,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,821,8,8,1,8,1,8,1,8,1,8,3,8,827,8,8,
	1,8,3,8,830,8,8,1,8,3,8,833,8,8,1,8,1,8,1,8,1,8,3,8,839,8,8,1,8,1,8,3,8,
	843,8,8,1,8,1,8,3,8,847,8,8,1,8,1,8,3,8,851,8,8,3,8,853,8,8,1,8,1,8,1,8,
	1,8,1,8,1,8,3,8,861,8,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,869,8,8,1,8,1,8,1,8,
	1,8,3,8,875,8,8,1,8,1,8,1,8,1,8,3,8,881,8,8,1,8,3,8,884,8,8,1,8,1,8,3,8,
	888,8,8,1,8,3,8,891,8,8,1,8,1,8,3,8,895,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
	1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,
	921,8,8,10,8,12,8,924,9,8,3,8,926,8,8,1,8,1,8,3,8,930,8,8,1,8,1,8,1,8,1,
	8,3,8,936,8,8,1,8,3,8,939,8,8,1,8,3,8,942,8,8,1,8,1,8,1,8,1,8,3,8,948,8,
	8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,956,8,8,1,8,1,8,1,8,3,8,961,8,8,1,8,1,8,1,
	8,1,8,3,8,967,8,8,1,8,1,8,1,8,1,8,3,8,973,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
	8,1,8,5,8,983,8,8,10,8,12,8,986,9,8,3,8,988,8,8,1,8,1,8,1,8,5,8,993,8,8,
	10,8,12,8,996,9,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,1010,
	8,8,10,8,12,8,1013,9,8,1,8,1,8,1,8,1,8,5,8,1019,8,8,10,8,12,8,1022,9,8,
	3,8,1024,8,8,1,8,1,8,5,8,1028,8,8,10,8,12,8,1031,9,8,1,8,1,8,1,8,1,8,5,
	8,1037,8,8,10,8,12,8,1040,9,8,1,8,1,8,5,8,1044,8,8,10,8,12,8,1047,9,8,3,
	8,1049,8,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,3,10,1059,8,10,1,10,1,
	10,3,10,1063,8,10,1,10,1,10,1,10,1,10,1,10,3,10,1070,8,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,1186,8,10,1,10,1,10,
	1,10,1,10,1,10,1,10,3,10,1194,8,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,1202,
	8,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,1211,8,10,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,1,10,3,10,1221,8,10,1,11,1,11,3,11,1225,8,11,1,11,3,11,
	1228,8,11,1,11,1,11,1,11,1,11,3,11,1234,8,11,1,11,1,11,1,12,1,12,3,12,1240,
	8,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,3,13,1252,8,13,1,
	13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,3,14,1264,8,14,1,14,1,14,
	1,14,3,14,1269,8,14,1,15,1,15,1,15,1,16,1,16,1,16,1,17,3,17,1278,8,17,1,
	17,1,17,1,17,1,18,1,18,1,18,3,18,1286,8,18,1,18,1,18,1,18,1,18,1,18,3,18,
	1293,8,18,3,18,1295,8,18,1,18,1,18,1,18,3,18,1300,8,18,1,18,1,18,3,18,1304,
	8,18,1,18,1,18,1,18,3,18,1309,8,18,1,18,1,18,1,18,3,18,1314,8,18,1,18,1,
	18,1,18,3,18,1319,8,18,1,18,3,18,1322,8,18,1,18,1,18,1,18,3,18,1327,8,18,
	1,18,1,18,3,18,1331,8,18,1,18,1,18,1,18,3,18,1336,8,18,3,18,1338,8,18,1,
	19,1,19,3,19,1342,8,19,1,20,1,20,1,20,1,20,1,20,5,20,1349,8,20,10,20,12,
	20,1352,9,20,1,20,1,20,1,21,1,21,1,21,3,21,1359,8,21,1,22,1,22,1,23,1,23,
	1,23,1,23,1,23,3,23,1368,8,23,1,24,1,24,1,24,5,24,1373,8,24,10,24,12,24,
	1376,9,24,1,25,1,25,1,25,1,25,5,25,1382,8,25,10,25,12,25,1385,9,25,1,26,
	1,26,3,26,1389,8,26,1,26,3,26,1392,8,26,1,26,1,26,1,26,1,26,1,27,1,27,1,
	27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,5,28,1411,8,28,10,
	28,12,28,1414,9,28,1,29,1,29,1,29,1,29,5,29,1420,8,29,10,29,12,29,1423,
	9,29,1,29,1,29,1,30,1,30,3,30,1429,8,30,1,30,3,30,1432,8,30,1,31,1,31,1,
	31,5,31,1437,8,31,10,31,12,31,1440,9,31,1,31,3,31,1443,8,31,1,32,1,32,1,
	32,1,32,3,32,1449,8,32,1,33,1,33,1,33,1,33,5,33,1455,8,33,10,33,12,33,1458,
	9,33,1,33,1,33,1,34,1,34,1,34,1,34,5,34,1466,8,34,10,34,12,34,1469,9,34,
	1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,3,35,1479,8,35,1,36,1,36,1,36,1,
	36,1,36,3,36,1486,8,36,1,37,1,37,1,37,1,37,3,37,1492,8,37,1,38,1,38,1,38,
	1,39,1,39,1,39,1,39,1,39,1,39,4,39,1503,8,39,11,39,12,39,1504,1,39,1,39,
	1,39,1,39,1,39,3,39,1512,8,39,1,39,1,39,1,39,1,39,1,39,3,39,1519,8,39,1,
	39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,1531,8,39,1,39,1,39,
	1,39,1,39,5,39,1537,8,39,10,39,12,39,1540,9,39,1,39,5,39,1543,8,39,10,39,
	12,39,1546,9,39,3,39,1548,8,39,1,40,1,40,1,40,1,40,1,40,5,40,1555,8,40,
	10,40,12,40,1558,9,40,3,40,1560,8,40,1,40,1,40,1,40,1,40,1,40,5,40,1567,
	8,40,10,40,12,40,1570,9,40,3,40,1572,8,40,1,40,1,40,1,40,1,40,1,40,5,40,
	1579,8,40,10,40,12,40,1582,9,40,3,40,1584,8,40,1,40,1,40,1,40,1,40,1,40,
	5,40,1591,8,40,10,40,12,40,1594,9,40,3,40,1596,8,40,1,40,3,40,1599,8,40,
	1,40,1,40,1,40,3,40,1604,8,40,3,40,1606,8,40,1,41,1,41,1,41,1,42,1,42,1,
	42,1,42,1,42,1,42,1,42,3,42,1618,8,42,1,42,1,42,1,42,1,42,1,42,3,42,1625,
	8,42,1,42,1,42,1,42,1,42,1,42,3,42,1632,8,42,1,42,5,42,1635,8,42,10,42,
	12,42,1638,9,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,1649,
	8,43,1,44,1,44,3,44,1653,8,44,1,44,1,44,3,44,1657,8,44,1,45,1,45,4,45,1661,
	8,45,11,45,12,45,1662,1,46,1,46,3,46,1667,8,46,1,46,1,46,1,46,1,46,5,46,
	1673,8,46,10,46,12,46,1676,9,46,1,46,3,46,1679,8,46,1,46,3,46,1682,8,46,
	1,46,3,46,1685,8,46,1,46,3,46,1688,8,46,1,46,1,46,3,46,1692,8,46,1,47,1,
	47,3,47,1696,8,47,1,47,3,47,1699,8,47,1,47,1,47,3,47,1703,8,47,1,47,5,47,
	1706,8,47,10,47,12,47,1709,9,47,1,47,3,47,1712,8,47,1,47,3,47,1715,8,47,
	1,47,3,47,1718,8,47,1,47,3,47,1721,8,47,3,47,1723,8,47,1,48,1,48,1,48,1,
	48,1,48,1,48,1,48,1,48,1,48,1,48,3,48,1735,8,48,1,48,3,48,1738,8,48,1,48,
	1,48,3,48,1742,8,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,3,48,1752,8,
	48,1,48,1,48,3,48,1756,8,48,3,48,1758,8,48,1,48,3,48,1761,8,48,1,48,1,48,
	3,48,1765,8,48,1,49,1,49,5,49,1769,8,49,10,49,12,49,1772,9,49,1,49,3,49,
	1775,8,49,1,49,1,49,1,50,1,50,1,50,1,51,1,51,1,51,1,51,3,51,1786,8,51,1,
	51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,3,52,1796,8,52,1,52,1,52,1,52,1,53,
	1,53,1,53,1,53,1,53,1,53,1,53,3,53,1808,8,53,1,54,1,54,1,54,1,54,1,54,1,
	54,1,54,1,54,1,54,1,54,1,54,5,54,1821,8,54,10,54,12,54,1824,9,54,1,54,1,
	54,3,54,1828,8,54,1,55,1,55,1,55,5,55,1833,8,55,10,55,12,55,1836,9,55,1,
	56,1,56,1,56,1,56,1,57,1,57,1,57,1,58,1,58,1,58,1,59,1,59,1,59,3,59,1851,
	8,59,1,59,5,59,1854,8,59,10,59,12,59,1857,9,59,1,59,1,59,1,60,1,60,1,60,
	1,60,1,60,1,60,5,60,1867,8,60,10,60,12,60,1870,9,60,1,60,1,60,3,60,1874,
	8,60,1,61,1,61,1,61,1,61,5,61,1880,8,61,10,61,12,61,1883,9,61,1,61,5,61,
	1886,8,61,10,61,12,61,1889,9,61,1,61,3,61,1892,8,61,1,62,1,62,1,62,1,62,
	1,62,5,62,1899,8,62,10,62,12,62,1902,9,62,1,62,1,62,1,62,1,62,1,62,1,62,
	1,62,1,62,1,62,1,62,5,62,1914,8,62,10,62,12,62,1917,9,62,1,62,1,62,3,62,
	1921,8,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,5,62,1931,8,62,10,62,
	12,62,1934,9,62,1,62,1,62,3,62,1938,8,62,1,63,1,63,1,63,1,63,5,63,1944,
	8,63,10,63,12,63,1947,9,63,3,63,1949,8,63,1,63,1,63,3,63,1953,8,63,1,64,
	1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,5,64,1965,8,64,10,64,12,64,
	1968,9,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,5,65,1978,8,65,10,65,
	12,65,1981,9,65,1,65,1,65,3,65,1985,8,65,1,66,1,66,3,66,1989,8,66,1,66,
	3,66,1992,8,66,1,67,1,67,1,67,3,67,1997,8,67,1,67,1,67,1,67,1,67,1,67,5,
	67,2004,8,67,10,67,12,67,2007,9,67,3,67,2009,8,67,1,67,1,67,1,67,3,67,2014,
	8,67,1,67,1,67,1,67,5,67,2019,8,67,10,67,12,67,2022,9,67,3,67,2024,8,67,
	1,68,1,68,1,69,1,69,5,69,2030,8,69,10,69,12,69,2033,9,69,1,70,1,70,1,70,
	1,70,3,70,2039,8,70,1,70,1,70,1,70,1,70,1,70,3,70,2046,8,70,1,71,3,71,2049,
	8,71,1,71,1,71,1,71,3,71,2054,8,71,1,71,3,71,2057,8,71,1,71,1,71,1,71,3,
	71,2062,8,71,1,71,1,71,3,71,2066,8,71,1,71,3,71,2069,8,71,1,71,3,71,2072,
	8,71,1,72,1,72,1,72,1,72,3,72,2078,8,72,1,73,1,73,1,73,3,73,2083,8,73,1,
	73,1,73,1,74,3,74,2088,8,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,
	1,74,1,74,1,74,1,74,1,74,1,74,1,74,3,74,2106,8,74,3,74,2108,8,74,1,74,3,
	74,2111,8,74,1,75,1,75,1,75,1,75,1,76,1,76,1,76,5,76,2120,8,76,10,76,12,
	76,2123,9,76,1,77,1,77,1,77,1,77,5,77,2129,8,77,10,77,12,77,2132,9,77,1,
	77,1,77,1,78,1,78,3,78,2138,8,78,1,79,1,79,1,79,1,79,5,79,2144,8,79,10,
	79,12,79,2147,9,79,1,79,1,79,1,80,1,80,3,80,2153,8,80,1,81,1,81,3,81,2157,
	8,81,1,81,1,81,1,81,1,81,1,81,1,81,3,81,2165,8,81,1,81,1,81,1,81,1,81,1,
	81,1,81,3,81,2173,8,81,1,81,1,81,1,81,1,81,3,81,2179,8,81,1,82,1,82,1,82,
	1,82,5,82,2185,8,82,10,82,12,82,2188,9,82,1,82,1,82,1,83,1,83,1,83,1,83,
	1,83,5,83,2197,8,83,10,83,12,83,2200,9,83,3,83,2202,8,83,1,83,1,83,1,83,
	1,84,3,84,2208,8,84,1,84,1,84,3,84,2212,8,84,3,84,2214,8,84,1,85,1,85,1,
	85,1,85,1,85,1,85,1,85,3,85,2223,8,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,
	1,85,1,85,1,85,3,85,2235,8,85,3,85,2237,8,85,1,85,1,85,1,85,1,85,1,85,3,
	85,2244,8,85,1,85,1,85,1,85,1,85,1,85,3,85,2251,8,85,1,85,1,85,1,85,1,85,
	3,85,2257,8,85,1,85,1,85,1,85,1,85,3,85,2263,8,85,3,85,2265,8,85,1,86,1,
	86,1,86,5,86,2270,8,86,10,86,12,86,2273,9,86,1,87,1,87,1,87,5,87,2278,8,
	87,10,87,12,87,2281,9,87,1,88,1,88,1,88,3,88,2286,8,88,1,88,1,88,1,89,1,
	89,3,89,2292,8,89,1,89,1,89,3,89,2296,8,89,3,89,2298,8,89,1,90,1,90,1,90,
	5,90,2303,8,90,10,90,12,90,2306,9,90,1,91,1,91,1,91,1,91,5,91,2312,8,91,
	10,91,12,91,2315,9,91,1,91,1,91,1,92,1,92,1,92,1,92,1,92,1,92,5,92,2325,
	8,92,10,92,12,92,2328,9,92,1,92,1,92,3,92,2332,8,92,1,93,1,93,3,93,2336,
	8,93,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,3,95,2350,
	8,95,3,95,2352,8,95,1,95,1,95,1,95,1,95,1,95,1,95,5,95,2360,8,95,10,95,
	12,95,2363,9,95,1,96,3,96,2366,8,96,1,96,1,96,1,96,1,96,1,96,1,96,3,96,
	2374,8,96,1,96,1,96,1,96,1,96,1,96,5,96,2381,8,96,10,96,12,96,2384,9,96,
	1,96,1,96,1,96,3,96,2389,8,96,1,96,1,96,1,96,1,96,1,96,1,96,3,96,2397,8,
	96,1,96,1,96,1,96,3,96,2402,8,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,
	5,96,2412,8,96,10,96,12,96,2415,9,96,1,96,1,96,3,96,2419,8,96,1,96,3,96,
	2422,8,96,1,96,1,96,1,96,1,96,3,96,2428,8,96,1,96,1,96,3,96,2432,8,96,1,
	96,1,96,1,96,3,96,2437,8,96,1,96,1,96,1,96,3,96,2442,8,96,1,96,1,96,1,96,
	3,96,2447,8,96,1,97,1,97,1,97,1,97,3,97,2453,8,97,1,97,1,97,1,97,1,97,1,
	97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,
	5,97,2474,8,97,10,97,12,97,2477,9,97,1,98,1,98,1,98,1,98,4,98,2483,8,98,
	11,98,12,98,2484,1,98,1,98,3,98,2489,8,98,1,98,1,98,1,98,1,98,1,98,4,98,
	2496,8,98,11,98,12,98,2497,1,98,1,98,3,98,2502,8,98,1,98,1,98,1,98,1,98,
	1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,5,98,2518,8,98,10,98,
	12,98,2521,9,98,3,98,2523,8,98,1,98,1,98,1,98,1,98,1,98,1,98,3,98,2531,
	8,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,3,98,2540,8,98,1,98,1,98,1,98,1,
	98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,
	1,98,4,98,2561,8,98,11,98,12,98,2562,1,98,1,98,1,98,1,98,1,98,1,98,1,98,
	1,98,1,98,3,98,2574,8,98,1,98,1,98,1,98,5,98,2579,8,98,10,98,12,98,2582,
	9,98,3,98,2584,8,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,3,98,2593,8,98,1,
	98,1,98,3,98,2597,8,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,4,98,2607,
	8,98,11,98,12,98,2608,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,
	1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,3,98,2634,
	8,98,1,98,1,98,1,98,1,98,1,98,3,98,2641,8,98,1,98,3,98,2644,8,98,1,98,1,
	98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,3,98,2659,8,98,
	1,98,1,98,3,98,2663,8,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,5,98,2673,
	8,98,10,98,12,98,2676,9,98,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,4,99,
	2686,8,99,11,99,12,99,2687,3,99,2690,8,99,1,100,1,100,1,101,1,101,1,102,
	1,102,1,103,1,103,1,104,1,104,1,104,3,104,2703,8,104,1,105,1,105,3,105,
	2707,8,105,1,106,1,106,1,106,4,106,2712,8,106,11,106,12,106,2713,1,107,
	1,107,1,107,3,107,2719,8,107,1,108,1,108,1,108,1,108,1,108,1,109,3,109,
	2727,8,109,1,109,1,109,3,109,2731,8,109,1,110,1,110,1,110,3,110,2736,8,
	110,1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,
	111,1,111,1,111,1,111,3,111,2753,8,111,1,111,1,111,3,111,2757,8,111,1,111,
	1,111,1,111,1,111,1,111,5,111,2764,8,111,10,111,12,111,2767,9,111,1,111,
	3,111,2770,8,111,3,111,2772,8,111,1,112,1,112,1,112,5,112,2777,8,112,10,
	112,12,112,2780,9,112,1,113,1,113,1,113,1,113,3,113,2786,8,113,1,113,3,
	113,2789,8,113,1,113,3,113,2792,8,113,1,114,1,114,1,114,5,114,2797,8,114,
	10,114,12,114,2800,9,114,1,115,1,115,1,115,1,115,3,115,2806,8,115,1,115,
	3,115,2809,8,115,1,116,1,116,1,116,5,116,2814,8,116,10,116,12,116,2817,
	9,116,1,117,1,117,1,117,1,117,1,117,3,117,2824,8,117,1,117,3,117,2827,8,
	117,1,118,1,118,1,118,1,118,1,118,1,119,1,119,1,119,1,119,5,119,2838,8,
	119,10,119,12,119,2841,9,119,1,120,1,120,1,120,1,120,1,121,1,121,1,121,
	1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,5,121,2858,8,121,10,121,
	12,121,2861,9,121,1,121,1,121,1,121,1,121,1,121,5,121,2868,8,121,10,121,
	12,121,2871,9,121,3,121,2873,8,121,1,121,1,121,1,121,1,121,1,121,5,121,
	2880,8,121,10,121,12,121,2883,9,121,3,121,2885,8,121,3,121,2887,8,121,1,
	121,3,121,2890,8,121,1,121,3,121,2893,8,121,1,122,1,122,1,122,1,122,1,122,
	1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,3,122,
	2911,8,122,1,123,1,123,1,123,1,123,1,123,1,123,1,123,3,123,2920,8,123,1,
	124,1,124,1,124,5,124,2925,8,124,10,124,12,124,2928,9,124,1,125,1,125,1,
	125,1,125,3,125,2934,8,125,1,126,1,126,1,126,5,126,2939,8,126,10,126,12,
	126,2942,9,126,1,127,1,127,1,127,1,128,1,128,4,128,2949,8,128,11,128,12,
	128,2950,1,128,3,128,2954,8,128,1,129,1,129,1,129,3,129,2959,8,129,1,130,
	1,130,1,130,1,130,1,130,1,130,3,130,2967,8,130,1,131,1,131,1,132,1,132,
	3,132,2973,8,132,1,132,1,132,1,132,3,132,2978,8,132,1,132,1,132,1,132,3,
	132,2983,8,132,1,132,1,132,3,132,2987,8,132,1,132,1,132,3,132,2991,8,132,
	1,132,1,132,3,132,2995,8,132,1,132,1,132,3,132,2999,8,132,1,132,1,132,3,
	132,3003,8,132,1,132,1,132,3,132,3007,8,132,1,132,1,132,3,132,3011,8,132,
	1,132,3,132,3014,8,132,1,133,1,133,1,133,1,133,1,133,1,133,1,133,3,133,
	3023,8,133,1,134,1,134,1,135,1,135,1,136,1,136,1,136,8,922,984,994,1011,
	1020,1029,1038,1045,4,84,190,194,196,137,0,2,4,6,8,10,12,14,16,18,20,22,
	24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
	72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,
	116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,
	152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,
	188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,
	224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,256,258,
	260,262,264,266,268,270,272,0,43,2,0,63,63,176,176,2,0,31,31,190,190,2,
	0,62,62,146,146,2,0,99,99,111,111,1,0,42,43,2,0,222,222,253,253,2,0,14,
	14,34,34,5,0,39,39,51,51,85,85,98,98,139,139,1,0,67,68,2,0,85,85,98,98,
	2,0,150,150,279,279,2,0,11,11,133,133,2,0,135,135,279,279,3,0,61,61,145,
	145,200,200,4,0,80,80,118,118,208,208,243,243,3,0,80,80,208,208,243,243,
	2,0,22,22,67,67,2,0,93,93,125,125,2,0,13,13,72,72,2,0,283,283,285,285,3,
	0,13,13,18,18,212,212,3,0,88,88,237,237,245,245,2,0,268,269,273,273,2,0,
	74,74,270,272,2,0,268,269,276,276,2,0,56,56,58,58,1,0,220,221,2,0,3,3,99,
	99,2,0,3,3,95,95,3,0,26,26,128,128,232,232,1,0,260,267,2,0,74,74,268,277,
	4,0,16,16,111,111,149,149,157,157,2,0,88,88,237,237,1,0,268,269,2,0,73,
	73,166,166,2,0,158,158,213,213,2,0,94,94,173,173,1,0,284,285,2,0,75,75,
	207,207,48,0,11,12,14,15,17,17,19,20,22,23,25,25,27,31,34,34,36,39,41,41,
	43,49,51,51,54,55,60,71,73,75,79,79,81,87,90,90,92,94,97,98,101,103,106,
	106,108,110,112,113,115,117,119,119,122,122,124,127,130,146,148,148,151,
	152,155,156,159,159,161,162,164,173,175,183,185,191,193,200,202,205,207,
	211,213,221,223,227,231,231,233,242,246,249,252,254,257,257,259,259,15,
	0,17,17,53,53,80,80,100,100,114,114,118,118,123,123,129,129,147,147,153,
	153,192,192,202,202,208,208,243,243,251,251,16,0,11,16,18,52,54,79,81,99,
	101,113,115,117,119,122,124,128,130,146,148,152,154,191,193,201,203,207,
	209,242,244,250,252,259,3505,0,274,1,0,0,0,2,284,1,0,0,0,4,287,1,0,0,0,
	6,289,1,0,0,0,8,292,1,0,0,0,10,295,1,0,0,0,12,298,1,0,0,0,14,301,1,0,0,
	0,16,1048,1,0,0,0,18,1050,1,0,0,0,20,1220,1,0,0,0,22,1222,1,0,0,0,24,1239,
	1,0,0,0,26,1245,1,0,0,0,28,1257,1,0,0,0,30,1270,1,0,0,0,32,1273,1,0,0,0,
	34,1277,1,0,0,0,36,1337,1,0,0,0,38,1339,1,0,0,0,40,1343,1,0,0,0,42,1355,
	1,0,0,0,44,1360,1,0,0,0,46,1367,1,0,0,0,48,1369,1,0,0,0,50,1377,1,0,0,0,
	52,1386,1,0,0,0,54,1397,1,0,0,0,56,1412,1,0,0,0,58,1415,1,0,0,0,60,1426,
	1,0,0,0,62,1442,1,0,0,0,64,1448,1,0,0,0,66,1450,1,0,0,0,68,1461,1,0,0,0,
	70,1478,1,0,0,0,72,1485,1,0,0,0,74,1487,1,0,0,0,76,1493,1,0,0,0,78,1547,
	1,0,0,0,80,1559,1,0,0,0,82,1607,1,0,0,0,84,1610,1,0,0,0,86,1648,1,0,0,0,
	88,1650,1,0,0,0,90,1658,1,0,0,0,92,1691,1,0,0,0,94,1722,1,0,0,0,96,1734,
	1,0,0,0,98,1766,1,0,0,0,100,1778,1,0,0,0,102,1781,1,0,0,0,104,1790,1,0,
	0,0,106,1807,1,0,0,0,108,1827,1,0,0,0,110,1829,1,0,0,0,112,1837,1,0,0,0,
	114,1841,1,0,0,0,116,1844,1,0,0,0,118,1847,1,0,0,0,120,1873,1,0,0,0,122,
	1875,1,0,0,0,124,1937,1,0,0,0,126,1952,1,0,0,0,128,1954,1,0,0,0,130,1984,
	1,0,0,0,132,1986,1,0,0,0,134,1993,1,0,0,0,136,2025,1,0,0,0,138,2027,1,0,
	0,0,140,2045,1,0,0,0,142,2071,1,0,0,0,144,2077,1,0,0,0,146,2079,1,0,0,0,
	148,2110,1,0,0,0,150,2112,1,0,0,0,152,2116,1,0,0,0,154,2124,1,0,0,0,156,
	2135,1,0,0,0,158,2139,1,0,0,0,160,2150,1,0,0,0,162,2178,1,0,0,0,164,2180,
	1,0,0,0,166,2191,1,0,0,0,168,2213,1,0,0,0,170,2264,1,0,0,0,172,2266,1,0,
	0,0,174,2274,1,0,0,0,176,2285,1,0,0,0,178,2289,1,0,0,0,180,2299,1,0,0,0,
	182,2307,1,0,0,0,184,2331,1,0,0,0,186,2335,1,0,0,0,188,2337,1,0,0,0,190,
	2351,1,0,0,0,192,2446,1,0,0,0,194,2452,1,0,0,0,196,2662,1,0,0,0,198,2689,
	1,0,0,0,200,2691,1,0,0,0,202,2693,1,0,0,0,204,2695,1,0,0,0,206,2697,1,0,
	0,0,208,2699,1,0,0,0,210,2704,1,0,0,0,212,2711,1,0,0,0,214,2715,1,0,0,0,
	216,2720,1,0,0,0,218,2730,1,0,0,0,220,2735,1,0,0,0,222,2771,1,0,0,0,224,
	2773,1,0,0,0,226,2781,1,0,0,0,228,2793,1,0,0,0,230,2801,1,0,0,0,232,2810,
	1,0,0,0,234,2818,1,0,0,0,236,2828,1,0,0,0,238,2833,1,0,0,0,240,2842,1,0,
	0,0,242,2892,1,0,0,0,244,2910,1,0,0,0,246,2919,1,0,0,0,248,2921,1,0,0,0,
	250,2933,1,0,0,0,252,2935,1,0,0,0,254,2943,1,0,0,0,256,2953,1,0,0,0,258,
	2958,1,0,0,0,260,2966,1,0,0,0,262,2968,1,0,0,0,264,3013,1,0,0,0,266,3022,
	1,0,0,0,268,3024,1,0,0,0,270,3026,1,0,0,0,272,3028,1,0,0,0,274,275,3,2,
	1,0,275,276,5,0,0,1,276,1,1,0,0,0,277,279,3,16,8,0,278,280,5,278,0,0,279,
	278,1,0,0,0,279,280,1,0,0,0,280,283,1,0,0,0,281,283,3,4,2,0,282,277,1,0,
	0,0,282,281,1,0,0,0,283,286,1,0,0,0,284,282,1,0,0,0,284,285,1,0,0,0,285,
	3,1,0,0,0,286,284,1,0,0,0,287,288,5,278,0,0,288,5,1,0,0,0,289,290,3,178,
	89,0,290,291,5,0,0,1,291,7,1,0,0,0,292,293,3,176,88,0,293,294,5,0,0,1,294,
	9,1,0,0,0,295,296,3,174,87,0,296,297,5,0,0,1,297,11,1,0,0,0,298,299,3,222,
	111,0,299,300,5,0,0,1,300,13,1,0,0,0,301,302,3,228,114,0,302,303,5,0,0,
	1,303,15,1,0,0,0,304,1049,3,34,17,0,305,307,3,50,25,0,306,305,1,0,0,0,306,
	307,1,0,0,0,307,308,1,0,0,0,308,1049,3,78,39,0,309,311,5,249,0,0,310,312,
	5,145,0,0,311,310,1,0,0,0,311,312,1,0,0,0,312,313,1,0,0,0,313,1049,3,174,
	87,0,314,315,5,52,0,0,315,319,3,44,22,0,316,317,5,108,0,0,317,318,5,149,
	0,0,318,320,5,82,0,0,319,316,1,0,0,0,319,320,1,0,0,0,320,321,1,0,0,0,321,
	329,3,174,87,0,322,328,3,32,16,0,323,328,3,30,15,0,324,325,5,258,0,0,325,
	326,7,0,0,0,326,328,3,58,29,0,327,322,1,0,0,0,327,323,1,0,0,0,327,324,1,
	0,0,0,328,331,1,0,0,0,329,327,1,0,0,0,329,330,1,0,0,0,330,1049,1,0,0,0,
	331,329,1,0,0,0,332,333,5,14,0,0,333,334,3,44,22,0,334,335,3,174,87,0,335,
	336,5,207,0,0,336,337,7,0,0,0,337,338,3,58,29,0,338,1049,1,0,0,0,339,340,
	5,14,0,0,340,341,3,44,22,0,341,342,3,174,87,0,342,343,5,207,0,0,343,344,
	3,30,15,0,344,1049,1,0,0,0,345,346,5,75,0,0,346,349,3,44,22,0,347,348,5,
	108,0,0,348,350,5,82,0,0,349,347,1,0,0,0,349,350,1,0,0,0,350,351,1,0,0,
	0,351,353,3,174,87,0,352,354,7,1,0,0,353,352,1,0,0,0,353,354,1,0,0,0,354,
	1049,1,0,0,0,355,356,5,210,0,0,356,359,7,2,0,0,357,358,7,3,0,0,358,360,
	3,174,87,0,359,357,1,0,0,0,359,360,1,0,0,0,360,365,1,0,0,0,361,363,5,130,
	0,0,362,361,1,0,0,0,362,363,1,0,0,0,363,364,1,0,0,0,364,366,5,279,0,0,365,
	362,1,0,0,0,365,366,1,0,0,0,366,1049,1,0,0,0,367,372,3,22,11,0,368,369,
	5,1,0,0,369,370,3,228,114,0,370,371,5,2,0,0,371,373,1,0,0,0,372,368,1,0,
	0,0,372,373,1,0,0,0,373,374,1,0,0,0,374,375,3,54,27,0,375,380,3,56,28,0,
	376,378,5,21,0,0,377,376,1,0,0,0,377,378,1,0,0,0,378,379,1,0,0,0,379,381,
	3,34,17,0,380,377,1,0,0,0,380,381,1,0,0,0,381,1049,1,0,0,0,382,387,3,22,
	11,0,383,384,5,1,0,0,384,385,3,228,114,0,385,386,5,2,0,0,386,388,1,0,0,
	0,387,383,1,0,0,0,387,388,1,0,0,0,388,410,1,0,0,0,389,409,3,32,16,0,390,
	391,5,167,0,0,391,392,5,29,0,0,392,393,5,1,0,0,393,394,3,228,114,0,394,
	395,5,2,0,0,395,400,1,0,0,0,396,397,5,167,0,0,397,398,5,29,0,0,398,400,
	3,150,75,0,399,390,1,0,0,0,399,396,1,0,0,0,400,409,1,0,0,0,401,409,3,26,
	13,0,402,409,3,28,14,0,403,409,3,170,85,0,404,409,3,70,35,0,405,409,3,30,
	15,0,406,407,5,225,0,0,407,409,3,58,29,0,408,389,1,0,0,0,408,399,1,0,0,
	0,408,401,1,0,0,0,408,402,1,0,0,0,408,403,1,0,0,0,408,404,1,0,0,0,408,405,
	1,0,0,0,408,406,1,0,0,0,409,412,1,0,0,0,410,408,1,0,0,0,410,411,1,0,0,0,
	411,417,1,0,0,0,412,410,1,0,0,0,413,415,5,21,0,0,414,413,1,0,0,0,414,415,
	1,0,0,0,415,416,1,0,0,0,416,418,3,34,17,0,417,414,1,0,0,0,417,418,1,0,0,
	0,418,1049,1,0,0,0,419,420,5,52,0,0,420,424,5,222,0,0,421,422,5,108,0,0,
	422,423,5,149,0,0,423,425,5,82,0,0,424,421,1,0,0,0,424,425,1,0,0,0,425,
	426,1,0,0,0,426,427,3,176,88,0,427,428,5,130,0,0,428,437,3,176,88,0,429,
	436,3,54,27,0,430,436,3,170,85,0,431,436,3,70,35,0,432,436,3,30,15,0,433,
	434,5,225,0,0,434,436,3,58,29,0,435,429,1,0,0,0,435,430,1,0,0,0,435,431,
	1,0,0,0,435,432,1,0,0,0,435,433,1,0,0,0,436,439,1,0,0,0,437,435,1,0,0,0,
	437,438,1,0,0,0,438,1049,1,0,0,0,439,437,1,0,0,0,440,445,3,24,12,0,441,
	442,5,1,0,0,442,443,3,228,114,0,443,444,5,2,0,0,444,446,1,0,0,0,445,441,
	1,0,0,0,445,446,1,0,0,0,446,447,1,0,0,0,447,448,3,54,27,0,448,453,3,56,
	28,0,449,451,5,21,0,0,450,449,1,0,0,0,450,451,1,0,0,0,451,452,1,0,0,0,452,
	454,3,34,17,0,453,450,1,0,0,0,453,454,1,0,0,0,454,1049,1,0,0,0,455,456,
	5,15,0,0,456,457,5,222,0,0,457,459,3,174,87,0,458,460,3,40,20,0,459,458,
	1,0,0,0,459,460,1,0,0,0,460,461,1,0,0,0,461,462,5,48,0,0,462,470,5,216,
	0,0,463,471,3,258,129,0,464,465,5,95,0,0,465,466,5,43,0,0,466,471,3,152,
	76,0,467,468,5,95,0,0,468,469,5,13,0,0,469,471,5,43,0,0,470,463,1,0,0,0,
	470,464,1,0,0,0,470,467,1,0,0,0,470,471,1,0,0,0,471,1049,1,0,0,0,472,473,
	5,14,0,0,473,474,5,222,0,0,474,475,3,174,87,0,475,476,5,11,0,0,476,477,
	7,4,0,0,477,478,3,224,112,0,478,1049,1,0,0,0,479,480,5,14,0,0,480,481,5,
	222,0,0,481,482,3,174,87,0,482,483,5,11,0,0,483,484,7,4,0,0,484,485,5,1,
	0,0,485,486,3,224,112,0,486,487,5,2,0,0,487,1049,1,0,0,0,488,489,5,14,0,
	0,489,490,5,222,0,0,490,491,3,174,87,0,491,492,5,186,0,0,492,493,5,42,0,
	0,493,494,3,174,87,0,494,495,5,230,0,0,495,496,3,254,127,0,496,1049,1,0,
	0,0,497,498,5,14,0,0,498,499,5,222,0,0,499,500,3,174,87,0,500,501,5,75,
	0,0,501,502,7,4,0,0,502,503,5,1,0,0,503,504,3,172,86,0,504,505,5,2,0,0,
	505,1049,1,0,0,0,506,507,5,14,0,0,507,508,5,222,0,0,508,509,3,174,87,0,
	509,510,5,75,0,0,510,511,7,4,0,0,511,512,3,172,86,0,512,1049,1,0,0,0,513,
	514,5,14,0,0,514,515,7,5,0,0,515,516,3,174,87,0,516,517,5,186,0,0,517,518,
	5,230,0,0,518,519,3,174,87,0,519,1049,1,0,0,0,520,521,5,14,0,0,521,522,
	7,5,0,0,522,523,3,174,87,0,523,524,5,207,0,0,524,525,5,225,0,0,525,526,
	3,58,29,0,526,1049,1,0,0,0,527,528,5,14,0,0,528,529,7,5,0,0,529,530,3,174,
	87,0,530,531,5,247,0,0,531,534,5,225,0,0,532,533,5,108,0,0,533,535,5,82,
	0,0,534,532,1,0,0,0,534,535,1,0,0,0,535,536,1,0,0,0,536,537,3,58,29,0,537,
	1049,1,0,0,0,538,539,5,14,0,0,539,540,5,222,0,0,540,541,3,174,87,0,541,
	543,7,6,0,0,542,544,5,42,0,0,543,542,1,0,0,0,543,544,1,0,0,0,544,545,1,
	0,0,0,545,547,3,174,87,0,546,548,3,266,133,0,547,546,1,0,0,0,547,548,1,
	0,0,0,548,1049,1,0,0,0,549,550,5,14,0,0,550,551,5,222,0,0,551,553,3,174,
	87,0,552,554,3,40,20,0,553,552,1,0,0,0,553,554,1,0,0,0,554,555,1,0,0,0,
	555,557,5,34,0,0,556,558,5,42,0,0,557,556,1,0,0,0,557,558,1,0,0,0,558,559,
	1,0,0,0,559,560,3,174,87,0,560,562,3,230,115,0,561,563,3,220,110,0,562,
	561,1,0,0,0,562,563,1,0,0,0,563,1049,1,0,0,0,564,565,5,14,0,0,565,566,5,
	222,0,0,566,568,3,174,87,0,567,569,3,40,20,0,568,567,1,0,0,0,568,569,1,
	0,0,0,569,570,1,0,0,0,570,571,5,188,0,0,571,572,5,43,0,0,572,573,5,1,0,
	0,573,574,3,224,112,0,574,575,5,2,0,0,575,1049,1,0,0,0,576,577,5,14,0,0,
	577,578,5,222,0,0,578,580,3,174,87,0,579,581,3,40,20,0,580,579,1,0,0,0,
	580,581,1,0,0,0,581,582,1,0,0,0,582,583,5,207,0,0,583,584,5,204,0,0,584,
	588,5,279,0,0,585,586,5,258,0,0,586,587,5,205,0,0,587,589,3,58,29,0,588,
	585,1,0,0,0,588,589,1,0,0,0,589,1049,1,0,0,0,590,591,5,14,0,0,591,592,5,
	222,0,0,592,594,3,174,87,0,593,595,3,40,20,0,594,593,1,0,0,0,594,595,1,
	0,0,0,595,596,1,0,0,0,596,597,5,207,0,0,597,598,5,205,0,0,598,599,3,58,
	29,0,599,1049,1,0,0,0,600,601,5,14,0,0,601,602,7,5,0,0,602,603,3,174,87,
	0,603,607,5,11,0,0,604,605,5,108,0,0,605,606,5,149,0,0,606,608,5,82,0,0,
	607,604,1,0,0,0,607,608,1,0,0,0,608,610,1,0,0,0,609,611,3,38,19,0,610,609,
	1,0,0,0,611,612,1,0,0,0,612,610,1,0,0,0,612,613,1,0,0,0,613,1049,1,0,0,
	0,614,615,5,14,0,0,615,616,5,222,0,0,616,617,3,174,87,0,617,618,3,40,20,
	0,618,619,5,186,0,0,619,620,5,230,0,0,620,621,3,40,20,0,621,1049,1,0,0,
	0,622,623,5,14,0,0,623,624,7,5,0,0,624,625,3,174,87,0,625,628,5,75,0,0,
	626,627,5,108,0,0,627,629,5,82,0,0,628,626,1,0,0,0,628,629,1,0,0,0,629,
	630,1,0,0,0,630,635,3,40,20,0,631,632,5,3,0,0,632,634,3,40,20,0,633,631,
	1,0,0,0,634,637,1,0,0,0,635,633,1,0,0,0,635,636,1,0,0,0,636,639,1,0,0,0,
	637,635,1,0,0,0,638,640,5,177,0,0,639,638,1,0,0,0,639,640,1,0,0,0,640,1049,
	1,0,0,0,641,642,5,14,0,0,642,643,5,222,0,0,643,645,3,174,87,0,644,646,3,
	40,20,0,645,644,1,0,0,0,645,646,1,0,0,0,646,647,1,0,0,0,647,648,5,207,0,
	0,648,649,3,30,15,0,649,1049,1,0,0,0,650,651,5,14,0,0,651,652,5,222,0,0,
	652,653,3,174,87,0,653,654,5,182,0,0,654,655,5,168,0,0,655,1049,1,0,0,0,
	656,657,5,75,0,0,657,660,5,222,0,0,658,659,5,108,0,0,659,661,5,82,0,0,660,
	658,1,0,0,0,660,661,1,0,0,0,661,662,1,0,0,0,662,664,3,174,87,0,663,665,
	5,177,0,0,664,663,1,0,0,0,664,665,1,0,0,0,665,1049,1,0,0,0,666,667,5,75,
	0,0,667,670,5,253,0,0,668,669,5,108,0,0,669,671,5,82,0,0,670,668,1,0,0,
	0,670,671,1,0,0,0,671,672,1,0,0,0,672,1049,3,174,87,0,673,676,5,52,0,0,
	674,675,5,157,0,0,675,677,5,188,0,0,676,674,1,0,0,0,676,677,1,0,0,0,677,
	682,1,0,0,0,678,680,5,103,0,0,679,678,1,0,0,0,679,680,1,0,0,0,680,681,1,
	0,0,0,681,683,5,226,0,0,682,679,1,0,0,0,682,683,1,0,0,0,683,684,1,0,0,0,
	684,688,5,253,0,0,685,686,5,108,0,0,686,687,5,149,0,0,687,689,5,82,0,0,
	688,685,1,0,0,0,688,689,1,0,0,0,689,690,1,0,0,0,690,692,3,174,87,0,691,
	693,3,158,79,0,692,691,1,0,0,0,692,693,1,0,0,0,693,702,1,0,0,0,694,701,
	3,32,16,0,695,696,5,167,0,0,696,697,5,153,0,0,697,701,3,150,75,0,698,699,
	5,225,0,0,699,701,3,58,29,0,700,694,1,0,0,0,700,695,1,0,0,0,700,698,1,0,
	0,0,701,704,1,0,0,0,702,700,1,0,0,0,702,703,1,0,0,0,703,705,1,0,0,0,704,
	702,1,0,0,0,705,706,5,21,0,0,706,707,3,34,17,0,707,1049,1,0,0,0,708,711,
	5,52,0,0,709,710,5,157,0,0,710,712,5,188,0,0,711,709,1,0,0,0,711,712,1,
	0,0,0,712,714,1,0,0,0,713,715,5,103,0,0,714,713,1,0,0,0,714,715,1,0,0,0,
	715,716,1,0,0,0,716,717,5,226,0,0,717,718,5,253,0,0,718,723,3,176,88,0,
	719,720,5,1,0,0,720,721,3,228,114,0,721,722,5,2,0,0,722,724,1,0,0,0,723,
	719,1,0,0,0,723,724,1,0,0,0,724,725,1,0,0,0,725,728,3,54,27,0,726,727,5,
	156,0,0,727,729,3,58,29,0,728,726,1,0,0,0,728,729,1,0,0,0,729,1049,1,0,
	0,0,730,731,5,14,0,0,731,732,5,253,0,0,732,734,3,174,87,0,733,735,5,21,
	0,0,734,733,1,0,0,0,734,735,1,0,0,0,735,736,1,0,0,0,736,737,3,34,17,0,737,
	1049,1,0,0,0,738,741,5,52,0,0,739,740,5,157,0,0,740,742,5,188,0,0,741,739,
	1,0,0,0,741,742,1,0,0,0,742,744,1,0,0,0,743,745,5,226,0,0,744,743,1,0,0,
	0,744,745,1,0,0,0,745,746,1,0,0,0,746,750,5,101,0,0,747,748,5,108,0,0,748,
	749,5,149,0,0,749,751,5,82,0,0,750,747,1,0,0,0,750,751,1,0,0,0,751,752,
	1,0,0,0,752,753,3,174,87,0,753,754,5,21,0,0,754,764,5,279,0,0,755,756,5,
	251,0,0,756,761,3,76,38,0,757,758,5,3,0,0,758,760,3,76,38,0,759,757,1,0,
	0,0,760,763,1,0,0,0,761,759,1,0,0,0,761,762,1,0,0,0,762,765,1,0,0,0,763,
	761,1,0,0,0,764,755,1,0,0,0,764,765,1,0,0,0,765,1049,1,0,0,0,766,768,5,
	75,0,0,767,769,5,226,0,0,768,767,1,0,0,0,768,769,1,0,0,0,769,770,1,0,0,
	0,770,773,5,101,0,0,771,772,5,108,0,0,772,774,5,82,0,0,773,771,1,0,0,0,
	773,774,1,0,0,0,774,775,1,0,0,0,775,1049,3,174,87,0,776,778,5,83,0,0,777,
	779,7,7,0,0,778,777,1,0,0,0,778,779,1,0,0,0,779,780,1,0,0,0,780,1049,3,
	16,8,0,781,782,5,210,0,0,782,785,5,223,0,0,783,784,7,3,0,0,784,786,3,174,
	87,0,785,783,1,0,0,0,785,786,1,0,0,0,786,791,1,0,0,0,787,789,5,130,0,0,
	788,787,1,0,0,0,788,789,1,0,0,0,789,790,1,0,0,0,790,792,5,279,0,0,791,788,
	1,0,0,0,791,792,1,0,0,0,792,1049,1,0,0,0,793,794,5,210,0,0,794,795,5,222,
	0,0,795,798,5,85,0,0,796,797,7,3,0,0,797,799,3,174,87,0,798,796,1,0,0,0,
	798,799,1,0,0,0,799,800,1,0,0,0,800,801,5,130,0,0,801,803,5,279,0,0,802,
	804,3,40,20,0,803,802,1,0,0,0,803,804,1,0,0,0,804,1049,1,0,0,0,805,806,
	5,210,0,0,806,807,5,225,0,0,807,812,3,174,87,0,808,809,5,1,0,0,809,810,
	3,62,31,0,810,811,5,2,0,0,811,813,1,0,0,0,812,808,1,0,0,0,812,813,1,0,0,
	0,813,1049,1,0,0,0,814,815,5,210,0,0,815,816,5,43,0,0,816,817,7,3,0,0,817,
	820,3,174,87,0,818,819,7,3,0,0,819,821,3,174,87,0,820,818,1,0,0,0,820,821,
	1,0,0,0,821,1049,1,0,0,0,822,823,5,210,0,0,823,826,5,254,0,0,824,825,7,
	3,0,0,825,827,3,174,87,0,826,824,1,0,0,0,826,827,1,0,0,0,827,832,1,0,0,
	0,828,830,5,130,0,0,829,828,1,0,0,0,829,830,1,0,0,0,830,831,1,0,0,0,831,
	833,5,279,0,0,832,829,1,0,0,0,832,833,1,0,0,0,833,1049,1,0,0,0,834,835,
	5,210,0,0,835,836,5,168,0,0,836,838,3,174,87,0,837,839,3,40,20,0,838,837,
	1,0,0,0,838,839,1,0,0,0,839,1049,1,0,0,0,840,842,5,210,0,0,841,843,3,258,
	129,0,842,841,1,0,0,0,842,843,1,0,0,0,843,844,1,0,0,0,844,852,5,102,0,0,
	845,847,5,130,0,0,846,845,1,0,0,0,846,847,1,0,0,0,847,850,1,0,0,0,848,851,
	3,174,87,0,849,851,5,279,0,0,850,848,1,0,0,0,850,849,1,0,0,0,851,853,1,
	0,0,0,852,846,1,0,0,0,852,853,1,0,0,0,853,1049,1,0,0,0,854,855,5,210,0,
	0,855,856,5,52,0,0,856,857,5,222,0,0,857,860,3,174,87,0,858,859,5,21,0,
	0,859,861,5,204,0,0,860,858,1,0,0,0,860,861,1,0,0,0,861,1049,1,0,0,0,862,
	863,5,210,0,0,863,864,5,55,0,0,864,1049,5,145,0,0,865,866,7,8,0,0,866,868,
	5,101,0,0,867,869,5,85,0,0,868,867,1,0,0,0,868,869,1,0,0,0,869,870,1,0,
	0,0,870,1049,3,46,23,0,871,872,7,8,0,0,872,874,3,44,22,0,873,875,5,85,0,
	0,874,873,1,0,0,0,874,875,1,0,0,0,875,876,1,0,0,0,876,877,3,174,87,0,877,
	1049,1,0,0,0,878,880,7,8,0,0,879,881,5,222,0,0,880,879,1,0,0,0,880,881,
	1,0,0,0,881,883,1,0,0,0,882,884,7,9,0,0,883,882,1,0,0,0,883,884,1,0,0,0,
	884,885,1,0,0,0,885,887,3,174,87,0,886,888,3,40,20,0,887,886,1,0,0,0,887,
	888,1,0,0,0,888,890,1,0,0,0,889,891,3,48,24,0,890,889,1,0,0,0,890,891,1,
	0,0,0,891,1049,1,0,0,0,892,894,7,8,0,0,893,895,5,178,0,0,894,893,1,0,0,
	0,894,895,1,0,0,0,895,896,1,0,0,0,896,1049,3,34,17,0,897,898,5,44,0,0,898,
	899,5,153,0,0,899,900,3,44,22,0,900,901,3,174,87,0,901,902,5,121,0,0,902,
	903,7,10,0,0,903,1049,1,0,0,0,904,905,5,44,0,0,905,906,5,153,0,0,906,907,
	5,222,0,0,907,908,3,174,87,0,908,909,5,121,0,0,909,910,7,10,0,0,910,1049,
	1,0,0,0,911,912,5,185,0,0,912,913,5,222,0,0,913,1049,3,174,87,0,914,915,
	5,185,0,0,915,916,5,101,0,0,916,1049,3,174,87,0,917,925,5,185,0,0,918,926,
	5,279,0,0,919,921,9,0,0,0,920,919,1,0,0,0,921,924,1,0,0,0,922,923,1,0,0,
	0,922,920,1,0,0,0,923,926,1,0,0,0,924,922,1,0,0,0,925,918,1,0,0,0,925,922,
	1,0,0,0,926,1049,1,0,0,0,927,929,5,30,0,0,928,930,5,127,0,0,929,928,1,0,
	0,0,929,930,1,0,0,0,930,931,1,0,0,0,931,932,5,222,0,0,932,935,3,174,87,
	0,933,934,5,156,0,0,934,936,3,58,29,0,935,933,1,0,0,0,935,936,1,0,0,0,936,
	941,1,0,0,0,937,939,5,21,0,0,938,937,1,0,0,0,938,939,1,0,0,0,939,940,1,
	0,0,0,940,942,3,34,17,0,941,938,1,0,0,0,941,942,1,0,0,0,942,1049,1,0,0,
	0,943,944,5,242,0,0,944,947,5,222,0,0,945,946,5,108,0,0,946,948,5,82,0,
	0,947,945,1,0,0,0,947,948,1,0,0,0,948,949,1,0,0,0,949,1049,3,174,87,0,950,
	951,5,36,0,0,951,1049,5,30,0,0,952,953,5,134,0,0,953,955,5,60,0,0,954,956,
	5,135,0,0,955,954,1,0,0,0,955,956,1,0,0,0,956,957,1,0,0,0,957,958,5,115,
	0,0,958,960,5,279,0,0,959,961,5,165,0,0,960,959,1,0,0,0,960,961,1,0,0,0,
	961,962,1,0,0,0,962,963,5,120,0,0,963,964,5,222,0,0,964,966,3,174,87,0,
	965,967,3,40,20,0,966,965,1,0,0,0,966,967,1,0,0,0,967,1049,1,0,0,0,968,
	969,5,238,0,0,969,970,5,222,0,0,970,972,3,174,87,0,971,973,3,40,20,0,972,
	971,1,0,0,0,972,973,1,0,0,0,973,1049,1,0,0,0,974,975,5,144,0,0,975,976,
	5,187,0,0,976,977,5,222,0,0,977,1049,3,174,87,0,978,979,7,11,0,0,979,987,
	3,258,129,0,980,988,5,279,0,0,981,983,9,0,0,0,982,981,1,0,0,0,983,986,1,
	0,0,0,984,985,1,0,0,0,984,982,1,0,0,0,985,988,1,0,0,0,986,984,1,0,0,0,987,
	980,1,0,0,0,987,984,1,0,0,0,988,1049,1,0,0,0,989,990,5,207,0,0,990,994,
	5,194,0,0,991,993,9,0,0,0,992,991,1,0,0,0,993,996,1,0,0,0,994,995,1,0,0,
	0,994,992,1,0,0,0,995,1049,1,0,0,0,996,994,1,0,0,0,997,998,5,207,0,0,998,
	999,5,229,0,0,999,1000,5,259,0,0,1000,1049,3,208,104,0,1001,1002,5,207,
	0,0,1002,1003,5,229,0,0,1003,1004,5,259,0,0,1004,1049,7,12,0,0,1005,1006,
	5,207,0,0,1006,1007,5,229,0,0,1007,1011,5,259,0,0,1008,1010,9,0,0,0,1009,
	1008,1,0,0,0,1010,1013,1,0,0,0,1011,1012,1,0,0,0,1011,1009,1,0,0,0,1012,
	1049,1,0,0,0,1013,1011,1,0,0,0,1014,1015,5,207,0,0,1015,1023,3,18,9,0,1016,
	1020,5,260,0,0,1017,1019,9,0,0,0,1018,1017,1,0,0,0,1019,1022,1,0,0,0,1020,
	1021,1,0,0,0,1020,1018,1,0,0,0,1021,1024,1,0,0,0,1022,1020,1,0,0,0,1023,
	1016,1,0,0,0,1023,1024,1,0,0,0,1024,1049,1,0,0,0,1025,1029,5,207,0,0,1026,
	1028,9,0,0,0,1027,1026,1,0,0,0,1028,1031,1,0,0,0,1029,1030,1,0,0,0,1029,
	1027,1,0,0,0,1030,1049,1,0,0,0,1031,1029,1,0,0,0,1032,1033,5,189,0,0,1033,
	1049,3,18,9,0,1034,1038,5,189,0,0,1035,1037,9,0,0,0,1036,1035,1,0,0,0,1037,
	1040,1,0,0,0,1038,1039,1,0,0,0,1038,1036,1,0,0,0,1039,1049,1,0,0,0,1040,
	1038,1,0,0,0,1041,1045,3,20,10,0,1042,1044,9,0,0,0,1043,1042,1,0,0,0,1044,
	1047,1,0,0,0,1045,1046,1,0,0,0,1045,1043,1,0,0,0,1046,1049,1,0,0,0,1047,
	1045,1,0,0,0,1048,304,1,0,0,0,1048,306,1,0,0,0,1048,309,1,0,0,0,1048,314,
	1,0,0,0,1048,332,1,0,0,0,1048,339,1,0,0,0,1048,345,1,0,0,0,1048,355,1,0,
	0,0,1048,367,1,0,0,0,1048,382,1,0,0,0,1048,419,1,0,0,0,1048,440,1,0,0,0,
	1048,455,1,0,0,0,1048,472,1,0,0,0,1048,479,1,0,0,0,1048,488,1,0,0,0,1048,
	497,1,0,0,0,1048,506,1,0,0,0,1048,513,1,0,0,0,1048,520,1,0,0,0,1048,527,
	1,0,0,0,1048,538,1,0,0,0,1048,549,1,0,0,0,1048,564,1,0,0,0,1048,576,1,0,
	0,0,1048,590,1,0,0,0,1048,600,1,0,0,0,1048,614,1,0,0,0,1048,622,1,0,0,0,
	1048,641,1,0,0,0,1048,650,1,0,0,0,1048,656,1,0,0,0,1048,666,1,0,0,0,1048,
	673,1,0,0,0,1048,708,1,0,0,0,1048,730,1,0,0,0,1048,738,1,0,0,0,1048,766,
	1,0,0,0,1048,776,1,0,0,0,1048,781,1,0,0,0,1048,793,1,0,0,0,1048,805,1,0,
	0,0,1048,814,1,0,0,0,1048,822,1,0,0,0,1048,834,1,0,0,0,1048,840,1,0,0,0,
	1048,854,1,0,0,0,1048,862,1,0,0,0,1048,865,1,0,0,0,1048,871,1,0,0,0,1048,
	878,1,0,0,0,1048,892,1,0,0,0,1048,897,1,0,0,0,1048,904,1,0,0,0,1048,911,
	1,0,0,0,1048,914,1,0,0,0,1048,917,1,0,0,0,1048,927,1,0,0,0,1048,943,1,0,
	0,0,1048,950,1,0,0,0,1048,952,1,0,0,0,1048,968,1,0,0,0,1048,974,1,0,0,0,
	1048,978,1,0,0,0,1048,989,1,0,0,0,1048,997,1,0,0,0,1048,1001,1,0,0,0,1048,
	1005,1,0,0,0,1048,1014,1,0,0,0,1048,1025,1,0,0,0,1048,1032,1,0,0,0,1048,
	1034,1,0,0,0,1048,1041,1,0,0,0,1049,17,1,0,0,0,1050,1051,3,262,131,0,1051,
	19,1,0,0,0,1052,1053,5,52,0,0,1053,1221,5,194,0,0,1054,1055,5,75,0,0,1055,
	1221,5,194,0,0,1056,1058,5,104,0,0,1057,1059,5,194,0,0,1058,1057,1,0,0,
	0,1058,1059,1,0,0,0,1059,1221,1,0,0,0,1060,1062,5,191,0,0,1061,1063,5,194,
	0,0,1062,1061,1,0,0,0,1062,1063,1,0,0,0,1063,1221,1,0,0,0,1064,1065,5,210,
	0,0,1065,1221,5,104,0,0,1066,1067,5,210,0,0,1067,1069,5,194,0,0,1068,1070,
	5,104,0,0,1069,1068,1,0,0,0,1069,1070,1,0,0,0,1070,1221,1,0,0,0,1071,1072,
	5,210,0,0,1072,1221,5,175,0,0,1073,1074,5,210,0,0,1074,1221,5,195,0,0,1075,
	1076,5,210,0,0,1076,1077,5,55,0,0,1077,1221,5,195,0,0,1078,1079,5,84,0,
	0,1079,1221,5,222,0,0,1080,1081,5,110,0,0,1081,1221,5,222,0,0,1082,1083,
	5,210,0,0,1083,1221,5,47,0,0,1084,1085,5,210,0,0,1085,1086,5,52,0,0,1086,
	1221,5,222,0,0,1087,1088,5,210,0,0,1088,1221,5,234,0,0,1089,1090,5,210,
	0,0,1090,1221,5,113,0,0,1091,1092,5,210,0,0,1092,1221,5,138,0,0,1093,1094,
	5,52,0,0,1094,1221,5,112,0,0,1095,1096,5,75,0,0,1096,1221,5,112,0,0,1097,
	1098,5,14,0,0,1098,1221,5,112,0,0,1099,1100,5,137,0,0,1100,1221,5,222,0,
	0,1101,1102,5,137,0,0,1102,1221,5,61,0,0,1103,1104,5,246,0,0,1104,1221,
	5,222,0,0,1105,1106,5,246,0,0,1106,1221,5,61,0,0,1107,1108,5,52,0,0,1108,
	1109,5,226,0,0,1109,1221,5,140,0,0,1110,1111,5,75,0,0,1111,1112,5,226,0,
	0,1112,1221,5,140,0,0,1113,1114,5,14,0,0,1114,1115,5,222,0,0,1115,1116,
	3,176,88,0,1116,1117,5,149,0,0,1117,1118,5,38,0,0,1118,1221,1,0,0,0,1119,
	1120,5,14,0,0,1120,1121,5,222,0,0,1121,1122,3,176,88,0,1122,1123,5,38,0,
	0,1123,1124,5,29,0,0,1124,1221,1,0,0,0,1125,1126,5,14,0,0,1126,1127,5,222,
	0,0,1127,1128,3,176,88,0,1128,1129,5,149,0,0,1129,1130,5,214,0,0,1130,1221,
	1,0,0,0,1131,1132,5,14,0,0,1132,1133,5,222,0,0,1133,1134,3,176,88,0,1134,
	1135,5,211,0,0,1135,1136,5,29,0,0,1136,1221,1,0,0,0,1137,1138,5,14,0,0,
	1138,1139,5,222,0,0,1139,1140,3,176,88,0,1140,1141,5,149,0,0,1141,1142,
	5,211,0,0,1142,1221,1,0,0,0,1143,1144,5,14,0,0,1144,1145,5,222,0,0,1145,
	1146,3,176,88,0,1146,1147,5,149,0,0,1147,1148,5,217,0,0,1148,1149,5,21,
	0,0,1149,1150,5,70,0,0,1150,1221,1,0,0,0,1151,1152,5,14,0,0,1152,1153,5,
	222,0,0,1153,1154,3,176,88,0,1154,1155,5,207,0,0,1155,1156,5,211,0,0,1156,
	1157,5,136,0,0,1157,1221,1,0,0,0,1158,1159,5,14,0,0,1159,1160,5,222,0,0,
	1160,1161,3,176,88,0,1161,1162,5,81,0,0,1162,1163,5,166,0,0,1163,1221,1,
	0,0,0,1164,1165,5,14,0,0,1165,1166,5,222,0,0,1166,1167,3,176,88,0,1167,
	1168,5,19,0,0,1168,1169,5,166,0,0,1169,1221,1,0,0,0,1170,1171,5,14,0,0,
	1171,1172,5,222,0,0,1172,1173,3,176,88,0,1173,1174,5,240,0,0,1174,1175,
	5,166,0,0,1175,1221,1,0,0,0,1176,1177,5,14,0,0,1177,1178,5,222,0,0,1178,
	1179,3,176,88,0,1179,1180,5,231,0,0,1180,1221,1,0,0,0,1181,1182,5,14,0,
	0,1182,1183,5,222,0,0,1183,1185,3,176,88,0,1184,1186,3,40,20,0,1185,1184,
	1,0,0,0,1185,1186,1,0,0,0,1186,1187,1,0,0,0,1187,1188,5,46,0,0,1188,1221,
	1,0,0,0,1189,1190,5,14,0,0,1190,1191,5,222,0,0,1191,1193,3,176,88,0,1192,
	1194,3,40,20,0,1193,1192,1,0,0,0,1193,1194,1,0,0,0,1194,1195,1,0,0,0,1195,
	1196,5,49,0,0,1196,1221,1,0,0,0,1197,1198,5,14,0,0,1198,1199,5,222,0,0,
	1199,1201,3,176,88,0,1200,1202,3,40,20,0,1201,1200,1,0,0,0,1201,1202,1,
	0,0,0,1202,1203,1,0,0,0,1203,1204,5,207,0,0,1204,1205,5,92,0,0,1205,1221,
	1,0,0,0,1206,1207,5,14,0,0,1207,1208,5,222,0,0,1208,1210,3,176,88,0,1209,
	1211,3,40,20,0,1210,1209,1,0,0,0,1210,1211,1,0,0,0,1211,1212,1,0,0,0,1212,
	1213,5,188,0,0,1213,1214,5,43,0,0,1214,1221,1,0,0,0,1215,1216,5,215,0,0,
	1216,1221,5,233,0,0,1217,1221,5,45,0,0,1218,1221,5,196,0,0,1219,1221,5,
	69,0,0,1220,1052,1,0,0,0,1220,1054,1,0,0,0,1220,1056,1,0,0,0,1220,1060,
	1,0,0,0,1220,1064,1,0,0,0,1220,1066,1,0,0,0,1220,1071,1,0,0,0,1220,1073,
	1,0,0,0,1220,1075,1,0,0,0,1220,1078,1,0,0,0,1220,1080,1,0,0,0,1220,1082,
	1,0,0,0,1220,1084,1,0,0,0,1220,1087,1,0,0,0,1220,1089,1,0,0,0,1220,1091,
	1,0,0,0,1220,1093,1,0,0,0,1220,1095,1,0,0,0,1220,1097,1,0,0,0,1220,1099,
	1,0,0,0,1220,1101,1,0,0,0,1220,1103,1,0,0,0,1220,1105,1,0,0,0,1220,1107,
	1,0,0,0,1220,1110,1,0,0,0,1220,1113,1,0,0,0,1220,1119,1,0,0,0,1220,1125,
	1,0,0,0,1220,1131,1,0,0,0,1220,1137,1,0,0,0,1220,1143,1,0,0,0,1220,1151,
	1,0,0,0,1220,1158,1,0,0,0,1220,1164,1,0,0,0,1220,1170,1,0,0,0,1220,1176,
	1,0,0,0,1220,1181,1,0,0,0,1220,1189,1,0,0,0,1220,1197,1,0,0,0,1220,1206,
	1,0,0,0,1220,1215,1,0,0,0,1220,1217,1,0,0,0,1220,1218,1,0,0,0,1220,1219,
	1,0,0,0,1221,21,1,0,0,0,1222,1224,5,52,0,0,1223,1225,5,226,0,0,1224,1223,
	1,0,0,0,1224,1225,1,0,0,0,1225,1227,1,0,0,0,1226,1228,5,86,0,0,1227,1226,
	1,0,0,0,1227,1228,1,0,0,0,1228,1229,1,0,0,0,1229,1233,5,222,0,0,1230,1231,
	5,108,0,0,1231,1232,5,149,0,0,1232,1234,5,82,0,0,1233,1230,1,0,0,0,1233,
	1234,1,0,0,0,1234,1235,1,0,0,0,1235,1236,3,174,87,0,1236,23,1,0,0,0,1237,
	1238,5,52,0,0,1238,1240,5,157,0,0,1239,1237,1,0,0,0,1239,1240,1,0,0,0,1240,
	1241,1,0,0,0,1241,1242,5,188,0,0,1242,1243,5,222,0,0,1243,1244,3,174,87,
	0,1244,25,1,0,0,0,1245,1246,5,38,0,0,1246,1247,5,29,0,0,1247,1251,3,150,
	75,0,1248,1249,5,214,0,0,1249,1250,5,29,0,0,1250,1252,3,154,77,0,1251,1248,
	1,0,0,0,1251,1252,1,0,0,0,1252,1253,1,0,0,0,1253,1254,5,120,0,0,1254,1255,
	5,283,0,0,1255,1256,5,28,0,0,1256,27,1,0,0,0,1257,1258,5,211,0,0,1258,1259,
	5,29,0,0,1259,1260,3,150,75,0,1260,1263,5,153,0,0,1261,1264,3,66,33,0,1262,
	1264,3,68,34,0,1263,1261,1,0,0,0,1263,1262,1,0,0,0,1264,1268,1,0,0,0,1265,
	1266,5,217,0,0,1266,1267,5,21,0,0,1267,1269,5,70,0,0,1268,1265,1,0,0,0,
	1268,1269,1,0,0,0,1269,29,1,0,0,0,1270,1271,5,136,0,0,1271,1272,5,279,0,
	0,1272,31,1,0,0,0,1273,1274,5,44,0,0,1274,1275,5,279,0,0,1275,33,1,0,0,
	0,1276,1278,3,50,25,0,1277,1276,1,0,0,0,1277,1278,1,0,0,0,1278,1279,1,0,
	0,0,1279,1280,3,84,42,0,1280,1281,3,80,40,0,1281,35,1,0,0,0,1282,1283,5,
	117,0,0,1283,1285,5,165,0,0,1284,1286,5,222,0,0,1285,1284,1,0,0,0,1285,
	1286,1,0,0,0,1286,1287,1,0,0,0,1287,1294,3,174,87,0,1288,1292,3,40,20,0,
	1289,1290,5,108,0,0,1290,1291,5,149,0,0,1291,1293,5,82,0,0,1292,1289,1,
	0,0,0,1292,1293,1,0,0,0,1293,1295,1,0,0,0,1294,1288,1,0,0,0,1294,1295,1,
	0,0,0,1295,1338,1,0,0,0,1296,1297,5,117,0,0,1297,1299,5,120,0,0,1298,1300,
	5,222,0,0,1299,1298,1,0,0,0,1299,1300,1,0,0,0,1300,1301,1,0,0,0,1301,1303,
	3,174,87,0,1302,1304,3,40,20,0,1303,1302,1,0,0,0,1303,1304,1,0,0,0,1304,
	1308,1,0,0,0,1305,1306,5,108,0,0,1306,1307,5,149,0,0,1307,1309,5,82,0,0,
	1308,1305,1,0,0,0,1308,1309,1,0,0,0,1309,1338,1,0,0,0,1310,1311,5,117,0,
	0,1311,1313,5,165,0,0,1312,1314,5,135,0,0,1313,1312,1,0,0,0,1313,1314,1,
	0,0,0,1314,1315,1,0,0,0,1315,1316,5,71,0,0,1316,1318,5,279,0,0,1317,1319,
	3,170,85,0,1318,1317,1,0,0,0,1318,1319,1,0,0,0,1319,1321,1,0,0,0,1320,1322,
	3,70,35,0,1321,1320,1,0,0,0,1321,1322,1,0,0,0,1322,1338,1,0,0,0,1323,1324,
	5,117,0,0,1324,1326,5,165,0,0,1325,1327,5,135,0,0,1326,1325,1,0,0,0,1326,
	1327,1,0,0,0,1327,1328,1,0,0,0,1328,1330,5,71,0,0,1329,1331,5,279,0,0,1330,
	1329,1,0,0,0,1330,1331,1,0,0,0,1331,1332,1,0,0,0,1332,1335,3,54,27,0,1333,
	1334,5,156,0,0,1334,1336,3,58,29,0,1335,1333,1,0,0,0,1335,1336,1,0,0,0,
	1336,1338,1,0,0,0,1337,1282,1,0,0,0,1337,1296,1,0,0,0,1337,1310,1,0,0,0,
	1337,1323,1,0,0,0,1338,37,1,0,0,0,1339,1341,3,40,20,0,1340,1342,3,30,15,
	0,1341,1340,1,0,0,0,1341,1342,1,0,0,0,1342,39,1,0,0,0,1343,1344,5,166,0,
	0,1344,1345,5,1,0,0,1345,1350,3,42,21,0,1346,1347,5,3,0,0,1347,1349,3,42,
	21,0,1348,1346,1,0,0,0,1349,1352,1,0,0,0,1350,1348,1,0,0,0,1350,1351,1,
	0,0,0,1351,1353,1,0,0,0,1352,1350,1,0,0,0,1353,1354,5,2,0,0,1354,41,1,0,
	0,0,1355,1358,3,258,129,0,1356,1357,5,260,0,0,1357,1359,3,198,99,0,1358,
	1356,1,0,0,0,1358,1359,1,0,0,0,1359,43,1,0,0,0,1360,1361,7,13,0,0,1361,
	45,1,0,0,0,1362,1368,3,252,126,0,1363,1368,5,279,0,0,1364,1368,3,200,100,
	0,1365,1368,3,202,101,0,1366,1368,3,204,102,0,1367,1362,1,0,0,0,1367,1363,
	1,0,0,0,1367,1364,1,0,0,0,1367,1365,1,0,0,0,1367,1366,1,0,0,0,1368,47,1,
	0,0,0,1369,1374,3,258,129,0,1370,1371,5,4,0,0,1371,1373,3,258,129,0,1372,
	1370,1,0,0,0,1373,1376,1,0,0,0,1374,1372,1,0,0,0,1374,1375,1,0,0,0,1375,
	49,1,0,0,0,1376,1374,1,0,0,0,1377,1378,5,258,0,0,1378,1383,3,52,26,0,1379,
	1380,5,3,0,0,1380,1382,3,52,26,0,1381,1379,1,0,0,0,1382,1385,1,0,0,0,1383,
	1381,1,0,0,0,1383,1384,1,0,0,0,1384,51,1,0,0,0,1385,1383,1,0,0,0,1386,1388,
	3,254,127,0,1387,1389,3,150,75,0,1388,1387,1,0,0,0,1388,1389,1,0,0,0,1389,
	1391,1,0,0,0,1390,1392,5,21,0,0,1391,1390,1,0,0,0,1391,1392,1,0,0,0,1392,
	1393,1,0,0,0,1393,1394,5,1,0,0,1394,1395,3,34,17,0,1395,1396,5,2,0,0,1396,
	53,1,0,0,0,1397,1398,5,251,0,0,1398,1399,3,174,87,0,1399,55,1,0,0,0,1400,
	1401,5,156,0,0,1401,1411,3,58,29,0,1402,1403,5,167,0,0,1403,1404,5,29,0,
	0,1404,1411,3,182,91,0,1405,1411,3,26,13,0,1406,1411,3,30,15,0,1407,1411,
	3,32,16,0,1408,1409,5,225,0,0,1409,1411,3,58,29,0,1410,1400,1,0,0,0,1410,
	1402,1,0,0,0,1410,1405,1,0,0,0,1410,1406,1,0,0,0,1410,1407,1,0,0,0,1410,
	1408,1,0,0,0,1411,1414,1,0,0,0,1412,1410,1,0,0,0,1412,1413,1,0,0,0,1413,
	57,1,0,0,0,1414,1412,1,0,0,0,1415,1416,5,1,0,0,1416,1421,3,60,30,0,1417,
	1418,5,3,0,0,1418,1420,3,60,30,0,1419,1417,1,0,0,0,1420,1423,1,0,0,0,1421,
	1419,1,0,0,0,1421,1422,1,0,0,0,1422,1424,1,0,0,0,1423,1421,1,0,0,0,1424,
	1425,5,2,0,0,1425,59,1,0,0,0,1426,1431,3,62,31,0,1427,1429,5,260,0,0,1428,
	1427,1,0,0,0,1428,1429,1,0,0,0,1429,1430,1,0,0,0,1430,1432,3,64,32,0,1431,
	1428,1,0,0,0,1431,1432,1,0,0,0,1432,61,1,0,0,0,1433,1438,3,258,129,0,1434,
	1435,5,4,0,0,1435,1437,3,258,129,0,1436,1434,1,0,0,0,1437,1440,1,0,0,0,
	1438,1436,1,0,0,0,1438,1439,1,0,0,0,1439,1443,1,0,0,0,1440,1438,1,0,0,0,
	1441,1443,5,279,0,0,1442,1433,1,0,0,0,1442,1441,1,0,0,0,1443,63,1,0,0,0,
	1444,1449,5,283,0,0,1445,1449,5,285,0,0,1446,1449,3,206,103,0,1447,1449,
	5,279,0,0,1448,1444,1,0,0,0,1448,1445,1,0,0,0,1448,1446,1,0,0,0,1448,1447,
	1,0,0,0,1449,65,1,0,0,0,1450,1451,5,1,0,0,1451,1456,3,198,99,0,1452,1453,
	5,3,0,0,1453,1455,3,198,99,0,1454,1452,1,0,0,0,1455,1458,1,0,0,0,1456,1454,
	1,0,0,0,1456,1457,1,0,0,0,1457,1459,1,0,0,0,1458,1456,1,0,0,0,1459,1460,
	5,2,0,0,1460,67,1,0,0,0,1461,1462,5,1,0,0,1462,1467,3,66,33,0,1463,1464,
	5,3,0,0,1464,1466,3,66,33,0,1465,1463,1,0,0,0,1466,1469,1,0,0,0,1467,1465,
	1,0,0,0,1467,1468,1,0,0,0,1468,1470,1,0,0,0,1469,1467,1,0,0,0,1470,1471,
	5,2,0,0,1471,69,1,0,0,0,1472,1473,5,217,0,0,1473,1474,5,21,0,0,1474,1479,
	3,72,36,0,1475,1476,5,217,0,0,1476,1477,5,29,0,0,1477,1479,3,74,37,0,1478,
	1472,1,0,0,0,1478,1475,1,0,0,0,1479,71,1,0,0,0,1480,1481,5,116,0,0,1481,
	1482,5,279,0,0,1482,1483,5,161,0,0,1483,1486,5,279,0,0,1484,1486,3,258,
	129,0,1485,1480,1,0,0,0,1485,1484,1,0,0,0,1486,73,1,0,0,0,1487,1491,5,279,
	0,0,1488,1489,5,258,0,0,1489,1490,5,205,0,0,1490,1492,3,58,29,0,1491,1488,
	1,0,0,0,1491,1492,1,0,0,0,1492,75,1,0,0,0,1493,1494,3,258,129,0,1494,1495,
	5,279,0,0,1495,77,1,0,0,0,1496,1497,3,36,18,0,1497,1498,3,84,42,0,1498,
	1499,3,80,40,0,1499,1548,1,0,0,0,1500,1502,3,122,61,0,1501,1503,3,82,41,
	0,1502,1501,1,0,0,0,1503,1504,1,0,0,0,1504,1502,1,0,0,0,1504,1505,1,0,0,
	0,1505,1548,1,0,0,0,1506,1507,5,65,0,0,1507,1508,5,99,0,0,1508,1509,3,174,
	87,0,1509,1511,3,168,84,0,1510,1512,3,114,57,0,1511,1510,1,0,0,0,1511,1512,
	1,0,0,0,1512,1548,1,0,0,0,1513,1514,5,248,0,0,1514,1515,3,174,87,0,1515,
	1516,3,168,84,0,1516,1518,3,100,50,0,1517,1519,3,114,57,0,1518,1517,1,0,
	0,0,1518,1519,1,0,0,0,1519,1548,1,0,0,0,1520,1521,5,143,0,0,1521,1522,5,
	120,0,0,1522,1523,3,174,87,0,1523,1524,3,168,84,0,1524,1530,5,251,0,0,1525,
	1531,3,174,87,0,1526,1527,5,1,0,0,1527,1528,3,34,17,0,1528,1529,5,2,0,0,
	1529,1531,1,0,0,0,1530,1525,1,0,0,0,1530,1526,1,0,0,0,1531,1532,1,0,0,0,
	1532,1533,3,168,84,0,1533,1534,5,153,0,0,1534,1538,3,190,95,0,1535,1537,
	3,102,51,0,1536,1535,1,0,0,0,1537,1540,1,0,0,0,1538,1536,1,0,0,0,1538,1539,
	1,0,0,0,1539,1544,1,0,0,0,1540,1538,1,0,0,0,1541,1543,3,104,52,0,1542,1541,
	1,0,0,0,1543,1546,1,0,0,0,1544,1542,1,0,0,0,1544,1545,1,0,0,0,1545,1548,
	1,0,0,0,1546,1544,1,0,0,0,1547,1496,1,0,0,0,1547,1500,1,0,0,0,1547,1506,
	1,0,0,0,1547,1513,1,0,0,0,1547,1520,1,0,0,0,1548,79,1,0,0,0,1549,1550,5,
	158,0,0,1550,1551,5,29,0,0,1551,1556,3,88,44,0,1552,1553,5,3,0,0,1553,1555,
	3,88,44,0,1554,1552,1,0,0,0,1555,1558,1,0,0,0,1556,1554,1,0,0,0,1556,1557,
	1,0,0,0,1557,1560,1,0,0,0,1558,1556,1,0,0,0,1559,1549,1,0,0,0,1559,1560,
	1,0,0,0,1560,1571,1,0,0,0,1561,1562,5,37,0,0,1562,1563,5,29,0,0,1563,1568,
	3,188,94,0,1564,1565,5,3,0,0,1565,1567,3,188,94,0,1566,1564,1,0,0,0,1567,
	1570,1,0,0,0,1568,1566,1,0,0,0,1568,1569,1,0,0,0,1569,1572,1,0,0,0,1570,
	1568,1,0,0,0,1571,1561,1,0,0,0,1571,1572,1,0,0,0,1572,1583,1,0,0,0,1573,
	1574,5,73,0,0,1574,1575,5,29,0,0,1575,1580,3,188,94,0,1576,1577,5,3,0,0,
	1577,1579,3,188,94,0,1578,1576,1,0,0,0,1579,1582,1,0,0,0,1580,1578,1,0,
	0,0,1580,1581,1,0,0,0,1581,1584,1,0,0,0,1582,1580,1,0,0,0,1583,1573,1,0,
	0,0,1583,1584,1,0,0,0,1584,1595,1,0,0,0,1585,1586,5,213,0,0,1586,1587,5,
	29,0,0,1587,1592,3,88,44,0,1588,1589,5,3,0,0,1589,1591,3,88,44,0,1590,1588,
	1,0,0,0,1591,1594,1,0,0,0,1592,1590,1,0,0,0,1592,1593,1,0,0,0,1593,1596,
	1,0,0,0,1594,1592,1,0,0,0,1595,1585,1,0,0,0,1595,1596,1,0,0,0,1596,1598,
	1,0,0,0,1597,1599,3,238,119,0,1598,1597,1,0,0,0,1598,1599,1,0,0,0,1599,
	1605,1,0,0,0,1600,1603,5,131,0,0,1601,1604,5,13,0,0,1602,1604,3,188,94,
	0,1603,1601,1,0,0,0,1603,1602,1,0,0,0,1604,1606,1,0,0,0,1605,1600,1,0,0,
	0,1605,1606,1,0,0,0,1606,81,1,0,0,0,1607,1608,3,36,18,0,1608,1609,3,92,
	46,0,1609,83,1,0,0,0,1610,1611,6,42,-1,0,1611,1612,3,86,43,0,1612,1636,
	1,0,0,0,1613,1614,10,3,0,0,1614,1615,4,42,1,0,1615,1617,7,14,0,0,1616,1618,
	3,136,68,0,1617,1616,1,0,0,0,1617,1618,1,0,0,0,1618,1619,1,0,0,0,1619,1635,
	3,84,42,4,1620,1621,10,2,0,0,1621,1622,4,42,3,0,1622,1624,5,118,0,0,1623,
	1625,3,136,68,0,1624,1623,1,0,0,0,1624,1625,1,0,0,0,1625,1626,1,0,0,0,1626,
	1635,3,84,42,3,1627,1628,10,1,0,0,1628,1629,4,42,5,0,1629,1631,7,15,0,0,
	1630,1632,3,136,68,0,1631,1630,1,0,0,0,1631,1632,1,0,0,0,1632,1633,1,0,
	0,0,1633,1635,3,84,42,2,1634,1613,1,0,0,0,1634,1620,1,0,0,0,1634,1627,1,
	0,0,0,1635,1638,1,0,0,0,1636,1634,1,0,0,0,1636,1637,1,0,0,0,1637,85,1,0,
	0,0,1638,1636,1,0,0,0,1639,1649,3,94,47,0,1640,1649,3,90,45,0,1641,1642,
	5,222,0,0,1642,1649,3,174,87,0,1643,1649,3,164,82,0,1644,1645,5,1,0,0,1645,
	1646,3,34,17,0,1646,1647,5,2,0,0,1647,1649,1,0,0,0,1648,1639,1,0,0,0,1648,
	1640,1,0,0,0,1648,1641,1,0,0,0,1648,1643,1,0,0,0,1648,1644,1,0,0,0,1649,
	87,1,0,0,0,1650,1652,3,188,94,0,1651,1653,7,16,0,0,1652,1651,1,0,0,0,1652,
	1653,1,0,0,0,1653,1656,1,0,0,0,1654,1655,5,151,0,0,1655,1657,7,17,0,0,1656,
	1654,1,0,0,0,1656,1657,1,0,0,0,1657,89,1,0,0,0,1658,1660,3,122,61,0,1659,
	1661,3,92,46,0,1660,1659,1,0,0,0,1661,1662,1,0,0,0,1662,1660,1,0,0,0,1662,
	1663,1,0,0,0,1663,91,1,0,0,0,1664,1666,3,96,48,0,1665,1667,3,114,57,0,1666,
	1665,1,0,0,0,1666,1667,1,0,0,0,1667,1668,1,0,0,0,1668,1669,3,80,40,0,1669,
	1692,1,0,0,0,1670,1674,3,98,49,0,1671,1673,3,134,67,0,1672,1671,1,0,0,0,
	1673,1676,1,0,0,0,1674,1672,1,0,0,0,1674,1675,1,0,0,0,1675,1678,1,0,0,0,
	1676,1674,1,0,0,0,1677,1679,3,114,57,0,1678,1677,1,0,0,0,1678,1679,1,0,
	0,0,1679,1681,1,0,0,0,1680,1682,3,124,62,0,1681,1680,1,0,0,0,1681,1682,
	1,0,0,0,1682,1684,1,0,0,0,1683,1685,3,116,58,0,1684,1683,1,0,0,0,1684,1685,
	1,0,0,0,1685,1687,1,0,0,0,1686,1688,3,238,119,0,1687,1686,1,0,0,0,1687,
	1688,1,0,0,0,1688,1689,1,0,0,0,1689,1690,3,80,40,0,1690,1692,1,0,0,0,1691,
	1664,1,0,0,0,1691,1670,1,0,0,0,1692,93,1,0,0,0,1693,1695,3,96,48,0,1694,
	1696,3,122,61,0,1695,1694,1,0,0,0,1695,1696,1,0,0,0,1696,1698,1,0,0,0,1697,
	1699,3,114,57,0,1698,1697,1,0,0,0,1698,1699,1,0,0,0,1699,1723,1,0,0,0,1700,
	1702,3,98,49,0,1701,1703,3,122,61,0,1702,1701,1,0,0,0,1702,1703,1,0,0,0,
	1703,1707,1,0,0,0,1704,1706,3,134,67,0,1705,1704,1,0,0,0,1706,1709,1,0,
	0,0,1707,1705,1,0,0,0,1707,1708,1,0,0,0,1708,1711,1,0,0,0,1709,1707,1,0,
	0,0,1710,1712,3,114,57,0,1711,1710,1,0,0,0,1711,1712,1,0,0,0,1712,1714,
	1,0,0,0,1713,1715,3,124,62,0,1714,1713,1,0,0,0,1714,1715,1,0,0,0,1715,1717,
	1,0,0,0,1716,1718,3,116,58,0,1717,1716,1,0,0,0,1717,1718,1,0,0,0,1718,1720,
	1,0,0,0,1719,1721,3,238,119,0,1720,1719,1,0,0,0,1720,1721,1,0,0,0,1721,
	1723,1,0,0,0,1722,1693,1,0,0,0,1722,1700,1,0,0,0,1723,95,1,0,0,0,1724,1725,
	5,201,0,0,1725,1726,5,235,0,0,1726,1727,5,1,0,0,1727,1728,3,180,90,0,1728,
	1729,5,2,0,0,1729,1735,1,0,0,0,1730,1731,5,141,0,0,1731,1735,3,180,90,0,
	1732,1733,5,183,0,0,1733,1735,3,180,90,0,1734,1724,1,0,0,0,1734,1730,1,
	0,0,0,1734,1732,1,0,0,0,1735,1737,1,0,0,0,1736,1738,3,170,85,0,1737,1736,
	1,0,0,0,1737,1738,1,0,0,0,1738,1741,1,0,0,0,1739,1740,5,181,0,0,1740,1742,
	5,279,0,0,1741,1739,1,0,0,0,1741,1742,1,0,0,0,1742,1743,1,0,0,0,1743,1744,
	5,251,0,0,1744,1757,5,279,0,0,1745,1755,5,21,0,0,1746,1756,3,152,76,0,1747,
	1756,3,228,114,0,1748,1751,5,1,0,0,1749,1752,3,152,76,0,1750,1752,3,228,
	114,0,1751,1749,1,0,0,0,1751,1750,1,0,0,0,1752,1753,1,0,0,0,1753,1754,5,
	2,0,0,1754,1756,1,0,0,0,1755,1746,1,0,0,0,1755,1747,1,0,0,0,1755,1748,1,
	0,0,0,1756,1758,1,0,0,0,1757,1745,1,0,0,0,1757,1758,1,0,0,0,1758,1760,1,
	0,0,0,1759,1761,3,170,85,0,1760,1759,1,0,0,0,1760,1761,1,0,0,0,1761,1764,
	1,0,0,0,1762,1763,5,180,0,0,1763,1765,5,279,0,0,1764,1762,1,0,0,0,1764,
	1765,1,0,0,0,1765,97,1,0,0,0,1766,1770,5,201,0,0,1767,1769,3,118,59,0,1768,
	1767,1,0,0,0,1769,1772,1,0,0,0,1770,1768,1,0,0,0,1770,1771,1,0,0,0,1771,
	1774,1,0,0,0,1772,1770,1,0,0,0,1773,1775,3,136,68,0,1774,1773,1,0,0,0,1774,
	1775,1,0,0,0,1775,1776,1,0,0,0,1776,1777,3,180,90,0,1777,99,1,0,0,0,1778,
	1779,5,207,0,0,1779,1780,3,110,55,0,1780,101,1,0,0,0,1781,1782,5,255,0,
	0,1782,1785,5,142,0,0,1783,1784,5,16,0,0,1784,1786,3,190,95,0,1785,1783,
	1,0,0,0,1785,1786,1,0,0,0,1786,1787,1,0,0,0,1787,1788,5,228,0,0,1788,1789,
	3,106,53,0,1789,103,1,0,0,0,1790,1791,5,255,0,0,1791,1792,5,149,0,0,1792,
	1795,5,142,0,0,1793,1794,5,16,0,0,1794,1796,3,190,95,0,1795,1793,1,0,0,
	0,1795,1796,1,0,0,0,1796,1797,1,0,0,0,1797,1798,5,228,0,0,1798,1799,3,108,
	54,0,1799,105,1,0,0,0,1800,1808,5,65,0,0,1801,1802,5,248,0,0,1802,1803,
	5,207,0,0,1803,1808,5,270,0,0,1804,1805,5,248,0,0,1805,1806,5,207,0,0,1806,
	1808,3,110,55,0,1807,1800,1,0,0,0,1807,1801,1,0,0,0,1807,1804,1,0,0,0,1808,
	107,1,0,0,0,1809,1810,5,117,0,0,1810,1828,5,270,0,0,1811,1812,5,117,0,0,
	1812,1813,5,1,0,0,1813,1814,3,172,86,0,1814,1815,5,2,0,0,1815,1816,5,252,
	0,0,1816,1817,5,1,0,0,1817,1822,3,188,94,0,1818,1819,5,3,0,0,1819,1821,
	3,188,94,0,1820,1818,1,0,0,0,1821,1824,1,0,0,0,1822,1820,1,0,0,0,1822,1823,
	1,0,0,0,1823,1825,1,0,0,0,1824,1822,1,0,0,0,1825,1826,5,2,0,0,1826,1828,
	1,0,0,0,1827,1809,1,0,0,0,1827,1811,1,0,0,0,1828,109,1,0,0,0,1829,1834,
	3,112,56,0,1830,1831,5,3,0,0,1831,1833,3,112,56,0,1832,1830,1,0,0,0,1833,
	1836,1,0,0,0,1834,1832,1,0,0,0,1834,1835,1,0,0,0,1835,111,1,0,0,0,1836,
	1834,1,0,0,0,1837,1838,3,174,87,0,1838,1839,5,260,0,0,1839,1840,3,188,94,
	0,1840,113,1,0,0,0,1841,1842,5,256,0,0,1842,1843,3,190,95,0,1843,115,1,
	0,0,0,1844,1845,5,107,0,0,1845,1846,3,190,95,0,1846,117,1,0,0,0,1847,1848,
	5,5,0,0,1848,1855,3,120,60,0,1849,1851,5,3,0,0,1850,1849,1,0,0,0,1850,1851,
	1,0,0,0,1851,1852,1,0,0,0,1852,1854,3,120,60,0,1853,1850,1,0,0,0,1854,1857,
	1,0,0,0,1855,1853,1,0,0,0,1855,1856,1,0,0,0,1856,1858,1,0,0,0,1857,1855,
	1,0,0,0,1858,1859,5,6,0,0,1859,119,1,0,0,0,1860,1874,3,258,129,0,1861,1862,
	3,258,129,0,1862,1863,5,1,0,0,1863,1868,3,196,98,0,1864,1865,5,3,0,0,1865,
	1867,3,196,98,0,1866,1864,1,0,0,0,1867,1870,1,0,0,0,1868,1866,1,0,0,0,1868,
	1869,1,0,0,0,1869,1871,1,0,0,0,1870,1868,1,0,0,0,1871,1872,5,2,0,0,1872,
	1874,1,0,0,0,1873,1860,1,0,0,0,1873,1861,1,0,0,0,1874,121,1,0,0,0,1875,
	1876,5,99,0,0,1876,1881,3,138,69,0,1877,1878,5,3,0,0,1878,1880,3,138,69,
	0,1879,1877,1,0,0,0,1880,1883,1,0,0,0,1881,1879,1,0,0,0,1881,1882,1,0,0,
	0,1882,1887,1,0,0,0,1883,1881,1,0,0,0,1884,1886,3,134,67,0,1885,1884,1,
	0,0,0,1886,1889,1,0,0,0,1887,1885,1,0,0,0,1887,1888,1,0,0,0,1888,1891,1,
	0,0,0,1889,1887,1,0,0,0,1890,1892,3,128,64,0,1891,1890,1,0,0,0,1891,1892,
	1,0,0,0,1892,123,1,0,0,0,1893,1894,5,105,0,0,1894,1895,5,29,0,0,1895,1900,
	3,188,94,0,1896,1897,5,3,0,0,1897,1899,3,188,94,0,1898,1896,1,0,0,0,1899,
	1902,1,0,0,0,1900,1898,1,0,0,0,1900,1901,1,0,0,0,1901,1920,1,0,0,0,1902,
	1900,1,0,0,0,1903,1904,5,258,0,0,1904,1921,5,197,0,0,1905,1906,5,258,0,
	0,1906,1921,5,54,0,0,1907,1908,5,106,0,0,1908,1909,5,209,0,0,1909,1910,
	5,1,0,0,1910,1915,3,126,63,0,1911,1912,5,3,0,0,1912,1914,3,126,63,0,1913,
	1911,1,0,0,0,1914,1917,1,0,0,0,1915,1913,1,0,0,0,1915,1916,1,0,0,0,1916,
	1918,1,0,0,0,1917,1915,1,0,0,0,1918,1919,5,2,0,0,1919,1921,1,0,0,0,1920,
	1903,1,0,0,0,1920,1905,1,0,0,0,1920,1907,1,0,0,0,1920,1921,1,0,0,0,1921,
	1938,1,0,0,0,1922,1923,5,105,0,0,1923,1924,5,29,0,0,1924,1925,5,106,0,0,
	1925,1926,5,209,0,0,1926,1927,5,1,0,0,1927,1932,3,126,63,0,1928,1929,5,
	3,0,0,1929,1931,3,126,63,0,1930,1928,1,0,0,0,1931,1934,1,0,0,0,1932,1930,
	1,0,0,0,1932,1933,1,0,0,0,1933,1935,1,0,0,0,1934,1932,1,0,0,0,1935,1936,
	5,2,0,0,1936,1938,1,0,0,0,1937,1893,1,0,0,0,1937,1922,1,0,0,0,1938,125,
	1,0,0,0,1939,1948,5,1,0,0,1940,1945,3,188,94,0,1941,1942,5,3,0,0,1942,1944,
	3,188,94,0,1943,1941,1,0,0,0,1944,1947,1,0,0,0,1945,1943,1,0,0,0,1945,1946,
	1,0,0,0,1946,1949,1,0,0,0,1947,1945,1,0,0,0,1948,1940,1,0,0,0,1948,1949,
	1,0,0,0,1949,1950,1,0,0,0,1950,1953,5,2,0,0,1951,1953,3,188,94,0,1952,1939,
	1,0,0,0,1952,1951,1,0,0,0,1953,127,1,0,0,0,1954,1955,5,170,0,0,1955,1956,
	5,1,0,0,1956,1957,3,180,90,0,1957,1958,5,95,0,0,1958,1959,3,130,65,0,1959,
	1960,5,111,0,0,1960,1961,5,1,0,0,1961,1966,3,132,66,0,1962,1963,5,3,0,0,
	1963,1965,3,132,66,0,1964,1962,1,0,0,0,1965,1968,1,0,0,0,1966,1964,1,0,
	0,0,1966,1967,1,0,0,0,1967,1969,1,0,0,0,1968,1966,1,0,0,0,1969,1970,5,2,
	0,0,1970,1971,5,2,0,0,1971,129,1,0,0,0,1972,1985,3,258,129,0,1973,1974,
	5,1,0,0,1974,1979,3,258,129,0,1975,1976,5,3,0,0,1976,1978,3,258,129,0,1977,
	1975,1,0,0,0,1978,1981,1,0,0,0,1979,1977,1,0,0,0,1979,1980,1,0,0,0,1980,
	1982,1,0,0,0,1981,1979,1,0,0,0,1982,1983,5,2,0,0,1983,1985,1,0,0,0,1984,
	1972,1,0,0,0,1984,1973,1,0,0,0,1985,131,1,0,0,0,1986,1991,3,188,94,0,1987,
	1989,5,21,0,0,1988,1987,1,0,0,0,1988,1989,1,0,0,0,1989,1990,1,0,0,0,1990,
	1992,3,258,129,0,1991,1988,1,0,0,0,1991,1992,1,0,0,0,1992,133,1,0,0,0,1993,
	1994,5,126,0,0,1994,1996,5,253,0,0,1995,1997,5,160,0,0,1996,1995,1,0,0,
	0,1996,1997,1,0,0,0,1997,1998,1,0,0,0,1998,1999,3,252,126,0,1999,2008,5,
	1,0,0,2000,2005,3,188,94,0,2001,2002,5,3,0,0,2002,2004,3,188,94,0,2003,
	2001,1,0,0,0,2004,2007,1,0,0,0,2005,2003,1,0,0,0,2005,2006,1,0,0,0,2006,
	2009,1,0,0,0,2007,2005,1,0,0,0,2008,2000,1,0,0,0,2008,2009,1,0,0,0,2009,
	2010,1,0,0,0,2010,2011,5,2,0,0,2011,2023,3,258,129,0,2012,2014,5,21,0,0,
	2013,2012,1,0,0,0,2013,2014,1,0,0,0,2014,2015,1,0,0,0,2015,2020,3,258,129,
	0,2016,2017,5,3,0,0,2017,2019,3,258,129,0,2018,2016,1,0,0,0,2019,2022,1,
	0,0,0,2020,2018,1,0,0,0,2020,2021,1,0,0,0,2021,2024,1,0,0,0,2022,2020,1,
	0,0,0,2023,2013,1,0,0,0,2023,2024,1,0,0,0,2024,135,1,0,0,0,2025,2026,7,
	18,0,0,2026,137,1,0,0,0,2027,2031,3,162,81,0,2028,2030,3,140,70,0,2029,
	2028,1,0,0,0,2030,2033,1,0,0,0,2031,2029,1,0,0,0,2031,2032,1,0,0,0,2032,
	139,1,0,0,0,2033,2031,1,0,0,0,2034,2035,3,142,71,0,2035,2036,5,123,0,0,
	2036,2038,3,162,81,0,2037,2039,3,144,72,0,2038,2037,1,0,0,0,2038,2039,1,
	0,0,0,2039,2046,1,0,0,0,2040,2041,5,147,0,0,2041,2042,3,142,71,0,2042,2043,
	5,123,0,0,2043,2044,3,162,81,0,2044,2046,1,0,0,0,2045,2034,1,0,0,0,2045,
	2040,1,0,0,0,2046,141,1,0,0,0,2047,2049,5,114,0,0,2048,2047,1,0,0,0,2048,
	2049,1,0,0,0,2049,2072,1,0,0,0,2050,2072,5,53,0,0,2051,2053,5,129,0,0,2052,
	2054,5,160,0,0,2053,2052,1,0,0,0,2053,2054,1,0,0,0,2054,2072,1,0,0,0,2055,
	2057,5,129,0,0,2056,2055,1,0,0,0,2056,2057,1,0,0,0,2057,2058,1,0,0,0,2058,
	2072,5,202,0,0,2059,2061,5,192,0,0,2060,2062,5,160,0,0,2061,2060,1,0,0,
	0,2061,2062,1,0,0,0,2062,2072,1,0,0,0,2063,2065,5,100,0,0,2064,2066,5,160,
	0,0,2065,2064,1,0,0,0,2065,2066,1,0,0,0,2066,2072,1,0,0,0,2067,2069,5,129,
	0,0,2068,2067,1,0,0,0,2068,2069,1,0,0,0,2069,2070,1,0,0,0,2070,2072,5,17,
	0,0,2071,2048,1,0,0,0,2071,2050,1,0,0,0,2071,2051,1,0,0,0,2071,2056,1,0,
	0,0,2071,2059,1,0,0,0,2071,2063,1,0,0,0,2071,2068,1,0,0,0,2072,143,1,0,
	0,0,2073,2074,5,153,0,0,2074,2078,3,190,95,0,2075,2076,5,251,0,0,2076,2078,
	3,150,75,0,2077,2073,1,0,0,0,2077,2075,1,0,0,0,2078,145,1,0,0,0,2079,2080,
	5,224,0,0,2080,2082,5,1,0,0,2081,2083,3,148,74,0,2082,2081,1,0,0,0,2082,
	2083,1,0,0,0,2083,2084,1,0,0,0,2084,2085,5,2,0,0,2085,147,1,0,0,0,2086,
	2088,5,269,0,0,2087,2086,1,0,0,0,2087,2088,1,0,0,0,2088,2089,1,0,0,0,2089,
	2090,7,19,0,0,2090,2111,5,169,0,0,2091,2092,3,188,94,0,2092,2093,5,199,
	0,0,2093,2111,1,0,0,0,2094,2095,5,27,0,0,2095,2096,5,283,0,0,2096,2097,
	5,159,0,0,2097,2098,5,152,0,0,2098,2107,5,283,0,0,2099,2105,5,153,0,0,2100,
	2106,3,258,129,0,2101,2102,3,252,126,0,2102,2103,5,1,0,0,2103,2104,5,2,
	0,0,2104,2106,1,0,0,0,2105,2100,1,0,0,0,2105,2101,1,0,0,0,2106,2108,1,0,
	0,0,2107,2099,1,0,0,0,2107,2108,1,0,0,0,2108,2111,1,0,0,0,2109,2111,3,188,
	94,0,2110,2087,1,0,0,0,2110,2091,1,0,0,0,2110,2094,1,0,0,0,2110,2109,1,
	0,0,0,2111,149,1,0,0,0,2112,2113,5,1,0,0,2113,2114,3,152,76,0,2114,2115,
	5,2,0,0,2115,151,1,0,0,0,2116,2121,3,254,127,0,2117,2118,5,3,0,0,2118,2120,
	3,254,127,0,2119,2117,1,0,0,0,2120,2123,1,0,0,0,2121,2119,1,0,0,0,2121,
	2122,1,0,0,0,2122,153,1,0,0,0,2123,2121,1,0,0,0,2124,2125,5,1,0,0,2125,
	2130,3,156,78,0,2126,2127,5,3,0,0,2127,2129,3,156,78,0,2128,2126,1,0,0,
	0,2129,2132,1,0,0,0,2130,2128,1,0,0,0,2130,2131,1,0,0,0,2131,2133,1,0,0,
	0,2132,2130,1,0,0,0,2133,2134,5,2,0,0,2134,155,1,0,0,0,2135,2137,3,254,
	127,0,2136,2138,7,16,0,0,2137,2136,1,0,0,0,2137,2138,1,0,0,0,2138,157,1,
	0,0,0,2139,2140,5,1,0,0,2140,2145,3,160,80,0,2141,2142,5,3,0,0,2142,2144,
	3,160,80,0,2143,2141,1,0,0,0,2144,2147,1,0,0,0,2145,2143,1,0,0,0,2145,2146,
	1,0,0,0,2146,2148,1,0,0,0,2147,2145,1,0,0,0,2148,2149,5,2,0,0,2149,159,
	1,0,0,0,2150,2152,3,258,129,0,2151,2153,3,32,16,0,2152,2151,1,0,0,0,2152,
	2153,1,0,0,0,2153,161,1,0,0,0,2154,2156,3,174,87,0,2155,2157,3,146,73,0,
	2156,2155,1,0,0,0,2156,2157,1,0,0,0,2157,2158,1,0,0,0,2158,2159,3,168,84,
	0,2159,2179,1,0,0,0,2160,2161,5,1,0,0,2161,2162,3,34,17,0,2162,2164,5,2,
	0,0,2163,2165,3,146,73,0,2164,2163,1,0,0,0,2164,2165,1,0,0,0,2165,2166,
	1,0,0,0,2166,2167,3,168,84,0,2167,2179,1,0,0,0,2168,2169,5,1,0,0,2169,2170,
	3,138,69,0,2170,2172,5,2,0,0,2171,2173,3,146,73,0,2172,2171,1,0,0,0,2172,
	2173,1,0,0,0,2173,2174,1,0,0,0,2174,2175,3,168,84,0,2175,2179,1,0,0,0,2176,
	2179,3,164,82,0,2177,2179,3,166,83,0,2178,2154,1,0,0,0,2178,2160,1,0,0,
	0,2178,2168,1,0,0,0,2178,2176,1,0,0,0,2178,2177,1,0,0,0,2179,163,1,0,0,
	0,2180,2181,5,252,0,0,2181,2186,3,188,94,0,2182,2183,5,3,0,0,2183,2185,
	3,188,94,0,2184,2182,1,0,0,0,2185,2188,1,0,0,0,2186,2184,1,0,0,0,2186,2187,
	1,0,0,0,2187,2189,1,0,0,0,2188,2186,1,0,0,0,2189,2190,3,168,84,0,2190,165,
	1,0,0,0,2191,2192,3,254,127,0,2192,2201,5,1,0,0,2193,2198,3,188,94,0,2194,
	2195,5,3,0,0,2195,2197,3,188,94,0,2196,2194,1,0,0,0,2197,2200,1,0,0,0,2198,
	2196,1,0,0,0,2198,2199,1,0,0,0,2199,2202,1,0,0,0,2200,2198,1,0,0,0,2201,
	2193,1,0,0,0,2201,2202,1,0,0,0,2202,2203,1,0,0,0,2203,2204,5,2,0,0,2204,
	2205,3,168,84,0,2205,167,1,0,0,0,2206,2208,5,21,0,0,2207,2206,1,0,0,0,2207,
	2208,1,0,0,0,2208,2209,1,0,0,0,2209,2211,3,260,130,0,2210,2212,3,150,75,
	0,2211,2210,1,0,0,0,2211,2212,1,0,0,0,2212,2214,1,0,0,0,2213,2207,1,0,0,
	0,2213,2214,1,0,0,0,2214,169,1,0,0,0,2215,2216,5,198,0,0,2216,2217,5,97,
	0,0,2217,2218,5,204,0,0,2218,2222,5,279,0,0,2219,2220,5,258,0,0,2220,2221,
	5,205,0,0,2221,2223,3,58,29,0,2222,2219,1,0,0,0,2222,2223,1,0,0,0,2223,
	2265,1,0,0,0,2224,2225,5,198,0,0,2225,2226,5,97,0,0,2226,2236,5,66,0,0,
	2227,2228,5,90,0,0,2228,2229,5,227,0,0,2229,2230,5,29,0,0,2230,2234,5,279,
	0,0,2231,2232,5,79,0,0,2232,2233,5,29,0,0,2233,2235,5,279,0,0,2234,2231,
	1,0,0,0,2234,2235,1,0,0,0,2235,2237,1,0,0,0,2236,2227,1,0,0,0,2236,2237,
	1,0,0,0,2237,2243,1,0,0,0,2238,2239,5,41,0,0,2239,2240,5,122,0,0,2240,2241,
	5,227,0,0,2241,2242,5,29,0,0,2242,2244,5,279,0,0,2243,2238,1,0,0,0,2243,
	2244,1,0,0,0,2244,2250,1,0,0,0,2245,2246,5,141,0,0,2246,2247,5,124,0,0,
	2247,2248,5,227,0,0,2248,2249,5,29,0,0,2249,2251,5,279,0,0,2250,2245,1,
	0,0,0,2250,2251,1,0,0,0,2251,2256,1,0,0,0,2252,2253,5,132,0,0,2253,2254,
	5,227,0,0,2254,2255,5,29,0,0,2255,2257,5,279,0,0,2256,2252,1,0,0,0,2256,
	2257,1,0,0,0,2257,2262,1,0,0,0,2258,2259,5,150,0,0,2259,2260,5,64,0,0,2260,
	2261,5,21,0,0,2261,2263,5,279,0,0,2262,2258,1,0,0,0,2262,2263,1,0,0,0,2263,
	2265,1,0,0,0,2264,2215,1,0,0,0,2264,2224,1,0,0,0,2265,171,1,0,0,0,2266,
	2271,3,174,87,0,2267,2268,5,3,0,0,2268,2270,3,174,87,0,2269,2267,1,0,0,
	0,2270,2273,1,0,0,0,2271,2269,1,0,0,0,2271,2272,1,0,0,0,2272,173,1,0,0,
	0,2273,2271,1,0,0,0,2274,2279,3,254,127,0,2275,2276,5,4,0,0,2276,2278,3,
	254,127,0,2277,2275,1,0,0,0,2278,2281,1,0,0,0,2279,2277,1,0,0,0,2279,2280,
	1,0,0,0,2280,175,1,0,0,0,2281,2279,1,0,0,0,2282,2283,3,254,127,0,2283,2284,
	5,4,0,0,2284,2286,1,0,0,0,2285,2282,1,0,0,0,2285,2286,1,0,0,0,2286,2287,
	1,0,0,0,2287,2288,3,254,127,0,2288,177,1,0,0,0,2289,2297,3,188,94,0,2290,
	2292,5,21,0,0,2291,2290,1,0,0,0,2291,2292,1,0,0,0,2292,2295,1,0,0,0,2293,
	2296,3,254,127,0,2294,2296,3,150,75,0,2295,2293,1,0,0,0,2295,2294,1,0,0,
	0,2296,2298,1,0,0,0,2297,2291,1,0,0,0,2297,2298,1,0,0,0,2298,179,1,0,0,
	0,2299,2304,3,178,89,0,2300,2301,5,3,0,0,2301,2303,3,178,89,0,2302,2300,
	1,0,0,0,2303,2306,1,0,0,0,2304,2302,1,0,0,0,2304,2305,1,0,0,0,2305,181,
	1,0,0,0,2306,2304,1,0,0,0,2307,2308,5,1,0,0,2308,2313,3,184,92,0,2309,2310,
	5,3,0,0,2310,2312,3,184,92,0,2311,2309,1,0,0,0,2312,2315,1,0,0,0,2313,2311,
	1,0,0,0,2313,2314,1,0,0,0,2314,2316,1,0,0,0,2315,2313,1,0,0,0,2316,2317,
	5,2,0,0,2317,183,1,0,0,0,2318,2332,3,252,126,0,2319,2320,3,258,129,0,2320,
	2321,5,1,0,0,2321,2326,3,186,93,0,2322,2323,5,3,0,0,2323,2325,3,186,93,
	0,2324,2322,1,0,0,0,2325,2328,1,0,0,0,2326,2324,1,0,0,0,2326,2327,1,0,0,
	0,2327,2329,1,0,0,0,2328,2326,1,0,0,0,2329,2330,5,2,0,0,2330,2332,1,0,0,
	0,2331,2318,1,0,0,0,2331,2319,1,0,0,0,2332,185,1,0,0,0,2333,2336,3,252,
	126,0,2334,2336,3,198,99,0,2335,2333,1,0,0,0,2335,2334,1,0,0,0,2336,187,
	1,0,0,0,2337,2338,3,190,95,0,2338,189,1,0,0,0,2339,2340,6,95,-1,0,2340,
	2341,5,149,0,0,2341,2352,3,190,95,5,2342,2343,5,82,0,0,2343,2344,5,1,0,
	0,2344,2345,3,34,17,0,2345,2346,5,2,0,0,2346,2352,1,0,0,0,2347,2349,3,194,
	97,0,2348,2350,3,192,96,0,2349,2348,1,0,0,0,2349,2350,1,0,0,0,2350,2352,
	1,0,0,0,2351,2339,1,0,0,0,2351,2342,1,0,0,0,2351,2347,1,0,0,0,2352,2361,
	1,0,0,0,2353,2354,10,2,0,0,2354,2355,5,16,0,0,2355,2360,3,190,95,3,2356,
	2357,10,1,0,0,2357,2358,5,157,0,0,2358,2360,3,190,95,2,2359,2353,1,0,0,
	0,2359,2356,1,0,0,0,2360,2363,1,0,0,0,2361,2359,1,0,0,0,2361,2362,1,0,0,
	0,2362,191,1,0,0,0,2363,2361,1,0,0,0,2364,2366,5,149,0,0,2365,2364,1,0,
	0,0,2365,2366,1,0,0,0,2366,2367,1,0,0,0,2367,2368,5,25,0,0,2368,2369,3,
	194,97,0,2369,2370,5,16,0,0,2370,2371,3,194,97,0,2371,2447,1,0,0,0,2372,
	2374,5,149,0,0,2373,2372,1,0,0,0,2373,2374,1,0,0,0,2374,2375,1,0,0,0,2375,
	2376,5,111,0,0,2376,2377,5,1,0,0,2377,2382,3,188,94,0,2378,2379,5,3,0,0,
	2379,2381,3,188,94,0,2380,2378,1,0,0,0,2381,2384,1,0,0,0,2382,2380,1,0,
	0,0,2382,2383,1,0,0,0,2383,2385,1,0,0,0,2384,2382,1,0,0,0,2385,2386,5,2,
	0,0,2386,2447,1,0,0,0,2387,2389,5,149,0,0,2388,2387,1,0,0,0,2388,2389,1,
	0,0,0,2389,2390,1,0,0,0,2390,2391,5,111,0,0,2391,2392,5,1,0,0,2392,2393,
	3,34,17,0,2393,2394,5,2,0,0,2394,2447,1,0,0,0,2395,2397,5,149,0,0,2396,
	2395,1,0,0,0,2396,2397,1,0,0,0,2397,2398,1,0,0,0,2398,2399,5,193,0,0,2399,
	2447,3,194,97,0,2400,2402,5,149,0,0,2401,2400,1,0,0,0,2401,2402,1,0,0,0,
	2402,2403,1,0,0,0,2403,2404,5,130,0,0,2404,2418,7,20,0,0,2405,2406,5,1,
	0,0,2406,2419,5,2,0,0,2407,2408,5,1,0,0,2408,2413,3,188,94,0,2409,2410,
	5,3,0,0,2410,2412,3,188,94,0,2411,2409,1,0,0,0,2412,2415,1,0,0,0,2413,2411,
	1,0,0,0,2413,2414,1,0,0,0,2414,2416,1,0,0,0,2415,2413,1,0,0,0,2416,2417,
	5,2,0,0,2417,2419,1,0,0,0,2418,2405,1,0,0,0,2418,2407,1,0,0,0,2419,2447,
	1,0,0,0,2420,2422,5,149,0,0,2421,2420,1,0,0,0,2421,2422,1,0,0,0,2422,2423,
	1,0,0,0,2423,2424,5,130,0,0,2424,2427,3,194,97,0,2425,2426,5,78,0,0,2426,
	2428,5,279,0,0,2427,2425,1,0,0,0,2427,2428,1,0,0,0,2428,2447,1,0,0,0,2429,
	2431,5,121,0,0,2430,2432,5,149,0,0,2431,2430,1,0,0,0,2431,2432,1,0,0,0,
	2432,2433,1,0,0,0,2433,2447,5,150,0,0,2434,2436,5,121,0,0,2435,2437,5,149,
	0,0,2436,2435,1,0,0,0,2436,2437,1,0,0,0,2437,2438,1,0,0,0,2438,2447,7,21,
	0,0,2439,2441,5,121,0,0,2440,2442,5,149,0,0,2441,2440,1,0,0,0,2441,2442,
	1,0,0,0,2442,2443,1,0,0,0,2443,2444,5,72,0,0,2444,2445,5,99,0,0,2445,2447,
	3,194,97,0,2446,2365,1,0,0,0,2446,2373,1,0,0,0,2446,2388,1,0,0,0,2446,2396,
	1,0,0,0,2446,2401,1,0,0,0,2446,2421,1,0,0,0,2446,2429,1,0,0,0,2446,2434,
	1,0,0,0,2446,2439,1,0,0,0,2447,193,1,0,0,0,2448,2449,6,97,-1,0,2449,2453,
	3,196,98,0,2450,2451,7,22,0,0,2451,2453,3,194,97,7,2452,2448,1,0,0,0,2452,
	2450,1,0,0,0,2453,2475,1,0,0,0,2454,2455,10,6,0,0,2455,2456,7,23,0,0,2456,
	2474,3,194,97,7,2457,2458,10,5,0,0,2458,2459,7,24,0,0,2459,2474,3,194,97,
	6,2460,2461,10,4,0,0,2461,2462,5,274,0,0,2462,2474,3,194,97,5,2463,2464,
	10,3,0,0,2464,2465,5,277,0,0,2465,2474,3,194,97,4,2466,2467,10,2,0,0,2467,
	2468,5,275,0,0,2468,2474,3,194,97,3,2469,2470,10,1,0,0,2470,2471,3,200,
	100,0,2471,2472,3,194,97,2,2472,2474,1,0,0,0,2473,2454,1,0,0,0,2473,2457,
	1,0,0,0,2473,2460,1,0,0,0,2473,2463,1,0,0,0,2473,2466,1,0,0,0,2473,2469,
	1,0,0,0,2474,2477,1,0,0,0,2475,2473,1,0,0,0,2475,2476,1,0,0,0,2476,195,
	1,0,0,0,2477,2475,1,0,0,0,2478,2479,6,98,-1,0,2479,2663,7,25,0,0,2480,2482,
	5,32,0,0,2481,2483,3,236,118,0,2482,2481,1,0,0,0,2483,2484,1,0,0,0,2484,
	2482,1,0,0,0,2484,2485,1,0,0,0,2485,2488,1,0,0,0,2486,2487,5,76,0,0,2487,
	2489,3,188,94,0,2488,2486,1,0,0,0,2488,2489,1,0,0,0,2489,2490,1,0,0,0,2490,
	2491,5,77,0,0,2491,2663,1,0,0,0,2492,2493,5,32,0,0,2493,2495,3,188,94,0,
	2494,2496,3,236,118,0,2495,2494,1,0,0,0,2496,2497,1,0,0,0,2497,2495,1,0,
	0,0,2497,2498,1,0,0,0,2498,2501,1,0,0,0,2499,2500,5,76,0,0,2500,2502,3,
	188,94,0,2501,2499,1,0,0,0,2501,2502,1,0,0,0,2502,2503,1,0,0,0,2503,2504,
	5,77,0,0,2504,2663,1,0,0,0,2505,2506,5,33,0,0,2506,2507,5,1,0,0,2507,2508,
	3,188,94,0,2508,2509,5,21,0,0,2509,2510,3,222,111,0,2510,2511,5,2,0,0,2511,
	2663,1,0,0,0,2512,2513,5,219,0,0,2513,2522,5,1,0,0,2514,2519,3,178,89,0,
	2515,2516,5,3,0,0,2516,2518,3,178,89,0,2517,2515,1,0,0,0,2518,2521,1,0,
	0,0,2519,2517,1,0,0,0,2519,2520,1,0,0,0,2520,2523,1,0,0,0,2521,2519,1,0,
	0,0,2522,2514,1,0,0,0,2522,2523,1,0,0,0,2523,2524,1,0,0,0,2524,2663,5,2,
	0,0,2525,2526,5,93,0,0,2526,2527,5,1,0,0,2527,2530,3,188,94,0,2528,2529,
	5,109,0,0,2529,2531,5,151,0,0,2530,2528,1,0,0,0,2530,2531,1,0,0,0,2531,
	2532,1,0,0,0,2532,2533,5,2,0,0,2533,2663,1,0,0,0,2534,2535,5,125,0,0,2535,
	2536,5,1,0,0,2536,2539,3,188,94,0,2537,2538,5,109,0,0,2538,2540,5,151,0,
	0,2539,2537,1,0,0,0,2539,2540,1,0,0,0,2540,2541,1,0,0,0,2541,2542,5,2,0,
	0,2542,2663,1,0,0,0,2543,2544,5,172,0,0,2544,2545,5,1,0,0,2545,2546,3,194,
	97,0,2546,2547,5,111,0,0,2547,2548,3,194,97,0,2548,2549,5,2,0,0,2549,2663,
	1,0,0,0,2550,2663,3,198,99,0,2551,2663,5,270,0,0,2552,2553,3,252,126,0,
	2553,2554,5,4,0,0,2554,2555,5,270,0,0,2555,2663,1,0,0,0,2556,2557,5,1,0,
	0,2557,2560,3,178,89,0,2558,2559,5,3,0,0,2559,2561,3,178,89,0,2560,2558,
	1,0,0,0,2561,2562,1,0,0,0,2562,2560,1,0,0,0,2562,2563,1,0,0,0,2563,2564,
	1,0,0,0,2564,2565,5,2,0,0,2565,2663,1,0,0,0,2566,2567,5,1,0,0,2567,2568,
	3,34,17,0,2568,2569,5,2,0,0,2569,2663,1,0,0,0,2570,2571,3,250,125,0,2571,
	2583,5,1,0,0,2572,2574,3,136,68,0,2573,2572,1,0,0,0,2573,2574,1,0,0,0,2574,
	2575,1,0,0,0,2575,2580,3,188,94,0,2576,2577,5,3,0,0,2577,2579,3,188,94,
	0,2578,2576,1,0,0,0,2579,2582,1,0,0,0,2580,2578,1,0,0,0,2580,2581,1,0,0,
	0,2581,2584,1,0,0,0,2582,2580,1,0,0,0,2583,2573,1,0,0,0,2583,2584,1,0,0,
	0,2584,2585,1,0,0,0,2585,2592,5,2,0,0,2586,2587,5,91,0,0,2587,2588,5,1,
	0,0,2588,2589,5,256,0,0,2589,2590,3,190,95,0,2590,2591,5,2,0,0,2591,2593,
	1,0,0,0,2592,2586,1,0,0,0,2592,2593,1,0,0,0,2593,2596,1,0,0,0,2594,2595,
	5,162,0,0,2595,2597,3,242,121,0,2596,2594,1,0,0,0,2596,2597,1,0,0,0,2597,
	2663,1,0,0,0,2598,2599,3,258,129,0,2599,2600,5,7,0,0,2600,2601,3,188,94,
	0,2601,2663,1,0,0,0,2602,2603,5,1,0,0,2603,2606,3,258,129,0,2604,2605,5,
	3,0,0,2605,2607,3,258,129,0,2606,2604,1,0,0,0,2607,2608,1,0,0,0,2608,2606,
	1,0,0,0,2608,2609,1,0,0,0,2609,2610,1,0,0,0,2610,2611,5,2,0,0,2611,2612,
	5,7,0,0,2612,2613,3,188,94,0,2613,2663,1,0,0,0,2614,2663,3,258,129,0,2615,
	2616,5,1,0,0,2616,2617,3,188,94,0,2617,2618,5,2,0,0,2618,2663,1,0,0,0,2619,
	2620,5,87,0,0,2620,2621,5,1,0,0,2621,2622,3,258,129,0,2622,2623,5,99,0,
	0,2623,2624,3,194,97,0,2624,2625,5,2,0,0,2625,2663,1,0,0,0,2626,2627,7,
	26,0,0,2627,2628,5,1,0,0,2628,2629,3,194,97,0,2629,2630,7,27,0,0,2630,2633,
	3,194,97,0,2631,2632,7,28,0,0,2632,2634,3,194,97,0,2633,2631,1,0,0,0,2633,
	2634,1,0,0,0,2634,2635,1,0,0,0,2635,2636,5,2,0,0,2636,2663,1,0,0,0,2637,
	2638,5,236,0,0,2638,2640,5,1,0,0,2639,2641,7,29,0,0,2640,2639,1,0,0,0,2640,
	2641,1,0,0,0,2641,2643,1,0,0,0,2642,2644,3,194,97,0,2643,2642,1,0,0,0,2643,
	2644,1,0,0,0,2644,2645,1,0,0,0,2645,2646,5,99,0,0,2646,2647,3,194,97,0,
	2647,2648,5,2,0,0,2648,2663,1,0,0,0,2649,2650,5,164,0,0,2650,2651,5,1,0,
	0,2651,2652,3,194,97,0,2652,2653,5,171,0,0,2653,2654,3,194,97,0,2654,2655,
	5,99,0,0,2655,2658,3,194,97,0,2656,2657,5,95,0,0,2657,2659,3,194,97,0,2658,
	2656,1,0,0,0,2658,2659,1,0,0,0,2659,2660,1,0,0,0,2660,2661,5,2,0,0,2661,
	2663,1,0,0,0,2662,2478,1,0,0,0,2662,2480,1,0,0,0,2662,2492,1,0,0,0,2662,
	2505,1,0,0,0,2662,2512,1,0,0,0,2662,2525,1,0,0,0,2662,2534,1,0,0,0,2662,
	2543,1,0,0,0,2662,2550,1,0,0,0,2662,2551,1,0,0,0,2662,2552,1,0,0,0,2662,
	2556,1,0,0,0,2662,2566,1,0,0,0,2662,2570,1,0,0,0,2662,2598,1,0,0,0,2662,
	2602,1,0,0,0,2662,2614,1,0,0,0,2662,2615,1,0,0,0,2662,2619,1,0,0,0,2662,
	2626,1,0,0,0,2662,2637,1,0,0,0,2662,2649,1,0,0,0,2663,2674,1,0,0,0,2664,
	2665,10,8,0,0,2665,2666,5,8,0,0,2666,2667,3,194,97,0,2667,2668,5,9,0,0,
	2668,2673,1,0,0,0,2669,2670,10,6,0,0,2670,2671,5,4,0,0,2671,2673,3,258,
	129,0,2672,2664,1,0,0,0,2672,2669,1,0,0,0,2673,2676,1,0,0,0,2674,2672,1,
	0,0,0,2674,2675,1,0,0,0,2675,197,1,0,0,0,2676,2674,1,0,0,0,2677,2690,5,
	150,0,0,2678,2690,3,208,104,0,2679,2680,3,258,129,0,2680,2681,5,279,0,0,
	2681,2690,1,0,0,0,2682,2690,3,264,132,0,2683,2690,3,206,103,0,2684,2686,
	5,279,0,0,2685,2684,1,0,0,0,2686,2687,1,0,0,0,2687,2685,1,0,0,0,2687,2688,
	1,0,0,0,2688,2690,1,0,0,0,2689,2677,1,0,0,0,2689,2678,1,0,0,0,2689,2679,
	1,0,0,0,2689,2682,1,0,0,0,2689,2683,1,0,0,0,2689,2685,1,0,0,0,2690,199,
	1,0,0,0,2691,2692,7,30,0,0,2692,201,1,0,0,0,2693,2694,7,31,0,0,2694,203,
	1,0,0,0,2695,2696,7,32,0,0,2696,205,1,0,0,0,2697,2698,7,33,0,0,2698,207,
	1,0,0,0,2699,2702,5,119,0,0,2700,2703,3,210,105,0,2701,2703,3,214,107,0,
	2702,2700,1,0,0,0,2702,2701,1,0,0,0,2702,2703,1,0,0,0,2703,209,1,0,0,0,
	2704,2706,3,212,106,0,2705,2707,3,216,108,0,2706,2705,1,0,0,0,2706,2707,
	1,0,0,0,2707,211,1,0,0,0,2708,2709,3,218,109,0,2709,2710,3,258,129,0,2710,
	2712,1,0,0,0,2711,2708,1,0,0,0,2712,2713,1,0,0,0,2713,2711,1,0,0,0,2713,
	2714,1,0,0,0,2714,213,1,0,0,0,2715,2718,3,216,108,0,2716,2719,3,212,106,
	0,2717,2719,3,216,108,0,2718,2716,1,0,0,0,2718,2717,1,0,0,0,2718,2719,1,
	0,0,0,2719,215,1,0,0,0,2720,2721,3,218,109,0,2721,2722,3,258,129,0,2722,
	2723,5,230,0,0,2723,2724,3,258,129,0,2724,217,1,0,0,0,2725,2727,7,34,0,
	0,2726,2725,1,0,0,0,2726,2727,1,0,0,0,2727,2728,1,0,0,0,2728,2731,7,19,
	0,0,2729,2731,5,279,0,0,2730,2726,1,0,0,0,2730,2729,1,0,0,0,2731,219,1,
	0,0,0,2732,2736,5,93,0,0,2733,2734,5,12,0,0,2734,2736,3,254,127,0,2735,
	2732,1,0,0,0,2735,2733,1,0,0,0,2736,221,1,0,0,0,2737,2738,5,20,0,0,2738,
	2739,5,264,0,0,2739,2740,3,222,111,0,2740,2741,5,266,0,0,2741,2772,1,0,
	0,0,2742,2743,5,141,0,0,2743,2744,5,264,0,0,2744,2745,3,222,111,0,2745,
	2746,5,3,0,0,2746,2747,3,222,111,0,2747,2748,5,266,0,0,2748,2772,1,0,0,
	0,2749,2756,5,219,0,0,2750,2752,5,264,0,0,2751,2753,3,232,116,0,2752,2751,
	1,0,0,0,2752,2753,1,0,0,0,2753,2754,1,0,0,0,2754,2757,5,266,0,0,2755,2757,
	5,262,0,0,2756,2750,1,0,0,0,2756,2755,1,0,0,0,2757,2772,1,0,0,0,2758,2769,
	3,258,129,0,2759,2760,5,1,0,0,2760,2765,5,283,0,0,2761,2762,5,3,0,0,2762,
	2764,5,283,0,0,2763,2761,1,0,0,0,2764,2767,1,0,0,0,2765,2763,1,0,0,0,2765,
	2766,1,0,0,0,2766,2768,1,0,0,0,2767,2765,1,0,0,0,2768,2770,5,2,0,0,2769,
	2759,1,0,0,0,2769,2770,1,0,0,0,2770,2772,1,0,0,0,2771,2737,1,0,0,0,2771,
	2742,1,0,0,0,2771,2749,1,0,0,0,2771,2758,1,0,0,0,2772,223,1,0,0,0,2773,
	2778,3,226,113,0,2774,2775,5,3,0,0,2775,2777,3,226,113,0,2776,2774,1,0,
	0,0,2777,2780,1,0,0,0,2778,2776,1,0,0,0,2778,2779,1,0,0,0,2779,225,1,0,
	0,0,2780,2778,1,0,0,0,2781,2782,3,174,87,0,2782,2785,3,222,111,0,2783,2784,
	5,149,0,0,2784,2786,5,150,0,0,2785,2783,1,0,0,0,2785,2786,1,0,0,0,2786,
	2788,1,0,0,0,2787,2789,3,32,16,0,2788,2787,1,0,0,0,2788,2789,1,0,0,0,2789,
	2791,1,0,0,0,2790,2792,3,220,110,0,2791,2790,1,0,0,0,2791,2792,1,0,0,0,
	2792,227,1,0,0,0,2793,2798,3,230,115,0,2794,2795,5,3,0,0,2795,2797,3,230,
	115,0,2796,2794,1,0,0,0,2797,2800,1,0,0,0,2798,2796,1,0,0,0,2798,2799,1,
	0,0,0,2799,229,1,0,0,0,2800,2798,1,0,0,0,2801,2802,3,254,127,0,2802,2805,
	3,222,111,0,2803,2804,5,149,0,0,2804,2806,5,150,0,0,2805,2803,1,0,0,0,2805,
	2806,1,0,0,0,2806,2808,1,0,0,0,2807,2809,3,32,16,0,2808,2807,1,0,0,0,2808,
	2809,1,0,0,0,2809,231,1,0,0,0,2810,2815,3,234,117,0,2811,2812,5,3,0,0,2812,
	2814,3,234,117,0,2813,2811,1,0,0,0,2814,2817,1,0,0,0,2815,2813,1,0,0,0,
	2815,2816,1,0,0,0,2816,233,1,0,0,0,2817,2815,1,0,0,0,2818,2819,3,258,129,
	0,2819,2820,5,10,0,0,2820,2823,3,222,111,0,2821,2822,5,149,0,0,2822,2824,
	5,150,0,0,2823,2821,1,0,0,0,2823,2824,1,0,0,0,2824,2826,1,0,0,0,2825,2827,
	3,32,16,0,2826,2825,1,0,0,0,2826,2827,1,0,0,0,2827,235,1,0,0,0,2828,2829,
	5,255,0,0,2829,2830,3,188,94,0,2830,2831,5,228,0,0,2831,2832,3,188,94,0,
	2832,237,1,0,0,0,2833,2834,5,257,0,0,2834,2839,3,240,120,0,2835,2836,5,
	3,0,0,2836,2838,3,240,120,0,2837,2835,1,0,0,0,2838,2841,1,0,0,0,2839,2837,
	1,0,0,0,2839,2840,1,0,0,0,2840,239,1,0,0,0,2841,2839,1,0,0,0,2842,2843,
	3,254,127,0,2843,2844,5,21,0,0,2844,2845,3,242,121,0,2845,241,1,0,0,0,2846,
	2893,3,254,127,0,2847,2848,5,1,0,0,2848,2849,3,254,127,0,2849,2850,5,2,
	0,0,2850,2893,1,0,0,0,2851,2886,5,1,0,0,2852,2853,5,37,0,0,2853,2854,5,
	29,0,0,2854,2859,3,188,94,0,2855,2856,5,3,0,0,2856,2858,3,188,94,0,2857,
	2855,1,0,0,0,2858,2861,1,0,0,0,2859,2857,1,0,0,0,2859,2860,1,0,0,0,2860,
	2887,1,0,0,0,2861,2859,1,0,0,0,2862,2863,7,35,0,0,2863,2864,5,29,0,0,2864,
	2869,3,188,94,0,2865,2866,5,3,0,0,2866,2868,3,188,94,0,2867,2865,1,0,0,
	0,2868,2871,1,0,0,0,2869,2867,1,0,0,0,2869,2870,1,0,0,0,2870,2873,1,0,0,
	0,2871,2869,1,0,0,0,2872,2862,1,0,0,0,2872,2873,1,0,0,0,2873,2884,1,0,0,
	0,2874,2875,7,36,0,0,2875,2876,5,29,0,0,2876,2881,3,88,44,0,2877,2878,5,
	3,0,0,2878,2880,3,88,44,0,2879,2877,1,0,0,0,2880,2883,1,0,0,0,2881,2879,
	1,0,0,0,2881,2882,1,0,0,0,2882,2885,1,0,0,0,2883,2881,1,0,0,0,2884,2874,
	1,0,0,0,2884,2885,1,0,0,0,2885,2887,1,0,0,0,2886,2852,1,0,0,0,2886,2872,
	1,0,0,0,2887,2889,1,0,0,0,2888,2890,3,244,122,0,2889,2888,1,0,0,0,2889,
	2890,1,0,0,0,2890,2891,1,0,0,0,2891,2893,5,2,0,0,2892,2846,1,0,0,0,2892,
	2847,1,0,0,0,2892,2851,1,0,0,0,2893,243,1,0,0,0,2894,2895,5,179,0,0,2895,
	2911,3,246,123,0,2896,2897,5,199,0,0,2897,2911,3,246,123,0,2898,2899,5,
	179,0,0,2899,2900,5,25,0,0,2900,2901,3,246,123,0,2901,2902,5,16,0,0,2902,
	2903,3,246,123,0,2903,2911,1,0,0,0,2904,2905,5,199,0,0,2905,2906,5,25,0,
	0,2906,2907,3,246,123,0,2907,2908,5,16,0,0,2908,2909,3,246,123,0,2909,2911,
	1,0,0,0,2910,2894,1,0,0,0,2910,2896,1,0,0,0,2910,2898,1,0,0,0,2910,2904,
	1,0,0,0,2911,245,1,0,0,0,2912,2913,5,241,0,0,2913,2920,7,37,0,0,2914,2915,
	5,55,0,0,2915,2920,5,198,0,0,2916,2917,3,188,94,0,2917,2918,7,37,0,0,2918,
	2920,1,0,0,0,2919,2912,1,0,0,0,2919,2914,1,0,0,0,2919,2916,1,0,0,0,2920,
	247,1,0,0,0,2921,2926,3,252,126,0,2922,2923,5,3,0,0,2923,2925,3,252,126,
	0,2924,2922,1,0,0,0,2925,2928,1,0,0,0,2926,2924,1,0,0,0,2926,2927,1,0,0,
	0,2927,249,1,0,0,0,2928,2926,1,0,0,0,2929,2934,3,252,126,0,2930,2934,5,
	91,0,0,2931,2934,5,129,0,0,2932,2934,5,192,0,0,2933,2929,1,0,0,0,2933,2930,
	1,0,0,0,2933,2931,1,0,0,0,2933,2932,1,0,0,0,2934,251,1,0,0,0,2935,2940,
	3,258,129,0,2936,2937,5,4,0,0,2937,2939,3,258,129,0,2938,2936,1,0,0,0,2939,
	2942,1,0,0,0,2940,2938,1,0,0,0,2940,2941,1,0,0,0,2941,253,1,0,0,0,2942,
	2940,1,0,0,0,2943,2944,3,258,129,0,2944,2945,3,256,128,0,2945,255,1,0,0,
	0,2946,2947,5,269,0,0,2947,2949,3,258,129,0,2948,2946,1,0,0,0,2949,2950,
	1,0,0,0,2950,2948,1,0,0,0,2950,2951,1,0,0,0,2951,2954,1,0,0,0,2952,2954,
	1,0,0,0,2953,2948,1,0,0,0,2953,2952,1,0,0,0,2954,257,1,0,0,0,2955,2959,
	3,260,130,0,2956,2957,4,129,16,0,2957,2959,3,270,135,0,2958,2955,1,0,0,
	0,2958,2956,1,0,0,0,2959,259,1,0,0,0,2960,2967,5,289,0,0,2961,2967,3,262,
	131,0,2962,2963,4,130,17,0,2963,2967,3,268,134,0,2964,2965,4,130,18,0,2965,
	2967,3,272,136,0,2966,2960,1,0,0,0,2966,2961,1,0,0,0,2966,2962,1,0,0,0,
	2966,2964,1,0,0,0,2967,261,1,0,0,0,2968,2969,5,290,0,0,2969,263,1,0,0,0,
	2970,2972,4,132,19,0,2971,2973,5,269,0,0,2972,2971,1,0,0,0,2972,2973,1,
	0,0,0,2973,2974,1,0,0,0,2974,3014,5,284,0,0,2975,2977,4,132,20,0,2976,2978,
	5,269,0,0,2977,2976,1,0,0,0,2977,2978,1,0,0,0,2978,2979,1,0,0,0,2979,3014,
	5,285,0,0,2980,2982,4,132,21,0,2981,2983,5,269,0,0,2982,2981,1,0,0,0,2982,
	2983,1,0,0,0,2983,2984,1,0,0,0,2984,3014,7,38,0,0,2985,2987,5,269,0,0,2986,
	2985,1,0,0,0,2986,2987,1,0,0,0,2987,2988,1,0,0,0,2988,3014,5,283,0,0,2989,
	2991,5,269,0,0,2990,2989,1,0,0,0,2990,2991,1,0,0,0,2991,2992,1,0,0,0,2992,
	3014,5,280,0,0,2993,2995,5,269,0,0,2994,2993,1,0,0,0,2994,2995,1,0,0,0,
	2995,2996,1,0,0,0,2996,3014,5,281,0,0,2997,2999,5,269,0,0,2998,2997,1,0,
	0,0,2998,2999,1,0,0,0,2999,3000,1,0,0,0,3000,3014,5,282,0,0,3001,3003,5,
	269,0,0,3002,3001,1,0,0,0,3002,3003,1,0,0,0,3003,3004,1,0,0,0,3004,3014,
	5,287,0,0,3005,3007,5,269,0,0,3006,3005,1,0,0,0,3006,3007,1,0,0,0,3007,
	3008,1,0,0,0,3008,3014,5,286,0,0,3009,3011,5,269,0,0,3010,3009,1,0,0,0,
	3010,3011,1,0,0,0,3011,3012,1,0,0,0,3012,3014,5,288,0,0,3013,2970,1,0,0,
	0,3013,2975,1,0,0,0,3013,2980,1,0,0,0,3013,2986,1,0,0,0,3013,2990,1,0,0,
	0,3013,2994,1,0,0,0,3013,2998,1,0,0,0,3013,3002,1,0,0,0,3013,3006,1,0,0,
	0,3013,3010,1,0,0,0,3014,265,1,0,0,0,3015,3016,5,239,0,0,3016,3023,3,222,
	111,0,3017,3023,3,32,16,0,3018,3023,3,220,110,0,3019,3020,7,39,0,0,3020,
	3021,5,149,0,0,3021,3023,5,150,0,0,3022,3015,1,0,0,0,3022,3017,1,0,0,0,
	3022,3018,1,0,0,0,3022,3019,1,0,0,0,3023,267,1,0,0,0,3024,3025,7,40,0,0,
	3025,269,1,0,0,0,3026,3027,7,41,0,0,3027,271,1,0,0,0,3028,3029,7,42,0,0,
	3029,273,1,0,0,0,395,279,282,284,306,311,319,327,329,349,353,359,362,365,
	372,377,380,387,399,408,410,414,417,424,435,437,445,450,453,459,470,534,
	543,547,553,557,562,568,580,588,594,607,612,628,635,639,645,660,664,670,
	676,679,682,688,692,700,702,711,714,723,728,734,741,744,750,761,764,768,
	773,778,785,788,791,798,803,812,820,826,829,832,838,842,846,850,852,860,
	868,874,880,883,887,890,894,922,925,929,935,938,941,947,955,960,966,972,
	984,987,994,1011,1020,1023,1029,1038,1045,1048,1058,1062,1069,1185,1193,
	1201,1210,1220,1224,1227,1233,1239,1251,1263,1268,1277,1285,1292,1294,1299,
	1303,1308,1313,1318,1321,1326,1330,1335,1337,1341,1350,1358,1367,1374,1383,
	1388,1391,1410,1412,1421,1428,1431,1438,1442,1448,1456,1467,1478,1485,1491,
	1504,1511,1518,1530,1538,1544,1547,1556,1559,1568,1571,1580,1583,1592,1595,
	1598,1603,1605,1617,1624,1631,1634,1636,1648,1652,1656,1662,1666,1674,1678,
	1681,1684,1687,1691,1695,1698,1702,1707,1711,1714,1717,1720,1722,1734,1737,
	1741,1751,1755,1757,1760,1764,1770,1774,1785,1795,1807,1822,1827,1834,1850,
	1855,1868,1873,1881,1887,1891,1900,1915,1920,1932,1937,1945,1948,1952,1966,
	1979,1984,1988,1991,1996,2005,2008,2013,2020,2023,2031,2038,2045,2048,2053,
	2056,2061,2065,2068,2071,2077,2082,2087,2105,2107,2110,2121,2130,2137,2145,
	2152,2156,2164,2172,2178,2186,2198,2201,2207,2211,2213,2222,2234,2236,2243,
	2250,2256,2262,2264,2271,2279,2285,2291,2295,2297,2304,2313,2326,2331,2335,
	2349,2351,2359,2361,2365,2373,2382,2388,2396,2401,2413,2418,2421,2427,2431,
	2436,2441,2446,2452,2473,2475,2484,2488,2497,2501,2519,2522,2530,2539,2562,
	2573,2580,2583,2592,2596,2608,2633,2640,2643,2658,2662,2672,2674,2687,2689,
	2702,2706,2713,2718,2726,2730,2735,2752,2756,2765,2769,2771,2778,2785,2788,
	2791,2798,2805,2808,2815,2823,2826,2839,2859,2869,2872,2881,2884,2886,2889,
	2892,2910,2919,2926,2933,2940,2950,2953,2958,2966,2972,2977,2982,2986,2990,
	2994,2998,3002,3006,3010,3013,3022];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SparkSqlParser.__ATN) {
			SparkSqlParser.__ATN = new ATNDeserializer().deserialize(SparkSqlParser._serializedATN);
		}

		return SparkSqlParser.__ATN;
	}


	static DecisionsToDFA = SparkSqlParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public singleStatement(): SingleStatementContext {
		return this.getTypedRuleContext(SingleStatementContext, 0) as SingleStatementContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(SparkSqlParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_program;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleStatementContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public emptyStatement_list(): EmptyStatementContext[] {
		return this.getTypedRuleContexts(EmptyStatementContext) as EmptyStatementContext[];
	}
	public emptyStatement(i: number): EmptyStatementContext {
		return this.getTypedRuleContext(EmptyStatementContext, i) as EmptyStatementContext;
	}
	public SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.SEMICOLON);
	}
	public SEMICOLON(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.SEMICOLON, i);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_singleStatement;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSingleStatement) {
	 		listener.enterSingleStatement(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSingleStatement) {
	 		listener.exitSingleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSingleStatement) {
			return visitor.visitSingleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SparkSqlParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_emptyStatement;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterEmptyStatement) {
	 		listener.enterEmptyStatement(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitEmptyStatement) {
	 		listener.exitEmptyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitEmptyStatement) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public namedExpression(): NamedExpressionContext {
		return this.getTypedRuleContext(NamedExpressionContext, 0) as NamedExpressionContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(SparkSqlParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_singleExpression;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSingleExpression) {
	 		listener.enterSingleExpression(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSingleExpression) {
	 		listener.exitSingleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSingleExpression) {
			return visitor.visitSingleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleTableIdentifierContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tableIdentifier(): TableIdentifierContext {
		return this.getTypedRuleContext(TableIdentifierContext, 0) as TableIdentifierContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(SparkSqlParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_singleTableIdentifier;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSingleTableIdentifier) {
	 		listener.enterSingleTableIdentifier(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSingleTableIdentifier) {
	 		listener.exitSingleTableIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSingleTableIdentifier) {
			return visitor.visitSingleTableIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleMultipartIdentifierContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(SparkSqlParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_singleMultipartIdentifier;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSingleMultipartIdentifier) {
	 		listener.enterSingleMultipartIdentifier(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSingleMultipartIdentifier) {
	 		listener.exitSingleMultipartIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSingleMultipartIdentifier) {
			return visitor.visitSingleMultipartIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleDataTypeContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dataType(): DataTypeContext {
		return this.getTypedRuleContext(DataTypeContext, 0) as DataTypeContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(SparkSqlParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_singleDataType;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSingleDataType) {
	 		listener.enterSingleDataType(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSingleDataType) {
	 		listener.exitSingleDataType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSingleDataType) {
			return visitor.visitSingleDataType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleTableSchemaContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public colTypeList(): ColTypeListContext {
		return this.getTypedRuleContext(ColTypeListContext, 0) as ColTypeListContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(SparkSqlParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_singleTableSchema;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSingleTableSchema) {
	 		listener.enterSingleTableSchema(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSingleTableSchema) {
	 		listener.exitSingleTableSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSingleTableSchema) {
			return visitor.visitSingleTableSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_statement;
	}
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ExplainContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXPLAIN(): TerminalNode {
		return this.getToken(SparkSqlParser.EXPLAIN, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public LOGICAL(): TerminalNode {
		return this.getToken(SparkSqlParser.LOGICAL, 0);
	}
	public FORMATTED(): TerminalNode {
		return this.getToken(SparkSqlParser.FORMATTED, 0);
	}
	public EXTENDED(): TerminalNode {
		return this.getToken(SparkSqlParser.EXTENDED, 0);
	}
	public CODEGEN(): TerminalNode {
		return this.getToken(SparkSqlParser.CODEGEN, 0);
	}
	public COST(): TerminalNode {
		return this.getToken(SparkSqlParser.COST, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterExplain) {
	 		listener.enterExplain(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitExplain) {
	 		listener.exitExplain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitExplain) {
			return visitor.visitExplain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ResetConfigurationContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RESET(): TerminalNode {
		return this.getToken(SparkSqlParser.RESET, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterResetConfiguration) {
	 		listener.enterResetConfiguration(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitResetConfiguration) {
	 		listener.exitResetConfiguration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitResetConfiguration) {
			return visitor.visitResetConfiguration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AlterViewQueryContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(SparkSqlParser.VIEW, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterAlterViewQuery) {
	 		listener.enterAlterViewQuery(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitAlterViewQuery) {
	 		listener.exitAlterViewQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitAlterViewQuery) {
			return visitor.visitAlterViewQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UseContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public USE(): TerminalNode {
		return this.getToken(SparkSqlParser.USE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public NAMESPACE(): TerminalNode {
		return this.getToken(SparkSqlParser.NAMESPACE, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterUse) {
	 		listener.enterUse(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitUse) {
	 		listener.exitUse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitUse) {
			return visitor.visitUse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropNamespaceContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP(): TerminalNode {
		return this.getToken(SparkSqlParser.DROP, 0);
	}
	public namespace(): NamespaceContext {
		return this.getTypedRuleContext(NamespaceContext, 0) as NamespaceContext;
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public IF(): TerminalNode {
		return this.getToken(SparkSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
	public RESTRICT(): TerminalNode {
		return this.getToken(SparkSqlParser.RESTRICT, 0);
	}
	public CASCADE(): TerminalNode {
		return this.getToken(SparkSqlParser.CASCADE, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterDropNamespace) {
	 		listener.enterDropNamespace(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitDropNamespace) {
	 		listener.exitDropNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitDropNamespace) {
			return visitor.visitDropNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTempViewUsingContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE(): TerminalNode {
		return this.getToken(SparkSqlParser.CREATE, 0);
	}
	public TEMPORARY(): TerminalNode {
		return this.getToken(SparkSqlParser.TEMPORARY, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(SparkSqlParser.VIEW, 0);
	}
	public tableIdentifier(): TableIdentifierContext {
		return this.getTypedRuleContext(TableIdentifierContext, 0) as TableIdentifierContext;
	}
	public tableProvider(): TableProviderContext {
		return this.getTypedRuleContext(TableProviderContext, 0) as TableProviderContext;
	}
	public OR(): TerminalNode {
		return this.getToken(SparkSqlParser.OR, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(SparkSqlParser.REPLACE, 0);
	}
	public GLOBAL(): TerminalNode {
		return this.getToken(SparkSqlParser.GLOBAL, 0);
	}
	public colTypeList(): ColTypeListContext {
		return this.getTypedRuleContext(ColTypeListContext, 0) as ColTypeListContext;
	}
	public OPTIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.OPTIONS, 0);
	}
	public tablePropertyList(): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, 0) as TablePropertyListContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterCreateTempViewUsing) {
	 		listener.enterCreateTempViewUsing(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitCreateTempViewUsing) {
	 		listener.exitCreateTempViewUsing(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitCreateTempViewUsing) {
			return visitor.visitCreateTempViewUsing(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameTableContext extends StatementContext {
	public _from_!: MultipartIdentifierContext;
	public _to!: MultipartIdentifierContext;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public RENAME(): TerminalNode {
		return this.getToken(SparkSqlParser.RENAME, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(SparkSqlParser.TO, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(SparkSqlParser.VIEW, 0);
	}
	public multipartIdentifier_list(): MultipartIdentifierContext[] {
		return this.getTypedRuleContexts(MultipartIdentifierContext) as MultipartIdentifierContext[];
	}
	public multipartIdentifier(i: number): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, i) as MultipartIdentifierContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterRenameTable) {
	 		listener.enterRenameTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitRenameTable) {
	 		listener.exitRenameTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitRenameTable) {
			return visitor.visitRenameTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FailNativeCommandContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SET(): TerminalNode {
		return this.getToken(SparkSqlParser.SET, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(SparkSqlParser.ROLE, 0);
	}
	public unsupportedHiveNativeCommands(): UnsupportedHiveNativeCommandsContext {
		return this.getTypedRuleContext(UnsupportedHiveNativeCommandsContext, 0) as UnsupportedHiveNativeCommandsContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterFailNativeCommand) {
	 		listener.enterFailNativeCommand(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitFailNativeCommand) {
	 		listener.exitFailNativeCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitFailNativeCommand) {
			return visitor.visitFailNativeCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClearCacheContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CLEAR(): TerminalNode {
		return this.getToken(SparkSqlParser.CLEAR, 0);
	}
	public CACHE(): TerminalNode {
		return this.getToken(SparkSqlParser.CACHE, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterClearCache) {
	 		listener.enterClearCache(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitClearCache) {
	 		listener.exitClearCache(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitClearCache) {
			return visitor.visitClearCache(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropViewContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP(): TerminalNode {
		return this.getToken(SparkSqlParser.DROP, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(SparkSqlParser.VIEW, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public IF(): TerminalNode {
		return this.getToken(SparkSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterDropView) {
	 		listener.enterDropView(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitDropView) {
	 		listener.exitDropView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitDropView) {
			return visitor.visitDropView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowTablesContext extends StatementContext {
	public _pattern!: Token;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(SparkSqlParser.SHOW, 0);
	}
	public TABLES(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLES, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(SparkSqlParser.FROM, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(SparkSqlParser.IN, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(SparkSqlParser.LIKE, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterShowTables) {
	 		listener.enterShowTables(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitShowTables) {
	 		listener.exitShowTables(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitShowTables) {
			return visitor.visitShowTables(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RecoverPartitionsContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public RECOVER(): TerminalNode {
		return this.getToken(SparkSqlParser.RECOVER, 0);
	}
	public PARTITIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.PARTITIONS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterRecoverPartitions) {
	 		listener.enterRecoverPartitions(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitRecoverPartitions) {
	 		listener.exitRecoverPartitions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitRecoverPartitions) {
			return visitor.visitRecoverPartitions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCurrentNamespaceContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(SparkSqlParser.SHOW, 0);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(SparkSqlParser.CURRENT, 0);
	}
	public NAMESPACE(): TerminalNode {
		return this.getToken(SparkSqlParser.NAMESPACE, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterShowCurrentNamespace) {
	 		listener.enterShowCurrentNamespace(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitShowCurrentNamespace) {
	 		listener.exitShowCurrentNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitShowCurrentNamespace) {
			return visitor.visitShowCurrentNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameTablePartitionContext extends StatementContext {
	public _from_!: PartitionSpecContext;
	public _to!: PartitionSpecContext;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public RENAME(): TerminalNode {
		return this.getToken(SparkSqlParser.RENAME, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(SparkSqlParser.TO, 0);
	}
	public partitionSpec_list(): PartitionSpecContext[] {
		return this.getTypedRuleContexts(PartitionSpecContext) as PartitionSpecContext[];
	}
	public partitionSpec(i: number): PartitionSpecContext {
		return this.getTypedRuleContext(PartitionSpecContext, i) as PartitionSpecContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterRenameTablePartition) {
	 		listener.enterRenameTablePartition(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitRenameTablePartition) {
	 		listener.exitRenameTablePartition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitRenameTablePartition) {
			return visitor.visitRenameTablePartition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RepairTableContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MSCK(): TerminalNode {
		return this.getToken(SparkSqlParser.MSCK, 0);
	}
	public REPAIR(): TerminalNode {
		return this.getToken(SparkSqlParser.REPAIR, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterRepairTable) {
	 		listener.enterRepairTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitRepairTable) {
	 		listener.exitRepairTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitRepairTable) {
			return visitor.visitRepairTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RefreshResourceContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REFRESH(): TerminalNode {
		return this.getToken(SparkSqlParser.REFRESH, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterRefreshResource) {
	 		listener.enterRefreshResource(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitRefreshResource) {
	 		listener.exitRefreshResource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitRefreshResource) {
			return visitor.visitRefreshResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCreateTableContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(SparkSqlParser.SHOW, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(SparkSqlParser.CREATE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public SERDE(): TerminalNode {
		return this.getToken(SparkSqlParser.SERDE, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterShowCreateTable) {
	 		listener.enterShowCreateTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitShowCreateTable) {
	 		listener.exitShowCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitShowCreateTable) {
			return visitor.visitShowCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowNamespacesContext extends StatementContext {
	public _pattern!: Token;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(SparkSqlParser.SHOW, 0);
	}
	public DATABASES(): TerminalNode {
		return this.getToken(SparkSqlParser.DATABASES, 0);
	}
	public NAMESPACES(): TerminalNode {
		return this.getToken(SparkSqlParser.NAMESPACES, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(SparkSqlParser.FROM, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(SparkSqlParser.IN, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(SparkSqlParser.LIKE, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterShowNamespaces) {
	 		listener.enterShowNamespaces(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitShowNamespaces) {
	 		listener.exitShowNamespaces(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitShowNamespaces) {
			return visitor.visitShowNamespaces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowColumnsContext extends StatementContext {
	public _table!: MultipartIdentifierContext;
	public _ns!: MultipartIdentifierContext;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(SparkSqlParser.SHOW, 0);
	}
	public COLUMNS(): TerminalNode {
		return this.getToken(SparkSqlParser.COLUMNS, 0);
	}
	public FROM_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.FROM);
	}
	public FROM(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.FROM, i);
	}
	public IN_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.IN);
	}
	public IN(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.IN, i);
	}
	public multipartIdentifier_list(): MultipartIdentifierContext[] {
		return this.getTypedRuleContexts(MultipartIdentifierContext) as MultipartIdentifierContext[];
	}
	public multipartIdentifier(i: number): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, i) as MultipartIdentifierContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterShowColumns) {
	 		listener.enterShowColumns(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitShowColumns) {
	 		listener.exitShowColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitShowColumns) {
			return visitor.visitShowColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReplaceTableContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public replaceTableHeader(): ReplaceTableHeaderContext {
		return this.getTypedRuleContext(ReplaceTableHeaderContext, 0) as ReplaceTableHeaderContext;
	}
	public tableProvider(): TableProviderContext {
		return this.getTypedRuleContext(TableProviderContext, 0) as TableProviderContext;
	}
	public createTableClauses(): CreateTableClausesContext {
		return this.getTypedRuleContext(CreateTableClausesContext, 0) as CreateTableClausesContext;
	}
	public colTypeList(): ColTypeListContext {
		return this.getTypedRuleContext(ColTypeListContext, 0) as ColTypeListContext;
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterReplaceTable) {
	 		listener.enterReplaceTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitReplaceTable) {
	 		listener.exitReplaceTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitReplaceTable) {
			return visitor.visitReplaceTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddTablePartitionContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public ADD(): TerminalNode {
		return this.getToken(SparkSqlParser.ADD, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(SparkSqlParser.VIEW, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(SparkSqlParser.IF, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
	public partitionSpecLocation_list(): PartitionSpecLocationContext[] {
		return this.getTypedRuleContexts(PartitionSpecLocationContext) as PartitionSpecLocationContext[];
	}
	public partitionSpecLocation(i: number): PartitionSpecLocationContext {
		return this.getTypedRuleContext(PartitionSpecLocationContext, i) as PartitionSpecLocationContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterAddTablePartition) {
	 		listener.enterAddTablePartition(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitAddTablePartition) {
	 		listener.exitAddTablePartition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitAddTablePartition) {
			return visitor.visitAddTablePartition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetNamespaceLocationContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public namespace(): NamespaceContext {
		return this.getTypedRuleContext(NamespaceContext, 0) as NamespaceContext;
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public SET(): TerminalNode {
		return this.getToken(SparkSqlParser.SET, 0);
	}
	public locationSpec(): LocationSpecContext {
		return this.getTypedRuleContext(LocationSpecContext, 0) as LocationSpecContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSetNamespaceLocation) {
	 		listener.enterSetNamespaceLocation(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSetNamespaceLocation) {
	 		listener.exitSetNamespaceLocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSetNamespaceLocation) {
			return visitor.visitSetNamespaceLocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RefreshTableContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REFRESH(): TerminalNode {
		return this.getToken(SparkSqlParser.REFRESH, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterRefreshTable) {
	 		listener.enterRefreshTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitRefreshTable) {
	 		listener.exitRefreshTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitRefreshTable) {
			return visitor.visitRefreshTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetNamespacePropertiesContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public namespace(): NamespaceContext {
		return this.getTypedRuleContext(NamespaceContext, 0) as NamespaceContext;
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public SET(): TerminalNode {
		return this.getToken(SparkSqlParser.SET, 0);
	}
	public tablePropertyList(): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, 0) as TablePropertyListContext;
	}
	public DBPROPERTIES(): TerminalNode {
		return this.getToken(SparkSqlParser.DBPROPERTIES, 0);
	}
	public PROPERTIES(): TerminalNode {
		return this.getToken(SparkSqlParser.PROPERTIES, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSetNamespaceProperties) {
	 		listener.enterSetNamespaceProperties(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSetNamespaceProperties) {
	 		listener.exitSetNamespaceProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSetNamespaceProperties) {
			return visitor.visitSetNamespaceProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ManageResourceContext extends StatementContext {
	public _op!: Token;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public ADD(): TerminalNode {
		return this.getToken(SparkSqlParser.ADD, 0);
	}
	public LIST(): TerminalNode {
		return this.getToken(SparkSqlParser.LIST, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterManageResource) {
	 		listener.enterManageResource(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitManageResource) {
	 		listener.exitManageResource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitManageResource) {
			return visitor.visitManageResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetQuotedConfigurationContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SET(): TerminalNode {
		return this.getToken(SparkSqlParser.SET, 0);
	}
	public configKey(): ConfigKeyContext {
		return this.getTypedRuleContext(ConfigKeyContext, 0) as ConfigKeyContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(SparkSqlParser.EQ, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSetQuotedConfiguration) {
	 		listener.enterSetQuotedConfiguration(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSetQuotedConfiguration) {
	 		listener.exitSetQuotedConfiguration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSetQuotedConfiguration) {
			return visitor.visitSetQuotedConfiguration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AnalyzeContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ANALYZE(): TerminalNode {
		return this.getToken(SparkSqlParser.ANALYZE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public COMPUTE(): TerminalNode {
		return this.getToken(SparkSqlParser.COMPUTE, 0);
	}
	public STATISTICS(): TerminalNode {
		return this.getToken(SparkSqlParser.STATISTICS, 0);
	}
	public partitionSpec(): PartitionSpecContext {
		return this.getTypedRuleContext(PartitionSpecContext, 0) as PartitionSpecContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public FOR(): TerminalNode {
		return this.getToken(SparkSqlParser.FOR, 0);
	}
	public COLUMNS(): TerminalNode {
		return this.getToken(SparkSqlParser.COLUMNS, 0);
	}
	public identifierSeq(): IdentifierSeqContext {
		return this.getTypedRuleContext(IdentifierSeqContext, 0) as IdentifierSeqContext;
	}
	public ALL(): TerminalNode {
		return this.getToken(SparkSqlParser.ALL, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterAnalyze) {
	 		listener.enterAnalyze(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitAnalyze) {
	 		listener.exitAnalyze(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitAnalyze) {
			return visitor.visitAnalyze(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateHiveTableContext extends StatementContext {
	public _columns!: ColTypeListContext;
	public _partitionColumns!: ColTypeListContext;
	public _partitionColumnNames!: IdentifierListContext;
	public _tableProps!: TablePropertyListContext;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public createTableHeader(): CreateTableHeaderContext {
		return this.getTypedRuleContext(CreateTableHeaderContext, 0) as CreateTableHeaderContext;
	}
	public commentSpec_list(): CommentSpecContext[] {
		return this.getTypedRuleContexts(CommentSpecContext) as CommentSpecContext[];
	}
	public commentSpec(i: number): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, i) as CommentSpecContext;
	}
	public bucketSpec_list(): BucketSpecContext[] {
		return this.getTypedRuleContexts(BucketSpecContext) as BucketSpecContext[];
	}
	public bucketSpec(i: number): BucketSpecContext {
		return this.getTypedRuleContext(BucketSpecContext, i) as BucketSpecContext;
	}
	public skewSpec_list(): SkewSpecContext[] {
		return this.getTypedRuleContexts(SkewSpecContext) as SkewSpecContext[];
	}
	public skewSpec(i: number): SkewSpecContext {
		return this.getTypedRuleContext(SkewSpecContext, i) as SkewSpecContext;
	}
	public rowFormat_list(): RowFormatContext[] {
		return this.getTypedRuleContexts(RowFormatContext) as RowFormatContext[];
	}
	public rowFormat(i: number): RowFormatContext {
		return this.getTypedRuleContext(RowFormatContext, i) as RowFormatContext;
	}
	public createFileFormat_list(): CreateFileFormatContext[] {
		return this.getTypedRuleContexts(CreateFileFormatContext) as CreateFileFormatContext[];
	}
	public createFileFormat(i: number): CreateFileFormatContext {
		return this.getTypedRuleContext(CreateFileFormatContext, i) as CreateFileFormatContext;
	}
	public locationSpec_list(): LocationSpecContext[] {
		return this.getTypedRuleContexts(LocationSpecContext) as LocationSpecContext[];
	}
	public locationSpec(i: number): LocationSpecContext {
		return this.getTypedRuleContext(LocationSpecContext, i) as LocationSpecContext;
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public colTypeList_list(): ColTypeListContext[] {
		return this.getTypedRuleContexts(ColTypeListContext) as ColTypeListContext[];
	}
	public colTypeList(i: number): ColTypeListContext {
		return this.getTypedRuleContext(ColTypeListContext, i) as ColTypeListContext;
	}
	public PARTITIONED_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.PARTITIONED);
	}
	public PARTITIONED(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.PARTITIONED, i);
	}
	public BY_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.BY);
	}
	public BY(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.BY, i);
	}
	public TBLPROPERTIES_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.TBLPROPERTIES);
	}
	public TBLPROPERTIES(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.TBLPROPERTIES, i);
	}
	public identifierList_list(): IdentifierListContext[] {
		return this.getTypedRuleContexts(IdentifierListContext) as IdentifierListContext[];
	}
	public identifierList(i: number): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, i) as IdentifierListContext;
	}
	public tablePropertyList_list(): TablePropertyListContext[] {
		return this.getTypedRuleContexts(TablePropertyListContext) as TablePropertyListContext[];
	}
	public tablePropertyList(i: number): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, i) as TablePropertyListContext;
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterCreateHiveTable) {
	 		listener.enterCreateHiveTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitCreateHiveTable) {
	 		listener.exitCreateHiveTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitCreateHiveTable) {
			return visitor.visitCreateHiveTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateFunctionContext extends StatementContext {
	public _className!: Token;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE(): TerminalNode {
		return this.getToken(SparkSqlParser.CREATE, 0);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(SparkSqlParser.FUNCTION, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(SparkSqlParser.OR, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(SparkSqlParser.REPLACE, 0);
	}
	public TEMPORARY(): TerminalNode {
		return this.getToken(SparkSqlParser.TEMPORARY, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(SparkSqlParser.IF, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
	public USING(): TerminalNode {
		return this.getToken(SparkSqlParser.USING, 0);
	}
	public resource_list(): ResourceContext[] {
		return this.getTypedRuleContexts(ResourceContext) as ResourceContext[];
	}
	public resource(i: number): ResourceContext {
		return this.getTypedRuleContext(ResourceContext, i) as ResourceContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterCreateFunction) {
	 		listener.enterCreateFunction(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitCreateFunction) {
	 		listener.exitCreateFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitCreateFunction) {
			return visitor.visitCreateFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowTableContext extends StatementContext {
	public _ns!: MultipartIdentifierContext;
	public _pattern!: Token;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(SparkSqlParser.SHOW, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public EXTENDED(): TerminalNode {
		return this.getToken(SparkSqlParser.EXTENDED, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(SparkSqlParser.LIKE, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public partitionSpec(): PartitionSpecContext {
		return this.getTypedRuleContext(PartitionSpecContext, 0) as PartitionSpecContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(SparkSqlParser.FROM, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(SparkSqlParser.IN, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterShowTable) {
	 		listener.enterShowTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitShowTable) {
	 		listener.exitShowTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitShowTable) {
			return visitor.visitShowTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class HiveReplaceColumnsContext extends StatementContext {
	public _table!: MultipartIdentifierContext;
	public _columns!: QualifiedColTypeWithPositionListContext;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(SparkSqlParser.REPLACE, 0);
	}
	public COLUMNS(): TerminalNode {
		return this.getToken(SparkSqlParser.COLUMNS, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public qualifiedColTypeWithPositionList(): QualifiedColTypeWithPositionListContext {
		return this.getTypedRuleContext(QualifiedColTypeWithPositionListContext, 0) as QualifiedColTypeWithPositionListContext;
	}
	public partitionSpec(): PartitionSpecContext {
		return this.getTypedRuleContext(PartitionSpecContext, 0) as PartitionSpecContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterHiveReplaceColumns) {
	 		listener.enterHiveReplaceColumns(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitHiveReplaceColumns) {
	 		listener.exitHiveReplaceColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitHiveReplaceColumns) {
			return visitor.visitHiveReplaceColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommentNamespaceContext extends StatementContext {
	public _comment!: Token;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(SparkSqlParser.COMMENT, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(SparkSqlParser.ON, 0);
	}
	public namespace(): NamespaceContext {
		return this.getTypedRuleContext(NamespaceContext, 0) as NamespaceContext;
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public IS(): TerminalNode {
		return this.getToken(SparkSqlParser.IS, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(SparkSqlParser.NULL, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterCommentNamespace) {
	 		listener.enterCommentNamespace(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitCommentNamespace) {
	 		listener.exitCommentNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitCommentNamespace) {
			return visitor.visitCommentNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ResetQuotedConfigurationContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RESET(): TerminalNode {
		return this.getToken(SparkSqlParser.RESET, 0);
	}
	public configKey(): ConfigKeyContext {
		return this.getTypedRuleContext(ConfigKeyContext, 0) as ConfigKeyContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterResetQuotedConfiguration) {
	 		listener.enterResetQuotedConfiguration(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitResetQuotedConfiguration) {
	 		listener.exitResetQuotedConfiguration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitResetQuotedConfiguration) {
			return visitor.visitResetQuotedConfiguration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTableContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public createTableHeader(): CreateTableHeaderContext {
		return this.getTypedRuleContext(CreateTableHeaderContext, 0) as CreateTableHeaderContext;
	}
	public tableProvider(): TableProviderContext {
		return this.getTypedRuleContext(TableProviderContext, 0) as TableProviderContext;
	}
	public createTableClauses(): CreateTableClausesContext {
		return this.getTypedRuleContext(CreateTableClausesContext, 0) as CreateTableClausesContext;
	}
	public colTypeList(): ColTypeListContext {
		return this.getTypedRuleContext(ColTypeListContext, 0) as ColTypeListContext;
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterCreateTable) {
	 		listener.enterCreateTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitCreateTable) {
	 		listener.exitCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitCreateTable) {
			return visitor.visitCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DmlStatementContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public dmlStatementNoWith(): DmlStatementNoWithContext {
		return this.getTypedRuleContext(DmlStatementNoWithContext, 0) as DmlStatementNoWithContext;
	}
	public ctes(): CtesContext {
		return this.getTypedRuleContext(CtesContext, 0) as CtesContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterDmlStatement) {
	 		listener.enterDmlStatement(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitDmlStatement) {
	 		listener.exitDmlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitDmlStatement) {
			return visitor.visitDmlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTableLikeContext extends StatementContext {
	public _target!: TableIdentifierContext;
	public _source!: TableIdentifierContext;
	public _tableProps!: TablePropertyListContext;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE(): TerminalNode {
		return this.getToken(SparkSqlParser.CREATE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(SparkSqlParser.LIKE, 0);
	}
	public tableIdentifier_list(): TableIdentifierContext[] {
		return this.getTypedRuleContexts(TableIdentifierContext) as TableIdentifierContext[];
	}
	public tableIdentifier(i: number): TableIdentifierContext {
		return this.getTypedRuleContext(TableIdentifierContext, i) as TableIdentifierContext;
	}
	public IF(): TerminalNode {
		return this.getToken(SparkSqlParser.IF, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
	public tableProvider_list(): TableProviderContext[] {
		return this.getTypedRuleContexts(TableProviderContext) as TableProviderContext[];
	}
	public tableProvider(i: number): TableProviderContext {
		return this.getTypedRuleContext(TableProviderContext, i) as TableProviderContext;
	}
	public rowFormat_list(): RowFormatContext[] {
		return this.getTypedRuleContexts(RowFormatContext) as RowFormatContext[];
	}
	public rowFormat(i: number): RowFormatContext {
		return this.getTypedRuleContext(RowFormatContext, i) as RowFormatContext;
	}
	public createFileFormat_list(): CreateFileFormatContext[] {
		return this.getTypedRuleContexts(CreateFileFormatContext) as CreateFileFormatContext[];
	}
	public createFileFormat(i: number): CreateFileFormatContext {
		return this.getTypedRuleContext(CreateFileFormatContext, i) as CreateFileFormatContext;
	}
	public locationSpec_list(): LocationSpecContext[] {
		return this.getTypedRuleContexts(LocationSpecContext) as LocationSpecContext[];
	}
	public locationSpec(i: number): LocationSpecContext {
		return this.getTypedRuleContext(LocationSpecContext, i) as LocationSpecContext;
	}
	public TBLPROPERTIES_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.TBLPROPERTIES);
	}
	public TBLPROPERTIES(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.TBLPROPERTIES, i);
	}
	public tablePropertyList_list(): TablePropertyListContext[] {
		return this.getTypedRuleContexts(TablePropertyListContext) as TablePropertyListContext[];
	}
	public tablePropertyList(i: number): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, i) as TablePropertyListContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterCreateTableLike) {
	 		listener.enterCreateTableLike(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitCreateTableLike) {
	 		listener.exitCreateTableLike(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitCreateTableLike) {
			return visitor.visitCreateTableLike(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UncacheTableContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UNCACHE(): TerminalNode {
		return this.getToken(SparkSqlParser.UNCACHE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public IF(): TerminalNode {
		return this.getToken(SparkSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterUncacheTable) {
	 		listener.enterUncacheTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitUncacheTable) {
	 		listener.exitUncacheTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitUncacheTable) {
			return visitor.visitUncacheTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropFunctionContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP(): TerminalNode {
		return this.getToken(SparkSqlParser.DROP, 0);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(SparkSqlParser.FUNCTION, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public TEMPORARY(): TerminalNode {
		return this.getToken(SparkSqlParser.TEMPORARY, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(SparkSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterDropFunction) {
	 		listener.enterDropFunction(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitDropFunction) {
	 		listener.exitDropFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitDropFunction) {
			return visitor.visitDropFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DescribeRelationContext extends StatementContext {
	public _option!: Token;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public DESC(): TerminalNode {
		return this.getToken(SparkSqlParser.DESC, 0);
	}
	public DESCRIBE(): TerminalNode {
		return this.getToken(SparkSqlParser.DESCRIBE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public partitionSpec(): PartitionSpecContext {
		return this.getTypedRuleContext(PartitionSpecContext, 0) as PartitionSpecContext;
	}
	public describeColName(): DescribeColNameContext {
		return this.getTypedRuleContext(DescribeColNameContext, 0) as DescribeColNameContext;
	}
	public EXTENDED(): TerminalNode {
		return this.getToken(SparkSqlParser.EXTENDED, 0);
	}
	public FORMATTED(): TerminalNode {
		return this.getToken(SparkSqlParser.FORMATTED, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterDescribeRelation) {
	 		listener.enterDescribeRelation(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitDescribeRelation) {
	 		listener.exitDescribeRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitDescribeRelation) {
			return visitor.visitDescribeRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LoadDataContext extends StatementContext {
	public _path!: Token;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LOAD(): TerminalNode {
		return this.getToken(SparkSqlParser.LOAD, 0);
	}
	public DATA(): TerminalNode {
		return this.getToken(SparkSqlParser.DATA, 0);
	}
	public INPATH(): TerminalNode {
		return this.getToken(SparkSqlParser.INPATH, 0);
	}
	public INTO(): TerminalNode {
		return this.getToken(SparkSqlParser.INTO, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(SparkSqlParser.LOCAL, 0);
	}
	public OVERWRITE(): TerminalNode {
		return this.getToken(SparkSqlParser.OVERWRITE, 0);
	}
	public partitionSpec(): PartitionSpecContext {
		return this.getTypedRuleContext(PartitionSpecContext, 0) as PartitionSpecContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterLoadData) {
	 		listener.enterLoadData(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitLoadData) {
	 		listener.exitLoadData(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitLoadData) {
			return visitor.visitLoadData(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowPartitionsContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(SparkSqlParser.SHOW, 0);
	}
	public PARTITIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.PARTITIONS, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public partitionSpec(): PartitionSpecContext {
		return this.getTypedRuleContext(PartitionSpecContext, 0) as PartitionSpecContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterShowPartitions) {
	 		listener.enterShowPartitions(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitShowPartitions) {
	 		listener.exitShowPartitions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitShowPartitions) {
			return visitor.visitShowPartitions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DescribeFunctionContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(SparkSqlParser.FUNCTION, 0);
	}
	public describeFuncName(): DescribeFuncNameContext {
		return this.getTypedRuleContext(DescribeFuncNameContext, 0) as DescribeFuncNameContext;
	}
	public DESC(): TerminalNode {
		return this.getToken(SparkSqlParser.DESC, 0);
	}
	public DESCRIBE(): TerminalNode {
		return this.getToken(SparkSqlParser.DESCRIBE, 0);
	}
	public EXTENDED(): TerminalNode {
		return this.getToken(SparkSqlParser.EXTENDED, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterDescribeFunction) {
	 		listener.enterDescribeFunction(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitDescribeFunction) {
	 		listener.exitDescribeFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitDescribeFunction) {
			return visitor.visitDescribeFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameTableColumnContext extends StatementContext {
	public _table!: MultipartIdentifierContext;
	public _from_!: MultipartIdentifierContext;
	public _to!: ErrorCapturingIdentifierContext;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public RENAME(): TerminalNode {
		return this.getToken(SparkSqlParser.RENAME, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(SparkSqlParser.COLUMN, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(SparkSqlParser.TO, 0);
	}
	public multipartIdentifier_list(): MultipartIdentifierContext[] {
		return this.getTypedRuleContexts(MultipartIdentifierContext) as MultipartIdentifierContext[];
	}
	public multipartIdentifier(i: number): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, i) as MultipartIdentifierContext;
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0) as ErrorCapturingIdentifierContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterRenameTableColumn) {
	 		listener.enterRenameTableColumn(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitRenameTableColumn) {
	 		listener.exitRenameTableColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitRenameTableColumn) {
			return visitor.visitRenameTableColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StatementDefaultContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterStatementDefault) {
	 		listener.enterStatementDefault(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitStatementDefault) {
	 		listener.exitStatementDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitStatementDefault) {
			return visitor.visitStatementDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class HiveChangeColumnContext extends StatementContext {
	public _table!: MultipartIdentifierContext;
	public _colName!: MultipartIdentifierContext;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public CHANGE(): TerminalNode {
		return this.getToken(SparkSqlParser.CHANGE, 0);
	}
	public colType(): ColTypeContext {
		return this.getTypedRuleContext(ColTypeContext, 0) as ColTypeContext;
	}
	public multipartIdentifier_list(): MultipartIdentifierContext[] {
		return this.getTypedRuleContexts(MultipartIdentifierContext) as MultipartIdentifierContext[];
	}
	public multipartIdentifier(i: number): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, i) as MultipartIdentifierContext;
	}
	public partitionSpec(): PartitionSpecContext {
		return this.getTypedRuleContext(PartitionSpecContext, 0) as PartitionSpecContext;
	}
	public COLUMN(): TerminalNode {
		return this.getToken(SparkSqlParser.COLUMN, 0);
	}
	public colPosition(): ColPositionContext {
		return this.getTypedRuleContext(ColPositionContext, 0) as ColPositionContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterHiveChangeColumn) {
	 		listener.enterHiveChangeColumn(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitHiveChangeColumn) {
	 		listener.exitHiveChangeColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitHiveChangeColumn) {
			return visitor.visitHiveChangeColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetTimeZoneContext extends StatementContext {
	public _timezone!: Token;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SET(): TerminalNode {
		return this.getToken(SparkSqlParser.SET, 0);
	}
	public TIME(): TerminalNode {
		return this.getToken(SparkSqlParser.TIME, 0);
	}
	public ZONE(): TerminalNode {
		return this.getToken(SparkSqlParser.ZONE, 0);
	}
	public interval(): IntervalContext {
		return this.getTypedRuleContext(IntervalContext, 0) as IntervalContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(SparkSqlParser.LOCAL, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSetTimeZone) {
	 		listener.enterSetTimeZone(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSetTimeZone) {
	 		listener.exitSetTimeZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSetTimeZone) {
			return visitor.visitSetTimeZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DescribeQueryContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public DESC(): TerminalNode {
		return this.getToken(SparkSqlParser.DESC, 0);
	}
	public DESCRIBE(): TerminalNode {
		return this.getToken(SparkSqlParser.DESCRIBE, 0);
	}
	public QUERY(): TerminalNode {
		return this.getToken(SparkSqlParser.QUERY, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterDescribeQuery) {
	 		listener.enterDescribeQuery(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitDescribeQuery) {
	 		listener.exitDescribeQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitDescribeQuery) {
			return visitor.visitDescribeQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TruncateTableContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TRUNCATE(): TerminalNode {
		return this.getToken(SparkSqlParser.TRUNCATE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public partitionSpec(): PartitionSpecContext {
		return this.getTypedRuleContext(PartitionSpecContext, 0) as PartitionSpecContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTruncateTable) {
	 		listener.enterTruncateTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTruncateTable) {
	 		listener.exitTruncateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTruncateTable) {
			return visitor.visitTruncateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetTableSerDeContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public SET(): TerminalNode {
		return this.getToken(SparkSqlParser.SET, 0);
	}
	public SERDE(): TerminalNode {
		return this.getToken(SparkSqlParser.SERDE, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public partitionSpec(): PartitionSpecContext {
		return this.getTypedRuleContext(PartitionSpecContext, 0) as PartitionSpecContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(SparkSqlParser.WITH, 0);
	}
	public SERDEPROPERTIES(): TerminalNode {
		return this.getToken(SparkSqlParser.SERDEPROPERTIES, 0);
	}
	public tablePropertyList(): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, 0) as TablePropertyListContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSetTableSerDe) {
	 		listener.enterSetTableSerDe(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSetTableSerDe) {
	 		listener.exitSetTableSerDe(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSetTableSerDe) {
			return visitor.visitSetTableSerDe(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateViewContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE(): TerminalNode {
		return this.getToken(SparkSqlParser.CREATE, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(SparkSqlParser.VIEW, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public OR(): TerminalNode {
		return this.getToken(SparkSqlParser.OR, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(SparkSqlParser.REPLACE, 0);
	}
	public TEMPORARY(): TerminalNode {
		return this.getToken(SparkSqlParser.TEMPORARY, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(SparkSqlParser.IF, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
	public identifierCommentList(): IdentifierCommentListContext {
		return this.getTypedRuleContext(IdentifierCommentListContext, 0) as IdentifierCommentListContext;
	}
	public commentSpec_list(): CommentSpecContext[] {
		return this.getTypedRuleContexts(CommentSpecContext) as CommentSpecContext[];
	}
	public commentSpec(i: number): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, i) as CommentSpecContext;
	}
	public PARTITIONED_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.PARTITIONED);
	}
	public PARTITIONED(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.PARTITIONED, i);
	}
	public ON_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.ON);
	}
	public ON(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.ON, i);
	}
	public identifierList_list(): IdentifierListContext[] {
		return this.getTypedRuleContexts(IdentifierListContext) as IdentifierListContext[];
	}
	public identifierList(i: number): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, i) as IdentifierListContext;
	}
	public TBLPROPERTIES_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.TBLPROPERTIES);
	}
	public TBLPROPERTIES(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.TBLPROPERTIES, i);
	}
	public tablePropertyList_list(): TablePropertyListContext[] {
		return this.getTypedRuleContexts(TablePropertyListContext) as TablePropertyListContext[];
	}
	public tablePropertyList(i: number): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, i) as TablePropertyListContext;
	}
	public GLOBAL(): TerminalNode {
		return this.getToken(SparkSqlParser.GLOBAL, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterCreateView) {
	 		listener.enterCreateView(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitCreateView) {
	 		listener.exitCreateView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitCreateView) {
			return visitor.visitCreateView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropTablePartitionsContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public DROP(): TerminalNode {
		return this.getToken(SparkSqlParser.DROP, 0);
	}
	public partitionSpec_list(): PartitionSpecContext[] {
		return this.getTypedRuleContexts(PartitionSpecContext) as PartitionSpecContext[];
	}
	public partitionSpec(i: number): PartitionSpecContext {
		return this.getTypedRuleContext(PartitionSpecContext, i) as PartitionSpecContext;
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(SparkSqlParser.VIEW, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(SparkSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
	public PURGE(): TerminalNode {
		return this.getToken(SparkSqlParser.PURGE, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterDropTablePartitions) {
	 		listener.enterDropTablePartitions(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitDropTablePartitions) {
	 		listener.exitDropTablePartitions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitDropTablePartitions) {
			return visitor.visitDropTablePartitions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetConfigurationContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SET(): TerminalNode {
		return this.getToken(SparkSqlParser.SET, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSetConfiguration) {
	 		listener.enterSetConfiguration(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSetConfiguration) {
	 		listener.exitSetConfiguration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSetConfiguration) {
			return visitor.visitSetConfiguration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropTableContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP(): TerminalNode {
		return this.getToken(SparkSqlParser.DROP, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public IF(): TerminalNode {
		return this.getToken(SparkSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
	public PURGE(): TerminalNode {
		return this.getToken(SparkSqlParser.PURGE, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterDropTable) {
	 		listener.enterDropTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitDropTable) {
	 		listener.exitDropTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitDropTable) {
			return visitor.visitDropTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DescribeNamespaceContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public namespace(): NamespaceContext {
		return this.getTypedRuleContext(NamespaceContext, 0) as NamespaceContext;
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public DESC(): TerminalNode {
		return this.getToken(SparkSqlParser.DESC, 0);
	}
	public DESCRIBE(): TerminalNode {
		return this.getToken(SparkSqlParser.DESCRIBE, 0);
	}
	public EXTENDED(): TerminalNode {
		return this.getToken(SparkSqlParser.EXTENDED, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterDescribeNamespace) {
	 		listener.enterDescribeNamespace(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitDescribeNamespace) {
	 		listener.exitDescribeNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitDescribeNamespace) {
			return visitor.visitDescribeNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AlterTableAlterColumnContext extends StatementContext {
	public _table!: MultipartIdentifierContext;
	public _column!: MultipartIdentifierContext;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.ALTER);
	}
	public ALTER(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, i);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier_list(): MultipartIdentifierContext[] {
		return this.getTypedRuleContexts(MultipartIdentifierContext) as MultipartIdentifierContext[];
	}
	public multipartIdentifier(i: number): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, i) as MultipartIdentifierContext;
	}
	public CHANGE(): TerminalNode {
		return this.getToken(SparkSqlParser.CHANGE, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(SparkSqlParser.COLUMN, 0);
	}
	public alterColumnAction(): AlterColumnActionContext {
		return this.getTypedRuleContext(AlterColumnActionContext, 0) as AlterColumnActionContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterAlterTableAlterColumn) {
	 		listener.enterAlterTableAlterColumn(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitAlterTableAlterColumn) {
	 		listener.exitAlterTableAlterColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitAlterTableAlterColumn) {
			return visitor.visitAlterTableAlterColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RefreshFunctionContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REFRESH(): TerminalNode {
		return this.getToken(SparkSqlParser.REFRESH, 0);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(SparkSqlParser.FUNCTION, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterRefreshFunction) {
	 		listener.enterRefreshFunction(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitRefreshFunction) {
	 		listener.exitRefreshFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitRefreshFunction) {
			return visitor.visitRefreshFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommentTableContext extends StatementContext {
	public _comment!: Token;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(SparkSqlParser.COMMENT, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(SparkSqlParser.ON, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public IS(): TerminalNode {
		return this.getToken(SparkSqlParser.IS, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(SparkSqlParser.NULL, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterCommentTable) {
	 		listener.enterCommentTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitCommentTable) {
	 		listener.exitCommentTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitCommentTable) {
			return visitor.visitCommentTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateNamespaceContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE(): TerminalNode {
		return this.getToken(SparkSqlParser.CREATE, 0);
	}
	public namespace(): NamespaceContext {
		return this.getTypedRuleContext(NamespaceContext, 0) as NamespaceContext;
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public IF(): TerminalNode {
		return this.getToken(SparkSqlParser.IF, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
	public commentSpec_list(): CommentSpecContext[] {
		return this.getTypedRuleContexts(CommentSpecContext) as CommentSpecContext[];
	}
	public commentSpec(i: number): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, i) as CommentSpecContext;
	}
	public locationSpec_list(): LocationSpecContext[] {
		return this.getTypedRuleContexts(LocationSpecContext) as LocationSpecContext[];
	}
	public locationSpec(i: number): LocationSpecContext {
		return this.getTypedRuleContext(LocationSpecContext, i) as LocationSpecContext;
	}
	public WITH_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.WITH);
	}
	public WITH(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.WITH, i);
	}
	public tablePropertyList_list(): TablePropertyListContext[] {
		return this.getTypedRuleContexts(TablePropertyListContext) as TablePropertyListContext[];
	}
	public tablePropertyList(i: number): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, i) as TablePropertyListContext;
	}
	public DBPROPERTIES_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.DBPROPERTIES);
	}
	public DBPROPERTIES(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.DBPROPERTIES, i);
	}
	public PROPERTIES_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.PROPERTIES);
	}
	public PROPERTIES(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.PROPERTIES, i);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterCreateNamespace) {
	 		listener.enterCreateNamespace(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitCreateNamespace) {
	 		listener.exitCreateNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitCreateNamespace) {
			return visitor.visitCreateNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowTblPropertiesContext extends StatementContext {
	public _table!: MultipartIdentifierContext;
	public _key!: TablePropertyKeyContext;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(SparkSqlParser.SHOW, 0);
	}
	public TBLPROPERTIES(): TerminalNode {
		return this.getToken(SparkSqlParser.TBLPROPERTIES, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public tablePropertyKey(): TablePropertyKeyContext {
		return this.getTypedRuleContext(TablePropertyKeyContext, 0) as TablePropertyKeyContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterShowTblProperties) {
	 		listener.enterShowTblProperties(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitShowTblProperties) {
	 		listener.exitShowTblProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitShowTblProperties) {
			return visitor.visitShowTblProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnsetTablePropertiesContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public UNSET(): TerminalNode {
		return this.getToken(SparkSqlParser.UNSET, 0);
	}
	public TBLPROPERTIES(): TerminalNode {
		return this.getToken(SparkSqlParser.TBLPROPERTIES, 0);
	}
	public tablePropertyList(): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, 0) as TablePropertyListContext;
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(SparkSqlParser.VIEW, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(SparkSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterUnsetTableProperties) {
	 		listener.enterUnsetTableProperties(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitUnsetTableProperties) {
	 		listener.exitUnsetTableProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitUnsetTableProperties) {
			return visitor.visitUnsetTableProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetTableLocationContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public SET(): TerminalNode {
		return this.getToken(SparkSqlParser.SET, 0);
	}
	public locationSpec(): LocationSpecContext {
		return this.getTypedRuleContext(LocationSpecContext, 0) as LocationSpecContext;
	}
	public partitionSpec(): PartitionSpecContext {
		return this.getTypedRuleContext(PartitionSpecContext, 0) as PartitionSpecContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSetTableLocation) {
	 		listener.enterSetTableLocation(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSetTableLocation) {
	 		listener.exitSetTableLocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSetTableLocation) {
			return visitor.visitSetTableLocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropTableColumnsContext extends StatementContext {
	public _columns!: MultipartIdentifierListContext;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public DROP(): TerminalNode {
		return this.getToken(SparkSqlParser.DROP, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(SparkSqlParser.COLUMN, 0);
	}
	public COLUMNS(): TerminalNode {
		return this.getToken(SparkSqlParser.COLUMNS, 0);
	}
	public multipartIdentifierList(): MultipartIdentifierListContext {
		return this.getTypedRuleContext(MultipartIdentifierListContext, 0) as MultipartIdentifierListContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterDropTableColumns) {
	 		listener.enterDropTableColumns(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitDropTableColumns) {
	 		listener.exitDropTableColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitDropTableColumns) {
			return visitor.visitDropTableColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowViewsContext extends StatementContext {
	public _pattern!: Token;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(SparkSqlParser.SHOW, 0);
	}
	public VIEWS(): TerminalNode {
		return this.getToken(SparkSqlParser.VIEWS, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(SparkSqlParser.FROM, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(SparkSqlParser.IN, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(SparkSqlParser.LIKE, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterShowViews) {
	 		listener.enterShowViews(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitShowViews) {
	 		listener.exitShowViews(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitShowViews) {
			return visitor.visitShowViews(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowFunctionsContext extends StatementContext {
	public _pattern!: Token;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(SparkSqlParser.SHOW, 0);
	}
	public FUNCTIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.FUNCTIONS, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public LIKE(): TerminalNode {
		return this.getToken(SparkSqlParser.LIKE, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterShowFunctions) {
	 		listener.enterShowFunctions(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitShowFunctions) {
	 		listener.exitShowFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitShowFunctions) {
			return visitor.visitShowFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CacheTableContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CACHE(): TerminalNode {
		return this.getToken(SparkSqlParser.CACHE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public LAZY(): TerminalNode {
		return this.getToken(SparkSqlParser.LAZY, 0);
	}
	public OPTIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.OPTIONS, 0);
	}
	public tablePropertyList(): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, 0) as TablePropertyListContext;
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterCacheTable) {
	 		listener.enterCacheTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitCacheTable) {
	 		listener.exitCacheTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitCacheTable) {
			return visitor.visitCacheTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddTableColumnsContext extends StatementContext {
	public _columns!: QualifiedColTypeWithPositionListContext;
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public ADD(): TerminalNode {
		return this.getToken(SparkSqlParser.ADD, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(SparkSqlParser.COLUMN, 0);
	}
	public COLUMNS(): TerminalNode {
		return this.getToken(SparkSqlParser.COLUMNS, 0);
	}
	public qualifiedColTypeWithPositionList(): QualifiedColTypeWithPositionListContext {
		return this.getTypedRuleContext(QualifiedColTypeWithPositionListContext, 0) as QualifiedColTypeWithPositionListContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterAddTableColumns) {
	 		listener.enterAddTableColumns(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitAddTableColumns) {
	 		listener.exitAddTableColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitAddTableColumns) {
			return visitor.visitAddTableColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetTablePropertiesContext extends StatementContext {
	constructor(parser: SparkSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public SET(): TerminalNode {
		return this.getToken(SparkSqlParser.SET, 0);
	}
	public TBLPROPERTIES(): TerminalNode {
		return this.getToken(SparkSqlParser.TBLPROPERTIES, 0);
	}
	public tablePropertyList(): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, 0) as TablePropertyListContext;
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(SparkSqlParser.VIEW, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSetTableProperties) {
	 		listener.enterSetTableProperties(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSetTableProperties) {
	 		listener.exitSetTableProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSetTableProperties) {
			return visitor.visitSetTableProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConfigKeyContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public quotedIdentifier(): QuotedIdentifierContext {
		return this.getTypedRuleContext(QuotedIdentifierContext, 0) as QuotedIdentifierContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_configKey;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterConfigKey) {
	 		listener.enterConfigKey(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitConfigKey) {
	 		listener.exitConfigKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitConfigKey) {
			return visitor.visitConfigKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnsupportedHiveNativeCommandsContext extends ParserRuleContext {
	public _kw1!: Token;
	public _kw2!: Token;
	public _kw3!: Token;
	public _kw4!: Token;
	public _kw5!: Token;
	public _kw6!: Token;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(SparkSqlParser.CREATE, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(SparkSqlParser.ROLE, 0);
	}
	public DROP(): TerminalNode {
		return this.getToken(SparkSqlParser.DROP, 0);
	}
	public GRANT(): TerminalNode {
		return this.getToken(SparkSqlParser.GRANT, 0);
	}
	public REVOKE(): TerminalNode {
		return this.getToken(SparkSqlParser.REVOKE, 0);
	}
	public SHOW(): TerminalNode {
		return this.getToken(SparkSqlParser.SHOW, 0);
	}
	public PRINCIPALS(): TerminalNode {
		return this.getToken(SparkSqlParser.PRINCIPALS, 0);
	}
	public ROLES(): TerminalNode {
		return this.getToken(SparkSqlParser.ROLES, 0);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(SparkSqlParser.CURRENT, 0);
	}
	public EXPORT(): TerminalNode {
		return this.getToken(SparkSqlParser.EXPORT, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public IMPORT(): TerminalNode {
		return this.getToken(SparkSqlParser.IMPORT, 0);
	}
	public COMPACTIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.COMPACTIONS, 0);
	}
	public TRANSACTIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.TRANSACTIONS, 0);
	}
	public INDEXES(): TerminalNode {
		return this.getToken(SparkSqlParser.INDEXES, 0);
	}
	public LOCKS(): TerminalNode {
		return this.getToken(SparkSqlParser.LOCKS, 0);
	}
	public INDEX(): TerminalNode {
		return this.getToken(SparkSqlParser.INDEX, 0);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public LOCK(): TerminalNode {
		return this.getToken(SparkSqlParser.LOCK, 0);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(SparkSqlParser.DATABASE, 0);
	}
	public UNLOCK(): TerminalNode {
		return this.getToken(SparkSqlParser.UNLOCK, 0);
	}
	public TEMPORARY(): TerminalNode {
		return this.getToken(SparkSqlParser.TEMPORARY, 0);
	}
	public MACRO(): TerminalNode {
		return this.getToken(SparkSqlParser.MACRO, 0);
	}
	public tableIdentifier(): TableIdentifierContext {
		return this.getTypedRuleContext(TableIdentifierContext, 0) as TableIdentifierContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
	public CLUSTERED(): TerminalNode {
		return this.getToken(SparkSqlParser.CLUSTERED, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(SparkSqlParser.BY, 0);
	}
	public SORTED(): TerminalNode {
		return this.getToken(SparkSqlParser.SORTED, 0);
	}
	public SKEWED(): TerminalNode {
		return this.getToken(SparkSqlParser.SKEWED, 0);
	}
	public STORED(): TerminalNode {
		return this.getToken(SparkSqlParser.STORED, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public DIRECTORIES(): TerminalNode {
		return this.getToken(SparkSqlParser.DIRECTORIES, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(SparkSqlParser.SET, 0);
	}
	public LOCATION(): TerminalNode {
		return this.getToken(SparkSqlParser.LOCATION, 0);
	}
	public EXCHANGE(): TerminalNode {
		return this.getToken(SparkSqlParser.EXCHANGE, 0);
	}
	public PARTITION(): TerminalNode {
		return this.getToken(SparkSqlParser.PARTITION, 0);
	}
	public ARCHIVE(): TerminalNode {
		return this.getToken(SparkSqlParser.ARCHIVE, 0);
	}
	public UNARCHIVE(): TerminalNode {
		return this.getToken(SparkSqlParser.UNARCHIVE, 0);
	}
	public TOUCH(): TerminalNode {
		return this.getToken(SparkSqlParser.TOUCH, 0);
	}
	public COMPACT(): TerminalNode {
		return this.getToken(SparkSqlParser.COMPACT, 0);
	}
	public partitionSpec(): PartitionSpecContext {
		return this.getTypedRuleContext(PartitionSpecContext, 0) as PartitionSpecContext;
	}
	public CONCATENATE(): TerminalNode {
		return this.getToken(SparkSqlParser.CONCATENATE, 0);
	}
	public FILEFORMAT(): TerminalNode {
		return this.getToken(SparkSqlParser.FILEFORMAT, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(SparkSqlParser.REPLACE, 0);
	}
	public COLUMNS(): TerminalNode {
		return this.getToken(SparkSqlParser.COLUMNS, 0);
	}
	public START(): TerminalNode {
		return this.getToken(SparkSqlParser.START, 0);
	}
	public TRANSACTION(): TerminalNode {
		return this.getToken(SparkSqlParser.TRANSACTION, 0);
	}
	public COMMIT(): TerminalNode {
		return this.getToken(SparkSqlParser.COMMIT, 0);
	}
	public ROLLBACK(): TerminalNode {
		return this.getToken(SparkSqlParser.ROLLBACK, 0);
	}
	public DFS(): TerminalNode {
		return this.getToken(SparkSqlParser.DFS, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_unsupportedHiveNativeCommands;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterUnsupportedHiveNativeCommands) {
	 		listener.enterUnsupportedHiveNativeCommands(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitUnsupportedHiveNativeCommands) {
	 		listener.exitUnsupportedHiveNativeCommands(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitUnsupportedHiveNativeCommands) {
			return visitor.visitUnsupportedHiveNativeCommands(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateTableHeaderContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(SparkSqlParser.CREATE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public TEMPORARY(): TerminalNode {
		return this.getToken(SparkSqlParser.TEMPORARY, 0);
	}
	public EXTERNAL(): TerminalNode {
		return this.getToken(SparkSqlParser.EXTERNAL, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(SparkSqlParser.IF, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_createTableHeader;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterCreateTableHeader) {
	 		listener.enterCreateTableHeader(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitCreateTableHeader) {
	 		listener.exitCreateTableHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitCreateTableHeader) {
			return visitor.visitCreateTableHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReplaceTableHeaderContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REPLACE(): TerminalNode {
		return this.getToken(SparkSqlParser.REPLACE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public CREATE(): TerminalNode {
		return this.getToken(SparkSqlParser.CREATE, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(SparkSqlParser.OR, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_replaceTableHeader;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterReplaceTableHeader) {
	 		listener.enterReplaceTableHeader(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitReplaceTableHeader) {
	 		listener.exitReplaceTableHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitReplaceTableHeader) {
			return visitor.visitReplaceTableHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BucketSpecContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CLUSTERED(): TerminalNode {
		return this.getToken(SparkSqlParser.CLUSTERED, 0);
	}
	public BY_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.BY);
	}
	public BY(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.BY, i);
	}
	public identifierList(): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
	}
	public INTO(): TerminalNode {
		return this.getToken(SparkSqlParser.INTO, 0);
	}
	public INTEGER_VALUE(): TerminalNode {
		return this.getToken(SparkSqlParser.INTEGER_VALUE, 0);
	}
	public BUCKETS(): TerminalNode {
		return this.getToken(SparkSqlParser.BUCKETS, 0);
	}
	public SORTED(): TerminalNode {
		return this.getToken(SparkSqlParser.SORTED, 0);
	}
	public orderedIdentifierList(): OrderedIdentifierListContext {
		return this.getTypedRuleContext(OrderedIdentifierListContext, 0) as OrderedIdentifierListContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_bucketSpec;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterBucketSpec) {
	 		listener.enterBucketSpec(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitBucketSpec) {
	 		listener.exitBucketSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitBucketSpec) {
			return visitor.visitBucketSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SkewSpecContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SKEWED(): TerminalNode {
		return this.getToken(SparkSqlParser.SKEWED, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(SparkSqlParser.BY, 0);
	}
	public identifierList(): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
	}
	public ON(): TerminalNode {
		return this.getToken(SparkSqlParser.ON, 0);
	}
	public constantList(): ConstantListContext {
		return this.getTypedRuleContext(ConstantListContext, 0) as ConstantListContext;
	}
	public nestedConstantList(): NestedConstantListContext {
		return this.getTypedRuleContext(NestedConstantListContext, 0) as NestedConstantListContext;
	}
	public STORED(): TerminalNode {
		return this.getToken(SparkSqlParser.STORED, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public DIRECTORIES(): TerminalNode {
		return this.getToken(SparkSqlParser.DIRECTORIES, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_skewSpec;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSkewSpec) {
	 		listener.enterSkewSpec(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSkewSpec) {
	 		listener.exitSkewSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSkewSpec) {
			return visitor.visitSkewSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocationSpecContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LOCATION(): TerminalNode {
		return this.getToken(SparkSqlParser.LOCATION, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_locationSpec;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterLocationSpec) {
	 		listener.enterLocationSpec(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitLocationSpec) {
	 		listener.exitLocationSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitLocationSpec) {
			return visitor.visitLocationSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentSpecContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMENT(): TerminalNode {
		return this.getToken(SparkSqlParser.COMMENT, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_commentSpec;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterCommentSpec) {
	 		listener.enterCommentSpec(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitCommentSpec) {
	 		listener.exitCommentSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitCommentSpec) {
			return visitor.visitCommentSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public queryTerm(): QueryTermContext {
		return this.getTypedRuleContext(QueryTermContext, 0) as QueryTermContext;
	}
	public queryOrganization(): QueryOrganizationContext {
		return this.getTypedRuleContext(QueryOrganizationContext, 0) as QueryOrganizationContext;
	}
	public ctes(): CtesContext {
		return this.getTypedRuleContext(CtesContext, 0) as CtesContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_query;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterQuery) {
	 		listener.enterQuery(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitQuery) {
	 		listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertIntoContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_insertInto;
	}
	public copyFrom(ctx: InsertIntoContext): void {
		super.copyFrom(ctx);
	}
}
export class InsertOverwriteHiveDirContext extends InsertIntoContext {
	public _path!: Token;
	constructor(parser: SparkSqlParser, ctx: InsertIntoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INSERT(): TerminalNode {
		return this.getToken(SparkSqlParser.INSERT, 0);
	}
	public OVERWRITE(): TerminalNode {
		return this.getToken(SparkSqlParser.OVERWRITE, 0);
	}
	public DIRECTORY(): TerminalNode {
		return this.getToken(SparkSqlParser.DIRECTORY, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(SparkSqlParser.LOCAL, 0);
	}
	public rowFormat(): RowFormatContext {
		return this.getTypedRuleContext(RowFormatContext, 0) as RowFormatContext;
	}
	public createFileFormat(): CreateFileFormatContext {
		return this.getTypedRuleContext(CreateFileFormatContext, 0) as CreateFileFormatContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterInsertOverwriteHiveDir) {
	 		listener.enterInsertOverwriteHiveDir(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitInsertOverwriteHiveDir) {
	 		listener.exitInsertOverwriteHiveDir(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitInsertOverwriteHiveDir) {
			return visitor.visitInsertOverwriteHiveDir(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InsertOverwriteDirContext extends InsertIntoContext {
	public _path!: Token;
	constructor(parser: SparkSqlParser, ctx: InsertIntoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INSERT(): TerminalNode {
		return this.getToken(SparkSqlParser.INSERT, 0);
	}
	public OVERWRITE(): TerminalNode {
		return this.getToken(SparkSqlParser.OVERWRITE, 0);
	}
	public DIRECTORY(): TerminalNode {
		return this.getToken(SparkSqlParser.DIRECTORY, 0);
	}
	public tableProvider(): TableProviderContext {
		return this.getTypedRuleContext(TableProviderContext, 0) as TableProviderContext;
	}
	public LOCAL(): TerminalNode {
		return this.getToken(SparkSqlParser.LOCAL, 0);
	}
	public OPTIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.OPTIONS, 0);
	}
	public tablePropertyList(): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, 0) as TablePropertyListContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterInsertOverwriteDir) {
	 		listener.enterInsertOverwriteDir(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitInsertOverwriteDir) {
	 		listener.exitInsertOverwriteDir(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitInsertOverwriteDir) {
			return visitor.visitInsertOverwriteDir(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InsertOverwriteTableContext extends InsertIntoContext {
	constructor(parser: SparkSqlParser, ctx: InsertIntoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INSERT(): TerminalNode {
		return this.getToken(SparkSqlParser.INSERT, 0);
	}
	public OVERWRITE(): TerminalNode {
		return this.getToken(SparkSqlParser.OVERWRITE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public partitionSpec(): PartitionSpecContext {
		return this.getTypedRuleContext(PartitionSpecContext, 0) as PartitionSpecContext;
	}
	public IF(): TerminalNode {
		return this.getToken(SparkSqlParser.IF, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterInsertOverwriteTable) {
	 		listener.enterInsertOverwriteTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitInsertOverwriteTable) {
	 		listener.exitInsertOverwriteTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitInsertOverwriteTable) {
			return visitor.visitInsertOverwriteTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InsertIntoTableContext extends InsertIntoContext {
	constructor(parser: SparkSqlParser, ctx: InsertIntoContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INSERT(): TerminalNode {
		return this.getToken(SparkSqlParser.INSERT, 0);
	}
	public INTO(): TerminalNode {
		return this.getToken(SparkSqlParser.INTO, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public partitionSpec(): PartitionSpecContext {
		return this.getTypedRuleContext(PartitionSpecContext, 0) as PartitionSpecContext;
	}
	public IF(): TerminalNode {
		return this.getToken(SparkSqlParser.IF, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterInsertIntoTable) {
	 		listener.enterInsertIntoTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitInsertIntoTable) {
	 		listener.exitInsertIntoTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitInsertIntoTable) {
			return visitor.visitInsertIntoTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartitionSpecLocationContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public partitionSpec(): PartitionSpecContext {
		return this.getTypedRuleContext(PartitionSpecContext, 0) as PartitionSpecContext;
	}
	public locationSpec(): LocationSpecContext {
		return this.getTypedRuleContext(LocationSpecContext, 0) as LocationSpecContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_partitionSpecLocation;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterPartitionSpecLocation) {
	 		listener.enterPartitionSpecLocation(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitPartitionSpecLocation) {
	 		listener.exitPartitionSpecLocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitPartitionSpecLocation) {
			return visitor.visitPartitionSpecLocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartitionSpecContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PARTITION(): TerminalNode {
		return this.getToken(SparkSqlParser.PARTITION, 0);
	}
	public partitionVal_list(): PartitionValContext[] {
		return this.getTypedRuleContexts(PartitionValContext) as PartitionValContext[];
	}
	public partitionVal(i: number): PartitionValContext {
		return this.getTypedRuleContext(PartitionValContext, i) as PartitionValContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_partitionSpec;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterPartitionSpec) {
	 		listener.enterPartitionSpec(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitPartitionSpec) {
	 		listener.exitPartitionSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitPartitionSpec) {
			return visitor.visitPartitionSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartitionValContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(SparkSqlParser.EQ, 0);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_partitionVal;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterPartitionVal) {
	 		listener.enterPartitionVal(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitPartitionVal) {
	 		listener.exitPartitionVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitPartitionVal) {
			return visitor.visitPartitionVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAMESPACE(): TerminalNode {
		return this.getToken(SparkSqlParser.NAMESPACE, 0);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(SparkSqlParser.DATABASE, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(SparkSqlParser.SCHEMA, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_namespace;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterNamespace) {
	 		listener.enterNamespace(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitNamespace) {
	 		listener.exitNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitNamespace) {
			return visitor.visitNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescribeFuncNameContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext;
	}
	public arithmeticOperator(): ArithmeticOperatorContext {
		return this.getTypedRuleContext(ArithmeticOperatorContext, 0) as ArithmeticOperatorContext;
	}
	public predicateOperator(): PredicateOperatorContext {
		return this.getTypedRuleContext(PredicateOperatorContext, 0) as PredicateOperatorContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_describeFuncName;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterDescribeFuncName) {
	 		listener.enterDescribeFuncName(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitDescribeFuncName) {
	 		listener.exitDescribeFuncName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitDescribeFuncName) {
			return visitor.visitDescribeFuncName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescribeColNameContext extends ParserRuleContext {
	public _identifier!: IdentifierContext;
	public _nameParts: IdentifierContext[] = [];
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return SparkSqlParser.RULE_describeColName;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterDescribeColName) {
	 		listener.enterDescribeColName(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitDescribeColName) {
	 		listener.exitDescribeColName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitDescribeColName) {
			return visitor.visitDescribeColName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CtesContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(SparkSqlParser.WITH, 0);
	}
	public namedQuery_list(): NamedQueryContext[] {
		return this.getTypedRuleContexts(NamedQueryContext) as NamedQueryContext[];
	}
	public namedQuery(i: number): NamedQueryContext {
		return this.getTypedRuleContext(NamedQueryContext, i) as NamedQueryContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_ctes;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterCtes) {
	 		listener.enterCtes(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitCtes) {
	 		listener.exitCtes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitCtes) {
			return visitor.visitCtes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedQueryContext extends ParserRuleContext {
	public _name!: ErrorCapturingIdentifierContext;
	public _columnAliases!: IdentifierListContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0) as ErrorCapturingIdentifierContext;
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public identifierList(): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_namedQuery;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterNamedQuery) {
	 		listener.enterNamedQuery(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitNamedQuery) {
	 		listener.exitNamedQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitNamedQuery) {
			return visitor.visitNamedQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableProviderContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public USING(): TerminalNode {
		return this.getToken(SparkSqlParser.USING, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_tableProvider;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTableProvider) {
	 		listener.enterTableProvider(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTableProvider) {
	 		listener.exitTableProvider(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTableProvider) {
			return visitor.visitTableProvider(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateTableClausesContext extends ParserRuleContext {
	public _partitioning!: TransformListContext;
	public _tableProps!: TablePropertyListContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public bucketSpec_list(): BucketSpecContext[] {
		return this.getTypedRuleContexts(BucketSpecContext) as BucketSpecContext[];
	}
	public bucketSpec(i: number): BucketSpecContext {
		return this.getTypedRuleContext(BucketSpecContext, i) as BucketSpecContext;
	}
	public locationSpec_list(): LocationSpecContext[] {
		return this.getTypedRuleContexts(LocationSpecContext) as LocationSpecContext[];
	}
	public locationSpec(i: number): LocationSpecContext {
		return this.getTypedRuleContext(LocationSpecContext, i) as LocationSpecContext;
	}
	public commentSpec_list(): CommentSpecContext[] {
		return this.getTypedRuleContexts(CommentSpecContext) as CommentSpecContext[];
	}
	public commentSpec(i: number): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, i) as CommentSpecContext;
	}
	public OPTIONS_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.OPTIONS);
	}
	public OPTIONS(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.OPTIONS, i);
	}
	public tablePropertyList_list(): TablePropertyListContext[] {
		return this.getTypedRuleContexts(TablePropertyListContext) as TablePropertyListContext[];
	}
	public tablePropertyList(i: number): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, i) as TablePropertyListContext;
	}
	public PARTITIONED_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.PARTITIONED);
	}
	public PARTITIONED(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.PARTITIONED, i);
	}
	public BY_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.BY);
	}
	public BY(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.BY, i);
	}
	public TBLPROPERTIES_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.TBLPROPERTIES);
	}
	public TBLPROPERTIES(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.TBLPROPERTIES, i);
	}
	public transformList_list(): TransformListContext[] {
		return this.getTypedRuleContexts(TransformListContext) as TransformListContext[];
	}
	public transformList(i: number): TransformListContext {
		return this.getTypedRuleContext(TransformListContext, i) as TransformListContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_createTableClauses;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterCreateTableClauses) {
	 		listener.enterCreateTableClauses(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitCreateTableClauses) {
	 		listener.exitCreateTableClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitCreateTableClauses) {
			return visitor.visitCreateTableClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyListContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tableProperty_list(): TablePropertyContext[] {
		return this.getTypedRuleContexts(TablePropertyContext) as TablePropertyContext[];
	}
	public tableProperty(i: number): TablePropertyContext {
		return this.getTypedRuleContext(TablePropertyContext, i) as TablePropertyContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_tablePropertyList;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTablePropertyList) {
	 		listener.enterTablePropertyList(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTablePropertyList) {
	 		listener.exitTablePropertyList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTablePropertyList) {
			return visitor.visitTablePropertyList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyContext extends ParserRuleContext {
	public _key!: TablePropertyKeyContext;
	public _value!: TablePropertyValueContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tablePropertyKey(): TablePropertyKeyContext {
		return this.getTypedRuleContext(TablePropertyKeyContext, 0) as TablePropertyKeyContext;
	}
	public tablePropertyValue(): TablePropertyValueContext {
		return this.getTypedRuleContext(TablePropertyValueContext, 0) as TablePropertyValueContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(SparkSqlParser.EQ, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_tableProperty;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTableProperty) {
	 		listener.enterTableProperty(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTableProperty) {
	 		listener.exitTableProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTableProperty) {
			return visitor.visitTableProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyKeyContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_tablePropertyKey;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTablePropertyKey) {
	 		listener.enterTablePropertyKey(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTablePropertyKey) {
	 		listener.exitTablePropertyKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTablePropertyKey) {
			return visitor.visitTablePropertyKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyValueContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER_VALUE(): TerminalNode {
		return this.getToken(SparkSqlParser.INTEGER_VALUE, 0);
	}
	public DECIMAL_VALUE(): TerminalNode {
		return this.getToken(SparkSqlParser.DECIMAL_VALUE, 0);
	}
	public booleanValue(): BooleanValueContext {
		return this.getTypedRuleContext(BooleanValueContext, 0) as BooleanValueContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_tablePropertyValue;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTablePropertyValue) {
	 		listener.enterTablePropertyValue(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTablePropertyValue) {
	 		listener.exitTablePropertyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTablePropertyValue) {
			return visitor.visitTablePropertyValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantListContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constant_list(): ConstantContext[] {
		return this.getTypedRuleContexts(ConstantContext) as ConstantContext[];
	}
	public constant(i: number): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, i) as ConstantContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_constantList;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterConstantList) {
	 		listener.enterConstantList(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitConstantList) {
	 		listener.exitConstantList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitConstantList) {
			return visitor.visitConstantList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NestedConstantListContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constantList_list(): ConstantListContext[] {
		return this.getTypedRuleContexts(ConstantListContext) as ConstantListContext[];
	}
	public constantList(i: number): ConstantListContext {
		return this.getTypedRuleContext(ConstantListContext, i) as ConstantListContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_nestedConstantList;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterNestedConstantList) {
	 		listener.enterNestedConstantList(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitNestedConstantList) {
	 		listener.exitNestedConstantList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitNestedConstantList) {
			return visitor.visitNestedConstantList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateFileFormatContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STORED(): TerminalNode {
		return this.getToken(SparkSqlParser.STORED, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public fileFormat(): FileFormatContext {
		return this.getTypedRuleContext(FileFormatContext, 0) as FileFormatContext;
	}
	public BY(): TerminalNode {
		return this.getToken(SparkSqlParser.BY, 0);
	}
	public storageHandler(): StorageHandlerContext {
		return this.getTypedRuleContext(StorageHandlerContext, 0) as StorageHandlerContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_createFileFormat;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterCreateFileFormat) {
	 		listener.enterCreateFileFormat(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitCreateFileFormat) {
	 		listener.exitCreateFileFormat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitCreateFileFormat) {
			return visitor.visitCreateFileFormat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FileFormatContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_fileFormat;
	}
	public copyFrom(ctx: FileFormatContext): void {
		super.copyFrom(ctx);
	}
}
export class TableFileFormatContext extends FileFormatContext {
	public _inFmt!: Token;
	public _outFmt!: Token;
	constructor(parser: SparkSqlParser, ctx: FileFormatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INPUTFORMAT(): TerminalNode {
		return this.getToken(SparkSqlParser.INPUTFORMAT, 0);
	}
	public OUTPUTFORMAT(): TerminalNode {
		return this.getToken(SparkSqlParser.OUTPUTFORMAT, 0);
	}
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, i);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTableFileFormat) {
	 		listener.enterTableFileFormat(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTableFileFormat) {
	 		listener.exitTableFileFormat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTableFileFormat) {
			return visitor.visitTableFileFormat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GenericFileFormatContext extends FileFormatContext {
	constructor(parser: SparkSqlParser, ctx: FileFormatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterGenericFileFormat) {
	 		listener.enterGenericFileFormat(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitGenericFileFormat) {
	 		listener.exitGenericFileFormat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitGenericFileFormat) {
			return visitor.visitGenericFileFormat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StorageHandlerContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(SparkSqlParser.WITH, 0);
	}
	public SERDEPROPERTIES(): TerminalNode {
		return this.getToken(SparkSqlParser.SERDEPROPERTIES, 0);
	}
	public tablePropertyList(): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, 0) as TablePropertyListContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_storageHandler;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterStorageHandler) {
	 		listener.enterStorageHandler(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitStorageHandler) {
	 		listener.exitStorageHandler(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitStorageHandler) {
			return visitor.visitStorageHandler(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_resource;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterResource) {
	 		listener.enterResource(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitResource) {
	 		listener.exitResource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitResource) {
			return visitor.visitResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DmlStatementNoWithContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_dmlStatementNoWith;
	}
	public copyFrom(ctx: DmlStatementNoWithContext): void {
		super.copyFrom(ctx);
	}
}
export class DeleteFromTableContext extends DmlStatementNoWithContext {
	constructor(parser: SparkSqlParser, ctx: DmlStatementNoWithContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DELETE(): TerminalNode {
		return this.getToken(SparkSqlParser.DELETE, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(SparkSqlParser.FROM, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public tableAlias(): TableAliasContext {
		return this.getTypedRuleContext(TableAliasContext, 0) as TableAliasContext;
	}
	public whereClause(): WhereClauseContext {
		return this.getTypedRuleContext(WhereClauseContext, 0) as WhereClauseContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterDeleteFromTable) {
	 		listener.enterDeleteFromTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitDeleteFromTable) {
	 		listener.exitDeleteFromTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitDeleteFromTable) {
			return visitor.visitDeleteFromTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SingleInsertQueryContext extends DmlStatementNoWithContext {
	constructor(parser: SparkSqlParser, ctx: DmlStatementNoWithContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public insertInto(): InsertIntoContext {
		return this.getTypedRuleContext(InsertIntoContext, 0) as InsertIntoContext;
	}
	public queryTerm(): QueryTermContext {
		return this.getTypedRuleContext(QueryTermContext, 0) as QueryTermContext;
	}
	public queryOrganization(): QueryOrganizationContext {
		return this.getTypedRuleContext(QueryOrganizationContext, 0) as QueryOrganizationContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSingleInsertQuery) {
	 		listener.enterSingleInsertQuery(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSingleInsertQuery) {
	 		listener.exitSingleInsertQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSingleInsertQuery) {
			return visitor.visitSingleInsertQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiInsertQueryContext extends DmlStatementNoWithContext {
	constructor(parser: SparkSqlParser, ctx: DmlStatementNoWithContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public fromClause(): FromClauseContext {
		return this.getTypedRuleContext(FromClauseContext, 0) as FromClauseContext;
	}
	public multiInsertQueryBody_list(): MultiInsertQueryBodyContext[] {
		return this.getTypedRuleContexts(MultiInsertQueryBodyContext) as MultiInsertQueryBodyContext[];
	}
	public multiInsertQueryBody(i: number): MultiInsertQueryBodyContext {
		return this.getTypedRuleContext(MultiInsertQueryBodyContext, i) as MultiInsertQueryBodyContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterMultiInsertQuery) {
	 		listener.enterMultiInsertQuery(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitMultiInsertQuery) {
	 		listener.exitMultiInsertQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitMultiInsertQuery) {
			return visitor.visitMultiInsertQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UpdateTableContext extends DmlStatementNoWithContext {
	constructor(parser: SparkSqlParser, ctx: DmlStatementNoWithContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UPDATE(): TerminalNode {
		return this.getToken(SparkSqlParser.UPDATE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public tableAlias(): TableAliasContext {
		return this.getTypedRuleContext(TableAliasContext, 0) as TableAliasContext;
	}
	public setClause(): SetClauseContext {
		return this.getTypedRuleContext(SetClauseContext, 0) as SetClauseContext;
	}
	public whereClause(): WhereClauseContext {
		return this.getTypedRuleContext(WhereClauseContext, 0) as WhereClauseContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterUpdateTable) {
	 		listener.enterUpdateTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitUpdateTable) {
	 		listener.exitUpdateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitUpdateTable) {
			return visitor.visitUpdateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MergeIntoTableContext extends DmlStatementNoWithContext {
	public _target!: MultipartIdentifierContext;
	public _targetAlias!: TableAliasContext;
	public _source!: MultipartIdentifierContext;
	public _sourceQuery!: QueryContext;
	public _sourceAlias!: TableAliasContext;
	public _mergeCondition!: BooleanExpressionContext;
	constructor(parser: SparkSqlParser, ctx: DmlStatementNoWithContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MERGE(): TerminalNode {
		return this.getToken(SparkSqlParser.MERGE, 0);
	}
	public INTO(): TerminalNode {
		return this.getToken(SparkSqlParser.INTO, 0);
	}
	public USING(): TerminalNode {
		return this.getToken(SparkSqlParser.USING, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(SparkSqlParser.ON, 0);
	}
	public multipartIdentifier_list(): MultipartIdentifierContext[] {
		return this.getTypedRuleContexts(MultipartIdentifierContext) as MultipartIdentifierContext[];
	}
	public multipartIdentifier(i: number): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, i) as MultipartIdentifierContext;
	}
	public tableAlias_list(): TableAliasContext[] {
		return this.getTypedRuleContexts(TableAliasContext) as TableAliasContext[];
	}
	public tableAlias(i: number): TableAliasContext {
		return this.getTypedRuleContext(TableAliasContext, i) as TableAliasContext;
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public matchedClause_list(): MatchedClauseContext[] {
		return this.getTypedRuleContexts(MatchedClauseContext) as MatchedClauseContext[];
	}
	public matchedClause(i: number): MatchedClauseContext {
		return this.getTypedRuleContext(MatchedClauseContext, i) as MatchedClauseContext;
	}
	public notMatchedClause_list(): NotMatchedClauseContext[] {
		return this.getTypedRuleContexts(NotMatchedClauseContext) as NotMatchedClauseContext[];
	}
	public notMatchedClause(i: number): NotMatchedClauseContext {
		return this.getTypedRuleContext(NotMatchedClauseContext, i) as NotMatchedClauseContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterMergeIntoTable) {
	 		listener.enterMergeIntoTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitMergeIntoTable) {
	 		listener.exitMergeIntoTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitMergeIntoTable) {
			return visitor.visitMergeIntoTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryOrganizationContext extends ParserRuleContext {
	public _sortItem!: SortItemContext;
	public _order: SortItemContext[] = [];
	public _expression!: ExpressionContext;
	public _clusterBy: ExpressionContext[] = [];
	public _distributeBy: ExpressionContext[] = [];
	public _sort: SortItemContext[] = [];
	public _limit!: ExpressionContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ORDER(): TerminalNode {
		return this.getToken(SparkSqlParser.ORDER, 0);
	}
	public BY_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.BY);
	}
	public BY(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.BY, i);
	}
	public CLUSTER(): TerminalNode {
		return this.getToken(SparkSqlParser.CLUSTER, 0);
	}
	public DISTRIBUTE(): TerminalNode {
		return this.getToken(SparkSqlParser.DISTRIBUTE, 0);
	}
	public SORT(): TerminalNode {
		return this.getToken(SparkSqlParser.SORT, 0);
	}
	public windowClause(): WindowClauseContext {
		return this.getTypedRuleContext(WindowClauseContext, 0) as WindowClauseContext;
	}
	public LIMIT(): TerminalNode {
		return this.getToken(SparkSqlParser.LIMIT, 0);
	}
	public sortItem_list(): SortItemContext[] {
		return this.getTypedRuleContexts(SortItemContext) as SortItemContext[];
	}
	public sortItem(i: number): SortItemContext {
		return this.getTypedRuleContext(SortItemContext, i) as SortItemContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public ALL(): TerminalNode {
		return this.getToken(SparkSqlParser.ALL, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_queryOrganization;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterQueryOrganization) {
	 		listener.enterQueryOrganization(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitQueryOrganization) {
	 		listener.exitQueryOrganization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitQueryOrganization) {
			return visitor.visitQueryOrganization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiInsertQueryBodyContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public insertInto(): InsertIntoContext {
		return this.getTypedRuleContext(InsertIntoContext, 0) as InsertIntoContext;
	}
	public fromStatementBody(): FromStatementBodyContext {
		return this.getTypedRuleContext(FromStatementBodyContext, 0) as FromStatementBodyContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_multiInsertQueryBody;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterMultiInsertQueryBody) {
	 		listener.enterMultiInsertQueryBody(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitMultiInsertQueryBody) {
	 		listener.exitMultiInsertQueryBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitMultiInsertQueryBody) {
			return visitor.visitMultiInsertQueryBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryTermContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_queryTerm;
	}
	public copyFrom(ctx: QueryTermContext): void {
		super.copyFrom(ctx);
	}
}
export class QueryTermDefaultContext extends QueryTermContext {
	constructor(parser: SparkSqlParser, ctx: QueryTermContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public queryPrimary(): QueryPrimaryContext {
		return this.getTypedRuleContext(QueryPrimaryContext, 0) as QueryPrimaryContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterQueryTermDefault) {
	 		listener.enterQueryTermDefault(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitQueryTermDefault) {
	 		listener.exitQueryTermDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
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
	constructor(parser: SparkSqlParser, ctx: QueryTermContext) {
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
		return this.getToken(SparkSqlParser.INTERSECT, 0);
	}
	public UNION(): TerminalNode {
		return this.getToken(SparkSqlParser.UNION, 0);
	}
	public EXCEPT(): TerminalNode {
		return this.getToken(SparkSqlParser.EXCEPT, 0);
	}
	public SETMINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.SETMINUS, 0);
	}
	public setQuantifier(): SetQuantifierContext {
		return this.getTypedRuleContext(SetQuantifierContext, 0) as SetQuantifierContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSetOperation) {
	 		listener.enterSetOperation(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSetOperation) {
	 		listener.exitSetOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSetOperation) {
			return visitor.visitSetOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryPrimaryContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_queryPrimary;
	}
	public copyFrom(ctx: QueryPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class SubqueryContext extends QueryPrimaryContext {
	constructor(parser: SparkSqlParser, ctx: QueryPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSubquery) {
	 		listener.enterSubquery(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSubquery) {
	 		listener.exitSubquery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSubquery) {
			return visitor.visitSubquery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QueryPrimaryDefaultContext extends QueryPrimaryContext {
	constructor(parser: SparkSqlParser, ctx: QueryPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public querySpecification(): QuerySpecificationContext {
		return this.getTypedRuleContext(QuerySpecificationContext, 0) as QuerySpecificationContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterQueryPrimaryDefault) {
	 		listener.enterQueryPrimaryDefault(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitQueryPrimaryDefault) {
	 		listener.exitQueryPrimaryDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitQueryPrimaryDefault) {
			return visitor.visitQueryPrimaryDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InlineTableDefault1Context extends QueryPrimaryContext {
	constructor(parser: SparkSqlParser, ctx: QueryPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public inlineTable(): InlineTableContext {
		return this.getTypedRuleContext(InlineTableContext, 0) as InlineTableContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterInlineTableDefault1) {
	 		listener.enterInlineTableDefault1(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitInlineTableDefault1) {
	 		listener.exitInlineTableDefault1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitInlineTableDefault1) {
			return visitor.visitInlineTableDefault1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FromStmtContext extends QueryPrimaryContext {
	constructor(parser: SparkSqlParser, ctx: QueryPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public fromStatement(): FromStatementContext {
		return this.getTypedRuleContext(FromStatementContext, 0) as FromStatementContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterFromStmt) {
	 		listener.enterFromStmt(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitFromStmt) {
	 		listener.exitFromStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitFromStmt) {
			return visitor.visitFromStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableContext extends QueryPrimaryContext {
	constructor(parser: SparkSqlParser, ctx: QueryPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTable) {
	 		listener.enterTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTable) {
	 		listener.exitTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTable) {
			return visitor.visitTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SortItemContext extends ParserRuleContext {
	public _ordering!: Token;
	public _nullOrder!: Token;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public NULLS(): TerminalNode {
		return this.getToken(SparkSqlParser.NULLS, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(SparkSqlParser.ASC, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(SparkSqlParser.DESC, 0);
	}
	public LAST(): TerminalNode {
		return this.getToken(SparkSqlParser.LAST, 0);
	}
	public FIRST(): TerminalNode {
		return this.getToken(SparkSqlParser.FIRST, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_sortItem;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSortItem) {
	 		listener.enterSortItem(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSortItem) {
	 		listener.exitSortItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSortItem) {
			return visitor.visitSortItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromStatementContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fromClause(): FromClauseContext {
		return this.getTypedRuleContext(FromClauseContext, 0) as FromClauseContext;
	}
	public fromStatementBody_list(): FromStatementBodyContext[] {
		return this.getTypedRuleContexts(FromStatementBodyContext) as FromStatementBodyContext[];
	}
	public fromStatementBody(i: number): FromStatementBodyContext {
		return this.getTypedRuleContext(FromStatementBodyContext, i) as FromStatementBodyContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_fromStatement;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterFromStatement) {
	 		listener.enterFromStatement(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitFromStatement) {
	 		listener.exitFromStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitFromStatement) {
			return visitor.visitFromStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromStatementBodyContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public transformClause(): TransformClauseContext {
		return this.getTypedRuleContext(TransformClauseContext, 0) as TransformClauseContext;
	}
	public queryOrganization(): QueryOrganizationContext {
		return this.getTypedRuleContext(QueryOrganizationContext, 0) as QueryOrganizationContext;
	}
	public whereClause(): WhereClauseContext {
		return this.getTypedRuleContext(WhereClauseContext, 0) as WhereClauseContext;
	}
	public selectClause(): SelectClauseContext {
		return this.getTypedRuleContext(SelectClauseContext, 0) as SelectClauseContext;
	}
	public lateralView_list(): LateralViewContext[] {
		return this.getTypedRuleContexts(LateralViewContext) as LateralViewContext[];
	}
	public lateralView(i: number): LateralViewContext {
		return this.getTypedRuleContext(LateralViewContext, i) as LateralViewContext;
	}
	public aggregationClause(): AggregationClauseContext {
		return this.getTypedRuleContext(AggregationClauseContext, 0) as AggregationClauseContext;
	}
	public havingClause(): HavingClauseContext {
		return this.getTypedRuleContext(HavingClauseContext, 0) as HavingClauseContext;
	}
	public windowClause(): WindowClauseContext {
		return this.getTypedRuleContext(WindowClauseContext, 0) as WindowClauseContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_fromStatementBody;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterFromStatementBody) {
	 		listener.enterFromStatementBody(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitFromStatementBody) {
	 		listener.exitFromStatementBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitFromStatementBody) {
			return visitor.visitFromStatementBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuerySpecificationContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_querySpecification;
	}
	public copyFrom(ctx: QuerySpecificationContext): void {
		super.copyFrom(ctx);
	}
}
export class RegularQuerySpecificationContext extends QuerySpecificationContext {
	constructor(parser: SparkSqlParser, ctx: QuerySpecificationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public selectClause(): SelectClauseContext {
		return this.getTypedRuleContext(SelectClauseContext, 0) as SelectClauseContext;
	}
	public fromClause(): FromClauseContext {
		return this.getTypedRuleContext(FromClauseContext, 0) as FromClauseContext;
	}
	public lateralView_list(): LateralViewContext[] {
		return this.getTypedRuleContexts(LateralViewContext) as LateralViewContext[];
	}
	public lateralView(i: number): LateralViewContext {
		return this.getTypedRuleContext(LateralViewContext, i) as LateralViewContext;
	}
	public whereClause(): WhereClauseContext {
		return this.getTypedRuleContext(WhereClauseContext, 0) as WhereClauseContext;
	}
	public aggregationClause(): AggregationClauseContext {
		return this.getTypedRuleContext(AggregationClauseContext, 0) as AggregationClauseContext;
	}
	public havingClause(): HavingClauseContext {
		return this.getTypedRuleContext(HavingClauseContext, 0) as HavingClauseContext;
	}
	public windowClause(): WindowClauseContext {
		return this.getTypedRuleContext(WindowClauseContext, 0) as WindowClauseContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterRegularQuerySpecification) {
	 		listener.enterRegularQuerySpecification(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitRegularQuerySpecification) {
	 		listener.exitRegularQuerySpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitRegularQuerySpecification) {
			return visitor.visitRegularQuerySpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TransformQuerySpecificationContext extends QuerySpecificationContext {
	constructor(parser: SparkSqlParser, ctx: QuerySpecificationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public transformClause(): TransformClauseContext {
		return this.getTypedRuleContext(TransformClauseContext, 0) as TransformClauseContext;
	}
	public fromClause(): FromClauseContext {
		return this.getTypedRuleContext(FromClauseContext, 0) as FromClauseContext;
	}
	public whereClause(): WhereClauseContext {
		return this.getTypedRuleContext(WhereClauseContext, 0) as WhereClauseContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTransformQuerySpecification) {
	 		listener.enterTransformQuerySpecification(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTransformQuerySpecification) {
	 		listener.exitTransformQuerySpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTransformQuerySpecification) {
			return visitor.visitTransformQuerySpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformClauseContext extends ParserRuleContext {
	public _kind!: Token;
	public _inRowFormat!: RowFormatContext;
	public _recordWriter!: Token;
	public _script!: Token;
	public _outRowFormat!: RowFormatContext;
	public _recordReader!: Token;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public USING(): TerminalNode {
		return this.getToken(SparkSqlParser.USING, 0);
	}
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, i);
	}
	public SELECT(): TerminalNode {
		return this.getToken(SparkSqlParser.SELECT, 0);
	}
	public namedExpressionSeq(): NamedExpressionSeqContext {
		return this.getTypedRuleContext(NamedExpressionSeqContext, 0) as NamedExpressionSeqContext;
	}
	public TRANSFORM(): TerminalNode {
		return this.getToken(SparkSqlParser.TRANSFORM, 0);
	}
	public MAP(): TerminalNode {
		return this.getToken(SparkSqlParser.MAP, 0);
	}
	public REDUCE(): TerminalNode {
		return this.getToken(SparkSqlParser.REDUCE, 0);
	}
	public RECORDWRITER(): TerminalNode {
		return this.getToken(SparkSqlParser.RECORDWRITER, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public RECORDREADER(): TerminalNode {
		return this.getToken(SparkSqlParser.RECORDREADER, 0);
	}
	public rowFormat_list(): RowFormatContext[] {
		return this.getTypedRuleContexts(RowFormatContext) as RowFormatContext[];
	}
	public rowFormat(i: number): RowFormatContext {
		return this.getTypedRuleContext(RowFormatContext, i) as RowFormatContext;
	}
	public identifierSeq(): IdentifierSeqContext {
		return this.getTypedRuleContext(IdentifierSeqContext, 0) as IdentifierSeqContext;
	}
	public colTypeList(): ColTypeListContext {
		return this.getTypedRuleContext(ColTypeListContext, 0) as ColTypeListContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_transformClause;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTransformClause) {
	 		listener.enterTransformClause(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTransformClause) {
	 		listener.exitTransformClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTransformClause) {
			return visitor.visitTransformClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectClauseContext extends ParserRuleContext {
	public _hint!: HintContext;
	public _hints: HintContext[] = [];
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SELECT(): TerminalNode {
		return this.getToken(SparkSqlParser.SELECT, 0);
	}
	public namedExpressionSeq(): NamedExpressionSeqContext {
		return this.getTypedRuleContext(NamedExpressionSeqContext, 0) as NamedExpressionSeqContext;
	}
	public setQuantifier(): SetQuantifierContext {
		return this.getTypedRuleContext(SetQuantifierContext, 0) as SetQuantifierContext;
	}
	public hint_list(): HintContext[] {
		return this.getTypedRuleContexts(HintContext) as HintContext[];
	}
	public hint(i: number): HintContext {
		return this.getTypedRuleContext(HintContext, i) as HintContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_selectClause;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSelectClause) {
	 		listener.enterSelectClause(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSelectClause) {
	 		listener.exitSelectClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSelectClause) {
			return visitor.visitSelectClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetClauseContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SET(): TerminalNode {
		return this.getToken(SparkSqlParser.SET, 0);
	}
	public assignmentList(): AssignmentListContext {
		return this.getTypedRuleContext(AssignmentListContext, 0) as AssignmentListContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_setClause;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSetClause) {
	 		listener.enterSetClause(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSetClause) {
	 		listener.exitSetClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSetClause) {
			return visitor.visitSetClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchedClauseContext extends ParserRuleContext {
	public _matchedCond!: BooleanExpressionContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHEN(): TerminalNode {
		return this.getToken(SparkSqlParser.WHEN, 0);
	}
	public MATCHED(): TerminalNode {
		return this.getToken(SparkSqlParser.MATCHED, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(SparkSqlParser.THEN, 0);
	}
	public matchedAction(): MatchedActionContext {
		return this.getTypedRuleContext(MatchedActionContext, 0) as MatchedActionContext;
	}
	public AND(): TerminalNode {
		return this.getToken(SparkSqlParser.AND, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_matchedClause;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterMatchedClause) {
	 		listener.enterMatchedClause(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitMatchedClause) {
	 		listener.exitMatchedClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitMatchedClause) {
			return visitor.visitMatchedClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotMatchedClauseContext extends ParserRuleContext {
	public _notMatchedCond!: BooleanExpressionContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHEN(): TerminalNode {
		return this.getToken(SparkSqlParser.WHEN, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
	public MATCHED(): TerminalNode {
		return this.getToken(SparkSqlParser.MATCHED, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(SparkSqlParser.THEN, 0);
	}
	public notMatchedAction(): NotMatchedActionContext {
		return this.getTypedRuleContext(NotMatchedActionContext, 0) as NotMatchedActionContext;
	}
	public AND(): TerminalNode {
		return this.getToken(SparkSqlParser.AND, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_notMatchedClause;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterNotMatchedClause) {
	 		listener.enterNotMatchedClause(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitNotMatchedClause) {
	 		listener.exitNotMatchedClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitNotMatchedClause) {
			return visitor.visitNotMatchedClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchedActionContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DELETE(): TerminalNode {
		return this.getToken(SparkSqlParser.DELETE, 0);
	}
	public UPDATE(): TerminalNode {
		return this.getToken(SparkSqlParser.UPDATE, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(SparkSqlParser.SET, 0);
	}
	public ASTERISK(): TerminalNode {
		return this.getToken(SparkSqlParser.ASTERISK, 0);
	}
	public assignmentList(): AssignmentListContext {
		return this.getTypedRuleContext(AssignmentListContext, 0) as AssignmentListContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_matchedAction;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterMatchedAction) {
	 		listener.enterMatchedAction(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitMatchedAction) {
	 		listener.exitMatchedAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitMatchedAction) {
			return visitor.visitMatchedAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotMatchedActionContext extends ParserRuleContext {
	public _columns!: MultipartIdentifierListContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INSERT(): TerminalNode {
		return this.getToken(SparkSqlParser.INSERT, 0);
	}
	public ASTERISK(): TerminalNode {
		return this.getToken(SparkSqlParser.ASTERISK, 0);
	}
	public VALUES(): TerminalNode {
		return this.getToken(SparkSqlParser.VALUES, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public multipartIdentifierList(): MultipartIdentifierListContext {
		return this.getTypedRuleContext(MultipartIdentifierListContext, 0) as MultipartIdentifierListContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_notMatchedAction;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterNotMatchedAction) {
	 		listener.enterNotMatchedAction(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitNotMatchedAction) {
	 		listener.exitNotMatchedAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitNotMatchedAction) {
			return visitor.visitNotMatchedAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentListContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignment_list(): AssignmentContext[] {
		return this.getTypedRuleContexts(AssignmentContext) as AssignmentContext[];
	}
	public assignment(i: number): AssignmentContext {
		return this.getTypedRuleContext(AssignmentContext, i) as AssignmentContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_assignmentList;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterAssignmentList) {
	 		listener.enterAssignmentList(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitAssignmentList) {
	 		listener.exitAssignmentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitAssignmentList) {
			return visitor.visitAssignmentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public _key!: MultipartIdentifierContext;
	public _value!: ExpressionContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(SparkSqlParser.EQ, 0);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_assignment;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterAssignment) {
	 		listener.enterAssignment(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitAssignment) {
	 		listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhereClauseContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHERE(): TerminalNode {
		return this.getToken(SparkSqlParser.WHERE, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_whereClause;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterWhereClause) {
	 		listener.enterWhereClause(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitWhereClause) {
	 		listener.exitWhereClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitWhereClause) {
			return visitor.visitWhereClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HavingClauseContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HAVING(): TerminalNode {
		return this.getToken(SparkSqlParser.HAVING, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_havingClause;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterHavingClause) {
	 		listener.enterHavingClause(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitHavingClause) {
	 		listener.exitHavingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitHavingClause) {
			return visitor.visitHavingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HintContext extends ParserRuleContext {
	public _hintStatement!: HintStatementContext;
	public _hintStatements: HintStatementContext[] = [];
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public hintStatement_list(): HintStatementContext[] {
		return this.getTypedRuleContexts(HintStatementContext) as HintStatementContext[];
	}
	public hintStatement(i: number): HintStatementContext {
		return this.getTypedRuleContext(HintStatementContext, i) as HintStatementContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_hint;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterHint) {
	 		listener.enterHint(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitHint) {
	 		listener.exitHint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitHint) {
			return visitor.visitHint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HintStatementContext extends ParserRuleContext {
	public _hintName!: IdentifierContext;
	public _primaryExpression!: PrimaryExpressionContext;
	public _parameters: PrimaryExpressionContext[] = [];
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public primaryExpression_list(): PrimaryExpressionContext[] {
		return this.getTypedRuleContexts(PrimaryExpressionContext) as PrimaryExpressionContext[];
	}
	public primaryExpression(i: number): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, i) as PrimaryExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_hintStatement;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterHintStatement) {
	 		listener.enterHintStatement(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitHintStatement) {
	 		listener.exitHintStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitHintStatement) {
			return visitor.visitHintStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromClauseContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FROM(): TerminalNode {
		return this.getToken(SparkSqlParser.FROM, 0);
	}
	public relation_list(): RelationContext[] {
		return this.getTypedRuleContexts(RelationContext) as RelationContext[];
	}
	public relation(i: number): RelationContext {
		return this.getTypedRuleContext(RelationContext, i) as RelationContext;
	}
	public lateralView_list(): LateralViewContext[] {
		return this.getTypedRuleContexts(LateralViewContext) as LateralViewContext[];
	}
	public lateralView(i: number): LateralViewContext {
		return this.getTypedRuleContext(LateralViewContext, i) as LateralViewContext;
	}
	public pivotClause(): PivotClauseContext {
		return this.getTypedRuleContext(PivotClauseContext, 0) as PivotClauseContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_fromClause;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterFromClause) {
	 		listener.enterFromClause(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitFromClause) {
	 		listener.exitFromClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitFromClause) {
			return visitor.visitFromClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregationClauseContext extends ParserRuleContext {
	public _expression!: ExpressionContext;
	public _groupingExpressions: ExpressionContext[] = [];
	public _kind!: Token;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GROUP(): TerminalNode {
		return this.getToken(SparkSqlParser.GROUP, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(SparkSqlParser.BY, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(SparkSqlParser.WITH, 0);
	}
	public SETS(): TerminalNode {
		return this.getToken(SparkSqlParser.SETS, 0);
	}
	public groupingSet_list(): GroupingSetContext[] {
		return this.getTypedRuleContexts(GroupingSetContext) as GroupingSetContext[];
	}
	public groupingSet(i: number): GroupingSetContext {
		return this.getTypedRuleContext(GroupingSetContext, i) as GroupingSetContext;
	}
	public ROLLUP(): TerminalNode {
		return this.getToken(SparkSqlParser.ROLLUP, 0);
	}
	public CUBE(): TerminalNode {
		return this.getToken(SparkSqlParser.CUBE, 0);
	}
	public GROUPING(): TerminalNode {
		return this.getToken(SparkSqlParser.GROUPING, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_aggregationClause;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterAggregationClause) {
	 		listener.enterAggregationClause(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitAggregationClause) {
	 		listener.exitAggregationClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitAggregationClause) {
			return visitor.visitAggregationClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingSetContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return SparkSqlParser.RULE_groupingSet;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterGroupingSet) {
	 		listener.enterGroupingSet(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitGroupingSet) {
	 		listener.exitGroupingSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitGroupingSet) {
			return visitor.visitGroupingSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PivotClauseContext extends ParserRuleContext {
	public _aggregates!: NamedExpressionSeqContext;
	public _pivotValue!: PivotValueContext;
	public _pivotValues: PivotValueContext[] = [];
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PIVOT(): TerminalNode {
		return this.getToken(SparkSqlParser.PIVOT, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(SparkSqlParser.FOR, 0);
	}
	public pivotColumn(): PivotColumnContext {
		return this.getTypedRuleContext(PivotColumnContext, 0) as PivotColumnContext;
	}
	public IN(): TerminalNode {
		return this.getToken(SparkSqlParser.IN, 0);
	}
	public namedExpressionSeq(): NamedExpressionSeqContext {
		return this.getTypedRuleContext(NamedExpressionSeqContext, 0) as NamedExpressionSeqContext;
	}
	public pivotValue_list(): PivotValueContext[] {
		return this.getTypedRuleContexts(PivotValueContext) as PivotValueContext[];
	}
	public pivotValue(i: number): PivotValueContext {
		return this.getTypedRuleContext(PivotValueContext, i) as PivotValueContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_pivotClause;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterPivotClause) {
	 		listener.enterPivotClause(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitPivotClause) {
	 		listener.exitPivotClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitPivotClause) {
			return visitor.visitPivotClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PivotColumnContext extends ParserRuleContext {
	public _identifier!: IdentifierContext;
	public _identifiers: IdentifierContext[] = [];
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return SparkSqlParser.RULE_pivotColumn;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterPivotColumn) {
	 		listener.enterPivotColumn(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitPivotColumn) {
	 		listener.exitPivotColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitPivotColumn) {
			return visitor.visitPivotColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PivotValueContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_pivotValue;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterPivotValue) {
	 		listener.enterPivotValue(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitPivotValue) {
	 		listener.exitPivotValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitPivotValue) {
			return visitor.visitPivotValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LateralViewContext extends ParserRuleContext {
	public _tblName!: IdentifierContext;
	public _identifier!: IdentifierContext;
	public _colName: IdentifierContext[] = [];
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LATERAL(): TerminalNode {
		return this.getToken(SparkSqlParser.LATERAL, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(SparkSqlParser.VIEW, 0);
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
	public OUTER(): TerminalNode {
		return this.getToken(SparkSqlParser.OUTER, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_lateralView;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterLateralView) {
	 		listener.enterLateralView(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitLateralView) {
	 		listener.exitLateralView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitLateralView) {
			return visitor.visitLateralView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetQuantifierContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(SparkSqlParser.DISTINCT, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(SparkSqlParser.ALL, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_setQuantifier;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSetQuantifier) {
	 		listener.enterSetQuantifier(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSetQuantifier) {
	 		listener.exitSetQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSetQuantifier) {
			return visitor.visitSetQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationPrimary(): RelationPrimaryContext {
		return this.getTypedRuleContext(RelationPrimaryContext, 0) as RelationPrimaryContext;
	}
	public joinRelation_list(): JoinRelationContext[] {
		return this.getTypedRuleContexts(JoinRelationContext) as JoinRelationContext[];
	}
	public joinRelation(i: number): JoinRelationContext {
		return this.getTypedRuleContext(JoinRelationContext, i) as JoinRelationContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_relation;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterRelation) {
	 		listener.enterRelation(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitRelation) {
	 		listener.exitRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitRelation) {
			return visitor.visitRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinRelationContext extends ParserRuleContext {
	public _right!: RelationPrimaryContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public JOIN(): TerminalNode {
		return this.getToken(SparkSqlParser.JOIN, 0);
	}
	public relationPrimary(): RelationPrimaryContext {
		return this.getTypedRuleContext(RelationPrimaryContext, 0) as RelationPrimaryContext;
	}
	public joinType(): JoinTypeContext {
		return this.getTypedRuleContext(JoinTypeContext, 0) as JoinTypeContext;
	}
	public joinCriteria(): JoinCriteriaContext {
		return this.getTypedRuleContext(JoinCriteriaContext, 0) as JoinCriteriaContext;
	}
	public NATURAL(): TerminalNode {
		return this.getToken(SparkSqlParser.NATURAL, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_joinRelation;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterJoinRelation) {
	 		listener.enterJoinRelation(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitJoinRelation) {
	 		listener.exitJoinRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitJoinRelation) {
			return visitor.visitJoinRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinTypeContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INNER(): TerminalNode {
		return this.getToken(SparkSqlParser.INNER, 0);
	}
	public CROSS(): TerminalNode {
		return this.getToken(SparkSqlParser.CROSS, 0);
	}
	public LEFT(): TerminalNode {
		return this.getToken(SparkSqlParser.LEFT, 0);
	}
	public OUTER(): TerminalNode {
		return this.getToken(SparkSqlParser.OUTER, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(SparkSqlParser.SEMI, 0);
	}
	public RIGHT(): TerminalNode {
		return this.getToken(SparkSqlParser.RIGHT, 0);
	}
	public FULL(): TerminalNode {
		return this.getToken(SparkSqlParser.FULL, 0);
	}
	public ANTI(): TerminalNode {
		return this.getToken(SparkSqlParser.ANTI, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_joinType;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterJoinType) {
	 		listener.enterJoinType(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitJoinType) {
	 		listener.exitJoinType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitJoinType) {
			return visitor.visitJoinType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinCriteriaContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON(): TerminalNode {
		return this.getToken(SparkSqlParser.ON, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public USING(): TerminalNode {
		return this.getToken(SparkSqlParser.USING, 0);
	}
	public identifierList(): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_joinCriteria;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterJoinCriteria) {
	 		listener.enterJoinCriteria(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitJoinCriteria) {
	 		listener.exitJoinCriteria(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitJoinCriteria) {
			return visitor.visitJoinCriteria(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SampleContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TABLESAMPLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLESAMPLE, 0);
	}
	public sampleMethod(): SampleMethodContext {
		return this.getTypedRuleContext(SampleMethodContext, 0) as SampleMethodContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_sample;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSample) {
	 		listener.enterSample(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSample) {
	 		listener.exitSample(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSample) {
			return visitor.visitSample(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SampleMethodContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_sampleMethod;
	}
	public copyFrom(ctx: SampleMethodContext): void {
		super.copyFrom(ctx);
	}
}
export class SampleByRowsContext extends SampleMethodContext {
	constructor(parser: SparkSqlParser, ctx: SampleMethodContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public ROWS(): TerminalNode {
		return this.getToken(SparkSqlParser.ROWS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSampleByRows) {
	 		listener.enterSampleByRows(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSampleByRows) {
	 		listener.exitSampleByRows(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSampleByRows) {
			return visitor.visitSampleByRows(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SampleByPercentileContext extends SampleMethodContext {
	public _negativeSign!: Token;
	public _percentage!: Token;
	constructor(parser: SparkSqlParser, ctx: SampleMethodContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PERCENTLIT(): TerminalNode {
		return this.getToken(SparkSqlParser.PERCENTLIT, 0);
	}
	public INTEGER_VALUE(): TerminalNode {
		return this.getToken(SparkSqlParser.INTEGER_VALUE, 0);
	}
	public DECIMAL_VALUE(): TerminalNode {
		return this.getToken(SparkSqlParser.DECIMAL_VALUE, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.MINUS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSampleByPercentile) {
	 		listener.enterSampleByPercentile(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSampleByPercentile) {
	 		listener.exitSampleByPercentile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSampleByPercentile) {
			return visitor.visitSampleByPercentile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SampleByBucketContext extends SampleMethodContext {
	public _sampleType!: Token;
	public _numerator!: Token;
	public _denominator!: Token;
	constructor(parser: SparkSqlParser, ctx: SampleMethodContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OUT(): TerminalNode {
		return this.getToken(SparkSqlParser.OUT, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(SparkSqlParser.OF, 0);
	}
	public BUCKET(): TerminalNode {
		return this.getToken(SparkSqlParser.BUCKET, 0);
	}
	public INTEGER_VALUE_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.INTEGER_VALUE);
	}
	public INTEGER_VALUE(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.INTEGER_VALUE, i);
	}
	public ON(): TerminalNode {
		return this.getToken(SparkSqlParser.ON, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSampleByBucket) {
	 		listener.enterSampleByBucket(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSampleByBucket) {
	 		listener.exitSampleByBucket(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSampleByBucket) {
			return visitor.visitSampleByBucket(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SampleByBytesContext extends SampleMethodContext {
	public _bytes!: ExpressionContext;
	constructor(parser: SparkSqlParser, ctx: SampleMethodContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSampleByBytes) {
	 		listener.enterSampleByBytes(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSampleByBytes) {
	 		listener.exitSampleByBytes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSampleByBytes) {
			return visitor.visitSampleByBytes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifierSeq(): IdentifierSeqContext {
		return this.getTypedRuleContext(IdentifierSeqContext, 0) as IdentifierSeqContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_identifierList;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterIdentifierList) {
	 		listener.enterIdentifierList(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitIdentifierList) {
	 		listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierSeqContext extends ParserRuleContext {
	public _errorCapturingIdentifier!: ErrorCapturingIdentifierContext;
	public _ident: ErrorCapturingIdentifierContext[] = [];
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public errorCapturingIdentifier_list(): ErrorCapturingIdentifierContext[] {
		return this.getTypedRuleContexts(ErrorCapturingIdentifierContext) as ErrorCapturingIdentifierContext[];
	}
	public errorCapturingIdentifier(i: number): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, i) as ErrorCapturingIdentifierContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_identifierSeq;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterIdentifierSeq) {
	 		listener.enterIdentifierSeq(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitIdentifierSeq) {
	 		listener.exitIdentifierSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitIdentifierSeq) {
			return visitor.visitIdentifierSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderedIdentifierListContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public orderedIdentifier_list(): OrderedIdentifierContext[] {
		return this.getTypedRuleContexts(OrderedIdentifierContext) as OrderedIdentifierContext[];
	}
	public orderedIdentifier(i: number): OrderedIdentifierContext {
		return this.getTypedRuleContext(OrderedIdentifierContext, i) as OrderedIdentifierContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_orderedIdentifierList;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterOrderedIdentifierList) {
	 		listener.enterOrderedIdentifierList(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitOrderedIdentifierList) {
	 		listener.exitOrderedIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitOrderedIdentifierList) {
			return visitor.visitOrderedIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderedIdentifierContext extends ParserRuleContext {
	public _ident!: ErrorCapturingIdentifierContext;
	public _ordering!: Token;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0) as ErrorCapturingIdentifierContext;
	}
	public ASC(): TerminalNode {
		return this.getToken(SparkSqlParser.ASC, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(SparkSqlParser.DESC, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_orderedIdentifier;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterOrderedIdentifier) {
	 		listener.enterOrderedIdentifier(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitOrderedIdentifier) {
	 		listener.exitOrderedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitOrderedIdentifier) {
			return visitor.visitOrderedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierCommentListContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifierComment_list(): IdentifierCommentContext[] {
		return this.getTypedRuleContexts(IdentifierCommentContext) as IdentifierCommentContext[];
	}
	public identifierComment(i: number): IdentifierCommentContext {
		return this.getTypedRuleContext(IdentifierCommentContext, i) as IdentifierCommentContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_identifierCommentList;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterIdentifierCommentList) {
	 		listener.enterIdentifierCommentList(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitIdentifierCommentList) {
	 		listener.exitIdentifierCommentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitIdentifierCommentList) {
			return visitor.visitIdentifierCommentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierCommentContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public commentSpec(): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, 0) as CommentSpecContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_identifierComment;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterIdentifierComment) {
	 		listener.enterIdentifierComment(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitIdentifierComment) {
	 		listener.exitIdentifierComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitIdentifierComment) {
			return visitor.visitIdentifierComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationPrimaryContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_relationPrimary;
	}
	public copyFrom(ctx: RelationPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class TableValuedFunctionContext extends RelationPrimaryContext {
	constructor(parser: SparkSqlParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public functionTable(): FunctionTableContext {
		return this.getTypedRuleContext(FunctionTableContext, 0) as FunctionTableContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTableValuedFunction) {
	 		listener.enterTableValuedFunction(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTableValuedFunction) {
	 		listener.exitTableValuedFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTableValuedFunction) {
			return visitor.visitTableValuedFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InlineTableDefault2Context extends RelationPrimaryContext {
	constructor(parser: SparkSqlParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public inlineTable(): InlineTableContext {
		return this.getTypedRuleContext(InlineTableContext, 0) as InlineTableContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterInlineTableDefault2) {
	 		listener.enterInlineTableDefault2(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitInlineTableDefault2) {
	 		listener.exitInlineTableDefault2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitInlineTableDefault2) {
			return visitor.visitInlineTableDefault2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AliasedRelationContext extends RelationPrimaryContext {
	constructor(parser: SparkSqlParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public relation(): RelationContext {
		return this.getTypedRuleContext(RelationContext, 0) as RelationContext;
	}
	public tableAlias(): TableAliasContext {
		return this.getTypedRuleContext(TableAliasContext, 0) as TableAliasContext;
	}
	public sample(): SampleContext {
		return this.getTypedRuleContext(SampleContext, 0) as SampleContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterAliasedRelation) {
	 		listener.enterAliasedRelation(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitAliasedRelation) {
	 		listener.exitAliasedRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitAliasedRelation) {
			return visitor.visitAliasedRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AliasedQueryContext extends RelationPrimaryContext {
	constructor(parser: SparkSqlParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public tableAlias(): TableAliasContext {
		return this.getTypedRuleContext(TableAliasContext, 0) as TableAliasContext;
	}
	public sample(): SampleContext {
		return this.getTypedRuleContext(SampleContext, 0) as SampleContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterAliasedQuery) {
	 		listener.enterAliasedQuery(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitAliasedQuery) {
	 		listener.exitAliasedQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitAliasedQuery) {
			return visitor.visitAliasedQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableNameContext extends RelationPrimaryContext {
	constructor(parser: SparkSqlParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public tableAlias(): TableAliasContext {
		return this.getTypedRuleContext(TableAliasContext, 0) as TableAliasContext;
	}
	public sample(): SampleContext {
		return this.getTypedRuleContext(SampleContext, 0) as SampleContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTableName) {
	 		listener.enterTableName(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTableName) {
	 		listener.exitTableName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTableName) {
			return visitor.visitTableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineTableContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VALUES(): TerminalNode {
		return this.getToken(SparkSqlParser.VALUES, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public tableAlias(): TableAliasContext {
		return this.getTypedRuleContext(TableAliasContext, 0) as TableAliasContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_inlineTable;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterInlineTable) {
	 		listener.enterInlineTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitInlineTable) {
	 		listener.exitInlineTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitInlineTable) {
			return visitor.visitInlineTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTableContext extends ParserRuleContext {
	public _funcName!: ErrorCapturingIdentifierContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tableAlias(): TableAliasContext {
		return this.getTypedRuleContext(TableAliasContext, 0) as TableAliasContext;
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0) as ErrorCapturingIdentifierContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_functionTable;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterFunctionTable) {
	 		listener.enterFunctionTable(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitFunctionTable) {
	 		listener.exitFunctionTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitFunctionTable) {
			return visitor.visitFunctionTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableAliasContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public strictIdentifier(): StrictIdentifierContext {
		return this.getTypedRuleContext(StrictIdentifierContext, 0) as StrictIdentifierContext;
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public identifierList(): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_tableAlias;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTableAlias) {
	 		listener.enterTableAlias(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTableAlias) {
	 		listener.exitTableAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTableAlias) {
			return visitor.visitTableAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowFormatContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_rowFormat;
	}
	public copyFrom(ctx: RowFormatContext): void {
		super.copyFrom(ctx);
	}
}
export class RowFormatSerdeContext extends RowFormatContext {
	public _name!: Token;
	public _props!: TablePropertyListContext;
	constructor(parser: SparkSqlParser, ctx: RowFormatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ROW(): TerminalNode {
		return this.getToken(SparkSqlParser.ROW, 0);
	}
	public FORMAT(): TerminalNode {
		return this.getToken(SparkSqlParser.FORMAT, 0);
	}
	public SERDE(): TerminalNode {
		return this.getToken(SparkSqlParser.SERDE, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(SparkSqlParser.WITH, 0);
	}
	public SERDEPROPERTIES(): TerminalNode {
		return this.getToken(SparkSqlParser.SERDEPROPERTIES, 0);
	}
	public tablePropertyList(): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, 0) as TablePropertyListContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterRowFormatSerde) {
	 		listener.enterRowFormatSerde(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitRowFormatSerde) {
	 		listener.exitRowFormatSerde(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitRowFormatSerde) {
			return visitor.visitRowFormatSerde(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RowFormatDelimitedContext extends RowFormatContext {
	public _fieldsTerminatedBy!: Token;
	public _escapedBy!: Token;
	public _collectionItemsTerminatedBy!: Token;
	public _keysTerminatedBy!: Token;
	public _linesSeparatedBy!: Token;
	public _nullDefinedAs!: Token;
	constructor(parser: SparkSqlParser, ctx: RowFormatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ROW(): TerminalNode {
		return this.getToken(SparkSqlParser.ROW, 0);
	}
	public FORMAT(): TerminalNode {
		return this.getToken(SparkSqlParser.FORMAT, 0);
	}
	public DELIMITED(): TerminalNode {
		return this.getToken(SparkSqlParser.DELIMITED, 0);
	}
	public FIELDS(): TerminalNode {
		return this.getToken(SparkSqlParser.FIELDS, 0);
	}
	public TERMINATED_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.TERMINATED);
	}
	public TERMINATED(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.TERMINATED, i);
	}
	public BY_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.BY);
	}
	public BY(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.BY, i);
	}
	public COLLECTION(): TerminalNode {
		return this.getToken(SparkSqlParser.COLLECTION, 0);
	}
	public ITEMS(): TerminalNode {
		return this.getToken(SparkSqlParser.ITEMS, 0);
	}
	public MAP(): TerminalNode {
		return this.getToken(SparkSqlParser.MAP, 0);
	}
	public KEYS(): TerminalNode {
		return this.getToken(SparkSqlParser.KEYS, 0);
	}
	public LINES(): TerminalNode {
		return this.getToken(SparkSqlParser.LINES, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(SparkSqlParser.NULL, 0);
	}
	public DEFINED(): TerminalNode {
		return this.getToken(SparkSqlParser.DEFINED, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, i);
	}
	public ESCAPED(): TerminalNode {
		return this.getToken(SparkSqlParser.ESCAPED, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterRowFormatDelimited) {
	 		listener.enterRowFormatDelimited(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitRowFormatDelimited) {
	 		listener.exitRowFormatDelimited(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitRowFormatDelimited) {
			return visitor.visitRowFormatDelimited(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultipartIdentifierListContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multipartIdentifier_list(): MultipartIdentifierContext[] {
		return this.getTypedRuleContexts(MultipartIdentifierContext) as MultipartIdentifierContext[];
	}
	public multipartIdentifier(i: number): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, i) as MultipartIdentifierContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_multipartIdentifierList;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterMultipartIdentifierList) {
	 		listener.enterMultipartIdentifierList(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitMultipartIdentifierList) {
	 		listener.exitMultipartIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitMultipartIdentifierList) {
			return visitor.visitMultipartIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultipartIdentifierContext extends ParserRuleContext {
	public _errorCapturingIdentifier!: ErrorCapturingIdentifierContext;
	public _parts: ErrorCapturingIdentifierContext[] = [];
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public errorCapturingIdentifier_list(): ErrorCapturingIdentifierContext[] {
		return this.getTypedRuleContexts(ErrorCapturingIdentifierContext) as ErrorCapturingIdentifierContext[];
	}
	public errorCapturingIdentifier(i: number): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, i) as ErrorCapturingIdentifierContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_multipartIdentifier;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterMultipartIdentifier) {
	 		listener.enterMultipartIdentifier(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitMultipartIdentifier) {
	 		listener.exitMultipartIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitMultipartIdentifier) {
			return visitor.visitMultipartIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableIdentifierContext extends ParserRuleContext {
	public _db!: ErrorCapturingIdentifierContext;
	public _table!: ErrorCapturingIdentifierContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public errorCapturingIdentifier_list(): ErrorCapturingIdentifierContext[] {
		return this.getTypedRuleContexts(ErrorCapturingIdentifierContext) as ErrorCapturingIdentifierContext[];
	}
	public errorCapturingIdentifier(i: number): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, i) as ErrorCapturingIdentifierContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_tableIdentifier;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTableIdentifier) {
	 		listener.enterTableIdentifier(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTableIdentifier) {
	 		listener.exitTableIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTableIdentifier) {
			return visitor.visitTableIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedExpressionContext extends ParserRuleContext {
	public _name!: ErrorCapturingIdentifierContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public identifierList(): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0) as ErrorCapturingIdentifierContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_namedExpression;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterNamedExpression) {
	 		listener.enterNamedExpression(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitNamedExpression) {
	 		listener.exitNamedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitNamedExpression) {
			return visitor.visitNamedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedExpressionSeqContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public namedExpression_list(): NamedExpressionContext[] {
		return this.getTypedRuleContexts(NamedExpressionContext) as NamedExpressionContext[];
	}
	public namedExpression(i: number): NamedExpressionContext {
		return this.getTypedRuleContext(NamedExpressionContext, i) as NamedExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_namedExpressionSeq;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterNamedExpressionSeq) {
	 		listener.enterNamedExpressionSeq(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitNamedExpressionSeq) {
	 		listener.exitNamedExpressionSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitNamedExpressionSeq) {
			return visitor.visitNamedExpressionSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformListContext extends ParserRuleContext {
	public _transform!: TransformContext;
	public _transforms: TransformContext[] = [];
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public transform_list(): TransformContext[] {
		return this.getTypedRuleContexts(TransformContext) as TransformContext[];
	}
	public transform(i: number): TransformContext {
		return this.getTypedRuleContext(TransformContext, i) as TransformContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_transformList;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTransformList) {
	 		listener.enterTransformList(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTransformList) {
	 		listener.exitTransformList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTransformList) {
			return visitor.visitTransformList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_transform;
	}
	public copyFrom(ctx: TransformContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentityTransformContext extends TransformContext {
	constructor(parser: SparkSqlParser, ctx: TransformContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterIdentityTransform) {
	 		listener.enterIdentityTransform(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitIdentityTransform) {
	 		listener.exitIdentityTransform(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitIdentityTransform) {
			return visitor.visitIdentityTransform(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ApplyTransformContext extends TransformContext {
	public _transformName!: IdentifierContext;
	public _transformArgument!: TransformArgumentContext;
	public _argument: TransformArgumentContext[] = [];
	constructor(parser: SparkSqlParser, ctx: TransformContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public transformArgument_list(): TransformArgumentContext[] {
		return this.getTypedRuleContexts(TransformArgumentContext) as TransformArgumentContext[];
	}
	public transformArgument(i: number): TransformArgumentContext {
		return this.getTypedRuleContext(TransformArgumentContext, i) as TransformArgumentContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterApplyTransform) {
	 		listener.enterApplyTransform(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitApplyTransform) {
	 		listener.exitApplyTransform(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitApplyTransform) {
			return visitor.visitApplyTransform(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformArgumentContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_transformArgument;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTransformArgument) {
	 		listener.enterTransformArgument(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTransformArgument) {
	 		listener.exitTransformArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTransformArgument) {
			return visitor.visitTransformArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_expression;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_booleanExpression;
	}
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	constructor(parser: SparkSqlParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterLogicalNot) {
	 		listener.enterLogicalNot(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitLogicalNot) {
	 		listener.exitLogicalNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitLogicalNot) {
			return visitor.visitLogicalNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredicatedContext extends BooleanExpressionContext {
	constructor(parser: SparkSqlParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public predicate(): PredicateContext {
		return this.getTypedRuleContext(PredicateContext, 0) as PredicateContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterPredicated) {
	 		listener.enterPredicated(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitPredicated) {
	 		listener.exitPredicated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitPredicated) {
			return visitor.visitPredicated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistsContext extends BooleanExpressionContext {
	constructor(parser: SparkSqlParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterExists) {
	 		listener.enterExists(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitExists) {
	 		listener.exitExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitExists) {
			return visitor.visitExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalBinaryContext extends BooleanExpressionContext {
	public _left!: BooleanExpressionContext;
	public _operator!: Token;
	public _right!: BooleanExpressionContext;
	constructor(parser: SparkSqlParser, ctx: BooleanExpressionContext) {
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
		return this.getToken(SparkSqlParser.AND, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(SparkSqlParser.OR, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterLogicalBinary) {
	 		listener.enterLogicalBinary(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitLogicalBinary) {
	 		listener.exitLogicalBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitLogicalBinary) {
			return visitor.visitLogicalBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public _kind!: Token;
	public _lower!: ValueExpressionContext;
	public _upper!: ValueExpressionContext;
	public _pattern!: ValueExpressionContext;
	public _quantifier!: Token;
	public _escapeChar!: Token;
	public _right!: ValueExpressionContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AND(): TerminalNode {
		return this.getToken(SparkSqlParser.AND, 0);
	}
	public BETWEEN(): TerminalNode {
		return this.getToken(SparkSqlParser.BETWEEN, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public IN(): TerminalNode {
		return this.getToken(SparkSqlParser.IN, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public RLIKE(): TerminalNode {
		return this.getToken(SparkSqlParser.RLIKE, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(SparkSqlParser.LIKE, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(SparkSqlParser.ANY, 0);
	}
	public SOME(): TerminalNode {
		return this.getToken(SparkSqlParser.SOME, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(SparkSqlParser.ALL, 0);
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(SparkSqlParser.ESCAPE, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(SparkSqlParser.IS, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(SparkSqlParser.NULL, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(SparkSqlParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(SparkSqlParser.FALSE, 0);
	}
	public UNKNOWN(): TerminalNode {
		return this.getToken(SparkSqlParser.UNKNOWN, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(SparkSqlParser.FROM, 0);
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(SparkSqlParser.DISTINCT, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_predicate;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterPredicate) {
	 		listener.enterPredicate(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitPredicate) {
	 		listener.exitPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitPredicate) {
			return visitor.visitPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueExpressionContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_valueExpression;
	}
	public copyFrom(ctx: ValueExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
	constructor(parser: SparkSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterValueExpressionDefault) {
	 		listener.enterValueExpressionDefault(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitValueExpressionDefault) {
	 		listener.exitValueExpressionDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitValueExpressionDefault) {
			return visitor.visitValueExpressionDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _right!: ValueExpressionContext;
	constructor(parser: SparkSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext;
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterComparison) {
	 		listener.enterComparison(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitComparison) {
	 		listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _operator!: Token;
	public _right!: ValueExpressionContext;
	constructor(parser: SparkSqlParser, ctx: ValueExpressionContext) {
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
		return this.getToken(SparkSqlParser.ASTERISK, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(SparkSqlParser.SLASH, 0);
	}
	public PERCENT(): TerminalNode {
		return this.getToken(SparkSqlParser.PERCENT, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(SparkSqlParser.DIV, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(SparkSqlParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.MINUS, 0);
	}
	public CONCAT_PIPE(): TerminalNode {
		return this.getToken(SparkSqlParser.CONCAT_PIPE, 0);
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(SparkSqlParser.AMPERSAND, 0);
	}
	public HAT(): TerminalNode {
		return this.getToken(SparkSqlParser.HAT, 0);
	}
	public PIPE(): TerminalNode {
		return this.getToken(SparkSqlParser.PIPE, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterArithmeticBinary) {
	 		listener.enterArithmeticBinary(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitArithmeticBinary) {
	 		listener.exitArithmeticBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitArithmeticBinary) {
			return visitor.visitArithmeticBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
	public _operator!: Token;
	constructor(parser: SparkSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.MINUS, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(SparkSqlParser.PLUS, 0);
	}
	public TILDE(): TerminalNode {
		return this.getToken(SparkSqlParser.TILDE, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterArithmeticUnary) {
	 		listener.enterArithmeticUnary(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitArithmeticUnary) {
	 		listener.exitArithmeticUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitArithmeticUnary) {
			return visitor.visitArithmeticUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_primaryExpression;
	}
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class StructContext extends PrimaryExpressionContext {
	public _namedExpression!: NamedExpressionContext;
	public _argument: NamedExpressionContext[] = [];
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRUCT(): TerminalNode {
		return this.getToken(SparkSqlParser.STRUCT, 0);
	}
	public namedExpression_list(): NamedExpressionContext[] {
		return this.getTypedRuleContexts(NamedExpressionContext) as NamedExpressionContext[];
	}
	public namedExpression(i: number): NamedExpressionContext {
		return this.getTypedRuleContext(NamedExpressionContext, i) as NamedExpressionContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterStruct) {
	 		listener.enterStruct(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitStruct) {
	 		listener.exitStruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitStruct) {
			return visitor.visitStruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DereferenceContext extends PrimaryExpressionContext {
	public _base!: PrimaryExpressionContext;
	public _fieldName!: IdentifierContext;
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterDereference) {
	 		listener.enterDereference(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitDereference) {
	 		listener.exitDereference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitDereference) {
			return visitor.visitDereference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleCaseContext extends PrimaryExpressionContext {
	public _value!: ExpressionContext;
	public _elseExpression!: ExpressionContext;
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CASE(): TerminalNode {
		return this.getToken(SparkSqlParser.CASE, 0);
	}
	public END(): TerminalNode {
		return this.getToken(SparkSqlParser.END, 0);
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
		return this.getToken(SparkSqlParser.ELSE, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSimpleCase) {
	 		listener.enterSimpleCase(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSimpleCase) {
	 		listener.exitSimpleCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSimpleCase) {
			return visitor.visitSimpleCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterColumnReference) {
	 		listener.enterColumnReference(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitColumnReference) {
	 		listener.exitColumnReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitColumnReference) {
			return visitor.visitColumnReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RowConstructorContext extends PrimaryExpressionContext {
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public namedExpression_list(): NamedExpressionContext[] {
		return this.getTypedRuleContexts(NamedExpressionContext) as NamedExpressionContext[];
	}
	public namedExpression(i: number): NamedExpressionContext {
		return this.getTypedRuleContext(NamedExpressionContext, i) as NamedExpressionContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterRowConstructor) {
	 		listener.enterRowConstructor(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitRowConstructor) {
	 		listener.exitRowConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitRowConstructor) {
			return visitor.visitRowConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LastContext extends PrimaryExpressionContext {
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LAST(): TerminalNode {
		return this.getToken(SparkSqlParser.LAST, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public IGNORE(): TerminalNode {
		return this.getToken(SparkSqlParser.IGNORE, 0);
	}
	public NULLS(): TerminalNode {
		return this.getToken(SparkSqlParser.NULLS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterLast) {
	 		listener.enterLast(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitLast) {
	 		listener.exitLast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitLast) {
			return visitor.visitLast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StarContext extends PrimaryExpressionContext {
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ASTERISK(): TerminalNode {
		return this.getToken(SparkSqlParser.ASTERISK, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterStar) {
	 		listener.enterStar(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitStar) {
	 		listener.exitStar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitStar) {
			return visitor.visitStar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OverlayContext extends PrimaryExpressionContext {
	public _input!: ValueExpressionContext;
	public _replace!: ValueExpressionContext;
	public _position!: ValueExpressionContext;
	public _length!: ValueExpressionContext;
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OVERLAY(): TerminalNode {
		return this.getToken(SparkSqlParser.OVERLAY, 0);
	}
	public PLACING(): TerminalNode {
		return this.getToken(SparkSqlParser.PLACING, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(SparkSqlParser.FROM, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public FOR(): TerminalNode {
		return this.getToken(SparkSqlParser.FOR, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterOverlay) {
	 		listener.enterOverlay(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitOverlay) {
	 		listener.exitOverlay(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitOverlay) {
			return visitor.visitOverlay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubscriptContext extends PrimaryExpressionContext {
	public _value!: PrimaryExpressionContext;
	public _index!: ValueExpressionContext;
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSubscript) {
	 		listener.enterSubscript(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSubscript) {
	 		listener.exitSubscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSubscript) {
			return visitor.visitSubscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSubqueryExpression) {
	 		listener.enterSubqueryExpression(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSubqueryExpression) {
	 		listener.exitSubqueryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSubqueryExpression) {
			return visitor.visitSubqueryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubstringContext extends PrimaryExpressionContext {
	public _str!: ValueExpressionContext;
	public _pos!: ValueExpressionContext;
	public _len!: ValueExpressionContext;
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SUBSTR(): TerminalNode {
		return this.getToken(SparkSqlParser.SUBSTR, 0);
	}
	public SUBSTRING(): TerminalNode {
		return this.getToken(SparkSqlParser.SUBSTRING, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(SparkSqlParser.FROM, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(SparkSqlParser.FOR, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSubstring) {
	 		listener.enterSubstring(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSubstring) {
	 		listener.exitSubstring(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSubstring) {
			return visitor.visitSubstring(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentDatetimeContext extends PrimaryExpressionContext {
	public _name!: Token;
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_DATE(): TerminalNode {
		return this.getToken(SparkSqlParser.CURRENT_DATE, 0);
	}
	public CURRENT_TIMESTAMP(): TerminalNode {
		return this.getToken(SparkSqlParser.CURRENT_TIMESTAMP, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterCurrentDatetime) {
	 		listener.enterCurrentDatetime(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitCurrentDatetime) {
	 		listener.exitCurrentDatetime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitCurrentDatetime) {
			return visitor.visitCurrentDatetime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastContext extends PrimaryExpressionContext {
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CAST(): TerminalNode {
		return this.getToken(SparkSqlParser.CAST, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public dataType(): DataTypeContext {
		return this.getTypedRuleContext(DataTypeContext, 0) as DataTypeContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterCast) {
	 		listener.enterCast(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitCast) {
	 		listener.exitCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitCast) {
			return visitor.visitCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantDefaultContext extends PrimaryExpressionContext {
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterConstantDefault) {
	 		listener.enterConstantDefault(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitConstantDefault) {
	 		listener.exitConstantDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitConstantDefault) {
			return visitor.visitConstantDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaContext extends PrimaryExpressionContext {
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
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
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterLambda) {
	 		listener.enterLambda(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitLambda) {
	 		listener.exitLambda(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitLambda) {
			return visitor.visitLambda(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterParenthesizedExpression) {
	 		listener.enterParenthesizedExpression(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitParenthesizedExpression) {
	 		listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExtractContext extends PrimaryExpressionContext {
	public _field!: IdentifierContext;
	public _source!: ValueExpressionContext;
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXTRACT(): TerminalNode {
		return this.getToken(SparkSqlParser.EXTRACT, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(SparkSqlParser.FROM, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterExtract) {
	 		listener.enterExtract(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitExtract) {
	 		listener.exitExtract(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitExtract) {
			return visitor.visitExtract(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TrimContext extends PrimaryExpressionContext {
	public _trimOption!: Token;
	public _trimStr!: ValueExpressionContext;
	public _srcStr!: ValueExpressionContext;
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TRIM(): TerminalNode {
		return this.getToken(SparkSqlParser.TRIM, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(SparkSqlParser.FROM, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public BOTH(): TerminalNode {
		return this.getToken(SparkSqlParser.BOTH, 0);
	}
	public LEADING(): TerminalNode {
		return this.getToken(SparkSqlParser.LEADING, 0);
	}
	public TRAILING(): TerminalNode {
		return this.getToken(SparkSqlParser.TRAILING, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTrim) {
	 		listener.enterTrim(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTrim) {
	 		listener.exitTrim(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTrim) {
			return visitor.visitTrim(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends PrimaryExpressionContext {
	public _expression!: ExpressionContext;
	public _argument: ExpressionContext[] = [];
	public _where!: BooleanExpressionContext;
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public functionName(): FunctionNameContext {
		return this.getTypedRuleContext(FunctionNameContext, 0) as FunctionNameContext;
	}
	public FILTER(): TerminalNode {
		return this.getToken(SparkSqlParser.FILTER, 0);
	}
	public WHERE(): TerminalNode {
		return this.getToken(SparkSqlParser.WHERE, 0);
	}
	public OVER(): TerminalNode {
		return this.getToken(SparkSqlParser.OVER, 0);
	}
	public windowSpec(): WindowSpecContext {
		return this.getTypedRuleContext(WindowSpecContext, 0) as WindowSpecContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public setQuantifier(): SetQuantifierContext {
		return this.getTypedRuleContext(SetQuantifierContext, 0) as SetQuantifierContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SearchedCaseContext extends PrimaryExpressionContext {
	public _elseExpression!: ExpressionContext;
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CASE(): TerminalNode {
		return this.getToken(SparkSqlParser.CASE, 0);
	}
	public END(): TerminalNode {
		return this.getToken(SparkSqlParser.END, 0);
	}
	public whenClause_list(): WhenClauseContext[] {
		return this.getTypedRuleContexts(WhenClauseContext) as WhenClauseContext[];
	}
	public whenClause(i: number): WhenClauseContext {
		return this.getTypedRuleContext(WhenClauseContext, i) as WhenClauseContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(SparkSqlParser.ELSE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSearchedCase) {
	 		listener.enterSearchedCase(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSearchedCase) {
	 		listener.exitSearchedCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSearchedCase) {
			return visitor.visitSearchedCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PositionContext extends PrimaryExpressionContext {
	public _substr!: ValueExpressionContext;
	public _str!: ValueExpressionContext;
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public POSITION(): TerminalNode {
		return this.getToken(SparkSqlParser.POSITION, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(SparkSqlParser.IN, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterPosition) {
	 		listener.enterPosition(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitPosition) {
	 		listener.exitPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitPosition) {
			return visitor.visitPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FirstContext extends PrimaryExpressionContext {
	constructor(parser: SparkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FIRST(): TerminalNode {
		return this.getToken(SparkSqlParser.FIRST, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public IGNORE(): TerminalNode {
		return this.getToken(SparkSqlParser.IGNORE, 0);
	}
	public NULLS(): TerminalNode {
		return this.getToken(SparkSqlParser.NULLS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterFirst) {
	 		listener.enterFirst(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitFirst) {
	 		listener.exitFirst(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitFirst) {
			return visitor.visitFirst(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_constant;
	}
	public copyFrom(ctx: ConstantContext): void {
		super.copyFrom(ctx);
	}
}
export class NullLiteralContext extends ConstantContext {
	constructor(parser: SparkSqlParser, ctx: ConstantContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NULL(): TerminalNode {
		return this.getToken(SparkSqlParser.NULL, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterNullLiteral) {
	 		listener.enterNullLiteral(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitNullLiteral) {
	 		listener.exitNullLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitNullLiteral) {
			return visitor.visitNullLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends ConstantContext {
	constructor(parser: SparkSqlParser, ctx: ConstantContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, i);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterStringLiteral) {
	 		listener.enterStringLiteral(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitStringLiteral) {
	 		listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeConstructorContext extends ConstantContext {
	constructor(parser: SparkSqlParser, ctx: ConstantContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTypeConstructor) {
	 		listener.enterTypeConstructor(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTypeConstructor) {
	 		listener.exitTypeConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTypeConstructor) {
			return visitor.visitTypeConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntervalLiteralContext extends ConstantContext {
	constructor(parser: SparkSqlParser, ctx: ConstantContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public interval(): IntervalContext {
		return this.getTypedRuleContext(IntervalContext, 0) as IntervalContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterIntervalLiteral) {
	 		listener.enterIntervalLiteral(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitIntervalLiteral) {
	 		listener.exitIntervalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitIntervalLiteral) {
			return visitor.visitIntervalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericLiteralContext extends ConstantContext {
	constructor(parser: SparkSqlParser, ctx: ConstantContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterNumericLiteral) {
	 		listener.enterNumericLiteral(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitNumericLiteral) {
	 		listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralContext extends ConstantContext {
	constructor(parser: SparkSqlParser, ctx: ConstantContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanValue(): BooleanValueContext {
		return this.getTypedRuleContext(BooleanValueContext, 0) as BooleanValueContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterBooleanLiteral) {
	 		listener.enterBooleanLiteral(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitBooleanLiteral) {
	 		listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(SparkSqlParser.EQ, 0);
	}
	public NEQ(): TerminalNode {
		return this.getToken(SparkSqlParser.NEQ, 0);
	}
	public NEQJ(): TerminalNode {
		return this.getToken(SparkSqlParser.NEQJ, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(SparkSqlParser.LT, 0);
	}
	public LTE(): TerminalNode {
		return this.getToken(SparkSqlParser.LTE, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(SparkSqlParser.GT, 0);
	}
	public GTE(): TerminalNode {
		return this.getToken(SparkSqlParser.GTE, 0);
	}
	public NSEQ(): TerminalNode {
		return this.getToken(SparkSqlParser.NSEQ, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_comparisonOperator;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterComparisonOperator) {
	 		listener.enterComparisonOperator(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitComparisonOperator) {
	 		listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArithmeticOperatorContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PLUS(): TerminalNode {
		return this.getToken(SparkSqlParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.MINUS, 0);
	}
	public ASTERISK(): TerminalNode {
		return this.getToken(SparkSqlParser.ASTERISK, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(SparkSqlParser.SLASH, 0);
	}
	public PERCENT(): TerminalNode {
		return this.getToken(SparkSqlParser.PERCENT, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(SparkSqlParser.DIV, 0);
	}
	public TILDE(): TerminalNode {
		return this.getToken(SparkSqlParser.TILDE, 0);
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(SparkSqlParser.AMPERSAND, 0);
	}
	public PIPE(): TerminalNode {
		return this.getToken(SparkSqlParser.PIPE, 0);
	}
	public CONCAT_PIPE(): TerminalNode {
		return this.getToken(SparkSqlParser.CONCAT_PIPE, 0);
	}
	public HAT(): TerminalNode {
		return this.getToken(SparkSqlParser.HAT, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_arithmeticOperator;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterArithmeticOperator) {
	 		listener.enterArithmeticOperator(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitArithmeticOperator) {
	 		listener.exitArithmeticOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitArithmeticOperator) {
			return visitor.visitArithmeticOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateOperatorContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OR(): TerminalNode {
		return this.getToken(SparkSqlParser.OR, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(SparkSqlParser.AND, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(SparkSqlParser.IN, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_predicateOperator;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterPredicateOperator) {
	 		listener.enterPredicateOperator(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitPredicateOperator) {
	 		listener.exitPredicateOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitPredicateOperator) {
			return visitor.visitPredicateOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE(): TerminalNode {
		return this.getToken(SparkSqlParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(SparkSqlParser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_booleanValue;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterBooleanValue) {
	 		listener.enterBooleanValue(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitBooleanValue) {
	 		listener.exitBooleanValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitBooleanValue) {
			return visitor.visitBooleanValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTERVAL(): TerminalNode {
		return this.getToken(SparkSqlParser.INTERVAL, 0);
	}
	public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext {
		return this.getTypedRuleContext(ErrorCapturingMultiUnitsIntervalContext, 0) as ErrorCapturingMultiUnitsIntervalContext;
	}
	public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext {
		return this.getTypedRuleContext(ErrorCapturingUnitToUnitIntervalContext, 0) as ErrorCapturingUnitToUnitIntervalContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_interval;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterInterval) {
	 		listener.enterInterval(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitInterval) {
	 		listener.exitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitInterval) {
			return visitor.visitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingMultiUnitsIntervalContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multiUnitsInterval(): MultiUnitsIntervalContext {
		return this.getTypedRuleContext(MultiUnitsIntervalContext, 0) as MultiUnitsIntervalContext;
	}
	public unitToUnitInterval(): UnitToUnitIntervalContext {
		return this.getTypedRuleContext(UnitToUnitIntervalContext, 0) as UnitToUnitIntervalContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_errorCapturingMultiUnitsInterval;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterErrorCapturingMultiUnitsInterval) {
	 		listener.enterErrorCapturingMultiUnitsInterval(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitErrorCapturingMultiUnitsInterval) {
	 		listener.exitErrorCapturingMultiUnitsInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitErrorCapturingMultiUnitsInterval) {
			return visitor.visitErrorCapturingMultiUnitsInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiUnitsIntervalContext extends ParserRuleContext {
	public _identifier!: IdentifierContext;
	public _unit: IdentifierContext[] = [];
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public intervalValue_list(): IntervalValueContext[] {
		return this.getTypedRuleContexts(IntervalValueContext) as IntervalValueContext[];
	}
	public intervalValue(i: number): IntervalValueContext {
		return this.getTypedRuleContext(IntervalValueContext, i) as IntervalValueContext;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_multiUnitsInterval;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterMultiUnitsInterval) {
	 		listener.enterMultiUnitsInterval(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitMultiUnitsInterval) {
	 		listener.exitMultiUnitsInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitMultiUnitsInterval) {
			return visitor.visitMultiUnitsInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingUnitToUnitIntervalContext extends ParserRuleContext {
	public _body!: UnitToUnitIntervalContext;
	public _error1!: MultiUnitsIntervalContext;
	public _error2!: UnitToUnitIntervalContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unitToUnitInterval_list(): UnitToUnitIntervalContext[] {
		return this.getTypedRuleContexts(UnitToUnitIntervalContext) as UnitToUnitIntervalContext[];
	}
	public unitToUnitInterval(i: number): UnitToUnitIntervalContext {
		return this.getTypedRuleContext(UnitToUnitIntervalContext, i) as UnitToUnitIntervalContext;
	}
	public multiUnitsInterval(): MultiUnitsIntervalContext {
		return this.getTypedRuleContext(MultiUnitsIntervalContext, 0) as MultiUnitsIntervalContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_errorCapturingUnitToUnitInterval;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterErrorCapturingUnitToUnitInterval) {
	 		listener.enterErrorCapturingUnitToUnitInterval(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitErrorCapturingUnitToUnitInterval) {
	 		listener.exitErrorCapturingUnitToUnitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitErrorCapturingUnitToUnitInterval) {
			return visitor.visitErrorCapturingUnitToUnitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitToUnitIntervalContext extends ParserRuleContext {
	public _value!: IntervalValueContext;
	public _from_!: IdentifierContext;
	public _to!: IdentifierContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TO(): TerminalNode {
		return this.getToken(SparkSqlParser.TO, 0);
	}
	public intervalValue(): IntervalValueContext {
		return this.getTypedRuleContext(IntervalValueContext, 0) as IntervalValueContext;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_unitToUnitInterval;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterUnitToUnitInterval) {
	 		listener.enterUnitToUnitInterval(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitUnitToUnitInterval) {
	 		listener.exitUnitToUnitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitUnitToUnitInterval) {
			return visitor.visitUnitToUnitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalValueContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER_VALUE(): TerminalNode {
		return this.getToken(SparkSqlParser.INTEGER_VALUE, 0);
	}
	public DECIMAL_VALUE(): TerminalNode {
		return this.getToken(SparkSqlParser.DECIMAL_VALUE, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(SparkSqlParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.MINUS, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SparkSqlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_intervalValue;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterIntervalValue) {
	 		listener.enterIntervalValue(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitIntervalValue) {
	 		listener.exitIntervalValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitIntervalValue) {
			return visitor.visitIntervalValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColPositionContext extends ParserRuleContext {
	public _position!: Token;
	public _afterCol!: ErrorCapturingIdentifierContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FIRST(): TerminalNode {
		return this.getToken(SparkSqlParser.FIRST, 0);
	}
	public AFTER(): TerminalNode {
		return this.getToken(SparkSqlParser.AFTER, 0);
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0) as ErrorCapturingIdentifierContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_colPosition;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterColPosition) {
	 		listener.enterColPosition(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitColPosition) {
	 		listener.exitColPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitColPosition) {
			return visitor.visitColPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataTypeContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_dataType;
	}
	public copyFrom(ctx: DataTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class ComplexDataTypeContext extends DataTypeContext {
	public _complex!: Token;
	constructor(parser: SparkSqlParser, ctx: DataTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LT(): TerminalNode {
		return this.getToken(SparkSqlParser.LT, 0);
	}
	public dataType_list(): DataTypeContext[] {
		return this.getTypedRuleContexts(DataTypeContext) as DataTypeContext[];
	}
	public dataType(i: number): DataTypeContext {
		return this.getTypedRuleContext(DataTypeContext, i) as DataTypeContext;
	}
	public GT(): TerminalNode {
		return this.getToken(SparkSqlParser.GT, 0);
	}
	public ARRAY(): TerminalNode {
		return this.getToken(SparkSqlParser.ARRAY, 0);
	}
	public MAP(): TerminalNode {
		return this.getToken(SparkSqlParser.MAP, 0);
	}
	public STRUCT(): TerminalNode {
		return this.getToken(SparkSqlParser.STRUCT, 0);
	}
	public NEQ(): TerminalNode {
		return this.getToken(SparkSqlParser.NEQ, 0);
	}
	public complexColTypeList(): ComplexColTypeListContext {
		return this.getTypedRuleContext(ComplexColTypeListContext, 0) as ComplexColTypeListContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterComplexDataType) {
	 		listener.enterComplexDataType(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitComplexDataType) {
	 		listener.exitComplexDataType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitComplexDataType) {
			return visitor.visitComplexDataType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrimitiveDataTypeContext extends DataTypeContext {
	constructor(parser: SparkSqlParser, ctx: DataTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public INTEGER_VALUE_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.INTEGER_VALUE);
	}
	public INTEGER_VALUE(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.INTEGER_VALUE, i);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterPrimitiveDataType) {
	 		listener.enterPrimitiveDataType(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitPrimitiveDataType) {
	 		listener.exitPrimitiveDataType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitPrimitiveDataType) {
			return visitor.visitPrimitiveDataType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedColTypeWithPositionListContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualifiedColTypeWithPosition_list(): QualifiedColTypeWithPositionContext[] {
		return this.getTypedRuleContexts(QualifiedColTypeWithPositionContext) as QualifiedColTypeWithPositionContext[];
	}
	public qualifiedColTypeWithPosition(i: number): QualifiedColTypeWithPositionContext {
		return this.getTypedRuleContext(QualifiedColTypeWithPositionContext, i) as QualifiedColTypeWithPositionContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_qualifiedColTypeWithPositionList;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterQualifiedColTypeWithPositionList) {
	 		listener.enterQualifiedColTypeWithPositionList(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitQualifiedColTypeWithPositionList) {
	 		listener.exitQualifiedColTypeWithPositionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitQualifiedColTypeWithPositionList) {
			return visitor.visitQualifiedColTypeWithPositionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedColTypeWithPositionContext extends ParserRuleContext {
	public _name!: MultipartIdentifierContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dataType(): DataTypeContext {
		return this.getTypedRuleContext(DataTypeContext, 0) as DataTypeContext;
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getTypedRuleContext(MultipartIdentifierContext, 0) as MultipartIdentifierContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(SparkSqlParser.NULL, 0);
	}
	public commentSpec(): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, 0) as CommentSpecContext;
	}
	public colPosition(): ColPositionContext {
		return this.getTypedRuleContext(ColPositionContext, 0) as ColPositionContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_qualifiedColTypeWithPosition;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterQualifiedColTypeWithPosition) {
	 		listener.enterQualifiedColTypeWithPosition(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitQualifiedColTypeWithPosition) {
	 		listener.exitQualifiedColTypeWithPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitQualifiedColTypeWithPosition) {
			return visitor.visitQualifiedColTypeWithPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColTypeListContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public colType_list(): ColTypeContext[] {
		return this.getTypedRuleContexts(ColTypeContext) as ColTypeContext[];
	}
	public colType(i: number): ColTypeContext {
		return this.getTypedRuleContext(ColTypeContext, i) as ColTypeContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_colTypeList;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterColTypeList) {
	 		listener.enterColTypeList(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitColTypeList) {
	 		listener.exitColTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitColTypeList) {
			return visitor.visitColTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColTypeContext extends ParserRuleContext {
	public _colName!: ErrorCapturingIdentifierContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dataType(): DataTypeContext {
		return this.getTypedRuleContext(DataTypeContext, 0) as DataTypeContext;
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0) as ErrorCapturingIdentifierContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(SparkSqlParser.NULL, 0);
	}
	public commentSpec(): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, 0) as CommentSpecContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_colType;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterColType) {
	 		listener.enterColType(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitColType) {
	 		listener.exitColType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitColType) {
			return visitor.visitColType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComplexColTypeListContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public complexColType_list(): ComplexColTypeContext[] {
		return this.getTypedRuleContexts(ComplexColTypeContext) as ComplexColTypeContext[];
	}
	public complexColType(i: number): ComplexColTypeContext {
		return this.getTypedRuleContext(ComplexColTypeContext, i) as ComplexColTypeContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_complexColTypeList;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterComplexColTypeList) {
	 		listener.enterComplexColTypeList(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitComplexColTypeList) {
	 		listener.exitComplexColTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitComplexColTypeList) {
			return visitor.visitComplexColTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComplexColTypeContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public dataType(): DataTypeContext {
		return this.getTypedRuleContext(DataTypeContext, 0) as DataTypeContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(SparkSqlParser.NULL, 0);
	}
	public commentSpec(): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, 0) as CommentSpecContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_complexColType;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterComplexColType) {
	 		listener.enterComplexColType(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitComplexColType) {
	 		listener.exitComplexColType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitComplexColType) {
			return visitor.visitComplexColType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenClauseContext extends ParserRuleContext {
	public _condition!: ExpressionContext;
	public _result!: ExpressionContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHEN(): TerminalNode {
		return this.getToken(SparkSqlParser.WHEN, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(SparkSqlParser.THEN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_whenClause;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterWhenClause) {
	 		listener.enterWhenClause(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitWhenClause) {
	 		listener.exitWhenClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitWhenClause) {
			return visitor.visitWhenClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowClauseContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WINDOW(): TerminalNode {
		return this.getToken(SparkSqlParser.WINDOW, 0);
	}
	public namedWindow_list(): NamedWindowContext[] {
		return this.getTypedRuleContexts(NamedWindowContext) as NamedWindowContext[];
	}
	public namedWindow(i: number): NamedWindowContext {
		return this.getTypedRuleContext(NamedWindowContext, i) as NamedWindowContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_windowClause;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterWindowClause) {
	 		listener.enterWindowClause(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitWindowClause) {
	 		listener.exitWindowClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitWindowClause) {
			return visitor.visitWindowClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedWindowContext extends ParserRuleContext {
	public _name!: ErrorCapturingIdentifierContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public windowSpec(): WindowSpecContext {
		return this.getTypedRuleContext(WindowSpecContext, 0) as WindowSpecContext;
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0) as ErrorCapturingIdentifierContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_namedWindow;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterNamedWindow) {
	 		listener.enterNamedWindow(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitNamedWindow) {
	 		listener.exitNamedWindow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitNamedWindow) {
			return visitor.visitNamedWindow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowSpecContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_windowSpec;
	}
	public copyFrom(ctx: WindowSpecContext): void {
		super.copyFrom(ctx);
	}
}
export class WindowRefContext extends WindowSpecContext {
	public _name!: ErrorCapturingIdentifierContext;
	constructor(parser: SparkSqlParser, ctx: WindowSpecContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0) as ErrorCapturingIdentifierContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterWindowRef) {
	 		listener.enterWindowRef(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitWindowRef) {
	 		listener.exitWindowRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitWindowRef) {
			return visitor.visitWindowRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WindowDefContext extends WindowSpecContext {
	public _expression!: ExpressionContext;
	public _partition: ExpressionContext[] = [];
	constructor(parser: SparkSqlParser, ctx: WindowSpecContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CLUSTER(): TerminalNode {
		return this.getToken(SparkSqlParser.CLUSTER, 0);
	}
	public BY_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.BY);
	}
	public BY(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.BY, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public windowFrame(): WindowFrameContext {
		return this.getTypedRuleContext(WindowFrameContext, 0) as WindowFrameContext;
	}
	public sortItem_list(): SortItemContext[] {
		return this.getTypedRuleContexts(SortItemContext) as SortItemContext[];
	}
	public sortItem(i: number): SortItemContext {
		return this.getTypedRuleContext(SortItemContext, i) as SortItemContext;
	}
	public PARTITION(): TerminalNode {
		return this.getToken(SparkSqlParser.PARTITION, 0);
	}
	public DISTRIBUTE(): TerminalNode {
		return this.getToken(SparkSqlParser.DISTRIBUTE, 0);
	}
	public ORDER(): TerminalNode {
		return this.getToken(SparkSqlParser.ORDER, 0);
	}
	public SORT(): TerminalNode {
		return this.getToken(SparkSqlParser.SORT, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterWindowDef) {
	 		listener.enterWindowDef(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitWindowDef) {
	 		listener.exitWindowDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitWindowDef) {
			return visitor.visitWindowDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowFrameContext extends ParserRuleContext {
	public _frameType!: Token;
	public _start!: FrameBoundContext;
	public _end!: FrameBoundContext;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RANGE(): TerminalNode {
		return this.getToken(SparkSqlParser.RANGE, 0);
	}
	public frameBound_list(): FrameBoundContext[] {
		return this.getTypedRuleContexts(FrameBoundContext) as FrameBoundContext[];
	}
	public frameBound(i: number): FrameBoundContext {
		return this.getTypedRuleContext(FrameBoundContext, i) as FrameBoundContext;
	}
	public ROWS(): TerminalNode {
		return this.getToken(SparkSqlParser.ROWS, 0);
	}
	public BETWEEN(): TerminalNode {
		return this.getToken(SparkSqlParser.BETWEEN, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(SparkSqlParser.AND, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_windowFrame;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterWindowFrame) {
	 		listener.enterWindowFrame(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitWindowFrame) {
	 		listener.exitWindowFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitWindowFrame) {
			return visitor.visitWindowFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FrameBoundContext extends ParserRuleContext {
	public _boundType!: Token;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNBOUNDED(): TerminalNode {
		return this.getToken(SparkSqlParser.UNBOUNDED, 0);
	}
	public PRECEDING(): TerminalNode {
		return this.getToken(SparkSqlParser.PRECEDING, 0);
	}
	public FOLLOWING(): TerminalNode {
		return this.getToken(SparkSqlParser.FOLLOWING, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(SparkSqlParser.ROW, 0);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(SparkSqlParser.CURRENT, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_frameBound;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterFrameBound) {
	 		listener.enterFrameBound(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitFrameBound) {
	 		listener.exitFrameBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitFrameBound) {
			return visitor.visitFrameBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameListContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_qualifiedNameList;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterQualifiedNameList) {
	 		listener.enterQualifiedNameList(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitQualifiedNameList) {
	 		listener.exitQualifiedNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitQualifiedNameList) {
			return visitor.visitQualifiedNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public FILTER(): TerminalNode {
		return this.getToken(SparkSqlParser.FILTER, 0);
	}
	public LEFT(): TerminalNode {
		return this.getToken(SparkSqlParser.LEFT, 0);
	}
	public RIGHT(): TerminalNode {
		return this.getToken(SparkSqlParser.RIGHT, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_functionName;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterFunctionName) {
	 		listener.enterFunctionName(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitFunctionName) {
	 		listener.exitFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitFunctionName) {
			return visitor.visitFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return SparkSqlParser.RULE_qualifiedName;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterQualifiedName) {
	 		listener.enterQualifiedName(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitQualifiedName) {
	 		listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingIdentifierContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierExtraContext, 0) as ErrorCapturingIdentifierExtraContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_errorCapturingIdentifier;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterErrorCapturingIdentifier) {
	 		listener.enterErrorCapturingIdentifier(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitErrorCapturingIdentifier) {
	 		listener.exitErrorCapturingIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitErrorCapturingIdentifier) {
			return visitor.visitErrorCapturingIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingIdentifierExtraContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_errorCapturingIdentifierExtra;
	}
	public copyFrom(ctx: ErrorCapturingIdentifierExtraContext): void {
		super.copyFrom(ctx);
	}
}
export class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
	constructor(parser: SparkSqlParser, ctx: ErrorCapturingIdentifierExtraContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MINUS_list(): TerminalNode[] {
	    	return this.getTokens(SparkSqlParser.MINUS);
	}
	public MINUS(i: number): TerminalNode {
		return this.getToken(SparkSqlParser.MINUS, i);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterErrorIdent) {
	 		listener.enterErrorIdent(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitErrorIdent) {
	 		listener.exitErrorIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitErrorIdent) {
			return visitor.visitErrorIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RealIdentContext extends ErrorCapturingIdentifierExtraContext {
	constructor(parser: SparkSqlParser, ctx: ErrorCapturingIdentifierExtraContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterRealIdent) {
	 		listener.enterRealIdent(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitRealIdent) {
	 		listener.exitRealIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitRealIdent) {
			return visitor.visitRealIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public strictIdentifier(): StrictIdentifierContext {
		return this.getTypedRuleContext(StrictIdentifierContext, 0) as StrictIdentifierContext;
	}
	public strictNonReserved(): StrictNonReservedContext {
		return this.getTypedRuleContext(StrictNonReservedContext, 0) as StrictNonReservedContext;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_identifier;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrictIdentifierContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_strictIdentifier;
	}
	public copyFrom(ctx: StrictIdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class QuotedIdentifierAlternativeContext extends StrictIdentifierContext {
	constructor(parser: SparkSqlParser, ctx: StrictIdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public quotedIdentifier(): QuotedIdentifierContext {
		return this.getTypedRuleContext(QuotedIdentifierContext, 0) as QuotedIdentifierContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterQuotedIdentifierAlternative) {
	 		listener.enterQuotedIdentifierAlternative(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitQuotedIdentifierAlternative) {
	 		listener.exitQuotedIdentifierAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifierAlternative) {
			return visitor.visitQuotedIdentifierAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnquotedIdentifierContext extends StrictIdentifierContext {
	constructor(parser: SparkSqlParser, ctx: StrictIdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(SparkSqlParser.IDENTIFIER, 0);
	}
	public ansiNonReserved(): AnsiNonReservedContext {
		return this.getTypedRuleContext(AnsiNonReservedContext, 0) as AnsiNonReservedContext;
	}
	public nonReserved(): NonReservedContext {
		return this.getTypedRuleContext(NonReservedContext, 0) as NonReservedContext;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterUnquotedIdentifier) {
	 		listener.enterUnquotedIdentifier(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitUnquotedIdentifier) {
	 		listener.exitUnquotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitUnquotedIdentifier) {
			return visitor.visitUnquotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuotedIdentifierContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BACKQUOTED_IDENTIFIER(): TerminalNode {
		return this.getToken(SparkSqlParser.BACKQUOTED_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_quotedIdentifier;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterQuotedIdentifier) {
	 		listener.enterQuotedIdentifier(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitQuotedIdentifier) {
	 		listener.exitQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifier) {
			return visitor.visitQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_number;
	}
	public copyFrom(ctx: NumberContext): void {
		super.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends NumberContext {
	constructor(parser: SparkSqlParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DECIMAL_VALUE(): TerminalNode {
		return this.getToken(SparkSqlParser.DECIMAL_VALUE, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.MINUS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterDecimalLiteral) {
	 		listener.enterDecimalLiteral(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitDecimalLiteral) {
	 		listener.exitDecimalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitDecimalLiteral) {
			return visitor.visitDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BigIntLiteralContext extends NumberContext {
	constructor(parser: SparkSqlParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BIGINT_LITERAL(): TerminalNode {
		return this.getToken(SparkSqlParser.BIGINT_LITERAL, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.MINUS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterBigIntLiteral) {
	 		listener.enterBigIntLiteral(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitBigIntLiteral) {
	 		listener.exitBigIntLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitBigIntLiteral) {
			return visitor.visitBigIntLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TinyIntLiteralContext extends NumberContext {
	constructor(parser: SparkSqlParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TINYINT_LITERAL(): TerminalNode {
		return this.getToken(SparkSqlParser.TINYINT_LITERAL, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.MINUS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterTinyIntLiteral) {
	 		listener.enterTinyIntLiteral(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitTinyIntLiteral) {
	 		listener.exitTinyIntLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitTinyIntLiteral) {
			return visitor.visitTinyIntLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LegacyDecimalLiteralContext extends NumberContext {
	constructor(parser: SparkSqlParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXPONENT_VALUE(): TerminalNode {
		return this.getToken(SparkSqlParser.EXPONENT_VALUE, 0);
	}
	public DECIMAL_VALUE(): TerminalNode {
		return this.getToken(SparkSqlParser.DECIMAL_VALUE, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.MINUS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterLegacyDecimalLiteral) {
	 		listener.enterLegacyDecimalLiteral(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitLegacyDecimalLiteral) {
	 		listener.exitLegacyDecimalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitLegacyDecimalLiteral) {
			return visitor.visitLegacyDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BigDecimalLiteralContext extends NumberContext {
	constructor(parser: SparkSqlParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BIGDECIMAL_LITERAL(): TerminalNode {
		return this.getToken(SparkSqlParser.BIGDECIMAL_LITERAL, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.MINUS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterBigDecimalLiteral) {
	 		listener.enterBigDecimalLiteral(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitBigDecimalLiteral) {
	 		listener.exitBigDecimalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitBigDecimalLiteral) {
			return visitor.visitBigDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExponentLiteralContext extends NumberContext {
	constructor(parser: SparkSqlParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXPONENT_VALUE(): TerminalNode {
		return this.getToken(SparkSqlParser.EXPONENT_VALUE, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.MINUS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterExponentLiteral) {
	 		listener.enterExponentLiteral(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitExponentLiteral) {
	 		listener.exitExponentLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitExponentLiteral) {
			return visitor.visitExponentLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoubleLiteralContext extends NumberContext {
	constructor(parser: SparkSqlParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOUBLE_LITERAL(): TerminalNode {
		return this.getToken(SparkSqlParser.DOUBLE_LITERAL, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.MINUS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterDoubleLiteral) {
	 		listener.enterDoubleLiteral(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitDoubleLiteral) {
	 		listener.exitDoubleLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitDoubleLiteral) {
			return visitor.visitDoubleLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntegerLiteralContext extends NumberContext {
	constructor(parser: SparkSqlParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER_VALUE(): TerminalNode {
		return this.getToken(SparkSqlParser.INTEGER_VALUE, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.MINUS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterIntegerLiteral) {
	 		listener.enterIntegerLiteral(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitIntegerLiteral) {
	 		listener.exitIntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatLiteralContext extends NumberContext {
	constructor(parser: SparkSqlParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FLOAT_LITERAL(): TerminalNode {
		return this.getToken(SparkSqlParser.FLOAT_LITERAL, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.MINUS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterFloatLiteral) {
	 		listener.enterFloatLiteral(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitFloatLiteral) {
	 		listener.exitFloatLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitFloatLiteral) {
			return visitor.visitFloatLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SmallIntLiteralContext extends NumberContext {
	constructor(parser: SparkSqlParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SMALLINT_LITERAL(): TerminalNode {
		return this.getToken(SparkSqlParser.SMALLINT_LITERAL, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.MINUS, 0);
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterSmallIntLiteral) {
	 		listener.enterSmallIntLiteral(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitSmallIntLiteral) {
	 		listener.exitSmallIntLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitSmallIntLiteral) {
			return visitor.visitSmallIntLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterColumnActionContext extends ParserRuleContext {
	public _setOrDrop!: Token;
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TYPE(): TerminalNode {
		return this.getToken(SparkSqlParser.TYPE, 0);
	}
	public dataType(): DataTypeContext {
		return this.getTypedRuleContext(DataTypeContext, 0) as DataTypeContext;
	}
	public commentSpec(): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, 0) as CommentSpecContext;
	}
	public colPosition(): ColPositionContext {
		return this.getTypedRuleContext(ColPositionContext, 0) as ColPositionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(SparkSqlParser.NULL, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(SparkSqlParser.SET, 0);
	}
	public DROP(): TerminalNode {
		return this.getToken(SparkSqlParser.DROP, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_alterColumnAction;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterAlterColumnAction) {
	 		listener.enterAlterColumnAction(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitAlterColumnAction) {
	 		listener.exitAlterColumnAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitAlterColumnAction) {
			return visitor.visitAlterColumnAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnsiNonReservedContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ADD(): TerminalNode {
		return this.getToken(SparkSqlParser.ADD, 0);
	}
	public AFTER(): TerminalNode {
		return this.getToken(SparkSqlParser.AFTER, 0);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public ANALYZE(): TerminalNode {
		return this.getToken(SparkSqlParser.ANALYZE, 0);
	}
	public ANTI(): TerminalNode {
		return this.getToken(SparkSqlParser.ANTI, 0);
	}
	public ARCHIVE(): TerminalNode {
		return this.getToken(SparkSqlParser.ARCHIVE, 0);
	}
	public ARRAY(): TerminalNode {
		return this.getToken(SparkSqlParser.ARRAY, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(SparkSqlParser.ASC, 0);
	}
	public AT(): TerminalNode {
		return this.getToken(SparkSqlParser.AT, 0);
	}
	public BETWEEN(): TerminalNode {
		return this.getToken(SparkSqlParser.BETWEEN, 0);
	}
	public BUCKET(): TerminalNode {
		return this.getToken(SparkSqlParser.BUCKET, 0);
	}
	public BUCKETS(): TerminalNode {
		return this.getToken(SparkSqlParser.BUCKETS, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(SparkSqlParser.BY, 0);
	}
	public CACHE(): TerminalNode {
		return this.getToken(SparkSqlParser.CACHE, 0);
	}
	public CASCADE(): TerminalNode {
		return this.getToken(SparkSqlParser.CASCADE, 0);
	}
	public CHANGE(): TerminalNode {
		return this.getToken(SparkSqlParser.CHANGE, 0);
	}
	public CLEAR(): TerminalNode {
		return this.getToken(SparkSqlParser.CLEAR, 0);
	}
	public CLUSTER(): TerminalNode {
		return this.getToken(SparkSqlParser.CLUSTER, 0);
	}
	public CLUSTERED(): TerminalNode {
		return this.getToken(SparkSqlParser.CLUSTERED, 0);
	}
	public CODEGEN(): TerminalNode {
		return this.getToken(SparkSqlParser.CODEGEN, 0);
	}
	public COLLECTION(): TerminalNode {
		return this.getToken(SparkSqlParser.COLLECTION, 0);
	}
	public COLUMNS(): TerminalNode {
		return this.getToken(SparkSqlParser.COLUMNS, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(SparkSqlParser.COMMENT, 0);
	}
	public COMMIT(): TerminalNode {
		return this.getToken(SparkSqlParser.COMMIT, 0);
	}
	public COMPACT(): TerminalNode {
		return this.getToken(SparkSqlParser.COMPACT, 0);
	}
	public COMPACTIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.COMPACTIONS, 0);
	}
	public COMPUTE(): TerminalNode {
		return this.getToken(SparkSqlParser.COMPUTE, 0);
	}
	public CONCATENATE(): TerminalNode {
		return this.getToken(SparkSqlParser.CONCATENATE, 0);
	}
	public COST(): TerminalNode {
		return this.getToken(SparkSqlParser.COST, 0);
	}
	public CUBE(): TerminalNode {
		return this.getToken(SparkSqlParser.CUBE, 0);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(SparkSqlParser.CURRENT, 0);
	}
	public DATA(): TerminalNode {
		return this.getToken(SparkSqlParser.DATA, 0);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(SparkSqlParser.DATABASE, 0);
	}
	public DATABASES(): TerminalNode {
		return this.getToken(SparkSqlParser.DATABASES, 0);
	}
	public DBPROPERTIES(): TerminalNode {
		return this.getToken(SparkSqlParser.DBPROPERTIES, 0);
	}
	public DEFINED(): TerminalNode {
		return this.getToken(SparkSqlParser.DEFINED, 0);
	}
	public DELETE(): TerminalNode {
		return this.getToken(SparkSqlParser.DELETE, 0);
	}
	public DELIMITED(): TerminalNode {
		return this.getToken(SparkSqlParser.DELIMITED, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(SparkSqlParser.DESC, 0);
	}
	public DESCRIBE(): TerminalNode {
		return this.getToken(SparkSqlParser.DESCRIBE, 0);
	}
	public DFS(): TerminalNode {
		return this.getToken(SparkSqlParser.DFS, 0);
	}
	public DIRECTORIES(): TerminalNode {
		return this.getToken(SparkSqlParser.DIRECTORIES, 0);
	}
	public DIRECTORY(): TerminalNode {
		return this.getToken(SparkSqlParser.DIRECTORY, 0);
	}
	public DISTRIBUTE(): TerminalNode {
		return this.getToken(SparkSqlParser.DISTRIBUTE, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(SparkSqlParser.DIV, 0);
	}
	public DROP(): TerminalNode {
		return this.getToken(SparkSqlParser.DROP, 0);
	}
	public ESCAPED(): TerminalNode {
		return this.getToken(SparkSqlParser.ESCAPED, 0);
	}
	public EXCHANGE(): TerminalNode {
		return this.getToken(SparkSqlParser.EXCHANGE, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
	public EXPLAIN(): TerminalNode {
		return this.getToken(SparkSqlParser.EXPLAIN, 0);
	}
	public EXPORT(): TerminalNode {
		return this.getToken(SparkSqlParser.EXPORT, 0);
	}
	public EXTENDED(): TerminalNode {
		return this.getToken(SparkSqlParser.EXTENDED, 0);
	}
	public EXTERNAL(): TerminalNode {
		return this.getToken(SparkSqlParser.EXTERNAL, 0);
	}
	public EXTRACT(): TerminalNode {
		return this.getToken(SparkSqlParser.EXTRACT, 0);
	}
	public FIELDS(): TerminalNode {
		return this.getToken(SparkSqlParser.FIELDS, 0);
	}
	public FILEFORMAT(): TerminalNode {
		return this.getToken(SparkSqlParser.FILEFORMAT, 0);
	}
	public FIRST(): TerminalNode {
		return this.getToken(SparkSqlParser.FIRST, 0);
	}
	public FOLLOWING(): TerminalNode {
		return this.getToken(SparkSqlParser.FOLLOWING, 0);
	}
	public FORMAT(): TerminalNode {
		return this.getToken(SparkSqlParser.FORMAT, 0);
	}
	public FORMATTED(): TerminalNode {
		return this.getToken(SparkSqlParser.FORMATTED, 0);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(SparkSqlParser.FUNCTION, 0);
	}
	public FUNCTIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.FUNCTIONS, 0);
	}
	public GLOBAL(): TerminalNode {
		return this.getToken(SparkSqlParser.GLOBAL, 0);
	}
	public GROUPING(): TerminalNode {
		return this.getToken(SparkSqlParser.GROUPING, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(SparkSqlParser.IF, 0);
	}
	public IGNORE(): TerminalNode {
		return this.getToken(SparkSqlParser.IGNORE, 0);
	}
	public IMPORT(): TerminalNode {
		return this.getToken(SparkSqlParser.IMPORT, 0);
	}
	public INDEX(): TerminalNode {
		return this.getToken(SparkSqlParser.INDEX, 0);
	}
	public INDEXES(): TerminalNode {
		return this.getToken(SparkSqlParser.INDEXES, 0);
	}
	public INPATH(): TerminalNode {
		return this.getToken(SparkSqlParser.INPATH, 0);
	}
	public INPUTFORMAT(): TerminalNode {
		return this.getToken(SparkSqlParser.INPUTFORMAT, 0);
	}
	public INSERT(): TerminalNode {
		return this.getToken(SparkSqlParser.INSERT, 0);
	}
	public INTERVAL(): TerminalNode {
		return this.getToken(SparkSqlParser.INTERVAL, 0);
	}
	public ITEMS(): TerminalNode {
		return this.getToken(SparkSqlParser.ITEMS, 0);
	}
	public KEYS(): TerminalNode {
		return this.getToken(SparkSqlParser.KEYS, 0);
	}
	public LAST(): TerminalNode {
		return this.getToken(SparkSqlParser.LAST, 0);
	}
	public LATERAL(): TerminalNode {
		return this.getToken(SparkSqlParser.LATERAL, 0);
	}
	public LAZY(): TerminalNode {
		return this.getToken(SparkSqlParser.LAZY, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(SparkSqlParser.LIKE, 0);
	}
	public LIMIT(): TerminalNode {
		return this.getToken(SparkSqlParser.LIMIT, 0);
	}
	public LINES(): TerminalNode {
		return this.getToken(SparkSqlParser.LINES, 0);
	}
	public LIST(): TerminalNode {
		return this.getToken(SparkSqlParser.LIST, 0);
	}
	public LOAD(): TerminalNode {
		return this.getToken(SparkSqlParser.LOAD, 0);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(SparkSqlParser.LOCAL, 0);
	}
	public LOCATION(): TerminalNode {
		return this.getToken(SparkSqlParser.LOCATION, 0);
	}
	public LOCK(): TerminalNode {
		return this.getToken(SparkSqlParser.LOCK, 0);
	}
	public LOCKS(): TerminalNode {
		return this.getToken(SparkSqlParser.LOCKS, 0);
	}
	public LOGICAL(): TerminalNode {
		return this.getToken(SparkSqlParser.LOGICAL, 0);
	}
	public MACRO(): TerminalNode {
		return this.getToken(SparkSqlParser.MACRO, 0);
	}
	public MAP(): TerminalNode {
		return this.getToken(SparkSqlParser.MAP, 0);
	}
	public MATCHED(): TerminalNode {
		return this.getToken(SparkSqlParser.MATCHED, 0);
	}
	public MERGE(): TerminalNode {
		return this.getToken(SparkSqlParser.MERGE, 0);
	}
	public MSCK(): TerminalNode {
		return this.getToken(SparkSqlParser.MSCK, 0);
	}
	public NAMESPACE(): TerminalNode {
		return this.getToken(SparkSqlParser.NAMESPACE, 0);
	}
	public NAMESPACES(): TerminalNode {
		return this.getToken(SparkSqlParser.NAMESPACES, 0);
	}
	public NO(): TerminalNode {
		return this.getToken(SparkSqlParser.NO, 0);
	}
	public NULLS(): TerminalNode {
		return this.getToken(SparkSqlParser.NULLS, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(SparkSqlParser.OF, 0);
	}
	public OPTION(): TerminalNode {
		return this.getToken(SparkSqlParser.OPTION, 0);
	}
	public OPTIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.OPTIONS, 0);
	}
	public OUT(): TerminalNode {
		return this.getToken(SparkSqlParser.OUT, 0);
	}
	public OUTPUTFORMAT(): TerminalNode {
		return this.getToken(SparkSqlParser.OUTPUTFORMAT, 0);
	}
	public OVER(): TerminalNode {
		return this.getToken(SparkSqlParser.OVER, 0);
	}
	public OVERLAY(): TerminalNode {
		return this.getToken(SparkSqlParser.OVERLAY, 0);
	}
	public OVERWRITE(): TerminalNode {
		return this.getToken(SparkSqlParser.OVERWRITE, 0);
	}
	public PARTITION(): TerminalNode {
		return this.getToken(SparkSqlParser.PARTITION, 0);
	}
	public PARTITIONED(): TerminalNode {
		return this.getToken(SparkSqlParser.PARTITIONED, 0);
	}
	public PARTITIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.PARTITIONS, 0);
	}
	public PERCENTLIT(): TerminalNode {
		return this.getToken(SparkSqlParser.PERCENTLIT, 0);
	}
	public PIVOT(): TerminalNode {
		return this.getToken(SparkSqlParser.PIVOT, 0);
	}
	public PLACING(): TerminalNode {
		return this.getToken(SparkSqlParser.PLACING, 0);
	}
	public POSITION(): TerminalNode {
		return this.getToken(SparkSqlParser.POSITION, 0);
	}
	public PRECEDING(): TerminalNode {
		return this.getToken(SparkSqlParser.PRECEDING, 0);
	}
	public PRINCIPALS(): TerminalNode {
		return this.getToken(SparkSqlParser.PRINCIPALS, 0);
	}
	public PROPERTIES(): TerminalNode {
		return this.getToken(SparkSqlParser.PROPERTIES, 0);
	}
	public PURGE(): TerminalNode {
		return this.getToken(SparkSqlParser.PURGE, 0);
	}
	public QUERY(): TerminalNode {
		return this.getToken(SparkSqlParser.QUERY, 0);
	}
	public RANGE(): TerminalNode {
		return this.getToken(SparkSqlParser.RANGE, 0);
	}
	public RECORDREADER(): TerminalNode {
		return this.getToken(SparkSqlParser.RECORDREADER, 0);
	}
	public RECORDWRITER(): TerminalNode {
		return this.getToken(SparkSqlParser.RECORDWRITER, 0);
	}
	public RECOVER(): TerminalNode {
		return this.getToken(SparkSqlParser.RECOVER, 0);
	}
	public REDUCE(): TerminalNode {
		return this.getToken(SparkSqlParser.REDUCE, 0);
	}
	public REFRESH(): TerminalNode {
		return this.getToken(SparkSqlParser.REFRESH, 0);
	}
	public RENAME(): TerminalNode {
		return this.getToken(SparkSqlParser.RENAME, 0);
	}
	public REPAIR(): TerminalNode {
		return this.getToken(SparkSqlParser.REPAIR, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(SparkSqlParser.REPLACE, 0);
	}
	public RESET(): TerminalNode {
		return this.getToken(SparkSqlParser.RESET, 0);
	}
	public RESTRICT(): TerminalNode {
		return this.getToken(SparkSqlParser.RESTRICT, 0);
	}
	public REVOKE(): TerminalNode {
		return this.getToken(SparkSqlParser.REVOKE, 0);
	}
	public RLIKE(): TerminalNode {
		return this.getToken(SparkSqlParser.RLIKE, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(SparkSqlParser.ROLE, 0);
	}
	public ROLES(): TerminalNode {
		return this.getToken(SparkSqlParser.ROLES, 0);
	}
	public ROLLBACK(): TerminalNode {
		return this.getToken(SparkSqlParser.ROLLBACK, 0);
	}
	public ROLLUP(): TerminalNode {
		return this.getToken(SparkSqlParser.ROLLUP, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(SparkSqlParser.ROW, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(SparkSqlParser.ROWS, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(SparkSqlParser.SCHEMA, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(SparkSqlParser.SEMI, 0);
	}
	public SEPARATED(): TerminalNode {
		return this.getToken(SparkSqlParser.SEPARATED, 0);
	}
	public SERDE(): TerminalNode {
		return this.getToken(SparkSqlParser.SERDE, 0);
	}
	public SERDEPROPERTIES(): TerminalNode {
		return this.getToken(SparkSqlParser.SERDEPROPERTIES, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(SparkSqlParser.SET, 0);
	}
	public SETMINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.SETMINUS, 0);
	}
	public SETS(): TerminalNode {
		return this.getToken(SparkSqlParser.SETS, 0);
	}
	public SHOW(): TerminalNode {
		return this.getToken(SparkSqlParser.SHOW, 0);
	}
	public SKEWED(): TerminalNode {
		return this.getToken(SparkSqlParser.SKEWED, 0);
	}
	public SORT(): TerminalNode {
		return this.getToken(SparkSqlParser.SORT, 0);
	}
	public SORTED(): TerminalNode {
		return this.getToken(SparkSqlParser.SORTED, 0);
	}
	public START(): TerminalNode {
		return this.getToken(SparkSqlParser.START, 0);
	}
	public STATISTICS(): TerminalNode {
		return this.getToken(SparkSqlParser.STATISTICS, 0);
	}
	public STORED(): TerminalNode {
		return this.getToken(SparkSqlParser.STORED, 0);
	}
	public STRATIFY(): TerminalNode {
		return this.getToken(SparkSqlParser.STRATIFY, 0);
	}
	public STRUCT(): TerminalNode {
		return this.getToken(SparkSqlParser.STRUCT, 0);
	}
	public SUBSTR(): TerminalNode {
		return this.getToken(SparkSqlParser.SUBSTR, 0);
	}
	public SUBSTRING(): TerminalNode {
		return this.getToken(SparkSqlParser.SUBSTRING, 0);
	}
	public TABLES(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLES, 0);
	}
	public TABLESAMPLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLESAMPLE, 0);
	}
	public TBLPROPERTIES(): TerminalNode {
		return this.getToken(SparkSqlParser.TBLPROPERTIES, 0);
	}
	public TEMPORARY(): TerminalNode {
		return this.getToken(SparkSqlParser.TEMPORARY, 0);
	}
	public TERMINATED(): TerminalNode {
		return this.getToken(SparkSqlParser.TERMINATED, 0);
	}
	public TOUCH(): TerminalNode {
		return this.getToken(SparkSqlParser.TOUCH, 0);
	}
	public TRANSACTION(): TerminalNode {
		return this.getToken(SparkSqlParser.TRANSACTION, 0);
	}
	public TRANSACTIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.TRANSACTIONS, 0);
	}
	public TRANSFORM(): TerminalNode {
		return this.getToken(SparkSqlParser.TRANSFORM, 0);
	}
	public TRIM(): TerminalNode {
		return this.getToken(SparkSqlParser.TRIM, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(SparkSqlParser.TRUE, 0);
	}
	public TRUNCATE(): TerminalNode {
		return this.getToken(SparkSqlParser.TRUNCATE, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(SparkSqlParser.TYPE, 0);
	}
	public UNARCHIVE(): TerminalNode {
		return this.getToken(SparkSqlParser.UNARCHIVE, 0);
	}
	public UNBOUNDED(): TerminalNode {
		return this.getToken(SparkSqlParser.UNBOUNDED, 0);
	}
	public UNCACHE(): TerminalNode {
		return this.getToken(SparkSqlParser.UNCACHE, 0);
	}
	public UNLOCK(): TerminalNode {
		return this.getToken(SparkSqlParser.UNLOCK, 0);
	}
	public UNSET(): TerminalNode {
		return this.getToken(SparkSqlParser.UNSET, 0);
	}
	public UPDATE(): TerminalNode {
		return this.getToken(SparkSqlParser.UPDATE, 0);
	}
	public USE(): TerminalNode {
		return this.getToken(SparkSqlParser.USE, 0);
	}
	public VALUES(): TerminalNode {
		return this.getToken(SparkSqlParser.VALUES, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(SparkSqlParser.VIEW, 0);
	}
	public VIEWS(): TerminalNode {
		return this.getToken(SparkSqlParser.VIEWS, 0);
	}
	public WINDOW(): TerminalNode {
		return this.getToken(SparkSqlParser.WINDOW, 0);
	}
	public ZONE(): TerminalNode {
		return this.getToken(SparkSqlParser.ZONE, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_ansiNonReserved;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterAnsiNonReserved) {
	 		listener.enterAnsiNonReserved(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitAnsiNonReserved) {
	 		listener.exitAnsiNonReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitAnsiNonReserved) {
			return visitor.visitAnsiNonReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrictNonReservedContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ANTI(): TerminalNode {
		return this.getToken(SparkSqlParser.ANTI, 0);
	}
	public CROSS(): TerminalNode {
		return this.getToken(SparkSqlParser.CROSS, 0);
	}
	public EXCEPT(): TerminalNode {
		return this.getToken(SparkSqlParser.EXCEPT, 0);
	}
	public FULL(): TerminalNode {
		return this.getToken(SparkSqlParser.FULL, 0);
	}
	public INNER(): TerminalNode {
		return this.getToken(SparkSqlParser.INNER, 0);
	}
	public INTERSECT(): TerminalNode {
		return this.getToken(SparkSqlParser.INTERSECT, 0);
	}
	public JOIN(): TerminalNode {
		return this.getToken(SparkSqlParser.JOIN, 0);
	}
	public LEFT(): TerminalNode {
		return this.getToken(SparkSqlParser.LEFT, 0);
	}
	public NATURAL(): TerminalNode {
		return this.getToken(SparkSqlParser.NATURAL, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(SparkSqlParser.ON, 0);
	}
	public RIGHT(): TerminalNode {
		return this.getToken(SparkSqlParser.RIGHT, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(SparkSqlParser.SEMI, 0);
	}
	public SETMINUS(): TerminalNode {
		return this.getToken(SparkSqlParser.SETMINUS, 0);
	}
	public UNION(): TerminalNode {
		return this.getToken(SparkSqlParser.UNION, 0);
	}
	public USING(): TerminalNode {
		return this.getToken(SparkSqlParser.USING, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_strictNonReserved;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterStrictNonReserved) {
	 		listener.enterStrictNonReserved(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitStrictNonReserved) {
	 		listener.exitStrictNonReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitStrictNonReserved) {
			return visitor.visitStrictNonReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonReservedContext extends ParserRuleContext {
	constructor(parser?: SparkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ADD(): TerminalNode {
		return this.getToken(SparkSqlParser.ADD, 0);
	}
	public AFTER(): TerminalNode {
		return this.getToken(SparkSqlParser.AFTER, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(SparkSqlParser.ALL, 0);
	}
	public ALTER(): TerminalNode {
		return this.getToken(SparkSqlParser.ALTER, 0);
	}
	public ANALYZE(): TerminalNode {
		return this.getToken(SparkSqlParser.ANALYZE, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(SparkSqlParser.AND, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(SparkSqlParser.ANY, 0);
	}
	public ARCHIVE(): TerminalNode {
		return this.getToken(SparkSqlParser.ARCHIVE, 0);
	}
	public ARRAY(): TerminalNode {
		return this.getToken(SparkSqlParser.ARRAY, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(SparkSqlParser.AS, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(SparkSqlParser.ASC, 0);
	}
	public AT(): TerminalNode {
		return this.getToken(SparkSqlParser.AT, 0);
	}
	public AUTHORIZATION(): TerminalNode {
		return this.getToken(SparkSqlParser.AUTHORIZATION, 0);
	}
	public BETWEEN(): TerminalNode {
		return this.getToken(SparkSqlParser.BETWEEN, 0);
	}
	public BOTH(): TerminalNode {
		return this.getToken(SparkSqlParser.BOTH, 0);
	}
	public BUCKET(): TerminalNode {
		return this.getToken(SparkSqlParser.BUCKET, 0);
	}
	public BUCKETS(): TerminalNode {
		return this.getToken(SparkSqlParser.BUCKETS, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(SparkSqlParser.BY, 0);
	}
	public CACHE(): TerminalNode {
		return this.getToken(SparkSqlParser.CACHE, 0);
	}
	public CASCADE(): TerminalNode {
		return this.getToken(SparkSqlParser.CASCADE, 0);
	}
	public CASE(): TerminalNode {
		return this.getToken(SparkSqlParser.CASE, 0);
	}
	public CAST(): TerminalNode {
		return this.getToken(SparkSqlParser.CAST, 0);
	}
	public CHANGE(): TerminalNode {
		return this.getToken(SparkSqlParser.CHANGE, 0);
	}
	public CHECK(): TerminalNode {
		return this.getToken(SparkSqlParser.CHECK, 0);
	}
	public CLEAR(): TerminalNode {
		return this.getToken(SparkSqlParser.CLEAR, 0);
	}
	public CLUSTER(): TerminalNode {
		return this.getToken(SparkSqlParser.CLUSTER, 0);
	}
	public CLUSTERED(): TerminalNode {
		return this.getToken(SparkSqlParser.CLUSTERED, 0);
	}
	public CODEGEN(): TerminalNode {
		return this.getToken(SparkSqlParser.CODEGEN, 0);
	}
	public COLLATE(): TerminalNode {
		return this.getToken(SparkSqlParser.COLLATE, 0);
	}
	public COLLECTION(): TerminalNode {
		return this.getToken(SparkSqlParser.COLLECTION, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(SparkSqlParser.COLUMN, 0);
	}
	public COLUMNS(): TerminalNode {
		return this.getToken(SparkSqlParser.COLUMNS, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(SparkSqlParser.COMMENT, 0);
	}
	public COMMIT(): TerminalNode {
		return this.getToken(SparkSqlParser.COMMIT, 0);
	}
	public COMPACT(): TerminalNode {
		return this.getToken(SparkSqlParser.COMPACT, 0);
	}
	public COMPACTIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.COMPACTIONS, 0);
	}
	public COMPUTE(): TerminalNode {
		return this.getToken(SparkSqlParser.COMPUTE, 0);
	}
	public CONCATENATE(): TerminalNode {
		return this.getToken(SparkSqlParser.CONCATENATE, 0);
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(SparkSqlParser.CONSTRAINT, 0);
	}
	public COST(): TerminalNode {
		return this.getToken(SparkSqlParser.COST, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(SparkSqlParser.CREATE, 0);
	}
	public CUBE(): TerminalNode {
		return this.getToken(SparkSqlParser.CUBE, 0);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(SparkSqlParser.CURRENT, 0);
	}
	public CURRENT_DATE(): TerminalNode {
		return this.getToken(SparkSqlParser.CURRENT_DATE, 0);
	}
	public CURRENT_TIME(): TerminalNode {
		return this.getToken(SparkSqlParser.CURRENT_TIME, 0);
	}
	public CURRENT_TIMESTAMP(): TerminalNode {
		return this.getToken(SparkSqlParser.CURRENT_TIMESTAMP, 0);
	}
	public CURRENT_USER(): TerminalNode {
		return this.getToken(SparkSqlParser.CURRENT_USER, 0);
	}
	public DATA(): TerminalNode {
		return this.getToken(SparkSqlParser.DATA, 0);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(SparkSqlParser.DATABASE, 0);
	}
	public DATABASES(): TerminalNode {
		return this.getToken(SparkSqlParser.DATABASES, 0);
	}
	public DBPROPERTIES(): TerminalNode {
		return this.getToken(SparkSqlParser.DBPROPERTIES, 0);
	}
	public DEFINED(): TerminalNode {
		return this.getToken(SparkSqlParser.DEFINED, 0);
	}
	public DELETE(): TerminalNode {
		return this.getToken(SparkSqlParser.DELETE, 0);
	}
	public DELIMITED(): TerminalNode {
		return this.getToken(SparkSqlParser.DELIMITED, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(SparkSqlParser.DESC, 0);
	}
	public DESCRIBE(): TerminalNode {
		return this.getToken(SparkSqlParser.DESCRIBE, 0);
	}
	public DFS(): TerminalNode {
		return this.getToken(SparkSqlParser.DFS, 0);
	}
	public DIRECTORIES(): TerminalNode {
		return this.getToken(SparkSqlParser.DIRECTORIES, 0);
	}
	public DIRECTORY(): TerminalNode {
		return this.getToken(SparkSqlParser.DIRECTORY, 0);
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(SparkSqlParser.DISTINCT, 0);
	}
	public DISTRIBUTE(): TerminalNode {
		return this.getToken(SparkSqlParser.DISTRIBUTE, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(SparkSqlParser.DIV, 0);
	}
	public DROP(): TerminalNode {
		return this.getToken(SparkSqlParser.DROP, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(SparkSqlParser.ELSE, 0);
	}
	public END(): TerminalNode {
		return this.getToken(SparkSqlParser.END, 0);
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(SparkSqlParser.ESCAPE, 0);
	}
	public ESCAPED(): TerminalNode {
		return this.getToken(SparkSqlParser.ESCAPED, 0);
	}
	public EXCHANGE(): TerminalNode {
		return this.getToken(SparkSqlParser.EXCHANGE, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(SparkSqlParser.EXISTS, 0);
	}
	public EXPLAIN(): TerminalNode {
		return this.getToken(SparkSqlParser.EXPLAIN, 0);
	}
	public EXPORT(): TerminalNode {
		return this.getToken(SparkSqlParser.EXPORT, 0);
	}
	public EXTENDED(): TerminalNode {
		return this.getToken(SparkSqlParser.EXTENDED, 0);
	}
	public EXTERNAL(): TerminalNode {
		return this.getToken(SparkSqlParser.EXTERNAL, 0);
	}
	public EXTRACT(): TerminalNode {
		return this.getToken(SparkSqlParser.EXTRACT, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(SparkSqlParser.FALSE, 0);
	}
	public FETCH(): TerminalNode {
		return this.getToken(SparkSqlParser.FETCH, 0);
	}
	public FILTER(): TerminalNode {
		return this.getToken(SparkSqlParser.FILTER, 0);
	}
	public FIELDS(): TerminalNode {
		return this.getToken(SparkSqlParser.FIELDS, 0);
	}
	public FILEFORMAT(): TerminalNode {
		return this.getToken(SparkSqlParser.FILEFORMAT, 0);
	}
	public FIRST(): TerminalNode {
		return this.getToken(SparkSqlParser.FIRST, 0);
	}
	public FOLLOWING(): TerminalNode {
		return this.getToken(SparkSqlParser.FOLLOWING, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(SparkSqlParser.FOR, 0);
	}
	public FOREIGN(): TerminalNode {
		return this.getToken(SparkSqlParser.FOREIGN, 0);
	}
	public FORMAT(): TerminalNode {
		return this.getToken(SparkSqlParser.FORMAT, 0);
	}
	public FORMATTED(): TerminalNode {
		return this.getToken(SparkSqlParser.FORMATTED, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(SparkSqlParser.FROM, 0);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(SparkSqlParser.FUNCTION, 0);
	}
	public FUNCTIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.FUNCTIONS, 0);
	}
	public GLOBAL(): TerminalNode {
		return this.getToken(SparkSqlParser.GLOBAL, 0);
	}
	public GRANT(): TerminalNode {
		return this.getToken(SparkSqlParser.GRANT, 0);
	}
	public GROUP(): TerminalNode {
		return this.getToken(SparkSqlParser.GROUP, 0);
	}
	public GROUPING(): TerminalNode {
		return this.getToken(SparkSqlParser.GROUPING, 0);
	}
	public HAVING(): TerminalNode {
		return this.getToken(SparkSqlParser.HAVING, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(SparkSqlParser.IF, 0);
	}
	public IGNORE(): TerminalNode {
		return this.getToken(SparkSqlParser.IGNORE, 0);
	}
	public IMPORT(): TerminalNode {
		return this.getToken(SparkSqlParser.IMPORT, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(SparkSqlParser.IN, 0);
	}
	public INDEX(): TerminalNode {
		return this.getToken(SparkSqlParser.INDEX, 0);
	}
	public INDEXES(): TerminalNode {
		return this.getToken(SparkSqlParser.INDEXES, 0);
	}
	public INPATH(): TerminalNode {
		return this.getToken(SparkSqlParser.INPATH, 0);
	}
	public INPUTFORMAT(): TerminalNode {
		return this.getToken(SparkSqlParser.INPUTFORMAT, 0);
	}
	public INSERT(): TerminalNode {
		return this.getToken(SparkSqlParser.INSERT, 0);
	}
	public INTERVAL(): TerminalNode {
		return this.getToken(SparkSqlParser.INTERVAL, 0);
	}
	public INTO(): TerminalNode {
		return this.getToken(SparkSqlParser.INTO, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(SparkSqlParser.IS, 0);
	}
	public ITEMS(): TerminalNode {
		return this.getToken(SparkSqlParser.ITEMS, 0);
	}
	public KEYS(): TerminalNode {
		return this.getToken(SparkSqlParser.KEYS, 0);
	}
	public LAST(): TerminalNode {
		return this.getToken(SparkSqlParser.LAST, 0);
	}
	public LATERAL(): TerminalNode {
		return this.getToken(SparkSqlParser.LATERAL, 0);
	}
	public LAZY(): TerminalNode {
		return this.getToken(SparkSqlParser.LAZY, 0);
	}
	public LEADING(): TerminalNode {
		return this.getToken(SparkSqlParser.LEADING, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(SparkSqlParser.LIKE, 0);
	}
	public LIMIT(): TerminalNode {
		return this.getToken(SparkSqlParser.LIMIT, 0);
	}
	public LINES(): TerminalNode {
		return this.getToken(SparkSqlParser.LINES, 0);
	}
	public LIST(): TerminalNode {
		return this.getToken(SparkSqlParser.LIST, 0);
	}
	public LOAD(): TerminalNode {
		return this.getToken(SparkSqlParser.LOAD, 0);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(SparkSqlParser.LOCAL, 0);
	}
	public LOCATION(): TerminalNode {
		return this.getToken(SparkSqlParser.LOCATION, 0);
	}
	public LOCK(): TerminalNode {
		return this.getToken(SparkSqlParser.LOCK, 0);
	}
	public LOCKS(): TerminalNode {
		return this.getToken(SparkSqlParser.LOCKS, 0);
	}
	public LOGICAL(): TerminalNode {
		return this.getToken(SparkSqlParser.LOGICAL, 0);
	}
	public MACRO(): TerminalNode {
		return this.getToken(SparkSqlParser.MACRO, 0);
	}
	public MAP(): TerminalNode {
		return this.getToken(SparkSqlParser.MAP, 0);
	}
	public MATCHED(): TerminalNode {
		return this.getToken(SparkSqlParser.MATCHED, 0);
	}
	public MERGE(): TerminalNode {
		return this.getToken(SparkSqlParser.MERGE, 0);
	}
	public MSCK(): TerminalNode {
		return this.getToken(SparkSqlParser.MSCK, 0);
	}
	public NAMESPACE(): TerminalNode {
		return this.getToken(SparkSqlParser.NAMESPACE, 0);
	}
	public NAMESPACES(): TerminalNode {
		return this.getToken(SparkSqlParser.NAMESPACES, 0);
	}
	public NO(): TerminalNode {
		return this.getToken(SparkSqlParser.NO, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(SparkSqlParser.NOT, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(SparkSqlParser.NULL, 0);
	}
	public NULLS(): TerminalNode {
		return this.getToken(SparkSqlParser.NULLS, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(SparkSqlParser.OF, 0);
	}
	public ONLY(): TerminalNode {
		return this.getToken(SparkSqlParser.ONLY, 0);
	}
	public OPTION(): TerminalNode {
		return this.getToken(SparkSqlParser.OPTION, 0);
	}
	public OPTIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.OPTIONS, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(SparkSqlParser.OR, 0);
	}
	public ORDER(): TerminalNode {
		return this.getToken(SparkSqlParser.ORDER, 0);
	}
	public OUT(): TerminalNode {
		return this.getToken(SparkSqlParser.OUT, 0);
	}
	public OUTER(): TerminalNode {
		return this.getToken(SparkSqlParser.OUTER, 0);
	}
	public OUTPUTFORMAT(): TerminalNode {
		return this.getToken(SparkSqlParser.OUTPUTFORMAT, 0);
	}
	public OVER(): TerminalNode {
		return this.getToken(SparkSqlParser.OVER, 0);
	}
	public OVERLAPS(): TerminalNode {
		return this.getToken(SparkSqlParser.OVERLAPS, 0);
	}
	public OVERLAY(): TerminalNode {
		return this.getToken(SparkSqlParser.OVERLAY, 0);
	}
	public OVERWRITE(): TerminalNode {
		return this.getToken(SparkSqlParser.OVERWRITE, 0);
	}
	public PARTITION(): TerminalNode {
		return this.getToken(SparkSqlParser.PARTITION, 0);
	}
	public PARTITIONED(): TerminalNode {
		return this.getToken(SparkSqlParser.PARTITIONED, 0);
	}
	public PARTITIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.PARTITIONS, 0);
	}
	public PERCENTLIT(): TerminalNode {
		return this.getToken(SparkSqlParser.PERCENTLIT, 0);
	}
	public PIVOT(): TerminalNode {
		return this.getToken(SparkSqlParser.PIVOT, 0);
	}
	public PLACING(): TerminalNode {
		return this.getToken(SparkSqlParser.PLACING, 0);
	}
	public POSITION(): TerminalNode {
		return this.getToken(SparkSqlParser.POSITION, 0);
	}
	public PRECEDING(): TerminalNode {
		return this.getToken(SparkSqlParser.PRECEDING, 0);
	}
	public PRIMARY(): TerminalNode {
		return this.getToken(SparkSqlParser.PRIMARY, 0);
	}
	public PRINCIPALS(): TerminalNode {
		return this.getToken(SparkSqlParser.PRINCIPALS, 0);
	}
	public PROPERTIES(): TerminalNode {
		return this.getToken(SparkSqlParser.PROPERTIES, 0);
	}
	public PURGE(): TerminalNode {
		return this.getToken(SparkSqlParser.PURGE, 0);
	}
	public QUERY(): TerminalNode {
		return this.getToken(SparkSqlParser.QUERY, 0);
	}
	public RANGE(): TerminalNode {
		return this.getToken(SparkSqlParser.RANGE, 0);
	}
	public RECORDREADER(): TerminalNode {
		return this.getToken(SparkSqlParser.RECORDREADER, 0);
	}
	public RECORDWRITER(): TerminalNode {
		return this.getToken(SparkSqlParser.RECORDWRITER, 0);
	}
	public RECOVER(): TerminalNode {
		return this.getToken(SparkSqlParser.RECOVER, 0);
	}
	public REDUCE(): TerminalNode {
		return this.getToken(SparkSqlParser.REDUCE, 0);
	}
	public REFERENCES(): TerminalNode {
		return this.getToken(SparkSqlParser.REFERENCES, 0);
	}
	public REFRESH(): TerminalNode {
		return this.getToken(SparkSqlParser.REFRESH, 0);
	}
	public RENAME(): TerminalNode {
		return this.getToken(SparkSqlParser.RENAME, 0);
	}
	public REPAIR(): TerminalNode {
		return this.getToken(SparkSqlParser.REPAIR, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(SparkSqlParser.REPLACE, 0);
	}
	public RESET(): TerminalNode {
		return this.getToken(SparkSqlParser.RESET, 0);
	}
	public RESTRICT(): TerminalNode {
		return this.getToken(SparkSqlParser.RESTRICT, 0);
	}
	public REVOKE(): TerminalNode {
		return this.getToken(SparkSqlParser.REVOKE, 0);
	}
	public RLIKE(): TerminalNode {
		return this.getToken(SparkSqlParser.RLIKE, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(SparkSqlParser.ROLE, 0);
	}
	public ROLES(): TerminalNode {
		return this.getToken(SparkSqlParser.ROLES, 0);
	}
	public ROLLBACK(): TerminalNode {
		return this.getToken(SparkSqlParser.ROLLBACK, 0);
	}
	public ROLLUP(): TerminalNode {
		return this.getToken(SparkSqlParser.ROLLUP, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(SparkSqlParser.ROW, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(SparkSqlParser.ROWS, 0);
	}
	public SCHEMA(): TerminalNode {
		return this.getToken(SparkSqlParser.SCHEMA, 0);
	}
	public SELECT(): TerminalNode {
		return this.getToken(SparkSqlParser.SELECT, 0);
	}
	public SEPARATED(): TerminalNode {
		return this.getToken(SparkSqlParser.SEPARATED, 0);
	}
	public SERDE(): TerminalNode {
		return this.getToken(SparkSqlParser.SERDE, 0);
	}
	public SERDEPROPERTIES(): TerminalNode {
		return this.getToken(SparkSqlParser.SERDEPROPERTIES, 0);
	}
	public SESSION_USER(): TerminalNode {
		return this.getToken(SparkSqlParser.SESSION_USER, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(SparkSqlParser.SET, 0);
	}
	public SETS(): TerminalNode {
		return this.getToken(SparkSqlParser.SETS, 0);
	}
	public SHOW(): TerminalNode {
		return this.getToken(SparkSqlParser.SHOW, 0);
	}
	public SKEWED(): TerminalNode {
		return this.getToken(SparkSqlParser.SKEWED, 0);
	}
	public SOME(): TerminalNode {
		return this.getToken(SparkSqlParser.SOME, 0);
	}
	public SORT(): TerminalNode {
		return this.getToken(SparkSqlParser.SORT, 0);
	}
	public SORTED(): TerminalNode {
		return this.getToken(SparkSqlParser.SORTED, 0);
	}
	public START(): TerminalNode {
		return this.getToken(SparkSqlParser.START, 0);
	}
	public STATISTICS(): TerminalNode {
		return this.getToken(SparkSqlParser.STATISTICS, 0);
	}
	public STORED(): TerminalNode {
		return this.getToken(SparkSqlParser.STORED, 0);
	}
	public STRATIFY(): TerminalNode {
		return this.getToken(SparkSqlParser.STRATIFY, 0);
	}
	public STRUCT(): TerminalNode {
		return this.getToken(SparkSqlParser.STRUCT, 0);
	}
	public SUBSTR(): TerminalNode {
		return this.getToken(SparkSqlParser.SUBSTR, 0);
	}
	public SUBSTRING(): TerminalNode {
		return this.getToken(SparkSqlParser.SUBSTRING, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLE, 0);
	}
	public TABLES(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLES, 0);
	}
	public TABLESAMPLE(): TerminalNode {
		return this.getToken(SparkSqlParser.TABLESAMPLE, 0);
	}
	public TBLPROPERTIES(): TerminalNode {
		return this.getToken(SparkSqlParser.TBLPROPERTIES, 0);
	}
	public TEMPORARY(): TerminalNode {
		return this.getToken(SparkSqlParser.TEMPORARY, 0);
	}
	public TERMINATED(): TerminalNode {
		return this.getToken(SparkSqlParser.TERMINATED, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(SparkSqlParser.THEN, 0);
	}
	public TIME(): TerminalNode {
		return this.getToken(SparkSqlParser.TIME, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(SparkSqlParser.TO, 0);
	}
	public TOUCH(): TerminalNode {
		return this.getToken(SparkSqlParser.TOUCH, 0);
	}
	public TRAILING(): TerminalNode {
		return this.getToken(SparkSqlParser.TRAILING, 0);
	}
	public TRANSACTION(): TerminalNode {
		return this.getToken(SparkSqlParser.TRANSACTION, 0);
	}
	public TRANSACTIONS(): TerminalNode {
		return this.getToken(SparkSqlParser.TRANSACTIONS, 0);
	}
	public TRANSFORM(): TerminalNode {
		return this.getToken(SparkSqlParser.TRANSFORM, 0);
	}
	public TRIM(): TerminalNode {
		return this.getToken(SparkSqlParser.TRIM, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(SparkSqlParser.TRUE, 0);
	}
	public TRUNCATE(): TerminalNode {
		return this.getToken(SparkSqlParser.TRUNCATE, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(SparkSqlParser.TYPE, 0);
	}
	public UNARCHIVE(): TerminalNode {
		return this.getToken(SparkSqlParser.UNARCHIVE, 0);
	}
	public UNBOUNDED(): TerminalNode {
		return this.getToken(SparkSqlParser.UNBOUNDED, 0);
	}
	public UNCACHE(): TerminalNode {
		return this.getToken(SparkSqlParser.UNCACHE, 0);
	}
	public UNIQUE(): TerminalNode {
		return this.getToken(SparkSqlParser.UNIQUE, 0);
	}
	public UNKNOWN(): TerminalNode {
		return this.getToken(SparkSqlParser.UNKNOWN, 0);
	}
	public UNLOCK(): TerminalNode {
		return this.getToken(SparkSqlParser.UNLOCK, 0);
	}
	public UNSET(): TerminalNode {
		return this.getToken(SparkSqlParser.UNSET, 0);
	}
	public UPDATE(): TerminalNode {
		return this.getToken(SparkSqlParser.UPDATE, 0);
	}
	public USE(): TerminalNode {
		return this.getToken(SparkSqlParser.USE, 0);
	}
	public USER(): TerminalNode {
		return this.getToken(SparkSqlParser.USER, 0);
	}
	public VALUES(): TerminalNode {
		return this.getToken(SparkSqlParser.VALUES, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(SparkSqlParser.VIEW, 0);
	}
	public VIEWS(): TerminalNode {
		return this.getToken(SparkSqlParser.VIEWS, 0);
	}
	public WHEN(): TerminalNode {
		return this.getToken(SparkSqlParser.WHEN, 0);
	}
	public WHERE(): TerminalNode {
		return this.getToken(SparkSqlParser.WHERE, 0);
	}
	public WINDOW(): TerminalNode {
		return this.getToken(SparkSqlParser.WINDOW, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(SparkSqlParser.WITH, 0);
	}
	public ZONE(): TerminalNode {
		return this.getToken(SparkSqlParser.ZONE, 0);
	}
    public get ruleIndex(): number {
    	return SparkSqlParser.RULE_nonReserved;
	}
	public enterRule(listener: SparkSqlListener): void {
	    if(listener.enterNonReserved) {
	 		listener.enterNonReserved(this);
		}
	}
	public exitRule(listener: SparkSqlListener): void {
	    if(listener.exitNonReserved) {
	 		listener.exitNonReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SparkSqlVisitor<Result>): Result {
		if (visitor.visitNonReserved) {
			return visitor.visitNonReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
