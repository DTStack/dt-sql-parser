// Generated from /Users/mortalYoung/Projects/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.12.0
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
	public static readonly STRING = 264;
	public static readonly ARRAY = 265;
	public static readonly MAP = 266;
	public static readonly CHAR = 267;
	public static readonly VARCHAR = 268;
	public static readonly BINARY = 269;
	public static readonly VARBINARY = 270;
	public static readonly BYTES = 271;
	public static readonly DECIMAL = 272;
	public static readonly DEC = 273;
	public static readonly NUMERIC = 274;
	public static readonly TINYINT = 275;
	public static readonly SMALLINT = 276;
	public static readonly INT = 277;
	public static readonly INTEGER = 278;
	public static readonly BIGINT = 279;
	public static readonly FLOAT = 280;
	public static readonly DOUBLE = 281;
	public static readonly DATE = 282;
	public static readonly TIME = 283;
	public static readonly TIMESTAMP = 284;
	public static readonly TIMESTAMP_LTZ = 285;
	public static readonly MULTISET = 286;
	public static readonly BOOLEAN = 287;
	public static readonly RAW = 288;
	public static readonly ROW = 289;
	public static readonly NULL = 290;
	public static readonly DATETIME = 291;
	public static readonly EQUAL_SYMBOL = 292;
	public static readonly GREATER_SYMBOL = 293;
	public static readonly LESS_SYMBOL = 294;
	public static readonly EXCLAMATION_SYMBOL = 295;
	public static readonly BIT_NOT_OP = 296;
	public static readonly BIT_OR_OP = 297;
	public static readonly BIT_AND_OP = 298;
	public static readonly BIT_XOR_OP = 299;
	public static readonly DOT = 300;
	public static readonly LS_BRACKET = 301;
	public static readonly RS_BRACKET = 302;
	public static readonly LR_BRACKET = 303;
	public static readonly RR_BRACKET = 304;
	public static readonly COMMA = 305;
	public static readonly SEMICOLON = 306;
	public static readonly AT_SIGN = 307;
	public static readonly SINGLE_QUOTE_SYMB = 308;
	public static readonly DOUBLE_QUOTE_SYMB = 309;
	public static readonly REVERSE_QUOTE_SYMB = 310;
	public static readonly COLON_SYMB = 311;
	public static readonly ASTERISK_SIGN = 312;
	public static readonly UNDERLINE_SIGN = 313;
	public static readonly HYPNEN_SIGN = 314;
	public static readonly ADD_SIGN = 315;
	public static readonly PENCENT_SIGN = 316;
	public static readonly DOUBLE_VERTICAL_SIGN = 317;
	public static readonly DOUBLE_HYPNEN_SIGN = 318;
	public static readonly SLASH_SIGN = 319;
	public static readonly DOT_ID = 320;
	public static readonly PLUS_DOT_ID = 321;
	public static readonly STRING_LITERAL = 322;
	public static readonly DIG_LITERAL = 323;
	public static readonly REAL_LITERAL = 324;
	public static readonly BIT_STRING = 325;
	public static readonly ID_LITERAL = 326;
	public static readonly PLUS_ID_LITERAL = 327;
	public static readonly FILE_PATH = 328;
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
	public static readonly RULE_insertMulStatementCompatibility = 73;
	public static readonly RULE_insertMulStatement = 74;
	public static readonly RULE_queryStatement = 75;
	public static readonly RULE_valuesCaluse = 76;
	public static readonly RULE_withItem = 77;
	public static readonly RULE_withItemName = 78;
	public static readonly RULE_selectStatement = 79;
	public static readonly RULE_selectClause = 80;
	public static readonly RULE_projectItemDefinition = 81;
	public static readonly RULE_fromClause = 82;
	public static readonly RULE_tableExpression = 83;
	public static readonly RULE_tableReference = 84;
	public static readonly RULE_tablePrimary = 85;
	public static readonly RULE_tablePath = 86;
	public static readonly RULE_systemTimePeriod = 87;
	public static readonly RULE_dateTimeExpression = 88;
	public static readonly RULE_joinCondition = 89;
	public static readonly RULE_whereClause = 90;
	public static readonly RULE_groupByClause = 91;
	public static readonly RULE_groupItemDefinition = 92;
	public static readonly RULE_havingClause = 93;
	public static readonly RULE_orderByCaluse = 94;
	public static readonly RULE_orderItemDefition = 95;
	public static readonly RULE_limitClause = 96;
	public static readonly RULE_windowClause = 97;
	public static readonly RULE_namedWindow = 98;
	public static readonly RULE_windowSpec = 99;
	public static readonly RULE_sortItem = 100;
	public static readonly RULE_windowFrame = 101;
	public static readonly RULE_frameBound = 102;
	public static readonly RULE_expression = 103;
	public static readonly RULE_booleanExpression = 104;
	public static readonly RULE_predicate = 105;
	public static readonly RULE_likePredicate = 106;
	public static readonly RULE_valueExpression = 107;
	public static readonly RULE_primaryExpression = 108;
	public static readonly RULE_functionName = 109;
	public static readonly RULE_dereferenceDefinition = 110;
	public static readonly RULE_correlationName = 111;
	public static readonly RULE_qualifiedName = 112;
	public static readonly RULE_interval = 113;
	public static readonly RULE_errorCapturingMultiUnitsInterval = 114;
	public static readonly RULE_multiUnitsInterval = 115;
	public static readonly RULE_errorCapturingUnitToUnitInterval = 116;
	public static readonly RULE_unitToUnitInterval = 117;
	public static readonly RULE_intervalValue = 118;
	public static readonly RULE_columnAlias = 119;
	public static readonly RULE_tableAlias = 120;
	public static readonly RULE_errorCapturingIdentifier = 121;
	public static readonly RULE_errorCapturingIdentifierExtra = 122;
	public static readonly RULE_identifierList = 123;
	public static readonly RULE_identifierSeq = 124;
	public static readonly RULE_identifier = 125;
	public static readonly RULE_strictIdentifier = 126;
	public static readonly RULE_unquotedIdentifier = 127;
	public static readonly RULE_quotedIdentifier = 128;
	public static readonly RULE_whenClause = 129;
	public static readonly RULE_uidList = 130;
	public static readonly RULE_uid = 131;
	public static readonly RULE_plusUid = 132;
	public static readonly RULE_withOption = 133;
	public static readonly RULE_ifNotExists = 134;
	public static readonly RULE_ifExists = 135;
	public static readonly RULE_tablePropertyList = 136;
	public static readonly RULE_tableProperty = 137;
	public static readonly RULE_tablePropertyKey = 138;
	public static readonly RULE_tablePropertyValue = 139;
	public static readonly RULE_logicalOperator = 140;
	public static readonly RULE_comparisonOperator = 141;
	public static readonly RULE_bitOperator = 142;
	public static readonly RULE_mathOperator = 143;
	public static readonly RULE_unaryOperator = 144;
	public static readonly RULE_fullColumnName = 145;
	public static readonly RULE_constant = 146;
	public static readonly RULE_stringLiteral = 147;
	public static readonly RULE_decimalLiteral = 148;
	public static readonly RULE_booleanLiteral = 149;
	public static readonly RULE_setQuantifier = 150;
	public static readonly RULE_ansiNonReserved = 151;
	public static readonly RULE_strictNonReserved = 152;
	public static readonly RULE_nonReserved = 153;
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
                                                            "'KEY'", "'PERIOD'", 
                                                            "'SYSTEM_TIME'", 
                                                            "'ENFORCED'", 
                                                            "'METADATA'", 
                                                            "'VIRTUAL'", 
                                                            "'ZONE'", "'STRING'", 
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
                                                            "')'", "','", 
                                                            "';'", "'@'", 
                                                            "'''", "'\"'", 
                                                            "'`'", "':'", 
                                                            "'*'", "'_'", 
                                                            "'-'", "'+'", 
                                                            "'%'", "'||'", 
                                                            "'--'", "'/'" ];
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
                                                             "KEY", "PERIOD", 
                                                             "SYSTEM_TIME", 
                                                             "ENFORCED", 
                                                             "METADATA", 
                                                             "VIRTUAL", 
                                                             "ZONE", "STRING", 
                                                             "ARRAY", "MAP", 
                                                             "CHAR", "VARCHAR", 
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
                                                             "DOT_ID", "PLUS_DOT_ID", 
                                                             "STRING_LITERAL", 
                                                             "DIG_LITERAL", 
                                                             "REAL_LITERAL", 
                                                             "BIT_STRING", 
                                                             "ID_LITERAL", 
                                                             "PLUS_ID_LITERAL", 
                                                             "FILE_PATH" ];
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
		"renameDefinition", "setKeyValueDefinition", "alertView", "alterDatabase", 
		"alterFunction", "dropCatalog", "dropTable", "dropDatabase", "dropView", 
		"dropFunction", "insertStatement", "insertSimpleStatement", "insertPartitionDefinition", 
		"valuesDefinition", "valuesRowDefinition", "insertMulStatementCompatibility", 
		"insertMulStatement", "queryStatement", "valuesCaluse", "withItem", "withItemName", 
		"selectStatement", "selectClause", "projectItemDefinition", "fromClause", 
		"tableExpression", "tableReference", "tablePrimary", "tablePath", "systemTimePeriod", 
		"dateTimeExpression", "joinCondition", "whereClause", "groupByClause", 
		"groupItemDefinition", "havingClause", "orderByCaluse", "orderItemDefition", 
		"limitClause", "windowClause", "namedWindow", "windowSpec", "sortItem", 
		"windowFrame", "frameBound", "expression", "booleanExpression", "predicate", 
		"likePredicate", "valueExpression", "primaryExpression", "functionName", 
		"dereferenceDefinition", "correlationName", "qualifiedName", "interval", 
		"errorCapturingMultiUnitsInterval", "multiUnitsInterval", "errorCapturingUnitToUnitInterval", 
		"unitToUnitInterval", "intervalValue", "columnAlias", "tableAlias", "errorCapturingIdentifier", 
		"errorCapturingIdentifierExtra", "identifierList", "identifierSeq", "identifier", 
		"strictIdentifier", "unquotedIdentifier", "quotedIdentifier", "whenClause", 
		"uidList", "uid", "plusUid", "withOption", "ifNotExists", "ifExists", 
		"tablePropertyList", "tableProperty", "tablePropertyKey", "tablePropertyValue", 
		"logicalOperator", "comparisonOperator", "bitOperator", "mathOperator", 
		"unaryOperator", "fullColumnName", "constant", "stringLiteral", "decimalLiteral", 
		"booleanLiteral", "setQuantifier", "ansiNonReserved", "strictNonReserved", 
		"nonReserved",
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
			this.state = 308;
			this.statement();
			this.state = 309;
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
			this.state = 311;
			this.sqlStatements();
			this.state = 312;
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
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4 || _la===6 || _la===36 || _la===43 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 570479885) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 12545) !== 0) || _la===212 || _la===213 || _la===303 || _la===306) {
				{
				this.state = 319;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 4:
				case 6:
				case 36:
				case 43:
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
				case 303:
					{
					this.state = 314;
					this.sqlStatement();
					this.state = 316;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 315;
						this.match(FlinkSqlParser.SEMICOLON);
						}
						break;
					}
					}
					break;
				case 306:
					{
					this.state = 318;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 323;
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
			this.state = 336;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 324;
				this.ddlStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 325;
				this.dmlStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 326;
				this.describeStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 327;
				this.explainStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 328;
				this.useStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 329;
				this.showStatememt();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 330;
				this.loadStatement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 331;
				this.unloadStatememt();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 332;
				this.setStatememt();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 333;
				this.resetStatememt();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 334;
				this.jarStatememt();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 335;
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
			this.state = 338;
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
			this.state = 354;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 340;
				this.createTable();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 341;
				this.createDatabase();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 342;
				this.createView();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 343;
				this.createFunction();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 344;
				this.createCatalog();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 345;
				this.alterTable();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 346;
				this.alertView();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 347;
				this.alterDatabase();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 348;
				this.alterFunction();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 349;
				this.dropCatalog();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 350;
				this.dropTable();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 351;
				this.dropDatabase();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 352;
				this.dropView();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 353;
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
			this.state = 358;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
			case 70:
			case 72:
			case 303:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 356;
				this.queryStatement(0);
				}
				break;
			case 43:
			case 78:
			case 80:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 357;
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
			this.state = 360;
			_la = this._input.LA(1);
			if(!(_la===36 || _la===84)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 361;
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
			this.state = 363;
			this.match(FlinkSqlParser.EXPLAIN);
			this.state = 367;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 87:
			case 88:
			case 89:
				{
				this.state = 364;
				this.explainDetails();
				}
				break;
			case 86:
				{
				this.state = 365;
				this.match(FlinkSqlParser.PLAN);
				this.state = 366;
				this.match(FlinkSqlParser.FOR);
				}
				break;
			case 4:
			case 43:
			case 70:
			case 72:
			case 78:
			case 79:
			case 80:
			case 303:
				break;
			default:
				break;
			}
			this.state = 372;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 369;
				this.dmlStatement();
				}
				break;
			case 2:
				{
				this.state = 370;
				this.insertSimpleStatement();
				}
				break;
			case 3:
				{
				this.state = 371;
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
			this.state = 374;
			this.explainDetail();
			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 375;
				this.match(FlinkSqlParser.COMMA);
				this.state = 376;
				this.explainDetail();
				}
				}
				this.state = 381;
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
			this.state = 382;
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
			this.state = 390;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 384;
				this.match(FlinkSqlParser.USE);
				this.state = 386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===239) {
					{
					this.state = 385;
					this.match(FlinkSqlParser.CATALOG);
					}
				}

				this.state = 388;
				this.uid();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 389;
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
			this.state = 392;
			this.match(FlinkSqlParser.USE);
			this.state = 393;
			this.match(FlinkSqlParser.MODULES);
			this.state = 394;
			this.uid();
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 395;
				this.match(FlinkSqlParser.COMMA);
				this.state = 396;
				this.uid();
				}
				}
				this.state = 401;
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
			this.state = 437;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 402;
				this.match(FlinkSqlParser.SHOW);
				this.state = 403;
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
				this.state = 404;
				this.match(FlinkSqlParser.SHOW);
				this.state = 405;
				this.match(FlinkSqlParser.CURRENT);
				this.state = 406;
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
				this.state = 407;
				this.match(FlinkSqlParser.SHOW);
				this.state = 408;
				this.match(FlinkSqlParser.TABLES);
				this.state = 411;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===5 || _la===24) {
					{
					this.state = 409;
					_la = this._input.LA(1);
					if(!(_la===5 || _la===24)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 410;
					this.uid();
					}
				}

				this.state = 414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25 || _la===29) {
					{
					this.state = 413;
					this.likePredicate();
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 416;
				this.match(FlinkSqlParser.SHOW);
				this.state = 417;
				this.match(FlinkSqlParser.COLUMNS);
				this.state = 418;
				_la = this._input.LA(1);
				if(!(_la===5 || _la===24)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 419;
				this.uid();
				this.state = 421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25 || _la===29) {
					{
					this.state = 420;
					this.likePredicate();
					}
				}

				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 423;
				this.match(FlinkSqlParser.SHOW);
				this.state = 424;
				this.match(FlinkSqlParser.CREATE);
				this.state = 425;
				_la = this._input.LA(1);
				if(!(_la===74 || _la===76)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 426;
				this.uid();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 427;
				this.match(FlinkSqlParser.SHOW);
				this.state = 429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 428;
					this.match(FlinkSqlParser.USER);
					}
				}

				this.state = 431;
				this.match(FlinkSqlParser.FUNCTIONS);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 432;
				this.match(FlinkSqlParser.SHOW);
				this.state = 434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===52) {
					{
					this.state = 433;
					this.match(FlinkSqlParser.FULL);
					}
				}

				this.state = 436;
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
			this.state = 439;
			this.match(FlinkSqlParser.LOAD);
			this.state = 440;
			this.match(FlinkSqlParser.MODULE);
			this.state = 441;
			this.uid();
			this.state = 444;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 442;
				this.match(FlinkSqlParser.WITH);
				this.state = 443;
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
			this.state = 446;
			this.match(FlinkSqlParser.UNLOAD);
			this.state = 447;
			this.match(FlinkSqlParser.MODULE);
			this.state = 448;
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
			this.state = 450;
			this.match(FlinkSqlParser.SET);
			this.state = 452;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 451;
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
			this.state = 454;
			this.match(FlinkSqlParser.RESET);
			this.state = 456;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 455;
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
			this.state = 458;
			_la = this._input.LA(1);
			if(!(_la===6 || _la===82)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 459;
			this.match(FlinkSqlParser.JAR);
			this.state = 460;
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
			this.state = 501;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 462;
				this.match(FlinkSqlParser.ADD);
				this.state = 463;
				this.match(FlinkSqlParser.JAR);
				this.state = 464;
				this.match(FlinkSqlParser.WITH);
				this.state = 465;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===7) {
					{
					this.state = 466;
					this.match(FlinkSqlParser.AS);
					this.state = 467;
					this.uid();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 470;
				this.match(FlinkSqlParser.ADD);
				this.state = 471;
				this.match(FlinkSqlParser.FILE);
				this.state = 472;
				this.match(FlinkSqlParser.WITH);
				this.state = 473;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===7) {
					{
					this.state = 474;
					this.match(FlinkSqlParser.AS);
					this.state = 475;
					this.uid();
					}
				}

				this.state = 480;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===113) {
					{
					this.state = 478;
					this.match(FlinkSqlParser.RENAME);
					this.state = 479;
					this.uid();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 482;
				this.match(FlinkSqlParser.ADD);
				this.state = 483;
				_la = this._input.LA(1);
				if(!(((((_la - 246)) & ~0x1F) === 0 && ((1 << (_la - 246)) & 31) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 484;
				this.match(FlinkSqlParser.WITH);
				this.state = 485;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 486;
				this.match(FlinkSqlParser.RENAME);
				this.state = 487;
				this.uid();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 488;
				this.match(FlinkSqlParser.ADD);
				this.state = 489;
				this.match(FlinkSqlParser.PYTHON_PARAMETER);
				this.state = 490;
				this.match(FlinkSqlParser.FILE_PATH);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 491;
				this.match(FlinkSqlParser.ADD);
				this.state = 492;
				this.match(FlinkSqlParser.ENGINE);
				this.state = 493;
				this.match(FlinkSqlParser.FILE);
				this.state = 494;
				this.match(FlinkSqlParser.WITH);
				this.state = 495;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 496;
				this.match(FlinkSqlParser.RENAME);
				this.state = 497;
				this.uid();
				this.state = 498;
				this.match(FlinkSqlParser.KEY);
				this.state = 499;
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
			this.state = 505;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 503;
				this.simpleCreateTable();
				}
				break;
			case 2:
				{
				this.state = 504;
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
			this.state = 507;
			this.match(FlinkSqlParser.CREATE);
			this.state = 509;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===166) {
				{
				this.state = 508;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 511;
			this.match(FlinkSqlParser.TABLE);
			this.state = 513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 512;
				this.ifNotExists();
				}
			}

			this.state = 515;
			this.sourceTable();
			this.state = 516;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 517;
			this.columnOptionDefinition();
			this.state = 522;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 518;
					this.match(FlinkSqlParser.COMMA);
					this.state = 519;
					this.columnOptionDefinition();
					}
					}
				}
				this.state = 524;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 527;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 525;
				this.match(FlinkSqlParser.COMMA);
				this.state = 526;
				this.watermarkDefinition();
				}
				break;
			}
			this.state = 531;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 529;
				this.match(FlinkSqlParser.COMMA);
				this.state = 530;
				this.tableConstraint();
				}
				break;
			}
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===305) {
				{
				this.state = 533;
				this.match(FlinkSqlParser.COMMA);
				this.state = 534;
				this.selfDefinitionClause();
				}
			}

			this.state = 537;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 539;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===115) {
				{
				this.state = 538;
				this.commentSpec();
				}
			}

			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===200) {
				{
				this.state = 541;
				this.partitionDefinition();
				}
			}

			this.state = 544;
			this.withOption();
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===29) {
				{
				this.state = 545;
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
			this.state = 548;
			this.match(FlinkSqlParser.CREATE);
			this.state = 549;
			this.match(FlinkSqlParser.TABLE);
			this.state = 551;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 550;
				this.ifNotExists();
				}
			}

			this.state = 553;
			this.sourceTable();
			this.state = 554;
			this.withOption();
			this.state = 557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 555;
				this.match(FlinkSqlParser.AS);
				this.state = 556;
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
			this.state = 562;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 559;
				this.physicalColumnDefinition();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 560;
				this.metadataColumnDefinition();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 561;
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
			this.state = 564;
			this.columnName();
			this.state = 565;
			this.columnType();
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===185 || _la===256) {
				{
				this.state = 566;
				this.columnConstraint();
				}
			}

			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===115) {
				{
				this.state = 569;
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
			this.state = 574;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 572;
				this.plusUid();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 573;
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
			this.state = 576;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 577;
			this.columnName();
			this.state = 582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 578;
				this.match(FlinkSqlParser.COMMA);
				this.state = 579;
				this.columnName();
				}
				}
				this.state = 584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 585;
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
			this.state = 624;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 282:
			case 287:
			case 290:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 587;
				localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 282)) & ~0x1F) === 0 && ((1 << (_la - 282)) & 289) !== 0))) {
				    localctx._typeName = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 264:
			case 267:
			case 268:
			case 269:
			case 270:
			case 271:
			case 275:
			case 276:
			case 277:
			case 278:
			case 279:
			case 283:
			case 285:
			case 291:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 588;
				localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & 136902905) !== 0))) {
				    localctx._typeName = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 590;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===303) {
					{
					this.state = 589;
					this.lengthOneDimension();
					}
				}

				}
				break;
			case 284:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 592;
				localctx._typeName = this.match(FlinkSqlParser.TIMESTAMP);
				this.state = 594;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===303) {
					{
					this.state = 593;
					this.lengthOneDimension();
					}
				}

				this.state = 602;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===70 || _la===71) {
					{
					this.state = 596;
					_la = this._input.LA(1);
					if(!(_la===70 || _la===71)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 598;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===224) {
						{
						this.state = 597;
						this.match(FlinkSqlParser.LOCAL);
						}
					}

					this.state = 600;
					this.match(FlinkSqlParser.TIME);
					this.state = 601;
					this.match(FlinkSqlParser.ZONE);
					}
				}

				}
				break;
			case 272:
			case 273:
			case 274:
			case 280:
			case 281:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 604;
				localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 272)) & ~0x1F) === 0 && ((1 << (_la - 272)) & 775) !== 0))) {
				    localctx._typeName = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 606;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===303) {
					{
					this.state = 605;
					this.lengthTwoOptionalDimension();
					}
				}

				}
				break;
			case 265:
			case 286:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 608;
				localctx._type_ = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===265 || _la===286)) {
				    localctx._type_ = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===294) {
					{
					this.state = 609;
					this.lengthOneTypeDimension();
					}
				}

				}
				break;
			case 266:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 612;
				localctx._type_ = this.match(FlinkSqlParser.MAP);
				this.state = 614;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===294) {
					{
					this.state = 613;
					this.mapTypeDimension();
					}
				}

				}
				break;
			case 289:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 616;
				localctx._type_ = this.match(FlinkSqlParser.ROW);
				this.state = 618;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===294) {
					{
					this.state = 617;
					this.rowTypeDimension();
					}
				}

				}
				break;
			case 288:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 620;
				localctx._type_ = this.match(FlinkSqlParser.RAW);
				this.state = 622;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===303) {
					{
					this.state = 621;
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
			this.state = 626;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 627;
			this.decimalLiteral();
			this.state = 628;
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
			this.state = 630;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 631;
			this.decimalLiteral();
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===305) {
				{
				this.state = 632;
				this.match(FlinkSqlParser.COMMA);
				this.state = 633;
				this.decimalLiteral();
				}
			}

			this.state = 636;
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
			this.state = 638;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 639;
			this.stringLiteral();
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===305) {
				{
				this.state = 640;
				this.match(FlinkSqlParser.COMMA);
				this.state = 641;
				this.stringLiteral();
				}
			}

			this.state = 644;
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
			this.state = 646;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 647;
			this.columnType();
			this.state = 648;
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
			this.state = 650;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 651;
			this.columnType();
			{
			this.state = 652;
			this.match(FlinkSqlParser.COMMA);
			this.state = 653;
			this.columnType();
			}
			this.state = 655;
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
			this.state = 657;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 658;
			this.columnName();
			this.state = 659;
			this.columnType();
			this.state = 666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 660;
				this.match(FlinkSqlParser.COMMA);
				this.state = 661;
				this.columnName();
				this.state = 662;
				this.columnType();
				}
				}
				this.state = 668;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 669;
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
			this.state = 673;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===185) {
				{
				this.state = 671;
				this.match(FlinkSqlParser.CONSTRAINT);
				this.state = 672;
				this.constraintName();
				}
			}

			this.state = 675;
			this.match(FlinkSqlParser.PRIMARY);
			this.state = 676;
			this.match(FlinkSqlParser.KEY);
			this.state = 677;
			this.match(FlinkSqlParser.NOT);
			this.state = 678;
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
			this.state = 680;
			this.match(FlinkSqlParser.COMMENT);
			this.state = 681;
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
			this.state = 683;
			this.columnName();
			this.state = 684;
			this.columnType();
			this.state = 685;
			this.match(FlinkSqlParser.METADATA);
			this.state = 688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 686;
				this.match(FlinkSqlParser.FROM);
				this.state = 687;
				this.metadataKey();
				}
			}

			this.state = 691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===262) {
				{
				this.state = 690;
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
			this.state = 693;
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
			this.state = 695;
			this.columnName();
			this.state = 696;
			this.match(FlinkSqlParser.AS);
			this.state = 697;
			this.computedColumnExpression();
			this.state = 699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===115) {
				{
				this.state = 698;
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
			this.state = 701;
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
			this.state = 703;
			this.match(FlinkSqlParser.WATERMARK);
			this.state = 704;
			this.match(FlinkSqlParser.FOR);
			this.state = 705;
			this.expression();
			this.state = 706;
			this.match(FlinkSqlParser.AS);
			this.state = 707;
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
			this.state = 711;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===185) {
				{
				this.state = 709;
				this.match(FlinkSqlParser.CONSTRAINT);
				this.state = 710;
				this.constraintName();
				}
			}

			this.state = 713;
			this.match(FlinkSqlParser.PRIMARY);
			this.state = 714;
			this.match(FlinkSqlParser.KEY);
			this.state = 715;
			this.columnNameList();
			this.state = 716;
			this.match(FlinkSqlParser.NOT);
			this.state = 717;
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
			this.state = 719;
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
			this.state = 721;
			this.match(FlinkSqlParser.PERIOD);
			this.state = 722;
			this.match(FlinkSqlParser.FOR);
			this.state = 723;
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
			this.state = 725;
			this.match(FlinkSqlParser.PARTITIONED);
			this.state = 726;
			this.match(FlinkSqlParser.BY);
			this.state = 727;
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
			this.state = 729;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 730;
			this.transform();
			this.state = 735;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 731;
				this.match(FlinkSqlParser.COMMA);
				this.state = 732;
				this.transform();
				}
				}
				this.state = 737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 738;
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
			this.state = 753;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				localctx = new IdentityTransformContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 740;
				this.qualifiedName();
				}
				break;
			case 2:
				localctx = new ApplyTransformContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 741;
				(localctx as ApplyTransformContext)._transformName = this.identifier();
				this.state = 742;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 743;
				this.transformArgument();
				this.state = 748;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 744;
					this.match(FlinkSqlParser.COMMA);
					this.state = 745;
					this.transformArgument();
					}
					}
					this.state = 750;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 751;
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
			this.state = 757;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 755;
				this.qualifiedName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 756;
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
			this.state = 759;
			this.match(FlinkSqlParser.LIKE);
			this.state = 760;
			this.sourceTable();
			this.state = 769;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 761;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 765;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 233)) & ~0x1F) === 0 && ((1 << (_la - 233)) & 7) !== 0)) {
					{
					{
					this.state = 762;
					this.likeOption();
					}
					}
					this.state = 767;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 768;
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
			this.state = 771;
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
			this.state = 777;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 773;
				_la = this._input.LA(1);
				if(!(_la===233 || _la===234)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 774;
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
				this.state = 775;
				_la = this._input.LA(1);
				if(!(((((_la - 233)) & ~0x1F) === 0 && ((1 << (_la - 233)) & 7) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 776;
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
			this.state = 779;
			this.match(FlinkSqlParser.CREATE);
			this.state = 780;
			this.match(FlinkSqlParser.CATALOG);
			this.state = 781;
			this.uid();
			this.state = 782;
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
			this.state = 784;
			this.match(FlinkSqlParser.CREATE);
			this.state = 785;
			this.match(FlinkSqlParser.DATABASE);
			this.state = 787;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 786;
				this.ifNotExists();
				}
			}

			this.state = 789;
			this.uid();
			this.state = 791;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===115) {
				{
				this.state = 790;
				this.commentSpec();
				}
			}

			this.state = 793;
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
			this.state = 795;
			this.match(FlinkSqlParser.CREATE);
			this.state = 797;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===166) {
				{
				this.state = 796;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 799;
			this.match(FlinkSqlParser.VIEW);
			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 800;
				this.ifNotExists();
				}
			}

			this.state = 803;
			this.uid();
			this.state = 805;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===303) {
				{
				this.state = 804;
				this.columnNameList();
				}
			}

			this.state = 808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===115) {
				{
				this.state = 807;
				this.commentSpec();
				}
			}

			this.state = 810;
			this.match(FlinkSqlParser.AS);
			this.state = 811;
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
			this.state = 813;
			this.match(FlinkSqlParser.CREATE);
			this.state = 817;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 814;
				this.match(FlinkSqlParser.TEMPORARY);
				}
				break;
			case 2:
				{
				this.state = 815;
				this.match(FlinkSqlParser.TEMPORARY);
				this.state = 816;
				this.match(FlinkSqlParser.SYSTEM);
				}
				break;
			}
			this.state = 819;
			this.match(FlinkSqlParser.FUNCTION);
			this.state = 821;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 820;
				this.ifNotExists();
				}
			}

			this.state = 823;
			this.uid();
			this.state = 824;
			this.match(FlinkSqlParser.AS);
			this.state = 825;
			this.identifier();
			this.state = 828;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===240) {
				{
				this.state = 826;
				this.match(FlinkSqlParser.LANGUAGE);
				this.state = 827;
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

			this.state = 831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===143) {
				{
				this.state = 830;
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
			this.state = 833;
			this.match(FlinkSqlParser.USING);
			this.state = 834;
			this.match(FlinkSqlParser.JAR);
			this.state = 835;
			this.jarFileName();
			this.state = 841;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 836;
				this.match(FlinkSqlParser.COMMA);
				this.state = 837;
				this.match(FlinkSqlParser.JAR);
				this.state = 838;
				this.jarFileName();
				}
				}
				this.state = 843;
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
			this.state = 844;
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
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 846;
			this.match(FlinkSqlParser.ALTER);
			this.state = 847;
			this.match(FlinkSqlParser.TABLE);
			this.state = 848;
			this.uid();
			this.state = 851;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 113:
				{
				this.state = 849;
				this.renameDefinition();
				}
				break;
			case 116:
				{
				this.state = 850;
				this.setKeyValueDefinition();
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
	public renameDefinition(): RenameDefinitionContext {
		let localctx: RenameDefinitionContext = new RenameDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, FlinkSqlParser.RULE_renameDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 853;
			this.match(FlinkSqlParser.RENAME);
			this.state = 854;
			this.match(FlinkSqlParser.TO);
			this.state = 855;
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
			this.state = 857;
			this.match(FlinkSqlParser.SET);
			this.state = 858;
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
		this.enterRule(localctx, 120, FlinkSqlParser.RULE_alertView);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 860;
			this.match(FlinkSqlParser.ALTER);
			this.state = 861;
			this.match(FlinkSqlParser.VIEW);
			this.state = 862;
			this.uid();
			this.state = 866;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 113:
				{
				this.state = 863;
				this.renameDefinition();
				}
				break;
			case 7:
				{
				this.state = 864;
				this.match(FlinkSqlParser.AS);
				this.state = 865;
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
		this.enterRule(localctx, 122, FlinkSqlParser.RULE_alterDatabase);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 868;
			this.match(FlinkSqlParser.ALTER);
			this.state = 869;
			this.match(FlinkSqlParser.DATABASE);
			this.state = 870;
			this.uid();
			this.state = 871;
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
		this.enterRule(localctx, 124, FlinkSqlParser.RULE_alterFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 873;
			this.match(FlinkSqlParser.ALTER);
			this.state = 877;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 874;
				this.match(FlinkSqlParser.TEMPORARY);
				}
				break;
			case 2:
				{
				this.state = 875;
				this.match(FlinkSqlParser.TEMPORARY);
				this.state = 876;
				this.match(FlinkSqlParser.SYSTEM);
				}
				break;
			}
			this.state = 879;
			this.match(FlinkSqlParser.FUNCTION);
			this.state = 881;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 880;
				this.ifExists();
				}
			}

			this.state = 883;
			this.uid();
			this.state = 884;
			this.match(FlinkSqlParser.AS);
			this.state = 885;
			this.identifier();
			this.state = 888;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===240) {
				{
				this.state = 886;
				this.match(FlinkSqlParser.LANGUAGE);
				this.state = 887;
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
		this.enterRule(localctx, 126, FlinkSqlParser.RULE_dropCatalog);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 890;
			this.match(FlinkSqlParser.DROP);
			this.state = 891;
			this.match(FlinkSqlParser.CATALOG);
			this.state = 893;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 892;
				this.ifExists();
				}
			}

			this.state = 895;
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
		this.enterRule(localctx, 128, FlinkSqlParser.RULE_dropTable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 897;
			this.match(FlinkSqlParser.DROP);
			this.state = 899;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===166) {
				{
				this.state = 898;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 901;
			this.match(FlinkSqlParser.TABLE);
			this.state = 903;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 902;
				this.ifExists();
				}
			}

			this.state = 905;
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
		this.enterRule(localctx, 130, FlinkSqlParser.RULE_dropDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 907;
			this.match(FlinkSqlParser.DROP);
			this.state = 908;
			this.match(FlinkSqlParser.DATABASE);
			this.state = 910;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 909;
				this.ifExists();
				}
			}

			this.state = 912;
			this.uid();
			this.state = 914;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===184 || _la===186) {
				{
				this.state = 913;
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
		this.enterRule(localctx, 132, FlinkSqlParser.RULE_dropView);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 916;
			this.match(FlinkSqlParser.DROP);
			this.state = 918;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===166) {
				{
				this.state = 917;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 920;
			this.match(FlinkSqlParser.VIEW);
			this.state = 922;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 921;
				this.ifExists();
				}
			}

			this.state = 924;
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
		this.enterRule(localctx, 134, FlinkSqlParser.RULE_dropFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 926;
			this.match(FlinkSqlParser.DROP);
			this.state = 930;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 927;
				this.match(FlinkSqlParser.TEMPORARY);
				}
				break;
			case 2:
				{
				this.state = 928;
				this.match(FlinkSqlParser.TEMPORARY);
				this.state = 929;
				this.match(FlinkSqlParser.SYSTEM);
				}
				break;
			}
			this.state = 932;
			this.match(FlinkSqlParser.FUNCTION);
			this.state = 934;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 933;
				this.ifExists();
				}
			}

			this.state = 936;
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
		this.enterRule(localctx, 136, FlinkSqlParser.RULE_insertStatement);
		let _la: number;
		try {
			this.state = 945;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 939;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===78) {
					{
					this.state = 938;
					this.match(FlinkSqlParser.EXECUTE);
					}
				}

				this.state = 941;
				this.insertSimpleStatement();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 942;
				this.insertMulStatementCompatibility();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 943;
				this.match(FlinkSqlParser.EXECUTE);
				this.state = 944;
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
		this.enterRule(localctx, 138, FlinkSqlParser.RULE_insertSimpleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 947;
			this.match(FlinkSqlParser.INSERT);
			this.state = 948;
			_la = this._input.LA(1);
			if(!(_la===83 || _la===140)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 949;
			this.uid();
			this.state = 958;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				this.state = 951;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===60) {
					{
					this.state = 950;
					this.insertPartitionDefinition();
					}
				}

				this.state = 954;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
				case 1:
					{
					this.state = 953;
					this.columnNameList();
					}
					break;
				}
				this.state = 956;
				this.queryStatement(0);
				}
				break;
			case 2:
				{
				this.state = 957;
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
		this.enterRule(localctx, 140, FlinkSqlParser.RULE_insertPartitionDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 960;
			this.match(FlinkSqlParser.PARTITION);
			this.state = 961;
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
		this.enterRule(localctx, 142, FlinkSqlParser.RULE_valuesDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 963;
			this.match(FlinkSqlParser.VALUES);
			this.state = 964;
			this.valuesRowDefinition();
			this.state = 969;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 965;
				this.match(FlinkSqlParser.COMMA);
				this.state = 966;
				this.valuesRowDefinition();
				}
				}
				this.state = 971;
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
		this.enterRule(localctx, 144, FlinkSqlParser.RULE_valuesRowDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 972;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 973;
			this.constant();
			this.state = 978;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 974;
				this.match(FlinkSqlParser.COMMA);
				this.state = 975;
				this.constant();
				}
				}
				this.state = 980;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 981;
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
	public insertMulStatementCompatibility(): InsertMulStatementCompatibilityContext {
		let localctx: InsertMulStatementCompatibilityContext = new InsertMulStatementCompatibilityContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, FlinkSqlParser.RULE_insertMulStatementCompatibility);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 983;
			this.match(FlinkSqlParser.BEGIN);
			this.state = 984;
			this.match(FlinkSqlParser.STATEMENT);
			this.state = 985;
			this.match(FlinkSqlParser.SET);
			this.state = 986;
			this.match(FlinkSqlParser.SEMICOLON);
			this.state = 990;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 987;
				this.insertSimpleStatement();
				this.state = 988;
				this.match(FlinkSqlParser.SEMICOLON);
				}
				}
				this.state = 992;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===80);
			this.state = 994;
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
	// @RuleVersion(0)
	public insertMulStatement(): InsertMulStatementContext {
		let localctx: InsertMulStatementContext = new InsertMulStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, FlinkSqlParser.RULE_insertMulStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 996;
			this.match(FlinkSqlParser.STATEMENT);
			this.state = 997;
			this.match(FlinkSqlParser.SET);
			this.state = 998;
			this.match(FlinkSqlParser.BEGIN);
			this.state = 1002;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 999;
				this.insertSimpleStatement();
				this.state = 1000;
				this.match(FlinkSqlParser.SEMICOLON);
				}
				}
				this.state = 1004;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===80);
			this.state = 1006;
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
		let _startState: number = 150;
		this.enterRecursionRule(localctx, 150, FlinkSqlParser.RULE_queryStatement, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1039;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 1009;
				this.valuesCaluse();
				}
				break;
			case 2:
				{
				this.state = 1010;
				this.match(FlinkSqlParser.WITH);
				this.state = 1011;
				this.withItem();
				this.state = 1016;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1012;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1013;
					this.withItem();
					}
					}
					this.state = 1018;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1019;
				this.queryStatement(5);
				}
				break;
			case 3:
				{
				this.state = 1021;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1022;
				this.queryStatement(0);
				this.state = 1023;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				{
				this.state = 1025;
				this.selectClause();
				this.state = 1027;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 1026;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1030;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 103, this._ctx) ) {
				case 1:
					{
					this.state = 1029;
					this.limitClause();
					}
					break;
				}
				}
				break;
			case 5:
				{
				this.state = 1032;
				this.selectStatement();
				this.state = 1034;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 1033;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1037;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
				case 1:
					{
					this.state = 1036;
					this.limitClause();
					}
					break;
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1055;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 110, this._ctx);
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
					this.state = 1041;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 1042;
					localctx._operator = this._input.LT(1);
					_la = this._input.LA(1);
					if(!(((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 11) !== 0))) {
					    localctx._operator = this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1044;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===8) {
						{
						this.state = 1043;
						this.match(FlinkSqlParser.ALL);
						}
					}

					this.state = 1046;
					localctx._right = this.queryStatement(0);
					this.state = 1048;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
					case 1:
						{
						this.state = 1047;
						this.orderByCaluse();
						}
						break;
					}
					this.state = 1051;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
					case 1:
						{
						this.state = 1050;
						this.limitClause();
						}
						break;
					}
					}
					}
				}
				this.state = 1057;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 110, this._ctx);
			}
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 152, FlinkSqlParser.RULE_valuesCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1058;
			this.match(FlinkSqlParser.VALUES);
			this.state = 1059;
			this.expression();
			this.state = 1064;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 111, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1060;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1061;
					this.expression();
					}
					}
				}
				this.state = 1066;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 111, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 154, FlinkSqlParser.RULE_withItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1067;
			this.withItemName();
			this.state = 1079;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===303) {
				{
				this.state = 1068;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1069;
				this.columnName();
				this.state = 1074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1070;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1071;
					this.columnName();
					}
					}
					this.state = 1076;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1077;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
			}

			this.state = 1081;
			this.match(FlinkSqlParser.AS);
			this.state = 1082;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1083;
			this.queryStatement(0);
			this.state = 1084;
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
		this.enterRule(localctx, 156, FlinkSqlParser.RULE_withItemName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1086;
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
		this.enterRule(localctx, 158, FlinkSqlParser.RULE_selectStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1088;
			this.selectClause();
			this.state = 1089;
			this.fromClause();
			this.state = 1091;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 1090;
				this.whereClause();
				}
				break;
			}
			this.state = 1094;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				{
				this.state = 1093;
				this.groupByClause();
				}
				break;
			}
			this.state = 1097;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				{
				this.state = 1096;
				this.havingClause();
				}
				break;
			}
			this.state = 1100;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1099;
				this.windowClause();
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
		this.enterRule(localctx, 160, FlinkSqlParser.RULE_selectClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1102;
			this.match(FlinkSqlParser.SELECT);
			this.state = 1104;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				{
				this.state = 1103;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1115;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				{
				this.state = 1106;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;
			case 2:
				{
				this.state = 1107;
				this.projectItemDefinition();
				this.state = 1112;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 119, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1108;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1109;
						this.projectItemDefinition();
						}
						}
					}
					this.state = 1114;
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
		this.enterRule(localctx, 162, FlinkSqlParser.RULE_projectItemDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1117;
			this.expression();
			this.state = 1122;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				{
				this.state = 1119;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
				case 1:
					{
					this.state = 1118;
					this.match(FlinkSqlParser.AS);
					}
					break;
				}
				this.state = 1121;
				this.expression();
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
	public fromClause(): FromClauseContext {
		let localctx: FromClauseContext = new FromClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, FlinkSqlParser.RULE_fromClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1124;
			this.match(FlinkSqlParser.FROM);
			this.state = 1125;
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
			{
			this.state = 1128;
			this.tableReference();
			this.state = 1133;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 123, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1129;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1130;
					this.tableReference();
					}
					}
				}
				this.state = 1135;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 123, this._ctx);
			}
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1157;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 129, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1155;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 128, this._ctx) ) {
					case 1:
						{
						localctx = new TableExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_tableExpression);
						this.state = 1136;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1137;
						this.match(FlinkSqlParser.CROSS);
						this.state = 1138;
						this.match(FlinkSqlParser.JOIN);
						this.state = 1139;
						this.tableExpression(2);
						}
						break;
					case 2:
						{
						localctx = new TableExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_tableExpression);
						this.state = 1140;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1142;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===54) {
							{
							this.state = 1141;
							this.match(FlinkSqlParser.NATURAL);
							}
						}

						this.state = 1145;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 27) !== 0)) {
							{
							this.state = 1144;
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

						this.state = 1148;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===47) {
							{
							this.state = 1147;
							this.match(FlinkSqlParser.OUTER);
							}
						}

						this.state = 1150;
						this.match(FlinkSqlParser.JOIN);
						this.state = 1151;
						this.tableExpression(0);
						this.state = 1153;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
						case 1:
							{
							this.state = 1152;
							this.joinCondition();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1159;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 129, this._ctx);
			}
			}
		}
		catch (re) {
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
			this.state = 1160;
			this.tablePrimary();
			this.state = 1162;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				{
				this.state = 1161;
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
			this.state = 1205;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===74) {
					{
					this.state = 1164;
					this.match(FlinkSqlParser.TABLE);
					}
				}

				this.state = 1167;
				this.tablePath();
				this.state = 1169;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 132, this._ctx) ) {
				case 1:
					{
					this.state = 1168;
					this.systemTimePeriod();
					}
					break;
				}
				this.state = 1175;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 134, this._ctx) ) {
				case 1:
					{
					this.state = 1172;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 133, this._ctx) ) {
					case 1:
						{
						this.state = 1171;
						this.match(FlinkSqlParser.AS);
						}
						break;
					}
					this.state = 1174;
					this.correlationName();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1177;
				this.match(FlinkSqlParser.LATERAL);
				this.state = 1178;
				this.match(FlinkSqlParser.TABLE);
				this.state = 1179;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1180;
				this.functionName();
				this.state = 1181;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1182;
				this.expression();
				this.state = 1187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1183;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1184;
					this.expression();
					}
					}
					this.state = 1189;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1190;
				this.match(FlinkSqlParser.RR_BRACKET);
				this.state = 1191;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===57) {
					{
					this.state = 1193;
					this.match(FlinkSqlParser.LATERAL);
					}
				}

				this.state = 1196;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1197;
				this.queryStatement(0);
				this.state = 1198;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1200;
				this.match(FlinkSqlParser.UNNEST);
				this.state = 1201;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1202;
				this.expression();
				this.state = 1203;
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
			this.state = 1207;
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
			this.state = 1209;
			this.match(FlinkSqlParser.FOR);
			this.state = 1210;
			this.match(FlinkSqlParser.SYSTEM_TIME);
			this.state = 1211;
			this.match(FlinkSqlParser.AS);
			this.state = 1212;
			this.match(FlinkSqlParser.OF);
			this.state = 1213;
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
			this.state = 1215;
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
	public joinCondition(): JoinConditionContext {
		let localctx: JoinConditionContext = new JoinConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, FlinkSqlParser.RULE_joinCondition);
		let _la: number;
		try {
			this.state = 1231;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 55:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1217;
				this.match(FlinkSqlParser.ON);
				this.state = 1218;
				this.booleanExpression(0);
				}
				break;
			case 143:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1219;
				this.match(FlinkSqlParser.USING);
				this.state = 1220;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1221;
				this.uid();
				this.state = 1226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1222;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1223;
					this.uid();
					}
					}
					this.state = 1228;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1229;
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
		this.enterRule(localctx, 180, FlinkSqlParser.RULE_whereClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1233;
			this.match(FlinkSqlParser.WHERE);
			this.state = 1234;
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
		this.enterRule(localctx, 182, FlinkSqlParser.RULE_groupByClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1236;
			this.match(FlinkSqlParser.GROUP);
			this.state = 1237;
			this.match(FlinkSqlParser.BY);
			this.state = 1238;
			this.groupItemDefinition();
			this.state = 1243;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 140, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1239;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1240;
					this.groupItemDefinition();
					}
					}
				}
				this.state = 1245;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 140, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 184, FlinkSqlParser.RULE_groupItemDefinition);
		let _la: number;
		try {
			this.state = 1297;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1246;
				this.expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1247;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1248;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1249;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1250;
				this.expression();
				this.state = 1255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1251;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1252;
					this.expression();
					}
					}
					this.state = 1257;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1258;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1260;
				this.match(FlinkSqlParser.CUBE);
				this.state = 1261;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1262;
				this.expression();
				this.state = 1267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1263;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1264;
					this.expression();
					}
					}
					this.state = 1269;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1270;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1272;
				this.match(FlinkSqlParser.ROLLUP);
				this.state = 1273;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1274;
				this.expression();
				this.state = 1279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1275;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1276;
					this.expression();
					}
					}
					this.state = 1281;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1282;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1284;
				this.match(FlinkSqlParser.GROUPING);
				this.state = 1285;
				this.match(FlinkSqlParser.SETS);
				this.state = 1286;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1287;
				this.groupItemDefinition();
				this.state = 1292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1288;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1289;
					this.groupItemDefinition();
					}
					}
					this.state = 1294;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1295;
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
	public havingClause(): HavingClauseContext {
		let localctx: HavingClauseContext = new HavingClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, FlinkSqlParser.RULE_havingClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1299;
			this.match(FlinkSqlParser.HAVING);
			this.state = 1300;
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
	public orderByCaluse(): OrderByCaluseContext {
		let localctx: OrderByCaluseContext = new OrderByCaluseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, FlinkSqlParser.RULE_orderByCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1302;
			this.match(FlinkSqlParser.ORDER);
			this.state = 1303;
			this.match(FlinkSqlParser.BY);
			this.state = 1304;
			this.orderItemDefition();
			this.state = 1309;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 146, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1305;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1306;
					this.orderItemDefition();
					}
					}
				}
				this.state = 1311;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 146, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 190, FlinkSqlParser.RULE_orderItemDefition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1312;
			this.expression();
			this.state = 1314;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				{
				this.state = 1313;
				_la = this._input.LA(1);
				if(!(_la===35 || _la===36)) {
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
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 192, FlinkSqlParser.RULE_limitClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1316;
			this.match(FlinkSqlParser.LIMIT);
			this.state = 1319;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				{
				this.state = 1317;
				this.match(FlinkSqlParser.ALL);
				}
				break;
			case 2:
				{
				this.state = 1318;
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
	public windowClause(): WindowClauseContext {
		let localctx: WindowClauseContext = new WindowClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, FlinkSqlParser.RULE_windowClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1321;
			this.match(FlinkSqlParser.WINDOW);
			this.state = 1322;
			this.namedWindow();
			this.state = 1327;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 149, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1323;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1324;
					this.namedWindow();
					}
					}
				}
				this.state = 1329;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 149, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 196, FlinkSqlParser.RULE_namedWindow);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1330;
			localctx._name = this.errorCapturingIdentifier();
			this.state = 1331;
			this.match(FlinkSqlParser.AS);
			this.state = 1332;
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
		this.enterRule(localctx, 198, FlinkSqlParser.RULE_windowSpec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 4294967295) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 4294967167) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 4291015671) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 4294967295) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & 4294967295) !== 0) || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & 4294967295) !== 0) || ((((_la - 198)) & ~0x1F) === 0 && ((1 << (_la - 198)) & 4294934527) !== 0) || ((((_la - 230)) & ~0x1F) === 0 && ((1 << (_la - 230)) & 1031800543) !== 0) || ((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & 266320383) !== 0) || ((((_la - 322)) & ~0x1F) === 0 && ((1 << (_la - 322)) & 19) !== 0)) {
				{
				this.state = 1334;
				localctx._name = this.errorCapturingIdentifier();
				}
			}

			this.state = 1337;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 1338;
				this.match(FlinkSqlParser.ORDER);
				this.state = 1339;
				this.match(FlinkSqlParser.BY);
				this.state = 1340;
				this.sortItem();
				this.state = 1345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1341;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1342;
					this.sortItem();
					}
					}
					this.state = 1347;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===60) {
				{
				this.state = 1350;
				this.match(FlinkSqlParser.PARTITION);
				this.state = 1351;
				this.match(FlinkSqlParser.BY);
				this.state = 1352;
				this.expression();
				this.state = 1357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1353;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1354;
					this.expression();
					}
					}
					this.state = 1359;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===61 || _la===62) {
				{
				this.state = 1362;
				this.windowFrame();
				}
			}

			this.state = 1365;
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
	public sortItem(): SortItemContext {
		let localctx: SortItemContext = new SortItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, FlinkSqlParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1367;
			this.expression();
			this.state = 1369;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===35 || _la===36) {
				{
				this.state = 1368;
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
			}

			this.state = 1373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 1371;
				this.match(FlinkSqlParser.NULLS);
				this.state = 1372;
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
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 202, FlinkSqlParser.RULE_windowFrame);
		try {
			this.state = 1379;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 61:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1375;
				this.match(FlinkSqlParser.RANGE);
				this.state = 1376;
				this.frameBound();
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1377;
				this.match(FlinkSqlParser.ROWS);
				this.state = 1378;
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
		this.enterRule(localctx, 204, FlinkSqlParser.RULE_frameBound);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1381;
			this.expression();
			this.state = 1382;
			this.match(FlinkSqlParser.PRECEDING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 206, FlinkSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1384;
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
		let _startState: number = 208;
		this.enterRecursionRule(localctx, 208, FlinkSqlParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1398;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				{
				localctx = new LogicalNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1387;
				this.match(FlinkSqlParser.NOT);
				this.state = 1388;
				this.booleanExpression(5);
				}
				break;
			case 2:
				{
				localctx = new ExistsContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1389;
				this.match(FlinkSqlParser.EXISTS);
				this.state = 1390;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1391;
				this.queryStatement(0);
				this.state = 1392;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				{
				localctx = new PredicatedContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1394;
				this.valueExpression(0);
				this.state = 1396;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 159, this._ctx) ) {
				case 1:
					{
					this.state = 1395;
					this.predicate();
					}
					break;
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1408;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 162, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1406;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 161, this._ctx) ) {
					case 1:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1400;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1401;
						(localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.AND);
						this.state = 1402;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;
					case 2:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1403;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1404;
						(localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.OR);
						this.state = 1405;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1410;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 162, this._ctx);
			}
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 210, FlinkSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1494;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1411;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1414;
				localctx._kind = this.match(FlinkSqlParser.BETWEEN);
				this.state = 1415;
				localctx._lower = this.valueExpression(0);
				this.state = 1416;
				this.match(FlinkSqlParser.AND);
				this.state = 1417;
				localctx._upper = this.valueExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1419;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1422;
				localctx._kind = this.match(FlinkSqlParser.IN);
				this.state = 1423;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1424;
				this.expression();
				this.state = 1429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1425;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1426;
					this.expression();
					}
					}
					this.state = 1431;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1432;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1434;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1437;
				localctx._kind = this.match(FlinkSqlParser.IN);
				this.state = 1438;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1439;
				this.queryStatement(0);
				this.state = 1440;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1442;
				localctx._kind = this.match(FlinkSqlParser.EXISTS);
				this.state = 1443;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1444;
				this.queryStatement(0);
				this.state = 1445;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1448;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1447;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1450;
				localctx._kind = this.match(FlinkSqlParser.RLIKE);
				this.state = 1451;
				localctx._pattern = this.valueExpression(0);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1452;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1455;
				localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 1456;
				localctx._quantifier = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===8 || _la===9)) {
				    localctx._quantifier = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1470;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 170, this._ctx) ) {
				case 1:
					{
					this.state = 1457;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1458;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				case 2:
					{
					this.state = 1459;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1460;
					this.expression();
					this.state = 1465;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===305) {
						{
						{
						this.state = 1461;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1462;
						this.expression();
						}
						}
						this.state = 1467;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1468;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				}
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1473;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1472;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1475;
				localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 1476;
				localctx._pattern = this.valueExpression(0);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1477;
				this.match(FlinkSqlParser.IS);
				this.state = 1479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1478;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1481;
				localctx._kind = this.match(FlinkSqlParser.NULL);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1482;
				this.match(FlinkSqlParser.IS);
				this.state = 1484;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1483;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1486;
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
				this.state = 1487;
				this.match(FlinkSqlParser.IS);
				this.state = 1489;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1488;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1491;
				localctx._kind = this.match(FlinkSqlParser.DISTINCT);
				this.state = 1492;
				this.match(FlinkSqlParser.FROM);
				this.state = 1493;
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
		this.enterRule(localctx, 212, FlinkSqlParser.RULE_likePredicate);
		let _la: number;
		try {
			this.state = 1521;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1496;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1499;
				localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 1500;
				localctx._quantifier = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===8 || _la===9)) {
				    localctx._quantifier = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1514;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 178, this._ctx) ) {
				case 1:
					{
					this.state = 1501;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1502;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				case 2:
					{
					this.state = 1503;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1504;
					this.expression();
					this.state = 1509;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===305) {
						{
						{
						this.state = 1505;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1506;
						this.expression();
						}
						}
						this.state = 1511;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1512;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1516;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1519;
				localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 1520;
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
		let _startState: number = 214;
		this.enterRecursionRule(localctx, 214, FlinkSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1527;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				{
				localctx = new ValueExpressionDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1524;
				this.primaryExpression(0);
				}
				break;
			case 2:
				{
				localctx = new ArithmeticUnaryContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1525;
				(localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 786433) !== 0))) {
				    (localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1526;
				this.valueExpression(7);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1550;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 183, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1548;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 182, this._ctx) ) {
					case 1:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1529;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1530;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===132 || ((((_la - 312)) & ~0x1F) === 0 && ((1 << (_la - 312)) & 145) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1531;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
						}
						break;
					case 2:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1532;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1533;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 314)) & ~0x1F) === 0 && ((1 << (_la - 314)) & 11) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1534;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
						}
						break;
					case 3:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1535;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1536;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_AND_OP);
						this.state = 1537;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
						}
						break;
					case 4:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1538;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1539;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_XOR_OP);
						this.state = 1540;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;
					case 5:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1541;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1542;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_OR_OP);
						this.state = 1543;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;
					case 6:
						{
						localctx = new ComparisonContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1544;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1545;
						this.comparisonOperator();
						this.state = 1546;
						(localctx as ComparisonContext)._right = this.valueExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1552;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 183, this._ctx);
			}
			}
		}
		catch (re) {
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
		let _startState: number = 216;
		this.enterRecursionRule(localctx, 216, FlinkSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1644;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 193, this._ctx) ) {
			case 1:
				{
				localctx = new SearchedCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1554;
				this.match(FlinkSqlParser.CASE);
				this.state = 1556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1555;
					this.whenClause();
					}
					}
					this.state = 1558;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===40);
				this.state = 1562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===42) {
					{
					this.state = 1560;
					this.match(FlinkSqlParser.ELSE);
					this.state = 1561;
					(localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1564;
				this.match(FlinkSqlParser.END);
				}
				break;
			case 2:
				{
				localctx = new SimpleCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1566;
				this.match(FlinkSqlParser.CASE);
				this.state = 1567;
				(localctx as SimpleCaseContext)._value = this.expression();
				this.state = 1569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1568;
					this.whenClause();
					}
					}
					this.state = 1571;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===40);
				this.state = 1575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===42) {
					{
					this.state = 1573;
					this.match(FlinkSqlParser.ELSE);
					this.state = 1574;
					(localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1577;
				this.match(FlinkSqlParser.END);
				}
				break;
			case 3:
				{
				localctx = new CastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1579;
				this.match(FlinkSqlParser.CAST);
				this.state = 1580;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1581;
				this.expression();
				this.state = 1582;
				this.match(FlinkSqlParser.AS);
				this.state = 1583;
				this.columnType();
				this.state = 1584;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				{
				localctx = new FirstContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1586;
				this.match(FlinkSqlParser.FIRST);
				this.state = 1587;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1588;
				this.expression();
				this.state = 1591;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===124) {
					{
					this.state = 1589;
					this.match(FlinkSqlParser.IGNORE);
					this.state = 1590;
					this.match(FlinkSqlParser.NULLS);
					}
				}

				this.state = 1593;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 5:
				{
				localctx = new LastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1595;
				this.match(FlinkSqlParser.LAST);
				this.state = 1596;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1597;
				this.expression();
				this.state = 1600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===124) {
					{
					this.state = 1598;
					this.match(FlinkSqlParser.IGNORE);
					this.state = 1599;
					this.match(FlinkSqlParser.NULLS);
					}
				}

				this.state = 1602;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 6:
				{
				localctx = new PositionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1604;
				this.match(FlinkSqlParser.POSITION);
				this.state = 1605;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1606;
				(localctx as PositionContext)._substr = this.valueExpression(0);
				this.state = 1607;
				this.match(FlinkSqlParser.IN);
				this.state = 1608;
				(localctx as PositionContext)._str = this.valueExpression(0);
				this.state = 1609;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 7:
				{
				localctx = new ConstantDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1611;
				this.constant();
				}
				break;
			case 8:
				{
				localctx = new StarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1612;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;
			case 9:
				{
				localctx = new StarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1613;
				this.uid();
				this.state = 1614;
				this.match(FlinkSqlParser.DOT);
				this.state = 1615;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;
			case 10:
				{
				localctx = new SubqueryExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1617;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1618;
				this.queryStatement(0);
				this.state = 1619;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 11:
				{
				localctx = new FunctionCallContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1621;
				this.functionName();
				this.state = 1622;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 4294967295) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 4294967167) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 4291015671) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 4294967295) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & 4294967295) !== 0) || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & 4294967295) !== 0) || ((((_la - 198)) & ~0x1F) === 0 && ((1 << (_la - 198)) & 4294934527) !== 0) || ((((_la - 230)) & ~0x1F) === 0 && ((1 << (_la - 230)) & 1031800543) !== 0) || ((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & 266320383) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 2081226881) !== 0)) {
					{
					this.state = 1624;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 190, this._ctx) ) {
					case 1:
						{
						this.state = 1623;
						this.setQuantifier();
						}
						break;
					}
					this.state = 1626;
					this.expression();
					this.state = 1631;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===305) {
						{
						{
						this.state = 1627;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1628;
						this.expression();
						}
						}
						this.state = 1633;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1636;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 12:
				{
				localctx = new ColumnReferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1638;
				this.identifier();
				}
				break;
			case 13:
				{
				localctx = new DereferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1639;
				this.dereferenceDefinition();
				}
				break;
			case 14:
				{
				localctx = new ParenthesizedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1640;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1641;
				this.expression();
				this.state = 1642;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1653;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 194, this._ctx);
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
					this.state = 1646;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 1647;
					this.match(FlinkSqlParser.LS_BRACKET);
					this.state = 1648;
					(localctx as SubscriptContext)._index = this.valueExpression(0);
					this.state = 1649;
					this.match(FlinkSqlParser.RS_BRACKET);
					}
					}
				}
				this.state = 1655;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 194, this._ctx);
			}
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 218, FlinkSqlParser.RULE_functionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1656;
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
		this.enterRule(localctx, 220, FlinkSqlParser.RULE_dereferenceDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1658;
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
		this.enterRule(localctx, 222, FlinkSqlParser.RULE_correlationName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1660;
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
		this.enterRule(localctx, 224, FlinkSqlParser.RULE_qualifiedName);
		try {
			this.state = 1664;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1662;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1663;
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
		this.enterRule(localctx, 226, FlinkSqlParser.RULE_interval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1666;
			this.match(FlinkSqlParser.INTERVAL);
			this.state = 1669;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
			case 1:
				{
				this.state = 1667;
				this.errorCapturingMultiUnitsInterval();
				}
				break;
			case 2:
				{
				this.state = 1668;
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
		this.enterRule(localctx, 228, FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1671;
			this.multiUnitsInterval();
			this.state = 1673;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				{
				this.state = 1672;
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
		this.enterRule(localctx, 230, FlinkSqlParser.RULE_multiUnitsInterval);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1678;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1675;
					this.intervalValue();
					this.state = 1676;
					this.identifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1680;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 198, this._ctx);
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
		this.enterRule(localctx, 232, FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1682;
			localctx._body = this.unitToUnitInterval();
			this.state = 1685;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				{
				this.state = 1683;
				localctx._error1 = this.multiUnitsInterval();
				}
				break;
			case 2:
				{
				this.state = 1684;
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
		this.enterRule(localctx, 234, FlinkSqlParser.RULE_unitToUnitInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1687;
			localctx._value = this.intervalValue();
			this.state = 1688;
			localctx._from_ = this.identifier();
			this.state = 1689;
			this.match(FlinkSqlParser.TO);
			this.state = 1690;
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
		this.enterRule(localctx, 236, FlinkSqlParser.RULE_intervalValue);
		let _la: number;
		try {
			this.state = 1697;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 314:
			case 315:
			case 323:
			case 324:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1693;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===314 || _la===315) {
					{
					this.state = 1692;
					_la = this._input.LA(1);
					if(!(_la===314 || _la===315)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 1695;
				_la = this._input.LA(1);
				if(!(_la===323 || _la===324)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 322:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1696;
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
		this.enterRule(localctx, 238, FlinkSqlParser.RULE_columnAlias);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1700;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				{
				this.state = 1699;
				this.match(FlinkSqlParser.AS);
				}
				break;
			}
			this.state = 1702;
			this.strictIdentifier();
			this.state = 1704;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===303) {
				{
				this.state = 1703;
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
		this.enterRule(localctx, 240, FlinkSqlParser.RULE_tableAlias);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1707;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 204, this._ctx) ) {
			case 1:
				{
				this.state = 1706;
				this.match(FlinkSqlParser.AS);
				}
				break;
			}
			this.state = 1709;
			this.strictIdentifier();
			this.state = 1711;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				{
				this.state = 1710;
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
		this.enterRule(localctx, 242, FlinkSqlParser.RULE_errorCapturingIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1713;
			this.identifier();
			this.state = 1714;
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
		this.enterRule(localctx, 244, FlinkSqlParser.RULE_errorCapturingIdentifierExtra);
		let _la: number;
		try {
			this.state = 1723;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 131:
				localctx = new ErrorIdentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1718;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1716;
					this.match(FlinkSqlParser.MINUS);
					this.state = 1717;
					this.identifier();
					}
					}
					this.state = 1720;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===131);
				}
				break;
			case 7:
			case 303:
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
		this.enterRule(localctx, 246, FlinkSqlParser.RULE_identifierList);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1725;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1726;
			this.identifierSeq();
			this.state = 1727;
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
		this.enterRule(localctx, 248, FlinkSqlParser.RULE_identifierSeq);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1729;
			this.identifier();
			this.state = 1734;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 1730;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1731;
				this.identifier();
				}
				}
				this.state = 1736;
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
		this.enterRule(localctx, 250, FlinkSqlParser.RULE_identifier);
		try {
			this.state = 1739;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1737;
				this.strictIdentifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1738;
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
		this.enterRule(localctx, 252, FlinkSqlParser.RULE_strictIdentifier);
		try {
			this.state = 1745;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 210, this._ctx) ) {
			case 1:
				localctx = new UnquotedIdentifierAlternativeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1741;
				this.unquotedIdentifier();
				}
				break;
			case 2:
				localctx = new QuotedIdentifierAlternativeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1742;
				this.quotedIdentifier();
				}
				break;
			case 3:
				localctx = new AnsiNonReservedKeywordsContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1743;
				this.ansiNonReserved();
				}
				break;
			case 4:
				localctx = new NonReservedKeywordsContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1744;
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
		this.enterRule(localctx, 254, FlinkSqlParser.RULE_unquotedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1747;
			_la = this._input.LA(1);
			if(!(_la===323 || _la===326)) {
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
		this.enterRule(localctx, 256, FlinkSqlParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1749;
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
		this.enterRule(localctx, 258, FlinkSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1751;
			this.match(FlinkSqlParser.WHEN);
			this.state = 1752;
			localctx._condition = this.expression();
			this.state = 1753;
			this.match(FlinkSqlParser.THEN);
			this.state = 1754;
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
		this.enterRule(localctx, 260, FlinkSqlParser.RULE_uidList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1756;
			this.uid();
			this.state = 1761;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 1757;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1758;
				this.uid();
				}
				}
				this.state = 1763;
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
		this.enterRule(localctx, 262, FlinkSqlParser.RULE_uid);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1764;
			this.match(FlinkSqlParser.ID_LITERAL);
			this.state = 1768;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 212, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1765;
					this.match(FlinkSqlParser.DOT_ID);
					}
					}
				}
				this.state = 1770;
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
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public plusUid(): PlusUidContext {
		let localctx: PlusUidContext = new PlusUidContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, FlinkSqlParser.RULE_plusUid);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1771;
			_la = this._input.LA(1);
			if(!(_la===326 || _la===327)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1775;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 213, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1772;
					_la = this._input.LA(1);
					if(!(_la===320 || _la===321)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
				}
				this.state = 1777;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 213, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 266, FlinkSqlParser.RULE_withOption);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1778;
			this.match(FlinkSqlParser.WITH);
			this.state = 1779;
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
		this.enterRule(localctx, 268, FlinkSqlParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1781;
			this.match(FlinkSqlParser.IF);
			this.state = 1782;
			this.match(FlinkSqlParser.NOT);
			this.state = 1783;
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
		this.enterRule(localctx, 270, FlinkSqlParser.RULE_ifExists);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1785;
			this.match(FlinkSqlParser.IF);
			this.state = 1786;
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
		this.enterRule(localctx, 272, FlinkSqlParser.RULE_tablePropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1788;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1789;
			this.tableProperty();
			this.state = 1794;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 1790;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1791;
				this.tableProperty();
				}
				}
				this.state = 1796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1797;
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
		this.enterRule(localctx, 274, FlinkSqlParser.RULE_tableProperty);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1799;
			localctx._key = this.tablePropertyKey();
			this.state = 1804;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32 || _la===33 || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 3221225473) !== 0) || _la===324) {
				{
				this.state = 1801;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===292) {
					{
					this.state = 1800;
					this.match(FlinkSqlParser.EQUAL_SYMBOL);
					}
				}

				this.state = 1803;
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
		this.enterRule(localctx, 276, FlinkSqlParser.RULE_tablePropertyKey);
		try {
			this.state = 1809;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1806;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1807;
				this.dereferenceDefinition();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1808;
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
		this.enterRule(localctx, 278, FlinkSqlParser.RULE_tablePropertyValue);
		try {
			this.state = 1815;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 323:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1811;
				this.match(FlinkSqlParser.DIG_LITERAL);
				}
				break;
			case 324:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1812;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case 32:
			case 33:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1813;
				this.booleanLiteral();
				}
				break;
			case 322:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1814;
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
		this.enterRule(localctx, 280, FlinkSqlParser.RULE_logicalOperator);
		try {
			this.state = 1823;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 23:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1817;
				this.match(FlinkSqlParser.AND);
				}
				break;
			case 298:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1818;
				this.match(FlinkSqlParser.BIT_AND_OP);
				this.state = 1819;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1820;
				this.match(FlinkSqlParser.OR);
				}
				break;
			case 297:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1821;
				this.match(FlinkSqlParser.BIT_OR_OP);
				this.state = 1822;
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
		this.enterRule(localctx, 282, FlinkSqlParser.RULE_comparisonOperator);
		try {
			this.state = 1839;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 220, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1825;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1826;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1827;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1828;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 1829;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1830;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 1831;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1832;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 1833;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1834;
				this.match(FlinkSqlParser.EXCLAMATION_SYMBOL);
				this.state = 1835;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1836;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 1837;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				this.state = 1838;
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
		this.enterRule(localctx, 284, FlinkSqlParser.RULE_bitOperator);
		try {
			this.state = 1848;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 294:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1841;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 1842;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;
			case 293:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1843;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 1844;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 298:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1845;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case 299:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1846;
				this.match(FlinkSqlParser.BIT_XOR_OP);
				}
				break;
			case 297:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1847;
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
		this.enterRule(localctx, 286, FlinkSqlParser.RULE_mathOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1850;
			_la = this._input.LA(1);
			if(!(_la===132 || ((((_la - 312)) & ~0x1F) === 0 && ((1 << (_la - 312)) & 221) !== 0))) {
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
		this.enterRule(localctx, 288, FlinkSqlParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1852;
			_la = this._input.LA(1);
			if(!(_la===25 || ((((_la - 295)) & ~0x1F) === 0 && ((1 << (_la - 295)) & 1572867) !== 0))) {
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
		this.enterRule(localctx, 290, FlinkSqlParser.RULE_fullColumnName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1854;
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
		this.enterRule(localctx, 292, FlinkSqlParser.RULE_constant);
		let _la: number;
		try {
			this.state = 1868;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 322:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1856;
				this.stringLiteral();
				}
				break;
			case 323:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1857;
				this.decimalLiteral();
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1858;
				this.interval();
				}
				break;
			case 314:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1859;
				this.match(FlinkSqlParser.HYPNEN_SIGN);
				this.state = 1860;
				this.decimalLiteral();
				}
				break;
			case 32:
			case 33:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1861;
				this.booleanLiteral();
				}
				break;
			case 324:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1862;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case 325:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1863;
				this.match(FlinkSqlParser.BIT_STRING);
				}
				break;
			case 25:
			case 290:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1865;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1864;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1867;
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
		this.enterRule(localctx, 294, FlinkSqlParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1870;
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
		this.enterRule(localctx, 296, FlinkSqlParser.RULE_decimalLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1872;
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
		this.enterRule(localctx, 298, FlinkSqlParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1874;
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
		this.enterRule(localctx, 300, FlinkSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1876;
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
		this.enterRule(localctx, 302, FlinkSqlParser.RULE_ansiNonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1878;
			_la = this._input.LA(1);
			if(!(((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 1978716033) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4294709249) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 3418108729) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 4280287177) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 4294967167) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 4294836223) !== 0) || ((((_la - 200)) & ~0x1F) === 0 && ((1 << (_la - 200)) & 4294959087) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & 241172919) !== 0) || ((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & 266320383) !== 0))) {
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
		this.enterRule(localctx, 304, FlinkSqlParser.RULE_strictNonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1880;
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
		this.enterRule(localctx, 306, FlinkSqlParser.RULE_nonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1882;
			_la = this._input.LA(1);
			if(!(((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 4294967295) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 4294052223) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 4291015671) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 4294967175) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & 4294966783) !== 0) || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & 4294965247) !== 0) || ((((_la - 198)) & ~0x1F) === 0 && ((1 << (_la - 198)) & 4261380095) !== 0) || ((((_la - 230)) & ~0x1F) === 0 && ((1 << (_la - 230)) & 1031800543) !== 0) || ((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & 266320383) !== 0))) {
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
		case 75:
			return this.queryStatement_sempred(localctx as QueryStatementContext, predIndex);
		case 83:
			return this.tableExpression_sempred(localctx as TableExpressionContext, predIndex);
		case 104:
			return this.booleanExpression_sempred(localctx as BooleanExpressionContext, predIndex);
		case 107:
			return this.valueExpression_sempred(localctx as ValueExpressionContext, predIndex);
		case 108:
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
			return this.precpred(this._ctx, 1);
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

	public static readonly _serializedATN: number[] = [4,1,328,1885,2,0,7,0,
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
	7,151,2,152,7,152,2,153,7,153,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,3,2,317,8,
	2,1,2,5,2,320,8,2,10,2,12,2,323,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,3,3,337,8,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
	1,5,1,5,1,5,1,5,3,5,355,8,5,1,6,1,6,3,6,359,8,6,1,7,1,7,1,7,1,8,1,8,1,8,
	1,8,3,8,368,8,8,1,8,1,8,1,8,3,8,373,8,8,1,9,1,9,1,9,5,9,378,8,9,10,9,12,
	9,381,9,9,1,10,1,10,1,11,1,11,3,11,387,8,11,1,11,1,11,3,11,391,8,11,1,12,
	1,12,1,12,1,12,1,12,5,12,398,8,12,10,12,12,12,401,9,12,1,13,1,13,1,13,1,
	13,1,13,1,13,1,13,1,13,1,13,3,13,412,8,13,1,13,3,13,415,8,13,1,13,1,13,
	1,13,1,13,1,13,3,13,422,8,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,430,8,13,
	1,13,1,13,1,13,3,13,435,8,13,1,13,3,13,438,8,13,1,14,1,14,1,14,1,14,1,14,
	3,14,445,8,14,1,15,1,15,1,15,1,15,1,16,1,16,3,16,453,8,16,1,17,1,17,3,17,
	457,8,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,3,19,469,8,19,
	1,19,1,19,1,19,1,19,1,19,1,19,3,19,477,8,19,1,19,1,19,3,19,481,8,19,1,19,
	1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
	19,1,19,1,19,1,19,3,19,502,8,19,1,20,1,20,3,20,506,8,20,1,21,1,21,3,21,
	510,8,21,1,21,1,21,3,21,514,8,21,1,21,1,21,1,21,1,21,1,21,5,21,521,8,21,
	10,21,12,21,524,9,21,1,21,1,21,3,21,528,8,21,1,21,1,21,3,21,532,8,21,1,
	21,1,21,3,21,536,8,21,1,21,1,21,3,21,540,8,21,1,21,3,21,543,8,21,1,21,1,
	21,3,21,547,8,21,1,22,1,22,1,22,3,22,552,8,22,1,22,1,22,1,22,1,22,3,22,
	558,8,22,1,23,1,23,1,23,3,23,563,8,23,1,24,1,24,1,24,3,24,568,8,24,1,24,
	3,24,571,8,24,1,25,1,25,3,25,575,8,25,1,26,1,26,1,26,1,26,5,26,581,8,26,
	10,26,12,26,584,9,26,1,26,1,26,1,27,1,27,1,27,3,27,591,8,27,1,27,1,27,3,
	27,595,8,27,1,27,1,27,3,27,599,8,27,1,27,1,27,3,27,603,8,27,1,27,1,27,3,
	27,607,8,27,1,27,1,27,3,27,611,8,27,1,27,1,27,3,27,615,8,27,1,27,1,27,3,
	27,619,8,27,1,27,1,27,3,27,623,8,27,3,27,625,8,27,1,28,1,28,1,28,1,28,1,
	29,1,29,1,29,1,29,3,29,635,8,29,1,29,1,29,1,30,1,30,1,30,1,30,3,30,643,
	8,30,1,30,1,30,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
	33,1,33,1,33,1,33,1,33,1,33,1,33,5,33,665,8,33,10,33,12,33,668,9,33,1,33,
	1,33,1,34,1,34,3,34,674,8,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,
	36,1,36,1,36,1,36,1,36,3,36,689,8,36,1,36,3,36,692,8,36,1,37,1,37,1,38,
	1,38,1,38,1,38,3,38,700,8,38,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,
	41,1,41,3,41,712,8,41,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,43,1,43,
	1,43,1,43,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,5,45,734,8,45,10,45,12,
	45,737,9,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,5,46,747,8,46,10,46,
	12,46,750,9,46,1,46,1,46,3,46,754,8,46,1,47,1,47,3,47,758,8,47,1,48,1,48,
	1,48,1,48,5,48,764,8,48,10,48,12,48,767,9,48,1,48,3,48,770,8,48,1,49,1,
	49,1,50,1,50,1,50,1,50,3,50,778,8,50,1,51,1,51,1,51,1,51,1,51,1,52,1,52,
	1,52,3,52,788,8,52,1,52,1,52,3,52,792,8,52,1,52,1,52,1,53,1,53,3,53,798,
	8,53,1,53,1,53,3,53,802,8,53,1,53,1,53,3,53,806,8,53,1,53,3,53,809,8,53,
	1,53,1,53,1,53,1,54,1,54,1,54,1,54,3,54,818,8,54,1,54,1,54,3,54,822,8,54,
	1,54,1,54,1,54,1,54,1,54,3,54,829,8,54,1,54,3,54,832,8,54,1,55,1,55,1,55,
	1,55,1,55,1,55,5,55,840,8,55,10,55,12,55,843,9,55,1,56,1,56,1,57,1,57,1,
	57,1,57,1,57,3,57,852,8,57,1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,60,1,60,
	1,60,1,60,1,60,1,60,3,60,867,8,60,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,
	62,1,62,3,62,878,8,62,1,62,1,62,3,62,882,8,62,1,62,1,62,1,62,1,62,1,62,
	3,62,889,8,62,1,63,1,63,1,63,3,63,894,8,63,1,63,1,63,1,64,1,64,3,64,900,
	8,64,1,64,1,64,3,64,904,8,64,1,64,1,64,1,65,1,65,1,65,3,65,911,8,65,1,65,
	1,65,3,65,915,8,65,1,66,1,66,3,66,919,8,66,1,66,1,66,3,66,923,8,66,1,66,
	1,66,1,67,1,67,1,67,1,67,3,67,931,8,67,1,67,1,67,3,67,935,8,67,1,67,1,67,
	1,68,3,68,940,8,68,1,68,1,68,1,68,1,68,3,68,946,8,68,1,69,1,69,1,69,1,69,
	3,69,952,8,69,1,69,3,69,955,8,69,1,69,1,69,3,69,959,8,69,1,70,1,70,1,70,
	1,71,1,71,1,71,1,71,5,71,968,8,71,10,71,12,71,971,9,71,1,72,1,72,1,72,1,
	72,5,72,977,8,72,10,72,12,72,980,9,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,
	1,73,1,73,4,73,991,8,73,11,73,12,73,992,1,73,1,73,1,74,1,74,1,74,1,74,1,
	74,1,74,4,74,1003,8,74,11,74,12,74,1004,1,74,1,74,1,75,1,75,1,75,1,75,1,
	75,1,75,5,75,1015,8,75,10,75,12,75,1018,9,75,1,75,1,75,1,75,1,75,1,75,1,
	75,1,75,1,75,3,75,1028,8,75,1,75,3,75,1031,8,75,1,75,1,75,3,75,1035,8,75,
	1,75,3,75,1038,8,75,3,75,1040,8,75,1,75,1,75,1,75,3,75,1045,8,75,1,75,1,
	75,3,75,1049,8,75,1,75,3,75,1052,8,75,5,75,1054,8,75,10,75,12,75,1057,9,
	75,1,76,1,76,1,76,1,76,5,76,1063,8,76,10,76,12,76,1066,9,76,1,77,1,77,1,
	77,1,77,1,77,5,77,1073,8,77,10,77,12,77,1076,9,77,1,77,1,77,3,77,1080,8,
	77,1,77,1,77,1,77,1,77,1,77,1,78,1,78,1,79,1,79,1,79,3,79,1092,8,79,1,79,
	3,79,1095,8,79,1,79,3,79,1098,8,79,1,79,3,79,1101,8,79,1,80,1,80,3,80,1105,
	8,80,1,80,1,80,1,80,1,80,5,80,1111,8,80,10,80,12,80,1114,9,80,3,80,1116,
	8,80,1,81,1,81,3,81,1120,8,81,1,81,3,81,1123,8,81,1,82,1,82,1,82,1,83,1,
	83,1,83,1,83,5,83,1132,8,83,10,83,12,83,1135,9,83,1,83,1,83,1,83,1,83,1,
	83,1,83,3,83,1143,8,83,1,83,3,83,1146,8,83,1,83,3,83,1149,8,83,1,83,1,83,
	1,83,3,83,1154,8,83,5,83,1156,8,83,10,83,12,83,1159,9,83,1,84,1,84,3,84,
	1163,8,84,1,85,3,85,1166,8,85,1,85,1,85,3,85,1170,8,85,1,85,3,85,1173,8,
	85,1,85,3,85,1176,8,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,5,85,1186,
	8,85,10,85,12,85,1189,9,85,1,85,1,85,1,85,1,85,3,85,1195,8,85,1,85,1,85,
	1,85,1,85,1,85,1,85,1,85,1,85,1,85,3,85,1206,8,85,1,86,1,86,1,87,1,87,1,
	87,1,87,1,87,1,87,1,88,1,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,5,89,1225,
	8,89,10,89,12,89,1228,9,89,1,89,1,89,3,89,1232,8,89,1,90,1,90,1,90,1,91,
	1,91,1,91,1,91,1,91,5,91,1242,8,91,10,91,12,91,1245,9,91,1,92,1,92,1,92,
	1,92,1,92,1,92,1,92,5,92,1254,8,92,10,92,12,92,1257,9,92,1,92,1,92,1,92,
	1,92,1,92,1,92,1,92,5,92,1266,8,92,10,92,12,92,1269,9,92,1,92,1,92,1,92,
	1,92,1,92,1,92,1,92,5,92,1278,8,92,10,92,12,92,1281,9,92,1,92,1,92,1,92,
	1,92,1,92,1,92,1,92,1,92,5,92,1291,8,92,10,92,12,92,1294,9,92,1,92,1,92,
	3,92,1298,8,92,1,93,1,93,1,93,1,94,1,94,1,94,1,94,1,94,5,94,1308,8,94,10,
	94,12,94,1311,9,94,1,95,1,95,3,95,1315,8,95,1,96,1,96,1,96,3,96,1320,8,
	96,1,97,1,97,1,97,1,97,5,97,1326,8,97,10,97,12,97,1329,9,97,1,98,1,98,1,
	98,1,98,1,99,3,99,1336,8,99,1,99,1,99,1,99,1,99,1,99,1,99,5,99,1344,8,99,
	10,99,12,99,1347,9,99,3,99,1349,8,99,1,99,1,99,1,99,1,99,1,99,5,99,1356,
	8,99,10,99,12,99,1359,9,99,3,99,1361,8,99,1,99,3,99,1364,8,99,1,99,1,99,
	1,100,1,100,3,100,1370,8,100,1,100,1,100,3,100,1374,8,100,1,101,1,101,1,
	101,1,101,3,101,1380,8,101,1,102,1,102,1,102,1,103,1,103,1,104,1,104,1,
	104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,3,104,1397,8,104,3,104,1399,
	8,104,1,104,1,104,1,104,1,104,1,104,1,104,5,104,1407,8,104,10,104,12,104,
	1410,9,104,1,105,3,105,1413,8,105,1,105,1,105,1,105,1,105,1,105,1,105,3,
	105,1421,8,105,1,105,1,105,1,105,1,105,1,105,5,105,1428,8,105,10,105,12,
	105,1431,9,105,1,105,1,105,1,105,3,105,1436,8,105,1,105,1,105,1,105,1,105,
	1,105,1,105,1,105,1,105,1,105,1,105,1,105,3,105,1449,8,105,1,105,1,105,
	1,105,3,105,1454,8,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,
	5,105,1464,8,105,10,105,12,105,1467,9,105,1,105,1,105,3,105,1471,8,105,
	1,105,3,105,1474,8,105,1,105,1,105,1,105,1,105,3,105,1480,8,105,1,105,1,
	105,1,105,3,105,1485,8,105,1,105,1,105,1,105,3,105,1490,8,105,1,105,1,105,
	1,105,3,105,1495,8,105,1,106,3,106,1498,8,106,1,106,1,106,1,106,1,106,1,
	106,1,106,1,106,1,106,5,106,1508,8,106,10,106,12,106,1511,9,106,1,106,1,
	106,3,106,1515,8,106,1,106,3,106,1518,8,106,1,106,1,106,3,106,1522,8,106,
	1,107,1,107,1,107,1,107,3,107,1528,8,107,1,107,1,107,1,107,1,107,1,107,
	1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,
	1,107,1,107,5,107,1549,8,107,10,107,12,107,1552,9,107,1,108,1,108,1,108,
	4,108,1557,8,108,11,108,12,108,1558,1,108,1,108,3,108,1563,8,108,1,108,
	1,108,1,108,1,108,1,108,4,108,1570,8,108,11,108,12,108,1571,1,108,1,108,
	3,108,1576,8,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
	1,108,1,108,1,108,1,108,1,108,3,108,1592,8,108,1,108,1,108,1,108,1,108,
	1,108,1,108,1,108,3,108,1601,8,108,1,108,1,108,1,108,1,108,1,108,1,108,
	1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
	1,108,1,108,1,108,1,108,3,108,1625,8,108,1,108,1,108,1,108,5,108,1630,8,
	108,10,108,12,108,1633,9,108,3,108,1635,8,108,1,108,1,108,1,108,1,108,1,
	108,1,108,1,108,1,108,3,108,1645,8,108,1,108,1,108,1,108,1,108,1,108,5,
	108,1652,8,108,10,108,12,108,1655,9,108,1,109,1,109,1,110,1,110,1,111,1,
	111,1,112,1,112,3,112,1665,8,112,1,113,1,113,1,113,3,113,1670,8,113,1,114,
	1,114,3,114,1674,8,114,1,115,1,115,1,115,4,115,1679,8,115,11,115,12,115,
	1680,1,116,1,116,1,116,3,116,1686,8,116,1,117,1,117,1,117,1,117,1,117,1,
	118,3,118,1694,8,118,1,118,1,118,3,118,1698,8,118,1,119,3,119,1701,8,119,
	1,119,1,119,3,119,1705,8,119,1,120,3,120,1708,8,120,1,120,1,120,3,120,1712,
	8,120,1,121,1,121,1,121,1,122,1,122,4,122,1719,8,122,11,122,12,122,1720,
	1,122,3,122,1724,8,122,1,123,1,123,1,123,1,123,1,124,1,124,1,124,5,124,
	1733,8,124,10,124,12,124,1736,9,124,1,125,1,125,3,125,1740,8,125,1,126,
	1,126,1,126,1,126,3,126,1746,8,126,1,127,1,127,1,128,1,128,1,129,1,129,
	1,129,1,129,1,129,1,130,1,130,1,130,5,130,1760,8,130,10,130,12,130,1763,
	9,130,1,131,1,131,5,131,1767,8,131,10,131,12,131,1770,9,131,1,132,1,132,
	5,132,1774,8,132,10,132,12,132,1777,9,132,1,133,1,133,1,133,1,134,1,134,
	1,134,1,134,1,135,1,135,1,135,1,136,1,136,1,136,1,136,5,136,1793,8,136,
	10,136,12,136,1796,9,136,1,136,1,136,1,137,1,137,3,137,1802,8,137,1,137,
	3,137,1805,8,137,1,138,1,138,1,138,3,138,1810,8,138,1,139,1,139,1,139,1,
	139,3,139,1816,8,139,1,140,1,140,1,140,1,140,1,140,1,140,3,140,1824,8,140,
	1,141,1,141,1,141,1,141,1,141,1,141,1,141,1,141,1,141,1,141,1,141,1,141,
	1,141,1,141,3,141,1840,8,141,1,142,1,142,1,142,1,142,1,142,1,142,1,142,
	3,142,1849,8,142,1,143,1,143,1,144,1,144,1,145,1,145,1,146,1,146,1,146,
	1,146,1,146,1,146,1,146,1,146,1,146,3,146,1866,8,146,1,146,3,146,1869,8,
	146,1,147,1,147,1,148,1,148,1,149,1,149,1,150,1,150,1,151,1,151,1,152,1,
	152,1,153,1,153,1,153,2,1768,1775,5,150,166,208,214,216,154,0,2,4,6,8,10,
	12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
	60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,
	106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,
	142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,
	178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,
	214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,
	250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,284,
	286,288,290,292,294,296,298,300,302,304,306,0,40,2,0,36,36,84,84,1,0,87,
	89,2,0,193,193,253,255,2,0,192,192,239,239,2,0,5,5,24,24,2,0,74,74,76,76,
	2,0,6,6,82,82,1,0,246,250,3,0,282,282,287,287,290,290,6,0,264,264,267,271,
	275,279,283,283,285,285,291,291,1,0,70,71,2,0,272,274,280,281,2,0,265,265,
	286,286,1,0,233,234,3,0,8,8,102,102,236,236,1,0,233,235,2,0,167,167,237,
	238,1,0,241,243,2,0,184,184,186,186,2,0,83,83,140,140,2,0,105,106,108,108,
	2,0,48,49,51,52,1,0,35,36,2,0,67,67,69,69,1,0,8,9,1,0,32,33,2,0,296,296,
	314,315,4,0,132,132,312,312,316,316,319,319,2,0,314,315,317,317,1,0,314,
	315,1,0,323,324,2,0,323,323,326,326,1,0,326,327,1,0,320,321,4,0,132,132,
	312,312,314,316,318,319,3,0,25,25,295,296,314,315,2,0,8,8,10,10,32,0,6,
	6,13,17,20,21,26,30,32,32,34,36,38,38,50,50,56,69,72,72,75,77,80,81,84,
	85,90,93,95,97,99,99,102,104,107,107,110,124,128,142,144,184,186,203,205,
	212,214,234,236,237,239,240,253,254,257,259,264,272,275,277,279,284,286,
	291,6,0,45,46,48,52,54,55,105,108,143,143,223,223,23,0,4,42,44,44,47,47,
	53,53,56,70,72,77,80,81,83,85,90,99,102,104,109,142,144,176,178,212,214,
	222,224,234,236,237,239,240,253,254,256,259,264,272,275,277,279,284,286,
	291,2055,0,308,1,0,0,0,2,311,1,0,0,0,4,321,1,0,0,0,6,336,1,0,0,0,8,338,
	1,0,0,0,10,354,1,0,0,0,12,358,1,0,0,0,14,360,1,0,0,0,16,363,1,0,0,0,18,
	374,1,0,0,0,20,382,1,0,0,0,22,390,1,0,0,0,24,392,1,0,0,0,26,437,1,0,0,0,
	28,439,1,0,0,0,30,446,1,0,0,0,32,450,1,0,0,0,34,454,1,0,0,0,36,458,1,0,
	0,0,38,501,1,0,0,0,40,505,1,0,0,0,42,507,1,0,0,0,44,548,1,0,0,0,46,562,
	1,0,0,0,48,564,1,0,0,0,50,574,1,0,0,0,52,576,1,0,0,0,54,624,1,0,0,0,56,
	626,1,0,0,0,58,630,1,0,0,0,60,638,1,0,0,0,62,646,1,0,0,0,64,650,1,0,0,0,
	66,657,1,0,0,0,68,673,1,0,0,0,70,680,1,0,0,0,72,683,1,0,0,0,74,693,1,0,
	0,0,76,695,1,0,0,0,78,701,1,0,0,0,80,703,1,0,0,0,82,711,1,0,0,0,84,719,
	1,0,0,0,86,721,1,0,0,0,88,725,1,0,0,0,90,729,1,0,0,0,92,753,1,0,0,0,94,
	757,1,0,0,0,96,759,1,0,0,0,98,771,1,0,0,0,100,777,1,0,0,0,102,779,1,0,0,
	0,104,784,1,0,0,0,106,795,1,0,0,0,108,813,1,0,0,0,110,833,1,0,0,0,112,844,
	1,0,0,0,114,846,1,0,0,0,116,853,1,0,0,0,118,857,1,0,0,0,120,860,1,0,0,0,
	122,868,1,0,0,0,124,873,1,0,0,0,126,890,1,0,0,0,128,897,1,0,0,0,130,907,
	1,0,0,0,132,916,1,0,0,0,134,926,1,0,0,0,136,945,1,0,0,0,138,947,1,0,0,0,
	140,960,1,0,0,0,142,963,1,0,0,0,144,972,1,0,0,0,146,983,1,0,0,0,148,996,
	1,0,0,0,150,1039,1,0,0,0,152,1058,1,0,0,0,154,1067,1,0,0,0,156,1086,1,0,
	0,0,158,1088,1,0,0,0,160,1102,1,0,0,0,162,1117,1,0,0,0,164,1124,1,0,0,0,
	166,1127,1,0,0,0,168,1160,1,0,0,0,170,1205,1,0,0,0,172,1207,1,0,0,0,174,
	1209,1,0,0,0,176,1215,1,0,0,0,178,1231,1,0,0,0,180,1233,1,0,0,0,182,1236,
	1,0,0,0,184,1297,1,0,0,0,186,1299,1,0,0,0,188,1302,1,0,0,0,190,1312,1,0,
	0,0,192,1316,1,0,0,0,194,1321,1,0,0,0,196,1330,1,0,0,0,198,1335,1,0,0,0,
	200,1367,1,0,0,0,202,1379,1,0,0,0,204,1381,1,0,0,0,206,1384,1,0,0,0,208,
	1398,1,0,0,0,210,1494,1,0,0,0,212,1521,1,0,0,0,214,1527,1,0,0,0,216,1644,
	1,0,0,0,218,1656,1,0,0,0,220,1658,1,0,0,0,222,1660,1,0,0,0,224,1664,1,0,
	0,0,226,1666,1,0,0,0,228,1671,1,0,0,0,230,1678,1,0,0,0,232,1682,1,0,0,0,
	234,1687,1,0,0,0,236,1697,1,0,0,0,238,1700,1,0,0,0,240,1707,1,0,0,0,242,
	1713,1,0,0,0,244,1723,1,0,0,0,246,1725,1,0,0,0,248,1729,1,0,0,0,250,1739,
	1,0,0,0,252,1745,1,0,0,0,254,1747,1,0,0,0,256,1749,1,0,0,0,258,1751,1,0,
	0,0,260,1756,1,0,0,0,262,1764,1,0,0,0,264,1771,1,0,0,0,266,1778,1,0,0,0,
	268,1781,1,0,0,0,270,1785,1,0,0,0,272,1788,1,0,0,0,274,1799,1,0,0,0,276,
	1809,1,0,0,0,278,1815,1,0,0,0,280,1823,1,0,0,0,282,1839,1,0,0,0,284,1848,
	1,0,0,0,286,1850,1,0,0,0,288,1852,1,0,0,0,290,1854,1,0,0,0,292,1868,1,0,
	0,0,294,1870,1,0,0,0,296,1872,1,0,0,0,298,1874,1,0,0,0,300,1876,1,0,0,0,
	302,1878,1,0,0,0,304,1880,1,0,0,0,306,1882,1,0,0,0,308,309,3,2,1,0,309,
	310,5,0,0,1,310,1,1,0,0,0,311,312,3,4,2,0,312,313,5,0,0,1,313,3,1,0,0,0,
	314,316,3,6,3,0,315,317,5,306,0,0,316,315,1,0,0,0,316,317,1,0,0,0,317,320,
	1,0,0,0,318,320,3,8,4,0,319,314,1,0,0,0,319,318,1,0,0,0,320,323,1,0,0,0,
	321,319,1,0,0,0,321,322,1,0,0,0,322,5,1,0,0,0,323,321,1,0,0,0,324,337,3,
	10,5,0,325,337,3,12,6,0,326,337,3,14,7,0,327,337,3,16,8,0,328,337,3,22,
	11,0,329,337,3,26,13,0,330,337,3,28,14,0,331,337,3,30,15,0,332,337,3,32,
	16,0,333,337,3,34,17,0,334,337,3,36,18,0,335,337,3,38,19,0,336,324,1,0,
	0,0,336,325,1,0,0,0,336,326,1,0,0,0,336,327,1,0,0,0,336,328,1,0,0,0,336,
	329,1,0,0,0,336,330,1,0,0,0,336,331,1,0,0,0,336,332,1,0,0,0,336,333,1,0,
	0,0,336,334,1,0,0,0,336,335,1,0,0,0,337,7,1,0,0,0,338,339,5,306,0,0,339,
	9,1,0,0,0,340,355,3,40,20,0,341,355,3,104,52,0,342,355,3,106,53,0,343,355,
	3,108,54,0,344,355,3,102,51,0,345,355,3,114,57,0,346,355,3,120,60,0,347,
	355,3,122,61,0,348,355,3,124,62,0,349,355,3,126,63,0,350,355,3,128,64,0,
	351,355,3,130,65,0,352,355,3,132,66,0,353,355,3,134,67,0,354,340,1,0,0,
	0,354,341,1,0,0,0,354,342,1,0,0,0,354,343,1,0,0,0,354,344,1,0,0,0,354,345,
	1,0,0,0,354,346,1,0,0,0,354,347,1,0,0,0,354,348,1,0,0,0,354,349,1,0,0,0,
	354,350,1,0,0,0,354,351,1,0,0,0,354,352,1,0,0,0,354,353,1,0,0,0,355,11,
	1,0,0,0,356,359,3,150,75,0,357,359,3,136,68,0,358,356,1,0,0,0,358,357,1,
	0,0,0,359,13,1,0,0,0,360,361,7,0,0,0,361,362,3,262,131,0,362,15,1,0,0,0,
	363,367,5,85,0,0,364,368,3,18,9,0,365,366,5,86,0,0,366,368,5,37,0,0,367,
	364,1,0,0,0,367,365,1,0,0,0,367,368,1,0,0,0,368,372,1,0,0,0,369,373,3,12,
	6,0,370,373,3,138,69,0,371,373,3,148,74,0,372,369,1,0,0,0,372,370,1,0,0,
	0,372,371,1,0,0,0,373,17,1,0,0,0,374,379,3,20,10,0,375,376,5,305,0,0,376,
	378,3,20,10,0,377,375,1,0,0,0,378,381,1,0,0,0,379,377,1,0,0,0,379,380,1,
	0,0,0,380,19,1,0,0,0,381,379,1,0,0,0,382,383,7,1,0,0,383,21,1,0,0,0,384,
	386,5,99,0,0,385,387,5,239,0,0,386,385,1,0,0,0,386,387,1,0,0,0,387,388,
	1,0,0,0,388,391,3,262,131,0,389,391,3,24,12,0,390,384,1,0,0,0,390,389,1,
	0,0,0,391,23,1,0,0,0,392,393,5,99,0,0,393,394,5,101,0,0,394,399,3,262,131,
	0,395,396,5,305,0,0,396,398,3,262,131,0,397,395,1,0,0,0,398,401,1,0,0,0,
	399,397,1,0,0,0,399,400,1,0,0,0,400,25,1,0,0,0,401,399,1,0,0,0,402,403,
	5,95,0,0,403,438,7,2,0,0,404,405,5,95,0,0,405,406,5,66,0,0,406,438,7,3,
	0,0,407,408,5,95,0,0,408,411,5,96,0,0,409,410,7,4,0,0,410,412,3,262,131,
	0,411,409,1,0,0,0,411,412,1,0,0,0,412,414,1,0,0,0,413,415,3,212,106,0,414,
	413,1,0,0,0,414,415,1,0,0,0,415,438,1,0,0,0,416,417,5,95,0,0,417,418,5,
	97,0,0,418,419,7,4,0,0,419,421,3,262,131,0,420,422,3,212,106,0,421,420,
	1,0,0,0,421,422,1,0,0,0,422,438,1,0,0,0,423,424,5,95,0,0,424,425,5,73,0,
	0,425,426,7,5,0,0,426,438,3,262,131,0,427,429,5,95,0,0,428,430,5,53,0,0,
	429,428,1,0,0,0,429,430,1,0,0,0,430,431,1,0,0,0,431,438,5,103,0,0,432,434,
	5,95,0,0,433,435,5,52,0,0,434,433,1,0,0,0,434,435,1,0,0,0,435,436,1,0,0,
	0,436,438,5,101,0,0,437,402,1,0,0,0,437,404,1,0,0,0,437,407,1,0,0,0,437,
	416,1,0,0,0,437,423,1,0,0,0,437,427,1,0,0,0,437,432,1,0,0,0,438,27,1,0,
	0,0,439,440,5,212,0,0,440,441,5,100,0,0,441,444,3,262,131,0,442,443,5,70,
	0,0,443,445,3,272,136,0,444,442,1,0,0,0,444,445,1,0,0,0,445,29,1,0,0,0,
	446,447,5,213,0,0,447,448,5,100,0,0,448,449,3,262,131,0,449,31,1,0,0,0,
	450,452,5,116,0,0,451,453,3,274,137,0,452,451,1,0,0,0,452,453,1,0,0,0,453,
	33,1,0,0,0,454,456,5,117,0,0,455,457,3,276,138,0,456,455,1,0,0,0,456,457,
	1,0,0,0,457,35,1,0,0,0,458,459,7,6,0,0,459,460,5,244,0,0,460,461,3,112,
	56,0,461,37,1,0,0,0,462,463,5,6,0,0,463,464,5,244,0,0,464,465,5,70,0,0,
	465,468,5,328,0,0,466,467,5,7,0,0,467,469,3,262,131,0,468,466,1,0,0,0,468,
	469,1,0,0,0,469,502,1,0,0,0,470,471,5,6,0,0,471,472,5,245,0,0,472,473,5,
	70,0,0,473,476,5,328,0,0,474,475,5,7,0,0,475,477,3,262,131,0,476,474,1,
	0,0,0,476,477,1,0,0,0,477,480,1,0,0,0,478,479,5,113,0,0,479,481,3,262,131,
	0,480,478,1,0,0,0,480,481,1,0,0,0,481,502,1,0,0,0,482,483,5,6,0,0,483,484,
	7,7,0,0,484,485,5,70,0,0,485,486,5,328,0,0,486,487,5,113,0,0,487,502,3,
	262,131,0,488,489,5,6,0,0,489,490,5,251,0,0,490,502,5,328,0,0,491,492,5,
	6,0,0,492,493,5,252,0,0,493,494,5,245,0,0,494,495,5,70,0,0,495,496,5,328,
	0,0,496,497,5,113,0,0,497,498,3,262,131,0,498,499,5,257,0,0,499,500,3,262,
	131,0,500,502,1,0,0,0,501,462,1,0,0,0,501,470,1,0,0,0,501,482,1,0,0,0,501,
	488,1,0,0,0,501,491,1,0,0,0,502,39,1,0,0,0,503,506,3,42,21,0,504,506,3,
	44,22,0,505,503,1,0,0,0,505,504,1,0,0,0,506,41,1,0,0,0,507,509,5,73,0,0,
	508,510,5,166,0,0,509,508,1,0,0,0,509,510,1,0,0,0,510,511,1,0,0,0,511,513,
	5,74,0,0,512,514,3,268,134,0,513,512,1,0,0,0,513,514,1,0,0,0,514,515,1,
	0,0,0,515,516,3,98,49,0,516,517,5,303,0,0,517,522,3,46,23,0,518,519,5,305,
	0,0,519,521,3,46,23,0,520,518,1,0,0,0,521,524,1,0,0,0,522,520,1,0,0,0,522,
	523,1,0,0,0,523,527,1,0,0,0,524,522,1,0,0,0,525,526,5,305,0,0,526,528,3,
	80,40,0,527,525,1,0,0,0,527,528,1,0,0,0,528,531,1,0,0,0,529,530,5,305,0,
	0,530,532,3,82,41,0,531,529,1,0,0,0,531,532,1,0,0,0,532,535,1,0,0,0,533,
	534,5,305,0,0,534,536,3,86,43,0,535,533,1,0,0,0,535,536,1,0,0,0,536,537,
	1,0,0,0,537,539,5,304,0,0,538,540,3,70,35,0,539,538,1,0,0,0,539,540,1,0,
	0,0,540,542,1,0,0,0,541,543,3,88,44,0,542,541,1,0,0,0,542,543,1,0,0,0,543,
	544,1,0,0,0,544,546,3,266,133,0,545,547,3,96,48,0,546,545,1,0,0,0,546,547,
	1,0,0,0,547,43,1,0,0,0,548,549,5,73,0,0,549,551,5,74,0,0,550,552,3,268,
	134,0,551,550,1,0,0,0,551,552,1,0,0,0,552,553,1,0,0,0,553,554,3,98,49,0,
	554,557,3,266,133,0,555,556,5,7,0,0,556,558,3,150,75,0,557,555,1,0,0,0,
	557,558,1,0,0,0,558,45,1,0,0,0,559,563,3,48,24,0,560,563,3,72,36,0,561,
	563,3,76,38,0,562,559,1,0,0,0,562,560,1,0,0,0,562,561,1,0,0,0,563,47,1,
	0,0,0,564,565,3,50,25,0,565,567,3,54,27,0,566,568,3,68,34,0,567,566,1,0,
	0,0,567,568,1,0,0,0,568,570,1,0,0,0,569,571,3,70,35,0,570,569,1,0,0,0,570,
	571,1,0,0,0,571,49,1,0,0,0,572,575,3,264,132,0,573,575,3,206,103,0,574,
	572,1,0,0,0,574,573,1,0,0,0,575,51,1,0,0,0,576,577,5,303,0,0,577,582,3,
	50,25,0,578,579,5,305,0,0,579,581,3,50,25,0,580,578,1,0,0,0,581,584,1,0,
	0,0,582,580,1,0,0,0,582,583,1,0,0,0,583,585,1,0,0,0,584,582,1,0,0,0,585,
	586,5,304,0,0,586,53,1,0,0,0,587,625,7,8,0,0,588,590,7,9,0,0,589,591,3,
	56,28,0,590,589,1,0,0,0,590,591,1,0,0,0,591,625,1,0,0,0,592,594,5,284,0,
	0,593,595,3,56,28,0,594,593,1,0,0,0,594,595,1,0,0,0,595,602,1,0,0,0,596,
	598,7,10,0,0,597,599,5,224,0,0,598,597,1,0,0,0,598,599,1,0,0,0,599,600,
	1,0,0,0,600,601,5,283,0,0,601,603,5,263,0,0,602,596,1,0,0,0,602,603,1,0,
	0,0,603,625,1,0,0,0,604,606,7,11,0,0,605,607,3,58,29,0,606,605,1,0,0,0,
	606,607,1,0,0,0,607,625,1,0,0,0,608,610,7,12,0,0,609,611,3,62,31,0,610,
	609,1,0,0,0,610,611,1,0,0,0,611,625,1,0,0,0,612,614,5,266,0,0,613,615,3,
	64,32,0,614,613,1,0,0,0,614,615,1,0,0,0,615,625,1,0,0,0,616,618,5,289,0,
	0,617,619,3,66,33,0,618,617,1,0,0,0,618,619,1,0,0,0,619,625,1,0,0,0,620,
	622,5,288,0,0,621,623,3,60,30,0,622,621,1,0,0,0,622,623,1,0,0,0,623,625,
	1,0,0,0,624,587,1,0,0,0,624,588,1,0,0,0,624,592,1,0,0,0,624,604,1,0,0,0,
	624,608,1,0,0,0,624,612,1,0,0,0,624,616,1,0,0,0,624,620,1,0,0,0,625,55,
	1,0,0,0,626,627,5,303,0,0,627,628,3,296,148,0,628,629,5,304,0,0,629,57,
	1,0,0,0,630,631,5,303,0,0,631,634,3,296,148,0,632,633,5,305,0,0,633,635,
	3,296,148,0,634,632,1,0,0,0,634,635,1,0,0,0,635,636,1,0,0,0,636,637,5,304,
	0,0,637,59,1,0,0,0,638,639,5,303,0,0,639,642,3,294,147,0,640,641,5,305,
	0,0,641,643,3,294,147,0,642,640,1,0,0,0,642,643,1,0,0,0,643,644,1,0,0,0,
	644,645,5,304,0,0,645,61,1,0,0,0,646,647,5,294,0,0,647,648,3,54,27,0,648,
	649,5,293,0,0,649,63,1,0,0,0,650,651,5,294,0,0,651,652,3,54,27,0,652,653,
	5,305,0,0,653,654,3,54,27,0,654,655,1,0,0,0,655,656,5,293,0,0,656,65,1,
	0,0,0,657,658,5,294,0,0,658,659,3,50,25,0,659,666,3,54,27,0,660,661,5,305,
	0,0,661,662,3,50,25,0,662,663,3,54,27,0,663,665,1,0,0,0,664,660,1,0,0,0,
	665,668,1,0,0,0,666,664,1,0,0,0,666,667,1,0,0,0,667,669,1,0,0,0,668,666,
	1,0,0,0,669,670,5,293,0,0,670,67,1,0,0,0,671,672,5,185,0,0,672,674,3,84,
	42,0,673,671,1,0,0,0,673,674,1,0,0,0,674,675,1,0,0,0,675,676,5,256,0,0,
	676,677,5,257,0,0,677,678,5,25,0,0,678,679,5,260,0,0,679,69,1,0,0,0,680,
	681,5,115,0,0,681,682,5,322,0,0,682,71,1,0,0,0,683,684,3,50,25,0,684,685,
	3,54,27,0,685,688,5,261,0,0,686,687,5,5,0,0,687,689,3,74,37,0,688,686,1,
	0,0,0,688,689,1,0,0,0,689,691,1,0,0,0,690,692,5,262,0,0,691,690,1,0,0,0,
	691,692,1,0,0,0,692,73,1,0,0,0,693,694,5,322,0,0,694,75,1,0,0,0,695,696,
	3,50,25,0,696,697,5,7,0,0,697,699,3,78,39,0,698,700,3,70,35,0,699,698,1,
	0,0,0,699,700,1,0,0,0,700,77,1,0,0,0,701,702,3,206,103,0,702,79,1,0,0,0,
	703,704,5,226,0,0,704,705,5,37,0,0,705,706,3,206,103,0,706,707,5,7,0,0,
	707,708,3,206,103,0,708,81,1,0,0,0,709,710,5,185,0,0,710,712,3,84,42,0,
	711,709,1,0,0,0,711,712,1,0,0,0,712,713,1,0,0,0,713,714,5,256,0,0,714,715,
	5,257,0,0,715,716,3,52,26,0,716,717,5,25,0,0,717,718,5,260,0,0,718,83,1,
	0,0,0,719,720,3,250,125,0,720,85,1,0,0,0,721,722,5,258,0,0,722,723,5,37,
	0,0,723,724,5,259,0,0,724,87,1,0,0,0,725,726,5,200,0,0,726,727,5,13,0,0,
	727,728,3,90,45,0,728,89,1,0,0,0,729,730,5,303,0,0,730,735,3,92,46,0,731,
	732,5,305,0,0,732,734,3,92,46,0,733,731,1,0,0,0,734,737,1,0,0,0,735,733,
	1,0,0,0,735,736,1,0,0,0,736,738,1,0,0,0,737,735,1,0,0,0,738,739,5,304,0,
	0,739,91,1,0,0,0,740,754,3,224,112,0,741,742,3,250,125,0,742,743,5,303,
	0,0,743,748,3,94,47,0,744,745,5,305,0,0,745,747,3,94,47,0,746,744,1,0,0,
	0,747,750,1,0,0,0,748,746,1,0,0,0,748,749,1,0,0,0,749,751,1,0,0,0,750,748,
	1,0,0,0,751,752,5,304,0,0,752,754,1,0,0,0,753,740,1,0,0,0,753,741,1,0,0,
	0,754,93,1,0,0,0,755,758,3,224,112,0,756,758,3,292,146,0,757,755,1,0,0,
	0,757,756,1,0,0,0,758,95,1,0,0,0,759,760,5,29,0,0,760,769,3,98,49,0,761,
	765,5,303,0,0,762,764,3,100,50,0,763,762,1,0,0,0,764,767,1,0,0,0,765,763,
	1,0,0,0,765,766,1,0,0,0,766,768,1,0,0,0,767,765,1,0,0,0,768,770,5,304,0,
	0,769,761,1,0,0,0,769,770,1,0,0,0,770,97,1,0,0,0,771,772,3,262,131,0,772,
	99,1,0,0,0,773,774,7,13,0,0,774,778,7,14,0,0,775,776,7,15,0,0,776,778,7,
	16,0,0,777,773,1,0,0,0,777,775,1,0,0,0,778,101,1,0,0,0,779,780,5,73,0,0,
	780,781,5,239,0,0,781,782,3,262,131,0,782,783,3,266,133,0,783,103,1,0,0,
	0,784,785,5,73,0,0,785,787,5,192,0,0,786,788,3,268,134,0,787,786,1,0,0,
	0,787,788,1,0,0,0,788,789,1,0,0,0,789,791,3,262,131,0,790,792,3,70,35,0,
	791,790,1,0,0,0,791,792,1,0,0,0,792,793,1,0,0,0,793,794,3,266,133,0,794,
	105,1,0,0,0,795,797,5,73,0,0,796,798,5,166,0,0,797,796,1,0,0,0,797,798,
	1,0,0,0,798,799,1,0,0,0,799,801,5,76,0,0,800,802,3,268,134,0,801,800,1,
	0,0,0,801,802,1,0,0,0,802,803,1,0,0,0,803,805,3,262,131,0,804,806,3,52,
	26,0,805,804,1,0,0,0,805,806,1,0,0,0,806,808,1,0,0,0,807,809,3,70,35,0,
	808,807,1,0,0,0,808,809,1,0,0,0,809,810,1,0,0,0,810,811,5,7,0,0,811,812,
	3,150,75,0,812,107,1,0,0,0,813,817,5,73,0,0,814,818,5,166,0,0,815,816,5,
	166,0,0,816,818,5,232,0,0,817,814,1,0,0,0,817,815,1,0,0,0,817,818,1,0,0,
	0,818,819,1,0,0,0,819,821,5,157,0,0,820,822,3,268,134,0,821,820,1,0,0,0,
	821,822,1,0,0,0,822,823,1,0,0,0,823,824,3,262,131,0,824,825,5,7,0,0,825,
	828,3,250,125,0,826,827,5,240,0,0,827,829,7,17,0,0,828,826,1,0,0,0,828,
	829,1,0,0,0,829,831,1,0,0,0,830,832,3,110,55,0,831,830,1,0,0,0,831,832,
	1,0,0,0,832,109,1,0,0,0,833,834,5,143,0,0,834,835,5,244,0,0,835,841,3,112,
	56,0,836,837,5,305,0,0,837,838,5,244,0,0,838,840,3,112,56,0,839,836,1,0,
	0,0,840,843,1,0,0,0,841,839,1,0,0,0,841,842,1,0,0,0,842,111,1,0,0,0,843,
	841,1,0,0,0,844,845,5,322,0,0,845,113,1,0,0,0,846,847,5,112,0,0,847,848,
	5,74,0,0,848,851,3,262,131,0,849,852,3,116,58,0,850,852,3,118,59,0,851,
	849,1,0,0,0,851,850,1,0,0,0,852,115,1,0,0,0,853,854,5,113,0,0,854,855,5,
	109,0,0,855,856,3,262,131,0,856,117,1,0,0,0,857,858,5,116,0,0,858,859,3,
	272,136,0,859,119,1,0,0,0,860,861,5,112,0,0,861,862,5,76,0,0,862,866,3,
	262,131,0,863,867,3,116,58,0,864,865,5,7,0,0,865,867,3,150,75,0,866,863,
	1,0,0,0,866,864,1,0,0,0,867,121,1,0,0,0,868,869,5,112,0,0,869,870,5,192,
	0,0,870,871,3,262,131,0,871,872,3,118,59,0,872,123,1,0,0,0,873,877,5,112,
	0,0,874,878,5,166,0,0,875,876,5,166,0,0,876,878,5,232,0,0,877,874,1,0,0,
	0,877,875,1,0,0,0,877,878,1,0,0,0,878,879,1,0,0,0,879,881,5,157,0,0,880,
	882,3,270,135,0,881,880,1,0,0,0,881,882,1,0,0,0,882,883,1,0,0,0,883,884,
	3,262,131,0,884,885,5,7,0,0,885,888,3,250,125,0,886,887,5,240,0,0,887,889,
	7,17,0,0,888,886,1,0,0,0,888,889,1,0,0,0,889,125,1,0,0,0,890,891,5,104,
	0,0,891,893,5,239,0,0,892,894,3,270,135,0,893,892,1,0,0,0,893,894,1,0,0,
	0,894,895,1,0,0,0,895,896,3,262,131,0,896,127,1,0,0,0,897,899,5,104,0,0,
	898,900,5,166,0,0,899,898,1,0,0,0,899,900,1,0,0,0,900,901,1,0,0,0,901,903,
	5,74,0,0,902,904,3,270,135,0,903,902,1,0,0,0,903,904,1,0,0,0,904,905,1,
	0,0,0,905,906,3,262,131,0,906,129,1,0,0,0,907,908,5,104,0,0,908,910,5,192,
	0,0,909,911,3,270,135,0,910,909,1,0,0,0,910,911,1,0,0,0,911,912,1,0,0,0,
	912,914,3,262,131,0,913,915,7,18,0,0,914,913,1,0,0,0,914,915,1,0,0,0,915,
	131,1,0,0,0,916,918,5,104,0,0,917,919,5,166,0,0,918,917,1,0,0,0,918,919,
	1,0,0,0,919,920,1,0,0,0,920,922,5,76,0,0,921,923,3,270,135,0,922,921,1,
	0,0,0,922,923,1,0,0,0,923,924,1,0,0,0,924,925,3,262,131,0,925,133,1,0,0,
	0,926,930,5,104,0,0,927,931,5,166,0,0,928,929,5,166,0,0,929,931,5,232,0,
	0,930,927,1,0,0,0,930,928,1,0,0,0,930,931,1,0,0,0,931,932,1,0,0,0,932,934,
	5,157,0,0,933,935,3,270,135,0,934,933,1,0,0,0,934,935,1,0,0,0,935,936,1,
	0,0,0,936,937,3,262,131,0,937,135,1,0,0,0,938,940,5,78,0,0,939,938,1,0,
	0,0,939,940,1,0,0,0,940,941,1,0,0,0,941,946,3,138,69,0,942,946,3,146,73,
	0,943,944,5,78,0,0,944,946,3,148,74,0,945,939,1,0,0,0,945,942,1,0,0,0,945,
	943,1,0,0,0,946,137,1,0,0,0,947,948,5,80,0,0,948,949,7,19,0,0,949,958,3,
	262,131,0,950,952,3,140,70,0,951,950,1,0,0,0,951,952,1,0,0,0,952,954,1,
	0,0,0,953,955,3,52,26,0,954,953,1,0,0,0,954,955,1,0,0,0,955,956,1,0,0,0,
	956,959,3,150,75,0,957,959,3,142,71,0,958,951,1,0,0,0,958,957,1,0,0,0,959,
	139,1,0,0,0,960,961,5,60,0,0,961,962,3,272,136,0,962,141,1,0,0,0,963,964,
	5,72,0,0,964,969,3,144,72,0,965,966,5,305,0,0,966,968,3,144,72,0,967,965,
	1,0,0,0,968,971,1,0,0,0,969,967,1,0,0,0,969,970,1,0,0,0,970,143,1,0,0,0,
	971,969,1,0,0,0,972,973,5,303,0,0,973,978,3,292,146,0,974,975,5,305,0,0,
	975,977,3,292,146,0,976,974,1,0,0,0,977,980,1,0,0,0,978,976,1,0,0,0,978,
	979,1,0,0,0,979,981,1,0,0,0,980,978,1,0,0,0,981,982,5,304,0,0,982,145,1,
	0,0,0,983,984,5,43,0,0,984,985,5,79,0,0,985,986,5,116,0,0,986,990,5,306,
	0,0,987,988,3,138,69,0,988,989,5,306,0,0,989,991,1,0,0,0,990,987,1,0,0,
	0,991,992,1,0,0,0,992,990,1,0,0,0,992,993,1,0,0,0,993,994,1,0,0,0,994,995,
	5,44,0,0,995,147,1,0,0,0,996,997,5,79,0,0,997,998,5,116,0,0,998,1002,5,
	43,0,0,999,1000,3,138,69,0,1000,1001,5,306,0,0,1001,1003,1,0,0,0,1002,999,
	1,0,0,0,1003,1004,1,0,0,0,1004,1002,1,0,0,0,1004,1005,1,0,0,0,1005,1006,
	1,0,0,0,1006,1007,5,44,0,0,1007,149,1,0,0,0,1008,1009,6,75,-1,0,1009,1040,
	3,152,76,0,1010,1011,5,70,0,0,1011,1016,3,154,77,0,1012,1013,5,305,0,0,
	1013,1015,3,154,77,0,1014,1012,1,0,0,0,1015,1018,1,0,0,0,1016,1014,1,0,
	0,0,1016,1017,1,0,0,0,1017,1019,1,0,0,0,1018,1016,1,0,0,0,1019,1020,3,150,
	75,5,1020,1040,1,0,0,0,1021,1022,5,303,0,0,1022,1023,3,150,75,0,1023,1024,
	5,304,0,0,1024,1040,1,0,0,0,1025,1027,3,160,80,0,1026,1028,3,188,94,0,1027,
	1026,1,0,0,0,1027,1028,1,0,0,0,1028,1030,1,0,0,0,1029,1031,3,192,96,0,1030,
	1029,1,0,0,0,1030,1031,1,0,0,0,1031,1040,1,0,0,0,1032,1034,3,158,79,0,1033,
	1035,3,188,94,0,1034,1033,1,0,0,0,1034,1035,1,0,0,0,1035,1037,1,0,0,0,1036,
	1038,3,192,96,0,1037,1036,1,0,0,0,1037,1038,1,0,0,0,1038,1040,1,0,0,0,1039,
	1008,1,0,0,0,1039,1010,1,0,0,0,1039,1021,1,0,0,0,1039,1025,1,0,0,0,1039,
	1032,1,0,0,0,1040,1055,1,0,0,0,1041,1042,10,3,0,0,1042,1044,7,20,0,0,1043,
	1045,5,8,0,0,1044,1043,1,0,0,0,1044,1045,1,0,0,0,1045,1046,1,0,0,0,1046,
	1048,3,150,75,0,1047,1049,3,188,94,0,1048,1047,1,0,0,0,1048,1049,1,0,0,
	0,1049,1051,1,0,0,0,1050,1052,3,192,96,0,1051,1050,1,0,0,0,1051,1052,1,
	0,0,0,1052,1054,1,0,0,0,1053,1041,1,0,0,0,1054,1057,1,0,0,0,1055,1053,1,
	0,0,0,1055,1056,1,0,0,0,1056,151,1,0,0,0,1057,1055,1,0,0,0,1058,1059,5,
	72,0,0,1059,1064,3,206,103,0,1060,1061,5,305,0,0,1061,1063,3,206,103,0,
	1062,1060,1,0,0,0,1063,1066,1,0,0,0,1064,1062,1,0,0,0,1064,1065,1,0,0,0,
	1065,153,1,0,0,0,1066,1064,1,0,0,0,1067,1079,3,156,78,0,1068,1069,5,303,
	0,0,1069,1074,3,50,25,0,1070,1071,5,305,0,0,1071,1073,3,50,25,0,1072,1070,
	1,0,0,0,1073,1076,1,0,0,0,1074,1072,1,0,0,0,1074,1075,1,0,0,0,1075,1077,
	1,0,0,0,1076,1074,1,0,0,0,1077,1078,5,304,0,0,1078,1080,1,0,0,0,1079,1068,
	1,0,0,0,1079,1080,1,0,0,0,1080,1081,1,0,0,0,1081,1082,5,7,0,0,1082,1083,
	5,303,0,0,1083,1084,3,150,75,0,1084,1085,5,304,0,0,1085,155,1,0,0,0,1086,
	1087,3,250,125,0,1087,157,1,0,0,0,1088,1089,3,160,80,0,1089,1091,3,164,
	82,0,1090,1092,3,180,90,0,1091,1090,1,0,0,0,1091,1092,1,0,0,0,1092,1094,
	1,0,0,0,1093,1095,3,182,91,0,1094,1093,1,0,0,0,1094,1095,1,0,0,0,1095,1097,
	1,0,0,0,1096,1098,3,186,93,0,1097,1096,1,0,0,0,1097,1098,1,0,0,0,1098,1100,
	1,0,0,0,1099,1101,3,194,97,0,1100,1099,1,0,0,0,1100,1101,1,0,0,0,1101,159,
	1,0,0,0,1102,1104,5,4,0,0,1103,1105,3,300,150,0,1104,1103,1,0,0,0,1104,
	1105,1,0,0,0,1105,1115,1,0,0,0,1106,1116,5,312,0,0,1107,1112,3,162,81,0,
	1108,1109,5,305,0,0,1109,1111,3,162,81,0,1110,1108,1,0,0,0,1111,1114,1,
	0,0,0,1112,1110,1,0,0,0,1112,1113,1,0,0,0,1113,1116,1,0,0,0,1114,1112,1,
	0,0,0,1115,1106,1,0,0,0,1115,1107,1,0,0,0,1116,161,1,0,0,0,1117,1122,3,
	206,103,0,1118,1120,5,7,0,0,1119,1118,1,0,0,0,1119,1120,1,0,0,0,1120,1121,
	1,0,0,0,1121,1123,3,206,103,0,1122,1119,1,0,0,0,1122,1123,1,0,0,0,1123,
	163,1,0,0,0,1124,1125,5,5,0,0,1125,1126,3,166,83,0,1126,165,1,0,0,0,1127,
	1128,6,83,-1,0,1128,1133,3,168,84,0,1129,1130,5,305,0,0,1130,1132,3,168,
	84,0,1131,1129,1,0,0,0,1132,1135,1,0,0,0,1133,1131,1,0,0,0,1133,1134,1,
	0,0,0,1134,1157,1,0,0,0,1135,1133,1,0,0,0,1136,1137,10,1,0,0,1137,1138,
	5,46,0,0,1138,1139,5,45,0,0,1139,1156,3,166,83,2,1140,1142,10,2,0,0,1141,
	1143,5,54,0,0,1142,1141,1,0,0,0,1142,1143,1,0,0,0,1143,1145,1,0,0,0,1144,
	1146,7,21,0,0,1145,1144,1,0,0,0,1145,1146,1,0,0,0,1146,1148,1,0,0,0,1147,
	1149,5,47,0,0,1148,1147,1,0,0,0,1148,1149,1,0,0,0,1149,1150,1,0,0,0,1150,
	1151,5,45,0,0,1151,1153,3,166,83,0,1152,1154,3,178,89,0,1153,1152,1,0,0,
	0,1153,1154,1,0,0,0,1154,1156,1,0,0,0,1155,1136,1,0,0,0,1155,1140,1,0,0,
	0,1156,1159,1,0,0,0,1157,1155,1,0,0,0,1157,1158,1,0,0,0,1158,167,1,0,0,
	0,1159,1157,1,0,0,0,1160,1162,3,170,85,0,1161,1163,3,240,120,0,1162,1161,
	1,0,0,0,1162,1163,1,0,0,0,1163,169,1,0,0,0,1164,1166,5,74,0,0,1165,1164,
	1,0,0,0,1165,1166,1,0,0,0,1166,1167,1,0,0,0,1167,1169,3,172,86,0,1168,1170,
	3,174,87,0,1169,1168,1,0,0,0,1169,1170,1,0,0,0,1170,1175,1,0,0,0,1171,1173,
	5,7,0,0,1172,1171,1,0,0,0,1172,1173,1,0,0,0,1173,1174,1,0,0,0,1174,1176,
	3,222,111,0,1175,1172,1,0,0,0,1175,1176,1,0,0,0,1176,1206,1,0,0,0,1177,
	1178,5,57,0,0,1178,1179,5,74,0,0,1179,1180,5,303,0,0,1180,1181,3,218,109,
	0,1181,1182,5,303,0,0,1182,1187,3,206,103,0,1183,1184,5,305,0,0,1184,1186,
	3,206,103,0,1185,1183,1,0,0,0,1186,1189,1,0,0,0,1187,1185,1,0,0,0,1187,
	1188,1,0,0,0,1188,1190,1,0,0,0,1189,1187,1,0,0,0,1190,1191,5,304,0,0,1191,
	1192,5,304,0,0,1192,1206,1,0,0,0,1193,1195,5,57,0,0,1194,1193,1,0,0,0,1194,
	1195,1,0,0,0,1195,1196,1,0,0,0,1196,1197,5,303,0,0,1197,1198,3,150,75,0,
	1198,1199,5,304,0,0,1199,1206,1,0,0,0,1200,1201,5,227,0,0,1201,1202,5,303,
	0,0,1202,1203,3,206,103,0,1203,1204,5,304,0,0,1204,1206,1,0,0,0,1205,1165,
	1,0,0,0,1205,1177,1,0,0,0,1205,1194,1,0,0,0,1205,1200,1,0,0,0,1206,171,
	1,0,0,0,1207,1208,3,262,131,0,1208,173,1,0,0,0,1209,1210,5,37,0,0,1210,
	1211,5,259,0,0,1211,1212,5,7,0,0,1212,1213,5,136,0,0,1213,1214,3,176,88,
	0,1214,175,1,0,0,0,1215,1216,3,206,103,0,1216,177,1,0,0,0,1217,1218,5,55,
	0,0,1218,1232,3,208,104,0,1219,1220,5,143,0,0,1220,1221,5,303,0,0,1221,
	1226,3,262,131,0,1222,1223,5,305,0,0,1223,1225,3,262,131,0,1224,1222,1,
	0,0,0,1225,1228,1,0,0,0,1226,1224,1,0,0,0,1226,1227,1,0,0,0,1227,1229,1,
	0,0,0,1228,1226,1,0,0,0,1229,1230,5,304,0,0,1230,1232,1,0,0,0,1231,1217,
	1,0,0,0,1231,1219,1,0,0,0,1232,179,1,0,0,0,1233,1234,5,11,0,0,1234,1235,
	3,208,104,0,1235,181,1,0,0,0,1236,1237,5,12,0,0,1237,1238,5,13,0,0,1238,
	1243,3,184,92,0,1239,1240,5,305,0,0,1240,1242,3,184,92,0,1241,1239,1,0,
	0,0,1242,1245,1,0,0,0,1243,1241,1,0,0,0,1243,1244,1,0,0,0,1244,183,1,0,
	0,0,1245,1243,1,0,0,0,1246,1298,3,206,103,0,1247,1248,5,303,0,0,1248,1298,
	5,304,0,0,1249,1250,5,303,0,0,1250,1255,3,206,103,0,1251,1252,5,305,0,0,
	1252,1254,3,206,103,0,1253,1251,1,0,0,0,1254,1257,1,0,0,0,1255,1253,1,0,
	0,0,1255,1256,1,0,0,0,1256,1258,1,0,0,0,1257,1255,1,0,0,0,1258,1259,5,304,
	0,0,1259,1298,1,0,0,0,1260,1261,5,16,0,0,1261,1262,5,303,0,0,1262,1267,
	3,206,103,0,1263,1264,5,305,0,0,1264,1266,3,206,103,0,1265,1263,1,0,0,0,
	1266,1269,1,0,0,0,1267,1265,1,0,0,0,1267,1268,1,0,0,0,1268,1270,1,0,0,0,
	1269,1267,1,0,0,0,1270,1271,5,304,0,0,1271,1298,1,0,0,0,1272,1273,5,17,
	0,0,1273,1274,5,303,0,0,1274,1279,3,206,103,0,1275,1276,5,305,0,0,1276,
	1278,3,206,103,0,1277,1275,1,0,0,0,1278,1281,1,0,0,0,1279,1277,1,0,0,0,
	1279,1280,1,0,0,0,1280,1282,1,0,0,0,1281,1279,1,0,0,0,1282,1283,5,304,0,
	0,1283,1298,1,0,0,0,1284,1285,5,14,0,0,1285,1286,5,15,0,0,1286,1287,5,303,
	0,0,1287,1292,3,184,92,0,1288,1289,5,305,0,0,1289,1291,3,184,92,0,1290,
	1288,1,0,0,0,1291,1294,1,0,0,0,1292,1290,1,0,0,0,1292,1293,1,0,0,0,1293,
	1295,1,0,0,0,1294,1292,1,0,0,0,1295,1296,5,304,0,0,1296,1298,1,0,0,0,1297,
	1246,1,0,0,0,1297,1247,1,0,0,0,1297,1249,1,0,0,0,1297,1260,1,0,0,0,1297,
	1272,1,0,0,0,1297,1284,1,0,0,0,1298,185,1,0,0,0,1299,1300,5,19,0,0,1300,
	1301,3,208,104,0,1301,187,1,0,0,0,1302,1303,5,18,0,0,1303,1304,5,13,0,0,
	1304,1309,3,190,95,0,1305,1306,5,305,0,0,1306,1308,3,190,95,0,1307,1305,
	1,0,0,0,1308,1311,1,0,0,0,1309,1307,1,0,0,0,1309,1310,1,0,0,0,1310,189,
	1,0,0,0,1311,1309,1,0,0,0,1312,1314,3,206,103,0,1313,1315,7,22,0,0,1314,
	1313,1,0,0,0,1314,1315,1,0,0,0,1315,191,1,0,0,0,1316,1319,5,20,0,0,1317,
	1320,5,8,0,0,1318,1320,3,206,103,0,1319,1317,1,0,0,0,1319,1318,1,0,0,0,
	1320,193,1,0,0,0,1321,1322,5,58,0,0,1322,1327,3,196,98,0,1323,1324,5,305,
	0,0,1324,1326,3,196,98,0,1325,1323,1,0,0,0,1326,1329,1,0,0,0,1327,1325,
	1,0,0,0,1327,1328,1,0,0,0,1328,195,1,0,0,0,1329,1327,1,0,0,0,1330,1331,
	3,242,121,0,1331,1332,5,7,0,0,1332,1333,3,198,99,0,1333,197,1,0,0,0,1334,
	1336,3,242,121,0,1335,1334,1,0,0,0,1335,1336,1,0,0,0,1336,1337,1,0,0,0,
	1337,1348,5,303,0,0,1338,1339,5,18,0,0,1339,1340,5,13,0,0,1340,1345,3,200,
	100,0,1341,1342,5,305,0,0,1342,1344,3,200,100,0,1343,1341,1,0,0,0,1344,
	1347,1,0,0,0,1345,1343,1,0,0,0,1345,1346,1,0,0,0,1346,1349,1,0,0,0,1347,
	1345,1,0,0,0,1348,1338,1,0,0,0,1348,1349,1,0,0,0,1349,1360,1,0,0,0,1350,
	1351,5,60,0,0,1351,1352,5,13,0,0,1352,1357,3,206,103,0,1353,1354,5,305,
	0,0,1354,1356,3,206,103,0,1355,1353,1,0,0,0,1356,1359,1,0,0,0,1357,1355,
	1,0,0,0,1357,1358,1,0,0,0,1358,1361,1,0,0,0,1359,1357,1,0,0,0,1360,1350,
	1,0,0,0,1360,1361,1,0,0,0,1361,1363,1,0,0,0,1362,1364,3,202,101,0,1363,
	1362,1,0,0,0,1363,1364,1,0,0,0,1364,1365,1,0,0,0,1365,1366,5,304,0,0,1366,
	199,1,0,0,0,1367,1369,3,206,103,0,1368,1370,7,22,0,0,1369,1368,1,0,0,0,
	1369,1370,1,0,0,0,1370,1373,1,0,0,0,1371,1372,5,34,0,0,1372,1374,7,23,0,
	0,1373,1371,1,0,0,0,1373,1374,1,0,0,0,1374,201,1,0,0,0,1375,1376,5,61,0,
	0,1376,1380,3,204,102,0,1377,1378,5,62,0,0,1378,1380,3,204,102,0,1379,1375,
	1,0,0,0,1379,1377,1,0,0,0,1380,203,1,0,0,0,1381,1382,3,206,103,0,1382,1383,
	5,64,0,0,1383,205,1,0,0,0,1384,1385,3,208,104,0,1385,207,1,0,0,0,1386,1387,
	6,104,-1,0,1387,1388,5,25,0,0,1388,1399,3,208,104,5,1389,1390,5,27,0,0,
	1390,1391,5,303,0,0,1391,1392,3,150,75,0,1392,1393,5,304,0,0,1393,1399,
	1,0,0,0,1394,1396,3,214,107,0,1395,1397,3,210,105,0,1396,1395,1,0,0,0,1396,
	1397,1,0,0,0,1397,1399,1,0,0,0,1398,1386,1,0,0,0,1398,1389,1,0,0,0,1398,
	1394,1,0,0,0,1399,1408,1,0,0,0,1400,1401,10,2,0,0,1401,1402,5,23,0,0,1402,
	1407,3,208,104,3,1403,1404,10,1,0,0,1404,1405,5,22,0,0,1405,1407,3,208,
	104,2,1406,1400,1,0,0,0,1406,1403,1,0,0,0,1407,1410,1,0,0,0,1408,1406,1,
	0,0,0,1408,1409,1,0,0,0,1409,209,1,0,0,0,1410,1408,1,0,0,0,1411,1413,5,
	25,0,0,1412,1411,1,0,0,0,1412,1413,1,0,0,0,1413,1414,1,0,0,0,1414,1415,
	5,28,0,0,1415,1416,3,214,107,0,1416,1417,5,23,0,0,1417,1418,3,214,107,0,
	1418,1495,1,0,0,0,1419,1421,5,25,0,0,1420,1419,1,0,0,0,1420,1421,1,0,0,
	0,1421,1422,1,0,0,0,1422,1423,5,24,0,0,1423,1424,5,303,0,0,1424,1429,3,
	206,103,0,1425,1426,5,305,0,0,1426,1428,3,206,103,0,1427,1425,1,0,0,0,1428,
	1431,1,0,0,0,1429,1427,1,0,0,0,1429,1430,1,0,0,0,1430,1432,1,0,0,0,1431,
	1429,1,0,0,0,1432,1433,5,304,0,0,1433,1495,1,0,0,0,1434,1436,5,25,0,0,1435,
	1434,1,0,0,0,1435,1436,1,0,0,0,1436,1437,1,0,0,0,1437,1438,5,24,0,0,1438,
	1439,5,303,0,0,1439,1440,3,150,75,0,1440,1441,5,304,0,0,1441,1495,1,0,0,
	0,1442,1443,5,27,0,0,1443,1444,5,303,0,0,1444,1445,3,150,75,0,1445,1446,
	5,304,0,0,1446,1495,1,0,0,0,1447,1449,5,25,0,0,1448,1447,1,0,0,0,1448,1449,
	1,0,0,0,1449,1450,1,0,0,0,1450,1451,5,30,0,0,1451,1495,3,214,107,0,1452,
	1454,5,25,0,0,1453,1452,1,0,0,0,1453,1454,1,0,0,0,1454,1455,1,0,0,0,1455,
	1456,5,29,0,0,1456,1470,7,24,0,0,1457,1458,5,303,0,0,1458,1471,5,304,0,
	0,1459,1460,5,303,0,0,1460,1465,3,206,103,0,1461,1462,5,305,0,0,1462,1464,
	3,206,103,0,1463,1461,1,0,0,0,1464,1467,1,0,0,0,1465,1463,1,0,0,0,1465,
	1466,1,0,0,0,1466,1468,1,0,0,0,1467,1465,1,0,0,0,1468,1469,5,304,0,0,1469,
	1471,1,0,0,0,1470,1457,1,0,0,0,1470,1459,1,0,0,0,1471,1495,1,0,0,0,1472,
	1474,5,25,0,0,1473,1472,1,0,0,0,1473,1474,1,0,0,0,1474,1475,1,0,0,0,1475,
	1476,5,29,0,0,1476,1495,3,214,107,0,1477,1479,5,31,0,0,1478,1480,5,25,0,
	0,1479,1478,1,0,0,0,1479,1480,1,0,0,0,1480,1481,1,0,0,0,1481,1495,5,290,
	0,0,1482,1484,5,31,0,0,1483,1485,5,25,0,0,1484,1483,1,0,0,0,1484,1485,1,
	0,0,0,1485,1486,1,0,0,0,1486,1495,7,25,0,0,1487,1489,5,31,0,0,1488,1490,
	5,25,0,0,1489,1488,1,0,0,0,1489,1490,1,0,0,0,1490,1491,1,0,0,0,1491,1492,
	5,10,0,0,1492,1493,5,5,0,0,1493,1495,3,214,107,0,1494,1412,1,0,0,0,1494,
	1420,1,0,0,0,1494,1435,1,0,0,0,1494,1442,1,0,0,0,1494,1448,1,0,0,0,1494,
	1453,1,0,0,0,1494,1473,1,0,0,0,1494,1477,1,0,0,0,1494,1482,1,0,0,0,1494,
	1487,1,0,0,0,1495,211,1,0,0,0,1496,1498,5,25,0,0,1497,1496,1,0,0,0,1497,
	1498,1,0,0,0,1498,1499,1,0,0,0,1499,1500,5,29,0,0,1500,1514,7,24,0,0,1501,
	1502,5,303,0,0,1502,1515,5,304,0,0,1503,1504,5,303,0,0,1504,1509,3,206,
	103,0,1505,1506,5,305,0,0,1506,1508,3,206,103,0,1507,1505,1,0,0,0,1508,
	1511,1,0,0,0,1509,1507,1,0,0,0,1509,1510,1,0,0,0,1510,1512,1,0,0,0,1511,
	1509,1,0,0,0,1512,1513,5,304,0,0,1513,1515,1,0,0,0,1514,1501,1,0,0,0,1514,
	1503,1,0,0,0,1515,1522,1,0,0,0,1516,1518,5,25,0,0,1517,1516,1,0,0,0,1517,
	1518,1,0,0,0,1518,1519,1,0,0,0,1519,1520,5,29,0,0,1520,1522,3,214,107,0,
	1521,1497,1,0,0,0,1521,1517,1,0,0,0,1522,213,1,0,0,0,1523,1524,6,107,-1,
	0,1524,1528,3,216,108,0,1525,1526,7,26,0,0,1526,1528,3,214,107,7,1527,1523,
	1,0,0,0,1527,1525,1,0,0,0,1528,1550,1,0,0,0,1529,1530,10,6,0,0,1530,1531,
	7,27,0,0,1531,1549,3,214,107,7,1532,1533,10,5,0,0,1533,1534,7,28,0,0,1534,
	1549,3,214,107,6,1535,1536,10,4,0,0,1536,1537,5,298,0,0,1537,1549,3,214,
	107,5,1538,1539,10,3,0,0,1539,1540,5,299,0,0,1540,1549,3,214,107,4,1541,
	1542,10,2,0,0,1542,1543,5,297,0,0,1543,1549,3,214,107,3,1544,1545,10,1,
	0,0,1545,1546,3,282,141,0,1546,1547,3,214,107,2,1547,1549,1,0,0,0,1548,
	1529,1,0,0,0,1548,1532,1,0,0,0,1548,1535,1,0,0,0,1548,1538,1,0,0,0,1548,
	1541,1,0,0,0,1548,1544,1,0,0,0,1549,1552,1,0,0,0,1550,1548,1,0,0,0,1550,
	1551,1,0,0,0,1551,215,1,0,0,0,1552,1550,1,0,0,0,1553,1554,6,108,-1,0,1554,
	1556,5,39,0,0,1555,1557,3,258,129,0,1556,1555,1,0,0,0,1557,1558,1,0,0,0,
	1558,1556,1,0,0,0,1558,1559,1,0,0,0,1559,1562,1,0,0,0,1560,1561,5,42,0,
	0,1561,1563,3,206,103,0,1562,1560,1,0,0,0,1562,1563,1,0,0,0,1563,1564,1,
	0,0,0,1564,1565,5,44,0,0,1565,1645,1,0,0,0,1566,1567,5,39,0,0,1567,1569,
	3,206,103,0,1568,1570,3,258,129,0,1569,1568,1,0,0,0,1570,1571,1,0,0,0,1571,
	1569,1,0,0,0,1571,1572,1,0,0,0,1572,1575,1,0,0,0,1573,1574,5,42,0,0,1574,
	1576,3,206,103,0,1575,1573,1,0,0,0,1575,1576,1,0,0,0,1576,1577,1,0,0,0,
	1577,1578,5,44,0,0,1578,1645,1,0,0,0,1579,1580,5,94,0,0,1580,1581,5,303,
	0,0,1581,1582,3,206,103,0,1582,1583,5,7,0,0,1583,1584,3,54,27,0,1584,1585,
	5,304,0,0,1585,1645,1,0,0,0,1586,1587,5,67,0,0,1587,1588,5,303,0,0,1588,
	1591,3,206,103,0,1589,1590,5,124,0,0,1590,1592,5,34,0,0,1591,1589,1,0,0,
	0,1591,1592,1,0,0,0,1592,1593,1,0,0,0,1593,1594,5,304,0,0,1594,1645,1,0,
	0,0,1595,1596,5,69,0,0,1596,1597,5,303,0,0,1597,1600,3,206,103,0,1598,1599,
	5,124,0,0,1599,1601,5,34,0,0,1600,1598,1,0,0,0,1600,1601,1,0,0,0,1601,1602,
	1,0,0,0,1602,1603,5,304,0,0,1603,1645,1,0,0,0,1604,1605,5,129,0,0,1605,
	1606,5,303,0,0,1606,1607,3,214,107,0,1607,1608,5,24,0,0,1608,1609,3,214,
	107,0,1609,1610,5,304,0,0,1610,1645,1,0,0,0,1611,1645,3,292,146,0,1612,
	1645,5,312,0,0,1613,1614,3,262,131,0,1614,1615,5,300,0,0,1615,1616,5,312,
	0,0,1616,1645,1,0,0,0,1617,1618,5,303,0,0,1618,1619,3,150,75,0,1619,1620,
	5,304,0,0,1620,1645,1,0,0,0,1621,1622,3,218,109,0,1622,1634,5,303,0,0,1623,
	1625,3,300,150,0,1624,1623,1,0,0,0,1624,1625,1,0,0,0,1625,1626,1,0,0,0,
	1626,1631,3,206,103,0,1627,1628,5,305,0,0,1628,1630,3,206,103,0,1629,1627,
	1,0,0,0,1630,1633,1,0,0,0,1631,1629,1,0,0,0,1631,1632,1,0,0,0,1632,1635,
	1,0,0,0,1633,1631,1,0,0,0,1634,1624,1,0,0,0,1634,1635,1,0,0,0,1635,1636,
	1,0,0,0,1636,1637,5,304,0,0,1637,1645,1,0,0,0,1638,1645,3,250,125,0,1639,
	1645,3,220,110,0,1640,1641,5,303,0,0,1641,1642,3,206,103,0,1642,1643,5,
	304,0,0,1643,1645,1,0,0,0,1644,1553,1,0,0,0,1644,1566,1,0,0,0,1644,1579,
	1,0,0,0,1644,1586,1,0,0,0,1644,1595,1,0,0,0,1644,1604,1,0,0,0,1644,1611,
	1,0,0,0,1644,1612,1,0,0,0,1644,1613,1,0,0,0,1644,1617,1,0,0,0,1644,1621,
	1,0,0,0,1644,1638,1,0,0,0,1644,1639,1,0,0,0,1644,1640,1,0,0,0,1645,1653,
	1,0,0,0,1646,1647,10,4,0,0,1647,1648,5,301,0,0,1648,1649,3,214,107,0,1649,
	1650,5,302,0,0,1650,1652,1,0,0,0,1651,1646,1,0,0,0,1652,1655,1,0,0,0,1653,
	1651,1,0,0,0,1653,1654,1,0,0,0,1654,217,1,0,0,0,1655,1653,1,0,0,0,1656,
	1657,3,262,131,0,1657,219,1,0,0,0,1658,1659,3,262,131,0,1659,221,1,0,0,
	0,1660,1661,3,250,125,0,1661,223,1,0,0,0,1662,1665,3,250,125,0,1663,1665,
	3,220,110,0,1664,1662,1,0,0,0,1664,1663,1,0,0,0,1665,225,1,0,0,0,1666,1669,
	5,38,0,0,1667,1670,3,228,114,0,1668,1670,3,232,116,0,1669,1667,1,0,0,0,
	1669,1668,1,0,0,0,1669,1670,1,0,0,0,1670,227,1,0,0,0,1671,1673,3,230,115,
	0,1672,1674,3,234,117,0,1673,1672,1,0,0,0,1673,1674,1,0,0,0,1674,229,1,
	0,0,0,1675,1676,3,236,118,0,1676,1677,3,250,125,0,1677,1679,1,0,0,0,1678,
	1675,1,0,0,0,1679,1680,1,0,0,0,1680,1678,1,0,0,0,1680,1681,1,0,0,0,1681,
	231,1,0,0,0,1682,1685,3,234,117,0,1683,1686,3,230,115,0,1684,1686,3,234,
	117,0,1685,1683,1,0,0,0,1685,1684,1,0,0,0,1685,1686,1,0,0,0,1686,233,1,
	0,0,0,1687,1688,3,236,118,0,1688,1689,3,250,125,0,1689,1690,5,109,0,0,1690,
	1691,3,250,125,0,1691,235,1,0,0,0,1692,1694,7,29,0,0,1693,1692,1,0,0,0,
	1693,1694,1,0,0,0,1694,1695,1,0,0,0,1695,1698,7,30,0,0,1696,1698,5,322,
	0,0,1697,1693,1,0,0,0,1697,1696,1,0,0,0,1698,237,1,0,0,0,1699,1701,5,7,
	0,0,1700,1699,1,0,0,0,1700,1701,1,0,0,0,1701,1702,1,0,0,0,1702,1704,3,252,
	126,0,1703,1705,3,246,123,0,1704,1703,1,0,0,0,1704,1705,1,0,0,0,1705,239,
	1,0,0,0,1706,1708,5,7,0,0,1707,1706,1,0,0,0,1707,1708,1,0,0,0,1708,1709,
	1,0,0,0,1709,1711,3,252,126,0,1710,1712,3,246,123,0,1711,1710,1,0,0,0,1711,
	1712,1,0,0,0,1712,241,1,0,0,0,1713,1714,3,250,125,0,1714,1715,3,244,122,
	0,1715,243,1,0,0,0,1716,1717,5,131,0,0,1717,1719,3,250,125,0,1718,1716,
	1,0,0,0,1719,1720,1,0,0,0,1720,1718,1,0,0,0,1720,1721,1,0,0,0,1721,1724,
	1,0,0,0,1722,1724,1,0,0,0,1723,1718,1,0,0,0,1723,1722,1,0,0,0,1724,245,
	1,0,0,0,1725,1726,5,303,0,0,1726,1727,3,248,124,0,1727,1728,5,304,0,0,1728,
	247,1,0,0,0,1729,1734,3,250,125,0,1730,1731,5,305,0,0,1731,1733,3,250,125,
	0,1732,1730,1,0,0,0,1733,1736,1,0,0,0,1734,1732,1,0,0,0,1734,1735,1,0,0,
	0,1735,249,1,0,0,0,1736,1734,1,0,0,0,1737,1740,3,252,126,0,1738,1740,3,
	304,152,0,1739,1737,1,0,0,0,1739,1738,1,0,0,0,1740,251,1,0,0,0,1741,1746,
	3,254,127,0,1742,1746,3,256,128,0,1743,1746,3,302,151,0,1744,1746,3,306,
	153,0,1745,1741,1,0,0,0,1745,1742,1,0,0,0,1745,1743,1,0,0,0,1745,1744,1,
	0,0,0,1746,253,1,0,0,0,1747,1748,7,31,0,0,1748,255,1,0,0,0,1749,1750,5,
	322,0,0,1750,257,1,0,0,0,1751,1752,5,40,0,0,1752,1753,3,206,103,0,1753,
	1754,5,41,0,0,1754,1755,3,206,103,0,1755,259,1,0,0,0,1756,1761,3,262,131,
	0,1757,1758,5,305,0,0,1758,1760,3,262,131,0,1759,1757,1,0,0,0,1760,1763,
	1,0,0,0,1761,1759,1,0,0,0,1761,1762,1,0,0,0,1762,261,1,0,0,0,1763,1761,
	1,0,0,0,1764,1768,5,326,0,0,1765,1767,5,320,0,0,1766,1765,1,0,0,0,1767,
	1770,1,0,0,0,1768,1769,1,0,0,0,1768,1766,1,0,0,0,1769,263,1,0,0,0,1770,
	1768,1,0,0,0,1771,1775,7,32,0,0,1772,1774,7,33,0,0,1773,1772,1,0,0,0,1774,
	1777,1,0,0,0,1775,1776,1,0,0,0,1775,1773,1,0,0,0,1776,265,1,0,0,0,1777,
	1775,1,0,0,0,1778,1779,5,70,0,0,1779,1780,3,272,136,0,1780,267,1,0,0,0,
	1781,1782,5,128,0,0,1782,1783,5,25,0,0,1783,1784,5,27,0,0,1784,269,1,0,
	0,0,1785,1786,5,128,0,0,1786,1787,5,27,0,0,1787,271,1,0,0,0,1788,1789,5,
	303,0,0,1789,1794,3,274,137,0,1790,1791,5,305,0,0,1791,1793,3,274,137,0,
	1792,1790,1,0,0,0,1793,1796,1,0,0,0,1794,1792,1,0,0,0,1794,1795,1,0,0,0,
	1795,1797,1,0,0,0,1796,1794,1,0,0,0,1797,1798,5,304,0,0,1798,273,1,0,0,
	0,1799,1804,3,276,138,0,1800,1802,5,292,0,0,1801,1800,1,0,0,0,1801,1802,
	1,0,0,0,1802,1803,1,0,0,0,1803,1805,3,278,139,0,1804,1801,1,0,0,0,1804,
	1805,1,0,0,0,1805,275,1,0,0,0,1806,1810,3,250,125,0,1807,1810,3,220,110,
	0,1808,1810,5,322,0,0,1809,1806,1,0,0,0,1809,1807,1,0,0,0,1809,1808,1,0,
	0,0,1810,277,1,0,0,0,1811,1816,5,323,0,0,1812,1816,5,324,0,0,1813,1816,
	3,298,149,0,1814,1816,5,322,0,0,1815,1811,1,0,0,0,1815,1812,1,0,0,0,1815,
	1813,1,0,0,0,1815,1814,1,0,0,0,1816,279,1,0,0,0,1817,1824,5,23,0,0,1818,
	1819,5,298,0,0,1819,1824,5,298,0,0,1820,1824,5,22,0,0,1821,1822,5,297,0,
	0,1822,1824,5,297,0,0,1823,1817,1,0,0,0,1823,1818,1,0,0,0,1823,1820,1,0,
	0,0,1823,1821,1,0,0,0,1824,281,1,0,0,0,1825,1840,5,292,0,0,1826,1840,5,
	293,0,0,1827,1840,5,294,0,0,1828,1829,5,294,0,0,1829,1840,5,292,0,0,1830,
	1831,5,293,0,0,1831,1840,5,292,0,0,1832,1833,5,294,0,0,1833,1840,5,293,
	0,0,1834,1835,5,295,0,0,1835,1840,5,292,0,0,1836,1837,5,294,0,0,1837,1838,
	5,292,0,0,1838,1840,5,293,0,0,1839,1825,1,0,0,0,1839,1826,1,0,0,0,1839,
	1827,1,0,0,0,1839,1828,1,0,0,0,1839,1830,1,0,0,0,1839,1832,1,0,0,0,1839,
	1834,1,0,0,0,1839,1836,1,0,0,0,1840,283,1,0,0,0,1841,1842,5,294,0,0,1842,
	1849,5,294,0,0,1843,1844,5,293,0,0,1844,1849,5,293,0,0,1845,1849,5,298,
	0,0,1846,1849,5,299,0,0,1847,1849,5,297,0,0,1848,1841,1,0,0,0,1848,1843,
	1,0,0,0,1848,1845,1,0,0,0,1848,1846,1,0,0,0,1848,1847,1,0,0,0,1849,285,
	1,0,0,0,1850,1851,7,34,0,0,1851,287,1,0,0,0,1852,1853,7,35,0,0,1853,289,
	1,0,0,0,1854,1855,3,262,131,0,1855,291,1,0,0,0,1856,1869,3,294,147,0,1857,
	1869,3,296,148,0,1858,1869,3,226,113,0,1859,1860,5,314,0,0,1860,1869,3,
	296,148,0,1861,1869,3,298,149,0,1862,1869,5,324,0,0,1863,1869,5,325,0,0,
	1864,1866,5,25,0,0,1865,1864,1,0,0,0,1865,1866,1,0,0,0,1866,1867,1,0,0,
	0,1867,1869,5,290,0,0,1868,1856,1,0,0,0,1868,1857,1,0,0,0,1868,1858,1,0,
	0,0,1868,1859,1,0,0,0,1868,1861,1,0,0,0,1868,1862,1,0,0,0,1868,1863,1,0,
	0,0,1868,1865,1,0,0,0,1869,293,1,0,0,0,1870,1871,5,322,0,0,1871,295,1,0,
	0,0,1872,1873,5,323,0,0,1873,297,1,0,0,0,1874,1875,7,25,0,0,1875,299,1,
	0,0,0,1876,1877,7,36,0,0,1877,301,1,0,0,0,1878,1879,7,37,0,0,1879,303,1,
	0,0,0,1880,1881,7,38,0,0,1881,305,1,0,0,0,1882,1883,7,39,0,0,1883,307,1,
	0,0,0,224,316,319,321,336,354,358,367,372,379,386,390,399,411,414,421,429,
	434,437,444,452,456,468,476,480,501,505,509,513,522,527,531,535,539,542,
	546,551,557,562,567,570,574,582,590,594,598,602,606,610,614,618,622,624,
	634,642,666,673,688,691,699,711,735,748,753,757,765,769,777,787,791,797,
	801,805,808,817,821,828,831,841,851,866,877,881,888,893,899,903,910,914,
	918,922,930,934,939,945,951,954,958,969,978,992,1004,1016,1027,1030,1034,
	1037,1039,1044,1048,1051,1055,1064,1074,1079,1091,1094,1097,1100,1104,1112,
	1115,1119,1122,1133,1142,1145,1148,1153,1155,1157,1162,1165,1169,1172,1175,
	1187,1194,1205,1226,1231,1243,1255,1267,1279,1292,1297,1309,1314,1319,1327,
	1335,1345,1348,1357,1360,1363,1369,1373,1379,1396,1398,1406,1408,1412,1420,
	1429,1435,1448,1453,1465,1470,1473,1479,1484,1489,1494,1497,1509,1514,1517,
	1521,1527,1548,1550,1558,1562,1571,1575,1591,1600,1624,1631,1634,1644,1653,
	1664,1669,1673,1680,1685,1693,1697,1700,1704,1707,1711,1720,1723,1734,1739,
	1745,1761,1768,1775,1794,1801,1804,1809,1815,1823,1839,1848,1865,1868];

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
	public plusUid(): PlusUidContext {
		return this.getTypedRuleContext(PlusUidContext, 0) as PlusUidContext;
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
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
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
	public insertMulStatementCompatibility(): InsertMulStatementCompatibilityContext {
		return this.getTypedRuleContext(InsertMulStatementCompatibilityContext, 0) as InsertMulStatementCompatibilityContext;
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


export class InsertMulStatementCompatibilityContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BEGIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.BEGIN, 0);
	}
	public STATEMENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.STATEMENT, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(FlinkSqlParser.SET, 0);
	}
	public SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.SEMICOLON);
	}
	public SEMICOLON(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.SEMICOLON, i);
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
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_insertMulStatementCompatibility;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterInsertMulStatementCompatibility) {
	 		listener.enterInsertMulStatementCompatibility(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitInsertMulStatementCompatibility) {
	 		listener.exitInsertMulStatementCompatibility(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitInsertMulStatementCompatibility) {
			return visitor.visitInsertMulStatementCompatibility(this);
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
	public CUBE(): TerminalNode {
		return this.getToken(FlinkSqlParser.CUBE, 0);
	}
	public ROLLUP(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROLLUP, 0);
	}
	public GROUPING(): TerminalNode {
		return this.getToken(FlinkSqlParser.GROUPING, 0);
	}
	public SETS(): TerminalNode {
		return this.getToken(FlinkSqlParser.SETS, 0);
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public ASC(): TerminalNode {
		return this.getToken(FlinkSqlParser.ASC, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(FlinkSqlParser.DESC, 0);
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
	public ORDER(): TerminalNode {
		return this.getToken(FlinkSqlParser.ORDER, 0);
	}
	public BY_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.BY);
	}
	public BY(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.BY, i);
	}
	public sortItem_list(): SortItemContext[] {
		return this.getTypedRuleContexts(SortItemContext) as SortItemContext[];
	}
	public sortItem(i: number): SortItemContext {
		return this.getTypedRuleContext(SortItemContext, i) as SortItemContext;
	}
	public PARTITION(): TerminalNode {
		return this.getToken(FlinkSqlParser.PARTITION, 0);
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
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0) as ErrorCapturingIdentifierContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
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


export class SortItemContext extends ParserRuleContext {
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
    	return FlinkSqlParser.RULE_sortItem;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSortItem) {
	 		listener.enterSortItem(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSortItem) {
	 		listener.exitSortItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSortItem) {
			return visitor.visitSortItem(this);
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
	public frameBound(): FrameBoundContext {
		return this.getTypedRuleContext(FrameBoundContext, 0) as FrameBoundContext;
	}
	public ROWS(): TerminalNode {
		return this.getToken(FlinkSqlParser.ROWS, 0);
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
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public PRECEDING(): TerminalNode {
		return this.getToken(FlinkSqlParser.PRECEDING, 0);
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


export class PlusUidContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.ID_LITERAL, 0);
	}
	public PLUS_ID_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.PLUS_ID_LITERAL, 0);
	}
	public DOT_ID_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.DOT_ID);
	}
	public DOT_ID(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.DOT_ID, i);
	}
	public PLUS_DOT_ID_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.PLUS_DOT_ID);
	}
	public PLUS_DOT_ID(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.PLUS_DOT_ID, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_plusUid;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPlusUid) {
	 		listener.enterPlusUid(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPlusUid) {
	 		listener.exitPlusUid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPlusUid) {
			return visitor.visitPlusUid(this);
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
