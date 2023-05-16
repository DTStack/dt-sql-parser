// Generated from /Users/hayden/Desktop/dt-works/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.12.0
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
import FlinkSqlParserListener from "./FlinkSqlParserListener.js";
import FlinkSqlParserVisitor from "./FlinkSqlParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class FlinkSqlParser extends Parser {
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
	public static readonly KEY = 257;
	public static readonly PERIOD = 258;
	public static readonly SYSTEM_TIME = 259;
	public static readonly ENFORCED = 260;
	public static readonly METADATA = 261;
	public static readonly VIRTUAL = 262;
	public static readonly ZONE = 263;
	public static readonly TUMBLE = 264;
	public static readonly HOP = 265;
	public static readonly CUMULATE = 266;
	public static readonly DESCRIPTOR = 267;
	public static readonly TIMECOL = 268;
	public static readonly SIZE = 269;
	public static readonly OFFSET = 270;
	public static readonly STEP = 271;
	public static readonly SLIDE = 272;
	public static readonly SESSION = 273;
	public static readonly MATCH_RECOGNIZE = 274;
	public static readonly MEASURES = 275;
	public static readonly PATTERN = 276;
	public static readonly ONE = 277;
	public static readonly PER = 278;
	public static readonly KW_SKIP = 279;
	public static readonly PAST = 280;
	public static readonly DEFINE = 281;
	public static readonly STRING = 282;
	public static readonly ARRAY = 283;
	public static readonly MAP = 284;
	public static readonly CHAR = 285;
	public static readonly VARCHAR = 286;
	public static readonly BINARY = 287;
	public static readonly VARBINARY = 288;
	public static readonly BYTES = 289;
	public static readonly DECIMAL = 290;
	public static readonly DEC = 291;
	public static readonly NUMERIC = 292;
	public static readonly TINYINT = 293;
	public static readonly SMALLINT = 294;
	public static readonly INT = 295;
	public static readonly INTEGER = 296;
	public static readonly BIGINT = 297;
	public static readonly FLOAT = 298;
	public static readonly DOUBLE = 299;
	public static readonly DATE = 300;
	public static readonly TIME = 301;
	public static readonly TIMESTAMP = 302;
	public static readonly TIMESTAMP_LTZ = 303;
	public static readonly MULTISET = 304;
	public static readonly BOOLEAN = 305;
	public static readonly RAW = 306;
	public static readonly ROW = 307;
	public static readonly NULL = 308;
	public static readonly DATETIME = 309;
	public static readonly EQUAL_SYMBOL = 310;
	public static readonly GREATER_SYMBOL = 311;
	public static readonly LESS_SYMBOL = 312;
	public static readonly EXCLAMATION_SYMBOL = 313;
	public static readonly BIT_NOT_OP = 314;
	public static readonly BIT_OR_OP = 315;
	public static readonly BIT_AND_OP = 316;
	public static readonly BIT_XOR_OP = 317;
	public static readonly DOT = 318;
	public static readonly LS_BRACKET = 319;
	public static readonly RS_BRACKET = 320;
	public static readonly LR_BRACKET = 321;
	public static readonly RR_BRACKET = 322;
	public static readonly LB_BRACKET = 323;
	public static readonly RB_BRACKET = 324;
	public static readonly COMMA = 325;
	public static readonly SEMICOLON = 326;
	public static readonly AT_SIGN = 327;
	public static readonly SINGLE_QUOTE_SYMB = 328;
	public static readonly DOUBLE_QUOTE_SYMB = 329;
	public static readonly REVERSE_QUOTE_SYMB = 330;
	public static readonly COLON_SYMB = 331;
	public static readonly ASTERISK_SIGN = 332;
	public static readonly UNDERLINE_SIGN = 333;
	public static readonly HYPNEN_SIGN = 334;
	public static readonly ADD_SIGN = 335;
	public static readonly PENCENT_SIGN = 336;
	public static readonly DOUBLE_VERTICAL_SIGN = 337;
	public static readonly DOUBLE_HYPNEN_SIGN = 338;
	public static readonly SLASH_SIGN = 339;
	public static readonly QUESTION_MARK_SIGN = 340;
	public static readonly DOT_ID = 341;
	public static readonly STRING_LITERAL = 342;
	public static readonly DIG_LITERAL = 343;
	public static readonly REAL_LITERAL = 344;
	public static readonly BIT_STRING = 345;
	public static readonly ID_LITERAL = 346;
	public static readonly FILE_PATH = 347;
	public static readonly DOUBLE_ARROW = 348;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_sqlStatements = 2;
	public static readonly RULE_sqlStatement = 3;
	public static readonly RULE_emptyStatement = 4;
	public static readonly RULE_ddlStatement = 5;
	public static readonly RULE_dmlStatement = 6;
	public static readonly RULE_describeStatement = 7;
	public static readonly RULE_explainStatement = 8;
	public static readonly RULE_explainDetails = 9;
	public static readonly RULE_explainDetail = 10;
	public static readonly RULE_useStatement = 11;
	public static readonly RULE_useModuleStatement = 12;
	public static readonly RULE_showStatememt = 13;
	public static readonly RULE_loadStatement = 14;
	public static readonly RULE_unloadStatememt = 15;
	public static readonly RULE_setStatememt = 16;
	public static readonly RULE_resetStatememt = 17;
	public static readonly RULE_jarStatememt = 18;
	public static readonly RULE_dtAddStatement = 19;
	public static readonly RULE_createTable = 20;
	public static readonly RULE_simpleCreateTable = 21;
	public static readonly RULE_createTableAsSelect = 22;
	public static readonly RULE_columnOptionDefinition = 23;
	public static readonly RULE_physicalColumnDefinition = 24;
	public static readonly RULE_columnName = 25;
	public static readonly RULE_columnNameList = 26;
	public static readonly RULE_columnType = 27;
	public static readonly RULE_lengthOneDimension = 28;
	public static readonly RULE_lengthTwoOptionalDimension = 29;
	public static readonly RULE_lengthTwoStringDimension = 30;
	public static readonly RULE_lengthOneTypeDimension = 31;
	public static readonly RULE_mapTypeDimension = 32;
	public static readonly RULE_rowTypeDimension = 33;
	public static readonly RULE_columnConstraint = 34;
	public static readonly RULE_commentSpec = 35;
	public static readonly RULE_metadataColumnDefinition = 36;
	public static readonly RULE_metadataKey = 37;
	public static readonly RULE_computedColumnDefinition = 38;
	public static readonly RULE_computedColumnExpression = 39;
	public static readonly RULE_watermarkDefinition = 40;
	public static readonly RULE_tableConstraint = 41;
	public static readonly RULE_constraintName = 42;
	public static readonly RULE_selfDefinitionClause = 43;
	public static readonly RULE_partitionDefinition = 44;
	public static readonly RULE_transformList = 45;
	public static readonly RULE_transform = 46;
	public static readonly RULE_transformArgument = 47;
	public static readonly RULE_likeDefinition = 48;
	public static readonly RULE_sourceTable = 49;
	public static readonly RULE_likeOption = 50;
	public static readonly RULE_createCatalog = 51;
	public static readonly RULE_createDatabase = 52;
	public static readonly RULE_createView = 53;
	public static readonly RULE_createFunction = 54;
	public static readonly RULE_usingClause = 55;
	public static readonly RULE_jarFileName = 56;
	public static readonly RULE_alterTable = 57;
	public static readonly RULE_renameDefinition = 58;
	public static readonly RULE_setKeyValueDefinition = 59;
	public static readonly RULE_alertView = 60;
	public static readonly RULE_alterDatabase = 61;
	public static readonly RULE_alterFunction = 62;
	public static readonly RULE_dropCatalog = 63;
	public static readonly RULE_dropTable = 64;
	public static readonly RULE_dropDatabase = 65;
	public static readonly RULE_dropView = 66;
	public static readonly RULE_dropFunction = 67;
	public static readonly RULE_insertStatement = 68;
	public static readonly RULE_insertSimpleStatement = 69;
	public static readonly RULE_insertPartitionDefinition = 70;
	public static readonly RULE_valuesDefinition = 71;
	public static readonly RULE_valuesRowDefinition = 72;
	public static readonly RULE_insertMulStatement = 73;
	public static readonly RULE_queryStatement = 74;
	public static readonly RULE_valuesCaluse = 75;
	public static readonly RULE_withItem = 76;
	public static readonly RULE_withItemName = 77;
	public static readonly RULE_selectStatement = 78;
	public static readonly RULE_selectClause = 79;
	public static readonly RULE_projectItemDefinition = 80;
	public static readonly RULE_overWindowItem = 81;
	public static readonly RULE_fromClause = 82;
	public static readonly RULE_tableExpression = 83;
	public static readonly RULE_tableReference = 84;
	public static readonly RULE_tablePrimary = 85;
	public static readonly RULE_tablePath = 86;
	public static readonly RULE_systemTimePeriod = 87;
	public static readonly RULE_dateTimeExpression = 88;
	public static readonly RULE_inlineDataValueClause = 89;
	public static readonly RULE_windoTVFClause = 90;
	public static readonly RULE_windowTVFExression = 91;
	public static readonly RULE_windoTVFName = 92;
	public static readonly RULE_windowTVFParam = 93;
	public static readonly RULE_timeIntervalParamName = 94;
	public static readonly RULE_columnDescriptor = 95;
	public static readonly RULE_joinCondition = 96;
	public static readonly RULE_whereClause = 97;
	public static readonly RULE_groupByClause = 98;
	public static readonly RULE_groupItemDefinition = 99;
	public static readonly RULE_groupingSets = 100;
	public static readonly RULE_groupingSetsNotaionName = 101;
	public static readonly RULE_groupWindowFunction = 102;
	public static readonly RULE_groupWindowFunctionName = 103;
	public static readonly RULE_timeAttrColumn = 104;
	public static readonly RULE_havingClause = 105;
	public static readonly RULE_windowClause = 106;
	public static readonly RULE_namedWindow = 107;
	public static readonly RULE_windowSpec = 108;
	public static readonly RULE_matchRecognizeClause = 109;
	public static readonly RULE_orderByCaluse = 110;
	public static readonly RULE_orderItemDefition = 111;
	public static readonly RULE_limitClause = 112;
	public static readonly RULE_partitionByClause = 113;
	public static readonly RULE_quantifiers = 114;
	public static readonly RULE_measuresClause = 115;
	public static readonly RULE_patternDefination = 116;
	public static readonly RULE_patternVariable = 117;
	public static readonly RULE_outputMode = 118;
	public static readonly RULE_afterMatchStrategy = 119;
	public static readonly RULE_patternVariablesDefination = 120;
	public static readonly RULE_windowFrame = 121;
	public static readonly RULE_frameBound = 122;
	public static readonly RULE_withinClause = 123;
	public static readonly RULE_timeIntervalExpression = 124;
	public static readonly RULE_expression = 125;
	public static readonly RULE_booleanExpression = 126;
	public static readonly RULE_predicate = 127;
	public static readonly RULE_likePredicate = 128;
	public static readonly RULE_valueExpression = 129;
	public static readonly RULE_primaryExpression = 130;
	public static readonly RULE_functionName = 131;
	public static readonly RULE_dereferenceDefinition = 132;
	public static readonly RULE_correlationName = 133;
	public static readonly RULE_qualifiedName = 134;
	public static readonly RULE_interval = 135;
	public static readonly RULE_errorCapturingMultiUnitsInterval = 136;
	public static readonly RULE_multiUnitsInterval = 137;
	public static readonly RULE_errorCapturingUnitToUnitInterval = 138;
	public static readonly RULE_unitToUnitInterval = 139;
	public static readonly RULE_intervalValue = 140;
	public static readonly RULE_columnAlias = 141;
	public static readonly RULE_tableAlias = 142;
	public static readonly RULE_errorCapturingIdentifier = 143;
	public static readonly RULE_errorCapturingIdentifierExtra = 144;
	public static readonly RULE_identifierList = 145;
	public static readonly RULE_identifierSeq = 146;
	public static readonly RULE_identifier = 147;
	public static readonly RULE_strictIdentifier = 148;
	public static readonly RULE_unquotedIdentifier = 149;
	public static readonly RULE_quotedIdentifier = 150;
	public static readonly RULE_whenClause = 151;
	public static readonly RULE_uidList = 152;
	public static readonly RULE_uid = 153;
	public static readonly RULE_withOption = 154;
	public static readonly RULE_ifNotExists = 155;
	public static readonly RULE_ifExists = 156;
	public static readonly RULE_tablePropertyList = 157;
	public static readonly RULE_tableProperty = 158;
	public static readonly RULE_tablePropertyKey = 159;
	public static readonly RULE_tablePropertyValue = 160;
	public static readonly RULE_logicalOperator = 161;
	public static readonly RULE_comparisonOperator = 162;
	public static readonly RULE_bitOperator = 163;
	public static readonly RULE_mathOperator = 164;
	public static readonly RULE_unaryOperator = 165;
	public static readonly RULE_fullColumnName = 166;
	public static readonly RULE_constant = 167;
	public static readonly RULE_stringLiteral = 168;
	public static readonly RULE_decimalLiteral = 169;
	public static readonly RULE_booleanLiteral = 170;
	public static readonly RULE_setQuantifier = 171;
	public static readonly RULE_ansiNonReserved = 172;
	public static readonly RULE_strictNonReserved = 173;
	public static readonly RULE_nonReserved = 174;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            "'SELECT'", 
                                                            "'FROM'", "'ADD'", 
                                                            "'AS'", "'ALL'", 
                                                            "'ANY'", "'DISTINCT'", 
                                                            "'WHERE'", "'GROUP'", 
                                                            "'BY'", "'GROUPING'", 
                                                            "'SETS'", "'CUBE'", 
                                                            "'ROLLUP'", 
                                                            "'ORDER'", "'HAVING'", 
                                                            "'LIMIT'", "'AT'", 
                                                            "'OR'", "'AND'", 
                                                            "'IN'", "'NOT'", 
                                                            "'NO'", "'EXISTS'", 
                                                            "'BETWEEN'", 
                                                            "'LIKE'", "'RLIKE'", 
                                                            "'IS'", "'TRUE'", 
                                                            "'FALSE'", "'NULLS'", 
                                                            "'ASC'", "'DESC'", 
                                                            "'FOR'", "'INTERVAL'", 
                                                            "'CASE'", "'WHEN'", 
                                                            "'THEN'", "'ELSE'", 
                                                            "'BEGIN'", "'END'", 
                                                            "'JOIN'", "'CROSS'", 
                                                            "'OUTER'", "'INNER'", 
                                                            "'LEFT'", "'SEMI'", 
                                                            "'RIGHT'", "'FULL'", 
                                                            "'USER'", "'NATURAL'", 
                                                            "'ON'", "'PIVOT'", 
                                                            "'LATERAL'", 
                                                            "'WINDOW'", 
                                                            "'OVER'", "'PARTITION'", 
                                                            "'RANGE'", "'ROWS'", 
                                                            "'UNBOUNDED'", 
                                                            "'PRECEDING'", 
                                                            "'FOLLOWING'", 
                                                            "'CURRENT'", 
                                                            "'FIRST'", "'AFTER'", 
                                                            "'LAST'", "'WITH'", 
                                                            "'WITHOUT'", 
                                                            "'VALUES'", 
                                                            "'CREATE'", 
                                                            "'TABLE'", "'DIRECTORY'", 
                                                            "'VIEW'", "'REPLACE'", 
                                                            "'EXECUTE'", 
                                                            "'STATEMENT'", 
                                                            "'INSERT'", 
                                                            "'DELETE'", 
                                                            "'REMOVE'", 
                                                            "'INTO'", "'DESCRIBE'", 
                                                            "'EXPLAIN'", 
                                                            "'PLAN'", "'CHANGELOG_MODE'", 
                                                            "'JSON_EXECUTION_PLAN'", 
                                                            "'ESTIMATED_COST'", 
                                                            "'FORMAT'", 
                                                            "'LOGICAL'", 
                                                            "'CODEGEN'", 
                                                            "'COST'", "'CAST'", 
                                                            "'SHOW'", "'TABLES'", 
                                                            "'COLUMNS'", 
                                                            "'COLUMN'", 
                                                            "'USE'", "'MODULE'", 
                                                            "'MODULES'", 
                                                            "'PARTITIONS'", 
                                                            "'FUNCTIONS'", 
                                                            "'DROP'", "'UNION'", 
                                                            "'EXCEPT'", 
                                                            "'SETMINUS'", 
                                                            "'INTERSECT'", 
                                                            "'TO'", "'TABLESAMPLE'", 
                                                            "'STRATIFY'", 
                                                            "'ALTER'", "'RENAME'", 
                                                            "'STRUCT'", 
                                                            "'COMMENT'", 
                                                            "'SET'", "'RESET'", 
                                                            "'DATA'", "'START'", 
                                                            "'TRANSACTION'", 
                                                            "'COMMIT'", 
                                                            "'ROLLBACK'", 
                                                            "'MACRO'", "'IGNORE'", 
                                                            "'BOTH'", "'LEADING'", 
                                                            "'TRAILING'", 
                                                            "'IF'", "'POSITION'", 
                                                            "'EXTRACT'", 
                                                            "'MINUS'", "'DIV'", 
                                                            "'PERCENTLIT'", 
                                                            "'BUCKET'", 
                                                            "'OUT'", "'OF'", 
                                                            "'SORT'", "'CLUSTER'", 
                                                            "'DISTRIBUTE'", 
                                                            "'OVERWRITE'", 
                                                            "'TRANSFORM'", 
                                                            "'REDUCE'", 
                                                            "'USING'", "'SERDE'", 
                                                            "'SERDEPROPERTIES'", 
                                                            "'RECORDREADER'", 
                                                            "'RECORDWRITER'", 
                                                            "'DELIMITED'", 
                                                            "'FIELDS'", 
                                                            "'TERMINATED'", 
                                                            "'COLLECTION'", 
                                                            "'ITEMS'", "'KEYS'", 
                                                            "'ESCAPED'", 
                                                            "'LINES'", "'SEPARATED'", 
                                                            "'FUNCTION'", 
                                                            "'EXTENDED'", 
                                                            "'REFRESH'", 
                                                            "'CLEAR'", "'CACHE'", 
                                                            "'UNCACHE'", 
                                                            "'LAZY'", "'FORMATTED'", 
                                                            "'GLOBAL'", 
                                                            "'TEMPORARY'", 
                                                            "'OPTIONS'", 
                                                            "'UNSET'", "'TBLPROPERTIES'", 
                                                            "'DBPROPERTIES'", 
                                                            "'BUCKETS'", 
                                                            "'SKEWED'", 
                                                            "'STORED'", 
                                                            "'DIRECTORIES'", 
                                                            "'LOCATION'", 
                                                            "'EXCHANGE'", 
                                                            "'ARCHIVE'", 
                                                            "'UNARCHIVE'", 
                                                            "'FILEFORMAT'", 
                                                            "'TOUCH'", "'COMPACT'", 
                                                            "'CONCATENATE'", 
                                                            "'CHANGE'", 
                                                            "'CASCADE'", 
                                                            "'CONSTRAINT'", 
                                                            "'RESTRICT'", 
                                                            "'CLUSTERED'", 
                                                            "'SORTED'", 
                                                            "'PURGE'", "'INPUTFORMAT'", 
                                                            "'OUTPUTFORMAT'", 
                                                            "'DATABASE'", 
                                                            "'DATABASES'", 
                                                            "'DFS'", "'TRUNCATE'", 
                                                            "'ANALYZE'", 
                                                            "'COMPUTE'", 
                                                            "'LIST'", "'STATISTICS'", 
                                                            "'PARTITIONED'", 
                                                            "'EXTERNAL'", 
                                                            "'DEFINED'", 
                                                            "'REVOKE'", 
                                                            "'GRANT'", "'LOCK'", 
                                                            "'UNLOCK'", 
                                                            "'MSCK'", "'REPAIR'", 
                                                            "'RECOVER'", 
                                                            "'EXPORT'", 
                                                            "'IMPORT'", 
                                                            "'LOAD'", "'UNLOAD'", 
                                                            "'ROLE'", "'ROLES'", 
                                                            "'COMPACTIONS'", 
                                                            "'PRINCIPALS'", 
                                                            "'TRANSACTIONS'", 
                                                            "'INDEX'", "'INDEXES'", 
                                                            "'LOCKS'", "'OPTION'", 
                                                            "'ANTI'", "'LOCAL'", 
                                                            "'INPATH'", 
                                                            "'WATERMARK'", 
                                                            "'UNNEST'", 
                                                            "'MATCH'", "'NEXT'", 
                                                            "'WITHIN'", 
                                                            "'WS'", "'SYSTEM'", 
                                                            "'INCLUDING'", 
                                                            "'EXCLUDING'", 
                                                            "'OVERWRITING'", 
                                                            "'CONSTRAINTS'", 
                                                            "'GENERATED'", 
                                                            "'WATERMARKS'", 
                                                            "'CATALOG'", 
                                                            "'LANGUAGE'", 
                                                            "'JAVA'", "'SCALA'", 
                                                            "'PYTHON'", 
                                                            "'JAR'", "'FILE'", 
                                                            "'PYTHON_FILES'", 
                                                            "'PYTHON_REQUIREMENTS'", 
                                                            "'PYTHON_DEPENDENCIES'", 
                                                            "'PYTHON_JAR'", 
                                                            "'PYTHON_ARCHIVES'", 
                                                            "'PYTHON_PARAMETER'", 
                                                            "'ENGINE'", 
                                                            "'CATALOGS'", 
                                                            "'VIEWS'", "'JARS'", 
                                                            "'PRIMARY'", 
                                                            "'UNIQUE'", 
                                                            "'KEY'", "'PERIOD'", 
                                                            "'SYSTEM_TIME'", 
                                                            "'ENFORCED'", 
                                                            "'METADATA'", 
                                                            "'VIRTUAL'", 
                                                            "'ZONE'", "'TUMBLE'", 
                                                            "'HOP'", "'CUMULATE'", 
                                                            "'DESCRIPTOR'", 
                                                            "'TIMECOL'", 
                                                            "'SIZE'", "'OFFSET'", 
                                                            "'STEP'", "'SLIDE'", 
                                                            "'SESSION'", 
                                                            "'MATCH_RECOGNIZE'", 
                                                            "'MEASURES'", 
                                                            "'PATTERN'", 
                                                            "'ONE'", "'PER'", 
                                                            "'SKIP'", "'PAST'", 
                                                            "'DEFINE'", 
                                                            "'STRING'", 
                                                            "'ARRAY'", "'MAP'", 
                                                            "'CHAR'", "'VARCHAR'", 
                                                            "'BINARY'", 
                                                            "'VARBINARY'", 
                                                            "'BYTES'", "'DECIMAL'", 
                                                            "'DEC'", "'NUMERIC'", 
                                                            "'TINYINT'", 
                                                            "'SMALLINT'", 
                                                            "'INT'", "'INTEGER'", 
                                                            "'BIGINT'", 
                                                            "'FLOAT'", "'DOUBLE'", 
                                                            "'DATE'", "'TIME'", 
                                                            "'TIMESTAMP'", 
                                                            "'TIMESTAMP_LTZ'", 
                                                            "'MULTISET'", 
                                                            "'BOOLEAN'", 
                                                            "'RAW'", "'ROW'", 
                                                            "'NULL'", "'DATETIME'", 
                                                            "'='", "'>'", 
                                                            "'<'", "'!'", 
                                                            "'~'", "'|'", 
                                                            "'&'", "'^'", 
                                                            "'.'", "'['", 
                                                            "']'", "'('", 
                                                            "')'", "'{'", 
                                                            "'}'", "','", 
                                                            "';'", "'@'", 
                                                            "'''", "'\"'", 
                                                            "'`'", "':'", 
                                                            "'*'", "'_'", 
                                                            "'-'", "'+'", 
                                                            "'%'", "'||'", 
                                                            "'--'", "'/'", 
                                                            "'?'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'=>'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "SPACE", 
                                                             "COMMENT_INPUT", 
                                                             "LINE_COMMENT", 
                                                             "SELECT", "FROM", 
                                                             "ADD", "AS", 
                                                             "ALL", "ANY", 
                                                             "DISTINCT", 
                                                             "WHERE", "GROUP", 
                                                             "BY", "GROUPING", 
                                                             "SETS", "CUBE", 
                                                             "ROLLUP", "ORDER", 
                                                             "HAVING", "LIMIT", 
                                                             "AT", "OR", 
                                                             "AND", "IN", 
                                                             "NOT", "NO", 
                                                             "EXISTS", "BETWEEN", 
                                                             "LIKE", "RLIKE", 
                                                             "IS", "TRUE", 
                                                             "FALSE", "NULLS", 
                                                             "ASC", "DESC", 
                                                             "FOR", "INTERVAL", 
                                                             "CASE", "WHEN", 
                                                             "THEN", "ELSE", 
                                                             "BEGIN", "END", 
                                                             "JOIN", "CROSS", 
                                                             "OUTER", "INNER", 
                                                             "LEFT", "SEMI", 
                                                             "RIGHT", "FULL", 
                                                             "USER", "NATURAL", 
                                                             "ON", "PIVOT", 
                                                             "LATERAL", 
                                                             "WINDOW", "OVER", 
                                                             "PARTITION", 
                                                             "RANGE", "ROWS", 
                                                             "UNBOUNDED", 
                                                             "PRECEDING", 
                                                             "FOLLOWING", 
                                                             "CURRENT", 
                                                             "FIRST", "AFTER", 
                                                             "LAST", "WITH", 
                                                             "WITHOUT", 
                                                             "VALUES", "CREATE", 
                                                             "TABLE", "DIRECTORY", 
                                                             "VIEW", "REPLACE", 
                                                             "EXECUTE", 
                                                             "STATEMENT", 
                                                             "INSERT", "DELETE", 
                                                             "REMOVE", "INTO", 
                                                             "DESCRIBE", 
                                                             "EXPLAIN", 
                                                             "PLAN", "CHANGELOG_MODE", 
                                                             "JSON_EXECUTION_PLAN", 
                                                             "ESTIMATED_COST", 
                                                             "FORMAT", "LOGICAL", 
                                                             "CODEGEN", 
                                                             "COST", "CAST", 
                                                             "SHOW", "TABLES", 
                                                             "COLUMNS", 
                                                             "COLUMN", "USE", 
                                                             "MODULE", "MODULES", 
                                                             "PARTITIONS", 
                                                             "FUNCTIONS", 
                                                             "DROP", "UNION", 
                                                             "EXCEPT", "SETMINUS", 
                                                             "INTERSECT", 
                                                             "TO", "TABLESAMPLE", 
                                                             "STRATIFY", 
                                                             "ALTER", "RENAME", 
                                                             "STRUCT", "COMMENT", 
                                                             "SET", "RESET", 
                                                             "DATA", "START", 
                                                             "TRANSACTION", 
                                                             "COMMIT", "ROLLBACK", 
                                                             "MACRO", "IGNORE", 
                                                             "BOTH", "LEADING", 
                                                             "TRAILING", 
                                                             "IF", "POSITION", 
                                                             "EXTRACT", 
                                                             "MINUS", "DIV", 
                                                             "PERCENTLIT", 
                                                             "BUCKET", "OUT", 
                                                             "OF", "SORT", 
                                                             "CLUSTER", 
                                                             "DISTRIBUTE", 
                                                             "OVERWRITE", 
                                                             "TRANSFORM", 
                                                             "REDUCE", "USING", 
                                                             "SERDE", "SERDEPROPERTIES", 
                                                             "RECORDREADER", 
                                                             "RECORDWRITER", 
                                                             "DELIMITED", 
                                                             "FIELDS", "TERMINATED", 
                                                             "COLLECTION", 
                                                             "ITEMS", "KEYS", 
                                                             "ESCAPED", 
                                                             "LINES", "SEPARATED", 
                                                             "FUNCTION", 
                                                             "EXTENDED", 
                                                             "REFRESH", 
                                                             "CLEAR", "CACHE", 
                                                             "UNCACHE", 
                                                             "LAZY", "FORMATTED", 
                                                             "GLOBAL", "TEMPORARY", 
                                                             "OPTIONS", 
                                                             "UNSET", "TBLPROPERTIES", 
                                                             "DBPROPERTIES", 
                                                             "BUCKETS", 
                                                             "SKEWED", "STORED", 
                                                             "DIRECTORIES", 
                                                             "LOCATION", 
                                                             "EXCHANGE", 
                                                             "ARCHIVE", 
                                                             "UNARCHIVE", 
                                                             "FILEFORMAT", 
                                                             "TOUCH", "COMPACT", 
                                                             "CONCATENATE", 
                                                             "CHANGE", "CASCADE", 
                                                             "CONSTRAINT", 
                                                             "RESTRICT", 
                                                             "CLUSTERED", 
                                                             "SORTED", "PURGE", 
                                                             "INPUTFORMAT", 
                                                             "OUTPUTFORMAT", 
                                                             "DATABASE", 
                                                             "DATABASES", 
                                                             "DFS", "TRUNCATE", 
                                                             "ANALYZE", 
                                                             "COMPUTE", 
                                                             "LIST", "STATISTICS", 
                                                             "PARTITIONED", 
                                                             "EXTERNAL", 
                                                             "DEFINED", 
                                                             "REVOKE", "GRANT", 
                                                             "LOCK", "UNLOCK", 
                                                             "MSCK", "REPAIR", 
                                                             "RECOVER", 
                                                             "EXPORT", "IMPORT", 
                                                             "LOAD", "UNLOAD", 
                                                             "ROLE", "ROLES", 
                                                             "COMPACTIONS", 
                                                             "PRINCIPALS", 
                                                             "TRANSACTIONS", 
                                                             "INDEX", "INDEXES", 
                                                             "LOCKS", "OPTION", 
                                                             "ANTI", "LOCAL", 
                                                             "INPATH", "WATERMARK", 
                                                             "UNNEST", "MATCH", 
                                                             "NEXT", "WITHIN", 
                                                             "WS", "SYSTEM", 
                                                             "INCLUDING", 
                                                             "EXCLUDING", 
                                                             "OVERWRITING", 
                                                             "CONSTRAINTS", 
                                                             "GENERATED", 
                                                             "WATERMARKS", 
                                                             "CATALOG", 
                                                             "LANGUAGE", 
                                                             "JAVA", "SCALA", 
                                                             "PYTHON", "JAR", 
                                                             "FILE", "PYTHON_FILES", 
                                                             "PYTHON_REQUIREMENTS", 
                                                             "PYTHON_DEPENDENCIES", 
                                                             "PYTHON_JAR", 
                                                             "PYTHON_ARCHIVES", 
                                                             "PYTHON_PARAMETER", 
                                                             "ENGINE", "CATALOGS", 
                                                             "VIEWS", "JARS", 
                                                             "PRIMARY", 
                                                             "UNIQUE", "KEY", 
                                                             "PERIOD", "SYSTEM_TIME", 
                                                             "ENFORCED", 
                                                             "METADATA", 
                                                             "VIRTUAL", 
                                                             "ZONE", "TUMBLE", 
                                                             "HOP", "CUMULATE", 
                                                             "DESCRIPTOR", 
                                                             "TIMECOL", 
                                                             "SIZE", "OFFSET", 
                                                             "STEP", "SLIDE", 
                                                             "SESSION", 
                                                             "MATCH_RECOGNIZE", 
                                                             "MEASURES", 
                                                             "PATTERN", 
                                                             "ONE", "PER", 
                                                             "KW_SKIP", 
                                                             "PAST", "DEFINE", 
                                                             "STRING", "ARRAY", 
                                                             "MAP", "CHAR", 
                                                             "VARCHAR", 
                                                             "BINARY", "VARBINARY", 
                                                             "BYTES", "DECIMAL", 
                                                             "DEC", "NUMERIC", 
                                                             "TINYINT", 
                                                             "SMALLINT", 
                                                             "INT", "INTEGER", 
                                                             "BIGINT", "FLOAT", 
                                                             "DOUBLE", "DATE", 
                                                             "TIME", "TIMESTAMP", 
                                                             "TIMESTAMP_LTZ", 
                                                             "MULTISET", 
                                                             "BOOLEAN", 
                                                             "RAW", "ROW", 
                                                             "NULL", "DATETIME", 
                                                             "EQUAL_SYMBOL", 
                                                             "GREATER_SYMBOL", 
                                                             "LESS_SYMBOL", 
                                                             "EXCLAMATION_SYMBOL", 
                                                             "BIT_NOT_OP", 
                                                             "BIT_OR_OP", 
                                                             "BIT_AND_OP", 
                                                             "BIT_XOR_OP", 
                                                             "DOT", "LS_BRACKET", 
                                                             "RS_BRACKET", 
                                                             "LR_BRACKET", 
                                                             "RR_BRACKET", 
                                                             "LB_BRACKET", 
                                                             "RB_BRACKET", 
                                                             "COMMA", "SEMICOLON", 
                                                             "AT_SIGN", 
                                                             "SINGLE_QUOTE_SYMB", 
                                                             "DOUBLE_QUOTE_SYMB", 
                                                             "REVERSE_QUOTE_SYMB", 
                                                             "COLON_SYMB", 
                                                             "ASTERISK_SIGN", 
                                                             "UNDERLINE_SIGN", 
                                                             "HYPNEN_SIGN", 
                                                             "ADD_SIGN", 
                                                             "PENCENT_SIGN", 
                                                             "DOUBLE_VERTICAL_SIGN", 
                                                             "DOUBLE_HYPNEN_SIGN", 
                                                             "SLASH_SIGN", 
                                                             "QUESTION_MARK_SIGN", 
                                                             "DOT_ID", "STRING_LITERAL", 
                                                             "DIG_LITERAL", 
                                                             "REAL_LITERAL", 
                                                             "BIT_STRING", 
                                                             "ID_LITERAL", 
                                                             "FILE_PATH", 
                                                             "DOUBLE_ARROW" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "sqlStatements", "sqlStatement", "emptyStatement", 
		"ddlStatement", "dmlStatement", "describeStatement", "explainStatement", 
		"explainDetails", "explainDetail", "useStatement", "useModuleStatement", 
		"showStatememt", "loadStatement", "unloadStatememt", "setStatememt", "resetStatememt", 
		"jarStatememt", "dtAddStatement", "createTable", "simpleCreateTable", 
		"createTableAsSelect", "columnOptionDefinition", "physicalColumnDefinition", 
		"columnName", "columnNameList", "columnType", "lengthOneDimension", "lengthTwoOptionalDimension", 
		"lengthTwoStringDimension", "lengthOneTypeDimension", "mapTypeDimension", 
		"rowTypeDimension", "columnConstraint", "commentSpec", "metadataColumnDefinition", 
		"metadataKey", "computedColumnDefinition", "computedColumnExpression", 
		"watermarkDefinition", "tableConstraint", "constraintName", "selfDefinitionClause", 
		"partitionDefinition", "transformList", "transform", "transformArgument", 
		"likeDefinition", "sourceTable", "likeOption", "createCatalog", "createDatabase", 
		"createView", "createFunction", "usingClause", "jarFileName", "alterTable", 
		"renameDefinition", "setKeyValueDefinition", "addConstraint", "dropConstraint", 
		"addUnique", "notForced", "alertView", "alterDatabase", "alterFunction", 
		"dropCatalog", "dropTable", "dropDatabase", "dropView", "dropFunction", 
		"insertStatement", "insertSimpleStatement", "insertPartitionDefinition", 
		"valuesDefinition", "valuesRowDefinition", "insertMulStatement", "queryStatement", 
		"valuesCaluse", "withItem", "withItemName", "selectStatement", "selectClause", 
		"projectItemDefinition", "overWindowItem", "fromClause", "tableExpression", 
		"tableReference", "tablePrimary", "tablePath", "systemTimePeriod", "dateTimeExpression", 
		"inlineDataValueClause", "windoTVFClause", "windowTVFExression", "windoTVFName", 
		"windowTVFParam", "timeIntervalParamName", "columnDescriptor", "joinCondition", 
		"whereClause", "groupByClause", "groupItemDefinition", "groupingSets", 
		"groupingSetsNotaionName", "groupWindowFunction", "groupWindowFunctionName", 
		"timeAttrColumn", "havingClause", "windowClause", "namedWindow", "windowSpec", 
		"matchRecognizeClause", "orderByCaluse", "orderItemDefition", "limitClause", 
		"partitionByClause", "quantifiers", "measuresClause", "patternDefination", 
		"patternVariable", "outputMode", "afterMatchStrategy", "patternVariablesDefination", 
		"windowFrame", "frameBound", "withinClause", "timeIntervalExpression", 
		"expression", "booleanExpression", "predicate", "likePredicate", "valueExpression", 
		"primaryExpression", "functionName", "dereferenceDefinition", "correlationName", 
		"qualifiedName", "interval", "errorCapturingMultiUnitsInterval", "multiUnitsInterval", 
		"errorCapturingUnitToUnitInterval", "unitToUnitInterval", "intervalValue", 
		"columnAlias", "tableAlias", "errorCapturingIdentifier", "errorCapturingIdentifierExtra", 
		"identifierList", "identifierSeq", "identifier", "strictIdentifier", "unquotedIdentifier", 
		"quotedIdentifier", "whenClause", "uidList", "uid", "withOption", "ifNotExists", 
		"ifExists", "tablePropertyList", "tableProperty", "tablePropertyKey", 
		"tablePropertyValue", "logicalOperator", "comparisonOperator", "bitOperator", 
		"mathOperator", "unaryOperator", "fullColumnName", "constant", "stringLiteral", 
		"decimalLiteral", "booleanLiteral", "setQuantifier", "ansiNonReserved", 
		"strictNonReserved", "nonReserved",
	];
	public get grammarFileName(): string { return "FlinkSqlParser.g4"; }
	public get literalNames(): (string | null)[] { return FlinkSqlParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return FlinkSqlParser.symbolicNames; }
	public get ruleNames(): string[] { return FlinkSqlParser.ruleNames; }
	public get serializedATN(): number[] { return FlinkSqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, FlinkSqlParser._ATN, FlinkSqlParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, FlinkSqlParser.RULE_program);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 350;
			this.statement();
			this.state = 351;
			this.match(FlinkSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 2, FlinkSqlParser.RULE_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 353;
			this.sqlStatements();
			this.state = 354;
			this.match(FlinkSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sqlStatements(): SqlStatementsContext {
		let localctx: SqlStatementsContext = new SqlStatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, FlinkSqlParser.RULE_sqlStatements);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4 || _la===6 || _la===36 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 570479885) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 12545) !== 0) || _la===212 || _la===213 || _la===321 || _la===326) {
				{
				this.state = 361;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 4:
				case 6:
				case 36:
				case 70:
				case 72:
				case 73:
				case 78:
				case 80:
				case 82:
				case 84:
				case 85:
				case 95:
				case 99:
				case 104:
				case 112:
				case 116:
				case 117:
				case 212:
				case 213:
				case 321:
					{
					this.state = 356;
					this.sqlStatement();
					this.state = 358;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 357;
						this.match(FlinkSqlParser.SEMICOLON);
						}
						break;
					}
					}
					break;
				case 326:
					{
					this.state = 360;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 365;
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
	public sqlStatement(): SqlStatementContext {
		let localctx: SqlStatementContext = new SqlStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, FlinkSqlParser.RULE_sqlStatement);
		try {
			this.state = 378;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 366;
				this.ddlStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 367;
				this.dmlStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 368;
				this.describeStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 369;
				this.explainStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 370;
				this.useStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 371;
				this.showStatememt();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 372;
				this.loadStatement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 373;
				this.unloadStatememt();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 374;
				this.setStatememt();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 375;
				this.resetStatememt();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 376;
				this.jarStatememt();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 377;
				this.dtAddStatement();
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
	public emptyStatement(): EmptyStatementContext {
		let localctx: EmptyStatementContext = new EmptyStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, FlinkSqlParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 380;
			this.match(FlinkSqlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ddlStatement(): DdlStatementContext {
		let localctx: DdlStatementContext = new DdlStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, FlinkSqlParser.RULE_ddlStatement);
		try {
			this.state = 396;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 382;
				this.createTable();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 383;
				this.createDatabase();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 384;
				this.createView();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 385;
				this.createFunction();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 386;
				this.createCatalog();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 387;
				this.alterTable();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 388;
				this.alertView();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 389;
				this.alterDatabase();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 390;
				this.alterFunction();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 391;
				this.dropCatalog();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 392;
				this.dropTable();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 393;
				this.dropDatabase();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 394;
				this.dropView();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 395;
				this.dropFunction();
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
	public dmlStatement(): DmlStatementContext {
		let localctx: DmlStatementContext = new DmlStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, FlinkSqlParser.RULE_dmlStatement);
		try {
			this.state = 400;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
			case 70:
			case 72:
			case 321:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 398;
				this.queryStatement(0);
				}
				break;
			case 78:
			case 80:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 399;
				this.insertStatement();
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
	public describeStatement(): DescribeStatementContext {
		let localctx: DescribeStatementContext = new DescribeStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, FlinkSqlParser.RULE_describeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 402;
			_la = this._input.LA(1);
			if(!(_la===36 || _la===84)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 403;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public explainStatement(): ExplainStatementContext {
		let localctx: ExplainStatementContext = new ExplainStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, FlinkSqlParser.RULE_explainStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 405;
			this.match(FlinkSqlParser.EXPLAIN);
			this.state = 409;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 87:
			case 88:
			case 89:
				{
				this.state = 406;
				this.explainDetails();
				}
				break;
			case 86:
				{
				this.state = 407;
				this.match(FlinkSqlParser.PLAN);
				this.state = 408;
				this.match(FlinkSqlParser.FOR);
				}
				break;
			case 4:
			case 70:
			case 72:
			case 78:
			case 79:
			case 80:
			case 321:
				break;
			default:
				break;
			}
			this.state = 414;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 411;
				this.dmlStatement();
				}
				break;
			case 2:
				{
				this.state = 412;
				this.insertSimpleStatement();
				}
				break;
			case 3:
				{
				this.state = 413;
				this.insertMulStatement();
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
	public explainDetails(): ExplainDetailsContext {
		let localctx: ExplainDetailsContext = new ExplainDetailsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, FlinkSqlParser.RULE_explainDetails);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 416;
			this.explainDetail();
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===325) {
				{
				{
				this.state = 417;
				this.match(FlinkSqlParser.COMMA);
				this.state = 418;
				this.explainDetail();
				}
				}
				this.state = 423;
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
	public explainDetail(): ExplainDetailContext {
		let localctx: ExplainDetailContext = new ExplainDetailContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, FlinkSqlParser.RULE_explainDetail);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 424;
			_la = this._input.LA(1);
			if(!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 7) !== 0))) {
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
	public useStatement(): UseStatementContext {
		let localctx: UseStatementContext = new UseStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, FlinkSqlParser.RULE_useStatement);
		let _la: number;
		try {
			this.state = 432;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 426;
				this.match(FlinkSqlParser.USE);
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===239) {
					{
					this.state = 427;
					this.match(FlinkSqlParser.CATALOG);
					}
				}

				this.state = 430;
				this.uid();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 431;
				this.useModuleStatement();
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
	public useModuleStatement(): UseModuleStatementContext {
		let localctx: UseModuleStatementContext = new UseModuleStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, FlinkSqlParser.RULE_useModuleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 434;
			this.match(FlinkSqlParser.USE);
			this.state = 435;
			this.match(FlinkSqlParser.MODULES);
			this.state = 436;
			this.uid();
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===325) {
				{
				{
				this.state = 437;
				this.match(FlinkSqlParser.COMMA);
				this.state = 438;
				this.uid();
				}
				}
				this.state = 443;
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
	public showStatememt(): ShowStatememtContext {
		let localctx: ShowStatememtContext = new ShowStatememtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, FlinkSqlParser.RULE_showStatememt);
		let _la: number;
		try {
			this.state = 479;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 444;
				this.match(FlinkSqlParser.SHOW);
				this.state = 445;
				_la = this._input.LA(1);
				if(!(_la===193 || ((((_la - 253)) & ~0x1F) === 0 && ((1 << (_la - 253)) & 7) !== 0))) {
				this._errHandler.recoverInline(this);
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
				this.state = 446;
				this.match(FlinkSqlParser.SHOW);
				this.state = 447;
				this.match(FlinkSqlParser.CURRENT);
				this.state = 448;
				_la = this._input.LA(1);
				if(!(_la===192 || _la===239)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 449;
				this.match(FlinkSqlParser.SHOW);
				this.state = 450;
				this.match(FlinkSqlParser.TABLES);
				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===5 || _la===24) {
					{
					this.state = 451;
					_la = this._input.LA(1);
					if(!(_la===5 || _la===24)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 452;
					this.uid();
					}
				}

				this.state = 456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25 || _la===29) {
					{
					this.state = 455;
					this.likePredicate();
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 458;
				this.match(FlinkSqlParser.SHOW);
				this.state = 459;
				this.match(FlinkSqlParser.COLUMNS);
				this.state = 460;
				_la = this._input.LA(1);
				if(!(_la===5 || _la===24)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 461;
				this.uid();
				this.state = 463;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25 || _la===29) {
					{
					this.state = 462;
					this.likePredicate();
					}
				}

				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 465;
				this.match(FlinkSqlParser.SHOW);
				this.state = 466;
				this.match(FlinkSqlParser.CREATE);
				this.state = 467;
				_la = this._input.LA(1);
				if(!(_la===74 || _la===76)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 468;
				this.uid();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 469;
				this.match(FlinkSqlParser.SHOW);
				this.state = 471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 470;
					this.match(FlinkSqlParser.USER);
					}
				}

				this.state = 473;
				this.match(FlinkSqlParser.FUNCTIONS);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 474;
				this.match(FlinkSqlParser.SHOW);
				this.state = 476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===52) {
					{
					this.state = 475;
					this.match(FlinkSqlParser.FULL);
					}
				}

				this.state = 478;
				this.match(FlinkSqlParser.MODULES);
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
	public loadStatement(): LoadStatementContext {
		let localctx: LoadStatementContext = new LoadStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, FlinkSqlParser.RULE_loadStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 481;
			this.match(FlinkSqlParser.LOAD);
			this.state = 482;
			this.match(FlinkSqlParser.MODULE);
			this.state = 483;
			this.uid();
			this.state = 486;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 484;
				this.match(FlinkSqlParser.WITH);
				this.state = 485;
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
	public unloadStatememt(): UnloadStatememtContext {
		let localctx: UnloadStatememtContext = new UnloadStatememtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, FlinkSqlParser.RULE_unloadStatememt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 488;
			this.match(FlinkSqlParser.UNLOAD);
			this.state = 489;
			this.match(FlinkSqlParser.MODULE);
			this.state = 490;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setStatememt(): SetStatememtContext {
		let localctx: SetStatememtContext = new SetStatememtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, FlinkSqlParser.RULE_setStatememt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 492;
			this.match(FlinkSqlParser.SET);
			this.state = 494;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 493;
				this.tableProperty();
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
	public resetStatememt(): ResetStatememtContext {
		let localctx: ResetStatememtContext = new ResetStatememtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, FlinkSqlParser.RULE_resetStatememt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 496;
			this.match(FlinkSqlParser.RESET);
			this.state = 498;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 497;
				this.tablePropertyKey();
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
	public jarStatememt(): JarStatememtContext {
		let localctx: JarStatememtContext = new JarStatememtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, FlinkSqlParser.RULE_jarStatememt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 500;
			_la = this._input.LA(1);
			if(!(_la===6 || _la===82)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 501;
			this.match(FlinkSqlParser.JAR);
			this.state = 502;
			this.jarFileName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dtAddStatement(): DtAddStatementContext {
		let localctx: DtAddStatementContext = new DtAddStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, FlinkSqlParser.RULE_dtAddStatement);
		let _la: number;
		try {
			this.state = 543;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 504;
				this.match(FlinkSqlParser.ADD);
				this.state = 505;
				this.match(FlinkSqlParser.JAR);
				this.state = 506;
				this.match(FlinkSqlParser.WITH);
				this.state = 507;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===7) {
					{
					this.state = 508;
					this.match(FlinkSqlParser.AS);
					this.state = 509;
					this.uid();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 512;
				this.match(FlinkSqlParser.ADD);
				this.state = 513;
				this.match(FlinkSqlParser.FILE);
				this.state = 514;
				this.match(FlinkSqlParser.WITH);
				this.state = 515;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===7) {
					{
					this.state = 516;
					this.match(FlinkSqlParser.AS);
					this.state = 517;
					this.uid();
					}
				}

				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===113) {
					{
					this.state = 520;
					this.match(FlinkSqlParser.RENAME);
					this.state = 521;
					this.uid();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 524;
				this.match(FlinkSqlParser.ADD);
				this.state = 525;
				_la = this._input.LA(1);
				if(!(((((_la - 246)) & ~0x1F) === 0 && ((1 << (_la - 246)) & 31) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 526;
				this.match(FlinkSqlParser.WITH);
				this.state = 527;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 528;
				this.match(FlinkSqlParser.RENAME);
				this.state = 529;
				this.uid();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 530;
				this.match(FlinkSqlParser.ADD);
				this.state = 531;
				this.match(FlinkSqlParser.PYTHON_PARAMETER);
				this.state = 532;
				this.match(FlinkSqlParser.FILE_PATH);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 533;
				this.match(FlinkSqlParser.ADD);
				this.state = 534;
				this.match(FlinkSqlParser.ENGINE);
				this.state = 535;
				this.match(FlinkSqlParser.FILE);
				this.state = 536;
				this.match(FlinkSqlParser.WITH);
				this.state = 537;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 538;
				this.match(FlinkSqlParser.RENAME);
				this.state = 539;
				this.uid();
				this.state = 540;
				this.match(FlinkSqlParser.KEY);
				this.state = 541;
				this.uid();
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
	public createTable(): CreateTableContext {
		let localctx: CreateTableContext = new CreateTableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, FlinkSqlParser.RULE_createTable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 547;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 545;
				this.simpleCreateTable();
				}
				break;
			case 2:
				{
				this.state = 546;
				this.createTableAsSelect();
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
	public simpleCreateTable(): SimpleCreateTableContext {
		let localctx: SimpleCreateTableContext = new SimpleCreateTableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, FlinkSqlParser.RULE_simpleCreateTable);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 549;
			this.match(FlinkSqlParser.CREATE);
			this.state = 551;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===166) {
				{
				this.state = 550;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 553;
			this.match(FlinkSqlParser.TABLE);
			this.state = 555;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 554;
				this.ifNotExists();
				}
			}

			this.state = 557;
			this.sourceTable();
			this.state = 558;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 559;
			this.columnOptionDefinition();
			this.state = 564;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 560;
					this.match(FlinkSqlParser.COMMA);
					this.state = 561;
					this.columnOptionDefinition();
					}
					}
				}
				this.state = 566;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 569;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 567;
				this.match(FlinkSqlParser.COMMA);
				this.state = 568;
				this.watermarkDefinition();
				}
				break;
			}
			this.state = 573;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 571;
				this.match(FlinkSqlParser.COMMA);
				this.state = 572;
				this.tableConstraint();
				}
				break;
			}
			this.state = 577;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===325) {
				{
				this.state = 575;
				this.match(FlinkSqlParser.COMMA);
				this.state = 576;
				this.selfDefinitionClause();
				}
			}

			this.state = 579;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 581;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===115) {
				{
				this.state = 580;
				this.commentSpec();
				}
			}

			this.state = 584;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===200) {
				{
				this.state = 583;
				this.partitionDefinition();
				}
			}

			this.state = 586;
			this.withOption();
			this.state = 588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===29) {
				{
				this.state = 587;
				this.likeDefinition();
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
	public createTableAsSelect(): CreateTableAsSelectContext {
		let localctx: CreateTableAsSelectContext = new CreateTableAsSelectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, FlinkSqlParser.RULE_createTableAsSelect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 590;
			this.match(FlinkSqlParser.CREATE);
			this.state = 591;
			this.match(FlinkSqlParser.TABLE);
			this.state = 593;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 592;
				this.ifNotExists();
				}
			}

			this.state = 595;
			this.sourceTable();
			this.state = 596;
			this.withOption();
			this.state = 599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 597;
				this.match(FlinkSqlParser.AS);
				this.state = 598;
				this.queryStatement(0);
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
	public columnOptionDefinition(): ColumnOptionDefinitionContext {
		let localctx: ColumnOptionDefinitionContext = new ColumnOptionDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, FlinkSqlParser.RULE_columnOptionDefinition);
		try {
			this.state = 604;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 601;
				this.physicalColumnDefinition();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 602;
				this.metadataColumnDefinition();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 603;
				this.computedColumnDefinition();
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
	public physicalColumnDefinition(): PhysicalColumnDefinitionContext {
		let localctx: PhysicalColumnDefinitionContext = new PhysicalColumnDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, FlinkSqlParser.RULE_physicalColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 606;
			this.columnName();
			this.state = 607;
			this.columnType();
			this.state = 609;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===185 || _la===256) {
				{
				this.state = 608;
				this.columnConstraint();
				}
			}

			this.state = 612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===115) {
				{
				this.state = 611;
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
	public columnName(): ColumnNameContext {
		let localctx: ColumnNameContext = new ColumnNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, FlinkSqlParser.RULE_columnName);
		try {
			this.state = 616;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 614;
				this.uid();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 615;
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
	public columnNameList(): ColumnNameListContext {
		let localctx: ColumnNameListContext = new ColumnNameListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, FlinkSqlParser.RULE_columnNameList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 618;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 619;
			this.columnName();
			this.state = 624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===325) {
				{
				{
				this.state = 620;
				this.match(FlinkSqlParser.COMMA);
				this.state = 621;
				this.columnName();
				}
				}
				this.state = 626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 627;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public columnType(): ColumnTypeContext {
		let localctx: ColumnTypeContext = new ColumnTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, FlinkSqlParser.RULE_columnType);
		let _la: number;
		try {
			this.state = 666;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 300:
			case 305:
			case 308:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 629;
				localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 300)) & ~0x1F) === 0 && ((1 << (_la - 300)) & 289) !== 0))) {
				    localctx._typeName = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 282:
			case 285:
			case 286:
			case 287:
			case 288:
			case 289:
			case 293:
			case 294:
			case 295:
			case 296:
			case 297:
			case 301:
			case 303:
			case 309:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 630;
				localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 282)) & ~0x1F) === 0 && ((1 << (_la - 282)) & 136902905) !== 0))) {
				    localctx._typeName = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 632;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===321) {
					{
					this.state = 631;
					this.lengthOneDimension();
					}
				}

				}
				break;
			case 302:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 634;
				localctx._typeName = this.match(FlinkSqlParser.TIMESTAMP);
				this.state = 636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===321) {
					{
					this.state = 635;
					this.lengthOneDimension();
					}
				}

				this.state = 644;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===70 || _la===71) {
					{
					this.state = 638;
					_la = this._input.LA(1);
					if(!(_la===70 || _la===71)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 640;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===224) {
						{
						this.state = 639;
						this.match(FlinkSqlParser.LOCAL);
						}
					}

					this.state = 642;
					this.match(FlinkSqlParser.TIME);
					this.state = 643;
					this.match(FlinkSqlParser.ZONE);
					}
				}

				}
				break;
			case 290:
			case 291:
			case 292:
			case 298:
			case 299:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 646;
				localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 775) !== 0))) {
				    localctx._typeName = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 648;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===321) {
					{
					this.state = 647;
					this.lengthTwoOptionalDimension();
					}
				}

				}
				break;
			case 283:
			case 304:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 650;
				localctx._type_ = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===283 || _la===304)) {
				    localctx._type_ = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===312) {
					{
					this.state = 651;
					this.lengthOneTypeDimension();
					}
				}

				}
				break;
			case 284:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 654;
				localctx._type_ = this.match(FlinkSqlParser.MAP);
				this.state = 656;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===312) {
					{
					this.state = 655;
					this.mapTypeDimension();
					}
				}

				}
				break;
			case 307:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 658;
				localctx._type_ = this.match(FlinkSqlParser.ROW);
				this.state = 660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===312) {
					{
					this.state = 659;
					this.rowTypeDimension();
					}
				}

				}
				break;
			case 306:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 662;
				localctx._type_ = this.match(FlinkSqlParser.RAW);
				this.state = 664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===321) {
					{
					this.state = 663;
					this.lengthTwoStringDimension();
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
	public lengthOneDimension(): LengthOneDimensionContext {
		let localctx: LengthOneDimensionContext = new LengthOneDimensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, FlinkSqlParser.RULE_lengthOneDimension);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 668;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 669;
			this.decimalLiteral();
			this.state = 670;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext {
		let localctx: LengthTwoOptionalDimensionContext = new LengthTwoOptionalDimensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, FlinkSqlParser.RULE_lengthTwoOptionalDimension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 672;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 673;
			this.decimalLiteral();
			this.state = 676;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===325) {
				{
				this.state = 674;
				this.match(FlinkSqlParser.COMMA);
				this.state = 675;
				this.decimalLiteral();
				}
			}

			this.state = 678;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lengthTwoStringDimension(): LengthTwoStringDimensionContext {
		let localctx: LengthTwoStringDimensionContext = new LengthTwoStringDimensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, FlinkSqlParser.RULE_lengthTwoStringDimension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 680;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 681;
			this.stringLiteral();
			this.state = 684;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===325) {
				{
				this.state = 682;
				this.match(FlinkSqlParser.COMMA);
				this.state = 683;
				this.stringLiteral();
				}
			}

			this.state = 686;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lengthOneTypeDimension(): LengthOneTypeDimensionContext {
		let localctx: LengthOneTypeDimensionContext = new LengthOneTypeDimensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, FlinkSqlParser.RULE_lengthOneTypeDimension);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 688;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 689;
			this.columnType();
			this.state = 690;
			this.match(FlinkSqlParser.GREATER_SYMBOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapTypeDimension(): MapTypeDimensionContext {
		let localctx: MapTypeDimensionContext = new MapTypeDimensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, FlinkSqlParser.RULE_mapTypeDimension);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 692;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 693;
			this.columnType();
			{
			this.state = 694;
			this.match(FlinkSqlParser.COMMA);
			this.state = 695;
			this.columnType();
			}
			this.state = 697;
			this.match(FlinkSqlParser.GREATER_SYMBOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rowTypeDimension(): RowTypeDimensionContext {
		let localctx: RowTypeDimensionContext = new RowTypeDimensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, FlinkSqlParser.RULE_rowTypeDimension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 699;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 700;
			this.columnName();
			this.state = 701;
			this.columnType();
			this.state = 708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===325) {
				{
				{
				this.state = 702;
				this.match(FlinkSqlParser.COMMA);
				this.state = 703;
				this.columnName();
				this.state = 704;
				this.columnType();
				}
				}
				this.state = 710;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 711;
			this.match(FlinkSqlParser.GREATER_SYMBOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public columnConstraint(): ColumnConstraintContext {
		let localctx: ColumnConstraintContext = new ColumnConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, FlinkSqlParser.RULE_columnConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===185) {
				{
				this.state = 713;
				this.match(FlinkSqlParser.CONSTRAINT);
				this.state = 714;
				this.constraintName();
				}
			}

			this.state = 717;
			this.match(FlinkSqlParser.PRIMARY);
			this.state = 718;
			this.match(FlinkSqlParser.KEY);
			this.state = 719;
			this.match(FlinkSqlParser.NOT);
			this.state = 720;
			this.match(FlinkSqlParser.ENFORCED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 70, FlinkSqlParser.RULE_commentSpec);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 722;
			this.match(FlinkSqlParser.COMMENT);
			this.state = 723;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public metadataColumnDefinition(): MetadataColumnDefinitionContext {
		let localctx: MetadataColumnDefinitionContext = new MetadataColumnDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, FlinkSqlParser.RULE_metadataColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 725;
			this.columnName();
			this.state = 726;
			this.columnType();
			this.state = 727;
			this.match(FlinkSqlParser.METADATA);
			this.state = 730;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 728;
				this.match(FlinkSqlParser.FROM);
				this.state = 729;
				this.metadataKey();
				}
			}

			this.state = 733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===263) {
				{
				this.state = 732;
				this.match(FlinkSqlParser.VIRTUAL);
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
	public metadataKey(): MetadataKeyContext {
		let localctx: MetadataKeyContext = new MetadataKeyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, FlinkSqlParser.RULE_metadataKey);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 735;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public computedColumnDefinition(): ComputedColumnDefinitionContext {
		let localctx: ComputedColumnDefinitionContext = new ComputedColumnDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, FlinkSqlParser.RULE_computedColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 737;
			this.columnName();
			this.state = 738;
			this.match(FlinkSqlParser.AS);
			this.state = 739;
			this.computedColumnExpression();
			this.state = 741;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===115) {
				{
				this.state = 740;
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
	public computedColumnExpression(): ComputedColumnExpressionContext {
		let localctx: ComputedColumnExpressionContext = new ComputedColumnExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, FlinkSqlParser.RULE_computedColumnExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 743;
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
	public watermarkDefinition(): WatermarkDefinitionContext {
		let localctx: WatermarkDefinitionContext = new WatermarkDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, FlinkSqlParser.RULE_watermarkDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 745;
			this.match(FlinkSqlParser.WATERMARK);
			this.state = 746;
			this.match(FlinkSqlParser.FOR);
			this.state = 747;
			this.expression();
			this.state = 748;
			this.match(FlinkSqlParser.AS);
			this.state = 749;
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
	public tableConstraint(): TableConstraintContext {
		let localctx: TableConstraintContext = new TableConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, FlinkSqlParser.RULE_tableConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 753;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===185) {
				{
				this.state = 751;
				this.match(FlinkSqlParser.CONSTRAINT);
				this.state = 752;
				this.constraintName();
				}
			}

			this.state = 755;
			this.match(FlinkSqlParser.PRIMARY);
			this.state = 756;
			this.match(FlinkSqlParser.KEY);
			this.state = 757;
			this.columnNameList();
			this.state = 758;
			this.match(FlinkSqlParser.NOT);
			this.state = 759;
			this.match(FlinkSqlParser.ENFORCED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constraintName(): ConstraintNameContext {
		let localctx: ConstraintNameContext = new ConstraintNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, FlinkSqlParser.RULE_constraintName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 761;
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
	public selfDefinitionClause(): SelfDefinitionClauseContext {
		let localctx: SelfDefinitionClauseContext = new SelfDefinitionClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, FlinkSqlParser.RULE_selfDefinitionClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 763;
			this.match(FlinkSqlParser.PERIOD);
			this.state = 764;
			this.match(FlinkSqlParser.FOR);
			this.state = 765;
			this.match(FlinkSqlParser.SYSTEM_TIME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public partitionDefinition(): PartitionDefinitionContext {
		let localctx: PartitionDefinitionContext = new PartitionDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, FlinkSqlParser.RULE_partitionDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 767;
			this.match(FlinkSqlParser.PARTITIONED);
			this.state = 768;
			this.match(FlinkSqlParser.BY);
			this.state = 769;
			this.transformList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 90, FlinkSqlParser.RULE_transformList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 771;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 772;
			this.transform();
			this.state = 777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===325) {
				{
				{
				this.state = 773;
				this.match(FlinkSqlParser.COMMA);
				this.state = 774;
				this.transform();
				}
				}
				this.state = 779;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 780;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 92, FlinkSqlParser.RULE_transform);
		let _la: number;
		try {
			this.state = 795;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				localctx = new IdentityTransformContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 782;
				this.qualifiedName();
				}
				break;
			case 2:
				localctx = new ApplyTransformContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 783;
				(localctx as ApplyTransformContext)._transformName = this.identifier();
				this.state = 784;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 785;
				this.transformArgument();
				this.state = 790;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===325) {
					{
					{
					this.state = 786;
					this.match(FlinkSqlParser.COMMA);
					this.state = 787;
					this.transformArgument();
					}
					}
					this.state = 792;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 793;
				this.match(FlinkSqlParser.RR_BRACKET);
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
		this.enterRule(localctx, 94, FlinkSqlParser.RULE_transformArgument);
		try {
			this.state = 799;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 797;
				this.qualifiedName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 798;
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
	public likeDefinition(): LikeDefinitionContext {
		let localctx: LikeDefinitionContext = new LikeDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, FlinkSqlParser.RULE_likeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 801;
			this.match(FlinkSqlParser.LIKE);
			this.state = 802;
			this.sourceTable();
			this.state = 811;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 803;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 807;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 233)) & ~0x1F) === 0 && ((1 << (_la - 233)) & 7) !== 0)) {
					{
					{
					this.state = 804;
					this.likeOption();
					}
					}
					this.state = 809;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 810;
				this.match(FlinkSqlParser.RR_BRACKET);
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
	public sourceTable(): SourceTableContext {
		let localctx: SourceTableContext = new SourceTableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, FlinkSqlParser.RULE_sourceTable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 813;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public likeOption(): LikeOptionContext {
		let localctx: LikeOptionContext = new LikeOptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, FlinkSqlParser.RULE_likeOption);
		let _la: number;
		try {
			this.state = 819;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 815;
				_la = this._input.LA(1);
				if(!(_la===233 || _la===234)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 816;
				_la = this._input.LA(1);
				if(!(_la===8 || _la===102 || _la===236)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 817;
				_la = this._input.LA(1);
				if(!(((((_la - 233)) & ~0x1F) === 0 && ((1 << (_la - 233)) & 7) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 818;
				_la = this._input.LA(1);
				if(!(_la===167 || _la===237 || _la===238)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
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
	public createCatalog(): CreateCatalogContext {
		let localctx: CreateCatalogContext = new CreateCatalogContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, FlinkSqlParser.RULE_createCatalog);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 821;
			this.match(FlinkSqlParser.CREATE);
			this.state = 822;
			this.match(FlinkSqlParser.CATALOG);
			this.state = 823;
			this.uid();
			this.state = 824;
			this.withOption();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createDatabase(): CreateDatabaseContext {
		let localctx: CreateDatabaseContext = new CreateDatabaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, FlinkSqlParser.RULE_createDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 826;
			this.match(FlinkSqlParser.CREATE);
			this.state = 827;
			this.match(FlinkSqlParser.DATABASE);
			this.state = 829;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 828;
				this.ifNotExists();
				}
			}

			this.state = 831;
			this.uid();
			this.state = 833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===115) {
				{
				this.state = 832;
				this.commentSpec();
				}
			}

			this.state = 835;
			this.withOption();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createView(): CreateViewContext {
		let localctx: CreateViewContext = new CreateViewContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, FlinkSqlParser.RULE_createView);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 837;
			this.match(FlinkSqlParser.CREATE);
			this.state = 839;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===166) {
				{
				this.state = 838;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 841;
			this.match(FlinkSqlParser.VIEW);
			this.state = 843;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 842;
				this.ifNotExists();
				}
			}

			this.state = 845;
			this.uid();
			this.state = 847;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===321) {
				{
				this.state = 846;
				this.columnNameList();
				}
			}

			this.state = 850;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===115) {
				{
				this.state = 849;
				this.commentSpec();
				}
			}

			this.state = 852;
			this.match(FlinkSqlParser.AS);
			this.state = 853;
			this.queryStatement(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createFunction(): CreateFunctionContext {
		let localctx: CreateFunctionContext = new CreateFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, FlinkSqlParser.RULE_createFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 855;
			this.match(FlinkSqlParser.CREATE);
			this.state = 859;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 856;
				this.match(FlinkSqlParser.TEMPORARY);
				}
				break;
			case 2:
				{
				this.state = 857;
				this.match(FlinkSqlParser.TEMPORARY);
				this.state = 858;
				this.match(FlinkSqlParser.SYSTEM);
				}
				break;
			}
			this.state = 861;
			this.match(FlinkSqlParser.FUNCTION);
			this.state = 863;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 862;
				this.ifNotExists();
				}
			}

			this.state = 865;
			this.uid();
			this.state = 866;
			this.match(FlinkSqlParser.AS);
			this.state = 867;
			this.identifier();
			this.state = 870;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===240) {
				{
				this.state = 868;
				this.match(FlinkSqlParser.LANGUAGE);
				this.state = 869;
				_la = this._input.LA(1);
				if(!(((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 7) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 873;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===143) {
				{
				this.state = 872;
				this.usingClause();
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
	public usingClause(): UsingClauseContext {
		let localctx: UsingClauseContext = new UsingClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, FlinkSqlParser.RULE_usingClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 875;
			this.match(FlinkSqlParser.USING);
			this.state = 876;
			this.match(FlinkSqlParser.JAR);
			this.state = 877;
			this.jarFileName();
			this.state = 883;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===325) {
				{
				{
				this.state = 878;
				this.match(FlinkSqlParser.COMMA);
				this.state = 879;
				this.match(FlinkSqlParser.JAR);
				this.state = 880;
				this.jarFileName();
				}
				}
				this.state = 885;
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
	public jarFileName(): JarFileNameContext {
		let localctx: JarFileNameContext = new JarFileNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, FlinkSqlParser.RULE_jarFileName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 886;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alterTable(): AlterTableContext {
		let localctx: AlterTableContext = new AlterTableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, FlinkSqlParser.RULE_alterTable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 888;
			this.match(FlinkSqlParser.ALTER);
			this.state = 889;
			this.match(FlinkSqlParser.TABLE);
			this.state = 890;
			this.uid();
			this.state = 893;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 891;
				this.renameDefinition();
				}
				break;
			case 2:
				{
				this.state = 892;
				this.setKeyValueDefinition();
				}
				break;
			case 3:
				{
				this.state = 860;
				this.addConstraint();
				}
				break;
			case 4:
				{
				this.state = 861;
				this.dropConstraint();
				}
				break;
			case 5:
				{
				this.state = 862;
				this.addUnique();
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
	public renameDefinition(): RenameDefinitionContext {
		let localctx: RenameDefinitionContext = new RenameDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, FlinkSqlParser.RULE_renameDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 895;
			this.match(FlinkSqlParser.RENAME);
			this.state = 896;
			this.match(FlinkSqlParser.TO);
			this.state = 897;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setKeyValueDefinition(): SetKeyValueDefinitionContext {
		let localctx: SetKeyValueDefinitionContext = new SetKeyValueDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, FlinkSqlParser.RULE_setKeyValueDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 899;
			this.match(FlinkSqlParser.SET);
			this.state = 900;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alertView(): AlertViewContext {
		let localctx: AlertViewContext = new AlertViewContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, FlinkSqlParser.RULE_alertView);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 902;
			this.match(FlinkSqlParser.ALTER);
			this.state = 903;
			this.match(FlinkSqlParser.VIEW);
			this.state = 904;
			this.uid();
			this.state = 908;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 113:
				{
				this.state = 905;
				this.renameDefinition();
				}
				break;
			case 7:
				{
				this.state = 906;
				this.match(FlinkSqlParser.AS);
				this.state = 907;
				this.queryStatement(0);
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
	public alterDatabase(): AlterDatabaseContext {
		let localctx: AlterDatabaseContext = new AlterDatabaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, FlinkSqlParser.RULE_alterDatabase);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 910;
			this.match(FlinkSqlParser.ALTER);
			this.state = 911;
			this.match(FlinkSqlParser.DATABASE);
			this.state = 912;
			this.uid();
			this.state = 913;
			this.setKeyValueDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alterFunction(): AlterFunctionContext {
		let localctx: AlterFunctionContext = new AlterFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, FlinkSqlParser.RULE_alterFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 915;
			this.match(FlinkSqlParser.ALTER);
			this.state = 919;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 916;
				this.match(FlinkSqlParser.TEMPORARY);
				}
				break;
			case 2:
				{
				this.state = 917;
				this.match(FlinkSqlParser.TEMPORARY);
				this.state = 918;
				this.match(FlinkSqlParser.SYSTEM);
				}
				break;
			}
			this.state = 921;
			this.match(FlinkSqlParser.FUNCTION);
			this.state = 923;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 922;
				this.ifExists();
				}
			}

			this.state = 925;
			this.uid();
			this.state = 926;
			this.match(FlinkSqlParser.AS);
			this.state = 927;
			this.identifier();
			this.state = 930;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===240) {
				{
				this.state = 928;
				this.match(FlinkSqlParser.LANGUAGE);
				this.state = 929;
				_la = this._input.LA(1);
				if(!(((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 7) !== 0))) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropCatalog(): DropCatalogContext {
		let localctx: DropCatalogContext = new DropCatalogContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, FlinkSqlParser.RULE_dropCatalog);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 932;
			this.match(FlinkSqlParser.DROP);
			this.state = 933;
			this.match(FlinkSqlParser.CATALOG);
			this.state = 935;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 934;
				this.ifExists();
				}
			}

			this.state = 937;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropTable(): DropTableContext {
		let localctx: DropTableContext = new DropTableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, FlinkSqlParser.RULE_dropTable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 939;
			this.match(FlinkSqlParser.DROP);
			this.state = 941;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===166) {
				{
				this.state = 940;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 943;
			this.match(FlinkSqlParser.TABLE);
			this.state = 945;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 944;
				this.ifExists();
				}
			}

			this.state = 947;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropDatabase(): DropDatabaseContext {
		let localctx: DropDatabaseContext = new DropDatabaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, FlinkSqlParser.RULE_dropDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 949;
			this.match(FlinkSqlParser.DROP);
			this.state = 950;
			this.match(FlinkSqlParser.DATABASE);
			this.state = 952;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 951;
				this.ifExists();
				}
			}

			this.state = 954;
			this.uid();
			this.state = 956;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===184 || _la===186) {
				{
				this.state = 955;
				localctx._dropType = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===184 || _la===186)) {
				    localctx._dropType = this._errHandler.recoverInline(this);
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
	public dropView(): DropViewContext {
		let localctx: DropViewContext = new DropViewContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, FlinkSqlParser.RULE_dropView);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 958;
			this.match(FlinkSqlParser.DROP);
			this.state = 960;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===166) {
				{
				this.state = 959;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 962;
			this.match(FlinkSqlParser.VIEW);
			this.state = 964;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 963;
				this.ifExists();
				}
			}

			this.state = 966;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropFunction(): DropFunctionContext {
		let localctx: DropFunctionContext = new DropFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, FlinkSqlParser.RULE_dropFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 968;
			this.match(FlinkSqlParser.DROP);
			this.state = 972;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 969;
				this.match(FlinkSqlParser.TEMPORARY);
				}
				break;
			case 2:
				{
				this.state = 970;
				this.match(FlinkSqlParser.TEMPORARY);
				this.state = 971;
				this.match(FlinkSqlParser.SYSTEM);
				}
				break;
			}
			this.state = 974;
			this.match(FlinkSqlParser.FUNCTION);
			this.state = 976;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 975;
				this.ifExists();
				}
			}

			this.state = 978;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public insertStatement(): InsertStatementContext {
		let localctx: InsertStatementContext = new InsertStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, FlinkSqlParser.RULE_insertStatement);
		let _la: number;
		try {
			this.state = 986;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 981;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===78) {
					{
					this.state = 980;
					this.match(FlinkSqlParser.EXECUTE);
					}
				}

				this.state = 983;
				this.insertSimpleStatement();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 984;
				this.match(FlinkSqlParser.EXECUTE);
				this.state = 985;
				this.insertMulStatement();
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
	public insertSimpleStatement(): InsertSimpleStatementContext {
		let localctx: InsertSimpleStatementContext = new InsertSimpleStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, FlinkSqlParser.RULE_insertSimpleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 988;
			this.match(FlinkSqlParser.INSERT);
			this.state = 989;
			_la = this._input.LA(1);
			if(!(_la===83 || _la===140)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 990;
			this.uid();
			this.state = 999;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				{
				this.state = 992;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===60) {
					{
					this.state = 991;
					this.insertPartitionDefinition();
					}
				}

				this.state = 995;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 98, this._ctx) ) {
				case 1:
					{
					this.state = 994;
					this.columnNameList();
					}
					break;
				}
				this.state = 997;
				this.queryStatement(0);
				}
				break;
			case 2:
				{
				this.state = 998;
				this.valuesDefinition();
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
	public insertPartitionDefinition(): InsertPartitionDefinitionContext {
		let localctx: InsertPartitionDefinitionContext = new InsertPartitionDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, FlinkSqlParser.RULE_insertPartitionDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1001;
			this.match(FlinkSqlParser.PARTITION);
			this.state = 1002;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public valuesDefinition(): ValuesDefinitionContext {
		let localctx: ValuesDefinitionContext = new ValuesDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, FlinkSqlParser.RULE_valuesDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1004;
			this.match(FlinkSqlParser.VALUES);
			this.state = 1005;
			this.valuesRowDefinition();
			this.state = 1010;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===325) {
				{
				{
				this.state = 1006;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1007;
				this.valuesRowDefinition();
				}
				}
				this.state = 1012;
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
	public valuesRowDefinition(): ValuesRowDefinitionContext {
		let localctx: ValuesRowDefinitionContext = new ValuesRowDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, FlinkSqlParser.RULE_valuesRowDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1013;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1014;
			this.constant();
			this.state = 1019;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===325) {
				{
				{
				this.state = 1015;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1016;
				this.constant();
				}
				}
				this.state = 1021;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1022;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public insertMulStatement(): InsertMulStatementContext {
		let localctx: InsertMulStatementContext = new InsertMulStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, FlinkSqlParser.RULE_insertMulStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1024;
			this.match(FlinkSqlParser.STATEMENT);
			this.state = 1025;
			this.match(FlinkSqlParser.SET);
			this.state = 1026;
			this.match(FlinkSqlParser.BEGIN);
			this.state = 1030;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1027;
				this.insertSimpleStatement();
				this.state = 1028;
				this.match(FlinkSqlParser.SEMICOLON);
				}
				}
				this.state = 1032;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===80);
			this.state = 1034;
			this.match(FlinkSqlParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public queryStatement(): QueryStatementContext;
	public queryStatement(_p: number): QueryStatementContext;
	// @RuleVersion(0)
	public queryStatement(_p?: number): QueryStatementContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: QueryStatementContext = new QueryStatementContext(this, this._ctx, _parentState);
		let _prevctx: QueryStatementContext = localctx;
		let _startState: number = 156;
		this.enterRecursionRule(localctx, 156, FlinkSqlParser.RULE_queryStatement, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1067;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				{
				this.state = 1037;
				this.valuesCaluse();
				}
				break;
			case 2:
				{
				this.state = 1038;
				this.match(FlinkSqlParser.WITH);
				this.state = 1039;
				this.withItem();
				this.state = 1044;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===325) {
					{
					{
					this.state = 1040;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1041;
					this.withItem();
					}
					}
					this.state = 1046;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1047;
				this.queryStatement(5);
				}
				break;
			case 3:
				{
				this.state = 1049;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1050;
				this.queryStatement(0);
				this.state = 1051;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				{
				this.state = 1053;
				this.selectClause();
				this.state = 1055;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 1054;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1058;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
				case 1:
					{
					this.state = 1057;
					this.limitClause();
					}
					break;
				}
				}
				break;
			case 5:
				{
				this.state = 1060;
				this.selectStatement();
				this.state = 1062;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 106, this._ctx) ) {
				case 1:
					{
					this.state = 1061;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1065;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
				case 1:
					{
					this.state = 1064;
					this.limitClause();
					}
					break;
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1083;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 112, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new QueryStatementContext(this, _parentctx, _parentState);
					localctx._left = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_queryStatement);
					this.state = 1069;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 1070;
					localctx._operator = this._input.LT(1);
					_la = this._input.LA(1);
					if(!(((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 11) !== 0))) {
					    localctx._operator = this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1072;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===8) {
						{
						this.state = 1071;
						this.match(FlinkSqlParser.ALL);
						}
					}

					this.state = 1074;
					localctx._right = this.queryStatement(0);
					this.state = 1076;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 110, this._ctx) ) {
					case 1:
						{
						this.state = 1075;
						this.orderByCaluse();
						}
						break;
					}
					this.state = 1079;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 111, this._ctx) ) {
					case 1:
						{
						this.state = 1078;
						this.limitClause();
						}
						break;
					}
					}
					}
				}
				this.state = 1085;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 112, this._ctx);
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
	public valuesCaluse(): ValuesCaluseContext {
		let localctx: ValuesCaluseContext = new ValuesCaluseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, FlinkSqlParser.RULE_valuesCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1086;
			this.match(FlinkSqlParser.VALUES);
			this.state = 1087;
			this.expression();
			this.state = 1092;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 113, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1088;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1089;
					this.expression();
					}
					}
				}
				this.state = 1094;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 113, this._ctx);
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
	public withItem(): WithItemContext {
		let localctx: WithItemContext = new WithItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, FlinkSqlParser.RULE_withItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1095;
			this.withItemName();
			this.state = 1107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===321) {
				{
				this.state = 1096;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1097;
				this.columnName();
				this.state = 1102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===325) {
					{
					{
					this.state = 1098;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1099;
					this.columnName();
					}
					}
					this.state = 1104;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1105;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
			}

			this.state = 1109;
			this.match(FlinkSqlParser.AS);
			this.state = 1110;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1111;
			this.queryStatement(0);
			this.state = 1112;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public withItemName(): WithItemNameContext {
		let localctx: WithItemNameContext = new WithItemNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, FlinkSqlParser.RULE_withItemName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1114;
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
	public selectStatement(): SelectStatementContext {
		let localctx: SelectStatementContext = new SelectStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, FlinkSqlParser.RULE_selectStatement);
		try {
			this.state = 1134;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1116;
				this.selectClause();
				this.state = 1117;
				this.fromClause();
				this.state = 1119;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 113, this._ctx) ) {
				case 1:
					{
					this.state = 1118;
					this.whereClause();
					}
					break;
				}
				this.state = 1122;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
				case 1:
					{
					this.state = 1121;
					this.groupByClause();
					}
					break;
				}
				this.state = 1125;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 115, this._ctx) ) {
				case 1:
					{
					this.state = 1124;
					this.havingClause();
					}
					break;
				}
				this.state = 1128;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
				case 1:
					{
					this.state = 1127;
					this.windowClause();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1130;
				this.selectClause();
				this.state = 1131;
				this.fromClause();
				this.state = 1132;
				this.matchRecognizeClause();
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
	public selectClause(): SelectClauseContext {
		let localctx: SelectClauseContext = new SelectClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, FlinkSqlParser.RULE_selectClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1136;
			this.match(FlinkSqlParser.SELECT);
			this.state = 1138;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				{
				this.state = 1137;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1149;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				{
				this.state = 1140;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;
			case 2:
				{
				this.state = 1141;
				this.projectItemDefinition();
				this.state = 1146;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 119, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1142;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1143;
						this.projectItemDefinition();
						}
						}
					}
					this.state = 1148;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 119, this._ctx);
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
	public projectItemDefinition(): ProjectItemDefinitionContext {
		let localctx: ProjectItemDefinitionContext = new ProjectItemDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, FlinkSqlParser.RULE_projectItemDefinition);
		try {
			this.state = 1159;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1151;
				this.overWindowItem();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1152;
				this.expression();
				this.state = 1157;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
				case 1:
					{
					this.state = 1154;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
					case 1:
						{
						this.state = 1153;
						this.match(FlinkSqlParser.AS);
						}
						break;
					}
					this.state = 1156;
					this.expression();
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
	public overWindowItem(): OverWindowItemContext {
		let localctx: OverWindowItemContext = new OverWindowItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, FlinkSqlParser.RULE_overWindowItem);
		try {
			this.state = 1173;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1161;
				this.primaryExpression(0);
				this.state = 1162;
				this.match(FlinkSqlParser.OVER);
				this.state = 1163;
				this.windowSpec();
				this.state = 1164;
				this.match(FlinkSqlParser.AS);
				this.state = 1165;
				this.strictIdentifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1167;
				this.primaryExpression(0);
				this.state = 1168;
				this.match(FlinkSqlParser.OVER);
				this.state = 1169;
				this.errorCapturingIdentifier();
				this.state = 1170;
				this.match(FlinkSqlParser.AS);
				this.state = 1171;
				this.strictIdentifier();
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
		this.enterRule(localctx, 164, FlinkSqlParser.RULE_fromClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1175;
			this.match(FlinkSqlParser.FROM);
			this.state = 1176;
			this.tableExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public tableExpression(): TableExpressionContext;
	public tableExpression(_p: number): TableExpressionContext;
	// @RuleVersion(0)
	public tableExpression(_p?: number): TableExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: TableExpressionContext = new TableExpressionContext(this, this._ctx, _parentState);
		let _prevctx: TableExpressionContext = localctx;
		let _startState: number = 166;
		this.enterRecursionRule(localctx, 166, FlinkSqlParser.RULE_tableExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1189;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				{
				this.state = 1179;
				this.tableReference();
				this.state = 1184;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 125, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1180;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1181;
						this.tableReference();
						}
						}
					}
					this.state = 1186;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 125, this._ctx);
				}
				}
				break;
			case 2:
				{
				this.state = 1187;
				this.inlineDataValueClause();
				}
				break;
			case 3:
				{
				this.state = 1188;
				this.windoTVFClause();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1212;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 132, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1210;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
					case 1:
						{
						localctx = new TableExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_tableExpression);
						this.state = 1191;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1192;
						this.match(FlinkSqlParser.CROSS);
						this.state = 1193;
						this.match(FlinkSqlParser.JOIN);
						this.state = 1194;
						this.tableExpression(4);
						}
						break;
					case 2:
						{
						localctx = new TableExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_tableExpression);
						this.state = 1195;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1197;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===54) {
							{
							this.state = 1196;
							this.match(FlinkSqlParser.NATURAL);
							}
						}

						this.state = 1200;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 27) !== 0)) {
							{
							this.state = 1199;
							_la = this._input.LA(1);
							if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 27) !== 0))) {
							this._errHandler.recoverInline(this);
							}
							else {
								this._errHandler.reportMatch(this);
							    this.consume();
							}
							}
						}

						this.state = 1203;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===47) {
							{
							this.state = 1202;
							this.match(FlinkSqlParser.OUTER);
							}
						}

						this.state = 1205;
						this.match(FlinkSqlParser.JOIN);
						this.state = 1206;
						this.tableExpression(0);
						this.state = 1208;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 130, this._ctx) ) {
						case 1:
							{
							this.state = 1207;
							this.joinCondition();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1214;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 132, this._ctx);
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
	public tableReference(): TableReferenceContext {
		let localctx: TableReferenceContext = new TableReferenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, FlinkSqlParser.RULE_tableReference);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1215;
			this.tablePrimary();
			this.state = 1217;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				{
				this.state = 1216;
				this.tableAlias();
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
	public tablePrimary(): TablePrimaryContext {
		let localctx: TablePrimaryContext = new TablePrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, FlinkSqlParser.RULE_tablePrimary);
		let _la: number;
		try {
			this.state = 1260;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===74) {
					{
					this.state = 1219;
					this.match(FlinkSqlParser.TABLE);
					}
				}

				this.state = 1222;
				this.tablePath();
				this.state = 1224;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 135, this._ctx) ) {
				case 1:
					{
					this.state = 1223;
					this.systemTimePeriod();
					}
					break;
				}
				this.state = 1230;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 137, this._ctx) ) {
				case 1:
					{
					this.state = 1227;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 136, this._ctx) ) {
					case 1:
						{
						this.state = 1226;
						this.match(FlinkSqlParser.AS);
						}
						break;
					}
					this.state = 1229;
					this.correlationName();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1232;
				this.match(FlinkSqlParser.LATERAL);
				this.state = 1233;
				this.match(FlinkSqlParser.TABLE);
				this.state = 1234;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1235;
				this.functionName();
				this.state = 1236;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1237;
				this.expression();
				this.state = 1242;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===325) {
					{
					{
					this.state = 1238;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1239;
					this.expression();
					}
					}
					this.state = 1244;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1245;
				this.match(FlinkSqlParser.RR_BRACKET);
				this.state = 1246;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===57) {
					{
					this.state = 1248;
					this.match(FlinkSqlParser.LATERAL);
					}
				}

				this.state = 1251;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1252;
				this.queryStatement(0);
				this.state = 1253;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1255;
				this.match(FlinkSqlParser.UNNEST);
				this.state = 1256;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1257;
				this.expression();
				this.state = 1258;
				this.match(FlinkSqlParser.RR_BRACKET);
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
	public tablePath(): TablePathContext {
		let localctx: TablePathContext = new TablePathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, FlinkSqlParser.RULE_tablePath);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1262;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public systemTimePeriod(): SystemTimePeriodContext {
		let localctx: SystemTimePeriodContext = new SystemTimePeriodContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, FlinkSqlParser.RULE_systemTimePeriod);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1264;
			this.match(FlinkSqlParser.FOR);
			this.state = 1265;
			this.match(FlinkSqlParser.SYSTEM_TIME);
			this.state = 1266;
			this.match(FlinkSqlParser.AS);
			this.state = 1267;
			this.match(FlinkSqlParser.OF);
			this.state = 1268;
			this.dateTimeExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dateTimeExpression(): DateTimeExpressionContext {
		let localctx: DateTimeExpressionContext = new DateTimeExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, FlinkSqlParser.RULE_dateTimeExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1270;
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
	public inlineDataValueClause(): InlineDataValueClauseContext {
		let localctx: InlineDataValueClauseContext = new InlineDataValueClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, FlinkSqlParser.RULE_inlineDataValueClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1272;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1273;
			this.valuesDefinition();
			this.state = 1274;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 1275;
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
	public windoTVFClause(): WindoTVFClauseContext {
		let localctx: WindoTVFClauseContext = new WindoTVFClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, FlinkSqlParser.RULE_windoTVFClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1277;
			this.match(FlinkSqlParser.TABLE);
			this.state = 1278;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1279;
			this.windowTVFExression();
			this.state = 1280;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public windowTVFExression(): WindowTVFExressionContext {
		let localctx: WindowTVFExressionContext = new WindowTVFExressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, FlinkSqlParser.RULE_windowTVFExression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1282;
			this.windoTVFName();
			this.state = 1283;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1284;
			this.windowTVFParam();
			this.state = 1289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===325) {
				{
				{
				this.state = 1285;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1286;
				this.windowTVFParam();
				}
				}
				this.state = 1291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1292;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public windoTVFName(): WindoTVFNameContext {
		let localctx: WindoTVFNameContext = new WindoTVFNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, FlinkSqlParser.RULE_windoTVFName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1294;
			_la = this._input.LA(1);
			if(!(((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & 7) !== 0))) {
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
	public windowTVFParam(): WindowTVFParamContext {
		let localctx: WindowTVFParamContext = new WindowTVFParamContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, FlinkSqlParser.RULE_windowTVFParam);
		try {
			this.state = 1311;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1296;
				this.match(FlinkSqlParser.TABLE);
				this.state = 1297;
				this.timeAttrColumn();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1298;
				this.columnDescriptor();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1299;
				this.timeIntervalExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1300;
				this.match(FlinkSqlParser.DATA);
				this.state = 1301;
				this.match(FlinkSqlParser.DOUBLE_ARROW);
				this.state = 1302;
				this.match(FlinkSqlParser.TABLE);
				this.state = 1303;
				this.timeAttrColumn();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1304;
				this.match(FlinkSqlParser.TIMECOL);
				this.state = 1305;
				this.match(FlinkSqlParser.DOUBLE_ARROW);
				this.state = 1306;
				this.columnDescriptor();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1307;
				this.timeIntervalParamName();
				this.state = 1308;
				this.match(FlinkSqlParser.DOUBLE_ARROW);
				this.state = 1309;
				this.timeIntervalExpression();
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
	public timeIntervalParamName(): TimeIntervalParamNameContext {
		let localctx: TimeIntervalParamNameContext = new TimeIntervalParamNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, FlinkSqlParser.RULE_timeIntervalParamName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1313;
			_la = this._input.LA(1);
			if(!(_la===118 || ((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & 31) !== 0))) {
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
	public columnDescriptor(): ColumnDescriptorContext {
		let localctx: ColumnDescriptorContext = new ColumnDescriptorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, FlinkSqlParser.RULE_columnDescriptor);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1315;
			this.match(FlinkSqlParser.DESCRIPTOR);
			this.state = 1316;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1317;
			this.uid();
			this.state = 1318;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public joinCondition(): JoinConditionContext {
		let localctx: JoinConditionContext = new JoinConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, FlinkSqlParser.RULE_joinCondition);
		let _la: number;
		try {
			this.state = 1334;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 55:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1320;
				this.match(FlinkSqlParser.ON);
				this.state = 1321;
				this.booleanExpression(0);
				}
				break;
			case 143:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1322;
				this.match(FlinkSqlParser.USING);
				this.state = 1323;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1324;
				this.uid();
				this.state = 1329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===325) {
					{
					{
					this.state = 1325;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1326;
					this.uid();
					}
					}
					this.state = 1331;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1332;
				this.match(FlinkSqlParser.RR_BRACKET);
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
	public whereClause(): WhereClauseContext {
		let localctx: WhereClauseContext = new WhereClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, FlinkSqlParser.RULE_whereClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1336;
			this.match(FlinkSqlParser.WHERE);
			this.state = 1337;
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
	public groupByClause(): GroupByClauseContext {
		let localctx: GroupByClauseContext = new GroupByClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, FlinkSqlParser.RULE_groupByClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1339;
			this.match(FlinkSqlParser.GROUP);
			this.state = 1340;
			this.match(FlinkSqlParser.BY);
			this.state = 1341;
			this.groupItemDefinition();
			this.state = 1346;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 145, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1342;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1343;
					this.groupItemDefinition();
					}
					}
				}
				this.state = 1348;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 145, this._ctx);
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
	public groupItemDefinition(): GroupItemDefinitionContext {
		let localctx: GroupItemDefinitionContext = new GroupItemDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, FlinkSqlParser.RULE_groupItemDefinition);
		let _la: number;
		try {
			this.state = 1388;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1349;
				this.expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1350;
				this.groupWindowFunction();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1351;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1352;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1353;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1354;
				this.expression();
				this.state = 1359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===325) {
					{
					{
					this.state = 1355;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1356;
					this.expression();
					}
					}
					this.state = 1361;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1362;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1364;
				this.groupingSetsNotaionName();
				this.state = 1365;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1366;
				this.expression();
				this.state = 1371;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===325) {
					{
					{
					this.state = 1367;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1368;
					this.expression();
					}
					}
					this.state = 1373;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1374;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1376;
				this.groupingSets();
				this.state = 1377;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1378;
				this.groupItemDefinition();
				this.state = 1383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===325) {
					{
					{
					this.state = 1379;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1380;
					this.groupItemDefinition();
					}
					}
					this.state = 1385;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1386;
				this.match(FlinkSqlParser.RR_BRACKET);
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
	public groupingSets(): GroupingSetsContext {
		let localctx: GroupingSetsContext = new GroupingSetsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, FlinkSqlParser.RULE_groupingSets);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1390;
			this.match(FlinkSqlParser.GROUPING);
			this.state = 1391;
			this.match(FlinkSqlParser.SETS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupingSetsNotaionName(): GroupingSetsNotaionNameContext {
		let localctx: GroupingSetsNotaionNameContext = new GroupingSetsNotaionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, FlinkSqlParser.RULE_groupingSetsNotaionName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1393;
			_la = this._input.LA(1);
			if(!(_la===16 || _la===17)) {
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
	public groupWindowFunction(): GroupWindowFunctionContext {
		let localctx: GroupWindowFunctionContext = new GroupWindowFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, FlinkSqlParser.RULE_groupWindowFunction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1395;
			this.groupWindowFunctionName();
			this.state = 1396;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1397;
			this.timeAttrColumn();
			this.state = 1398;
			this.match(FlinkSqlParser.COMMA);
			this.state = 1399;
			this.timeIntervalExpression();
			this.state = 1400;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupWindowFunctionName(): GroupWindowFunctionNameContext {
		let localctx: GroupWindowFunctionNameContext = new GroupWindowFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, FlinkSqlParser.RULE_groupWindowFunctionName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1402;
			_la = this._input.LA(1);
			if(!(((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & 515) !== 0))) {
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
	public timeAttrColumn(): TimeAttrColumnContext {
		let localctx: TimeAttrColumnContext = new TimeAttrColumnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, FlinkSqlParser.RULE_timeAttrColumn);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1404;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 210, FlinkSqlParser.RULE_havingClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1406;
			this.match(FlinkSqlParser.HAVING);
			this.state = 1407;
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
	public windowClause(): WindowClauseContext {
		let localctx: WindowClauseContext = new WindowClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, FlinkSqlParser.RULE_windowClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1409;
			this.match(FlinkSqlParser.WINDOW);
			this.state = 1410;
			this.namedWindow();
			this.state = 1415;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 150, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1411;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1412;
					this.namedWindow();
					}
					}
				}
				this.state = 1417;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 150, this._ctx);
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
		this.enterRule(localctx, 214, FlinkSqlParser.RULE_namedWindow);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1418;
			localctx._name = this.errorCapturingIdentifier();
			this.state = 1419;
			this.match(FlinkSqlParser.AS);
			this.state = 1420;
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
		this.enterRule(localctx, 216, FlinkSqlParser.RULE_windowSpec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 4294967295) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 4294967167) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 4291015671) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 4294967295) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & 4294967295) !== 0) || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & 4294967295) !== 0) || ((((_la - 198)) & ~0x1F) === 0 && ((1 << (_la - 198)) & 4294934527) !== 0) || ((((_la - 230)) & ~0x1F) === 0 && ((1 << (_la - 230)) & 1031800543) !== 0) || ((((_la - 282)) & ~0x1F) === 0 && ((1 << (_la - 282)) & 266320383) !== 0) || ((((_la - 342)) & ~0x1F) === 0 && ((1 << (_la - 342)) & 19) !== 0)) {
				{
				this.state = 1422;
				localctx._name = this.errorCapturingIdentifier();
				}
			}

			this.state = 1425;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===60) {
				{
				this.state = 1426;
				this.partitionByClause();
				}
			}

			this.state = 1430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 1429;
				this.orderByCaluse();
				}
			}

			this.state = 1433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===61 || _la===62) {
				{
				this.state = 1432;
				this.windowFrame();
				}
			}

			this.state = 1435;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public matchRecognizeClause(): MatchRecognizeClauseContext {
		let localctx: MatchRecognizeClauseContext = new MatchRecognizeClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, FlinkSqlParser.RULE_matchRecognizeClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1437;
			this.match(FlinkSqlParser.MATCH_RECOGNIZE);
			this.state = 1438;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1440;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===60) {
				{
				this.state = 1439;
				this.partitionByClause();
				}
			}

			this.state = 1443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 1442;
				this.orderByCaluse();
				}
			}

			this.state = 1446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===275) {
				{
				this.state = 1445;
				this.measuresClause();
				}
			}

			this.state = 1449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8 || _la===277) {
				{
				this.state = 1448;
				this.outputMode();
				}
			}

			this.state = 1452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68) {
				{
				this.state = 1451;
				this.afterMatchStrategy();
				}
			}

			this.state = 1455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===276) {
				{
				this.state = 1454;
				this.patternDefination();
				}
			}

			this.state = 1457;
			this.patternVariablesDefination();
			this.state = 1458;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 1463;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				{
				this.state = 1460;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 161, this._ctx) ) {
				case 1:
					{
					this.state = 1459;
					this.match(FlinkSqlParser.AS);
					}
					break;
				}
				this.state = 1462;
				this.strictIdentifier();
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
	public orderByCaluse(): OrderByCaluseContext {
		let localctx: OrderByCaluseContext = new OrderByCaluseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, FlinkSqlParser.RULE_orderByCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1465;
			this.match(FlinkSqlParser.ORDER);
			this.state = 1466;
			this.match(FlinkSqlParser.BY);
			this.state = 1467;
			this.orderItemDefition();
			this.state = 1472;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 163, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1468;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1469;
					this.orderItemDefition();
					}
					}
				}
				this.state = 1474;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 163, this._ctx);
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
	public orderItemDefition(): OrderItemDefitionContext {
		let localctx: OrderItemDefitionContext = new OrderItemDefitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, FlinkSqlParser.RULE_orderItemDefition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1475;
			this.expression();
			this.state = 1477;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				{
				this.state = 1476;
				localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===35 || _la===36)) {
				    localctx._ordering = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this.state = 1481;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 165, this._ctx) ) {
			case 1:
				{
				this.state = 1479;
				this.match(FlinkSqlParser.NULLS);
				this.state = 1480;
				localctx._nullOrder = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===67 || _la===69)) {
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
	public limitClause(): LimitClauseContext {
		let localctx: LimitClauseContext = new LimitClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, FlinkSqlParser.RULE_limitClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1483;
			this.match(FlinkSqlParser.LIMIT);
			this.state = 1486;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 166, this._ctx) ) {
			case 1:
				{
				this.state = 1484;
				this.match(FlinkSqlParser.ALL);
				}
				break;
			case 2:
				{
				this.state = 1485;
				localctx._limit = this.expression();
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
	public partitionByClause(): PartitionByClauseContext {
		let localctx: PartitionByClauseContext = new PartitionByClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, FlinkSqlParser.RULE_partitionByClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1488;
			this.match(FlinkSqlParser.PARTITION);
			this.state = 1489;
			this.match(FlinkSqlParser.BY);
			this.state = 1490;
			this.expression();
			this.state = 1495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===325) {
				{
				{
				this.state = 1491;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1492;
				this.expression();
				}
				}
				this.state = 1497;
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
	public quantifiers(): QuantifiersContext {
		let localctx: QuantifiersContext = new QuantifiersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, FlinkSqlParser.RULE_quantifiers);
		try {
			this.state = 1514;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 1498;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 1499;
				this.match(FlinkSqlParser.ADD_SIGN);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 1500;
				this.match(FlinkSqlParser.QUESTION_MARK_SIGN);
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				{
				this.state = 1501;
				this.match(FlinkSqlParser.LB_BRACKET);
				this.state = 1502;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1503;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1504;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1505;
				this.match(FlinkSqlParser.RB_BRACKET);
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				{
				this.state = 1506;
				this.match(FlinkSqlParser.LB_BRACKET);
				this.state = 1507;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1508;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1509;
				this.match(FlinkSqlParser.RB_BRACKET);
				}
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				{
				this.state = 1510;
				this.match(FlinkSqlParser.LB_BRACKET);
				this.state = 1511;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1512;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1513;
				this.match(FlinkSqlParser.RB_BRACKET);
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
	public measuresClause(): MeasuresClauseContext {
		let localctx: MeasuresClauseContext = new MeasuresClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, FlinkSqlParser.RULE_measuresClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1516;
			this.match(FlinkSqlParser.MEASURES);
			this.state = 1517;
			this.projectItemDefinition();
			this.state = 1522;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===325) {
				{
				{
				this.state = 1518;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1519;
				this.projectItemDefinition();
				}
				}
				this.state = 1524;
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
	public patternDefination(): PatternDefinationContext {
		let localctx: PatternDefinationContext = new PatternDefinationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, FlinkSqlParser.RULE_patternDefination);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1525;
			this.match(FlinkSqlParser.PATTERN);
			this.state = 1526;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1527;
				this.patternVariable();
				}
				}
				this.state = 1530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===343 || _la===346);
			this.state = 1532;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 1534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===230) {
				{
				this.state = 1533;
				this.withinClause();
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
	public patternVariable(): PatternVariableContext {
		let localctx: PatternVariableContext = new PatternVariableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, FlinkSqlParser.RULE_patternVariable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1536;
			this.unquotedIdentifier();
			this.state = 1538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 323)) & ~0x1F) === 0 && ((1 << (_la - 323)) & 135681) !== 0)) {
				{
				this.state = 1537;
				this.quantifiers();
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
	public outputMode(): OutputModeContext {
		let localctx: OutputModeContext = new OutputModeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, FlinkSqlParser.RULE_outputMode);
		try {
			this.state = 1548;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 8:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1540;
				this.match(FlinkSqlParser.ALL);
				this.state = 1541;
				this.match(FlinkSqlParser.ROWS);
				this.state = 1542;
				this.match(FlinkSqlParser.PER);
				this.state = 1543;
				this.match(FlinkSqlParser.MATCH);
				}
				break;
			case 277:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1544;
				this.match(FlinkSqlParser.ONE);
				this.state = 1545;
				this.match(FlinkSqlParser.ROW);
				this.state = 1546;
				this.match(FlinkSqlParser.PER);
				this.state = 1547;
				this.match(FlinkSqlParser.MATCH);
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
	public afterMatchStrategy(): AfterMatchStrategyContext {
		let localctx: AfterMatchStrategyContext = new AfterMatchStrategyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, FlinkSqlParser.RULE_afterMatchStrategy);
		try {
			this.state = 1574;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1550;
				this.match(FlinkSqlParser.AFTER);
				this.state = 1551;
				this.match(FlinkSqlParser.MATCH);
				this.state = 1552;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1553;
				this.match(FlinkSqlParser.PAST);
				this.state = 1554;
				this.match(FlinkSqlParser.LAST);
				this.state = 1555;
				this.match(FlinkSqlParser.ROW);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1556;
				this.match(FlinkSqlParser.AFTER);
				this.state = 1557;
				this.match(FlinkSqlParser.MATCH);
				this.state = 1558;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1559;
				this.match(FlinkSqlParser.TO);
				this.state = 1560;
				this.match(FlinkSqlParser.NEXT);
				this.state = 1561;
				this.match(FlinkSqlParser.ROW);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1562;
				this.match(FlinkSqlParser.AFTER);
				this.state = 1563;
				this.match(FlinkSqlParser.MATCH);
				this.state = 1564;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1565;
				this.match(FlinkSqlParser.TO);
				this.state = 1566;
				this.match(FlinkSqlParser.LAST);
				this.state = 1567;
				this.unquotedIdentifier();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1568;
				this.match(FlinkSqlParser.AFTER);
				this.state = 1569;
				this.match(FlinkSqlParser.MATCH);
				this.state = 1570;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1571;
				this.match(FlinkSqlParser.TO);
				this.state = 1572;
				this.match(FlinkSqlParser.FIRST);
				this.state = 1573;
				this.unquotedIdentifier();
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
	public patternVariablesDefination(): PatternVariablesDefinationContext {
		let localctx: PatternVariablesDefinationContext = new PatternVariablesDefinationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 240, FlinkSqlParser.RULE_patternVariablesDefination);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1576;
			this.match(FlinkSqlParser.DEFINE);
			this.state = 1577;
			this.projectItemDefinition();
			this.state = 1582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===325) {
				{
				{
				this.state = 1578;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1579;
				this.projectItemDefinition();
				}
				}
				this.state = 1584;
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
	public windowFrame(): WindowFrameContext {
		let localctx: WindowFrameContext = new WindowFrameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, FlinkSqlParser.RULE_windowFrame);
		try {
			this.state = 1594;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 61:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1585;
				this.match(FlinkSqlParser.RANGE);
				this.state = 1586;
				this.match(FlinkSqlParser.BETWEEN);
				this.state = 1587;
				this.timeIntervalExpression();
				this.state = 1588;
				this.frameBound();
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1590;
				this.match(FlinkSqlParser.ROWS);
				this.state = 1591;
				this.match(FlinkSqlParser.BETWEEN);
				this.state = 1592;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1593;
				this.frameBound();
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
	public frameBound(): FrameBoundContext {
		let localctx: FrameBoundContext = new FrameBoundContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, FlinkSqlParser.RULE_frameBound);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1596;
			this.match(FlinkSqlParser.PRECEDING);
			this.state = 1597;
			this.match(FlinkSqlParser.AND);
			this.state = 1598;
			this.match(FlinkSqlParser.CURRENT);
			this.state = 1599;
			this.match(FlinkSqlParser.ROW);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public withinClause(): WithinClauseContext {
		let localctx: WithinClauseContext = new WithinClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, FlinkSqlParser.RULE_withinClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1601;
			this.match(FlinkSqlParser.WITHIN);
			this.state = 1602;
			this.timeIntervalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		let localctx: TimeIntervalExpressionContext = new TimeIntervalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, FlinkSqlParser.RULE_timeIntervalExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1604;
			this.match(FlinkSqlParser.INTERVAL);
			this.state = 1605;
			this.match(FlinkSqlParser.STRING_LITERAL);
			this.state = 1606;
			this.match(FlinkSqlParser.ID_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 250, FlinkSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1608;
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
		let _startState: number = 252;
		this.enterRecursionRule(localctx, 252, FlinkSqlParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1622;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				localctx = new LogicalNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1611;
				this.match(FlinkSqlParser.NOT);
				this.state = 1612;
				this.booleanExpression(5);
				}
				break;
			case 2:
				{
				localctx = new ExistsContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1613;
				this.match(FlinkSqlParser.EXISTS);
				this.state = 1614;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1615;
				this.queryStatement(0);
				this.state = 1616;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				{
				localctx = new PredicatedContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1618;
				this.valueExpression(0);
				this.state = 1620;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 177, this._ctx) ) {
				case 1:
					{
					this.state = 1619;
					this.predicate();
					}
					break;
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1632;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 180, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1630;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 179, this._ctx) ) {
					case 1:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1624;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1625;
						(localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.AND);
						this.state = 1626;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;
					case 2:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1627;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1628;
						(localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.OR);
						this.state = 1629;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1634;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 180, this._ctx);
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
		this.enterRule(localctx, 254, FlinkSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1718;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 193, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1635;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1638;
				localctx._kind = this.match(FlinkSqlParser.BETWEEN);
				this.state = 1639;
				localctx._lower = this.valueExpression(0);
				this.state = 1640;
				this.match(FlinkSqlParser.AND);
				this.state = 1641;
				localctx._upper = this.valueExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1644;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1643;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1646;
				localctx._kind = this.match(FlinkSqlParser.IN);
				this.state = 1647;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1648;
				this.expression();
				this.state = 1653;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===325) {
					{
					{
					this.state = 1649;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1650;
					this.expression();
					}
					}
					this.state = 1655;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1656;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1658;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1661;
				localctx._kind = this.match(FlinkSqlParser.IN);
				this.state = 1662;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1663;
				this.queryStatement(0);
				this.state = 1664;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1666;
				localctx._kind = this.match(FlinkSqlParser.EXISTS);
				this.state = 1667;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1668;
				this.queryStatement(0);
				this.state = 1669;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1672;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1671;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1674;
				localctx._kind = this.match(FlinkSqlParser.RLIKE);
				this.state = 1675;
				localctx._pattern = this.valueExpression(0);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1676;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1679;
				localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 1680;
				localctx._quantifier = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===8 || _la===9)) {
				    localctx._quantifier = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1694;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 188, this._ctx) ) {
				case 1:
					{
					this.state = 1681;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1682;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				case 2:
					{
					this.state = 1683;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1684;
					this.expression();
					this.state = 1689;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===325) {
						{
						{
						this.state = 1685;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1686;
						this.expression();
						}
						}
						this.state = 1691;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1692;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				}
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1696;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1699;
				localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 1700;
				localctx._pattern = this.valueExpression(0);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1701;
				this.match(FlinkSqlParser.IS);
				this.state = 1703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1702;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1705;
				localctx._kind = this.match(FlinkSqlParser.NULL);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1706;
				this.match(FlinkSqlParser.IS);
				this.state = 1708;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1707;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1710;
				localctx._kind = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===32 || _la===33)) {
				    localctx._kind = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1711;
				this.match(FlinkSqlParser.IS);
				this.state = 1713;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1712;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1715;
				localctx._kind = this.match(FlinkSqlParser.DISTINCT);
				this.state = 1716;
				this.match(FlinkSqlParser.FROM);
				this.state = 1717;
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
	// @RuleVersion(0)
	public likePredicate(): LikePredicateContext {
		let localctx: LikePredicateContext = new LikePredicateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 256, FlinkSqlParser.RULE_likePredicate);
		let _la: number;
		try {
			this.state = 1745;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 198, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1720;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1723;
				localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 1724;
				localctx._quantifier = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===8 || _la===9)) {
				    localctx._quantifier = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1738;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
				case 1:
					{
					this.state = 1725;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1726;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				case 2:
					{
					this.state = 1727;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1728;
					this.expression();
					this.state = 1733;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===325) {
						{
						{
						this.state = 1729;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1730;
						this.expression();
						}
						}
						this.state = 1735;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1736;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1741;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1740;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1743;
				localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 1744;
				localctx._pattern = this.valueExpression(0);
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
		let _startState: number = 258;
		this.enterRecursionRule(localctx, 258, FlinkSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1751;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				{
				localctx = new ValueExpressionDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1748;
				this.primaryExpression(0);
				}
				break;
			case 2:
				{
				localctx = new ArithmeticUnaryContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1749;
				(localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 314)) & ~0x1F) === 0 && ((1 << (_la - 314)) & 3145729) !== 0))) {
				    (localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1750;
				this.valueExpression(7);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1774;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 201, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1772;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 200, this._ctx) ) {
					case 1:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1753;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1754;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===132 || ((((_la - 332)) & ~0x1F) === 0 && ((1 << (_la - 332)) & 145) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1755;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
						}
						break;
					case 2:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1756;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1757;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 334)) & ~0x1F) === 0 && ((1 << (_la - 334)) & 11) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1758;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
						}
						break;
					case 3:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1759;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1760;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_AND_OP);
						this.state = 1761;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
						}
						break;
					case 4:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1762;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1763;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_XOR_OP);
						this.state = 1764;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;
					case 5:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1765;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1766;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_OR_OP);
						this.state = 1767;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;
					case 6:
						{
						localctx = new ComparisonContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1768;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1769;
						this.comparisonOperator();
						this.state = 1770;
						(localctx as ComparisonContext)._right = this.valueExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1776;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 201, this._ctx);
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
		let _startState: number = 260;
		this.enterRecursionRule(localctx, 260, FlinkSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1868;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				{
				localctx = new SearchedCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1778;
				this.match(FlinkSqlParser.CASE);
				this.state = 1780;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1779;
					this.whenClause();
					}
					}
					this.state = 1782;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===40);
				this.state = 1786;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===42) {
					{
					this.state = 1784;
					this.match(FlinkSqlParser.ELSE);
					this.state = 1785;
					(localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1788;
				this.match(FlinkSqlParser.END);
				}
				break;
			case 2:
				{
				localctx = new SimpleCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1790;
				this.match(FlinkSqlParser.CASE);
				this.state = 1791;
				(localctx as SimpleCaseContext)._value = this.expression();
				this.state = 1793;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1792;
					this.whenClause();
					}
					}
					this.state = 1795;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===40);
				this.state = 1799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===42) {
					{
					this.state = 1797;
					this.match(FlinkSqlParser.ELSE);
					this.state = 1798;
					(localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1801;
				this.match(FlinkSqlParser.END);
				}
				break;
			case 3:
				{
				localctx = new CastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1803;
				this.match(FlinkSqlParser.CAST);
				this.state = 1804;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1805;
				this.expression();
				this.state = 1806;
				this.match(FlinkSqlParser.AS);
				this.state = 1807;
				this.columnType();
				this.state = 1808;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				{
				localctx = new FirstContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1810;
				this.match(FlinkSqlParser.FIRST);
				this.state = 1811;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1812;
				this.expression();
				this.state = 1815;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===124) {
					{
					this.state = 1813;
					this.match(FlinkSqlParser.IGNORE);
					this.state = 1814;
					this.match(FlinkSqlParser.NULLS);
					}
				}

				this.state = 1817;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 5:
				{
				localctx = new LastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1819;
				this.match(FlinkSqlParser.LAST);
				this.state = 1820;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1821;
				this.expression();
				this.state = 1824;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===124) {
					{
					this.state = 1822;
					this.match(FlinkSqlParser.IGNORE);
					this.state = 1823;
					this.match(FlinkSqlParser.NULLS);
					}
				}

				this.state = 1826;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 6:
				{
				localctx = new PositionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1828;
				this.match(FlinkSqlParser.POSITION);
				this.state = 1829;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1830;
				(localctx as PositionContext)._substr = this.valueExpression(0);
				this.state = 1831;
				this.match(FlinkSqlParser.IN);
				this.state = 1832;
				(localctx as PositionContext)._str = this.valueExpression(0);
				this.state = 1833;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 7:
				{
				localctx = new ConstantDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1835;
				this.constant();
				}
				break;
			case 8:
				{
				localctx = new StarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1836;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;
			case 9:
				{
				localctx = new StarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1837;
				this.uid();
				this.state = 1838;
				this.match(FlinkSqlParser.DOT);
				this.state = 1839;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;
			case 10:
				{
				localctx = new SubqueryExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1841;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1842;
				this.queryStatement(0);
				this.state = 1843;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 11:
				{
				localctx = new FunctionCallContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1845;
				this.functionName();
				this.state = 1846;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1858;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294965247) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4231741311) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967247) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4294967295) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 4292870143) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & 1610725375) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & 4227858447) !== 0) || ((((_la - 288)) & ~0x1F) === 0 && ((1 << (_la - 288)) & 71270119) !== 0) || ((((_la - 321)) & ~0x1F) === 0 && ((1 << (_la - 321)) & 65038337) !== 0)) {
					{
					this.state = 1848;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
					case 1:
						{
						this.state = 1847;
						this.setQuantifier();
						}
						break;
					}
					this.state = 1850;
					this.expression();
					this.state = 1855;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===325) {
						{
						{
						this.state = 1851;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1852;
						this.expression();
						}
						}
						this.state = 1857;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1860;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 12:
				{
				localctx = new ColumnReferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1862;
				this.identifier();
				}
				break;
			case 13:
				{
				localctx = new DereferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1863;
				this.dereferenceDefinition();
				}
				break;
			case 14:
				{
				localctx = new ParenthesizedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1864;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1865;
				this.expression();
				this.state = 1866;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1877;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 212, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new SubscriptContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
					(localctx as SubscriptContext)._value = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_primaryExpression);
					this.state = 1870;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 1871;
					this.match(FlinkSqlParser.LS_BRACKET);
					this.state = 1872;
					(localctx as SubscriptContext)._index = this.valueExpression(0);
					this.state = 1873;
					this.match(FlinkSqlParser.RS_BRACKET);
					}
					}
				}
				this.state = 1879;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 212, this._ctx);
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
	public functionName(): FunctionNameContext {
		let localctx: FunctionNameContext = new FunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, FlinkSqlParser.RULE_functionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1880;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dereferenceDefinition(): DereferenceDefinitionContext {
		let localctx: DereferenceDefinitionContext = new DereferenceDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, FlinkSqlParser.RULE_dereferenceDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1882;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public correlationName(): CorrelationNameContext {
		let localctx: CorrelationNameContext = new CorrelationNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 266, FlinkSqlParser.RULE_correlationName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1884;
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
	public qualifiedName(): QualifiedNameContext {
		let localctx: QualifiedNameContext = new QualifiedNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 268, FlinkSqlParser.RULE_qualifiedName);
		try {
			this.state = 1888;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 213, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1886;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1887;
				this.dereferenceDefinition();
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
	public interval(): IntervalContext {
		let localctx: IntervalContext = new IntervalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 270, FlinkSqlParser.RULE_interval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1890;
			this.match(FlinkSqlParser.INTERVAL);
			this.state = 1893;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 214, this._ctx) ) {
			case 1:
				{
				this.state = 1891;
				this.errorCapturingMultiUnitsInterval();
				}
				break;
			case 2:
				{
				this.state = 1892;
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
		this.enterRule(localctx, 272, FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1895;
			this.multiUnitsInterval();
			this.state = 1897;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 215, this._ctx) ) {
			case 1:
				{
				this.state = 1896;
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
		this.enterRule(localctx, 274, FlinkSqlParser.RULE_multiUnitsInterval);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1902;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1899;
					this.intervalValue();
					this.state = 1900;
					this.identifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1904;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 216, this._ctx);
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
		this.enterRule(localctx, 276, FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1906;
			localctx._body = this.unitToUnitInterval();
			this.state = 1909;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				{
				this.state = 1907;
				localctx._error1 = this.multiUnitsInterval();
				}
				break;
			case 2:
				{
				this.state = 1908;
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
		this.enterRule(localctx, 278, FlinkSqlParser.RULE_unitToUnitInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1911;
			localctx._value = this.intervalValue();
			this.state = 1912;
			localctx._from_ = this.identifier();
			this.state = 1913;
			this.match(FlinkSqlParser.TO);
			this.state = 1914;
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
		this.enterRule(localctx, 280, FlinkSqlParser.RULE_intervalValue);
		let _la: number;
		try {
			this.state = 1921;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 334:
			case 335:
			case 343:
			case 344:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1917;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===334 || _la===335) {
					{
					this.state = 1916;
					_la = this._input.LA(1);
					if(!(_la===334 || _la===335)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 1919;
				_la = this._input.LA(1);
				if(!(_la===343 || _la===344)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 342:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1920;
				this.match(FlinkSqlParser.STRING_LITERAL);
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
	public columnAlias(): ColumnAliasContext {
		let localctx: ColumnAliasContext = new ColumnAliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 282, FlinkSqlParser.RULE_columnAlias);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1924;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 220, this._ctx) ) {
			case 1:
				{
				this.state = 1923;
				this.match(FlinkSqlParser.AS);
				}
				break;
			}
			this.state = 1926;
			this.strictIdentifier();
			this.state = 1928;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===321) {
				{
				this.state = 1927;
				this.identifierList();
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
	public tableAlias(): TableAliasContext {
		let localctx: TableAliasContext = new TableAliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 284, FlinkSqlParser.RULE_tableAlias);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1931;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				{
				this.state = 1930;
				this.match(FlinkSqlParser.AS);
				}
				break;
			}
			this.state = 1933;
			this.strictIdentifier();
			this.state = 1935;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 223, this._ctx) ) {
			case 1:
				{
				this.state = 1934;
				this.identifierList();
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
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		let localctx: ErrorCapturingIdentifierContext = new ErrorCapturingIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 286, FlinkSqlParser.RULE_errorCapturingIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1937;
			this.identifier();
			this.state = 1938;
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
		this.enterRule(localctx, 288, FlinkSqlParser.RULE_errorCapturingIdentifierExtra);
		let _la: number;
		try {
			this.state = 1947;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 131:
				localctx = new ErrorIdentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1942;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1940;
					this.match(FlinkSqlParser.MINUS);
					this.state = 1941;
					this.identifier();
					}
					}
					this.state = 1944;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===131);
				}
				break;
			case 7:
			case 321:
				localctx = new RealIdentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
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
	public identifierList(): IdentifierListContext {
		let localctx: IdentifierListContext = new IdentifierListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 290, FlinkSqlParser.RULE_identifierList);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1949;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1950;
			this.identifierSeq();
			this.state = 1951;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 292, FlinkSqlParser.RULE_identifierSeq);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1953;
			this.identifier();
			this.state = 1958;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===325) {
				{
				{
				this.state = 1954;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1955;
				this.identifier();
				}
				}
				this.state = 1960;
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
		this.enterRule(localctx, 294, FlinkSqlParser.RULE_identifier);
		try {
			this.state = 1963;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 227, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1961;
				this.strictIdentifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1962;
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
		this.enterRule(localctx, 296, FlinkSqlParser.RULE_strictIdentifier);
		try {
			this.state = 1969;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				localctx = new UnquotedIdentifierAlternativeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1965;
				this.unquotedIdentifier();
				}
				break;
			case 2:
				localctx = new QuotedIdentifierAlternativeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1966;
				this.quotedIdentifier();
				}
				break;
			case 3:
				localctx = new AnsiNonReservedKeywordsContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1967;
				this.ansiNonReserved();
				}
				break;
			case 4:
				localctx = new NonReservedKeywordsContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1968;
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
	public unquotedIdentifier(): UnquotedIdentifierContext {
		let localctx: UnquotedIdentifierContext = new UnquotedIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 298, FlinkSqlParser.RULE_unquotedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1971;
			_la = this._input.LA(1);
			if(!(_la===343 || _la===346)) {
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
	public quotedIdentifier(): QuotedIdentifierContext {
		let localctx: QuotedIdentifierContext = new QuotedIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 300, FlinkSqlParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1973;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 302, FlinkSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1975;
			this.match(FlinkSqlParser.WHEN);
			this.state = 1976;
			localctx._condition = this.expression();
			this.state = 1977;
			this.match(FlinkSqlParser.THEN);
			this.state = 1978;
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
	public uidList(): UidListContext {
		let localctx: UidListContext = new UidListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 304, FlinkSqlParser.RULE_uidList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1980;
			this.uid();
			this.state = 1985;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===325) {
				{
				{
				this.state = 1981;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1982;
				this.uid();
				}
				}
				this.state = 1987;
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
	public uid(): UidContext {
		let localctx: UidContext = new UidContext(this, this._ctx, this.state);
		this.enterRule(localctx, 306, FlinkSqlParser.RULE_uid);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1988;
			this.match(FlinkSqlParser.ID_LITERAL);
			this.state = 1992;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 230, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1989;
					this.match(FlinkSqlParser.DOT_ID);
					}
					}
				}
				this.state = 1994;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 230, this._ctx);
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
	public withOption(): WithOptionContext {
		let localctx: WithOptionContext = new WithOptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 308, FlinkSqlParser.RULE_withOption);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1995;
			this.match(FlinkSqlParser.WITH);
			this.state = 1996;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifNotExists(): IfNotExistsContext {
		let localctx: IfNotExistsContext = new IfNotExistsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 310, FlinkSqlParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1998;
			this.match(FlinkSqlParser.IF);
			this.state = 1999;
			this.match(FlinkSqlParser.NOT);
			this.state = 2000;
			this.match(FlinkSqlParser.EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifExists(): IfExistsContext {
		let localctx: IfExistsContext = new IfExistsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 312, FlinkSqlParser.RULE_ifExists);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2002;
			this.match(FlinkSqlParser.IF);
			this.state = 2003;
			this.match(FlinkSqlParser.EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 314, FlinkSqlParser.RULE_tablePropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2005;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 2006;
			this.tableProperty();
			this.state = 2011;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===325) {
				{
				{
				this.state = 2007;
				this.match(FlinkSqlParser.COMMA);
				this.state = 2008;
				this.tableProperty();
				}
				}
				this.state = 2013;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2014;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 316, FlinkSqlParser.RULE_tableProperty);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2016;
			localctx._key = this.tablePropertyKey();
			this.state = 2021;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32 || _la===33 || _la===310 || ((((_la - 342)) & ~0x1F) === 0 && ((1 << (_la - 342)) & 7) !== 0)) {
				{
				this.state = 2018;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===310) {
					{
					this.state = 2017;
					this.match(FlinkSqlParser.EQUAL_SYMBOL);
					}
				}

				this.state = 2020;
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
		this.enterRule(localctx, 318, FlinkSqlParser.RULE_tablePropertyKey);
		try {
			this.state = 2026;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 234, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2023;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2024;
				this.dereferenceDefinition();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2025;
				this.match(FlinkSqlParser.STRING_LITERAL);
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
		this.enterRule(localctx, 320, FlinkSqlParser.RULE_tablePropertyValue);
		try {
			this.state = 2032;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 343:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2028;
				this.match(FlinkSqlParser.DIG_LITERAL);
				}
				break;
			case 344:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2029;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case 32:
			case 33:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2030;
				this.booleanLiteral();
				}
				break;
			case 342:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2031;
				this.match(FlinkSqlParser.STRING_LITERAL);
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
	public logicalOperator(): LogicalOperatorContext {
		let localctx: LogicalOperatorContext = new LogicalOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 322, FlinkSqlParser.RULE_logicalOperator);
		try {
			this.state = 2040;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 23:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2034;
				this.match(FlinkSqlParser.AND);
				}
				break;
			case 316:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2035;
				this.match(FlinkSqlParser.BIT_AND_OP);
				this.state = 2036;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2037;
				this.match(FlinkSqlParser.OR);
				}
				break;
			case 315:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2038;
				this.match(FlinkSqlParser.BIT_OR_OP);
				this.state = 2039;
				this.match(FlinkSqlParser.BIT_OR_OP);
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
	public comparisonOperator(): ComparisonOperatorContext {
		let localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 324, FlinkSqlParser.RULE_comparisonOperator);
		try {
			this.state = 2056;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 237, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2042;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2043;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2044;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2045;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2046;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2047;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 2048;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2049;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2050;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2051;
				this.match(FlinkSqlParser.EXCLAMATION_SYMBOL);
				this.state = 2052;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2053;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2054;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				this.state = 2055;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
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
	public bitOperator(): BitOperatorContext {
		let localctx: BitOperatorContext = new BitOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 326, FlinkSqlParser.RULE_bitOperator);
		try {
			this.state = 2065;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 312:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2058;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2059;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;
			case 311:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2060;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 2061;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 316:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2062;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case 317:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2063;
				this.match(FlinkSqlParser.BIT_XOR_OP);
				}
				break;
			case 315:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2064;
				this.match(FlinkSqlParser.BIT_OR_OP);
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
	public mathOperator(): MathOperatorContext {
		let localctx: MathOperatorContext = new MathOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 328, FlinkSqlParser.RULE_mathOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2067;
			_la = this._input.LA(1);
			if(!(_la===132 || ((((_la - 332)) & ~0x1F) === 0 && ((1 << (_la - 332)) & 221) !== 0))) {
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
	public unaryOperator(): UnaryOperatorContext {
		let localctx: UnaryOperatorContext = new UnaryOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 330, FlinkSqlParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2069;
			_la = this._input.LA(1);
			if(!(_la===25 || ((((_la - 313)) & ~0x1F) === 0 && ((1 << (_la - 313)) & 6291459) !== 0))) {
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
	public fullColumnName(): FullColumnNameContext {
		let localctx: FullColumnNameContext = new FullColumnNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 332, FlinkSqlParser.RULE_fullColumnName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2071;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let localctx: ConstantContext = new ConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 334, FlinkSqlParser.RULE_constant);
		let _la: number;
		try {
			this.state = 2085;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 342:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2073;
				this.stringLiteral();
				}
				break;
			case 343:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2074;
				this.decimalLiteral();
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2075;
				this.interval();
				}
				break;
			case 334:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2076;
				this.match(FlinkSqlParser.HYPNEN_SIGN);
				this.state = 2077;
				this.decimalLiteral();
				}
				break;
			case 32:
			case 33:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2078;
				this.booleanLiteral();
				}
				break;
			case 344:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2079;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case 345:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2080;
				this.match(FlinkSqlParser.BIT_STRING);
				}
				break;
			case 25:
			case 308:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2082;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 2081;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 2084;
				this.match(FlinkSqlParser.NULL);
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
	public stringLiteral(): StringLiteralContext {
		let localctx: StringLiteralContext = new StringLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 336, FlinkSqlParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2087;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decimalLiteral(): DecimalLiteralContext {
		let localctx: DecimalLiteralContext = new DecimalLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 338, FlinkSqlParser.RULE_decimalLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2089;
			this.match(FlinkSqlParser.DIG_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanLiteral(): BooleanLiteralContext {
		let localctx: BooleanLiteralContext = new BooleanLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 340, FlinkSqlParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2091;
			_la = this._input.LA(1);
			if(!(_la===32 || _la===33)) {
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
	public setQuantifier(): SetQuantifierContext {
		let localctx: SetQuantifierContext = new SetQuantifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 342, FlinkSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2093;
			_la = this._input.LA(1);
			if(!(_la===8 || _la===10)) {
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
	public ansiNonReserved(): AnsiNonReservedContext {
		let localctx: AnsiNonReservedContext = new AnsiNonReservedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 344, FlinkSqlParser.RULE_ansiNonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2095;
			_la = this._input.LA(1);
			if(!(((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 1978716033) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4294709249) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 3418108729) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 4280287177) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 4294967167) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 4294836223) !== 0) || ((((_la - 200)) & ~0x1F) === 0 && ((1 << (_la - 200)) & 4294959087) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & 241172919) !== 0) || ((((_la - 282)) & ~0x1F) === 0 && ((1 << (_la - 282)) & 266320383) !== 0))) {
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
		this.enterRule(localctx, 346, FlinkSqlParser.RULE_strictNonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2097;
			_la = this._input.LA(1);
			if(!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 1787) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 15) !== 0) || _la===143 || _la===223)) {
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
		this.enterRule(localctx, 348, FlinkSqlParser.RULE_nonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2099;
			_la = this._input.LA(1);
			if(!(((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 4294967295) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 4294052223) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 4291015671) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 4294967175) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & 4294966783) !== 0) || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & 4294965247) !== 0) || ((((_la - 198)) & ~0x1F) === 0 && ((1 << (_la - 198)) & 4261380095) !== 0) || ((((_la - 230)) & ~0x1F) === 0 && ((1 << (_la - 230)) & 1031800543) !== 0) || ((((_la - 282)) & ~0x1F) === 0 && ((1 << (_la - 282)) & 266320383) !== 0))) {
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
		case 78:
			return this.queryStatement_sempred(localctx as QueryStatementContext, predIndex);
		case 83:
			return this.tableExpression_sempred(localctx as TableExpressionContext, predIndex);
		case 126:
			return this.booleanExpression_sempred(localctx as BooleanExpressionContext, predIndex);
		case 129:
			return this.valueExpression_sempred(localctx as ValueExpressionContext, predIndex);
		case 130:
			return this.primaryExpression_sempred(localctx as PrimaryExpressionContext, predIndex);
		}
		return true;
	}
	private queryStatement_sempred(localctx: QueryStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private tableExpression_sempred(localctx: TableExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 3);
		case 2:
			return this.precpred(this._ctx, 4);
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
			return this.precpred(this._ctx, 6);
		case 6:
			return this.precpred(this._ctx, 5);
		case 7:
			return this.precpred(this._ctx, 4);
		case 8:
			return this.precpred(this._ctx, 3);
		case 9:
			return this.precpred(this._ctx, 2);
		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private primaryExpression_sempred(localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,348,2102,2,0,7,0,
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
	7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,2,139,
	7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,2,145,
	7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,
	7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,
	7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,
	7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,
	7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,1,0,1,
	0,1,0,1,1,1,1,1,1,1,2,1,2,3,2,359,8,2,1,2,5,2,362,8,2,10,2,12,2,365,9,2,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,379,8,3,1,4,1,4,1,5,
	1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,397,8,5,1,6,1,6,
	3,6,401,8,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,3,8,410,8,8,1,8,1,8,1,8,3,8,415,
	8,8,1,9,1,9,1,9,5,9,420,8,9,10,9,12,9,423,9,9,1,10,1,10,1,11,1,11,3,11,
	429,8,11,1,11,1,11,3,11,433,8,11,1,12,1,12,1,12,1,12,1,12,5,12,440,8,12,
	10,12,12,12,443,9,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,
	454,8,13,1,13,3,13,457,8,13,1,13,1,13,1,13,1,13,1,13,3,13,464,8,13,1,13,
	1,13,1,13,1,13,1,13,1,13,3,13,472,8,13,1,13,1,13,1,13,3,13,477,8,13,1,13,
	3,13,480,8,13,1,14,1,14,1,14,1,14,1,14,3,14,487,8,14,1,15,1,15,1,15,1,15,
	1,16,1,16,3,16,495,8,16,1,17,1,17,3,17,499,8,17,1,18,1,18,1,18,1,18,1,19,
	1,19,1,19,1,19,1,19,1,19,3,19,511,8,19,1,19,1,19,1,19,1,19,1,19,1,19,3,
	19,519,8,19,1,19,1,19,3,19,523,8,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
	1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,544,8,
	19,1,20,1,20,3,20,548,8,20,1,21,1,21,3,21,552,8,21,1,21,1,21,3,21,556,8,
	21,1,21,1,21,1,21,1,21,1,21,5,21,563,8,21,10,21,12,21,566,9,21,1,21,1,21,
	3,21,570,8,21,1,21,1,21,3,21,574,8,21,1,21,1,21,3,21,578,8,21,1,21,1,21,
	3,21,582,8,21,1,21,3,21,585,8,21,1,21,1,21,3,21,589,8,21,1,22,1,22,1,22,
	3,22,594,8,22,1,22,1,22,1,22,1,22,3,22,600,8,22,1,23,1,23,1,23,3,23,605,
	8,23,1,24,1,24,1,24,3,24,610,8,24,1,24,3,24,613,8,24,1,25,1,25,3,25,617,
	8,25,1,26,1,26,1,26,1,26,5,26,623,8,26,10,26,12,26,626,9,26,1,26,1,26,1,
	27,1,27,1,27,3,27,633,8,27,1,27,1,27,3,27,637,8,27,1,27,1,27,3,27,641,8,
	27,1,27,1,27,3,27,645,8,27,1,27,1,27,3,27,649,8,27,1,27,1,27,3,27,653,8,
	27,1,27,1,27,3,27,657,8,27,1,27,1,27,3,27,661,8,27,1,27,1,27,3,27,665,8,
	27,3,27,667,8,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,3,29,677,8,29,
	1,29,1,29,1,30,1,30,1,30,1,30,3,30,685,8,30,1,30,1,30,1,31,1,31,1,31,1,
	31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,
	5,33,707,8,33,10,33,12,33,710,9,33,1,33,1,33,1,34,1,34,3,34,716,8,34,1,
	34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,3,36,731,
	8,36,1,36,3,36,734,8,36,1,37,1,37,1,38,1,38,1,38,1,38,3,38,742,8,38,1,39,
	1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,3,41,754,8,41,1,41,1,41,1,
	41,1,41,1,41,1,41,1,42,1,42,1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,45,
	1,45,1,45,1,45,5,45,776,8,45,10,45,12,45,779,9,45,1,45,1,45,1,46,1,46,1,
	46,1,46,1,46,1,46,5,46,789,8,46,10,46,12,46,792,9,46,1,46,1,46,3,46,796,
	8,46,1,47,1,47,3,47,800,8,47,1,48,1,48,1,48,1,48,5,48,806,8,48,10,48,12,
	48,809,9,48,1,48,3,48,812,8,48,1,49,1,49,1,50,1,50,1,50,1,50,3,50,820,8,
	50,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,3,52,830,8,52,1,52,1,52,3,52,
	834,8,52,1,52,1,52,1,53,1,53,3,53,840,8,53,1,53,1,53,3,53,844,8,53,1,53,
	1,53,3,53,848,8,53,1,53,3,53,851,8,53,1,53,1,53,1,53,1,54,1,54,1,54,1,54,
	3,54,860,8,54,1,54,1,54,3,54,864,8,54,1,54,1,54,1,54,1,54,1,54,3,54,871,
	8,54,1,54,3,54,874,8,54,1,55,1,55,1,55,1,55,1,55,1,55,5,55,882,8,55,10,
	55,12,55,885,9,55,1,56,1,56,1,57,1,57,1,57,1,57,1,57,3,57,894,8,57,1,58,
	1,58,1,58,1,58,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,3,60,909,8,
	60,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,3,62,920,8,62,1,62,1,62,
	3,62,924,8,62,1,62,1,62,1,62,1,62,1,62,3,62,931,8,62,1,63,1,63,1,63,3,63,
	936,8,63,1,63,1,63,1,64,1,64,3,64,942,8,64,1,64,1,64,3,64,946,8,64,1,64,
	1,64,1,65,1,65,1,65,3,65,953,8,65,1,65,1,65,3,65,957,8,65,1,66,1,66,3,66,
	961,8,66,1,66,1,66,3,66,965,8,66,1,66,1,66,1,67,1,67,1,67,1,67,3,67,973,
	8,67,1,67,1,67,3,67,977,8,67,1,67,1,67,1,68,3,68,982,8,68,1,68,1,68,1,68,
	3,68,987,8,68,1,69,1,69,1,69,1,69,3,69,993,8,69,1,69,3,69,996,8,69,1,69,
	1,69,3,69,1000,8,69,1,70,1,70,1,70,1,71,1,71,1,71,1,71,5,71,1009,8,71,10,
	71,12,71,1012,9,71,1,72,1,72,1,72,1,72,5,72,1018,8,72,10,72,12,72,1021,
	9,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,1,73,4,73,1031,8,73,11,73,12,73,
	1032,1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,74,5,74,1043,8,74,10,74,12,74,
	1046,9,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,3,74,1056,8,74,1,74,3,
	74,1059,8,74,1,74,1,74,3,74,1063,8,74,1,74,3,74,1066,8,74,3,74,1068,8,74,
	1,74,1,74,1,74,3,74,1073,8,74,1,74,1,74,3,74,1077,8,74,1,74,3,74,1080,8,
	74,5,74,1082,8,74,10,74,12,74,1085,9,74,1,75,1,75,1,75,1,75,5,75,1091,8,
	75,10,75,12,75,1094,9,75,1,76,1,76,1,76,1,76,1,76,5,76,1101,8,76,10,76,
	12,76,1104,9,76,1,76,1,76,3,76,1108,8,76,1,76,1,76,1,76,1,76,1,76,1,77,
	1,77,1,78,1,78,1,78,3,78,1120,8,78,1,78,3,78,1123,8,78,1,78,3,78,1126,8,
	78,1,78,3,78,1129,8,78,1,78,1,78,1,78,1,78,3,78,1135,8,78,1,79,1,79,3,79,
	1139,8,79,1,79,1,79,1,79,1,79,5,79,1145,8,79,10,79,12,79,1148,9,79,3,79,
	1150,8,79,1,80,1,80,1,80,3,80,1155,8,80,1,80,3,80,1158,8,80,3,80,1160,8,
	80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,3,81,1174,
	8,81,1,82,1,82,1,82,1,83,1,83,1,83,1,83,5,83,1183,8,83,10,83,12,83,1186,
	9,83,1,83,1,83,3,83,1190,8,83,1,83,1,83,1,83,1,83,1,83,1,83,3,83,1198,8,
	83,1,83,3,83,1201,8,83,1,83,3,83,1204,8,83,1,83,1,83,1,83,3,83,1209,8,83,
	5,83,1211,8,83,10,83,12,83,1214,9,83,1,84,1,84,3,84,1218,8,84,1,85,3,85,
	1221,8,85,1,85,1,85,3,85,1225,8,85,1,85,3,85,1228,8,85,1,85,3,85,1231,8,
	85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,5,85,1241,8,85,10,85,12,85,1244,
	9,85,1,85,1,85,1,85,1,85,3,85,1250,8,85,1,85,1,85,1,85,1,85,1,85,1,85,1,
	85,1,85,1,85,3,85,1261,8,85,1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,1,88,
	1,88,1,89,1,89,1,89,1,89,1,89,1,90,1,90,1,90,1,90,1,90,1,91,1,91,1,91,1,
	91,1,91,5,91,1288,8,91,10,91,12,91,1291,9,91,1,91,1,91,1,92,1,92,1,93,1,
	93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,3,93,
	1312,8,93,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,96,1,96,1,96,1,96,1,96,1,
	96,1,96,5,96,1328,8,96,10,96,12,96,1331,9,96,1,96,1,96,3,96,1335,8,96,1,
	97,1,97,1,97,1,98,1,98,1,98,1,98,1,98,5,98,1345,8,98,10,98,12,98,1348,9,
	98,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,5,99,1358,8,99,10,99,12,99,1361,
	9,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,5,99,1370,8,99,10,99,12,99,1373,
	9,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,5,99,1382,8,99,10,99,12,99,1385,
	9,99,1,99,1,99,3,99,1389,8,99,1,100,1,100,1,100,1,101,1,101,1,102,1,102,
	1,102,1,102,1,102,1,102,1,102,1,103,1,103,1,104,1,104,1,105,1,105,1,105,
	1,106,1,106,1,106,1,106,5,106,1414,8,106,10,106,12,106,1417,9,106,1,107,
	1,107,1,107,1,107,1,108,3,108,1424,8,108,1,108,1,108,3,108,1428,8,108,1,
	108,3,108,1431,8,108,1,108,3,108,1434,8,108,1,108,1,108,1,109,1,109,1,109,
	3,109,1441,8,109,1,109,3,109,1444,8,109,1,109,3,109,1447,8,109,1,109,3,
	109,1450,8,109,1,109,3,109,1453,8,109,1,109,3,109,1456,8,109,1,109,1,109,
	1,109,3,109,1461,8,109,1,109,3,109,1464,8,109,1,110,1,110,1,110,1,110,1,
	110,5,110,1471,8,110,10,110,12,110,1474,9,110,1,111,1,111,3,111,1478,8,
	111,1,111,1,111,3,111,1482,8,111,1,112,1,112,1,112,3,112,1487,8,112,1,113,
	1,113,1,113,1,113,1,113,5,113,1494,8,113,10,113,12,113,1497,9,113,1,114,
	1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,
	1,114,1,114,1,114,3,114,1515,8,114,1,115,1,115,1,115,1,115,5,115,1521,8,
	115,10,115,12,115,1524,9,115,1,116,1,116,1,116,4,116,1529,8,116,11,116,
	12,116,1530,1,116,1,116,3,116,1535,8,116,1,117,1,117,3,117,1539,8,117,1,
	118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,3,118,1549,8,118,1,119,1,
	119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,
	119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,3,119,1575,
	8,119,1,120,1,120,1,120,1,120,5,120,1581,8,120,10,120,12,120,1584,9,120,
	1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,3,121,1595,8,121,
	1,122,1,122,1,122,1,122,1,122,1,123,1,123,1,123,1,124,1,124,1,124,1,124,
	1,125,1,125,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,
	3,126,1621,8,126,3,126,1623,8,126,1,126,1,126,1,126,1,126,1,126,1,126,5,
	126,1631,8,126,10,126,12,126,1634,9,126,1,127,3,127,1637,8,127,1,127,1,
	127,1,127,1,127,1,127,1,127,3,127,1645,8,127,1,127,1,127,1,127,1,127,1,
	127,5,127,1652,8,127,10,127,12,127,1655,9,127,1,127,1,127,1,127,3,127,1660,
	8,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,
	3,127,1673,8,127,1,127,1,127,1,127,3,127,1678,8,127,1,127,1,127,1,127,1,
	127,1,127,1,127,1,127,1,127,5,127,1688,8,127,10,127,12,127,1691,9,127,1,
	127,1,127,3,127,1695,8,127,1,127,3,127,1698,8,127,1,127,1,127,1,127,1,127,
	3,127,1704,8,127,1,127,1,127,1,127,3,127,1709,8,127,1,127,1,127,1,127,3,
	127,1714,8,127,1,127,1,127,1,127,3,127,1719,8,127,1,128,3,128,1722,8,128,
	1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,5,128,1732,8,128,10,128,
	12,128,1735,9,128,1,128,1,128,3,128,1739,8,128,1,128,3,128,1742,8,128,1,
	128,1,128,3,128,1746,8,128,1,129,1,129,1,129,1,129,3,129,1752,8,129,1,129,
	1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,
	1,129,1,129,1,129,1,129,1,129,1,129,5,129,1773,8,129,10,129,12,129,1776,
	9,129,1,130,1,130,1,130,4,130,1781,8,130,11,130,12,130,1782,1,130,1,130,
	3,130,1787,8,130,1,130,1,130,1,130,1,130,1,130,4,130,1794,8,130,11,130,
	12,130,1795,1,130,1,130,3,130,1800,8,130,1,130,1,130,1,130,1,130,1,130,
	1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,3,130,1816,8,130,
	1,130,1,130,1,130,1,130,1,130,1,130,1,130,3,130,1825,8,130,1,130,1,130,
	1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,
	1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,3,130,1849,8,130,1,130,
	1,130,1,130,5,130,1854,8,130,10,130,12,130,1857,9,130,3,130,1859,8,130,
	1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,3,130,1869,8,130,1,130,
	1,130,1,130,1,130,1,130,5,130,1876,8,130,10,130,12,130,1879,9,130,1,131,
	1,131,1,132,1,132,1,133,1,133,1,134,1,134,3,134,1889,8,134,1,135,1,135,
	1,135,3,135,1894,8,135,1,136,1,136,3,136,1898,8,136,1,137,1,137,1,137,4,
	137,1903,8,137,11,137,12,137,1904,1,138,1,138,1,138,3,138,1910,8,138,1,
	139,1,139,1,139,1,139,1,139,1,140,3,140,1918,8,140,1,140,1,140,3,140,1922,
	8,140,1,141,3,141,1925,8,141,1,141,1,141,3,141,1929,8,141,1,142,3,142,1932,
	8,142,1,142,1,142,3,142,1936,8,142,1,143,1,143,1,143,1,144,1,144,4,144,
	1943,8,144,11,144,12,144,1944,1,144,3,144,1948,8,144,1,145,1,145,1,145,
	1,145,1,146,1,146,1,146,5,146,1957,8,146,10,146,12,146,1960,9,146,1,147,
	1,147,3,147,1964,8,147,1,148,1,148,1,148,1,148,3,148,1970,8,148,1,149,1,
	149,1,150,1,150,1,151,1,151,1,151,1,151,1,151,1,152,1,152,1,152,5,152,1984,
	8,152,10,152,12,152,1987,9,152,1,153,1,153,5,153,1991,8,153,10,153,12,153,
	1994,9,153,1,154,1,154,1,154,1,155,1,155,1,155,1,155,1,156,1,156,1,156,
	1,157,1,157,1,157,1,157,5,157,2010,8,157,10,157,12,157,2013,9,157,1,157,
	1,157,1,158,1,158,3,158,2019,8,158,1,158,3,158,2022,8,158,1,159,1,159,1,
	159,3,159,2027,8,159,1,160,1,160,1,160,1,160,3,160,2033,8,160,1,161,1,161,
	1,161,1,161,1,161,1,161,3,161,2041,8,161,1,162,1,162,1,162,1,162,1,162,
	1,162,1,162,1,162,1,162,1,162,1,162,1,162,1,162,1,162,3,162,2057,8,162,
	1,163,1,163,1,163,1,163,1,163,1,163,1,163,3,163,2066,8,163,1,164,1,164,
	1,165,1,165,1,166,1,166,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,
	1,167,3,167,2083,8,167,1,167,3,167,2086,8,167,1,168,1,168,1,169,1,169,1,
	170,1,170,1,171,1,171,1,172,1,172,1,173,1,173,1,174,1,174,1,174,1,1992,
	5,148,166,252,258,260,175,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
	34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,
	82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,
	122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,
	158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,
	194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,
	230,232,234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,
	266,268,270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,
	302,304,306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,
	338,340,342,344,346,348,0,42,2,0,36,36,84,84,1,0,87,89,2,0,193,193,253,
	255,2,0,192,192,239,239,2,0,5,5,24,24,2,0,74,74,76,76,2,0,6,6,82,82,1,0,
	246,250,3,0,300,300,305,305,308,308,6,0,282,282,285,289,293,297,301,301,
	303,303,309,309,1,0,70,71,2,0,290,292,298,299,2,0,283,283,304,304,1,0,233,
	234,3,0,8,8,102,102,236,236,1,0,233,235,2,0,167,167,237,238,1,0,241,243,
	2,0,184,184,186,186,2,0,83,83,140,140,2,0,105,106,108,108,2,0,48,49,51,
	52,1,0,264,266,2,0,118,118,268,272,1,0,16,17,2,0,264,265,273,273,1,0,35,
	36,2,0,67,67,69,69,1,0,8,9,1,0,32,33,2,0,314,314,334,335,4,0,132,132,332,
	332,336,336,339,339,2,0,334,335,337,337,1,0,334,335,1,0,343,344,2,0,343,
	343,346,346,4,0,132,132,332,332,334,336,338,339,3,0,25,25,313,314,334,335,
	2,0,8,8,10,10,32,0,6,6,13,17,20,21,26,30,32,32,34,36,38,38,50,50,56,69,
	72,72,75,77,80,81,84,85,90,93,95,97,99,99,102,104,107,107,110,124,128,142,
	144,184,186,203,205,212,214,234,236,237,239,240,253,254,257,259,282,290,
	293,295,297,302,304,309,6,0,45,46,48,52,54,55,105,108,143,143,223,223,23,
	0,4,42,44,44,47,47,53,53,56,70,72,77,80,81,83,85,90,99,102,104,109,142,
	144,176,178,212,214,222,224,234,236,237,239,240,253,254,256,259,282,290,
	293,295,297,302,304,309,2278,0,350,1,0,0,0,2,353,1,0,0,0,4,363,1,0,0,0,
	6,378,1,0,0,0,8,380,1,0,0,0,10,396,1,0,0,0,12,400,1,0,0,0,14,402,1,0,0,
	0,16,405,1,0,0,0,18,416,1,0,0,0,20,424,1,0,0,0,22,432,1,0,0,0,24,434,1,
	0,0,0,26,479,1,0,0,0,28,481,1,0,0,0,30,488,1,0,0,0,32,492,1,0,0,0,34,496,
	1,0,0,0,36,500,1,0,0,0,38,543,1,0,0,0,40,547,1,0,0,0,42,549,1,0,0,0,44,
	590,1,0,0,0,46,604,1,0,0,0,48,606,1,0,0,0,50,616,1,0,0,0,52,618,1,0,0,0,
	54,666,1,0,0,0,56,668,1,0,0,0,58,672,1,0,0,0,60,680,1,0,0,0,62,688,1,0,
	0,0,64,692,1,0,0,0,66,699,1,0,0,0,68,715,1,0,0,0,70,722,1,0,0,0,72,725,
	1,0,0,0,74,735,1,0,0,0,76,737,1,0,0,0,78,743,1,0,0,0,80,745,1,0,0,0,82,
	753,1,0,0,0,84,761,1,0,0,0,86,763,1,0,0,0,88,767,1,0,0,0,90,771,1,0,0,0,
	92,795,1,0,0,0,94,799,1,0,0,0,96,801,1,0,0,0,98,813,1,0,0,0,100,819,1,0,
	0,0,102,821,1,0,0,0,104,826,1,0,0,0,106,837,1,0,0,0,108,855,1,0,0,0,110,
	875,1,0,0,0,112,886,1,0,0,0,114,888,1,0,0,0,116,895,1,0,0,0,118,899,1,0,
	0,0,120,902,1,0,0,0,122,910,1,0,0,0,124,915,1,0,0,0,126,932,1,0,0,0,128,
	939,1,0,0,0,130,949,1,0,0,0,132,958,1,0,0,0,134,968,1,0,0,0,136,986,1,0,
	0,0,138,988,1,0,0,0,140,1001,1,0,0,0,142,1004,1,0,0,0,144,1013,1,0,0,0,
	146,1024,1,0,0,0,148,1067,1,0,0,0,150,1086,1,0,0,0,152,1095,1,0,0,0,154,
	1114,1,0,0,0,156,1134,1,0,0,0,158,1136,1,0,0,0,160,1159,1,0,0,0,162,1173,
	1,0,0,0,164,1175,1,0,0,0,166,1189,1,0,0,0,168,1215,1,0,0,0,170,1260,1,0,
	0,0,172,1262,1,0,0,0,174,1264,1,0,0,0,176,1270,1,0,0,0,178,1272,1,0,0,0,
	180,1277,1,0,0,0,182,1282,1,0,0,0,184,1294,1,0,0,0,186,1311,1,0,0,0,188,
	1313,1,0,0,0,190,1315,1,0,0,0,192,1334,1,0,0,0,194,1336,1,0,0,0,196,1339,
	1,0,0,0,198,1388,1,0,0,0,200,1390,1,0,0,0,202,1393,1,0,0,0,204,1395,1,0,
	0,0,206,1402,1,0,0,0,208,1404,1,0,0,0,210,1406,1,0,0,0,212,1409,1,0,0,0,
	214,1418,1,0,0,0,216,1423,1,0,0,0,218,1437,1,0,0,0,220,1465,1,0,0,0,222,
	1475,1,0,0,0,224,1483,1,0,0,0,226,1488,1,0,0,0,228,1514,1,0,0,0,230,1516,
	1,0,0,0,232,1525,1,0,0,0,234,1536,1,0,0,0,236,1548,1,0,0,0,238,1574,1,0,
	0,0,240,1576,1,0,0,0,242,1594,1,0,0,0,244,1596,1,0,0,0,246,1601,1,0,0,0,
	248,1604,1,0,0,0,250,1608,1,0,0,0,252,1622,1,0,0,0,254,1718,1,0,0,0,256,
	1745,1,0,0,0,258,1751,1,0,0,0,260,1868,1,0,0,0,262,1880,1,0,0,0,264,1882,
	1,0,0,0,266,1884,1,0,0,0,268,1888,1,0,0,0,270,1890,1,0,0,0,272,1895,1,0,
	0,0,274,1902,1,0,0,0,276,1906,1,0,0,0,278,1911,1,0,0,0,280,1921,1,0,0,0,
	282,1924,1,0,0,0,284,1931,1,0,0,0,286,1937,1,0,0,0,288,1947,1,0,0,0,290,
	1949,1,0,0,0,292,1953,1,0,0,0,294,1963,1,0,0,0,296,1969,1,0,0,0,298,1971,
	1,0,0,0,300,1973,1,0,0,0,302,1975,1,0,0,0,304,1980,1,0,0,0,306,1988,1,0,
	0,0,308,1995,1,0,0,0,310,1998,1,0,0,0,312,2002,1,0,0,0,314,2005,1,0,0,0,
	316,2016,1,0,0,0,318,2026,1,0,0,0,320,2032,1,0,0,0,322,2040,1,0,0,0,324,
	2056,1,0,0,0,326,2065,1,0,0,0,328,2067,1,0,0,0,330,2069,1,0,0,0,332,2071,
	1,0,0,0,334,2085,1,0,0,0,336,2087,1,0,0,0,338,2089,1,0,0,0,340,2091,1,0,
	0,0,342,2093,1,0,0,0,344,2095,1,0,0,0,346,2097,1,0,0,0,348,2099,1,0,0,0,
	350,351,3,2,1,0,351,352,5,0,0,1,352,1,1,0,0,0,353,354,3,4,2,0,354,355,5,
	0,0,1,355,3,1,0,0,0,356,358,3,6,3,0,357,359,5,326,0,0,358,357,1,0,0,0,358,
	359,1,0,0,0,359,362,1,0,0,0,360,362,3,8,4,0,361,356,1,0,0,0,361,360,1,0,
	0,0,362,365,1,0,0,0,363,361,1,0,0,0,363,364,1,0,0,0,364,5,1,0,0,0,365,363,
	1,0,0,0,366,379,3,10,5,0,367,379,3,12,6,0,368,379,3,14,7,0,369,379,3,16,
	8,0,370,379,3,22,11,0,371,379,3,26,13,0,372,379,3,28,14,0,373,379,3,30,
	15,0,374,379,3,32,16,0,375,379,3,34,17,0,376,379,3,36,18,0,377,379,3,38,
	19,0,378,366,1,0,0,0,378,367,1,0,0,0,378,368,1,0,0,0,378,369,1,0,0,0,378,
	370,1,0,0,0,378,371,1,0,0,0,378,372,1,0,0,0,378,373,1,0,0,0,378,374,1,0,
	0,0,378,375,1,0,0,0,378,376,1,0,0,0,378,377,1,0,0,0,379,7,1,0,0,0,380,381,
	5,326,0,0,381,9,1,0,0,0,382,397,3,40,20,0,383,397,3,104,52,0,384,397,3,
	106,53,0,385,397,3,108,54,0,386,397,3,102,51,0,387,397,3,114,57,0,388,397,
	3,120,60,0,389,397,3,122,61,0,390,397,3,124,62,0,391,397,3,126,63,0,392,
	397,3,128,64,0,393,397,3,130,65,0,394,397,3,132,66,0,395,397,3,134,67,0,
	396,382,1,0,0,0,396,383,1,0,0,0,396,384,1,0,0,0,396,385,1,0,0,0,396,386,
	1,0,0,0,396,387,1,0,0,0,396,388,1,0,0,0,396,389,1,0,0,0,396,390,1,0,0,0,
	396,391,1,0,0,0,396,392,1,0,0,0,396,393,1,0,0,0,396,394,1,0,0,0,396,395,
	1,0,0,0,397,11,1,0,0,0,398,401,3,148,74,0,399,401,3,136,68,0,400,398,1,
	0,0,0,400,399,1,0,0,0,401,13,1,0,0,0,402,403,7,0,0,0,403,404,3,306,153,
	0,404,15,1,0,0,0,405,409,5,85,0,0,406,410,3,18,9,0,407,408,5,86,0,0,408,
	410,5,37,0,0,409,406,1,0,0,0,409,407,1,0,0,0,409,410,1,0,0,0,410,414,1,
	0,0,0,411,415,3,12,6,0,412,415,3,138,69,0,413,415,3,146,73,0,414,411,1,
	0,0,0,414,412,1,0,0,0,414,413,1,0,0,0,415,17,1,0,0,0,416,421,3,20,10,0,
	417,418,5,325,0,0,418,420,3,20,10,0,419,417,1,0,0,0,420,423,1,0,0,0,421,
	419,1,0,0,0,421,422,1,0,0,0,422,19,1,0,0,0,423,421,1,0,0,0,424,425,7,1,
	0,0,425,21,1,0,0,0,426,428,5,99,0,0,427,429,5,239,0,0,428,427,1,0,0,0,428,
	429,1,0,0,0,429,430,1,0,0,0,430,433,3,306,153,0,431,433,3,24,12,0,432,426,
	1,0,0,0,432,431,1,0,0,0,433,23,1,0,0,0,434,435,5,99,0,0,435,436,5,101,0,
	0,436,441,3,306,153,0,437,438,5,325,0,0,438,440,3,306,153,0,439,437,1,0,
	0,0,440,443,1,0,0,0,441,439,1,0,0,0,441,442,1,0,0,0,442,25,1,0,0,0,443,
	441,1,0,0,0,444,445,5,95,0,0,445,480,7,2,0,0,446,447,5,95,0,0,447,448,5,
	66,0,0,448,480,7,3,0,0,449,450,5,95,0,0,450,453,5,96,0,0,451,452,7,4,0,
	0,452,454,3,306,153,0,453,451,1,0,0,0,453,454,1,0,0,0,454,456,1,0,0,0,455,
	457,3,256,128,0,456,455,1,0,0,0,456,457,1,0,0,0,457,480,1,0,0,0,458,459,
	5,95,0,0,459,460,5,97,0,0,460,461,7,4,0,0,461,463,3,306,153,0,462,464,3,
	256,128,0,463,462,1,0,0,0,463,464,1,0,0,0,464,480,1,0,0,0,465,466,5,95,
	0,0,466,467,5,73,0,0,467,468,7,5,0,0,468,480,3,306,153,0,469,471,5,95,0,
	0,470,472,5,53,0,0,471,470,1,0,0,0,471,472,1,0,0,0,472,473,1,0,0,0,473,
	480,5,103,0,0,474,476,5,95,0,0,475,477,5,52,0,0,476,475,1,0,0,0,476,477,
	1,0,0,0,477,478,1,0,0,0,478,480,5,101,0,0,479,444,1,0,0,0,479,446,1,0,0,
	0,479,449,1,0,0,0,479,458,1,0,0,0,479,465,1,0,0,0,479,469,1,0,0,0,479,474,
	1,0,0,0,480,27,1,0,0,0,481,482,5,212,0,0,482,483,5,100,0,0,483,486,3,306,
	153,0,484,485,5,70,0,0,485,487,3,314,157,0,486,484,1,0,0,0,486,487,1,0,
	0,0,487,29,1,0,0,0,488,489,5,213,0,0,489,490,5,100,0,0,490,491,3,306,153,
	0,491,31,1,0,0,0,492,494,5,116,0,0,493,495,3,316,158,0,494,493,1,0,0,0,
	494,495,1,0,0,0,495,33,1,0,0,0,496,498,5,117,0,0,497,499,3,318,159,0,498,
	497,1,0,0,0,498,499,1,0,0,0,499,35,1,0,0,0,500,501,7,6,0,0,501,502,5,244,
	0,0,502,503,3,112,56,0,503,37,1,0,0,0,504,505,5,6,0,0,505,506,5,244,0,0,
	506,507,5,70,0,0,507,510,5,347,0,0,508,509,5,7,0,0,509,511,3,306,153,0,
	510,508,1,0,0,0,510,511,1,0,0,0,511,544,1,0,0,0,512,513,5,6,0,0,513,514,
	5,245,0,0,514,515,5,70,0,0,515,518,5,347,0,0,516,517,5,7,0,0,517,519,3,
	306,153,0,518,516,1,0,0,0,518,519,1,0,0,0,519,522,1,0,0,0,520,521,5,113,
	0,0,521,523,3,306,153,0,522,520,1,0,0,0,522,523,1,0,0,0,523,544,1,0,0,0,
	524,525,5,6,0,0,525,526,7,7,0,0,526,527,5,70,0,0,527,528,5,347,0,0,528,
	529,5,113,0,0,529,544,3,306,153,0,530,531,5,6,0,0,531,532,5,251,0,0,532,
	544,5,347,0,0,533,534,5,6,0,0,534,535,5,252,0,0,535,536,5,245,0,0,536,537,
	5,70,0,0,537,538,5,347,0,0,538,539,5,113,0,0,539,540,3,306,153,0,540,541,
	5,257,0,0,541,542,3,306,153,0,542,544,1,0,0,0,543,504,1,0,0,0,543,512,1,
	0,0,0,543,524,1,0,0,0,543,530,1,0,0,0,543,533,1,0,0,0,544,39,1,0,0,0,545,
	548,3,42,21,0,546,548,3,44,22,0,547,545,1,0,0,0,547,546,1,0,0,0,548,41,
	1,0,0,0,549,551,5,73,0,0,550,552,5,166,0,0,551,550,1,0,0,0,551,552,1,0,
	0,0,552,553,1,0,0,0,553,555,5,74,0,0,554,556,3,310,155,0,555,554,1,0,0,
	0,555,556,1,0,0,0,556,557,1,0,0,0,557,558,3,98,49,0,558,559,5,321,0,0,559,
	564,3,46,23,0,560,561,5,325,0,0,561,563,3,46,23,0,562,560,1,0,0,0,563,566,
	1,0,0,0,564,562,1,0,0,0,564,565,1,0,0,0,565,569,1,0,0,0,566,564,1,0,0,0,
	567,568,5,325,0,0,568,570,3,80,40,0,569,567,1,0,0,0,569,570,1,0,0,0,570,
	573,1,0,0,0,571,572,5,325,0,0,572,574,3,82,41,0,573,571,1,0,0,0,573,574,
	1,0,0,0,574,577,1,0,0,0,575,576,5,325,0,0,576,578,3,86,43,0,577,575,1,0,
	0,0,577,578,1,0,0,0,578,579,1,0,0,0,579,581,5,322,0,0,580,582,3,70,35,0,
	581,580,1,0,0,0,581,582,1,0,0,0,582,584,1,0,0,0,583,585,3,88,44,0,584,583,
	1,0,0,0,584,585,1,0,0,0,585,586,1,0,0,0,586,588,3,308,154,0,587,589,3,96,
	48,0,588,587,1,0,0,0,588,589,1,0,0,0,589,43,1,0,0,0,590,591,5,73,0,0,591,
	593,5,74,0,0,592,594,3,310,155,0,593,592,1,0,0,0,593,594,1,0,0,0,594,595,
	1,0,0,0,595,596,3,98,49,0,596,599,3,308,154,0,597,598,5,7,0,0,598,600,3,
	148,74,0,599,597,1,0,0,0,599,600,1,0,0,0,600,45,1,0,0,0,601,605,3,48,24,
	0,602,605,3,72,36,0,603,605,3,76,38,0,604,601,1,0,0,0,604,602,1,0,0,0,604,
	603,1,0,0,0,605,47,1,0,0,0,606,607,3,50,25,0,607,609,3,54,27,0,608,610,
	3,68,34,0,609,608,1,0,0,0,609,610,1,0,0,0,610,612,1,0,0,0,611,613,3,70,
	35,0,612,611,1,0,0,0,612,613,1,0,0,0,613,49,1,0,0,0,614,617,3,306,153,0,
	615,617,3,250,125,0,616,614,1,0,0,0,616,615,1,0,0,0,617,51,1,0,0,0,618,
	619,5,321,0,0,619,624,3,50,25,0,620,621,5,325,0,0,621,623,3,50,25,0,622,
	620,1,0,0,0,623,626,1,0,0,0,624,622,1,0,0,0,624,625,1,0,0,0,625,627,1,0,
	0,0,626,624,1,0,0,0,627,628,5,322,0,0,628,53,1,0,0,0,629,667,7,8,0,0,630,
	632,7,9,0,0,631,633,3,56,28,0,632,631,1,0,0,0,632,633,1,0,0,0,633,667,1,
	0,0,0,634,636,5,302,0,0,635,637,3,56,28,0,636,635,1,0,0,0,636,637,1,0,0,
	0,637,644,1,0,0,0,638,640,7,10,0,0,639,641,5,224,0,0,640,639,1,0,0,0,640,
	641,1,0,0,0,641,642,1,0,0,0,642,643,5,301,0,0,643,645,5,263,0,0,644,638,
	1,0,0,0,644,645,1,0,0,0,645,667,1,0,0,0,646,648,7,11,0,0,647,649,3,58,29,
	0,648,647,1,0,0,0,648,649,1,0,0,0,649,667,1,0,0,0,650,652,7,12,0,0,651,
	653,3,62,31,0,652,651,1,0,0,0,652,653,1,0,0,0,653,667,1,0,0,0,654,656,5,
	284,0,0,655,657,3,64,32,0,656,655,1,0,0,0,656,657,1,0,0,0,657,667,1,0,0,
	0,658,660,5,307,0,0,659,661,3,66,33,0,660,659,1,0,0,0,660,661,1,0,0,0,661,
	667,1,0,0,0,662,664,5,306,0,0,663,665,3,60,30,0,664,663,1,0,0,0,664,665,
	1,0,0,0,665,667,1,0,0,0,666,629,1,0,0,0,666,630,1,0,0,0,666,634,1,0,0,0,
	666,646,1,0,0,0,666,650,1,0,0,0,666,654,1,0,0,0,666,658,1,0,0,0,666,662,
	1,0,0,0,667,55,1,0,0,0,668,669,5,321,0,0,669,670,3,338,169,0,670,671,5,
	322,0,0,671,57,1,0,0,0,672,673,5,321,0,0,673,676,3,338,169,0,674,675,5,
	325,0,0,675,677,3,338,169,0,676,674,1,0,0,0,676,677,1,0,0,0,677,678,1,0,
	0,0,678,679,5,322,0,0,679,59,1,0,0,0,680,681,5,321,0,0,681,684,3,336,168,
	0,682,683,5,325,0,0,683,685,3,336,168,0,684,682,1,0,0,0,684,685,1,0,0,0,
	685,686,1,0,0,0,686,687,5,322,0,0,687,61,1,0,0,0,688,689,5,312,0,0,689,
	690,3,54,27,0,690,691,5,311,0,0,691,63,1,0,0,0,692,693,5,312,0,0,693,694,
	3,54,27,0,694,695,5,325,0,0,695,696,3,54,27,0,696,697,1,0,0,0,697,698,5,
	311,0,0,698,65,1,0,0,0,699,700,5,312,0,0,700,701,3,50,25,0,701,708,3,54,
	27,0,702,703,5,325,0,0,703,704,3,50,25,0,704,705,3,54,27,0,705,707,1,0,
	0,0,706,702,1,0,0,0,707,710,1,0,0,0,708,706,1,0,0,0,708,709,1,0,0,0,709,
	711,1,0,0,0,710,708,1,0,0,0,711,712,5,311,0,0,712,67,1,0,0,0,713,714,5,
	185,0,0,714,716,3,84,42,0,715,713,1,0,0,0,715,716,1,0,0,0,716,717,1,0,0,
	0,717,718,5,256,0,0,718,719,5,257,0,0,719,720,5,25,0,0,720,721,5,260,0,
	0,721,69,1,0,0,0,722,723,5,115,0,0,723,724,5,342,0,0,724,71,1,0,0,0,725,
	726,3,50,25,0,726,727,3,54,27,0,727,730,5,261,0,0,728,729,5,5,0,0,729,731,
	3,74,37,0,730,728,1,0,0,0,730,731,1,0,0,0,731,733,1,0,0,0,732,734,5,262,
	0,0,733,732,1,0,0,0,733,734,1,0,0,0,734,73,1,0,0,0,735,736,5,342,0,0,736,
	75,1,0,0,0,737,738,3,50,25,0,738,739,5,7,0,0,739,741,3,78,39,0,740,742,
	3,70,35,0,741,740,1,0,0,0,741,742,1,0,0,0,742,77,1,0,0,0,743,744,3,250,
	125,0,744,79,1,0,0,0,745,746,5,226,0,0,746,747,5,37,0,0,747,748,3,250,125,
	0,748,749,5,7,0,0,749,750,3,250,125,0,750,81,1,0,0,0,751,752,5,185,0,0,
	752,754,3,84,42,0,753,751,1,0,0,0,753,754,1,0,0,0,754,755,1,0,0,0,755,756,
	5,256,0,0,756,757,5,257,0,0,757,758,3,52,26,0,758,759,5,25,0,0,759,760,
	5,260,0,0,760,83,1,0,0,0,761,762,3,294,147,0,762,85,1,0,0,0,763,764,5,258,
	0,0,764,765,5,37,0,0,765,766,5,259,0,0,766,87,1,0,0,0,767,768,5,200,0,0,
	768,769,5,13,0,0,769,770,3,90,45,0,770,89,1,0,0,0,771,772,5,321,0,0,772,
	777,3,92,46,0,773,774,5,325,0,0,774,776,3,92,46,0,775,773,1,0,0,0,776,779,
	1,0,0,0,777,775,1,0,0,0,777,778,1,0,0,0,778,780,1,0,0,0,779,777,1,0,0,0,
	780,781,5,322,0,0,781,91,1,0,0,0,782,796,3,268,134,0,783,784,3,294,147,
	0,784,785,5,321,0,0,785,790,3,94,47,0,786,787,5,325,0,0,787,789,3,94,47,
	0,788,786,1,0,0,0,789,792,1,0,0,0,790,788,1,0,0,0,790,791,1,0,0,0,791,793,
	1,0,0,0,792,790,1,0,0,0,793,794,5,322,0,0,794,796,1,0,0,0,795,782,1,0,0,
	0,795,783,1,0,0,0,796,93,1,0,0,0,797,800,3,268,134,0,798,800,3,334,167,
	0,799,797,1,0,0,0,799,798,1,0,0,0,800,95,1,0,0,0,801,802,5,29,0,0,802,811,
	3,98,49,0,803,807,5,321,0,0,804,806,3,100,50,0,805,804,1,0,0,0,806,809,
	1,0,0,0,807,805,1,0,0,0,807,808,1,0,0,0,808,810,1,0,0,0,809,807,1,0,0,0,
	810,812,5,322,0,0,811,803,1,0,0,0,811,812,1,0,0,0,812,97,1,0,0,0,813,814,
	3,306,153,0,814,99,1,0,0,0,815,816,7,13,0,0,816,820,7,14,0,0,817,818,7,
	15,0,0,818,820,7,16,0,0,819,815,1,0,0,0,819,817,1,0,0,0,820,101,1,0,0,0,
	821,822,5,73,0,0,822,823,5,239,0,0,823,824,3,306,153,0,824,825,3,308,154,
	0,825,103,1,0,0,0,826,827,5,73,0,0,827,829,5,192,0,0,828,830,3,310,155,
	0,829,828,1,0,0,0,829,830,1,0,0,0,830,831,1,0,0,0,831,833,3,306,153,0,832,
	834,3,70,35,0,833,832,1,0,0,0,833,834,1,0,0,0,834,835,1,0,0,0,835,836,3,
	308,154,0,836,105,1,0,0,0,837,839,5,73,0,0,838,840,5,166,0,0,839,838,1,
	0,0,0,839,840,1,0,0,0,840,841,1,0,0,0,841,843,5,76,0,0,842,844,3,310,155,
	0,843,842,1,0,0,0,843,844,1,0,0,0,844,845,1,0,0,0,845,847,3,306,153,0,846,
	848,3,52,26,0,847,846,1,0,0,0,847,848,1,0,0,0,848,850,1,0,0,0,849,851,3,
	70,35,0,850,849,1,0,0,0,850,851,1,0,0,0,851,852,1,0,0,0,852,853,5,7,0,0,
	853,854,3,148,74,0,854,107,1,0,0,0,855,859,5,73,0,0,856,860,5,166,0,0,857,
	858,5,166,0,0,858,860,5,232,0,0,859,856,1,0,0,0,859,857,1,0,0,0,859,860,
	1,0,0,0,860,861,1,0,0,0,861,863,5,157,0,0,862,864,3,310,155,0,863,862,1,
	0,0,0,863,864,1,0,0,0,864,865,1,0,0,0,865,866,3,306,153,0,866,867,5,7,0,
	0,867,870,3,294,147,0,868,869,5,240,0,0,869,871,7,17,0,0,870,868,1,0,0,
	0,870,871,1,0,0,0,871,873,1,0,0,0,872,874,3,110,55,0,873,872,1,0,0,0,873,
	874,1,0,0,0,874,109,1,0,0,0,875,876,5,143,0,0,876,877,5,244,0,0,877,883,
	3,112,56,0,878,879,5,325,0,0,879,880,5,244,0,0,880,882,3,112,56,0,881,878,
	1,0,0,0,882,885,1,0,0,0,883,881,1,0,0,0,883,884,1,0,0,0,884,111,1,0,0,0,
	885,883,1,0,0,0,886,887,5,342,0,0,887,113,1,0,0,0,888,889,5,112,0,0,889,
	890,5,74,0,0,890,893,3,306,153,0,891,894,3,116,58,0,892,894,3,118,59,0,
	893,891,1,0,0,0,893,892,1,0,0,0,894,115,1,0,0,0,895,896,5,113,0,0,896,897,
	5,109,0,0,897,898,3,306,153,0,898,117,1,0,0,0,899,900,5,116,0,0,900,901,
	3,314,157,0,901,119,1,0,0,0,902,903,5,112,0,0,903,904,5,76,0,0,904,908,
	3,306,153,0,905,909,3,116,58,0,906,907,5,7,0,0,907,909,3,148,74,0,908,905,
	1,0,0,0,908,906,1,0,0,0,909,121,1,0,0,0,910,911,5,112,0,0,911,912,5,192,
	0,0,912,913,3,306,153,0,913,914,3,118,59,0,914,123,1,0,0,0,915,919,5,112,
	0,0,916,920,5,166,0,0,917,918,5,166,0,0,918,920,5,232,0,0,919,916,1,0,0,
	0,919,917,1,0,0,0,919,920,1,0,0,0,920,921,1,0,0,0,921,923,5,157,0,0,922,
	924,3,312,156,0,923,922,1,0,0,0,923,924,1,0,0,0,924,925,1,0,0,0,925,926,
	3,306,153,0,926,927,5,7,0,0,927,930,3,294,147,0,928,929,5,240,0,0,929,931,
	7,17,0,0,930,928,1,0,0,0,930,931,1,0,0,0,931,125,1,0,0,0,932,933,5,104,
	0,0,933,935,5,239,0,0,934,936,3,312,156,0,935,934,1,0,0,0,935,936,1,0,0,
	0,936,937,1,0,0,0,937,938,3,306,153,0,938,127,1,0,0,0,939,941,5,104,0,0,
	940,942,5,166,0,0,941,940,1,0,0,0,941,942,1,0,0,0,942,943,1,0,0,0,943,945,
	5,74,0,0,944,946,3,312,156,0,945,944,1,0,0,0,945,946,1,0,0,0,946,947,1,
	0,0,0,947,948,3,306,153,0,948,129,1,0,0,0,949,950,5,104,0,0,950,952,5,192,
	0,0,951,953,3,312,156,0,952,951,1,0,0,0,952,953,1,0,0,0,953,954,1,0,0,0,
	954,956,3,306,153,0,955,957,7,18,0,0,956,955,1,0,0,0,956,957,1,0,0,0,957,
	131,1,0,0,0,958,960,5,104,0,0,959,961,5,166,0,0,960,959,1,0,0,0,960,961,
	1,0,0,0,961,962,1,0,0,0,962,964,5,76,0,0,963,965,3,312,156,0,964,963,1,
	0,0,0,964,965,1,0,0,0,965,966,1,0,0,0,966,967,3,306,153,0,967,133,1,0,0,
	0,968,972,5,104,0,0,969,973,5,166,0,0,970,971,5,166,0,0,971,973,5,232,0,
	0,972,969,1,0,0,0,972,970,1,0,0,0,972,973,1,0,0,0,973,974,1,0,0,0,974,976,
	5,157,0,0,975,977,3,312,156,0,976,975,1,0,0,0,976,977,1,0,0,0,977,978,1,
	0,0,0,978,979,3,306,153,0,979,135,1,0,0,0,980,982,5,78,0,0,981,980,1,0,
	0,0,981,982,1,0,0,0,982,983,1,0,0,0,983,987,3,138,69,0,984,985,5,78,0,0,
	985,987,3,146,73,0,986,981,1,0,0,0,986,984,1,0,0,0,987,137,1,0,0,0,988,
	989,5,80,0,0,989,990,7,19,0,0,990,999,3,306,153,0,991,993,3,140,70,0,992,
	991,1,0,0,0,992,993,1,0,0,0,993,995,1,0,0,0,994,996,3,52,26,0,995,994,1,
	0,0,0,995,996,1,0,0,0,996,997,1,0,0,0,997,1000,3,148,74,0,998,1000,3,142,
	71,0,999,992,1,0,0,0,999,998,1,0,0,0,1000,139,1,0,0,0,1001,1002,5,60,0,
	0,1002,1003,3,314,157,0,1003,141,1,0,0,0,1004,1005,5,72,0,0,1005,1010,3,
	144,72,0,1006,1007,5,325,0,0,1007,1009,3,144,72,0,1008,1006,1,0,0,0,1009,
	1012,1,0,0,0,1010,1008,1,0,0,0,1010,1011,1,0,0,0,1011,143,1,0,0,0,1012,
	1010,1,0,0,0,1013,1014,5,321,0,0,1014,1019,3,334,167,0,1015,1016,5,325,
	0,0,1016,1018,3,334,167,0,1017,1015,1,0,0,0,1018,1021,1,0,0,0,1019,1017,
	1,0,0,0,1019,1020,1,0,0,0,1020,1022,1,0,0,0,1021,1019,1,0,0,0,1022,1023,
	5,322,0,0,1023,145,1,0,0,0,1024,1025,5,79,0,0,1025,1026,5,116,0,0,1026,
	1030,5,43,0,0,1027,1028,3,138,69,0,1028,1029,5,326,0,0,1029,1031,1,0,0,
	0,1030,1027,1,0,0,0,1031,1032,1,0,0,0,1032,1030,1,0,0,0,1032,1033,1,0,0,
	0,1033,1034,1,0,0,0,1034,1035,5,44,0,0,1035,147,1,0,0,0,1036,1037,6,74,
	-1,0,1037,1068,3,150,75,0,1038,1039,5,70,0,0,1039,1044,3,152,76,0,1040,
	1041,5,325,0,0,1041,1043,3,152,76,0,1042,1040,1,0,0,0,1043,1046,1,0,0,0,
	1044,1042,1,0,0,0,1044,1045,1,0,0,0,1045,1047,1,0,0,0,1046,1044,1,0,0,0,
	1047,1048,3,148,74,5,1048,1068,1,0,0,0,1049,1050,5,321,0,0,1050,1051,3,
	148,74,0,1051,1052,5,322,0,0,1052,1068,1,0,0,0,1053,1055,3,158,79,0,1054,
	1056,3,220,110,0,1055,1054,1,0,0,0,1055,1056,1,0,0,0,1056,1058,1,0,0,0,
	1057,1059,3,224,112,0,1058,1057,1,0,0,0,1058,1059,1,0,0,0,1059,1068,1,0,
	0,0,1060,1062,3,156,78,0,1061,1063,3,220,110,0,1062,1061,1,0,0,0,1062,1063,
	1,0,0,0,1063,1065,1,0,0,0,1064,1066,3,224,112,0,1065,1064,1,0,0,0,1065,
	1066,1,0,0,0,1066,1068,1,0,0,0,1067,1036,1,0,0,0,1067,1038,1,0,0,0,1067,
	1049,1,0,0,0,1067,1053,1,0,0,0,1067,1060,1,0,0,0,1068,1083,1,0,0,0,1069,
	1070,10,3,0,0,1070,1072,7,20,0,0,1071,1073,5,8,0,0,1072,1071,1,0,0,0,1072,
	1073,1,0,0,0,1073,1074,1,0,0,0,1074,1076,3,148,74,0,1075,1077,3,220,110,
	0,1076,1075,1,0,0,0,1076,1077,1,0,0,0,1077,1079,1,0,0,0,1078,1080,3,224,
	112,0,1079,1078,1,0,0,0,1079,1080,1,0,0,0,1080,1082,1,0,0,0,1081,1069,1,
	0,0,0,1082,1085,1,0,0,0,1083,1081,1,0,0,0,1083,1084,1,0,0,0,1084,149,1,
	0,0,0,1085,1083,1,0,0,0,1086,1087,5,72,0,0,1087,1092,3,250,125,0,1088,1089,
	5,325,0,0,1089,1091,3,250,125,0,1090,1088,1,0,0,0,1091,1094,1,0,0,0,1092,
	1090,1,0,0,0,1092,1093,1,0,0,0,1093,151,1,0,0,0,1094,1092,1,0,0,0,1095,
	1107,3,154,77,0,1096,1097,5,321,0,0,1097,1102,3,50,25,0,1098,1099,5,325,
	0,0,1099,1101,3,50,25,0,1100,1098,1,0,0,0,1101,1104,1,0,0,0,1102,1100,1,
	0,0,0,1102,1103,1,0,0,0,1103,1105,1,0,0,0,1104,1102,1,0,0,0,1105,1106,5,
	322,0,0,1106,1108,1,0,0,0,1107,1096,1,0,0,0,1107,1108,1,0,0,0,1108,1109,
	1,0,0,0,1109,1110,5,7,0,0,1110,1111,5,321,0,0,1111,1112,3,148,74,0,1112,
	1113,5,322,0,0,1113,153,1,0,0,0,1114,1115,3,294,147,0,1115,155,1,0,0,0,
	1116,1117,3,158,79,0,1117,1119,3,164,82,0,1118,1120,3,194,97,0,1119,1118,
	1,0,0,0,1119,1120,1,0,0,0,1120,1122,1,0,0,0,1121,1123,3,196,98,0,1122,1121,
	1,0,0,0,1122,1123,1,0,0,0,1123,1125,1,0,0,0,1124,1126,3,210,105,0,1125,
	1124,1,0,0,0,1125,1126,1,0,0,0,1126,1128,1,0,0,0,1127,1129,3,212,106,0,
	1128,1127,1,0,0,0,1128,1129,1,0,0,0,1129,1135,1,0,0,0,1130,1131,3,158,79,
	0,1131,1132,3,164,82,0,1132,1133,3,218,109,0,1133,1135,1,0,0,0,1134,1116,
	1,0,0,0,1134,1130,1,0,0,0,1135,157,1,0,0,0,1136,1138,5,4,0,0,1137,1139,
	3,342,171,0,1138,1137,1,0,0,0,1138,1139,1,0,0,0,1139,1149,1,0,0,0,1140,
	1150,5,332,0,0,1141,1146,3,160,80,0,1142,1143,5,325,0,0,1143,1145,3,160,
	80,0,1144,1142,1,0,0,0,1145,1148,1,0,0,0,1146,1144,1,0,0,0,1146,1147,1,
	0,0,0,1147,1150,1,0,0,0,1148,1146,1,0,0,0,1149,1140,1,0,0,0,1149,1141,1,
	0,0,0,1150,159,1,0,0,0,1151,1160,3,162,81,0,1152,1157,3,250,125,0,1153,
	1155,5,7,0,0,1154,1153,1,0,0,0,1154,1155,1,0,0,0,1155,1156,1,0,0,0,1156,
	1158,3,250,125,0,1157,1154,1,0,0,0,1157,1158,1,0,0,0,1158,1160,1,0,0,0,
	1159,1151,1,0,0,0,1159,1152,1,0,0,0,1160,161,1,0,0,0,1161,1162,3,260,130,
	0,1162,1163,5,59,0,0,1163,1164,3,216,108,0,1164,1165,5,7,0,0,1165,1166,
	3,296,148,0,1166,1174,1,0,0,0,1167,1168,3,260,130,0,1168,1169,5,59,0,0,
	1169,1170,3,286,143,0,1170,1171,5,7,0,0,1171,1172,3,296,148,0,1172,1174,
	1,0,0,0,1173,1161,1,0,0,0,1173,1167,1,0,0,0,1174,163,1,0,0,0,1175,1176,
	5,5,0,0,1176,1177,3,166,83,0,1177,165,1,0,0,0,1178,1179,6,83,-1,0,1179,
	1184,3,168,84,0,1180,1181,5,325,0,0,1181,1183,3,168,84,0,1182,1180,1,0,
	0,0,1183,1186,1,0,0,0,1184,1182,1,0,0,0,1184,1185,1,0,0,0,1185,1190,1,0,
	0,0,1186,1184,1,0,0,0,1187,1190,3,178,89,0,1188,1190,3,180,90,0,1189,1178,
	1,0,0,0,1189,1187,1,0,0,0,1189,1188,1,0,0,0,1190,1212,1,0,0,0,1191,1192,
	10,3,0,0,1192,1193,5,46,0,0,1193,1194,5,45,0,0,1194,1211,3,166,83,4,1195,
	1197,10,4,0,0,1196,1198,5,54,0,0,1197,1196,1,0,0,0,1197,1198,1,0,0,0,1198,
	1200,1,0,0,0,1199,1201,7,21,0,0,1200,1199,1,0,0,0,1200,1201,1,0,0,0,1201,
	1203,1,0,0,0,1202,1204,5,47,0,0,1203,1202,1,0,0,0,1203,1204,1,0,0,0,1204,
	1205,1,0,0,0,1205,1206,5,45,0,0,1206,1208,3,166,83,0,1207,1209,3,192,96,
	0,1208,1207,1,0,0,0,1208,1209,1,0,0,0,1209,1211,1,0,0,0,1210,1191,1,0,0,
	0,1210,1195,1,0,0,0,1211,1214,1,0,0,0,1212,1210,1,0,0,0,1212,1213,1,0,0,
	0,1213,167,1,0,0,0,1214,1212,1,0,0,0,1215,1217,3,170,85,0,1216,1218,3,284,
	142,0,1217,1216,1,0,0,0,1217,1218,1,0,0,0,1218,169,1,0,0,0,1219,1221,5,
	74,0,0,1220,1219,1,0,0,0,1220,1221,1,0,0,0,1221,1222,1,0,0,0,1222,1224,
	3,172,86,0,1223,1225,3,174,87,0,1224,1223,1,0,0,0,1224,1225,1,0,0,0,1225,
	1230,1,0,0,0,1226,1228,5,7,0,0,1227,1226,1,0,0,0,1227,1228,1,0,0,0,1228,
	1229,1,0,0,0,1229,1231,3,266,133,0,1230,1227,1,0,0,0,1230,1231,1,0,0,0,
	1231,1261,1,0,0,0,1232,1233,5,57,0,0,1233,1234,5,74,0,0,1234,1235,5,321,
	0,0,1235,1236,3,262,131,0,1236,1237,5,321,0,0,1237,1242,3,250,125,0,1238,
	1239,5,325,0,0,1239,1241,3,250,125,0,1240,1238,1,0,0,0,1241,1244,1,0,0,
	0,1242,1240,1,0,0,0,1242,1243,1,0,0,0,1243,1245,1,0,0,0,1244,1242,1,0,0,
	0,1245,1246,5,322,0,0,1246,1247,5,322,0,0,1247,1261,1,0,0,0,1248,1250,5,
	57,0,0,1249,1248,1,0,0,0,1249,1250,1,0,0,0,1250,1251,1,0,0,0,1251,1252,
	5,321,0,0,1252,1253,3,148,74,0,1253,1254,5,322,0,0,1254,1261,1,0,0,0,1255,
	1256,5,227,0,0,1256,1257,5,321,0,0,1257,1258,3,250,125,0,1258,1259,5,322,
	0,0,1259,1261,1,0,0,0,1260,1220,1,0,0,0,1260,1232,1,0,0,0,1260,1249,1,0,
	0,0,1260,1255,1,0,0,0,1261,171,1,0,0,0,1262,1263,3,306,153,0,1263,173,1,
	0,0,0,1264,1265,5,37,0,0,1265,1266,5,259,0,0,1266,1267,5,7,0,0,1267,1268,
	5,136,0,0,1268,1269,3,176,88,0,1269,175,1,0,0,0,1270,1271,3,250,125,0,1271,
	177,1,0,0,0,1272,1273,5,321,0,0,1273,1274,3,142,71,0,1274,1275,5,322,0,
	0,1275,1276,3,284,142,0,1276,179,1,0,0,0,1277,1278,5,74,0,0,1278,1279,5,
	321,0,0,1279,1280,3,182,91,0,1280,1281,5,322,0,0,1281,181,1,0,0,0,1282,
	1283,3,184,92,0,1283,1284,5,321,0,0,1284,1289,3,186,93,0,1285,1286,5,325,
	0,0,1286,1288,3,186,93,0,1287,1285,1,0,0,0,1288,1291,1,0,0,0,1289,1287,
	1,0,0,0,1289,1290,1,0,0,0,1290,1292,1,0,0,0,1291,1289,1,0,0,0,1292,1293,
	5,322,0,0,1293,183,1,0,0,0,1294,1295,7,22,0,0,1295,185,1,0,0,0,1296,1297,
	5,74,0,0,1297,1312,3,208,104,0,1298,1312,3,190,95,0,1299,1312,3,248,124,
	0,1300,1301,5,118,0,0,1301,1302,5,348,0,0,1302,1303,5,74,0,0,1303,1312,
	3,208,104,0,1304,1305,5,268,0,0,1305,1306,5,348,0,0,1306,1312,3,190,95,
	0,1307,1308,3,188,94,0,1308,1309,5,348,0,0,1309,1310,3,248,124,0,1310,1312,
	1,0,0,0,1311,1296,1,0,0,0,1311,1298,1,0,0,0,1311,1299,1,0,0,0,1311,1300,
	1,0,0,0,1311,1304,1,0,0,0,1311,1307,1,0,0,0,1312,187,1,0,0,0,1313,1314,
	7,23,0,0,1314,189,1,0,0,0,1315,1316,5,267,0,0,1316,1317,5,321,0,0,1317,
	1318,3,306,153,0,1318,1319,5,322,0,0,1319,191,1,0,0,0,1320,1321,5,55,0,
	0,1321,1335,3,252,126,0,1322,1323,5,143,0,0,1323,1324,5,321,0,0,1324,1329,
	3,306,153,0,1325,1326,5,325,0,0,1326,1328,3,306,153,0,1327,1325,1,0,0,0,
	1328,1331,1,0,0,0,1329,1327,1,0,0,0,1329,1330,1,0,0,0,1330,1332,1,0,0,0,
	1331,1329,1,0,0,0,1332,1333,5,322,0,0,1333,1335,1,0,0,0,1334,1320,1,0,0,
	0,1334,1322,1,0,0,0,1335,193,1,0,0,0,1336,1337,5,11,0,0,1337,1338,3,252,
	126,0,1338,195,1,0,0,0,1339,1340,5,12,0,0,1340,1341,5,13,0,0,1341,1346,
	3,198,99,0,1342,1343,5,325,0,0,1343,1345,3,198,99,0,1344,1342,1,0,0,0,1345,
	1348,1,0,0,0,1346,1344,1,0,0,0,1346,1347,1,0,0,0,1347,197,1,0,0,0,1348,
	1346,1,0,0,0,1349,1389,3,250,125,0,1350,1389,3,204,102,0,1351,1352,5,321,
	0,0,1352,1389,5,322,0,0,1353,1354,5,321,0,0,1354,1359,3,250,125,0,1355,
	1356,5,325,0,0,1356,1358,3,250,125,0,1357,1355,1,0,0,0,1358,1361,1,0,0,
	0,1359,1357,1,0,0,0,1359,1360,1,0,0,0,1360,1362,1,0,0,0,1361,1359,1,0,0,
	0,1362,1363,5,322,0,0,1363,1389,1,0,0,0,1364,1365,3,202,101,0,1365,1366,
	5,321,0,0,1366,1371,3,250,125,0,1367,1368,5,325,0,0,1368,1370,3,250,125,
	0,1369,1367,1,0,0,0,1370,1373,1,0,0,0,1371,1369,1,0,0,0,1371,1372,1,0,0,
	0,1372,1374,1,0,0,0,1373,1371,1,0,0,0,1374,1375,5,322,0,0,1375,1389,1,0,
	0,0,1376,1377,3,200,100,0,1377,1378,5,321,0,0,1378,1383,3,198,99,0,1379,
	1380,5,325,0,0,1380,1382,3,198,99,0,1381,1379,1,0,0,0,1382,1385,1,0,0,0,
	1383,1381,1,0,0,0,1383,1384,1,0,0,0,1384,1386,1,0,0,0,1385,1383,1,0,0,0,
	1386,1387,5,322,0,0,1387,1389,1,0,0,0,1388,1349,1,0,0,0,1388,1350,1,0,0,
	0,1388,1351,1,0,0,0,1388,1353,1,0,0,0,1388,1364,1,0,0,0,1388,1376,1,0,0,
	0,1389,199,1,0,0,0,1390,1391,5,14,0,0,1391,1392,5,15,0,0,1392,201,1,0,0,
	0,1393,1394,7,24,0,0,1394,203,1,0,0,0,1395,1396,3,206,103,0,1396,1397,5,
	321,0,0,1397,1398,3,208,104,0,1398,1399,5,325,0,0,1399,1400,3,248,124,0,
	1400,1401,5,322,0,0,1401,205,1,0,0,0,1402,1403,7,25,0,0,1403,207,1,0,0,
	0,1404,1405,3,306,153,0,1405,209,1,0,0,0,1406,1407,5,19,0,0,1407,1408,3,
	252,126,0,1408,211,1,0,0,0,1409,1410,5,58,0,0,1410,1415,3,214,107,0,1411,
	1412,5,325,0,0,1412,1414,3,214,107,0,1413,1411,1,0,0,0,1414,1417,1,0,0,
	0,1415,1413,1,0,0,0,1415,1416,1,0,0,0,1416,213,1,0,0,0,1417,1415,1,0,0,
	0,1418,1419,3,286,143,0,1419,1420,5,7,0,0,1420,1421,3,216,108,0,1421,215,
	1,0,0,0,1422,1424,3,286,143,0,1423,1422,1,0,0,0,1423,1424,1,0,0,0,1424,
	1425,1,0,0,0,1425,1427,5,321,0,0,1426,1428,3,226,113,0,1427,1426,1,0,0,
	0,1427,1428,1,0,0,0,1428,1430,1,0,0,0,1429,1431,3,220,110,0,1430,1429,1,
	0,0,0,1430,1431,1,0,0,0,1431,1433,1,0,0,0,1432,1434,3,242,121,0,1433,1432,
	1,0,0,0,1433,1434,1,0,0,0,1434,1435,1,0,0,0,1435,1436,5,322,0,0,1436,217,
	1,0,0,0,1437,1438,5,274,0,0,1438,1440,5,321,0,0,1439,1441,3,226,113,0,1440,
	1439,1,0,0,0,1440,1441,1,0,0,0,1441,1443,1,0,0,0,1442,1444,3,220,110,0,
	1443,1442,1,0,0,0,1443,1444,1,0,0,0,1444,1446,1,0,0,0,1445,1447,3,230,115,
	0,1446,1445,1,0,0,0,1446,1447,1,0,0,0,1447,1449,1,0,0,0,1448,1450,3,236,
	118,0,1449,1448,1,0,0,0,1449,1450,1,0,0,0,1450,1452,1,0,0,0,1451,1453,3,
	238,119,0,1452,1451,1,0,0,0,1452,1453,1,0,0,0,1453,1455,1,0,0,0,1454,1456,
	3,232,116,0,1455,1454,1,0,0,0,1455,1456,1,0,0,0,1456,1457,1,0,0,0,1457,
	1458,3,240,120,0,1458,1463,5,322,0,0,1459,1461,5,7,0,0,1460,1459,1,0,0,
	0,1460,1461,1,0,0,0,1461,1462,1,0,0,0,1462,1464,3,296,148,0,1463,1460,1,
	0,0,0,1463,1464,1,0,0,0,1464,219,1,0,0,0,1465,1466,5,18,0,0,1466,1467,5,
	13,0,0,1467,1472,3,222,111,0,1468,1469,5,325,0,0,1469,1471,3,222,111,0,
	1470,1468,1,0,0,0,1471,1474,1,0,0,0,1472,1470,1,0,0,0,1472,1473,1,0,0,0,
	1473,221,1,0,0,0,1474,1472,1,0,0,0,1475,1477,3,250,125,0,1476,1478,7,26,
	0,0,1477,1476,1,0,0,0,1477,1478,1,0,0,0,1478,1481,1,0,0,0,1479,1480,5,34,
	0,0,1480,1482,7,27,0,0,1481,1479,1,0,0,0,1481,1482,1,0,0,0,1482,223,1,0,
	0,0,1483,1486,5,20,0,0,1484,1487,5,8,0,0,1485,1487,3,250,125,0,1486,1484,
	1,0,0,0,1486,1485,1,0,0,0,1487,225,1,0,0,0,1488,1489,5,60,0,0,1489,1490,
	5,13,0,0,1490,1495,3,250,125,0,1491,1492,5,325,0,0,1492,1494,3,250,125,
	0,1493,1491,1,0,0,0,1494,1497,1,0,0,0,1495,1493,1,0,0,0,1495,1496,1,0,0,
	0,1496,227,1,0,0,0,1497,1495,1,0,0,0,1498,1515,5,332,0,0,1499,1515,5,335,
	0,0,1500,1515,5,340,0,0,1501,1502,5,323,0,0,1502,1503,5,343,0,0,1503,1504,
	5,325,0,0,1504,1505,5,343,0,0,1505,1515,5,324,0,0,1506,1507,5,323,0,0,1507,
	1508,5,343,0,0,1508,1509,5,325,0,0,1509,1515,5,324,0,0,1510,1511,5,323,
	0,0,1511,1512,5,325,0,0,1512,1513,5,343,0,0,1513,1515,5,324,0,0,1514,1498,
	1,0,0,0,1514,1499,1,0,0,0,1514,1500,1,0,0,0,1514,1501,1,0,0,0,1514,1506,
	1,0,0,0,1514,1510,1,0,0,0,1515,229,1,0,0,0,1516,1517,5,275,0,0,1517,1522,
	3,160,80,0,1518,1519,5,325,0,0,1519,1521,3,160,80,0,1520,1518,1,0,0,0,1521,
	1524,1,0,0,0,1522,1520,1,0,0,0,1522,1523,1,0,0,0,1523,231,1,0,0,0,1524,
	1522,1,0,0,0,1525,1526,5,276,0,0,1526,1528,5,321,0,0,1527,1529,3,234,117,
	0,1528,1527,1,0,0,0,1529,1530,1,0,0,0,1530,1528,1,0,0,0,1530,1531,1,0,0,
	0,1531,1532,1,0,0,0,1532,1534,5,322,0,0,1533,1535,3,246,123,0,1534,1533,
	1,0,0,0,1534,1535,1,0,0,0,1535,233,1,0,0,0,1536,1538,3,298,149,0,1537,1539,
	3,228,114,0,1538,1537,1,0,0,0,1538,1539,1,0,0,0,1539,235,1,0,0,0,1540,1541,
	5,8,0,0,1541,1542,5,62,0,0,1542,1543,5,278,0,0,1543,1549,5,228,0,0,1544,
	1545,5,277,0,0,1545,1546,5,307,0,0,1546,1547,5,278,0,0,1547,1549,5,228,
	0,0,1548,1540,1,0,0,0,1548,1544,1,0,0,0,1549,237,1,0,0,0,1550,1551,5,68,
	0,0,1551,1552,5,228,0,0,1552,1553,5,279,0,0,1553,1554,5,280,0,0,1554,1555,
	5,69,0,0,1555,1575,5,307,0,0,1556,1557,5,68,0,0,1557,1558,5,228,0,0,1558,
	1559,5,279,0,0,1559,1560,5,109,0,0,1560,1561,5,229,0,0,1561,1575,5,307,
	0,0,1562,1563,5,68,0,0,1563,1564,5,228,0,0,1564,1565,5,279,0,0,1565,1566,
	5,109,0,0,1566,1567,5,69,0,0,1567,1575,3,298,149,0,1568,1569,5,68,0,0,1569,
	1570,5,228,0,0,1570,1571,5,279,0,0,1571,1572,5,109,0,0,1572,1573,5,67,0,
	0,1573,1575,3,298,149,0,1574,1550,1,0,0,0,1574,1556,1,0,0,0,1574,1562,1,
	0,0,0,1574,1568,1,0,0,0,1575,239,1,0,0,0,1576,1577,5,281,0,0,1577,1582,
	3,160,80,0,1578,1579,5,325,0,0,1579,1581,3,160,80,0,1580,1578,1,0,0,0,1581,
	1584,1,0,0,0,1582,1580,1,0,0,0,1582,1583,1,0,0,0,1583,241,1,0,0,0,1584,
	1582,1,0,0,0,1585,1586,5,61,0,0,1586,1587,5,28,0,0,1587,1588,3,248,124,
	0,1588,1589,3,244,122,0,1589,1595,1,0,0,0,1590,1591,5,62,0,0,1591,1592,
	5,28,0,0,1592,1593,5,343,0,0,1593,1595,3,244,122,0,1594,1585,1,0,0,0,1594,
	1590,1,0,0,0,1595,243,1,0,0,0,1596,1597,5,64,0,0,1597,1598,5,23,0,0,1598,
	1599,5,66,0,0,1599,1600,5,307,0,0,1600,245,1,0,0,0,1601,1602,5,230,0,0,
	1602,1603,3,248,124,0,1603,247,1,0,0,0,1604,1605,5,38,0,0,1605,1606,5,342,
	0,0,1606,1607,5,346,0,0,1607,249,1,0,0,0,1608,1609,3,252,126,0,1609,251,
	1,0,0,0,1610,1611,6,126,-1,0,1611,1612,5,25,0,0,1612,1623,3,252,126,5,1613,
	1614,5,27,0,0,1614,1615,5,321,0,0,1615,1616,3,148,74,0,1616,1617,5,322,
	0,0,1617,1623,1,0,0,0,1618,1620,3,258,129,0,1619,1621,3,254,127,0,1620,
	1619,1,0,0,0,1620,1621,1,0,0,0,1621,1623,1,0,0,0,1622,1610,1,0,0,0,1622,
	1613,1,0,0,0,1622,1618,1,0,0,0,1623,1632,1,0,0,0,1624,1625,10,2,0,0,1625,
	1626,5,23,0,0,1626,1631,3,252,126,3,1627,1628,10,1,0,0,1628,1629,5,22,0,
	0,1629,1631,3,252,126,2,1630,1624,1,0,0,0,1630,1627,1,0,0,0,1631,1634,1,
	0,0,0,1632,1630,1,0,0,0,1632,1633,1,0,0,0,1633,253,1,0,0,0,1634,1632,1,
	0,0,0,1635,1637,5,25,0,0,1636,1635,1,0,0,0,1636,1637,1,0,0,0,1637,1638,
	1,0,0,0,1638,1639,5,28,0,0,1639,1640,3,258,129,0,1640,1641,5,23,0,0,1641,
	1642,3,258,129,0,1642,1719,1,0,0,0,1643,1645,5,25,0,0,1644,1643,1,0,0,0,
	1644,1645,1,0,0,0,1645,1646,1,0,0,0,1646,1647,5,24,0,0,1647,1648,5,321,
	0,0,1648,1653,3,250,125,0,1649,1650,5,325,0,0,1650,1652,3,250,125,0,1651,
	1649,1,0,0,0,1652,1655,1,0,0,0,1653,1651,1,0,0,0,1653,1654,1,0,0,0,1654,
	1656,1,0,0,0,1655,1653,1,0,0,0,1656,1657,5,322,0,0,1657,1719,1,0,0,0,1658,
	1660,5,25,0,0,1659,1658,1,0,0,0,1659,1660,1,0,0,0,1660,1661,1,0,0,0,1661,
	1662,5,24,0,0,1662,1663,5,321,0,0,1663,1664,3,148,74,0,1664,1665,5,322,
	0,0,1665,1719,1,0,0,0,1666,1667,5,27,0,0,1667,1668,5,321,0,0,1668,1669,
	3,148,74,0,1669,1670,5,322,0,0,1670,1719,1,0,0,0,1671,1673,5,25,0,0,1672,
	1671,1,0,0,0,1672,1673,1,0,0,0,1673,1674,1,0,0,0,1674,1675,5,30,0,0,1675,
	1719,3,258,129,0,1676,1678,5,25,0,0,1677,1676,1,0,0,0,1677,1678,1,0,0,0,
	1678,1679,1,0,0,0,1679,1680,5,29,0,0,1680,1694,7,28,0,0,1681,1682,5,321,
	0,0,1682,1695,5,322,0,0,1683,1684,5,321,0,0,1684,1689,3,250,125,0,1685,
	1686,5,325,0,0,1686,1688,3,250,125,0,1687,1685,1,0,0,0,1688,1691,1,0,0,
	0,1689,1687,1,0,0,0,1689,1690,1,0,0,0,1690,1692,1,0,0,0,1691,1689,1,0,0,
	0,1692,1693,5,322,0,0,1693,1695,1,0,0,0,1694,1681,1,0,0,0,1694,1683,1,0,
	0,0,1695,1719,1,0,0,0,1696,1698,5,25,0,0,1697,1696,1,0,0,0,1697,1698,1,
	0,0,0,1698,1699,1,0,0,0,1699,1700,5,29,0,0,1700,1719,3,258,129,0,1701,1703,
	5,31,0,0,1702,1704,5,25,0,0,1703,1702,1,0,0,0,1703,1704,1,0,0,0,1704,1705,
	1,0,0,0,1705,1719,5,308,0,0,1706,1708,5,31,0,0,1707,1709,5,25,0,0,1708,
	1707,1,0,0,0,1708,1709,1,0,0,0,1709,1710,1,0,0,0,1710,1719,7,29,0,0,1711,
	1713,5,31,0,0,1712,1714,5,25,0,0,1713,1712,1,0,0,0,1713,1714,1,0,0,0,1714,
	1715,1,0,0,0,1715,1716,5,10,0,0,1716,1717,5,5,0,0,1717,1719,3,258,129,0,
	1718,1636,1,0,0,0,1718,1644,1,0,0,0,1718,1659,1,0,0,0,1718,1666,1,0,0,0,
	1718,1672,1,0,0,0,1718,1677,1,0,0,0,1718,1697,1,0,0,0,1718,1701,1,0,0,0,
	1718,1706,1,0,0,0,1718,1711,1,0,0,0,1719,255,1,0,0,0,1720,1722,5,25,0,0,
	1721,1720,1,0,0,0,1721,1722,1,0,0,0,1722,1723,1,0,0,0,1723,1724,5,29,0,
	0,1724,1738,7,28,0,0,1725,1726,5,321,0,0,1726,1739,5,322,0,0,1727,1728,
	5,321,0,0,1728,1733,3,250,125,0,1729,1730,5,325,0,0,1730,1732,3,250,125,
	0,1731,1729,1,0,0,0,1732,1735,1,0,0,0,1733,1731,1,0,0,0,1733,1734,1,0,0,
	0,1734,1736,1,0,0,0,1735,1733,1,0,0,0,1736,1737,5,322,0,0,1737,1739,1,0,
	0,0,1738,1725,1,0,0,0,1738,1727,1,0,0,0,1739,1746,1,0,0,0,1740,1742,5,25,
	0,0,1741,1740,1,0,0,0,1741,1742,1,0,0,0,1742,1743,1,0,0,0,1743,1744,5,29,
	0,0,1744,1746,3,258,129,0,1745,1721,1,0,0,0,1745,1741,1,0,0,0,1746,257,
	1,0,0,0,1747,1748,6,129,-1,0,1748,1752,3,260,130,0,1749,1750,7,30,0,0,1750,
	1752,3,258,129,7,1751,1747,1,0,0,0,1751,1749,1,0,0,0,1752,1774,1,0,0,0,
	1753,1754,10,6,0,0,1754,1755,7,31,0,0,1755,1773,3,258,129,7,1756,1757,10,
	5,0,0,1757,1758,7,32,0,0,1758,1773,3,258,129,6,1759,1760,10,4,0,0,1760,
	1761,5,316,0,0,1761,1773,3,258,129,5,1762,1763,10,3,0,0,1763,1764,5,317,
	0,0,1764,1773,3,258,129,4,1765,1766,10,2,0,0,1766,1767,5,315,0,0,1767,1773,
	3,258,129,3,1768,1769,10,1,0,0,1769,1770,3,324,162,0,1770,1771,3,258,129,
	2,1771,1773,1,0,0,0,1772,1753,1,0,0,0,1772,1756,1,0,0,0,1772,1759,1,0,0,
	0,1772,1762,1,0,0,0,1772,1765,1,0,0,0,1772,1768,1,0,0,0,1773,1776,1,0,0,
	0,1774,1772,1,0,0,0,1774,1775,1,0,0,0,1775,259,1,0,0,0,1776,1774,1,0,0,
	0,1777,1778,6,130,-1,0,1778,1780,5,39,0,0,1779,1781,3,302,151,0,1780,1779,
	1,0,0,0,1781,1782,1,0,0,0,1782,1780,1,0,0,0,1782,1783,1,0,0,0,1783,1786,
	1,0,0,0,1784,1785,5,42,0,0,1785,1787,3,250,125,0,1786,1784,1,0,0,0,1786,
	1787,1,0,0,0,1787,1788,1,0,0,0,1788,1789,5,44,0,0,1789,1869,1,0,0,0,1790,
	1791,5,39,0,0,1791,1793,3,250,125,0,1792,1794,3,302,151,0,1793,1792,1,0,
	0,0,1794,1795,1,0,0,0,1795,1793,1,0,0,0,1795,1796,1,0,0,0,1796,1799,1,0,
	0,0,1797,1798,5,42,0,0,1798,1800,3,250,125,0,1799,1797,1,0,0,0,1799,1800,
	1,0,0,0,1800,1801,1,0,0,0,1801,1802,5,44,0,0,1802,1869,1,0,0,0,1803,1804,
	5,94,0,0,1804,1805,5,321,0,0,1805,1806,3,250,125,0,1806,1807,5,7,0,0,1807,
	1808,3,54,27,0,1808,1809,5,322,0,0,1809,1869,1,0,0,0,1810,1811,5,67,0,0,
	1811,1812,5,321,0,0,1812,1815,3,250,125,0,1813,1814,5,124,0,0,1814,1816,
	5,34,0,0,1815,1813,1,0,0,0,1815,1816,1,0,0,0,1816,1817,1,0,0,0,1817,1818,
	5,322,0,0,1818,1869,1,0,0,0,1819,1820,5,69,0,0,1820,1821,5,321,0,0,1821,
	1824,3,250,125,0,1822,1823,5,124,0,0,1823,1825,5,34,0,0,1824,1822,1,0,0,
	0,1824,1825,1,0,0,0,1825,1826,1,0,0,0,1826,1827,5,322,0,0,1827,1869,1,0,
	0,0,1828,1829,5,129,0,0,1829,1830,5,321,0,0,1830,1831,3,258,129,0,1831,
	1832,5,24,0,0,1832,1833,3,258,129,0,1833,1834,5,322,0,0,1834,1869,1,0,0,
	0,1835,1869,3,334,167,0,1836,1869,5,332,0,0,1837,1838,3,306,153,0,1838,
	1839,5,318,0,0,1839,1840,5,332,0,0,1840,1869,1,0,0,0,1841,1842,5,321,0,
	0,1842,1843,3,148,74,0,1843,1844,5,322,0,0,1844,1869,1,0,0,0,1845,1846,
	3,262,131,0,1846,1858,5,321,0,0,1847,1849,3,342,171,0,1848,1847,1,0,0,0,
	1848,1849,1,0,0,0,1849,1850,1,0,0,0,1850,1855,3,250,125,0,1851,1852,5,325,
	0,0,1852,1854,3,250,125,0,1853,1851,1,0,0,0,1854,1857,1,0,0,0,1855,1853,
	1,0,0,0,1855,1856,1,0,0,0,1856,1859,1,0,0,0,1857,1855,1,0,0,0,1858,1848,
	1,0,0,0,1858,1859,1,0,0,0,1859,1860,1,0,0,0,1860,1861,5,322,0,0,1861,1869,
	1,0,0,0,1862,1869,3,294,147,0,1863,1869,3,264,132,0,1864,1865,5,321,0,0,
	1865,1866,3,250,125,0,1866,1867,5,322,0,0,1867,1869,1,0,0,0,1868,1777,1,
	0,0,0,1868,1790,1,0,0,0,1868,1803,1,0,0,0,1868,1810,1,0,0,0,1868,1819,1,
	0,0,0,1868,1828,1,0,0,0,1868,1835,1,0,0,0,1868,1836,1,0,0,0,1868,1837,1,
	0,0,0,1868,1841,1,0,0,0,1868,1845,1,0,0,0,1868,1862,1,0,0,0,1868,1863,1,
	0,0,0,1868,1864,1,0,0,0,1869,1877,1,0,0,0,1870,1871,10,4,0,0,1871,1872,
	5,319,0,0,1872,1873,3,258,129,0,1873,1874,5,320,0,0,1874,1876,1,0,0,0,1875,
	1870,1,0,0,0,1876,1879,1,0,0,0,1877,1875,1,0,0,0,1877,1878,1,0,0,0,1878,
	261,1,0,0,0,1879,1877,1,0,0,0,1880,1881,3,306,153,0,1881,263,1,0,0,0,1882,
	1883,3,306,153,0,1883,265,1,0,0,0,1884,1885,3,294,147,0,1885,267,1,0,0,
	0,1886,1889,3,294,147,0,1887,1889,3,264,132,0,1888,1886,1,0,0,0,1888,1887,
	1,0,0,0,1889,269,1,0,0,0,1890,1893,5,38,0,0,1891,1894,3,272,136,0,1892,
	1894,3,276,138,0,1893,1891,1,0,0,0,1893,1892,1,0,0,0,1893,1894,1,0,0,0,
	1894,271,1,0,0,0,1895,1897,3,274,137,0,1896,1898,3,278,139,0,1897,1896,
	1,0,0,0,1897,1898,1,0,0,0,1898,273,1,0,0,0,1899,1900,3,280,140,0,1900,1901,
	3,294,147,0,1901,1903,1,0,0,0,1902,1899,1,0,0,0,1903,1904,1,0,0,0,1904,
	1902,1,0,0,0,1904,1905,1,0,0,0,1905,275,1,0,0,0,1906,1909,3,278,139,0,1907,
	1910,3,274,137,0,1908,1910,3,278,139,0,1909,1907,1,0,0,0,1909,1908,1,0,
	0,0,1909,1910,1,0,0,0,1910,277,1,0,0,0,1911,1912,3,280,140,0,1912,1913,
	3,294,147,0,1913,1914,5,109,0,0,1914,1915,3,294,147,0,1915,279,1,0,0,0,
	1916,1918,7,33,0,0,1917,1916,1,0,0,0,1917,1918,1,0,0,0,1918,1919,1,0,0,
	0,1919,1922,7,34,0,0,1920,1922,5,342,0,0,1921,1917,1,0,0,0,1921,1920,1,
	0,0,0,1922,281,1,0,0,0,1923,1925,5,7,0,0,1924,1923,1,0,0,0,1924,1925,1,
	0,0,0,1925,1926,1,0,0,0,1926,1928,3,296,148,0,1927,1929,3,290,145,0,1928,
	1927,1,0,0,0,1928,1929,1,0,0,0,1929,283,1,0,0,0,1930,1932,5,7,0,0,1931,
	1930,1,0,0,0,1931,1932,1,0,0,0,1932,1933,1,0,0,0,1933,1935,3,296,148,0,
	1934,1936,3,290,145,0,1935,1934,1,0,0,0,1935,1936,1,0,0,0,1936,285,1,0,
	0,0,1937,1938,3,294,147,0,1938,1939,3,288,144,0,1939,287,1,0,0,0,1940,1941,
	5,131,0,0,1941,1943,3,294,147,0,1942,1940,1,0,0,0,1943,1944,1,0,0,0,1944,
	1942,1,0,0,0,1944,1945,1,0,0,0,1945,1948,1,0,0,0,1946,1948,1,0,0,0,1947,
	1942,1,0,0,0,1947,1946,1,0,0,0,1948,289,1,0,0,0,1949,1950,5,321,0,0,1950,
	1951,3,292,146,0,1951,1952,5,322,0,0,1952,291,1,0,0,0,1953,1958,3,294,147,
	0,1954,1955,5,325,0,0,1955,1957,3,294,147,0,1956,1954,1,0,0,0,1957,1960,
	1,0,0,0,1958,1956,1,0,0,0,1958,1959,1,0,0,0,1959,293,1,0,0,0,1960,1958,
	1,0,0,0,1961,1964,3,296,148,0,1962,1964,3,346,173,0,1963,1961,1,0,0,0,1963,
	1962,1,0,0,0,1964,295,1,0,0,0,1965,1970,3,298,149,0,1966,1970,3,300,150,
	0,1967,1970,3,344,172,0,1968,1970,3,348,174,0,1969,1965,1,0,0,0,1969,1966,
	1,0,0,0,1969,1967,1,0,0,0,1969,1968,1,0,0,0,1970,297,1,0,0,0,1971,1972,
	7,35,0,0,1972,299,1,0,0,0,1973,1974,5,342,0,0,1974,301,1,0,0,0,1975,1976,
	5,40,0,0,1976,1977,3,250,125,0,1977,1978,5,41,0,0,1978,1979,3,250,125,0,
	1979,303,1,0,0,0,1980,1985,3,306,153,0,1981,1982,5,325,0,0,1982,1984,3,
	306,153,0,1983,1981,1,0,0,0,1984,1987,1,0,0,0,1985,1983,1,0,0,0,1985,1986,
	1,0,0,0,1986,305,1,0,0,0,1987,1985,1,0,0,0,1988,1992,5,346,0,0,1989,1991,
	5,341,0,0,1990,1989,1,0,0,0,1991,1994,1,0,0,0,1992,1993,1,0,0,0,1992,1990,
	1,0,0,0,1993,307,1,0,0,0,1994,1992,1,0,0,0,1995,1996,5,70,0,0,1996,1997,
	3,314,157,0,1997,309,1,0,0,0,1998,1999,5,128,0,0,1999,2000,5,25,0,0,2000,
	2001,5,27,0,0,2001,311,1,0,0,0,2002,2003,5,128,0,0,2003,2004,5,27,0,0,2004,
	313,1,0,0,0,2005,2006,5,321,0,0,2006,2011,3,316,158,0,2007,2008,5,325,0,
	0,2008,2010,3,316,158,0,2009,2007,1,0,0,0,2010,2013,1,0,0,0,2011,2009,1,
	0,0,0,2011,2012,1,0,0,0,2012,2014,1,0,0,0,2013,2011,1,0,0,0,2014,2015,5,
	322,0,0,2015,315,1,0,0,0,2016,2021,3,318,159,0,2017,2019,5,310,0,0,2018,
	2017,1,0,0,0,2018,2019,1,0,0,0,2019,2020,1,0,0,0,2020,2022,3,320,160,0,
	2021,2018,1,0,0,0,2021,2022,1,0,0,0,2022,317,1,0,0,0,2023,2027,3,294,147,
	0,2024,2027,3,264,132,0,2025,2027,5,342,0,0,2026,2023,1,0,0,0,2026,2024,
	1,0,0,0,2026,2025,1,0,0,0,2027,319,1,0,0,0,2028,2033,5,343,0,0,2029,2033,
	5,344,0,0,2030,2033,3,340,170,0,2031,2033,5,342,0,0,2032,2028,1,0,0,0,2032,
	2029,1,0,0,0,2032,2030,1,0,0,0,2032,2031,1,0,0,0,2033,321,1,0,0,0,2034,
	2041,5,23,0,0,2035,2036,5,316,0,0,2036,2041,5,316,0,0,2037,2041,5,22,0,
	0,2038,2039,5,315,0,0,2039,2041,5,315,0,0,2040,2034,1,0,0,0,2040,2035,1,
	0,0,0,2040,2037,1,0,0,0,2040,2038,1,0,0,0,2041,323,1,0,0,0,2042,2057,5,
	310,0,0,2043,2057,5,311,0,0,2044,2057,5,312,0,0,2045,2046,5,312,0,0,2046,
	2057,5,310,0,0,2047,2048,5,311,0,0,2048,2057,5,310,0,0,2049,2050,5,312,
	0,0,2050,2057,5,311,0,0,2051,2052,5,313,0,0,2052,2057,5,310,0,0,2053,2054,
	5,312,0,0,2054,2055,5,310,0,0,2055,2057,5,311,0,0,2056,2042,1,0,0,0,2056,
	2043,1,0,0,0,2056,2044,1,0,0,0,2056,2045,1,0,0,0,2056,2047,1,0,0,0,2056,
	2049,1,0,0,0,2056,2051,1,0,0,0,2056,2053,1,0,0,0,2057,325,1,0,0,0,2058,
	2059,5,312,0,0,2059,2066,5,312,0,0,2060,2061,5,311,0,0,2061,2066,5,311,
	0,0,2062,2066,5,316,0,0,2063,2066,5,317,0,0,2064,2066,5,315,0,0,2065,2058,
	1,0,0,0,2065,2060,1,0,0,0,2065,2062,1,0,0,0,2065,2063,1,0,0,0,2065,2064,
	1,0,0,0,2066,327,1,0,0,0,2067,2068,7,36,0,0,2068,329,1,0,0,0,2069,2070,
	7,37,0,0,2070,331,1,0,0,0,2071,2072,3,306,153,0,2072,333,1,0,0,0,2073,2086,
	3,336,168,0,2074,2086,3,338,169,0,2075,2086,3,270,135,0,2076,2077,5,334,
	0,0,2077,2086,3,338,169,0,2078,2086,3,340,170,0,2079,2086,5,344,0,0,2080,
	2086,5,345,0,0,2081,2083,5,25,0,0,2082,2081,1,0,0,0,2082,2083,1,0,0,0,2083,
	2084,1,0,0,0,2084,2086,5,308,0,0,2085,2073,1,0,0,0,2085,2074,1,0,0,0,2085,
	2075,1,0,0,0,2085,2076,1,0,0,0,2085,2078,1,0,0,0,2085,2079,1,0,0,0,2085,
	2080,1,0,0,0,2085,2082,1,0,0,0,2086,335,1,0,0,0,2087,2088,5,342,0,0,2088,
	337,1,0,0,0,2089,2090,5,343,0,0,2090,339,1,0,0,0,2091,2092,7,29,0,0,2092,
	341,1,0,0,0,2093,2094,7,38,0,0,2094,343,1,0,0,0,2095,2096,7,39,0,0,2096,
	345,1,0,0,0,2097,2098,7,40,0,0,2098,347,1,0,0,0,2099,2100,7,41,0,0,2100,
	349,1,0,0,0,241,358,361,363,378,396,400,409,414,421,428,432,441,453,456,
	463,471,476,479,486,494,498,510,518,522,543,547,551,555,564,569,573,577,
	581,584,588,593,599,604,609,612,616,624,632,636,640,644,648,652,656,660,
	664,666,676,684,708,715,730,733,741,753,777,790,795,799,807,811,819,829,
	833,839,843,847,850,859,863,870,873,883,893,908,919,923,930,935,941,945,
	952,956,960,964,972,976,981,986,992,995,999,1010,1019,1032,1044,1055,1058,
	1062,1065,1067,1072,1076,1079,1083,1092,1102,1107,1119,1122,1125,1128,1134,
	1138,1146,1149,1154,1157,1159,1173,1184,1189,1197,1200,1203,1208,1210,1212,
	1217,1220,1224,1227,1230,1242,1249,1260,1289,1311,1329,1334,1346,1359,1371,
	1383,1388,1415,1423,1427,1430,1433,1440,1443,1446,1449,1452,1455,1460,1463,
	1472,1477,1481,1486,1495,1514,1522,1530,1534,1538,1548,1574,1582,1594,1620,
	1622,1630,1632,1636,1644,1653,1659,1672,1677,1689,1694,1697,1703,1708,1713,
	1718,1721,1733,1738,1741,1745,1751,1772,1774,1782,1786,1795,1799,1815,1824,
	1848,1855,1858,1868,1877,1888,1893,1897,1904,1909,1917,1921,1924,1928,1931,
	1935,1944,1947,1958,1963,1969,1985,1992,2011,2018,2021,2026,2032,2040,2056,
	2065,2082,2085];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FlinkSqlParser.__ATN) {
			FlinkSqlParser.__ATN = new ATNDeserializer().deserialize(FlinkSqlParser._serializedATN);
		}

		return FlinkSqlParser.__ATN;
	}


	static DecisionsToDFA = FlinkSqlParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(FlinkSqlParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_program;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sqlStatements(): SqlStatementsContext {
		return this.getTypedRuleContext(SqlStatementsContext, 0) as SqlStatementsContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(FlinkSqlParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_statement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlStatementsContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sqlStatement_list(): SqlStatementContext[] {
		return this.getTypedRuleContexts(SqlStatementContext) as SqlStatementContext[];
	}
	public sqlStatement(i: number): SqlStatementContext {
		return this.getTypedRuleContext(SqlStatementContext, i) as SqlStatementContext;
	}
	public emptyStatement_list(): EmptyStatementContext[] {
		return this.getTypedRuleContexts(EmptyStatementContext) as EmptyStatementContext[];
	}
	public emptyStatement(i: number): EmptyStatementContext {
		return this.getTypedRuleContext(EmptyStatementContext, i) as EmptyStatementContext;
	}
	public SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.SEMICOLON);
	}
	public SEMICOLON(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.SEMICOLON, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_sqlStatements;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSqlStatements) {
	 		listener.enterSqlStatements(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSqlStatements) {
	 		listener.exitSqlStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSqlStatements) {
			return visitor.visitSqlStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlStatementContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ddlStatement(): DdlStatementContext {
		return this.getTypedRuleContext(DdlStatementContext, 0) as DdlStatementContext;
	}
	public dmlStatement(): DmlStatementContext {
		return this.getTypedRuleContext(DmlStatementContext, 0) as DmlStatementContext;
	}
	public describeStatement(): DescribeStatementContext {
		return this.getTypedRuleContext(DescribeStatementContext, 0) as DescribeStatementContext;
	}
	public explainStatement(): ExplainStatementContext {
		return this.getTypedRuleContext(ExplainStatementContext, 0) as ExplainStatementContext;
	}
	public useStatement(): UseStatementContext {
		return this.getTypedRuleContext(UseStatementContext, 0) as UseStatementContext;
	}
	public showStatememt(): ShowStatememtContext {
		return this.getTypedRuleContext(ShowStatememtContext, 0) as ShowStatememtContext;
	}
	public loadStatement(): LoadStatementContext {
		return this.getTypedRuleContext(LoadStatementContext, 0) as LoadStatementContext;
	}
	public unloadStatememt(): UnloadStatememtContext {
		return this.getTypedRuleContext(UnloadStatememtContext, 0) as UnloadStatememtContext;
	}
	public setStatememt(): SetStatememtContext {
		return this.getTypedRuleContext(SetStatememtContext, 0) as SetStatememtContext;
	}
	public resetStatememt(): ResetStatememtContext {
		return this.getTypedRuleContext(ResetStatememtContext, 0) as ResetStatememtContext;
	}
	public jarStatememt(): JarStatememtContext {
		return this.getTypedRuleContext(JarStatememtContext, 0) as JarStatememtContext;
	}
	public dtAddStatement(): DtAddStatementContext {
		return this.getTypedRuleContext(DtAddStatementContext, 0) as DtAddStatementContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_sqlStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSqlStatement) {
	 		listener.enterSqlStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSqlStatement) {
	 		listener.exitSqlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSqlStatement) {
			return visitor.visitSqlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(FlinkSqlParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_emptyStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterEmptyStatement) {
	 		listener.enterEmptyStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitEmptyStatement) {
	 		listener.exitEmptyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DdlStatementContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public createTable(): CreateTableContext {
		return this.getTypedRuleContext(CreateTableContext, 0) as CreateTableContext;
	}
	public createDatabase(): CreateDatabaseContext {
		return this.getTypedRuleContext(CreateDatabaseContext, 0) as CreateDatabaseContext;
	}
	public createView(): CreateViewContext {
		return this.getTypedRuleContext(CreateViewContext, 0) as CreateViewContext;
	}
	public createFunction(): CreateFunctionContext {
		return this.getTypedRuleContext(CreateFunctionContext, 0) as CreateFunctionContext;
	}
	public createCatalog(): CreateCatalogContext {
		return this.getTypedRuleContext(CreateCatalogContext, 0) as CreateCatalogContext;
	}
	public alterTable(): AlterTableContext {
		return this.getTypedRuleContext(AlterTableContext, 0) as AlterTableContext;
	}
	public alertView(): AlertViewContext {
		return this.getTypedRuleContext(AlertViewContext, 0) as AlertViewContext;
	}
	public alterDatabase(): AlterDatabaseContext {
		return this.getTypedRuleContext(AlterDatabaseContext, 0) as AlterDatabaseContext;
	}
	public alterFunction(): AlterFunctionContext {
		return this.getTypedRuleContext(AlterFunctionContext, 0) as AlterFunctionContext;
	}
	public dropCatalog(): DropCatalogContext {
		return this.getTypedRuleContext(DropCatalogContext, 0) as DropCatalogContext;
	}
	public dropTable(): DropTableContext {
		return this.getTypedRuleContext(DropTableContext, 0) as DropTableContext;
	}
	public dropDatabase(): DropDatabaseContext {
		return this.getTypedRuleContext(DropDatabaseContext, 0) as DropDatabaseContext;
	}
	public dropView(): DropViewContext {
		return this.getTypedRuleContext(DropViewContext, 0) as DropViewContext;
	}
	public dropFunction(): DropFunctionContext {
		return this.getTypedRuleContext(DropFunctionContext, 0) as DropFunctionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_ddlStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDdlStatement) {
	 		listener.enterDdlStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDdlStatement) {
	 		listener.exitDdlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDdlStatement) {
			return visitor.visitDdlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DmlStatementContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
	public insertStatement(): InsertStatementContext {
		return this.getTypedRuleContext(InsertStatementContext, 0) as InsertStatementContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dmlStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDmlStatement) {
	 		listener.enterDmlStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDmlStatement) {
	 		listener.exitDmlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDmlStatement) {
			return visitor.visitDmlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescribeStatementContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public DESCRIBE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DESCRIBE, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(FlinkSqlParser.DESC, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_describeStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDescribeStatement) {
	 		listener.enterDescribeStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDescribeStatement) {
	 		listener.exitDescribeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDescribeStatement) {
			return visitor.visitDescribeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplainStatementContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXPLAIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXPLAIN, 0);
	}
	public dmlStatement(): DmlStatementContext {
		return this.getTypedRuleContext(DmlStatementContext, 0) as DmlStatementContext;
	}
	public insertSimpleStatement(): InsertSimpleStatementContext {
		return this.getTypedRuleContext(InsertSimpleStatementContext, 0) as InsertSimpleStatementContext;
	}
	public insertMulStatement(): InsertMulStatementContext {
		return this.getTypedRuleContext(InsertMulStatementContext, 0) as InsertMulStatementContext;
	}
	public explainDetails(): ExplainDetailsContext {
		return this.getTypedRuleContext(ExplainDetailsContext, 0) as ExplainDetailsContext;
	}
	public PLAN(): TerminalNode {
		return this.getToken(FlinkSqlParser.PLAN, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(FlinkSqlParser.FOR, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_explainStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterExplainStatement) {
	 		listener.enterExplainStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitExplainStatement) {
	 		listener.exitExplainStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitExplainStatement) {
			return visitor.visitExplainStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplainDetailsContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public explainDetail_list(): ExplainDetailContext[] {
		return this.getTypedRuleContexts(ExplainDetailContext) as ExplainDetailContext[];
	}
	public explainDetail(i: number): ExplainDetailContext {
		return this.getTypedRuleContext(ExplainDetailContext, i) as ExplainDetailContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_explainDetails;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterExplainDetails) {
	 		listener.enterExplainDetails(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitExplainDetails) {
	 		listener.exitExplainDetails(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitExplainDetails) {
			return visitor.visitExplainDetails(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplainDetailContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHANGELOG_MODE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CHANGELOG_MODE, 0);
	}
	public JSON_EXECUTION_PLAN(): TerminalNode {
		return this.getToken(FlinkSqlParser.JSON_EXECUTION_PLAN, 0);
	}
	public ESTIMATED_COST(): TerminalNode {
		return this.getToken(FlinkSqlParser.ESTIMATED_COST, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_explainDetail;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterExplainDetail) {
	 		listener.enterExplainDetail(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitExplainDetail) {
	 		listener.exitExplainDetail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitExplainDetail) {
			return visitor.visitExplainDetail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseStatementContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public USE(): TerminalNode {
		return this.getToken(FlinkSqlParser.USE, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public CATALOG(): TerminalNode {
		return this.getToken(FlinkSqlParser.CATALOG, 0);
	}
	public useModuleStatement(): UseModuleStatementContext {
		return this.getTypedRuleContext(UseModuleStatementContext, 0) as UseModuleStatementContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_useStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUseStatement) {
	 		listener.enterUseStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUseStatement) {
	 		listener.exitUseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUseStatement) {
			return visitor.visitUseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseModuleStatementContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public USE(): TerminalNode {
		return this.getToken(FlinkSqlParser.USE, 0);
	}
	public MODULES(): TerminalNode {
		return this.getToken(FlinkSqlParser.MODULES, 0);
	}
	public uid_list(): UidContext[] {
		return this.getTypedRuleContexts(UidContext) as UidContext[];
	}
	public uid(i: number): UidContext {
		return this.getTypedRuleContext(UidContext, i) as UidContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_useModuleStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUseModuleStatement) {
	 		listener.enterUseModuleStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUseModuleStatement) {
	 		listener.exitUseModuleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUseModuleStatement) {
			return visitor.visitUseModuleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowStatememtContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHOW(): TerminalNode {
		return this.getToken(FlinkSqlParser.SHOW, 0);
	}
	public CATALOGS(): TerminalNode {
		return this.getToken(FlinkSqlParser.CATALOGS, 0);
	}
	public DATABASES(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATABASES, 0);
	}
	public VIEWS(): TerminalNode {
		return this.getToken(FlinkSqlParser.VIEWS, 0);
	}
	public JARS(): TerminalNode {
		return this.getToken(FlinkSqlParser.JARS, 0);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.CURRENT, 0);
	}
	public CATALOG(): TerminalNode {
		return this.getToken(FlinkSqlParser.CATALOG, 0);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATABASE, 0);
	}
	public TABLES(): TerminalNode {
		return this.getToken(FlinkSqlParser.TABLES, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public likePredicate(): LikePredicateContext {
		return this.getTypedRuleContext(LikePredicateContext, 0) as LikePredicateContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(FlinkSqlParser.FROM, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(FlinkSqlParser.IN, 0);
	}
	public COLUMNS(): TerminalNode {
		return this.getToken(FlinkSqlParser.COLUMNS, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CREATE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TABLE, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(FlinkSqlParser.VIEW, 0);
	}
	public FUNCTIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.FUNCTIONS, 0);
	}
	public USER(): TerminalNode {
		return this.getToken(FlinkSqlParser.USER, 0);
	}
	public MODULES(): TerminalNode {
		return this.getToken(FlinkSqlParser.MODULES, 0);
	}
	public FULL(): TerminalNode {
		return this.getToken(FlinkSqlParser.FULL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_showStatememt;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterShowStatememt) {
	 		listener.enterShowStatememt(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitShowStatememt) {
	 		listener.exitShowStatememt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitShowStatememt) {
			return visitor.visitShowStatememt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoadStatementContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LOAD(): TerminalNode {
		return this.getToken(FlinkSqlParser.LOAD, 0);
	}
	public MODULE(): TerminalNode {
		return this.getToken(FlinkSqlParser.MODULE, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(FlinkSqlParser.WITH, 0);
	}
	public tablePropertyList(): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, 0) as TablePropertyListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_loadStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLoadStatement) {
	 		listener.enterLoadStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLoadStatement) {
	 		listener.exitLoadStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLoadStatement) {
			return visitor.visitLoadStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnloadStatememtContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNLOAD(): TerminalNode {
		return this.getToken(FlinkSqlParser.UNLOAD, 0);
	}
	public MODULE(): TerminalNode {
		return this.getToken(FlinkSqlParser.MODULE, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_unloadStatememt;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUnloadStatememt) {
	 		listener.enterUnloadStatememt(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUnloadStatememt) {
	 		listener.exitUnloadStatememt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUnloadStatememt) {
			return visitor.visitUnloadStatememt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetStatememtContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SET(): TerminalNode {
		return this.getToken(FlinkSqlParser.SET, 0);
	}
	public tableProperty(): TablePropertyContext {
		return this.getTypedRuleContext(TablePropertyContext, 0) as TablePropertyContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_setStatememt;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSetStatememt) {
	 		listener.enterSetStatememt(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSetStatememt) {
	 		listener.exitSetStatememt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSetStatememt) {
			return visitor.visitSetStatememt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResetStatememtContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RESET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RESET, 0);
	}
	public tablePropertyKey(): TablePropertyKeyContext {
		return this.getTypedRuleContext(TablePropertyKeyContext, 0) as TablePropertyKeyContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_resetStatememt;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterResetStatememt) {
	 		listener.enterResetStatememt(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitResetStatememt) {
	 		listener.exitResetStatememt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitResetStatememt) {
			return visitor.visitResetStatememt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JarStatememtContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public JAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.JAR, 0);
	}
	public jarFileName(): JarFileNameContext {
		return this.getTypedRuleContext(JarFileNameContext, 0) as JarFileNameContext;
	}
	public ADD(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD, 0);
	}
	public REMOVE(): TerminalNode {
		return this.getToken(FlinkSqlParser.REMOVE, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_jarStatememt;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterJarStatememt) {
	 		listener.enterJarStatememt(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitJarStatememt) {
	 		listener.exitJarStatememt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitJarStatememt) {
			return visitor.visitJarStatememt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DtAddStatementContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ADD(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD, 0);
	}
	public JAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.JAR, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(FlinkSqlParser.WITH, 0);
	}
	public FILE_PATH(): TerminalNode {
		return this.getToken(FlinkSqlParser.FILE_PATH, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
	public uid_list(): UidContext[] {
		return this.getTypedRuleContexts(UidContext) as UidContext[];
	}
	public uid(i: number): UidContext {
		return this.getTypedRuleContext(UidContext, i) as UidContext;
	}
	public FILE(): TerminalNode {
		return this.getToken(FlinkSqlParser.FILE, 0);
	}
	public RENAME(): TerminalNode {
		return this.getToken(FlinkSqlParser.RENAME, 0);
	}
	public PYTHON_FILES(): TerminalNode {
		return this.getToken(FlinkSqlParser.PYTHON_FILES, 0);
	}
	public PYTHON_REQUIREMENTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.PYTHON_REQUIREMENTS, 0);
	}
	public PYTHON_DEPENDENCIES(): TerminalNode {
		return this.getToken(FlinkSqlParser.PYTHON_DEPENDENCIES, 0);
	}
	public PYTHON_JAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.PYTHON_JAR, 0);
	}
	public PYTHON_ARCHIVES(): TerminalNode {
		return this.getToken(FlinkSqlParser.PYTHON_ARCHIVES, 0);
	}
	public PYTHON_PARAMETER(): TerminalNode {
		return this.getToken(FlinkSqlParser.PYTHON_PARAMETER, 0);
	}
	public ENGINE(): TerminalNode {
		return this.getToken(FlinkSqlParser.ENGINE, 0);
	}
	public KEY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KEY, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dtAddStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDtAddStatement) {
	 		listener.enterDtAddStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDtAddStatement) {
	 		listener.exitDtAddStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDtAddStatement) {
			return visitor.visitDtAddStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateTableContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simpleCreateTable(): SimpleCreateTableContext {
		return this.getTypedRuleContext(SimpleCreateTableContext, 0) as SimpleCreateTableContext;
	}
	public createTableAsSelect(): CreateTableAsSelectContext {
		return this.getTypedRuleContext(CreateTableAsSelectContext, 0) as CreateTableAsSelectContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_createTable;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCreateTable) {
	 		listener.enterCreateTable(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCreateTable) {
	 		listener.exitCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateTable) {
			return visitor.visitCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleCreateTableContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CREATE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TABLE, 0);
	}
	public sourceTable(): SourceTableContext {
		return this.getTypedRuleContext(SourceTableContext, 0) as SourceTableContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public columnOptionDefinition_list(): ColumnOptionDefinitionContext[] {
		return this.getTypedRuleContexts(ColumnOptionDefinitionContext) as ColumnOptionDefinitionContext[];
	}
	public columnOptionDefinition(i: number): ColumnOptionDefinitionContext {
		return this.getTypedRuleContext(ColumnOptionDefinitionContext, i) as ColumnOptionDefinitionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public withOption(): WithOptionContext {
		return this.getTypedRuleContext(WithOptionContext, 0) as WithOptionContext;
	}
	public TEMPORARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.TEMPORARY, 0);
	}
	public ifNotExists(): IfNotExistsContext {
		return this.getTypedRuleContext(IfNotExistsContext, 0) as IfNotExistsContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
	public watermarkDefinition(): WatermarkDefinitionContext {
		return this.getTypedRuleContext(WatermarkDefinitionContext, 0) as WatermarkDefinitionContext;
	}
	public tableConstraint(): TableConstraintContext {
		return this.getTypedRuleContext(TableConstraintContext, 0) as TableConstraintContext;
	}
	public selfDefinitionClause(): SelfDefinitionClauseContext {
		return this.getTypedRuleContext(SelfDefinitionClauseContext, 0) as SelfDefinitionClauseContext;
	}
	public commentSpec(): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, 0) as CommentSpecContext;
	}
	public partitionDefinition(): PartitionDefinitionContext {
		return this.getTypedRuleContext(PartitionDefinitionContext, 0) as PartitionDefinitionContext;
	}
	public likeDefinition(): LikeDefinitionContext {
		return this.getTypedRuleContext(LikeDefinitionContext, 0) as LikeDefinitionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_simpleCreateTable;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSimpleCreateTable) {
	 		listener.enterSimpleCreateTable(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSimpleCreateTable) {
	 		listener.exitSimpleCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSimpleCreateTable) {
			return visitor.visitSimpleCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateTableAsSelectContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CREATE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TABLE, 0);
	}
	public sourceTable(): SourceTableContext {
		return this.getTypedRuleContext(SourceTableContext, 0) as SourceTableContext;
	}
	public withOption(): WithOptionContext {
		return this.getTypedRuleContext(WithOptionContext, 0) as WithOptionContext;
	}
	public ifNotExists(): IfNotExistsContext {
		return this.getTypedRuleContext(IfNotExistsContext, 0) as IfNotExistsContext;
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_createTableAsSelect;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCreateTableAsSelect) {
	 		listener.enterCreateTableAsSelect(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCreateTableAsSelect) {
	 		listener.exitCreateTableAsSelect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateTableAsSelect) {
			return visitor.visitCreateTableAsSelect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnOptionDefinitionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public physicalColumnDefinition(): PhysicalColumnDefinitionContext {
		return this.getTypedRuleContext(PhysicalColumnDefinitionContext, 0) as PhysicalColumnDefinitionContext;
	}
	public metadataColumnDefinition(): MetadataColumnDefinitionContext {
		return this.getTypedRuleContext(MetadataColumnDefinitionContext, 0) as MetadataColumnDefinitionContext;
	}
	public computedColumnDefinition(): ComputedColumnDefinitionContext {
		return this.getTypedRuleContext(ComputedColumnDefinitionContext, 0) as ComputedColumnDefinitionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_columnOptionDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterColumnOptionDefinition) {
	 		listener.enterColumnOptionDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitColumnOptionDefinition) {
	 		listener.exitColumnOptionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnOptionDefinition) {
			return visitor.visitColumnOptionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PhysicalColumnDefinitionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public columnName(): ColumnNameContext {
		return this.getTypedRuleContext(ColumnNameContext, 0) as ColumnNameContext;
	}
	public columnType(): ColumnTypeContext {
		return this.getTypedRuleContext(ColumnTypeContext, 0) as ColumnTypeContext;
	}
	public columnConstraint(): ColumnConstraintContext {
		return this.getTypedRuleContext(ColumnConstraintContext, 0) as ColumnConstraintContext;
	}
	public commentSpec(): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, 0) as CommentSpecContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_physicalColumnDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPhysicalColumnDefinition) {
	 		listener.enterPhysicalColumnDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPhysicalColumnDefinition) {
	 		listener.exitPhysicalColumnDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPhysicalColumnDefinition) {
			return visitor.visitPhysicalColumnDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnNameContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_columnName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterColumnName) {
	 		listener.enterColumnName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitColumnName) {
	 		listener.exitColumnName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnName) {
			return visitor.visitColumnName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnNameListContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public columnName_list(): ColumnNameContext[] {
		return this.getTypedRuleContexts(ColumnNameContext) as ColumnNameContext[];
	}
	public columnName(i: number): ColumnNameContext {
		return this.getTypedRuleContext(ColumnNameContext, i) as ColumnNameContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_columnNameList;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterColumnNameList) {
	 		listener.enterColumnNameList(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitColumnNameList) {
	 		listener.exitColumnNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnNameList) {
			return visitor.visitColumnNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnTypeContext extends ParserRuleContext {
	public _typeName!: Token;
	public _type_!: Token;
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATE, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(FlinkSqlParser.BOOLEAN, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(FlinkSqlParser.NULL, 0);
	}
	public CHAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.CHAR, 0);
	}
	public VARCHAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.VARCHAR, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING, 0);
	}
	public BINARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.BINARY, 0);
	}
	public VARBINARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.VARBINARY, 0);
	}
	public BYTES(): TerminalNode {
		return this.getToken(FlinkSqlParser.BYTES, 0);
	}
	public TINYINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.TINYINT, 0);
	}
	public SMALLINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.SMALLINT, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(FlinkSqlParser.INT, 0);
	}
	public INTEGER(): TerminalNode {
		return this.getToken(FlinkSqlParser.INTEGER, 0);
	}
	public BIGINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIGINT, 0);
	}
	public TIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.TIME, 0);
	}
	public TIMESTAMP_LTZ(): TerminalNode {
		return this.getToken(FlinkSqlParser.TIMESTAMP_LTZ, 0);
	}
	public DATETIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATETIME, 0);
	}
	public lengthOneDimension(): LengthOneDimensionContext {
		return this.getTypedRuleContext(LengthOneDimensionContext, 0) as LengthOneDimensionContext;
	}
	public TIMESTAMP(): TerminalNode {
		return this.getToken(FlinkSqlParser.TIMESTAMP, 0);
	}
	public ZONE(): TerminalNode {
		return this.getToken(FlinkSqlParser.ZONE, 0);
	}
	public WITHOUT(): TerminalNode {
		return this.getToken(FlinkSqlParser.WITHOUT, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(FlinkSqlParser.WITH, 0);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.LOCAL, 0);
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.DECIMAL, 0);
	}
	public DEC(): TerminalNode {
		return this.getToken(FlinkSqlParser.DEC, 0);
	}
	public NUMERIC(): TerminalNode {
		return this.getToken(FlinkSqlParser.NUMERIC, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(FlinkSqlParser.FLOAT, 0);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DOUBLE, 0);
	}
	public lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext {
		return this.getTypedRuleContext(LengthTwoOptionalDimensionContext, 0) as LengthTwoOptionalDimensionContext;
	}
	public ARRAY(): TerminalNode {
		return this.getToken(FlinkSqlParser.ARRAY, 0);
	}
	public MULTISET(): TerminalNode {
		return this.getToken(FlinkSqlParser.MULTISET, 0);
	}
	public lengthOneTypeDimension(): LengthOneTypeDimensionContext {
		return this.getTypedRuleContext(LengthOneTypeDimensionContext, 0) as LengthOneTypeDimensionContext;
	}
	public MAP(): TerminalNode {
		return this.getToken(FlinkSqlParser.MAP, 0);
	}
	public mapTypeDimension(): MapTypeDimensionContext {
		return this.getTypedRuleContext(MapTypeDimensionContext, 0) as MapTypeDimensionContext;
	}
	public ROW(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROW, 0);
	}
	public rowTypeDimension(): RowTypeDimensionContext {
		return this.getTypedRuleContext(RowTypeDimensionContext, 0) as RowTypeDimensionContext;
	}
	public RAW(): TerminalNode {
		return this.getToken(FlinkSqlParser.RAW, 0);
	}
	public lengthTwoStringDimension(): LengthTwoStringDimensionContext {
		return this.getTypedRuleContext(LengthTwoStringDimensionContext, 0) as LengthTwoStringDimensionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_columnType;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterColumnType) {
	 		listener.enterColumnType(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitColumnType) {
	 		listener.exitColumnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnType) {
			return visitor.visitColumnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LengthOneDimensionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public decimalLiteral(): DecimalLiteralContext {
		return this.getTypedRuleContext(DecimalLiteralContext, 0) as DecimalLiteralContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_lengthOneDimension;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLengthOneDimension) {
	 		listener.enterLengthOneDimension(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLengthOneDimension) {
	 		listener.exitLengthOneDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLengthOneDimension) {
			return visitor.visitLengthOneDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LengthTwoOptionalDimensionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public decimalLiteral_list(): DecimalLiteralContext[] {
		return this.getTypedRuleContexts(DecimalLiteralContext) as DecimalLiteralContext[];
	}
	public decimalLiteral(i: number): DecimalLiteralContext {
		return this.getTypedRuleContext(DecimalLiteralContext, i) as DecimalLiteralContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_lengthTwoOptionalDimension;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLengthTwoOptionalDimension) {
	 		listener.enterLengthTwoOptionalDimension(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLengthTwoOptionalDimension) {
	 		listener.exitLengthTwoOptionalDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLengthTwoOptionalDimension) {
			return visitor.visitLengthTwoOptionalDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LengthTwoStringDimensionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public stringLiteral_list(): StringLiteralContext[] {
		return this.getTypedRuleContexts(StringLiteralContext) as StringLiteralContext[];
	}
	public stringLiteral(i: number): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, i) as StringLiteralContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_lengthTwoStringDimension;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLengthTwoStringDimension) {
	 		listener.enterLengthTwoStringDimension(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLengthTwoStringDimension) {
	 		listener.exitLengthTwoStringDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLengthTwoStringDimension) {
			return visitor.visitLengthTwoStringDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LengthOneTypeDimensionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LESS_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
	}
	public columnType(): ColumnTypeContext {
		return this.getTypedRuleContext(ColumnTypeContext, 0) as ColumnTypeContext;
	}
	public GREATER_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_lengthOneTypeDimension;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLengthOneTypeDimension) {
	 		listener.enterLengthOneTypeDimension(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLengthOneTypeDimension) {
	 		listener.exitLengthOneTypeDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLengthOneTypeDimension) {
			return visitor.visitLengthOneTypeDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapTypeDimensionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LESS_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
	}
	public columnType_list(): ColumnTypeContext[] {
		return this.getTypedRuleContexts(ColumnTypeContext) as ColumnTypeContext[];
	}
	public columnType(i: number): ColumnTypeContext {
		return this.getTypedRuleContext(ColumnTypeContext, i) as ColumnTypeContext;
	}
	public GREATER_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_mapTypeDimension;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterMapTypeDimension) {
	 		listener.enterMapTypeDimension(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitMapTypeDimension) {
	 		listener.exitMapTypeDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitMapTypeDimension) {
			return visitor.visitMapTypeDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowTypeDimensionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LESS_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
	}
	public columnName_list(): ColumnNameContext[] {
		return this.getTypedRuleContexts(ColumnNameContext) as ColumnNameContext[];
	}
	public columnName(i: number): ColumnNameContext {
		return this.getTypedRuleContext(ColumnNameContext, i) as ColumnNameContext;
	}
	public columnType_list(): ColumnTypeContext[] {
		return this.getTypedRuleContexts(ColumnTypeContext) as ColumnTypeContext[];
	}
	public columnType(i: number): ColumnTypeContext {
		return this.getTypedRuleContext(ColumnTypeContext, i) as ColumnTypeContext;
	}
	public GREATER_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_rowTypeDimension;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterRowTypeDimension) {
	 		listener.enterRowTypeDimension(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitRowTypeDimension) {
	 		listener.exitRowTypeDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitRowTypeDimension) {
			return visitor.visitRowTypeDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnConstraintContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PRIMARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.PRIMARY, 0);
	}
	public KEY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KEY, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.NOT, 0);
	}
	public ENFORCED(): TerminalNode {
		return this.getToken(FlinkSqlParser.ENFORCED, 0);
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.CONSTRAINT, 0);
	}
	public constraintName(): ConstraintNameContext {
		return this.getTypedRuleContext(ConstraintNameContext, 0) as ConstraintNameContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_columnConstraint;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterColumnConstraint) {
	 		listener.enterColumnConstraint(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitColumnConstraint) {
	 		listener.exitColumnConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnConstraint) {
			return visitor.visitColumnConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentSpecContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMENT, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_commentSpec;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCommentSpec) {
	 		listener.enterCommentSpec(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCommentSpec) {
	 		listener.exitCommentSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCommentSpec) {
			return visitor.visitCommentSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetadataColumnDefinitionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public columnName(): ColumnNameContext {
		return this.getTypedRuleContext(ColumnNameContext, 0) as ColumnNameContext;
	}
	public columnType(): ColumnTypeContext {
		return this.getTypedRuleContext(ColumnTypeContext, 0) as ColumnTypeContext;
	}
	public METADATA(): TerminalNode {
		return this.getToken(FlinkSqlParser.METADATA, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(FlinkSqlParser.FROM, 0);
	}
	public metadataKey(): MetadataKeyContext {
		return this.getTypedRuleContext(MetadataKeyContext, 0) as MetadataKeyContext;
	}
	public VIRTUAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.VIRTUAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_metadataColumnDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterMetadataColumnDefinition) {
	 		listener.enterMetadataColumnDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitMetadataColumnDefinition) {
	 		listener.exitMetadataColumnDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitMetadataColumnDefinition) {
			return visitor.visitMetadataColumnDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetadataKeyContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_metadataKey;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterMetadataKey) {
	 		listener.enterMetadataKey(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitMetadataKey) {
	 		listener.exitMetadataKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitMetadataKey) {
			return visitor.visitMetadataKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComputedColumnDefinitionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public columnName(): ColumnNameContext {
		return this.getTypedRuleContext(ColumnNameContext, 0) as ColumnNameContext;
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
	public computedColumnExpression(): ComputedColumnExpressionContext {
		return this.getTypedRuleContext(ComputedColumnExpressionContext, 0) as ComputedColumnExpressionContext;
	}
	public commentSpec(): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, 0) as CommentSpecContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_computedColumnDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterComputedColumnDefinition) {
	 		listener.enterComputedColumnDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitComputedColumnDefinition) {
	 		listener.exitComputedColumnDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitComputedColumnDefinition) {
			return visitor.visitComputedColumnDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComputedColumnExpressionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_computedColumnExpression;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterComputedColumnExpression) {
	 		listener.enterComputedColumnExpression(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitComputedColumnExpression) {
	 		listener.exitComputedColumnExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitComputedColumnExpression) {
			return visitor.visitComputedColumnExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WatermarkDefinitionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WATERMARK(): TerminalNode {
		return this.getToken(FlinkSqlParser.WATERMARK, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(FlinkSqlParser.FOR, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_watermarkDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWatermarkDefinition) {
	 		listener.enterWatermarkDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWatermarkDefinition) {
	 		listener.exitWatermarkDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWatermarkDefinition) {
			return visitor.visitWatermarkDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableConstraintContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PRIMARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.PRIMARY, 0);
	}
	public KEY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KEY, 0);
	}
	public columnNameList(): ColumnNameListContext {
		return this.getTypedRuleContext(ColumnNameListContext, 0) as ColumnNameListContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.NOT, 0);
	}
	public ENFORCED(): TerminalNode {
		return this.getToken(FlinkSqlParser.ENFORCED, 0);
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.CONSTRAINT, 0);
	}
	public constraintName(): ConstraintNameContext {
		return this.getTypedRuleContext(ConstraintNameContext, 0) as ConstraintNameContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tableConstraint;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTableConstraint) {
	 		listener.enterTableConstraint(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTableConstraint) {
	 		listener.exitTableConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTableConstraint) {
			return visitor.visitTableConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstraintNameContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_constraintName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterConstraintName) {
	 		listener.enterConstraintName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitConstraintName) {
	 		listener.exitConstraintName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitConstraintName) {
			return visitor.visitConstraintName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelfDefinitionClauseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PERIOD(): TerminalNode {
		return this.getToken(FlinkSqlParser.PERIOD, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(FlinkSqlParser.FOR, 0);
	}
	public SYSTEM_TIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.SYSTEM_TIME, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_selfDefinitionClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSelfDefinitionClause) {
	 		listener.enterSelfDefinitionClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSelfDefinitionClause) {
	 		listener.exitSelfDefinitionClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSelfDefinitionClause) {
			return visitor.visitSelfDefinitionClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartitionDefinitionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PARTITIONED(): TerminalNode {
		return this.getToken(FlinkSqlParser.PARTITIONED, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(FlinkSqlParser.BY, 0);
	}
	public transformList(): TransformListContext {
		return this.getTypedRuleContext(TransformListContext, 0) as TransformListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_partitionDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPartitionDefinition) {
	 		listener.enterPartitionDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPartitionDefinition) {
	 		listener.exitPartitionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPartitionDefinition) {
			return visitor.visitPartitionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformListContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public transform_list(): TransformContext[] {
		return this.getTypedRuleContexts(TransformContext) as TransformContext[];
	}
	public transform(i: number): TransformContext {
		return this.getTypedRuleContext(TransformContext, i) as TransformContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_transformList;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTransformList) {
	 		listener.enterTransformList(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTransformList) {
	 		listener.exitTransformList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTransformList) {
			return visitor.visitTransformList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_transform;
	}
	public copyFrom(ctx: TransformContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentityTransformContext extends TransformContext {
	constructor(parser: FlinkSqlParser, ctx: TransformContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterIdentityTransform) {
	 		listener.enterIdentityTransform(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitIdentityTransform) {
	 		listener.exitIdentityTransform(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIdentityTransform) {
			return visitor.visitIdentityTransform(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ApplyTransformContext extends TransformContext {
	public _transformName!: IdentifierContext;
	constructor(parser: FlinkSqlParser, ctx: TransformContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public transformArgument_list(): TransformArgumentContext[] {
		return this.getTypedRuleContexts(TransformArgumentContext) as TransformArgumentContext[];
	}
	public transformArgument(i: number): TransformArgumentContext {
		return this.getTypedRuleContext(TransformArgumentContext, i) as TransformArgumentContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterApplyTransform) {
	 		listener.enterApplyTransform(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitApplyTransform) {
	 		listener.exitApplyTransform(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitApplyTransform) {
			return visitor.visitApplyTransform(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformArgumentContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return FlinkSqlParser.RULE_transformArgument;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTransformArgument) {
	 		listener.enterTransformArgument(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTransformArgument) {
	 		listener.exitTransformArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTransformArgument) {
			return visitor.visitTransformArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikeDefinitionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LIKE(): TerminalNode {
		return this.getToken(FlinkSqlParser.LIKE, 0);
	}
	public sourceTable(): SourceTableContext {
		return this.getTypedRuleContext(SourceTableContext, 0) as SourceTableContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public likeOption_list(): LikeOptionContext[] {
		return this.getTypedRuleContexts(LikeOptionContext) as LikeOptionContext[];
	}
	public likeOption(i: number): LikeOptionContext {
		return this.getTypedRuleContext(LikeOptionContext, i) as LikeOptionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_likeDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLikeDefinition) {
	 		listener.enterLikeDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLikeDefinition) {
	 		listener.exitLikeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLikeDefinition) {
			return visitor.visitLikeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceTableContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_sourceTable;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSourceTable) {
	 		listener.enterSourceTable(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSourceTable) {
	 		listener.exitSourceTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSourceTable) {
			return visitor.visitSourceTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikeOptionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INCLUDING(): TerminalNode {
		return this.getToken(FlinkSqlParser.INCLUDING, 0);
	}
	public EXCLUDING(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXCLUDING, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(FlinkSqlParser.ALL, 0);
	}
	public CONSTRAINTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.CONSTRAINTS, 0);
	}
	public PARTITIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.PARTITIONS, 0);
	}
	public OVERWRITING(): TerminalNode {
		return this.getToken(FlinkSqlParser.OVERWRITING, 0);
	}
	public GENERATED(): TerminalNode {
		return this.getToken(FlinkSqlParser.GENERATED, 0);
	}
	public OPTIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.OPTIONS, 0);
	}
	public WATERMARKS(): TerminalNode {
		return this.getToken(FlinkSqlParser.WATERMARKS, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_likeOption;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLikeOption) {
	 		listener.enterLikeOption(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLikeOption) {
	 		listener.exitLikeOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLikeOption) {
			return visitor.visitLikeOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateCatalogContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CREATE, 0);
	}
	public CATALOG(): TerminalNode {
		return this.getToken(FlinkSqlParser.CATALOG, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public withOption(): WithOptionContext {
		return this.getTypedRuleContext(WithOptionContext, 0) as WithOptionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_createCatalog;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCreateCatalog) {
	 		listener.enterCreateCatalog(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCreateCatalog) {
	 		listener.exitCreateCatalog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateCatalog) {
			return visitor.visitCreateCatalog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateDatabaseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CREATE, 0);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATABASE, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public withOption(): WithOptionContext {
		return this.getTypedRuleContext(WithOptionContext, 0) as WithOptionContext;
	}
	public ifNotExists(): IfNotExistsContext {
		return this.getTypedRuleContext(IfNotExistsContext, 0) as IfNotExistsContext;
	}
	public commentSpec(): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, 0) as CommentSpecContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_createDatabase;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCreateDatabase) {
	 		listener.enterCreateDatabase(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCreateDatabase) {
	 		listener.exitCreateDatabase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateDatabase) {
			return visitor.visitCreateDatabase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateViewContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CREATE, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(FlinkSqlParser.VIEW, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
	public TEMPORARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.TEMPORARY, 0);
	}
	public ifNotExists(): IfNotExistsContext {
		return this.getTypedRuleContext(IfNotExistsContext, 0) as IfNotExistsContext;
	}
	public columnNameList(): ColumnNameListContext {
		return this.getTypedRuleContext(ColumnNameListContext, 0) as ColumnNameListContext;
	}
	public commentSpec(): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, 0) as CommentSpecContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_createView;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCreateView) {
	 		listener.enterCreateView(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCreateView) {
	 		listener.exitCreateView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateView) {
			return visitor.visitCreateView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateFunctionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CREATE, 0);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.FUNCTION, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public TEMPORARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.TEMPORARY, 0);
	}
	public SYSTEM(): TerminalNode {
		return this.getToken(FlinkSqlParser.SYSTEM, 0);
	}
	public ifNotExists(): IfNotExistsContext {
		return this.getTypedRuleContext(IfNotExistsContext, 0) as IfNotExistsContext;
	}
	public LANGUAGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.LANGUAGE, 0);
	}
	public usingClause(): UsingClauseContext {
		return this.getTypedRuleContext(UsingClauseContext, 0) as UsingClauseContext;
	}
	public JAVA(): TerminalNode {
		return this.getToken(FlinkSqlParser.JAVA, 0);
	}
	public SCALA(): TerminalNode {
		return this.getToken(FlinkSqlParser.SCALA, 0);
	}
	public PYTHON(): TerminalNode {
		return this.getToken(FlinkSqlParser.PYTHON, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_createFunction;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCreateFunction) {
	 		listener.enterCreateFunction(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCreateFunction) {
	 		listener.exitCreateFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateFunction) {
			return visitor.visitCreateFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingClauseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public USING(): TerminalNode {
		return this.getToken(FlinkSqlParser.USING, 0);
	}
	public JAR_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.JAR);
	}
	public JAR(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.JAR, i);
	}
	public jarFileName_list(): JarFileNameContext[] {
		return this.getTypedRuleContexts(JarFileNameContext) as JarFileNameContext[];
	}
	public jarFileName(i: number): JarFileNameContext {
		return this.getTypedRuleContext(JarFileNameContext, i) as JarFileNameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_usingClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUsingClause) {
	 		listener.enterUsingClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUsingClause) {
	 		listener.exitUsingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUsingClause) {
			return visitor.visitUsingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JarFileNameContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_jarFileName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterJarFileName) {
	 		listener.enterJarFileName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitJarFileName) {
	 		listener.exitJarFileName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitJarFileName) {
			return visitor.visitJarFileName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterTableContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.ALTER, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TABLE, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public renameDefinition(): RenameDefinitionContext {
		return this.getTypedRuleContext(RenameDefinitionContext, 0) as RenameDefinitionContext;
	}
	public setKeyValueDefinition(): SetKeyValueDefinitionContext {
		return this.getTypedRuleContext(SetKeyValueDefinitionContext, 0) as SetKeyValueDefinitionContext;
	}
	public addConstraint(): AddConstraintContext {
		return this.getTypedRuleContext(AddConstraintContext, 0) as AddConstraintContext;
	}
	public dropConstraint(): DropConstraintContext {
		return this.getTypedRuleContext(DropConstraintContext, 0) as DropConstraintContext;
	}
	public addUnique(): AddUniqueContext {
		return this.getTypedRuleContext(AddUniqueContext, 0) as AddUniqueContext;
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_alterTable;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterAlterTable) {
	 		listener.enterAlterTable(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitAlterTable) {
	 		listener.exitAlterTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTable) {
			return visitor.visitAlterTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RenameDefinitionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RENAME(): TerminalNode {
		return this.getToken(FlinkSqlParser.RENAME, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(FlinkSqlParser.TO, 0);
	}
	public uid_list(): UidContext[] {
		return this.getTypedRuleContexts(UidContext) as UidContext[];
	}
	public uid(i: number): UidContext {
		return this.getTypedRuleContext(UidContext, i) as UidContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_renameDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterRenameDefinition) {
	 		listener.enterRenameDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitRenameDefinition) {
	 		listener.exitRenameDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitRenameDefinition) {
			return visitor.visitRenameDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetKeyValueDefinitionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SET(): TerminalNode {
		return this.getToken(FlinkSqlParser.SET, 0);
	}
	public tablePropertyList(): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, 0) as TablePropertyListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_setKeyValueDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSetKeyValueDefinition) {
	 		listener.enterSetKeyValueDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSetKeyValueDefinition) {
	 		listener.exitSetKeyValueDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSetKeyValueDefinition) {
			return visitor.visitSetKeyValueDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddConstraintContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ADD(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD, 0);
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.CONSTRAINT, 0);
	}
	public constraintName(): ConstraintNameContext {
		return this.getTypedRuleContext(ConstraintNameContext, 0) as ConstraintNameContext;
	}
	public PRIMARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.PRIMARY, 0);
	}
	public KEY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KEY, 0);
	}
	public columnNameList(): ColumnNameListContext {
		return this.getTypedRuleContext(ColumnNameListContext, 0) as ColumnNameListContext;
	}
	public notForced(): NotForcedContext {
		return this.getTypedRuleContext(NotForcedContext, 0) as NotForcedContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_addConstraint;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterAddConstraint) {
	 		listener.enterAddConstraint(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitAddConstraint) {
	 		listener.exitAddConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAddConstraint) {
			return visitor.visitAddConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropConstraintContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(FlinkSqlParser.DROP, 0);
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.CONSTRAINT, 0);
	}
	public constraintName(): ConstraintNameContext {
		return this.getTypedRuleContext(ConstraintNameContext, 0) as ConstraintNameContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dropConstraint;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDropConstraint) {
	 		listener.enterDropConstraint(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDropConstraint) {
	 		listener.exitDropConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDropConstraint) {
			return visitor.visitDropConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddUniqueContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ADD(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD, 0);
	}
	public UNIQUE(): TerminalNode {
		return this.getToken(FlinkSqlParser.UNIQUE, 0);
	}
	public columnNameList(): ColumnNameListContext {
		return this.getTypedRuleContext(ColumnNameListContext, 0) as ColumnNameListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_addUnique;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterAddUnique) {
	 		listener.enterAddUnique(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitAddUnique) {
	 		listener.exitAddUnique(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAddUnique) {
			return visitor.visitAddUnique(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotForcedContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.NOT, 0);
	}
	public ENFORCED(): TerminalNode {
		return this.getToken(FlinkSqlParser.ENFORCED, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_notForced;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterNotForced) {
	 		listener.enterNotForced(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitNotForced) {
	 		listener.exitNotForced(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitNotForced) {
			return visitor.visitNotForced(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlertViewContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.ALTER, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(FlinkSqlParser.VIEW, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public renameDefinition(): RenameDefinitionContext {
		return this.getTypedRuleContext(RenameDefinitionContext, 0) as RenameDefinitionContext;
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_alertView;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterAlertView) {
	 		listener.enterAlertView(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitAlertView) {
	 		listener.exitAlertView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAlertView) {
			return visitor.visitAlertView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterDatabaseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.ALTER, 0);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATABASE, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public setKeyValueDefinition(): SetKeyValueDefinitionContext {
		return this.getTypedRuleContext(SetKeyValueDefinitionContext, 0) as SetKeyValueDefinitionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_alterDatabase;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterAlterDatabase) {
	 		listener.enterAlterDatabase(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitAlterDatabase) {
	 		listener.exitAlterDatabase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterDatabase) {
			return visitor.visitAlterDatabase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterFunctionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.ALTER, 0);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.FUNCTION, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public TEMPORARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.TEMPORARY, 0);
	}
	public SYSTEM(): TerminalNode {
		return this.getToken(FlinkSqlParser.SYSTEM, 0);
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
	public LANGUAGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.LANGUAGE, 0);
	}
	public JAVA(): TerminalNode {
		return this.getToken(FlinkSqlParser.JAVA, 0);
	}
	public SCALA(): TerminalNode {
		return this.getToken(FlinkSqlParser.SCALA, 0);
	}
	public PYTHON(): TerminalNode {
		return this.getToken(FlinkSqlParser.PYTHON, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_alterFunction;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterAlterFunction) {
	 		listener.enterAlterFunction(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitAlterFunction) {
	 		listener.exitAlterFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterFunction) {
			return visitor.visitAlterFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropCatalogContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(FlinkSqlParser.DROP, 0);
	}
	public CATALOG(): TerminalNode {
		return this.getToken(FlinkSqlParser.CATALOG, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dropCatalog;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDropCatalog) {
	 		listener.enterDropCatalog(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDropCatalog) {
	 		listener.exitDropCatalog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDropCatalog) {
			return visitor.visitDropCatalog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropTableContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(FlinkSqlParser.DROP, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TABLE, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public TEMPORARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.TEMPORARY, 0);
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dropTable;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDropTable) {
	 		listener.enterDropTable(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDropTable) {
	 		listener.exitDropTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDropTable) {
			return visitor.visitDropTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropDatabaseContext extends ParserRuleContext {
	public _dropType!: Token;
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(FlinkSqlParser.DROP, 0);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATABASE, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
	public RESTRICT(): TerminalNode {
		return this.getToken(FlinkSqlParser.RESTRICT, 0);
	}
	public CASCADE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CASCADE, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dropDatabase;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDropDatabase) {
	 		listener.enterDropDatabase(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDropDatabase) {
	 		listener.exitDropDatabase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDropDatabase) {
			return visitor.visitDropDatabase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropViewContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(FlinkSqlParser.DROP, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(FlinkSqlParser.VIEW, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public TEMPORARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.TEMPORARY, 0);
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dropView;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDropView) {
	 		listener.enterDropView(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDropView) {
	 		listener.exitDropView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDropView) {
			return visitor.visitDropView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropFunctionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(FlinkSqlParser.DROP, 0);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.FUNCTION, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public TEMPORARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.TEMPORARY, 0);
	}
	public SYSTEM(): TerminalNode {
		return this.getToken(FlinkSqlParser.SYSTEM, 0);
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dropFunction;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDropFunction) {
	 		listener.enterDropFunction(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDropFunction) {
	 		listener.exitDropFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDropFunction) {
			return visitor.visitDropFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertStatementContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public insertSimpleStatement(): InsertSimpleStatementContext {
		return this.getTypedRuleContext(InsertSimpleStatementContext, 0) as InsertSimpleStatementContext;
	}
	public EXECUTE(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXECUTE, 0);
	}
	public insertMulStatement(): InsertMulStatementContext {
		return this.getTypedRuleContext(InsertMulStatementContext, 0) as InsertMulStatementContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_insertStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterInsertStatement) {
	 		listener.enterInsertStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitInsertStatement) {
	 		listener.exitInsertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitInsertStatement) {
			return visitor.visitInsertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertSimpleStatementContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INSERT(): TerminalNode {
		return this.getToken(FlinkSqlParser.INSERT, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public INTO(): TerminalNode {
		return this.getToken(FlinkSqlParser.INTO, 0);
	}
	public OVERWRITE(): TerminalNode {
		return this.getToken(FlinkSqlParser.OVERWRITE, 0);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
	public valuesDefinition(): ValuesDefinitionContext {
		return this.getTypedRuleContext(ValuesDefinitionContext, 0) as ValuesDefinitionContext;
	}
	public insertPartitionDefinition(): InsertPartitionDefinitionContext {
		return this.getTypedRuleContext(InsertPartitionDefinitionContext, 0) as InsertPartitionDefinitionContext;
	}
	public columnNameList(): ColumnNameListContext {
		return this.getTypedRuleContext(ColumnNameListContext, 0) as ColumnNameListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_insertSimpleStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterInsertSimpleStatement) {
	 		listener.enterInsertSimpleStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitInsertSimpleStatement) {
	 		listener.exitInsertSimpleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitInsertSimpleStatement) {
			return visitor.visitInsertSimpleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertPartitionDefinitionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PARTITION(): TerminalNode {
		return this.getToken(FlinkSqlParser.PARTITION, 0);
	}
	public tablePropertyList(): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, 0) as TablePropertyListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_insertPartitionDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterInsertPartitionDefinition) {
	 		listener.enterInsertPartitionDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitInsertPartitionDefinition) {
	 		listener.exitInsertPartitionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitInsertPartitionDefinition) {
			return visitor.visitInsertPartitionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesDefinitionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VALUES(): TerminalNode {
		return this.getToken(FlinkSqlParser.VALUES, 0);
	}
	public valuesRowDefinition_list(): ValuesRowDefinitionContext[] {
		return this.getTypedRuleContexts(ValuesRowDefinitionContext) as ValuesRowDefinitionContext[];
	}
	public valuesRowDefinition(i: number): ValuesRowDefinitionContext {
		return this.getTypedRuleContext(ValuesRowDefinitionContext, i) as ValuesRowDefinitionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_valuesDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterValuesDefinition) {
	 		listener.enterValuesDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitValuesDefinition) {
	 		listener.exitValuesDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitValuesDefinition) {
			return visitor.visitValuesDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesRowDefinitionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public constant_list(): ConstantContext[] {
		return this.getTypedRuleContexts(ConstantContext) as ConstantContext[];
	}
	public constant(i: number): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, i) as ConstantContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_valuesRowDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterValuesRowDefinition) {
	 		listener.enterValuesRowDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitValuesRowDefinition) {
	 		listener.exitValuesRowDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitValuesRowDefinition) {
			return visitor.visitValuesRowDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertMulStatementContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STATEMENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.STATEMENT, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(FlinkSqlParser.SET, 0);
	}
	public BEGIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.BEGIN, 0);
	}
	public END(): TerminalNode {
		return this.getToken(FlinkSqlParser.END, 0);
	}
	public insertSimpleStatement_list(): InsertSimpleStatementContext[] {
		return this.getTypedRuleContexts(InsertSimpleStatementContext) as InsertSimpleStatementContext[];
	}
	public insertSimpleStatement(i: number): InsertSimpleStatementContext {
		return this.getTypedRuleContext(InsertSimpleStatementContext, i) as InsertSimpleStatementContext;
	}
	public SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.SEMICOLON);
	}
	public SEMICOLON(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.SEMICOLON, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_insertMulStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterInsertMulStatement) {
	 		listener.enterInsertMulStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitInsertMulStatement) {
	 		listener.exitInsertMulStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitInsertMulStatement) {
			return visitor.visitInsertMulStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryStatementContext extends ParserRuleContext {
	public _left!: QueryStatementContext;
	public _operator!: Token;
	public _right!: QueryStatementContext;
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public valuesCaluse(): ValuesCaluseContext {
		return this.getTypedRuleContext(ValuesCaluseContext, 0) as ValuesCaluseContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(FlinkSqlParser.WITH, 0);
	}
	public withItem_list(): WithItemContext[] {
		return this.getTypedRuleContexts(WithItemContext) as WithItemContext[];
	}
	public withItem(i: number): WithItemContext {
		return this.getTypedRuleContext(WithItemContext, i) as WithItemContext;
	}
	public queryStatement_list(): QueryStatementContext[] {
		return this.getTypedRuleContexts(QueryStatementContext) as QueryStatementContext[];
	}
	public queryStatement(i: number): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, i) as QueryStatementContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public selectClause(): SelectClauseContext {
		return this.getTypedRuleContext(SelectClauseContext, 0) as SelectClauseContext;
	}
	public orderByCaluse(): OrderByCaluseContext {
		return this.getTypedRuleContext(OrderByCaluseContext, 0) as OrderByCaluseContext;
	}
	public limitClause(): LimitClauseContext {
		return this.getTypedRuleContext(LimitClauseContext, 0) as LimitClauseContext;
	}
	public selectStatement(): SelectStatementContext {
		return this.getTypedRuleContext(SelectStatementContext, 0) as SelectStatementContext;
	}
	public INTERSECT(): TerminalNode {
		return this.getToken(FlinkSqlParser.INTERSECT, 0);
	}
	public UNION(): TerminalNode {
		return this.getToken(FlinkSqlParser.UNION, 0);
	}
	public EXCEPT(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXCEPT, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(FlinkSqlParser.ALL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_queryStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterQueryStatement) {
	 		listener.enterQueryStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitQueryStatement) {
	 		listener.exitQueryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitQueryStatement) {
			return visitor.visitQueryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesCaluseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VALUES(): TerminalNode {
		return this.getToken(FlinkSqlParser.VALUES, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_valuesCaluse;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterValuesCaluse) {
	 		listener.enterValuesCaluse(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitValuesCaluse) {
	 		listener.exitValuesCaluse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitValuesCaluse) {
			return visitor.visitValuesCaluse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithItemContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public withItemName(): WithItemNameContext {
		return this.getTypedRuleContext(WithItemNameContext, 0) as WithItemNameContext;
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
	public LR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.LR_BRACKET);
	}
	public LR_BRACKET(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, i);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
	public RR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.RR_BRACKET);
	}
	public RR_BRACKET(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, i);
	}
	public columnName_list(): ColumnNameContext[] {
		return this.getTypedRuleContexts(ColumnNameContext) as ColumnNameContext[];
	}
	public columnName(i: number): ColumnNameContext {
		return this.getTypedRuleContext(ColumnNameContext, i) as ColumnNameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_withItem;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWithItem) {
	 		listener.enterWithItem(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWithItem) {
	 		listener.exitWithItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWithItem) {
			return visitor.visitWithItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithItemNameContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_withItemName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWithItemName) {
	 		listener.enterWithItemName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWithItemName) {
	 		listener.exitWithItemName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWithItemName) {
			return visitor.visitWithItemName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectStatementContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public selectClause(): SelectClauseContext {
		return this.getTypedRuleContext(SelectClauseContext, 0) as SelectClauseContext;
	}
	public fromClause(): FromClauseContext {
		return this.getTypedRuleContext(FromClauseContext, 0) as FromClauseContext;
	}
	public whereClause(): WhereClauseContext {
		return this.getTypedRuleContext(WhereClauseContext, 0) as WhereClauseContext;
	}
	public groupByClause(): GroupByClauseContext {
		return this.getTypedRuleContext(GroupByClauseContext, 0) as GroupByClauseContext;
	}
	public havingClause(): HavingClauseContext {
		return this.getTypedRuleContext(HavingClauseContext, 0) as HavingClauseContext;
	}
	public windowClause(): WindowClauseContext {
		return this.getTypedRuleContext(WindowClauseContext, 0) as WindowClauseContext;
	}
	public matchRecognizeClause(): MatchRecognizeClauseContext {
		return this.getTypedRuleContext(MatchRecognizeClauseContext, 0) as MatchRecognizeClauseContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_selectStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSelectStatement) {
	 		listener.enterSelectStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSelectStatement) {
	 		listener.exitSelectStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSelectStatement) {
			return visitor.visitSelectStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectClauseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SELECT(): TerminalNode {
		return this.getToken(FlinkSqlParser.SELECT, 0);
	}
	public ASTERISK_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
	}
	public projectItemDefinition_list(): ProjectItemDefinitionContext[] {
		return this.getTypedRuleContexts(ProjectItemDefinitionContext) as ProjectItemDefinitionContext[];
	}
	public projectItemDefinition(i: number): ProjectItemDefinitionContext {
		return this.getTypedRuleContext(ProjectItemDefinitionContext, i) as ProjectItemDefinitionContext;
	}
	public setQuantifier(): SetQuantifierContext {
		return this.getTypedRuleContext(SetQuantifierContext, 0) as SetQuantifierContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_selectClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSelectClause) {
	 		listener.enterSelectClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSelectClause) {
	 		listener.exitSelectClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSelectClause) {
			return visitor.visitSelectClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProjectItemDefinitionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public overWindowItem(): OverWindowItemContext {
		return this.getTypedRuleContext(OverWindowItemContext, 0) as OverWindowItemContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_projectItemDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterProjectItemDefinition) {
	 		listener.enterProjectItemDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitProjectItemDefinition) {
	 		listener.exitProjectItemDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitProjectItemDefinition) {
			return visitor.visitProjectItemDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverWindowItemContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public OVER(): TerminalNode {
		return this.getToken(FlinkSqlParser.OVER, 0);
	}
	public windowSpec(): WindowSpecContext {
		return this.getTypedRuleContext(WindowSpecContext, 0) as WindowSpecContext;
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
	public strictIdentifier(): StrictIdentifierContext {
		return this.getTypedRuleContext(StrictIdentifierContext, 0) as StrictIdentifierContext;
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0) as ErrorCapturingIdentifierContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_overWindowItem;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterOverWindowItem) {
	 		listener.enterOverWindowItem(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitOverWindowItem) {
	 		listener.exitOverWindowItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitOverWindowItem) {
			return visitor.visitOverWindowItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromClauseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FROM(): TerminalNode {
		return this.getToken(FlinkSqlParser.FROM, 0);
	}
	public tableExpression(): TableExpressionContext {
		return this.getTypedRuleContext(TableExpressionContext, 0) as TableExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_fromClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterFromClause) {
	 		listener.enterFromClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitFromClause) {
	 		listener.exitFromClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFromClause) {
			return visitor.visitFromClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableExpressionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tableReference_list(): TableReferenceContext[] {
		return this.getTypedRuleContexts(TableReferenceContext) as TableReferenceContext[];
	}
	public tableReference(i: number): TableReferenceContext {
		return this.getTypedRuleContext(TableReferenceContext, i) as TableReferenceContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
	public inlineDataValueClause(): InlineDataValueClauseContext {
		return this.getTypedRuleContext(InlineDataValueClauseContext, 0) as InlineDataValueClauseContext;
	}
	public windoTVFClause(): WindoTVFClauseContext {
		return this.getTypedRuleContext(WindoTVFClauseContext, 0) as WindoTVFClauseContext;
	}
	public tableExpression_list(): TableExpressionContext[] {
		return this.getTypedRuleContexts(TableExpressionContext) as TableExpressionContext[];
	}
	public tableExpression(i: number): TableExpressionContext {
		return this.getTypedRuleContext(TableExpressionContext, i) as TableExpressionContext;
	}
	public CROSS(): TerminalNode {
		return this.getToken(FlinkSqlParser.CROSS, 0);
	}
	public JOIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.JOIN, 0);
	}
	public NATURAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.NATURAL, 0);
	}
	public OUTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.OUTER, 0);
	}
	public joinCondition(): JoinConditionContext {
		return this.getTypedRuleContext(JoinConditionContext, 0) as JoinConditionContext;
	}
	public LEFT(): TerminalNode {
		return this.getToken(FlinkSqlParser.LEFT, 0);
	}
	public RIGHT(): TerminalNode {
		return this.getToken(FlinkSqlParser.RIGHT, 0);
	}
	public FULL(): TerminalNode {
		return this.getToken(FlinkSqlParser.FULL, 0);
	}
	public INNER(): TerminalNode {
		return this.getToken(FlinkSqlParser.INNER, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tableExpression;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTableExpression) {
	 		listener.enterTableExpression(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTableExpression) {
	 		listener.exitTableExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTableExpression) {
			return visitor.visitTableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableReferenceContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tablePrimary(): TablePrimaryContext {
		return this.getTypedRuleContext(TablePrimaryContext, 0) as TablePrimaryContext;
	}
	public tableAlias(): TableAliasContext {
		return this.getTypedRuleContext(TableAliasContext, 0) as TableAliasContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tableReference;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTableReference) {
	 		listener.enterTableReference(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTableReference) {
	 		listener.exitTableReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTableReference) {
			return visitor.visitTableReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePrimaryContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tablePath(): TablePathContext {
		return this.getTypedRuleContext(TablePathContext, 0) as TablePathContext;
	}
	public TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TABLE, 0);
	}
	public systemTimePeriod(): SystemTimePeriodContext {
		return this.getTypedRuleContext(SystemTimePeriodContext, 0) as SystemTimePeriodContext;
	}
	public correlationName(): CorrelationNameContext {
		return this.getTypedRuleContext(CorrelationNameContext, 0) as CorrelationNameContext;
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
	public LATERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.LATERAL, 0);
	}
	public LR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.LR_BRACKET);
	}
	public LR_BRACKET(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, i);
	}
	public functionName(): FunctionNameContext {
		return this.getTypedRuleContext(FunctionNameContext, 0) as FunctionNameContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.RR_BRACKET);
	}
	public RR_BRACKET(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
	public UNNEST(): TerminalNode {
		return this.getToken(FlinkSqlParser.UNNEST, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tablePrimary;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTablePrimary) {
	 		listener.enterTablePrimary(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTablePrimary) {
	 		listener.exitTablePrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTablePrimary) {
			return visitor.visitTablePrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePathContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tablePath;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTablePath) {
	 		listener.enterTablePath(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTablePath) {
	 		listener.exitTablePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTablePath) {
			return visitor.visitTablePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SystemTimePeriodContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(FlinkSqlParser.FOR, 0);
	}
	public SYSTEM_TIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.SYSTEM_TIME, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(FlinkSqlParser.OF, 0);
	}
	public dateTimeExpression(): DateTimeExpressionContext {
		return this.getTypedRuleContext(DateTimeExpressionContext, 0) as DateTimeExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_systemTimePeriod;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSystemTimePeriod) {
	 		listener.enterSystemTimePeriod(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSystemTimePeriod) {
	 		listener.exitSystemTimePeriod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSystemTimePeriod) {
			return visitor.visitSystemTimePeriod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateTimeExpressionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dateTimeExpression;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDateTimeExpression) {
	 		listener.enterDateTimeExpression(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDateTimeExpression) {
	 		listener.exitDateTimeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDateTimeExpression) {
			return visitor.visitDateTimeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineDataValueClauseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public valuesDefinition(): ValuesDefinitionContext {
		return this.getTypedRuleContext(ValuesDefinitionContext, 0) as ValuesDefinitionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public tableAlias(): TableAliasContext {
		return this.getTypedRuleContext(TableAliasContext, 0) as TableAliasContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_inlineDataValueClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterInlineDataValueClause) {
	 		listener.enterInlineDataValueClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitInlineDataValueClause) {
	 		listener.exitInlineDataValueClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitInlineDataValueClause) {
			return visitor.visitInlineDataValueClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindoTVFClauseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TABLE, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public windowTVFExression(): WindowTVFExressionContext {
		return this.getTypedRuleContext(WindowTVFExressionContext, 0) as WindowTVFExressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_windoTVFClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWindoTVFClause) {
	 		listener.enterWindoTVFClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWindoTVFClause) {
	 		listener.exitWindoTVFClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWindoTVFClause) {
			return visitor.visitWindoTVFClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowTVFExressionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public windoTVFName(): WindoTVFNameContext {
		return this.getTypedRuleContext(WindoTVFNameContext, 0) as WindoTVFNameContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public windowTVFParam_list(): WindowTVFParamContext[] {
		return this.getTypedRuleContexts(WindowTVFParamContext) as WindowTVFParamContext[];
	}
	public windowTVFParam(i: number): WindowTVFParamContext {
		return this.getTypedRuleContext(WindowTVFParamContext, i) as WindowTVFParamContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_windowTVFExression;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWindowTVFExression) {
	 		listener.enterWindowTVFExression(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWindowTVFExression) {
	 		listener.exitWindowTVFExression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowTVFExression) {
			return visitor.visitWindowTVFExression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindoTVFNameContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TUMBLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TUMBLE, 0);
	}
	public HOP(): TerminalNode {
		return this.getToken(FlinkSqlParser.HOP, 0);
	}
	public CUMULATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CUMULATE, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_windoTVFName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWindoTVFName) {
	 		listener.enterWindoTVFName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWindoTVFName) {
	 		listener.exitWindoTVFName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWindoTVFName) {
			return visitor.visitWindoTVFName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowTVFParamContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TABLE, 0);
	}
	public timeAttrColumn(): TimeAttrColumnContext {
		return this.getTypedRuleContext(TimeAttrColumnContext, 0) as TimeAttrColumnContext;
	}
	public columnDescriptor(): ColumnDescriptorContext {
		return this.getTypedRuleContext(ColumnDescriptorContext, 0) as ColumnDescriptorContext;
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		return this.getTypedRuleContext(TimeIntervalExpressionContext, 0) as TimeIntervalExpressionContext;
	}
	public DATA(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATA, 0);
	}
	public DOUBLE_ARROW(): TerminalNode {
		return this.getToken(FlinkSqlParser.DOUBLE_ARROW, 0);
	}
	public TIMECOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.TIMECOL, 0);
	}
	public timeIntervalParamName(): TimeIntervalParamNameContext {
		return this.getTypedRuleContext(TimeIntervalParamNameContext, 0) as TimeIntervalParamNameContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_windowTVFParam;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWindowTVFParam) {
	 		listener.enterWindowTVFParam(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWindowTVFParam) {
	 		listener.exitWindowTVFParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowTVFParam) {
			return visitor.visitWindowTVFParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeIntervalParamNameContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DATA(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATA, 0);
	}
	public TIMECOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.TIMECOL, 0);
	}
	public SIZE(): TerminalNode {
		return this.getToken(FlinkSqlParser.SIZE, 0);
	}
	public OFFSET(): TerminalNode {
		return this.getToken(FlinkSqlParser.OFFSET, 0);
	}
	public STEP(): TerminalNode {
		return this.getToken(FlinkSqlParser.STEP, 0);
	}
	public SLIDE(): TerminalNode {
		return this.getToken(FlinkSqlParser.SLIDE, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_timeIntervalParamName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTimeIntervalParamName) {
	 		listener.enterTimeIntervalParamName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTimeIntervalParamName) {
	 		listener.exitTimeIntervalParamName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTimeIntervalParamName) {
			return visitor.visitTimeIntervalParamName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnDescriptorContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DESCRIPTOR(): TerminalNode {
		return this.getToken(FlinkSqlParser.DESCRIPTOR, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_columnDescriptor;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterColumnDescriptor) {
	 		listener.enterColumnDescriptor(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitColumnDescriptor) {
	 		listener.exitColumnDescriptor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnDescriptor) {
			return visitor.visitColumnDescriptor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinConditionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON(): TerminalNode {
		return this.getToken(FlinkSqlParser.ON, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public USING(): TerminalNode {
		return this.getToken(FlinkSqlParser.USING, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public uid_list(): UidContext[] {
		return this.getTypedRuleContexts(UidContext) as UidContext[];
	}
	public uid(i: number): UidContext {
		return this.getTypedRuleContext(UidContext, i) as UidContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_joinCondition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterJoinCondition) {
	 		listener.enterJoinCondition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitJoinCondition) {
	 		listener.exitJoinCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitJoinCondition) {
			return visitor.visitJoinCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhereClauseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHERE(): TerminalNode {
		return this.getToken(FlinkSqlParser.WHERE, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_whereClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWhereClause) {
	 		listener.enterWhereClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWhereClause) {
	 		listener.exitWhereClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWhereClause) {
			return visitor.visitWhereClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupByClauseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GROUP(): TerminalNode {
		return this.getToken(FlinkSqlParser.GROUP, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(FlinkSqlParser.BY, 0);
	}
	public groupItemDefinition_list(): GroupItemDefinitionContext[] {
		return this.getTypedRuleContexts(GroupItemDefinitionContext) as GroupItemDefinitionContext[];
	}
	public groupItemDefinition(i: number): GroupItemDefinitionContext {
		return this.getTypedRuleContext(GroupItemDefinitionContext, i) as GroupItemDefinitionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_groupByClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterGroupByClause) {
	 		listener.enterGroupByClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitGroupByClause) {
	 		listener.exitGroupByClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupByClause) {
			return visitor.visitGroupByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupItemDefinitionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public groupWindowFunction(): GroupWindowFunctionContext {
		return this.getTypedRuleContext(GroupWindowFunctionContext, 0) as GroupWindowFunctionContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
	public groupingSetsNotaionName(): GroupingSetsNotaionNameContext {
		return this.getTypedRuleContext(GroupingSetsNotaionNameContext, 0) as GroupingSetsNotaionNameContext;
	}
	public groupingSets(): GroupingSetsContext {
		return this.getTypedRuleContext(GroupingSetsContext, 0) as GroupingSetsContext;
	}
	public groupItemDefinition_list(): GroupItemDefinitionContext[] {
		return this.getTypedRuleContexts(GroupItemDefinitionContext) as GroupItemDefinitionContext[];
	}
	public groupItemDefinition(i: number): GroupItemDefinitionContext {
		return this.getTypedRuleContext(GroupItemDefinitionContext, i) as GroupItemDefinitionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_groupItemDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterGroupItemDefinition) {
	 		listener.enterGroupItemDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitGroupItemDefinition) {
	 		listener.exitGroupItemDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupItemDefinition) {
			return visitor.visitGroupItemDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingSetsContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GROUPING(): TerminalNode {
		return this.getToken(FlinkSqlParser.GROUPING, 0);
	}
	public SETS(): TerminalNode {
		return this.getToken(FlinkSqlParser.SETS, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_groupingSets;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterGroupingSets) {
	 		listener.enterGroupingSets(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitGroupingSets) {
	 		listener.exitGroupingSets(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupingSets) {
			return visitor.visitGroupingSets(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingSetsNotaionNameContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CUBE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CUBE, 0);
	}
	public ROLLUP(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROLLUP, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_groupingSetsNotaionName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterGroupingSetsNotaionName) {
	 		listener.enterGroupingSetsNotaionName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitGroupingSetsNotaionName) {
	 		listener.exitGroupingSetsNotaionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupingSetsNotaionName) {
			return visitor.visitGroupingSetsNotaionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupWindowFunctionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public groupWindowFunctionName(): GroupWindowFunctionNameContext {
		return this.getTypedRuleContext(GroupWindowFunctionNameContext, 0) as GroupWindowFunctionNameContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public timeAttrColumn(): TimeAttrColumnContext {
		return this.getTypedRuleContext(TimeAttrColumnContext, 0) as TimeAttrColumnContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, 0);
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		return this.getTypedRuleContext(TimeIntervalExpressionContext, 0) as TimeIntervalExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_groupWindowFunction;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterGroupWindowFunction) {
	 		listener.enterGroupWindowFunction(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitGroupWindowFunction) {
	 		listener.exitGroupWindowFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupWindowFunction) {
			return visitor.visitGroupWindowFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupWindowFunctionNameContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TUMBLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TUMBLE, 0);
	}
	public HOP(): TerminalNode {
		return this.getToken(FlinkSqlParser.HOP, 0);
	}
	public SESSION(): TerminalNode {
		return this.getToken(FlinkSqlParser.SESSION, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_groupWindowFunctionName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterGroupWindowFunctionName) {
	 		listener.enterGroupWindowFunctionName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitGroupWindowFunctionName) {
	 		listener.exitGroupWindowFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupWindowFunctionName) {
			return visitor.visitGroupWindowFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeAttrColumnContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_timeAttrColumn;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTimeAttrColumn) {
	 		listener.enterTimeAttrColumn(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTimeAttrColumn) {
	 		listener.exitTimeAttrColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTimeAttrColumn) {
			return visitor.visitTimeAttrColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HavingClauseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HAVING(): TerminalNode {
		return this.getToken(FlinkSqlParser.HAVING, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_havingClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterHavingClause) {
	 		listener.enterHavingClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitHavingClause) {
	 		listener.exitHavingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitHavingClause) {
			return visitor.visitHavingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowClauseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WINDOW(): TerminalNode {
		return this.getToken(FlinkSqlParser.WINDOW, 0);
	}
	public namedWindow_list(): NamedWindowContext[] {
		return this.getTypedRuleContexts(NamedWindowContext) as NamedWindowContext[];
	}
	public namedWindow(i: number): NamedWindowContext {
		return this.getTypedRuleContext(NamedWindowContext, i) as NamedWindowContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_windowClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWindowClause) {
	 		listener.enterWindowClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWindowClause) {
	 		listener.exitWindowClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowClause) {
			return visitor.visitWindowClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedWindowContext extends ParserRuleContext {
	public _name!: ErrorCapturingIdentifierContext;
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
	public windowSpec(): WindowSpecContext {
		return this.getTypedRuleContext(WindowSpecContext, 0) as WindowSpecContext;
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0) as ErrorCapturingIdentifierContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_namedWindow;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterNamedWindow) {
	 		listener.enterNamedWindow(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitNamedWindow) {
	 		listener.exitNamedWindow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitNamedWindow) {
			return visitor.visitNamedWindow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowSpecContext extends ParserRuleContext {
	public _name!: ErrorCapturingIdentifierContext;
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public partitionByClause(): PartitionByClauseContext {
		return this.getTypedRuleContext(PartitionByClauseContext, 0) as PartitionByClauseContext;
	}
	public orderByCaluse(): OrderByCaluseContext {
		return this.getTypedRuleContext(OrderByCaluseContext, 0) as OrderByCaluseContext;
	}
	public windowFrame(): WindowFrameContext {
		return this.getTypedRuleContext(WindowFrameContext, 0) as WindowFrameContext;
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0) as ErrorCapturingIdentifierContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_windowSpec;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWindowSpec) {
	 		listener.enterWindowSpec(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWindowSpec) {
	 		listener.exitWindowSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowSpec) {
			return visitor.visitWindowSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchRecognizeClauseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MATCH_RECOGNIZE(): TerminalNode {
		return this.getToken(FlinkSqlParser.MATCH_RECOGNIZE, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public patternVariablesDefination(): PatternVariablesDefinationContext {
		return this.getTypedRuleContext(PatternVariablesDefinationContext, 0) as PatternVariablesDefinationContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public partitionByClause(): PartitionByClauseContext {
		return this.getTypedRuleContext(PartitionByClauseContext, 0) as PartitionByClauseContext;
	}
	public orderByCaluse(): OrderByCaluseContext {
		return this.getTypedRuleContext(OrderByCaluseContext, 0) as OrderByCaluseContext;
	}
	public measuresClause(): MeasuresClauseContext {
		return this.getTypedRuleContext(MeasuresClauseContext, 0) as MeasuresClauseContext;
	}
	public outputMode(): OutputModeContext {
		return this.getTypedRuleContext(OutputModeContext, 0) as OutputModeContext;
	}
	public afterMatchStrategy(): AfterMatchStrategyContext {
		return this.getTypedRuleContext(AfterMatchStrategyContext, 0) as AfterMatchStrategyContext;
	}
	public patternDefination(): PatternDefinationContext {
		return this.getTypedRuleContext(PatternDefinationContext, 0) as PatternDefinationContext;
	}
	public strictIdentifier(): StrictIdentifierContext {
		return this.getTypedRuleContext(StrictIdentifierContext, 0) as StrictIdentifierContext;
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_matchRecognizeClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterMatchRecognizeClause) {
	 		listener.enterMatchRecognizeClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitMatchRecognizeClause) {
	 		listener.exitMatchRecognizeClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitMatchRecognizeClause) {
			return visitor.visitMatchRecognizeClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderByCaluseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ORDER(): TerminalNode {
		return this.getToken(FlinkSqlParser.ORDER, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(FlinkSqlParser.BY, 0);
	}
	public orderItemDefition_list(): OrderItemDefitionContext[] {
		return this.getTypedRuleContexts(OrderItemDefitionContext) as OrderItemDefitionContext[];
	}
	public orderItemDefition(i: number): OrderItemDefitionContext {
		return this.getTypedRuleContext(OrderItemDefitionContext, i) as OrderItemDefitionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_orderByCaluse;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterOrderByCaluse) {
	 		listener.enterOrderByCaluse(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitOrderByCaluse) {
	 		listener.exitOrderByCaluse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitOrderByCaluse) {
			return visitor.visitOrderByCaluse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderItemDefitionContext extends ParserRuleContext {
	public _ordering!: Token;
	public _nullOrder!: Token;
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public NULLS(): TerminalNode {
		return this.getToken(FlinkSqlParser.NULLS, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(FlinkSqlParser.ASC, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(FlinkSqlParser.DESC, 0);
	}
	public LAST(): TerminalNode {
		return this.getToken(FlinkSqlParser.LAST, 0);
	}
	public FIRST(): TerminalNode {
		return this.getToken(FlinkSqlParser.FIRST, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_orderItemDefition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterOrderItemDefition) {
	 		listener.enterOrderItemDefition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitOrderItemDefition) {
	 		listener.exitOrderItemDefition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitOrderItemDefition) {
			return visitor.visitOrderItemDefition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LimitClauseContext extends ParserRuleContext {
	public _limit!: ExpressionContext;
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LIMIT(): TerminalNode {
		return this.getToken(FlinkSqlParser.LIMIT, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(FlinkSqlParser.ALL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_limitClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLimitClause) {
	 		listener.enterLimitClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLimitClause) {
	 		listener.exitLimitClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLimitClause) {
			return visitor.visitLimitClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartitionByClauseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PARTITION(): TerminalNode {
		return this.getToken(FlinkSqlParser.PARTITION, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(FlinkSqlParser.BY, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_partitionByClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPartitionByClause) {
	 		listener.enterPartitionByClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPartitionByClause) {
	 		listener.exitPartitionByClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPartitionByClause) {
			return visitor.visitPartitionByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantifiersContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASTERISK_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
	}
	public ADD_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
	}
	public QUESTION_MARK_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.QUESTION_MARK_SIGN, 0);
	}
	public LB_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LB_BRACKET, 0);
	}
	public DIG_LITERAL_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.DIG_LITERAL);
	}
	public DIG_LITERAL(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.DIG_LITERAL, i);
	}
	public COMMA(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, 0);
	}
	public RB_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RB_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_quantifiers;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterQuantifiers) {
	 		listener.enterQuantifiers(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitQuantifiers) {
	 		listener.exitQuantifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitQuantifiers) {
			return visitor.visitQuantifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MeasuresClauseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MEASURES(): TerminalNode {
		return this.getToken(FlinkSqlParser.MEASURES, 0);
	}
	public projectItemDefinition_list(): ProjectItemDefinitionContext[] {
		return this.getTypedRuleContexts(ProjectItemDefinitionContext) as ProjectItemDefinitionContext[];
	}
	public projectItemDefinition(i: number): ProjectItemDefinitionContext {
		return this.getTypedRuleContext(ProjectItemDefinitionContext, i) as ProjectItemDefinitionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_measuresClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterMeasuresClause) {
	 		listener.enterMeasuresClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitMeasuresClause) {
	 		listener.exitMeasuresClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitMeasuresClause) {
			return visitor.visitMeasuresClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternDefinationContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PATTERN(): TerminalNode {
		return this.getToken(FlinkSqlParser.PATTERN, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public patternVariable_list(): PatternVariableContext[] {
		return this.getTypedRuleContexts(PatternVariableContext) as PatternVariableContext[];
	}
	public patternVariable(i: number): PatternVariableContext {
		return this.getTypedRuleContext(PatternVariableContext, i) as PatternVariableContext;
	}
	public withinClause(): WithinClauseContext {
		return this.getTypedRuleContext(WithinClauseContext, 0) as WithinClauseContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_patternDefination;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPatternDefination) {
	 		listener.enterPatternDefination(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPatternDefination) {
	 		listener.exitPatternDefination(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPatternDefination) {
			return visitor.visitPatternDefination(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternVariableContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unquotedIdentifier(): UnquotedIdentifierContext {
		return this.getTypedRuleContext(UnquotedIdentifierContext, 0) as UnquotedIdentifierContext;
	}
	public quantifiers(): QuantifiersContext {
		return this.getTypedRuleContext(QuantifiersContext, 0) as QuantifiersContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_patternVariable;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPatternVariable) {
	 		listener.enterPatternVariable(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPatternVariable) {
	 		listener.exitPatternVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPatternVariable) {
			return visitor.visitPatternVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputModeContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALL(): TerminalNode {
		return this.getToken(FlinkSqlParser.ALL, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROWS, 0);
	}
	public PER(): TerminalNode {
		return this.getToken(FlinkSqlParser.PER, 0);
	}
	public MATCH(): TerminalNode {
		return this.getToken(FlinkSqlParser.MATCH, 0);
	}
	public ONE(): TerminalNode {
		return this.getToken(FlinkSqlParser.ONE, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROW, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_outputMode;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterOutputMode) {
	 		listener.enterOutputMode(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitOutputMode) {
	 		listener.exitOutputMode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitOutputMode) {
			return visitor.visitOutputMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AfterMatchStrategyContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AFTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.AFTER, 0);
	}
	public MATCH(): TerminalNode {
		return this.getToken(FlinkSqlParser.MATCH, 0);
	}
	public KW_SKIP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SKIP, 0);
	}
	public PAST(): TerminalNode {
		return this.getToken(FlinkSqlParser.PAST, 0);
	}
	public LAST(): TerminalNode {
		return this.getToken(FlinkSqlParser.LAST, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROW, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(FlinkSqlParser.TO, 0);
	}
	public NEXT(): TerminalNode {
		return this.getToken(FlinkSqlParser.NEXT, 0);
	}
	public unquotedIdentifier(): UnquotedIdentifierContext {
		return this.getTypedRuleContext(UnquotedIdentifierContext, 0) as UnquotedIdentifierContext;
	}
	public FIRST(): TerminalNode {
		return this.getToken(FlinkSqlParser.FIRST, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_afterMatchStrategy;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterAfterMatchStrategy) {
	 		listener.enterAfterMatchStrategy(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitAfterMatchStrategy) {
	 		listener.exitAfterMatchStrategy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAfterMatchStrategy) {
			return visitor.visitAfterMatchStrategy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternVariablesDefinationContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEFINE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DEFINE, 0);
	}
	public projectItemDefinition_list(): ProjectItemDefinitionContext[] {
		return this.getTypedRuleContexts(ProjectItemDefinitionContext) as ProjectItemDefinitionContext[];
	}
	public projectItemDefinition(i: number): ProjectItemDefinitionContext {
		return this.getTypedRuleContext(ProjectItemDefinitionContext, i) as ProjectItemDefinitionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_patternVariablesDefination;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPatternVariablesDefination) {
	 		listener.enterPatternVariablesDefination(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPatternVariablesDefination) {
	 		listener.exitPatternVariablesDefination(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPatternVariablesDefination) {
			return visitor.visitPatternVariablesDefination(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowFrameContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RANGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.RANGE, 0);
	}
	public BETWEEN(): TerminalNode {
		return this.getToken(FlinkSqlParser.BETWEEN, 0);
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		return this.getTypedRuleContext(TimeIntervalExpressionContext, 0) as TimeIntervalExpressionContext;
	}
	public frameBound(): FrameBoundContext {
		return this.getTypedRuleContext(FrameBoundContext, 0) as FrameBoundContext;
	}
	public ROWS(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROWS, 0);
	}
	public DIG_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_windowFrame;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWindowFrame) {
	 		listener.enterWindowFrame(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWindowFrame) {
	 		listener.exitWindowFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowFrame) {
			return visitor.visitWindowFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FrameBoundContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PRECEDING(): TerminalNode {
		return this.getToken(FlinkSqlParser.PRECEDING, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(FlinkSqlParser.AND, 0);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.CURRENT, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROW, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_frameBound;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterFrameBound) {
	 		listener.enterFrameBound(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitFrameBound) {
	 		listener.exitFrameBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFrameBound) {
			return visitor.visitFrameBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithinClauseContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITHIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.WITHIN, 0);
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		return this.getTypedRuleContext(TimeIntervalExpressionContext, 0) as TimeIntervalExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_withinClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWithinClause) {
	 		listener.enterWithinClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWithinClause) {
	 		listener.exitWithinClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWithinClause) {
			return visitor.visitWithinClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeIntervalExpressionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTERVAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.INTERVAL, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
	}
	public ID_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.ID_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_timeIntervalExpression;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTimeIntervalExpression) {
	 		listener.enterTimeIntervalExpression(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTimeIntervalExpression) {
	 		listener.exitTimeIntervalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTimeIntervalExpression) {
			return visitor.visitTimeIntervalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_expression;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_booleanExpression;
	}
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.NOT, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLogicalNot) {
	 		listener.enterLogicalNot(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLogicalNot) {
	 		listener.exitLogicalNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLogicalNot) {
			return visitor.visitLogicalNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredicatedContext extends BooleanExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public predicate(): PredicateContext {
		return this.getTypedRuleContext(PredicateContext, 0) as PredicateContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPredicated) {
	 		listener.enterPredicated(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPredicated) {
	 		listener.exitPredicated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPredicated) {
			return visitor.visitPredicated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistsContext extends BooleanExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXISTS, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterExists) {
	 		listener.enterExists(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitExists) {
	 		listener.exitExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
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
	constructor(parser: FlinkSqlParser, ctx: BooleanExpressionContext) {
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
		return this.getToken(FlinkSqlParser.AND, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(FlinkSqlParser.OR, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLogicalBinary) {
	 		listener.enterLogicalBinary(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLogicalBinary) {
	 		listener.exitLogicalBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
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
	public _right!: ValueExpressionContext;
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AND(): TerminalNode {
		return this.getToken(FlinkSqlParser.AND, 0);
	}
	public BETWEEN(): TerminalNode {
		return this.getToken(FlinkSqlParser.BETWEEN, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.NOT, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(FlinkSqlParser.IN, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
	public EXISTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXISTS, 0);
	}
	public RLIKE(): TerminalNode {
		return this.getToken(FlinkSqlParser.RLIKE, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(FlinkSqlParser.LIKE, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(FlinkSqlParser.ANY, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(FlinkSqlParser.ALL, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(FlinkSqlParser.IS, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(FlinkSqlParser.NULL, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(FlinkSqlParser.FALSE, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(FlinkSqlParser.FROM, 0);
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(FlinkSqlParser.DISTINCT, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_predicate;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPredicate) {
	 		listener.enterPredicate(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPredicate) {
	 		listener.exitPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPredicate) {
			return visitor.visitPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikePredicateContext extends ParserRuleContext {
	public _kind!: Token;
	public _quantifier!: Token;
	public _pattern!: ValueExpressionContext;
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LIKE(): TerminalNode {
		return this.getToken(FlinkSqlParser.LIKE, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(FlinkSqlParser.ANY, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(FlinkSqlParser.ALL, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.NOT, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_likePredicate;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLikePredicate) {
	 		listener.enterLikePredicate(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLikePredicate) {
	 		listener.exitLikePredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLikePredicate) {
			return visitor.visitLikePredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueExpressionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_valueExpression;
	}
	public copyFrom(ctx: ValueExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterValueExpressionDefault) {
	 		listener.enterValueExpressionDefault(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitValueExpressionDefault) {
	 		listener.exitValueExpressionDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
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
	constructor(parser: FlinkSqlParser, ctx: ValueExpressionContext) {
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
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterComparison) {
	 		listener.enterComparison(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitComparison) {
	 		listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
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
	constructor(parser: FlinkSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public ASTERISK_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
	}
	public SLASH_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.SLASH_SIGN, 0);
	}
	public PENCENT_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.PENCENT_SIGN, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIV, 0);
	}
	public ADD_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
	}
	public HYPNEN_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
	}
	public DOUBLE_VERTICAL_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.DOUBLE_VERTICAL_SIGN, 0);
	}
	public BIT_AND_OP(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_AND_OP, 0);
	}
	public BIT_XOR_OP(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_XOR_OP, 0);
	}
	public BIT_OR_OP(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_OR_OP, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterArithmeticBinary) {
	 		listener.enterArithmeticBinary(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitArithmeticBinary) {
	 		listener.exitArithmeticBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitArithmeticBinary) {
			return visitor.visitArithmeticBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
	public _operator!: Token;
	constructor(parser: FlinkSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public HYPNEN_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
	}
	public ADD_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
	}
	public BIT_NOT_OP(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_NOT_OP, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterArithmeticUnary) {
	 		listener.enterArithmeticUnary(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitArithmeticUnary) {
	 		listener.exitArithmeticUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitArithmeticUnary) {
			return visitor.visitArithmeticUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_primaryExpression;
	}
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class DereferenceContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public dereferenceDefinition(): DereferenceDefinitionContext {
		return this.getTypedRuleContext(DereferenceDefinitionContext, 0) as DereferenceDefinitionContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDereference) {
	 		listener.enterDereference(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDereference) {
	 		listener.exitDereference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
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
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CASE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CASE, 0);
	}
	public END(): TerminalNode {
		return this.getToken(FlinkSqlParser.END, 0);
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
		return this.getToken(FlinkSqlParser.ELSE, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSimpleCase) {
	 		listener.enterSimpleCase(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSimpleCase) {
	 		listener.exitSimpleCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSimpleCase) {
			return visitor.visitSimpleCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterColumnReference) {
	 		listener.enterColumnReference(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitColumnReference) {
	 		listener.exitColumnReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnReference) {
			return visitor.visitColumnReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LastContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LAST(): TerminalNode {
		return this.getToken(FlinkSqlParser.LAST, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public IGNORE(): TerminalNode {
		return this.getToken(FlinkSqlParser.IGNORE, 0);
	}
	public NULLS(): TerminalNode {
		return this.getToken(FlinkSqlParser.NULLS, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLast) {
	 		listener.enterLast(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLast) {
	 		listener.exitLast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLast) {
			return visitor.visitLast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StarContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ASTERISK_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.DOT, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterStar) {
	 		listener.enterStar(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitStar) {
	 		listener.exitStar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitStar) {
			return visitor.visitStar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubscriptContext extends PrimaryExpressionContext {
	public _value!: PrimaryExpressionContext;
	public _index!: ValueExpressionContext;
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LS_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LS_BRACKET, 0);
	}
	public RS_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RS_BRACKET, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSubscript) {
	 		listener.enterSubscript(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSubscript) {
	 		listener.exitSubscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSubscript) {
			return visitor.visitSubscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSubqueryExpression) {
	 		listener.enterSubqueryExpression(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSubqueryExpression) {
	 		listener.exitSubqueryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSubqueryExpression) {
			return visitor.visitSubqueryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CAST(): TerminalNode {
		return this.getToken(FlinkSqlParser.CAST, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
	public columnType(): ColumnTypeContext {
		return this.getTypedRuleContext(ColumnTypeContext, 0) as ColumnTypeContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCast) {
	 		listener.enterCast(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCast) {
	 		listener.exitCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCast) {
			return visitor.visitCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantDefaultContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterConstantDefault) {
	 		listener.enterConstantDefault(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitConstantDefault) {
	 		listener.exitConstantDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitConstantDefault) {
			return visitor.visitConstantDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterParenthesizedExpression) {
	 		listener.enterParenthesizedExpression(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitParenthesizedExpression) {
	 		listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public functionName(): FunctionNameContext {
		return this.getTypedRuleContext(FunctionNameContext, 0) as FunctionNameContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public setQuantifier(): SetQuantifierContext {
		return this.getTypedRuleContext(SetQuantifierContext, 0) as SetQuantifierContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SearchedCaseContext extends PrimaryExpressionContext {
	public _elseExpression!: ExpressionContext;
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CASE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CASE, 0);
	}
	public END(): TerminalNode {
		return this.getToken(FlinkSqlParser.END, 0);
	}
	public whenClause_list(): WhenClauseContext[] {
		return this.getTypedRuleContexts(WhenClauseContext) as WhenClauseContext[];
	}
	public whenClause(i: number): WhenClauseContext {
		return this.getTypedRuleContext(WhenClauseContext, i) as WhenClauseContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(FlinkSqlParser.ELSE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSearchedCase) {
	 		listener.enterSearchedCase(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSearchedCase) {
	 		listener.exitSearchedCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
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
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public POSITION(): TerminalNode {
		return this.getToken(FlinkSqlParser.POSITION, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(FlinkSqlParser.IN, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPosition) {
	 		listener.enterPosition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPosition) {
	 		listener.exitPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPosition) {
			return visitor.visitPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FirstContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FIRST(): TerminalNode {
		return this.getToken(FlinkSqlParser.FIRST, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public IGNORE(): TerminalNode {
		return this.getToken(FlinkSqlParser.IGNORE, 0);
	}
	public NULLS(): TerminalNode {
		return this.getToken(FlinkSqlParser.NULLS, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterFirst) {
	 		listener.enterFirst(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitFirst) {
	 		listener.exitFirst(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFirst) {
			return visitor.visitFirst(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_functionName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterFunctionName) {
	 		listener.enterFunctionName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitFunctionName) {
	 		listener.exitFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionName) {
			return visitor.visitFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DereferenceDefinitionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dereferenceDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDereferenceDefinition) {
	 		listener.enterDereferenceDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDereferenceDefinition) {
	 		listener.exitDereferenceDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDereferenceDefinition) {
			return visitor.visitDereferenceDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CorrelationNameContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_correlationName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCorrelationName) {
	 		listener.enterCorrelationName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCorrelationName) {
	 		listener.exitCorrelationName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCorrelationName) {
			return visitor.visitCorrelationName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public dereferenceDefinition(): DereferenceDefinitionContext {
		return this.getTypedRuleContext(DereferenceDefinitionContext, 0) as DereferenceDefinitionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_qualifiedName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterQualifiedName) {
	 		listener.enterQualifiedName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitQualifiedName) {
	 		listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTERVAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.INTERVAL, 0);
	}
	public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext {
		return this.getTypedRuleContext(ErrorCapturingMultiUnitsIntervalContext, 0) as ErrorCapturingMultiUnitsIntervalContext;
	}
	public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext {
		return this.getTypedRuleContext(ErrorCapturingUnitToUnitIntervalContext, 0) as ErrorCapturingUnitToUnitIntervalContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_interval;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterInterval) {
	 		listener.enterInterval(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitInterval) {
	 		listener.exitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitInterval) {
			return visitor.visitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingMultiUnitsIntervalContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterErrorCapturingMultiUnitsInterval) {
	 		listener.enterErrorCapturingMultiUnitsInterval(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitErrorCapturingMultiUnitsInterval) {
	 		listener.exitErrorCapturingMultiUnitsInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitErrorCapturingMultiUnitsInterval) {
			return visitor.visitErrorCapturingMultiUnitsInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiUnitsIntervalContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return FlinkSqlParser.RULE_multiUnitsInterval;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterMultiUnitsInterval) {
	 		listener.enterMultiUnitsInterval(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitMultiUnitsInterval) {
	 		listener.exitMultiUnitsInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterErrorCapturingUnitToUnitInterval) {
	 		listener.enterErrorCapturingUnitToUnitInterval(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitErrorCapturingUnitToUnitInterval) {
	 		listener.exitErrorCapturingUnitToUnitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TO(): TerminalNode {
		return this.getToken(FlinkSqlParser.TO, 0);
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
    	return FlinkSqlParser.RULE_unitToUnitInterval;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUnitToUnitInterval) {
	 		listener.enterUnitToUnitInterval(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUnitToUnitInterval) {
	 		listener.exitUnitToUnitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUnitToUnitInterval) {
			return visitor.visitUnitToUnitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalValueContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DIG_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
	}
	public REAL_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.REAL_LITERAL, 0);
	}
	public ADD_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
	}
	public HYPNEN_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_intervalValue;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterIntervalValue) {
	 		listener.enterIntervalValue(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitIntervalValue) {
	 		listener.exitIntervalValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIntervalValue) {
			return visitor.visitIntervalValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnAliasContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public strictIdentifier(): StrictIdentifierContext {
		return this.getTypedRuleContext(StrictIdentifierContext, 0) as StrictIdentifierContext;
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
	public identifierList(): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_columnAlias;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterColumnAlias) {
	 		listener.enterColumnAlias(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitColumnAlias) {
	 		listener.exitColumnAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnAlias) {
			return visitor.visitColumnAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableAliasContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public strictIdentifier(): StrictIdentifierContext {
		return this.getTypedRuleContext(StrictIdentifierContext, 0) as StrictIdentifierContext;
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
	public identifierList(): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tableAlias;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTableAlias) {
	 		listener.enterTableAlias(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTableAlias) {
	 		listener.exitTableAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTableAlias) {
			return visitor.visitTableAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingIdentifierContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return FlinkSqlParser.RULE_errorCapturingIdentifier;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterErrorCapturingIdentifier) {
	 		listener.enterErrorCapturingIdentifier(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitErrorCapturingIdentifier) {
	 		listener.exitErrorCapturingIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitErrorCapturingIdentifier) {
			return visitor.visitErrorCapturingIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingIdentifierExtraContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_errorCapturingIdentifierExtra;
	}
	public copyFrom(ctx: ErrorCapturingIdentifierExtraContext): void {
		super.copyFrom(ctx);
	}
}
export class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
	constructor(parser: FlinkSqlParser, ctx: ErrorCapturingIdentifierExtraContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MINUS_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.MINUS);
	}
	public MINUS(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.MINUS, i);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterErrorIdent) {
	 		listener.enterErrorIdent(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitErrorIdent) {
	 		listener.exitErrorIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitErrorIdent) {
			return visitor.visitErrorIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RealIdentContext extends ErrorCapturingIdentifierExtraContext {
	constructor(parser: FlinkSqlParser, ctx: ErrorCapturingIdentifierExtraContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterRealIdent) {
	 		listener.enterRealIdent(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitRealIdent) {
	 		listener.exitRealIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitRealIdent) {
			return visitor.visitRealIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public identifierSeq(): IdentifierSeqContext {
		return this.getTypedRuleContext(IdentifierSeqContext, 0) as IdentifierSeqContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_identifierList;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterIdentifierList) {
	 		listener.enterIdentifierList(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitIdentifierList) {
	 		listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierSeqContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_identifierSeq;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterIdentifierSeq) {
	 		listener.enterIdentifierSeq(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitIdentifierSeq) {
	 		listener.exitIdentifierSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIdentifierSeq) {
			return visitor.visitIdentifierSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return FlinkSqlParser.RULE_identifier;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrictIdentifierContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_strictIdentifier;
	}
	public copyFrom(ctx: StrictIdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class QuotedIdentifierAlternativeContext extends StrictIdentifierContext {
	constructor(parser: FlinkSqlParser, ctx: StrictIdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public quotedIdentifier(): QuotedIdentifierContext {
		return this.getTypedRuleContext(QuotedIdentifierContext, 0) as QuotedIdentifierContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterQuotedIdentifierAlternative) {
	 		listener.enterQuotedIdentifierAlternative(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitQuotedIdentifierAlternative) {
	 		listener.exitQuotedIdentifierAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifierAlternative) {
			return visitor.visitQuotedIdentifierAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NonReservedKeywordsContext extends StrictIdentifierContext {
	constructor(parser: FlinkSqlParser, ctx: StrictIdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public nonReserved(): NonReservedContext {
		return this.getTypedRuleContext(NonReservedContext, 0) as NonReservedContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterNonReservedKeywords) {
	 		listener.enterNonReservedKeywords(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitNonReservedKeywords) {
	 		listener.exitNonReservedKeywords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitNonReservedKeywords) {
			return visitor.visitNonReservedKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnquotedIdentifierAlternativeContext extends StrictIdentifierContext {
	constructor(parser: FlinkSqlParser, ctx: StrictIdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public unquotedIdentifier(): UnquotedIdentifierContext {
		return this.getTypedRuleContext(UnquotedIdentifierContext, 0) as UnquotedIdentifierContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUnquotedIdentifierAlternative) {
	 		listener.enterUnquotedIdentifierAlternative(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUnquotedIdentifierAlternative) {
	 		listener.exitUnquotedIdentifierAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUnquotedIdentifierAlternative) {
			return visitor.visitUnquotedIdentifierAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AnsiNonReservedKeywordsContext extends StrictIdentifierContext {
	constructor(parser: FlinkSqlParser, ctx: StrictIdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ansiNonReserved(): AnsiNonReservedContext {
		return this.getTypedRuleContext(AnsiNonReservedContext, 0) as AnsiNonReservedContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterAnsiNonReservedKeywords) {
	 		listener.enterAnsiNonReservedKeywords(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitAnsiNonReservedKeywords) {
	 		listener.exitAnsiNonReservedKeywords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAnsiNonReservedKeywords) {
			return visitor.visitAnsiNonReservedKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnquotedIdentifierContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DIG_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
	}
	public ID_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.ID_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_unquotedIdentifier;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUnquotedIdentifier) {
	 		listener.enterUnquotedIdentifier(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUnquotedIdentifier) {
	 		listener.exitUnquotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUnquotedIdentifier) {
			return visitor.visitUnquotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuotedIdentifierContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_quotedIdentifier;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterQuotedIdentifier) {
	 		listener.enterQuotedIdentifier(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitQuotedIdentifier) {
	 		listener.exitQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifier) {
			return visitor.visitQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenClauseContext extends ParserRuleContext {
	public _condition!: ExpressionContext;
	public _result!: ExpressionContext;
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHEN(): TerminalNode {
		return this.getToken(FlinkSqlParser.WHEN, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(FlinkSqlParser.THEN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_whenClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWhenClause) {
	 		listener.enterWhenClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWhenClause) {
	 		listener.exitWhenClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWhenClause) {
			return visitor.visitWhenClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UidListContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uid_list(): UidContext[] {
		return this.getTypedRuleContexts(UidContext) as UidContext[];
	}
	public uid(i: number): UidContext {
		return this.getTypedRuleContext(UidContext, i) as UidContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_uidList;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUidList) {
	 		listener.enterUidList(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUidList) {
	 		listener.exitUidList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUidList) {
			return visitor.visitUidList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UidContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.ID_LITERAL, 0);
	}
	public DOT_ID_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.DOT_ID);
	}
	public DOT_ID(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.DOT_ID, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_uid;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUid) {
	 		listener.enterUid(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUid) {
	 		listener.exitUid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUid) {
			return visitor.visitUid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithOptionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(FlinkSqlParser.WITH, 0);
	}
	public tablePropertyList(): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, 0) as TablePropertyListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_withOption;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWithOption) {
	 		listener.enterWithOption(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWithOption) {
	 		listener.exitWithOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWithOption) {
			return visitor.visitWithOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfNotExistsContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(FlinkSqlParser.IF, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXISTS, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_ifNotExists;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterIfNotExists) {
	 		listener.enterIfNotExists(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitIfNotExists) {
	 		listener.exitIfNotExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIfNotExists) {
			return visitor.visitIfNotExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfExistsContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(FlinkSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXISTS, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_ifExists;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterIfExists) {
	 		listener.enterIfExists(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitIfExists) {
	 		listener.exitIfExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIfExists) {
			return visitor.visitIfExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyListContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public tableProperty_list(): TablePropertyContext[] {
		return this.getTypedRuleContexts(TablePropertyContext) as TablePropertyContext[];
	}
	public tableProperty(i: number): TablePropertyContext {
		return this.getTypedRuleContext(TablePropertyContext, i) as TablePropertyContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tablePropertyList;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTablePropertyList) {
	 		listener.enterTablePropertyList(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTablePropertyList) {
	 		listener.exitTablePropertyList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tablePropertyKey(): TablePropertyKeyContext {
		return this.getTypedRuleContext(TablePropertyKeyContext, 0) as TablePropertyKeyContext;
	}
	public tablePropertyValue(): TablePropertyValueContext {
		return this.getTypedRuleContext(TablePropertyValueContext, 0) as TablePropertyValueContext;
	}
	public EQUAL_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.EQUAL_SYMBOL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tableProperty;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTableProperty) {
	 		listener.enterTableProperty(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTableProperty) {
	 		listener.exitTableProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTableProperty) {
			return visitor.visitTableProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyKeyContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public dereferenceDefinition(): DereferenceDefinitionContext {
		return this.getTypedRuleContext(DereferenceDefinitionContext, 0) as DereferenceDefinitionContext;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tablePropertyKey;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTablePropertyKey) {
	 		listener.enterTablePropertyKey(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTablePropertyKey) {
	 		listener.exitTablePropertyKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTablePropertyKey) {
			return visitor.visitTablePropertyKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyValueContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DIG_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
	}
	public REAL_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.REAL_LITERAL, 0);
	}
	public booleanLiteral(): BooleanLiteralContext {
		return this.getTypedRuleContext(BooleanLiteralContext, 0) as BooleanLiteralContext;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tablePropertyValue;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTablePropertyValue) {
	 		listener.enterTablePropertyValue(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTablePropertyValue) {
	 		listener.exitTablePropertyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTablePropertyValue) {
			return visitor.visitTablePropertyValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOperatorContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AND(): TerminalNode {
		return this.getToken(FlinkSqlParser.AND, 0);
	}
	public BIT_AND_OP_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.BIT_AND_OP);
	}
	public BIT_AND_OP(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_AND_OP, i);
	}
	public OR(): TerminalNode {
		return this.getToken(FlinkSqlParser.OR, 0);
	}
	public BIT_OR_OP_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.BIT_OR_OP);
	}
	public BIT_OR_OP(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_OR_OP, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_logicalOperator;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLogicalOperator) {
	 		listener.enterLogicalOperator(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLogicalOperator) {
	 		listener.exitLogicalOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLogicalOperator) {
			return visitor.visitLogicalOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUAL_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.EQUAL_SYMBOL, 0);
	}
	public GREATER_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
	}
	public LESS_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
	}
	public EXCLAMATION_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_comparisonOperator;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterComparisonOperator) {
	 		listener.enterComparisonOperator(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitComparisonOperator) {
	 		listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitOperatorContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LESS_SYMBOL_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.LESS_SYMBOL);
	}
	public LESS_SYMBOL(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.LESS_SYMBOL, i);
	}
	public GREATER_SYMBOL_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.GREATER_SYMBOL);
	}
	public GREATER_SYMBOL(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.GREATER_SYMBOL, i);
	}
	public BIT_AND_OP(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_AND_OP, 0);
	}
	public BIT_XOR_OP(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_XOR_OP, 0);
	}
	public BIT_OR_OP(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_OR_OP, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_bitOperator;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterBitOperator) {
	 		listener.enterBitOperator(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitBitOperator) {
	 		listener.exitBitOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitBitOperator) {
			return visitor.visitBitOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MathOperatorContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASTERISK_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
	}
	public SLASH_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.SLASH_SIGN, 0);
	}
	public PENCENT_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.PENCENT_SIGN, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIV, 0);
	}
	public ADD_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
	}
	public HYPNEN_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
	}
	public DOUBLE_HYPNEN_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.DOUBLE_HYPNEN_SIGN, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_mathOperator;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterMathOperator) {
	 		listener.enterMathOperator(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitMathOperator) {
	 		listener.exitMathOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitMathOperator) {
			return visitor.visitMathOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXCLAMATION_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0);
	}
	public BIT_NOT_OP(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_NOT_OP, 0);
	}
	public ADD_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
	}
	public HYPNEN_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_unaryOperator;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUnaryOperator) {
	 		listener.enterUnaryOperator(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUnaryOperator) {
	 		listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FullColumnNameContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_fullColumnName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterFullColumnName) {
	 		listener.enterFullColumnName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitFullColumnName) {
	 		listener.exitFullColumnName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFullColumnName) {
			return visitor.visitFullColumnName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
	public decimalLiteral(): DecimalLiteralContext {
		return this.getTypedRuleContext(DecimalLiteralContext, 0) as DecimalLiteralContext;
	}
	public interval(): IntervalContext {
		return this.getTypedRuleContext(IntervalContext, 0) as IntervalContext;
	}
	public HYPNEN_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
	}
	public booleanLiteral(): BooleanLiteralContext {
		return this.getTypedRuleContext(BooleanLiteralContext, 0) as BooleanLiteralContext;
	}
	public REAL_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.REAL_LITERAL, 0);
	}
	public BIT_STRING(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_STRING, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(FlinkSqlParser.NULL, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_constant;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterConstant) {
	 		listener.enterConstant(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitConstant) {
	 		listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_stringLiteral;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterStringLiteral) {
	 		listener.enterStringLiteral(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitStringLiteral) {
	 		listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecimalLiteralContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DIG_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_decimalLiteral;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDecimalLiteral) {
	 		listener.enterDecimalLiteral(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDecimalLiteral) {
	 		listener.exitDecimalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDecimalLiteral) {
			return visitor.visitDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanLiteralContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(FlinkSqlParser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_booleanLiteral;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterBooleanLiteral) {
	 		listener.enterBooleanLiteral(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitBooleanLiteral) {
	 		listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetQuantifierContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(FlinkSqlParser.DISTINCT, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(FlinkSqlParser.ALL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_setQuantifier;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSetQuantifier) {
	 		listener.enterSetQuantifier(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSetQuantifier) {
	 		listener.exitSetQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSetQuantifier) {
			return visitor.visitSetQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnsiNonReservedContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ADD(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD, 0);
	}
	public AFTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.AFTER, 0);
	}
	public ALTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.ALTER, 0);
	}
	public ANALYZE(): TerminalNode {
		return this.getToken(FlinkSqlParser.ANALYZE, 0);
	}
	public ANTI(): TerminalNode {
		return this.getToken(FlinkSqlParser.ANTI, 0);
	}
	public ARCHIVE(): TerminalNode {
		return this.getToken(FlinkSqlParser.ARCHIVE, 0);
	}
	public ARRAY(): TerminalNode {
		return this.getToken(FlinkSqlParser.ARRAY, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(FlinkSqlParser.ASC, 0);
	}
	public AT(): TerminalNode {
		return this.getToken(FlinkSqlParser.AT, 0);
	}
	public BETWEEN(): TerminalNode {
		return this.getToken(FlinkSqlParser.BETWEEN, 0);
	}
	public BIGINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIGINT, 0);
	}
	public BINARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.BINARY, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(FlinkSqlParser.BOOLEAN, 0);
	}
	public BUCKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.BUCKET, 0);
	}
	public BUCKETS(): TerminalNode {
		return this.getToken(FlinkSqlParser.BUCKETS, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(FlinkSqlParser.BY, 0);
	}
	public BYTES(): TerminalNode {
		return this.getToken(FlinkSqlParser.BYTES, 0);
	}
	public CACHE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CACHE, 0);
	}
	public CASCADE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CASCADE, 0);
	}
	public CATALOG(): TerminalNode {
		return this.getToken(FlinkSqlParser.CATALOG, 0);
	}
	public CATALOGS(): TerminalNode {
		return this.getToken(FlinkSqlParser.CATALOGS, 0);
	}
	public CHANGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CHANGE, 0);
	}
	public CHAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.CHAR, 0);
	}
	public CLEAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.CLEAR, 0);
	}
	public CLUSTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.CLUSTER, 0);
	}
	public CLUSTERED(): TerminalNode {
		return this.getToken(FlinkSqlParser.CLUSTERED, 0);
	}
	public CODEGEN(): TerminalNode {
		return this.getToken(FlinkSqlParser.CODEGEN, 0);
	}
	public COLLECTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.COLLECTION, 0);
	}
	public COLUMNS(): TerminalNode {
		return this.getToken(FlinkSqlParser.COLUMNS, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMENT, 0);
	}
	public COMMIT(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMIT, 0);
	}
	public COMPACT(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMPACT, 0);
	}
	public COMPACTIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMPACTIONS, 0);
	}
	public COMPUTE(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMPUTE, 0);
	}
	public CONCATENATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CONCATENATE, 0);
	}
	public CONSTRAINTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.CONSTRAINTS, 0);
	}
	public COST(): TerminalNode {
		return this.getToken(FlinkSqlParser.COST, 0);
	}
	public CUBE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CUBE, 0);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.CURRENT, 0);
	}
	public DATA(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATA, 0);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATABASE, 0);
	}
	public DATABASES(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATABASES, 0);
	}
	public DATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATE, 0);
	}
	public DATETIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATETIME, 0);
	}
	public DBPROPERTIES(): TerminalNode {
		return this.getToken(FlinkSqlParser.DBPROPERTIES, 0);
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.DECIMAL, 0);
	}
	public DEFINED(): TerminalNode {
		return this.getToken(FlinkSqlParser.DEFINED, 0);
	}
	public DELETE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DELETE, 0);
	}
	public DELIMITED(): TerminalNode {
		return this.getToken(FlinkSqlParser.DELIMITED, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(FlinkSqlParser.DESC, 0);
	}
	public DESCRIBE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DESCRIBE, 0);
	}
	public DFS(): TerminalNode {
		return this.getToken(FlinkSqlParser.DFS, 0);
	}
	public DIRECTORIES(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIRECTORIES, 0);
	}
	public DIRECTORY(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIRECTORY, 0);
	}
	public DISTRIBUTE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DISTRIBUTE, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIV, 0);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DOUBLE, 0);
	}
	public DROP(): TerminalNode {
		return this.getToken(FlinkSqlParser.DROP, 0);
	}
	public ESCAPED(): TerminalNode {
		return this.getToken(FlinkSqlParser.ESCAPED, 0);
	}
	public EXCHANGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXCHANGE, 0);
	}
	public EXCLUDING(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXCLUDING, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXISTS, 0);
	}
	public EXPLAIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXPLAIN, 0);
	}
	public EXPORT(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXPORT, 0);
	}
	public EXTENDED(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXTENDED, 0);
	}
	public EXTERNAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXTERNAL, 0);
	}
	public EXTRACT(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXTRACT, 0);
	}
	public FIELDS(): TerminalNode {
		return this.getToken(FlinkSqlParser.FIELDS, 0);
	}
	public FILEFORMAT(): TerminalNode {
		return this.getToken(FlinkSqlParser.FILEFORMAT, 0);
	}
	public FIRST(): TerminalNode {
		return this.getToken(FlinkSqlParser.FIRST, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(FlinkSqlParser.FLOAT, 0);
	}
	public FOLLOWING(): TerminalNode {
		return this.getToken(FlinkSqlParser.FOLLOWING, 0);
	}
	public FORMAT(): TerminalNode {
		return this.getToken(FlinkSqlParser.FORMAT, 0);
	}
	public FORMATTED(): TerminalNode {
		return this.getToken(FlinkSqlParser.FORMATTED, 0);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.FUNCTION, 0);
	}
	public FUNCTIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.FUNCTIONS, 0);
	}
	public GENERATED(): TerminalNode {
		return this.getToken(FlinkSqlParser.GENERATED, 0);
	}
	public GLOBAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.GLOBAL, 0);
	}
	public GROUPING(): TerminalNode {
		return this.getToken(FlinkSqlParser.GROUPING, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(FlinkSqlParser.IF, 0);
	}
	public IGNORE(): TerminalNode {
		return this.getToken(FlinkSqlParser.IGNORE, 0);
	}
	public IMPORT(): TerminalNode {
		return this.getToken(FlinkSqlParser.IMPORT, 0);
	}
	public INCLUDING(): TerminalNode {
		return this.getToken(FlinkSqlParser.INCLUDING, 0);
	}
	public INDEX(): TerminalNode {
		return this.getToken(FlinkSqlParser.INDEX, 0);
	}
	public INDEXES(): TerminalNode {
		return this.getToken(FlinkSqlParser.INDEXES, 0);
	}
	public INPATH(): TerminalNode {
		return this.getToken(FlinkSqlParser.INPATH, 0);
	}
	public INPUTFORMAT(): TerminalNode {
		return this.getToken(FlinkSqlParser.INPUTFORMAT, 0);
	}
	public INSERT(): TerminalNode {
		return this.getToken(FlinkSqlParser.INSERT, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(FlinkSqlParser.INT, 0);
	}
	public INTERVAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.INTERVAL, 0);
	}
	public ITEMS(): TerminalNode {
		return this.getToken(FlinkSqlParser.ITEMS, 0);
	}
	public KEY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KEY, 0);
	}
	public KEYS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KEYS, 0);
	}
	public LANGUAGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.LANGUAGE, 0);
	}
	public LAST(): TerminalNode {
		return this.getToken(FlinkSqlParser.LAST, 0);
	}
	public LATERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.LATERAL, 0);
	}
	public LAZY(): TerminalNode {
		return this.getToken(FlinkSqlParser.LAZY, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(FlinkSqlParser.LIKE, 0);
	}
	public LIMIT(): TerminalNode {
		return this.getToken(FlinkSqlParser.LIMIT, 0);
	}
	public LINES(): TerminalNode {
		return this.getToken(FlinkSqlParser.LINES, 0);
	}
	public LIST(): TerminalNode {
		return this.getToken(FlinkSqlParser.LIST, 0);
	}
	public LOAD(): TerminalNode {
		return this.getToken(FlinkSqlParser.LOAD, 0);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.LOCAL, 0);
	}
	public LOCATION(): TerminalNode {
		return this.getToken(FlinkSqlParser.LOCATION, 0);
	}
	public LOCK(): TerminalNode {
		return this.getToken(FlinkSqlParser.LOCK, 0);
	}
	public LOCKS(): TerminalNode {
		return this.getToken(FlinkSqlParser.LOCKS, 0);
	}
	public LOGICAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.LOGICAL, 0);
	}
	public MACRO(): TerminalNode {
		return this.getToken(FlinkSqlParser.MACRO, 0);
	}
	public MAP(): TerminalNode {
		return this.getToken(FlinkSqlParser.MAP, 0);
	}
	public MATCH(): TerminalNode {
		return this.getToken(FlinkSqlParser.MATCH, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(FlinkSqlParser.MINUS, 0);
	}
	public MSCK(): TerminalNode {
		return this.getToken(FlinkSqlParser.MSCK, 0);
	}
	public MULTISET(): TerminalNode {
		return this.getToken(FlinkSqlParser.MULTISET, 0);
	}
	public NEXT(): TerminalNode {
		return this.getToken(FlinkSqlParser.NEXT, 0);
	}
	public NO(): TerminalNode {
		return this.getToken(FlinkSqlParser.NO, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(FlinkSqlParser.NULL, 0);
	}
	public NULLS(): TerminalNode {
		return this.getToken(FlinkSqlParser.NULLS, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(FlinkSqlParser.OF, 0);
	}
	public OPTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.OPTION, 0);
	}
	public OPTIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.OPTIONS, 0);
	}
	public OUT(): TerminalNode {
		return this.getToken(FlinkSqlParser.OUT, 0);
	}
	public OUTPUTFORMAT(): TerminalNode {
		return this.getToken(FlinkSqlParser.OUTPUTFORMAT, 0);
	}
	public OVER(): TerminalNode {
		return this.getToken(FlinkSqlParser.OVER, 0);
	}
	public OVERWRITE(): TerminalNode {
		return this.getToken(FlinkSqlParser.OVERWRITE, 0);
	}
	public PARTITION(): TerminalNode {
		return this.getToken(FlinkSqlParser.PARTITION, 0);
	}
	public PARTITIONED(): TerminalNode {
		return this.getToken(FlinkSqlParser.PARTITIONED, 0);
	}
	public PARTITIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.PARTITIONS, 0);
	}
	public PERCENTLIT(): TerminalNode {
		return this.getToken(FlinkSqlParser.PERCENTLIT, 0);
	}
	public PERIOD(): TerminalNode {
		return this.getToken(FlinkSqlParser.PERIOD, 0);
	}
	public PIVOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.PIVOT, 0);
	}
	public POSITION(): TerminalNode {
		return this.getToken(FlinkSqlParser.POSITION, 0);
	}
	public PRECEDING(): TerminalNode {
		return this.getToken(FlinkSqlParser.PRECEDING, 0);
	}
	public PRINCIPALS(): TerminalNode {
		return this.getToken(FlinkSqlParser.PRINCIPALS, 0);
	}
	public PURGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.PURGE, 0);
	}
	public RANGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.RANGE, 0);
	}
	public RAW(): TerminalNode {
		return this.getToken(FlinkSqlParser.RAW, 0);
	}
	public RECORDREADER(): TerminalNode {
		return this.getToken(FlinkSqlParser.RECORDREADER, 0);
	}
	public RECORDWRITER(): TerminalNode {
		return this.getToken(FlinkSqlParser.RECORDWRITER, 0);
	}
	public RECOVER(): TerminalNode {
		return this.getToken(FlinkSqlParser.RECOVER, 0);
	}
	public REDUCE(): TerminalNode {
		return this.getToken(FlinkSqlParser.REDUCE, 0);
	}
	public REFRESH(): TerminalNode {
		return this.getToken(FlinkSqlParser.REFRESH, 0);
	}
	public RENAME(): TerminalNode {
		return this.getToken(FlinkSqlParser.RENAME, 0);
	}
	public REPAIR(): TerminalNode {
		return this.getToken(FlinkSqlParser.REPAIR, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(FlinkSqlParser.REPLACE, 0);
	}
	public RESET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RESET, 0);
	}
	public RESTRICT(): TerminalNode {
		return this.getToken(FlinkSqlParser.RESTRICT, 0);
	}
	public REVOKE(): TerminalNode {
		return this.getToken(FlinkSqlParser.REVOKE, 0);
	}
	public RLIKE(): TerminalNode {
		return this.getToken(FlinkSqlParser.RLIKE, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROLE, 0);
	}
	public ROLES(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROLES, 0);
	}
	public ROLLBACK(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROLLBACK, 0);
	}
	public ROLLUP(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROLLUP, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROW, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROWS, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(FlinkSqlParser.SEMI, 0);
	}
	public SEPARATED(): TerminalNode {
		return this.getToken(FlinkSqlParser.SEPARATED, 0);
	}
	public SERDE(): TerminalNode {
		return this.getToken(FlinkSqlParser.SERDE, 0);
	}
	public SERDEPROPERTIES(): TerminalNode {
		return this.getToken(FlinkSqlParser.SERDEPROPERTIES, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(FlinkSqlParser.SET, 0);
	}
	public SETMINUS(): TerminalNode {
		return this.getToken(FlinkSqlParser.SETMINUS, 0);
	}
	public SETS(): TerminalNode {
		return this.getToken(FlinkSqlParser.SETS, 0);
	}
	public SHOW(): TerminalNode {
		return this.getToken(FlinkSqlParser.SHOW, 0);
	}
	public SKEWED(): TerminalNode {
		return this.getToken(FlinkSqlParser.SKEWED, 0);
	}
	public SMALLINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.SMALLINT, 0);
	}
	public SORT(): TerminalNode {
		return this.getToken(FlinkSqlParser.SORT, 0);
	}
	public SORTED(): TerminalNode {
		return this.getToken(FlinkSqlParser.SORTED, 0);
	}
	public START(): TerminalNode {
		return this.getToken(FlinkSqlParser.START, 0);
	}
	public STATISTICS(): TerminalNode {
		return this.getToken(FlinkSqlParser.STATISTICS, 0);
	}
	public STORED(): TerminalNode {
		return this.getToken(FlinkSqlParser.STORED, 0);
	}
	public STRATIFY(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRATIFY, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING, 0);
	}
	public STRUCT(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRUCT, 0);
	}
	public SYSTEM(): TerminalNode {
		return this.getToken(FlinkSqlParser.SYSTEM, 0);
	}
	public SYSTEM_TIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.SYSTEM_TIME, 0);
	}
	public TABLES(): TerminalNode {
		return this.getToken(FlinkSqlParser.TABLES, 0);
	}
	public TABLESAMPLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TABLESAMPLE, 0);
	}
	public TBLPROPERTIES(): TerminalNode {
		return this.getToken(FlinkSqlParser.TBLPROPERTIES, 0);
	}
	public TEMPORARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.TEMPORARY, 0);
	}
	public TERMINATED(): TerminalNode {
		return this.getToken(FlinkSqlParser.TERMINATED, 0);
	}
	public TIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.TIME, 0);
	}
	public TIMESTAMP(): TerminalNode {
		return this.getToken(FlinkSqlParser.TIMESTAMP, 0);
	}
	public TINYINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.TINYINT, 0);
	}
	public TOUCH(): TerminalNode {
		return this.getToken(FlinkSqlParser.TOUCH, 0);
	}
	public TRANSACTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.TRANSACTION, 0);
	}
	public TRANSACTIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.TRANSACTIONS, 0);
	}
	public TRANSFORM(): TerminalNode {
		return this.getToken(FlinkSqlParser.TRANSFORM, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TRUE, 0);
	}
	public TRUNCATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TRUNCATE, 0);
	}
	public UNARCHIVE(): TerminalNode {
		return this.getToken(FlinkSqlParser.UNARCHIVE, 0);
	}
	public UNBOUNDED(): TerminalNode {
		return this.getToken(FlinkSqlParser.UNBOUNDED, 0);
	}
	public UNCACHE(): TerminalNode {
		return this.getToken(FlinkSqlParser.UNCACHE, 0);
	}
	public UNLOCK(): TerminalNode {
		return this.getToken(FlinkSqlParser.UNLOCK, 0);
	}
	public UNSET(): TerminalNode {
		return this.getToken(FlinkSqlParser.UNSET, 0);
	}
	public UNNEST(): TerminalNode {
		return this.getToken(FlinkSqlParser.UNNEST, 0);
	}
	public USE(): TerminalNode {
		return this.getToken(FlinkSqlParser.USE, 0);
	}
	public VALUES(): TerminalNode {
		return this.getToken(FlinkSqlParser.VALUES, 0);
	}
	public VARBINARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.VARBINARY, 0);
	}
	public VARCHAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.VARCHAR, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(FlinkSqlParser.VIEW, 0);
	}
	public VIEWS(): TerminalNode {
		return this.getToken(FlinkSqlParser.VIEWS, 0);
	}
	public WATERMARK(): TerminalNode {
		return this.getToken(FlinkSqlParser.WATERMARK, 0);
	}
	public WINDOW(): TerminalNode {
		return this.getToken(FlinkSqlParser.WINDOW, 0);
	}
	public WITHIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.WITHIN, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(FlinkSqlParser.WS, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_ansiNonReserved;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterAnsiNonReserved) {
	 		listener.enterAnsiNonReserved(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitAnsiNonReserved) {
	 		listener.exitAnsiNonReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAnsiNonReserved) {
			return visitor.visitAnsiNonReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrictNonReservedContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ANTI(): TerminalNode {
		return this.getToken(FlinkSqlParser.ANTI, 0);
	}
	public CROSS(): TerminalNode {
		return this.getToken(FlinkSqlParser.CROSS, 0);
	}
	public EXCEPT(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXCEPT, 0);
	}
	public FULL(): TerminalNode {
		return this.getToken(FlinkSqlParser.FULL, 0);
	}
	public INNER(): TerminalNode {
		return this.getToken(FlinkSqlParser.INNER, 0);
	}
	public INTERSECT(): TerminalNode {
		return this.getToken(FlinkSqlParser.INTERSECT, 0);
	}
	public JOIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.JOIN, 0);
	}
	public LEFT(): TerminalNode {
		return this.getToken(FlinkSqlParser.LEFT, 0);
	}
	public NATURAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.NATURAL, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(FlinkSqlParser.ON, 0);
	}
	public RIGHT(): TerminalNode {
		return this.getToken(FlinkSqlParser.RIGHT, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(FlinkSqlParser.SEMI, 0);
	}
	public SETMINUS(): TerminalNode {
		return this.getToken(FlinkSqlParser.SETMINUS, 0);
	}
	public UNION(): TerminalNode {
		return this.getToken(FlinkSqlParser.UNION, 0);
	}
	public USING(): TerminalNode {
		return this.getToken(FlinkSqlParser.USING, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_strictNonReserved;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterStrictNonReserved) {
	 		listener.enterStrictNonReserved(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitStrictNonReserved) {
	 		listener.exitStrictNonReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitStrictNonReserved) {
			return visitor.visitStrictNonReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonReservedContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ADD(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD, 0);
	}
	public AFTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.AFTER, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(FlinkSqlParser.ALL, 0);
	}
	public ALTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.ALTER, 0);
	}
	public ANALYZE(): TerminalNode {
		return this.getToken(FlinkSqlParser.ANALYZE, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(FlinkSqlParser.AND, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(FlinkSqlParser.ANY, 0);
	}
	public COLUMNS(): TerminalNode {
		return this.getToken(FlinkSqlParser.COLUMNS, 0);
	}
	public ARRAY(): TerminalNode {
		return this.getToken(FlinkSqlParser.ARRAY, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.AS, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(FlinkSqlParser.ASC, 0);
	}
	public AT(): TerminalNode {
		return this.getToken(FlinkSqlParser.AT, 0);
	}
	public BETWEEN(): TerminalNode {
		return this.getToken(FlinkSqlParser.BETWEEN, 0);
	}
	public BIGINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIGINT, 0);
	}
	public BINARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.BINARY, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(FlinkSqlParser.BOOLEAN, 0);
	}
	public BOTH(): TerminalNode {
		return this.getToken(FlinkSqlParser.BOTH, 0);
	}
	public BUCKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.BUCKET, 0);
	}
	public BUCKETS(): TerminalNode {
		return this.getToken(FlinkSqlParser.BUCKETS, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(FlinkSqlParser.BY, 0);
	}
	public BYTES(): TerminalNode {
		return this.getToken(FlinkSqlParser.BYTES, 0);
	}
	public CACHE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CACHE, 0);
	}
	public CASCADE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CASCADE, 0);
	}
	public CASE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CASE, 0);
	}
	public CAST(): TerminalNode {
		return this.getToken(FlinkSqlParser.CAST, 0);
	}
	public CATALOG(): TerminalNode {
		return this.getToken(FlinkSqlParser.CATALOG, 0);
	}
	public CATALOGS(): TerminalNode {
		return this.getToken(FlinkSqlParser.CATALOGS, 0);
	}
	public CHANGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CHANGE, 0);
	}
	public CHAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.CHAR, 0);
	}
	public CLEAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.CLEAR, 0);
	}
	public CLUSTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.CLUSTER, 0);
	}
	public CLUSTERED(): TerminalNode {
		return this.getToken(FlinkSqlParser.CLUSTERED, 0);
	}
	public CODEGEN(): TerminalNode {
		return this.getToken(FlinkSqlParser.CODEGEN, 0);
	}
	public COLLECTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.COLLECTION, 0);
	}
	public COLUMN(): TerminalNode {
		return this.getToken(FlinkSqlParser.COLUMN, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMENT, 0);
	}
	public COMMIT(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMIT, 0);
	}
	public COMPACT(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMPACT, 0);
	}
	public COMPACTIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMPACTIONS, 0);
	}
	public COMPUTE(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMPUTE, 0);
	}
	public CONCATENATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CONCATENATE, 0);
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.CONSTRAINT, 0);
	}
	public CONSTRAINTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.CONSTRAINTS, 0);
	}
	public COST(): TerminalNode {
		return this.getToken(FlinkSqlParser.COST, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CREATE, 0);
	}
	public CUBE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CUBE, 0);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.CURRENT, 0);
	}
	public DATA(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATA, 0);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATABASE, 0);
	}
	public DATABASES(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATABASES, 0);
	}
	public DATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATE, 0);
	}
	public DATETIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.DATETIME, 0);
	}
	public DBPROPERTIES(): TerminalNode {
		return this.getToken(FlinkSqlParser.DBPROPERTIES, 0);
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.DECIMAL, 0);
	}
	public DEFINED(): TerminalNode {
		return this.getToken(FlinkSqlParser.DEFINED, 0);
	}
	public DELETE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DELETE, 0);
	}
	public DELIMITED(): TerminalNode {
		return this.getToken(FlinkSqlParser.DELIMITED, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(FlinkSqlParser.DESC, 0);
	}
	public DESCRIBE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DESCRIBE, 0);
	}
	public DFS(): TerminalNode {
		return this.getToken(FlinkSqlParser.DFS, 0);
	}
	public DIRECTORIES(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIRECTORIES, 0);
	}
	public DIRECTORY(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIRECTORY, 0);
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(FlinkSqlParser.DISTINCT, 0);
	}
	public DISTRIBUTE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DISTRIBUTE, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIV, 0);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.DOUBLE, 0);
	}
	public DROP(): TerminalNode {
		return this.getToken(FlinkSqlParser.DROP, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(FlinkSqlParser.ELSE, 0);
	}
	public END(): TerminalNode {
		return this.getToken(FlinkSqlParser.END, 0);
	}
	public ESCAPED(): TerminalNode {
		return this.getToken(FlinkSqlParser.ESCAPED, 0);
	}
	public EXCHANGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXCHANGE, 0);
	}
	public EXCLUDING(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXCLUDING, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXISTS, 0);
	}
	public EXPLAIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXPLAIN, 0);
	}
	public EXPORT(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXPORT, 0);
	}
	public EXTENDED(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXTENDED, 0);
	}
	public EXTERNAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXTERNAL, 0);
	}
	public EXTRACT(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXTRACT, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(FlinkSqlParser.FALSE, 0);
	}
	public FIELDS(): TerminalNode {
		return this.getToken(FlinkSqlParser.FIELDS, 0);
	}
	public FILEFORMAT(): TerminalNode {
		return this.getToken(FlinkSqlParser.FILEFORMAT, 0);
	}
	public FIRST(): TerminalNode {
		return this.getToken(FlinkSqlParser.FIRST, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(FlinkSqlParser.FLOAT, 0);
	}
	public FOLLOWING(): TerminalNode {
		return this.getToken(FlinkSqlParser.FOLLOWING, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(FlinkSqlParser.FOR, 0);
	}
	public FORMAT(): TerminalNode {
		return this.getToken(FlinkSqlParser.FORMAT, 0);
	}
	public FORMATTED(): TerminalNode {
		return this.getToken(FlinkSqlParser.FORMATTED, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(FlinkSqlParser.FROM, 0);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.FUNCTION, 0);
	}
	public FUNCTIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.FUNCTIONS, 0);
	}
	public GENERATED(): TerminalNode {
		return this.getToken(FlinkSqlParser.GENERATED, 0);
	}
	public GLOBAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.GLOBAL, 0);
	}
	public GRANT(): TerminalNode {
		return this.getToken(FlinkSqlParser.GRANT, 0);
	}
	public GROUP(): TerminalNode {
		return this.getToken(FlinkSqlParser.GROUP, 0);
	}
	public GROUPING(): TerminalNode {
		return this.getToken(FlinkSqlParser.GROUPING, 0);
	}
	public HAVING(): TerminalNode {
		return this.getToken(FlinkSqlParser.HAVING, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(FlinkSqlParser.IF, 0);
	}
	public IGNORE(): TerminalNode {
		return this.getToken(FlinkSqlParser.IGNORE, 0);
	}
	public IMPORT(): TerminalNode {
		return this.getToken(FlinkSqlParser.IMPORT, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(FlinkSqlParser.IN, 0);
	}
	public INCLUDING(): TerminalNode {
		return this.getToken(FlinkSqlParser.INCLUDING, 0);
	}
	public INDEX(): TerminalNode {
		return this.getToken(FlinkSqlParser.INDEX, 0);
	}
	public INDEXES(): TerminalNode {
		return this.getToken(FlinkSqlParser.INDEXES, 0);
	}
	public INPATH(): TerminalNode {
		return this.getToken(FlinkSqlParser.INPATH, 0);
	}
	public INPUTFORMAT(): TerminalNode {
		return this.getToken(FlinkSqlParser.INPUTFORMAT, 0);
	}
	public INSERT(): TerminalNode {
		return this.getToken(FlinkSqlParser.INSERT, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(FlinkSqlParser.INT, 0);
	}
	public INTERVAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.INTERVAL, 0);
	}
	public INTO(): TerminalNode {
		return this.getToken(FlinkSqlParser.INTO, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(FlinkSqlParser.IS, 0);
	}
	public ITEMS(): TerminalNode {
		return this.getToken(FlinkSqlParser.ITEMS, 0);
	}
	public KEY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KEY, 0);
	}
	public KEYS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KEYS, 0);
	}
	public LANGUAGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.LANGUAGE, 0);
	}
	public LAST(): TerminalNode {
		return this.getToken(FlinkSqlParser.LAST, 0);
	}
	public LATERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.LATERAL, 0);
	}
	public LAZY(): TerminalNode {
		return this.getToken(FlinkSqlParser.LAZY, 0);
	}
	public LEADING(): TerminalNode {
		return this.getToken(FlinkSqlParser.LEADING, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(FlinkSqlParser.LIKE, 0);
	}
	public LIMIT(): TerminalNode {
		return this.getToken(FlinkSqlParser.LIMIT, 0);
	}
	public LINES(): TerminalNode {
		return this.getToken(FlinkSqlParser.LINES, 0);
	}
	public LIST(): TerminalNode {
		return this.getToken(FlinkSqlParser.LIST, 0);
	}
	public LOAD(): TerminalNode {
		return this.getToken(FlinkSqlParser.LOAD, 0);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.LOCAL, 0);
	}
	public LOCATION(): TerminalNode {
		return this.getToken(FlinkSqlParser.LOCATION, 0);
	}
	public LOCK(): TerminalNode {
		return this.getToken(FlinkSqlParser.LOCK, 0);
	}
	public LOCKS(): TerminalNode {
		return this.getToken(FlinkSqlParser.LOCKS, 0);
	}
	public LOGICAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.LOGICAL, 0);
	}
	public MACRO(): TerminalNode {
		return this.getToken(FlinkSqlParser.MACRO, 0);
	}
	public MAP(): TerminalNode {
		return this.getToken(FlinkSqlParser.MAP, 0);
	}
	public MATCH(): TerminalNode {
		return this.getToken(FlinkSqlParser.MATCH, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(FlinkSqlParser.MINUS, 0);
	}
	public MSCK(): TerminalNode {
		return this.getToken(FlinkSqlParser.MSCK, 0);
	}
	public MULTISET(): TerminalNode {
		return this.getToken(FlinkSqlParser.MULTISET, 0);
	}
	public NEXT(): TerminalNode {
		return this.getToken(FlinkSqlParser.NEXT, 0);
	}
	public NO(): TerminalNode {
		return this.getToken(FlinkSqlParser.NO, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.NOT, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(FlinkSqlParser.NULL, 0);
	}
	public NULLS(): TerminalNode {
		return this.getToken(FlinkSqlParser.NULLS, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(FlinkSqlParser.OF, 0);
	}
	public OPTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.OPTION, 0);
	}
	public OPTIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.OPTIONS, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(FlinkSqlParser.OR, 0);
	}
	public ORDER(): TerminalNode {
		return this.getToken(FlinkSqlParser.ORDER, 0);
	}
	public OUT(): TerminalNode {
		return this.getToken(FlinkSqlParser.OUT, 0);
	}
	public OUTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.OUTER, 0);
	}
	public OUTPUTFORMAT(): TerminalNode {
		return this.getToken(FlinkSqlParser.OUTPUTFORMAT, 0);
	}
	public OVER(): TerminalNode {
		return this.getToken(FlinkSqlParser.OVER, 0);
	}
	public OVERWRITE(): TerminalNode {
		return this.getToken(FlinkSqlParser.OVERWRITE, 0);
	}
	public PARTITION(): TerminalNode {
		return this.getToken(FlinkSqlParser.PARTITION, 0);
	}
	public PARTITIONED(): TerminalNode {
		return this.getToken(FlinkSqlParser.PARTITIONED, 0);
	}
	public PARTITIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.PARTITIONS, 0);
	}
	public PERCENTLIT(): TerminalNode {
		return this.getToken(FlinkSqlParser.PERCENTLIT, 0);
	}
	public PERIOD(): TerminalNode {
		return this.getToken(FlinkSqlParser.PERIOD, 0);
	}
	public PIVOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.PIVOT, 0);
	}
	public POSITION(): TerminalNode {
		return this.getToken(FlinkSqlParser.POSITION, 0);
	}
	public PRECEDING(): TerminalNode {
		return this.getToken(FlinkSqlParser.PRECEDING, 0);
	}
	public PRIMARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.PRIMARY, 0);
	}
	public PRINCIPALS(): TerminalNode {
		return this.getToken(FlinkSqlParser.PRINCIPALS, 0);
	}
	public PURGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.PURGE, 0);
	}
	public RANGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.RANGE, 0);
	}
	public RAW(): TerminalNode {
		return this.getToken(FlinkSqlParser.RAW, 0);
	}
	public RECORDREADER(): TerminalNode {
		return this.getToken(FlinkSqlParser.RECORDREADER, 0);
	}
	public RECORDWRITER(): TerminalNode {
		return this.getToken(FlinkSqlParser.RECORDWRITER, 0);
	}
	public RECOVER(): TerminalNode {
		return this.getToken(FlinkSqlParser.RECOVER, 0);
	}
	public REDUCE(): TerminalNode {
		return this.getToken(FlinkSqlParser.REDUCE, 0);
	}
	public REFRESH(): TerminalNode {
		return this.getToken(FlinkSqlParser.REFRESH, 0);
	}
	public RENAME(): TerminalNode {
		return this.getToken(FlinkSqlParser.RENAME, 0);
	}
	public REPAIR(): TerminalNode {
		return this.getToken(FlinkSqlParser.REPAIR, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(FlinkSqlParser.REPLACE, 0);
	}
	public RESET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RESET, 0);
	}
	public RESTRICT(): TerminalNode {
		return this.getToken(FlinkSqlParser.RESTRICT, 0);
	}
	public REVOKE(): TerminalNode {
		return this.getToken(FlinkSqlParser.REVOKE, 0);
	}
	public RLIKE(): TerminalNode {
		return this.getToken(FlinkSqlParser.RLIKE, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROLE, 0);
	}
	public ROLES(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROLES, 0);
	}
	public ROLLBACK(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROLLBACK, 0);
	}
	public ROLLUP(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROLLUP, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROW, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROWS, 0);
	}
	public SELECT(): TerminalNode {
		return this.getToken(FlinkSqlParser.SELECT, 0);
	}
	public SEPARATED(): TerminalNode {
		return this.getToken(FlinkSqlParser.SEPARATED, 0);
	}
	public SERDE(): TerminalNode {
		return this.getToken(FlinkSqlParser.SERDE, 0);
	}
	public SERDEPROPERTIES(): TerminalNode {
		return this.getToken(FlinkSqlParser.SERDEPROPERTIES, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(FlinkSqlParser.SET, 0);
	}
	public SETS(): TerminalNode {
		return this.getToken(FlinkSqlParser.SETS, 0);
	}
	public SHOW(): TerminalNode {
		return this.getToken(FlinkSqlParser.SHOW, 0);
	}
	public SKEWED(): TerminalNode {
		return this.getToken(FlinkSqlParser.SKEWED, 0);
	}
	public SMALLINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.SMALLINT, 0);
	}
	public SORT(): TerminalNode {
		return this.getToken(FlinkSqlParser.SORT, 0);
	}
	public SORTED(): TerminalNode {
		return this.getToken(FlinkSqlParser.SORTED, 0);
	}
	public START(): TerminalNode {
		return this.getToken(FlinkSqlParser.START, 0);
	}
	public STATISTICS(): TerminalNode {
		return this.getToken(FlinkSqlParser.STATISTICS, 0);
	}
	public STORED(): TerminalNode {
		return this.getToken(FlinkSqlParser.STORED, 0);
	}
	public STRATIFY(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRATIFY, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING, 0);
	}
	public STRUCT(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRUCT, 0);
	}
	public SYSTEM(): TerminalNode {
		return this.getToken(FlinkSqlParser.SYSTEM, 0);
	}
	public SYSTEM_TIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.SYSTEM_TIME, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TABLE, 0);
	}
	public TABLES(): TerminalNode {
		return this.getToken(FlinkSqlParser.TABLES, 0);
	}
	public TABLESAMPLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TABLESAMPLE, 0);
	}
	public TBLPROPERTIES(): TerminalNode {
		return this.getToken(FlinkSqlParser.TBLPROPERTIES, 0);
	}
	public TEMPORARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.TEMPORARY, 0);
	}
	public TERMINATED(): TerminalNode {
		return this.getToken(FlinkSqlParser.TERMINATED, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(FlinkSqlParser.THEN, 0);
	}
	public TIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.TIME, 0);
	}
	public TIMESTAMP(): TerminalNode {
		return this.getToken(FlinkSqlParser.TIMESTAMP, 0);
	}
	public TINYINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.TINYINT, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(FlinkSqlParser.TO, 0);
	}
	public TOUCH(): TerminalNode {
		return this.getToken(FlinkSqlParser.TOUCH, 0);
	}
	public TRAILING(): TerminalNode {
		return this.getToken(FlinkSqlParser.TRAILING, 0);
	}
	public TRANSACTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.TRANSACTION, 0);
	}
	public TRANSACTIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.TRANSACTIONS, 0);
	}
	public TRANSFORM(): TerminalNode {
		return this.getToken(FlinkSqlParser.TRANSFORM, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TRUE, 0);
	}
	public TRUNCATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.TRUNCATE, 0);
	}
	public UNARCHIVE(): TerminalNode {
		return this.getToken(FlinkSqlParser.UNARCHIVE, 0);
	}
	public UNBOUNDED(): TerminalNode {
		return this.getToken(FlinkSqlParser.UNBOUNDED, 0);
	}
	public UNCACHE(): TerminalNode {
		return this.getToken(FlinkSqlParser.UNCACHE, 0);
	}
	public UNLOCK(): TerminalNode {
		return this.getToken(FlinkSqlParser.UNLOCK, 0);
	}
	public UNSET(): TerminalNode {
		return this.getToken(FlinkSqlParser.UNSET, 0);
	}
	public UNNEST(): TerminalNode {
		return this.getToken(FlinkSqlParser.UNNEST, 0);
	}
	public USE(): TerminalNode {
		return this.getToken(FlinkSqlParser.USE, 0);
	}
	public USER(): TerminalNode {
		return this.getToken(FlinkSqlParser.USER, 0);
	}
	public VALUES(): TerminalNode {
		return this.getToken(FlinkSqlParser.VALUES, 0);
	}
	public VARBINARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.VARBINARY, 0);
	}
	public VARCHAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.VARCHAR, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(FlinkSqlParser.VIEW, 0);
	}
	public VIEWS(): TerminalNode {
		return this.getToken(FlinkSqlParser.VIEWS, 0);
	}
	public WATERMARK(): TerminalNode {
		return this.getToken(FlinkSqlParser.WATERMARK, 0);
	}
	public WHEN(): TerminalNode {
		return this.getToken(FlinkSqlParser.WHEN, 0);
	}
	public WHERE(): TerminalNode {
		return this.getToken(FlinkSqlParser.WHERE, 0);
	}
	public WINDOW(): TerminalNode {
		return this.getToken(FlinkSqlParser.WINDOW, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(FlinkSqlParser.WITH, 0);
	}
	public WITHIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.WITHIN, 0);
	}
	public WS(): TerminalNode {
		return this.getToken(FlinkSqlParser.WS, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_nonReserved;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterNonReserved) {
	 		listener.enterNonReserved(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitNonReserved) {
	 		listener.exitNonReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitNonReserved) {
			return visitor.visitNonReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
