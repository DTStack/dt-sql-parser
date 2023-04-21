// dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.12.0
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
	public static readonly VALUES = 71;
	public static readonly CREATE = 72;
	public static readonly TABLE = 73;
	public static readonly DIRECTORY = 74;
	public static readonly VIEW = 75;
	public static readonly REPLACE = 76;
	public static readonly EXECUTE = 77;
	public static readonly STATEMENT = 78;
	public static readonly INSERT = 79;
	public static readonly DELETE = 80;
	public static readonly REMOVE = 81;
	public static readonly INTO = 82;
	public static readonly DESCRIBE = 83;
	public static readonly EXPLAIN = 84;
	public static readonly PLAN = 85;
	public static readonly CHANGELOG_MODE = 86;
	public static readonly JSON_EXECUTION_PLAN = 87;
	public static readonly ESTIMATED_COST = 88;
	public static readonly FORMAT = 89;
	public static readonly LOGICAL = 90;
	public static readonly CODEGEN = 91;
	public static readonly COST = 92;
	public static readonly CAST = 93;
	public static readonly SHOW = 94;
	public static readonly TABLES = 95;
	public static readonly COLUMNS = 96;
	public static readonly COLUMN = 97;
	public static readonly USE = 98;
	public static readonly MODULE = 99;
	public static readonly MODULES = 100;
	public static readonly PARTITIONS = 101;
	public static readonly FUNCTIONS = 102;
	public static readonly DROP = 103;
	public static readonly UNION = 104;
	public static readonly EXCEPT = 105;
	public static readonly SETMINUS = 106;
	public static readonly INTERSECT = 107;
	public static readonly TO = 108;
	public static readonly TABLESAMPLE = 109;
	public static readonly STRATIFY = 110;
	public static readonly ALTER = 111;
	public static readonly RENAME = 112;
	public static readonly STRUCT = 113;
	public static readonly COMMENT = 114;
	public static readonly SET = 115;
	public static readonly RESET = 116;
	public static readonly DATA = 117;
	public static readonly START = 118;
	public static readonly TRANSACTION = 119;
	public static readonly COMMIT = 120;
	public static readonly ROLLBACK = 121;
	public static readonly MACRO = 122;
	public static readonly IGNORE = 123;
	public static readonly BOTH = 124;
	public static readonly LEADING = 125;
	public static readonly TRAILING = 126;
	public static readonly IF = 127;
	public static readonly POSITION = 128;
	public static readonly EXTRACT = 129;
	public static readonly MINUS = 130;
	public static readonly DIV = 131;
	public static readonly PERCENTLIT = 132;
	public static readonly BUCKET = 133;
	public static readonly OUT = 134;
	public static readonly OF = 135;
	public static readonly SORT = 136;
	public static readonly CLUSTER = 137;
	public static readonly DISTRIBUTE = 138;
	public static readonly OVERWRITE = 139;
	public static readonly TRANSFORM = 140;
	public static readonly REDUCE = 141;
	public static readonly USING = 142;
	public static readonly SERDE = 143;
	public static readonly SERDEPROPERTIES = 144;
	public static readonly RECORDREADER = 145;
	public static readonly RECORDWRITER = 146;
	public static readonly DELIMITED = 147;
	public static readonly FIELDS = 148;
	public static readonly TERMINATED = 149;
	public static readonly COLLECTION = 150;
	public static readonly ITEMS = 151;
	public static readonly KEYS = 152;
	public static readonly ESCAPED = 153;
	public static readonly LINES = 154;
	public static readonly SEPARATED = 155;
	public static readonly FUNCTION = 156;
	public static readonly EXTENDED = 157;
	public static readonly REFRESH = 158;
	public static readonly CLEAR = 159;
	public static readonly CACHE = 160;
	public static readonly UNCACHE = 161;
	public static readonly LAZY = 162;
	public static readonly FORMATTED = 163;
	public static readonly GLOBAL = 164;
	public static readonly TEMPORARY = 165;
	public static readonly OPTIONS = 166;
	public static readonly UNSET = 167;
	public static readonly TBLPROPERTIES = 168;
	public static readonly DBPROPERTIES = 169;
	public static readonly BUCKETS = 170;
	public static readonly SKEWED = 171;
	public static readonly STORED = 172;
	public static readonly DIRECTORIES = 173;
	public static readonly LOCATION = 174;
	public static readonly EXCHANGE = 175;
	public static readonly ARCHIVE = 176;
	public static readonly UNARCHIVE = 177;
	public static readonly FILEFORMAT = 178;
	public static readonly TOUCH = 179;
	public static readonly COMPACT = 180;
	public static readonly CONCATENATE = 181;
	public static readonly CHANGE = 182;
	public static readonly CASCADE = 183;
	public static readonly CONSTRAINT = 184;
	public static readonly RESTRICT = 185;
	public static readonly CLUSTERED = 186;
	public static readonly SORTED = 187;
	public static readonly PURGE = 188;
	public static readonly INPUTFORMAT = 189;
	public static readonly OUTPUTFORMAT = 190;
	public static readonly DATABASE = 191;
	public static readonly DATABASES = 192;
	public static readonly DFS = 193;
	public static readonly TRUNCATE = 194;
	public static readonly ANALYZE = 195;
	public static readonly COMPUTE = 196;
	public static readonly LIST = 197;
	public static readonly STATISTICS = 198;
	public static readonly PARTITIONED = 199;
	public static readonly EXTERNAL = 200;
	public static readonly DEFINED = 201;
	public static readonly REVOKE = 202;
	public static readonly GRANT = 203;
	public static readonly LOCK = 204;
	public static readonly UNLOCK = 205;
	public static readonly MSCK = 206;
	public static readonly REPAIR = 207;
	public static readonly RECOVER = 208;
	public static readonly EXPORT = 209;
	public static readonly IMPORT = 210;
	public static readonly LOAD = 211;
	public static readonly UNLOAD = 212;
	public static readonly ROLE = 213;
	public static readonly ROLES = 214;
	public static readonly COMPACTIONS = 215;
	public static readonly PRINCIPALS = 216;
	public static readonly TRANSACTIONS = 217;
	public static readonly INDEX = 218;
	public static readonly INDEXES = 219;
	public static readonly LOCKS = 220;
	public static readonly OPTION = 221;
	public static readonly ANTI = 222;
	public static readonly LOCAL = 223;
	public static readonly INPATH = 224;
	public static readonly WATERMARK = 225;
	public static readonly UNNEST = 226;
	public static readonly MATCH = 227;
	public static readonly NEXT = 228;
	public static readonly WITHIN = 229;
	public static readonly WS = 230;
	public static readonly SYSTEM = 231;
	public static readonly INCLUDING = 232;
	public static readonly EXCLUDING = 233;
	public static readonly OVERWRITING = 234;
	public static readonly CONSTRAINTS = 235;
	public static readonly GENERATED = 236;
	public static readonly WATERMARKS = 237;
	public static readonly CATALOG = 238;
	public static readonly LANGUAGE = 239;
	public static readonly JAVA = 240;
	public static readonly SCALA = 241;
	public static readonly PYTHON = 242;
	public static readonly JAR = 243;
	public static readonly FILE = 244;
	public static readonly PYTHON_FILES = 245;
	public static readonly PYTHON_REQUIREMENTS = 246;
	public static readonly PYTHON_DEPENDENCIES = 247;
	public static readonly PYTHON_JAR = 248;
	public static readonly PYTHON_ARCHIVES = 249;
	public static readonly PYTHON_PARAMETER = 250;
	public static readonly ENGINE = 251;
	public static readonly CATALOGS = 252;
	public static readonly VIEWS = 253;
	public static readonly JARS = 254;
	public static readonly PRIMARY = 255;
	public static readonly KEY = 256;
	public static readonly PERIOD = 257;
	public static readonly SYSTEM_TIME = 258;
	public static readonly ENFORCED = 259;
	public static readonly METADATA = 260;
	public static readonly VIRTUAL = 261;
	public static readonly STRING = 262;
	public static readonly ARRAY = 263;
	public static readonly MAP = 264;
	public static readonly CHAR = 265;
	public static readonly VARCHAR = 266;
	public static readonly BINARY = 267;
	public static readonly VARBINARY = 268;
	public static readonly BYTES = 269;
	public static readonly DECIMAL = 270;
	public static readonly DEC = 271;
	public static readonly NUMERIC = 272;
	public static readonly TINYINT = 273;
	public static readonly SMALLINT = 274;
	public static readonly INT = 275;
	public static readonly INTEGER = 276;
	public static readonly BIGINT = 277;
	public static readonly FLOAT = 278;
	public static readonly DOUBLE = 279;
	public static readonly DATE = 280;
	public static readonly TIME = 281;
	public static readonly TIMESTAMP = 282;
	public static readonly TIMESTAMP_LTZ = 283;
	public static readonly MULTISET = 284;
	public static readonly BOOLEAN = 285;
	public static readonly RAW = 286;
	public static readonly ROW = 287;
	public static readonly NULL = 288;
	public static readonly DATETIME = 289;
	public static readonly EQUAL_SYMBOL = 290;
	public static readonly GREATER_SYMBOL = 291;
	public static readonly LESS_SYMBOL = 292;
	public static readonly EXCLAMATION_SYMBOL = 293;
	public static readonly BIT_NOT_OP = 294;
	public static readonly BIT_OR_OP = 295;
	public static readonly BIT_AND_OP = 296;
	public static readonly BIT_XOR_OP = 297;
	public static readonly DOT = 298;
	public static readonly LS_BRACKET = 299;
	public static readonly RS_BRACKET = 300;
	public static readonly LR_BRACKET = 301;
	public static readonly RR_BRACKET = 302;
	public static readonly COMMA = 303;
	public static readonly SEMICOLON = 304;
	public static readonly AT_SIGN = 305;
	public static readonly SINGLE_QUOTE_SYMB = 306;
	public static readonly DOUBLE_QUOTE_SYMB = 307;
	public static readonly REVERSE_QUOTE_SYMB = 308;
	public static readonly COLON_SYMB = 309;
	public static readonly ASTERISK_SIGN = 310;
	public static readonly UNDERLINE_SIGN = 311;
	public static readonly HYPNEN_SIGN = 312;
	public static readonly ADD_SIGN = 313;
	public static readonly PENCENT_SIGN = 314;
	public static readonly DOUBLE_VERTICAL_SIGN = 315;
	public static readonly DOUBLE_HYPNEN_SIGN = 316;
	public static readonly SLASH_SIGN = 317;
	public static readonly DOT_ID = 318;
	public static readonly PLUS_DOT_ID = 319;
	public static readonly STRING_LITERAL = 320;
	public static readonly DIG_LITERAL = 321;
	public static readonly REAL_LITERAL = 322;
	public static readonly BIT_STRING = 323;
	public static readonly ID_LITERAL = 324;
	public static readonly PLUS_ID_LITERAL = 325;
	public static readonly FILE_PATH = 326;
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
	public static readonly RULE_insertColumnListDefinition = 71;
	public static readonly RULE_valuesDefinition = 72;
	public static readonly RULE_valuesRowDefinition = 73;
	public static readonly RULE_insertMulStatementCompatibility = 74;
	public static readonly RULE_insertMulStatement = 75;
	public static readonly RULE_queryStatement = 76;
	public static readonly RULE_valuesCaluse = 77;
	public static readonly RULE_withItem = 78;
	public static readonly RULE_withItemName = 79;
	public static readonly RULE_selectStatement = 80;
	public static readonly RULE_selectClause = 81;
	public static readonly RULE_projectItemDefinition = 82;
	public static readonly RULE_fromClause = 83;
	public static readonly RULE_tableExpression = 84;
	public static readonly RULE_tableReference = 85;
	public static readonly RULE_tablePrimary = 86;
	public static readonly RULE_tablePath = 87;
	public static readonly RULE_systemTimePeriod = 88;
	public static readonly RULE_dateTimeExpression = 89;
	public static readonly RULE_joinCondition = 90;
	public static readonly RULE_whereClause = 91;
	public static readonly RULE_groupByClause = 92;
	public static readonly RULE_groupItemDefinition = 93;
	public static readonly RULE_havingClause = 94;
	public static readonly RULE_orderByCaluse = 95;
	public static readonly RULE_orderItemDefition = 96;
	public static readonly RULE_limitClause = 97;
	public static readonly RULE_windowClause = 98;
	public static readonly RULE_namedWindow = 99;
	public static readonly RULE_windowSpec = 100;
	public static readonly RULE_sortItem = 101;
	public static readonly RULE_windowFrame = 102;
	public static readonly RULE_frameBound = 103;
	public static readonly RULE_expression = 104;
	public static readonly RULE_booleanExpression = 105;
	public static readonly RULE_predicate = 106;
	public static readonly RULE_likePredicate = 107;
	public static readonly RULE_valueExpression = 108;
	public static readonly RULE_primaryExpression = 109;
	public static readonly RULE_functionName = 110;
	public static readonly RULE_dereferenceDefinition = 111;
	public static readonly RULE_correlationName = 112;
	public static readonly RULE_qualifiedName = 113;
	public static readonly RULE_interval = 114;
	public static readonly RULE_errorCapturingMultiUnitsInterval = 115;
	public static readonly RULE_multiUnitsInterval = 116;
	public static readonly RULE_errorCapturingUnitToUnitInterval = 117;
	public static readonly RULE_unitToUnitInterval = 118;
	public static readonly RULE_intervalValue = 119;
	public static readonly RULE_columnAlias = 120;
	public static readonly RULE_tableAlias = 121;
	public static readonly RULE_errorCapturingIdentifier = 122;
	public static readonly RULE_errorCapturingIdentifierExtra = 123;
	public static readonly RULE_identifierList = 124;
	public static readonly RULE_identifierSeq = 125;
	public static readonly RULE_identifier = 126;
	public static readonly RULE_strictIdentifier = 127;
	public static readonly RULE_unquotedIdentifier = 128;
	public static readonly RULE_quotedIdentifier = 129;
	public static readonly RULE_whenClause = 130;
	public static readonly RULE_uidList = 131;
	public static readonly RULE_uid = 132;
	public static readonly RULE_plusUid = 133;
	public static readonly RULE_withOption = 134;
	public static readonly RULE_ifNotExists = 135;
	public static readonly RULE_ifExists = 136;
	public static readonly RULE_tablePropertyList = 137;
	public static readonly RULE_tableProperty = 138;
	public static readonly RULE_tablePropertyKey = 139;
	public static readonly RULE_tablePropertyValue = 140;
	public static readonly RULE_logicalOperator = 141;
	public static readonly RULE_comparisonOperator = 142;
	public static readonly RULE_bitOperator = 143;
	public static readonly RULE_mathOperator = 144;
	public static readonly RULE_unaryOperator = 145;
	public static readonly RULE_fullColumnName = 146;
	public static readonly RULE_constant = 147;
	public static readonly RULE_stringLiteral = 148;
	public static readonly RULE_decimalLiteral = 149;
	public static readonly RULE_booleanLiteral = 150;
	public static readonly RULE_setQuantifier = 151;
	public static readonly RULE_ansiNonReserved = 152;
	public static readonly RULE_strictNonReserved = 153;
	public static readonly RULE_nonReserved = 154;
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
		"insertColumnListDefinition", "valuesDefinition", "valuesRowDefinition", 
		"insertMulStatementCompatibility", "insertMulStatement", "queryStatement", 
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
			this.state = 310;
			this.statement();
			this.state = 311;
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
			this.state = 313;
			this.sqlStatements();
			this.state = 314;
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
			this.state = 323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4 || _la===6 || _la===36 || _la===43 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 285239943) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 12545) !== 0) || _la===211 || _la===212 || _la===301 || _la===304) {
				{
				this.state = 321;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 4:
				case 6:
				case 36:
				case 43:
				case 70:
				case 71:
				case 72:
				case 77:
				case 79:
				case 81:
				case 83:
				case 84:
				case 94:
				case 98:
				case 103:
				case 111:
				case 115:
				case 116:
				case 211:
				case 212:
				case 301:
					{
					this.state = 316;
					this.sqlStatement();
					this.state = 318;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 317;
						this.match(FlinkSqlParser.SEMICOLON);
						}
						break;
					}
					}
					break;
				case 304:
					{
					this.state = 320;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 325;
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
			this.state = 338;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 326;
				this.ddlStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 327;
				this.dmlStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 328;
				this.describeStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 329;
				this.explainStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 330;
				this.useStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 331;
				this.showStatememt();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 332;
				this.loadStatement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 333;
				this.unloadStatememt();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 334;
				this.setStatememt();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 335;
				this.resetStatememt();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 336;
				this.jarStatememt();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 337;
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
			this.state = 340;
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
			this.state = 356;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 342;
				this.createTable();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 343;
				this.createDatabase();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 344;
				this.createView();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 345;
				this.createFunction();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 346;
				this.createCatalog();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 347;
				this.alterTable();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 348;
				this.alertView();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 349;
				this.alterDatabase();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 350;
				this.alterFunction();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 351;
				this.dropCatalog();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 352;
				this.dropTable();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 353;
				this.dropDatabase();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 354;
				this.dropView();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 355;
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
			this.state = 360;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
			case 70:
			case 71:
			case 301:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 358;
				this.queryStatement(0);
				}
				break;
			case 43:
			case 77:
			case 79:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 359;
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
			this.state = 362;
			_la = this._input.LA(1);
			if(!(_la===36 || _la===83)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 363;
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
			this.state = 365;
			this.match(FlinkSqlParser.EXPLAIN);
			this.state = 369;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
			case 87:
			case 88:
				{
				this.state = 366;
				this.explainDetails();
				}
				break;
			case 85:
				{
				this.state = 367;
				this.match(FlinkSqlParser.PLAN);
				this.state = 368;
				this.match(FlinkSqlParser.FOR);
				}
				break;
			case 4:
			case 43:
			case 70:
			case 71:
			case 77:
			case 78:
			case 79:
			case 301:
				break;
			default:
				break;
			}
			this.state = 374;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 371;
				this.dmlStatement();
				}
				break;
			case 2:
				{
				this.state = 372;
				this.insertSimpleStatement();
				}
				break;
			case 3:
				{
				this.state = 373;
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
			this.state = 376;
			this.explainDetail();
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===303) {
				{
				{
				this.state = 377;
				this.match(FlinkSqlParser.COMMA);
				this.state = 378;
				this.explainDetail();
				}
				}
				this.state = 383;
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
			this.state = 384;
			_la = this._input.LA(1);
			if(!(((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 7) !== 0))) {
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
			this.state = 392;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 386;
				this.match(FlinkSqlParser.USE);
				this.state = 388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===238) {
					{
					this.state = 387;
					this.match(FlinkSqlParser.CATALOG);
					}
				}

				this.state = 390;
				this.uid();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 391;
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
			this.state = 394;
			this.match(FlinkSqlParser.USE);
			this.state = 395;
			this.match(FlinkSqlParser.MODULES);
			this.state = 396;
			this.uid();
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===303) {
				{
				{
				this.state = 397;
				this.match(FlinkSqlParser.COMMA);
				this.state = 398;
				this.uid();
				}
				}
				this.state = 403;
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
			this.state = 439;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 404;
				this.match(FlinkSqlParser.SHOW);
				this.state = 405;
				_la = this._input.LA(1);
				if(!(_la===192 || ((((_la - 252)) & ~0x1F) === 0 && ((1 << (_la - 252)) & 7) !== 0))) {
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
				this.state = 406;
				this.match(FlinkSqlParser.SHOW);
				this.state = 407;
				this.match(FlinkSqlParser.CURRENT);
				this.state = 408;
				_la = this._input.LA(1);
				if(!(_la===191 || _la===238)) {
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
				this.state = 409;
				this.match(FlinkSqlParser.SHOW);
				this.state = 410;
				this.match(FlinkSqlParser.TABLES);
				this.state = 413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===5 || _la===24) {
					{
					this.state = 411;
					_la = this._input.LA(1);
					if(!(_la===5 || _la===24)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 412;
					this.uid();
					}
				}

				this.state = 416;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25 || _la===29) {
					{
					this.state = 415;
					this.likePredicate();
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 418;
				this.match(FlinkSqlParser.SHOW);
				this.state = 419;
				this.match(FlinkSqlParser.COLUMNS);
				this.state = 420;
				_la = this._input.LA(1);
				if(!(_la===5 || _la===24)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 421;
				this.uid();
				this.state = 423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25 || _la===29) {
					{
					this.state = 422;
					this.likePredicate();
					}
				}

				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 425;
				this.match(FlinkSqlParser.SHOW);
				this.state = 426;
				this.match(FlinkSqlParser.CREATE);
				this.state = 427;
				_la = this._input.LA(1);
				if(!(_la===73 || _la===75)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 428;
				this.uid();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 429;
				this.match(FlinkSqlParser.SHOW);
				this.state = 431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 430;
					this.match(FlinkSqlParser.USER);
					}
				}

				this.state = 433;
				this.match(FlinkSqlParser.FUNCTIONS);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 434;
				this.match(FlinkSqlParser.SHOW);
				this.state = 436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===52) {
					{
					this.state = 435;
					this.match(FlinkSqlParser.FULL);
					}
				}

				this.state = 438;
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
			this.state = 441;
			this.match(FlinkSqlParser.LOAD);
			this.state = 442;
			this.match(FlinkSqlParser.MODULE);
			this.state = 443;
			this.uid();
			this.state = 446;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 444;
				this.match(FlinkSqlParser.WITH);
				this.state = 445;
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
			this.state = 448;
			this.match(FlinkSqlParser.UNLOAD);
			this.state = 449;
			this.match(FlinkSqlParser.MODULE);
			this.state = 450;
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
			this.state = 452;
			this.match(FlinkSqlParser.SET);
			this.state = 454;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 453;
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
			this.state = 456;
			this.match(FlinkSqlParser.RESET);
			this.state = 458;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 457;
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
			this.state = 460;
			_la = this._input.LA(1);
			if(!(_la===6 || _la===81)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 461;
			this.match(FlinkSqlParser.JAR);
			this.state = 462;
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
			this.state = 503;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 464;
				this.match(FlinkSqlParser.ADD);
				this.state = 465;
				this.match(FlinkSqlParser.JAR);
				this.state = 466;
				this.match(FlinkSqlParser.WITH);
				this.state = 467;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===7) {
					{
					this.state = 468;
					this.match(FlinkSqlParser.AS);
					this.state = 469;
					this.uid();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 472;
				this.match(FlinkSqlParser.ADD);
				this.state = 473;
				this.match(FlinkSqlParser.FILE);
				this.state = 474;
				this.match(FlinkSqlParser.WITH);
				this.state = 475;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===7) {
					{
					this.state = 476;
					this.match(FlinkSqlParser.AS);
					this.state = 477;
					this.uid();
					}
				}

				this.state = 482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===112) {
					{
					this.state = 480;
					this.match(FlinkSqlParser.RENAME);
					this.state = 481;
					this.uid();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 484;
				this.match(FlinkSqlParser.ADD);
				this.state = 485;
				_la = this._input.LA(1);
				if(!(((((_la - 245)) & ~0x1F) === 0 && ((1 << (_la - 245)) & 31) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 486;
				this.match(FlinkSqlParser.WITH);
				this.state = 487;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 488;
				this.match(FlinkSqlParser.RENAME);
				this.state = 489;
				this.uid();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 490;
				this.match(FlinkSqlParser.ADD);
				this.state = 491;
				this.match(FlinkSqlParser.PYTHON_PARAMETER);
				this.state = 492;
				this.match(FlinkSqlParser.FILE_PATH);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 493;
				this.match(FlinkSqlParser.ADD);
				this.state = 494;
				this.match(FlinkSqlParser.ENGINE);
				this.state = 495;
				this.match(FlinkSqlParser.FILE);
				this.state = 496;
				this.match(FlinkSqlParser.WITH);
				this.state = 497;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 498;
				this.match(FlinkSqlParser.RENAME);
				this.state = 499;
				this.uid();
				this.state = 500;
				this.match(FlinkSqlParser.KEY);
				this.state = 501;
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
			this.state = 507;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 505;
				this.simpleCreateTable();
				}
				break;
			case 2:
				{
				this.state = 506;
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
			this.state = 509;
			this.match(FlinkSqlParser.CREATE);
			this.state = 511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===165) {
				{
				this.state = 510;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 513;
			this.match(FlinkSqlParser.TABLE);
			this.state = 515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===127) {
				{
				this.state = 514;
				this.ifNotExists();
				}
			}

			this.state = 517;
			this.sourceTable();
			this.state = 518;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 519;
			this.columnOptionDefinition();
			this.state = 524;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 520;
					this.match(FlinkSqlParser.COMMA);
					this.state = 521;
					this.columnOptionDefinition();
					}
					}
				}
				this.state = 526;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 529;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 527;
				this.match(FlinkSqlParser.COMMA);
				this.state = 528;
				this.watermarkDefinition();
				}
				break;
			}
			this.state = 533;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 531;
				this.match(FlinkSqlParser.COMMA);
				this.state = 532;
				this.tableConstraint();
				}
				break;
			}
			this.state = 537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===303) {
				{
				this.state = 535;
				this.match(FlinkSqlParser.COMMA);
				this.state = 536;
				this.selfDefinitionClause();
				}
			}

			this.state = 539;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 541;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===114) {
				{
				this.state = 540;
				this.commentSpec();
				}
			}

			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===199) {
				{
				this.state = 543;
				this.partitionDefinition();
				}
			}

			this.state = 546;
			this.withOption();
			this.state = 548;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===29) {
				{
				this.state = 547;
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
			this.state = 550;
			this.match(FlinkSqlParser.CREATE);
			this.state = 551;
			this.match(FlinkSqlParser.TABLE);
			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===127) {
				{
				this.state = 552;
				this.ifNotExists();
				}
			}

			this.state = 555;
			this.sourceTable();
			this.state = 556;
			this.withOption();
			this.state = 559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 557;
				this.match(FlinkSqlParser.AS);
				this.state = 558;
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
			this.state = 564;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 561;
				this.physicalColumnDefinition();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 562;
				this.metadataColumnDefinition();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 563;
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
			this.state = 566;
			this.columnName();
			this.state = 567;
			this.columnType();
			this.state = 569;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===184 || _la===255) {
				{
				this.state = 568;
				this.columnConstraint();
				}
			}

			this.state = 572;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===114) {
				{
				this.state = 571;
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
			this.state = 576;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 574;
				this.plusUid();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 575;
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
			this.state = 578;
			this.columnName();
			this.state = 583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===303) {
				{
				{
				this.state = 579;
				this.match(FlinkSqlParser.COMMA);
				this.state = 580;
				this.columnName();
				}
				}
				this.state = 585;
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
	public columnType(): ColumnTypeContext {
		let localctx: ColumnTypeContext = new ColumnTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, FlinkSqlParser.RULE_columnType);
		let _la: number;
		try {
			this.state = 611;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 280:
			case 285:
			case 288:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 586;
				localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 280)) & ~0x1F) === 0 && ((1 << (_la - 280)) & 289) !== 0))) {
				    localctx._typeName = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 262:
			case 265:
			case 266:
			case 267:
			case 268:
			case 269:
			case 273:
			case 274:
			case 275:
			case 276:
			case 277:
			case 281:
			case 282:
			case 283:
			case 289:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 587;
				localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 262)) & ~0x1F) === 0 && ((1 << (_la - 262)) & 137951481) !== 0))) {
				    localctx._typeName = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 589;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===301) {
					{
					this.state = 588;
					this.lengthOneDimension();
					}
				}

				}
				break;
			case 270:
			case 271:
			case 272:
			case 278:
			case 279:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 591;
				localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 270)) & ~0x1F) === 0 && ((1 << (_la - 270)) & 775) !== 0))) {
				    localctx._typeName = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===301) {
					{
					this.state = 592;
					this.lengthTwoOptionalDimension();
					}
				}

				}
				break;
			case 263:
			case 284:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 595;
				localctx._type_ = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===263 || _la===284)) {
				    localctx._type_ = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===292) {
					{
					this.state = 596;
					this.lengthOneTypeDimension();
					}
				}

				}
				break;
			case 264:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 599;
				localctx._type_ = this.match(FlinkSqlParser.MAP);
				this.state = 601;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===292) {
					{
					this.state = 600;
					this.mapTypeDimension();
					}
				}

				}
				break;
			case 287:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 603;
				localctx._type_ = this.match(FlinkSqlParser.ROW);
				this.state = 605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===292) {
					{
					this.state = 604;
					this.rowTypeDimension();
					}
				}

				}
				break;
			case 286:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 607;
				localctx._type_ = this.match(FlinkSqlParser.RAW);
				this.state = 609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===301) {
					{
					this.state = 608;
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
			this.state = 613;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 614;
			this.decimalLiteral();
			this.state = 615;
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
			this.state = 617;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 618;
			this.decimalLiteral();
			this.state = 621;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===303) {
				{
				this.state = 619;
				this.match(FlinkSqlParser.COMMA);
				this.state = 620;
				this.decimalLiteral();
				}
			}

			this.state = 623;
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
			this.state = 625;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 626;
			this.stringLiteral();
			this.state = 629;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===303) {
				{
				this.state = 627;
				this.match(FlinkSqlParser.COMMA);
				this.state = 628;
				this.stringLiteral();
				}
			}

			this.state = 631;
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
			this.state = 633;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 634;
			this.columnType();
			this.state = 635;
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
			this.state = 637;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 638;
			this.columnType();
			{
			this.state = 639;
			this.match(FlinkSqlParser.COMMA);
			this.state = 640;
			this.columnType();
			}
			this.state = 642;
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
			this.state = 644;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 645;
			this.columnName();
			this.state = 646;
			this.columnType();
			this.state = 653;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===303) {
				{
				{
				this.state = 647;
				this.match(FlinkSqlParser.COMMA);
				this.state = 648;
				this.columnName();
				this.state = 649;
				this.columnType();
				}
				}
				this.state = 655;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 656;
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
			this.state = 660;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===184) {
				{
				this.state = 658;
				this.match(FlinkSqlParser.CONSTRAINT);
				this.state = 659;
				this.constraintName();
				}
			}

			this.state = 662;
			this.match(FlinkSqlParser.PRIMARY);
			this.state = 663;
			this.match(FlinkSqlParser.KEY);
			this.state = 666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 664;
				this.match(FlinkSqlParser.NOT);
				this.state = 665;
				this.match(FlinkSqlParser.ENFORCED);
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
	public commentSpec(): CommentSpecContext {
		let localctx: CommentSpecContext = new CommentSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, FlinkSqlParser.RULE_commentSpec);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 668;
			this.match(FlinkSqlParser.COMMENT);
			this.state = 669;
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
			this.state = 671;
			this.columnName();
			this.state = 672;
			this.columnType();
			this.state = 673;
			this.match(FlinkSqlParser.METADATA);
			this.state = 676;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 674;
				this.match(FlinkSqlParser.FROM);
				this.state = 675;
				this.metadataKey();
				}
			}

			this.state = 679;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===261) {
				{
				this.state = 678;
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
	public computedColumnDefinition(): ComputedColumnDefinitionContext {
		let localctx: ComputedColumnDefinitionContext = new ComputedColumnDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, FlinkSqlParser.RULE_computedColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 683;
			this.columnName();
			this.state = 684;
			this.match(FlinkSqlParser.AS);
			this.state = 685;
			this.computedColumnExpression();
			this.state = 687;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===114) {
				{
				this.state = 686;
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
			this.state = 689;
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
			this.state = 691;
			this.match(FlinkSqlParser.WATERMARK);
			this.state = 692;
			this.match(FlinkSqlParser.FOR);
			this.state = 693;
			this.expression();
			this.state = 694;
			this.match(FlinkSqlParser.AS);
			this.state = 695;
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
			this.state = 699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===184) {
				{
				this.state = 697;
				this.match(FlinkSqlParser.CONSTRAINT);
				this.state = 698;
				this.constraintName();
				}
			}

			this.state = 701;
			this.match(FlinkSqlParser.PRIMARY);
			this.state = 702;
			this.match(FlinkSqlParser.KEY);
			this.state = 703;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 704;
			this.columnNameList();
			this.state = 705;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 706;
				this.match(FlinkSqlParser.NOT);
				this.state = 707;
				this.match(FlinkSqlParser.ENFORCED);
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
	public constraintName(): ConstraintNameContext {
		let localctx: ConstraintNameContext = new ConstraintNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, FlinkSqlParser.RULE_constraintName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 710;
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
			this.state = 712;
			this.match(FlinkSqlParser.PERIOD);
			this.state = 713;
			this.match(FlinkSqlParser.FOR);
			this.state = 714;
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
			this.state = 716;
			this.match(FlinkSqlParser.PARTITIONED);
			this.state = 717;
			this.match(FlinkSqlParser.BY);
			this.state = 718;
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
			this.state = 720;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 721;
			this.transform();
			this.state = 726;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===303) {
				{
				{
				this.state = 722;
				this.match(FlinkSqlParser.COMMA);
				this.state = 723;
				this.transform();
				}
				}
				this.state = 728;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 729;
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
			this.state = 744;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				localctx = new IdentityTransformContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 731;
				this.qualifiedName();
				}
				break;
			case 2:
				localctx = new ApplyTransformContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 732;
				(localctx as ApplyTransformContext)._transformName = this.identifier();
				this.state = 733;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 734;
				this.transformArgument();
				this.state = 739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===303) {
					{
					{
					this.state = 735;
					this.match(FlinkSqlParser.COMMA);
					this.state = 736;
					this.transformArgument();
					}
					}
					this.state = 741;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 742;
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
			this.state = 748;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 746;
				this.qualifiedName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 747;
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
			this.state = 750;
			this.match(FlinkSqlParser.LIKE);
			this.state = 751;
			this.sourceTable();
			this.state = 760;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 752;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 756;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & 7) !== 0)) {
					{
					{
					this.state = 753;
					this.likeOption();
					}
					}
					this.state = 758;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 759;
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
			this.state = 762;
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
			this.state = 768;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 764;
				_la = this._input.LA(1);
				if(!(_la===232 || _la===233)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 765;
				_la = this._input.LA(1);
				if(!(_la===8 || _la===101 || _la===235)) {
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
				this.state = 766;
				_la = this._input.LA(1);
				if(!(((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & 7) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 767;
				_la = this._input.LA(1);
				if(!(_la===166 || _la===236 || _la===237)) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 770;
			this.match(FlinkSqlParser.CREATE);
			this.state = 771;
			this.match(FlinkSqlParser.CATALOG);
			this.state = 772;
			this.uid();
			this.state = 773;
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
			this.state = 775;
			this.match(FlinkSqlParser.CREATE);
			this.state = 776;
			this.match(FlinkSqlParser.DATABASE);
			this.state = 778;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===127) {
				{
				this.state = 777;
				this.ifNotExists();
				}
			}

			this.state = 780;
			this.uid();
			this.state = 782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===114) {
				{
				this.state = 781;
				this.commentSpec();
				}
			}

			this.state = 784;
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
			this.state = 786;
			this.match(FlinkSqlParser.CREATE);
			this.state = 788;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===165) {
				{
				this.state = 787;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 790;
			this.match(FlinkSqlParser.VIEW);
			this.state = 792;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===127) {
				{
				this.state = 791;
				this.ifNotExists();
				}
			}

			this.state = 794;
			this.uid();
			this.state = 796;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 795;
				this.columnNameList();
				}
				break;
			}
			this.state = 799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===114) {
				{
				this.state = 798;
				this.commentSpec();
				}
			}

			this.state = 801;
			this.match(FlinkSqlParser.AS);
			this.state = 802;
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
			this.state = 804;
			this.match(FlinkSqlParser.CREATE);
			this.state = 808;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 805;
				this.match(FlinkSqlParser.TEMPORARY);
				}
				break;
			case 2:
				{
				this.state = 806;
				this.match(FlinkSqlParser.TEMPORARY);
				this.state = 807;
				this.match(FlinkSqlParser.SYSTEM);
				}
				break;
			}
			this.state = 810;
			this.match(FlinkSqlParser.FUNCTION);
			this.state = 812;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===127) {
				{
				this.state = 811;
				this.ifNotExists();
				}
			}

			this.state = 814;
			this.uid();
			this.state = 815;
			this.match(FlinkSqlParser.AS);
			this.state = 816;
			this.identifier();
			this.state = 819;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===239) {
				{
				this.state = 817;
				this.match(FlinkSqlParser.LANGUAGE);
				this.state = 818;
				_la = this._input.LA(1);
				if(!(((((_la - 240)) & ~0x1F) === 0 && ((1 << (_la - 240)) & 7) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===142) {
				{
				this.state = 821;
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
			this.state = 824;
			this.match(FlinkSqlParser.USING);
			this.state = 825;
			this.match(FlinkSqlParser.JAR);
			this.state = 826;
			this.jarFileName();
			this.state = 832;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===303) {
				{
				{
				this.state = 827;
				this.match(FlinkSqlParser.COMMA);
				this.state = 828;
				this.match(FlinkSqlParser.JAR);
				this.state = 829;
				this.jarFileName();
				}
				}
				this.state = 834;
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
			this.state = 835;
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
			this.state = 837;
			this.match(FlinkSqlParser.ALTER);
			this.state = 838;
			this.match(FlinkSqlParser.TABLE);
			this.state = 839;
			this.uid();
			this.state = 842;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 112:
				{
				this.state = 840;
				this.renameDefinition();
				}
				break;
			case 115:
				{
				this.state = 841;
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
			this.state = 844;
			this.match(FlinkSqlParser.RENAME);
			this.state = 845;
			this.match(FlinkSqlParser.TO);
			this.state = 846;
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
			this.state = 848;
			this.match(FlinkSqlParser.SET);
			this.state = 849;
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
			this.state = 851;
			this.match(FlinkSqlParser.ALTER);
			this.state = 852;
			this.match(FlinkSqlParser.VIEW);
			this.state = 853;
			this.uid();
			this.state = 857;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 112:
				{
				this.state = 854;
				this.renameDefinition();
				}
				break;
			case 7:
				{
				this.state = 855;
				this.match(FlinkSqlParser.AS);
				this.state = 856;
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
			this.state = 859;
			this.match(FlinkSqlParser.ALTER);
			this.state = 860;
			this.match(FlinkSqlParser.DATABASE);
			this.state = 861;
			this.uid();
			this.state = 862;
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
			this.state = 864;
			this.match(FlinkSqlParser.ALTER);
			this.state = 868;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 865;
				this.match(FlinkSqlParser.TEMPORARY);
				}
				break;
			case 2:
				{
				this.state = 866;
				this.match(FlinkSqlParser.TEMPORARY);
				this.state = 867;
				this.match(FlinkSqlParser.SYSTEM);
				}
				break;
			}
			this.state = 870;
			this.match(FlinkSqlParser.FUNCTION);
			this.state = 872;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===127) {
				{
				this.state = 871;
				this.ifExists();
				}
			}

			this.state = 874;
			this.uid();
			this.state = 875;
			this.match(FlinkSqlParser.AS);
			this.state = 876;
			this.identifier();
			this.state = 879;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===239) {
				{
				this.state = 877;
				this.match(FlinkSqlParser.LANGUAGE);
				this.state = 878;
				_la = this._input.LA(1);
				if(!(((((_la - 240)) & ~0x1F) === 0 && ((1 << (_la - 240)) & 7) !== 0))) {
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
			this.state = 881;
			this.match(FlinkSqlParser.DROP);
			this.state = 882;
			this.match(FlinkSqlParser.CATALOG);
			this.state = 884;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===127) {
				{
				this.state = 883;
				this.ifExists();
				}
			}

			this.state = 886;
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
			this.state = 888;
			this.match(FlinkSqlParser.DROP);
			this.state = 890;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===165) {
				{
				this.state = 889;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 892;
			this.match(FlinkSqlParser.TABLE);
			this.state = 894;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===127) {
				{
				this.state = 893;
				this.ifExists();
				}
			}

			this.state = 896;
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
			this.state = 898;
			this.match(FlinkSqlParser.DROP);
			this.state = 899;
			this.match(FlinkSqlParser.DATABASE);
			this.state = 901;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===127) {
				{
				this.state = 900;
				this.ifExists();
				}
			}

			this.state = 903;
			this.uid();
			this.state = 905;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===183 || _la===185) {
				{
				this.state = 904;
				localctx._dropType = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===183 || _la===185)) {
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
			this.state = 907;
			this.match(FlinkSqlParser.DROP);
			this.state = 909;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===165) {
				{
				this.state = 908;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 911;
			this.match(FlinkSqlParser.VIEW);
			this.state = 913;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===127) {
				{
				this.state = 912;
				this.ifExists();
				}
			}

			this.state = 915;
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
			this.state = 917;
			this.match(FlinkSqlParser.DROP);
			this.state = 921;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 918;
				this.match(FlinkSqlParser.TEMPORARY);
				}
				break;
			case 2:
				{
				this.state = 919;
				this.match(FlinkSqlParser.TEMPORARY);
				this.state = 920;
				this.match(FlinkSqlParser.SYSTEM);
				}
				break;
			}
			this.state = 923;
			this.match(FlinkSqlParser.FUNCTION);
			this.state = 925;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===127) {
				{
				this.state = 924;
				this.ifExists();
				}
			}

			this.state = 927;
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
			this.state = 936;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 930;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===77) {
					{
					this.state = 929;
					this.match(FlinkSqlParser.EXECUTE);
					}
				}

				this.state = 932;
				this.insertSimpleStatement();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 933;
				this.insertMulStatementCompatibility();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 934;
				this.match(FlinkSqlParser.EXECUTE);
				this.state = 935;
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
			this.state = 938;
			this.match(FlinkSqlParser.INSERT);
			this.state = 939;
			_la = this._input.LA(1);
			if(!(_la===82 || _la===139)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 940;
			this.uid();
			this.state = 949;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 942;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===60) {
					{
					this.state = 941;
					this.insertPartitionDefinition();
					}
				}

				this.state = 945;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 94, this._ctx) ) {
				case 1:
					{
					this.state = 944;
					this.insertColumnListDefinition();
					}
					break;
				}
				this.state = 947;
				this.queryStatement(0);
				}
				break;
			case 2:
				{
				this.state = 948;
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
			this.state = 951;
			this.match(FlinkSqlParser.PARTITION);
			this.state = 952;
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
	public insertColumnListDefinition(): InsertColumnListDefinitionContext {
		let localctx: InsertColumnListDefinitionContext = new InsertColumnListDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, FlinkSqlParser.RULE_insertColumnListDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 954;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 955;
			this.columnNameList();
			this.state = 956;
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
	public valuesDefinition(): ValuesDefinitionContext {
		let localctx: ValuesDefinitionContext = new ValuesDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, FlinkSqlParser.RULE_valuesDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 958;
			this.match(FlinkSqlParser.VALUES);
			this.state = 959;
			this.valuesRowDefinition();
			this.state = 964;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===303) {
				{
				{
				this.state = 960;
				this.match(FlinkSqlParser.COMMA);
				this.state = 961;
				this.valuesRowDefinition();
				}
				}
				this.state = 966;
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
		this.enterRule(localctx, 146, FlinkSqlParser.RULE_valuesRowDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 967;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 968;
			this.constant();
			this.state = 973;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===303) {
				{
				{
				this.state = 969;
				this.match(FlinkSqlParser.COMMA);
				this.state = 970;
				this.constant();
				}
				}
				this.state = 975;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 976;
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
		this.enterRule(localctx, 148, FlinkSqlParser.RULE_insertMulStatementCompatibility);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 978;
			this.match(FlinkSqlParser.BEGIN);
			this.state = 979;
			this.match(FlinkSqlParser.STATEMENT);
			this.state = 980;
			this.match(FlinkSqlParser.SET);
			this.state = 981;
			this.match(FlinkSqlParser.SEMICOLON);
			this.state = 985;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 982;
				this.insertSimpleStatement();
				this.state = 983;
				this.match(FlinkSqlParser.SEMICOLON);
				}
				}
				this.state = 987;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===79);
			this.state = 989;
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
		this.enterRule(localctx, 150, FlinkSqlParser.RULE_insertMulStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 991;
			this.match(FlinkSqlParser.STATEMENT);
			this.state = 992;
			this.match(FlinkSqlParser.SET);
			this.state = 993;
			this.match(FlinkSqlParser.BEGIN);
			this.state = 997;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 994;
				this.insertSimpleStatement();
				this.state = 995;
				this.match(FlinkSqlParser.SEMICOLON);
				}
				}
				this.state = 999;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===79);
			this.state = 1001;
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
		let _startState: number = 152;
		this.enterRecursionRule(localctx, 152, FlinkSqlParser.RULE_queryStatement, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1034;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				this.state = 1004;
				this.valuesCaluse();
				}
				break;
			case 2:
				{
				this.state = 1005;
				this.match(FlinkSqlParser.WITH);
				this.state = 1006;
				this.withItem();
				this.state = 1011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===303) {
					{
					{
					this.state = 1007;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1008;
					this.withItem();
					}
					}
					this.state = 1013;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1014;
				this.queryStatement(5);
				}
				break;
			case 3:
				{
				this.state = 1016;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1017;
				this.queryStatement(0);
				this.state = 1018;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				{
				this.state = 1020;
				this.selectClause();
				this.state = 1022;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 1021;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1025;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 1024;
					this.limitClause();
					}
					break;
				}
				}
				break;
			case 5:
				{
				this.state = 1027;
				this.selectStatement();
				this.state = 1029;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 103, this._ctx) ) {
				case 1:
					{
					this.state = 1028;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1032;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 1031;
					this.limitClause();
					}
					break;
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1050;
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
					this.state = 1036;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 1037;
					localctx._operator = this._input.LT(1);
					_la = this._input.LA(1);
					if(!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 11) !== 0))) {
					    localctx._operator = this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1039;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===8) {
						{
						this.state = 1038;
						this.match(FlinkSqlParser.ALL);
						}
					}

					this.state = 1041;
					localctx._right = this.queryStatement(0);
					this.state = 1043;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
					case 1:
						{
						this.state = 1042;
						this.orderByCaluse();
						}
						break;
					}
					this.state = 1046;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
					case 1:
						{
						this.state = 1045;
						this.limitClause();
						}
						break;
					}
					}
					}
				}
				this.state = 1052;
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
		this.enterRule(localctx, 154, FlinkSqlParser.RULE_valuesCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1053;
			this.match(FlinkSqlParser.VALUES);
			this.state = 1054;
			this.expression();
			this.state = 1059;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 110, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1055;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1056;
					this.expression();
					}
					}
				}
				this.state = 1061;
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
		this.enterRule(localctx, 156, FlinkSqlParser.RULE_withItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1062;
			this.withItemName();
			this.state = 1074;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===301) {
				{
				this.state = 1063;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1064;
				this.columnName();
				this.state = 1069;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===303) {
					{
					{
					this.state = 1065;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1066;
					this.columnName();
					}
					}
					this.state = 1071;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1072;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
			}

			this.state = 1076;
			this.match(FlinkSqlParser.AS);
			this.state = 1077;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1078;
			this.queryStatement(0);
			this.state = 1079;
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
		this.enterRule(localctx, 158, FlinkSqlParser.RULE_withItemName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1081;
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
		this.enterRule(localctx, 160, FlinkSqlParser.RULE_selectStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1083;
			this.selectClause();
			this.state = 1084;
			this.fromClause();
			this.state = 1086;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				{
				this.state = 1085;
				this.whereClause();
				}
				break;
			}
			this.state = 1089;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 1088;
				this.groupByClause();
				}
				break;
			}
			this.state = 1092;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				{
				this.state = 1091;
				this.havingClause();
				}
				break;
			}
			this.state = 1095;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				{
				this.state = 1094;
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
		this.enterRule(localctx, 162, FlinkSqlParser.RULE_selectClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1097;
			this.match(FlinkSqlParser.SELECT);
			this.state = 1099;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1098;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1110;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				{
				this.state = 1101;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;
			case 2:
				{
				this.state = 1102;
				this.projectItemDefinition();
				this.state = 1107;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 118, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1103;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1104;
						this.projectItemDefinition();
						}
						}
					}
					this.state = 1109;
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
		this.enterRule(localctx, 164, FlinkSqlParser.RULE_projectItemDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1112;
			this.expression();
			this.state = 1117;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				{
				this.state = 1114;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
				case 1:
					{
					this.state = 1113;
					this.match(FlinkSqlParser.AS);
					}
					break;
				}
				this.state = 1116;
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
		this.enterRule(localctx, 166, FlinkSqlParser.RULE_fromClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1119;
			this.match(FlinkSqlParser.FROM);
			this.state = 1120;
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
		let _startState: number = 168;
		this.enterRecursionRule(localctx, 168, FlinkSqlParser.RULE_tableExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1123;
			this.tableReference();
			this.state = 1128;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 122, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1124;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1125;
					this.tableReference();
					}
					}
				}
				this.state = 1130;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 122, this._ctx);
			}
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1152;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 128, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1150;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
					case 1:
						{
						localctx = new TableExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_tableExpression);
						this.state = 1131;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1132;
						this.match(FlinkSqlParser.CROSS);
						this.state = 1133;
						this.match(FlinkSqlParser.JOIN);
						this.state = 1134;
						this.tableExpression(2);
						}
						break;
					case 2:
						{
						localctx = new TableExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_tableExpression);
						this.state = 1135;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1137;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===54) {
							{
							this.state = 1136;
							this.match(FlinkSqlParser.NATURAL);
							}
						}

						this.state = 1140;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 27) !== 0)) {
							{
							this.state = 1139;
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

						this.state = 1143;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===47) {
							{
							this.state = 1142;
							this.match(FlinkSqlParser.OUTER);
							}
						}

						this.state = 1145;
						this.match(FlinkSqlParser.JOIN);
						this.state = 1146;
						this.tableExpression(0);
						this.state = 1148;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
						case 1:
							{
							this.state = 1147;
							this.joinCondition();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1154;
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
		this.enterRule(localctx, 170, FlinkSqlParser.RULE_tableReference);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1155;
			this.tablePrimary();
			this.state = 1157;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				{
				this.state = 1156;
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
		this.enterRule(localctx, 172, FlinkSqlParser.RULE_tablePrimary);
		let _la: number;
		try {
			this.state = 1200;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===73) {
					{
					this.state = 1159;
					this.match(FlinkSqlParser.TABLE);
					}
				}

				this.state = 1162;
				this.tablePath();
				this.state = 1164;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
				case 1:
					{
					this.state = 1163;
					this.systemTimePeriod();
					}
					break;
				}
				this.state = 1170;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 133, this._ctx) ) {
				case 1:
					{
					this.state = 1167;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 132, this._ctx) ) {
					case 1:
						{
						this.state = 1166;
						this.match(FlinkSqlParser.AS);
						}
						break;
					}
					this.state = 1169;
					this.correlationName();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1172;
				this.match(FlinkSqlParser.LATERAL);
				this.state = 1173;
				this.match(FlinkSqlParser.TABLE);
				this.state = 1174;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1175;
				this.functionName();
				this.state = 1176;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1177;
				this.expression();
				this.state = 1182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===303) {
					{
					{
					this.state = 1178;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1179;
					this.expression();
					}
					}
					this.state = 1184;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1185;
				this.match(FlinkSqlParser.RR_BRACKET);
				this.state = 1186;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===57) {
					{
					this.state = 1188;
					this.match(FlinkSqlParser.LATERAL);
					}
				}

				this.state = 1191;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1192;
				this.queryStatement(0);
				this.state = 1193;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1195;
				this.match(FlinkSqlParser.UNNEST);
				this.state = 1196;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1197;
				this.expression();
				this.state = 1198;
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
		this.enterRule(localctx, 174, FlinkSqlParser.RULE_tablePath);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1202;
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
		this.enterRule(localctx, 176, FlinkSqlParser.RULE_systemTimePeriod);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1204;
			this.match(FlinkSqlParser.FOR);
			this.state = 1205;
			this.match(FlinkSqlParser.SYSTEM_TIME);
			this.state = 1206;
			this.match(FlinkSqlParser.AS);
			this.state = 1207;
			this.match(FlinkSqlParser.OF);
			this.state = 1208;
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
		this.enterRule(localctx, 178, FlinkSqlParser.RULE_dateTimeExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1210;
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
		this.enterRule(localctx, 180, FlinkSqlParser.RULE_joinCondition);
		let _la: number;
		try {
			this.state = 1226;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 55:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1212;
				this.match(FlinkSqlParser.ON);
				this.state = 1213;
				this.booleanExpression(0);
				}
				break;
			case 142:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1214;
				this.match(FlinkSqlParser.USING);
				this.state = 1215;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1216;
				this.uid();
				this.state = 1221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===303) {
					{
					{
					this.state = 1217;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1218;
					this.uid();
					}
					}
					this.state = 1223;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1224;
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
		this.enterRule(localctx, 182, FlinkSqlParser.RULE_whereClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1228;
			this.match(FlinkSqlParser.WHERE);
			this.state = 1229;
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
		this.enterRule(localctx, 184, FlinkSqlParser.RULE_groupByClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1231;
			this.match(FlinkSqlParser.GROUP);
			this.state = 1232;
			this.match(FlinkSqlParser.BY);
			this.state = 1233;
			this.groupItemDefinition();
			this.state = 1238;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 139, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1234;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1235;
					this.groupItemDefinition();
					}
					}
				}
				this.state = 1240;
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
		this.enterRule(localctx, 186, FlinkSqlParser.RULE_groupItemDefinition);
		let _la: number;
		try {
			this.state = 1292;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1241;
				this.expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1242;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1243;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1244;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1245;
				this.expression();
				this.state = 1250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===303) {
					{
					{
					this.state = 1246;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1247;
					this.expression();
					}
					}
					this.state = 1252;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1253;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1255;
				this.match(FlinkSqlParser.CUBE);
				this.state = 1256;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1257;
				this.expression();
				this.state = 1262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===303) {
					{
					{
					this.state = 1258;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1259;
					this.expression();
					}
					}
					this.state = 1264;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1265;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1267;
				this.match(FlinkSqlParser.ROLLUP);
				this.state = 1268;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1269;
				this.expression();
				this.state = 1274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===303) {
					{
					{
					this.state = 1270;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1271;
					this.expression();
					}
					}
					this.state = 1276;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1277;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1279;
				this.match(FlinkSqlParser.GROUPING);
				this.state = 1280;
				this.match(FlinkSqlParser.SETS);
				this.state = 1281;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1282;
				this.groupItemDefinition();
				this.state = 1287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===303) {
					{
					{
					this.state = 1283;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1284;
					this.groupItemDefinition();
					}
					}
					this.state = 1289;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1290;
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
		this.enterRule(localctx, 188, FlinkSqlParser.RULE_havingClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1294;
			this.match(FlinkSqlParser.HAVING);
			this.state = 1295;
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
		this.enterRule(localctx, 190, FlinkSqlParser.RULE_orderByCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1297;
			this.match(FlinkSqlParser.ORDER);
			this.state = 1298;
			this.match(FlinkSqlParser.BY);
			this.state = 1299;
			this.orderItemDefition();
			this.state = 1304;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 145, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1300;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1301;
					this.orderItemDefition();
					}
					}
				}
				this.state = 1306;
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
		this.enterRule(localctx, 192, FlinkSqlParser.RULE_orderItemDefition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1307;
			this.expression();
			this.state = 1309;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1308;
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
		this.enterRule(localctx, 194, FlinkSqlParser.RULE_limitClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1311;
			this.match(FlinkSqlParser.LIMIT);
			this.state = 1314;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				{
				this.state = 1312;
				this.match(FlinkSqlParser.ALL);
				}
				break;
			case 2:
				{
				this.state = 1313;
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
		this.enterRule(localctx, 196, FlinkSqlParser.RULE_windowClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1316;
			this.match(FlinkSqlParser.WINDOW);
			this.state = 1317;
			this.namedWindow();
			this.state = 1322;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 148, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1318;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1319;
					this.namedWindow();
					}
					}
				}
				this.state = 1324;
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
		this.enterRule(localctx, 198, FlinkSqlParser.RULE_namedWindow);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1325;
			localctx._name = this.errorCapturingIdentifier();
			this.state = 1326;
			this.match(FlinkSqlParser.AS);
			this.state = 1327;
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
		this.enterRule(localctx, 200, FlinkSqlParser.RULE_windowSpec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 4294967295) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 4294967167) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 2145507839) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 4294967295) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & 4294967295) !== 0) || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & 4294967295) !== 0) || ((((_la - 197)) & ~0x1F) === 0 && ((1 << (_la - 197)) & 4294934527) !== 0) || ((((_la - 229)) & ~0x1F) === 0 && ((1 << (_la - 229)) & 1031800543) !== 0) || ((((_la - 262)) & ~0x1F) === 0 && ((1 << (_la - 262)) & 266320383) !== 0) || ((((_la - 320)) & ~0x1F) === 0 && ((1 << (_la - 320)) & 19) !== 0)) {
				{
				this.state = 1329;
				localctx._name = this.errorCapturingIdentifier();
				}
			}

			this.state = 1332;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 1333;
				this.match(FlinkSqlParser.ORDER);
				this.state = 1334;
				this.match(FlinkSqlParser.BY);
				this.state = 1335;
				this.sortItem();
				this.state = 1340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===303) {
					{
					{
					this.state = 1336;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1337;
					this.sortItem();
					}
					}
					this.state = 1342;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===60) {
				{
				this.state = 1345;
				this.match(FlinkSqlParser.PARTITION);
				this.state = 1346;
				this.match(FlinkSqlParser.BY);
				this.state = 1347;
				this.expression();
				this.state = 1352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===303) {
					{
					{
					this.state = 1348;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1349;
					this.expression();
					}
					}
					this.state = 1354;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===61 || _la===62) {
				{
				this.state = 1357;
				this.windowFrame();
				}
			}

			this.state = 1360;
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
		this.enterRule(localctx, 202, FlinkSqlParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1362;
			this.expression();
			this.state = 1364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===35 || _la===36) {
				{
				this.state = 1363;
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

			this.state = 1368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 1366;
				this.match(FlinkSqlParser.NULLS);
				this.state = 1367;
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
		this.enterRule(localctx, 204, FlinkSqlParser.RULE_windowFrame);
		try {
			this.state = 1374;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 61:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1370;
				this.match(FlinkSqlParser.RANGE);
				this.state = 1371;
				this.frameBound();
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1372;
				this.match(FlinkSqlParser.ROWS);
				this.state = 1373;
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
		this.enterRule(localctx, 206, FlinkSqlParser.RULE_frameBound);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1376;
			this.expression();
			this.state = 1377;
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
		this.enterRule(localctx, 208, FlinkSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1379;
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
		let _startState: number = 210;
		this.enterRecursionRule(localctx, 210, FlinkSqlParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1393;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				{
				localctx = new LogicalNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1382;
				this.match(FlinkSqlParser.NOT);
				this.state = 1383;
				this.booleanExpression(5);
				}
				break;
			case 2:
				{
				localctx = new ExistsContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1384;
				this.match(FlinkSqlParser.EXISTS);
				this.state = 1385;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1386;
				this.queryStatement(0);
				this.state = 1387;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				{
				localctx = new PredicatedContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1389;
				this.valueExpression(0);
				this.state = 1391;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 158, this._ctx) ) {
				case 1:
					{
					this.state = 1390;
					this.predicate();
					}
					break;
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1403;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1401;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 160, this._ctx) ) {
					case 1:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1395;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1396;
						(localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.AND);
						this.state = 1397;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;
					case 2:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1398;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1399;
						(localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.OR);
						this.state = 1400;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1405;
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
		this.enterRule(localctx, 212, FlinkSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1489;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1406;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1409;
				localctx._kind = this.match(FlinkSqlParser.BETWEEN);
				this.state = 1410;
				localctx._lower = this.valueExpression(0);
				this.state = 1411;
				this.match(FlinkSqlParser.AND);
				this.state = 1412;
				localctx._upper = this.valueExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1414;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1417;
				localctx._kind = this.match(FlinkSqlParser.IN);
				this.state = 1418;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1419;
				this.expression();
				this.state = 1424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===303) {
					{
					{
					this.state = 1420;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1421;
					this.expression();
					}
					}
					this.state = 1426;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1427;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1429;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1432;
				localctx._kind = this.match(FlinkSqlParser.IN);
				this.state = 1433;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1434;
				this.queryStatement(0);
				this.state = 1435;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1437;
				localctx._kind = this.match(FlinkSqlParser.EXISTS);
				this.state = 1438;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1439;
				this.queryStatement(0);
				this.state = 1440;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1442;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1445;
				localctx._kind = this.match(FlinkSqlParser.RLIKE);
				this.state = 1446;
				localctx._pattern = this.valueExpression(0);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
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
				localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 1451;
				localctx._quantifier = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===8 || _la===9)) {
				    localctx._quantifier = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1465;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 169, this._ctx) ) {
				case 1:
					{
					this.state = 1452;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1453;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				case 2:
					{
					this.state = 1454;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1455;
					this.expression();
					this.state = 1460;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===303) {
						{
						{
						this.state = 1456;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1457;
						this.expression();
						}
						}
						this.state = 1462;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1463;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				}
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
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
				localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 1471;
				localctx._pattern = this.valueExpression(0);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1472;
				this.match(FlinkSqlParser.IS);
				this.state = 1474;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1473;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1476;
				localctx._kind = this.match(FlinkSqlParser.NULL);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
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
				localctx._kind = this.match(FlinkSqlParser.DISTINCT);
				this.state = 1487;
				this.match(FlinkSqlParser.FROM);
				this.state = 1488;
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
		this.enterRule(localctx, 214, FlinkSqlParser.RULE_likePredicate);
		let _la: number;
		try {
			this.state = 1516;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1492;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1491;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1494;
				localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 1495;
				localctx._quantifier = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===8 || _la===9)) {
				    localctx._quantifier = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1509;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 177, this._ctx) ) {
				case 1:
					{
					this.state = 1496;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1497;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				case 2:
					{
					this.state = 1498;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1499;
					this.expression();
					this.state = 1504;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===303) {
						{
						{
						this.state = 1500;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1501;
						this.expression();
						}
						}
						this.state = 1506;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1507;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1511;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1514;
				localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 1515;
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
		let _startState: number = 216;
		this.enterRecursionRule(localctx, 216, FlinkSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1522;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				{
				localctx = new ValueExpressionDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1519;
				this.primaryExpression(0);
				}
				break;
			case 2:
				{
				localctx = new ArithmeticUnaryContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1520;
				(localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 294)) & ~0x1F) === 0 && ((1 << (_la - 294)) & 786433) !== 0))) {
				    (localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1521;
				this.valueExpression(7);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1545;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 182, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1543;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
					case 1:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1524;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1525;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===131 || ((((_la - 310)) & ~0x1F) === 0 && ((1 << (_la - 310)) & 145) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1526;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
						}
						break;
					case 2:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1527;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1528;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 312)) & ~0x1F) === 0 && ((1 << (_la - 312)) & 11) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1529;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
						}
						break;
					case 3:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1530;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1531;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_AND_OP);
						this.state = 1532;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
						}
						break;
					case 4:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1533;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1534;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_XOR_OP);
						this.state = 1535;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;
					case 5:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1536;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1537;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_OR_OP);
						this.state = 1538;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;
					case 6:
						{
						localctx = new ComparisonContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1539;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1540;
						this.comparisonOperator();
						this.state = 1541;
						(localctx as ComparisonContext)._right = this.valueExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1547;
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
		let _startState: number = 218;
		this.enterRecursionRule(localctx, 218, FlinkSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1639;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				{
				localctx = new SearchedCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1549;
				this.match(FlinkSqlParser.CASE);
				this.state = 1551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1550;
					this.whenClause();
					}
					}
					this.state = 1553;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===40);
				this.state = 1557;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===42) {
					{
					this.state = 1555;
					this.match(FlinkSqlParser.ELSE);
					this.state = 1556;
					(localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1559;
				this.match(FlinkSqlParser.END);
				}
				break;
			case 2:
				{
				localctx = new SimpleCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1561;
				this.match(FlinkSqlParser.CASE);
				this.state = 1562;
				(localctx as SimpleCaseContext)._value = this.expression();
				this.state = 1564;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1563;
					this.whenClause();
					}
					}
					this.state = 1566;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===40);
				this.state = 1570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===42) {
					{
					this.state = 1568;
					this.match(FlinkSqlParser.ELSE);
					this.state = 1569;
					(localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1572;
				this.match(FlinkSqlParser.END);
				}
				break;
			case 3:
				{
				localctx = new CastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1574;
				this.match(FlinkSqlParser.CAST);
				this.state = 1575;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1576;
				this.expression();
				this.state = 1577;
				this.match(FlinkSqlParser.AS);
				this.state = 1578;
				this.columnType();
				this.state = 1579;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				{
				localctx = new FirstContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1581;
				this.match(FlinkSqlParser.FIRST);
				this.state = 1582;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1583;
				this.expression();
				this.state = 1586;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===123) {
					{
					this.state = 1584;
					this.match(FlinkSqlParser.IGNORE);
					this.state = 1585;
					this.match(FlinkSqlParser.NULLS);
					}
				}

				this.state = 1588;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 5:
				{
				localctx = new LastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1590;
				this.match(FlinkSqlParser.LAST);
				this.state = 1591;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1592;
				this.expression();
				this.state = 1595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===123) {
					{
					this.state = 1593;
					this.match(FlinkSqlParser.IGNORE);
					this.state = 1594;
					this.match(FlinkSqlParser.NULLS);
					}
				}

				this.state = 1597;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 6:
				{
				localctx = new PositionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1599;
				this.match(FlinkSqlParser.POSITION);
				this.state = 1600;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1601;
				(localctx as PositionContext)._substr = this.valueExpression(0);
				this.state = 1602;
				this.match(FlinkSqlParser.IN);
				this.state = 1603;
				(localctx as PositionContext)._str = this.valueExpression(0);
				this.state = 1604;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 7:
				{
				localctx = new ConstantDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1606;
				this.constant();
				}
				break;
			case 8:
				{
				localctx = new StarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1607;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;
			case 9:
				{
				localctx = new StarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1608;
				this.uid();
				this.state = 1609;
				this.match(FlinkSqlParser.DOT);
				this.state = 1610;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;
			case 10:
				{
				localctx = new SubqueryExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1612;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1613;
				this.queryStatement(0);
				this.state = 1614;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 11:
				{
				localctx = new FunctionCallContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1616;
				this.functionName();
				this.state = 1617;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1629;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 4294967295) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 4294967167) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 2145507839) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 4294967295) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & 4294967295) !== 0) || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & 4294967295) !== 0) || ((((_la - 197)) & ~0x1F) === 0 && ((1 << (_la - 197)) & 4294934527) !== 0) || ((((_la - 229)) & ~0x1F) === 0 && ((1 << (_la - 229)) & 1031800543) !== 0) || ((((_la - 262)) & ~0x1F) === 0 && ((1 << (_la - 262)) & 266320383) !== 0) || ((((_la - 294)) & ~0x1F) === 0 && ((1 << (_la - 294)) & 2081226881) !== 0)) {
					{
					this.state = 1619;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 189, this._ctx) ) {
					case 1:
						{
						this.state = 1618;
						this.setQuantifier();
						}
						break;
					}
					this.state = 1621;
					this.expression();
					this.state = 1626;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===303) {
						{
						{
						this.state = 1622;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1623;
						this.expression();
						}
						}
						this.state = 1628;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1631;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 12:
				{
				localctx = new ColumnReferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1633;
				this.identifier();
				}
				break;
			case 13:
				{
				localctx = new DereferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1634;
				this.dereferenceDefinition();
				}
				break;
			case 14:
				{
				localctx = new ParenthesizedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1635;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1636;
				this.expression();
				this.state = 1637;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1648;
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
					this.state = 1641;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 1642;
					this.match(FlinkSqlParser.LS_BRACKET);
					this.state = 1643;
					(localctx as SubscriptContext)._index = this.valueExpression(0);
					this.state = 1644;
					this.match(FlinkSqlParser.RS_BRACKET);
					}
					}
				}
				this.state = 1650;
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
		this.enterRule(localctx, 220, FlinkSqlParser.RULE_functionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1651;
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
		this.enterRule(localctx, 222, FlinkSqlParser.RULE_dereferenceDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1653;
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
		this.enterRule(localctx, 224, FlinkSqlParser.RULE_correlationName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1655;
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
		this.enterRule(localctx, 226, FlinkSqlParser.RULE_qualifiedName);
		try {
			this.state = 1659;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1657;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1658;
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
		this.enterRule(localctx, 228, FlinkSqlParser.RULE_interval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1661;
			this.match(FlinkSqlParser.INTERVAL);
			this.state = 1664;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				{
				this.state = 1662;
				this.errorCapturingMultiUnitsInterval();
				}
				break;
			case 2:
				{
				this.state = 1663;
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
		this.enterRule(localctx, 230, FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1666;
			this.multiUnitsInterval();
			this.state = 1668;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
			case 1:
				{
				this.state = 1667;
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
		this.enterRule(localctx, 232, FlinkSqlParser.RULE_multiUnitsInterval);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1673;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1670;
					this.intervalValue();
					this.state = 1671;
					this.identifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1675;
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
		this.enterRule(localctx, 234, FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1677;
			localctx._body = this.unitToUnitInterval();
			this.state = 1680;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 198, this._ctx) ) {
			case 1:
				{
				this.state = 1678;
				localctx._error1 = this.multiUnitsInterval();
				}
				break;
			case 2:
				{
				this.state = 1679;
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
		this.enterRule(localctx, 236, FlinkSqlParser.RULE_unitToUnitInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1682;
			localctx._value = this.intervalValue();
			this.state = 1683;
			localctx._from_ = this.identifier();
			this.state = 1684;
			this.match(FlinkSqlParser.TO);
			this.state = 1685;
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
		this.enterRule(localctx, 238, FlinkSqlParser.RULE_intervalValue);
		let _la: number;
		try {
			this.state = 1692;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 312:
			case 313:
			case 321:
			case 322:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1688;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===312 || _la===313) {
					{
					this.state = 1687;
					_la = this._input.LA(1);
					if(!(_la===312 || _la===313)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 1690;
				_la = this._input.LA(1);
				if(!(_la===321 || _la===322)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 320:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1691;
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
		this.enterRule(localctx, 240, FlinkSqlParser.RULE_columnAlias);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1695;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 201, this._ctx) ) {
			case 1:
				{
				this.state = 1694;
				this.match(FlinkSqlParser.AS);
				}
				break;
			}
			this.state = 1697;
			this.strictIdentifier();
			this.state = 1699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===301) {
				{
				this.state = 1698;
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
		this.enterRule(localctx, 242, FlinkSqlParser.RULE_tableAlias);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1702;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				{
				this.state = 1701;
				this.match(FlinkSqlParser.AS);
				}
				break;
			}
			this.state = 1704;
			this.strictIdentifier();
			this.state = 1706;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 204, this._ctx) ) {
			case 1:
				{
				this.state = 1705;
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
		this.enterRule(localctx, 244, FlinkSqlParser.RULE_errorCapturingIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1708;
			this.identifier();
			this.state = 1709;
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
		this.enterRule(localctx, 246, FlinkSqlParser.RULE_errorCapturingIdentifierExtra);
		let _la: number;
		try {
			this.state = 1718;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 130:
				localctx = new ErrorIdentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1713;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1711;
					this.match(FlinkSqlParser.MINUS);
					this.state = 1712;
					this.identifier();
					}
					}
					this.state = 1715;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===130);
				}
				break;
			case 7:
			case 301:
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
		this.enterRule(localctx, 248, FlinkSqlParser.RULE_identifierList);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1720;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1721;
			this.identifierSeq();
			this.state = 1722;
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
		this.enterRule(localctx, 250, FlinkSqlParser.RULE_identifierSeq);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1724;
			this.identifier();
			this.state = 1729;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===303) {
				{
				{
				this.state = 1725;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1726;
				this.identifier();
				}
				}
				this.state = 1731;
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
		this.enterRule(localctx, 252, FlinkSqlParser.RULE_identifier);
		try {
			this.state = 1734;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1732;
				this.strictIdentifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1733;
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
		this.enterRule(localctx, 254, FlinkSqlParser.RULE_strictIdentifier);
		try {
			this.state = 1740;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
			case 1:
				localctx = new UnquotedIdentifierAlternativeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1736;
				this.unquotedIdentifier();
				}
				break;
			case 2:
				localctx = new QuotedIdentifierAlternativeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1737;
				this.quotedIdentifier();
				}
				break;
			case 3:
				localctx = new AnsiNonReservedKeywordsContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1738;
				this.ansiNonReserved();
				}
				break;
			case 4:
				localctx = new NonReservedKeywordsContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1739;
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
		this.enterRule(localctx, 256, FlinkSqlParser.RULE_unquotedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1742;
			_la = this._input.LA(1);
			if(!(_la===321 || _la===324)) {
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
		this.enterRule(localctx, 258, FlinkSqlParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1744;
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
		this.enterRule(localctx, 260, FlinkSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1746;
			this.match(FlinkSqlParser.WHEN);
			this.state = 1747;
			localctx._condition = this.expression();
			this.state = 1748;
			this.match(FlinkSqlParser.THEN);
			this.state = 1749;
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
		this.enterRule(localctx, 262, FlinkSqlParser.RULE_uidList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1751;
			this.uid();
			this.state = 1756;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===303) {
				{
				{
				this.state = 1752;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1753;
				this.uid();
				}
				}
				this.state = 1758;
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
		this.enterRule(localctx, 264, FlinkSqlParser.RULE_uid);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1759;
			this.match(FlinkSqlParser.ID_LITERAL);
			this.state = 1763;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 211, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1760;
					this.match(FlinkSqlParser.DOT_ID);
					}
					}
				}
				this.state = 1765;
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
		this.enterRule(localctx, 266, FlinkSqlParser.RULE_plusUid);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1766;
			_la = this._input.LA(1);
			if(!(_la===324 || _la===325)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1770;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 212, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1767;
					_la = this._input.LA(1);
					if(!(_la===318 || _la===319)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
				}
				this.state = 1772;
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
		this.enterRule(localctx, 268, FlinkSqlParser.RULE_withOption);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1773;
			this.match(FlinkSqlParser.WITH);
			this.state = 1774;
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
		this.enterRule(localctx, 270, FlinkSqlParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1776;
			this.match(FlinkSqlParser.IF);
			this.state = 1777;
			this.match(FlinkSqlParser.NOT);
			this.state = 1778;
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
		this.enterRule(localctx, 272, FlinkSqlParser.RULE_ifExists);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1780;
			this.match(FlinkSqlParser.IF);
			this.state = 1781;
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
		this.enterRule(localctx, 274, FlinkSqlParser.RULE_tablePropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1783;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1784;
			this.tableProperty();
			this.state = 1789;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===303) {
				{
				{
				this.state = 1785;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1786;
				this.tableProperty();
				}
				}
				this.state = 1791;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1792;
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
		this.enterRule(localctx, 276, FlinkSqlParser.RULE_tableProperty);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1794;
			localctx._key = this.tablePropertyKey();
			this.state = 1799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32 || _la===33 || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 3221225473) !== 0) || _la===322) {
				{
				this.state = 1796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===290) {
					{
					this.state = 1795;
					this.match(FlinkSqlParser.EQUAL_SYMBOL);
					}
				}

				this.state = 1798;
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
		this.enterRule(localctx, 278, FlinkSqlParser.RULE_tablePropertyKey);
		try {
			this.state = 1804;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 216, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1801;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1802;
				this.dereferenceDefinition();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1803;
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
		this.enterRule(localctx, 280, FlinkSqlParser.RULE_tablePropertyValue);
		try {
			this.state = 1810;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 321:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1806;
				this.match(FlinkSqlParser.DIG_LITERAL);
				}
				break;
			case 322:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1807;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case 32:
			case 33:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1808;
				this.booleanLiteral();
				}
				break;
			case 320:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1809;
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
		this.enterRule(localctx, 282, FlinkSqlParser.RULE_logicalOperator);
		try {
			this.state = 1818;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 23:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1812;
				this.match(FlinkSqlParser.AND);
				}
				break;
			case 296:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1813;
				this.match(FlinkSqlParser.BIT_AND_OP);
				this.state = 1814;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1815;
				this.match(FlinkSqlParser.OR);
				}
				break;
			case 295:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1816;
				this.match(FlinkSqlParser.BIT_OR_OP);
				this.state = 1817;
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
		this.enterRule(localctx, 284, FlinkSqlParser.RULE_comparisonOperator);
		try {
			this.state = 1834;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1820;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1821;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1822;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1823;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 1824;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1825;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 1826;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1827;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 1828;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1829;
				this.match(FlinkSqlParser.EXCLAMATION_SYMBOL);
				this.state = 1830;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1831;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 1832;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				this.state = 1833;
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
		this.enterRule(localctx, 286, FlinkSqlParser.RULE_bitOperator);
		try {
			this.state = 1843;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 292:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1836;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 1837;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;
			case 291:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1838;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 1839;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 296:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1840;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case 297:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1841;
				this.match(FlinkSqlParser.BIT_XOR_OP);
				}
				break;
			case 295:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1842;
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
		this.enterRule(localctx, 288, FlinkSqlParser.RULE_mathOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1845;
			_la = this._input.LA(1);
			if(!(_la===131 || ((((_la - 310)) & ~0x1F) === 0 && ((1 << (_la - 310)) & 221) !== 0))) {
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
		this.enterRule(localctx, 290, FlinkSqlParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1847;
			_la = this._input.LA(1);
			if(!(_la===25 || ((((_la - 293)) & ~0x1F) === 0 && ((1 << (_la - 293)) & 1572867) !== 0))) {
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
		this.enterRule(localctx, 292, FlinkSqlParser.RULE_fullColumnName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1849;
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
		this.enterRule(localctx, 294, FlinkSqlParser.RULE_constant);
		let _la: number;
		try {
			this.state = 1863;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 320:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1851;
				this.stringLiteral();
				}
				break;
			case 321:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1852;
				this.decimalLiteral();
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1853;
				this.interval();
				}
				break;
			case 312:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1854;
				this.match(FlinkSqlParser.HYPNEN_SIGN);
				this.state = 1855;
				this.decimalLiteral();
				}
				break;
			case 32:
			case 33:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1856;
				this.booleanLiteral();
				}
				break;
			case 322:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1857;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case 323:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1858;
				this.match(FlinkSqlParser.BIT_STRING);
				}
				break;
			case 25:
			case 288:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1860;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1859;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1862;
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
		this.enterRule(localctx, 296, FlinkSqlParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1865;
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
		this.enterRule(localctx, 298, FlinkSqlParser.RULE_decimalLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1867;
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
		this.enterRule(localctx, 300, FlinkSqlParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1869;
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
		this.enterRule(localctx, 302, FlinkSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1871;
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
		this.enterRule(localctx, 304, FlinkSqlParser.RULE_ansiNonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1873;
			_la = this._input.LA(1);
			if(!(((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 1978716033) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4294709249) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 3418108729) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 4280287177) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & 4294967167) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & 4294836223) !== 0) || ((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & 4294959087) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & 2388656567) !== 0) || ((((_la - 263)) & ~0x1F) === 0 && ((1 << (_la - 263)) & 133160191) !== 0))) {
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
		this.enterRule(localctx, 306, FlinkSqlParser.RULE_strictNonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1875;
			_la = this._input.LA(1);
			if(!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 1787) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 15) !== 0) || _la===142 || _la===222)) {
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
		this.enterRule(localctx, 308, FlinkSqlParser.RULE_nonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1877;
			_la = this._input.LA(1);
			if(!(((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 4294967295) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 4294052223) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 2145507839) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 4294967175) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & 4294966783) !== 0) || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & 4294965247) !== 0) || ((((_la - 197)) & ~0x1F) === 0 && ((1 << (_la - 197)) & 4261380095) !== 0) || ((((_la - 229)) & ~0x1F) === 0 && ((1 << (_la - 229)) & 1031800543) !== 0) || ((((_la - 262)) & ~0x1F) === 0 && ((1 << (_la - 262)) & 266320383) !== 0))) {
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
		case 76:
			return this.queryStatement_sempred(localctx as QueryStatementContext, predIndex);
		case 84:
			return this.tableExpression_sempred(localctx as TableExpressionContext, predIndex);
		case 105:
			return this.booleanExpression_sempred(localctx as BooleanExpressionContext, predIndex);
		case 108:
			return this.valueExpression_sempred(localctx as ValueExpressionContext, predIndex);
		case 109:
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

	public static readonly _serializedATN: number[] = [4,1,326,1880,2,0,7,0,
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
	7,151,2,152,7,152,2,153,7,153,2,154,7,154,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,
	2,3,2,319,8,2,1,2,5,2,322,8,2,10,2,12,2,325,9,2,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,3,3,339,8,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
	1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,357,8,5,1,6,1,6,3,6,361,8,6,1,7,1,7,1,7,
	1,8,1,8,1,8,1,8,3,8,370,8,8,1,8,1,8,1,8,3,8,375,8,8,1,9,1,9,1,9,5,9,380,
	8,9,10,9,12,9,383,9,9,1,10,1,10,1,11,1,11,3,11,389,8,11,1,11,1,11,3,11,
	393,8,11,1,12,1,12,1,12,1,12,1,12,5,12,400,8,12,10,12,12,12,403,9,12,1,
	13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,414,8,13,1,13,3,13,417,
	8,13,1,13,1,13,1,13,1,13,1,13,3,13,424,8,13,1,13,1,13,1,13,1,13,1,13,1,
	13,3,13,432,8,13,1,13,1,13,1,13,3,13,437,8,13,1,13,3,13,440,8,13,1,14,1,
	14,1,14,1,14,1,14,3,14,447,8,14,1,15,1,15,1,15,1,15,1,16,1,16,3,16,455,
	8,16,1,17,1,17,3,17,459,8,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,
	19,1,19,3,19,471,8,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,479,8,19,1,19,
	1,19,3,19,483,8,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
	19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,504,8,19,1,20,1,20,3,20,
	508,8,20,1,21,1,21,3,21,512,8,21,1,21,1,21,3,21,516,8,21,1,21,1,21,1,21,
	1,21,1,21,5,21,523,8,21,10,21,12,21,526,9,21,1,21,1,21,3,21,530,8,21,1,
	21,1,21,3,21,534,8,21,1,21,1,21,3,21,538,8,21,1,21,1,21,3,21,542,8,21,1,
	21,3,21,545,8,21,1,21,1,21,3,21,549,8,21,1,22,1,22,1,22,3,22,554,8,22,1,
	22,1,22,1,22,1,22,3,22,560,8,22,1,23,1,23,1,23,3,23,565,8,23,1,24,1,24,
	1,24,3,24,570,8,24,1,24,3,24,573,8,24,1,25,1,25,3,25,577,8,25,1,26,1,26,
	1,26,5,26,582,8,26,10,26,12,26,585,9,26,1,27,1,27,1,27,3,27,590,8,27,1,
	27,1,27,3,27,594,8,27,1,27,1,27,3,27,598,8,27,1,27,1,27,3,27,602,8,27,1,
	27,1,27,3,27,606,8,27,1,27,1,27,3,27,610,8,27,3,27,612,8,27,1,28,1,28,1,
	28,1,28,1,29,1,29,1,29,1,29,3,29,622,8,29,1,29,1,29,1,30,1,30,1,30,1,30,
	3,30,630,8,30,1,30,1,30,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,
	32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,5,33,652,8,33,10,33,12,33,655,
	9,33,1,33,1,33,1,34,1,34,3,34,661,8,34,1,34,1,34,1,34,1,34,3,34,667,8,34,
	1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,3,36,677,8,36,1,36,3,36,680,8,36,
	1,37,1,37,1,38,1,38,1,38,1,38,3,38,688,8,38,1,39,1,39,1,40,1,40,1,40,1,
	40,1,40,1,40,1,41,1,41,3,41,700,8,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,
	3,41,709,8,41,1,42,1,42,1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,45,1,
	45,1,45,1,45,5,45,725,8,45,10,45,12,45,728,9,45,1,45,1,45,1,46,1,46,1,46,
	1,46,1,46,1,46,5,46,738,8,46,10,46,12,46,741,9,46,1,46,1,46,3,46,745,8,
	46,1,47,1,47,3,47,749,8,47,1,48,1,48,1,48,1,48,5,48,755,8,48,10,48,12,48,
	758,9,48,1,48,3,48,761,8,48,1,49,1,49,1,50,1,50,1,50,1,50,3,50,769,8,50,
	1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,3,52,779,8,52,1,52,1,52,3,52,783,
	8,52,1,52,1,52,1,53,1,53,3,53,789,8,53,1,53,1,53,3,53,793,8,53,1,53,1,53,
	3,53,797,8,53,1,53,3,53,800,8,53,1,53,1,53,1,53,1,54,1,54,1,54,1,54,3,54,
	809,8,54,1,54,1,54,3,54,813,8,54,1,54,1,54,1,54,1,54,1,54,3,54,820,8,54,
	1,54,3,54,823,8,54,1,55,1,55,1,55,1,55,1,55,1,55,5,55,831,8,55,10,55,12,
	55,834,9,55,1,56,1,56,1,57,1,57,1,57,1,57,1,57,3,57,843,8,57,1,58,1,58,
	1,58,1,58,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,3,60,858,8,60,1,
	61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,3,62,869,8,62,1,62,1,62,3,62,
	873,8,62,1,62,1,62,1,62,1,62,1,62,3,62,880,8,62,1,63,1,63,1,63,3,63,885,
	8,63,1,63,1,63,1,64,1,64,3,64,891,8,64,1,64,1,64,3,64,895,8,64,1,64,1,64,
	1,65,1,65,1,65,3,65,902,8,65,1,65,1,65,3,65,906,8,65,1,66,1,66,3,66,910,
	8,66,1,66,1,66,3,66,914,8,66,1,66,1,66,1,67,1,67,1,67,1,67,3,67,922,8,67,
	1,67,1,67,3,67,926,8,67,1,67,1,67,1,68,3,68,931,8,68,1,68,1,68,1,68,1,68,
	3,68,937,8,68,1,69,1,69,1,69,1,69,3,69,943,8,69,1,69,3,69,946,8,69,1,69,
	1,69,3,69,950,8,69,1,70,1,70,1,70,1,71,1,71,1,71,1,71,1,72,1,72,1,72,1,
	72,5,72,963,8,72,10,72,12,72,966,9,72,1,73,1,73,1,73,1,73,5,73,972,8,73,
	10,73,12,73,975,9,73,1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,4,74,
	986,8,74,11,74,12,74,987,1,74,1,74,1,75,1,75,1,75,1,75,1,75,1,75,4,75,998,
	8,75,11,75,12,75,999,1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,5,76,1010,
	8,76,10,76,12,76,1013,9,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,3,76,
	1023,8,76,1,76,3,76,1026,8,76,1,76,1,76,3,76,1030,8,76,1,76,3,76,1033,8,
	76,3,76,1035,8,76,1,76,1,76,1,76,3,76,1040,8,76,1,76,1,76,3,76,1044,8,76,
	1,76,3,76,1047,8,76,5,76,1049,8,76,10,76,12,76,1052,9,76,1,77,1,77,1,77,
	1,77,5,77,1058,8,77,10,77,12,77,1061,9,77,1,78,1,78,1,78,1,78,1,78,5,78,
	1068,8,78,10,78,12,78,1071,9,78,1,78,1,78,3,78,1075,8,78,1,78,1,78,1,78,
	1,78,1,78,1,79,1,79,1,80,1,80,1,80,3,80,1087,8,80,1,80,3,80,1090,8,80,1,
	80,3,80,1093,8,80,1,80,3,80,1096,8,80,1,81,1,81,3,81,1100,8,81,1,81,1,81,
	1,81,1,81,5,81,1106,8,81,10,81,12,81,1109,9,81,3,81,1111,8,81,1,82,1,82,
	3,82,1115,8,82,1,82,3,82,1118,8,82,1,83,1,83,1,83,1,84,1,84,1,84,1,84,5,
	84,1127,8,84,10,84,12,84,1130,9,84,1,84,1,84,1,84,1,84,1,84,1,84,3,84,1138,
	8,84,1,84,3,84,1141,8,84,1,84,3,84,1144,8,84,1,84,1,84,1,84,3,84,1149,8,
	84,5,84,1151,8,84,10,84,12,84,1154,9,84,1,85,1,85,3,85,1158,8,85,1,86,3,
	86,1161,8,86,1,86,1,86,3,86,1165,8,86,1,86,3,86,1168,8,86,1,86,3,86,1171,
	8,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,5,86,1181,8,86,10,86,12,86,
	1184,9,86,1,86,1,86,1,86,1,86,3,86,1190,8,86,1,86,1,86,1,86,1,86,1,86,1,
	86,1,86,1,86,1,86,3,86,1201,8,86,1,87,1,87,1,88,1,88,1,88,1,88,1,88,1,88,
	1,89,1,89,1,90,1,90,1,90,1,90,1,90,1,90,1,90,5,90,1220,8,90,10,90,12,90,
	1223,9,90,1,90,1,90,3,90,1227,8,90,1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,
	92,5,92,1237,8,92,10,92,12,92,1240,9,92,1,93,1,93,1,93,1,93,1,93,1,93,1,
	93,5,93,1249,8,93,10,93,12,93,1252,9,93,1,93,1,93,1,93,1,93,1,93,1,93,1,
	93,5,93,1261,8,93,10,93,12,93,1264,9,93,1,93,1,93,1,93,1,93,1,93,1,93,1,
	93,5,93,1273,8,93,10,93,12,93,1276,9,93,1,93,1,93,1,93,1,93,1,93,1,93,1,
	93,1,93,5,93,1286,8,93,10,93,12,93,1289,9,93,1,93,1,93,3,93,1293,8,93,1,
	94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,5,95,1303,8,95,10,95,12,95,1306,9,
	95,1,96,1,96,3,96,1310,8,96,1,97,1,97,1,97,3,97,1315,8,97,1,98,1,98,1,98,
	1,98,5,98,1321,8,98,10,98,12,98,1324,9,98,1,99,1,99,1,99,1,99,1,100,3,100,
	1331,8,100,1,100,1,100,1,100,1,100,1,100,1,100,5,100,1339,8,100,10,100,
	12,100,1342,9,100,3,100,1344,8,100,1,100,1,100,1,100,1,100,1,100,5,100,
	1351,8,100,10,100,12,100,1354,9,100,3,100,1356,8,100,1,100,3,100,1359,8,
	100,1,100,1,100,1,101,1,101,3,101,1365,8,101,1,101,1,101,3,101,1369,8,101,
	1,102,1,102,1,102,1,102,3,102,1375,8,102,1,103,1,103,1,103,1,104,1,104,
	1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,3,105,1392,
	8,105,3,105,1394,8,105,1,105,1,105,1,105,1,105,1,105,1,105,5,105,1402,8,
	105,10,105,12,105,1405,9,105,1,106,3,106,1408,8,106,1,106,1,106,1,106,1,
	106,1,106,1,106,3,106,1416,8,106,1,106,1,106,1,106,1,106,1,106,5,106,1423,
	8,106,10,106,12,106,1426,9,106,1,106,1,106,1,106,3,106,1431,8,106,1,106,
	1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,3,106,1444,
	8,106,1,106,1,106,1,106,3,106,1449,8,106,1,106,1,106,1,106,1,106,1,106,
	1,106,1,106,1,106,5,106,1459,8,106,10,106,12,106,1462,9,106,1,106,1,106,
	3,106,1466,8,106,1,106,3,106,1469,8,106,1,106,1,106,1,106,1,106,3,106,1475,
	8,106,1,106,1,106,1,106,3,106,1480,8,106,1,106,1,106,1,106,3,106,1485,8,
	106,1,106,1,106,1,106,3,106,1490,8,106,1,107,3,107,1493,8,107,1,107,1,107,
	1,107,1,107,1,107,1,107,1,107,1,107,5,107,1503,8,107,10,107,12,107,1506,
	9,107,1,107,1,107,3,107,1510,8,107,1,107,3,107,1513,8,107,1,107,1,107,3,
	107,1517,8,107,1,108,1,108,1,108,1,108,3,108,1523,8,108,1,108,1,108,1,108,
	1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
	1,108,1,108,1,108,1,108,5,108,1544,8,108,10,108,12,108,1547,9,108,1,109,
	1,109,1,109,4,109,1552,8,109,11,109,12,109,1553,1,109,1,109,3,109,1558,
	8,109,1,109,1,109,1,109,1,109,1,109,4,109,1565,8,109,11,109,12,109,1566,
	1,109,1,109,3,109,1571,8,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,
	1,109,1,109,1,109,1,109,1,109,1,109,1,109,3,109,1587,8,109,1,109,1,109,
	1,109,1,109,1,109,1,109,1,109,3,109,1596,8,109,1,109,1,109,1,109,1,109,
	1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,
	1,109,1,109,1,109,1,109,1,109,1,109,3,109,1620,8,109,1,109,1,109,1,109,
	5,109,1625,8,109,10,109,12,109,1628,9,109,3,109,1630,8,109,1,109,1,109,
	1,109,1,109,1,109,1,109,1,109,1,109,3,109,1640,8,109,1,109,1,109,1,109,
	1,109,1,109,5,109,1647,8,109,10,109,12,109,1650,9,109,1,110,1,110,1,111,
	1,111,1,112,1,112,1,113,1,113,3,113,1660,8,113,1,114,1,114,1,114,3,114,
	1665,8,114,1,115,1,115,3,115,1669,8,115,1,116,1,116,1,116,4,116,1674,8,
	116,11,116,12,116,1675,1,117,1,117,1,117,3,117,1681,8,117,1,118,1,118,1,
	118,1,118,1,118,1,119,3,119,1689,8,119,1,119,1,119,3,119,1693,8,119,1,120,
	3,120,1696,8,120,1,120,1,120,3,120,1700,8,120,1,121,3,121,1703,8,121,1,
	121,1,121,3,121,1707,8,121,1,122,1,122,1,122,1,123,1,123,4,123,1714,8,123,
	11,123,12,123,1715,1,123,3,123,1719,8,123,1,124,1,124,1,124,1,124,1,125,
	1,125,1,125,5,125,1728,8,125,10,125,12,125,1731,9,125,1,126,1,126,3,126,
	1735,8,126,1,127,1,127,1,127,1,127,3,127,1741,8,127,1,128,1,128,1,129,1,
	129,1,130,1,130,1,130,1,130,1,130,1,131,1,131,1,131,5,131,1755,8,131,10,
	131,12,131,1758,9,131,1,132,1,132,5,132,1762,8,132,10,132,12,132,1765,9,
	132,1,133,1,133,5,133,1769,8,133,10,133,12,133,1772,9,133,1,134,1,134,1,
	134,1,135,1,135,1,135,1,135,1,136,1,136,1,136,1,137,1,137,1,137,1,137,5,
	137,1788,8,137,10,137,12,137,1791,9,137,1,137,1,137,1,138,1,138,3,138,1797,
	8,138,1,138,3,138,1800,8,138,1,139,1,139,1,139,3,139,1805,8,139,1,140,1,
	140,1,140,1,140,3,140,1811,8,140,1,141,1,141,1,141,1,141,1,141,1,141,3,
	141,1819,8,141,1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,
	142,1,142,1,142,1,142,1,142,3,142,1835,8,142,1,143,1,143,1,143,1,143,1,
	143,1,143,1,143,3,143,1844,8,143,1,144,1,144,1,145,1,145,1,146,1,146,1,
	147,1,147,1,147,1,147,1,147,1,147,1,147,1,147,1,147,3,147,1861,8,147,1,
	147,3,147,1864,8,147,1,148,1,148,1,149,1,149,1,150,1,150,1,151,1,151,1,
	152,1,152,1,153,1,153,1,154,1,154,1,154,2,1763,1770,5,152,168,210,216,218,
	155,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
	48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,
	96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,
	134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,
	170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,
	206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,
	242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,
	278,280,282,284,286,288,290,292,294,296,298,300,302,304,306,308,0,39,2,
	0,36,36,83,83,1,0,86,88,2,0,192,192,252,254,2,0,191,191,238,238,2,0,5,5,
	24,24,2,0,73,73,75,75,2,0,6,6,81,81,1,0,245,249,3,0,280,280,285,285,288,
	288,5,0,262,262,265,269,273,277,281,283,289,289,2,0,270,272,278,279,2,0,
	263,263,284,284,1,0,232,233,3,0,8,8,101,101,235,235,1,0,232,234,2,0,166,
	166,236,237,1,0,240,242,2,0,183,183,185,185,2,0,82,82,139,139,2,0,104,105,
	107,107,2,0,48,49,51,52,1,0,35,36,2,0,67,67,69,69,1,0,8,9,1,0,32,33,2,0,
	294,294,312,313,4,0,131,131,310,310,314,314,317,317,2,0,312,313,315,315,
	1,0,312,313,1,0,321,322,2,0,321,321,324,324,1,0,324,325,1,0,318,319,4,0,
	131,131,310,310,312,314,316,317,3,0,25,25,293,294,312,313,2,0,8,8,10,10,
	32,0,6,6,13,17,20,21,26,30,32,32,34,36,38,38,50,50,56,69,71,71,74,76,79,
	80,83,84,89,92,94,96,98,98,101,103,106,106,109,123,127,141,143,183,185,
	202,204,211,213,233,235,236,238,239,252,253,256,258,262,270,273,275,277,
	282,284,289,6,0,45,46,48,52,54,55,104,107,142,142,222,222,22,0,4,42,44,
	44,47,47,53,53,56,76,79,80,82,84,89,98,101,103,108,141,143,175,177,211,
	213,221,223,233,235,236,238,239,252,253,255,258,262,270,273,275,277,282,
	284,289,2047,0,310,1,0,0,0,2,313,1,0,0,0,4,323,1,0,0,0,6,338,1,0,0,0,8,
	340,1,0,0,0,10,356,1,0,0,0,12,360,1,0,0,0,14,362,1,0,0,0,16,365,1,0,0,0,
	18,376,1,0,0,0,20,384,1,0,0,0,22,392,1,0,0,0,24,394,1,0,0,0,26,439,1,0,
	0,0,28,441,1,0,0,0,30,448,1,0,0,0,32,452,1,0,0,0,34,456,1,0,0,0,36,460,
	1,0,0,0,38,503,1,0,0,0,40,507,1,0,0,0,42,509,1,0,0,0,44,550,1,0,0,0,46,
	564,1,0,0,0,48,566,1,0,0,0,50,576,1,0,0,0,52,578,1,0,0,0,54,611,1,0,0,0,
	56,613,1,0,0,0,58,617,1,0,0,0,60,625,1,0,0,0,62,633,1,0,0,0,64,637,1,0,
	0,0,66,644,1,0,0,0,68,660,1,0,0,0,70,668,1,0,0,0,72,671,1,0,0,0,74,681,
	1,0,0,0,76,683,1,0,0,0,78,689,1,0,0,0,80,691,1,0,0,0,82,699,1,0,0,0,84,
	710,1,0,0,0,86,712,1,0,0,0,88,716,1,0,0,0,90,720,1,0,0,0,92,744,1,0,0,0,
	94,748,1,0,0,0,96,750,1,0,0,0,98,762,1,0,0,0,100,768,1,0,0,0,102,770,1,
	0,0,0,104,775,1,0,0,0,106,786,1,0,0,0,108,804,1,0,0,0,110,824,1,0,0,0,112,
	835,1,0,0,0,114,837,1,0,0,0,116,844,1,0,0,0,118,848,1,0,0,0,120,851,1,0,
	0,0,122,859,1,0,0,0,124,864,1,0,0,0,126,881,1,0,0,0,128,888,1,0,0,0,130,
	898,1,0,0,0,132,907,1,0,0,0,134,917,1,0,0,0,136,936,1,0,0,0,138,938,1,0,
	0,0,140,951,1,0,0,0,142,954,1,0,0,0,144,958,1,0,0,0,146,967,1,0,0,0,148,
	978,1,0,0,0,150,991,1,0,0,0,152,1034,1,0,0,0,154,1053,1,0,0,0,156,1062,
	1,0,0,0,158,1081,1,0,0,0,160,1083,1,0,0,0,162,1097,1,0,0,0,164,1112,1,0,
	0,0,166,1119,1,0,0,0,168,1122,1,0,0,0,170,1155,1,0,0,0,172,1200,1,0,0,0,
	174,1202,1,0,0,0,176,1204,1,0,0,0,178,1210,1,0,0,0,180,1226,1,0,0,0,182,
	1228,1,0,0,0,184,1231,1,0,0,0,186,1292,1,0,0,0,188,1294,1,0,0,0,190,1297,
	1,0,0,0,192,1307,1,0,0,0,194,1311,1,0,0,0,196,1316,1,0,0,0,198,1325,1,0,
	0,0,200,1330,1,0,0,0,202,1362,1,0,0,0,204,1374,1,0,0,0,206,1376,1,0,0,0,
	208,1379,1,0,0,0,210,1393,1,0,0,0,212,1489,1,0,0,0,214,1516,1,0,0,0,216,
	1522,1,0,0,0,218,1639,1,0,0,0,220,1651,1,0,0,0,222,1653,1,0,0,0,224,1655,
	1,0,0,0,226,1659,1,0,0,0,228,1661,1,0,0,0,230,1666,1,0,0,0,232,1673,1,0,
	0,0,234,1677,1,0,0,0,236,1682,1,0,0,0,238,1692,1,0,0,0,240,1695,1,0,0,0,
	242,1702,1,0,0,0,244,1708,1,0,0,0,246,1718,1,0,0,0,248,1720,1,0,0,0,250,
	1724,1,0,0,0,252,1734,1,0,0,0,254,1740,1,0,0,0,256,1742,1,0,0,0,258,1744,
	1,0,0,0,260,1746,1,0,0,0,262,1751,1,0,0,0,264,1759,1,0,0,0,266,1766,1,0,
	0,0,268,1773,1,0,0,0,270,1776,1,0,0,0,272,1780,1,0,0,0,274,1783,1,0,0,0,
	276,1794,1,0,0,0,278,1804,1,0,0,0,280,1810,1,0,0,0,282,1818,1,0,0,0,284,
	1834,1,0,0,0,286,1843,1,0,0,0,288,1845,1,0,0,0,290,1847,1,0,0,0,292,1849,
	1,0,0,0,294,1863,1,0,0,0,296,1865,1,0,0,0,298,1867,1,0,0,0,300,1869,1,0,
	0,0,302,1871,1,0,0,0,304,1873,1,0,0,0,306,1875,1,0,0,0,308,1877,1,0,0,0,
	310,311,3,2,1,0,311,312,5,0,0,1,312,1,1,0,0,0,313,314,3,4,2,0,314,315,5,
	0,0,1,315,3,1,0,0,0,316,318,3,6,3,0,317,319,5,304,0,0,318,317,1,0,0,0,318,
	319,1,0,0,0,319,322,1,0,0,0,320,322,3,8,4,0,321,316,1,0,0,0,321,320,1,0,
	0,0,322,325,1,0,0,0,323,321,1,0,0,0,323,324,1,0,0,0,324,5,1,0,0,0,325,323,
	1,0,0,0,326,339,3,10,5,0,327,339,3,12,6,0,328,339,3,14,7,0,329,339,3,16,
	8,0,330,339,3,22,11,0,331,339,3,26,13,0,332,339,3,28,14,0,333,339,3,30,
	15,0,334,339,3,32,16,0,335,339,3,34,17,0,336,339,3,36,18,0,337,339,3,38,
	19,0,338,326,1,0,0,0,338,327,1,0,0,0,338,328,1,0,0,0,338,329,1,0,0,0,338,
	330,1,0,0,0,338,331,1,0,0,0,338,332,1,0,0,0,338,333,1,0,0,0,338,334,1,0,
	0,0,338,335,1,0,0,0,338,336,1,0,0,0,338,337,1,0,0,0,339,7,1,0,0,0,340,341,
	5,304,0,0,341,9,1,0,0,0,342,357,3,40,20,0,343,357,3,104,52,0,344,357,3,
	106,53,0,345,357,3,108,54,0,346,357,3,102,51,0,347,357,3,114,57,0,348,357,
	3,120,60,0,349,357,3,122,61,0,350,357,3,124,62,0,351,357,3,126,63,0,352,
	357,3,128,64,0,353,357,3,130,65,0,354,357,3,132,66,0,355,357,3,134,67,0,
	356,342,1,0,0,0,356,343,1,0,0,0,356,344,1,0,0,0,356,345,1,0,0,0,356,346,
	1,0,0,0,356,347,1,0,0,0,356,348,1,0,0,0,356,349,1,0,0,0,356,350,1,0,0,0,
	356,351,1,0,0,0,356,352,1,0,0,0,356,353,1,0,0,0,356,354,1,0,0,0,356,355,
	1,0,0,0,357,11,1,0,0,0,358,361,3,152,76,0,359,361,3,136,68,0,360,358,1,
	0,0,0,360,359,1,0,0,0,361,13,1,0,0,0,362,363,7,0,0,0,363,364,3,264,132,
	0,364,15,1,0,0,0,365,369,5,84,0,0,366,370,3,18,9,0,367,368,5,85,0,0,368,
	370,5,37,0,0,369,366,1,0,0,0,369,367,1,0,0,0,369,370,1,0,0,0,370,374,1,
	0,0,0,371,375,3,12,6,0,372,375,3,138,69,0,373,375,3,150,75,0,374,371,1,
	0,0,0,374,372,1,0,0,0,374,373,1,0,0,0,375,17,1,0,0,0,376,381,3,20,10,0,
	377,378,5,303,0,0,378,380,3,20,10,0,379,377,1,0,0,0,380,383,1,0,0,0,381,
	379,1,0,0,0,381,382,1,0,0,0,382,19,1,0,0,0,383,381,1,0,0,0,384,385,7,1,
	0,0,385,21,1,0,0,0,386,388,5,98,0,0,387,389,5,238,0,0,388,387,1,0,0,0,388,
	389,1,0,0,0,389,390,1,0,0,0,390,393,3,264,132,0,391,393,3,24,12,0,392,386,
	1,0,0,0,392,391,1,0,0,0,393,23,1,0,0,0,394,395,5,98,0,0,395,396,5,100,0,
	0,396,401,3,264,132,0,397,398,5,303,0,0,398,400,3,264,132,0,399,397,1,0,
	0,0,400,403,1,0,0,0,401,399,1,0,0,0,401,402,1,0,0,0,402,25,1,0,0,0,403,
	401,1,0,0,0,404,405,5,94,0,0,405,440,7,2,0,0,406,407,5,94,0,0,407,408,5,
	66,0,0,408,440,7,3,0,0,409,410,5,94,0,0,410,413,5,95,0,0,411,412,7,4,0,
	0,412,414,3,264,132,0,413,411,1,0,0,0,413,414,1,0,0,0,414,416,1,0,0,0,415,
	417,3,214,107,0,416,415,1,0,0,0,416,417,1,0,0,0,417,440,1,0,0,0,418,419,
	5,94,0,0,419,420,5,96,0,0,420,421,7,4,0,0,421,423,3,264,132,0,422,424,3,
	214,107,0,423,422,1,0,0,0,423,424,1,0,0,0,424,440,1,0,0,0,425,426,5,94,
	0,0,426,427,5,72,0,0,427,428,7,5,0,0,428,440,3,264,132,0,429,431,5,94,0,
	0,430,432,5,53,0,0,431,430,1,0,0,0,431,432,1,0,0,0,432,433,1,0,0,0,433,
	440,5,102,0,0,434,436,5,94,0,0,435,437,5,52,0,0,436,435,1,0,0,0,436,437,
	1,0,0,0,437,438,1,0,0,0,438,440,5,100,0,0,439,404,1,0,0,0,439,406,1,0,0,
	0,439,409,1,0,0,0,439,418,1,0,0,0,439,425,1,0,0,0,439,429,1,0,0,0,439,434,
	1,0,0,0,440,27,1,0,0,0,441,442,5,211,0,0,442,443,5,99,0,0,443,446,3,264,
	132,0,444,445,5,70,0,0,445,447,3,274,137,0,446,444,1,0,0,0,446,447,1,0,
	0,0,447,29,1,0,0,0,448,449,5,212,0,0,449,450,5,99,0,0,450,451,3,264,132,
	0,451,31,1,0,0,0,452,454,5,115,0,0,453,455,3,276,138,0,454,453,1,0,0,0,
	454,455,1,0,0,0,455,33,1,0,0,0,456,458,5,116,0,0,457,459,3,278,139,0,458,
	457,1,0,0,0,458,459,1,0,0,0,459,35,1,0,0,0,460,461,7,6,0,0,461,462,5,243,
	0,0,462,463,3,112,56,0,463,37,1,0,0,0,464,465,5,6,0,0,465,466,5,243,0,0,
	466,467,5,70,0,0,467,470,5,326,0,0,468,469,5,7,0,0,469,471,3,264,132,0,
	470,468,1,0,0,0,470,471,1,0,0,0,471,504,1,0,0,0,472,473,5,6,0,0,473,474,
	5,244,0,0,474,475,5,70,0,0,475,478,5,326,0,0,476,477,5,7,0,0,477,479,3,
	264,132,0,478,476,1,0,0,0,478,479,1,0,0,0,479,482,1,0,0,0,480,481,5,112,
	0,0,481,483,3,264,132,0,482,480,1,0,0,0,482,483,1,0,0,0,483,504,1,0,0,0,
	484,485,5,6,0,0,485,486,7,7,0,0,486,487,5,70,0,0,487,488,5,326,0,0,488,
	489,5,112,0,0,489,504,3,264,132,0,490,491,5,6,0,0,491,492,5,250,0,0,492,
	504,5,326,0,0,493,494,5,6,0,0,494,495,5,251,0,0,495,496,5,244,0,0,496,497,
	5,70,0,0,497,498,5,326,0,0,498,499,5,112,0,0,499,500,3,264,132,0,500,501,
	5,256,0,0,501,502,3,264,132,0,502,504,1,0,0,0,503,464,1,0,0,0,503,472,1,
	0,0,0,503,484,1,0,0,0,503,490,1,0,0,0,503,493,1,0,0,0,504,39,1,0,0,0,505,
	508,3,42,21,0,506,508,3,44,22,0,507,505,1,0,0,0,507,506,1,0,0,0,508,41,
	1,0,0,0,509,511,5,72,0,0,510,512,5,165,0,0,511,510,1,0,0,0,511,512,1,0,
	0,0,512,513,1,0,0,0,513,515,5,73,0,0,514,516,3,270,135,0,515,514,1,0,0,
	0,515,516,1,0,0,0,516,517,1,0,0,0,517,518,3,98,49,0,518,519,5,301,0,0,519,
	524,3,46,23,0,520,521,5,303,0,0,521,523,3,46,23,0,522,520,1,0,0,0,523,526,
	1,0,0,0,524,522,1,0,0,0,524,525,1,0,0,0,525,529,1,0,0,0,526,524,1,0,0,0,
	527,528,5,303,0,0,528,530,3,80,40,0,529,527,1,0,0,0,529,530,1,0,0,0,530,
	533,1,0,0,0,531,532,5,303,0,0,532,534,3,82,41,0,533,531,1,0,0,0,533,534,
	1,0,0,0,534,537,1,0,0,0,535,536,5,303,0,0,536,538,3,86,43,0,537,535,1,0,
	0,0,537,538,1,0,0,0,538,539,1,0,0,0,539,541,5,302,0,0,540,542,3,70,35,0,
	541,540,1,0,0,0,541,542,1,0,0,0,542,544,1,0,0,0,543,545,3,88,44,0,544,543,
	1,0,0,0,544,545,1,0,0,0,545,546,1,0,0,0,546,548,3,268,134,0,547,549,3,96,
	48,0,548,547,1,0,0,0,548,549,1,0,0,0,549,43,1,0,0,0,550,551,5,72,0,0,551,
	553,5,73,0,0,552,554,3,270,135,0,553,552,1,0,0,0,553,554,1,0,0,0,554,555,
	1,0,0,0,555,556,3,98,49,0,556,559,3,268,134,0,557,558,5,7,0,0,558,560,3,
	152,76,0,559,557,1,0,0,0,559,560,1,0,0,0,560,45,1,0,0,0,561,565,3,48,24,
	0,562,565,3,72,36,0,563,565,3,76,38,0,564,561,1,0,0,0,564,562,1,0,0,0,564,
	563,1,0,0,0,565,47,1,0,0,0,566,567,3,50,25,0,567,569,3,54,27,0,568,570,
	3,68,34,0,569,568,1,0,0,0,569,570,1,0,0,0,570,572,1,0,0,0,571,573,3,70,
	35,0,572,571,1,0,0,0,572,573,1,0,0,0,573,49,1,0,0,0,574,577,3,266,133,0,
	575,577,3,208,104,0,576,574,1,0,0,0,576,575,1,0,0,0,577,51,1,0,0,0,578,
	583,3,50,25,0,579,580,5,303,0,0,580,582,3,50,25,0,581,579,1,0,0,0,582,585,
	1,0,0,0,583,581,1,0,0,0,583,584,1,0,0,0,584,53,1,0,0,0,585,583,1,0,0,0,
	586,612,7,8,0,0,587,589,7,9,0,0,588,590,3,56,28,0,589,588,1,0,0,0,589,590,
	1,0,0,0,590,612,1,0,0,0,591,593,7,10,0,0,592,594,3,58,29,0,593,592,1,0,
	0,0,593,594,1,0,0,0,594,612,1,0,0,0,595,597,7,11,0,0,596,598,3,62,31,0,
	597,596,1,0,0,0,597,598,1,0,0,0,598,612,1,0,0,0,599,601,5,264,0,0,600,602,
	3,64,32,0,601,600,1,0,0,0,601,602,1,0,0,0,602,612,1,0,0,0,603,605,5,287,
	0,0,604,606,3,66,33,0,605,604,1,0,0,0,605,606,1,0,0,0,606,612,1,0,0,0,607,
	609,5,286,0,0,608,610,3,60,30,0,609,608,1,0,0,0,609,610,1,0,0,0,610,612,
	1,0,0,0,611,586,1,0,0,0,611,587,1,0,0,0,611,591,1,0,0,0,611,595,1,0,0,0,
	611,599,1,0,0,0,611,603,1,0,0,0,611,607,1,0,0,0,612,55,1,0,0,0,613,614,
	5,301,0,0,614,615,3,298,149,0,615,616,5,302,0,0,616,57,1,0,0,0,617,618,
	5,301,0,0,618,621,3,298,149,0,619,620,5,303,0,0,620,622,3,298,149,0,621,
	619,1,0,0,0,621,622,1,0,0,0,622,623,1,0,0,0,623,624,5,302,0,0,624,59,1,
	0,0,0,625,626,5,301,0,0,626,629,3,296,148,0,627,628,5,303,0,0,628,630,3,
	296,148,0,629,627,1,0,0,0,629,630,1,0,0,0,630,631,1,0,0,0,631,632,5,302,
	0,0,632,61,1,0,0,0,633,634,5,292,0,0,634,635,3,54,27,0,635,636,5,291,0,
	0,636,63,1,0,0,0,637,638,5,292,0,0,638,639,3,54,27,0,639,640,5,303,0,0,
	640,641,3,54,27,0,641,642,1,0,0,0,642,643,5,291,0,0,643,65,1,0,0,0,644,
	645,5,292,0,0,645,646,3,50,25,0,646,653,3,54,27,0,647,648,5,303,0,0,648,
	649,3,50,25,0,649,650,3,54,27,0,650,652,1,0,0,0,651,647,1,0,0,0,652,655,
	1,0,0,0,653,651,1,0,0,0,653,654,1,0,0,0,654,656,1,0,0,0,655,653,1,0,0,0,
	656,657,5,291,0,0,657,67,1,0,0,0,658,659,5,184,0,0,659,661,3,84,42,0,660,
	658,1,0,0,0,660,661,1,0,0,0,661,662,1,0,0,0,662,663,5,255,0,0,663,666,5,
	256,0,0,664,665,5,25,0,0,665,667,5,259,0,0,666,664,1,0,0,0,666,667,1,0,
	0,0,667,69,1,0,0,0,668,669,5,114,0,0,669,670,5,320,0,0,670,71,1,0,0,0,671,
	672,3,50,25,0,672,673,3,54,27,0,673,676,5,260,0,0,674,675,5,5,0,0,675,677,
	3,74,37,0,676,674,1,0,0,0,676,677,1,0,0,0,677,679,1,0,0,0,678,680,5,261,
	0,0,679,678,1,0,0,0,679,680,1,0,0,0,680,73,1,0,0,0,681,682,5,320,0,0,682,
	75,1,0,0,0,683,684,3,50,25,0,684,685,5,7,0,0,685,687,3,78,39,0,686,688,
	3,70,35,0,687,686,1,0,0,0,687,688,1,0,0,0,688,77,1,0,0,0,689,690,3,208,
	104,0,690,79,1,0,0,0,691,692,5,225,0,0,692,693,5,37,0,0,693,694,3,208,104,
	0,694,695,5,7,0,0,695,696,3,208,104,0,696,81,1,0,0,0,697,698,5,184,0,0,
	698,700,3,84,42,0,699,697,1,0,0,0,699,700,1,0,0,0,700,701,1,0,0,0,701,702,
	5,255,0,0,702,703,5,256,0,0,703,704,5,301,0,0,704,705,3,52,26,0,705,708,
	5,302,0,0,706,707,5,25,0,0,707,709,5,259,0,0,708,706,1,0,0,0,708,709,1,
	0,0,0,709,83,1,0,0,0,710,711,3,252,126,0,711,85,1,0,0,0,712,713,5,257,0,
	0,713,714,5,37,0,0,714,715,5,258,0,0,715,87,1,0,0,0,716,717,5,199,0,0,717,
	718,5,13,0,0,718,719,3,90,45,0,719,89,1,0,0,0,720,721,5,301,0,0,721,726,
	3,92,46,0,722,723,5,303,0,0,723,725,3,92,46,0,724,722,1,0,0,0,725,728,1,
	0,0,0,726,724,1,0,0,0,726,727,1,0,0,0,727,729,1,0,0,0,728,726,1,0,0,0,729,
	730,5,302,0,0,730,91,1,0,0,0,731,745,3,226,113,0,732,733,3,252,126,0,733,
	734,5,301,0,0,734,739,3,94,47,0,735,736,5,303,0,0,736,738,3,94,47,0,737,
	735,1,0,0,0,738,741,1,0,0,0,739,737,1,0,0,0,739,740,1,0,0,0,740,742,1,0,
	0,0,741,739,1,0,0,0,742,743,5,302,0,0,743,745,1,0,0,0,744,731,1,0,0,0,744,
	732,1,0,0,0,745,93,1,0,0,0,746,749,3,226,113,0,747,749,3,294,147,0,748,
	746,1,0,0,0,748,747,1,0,0,0,749,95,1,0,0,0,750,751,5,29,0,0,751,760,3,98,
	49,0,752,756,5,301,0,0,753,755,3,100,50,0,754,753,1,0,0,0,755,758,1,0,0,
	0,756,754,1,0,0,0,756,757,1,0,0,0,757,759,1,0,0,0,758,756,1,0,0,0,759,761,
	5,302,0,0,760,752,1,0,0,0,760,761,1,0,0,0,761,97,1,0,0,0,762,763,3,264,
	132,0,763,99,1,0,0,0,764,765,7,12,0,0,765,769,7,13,0,0,766,767,7,14,0,0,
	767,769,7,15,0,0,768,764,1,0,0,0,768,766,1,0,0,0,769,101,1,0,0,0,770,771,
	5,72,0,0,771,772,5,238,0,0,772,773,3,264,132,0,773,774,3,268,134,0,774,
	103,1,0,0,0,775,776,5,72,0,0,776,778,5,191,0,0,777,779,3,270,135,0,778,
	777,1,0,0,0,778,779,1,0,0,0,779,780,1,0,0,0,780,782,3,264,132,0,781,783,
	3,70,35,0,782,781,1,0,0,0,782,783,1,0,0,0,783,784,1,0,0,0,784,785,3,268,
	134,0,785,105,1,0,0,0,786,788,5,72,0,0,787,789,5,165,0,0,788,787,1,0,0,
	0,788,789,1,0,0,0,789,790,1,0,0,0,790,792,5,75,0,0,791,793,3,270,135,0,
	792,791,1,0,0,0,792,793,1,0,0,0,793,794,1,0,0,0,794,796,3,264,132,0,795,
	797,3,52,26,0,796,795,1,0,0,0,796,797,1,0,0,0,797,799,1,0,0,0,798,800,3,
	70,35,0,799,798,1,0,0,0,799,800,1,0,0,0,800,801,1,0,0,0,801,802,5,7,0,0,
	802,803,3,152,76,0,803,107,1,0,0,0,804,808,5,72,0,0,805,809,5,165,0,0,806,
	807,5,165,0,0,807,809,5,231,0,0,808,805,1,0,0,0,808,806,1,0,0,0,808,809,
	1,0,0,0,809,810,1,0,0,0,810,812,5,156,0,0,811,813,3,270,135,0,812,811,1,
	0,0,0,812,813,1,0,0,0,813,814,1,0,0,0,814,815,3,264,132,0,815,816,5,7,0,
	0,816,819,3,252,126,0,817,818,5,239,0,0,818,820,7,16,0,0,819,817,1,0,0,
	0,819,820,1,0,0,0,820,822,1,0,0,0,821,823,3,110,55,0,822,821,1,0,0,0,822,
	823,1,0,0,0,823,109,1,0,0,0,824,825,5,142,0,0,825,826,5,243,0,0,826,832,
	3,112,56,0,827,828,5,303,0,0,828,829,5,243,0,0,829,831,3,112,56,0,830,827,
	1,0,0,0,831,834,1,0,0,0,832,830,1,0,0,0,832,833,1,0,0,0,833,111,1,0,0,0,
	834,832,1,0,0,0,835,836,5,320,0,0,836,113,1,0,0,0,837,838,5,111,0,0,838,
	839,5,73,0,0,839,842,3,264,132,0,840,843,3,116,58,0,841,843,3,118,59,0,
	842,840,1,0,0,0,842,841,1,0,0,0,843,115,1,0,0,0,844,845,5,112,0,0,845,846,
	5,108,0,0,846,847,3,264,132,0,847,117,1,0,0,0,848,849,5,115,0,0,849,850,
	3,274,137,0,850,119,1,0,0,0,851,852,5,111,0,0,852,853,5,75,0,0,853,857,
	3,264,132,0,854,858,3,116,58,0,855,856,5,7,0,0,856,858,3,152,76,0,857,854,
	1,0,0,0,857,855,1,0,0,0,858,121,1,0,0,0,859,860,5,111,0,0,860,861,5,191,
	0,0,861,862,3,264,132,0,862,863,3,118,59,0,863,123,1,0,0,0,864,868,5,111,
	0,0,865,869,5,165,0,0,866,867,5,165,0,0,867,869,5,231,0,0,868,865,1,0,0,
	0,868,866,1,0,0,0,868,869,1,0,0,0,869,870,1,0,0,0,870,872,5,156,0,0,871,
	873,3,272,136,0,872,871,1,0,0,0,872,873,1,0,0,0,873,874,1,0,0,0,874,875,
	3,264,132,0,875,876,5,7,0,0,876,879,3,252,126,0,877,878,5,239,0,0,878,880,
	7,16,0,0,879,877,1,0,0,0,879,880,1,0,0,0,880,125,1,0,0,0,881,882,5,103,
	0,0,882,884,5,238,0,0,883,885,3,272,136,0,884,883,1,0,0,0,884,885,1,0,0,
	0,885,886,1,0,0,0,886,887,3,264,132,0,887,127,1,0,0,0,888,890,5,103,0,0,
	889,891,5,165,0,0,890,889,1,0,0,0,890,891,1,0,0,0,891,892,1,0,0,0,892,894,
	5,73,0,0,893,895,3,272,136,0,894,893,1,0,0,0,894,895,1,0,0,0,895,896,1,
	0,0,0,896,897,3,264,132,0,897,129,1,0,0,0,898,899,5,103,0,0,899,901,5,191,
	0,0,900,902,3,272,136,0,901,900,1,0,0,0,901,902,1,0,0,0,902,903,1,0,0,0,
	903,905,3,264,132,0,904,906,7,17,0,0,905,904,1,0,0,0,905,906,1,0,0,0,906,
	131,1,0,0,0,907,909,5,103,0,0,908,910,5,165,0,0,909,908,1,0,0,0,909,910,
	1,0,0,0,910,911,1,0,0,0,911,913,5,75,0,0,912,914,3,272,136,0,913,912,1,
	0,0,0,913,914,1,0,0,0,914,915,1,0,0,0,915,916,3,264,132,0,916,133,1,0,0,
	0,917,921,5,103,0,0,918,922,5,165,0,0,919,920,5,165,0,0,920,922,5,231,0,
	0,921,918,1,0,0,0,921,919,1,0,0,0,921,922,1,0,0,0,922,923,1,0,0,0,923,925,
	5,156,0,0,924,926,3,272,136,0,925,924,1,0,0,0,925,926,1,0,0,0,926,927,1,
	0,0,0,927,928,3,264,132,0,928,135,1,0,0,0,929,931,5,77,0,0,930,929,1,0,
	0,0,930,931,1,0,0,0,931,932,1,0,0,0,932,937,3,138,69,0,933,937,3,148,74,
	0,934,935,5,77,0,0,935,937,3,150,75,0,936,930,1,0,0,0,936,933,1,0,0,0,936,
	934,1,0,0,0,937,137,1,0,0,0,938,939,5,79,0,0,939,940,7,18,0,0,940,949,3,
	264,132,0,941,943,3,140,70,0,942,941,1,0,0,0,942,943,1,0,0,0,943,945,1,
	0,0,0,944,946,3,142,71,0,945,944,1,0,0,0,945,946,1,0,0,0,946,947,1,0,0,
	0,947,950,3,152,76,0,948,950,3,144,72,0,949,942,1,0,0,0,949,948,1,0,0,0,
	950,139,1,0,0,0,951,952,5,60,0,0,952,953,3,274,137,0,953,141,1,0,0,0,954,
	955,5,301,0,0,955,956,3,52,26,0,956,957,5,302,0,0,957,143,1,0,0,0,958,959,
	5,71,0,0,959,964,3,146,73,0,960,961,5,303,0,0,961,963,3,146,73,0,962,960,
	1,0,0,0,963,966,1,0,0,0,964,962,1,0,0,0,964,965,1,0,0,0,965,145,1,0,0,0,
	966,964,1,0,0,0,967,968,5,301,0,0,968,973,3,294,147,0,969,970,5,303,0,0,
	970,972,3,294,147,0,971,969,1,0,0,0,972,975,1,0,0,0,973,971,1,0,0,0,973,
	974,1,0,0,0,974,976,1,0,0,0,975,973,1,0,0,0,976,977,5,302,0,0,977,147,1,
	0,0,0,978,979,5,43,0,0,979,980,5,78,0,0,980,981,5,115,0,0,981,985,5,304,
	0,0,982,983,3,138,69,0,983,984,5,304,0,0,984,986,1,0,0,0,985,982,1,0,0,
	0,986,987,1,0,0,0,987,985,1,0,0,0,987,988,1,0,0,0,988,989,1,0,0,0,989,990,
	5,44,0,0,990,149,1,0,0,0,991,992,5,78,0,0,992,993,5,115,0,0,993,997,5,43,
	0,0,994,995,3,138,69,0,995,996,5,304,0,0,996,998,1,0,0,0,997,994,1,0,0,
	0,998,999,1,0,0,0,999,997,1,0,0,0,999,1000,1,0,0,0,1000,1001,1,0,0,0,1001,
	1002,5,44,0,0,1002,151,1,0,0,0,1003,1004,6,76,-1,0,1004,1035,3,154,77,0,
	1005,1006,5,70,0,0,1006,1011,3,156,78,0,1007,1008,5,303,0,0,1008,1010,3,
	156,78,0,1009,1007,1,0,0,0,1010,1013,1,0,0,0,1011,1009,1,0,0,0,1011,1012,
	1,0,0,0,1012,1014,1,0,0,0,1013,1011,1,0,0,0,1014,1015,3,152,76,5,1015,1035,
	1,0,0,0,1016,1017,5,301,0,0,1017,1018,3,152,76,0,1018,1019,5,302,0,0,1019,
	1035,1,0,0,0,1020,1022,3,162,81,0,1021,1023,3,190,95,0,1022,1021,1,0,0,
	0,1022,1023,1,0,0,0,1023,1025,1,0,0,0,1024,1026,3,194,97,0,1025,1024,1,
	0,0,0,1025,1026,1,0,0,0,1026,1035,1,0,0,0,1027,1029,3,160,80,0,1028,1030,
	3,190,95,0,1029,1028,1,0,0,0,1029,1030,1,0,0,0,1030,1032,1,0,0,0,1031,1033,
	3,194,97,0,1032,1031,1,0,0,0,1032,1033,1,0,0,0,1033,1035,1,0,0,0,1034,1003,
	1,0,0,0,1034,1005,1,0,0,0,1034,1016,1,0,0,0,1034,1020,1,0,0,0,1034,1027,
	1,0,0,0,1035,1050,1,0,0,0,1036,1037,10,3,0,0,1037,1039,7,19,0,0,1038,1040,
	5,8,0,0,1039,1038,1,0,0,0,1039,1040,1,0,0,0,1040,1041,1,0,0,0,1041,1043,
	3,152,76,0,1042,1044,3,190,95,0,1043,1042,1,0,0,0,1043,1044,1,0,0,0,1044,
	1046,1,0,0,0,1045,1047,3,194,97,0,1046,1045,1,0,0,0,1046,1047,1,0,0,0,1047,
	1049,1,0,0,0,1048,1036,1,0,0,0,1049,1052,1,0,0,0,1050,1048,1,0,0,0,1050,
	1051,1,0,0,0,1051,153,1,0,0,0,1052,1050,1,0,0,0,1053,1054,5,71,0,0,1054,
	1059,3,208,104,0,1055,1056,5,303,0,0,1056,1058,3,208,104,0,1057,1055,1,
	0,0,0,1058,1061,1,0,0,0,1059,1057,1,0,0,0,1059,1060,1,0,0,0,1060,155,1,
	0,0,0,1061,1059,1,0,0,0,1062,1074,3,158,79,0,1063,1064,5,301,0,0,1064,1069,
	3,50,25,0,1065,1066,5,303,0,0,1066,1068,3,50,25,0,1067,1065,1,0,0,0,1068,
	1071,1,0,0,0,1069,1067,1,0,0,0,1069,1070,1,0,0,0,1070,1072,1,0,0,0,1071,
	1069,1,0,0,0,1072,1073,5,302,0,0,1073,1075,1,0,0,0,1074,1063,1,0,0,0,1074,
	1075,1,0,0,0,1075,1076,1,0,0,0,1076,1077,5,7,0,0,1077,1078,5,301,0,0,1078,
	1079,3,152,76,0,1079,1080,5,302,0,0,1080,157,1,0,0,0,1081,1082,3,252,126,
	0,1082,159,1,0,0,0,1083,1084,3,162,81,0,1084,1086,3,166,83,0,1085,1087,
	3,182,91,0,1086,1085,1,0,0,0,1086,1087,1,0,0,0,1087,1089,1,0,0,0,1088,1090,
	3,184,92,0,1089,1088,1,0,0,0,1089,1090,1,0,0,0,1090,1092,1,0,0,0,1091,1093,
	3,188,94,0,1092,1091,1,0,0,0,1092,1093,1,0,0,0,1093,1095,1,0,0,0,1094,1096,
	3,196,98,0,1095,1094,1,0,0,0,1095,1096,1,0,0,0,1096,161,1,0,0,0,1097,1099,
	5,4,0,0,1098,1100,3,302,151,0,1099,1098,1,0,0,0,1099,1100,1,0,0,0,1100,
	1110,1,0,0,0,1101,1111,5,310,0,0,1102,1107,3,164,82,0,1103,1104,5,303,0,
	0,1104,1106,3,164,82,0,1105,1103,1,0,0,0,1106,1109,1,0,0,0,1107,1105,1,
	0,0,0,1107,1108,1,0,0,0,1108,1111,1,0,0,0,1109,1107,1,0,0,0,1110,1101,1,
	0,0,0,1110,1102,1,0,0,0,1111,163,1,0,0,0,1112,1117,3,208,104,0,1113,1115,
	5,7,0,0,1114,1113,1,0,0,0,1114,1115,1,0,0,0,1115,1116,1,0,0,0,1116,1118,
	3,208,104,0,1117,1114,1,0,0,0,1117,1118,1,0,0,0,1118,165,1,0,0,0,1119,1120,
	5,5,0,0,1120,1121,3,168,84,0,1121,167,1,0,0,0,1122,1123,6,84,-1,0,1123,
	1128,3,170,85,0,1124,1125,5,303,0,0,1125,1127,3,170,85,0,1126,1124,1,0,
	0,0,1127,1130,1,0,0,0,1128,1126,1,0,0,0,1128,1129,1,0,0,0,1129,1152,1,0,
	0,0,1130,1128,1,0,0,0,1131,1132,10,1,0,0,1132,1133,5,46,0,0,1133,1134,5,
	45,0,0,1134,1151,3,168,84,2,1135,1137,10,2,0,0,1136,1138,5,54,0,0,1137,
	1136,1,0,0,0,1137,1138,1,0,0,0,1138,1140,1,0,0,0,1139,1141,7,20,0,0,1140,
	1139,1,0,0,0,1140,1141,1,0,0,0,1141,1143,1,0,0,0,1142,1144,5,47,0,0,1143,
	1142,1,0,0,0,1143,1144,1,0,0,0,1144,1145,1,0,0,0,1145,1146,5,45,0,0,1146,
	1148,3,168,84,0,1147,1149,3,180,90,0,1148,1147,1,0,0,0,1148,1149,1,0,0,
	0,1149,1151,1,0,0,0,1150,1131,1,0,0,0,1150,1135,1,0,0,0,1151,1154,1,0,0,
	0,1152,1150,1,0,0,0,1152,1153,1,0,0,0,1153,169,1,0,0,0,1154,1152,1,0,0,
	0,1155,1157,3,172,86,0,1156,1158,3,242,121,0,1157,1156,1,0,0,0,1157,1158,
	1,0,0,0,1158,171,1,0,0,0,1159,1161,5,73,0,0,1160,1159,1,0,0,0,1160,1161,
	1,0,0,0,1161,1162,1,0,0,0,1162,1164,3,174,87,0,1163,1165,3,176,88,0,1164,
	1163,1,0,0,0,1164,1165,1,0,0,0,1165,1170,1,0,0,0,1166,1168,5,7,0,0,1167,
	1166,1,0,0,0,1167,1168,1,0,0,0,1168,1169,1,0,0,0,1169,1171,3,224,112,0,
	1170,1167,1,0,0,0,1170,1171,1,0,0,0,1171,1201,1,0,0,0,1172,1173,5,57,0,
	0,1173,1174,5,73,0,0,1174,1175,5,301,0,0,1175,1176,3,220,110,0,1176,1177,
	5,301,0,0,1177,1182,3,208,104,0,1178,1179,5,303,0,0,1179,1181,3,208,104,
	0,1180,1178,1,0,0,0,1181,1184,1,0,0,0,1182,1180,1,0,0,0,1182,1183,1,0,0,
	0,1183,1185,1,0,0,0,1184,1182,1,0,0,0,1185,1186,5,302,0,0,1186,1187,5,302,
	0,0,1187,1201,1,0,0,0,1188,1190,5,57,0,0,1189,1188,1,0,0,0,1189,1190,1,
	0,0,0,1190,1191,1,0,0,0,1191,1192,5,301,0,0,1192,1193,3,152,76,0,1193,1194,
	5,302,0,0,1194,1201,1,0,0,0,1195,1196,5,226,0,0,1196,1197,5,301,0,0,1197,
	1198,3,208,104,0,1198,1199,5,302,0,0,1199,1201,1,0,0,0,1200,1160,1,0,0,
	0,1200,1172,1,0,0,0,1200,1189,1,0,0,0,1200,1195,1,0,0,0,1201,173,1,0,0,
	0,1202,1203,3,264,132,0,1203,175,1,0,0,0,1204,1205,5,37,0,0,1205,1206,5,
	258,0,0,1206,1207,5,7,0,0,1207,1208,5,135,0,0,1208,1209,3,178,89,0,1209,
	177,1,0,0,0,1210,1211,3,208,104,0,1211,179,1,0,0,0,1212,1213,5,55,0,0,1213,
	1227,3,210,105,0,1214,1215,5,142,0,0,1215,1216,5,301,0,0,1216,1221,3,264,
	132,0,1217,1218,5,303,0,0,1218,1220,3,264,132,0,1219,1217,1,0,0,0,1220,
	1223,1,0,0,0,1221,1219,1,0,0,0,1221,1222,1,0,0,0,1222,1224,1,0,0,0,1223,
	1221,1,0,0,0,1224,1225,5,302,0,0,1225,1227,1,0,0,0,1226,1212,1,0,0,0,1226,
	1214,1,0,0,0,1227,181,1,0,0,0,1228,1229,5,11,0,0,1229,1230,3,210,105,0,
	1230,183,1,0,0,0,1231,1232,5,12,0,0,1232,1233,5,13,0,0,1233,1238,3,186,
	93,0,1234,1235,5,303,0,0,1235,1237,3,186,93,0,1236,1234,1,0,0,0,1237,1240,
	1,0,0,0,1238,1236,1,0,0,0,1238,1239,1,0,0,0,1239,185,1,0,0,0,1240,1238,
	1,0,0,0,1241,1293,3,208,104,0,1242,1243,5,301,0,0,1243,1293,5,302,0,0,1244,
	1245,5,301,0,0,1245,1250,3,208,104,0,1246,1247,5,303,0,0,1247,1249,3,208,
	104,0,1248,1246,1,0,0,0,1249,1252,1,0,0,0,1250,1248,1,0,0,0,1250,1251,1,
	0,0,0,1251,1253,1,0,0,0,1252,1250,1,0,0,0,1253,1254,5,302,0,0,1254,1293,
	1,0,0,0,1255,1256,5,16,0,0,1256,1257,5,301,0,0,1257,1262,3,208,104,0,1258,
	1259,5,303,0,0,1259,1261,3,208,104,0,1260,1258,1,0,0,0,1261,1264,1,0,0,
	0,1262,1260,1,0,0,0,1262,1263,1,0,0,0,1263,1265,1,0,0,0,1264,1262,1,0,0,
	0,1265,1266,5,302,0,0,1266,1293,1,0,0,0,1267,1268,5,17,0,0,1268,1269,5,
	301,0,0,1269,1274,3,208,104,0,1270,1271,5,303,0,0,1271,1273,3,208,104,0,
	1272,1270,1,0,0,0,1273,1276,1,0,0,0,1274,1272,1,0,0,0,1274,1275,1,0,0,0,
	1275,1277,1,0,0,0,1276,1274,1,0,0,0,1277,1278,5,302,0,0,1278,1293,1,0,0,
	0,1279,1280,5,14,0,0,1280,1281,5,15,0,0,1281,1282,5,301,0,0,1282,1287,3,
	186,93,0,1283,1284,5,303,0,0,1284,1286,3,186,93,0,1285,1283,1,0,0,0,1286,
	1289,1,0,0,0,1287,1285,1,0,0,0,1287,1288,1,0,0,0,1288,1290,1,0,0,0,1289,
	1287,1,0,0,0,1290,1291,5,302,0,0,1291,1293,1,0,0,0,1292,1241,1,0,0,0,1292,
	1242,1,0,0,0,1292,1244,1,0,0,0,1292,1255,1,0,0,0,1292,1267,1,0,0,0,1292,
	1279,1,0,0,0,1293,187,1,0,0,0,1294,1295,5,19,0,0,1295,1296,3,210,105,0,
	1296,189,1,0,0,0,1297,1298,5,18,0,0,1298,1299,5,13,0,0,1299,1304,3,192,
	96,0,1300,1301,5,303,0,0,1301,1303,3,192,96,0,1302,1300,1,0,0,0,1303,1306,
	1,0,0,0,1304,1302,1,0,0,0,1304,1305,1,0,0,0,1305,191,1,0,0,0,1306,1304,
	1,0,0,0,1307,1309,3,208,104,0,1308,1310,7,21,0,0,1309,1308,1,0,0,0,1309,
	1310,1,0,0,0,1310,193,1,0,0,0,1311,1314,5,20,0,0,1312,1315,5,8,0,0,1313,
	1315,3,208,104,0,1314,1312,1,0,0,0,1314,1313,1,0,0,0,1315,195,1,0,0,0,1316,
	1317,5,58,0,0,1317,1322,3,198,99,0,1318,1319,5,303,0,0,1319,1321,3,198,
	99,0,1320,1318,1,0,0,0,1321,1324,1,0,0,0,1322,1320,1,0,0,0,1322,1323,1,
	0,0,0,1323,197,1,0,0,0,1324,1322,1,0,0,0,1325,1326,3,244,122,0,1326,1327,
	5,7,0,0,1327,1328,3,200,100,0,1328,199,1,0,0,0,1329,1331,3,244,122,0,1330,
	1329,1,0,0,0,1330,1331,1,0,0,0,1331,1332,1,0,0,0,1332,1343,5,301,0,0,1333,
	1334,5,18,0,0,1334,1335,5,13,0,0,1335,1340,3,202,101,0,1336,1337,5,303,
	0,0,1337,1339,3,202,101,0,1338,1336,1,0,0,0,1339,1342,1,0,0,0,1340,1338,
	1,0,0,0,1340,1341,1,0,0,0,1341,1344,1,0,0,0,1342,1340,1,0,0,0,1343,1333,
	1,0,0,0,1343,1344,1,0,0,0,1344,1355,1,0,0,0,1345,1346,5,60,0,0,1346,1347,
	5,13,0,0,1347,1352,3,208,104,0,1348,1349,5,303,0,0,1349,1351,3,208,104,
	0,1350,1348,1,0,0,0,1351,1354,1,0,0,0,1352,1350,1,0,0,0,1352,1353,1,0,0,
	0,1353,1356,1,0,0,0,1354,1352,1,0,0,0,1355,1345,1,0,0,0,1355,1356,1,0,0,
	0,1356,1358,1,0,0,0,1357,1359,3,204,102,0,1358,1357,1,0,0,0,1358,1359,1,
	0,0,0,1359,1360,1,0,0,0,1360,1361,5,302,0,0,1361,201,1,0,0,0,1362,1364,
	3,208,104,0,1363,1365,7,21,0,0,1364,1363,1,0,0,0,1364,1365,1,0,0,0,1365,
	1368,1,0,0,0,1366,1367,5,34,0,0,1367,1369,7,22,0,0,1368,1366,1,0,0,0,1368,
	1369,1,0,0,0,1369,203,1,0,0,0,1370,1371,5,61,0,0,1371,1375,3,206,103,0,
	1372,1373,5,62,0,0,1373,1375,3,206,103,0,1374,1370,1,0,0,0,1374,1372,1,
	0,0,0,1375,205,1,0,0,0,1376,1377,3,208,104,0,1377,1378,5,64,0,0,1378,207,
	1,0,0,0,1379,1380,3,210,105,0,1380,209,1,0,0,0,1381,1382,6,105,-1,0,1382,
	1383,5,25,0,0,1383,1394,3,210,105,5,1384,1385,5,27,0,0,1385,1386,5,301,
	0,0,1386,1387,3,152,76,0,1387,1388,5,302,0,0,1388,1394,1,0,0,0,1389,1391,
	3,216,108,0,1390,1392,3,212,106,0,1391,1390,1,0,0,0,1391,1392,1,0,0,0,1392,
	1394,1,0,0,0,1393,1381,1,0,0,0,1393,1384,1,0,0,0,1393,1389,1,0,0,0,1394,
	1403,1,0,0,0,1395,1396,10,2,0,0,1396,1397,5,23,0,0,1397,1402,3,210,105,
	3,1398,1399,10,1,0,0,1399,1400,5,22,0,0,1400,1402,3,210,105,2,1401,1395,
	1,0,0,0,1401,1398,1,0,0,0,1402,1405,1,0,0,0,1403,1401,1,0,0,0,1403,1404,
	1,0,0,0,1404,211,1,0,0,0,1405,1403,1,0,0,0,1406,1408,5,25,0,0,1407,1406,
	1,0,0,0,1407,1408,1,0,0,0,1408,1409,1,0,0,0,1409,1410,5,28,0,0,1410,1411,
	3,216,108,0,1411,1412,5,23,0,0,1412,1413,3,216,108,0,1413,1490,1,0,0,0,
	1414,1416,5,25,0,0,1415,1414,1,0,0,0,1415,1416,1,0,0,0,1416,1417,1,0,0,
	0,1417,1418,5,24,0,0,1418,1419,5,301,0,0,1419,1424,3,208,104,0,1420,1421,
	5,303,0,0,1421,1423,3,208,104,0,1422,1420,1,0,0,0,1423,1426,1,0,0,0,1424,
	1422,1,0,0,0,1424,1425,1,0,0,0,1425,1427,1,0,0,0,1426,1424,1,0,0,0,1427,
	1428,5,302,0,0,1428,1490,1,0,0,0,1429,1431,5,25,0,0,1430,1429,1,0,0,0,1430,
	1431,1,0,0,0,1431,1432,1,0,0,0,1432,1433,5,24,0,0,1433,1434,5,301,0,0,1434,
	1435,3,152,76,0,1435,1436,5,302,0,0,1436,1490,1,0,0,0,1437,1438,5,27,0,
	0,1438,1439,5,301,0,0,1439,1440,3,152,76,0,1440,1441,5,302,0,0,1441,1490,
	1,0,0,0,1442,1444,5,25,0,0,1443,1442,1,0,0,0,1443,1444,1,0,0,0,1444,1445,
	1,0,0,0,1445,1446,5,30,0,0,1446,1490,3,216,108,0,1447,1449,5,25,0,0,1448,
	1447,1,0,0,0,1448,1449,1,0,0,0,1449,1450,1,0,0,0,1450,1451,5,29,0,0,1451,
	1465,7,23,0,0,1452,1453,5,301,0,0,1453,1466,5,302,0,0,1454,1455,5,301,0,
	0,1455,1460,3,208,104,0,1456,1457,5,303,0,0,1457,1459,3,208,104,0,1458,
	1456,1,0,0,0,1459,1462,1,0,0,0,1460,1458,1,0,0,0,1460,1461,1,0,0,0,1461,
	1463,1,0,0,0,1462,1460,1,0,0,0,1463,1464,5,302,0,0,1464,1466,1,0,0,0,1465,
	1452,1,0,0,0,1465,1454,1,0,0,0,1466,1490,1,0,0,0,1467,1469,5,25,0,0,1468,
	1467,1,0,0,0,1468,1469,1,0,0,0,1469,1470,1,0,0,0,1470,1471,5,29,0,0,1471,
	1490,3,216,108,0,1472,1474,5,31,0,0,1473,1475,5,25,0,0,1474,1473,1,0,0,
	0,1474,1475,1,0,0,0,1475,1476,1,0,0,0,1476,1490,5,288,0,0,1477,1479,5,31,
	0,0,1478,1480,5,25,0,0,1479,1478,1,0,0,0,1479,1480,1,0,0,0,1480,1481,1,
	0,0,0,1481,1490,7,24,0,0,1482,1484,5,31,0,0,1483,1485,5,25,0,0,1484,1483,
	1,0,0,0,1484,1485,1,0,0,0,1485,1486,1,0,0,0,1486,1487,5,10,0,0,1487,1488,
	5,5,0,0,1488,1490,3,216,108,0,1489,1407,1,0,0,0,1489,1415,1,0,0,0,1489,
	1430,1,0,0,0,1489,1437,1,0,0,0,1489,1443,1,0,0,0,1489,1448,1,0,0,0,1489,
	1468,1,0,0,0,1489,1472,1,0,0,0,1489,1477,1,0,0,0,1489,1482,1,0,0,0,1490,
	213,1,0,0,0,1491,1493,5,25,0,0,1492,1491,1,0,0,0,1492,1493,1,0,0,0,1493,
	1494,1,0,0,0,1494,1495,5,29,0,0,1495,1509,7,23,0,0,1496,1497,5,301,0,0,
	1497,1510,5,302,0,0,1498,1499,5,301,0,0,1499,1504,3,208,104,0,1500,1501,
	5,303,0,0,1501,1503,3,208,104,0,1502,1500,1,0,0,0,1503,1506,1,0,0,0,1504,
	1502,1,0,0,0,1504,1505,1,0,0,0,1505,1507,1,0,0,0,1506,1504,1,0,0,0,1507,
	1508,5,302,0,0,1508,1510,1,0,0,0,1509,1496,1,0,0,0,1509,1498,1,0,0,0,1510,
	1517,1,0,0,0,1511,1513,5,25,0,0,1512,1511,1,0,0,0,1512,1513,1,0,0,0,1513,
	1514,1,0,0,0,1514,1515,5,29,0,0,1515,1517,3,216,108,0,1516,1492,1,0,0,0,
	1516,1512,1,0,0,0,1517,215,1,0,0,0,1518,1519,6,108,-1,0,1519,1523,3,218,
	109,0,1520,1521,7,25,0,0,1521,1523,3,216,108,7,1522,1518,1,0,0,0,1522,1520,
	1,0,0,0,1523,1545,1,0,0,0,1524,1525,10,6,0,0,1525,1526,7,26,0,0,1526,1544,
	3,216,108,7,1527,1528,10,5,0,0,1528,1529,7,27,0,0,1529,1544,3,216,108,6,
	1530,1531,10,4,0,0,1531,1532,5,296,0,0,1532,1544,3,216,108,5,1533,1534,
	10,3,0,0,1534,1535,5,297,0,0,1535,1544,3,216,108,4,1536,1537,10,2,0,0,1537,
	1538,5,295,0,0,1538,1544,3,216,108,3,1539,1540,10,1,0,0,1540,1541,3,284,
	142,0,1541,1542,3,216,108,2,1542,1544,1,0,0,0,1543,1524,1,0,0,0,1543,1527,
	1,0,0,0,1543,1530,1,0,0,0,1543,1533,1,0,0,0,1543,1536,1,0,0,0,1543,1539,
	1,0,0,0,1544,1547,1,0,0,0,1545,1543,1,0,0,0,1545,1546,1,0,0,0,1546,217,
	1,0,0,0,1547,1545,1,0,0,0,1548,1549,6,109,-1,0,1549,1551,5,39,0,0,1550,
	1552,3,260,130,0,1551,1550,1,0,0,0,1552,1553,1,0,0,0,1553,1551,1,0,0,0,
	1553,1554,1,0,0,0,1554,1557,1,0,0,0,1555,1556,5,42,0,0,1556,1558,3,208,
	104,0,1557,1555,1,0,0,0,1557,1558,1,0,0,0,1558,1559,1,0,0,0,1559,1560,5,
	44,0,0,1560,1640,1,0,0,0,1561,1562,5,39,0,0,1562,1564,3,208,104,0,1563,
	1565,3,260,130,0,1564,1563,1,0,0,0,1565,1566,1,0,0,0,1566,1564,1,0,0,0,
	1566,1567,1,0,0,0,1567,1570,1,0,0,0,1568,1569,5,42,0,0,1569,1571,3,208,
	104,0,1570,1568,1,0,0,0,1570,1571,1,0,0,0,1571,1572,1,0,0,0,1572,1573,5,
	44,0,0,1573,1640,1,0,0,0,1574,1575,5,93,0,0,1575,1576,5,301,0,0,1576,1577,
	3,208,104,0,1577,1578,5,7,0,0,1578,1579,3,54,27,0,1579,1580,5,302,0,0,1580,
	1640,1,0,0,0,1581,1582,5,67,0,0,1582,1583,5,301,0,0,1583,1586,3,208,104,
	0,1584,1585,5,123,0,0,1585,1587,5,34,0,0,1586,1584,1,0,0,0,1586,1587,1,
	0,0,0,1587,1588,1,0,0,0,1588,1589,5,302,0,0,1589,1640,1,0,0,0,1590,1591,
	5,69,0,0,1591,1592,5,301,0,0,1592,1595,3,208,104,0,1593,1594,5,123,0,0,
	1594,1596,5,34,0,0,1595,1593,1,0,0,0,1595,1596,1,0,0,0,1596,1597,1,0,0,
	0,1597,1598,5,302,0,0,1598,1640,1,0,0,0,1599,1600,5,128,0,0,1600,1601,5,
	301,0,0,1601,1602,3,216,108,0,1602,1603,5,24,0,0,1603,1604,3,216,108,0,
	1604,1605,5,302,0,0,1605,1640,1,0,0,0,1606,1640,3,294,147,0,1607,1640,5,
	310,0,0,1608,1609,3,264,132,0,1609,1610,5,298,0,0,1610,1611,5,310,0,0,1611,
	1640,1,0,0,0,1612,1613,5,301,0,0,1613,1614,3,152,76,0,1614,1615,5,302,0,
	0,1615,1640,1,0,0,0,1616,1617,3,220,110,0,1617,1629,5,301,0,0,1618,1620,
	3,302,151,0,1619,1618,1,0,0,0,1619,1620,1,0,0,0,1620,1621,1,0,0,0,1621,
	1626,3,208,104,0,1622,1623,5,303,0,0,1623,1625,3,208,104,0,1624,1622,1,
	0,0,0,1625,1628,1,0,0,0,1626,1624,1,0,0,0,1626,1627,1,0,0,0,1627,1630,1,
	0,0,0,1628,1626,1,0,0,0,1629,1619,1,0,0,0,1629,1630,1,0,0,0,1630,1631,1,
	0,0,0,1631,1632,5,302,0,0,1632,1640,1,0,0,0,1633,1640,3,252,126,0,1634,
	1640,3,222,111,0,1635,1636,5,301,0,0,1636,1637,3,208,104,0,1637,1638,5,
	302,0,0,1638,1640,1,0,0,0,1639,1548,1,0,0,0,1639,1561,1,0,0,0,1639,1574,
	1,0,0,0,1639,1581,1,0,0,0,1639,1590,1,0,0,0,1639,1599,1,0,0,0,1639,1606,
	1,0,0,0,1639,1607,1,0,0,0,1639,1608,1,0,0,0,1639,1612,1,0,0,0,1639,1616,
	1,0,0,0,1639,1633,1,0,0,0,1639,1634,1,0,0,0,1639,1635,1,0,0,0,1640,1648,
	1,0,0,0,1641,1642,10,4,0,0,1642,1643,5,299,0,0,1643,1644,3,216,108,0,1644,
	1645,5,300,0,0,1645,1647,1,0,0,0,1646,1641,1,0,0,0,1647,1650,1,0,0,0,1648,
	1646,1,0,0,0,1648,1649,1,0,0,0,1649,219,1,0,0,0,1650,1648,1,0,0,0,1651,
	1652,3,264,132,0,1652,221,1,0,0,0,1653,1654,3,264,132,0,1654,223,1,0,0,
	0,1655,1656,3,252,126,0,1656,225,1,0,0,0,1657,1660,3,252,126,0,1658,1660,
	3,222,111,0,1659,1657,1,0,0,0,1659,1658,1,0,0,0,1660,227,1,0,0,0,1661,1664,
	5,38,0,0,1662,1665,3,230,115,0,1663,1665,3,234,117,0,1664,1662,1,0,0,0,
	1664,1663,1,0,0,0,1664,1665,1,0,0,0,1665,229,1,0,0,0,1666,1668,3,232,116,
	0,1667,1669,3,236,118,0,1668,1667,1,0,0,0,1668,1669,1,0,0,0,1669,231,1,
	0,0,0,1670,1671,3,238,119,0,1671,1672,3,252,126,0,1672,1674,1,0,0,0,1673,
	1670,1,0,0,0,1674,1675,1,0,0,0,1675,1673,1,0,0,0,1675,1676,1,0,0,0,1676,
	233,1,0,0,0,1677,1680,3,236,118,0,1678,1681,3,232,116,0,1679,1681,3,236,
	118,0,1680,1678,1,0,0,0,1680,1679,1,0,0,0,1680,1681,1,0,0,0,1681,235,1,
	0,0,0,1682,1683,3,238,119,0,1683,1684,3,252,126,0,1684,1685,5,108,0,0,1685,
	1686,3,252,126,0,1686,237,1,0,0,0,1687,1689,7,28,0,0,1688,1687,1,0,0,0,
	1688,1689,1,0,0,0,1689,1690,1,0,0,0,1690,1693,7,29,0,0,1691,1693,5,320,
	0,0,1692,1688,1,0,0,0,1692,1691,1,0,0,0,1693,239,1,0,0,0,1694,1696,5,7,
	0,0,1695,1694,1,0,0,0,1695,1696,1,0,0,0,1696,1697,1,0,0,0,1697,1699,3,254,
	127,0,1698,1700,3,248,124,0,1699,1698,1,0,0,0,1699,1700,1,0,0,0,1700,241,
	1,0,0,0,1701,1703,5,7,0,0,1702,1701,1,0,0,0,1702,1703,1,0,0,0,1703,1704,
	1,0,0,0,1704,1706,3,254,127,0,1705,1707,3,248,124,0,1706,1705,1,0,0,0,1706,
	1707,1,0,0,0,1707,243,1,0,0,0,1708,1709,3,252,126,0,1709,1710,3,246,123,
	0,1710,245,1,0,0,0,1711,1712,5,130,0,0,1712,1714,3,252,126,0,1713,1711,
	1,0,0,0,1714,1715,1,0,0,0,1715,1713,1,0,0,0,1715,1716,1,0,0,0,1716,1719,
	1,0,0,0,1717,1719,1,0,0,0,1718,1713,1,0,0,0,1718,1717,1,0,0,0,1719,247,
	1,0,0,0,1720,1721,5,301,0,0,1721,1722,3,250,125,0,1722,1723,5,302,0,0,1723,
	249,1,0,0,0,1724,1729,3,252,126,0,1725,1726,5,303,0,0,1726,1728,3,252,126,
	0,1727,1725,1,0,0,0,1728,1731,1,0,0,0,1729,1727,1,0,0,0,1729,1730,1,0,0,
	0,1730,251,1,0,0,0,1731,1729,1,0,0,0,1732,1735,3,254,127,0,1733,1735,3,
	306,153,0,1734,1732,1,0,0,0,1734,1733,1,0,0,0,1735,253,1,0,0,0,1736,1741,
	3,256,128,0,1737,1741,3,258,129,0,1738,1741,3,304,152,0,1739,1741,3,308,
	154,0,1740,1736,1,0,0,0,1740,1737,1,0,0,0,1740,1738,1,0,0,0,1740,1739,1,
	0,0,0,1741,255,1,0,0,0,1742,1743,7,30,0,0,1743,257,1,0,0,0,1744,1745,5,
	320,0,0,1745,259,1,0,0,0,1746,1747,5,40,0,0,1747,1748,3,208,104,0,1748,
	1749,5,41,0,0,1749,1750,3,208,104,0,1750,261,1,0,0,0,1751,1756,3,264,132,
	0,1752,1753,5,303,0,0,1753,1755,3,264,132,0,1754,1752,1,0,0,0,1755,1758,
	1,0,0,0,1756,1754,1,0,0,0,1756,1757,1,0,0,0,1757,263,1,0,0,0,1758,1756,
	1,0,0,0,1759,1763,5,324,0,0,1760,1762,5,318,0,0,1761,1760,1,0,0,0,1762,
	1765,1,0,0,0,1763,1764,1,0,0,0,1763,1761,1,0,0,0,1764,265,1,0,0,0,1765,
	1763,1,0,0,0,1766,1770,7,31,0,0,1767,1769,7,32,0,0,1768,1767,1,0,0,0,1769,
	1772,1,0,0,0,1770,1771,1,0,0,0,1770,1768,1,0,0,0,1771,267,1,0,0,0,1772,
	1770,1,0,0,0,1773,1774,5,70,0,0,1774,1775,3,274,137,0,1775,269,1,0,0,0,
	1776,1777,5,127,0,0,1777,1778,5,25,0,0,1778,1779,5,27,0,0,1779,271,1,0,
	0,0,1780,1781,5,127,0,0,1781,1782,5,27,0,0,1782,273,1,0,0,0,1783,1784,5,
	301,0,0,1784,1789,3,276,138,0,1785,1786,5,303,0,0,1786,1788,3,276,138,0,
	1787,1785,1,0,0,0,1788,1791,1,0,0,0,1789,1787,1,0,0,0,1789,1790,1,0,0,0,
	1790,1792,1,0,0,0,1791,1789,1,0,0,0,1792,1793,5,302,0,0,1793,275,1,0,0,
	0,1794,1799,3,278,139,0,1795,1797,5,290,0,0,1796,1795,1,0,0,0,1796,1797,
	1,0,0,0,1797,1798,1,0,0,0,1798,1800,3,280,140,0,1799,1796,1,0,0,0,1799,
	1800,1,0,0,0,1800,277,1,0,0,0,1801,1805,3,252,126,0,1802,1805,3,222,111,
	0,1803,1805,5,320,0,0,1804,1801,1,0,0,0,1804,1802,1,0,0,0,1804,1803,1,0,
	0,0,1805,279,1,0,0,0,1806,1811,5,321,0,0,1807,1811,5,322,0,0,1808,1811,
	3,300,150,0,1809,1811,5,320,0,0,1810,1806,1,0,0,0,1810,1807,1,0,0,0,1810,
	1808,1,0,0,0,1810,1809,1,0,0,0,1811,281,1,0,0,0,1812,1819,5,23,0,0,1813,
	1814,5,296,0,0,1814,1819,5,296,0,0,1815,1819,5,22,0,0,1816,1817,5,295,0,
	0,1817,1819,5,295,0,0,1818,1812,1,0,0,0,1818,1813,1,0,0,0,1818,1815,1,0,
	0,0,1818,1816,1,0,0,0,1819,283,1,0,0,0,1820,1835,5,290,0,0,1821,1835,5,
	291,0,0,1822,1835,5,292,0,0,1823,1824,5,292,0,0,1824,1835,5,290,0,0,1825,
	1826,5,291,0,0,1826,1835,5,290,0,0,1827,1828,5,292,0,0,1828,1835,5,291,
	0,0,1829,1830,5,293,0,0,1830,1835,5,290,0,0,1831,1832,5,292,0,0,1832,1833,
	5,290,0,0,1833,1835,5,291,0,0,1834,1820,1,0,0,0,1834,1821,1,0,0,0,1834,
	1822,1,0,0,0,1834,1823,1,0,0,0,1834,1825,1,0,0,0,1834,1827,1,0,0,0,1834,
	1829,1,0,0,0,1834,1831,1,0,0,0,1835,285,1,0,0,0,1836,1837,5,292,0,0,1837,
	1844,5,292,0,0,1838,1839,5,291,0,0,1839,1844,5,291,0,0,1840,1844,5,296,
	0,0,1841,1844,5,297,0,0,1842,1844,5,295,0,0,1843,1836,1,0,0,0,1843,1838,
	1,0,0,0,1843,1840,1,0,0,0,1843,1841,1,0,0,0,1843,1842,1,0,0,0,1844,287,
	1,0,0,0,1845,1846,7,33,0,0,1846,289,1,0,0,0,1847,1848,7,34,0,0,1848,291,
	1,0,0,0,1849,1850,3,264,132,0,1850,293,1,0,0,0,1851,1864,3,296,148,0,1852,
	1864,3,298,149,0,1853,1864,3,228,114,0,1854,1855,5,312,0,0,1855,1864,3,
	298,149,0,1856,1864,3,300,150,0,1857,1864,5,322,0,0,1858,1864,5,323,0,0,
	1859,1861,5,25,0,0,1860,1859,1,0,0,0,1860,1861,1,0,0,0,1861,1862,1,0,0,
	0,1862,1864,5,288,0,0,1863,1851,1,0,0,0,1863,1852,1,0,0,0,1863,1853,1,0,
	0,0,1863,1854,1,0,0,0,1863,1856,1,0,0,0,1863,1857,1,0,0,0,1863,1858,1,0,
	0,0,1863,1860,1,0,0,0,1864,295,1,0,0,0,1865,1866,5,320,0,0,1866,297,1,0,
	0,0,1867,1868,5,321,0,0,1868,299,1,0,0,0,1869,1870,7,24,0,0,1870,301,1,
	0,0,0,1871,1872,7,35,0,0,1872,303,1,0,0,0,1873,1874,7,36,0,0,1874,305,1,
	0,0,0,1875,1876,7,37,0,0,1876,307,1,0,0,0,1877,1878,7,38,0,0,1878,309,1,
	0,0,0,223,318,321,323,338,356,360,369,374,381,388,392,401,413,416,423,431,
	436,439,446,454,458,470,478,482,503,507,511,515,524,529,533,537,541,544,
	548,553,559,564,569,572,576,583,589,593,597,601,605,609,611,621,629,653,
	660,666,676,679,687,699,708,726,739,744,748,756,760,768,778,782,788,792,
	796,799,808,812,819,822,832,842,857,868,872,879,884,890,894,901,905,909,
	913,921,925,930,936,942,945,949,964,973,987,999,1011,1022,1025,1029,1032,
	1034,1039,1043,1046,1050,1059,1069,1074,1086,1089,1092,1095,1099,1107,1110,
	1114,1117,1128,1137,1140,1143,1148,1150,1152,1157,1160,1164,1167,1170,1182,
	1189,1200,1221,1226,1238,1250,1262,1274,1287,1292,1304,1309,1314,1322,1330,
	1340,1343,1352,1355,1358,1364,1368,1374,1391,1393,1401,1403,1407,1415,1424,
	1430,1443,1448,1460,1465,1468,1474,1479,1484,1489,1492,1504,1509,1512,1516,
	1522,1543,1545,1553,1557,1566,1570,1586,1595,1619,1626,1629,1639,1648,1659,
	1664,1668,1675,1680,1688,1692,1695,1699,1702,1706,1715,1718,1729,1734,1740,
	1756,1763,1770,1789,1796,1799,1804,1810,1818,1834,1843,1860,1863];

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
	public TIMESTAMP(): TerminalNode {
		return this.getToken(FlinkSqlParser.TIMESTAMP, 0);
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
	public CONSTRAINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.CONSTRAINT, 0);
	}
	public constraintName(): ConstraintNameContext {
		return this.getTypedRuleContext(ConstraintNameContext, 0) as ConstraintNameContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.NOT, 0);
	}
	public ENFORCED(): TerminalNode {
		return this.getToken(FlinkSqlParser.ENFORCED, 0);
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
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public columnNameList(): ColumnNameListContext {
		return this.getTypedRuleContext(ColumnNameListContext, 0) as ColumnNameListContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.CONSTRAINT, 0);
	}
	public constraintName(): ConstraintNameContext {
		return this.getTypedRuleContext(ConstraintNameContext, 0) as ConstraintNameContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.NOT, 0);
	}
	public ENFORCED(): TerminalNode {
		return this.getToken(FlinkSqlParser.ENFORCED, 0);
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
	public insertColumnListDefinition(): InsertColumnListDefinitionContext {
		return this.getTypedRuleContext(InsertColumnListDefinitionContext, 0) as InsertColumnListDefinitionContext;
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


export class InsertColumnListDefinitionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public columnNameList(): ColumnNameListContext {
		return this.getTypedRuleContext(ColumnNameListContext, 0) as ColumnNameListContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_insertColumnListDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterInsertColumnListDefinition) {
	 		listener.enterInsertColumnListDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitInsertColumnListDefinition) {
	 		listener.exitInsertColumnListDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitInsertColumnListDefinition) {
			return visitor.visitInsertColumnListDefinition(this);
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
