// Generated from /Users/zhenglin/Documents/parser/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.12.0
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
	public static readonly RULE_insertMulStatement = 73;
	public static readonly RULE_queryStatement = 74;
	public static readonly RULE_valuesCaluse = 75;
	public static readonly RULE_withItem = 76;
	public static readonly RULE_withItemName = 77;
	public static readonly RULE_selectStatement = 78;
	public static readonly RULE_selectClause = 79;
	public static readonly RULE_projectItemDefinition = 80;
	public static readonly RULE_fromClause = 81;
	public static readonly RULE_tableExpression = 82;
	public static readonly RULE_tableReference = 83;
	public static readonly RULE_tablePrimary = 84;
	public static readonly RULE_tablePath = 85;
	public static readonly RULE_systemTimePeriod = 86;
	public static readonly RULE_dateTimeExpression = 87;
	public static readonly RULE_joinCondition = 88;
	public static readonly RULE_whereClause = 89;
	public static readonly RULE_groupByClause = 90;
	public static readonly RULE_groupItemDefinition = 91;
	public static readonly RULE_havingClause = 92;
	public static readonly RULE_orderByCaluse = 93;
	public static readonly RULE_orderItemDefition = 94;
	public static readonly RULE_limitClause = 95;
	public static readonly RULE_windowClause = 96;
	public static readonly RULE_namedWindow = 97;
	public static readonly RULE_windowSpec = 98;
	public static readonly RULE_sortItem = 99;
	public static readonly RULE_windowFrame = 100;
	public static readonly RULE_frameBound = 101;
	public static readonly RULE_expression = 102;
	public static readonly RULE_booleanExpression = 103;
	public static readonly RULE_predicate = 104;
	public static readonly RULE_likePredicate = 105;
	public static readonly RULE_valueExpression = 106;
	public static readonly RULE_primaryExpression = 107;
	public static readonly RULE_functionName = 108;
	public static readonly RULE_dereferenceDefinition = 109;
	public static readonly RULE_correlationName = 110;
	public static readonly RULE_qualifiedName = 111;
	public static readonly RULE_interval = 112;
	public static readonly RULE_errorCapturingMultiUnitsInterval = 113;
	public static readonly RULE_multiUnitsInterval = 114;
	public static readonly RULE_errorCapturingUnitToUnitInterval = 115;
	public static readonly RULE_unitToUnitInterval = 116;
	public static readonly RULE_intervalValue = 117;
	public static readonly RULE_columnAlias = 118;
	public static readonly RULE_tableAlias = 119;
	public static readonly RULE_errorCapturingIdentifier = 120;
	public static readonly RULE_errorCapturingIdentifierExtra = 121;
	public static readonly RULE_identifierList = 122;
	public static readonly RULE_identifierSeq = 123;
	public static readonly RULE_identifier = 124;
	public static readonly RULE_strictIdentifier = 125;
	public static readonly RULE_unquotedIdentifier = 126;
	public static readonly RULE_quotedIdentifier = 127;
	public static readonly RULE_whenClause = 128;
	public static readonly RULE_uidList = 129;
	public static readonly RULE_uid = 130;
	public static readonly RULE_plusUid = 131;
	public static readonly RULE_withOption = 132;
	public static readonly RULE_ifNotExists = 133;
	public static readonly RULE_ifExists = 134;
	public static readonly RULE_tablePropertyList = 135;
	public static readonly RULE_tableProperty = 136;
	public static readonly RULE_tablePropertyKey = 137;
	public static readonly RULE_tablePropertyValue = 138;
	public static readonly RULE_logicalOperator = 139;
	public static readonly RULE_comparisonOperator = 140;
	public static readonly RULE_bitOperator = 141;
	public static readonly RULE_mathOperator = 142;
	public static readonly RULE_unaryOperator = 143;
	public static readonly RULE_fullColumnName = 144;
	public static readonly RULE_constant = 145;
	public static readonly RULE_stringLiteral = 146;
	public static readonly RULE_decimalLiteral = 147;
	public static readonly RULE_booleanLiteral = 148;
	public static readonly RULE_setQuantifier = 149;
	public static readonly RULE_ansiNonReserved = 150;
	public static readonly RULE_strictNonReserved = 151;
	public static readonly RULE_nonReserved = 152;
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
		"valuesDefinition", "valuesRowDefinition", "insertMulStatement", "queryStatement", 
		"valuesCaluse", "withItem", "withItemName", "selectStatement", "selectClause", 
		"projectItemDefinition", "fromClause", "tableExpression", "tableReference", 
		"tablePrimary", "tablePath", "systemTimePeriod", "dateTimeExpression", 
		"joinCondition", "whereClause", "groupByClause", "groupItemDefinition", 
		"havingClause", "orderByCaluse", "orderItemDefition", "limitClause", "windowClause", 
		"namedWindow", "windowSpec", "sortItem", "windowFrame", "frameBound", 
		"expression", "booleanExpression", "predicate", "likePredicate", "valueExpression", 
		"primaryExpression", "functionName", "dereferenceDefinition", "correlationName", 
		"qualifiedName", "interval", "errorCapturingMultiUnitsInterval", "multiUnitsInterval", 
		"errorCapturingUnitToUnitInterval", "unitToUnitInterval", "intervalValue", 
		"columnAlias", "tableAlias", "errorCapturingIdentifier", "errorCapturingIdentifierExtra", 
		"identifierList", "identifierSeq", "identifier", "strictIdentifier", "unquotedIdentifier", 
		"quotedIdentifier", "whenClause", "uidList", "uid", "plusUid", "withOption", 
		"ifNotExists", "ifExists", "tablePropertyList", "tableProperty", "tablePropertyKey", 
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
			this.state = 306;
			this.statement();
			this.state = 307;
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
			this.state = 309;
			this.sqlStatements();
			this.state = 310;
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
			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4 || _la===6 || _la===36 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 570479885) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 12545) !== 0) || _la===212 || _la===213 || _la===303 || _la===306) {
				{
				this.state = 317;
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
				case 303:
					{
					this.state = 312;
					this.sqlStatement();
					this.state = 314;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 313;
						this.match(FlinkSqlParser.SEMICOLON);
						}
						break;
					}
					}
					break;
				case 306:
					{
					this.state = 316;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 321;
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
			this.state = 334;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 322;
				this.ddlStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 323;
				this.dmlStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 324;
				this.describeStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 325;
				this.explainStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 326;
				this.useStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 327;
				this.showStatememt();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 328;
				this.loadStatement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 329;
				this.unloadStatememt();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 330;
				this.setStatememt();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 331;
				this.resetStatememt();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 332;
				this.jarStatememt();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 333;
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
			this.state = 336;
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
			this.state = 352;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 338;
				this.createTable();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 339;
				this.createDatabase();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 340;
				this.createView();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 341;
				this.createFunction();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 342;
				this.createCatalog();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 343;
				this.alterTable();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 344;
				this.alertView();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 345;
				this.alterDatabase();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 346;
				this.alterFunction();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 347;
				this.dropCatalog();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 348;
				this.dropTable();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 349;
				this.dropDatabase();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 350;
				this.dropView();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 351;
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
			this.state = 356;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
			case 70:
			case 72:
			case 303:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 354;
				this.queryStatement(0);
				}
				break;
			case 78:
			case 80:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 355;
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
			this.state = 358;
			_la = this._input.LA(1);
			if(!(_la===36 || _la===84)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 359;
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
			this.state = 361;
			this.match(FlinkSqlParser.EXPLAIN);
			this.state = 365;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 87:
			case 88:
			case 89:
				{
				this.state = 362;
				this.explainDetails();
				}
				break;
			case 86:
				{
				this.state = 363;
				this.match(FlinkSqlParser.PLAN);
				this.state = 364;
				this.match(FlinkSqlParser.FOR);
				}
				break;
			case 4:
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
			this.state = 370;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 367;
				this.dmlStatement();
				}
				break;
			case 2:
				{
				this.state = 368;
				this.insertSimpleStatement();
				}
				break;
			case 3:
				{
				this.state = 369;
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
			this.state = 372;
			this.explainDetail();
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 373;
				this.match(FlinkSqlParser.COMMA);
				this.state = 374;
				this.explainDetail();
				}
				}
				this.state = 379;
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
			this.state = 380;
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
			this.state = 388;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 382;
				this.match(FlinkSqlParser.USE);
				this.state = 384;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===239) {
					{
					this.state = 383;
					this.match(FlinkSqlParser.CATALOG);
					}
				}

				this.state = 386;
				this.uid();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 387;
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
			this.state = 390;
			this.match(FlinkSqlParser.USE);
			this.state = 391;
			this.match(FlinkSqlParser.MODULES);
			this.state = 392;
			this.uid();
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 393;
				this.match(FlinkSqlParser.COMMA);
				this.state = 394;
				this.uid();
				}
				}
				this.state = 399;
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
			this.state = 435;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 400;
				this.match(FlinkSqlParser.SHOW);
				this.state = 401;
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
				this.state = 402;
				this.match(FlinkSqlParser.SHOW);
				this.state = 403;
				this.match(FlinkSqlParser.CURRENT);
				this.state = 404;
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
				this.state = 405;
				this.match(FlinkSqlParser.SHOW);
				this.state = 406;
				this.match(FlinkSqlParser.TABLES);
				this.state = 409;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===5 || _la===24) {
					{
					this.state = 407;
					_la = this._input.LA(1);
					if(!(_la===5 || _la===24)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 408;
					this.uid();
					}
				}

				this.state = 412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25 || _la===29) {
					{
					this.state = 411;
					this.likePredicate();
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 414;
				this.match(FlinkSqlParser.SHOW);
				this.state = 415;
				this.match(FlinkSqlParser.COLUMNS);
				this.state = 416;
				_la = this._input.LA(1);
				if(!(_la===5 || _la===24)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 417;
				this.uid();
				this.state = 419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25 || _la===29) {
					{
					this.state = 418;
					this.likePredicate();
					}
				}

				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 421;
				this.match(FlinkSqlParser.SHOW);
				this.state = 422;
				this.match(FlinkSqlParser.CREATE);
				this.state = 423;
				_la = this._input.LA(1);
				if(!(_la===74 || _la===76)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 424;
				this.uid();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 425;
				this.match(FlinkSqlParser.SHOW);
				this.state = 427;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 426;
					this.match(FlinkSqlParser.USER);
					}
				}

				this.state = 429;
				this.match(FlinkSqlParser.FUNCTIONS);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 430;
				this.match(FlinkSqlParser.SHOW);
				this.state = 432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===52) {
					{
					this.state = 431;
					this.match(FlinkSqlParser.FULL);
					}
				}

				this.state = 434;
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
			this.state = 437;
			this.match(FlinkSqlParser.LOAD);
			this.state = 438;
			this.match(FlinkSqlParser.MODULE);
			this.state = 439;
			this.uid();
			this.state = 442;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 440;
				this.match(FlinkSqlParser.WITH);
				this.state = 441;
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
			this.state = 444;
			this.match(FlinkSqlParser.UNLOAD);
			this.state = 445;
			this.match(FlinkSqlParser.MODULE);
			this.state = 446;
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
			this.state = 448;
			this.match(FlinkSqlParser.SET);
			this.state = 450;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 449;
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
			this.state = 452;
			this.match(FlinkSqlParser.RESET);
			this.state = 454;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 453;
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
			this.state = 456;
			_la = this._input.LA(1);
			if(!(_la===6 || _la===82)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 457;
			this.match(FlinkSqlParser.JAR);
			this.state = 458;
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
			this.state = 499;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 460;
				this.match(FlinkSqlParser.ADD);
				this.state = 461;
				this.match(FlinkSqlParser.JAR);
				this.state = 462;
				this.match(FlinkSqlParser.WITH);
				this.state = 463;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===7) {
					{
					this.state = 464;
					this.match(FlinkSqlParser.AS);
					this.state = 465;
					this.uid();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 468;
				this.match(FlinkSqlParser.ADD);
				this.state = 469;
				this.match(FlinkSqlParser.FILE);
				this.state = 470;
				this.match(FlinkSqlParser.WITH);
				this.state = 471;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 474;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===7) {
					{
					this.state = 472;
					this.match(FlinkSqlParser.AS);
					this.state = 473;
					this.uid();
					}
				}

				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===113) {
					{
					this.state = 476;
					this.match(FlinkSqlParser.RENAME);
					this.state = 477;
					this.uid();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 480;
				this.match(FlinkSqlParser.ADD);
				this.state = 481;
				_la = this._input.LA(1);
				if(!(((((_la - 246)) & ~0x1F) === 0 && ((1 << (_la - 246)) & 31) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 482;
				this.match(FlinkSqlParser.WITH);
				this.state = 483;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 484;
				this.match(FlinkSqlParser.RENAME);
				this.state = 485;
				this.uid();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 486;
				this.match(FlinkSqlParser.ADD);
				this.state = 487;
				this.match(FlinkSqlParser.PYTHON_PARAMETER);
				this.state = 488;
				this.match(FlinkSqlParser.FILE_PATH);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 489;
				this.match(FlinkSqlParser.ADD);
				this.state = 490;
				this.match(FlinkSqlParser.ENGINE);
				this.state = 491;
				this.match(FlinkSqlParser.FILE);
				this.state = 492;
				this.match(FlinkSqlParser.WITH);
				this.state = 493;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 494;
				this.match(FlinkSqlParser.RENAME);
				this.state = 495;
				this.uid();
				this.state = 496;
				this.match(FlinkSqlParser.KEY);
				this.state = 497;
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
			this.state = 503;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 501;
				this.simpleCreateTable();
				}
				break;
			case 2:
				{
				this.state = 502;
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
			this.state = 505;
			this.match(FlinkSqlParser.CREATE);
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===166) {
				{
				this.state = 506;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 509;
			this.match(FlinkSqlParser.TABLE);
			this.state = 511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 510;
				this.ifNotExists();
				}
			}

			this.state = 513;
			this.sourceTable();
			this.state = 514;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 515;
			this.columnOptionDefinition();
			this.state = 520;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 516;
					this.match(FlinkSqlParser.COMMA);
					this.state = 517;
					this.columnOptionDefinition();
					}
					}
				}
				this.state = 522;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 525;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 523;
				this.match(FlinkSqlParser.COMMA);
				this.state = 524;
				this.watermarkDefinition();
				}
				break;
			}
			this.state = 529;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 527;
				this.match(FlinkSqlParser.COMMA);
				this.state = 528;
				this.tableConstraint();
				}
				break;
			}
			this.state = 533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===305) {
				{
				this.state = 531;
				this.match(FlinkSqlParser.COMMA);
				this.state = 532;
				this.selfDefinitionClause();
				}
			}

			this.state = 535;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===115) {
				{
				this.state = 536;
				this.commentSpec();
				}
			}

			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===200) {
				{
				this.state = 539;
				this.partitionDefinition();
				}
			}

			this.state = 542;
			this.withOption();
			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===29) {
				{
				this.state = 543;
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
			this.state = 546;
			this.match(FlinkSqlParser.CREATE);
			this.state = 547;
			this.match(FlinkSqlParser.TABLE);
			this.state = 549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 548;
				this.ifNotExists();
				}
			}

			this.state = 551;
			this.sourceTable();
			this.state = 552;
			this.withOption();
			this.state = 555;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 553;
				this.match(FlinkSqlParser.AS);
				this.state = 554;
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
			this.state = 560;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 557;
				this.physicalColumnDefinition();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 558;
				this.metadataColumnDefinition();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 559;
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
			this.state = 562;
			this.columnName();
			this.state = 563;
			this.columnType();
			this.state = 565;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===185 || _la===256) {
				{
				this.state = 564;
				this.columnConstraint();
				}
			}

			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===115) {
				{
				this.state = 567;
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
			this.state = 572;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 570;
				this.plusUid();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 571;
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
			this.state = 574;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 575;
			this.columnName();
			this.state = 580;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 576;
				this.match(FlinkSqlParser.COMMA);
				this.state = 577;
				this.columnName();
				}
				}
				this.state = 582;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 583;
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
			this.state = 622;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 282:
			case 287:
			case 290:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 585;
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
				this.state = 586;
				localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & 136902905) !== 0))) {
				    localctx._typeName = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===303) {
					{
					this.state = 587;
					this.lengthOneDimension();
					}
				}

				}
				break;
			case 284:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 590;
				localctx._typeName = this.match(FlinkSqlParser.TIMESTAMP);
				this.state = 592;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===303) {
					{
					this.state = 591;
					this.lengthOneDimension();
					}
				}

				this.state = 600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===70 || _la===71) {
					{
					this.state = 594;
					_la = this._input.LA(1);
					if(!(_la===70 || _la===71)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 596;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===224) {
						{
						this.state = 595;
						this.match(FlinkSqlParser.LOCAL);
						}
					}

					this.state = 598;
					this.match(FlinkSqlParser.TIME);
					this.state = 599;
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
				this.state = 602;
				localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 272)) & ~0x1F) === 0 && ((1 << (_la - 272)) & 775) !== 0))) {
				    localctx._typeName = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 604;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===303) {
					{
					this.state = 603;
					this.lengthTwoOptionalDimension();
					}
				}

				}
				break;
			case 265:
			case 286:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 606;
				localctx._type_ = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===265 || _la===286)) {
				    localctx._type_ = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===294) {
					{
					this.state = 607;
					this.lengthOneTypeDimension();
					}
				}

				}
				break;
			case 266:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 610;
				localctx._type_ = this.match(FlinkSqlParser.MAP);
				this.state = 612;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===294) {
					{
					this.state = 611;
					this.mapTypeDimension();
					}
				}

				}
				break;
			case 289:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 614;
				localctx._type_ = this.match(FlinkSqlParser.ROW);
				this.state = 616;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===294) {
					{
					this.state = 615;
					this.rowTypeDimension();
					}
				}

				}
				break;
			case 288:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 618;
				localctx._type_ = this.match(FlinkSqlParser.RAW);
				this.state = 620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===303) {
					{
					this.state = 619;
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
			this.state = 624;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 625;
			this.decimalLiteral();
			this.state = 626;
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
			this.state = 628;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 629;
			this.decimalLiteral();
			this.state = 632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===305) {
				{
				this.state = 630;
				this.match(FlinkSqlParser.COMMA);
				this.state = 631;
				this.decimalLiteral();
				}
			}

			this.state = 634;
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
			this.state = 636;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 637;
			this.stringLiteral();
			this.state = 640;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===305) {
				{
				this.state = 638;
				this.match(FlinkSqlParser.COMMA);
				this.state = 639;
				this.stringLiteral();
				}
			}

			this.state = 642;
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
			this.state = 644;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 645;
			this.columnType();
			this.state = 646;
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
			this.state = 648;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 649;
			this.columnType();
			{
			this.state = 650;
			this.match(FlinkSqlParser.COMMA);
			this.state = 651;
			this.columnType();
			}
			this.state = 653;
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
			this.state = 655;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 656;
			this.columnName();
			this.state = 657;
			this.columnType();
			this.state = 664;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 658;
				this.match(FlinkSqlParser.COMMA);
				this.state = 659;
				this.columnName();
				this.state = 660;
				this.columnType();
				}
				}
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 667;
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
			this.state = 671;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===185) {
				{
				this.state = 669;
				this.match(FlinkSqlParser.CONSTRAINT);
				this.state = 670;
				this.constraintName();
				}
			}

			this.state = 673;
			this.match(FlinkSqlParser.PRIMARY);
			this.state = 674;
			this.match(FlinkSqlParser.KEY);
			this.state = 675;
			this.match(FlinkSqlParser.NOT);
			this.state = 676;
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
			this.state = 678;
			this.match(FlinkSqlParser.COMMENT);
			this.state = 679;
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
			this.state = 681;
			this.columnName();
			this.state = 682;
			this.columnType();
			this.state = 683;
			this.match(FlinkSqlParser.METADATA);
			this.state = 686;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 684;
				this.match(FlinkSqlParser.FROM);
				this.state = 685;
				this.metadataKey();
				}
			}

			this.state = 689;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===262) {
				{
				this.state = 688;
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
			this.state = 691;
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
			this.state = 693;
			this.columnName();
			this.state = 694;
			this.match(FlinkSqlParser.AS);
			this.state = 695;
			this.computedColumnExpression();
			this.state = 697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===115) {
				{
				this.state = 696;
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
			this.state = 699;
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
			this.state = 701;
			this.match(FlinkSqlParser.WATERMARK);
			this.state = 702;
			this.match(FlinkSqlParser.FOR);
			this.state = 703;
			this.expression();
			this.state = 704;
			this.match(FlinkSqlParser.AS);
			this.state = 705;
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
			this.state = 709;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===185) {
				{
				this.state = 707;
				this.match(FlinkSqlParser.CONSTRAINT);
				this.state = 708;
				this.constraintName();
				}
			}

			this.state = 711;
			this.match(FlinkSqlParser.PRIMARY);
			this.state = 712;
			this.match(FlinkSqlParser.KEY);
			this.state = 713;
			this.columnNameList();
			this.state = 714;
			this.match(FlinkSqlParser.NOT);
			this.state = 715;
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
			this.state = 717;
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
			this.state = 719;
			this.match(FlinkSqlParser.PERIOD);
			this.state = 720;
			this.match(FlinkSqlParser.FOR);
			this.state = 721;
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
			this.state = 723;
			this.match(FlinkSqlParser.PARTITIONED);
			this.state = 724;
			this.match(FlinkSqlParser.BY);
			this.state = 725;
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
			this.state = 727;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 728;
			this.transform();
			this.state = 733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 729;
				this.match(FlinkSqlParser.COMMA);
				this.state = 730;
				this.transform();
				}
				}
				this.state = 735;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 736;
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
			this.state = 751;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				localctx = new IdentityTransformContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 738;
				this.qualifiedName();
				}
				break;
			case 2:
				localctx = new ApplyTransformContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 739;
				(localctx as ApplyTransformContext)._transformName = this.identifier();
				this.state = 740;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 741;
				this.transformArgument();
				this.state = 746;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 742;
					this.match(FlinkSqlParser.COMMA);
					this.state = 743;
					this.transformArgument();
					}
					}
					this.state = 748;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 749;
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
			this.state = 755;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 753;
				this.qualifiedName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 754;
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
			this.state = 757;
			this.match(FlinkSqlParser.LIKE);
			this.state = 758;
			this.sourceTable();
			this.state = 767;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 759;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 763;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 233)) & ~0x1F) === 0 && ((1 << (_la - 233)) & 7) !== 0)) {
					{
					{
					this.state = 760;
					this.likeOption();
					}
					}
					this.state = 765;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 766;
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
			this.state = 769;
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
			this.state = 775;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 771;
				_la = this._input.LA(1);
				if(!(_la===233 || _la===234)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 772;
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
				this.state = 773;
				_la = this._input.LA(1);
				if(!(((((_la - 233)) & ~0x1F) === 0 && ((1 << (_la - 233)) & 7) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 774;
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
			this.state = 777;
			this.match(FlinkSqlParser.CREATE);
			this.state = 778;
			this.match(FlinkSqlParser.CATALOG);
			this.state = 779;
			this.uid();
			this.state = 780;
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
			this.state = 782;
			this.match(FlinkSqlParser.CREATE);
			this.state = 783;
			this.match(FlinkSqlParser.DATABASE);
			this.state = 785;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 784;
				this.ifNotExists();
				}
			}

			this.state = 787;
			this.uid();
			this.state = 789;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===115) {
				{
				this.state = 788;
				this.commentSpec();
				}
			}

			this.state = 791;
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
			this.state = 793;
			this.match(FlinkSqlParser.CREATE);
			this.state = 795;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===166) {
				{
				this.state = 794;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 797;
			this.match(FlinkSqlParser.VIEW);
			this.state = 799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 798;
				this.ifNotExists();
				}
			}

			this.state = 801;
			this.uid();
			this.state = 803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===303) {
				{
				this.state = 802;
				this.columnNameList();
				}
			}

			this.state = 806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===115) {
				{
				this.state = 805;
				this.commentSpec();
				}
			}

			this.state = 808;
			this.match(FlinkSqlParser.AS);
			this.state = 809;
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
			this.state = 811;
			this.match(FlinkSqlParser.CREATE);
			this.state = 815;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 812;
				this.match(FlinkSqlParser.TEMPORARY);
				}
				break;
			case 2:
				{
				this.state = 813;
				this.match(FlinkSqlParser.TEMPORARY);
				this.state = 814;
				this.match(FlinkSqlParser.SYSTEM);
				}
				break;
			}
			this.state = 817;
			this.match(FlinkSqlParser.FUNCTION);
			this.state = 819;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 818;
				this.ifNotExists();
				}
			}

			this.state = 821;
			this.uid();
			this.state = 822;
			this.match(FlinkSqlParser.AS);
			this.state = 823;
			this.identifier();
			this.state = 826;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===240) {
				{
				this.state = 824;
				this.match(FlinkSqlParser.LANGUAGE);
				this.state = 825;
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

			this.state = 829;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===143) {
				{
				this.state = 828;
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
			this.state = 831;
			this.match(FlinkSqlParser.USING);
			this.state = 832;
			this.match(FlinkSqlParser.JAR);
			this.state = 833;
			this.jarFileName();
			this.state = 839;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 834;
				this.match(FlinkSqlParser.COMMA);
				this.state = 835;
				this.match(FlinkSqlParser.JAR);
				this.state = 836;
				this.jarFileName();
				}
				}
				this.state = 841;
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
			this.state = 842;
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
			this.state = 844;
			this.match(FlinkSqlParser.ALTER);
			this.state = 845;
			this.match(FlinkSqlParser.TABLE);
			this.state = 846;
			this.uid();
			this.state = 849;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 113:
				{
				this.state = 847;
				this.renameDefinition();
				}
				break;
			case 116:
				{
				this.state = 848;
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
			this.state = 851;
			this.match(FlinkSqlParser.RENAME);
			this.state = 852;
			this.match(FlinkSqlParser.TO);
			this.state = 853;
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
			this.state = 855;
			this.match(FlinkSqlParser.SET);
			this.state = 856;
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
			this.state = 858;
			this.match(FlinkSqlParser.ALTER);
			this.state = 859;
			this.match(FlinkSqlParser.VIEW);
			this.state = 860;
			this.uid();
			this.state = 864;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 113:
				{
				this.state = 861;
				this.renameDefinition();
				}
				break;
			case 7:
				{
				this.state = 862;
				this.match(FlinkSqlParser.AS);
				this.state = 863;
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
			this.state = 866;
			this.match(FlinkSqlParser.ALTER);
			this.state = 867;
			this.match(FlinkSqlParser.DATABASE);
			this.state = 868;
			this.uid();
			this.state = 869;
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
			this.state = 871;
			this.match(FlinkSqlParser.ALTER);
			this.state = 875;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 872;
				this.match(FlinkSqlParser.TEMPORARY);
				}
				break;
			case 2:
				{
				this.state = 873;
				this.match(FlinkSqlParser.TEMPORARY);
				this.state = 874;
				this.match(FlinkSqlParser.SYSTEM);
				}
				break;
			}
			this.state = 877;
			this.match(FlinkSqlParser.FUNCTION);
			this.state = 879;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 878;
				this.ifExists();
				}
			}

			this.state = 881;
			this.uid();
			this.state = 882;
			this.match(FlinkSqlParser.AS);
			this.state = 883;
			this.identifier();
			this.state = 886;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===240) {
				{
				this.state = 884;
				this.match(FlinkSqlParser.LANGUAGE);
				this.state = 885;
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
			this.state = 888;
			this.match(FlinkSqlParser.DROP);
			this.state = 889;
			this.match(FlinkSqlParser.CATALOG);
			this.state = 891;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 890;
				this.ifExists();
				}
			}

			this.state = 893;
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
			this.state = 895;
			this.match(FlinkSqlParser.DROP);
			this.state = 897;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===166) {
				{
				this.state = 896;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 899;
			this.match(FlinkSqlParser.TABLE);
			this.state = 901;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 900;
				this.ifExists();
				}
			}

			this.state = 903;
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
			this.state = 905;
			this.match(FlinkSqlParser.DROP);
			this.state = 906;
			this.match(FlinkSqlParser.DATABASE);
			this.state = 908;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 907;
				this.ifExists();
				}
			}

			this.state = 910;
			this.uid();
			this.state = 912;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===184 || _la===186) {
				{
				this.state = 911;
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
			this.state = 914;
			this.match(FlinkSqlParser.DROP);
			this.state = 916;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===166) {
				{
				this.state = 915;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 918;
			this.match(FlinkSqlParser.VIEW);
			this.state = 920;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 919;
				this.ifExists();
				}
			}

			this.state = 922;
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
			this.state = 924;
			this.match(FlinkSqlParser.DROP);
			this.state = 928;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 925;
				this.match(FlinkSqlParser.TEMPORARY);
				}
				break;
			case 2:
				{
				this.state = 926;
				this.match(FlinkSqlParser.TEMPORARY);
				this.state = 927;
				this.match(FlinkSqlParser.SYSTEM);
				}
				break;
			}
			this.state = 930;
			this.match(FlinkSqlParser.FUNCTION);
			this.state = 932;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 931;
				this.ifExists();
				}
			}

			this.state = 934;
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
			this.state = 942;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 937;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===78) {
					{
					this.state = 936;
					this.match(FlinkSqlParser.EXECUTE);
					}
				}

				this.state = 939;
				this.insertSimpleStatement();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 940;
				this.match(FlinkSqlParser.EXECUTE);
				this.state = 941;
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
			this.state = 944;
			this.match(FlinkSqlParser.INSERT);
			this.state = 945;
			_la = this._input.LA(1);
			if(!(_la===83 || _la===140)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 946;
			this.uid();
			this.state = 955;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				this.state = 948;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===60) {
					{
					this.state = 947;
					this.insertPartitionDefinition();
					}
				}

				this.state = 951;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
				case 1:
					{
					this.state = 950;
					this.columnNameList();
					}
					break;
				}
				this.state = 953;
				this.queryStatement(0);
				}
				break;
			case 2:
				{
				this.state = 954;
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
			this.state = 957;
			this.match(FlinkSqlParser.PARTITION);
			this.state = 958;
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
			this.state = 960;
			this.match(FlinkSqlParser.VALUES);
			this.state = 961;
			this.valuesRowDefinition();
			this.state = 966;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 962;
				this.match(FlinkSqlParser.COMMA);
				this.state = 963;
				this.valuesRowDefinition();
				}
				}
				this.state = 968;
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
			this.state = 969;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 970;
			this.constant();
			this.state = 975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 971;
				this.match(FlinkSqlParser.COMMA);
				this.state = 972;
				this.constant();
				}
				}
				this.state = 977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 978;
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
		this.enterRule(localctx, 146, FlinkSqlParser.RULE_insertMulStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 980;
			this.match(FlinkSqlParser.STATEMENT);
			this.state = 981;
			this.match(FlinkSqlParser.SET);
			this.state = 982;
			this.match(FlinkSqlParser.BEGIN);
			this.state = 986;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 983;
				this.insertSimpleStatement();
				this.state = 984;
				this.match(FlinkSqlParser.SEMICOLON);
				}
				}
				this.state = 988;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===80);
			this.state = 990;
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
		let _startState: number = 148;
		this.enterRecursionRule(localctx, 148, FlinkSqlParser.RULE_queryStatement, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1023;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				this.state = 993;
				this.valuesCaluse();
				}
				break;
			case 2:
				{
				this.state = 994;
				this.match(FlinkSqlParser.WITH);
				this.state = 995;
				this.withItem();
				this.state = 1000;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 996;
					this.match(FlinkSqlParser.COMMA);
					this.state = 997;
					this.withItem();
					}
					}
					this.state = 1002;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1003;
				this.queryStatement(5);
				}
				break;
			case 3:
				{
				this.state = 1005;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1006;
				this.queryStatement(0);
				this.state = 1007;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				{
				this.state = 1009;
				this.selectClause();
				this.state = 1011;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 1010;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1014;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 1013;
					this.limitClause();
					}
					break;
				}
				}
				break;
			case 5:
				{
				this.state = 1016;
				this.selectStatement();
				this.state = 1018;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 103, this._ctx) ) {
				case 1:
					{
					this.state = 1017;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1021;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 1020;
					this.limitClause();
					}
					break;
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1039;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 109, this._ctx);
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
					this.state = 1025;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 1026;
					localctx._operator = this._input.LT(1);
					_la = this._input.LA(1);
					if(!(((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 11) !== 0))) {
					    localctx._operator = this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1028;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===8) {
						{
						this.state = 1027;
						this.match(FlinkSqlParser.ALL);
						}
					}

					this.state = 1030;
					localctx._right = this.queryStatement(0);
					this.state = 1032;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
					case 1:
						{
						this.state = 1031;
						this.orderByCaluse();
						}
						break;
					}
					this.state = 1035;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
					case 1:
						{
						this.state = 1034;
						this.limitClause();
						}
						break;
					}
					}
					}
				}
				this.state = 1041;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 109, this._ctx);
			}
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 150, FlinkSqlParser.RULE_valuesCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1042;
			this.match(FlinkSqlParser.VALUES);
			this.state = 1043;
			this.expression();
			this.state = 1048;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 110, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1044;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1045;
					this.expression();
					}
					}
				}
				this.state = 1050;
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
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public withItem(): WithItemContext {
		let localctx: WithItemContext = new WithItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, FlinkSqlParser.RULE_withItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1051;
			this.withItemName();
			this.state = 1063;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===303) {
				{
				this.state = 1052;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1053;
				this.columnName();
				this.state = 1058;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1054;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1055;
					this.columnName();
					}
					}
					this.state = 1060;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1061;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
			}

			this.state = 1065;
			this.match(FlinkSqlParser.AS);
			this.state = 1066;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1067;
			this.queryStatement(0);
			this.state = 1068;
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
		this.enterRule(localctx, 154, FlinkSqlParser.RULE_withItemName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1070;
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
		this.enterRule(localctx, 156, FlinkSqlParser.RULE_selectStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1072;
			this.selectClause();
			this.state = 1073;
			this.fromClause();
			this.state = 1075;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				{
				this.state = 1074;
				this.whereClause();
				}
				break;
			}
			this.state = 1078;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 1077;
				this.groupByClause();
				}
				break;
			}
			this.state = 1081;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				{
				this.state = 1080;
				this.havingClause();
				}
				break;
			}
			this.state = 1084;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				{
				this.state = 1083;
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
		this.enterRule(localctx, 158, FlinkSqlParser.RULE_selectClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1086;
			this.match(FlinkSqlParser.SELECT);
			this.state = 1088;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1087;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1099;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				{
				this.state = 1090;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;
			case 2:
				{
				this.state = 1091;
				this.projectItemDefinition();
				this.state = 1096;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 118, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1092;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1093;
						this.projectItemDefinition();
						}
						}
					}
					this.state = 1098;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 118, this._ctx);
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
		this.enterRule(localctx, 160, FlinkSqlParser.RULE_projectItemDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1101;
			this.expression();
			this.state = 1106;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				{
				this.state = 1103;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
				case 1:
					{
					this.state = 1102;
					this.match(FlinkSqlParser.AS);
					}
					break;
				}
				this.state = 1105;
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
		this.enterRule(localctx, 162, FlinkSqlParser.RULE_fromClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1108;
			this.match(FlinkSqlParser.FROM);
			this.state = 1109;
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
		let _startState: number = 164;
		this.enterRecursionRule(localctx, 164, FlinkSqlParser.RULE_tableExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1112;
			this.tableReference();
			this.state = 1117;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 122, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1113;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1114;
					this.tableReference();
					}
					}
				}
				this.state = 1119;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 122, this._ctx);
			}
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1141;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 128, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1139;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
					case 1:
						{
						localctx = new TableExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_tableExpression);
						this.state = 1120;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1121;
						this.match(FlinkSqlParser.CROSS);
						this.state = 1122;
						this.match(FlinkSqlParser.JOIN);
						this.state = 1123;
						this.tableExpression(2);
						}
						break;
					case 2:
						{
						localctx = new TableExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_tableExpression);
						this.state = 1124;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1126;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===54) {
							{
							this.state = 1125;
							this.match(FlinkSqlParser.NATURAL);
							}
						}

						this.state = 1129;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 27) !== 0)) {
							{
							this.state = 1128;
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

						this.state = 1132;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===47) {
							{
							this.state = 1131;
							this.match(FlinkSqlParser.OUTER);
							}
						}

						this.state = 1134;
						this.match(FlinkSqlParser.JOIN);
						this.state = 1135;
						this.tableExpression(0);
						this.state = 1137;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
						case 1:
							{
							this.state = 1136;
							this.joinCondition();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1143;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 128, this._ctx);
			}
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 166, FlinkSqlParser.RULE_tableReference);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1144;
			this.tablePrimary();
			this.state = 1146;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				{
				this.state = 1145;
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
		this.enterRule(localctx, 168, FlinkSqlParser.RULE_tablePrimary);
		let _la: number;
		try {
			this.state = 1189;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===74) {
					{
					this.state = 1148;
					this.match(FlinkSqlParser.TABLE);
					}
				}

				this.state = 1151;
				this.tablePath();
				this.state = 1153;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
				case 1:
					{
					this.state = 1152;
					this.systemTimePeriod();
					}
					break;
				}
				this.state = 1159;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 133, this._ctx) ) {
				case 1:
					{
					this.state = 1156;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 132, this._ctx) ) {
					case 1:
						{
						this.state = 1155;
						this.match(FlinkSqlParser.AS);
						}
						break;
					}
					this.state = 1158;
					this.correlationName();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1161;
				this.match(FlinkSqlParser.LATERAL);
				this.state = 1162;
				this.match(FlinkSqlParser.TABLE);
				this.state = 1163;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1164;
				this.functionName();
				this.state = 1165;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1166;
				this.expression();
				this.state = 1171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1167;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1168;
					this.expression();
					}
					}
					this.state = 1173;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1174;
				this.match(FlinkSqlParser.RR_BRACKET);
				this.state = 1175;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===57) {
					{
					this.state = 1177;
					this.match(FlinkSqlParser.LATERAL);
					}
				}

				this.state = 1180;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1181;
				this.queryStatement(0);
				this.state = 1182;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1184;
				this.match(FlinkSqlParser.UNNEST);
				this.state = 1185;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1186;
				this.expression();
				this.state = 1187;
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
		this.enterRule(localctx, 170, FlinkSqlParser.RULE_tablePath);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1191;
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
		this.enterRule(localctx, 172, FlinkSqlParser.RULE_systemTimePeriod);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1193;
			this.match(FlinkSqlParser.FOR);
			this.state = 1194;
			this.match(FlinkSqlParser.SYSTEM_TIME);
			this.state = 1195;
			this.match(FlinkSqlParser.AS);
			this.state = 1196;
			this.match(FlinkSqlParser.OF);
			this.state = 1197;
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
		this.enterRule(localctx, 174, FlinkSqlParser.RULE_dateTimeExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1199;
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
		this.enterRule(localctx, 176, FlinkSqlParser.RULE_joinCondition);
		let _la: number;
		try {
			this.state = 1215;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 55:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1201;
				this.match(FlinkSqlParser.ON);
				this.state = 1202;
				this.booleanExpression(0);
				}
				break;
			case 143:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1203;
				this.match(FlinkSqlParser.USING);
				this.state = 1204;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1205;
				this.uid();
				this.state = 1210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1206;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1207;
					this.uid();
					}
					}
					this.state = 1212;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1213;
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
		this.enterRule(localctx, 178, FlinkSqlParser.RULE_whereClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1217;
			this.match(FlinkSqlParser.WHERE);
			this.state = 1218;
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
		this.enterRule(localctx, 180, FlinkSqlParser.RULE_groupByClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1220;
			this.match(FlinkSqlParser.GROUP);
			this.state = 1221;
			this.match(FlinkSqlParser.BY);
			this.state = 1222;
			this.groupItemDefinition();
			this.state = 1227;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 139, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1223;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1224;
					this.groupItemDefinition();
					}
					}
				}
				this.state = 1229;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 139, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 182, FlinkSqlParser.RULE_groupItemDefinition);
		let _la: number;
		try {
			this.state = 1281;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1230;
				this.expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1231;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1232;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1233;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1234;
				this.expression();
				this.state = 1239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1235;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1236;
					this.expression();
					}
					}
					this.state = 1241;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1242;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1244;
				this.match(FlinkSqlParser.CUBE);
				this.state = 1245;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1246;
				this.expression();
				this.state = 1251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1247;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1248;
					this.expression();
					}
					}
					this.state = 1253;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1254;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1256;
				this.match(FlinkSqlParser.ROLLUP);
				this.state = 1257;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1258;
				this.expression();
				this.state = 1263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1259;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1260;
					this.expression();
					}
					}
					this.state = 1265;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1266;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1268;
				this.match(FlinkSqlParser.GROUPING);
				this.state = 1269;
				this.match(FlinkSqlParser.SETS);
				this.state = 1270;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1271;
				this.groupItemDefinition();
				this.state = 1276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1272;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1273;
					this.groupItemDefinition();
					}
					}
					this.state = 1278;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1279;
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
		this.enterRule(localctx, 184, FlinkSqlParser.RULE_havingClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1283;
			this.match(FlinkSqlParser.HAVING);
			this.state = 1284;
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
		this.enterRule(localctx, 186, FlinkSqlParser.RULE_orderByCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1286;
			this.match(FlinkSqlParser.ORDER);
			this.state = 1287;
			this.match(FlinkSqlParser.BY);
			this.state = 1288;
			this.orderItemDefition();
			this.state = 1293;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 145, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1289;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1290;
					this.orderItemDefition();
					}
					}
				}
				this.state = 1295;
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
	public orderItemDefition(): OrderItemDefitionContext {
		let localctx: OrderItemDefitionContext = new OrderItemDefitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, FlinkSqlParser.RULE_orderItemDefition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1296;
			this.expression();
			this.state = 1298;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1297;
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
		this.enterRule(localctx, 190, FlinkSqlParser.RULE_limitClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1300;
			this.match(FlinkSqlParser.LIMIT);
			this.state = 1303;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				{
				this.state = 1301;
				this.match(FlinkSqlParser.ALL);
				}
				break;
			case 2:
				{
				this.state = 1302;
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
		this.enterRule(localctx, 192, FlinkSqlParser.RULE_windowClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1305;
			this.match(FlinkSqlParser.WINDOW);
			this.state = 1306;
			this.namedWindow();
			this.state = 1311;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 148, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1307;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1308;
					this.namedWindow();
					}
					}
				}
				this.state = 1313;
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
	public namedWindow(): NamedWindowContext {
		let localctx: NamedWindowContext = new NamedWindowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, FlinkSqlParser.RULE_namedWindow);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1314;
			localctx._name = this.errorCapturingIdentifier();
			this.state = 1315;
			this.match(FlinkSqlParser.AS);
			this.state = 1316;
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
		this.enterRule(localctx, 196, FlinkSqlParser.RULE_windowSpec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 4294967295) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 4294967167) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 4291015671) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 4294967295) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & 4294967295) !== 0) || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & 4294967295) !== 0) || ((((_la - 198)) & ~0x1F) === 0 && ((1 << (_la - 198)) & 4294934527) !== 0) || ((((_la - 230)) & ~0x1F) === 0 && ((1 << (_la - 230)) & 1031800543) !== 0) || ((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & 266320383) !== 0) || ((((_la - 322)) & ~0x1F) === 0 && ((1 << (_la - 322)) & 19) !== 0)) {
				{
				this.state = 1318;
				localctx._name = this.errorCapturingIdentifier();
				}
			}

			this.state = 1321;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 1322;
				this.match(FlinkSqlParser.ORDER);
				this.state = 1323;
				this.match(FlinkSqlParser.BY);
				this.state = 1324;
				this.sortItem();
				this.state = 1329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1325;
					this.match(FlinkSqlParser.COMMA);
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

			this.state = 1344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===60) {
				{
				this.state = 1334;
				this.match(FlinkSqlParser.PARTITION);
				this.state = 1335;
				this.match(FlinkSqlParser.BY);
				this.state = 1336;
				this.expression();
				this.state = 1341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1337;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1338;
					this.expression();
					}
					}
					this.state = 1343;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===61 || _la===62) {
				{
				this.state = 1346;
				this.windowFrame();
				}
			}

			this.state = 1349;
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
		this.enterRule(localctx, 198, FlinkSqlParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1351;
			this.expression();
			this.state = 1353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===35 || _la===36) {
				{
				this.state = 1352;
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

			this.state = 1357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 1355;
				this.match(FlinkSqlParser.NULLS);
				this.state = 1356;
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
		this.enterRule(localctx, 200, FlinkSqlParser.RULE_windowFrame);
		try {
			this.state = 1363;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 61:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1359;
				this.match(FlinkSqlParser.RANGE);
				this.state = 1360;
				this.frameBound();
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1361;
				this.match(FlinkSqlParser.ROWS);
				this.state = 1362;
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
		this.enterRule(localctx, 202, FlinkSqlParser.RULE_frameBound);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1365;
			this.expression();
			this.state = 1366;
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
		this.enterRule(localctx, 204, FlinkSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1368;
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
		let _startState: number = 206;
		this.enterRecursionRule(localctx, 206, FlinkSqlParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1382;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				{
				localctx = new LogicalNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1371;
				this.match(FlinkSqlParser.NOT);
				this.state = 1372;
				this.booleanExpression(5);
				}
				break;
			case 2:
				{
				localctx = new ExistsContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1373;
				this.match(FlinkSqlParser.EXISTS);
				this.state = 1374;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1375;
				this.queryStatement(0);
				this.state = 1376;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				{
				localctx = new PredicatedContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1378;
				this.valueExpression(0);
				this.state = 1380;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 158, this._ctx) ) {
				case 1:
					{
					this.state = 1379;
					this.predicate();
					}
					break;
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1392;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1390;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 160, this._ctx) ) {
					case 1:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1384;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1385;
						(localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.AND);
						this.state = 1386;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;
					case 2:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1387;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1388;
						(localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.OR);
						this.state = 1389;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1394;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
			}
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 208, FlinkSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1478;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1395;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1398;
				localctx._kind = this.match(FlinkSqlParser.BETWEEN);
				this.state = 1399;
				localctx._lower = this.valueExpression(0);
				this.state = 1400;
				this.match(FlinkSqlParser.AND);
				this.state = 1401;
				localctx._upper = this.valueExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1403;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1406;
				localctx._kind = this.match(FlinkSqlParser.IN);
				this.state = 1407;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1408;
				this.expression();
				this.state = 1413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===305) {
					{
					{
					this.state = 1409;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1410;
					this.expression();
					}
					}
					this.state = 1415;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1416;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1418;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1421;
				localctx._kind = this.match(FlinkSqlParser.IN);
				this.state = 1422;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1423;
				this.queryStatement(0);
				this.state = 1424;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1426;
				localctx._kind = this.match(FlinkSqlParser.EXISTS);
				this.state = 1427;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1428;
				this.queryStatement(0);
				this.state = 1429;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1431;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1434;
				localctx._kind = this.match(FlinkSqlParser.RLIKE);
				this.state = 1435;
				localctx._pattern = this.valueExpression(0);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1436;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1439;
				localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 1440;
				localctx._quantifier = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===8 || _la===9)) {
				    localctx._quantifier = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1454;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 169, this._ctx) ) {
				case 1:
					{
					this.state = 1441;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1442;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				case 2:
					{
					this.state = 1443;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1444;
					this.expression();
					this.state = 1449;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===305) {
						{
						{
						this.state = 1445;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1446;
						this.expression();
						}
						}
						this.state = 1451;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1452;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				}
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1457;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1456;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1459;
				localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 1460;
				localctx._pattern = this.valueExpression(0);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1461;
				this.match(FlinkSqlParser.IS);
				this.state = 1463;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1462;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1465;
				localctx._kind = this.match(FlinkSqlParser.NULL);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1466;
				this.match(FlinkSqlParser.IS);
				this.state = 1468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1467;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1470;
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
				this.state = 1471;
				this.match(FlinkSqlParser.IS);
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
				localctx._kind = this.match(FlinkSqlParser.DISTINCT);
				this.state = 1476;
				this.match(FlinkSqlParser.FROM);
				this.state = 1477;
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
		this.enterRule(localctx, 210, FlinkSqlParser.RULE_likePredicate);
		let _la: number;
		try {
			this.state = 1505;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1481;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1480;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1483;
				localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 1484;
				localctx._quantifier = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===8 || _la===9)) {
				    localctx._quantifier = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1498;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 177, this._ctx) ) {
				case 1:
					{
					this.state = 1485;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1486;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				case 2:
					{
					this.state = 1487;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1488;
					this.expression();
					this.state = 1493;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===305) {
						{
						{
						this.state = 1489;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1490;
						this.expression();
						}
						}
						this.state = 1495;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1496;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1501;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1500;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1503;
				localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 1504;
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
		let _startState: number = 212;
		this.enterRecursionRule(localctx, 212, FlinkSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1511;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				{
				localctx = new ValueExpressionDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1508;
				this.primaryExpression(0);
				}
				break;
			case 2:
				{
				localctx = new ArithmeticUnaryContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1509;
				(localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 786433) !== 0))) {
				    (localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1510;
				this.valueExpression(7);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1534;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 182, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1532;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
					case 1:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1513;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1514;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===132 || ((((_la - 312)) & ~0x1F) === 0 && ((1 << (_la - 312)) & 145) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1515;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
						}
						break;
					case 2:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1516;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1517;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 314)) & ~0x1F) === 0 && ((1 << (_la - 314)) & 11) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1518;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
						}
						break;
					case 3:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1519;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1520;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_AND_OP);
						this.state = 1521;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
						}
						break;
					case 4:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1522;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1523;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_XOR_OP);
						this.state = 1524;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;
					case 5:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1525;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1526;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_OR_OP);
						this.state = 1527;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;
					case 6:
						{
						localctx = new ComparisonContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1528;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1529;
						this.comparisonOperator();
						this.state = 1530;
						(localctx as ComparisonContext)._right = this.valueExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1536;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 182, this._ctx);
			}
			}
		}
		catch (re) {
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
		let _startState: number = 214;
		this.enterRecursionRule(localctx, 214, FlinkSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1628;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				{
				localctx = new SearchedCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1538;
				this.match(FlinkSqlParser.CASE);
				this.state = 1540;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1539;
					this.whenClause();
					}
					}
					this.state = 1542;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===40);
				this.state = 1546;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===42) {
					{
					this.state = 1544;
					this.match(FlinkSqlParser.ELSE);
					this.state = 1545;
					(localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1548;
				this.match(FlinkSqlParser.END);
				}
				break;
			case 2:
				{
				localctx = new SimpleCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1550;
				this.match(FlinkSqlParser.CASE);
				this.state = 1551;
				(localctx as SimpleCaseContext)._value = this.expression();
				this.state = 1553;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1552;
					this.whenClause();
					}
					}
					this.state = 1555;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===40);
				this.state = 1559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===42) {
					{
					this.state = 1557;
					this.match(FlinkSqlParser.ELSE);
					this.state = 1558;
					(localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1561;
				this.match(FlinkSqlParser.END);
				}
				break;
			case 3:
				{
				localctx = new CastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1563;
				this.match(FlinkSqlParser.CAST);
				this.state = 1564;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1565;
				this.expression();
				this.state = 1566;
				this.match(FlinkSqlParser.AS);
				this.state = 1567;
				this.columnType();
				this.state = 1568;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				{
				localctx = new FirstContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1570;
				this.match(FlinkSqlParser.FIRST);
				this.state = 1571;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1572;
				this.expression();
				this.state = 1575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===124) {
					{
					this.state = 1573;
					this.match(FlinkSqlParser.IGNORE);
					this.state = 1574;
					this.match(FlinkSqlParser.NULLS);
					}
				}

				this.state = 1577;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 5:
				{
				localctx = new LastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1579;
				this.match(FlinkSqlParser.LAST);
				this.state = 1580;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1581;
				this.expression();
				this.state = 1584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===124) {
					{
					this.state = 1582;
					this.match(FlinkSqlParser.IGNORE);
					this.state = 1583;
					this.match(FlinkSqlParser.NULLS);
					}
				}

				this.state = 1586;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 6:
				{
				localctx = new PositionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1588;
				this.match(FlinkSqlParser.POSITION);
				this.state = 1589;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1590;
				(localctx as PositionContext)._substr = this.valueExpression(0);
				this.state = 1591;
				this.match(FlinkSqlParser.IN);
				this.state = 1592;
				(localctx as PositionContext)._str = this.valueExpression(0);
				this.state = 1593;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 7:
				{
				localctx = new ConstantDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1595;
				this.constant();
				}
				break;
			case 8:
				{
				localctx = new StarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1596;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;
			case 9:
				{
				localctx = new StarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1597;
				this.uid();
				this.state = 1598;
				this.match(FlinkSqlParser.DOT);
				this.state = 1599;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;
			case 10:
				{
				localctx = new SubqueryExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1601;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1602;
				this.queryStatement(0);
				this.state = 1603;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 11:
				{
				localctx = new FunctionCallContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1605;
				this.functionName();
				this.state = 1606;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1618;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 4294967295) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 4294967167) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 4291015671) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 4294967295) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & 4294967295) !== 0) || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & 4294967295) !== 0) || ((((_la - 198)) & ~0x1F) === 0 && ((1 << (_la - 198)) & 4294934527) !== 0) || ((((_la - 230)) & ~0x1F) === 0 && ((1 << (_la - 230)) & 1031800543) !== 0) || ((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & 266320383) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 2081226881) !== 0)) {
					{
					this.state = 1608;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 189, this._ctx) ) {
					case 1:
						{
						this.state = 1607;
						this.setQuantifier();
						}
						break;
					}
					this.state = 1610;
					this.expression();
					this.state = 1615;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===305) {
						{
						{
						this.state = 1611;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1612;
						this.expression();
						}
						}
						this.state = 1617;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1620;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 12:
				{
				localctx = new ColumnReferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1622;
				this.identifier();
				}
				break;
			case 13:
				{
				localctx = new DereferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1623;
				this.dereferenceDefinition();
				}
				break;
			case 14:
				{
				localctx = new ParenthesizedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1624;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1625;
				this.expression();
				this.state = 1626;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1637;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 193, this._ctx);
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
					this.state = 1630;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 1631;
					this.match(FlinkSqlParser.LS_BRACKET);
					this.state = 1632;
					(localctx as SubscriptContext)._index = this.valueExpression(0);
					this.state = 1633;
					this.match(FlinkSqlParser.RS_BRACKET);
					}
					}
				}
				this.state = 1639;
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
	public functionName(): FunctionNameContext {
		let localctx: FunctionNameContext = new FunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, FlinkSqlParser.RULE_functionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1640;
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
		this.enterRule(localctx, 218, FlinkSqlParser.RULE_dereferenceDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1642;
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
		this.enterRule(localctx, 220, FlinkSqlParser.RULE_correlationName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1644;
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
		this.enterRule(localctx, 222, FlinkSqlParser.RULE_qualifiedName);
		try {
			this.state = 1648;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1646;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1647;
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
		this.enterRule(localctx, 224, FlinkSqlParser.RULE_interval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1650;
			this.match(FlinkSqlParser.INTERVAL);
			this.state = 1653;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				{
				this.state = 1651;
				this.errorCapturingMultiUnitsInterval();
				}
				break;
			case 2:
				{
				this.state = 1652;
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
		this.enterRule(localctx, 226, FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1655;
			this.multiUnitsInterval();
			this.state = 1657;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
			case 1:
				{
				this.state = 1656;
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
		this.enterRule(localctx, 228, FlinkSqlParser.RULE_multiUnitsInterval);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1662;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1659;
					this.intervalValue();
					this.state = 1660;
					this.identifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1664;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 197, this._ctx);
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
		this.enterRule(localctx, 230, FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1666;
			localctx._body = this.unitToUnitInterval();
			this.state = 1669;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 198, this._ctx) ) {
			case 1:
				{
				this.state = 1667;
				localctx._error1 = this.multiUnitsInterval();
				}
				break;
			case 2:
				{
				this.state = 1668;
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
		this.enterRule(localctx, 232, FlinkSqlParser.RULE_unitToUnitInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1671;
			localctx._value = this.intervalValue();
			this.state = 1672;
			localctx._from_ = this.identifier();
			this.state = 1673;
			this.match(FlinkSqlParser.TO);
			this.state = 1674;
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
		this.enterRule(localctx, 234, FlinkSqlParser.RULE_intervalValue);
		let _la: number;
		try {
			this.state = 1681;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 314:
			case 315:
			case 323:
			case 324:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===314 || _la===315) {
					{
					this.state = 1676;
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

				this.state = 1679;
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
				this.state = 1680;
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
		this.enterRule(localctx, 236, FlinkSqlParser.RULE_columnAlias);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1684;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 201, this._ctx) ) {
			case 1:
				{
				this.state = 1683;
				this.match(FlinkSqlParser.AS);
				}
				break;
			}
			this.state = 1686;
			this.strictIdentifier();
			this.state = 1688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===303) {
				{
				this.state = 1687;
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
		this.enterRule(localctx, 238, FlinkSqlParser.RULE_tableAlias);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1691;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				{
				this.state = 1690;
				this.match(FlinkSqlParser.AS);
				}
				break;
			}
			this.state = 1693;
			this.strictIdentifier();
			this.state = 1695;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 204, this._ctx) ) {
			case 1:
				{
				this.state = 1694;
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
		this.enterRule(localctx, 240, FlinkSqlParser.RULE_errorCapturingIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1697;
			this.identifier();
			this.state = 1698;
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
		this.enterRule(localctx, 242, FlinkSqlParser.RULE_errorCapturingIdentifierExtra);
		let _la: number;
		try {
			this.state = 1707;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 131:
				localctx = new ErrorIdentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1702;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1700;
					this.match(FlinkSqlParser.MINUS);
					this.state = 1701;
					this.identifier();
					}
					}
					this.state = 1704;
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
		this.enterRule(localctx, 244, FlinkSqlParser.RULE_identifierList);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1709;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1710;
			this.identifierSeq();
			this.state = 1711;
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
		this.enterRule(localctx, 246, FlinkSqlParser.RULE_identifierSeq);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1713;
			this.identifier();
			this.state = 1718;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 1714;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1715;
				this.identifier();
				}
				}
				this.state = 1720;
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
		this.enterRule(localctx, 248, FlinkSqlParser.RULE_identifier);
		try {
			this.state = 1723;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1721;
				this.strictIdentifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1722;
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
		this.enterRule(localctx, 250, FlinkSqlParser.RULE_strictIdentifier);
		try {
			this.state = 1729;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
			case 1:
				localctx = new UnquotedIdentifierAlternativeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1725;
				this.unquotedIdentifier();
				}
				break;
			case 2:
				localctx = new QuotedIdentifierAlternativeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1726;
				this.quotedIdentifier();
				}
				break;
			case 3:
				localctx = new AnsiNonReservedKeywordsContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1727;
				this.ansiNonReserved();
				}
				break;
			case 4:
				localctx = new NonReservedKeywordsContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1728;
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
		this.enterRule(localctx, 252, FlinkSqlParser.RULE_unquotedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1731;
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
		this.enterRule(localctx, 254, FlinkSqlParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1733;
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
		this.enterRule(localctx, 256, FlinkSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1735;
			this.match(FlinkSqlParser.WHEN);
			this.state = 1736;
			localctx._condition = this.expression();
			this.state = 1737;
			this.match(FlinkSqlParser.THEN);
			this.state = 1738;
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
		this.enterRule(localctx, 258, FlinkSqlParser.RULE_uidList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1740;
			this.uid();
			this.state = 1745;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 1741;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1742;
				this.uid();
				}
				}
				this.state = 1747;
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
		this.enterRule(localctx, 260, FlinkSqlParser.RULE_uid);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1748;
			this.match(FlinkSqlParser.ID_LITERAL);
			this.state = 1752;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 211, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1749;
					this.match(FlinkSqlParser.DOT_ID);
					}
					}
				}
				this.state = 1754;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 211, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 262, FlinkSqlParser.RULE_plusUid);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1755;
			_la = this._input.LA(1);
			if(!(_la===326 || _la===327)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1759;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 212, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1756;
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
				this.state = 1761;
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
	public withOption(): WithOptionContext {
		let localctx: WithOptionContext = new WithOptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, FlinkSqlParser.RULE_withOption);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1762;
			this.match(FlinkSqlParser.WITH);
			this.state = 1763;
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
		this.enterRule(localctx, 266, FlinkSqlParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1765;
			this.match(FlinkSqlParser.IF);
			this.state = 1766;
			this.match(FlinkSqlParser.NOT);
			this.state = 1767;
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
		this.enterRule(localctx, 268, FlinkSqlParser.RULE_ifExists);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1769;
			this.match(FlinkSqlParser.IF);
			this.state = 1770;
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
		this.enterRule(localctx, 270, FlinkSqlParser.RULE_tablePropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1772;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1773;
			this.tableProperty();
			this.state = 1778;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===305) {
				{
				{
				this.state = 1774;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1775;
				this.tableProperty();
				}
				}
				this.state = 1780;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1781;
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
		this.enterRule(localctx, 272, FlinkSqlParser.RULE_tableProperty);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1783;
			localctx._key = this.tablePropertyKey();
			this.state = 1788;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32 || _la===33 || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 3221225473) !== 0) || _la===324) {
				{
				this.state = 1785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===292) {
					{
					this.state = 1784;
					this.match(FlinkSqlParser.EQUAL_SYMBOL);
					}
				}

				this.state = 1787;
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
		this.enterRule(localctx, 274, FlinkSqlParser.RULE_tablePropertyKey);
		try {
			this.state = 1793;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 216, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1790;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1791;
				this.dereferenceDefinition();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1792;
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
		this.enterRule(localctx, 276, FlinkSqlParser.RULE_tablePropertyValue);
		try {
			this.state = 1799;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 323:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1795;
				this.match(FlinkSqlParser.DIG_LITERAL);
				}
				break;
			case 324:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1796;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case 32:
			case 33:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1797;
				this.booleanLiteral();
				}
				break;
			case 322:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1798;
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
		this.enterRule(localctx, 278, FlinkSqlParser.RULE_logicalOperator);
		try {
			this.state = 1807;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 23:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1801;
				this.match(FlinkSqlParser.AND);
				}
				break;
			case 298:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1802;
				this.match(FlinkSqlParser.BIT_AND_OP);
				this.state = 1803;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1804;
				this.match(FlinkSqlParser.OR);
				}
				break;
			case 297:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1805;
				this.match(FlinkSqlParser.BIT_OR_OP);
				this.state = 1806;
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
		this.enterRule(localctx, 280, FlinkSqlParser.RULE_comparisonOperator);
		try {
			this.state = 1823;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1809;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1810;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1811;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1812;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 1813;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1814;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 1815;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1816;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 1817;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1818;
				this.match(FlinkSqlParser.EXCLAMATION_SYMBOL);
				this.state = 1819;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1820;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 1821;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				this.state = 1822;
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
		this.enterRule(localctx, 282, FlinkSqlParser.RULE_bitOperator);
		try {
			this.state = 1832;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 294:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1825;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 1826;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;
			case 293:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1827;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 1828;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 298:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1829;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case 299:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1830;
				this.match(FlinkSqlParser.BIT_XOR_OP);
				}
				break;
			case 297:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1831;
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
		this.enterRule(localctx, 284, FlinkSqlParser.RULE_mathOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1834;
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
		this.enterRule(localctx, 286, FlinkSqlParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1836;
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
		this.enterRule(localctx, 288, FlinkSqlParser.RULE_fullColumnName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1838;
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
		this.enterRule(localctx, 290, FlinkSqlParser.RULE_constant);
		let _la: number;
		try {
			this.state = 1852;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 322:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1840;
				this.stringLiteral();
				}
				break;
			case 323:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1841;
				this.decimalLiteral();
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1842;
				this.interval();
				}
				break;
			case 314:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1843;
				this.match(FlinkSqlParser.HYPNEN_SIGN);
				this.state = 1844;
				this.decimalLiteral();
				}
				break;
			case 32:
			case 33:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1845;
				this.booleanLiteral();
				}
				break;
			case 324:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1846;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case 325:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1847;
				this.match(FlinkSqlParser.BIT_STRING);
				}
				break;
			case 25:
			case 290:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1849;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1848;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1851;
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
		this.enterRule(localctx, 292, FlinkSqlParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1854;
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
		this.enterRule(localctx, 294, FlinkSqlParser.RULE_decimalLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1856;
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
		this.enterRule(localctx, 296, FlinkSqlParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1858;
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
		this.enterRule(localctx, 298, FlinkSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1860;
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
		this.enterRule(localctx, 300, FlinkSqlParser.RULE_ansiNonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1862;
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
		this.enterRule(localctx, 302, FlinkSqlParser.RULE_strictNonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1864;
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
		this.enterRule(localctx, 304, FlinkSqlParser.RULE_nonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1866;
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
		case 74:
			return this.queryStatement_sempred(localctx as QueryStatementContext, predIndex);
		case 82:
			return this.tableExpression_sempred(localctx as TableExpressionContext, predIndex);
		case 103:
			return this.booleanExpression_sempred(localctx as BooleanExpressionContext, predIndex);
		case 106:
			return this.valueExpression_sempred(localctx as ValueExpressionContext, predIndex);
		case 107:
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

	public static readonly _serializedATN: number[] = [4,1,328,1869,2,0,7,0,
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
	7,151,2,152,7,152,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,3,2,315,8,2,1,2,5,2,318,
	8,2,10,2,12,2,321,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,
	3,335,8,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
	5,3,5,353,8,5,1,6,1,6,3,6,357,8,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,3,8,366,8,
	8,1,8,1,8,1,8,3,8,371,8,8,1,9,1,9,1,9,5,9,376,8,9,10,9,12,9,379,9,9,1,10,
	1,10,1,11,1,11,3,11,385,8,11,1,11,1,11,3,11,389,8,11,1,12,1,12,1,12,1,12,
	1,12,5,12,396,8,12,10,12,12,12,399,9,12,1,13,1,13,1,13,1,13,1,13,1,13,1,
	13,1,13,1,13,3,13,410,8,13,1,13,3,13,413,8,13,1,13,1,13,1,13,1,13,1,13,
	3,13,420,8,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,428,8,13,1,13,1,13,1,13,
	3,13,433,8,13,1,13,3,13,436,8,13,1,14,1,14,1,14,1,14,1,14,3,14,443,8,14,
	1,15,1,15,1,15,1,15,1,16,1,16,3,16,451,8,16,1,17,1,17,3,17,455,8,17,1,18,
	1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,3,19,467,8,19,1,19,1,19,1,
	19,1,19,1,19,1,19,3,19,475,8,19,1,19,1,19,3,19,479,8,19,1,19,1,19,1,19,
	1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
	19,1,19,3,19,500,8,19,1,20,1,20,3,20,504,8,20,1,21,1,21,3,21,508,8,21,1,
	21,1,21,3,21,512,8,21,1,21,1,21,1,21,1,21,1,21,5,21,519,8,21,10,21,12,21,
	522,9,21,1,21,1,21,3,21,526,8,21,1,21,1,21,3,21,530,8,21,1,21,1,21,3,21,
	534,8,21,1,21,1,21,3,21,538,8,21,1,21,3,21,541,8,21,1,21,1,21,3,21,545,
	8,21,1,22,1,22,1,22,3,22,550,8,22,1,22,1,22,1,22,1,22,3,22,556,8,22,1,23,
	1,23,1,23,3,23,561,8,23,1,24,1,24,1,24,3,24,566,8,24,1,24,3,24,569,8,24,
	1,25,1,25,3,25,573,8,25,1,26,1,26,1,26,1,26,5,26,579,8,26,10,26,12,26,582,
	9,26,1,26,1,26,1,27,1,27,1,27,3,27,589,8,27,1,27,1,27,3,27,593,8,27,1,27,
	1,27,3,27,597,8,27,1,27,1,27,3,27,601,8,27,1,27,1,27,3,27,605,8,27,1,27,
	1,27,3,27,609,8,27,1,27,1,27,3,27,613,8,27,1,27,1,27,3,27,617,8,27,1,27,
	1,27,3,27,621,8,27,3,27,623,8,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,
	3,29,633,8,29,1,29,1,29,1,30,1,30,1,30,1,30,3,30,641,8,30,1,30,1,30,1,31,
	1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,
	33,1,33,1,33,5,33,663,8,33,10,33,12,33,666,9,33,1,33,1,33,1,34,1,34,3,34,
	672,8,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,
	36,3,36,687,8,36,1,36,3,36,690,8,36,1,37,1,37,1,38,1,38,1,38,1,38,3,38,
	698,8,38,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,3,41,710,8,41,
	1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,43,1,43,1,43,1,43,1,44,1,44,1,
	44,1,44,1,45,1,45,1,45,1,45,5,45,732,8,45,10,45,12,45,735,9,45,1,45,1,45,
	1,46,1,46,1,46,1,46,1,46,1,46,5,46,745,8,46,10,46,12,46,748,9,46,1,46,1,
	46,3,46,752,8,46,1,47,1,47,3,47,756,8,47,1,48,1,48,1,48,1,48,5,48,762,8,
	48,10,48,12,48,765,9,48,1,48,3,48,768,8,48,1,49,1,49,1,50,1,50,1,50,1,50,
	3,50,776,8,50,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,3,52,786,8,52,1,52,
	1,52,3,52,790,8,52,1,52,1,52,1,53,1,53,3,53,796,8,53,1,53,1,53,3,53,800,
	8,53,1,53,1,53,3,53,804,8,53,1,53,3,53,807,8,53,1,53,1,53,1,53,1,54,1,54,
	1,54,1,54,3,54,816,8,54,1,54,1,54,3,54,820,8,54,1,54,1,54,1,54,1,54,1,54,
	3,54,827,8,54,1,54,3,54,830,8,54,1,55,1,55,1,55,1,55,1,55,1,55,5,55,838,
	8,55,10,55,12,55,841,9,55,1,56,1,56,1,57,1,57,1,57,1,57,1,57,3,57,850,8,
	57,1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,3,60,
	865,8,60,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,3,62,876,8,62,1,62,
	1,62,3,62,880,8,62,1,62,1,62,1,62,1,62,1,62,3,62,887,8,62,1,63,1,63,1,63,
	3,63,892,8,63,1,63,1,63,1,64,1,64,3,64,898,8,64,1,64,1,64,3,64,902,8,64,
	1,64,1,64,1,65,1,65,1,65,3,65,909,8,65,1,65,1,65,3,65,913,8,65,1,66,1,66,
	3,66,917,8,66,1,66,1,66,3,66,921,8,66,1,66,1,66,1,67,1,67,1,67,1,67,3,67,
	929,8,67,1,67,1,67,3,67,933,8,67,1,67,1,67,1,68,3,68,938,8,68,1,68,1,68,
	1,68,3,68,943,8,68,1,69,1,69,1,69,1,69,3,69,949,8,69,1,69,3,69,952,8,69,
	1,69,1,69,3,69,956,8,69,1,70,1,70,1,70,1,71,1,71,1,71,1,71,5,71,965,8,71,
	10,71,12,71,968,9,71,1,72,1,72,1,72,1,72,5,72,974,8,72,10,72,12,72,977,
	9,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,1,73,4,73,987,8,73,11,73,12,73,
	988,1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,74,5,74,999,8,74,10,74,12,74,1002,
	9,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,3,74,1012,8,74,1,74,3,74,1015,
	8,74,1,74,1,74,3,74,1019,8,74,1,74,3,74,1022,8,74,3,74,1024,8,74,1,74,1,
	74,1,74,3,74,1029,8,74,1,74,1,74,3,74,1033,8,74,1,74,3,74,1036,8,74,5,74,
	1038,8,74,10,74,12,74,1041,9,74,1,75,1,75,1,75,1,75,5,75,1047,8,75,10,75,
	12,75,1050,9,75,1,76,1,76,1,76,1,76,1,76,5,76,1057,8,76,10,76,12,76,1060,
	9,76,1,76,1,76,3,76,1064,8,76,1,76,1,76,1,76,1,76,1,76,1,77,1,77,1,78,1,
	78,1,78,3,78,1076,8,78,1,78,3,78,1079,8,78,1,78,3,78,1082,8,78,1,78,3,78,
	1085,8,78,1,79,1,79,3,79,1089,8,79,1,79,1,79,1,79,1,79,5,79,1095,8,79,10,
	79,12,79,1098,9,79,3,79,1100,8,79,1,80,1,80,3,80,1104,8,80,1,80,3,80,1107,
	8,80,1,81,1,81,1,81,1,82,1,82,1,82,1,82,5,82,1116,8,82,10,82,12,82,1119,
	9,82,1,82,1,82,1,82,1,82,1,82,1,82,3,82,1127,8,82,1,82,3,82,1130,8,82,1,
	82,3,82,1133,8,82,1,82,1,82,1,82,3,82,1138,8,82,5,82,1140,8,82,10,82,12,
	82,1143,9,82,1,83,1,83,3,83,1147,8,83,1,84,3,84,1150,8,84,1,84,1,84,3,84,
	1154,8,84,1,84,3,84,1157,8,84,1,84,3,84,1160,8,84,1,84,1,84,1,84,1,84,1,
	84,1,84,1,84,1,84,5,84,1170,8,84,10,84,12,84,1173,9,84,1,84,1,84,1,84,1,
	84,3,84,1179,8,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,3,84,1190,
	8,84,1,85,1,85,1,86,1,86,1,86,1,86,1,86,1,86,1,87,1,87,1,88,1,88,1,88,1,
	88,1,88,1,88,1,88,5,88,1209,8,88,10,88,12,88,1212,9,88,1,88,1,88,3,88,1216,
	8,88,1,89,1,89,1,89,1,90,1,90,1,90,1,90,1,90,5,90,1226,8,90,10,90,12,90,
	1229,9,90,1,91,1,91,1,91,1,91,1,91,1,91,1,91,5,91,1238,8,91,10,91,12,91,
	1241,9,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,5,91,1250,8,91,10,91,12,91,
	1253,9,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,5,91,1262,8,91,10,91,12,91,
	1265,9,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,5,91,1275,8,91,10,91,
	12,91,1278,9,91,1,91,1,91,3,91,1282,8,91,1,92,1,92,1,92,1,93,1,93,1,93,
	1,93,1,93,5,93,1292,8,93,10,93,12,93,1295,9,93,1,94,1,94,3,94,1299,8,94,
	1,95,1,95,1,95,3,95,1304,8,95,1,96,1,96,1,96,1,96,5,96,1310,8,96,10,96,
	12,96,1313,9,96,1,97,1,97,1,97,1,97,1,98,3,98,1320,8,98,1,98,1,98,1,98,
	1,98,1,98,1,98,5,98,1328,8,98,10,98,12,98,1331,9,98,3,98,1333,8,98,1,98,
	1,98,1,98,1,98,1,98,5,98,1340,8,98,10,98,12,98,1343,9,98,3,98,1345,8,98,
	1,98,3,98,1348,8,98,1,98,1,98,1,99,1,99,3,99,1354,8,99,1,99,1,99,3,99,1358,
	8,99,1,100,1,100,1,100,1,100,3,100,1364,8,100,1,101,1,101,1,101,1,102,1,
	102,1,103,1,103,1,103,1,103,1,103,1,103,1,103,1,103,1,103,1,103,3,103,1381,
	8,103,3,103,1383,8,103,1,103,1,103,1,103,1,103,1,103,1,103,5,103,1391,8,
	103,10,103,12,103,1394,9,103,1,104,3,104,1397,8,104,1,104,1,104,1,104,1,
	104,1,104,1,104,3,104,1405,8,104,1,104,1,104,1,104,1,104,1,104,5,104,1412,
	8,104,10,104,12,104,1415,9,104,1,104,1,104,1,104,3,104,1420,8,104,1,104,
	1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,3,104,1433,
	8,104,1,104,1,104,1,104,3,104,1438,8,104,1,104,1,104,1,104,1,104,1,104,
	1,104,1,104,1,104,5,104,1448,8,104,10,104,12,104,1451,9,104,1,104,1,104,
	3,104,1455,8,104,1,104,3,104,1458,8,104,1,104,1,104,1,104,1,104,3,104,1464,
	8,104,1,104,1,104,1,104,3,104,1469,8,104,1,104,1,104,1,104,3,104,1474,8,
	104,1,104,1,104,1,104,3,104,1479,8,104,1,105,3,105,1482,8,105,1,105,1,105,
	1,105,1,105,1,105,1,105,1,105,1,105,5,105,1492,8,105,10,105,12,105,1495,
	9,105,1,105,1,105,3,105,1499,8,105,1,105,3,105,1502,8,105,1,105,1,105,3,
	105,1506,8,105,1,106,1,106,1,106,1,106,3,106,1512,8,106,1,106,1,106,1,106,
	1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,
	1,106,1,106,1,106,1,106,5,106,1533,8,106,10,106,12,106,1536,9,106,1,107,
	1,107,1,107,4,107,1541,8,107,11,107,12,107,1542,1,107,1,107,3,107,1547,
	8,107,1,107,1,107,1,107,1,107,1,107,4,107,1554,8,107,11,107,12,107,1555,
	1,107,1,107,3,107,1560,8,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,
	1,107,1,107,1,107,1,107,1,107,1,107,1,107,3,107,1576,8,107,1,107,1,107,
	1,107,1,107,1,107,1,107,1,107,3,107,1585,8,107,1,107,1,107,1,107,1,107,
	1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,
	1,107,1,107,1,107,1,107,1,107,1,107,3,107,1609,8,107,1,107,1,107,1,107,
	5,107,1614,8,107,10,107,12,107,1617,9,107,3,107,1619,8,107,1,107,1,107,
	1,107,1,107,1,107,1,107,1,107,1,107,3,107,1629,8,107,1,107,1,107,1,107,
	1,107,1,107,5,107,1636,8,107,10,107,12,107,1639,9,107,1,108,1,108,1,109,
	1,109,1,110,1,110,1,111,1,111,3,111,1649,8,111,1,112,1,112,1,112,3,112,
	1654,8,112,1,113,1,113,3,113,1658,8,113,1,114,1,114,1,114,4,114,1663,8,
	114,11,114,12,114,1664,1,115,1,115,1,115,3,115,1670,8,115,1,116,1,116,1,
	116,1,116,1,116,1,117,3,117,1678,8,117,1,117,1,117,3,117,1682,8,117,1,118,
	3,118,1685,8,118,1,118,1,118,3,118,1689,8,118,1,119,3,119,1692,8,119,1,
	119,1,119,3,119,1696,8,119,1,120,1,120,1,120,1,121,1,121,4,121,1703,8,121,
	11,121,12,121,1704,1,121,3,121,1708,8,121,1,122,1,122,1,122,1,122,1,123,
	1,123,1,123,5,123,1717,8,123,10,123,12,123,1720,9,123,1,124,1,124,3,124,
	1724,8,124,1,125,1,125,1,125,1,125,3,125,1730,8,125,1,126,1,126,1,127,1,
	127,1,128,1,128,1,128,1,128,1,128,1,129,1,129,1,129,5,129,1744,8,129,10,
	129,12,129,1747,9,129,1,130,1,130,5,130,1751,8,130,10,130,12,130,1754,9,
	130,1,131,1,131,5,131,1758,8,131,10,131,12,131,1761,9,131,1,132,1,132,1,
	132,1,133,1,133,1,133,1,133,1,134,1,134,1,134,1,135,1,135,1,135,1,135,5,
	135,1777,8,135,10,135,12,135,1780,9,135,1,135,1,135,1,136,1,136,3,136,1786,
	8,136,1,136,3,136,1789,8,136,1,137,1,137,1,137,3,137,1794,8,137,1,138,1,
	138,1,138,1,138,3,138,1800,8,138,1,139,1,139,1,139,1,139,1,139,1,139,3,
	139,1808,8,139,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,
	140,1,140,1,140,1,140,1,140,3,140,1824,8,140,1,141,1,141,1,141,1,141,1,
	141,1,141,1,141,3,141,1833,8,141,1,142,1,142,1,143,1,143,1,144,1,144,1,
	145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,3,145,1850,8,145,1,
	145,3,145,1853,8,145,1,146,1,146,1,147,1,147,1,148,1,148,1,149,1,149,1,
	150,1,150,1,151,1,151,1,152,1,152,1,152,2,1752,1759,5,148,164,206,212,214,
	153,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
	48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,
	96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,
	134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,
	170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,
	206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,
	242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,
	278,280,282,284,286,288,290,292,294,296,298,300,302,304,0,40,2,0,36,36,
	84,84,1,0,87,89,2,0,193,193,253,255,2,0,192,192,239,239,2,0,5,5,24,24,2,
	0,74,74,76,76,2,0,6,6,82,82,1,0,246,250,3,0,282,282,287,287,290,290,6,0,
	264,264,267,271,275,279,283,283,285,285,291,291,1,0,70,71,2,0,272,274,280,
	281,2,0,265,265,286,286,1,0,233,234,3,0,8,8,102,102,236,236,1,0,233,235,
	2,0,167,167,237,238,1,0,241,243,2,0,184,184,186,186,2,0,83,83,140,140,2,
	0,105,106,108,108,2,0,48,49,51,52,1,0,35,36,2,0,67,67,69,69,1,0,8,9,1,0,
	32,33,2,0,296,296,314,315,4,0,132,132,312,312,316,316,319,319,2,0,314,315,
	317,317,1,0,314,315,1,0,323,324,2,0,323,323,326,326,1,0,326,327,1,0,320,
	321,4,0,132,132,312,312,314,316,318,319,3,0,25,25,295,296,314,315,2,0,8,
	8,10,10,32,0,6,6,13,17,20,21,26,30,32,32,34,36,38,38,50,50,56,69,72,72,
	75,77,80,81,84,85,90,93,95,97,99,99,102,104,107,107,110,124,128,142,144,
	184,186,203,205,212,214,234,236,237,239,240,253,254,257,259,264,272,275,
	277,279,284,286,291,6,0,45,46,48,52,54,55,105,108,143,143,223,223,23,0,
	4,42,44,44,47,47,53,53,56,70,72,77,80,81,83,85,90,99,102,104,109,142,144,
	176,178,212,214,222,224,234,236,237,239,240,253,254,256,259,264,272,275,
	277,279,284,286,291,2038,0,306,1,0,0,0,2,309,1,0,0,0,4,319,1,0,0,0,6,334,
	1,0,0,0,8,336,1,0,0,0,10,352,1,0,0,0,12,356,1,0,0,0,14,358,1,0,0,0,16,361,
	1,0,0,0,18,372,1,0,0,0,20,380,1,0,0,0,22,388,1,0,0,0,24,390,1,0,0,0,26,
	435,1,0,0,0,28,437,1,0,0,0,30,444,1,0,0,0,32,448,1,0,0,0,34,452,1,0,0,0,
	36,456,1,0,0,0,38,499,1,0,0,0,40,503,1,0,0,0,42,505,1,0,0,0,44,546,1,0,
	0,0,46,560,1,0,0,0,48,562,1,0,0,0,50,572,1,0,0,0,52,574,1,0,0,0,54,622,
	1,0,0,0,56,624,1,0,0,0,58,628,1,0,0,0,60,636,1,0,0,0,62,644,1,0,0,0,64,
	648,1,0,0,0,66,655,1,0,0,0,68,671,1,0,0,0,70,678,1,0,0,0,72,681,1,0,0,0,
	74,691,1,0,0,0,76,693,1,0,0,0,78,699,1,0,0,0,80,701,1,0,0,0,82,709,1,0,
	0,0,84,717,1,0,0,0,86,719,1,0,0,0,88,723,1,0,0,0,90,727,1,0,0,0,92,751,
	1,0,0,0,94,755,1,0,0,0,96,757,1,0,0,0,98,769,1,0,0,0,100,775,1,0,0,0,102,
	777,1,0,0,0,104,782,1,0,0,0,106,793,1,0,0,0,108,811,1,0,0,0,110,831,1,0,
	0,0,112,842,1,0,0,0,114,844,1,0,0,0,116,851,1,0,0,0,118,855,1,0,0,0,120,
	858,1,0,0,0,122,866,1,0,0,0,124,871,1,0,0,0,126,888,1,0,0,0,128,895,1,0,
	0,0,130,905,1,0,0,0,132,914,1,0,0,0,134,924,1,0,0,0,136,942,1,0,0,0,138,
	944,1,0,0,0,140,957,1,0,0,0,142,960,1,0,0,0,144,969,1,0,0,0,146,980,1,0,
	0,0,148,1023,1,0,0,0,150,1042,1,0,0,0,152,1051,1,0,0,0,154,1070,1,0,0,0,
	156,1072,1,0,0,0,158,1086,1,0,0,0,160,1101,1,0,0,0,162,1108,1,0,0,0,164,
	1111,1,0,0,0,166,1144,1,0,0,0,168,1189,1,0,0,0,170,1191,1,0,0,0,172,1193,
	1,0,0,0,174,1199,1,0,0,0,176,1215,1,0,0,0,178,1217,1,0,0,0,180,1220,1,0,
	0,0,182,1281,1,0,0,0,184,1283,1,0,0,0,186,1286,1,0,0,0,188,1296,1,0,0,0,
	190,1300,1,0,0,0,192,1305,1,0,0,0,194,1314,1,0,0,0,196,1319,1,0,0,0,198,
	1351,1,0,0,0,200,1363,1,0,0,0,202,1365,1,0,0,0,204,1368,1,0,0,0,206,1382,
	1,0,0,0,208,1478,1,0,0,0,210,1505,1,0,0,0,212,1511,1,0,0,0,214,1628,1,0,
	0,0,216,1640,1,0,0,0,218,1642,1,0,0,0,220,1644,1,0,0,0,222,1648,1,0,0,0,
	224,1650,1,0,0,0,226,1655,1,0,0,0,228,1662,1,0,0,0,230,1666,1,0,0,0,232,
	1671,1,0,0,0,234,1681,1,0,0,0,236,1684,1,0,0,0,238,1691,1,0,0,0,240,1697,
	1,0,0,0,242,1707,1,0,0,0,244,1709,1,0,0,0,246,1713,1,0,0,0,248,1723,1,0,
	0,0,250,1729,1,0,0,0,252,1731,1,0,0,0,254,1733,1,0,0,0,256,1735,1,0,0,0,
	258,1740,1,0,0,0,260,1748,1,0,0,0,262,1755,1,0,0,0,264,1762,1,0,0,0,266,
	1765,1,0,0,0,268,1769,1,0,0,0,270,1772,1,0,0,0,272,1783,1,0,0,0,274,1793,
	1,0,0,0,276,1799,1,0,0,0,278,1807,1,0,0,0,280,1823,1,0,0,0,282,1832,1,0,
	0,0,284,1834,1,0,0,0,286,1836,1,0,0,0,288,1838,1,0,0,0,290,1852,1,0,0,0,
	292,1854,1,0,0,0,294,1856,1,0,0,0,296,1858,1,0,0,0,298,1860,1,0,0,0,300,
	1862,1,0,0,0,302,1864,1,0,0,0,304,1866,1,0,0,0,306,307,3,2,1,0,307,308,
	5,0,0,1,308,1,1,0,0,0,309,310,3,4,2,0,310,311,5,0,0,1,311,3,1,0,0,0,312,
	314,3,6,3,0,313,315,5,306,0,0,314,313,1,0,0,0,314,315,1,0,0,0,315,318,1,
	0,0,0,316,318,3,8,4,0,317,312,1,0,0,0,317,316,1,0,0,0,318,321,1,0,0,0,319,
	317,1,0,0,0,319,320,1,0,0,0,320,5,1,0,0,0,321,319,1,0,0,0,322,335,3,10,
	5,0,323,335,3,12,6,0,324,335,3,14,7,0,325,335,3,16,8,0,326,335,3,22,11,
	0,327,335,3,26,13,0,328,335,3,28,14,0,329,335,3,30,15,0,330,335,3,32,16,
	0,331,335,3,34,17,0,332,335,3,36,18,0,333,335,3,38,19,0,334,322,1,0,0,0,
	334,323,1,0,0,0,334,324,1,0,0,0,334,325,1,0,0,0,334,326,1,0,0,0,334,327,
	1,0,0,0,334,328,1,0,0,0,334,329,1,0,0,0,334,330,1,0,0,0,334,331,1,0,0,0,
	334,332,1,0,0,0,334,333,1,0,0,0,335,7,1,0,0,0,336,337,5,306,0,0,337,9,1,
	0,0,0,338,353,3,40,20,0,339,353,3,104,52,0,340,353,3,106,53,0,341,353,3,
	108,54,0,342,353,3,102,51,0,343,353,3,114,57,0,344,353,3,120,60,0,345,353,
	3,122,61,0,346,353,3,124,62,0,347,353,3,126,63,0,348,353,3,128,64,0,349,
	353,3,130,65,0,350,353,3,132,66,0,351,353,3,134,67,0,352,338,1,0,0,0,352,
	339,1,0,0,0,352,340,1,0,0,0,352,341,1,0,0,0,352,342,1,0,0,0,352,343,1,0,
	0,0,352,344,1,0,0,0,352,345,1,0,0,0,352,346,1,0,0,0,352,347,1,0,0,0,352,
	348,1,0,0,0,352,349,1,0,0,0,352,350,1,0,0,0,352,351,1,0,0,0,353,11,1,0,
	0,0,354,357,3,148,74,0,355,357,3,136,68,0,356,354,1,0,0,0,356,355,1,0,0,
	0,357,13,1,0,0,0,358,359,7,0,0,0,359,360,3,260,130,0,360,15,1,0,0,0,361,
	365,5,85,0,0,362,366,3,18,9,0,363,364,5,86,0,0,364,366,5,37,0,0,365,362,
	1,0,0,0,365,363,1,0,0,0,365,366,1,0,0,0,366,370,1,0,0,0,367,371,3,12,6,
	0,368,371,3,138,69,0,369,371,3,146,73,0,370,367,1,0,0,0,370,368,1,0,0,0,
	370,369,1,0,0,0,371,17,1,0,0,0,372,377,3,20,10,0,373,374,5,305,0,0,374,
	376,3,20,10,0,375,373,1,0,0,0,376,379,1,0,0,0,377,375,1,0,0,0,377,378,1,
	0,0,0,378,19,1,0,0,0,379,377,1,0,0,0,380,381,7,1,0,0,381,21,1,0,0,0,382,
	384,5,99,0,0,383,385,5,239,0,0,384,383,1,0,0,0,384,385,1,0,0,0,385,386,
	1,0,0,0,386,389,3,260,130,0,387,389,3,24,12,0,388,382,1,0,0,0,388,387,1,
	0,0,0,389,23,1,0,0,0,390,391,5,99,0,0,391,392,5,101,0,0,392,397,3,260,130,
	0,393,394,5,305,0,0,394,396,3,260,130,0,395,393,1,0,0,0,396,399,1,0,0,0,
	397,395,1,0,0,0,397,398,1,0,0,0,398,25,1,0,0,0,399,397,1,0,0,0,400,401,
	5,95,0,0,401,436,7,2,0,0,402,403,5,95,0,0,403,404,5,66,0,0,404,436,7,3,
	0,0,405,406,5,95,0,0,406,409,5,96,0,0,407,408,7,4,0,0,408,410,3,260,130,
	0,409,407,1,0,0,0,409,410,1,0,0,0,410,412,1,0,0,0,411,413,3,210,105,0,412,
	411,1,0,0,0,412,413,1,0,0,0,413,436,1,0,0,0,414,415,5,95,0,0,415,416,5,
	97,0,0,416,417,7,4,0,0,417,419,3,260,130,0,418,420,3,210,105,0,419,418,
	1,0,0,0,419,420,1,0,0,0,420,436,1,0,0,0,421,422,5,95,0,0,422,423,5,73,0,
	0,423,424,7,5,0,0,424,436,3,260,130,0,425,427,5,95,0,0,426,428,5,53,0,0,
	427,426,1,0,0,0,427,428,1,0,0,0,428,429,1,0,0,0,429,436,5,103,0,0,430,432,
	5,95,0,0,431,433,5,52,0,0,432,431,1,0,0,0,432,433,1,0,0,0,433,434,1,0,0,
	0,434,436,5,101,0,0,435,400,1,0,0,0,435,402,1,0,0,0,435,405,1,0,0,0,435,
	414,1,0,0,0,435,421,1,0,0,0,435,425,1,0,0,0,435,430,1,0,0,0,436,27,1,0,
	0,0,437,438,5,212,0,0,438,439,5,100,0,0,439,442,3,260,130,0,440,441,5,70,
	0,0,441,443,3,270,135,0,442,440,1,0,0,0,442,443,1,0,0,0,443,29,1,0,0,0,
	444,445,5,213,0,0,445,446,5,100,0,0,446,447,3,260,130,0,447,31,1,0,0,0,
	448,450,5,116,0,0,449,451,3,272,136,0,450,449,1,0,0,0,450,451,1,0,0,0,451,
	33,1,0,0,0,452,454,5,117,0,0,453,455,3,274,137,0,454,453,1,0,0,0,454,455,
	1,0,0,0,455,35,1,0,0,0,456,457,7,6,0,0,457,458,5,244,0,0,458,459,3,112,
	56,0,459,37,1,0,0,0,460,461,5,6,0,0,461,462,5,244,0,0,462,463,5,70,0,0,
	463,466,5,328,0,0,464,465,5,7,0,0,465,467,3,260,130,0,466,464,1,0,0,0,466,
	467,1,0,0,0,467,500,1,0,0,0,468,469,5,6,0,0,469,470,5,245,0,0,470,471,5,
	70,0,0,471,474,5,328,0,0,472,473,5,7,0,0,473,475,3,260,130,0,474,472,1,
	0,0,0,474,475,1,0,0,0,475,478,1,0,0,0,476,477,5,113,0,0,477,479,3,260,130,
	0,478,476,1,0,0,0,478,479,1,0,0,0,479,500,1,0,0,0,480,481,5,6,0,0,481,482,
	7,7,0,0,482,483,5,70,0,0,483,484,5,328,0,0,484,485,5,113,0,0,485,500,3,
	260,130,0,486,487,5,6,0,0,487,488,5,251,0,0,488,500,5,328,0,0,489,490,5,
	6,0,0,490,491,5,252,0,0,491,492,5,245,0,0,492,493,5,70,0,0,493,494,5,328,
	0,0,494,495,5,113,0,0,495,496,3,260,130,0,496,497,5,257,0,0,497,498,3,260,
	130,0,498,500,1,0,0,0,499,460,1,0,0,0,499,468,1,0,0,0,499,480,1,0,0,0,499,
	486,1,0,0,0,499,489,1,0,0,0,500,39,1,0,0,0,501,504,3,42,21,0,502,504,3,
	44,22,0,503,501,1,0,0,0,503,502,1,0,0,0,504,41,1,0,0,0,505,507,5,73,0,0,
	506,508,5,166,0,0,507,506,1,0,0,0,507,508,1,0,0,0,508,509,1,0,0,0,509,511,
	5,74,0,0,510,512,3,266,133,0,511,510,1,0,0,0,511,512,1,0,0,0,512,513,1,
	0,0,0,513,514,3,98,49,0,514,515,5,303,0,0,515,520,3,46,23,0,516,517,5,305,
	0,0,517,519,3,46,23,0,518,516,1,0,0,0,519,522,1,0,0,0,520,518,1,0,0,0,520,
	521,1,0,0,0,521,525,1,0,0,0,522,520,1,0,0,0,523,524,5,305,0,0,524,526,3,
	80,40,0,525,523,1,0,0,0,525,526,1,0,0,0,526,529,1,0,0,0,527,528,5,305,0,
	0,528,530,3,82,41,0,529,527,1,0,0,0,529,530,1,0,0,0,530,533,1,0,0,0,531,
	532,5,305,0,0,532,534,3,86,43,0,533,531,1,0,0,0,533,534,1,0,0,0,534,535,
	1,0,0,0,535,537,5,304,0,0,536,538,3,70,35,0,537,536,1,0,0,0,537,538,1,0,
	0,0,538,540,1,0,0,0,539,541,3,88,44,0,540,539,1,0,0,0,540,541,1,0,0,0,541,
	542,1,0,0,0,542,544,3,264,132,0,543,545,3,96,48,0,544,543,1,0,0,0,544,545,
	1,0,0,0,545,43,1,0,0,0,546,547,5,73,0,0,547,549,5,74,0,0,548,550,3,266,
	133,0,549,548,1,0,0,0,549,550,1,0,0,0,550,551,1,0,0,0,551,552,3,98,49,0,
	552,555,3,264,132,0,553,554,5,7,0,0,554,556,3,148,74,0,555,553,1,0,0,0,
	555,556,1,0,0,0,556,45,1,0,0,0,557,561,3,48,24,0,558,561,3,72,36,0,559,
	561,3,76,38,0,560,557,1,0,0,0,560,558,1,0,0,0,560,559,1,0,0,0,561,47,1,
	0,0,0,562,563,3,50,25,0,563,565,3,54,27,0,564,566,3,68,34,0,565,564,1,0,
	0,0,565,566,1,0,0,0,566,568,1,0,0,0,567,569,3,70,35,0,568,567,1,0,0,0,568,
	569,1,0,0,0,569,49,1,0,0,0,570,573,3,262,131,0,571,573,3,204,102,0,572,
	570,1,0,0,0,572,571,1,0,0,0,573,51,1,0,0,0,574,575,5,303,0,0,575,580,3,
	50,25,0,576,577,5,305,0,0,577,579,3,50,25,0,578,576,1,0,0,0,579,582,1,0,
	0,0,580,578,1,0,0,0,580,581,1,0,0,0,581,583,1,0,0,0,582,580,1,0,0,0,583,
	584,5,304,0,0,584,53,1,0,0,0,585,623,7,8,0,0,586,588,7,9,0,0,587,589,3,
	56,28,0,588,587,1,0,0,0,588,589,1,0,0,0,589,623,1,0,0,0,590,592,5,284,0,
	0,591,593,3,56,28,0,592,591,1,0,0,0,592,593,1,0,0,0,593,600,1,0,0,0,594,
	596,7,10,0,0,595,597,5,224,0,0,596,595,1,0,0,0,596,597,1,0,0,0,597,598,
	1,0,0,0,598,599,5,283,0,0,599,601,5,263,0,0,600,594,1,0,0,0,600,601,1,0,
	0,0,601,623,1,0,0,0,602,604,7,11,0,0,603,605,3,58,29,0,604,603,1,0,0,0,
	604,605,1,0,0,0,605,623,1,0,0,0,606,608,7,12,0,0,607,609,3,62,31,0,608,
	607,1,0,0,0,608,609,1,0,0,0,609,623,1,0,0,0,610,612,5,266,0,0,611,613,3,
	64,32,0,612,611,1,0,0,0,612,613,1,0,0,0,613,623,1,0,0,0,614,616,5,289,0,
	0,615,617,3,66,33,0,616,615,1,0,0,0,616,617,1,0,0,0,617,623,1,0,0,0,618,
	620,5,288,0,0,619,621,3,60,30,0,620,619,1,0,0,0,620,621,1,0,0,0,621,623,
	1,0,0,0,622,585,1,0,0,0,622,586,1,0,0,0,622,590,1,0,0,0,622,602,1,0,0,0,
	622,606,1,0,0,0,622,610,1,0,0,0,622,614,1,0,0,0,622,618,1,0,0,0,623,55,
	1,0,0,0,624,625,5,303,0,0,625,626,3,294,147,0,626,627,5,304,0,0,627,57,
	1,0,0,0,628,629,5,303,0,0,629,632,3,294,147,0,630,631,5,305,0,0,631,633,
	3,294,147,0,632,630,1,0,0,0,632,633,1,0,0,0,633,634,1,0,0,0,634,635,5,304,
	0,0,635,59,1,0,0,0,636,637,5,303,0,0,637,640,3,292,146,0,638,639,5,305,
	0,0,639,641,3,292,146,0,640,638,1,0,0,0,640,641,1,0,0,0,641,642,1,0,0,0,
	642,643,5,304,0,0,643,61,1,0,0,0,644,645,5,294,0,0,645,646,3,54,27,0,646,
	647,5,293,0,0,647,63,1,0,0,0,648,649,5,294,0,0,649,650,3,54,27,0,650,651,
	5,305,0,0,651,652,3,54,27,0,652,653,1,0,0,0,653,654,5,293,0,0,654,65,1,
	0,0,0,655,656,5,294,0,0,656,657,3,50,25,0,657,664,3,54,27,0,658,659,5,305,
	0,0,659,660,3,50,25,0,660,661,3,54,27,0,661,663,1,0,0,0,662,658,1,0,0,0,
	663,666,1,0,0,0,664,662,1,0,0,0,664,665,1,0,0,0,665,667,1,0,0,0,666,664,
	1,0,0,0,667,668,5,293,0,0,668,67,1,0,0,0,669,670,5,185,0,0,670,672,3,84,
	42,0,671,669,1,0,0,0,671,672,1,0,0,0,672,673,1,0,0,0,673,674,5,256,0,0,
	674,675,5,257,0,0,675,676,5,25,0,0,676,677,5,260,0,0,677,69,1,0,0,0,678,
	679,5,115,0,0,679,680,5,322,0,0,680,71,1,0,0,0,681,682,3,50,25,0,682,683,
	3,54,27,0,683,686,5,261,0,0,684,685,5,5,0,0,685,687,3,74,37,0,686,684,1,
	0,0,0,686,687,1,0,0,0,687,689,1,0,0,0,688,690,5,262,0,0,689,688,1,0,0,0,
	689,690,1,0,0,0,690,73,1,0,0,0,691,692,5,322,0,0,692,75,1,0,0,0,693,694,
	3,50,25,0,694,695,5,7,0,0,695,697,3,78,39,0,696,698,3,70,35,0,697,696,1,
	0,0,0,697,698,1,0,0,0,698,77,1,0,0,0,699,700,3,204,102,0,700,79,1,0,0,0,
	701,702,5,226,0,0,702,703,5,37,0,0,703,704,3,204,102,0,704,705,5,7,0,0,
	705,706,3,204,102,0,706,81,1,0,0,0,707,708,5,185,0,0,708,710,3,84,42,0,
	709,707,1,0,0,0,709,710,1,0,0,0,710,711,1,0,0,0,711,712,5,256,0,0,712,713,
	5,257,0,0,713,714,3,52,26,0,714,715,5,25,0,0,715,716,5,260,0,0,716,83,1,
	0,0,0,717,718,3,248,124,0,718,85,1,0,0,0,719,720,5,258,0,0,720,721,5,37,
	0,0,721,722,5,259,0,0,722,87,1,0,0,0,723,724,5,200,0,0,724,725,5,13,0,0,
	725,726,3,90,45,0,726,89,1,0,0,0,727,728,5,303,0,0,728,733,3,92,46,0,729,
	730,5,305,0,0,730,732,3,92,46,0,731,729,1,0,0,0,732,735,1,0,0,0,733,731,
	1,0,0,0,733,734,1,0,0,0,734,736,1,0,0,0,735,733,1,0,0,0,736,737,5,304,0,
	0,737,91,1,0,0,0,738,752,3,222,111,0,739,740,3,248,124,0,740,741,5,303,
	0,0,741,746,3,94,47,0,742,743,5,305,0,0,743,745,3,94,47,0,744,742,1,0,0,
	0,745,748,1,0,0,0,746,744,1,0,0,0,746,747,1,0,0,0,747,749,1,0,0,0,748,746,
	1,0,0,0,749,750,5,304,0,0,750,752,1,0,0,0,751,738,1,0,0,0,751,739,1,0,0,
	0,752,93,1,0,0,0,753,756,3,222,111,0,754,756,3,290,145,0,755,753,1,0,0,
	0,755,754,1,0,0,0,756,95,1,0,0,0,757,758,5,29,0,0,758,767,3,98,49,0,759,
	763,5,303,0,0,760,762,3,100,50,0,761,760,1,0,0,0,762,765,1,0,0,0,763,761,
	1,0,0,0,763,764,1,0,0,0,764,766,1,0,0,0,765,763,1,0,0,0,766,768,5,304,0,
	0,767,759,1,0,0,0,767,768,1,0,0,0,768,97,1,0,0,0,769,770,3,260,130,0,770,
	99,1,0,0,0,771,772,7,13,0,0,772,776,7,14,0,0,773,774,7,15,0,0,774,776,7,
	16,0,0,775,771,1,0,0,0,775,773,1,0,0,0,776,101,1,0,0,0,777,778,5,73,0,0,
	778,779,5,239,0,0,779,780,3,260,130,0,780,781,3,264,132,0,781,103,1,0,0,
	0,782,783,5,73,0,0,783,785,5,192,0,0,784,786,3,266,133,0,785,784,1,0,0,
	0,785,786,1,0,0,0,786,787,1,0,0,0,787,789,3,260,130,0,788,790,3,70,35,0,
	789,788,1,0,0,0,789,790,1,0,0,0,790,791,1,0,0,0,791,792,3,264,132,0,792,
	105,1,0,0,0,793,795,5,73,0,0,794,796,5,166,0,0,795,794,1,0,0,0,795,796,
	1,0,0,0,796,797,1,0,0,0,797,799,5,76,0,0,798,800,3,266,133,0,799,798,1,
	0,0,0,799,800,1,0,0,0,800,801,1,0,0,0,801,803,3,260,130,0,802,804,3,52,
	26,0,803,802,1,0,0,0,803,804,1,0,0,0,804,806,1,0,0,0,805,807,3,70,35,0,
	806,805,1,0,0,0,806,807,1,0,0,0,807,808,1,0,0,0,808,809,5,7,0,0,809,810,
	3,148,74,0,810,107,1,0,0,0,811,815,5,73,0,0,812,816,5,166,0,0,813,814,5,
	166,0,0,814,816,5,232,0,0,815,812,1,0,0,0,815,813,1,0,0,0,815,816,1,0,0,
	0,816,817,1,0,0,0,817,819,5,157,0,0,818,820,3,266,133,0,819,818,1,0,0,0,
	819,820,1,0,0,0,820,821,1,0,0,0,821,822,3,260,130,0,822,823,5,7,0,0,823,
	826,3,248,124,0,824,825,5,240,0,0,825,827,7,17,0,0,826,824,1,0,0,0,826,
	827,1,0,0,0,827,829,1,0,0,0,828,830,3,110,55,0,829,828,1,0,0,0,829,830,
	1,0,0,0,830,109,1,0,0,0,831,832,5,143,0,0,832,833,5,244,0,0,833,839,3,112,
	56,0,834,835,5,305,0,0,835,836,5,244,0,0,836,838,3,112,56,0,837,834,1,0,
	0,0,838,841,1,0,0,0,839,837,1,0,0,0,839,840,1,0,0,0,840,111,1,0,0,0,841,
	839,1,0,0,0,842,843,5,322,0,0,843,113,1,0,0,0,844,845,5,112,0,0,845,846,
	5,74,0,0,846,849,3,260,130,0,847,850,3,116,58,0,848,850,3,118,59,0,849,
	847,1,0,0,0,849,848,1,0,0,0,850,115,1,0,0,0,851,852,5,113,0,0,852,853,5,
	109,0,0,853,854,3,260,130,0,854,117,1,0,0,0,855,856,5,116,0,0,856,857,3,
	270,135,0,857,119,1,0,0,0,858,859,5,112,0,0,859,860,5,76,0,0,860,864,3,
	260,130,0,861,865,3,116,58,0,862,863,5,7,0,0,863,865,3,148,74,0,864,861,
	1,0,0,0,864,862,1,0,0,0,865,121,1,0,0,0,866,867,5,112,0,0,867,868,5,192,
	0,0,868,869,3,260,130,0,869,870,3,118,59,0,870,123,1,0,0,0,871,875,5,112,
	0,0,872,876,5,166,0,0,873,874,5,166,0,0,874,876,5,232,0,0,875,872,1,0,0,
	0,875,873,1,0,0,0,875,876,1,0,0,0,876,877,1,0,0,0,877,879,5,157,0,0,878,
	880,3,268,134,0,879,878,1,0,0,0,879,880,1,0,0,0,880,881,1,0,0,0,881,882,
	3,260,130,0,882,883,5,7,0,0,883,886,3,248,124,0,884,885,5,240,0,0,885,887,
	7,17,0,0,886,884,1,0,0,0,886,887,1,0,0,0,887,125,1,0,0,0,888,889,5,104,
	0,0,889,891,5,239,0,0,890,892,3,268,134,0,891,890,1,0,0,0,891,892,1,0,0,
	0,892,893,1,0,0,0,893,894,3,260,130,0,894,127,1,0,0,0,895,897,5,104,0,0,
	896,898,5,166,0,0,897,896,1,0,0,0,897,898,1,0,0,0,898,899,1,0,0,0,899,901,
	5,74,0,0,900,902,3,268,134,0,901,900,1,0,0,0,901,902,1,0,0,0,902,903,1,
	0,0,0,903,904,3,260,130,0,904,129,1,0,0,0,905,906,5,104,0,0,906,908,5,192,
	0,0,907,909,3,268,134,0,908,907,1,0,0,0,908,909,1,0,0,0,909,910,1,0,0,0,
	910,912,3,260,130,0,911,913,7,18,0,0,912,911,1,0,0,0,912,913,1,0,0,0,913,
	131,1,0,0,0,914,916,5,104,0,0,915,917,5,166,0,0,916,915,1,0,0,0,916,917,
	1,0,0,0,917,918,1,0,0,0,918,920,5,76,0,0,919,921,3,268,134,0,920,919,1,
	0,0,0,920,921,1,0,0,0,921,922,1,0,0,0,922,923,3,260,130,0,923,133,1,0,0,
	0,924,928,5,104,0,0,925,929,5,166,0,0,926,927,5,166,0,0,927,929,5,232,0,
	0,928,925,1,0,0,0,928,926,1,0,0,0,928,929,1,0,0,0,929,930,1,0,0,0,930,932,
	5,157,0,0,931,933,3,268,134,0,932,931,1,0,0,0,932,933,1,0,0,0,933,934,1,
	0,0,0,934,935,3,260,130,0,935,135,1,0,0,0,936,938,5,78,0,0,937,936,1,0,
	0,0,937,938,1,0,0,0,938,939,1,0,0,0,939,943,3,138,69,0,940,941,5,78,0,0,
	941,943,3,146,73,0,942,937,1,0,0,0,942,940,1,0,0,0,943,137,1,0,0,0,944,
	945,5,80,0,0,945,946,7,19,0,0,946,955,3,260,130,0,947,949,3,140,70,0,948,
	947,1,0,0,0,948,949,1,0,0,0,949,951,1,0,0,0,950,952,3,52,26,0,951,950,1,
	0,0,0,951,952,1,0,0,0,952,953,1,0,0,0,953,956,3,148,74,0,954,956,3,142,
	71,0,955,948,1,0,0,0,955,954,1,0,0,0,956,139,1,0,0,0,957,958,5,60,0,0,958,
	959,3,270,135,0,959,141,1,0,0,0,960,961,5,72,0,0,961,966,3,144,72,0,962,
	963,5,305,0,0,963,965,3,144,72,0,964,962,1,0,0,0,965,968,1,0,0,0,966,964,
	1,0,0,0,966,967,1,0,0,0,967,143,1,0,0,0,968,966,1,0,0,0,969,970,5,303,0,
	0,970,975,3,290,145,0,971,972,5,305,0,0,972,974,3,290,145,0,973,971,1,0,
	0,0,974,977,1,0,0,0,975,973,1,0,0,0,975,976,1,0,0,0,976,978,1,0,0,0,977,
	975,1,0,0,0,978,979,5,304,0,0,979,145,1,0,0,0,980,981,5,79,0,0,981,982,
	5,116,0,0,982,986,5,43,0,0,983,984,3,138,69,0,984,985,5,306,0,0,985,987,
	1,0,0,0,986,983,1,0,0,0,987,988,1,0,0,0,988,986,1,0,0,0,988,989,1,0,0,0,
	989,990,1,0,0,0,990,991,5,44,0,0,991,147,1,0,0,0,992,993,6,74,-1,0,993,
	1024,3,150,75,0,994,995,5,70,0,0,995,1000,3,152,76,0,996,997,5,305,0,0,
	997,999,3,152,76,0,998,996,1,0,0,0,999,1002,1,0,0,0,1000,998,1,0,0,0,1000,
	1001,1,0,0,0,1001,1003,1,0,0,0,1002,1000,1,0,0,0,1003,1004,3,148,74,5,1004,
	1024,1,0,0,0,1005,1006,5,303,0,0,1006,1007,3,148,74,0,1007,1008,5,304,0,
	0,1008,1024,1,0,0,0,1009,1011,3,158,79,0,1010,1012,3,186,93,0,1011,1010,
	1,0,0,0,1011,1012,1,0,0,0,1012,1014,1,0,0,0,1013,1015,3,190,95,0,1014,1013,
	1,0,0,0,1014,1015,1,0,0,0,1015,1024,1,0,0,0,1016,1018,3,156,78,0,1017,1019,
	3,186,93,0,1018,1017,1,0,0,0,1018,1019,1,0,0,0,1019,1021,1,0,0,0,1020,1022,
	3,190,95,0,1021,1020,1,0,0,0,1021,1022,1,0,0,0,1022,1024,1,0,0,0,1023,992,
	1,0,0,0,1023,994,1,0,0,0,1023,1005,1,0,0,0,1023,1009,1,0,0,0,1023,1016,
	1,0,0,0,1024,1039,1,0,0,0,1025,1026,10,3,0,0,1026,1028,7,20,0,0,1027,1029,
	5,8,0,0,1028,1027,1,0,0,0,1028,1029,1,0,0,0,1029,1030,1,0,0,0,1030,1032,
	3,148,74,0,1031,1033,3,186,93,0,1032,1031,1,0,0,0,1032,1033,1,0,0,0,1033,
	1035,1,0,0,0,1034,1036,3,190,95,0,1035,1034,1,0,0,0,1035,1036,1,0,0,0,1036,
	1038,1,0,0,0,1037,1025,1,0,0,0,1038,1041,1,0,0,0,1039,1037,1,0,0,0,1039,
	1040,1,0,0,0,1040,149,1,0,0,0,1041,1039,1,0,0,0,1042,1043,5,72,0,0,1043,
	1048,3,204,102,0,1044,1045,5,305,0,0,1045,1047,3,204,102,0,1046,1044,1,
	0,0,0,1047,1050,1,0,0,0,1048,1046,1,0,0,0,1048,1049,1,0,0,0,1049,151,1,
	0,0,0,1050,1048,1,0,0,0,1051,1063,3,154,77,0,1052,1053,5,303,0,0,1053,1058,
	3,50,25,0,1054,1055,5,305,0,0,1055,1057,3,50,25,0,1056,1054,1,0,0,0,1057,
	1060,1,0,0,0,1058,1056,1,0,0,0,1058,1059,1,0,0,0,1059,1061,1,0,0,0,1060,
	1058,1,0,0,0,1061,1062,5,304,0,0,1062,1064,1,0,0,0,1063,1052,1,0,0,0,1063,
	1064,1,0,0,0,1064,1065,1,0,0,0,1065,1066,5,7,0,0,1066,1067,5,303,0,0,1067,
	1068,3,148,74,0,1068,1069,5,304,0,0,1069,153,1,0,0,0,1070,1071,3,248,124,
	0,1071,155,1,0,0,0,1072,1073,3,158,79,0,1073,1075,3,162,81,0,1074,1076,
	3,178,89,0,1075,1074,1,0,0,0,1075,1076,1,0,0,0,1076,1078,1,0,0,0,1077,1079,
	3,180,90,0,1078,1077,1,0,0,0,1078,1079,1,0,0,0,1079,1081,1,0,0,0,1080,1082,
	3,184,92,0,1081,1080,1,0,0,0,1081,1082,1,0,0,0,1082,1084,1,0,0,0,1083,1085,
	3,192,96,0,1084,1083,1,0,0,0,1084,1085,1,0,0,0,1085,157,1,0,0,0,1086,1088,
	5,4,0,0,1087,1089,3,298,149,0,1088,1087,1,0,0,0,1088,1089,1,0,0,0,1089,
	1099,1,0,0,0,1090,1100,5,312,0,0,1091,1096,3,160,80,0,1092,1093,5,305,0,
	0,1093,1095,3,160,80,0,1094,1092,1,0,0,0,1095,1098,1,0,0,0,1096,1094,1,
	0,0,0,1096,1097,1,0,0,0,1097,1100,1,0,0,0,1098,1096,1,0,0,0,1099,1090,1,
	0,0,0,1099,1091,1,0,0,0,1100,159,1,0,0,0,1101,1106,3,204,102,0,1102,1104,
	5,7,0,0,1103,1102,1,0,0,0,1103,1104,1,0,0,0,1104,1105,1,0,0,0,1105,1107,
	3,204,102,0,1106,1103,1,0,0,0,1106,1107,1,0,0,0,1107,161,1,0,0,0,1108,1109,
	5,5,0,0,1109,1110,3,164,82,0,1110,163,1,0,0,0,1111,1112,6,82,-1,0,1112,
	1117,3,166,83,0,1113,1114,5,305,0,0,1114,1116,3,166,83,0,1115,1113,1,0,
	0,0,1116,1119,1,0,0,0,1117,1115,1,0,0,0,1117,1118,1,0,0,0,1118,1141,1,0,
	0,0,1119,1117,1,0,0,0,1120,1121,10,1,0,0,1121,1122,5,46,0,0,1122,1123,5,
	45,0,0,1123,1140,3,164,82,2,1124,1126,10,2,0,0,1125,1127,5,54,0,0,1126,
	1125,1,0,0,0,1126,1127,1,0,0,0,1127,1129,1,0,0,0,1128,1130,7,21,0,0,1129,
	1128,1,0,0,0,1129,1130,1,0,0,0,1130,1132,1,0,0,0,1131,1133,5,47,0,0,1132,
	1131,1,0,0,0,1132,1133,1,0,0,0,1133,1134,1,0,0,0,1134,1135,5,45,0,0,1135,
	1137,3,164,82,0,1136,1138,3,176,88,0,1137,1136,1,0,0,0,1137,1138,1,0,0,
	0,1138,1140,1,0,0,0,1139,1120,1,0,0,0,1139,1124,1,0,0,0,1140,1143,1,0,0,
	0,1141,1139,1,0,0,0,1141,1142,1,0,0,0,1142,165,1,0,0,0,1143,1141,1,0,0,
	0,1144,1146,3,168,84,0,1145,1147,3,238,119,0,1146,1145,1,0,0,0,1146,1147,
	1,0,0,0,1147,167,1,0,0,0,1148,1150,5,74,0,0,1149,1148,1,0,0,0,1149,1150,
	1,0,0,0,1150,1151,1,0,0,0,1151,1153,3,170,85,0,1152,1154,3,172,86,0,1153,
	1152,1,0,0,0,1153,1154,1,0,0,0,1154,1159,1,0,0,0,1155,1157,5,7,0,0,1156,
	1155,1,0,0,0,1156,1157,1,0,0,0,1157,1158,1,0,0,0,1158,1160,3,220,110,0,
	1159,1156,1,0,0,0,1159,1160,1,0,0,0,1160,1190,1,0,0,0,1161,1162,5,57,0,
	0,1162,1163,5,74,0,0,1163,1164,5,303,0,0,1164,1165,3,216,108,0,1165,1166,
	5,303,0,0,1166,1171,3,204,102,0,1167,1168,5,305,0,0,1168,1170,3,204,102,
	0,1169,1167,1,0,0,0,1170,1173,1,0,0,0,1171,1169,1,0,0,0,1171,1172,1,0,0,
	0,1172,1174,1,0,0,0,1173,1171,1,0,0,0,1174,1175,5,304,0,0,1175,1176,5,304,
	0,0,1176,1190,1,0,0,0,1177,1179,5,57,0,0,1178,1177,1,0,0,0,1178,1179,1,
	0,0,0,1179,1180,1,0,0,0,1180,1181,5,303,0,0,1181,1182,3,148,74,0,1182,1183,
	5,304,0,0,1183,1190,1,0,0,0,1184,1185,5,227,0,0,1185,1186,5,303,0,0,1186,
	1187,3,204,102,0,1187,1188,5,304,0,0,1188,1190,1,0,0,0,1189,1149,1,0,0,
	0,1189,1161,1,0,0,0,1189,1178,1,0,0,0,1189,1184,1,0,0,0,1190,169,1,0,0,
	0,1191,1192,3,260,130,0,1192,171,1,0,0,0,1193,1194,5,37,0,0,1194,1195,5,
	259,0,0,1195,1196,5,7,0,0,1196,1197,5,136,0,0,1197,1198,3,174,87,0,1198,
	173,1,0,0,0,1199,1200,3,204,102,0,1200,175,1,0,0,0,1201,1202,5,55,0,0,1202,
	1216,3,206,103,0,1203,1204,5,143,0,0,1204,1205,5,303,0,0,1205,1210,3,260,
	130,0,1206,1207,5,305,0,0,1207,1209,3,260,130,0,1208,1206,1,0,0,0,1209,
	1212,1,0,0,0,1210,1208,1,0,0,0,1210,1211,1,0,0,0,1211,1213,1,0,0,0,1212,
	1210,1,0,0,0,1213,1214,5,304,0,0,1214,1216,1,0,0,0,1215,1201,1,0,0,0,1215,
	1203,1,0,0,0,1216,177,1,0,0,0,1217,1218,5,11,0,0,1218,1219,3,206,103,0,
	1219,179,1,0,0,0,1220,1221,5,12,0,0,1221,1222,5,13,0,0,1222,1227,3,182,
	91,0,1223,1224,5,305,0,0,1224,1226,3,182,91,0,1225,1223,1,0,0,0,1226,1229,
	1,0,0,0,1227,1225,1,0,0,0,1227,1228,1,0,0,0,1228,181,1,0,0,0,1229,1227,
	1,0,0,0,1230,1282,3,204,102,0,1231,1232,5,303,0,0,1232,1282,5,304,0,0,1233,
	1234,5,303,0,0,1234,1239,3,204,102,0,1235,1236,5,305,0,0,1236,1238,3,204,
	102,0,1237,1235,1,0,0,0,1238,1241,1,0,0,0,1239,1237,1,0,0,0,1239,1240,1,
	0,0,0,1240,1242,1,0,0,0,1241,1239,1,0,0,0,1242,1243,5,304,0,0,1243,1282,
	1,0,0,0,1244,1245,5,16,0,0,1245,1246,5,303,0,0,1246,1251,3,204,102,0,1247,
	1248,5,305,0,0,1248,1250,3,204,102,0,1249,1247,1,0,0,0,1250,1253,1,0,0,
	0,1251,1249,1,0,0,0,1251,1252,1,0,0,0,1252,1254,1,0,0,0,1253,1251,1,0,0,
	0,1254,1255,5,304,0,0,1255,1282,1,0,0,0,1256,1257,5,17,0,0,1257,1258,5,
	303,0,0,1258,1263,3,204,102,0,1259,1260,5,305,0,0,1260,1262,3,204,102,0,
	1261,1259,1,0,0,0,1262,1265,1,0,0,0,1263,1261,1,0,0,0,1263,1264,1,0,0,0,
	1264,1266,1,0,0,0,1265,1263,1,0,0,0,1266,1267,5,304,0,0,1267,1282,1,0,0,
	0,1268,1269,5,14,0,0,1269,1270,5,15,0,0,1270,1271,5,303,0,0,1271,1276,3,
	182,91,0,1272,1273,5,305,0,0,1273,1275,3,182,91,0,1274,1272,1,0,0,0,1275,
	1278,1,0,0,0,1276,1274,1,0,0,0,1276,1277,1,0,0,0,1277,1279,1,0,0,0,1278,
	1276,1,0,0,0,1279,1280,5,304,0,0,1280,1282,1,0,0,0,1281,1230,1,0,0,0,1281,
	1231,1,0,0,0,1281,1233,1,0,0,0,1281,1244,1,0,0,0,1281,1256,1,0,0,0,1281,
	1268,1,0,0,0,1282,183,1,0,0,0,1283,1284,5,19,0,0,1284,1285,3,206,103,0,
	1285,185,1,0,0,0,1286,1287,5,18,0,0,1287,1288,5,13,0,0,1288,1293,3,188,
	94,0,1289,1290,5,305,0,0,1290,1292,3,188,94,0,1291,1289,1,0,0,0,1292,1295,
	1,0,0,0,1293,1291,1,0,0,0,1293,1294,1,0,0,0,1294,187,1,0,0,0,1295,1293,
	1,0,0,0,1296,1298,3,204,102,0,1297,1299,7,22,0,0,1298,1297,1,0,0,0,1298,
	1299,1,0,0,0,1299,189,1,0,0,0,1300,1303,5,20,0,0,1301,1304,5,8,0,0,1302,
	1304,3,204,102,0,1303,1301,1,0,0,0,1303,1302,1,0,0,0,1304,191,1,0,0,0,1305,
	1306,5,58,0,0,1306,1311,3,194,97,0,1307,1308,5,305,0,0,1308,1310,3,194,
	97,0,1309,1307,1,0,0,0,1310,1313,1,0,0,0,1311,1309,1,0,0,0,1311,1312,1,
	0,0,0,1312,193,1,0,0,0,1313,1311,1,0,0,0,1314,1315,3,240,120,0,1315,1316,
	5,7,0,0,1316,1317,3,196,98,0,1317,195,1,0,0,0,1318,1320,3,240,120,0,1319,
	1318,1,0,0,0,1319,1320,1,0,0,0,1320,1321,1,0,0,0,1321,1332,5,303,0,0,1322,
	1323,5,18,0,0,1323,1324,5,13,0,0,1324,1329,3,198,99,0,1325,1326,5,305,0,
	0,1326,1328,3,198,99,0,1327,1325,1,0,0,0,1328,1331,1,0,0,0,1329,1327,1,
	0,0,0,1329,1330,1,0,0,0,1330,1333,1,0,0,0,1331,1329,1,0,0,0,1332,1322,1,
	0,0,0,1332,1333,1,0,0,0,1333,1344,1,0,0,0,1334,1335,5,60,0,0,1335,1336,
	5,13,0,0,1336,1341,3,204,102,0,1337,1338,5,305,0,0,1338,1340,3,204,102,
	0,1339,1337,1,0,0,0,1340,1343,1,0,0,0,1341,1339,1,0,0,0,1341,1342,1,0,0,
	0,1342,1345,1,0,0,0,1343,1341,1,0,0,0,1344,1334,1,0,0,0,1344,1345,1,0,0,
	0,1345,1347,1,0,0,0,1346,1348,3,200,100,0,1347,1346,1,0,0,0,1347,1348,1,
	0,0,0,1348,1349,1,0,0,0,1349,1350,5,304,0,0,1350,197,1,0,0,0,1351,1353,
	3,204,102,0,1352,1354,7,22,0,0,1353,1352,1,0,0,0,1353,1354,1,0,0,0,1354,
	1357,1,0,0,0,1355,1356,5,34,0,0,1356,1358,7,23,0,0,1357,1355,1,0,0,0,1357,
	1358,1,0,0,0,1358,199,1,0,0,0,1359,1360,5,61,0,0,1360,1364,3,202,101,0,
	1361,1362,5,62,0,0,1362,1364,3,202,101,0,1363,1359,1,0,0,0,1363,1361,1,
	0,0,0,1364,201,1,0,0,0,1365,1366,3,204,102,0,1366,1367,5,64,0,0,1367,203,
	1,0,0,0,1368,1369,3,206,103,0,1369,205,1,0,0,0,1370,1371,6,103,-1,0,1371,
	1372,5,25,0,0,1372,1383,3,206,103,5,1373,1374,5,27,0,0,1374,1375,5,303,
	0,0,1375,1376,3,148,74,0,1376,1377,5,304,0,0,1377,1383,1,0,0,0,1378,1380,
	3,212,106,0,1379,1381,3,208,104,0,1380,1379,1,0,0,0,1380,1381,1,0,0,0,1381,
	1383,1,0,0,0,1382,1370,1,0,0,0,1382,1373,1,0,0,0,1382,1378,1,0,0,0,1383,
	1392,1,0,0,0,1384,1385,10,2,0,0,1385,1386,5,23,0,0,1386,1391,3,206,103,
	3,1387,1388,10,1,0,0,1388,1389,5,22,0,0,1389,1391,3,206,103,2,1390,1384,
	1,0,0,0,1390,1387,1,0,0,0,1391,1394,1,0,0,0,1392,1390,1,0,0,0,1392,1393,
	1,0,0,0,1393,207,1,0,0,0,1394,1392,1,0,0,0,1395,1397,5,25,0,0,1396,1395,
	1,0,0,0,1396,1397,1,0,0,0,1397,1398,1,0,0,0,1398,1399,5,28,0,0,1399,1400,
	3,212,106,0,1400,1401,5,23,0,0,1401,1402,3,212,106,0,1402,1479,1,0,0,0,
	1403,1405,5,25,0,0,1404,1403,1,0,0,0,1404,1405,1,0,0,0,1405,1406,1,0,0,
	0,1406,1407,5,24,0,0,1407,1408,5,303,0,0,1408,1413,3,204,102,0,1409,1410,
	5,305,0,0,1410,1412,3,204,102,0,1411,1409,1,0,0,0,1412,1415,1,0,0,0,1413,
	1411,1,0,0,0,1413,1414,1,0,0,0,1414,1416,1,0,0,0,1415,1413,1,0,0,0,1416,
	1417,5,304,0,0,1417,1479,1,0,0,0,1418,1420,5,25,0,0,1419,1418,1,0,0,0,1419,
	1420,1,0,0,0,1420,1421,1,0,0,0,1421,1422,5,24,0,0,1422,1423,5,303,0,0,1423,
	1424,3,148,74,0,1424,1425,5,304,0,0,1425,1479,1,0,0,0,1426,1427,5,27,0,
	0,1427,1428,5,303,0,0,1428,1429,3,148,74,0,1429,1430,5,304,0,0,1430,1479,
	1,0,0,0,1431,1433,5,25,0,0,1432,1431,1,0,0,0,1432,1433,1,0,0,0,1433,1434,
	1,0,0,0,1434,1435,5,30,0,0,1435,1479,3,212,106,0,1436,1438,5,25,0,0,1437,
	1436,1,0,0,0,1437,1438,1,0,0,0,1438,1439,1,0,0,0,1439,1440,5,29,0,0,1440,
	1454,7,24,0,0,1441,1442,5,303,0,0,1442,1455,5,304,0,0,1443,1444,5,303,0,
	0,1444,1449,3,204,102,0,1445,1446,5,305,0,0,1446,1448,3,204,102,0,1447,
	1445,1,0,0,0,1448,1451,1,0,0,0,1449,1447,1,0,0,0,1449,1450,1,0,0,0,1450,
	1452,1,0,0,0,1451,1449,1,0,0,0,1452,1453,5,304,0,0,1453,1455,1,0,0,0,1454,
	1441,1,0,0,0,1454,1443,1,0,0,0,1455,1479,1,0,0,0,1456,1458,5,25,0,0,1457,
	1456,1,0,0,0,1457,1458,1,0,0,0,1458,1459,1,0,0,0,1459,1460,5,29,0,0,1460,
	1479,3,212,106,0,1461,1463,5,31,0,0,1462,1464,5,25,0,0,1463,1462,1,0,0,
	0,1463,1464,1,0,0,0,1464,1465,1,0,0,0,1465,1479,5,290,0,0,1466,1468,5,31,
	0,0,1467,1469,5,25,0,0,1468,1467,1,0,0,0,1468,1469,1,0,0,0,1469,1470,1,
	0,0,0,1470,1479,7,25,0,0,1471,1473,5,31,0,0,1472,1474,5,25,0,0,1473,1472,
	1,0,0,0,1473,1474,1,0,0,0,1474,1475,1,0,0,0,1475,1476,5,10,0,0,1476,1477,
	5,5,0,0,1477,1479,3,212,106,0,1478,1396,1,0,0,0,1478,1404,1,0,0,0,1478,
	1419,1,0,0,0,1478,1426,1,0,0,0,1478,1432,1,0,0,0,1478,1437,1,0,0,0,1478,
	1457,1,0,0,0,1478,1461,1,0,0,0,1478,1466,1,0,0,0,1478,1471,1,0,0,0,1479,
	209,1,0,0,0,1480,1482,5,25,0,0,1481,1480,1,0,0,0,1481,1482,1,0,0,0,1482,
	1483,1,0,0,0,1483,1484,5,29,0,0,1484,1498,7,24,0,0,1485,1486,5,303,0,0,
	1486,1499,5,304,0,0,1487,1488,5,303,0,0,1488,1493,3,204,102,0,1489,1490,
	5,305,0,0,1490,1492,3,204,102,0,1491,1489,1,0,0,0,1492,1495,1,0,0,0,1493,
	1491,1,0,0,0,1493,1494,1,0,0,0,1494,1496,1,0,0,0,1495,1493,1,0,0,0,1496,
	1497,5,304,0,0,1497,1499,1,0,0,0,1498,1485,1,0,0,0,1498,1487,1,0,0,0,1499,
	1506,1,0,0,0,1500,1502,5,25,0,0,1501,1500,1,0,0,0,1501,1502,1,0,0,0,1502,
	1503,1,0,0,0,1503,1504,5,29,0,0,1504,1506,3,212,106,0,1505,1481,1,0,0,0,
	1505,1501,1,0,0,0,1506,211,1,0,0,0,1507,1508,6,106,-1,0,1508,1512,3,214,
	107,0,1509,1510,7,26,0,0,1510,1512,3,212,106,7,1511,1507,1,0,0,0,1511,1509,
	1,0,0,0,1512,1534,1,0,0,0,1513,1514,10,6,0,0,1514,1515,7,27,0,0,1515,1533,
	3,212,106,7,1516,1517,10,5,0,0,1517,1518,7,28,0,0,1518,1533,3,212,106,6,
	1519,1520,10,4,0,0,1520,1521,5,298,0,0,1521,1533,3,212,106,5,1522,1523,
	10,3,0,0,1523,1524,5,299,0,0,1524,1533,3,212,106,4,1525,1526,10,2,0,0,1526,
	1527,5,297,0,0,1527,1533,3,212,106,3,1528,1529,10,1,0,0,1529,1530,3,280,
	140,0,1530,1531,3,212,106,2,1531,1533,1,0,0,0,1532,1513,1,0,0,0,1532,1516,
	1,0,0,0,1532,1519,1,0,0,0,1532,1522,1,0,0,0,1532,1525,1,0,0,0,1532,1528,
	1,0,0,0,1533,1536,1,0,0,0,1534,1532,1,0,0,0,1534,1535,1,0,0,0,1535,213,
	1,0,0,0,1536,1534,1,0,0,0,1537,1538,6,107,-1,0,1538,1540,5,39,0,0,1539,
	1541,3,256,128,0,1540,1539,1,0,0,0,1541,1542,1,0,0,0,1542,1540,1,0,0,0,
	1542,1543,1,0,0,0,1543,1546,1,0,0,0,1544,1545,5,42,0,0,1545,1547,3,204,
	102,0,1546,1544,1,0,0,0,1546,1547,1,0,0,0,1547,1548,1,0,0,0,1548,1549,5,
	44,0,0,1549,1629,1,0,0,0,1550,1551,5,39,0,0,1551,1553,3,204,102,0,1552,
	1554,3,256,128,0,1553,1552,1,0,0,0,1554,1555,1,0,0,0,1555,1553,1,0,0,0,
	1555,1556,1,0,0,0,1556,1559,1,0,0,0,1557,1558,5,42,0,0,1558,1560,3,204,
	102,0,1559,1557,1,0,0,0,1559,1560,1,0,0,0,1560,1561,1,0,0,0,1561,1562,5,
	44,0,0,1562,1629,1,0,0,0,1563,1564,5,94,0,0,1564,1565,5,303,0,0,1565,1566,
	3,204,102,0,1566,1567,5,7,0,0,1567,1568,3,54,27,0,1568,1569,5,304,0,0,1569,
	1629,1,0,0,0,1570,1571,5,67,0,0,1571,1572,5,303,0,0,1572,1575,3,204,102,
	0,1573,1574,5,124,0,0,1574,1576,5,34,0,0,1575,1573,1,0,0,0,1575,1576,1,
	0,0,0,1576,1577,1,0,0,0,1577,1578,5,304,0,0,1578,1629,1,0,0,0,1579,1580,
	5,69,0,0,1580,1581,5,303,0,0,1581,1584,3,204,102,0,1582,1583,5,124,0,0,
	1583,1585,5,34,0,0,1584,1582,1,0,0,0,1584,1585,1,0,0,0,1585,1586,1,0,0,
	0,1586,1587,5,304,0,0,1587,1629,1,0,0,0,1588,1589,5,129,0,0,1589,1590,5,
	303,0,0,1590,1591,3,212,106,0,1591,1592,5,24,0,0,1592,1593,3,212,106,0,
	1593,1594,5,304,0,0,1594,1629,1,0,0,0,1595,1629,3,290,145,0,1596,1629,5,
	312,0,0,1597,1598,3,260,130,0,1598,1599,5,300,0,0,1599,1600,5,312,0,0,1600,
	1629,1,0,0,0,1601,1602,5,303,0,0,1602,1603,3,148,74,0,1603,1604,5,304,0,
	0,1604,1629,1,0,0,0,1605,1606,3,216,108,0,1606,1618,5,303,0,0,1607,1609,
	3,298,149,0,1608,1607,1,0,0,0,1608,1609,1,0,0,0,1609,1610,1,0,0,0,1610,
	1615,3,204,102,0,1611,1612,5,305,0,0,1612,1614,3,204,102,0,1613,1611,1,
	0,0,0,1614,1617,1,0,0,0,1615,1613,1,0,0,0,1615,1616,1,0,0,0,1616,1619,1,
	0,0,0,1617,1615,1,0,0,0,1618,1608,1,0,0,0,1618,1619,1,0,0,0,1619,1620,1,
	0,0,0,1620,1621,5,304,0,0,1621,1629,1,0,0,0,1622,1629,3,248,124,0,1623,
	1629,3,218,109,0,1624,1625,5,303,0,0,1625,1626,3,204,102,0,1626,1627,5,
	304,0,0,1627,1629,1,0,0,0,1628,1537,1,0,0,0,1628,1550,1,0,0,0,1628,1563,
	1,0,0,0,1628,1570,1,0,0,0,1628,1579,1,0,0,0,1628,1588,1,0,0,0,1628,1595,
	1,0,0,0,1628,1596,1,0,0,0,1628,1597,1,0,0,0,1628,1601,1,0,0,0,1628,1605,
	1,0,0,0,1628,1622,1,0,0,0,1628,1623,1,0,0,0,1628,1624,1,0,0,0,1629,1637,
	1,0,0,0,1630,1631,10,4,0,0,1631,1632,5,301,0,0,1632,1633,3,212,106,0,1633,
	1634,5,302,0,0,1634,1636,1,0,0,0,1635,1630,1,0,0,0,1636,1639,1,0,0,0,1637,
	1635,1,0,0,0,1637,1638,1,0,0,0,1638,215,1,0,0,0,1639,1637,1,0,0,0,1640,
	1641,3,260,130,0,1641,217,1,0,0,0,1642,1643,3,260,130,0,1643,219,1,0,0,
	0,1644,1645,3,248,124,0,1645,221,1,0,0,0,1646,1649,3,248,124,0,1647,1649,
	3,218,109,0,1648,1646,1,0,0,0,1648,1647,1,0,0,0,1649,223,1,0,0,0,1650,1653,
	5,38,0,0,1651,1654,3,226,113,0,1652,1654,3,230,115,0,1653,1651,1,0,0,0,
	1653,1652,1,0,0,0,1653,1654,1,0,0,0,1654,225,1,0,0,0,1655,1657,3,228,114,
	0,1656,1658,3,232,116,0,1657,1656,1,0,0,0,1657,1658,1,0,0,0,1658,227,1,
	0,0,0,1659,1660,3,234,117,0,1660,1661,3,248,124,0,1661,1663,1,0,0,0,1662,
	1659,1,0,0,0,1663,1664,1,0,0,0,1664,1662,1,0,0,0,1664,1665,1,0,0,0,1665,
	229,1,0,0,0,1666,1669,3,232,116,0,1667,1670,3,228,114,0,1668,1670,3,232,
	116,0,1669,1667,1,0,0,0,1669,1668,1,0,0,0,1669,1670,1,0,0,0,1670,231,1,
	0,0,0,1671,1672,3,234,117,0,1672,1673,3,248,124,0,1673,1674,5,109,0,0,1674,
	1675,3,248,124,0,1675,233,1,0,0,0,1676,1678,7,29,0,0,1677,1676,1,0,0,0,
	1677,1678,1,0,0,0,1678,1679,1,0,0,0,1679,1682,7,30,0,0,1680,1682,5,322,
	0,0,1681,1677,1,0,0,0,1681,1680,1,0,0,0,1682,235,1,0,0,0,1683,1685,5,7,
	0,0,1684,1683,1,0,0,0,1684,1685,1,0,0,0,1685,1686,1,0,0,0,1686,1688,3,250,
	125,0,1687,1689,3,244,122,0,1688,1687,1,0,0,0,1688,1689,1,0,0,0,1689,237,
	1,0,0,0,1690,1692,5,7,0,0,1691,1690,1,0,0,0,1691,1692,1,0,0,0,1692,1693,
	1,0,0,0,1693,1695,3,250,125,0,1694,1696,3,244,122,0,1695,1694,1,0,0,0,1695,
	1696,1,0,0,0,1696,239,1,0,0,0,1697,1698,3,248,124,0,1698,1699,3,242,121,
	0,1699,241,1,0,0,0,1700,1701,5,131,0,0,1701,1703,3,248,124,0,1702,1700,
	1,0,0,0,1703,1704,1,0,0,0,1704,1702,1,0,0,0,1704,1705,1,0,0,0,1705,1708,
	1,0,0,0,1706,1708,1,0,0,0,1707,1702,1,0,0,0,1707,1706,1,0,0,0,1708,243,
	1,0,0,0,1709,1710,5,303,0,0,1710,1711,3,246,123,0,1711,1712,5,304,0,0,1712,
	245,1,0,0,0,1713,1718,3,248,124,0,1714,1715,5,305,0,0,1715,1717,3,248,124,
	0,1716,1714,1,0,0,0,1717,1720,1,0,0,0,1718,1716,1,0,0,0,1718,1719,1,0,0,
	0,1719,247,1,0,0,0,1720,1718,1,0,0,0,1721,1724,3,250,125,0,1722,1724,3,
	302,151,0,1723,1721,1,0,0,0,1723,1722,1,0,0,0,1724,249,1,0,0,0,1725,1730,
	3,252,126,0,1726,1730,3,254,127,0,1727,1730,3,300,150,0,1728,1730,3,304,
	152,0,1729,1725,1,0,0,0,1729,1726,1,0,0,0,1729,1727,1,0,0,0,1729,1728,1,
	0,0,0,1730,251,1,0,0,0,1731,1732,7,31,0,0,1732,253,1,0,0,0,1733,1734,5,
	322,0,0,1734,255,1,0,0,0,1735,1736,5,40,0,0,1736,1737,3,204,102,0,1737,
	1738,5,41,0,0,1738,1739,3,204,102,0,1739,257,1,0,0,0,1740,1745,3,260,130,
	0,1741,1742,5,305,0,0,1742,1744,3,260,130,0,1743,1741,1,0,0,0,1744,1747,
	1,0,0,0,1745,1743,1,0,0,0,1745,1746,1,0,0,0,1746,259,1,0,0,0,1747,1745,
	1,0,0,0,1748,1752,5,326,0,0,1749,1751,5,320,0,0,1750,1749,1,0,0,0,1751,
	1754,1,0,0,0,1752,1753,1,0,0,0,1752,1750,1,0,0,0,1753,261,1,0,0,0,1754,
	1752,1,0,0,0,1755,1759,7,32,0,0,1756,1758,7,33,0,0,1757,1756,1,0,0,0,1758,
	1761,1,0,0,0,1759,1760,1,0,0,0,1759,1757,1,0,0,0,1760,263,1,0,0,0,1761,
	1759,1,0,0,0,1762,1763,5,70,0,0,1763,1764,3,270,135,0,1764,265,1,0,0,0,
	1765,1766,5,128,0,0,1766,1767,5,25,0,0,1767,1768,5,27,0,0,1768,267,1,0,
	0,0,1769,1770,5,128,0,0,1770,1771,5,27,0,0,1771,269,1,0,0,0,1772,1773,5,
	303,0,0,1773,1778,3,272,136,0,1774,1775,5,305,0,0,1775,1777,3,272,136,0,
	1776,1774,1,0,0,0,1777,1780,1,0,0,0,1778,1776,1,0,0,0,1778,1779,1,0,0,0,
	1779,1781,1,0,0,0,1780,1778,1,0,0,0,1781,1782,5,304,0,0,1782,271,1,0,0,
	0,1783,1788,3,274,137,0,1784,1786,5,292,0,0,1785,1784,1,0,0,0,1785,1786,
	1,0,0,0,1786,1787,1,0,0,0,1787,1789,3,276,138,0,1788,1785,1,0,0,0,1788,
	1789,1,0,0,0,1789,273,1,0,0,0,1790,1794,3,248,124,0,1791,1794,3,218,109,
	0,1792,1794,5,322,0,0,1793,1790,1,0,0,0,1793,1791,1,0,0,0,1793,1792,1,0,
	0,0,1794,275,1,0,0,0,1795,1800,5,323,0,0,1796,1800,5,324,0,0,1797,1800,
	3,296,148,0,1798,1800,5,322,0,0,1799,1795,1,0,0,0,1799,1796,1,0,0,0,1799,
	1797,1,0,0,0,1799,1798,1,0,0,0,1800,277,1,0,0,0,1801,1808,5,23,0,0,1802,
	1803,5,298,0,0,1803,1808,5,298,0,0,1804,1808,5,22,0,0,1805,1806,5,297,0,
	0,1806,1808,5,297,0,0,1807,1801,1,0,0,0,1807,1802,1,0,0,0,1807,1804,1,0,
	0,0,1807,1805,1,0,0,0,1808,279,1,0,0,0,1809,1824,5,292,0,0,1810,1824,5,
	293,0,0,1811,1824,5,294,0,0,1812,1813,5,294,0,0,1813,1824,5,292,0,0,1814,
	1815,5,293,0,0,1815,1824,5,292,0,0,1816,1817,5,294,0,0,1817,1824,5,293,
	0,0,1818,1819,5,295,0,0,1819,1824,5,292,0,0,1820,1821,5,294,0,0,1821,1822,
	5,292,0,0,1822,1824,5,293,0,0,1823,1809,1,0,0,0,1823,1810,1,0,0,0,1823,
	1811,1,0,0,0,1823,1812,1,0,0,0,1823,1814,1,0,0,0,1823,1816,1,0,0,0,1823,
	1818,1,0,0,0,1823,1820,1,0,0,0,1824,281,1,0,0,0,1825,1826,5,294,0,0,1826,
	1833,5,294,0,0,1827,1828,5,293,0,0,1828,1833,5,293,0,0,1829,1833,5,298,
	0,0,1830,1833,5,299,0,0,1831,1833,5,297,0,0,1832,1825,1,0,0,0,1832,1827,
	1,0,0,0,1832,1829,1,0,0,0,1832,1830,1,0,0,0,1832,1831,1,0,0,0,1833,283,
	1,0,0,0,1834,1835,7,34,0,0,1835,285,1,0,0,0,1836,1837,7,35,0,0,1837,287,
	1,0,0,0,1838,1839,3,260,130,0,1839,289,1,0,0,0,1840,1853,3,292,146,0,1841,
	1853,3,294,147,0,1842,1853,3,224,112,0,1843,1844,5,314,0,0,1844,1853,3,
	294,147,0,1845,1853,3,296,148,0,1846,1853,5,324,0,0,1847,1853,5,325,0,0,
	1848,1850,5,25,0,0,1849,1848,1,0,0,0,1849,1850,1,0,0,0,1850,1851,1,0,0,
	0,1851,1853,5,290,0,0,1852,1840,1,0,0,0,1852,1841,1,0,0,0,1852,1842,1,0,
	0,0,1852,1843,1,0,0,0,1852,1845,1,0,0,0,1852,1846,1,0,0,0,1852,1847,1,0,
	0,0,1852,1849,1,0,0,0,1853,291,1,0,0,0,1854,1855,5,322,0,0,1855,293,1,0,
	0,0,1856,1857,5,323,0,0,1857,295,1,0,0,0,1858,1859,7,25,0,0,1859,297,1,
	0,0,0,1860,1861,7,36,0,0,1861,299,1,0,0,0,1862,1863,7,37,0,0,1863,301,1,
	0,0,0,1864,1865,7,38,0,0,1865,303,1,0,0,0,1866,1867,7,39,0,0,1867,305,1,
	0,0,0,223,314,317,319,334,352,356,365,370,377,384,388,397,409,412,419,427,
	432,435,442,450,454,466,474,478,499,503,507,511,520,525,529,533,537,540,
	544,549,555,560,565,568,572,580,588,592,596,600,604,608,612,616,620,622,
	632,640,664,671,686,689,697,709,733,746,751,755,763,767,775,785,789,795,
	799,803,806,815,819,826,829,839,849,864,875,879,886,891,897,901,908,912,
	916,920,928,932,937,942,948,951,955,966,975,988,1000,1011,1014,1018,1021,
	1023,1028,1032,1035,1039,1048,1058,1063,1075,1078,1081,1084,1088,1096,1099,
	1103,1106,1117,1126,1129,1132,1137,1139,1141,1146,1149,1153,1156,1159,1171,
	1178,1189,1210,1215,1227,1239,1251,1263,1276,1281,1293,1298,1303,1311,1319,
	1329,1332,1341,1344,1347,1353,1357,1363,1380,1382,1390,1392,1396,1404,1413,
	1419,1432,1437,1449,1454,1457,1463,1468,1473,1478,1481,1493,1498,1501,1505,
	1511,1532,1534,1542,1546,1555,1559,1575,1584,1608,1615,1618,1628,1637,1648,
	1653,1657,1664,1669,1677,1681,1684,1688,1691,1695,1704,1707,1718,1723,1729,
	1745,1752,1759,1778,1785,1788,1793,1799,1807,1823,1832,1849,1852];

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
