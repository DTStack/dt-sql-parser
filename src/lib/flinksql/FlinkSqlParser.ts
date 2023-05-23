// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { FlinkSqlParserListener } from "./FlinkSqlParserListener";
import { FlinkSqlParserVisitor } from "./FlinkSqlParserVisitor";


export class FlinkSqlParser extends Parser {
	public static readonly SPACE = 1;
	public static readonly COMMENT_INPUT = 2;
	public static readonly LINE_COMMENT = 3;
	public static readonly KW_ADD = 4;
	public static readonly KW_ADMIN = 5;
	public static readonly KW_AFTER = 6;
	public static readonly KW_ANALYZE = 7;
	public static readonly KW_ASC = 8;
	public static readonly KW_BEFORE = 9;
	public static readonly KW_BYTES = 10;
	public static readonly KW_CASCADE = 11;
	public static readonly KW_CATALOG = 12;
	public static readonly KW_CATALOGS = 13;
	public static readonly KW_CENTURY = 14;
	public static readonly KW_CHAIN = 15;
	public static readonly KW_CHANGELOG_MODE = 16;
	public static readonly KW_CHARACTERS = 17;
	public static readonly KW_COMMENT = 18;
	public static readonly KW_COMPACT = 19;
	public static readonly KW_COLUMNS = 20;
	public static readonly KW_CONSTRAINTS = 21;
	public static readonly KW_CONSTRUCTOR = 22;
	public static readonly KW_CUMULATE = 23;
	public static readonly KW_DATA = 24;
	public static readonly KW_DATABASE = 25;
	public static readonly KW_DATABASES = 26;
	public static readonly KW_DAYS = 27;
	public static readonly KW_DECADE = 28;
	public static readonly KW_DEFINED = 29;
	public static readonly KW_DESC = 30;
	public static readonly KW_DESCRIPTOR = 31;
	public static readonly KW_DIV = 32;
	public static readonly KW_ENCODING = 33;
	public static readonly KW_ENFORCED = 34;
	public static readonly KW_ENGINE = 35;
	public static readonly KW_ERROR = 36;
	public static readonly KW_ESTIMATED_COST = 37;
	public static readonly KW_EXCEPTION = 38;
	public static readonly KW_EXCLUDE = 39;
	public static readonly KW_EXCLUDING = 40;
	public static readonly KW_EXTENDED = 41;
	public static readonly KW_FILE = 42;
	public static readonly KW_FINAL = 43;
	public static readonly KW_FIRST = 44;
	public static readonly KW_FOLLOWING = 45;
	public static readonly KW_FORMAT = 46;
	public static readonly KW_FORTRAN = 47;
	public static readonly KW_FOUND = 48;
	public static readonly KW_FRAC_SECOND = 49;
	public static readonly KW_FUNCTIONS = 50;
	public static readonly KW_GENERAL = 51;
	public static readonly KW_GENERATED = 52;
	public static readonly KW_GO = 53;
	public static readonly KW_GOTO = 54;
	public static readonly KW_GRANTED = 55;
	public static readonly KW_HOP = 56;
	public static readonly KW_HOURS = 57;
	public static readonly KW_IF = 58;
	public static readonly KW_IGNORE = 59;
	public static readonly KW_INCREMENT = 60;
	public static readonly KW_INPUT = 61;
	public static readonly KW_INVOKER = 62;
	public static readonly KW_JAR = 63;
	public static readonly KW_JARS = 64;
	public static readonly KW_JAVA = 65;
	public static readonly KW_JSON = 66;
	public static readonly KW_JSON_EXECUTION_PLAN = 67;
	public static readonly KW_KEY = 68;
	public static readonly KW_KEY_MEMBER = 69;
	public static readonly KW_KEY_TYPE = 70;
	public static readonly KW_LABEL = 71;
	public static readonly KW_LAST = 72;
	public static readonly KW_LENGTH = 73;
	public static readonly KW_LEVEL = 74;
	public static readonly KW_LOAD = 75;
	public static readonly KW_MAP = 76;
	public static readonly KW_MICROSECOND = 77;
	public static readonly KW_MILLENNIUM = 78;
	public static readonly KW_MILLISECOND = 79;
	public static readonly KW_MINUTES = 80;
	public static readonly KW_MINVALUE = 81;
	public static readonly KW_MODIFY = 82;
	public static readonly KW_MODULES = 83;
	public static readonly KW_MONTHS = 84;
	public static readonly KW_NANOSECOND = 85;
	public static readonly KW_NULLS = 86;
	public static readonly KW_NUMBER = 87;
	public static readonly KW_OPTION = 88;
	public static readonly KW_OPTIONS = 89;
	public static readonly KW_ORDERING = 90;
	public static readonly KW_OUTPUT = 91;
	public static readonly KW_OVERWRITE = 92;
	public static readonly KW_OVERWRITING = 93;
	public static readonly KW_PARTITIONED = 94;
	public static readonly KW_PARTITIONS = 95;
	public static readonly KW_PASSING = 96;
	public static readonly KW_PAST = 97;
	public static readonly KW_PATH = 98;
	public static readonly KW_PLACING = 99;
	public static readonly KW_PLAN = 100;
	public static readonly KW_PRECEDING = 101;
	public static readonly KW_PRESERVE = 102;
	public static readonly KW_PRIOR = 103;
	public static readonly KW_PRIVILEGES = 104;
	public static readonly KW_PUBLIC = 105;
	public static readonly KW_PYTHON = 106;
	public static readonly KW_PYTHON_FILES = 107;
	public static readonly KW_PYTHON_REQUIREMENTS = 108;
	public static readonly KW_PYTHON_DEPENDENCIES = 109;
	public static readonly KW_PYTHON_JAR = 110;
	public static readonly KW_PYTHON_ARCHIVES = 111;
	public static readonly KW_PYTHON_PARAMETER = 112;
	public static readonly KW_QUARTER = 113;
	public static readonly KW_RAW = 114;
	public static readonly KW_READ = 115;
	public static readonly KW_RELATIVE = 116;
	public static readonly KW_REMOVE = 117;
	public static readonly KW_RENAME = 118;
	public static readonly KW_REPLACE = 119;
	public static readonly KW_RESPECT = 120;
	public static readonly KW_RESTART = 121;
	public static readonly KW_RESTRICT = 122;
	public static readonly KW_ROLE = 123;
	public static readonly KW_ROW_COUNT = 124;
	public static readonly KW_SCALA = 125;
	public static readonly KW_SCALAR = 126;
	public static readonly KW_SCALE = 127;
	public static readonly KW_SCHEMA = 128;
	public static readonly KW_SECONDS = 129;
	public static readonly KW_SECTION = 130;
	public static readonly KW_SECURITY = 131;
	public static readonly KW_SELF = 132;
	public static readonly KW_SERVER = 133;
	public static readonly KW_SERVER_NAME = 134;
	public static readonly KW_SESSION = 135;
	public static readonly KW_SETS = 136;
	public static readonly KW_SIMPLE = 137;
	public static readonly KW_SIZE = 138;
	public static readonly KW_SLIDE = 139;
	public static readonly KW_SOURCE = 140;
	public static readonly KW_SPACE = 141;
	public static readonly KW_STATE = 142;
	public static readonly KW_STATEMENT = 143;
	public static readonly KW_STEP = 144;
	public static readonly KW_STRING = 145;
	public static readonly KW_STRUCTURE = 146;
	public static readonly KW_STYLE = 147;
	public static readonly KW_TABLES = 148;
	public static readonly KW_TEMPORARY = 149;
	public static readonly KW_TIMECOL = 150;
	public static readonly KW_TIMESTAMP_LTZ = 151;
	public static readonly KW_TIMESTAMPADD = 152;
	public static readonly KW_TIMESTAMPDIFF = 153;
	public static readonly KW_TRANSFORM = 154;
	public static readonly KW_TUMBLE = 155;
	public static readonly KW_TYPE = 156;
	public static readonly KW_UNDER = 157;
	public static readonly KW_UNLOAD = 158;
	public static readonly KW_USAGE = 159;
	public static readonly KW_USE = 160;
	public static readonly KW_UTF16 = 161;
	public static readonly KW_UTF32 = 162;
	public static readonly KW_UTF8 = 163;
	public static readonly KW_VERSION = 164;
	public static readonly KW_VIEW = 165;
	public static readonly KW_VIEWS = 166;
	public static readonly KW_VIRTUAL = 167;
	public static readonly KW_WATERMARK = 168;
	public static readonly KW_WATERMARKS = 169;
	public static readonly KW_WEEK = 170;
	public static readonly KW_WORK = 171;
	public static readonly KW_WRAPPER = 172;
	public static readonly KW_YEARS = 173;
	public static readonly KW_ZONE = 174;
	public static readonly KW_ABS = 175;
	public static readonly KW_ALL = 176;
	public static readonly ALLOW = 177;
	public static readonly KW_ALTER = 178;
	public static readonly KW_AND = 179;
	public static readonly KW_ANY = 180;
	public static readonly KW_ARE = 181;
	public static readonly KW_ARRAY = 182;
	public static readonly KW_AS = 183;
	public static readonly KW_AT = 184;
	public static readonly KW_AVG = 185;
	public static readonly KW_BEGIN = 186;
	public static readonly KW_BETWEEN = 187;
	public static readonly KW_BIGINT = 188;
	public static readonly KW_BINARY = 189;
	public static readonly KW_BIT = 190;
	public static readonly KW_BLOB = 191;
	public static readonly KW_BOOLEAN = 192;
	public static readonly KW_BOTH = 193;
	public static readonly KW_BY = 194;
	public static readonly KW_CALL = 195;
	public static readonly KW_CALLED = 196;
	public static readonly KW_CASCADED = 197;
	public static readonly KW_CASE = 198;
	public static readonly KW_CAST = 199;
	public static readonly KW_CEIL = 200;
	public static readonly KW_CHAR = 201;
	public static readonly KW_CHARACTER = 202;
	public static readonly KW_CHECK = 203;
	public static readonly KW_CLOB = 204;
	public static readonly KW_CLOSE = 205;
	public static readonly KW_COALESCE = 206;
	public static readonly KW_COLLATE = 207;
	public static readonly KW_COLLECT = 208;
	public static readonly KW_COLUMN = 209;
	public static readonly KW_COMMIT = 210;
	public static readonly KW_CONNECT = 211;
	public static readonly KW_CONSTRAINT = 212;
	public static readonly KW_CONTAINS = 213;
	public static readonly KW_CONVERT = 214;
	public static readonly KW_COUNT = 215;
	public static readonly KW_CREATE = 216;
	public static readonly KW_CROSS = 217;
	public static readonly KW_CUBE = 218;
	public static readonly KW_CURRENT = 219;
	public static readonly KW_CURSOR = 220;
	public static readonly KW_CYCLE = 221;
	public static readonly KW_DATE = 222;
	public static readonly KW_DATETIME = 223;
	public static readonly KW_DAY = 224;
	public static readonly KW_DEC = 225;
	public static readonly KW_DECIMAL = 226;
	public static readonly KW_DECLARE = 227;
	public static readonly KW_DEFAULT = 228;
	public static readonly KW_DEFINE = 229;
	public static readonly KW_DELETE = 230;
	public static readonly KW_DESCRIBE = 231;
	public static readonly KW_DISTINCT = 232;
	public static readonly KW_DOUBLE = 233;
	public static readonly KW_DROP = 234;
	public static readonly KW_EACH = 235;
	public static readonly KW_ELSE = 236;
	public static readonly KW_END = 237;
	public static readonly KW_EQUALS = 238;
	public static readonly KW_EXCEPT = 239;
	public static readonly KW_EXECUTE = 240;
	public static readonly KW_EXISTS = 241;
	public static readonly KW_EXPLAIN = 242;
	public static readonly KW_EXTERNAL = 243;
	public static readonly KW_EXTRACT = 244;
	public static readonly KW_FALSE = 245;
	public static readonly KW_FLOAT = 246;
	public static readonly KW_FOR = 247;
	public static readonly KW_FROM = 248;
	public static readonly KW_FULL = 249;
	public static readonly KW_FUNCTION = 250;
	public static readonly KW_GLOBAL = 251;
	public static readonly KW_GRANT = 252;
	public static readonly KW_GROUP = 253;
	public static readonly KW_GROUPING = 254;
	public static readonly KW_GROUPS = 255;
	public static readonly KW_HAVING = 256;
	public static readonly KW_HOUR = 257;
	public static readonly KW_IMPORT = 258;
	public static readonly KW_IN = 259;
	public static readonly KW_INCLUDING = 260;
	public static readonly KW_INNER = 261;
	public static readonly KW_INOUT = 262;
	public static readonly KW_INSERT = 263;
	public static readonly KW_INT = 264;
	public static readonly KW_INTEGER = 265;
	public static readonly KW_INTERSECT = 266;
	public static readonly KW_INTERVAL = 267;
	public static readonly KW_INTO = 268;
	public static readonly KW_IS = 269;
	public static readonly KW_JOIN = 270;
	public static readonly KW_LAG = 271;
	public static readonly KW_LANGUAGE = 272;
	public static readonly KW_LATERAL = 273;
	public static readonly KW_LEADING = 274;
	public static readonly KW_LEFT = 275;
	public static readonly KW_LIKE = 276;
	public static readonly KW_LIMIT = 277;
	public static readonly KW_LOCAL = 278;
	public static readonly KW_MATCH = 279;
	public static readonly KW_MATCH_RECOGNIZE = 280;
	public static readonly KW_MEASURES = 281;
	public static readonly KW_MERGE = 282;
	public static readonly KW_METADATA = 283;
	public static readonly KW_MINUS = 284;
	public static readonly KW_MINUTE = 285;
	public static readonly KW_MODIFIES = 286;
	public static readonly KW_MODULE = 287;
	public static readonly KW_MONTH = 288;
	public static readonly KW_MULTISET = 289;
	public static readonly KW_NATURAL = 290;
	public static readonly KW_NEXT = 291;
	public static readonly KW_NO = 292;
	public static readonly KW_NONE = 293;
	public static readonly KW_NOT = 294;
	public static readonly KW_NULL = 295;
	public static readonly KW_NUMERIC = 296;
	public static readonly KW_OF = 297;
	public static readonly KW_OFFSET = 298;
	public static readonly KW_ON = 299;
	public static readonly KW_ONE = 300;
	public static readonly KW_OR = 301;
	public static readonly KW_ORDER = 302;
	public static readonly KW_OUT = 303;
	public static readonly KW_OUTER = 304;
	public static readonly KW_OVER = 305;
	public static readonly KW_OVERLAY = 306;
	public static readonly KW_PARTITION = 307;
	public static readonly KW_PATTERN = 308;
	public static readonly KW_PER = 309;
	public static readonly KW_PERCENT = 310;
	public static readonly KW_PERIOD = 311;
	public static readonly KW_POSITION = 312;
	public static readonly KW_PRIMARY = 313;
	public static readonly KW_RANGE = 314;
	public static readonly KW_RANK = 315;
	public static readonly KW_RESET = 316;
	public static readonly KW_REVOKE = 317;
	public static readonly KW_RIGHT = 318;
	public static readonly KW_RLIKE = 319;
	public static readonly KW_ROLLBACK = 320;
	public static readonly KW_ROLLUP = 321;
	public static readonly KW_ROW = 322;
	public static readonly KW_ROWS = 323;
	public static readonly KW_SECOND = 324;
	public static readonly KW_SELECT = 325;
	public static readonly KW_SET = 326;
	public static readonly KW_SHOW = 327;
	public static readonly KW_SKIP = 328;
	public static readonly KW_SMALLINT = 329;
	public static readonly KW_START = 330;
	public static readonly KW_STATIC = 331;
	public static readonly KW_SUBSTRING = 332;
	public static readonly KW_SUM = 333;
	public static readonly KW_SYSTEM = 334;
	public static readonly KW_SYSTEM_TIME = 335;
	public static readonly KW_SYSTEM_USER = 336;
	public static readonly KW_TABLE = 337;
	public static readonly KW_TABLESAMPLE = 338;
	public static readonly KW_THEN = 339;
	public static readonly KW_TIME = 340;
	public static readonly KW_TIMESTAMP = 341;
	public static readonly KW_TINYINT = 342;
	public static readonly KW_TO = 343;
	public static readonly KW_TRUE = 344;
	public static readonly KW_TRUNCATE = 345;
	public static readonly KW_UNION = 346;
	public static readonly KW_UNIQUE = 347;
	public static readonly KW_UNKNOWN = 348;
	public static readonly KW_UNNEST = 349;
	public static readonly KW_UPPER = 350;
	public static readonly KW_UPSERT = 351;
	public static readonly KW_USER = 352;
	public static readonly KW_USING = 353;
	public static readonly KW_VALUE = 354;
	public static readonly KW_VALUES = 355;
	public static readonly KW_VARBINARY = 356;
	public static readonly KW_VARCHAR = 357;
	public static readonly KW_WHEN = 358;
	public static readonly KW_WHERE = 359;
	public static readonly KW_WINDOW = 360;
	public static readonly KW_WITH = 361;
	public static readonly KW_WITHIN = 362;
	public static readonly KW_WITHOUT = 363;
	public static readonly KW_YEAR = 364;
	public static readonly EQUAL_SYMBOL = 365;
	public static readonly GREATER_SYMBOL = 366;
	public static readonly LESS_SYMBOL = 367;
	public static readonly EXCLAMATION_SYMBOL = 368;
	public static readonly BIT_NOT_OP = 369;
	public static readonly BIT_OR_OP = 370;
	public static readonly BIT_AND_OP = 371;
	public static readonly BIT_XOR_OP = 372;
	public static readonly DOT = 373;
	public static readonly LS_BRACKET = 374;
	public static readonly RS_BRACKET = 375;
	public static readonly LR_BRACKET = 376;
	public static readonly RR_BRACKET = 377;
	public static readonly LB_BRACKET = 378;
	public static readonly RB_BRACKET = 379;
	public static readonly COMMA = 380;
	public static readonly SEMICOLON = 381;
	public static readonly AT_SIGN = 382;
	public static readonly SINGLE_QUOTE_SYMB = 383;
	public static readonly DOUBLE_QUOTE_SYMB = 384;
	public static readonly REVERSE_QUOTE_SYMB = 385;
	public static readonly COLON_SYMB = 386;
	public static readonly ASTERISK_SIGN = 387;
	public static readonly UNDERLINE_SIGN = 388;
	public static readonly HYPNEN_SIGN = 389;
	public static readonly ADD_SIGN = 390;
	public static readonly PENCENT_SIGN = 391;
	public static readonly DOUBLE_VERTICAL_SIGN = 392;
	public static readonly DOUBLE_HYPNEN_SIGN = 393;
	public static readonly SLASH_SIGN = 394;
	public static readonly QUESTION_MARK_SIGN = 395;
	public static readonly DOUBLE_RIGHT_ARROW = 396;
	public static readonly STRING_LITERAL = 397;
	public static readonly DIG_LITERAL = 398;
	public static readonly REAL_LITERAL = 399;
	public static readonly BIT_STRING = 400;
	public static readonly ID_LITERAL = 401;
	public static readonly FILE_PATH = 402;
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
	public static readonly RULE_addConstraint = 60;
	public static readonly RULE_dropConstraint = 61;
	public static readonly RULE_addUnique = 62;
	public static readonly RULE_notForced = 63;
	public static readonly RULE_alertView = 64;
	public static readonly RULE_alterDatabase = 65;
	public static readonly RULE_alterFunction = 66;
	public static readonly RULE_dropCatalog = 67;
	public static readonly RULE_dropTable = 68;
	public static readonly RULE_dropDatabase = 69;
	public static readonly RULE_dropView = 70;
	public static readonly RULE_dropFunction = 71;
	public static readonly RULE_insertStatement = 72;
	public static readonly RULE_insertSimpleStatement = 73;
	public static readonly RULE_insertPartitionDefinition = 74;
	public static readonly RULE_valuesDefinition = 75;
	public static readonly RULE_valuesRowDefinition = 76;
	public static readonly RULE_insertMulStatement = 77;
	public static readonly RULE_queryStatement = 78;
	public static readonly RULE_valuesCaluse = 79;
	public static readonly RULE_withClause = 80;
	public static readonly RULE_withItem = 81;
	public static readonly RULE_withItemName = 82;
	public static readonly RULE_selectStatement = 83;
	public static readonly RULE_selectClause = 84;
	public static readonly RULE_projectItemDefinition = 85;
	public static readonly RULE_overWindowItem = 86;
	public static readonly RULE_fromClause = 87;
	public static readonly RULE_tableExpression = 88;
	public static readonly RULE_tableReference = 89;
	public static readonly RULE_tablePrimary = 90;
	public static readonly RULE_tablePath = 91;
	public static readonly RULE_systemTimePeriod = 92;
	public static readonly RULE_dateTimeExpression = 93;
	public static readonly RULE_inlineDataValueClause = 94;
	public static readonly RULE_windoTVFClause = 95;
	public static readonly RULE_windowTVFExression = 96;
	public static readonly RULE_windoTVFName = 97;
	public static readonly RULE_windowTVFParam = 98;
	public static readonly RULE_timeIntervalParamName = 99;
	public static readonly RULE_columnDescriptor = 100;
	public static readonly RULE_joinCondition = 101;
	public static readonly RULE_whereClause = 102;
	public static readonly RULE_groupByClause = 103;
	public static readonly RULE_groupItemDefinition = 104;
	public static readonly RULE_groupingSets = 105;
	public static readonly RULE_groupingSetsNotaionName = 106;
	public static readonly RULE_groupWindowFunction = 107;
	public static readonly RULE_groupWindowFunctionName = 108;
	public static readonly RULE_timeAttrColumn = 109;
	public static readonly RULE_havingClause = 110;
	public static readonly RULE_windowClause = 111;
	public static readonly RULE_namedWindow = 112;
	public static readonly RULE_windowSpec = 113;
	public static readonly RULE_matchRecognizeClause = 114;
	public static readonly RULE_orderByCaluse = 115;
	public static readonly RULE_orderItemDefition = 116;
	public static readonly RULE_limitClause = 117;
	public static readonly RULE_partitionByClause = 118;
	public static readonly RULE_quantifiers = 119;
	public static readonly RULE_measuresClause = 120;
	public static readonly RULE_patternDefination = 121;
	public static readonly RULE_patternVariable = 122;
	public static readonly RULE_outputMode = 123;
	public static readonly RULE_afterMatchStrategy = 124;
	public static readonly RULE_patternVariablesDefination = 125;
	public static readonly RULE_windowFrame = 126;
	public static readonly RULE_frameBound = 127;
	public static readonly RULE_withinClause = 128;
	public static readonly RULE_expression = 129;
	public static readonly RULE_booleanExpression = 130;
	public static readonly RULE_predicate = 131;
	public static readonly RULE_likePredicate = 132;
	public static readonly RULE_valueExpression = 133;
	public static readonly RULE_primaryExpression = 134;
	public static readonly RULE_functionName = 135;
	public static readonly RULE_dereferenceDefinition = 136;
	public static readonly RULE_correlationName = 137;
	public static readonly RULE_qualifiedName = 138;
	public static readonly RULE_timeIntervalExpression = 139;
	public static readonly RULE_errorCapturingMultiUnitsInterval = 140;
	public static readonly RULE_multiUnitsInterval = 141;
	public static readonly RULE_errorCapturingUnitToUnitInterval = 142;
	public static readonly RULE_unitToUnitInterval = 143;
	public static readonly RULE_intervalValue = 144;
	public static readonly RULE_intervalTimeUnit = 145;
	public static readonly RULE_columnAlias = 146;
	public static readonly RULE_tableAlias = 147;
	public static readonly RULE_errorCapturingIdentifier = 148;
	public static readonly RULE_errorCapturingIdentifierExtra = 149;
	public static readonly RULE_identifierList = 150;
	public static readonly RULE_identifierSeq = 151;
	public static readonly RULE_identifier = 152;
	public static readonly RULE_unquotedIdentifier = 153;
	public static readonly RULE_quotedIdentifier = 154;
	public static readonly RULE_whenClause = 155;
	public static readonly RULE_uid = 156;
	public static readonly RULE_withOption = 157;
	public static readonly RULE_ifNotExists = 158;
	public static readonly RULE_ifExists = 159;
	public static readonly RULE_tablePropertyList = 160;
	public static readonly RULE_tableProperty = 161;
	public static readonly RULE_tablePropertyKey = 162;
	public static readonly RULE_tablePropertyValue = 163;
	public static readonly RULE_logicalOperator = 164;
	public static readonly RULE_comparisonOperator = 165;
	public static readonly RULE_bitOperator = 166;
	public static readonly RULE_mathOperator = 167;
	public static readonly RULE_unaryOperator = 168;
	public static readonly RULE_constant = 169;
	public static readonly RULE_stringLiteral = 170;
	public static readonly RULE_decimalLiteral = 171;
	public static readonly RULE_booleanLiteral = 172;
	public static readonly RULE_setQuantifier = 173;
	public static readonly RULE_reservedKeywords = 174;
	public static readonly RULE_nonReservedKeywords = 175;
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
		"valuesCaluse", "withClause", "withItem", "withItemName", "selectStatement", 
		"selectClause", "projectItemDefinition", "overWindowItem", "fromClause", 
		"tableExpression", "tableReference", "tablePrimary", "tablePath", "systemTimePeriod", 
		"dateTimeExpression", "inlineDataValueClause", "windoTVFClause", "windowTVFExression", 
		"windoTVFName", "windowTVFParam", "timeIntervalParamName", "columnDescriptor", 
		"joinCondition", "whereClause", "groupByClause", "groupItemDefinition", 
		"groupingSets", "groupingSetsNotaionName", "groupWindowFunction", "groupWindowFunctionName", 
		"timeAttrColumn", "havingClause", "windowClause", "namedWindow", "windowSpec", 
		"matchRecognizeClause", "orderByCaluse", "orderItemDefition", "limitClause", 
		"partitionByClause", "quantifiers", "measuresClause", "patternDefination", 
		"patternVariable", "outputMode", "afterMatchStrategy", "patternVariablesDefination", 
		"windowFrame", "frameBound", "withinClause", "expression", "booleanExpression", 
		"predicate", "likePredicate", "valueExpression", "primaryExpression", 
		"functionName", "dereferenceDefinition", "correlationName", "qualifiedName", 
		"timeIntervalExpression", "errorCapturingMultiUnitsInterval", "multiUnitsInterval", 
		"errorCapturingUnitToUnitInterval", "unitToUnitInterval", "intervalValue", 
		"intervalTimeUnit", "columnAlias", "tableAlias", "errorCapturingIdentifier", 
		"errorCapturingIdentifierExtra", "identifierList", "identifierSeq", "identifier", 
		"unquotedIdentifier", "quotedIdentifier", "whenClause", "uid", "withOption", 
		"ifNotExists", "ifExists", "tablePropertyList", "tableProperty", "tablePropertyKey", 
		"tablePropertyValue", "logicalOperator", "comparisonOperator", "bitOperator", 
		"mathOperator", "unaryOperator", "constant", "stringLiteral", "decimalLiteral", 
		"booleanLiteral", "setQuantifier", "reservedKeywords", "nonReservedKeywords",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'ADD'", "'ADMIN'", "'AFTER'", 
		"'ANALYZE'", "'ASC'", "'BEFORE'", "'BYTES'", "'CASCADE'", "'CATALOG'", 
		"'CATALOGS'", "'CENTURY'", "'CHAIN'", "'CHANGELOG_MODE'", "'CHARACTERS'", 
		"'COMMENT'", "'COMPACT'", "'COLUMNS'", "'CONSTRAINTS'", "'CONSTRUCTOR'", 
		"'CUMULATE'", "'DATA'", "'DATABASE'", "'DATABASES'", "'DAYS'", "'DECADE'", 
		"'DEFINED'", "'DESC'", "'DESCRIPTOR'", "'DIV'", "'ENCODING'", "'ENFORCED'", 
		"'ENGINE'", "'ERROR'", "'ESTIMATED_COST'", "'EXCEPTION'", "'EXCLUDE'", 
		"'EXCLUDING'", "'EXTENDED'", "'FILE'", "'FINAL'", "'FIRST'", "'FOLLOWING'", 
		"'FORMAT'", "'FORTRAN'", "'FOUND'", "'FRAC_SECOND'", "'FUNCTIONS'", "'GENERAL'", 
		"'GENERATED'", "'GO'", "'GOTO'", "'GRANTED'", "'HOP'", "'HOURS'", "'IF'", 
		"'IGNORE'", "'INCREMENT'", "'INPUT'", "'INVOKER'", "'JAR'", "'JARS'", 
		"'JAVA'", "'JSON'", "'JSON_EXECUTION_PLAN'", "'KEY'", "'KEY_MEMBER'", 
		"'KEY_TYPE'", "'LABEL'", "'LAST'", "'LENGTH'", "'LEVEL'", "'LOAD'", "'MAP'", 
		"'MICROSECOND'", "'MILLENNIUM'", "'MILLISECOND'", "'MINUTES'", "'MINVALUE'", 
		"'MODIFY'", "'MODULES'", "'MONTHS'", "'NANOSECOND'", "'NULLS'", "'NUMBER'", 
		"'OPTION'", "'OPTIONS'", "'ORDERING'", "'OUTPUT'", "'OVERWRITE'", "'OVERWRITING'", 
		"'PARTITIONED'", "'PARTITIONS'", "'PASSING'", "'PAST'", "'PATH'", "'PLACING'", 
		"'PLAN'", "'PRECEDING'", "'PRESERVE'", "'PRIOR'", "'PRIVILEGES'", "'PUBLIC'", 
		"'PYTHON'", "'PYTHON_FILES'", "'PYTHON_REQUIREMENTS'", "'PYTHON_DEPENDENCIES'", 
		"'PYTHON_JAR'", "'PYTHON_ARCHIVES'", "'PYTHON_PARAMETER'", "'QUARTER'", 
		"'RAW'", "'READ'", "'RELATIVE'", "'REMOVE'", "'RENAME'", "'REPLACE'", 
		"'RESPECT'", "'RESTART'", "'RESTRICT'", "'ROLE'", "'ROW_COUNT'", "'SCALA'", 
		"'SCALAR'", "'SCALE'", "'SCHEMA'", "'SECONDS'", "'SECTION'", "'SECURITY'", 
		"'SELF'", "'SERVER'", "'SERVER_NAME'", "'SESSION'", "'SETS'", "'SIMPLE'", 
		"'SIZE'", "'SLIDE'", "'SOURCE'", "'SPACE'", "'STATE'", "'STATEMENT'", 
		"'STEP'", "'STRING'", "'STRUCTURE'", "'STYLE'", "'TABLES'", "'TEMPORARY'", 
		"'TIMECOL'", "'TIMESTAMP_LTZ'", "'TIMESTAMPADD'", "'TIMESTAMPDIFF'", "'TRANSFORM'", 
		"'TUMBLE'", "'TYPE'", "'UNDER'", "'UNLOAD'", "'USAGE'", "'USE'", "'UTF16'", 
		"'UTF32'", "'UTF8'", "'VERSION'", "'VIEW'", "'VIEWS'", "'VIRTUAL'", "'WATERMARK'", 
		"'WATERMARKS'", "'WEEK'", "'WORK'", "'WRAPPER'", "'YEARS'", "'ZONE'", 
		"'ABS'", "'ALL'", "'ALLOW'", "'ALTER'", "'AND'", "'ANY'", "'ARE'", "'ARRAY'", 
		"'AS'", "'AT'", "'AVG'", "'BEGIN'", "'BETWEEN'", "'BIGINT'", "'BINARY'", 
		"'BIT'", "'BLOB'", "'BOOLEAN'", "'BOTH'", "'BY'", "'CALL'", "'CALLED'", 
		"'CASCADED'", "'CASE'", "'CAST'", "'CEIL'", "'CHAR'", "'CHARACTER'", "'CHECK'", 
		"'CLOB'", "'CLOSE'", "'COALESCE'", "'COLLATE'", "'COLLECT'", "'COLUMN'", 
		"'COMMIT'", "'CONNECT'", "'CONSTRAINT'", "'CONTAINS'", "'CONVERT'", "'COUNT'", 
		"'CREATE'", "'CROSS'", "'CUBE'", "'CURRENT'", "'CURSOR'", "'CYCLE'", "'DATE'", 
		"'DATETIME'", "'DAY'", "'DEC'", "'DECIMAL'", "'DECLARE'", "'DEFAULT'", 
		"'DEFINE'", "'DELETE'", "'DESCRIBE'", "'DISTINCT'", "'DOUBLE'", "'DROP'", 
		"'EACH'", "'ELSE'", "'END'", "'EQUALS'", "'EXCEPT'", "'EXECUTE'", "'EXISTS'", 
		"'EXPLAIN'", "'EXTERNAL'", "'EXTRACT'", "'FALSE'", "'FLOAT'", "'FOR'", 
		"'FROM'", "'FULL'", "'FUNCTION'", "'GLOBAL'", "'GRANT'", "'GROUP'", "'GROUPING'", 
		"'GROUPS'", "'HAVING'", "'HOUR'", "'IMPORT'", "'IN'", "'INCLUDING'", "'INNER'", 
		"'INOUT'", "'INSERT'", "'INT'", "'INTEGER'", "'INTERSECT'", "'INTERVAL'", 
		"'INTO'", "'IS'", "'JOIN'", "'LAG'", "'LANGUAGE'", "'LATERAL'", "'LEADING'", 
		"'LEFT'", "'LIKE'", "'LIMIT'", "'LOCAL'", "'MATCH'", "'MATCH_RECOGNIZE'", 
		"'MEASURES'", "'MERGE'", "'METADATA'", "'MINUS'", "'MINUTE'", "'MODIFIES'", 
		"'MODULE'", "'MONTH'", "'MULTISET'", "'NATURAL'", "'NEXT'", "'NO'", "'NONE'", 
		"'NOT'", "'NULL'", "'NUMERIC'", "'OF'", "'OFFSET'", "'ON'", "'ONE'", "'OR'", 
		"'ORDER'", "'OUT'", "'OUTER'", "'OVER'", "'OVERLAY'", "'PARTITION'", "'PATTERN'", 
		"'PER'", "'PERCENT'", "'PERIOD'", "'POSITION'", "'PRIMARY'", "'RANGE'", 
		"'RANK'", "'RESET'", "'REVOKE'", "'RIGHT'", "'RLIKE'", "'ROLLBACK'", "'ROLLUP'", 
		"'ROW'", "'ROWS'", "'SECOND'", "'SELECT'", "'SET'", "'SHOW'", "'SKIP'", 
		"'SMALLINT'", "'START'", "'STATIC'", "'SUBSTRING'", "'SUM'", "'SYSTEM'", 
		"'SYSTEM_TIME'", "'SYSTEM_USER'", "'TABLE'", "'TABLESAMPLE'", "'THEN'", 
		"'TIME'", "'TIMESTAMP'", "'TINYINT'", "'TO'", "'TRUE'", "'TRUNCATE'", 
		"'UNION'", "'UNIQUE'", "'UNKNOWN'", "'UNNEST'", "'UPPER'", "'UPSERT'", 
		"'USER'", "'USING'", "'VALUE'", "'VALUES'", "'VARBINARY'", "'VARCHAR'", 
		"'WHEN'", "'WHERE'", "'WINDOW'", "'WITH'", "'WITHIN'", "'WITHOUT'", "'YEAR'", 
		"'='", "'>'", "'<'", "'!'", "'~'", "'|'", "'&'", "'^'", "'.'", "'['", 
		"']'", "'('", "')'", "'{'", "'}'", "','", "';'", "'@'", "'''", "'\"'", 
		"'`'", "':'", "'*'", "'_'", "'-'", "'+'", "'%'", "'||'", "'--'", "'/'", 
		"'?'", "'=>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SPACE", "COMMENT_INPUT", "LINE_COMMENT", "KW_ADD", "KW_ADMIN", 
		"KW_AFTER", "KW_ANALYZE", "KW_ASC", "KW_BEFORE", "KW_BYTES", "KW_CASCADE", 
		"KW_CATALOG", "KW_CATALOGS", "KW_CENTURY", "KW_CHAIN", "KW_CHANGELOG_MODE", 
		"KW_CHARACTERS", "KW_COMMENT", "KW_COMPACT", "KW_COLUMNS", "KW_CONSTRAINTS", 
		"KW_CONSTRUCTOR", "KW_CUMULATE", "KW_DATA", "KW_DATABASE", "KW_DATABASES", 
		"KW_DAYS", "KW_DECADE", "KW_DEFINED", "KW_DESC", "KW_DESCRIPTOR", "KW_DIV", 
		"KW_ENCODING", "KW_ENFORCED", "KW_ENGINE", "KW_ERROR", "KW_ESTIMATED_COST", 
		"KW_EXCEPTION", "KW_EXCLUDE", "KW_EXCLUDING", "KW_EXTENDED", "KW_FILE", 
		"KW_FINAL", "KW_FIRST", "KW_FOLLOWING", "KW_FORMAT", "KW_FORTRAN", "KW_FOUND", 
		"KW_FRAC_SECOND", "KW_FUNCTIONS", "KW_GENERAL", "KW_GENERATED", "KW_GO", 
		"KW_GOTO", "KW_GRANTED", "KW_HOP", "KW_HOURS", "KW_IF", "KW_IGNORE", "KW_INCREMENT", 
		"KW_INPUT", "KW_INVOKER", "KW_JAR", "KW_JARS", "KW_JAVA", "KW_JSON", "KW_JSON_EXECUTION_PLAN", 
		"KW_KEY", "KW_KEY_MEMBER", "KW_KEY_TYPE", "KW_LABEL", "KW_LAST", "KW_LENGTH", 
		"KW_LEVEL", "KW_LOAD", "KW_MAP", "KW_MICROSECOND", "KW_MILLENNIUM", "KW_MILLISECOND", 
		"KW_MINUTES", "KW_MINVALUE", "KW_MODIFY", "KW_MODULES", "KW_MONTHS", "KW_NANOSECOND", 
		"KW_NULLS", "KW_NUMBER", "KW_OPTION", "KW_OPTIONS", "KW_ORDERING", "KW_OUTPUT", 
		"KW_OVERWRITE", "KW_OVERWRITING", "KW_PARTITIONED", "KW_PARTITIONS", "KW_PASSING", 
		"KW_PAST", "KW_PATH", "KW_PLACING", "KW_PLAN", "KW_PRECEDING", "KW_PRESERVE", 
		"KW_PRIOR", "KW_PRIVILEGES", "KW_PUBLIC", "KW_PYTHON", "KW_PYTHON_FILES", 
		"KW_PYTHON_REQUIREMENTS", "KW_PYTHON_DEPENDENCIES", "KW_PYTHON_JAR", "KW_PYTHON_ARCHIVES", 
		"KW_PYTHON_PARAMETER", "KW_QUARTER", "KW_RAW", "KW_READ", "KW_RELATIVE", 
		"KW_REMOVE", "KW_RENAME", "KW_REPLACE", "KW_RESPECT", "KW_RESTART", "KW_RESTRICT", 
		"KW_ROLE", "KW_ROW_COUNT", "KW_SCALA", "KW_SCALAR", "KW_SCALE", "KW_SCHEMA", 
		"KW_SECONDS", "KW_SECTION", "KW_SECURITY", "KW_SELF", "KW_SERVER", "KW_SERVER_NAME", 
		"KW_SESSION", "KW_SETS", "KW_SIMPLE", "KW_SIZE", "KW_SLIDE", "KW_SOURCE", 
		"KW_SPACE", "KW_STATE", "KW_STATEMENT", "KW_STEP", "KW_STRING", "KW_STRUCTURE", 
		"KW_STYLE", "KW_TABLES", "KW_TEMPORARY", "KW_TIMECOL", "KW_TIMESTAMP_LTZ", 
		"KW_TIMESTAMPADD", "KW_TIMESTAMPDIFF", "KW_TRANSFORM", "KW_TUMBLE", "KW_TYPE", 
		"KW_UNDER", "KW_UNLOAD", "KW_USAGE", "KW_USE", "KW_UTF16", "KW_UTF32", 
		"KW_UTF8", "KW_VERSION", "KW_VIEW", "KW_VIEWS", "KW_VIRTUAL", "KW_WATERMARK", 
		"KW_WATERMARKS", "KW_WEEK", "KW_WORK", "KW_WRAPPER", "KW_YEARS", "KW_ZONE", 
		"KW_ABS", "KW_ALL", "ALLOW", "KW_ALTER", "KW_AND", "KW_ANY", "KW_ARE", 
		"KW_ARRAY", "KW_AS", "KW_AT", "KW_AVG", "KW_BEGIN", "KW_BETWEEN", "KW_BIGINT", 
		"KW_BINARY", "KW_BIT", "KW_BLOB", "KW_BOOLEAN", "KW_BOTH", "KW_BY", "KW_CALL", 
		"KW_CALLED", "KW_CASCADED", "KW_CASE", "KW_CAST", "KW_CEIL", "KW_CHAR", 
		"KW_CHARACTER", "KW_CHECK", "KW_CLOB", "KW_CLOSE", "KW_COALESCE", "KW_COLLATE", 
		"KW_COLLECT", "KW_COLUMN", "KW_COMMIT", "KW_CONNECT", "KW_CONSTRAINT", 
		"KW_CONTAINS", "KW_CONVERT", "KW_COUNT", "KW_CREATE", "KW_CROSS", "KW_CUBE", 
		"KW_CURRENT", "KW_CURSOR", "KW_CYCLE", "KW_DATE", "KW_DATETIME", "KW_DAY", 
		"KW_DEC", "KW_DECIMAL", "KW_DECLARE", "KW_DEFAULT", "KW_DEFINE", "KW_DELETE", 
		"KW_DESCRIBE", "KW_DISTINCT", "KW_DOUBLE", "KW_DROP", "KW_EACH", "KW_ELSE", 
		"KW_END", "KW_EQUALS", "KW_EXCEPT", "KW_EXECUTE", "KW_EXISTS", "KW_EXPLAIN", 
		"KW_EXTERNAL", "KW_EXTRACT", "KW_FALSE", "KW_FLOAT", "KW_FOR", "KW_FROM", 
		"KW_FULL", "KW_FUNCTION", "KW_GLOBAL", "KW_GRANT", "KW_GROUP", "KW_GROUPING", 
		"KW_GROUPS", "KW_HAVING", "KW_HOUR", "KW_IMPORT", "KW_IN", "KW_INCLUDING", 
		"KW_INNER", "KW_INOUT", "KW_INSERT", "KW_INT", "KW_INTEGER", "KW_INTERSECT", 
		"KW_INTERVAL", "KW_INTO", "KW_IS", "KW_JOIN", "KW_LAG", "KW_LANGUAGE", 
		"KW_LATERAL", "KW_LEADING", "KW_LEFT", "KW_LIKE", "KW_LIMIT", "KW_LOCAL", 
		"KW_MATCH", "KW_MATCH_RECOGNIZE", "KW_MEASURES", "KW_MERGE", "KW_METADATA", 
		"KW_MINUS", "KW_MINUTE", "KW_MODIFIES", "KW_MODULE", "KW_MONTH", "KW_MULTISET", 
		"KW_NATURAL", "KW_NEXT", "KW_NO", "KW_NONE", "KW_NOT", "KW_NULL", "KW_NUMERIC", 
		"KW_OF", "KW_OFFSET", "KW_ON", "KW_ONE", "KW_OR", "KW_ORDER", "KW_OUT", 
		"KW_OUTER", "KW_OVER", "KW_OVERLAY", "KW_PARTITION", "KW_PATTERN", "KW_PER", 
		"KW_PERCENT", "KW_PERIOD", "KW_POSITION", "KW_PRIMARY", "KW_RANGE", "KW_RANK", 
		"KW_RESET", "KW_REVOKE", "KW_RIGHT", "KW_RLIKE", "KW_ROLLBACK", "KW_ROLLUP", 
		"KW_ROW", "KW_ROWS", "KW_SECOND", "KW_SELECT", "KW_SET", "KW_SHOW", "KW_SKIP", 
		"KW_SMALLINT", "KW_START", "KW_STATIC", "KW_SUBSTRING", "KW_SUM", "KW_SYSTEM", 
		"KW_SYSTEM_TIME", "KW_SYSTEM_USER", "KW_TABLE", "KW_TABLESAMPLE", "KW_THEN", 
		"KW_TIME", "KW_TIMESTAMP", "KW_TINYINT", "KW_TO", "KW_TRUE", "KW_TRUNCATE", 
		"KW_UNION", "KW_UNIQUE", "KW_UNKNOWN", "KW_UNNEST", "KW_UPPER", "KW_UPSERT", 
		"KW_USER", "KW_USING", "KW_VALUE", "KW_VALUES", "KW_VARBINARY", "KW_VARCHAR", 
		"KW_WHEN", "KW_WHERE", "KW_WINDOW", "KW_WITH", "KW_WITHIN", "KW_WITHOUT", 
		"KW_YEAR", "EQUAL_SYMBOL", "GREATER_SYMBOL", "LESS_SYMBOL", "EXCLAMATION_SYMBOL", 
		"BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", "BIT_XOR_OP", "DOT", "LS_BRACKET", 
		"RS_BRACKET", "LR_BRACKET", "RR_BRACKET", "LB_BRACKET", "RB_BRACKET", 
		"COMMA", "SEMICOLON", "AT_SIGN", "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", 
		"REVERSE_QUOTE_SYMB", "COLON_SYMB", "ASTERISK_SIGN", "UNDERLINE_SIGN", 
		"HYPNEN_SIGN", "ADD_SIGN", "PENCENT_SIGN", "DOUBLE_VERTICAL_SIGN", "DOUBLE_HYPNEN_SIGN", 
		"SLASH_SIGN", "QUESTION_MARK_SIGN", "DOUBLE_RIGHT_ARROW", "STRING_LITERAL", 
		"DIG_LITERAL", "REAL_LITERAL", "BIT_STRING", "ID_LITERAL", "FILE_PATH",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FlinkSqlParser._LITERAL_NAMES, FlinkSqlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FlinkSqlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FlinkSqlParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return FlinkSqlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FlinkSqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FlinkSqlParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FlinkSqlParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.statement();
			this.state = 353;
			this.match(FlinkSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FlinkSqlParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.sqlStatements();
			this.state = 356;
			this.match(FlinkSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlStatements(): SqlStatementsContext {
		let _localctx: SqlStatementsContext = new SqlStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FlinkSqlParser.RULE_sqlStatements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.KW_ADD || _la === FlinkSqlParser.KW_DESC || _la === FlinkSqlParser.KW_LOAD || _la === FlinkSqlParser.KW_REMOVE || ((((_la - 158)) & ~0x1F) === 0 && ((1 << (_la - 158)) & ((1 << (FlinkSqlParser.KW_UNLOAD - 158)) | (1 << (FlinkSqlParser.KW_USE - 158)) | (1 << (FlinkSqlParser.KW_ALTER - 158)))) !== 0) || ((((_la - 216)) & ~0x1F) === 0 && ((1 << (_la - 216)) & ((1 << (FlinkSqlParser.KW_CREATE - 216)) | (1 << (FlinkSqlParser.KW_DESCRIBE - 216)) | (1 << (FlinkSqlParser.KW_DROP - 216)) | (1 << (FlinkSqlParser.KW_EXECUTE - 216)) | (1 << (FlinkSqlParser.KW_EXPLAIN - 216)))) !== 0) || _la === FlinkSqlParser.KW_INSERT || ((((_la - 316)) & ~0x1F) === 0 && ((1 << (_la - 316)) & ((1 << (FlinkSqlParser.KW_RESET - 316)) | (1 << (FlinkSqlParser.KW_SELECT - 316)) | (1 << (FlinkSqlParser.KW_SET - 316)) | (1 << (FlinkSqlParser.KW_SHOW - 316)))) !== 0) || ((((_la - 355)) & ~0x1F) === 0 && ((1 << (_la - 355)) & ((1 << (FlinkSqlParser.KW_VALUES - 355)) | (1 << (FlinkSqlParser.KW_WITH - 355)) | (1 << (FlinkSqlParser.LR_BRACKET - 355)) | (1 << (FlinkSqlParser.SEMICOLON - 355)))) !== 0)) {
				{
				this.state = 363;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FlinkSqlParser.KW_ADD:
				case FlinkSqlParser.KW_DESC:
				case FlinkSqlParser.KW_LOAD:
				case FlinkSqlParser.KW_REMOVE:
				case FlinkSqlParser.KW_UNLOAD:
				case FlinkSqlParser.KW_USE:
				case FlinkSqlParser.KW_ALTER:
				case FlinkSqlParser.KW_CREATE:
				case FlinkSqlParser.KW_DESCRIBE:
				case FlinkSqlParser.KW_DROP:
				case FlinkSqlParser.KW_EXECUTE:
				case FlinkSqlParser.KW_EXPLAIN:
				case FlinkSqlParser.KW_INSERT:
				case FlinkSqlParser.KW_RESET:
				case FlinkSqlParser.KW_SELECT:
				case FlinkSqlParser.KW_SET:
				case FlinkSqlParser.KW_SHOW:
				case FlinkSqlParser.KW_VALUES:
				case FlinkSqlParser.KW_WITH:
				case FlinkSqlParser.LR_BRACKET:
					{
					this.state = 358;
					this.sqlStatement();
					this.state = 360;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 359;
						this.match(FlinkSqlParser.SEMICOLON);
						}
						break;
					}
					}
					break;
				case FlinkSqlParser.SEMICOLON:
					{
					this.state = 362;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 367;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlStatement(): SqlStatementContext {
		let _localctx: SqlStatementContext = new SqlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FlinkSqlParser.RULE_sqlStatement);
		try {
			this.state = 380;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 368;
				this.ddlStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 369;
				this.dmlStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 370;
				this.describeStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 371;
				this.explainStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 372;
				this.useStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 373;
				this.showStatememt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 374;
				this.loadStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 375;
				this.unloadStatememt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 376;
				this.setStatememt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 377;
				this.resetStatememt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 378;
				this.jarStatememt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 379;
				this.dtAddStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FlinkSqlParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.match(FlinkSqlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ddlStatement(): DdlStatementContext {
		let _localctx: DdlStatementContext = new DdlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FlinkSqlParser.RULE_ddlStatement);
		try {
			this.state = 398;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 384;
				this.createTable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 385;
				this.createDatabase();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 386;
				this.createView();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 387;
				this.createFunction();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 388;
				this.createCatalog();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 389;
				this.alterTable();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 390;
				this.alertView();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 391;
				this.alterDatabase();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 392;
				this.alterFunction();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 393;
				this.dropCatalog();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 394;
				this.dropTable();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 395;
				this.dropDatabase();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 396;
				this.dropView();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 397;
				this.dropFunction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dmlStatement(): DmlStatementContext {
		let _localctx: DmlStatementContext = new DmlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FlinkSqlParser.RULE_dmlStatement);
		try {
			this.state = 402;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_SELECT:
			case FlinkSqlParser.KW_VALUES:
			case FlinkSqlParser.KW_WITH:
			case FlinkSqlParser.LR_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 400;
				this.queryStatement(0);
				}
				break;
			case FlinkSqlParser.KW_EXECUTE:
			case FlinkSqlParser.KW_INSERT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 401;
				this.insertStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public describeStatement(): DescribeStatementContext {
		let _localctx: DescribeStatementContext = new DescribeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FlinkSqlParser.RULE_describeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_DESC || _la === FlinkSqlParser.KW_DESCRIBE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 405;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explainStatement(): ExplainStatementContext {
		let _localctx: ExplainStatementContext = new ExplainStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FlinkSqlParser.RULE_explainStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this.match(FlinkSqlParser.KW_EXPLAIN);
			this.state = 411;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_CHANGELOG_MODE:
			case FlinkSqlParser.KW_ESTIMATED_COST:
			case FlinkSqlParser.KW_JSON_EXECUTION_PLAN:
				{
				this.state = 408;
				this.explainDetails();
				}
				break;
			case FlinkSqlParser.KW_PLAN:
				{
				this.state = 409;
				this.match(FlinkSqlParser.KW_PLAN);
				this.state = 410;
				this.match(FlinkSqlParser.KW_FOR);
				}
				break;
			case FlinkSqlParser.KW_STATEMENT:
			case FlinkSqlParser.KW_EXECUTE:
			case FlinkSqlParser.KW_INSERT:
			case FlinkSqlParser.KW_SELECT:
			case FlinkSqlParser.KW_VALUES:
			case FlinkSqlParser.KW_WITH:
			case FlinkSqlParser.LR_BRACKET:
				break;
			default:
				break;
			}
			this.state = 416;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 413;
				this.dmlStatement();
				}
				break;

			case 2:
				{
				this.state = 414;
				this.insertSimpleStatement();
				}
				break;

			case 3:
				{
				this.state = 415;
				this.insertMulStatement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explainDetails(): ExplainDetailsContext {
		let _localctx: ExplainDetailsContext = new ExplainDetailsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FlinkSqlParser.RULE_explainDetails);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this.explainDetail();
			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 419;
				this.match(FlinkSqlParser.COMMA);
				this.state = 420;
				this.explainDetail();
				}
				}
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explainDetail(): ExplainDetailContext {
		let _localctx: ExplainDetailContext = new ExplainDetailContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FlinkSqlParser.RULE_explainDetail);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_CHANGELOG_MODE || _la === FlinkSqlParser.KW_ESTIMATED_COST || _la === FlinkSqlParser.KW_JSON_EXECUTION_PLAN)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public useStatement(): UseStatementContext {
		let _localctx: UseStatementContext = new UseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FlinkSqlParser.RULE_useStatement);
		try {
			this.state = 434;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 428;
				this.match(FlinkSqlParser.KW_USE);
				this.state = 430;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 429;
					this.match(FlinkSqlParser.KW_CATALOG);
					}
					break;
				}
				this.state = 432;
				this.uid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 433;
				this.useModuleStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public useModuleStatement(): UseModuleStatementContext {
		let _localctx: UseModuleStatementContext = new UseModuleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FlinkSqlParser.RULE_useModuleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			this.match(FlinkSqlParser.KW_USE);
			this.state = 437;
			this.match(FlinkSqlParser.KW_MODULES);
			this.state = 438;
			this.uid();
			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 439;
				this.match(FlinkSqlParser.COMMA);
				this.state = 440;
				this.uid();
				}
				}
				this.state = 445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showStatememt(): ShowStatememtContext {
		let _localctx: ShowStatememtContext = new ShowStatememtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FlinkSqlParser.RULE_showStatememt);
		let _la: number;
		try {
			this.state = 481;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 446;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 447;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_CATALOGS || _la === FlinkSqlParser.KW_DATABASES || _la === FlinkSqlParser.KW_JARS || _la === FlinkSqlParser.KW_VIEWS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 448;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 449;
				this.match(FlinkSqlParser.KW_CURRENT);
				this.state = 450;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_CATALOG || _la === FlinkSqlParser.KW_DATABASE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 451;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 452;
				this.match(FlinkSqlParser.KW_TABLES);
				this.state = 455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_FROM || _la === FlinkSqlParser.KW_IN) {
					{
					this.state = 453;
					_la = this._input.LA(1);
					if (!(_la === FlinkSqlParser.KW_FROM || _la === FlinkSqlParser.KW_IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 454;
					this.uid();
					}
				}

				this.state = 458;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_LIKE || _la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 457;
					this.likePredicate();
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 460;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 461;
				this.match(FlinkSqlParser.KW_COLUMNS);
				this.state = 462;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_FROM || _la === FlinkSqlParser.KW_IN)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 463;
				this.uid();
				this.state = 465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_LIKE || _la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 464;
					this.likePredicate();
					}
				}

				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 467;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 468;
				this.match(FlinkSqlParser.KW_CREATE);
				this.state = 469;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_VIEW || _la === FlinkSqlParser.KW_TABLE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 470;
				this.uid();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 471;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 473;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_USER) {
					{
					this.state = 472;
					this.match(FlinkSqlParser.KW_USER);
					}
				}

				this.state = 475;
				this.match(FlinkSqlParser.KW_FUNCTIONS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 476;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_FULL) {
					{
					this.state = 477;
					this.match(FlinkSqlParser.KW_FULL);
					}
				}

				this.state = 480;
				this.match(FlinkSqlParser.KW_MODULES);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loadStatement(): LoadStatementContext {
		let _localctx: LoadStatementContext = new LoadStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FlinkSqlParser.RULE_loadStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.match(FlinkSqlParser.KW_LOAD);
			this.state = 484;
			this.match(FlinkSqlParser.KW_MODULE);
			this.state = 485;
			this.uid();
			this.state = 488;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 486;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 487;
				this.tablePropertyList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unloadStatememt(): UnloadStatememtContext {
		let _localctx: UnloadStatememtContext = new UnloadStatememtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FlinkSqlParser.RULE_unloadStatememt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			this.match(FlinkSqlParser.KW_UNLOAD);
			this.state = 491;
			this.match(FlinkSqlParser.KW_MODULE);
			this.state = 492;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setStatememt(): SetStatememtContext {
		let _localctx: SetStatememtContext = new SetStatememtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FlinkSqlParser.RULE_setStatememt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 494;
			this.match(FlinkSqlParser.KW_SET);
			this.state = 496;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 495;
				this.tableProperty();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resetStatememt(): ResetStatememtContext {
		let _localctx: ResetStatememtContext = new ResetStatememtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FlinkSqlParser.RULE_resetStatememt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 498;
			this.match(FlinkSqlParser.KW_RESET);
			this.state = 500;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 499;
				this.tablePropertyKey();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jarStatememt(): JarStatememtContext {
		let _localctx: JarStatememtContext = new JarStatememtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FlinkSqlParser.RULE_jarStatememt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_ADD || _la === FlinkSqlParser.KW_REMOVE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 503;
			this.match(FlinkSqlParser.KW_JAR);
			this.state = 504;
			this.jarFileName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dtAddStatement(): DtAddStatementContext {
		let _localctx: DtAddStatementContext = new DtAddStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, FlinkSqlParser.RULE_dtAddStatement);
		let _la: number;
		try {
			this.state = 545;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 506;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 507;
				this.match(FlinkSqlParser.KW_JAR);
				this.state = 508;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 509;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_AS) {
					{
					this.state = 510;
					this.match(FlinkSqlParser.KW_AS);
					this.state = 511;
					this.uid();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 514;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 515;
				this.match(FlinkSqlParser.KW_FILE);
				this.state = 516;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 517;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_AS) {
					{
					this.state = 518;
					this.match(FlinkSqlParser.KW_AS);
					this.state = 519;
					this.uid();
					}
				}

				this.state = 524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_RENAME) {
					{
					this.state = 522;
					this.match(FlinkSqlParser.KW_RENAME);
					this.state = 523;
					this.uid();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 526;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 527;
				_la = this._input.LA(1);
				if (!(((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (FlinkSqlParser.KW_PYTHON_FILES - 107)) | (1 << (FlinkSqlParser.KW_PYTHON_REQUIREMENTS - 107)) | (1 << (FlinkSqlParser.KW_PYTHON_DEPENDENCIES - 107)) | (1 << (FlinkSqlParser.KW_PYTHON_JAR - 107)) | (1 << (FlinkSqlParser.KW_PYTHON_ARCHIVES - 107)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 528;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 529;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 530;
				this.match(FlinkSqlParser.KW_RENAME);
				this.state = 531;
				this.uid();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 532;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 533;
				this.match(FlinkSqlParser.KW_PYTHON_PARAMETER);
				this.state = 534;
				this.match(FlinkSqlParser.FILE_PATH);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 535;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 536;
				this.match(FlinkSqlParser.KW_ENGINE);
				this.state = 537;
				this.match(FlinkSqlParser.KW_FILE);
				this.state = 538;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 539;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 540;
				this.match(FlinkSqlParser.KW_RENAME);
				this.state = 541;
				this.uid();
				this.state = 542;
				this.match(FlinkSqlParser.KW_KEY);
				this.state = 543;
				this.uid();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createTable(): CreateTableContext {
		let _localctx: CreateTableContext = new CreateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, FlinkSqlParser.RULE_createTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 547;
				this.simpleCreateTable();
				}
				break;

			case 2:
				{
				this.state = 548;
				this.createTableAsSelect();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleCreateTable(): SimpleCreateTableContext {
		let _localctx: SimpleCreateTableContext = new SimpleCreateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, FlinkSqlParser.RULE_simpleCreateTable);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 551;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_TEMPORARY) {
				{
				this.state = 552;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 555;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 557;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 556;
				this.ifNotExists();
				}
				break;
			}
			this.state = 559;
			this.sourceTable();
			this.state = 560;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 561;
			this.columnOptionDefinition();
			this.state = 566;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 562;
					this.match(FlinkSqlParser.COMMA);
					this.state = 563;
					this.columnOptionDefinition();
					}
					}
				}
				this.state = 568;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 571;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 569;
				this.match(FlinkSqlParser.COMMA);
				this.state = 570;
				this.watermarkDefinition();
				}
				break;
			}
			this.state = 575;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 573;
				this.match(FlinkSqlParser.COMMA);
				this.state = 574;
				this.tableConstraint();
				}
				break;
			}
			this.state = 579;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.COMMA) {
				{
				this.state = 577;
				this.match(FlinkSqlParser.COMMA);
				this.state = 578;
				this.selfDefinitionClause();
				}
			}

			this.state = 581;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_COMMENT) {
				{
				this.state = 582;
				this.commentSpec();
				}
			}

			this.state = 586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_PARTITIONED) {
				{
				this.state = 585;
				this.partitionDefinition();
				}
			}

			this.state = 588;
			this.withOption();
			this.state = 590;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_LIKE) {
				{
				this.state = 589;
				this.likeDefinition();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createTableAsSelect(): CreateTableAsSelectContext {
		let _localctx: CreateTableAsSelectContext = new CreateTableAsSelectContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, FlinkSqlParser.RULE_createTableAsSelect);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 593;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 595;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 594;
				this.ifNotExists();
				}
				break;
			}
			this.state = 597;
			this.sourceTable();
			this.state = 598;
			this.withOption();
			this.state = 601;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_AS) {
				{
				this.state = 599;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 600;
				this.queryStatement(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnOptionDefinition(): ColumnOptionDefinitionContext {
		let _localctx: ColumnOptionDefinitionContext = new ColumnOptionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, FlinkSqlParser.RULE_columnOptionDefinition);
		try {
			this.state = 606;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 603;
				this.physicalColumnDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 604;
				this.metadataColumnDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 605;
				this.computedColumnDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public physicalColumnDefinition(): PhysicalColumnDefinitionContext {
		let _localctx: PhysicalColumnDefinitionContext = new PhysicalColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, FlinkSqlParser.RULE_physicalColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 608;
			this.columnName();
			this.state = 609;
			this.columnType();
			this.state = 611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_CONSTRAINT || _la === FlinkSqlParser.KW_PRIMARY) {
				{
				this.state = 610;
				this.columnConstraint();
				}
			}

			this.state = 614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_COMMENT) {
				{
				this.state = 613;
				this.commentSpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnName(): ColumnNameContext {
		let _localctx: ColumnNameContext = new ColumnNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, FlinkSqlParser.RULE_columnName);
		try {
			this.state = 618;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 616;
				this.uid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 617;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnNameList(): ColumnNameListContext {
		let _localctx: ColumnNameListContext = new ColumnNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, FlinkSqlParser.RULE_columnNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 620;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 621;
			this.columnName();
			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 622;
				this.match(FlinkSqlParser.COMMA);
				this.state = 623;
				this.columnName();
				}
				}
				this.state = 628;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 629;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnType(): ColumnTypeContext {
		let _localctx: ColumnTypeContext = new ColumnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, FlinkSqlParser.RULE_columnType);
		let _la: number;
		try {
			this.state = 668;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_BOOLEAN:
			case FlinkSqlParser.KW_DATE:
			case FlinkSqlParser.KW_NULL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 631;
				_localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_BOOLEAN || _la === FlinkSqlParser.KW_DATE || _la === FlinkSqlParser.KW_NULL)) {
					_localctx._typeName = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case FlinkSqlParser.KW_BYTES:
			case FlinkSqlParser.KW_STRING:
			case FlinkSqlParser.KW_TIMESTAMP_LTZ:
			case FlinkSqlParser.KW_BIGINT:
			case FlinkSqlParser.KW_BINARY:
			case FlinkSqlParser.KW_CHAR:
			case FlinkSqlParser.KW_DATETIME:
			case FlinkSqlParser.KW_INT:
			case FlinkSqlParser.KW_INTEGER:
			case FlinkSqlParser.KW_SMALLINT:
			case FlinkSqlParser.KW_TIME:
			case FlinkSqlParser.KW_TINYINT:
			case FlinkSqlParser.KW_VARBINARY:
			case FlinkSqlParser.KW_VARCHAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 632;
				_localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_BYTES || _la === FlinkSqlParser.KW_STRING || _la === FlinkSqlParser.KW_TIMESTAMP_LTZ || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & ((1 << (FlinkSqlParser.KW_BIGINT - 188)) | (1 << (FlinkSqlParser.KW_BINARY - 188)) | (1 << (FlinkSqlParser.KW_CHAR - 188)))) !== 0) || _la === FlinkSqlParser.KW_DATETIME || _la === FlinkSqlParser.KW_INT || _la === FlinkSqlParser.KW_INTEGER || ((((_la - 329)) & ~0x1F) === 0 && ((1 << (_la - 329)) & ((1 << (FlinkSqlParser.KW_SMALLINT - 329)) | (1 << (FlinkSqlParser.KW_TIME - 329)) | (1 << (FlinkSqlParser.KW_TINYINT - 329)) | (1 << (FlinkSqlParser.KW_VARBINARY - 329)) | (1 << (FlinkSqlParser.KW_VARCHAR - 329)))) !== 0))) {
					_localctx._typeName = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LR_BRACKET) {
					{
					this.state = 633;
					this.lengthOneDimension();
					}
				}

				}
				break;
			case FlinkSqlParser.KW_TIMESTAMP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 636;
				_localctx._typeName = this.match(FlinkSqlParser.KW_TIMESTAMP);
				this.state = 638;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LR_BRACKET) {
					{
					this.state = 637;
					this.lengthOneDimension();
					}
				}

				this.state = 646;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_WITH || _la === FlinkSqlParser.KW_WITHOUT) {
					{
					this.state = 640;
					_la = this._input.LA(1);
					if (!(_la === FlinkSqlParser.KW_WITH || _la === FlinkSqlParser.KW_WITHOUT)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 642;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSqlParser.KW_LOCAL) {
						{
						this.state = 641;
						this.match(FlinkSqlParser.KW_LOCAL);
						}
					}

					this.state = 644;
					this.match(FlinkSqlParser.KW_TIME);
					this.state = 645;
					this.match(FlinkSqlParser.KW_ZONE);
					}
				}

				}
				break;
			case FlinkSqlParser.KW_DEC:
			case FlinkSqlParser.KW_DECIMAL:
			case FlinkSqlParser.KW_DOUBLE:
			case FlinkSqlParser.KW_FLOAT:
			case FlinkSqlParser.KW_NUMERIC:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 648;
				_localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (FlinkSqlParser.KW_DEC - 225)) | (1 << (FlinkSqlParser.KW_DECIMAL - 225)) | (1 << (FlinkSqlParser.KW_DOUBLE - 225)) | (1 << (FlinkSqlParser.KW_FLOAT - 225)))) !== 0) || _la === FlinkSqlParser.KW_NUMERIC)) {
					_localctx._typeName = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LR_BRACKET) {
					{
					this.state = 649;
					this.lengthTwoOptionalDimension();
					}
				}

				}
				break;
			case FlinkSqlParser.KW_ARRAY:
			case FlinkSqlParser.KW_MULTISET:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 652;
				_localctx._type = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_ARRAY || _la === FlinkSqlParser.KW_MULTISET)) {
					_localctx._type = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 654;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LESS_SYMBOL) {
					{
					this.state = 653;
					this.lengthOneTypeDimension();
					}
				}

				}
				break;
			case FlinkSqlParser.KW_MAP:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 656;
				_localctx._type = this.match(FlinkSqlParser.KW_MAP);
				this.state = 658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LESS_SYMBOL) {
					{
					this.state = 657;
					this.mapTypeDimension();
					}
				}

				}
				break;
			case FlinkSqlParser.KW_ROW:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 660;
				_localctx._type = this.match(FlinkSqlParser.KW_ROW);
				this.state = 662;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LESS_SYMBOL) {
					{
					this.state = 661;
					this.rowTypeDimension();
					}
				}

				}
				break;
			case FlinkSqlParser.KW_RAW:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 664;
				_localctx._type = this.match(FlinkSqlParser.KW_RAW);
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LR_BRACKET) {
					{
					this.state = 665;
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lengthOneDimension(): LengthOneDimensionContext {
		let _localctx: LengthOneDimensionContext = new LengthOneDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, FlinkSqlParser.RULE_lengthOneDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 670;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 671;
			this.decimalLiteral();
			this.state = 672;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext {
		let _localctx: LengthTwoOptionalDimensionContext = new LengthTwoOptionalDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, FlinkSqlParser.RULE_lengthTwoOptionalDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 674;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 675;
			this.decimalLiteral();
			this.state = 678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.COMMA) {
				{
				this.state = 676;
				this.match(FlinkSqlParser.COMMA);
				this.state = 677;
				this.decimalLiteral();
				}
			}

			this.state = 680;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lengthTwoStringDimension(): LengthTwoStringDimensionContext {
		let _localctx: LengthTwoStringDimensionContext = new LengthTwoStringDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, FlinkSqlParser.RULE_lengthTwoStringDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 682;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 683;
			this.stringLiteral();
			this.state = 686;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.COMMA) {
				{
				this.state = 684;
				this.match(FlinkSqlParser.COMMA);
				this.state = 685;
				this.stringLiteral();
				}
			}

			this.state = 688;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lengthOneTypeDimension(): LengthOneTypeDimensionContext {
		let _localctx: LengthOneTypeDimensionContext = new LengthOneTypeDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, FlinkSqlParser.RULE_lengthOneTypeDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 691;
			this.columnType();
			this.state = 692;
			this.match(FlinkSqlParser.GREATER_SYMBOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapTypeDimension(): MapTypeDimensionContext {
		let _localctx: MapTypeDimensionContext = new MapTypeDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, FlinkSqlParser.RULE_mapTypeDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 694;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 695;
			this.columnType();
			{
			this.state = 696;
			this.match(FlinkSqlParser.COMMA);
			this.state = 697;
			this.columnType();
			}
			this.state = 699;
			this.match(FlinkSqlParser.GREATER_SYMBOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rowTypeDimension(): RowTypeDimensionContext {
		let _localctx: RowTypeDimensionContext = new RowTypeDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, FlinkSqlParser.RULE_rowTypeDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 701;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 702;
			this.columnName();
			this.state = 703;
			this.columnType();
			this.state = 710;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 704;
				this.match(FlinkSqlParser.COMMA);
				this.state = 705;
				this.columnName();
				this.state = 706;
				this.columnType();
				}
				}
				this.state = 712;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 713;
			this.match(FlinkSqlParser.GREATER_SYMBOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnConstraint(): ColumnConstraintContext {
		let _localctx: ColumnConstraintContext = new ColumnConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, FlinkSqlParser.RULE_columnConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 717;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_CONSTRAINT) {
				{
				this.state = 715;
				this.match(FlinkSqlParser.KW_CONSTRAINT);
				this.state = 716;
				this.constraintName();
				}
			}

			this.state = 719;
			this.match(FlinkSqlParser.KW_PRIMARY);
			this.state = 720;
			this.match(FlinkSqlParser.KW_KEY);
			this.state = 721;
			this.match(FlinkSqlParser.KW_NOT);
			this.state = 722;
			this.match(FlinkSqlParser.KW_ENFORCED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commentSpec(): CommentSpecContext {
		let _localctx: CommentSpecContext = new CommentSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, FlinkSqlParser.RULE_commentSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this.match(FlinkSqlParser.KW_COMMENT);
			this.state = 725;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public metadataColumnDefinition(): MetadataColumnDefinitionContext {
		let _localctx: MetadataColumnDefinitionContext = new MetadataColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, FlinkSqlParser.RULE_metadataColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 727;
			this.columnName();
			this.state = 728;
			this.columnType();
			this.state = 729;
			this.match(FlinkSqlParser.KW_METADATA);
			this.state = 732;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_FROM) {
				{
				this.state = 730;
				this.match(FlinkSqlParser.KW_FROM);
				this.state = 731;
				this.metadataKey();
				}
			}

			this.state = 735;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_VIRTUAL) {
				{
				this.state = 734;
				this.match(FlinkSqlParser.KW_VIRTUAL);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public metadataKey(): MetadataKeyContext {
		let _localctx: MetadataKeyContext = new MetadataKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, FlinkSqlParser.RULE_metadataKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 737;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public computedColumnDefinition(): ComputedColumnDefinitionContext {
		let _localctx: ComputedColumnDefinitionContext = new ComputedColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, FlinkSqlParser.RULE_computedColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 739;
			this.columnName();
			this.state = 740;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 741;
			this.computedColumnExpression();
			this.state = 743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_COMMENT) {
				{
				this.state = 742;
				this.commentSpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public computedColumnExpression(): ComputedColumnExpressionContext {
		let _localctx: ComputedColumnExpressionContext = new ComputedColumnExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, FlinkSqlParser.RULE_computedColumnExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 745;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public watermarkDefinition(): WatermarkDefinitionContext {
		let _localctx: WatermarkDefinitionContext = new WatermarkDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, FlinkSqlParser.RULE_watermarkDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			this.match(FlinkSqlParser.KW_WATERMARK);
			this.state = 748;
			this.match(FlinkSqlParser.KW_FOR);
			this.state = 749;
			this.expression();
			this.state = 750;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 751;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableConstraint(): TableConstraintContext {
		let _localctx: TableConstraintContext = new TableConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, FlinkSqlParser.RULE_tableConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 755;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_CONSTRAINT) {
				{
				this.state = 753;
				this.match(FlinkSqlParser.KW_CONSTRAINT);
				this.state = 754;
				this.constraintName();
				}
			}

			this.state = 757;
			this.match(FlinkSqlParser.KW_PRIMARY);
			this.state = 758;
			this.match(FlinkSqlParser.KW_KEY);
			this.state = 759;
			this.columnNameList();
			this.state = 760;
			this.match(FlinkSqlParser.KW_NOT);
			this.state = 761;
			this.match(FlinkSqlParser.KW_ENFORCED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraintName(): ConstraintNameContext {
		let _localctx: ConstraintNameContext = new ConstraintNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, FlinkSqlParser.RULE_constraintName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 763;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selfDefinitionClause(): SelfDefinitionClauseContext {
		let _localctx: SelfDefinitionClauseContext = new SelfDefinitionClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, FlinkSqlParser.RULE_selfDefinitionClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 765;
			this.match(FlinkSqlParser.KW_PERIOD);
			this.state = 766;
			this.match(FlinkSqlParser.KW_FOR);
			this.state = 767;
			this.match(FlinkSqlParser.KW_SYSTEM_TIME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partitionDefinition(): PartitionDefinitionContext {
		let _localctx: PartitionDefinitionContext = new PartitionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, FlinkSqlParser.RULE_partitionDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 769;
			this.match(FlinkSqlParser.KW_PARTITIONED);
			this.state = 770;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 771;
			this.transformList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transformList(): TransformListContext {
		let _localctx: TransformListContext = new TransformListContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, FlinkSqlParser.RULE_transformList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 773;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 774;
			this.transform();
			this.state = 779;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 775;
				this.match(FlinkSqlParser.COMMA);
				this.state = 776;
				this.transform();
				}
				}
				this.state = 781;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 782;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transform(): TransformContext {
		let _localctx: TransformContext = new TransformContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, FlinkSqlParser.RULE_transform);
		let _la: number;
		try {
			this.state = 797;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				_localctx = new IdentityTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 784;
				this.qualifiedName();
				}
				break;

			case 2:
				_localctx = new ApplyTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 785;
				(_localctx as ApplyTransformContext)._transformName = this.identifier();
				this.state = 786;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 787;
				this.transformArgument();
				this.state = 792;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 788;
					this.match(FlinkSqlParser.COMMA);
					this.state = 789;
					this.transformArgument();
					}
					}
					this.state = 794;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 795;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transformArgument(): TransformArgumentContext {
		let _localctx: TransformArgumentContext = new TransformArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, FlinkSqlParser.RULE_transformArgument);
		try {
			this.state = 801;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 799;
				this.qualifiedName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 800;
				this.constant();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public likeDefinition(): LikeDefinitionContext {
		let _localctx: LikeDefinitionContext = new LikeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, FlinkSqlParser.RULE_likeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 803;
			this.match(FlinkSqlParser.KW_LIKE);
			this.state = 804;
			this.sourceTable();
			this.state = 813;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 805;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 809;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.KW_EXCLUDING || _la === FlinkSqlParser.KW_OVERWRITING || _la === FlinkSqlParser.KW_INCLUDING) {
					{
					{
					this.state = 806;
					this.likeOption();
					}
					}
					this.state = 811;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 812;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceTable(): SourceTableContext {
		let _localctx: SourceTableContext = new SourceTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, FlinkSqlParser.RULE_sourceTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 815;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public likeOption(): LikeOptionContext {
		let _localctx: LikeOptionContext = new LikeOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, FlinkSqlParser.RULE_likeOption);
		let _la: number;
		try {
			this.state = 821;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 817;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_EXCLUDING || _la === FlinkSqlParser.KW_INCLUDING)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 818;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_CONSTRAINTS || _la === FlinkSqlParser.KW_PARTITIONS || _la === FlinkSqlParser.KW_ALL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 819;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_EXCLUDING || _la === FlinkSqlParser.KW_OVERWRITING || _la === FlinkSqlParser.KW_INCLUDING)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 820;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_GENERATED || _la === FlinkSqlParser.KW_OPTIONS || _la === FlinkSqlParser.KW_WATERMARKS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createCatalog(): CreateCatalogContext {
		let _localctx: CreateCatalogContext = new CreateCatalogContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, FlinkSqlParser.RULE_createCatalog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 823;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 824;
			this.match(FlinkSqlParser.KW_CATALOG);
			this.state = 825;
			this.uid();
			this.state = 826;
			this.withOption();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createDatabase(): CreateDatabaseContext {
		let _localctx: CreateDatabaseContext = new CreateDatabaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, FlinkSqlParser.RULE_createDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 828;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 829;
			this.match(FlinkSqlParser.KW_DATABASE);
			this.state = 831;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 830;
				this.ifNotExists();
				}
				break;
			}
			this.state = 833;
			this.uid();
			this.state = 835;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_COMMENT) {
				{
				this.state = 834;
				this.commentSpec();
				}
			}

			this.state = 837;
			this.withOption();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createView(): CreateViewContext {
		let _localctx: CreateViewContext = new CreateViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, FlinkSqlParser.RULE_createView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 839;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 841;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_TEMPORARY) {
				{
				this.state = 840;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 843;
			this.match(FlinkSqlParser.KW_VIEW);
			this.state = 845;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 844;
				this.ifNotExists();
				}
				break;
			}
			this.state = 847;
			this.uid();
			this.state = 849;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.LR_BRACKET) {
				{
				this.state = 848;
				this.columnNameList();
				}
			}

			this.state = 852;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_COMMENT) {
				{
				this.state = 851;
				this.commentSpec();
				}
			}

			this.state = 854;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 855;
			this.queryStatement(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createFunction(): CreateFunctionContext {
		let _localctx: CreateFunctionContext = new CreateFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, FlinkSqlParser.RULE_createFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 857;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 861;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 858;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 859;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				this.state = 860;
				this.match(FlinkSqlParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 863;
			this.match(FlinkSqlParser.KW_FUNCTION);
			this.state = 865;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 864;
				this.ifNotExists();
				}
				break;
			}
			this.state = 867;
			this.uid();
			this.state = 868;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 869;
			this.identifier();
			this.state = 872;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_LANGUAGE) {
				{
				this.state = 870;
				this.match(FlinkSqlParser.KW_LANGUAGE);
				this.state = 871;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_JAVA || _la === FlinkSqlParser.KW_PYTHON || _la === FlinkSqlParser.KW_SCALA)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 875;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_USING) {
				{
				this.state = 874;
				this.usingClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingClause(): UsingClauseContext {
		let _localctx: UsingClauseContext = new UsingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, FlinkSqlParser.RULE_usingClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 877;
			this.match(FlinkSqlParser.KW_USING);
			this.state = 878;
			this.match(FlinkSqlParser.KW_JAR);
			this.state = 879;
			this.jarFileName();
			this.state = 885;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 880;
				this.match(FlinkSqlParser.COMMA);
				this.state = 881;
				this.match(FlinkSqlParser.KW_JAR);
				this.state = 882;
				this.jarFileName();
				}
				}
				this.state = 887;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jarFileName(): JarFileNameContext {
		let _localctx: JarFileNameContext = new JarFileNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, FlinkSqlParser.RULE_jarFileName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 888;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterTable(): AlterTableContext {
		let _localctx: AlterTableContext = new AlterTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, FlinkSqlParser.RULE_alterTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 890;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 891;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 893;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				{
				this.state = 892;
				this.ifExists();
				}
				break;
			}
			this.state = 895;
			this.uid();
			this.state = 901;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 896;
				this.renameDefinition();
				}
				break;

			case 2:
				{
				this.state = 897;
				this.setKeyValueDefinition();
				}
				break;

			case 3:
				{
				this.state = 898;
				this.addConstraint();
				}
				break;

			case 4:
				{
				this.state = 899;
				this.dropConstraint();
				}
				break;

			case 5:
				{
				this.state = 900;
				this.addUnique();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public renameDefinition(): RenameDefinitionContext {
		let _localctx: RenameDefinitionContext = new RenameDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, FlinkSqlParser.RULE_renameDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 903;
			this.match(FlinkSqlParser.KW_RENAME);
			this.state = 905;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSqlParser.KW_ADD) | (1 << FlinkSqlParser.KW_ADMIN) | (1 << FlinkSqlParser.KW_AFTER) | (1 << FlinkSqlParser.KW_ANALYZE) | (1 << FlinkSqlParser.KW_ASC) | (1 << FlinkSqlParser.KW_BEFORE) | (1 << FlinkSqlParser.KW_BYTES) | (1 << FlinkSqlParser.KW_CASCADE) | (1 << FlinkSqlParser.KW_CATALOG) | (1 << FlinkSqlParser.KW_CATALOGS) | (1 << FlinkSqlParser.KW_CENTURY) | (1 << FlinkSqlParser.KW_CHAIN) | (1 << FlinkSqlParser.KW_CHANGELOG_MODE) | (1 << FlinkSqlParser.KW_CHARACTERS) | (1 << FlinkSqlParser.KW_COMMENT) | (1 << FlinkSqlParser.KW_COMPACT) | (1 << FlinkSqlParser.KW_COLUMNS) | (1 << FlinkSqlParser.KW_CONSTRAINTS) | (1 << FlinkSqlParser.KW_CONSTRUCTOR) | (1 << FlinkSqlParser.KW_CUMULATE) | (1 << FlinkSqlParser.KW_DATA) | (1 << FlinkSqlParser.KW_DATABASE) | (1 << FlinkSqlParser.KW_DATABASES) | (1 << FlinkSqlParser.KW_DAYS) | (1 << FlinkSqlParser.KW_DECADE) | (1 << FlinkSqlParser.KW_DEFINED) | (1 << FlinkSqlParser.KW_DESC) | (1 << FlinkSqlParser.KW_DESCRIPTOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSqlParser.KW_DIV - 32)) | (1 << (FlinkSqlParser.KW_ENCODING - 32)) | (1 << (FlinkSqlParser.KW_ENFORCED - 32)) | (1 << (FlinkSqlParser.KW_ENGINE - 32)) | (1 << (FlinkSqlParser.KW_ERROR - 32)) | (1 << (FlinkSqlParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSqlParser.KW_EXCEPTION - 32)) | (1 << (FlinkSqlParser.KW_EXCLUDE - 32)) | (1 << (FlinkSqlParser.KW_EXCLUDING - 32)) | (1 << (FlinkSqlParser.KW_EXTENDED - 32)) | (1 << (FlinkSqlParser.KW_FILE - 32)) | (1 << (FlinkSqlParser.KW_FINAL - 32)) | (1 << (FlinkSqlParser.KW_FIRST - 32)) | (1 << (FlinkSqlParser.KW_FOLLOWING - 32)) | (1 << (FlinkSqlParser.KW_FORMAT - 32)) | (1 << (FlinkSqlParser.KW_FORTRAN - 32)) | (1 << (FlinkSqlParser.KW_FOUND - 32)) | (1 << (FlinkSqlParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSqlParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSqlParser.KW_GENERAL - 32)) | (1 << (FlinkSqlParser.KW_GENERATED - 32)) | (1 << (FlinkSqlParser.KW_GO - 32)) | (1 << (FlinkSqlParser.KW_GOTO - 32)) | (1 << (FlinkSqlParser.KW_GRANTED - 32)) | (1 << (FlinkSqlParser.KW_HOP - 32)) | (1 << (FlinkSqlParser.KW_HOURS - 32)) | (1 << (FlinkSqlParser.KW_IF - 32)) | (1 << (FlinkSqlParser.KW_IGNORE - 32)) | (1 << (FlinkSqlParser.KW_INCREMENT - 32)) | (1 << (FlinkSqlParser.KW_INPUT - 32)) | (1 << (FlinkSqlParser.KW_INVOKER - 32)) | (1 << (FlinkSqlParser.KW_JAR - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSqlParser.KW_JARS - 64)) | (1 << (FlinkSqlParser.KW_JAVA - 64)) | (1 << (FlinkSqlParser.KW_JSON - 64)) | (1 << (FlinkSqlParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSqlParser.KW_KEY - 64)) | (1 << (FlinkSqlParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSqlParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSqlParser.KW_LABEL - 64)) | (1 << (FlinkSqlParser.KW_LAST - 64)) | (1 << (FlinkSqlParser.KW_LENGTH - 64)) | (1 << (FlinkSqlParser.KW_LEVEL - 64)) | (1 << (FlinkSqlParser.KW_LOAD - 64)) | (1 << (FlinkSqlParser.KW_MAP - 64)) | (1 << (FlinkSqlParser.KW_MICROSECOND - 64)) | (1 << (FlinkSqlParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSqlParser.KW_MILLISECOND - 64)) | (1 << (FlinkSqlParser.KW_MINUTES - 64)) | (1 << (FlinkSqlParser.KW_MINVALUE - 64)) | (1 << (FlinkSqlParser.KW_MODIFY - 64)) | (1 << (FlinkSqlParser.KW_MODULES - 64)) | (1 << (FlinkSqlParser.KW_MONTHS - 64)) | (1 << (FlinkSqlParser.KW_NANOSECOND - 64)) | (1 << (FlinkSqlParser.KW_NULLS - 64)) | (1 << (FlinkSqlParser.KW_NUMBER - 64)) | (1 << (FlinkSqlParser.KW_OPTION - 64)) | (1 << (FlinkSqlParser.KW_OPTIONS - 64)) | (1 << (FlinkSqlParser.KW_ORDERING - 64)) | (1 << (FlinkSqlParser.KW_OUTPUT - 64)) | (1 << (FlinkSqlParser.KW_OVERWRITE - 64)) | (1 << (FlinkSqlParser.KW_OVERWRITING - 64)) | (1 << (FlinkSqlParser.KW_PARTITIONED - 64)) | (1 << (FlinkSqlParser.KW_PARTITIONS - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSqlParser.KW_PASSING - 96)) | (1 << (FlinkSqlParser.KW_PAST - 96)) | (1 << (FlinkSqlParser.KW_PATH - 96)) | (1 << (FlinkSqlParser.KW_PLACING - 96)) | (1 << (FlinkSqlParser.KW_PLAN - 96)) | (1 << (FlinkSqlParser.KW_PRECEDING - 96)) | (1 << (FlinkSqlParser.KW_PRESERVE - 96)) | (1 << (FlinkSqlParser.KW_PRIOR - 96)) | (1 << (FlinkSqlParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSqlParser.KW_PUBLIC - 96)) | (1 << (FlinkSqlParser.KW_PYTHON - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSqlParser.KW_QUARTER - 96)) | (1 << (FlinkSqlParser.KW_RAW - 96)) | (1 << (FlinkSqlParser.KW_READ - 96)) | (1 << (FlinkSqlParser.KW_RELATIVE - 96)) | (1 << (FlinkSqlParser.KW_REMOVE - 96)) | (1 << (FlinkSqlParser.KW_RENAME - 96)) | (1 << (FlinkSqlParser.KW_REPLACE - 96)) | (1 << (FlinkSqlParser.KW_RESPECT - 96)) | (1 << (FlinkSqlParser.KW_RESTART - 96)) | (1 << (FlinkSqlParser.KW_RESTRICT - 96)) | (1 << (FlinkSqlParser.KW_ROLE - 96)) | (1 << (FlinkSqlParser.KW_ROW_COUNT - 96)) | (1 << (FlinkSqlParser.KW_SCALA - 96)) | (1 << (FlinkSqlParser.KW_SCALAR - 96)) | (1 << (FlinkSqlParser.KW_SCALE - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSqlParser.KW_SCHEMA - 128)) | (1 << (FlinkSqlParser.KW_SECONDS - 128)) | (1 << (FlinkSqlParser.KW_SECTION - 128)) | (1 << (FlinkSqlParser.KW_SECURITY - 128)) | (1 << (FlinkSqlParser.KW_SELF - 128)) | (1 << (FlinkSqlParser.KW_SERVER - 128)) | (1 << (FlinkSqlParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSqlParser.KW_SESSION - 128)) | (1 << (FlinkSqlParser.KW_SETS - 128)) | (1 << (FlinkSqlParser.KW_SIMPLE - 128)) | (1 << (FlinkSqlParser.KW_SIZE - 128)) | (1 << (FlinkSqlParser.KW_SLIDE - 128)) | (1 << (FlinkSqlParser.KW_SOURCE - 128)) | (1 << (FlinkSqlParser.KW_SPACE - 128)) | (1 << (FlinkSqlParser.KW_STATE - 128)) | (1 << (FlinkSqlParser.KW_STATEMENT - 128)) | (1 << (FlinkSqlParser.KW_STEP - 128)) | (1 << (FlinkSqlParser.KW_STRING - 128)) | (1 << (FlinkSqlParser.KW_STRUCTURE - 128)) | (1 << (FlinkSqlParser.KW_STYLE - 128)) | (1 << (FlinkSqlParser.KW_TABLES - 128)) | (1 << (FlinkSqlParser.KW_TEMPORARY - 128)) | (1 << (FlinkSqlParser.KW_TIMECOL - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSqlParser.KW_TRANSFORM - 128)) | (1 << (FlinkSqlParser.KW_TUMBLE - 128)) | (1 << (FlinkSqlParser.KW_TYPE - 128)) | (1 << (FlinkSqlParser.KW_UNDER - 128)) | (1 << (FlinkSqlParser.KW_UNLOAD - 128)) | (1 << (FlinkSqlParser.KW_USAGE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSqlParser.KW_USE - 160)) | (1 << (FlinkSqlParser.KW_UTF16 - 160)) | (1 << (FlinkSqlParser.KW_UTF32 - 160)) | (1 << (FlinkSqlParser.KW_UTF8 - 160)) | (1 << (FlinkSqlParser.KW_VERSION - 160)) | (1 << (FlinkSqlParser.KW_VIEW - 160)) | (1 << (FlinkSqlParser.KW_VIEWS - 160)) | (1 << (FlinkSqlParser.KW_VIRTUAL - 160)) | (1 << (FlinkSqlParser.KW_WATERMARK - 160)) | (1 << (FlinkSqlParser.KW_WATERMARKS - 160)) | (1 << (FlinkSqlParser.KW_WEEK - 160)) | (1 << (FlinkSqlParser.KW_WORK - 160)) | (1 << (FlinkSqlParser.KW_WRAPPER - 160)) | (1 << (FlinkSqlParser.KW_YEARS - 160)) | (1 << (FlinkSqlParser.KW_ZONE - 160)))) !== 0) || ((((_la - 397)) & ~0x1F) === 0 && ((1 << (_la - 397)) & ((1 << (FlinkSqlParser.STRING_LITERAL - 397)) | (1 << (FlinkSqlParser.DIG_LITERAL - 397)) | (1 << (FlinkSqlParser.ID_LITERAL - 397)))) !== 0)) {
				{
				this.state = 904;
				this.uid();
				}
			}

			this.state = 907;
			this.match(FlinkSqlParser.KW_TO);
			this.state = 908;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setKeyValueDefinition(): SetKeyValueDefinitionContext {
		let _localctx: SetKeyValueDefinitionContext = new SetKeyValueDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, FlinkSqlParser.RULE_setKeyValueDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 910;
			this.match(FlinkSqlParser.KW_SET);
			this.state = 911;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addConstraint(): AddConstraintContext {
		let _localctx: AddConstraintContext = new AddConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, FlinkSqlParser.RULE_addConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 913;
			this.match(FlinkSqlParser.KW_ADD);
			this.state = 914;
			this.match(FlinkSqlParser.KW_CONSTRAINT);
			this.state = 915;
			this.constraintName();
			this.state = 916;
			this.match(FlinkSqlParser.KW_PRIMARY);
			this.state = 917;
			this.match(FlinkSqlParser.KW_KEY);
			this.state = 918;
			this.columnNameList();
			this.state = 920;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_NOT) {
				{
				this.state = 919;
				this.notForced();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropConstraint(): DropConstraintContext {
		let _localctx: DropConstraintContext = new DropConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, FlinkSqlParser.RULE_dropConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 922;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 923;
			this.match(FlinkSqlParser.KW_CONSTRAINT);
			this.state = 924;
			this.constraintName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addUnique(): AddUniqueContext {
		let _localctx: AddUniqueContext = new AddUniqueContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, FlinkSqlParser.RULE_addUnique);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 926;
			this.match(FlinkSqlParser.KW_ADD);
			this.state = 927;
			this.match(FlinkSqlParser.KW_UNIQUE);
			this.state = 928;
			this.columnNameList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public notForced(): NotForcedContext {
		let _localctx: NotForcedContext = new NotForcedContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, FlinkSqlParser.RULE_notForced);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 930;
			this.match(FlinkSqlParser.KW_NOT);
			this.state = 931;
			this.match(FlinkSqlParser.KW_ENFORCED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alertView(): AlertViewContext {
		let _localctx: AlertViewContext = new AlertViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, FlinkSqlParser.RULE_alertView);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 933;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 934;
			this.match(FlinkSqlParser.KW_VIEW);
			this.state = 935;
			this.uid();
			this.state = 939;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_RENAME:
				{
				this.state = 936;
				this.renameDefinition();
				}
				break;
			case FlinkSqlParser.KW_AS:
				{
				this.state = 937;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 938;
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterDatabase(): AlterDatabaseContext {
		let _localctx: AlterDatabaseContext = new AlterDatabaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, FlinkSqlParser.RULE_alterDatabase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 941;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 942;
			this.match(FlinkSqlParser.KW_DATABASE);
			this.state = 943;
			this.uid();
			this.state = 944;
			this.setKeyValueDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterFunction(): AlterFunctionContext {
		let _localctx: AlterFunctionContext = new AlterFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, FlinkSqlParser.RULE_alterFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 946;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 950;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 947;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 948;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				this.state = 949;
				this.match(FlinkSqlParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 952;
			this.match(FlinkSqlParser.KW_FUNCTION);
			this.state = 954;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 953;
				this.ifExists();
				}
				break;
			}
			this.state = 956;
			this.uid();
			this.state = 957;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 958;
			this.identifier();
			this.state = 961;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_LANGUAGE) {
				{
				this.state = 959;
				this.match(FlinkSqlParser.KW_LANGUAGE);
				this.state = 960;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_JAVA || _la === FlinkSqlParser.KW_PYTHON || _la === FlinkSqlParser.KW_SCALA)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropCatalog(): DropCatalogContext {
		let _localctx: DropCatalogContext = new DropCatalogContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, FlinkSqlParser.RULE_dropCatalog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 963;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 964;
			this.match(FlinkSqlParser.KW_CATALOG);
			this.state = 966;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 965;
				this.ifExists();
				}
				break;
			}
			this.state = 968;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropTable(): DropTableContext {
		let _localctx: DropTableContext = new DropTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, FlinkSqlParser.RULE_dropTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 970;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 972;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_TEMPORARY) {
				{
				this.state = 971;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 974;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 976;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 975;
				this.ifExists();
				}
				break;
			}
			this.state = 978;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropDatabase(): DropDatabaseContext {
		let _localctx: DropDatabaseContext = new DropDatabaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, FlinkSqlParser.RULE_dropDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 980;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 981;
			this.match(FlinkSqlParser.KW_DATABASE);
			this.state = 983;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 982;
				this.ifExists();
				}
				break;
			}
			this.state = 985;
			this.uid();
			this.state = 987;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_CASCADE || _la === FlinkSqlParser.KW_RESTRICT) {
				{
				this.state = 986;
				_localctx._dropType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_CASCADE || _la === FlinkSqlParser.KW_RESTRICT)) {
					_localctx._dropType = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropView(): DropViewContext {
		let _localctx: DropViewContext = new DropViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, FlinkSqlParser.RULE_dropView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 989;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 991;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_TEMPORARY) {
				{
				this.state = 990;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 993;
			this.match(FlinkSqlParser.KW_VIEW);
			this.state = 995;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				{
				this.state = 994;
				this.ifExists();
				}
				break;
			}
			this.state = 997;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropFunction(): DropFunctionContext {
		let _localctx: DropFunctionContext = new DropFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, FlinkSqlParser.RULE_dropFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 999;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 1003;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 1000;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 1001;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				this.state = 1002;
				this.match(FlinkSqlParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 1005;
			this.match(FlinkSqlParser.KW_FUNCTION);
			this.state = 1007;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				{
				this.state = 1006;
				this.ifExists();
				}
				break;
			}
			this.state = 1009;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertStatement(): InsertStatementContext {
		let _localctx: InsertStatementContext = new InsertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, FlinkSqlParser.RULE_insertStatement);
		let _la: number;
		try {
			this.state = 1017;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1012;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_EXECUTE) {
					{
					this.state = 1011;
					this.match(FlinkSqlParser.KW_EXECUTE);
					}
				}

				this.state = 1014;
				this.insertSimpleStatement();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1015;
				this.match(FlinkSqlParser.KW_EXECUTE);
				this.state = 1016;
				this.insertMulStatement();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertSimpleStatement(): InsertSimpleStatementContext {
		let _localctx: InsertSimpleStatementContext = new InsertSimpleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, FlinkSqlParser.RULE_insertSimpleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1019;
			this.match(FlinkSqlParser.KW_INSERT);
			this.state = 1020;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_OVERWRITE || _la === FlinkSqlParser.KW_INTO)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1021;
			this.uid();
			this.state = 1030;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				{
				this.state = 1023;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_PARTITION) {
					{
					this.state = 1022;
					this.insertPartitionDefinition();
					}
				}

				this.state = 1026;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
				case 1:
					{
					this.state = 1025;
					this.columnNameList();
					}
					break;
				}
				this.state = 1028;
				this.queryStatement(0);
				}
				break;

			case 2:
				{
				this.state = 1029;
				this.valuesDefinition();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertPartitionDefinition(): InsertPartitionDefinitionContext {
		let _localctx: InsertPartitionDefinitionContext = new InsertPartitionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, FlinkSqlParser.RULE_insertPartitionDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1032;
			this.match(FlinkSqlParser.KW_PARTITION);
			this.state = 1033;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valuesDefinition(): ValuesDefinitionContext {
		let _localctx: ValuesDefinitionContext = new ValuesDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, FlinkSqlParser.RULE_valuesDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1035;
			this.match(FlinkSqlParser.KW_VALUES);
			this.state = 1036;
			this.valuesRowDefinition();
			this.state = 1041;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1037;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1038;
				this.valuesRowDefinition();
				}
				}
				this.state = 1043;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valuesRowDefinition(): ValuesRowDefinitionContext {
		let _localctx: ValuesRowDefinitionContext = new ValuesRowDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, FlinkSqlParser.RULE_valuesRowDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1044;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1045;
			this.constant();
			this.state = 1050;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1046;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1047;
				this.constant();
				}
				}
				this.state = 1052;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1053;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertMulStatement(): InsertMulStatementContext {
		let _localctx: InsertMulStatementContext = new InsertMulStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, FlinkSqlParser.RULE_insertMulStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1055;
			this.match(FlinkSqlParser.KW_STATEMENT);
			this.state = 1056;
			this.match(FlinkSqlParser.KW_SET);
			this.state = 1057;
			this.match(FlinkSqlParser.KW_BEGIN);
			this.state = 1061;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1058;
				this.insertSimpleStatement();
				this.state = 1059;
				this.match(FlinkSqlParser.SEMICOLON);
				}
				}
				this.state = 1063;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSqlParser.KW_INSERT);
			this.state = 1065;
			this.match(FlinkSqlParser.KW_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
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
		let _localctx: QueryStatementContext = new QueryStatementContext(this._ctx, _parentState);
		let _prevctx: QueryStatementContext = _localctx;
		let _startState: number = 156;
		this.enterRecursionRule(_localctx, 156, FlinkSqlParser.RULE_queryStatement, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1090;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 1068;
				this.valuesCaluse();
				}
				break;

			case 2:
				{
				this.state = 1069;
				this.withClause();
				this.state = 1070;
				this.queryStatement(5);
				}
				break;

			case 3:
				{
				this.state = 1072;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1073;
				this.queryStatement(0);
				this.state = 1074;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				{
				this.state = 1076;
				this.selectClause();
				this.state = 1078;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
				case 1:
					{
					this.state = 1077;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1081;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 1080;
					this.limitClause();
					}
					break;
				}
				}
				break;

			case 5:
				{
				this.state = 1083;
				this.selectStatement();
				this.state = 1085;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
				case 1:
					{
					this.state = 1084;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1088;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
				case 1:
					{
					this.state = 1087;
					this.limitClause();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1106;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new QueryStatementContext(_parentctx, _parentState);
					_localctx._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_queryStatement);
					this.state = 1092;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 1093;
					_localctx._operator = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === FlinkSqlParser.KW_EXCEPT || _la === FlinkSqlParser.KW_INTERSECT || _la === FlinkSqlParser.KW_UNION)) {
						_localctx._operator = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1095;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSqlParser.KW_ALL) {
						{
						this.state = 1094;
						this.match(FlinkSqlParser.KW_ALL);
						}
					}

					this.state = 1097;
					_localctx._right = this.queryStatement(0);
					this.state = 1099;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
					case 1:
						{
						this.state = 1098;
						this.orderByCaluse();
						}
						break;
					}
					this.state = 1102;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
					case 1:
						{
						this.state = 1101;
						this.limitClause();
						}
						break;
					}
					}
					}
				}
				this.state = 1108;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valuesCaluse(): ValuesCaluseContext {
		let _localctx: ValuesCaluseContext = new ValuesCaluseContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, FlinkSqlParser.RULE_valuesCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1109;
			this.match(FlinkSqlParser.KW_VALUES);
			this.state = 1110;
			this.expression();
			this.state = 1115;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1111;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1112;
					this.expression();
					}
					}
				}
				this.state = 1117;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withClause(): WithClauseContext {
		let _localctx: WithClauseContext = new WithClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, FlinkSqlParser.RULE_withClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1118;
			this.match(FlinkSqlParser.KW_WITH);
			this.state = 1119;
			this.withItem();
			this.state = 1124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1120;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1121;
				this.withItem();
				}
				}
				this.state = 1126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withItem(): WithItemContext {
		let _localctx: WithItemContext = new WithItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, FlinkSqlParser.RULE_withItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1127;
			this.withItemName();
			this.state = 1139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.LR_BRACKET) {
				{
				this.state = 1128;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1129;
				this.columnName();
				this.state = 1134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1130;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1131;
					this.columnName();
					}
					}
					this.state = 1136;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1137;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
			}

			this.state = 1141;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 1142;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1143;
			this.queryStatement(0);
			this.state = 1144;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withItemName(): WithItemNameContext {
		let _localctx: WithItemNameContext = new WithItemNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, FlinkSqlParser.RULE_withItemName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1146;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectStatement(): SelectStatementContext {
		let _localctx: SelectStatementContext = new SelectStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, FlinkSqlParser.RULE_selectStatement);
		try {
			this.state = 1166;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1148;
				this.selectClause();
				this.state = 1149;
				this.fromClause();
				this.state = 1151;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
				case 1:
					{
					this.state = 1150;
					this.whereClause();
					}
					break;
				}
				this.state = 1154;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
				case 1:
					{
					this.state = 1153;
					this.groupByClause();
					}
					break;
				}
				this.state = 1157;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
				case 1:
					{
					this.state = 1156;
					this.havingClause();
					}
					break;
				}
				this.state = 1160;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
				case 1:
					{
					this.state = 1159;
					this.windowClause();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1162;
				this.selectClause();
				this.state = 1163;
				this.fromClause();
				this.state = 1164;
				this.matchRecognizeClause();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectClause(): SelectClauseContext {
		let _localctx: SelectClauseContext = new SelectClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, FlinkSqlParser.RULE_selectClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1168;
			this.match(FlinkSqlParser.KW_SELECT);
			this.state = 1170;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				{
				this.state = 1169;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1181;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				{
				this.state = 1172;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;

			case 2:
				{
				this.state = 1173;
				this.projectItemDefinition();
				this.state = 1178;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1174;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1175;
						this.projectItemDefinition();
						}
						}
					}
					this.state = 1180;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public projectItemDefinition(): ProjectItemDefinitionContext {
		let _localctx: ProjectItemDefinitionContext = new ProjectItemDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, FlinkSqlParser.RULE_projectItemDefinition);
		try {
			this.state = 1191;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1183;
				this.overWindowItem();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1184;
				this.expression();
				this.state = 1189;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
				case 1:
					{
					this.state = 1186;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
					case 1:
						{
						this.state = 1185;
						this.match(FlinkSqlParser.KW_AS);
						}
						break;
					}
					this.state = 1188;
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overWindowItem(): OverWindowItemContext {
		let _localctx: OverWindowItemContext = new OverWindowItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, FlinkSqlParser.RULE_overWindowItem);
		try {
			this.state = 1205;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1193;
				this.primaryExpression(0);
				this.state = 1194;
				this.match(FlinkSqlParser.KW_OVER);
				this.state = 1195;
				this.windowSpec();
				this.state = 1196;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 1197;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1199;
				this.primaryExpression(0);
				this.state = 1200;
				this.match(FlinkSqlParser.KW_OVER);
				this.state = 1201;
				this.errorCapturingIdentifier();
				this.state = 1202;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 1203;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromClause(): FromClauseContext {
		let _localctx: FromClauseContext = new FromClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, FlinkSqlParser.RULE_fromClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1207;
			this.match(FlinkSqlParser.KW_FROM);
			this.state = 1208;
			this.tableExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
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
		let _localctx: TableExpressionContext = new TableExpressionContext(this._ctx, _parentState);
		let _prevctx: TableExpressionContext = _localctx;
		let _startState: number = 176;
		this.enterRecursionRule(_localctx, 176, FlinkSqlParser.RULE_tableExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1221;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				{
				this.state = 1211;
				this.tableReference();
				this.state = 1216;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1212;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1213;
						this.tableReference();
						}
						}
					}
					this.state = 1218;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
				}
				}
				break;

			case 2:
				{
				this.state = 1219;
				this.inlineDataValueClause();
				}
				break;

			case 3:
				{
				this.state = 1220;
				this.windoTVFClause();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1244;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1242;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
					case 1:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_tableExpression);
						this.state = 1223;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1224;
						this.match(FlinkSqlParser.KW_CROSS);
						this.state = 1225;
						this.match(FlinkSqlParser.KW_JOIN);
						this.state = 1226;
						this.tableExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_tableExpression);
						this.state = 1227;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1229;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSqlParser.KW_NATURAL) {
							{
							this.state = 1228;
							this.match(FlinkSqlParser.KW_NATURAL);
							}
						}

						this.state = 1232;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 249)) & ~0x1F) === 0 && ((1 << (_la - 249)) & ((1 << (FlinkSqlParser.KW_FULL - 249)) | (1 << (FlinkSqlParser.KW_INNER - 249)) | (1 << (FlinkSqlParser.KW_LEFT - 249)))) !== 0) || _la === FlinkSqlParser.KW_RIGHT) {
							{
							this.state = 1231;
							_la = this._input.LA(1);
							if (!(((((_la - 249)) & ~0x1F) === 0 && ((1 << (_la - 249)) & ((1 << (FlinkSqlParser.KW_FULL - 249)) | (1 << (FlinkSqlParser.KW_INNER - 249)) | (1 << (FlinkSqlParser.KW_LEFT - 249)))) !== 0) || _la === FlinkSqlParser.KW_RIGHT)) {
							this._errHandler.recoverInline(this);
							} else {
								if (this._input.LA(1) === Token.EOF) {
									this.matchedEOF = true;
								}

								this._errHandler.reportMatch(this);
								this.consume();
							}
							}
						}

						this.state = 1235;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSqlParser.KW_OUTER) {
							{
							this.state = 1234;
							this.match(FlinkSqlParser.KW_OUTER);
							}
						}

						this.state = 1237;
						this.match(FlinkSqlParser.KW_JOIN);
						this.state = 1238;
						this.tableExpression(0);
						this.state = 1240;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
						case 1:
							{
							this.state = 1239;
							this.joinCondition();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1246;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableReference(): TableReferenceContext {
		let _localctx: TableReferenceContext = new TableReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, FlinkSqlParser.RULE_tableReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1247;
			this.tablePrimary();
			this.state = 1249;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				{
				this.state = 1248;
				this.tableAlias();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePrimary(): TablePrimaryContext {
		let _localctx: TablePrimaryContext = new TablePrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, FlinkSqlParser.RULE_tablePrimary);
		let _la: number;
		try {
			this.state = 1292;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_TABLE) {
					{
					this.state = 1251;
					this.match(FlinkSqlParser.KW_TABLE);
					}
				}

				this.state = 1254;
				this.tablePath();
				this.state = 1256;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
				case 1:
					{
					this.state = 1255;
					this.systemTimePeriod();
					}
					break;
				}
				this.state = 1262;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
				case 1:
					{
					this.state = 1259;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSqlParser.KW_AS) {
						{
						this.state = 1258;
						this.match(FlinkSqlParser.KW_AS);
						}
					}

					this.state = 1261;
					this.correlationName();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1264;
				this.match(FlinkSqlParser.KW_LATERAL);
				this.state = 1265;
				this.match(FlinkSqlParser.KW_TABLE);
				this.state = 1266;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1267;
				this.functionName();
				this.state = 1268;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1269;
				this.expression();
				this.state = 1274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
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
				this.state = 1278;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_LATERAL) {
					{
					this.state = 1280;
					this.match(FlinkSqlParser.KW_LATERAL);
					}
				}

				this.state = 1283;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1284;
				this.queryStatement(0);
				this.state = 1285;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1287;
				this.match(FlinkSqlParser.KW_UNNEST);
				this.state = 1288;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1289;
				this.expression();
				this.state = 1290;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePath(): TablePathContext {
		let _localctx: TablePathContext = new TablePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, FlinkSqlParser.RULE_tablePath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1294;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public systemTimePeriod(): SystemTimePeriodContext {
		let _localctx: SystemTimePeriodContext = new SystemTimePeriodContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, FlinkSqlParser.RULE_systemTimePeriod);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1296;
			this.match(FlinkSqlParser.KW_FOR);
			this.state = 1297;
			this.match(FlinkSqlParser.KW_SYSTEM_TIME);
			this.state = 1298;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 1299;
			this.match(FlinkSqlParser.KW_OF);
			this.state = 1300;
			this.dateTimeExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateTimeExpression(): DateTimeExpressionContext {
		let _localctx: DateTimeExpressionContext = new DateTimeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, FlinkSqlParser.RULE_dateTimeExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1302;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inlineDataValueClause(): InlineDataValueClauseContext {
		let _localctx: InlineDataValueClauseContext = new InlineDataValueClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, FlinkSqlParser.RULE_inlineDataValueClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1304;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1305;
			this.valuesDefinition();
			this.state = 1306;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 1307;
			this.tableAlias();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windoTVFClause(): WindoTVFClauseContext {
		let _localctx: WindoTVFClauseContext = new WindoTVFClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, FlinkSqlParser.RULE_windoTVFClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1309;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 1310;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1311;
			this.windowTVFExression();
			this.state = 1312;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowTVFExression(): WindowTVFExressionContext {
		let _localctx: WindowTVFExressionContext = new WindowTVFExressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, FlinkSqlParser.RULE_windowTVFExression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1314;
			this.windoTVFName();
			this.state = 1315;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1316;
			this.windowTVFParam();
			this.state = 1321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1317;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1318;
				this.windowTVFParam();
				}
				}
				this.state = 1323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1324;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windoTVFName(): WindoTVFNameContext {
		let _localctx: WindoTVFNameContext = new WindoTVFNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, FlinkSqlParser.RULE_windoTVFName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1326;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_CUMULATE || _la === FlinkSqlParser.KW_HOP || _la === FlinkSqlParser.KW_TUMBLE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowTVFParam(): WindowTVFParamContext {
		let _localctx: WindowTVFParamContext = new WindowTVFParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, FlinkSqlParser.RULE_windowTVFParam);
		try {
			this.state = 1343;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1328;
				this.match(FlinkSqlParser.KW_TABLE);
				this.state = 1329;
				this.timeAttrColumn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1330;
				this.columnDescriptor();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1331;
				this.timeIntervalExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1332;
				this.match(FlinkSqlParser.KW_DATA);
				this.state = 1333;
				this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
				this.state = 1334;
				this.match(FlinkSqlParser.KW_TABLE);
				this.state = 1335;
				this.timeAttrColumn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1336;
				this.match(FlinkSqlParser.KW_TIMECOL);
				this.state = 1337;
				this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
				this.state = 1338;
				this.columnDescriptor();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1339;
				this.timeIntervalParamName();
				this.state = 1340;
				this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
				this.state = 1341;
				this.timeIntervalExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeIntervalParamName(): TimeIntervalParamNameContext {
		let _localctx: TimeIntervalParamNameContext = new TimeIntervalParamNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, FlinkSqlParser.RULE_timeIntervalParamName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1345;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_DATA || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (FlinkSqlParser.KW_SIZE - 138)) | (1 << (FlinkSqlParser.KW_SLIDE - 138)) | (1 << (FlinkSqlParser.KW_STEP - 138)) | (1 << (FlinkSqlParser.KW_TIMECOL - 138)))) !== 0) || _la === FlinkSqlParser.KW_OFFSET)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnDescriptor(): ColumnDescriptorContext {
		let _localctx: ColumnDescriptorContext = new ColumnDescriptorContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, FlinkSqlParser.RULE_columnDescriptor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1347;
			this.match(FlinkSqlParser.KW_DESCRIPTOR);
			this.state = 1348;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1349;
			this.uid();
			this.state = 1350;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinCondition(): JoinConditionContext {
		let _localctx: JoinConditionContext = new JoinConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, FlinkSqlParser.RULE_joinCondition);
		let _la: number;
		try {
			this.state = 1366;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1352;
				this.match(FlinkSqlParser.KW_ON);
				this.state = 1353;
				this.booleanExpression(0);
				}
				break;
			case FlinkSqlParser.KW_USING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1354;
				this.match(FlinkSqlParser.KW_USING);
				this.state = 1355;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1356;
				this.uid();
				this.state = 1361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1357;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1358;
					this.uid();
					}
					}
					this.state = 1363;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1364;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whereClause(): WhereClauseContext {
		let _localctx: WhereClauseContext = new WhereClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, FlinkSqlParser.RULE_whereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1368;
			this.match(FlinkSqlParser.KW_WHERE);
			this.state = 1369;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupByClause(): GroupByClauseContext {
		let _localctx: GroupByClauseContext = new GroupByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, FlinkSqlParser.RULE_groupByClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1371;
			this.match(FlinkSqlParser.KW_GROUP);
			this.state = 1372;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 1373;
			this.groupItemDefinition();
			this.state = 1378;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1374;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1375;
					this.groupItemDefinition();
					}
					}
				}
				this.state = 1380;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupItemDefinition(): GroupItemDefinitionContext {
		let _localctx: GroupItemDefinitionContext = new GroupItemDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, FlinkSqlParser.RULE_groupItemDefinition);
		let _la: number;
		try {
			this.state = 1420;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1381;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1382;
				this.groupWindowFunction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1383;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1384;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1385;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1386;
				this.expression();
				this.state = 1391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1387;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1388;
					this.expression();
					}
					}
					this.state = 1393;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1394;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1396;
				this.groupingSetsNotaionName();
				this.state = 1397;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1398;
				this.expression();
				this.state = 1403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1399;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1400;
					this.expression();
					}
					}
					this.state = 1405;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1406;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1408;
				this.groupingSets();
				this.state = 1409;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1410;
				this.groupItemDefinition();
				this.state = 1415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1411;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1412;
					this.groupItemDefinition();
					}
					}
					this.state = 1417;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1418;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupingSets(): GroupingSetsContext {
		let _localctx: GroupingSetsContext = new GroupingSetsContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, FlinkSqlParser.RULE_groupingSets);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1422;
			this.match(FlinkSqlParser.KW_GROUPING);
			this.state = 1423;
			this.match(FlinkSqlParser.KW_SETS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupingSetsNotaionName(): GroupingSetsNotaionNameContext {
		let _localctx: GroupingSetsNotaionNameContext = new GroupingSetsNotaionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, FlinkSqlParser.RULE_groupingSetsNotaionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1425;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_CUBE || _la === FlinkSqlParser.KW_ROLLUP)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupWindowFunction(): GroupWindowFunctionContext {
		let _localctx: GroupWindowFunctionContext = new GroupWindowFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, FlinkSqlParser.RULE_groupWindowFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1427;
			this.groupWindowFunctionName();
			this.state = 1428;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1429;
			this.timeAttrColumn();
			this.state = 1430;
			this.match(FlinkSqlParser.COMMA);
			this.state = 1431;
			this.timeIntervalExpression();
			this.state = 1432;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupWindowFunctionName(): GroupWindowFunctionNameContext {
		let _localctx: GroupWindowFunctionNameContext = new GroupWindowFunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, FlinkSqlParser.RULE_groupWindowFunctionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1434;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_HOP || _la === FlinkSqlParser.KW_SESSION || _la === FlinkSqlParser.KW_TUMBLE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeAttrColumn(): TimeAttrColumnContext {
		let _localctx: TimeAttrColumnContext = new TimeAttrColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, FlinkSqlParser.RULE_timeAttrColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1436;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public havingClause(): HavingClauseContext {
		let _localctx: HavingClauseContext = new HavingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, FlinkSqlParser.RULE_havingClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1438;
			this.match(FlinkSqlParser.KW_HAVING);
			this.state = 1439;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowClause(): WindowClauseContext {
		let _localctx: WindowClauseContext = new WindowClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, FlinkSqlParser.RULE_windowClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1441;
			this.match(FlinkSqlParser.KW_WINDOW);
			this.state = 1442;
			this.namedWindow();
			this.state = 1447;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1443;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1444;
					this.namedWindow();
					}
					}
				}
				this.state = 1449;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedWindow(): NamedWindowContext {
		let _localctx: NamedWindowContext = new NamedWindowContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, FlinkSqlParser.RULE_namedWindow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1450;
			_localctx._name = this.errorCapturingIdentifier();
			this.state = 1451;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 1452;
			this.windowSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowSpec(): WindowSpecContext {
		let _localctx: WindowSpecContext = new WindowSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, FlinkSqlParser.RULE_windowSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSqlParser.KW_ADD) | (1 << FlinkSqlParser.KW_ADMIN) | (1 << FlinkSqlParser.KW_AFTER) | (1 << FlinkSqlParser.KW_ANALYZE) | (1 << FlinkSqlParser.KW_ASC) | (1 << FlinkSqlParser.KW_BEFORE) | (1 << FlinkSqlParser.KW_BYTES) | (1 << FlinkSqlParser.KW_CASCADE) | (1 << FlinkSqlParser.KW_CATALOG) | (1 << FlinkSqlParser.KW_CATALOGS) | (1 << FlinkSqlParser.KW_CENTURY) | (1 << FlinkSqlParser.KW_CHAIN) | (1 << FlinkSqlParser.KW_CHANGELOG_MODE) | (1 << FlinkSqlParser.KW_CHARACTERS) | (1 << FlinkSqlParser.KW_COMMENT) | (1 << FlinkSqlParser.KW_COMPACT) | (1 << FlinkSqlParser.KW_COLUMNS) | (1 << FlinkSqlParser.KW_CONSTRAINTS) | (1 << FlinkSqlParser.KW_CONSTRUCTOR) | (1 << FlinkSqlParser.KW_CUMULATE) | (1 << FlinkSqlParser.KW_DATA) | (1 << FlinkSqlParser.KW_DATABASE) | (1 << FlinkSqlParser.KW_DATABASES) | (1 << FlinkSqlParser.KW_DAYS) | (1 << FlinkSqlParser.KW_DECADE) | (1 << FlinkSqlParser.KW_DEFINED) | (1 << FlinkSqlParser.KW_DESC) | (1 << FlinkSqlParser.KW_DESCRIPTOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSqlParser.KW_DIV - 32)) | (1 << (FlinkSqlParser.KW_ENCODING - 32)) | (1 << (FlinkSqlParser.KW_ENFORCED - 32)) | (1 << (FlinkSqlParser.KW_ENGINE - 32)) | (1 << (FlinkSqlParser.KW_ERROR - 32)) | (1 << (FlinkSqlParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSqlParser.KW_EXCEPTION - 32)) | (1 << (FlinkSqlParser.KW_EXCLUDE - 32)) | (1 << (FlinkSqlParser.KW_EXCLUDING - 32)) | (1 << (FlinkSqlParser.KW_EXTENDED - 32)) | (1 << (FlinkSqlParser.KW_FILE - 32)) | (1 << (FlinkSqlParser.KW_FINAL - 32)) | (1 << (FlinkSqlParser.KW_FIRST - 32)) | (1 << (FlinkSqlParser.KW_FOLLOWING - 32)) | (1 << (FlinkSqlParser.KW_FORMAT - 32)) | (1 << (FlinkSqlParser.KW_FORTRAN - 32)) | (1 << (FlinkSqlParser.KW_FOUND - 32)) | (1 << (FlinkSqlParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSqlParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSqlParser.KW_GENERAL - 32)) | (1 << (FlinkSqlParser.KW_GENERATED - 32)) | (1 << (FlinkSqlParser.KW_GO - 32)) | (1 << (FlinkSqlParser.KW_GOTO - 32)) | (1 << (FlinkSqlParser.KW_GRANTED - 32)) | (1 << (FlinkSqlParser.KW_HOP - 32)) | (1 << (FlinkSqlParser.KW_HOURS - 32)) | (1 << (FlinkSqlParser.KW_IF - 32)) | (1 << (FlinkSqlParser.KW_IGNORE - 32)) | (1 << (FlinkSqlParser.KW_INCREMENT - 32)) | (1 << (FlinkSqlParser.KW_INPUT - 32)) | (1 << (FlinkSqlParser.KW_INVOKER - 32)) | (1 << (FlinkSqlParser.KW_JAR - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSqlParser.KW_JARS - 64)) | (1 << (FlinkSqlParser.KW_JAVA - 64)) | (1 << (FlinkSqlParser.KW_JSON - 64)) | (1 << (FlinkSqlParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSqlParser.KW_KEY - 64)) | (1 << (FlinkSqlParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSqlParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSqlParser.KW_LABEL - 64)) | (1 << (FlinkSqlParser.KW_LAST - 64)) | (1 << (FlinkSqlParser.KW_LENGTH - 64)) | (1 << (FlinkSqlParser.KW_LEVEL - 64)) | (1 << (FlinkSqlParser.KW_LOAD - 64)) | (1 << (FlinkSqlParser.KW_MAP - 64)) | (1 << (FlinkSqlParser.KW_MICROSECOND - 64)) | (1 << (FlinkSqlParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSqlParser.KW_MILLISECOND - 64)) | (1 << (FlinkSqlParser.KW_MINUTES - 64)) | (1 << (FlinkSqlParser.KW_MINVALUE - 64)) | (1 << (FlinkSqlParser.KW_MODIFY - 64)) | (1 << (FlinkSqlParser.KW_MODULES - 64)) | (1 << (FlinkSqlParser.KW_MONTHS - 64)) | (1 << (FlinkSqlParser.KW_NANOSECOND - 64)) | (1 << (FlinkSqlParser.KW_NULLS - 64)) | (1 << (FlinkSqlParser.KW_NUMBER - 64)) | (1 << (FlinkSqlParser.KW_OPTION - 64)) | (1 << (FlinkSqlParser.KW_OPTIONS - 64)) | (1 << (FlinkSqlParser.KW_ORDERING - 64)) | (1 << (FlinkSqlParser.KW_OUTPUT - 64)) | (1 << (FlinkSqlParser.KW_OVERWRITE - 64)) | (1 << (FlinkSqlParser.KW_OVERWRITING - 64)) | (1 << (FlinkSqlParser.KW_PARTITIONED - 64)) | (1 << (FlinkSqlParser.KW_PARTITIONS - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSqlParser.KW_PASSING - 96)) | (1 << (FlinkSqlParser.KW_PAST - 96)) | (1 << (FlinkSqlParser.KW_PATH - 96)) | (1 << (FlinkSqlParser.KW_PLACING - 96)) | (1 << (FlinkSqlParser.KW_PLAN - 96)) | (1 << (FlinkSqlParser.KW_PRECEDING - 96)) | (1 << (FlinkSqlParser.KW_PRESERVE - 96)) | (1 << (FlinkSqlParser.KW_PRIOR - 96)) | (1 << (FlinkSqlParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSqlParser.KW_PUBLIC - 96)) | (1 << (FlinkSqlParser.KW_PYTHON - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSqlParser.KW_QUARTER - 96)) | (1 << (FlinkSqlParser.KW_RAW - 96)) | (1 << (FlinkSqlParser.KW_READ - 96)) | (1 << (FlinkSqlParser.KW_RELATIVE - 96)) | (1 << (FlinkSqlParser.KW_REMOVE - 96)) | (1 << (FlinkSqlParser.KW_RENAME - 96)) | (1 << (FlinkSqlParser.KW_REPLACE - 96)) | (1 << (FlinkSqlParser.KW_RESPECT - 96)) | (1 << (FlinkSqlParser.KW_RESTART - 96)) | (1 << (FlinkSqlParser.KW_RESTRICT - 96)) | (1 << (FlinkSqlParser.KW_ROLE - 96)) | (1 << (FlinkSqlParser.KW_ROW_COUNT - 96)) | (1 << (FlinkSqlParser.KW_SCALA - 96)) | (1 << (FlinkSqlParser.KW_SCALAR - 96)) | (1 << (FlinkSqlParser.KW_SCALE - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSqlParser.KW_SCHEMA - 128)) | (1 << (FlinkSqlParser.KW_SECONDS - 128)) | (1 << (FlinkSqlParser.KW_SECTION - 128)) | (1 << (FlinkSqlParser.KW_SECURITY - 128)) | (1 << (FlinkSqlParser.KW_SELF - 128)) | (1 << (FlinkSqlParser.KW_SERVER - 128)) | (1 << (FlinkSqlParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSqlParser.KW_SESSION - 128)) | (1 << (FlinkSqlParser.KW_SETS - 128)) | (1 << (FlinkSqlParser.KW_SIMPLE - 128)) | (1 << (FlinkSqlParser.KW_SIZE - 128)) | (1 << (FlinkSqlParser.KW_SLIDE - 128)) | (1 << (FlinkSqlParser.KW_SOURCE - 128)) | (1 << (FlinkSqlParser.KW_SPACE - 128)) | (1 << (FlinkSqlParser.KW_STATE - 128)) | (1 << (FlinkSqlParser.KW_STATEMENT - 128)) | (1 << (FlinkSqlParser.KW_STEP - 128)) | (1 << (FlinkSqlParser.KW_STRING - 128)) | (1 << (FlinkSqlParser.KW_STRUCTURE - 128)) | (1 << (FlinkSqlParser.KW_STYLE - 128)) | (1 << (FlinkSqlParser.KW_TABLES - 128)) | (1 << (FlinkSqlParser.KW_TEMPORARY - 128)) | (1 << (FlinkSqlParser.KW_TIMECOL - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSqlParser.KW_TRANSFORM - 128)) | (1 << (FlinkSqlParser.KW_TUMBLE - 128)) | (1 << (FlinkSqlParser.KW_TYPE - 128)) | (1 << (FlinkSqlParser.KW_UNDER - 128)) | (1 << (FlinkSqlParser.KW_UNLOAD - 128)) | (1 << (FlinkSqlParser.KW_USAGE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSqlParser.KW_USE - 160)) | (1 << (FlinkSqlParser.KW_UTF16 - 160)) | (1 << (FlinkSqlParser.KW_UTF32 - 160)) | (1 << (FlinkSqlParser.KW_UTF8 - 160)) | (1 << (FlinkSqlParser.KW_VERSION - 160)) | (1 << (FlinkSqlParser.KW_VIEW - 160)) | (1 << (FlinkSqlParser.KW_VIEWS - 160)) | (1 << (FlinkSqlParser.KW_VIRTUAL - 160)) | (1 << (FlinkSqlParser.KW_WATERMARK - 160)) | (1 << (FlinkSqlParser.KW_WATERMARKS - 160)) | (1 << (FlinkSqlParser.KW_WEEK - 160)) | (1 << (FlinkSqlParser.KW_WORK - 160)) | (1 << (FlinkSqlParser.KW_WRAPPER - 160)) | (1 << (FlinkSqlParser.KW_YEARS - 160)) | (1 << (FlinkSqlParser.KW_ZONE - 160)))) !== 0) || ((((_la - 397)) & ~0x1F) === 0 && ((1 << (_la - 397)) & ((1 << (FlinkSqlParser.STRING_LITERAL - 397)) | (1 << (FlinkSqlParser.DIG_LITERAL - 397)) | (1 << (FlinkSqlParser.ID_LITERAL - 397)))) !== 0)) {
				{
				this.state = 1454;
				_localctx._name = this.errorCapturingIdentifier();
				}
			}

			this.state = 1457;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_PARTITION) {
				{
				this.state = 1458;
				this.partitionByClause();
				}
			}

			this.state = 1462;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_ORDER) {
				{
				this.state = 1461;
				this.orderByCaluse();
				}
			}

			this.state = 1465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_RANGE || _la === FlinkSqlParser.KW_ROWS) {
				{
				this.state = 1464;
				this.windowFrame();
				}
			}

			this.state = 1467;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matchRecognizeClause(): MatchRecognizeClauseContext {
		let _localctx: MatchRecognizeClauseContext = new MatchRecognizeClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, FlinkSqlParser.RULE_matchRecognizeClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1469;
			this.match(FlinkSqlParser.KW_MATCH_RECOGNIZE);
			this.state = 1470;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_PARTITION) {
				{
				this.state = 1471;
				this.partitionByClause();
				}
			}

			this.state = 1475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_ORDER) {
				{
				this.state = 1474;
				this.orderByCaluse();
				}
			}

			this.state = 1478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_MEASURES) {
				{
				this.state = 1477;
				this.measuresClause();
				}
			}

			this.state = 1481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_ALL || _la === FlinkSqlParser.KW_ONE) {
				{
				this.state = 1480;
				this.outputMode();
				}
			}

			this.state = 1484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_AFTER) {
				{
				this.state = 1483;
				this.afterMatchStrategy();
				}
			}

			this.state = 1487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_PATTERN) {
				{
				this.state = 1486;
				this.patternDefination();
				}
			}

			this.state = 1489;
			this.patternVariablesDefination();
			this.state = 1490;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 1495;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
			case 1:
				{
				this.state = 1492;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_AS) {
					{
					this.state = 1491;
					this.match(FlinkSqlParser.KW_AS);
					}
				}

				this.state = 1494;
				this.identifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderByCaluse(): OrderByCaluseContext {
		let _localctx: OrderByCaluseContext = new OrderByCaluseContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, FlinkSqlParser.RULE_orderByCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1497;
			this.match(FlinkSqlParser.KW_ORDER);
			this.state = 1498;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 1499;
			this.orderItemDefition();
			this.state = 1504;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1500;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1501;
					this.orderItemDefition();
					}
					}
				}
				this.state = 1506;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderItemDefition(): OrderItemDefitionContext {
		let _localctx: OrderItemDefitionContext = new OrderItemDefitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, FlinkSqlParser.RULE_orderItemDefition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1507;
			this.expression();
			this.state = 1509;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				{
				this.state = 1508;
				_localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_ASC || _la === FlinkSqlParser.KW_DESC)) {
					_localctx._ordering = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			this.state = 1513;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				{
				this.state = 1511;
				this.match(FlinkSqlParser.KW_NULLS);
				this.state = 1512;
				_localctx._nullOrder = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_FIRST || _la === FlinkSqlParser.KW_LAST)) {
					_localctx._nullOrder = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limitClause(): LimitClauseContext {
		let _localctx: LimitClauseContext = new LimitClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, FlinkSqlParser.RULE_limitClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1515;
			this.match(FlinkSqlParser.KW_LIMIT);
			this.state = 1518;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				{
				this.state = 1516;
				this.match(FlinkSqlParser.KW_ALL);
				}
				break;

			case 2:
				{
				this.state = 1517;
				_localctx._limit = this.expression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partitionByClause(): PartitionByClauseContext {
		let _localctx: PartitionByClauseContext = new PartitionByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, FlinkSqlParser.RULE_partitionByClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1520;
			this.match(FlinkSqlParser.KW_PARTITION);
			this.state = 1521;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 1522;
			this.expression();
			this.state = 1527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1523;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1524;
				this.expression();
				}
				}
				this.state = 1529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantifiers(): QuantifiersContext {
		let _localctx: QuantifiersContext = new QuantifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, FlinkSqlParser.RULE_quantifiers);
		try {
			this.state = 1546;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1530;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1531;
				this.match(FlinkSqlParser.ADD_SIGN);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 1532;
				this.match(FlinkSqlParser.QUESTION_MARK_SIGN);
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 1533;
				this.match(FlinkSqlParser.LB_BRACKET);
				this.state = 1534;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1535;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1536;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1537;
				this.match(FlinkSqlParser.RB_BRACKET);
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				{
				this.state = 1538;
				this.match(FlinkSqlParser.LB_BRACKET);
				this.state = 1539;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1540;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1541;
				this.match(FlinkSqlParser.RB_BRACKET);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 1542;
				this.match(FlinkSqlParser.LB_BRACKET);
				this.state = 1543;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1544;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1545;
				this.match(FlinkSqlParser.RB_BRACKET);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public measuresClause(): MeasuresClauseContext {
		let _localctx: MeasuresClauseContext = new MeasuresClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, FlinkSqlParser.RULE_measuresClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1548;
			this.match(FlinkSqlParser.KW_MEASURES);
			this.state = 1549;
			this.projectItemDefinition();
			this.state = 1554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1550;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1551;
				this.projectItemDefinition();
				}
				}
				this.state = 1556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patternDefination(): PatternDefinationContext {
		let _localctx: PatternDefinationContext = new PatternDefinationContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, FlinkSqlParser.RULE_patternDefination);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1557;
			this.match(FlinkSqlParser.KW_PATTERN);
			this.state = 1558;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1560;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1559;
				this.patternVariable();
				}
				}
				this.state = 1562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSqlParser.DIG_LITERAL || _la === FlinkSqlParser.ID_LITERAL);
			this.state = 1564;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 1566;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_WITHIN) {
				{
				this.state = 1565;
				this.withinClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patternVariable(): PatternVariableContext {
		let _localctx: PatternVariableContext = new PatternVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, FlinkSqlParser.RULE_patternVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1568;
			this.unquotedIdentifier();
			this.state = 1570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 378)) & ~0x1F) === 0 && ((1 << (_la - 378)) & ((1 << (FlinkSqlParser.LB_BRACKET - 378)) | (1 << (FlinkSqlParser.ASTERISK_SIGN - 378)) | (1 << (FlinkSqlParser.ADD_SIGN - 378)) | (1 << (FlinkSqlParser.QUESTION_MARK_SIGN - 378)))) !== 0)) {
				{
				this.state = 1569;
				this.quantifiers();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public outputMode(): OutputModeContext {
		let _localctx: OutputModeContext = new OutputModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, FlinkSqlParser.RULE_outputMode);
		try {
			this.state = 1580;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_ALL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1572;
				this.match(FlinkSqlParser.KW_ALL);
				this.state = 1573;
				this.match(FlinkSqlParser.KW_ROWS);
				this.state = 1574;
				this.match(FlinkSqlParser.KW_PER);
				this.state = 1575;
				this.match(FlinkSqlParser.KW_MATCH);
				}
				break;
			case FlinkSqlParser.KW_ONE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1576;
				this.match(FlinkSqlParser.KW_ONE);
				this.state = 1577;
				this.match(FlinkSqlParser.KW_ROW);
				this.state = 1578;
				this.match(FlinkSqlParser.KW_PER);
				this.state = 1579;
				this.match(FlinkSqlParser.KW_MATCH);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public afterMatchStrategy(): AfterMatchStrategyContext {
		let _localctx: AfterMatchStrategyContext = new AfterMatchStrategyContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, FlinkSqlParser.RULE_afterMatchStrategy);
		try {
			this.state = 1606;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1582;
				this.match(FlinkSqlParser.KW_AFTER);
				this.state = 1583;
				this.match(FlinkSqlParser.KW_MATCH);
				this.state = 1584;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1585;
				this.match(FlinkSqlParser.KW_PAST);
				this.state = 1586;
				this.match(FlinkSqlParser.KW_LAST);
				this.state = 1587;
				this.match(FlinkSqlParser.KW_ROW);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1588;
				this.match(FlinkSqlParser.KW_AFTER);
				this.state = 1589;
				this.match(FlinkSqlParser.KW_MATCH);
				this.state = 1590;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1591;
				this.match(FlinkSqlParser.KW_TO);
				this.state = 1592;
				this.match(FlinkSqlParser.KW_NEXT);
				this.state = 1593;
				this.match(FlinkSqlParser.KW_ROW);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1594;
				this.match(FlinkSqlParser.KW_AFTER);
				this.state = 1595;
				this.match(FlinkSqlParser.KW_MATCH);
				this.state = 1596;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1597;
				this.match(FlinkSqlParser.KW_TO);
				this.state = 1598;
				this.match(FlinkSqlParser.KW_LAST);
				this.state = 1599;
				this.unquotedIdentifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1600;
				this.match(FlinkSqlParser.KW_AFTER);
				this.state = 1601;
				this.match(FlinkSqlParser.KW_MATCH);
				this.state = 1602;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1603;
				this.match(FlinkSqlParser.KW_TO);
				this.state = 1604;
				this.match(FlinkSqlParser.KW_FIRST);
				this.state = 1605;
				this.unquotedIdentifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patternVariablesDefination(): PatternVariablesDefinationContext {
		let _localctx: PatternVariablesDefinationContext = new PatternVariablesDefinationContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, FlinkSqlParser.RULE_patternVariablesDefination);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1608;
			this.match(FlinkSqlParser.KW_DEFINE);
			this.state = 1609;
			this.projectItemDefinition();
			this.state = 1614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1610;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1611;
				this.projectItemDefinition();
				}
				}
				this.state = 1616;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowFrame(): WindowFrameContext {
		let _localctx: WindowFrameContext = new WindowFrameContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, FlinkSqlParser.RULE_windowFrame);
		try {
			this.state = 1626;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_RANGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1617;
				this.match(FlinkSqlParser.KW_RANGE);
				this.state = 1618;
				this.match(FlinkSqlParser.KW_BETWEEN);
				this.state = 1619;
				this.timeIntervalExpression();
				this.state = 1620;
				this.frameBound();
				}
				break;
			case FlinkSqlParser.KW_ROWS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1622;
				this.match(FlinkSqlParser.KW_ROWS);
				this.state = 1623;
				this.match(FlinkSqlParser.KW_BETWEEN);
				this.state = 1624;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1625;
				this.frameBound();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public frameBound(): FrameBoundContext {
		let _localctx: FrameBoundContext = new FrameBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, FlinkSqlParser.RULE_frameBound);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1628;
			this.match(FlinkSqlParser.KW_PRECEDING);
			this.state = 1629;
			this.match(FlinkSqlParser.KW_AND);
			this.state = 1630;
			this.match(FlinkSqlParser.KW_CURRENT);
			this.state = 1631;
			this.match(FlinkSqlParser.KW_ROW);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withinClause(): WithinClauseContext {
		let _localctx: WithinClauseContext = new WithinClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, FlinkSqlParser.RULE_withinClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1633;
			this.match(FlinkSqlParser.KW_WITHIN);
			this.state = 1634;
			this.timeIntervalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, FlinkSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1636;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
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
		let _localctx: BooleanExpressionContext = new BooleanExpressionContext(this._ctx, _parentState);
		let _prevctx: BooleanExpressionContext = _localctx;
		let _startState: number = 260;
		this.enterRecursionRule(_localctx, 260, FlinkSqlParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1650;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1639;
				this.match(FlinkSqlParser.KW_NOT);
				this.state = 1640;
				this.booleanExpression(5);
				}
				break;

			case 2:
				{
				_localctx = new ExistsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1641;
				this.match(FlinkSqlParser.KW_EXISTS);
				this.state = 1642;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1643;
				this.queryStatement(0);
				this.state = 1644;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new PredicatedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1646;
				this.valueExpression(0);
				this.state = 1648;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 180, this._ctx) ) {
				case 1:
					{
					this.state = 1647;
					this.predicate();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1660;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1658;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 182, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1652;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1653;
						(_localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_AND);
						this.state = 1654;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1655;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1656;
						(_localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_OR);
						this.state = 1657;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1662;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicate(): PredicateContext {
		let _localctx: PredicateContext = new PredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, FlinkSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1746;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 196, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1663;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1666;
				_localctx._kind = this.match(FlinkSqlParser.KW_BETWEEN);
				this.state = 1667;
				_localctx._lower = this.valueExpression(0);
				this.state = 1668;
				this.match(FlinkSqlParser.KW_AND);
				this.state = 1669;
				_localctx._upper = this.valueExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1672;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1671;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1674;
				_localctx._kind = this.match(FlinkSqlParser.KW_IN);
				this.state = 1675;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1676;
				this.expression();
				this.state = 1681;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1677;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1678;
					this.expression();
					}
					}
					this.state = 1683;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1684;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1687;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1686;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1689;
				_localctx._kind = this.match(FlinkSqlParser.KW_IN);
				this.state = 1690;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1691;
				this.queryStatement(0);
				this.state = 1692;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1694;
				_localctx._kind = this.match(FlinkSqlParser.KW_EXISTS);
				this.state = 1695;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1696;
				this.queryStatement(0);
				this.state = 1697;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1700;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1699;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1702;
				_localctx._kind = this.match(FlinkSqlParser.KW_RLIKE);
				this.state = 1703;
				_localctx._pattern = this.valueExpression(0);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1705;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1704;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1707;
				_localctx._kind = this.match(FlinkSqlParser.KW_LIKE);
				this.state = 1708;
				_localctx._quantifier = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_ALL || _la === FlinkSqlParser.KW_ANY)) {
					_localctx._quantifier = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1722;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
				case 1:
					{
					this.state = 1709;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1710;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;

				case 2:
					{
					this.state = 1711;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1712;
					this.expression();
					this.state = 1717;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FlinkSqlParser.COMMA) {
						{
						{
						this.state = 1713;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1714;
						this.expression();
						}
						}
						this.state = 1719;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1720;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1725;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1724;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1727;
				_localctx._kind = this.match(FlinkSqlParser.KW_LIKE);
				this.state = 1728;
				_localctx._pattern = this.valueExpression(0);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1729;
				this.match(FlinkSqlParser.KW_IS);
				this.state = 1731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1730;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1733;
				_localctx._kind = this.match(FlinkSqlParser.KW_NULL);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1734;
				this.match(FlinkSqlParser.KW_IS);
				this.state = 1736;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1735;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1738;
				_localctx._kind = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_FALSE || _la === FlinkSqlParser.KW_TRUE)) {
					_localctx._kind = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1739;
				this.match(FlinkSqlParser.KW_IS);
				this.state = 1741;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1740;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1743;
				_localctx._kind = this.match(FlinkSqlParser.KW_DISTINCT);
				this.state = 1744;
				this.match(FlinkSqlParser.KW_FROM);
				this.state = 1745;
				_localctx._right = this.valueExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public likePredicate(): LikePredicateContext {
		let _localctx: LikePredicateContext = new LikePredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, FlinkSqlParser.RULE_likePredicate);
		let _la: number;
		try {
			this.state = 1773;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 201, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1749;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1748;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1751;
				_localctx._kind = this.match(FlinkSqlParser.KW_LIKE);
				this.state = 1752;
				_localctx._quantifier = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_ALL || _la === FlinkSqlParser.KW_ANY)) {
					_localctx._quantifier = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1766;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
				case 1:
					{
					this.state = 1753;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1754;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;

				case 2:
					{
					this.state = 1755;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1756;
					this.expression();
					this.state = 1761;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FlinkSqlParser.COMMA) {
						{
						{
						this.state = 1757;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1758;
						this.expression();
						}
						}
						this.state = 1763;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1764;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1769;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1768;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1771;
				_localctx._kind = this.match(FlinkSqlParser.KW_LIKE);
				this.state = 1772;
				_localctx._pattern = this.valueExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
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
		let _localctx: ValueExpressionContext = new ValueExpressionContext(this._ctx, _parentState);
		let _prevctx: ValueExpressionContext = _localctx;
		let _startState: number = 266;
		this.enterRecursionRule(_localctx, 266, FlinkSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1779;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1776;
				this.primaryExpression(0);
				}
				break;

			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1777;
				(_localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 369)) & ~0x1F) === 0 && ((1 << (_la - 369)) & ((1 << (FlinkSqlParser.BIT_NOT_OP - 369)) | (1 << (FlinkSqlParser.HYPNEN_SIGN - 369)) | (1 << (FlinkSqlParser.ADD_SIGN - 369)))) !== 0))) {
					(_localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1778;
				this.valueExpression(7);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1802;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1800;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1781;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1782;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FlinkSqlParser.KW_DIV || ((((_la - 387)) & ~0x1F) === 0 && ((1 << (_la - 387)) & ((1 << (FlinkSqlParser.ASTERISK_SIGN - 387)) | (1 << (FlinkSqlParser.PENCENT_SIGN - 387)) | (1 << (FlinkSqlParser.SLASH_SIGN - 387)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1783;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1784;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1785;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 389)) & ~0x1F) === 0 && ((1 << (_la - 389)) & ((1 << (FlinkSqlParser.HYPNEN_SIGN - 389)) | (1 << (FlinkSqlParser.ADD_SIGN - 389)) | (1 << (FlinkSqlParser.DOUBLE_VERTICAL_SIGN - 389)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1786;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
						}
						break;

					case 3:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1787;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1788;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_AND_OP);
						this.state = 1789;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
						}
						break;

					case 4:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1790;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1791;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_XOR_OP);
						this.state = 1792;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;

					case 5:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1793;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1794;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_OR_OP);
						this.state = 1795;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;

					case 6:
						{
						_localctx = new ComparisonContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1796;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1797;
						this.comparisonOperator();
						this.state = 1798;
						(_localctx as ComparisonContext)._right = this.valueExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1804;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
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
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, _parentState);
		let _prevctx: PrimaryExpressionContext = _localctx;
		let _startState: number = 268;
		this.enterRecursionRule(_localctx, 268, FlinkSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1896;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 214, this._ctx) ) {
			case 1:
				{
				_localctx = new SearchedCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1806;
				this.match(FlinkSqlParser.KW_CASE);
				this.state = 1808;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1807;
					this.whenClause();
					}
					}
					this.state = 1810;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSqlParser.KW_WHEN);
				this.state = 1814;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_ELSE) {
					{
					this.state = 1812;
					this.match(FlinkSqlParser.KW_ELSE);
					this.state = 1813;
					(_localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1816;
				this.match(FlinkSqlParser.KW_END);
				}
				break;

			case 2:
				{
				_localctx = new SimpleCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1818;
				this.match(FlinkSqlParser.KW_CASE);
				this.state = 1819;
				(_localctx as SimpleCaseContext)._value = this.expression();
				this.state = 1821;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1820;
					this.whenClause();
					}
					}
					this.state = 1823;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSqlParser.KW_WHEN);
				this.state = 1827;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_ELSE) {
					{
					this.state = 1825;
					this.match(FlinkSqlParser.KW_ELSE);
					this.state = 1826;
					(_localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1829;
				this.match(FlinkSqlParser.KW_END);
				}
				break;

			case 3:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1831;
				this.match(FlinkSqlParser.KW_CAST);
				this.state = 1832;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1833;
				this.expression();
				this.state = 1834;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 1835;
				this.columnType();
				this.state = 1836;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				{
				_localctx = new FirstContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1838;
				this.match(FlinkSqlParser.KW_FIRST);
				this.state = 1839;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1840;
				this.expression();
				this.state = 1843;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_IGNORE) {
					{
					this.state = 1841;
					this.match(FlinkSqlParser.KW_IGNORE);
					this.state = 1842;
					this.match(FlinkSqlParser.KW_NULLS);
					}
				}

				this.state = 1845;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 5:
				{
				_localctx = new LastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1847;
				this.match(FlinkSqlParser.KW_LAST);
				this.state = 1848;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1849;
				this.expression();
				this.state = 1852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_IGNORE) {
					{
					this.state = 1850;
					this.match(FlinkSqlParser.KW_IGNORE);
					this.state = 1851;
					this.match(FlinkSqlParser.KW_NULLS);
					}
				}

				this.state = 1854;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 6:
				{
				_localctx = new PositionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1856;
				this.match(FlinkSqlParser.KW_POSITION);
				this.state = 1857;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1858;
				(_localctx as PositionContext)._substr = this.valueExpression(0);
				this.state = 1859;
				this.match(FlinkSqlParser.KW_IN);
				this.state = 1860;
				(_localctx as PositionContext)._str = this.valueExpression(0);
				this.state = 1861;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 7:
				{
				_localctx = new ConstantDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1863;
				this.constant();
				}
				break;

			case 8:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1864;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;

			case 9:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1865;
				this.uid();
				this.state = 1866;
				this.match(FlinkSqlParser.DOT);
				this.state = 1867;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;

			case 10:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1869;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1870;
				this.queryStatement(0);
				this.state = 1871;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 11:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1873;
				this.functionName();
				this.state = 1874;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1886;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSqlParser.KW_ADD) | (1 << FlinkSqlParser.KW_ADMIN) | (1 << FlinkSqlParser.KW_AFTER) | (1 << FlinkSqlParser.KW_ANALYZE) | (1 << FlinkSqlParser.KW_ASC) | (1 << FlinkSqlParser.KW_BEFORE) | (1 << FlinkSqlParser.KW_BYTES) | (1 << FlinkSqlParser.KW_CASCADE) | (1 << FlinkSqlParser.KW_CATALOG) | (1 << FlinkSqlParser.KW_CATALOGS) | (1 << FlinkSqlParser.KW_CENTURY) | (1 << FlinkSqlParser.KW_CHAIN) | (1 << FlinkSqlParser.KW_CHANGELOG_MODE) | (1 << FlinkSqlParser.KW_CHARACTERS) | (1 << FlinkSqlParser.KW_COMMENT) | (1 << FlinkSqlParser.KW_COMPACT) | (1 << FlinkSqlParser.KW_COLUMNS) | (1 << FlinkSqlParser.KW_CONSTRAINTS) | (1 << FlinkSqlParser.KW_CONSTRUCTOR) | (1 << FlinkSqlParser.KW_CUMULATE) | (1 << FlinkSqlParser.KW_DATA) | (1 << FlinkSqlParser.KW_DATABASE) | (1 << FlinkSqlParser.KW_DATABASES) | (1 << FlinkSqlParser.KW_DAYS) | (1 << FlinkSqlParser.KW_DECADE) | (1 << FlinkSqlParser.KW_DEFINED) | (1 << FlinkSqlParser.KW_DESC) | (1 << FlinkSqlParser.KW_DESCRIPTOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSqlParser.KW_DIV - 32)) | (1 << (FlinkSqlParser.KW_ENCODING - 32)) | (1 << (FlinkSqlParser.KW_ENFORCED - 32)) | (1 << (FlinkSqlParser.KW_ENGINE - 32)) | (1 << (FlinkSqlParser.KW_ERROR - 32)) | (1 << (FlinkSqlParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSqlParser.KW_EXCEPTION - 32)) | (1 << (FlinkSqlParser.KW_EXCLUDE - 32)) | (1 << (FlinkSqlParser.KW_EXCLUDING - 32)) | (1 << (FlinkSqlParser.KW_EXTENDED - 32)) | (1 << (FlinkSqlParser.KW_FILE - 32)) | (1 << (FlinkSqlParser.KW_FINAL - 32)) | (1 << (FlinkSqlParser.KW_FIRST - 32)) | (1 << (FlinkSqlParser.KW_FOLLOWING - 32)) | (1 << (FlinkSqlParser.KW_FORMAT - 32)) | (1 << (FlinkSqlParser.KW_FORTRAN - 32)) | (1 << (FlinkSqlParser.KW_FOUND - 32)) | (1 << (FlinkSqlParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSqlParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSqlParser.KW_GENERAL - 32)) | (1 << (FlinkSqlParser.KW_GENERATED - 32)) | (1 << (FlinkSqlParser.KW_GO - 32)) | (1 << (FlinkSqlParser.KW_GOTO - 32)) | (1 << (FlinkSqlParser.KW_GRANTED - 32)) | (1 << (FlinkSqlParser.KW_HOP - 32)) | (1 << (FlinkSqlParser.KW_HOURS - 32)) | (1 << (FlinkSqlParser.KW_IF - 32)) | (1 << (FlinkSqlParser.KW_IGNORE - 32)) | (1 << (FlinkSqlParser.KW_INCREMENT - 32)) | (1 << (FlinkSqlParser.KW_INPUT - 32)) | (1 << (FlinkSqlParser.KW_INVOKER - 32)) | (1 << (FlinkSqlParser.KW_JAR - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSqlParser.KW_JARS - 64)) | (1 << (FlinkSqlParser.KW_JAVA - 64)) | (1 << (FlinkSqlParser.KW_JSON - 64)) | (1 << (FlinkSqlParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSqlParser.KW_KEY - 64)) | (1 << (FlinkSqlParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSqlParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSqlParser.KW_LABEL - 64)) | (1 << (FlinkSqlParser.KW_LAST - 64)) | (1 << (FlinkSqlParser.KW_LENGTH - 64)) | (1 << (FlinkSqlParser.KW_LEVEL - 64)) | (1 << (FlinkSqlParser.KW_LOAD - 64)) | (1 << (FlinkSqlParser.KW_MAP - 64)) | (1 << (FlinkSqlParser.KW_MICROSECOND - 64)) | (1 << (FlinkSqlParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSqlParser.KW_MILLISECOND - 64)) | (1 << (FlinkSqlParser.KW_MINUTES - 64)) | (1 << (FlinkSqlParser.KW_MINVALUE - 64)) | (1 << (FlinkSqlParser.KW_MODIFY - 64)) | (1 << (FlinkSqlParser.KW_MODULES - 64)) | (1 << (FlinkSqlParser.KW_MONTHS - 64)) | (1 << (FlinkSqlParser.KW_NANOSECOND - 64)) | (1 << (FlinkSqlParser.KW_NULLS - 64)) | (1 << (FlinkSqlParser.KW_NUMBER - 64)) | (1 << (FlinkSqlParser.KW_OPTION - 64)) | (1 << (FlinkSqlParser.KW_OPTIONS - 64)) | (1 << (FlinkSqlParser.KW_ORDERING - 64)) | (1 << (FlinkSqlParser.KW_OUTPUT - 64)) | (1 << (FlinkSqlParser.KW_OVERWRITE - 64)) | (1 << (FlinkSqlParser.KW_OVERWRITING - 64)) | (1 << (FlinkSqlParser.KW_PARTITIONED - 64)) | (1 << (FlinkSqlParser.KW_PARTITIONS - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSqlParser.KW_PASSING - 96)) | (1 << (FlinkSqlParser.KW_PAST - 96)) | (1 << (FlinkSqlParser.KW_PATH - 96)) | (1 << (FlinkSqlParser.KW_PLACING - 96)) | (1 << (FlinkSqlParser.KW_PLAN - 96)) | (1 << (FlinkSqlParser.KW_PRECEDING - 96)) | (1 << (FlinkSqlParser.KW_PRESERVE - 96)) | (1 << (FlinkSqlParser.KW_PRIOR - 96)) | (1 << (FlinkSqlParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSqlParser.KW_PUBLIC - 96)) | (1 << (FlinkSqlParser.KW_PYTHON - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSqlParser.KW_QUARTER - 96)) | (1 << (FlinkSqlParser.KW_RAW - 96)) | (1 << (FlinkSqlParser.KW_READ - 96)) | (1 << (FlinkSqlParser.KW_RELATIVE - 96)) | (1 << (FlinkSqlParser.KW_REMOVE - 96)) | (1 << (FlinkSqlParser.KW_RENAME - 96)) | (1 << (FlinkSqlParser.KW_REPLACE - 96)) | (1 << (FlinkSqlParser.KW_RESPECT - 96)) | (1 << (FlinkSqlParser.KW_RESTART - 96)) | (1 << (FlinkSqlParser.KW_RESTRICT - 96)) | (1 << (FlinkSqlParser.KW_ROLE - 96)) | (1 << (FlinkSqlParser.KW_ROW_COUNT - 96)) | (1 << (FlinkSqlParser.KW_SCALA - 96)) | (1 << (FlinkSqlParser.KW_SCALAR - 96)) | (1 << (FlinkSqlParser.KW_SCALE - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSqlParser.KW_SCHEMA - 128)) | (1 << (FlinkSqlParser.KW_SECONDS - 128)) | (1 << (FlinkSqlParser.KW_SECTION - 128)) | (1 << (FlinkSqlParser.KW_SECURITY - 128)) | (1 << (FlinkSqlParser.KW_SELF - 128)) | (1 << (FlinkSqlParser.KW_SERVER - 128)) | (1 << (FlinkSqlParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSqlParser.KW_SESSION - 128)) | (1 << (FlinkSqlParser.KW_SETS - 128)) | (1 << (FlinkSqlParser.KW_SIMPLE - 128)) | (1 << (FlinkSqlParser.KW_SIZE - 128)) | (1 << (FlinkSqlParser.KW_SLIDE - 128)) | (1 << (FlinkSqlParser.KW_SOURCE - 128)) | (1 << (FlinkSqlParser.KW_SPACE - 128)) | (1 << (FlinkSqlParser.KW_STATE - 128)) | (1 << (FlinkSqlParser.KW_STATEMENT - 128)) | (1 << (FlinkSqlParser.KW_STEP - 128)) | (1 << (FlinkSqlParser.KW_STRING - 128)) | (1 << (FlinkSqlParser.KW_STRUCTURE - 128)) | (1 << (FlinkSqlParser.KW_STYLE - 128)) | (1 << (FlinkSqlParser.KW_TABLES - 128)) | (1 << (FlinkSqlParser.KW_TEMPORARY - 128)) | (1 << (FlinkSqlParser.KW_TIMECOL - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSqlParser.KW_TRANSFORM - 128)) | (1 << (FlinkSqlParser.KW_TUMBLE - 128)) | (1 << (FlinkSqlParser.KW_TYPE - 128)) | (1 << (FlinkSqlParser.KW_UNDER - 128)) | (1 << (FlinkSqlParser.KW_UNLOAD - 128)) | (1 << (FlinkSqlParser.KW_USAGE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSqlParser.KW_USE - 160)) | (1 << (FlinkSqlParser.KW_UTF16 - 160)) | (1 << (FlinkSqlParser.KW_UTF32 - 160)) | (1 << (FlinkSqlParser.KW_UTF8 - 160)) | (1 << (FlinkSqlParser.KW_VERSION - 160)) | (1 << (FlinkSqlParser.KW_VIEW - 160)) | (1 << (FlinkSqlParser.KW_VIEWS - 160)) | (1 << (FlinkSqlParser.KW_VIRTUAL - 160)) | (1 << (FlinkSqlParser.KW_WATERMARK - 160)) | (1 << (FlinkSqlParser.KW_WATERMARKS - 160)) | (1 << (FlinkSqlParser.KW_WEEK - 160)) | (1 << (FlinkSqlParser.KW_WORK - 160)) | (1 << (FlinkSqlParser.KW_WRAPPER - 160)) | (1 << (FlinkSqlParser.KW_YEARS - 160)) | (1 << (FlinkSqlParser.KW_ZONE - 160)) | (1 << (FlinkSqlParser.KW_ABS - 160)) | (1 << (FlinkSqlParser.KW_ALL - 160)) | (1 << (FlinkSqlParser.ALLOW - 160)) | (1 << (FlinkSqlParser.KW_ALTER - 160)) | (1 << (FlinkSqlParser.KW_AND - 160)) | (1 << (FlinkSqlParser.KW_ANY - 160)) | (1 << (FlinkSqlParser.KW_ARE - 160)) | (1 << (FlinkSqlParser.KW_ARRAY - 160)) | (1 << (FlinkSqlParser.KW_AS - 160)) | (1 << (FlinkSqlParser.KW_AT - 160)) | (1 << (FlinkSqlParser.KW_AVG - 160)) | (1 << (FlinkSqlParser.KW_BEGIN - 160)) | (1 << (FlinkSqlParser.KW_BETWEEN - 160)) | (1 << (FlinkSqlParser.KW_BIGINT - 160)) | (1 << (FlinkSqlParser.KW_BINARY - 160)) | (1 << (FlinkSqlParser.KW_BIT - 160)) | (1 << (FlinkSqlParser.KW_BLOB - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (FlinkSqlParser.KW_BOOLEAN - 192)) | (1 << (FlinkSqlParser.KW_BOTH - 192)) | (1 << (FlinkSqlParser.KW_BY - 192)) | (1 << (FlinkSqlParser.KW_CALL - 192)) | (1 << (FlinkSqlParser.KW_CALLED - 192)) | (1 << (FlinkSqlParser.KW_CASCADED - 192)) | (1 << (FlinkSqlParser.KW_CASE - 192)) | (1 << (FlinkSqlParser.KW_CAST - 192)) | (1 << (FlinkSqlParser.KW_CEIL - 192)) | (1 << (FlinkSqlParser.KW_CHAR - 192)) | (1 << (FlinkSqlParser.KW_CHARACTER - 192)) | (1 << (FlinkSqlParser.KW_CHECK - 192)) | (1 << (FlinkSqlParser.KW_CLOB - 192)) | (1 << (FlinkSqlParser.KW_CLOSE - 192)) | (1 << (FlinkSqlParser.KW_COALESCE - 192)) | (1 << (FlinkSqlParser.KW_COLLATE - 192)) | (1 << (FlinkSqlParser.KW_COLLECT - 192)) | (1 << (FlinkSqlParser.KW_COLUMN - 192)) | (1 << (FlinkSqlParser.KW_COMMIT - 192)) | (1 << (FlinkSqlParser.KW_CONNECT - 192)) | (1 << (FlinkSqlParser.KW_CONSTRAINT - 192)) | (1 << (FlinkSqlParser.KW_CONTAINS - 192)) | (1 << (FlinkSqlParser.KW_CONVERT - 192)) | (1 << (FlinkSqlParser.KW_COUNT - 192)) | (1 << (FlinkSqlParser.KW_CREATE - 192)) | (1 << (FlinkSqlParser.KW_CROSS - 192)) | (1 << (FlinkSqlParser.KW_CUBE - 192)) | (1 << (FlinkSqlParser.KW_CURRENT - 192)) | (1 << (FlinkSqlParser.KW_CURSOR - 192)) | (1 << (FlinkSqlParser.KW_CYCLE - 192)) | (1 << (FlinkSqlParser.KW_DATE - 192)) | (1 << (FlinkSqlParser.KW_DATETIME - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (FlinkSqlParser.KW_DAY - 224)) | (1 << (FlinkSqlParser.KW_DEC - 224)) | (1 << (FlinkSqlParser.KW_DECIMAL - 224)) | (1 << (FlinkSqlParser.KW_DECLARE - 224)) | (1 << (FlinkSqlParser.KW_DEFAULT - 224)) | (1 << (FlinkSqlParser.KW_DEFINE - 224)) | (1 << (FlinkSqlParser.KW_DELETE - 224)) | (1 << (FlinkSqlParser.KW_DESCRIBE - 224)) | (1 << (FlinkSqlParser.KW_DISTINCT - 224)) | (1 << (FlinkSqlParser.KW_DOUBLE - 224)) | (1 << (FlinkSqlParser.KW_DROP - 224)) | (1 << (FlinkSqlParser.KW_EACH - 224)) | (1 << (FlinkSqlParser.KW_ELSE - 224)) | (1 << (FlinkSqlParser.KW_END - 224)) | (1 << (FlinkSqlParser.KW_EQUALS - 224)) | (1 << (FlinkSqlParser.KW_EXCEPT - 224)) | (1 << (FlinkSqlParser.KW_EXECUTE - 224)) | (1 << (FlinkSqlParser.KW_EXISTS - 224)) | (1 << (FlinkSqlParser.KW_EXPLAIN - 224)) | (1 << (FlinkSqlParser.KW_EXTERNAL - 224)) | (1 << (FlinkSqlParser.KW_EXTRACT - 224)) | (1 << (FlinkSqlParser.KW_FALSE - 224)) | (1 << (FlinkSqlParser.KW_FLOAT - 224)) | (1 << (FlinkSqlParser.KW_FOR - 224)) | (1 << (FlinkSqlParser.KW_FROM - 224)) | (1 << (FlinkSqlParser.KW_FULL - 224)) | (1 << (FlinkSqlParser.KW_FUNCTION - 224)) | (1 << (FlinkSqlParser.KW_GLOBAL - 224)) | (1 << (FlinkSqlParser.KW_GRANT - 224)) | (1 << (FlinkSqlParser.KW_GROUP - 224)) | (1 << (FlinkSqlParser.KW_GROUPING - 224)) | (1 << (FlinkSqlParser.KW_GROUPS - 224)))) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & ((1 << (FlinkSqlParser.KW_HAVING - 256)) | (1 << (FlinkSqlParser.KW_HOUR - 256)) | (1 << (FlinkSqlParser.KW_IMPORT - 256)) | (1 << (FlinkSqlParser.KW_IN - 256)) | (1 << (FlinkSqlParser.KW_INCLUDING - 256)) | (1 << (FlinkSqlParser.KW_INNER - 256)) | (1 << (FlinkSqlParser.KW_INOUT - 256)) | (1 << (FlinkSqlParser.KW_INSERT - 256)) | (1 << (FlinkSqlParser.KW_INT - 256)) | (1 << (FlinkSqlParser.KW_INTEGER - 256)) | (1 << (FlinkSqlParser.KW_INTERSECT - 256)) | (1 << (FlinkSqlParser.KW_INTERVAL - 256)) | (1 << (FlinkSqlParser.KW_INTO - 256)) | (1 << (FlinkSqlParser.KW_IS - 256)) | (1 << (FlinkSqlParser.KW_JOIN - 256)) | (1 << (FlinkSqlParser.KW_LAG - 256)) | (1 << (FlinkSqlParser.KW_LANGUAGE - 256)) | (1 << (FlinkSqlParser.KW_LATERAL - 256)) | (1 << (FlinkSqlParser.KW_LEADING - 256)) | (1 << (FlinkSqlParser.KW_LEFT - 256)) | (1 << (FlinkSqlParser.KW_LIKE - 256)) | (1 << (FlinkSqlParser.KW_LIMIT - 256)) | (1 << (FlinkSqlParser.KW_LOCAL - 256)) | (1 << (FlinkSqlParser.KW_MATCH - 256)) | (1 << (FlinkSqlParser.KW_MATCH_RECOGNIZE - 256)) | (1 << (FlinkSqlParser.KW_MEASURES - 256)) | (1 << (FlinkSqlParser.KW_MERGE - 256)) | (1 << (FlinkSqlParser.KW_METADATA - 256)) | (1 << (FlinkSqlParser.KW_MINUS - 256)) | (1 << (FlinkSqlParser.KW_MINUTE - 256)) | (1 << (FlinkSqlParser.KW_MODIFIES - 256)) | (1 << (FlinkSqlParser.KW_MODULE - 256)))) !== 0) || ((((_la - 288)) & ~0x1F) === 0 && ((1 << (_la - 288)) & ((1 << (FlinkSqlParser.KW_MONTH - 288)) | (1 << (FlinkSqlParser.KW_MULTISET - 288)) | (1 << (FlinkSqlParser.KW_NATURAL - 288)) | (1 << (FlinkSqlParser.KW_NEXT - 288)) | (1 << (FlinkSqlParser.KW_NO - 288)) | (1 << (FlinkSqlParser.KW_NONE - 288)) | (1 << (FlinkSqlParser.KW_NOT - 288)) | (1 << (FlinkSqlParser.KW_NULL - 288)) | (1 << (FlinkSqlParser.KW_NUMERIC - 288)) | (1 << (FlinkSqlParser.KW_OF - 288)) | (1 << (FlinkSqlParser.KW_OFFSET - 288)) | (1 << (FlinkSqlParser.KW_ON - 288)) | (1 << (FlinkSqlParser.KW_ONE - 288)) | (1 << (FlinkSqlParser.KW_OR - 288)) | (1 << (FlinkSqlParser.KW_ORDER - 288)) | (1 << (FlinkSqlParser.KW_OUT - 288)) | (1 << (FlinkSqlParser.KW_OUTER - 288)) | (1 << (FlinkSqlParser.KW_OVER - 288)) | (1 << (FlinkSqlParser.KW_OVERLAY - 288)) | (1 << (FlinkSqlParser.KW_PARTITION - 288)) | (1 << (FlinkSqlParser.KW_PATTERN - 288)) | (1 << (FlinkSqlParser.KW_PER - 288)) | (1 << (FlinkSqlParser.KW_PERCENT - 288)) | (1 << (FlinkSqlParser.KW_PERIOD - 288)) | (1 << (FlinkSqlParser.KW_POSITION - 288)) | (1 << (FlinkSqlParser.KW_PRIMARY - 288)) | (1 << (FlinkSqlParser.KW_RANGE - 288)) | (1 << (FlinkSqlParser.KW_RANK - 288)) | (1 << (FlinkSqlParser.KW_RESET - 288)) | (1 << (FlinkSqlParser.KW_REVOKE - 288)) | (1 << (FlinkSqlParser.KW_RIGHT - 288)) | (1 << (FlinkSqlParser.KW_RLIKE - 288)))) !== 0) || ((((_la - 320)) & ~0x1F) === 0 && ((1 << (_la - 320)) & ((1 << (FlinkSqlParser.KW_ROLLBACK - 320)) | (1 << (FlinkSqlParser.KW_ROLLUP - 320)) | (1 << (FlinkSqlParser.KW_ROW - 320)) | (1 << (FlinkSqlParser.KW_ROWS - 320)) | (1 << (FlinkSqlParser.KW_SECOND - 320)) | (1 << (FlinkSqlParser.KW_SELECT - 320)) | (1 << (FlinkSqlParser.KW_SET - 320)) | (1 << (FlinkSqlParser.KW_SHOW - 320)) | (1 << (FlinkSqlParser.KW_SKIP - 320)) | (1 << (FlinkSqlParser.KW_SMALLINT - 320)) | (1 << (FlinkSqlParser.KW_START - 320)) | (1 << (FlinkSqlParser.KW_STATIC - 320)) | (1 << (FlinkSqlParser.KW_SUBSTRING - 320)) | (1 << (FlinkSqlParser.KW_SUM - 320)) | (1 << (FlinkSqlParser.KW_SYSTEM - 320)) | (1 << (FlinkSqlParser.KW_SYSTEM_TIME - 320)) | (1 << (FlinkSqlParser.KW_SYSTEM_USER - 320)) | (1 << (FlinkSqlParser.KW_TABLE - 320)) | (1 << (FlinkSqlParser.KW_TABLESAMPLE - 320)) | (1 << (FlinkSqlParser.KW_THEN - 320)) | (1 << (FlinkSqlParser.KW_TIME - 320)) | (1 << (FlinkSqlParser.KW_TIMESTAMP - 320)) | (1 << (FlinkSqlParser.KW_TINYINT - 320)) | (1 << (FlinkSqlParser.KW_TO - 320)) | (1 << (FlinkSqlParser.KW_TRUE - 320)) | (1 << (FlinkSqlParser.KW_TRUNCATE - 320)) | (1 << (FlinkSqlParser.KW_UNION - 320)) | (1 << (FlinkSqlParser.KW_UNIQUE - 320)) | (1 << (FlinkSqlParser.KW_UNKNOWN - 320)) | (1 << (FlinkSqlParser.KW_UNNEST - 320)) | (1 << (FlinkSqlParser.KW_UPPER - 320)) | (1 << (FlinkSqlParser.KW_UPSERT - 320)))) !== 0) || ((((_la - 352)) & ~0x1F) === 0 && ((1 << (_la - 352)) & ((1 << (FlinkSqlParser.KW_USER - 352)) | (1 << (FlinkSqlParser.KW_USING - 352)) | (1 << (FlinkSqlParser.KW_VALUE - 352)) | (1 << (FlinkSqlParser.KW_VALUES - 352)) | (1 << (FlinkSqlParser.KW_VARBINARY - 352)) | (1 << (FlinkSqlParser.KW_VARCHAR - 352)) | (1 << (FlinkSqlParser.KW_WHEN - 352)) | (1 << (FlinkSqlParser.KW_WHERE - 352)) | (1 << (FlinkSqlParser.KW_WINDOW - 352)) | (1 << (FlinkSqlParser.KW_WITH - 352)) | (1 << (FlinkSqlParser.KW_WITHIN - 352)) | (1 << (FlinkSqlParser.KW_WITHOUT - 352)) | (1 << (FlinkSqlParser.KW_YEAR - 352)) | (1 << (FlinkSqlParser.BIT_NOT_OP - 352)) | (1 << (FlinkSqlParser.LR_BRACKET - 352)))) !== 0) || ((((_la - 387)) & ~0x1F) === 0 && ((1 << (_la - 387)) & ((1 << (FlinkSqlParser.ASTERISK_SIGN - 387)) | (1 << (FlinkSqlParser.HYPNEN_SIGN - 387)) | (1 << (FlinkSqlParser.ADD_SIGN - 387)) | (1 << (FlinkSqlParser.STRING_LITERAL - 387)) | (1 << (FlinkSqlParser.DIG_LITERAL - 387)) | (1 << (FlinkSqlParser.REAL_LITERAL - 387)) | (1 << (FlinkSqlParser.BIT_STRING - 387)) | (1 << (FlinkSqlParser.ID_LITERAL - 387)))) !== 0)) {
					{
					this.state = 1876;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
					case 1:
						{
						this.state = 1875;
						this.setQuantifier();
						}
						break;
					}
					this.state = 1878;
					this.expression();
					this.state = 1883;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FlinkSqlParser.COMMA) {
						{
						{
						this.state = 1879;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1880;
						this.expression();
						}
						}
						this.state = 1885;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1888;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 12:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1890;
				this.identifier();
				}
				break;

			case 13:
				{
				_localctx = new DereferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1891;
				this.dereferenceDefinition();
				}
				break;

			case 14:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1892;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1893;
				this.expression();
				this.state = 1894;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1905;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 215, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
					(_localctx as SubscriptContext)._value = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_primaryExpression);
					this.state = 1898;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 1899;
					this.match(FlinkSqlParser.LS_BRACKET);
					this.state = 1900;
					(_localctx as SubscriptContext)._index = this.valueExpression(0);
					this.state = 1901;
					this.match(FlinkSqlParser.RS_BRACKET);
					}
					}
				}
				this.state = 1907;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 215, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionName(): FunctionNameContext {
		let _localctx: FunctionNameContext = new FunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, FlinkSqlParser.RULE_functionName);
		try {
			this.state = 1911;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 216, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1908;
				this.reservedKeywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1909;
				this.nonReservedKeywords();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1910;
				this.uid();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dereferenceDefinition(): DereferenceDefinitionContext {
		let _localctx: DereferenceDefinitionContext = new DereferenceDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, FlinkSqlParser.RULE_dereferenceDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1913;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public correlationName(): CorrelationNameContext {
		let _localctx: CorrelationNameContext = new CorrelationNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, FlinkSqlParser.RULE_correlationName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1915;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, FlinkSqlParser.RULE_qualifiedName);
		try {
			this.state = 1919;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1917;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1918;
				this.dereferenceDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		let _localctx: TimeIntervalExpressionContext = new TimeIntervalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, FlinkSqlParser.RULE_timeIntervalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1921;
			this.match(FlinkSqlParser.KW_INTERVAL);
			this.state = 1924;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 218, this._ctx) ) {
			case 1:
				{
				this.state = 1922;
				this.errorCapturingMultiUnitsInterval();
				}
				break;

			case 2:
				{
				this.state = 1923;
				this.errorCapturingUnitToUnitInterval();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext {
		let _localctx: ErrorCapturingMultiUnitsIntervalContext = new ErrorCapturingMultiUnitsIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1926;
			this.multiUnitsInterval();
			this.state = 1928;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				{
				this.state = 1927;
				this.unitToUnitInterval();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiUnitsInterval(): MultiUnitsIntervalContext {
		let _localctx: MultiUnitsIntervalContext = new MultiUnitsIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, FlinkSqlParser.RULE_multiUnitsInterval);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1933;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1930;
					this.intervalValue();
					this.state = 1931;
					this.intervalTimeUnit();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1935;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext {
		let _localctx: ErrorCapturingUnitToUnitIntervalContext = new ErrorCapturingUnitToUnitIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1937;
			_localctx._body = this.unitToUnitInterval();
			this.state = 1940;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 221, this._ctx) ) {
			case 1:
				{
				this.state = 1938;
				_localctx._error1 = this.multiUnitsInterval();
				}
				break;

			case 2:
				{
				this.state = 1939;
				_localctx._error2 = this.unitToUnitInterval();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unitToUnitInterval(): UnitToUnitIntervalContext {
		let _localctx: UnitToUnitIntervalContext = new UnitToUnitIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, FlinkSqlParser.RULE_unitToUnitInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1942;
			_localctx._value = this.intervalValue();
			this.state = 1943;
			_localctx._from = this.intervalTimeUnit();
			this.state = 1944;
			this.match(FlinkSqlParser.KW_TO);
			this.state = 1945;
			_localctx._to = this.intervalTimeUnit();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intervalValue(): IntervalValueContext {
		let _localctx: IntervalValueContext = new IntervalValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, FlinkSqlParser.RULE_intervalValue);
		let _la: number;
		try {
			this.state = 1952;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.HYPNEN_SIGN:
			case FlinkSqlParser.ADD_SIGN:
			case FlinkSqlParser.DIG_LITERAL:
			case FlinkSqlParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1948;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.HYPNEN_SIGN || _la === FlinkSqlParser.ADD_SIGN) {
					{
					this.state = 1947;
					_la = this._input.LA(1);
					if (!(_la === FlinkSqlParser.HYPNEN_SIGN || _la === FlinkSqlParser.ADD_SIGN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 1950;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.DIG_LITERAL || _la === FlinkSqlParser.REAL_LITERAL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case FlinkSqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1951;
				this.match(FlinkSqlParser.STRING_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intervalTimeUnit(): IntervalTimeUnitContext {
		let _localctx: IntervalTimeUnitContext = new IntervalTimeUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, FlinkSqlParser.RULE_intervalTimeUnit);
		try {
			this.state = 1956;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_ADD:
			case FlinkSqlParser.KW_ADMIN:
			case FlinkSqlParser.KW_AFTER:
			case FlinkSqlParser.KW_ANALYZE:
			case FlinkSqlParser.KW_ASC:
			case FlinkSqlParser.KW_BEFORE:
			case FlinkSqlParser.KW_BYTES:
			case FlinkSqlParser.KW_CASCADE:
			case FlinkSqlParser.KW_CATALOG:
			case FlinkSqlParser.KW_CATALOGS:
			case FlinkSqlParser.KW_CENTURY:
			case FlinkSqlParser.KW_CHAIN:
			case FlinkSqlParser.KW_CHANGELOG_MODE:
			case FlinkSqlParser.KW_CHARACTERS:
			case FlinkSqlParser.KW_COMMENT:
			case FlinkSqlParser.KW_COMPACT:
			case FlinkSqlParser.KW_COLUMNS:
			case FlinkSqlParser.KW_CONSTRAINTS:
			case FlinkSqlParser.KW_CONSTRUCTOR:
			case FlinkSqlParser.KW_CUMULATE:
			case FlinkSqlParser.KW_DATA:
			case FlinkSqlParser.KW_DATABASE:
			case FlinkSqlParser.KW_DATABASES:
			case FlinkSqlParser.KW_DAYS:
			case FlinkSqlParser.KW_DECADE:
			case FlinkSqlParser.KW_DEFINED:
			case FlinkSqlParser.KW_DESC:
			case FlinkSqlParser.KW_DESCRIPTOR:
			case FlinkSqlParser.KW_DIV:
			case FlinkSqlParser.KW_ENCODING:
			case FlinkSqlParser.KW_ENFORCED:
			case FlinkSqlParser.KW_ENGINE:
			case FlinkSqlParser.KW_ERROR:
			case FlinkSqlParser.KW_ESTIMATED_COST:
			case FlinkSqlParser.KW_EXCEPTION:
			case FlinkSqlParser.KW_EXCLUDE:
			case FlinkSqlParser.KW_EXCLUDING:
			case FlinkSqlParser.KW_EXTENDED:
			case FlinkSqlParser.KW_FILE:
			case FlinkSqlParser.KW_FINAL:
			case FlinkSqlParser.KW_FIRST:
			case FlinkSqlParser.KW_FOLLOWING:
			case FlinkSqlParser.KW_FORMAT:
			case FlinkSqlParser.KW_FORTRAN:
			case FlinkSqlParser.KW_FOUND:
			case FlinkSqlParser.KW_FRAC_SECOND:
			case FlinkSqlParser.KW_FUNCTIONS:
			case FlinkSqlParser.KW_GENERAL:
			case FlinkSqlParser.KW_GENERATED:
			case FlinkSqlParser.KW_GO:
			case FlinkSqlParser.KW_GOTO:
			case FlinkSqlParser.KW_GRANTED:
			case FlinkSqlParser.KW_HOP:
			case FlinkSqlParser.KW_HOURS:
			case FlinkSqlParser.KW_IF:
			case FlinkSqlParser.KW_IGNORE:
			case FlinkSqlParser.KW_INCREMENT:
			case FlinkSqlParser.KW_INPUT:
			case FlinkSqlParser.KW_INVOKER:
			case FlinkSqlParser.KW_JAR:
			case FlinkSqlParser.KW_JARS:
			case FlinkSqlParser.KW_JAVA:
			case FlinkSqlParser.KW_JSON:
			case FlinkSqlParser.KW_JSON_EXECUTION_PLAN:
			case FlinkSqlParser.KW_KEY:
			case FlinkSqlParser.KW_KEY_MEMBER:
			case FlinkSqlParser.KW_KEY_TYPE:
			case FlinkSqlParser.KW_LABEL:
			case FlinkSqlParser.KW_LAST:
			case FlinkSqlParser.KW_LENGTH:
			case FlinkSqlParser.KW_LEVEL:
			case FlinkSqlParser.KW_LOAD:
			case FlinkSqlParser.KW_MAP:
			case FlinkSqlParser.KW_MICROSECOND:
			case FlinkSqlParser.KW_MILLENNIUM:
			case FlinkSqlParser.KW_MILLISECOND:
			case FlinkSqlParser.KW_MINUTES:
			case FlinkSqlParser.KW_MINVALUE:
			case FlinkSqlParser.KW_MODIFY:
			case FlinkSqlParser.KW_MODULES:
			case FlinkSqlParser.KW_MONTHS:
			case FlinkSqlParser.KW_NANOSECOND:
			case FlinkSqlParser.KW_NULLS:
			case FlinkSqlParser.KW_NUMBER:
			case FlinkSqlParser.KW_OPTION:
			case FlinkSqlParser.KW_OPTIONS:
			case FlinkSqlParser.KW_ORDERING:
			case FlinkSqlParser.KW_OUTPUT:
			case FlinkSqlParser.KW_OVERWRITE:
			case FlinkSqlParser.KW_OVERWRITING:
			case FlinkSqlParser.KW_PARTITIONED:
			case FlinkSqlParser.KW_PARTITIONS:
			case FlinkSqlParser.KW_PASSING:
			case FlinkSqlParser.KW_PAST:
			case FlinkSqlParser.KW_PATH:
			case FlinkSqlParser.KW_PLACING:
			case FlinkSqlParser.KW_PLAN:
			case FlinkSqlParser.KW_PRECEDING:
			case FlinkSqlParser.KW_PRESERVE:
			case FlinkSqlParser.KW_PRIOR:
			case FlinkSqlParser.KW_PRIVILEGES:
			case FlinkSqlParser.KW_PUBLIC:
			case FlinkSqlParser.KW_PYTHON:
			case FlinkSqlParser.KW_PYTHON_FILES:
			case FlinkSqlParser.KW_PYTHON_REQUIREMENTS:
			case FlinkSqlParser.KW_PYTHON_DEPENDENCIES:
			case FlinkSqlParser.KW_PYTHON_JAR:
			case FlinkSqlParser.KW_PYTHON_ARCHIVES:
			case FlinkSqlParser.KW_PYTHON_PARAMETER:
			case FlinkSqlParser.KW_QUARTER:
			case FlinkSqlParser.KW_RAW:
			case FlinkSqlParser.KW_READ:
			case FlinkSqlParser.KW_RELATIVE:
			case FlinkSqlParser.KW_REMOVE:
			case FlinkSqlParser.KW_RENAME:
			case FlinkSqlParser.KW_REPLACE:
			case FlinkSqlParser.KW_RESPECT:
			case FlinkSqlParser.KW_RESTART:
			case FlinkSqlParser.KW_RESTRICT:
			case FlinkSqlParser.KW_ROLE:
			case FlinkSqlParser.KW_ROW_COUNT:
			case FlinkSqlParser.KW_SCALA:
			case FlinkSqlParser.KW_SCALAR:
			case FlinkSqlParser.KW_SCALE:
			case FlinkSqlParser.KW_SCHEMA:
			case FlinkSqlParser.KW_SECONDS:
			case FlinkSqlParser.KW_SECTION:
			case FlinkSqlParser.KW_SECURITY:
			case FlinkSqlParser.KW_SELF:
			case FlinkSqlParser.KW_SERVER:
			case FlinkSqlParser.KW_SERVER_NAME:
			case FlinkSqlParser.KW_SESSION:
			case FlinkSqlParser.KW_SETS:
			case FlinkSqlParser.KW_SIMPLE:
			case FlinkSqlParser.KW_SIZE:
			case FlinkSqlParser.KW_SLIDE:
			case FlinkSqlParser.KW_SOURCE:
			case FlinkSqlParser.KW_SPACE:
			case FlinkSqlParser.KW_STATE:
			case FlinkSqlParser.KW_STATEMENT:
			case FlinkSqlParser.KW_STEP:
			case FlinkSqlParser.KW_STRING:
			case FlinkSqlParser.KW_STRUCTURE:
			case FlinkSqlParser.KW_STYLE:
			case FlinkSqlParser.KW_TABLES:
			case FlinkSqlParser.KW_TEMPORARY:
			case FlinkSqlParser.KW_TIMECOL:
			case FlinkSqlParser.KW_TIMESTAMP_LTZ:
			case FlinkSqlParser.KW_TIMESTAMPADD:
			case FlinkSqlParser.KW_TIMESTAMPDIFF:
			case FlinkSqlParser.KW_TRANSFORM:
			case FlinkSqlParser.KW_TUMBLE:
			case FlinkSqlParser.KW_TYPE:
			case FlinkSqlParser.KW_UNDER:
			case FlinkSqlParser.KW_UNLOAD:
			case FlinkSqlParser.KW_USAGE:
			case FlinkSqlParser.KW_USE:
			case FlinkSqlParser.KW_UTF16:
			case FlinkSqlParser.KW_UTF32:
			case FlinkSqlParser.KW_UTF8:
			case FlinkSqlParser.KW_VERSION:
			case FlinkSqlParser.KW_VIEW:
			case FlinkSqlParser.KW_VIEWS:
			case FlinkSqlParser.KW_VIRTUAL:
			case FlinkSqlParser.KW_WATERMARK:
			case FlinkSqlParser.KW_WATERMARKS:
			case FlinkSqlParser.KW_WEEK:
			case FlinkSqlParser.KW_WORK:
			case FlinkSqlParser.KW_WRAPPER:
			case FlinkSqlParser.KW_YEARS:
			case FlinkSqlParser.KW_ZONE:
			case FlinkSqlParser.STRING_LITERAL:
			case FlinkSqlParser.DIG_LITERAL:
			case FlinkSqlParser.ID_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1954;
				this.identifier();
				}
				break;
			case FlinkSqlParser.KW_ABS:
			case FlinkSqlParser.KW_ALL:
			case FlinkSqlParser.ALLOW:
			case FlinkSqlParser.KW_ALTER:
			case FlinkSqlParser.KW_AND:
			case FlinkSqlParser.KW_ANY:
			case FlinkSqlParser.KW_ARE:
			case FlinkSqlParser.KW_ARRAY:
			case FlinkSqlParser.KW_AS:
			case FlinkSqlParser.KW_AT:
			case FlinkSqlParser.KW_AVG:
			case FlinkSqlParser.KW_BEGIN:
			case FlinkSqlParser.KW_BETWEEN:
			case FlinkSqlParser.KW_BIGINT:
			case FlinkSqlParser.KW_BINARY:
			case FlinkSqlParser.KW_BIT:
			case FlinkSqlParser.KW_BLOB:
			case FlinkSqlParser.KW_BOOLEAN:
			case FlinkSqlParser.KW_BOTH:
			case FlinkSqlParser.KW_BY:
			case FlinkSqlParser.KW_CALL:
			case FlinkSqlParser.KW_CALLED:
			case FlinkSqlParser.KW_CASCADED:
			case FlinkSqlParser.KW_CASE:
			case FlinkSqlParser.KW_CAST:
			case FlinkSqlParser.KW_CEIL:
			case FlinkSqlParser.KW_CHAR:
			case FlinkSqlParser.KW_CHARACTER:
			case FlinkSqlParser.KW_CHECK:
			case FlinkSqlParser.KW_CLOB:
			case FlinkSqlParser.KW_CLOSE:
			case FlinkSqlParser.KW_COALESCE:
			case FlinkSqlParser.KW_COLLATE:
			case FlinkSqlParser.KW_COLLECT:
			case FlinkSqlParser.KW_COLUMN:
			case FlinkSqlParser.KW_COMMIT:
			case FlinkSqlParser.KW_CONNECT:
			case FlinkSqlParser.KW_CONSTRAINT:
			case FlinkSqlParser.KW_CONTAINS:
			case FlinkSqlParser.KW_CONVERT:
			case FlinkSqlParser.KW_COUNT:
			case FlinkSqlParser.KW_CREATE:
			case FlinkSqlParser.KW_CROSS:
			case FlinkSqlParser.KW_CUBE:
			case FlinkSqlParser.KW_CURRENT:
			case FlinkSqlParser.KW_CURSOR:
			case FlinkSqlParser.KW_CYCLE:
			case FlinkSqlParser.KW_DATE:
			case FlinkSqlParser.KW_DATETIME:
			case FlinkSqlParser.KW_DAY:
			case FlinkSqlParser.KW_DEC:
			case FlinkSqlParser.KW_DECIMAL:
			case FlinkSqlParser.KW_DECLARE:
			case FlinkSqlParser.KW_DEFAULT:
			case FlinkSqlParser.KW_DEFINE:
			case FlinkSqlParser.KW_DELETE:
			case FlinkSqlParser.KW_DESCRIBE:
			case FlinkSqlParser.KW_DISTINCT:
			case FlinkSqlParser.KW_DOUBLE:
			case FlinkSqlParser.KW_DROP:
			case FlinkSqlParser.KW_EACH:
			case FlinkSqlParser.KW_ELSE:
			case FlinkSqlParser.KW_END:
			case FlinkSqlParser.KW_EQUALS:
			case FlinkSqlParser.KW_EXCEPT:
			case FlinkSqlParser.KW_EXECUTE:
			case FlinkSqlParser.KW_EXISTS:
			case FlinkSqlParser.KW_EXPLAIN:
			case FlinkSqlParser.KW_EXTERNAL:
			case FlinkSqlParser.KW_EXTRACT:
			case FlinkSqlParser.KW_FALSE:
			case FlinkSqlParser.KW_FLOAT:
			case FlinkSqlParser.KW_FOR:
			case FlinkSqlParser.KW_FROM:
			case FlinkSqlParser.KW_FULL:
			case FlinkSqlParser.KW_FUNCTION:
			case FlinkSqlParser.KW_GLOBAL:
			case FlinkSqlParser.KW_GRANT:
			case FlinkSqlParser.KW_GROUP:
			case FlinkSqlParser.KW_GROUPING:
			case FlinkSqlParser.KW_GROUPS:
			case FlinkSqlParser.KW_HAVING:
			case FlinkSqlParser.KW_HOUR:
			case FlinkSqlParser.KW_IMPORT:
			case FlinkSqlParser.KW_IN:
			case FlinkSqlParser.KW_INCLUDING:
			case FlinkSqlParser.KW_INNER:
			case FlinkSqlParser.KW_INOUT:
			case FlinkSqlParser.KW_INSERT:
			case FlinkSqlParser.KW_INT:
			case FlinkSqlParser.KW_INTEGER:
			case FlinkSqlParser.KW_INTERSECT:
			case FlinkSqlParser.KW_INTERVAL:
			case FlinkSqlParser.KW_INTO:
			case FlinkSqlParser.KW_IS:
			case FlinkSqlParser.KW_JOIN:
			case FlinkSqlParser.KW_LAG:
			case FlinkSqlParser.KW_LANGUAGE:
			case FlinkSqlParser.KW_LATERAL:
			case FlinkSqlParser.KW_LEADING:
			case FlinkSqlParser.KW_LEFT:
			case FlinkSqlParser.KW_LIKE:
			case FlinkSqlParser.KW_LIMIT:
			case FlinkSqlParser.KW_LOCAL:
			case FlinkSqlParser.KW_MATCH:
			case FlinkSqlParser.KW_MATCH_RECOGNIZE:
			case FlinkSqlParser.KW_MEASURES:
			case FlinkSqlParser.KW_MERGE:
			case FlinkSqlParser.KW_METADATA:
			case FlinkSqlParser.KW_MINUS:
			case FlinkSqlParser.KW_MINUTE:
			case FlinkSqlParser.KW_MODIFIES:
			case FlinkSqlParser.KW_MODULE:
			case FlinkSqlParser.KW_MONTH:
			case FlinkSqlParser.KW_MULTISET:
			case FlinkSqlParser.KW_NATURAL:
			case FlinkSqlParser.KW_NEXT:
			case FlinkSqlParser.KW_NO:
			case FlinkSqlParser.KW_NONE:
			case FlinkSqlParser.KW_NOT:
			case FlinkSqlParser.KW_NULL:
			case FlinkSqlParser.KW_NUMERIC:
			case FlinkSqlParser.KW_OF:
			case FlinkSqlParser.KW_OFFSET:
			case FlinkSqlParser.KW_ON:
			case FlinkSqlParser.KW_ONE:
			case FlinkSqlParser.KW_OR:
			case FlinkSqlParser.KW_ORDER:
			case FlinkSqlParser.KW_OUT:
			case FlinkSqlParser.KW_OUTER:
			case FlinkSqlParser.KW_OVER:
			case FlinkSqlParser.KW_OVERLAY:
			case FlinkSqlParser.KW_PARTITION:
			case FlinkSqlParser.KW_PATTERN:
			case FlinkSqlParser.KW_PER:
			case FlinkSqlParser.KW_PERCENT:
			case FlinkSqlParser.KW_PERIOD:
			case FlinkSqlParser.KW_POSITION:
			case FlinkSqlParser.KW_PRIMARY:
			case FlinkSqlParser.KW_RANGE:
			case FlinkSqlParser.KW_RANK:
			case FlinkSqlParser.KW_RESET:
			case FlinkSqlParser.KW_REVOKE:
			case FlinkSqlParser.KW_RIGHT:
			case FlinkSqlParser.KW_RLIKE:
			case FlinkSqlParser.KW_ROLLBACK:
			case FlinkSqlParser.KW_ROLLUP:
			case FlinkSqlParser.KW_ROW:
			case FlinkSqlParser.KW_ROWS:
			case FlinkSqlParser.KW_SECOND:
			case FlinkSqlParser.KW_SELECT:
			case FlinkSqlParser.KW_SET:
			case FlinkSqlParser.KW_SHOW:
			case FlinkSqlParser.KW_SKIP:
			case FlinkSqlParser.KW_SMALLINT:
			case FlinkSqlParser.KW_START:
			case FlinkSqlParser.KW_STATIC:
			case FlinkSqlParser.KW_SUBSTRING:
			case FlinkSqlParser.KW_SUM:
			case FlinkSqlParser.KW_SYSTEM:
			case FlinkSqlParser.KW_SYSTEM_TIME:
			case FlinkSqlParser.KW_SYSTEM_USER:
			case FlinkSqlParser.KW_TABLE:
			case FlinkSqlParser.KW_TABLESAMPLE:
			case FlinkSqlParser.KW_THEN:
			case FlinkSqlParser.KW_TIME:
			case FlinkSqlParser.KW_TIMESTAMP:
			case FlinkSqlParser.KW_TINYINT:
			case FlinkSqlParser.KW_TO:
			case FlinkSqlParser.KW_TRUE:
			case FlinkSqlParser.KW_TRUNCATE:
			case FlinkSqlParser.KW_UNION:
			case FlinkSqlParser.KW_UNIQUE:
			case FlinkSqlParser.KW_UNKNOWN:
			case FlinkSqlParser.KW_UNNEST:
			case FlinkSqlParser.KW_UPPER:
			case FlinkSqlParser.KW_UPSERT:
			case FlinkSqlParser.KW_USER:
			case FlinkSqlParser.KW_USING:
			case FlinkSqlParser.KW_VALUE:
			case FlinkSqlParser.KW_VALUES:
			case FlinkSqlParser.KW_VARBINARY:
			case FlinkSqlParser.KW_VARCHAR:
			case FlinkSqlParser.KW_WHEN:
			case FlinkSqlParser.KW_WHERE:
			case FlinkSqlParser.KW_WINDOW:
			case FlinkSqlParser.KW_WITH:
			case FlinkSqlParser.KW_WITHIN:
			case FlinkSqlParser.KW_WITHOUT:
			case FlinkSqlParser.KW_YEAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1955;
				this.reservedKeywords();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnAlias(): ColumnAliasContext {
		let _localctx: ColumnAliasContext = new ColumnAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, FlinkSqlParser.RULE_columnAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1959;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_AS) {
				{
				this.state = 1958;
				this.match(FlinkSqlParser.KW_AS);
				}
			}

			this.state = 1961;
			this.identifier();
			this.state = 1963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.LR_BRACKET) {
				{
				this.state = 1962;
				this.identifierList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableAlias(): TableAliasContext {
		let _localctx: TableAliasContext = new TableAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, FlinkSqlParser.RULE_tableAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1966;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_AS) {
				{
				this.state = 1965;
				this.match(FlinkSqlParser.KW_AS);
				}
			}

			this.state = 1968;
			this.identifier();
			this.state = 1970;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				{
				this.state = 1969;
				this.identifierList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		let _localctx: ErrorCapturingIdentifierContext = new ErrorCapturingIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, FlinkSqlParser.RULE_errorCapturingIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1972;
			this.identifier();
			this.state = 1973;
			this.errorCapturingIdentifierExtra();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
		let _localctx: ErrorCapturingIdentifierExtraContext = new ErrorCapturingIdentifierExtraContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, FlinkSqlParser.RULE_errorCapturingIdentifierExtra);
		let _la: number;
		try {
			this.state = 1982;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_MINUS:
				_localctx = new ErrorIdentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1975;
					this.match(FlinkSqlParser.KW_MINUS);
					this.state = 1976;
					this.identifier();
					}
					}
					this.state = 1979;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSqlParser.KW_MINUS);
				}
				break;
			case FlinkSqlParser.KW_AS:
			case FlinkSqlParser.LR_BRACKET:
				_localctx = new RealIdentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, FlinkSqlParser.RULE_identifierList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1984;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1985;
			this.identifierSeq();
			this.state = 1986;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierSeq(): IdentifierSeqContext {
		let _localctx: IdentifierSeqContext = new IdentifierSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, FlinkSqlParser.RULE_identifierSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1988;
			this.identifier();
			this.state = 1993;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1989;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1990;
				this.identifier();
				}
				}
				this.state = 1995;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, FlinkSqlParser.RULE_identifier);
		try {
			this.state = 1999;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.DIG_LITERAL:
			case FlinkSqlParser.ID_LITERAL:
				_localctx = new UnquotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1996;
				this.unquotedIdentifier();
				}
				break;
			case FlinkSqlParser.STRING_LITERAL:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1997;
				this.quotedIdentifier();
				}
				break;
			case FlinkSqlParser.KW_ADD:
			case FlinkSqlParser.KW_ADMIN:
			case FlinkSqlParser.KW_AFTER:
			case FlinkSqlParser.KW_ANALYZE:
			case FlinkSqlParser.KW_ASC:
			case FlinkSqlParser.KW_BEFORE:
			case FlinkSqlParser.KW_BYTES:
			case FlinkSqlParser.KW_CASCADE:
			case FlinkSqlParser.KW_CATALOG:
			case FlinkSqlParser.KW_CATALOGS:
			case FlinkSqlParser.KW_CENTURY:
			case FlinkSqlParser.KW_CHAIN:
			case FlinkSqlParser.KW_CHANGELOG_MODE:
			case FlinkSqlParser.KW_CHARACTERS:
			case FlinkSqlParser.KW_COMMENT:
			case FlinkSqlParser.KW_COMPACT:
			case FlinkSqlParser.KW_COLUMNS:
			case FlinkSqlParser.KW_CONSTRAINTS:
			case FlinkSqlParser.KW_CONSTRUCTOR:
			case FlinkSqlParser.KW_CUMULATE:
			case FlinkSqlParser.KW_DATA:
			case FlinkSqlParser.KW_DATABASE:
			case FlinkSqlParser.KW_DATABASES:
			case FlinkSqlParser.KW_DAYS:
			case FlinkSqlParser.KW_DECADE:
			case FlinkSqlParser.KW_DEFINED:
			case FlinkSqlParser.KW_DESC:
			case FlinkSqlParser.KW_DESCRIPTOR:
			case FlinkSqlParser.KW_DIV:
			case FlinkSqlParser.KW_ENCODING:
			case FlinkSqlParser.KW_ENFORCED:
			case FlinkSqlParser.KW_ENGINE:
			case FlinkSqlParser.KW_ERROR:
			case FlinkSqlParser.KW_ESTIMATED_COST:
			case FlinkSqlParser.KW_EXCEPTION:
			case FlinkSqlParser.KW_EXCLUDE:
			case FlinkSqlParser.KW_EXCLUDING:
			case FlinkSqlParser.KW_EXTENDED:
			case FlinkSqlParser.KW_FILE:
			case FlinkSqlParser.KW_FINAL:
			case FlinkSqlParser.KW_FIRST:
			case FlinkSqlParser.KW_FOLLOWING:
			case FlinkSqlParser.KW_FORMAT:
			case FlinkSqlParser.KW_FORTRAN:
			case FlinkSqlParser.KW_FOUND:
			case FlinkSqlParser.KW_FRAC_SECOND:
			case FlinkSqlParser.KW_FUNCTIONS:
			case FlinkSqlParser.KW_GENERAL:
			case FlinkSqlParser.KW_GENERATED:
			case FlinkSqlParser.KW_GO:
			case FlinkSqlParser.KW_GOTO:
			case FlinkSqlParser.KW_GRANTED:
			case FlinkSqlParser.KW_HOP:
			case FlinkSqlParser.KW_HOURS:
			case FlinkSqlParser.KW_IF:
			case FlinkSqlParser.KW_IGNORE:
			case FlinkSqlParser.KW_INCREMENT:
			case FlinkSqlParser.KW_INPUT:
			case FlinkSqlParser.KW_INVOKER:
			case FlinkSqlParser.KW_JAR:
			case FlinkSqlParser.KW_JARS:
			case FlinkSqlParser.KW_JAVA:
			case FlinkSqlParser.KW_JSON:
			case FlinkSqlParser.KW_JSON_EXECUTION_PLAN:
			case FlinkSqlParser.KW_KEY:
			case FlinkSqlParser.KW_KEY_MEMBER:
			case FlinkSqlParser.KW_KEY_TYPE:
			case FlinkSqlParser.KW_LABEL:
			case FlinkSqlParser.KW_LAST:
			case FlinkSqlParser.KW_LENGTH:
			case FlinkSqlParser.KW_LEVEL:
			case FlinkSqlParser.KW_LOAD:
			case FlinkSqlParser.KW_MAP:
			case FlinkSqlParser.KW_MICROSECOND:
			case FlinkSqlParser.KW_MILLENNIUM:
			case FlinkSqlParser.KW_MILLISECOND:
			case FlinkSqlParser.KW_MINUTES:
			case FlinkSqlParser.KW_MINVALUE:
			case FlinkSqlParser.KW_MODIFY:
			case FlinkSqlParser.KW_MODULES:
			case FlinkSqlParser.KW_MONTHS:
			case FlinkSqlParser.KW_NANOSECOND:
			case FlinkSqlParser.KW_NULLS:
			case FlinkSqlParser.KW_NUMBER:
			case FlinkSqlParser.KW_OPTION:
			case FlinkSqlParser.KW_OPTIONS:
			case FlinkSqlParser.KW_ORDERING:
			case FlinkSqlParser.KW_OUTPUT:
			case FlinkSqlParser.KW_OVERWRITE:
			case FlinkSqlParser.KW_OVERWRITING:
			case FlinkSqlParser.KW_PARTITIONED:
			case FlinkSqlParser.KW_PARTITIONS:
			case FlinkSqlParser.KW_PASSING:
			case FlinkSqlParser.KW_PAST:
			case FlinkSqlParser.KW_PATH:
			case FlinkSqlParser.KW_PLACING:
			case FlinkSqlParser.KW_PLAN:
			case FlinkSqlParser.KW_PRECEDING:
			case FlinkSqlParser.KW_PRESERVE:
			case FlinkSqlParser.KW_PRIOR:
			case FlinkSqlParser.KW_PRIVILEGES:
			case FlinkSqlParser.KW_PUBLIC:
			case FlinkSqlParser.KW_PYTHON:
			case FlinkSqlParser.KW_PYTHON_FILES:
			case FlinkSqlParser.KW_PYTHON_REQUIREMENTS:
			case FlinkSqlParser.KW_PYTHON_DEPENDENCIES:
			case FlinkSqlParser.KW_PYTHON_JAR:
			case FlinkSqlParser.KW_PYTHON_ARCHIVES:
			case FlinkSqlParser.KW_PYTHON_PARAMETER:
			case FlinkSqlParser.KW_QUARTER:
			case FlinkSqlParser.KW_RAW:
			case FlinkSqlParser.KW_READ:
			case FlinkSqlParser.KW_RELATIVE:
			case FlinkSqlParser.KW_REMOVE:
			case FlinkSqlParser.KW_RENAME:
			case FlinkSqlParser.KW_REPLACE:
			case FlinkSqlParser.KW_RESPECT:
			case FlinkSqlParser.KW_RESTART:
			case FlinkSqlParser.KW_RESTRICT:
			case FlinkSqlParser.KW_ROLE:
			case FlinkSqlParser.KW_ROW_COUNT:
			case FlinkSqlParser.KW_SCALA:
			case FlinkSqlParser.KW_SCALAR:
			case FlinkSqlParser.KW_SCALE:
			case FlinkSqlParser.KW_SCHEMA:
			case FlinkSqlParser.KW_SECONDS:
			case FlinkSqlParser.KW_SECTION:
			case FlinkSqlParser.KW_SECURITY:
			case FlinkSqlParser.KW_SELF:
			case FlinkSqlParser.KW_SERVER:
			case FlinkSqlParser.KW_SERVER_NAME:
			case FlinkSqlParser.KW_SESSION:
			case FlinkSqlParser.KW_SETS:
			case FlinkSqlParser.KW_SIMPLE:
			case FlinkSqlParser.KW_SIZE:
			case FlinkSqlParser.KW_SLIDE:
			case FlinkSqlParser.KW_SOURCE:
			case FlinkSqlParser.KW_SPACE:
			case FlinkSqlParser.KW_STATE:
			case FlinkSqlParser.KW_STATEMENT:
			case FlinkSqlParser.KW_STEP:
			case FlinkSqlParser.KW_STRING:
			case FlinkSqlParser.KW_STRUCTURE:
			case FlinkSqlParser.KW_STYLE:
			case FlinkSqlParser.KW_TABLES:
			case FlinkSqlParser.KW_TEMPORARY:
			case FlinkSqlParser.KW_TIMECOL:
			case FlinkSqlParser.KW_TIMESTAMP_LTZ:
			case FlinkSqlParser.KW_TIMESTAMPADD:
			case FlinkSqlParser.KW_TIMESTAMPDIFF:
			case FlinkSqlParser.KW_TRANSFORM:
			case FlinkSqlParser.KW_TUMBLE:
			case FlinkSqlParser.KW_TYPE:
			case FlinkSqlParser.KW_UNDER:
			case FlinkSqlParser.KW_UNLOAD:
			case FlinkSqlParser.KW_USAGE:
			case FlinkSqlParser.KW_USE:
			case FlinkSqlParser.KW_UTF16:
			case FlinkSqlParser.KW_UTF32:
			case FlinkSqlParser.KW_UTF8:
			case FlinkSqlParser.KW_VERSION:
			case FlinkSqlParser.KW_VIEW:
			case FlinkSqlParser.KW_VIEWS:
			case FlinkSqlParser.KW_VIRTUAL:
			case FlinkSqlParser.KW_WATERMARK:
			case FlinkSqlParser.KW_WATERMARKS:
			case FlinkSqlParser.KW_WEEK:
			case FlinkSqlParser.KW_WORK:
			case FlinkSqlParser.KW_WRAPPER:
			case FlinkSqlParser.KW_YEARS:
			case FlinkSqlParser.KW_ZONE:
				_localctx = new NonReservedKeywordsAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1998;
				this.nonReservedKeywords();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unquotedIdentifier(): UnquotedIdentifierContext {
		let _localctx: UnquotedIdentifierContext = new UnquotedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, FlinkSqlParser.RULE_unquotedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2001;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.DIG_LITERAL || _la === FlinkSqlParser.ID_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quotedIdentifier(): QuotedIdentifierContext {
		let _localctx: QuotedIdentifierContext = new QuotedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, FlinkSqlParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2003;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenClause(): WhenClauseContext {
		let _localctx: WhenClauseContext = new WhenClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, FlinkSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2005;
			this.match(FlinkSqlParser.KW_WHEN);
			this.state = 2006;
			_localctx._condition = this.expression();
			this.state = 2007;
			this.match(FlinkSqlParser.KW_THEN);
			this.state = 2008;
			_localctx._result = this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uid(): UidContext {
		let _localctx: UidContext = new UidContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, FlinkSqlParser.RULE_uid);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2010;
			this.identifier();
			this.state = 2015;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 233, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 2011;
					this.match(FlinkSqlParser.DOT);
					this.state = 2012;
					this.identifier();
					}
					}
				}
				this.state = 2017;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 233, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withOption(): WithOptionContext {
		let _localctx: WithOptionContext = new WithOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, FlinkSqlParser.RULE_withOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2018;
			this.match(FlinkSqlParser.KW_WITH);
			this.state = 2019;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifNotExists(): IfNotExistsContext {
		let _localctx: IfNotExistsContext = new IfNotExistsContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, FlinkSqlParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2021;
			this.match(FlinkSqlParser.KW_IF);
			this.state = 2022;
			this.match(FlinkSqlParser.KW_NOT);
			this.state = 2023;
			this.match(FlinkSqlParser.KW_EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifExists(): IfExistsContext {
		let _localctx: IfExistsContext = new IfExistsContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, FlinkSqlParser.RULE_ifExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2025;
			this.match(FlinkSqlParser.KW_IF);
			this.state = 2026;
			this.match(FlinkSqlParser.KW_EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePropertyList(): TablePropertyListContext {
		let _localctx: TablePropertyListContext = new TablePropertyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, FlinkSqlParser.RULE_tablePropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2028;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 2029;
			this.tableProperty();
			this.state = 2034;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 2030;
				this.match(FlinkSqlParser.COMMA);
				this.state = 2031;
				this.tableProperty();
				}
				}
				this.state = 2036;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2037;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableProperty(): TablePropertyContext {
		let _localctx: TablePropertyContext = new TablePropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, FlinkSqlParser.RULE_tableProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2039;
			_localctx._key = this.tablePropertyKey();
			this.state = 2044;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_FALSE || _la === FlinkSqlParser.KW_TRUE || _la === FlinkSqlParser.EQUAL_SYMBOL || ((((_la - 397)) & ~0x1F) === 0 && ((1 << (_la - 397)) & ((1 << (FlinkSqlParser.STRING_LITERAL - 397)) | (1 << (FlinkSqlParser.DIG_LITERAL - 397)) | (1 << (FlinkSqlParser.REAL_LITERAL - 397)))) !== 0)) {
				{
				this.state = 2041;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.EQUAL_SYMBOL) {
					{
					this.state = 2040;
					this.match(FlinkSqlParser.EQUAL_SYMBOL);
					}
				}

				this.state = 2043;
				_localctx._value = this.tablePropertyValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePropertyKey(): TablePropertyKeyContext {
		let _localctx: TablePropertyKeyContext = new TablePropertyKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, FlinkSqlParser.RULE_tablePropertyKey);
		try {
			this.state = 2049;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 237, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2046;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2047;
				this.dereferenceDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2048;
				this.match(FlinkSqlParser.STRING_LITERAL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePropertyValue(): TablePropertyValueContext {
		let _localctx: TablePropertyValueContext = new TablePropertyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, FlinkSqlParser.RULE_tablePropertyValue);
		try {
			this.state = 2055;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.DIG_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2051;
				this.match(FlinkSqlParser.DIG_LITERAL);
				}
				break;
			case FlinkSqlParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2052;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case FlinkSqlParser.KW_FALSE:
			case FlinkSqlParser.KW_TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2053;
				this.booleanLiteral();
				}
				break;
			case FlinkSqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2054;
				this.match(FlinkSqlParser.STRING_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalOperator(): LogicalOperatorContext {
		let _localctx: LogicalOperatorContext = new LogicalOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, FlinkSqlParser.RULE_logicalOperator);
		try {
			this.state = 2063;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_AND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2057;
				this.match(FlinkSqlParser.KW_AND);
				}
				break;
			case FlinkSqlParser.BIT_AND_OP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2058;
				this.match(FlinkSqlParser.BIT_AND_OP);
				this.state = 2059;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case FlinkSqlParser.KW_OR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2060;
				this.match(FlinkSqlParser.KW_OR);
				}
				break;
			case FlinkSqlParser.BIT_OR_OP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2061;
				this.match(FlinkSqlParser.BIT_OR_OP);
				this.state = 2062;
				this.match(FlinkSqlParser.BIT_OR_OP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, FlinkSqlParser.RULE_comparisonOperator);
		try {
			this.state = 2079;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2065;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2066;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2067;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2068;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2069;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2070;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 2071;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2072;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2073;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2074;
				this.match(FlinkSqlParser.EXCLAMATION_SYMBOL);
				this.state = 2075;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2076;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2077;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				this.state = 2078;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitOperator(): BitOperatorContext {
		let _localctx: BitOperatorContext = new BitOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, FlinkSqlParser.RULE_bitOperator);
		try {
			this.state = 2088;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.LESS_SYMBOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2081;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2082;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;
			case FlinkSqlParser.GREATER_SYMBOL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2083;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 2084;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case FlinkSqlParser.BIT_AND_OP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2085;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case FlinkSqlParser.BIT_XOR_OP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2086;
				this.match(FlinkSqlParser.BIT_XOR_OP);
				}
				break;
			case FlinkSqlParser.BIT_OR_OP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2087;
				this.match(FlinkSqlParser.BIT_OR_OP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mathOperator(): MathOperatorContext {
		let _localctx: MathOperatorContext = new MathOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, FlinkSqlParser.RULE_mathOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2090;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_DIV || ((((_la - 387)) & ~0x1F) === 0 && ((1 << (_la - 387)) & ((1 << (FlinkSqlParser.ASTERISK_SIGN - 387)) | (1 << (FlinkSqlParser.HYPNEN_SIGN - 387)) | (1 << (FlinkSqlParser.ADD_SIGN - 387)) | (1 << (FlinkSqlParser.PENCENT_SIGN - 387)) | (1 << (FlinkSqlParser.DOUBLE_HYPNEN_SIGN - 387)) | (1 << (FlinkSqlParser.SLASH_SIGN - 387)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, FlinkSqlParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2092;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_NOT || ((((_la - 368)) & ~0x1F) === 0 && ((1 << (_la - 368)) & ((1 << (FlinkSqlParser.EXCLAMATION_SYMBOL - 368)) | (1 << (FlinkSqlParser.BIT_NOT_OP - 368)) | (1 << (FlinkSqlParser.HYPNEN_SIGN - 368)) | (1 << (FlinkSqlParser.ADD_SIGN - 368)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, FlinkSqlParser.RULE_constant);
		let _la: number;
		try {
			this.state = 2106;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2094;
				this.stringLiteral();
				}
				break;
			case FlinkSqlParser.DIG_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2095;
				this.decimalLiteral();
				}
				break;
			case FlinkSqlParser.KW_INTERVAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2096;
				this.timeIntervalExpression();
				}
				break;
			case FlinkSqlParser.HYPNEN_SIGN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2097;
				this.match(FlinkSqlParser.HYPNEN_SIGN);
				this.state = 2098;
				this.decimalLiteral();
				}
				break;
			case FlinkSqlParser.KW_FALSE:
			case FlinkSqlParser.KW_TRUE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2099;
				this.booleanLiteral();
				}
				break;
			case FlinkSqlParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2100;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case FlinkSqlParser.BIT_STRING:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2101;
				this.match(FlinkSqlParser.BIT_STRING);
				}
				break;
			case FlinkSqlParser.KW_NOT:
			case FlinkSqlParser.KW_NULL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 2102;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 2105;
				this.match(FlinkSqlParser.KW_NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, FlinkSqlParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2108;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decimalLiteral(): DecimalLiteralContext {
		let _localctx: DecimalLiteralContext = new DecimalLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, FlinkSqlParser.RULE_decimalLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2110;
			this.match(FlinkSqlParser.DIG_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanLiteral(): BooleanLiteralContext {
		let _localctx: BooleanLiteralContext = new BooleanLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, FlinkSqlParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2112;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_FALSE || _la === FlinkSqlParser.KW_TRUE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setQuantifier(): SetQuantifierContext {
		let _localctx: SetQuantifierContext = new SetQuantifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, FlinkSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2114;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_ALL || _la === FlinkSqlParser.KW_DISTINCT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedKeywords(): ReservedKeywordsContext {
		let _localctx: ReservedKeywordsContext = new ReservedKeywordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, FlinkSqlParser.RULE_reservedKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2116;
			_la = this._input.LA(1);
			if (!(((((_la - 175)) & ~0x1F) === 0 && ((1 << (_la - 175)) & ((1 << (FlinkSqlParser.KW_ABS - 175)) | (1 << (FlinkSqlParser.KW_ALL - 175)) | (1 << (FlinkSqlParser.ALLOW - 175)) | (1 << (FlinkSqlParser.KW_ALTER - 175)) | (1 << (FlinkSqlParser.KW_AND - 175)) | (1 << (FlinkSqlParser.KW_ANY - 175)) | (1 << (FlinkSqlParser.KW_ARE - 175)) | (1 << (FlinkSqlParser.KW_ARRAY - 175)) | (1 << (FlinkSqlParser.KW_AS - 175)) | (1 << (FlinkSqlParser.KW_AT - 175)) | (1 << (FlinkSqlParser.KW_AVG - 175)) | (1 << (FlinkSqlParser.KW_BEGIN - 175)) | (1 << (FlinkSqlParser.KW_BETWEEN - 175)) | (1 << (FlinkSqlParser.KW_BIGINT - 175)) | (1 << (FlinkSqlParser.KW_BINARY - 175)) | (1 << (FlinkSqlParser.KW_BIT - 175)) | (1 << (FlinkSqlParser.KW_BLOB - 175)) | (1 << (FlinkSqlParser.KW_BOOLEAN - 175)) | (1 << (FlinkSqlParser.KW_BOTH - 175)) | (1 << (FlinkSqlParser.KW_BY - 175)) | (1 << (FlinkSqlParser.KW_CALL - 175)) | (1 << (FlinkSqlParser.KW_CALLED - 175)) | (1 << (FlinkSqlParser.KW_CASCADED - 175)) | (1 << (FlinkSqlParser.KW_CASE - 175)) | (1 << (FlinkSqlParser.KW_CAST - 175)) | (1 << (FlinkSqlParser.KW_CEIL - 175)) | (1 << (FlinkSqlParser.KW_CHAR - 175)) | (1 << (FlinkSqlParser.KW_CHARACTER - 175)) | (1 << (FlinkSqlParser.KW_CHECK - 175)) | (1 << (FlinkSqlParser.KW_CLOB - 175)) | (1 << (FlinkSqlParser.KW_CLOSE - 175)) | (1 << (FlinkSqlParser.KW_COALESCE - 175)))) !== 0) || ((((_la - 207)) & ~0x1F) === 0 && ((1 << (_la - 207)) & ((1 << (FlinkSqlParser.KW_COLLATE - 207)) | (1 << (FlinkSqlParser.KW_COLLECT - 207)) | (1 << (FlinkSqlParser.KW_COLUMN - 207)) | (1 << (FlinkSqlParser.KW_COMMIT - 207)) | (1 << (FlinkSqlParser.KW_CONNECT - 207)) | (1 << (FlinkSqlParser.KW_CONSTRAINT - 207)) | (1 << (FlinkSqlParser.KW_CONTAINS - 207)) | (1 << (FlinkSqlParser.KW_CONVERT - 207)) | (1 << (FlinkSqlParser.KW_COUNT - 207)) | (1 << (FlinkSqlParser.KW_CREATE - 207)) | (1 << (FlinkSqlParser.KW_CROSS - 207)) | (1 << (FlinkSqlParser.KW_CUBE - 207)) | (1 << (FlinkSqlParser.KW_CURRENT - 207)) | (1 << (FlinkSqlParser.KW_CURSOR - 207)) | (1 << (FlinkSqlParser.KW_CYCLE - 207)) | (1 << (FlinkSqlParser.KW_DATE - 207)) | (1 << (FlinkSqlParser.KW_DATETIME - 207)) | (1 << (FlinkSqlParser.KW_DAY - 207)) | (1 << (FlinkSqlParser.KW_DEC - 207)) | (1 << (FlinkSqlParser.KW_DECIMAL - 207)) | (1 << (FlinkSqlParser.KW_DECLARE - 207)) | (1 << (FlinkSqlParser.KW_DEFAULT - 207)) | (1 << (FlinkSqlParser.KW_DEFINE - 207)) | (1 << (FlinkSqlParser.KW_DELETE - 207)) | (1 << (FlinkSqlParser.KW_DESCRIBE - 207)) | (1 << (FlinkSqlParser.KW_DISTINCT - 207)) | (1 << (FlinkSqlParser.KW_DOUBLE - 207)) | (1 << (FlinkSqlParser.KW_DROP - 207)) | (1 << (FlinkSqlParser.KW_EACH - 207)) | (1 << (FlinkSqlParser.KW_ELSE - 207)) | (1 << (FlinkSqlParser.KW_END - 207)) | (1 << (FlinkSqlParser.KW_EQUALS - 207)))) !== 0) || ((((_la - 239)) & ~0x1F) === 0 && ((1 << (_la - 239)) & ((1 << (FlinkSqlParser.KW_EXCEPT - 239)) | (1 << (FlinkSqlParser.KW_EXECUTE - 239)) | (1 << (FlinkSqlParser.KW_EXISTS - 239)) | (1 << (FlinkSqlParser.KW_EXPLAIN - 239)) | (1 << (FlinkSqlParser.KW_EXTERNAL - 239)) | (1 << (FlinkSqlParser.KW_EXTRACT - 239)) | (1 << (FlinkSqlParser.KW_FALSE - 239)) | (1 << (FlinkSqlParser.KW_FLOAT - 239)) | (1 << (FlinkSqlParser.KW_FOR - 239)) | (1 << (FlinkSqlParser.KW_FROM - 239)) | (1 << (FlinkSqlParser.KW_FULL - 239)) | (1 << (FlinkSqlParser.KW_FUNCTION - 239)) | (1 << (FlinkSqlParser.KW_GLOBAL - 239)) | (1 << (FlinkSqlParser.KW_GRANT - 239)) | (1 << (FlinkSqlParser.KW_GROUP - 239)) | (1 << (FlinkSqlParser.KW_GROUPING - 239)) | (1 << (FlinkSqlParser.KW_GROUPS - 239)) | (1 << (FlinkSqlParser.KW_HAVING - 239)) | (1 << (FlinkSqlParser.KW_HOUR - 239)) | (1 << (FlinkSqlParser.KW_IMPORT - 239)) | (1 << (FlinkSqlParser.KW_IN - 239)) | (1 << (FlinkSqlParser.KW_INCLUDING - 239)) | (1 << (FlinkSqlParser.KW_INNER - 239)) | (1 << (FlinkSqlParser.KW_INOUT - 239)) | (1 << (FlinkSqlParser.KW_INSERT - 239)) | (1 << (FlinkSqlParser.KW_INT - 239)) | (1 << (FlinkSqlParser.KW_INTEGER - 239)) | (1 << (FlinkSqlParser.KW_INTERSECT - 239)) | (1 << (FlinkSqlParser.KW_INTERVAL - 239)) | (1 << (FlinkSqlParser.KW_INTO - 239)) | (1 << (FlinkSqlParser.KW_IS - 239)) | (1 << (FlinkSqlParser.KW_JOIN - 239)))) !== 0) || ((((_la - 271)) & ~0x1F) === 0 && ((1 << (_la - 271)) & ((1 << (FlinkSqlParser.KW_LAG - 271)) | (1 << (FlinkSqlParser.KW_LANGUAGE - 271)) | (1 << (FlinkSqlParser.KW_LATERAL - 271)) | (1 << (FlinkSqlParser.KW_LEADING - 271)) | (1 << (FlinkSqlParser.KW_LEFT - 271)) | (1 << (FlinkSqlParser.KW_LIKE - 271)) | (1 << (FlinkSqlParser.KW_LIMIT - 271)) | (1 << (FlinkSqlParser.KW_LOCAL - 271)) | (1 << (FlinkSqlParser.KW_MATCH - 271)) | (1 << (FlinkSqlParser.KW_MATCH_RECOGNIZE - 271)) | (1 << (FlinkSqlParser.KW_MEASURES - 271)) | (1 << (FlinkSqlParser.KW_MERGE - 271)) | (1 << (FlinkSqlParser.KW_METADATA - 271)) | (1 << (FlinkSqlParser.KW_MINUS - 271)) | (1 << (FlinkSqlParser.KW_MINUTE - 271)) | (1 << (FlinkSqlParser.KW_MODIFIES - 271)) | (1 << (FlinkSqlParser.KW_MODULE - 271)) | (1 << (FlinkSqlParser.KW_MONTH - 271)) | (1 << (FlinkSqlParser.KW_MULTISET - 271)) | (1 << (FlinkSqlParser.KW_NATURAL - 271)) | (1 << (FlinkSqlParser.KW_NEXT - 271)) | (1 << (FlinkSqlParser.KW_NO - 271)) | (1 << (FlinkSqlParser.KW_NONE - 271)) | (1 << (FlinkSqlParser.KW_NOT - 271)) | (1 << (FlinkSqlParser.KW_NULL - 271)) | (1 << (FlinkSqlParser.KW_NUMERIC - 271)) | (1 << (FlinkSqlParser.KW_OF - 271)) | (1 << (FlinkSqlParser.KW_OFFSET - 271)) | (1 << (FlinkSqlParser.KW_ON - 271)) | (1 << (FlinkSqlParser.KW_ONE - 271)) | (1 << (FlinkSqlParser.KW_OR - 271)) | (1 << (FlinkSqlParser.KW_ORDER - 271)))) !== 0) || ((((_la - 303)) & ~0x1F) === 0 && ((1 << (_la - 303)) & ((1 << (FlinkSqlParser.KW_OUT - 303)) | (1 << (FlinkSqlParser.KW_OUTER - 303)) | (1 << (FlinkSqlParser.KW_OVER - 303)) | (1 << (FlinkSqlParser.KW_OVERLAY - 303)) | (1 << (FlinkSqlParser.KW_PARTITION - 303)) | (1 << (FlinkSqlParser.KW_PATTERN - 303)) | (1 << (FlinkSqlParser.KW_PER - 303)) | (1 << (FlinkSqlParser.KW_PERCENT - 303)) | (1 << (FlinkSqlParser.KW_PERIOD - 303)) | (1 << (FlinkSqlParser.KW_POSITION - 303)) | (1 << (FlinkSqlParser.KW_PRIMARY - 303)) | (1 << (FlinkSqlParser.KW_RANGE - 303)) | (1 << (FlinkSqlParser.KW_RANK - 303)) | (1 << (FlinkSqlParser.KW_RESET - 303)) | (1 << (FlinkSqlParser.KW_REVOKE - 303)) | (1 << (FlinkSqlParser.KW_RIGHT - 303)) | (1 << (FlinkSqlParser.KW_RLIKE - 303)) | (1 << (FlinkSqlParser.KW_ROLLBACK - 303)) | (1 << (FlinkSqlParser.KW_ROLLUP - 303)) | (1 << (FlinkSqlParser.KW_ROW - 303)) | (1 << (FlinkSqlParser.KW_ROWS - 303)) | (1 << (FlinkSqlParser.KW_SECOND - 303)) | (1 << (FlinkSqlParser.KW_SELECT - 303)) | (1 << (FlinkSqlParser.KW_SET - 303)) | (1 << (FlinkSqlParser.KW_SHOW - 303)) | (1 << (FlinkSqlParser.KW_SKIP - 303)) | (1 << (FlinkSqlParser.KW_SMALLINT - 303)) | (1 << (FlinkSqlParser.KW_START - 303)) | (1 << (FlinkSqlParser.KW_STATIC - 303)) | (1 << (FlinkSqlParser.KW_SUBSTRING - 303)) | (1 << (FlinkSqlParser.KW_SUM - 303)) | (1 << (FlinkSqlParser.KW_SYSTEM - 303)))) !== 0) || ((((_la - 335)) & ~0x1F) === 0 && ((1 << (_la - 335)) & ((1 << (FlinkSqlParser.KW_SYSTEM_TIME - 335)) | (1 << (FlinkSqlParser.KW_SYSTEM_USER - 335)) | (1 << (FlinkSqlParser.KW_TABLE - 335)) | (1 << (FlinkSqlParser.KW_TABLESAMPLE - 335)) | (1 << (FlinkSqlParser.KW_THEN - 335)) | (1 << (FlinkSqlParser.KW_TIME - 335)) | (1 << (FlinkSqlParser.KW_TIMESTAMP - 335)) | (1 << (FlinkSqlParser.KW_TINYINT - 335)) | (1 << (FlinkSqlParser.KW_TO - 335)) | (1 << (FlinkSqlParser.KW_TRUE - 335)) | (1 << (FlinkSqlParser.KW_TRUNCATE - 335)) | (1 << (FlinkSqlParser.KW_UNION - 335)) | (1 << (FlinkSqlParser.KW_UNIQUE - 335)) | (1 << (FlinkSqlParser.KW_UNKNOWN - 335)) | (1 << (FlinkSqlParser.KW_UNNEST - 335)) | (1 << (FlinkSqlParser.KW_UPPER - 335)) | (1 << (FlinkSqlParser.KW_UPSERT - 335)) | (1 << (FlinkSqlParser.KW_USER - 335)) | (1 << (FlinkSqlParser.KW_USING - 335)) | (1 << (FlinkSqlParser.KW_VALUE - 335)) | (1 << (FlinkSqlParser.KW_VALUES - 335)) | (1 << (FlinkSqlParser.KW_VARBINARY - 335)) | (1 << (FlinkSqlParser.KW_VARCHAR - 335)) | (1 << (FlinkSqlParser.KW_WHEN - 335)) | (1 << (FlinkSqlParser.KW_WHERE - 335)) | (1 << (FlinkSqlParser.KW_WINDOW - 335)) | (1 << (FlinkSqlParser.KW_WITH - 335)) | (1 << (FlinkSqlParser.KW_WITHIN - 335)) | (1 << (FlinkSqlParser.KW_WITHOUT - 335)) | (1 << (FlinkSqlParser.KW_YEAR - 335)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonReservedKeywords(): NonReservedKeywordsContext {
		let _localctx: NonReservedKeywordsContext = new NonReservedKeywordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, FlinkSqlParser.RULE_nonReservedKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2118;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSqlParser.KW_ADD) | (1 << FlinkSqlParser.KW_ADMIN) | (1 << FlinkSqlParser.KW_AFTER) | (1 << FlinkSqlParser.KW_ANALYZE) | (1 << FlinkSqlParser.KW_ASC) | (1 << FlinkSqlParser.KW_BEFORE) | (1 << FlinkSqlParser.KW_BYTES) | (1 << FlinkSqlParser.KW_CASCADE) | (1 << FlinkSqlParser.KW_CATALOG) | (1 << FlinkSqlParser.KW_CATALOGS) | (1 << FlinkSqlParser.KW_CENTURY) | (1 << FlinkSqlParser.KW_CHAIN) | (1 << FlinkSqlParser.KW_CHANGELOG_MODE) | (1 << FlinkSqlParser.KW_CHARACTERS) | (1 << FlinkSqlParser.KW_COMMENT) | (1 << FlinkSqlParser.KW_COMPACT) | (1 << FlinkSqlParser.KW_COLUMNS) | (1 << FlinkSqlParser.KW_CONSTRAINTS) | (1 << FlinkSqlParser.KW_CONSTRUCTOR) | (1 << FlinkSqlParser.KW_CUMULATE) | (1 << FlinkSqlParser.KW_DATA) | (1 << FlinkSqlParser.KW_DATABASE) | (1 << FlinkSqlParser.KW_DATABASES) | (1 << FlinkSqlParser.KW_DAYS) | (1 << FlinkSqlParser.KW_DECADE) | (1 << FlinkSqlParser.KW_DEFINED) | (1 << FlinkSqlParser.KW_DESC) | (1 << FlinkSqlParser.KW_DESCRIPTOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSqlParser.KW_DIV - 32)) | (1 << (FlinkSqlParser.KW_ENCODING - 32)) | (1 << (FlinkSqlParser.KW_ENFORCED - 32)) | (1 << (FlinkSqlParser.KW_ENGINE - 32)) | (1 << (FlinkSqlParser.KW_ERROR - 32)) | (1 << (FlinkSqlParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSqlParser.KW_EXCEPTION - 32)) | (1 << (FlinkSqlParser.KW_EXCLUDE - 32)) | (1 << (FlinkSqlParser.KW_EXCLUDING - 32)) | (1 << (FlinkSqlParser.KW_EXTENDED - 32)) | (1 << (FlinkSqlParser.KW_FILE - 32)) | (1 << (FlinkSqlParser.KW_FINAL - 32)) | (1 << (FlinkSqlParser.KW_FIRST - 32)) | (1 << (FlinkSqlParser.KW_FOLLOWING - 32)) | (1 << (FlinkSqlParser.KW_FORMAT - 32)) | (1 << (FlinkSqlParser.KW_FORTRAN - 32)) | (1 << (FlinkSqlParser.KW_FOUND - 32)) | (1 << (FlinkSqlParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSqlParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSqlParser.KW_GENERAL - 32)) | (1 << (FlinkSqlParser.KW_GENERATED - 32)) | (1 << (FlinkSqlParser.KW_GO - 32)) | (1 << (FlinkSqlParser.KW_GOTO - 32)) | (1 << (FlinkSqlParser.KW_GRANTED - 32)) | (1 << (FlinkSqlParser.KW_HOP - 32)) | (1 << (FlinkSqlParser.KW_HOURS - 32)) | (1 << (FlinkSqlParser.KW_IF - 32)) | (1 << (FlinkSqlParser.KW_IGNORE - 32)) | (1 << (FlinkSqlParser.KW_INCREMENT - 32)) | (1 << (FlinkSqlParser.KW_INPUT - 32)) | (1 << (FlinkSqlParser.KW_INVOKER - 32)) | (1 << (FlinkSqlParser.KW_JAR - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSqlParser.KW_JARS - 64)) | (1 << (FlinkSqlParser.KW_JAVA - 64)) | (1 << (FlinkSqlParser.KW_JSON - 64)) | (1 << (FlinkSqlParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSqlParser.KW_KEY - 64)) | (1 << (FlinkSqlParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSqlParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSqlParser.KW_LABEL - 64)) | (1 << (FlinkSqlParser.KW_LAST - 64)) | (1 << (FlinkSqlParser.KW_LENGTH - 64)) | (1 << (FlinkSqlParser.KW_LEVEL - 64)) | (1 << (FlinkSqlParser.KW_LOAD - 64)) | (1 << (FlinkSqlParser.KW_MAP - 64)) | (1 << (FlinkSqlParser.KW_MICROSECOND - 64)) | (1 << (FlinkSqlParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSqlParser.KW_MILLISECOND - 64)) | (1 << (FlinkSqlParser.KW_MINUTES - 64)) | (1 << (FlinkSqlParser.KW_MINVALUE - 64)) | (1 << (FlinkSqlParser.KW_MODIFY - 64)) | (1 << (FlinkSqlParser.KW_MODULES - 64)) | (1 << (FlinkSqlParser.KW_MONTHS - 64)) | (1 << (FlinkSqlParser.KW_NANOSECOND - 64)) | (1 << (FlinkSqlParser.KW_NULLS - 64)) | (1 << (FlinkSqlParser.KW_NUMBER - 64)) | (1 << (FlinkSqlParser.KW_OPTION - 64)) | (1 << (FlinkSqlParser.KW_OPTIONS - 64)) | (1 << (FlinkSqlParser.KW_ORDERING - 64)) | (1 << (FlinkSqlParser.KW_OUTPUT - 64)) | (1 << (FlinkSqlParser.KW_OVERWRITE - 64)) | (1 << (FlinkSqlParser.KW_OVERWRITING - 64)) | (1 << (FlinkSqlParser.KW_PARTITIONED - 64)) | (1 << (FlinkSqlParser.KW_PARTITIONS - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSqlParser.KW_PASSING - 96)) | (1 << (FlinkSqlParser.KW_PAST - 96)) | (1 << (FlinkSqlParser.KW_PATH - 96)) | (1 << (FlinkSqlParser.KW_PLACING - 96)) | (1 << (FlinkSqlParser.KW_PLAN - 96)) | (1 << (FlinkSqlParser.KW_PRECEDING - 96)) | (1 << (FlinkSqlParser.KW_PRESERVE - 96)) | (1 << (FlinkSqlParser.KW_PRIOR - 96)) | (1 << (FlinkSqlParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSqlParser.KW_PUBLIC - 96)) | (1 << (FlinkSqlParser.KW_PYTHON - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSqlParser.KW_QUARTER - 96)) | (1 << (FlinkSqlParser.KW_RAW - 96)) | (1 << (FlinkSqlParser.KW_READ - 96)) | (1 << (FlinkSqlParser.KW_RELATIVE - 96)) | (1 << (FlinkSqlParser.KW_REMOVE - 96)) | (1 << (FlinkSqlParser.KW_RENAME - 96)) | (1 << (FlinkSqlParser.KW_REPLACE - 96)) | (1 << (FlinkSqlParser.KW_RESPECT - 96)) | (1 << (FlinkSqlParser.KW_RESTART - 96)) | (1 << (FlinkSqlParser.KW_RESTRICT - 96)) | (1 << (FlinkSqlParser.KW_ROLE - 96)) | (1 << (FlinkSqlParser.KW_ROW_COUNT - 96)) | (1 << (FlinkSqlParser.KW_SCALA - 96)) | (1 << (FlinkSqlParser.KW_SCALAR - 96)) | (1 << (FlinkSqlParser.KW_SCALE - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSqlParser.KW_SCHEMA - 128)) | (1 << (FlinkSqlParser.KW_SECONDS - 128)) | (1 << (FlinkSqlParser.KW_SECTION - 128)) | (1 << (FlinkSqlParser.KW_SECURITY - 128)) | (1 << (FlinkSqlParser.KW_SELF - 128)) | (1 << (FlinkSqlParser.KW_SERVER - 128)) | (1 << (FlinkSqlParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSqlParser.KW_SESSION - 128)) | (1 << (FlinkSqlParser.KW_SETS - 128)) | (1 << (FlinkSqlParser.KW_SIMPLE - 128)) | (1 << (FlinkSqlParser.KW_SIZE - 128)) | (1 << (FlinkSqlParser.KW_SLIDE - 128)) | (1 << (FlinkSqlParser.KW_SOURCE - 128)) | (1 << (FlinkSqlParser.KW_SPACE - 128)) | (1 << (FlinkSqlParser.KW_STATE - 128)) | (1 << (FlinkSqlParser.KW_STATEMENT - 128)) | (1 << (FlinkSqlParser.KW_STEP - 128)) | (1 << (FlinkSqlParser.KW_STRING - 128)) | (1 << (FlinkSqlParser.KW_STRUCTURE - 128)) | (1 << (FlinkSqlParser.KW_STYLE - 128)) | (1 << (FlinkSqlParser.KW_TABLES - 128)) | (1 << (FlinkSqlParser.KW_TEMPORARY - 128)) | (1 << (FlinkSqlParser.KW_TIMECOL - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSqlParser.KW_TRANSFORM - 128)) | (1 << (FlinkSqlParser.KW_TUMBLE - 128)) | (1 << (FlinkSqlParser.KW_TYPE - 128)) | (1 << (FlinkSqlParser.KW_UNDER - 128)) | (1 << (FlinkSqlParser.KW_UNLOAD - 128)) | (1 << (FlinkSqlParser.KW_USAGE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSqlParser.KW_USE - 160)) | (1 << (FlinkSqlParser.KW_UTF16 - 160)) | (1 << (FlinkSqlParser.KW_UTF32 - 160)) | (1 << (FlinkSqlParser.KW_UTF8 - 160)) | (1 << (FlinkSqlParser.KW_VERSION - 160)) | (1 << (FlinkSqlParser.KW_VIEW - 160)) | (1 << (FlinkSqlParser.KW_VIEWS - 160)) | (1 << (FlinkSqlParser.KW_VIRTUAL - 160)) | (1 << (FlinkSqlParser.KW_WATERMARK - 160)) | (1 << (FlinkSqlParser.KW_WATERMARKS - 160)) | (1 << (FlinkSqlParser.KW_WEEK - 160)) | (1 << (FlinkSqlParser.KW_WORK - 160)) | (1 << (FlinkSqlParser.KW_WRAPPER - 160)) | (1 << (FlinkSqlParser.KW_YEARS - 160)) | (1 << (FlinkSqlParser.KW_ZONE - 160)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 78:
			return this.queryStatement_sempred(_localctx as QueryStatementContext, predIndex);

		case 88:
			return this.tableExpression_sempred(_localctx as TableExpressionContext, predIndex);

		case 130:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 133:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);

		case 134:
			return this.primaryExpression_sempred(_localctx as PrimaryExpressionContext, predIndex);
		}
		return true;
	}
	private queryStatement_sempred(_localctx: QueryStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private tableExpression_sempred(_localctx: TableExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 3);

		case 2:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private booleanExpression_sempred(_localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);

		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private valueExpression_sempred(_localctx: ValueExpressionContext, predIndex: number): boolean {
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
	private primaryExpression_sempred(_localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u0194\u084B\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x03\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04\u016B\n\x04\x03\x04\x07\x04" +
		"\u016E\n\x04\f\x04\x0E\x04\u0171\v\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
		"\u017F\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07\u0191\n\x07\x03\b\x03\b\x05\b\u0195\n\b\x03\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\u019E\n\n\x03\n\x03\n\x03\n\x05\n\u01A3\n\n\x03\v" +
		"\x03\v\x03\v\x07\v\u01A8\n\v\f\v\x0E\v\u01AB\v\v\x03\f\x03\f\x03\r\x03" +
		"\r\x05\r\u01B1\n\r\x03\r\x03\r\x05\r\u01B5\n\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x07\x0E\u01BC\n\x0E\f\x0E\x0E\x0E\u01BF\v\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\u01CA\n\x0F\x03\x0F\x05\x0F\u01CD\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\u01D4\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u01DC\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01E1\n\x0F\x03" +
		"\x0F\x05\x0F\u01E4\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\u01EB\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x05\x12\u01F3" +
		"\n\x12\x03\x13\x03\x13\x05\x13\u01F7\n\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0203\n\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u020B\n\x15\x03" +
		"\x15\x03\x15\x05\x15\u020F\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0224\n\x15\x03\x16\x03" +
		"\x16\x05\x16\u0228\n\x16\x03\x17\x03\x17\x05\x17\u022C\n\x17\x03\x17\x03" +
		"\x17\x05\x17\u0230\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17" +
		"\u0237\n\x17\f\x17\x0E\x17\u023A\v\x17\x03\x17\x03\x17\x05\x17\u023E\n" +
		"\x17\x03\x17\x03\x17\x05\x17\u0242\n\x17\x03\x17\x03\x17\x05\x17\u0246" +
		"\n\x17\x03\x17\x03\x17\x05\x17\u024A\n\x17\x03\x17\x05\x17\u024D\n\x17" +
		"\x03\x17\x03\x17\x05\x17\u0251\n\x17\x03\x18\x03\x18\x03\x18\x05\x18\u0256" +
		"\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u025C\n\x18\x03\x19\x03" +
		"\x19\x03\x19\x05\x19\u0261\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0266" +
		"\n\x1A\x03\x1A\x05\x1A\u0269\n\x1A\x03\x1B\x03\x1B\x05\x1B\u026D\n\x1B" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0273\n\x1C\f\x1C\x0E\x1C\u0276" +
		"\v\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u027D\n\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u0281\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0285\n\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u0289\n\x1D\x03\x1D\x03\x1D\x05\x1D\u028D\n\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u0291\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0295\n\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u0299\n\x1D\x03\x1D\x03\x1D\x05\x1D\u029D\n\x1D\x05" +
		"\x1D\u029F\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x05\x1F\u02A9\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x05 " +
		"\u02B1\n \x03 \x03 \x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"" +
		"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x07#\u02C7\n#\f#\x0E#" +
		"\u02CA\v#\x03#\x03#\x03$\x03$\x05$\u02D0\n$\x03$\x03$\x03$\x03$\x03$\x03" +
		"%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x05&\u02DF\n&\x03&\x05&\u02E2\n&" +
		"\x03\'\x03\'\x03(\x03(\x03(\x03(\x05(\u02EA\n(\x03)\x03)\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x03+\x03+\x05+\u02F6\n+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03" +
		"/\x07/\u030C\n/\f/\x0E/\u030F\v/\x03/\x03/\x030\x030\x030\x030\x030\x03" +
		"0\x070\u0319\n0\f0\x0E0\u031C\v0\x030\x030\x050\u0320\n0\x031\x031\x05" +
		"1\u0324\n1\x032\x032\x032\x032\x072\u032A\n2\f2\x0E2\u032D\v2\x032\x05" +
		"2\u0330\n2\x033\x033\x034\x034\x034\x034\x054\u0338\n4\x035\x035\x035" +
		"\x035\x035\x036\x036\x036\x056\u0342\n6\x036\x036\x056\u0346\n6\x036\x03" +
		"6\x037\x037\x057\u034C\n7\x037\x037\x057\u0350\n7\x037\x037\x057\u0354" +
		"\n7\x037\x057\u0357\n7\x037\x037\x037\x038\x038\x038\x038\x058\u0360\n" +
		"8\x038\x038\x058\u0364\n8\x038\x038\x038\x038\x038\x058\u036B\n8\x038" +
		"\x058\u036E\n8\x039\x039\x039\x039\x039\x039\x079\u0376\n9\f9\x0E9\u0379" +
		"\v9\x03:\x03:\x03;\x03;\x03;\x05;\u0380\n;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x05;\u0388\n;\x03<\x03<\x05<\u038C\n<\x03<\x03<\x03<\x03=\x03=\x03=" +
		"\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x05>\u039B\n>\x03?\x03?\x03?\x03?" +
		"\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x05" +
		"B\u03AE\nB\x03C\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x05D\u03B9\nD" +
		"\x03D\x03D\x05D\u03BD\nD\x03D\x03D\x03D\x03D\x03D\x05D\u03C4\nD\x03E\x03" +
		"E\x03E\x05E\u03C9\nE\x03E\x03E\x03F\x03F\x05F\u03CF\nF\x03F\x03F\x05F" +
		"\u03D3\nF\x03F\x03F\x03G\x03G\x03G\x05G\u03DA\nG\x03G\x03G\x05G\u03DE" +
		"\nG\x03H\x03H\x05H\u03E2\nH\x03H\x03H\x05H\u03E6\nH\x03H\x03H\x03I\x03" +
		"I\x03I\x03I\x05I\u03EE\nI\x03I\x03I\x05I\u03F2\nI\x03I\x03I\x03J\x05J" +
		"\u03F7\nJ\x03J\x03J\x03J\x05J\u03FC\nJ\x03K\x03K\x03K\x03K\x05K\u0402" +
		"\nK\x03K\x05K\u0405\nK\x03K\x03K\x05K\u0409\nK\x03L\x03L\x03L\x03M\x03" +
		"M\x03M\x03M\x07M\u0412\nM\fM\x0EM\u0415\vM\x03N\x03N\x03N\x03N\x07N\u041B" +
		"\nN\fN\x0EN\u041E\vN\x03N\x03N\x03O\x03O\x03O\x03O\x03O\x03O\x06O\u0428" +
		"\nO\rO\x0EO\u0429\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03" +
		"P\x03P\x03P\x05P\u0439\nP\x03P\x05P\u043C\nP\x03P\x03P\x05P\u0440\nP\x03" +
		"P\x05P\u0443\nP\x05P\u0445\nP\x03P\x03P\x03P\x05P\u044A\nP\x03P\x03P\x05" +
		"P\u044E\nP\x03P\x05P\u0451\nP\x07P\u0453\nP\fP\x0EP\u0456\vP\x03Q\x03" +
		"Q\x03Q\x03Q\x07Q\u045C\nQ\fQ\x0EQ\u045F\vQ\x03R\x03R\x03R\x03R\x07R\u0465" +
		"\nR\fR\x0ER\u0468\vR\x03S\x03S\x03S\x03S\x03S\x07S\u046F\nS\fS\x0ES\u0472" +
		"\vS\x03S\x03S\x05S\u0476\nS\x03S\x03S\x03S\x03S\x03S\x03T\x03T\x03U\x03" +
		"U\x03U\x05U\u0482\nU\x03U\x05U\u0485\nU\x03U\x05U\u0488\nU\x03U\x05U\u048B" +
		"\nU\x03U\x03U\x03U\x03U\x05U\u0491\nU\x03V\x03V\x05V\u0495\nV\x03V\x03" +
		"V\x03V\x03V\x07V\u049B\nV\fV\x0EV\u049E\vV\x05V\u04A0\nV\x03W\x03W\x03" +
		"W\x05W\u04A5\nW\x03W\x05W\u04A8\nW\x05W\u04AA\nW\x03X\x03X\x03X\x03X\x03" +
		"X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x05X\u04B8\nX\x03Y\x03Y\x03Y\x03" +
		"Z\x03Z\x03Z\x03Z\x07Z\u04C1\nZ\fZ\x0EZ\u04C4\vZ\x03Z\x03Z\x05Z\u04C8\n" +
		"Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u04D0\nZ\x03Z\x05Z\u04D3\nZ\x03Z" +
		"\x05Z\u04D6\nZ\x03Z\x03Z\x03Z\x05Z\u04DB\nZ\x07Z\u04DD\nZ\fZ\x0EZ\u04E0" +
		"\vZ\x03[\x03[\x05[\u04E4\n[\x03\\\x05\\\u04E7\n\\\x03\\\x03\\\x05\\\u04EB" +
		"\n\\\x03\\\x05\\\u04EE\n\\\x03\\\x05\\\u04F1\n\\\x03\\\x03\\\x03\\\x03" +
		"\\\x03\\\x03\\\x03\\\x03\\\x07\\\u04FB\n\\\f\\\x0E\\\u04FE\v\\\x03\\\x03" +
		"\\\x03\\\x03\\\x05\\\u0504\n\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03" +
		"\\\x03\\\x03\\\x05\\\u050F\n\\\x03]\x03]\x03^\x03^\x03^\x03^\x03^\x03" +
		"^\x03_\x03_\x03`\x03`\x03`\x03`\x03`\x03a\x03a\x03a\x03a\x03a\x03b\x03" +
		"b\x03b\x03b\x03b\x07b\u052A\nb\fb\x0Eb\u052D\vb\x03b\x03b\x03c\x03c\x03" +
		"d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03" +
		"d\x05d\u0542\nd\x03e\x03e\x03f\x03f\x03f\x03f\x03f\x03g\x03g\x03g\x03" +
		"g\x03g\x03g\x03g\x07g\u0552\ng\fg\x0Eg\u0555\vg\x03g\x03g\x05g\u0559\n" +
		"g\x03h\x03h\x03h\x03i\x03i\x03i\x03i\x03i\x07i\u0563\ni\fi\x0Ei\u0566" +
		"\vi\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x07j\u0570\nj\fj\x0Ej\u0573" +
		"\vj\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x07j\u057C\nj\fj\x0Ej\u057F\vj" +
		"\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x07j\u0588\nj\fj\x0Ej\u058B\vj\x03" +
		"j\x03j\x05j\u058F\nj\x03k\x03k\x03k\x03l\x03l\x03m\x03m\x03m\x03m\x03" +
		"m\x03m\x03m\x03n\x03n\x03o\x03o\x03p\x03p\x03p\x03q\x03q\x03q\x03q\x07" +
		"q\u05A8\nq\fq\x0Eq\u05AB\vq\x03r\x03r\x03r\x03r\x03s\x05s\u05B2\ns\x03" +
		"s\x03s\x05s\u05B6\ns\x03s\x05s\u05B9\ns\x03s\x05s\u05BC\ns\x03s\x03s\x03" +
		"t\x03t\x03t\x05t\u05C3\nt\x03t\x05t\u05C6\nt\x03t\x05t\u05C9\nt\x03t\x05" +
		"t\u05CC\nt\x03t\x05t\u05CF\nt\x03t\x05t\u05D2\nt\x03t\x03t\x03t\x05t\u05D7" +
		"\nt\x03t\x05t\u05DA\nt\x03u\x03u\x03u\x03u\x03u\x07u\u05E1\nu\fu\x0Eu" +
		"\u05E4\vu\x03v\x03v\x05v\u05E8\nv\x03v\x03v\x05v\u05EC\nv\x03w\x03w\x03" +
		"w\x05w\u05F1\nw\x03x\x03x\x03x\x03x\x03x\x07x\u05F8\nx\fx\x0Ex\u05FB\v" +
		"x\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x03" +
		"y\x03y\x03y\x05y\u060D\ny\x03z\x03z\x03z\x03z\x07z\u0613\nz\fz\x0Ez\u0616" +
		"\vz\x03{\x03{\x03{\x06{\u061B\n{\r{\x0E{\u061C\x03{\x03{\x05{\u0621\n" +
		"{\x03|\x03|\x05|\u0625\n|\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x05" +
		"}\u062F\n}\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03" +
		"~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x05~\u0649" +
		"\n~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x07\x7F\u064F\n\x7F\f\x7F\x0E\x7F" +
		"\u0652\v\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03" +
		"\x80\x03\x80\x05\x80\u065D\n\x80\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81" +
		"\x03\x82\x03\x82\x03\x82\x03\x83\x03\x83\x03\x84\x03\x84\x03\x84\x03\x84" +
		"\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x05\x84\u0673\n\x84\x05" +
		"\x84\u0675\n\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x07\x84" +
		"\u067D\n\x84\f\x84\x0E\x84\u0680\v\x84\x03\x85\x05\x85\u0683\n\x85\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u068B\n\x85\x03\x85" +
		"\x03\x85\x03\x85\x03\x85\x03\x85\x07\x85\u0692\n\x85\f\x85\x0E\x85\u0695" +
		"\v\x85\x03\x85\x03\x85\x03\x85\x05\x85\u069A\n\x85\x03\x85\x03\x85\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05" +
		"\x85\u06A7\n\x85\x03\x85\x03\x85\x03\x85\x05\x85\u06AC\n\x85\x03\x85\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x07\x85\u06B6\n\x85" +
		"\f\x85\x0E\x85\u06B9\v\x85\x03\x85\x03\x85\x05\x85\u06BD\n\x85\x03\x85" +
		"\x05\x85\u06C0\n\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u06C6\n\x85" +
		"\x03\x85\x03\x85\x03\x85\x05\x85\u06CB\n\x85\x03\x85\x03\x85\x03\x85\x05" +
		"\x85\u06D0\n\x85\x03\x85\x03\x85\x03\x85\x05\x85\u06D5\n\x85\x03\x86\x05" +
		"\x86\u06D8\n\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86" +
		"\x03\x86\x07\x86\u06E2\n\x86\f\x86\x0E\x86\u06E5\v\x86\x03\x86\x03\x86" +
		"\x05\x86\u06E9\n\x86\x03\x86\x05\x86\u06EC\n\x86\x03\x86\x03\x86\x05\x86" +
		"\u06F0\n\x86\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87\u06F6\n\x87\x03\x87" +
		"\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87" +
		"\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87" +
		"\x07\x87\u070B\n\x87\f\x87\x0E\x87\u070E\v\x87\x03\x88\x03\x88\x03\x88" +
		"\x06\x88\u0713\n\x88\r\x88\x0E\x88\u0714\x03\x88\x03\x88\x05\x88\u0719" +
		"\n\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x06\x88\u0720\n\x88\r\x88" +
		"\x0E\x88\u0721\x03\x88\x03\x88\x05\x88\u0726\n\x88\x03\x88\x03\x88\x03" +
		"\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03" +
		"\x88\x03\x88\x03\x88\x05\x88\u0736\n\x88\x03\x88\x03\x88\x03\x88\x03\x88" +
		"\x03\x88\x03\x88\x03\x88\x05\x88\u073F\n\x88\x03\x88\x03\x88\x03\x88\x03" +
		"\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03" +
		"\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03" +
		"\x88\x05\x88\u0757\n\x88\x03\x88\x03\x88\x03\x88\x07\x88\u075C\n\x88\f" +
		"\x88\x0E\x88\u075F\v\x88\x05\x88\u0761\n\x88\x03\x88\x03\x88\x03\x88\x03" +
		"\x88\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88\u076B\n\x88\x03\x88\x03\x88" +
		"\x03\x88\x03\x88\x03\x88\x07\x88\u0772\n\x88\f\x88\x0E\x88\u0775\v\x88" +
		"\x03\x89\x03\x89\x03\x89\x05\x89\u077A\n\x89\x03\x8A\x03\x8A\x03\x8B\x03" +
		"\x8B\x03\x8C\x03\x8C\x05\x8C\u0782\n\x8C\x03\x8D\x03\x8D\x03\x8D\x05\x8D" +
		"\u0787\n\x8D\x03\x8E\x03\x8E\x05\x8E\u078B\n\x8E\x03\x8F\x03\x8F\x03\x8F" +
		"\x06\x8F\u0790\n\x8F\r\x8F\x0E\x8F\u0791\x03\x90\x03\x90\x03\x90\x05\x90" +
		"\u0797\n\x90\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x92\x05\x92\u079F" +
		"\n\x92\x03\x92\x03\x92\x05\x92\u07A3\n\x92\x03\x93\x03\x93\x05\x93\u07A7" +
		"\n\x93\x03\x94\x05\x94\u07AA\n\x94\x03\x94\x03\x94\x05\x94\u07AE\n\x94" +
		"\x03\x95\x05\x95\u07B1\n\x95\x03\x95\x03\x95\x05\x95\u07B5\n\x95\x03\x96" +
		"\x03\x96\x03\x96\x03\x97\x03\x97\x06\x97\u07BC\n\x97\r\x97\x0E\x97\u07BD" +
		"\x03\x97\x05\x97\u07C1\n\x97\x03\x98\x03\x98\x03\x98\x03\x98\x03\x99\x03" +
		"\x99\x03\x99\x07\x99\u07CA\n\x99\f\x99\x0E\x99\u07CD\v\x99\x03\x9A\x03" +
		"\x9A\x03\x9A\x05\x9A\u07D2\n\x9A\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x03\x9D" +
		"\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x03\x9E\x07\x9E\u07E0" +
		"\n\x9E\f\x9E\x0E\x9E\u07E3\v\x9E\x03\x9F\x03\x9F\x03\x9F\x03\xA0\x03\xA0" +
		"\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03\xA1\x03\xA2\x03\xA2\x03\xA2\x03\xA2" +
		"\x07\xA2\u07F3\n\xA2\f\xA2\x0E\xA2\u07F6\v\xA2\x03\xA2\x03\xA2\x03\xA3" +
		"\x03\xA3\x05\xA3\u07FC\n\xA3\x03\xA3\x05\xA3\u07FF\n\xA3\x03\xA4\x03\xA4" +
		"\x03\xA4\x05\xA4\u0804\n\xA4\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x05\xA5\u080A" +
		"\n\xA5\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x05\xA6\u0812\n" +
		"\xA6\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03" +
		"\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x05\xA7\u0822\n\xA7\x03\xA8" +
		"\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x05\xA8\u082B\n\xA8\x03" +
		"\xA9\x03\xA9\x03\xAA\x03\xAA\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03" +
		"\xAB\x03\xAB\x03\xAB\x03\xAB\x05\xAB\u083A\n\xAB\x03\xAB\x05\xAB\u083D" +
		"\n\xAB\x03\xAC\x03\xAC\x03\xAD\x03\xAD\x03\xAE\x03\xAE\x03\xAF\x03\xAF" +
		"\x03\xB0\x03\xB0\x03\xB1\x03\xB1\x03\xB1\x03\u07E1\x02\x07\x9E\xB2\u0106" +
		"\u010C\u010E\xB2\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
		"\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
		"x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
		"\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
		"\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0" +
		"\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2" +
		"\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4" +
		"\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6" +
		"\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8" +
		"\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108" +
		"\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116" +
		"\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124" +
		"\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132" +
		"\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140" +
		"\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E" +
		"\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C" +
		"\x02\u015E\x02\u0160\x02\x02+\x04\x02  \xE9\xE9\x05\x02\x12\x12\'\'EE" +
		"\x06\x02\x0F\x0F\x1C\x1CBB\xA8\xA8\x04\x02\x0E\x0E\x1B\x1B\x04\x02\xFA" +
		"\xFA\u0105\u0105\x04\x02\xA7\xA7\u0153\u0153\x04\x02\x06\x06ww\x03\x02" +
		"mq\x05\x02\xC2\xC2\xE0\xE0\u0129\u0129\r\x02\f\f\x93\x93\x99\x99\xBE\xBF" +
		"\xCB\xCB\xE1\xE1\u010A\u010B\u014B\u014B\u0156\u0156\u0158\u0158\u0166" +
		"\u0167\x04\x02\u016B\u016B\u016D\u016D\x06\x02\xE3\xE4\xEB";
	private static readonly _serializedATNSegment1: string =
		"\xEB\xF8\xF8\u012A\u012A\x04\x02\xB8\xB8\u0123\u0123\x04\x02**\u0106\u0106" +
		"\x05\x02\x17\x17aa\xB2\xB2\x05\x02**__\u0106\u0106\x05\x0266[[\xAB\xAB" +
		"\x05\x02CCll\x7F\x7F\x04\x02\r\r||\x04\x02^^\u010E\u010E\x05\x02\xF1\xF1" +
		"\u010C\u010C\u015C\u015C\x06\x02\xFB\xFB\u0107\u0107\u0115\u0115\u0140" +
		"\u0140\x05\x02\x19\x19::\x9D\x9D\x07\x02\x1A\x1A\x8C\x8D\x92\x92\x98\x98" +
		"\u012C\u012C\x04\x02\xDC\xDC\u0143\u0143\x05\x02::\x89\x89\x9D\x9D\x04" +
		"\x02\n\n  \x04\x02..JJ\x04\x02\xB2\xB2\xB6\xB6\x04\x02\xF7\xF7\u015A\u015A" +
		"\x04\x02\u0173\u0173\u0187\u0188\x06\x02\"\"\u0185\u0185\u0189\u0189\u018C" +
		"\u018C\x04\x02\u0187\u0188\u018A\u018A\x03\x02\u0187\u0188\x03\x02\u0190" +
		"\u0191\x04\x02\u0190\u0190\u0193\u0193\x06\x02\"\"\u0185\u0185\u0187\u0189" +
		"\u018B\u018C\x05\x02\u0128\u0128\u0172\u0173\u0187\u0188\x04\x02\xB2\xB2" +
		"\xEA\xEA\x03\x02\xB1\u016E\x03\x02\x06\xB0\x02\u0900\x02\u0162\x03\x02" +
		"\x02\x02\x04\u0165\x03\x02\x02\x02\x06\u016F\x03\x02\x02\x02\b\u017E\x03" +
		"\x02\x02\x02\n\u0180\x03\x02\x02\x02\f\u0190\x03\x02\x02\x02\x0E\u0194" +
		"\x03\x02\x02\x02\x10\u0196\x03\x02\x02\x02\x12\u0199\x03\x02\x02\x02\x14" +
		"\u01A4\x03\x02\x02\x02\x16\u01AC\x03\x02\x02\x02\x18\u01B4\x03\x02\x02" +
		"\x02\x1A\u01B6\x03\x02\x02\x02\x1C\u01E3\x03\x02\x02\x02\x1E\u01E5\x03" +
		"\x02\x02\x02 \u01EC\x03\x02\x02\x02\"\u01F0\x03\x02\x02\x02$\u01F4\x03" +
		"\x02\x02\x02&\u01F8\x03\x02\x02\x02(\u0223\x03\x02\x02\x02*\u0227\x03" +
		"\x02\x02\x02,\u0229\x03\x02\x02\x02.\u0252\x03\x02\x02\x020\u0260\x03" +
		"\x02\x02\x022\u0262\x03\x02\x02\x024\u026C\x03\x02\x02\x026\u026E\x03" +
		"\x02\x02\x028\u029E\x03\x02\x02\x02:\u02A0\x03\x02\x02\x02<\u02A4\x03" +
		"\x02\x02\x02>\u02AC\x03\x02\x02\x02@\u02B4\x03\x02\x02\x02B\u02B8\x03" +
		"\x02\x02\x02D\u02BF\x03\x02\x02\x02F\u02CF\x03\x02\x02\x02H\u02D6\x03" +
		"\x02\x02\x02J\u02D9\x03\x02\x02\x02L\u02E3\x03\x02\x02\x02N\u02E5\x03" +
		"\x02\x02\x02P\u02EB\x03\x02\x02\x02R\u02ED\x03\x02\x02\x02T\u02F5\x03" +
		"\x02\x02\x02V\u02FD\x03\x02\x02\x02X\u02FF\x03\x02\x02\x02Z\u0303\x03" +
		"\x02\x02\x02\\\u0307\x03\x02\x02\x02^\u031F\x03\x02\x02\x02`\u0323\x03" +
		"\x02\x02\x02b\u0325\x03\x02\x02\x02d\u0331\x03\x02\x02\x02f\u0337\x03" +
		"\x02\x02\x02h\u0339\x03\x02\x02\x02j\u033E\x03\x02\x02\x02l\u0349\x03" +
		"\x02\x02\x02n\u035B\x03\x02\x02\x02p\u036F\x03\x02\x02\x02r\u037A\x03" +
		"\x02\x02\x02t\u037C\x03\x02\x02\x02v\u0389\x03\x02\x02\x02x\u0390\x03" +
		"\x02\x02\x02z\u0393\x03\x02\x02\x02|\u039C\x03\x02\x02\x02~\u03A0\x03" +
		"\x02\x02\x02\x80\u03A4\x03\x02\x02\x02\x82\u03A7\x03\x02\x02\x02\x84\u03AF" +
		"\x03\x02\x02\x02\x86\u03B4\x03\x02\x02\x02\x88\u03C5\x03\x02\x02\x02\x8A" +
		"\u03CC\x03\x02\x02\x02\x8C\u03D6\x03\x02\x02\x02\x8E\u03DF\x03\x02\x02" +
		"\x02\x90\u03E9\x03\x02\x02\x02\x92\u03FB\x03\x02\x02\x02\x94\u03FD\x03" +
		"\x02\x02\x02\x96\u040A\x03\x02\x02\x02\x98\u040D\x03\x02\x02\x02\x9A\u0416" +
		"\x03\x02\x02\x02\x9C\u0421\x03\x02\x02\x02\x9E\u0444\x03\x02\x02\x02\xA0" +
		"\u0457\x03\x02\x02\x02\xA2\u0460\x03\x02\x02\x02\xA4\u0469\x03\x02\x02" +
		"\x02\xA6\u047C\x03\x02\x02\x02\xA8\u0490\x03\x02\x02\x02\xAA\u0492\x03" +
		"\x02\x02\x02\xAC\u04A9\x03\x02\x02\x02\xAE\u04B7\x03\x02\x02\x02\xB0\u04B9" +
		"\x03\x02\x02\x02\xB2\u04C7\x03\x02\x02\x02\xB4\u04E1\x03\x02\x02\x02\xB6" +
		"\u050E\x03\x02\x02\x02\xB8\u0510\x03\x02\x02\x02\xBA\u0512\x03\x02\x02" +
		"\x02\xBC\u0518\x03\x02\x02\x02\xBE\u051A\x03\x02\x02\x02\xC0\u051F\x03" +
		"\x02\x02\x02\xC2\u0524\x03\x02\x02\x02\xC4\u0530\x03\x02\x02\x02\xC6\u0541" +
		"\x03\x02\x02\x02\xC8\u0543\x03\x02\x02\x02\xCA\u0545\x03\x02\x02\x02\xCC" +
		"\u0558\x03\x02\x02\x02\xCE\u055A\x03\x02\x02\x02\xD0\u055D\x03\x02\x02" +
		"\x02\xD2\u058E\x03\x02\x02\x02\xD4\u0590\x03\x02\x02\x02\xD6\u0593\x03" +
		"\x02\x02\x02\xD8\u0595\x03\x02\x02\x02\xDA\u059C\x03\x02\x02\x02\xDC\u059E" +
		"\x03\x02\x02\x02\xDE\u05A0\x03\x02\x02\x02\xE0\u05A3\x03\x02\x02\x02\xE2" +
		"\u05AC\x03\x02\x02\x02\xE4\u05B1\x03\x02\x02\x02\xE6\u05BF\x03\x02\x02" +
		"\x02\xE8\u05DB\x03\x02\x02\x02\xEA\u05E5\x03\x02\x02\x02\xEC\u05ED\x03" +
		"\x02\x02\x02\xEE\u05F2\x03\x02\x02\x02\xF0\u060C\x03\x02\x02\x02\xF2\u060E" +
		"\x03\x02\x02\x02\xF4\u0617\x03\x02\x02\x02\xF6\u0622\x03\x02\x02\x02\xF8" +
		"\u062E\x03\x02\x02\x02\xFA\u0648\x03\x02\x02\x02\xFC\u064A\x03\x02\x02" +
		"\x02\xFE\u065C\x03\x02\x02\x02\u0100\u065E\x03\x02\x02\x02\u0102\u0663" +
		"\x03\x02\x02\x02\u0104\u0666\x03\x02\x02\x02\u0106\u0674\x03\x02\x02\x02" +
		"\u0108\u06D4\x03\x02\x02\x02\u010A\u06EF\x03\x02\x02\x02\u010C\u06F5\x03" +
		"\x02\x02\x02\u010E\u076A\x03\x02\x02\x02\u0110\u0779\x03\x02\x02\x02\u0112" +
		"\u077B\x03\x02\x02\x02\u0114\u077D\x03\x02\x02\x02\u0116\u0781\x03\x02" +
		"\x02\x02\u0118\u0783\x03\x02\x02\x02\u011A\u0788\x03\x02\x02\x02\u011C" +
		"\u078F\x03\x02\x02\x02\u011E\u0793\x03\x02\x02\x02\u0120\u0798\x03\x02" +
		"\x02\x02\u0122\u07A2\x03\x02\x02\x02\u0124\u07A6\x03\x02\x02\x02\u0126" +
		"\u07A9\x03\x02\x02\x02\u0128\u07B0\x03\x02\x02\x02\u012A\u07B6\x03\x02" +
		"\x02\x02\u012C\u07C0\x03\x02\x02\x02\u012E\u07C2\x03\x02\x02\x02\u0130" +
		"\u07C6\x03\x02\x02\x02\u0132\u07D1\x03\x02\x02\x02\u0134\u07D3\x03\x02" +
		"\x02\x02\u0136\u07D5\x03\x02\x02\x02\u0138\u07D7\x03\x02\x02\x02\u013A" +
		"\u07DC\x03\x02\x02\x02\u013C\u07E4\x03\x02\x02\x02\u013E\u07E7\x03\x02" +
		"\x02\x02\u0140\u07EB\x03\x02\x02\x02\u0142\u07EE\x03\x02\x02\x02\u0144" +
		"\u07F9\x03\x02\x02\x02\u0146\u0803\x03\x02\x02\x02\u0148\u0809\x03\x02" +
		"\x02\x02\u014A\u0811\x03\x02\x02\x02\u014C\u0821\x03\x02\x02\x02\u014E" +
		"\u082A\x03\x02\x02\x02\u0150\u082C\x03\x02\x02\x02\u0152\u082E\x03\x02" +
		"\x02\x02\u0154\u083C\x03\x02\x02\x02\u0156\u083E\x03\x02\x02\x02\u0158" +
		"\u0840\x03\x02\x02\x02\u015A\u0842\x03\x02\x02\x02\u015C\u0844\x03\x02" +
		"\x02\x02\u015E\u0846\x03\x02\x02\x02\u0160\u0848\x03\x02\x02\x02\u0162" +
		"\u0163\x05\x04\x03\x02\u0163\u0164\x07\x02\x02\x03\u0164\x03\x03\x02\x02" +
		"\x02\u0165\u0166\x05\x06\x04\x02\u0166\u0167\x07\x02\x02\x03\u0167\x05" +
		"\x03\x02\x02\x02\u0168\u016A\x05\b\x05\x02\u0169\u016B\x07\u017F\x02\x02" +
		"\u016A\u0169\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016E\x03" +
		"\x02\x02\x02\u016C\u016E\x05\n\x06\x02\u016D\u0168\x03\x02\x02\x02\u016D" +
		"\u016C\x03\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02" +
		"\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\x07\x03\x02\x02\x02\u0171\u016F" +
		"\x03\x02\x02\x02\u0172\u017F\x05\f\x07\x02\u0173\u017F\x05\x0E\b\x02\u0174" +
		"\u017F\x05\x10\t\x02\u0175\u017F\x05\x12\n\x02\u0176\u017F\x05\x18\r\x02" +
		"\u0177\u017F\x05\x1C\x0F\x02\u0178\u017F\x05\x1E\x10\x02\u0179\u017F\x05" +
		" \x11\x02\u017A\u017F\x05\"\x12\x02\u017B\u017F\x05$\x13\x02\u017C\u017F" +
		"\x05&\x14\x02\u017D\u017F\x05(\x15\x02\u017E\u0172\x03\x02\x02\x02\u017E" +
		"\u0173\x03\x02\x02\x02\u017E\u0174\x03\x02\x02\x02\u017E\u0175\x03\x02" +
		"\x02\x02\u017E\u0176\x03\x02\x02\x02\u017E\u0177\x03\x02\x02\x02\u017E" +
		"\u0178\x03\x02\x02\x02\u017E\u0179\x03\x02\x02\x02\u017E\u017A\x03\x02" +
		"\x02\x02\u017E\u017B\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017E" +
		"\u017D\x03\x02\x02\x02\u017F\t\x03\x02\x02\x02\u0180\u0181\x07\u017F\x02" +
		"\x02\u0181\v\x03\x02\x02\x02\u0182\u0191\x05*\x16\x02\u0183\u0191\x05" +
		"j6\x02\u0184\u0191\x05l7\x02\u0185\u0191\x05n8\x02\u0186\u0191\x05h5\x02" +
		"\u0187\u0191\x05t;\x02\u0188\u0191\x05\x82B\x02\u0189\u0191\x05\x84C\x02" +
		"\u018A\u0191\x05\x86D\x02\u018B\u0191\x05\x88E\x02\u018C\u0191\x05\x8A" +
		"F\x02\u018D\u0191\x05\x8CG\x02\u018E\u0191\x05\x8EH\x02\u018F\u0191\x05" +
		"\x90I\x02\u0190\u0182\x03\x02\x02\x02\u0190\u0183\x03\x02\x02\x02\u0190" +
		"\u0184\x03\x02\x02\x02\u0190\u0185\x03\x02\x02\x02\u0190\u0186\x03\x02" +
		"\x02\x02\u0190\u0187\x03\x02\x02\x02\u0190\u0188\x03\x02\x02\x02\u0190" +
		"\u0189\x03\x02\x02\x02\u0190\u018A\x03\x02\x02\x02\u0190\u018B\x03\x02" +
		"\x02\x02\u0190\u018C\x03\x02\x02\x02\u0190\u018D\x03\x02\x02\x02\u0190" +
		"\u018E\x03\x02\x02\x02\u0190\u018F\x03\x02\x02\x02\u0191\r\x03\x02\x02" +
		"\x02\u0192\u0195\x05\x9EP\x02\u0193\u0195\x05\x92J\x02\u0194\u0192\x03" +
		"\x02\x02\x02\u0194\u0193\x03\x02\x02\x02\u0195\x0F\x03\x02\x02\x02\u0196" +
		"\u0197\t\x02\x02\x02\u0197\u0198\x05\u013A\x9E\x02\u0198\x11\x03\x02\x02" +
		"\x02\u0199\u019D\x07\xF4\x02\x02\u019A\u019E\x05\x14\v\x02\u019B\u019C" +
		"\x07f\x02\x02\u019C\u019E\x07\xF9\x02\x02\u019D\u019A\x03\x02\x02\x02" +
		"\u019D\u019B\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u01A2\x03" +
		"\x02\x02\x02\u019F\u01A3\x05\x0E\b\x02\u01A0\u01A3\x05\x94K\x02\u01A1" +
		"\u01A3\x05\x9CO\x02\u01A2\u019F\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02" +
		"\x02\u01A2\u01A1\x03\x02\x02\x02\u01A3\x13\x03\x02\x02\x02\u01A4\u01A9" +
		"\x05\x16\f\x02\u01A5\u01A6\x07\u017E\x02\x02\u01A6\u01A8\x05\x16\f\x02" +
		"\u01A7\u01A5\x03\x02\x02\x02\u01A8\u01AB\x03\x02\x02\x02\u01A9\u01A7\x03" +
		"\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\x15\x03\x02\x02\x02\u01AB" +
		"\u01A9\x03\x02\x02\x02\u01AC\u01AD\t\x03\x02\x02\u01AD\x17\x03\x02\x02" +
		"\x02\u01AE\u01B0\x07\xA2\x02\x02\u01AF\u01B1\x07\x0E\x02\x02\u01B0\u01AF" +
		"\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02" +
		"\u01B2\u01B5\x05\u013A\x9E\x02\u01B3\u01B5\x05\x1A\x0E\x02\u01B4\u01AE" +
		"\x03\x02\x02\x02\u01B4\u01B3\x03\x02\x02\x02\u01B5\x19\x03\x02\x02\x02" +
		"\u01B6\u01B7\x07\xA2\x02\x02\u01B7\u01B8\x07U\x02\x02\u01B8\u01BD\x05" +
		"\u013A\x9E\x02\u01B9\u01BA\x07\u017E\x02\x02\u01BA\u01BC\x05\u013A\x9E" +
		"\x02\u01BB\u01B9\x03\x02\x02\x02\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BB" +
		"\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\x1B\x03\x02\x02\x02" +
		"\u01BF\u01BD\x03\x02\x02\x02\u01C0\u01C1\x07\u0149\x02\x02\u01C1\u01E4" +
		"\t\x04\x02\x02\u01C2\u01C3\x07\u0149\x02\x02\u01C3\u01C4\x07\xDD\x02\x02" +
		"\u01C4\u01E4\t\x05\x02\x02\u01C5\u01C6\x07\u0149\x02\x02\u01C6\u01C9\x07" +
		"\x96\x02\x02\u01C7\u01C8\t\x06\x02\x02\u01C8\u01CA\x05\u013A\x9E\x02\u01C9" +
		"\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CC\x03\x02" +
		"\x02\x02\u01CB\u01CD\x05\u010A\x86\x02\u01CC\u01CB\x03\x02\x02\x02\u01CC" +
		"\u01CD\x03\x02\x02\x02\u01CD\u01E4\x03\x02\x02\x02\u01CE\u01CF\x07\u0149" +
		"\x02\x02\u01CF\u01D0\x07\x16\x02\x02\u01D0\u01D1\t\x06\x02\x02\u01D1\u01D3" +
		"\x05\u013A\x9E\x02\u01D2\u01D4\x05\u010A\x86\x02\u01D3\u01D2\x03\x02\x02" +
		"\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01E4\x03\x02\x02\x02\u01D5\u01D6" +
		"\x07\u0149\x02\x02\u01D6\u01D7\x07\xDA\x02\x02\u01D7\u01D8\t\x07\x02\x02" +
		"\u01D8\u01E4\x05\u013A\x9E\x02\u01D9\u01DB\x07\u0149\x02\x02\u01DA\u01DC" +
		"\x07\u0162\x02\x02\u01DB\u01DA\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02" +
		"\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01E4\x074\x02\x02\u01DE\u01E0" +
		"\x07\u0149\x02\x02\u01DF\u01E1\x07\xFB\x02\x02\u01E0\u01DF\x03\x02\x02" +
		"\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E4" +
		"\x07U\x02\x02\u01E3\u01C0\x03\x02\x02\x02\u01E3\u01C2\x03\x02\x02\x02" +
		"\u01E3\u01C5\x03\x02\x02\x02\u01E3\u01CE\x03\x02\x02\x02\u01E3\u01D5\x03" +
		"\x02\x02\x02\u01E3\u01D9\x03\x02\x02\x02\u01E3\u01DE\x03\x02\x02\x02\u01E4" +
		"\x1D\x03\x02\x02\x02\u01E5\u01E6\x07M\x02\x02\u01E6\u01E7\x07\u0121\x02" +
		"\x02\u01E7\u01EA\x05\u013A\x9E\x02\u01E8\u01E9\x07\u016B\x02\x02\u01E9" +
		"\u01EB\x05\u0142\xA2\x02\u01EA\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03\x02" +
		"\x02\x02\u01EB\x1F\x03\x02\x02\x02\u01EC\u01ED\x07\xA0\x02\x02\u01ED\u01EE" +
		"\x07\u0121\x02\x02\u01EE\u01EF\x05\u013A\x9E\x02\u01EF!\x03\x02\x02\x02" +
		"\u01F0\u01F2\x07\u0148\x02\x02\u01F1\u01F3\x05\u0144\xA3\x02\u01F2\u01F1" +
		"\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3#\x03\x02\x02\x02\u01F4" +
		"\u01F6\x07\u013E\x02\x02\u01F5\u01F7\x05\u0146\xA4\x02\u01F6\u01F5\x03" +
		"\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7%\x03\x02\x02\x02\u01F8" +
		"\u01F9\t\b\x02\x02\u01F9\u01FA\x07A\x02\x02\u01FA\u01FB\x05r:\x02\u01FB" +
		"\'\x03\x02\x02\x02\u01FC\u01FD\x07\x06\x02\x02\u01FD\u01FE\x07A\x02\x02" +
		"\u01FE\u01FF\x07\u016B\x02\x02\u01FF\u0202\x07\u0194\x02\x02\u0200\u0201" +
		"\x07\xB9\x02\x02\u0201\u0203\x05\u013A\x9E\x02\u0202\u0200\x03\x02\x02" +
		"\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0224\x03\x02\x02\x02\u0204\u0205" +
		"\x07\x06\x02\x02\u0205\u0206\x07,\x02\x02\u0206\u0207\x07\u016B\x02\x02" +
		"\u0207\u020A\x07\u0194\x02\x02\u0208\u0209\x07\xB9\x02\x02\u0209\u020B" +
		"\x05\u013A\x9E\x02\u020A\u0208\x03\x02\x02\x02\u020A\u020B\x03\x02\x02" +
		"\x02\u020B\u020E\x03\x02\x02\x02\u020C\u020D\x07x\x02\x02\u020D\u020F" +
		"\x05\u013A\x9E\x02\u020E\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02" +
		"\x02\u020F\u0224\x03\x02\x02\x02\u0210\u0211\x07\x06\x02\x02\u0211\u0212" +
		"\t\t\x02\x02\u0212\u0213\x07\u016B\x02\x02\u0213\u0214\x07\u0194\x02\x02" +
		"\u0214\u0215\x07x\x02\x02\u0215\u0224\x05\u013A\x9E\x02\u0216\u0217\x07" +
		"\x06\x02\x02\u0217\u0218\x07r\x02\x02\u0218\u0224\x07\u0194\x02\x02\u0219" +
		"\u021A\x07\x06\x02\x02\u021A\u021B\x07%\x02\x02\u021B\u021C\x07,\x02\x02" +
		"\u021C\u021D\x07\u016B\x02\x02\u021D\u021E\x07\u0194\x02\x02\u021E\u021F" +
		"\x07x\x02\x02\u021F\u0220\x05\u013A\x9E\x02\u0220\u0221\x07F\x02\x02\u0221" +
		"\u0222\x05\u013A\x9E\x02\u0222\u0224\x03\x02\x02\x02\u0223\u01FC\x03\x02" +
		"\x02\x02\u0223\u0204\x03\x02\x02\x02\u0223\u0210\x03\x02\x02\x02\u0223" +
		"\u0216\x03\x02\x02\x02\u0223\u0219\x03\x02\x02\x02\u0224)\x03\x02\x02" +
		"\x02\u0225\u0228\x05,\x17\x02\u0226\u0228\x05.\x18\x02\u0227\u0225\x03" +
		"\x02\x02\x02\u0227\u0226\x03\x02\x02\x02\u0228+\x03\x02\x02\x02\u0229" +
		"\u022B\x07\xDA\x02\x02\u022A\u022C\x07\x97\x02\x02\u022B\u022A\x03\x02" +
		"\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D" +
		"\u022F\x07\u0153\x02\x02\u022E\u0230\x05\u013E\xA0\x02\u022F\u022E\x03" +
		"\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231" +
		"\u0232\x05d3\x02\u0232\u0233\x07\u017A\x02\x02\u0233\u0238\x050\x19\x02" +
		"\u0234\u0235\x07\u017E\x02\x02\u0235\u0237\x050\x19\x02\u0236\u0234\x03" +
		"\x02\x02\x02\u0237\u023A\x03\x02\x02\x02\u0238\u0236\x03\x02\x02\x02\u0238" +
		"\u0239\x03\x02\x02\x02\u0239\u023D\x03\x02\x02\x02\u023A\u0238\x03\x02" +
		"\x02\x02\u023B\u023C\x07\u017E\x02\x02\u023C\u023E\x05R*\x02\u023D\u023B" +
		"\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u0241\x03\x02\x02\x02" +
		"\u023F\u0240\x07\u017E\x02\x02\u0240\u0242\x05T+\x02\u0241\u023F\x03\x02" +
		"\x02\x02\u0241\u0242\x03\x02\x02\x02\u0242\u0245\x03\x02\x02\x02\u0243" +
		"\u0244\x07\u017E\x02\x02\u0244\u0246\x05X-\x02\u0245\u0243\x03\x02\x02" +
		"\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\u0249" +
		"\x07\u017B\x02\x02\u0248\u024A\x05H%\x02\u0249\u0248\x03\x02\x02\x02\u0249" +
		"\u024A\x03\x02\x02\x02\u024A\u024C\x03\x02\x02\x02\u024B\u024D\x05Z.\x02" +
		"\u024C\u024B\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02\u024D\u024E\x03" +
		"\x02\x02\x02\u024E\u0250\x05\u013C\x9F\x02\u024F\u0251\x05b2\x02\u0250" +
		"\u024F\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251-\x03\x02\x02" +
		"\x02\u0252\u0253\x07\xDA\x02\x02\u0253\u0255\x07\u0153\x02\x02\u0254\u0256" +
		"\x05\u013E\xA0\x02\u0255\u0254\x03\x02\x02\x02\u0255\u0256\x03\x02\x02" +
		"\x02\u0256\u0257\x03\x02\x02\x02\u0257\u0258\x05d3\x02\u0258\u025B\x05" +
		"\u013C\x9F\x02\u0259\u025A\x07\xB9\x02\x02\u025A\u025C\x05\x9EP\x02\u025B" +
		"\u0259\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C/\x03\x02\x02" +
		"\x02\u025D\u0261\x052\x1A\x02\u025E\u0261\x05J&\x02\u025F\u0261\x05N(" +
		"\x02\u0260\u025D\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0260\u025F" +
		"\x03\x02\x02\x02\u02611\x03\x02\x02\x02\u0262\u0263\x054\x1B\x02\u0263" +
		"\u0265\x058\x1D\x02\u0264\u0266\x05F$\x02\u0265\u0264\x03\x02\x02\x02" +
		"\u0265\u0266\x03\x02\x02\x02\u0266\u0268\x03\x02\x02\x02\u0267\u0269\x05" +
		"H%\x02\u0268\u0267\x03\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u02693" +
		"\x03\x02\x02\x02\u026A\u026D\x05\u013A\x9E\x02\u026B\u026D\x05\u0104\x83" +
		"\x02\u026C\u026A\x03\x02\x02\x02\u026C\u026B\x03\x02\x02\x02\u026D5\x03" +
		"\x02\x02\x02\u026E\u026F\x07\u017A\x02\x02\u026F\u0274\x054\x1B\x02\u0270" +
		"\u0271\x07\u017E\x02\x02\u0271\u0273\x054\x1B\x02\u0272\u0270\x03\x02" +
		"\x02\x02\u0273\u0276\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0274" +
		"\u0275\x03\x02\x02\x02\u0275\u0277\x03\x02\x02\x02\u0276\u0274\x03\x02" +
		"\x02\x02\u0277\u0278\x07\u017B\x02\x02\u02787\x03\x02\x02\x02\u0279\u029F" +
		"\t\n\x02\x02\u027A\u027C\t\v\x02\x02\u027B\u027D\x05:\x1E\x02\u027C\u027B" +
		"\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\u029F\x03\x02\x02\x02" +
		"\u027E\u0280\x07\u0157\x02\x02\u027F\u0281\x05:\x1E\x02\u0280\u027F\x03" +
		"\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0288\x03\x02\x02\x02\u0282" +
		"\u0284\t\f\x02\x02\u0283\u0285\x07\u0118\x02\x02\u0284\u0283\x03\x02\x02" +
		"\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0287" +
		"\x07\u0156\x02\x02\u0287\u0289\x07\xB0\x02\x02\u0288\u0282\x03\x02\x02" +
		"\x02\u0288\u0289\x03\x02\x02\x02\u0289\u029F\x03\x02\x02\x02\u028A\u028C" +
		"\t\r\x02\x02\u028B\u028D\x05<\x1F\x02\u028C\u028B\x03\x02\x02\x02\u028C" +
		"\u028D\x03\x02\x02\x02\u028D\u029F\x03\x02\x02\x02\u028E\u0290\t\x0E\x02" +
		"\x02\u028F\u0291\x05@!\x02\u0290\u028F\x03\x02\x02\x02\u0290\u0291\x03" +
		"\x02\x02\x02\u0291\u029F\x03\x02\x02\x02\u0292\u0294\x07N\x02\x02\u0293" +
		"\u0295\x05B\"\x02\u0294\u0293\x03\x02\x02\x02\u0294\u0295\x03\x02\x02" +
		"\x02\u0295\u029F\x03\x02\x02\x02\u0296\u0298\x07\u0144\x02\x02\u0297\u0299" +
		"\x05D#\x02\u0298\u0297\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299" +
		"\u029F\x03\x02\x02\x02\u029A\u029C\x07t\x02\x02\u029B\u029D\x05> \x02" +
		"\u029C\u029B\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u029F\x03" +
		"\x02\x02\x02\u029E\u0279\x03\x02\x02\x02\u029E\u027A\x03\x02\x02\x02\u029E" +
		"\u027E\x03\x02\x02\x02\u029E\u028A\x03\x02\x02\x02\u029E\u028E\x03\x02" +
		"\x02\x02\u029E\u0292\x03\x02\x02\x02\u029E\u0296\x03\x02\x02\x02\u029E" +
		"\u029A\x03\x02\x02\x02\u029F9\x03\x02\x02\x02\u02A0\u02A1\x07\u017A\x02" +
		"\x02\u02A1\u02A2\x05\u0158\xAD\x02\u02A2\u02A3\x07\u017B\x02\x02\u02A3" +
		";\x03\x02\x02\x02\u02A4\u02A5\x07\u017A\x02\x02\u02A5\u02A8\x05\u0158" +
		"\xAD\x02\u02A6\u02A7\x07\u017E\x02\x02\u02A7\u02A9\x05\u0158\xAD\x02\u02A8" +
		"\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02AA\x03\x02" +
		"\x02\x02\u02AA\u02AB\x07\u017B\x02\x02\u02AB=\x03\x02\x02\x02\u02AC\u02AD" +
		"\x07\u017A\x02\x02\u02AD\u02B0\x05\u0156\xAC\x02\u02AE\u02AF\x07\u017E" +
		"\x02\x02\u02AF\u02B1\x05\u0156\xAC\x02\u02B0\u02AE\x03\x02\x02\x02\u02B0" +
		"\u02B1\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2\u02B3\x07\u017B" +
		"\x02\x02\u02B3?\x03\x02\x02\x02\u02B4\u02B5\x07\u0171\x02\x02\u02B5\u02B6" +
		"\x058\x1D\x02\u02B6\u02B7\x07\u0170\x02\x02\u02B7A\x03\x02\x02\x02\u02B8" +
		"\u02B9\x07\u0171\x02\x02\u02B9\u02BA\x058\x1D\x02\u02BA\u02BB\x07\u017E" +
		"\x02\x02\u02BB\u02BC\x058\x1D\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02BE" +
		"\x07\u0170\x02\x02\u02BEC\x03\x02\x02\x02\u02BF\u02C0\x07\u0171\x02\x02" +
		"\u02C0\u02C1\x054\x1B\x02\u02C1\u02C8\x058\x1D\x02\u02C2\u02C3\x07\u017E" +
		"\x02\x02\u02C3\u02C4\x054\x1B\x02\u02C4\u02C5\x058\x1D\x02\u02C5\u02C7" +
		"\x03\x02\x02\x02\u02C6\u02C2\x03\x02\x02\x02\u02C7\u02CA\x03\x02\x02\x02" +
		"\u02C8\u02C6\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02CB\x03" +
		"\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CB\u02CC\x07\u0170\x02\x02" +
		"\u02CCE\x03\x02\x02\x02\u02CD\u02CE\x07\xD6\x02\x02\u02CE\u02D0\x05V," +
		"\x02\u02CF\u02CD\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0\u02D1" +
		"\x03\x02\x02\x02\u02D1\u02D2\x07\u013B\x02\x02\u02D2\u02D3\x07F\x02\x02" +
		"\u02D3\u02D4\x07\u0128\x02\x02\u02D4\u02D5\x07$\x02\x02\u02D5G\x03\x02" +
		"\x02\x02\u02D6\u02D7\x07\x14\x02\x02\u02D7\u02D8\x07\u018F\x02\x02\u02D8" +
		"I\x03\x02\x02\x02\u02D9\u02DA\x054\x1B\x02\u02DA\u02DB\x058\x1D\x02\u02DB" +
		"\u02DE\x07\u011D\x02\x02\u02DC\u02DD\x07\xFA\x02\x02\u02DD\u02DF\x05L" +
		"\'\x02\u02DE\u02DC\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF\u02E1" +
		"\x03\x02\x02\x02\u02E0\u02E2\x07\xA9\x02\x02\u02E1\u02E0\x03\x02\x02\x02" +
		"\u02E1\u02E2\x03\x02\x02\x02\u02E2K\x03\x02\x02\x02\u02E3\u02E4\x07\u018F" +
		"\x02\x02\u02E4M\x03\x02\x02\x02\u02E5\u02E6\x054\x1B\x02\u02E6\u02E7\x07" +
		"\xB9\x02\x02\u02E7\u02E9\x05P)\x02\u02E8\u02EA\x05H%\x02\u02E9\u02E8\x03" +
		"\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EAO\x03\x02\x02\x02\u02EB" +
		"\u02EC\x05\u0104\x83\x02\u02ECQ\x03\x02\x02\x02\u02ED\u02EE\x07\xAA\x02" +
		"\x02\u02EE\u02EF\x07\xF9\x02\x02\u02EF\u02F0\x05\u0104\x83\x02\u02F0\u02F1" +
		"\x07\xB9\x02\x02\u02F1\u02F2\x05\u0104\x83\x02\u02F2S\x03\x02\x02\x02" +
		"\u02F3\u02F4\x07\xD6\x02\x02\u02F4\u02F6\x05V,\x02\u02F5\u02F3\x03\x02" +
		"\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7" +
		"\u02F8\x07\u013B\x02\x02\u02F8\u02F9\x07F\x02\x02\u02F9\u02FA\x056\x1C" +
		"\x02\u02FA\u02FB\x07\u0128\x02\x02\u02FB\u02FC\x07$\x02\x02\u02FCU\x03" +
		"\x02\x02\x02\u02FD\u02FE\x05\u0132\x9A\x02\u02FEW\x03\x02\x02\x02\u02FF" +
		"\u0300\x07\u0139\x02\x02\u0300\u0301\x07\xF9\x02\x02\u0301\u0302\x07\u0151" +
		"\x02\x02\u0302Y\x03\x02\x02\x02\u0303\u0304\x07`\x02\x02\u0304\u0305\x07" +
		"\xC4\x02\x02\u0305\u0306\x05\\/\x02\u0306[\x03\x02\x02\x02\u0307\u0308" +
		"\x07\u017A\x02\x02\u0308\u030D\x05^0\x02\u0309\u030A\x07\u017E\x02\x02" +
		"\u030A\u030C\x05^0\x02\u030B\u0309\x03\x02\x02\x02\u030C\u030F\x03\x02" +
		"\x02\x02\u030D\u030B\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E" +
		"\u0310\x03\x02\x02\x02\u030F\u030D\x03\x02\x02\x02\u0310\u0311\x07\u017B" +
		"\x02\x02\u0311]\x03\x02\x02\x02\u0312\u0320\x05\u0116\x8C\x02\u0313\u0314" +
		"\x05\u0132\x9A\x02\u0314\u0315\x07\u017A\x02\x02\u0315\u031A\x05`1\x02" +
		"\u0316\u0317\x07\u017E\x02\x02\u0317\u0319\x05`1\x02\u0318\u0316\x03\x02" +
		"\x02\x02\u0319\u031C\x03\x02\x02\x02\u031A\u0318\x03\x02\x02\x02\u031A" +
		"\u031B\x03\x02\x02\x02\u031B\u031D\x03\x02\x02\x02\u031C\u031A\x03\x02" +
		"\x02\x02\u031D\u031E\x07\u017B\x02\x02\u031E\u0320\x03\x02\x02\x02\u031F" +
		"\u0312\x03\x02\x02\x02\u031F\u0313\x03\x02\x02\x02\u0320_\x03\x02\x02" +
		"\x02\u0321\u0324\x05\u0116\x8C\x02\u0322\u0324\x05\u0154\xAB\x02\u0323" +
		"\u0321\x03\x02\x02\x02\u0323\u0322\x03\x02\x02\x02\u0324a\x03\x02\x02" +
		"\x02\u0325\u0326\x07\u0116\x02\x02\u0326\u032F\x05d3\x02\u0327\u032B\x07" +
		"\u017A\x02\x02\u0328\u032A\x05f4\x02\u0329\u0328\x03\x02\x02\x02\u032A" +
		"\u032D\x03\x02\x02\x02\u032B\u0329\x03\x02\x02\x02\u032B\u032C\x03\x02" +
		"\x02\x02\u032C\u032E\x03\x02\x02\x02\u032D\u032B\x03\x02\x02\x02\u032E" +
		"\u0330\x07\u017B\x02\x02\u032F\u0327\x03\x02\x02\x02\u032F\u0330\x03\x02" +
		"\x02\x02\u0330c\x03\x02\x02\x02\u0331\u0332\x05\u013A\x9E\x02\u0332e\x03" +
		"\x02\x02\x02\u0333\u0334\t\x0F\x02\x02\u0334\u0338\t\x10\x02\x02\u0335" +
		"\u0336\t\x11\x02\x02\u0336\u0338\t\x12\x02\x02\u0337\u0333\x03\x02\x02" +
		"\x02\u0337\u0335\x03\x02\x02\x02\u0338g\x03\x02\x02\x02\u0339\u033A\x07" +
		"\xDA\x02\x02\u033A\u033B\x07\x0E\x02\x02\u033B\u033C\x05\u013A\x9E\x02" +
		"\u033C\u033D\x05\u013C\x9F\x02\u033Di\x03\x02\x02\x02\u033E\u033F\x07" +
		"\xDA\x02\x02\u033F\u0341\x07\x1B\x02\x02\u0340\u0342\x05\u013E\xA0\x02" +
		"\u0341\u0340\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0343\x03" +
		"\x02\x02\x02\u0343\u0345\x05\u013A\x9E\x02\u0344\u0346\x05H%\x02\u0345" +
		"\u0344\x03\x02\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u0347\x03\x02" +
		"\x02\x02\u0347\u0348\x05\u013C\x9F\x02\u0348k\x03\x02\x02\x02\u0349\u034B" +
		"\x07\xDA\x02\x02\u034A\u034C\x07\x97\x02\x02\u034B\u034A\x03\x02\x02\x02" +
		"\u034B\u034C\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\u034F\x07" +
		"\xA7\x02\x02\u034E\u0350\x05\u013E\xA0\x02\u034F\u034E\x03\x02\x02\x02" +
		"\u034F\u0350\x03\x02\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351\u0353\x05" +
		"\u013A\x9E\x02\u0352\u0354\x056\x1C\x02\u0353\u0352\x03\x02\x02\x02\u0353" +
		"\u0354\x03\x02\x02\x02\u0354\u0356\x03\x02\x02\x02\u0355\u0357\x05H%\x02" +
		"\u0356\u0355\x03\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357\u0358\x03" +
		"\x02\x02\x02\u0358\u0359\x07\xB9\x02\x02\u0359\u035A\x05\x9EP\x02\u035A" +
		"m\x03\x02\x02\x02\u035B\u035F\x07\xDA\x02\x02\u035C\u0360\x07\x97\x02" +
		"\x02\u035D\u035E\x07\x97\x02\x02\u035E\u0360\x07\u0150\x02\x02\u035F\u035C" +
		"\x03\x02\x02\x02\u035F\u035D\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u035F\u0360\x03\x02\x02\x02\u0360\u0361\x03\x02\x02\x02\u0361\u0363" +
		"\x07\xFC\x02\x02\u0362\u0364\x05\u013E\xA0\x02\u0363\u0362\x03\x02\x02" +
		"\x02\u0363\u0364\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365\u0366" +
		"\x05\u013A\x9E\x02\u0366\u0367\x07\xB9\x02\x02\u0367\u036A\x05\u0132\x9A" +
		"\x02\u0368\u0369\x07\u0112\x02\x02\u0369\u036B\t\x13\x02\x02\u036A\u0368" +
		"\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B\u036D\x03\x02\x02\x02" +
		"\u036C\u036E\x05p9\x02\u036D\u036C\x03\x02\x02\x02\u036D\u036E\x03\x02" +
		"\x02\x02\u036Eo\x03\x02\x02\x02\u036F\u0370\x07\u0163\x02\x02\u0370\u0371" +
		"\x07A\x02\x02\u0371\u0377\x05r:\x02\u0372\u0373\x07\u017E\x02\x02\u0373" +
		"\u0374\x07A\x02\x02\u0374\u0376\x05r:\x02\u0375\u0372\x03\x02\x02\x02" +
		"\u0376\u0379\x03\x02\x02\x02\u0377\u0375\x03\x02\x02\x02\u0377\u0378\x03" +
		"\x02\x02\x02\u0378q\x03\x02\x02\x02\u0379\u0377\x03\x02\x02\x02\u037A" +
		"\u037B\x07\u018F\x02\x02\u037Bs\x03\x02\x02\x02\u037C\u037D\x07\xB4\x02" +
		"\x02\u037D\u037F\x07\u0153\x02\x02\u037E\u0380\x05\u0140\xA1\x02\u037F" +
		"\u037E\x03\x02\x02\x02\u037F\u0380\x03\x02\x02\x02\u0380\u0381\x03\x02" +
		"\x02\x02\u0381\u0387\x05\u013A\x9E\x02\u0382\u0388\x05v<\x02\u0383\u0388" +
		"\x05x=\x02\u0384\u0388\x05z>\x02\u0385\u0388\x05|?\x02\u0386\u0388\x05" +
		"~@\x02\u0387\u0382\x03\x02\x02\x02\u0387\u0383\x03\x02\x02\x02\u0387\u0384" +
		"\x03\x02\x02\x02\u0387\u0385\x03\x02\x02\x02\u0387\u0386\x03\x02\x02\x02" +
		"\u0388u\x03\x02\x02\x02\u0389\u038B\x07x\x02\x02\u038A\u038C\x05\u013A" +
		"\x9E\x02\u038B\u038A\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C" +
		"\u038D\x03\x02\x02\x02\u038D\u038E\x07\u0159\x02\x02\u038E\u038F\x05\u013A" +
		"\x9E\x02\u038Fw\x03\x02\x02\x02\u0390\u0391\x07\u0148\x02\x02\u0391\u0392" +
		"\x05\u0142\xA2\x02\u0392y\x03\x02\x02\x02\u0393\u0394\x07\x06\x02\x02" +
		"\u0394\u0395\x07\xD6\x02\x02\u0395\u0396\x05V,\x02\u0396\u0397\x07\u013B" +
		"\x02\x02\u0397\u0398\x07F\x02\x02\u0398\u039A\x056\x1C\x02\u0399\u039B" +
		"\x05\x80A\x02\u039A\u0399\x03\x02\x02\x02\u039A\u039B\x03\x02\x02\x02" +
		"\u039B{\x03\x02\x02\x02\u039C\u039D\x07\xEC\x02\x02\u039D\u039E\x07\xD6" +
		"\x02\x02\u039E\u039F\x05V,\x02\u039F}\x03\x02\x02\x02\u03A0\u03A1\x07" +
		"\x06\x02\x02\u03A1\u03A2\x07\u015D\x02\x02\u03A2\u03A3\x056\x1C\x02\u03A3" +
		"\x7F\x03\x02\x02\x02\u03A4\u03A5\x07\u0128\x02\x02\u03A5\u03A6\x07$\x02" +
		"\x02\u03A6\x81\x03\x02\x02\x02\u03A7\u03A8\x07\xB4\x02\x02\u03A8\u03A9" +
		"\x07\xA7\x02\x02\u03A9\u03AD\x05\u013A\x9E\x02\u03AA\u03AE\x05v<\x02\u03AB" +
		"\u03AC\x07\xB9\x02\x02\u03AC\u03AE\x05\x9EP\x02\u03AD\u03AA\x03\x02\x02" +
		"\x02\u03AD\u03AB\x03\x02\x02\x02\u03AE\x83\x03\x02\x02\x02\u03AF\u03B0" +
		"\x07\xB4\x02\x02\u03B0\u03B1\x07\x1B\x02\x02\u03B1\u03B2\x05\u013A\x9E" +
		"\x02\u03B2\u03B3\x05x=\x02\u03B3\x85\x03\x02\x02\x02\u03B4\u03B8\x07\xB4" +
		"\x02\x02\u03B5\u03B9\x07\x97\x02\x02\u03B6\u03B7\x07\x97\x02\x02\u03B7" +
		"\u03B9\x07\u0150\x02\x02\u03B8\u03B5\x03\x02\x02\x02\u03B8\u03B6\x03\x02" +
		"\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA" +
		"\u03BC\x07\xFC\x02\x02\u03BB\u03BD\x05\u0140\xA1\x02\u03BC\u03BB\x03\x02" +
		"\x02\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE" +
		"\u03BF\x05\u013A\x9E\x02\u03BF\u03C0\x07\xB9\x02\x02\u03C0\u03C3\x05\u0132" +
		"\x9A\x02\u03C1\u03C2\x07\u0112\x02\x02\u03C2\u03C4\t\x13\x02\x02\u03C3" +
		"\u03C1\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4\x87\x03\x02\x02" +
		"\x02\u03C5\u03C6\x07\xEC\x02\x02\u03C6\u03C8\x07\x0E\x02\x02\u03C7\u03C9" +
		"\x05\u0140\xA1\x02\u03C8\u03C7\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02" +
		"\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03CB\x05\u013A\x9E\x02\u03CB\x89" +
		"\x03\x02\x02\x02\u03CC\u03CE\x07\xEC\x02\x02\u03CD\u03CF\x07\x97\x02\x02" +
		"\u03CE\u03CD\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02\u03CF\u03D0\x03" +
		"\x02\x02\x02\u03D0\u03D2\x07\u0153\x02\x02\u03D1\u03D3\x05\u0140\xA1\x02" +
		"\u03D2\u03D1\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3\u03D4\x03" +
		"\x02\x02\x02\u03D4\u03D5\x05\u013A\x9E\x02\u03D5\x8B\x03\x02\x02\x02\u03D6" +
		"\u03D7\x07\xEC\x02\x02\u03D7\u03D9\x07\x1B\x02\x02\u03D8\u03DA\x05\u0140" +
		"\xA1\x02\u03D9\u03D8\x03\x02\x02\x02\u03D9\u03DA\x03\x02\x02\x02\u03DA" +
		"\u03DB\x03\x02\x02\x02\u03DB\u03DD\x05\u013A\x9E\x02\u03DC\u03DE\t\x14" +
		"\x02\x02\u03DD\u03DC\x03\x02\x02\x02\u03DD\u03DE\x03\x02\x02\x02\u03DE" +
		"\x8D\x03\x02\x02\x02\u03DF\u03E1\x07\xEC\x02\x02\u03E0\u03E2\x07\x97\x02" +
		"\x02\u03E1\u03E0\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03E3" +
		"\x03\x02\x02\x02\u03E3\u03E5\x07\xA7\x02\x02\u03E4\u03E6\x05\u0140\xA1" +
		"\x02\u03E5\u03E4\x03\x02\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6\u03E7" +
		"\x03\x02\x02\x02\u03E7\u03E8\x05\u013A\x9E\x02\u03E8\x8F\x03\x02\x02\x02" +
		"\u03E9\u03ED\x07\xEC\x02\x02\u03EA\u03EE\x07\x97\x02\x02\u03EB\u03EC\x07" +
		"\x97\x02\x02\u03EC\u03EE\x07\u0150\x02\x02\u03ED\u03EA\x03\x02\x02\x02" +
		"\u03ED\u03EB\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03EF\x03" +
		"\x02\x02\x02\u03EF\u03F1\x07\xFC\x02\x02\u03F0\u03F2\x05\u0140\xA1\x02" +
		"\u03F1\u03F0\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F2\u03F3\x03" +
		"\x02\x02\x02\u03F3\u03F4\x05\u013A\x9E\x02\u03F4\x91\x03\x02\x02\x02\u03F5" +
		"\u03F7\x07\xF2\x02\x02\u03F6\u03F5\x03\x02\x02\x02\u03F6\u03F7\x03\x02" +
		"\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8\u03FC\x05\x94K\x02\u03F9\u03FA" +
		"\x07\xF2\x02\x02\u03FA\u03FC\x05\x9CO\x02\u03FB\u03F6\x03\x02\x02\x02" +
		"\u03FB\u03F9\x03\x02\x02\x02\u03FC\x93\x03\x02\x02\x02\u03FD\u03FE\x07" +
		"\u0109\x02\x02\u03FE\u03FF\t\x15\x02\x02\u03FF\u0408\x05\u013A\x9E\x02" +
		"\u0400\u0402\x05\x96L\x02\u0401\u0400\x03\x02\x02\x02\u0401\u0402\x03" +
		"\x02\x02\x02\u0402\u0404\x03\x02\x02\x02\u0403\u0405\x056\x1C\x02\u0404" +
		"\u0403\x03\x02\x02\x02\u0404\u0405\x03\x02\x02\x02\u0405\u0406\x03\x02" +
		"\x02\x02\u0406\u0409\x05\x9EP\x02\u0407\u0409\x05\x98M\x02\u0408\u0401" +
		"\x03\x02\x02\x02\u0408\u0407\x03\x02\x02\x02\u0409\x95\x03\x02\x02\x02" +
		"\u040A\u040B\x07\u0135\x02\x02\u040B\u040C\x05\u0142\xA2\x02\u040C\x97" +
		"\x03\x02\x02\x02\u040D\u040E\x07\u0165\x02\x02\u040E\u0413\x05\x9AN\x02" +
		"\u040F\u0410\x07\u017E\x02\x02\u0410\u0412\x05\x9AN\x02\u0411\u040F\x03" +
		"\x02\x02\x02\u0412\u0415\x03\x02\x02\x02\u0413\u0411\x03\x02\x02\x02\u0413" +
		"\u0414\x03\x02\x02\x02\u0414\x99\x03\x02\x02\x02\u0415\u0413\x03\x02\x02" +
		"\x02\u0416\u0417\x07\u017A\x02\x02\u0417\u041C\x05\u0154\xAB\x02\u0418" +
		"\u0419\x07\u017E\x02\x02\u0419\u041B\x05\u0154\xAB\x02\u041A\u0418\x03" +
		"\x02\x02\x02\u041B\u041E\x03\x02\x02\x02\u041C\u041A\x03\x02\x02\x02\u041C" +
		"\u041D\x03\x02\x02\x02\u041D\u041F\x03\x02\x02\x02\u041E\u041C\x03\x02" +
		"\x02\x02\u041F\u0420\x07\u017B\x02\x02\u0420\x9B\x03\x02\x02\x02\u0421" +
		"\u0422\x07\x91\x02\x02\u0422\u0423\x07\u0148\x02\x02\u0423\u0427\x07\xBC" +
		"\x02\x02\u0424\u0425\x05\x94K\x02\u0425\u0426\x07\u017F\x02\x02\u0426" +
		"\u0428\x03\x02\x02\x02\u0427\u0424\x03\x02\x02\x02\u0428\u0429\x03\x02" +
		"\x02\x02\u0429\u0427\x03\x02\x02\x02\u0429\u042A\x03\x02\x02\x02\u042A" +
		"\u042B\x03\x02\x02\x02\u042B\u042C\x07\xEF\x02\x02\u042C\x9D\x03\x02\x02" +
		"\x02\u042D\u042E\bP\x01\x02\u042E\u0445\x05\xA0Q\x02\u042F\u0430\x05\xA2" +
		"R\x02\u0430\u0431\x05\x9EP\x07\u0431\u0445\x03\x02\x02\x02\u0432\u0433" +
		"\x07\u017A\x02\x02\u0433\u0434\x05\x9EP\x02\u0434\u0435\x07\u017B\x02" +
		"\x02\u0435\u0445\x03\x02\x02\x02\u0436\u0438\x05\xAAV\x02\u0437\u0439" +
		"\x05\xE8u\x02\u0438\u0437\x03\x02\x02\x02\u0438\u0439\x03\x02\x02\x02" +
		"\u0439\u043B\x03\x02\x02\x02\u043A\u043C\x05\xECw\x02\u043B\u043A\x03" +
		"\x02\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C\u0445\x03\x02\x02\x02\u043D" +
		"\u043F\x05\xA8U\x02\u043E\u0440\x05\xE8u\x02\u043F\u043E\x03\x02\x02\x02" +
		"\u043F\u0440\x03\x02\x02\x02\u0440\u0442\x03\x02\x02\x02\u0441\u0443\x05" +
		"\xECw\x02\u0442\u0441\x03\x02\x02\x02\u0442\u0443\x03\x02\x02\x02\u0443" +
		"\u0445\x03\x02\x02\x02\u0444\u042D\x03\x02\x02\x02\u0444\u042F\x03\x02" +
		"\x02\x02\u0444\u0432\x03\x02\x02\x02\u0444\u0436\x03\x02\x02\x02\u0444" +
		"\u043D\x03\x02\x02\x02\u0445\u0454\x03\x02\x02\x02\u0446\u0447\f\x05\x02" +
		"\x02\u0447\u0449\t\x16\x02\x02\u0448\u044A\x07\xB2\x02\x02\u0449\u0448" +
		"\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A\u044B\x03\x02\x02\x02" +
		"\u044B\u044D\x05\x9EP\x02\u044C\u044E\x05\xE8u\x02\u044D\u044C\x03\x02" +
		"\x02\x02\u044D\u044E\x03\x02\x02\x02\u044E\u0450\x03\x02\x02\x02\u044F" +
		"\u0451\x05\xECw\x02\u0450\u044F\x03\x02\x02\x02\u0450\u0451\x03\x02\x02" +
		"\x02\u0451\u0453\x03\x02\x02\x02\u0452\u0446\x03\x02\x02\x02\u0453\u0456" +
		"\x03\x02\x02\x02\u0454\u0452\x03\x02\x02\x02\u0454\u0455\x03\x02\x02\x02" +
		"\u0455\x9F\x03\x02\x02\x02\u0456\u0454\x03\x02\x02\x02\u0457\u0458\x07" +
		"\u0165\x02\x02\u0458\u045D\x05\u0104\x83\x02\u0459\u045A\x07\u017E\x02" +
		"\x02\u045A\u045C\x05\u0104\x83\x02\u045B\u0459\x03\x02\x02\x02\u045C\u045F" +
		"\x03\x02\x02\x02\u045D\u045B\x03\x02\x02\x02\u045D\u045E\x03\x02\x02\x02" +
		"\u045E\xA1\x03\x02\x02\x02\u045F\u045D\x03\x02\x02\x02\u0460\u0461\x07" +
		"\u016B\x02\x02\u0461\u0466\x05\xA4S\x02\u0462\u0463\x07\u017E\x02\x02" +
		"\u0463\u0465\x05\xA4S\x02\u0464\u0462\x03\x02\x02\x02\u0465\u0468\x03" +
		"\x02\x02\x02\u0466\u0464\x03\x02\x02\x02\u0466\u0467\x03\x02\x02\x02\u0467" +
		"\xA3\x03\x02\x02\x02\u0468\u0466\x03\x02\x02\x02\u0469\u0475\x05\xA6T" +
		"\x02\u046A\u046B\x07\u017A\x02\x02\u046B\u0470\x054\x1B\x02\u046C\u046D" +
		"\x07\u017E\x02\x02\u046D\u046F\x054\x1B\x02\u046E\u046C\x03\x02\x02\x02" +
		"\u046F\u0472\x03\x02\x02\x02\u0470\u046E\x03\x02\x02\x02\u0470\u0471\x03" +
		"\x02\x02\x02\u0471\u0473\x03\x02\x02\x02\u0472\u0470\x03\x02\x02\x02\u0473" +
		"\u0474\x07\u017B\x02\x02\u0474\u0476\x03\x02\x02\x02\u0475\u046A\x03\x02" +
		"\x02\x02\u0475\u0476\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02\u0477" +
		"\u0478\x07\xB9\x02\x02\u0478\u0479\x07\u017A\x02\x02\u0479\u047A\x05\x9E" +
		"P\x02\u047A\u047B\x07\u017B\x02\x02\u047B\xA5\x03\x02\x02\x02\u047C\u047D" +
		"\x05\u0132\x9A\x02\u047D\xA7\x03\x02\x02\x02\u047E\u047F\x05\xAAV\x02" +
		"\u047F\u0481\x05\xB0Y\x02\u0480\u0482\x05\xCEh\x02\u0481\u0480\x03\x02" +
		"\x02\x02\u0481\u0482\x03\x02\x02\x02\u0482\u0484\x03\x02\x02\x02\u0483" +
		"\u0485\x05\xD0i\x02\u0484\u0483\x03\x02\x02\x02\u0484\u0485\x03\x02\x02" +
		"\x02\u0485\u0487\x03\x02\x02\x02\u0486\u0488\x05\xDEp\x02\u0487\u0486" +
		"\x03\x02\x02\x02\u0487\u0488\x03\x02\x02\x02\u0488\u048A\x03\x02\x02\x02" +
		"\u0489\u048B\x05\xE0q\x02\u048A\u0489\x03\x02\x02\x02\u048A\u048B\x03" +
		"\x02\x02\x02\u048B\u0491\x03\x02\x02\x02\u048C\u048D\x05\xAAV\x02\u048D" +
		"\u048E\x05\xB0Y\x02\u048E\u048F\x05\xE6t\x02\u048F\u0491\x03\x02\x02\x02" +
		"\u0490\u047E\x03\x02\x02\x02\u0490\u048C\x03\x02\x02\x02\u0491\xA9\x03" +
		"\x02\x02\x02\u0492\u0494\x07\u0147\x02\x02\u0493\u0495\x05\u015C\xAF\x02" +
		"\u0494\u0493\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495\u049F\x03" +
		"\x02\x02\x02\u0496\u04A0\x07\u0185\x02\x02\u0497\u049C\x05\xACW\x02\u0498" +
		"\u0499\x07\u017E\x02\x02\u0499\u049B\x05\xACW\x02\u049A\u0498\x03\x02" +
		"\x02\x02\u049B\u049E\x03\x02\x02\x02\u049C\u049A\x03\x02\x02\x02\u049C" +
		"\u049D\x03\x02\x02\x02\u049D\u04A0\x03\x02\x02\x02\u049E\u049C\x03\x02" +
		"\x02\x02\u049F\u0496\x03\x02\x02\x02\u049F\u0497\x03\x02\x02\x02\u04A0" +
		"\xAB\x03\x02\x02\x02\u04A1\u04AA\x05\xAEX\x02\u04A2\u04A7\x05\u0104\x83" +
		"\x02\u04A3\u04A5\x07\xB9\x02\x02\u04A4\u04A3\x03\x02\x02\x02\u04A4\u04A5" +
		"\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A8\x05\u0104\x83" +
		"\x02\u04A7\u04A4\x03\x02\x02\x02\u04A7\u04A8\x03\x02\x02\x02\u04A8\u04AA" +
		"\x03\x02\x02\x02\u04A9\u04A1\x03\x02\x02\x02\u04A9\u04A2\x03\x02\x02\x02" +
		"\u04AA\xAD\x03\x02\x02\x02\u04AB\u04AC\x05\u010E\x88\x02\u04AC\u04AD\x07" +
		"\u0133\x02\x02\u04AD\u04AE\x05\xE4s\x02\u04AE\u04AF\x07\xB9\x02\x02\u04AF" +
		"\u04B0\x05\u0132\x9A\x02\u04B0\u04B8\x03\x02\x02\x02\u04B1\u04B2\x05\u010E" +
		"\x88\x02\u04B2\u04B3\x07\u0133\x02\x02\u04B3\u04B4\x05\u012A\x96\x02\u04B4" +
		"\u04B5\x07\xB9\x02\x02\u04B5\u04B6\x05\u0132\x9A\x02\u04B6\u04B8\x03\x02" +
		"\x02\x02\u04B7\u04AB\x03\x02\x02\x02\u04B7\u04B1\x03\x02\x02\x02\u04B8" +
		"\xAF\x03\x02\x02\x02\u04B9\u04BA\x07\xFA\x02\x02\u04BA\u04BB\x05\xB2Z" +
		"\x02\u04BB\xB1\x03\x02\x02\x02\u04BC\u04BD\bZ\x01\x02\u04BD\u04C2\x05" +
		"\xB4[\x02\u04BE\u04BF\x07\u017E\x02\x02\u04BF\u04C1\x05\xB4[\x02\u04C0" +
		"\u04BE\x03\x02\x02\x02\u04C1\u04C4\x03\x02\x02\x02\u04C2\u04C0\x03\x02" +
		"\x02\x02\u04C2\u04C3\x03\x02\x02\x02\u04C3\u04C8\x03\x02\x02\x02\u04C4" +
		"\u04C2\x03\x02\x02\x02\u04C5\u04C8\x05\xBE`\x02\u04C6\u04C8\x05\xC0a\x02" +
		"\u04C7\u04BC\x03\x02\x02\x02\u04C7\u04C5\x03\x02\x02\x02\u04C7\u04C6\x03" +
		"\x02\x02\x02\u04C8\u04DE\x03\x02\x02\x02\u04C9\u04CA\f\x05\x02\x02\u04CA" +
		"\u04CB\x07\xDB\x02\x02\u04CB\u04CC\x07\u0110\x02\x02\u04CC\u04DD\x05\xB2" +
		"Z\x06\u04CD\u04CF\f\x06\x02\x02\u04CE\u04D0\x07\u0124\x02\x02\u04CF\u04CE" +
		"\x03\x02\x02\x02\u04CF\u04D0\x03\x02\x02\x02\u04D0\u04D2\x03\x02\x02\x02" +
		"\u04D1\u04D3\t\x17\x02\x02\u04D2\u04D1\x03\x02\x02\x02\u04D2\u04D3\x03" +
		"\x02\x02\x02\u04D3\u04D5\x03\x02\x02\x02\u04D4\u04D6\x07\u0132\x02\x02" +
		"\u04D5\u04D4\x03\x02\x02\x02\u04D5\u04D6\x03\x02\x02\x02\u04D6\u04D7\x03" +
		"\x02\x02\x02\u04D7\u04D8\x07\u0110\x02\x02\u04D8\u04DA\x05\xB2Z\x02\u04D9" +
		"\u04DB\x05\xCCg\x02\u04DA\u04D9\x03\x02\x02\x02\u04DA\u04DB\x03\x02\x02" +
		"\x02\u04DB\u04DD\x03\x02\x02\x02\u04DC\u04C9\x03\x02\x02\x02\u04DC\u04CD" +
		"\x03\x02\x02\x02\u04DD\u04E0\x03\x02\x02\x02\u04DE\u04DC\x03\x02\x02\x02" +
		"\u04DE\u04DF\x03\x02\x02\x02\u04DF\xB3\x03\x02\x02\x02\u04E0\u04DE\x03" +
		"\x02\x02\x02\u04E1\u04E3\x05\xB6\\\x02\u04E2\u04E4\x05\u0128\x95\x02\u04E3" +
		"\u04E2\x03\x02\x02\x02\u04E3\u04E4\x03\x02\x02\x02\u04E4\xB5\x03\x02\x02" +
		"\x02\u04E5\u04E7\x07\u0153\x02\x02\u04E6\u04E5\x03\x02\x02\x02\u04E6\u04E7" +
		"\x03\x02\x02\x02\u04E7\u04E8\x03\x02\x02\x02\u04E8\u04EA\x05\xB8]\x02" +
		"\u04E9\u04EB\x05\xBA^\x02\u04EA\u04E9\x03\x02\x02\x02\u04EA\u04EB\x03" +
		"\x02\x02\x02\u04EB\u04F0\x03\x02\x02\x02\u04EC\u04EE\x07\xB9\x02\x02\u04ED" +
		"\u04EC\x03\x02\x02\x02\u04ED\u04EE\x03\x02\x02\x02\u04EE\u04EF\x03\x02" +
		"\x02\x02\u04EF\u04F1\x05\u0114\x8B\x02\u04F0\u04ED\x03\x02\x02\x02\u04F0" +
		"\u04F1\x03\x02\x02\x02\u04F1\u050F\x03\x02\x02\x02\u04F2\u04F3\x07\u0113" +
		"\x02\x02\u04F3\u04F4\x07\u0153\x02\x02\u04F4\u04F5\x07\u017A\x02\x02\u04F5" +
		"\u04F6\x05\u0110\x89\x02\u04F6\u04F7\x07\u017A\x02\x02\u04F7\u04FC\x05" +
		"\u0104\x83\x02\u04F8\u04F9\x07\u017E\x02\x02\u04F9\u04FB\x05\u0104\x83" +
		"\x02\u04FA\u04F8\x03\x02\x02\x02\u04FB\u04FE\x03\x02\x02\x02\u04FC\u04FA" +
		"\x03\x02\x02\x02\u04FC\u04FD\x03\x02\x02\x02\u04FD\u04FF\x03\x02\x02\x02" +
		"\u04FE\u04FC\x03\x02\x02\x02\u04FF\u0500\x07\u017B\x02\x02\u0500\u0501" +
		"\x07\u017B\x02\x02\u0501\u050F\x03\x02\x02\x02\u0502\u0504\x07\u0113\x02" +
		"\x02\u0503\u0502\x03\x02\x02\x02\u0503\u0504\x03\x02\x02\x02\u0504\u0505" +
		"\x03\x02\x02\x02\u0505\u0506\x07\u017A\x02\x02\u0506\u0507\x05\x9EP\x02" +
		"\u0507\u0508\x07\u017B\x02\x02\u0508\u050F\x03\x02\x02\x02\u0509\u050A" +
		"\x07\u015F\x02\x02\u050A\u050B\x07\u017A\x02\x02\u050B\u050C\x05\u0104" +
		"\x83\x02\u050C\u050D\x07\u017B\x02\x02\u050D\u050F\x03\x02\x02\x02\u050E" +
		"\u04E6\x03\x02\x02\x02\u050E\u04F2\x03\x02\x02\x02\u050E\u0503\x03\x02" +
		"\x02\x02\u050E\u0509\x03\x02\x02\x02\u050F\xB7\x03\x02\x02\x02\u0510\u0511" +
		"\x05\u013A\x9E\x02\u0511\xB9\x03\x02\x02\x02\u0512\u0513\x07\xF9\x02\x02" +
		"\u0513\u0514\x07\u0151\x02\x02\u0514\u0515\x07\xB9\x02\x02\u0515\u0516" +
		"\x07\u012B\x02\x02\u0516\u0517\x05\xBC_\x02\u0517\xBB\x03\x02\x02\x02" +
		"\u0518\u0519\x05\u0104\x83\x02\u0519\xBD\x03\x02\x02\x02\u051A\u051B\x07" +
		"\u017A\x02\x02\u051B\u051C\x05\x98M\x02\u051C\u051D\x07\u017B\x02\x02" +
		"\u051D\u051E\x05\u0128\x95\x02\u051E\xBF\x03\x02\x02\x02\u051F\u0520\x07" +
		"\u0153\x02\x02\u0520\u0521\x07\u017A\x02\x02\u0521\u0522\x05\xC2b\x02" +
		"\u0522\u0523\x07\u017B\x02\x02\u0523\xC1\x03\x02\x02\x02\u0524\u0525\x05" +
		"\xC4c\x02\u0525\u0526\x07\u017A\x02\x02\u0526\u052B\x05\xC6d\x02\u0527" +
		"\u0528\x07\u017E\x02\x02\u0528\u052A\x05\xC6d\x02\u0529\u0527\x03\x02" +
		"\x02\x02\u052A\u052D\x03\x02\x02\x02\u052B\u0529\x03\x02\x02\x02\u052B" +
		"\u052C\x03\x02\x02\x02\u052C\u052E\x03\x02\x02\x02\u052D\u052B\x03\x02" +
		"\x02\x02\u052E\u052F\x07\u017B\x02\x02\u052F\xC3\x03\x02\x02\x02\u0530" +
		"\u0531\t\x18\x02\x02\u0531\xC5\x03\x02\x02\x02\u0532\u0533\x07\u0153\x02" +
		"\x02\u0533\u0542\x05\xDCo\x02\u0534\u0542\x05\xCAf\x02\u0535\u0542\x05" +
		"\u0118\x8D\x02\u0536\u0537\x07\x1A\x02\x02\u0537\u0538\x07\u018E\x02\x02" +
		"\u0538\u0539\x07\u0153\x02\x02\u0539\u0542\x05\xDCo\x02\u053A\u053B\x07" +
		"\x98\x02\x02\u053B\u053C\x07\u018E\x02\x02\u053C\u0542\x05\xCAf\x02\u053D" +
		"\u053E\x05\xC8e\x02\u053E\u053F\x07\u018E\x02\x02\u053F\u0540\x05\u0118" +
		"\x8D\x02\u0540\u0542\x03\x02\x02\x02\u0541\u0532\x03\x02\x02\x02\u0541" +
		"\u0534\x03\x02\x02\x02\u0541\u0535\x03\x02\x02\x02\u0541\u0536\x03\x02" +
		"\x02\x02\u0541\u053A\x03\x02\x02\x02\u0541\u053D\x03\x02\x02\x02\u0542" +
		"\xC7\x03\x02\x02\x02\u0543\u0544\t\x19\x02\x02\u0544\xC9\x03\x02\x02\x02" +
		"\u0545\u0546\x07!\x02\x02\u0546\u0547\x07\u017A\x02\x02\u0547\u0548\x05" +
		"\u013A\x9E\x02\u0548\u0549\x07\u017B\x02\x02\u0549\xCB\x03\x02\x02\x02" +
		"\u054A\u054B\x07\u012D\x02\x02\u054B\u0559\x05\u0106\x84\x02\u054C\u054D" +
		"\x07\u0163\x02\x02\u054D\u054E\x07\u017A\x02\x02\u054E\u0553\x05\u013A" +
		"\x9E\x02\u054F\u0550\x07\u017E\x02\x02\u0550\u0552\x05\u013A\x9E\x02\u0551" +
		"\u054F\x03\x02\x02\x02\u0552\u0555\x03\x02\x02\x02\u0553\u0551\x03\x02" +
		"\x02\x02\u0553\u0554\x03\x02\x02\x02\u0554\u0556\x03\x02\x02\x02\u0555" +
		"\u0553\x03\x02\x02\x02\u0556\u0557\x07\u017B\x02\x02\u0557\u0559\x03\x02" +
		"\x02\x02\u0558\u054A\x03\x02\x02\x02\u0558\u054C\x03\x02\x02\x02\u0559" +
		"\xCD\x03\x02\x02\x02\u055A\u055B\x07\u0169\x02\x02\u055B\u055C\x05\u0106" +
		"\x84\x02\u055C\xCF\x03\x02\x02\x02\u055D\u055E\x07\xFF\x02\x02\u055E\u055F" +
		"\x07\xC4\x02\x02\u055F\u0564\x05\xD2j\x02\u0560\u0561\x07\u017E\x02\x02" +
		"\u0561\u0563\x05\xD2j\x02\u0562\u0560\x03\x02\x02\x02\u0563\u0566\x03" +
		"\x02\x02\x02\u0564\u0562\x03\x02\x02\x02\u0564\u0565\x03\x02\x02\x02\u0565" +
		"\xD1\x03\x02\x02\x02\u0566\u0564\x03\x02\x02\x02\u0567\u058F\x05\u0104" +
		"\x83\x02\u0568\u058F\x05\xD8m\x02\u0569\u056A\x07\u017A\x02\x02\u056A" +
		"\u058F\x07\u017B\x02\x02\u056B\u056C\x07\u017A\x02\x02\u056C\u0571\x05" +
		"\u0104\x83\x02\u056D\u056E\x07\u017E\x02\x02\u056E\u0570\x05\u0104\x83" +
		"\x02\u056F\u056D\x03\x02\x02\x02\u0570\u0573\x03\x02\x02\x02\u0571\u056F" +
		"\x03\x02\x02\x02\u0571\u0572\x03\x02\x02\x02\u0572\u0574\x03\x02\x02\x02" +
		"\u0573\u0571\x03\x02\x02\x02\u0574\u0575\x07\u017B\x02\x02\u0575\u058F" +
		"\x03\x02\x02\x02\u0576\u0577\x05\xD6l\x02\u0577\u0578\x07\u017A\x02\x02" +
		"\u0578\u057D\x05\u0104\x83\x02\u0579\u057A\x07\u017E\x02\x02\u057A\u057C" +
		"\x05\u0104\x83\x02\u057B\u0579\x03\x02\x02\x02\u057C\u057F\x03\x02\x02" +
		"\x02\u057D\u057B\x03\x02\x02\x02\u057D\u057E\x03\x02\x02\x02\u057E\u0580" +
		"\x03\x02\x02\x02\u057F\u057D\x03\x02\x02\x02\u0580\u0581\x07\u017B\x02" +
		"\x02\u0581\u058F\x03\x02\x02\x02\u0582\u0583\x05\xD4k\x02\u0583\u0584" +
		"\x07\u017A\x02\x02\u0584\u0589\x05\xD2j\x02\u0585\u0586\x07\u017E\x02" +
		"\x02\u0586\u0588\x05\xD2j\x02\u0587\u0585\x03\x02\x02\x02\u0588\u058B" +
		"\x03\x02\x02\x02\u0589\u0587\x03\x02\x02\x02\u0589\u058A\x03\x02\x02\x02" +
		"\u058A\u058C\x03\x02\x02\x02\u058B\u0589\x03\x02\x02\x02\u058C\u058D\x07" +
		"\u017B\x02\x02\u058D\u058F\x03\x02\x02\x02\u058E\u0567\x03\x02\x02\x02" +
		"\u058E\u0568\x03\x02\x02\x02\u058E\u0569\x03\x02\x02\x02\u058E\u056B\x03" +
		"\x02\x02\x02\u058E\u0576\x03\x02\x02\x02\u058E\u0582\x03\x02\x02\x02\u058F" +
		"\xD3\x03\x02\x02\x02\u0590\u0591\x07\u0100\x02\x02\u0591\u0592\x07\x8A" +
		"\x02\x02\u0592\xD5\x03\x02\x02\x02\u0593\u0594\t\x1A\x02\x02\u0594\xD7" +
		"\x03\x02\x02\x02\u0595\u0596\x05\xDAn\x02\u0596\u0597\x07\u017A\x02\x02" +
		"\u0597\u0598\x05\xDCo\x02\u0598\u0599\x07\u017E\x02\x02\u0599\u059A\x05" +
		"\u0118\x8D\x02\u059A\u059B\x07\u017B\x02\x02\u059B\xD9\x03\x02\x02\x02" +
		"\u059C\u059D\t\x1B\x02\x02\u059D\xDB\x03\x02\x02\x02\u059E\u059F\x05\u013A" +
		"\x9E\x02\u059F\xDD\x03\x02\x02\x02\u05A0\u05A1\x07\u0102\x02\x02\u05A1" +
		"\u05A2\x05\u0106\x84\x02\u05A2\xDF\x03\x02\x02\x02\u05A3\u05A4\x07\u016A" +
		"\x02\x02\u05A4\u05A9\x05\xE2r\x02\u05A5\u05A6\x07\u017E\x02\x02\u05A6" +
		"\u05A8\x05\xE2r\x02\u05A7\u05A5\x03\x02\x02\x02\u05A8\u05AB\x03\x02\x02" +
		"\x02\u05A9\u05A7\x03\x02\x02\x02\u05A9\u05AA\x03\x02\x02\x02\u05AA\xE1" +
		"\x03\x02\x02\x02\u05AB\u05A9\x03\x02\x02\x02\u05AC\u05AD\x05\u012A\x96" +
		"\x02\u05AD\u05AE\x07\xB9\x02\x02\u05AE\u05AF\x05\xE4s\x02\u05AF\xE3\x03" +
		"\x02\x02\x02\u05B0\u05B2\x05\u012A\x96\x02\u05B1\u05B0\x03\x02\x02\x02" +
		"\u05B1\u05B2\x03\x02\x02\x02\u05B2\u05B3\x03\x02\x02\x02\u05B3\u05B5\x07" +
		"\u017A\x02\x02\u05B4\u05B6\x05\xEEx\x02\u05B5\u05B4\x03\x02\x02\x02\u05B5" +
		"\u05B6\x03\x02\x02\x02\u05B6\u05B8\x03\x02\x02\x02\u05B7\u05B9\x05\xE8" +
		"u\x02\u05B8\u05B7\x03\x02\x02\x02\u05B8\u05B9\x03\x02\x02\x02\u05B9\u05BB" +
		"\x03\x02\x02\x02\u05BA\u05BC\x05\xFE\x80\x02\u05BB\u05BA\x03\x02\x02\x02" +
		"\u05BB\u05BC\x03\x02\x02\x02\u05BC\u05BD\x03\x02\x02\x02\u05BD\u05BE\x07" +
		"\u017B\x02\x02\u05BE\xE5\x03\x02\x02\x02\u05BF\u05C0\x07\u011A\x02\x02" +
		"\u05C0\u05C2\x07\u017A\x02\x02\u05C1\u05C3\x05\xEEx\x02\u05C2\u05C1\x03" +
		"\x02\x02\x02\u05C2\u05C3\x03\x02\x02\x02\u05C3\u05C5\x03\x02\x02\x02\u05C4" +
		"\u05C6\x05\xE8u\x02\u05C5\u05C4\x03\x02\x02\x02\u05C5\u05C6\x03\x02\x02" +
		"\x02\u05C6\u05C8\x03\x02\x02\x02\u05C7\u05C9\x05\xF2z\x02\u05C8\u05C7" +
		"\x03\x02\x02\x02\u05C8\u05C9\x03\x02\x02\x02\u05C9\u05CB\x03\x02\x02\x02" +
		"\u05CA\u05CC\x05\xF8}\x02\u05CB\u05CA\x03\x02\x02\x02\u05CB\u05CC\x03" +
		"\x02\x02\x02\u05CC\u05CE\x03\x02\x02\x02\u05CD\u05CF\x05\xFA~\x02\u05CE" +
		"\u05CD\x03\x02\x02\x02\u05CE\u05CF\x03\x02\x02\x02\u05CF\u05D1\x03\x02" +
		"\x02\x02\u05D0\u05D2\x05\xF4{\x02\u05D1\u05D0\x03\x02\x02\x02\u05D1\u05D2" +
		"\x03\x02\x02\x02\u05D2\u05D3\x03\x02\x02\x02\u05D3\u05D4\x05\xFC\x7F\x02" +
		"\u05D4\u05D9\x07\u017B\x02\x02\u05D5\u05D7\x07\xB9\x02\x02\u05D6\u05D5" +
		"\x03\x02\x02\x02\u05D6\u05D7\x03\x02\x02\x02\u05D7\u05D8\x03\x02\x02\x02" +
		"\u05D8\u05DA\x05\u0132\x9A\x02\u05D9\u05D6\x03\x02\x02\x02\u05D9\u05DA" +
		"\x03\x02\x02\x02\u05DA\xE7\x03\x02\x02\x02\u05DB\u05DC\x07\u0130\x02\x02" +
		"\u05DC\u05DD\x07\xC4\x02\x02\u05DD\u05E2\x05\xEAv\x02\u05DE\u05DF\x07" +
		"\u017E\x02\x02\u05DF\u05E1\x05\xEAv\x02\u05E0\u05DE\x03\x02\x02\x02\u05E1" +
		"\u05E4\x03\x02\x02\x02\u05E2\u05E0\x03\x02\x02\x02\u05E2\u05E3\x03\x02" +
		"\x02\x02\u05E3\xE9\x03\x02\x02\x02\u05E4\u05E2\x03\x02\x02\x02\u05E5\u05E7" +
		"\x05\u0104\x83\x02\u05E6\u05E8\t\x1C\x02\x02\u05E7\u05E6\x03\x02\x02\x02" +
		"\u05E7\u05E8\x03\x02\x02\x02\u05E8\u05EB\x03\x02\x02\x02\u05E9\u05EA\x07" +
		"X\x02\x02\u05EA\u05EC\t\x1D\x02\x02\u05EB\u05E9\x03\x02\x02\x02\u05EB" +
		"\u05EC\x03\x02\x02\x02\u05EC\xEB\x03\x02\x02\x02\u05ED\u05F0\x07\u0117" +
		"\x02\x02\u05EE\u05F1\x07\xB2\x02\x02\u05EF\u05F1\x05\u0104\x83\x02\u05F0" +
		"\u05EE\x03\x02\x02\x02\u05F0\u05EF\x03\x02\x02\x02\u05F1\xED\x03\x02\x02" +
		"\x02\u05F2\u05F3\x07\u0135\x02\x02\u05F3\u05F4\x07\xC4\x02\x02\u05F4\u05F9" +
		"\x05\u0104\x83\x02\u05F5\u05F6\x07\u017E\x02\x02\u05F6\u05F8\x05\u0104" +
		"\x83\x02\u05F7\u05F5\x03\x02\x02\x02\u05F8\u05FB\x03\x02\x02\x02\u05F9" +
		"\u05F7\x03\x02\x02\x02\u05F9\u05FA\x03\x02\x02\x02\u05FA\xEF\x03\x02\x02" +
		"\x02\u05FB\u05F9\x03\x02\x02\x02\u05FC\u060D\x07\u0185\x02\x02\u05FD\u060D" +
		"\x07\u0188\x02\x02\u05FE\u060D\x07\u018D\x02\x02\u05FF\u0600\x07\u017C" +
		"\x02\x02\u0600\u0601\x07\u0190\x02\x02\u0601\u0602\x07\u017E\x02\x02\u0602" +
		"\u0603\x07\u0190\x02\x02\u0603\u060D\x07\u017D\x02\x02\u0604\u0605\x07" +
		"\u017C\x02\x02\u0605\u0606\x07\u0190\x02\x02\u0606\u0607\x07\u017E\x02" +
		"\x02\u0607\u060D\x07\u017D\x02\x02\u0608\u0609\x07\u017C\x02\x02\u0609" +
		"\u060A\x07\u017E\x02\x02\u060A\u060B\x07\u0190\x02\x02\u060B\u060D\x07" +
		"\u017D\x02\x02\u060C\u05FC\x03\x02\x02\x02\u060C\u05FD\x03\x02\x02\x02" +
		"\u060C\u05FE\x03\x02\x02\x02\u060C\u05FF\x03\x02\x02\x02\u060C\u0604\x03" +
		"\x02\x02\x02\u060C\u0608\x03\x02\x02\x02\u060D\xF1\x03\x02\x02\x02\u060E" +
		"\u060F\x07\u011B\x02\x02\u060F\u0614\x05\xACW\x02\u0610\u0611\x07\u017E" +
		"\x02\x02\u0611\u0613\x05\xACW\x02\u0612\u0610\x03\x02\x02\x02\u0613\u0616" +
		"\x03\x02\x02\x02\u0614\u0612\x03\x02\x02\x02\u0614\u0615\x03\x02\x02\x02" +
		"\u0615\xF3\x03\x02\x02\x02\u0616\u0614\x03\x02\x02\x02\u0617\u0618\x07" +
		"\u0136\x02\x02\u0618\u061A\x07\u017A\x02\x02\u0619\u061B\x05\xF6|\x02" +
		"\u061A\u0619\x03\x02\x02\x02\u061B\u061C\x03\x02\x02\x02\u061C\u061A\x03" +
		"\x02\x02\x02\u061C\u061D\x03\x02\x02\x02\u061D\u061E\x03\x02\x02\x02\u061E" +
		"\u0620\x07\u017B\x02\x02\u061F\u0621\x05\u0102\x82\x02\u0620\u061F\x03" +
		"\x02\x02\x02\u0620\u0621\x03\x02\x02\x02\u0621\xF5\x03\x02\x02\x02\u0622" +
		"\u0624\x05\u0134\x9B\x02\u0623\u0625\x05\xF0y\x02\u0624";
	private static readonly _serializedATNSegment3: string =
		"\u0623\x03\x02\x02\x02\u0624\u0625\x03\x02\x02\x02\u0625\xF7\x03\x02\x02" +
		"\x02\u0626\u0627\x07\xB2\x02\x02\u0627\u0628\x07\u0145\x02\x02\u0628\u0629" +
		"\x07\u0137\x02\x02\u0629\u062F\x07\u0119\x02\x02\u062A\u062B\x07\u012E" +
		"\x02\x02\u062B\u062C\x07\u0144\x02\x02\u062C\u062D\x07\u0137\x02\x02\u062D" +
		"\u062F\x07\u0119\x02\x02\u062E\u0626\x03\x02\x02\x02\u062E\u062A\x03\x02" +
		"\x02\x02\u062F\xF9\x03\x02\x02\x02\u0630\u0631\x07\b\x02\x02\u0631\u0632" +
		"\x07\u0119\x02\x02\u0632\u0633\x07\u014A\x02\x02\u0633\u0634\x07c\x02" +
		"\x02\u0634\u0635\x07J\x02\x02\u0635\u0649\x07\u0144\x02\x02\u0636\u0637" +
		"\x07\b\x02\x02\u0637\u0638\x07\u0119\x02\x02\u0638\u0639\x07\u014A\x02" +
		"\x02\u0639\u063A\x07\u0159\x02\x02\u063A\u063B\x07\u0125\x02\x02\u063B" +
		"\u0649\x07\u0144\x02\x02\u063C\u063D\x07\b\x02\x02\u063D\u063E\x07\u0119" +
		"\x02\x02\u063E\u063F\x07\u014A\x02\x02\u063F\u0640\x07\u0159\x02\x02\u0640" +
		"\u0641\x07J\x02\x02\u0641\u0649\x05\u0134\x9B\x02\u0642\u0643\x07\b\x02" +
		"\x02\u0643\u0644\x07\u0119\x02\x02\u0644\u0645\x07\u014A\x02\x02\u0645" +
		"\u0646\x07\u0159\x02\x02\u0646\u0647\x07.\x02\x02\u0647\u0649\x05\u0134" +
		"\x9B\x02\u0648\u0630\x03\x02\x02\x02\u0648\u0636\x03\x02\x02\x02\u0648" +
		"\u063C\x03\x02\x02\x02\u0648\u0642\x03\x02\x02\x02\u0649\xFB\x03\x02\x02" +
		"\x02\u064A\u064B\x07\xE7\x02\x02\u064B\u0650\x05\xACW\x02\u064C\u064D" +
		"\x07\u017E\x02\x02\u064D\u064F\x05\xACW\x02\u064E\u064C\x03\x02\x02\x02" +
		"\u064F\u0652\x03\x02\x02\x02\u0650\u064E\x03\x02\x02\x02\u0650\u0651\x03" +
		"\x02\x02\x02\u0651\xFD\x03\x02\x02\x02\u0652\u0650\x03\x02\x02\x02\u0653" +
		"\u0654\x07\u013C\x02\x02\u0654\u0655\x07\xBD\x02\x02\u0655\u0656\x05\u0118" +
		"\x8D\x02\u0656\u0657\x05\u0100\x81\x02\u0657\u065D\x03\x02\x02\x02\u0658" +
		"\u0659\x07\u0145\x02\x02\u0659\u065A\x07\xBD\x02\x02\u065A\u065B\x07\u0190" +
		"\x02\x02\u065B\u065D\x05\u0100\x81\x02\u065C\u0653\x03\x02\x02\x02\u065C" +
		"\u0658\x03\x02\x02\x02\u065D\xFF\x03\x02\x02\x02\u065E\u065F\x07g\x02" +
		"\x02\u065F\u0660\x07\xB5\x02\x02\u0660\u0661\x07\xDD\x02\x02\u0661\u0662" +
		"\x07\u0144\x02\x02\u0662\u0101\x03\x02\x02\x02\u0663\u0664\x07\u016C\x02" +
		"\x02\u0664\u0665\x05\u0118\x8D\x02\u0665\u0103\x03\x02\x02\x02\u0666\u0667" +
		"\x05\u0106\x84\x02\u0667\u0105\x03\x02\x02\x02\u0668\u0669\b\x84\x01\x02" +
		"\u0669\u066A\x07\u0128\x02\x02\u066A\u0675\x05\u0106\x84\x07\u066B\u066C" +
		"\x07\xF3\x02\x02\u066C\u066D\x07\u017A\x02\x02\u066D\u066E\x05\x9EP\x02" +
		"\u066E\u066F\x07\u017B\x02\x02\u066F\u0675\x03\x02\x02\x02\u0670\u0672" +
		"\x05\u010C\x87\x02\u0671\u0673\x05\u0108\x85\x02\u0672\u0671\x03\x02\x02" +
		"\x02\u0672\u0673\x03\x02\x02\x02\u0673\u0675\x03\x02\x02\x02\u0674\u0668" +
		"\x03\x02\x02\x02\u0674\u066B\x03\x02\x02\x02\u0674\u0670\x03\x02\x02\x02" +
		"\u0675\u067E\x03\x02\x02\x02\u0676\u0677\f\x04\x02\x02\u0677\u0678\x07" +
		"\xB5\x02\x02\u0678\u067D\x05\u0106\x84\x05\u0679\u067A\f\x03\x02\x02\u067A" +
		"\u067B\x07\u012F\x02\x02\u067B\u067D\x05\u0106\x84\x04\u067C\u0676\x03" +
		"\x02\x02\x02\u067C\u0679\x03\x02\x02\x02\u067D\u0680\x03\x02\x02\x02\u067E" +
		"\u067C\x03\x02\x02\x02\u067E\u067F\x03\x02\x02\x02\u067F\u0107\x03\x02" +
		"\x02\x02\u0680\u067E\x03\x02\x02\x02\u0681\u0683\x07\u0128\x02\x02\u0682" +
		"\u0681\x03\x02\x02\x02\u0682\u0683\x03\x02\x02\x02\u0683\u0684\x03\x02" +
		"\x02\x02\u0684\u0685\x07\xBD\x02\x02\u0685\u0686\x05\u010C\x87\x02\u0686" +
		"\u0687\x07\xB5\x02\x02\u0687\u0688\x05\u010C\x87\x02\u0688\u06D5\x03\x02" +
		"\x02\x02\u0689\u068B\x07\u0128\x02\x02\u068A\u0689\x03\x02\x02\x02\u068A" +
		"\u068B\x03\x02\x02\x02\u068B\u068C\x03\x02\x02\x02\u068C\u068D\x07\u0105" +
		"\x02\x02\u068D\u068E\x07\u017A\x02\x02\u068E\u0693\x05\u0104\x83\x02\u068F" +
		"\u0690\x07\u017E\x02\x02\u0690\u0692\x05\u0104\x83\x02\u0691\u068F\x03" +
		"\x02\x02\x02\u0692\u0695\x03\x02\x02\x02\u0693\u0691\x03\x02\x02\x02\u0693" +
		"\u0694\x03\x02\x02\x02\u0694\u0696\x03\x02\x02\x02\u0695\u0693\x03\x02" +
		"\x02\x02\u0696\u0697\x07\u017B\x02\x02\u0697\u06D5\x03\x02\x02\x02\u0698" +
		"\u069A\x07\u0128\x02\x02\u0699\u0698\x03\x02\x02\x02\u0699\u069A\x03\x02" +
		"\x02\x02\u069A\u069B\x03\x02\x02\x02\u069B\u069C\x07\u0105\x02\x02\u069C" +
		"\u069D\x07\u017A\x02\x02\u069D\u069E\x05\x9EP\x02\u069E\u069F\x07\u017B" +
		"\x02\x02\u069F\u06D5\x03\x02\x02\x02\u06A0\u06A1\x07\xF3\x02\x02\u06A1" +
		"\u06A2\x07\u017A\x02\x02\u06A2\u06A3\x05\x9EP\x02\u06A3\u06A4\x07\u017B" +
		"\x02\x02\u06A4\u06D5\x03\x02\x02\x02\u06A5\u06A7\x07\u0128\x02\x02\u06A6" +
		"\u06A5\x03\x02\x02\x02\u06A6\u06A7\x03\x02\x02\x02\u06A7\u06A8\x03\x02" +
		"\x02\x02\u06A8\u06A9\x07\u0141\x02\x02\u06A9\u06D5\x05\u010C\x87\x02\u06AA" +
		"\u06AC\x07\u0128\x02\x02\u06AB\u06AA\x03\x02\x02\x02\u06AB\u06AC\x03\x02" +
		"\x02\x02\u06AC\u06AD\x03\x02\x02\x02\u06AD\u06AE\x07\u0116\x02\x02\u06AE" +
		"\u06BC\t\x1E\x02\x02\u06AF\u06B0\x07\u017A\x02\x02\u06B0\u06BD\x07\u017B" +
		"\x02\x02\u06B1\u06B2\x07\u017A\x02\x02\u06B2\u06B7\x05\u0104\x83\x02\u06B3" +
		"\u06B4\x07\u017E\x02\x02\u06B4\u06B6\x05\u0104\x83\x02\u06B5\u06B3\x03" +
		"\x02\x02\x02\u06B6\u06B9\x03\x02\x02\x02\u06B7\u06B5\x03\x02\x02\x02\u06B7" +
		"\u06B8\x03\x02\x02\x02\u06B8\u06BA\x03\x02\x02\x02\u06B9\u06B7\x03\x02" +
		"\x02\x02\u06BA\u06BB\x07\u017B\x02\x02\u06BB\u06BD\x03\x02\x02\x02\u06BC" +
		"\u06AF\x03\x02\x02\x02\u06BC\u06B1\x03\x02\x02\x02\u06BD\u06D5\x03\x02" +
		"\x02\x02\u06BE\u06C0\x07\u0128\x02\x02\u06BF\u06BE\x03\x02\x02\x02\u06BF" +
		"\u06C0\x03\x02\x02\x02\u06C0\u06C1\x03\x02\x02\x02\u06C1\u06C2\x07\u0116" +
		"\x02\x02\u06C2\u06D5\x05\u010C\x87\x02\u06C3\u06C5\x07\u010F\x02\x02\u06C4" +
		"\u06C6\x07\u0128\x02\x02\u06C5\u06C4\x03\x02\x02\x02\u06C5\u06C6\x03\x02" +
		"\x02\x02\u06C6\u06C7\x03\x02\x02\x02\u06C7\u06D5\x07\u0129\x02\x02\u06C8" +
		"\u06CA\x07\u010F\x02\x02\u06C9\u06CB\x07\u0128\x02\x02\u06CA\u06C9\x03" +
		"\x02\x02\x02\u06CA\u06CB\x03\x02\x02\x02\u06CB\u06CC\x03\x02\x02\x02\u06CC" +
		"\u06D5\t\x1F\x02\x02\u06CD\u06CF\x07\u010F\x02\x02\u06CE\u06D0\x07\u0128" +
		"\x02\x02\u06CF\u06CE\x03\x02\x02\x02\u06CF\u06D0\x03\x02\x02\x02\u06D0" +
		"\u06D1\x03\x02\x02\x02\u06D1\u06D2\x07\xEA\x02\x02\u06D2\u06D3\x07\xFA" +
		"\x02\x02\u06D3\u06D5\x05\u010C\x87\x02\u06D4\u0682\x03\x02\x02\x02\u06D4" +
		"\u068A\x03\x02\x02\x02\u06D4\u0699\x03\x02\x02\x02\u06D4\u06A0\x03\x02" +
		"\x02\x02\u06D4\u06A6\x03\x02\x02\x02\u06D4\u06AB\x03\x02\x02\x02\u06D4" +
		"\u06BF\x03\x02\x02\x02\u06D4\u06C3\x03\x02\x02\x02\u06D4\u06C8\x03\x02" +
		"\x02\x02\u06D4\u06CD\x03\x02\x02\x02\u06D5\u0109\x03\x02\x02\x02\u06D6" +
		"\u06D8\x07\u0128\x02\x02\u06D7\u06D6\x03\x02\x02\x02\u06D7\u06D8\x03\x02" +
		"\x02\x02\u06D8\u06D9\x03\x02\x02\x02\u06D9\u06DA\x07\u0116\x02\x02\u06DA" +
		"\u06E8\t\x1E\x02\x02\u06DB\u06DC\x07\u017A\x02\x02\u06DC\u06E9\x07\u017B" +
		"\x02\x02\u06DD\u06DE\x07\u017A\x02\x02\u06DE\u06E3\x05\u0104\x83\x02\u06DF" +
		"\u06E0\x07\u017E\x02\x02\u06E0\u06E2\x05\u0104\x83\x02\u06E1\u06DF\x03" +
		"\x02\x02\x02\u06E2\u06E5\x03\x02\x02\x02\u06E3\u06E1\x03\x02\x02\x02\u06E3" +
		"\u06E4\x03\x02\x02\x02\u06E4\u06E6\x03\x02\x02\x02\u06E5\u06E3\x03\x02" +
		"\x02\x02\u06E6\u06E7\x07\u017B\x02\x02\u06E7\u06E9\x03\x02\x02\x02\u06E8" +
		"\u06DB\x03\x02\x02\x02\u06E8\u06DD\x03\x02\x02\x02\u06E9\u06F0\x03\x02" +
		"\x02\x02\u06EA\u06EC\x07\u0128\x02\x02\u06EB\u06EA\x03\x02\x02\x02\u06EB" +
		"\u06EC\x03\x02\x02\x02\u06EC\u06ED\x03\x02\x02\x02\u06ED\u06EE\x07\u0116" +
		"\x02\x02\u06EE\u06F0\x05\u010C\x87\x02\u06EF\u06D7\x03\x02\x02\x02\u06EF" +
		"\u06EB\x03\x02\x02\x02\u06F0\u010B\x03\x02\x02\x02\u06F1\u06F2\b\x87\x01" +
		"\x02\u06F2\u06F6\x05\u010E\x88\x02\u06F3\u06F4\t \x02\x02\u06F4\u06F6" +
		"\x05\u010C\x87\t\u06F5\u06F1\x03\x02\x02\x02\u06F5\u06F3\x03\x02\x02\x02" +
		"\u06F6\u070C\x03\x02\x02\x02\u06F7\u06F8\f\b\x02\x02\u06F8\u06F9\t!\x02" +
		"\x02\u06F9\u070B\x05\u010C\x87\t\u06FA\u06FB\f\x07\x02\x02\u06FB\u06FC" +
		"\t\"\x02\x02\u06FC\u070B\x05\u010C\x87\b\u06FD\u06FE\f\x06\x02\x02\u06FE" +
		"\u06FF\x07\u0175\x02\x02\u06FF\u070B\x05\u010C\x87\x07\u0700\u0701\f\x05" +
		"\x02\x02\u0701\u0702\x07\u0176\x02\x02\u0702\u070B\x05\u010C\x87\x06\u0703" +
		"\u0704\f\x04\x02\x02\u0704\u0705\x07\u0174\x02\x02\u0705\u070B\x05\u010C" +
		"\x87\x05\u0706\u0707\f\x03\x02\x02\u0707\u0708\x05\u014C\xA7\x02\u0708" +
		"\u0709\x05\u010C\x87\x04\u0709\u070B\x03\x02\x02\x02\u070A\u06F7\x03\x02" +
		"\x02\x02\u070A\u06FA\x03\x02\x02\x02\u070A\u06FD\x03\x02\x02\x02\u070A" +
		"\u0700\x03\x02\x02\x02\u070A\u0703\x03\x02\x02\x02\u070A\u0706\x03\x02" +
		"\x02\x02\u070B\u070E\x03\x02\x02\x02\u070C\u070A\x03\x02\x02\x02\u070C" +
		"\u070D\x03\x02\x02\x02\u070D\u010D\x03\x02\x02\x02\u070E\u070C\x03\x02" +
		"\x02\x02\u070F\u0710\b\x88\x01\x02\u0710\u0712\x07\xC8\x02\x02\u0711\u0713" +
		"\x05\u0138\x9D\x02\u0712\u0711\x03\x02\x02\x02\u0713\u0714\x03\x02\x02" +
		"\x02\u0714\u0712\x03\x02\x02\x02\u0714\u0715\x03\x02\x02\x02\u0715\u0718" +
		"\x03\x02\x02\x02\u0716\u0717\x07\xEE\x02\x02\u0717\u0719\x05\u0104\x83" +
		"\x02\u0718\u0716\x03\x02\x02\x02\u0718\u0719\x03\x02\x02\x02\u0719\u071A" +
		"\x03\x02\x02\x02\u071A\u071B\x07\xEF\x02\x02\u071B\u076B\x03\x02\x02\x02" +
		"\u071C\u071D\x07\xC8\x02\x02\u071D\u071F\x05\u0104\x83\x02\u071E\u0720" +
		"\x05\u0138\x9D\x02\u071F\u071E\x03\x02\x02\x02\u0720\u0721\x03\x02\x02" +
		"\x02\u0721\u071F\x03\x02\x02\x02\u0721\u0722\x03\x02\x02\x02\u0722\u0725" +
		"\x03\x02\x02\x02\u0723\u0724\x07\xEE\x02\x02\u0724\u0726\x05\u0104\x83" +
		"\x02\u0725\u0723\x03\x02\x02\x02\u0725\u0726\x03\x02\x02\x02\u0726\u0727" +
		"\x03\x02\x02\x02\u0727\u0728\x07\xEF\x02\x02\u0728\u076B\x03\x02\x02\x02" +
		"\u0729\u072A\x07\xC9\x02\x02\u072A\u072B\x07\u017A\x02\x02\u072B\u072C" +
		"\x05\u0104\x83\x02\u072C\u072D\x07\xB9\x02\x02\u072D\u072E\x058\x1D\x02" +
		"\u072E\u072F\x07\u017B\x02\x02\u072F\u076B\x03\x02\x02\x02\u0730\u0731" +
		"\x07.\x02\x02\u0731\u0732\x07\u017A\x02\x02\u0732\u0735\x05\u0104\x83" +
		"\x02\u0733\u0734\x07=\x02\x02\u0734\u0736\x07X\x02\x02\u0735\u0733\x03" +
		"\x02\x02\x02\u0735\u0736\x03\x02\x02\x02\u0736\u0737\x03\x02\x02\x02\u0737" +
		"\u0738\x07\u017B\x02\x02\u0738\u076B\x03\x02\x02\x02\u0739\u073A\x07J" +
		"\x02\x02\u073A\u073B\x07\u017A\x02\x02\u073B\u073E\x05\u0104\x83\x02\u073C" +
		"\u073D\x07=\x02\x02\u073D\u073F\x07X\x02\x02\u073E\u073C\x03\x02\x02\x02" +
		"\u073E\u073F\x03\x02\x02\x02\u073F\u0740\x03\x02\x02\x02\u0740\u0741\x07" +
		"\u017B\x02\x02\u0741\u076B\x03\x02\x02\x02\u0742\u0743\x07\u013A\x02\x02" +
		"\u0743\u0744\x07\u017A\x02\x02\u0744\u0745\x05\u010C\x87\x02\u0745\u0746" +
		"\x07\u0105\x02\x02\u0746\u0747\x05\u010C\x87\x02\u0747\u0748\x07\u017B" +
		"\x02\x02\u0748\u076B\x03\x02\x02\x02\u0749\u076B\x05\u0154\xAB\x02\u074A" +
		"\u076B\x07\u0185\x02\x02\u074B\u074C\x05\u013A\x9E\x02\u074C\u074D\x07" +
		"\u0177\x02\x02\u074D\u074E\x07\u0185\x02\x02\u074E\u076B\x03\x02\x02\x02" +
		"\u074F\u0750\x07\u017A\x02\x02\u0750\u0751\x05\x9EP\x02\u0751\u0752\x07" +
		"\u017B\x02\x02\u0752\u076B\x03\x02\x02\x02\u0753\u0754\x05\u0110\x89\x02" +
		"\u0754\u0760\x07\u017A\x02\x02\u0755\u0757\x05\u015C\xAF\x02\u0756\u0755" +
		"\x03\x02\x02\x02\u0756\u0757\x03\x02\x02\x02\u0757\u0758\x03\x02\x02\x02" +
		"\u0758\u075D\x05\u0104\x83\x02\u0759\u075A\x07\u017E\x02\x02\u075A\u075C" +
		"\x05\u0104\x83\x02\u075B\u0759\x03\x02\x02\x02\u075C\u075F\x03\x02\x02" +
		"\x02\u075D\u075B\x03\x02\x02\x02\u075D\u075E\x03\x02\x02\x02\u075E\u0761" +
		"\x03\x02\x02\x02\u075F\u075D\x03\x02\x02\x02\u0760\u0756\x03\x02\x02\x02" +
		"\u0760\u0761\x03\x02\x02\x02\u0761\u0762\x03\x02\x02\x02\u0762\u0763\x07" +
		"\u017B\x02\x02\u0763\u076B\x03\x02\x02\x02\u0764\u076B\x05\u0132\x9A\x02" +
		"\u0765\u076B\x05\u0112\x8A\x02\u0766\u0767\x07\u017A\x02\x02\u0767\u0768" +
		"\x05\u0104\x83\x02\u0768\u0769\x07\u017B\x02\x02\u0769\u076B\x03\x02\x02" +
		"\x02\u076A\u070F\x03\x02\x02\x02\u076A\u071C\x03\x02\x02\x02\u076A\u0729" +
		"\x03\x02\x02\x02\u076A\u0730\x03\x02\x02\x02\u076A\u0739\x03\x02\x02\x02" +
		"\u076A\u0742\x03\x02\x02\x02\u076A\u0749\x03\x02\x02\x02\u076A\u074A\x03" +
		"\x02\x02\x02\u076A\u074B\x03\x02\x02\x02\u076A\u074F\x03\x02\x02\x02\u076A" +
		"\u0753\x03\x02\x02\x02\u076A\u0764\x03\x02\x02\x02\u076A\u0765\x03\x02" +
		"\x02\x02\u076A\u0766\x03\x02\x02\x02\u076B\u0773\x03\x02\x02\x02\u076C" +
		"\u076D\f\x06\x02\x02\u076D\u076E\x07\u0178\x02\x02\u076E\u076F\x05\u010C" +
		"\x87\x02\u076F\u0770\x07\u0179\x02\x02\u0770\u0772\x03\x02\x02\x02\u0771" +
		"\u076C\x03\x02\x02\x02\u0772\u0775\x03\x02\x02\x02\u0773\u0771\x03\x02" +
		"\x02\x02\u0773\u0774\x03\x02\x02\x02\u0774\u010F\x03\x02\x02\x02\u0775" +
		"\u0773\x03\x02\x02\x02\u0776\u077A\x05\u015E\xB0\x02\u0777\u077A\x05\u0160" +
		"\xB1\x02\u0778\u077A\x05\u013A\x9E\x02\u0779\u0776\x03\x02\x02\x02\u0779" +
		"\u0777\x03\x02\x02\x02\u0779\u0778\x03\x02\x02\x02\u077A\u0111\x03\x02" +
		"\x02\x02\u077B\u077C\x05\u013A\x9E\x02\u077C\u0113\x03\x02\x02\x02\u077D" +
		"\u077E\x05\u0132\x9A\x02\u077E\u0115\x03\x02\x02\x02\u077F\u0782\x05\u0132" +
		"\x9A\x02\u0780\u0782\x05\u0112\x8A\x02\u0781\u077F\x03\x02\x02\x02\u0781" +
		"\u0780\x03\x02\x02\x02\u0782\u0117\x03\x02\x02\x02\u0783\u0786\x07\u010D" +
		"\x02\x02\u0784\u0787\x05\u011A\x8E\x02\u0785\u0787\x05\u011E\x90\x02\u0786" +
		"\u0784\x03\x02\x02\x02\u0786\u0785\x03\x02\x02\x02\u0786\u0787\x03\x02" +
		"\x02\x02\u0787\u0119\x03\x02\x02\x02\u0788\u078A\x05\u011C\x8F\x02\u0789" +
		"\u078B\x05\u0120\x91\x02\u078A\u0789\x03\x02\x02\x02\u078A\u078B\x03\x02" +
		"\x02\x02\u078B\u011B\x03\x02\x02\x02\u078C\u078D\x05\u0122\x92\x02\u078D" +
		"\u078E\x05\u0124\x93\x02\u078E\u0790\x03\x02\x02\x02\u078F\u078C\x03\x02" +
		"\x02\x02\u0790\u0791\x03\x02\x02\x02\u0791\u078F\x03\x02\x02\x02\u0791" +
		"\u0792\x03\x02\x02\x02\u0792\u011D\x03\x02\x02\x02\u0793\u0796\x05\u0120" +
		"\x91\x02\u0794\u0797\x05\u011C\x8F\x02\u0795\u0797\x05\u0120\x91\x02\u0796" +
		"\u0794\x03\x02\x02\x02\u0796\u0795\x03\x02\x02\x02\u0796\u0797\x03\x02" +
		"\x02\x02\u0797\u011F\x03\x02\x02\x02\u0798\u0799\x05\u0122\x92\x02\u0799" +
		"\u079A\x05\u0124\x93\x02\u079A\u079B\x07\u0159\x02\x02\u079B\u079C\x05" +
		"\u0124\x93\x02\u079C\u0121\x03\x02\x02\x02\u079D\u079F\t#\x02\x02\u079E" +
		"\u079D\x03\x02\x02\x02\u079E\u079F\x03\x02\x02\x02\u079F\u07A0\x03\x02" +
		"\x02\x02\u07A0\u07A3\t$\x02\x02\u07A1\u07A3\x07\u018F\x02\x02\u07A2\u079E" +
		"\x03\x02\x02\x02\u07A2\u07A1\x03\x02\x02\x02\u07A3\u0123\x03\x02\x02\x02" +
		"\u07A4\u07A7\x05\u0132\x9A\x02\u07A5\u07A7\x05\u015E\xB0\x02\u07A6\u07A4" +
		"\x03\x02\x02\x02\u07A6\u07A5\x03\x02\x02\x02\u07A7\u0125\x03\x02\x02\x02" +
		"\u07A8\u07AA\x07\xB9\x02\x02\u07A9\u07A8\x03\x02\x02\x02\u07A9\u07AA\x03" +
		"\x02\x02\x02\u07AA\u07AB\x03\x02\x02\x02\u07AB\u07AD\x05\u0132\x9A\x02" +
		"\u07AC\u07AE\x05\u012E\x98\x02\u07AD\u07AC\x03\x02\x02\x02\u07AD\u07AE" +
		"\x03\x02\x02\x02\u07AE\u0127\x03\x02\x02\x02\u07AF\u07B1\x07\xB9\x02\x02" +
		"\u07B0\u07AF\x03\x02\x02\x02\u07B0\u07B1\x03\x02\x02\x02\u07B1\u07B2\x03" +
		"\x02\x02\x02\u07B2\u07B4\x05\u0132\x9A\x02\u07B3\u07B5\x05\u012E\x98\x02" +
		"\u07B4\u07B3\x03\x02\x02\x02\u07B4\u07B5\x03\x02\x02\x02\u07B5\u0129\x03" +
		"\x02\x02\x02\u07B6\u07B7\x05\u0132\x9A\x02\u07B7\u07B8\x05\u012C\x97\x02" +
		"\u07B8\u012B\x03\x02\x02\x02\u07B9\u07BA\x07\u011E\x02\x02\u07BA\u07BC" +
		"\x05\u0132\x9A\x02\u07BB\u07B9\x03\x02\x02\x02\u07BC\u07BD\x03\x02\x02" +
		"\x02\u07BD\u07BB\x03\x02\x02\x02\u07BD\u07BE\x03\x02\x02\x02\u07BE\u07C1" +
		"\x03\x02\x02\x02\u07BF\u07C1\x03\x02\x02\x02\u07C0\u07BB\x03\x02\x02\x02" +
		"\u07C0\u07BF\x03\x02\x02\x02\u07C1\u012D\x03\x02\x02\x02\u07C2\u07C3\x07" +
		"\u017A\x02\x02\u07C3\u07C4\x05\u0130\x99\x02\u07C4\u07C5\x07\u017B\x02" +
		"\x02\u07C5\u012F\x03\x02\x02\x02\u07C6\u07CB\x05\u0132\x9A\x02\u07C7\u07C8" +
		"\x07\u017E\x02\x02\u07C8\u07CA\x05\u0132\x9A\x02\u07C9\u07C7\x03\x02\x02" +
		"\x02\u07CA\u07CD\x03\x02\x02\x02\u07CB\u07C9\x03\x02\x02\x02\u07CB\u07CC" +
		"\x03\x02\x02\x02\u07CC\u0131\x03\x02\x02\x02\u07CD\u07CB\x03\x02\x02\x02" +
		"\u07CE\u07D2\x05\u0134\x9B\x02\u07CF\u07D2\x05\u0136\x9C\x02\u07D0\u07D2" +
		"\x05\u0160\xB1\x02\u07D1\u07CE\x03\x02\x02\x02\u07D1\u07CF\x03\x02\x02" +
		"\x02\u07D1\u07D0\x03\x02\x02\x02\u07D2\u0133\x03\x02\x02\x02\u07D3\u07D4" +
		"\t%\x02\x02\u07D4\u0135\x03\x02\x02\x02\u07D5\u07D6\x07\u018F\x02\x02" +
		"\u07D6\u0137\x03\x02\x02\x02\u07D7\u07D8\x07\u0168\x02\x02\u07D8\u07D9" +
		"\x05\u0104\x83\x02\u07D9\u07DA\x07\u0155\x02\x02\u07DA\u07DB\x05\u0104" +
		"\x83\x02\u07DB\u0139\x03\x02\x02\x02\u07DC\u07E1\x05\u0132\x9A\x02\u07DD" +
		"\u07DE\x07\u0177\x02\x02\u07DE\u07E0\x05\u0132\x9A\x02\u07DF\u07DD\x03" +
		"\x02\x02\x02\u07E0\u07E3\x03\x02\x02\x02\u07E1\u07E2\x03\x02\x02\x02\u07E1" +
		"\u07DF\x03\x02\x02\x02\u07E2\u013B\x03\x02\x02\x02\u07E3\u07E1\x03\x02" +
		"\x02\x02\u07E4\u07E5\x07\u016B\x02\x02\u07E5\u07E6\x05\u0142\xA2\x02\u07E6" +
		"\u013D\x03\x02\x02\x02\u07E7\u07E8\x07<\x02\x02\u07E8\u07E9\x07\u0128" +
		"\x02\x02\u07E9\u07EA\x07\xF3\x02\x02\u07EA\u013F\x03\x02\x02\x02\u07EB" +
		"\u07EC\x07<\x02\x02\u07EC\u07ED\x07\xF3\x02\x02\u07ED\u0141\x03\x02\x02" +
		"\x02\u07EE\u07EF\x07\u017A\x02\x02\u07EF\u07F4\x05\u0144\xA3\x02\u07F0" +
		"\u07F1\x07\u017E\x02\x02\u07F1\u07F3\x05\u0144\xA3\x02\u07F2\u07F0\x03" +
		"\x02\x02\x02\u07F3\u07F6\x03\x02\x02\x02\u07F4\u07F2\x03\x02\x02\x02\u07F4" +
		"\u07F5\x03\x02\x02\x02\u07F5\u07F7\x03\x02\x02\x02\u07F6\u07F4\x03\x02" +
		"\x02\x02\u07F7\u07F8\x07\u017B\x02\x02\u07F8\u0143\x03\x02\x02\x02\u07F9" +
		"\u07FE\x05\u0146\xA4\x02\u07FA\u07FC\x07\u016F\x02\x02\u07FB\u07FA\x03" +
		"\x02\x02\x02\u07FB\u07FC\x03\x02\x02\x02\u07FC\u07FD\x03\x02\x02\x02\u07FD" +
		"\u07FF\x05\u0148\xA5\x02\u07FE\u07FB\x03\x02\x02\x02\u07FE\u07FF\x03\x02" +
		"\x02\x02\u07FF\u0145\x03\x02\x02\x02\u0800\u0804\x05\u0132\x9A\x02\u0801" +
		"\u0804\x05\u0112\x8A\x02\u0802\u0804\x07\u018F\x02\x02\u0803\u0800\x03" +
		"\x02\x02\x02\u0803\u0801\x03\x02\x02\x02\u0803\u0802\x03\x02\x02\x02\u0804" +
		"\u0147\x03\x02\x02\x02\u0805\u080A\x07\u0190\x02\x02\u0806\u080A\x07\u0191" +
		"\x02\x02\u0807\u080A\x05\u015A\xAE\x02\u0808\u080A\x07\u018F\x02\x02\u0809" +
		"\u0805\x03\x02\x02\x02\u0809\u0806\x03\x02\x02\x02\u0809\u0807\x03\x02" +
		"\x02\x02\u0809\u0808\x03\x02\x02\x02\u080A\u0149\x03\x02\x02\x02\u080B" +
		"\u0812\x07\xB5\x02\x02\u080C\u080D\x07\u0175\x02\x02\u080D\u0812\x07\u0175" +
		"\x02\x02\u080E\u0812\x07\u012F\x02\x02\u080F\u0810\x07\u0174\x02\x02\u0810" +
		"\u0812\x07\u0174\x02\x02\u0811\u080B\x03\x02\x02\x02\u0811\u080C\x03\x02" +
		"\x02\x02\u0811\u080E\x03\x02\x02\x02\u0811\u080F\x03\x02\x02\x02\u0812" +
		"\u014B\x03\x02\x02\x02\u0813\u0822\x07\u016F\x02\x02\u0814\u0822\x07\u0170" +
		"\x02\x02\u0815\u0822\x07\u0171\x02\x02\u0816\u0817\x07\u0171\x02\x02\u0817" +
		"\u0822\x07\u016F\x02\x02\u0818\u0819\x07\u0170\x02\x02\u0819\u0822\x07" +
		"\u016F\x02\x02\u081A\u081B\x07\u0171\x02\x02\u081B\u0822\x07\u0170\x02" +
		"\x02\u081C\u081D\x07\u0172\x02\x02\u081D\u0822\x07\u016F\x02\x02\u081E" +
		"\u081F\x07\u0171\x02\x02\u081F\u0820\x07\u016F\x02\x02\u0820\u0822\x07" +
		"\u0170\x02\x02\u0821\u0813\x03\x02\x02\x02\u0821\u0814\x03\x02\x02\x02" +
		"\u0821\u0815\x03\x02\x02\x02\u0821\u0816\x03\x02\x02\x02\u0821\u0818\x03" +
		"\x02\x02\x02\u0821\u081A\x03\x02\x02\x02\u0821\u081C\x03\x02\x02\x02\u0821" +
		"\u081E\x03\x02\x02\x02\u0822\u014D\x03\x02\x02\x02\u0823\u0824\x07\u0171" +
		"\x02\x02\u0824\u082B\x07\u0171\x02\x02\u0825\u0826\x07\u0170\x02\x02\u0826" +
		"\u082B\x07\u0170\x02\x02\u0827\u082B\x07\u0175\x02\x02\u0828\u082B\x07" +
		"\u0176\x02\x02\u0829\u082B\x07\u0174\x02\x02\u082A\u0823\x03\x02\x02\x02" +
		"\u082A\u0825\x03\x02\x02\x02\u082A\u0827\x03\x02\x02\x02\u082A\u0828\x03" +
		"\x02\x02\x02\u082A\u0829\x03\x02\x02\x02\u082B\u014F\x03\x02\x02\x02\u082C" +
		"\u082D\t&\x02\x02\u082D\u0151\x03\x02\x02\x02\u082E\u082F\t\'\x02\x02" +
		"\u082F\u0153\x03\x02\x02\x02\u0830\u083D\x05\u0156\xAC\x02\u0831\u083D" +
		"\x05\u0158\xAD\x02\u0832\u083D\x05\u0118\x8D\x02\u0833\u0834\x07\u0187" +
		"\x02\x02\u0834\u083D\x05\u0158\xAD\x02\u0835\u083D\x05\u015A\xAE\x02\u0836" +
		"\u083D\x07\u0191\x02\x02\u0837\u083D\x07\u0192\x02\x02\u0838\u083A\x07" +
		"\u0128\x02\x02\u0839\u0838\x03\x02\x02\x02\u0839\u083A\x03\x02\x02\x02" +
		"\u083A\u083B\x03\x02\x02\x02\u083B\u083D\x07\u0129\x02\x02\u083C\u0830" +
		"\x03\x02\x02\x02\u083C\u0831\x03\x02\x02\x02\u083C\u0832\x03\x02\x02\x02" +
		"\u083C\u0833\x03\x02\x02\x02\u083C\u0835\x03\x02\x02\x02\u083C\u0836\x03" +
		"\x02\x02\x02\u083C\u0837\x03\x02\x02\x02\u083C\u0839\x03\x02\x02\x02\u083D" +
		"\u0155\x03\x02\x02\x02\u083E\u083F\x07\u018F\x02\x02\u083F\u0157\x03\x02" +
		"\x02\x02\u0840\u0841\x07\u0190\x02\x02\u0841\u0159\x03\x02\x02\x02\u0842" +
		"\u0843\t\x1F\x02\x02\u0843\u015B\x03\x02\x02\x02\u0844\u0845\t(\x02\x02" +
		"\u0845\u015D\x03\x02\x02\x02\u0846\u0847\t)\x02\x02\u0847\u015F\x03\x02" +
		"\x02\x02\u0848\u0849\t*\x02\x02\u0849\u0161\x03\x02\x02\x02\xF6\u016A" +
		"\u016D\u016F\u017E\u0190\u0194\u019D\u01A2\u01A9\u01B0\u01B4\u01BD\u01C9" +
		"\u01CC\u01D3\u01DB\u01E0\u01E3\u01EA\u01F2\u01F6\u0202\u020A\u020E\u0223" +
		"\u0227\u022B\u022F\u0238\u023D\u0241\u0245\u0249\u024C\u0250\u0255\u025B" +
		"\u0260\u0265\u0268\u026C\u0274\u027C\u0280\u0284\u0288\u028C\u0290\u0294" +
		"\u0298\u029C\u029E\u02A8\u02B0\u02C8\u02CF\u02DE\u02E1\u02E9\u02F5\u030D" +
		"\u031A\u031F\u0323\u032B\u032F\u0337\u0341\u0345\u034B\u034F\u0353\u0356" +
		"\u035F\u0363\u036A\u036D\u0377\u037F\u0387\u038B\u039A\u03AD\u03B8\u03BC" +
		"\u03C3\u03C8\u03CE\u03D2\u03D9\u03DD\u03E1\u03E5\u03ED\u03F1\u03F6\u03FB" +
		"\u0401\u0404\u0408\u0413\u041C\u0429\u0438\u043B\u043F\u0442\u0444\u0449" +
		"\u044D\u0450\u0454\u045D\u0466\u0470\u0475\u0481\u0484\u0487\u048A\u0490" +
		"\u0494\u049C\u049F\u04A4\u04A7\u04A9\u04B7\u04C2\u04C7\u04CF\u04D2\u04D5" +
		"\u04DA\u04DC\u04DE\u04E3\u04E6\u04EA\u04ED\u04F0\u04FC\u0503\u050E\u052B" +
		"\u0541\u0553\u0558\u0564\u0571\u057D\u0589\u058E\u05A9\u05B1\u05B5\u05B8" +
		"\u05BB\u05C2\u05C5\u05C8\u05CB\u05CE\u05D1\u05D6\u05D9\u05E2\u05E7\u05EB" +
		"\u05F0\u05F9\u060C\u0614\u061C\u0620\u0624\u062E\u0648\u0650\u065C\u0672" +
		"\u0674\u067C\u067E\u0682\u068A\u0693\u0699\u06A6\u06AB\u06B7\u06BC\u06BF" +
		"\u06C5\u06CA\u06CF\u06D4\u06D7\u06E3\u06E8\u06EB\u06EF\u06F5\u070A\u070C" +
		"\u0714\u0718\u0721\u0725\u0735\u073E\u0756\u075D\u0760\u076A\u0773\u0779" +
		"\u0781\u0786\u078A\u0791\u0796\u079E\u07A2\u07A6\u07A9\u07AD\u07B0\u07B4" +
		"\u07BD\u07C0\u07CB\u07D1\u07E1\u07F4\u07FB\u07FE\u0803\u0809\u0811\u0821" +
		"\u082A\u0839\u083C";
	public static readonly _serializedATN: string = Utils.join(
		[
			FlinkSqlParser._serializedATNSegment0,
			FlinkSqlParser._serializedATNSegment1,
			FlinkSqlParser._serializedATNSegment2,
			FlinkSqlParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FlinkSqlParser.__ATN) {
			FlinkSqlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FlinkSqlParser._serializedATN));
		}

		return FlinkSqlParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public EOF(): TerminalNode { return this.getToken(FlinkSqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_program; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitProgram) {
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
	public sqlStatements(): SqlStatementsContext {
		return this.getRuleContext(0, SqlStatementsContext);
	}
	public EOF(): TerminalNode { return this.getToken(FlinkSqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_statement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitStatement) {
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
	public sqlStatement(): SqlStatementContext[];
	public sqlStatement(i: number): SqlStatementContext;
	public sqlStatement(i?: number): SqlStatementContext | SqlStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlStatementContext);
		} else {
			return this.getRuleContext(i, SqlStatementContext);
		}
	}
	public emptyStatement(): EmptyStatementContext[];
	public emptyStatement(i: number): EmptyStatementContext;
	public emptyStatement(i?: number): EmptyStatementContext | EmptyStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EmptyStatementContext);
		} else {
			return this.getRuleContext(i, EmptyStatementContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.SEMICOLON);
		} else {
			return this.getToken(FlinkSqlParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_sqlStatements; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSqlStatements) {
			listener.enterSqlStatements(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSqlStatements) {
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
	public ddlStatement(): DdlStatementContext | undefined {
		return this.tryGetRuleContext(0, DdlStatementContext);
	}
	public dmlStatement(): DmlStatementContext | undefined {
		return this.tryGetRuleContext(0, DmlStatementContext);
	}
	public describeStatement(): DescribeStatementContext | undefined {
		return this.tryGetRuleContext(0, DescribeStatementContext);
	}
	public explainStatement(): ExplainStatementContext | undefined {
		return this.tryGetRuleContext(0, ExplainStatementContext);
	}
	public useStatement(): UseStatementContext | undefined {
		return this.tryGetRuleContext(0, UseStatementContext);
	}
	public showStatememt(): ShowStatememtContext | undefined {
		return this.tryGetRuleContext(0, ShowStatememtContext);
	}
	public loadStatement(): LoadStatementContext | undefined {
		return this.tryGetRuleContext(0, LoadStatementContext);
	}
	public unloadStatememt(): UnloadStatememtContext | undefined {
		return this.tryGetRuleContext(0, UnloadStatememtContext);
	}
	public setStatememt(): SetStatememtContext | undefined {
		return this.tryGetRuleContext(0, SetStatememtContext);
	}
	public resetStatememt(): ResetStatememtContext | undefined {
		return this.tryGetRuleContext(0, ResetStatememtContext);
	}
	public jarStatememt(): JarStatememtContext | undefined {
		return this.tryGetRuleContext(0, JarStatememtContext);
	}
	public dtAddStatement(): DtAddStatementContext | undefined {
		return this.tryGetRuleContext(0, DtAddStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_sqlStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSqlStatement) {
			listener.enterSqlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSqlStatement) {
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
	public SEMICOLON(): TerminalNode { return this.getToken(FlinkSqlParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_emptyStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitEmptyStatement) {
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
	public createTable(): CreateTableContext | undefined {
		return this.tryGetRuleContext(0, CreateTableContext);
	}
	public createDatabase(): CreateDatabaseContext | undefined {
		return this.tryGetRuleContext(0, CreateDatabaseContext);
	}
	public createView(): CreateViewContext | undefined {
		return this.tryGetRuleContext(0, CreateViewContext);
	}
	public createFunction(): CreateFunctionContext | undefined {
		return this.tryGetRuleContext(0, CreateFunctionContext);
	}
	public createCatalog(): CreateCatalogContext | undefined {
		return this.tryGetRuleContext(0, CreateCatalogContext);
	}
	public alterTable(): AlterTableContext | undefined {
		return this.tryGetRuleContext(0, AlterTableContext);
	}
	public alertView(): AlertViewContext | undefined {
		return this.tryGetRuleContext(0, AlertViewContext);
	}
	public alterDatabase(): AlterDatabaseContext | undefined {
		return this.tryGetRuleContext(0, AlterDatabaseContext);
	}
	public alterFunction(): AlterFunctionContext | undefined {
		return this.tryGetRuleContext(0, AlterFunctionContext);
	}
	public dropCatalog(): DropCatalogContext | undefined {
		return this.tryGetRuleContext(0, DropCatalogContext);
	}
	public dropTable(): DropTableContext | undefined {
		return this.tryGetRuleContext(0, DropTableContext);
	}
	public dropDatabase(): DropDatabaseContext | undefined {
		return this.tryGetRuleContext(0, DropDatabaseContext);
	}
	public dropView(): DropViewContext | undefined {
		return this.tryGetRuleContext(0, DropViewContext);
	}
	public dropFunction(): DropFunctionContext | undefined {
		return this.tryGetRuleContext(0, DropFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_ddlStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDdlStatement) {
			listener.enterDdlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDdlStatement) {
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
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public insertStatement(): InsertStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dmlStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDmlStatement) {
			listener.enterDmlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDmlStatement) {
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
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DESCRIBE, 0); }
	public KW_DESC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DESC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_describeStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDescribeStatement) {
			listener.enterDescribeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDescribeStatement) {
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
	public KW_EXPLAIN(): TerminalNode { return this.getToken(FlinkSqlParser.KW_EXPLAIN, 0); }
	public dmlStatement(): DmlStatementContext | undefined {
		return this.tryGetRuleContext(0, DmlStatementContext);
	}
	public insertSimpleStatement(): InsertSimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertSimpleStatementContext);
	}
	public insertMulStatement(): InsertMulStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertMulStatementContext);
	}
	public explainDetails(): ExplainDetailsContext | undefined {
		return this.tryGetRuleContext(0, ExplainDetailsContext);
	}
	public KW_PLAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PLAN, 0); }
	public KW_FOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_explainStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterExplainStatement) {
			listener.enterExplainStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitExplainStatement) {
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
	public explainDetail(): ExplainDetailContext[];
	public explainDetail(i: number): ExplainDetailContext;
	public explainDetail(i?: number): ExplainDetailContext | ExplainDetailContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExplainDetailContext);
		} else {
			return this.getRuleContext(i, ExplainDetailContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_explainDetails; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterExplainDetails) {
			listener.enterExplainDetails(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitExplainDetails) {
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
	public KW_CHANGELOG_MODE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CHANGELOG_MODE, 0); }
	public KW_JSON_EXECUTION_PLAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JSON_EXECUTION_PLAN, 0); }
	public KW_ESTIMATED_COST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ESTIMATED_COST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_explainDetail; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterExplainDetail) {
			listener.enterExplainDetail(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitExplainDetail) {
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
	public KW_USE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_USE, 0); }
	public uid(): UidContext | undefined {
		return this.tryGetRuleContext(0, UidContext);
	}
	public KW_CATALOG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CATALOG, 0); }
	public useModuleStatement(): UseModuleStatementContext | undefined {
		return this.tryGetRuleContext(0, UseModuleStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_useStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUseStatement) {
			listener.enterUseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUseStatement) {
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
	public KW_USE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_USE, 0); }
	public KW_MODULES(): TerminalNode { return this.getToken(FlinkSqlParser.KW_MODULES, 0); }
	public uid(): UidContext[];
	public uid(i: number): UidContext;
	public uid(i?: number): UidContext | UidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UidContext);
		} else {
			return this.getRuleContext(i, UidContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_useModuleStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUseModuleStatement) {
			listener.enterUseModuleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUseModuleStatement) {
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
	public KW_SHOW(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SHOW, 0); }
	public KW_CATALOGS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CATALOGS, 0); }
	public KW_DATABASES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATABASES, 0); }
	public KW_VIEWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VIEWS, 0); }
	public KW_JARS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JARS, 0); }
	public KW_CURRENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CURRENT, 0); }
	public KW_CATALOG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CATALOG, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATABASE, 0); }
	public KW_TABLES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TABLES, 0); }
	public uid(): UidContext | undefined {
		return this.tryGetRuleContext(0, UidContext);
	}
	public likePredicate(): LikePredicateContext | undefined {
		return this.tryGetRuleContext(0, LikePredicateContext);
	}
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FROM, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IN, 0); }
	public KW_COLUMNS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COLUMNS, 0); }
	public KW_CREATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TABLE, 0); }
	public KW_VIEW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VIEW, 0); }
	public KW_FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FUNCTIONS, 0); }
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_USER, 0); }
	public KW_MODULES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MODULES, 0); }
	public KW_FULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_showStatememt; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterShowStatememt) {
			listener.enterShowStatememt(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitShowStatememt) {
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
	public KW_LOAD(): TerminalNode { return this.getToken(FlinkSqlParser.KW_LOAD, 0); }
	public KW_MODULE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_MODULE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WITH, 0); }
	public tablePropertyList(): TablePropertyListContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_loadStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLoadStatement) {
			listener.enterLoadStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLoadStatement) {
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
	public KW_UNLOAD(): TerminalNode { return this.getToken(FlinkSqlParser.KW_UNLOAD, 0); }
	public KW_MODULE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_MODULE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_unloadStatememt; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUnloadStatememt) {
			listener.enterUnloadStatememt(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUnloadStatememt) {
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
	public KW_SET(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SET, 0); }
	public tableProperty(): TablePropertyContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_setStatememt; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSetStatememt) {
			listener.enterSetStatememt(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSetStatememt) {
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
	public KW_RESET(): TerminalNode { return this.getToken(FlinkSqlParser.KW_RESET, 0); }
	public tablePropertyKey(): TablePropertyKeyContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyKeyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_resetStatememt; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterResetStatememt) {
			listener.enterResetStatememt(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitResetStatememt) {
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
	public KW_JAR(): TerminalNode { return this.getToken(FlinkSqlParser.KW_JAR, 0); }
	public jarFileName(): JarFileNameContext {
		return this.getRuleContext(0, JarFileNameContext);
	}
	public KW_ADD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ADD, 0); }
	public KW_REMOVE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_REMOVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_jarStatememt; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterJarStatememt) {
			listener.enterJarStatememt(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitJarStatememt) {
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
	public KW_ADD(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ADD, 0); }
	public KW_JAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JAR, 0); }
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WITH, 0); }
	public FILE_PATH(): TerminalNode { return this.getToken(FlinkSqlParser.FILE_PATH, 0); }
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	public uid(): UidContext[];
	public uid(i: number): UidContext;
	public uid(i?: number): UidContext | UidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UidContext);
		} else {
			return this.getRuleContext(i, UidContext);
		}
	}
	public KW_FILE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FILE, 0); }
	public KW_RENAME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RENAME, 0); }
	public KW_PYTHON_FILES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_FILES, 0); }
	public KW_PYTHON_REQUIREMENTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_REQUIREMENTS, 0); }
	public KW_PYTHON_DEPENDENCIES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_DEPENDENCIES, 0); }
	public KW_PYTHON_JAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_JAR, 0); }
	public KW_PYTHON_ARCHIVES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_ARCHIVES, 0); }
	public KW_PYTHON_PARAMETER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_PARAMETER, 0); }
	public KW_ENGINE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ENGINE, 0); }
	public KW_KEY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_KEY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dtAddStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDtAddStatement) {
			listener.enterDtAddStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDtAddStatement) {
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
	public simpleCreateTable(): SimpleCreateTableContext | undefined {
		return this.tryGetRuleContext(0, SimpleCreateTableContext);
	}
	public createTableAsSelect(): CreateTableAsSelectContext | undefined {
		return this.tryGetRuleContext(0, CreateTableAsSelectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_createTable; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCreateTable) {
			listener.enterCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCreateTable) {
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
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_TABLE, 0); }
	public sourceTable(): SourceTableContext {
		return this.getRuleContext(0, SourceTableContext);
	}
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public columnOptionDefinition(): ColumnOptionDefinitionContext[];
	public columnOptionDefinition(i: number): ColumnOptionDefinitionContext;
	public columnOptionDefinition(i?: number): ColumnOptionDefinitionContext | ColumnOptionDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnOptionDefinitionContext);
		} else {
			return this.getRuleContext(i, ColumnOptionDefinitionContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public withOption(): WithOptionContext {
		return this.getRuleContext(0, WithOptionContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TEMPORARY, 0); }
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	public watermarkDefinition(): WatermarkDefinitionContext | undefined {
		return this.tryGetRuleContext(0, WatermarkDefinitionContext);
	}
	public tableConstraint(): TableConstraintContext | undefined {
		return this.tryGetRuleContext(0, TableConstraintContext);
	}
	public selfDefinitionClause(): SelfDefinitionClauseContext | undefined {
		return this.tryGetRuleContext(0, SelfDefinitionClauseContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	public partitionDefinition(): PartitionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, PartitionDefinitionContext);
	}
	public likeDefinition(): LikeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, LikeDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_simpleCreateTable; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSimpleCreateTable) {
			listener.enterSimpleCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSimpleCreateTable) {
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
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_TABLE, 0); }
	public sourceTable(): SourceTableContext {
		return this.getRuleContext(0, SourceTableContext);
	}
	public withOption(): WithOptionContext {
		return this.getRuleContext(0, WithOptionContext);
	}
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_createTableAsSelect; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCreateTableAsSelect) {
			listener.enterCreateTableAsSelect(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCreateTableAsSelect) {
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
	public physicalColumnDefinition(): PhysicalColumnDefinitionContext | undefined {
		return this.tryGetRuleContext(0, PhysicalColumnDefinitionContext);
	}
	public metadataColumnDefinition(): MetadataColumnDefinitionContext | undefined {
		return this.tryGetRuleContext(0, MetadataColumnDefinitionContext);
	}
	public computedColumnDefinition(): ComputedColumnDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ComputedColumnDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnOptionDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnOptionDefinition) {
			listener.enterColumnOptionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnOptionDefinition) {
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
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
	}
	public columnType(): ColumnTypeContext {
		return this.getRuleContext(0, ColumnTypeContext);
	}
	public columnConstraint(): ColumnConstraintContext | undefined {
		return this.tryGetRuleContext(0, ColumnConstraintContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_physicalColumnDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPhysicalColumnDefinition) {
			listener.enterPhysicalColumnDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPhysicalColumnDefinition) {
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
	public uid(): UidContext | undefined {
		return this.tryGetRuleContext(0, UidContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnName) {
			listener.enterColumnName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnName) {
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
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public columnName(): ColumnNameContext[];
	public columnName(i: number): ColumnNameContext;
	public columnName(i?: number): ColumnNameContext | ColumnNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnNameContext);
		} else {
			return this.getRuleContext(i, ColumnNameContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnNameList; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnNameList) {
			listener.enterColumnNameList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnNameList) {
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
	public _type!: Token;
	public KW_DATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATE, 0); }
	public KW_BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BOOLEAN, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULL, 0); }
	public KW_CHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CHAR, 0); }
	public KW_VARCHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VARCHAR, 0); }
	public KW_STRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STRING, 0); }
	public KW_BINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BINARY, 0); }
	public KW_VARBINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VARBINARY, 0); }
	public KW_BYTES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BYTES, 0); }
	public KW_TINYINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TINYINT, 0); }
	public KW_SMALLINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SMALLINT, 0); }
	public KW_INT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INT, 0); }
	public KW_INTEGER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INTEGER, 0); }
	public KW_BIGINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BIGINT, 0); }
	public KW_TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIME, 0); }
	public KW_TIMESTAMP_LTZ(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMESTAMP_LTZ, 0); }
	public KW_DATETIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATETIME, 0); }
	public lengthOneDimension(): LengthOneDimensionContext | undefined {
		return this.tryGetRuleContext(0, LengthOneDimensionContext);
	}
	public KW_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMESTAMP, 0); }
	public KW_ZONE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ZONE, 0); }
	public KW_WITHOUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WITHOUT, 0); }
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WITH, 0); }
	public KW_LOCAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LOCAL, 0); }
	public KW_DECIMAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DECIMAL, 0); }
	public KW_DEC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DEC, 0); }
	public KW_NUMERIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NUMERIC, 0); }
	public KW_FLOAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FLOAT, 0); }
	public KW_DOUBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DOUBLE, 0); }
	public lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext | undefined {
		return this.tryGetRuleContext(0, LengthTwoOptionalDimensionContext);
	}
	public KW_ARRAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ARRAY, 0); }
	public KW_MULTISET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MULTISET, 0); }
	public lengthOneTypeDimension(): LengthOneTypeDimensionContext | undefined {
		return this.tryGetRuleContext(0, LengthOneTypeDimensionContext);
	}
	public KW_MAP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MAP, 0); }
	public mapTypeDimension(): MapTypeDimensionContext | undefined {
		return this.tryGetRuleContext(0, MapTypeDimensionContext);
	}
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROW, 0); }
	public rowTypeDimension(): RowTypeDimensionContext | undefined {
		return this.tryGetRuleContext(0, RowTypeDimensionContext);
	}
	public KW_RAW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RAW, 0); }
	public lengthTwoStringDimension(): LengthTwoStringDimensionContext | undefined {
		return this.tryGetRuleContext(0, LengthTwoStringDimensionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnType; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnType) {
			listener.enterColumnType(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnType) {
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
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public decimalLiteral(): DecimalLiteralContext {
		return this.getRuleContext(0, DecimalLiteralContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_lengthOneDimension; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLengthOneDimension) {
			listener.enterLengthOneDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLengthOneDimension) {
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
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public decimalLiteral(): DecimalLiteralContext[];
	public decimalLiteral(i: number): DecimalLiteralContext;
	public decimalLiteral(i?: number): DecimalLiteralContext | DecimalLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecimalLiteralContext);
		} else {
			return this.getRuleContext(i, DecimalLiteralContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_lengthTwoOptionalDimension; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLengthTwoOptionalDimension) {
			listener.enterLengthTwoOptionalDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLengthTwoOptionalDimension) {
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
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public stringLiteral(): StringLiteralContext[];
	public stringLiteral(i: number): StringLiteralContext;
	public stringLiteral(i?: number): StringLiteralContext | StringLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringLiteralContext);
		} else {
			return this.getRuleContext(i, StringLiteralContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_lengthTwoStringDimension; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLengthTwoStringDimension) {
			listener.enterLengthTwoStringDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLengthTwoStringDimension) {
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
	public LESS_SYMBOL(): TerminalNode { return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0); }
	public columnType(): ColumnTypeContext {
		return this.getRuleContext(0, ColumnTypeContext);
	}
	public GREATER_SYMBOL(): TerminalNode { return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_lengthOneTypeDimension; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLengthOneTypeDimension) {
			listener.enterLengthOneTypeDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLengthOneTypeDimension) {
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
	public LESS_SYMBOL(): TerminalNode { return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0); }
	public columnType(): ColumnTypeContext[];
	public columnType(i: number): ColumnTypeContext;
	public columnType(i?: number): ColumnTypeContext | ColumnTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnTypeContext);
		} else {
			return this.getRuleContext(i, ColumnTypeContext);
		}
	}
	public GREATER_SYMBOL(): TerminalNode { return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_mapTypeDimension; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterMapTypeDimension) {
			listener.enterMapTypeDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitMapTypeDimension) {
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
	public LESS_SYMBOL(): TerminalNode { return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0); }
	public columnName(): ColumnNameContext[];
	public columnName(i: number): ColumnNameContext;
	public columnName(i?: number): ColumnNameContext | ColumnNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnNameContext);
		} else {
			return this.getRuleContext(i, ColumnNameContext);
		}
	}
	public columnType(): ColumnTypeContext[];
	public columnType(i: number): ColumnTypeContext;
	public columnType(i?: number): ColumnTypeContext | ColumnTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnTypeContext);
		} else {
			return this.getRuleContext(i, ColumnTypeContext);
		}
	}
	public GREATER_SYMBOL(): TerminalNode { return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_rowTypeDimension; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterRowTypeDimension) {
			listener.enterRowTypeDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitRowTypeDimension) {
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
	public KW_PRIMARY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PRIMARY, 0); }
	public KW_KEY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_KEY, 0); }
	public KW_NOT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_NOT, 0); }
	public KW_ENFORCED(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ENFORCED, 0); }
	public KW_CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONSTRAINT, 0); }
	public constraintName(): ConstraintNameContext | undefined {
		return this.tryGetRuleContext(0, ConstraintNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnConstraint; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnConstraint) {
			listener.enterColumnConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnConstraint) {
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
	public KW_COMMENT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_COMMENT, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_commentSpec; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCommentSpec) {
			listener.enterCommentSpec(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCommentSpec) {
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
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
	}
	public columnType(): ColumnTypeContext {
		return this.getRuleContext(0, ColumnTypeContext);
	}
	public KW_METADATA(): TerminalNode { return this.getToken(FlinkSqlParser.KW_METADATA, 0); }
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FROM, 0); }
	public metadataKey(): MetadataKeyContext | undefined {
		return this.tryGetRuleContext(0, MetadataKeyContext);
	}
	public KW_VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VIRTUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_metadataColumnDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterMetadataColumnDefinition) {
			listener.enterMetadataColumnDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitMetadataColumnDefinition) {
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
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_metadataKey; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterMetadataKey) {
			listener.enterMetadataKey(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitMetadataKey) {
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
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public computedColumnExpression(): ComputedColumnExpressionContext {
		return this.getRuleContext(0, ComputedColumnExpressionContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_computedColumnDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterComputedColumnDefinition) {
			listener.enterComputedColumnDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitComputedColumnDefinition) {
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_computedColumnExpression; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterComputedColumnExpression) {
			listener.enterComputedColumnExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitComputedColumnExpression) {
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
	public KW_WATERMARK(): TerminalNode { return this.getToken(FlinkSqlParser.KW_WATERMARK, 0); }
	public KW_FOR(): TerminalNode { return this.getToken(FlinkSqlParser.KW_FOR, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_watermarkDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWatermarkDefinition) {
			listener.enterWatermarkDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWatermarkDefinition) {
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
	public KW_PRIMARY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PRIMARY, 0); }
	public KW_KEY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_KEY, 0); }
	public columnNameList(): ColumnNameListContext {
		return this.getRuleContext(0, ColumnNameListContext);
	}
	public KW_NOT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_NOT, 0); }
	public KW_ENFORCED(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ENFORCED, 0); }
	public KW_CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONSTRAINT, 0); }
	public constraintName(): ConstraintNameContext | undefined {
		return this.tryGetRuleContext(0, ConstraintNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tableConstraint; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTableConstraint) {
			listener.enterTableConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTableConstraint) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_constraintName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterConstraintName) {
			listener.enterConstraintName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitConstraintName) {
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
	public KW_PERIOD(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PERIOD, 0); }
	public KW_FOR(): TerminalNode { return this.getToken(FlinkSqlParser.KW_FOR, 0); }
	public KW_SYSTEM_TIME(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SYSTEM_TIME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_selfDefinitionClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSelfDefinitionClause) {
			listener.enterSelfDefinitionClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSelfDefinitionClause) {
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
	public KW_PARTITIONED(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PARTITIONED, 0); }
	public KW_BY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_BY, 0); }
	public transformList(): TransformListContext {
		return this.getRuleContext(0, TransformListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_partitionDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPartitionDefinition) {
			listener.enterPartitionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPartitionDefinition) {
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
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public transform(): TransformContext[];
	public transform(i: number): TransformContext;
	public transform(i?: number): TransformContext | TransformContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransformContext);
		} else {
			return this.getRuleContext(i, TransformContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_transformList; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTransformList) {
			listener.enterTransformList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTransformList) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_transform; }
	public copyFrom(ctx: TransformContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentityTransformContext extends TransformContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: TransformContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIdentityTransform) {
			listener.enterIdentityTransform(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIdentityTransform) {
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
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public transformArgument(): TransformArgumentContext[];
	public transformArgument(i: number): TransformArgumentContext;
	public transformArgument(i?: number): TransformArgumentContext | TransformArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransformArgumentContext);
		} else {
			return this.getRuleContext(i, TransformArgumentContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(ctx: TransformContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterApplyTransform) {
			listener.enterApplyTransform(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitApplyTransform) {
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
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_transformArgument; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTransformArgument) {
			listener.enterTransformArgument(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTransformArgument) {
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
	public KW_LIKE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_LIKE, 0); }
	public sourceTable(): SourceTableContext {
		return this.getRuleContext(0, SourceTableContext);
	}
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RR_BRACKET, 0); }
	public likeOption(): LikeOptionContext[];
	public likeOption(i: number): LikeOptionContext;
	public likeOption(i?: number): LikeOptionContext | LikeOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LikeOptionContext);
		} else {
			return this.getRuleContext(i, LikeOptionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_likeDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLikeDefinition) {
			listener.enterLikeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLikeDefinition) {
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
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_sourceTable; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSourceTable) {
			listener.enterSourceTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSourceTable) {
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
	public KW_INCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INCLUDING, 0); }
	public KW_EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXCLUDING, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALL, 0); }
	public KW_CONSTRAINTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONSTRAINTS, 0); }
	public KW_PARTITIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PARTITIONS, 0); }
	public KW_OVERWRITING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OVERWRITING, 0); }
	public KW_GENERATED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GENERATED, 0); }
	public KW_OPTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OPTIONS, 0); }
	public KW_WATERMARKS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WATERMARKS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_likeOption; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLikeOption) {
			listener.enterLikeOption(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLikeOption) {
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
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CREATE, 0); }
	public KW_CATALOG(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CATALOG, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public withOption(): WithOptionContext {
		return this.getRuleContext(0, WithOptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_createCatalog; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCreateCatalog) {
			listener.enterCreateCatalog(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCreateCatalog) {
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
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CREATE, 0); }
	public KW_DATABASE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DATABASE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public withOption(): WithOptionContext {
		return this.getRuleContext(0, WithOptionContext);
	}
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_createDatabase; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCreateDatabase) {
			listener.enterCreateDatabase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCreateDatabase) {
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
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CREATE, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(FlinkSqlParser.KW_VIEW, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TEMPORARY, 0); }
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public columnNameList(): ColumnNameListContext | undefined {
		return this.tryGetRuleContext(0, ColumnNameListContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_createView; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCreateView) {
			listener.enterCreateView(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCreateView) {
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
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CREATE, 0); }
	public KW_FUNCTION(): TerminalNode { return this.getToken(FlinkSqlParser.KW_FUNCTION, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TEMPORARY, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SYSTEM, 0); }
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public KW_LANGUAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LANGUAGE, 0); }
	public usingClause(): UsingClauseContext | undefined {
		return this.tryGetRuleContext(0, UsingClauseContext);
	}
	public KW_JAVA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JAVA, 0); }
	public KW_SCALA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SCALA, 0); }
	public KW_PYTHON(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_createFunction; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCreateFunction) {
			listener.enterCreateFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCreateFunction) {
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
	public KW_USING(): TerminalNode { return this.getToken(FlinkSqlParser.KW_USING, 0); }
	public KW_JAR(): TerminalNode[];
	public KW_JAR(i: number): TerminalNode;
	public KW_JAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.KW_JAR);
		} else {
			return this.getToken(FlinkSqlParser.KW_JAR, i);
		}
	}
	public jarFileName(): JarFileNameContext[];
	public jarFileName(i: number): JarFileNameContext;
	public jarFileName(i?: number): JarFileNameContext | JarFileNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JarFileNameContext);
		} else {
			return this.getRuleContext(i, JarFileNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_usingClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUsingClause) {
			listener.enterUsingClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUsingClause) {
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
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_jarFileName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterJarFileName) {
			listener.enterJarFileName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitJarFileName) {
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
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_TABLE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public renameDefinition(): RenameDefinitionContext | undefined {
		return this.tryGetRuleContext(0, RenameDefinitionContext);
	}
	public setKeyValueDefinition(): SetKeyValueDefinitionContext | undefined {
		return this.tryGetRuleContext(0, SetKeyValueDefinitionContext);
	}
	public addConstraint(): AddConstraintContext | undefined {
		return this.tryGetRuleContext(0, AddConstraintContext);
	}
	public dropConstraint(): DropConstraintContext | undefined {
		return this.tryGetRuleContext(0, DropConstraintContext);
	}
	public addUnique(): AddUniqueContext | undefined {
		return this.tryGetRuleContext(0, AddUniqueContext);
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_alterTable; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAlterTable) {
			listener.enterAlterTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAlterTable) {
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
	public KW_RENAME(): TerminalNode { return this.getToken(FlinkSqlParser.KW_RENAME, 0); }
	public KW_TO(): TerminalNode { return this.getToken(FlinkSqlParser.KW_TO, 0); }
	public uid(): UidContext[];
	public uid(i: number): UidContext;
	public uid(i?: number): UidContext | UidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UidContext);
		} else {
			return this.getRuleContext(i, UidContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_renameDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterRenameDefinition) {
			listener.enterRenameDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitRenameDefinition) {
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
	public KW_SET(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SET, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_setKeyValueDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSetKeyValueDefinition) {
			listener.enterSetKeyValueDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSetKeyValueDefinition) {
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
	public KW_ADD(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ADD, 0); }
	public KW_CONSTRAINT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0); }
	public constraintName(): ConstraintNameContext {
		return this.getRuleContext(0, ConstraintNameContext);
	}
	public KW_PRIMARY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PRIMARY, 0); }
	public KW_KEY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_KEY, 0); }
	public columnNameList(): ColumnNameListContext {
		return this.getRuleContext(0, ColumnNameListContext);
	}
	public notForced(): NotForcedContext | undefined {
		return this.tryGetRuleContext(0, NotForcedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_addConstraint; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAddConstraint) {
			listener.enterAddConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAddConstraint) {
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
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DROP, 0); }
	public KW_CONSTRAINT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0); }
	public constraintName(): ConstraintNameContext {
		return this.getRuleContext(0, ConstraintNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dropConstraint; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDropConstraint) {
			listener.enterDropConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDropConstraint) {
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
	public KW_ADD(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ADD, 0); }
	public KW_UNIQUE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_UNIQUE, 0); }
	public columnNameList(): ColumnNameListContext {
		return this.getRuleContext(0, ColumnNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_addUnique; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAddUnique) {
			listener.enterAddUnique(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAddUnique) {
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
	public KW_NOT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_NOT, 0); }
	public KW_ENFORCED(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ENFORCED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_notForced; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterNotForced) {
			listener.enterNotForced(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitNotForced) {
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
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ALTER, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(FlinkSqlParser.KW_VIEW, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public renameDefinition(): RenameDefinitionContext | undefined {
		return this.tryGetRuleContext(0, RenameDefinitionContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_alertView; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAlertView) {
			listener.enterAlertView(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAlertView) {
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
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ALTER, 0); }
	public KW_DATABASE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DATABASE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public setKeyValueDefinition(): SetKeyValueDefinitionContext {
		return this.getRuleContext(0, SetKeyValueDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_alterDatabase; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAlterDatabase) {
			listener.enterAlterDatabase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAlterDatabase) {
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
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ALTER, 0); }
	public KW_FUNCTION(): TerminalNode { return this.getToken(FlinkSqlParser.KW_FUNCTION, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TEMPORARY, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SYSTEM, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	public KW_LANGUAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LANGUAGE, 0); }
	public KW_JAVA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JAVA, 0); }
	public KW_SCALA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SCALA, 0); }
	public KW_PYTHON(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_alterFunction; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAlterFunction) {
			listener.enterAlterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAlterFunction) {
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
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DROP, 0); }
	public KW_CATALOG(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CATALOG, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dropCatalog; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDropCatalog) {
			listener.enterDropCatalog(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDropCatalog) {
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
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DROP, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_TABLE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TEMPORARY, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dropTable; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDropTable) {
			listener.enterDropTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDropTable) {
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
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DROP, 0); }
	public KW_DATABASE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DATABASE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	public KW_RESTRICT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RESTRICT, 0); }
	public KW_CASCADE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CASCADE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dropDatabase; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDropDatabase) {
			listener.enterDropDatabase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDropDatabase) {
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
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DROP, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(FlinkSqlParser.KW_VIEW, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TEMPORARY, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dropView; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDropView) {
			listener.enterDropView(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDropView) {
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
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DROP, 0); }
	public KW_FUNCTION(): TerminalNode { return this.getToken(FlinkSqlParser.KW_FUNCTION, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TEMPORARY, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SYSTEM, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dropFunction; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDropFunction) {
			listener.enterDropFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDropFunction) {
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
	public insertSimpleStatement(): InsertSimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertSimpleStatementContext);
	}
	public KW_EXECUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXECUTE, 0); }
	public insertMulStatement(): InsertMulStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertMulStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_insertStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterInsertStatement) {
			listener.enterInsertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitInsertStatement) {
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
	public KW_INSERT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_INSERT, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_INTO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INTO, 0); }
	public KW_OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OVERWRITE, 0); }
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public valuesDefinition(): ValuesDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ValuesDefinitionContext);
	}
	public insertPartitionDefinition(): InsertPartitionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, InsertPartitionDefinitionContext);
	}
	public columnNameList(): ColumnNameListContext | undefined {
		return this.tryGetRuleContext(0, ColumnNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_insertSimpleStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterInsertSimpleStatement) {
			listener.enterInsertSimpleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitInsertSimpleStatement) {
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
	public KW_PARTITION(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PARTITION, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_insertPartitionDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterInsertPartitionDefinition) {
			listener.enterInsertPartitionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitInsertPartitionDefinition) {
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
	public KW_VALUES(): TerminalNode { return this.getToken(FlinkSqlParser.KW_VALUES, 0); }
	public valuesRowDefinition(): ValuesRowDefinitionContext[];
	public valuesRowDefinition(i: number): ValuesRowDefinitionContext;
	public valuesRowDefinition(i?: number): ValuesRowDefinitionContext | ValuesRowDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValuesRowDefinitionContext);
		} else {
			return this.getRuleContext(i, ValuesRowDefinitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_valuesDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterValuesDefinition) {
			listener.enterValuesDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitValuesDefinition) {
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
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_valuesRowDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterValuesRowDefinition) {
			listener.enterValuesRowDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitValuesRowDefinition) {
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
	public KW_STATEMENT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_STATEMENT, 0); }
	public KW_SET(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SET, 0); }
	public KW_BEGIN(): TerminalNode { return this.getToken(FlinkSqlParser.KW_BEGIN, 0); }
	public KW_END(): TerminalNode { return this.getToken(FlinkSqlParser.KW_END, 0); }
	public insertSimpleStatement(): InsertSimpleStatementContext[];
	public insertSimpleStatement(i: number): InsertSimpleStatementContext;
	public insertSimpleStatement(i?: number): InsertSimpleStatementContext | InsertSimpleStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InsertSimpleStatementContext);
		} else {
			return this.getRuleContext(i, InsertSimpleStatementContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.SEMICOLON);
		} else {
			return this.getToken(FlinkSqlParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_insertMulStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterInsertMulStatement) {
			listener.enterInsertMulStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitInsertMulStatement) {
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
	public valuesCaluse(): ValuesCaluseContext | undefined {
		return this.tryGetRuleContext(0, ValuesCaluseContext);
	}
	public withClause(): WithClauseContext | undefined {
		return this.tryGetRuleContext(0, WithClauseContext);
	}
	public queryStatement(): QueryStatementContext[];
	public queryStatement(i: number): QueryStatementContext;
	public queryStatement(i?: number): QueryStatementContext | QueryStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryStatementContext);
		} else {
			return this.getRuleContext(i, QueryStatementContext);
		}
	}
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RR_BRACKET, 0); }
	public KW_INTERSECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INTERSECT, 0); }
	public KW_UNION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNION, 0); }
	public KW_EXCEPT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXCEPT, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALL, 0); }
	public orderByCaluse(): OrderByCaluseContext | undefined {
		return this.tryGetRuleContext(0, OrderByCaluseContext);
	}
	public limitClause(): LimitClauseContext | undefined {
		return this.tryGetRuleContext(0, LimitClauseContext);
	}
	public selectClause(): SelectClauseContext | undefined {
		return this.tryGetRuleContext(0, SelectClauseContext);
	}
	public selectStatement(): SelectStatementContext | undefined {
		return this.tryGetRuleContext(0, SelectStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_queryStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterQueryStatement) {
			listener.enterQueryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitQueryStatement) {
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
	public KW_VALUES(): TerminalNode { return this.getToken(FlinkSqlParser.KW_VALUES, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_valuesCaluse; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterValuesCaluse) {
			listener.enterValuesCaluse(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitValuesCaluse) {
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


export class WithClauseContext extends ParserRuleContext {
	public KW_WITH(): TerminalNode { return this.getToken(FlinkSqlParser.KW_WITH, 0); }
	public withItem(): WithItemContext[];
	public withItem(i: number): WithItemContext;
	public withItem(i?: number): WithItemContext | WithItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WithItemContext);
		} else {
			return this.getRuleContext(i, WithItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_withClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWithClause) {
			listener.enterWithClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWithClause) {
			listener.exitWithClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWithClause) {
			return visitor.visitWithClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithItemContext extends ParserRuleContext {
	public withItemName(): WithItemNameContext {
		return this.getRuleContext(0, WithItemNameContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public LR_BRACKET(): TerminalNode[];
	public LR_BRACKET(i: number): TerminalNode;
	public LR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.LR_BRACKET);
		} else {
			return this.getToken(FlinkSqlParser.LR_BRACKET, i);
		}
	}
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public RR_BRACKET(): TerminalNode[];
	public RR_BRACKET(i: number): TerminalNode;
	public RR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.RR_BRACKET);
		} else {
			return this.getToken(FlinkSqlParser.RR_BRACKET, i);
		}
	}
	public columnName(): ColumnNameContext[];
	public columnName(i: number): ColumnNameContext;
	public columnName(i?: number): ColumnNameContext | ColumnNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnNameContext);
		} else {
			return this.getRuleContext(i, ColumnNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_withItem; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWithItem) {
			listener.enterWithItem(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWithItem) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_withItemName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWithItemName) {
			listener.enterWithItemName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWithItemName) {
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
	public selectClause(): SelectClauseContext {
		return this.getRuleContext(0, SelectClauseContext);
	}
	public fromClause(): FromClauseContext {
		return this.getRuleContext(0, FromClauseContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public groupByClause(): GroupByClauseContext | undefined {
		return this.tryGetRuleContext(0, GroupByClauseContext);
	}
	public havingClause(): HavingClauseContext | undefined {
		return this.tryGetRuleContext(0, HavingClauseContext);
	}
	public windowClause(): WindowClauseContext | undefined {
		return this.tryGetRuleContext(0, WindowClauseContext);
	}
	public matchRecognizeClause(): MatchRecognizeClauseContext | undefined {
		return this.tryGetRuleContext(0, MatchRecognizeClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_selectStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSelectStatement) {
			listener.enterSelectStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSelectStatement) {
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
	public KW_SELECT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SELECT, 0); }
	public ASTERISK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
	public projectItemDefinition(): ProjectItemDefinitionContext[];
	public projectItemDefinition(i: number): ProjectItemDefinitionContext;
	public projectItemDefinition(i?: number): ProjectItemDefinitionContext | ProjectItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProjectItemDefinitionContext);
		} else {
			return this.getRuleContext(i, ProjectItemDefinitionContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_selectClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSelectClause) {
			listener.enterSelectClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSelectClause) {
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
	public overWindowItem(): OverWindowItemContext | undefined {
		return this.tryGetRuleContext(0, OverWindowItemContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_projectItemDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterProjectItemDefinition) {
			listener.enterProjectItemDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitProjectItemDefinition) {
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
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public KW_OVER(): TerminalNode { return this.getToken(FlinkSqlParser.KW_OVER, 0); }
	public windowSpec(): WindowSpecContext | undefined {
		return this.tryGetRuleContext(0, WindowSpecContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ErrorCapturingIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_overWindowItem; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterOverWindowItem) {
			listener.enterOverWindowItem(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitOverWindowItem) {
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
	public KW_FROM(): TerminalNode { return this.getToken(FlinkSqlParser.KW_FROM, 0); }
	public tableExpression(): TableExpressionContext {
		return this.getRuleContext(0, TableExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_fromClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFromClause) {
			listener.enterFromClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFromClause) {
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
	public tableReference(): TableReferenceContext[];
	public tableReference(i: number): TableReferenceContext;
	public tableReference(i?: number): TableReferenceContext | TableReferenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableReferenceContext);
		} else {
			return this.getRuleContext(i, TableReferenceContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	public tableExpression(): TableExpressionContext[];
	public tableExpression(i: number): TableExpressionContext;
	public tableExpression(i?: number): TableExpressionContext | TableExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableExpressionContext);
		} else {
			return this.getRuleContext(i, TableExpressionContext);
		}
	}
	public KW_JOIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JOIN, 0); }
	public KW_NATURAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NATURAL, 0); }
	public KW_OUTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OUTER, 0); }
	public joinCondition(): JoinConditionContext | undefined {
		return this.tryGetRuleContext(0, JoinConditionContext);
	}
	public KW_LEFT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LEFT, 0); }
	public KW_RIGHT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RIGHT, 0); }
	public KW_FULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FULL, 0); }
	public KW_INNER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INNER, 0); }
	public KW_CROSS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CROSS, 0); }
	public inlineDataValueClause(): InlineDataValueClauseContext | undefined {
		return this.tryGetRuleContext(0, InlineDataValueClauseContext);
	}
	public windoTVFClause(): WindoTVFClauseContext | undefined {
		return this.tryGetRuleContext(0, WindoTVFClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tableExpression; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTableExpression) {
			listener.enterTableExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTableExpression) {
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
	public tablePrimary(): TablePrimaryContext {
		return this.getRuleContext(0, TablePrimaryContext);
	}
	public tableAlias(): TableAliasContext | undefined {
		return this.tryGetRuleContext(0, TableAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tableReference; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTableReference) {
			listener.enterTableReference(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTableReference) {
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
	public tablePath(): TablePathContext | undefined {
		return this.tryGetRuleContext(0, TablePathContext);
	}
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TABLE, 0); }
	public systemTimePeriod(): SystemTimePeriodContext | undefined {
		return this.tryGetRuleContext(0, SystemTimePeriodContext);
	}
	public correlationName(): CorrelationNameContext | undefined {
		return this.tryGetRuleContext(0, CorrelationNameContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	public KW_LATERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LATERAL, 0); }
	public LR_BRACKET(): TerminalNode[];
	public LR_BRACKET(i: number): TerminalNode;
	public LR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.LR_BRACKET);
		} else {
			return this.getToken(FlinkSqlParser.LR_BRACKET, i);
		}
	}
	public functionName(): FunctionNameContext | undefined {
		return this.tryGetRuleContext(0, FunctionNameContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RR_BRACKET(): TerminalNode[];
	public RR_BRACKET(i: number): TerminalNode;
	public RR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.RR_BRACKET);
		} else {
			return this.getToken(FlinkSqlParser.RR_BRACKET, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public KW_UNNEST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNNEST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tablePrimary; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTablePrimary) {
			listener.enterTablePrimary(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTablePrimary) {
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
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tablePath; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTablePath) {
			listener.enterTablePath(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTablePath) {
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
	public KW_FOR(): TerminalNode { return this.getToken(FlinkSqlParser.KW_FOR, 0); }
	public KW_SYSTEM_TIME(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SYSTEM_TIME, 0); }
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public KW_OF(): TerminalNode { return this.getToken(FlinkSqlParser.KW_OF, 0); }
	public dateTimeExpression(): DateTimeExpressionContext {
		return this.getRuleContext(0, DateTimeExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_systemTimePeriod; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSystemTimePeriod) {
			listener.enterSystemTimePeriod(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSystemTimePeriod) {
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dateTimeExpression; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDateTimeExpression) {
			listener.enterDateTimeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDateTimeExpression) {
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
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public valuesDefinition(): ValuesDefinitionContext {
		return this.getRuleContext(0, ValuesDefinitionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public tableAlias(): TableAliasContext {
		return this.getRuleContext(0, TableAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_inlineDataValueClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterInlineDataValueClause) {
			listener.enterInlineDataValueClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitInlineDataValueClause) {
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
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_TABLE, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public windowTVFExression(): WindowTVFExressionContext {
		return this.getRuleContext(0, WindowTVFExressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_windoTVFClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWindoTVFClause) {
			listener.enterWindoTVFClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWindoTVFClause) {
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
	public windoTVFName(): WindoTVFNameContext {
		return this.getRuleContext(0, WindoTVFNameContext);
	}
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public windowTVFParam(): WindowTVFParamContext[];
	public windowTVFParam(i: number): WindowTVFParamContext;
	public windowTVFParam(i?: number): WindowTVFParamContext | WindowTVFParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WindowTVFParamContext);
		} else {
			return this.getRuleContext(i, WindowTVFParamContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_windowTVFExression; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWindowTVFExression) {
			listener.enterWindowTVFExression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWindowTVFExression) {
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
	public KW_TUMBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TUMBLE, 0); }
	public KW_HOP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HOP, 0); }
	public KW_CUMULATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CUMULATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_windoTVFName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWindoTVFName) {
			listener.enterWindoTVFName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWindoTVFName) {
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
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TABLE, 0); }
	public timeAttrColumn(): TimeAttrColumnContext | undefined {
		return this.tryGetRuleContext(0, TimeAttrColumnContext);
	}
	public columnDescriptor(): ColumnDescriptorContext | undefined {
		return this.tryGetRuleContext(0, ColumnDescriptorContext);
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext | undefined {
		return this.tryGetRuleContext(0, TimeIntervalExpressionContext);
	}
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATA, 0); }
	public DOUBLE_RIGHT_ARROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DOUBLE_RIGHT_ARROW, 0); }
	public KW_TIMECOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMECOL, 0); }
	public timeIntervalParamName(): TimeIntervalParamNameContext | undefined {
		return this.tryGetRuleContext(0, TimeIntervalParamNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_windowTVFParam; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWindowTVFParam) {
			listener.enterWindowTVFParam(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWindowTVFParam) {
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
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATA, 0); }
	public KW_TIMECOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMECOL, 0); }
	public KW_SIZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SIZE, 0); }
	public KW_OFFSET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OFFSET, 0); }
	public KW_STEP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STEP, 0); }
	public KW_SLIDE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SLIDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_timeIntervalParamName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTimeIntervalParamName) {
			listener.enterTimeIntervalParamName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTimeIntervalParamName) {
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
	public KW_DESCRIPTOR(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DESCRIPTOR, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnDescriptor; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnDescriptor) {
			listener.enterColumnDescriptor(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnDescriptor) {
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
	public KW_ON(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ON, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public KW_USING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_USING, 0); }
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LR_BRACKET, 0); }
	public uid(): UidContext[];
	public uid(i: number): UidContext;
	public uid(i?: number): UidContext | UidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UidContext);
		} else {
			return this.getRuleContext(i, UidContext);
		}
	}
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_joinCondition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterJoinCondition) {
			listener.enterJoinCondition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitJoinCondition) {
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
	public KW_WHERE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_whereClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWhereClause) {
			listener.enterWhereClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWhereClause) {
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
	public KW_GROUP(): TerminalNode { return this.getToken(FlinkSqlParser.KW_GROUP, 0); }
	public KW_BY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_BY, 0); }
	public groupItemDefinition(): GroupItemDefinitionContext[];
	public groupItemDefinition(i: number): GroupItemDefinitionContext;
	public groupItemDefinition(i?: number): GroupItemDefinitionContext | GroupItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupItemDefinitionContext);
		} else {
			return this.getRuleContext(i, GroupItemDefinitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_groupByClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterGroupByClause) {
			listener.enterGroupByClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitGroupByClause) {
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
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public groupWindowFunction(): GroupWindowFunctionContext | undefined {
		return this.tryGetRuleContext(0, GroupWindowFunctionContext);
	}
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	public groupingSetsNotaionName(): GroupingSetsNotaionNameContext | undefined {
		return this.tryGetRuleContext(0, GroupingSetsNotaionNameContext);
	}
	public groupingSets(): GroupingSetsContext | undefined {
		return this.tryGetRuleContext(0, GroupingSetsContext);
	}
	public groupItemDefinition(): GroupItemDefinitionContext[];
	public groupItemDefinition(i: number): GroupItemDefinitionContext;
	public groupItemDefinition(i?: number): GroupItemDefinitionContext | GroupItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupItemDefinitionContext);
		} else {
			return this.getRuleContext(i, GroupItemDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_groupItemDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterGroupItemDefinition) {
			listener.enterGroupItemDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitGroupItemDefinition) {
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
	public KW_GROUPING(): TerminalNode { return this.getToken(FlinkSqlParser.KW_GROUPING, 0); }
	public KW_SETS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SETS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_groupingSets; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterGroupingSets) {
			listener.enterGroupingSets(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitGroupingSets) {
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
	public KW_CUBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CUBE, 0); }
	public KW_ROLLUP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROLLUP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_groupingSetsNotaionName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterGroupingSetsNotaionName) {
			listener.enterGroupingSetsNotaionName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitGroupingSetsNotaionName) {
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
	public groupWindowFunctionName(): GroupWindowFunctionNameContext {
		return this.getRuleContext(0, GroupWindowFunctionNameContext);
	}
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public timeAttrColumn(): TimeAttrColumnContext {
		return this.getRuleContext(0, TimeAttrColumnContext);
	}
	public COMMA(): TerminalNode { return this.getToken(FlinkSqlParser.COMMA, 0); }
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		return this.getRuleContext(0, TimeIntervalExpressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_groupWindowFunction; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterGroupWindowFunction) {
			listener.enterGroupWindowFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitGroupWindowFunction) {
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
	public KW_TUMBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TUMBLE, 0); }
	public KW_HOP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HOP, 0); }
	public KW_SESSION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SESSION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_groupWindowFunctionName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterGroupWindowFunctionName) {
			listener.enterGroupWindowFunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitGroupWindowFunctionName) {
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
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_timeAttrColumn; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTimeAttrColumn) {
			listener.enterTimeAttrColumn(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTimeAttrColumn) {
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
	public KW_HAVING(): TerminalNode { return this.getToken(FlinkSqlParser.KW_HAVING, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_havingClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterHavingClause) {
			listener.enterHavingClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitHavingClause) {
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
	public KW_WINDOW(): TerminalNode { return this.getToken(FlinkSqlParser.KW_WINDOW, 0); }
	public namedWindow(): NamedWindowContext[];
	public namedWindow(i: number): NamedWindowContext;
	public namedWindow(i?: number): NamedWindowContext | NamedWindowContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedWindowContext);
		} else {
			return this.getRuleContext(i, NamedWindowContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_windowClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWindowClause) {
			listener.enterWindowClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWindowClause) {
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
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public windowSpec(): WindowSpecContext {
		return this.getRuleContext(0, WindowSpecContext);
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getRuleContext(0, ErrorCapturingIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_namedWindow; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterNamedWindow) {
			listener.enterNamedWindow(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitNamedWindow) {
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
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public partitionByClause(): PartitionByClauseContext | undefined {
		return this.tryGetRuleContext(0, PartitionByClauseContext);
	}
	public orderByCaluse(): OrderByCaluseContext | undefined {
		return this.tryGetRuleContext(0, OrderByCaluseContext);
	}
	public windowFrame(): WindowFrameContext | undefined {
		return this.tryGetRuleContext(0, WindowFrameContext);
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ErrorCapturingIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_windowSpec; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWindowSpec) {
			listener.enterWindowSpec(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWindowSpec) {
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
	public KW_MATCH_RECOGNIZE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_MATCH_RECOGNIZE, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public patternVariablesDefination(): PatternVariablesDefinationContext {
		return this.getRuleContext(0, PatternVariablesDefinationContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public partitionByClause(): PartitionByClauseContext | undefined {
		return this.tryGetRuleContext(0, PartitionByClauseContext);
	}
	public orderByCaluse(): OrderByCaluseContext | undefined {
		return this.tryGetRuleContext(0, OrderByCaluseContext);
	}
	public measuresClause(): MeasuresClauseContext | undefined {
		return this.tryGetRuleContext(0, MeasuresClauseContext);
	}
	public outputMode(): OutputModeContext | undefined {
		return this.tryGetRuleContext(0, OutputModeContext);
	}
	public afterMatchStrategy(): AfterMatchStrategyContext | undefined {
		return this.tryGetRuleContext(0, AfterMatchStrategyContext);
	}
	public patternDefination(): PatternDefinationContext | undefined {
		return this.tryGetRuleContext(0, PatternDefinationContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_matchRecognizeClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterMatchRecognizeClause) {
			listener.enterMatchRecognizeClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitMatchRecognizeClause) {
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
	public KW_ORDER(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ORDER, 0); }
	public KW_BY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_BY, 0); }
	public orderItemDefition(): OrderItemDefitionContext[];
	public orderItemDefition(i: number): OrderItemDefitionContext;
	public orderItemDefition(i?: number): OrderItemDefitionContext | OrderItemDefitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OrderItemDefitionContext);
		} else {
			return this.getRuleContext(i, OrderItemDefitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_orderByCaluse; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterOrderByCaluse) {
			listener.enterOrderByCaluse(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitOrderByCaluse) {
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULLS, 0); }
	public KW_ASC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ASC, 0); }
	public KW_DESC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DESC, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LAST, 0); }
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FIRST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_orderItemDefition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterOrderItemDefition) {
			listener.enterOrderItemDefition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitOrderItemDefition) {
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
	public KW_LIMIT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_LIMIT, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_limitClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLimitClause) {
			listener.enterLimitClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLimitClause) {
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
	public KW_PARTITION(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PARTITION, 0); }
	public KW_BY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_BY, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_partitionByClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPartitionByClause) {
			listener.enterPartitionByClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPartitionByClause) {
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
	public ASTERISK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD_SIGN, 0); }
	public QUESTION_MARK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.QUESTION_MARK_SIGN, 0); }
	public LB_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LB_BRACKET, 0); }
	public DIG_LITERAL(): TerminalNode[];
	public DIG_LITERAL(i: number): TerminalNode;
	public DIG_LITERAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.DIG_LITERAL);
		} else {
			return this.getToken(FlinkSqlParser.DIG_LITERAL, i);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMMA, 0); }
	public RB_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RB_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_quantifiers; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterQuantifiers) {
			listener.enterQuantifiers(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitQuantifiers) {
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
	public KW_MEASURES(): TerminalNode { return this.getToken(FlinkSqlParser.KW_MEASURES, 0); }
	public projectItemDefinition(): ProjectItemDefinitionContext[];
	public projectItemDefinition(i: number): ProjectItemDefinitionContext;
	public projectItemDefinition(i?: number): ProjectItemDefinitionContext | ProjectItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProjectItemDefinitionContext);
		} else {
			return this.getRuleContext(i, ProjectItemDefinitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_measuresClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterMeasuresClause) {
			listener.enterMeasuresClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitMeasuresClause) {
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
	public KW_PATTERN(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PATTERN, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public patternVariable(): PatternVariableContext[];
	public patternVariable(i: number): PatternVariableContext;
	public patternVariable(i?: number): PatternVariableContext | PatternVariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatternVariableContext);
		} else {
			return this.getRuleContext(i, PatternVariableContext);
		}
	}
	public withinClause(): WithinClauseContext | undefined {
		return this.tryGetRuleContext(0, WithinClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_patternDefination; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPatternDefination) {
			listener.enterPatternDefination(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPatternDefination) {
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
	public unquotedIdentifier(): UnquotedIdentifierContext {
		return this.getRuleContext(0, UnquotedIdentifierContext);
	}
	public quantifiers(): QuantifiersContext | undefined {
		return this.tryGetRuleContext(0, QuantifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_patternVariable; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPatternVariable) {
			listener.enterPatternVariable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPatternVariable) {
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
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALL, 0); }
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROWS, 0); }
	public KW_PER(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PER, 0); }
	public KW_MATCH(): TerminalNode { return this.getToken(FlinkSqlParser.KW_MATCH, 0); }
	public KW_ONE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ONE, 0); }
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_outputMode; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterOutputMode) {
			listener.enterOutputMode(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitOutputMode) {
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
	public KW_AFTER(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AFTER, 0); }
	public KW_MATCH(): TerminalNode { return this.getToken(FlinkSqlParser.KW_MATCH, 0); }
	public KW_SKIP(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SKIP, 0); }
	public KW_PAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PAST, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LAST, 0); }
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROW, 0); }
	public KW_TO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TO, 0); }
	public KW_NEXT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NEXT, 0); }
	public unquotedIdentifier(): UnquotedIdentifierContext | undefined {
		return this.tryGetRuleContext(0, UnquotedIdentifierContext);
	}
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FIRST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_afterMatchStrategy; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAfterMatchStrategy) {
			listener.enterAfterMatchStrategy(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAfterMatchStrategy) {
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
	public KW_DEFINE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DEFINE, 0); }
	public projectItemDefinition(): ProjectItemDefinitionContext[];
	public projectItemDefinition(i: number): ProjectItemDefinitionContext;
	public projectItemDefinition(i?: number): ProjectItemDefinitionContext | ProjectItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProjectItemDefinitionContext);
		} else {
			return this.getRuleContext(i, ProjectItemDefinitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_patternVariablesDefination; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPatternVariablesDefination) {
			listener.enterPatternVariablesDefination(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPatternVariablesDefination) {
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
	public KW_RANGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RANGE, 0); }
	public KW_BETWEEN(): TerminalNode { return this.getToken(FlinkSqlParser.KW_BETWEEN, 0); }
	public timeIntervalExpression(): TimeIntervalExpressionContext | undefined {
		return this.tryGetRuleContext(0, TimeIntervalExpressionContext);
	}
	public frameBound(): FrameBoundContext {
		return this.getRuleContext(0, FrameBoundContext);
	}
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROWS, 0); }
	public DIG_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIG_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_windowFrame; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWindowFrame) {
			listener.enterWindowFrame(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWindowFrame) {
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
	public KW_PRECEDING(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PRECEDING, 0); }
	public KW_AND(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AND, 0); }
	public KW_CURRENT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CURRENT, 0); }
	public KW_ROW(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ROW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_frameBound; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFrameBound) {
			listener.enterFrameBound(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFrameBound) {
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
	public KW_WITHIN(): TerminalNode { return this.getToken(FlinkSqlParser.KW_WITHIN, 0); }
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		return this.getRuleContext(0, TimeIntervalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_withinClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWithinClause) {
			listener.enterWithinClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWithinClause) {
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


export class ExpressionContext extends ParserRuleContext {
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_expression; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitExpression) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_booleanExpression; }
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	public KW_NOT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_NOT, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLogicalNot) {
			listener.enterLogicalNot(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLogicalNot) {
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
export class ExistsContext extends BooleanExpressionContext {
	public KW_EXISTS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_EXISTS, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterExists) {
			listener.enterExists(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitExists) {
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
export class PredicatedContext extends BooleanExpressionContext {
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public predicate(): PredicateContext | undefined {
		return this.tryGetRuleContext(0, PredicateContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPredicated) {
			listener.enterPredicated(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPredicated) {
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
export class LogicalBinaryContext extends BooleanExpressionContext {
	public _left!: BooleanExpressionContext;
	public _operator!: Token;
	public _right!: BooleanExpressionContext;
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AND, 0); }
	public KW_OR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OR, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLogicalBinary) {
			listener.enterLogicalBinary(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLogicalBinary) {
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
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AND, 0); }
	public KW_BETWEEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BETWEEN, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NOT, 0); }
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RR_BRACKET, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXISTS, 0); }
	public KW_RLIKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RLIKE, 0); }
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LIKE, 0); }
	public KW_ANY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ANY, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALL, 0); }
	public KW_IS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IS, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULL, 0); }
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TRUE, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FALSE, 0); }
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FROM, 0); }
	public KW_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DISTINCT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_predicate; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPredicate) {
			listener.enterPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPredicate) {
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
	public KW_LIKE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_LIKE, 0); }
	public KW_ANY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ANY, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALL, 0); }
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RR_BRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NOT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	public valueExpression(): ValueExpressionContext | undefined {
		return this.tryGetRuleContext(0, ValueExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_likePredicate; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLikePredicate) {
			listener.enterLikePredicate(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLikePredicate) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_valueExpression; }
	public copyFrom(ctx: ValueExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterValueExpressionDefault) {
			listener.enterValueExpressionDefault(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitValueExpressionDefault) {
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
export class ArithmeticUnaryContext extends ValueExpressionContext {
	public _operator!: Token;
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD_SIGN, 0); }
	public BIT_NOT_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_NOT_OP, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterArithmeticUnary) {
			listener.enterArithmeticUnary(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitArithmeticUnary) {
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
export class ArithmeticBinaryContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _operator!: Token;
	public _right!: ValueExpressionContext;
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public ASTERISK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
	public SLASH_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SLASH_SIGN, 0); }
	public PENCENT_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PENCENT_SIGN, 0); }
	public KW_DIV(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DIV, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD_SIGN, 0); }
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public DOUBLE_VERTICAL_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DOUBLE_VERTICAL_SIGN, 0); }
	public BIT_AND_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_AND_OP, 0); }
	public BIT_XOR_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_XOR_OP, 0); }
	public BIT_OR_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_OR_OP, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterArithmeticBinary) {
			listener.enterArithmeticBinary(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitArithmeticBinary) {
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
export class ComparisonContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _right!: ValueExpressionContext;
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitComparison) {
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


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_primaryExpression; }
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class SearchedCaseContext extends PrimaryExpressionContext {
	public _elseExpression!: ExpressionContext;
	public KW_CASE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CASE, 0); }
	public KW_END(): TerminalNode { return this.getToken(FlinkSqlParser.KW_END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ELSE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSearchedCase) {
			listener.enterSearchedCase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSearchedCase) {
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
export class SimpleCaseContext extends PrimaryExpressionContext {
	public _value!: ExpressionContext;
	public _elseExpression!: ExpressionContext;
	public KW_CASE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CASE, 0); }
	public KW_END(): TerminalNode { return this.getToken(FlinkSqlParser.KW_END, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ELSE, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSimpleCase) {
			listener.enterSimpleCase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSimpleCase) {
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
export class CastContext extends PrimaryExpressionContext {
	public KW_CAST(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CAST, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public columnType(): ColumnTypeContext {
		return this.getRuleContext(0, ColumnTypeContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCast) {
			listener.enterCast(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCast) {
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
export class FirstContext extends PrimaryExpressionContext {
	public KW_FIRST(): TerminalNode { return this.getToken(FlinkSqlParser.KW_FIRST, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public KW_IGNORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IGNORE, 0); }
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULLS, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFirst) {
			listener.enterFirst(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFirst) {
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
export class LastContext extends PrimaryExpressionContext {
	public KW_LAST(): TerminalNode { return this.getToken(FlinkSqlParser.KW_LAST, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public KW_IGNORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IGNORE, 0); }
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULLS, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLast) {
			listener.enterLast(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLast) {
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
export class PositionContext extends PrimaryExpressionContext {
	public _substr!: ValueExpressionContext;
	public _str!: ValueExpressionContext;
	public KW_POSITION(): TerminalNode { return this.getToken(FlinkSqlParser.KW_POSITION, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public KW_IN(): TerminalNode { return this.getToken(FlinkSqlParser.KW_IN, 0); }
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPosition) {
			listener.enterPosition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPosition) {
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
export class ConstantDefaultContext extends PrimaryExpressionContext {
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterConstantDefault) {
			listener.enterConstantDefault(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitConstantDefault) {
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
export class StarContext extends PrimaryExpressionContext {
	public ASTERISK_SIGN(): TerminalNode { return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
	public uid(): UidContext | undefined {
		return this.tryGetRuleContext(0, UidContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DOT, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterStar) {
			listener.enterStar(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitStar) {
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
export class SubqueryExpressionContext extends PrimaryExpressionContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSubqueryExpression) {
			listener.enterSubqueryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSubqueryExpression) {
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
export class FunctionCallContext extends PrimaryExpressionContext {
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFunctionCall) {
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
export class SubscriptContext extends PrimaryExpressionContext {
	public _value!: PrimaryExpressionContext;
	public _index!: ValueExpressionContext;
	public LS_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LS_BRACKET, 0); }
	public RS_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RS_BRACKET, 0); }
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSubscript) {
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
export class ColumnReferenceContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnReference) {
			listener.enterColumnReference(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnReference) {
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
export class DereferenceContext extends PrimaryExpressionContext {
	public dereferenceDefinition(): DereferenceDefinitionContext {
		return this.getRuleContext(0, DereferenceDefinitionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDereference) {
			listener.enterDereference(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDereference) {
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
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitParenthesizedExpression) {
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


export class FunctionNameContext extends ParserRuleContext {
	public reservedKeywords(): ReservedKeywordsContext | undefined {
		return this.tryGetRuleContext(0, ReservedKeywordsContext);
	}
	public nonReservedKeywords(): NonReservedKeywordsContext | undefined {
		return this.tryGetRuleContext(0, NonReservedKeywordsContext);
	}
	public uid(): UidContext | undefined {
		return this.tryGetRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_functionName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFunctionName) {
			listener.enterFunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFunctionName) {
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
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dereferenceDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDereferenceDefinition) {
			listener.enterDereferenceDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDereferenceDefinition) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_correlationName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCorrelationName) {
			listener.enterCorrelationName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCorrelationName) {
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
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public dereferenceDefinition(): DereferenceDefinitionContext | undefined {
		return this.tryGetRuleContext(0, DereferenceDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitQualifiedName) {
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


export class TimeIntervalExpressionContext extends ParserRuleContext {
	public KW_INTERVAL(): TerminalNode { return this.getToken(FlinkSqlParser.KW_INTERVAL, 0); }
	public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext | undefined {
		return this.tryGetRuleContext(0, ErrorCapturingMultiUnitsIntervalContext);
	}
	public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext | undefined {
		return this.tryGetRuleContext(0, ErrorCapturingUnitToUnitIntervalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_timeIntervalExpression; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTimeIntervalExpression) {
			listener.enterTimeIntervalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTimeIntervalExpression) {
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


export class ErrorCapturingMultiUnitsIntervalContext extends ParserRuleContext {
	public multiUnitsInterval(): MultiUnitsIntervalContext {
		return this.getRuleContext(0, MultiUnitsIntervalContext);
	}
	public unitToUnitInterval(): UnitToUnitIntervalContext | undefined {
		return this.tryGetRuleContext(0, UnitToUnitIntervalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterErrorCapturingMultiUnitsInterval) {
			listener.enterErrorCapturingMultiUnitsInterval(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitErrorCapturingMultiUnitsInterval) {
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
	public intervalValue(): IntervalValueContext[];
	public intervalValue(i: number): IntervalValueContext;
	public intervalValue(i?: number): IntervalValueContext | IntervalValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntervalValueContext);
		} else {
			return this.getRuleContext(i, IntervalValueContext);
		}
	}
	public intervalTimeUnit(): IntervalTimeUnitContext[];
	public intervalTimeUnit(i: number): IntervalTimeUnitContext;
	public intervalTimeUnit(i?: number): IntervalTimeUnitContext | IntervalTimeUnitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntervalTimeUnitContext);
		} else {
			return this.getRuleContext(i, IntervalTimeUnitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_multiUnitsInterval; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterMultiUnitsInterval) {
			listener.enterMultiUnitsInterval(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitMultiUnitsInterval) {
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
	public unitToUnitInterval(): UnitToUnitIntervalContext[];
	public unitToUnitInterval(i: number): UnitToUnitIntervalContext;
	public unitToUnitInterval(i?: number): UnitToUnitIntervalContext | UnitToUnitIntervalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnitToUnitIntervalContext);
		} else {
			return this.getRuleContext(i, UnitToUnitIntervalContext);
		}
	}
	public multiUnitsInterval(): MultiUnitsIntervalContext | undefined {
		return this.tryGetRuleContext(0, MultiUnitsIntervalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterErrorCapturingUnitToUnitInterval) {
			listener.enterErrorCapturingUnitToUnitInterval(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitErrorCapturingUnitToUnitInterval) {
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
	public _from!: IntervalTimeUnitContext;
	public _to!: IntervalTimeUnitContext;
	public KW_TO(): TerminalNode { return this.getToken(FlinkSqlParser.KW_TO, 0); }
	public intervalValue(): IntervalValueContext {
		return this.getRuleContext(0, IntervalValueContext);
	}
	public intervalTimeUnit(): IntervalTimeUnitContext[];
	public intervalTimeUnit(i: number): IntervalTimeUnitContext;
	public intervalTimeUnit(i?: number): IntervalTimeUnitContext | IntervalTimeUnitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntervalTimeUnitContext);
		} else {
			return this.getRuleContext(i, IntervalTimeUnitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_unitToUnitInterval; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUnitToUnitInterval) {
			listener.enterUnitToUnitInterval(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUnitToUnitInterval) {
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
	public DIG_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIG_LITERAL, 0); }
	public REAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REAL_LITERAL, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD_SIGN, 0); }
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_intervalValue; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIntervalValue) {
			listener.enterIntervalValue(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIntervalValue) {
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


export class IntervalTimeUnitContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public reservedKeywords(): ReservedKeywordsContext | undefined {
		return this.tryGetRuleContext(0, ReservedKeywordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_intervalTimeUnit; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIntervalTimeUnit) {
			listener.enterIntervalTimeUnit(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIntervalTimeUnit) {
			listener.exitIntervalTimeUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIntervalTimeUnit) {
			return visitor.visitIntervalTimeUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnAliasContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnAlias; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnAlias) {
			listener.enterColumnAlias(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnAlias) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tableAlias; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTableAlias) {
			listener.enterTableAlias(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTableAlias) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
		return this.getRuleContext(0, ErrorCapturingIdentifierExtraContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_errorCapturingIdentifier; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterErrorCapturingIdentifier) {
			listener.enterErrorCapturingIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitErrorCapturingIdentifier) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_errorCapturingIdentifierExtra; }
	public copyFrom(ctx: ErrorCapturingIdentifierExtraContext): void {
		super.copyFrom(ctx);
	}
}
export class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
	public KW_MINUS(): TerminalNode[];
	public KW_MINUS(i: number): TerminalNode;
	public KW_MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.KW_MINUS);
		} else {
			return this.getToken(FlinkSqlParser.KW_MINUS, i);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(ctx: ErrorCapturingIdentifierExtraContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterErrorIdent) {
			listener.enterErrorIdent(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitErrorIdent) {
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
	constructor(ctx: ErrorCapturingIdentifierExtraContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterRealIdent) {
			listener.enterRealIdent(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitRealIdent) {
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
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public identifierSeq(): IdentifierSeqContext {
		return this.getRuleContext(0, IdentifierSeqContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIdentifierList) {
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
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_identifierSeq; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIdentifierSeq) {
			listener.enterIdentifierSeq(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIdentifierSeq) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_identifier; }
	public copyFrom(ctx: IdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class UnquotedIdentifierAlternativeContext extends IdentifierContext {
	public unquotedIdentifier(): UnquotedIdentifierContext {
		return this.getRuleContext(0, UnquotedIdentifierContext);
	}
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUnquotedIdentifierAlternative) {
			listener.enterUnquotedIdentifierAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUnquotedIdentifierAlternative) {
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
export class QuotedIdentifierAlternativeContext extends IdentifierContext {
	public quotedIdentifier(): QuotedIdentifierContext {
		return this.getRuleContext(0, QuotedIdentifierContext);
	}
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterQuotedIdentifierAlternative) {
			listener.enterQuotedIdentifierAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitQuotedIdentifierAlternative) {
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
export class NonReservedKeywordsAlternativeContext extends IdentifierContext {
	public nonReservedKeywords(): NonReservedKeywordsContext {
		return this.getRuleContext(0, NonReservedKeywordsContext);
	}
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterNonReservedKeywordsAlternative) {
			listener.enterNonReservedKeywordsAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitNonReservedKeywordsAlternative) {
			listener.exitNonReservedKeywordsAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitNonReservedKeywordsAlternative) {
			return visitor.visitNonReservedKeywordsAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnquotedIdentifierContext extends ParserRuleContext {
	public DIG_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIG_LITERAL, 0); }
	public ID_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ID_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_unquotedIdentifier; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUnquotedIdentifier) {
			listener.enterUnquotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUnquotedIdentifier) {
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
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_quotedIdentifier; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterQuotedIdentifier) {
			listener.enterQuotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitQuotedIdentifier) {
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
	public KW_WHEN(): TerminalNode { return this.getToken(FlinkSqlParser.KW_WHEN, 0); }
	public KW_THEN(): TerminalNode { return this.getToken(FlinkSqlParser.KW_THEN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_whenClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWhenClause) {
			listener.enterWhenClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWhenClause) {
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


export class UidContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.DOT);
		} else {
			return this.getToken(FlinkSqlParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_uid; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUid) {
			listener.enterUid(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUid) {
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
	public KW_WITH(): TerminalNode { return this.getToken(FlinkSqlParser.KW_WITH, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_withOption; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWithOption) {
			listener.enterWithOption(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWithOption) {
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
	public KW_IF(): TerminalNode { return this.getToken(FlinkSqlParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_EXISTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_ifNotExists; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIfNotExists) {
			listener.enterIfNotExists(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIfNotExists) {
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
	public KW_IF(): TerminalNode { return this.getToken(FlinkSqlParser.KW_IF, 0); }
	public KW_EXISTS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_EXISTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_ifExists; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIfExists) {
			listener.enterIfExists(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIfExists) {
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
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public tableProperty(): TablePropertyContext[];
	public tableProperty(i: number): TablePropertyContext;
	public tableProperty(i?: number): TablePropertyContext | TablePropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyContext);
		} else {
			return this.getRuleContext(i, TablePropertyContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tablePropertyList; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTablePropertyList) {
			listener.enterTablePropertyList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTablePropertyList) {
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
	public tablePropertyKey(): TablePropertyKeyContext {
		return this.getRuleContext(0, TablePropertyKeyContext);
	}
	public tablePropertyValue(): TablePropertyValueContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyValueContext);
	}
	public EQUAL_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EQUAL_SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tableProperty; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTableProperty) {
			listener.enterTableProperty(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTableProperty) {
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
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public dereferenceDefinition(): DereferenceDefinitionContext | undefined {
		return this.tryGetRuleContext(0, DereferenceDefinitionContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tablePropertyKey; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTablePropertyKey) {
			listener.enterTablePropertyKey(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTablePropertyKey) {
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
	public DIG_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIG_LITERAL, 0); }
	public REAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REAL_LITERAL, 0); }
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tablePropertyValue; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTablePropertyValue) {
			listener.enterTablePropertyValue(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTablePropertyValue) {
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
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AND, 0); }
	public BIT_AND_OP(): TerminalNode[];
	public BIT_AND_OP(i: number): TerminalNode;
	public BIT_AND_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.BIT_AND_OP);
		} else {
			return this.getToken(FlinkSqlParser.BIT_AND_OP, i);
		}
	}
	public KW_OR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OR, 0); }
	public BIT_OR_OP(): TerminalNode[];
	public BIT_OR_OP(i: number): TerminalNode;
	public BIT_OR_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.BIT_OR_OP);
		} else {
			return this.getToken(FlinkSqlParser.BIT_OR_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_logicalOperator; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLogicalOperator) {
			listener.enterLogicalOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLogicalOperator) {
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
	public EQUAL_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EQUAL_SYMBOL, 0); }
	public GREATER_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.GREATER_SYMBOL, 0); }
	public LESS_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LESS_SYMBOL, 0); }
	public EXCLAMATION_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitComparisonOperator) {
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
	public LESS_SYMBOL(): TerminalNode[];
	public LESS_SYMBOL(i: number): TerminalNode;
	public LESS_SYMBOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.LESS_SYMBOL);
		} else {
			return this.getToken(FlinkSqlParser.LESS_SYMBOL, i);
		}
	}
	public GREATER_SYMBOL(): TerminalNode[];
	public GREATER_SYMBOL(i: number): TerminalNode;
	public GREATER_SYMBOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.GREATER_SYMBOL);
		} else {
			return this.getToken(FlinkSqlParser.GREATER_SYMBOL, i);
		}
	}
	public BIT_AND_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_AND_OP, 0); }
	public BIT_XOR_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_XOR_OP, 0); }
	public BIT_OR_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_OR_OP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_bitOperator; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterBitOperator) {
			listener.enterBitOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitBitOperator) {
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
	public ASTERISK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
	public SLASH_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SLASH_SIGN, 0); }
	public PENCENT_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PENCENT_SIGN, 0); }
	public KW_DIV(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DIV, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD_SIGN, 0); }
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public DOUBLE_HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DOUBLE_HYPNEN_SIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_mathOperator; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterMathOperator) {
			listener.enterMathOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitMathOperator) {
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
	public EXCLAMATION_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0); }
	public BIT_NOT_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_NOT_OP, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD_SIGN, 0); }
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_unaryOperator; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUnaryOperator) {
			listener.enterUnaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUnaryOperator) {
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


export class ConstantContext extends ParserRuleContext {
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public decimalLiteral(): DecimalLiteralContext | undefined {
		return this.tryGetRuleContext(0, DecimalLiteralContext);
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext | undefined {
		return this.tryGetRuleContext(0, TimeIntervalExpressionContext);
	}
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	public REAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REAL_LITERAL, 0); }
	public BIT_STRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_STRING, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULL, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_constant; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitConstant) {
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
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitStringLiteral) {
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
	public DIG_LITERAL(): TerminalNode { return this.getToken(FlinkSqlParser.DIG_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_decimalLiteral; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDecimalLiteral) {
			listener.enterDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDecimalLiteral) {
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
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TRUE, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_booleanLiteral; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitBooleanLiteral) {
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
	public KW_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DISTINCT, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_setQuantifier; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSetQuantifier) {
			listener.enterSetQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSetQuantifier) {
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


export class ReservedKeywordsContext extends ParserRuleContext {
	public KW_ABS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ABS, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALL, 0); }
	public ALLOW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ALLOW, 0); }
	public KW_ALTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALTER, 0); }
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AND, 0); }
	public KW_ANY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ANY, 0); }
	public KW_ARE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ARE, 0); }
	public KW_ARRAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ARRAY, 0); }
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	public KW_AT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AT, 0); }
	public KW_AVG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AVG, 0); }
	public KW_BEGIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BEGIN, 0); }
	public KW_BETWEEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BETWEEN, 0); }
	public KW_BIGINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BIGINT, 0); }
	public KW_BINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BINARY, 0); }
	public KW_BIT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BIT, 0); }
	public KW_BLOB(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BLOB, 0); }
	public KW_BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BOOLEAN, 0); }
	public KW_BOTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BOTH, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BY, 0); }
	public KW_CALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CALL, 0); }
	public KW_CALLED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CALLED, 0); }
	public KW_CASCADED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CASCADED, 0); }
	public KW_CASE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CASE, 0); }
	public KW_CAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CAST, 0); }
	public KW_CEIL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CEIL, 0); }
	public KW_CHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CHAR, 0); }
	public KW_CHARACTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CHARACTER, 0); }
	public KW_CHECK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CHECK, 0); }
	public KW_CLOB(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CLOB, 0); }
	public KW_CLOSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CLOSE, 0); }
	public KW_COALESCE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COALESCE, 0); }
	public KW_COLLATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COLLATE, 0); }
	public KW_COLLECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COLLECT, 0); }
	public KW_COLUMN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COLUMN, 0); }
	public KW_COMMIT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COMMIT, 0); }
	public KW_CONNECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONNECT, 0); }
	public KW_CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONSTRAINT, 0); }
	public KW_CONTAINS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONTAINS, 0); }
	public KW_CONVERT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONVERT, 0); }
	public KW_COUNT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COUNT, 0); }
	public KW_CREATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CREATE, 0); }
	public KW_CROSS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CROSS, 0); }
	public KW_CUBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CUBE, 0); }
	public KW_CURRENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CURRENT, 0); }
	public KW_CURSOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CURSOR, 0); }
	public KW_CYCLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CYCLE, 0); }
	public KW_DATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATE, 0); }
	public KW_DATETIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATETIME, 0); }
	public KW_DAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DAY, 0); }
	public KW_DEC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DEC, 0); }
	public KW_DECIMAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DECIMAL, 0); }
	public KW_DECLARE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DECLARE, 0); }
	public KW_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DEFAULT, 0); }
	public KW_DEFINE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DEFINE, 0); }
	public KW_DELETE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DELETE, 0); }
	public KW_DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DESCRIBE, 0); }
	public KW_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DISTINCT, 0); }
	public KW_DOUBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DOUBLE, 0); }
	public KW_DROP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DROP, 0); }
	public KW_EACH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EACH, 0); }
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ELSE, 0); }
	public KW_END(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_END, 0); }
	public KW_EQUALS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EQUALS, 0); }
	public KW_EXCEPT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXCEPT, 0); }
	public KW_EXECUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXECUTE, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXISTS, 0); }
	public KW_EXPLAIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXPLAIN, 0); }
	public KW_EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXTERNAL, 0); }
	public KW_EXTRACT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXTRACT, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FALSE, 0); }
	public KW_FLOAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FLOAT, 0); }
	public KW_FOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FOR, 0); }
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FROM, 0); }
	public KW_FULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FULL, 0); }
	public KW_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FUNCTION, 0); }
	public KW_GLOBAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GLOBAL, 0); }
	public KW_GRANT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GRANT, 0); }
	public KW_GROUP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GROUP, 0); }
	public KW_GROUPING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GROUPING, 0); }
	public KW_GROUPS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GROUPS, 0); }
	public KW_HAVING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HAVING, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HOUR, 0); }
	public KW_IMPORT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IMPORT, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IN, 0); }
	public KW_INCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INCLUDING, 0); }
	public KW_INNER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INNER, 0); }
	public KW_INOUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INOUT, 0); }
	public KW_INSERT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INSERT, 0); }
	public KW_INT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INT, 0); }
	public KW_INTEGER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INTEGER, 0); }
	public KW_INTERSECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INTERSECT, 0); }
	public KW_INTERVAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INTERVAL, 0); }
	public KW_INTO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INTO, 0); }
	public KW_IS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IS, 0); }
	public KW_JOIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JOIN, 0); }
	public KW_LAG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LAG, 0); }
	public KW_LANGUAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LANGUAGE, 0); }
	public KW_LATERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LATERAL, 0); }
	public KW_LEADING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LEADING, 0); }
	public KW_LEFT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LEFT, 0); }
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LIKE, 0); }
	public KW_LIMIT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LIMIT, 0); }
	public KW_LOCAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LOCAL, 0); }
	public KW_MATCH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MATCH, 0); }
	public KW_MATCH_RECOGNIZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MATCH_RECOGNIZE, 0); }
	public KW_MEASURES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MEASURES, 0); }
	public KW_MERGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MERGE, 0); }
	public KW_METADATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_METADATA, 0); }
	public KW_MINUS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MINUS, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MINUTE, 0); }
	public KW_MODIFIES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MODIFIES, 0); }
	public KW_MODULE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MODULE, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MONTH, 0); }
	public KW_MULTISET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MULTISET, 0); }
	public KW_NATURAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NATURAL, 0); }
	public KW_NEXT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NEXT, 0); }
	public KW_NO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NO, 0); }
	public KW_NONE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NONE, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NOT, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULL, 0); }
	public KW_NUMERIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NUMERIC, 0); }
	public KW_OF(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OF, 0); }
	public KW_OFFSET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OFFSET, 0); }
	public KW_ON(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ON, 0); }
	public KW_ONE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ONE, 0); }
	public KW_OR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OR, 0); }
	public KW_ORDER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ORDER, 0); }
	public KW_OUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OUT, 0); }
	public KW_OUTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OUTER, 0); }
	public KW_OVER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OVER, 0); }
	public KW_OVERLAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OVERLAY, 0); }
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PARTITION, 0); }
	public KW_PATTERN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PATTERN, 0); }
	public KW_PER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PER, 0); }
	public KW_PERCENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PERCENT, 0); }
	public KW_PERIOD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PERIOD, 0); }
	public KW_POSITION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_POSITION, 0); }
	public KW_PRIMARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PRIMARY, 0); }
	public KW_RANGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RANGE, 0); }
	public KW_RANK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RANK, 0); }
	public KW_RESET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RESET, 0); }
	public KW_REVOKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_REVOKE, 0); }
	public KW_RIGHT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RIGHT, 0); }
	public KW_RLIKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RLIKE, 0); }
	public KW_ROLLBACK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROLLBACK, 0); }
	public KW_ROLLUP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROLLUP, 0); }
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROW, 0); }
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROWS, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SECOND, 0); }
	public KW_SELECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SELECT, 0); }
	public KW_SET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SET, 0); }
	public KW_SHOW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SHOW, 0); }
	public KW_SKIP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SKIP, 0); }
	public KW_SMALLINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SMALLINT, 0); }
	public KW_START(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_START, 0); }
	public KW_STATIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STATIC, 0); }
	public KW_SUBSTRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SUBSTRING, 0); }
	public KW_SUM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SUM, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SYSTEM, 0); }
	public KW_SYSTEM_TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SYSTEM_TIME, 0); }
	public KW_SYSTEM_USER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SYSTEM_USER, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TABLE, 0); }
	public KW_TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TABLESAMPLE, 0); }
	public KW_THEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_THEN, 0); }
	public KW_TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIME, 0); }
	public KW_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMESTAMP, 0); }
	public KW_TINYINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TINYINT, 0); }
	public KW_TO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TO, 0); }
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TRUE, 0); }
	public KW_TRUNCATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TRUNCATE, 0); }
	public KW_UNION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNION, 0); }
	public KW_UNIQUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNIQUE, 0); }
	public KW_UNKNOWN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNKNOWN, 0); }
	public KW_UNNEST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNNEST, 0); }
	public KW_UPPER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UPPER, 0); }
	public KW_UPSERT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UPSERT, 0); }
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_USER, 0); }
	public KW_USING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_USING, 0); }
	public KW_VALUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VALUE, 0); }
	public KW_VALUES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VALUES, 0); }
	public KW_VARBINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VARBINARY, 0); }
	public KW_VARCHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VARCHAR, 0); }
	public KW_WHEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WHEN, 0); }
	public KW_WHERE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WHERE, 0); }
	public KW_WINDOW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WINDOW, 0); }
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WITH, 0); }
	public KW_WITHIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WITHIN, 0); }
	public KW_WITHOUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WITHOUT, 0); }
	public KW_YEAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_YEAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_reservedKeywords; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterReservedKeywords) {
			listener.enterReservedKeywords(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitReservedKeywords) {
			listener.exitReservedKeywords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitReservedKeywords) {
			return visitor.visitReservedKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonReservedKeywordsContext extends ParserRuleContext {
	public KW_ADD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ADD, 0); }
	public KW_ADMIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ADMIN, 0); }
	public KW_AFTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AFTER, 0); }
	public KW_ANALYZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ANALYZE, 0); }
	public KW_ASC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ASC, 0); }
	public KW_BEFORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BEFORE, 0); }
	public KW_BYTES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BYTES, 0); }
	public KW_CASCADE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CASCADE, 0); }
	public KW_CATALOG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CATALOG, 0); }
	public KW_CATALOGS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CATALOGS, 0); }
	public KW_CENTURY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CENTURY, 0); }
	public KW_CHAIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CHAIN, 0); }
	public KW_CHANGELOG_MODE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CHANGELOG_MODE, 0); }
	public KW_CHARACTERS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CHARACTERS, 0); }
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COMMENT, 0); }
	public KW_COMPACT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COMPACT, 0); }
	public KW_COLUMNS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COLUMNS, 0); }
	public KW_CONSTRAINTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONSTRAINTS, 0); }
	public KW_CONSTRUCTOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONSTRUCTOR, 0); }
	public KW_CUMULATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CUMULATE, 0); }
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATA, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATABASE, 0); }
	public KW_DATABASES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATABASES, 0); }
	public KW_DAYS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DAYS, 0); }
	public KW_DECADE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DECADE, 0); }
	public KW_DEFINED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DEFINED, 0); }
	public KW_DESC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DESC, 0); }
	public KW_DESCRIPTOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DESCRIPTOR, 0); }
	public KW_DIV(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DIV, 0); }
	public KW_ENCODING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ENCODING, 0); }
	public KW_ENFORCED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ENFORCED, 0); }
	public KW_ENGINE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ENGINE, 0); }
	public KW_ERROR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ERROR, 0); }
	public KW_ESTIMATED_COST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ESTIMATED_COST, 0); }
	public KW_EXCEPTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXCEPTION, 0); }
	public KW_EXCLUDE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXCLUDE, 0); }
	public KW_EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXCLUDING, 0); }
	public KW_EXTENDED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXTENDED, 0); }
	public KW_FILE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FILE, 0); }
	public KW_FINAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FINAL, 0); }
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FIRST, 0); }
	public KW_FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FOLLOWING, 0); }
	public KW_FORMAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FORMAT, 0); }
	public KW_FORTRAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FORTRAN, 0); }
	public KW_FOUND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FOUND, 0); }
	public KW_FRAC_SECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FRAC_SECOND, 0); }
	public KW_FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FUNCTIONS, 0); }
	public KW_GENERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GENERAL, 0); }
	public KW_GENERATED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GENERATED, 0); }
	public KW_GO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GO, 0); }
	public KW_GOTO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GOTO, 0); }
	public KW_GRANTED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GRANTED, 0); }
	public KW_HOP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HOP, 0); }
	public KW_HOURS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HOURS, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IF, 0); }
	public KW_IGNORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IGNORE, 0); }
	public KW_INCREMENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INCREMENT, 0); }
	public KW_INPUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INPUT, 0); }
	public KW_INVOKER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INVOKER, 0); }
	public KW_JAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JAR, 0); }
	public KW_JARS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JARS, 0); }
	public KW_JAVA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JAVA, 0); }
	public KW_JSON(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JSON, 0); }
	public KW_JSON_EXECUTION_PLAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JSON_EXECUTION_PLAN, 0); }
	public KW_KEY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_KEY, 0); }
	public KW_KEY_MEMBER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_KEY_MEMBER, 0); }
	public KW_KEY_TYPE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_KEY_TYPE, 0); }
	public KW_LABEL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LABEL, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LAST, 0); }
	public KW_LENGTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LENGTH, 0); }
	public KW_LEVEL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LEVEL, 0); }
	public KW_LOAD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LOAD, 0); }
	public KW_MAP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MAP, 0); }
	public KW_MICROSECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MICROSECOND, 0); }
	public KW_MILLENNIUM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MILLENNIUM, 0); }
	public KW_MILLISECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MILLISECOND, 0); }
	public KW_MINUTES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MINUTES, 0); }
	public KW_MINVALUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MINVALUE, 0); }
	public KW_MODIFY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MODIFY, 0); }
	public KW_MODULES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MODULES, 0); }
	public KW_MONTHS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MONTHS, 0); }
	public KW_NANOSECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NANOSECOND, 0); }
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULLS, 0); }
	public KW_NUMBER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NUMBER, 0); }
	public KW_OPTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OPTION, 0); }
	public KW_OPTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OPTIONS, 0); }
	public KW_ORDERING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ORDERING, 0); }
	public KW_OUTPUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OUTPUT, 0); }
	public KW_OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OVERWRITE, 0); }
	public KW_OVERWRITING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OVERWRITING, 0); }
	public KW_PARTITIONED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PARTITIONED, 0); }
	public KW_PARTITIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PARTITIONS, 0); }
	public KW_PASSING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PASSING, 0); }
	public KW_PAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PAST, 0); }
	public KW_PATH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PATH, 0); }
	public KW_PLACING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PLACING, 0); }
	public KW_PLAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PLAN, 0); }
	public KW_PRECEDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PRECEDING, 0); }
	public KW_PRESERVE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PRESERVE, 0); }
	public KW_PRIOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PRIOR, 0); }
	public KW_PRIVILEGES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PRIVILEGES, 0); }
	public KW_PUBLIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PUBLIC, 0); }
	public KW_PYTHON(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON, 0); }
	public KW_PYTHON_FILES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_FILES, 0); }
	public KW_PYTHON_REQUIREMENTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_REQUIREMENTS, 0); }
	public KW_PYTHON_DEPENDENCIES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_DEPENDENCIES, 0); }
	public KW_PYTHON_JAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_JAR, 0); }
	public KW_PYTHON_ARCHIVES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_ARCHIVES, 0); }
	public KW_PYTHON_PARAMETER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_PARAMETER, 0); }
	public KW_QUARTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_QUARTER, 0); }
	public KW_RAW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RAW, 0); }
	public KW_READ(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_READ, 0); }
	public KW_RELATIVE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RELATIVE, 0); }
	public KW_REMOVE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_REMOVE, 0); }
	public KW_RENAME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RENAME, 0); }
	public KW_REPLACE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_REPLACE, 0); }
	public KW_RESPECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RESPECT, 0); }
	public KW_RESTART(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RESTART, 0); }
	public KW_RESTRICT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RESTRICT, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROLE, 0); }
	public KW_ROW_COUNT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROW_COUNT, 0); }
	public KW_SCALA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SCALA, 0); }
	public KW_SCALAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SCALAR, 0); }
	public KW_SCALE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SCALE, 0); }
	public KW_SCHEMA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SCHEMA, 0); }
	public KW_SECONDS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SECONDS, 0); }
	public KW_SECTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SECTION, 0); }
	public KW_SECURITY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SECURITY, 0); }
	public KW_SELF(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SELF, 0); }
	public KW_SERVER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SERVER, 0); }
	public KW_SERVER_NAME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SERVER_NAME, 0); }
	public KW_SESSION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SESSION, 0); }
	public KW_SETS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SETS, 0); }
	public KW_SIMPLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SIMPLE, 0); }
	public KW_SIZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SIZE, 0); }
	public KW_SLIDE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SLIDE, 0); }
	public KW_SOURCE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SOURCE, 0); }
	public KW_SPACE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SPACE, 0); }
	public KW_STATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STATE, 0); }
	public KW_STATEMENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STATEMENT, 0); }
	public KW_STEP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STEP, 0); }
	public KW_STRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STRING, 0); }
	public KW_STRUCTURE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STRUCTURE, 0); }
	public KW_STYLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STYLE, 0); }
	public KW_TABLES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TABLES, 0); }
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TEMPORARY, 0); }
	public KW_TIMECOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMECOL, 0); }
	public KW_TIMESTAMP_LTZ(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMESTAMP_LTZ, 0); }
	public KW_TIMESTAMPADD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMESTAMPADD, 0); }
	public KW_TIMESTAMPDIFF(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMESTAMPDIFF, 0); }
	public KW_TRANSFORM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TRANSFORM, 0); }
	public KW_TUMBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TUMBLE, 0); }
	public KW_TYPE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TYPE, 0); }
	public KW_UNDER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNDER, 0); }
	public KW_UNLOAD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNLOAD, 0); }
	public KW_USAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_USAGE, 0); }
	public KW_USE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_USE, 0); }
	public KW_UTF16(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UTF16, 0); }
	public KW_UTF32(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UTF32, 0); }
	public KW_UTF8(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UTF8, 0); }
	public KW_VERSION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VERSION, 0); }
	public KW_VIEW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VIEW, 0); }
	public KW_VIEWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VIEWS, 0); }
	public KW_VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VIRTUAL, 0); }
	public KW_WATERMARK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WATERMARK, 0); }
	public KW_WATERMARKS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WATERMARKS, 0); }
	public KW_WEEK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WEEK, 0); }
	public KW_WORK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WORK, 0); }
	public KW_WRAPPER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WRAPPER, 0); }
	public KW_YEARS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_YEARS, 0); }
	public KW_ZONE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ZONE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_nonReservedKeywords; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterNonReservedKeywords) {
			listener.enterNonReservedKeywords(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitNonReservedKeywords) {
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


