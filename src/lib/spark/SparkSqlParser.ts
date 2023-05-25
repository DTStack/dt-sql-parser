// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/spark/SparkSql.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { SparkSqlListener } from "./SparkSqlListener";
import { SparkSqlVisitor } from "./SparkSqlVisitor";


export class SparkSqlParser extends Parser {
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

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "','", "'.'", "'/*+'", "'*/'", "'->'", "'['", 
		"']'", "':'", "'ADD'", "'AFTER'", "'ALL'", "'ALTER'", "'ANALYZE'", "'AND'", 
		"'ANTI'", "'ANY'", "'ARCHIVE'", "'ARRAY'", "'AS'", "'ASC'", "'AT'", "'AUTHORIZATION'", 
		"'BETWEEN'", "'BOTH'", "'BUCKET'", "'BUCKETS'", "'BY'", "'CACHE'", "'CASCADE'", 
		"'CASE'", "'CAST'", "'CHANGE'", "'CHECK'", "'CLEAR'", "'CLUSTER'", "'CLUSTERED'", 
		"'CODEGEN'", "'COLLATE'", "'COLLECTION'", "'COLUMN'", "'COLUMNS'", "'COMMENT'", 
		"'COMMIT'", "'COMPACT'", "'COMPACTIONS'", "'COMPUTE'", "'CONCATENATE'", 
		"'CONSTRAINT'", "'COST'", "'CREATE'", "'CROSS'", "'CUBE'", "'CURRENT'", 
		"'CURRENT_DATE'", "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", "'CURRENT_USER'", 
		"'DATA'", "'DATABASE'", undefined, "'DBPROPERTIES'", "'DEFINED'", "'DELETE'", 
		"'DELIMITED'", "'DESC'", "'DESCRIBE'", "'DFS'", "'DIRECTORIES'", "'DIRECTORY'", 
		"'DISTINCT'", "'DISTRIBUTE'", "'DIV'", "'DROP'", "'ELSE'", "'END'", "'ESCAPE'", 
		"'ESCAPED'", "'EXCEPT'", "'EXCHANGE'", "'EXISTS'", "'EXPLAIN'", "'EXPORT'", 
		"'EXTENDED'", "'EXTERNAL'", "'EXTRACT'", "'FALSE'", "'FETCH'", "'FIELDS'", 
		"'FILTER'", "'FILEFORMAT'", "'FIRST'", "'FOLLOWING'", "'FOR'", "'FOREIGN'", 
		"'FORMAT'", "'FORMATTED'", "'FROM'", "'FULL'", "'FUNCTION'", "'FUNCTIONS'", 
		"'GLOBAL'", "'GRANT'", "'GROUP'", "'GROUPING'", "'HAVING'", "'IF'", "'IGNORE'", 
		"'IMPORT'", "'IN'", "'INDEX'", "'INDEXES'", "'INNER'", "'INPATH'", "'INPUTFORMAT'", 
		"'INSERT'", "'INTERSECT'", "'INTERVAL'", "'INTO'", "'IS'", "'ITEMS'", 
		"'JOIN'", "'KEYS'", "'LAST'", "'LATERAL'", "'LAZY'", "'LEADING'", "'LEFT'", 
		"'LIKE'", "'LIMIT'", "'LINES'", "'LIST'", "'LOAD'", "'LOCAL'", "'LOCATION'", 
		"'LOCK'", "'LOCKS'", "'LOGICAL'", "'MACRO'", "'MAP'", "'MATCHED'", "'MERGE'", 
		"'MSCK'", "'NAMESPACE'", "'NAMESPACES'", "'NATURAL'", "'NO'", undefined, 
		"'NULL'", "'NULLS'", "'OF'", "'ON'", "'ONLY'", "'OPTION'", "'OPTIONS'", 
		"'OR'", "'ORDER'", "'OUT'", "'OUTER'", "'OUTPUTFORMAT'", "'OVER'", "'OVERLAPS'", 
		"'OVERLAY'", "'OVERWRITE'", "'PARTITION'", "'PARTITIONED'", "'PARTITIONS'", 
		"'PERCENT'", "'PIVOT'", "'PLACING'", "'POSITION'", "'PRECEDING'", "'PRIMARY'", 
		"'PRINCIPALS'", "'PROPERTIES'", "'PURGE'", "'QUERY'", "'RANGE'", "'RECORDREADER'", 
		"'RECORDWRITER'", "'RECOVER'", "'REDUCE'", "'REFERENCES'", "'REFRESH'", 
		"'RENAME'", "'REPAIR'", "'REPLACE'", "'RESET'", "'RESTRICT'", "'REVOKE'", 
		"'RIGHT'", undefined, "'ROLE'", "'ROLES'", "'ROLLBACK'", "'ROLLUP'", "'ROW'", 
		"'ROWS'", "'SCHEMA'", "'SELECT'", "'SEMI'", "'SEPARATED'", "'SERDE'", 
		"'SERDEPROPERTIES'", "'SESSION_USER'", "'SET'", "'MINUS'", "'SETS'", "'SHOW'", 
		"'SKEWED'", "'SOME'", "'SORT'", "'SORTED'", "'START'", "'STATISTICS'", 
		"'STORED'", "'STRATIFY'", "'STRUCT'", "'SUBSTR'", "'SUBSTRING'", "'TABLE'", 
		"'TABLES'", "'TABLESAMPLE'", "'TBLPROPERTIES'", undefined, "'TERMINATED'", 
		"'THEN'", "'TIME'", "'TO'", "'TOUCH'", "'TRAILING'", "'TRANSACTION'", 
		"'TRANSACTIONS'", "'TRANSFORM'", "'TRIM'", "'TRUE'", "'TRUNCATE'", "'TYPE'", 
		"'UNARCHIVE'", "'UNBOUNDED'", "'UNCACHE'", "'UNION'", "'UNIQUE'", "'UNKNOWN'", 
		"'UNLOCK'", "'UNSET'", "'UPDATE'", "'USE'", "'USER'", "'USING'", "'VALUES'", 
		"'VIEW'", "'VIEWS'", "'WHEN'", "'WHERE'", "'WINDOW'", "'WITH'", "'ZONE'", 
		undefined, "'<=>'", "'<>'", "'!='", "'<'", undefined, "'>'", undefined, 
		"'+'", "'-'", "'*'", "'/'", "'%'", "'~'", "'&'", "'|'", "'||'", "'^'", 
		"';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "ADD", "AFTER", "ALL", "ALTER", 
		"ANALYZE", "AND", "ANTI", "ANY", "ARCHIVE", "ARRAY", "AS", "ASC", "AT", 
		"AUTHORIZATION", "BETWEEN", "BOTH", "BUCKET", "BUCKETS", "BY", "CACHE", 
		"CASCADE", "CASE", "CAST", "CHANGE", "CHECK", "CLEAR", "CLUSTER", "CLUSTERED", 
		"CODEGEN", "COLLATE", "COLLECTION", "COLUMN", "COLUMNS", "COMMENT", "COMMIT", 
		"COMPACT", "COMPACTIONS", "COMPUTE", "CONCATENATE", "CONSTRAINT", "COST", 
		"CREATE", "CROSS", "CUBE", "CURRENT", "CURRENT_DATE", "CURRENT_TIME", 
		"CURRENT_TIMESTAMP", "CURRENT_USER", "DATA", "DATABASE", "DATABASES", 
		"DBPROPERTIES", "DEFINED", "DELETE", "DELIMITED", "DESC", "DESCRIBE", 
		"DFS", "DIRECTORIES", "DIRECTORY", "DISTINCT", "DISTRIBUTE", "DIV", "DROP", 
		"ELSE", "END", "ESCAPE", "ESCAPED", "EXCEPT", "EXCHANGE", "EXISTS", "EXPLAIN", 
		"EXPORT", "EXTENDED", "EXTERNAL", "EXTRACT", "FALSE", "FETCH", "FIELDS", 
		"FILTER", "FILEFORMAT", "FIRST", "FOLLOWING", "FOR", "FOREIGN", "FORMAT", 
		"FORMATTED", "FROM", "FULL", "FUNCTION", "FUNCTIONS", "GLOBAL", "GRANT", 
		"GROUP", "GROUPING", "HAVING", "IF", "IGNORE", "IMPORT", "IN", "INDEX", 
		"INDEXES", "INNER", "INPATH", "INPUTFORMAT", "INSERT", "INTERSECT", "INTERVAL", 
		"INTO", "IS", "ITEMS", "JOIN", "KEYS", "LAST", "LATERAL", "LAZY", "LEADING", 
		"LEFT", "LIKE", "LIMIT", "LINES", "LIST", "LOAD", "LOCAL", "LOCATION", 
		"LOCK", "LOCKS", "LOGICAL", "MACRO", "MAP", "MATCHED", "MERGE", "MSCK", 
		"NAMESPACE", "NAMESPACES", "NATURAL", "NO", "NOT", "NULL", "NULLS", "OF", 
		"ON", "ONLY", "OPTION", "OPTIONS", "OR", "ORDER", "OUT", "OUTER", "OUTPUTFORMAT", 
		"OVER", "OVERLAPS", "OVERLAY", "OVERWRITE", "PARTITION", "PARTITIONED", 
		"PARTITIONS", "PERCENTLIT", "PIVOT", "PLACING", "POSITION", "PRECEDING", 
		"PRIMARY", "PRINCIPALS", "PROPERTIES", "PURGE", "QUERY", "RANGE", "RECORDREADER", 
		"RECORDWRITER", "RECOVER", "REDUCE", "REFERENCES", "REFRESH", "RENAME", 
		"REPAIR", "REPLACE", "RESET", "RESTRICT", "REVOKE", "RIGHT", "RLIKE", 
		"ROLE", "ROLES", "ROLLBACK", "ROLLUP", "ROW", "ROWS", "SCHEMA", "SELECT", 
		"SEMI", "SEPARATED", "SERDE", "SERDEPROPERTIES", "SESSION_USER", "SET", 
		"SETMINUS", "SETS", "SHOW", "SKEWED", "SOME", "SORT", "SORTED", "START", 
		"STATISTICS", "STORED", "STRATIFY", "STRUCT", "SUBSTR", "SUBSTRING", "TABLE", 
		"TABLES", "TABLESAMPLE", "TBLPROPERTIES", "TEMPORARY", "TERMINATED", "THEN", 
		"TIME", "TO", "TOUCH", "TRAILING", "TRANSACTION", "TRANSACTIONS", "TRANSFORM", 
		"TRIM", "TRUE", "TRUNCATE", "TYPE", "UNARCHIVE", "UNBOUNDED", "UNCACHE", 
		"UNION", "UNIQUE", "UNKNOWN", "UNLOCK", "UNSET", "UPDATE", "USE", "USER", 
		"USING", "VALUES", "VIEW", "VIEWS", "WHEN", "WHERE", "WINDOW", "WITH", 
		"ZONE", "EQ", "NSEQ", "NEQ", "NEQJ", "LT", "LTE", "GT", "GTE", "PLUS", 
		"MINUS", "ASTERISK", "SLASH", "PERCENT", "TILDE", "AMPERSAND", "PIPE", 
		"CONCAT_PIPE", "HAT", "SEMICOLON", "STRING", "BIGINT_LITERAL", "SMALLINT_LITERAL", 
		"TINYINT_LITERAL", "INTEGER_VALUE", "EXPONENT_VALUE", "DECIMAL_VALUE", 
		"FLOAT_LITERAL", "DOUBLE_LITERAL", "BIGDECIMAL_LITERAL", "IDENTIFIER", 
		"BACKQUOTED_IDENTIFIER", "CUSTOM_VARS", "SIMPLE_COMMENT", "BRACKETED_COMMENT", 
		"WS", "UNRECOGNIZED",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SparkSqlParser._LITERAL_NAMES, SparkSqlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SparkSqlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SparkSql.g4"; }

	// @Override
	public get ruleNames(): string[] { return SparkSqlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SparkSqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}


	/**
	* When false, INTERSECT is given the greater precedence over the other set
	* operations (UNION, EXCEPT and MINUS) as per the SQL standard.
	*/
	public legacy_setops_precedence_enbled = false;
	/**
	* When false, a literal with an exponent would be converted into
	* double type rather than decimal type.
	*/
	public legacy_exponent_literal_as_decimal_enabled = false;
	/**
	* When true, the behavior of keywords follows ANSI SQL standard.
	*/
	public SQL_standard_keyword_behavior = false;

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SparkSqlParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SparkSqlParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.singleStatement();
			this.state = 275;
			this.match(SparkSqlParser.EOF);
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
	public singleStatement(): SingleStatementContext {
		let _localctx: SingleStatementContext = new SingleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SparkSqlParser.RULE_singleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SparkSqlParser.T__0) | (1 << SparkSqlParser.ADD) | (1 << SparkSqlParser.ALTER) | (1 << SparkSqlParser.ANALYZE) | (1 << SparkSqlParser.CACHE))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SparkSqlParser.CLEAR - 36)) | (1 << (SparkSqlParser.COMMENT - 36)) | (1 << (SparkSqlParser.COMMIT - 36)) | (1 << (SparkSqlParser.CREATE - 36)) | (1 << (SparkSqlParser.DELETE - 36)) | (1 << (SparkSqlParser.DESC - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SparkSqlParser.DESCRIBE - 68)) | (1 << (SparkSqlParser.DFS - 68)) | (1 << (SparkSqlParser.DROP - 68)) | (1 << (SparkSqlParser.EXPLAIN - 68)) | (1 << (SparkSqlParser.EXPORT - 68)) | (1 << (SparkSqlParser.FROM - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SparkSqlParser.GRANT - 104)) | (1 << (SparkSqlParser.IMPORT - 104)) | (1 << (SparkSqlParser.INSERT - 104)) | (1 << (SparkSqlParser.LIST - 104)) | (1 << (SparkSqlParser.LOAD - 104)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SparkSqlParser.LOCK - 137)) | (1 << (SparkSqlParser.MAP - 137)) | (1 << (SparkSqlParser.MERGE - 137)) | (1 << (SparkSqlParser.MSCK - 137)))) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & ((1 << (SparkSqlParser.REDUCE - 183)) | (1 << (SparkSqlParser.REFRESH - 183)) | (1 << (SparkSqlParser.REPLACE - 183)) | (1 << (SparkSqlParser.RESET - 183)) | (1 << (SparkSqlParser.REVOKE - 183)) | (1 << (SparkSqlParser.ROLLBACK - 183)) | (1 << (SparkSqlParser.SELECT - 183)) | (1 << (SparkSqlParser.SET - 183)) | (1 << (SparkSqlParser.SHOW - 183)))) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & ((1 << (SparkSqlParser.START - 215)) | (1 << (SparkSqlParser.TABLE - 215)) | (1 << (SparkSqlParser.TRUNCATE - 215)) | (1 << (SparkSqlParser.UNCACHE - 215)) | (1 << (SparkSqlParser.UNLOCK - 215)))) !== 0) || ((((_la - 248)) & ~0x1F) === 0 && ((1 << (_la - 248)) & ((1 << (SparkSqlParser.UPDATE - 248)) | (1 << (SparkSqlParser.USE - 248)) | (1 << (SparkSqlParser.VALUES - 248)) | (1 << (SparkSqlParser.WITH - 248)) | (1 << (SparkSqlParser.SEMICOLON - 248)))) !== 0)) {
				{
				this.state = 282;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SparkSqlParser.T__0:
				case SparkSqlParser.ADD:
				case SparkSqlParser.ALTER:
				case SparkSqlParser.ANALYZE:
				case SparkSqlParser.CACHE:
				case SparkSqlParser.CLEAR:
				case SparkSqlParser.COMMENT:
				case SparkSqlParser.COMMIT:
				case SparkSqlParser.CREATE:
				case SparkSqlParser.DELETE:
				case SparkSqlParser.DESC:
				case SparkSqlParser.DESCRIBE:
				case SparkSqlParser.DFS:
				case SparkSqlParser.DROP:
				case SparkSqlParser.EXPLAIN:
				case SparkSqlParser.EXPORT:
				case SparkSqlParser.FROM:
				case SparkSqlParser.GRANT:
				case SparkSqlParser.IMPORT:
				case SparkSqlParser.INSERT:
				case SparkSqlParser.LIST:
				case SparkSqlParser.LOAD:
				case SparkSqlParser.LOCK:
				case SparkSqlParser.MAP:
				case SparkSqlParser.MERGE:
				case SparkSqlParser.MSCK:
				case SparkSqlParser.REDUCE:
				case SparkSqlParser.REFRESH:
				case SparkSqlParser.REPLACE:
				case SparkSqlParser.RESET:
				case SparkSqlParser.REVOKE:
				case SparkSqlParser.ROLLBACK:
				case SparkSqlParser.SELECT:
				case SparkSqlParser.SET:
				case SparkSqlParser.SHOW:
				case SparkSqlParser.START:
				case SparkSqlParser.TABLE:
				case SparkSqlParser.TRUNCATE:
				case SparkSqlParser.UNCACHE:
				case SparkSqlParser.UNLOCK:
				case SparkSqlParser.UPDATE:
				case SparkSqlParser.USE:
				case SparkSqlParser.VALUES:
				case SparkSqlParser.WITH:
					{
					this.state = 277;
					this.statement();
					this.state = 279;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 278;
						this.match(SparkSqlParser.SEMICOLON);
						}
						break;
					}
					}
					break;
				case SparkSqlParser.SEMICOLON:
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
		this.enterRule(_localctx, 4, SparkSqlParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.match(SparkSqlParser.SEMICOLON);
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
	public singleExpression(): SingleExpressionContext {
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SparkSqlParser.RULE_singleExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.namedExpression();
			this.state = 290;
			this.match(SparkSqlParser.EOF);
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
	public singleTableIdentifier(): SingleTableIdentifierContext {
		let _localctx: SingleTableIdentifierContext = new SingleTableIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SparkSqlParser.RULE_singleTableIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 292;
			this.tableIdentifier();
			this.state = 293;
			this.match(SparkSqlParser.EOF);
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
	public singleMultipartIdentifier(): SingleMultipartIdentifierContext {
		let _localctx: SingleMultipartIdentifierContext = new SingleMultipartIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SparkSqlParser.RULE_singleMultipartIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.multipartIdentifier();
			this.state = 296;
			this.match(SparkSqlParser.EOF);
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
	public singleDataType(): SingleDataTypeContext {
		let _localctx: SingleDataTypeContext = new SingleDataTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SparkSqlParser.RULE_singleDataType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this.dataType();
			this.state = 299;
			this.match(SparkSqlParser.EOF);
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
	public singleTableSchema(): SingleTableSchemaContext {
		let _localctx: SingleTableSchemaContext = new SingleTableSchemaContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SparkSqlParser.RULE_singleTableSchema);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.colTypeList();
			this.state = 302;
			this.match(SparkSqlParser.EOF);
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
		this.enterRule(_localctx, 16, SparkSqlParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1048;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				_localctx = new StatementDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 304;
				this.query();
				}
				break;

			case 2:
				_localctx = new DmlStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.WITH) {
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
				_localctx = new UseContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 309;
				this.match(SparkSqlParser.USE);
				this.state = 311;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
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
				_localctx = new CreateNamespaceContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 314;
				this.match(SparkSqlParser.CREATE);
				this.state = 315;
				this.namespace();
				this.state = 319;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
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
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 327;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case SparkSqlParser.COMMENT:
							{
							this.state = 322;
							this.commentSpec();
							}
							break;
						case SparkSqlParser.LOCATION:
							{
							this.state = 323;
							this.locationSpec();
							}
							break;
						case SparkSqlParser.WITH:
							{
							{
							this.state = 324;
							this.match(SparkSqlParser.WITH);
							this.state = 325;
							_la = this._input.LA(1);
							if (!(_la === SparkSqlParser.DBPROPERTIES || _la === SparkSqlParser.PROPERTIES)) {
							this._errHandler.recoverInline(this);
							} else {
								if (this._input.LA(1) === Token.EOF) {
									this.matchedEOF = true;
								}

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
					_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				}
				}
				break;

			case 5:
				_localctx = new SetNamespacePropertiesContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
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
				if (!(_la === SparkSqlParser.DBPROPERTIES || _la === SparkSqlParser.PROPERTIES)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 337;
				this.tablePropertyList();
				}
				break;

			case 6:
				_localctx = new SetNamespaceLocationContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
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
				_localctx = new DropNamespaceContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 345;
				this.match(SparkSqlParser.DROP);
				this.state = 346;
				this.namespace();
				this.state = 349;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
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
				if (_la === SparkSqlParser.CASCADE || _la === SparkSqlParser.RESTRICT) {
					{
					this.state = 352;
					_la = this._input.LA(1);
					if (!(_la === SparkSqlParser.CASCADE || _la === SparkSqlParser.RESTRICT)) {
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
				break;

			case 8:
				_localctx = new ShowNamespacesContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 355;
				this.match(SparkSqlParser.SHOW);
				this.state = 356;
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.DATABASES || _la === SparkSqlParser.NAMESPACES)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 359;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 357;
					_la = this._input.LA(1);
					if (!(_la === SparkSqlParser.FROM || _la === SparkSqlParser.IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

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
				if (_la === SparkSqlParser.LIKE || _la === SparkSqlParser.STRING) {
					{
					this.state = 362;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SparkSqlParser.LIKE) {
						{
						this.state = 361;
						this.match(SparkSqlParser.LIKE);
						}
					}

					this.state = 364;
					(_localctx as ShowNamespacesContext)._pattern = this.match(SparkSqlParser.STRING);
					}
				}

				}
				break;

			case 9:
				_localctx = new CreateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 367;
				this.createTableHeader();
				this.state = 372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.T__0) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 377;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SparkSqlParser.AS) {
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
				_localctx = new CreateHiveTableContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 382;
				this.createTableHeader();
				this.state = 387;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 383;
					this.match(SparkSqlParser.T__0);
					this.state = 384;
					(_localctx as CreateHiveTableContext)._columns = this.colTypeList();
					this.state = 385;
					this.match(SparkSqlParser.T__1);
					}
					break;
				}
				this.state = 410;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 408;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case SparkSqlParser.COMMENT:
							{
							this.state = 389;
							this.commentSpec();
							}
							break;
						case SparkSqlParser.PARTITIONED:
							{
							this.state = 399;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
							case 1:
								{
								this.state = 390;
								this.match(SparkSqlParser.PARTITIONED);
								this.state = 391;
								this.match(SparkSqlParser.BY);
								this.state = 392;
								this.match(SparkSqlParser.T__0);
								this.state = 393;
								(_localctx as CreateHiveTableContext)._partitionColumns = this.colTypeList();
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
								(_localctx as CreateHiveTableContext)._partitionColumnNames = this.identifierList();
								}
								break;
							}
							}
							break;
						case SparkSqlParser.CLUSTERED:
							{
							this.state = 401;
							this.bucketSpec();
							}
							break;
						case SparkSqlParser.SKEWED:
							{
							this.state = 402;
							this.skewSpec();
							}
							break;
						case SparkSqlParser.ROW:
							{
							this.state = 403;
							this.rowFormat();
							}
							break;
						case SparkSqlParser.STORED:
							{
							this.state = 404;
							this.createFileFormat();
							}
							break;
						case SparkSqlParser.LOCATION:
							{
							this.state = 405;
							this.locationSpec();
							}
							break;
						case SparkSqlParser.TBLPROPERTIES:
							{
							{
							this.state = 406;
							this.match(SparkSqlParser.TBLPROPERTIES);
							this.state = 407;
							(_localctx as CreateHiveTableContext)._tableProps = this.tablePropertyList();
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
					_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				}
				this.state = 417;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 414;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SparkSqlParser.AS) {
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
				_localctx = new CreateTableLikeContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 419;
				this.match(SparkSqlParser.CREATE);
				this.state = 420;
				this.match(SparkSqlParser.TABLE);
				this.state = 424;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
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
				(_localctx as CreateTableLikeContext)._target = this.tableIdentifier();
				this.state = 427;
				this.match(SparkSqlParser.LIKE);
				this.state = 428;
				(_localctx as CreateTableLikeContext)._source = this.tableIdentifier();
				this.state = 437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SparkSqlParser.LOCATION || ((((_la - 198)) & ~0x1F) === 0 && ((1 << (_la - 198)) & ((1 << (SparkSqlParser.ROW - 198)) | (1 << (SparkSqlParser.STORED - 198)) | (1 << (SparkSqlParser.TBLPROPERTIES - 198)))) !== 0) || _la === SparkSqlParser.USING) {
					{
					this.state = 435;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SparkSqlParser.USING:
						{
						this.state = 429;
						this.tableProvider();
						}
						break;
					case SparkSqlParser.ROW:
						{
						this.state = 430;
						this.rowFormat();
						}
						break;
					case SparkSqlParser.STORED:
						{
						this.state = 431;
						this.createFileFormat();
						}
						break;
					case SparkSqlParser.LOCATION:
						{
						this.state = 432;
						this.locationSpec();
						}
						break;
					case SparkSqlParser.TBLPROPERTIES:
						{
						{
						this.state = 433;
						this.match(SparkSqlParser.TBLPROPERTIES);
						this.state = 434;
						(_localctx as CreateTableLikeContext)._tableProps = this.tablePropertyList();
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
				_localctx = new ReplaceTableContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 440;
				this.replaceTableHeader();
				this.state = 445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.T__0) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 450;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SparkSqlParser.AS) {
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
				_localctx = new AnalyzeContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
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
				if (_la === SparkSqlParser.PARTITION) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
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
				_localctx = new AddTableColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
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
				if (!(_la === SparkSqlParser.COLUMN || _la === SparkSqlParser.COLUMNS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 477;
				(_localctx as AddTableColumnsContext)._columns = this.qualifiedColTypeWithPositionList();
				}
				break;

			case 15:
				_localctx = new AddTableColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
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
				if (!(_la === SparkSqlParser.COLUMN || _la === SparkSqlParser.COLUMNS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 484;
				this.match(SparkSqlParser.T__0);
				this.state = 485;
				(_localctx as AddTableColumnsContext)._columns = this.qualifiedColTypeWithPositionList();
				this.state = 486;
				this.match(SparkSqlParser.T__1);
				}
				break;

			case 16:
				_localctx = new RenameTableColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 488;
				this.match(SparkSqlParser.ALTER);
				this.state = 489;
				this.match(SparkSqlParser.TABLE);
				this.state = 490;
				(_localctx as RenameTableColumnContext)._table = this.multipartIdentifier();
				this.state = 491;
				this.match(SparkSqlParser.RENAME);
				this.state = 492;
				this.match(SparkSqlParser.COLUMN);
				this.state = 493;
				(_localctx as RenameTableColumnContext)._from = this.multipartIdentifier();
				this.state = 494;
				this.match(SparkSqlParser.TO);
				this.state = 495;
				(_localctx as RenameTableColumnContext)._to = this.errorCapturingIdentifier();
				}
				break;

			case 17:
				_localctx = new DropTableColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
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
				if (!(_la === SparkSqlParser.COLUMN || _la === SparkSqlParser.COLUMNS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 502;
				this.match(SparkSqlParser.T__0);
				this.state = 503;
				(_localctx as DropTableColumnsContext)._columns = this.multipartIdentifierList();
				this.state = 504;
				this.match(SparkSqlParser.T__1);
				}
				break;

			case 18:
				_localctx = new DropTableColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
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
				if (!(_la === SparkSqlParser.COLUMN || _la === SparkSqlParser.COLUMNS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 511;
				(_localctx as DropTableColumnsContext)._columns = this.multipartIdentifierList();
				}
				break;

			case 19:
				_localctx = new RenameTableContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 513;
				this.match(SparkSqlParser.ALTER);
				this.state = 514;
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.TABLE || _la === SparkSqlParser.VIEW)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 515;
				(_localctx as RenameTableContext)._from = this.multipartIdentifier();
				this.state = 516;
				this.match(SparkSqlParser.RENAME);
				this.state = 517;
				this.match(SparkSqlParser.TO);
				this.state = 518;
				(_localctx as RenameTableContext)._to = this.multipartIdentifier();
				}
				break;

			case 20:
				_localctx = new SetTablePropertiesContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 520;
				this.match(SparkSqlParser.ALTER);
				this.state = 521;
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.TABLE || _la === SparkSqlParser.VIEW)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

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
				_localctx = new UnsetTablePropertiesContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 527;
				this.match(SparkSqlParser.ALTER);
				this.state = 528;
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.TABLE || _la === SparkSqlParser.VIEW)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

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
				if (_la === SparkSqlParser.IF) {
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
				_localctx = new AlterTableAlterColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 538;
				this.match(SparkSqlParser.ALTER);
				this.state = 539;
				this.match(SparkSqlParser.TABLE);
				this.state = 540;
				(_localctx as AlterTableAlterColumnContext)._table = this.multipartIdentifier();
				this.state = 541;
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.ALTER || _la === SparkSqlParser.CHANGE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 543;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 542;
					this.match(SparkSqlParser.COLUMN);
					}
					break;
				}
				this.state = 545;
				(_localctx as AlterTableAlterColumnContext)._column = this.multipartIdentifier();
				this.state = 547;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
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
				_localctx = new HiveChangeColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 549;
				this.match(SparkSqlParser.ALTER);
				this.state = 550;
				this.match(SparkSqlParser.TABLE);
				this.state = 551;
				(_localctx as HiveChangeColumnContext)._table = this.multipartIdentifier();
				this.state = 553;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.PARTITION) {
					{
					this.state = 552;
					this.partitionSpec();
					}
				}

				this.state = 555;
				this.match(SparkSqlParser.CHANGE);
				this.state = 557;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					this.state = 556;
					this.match(SparkSqlParser.COLUMN);
					}
					break;
				}
				this.state = 559;
				(_localctx as HiveChangeColumnContext)._colName = this.multipartIdentifier();
				this.state = 560;
				this.colType();
				this.state = 562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.AFTER || _la === SparkSqlParser.FIRST) {
					{
					this.state = 561;
					this.colPosition();
					}
				}

				}
				break;

			case 24:
				_localctx = new HiveReplaceColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 564;
				this.match(SparkSqlParser.ALTER);
				this.state = 565;
				this.match(SparkSqlParser.TABLE);
				this.state = 566;
				(_localctx as HiveReplaceColumnsContext)._table = this.multipartIdentifier();
				this.state = 568;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.PARTITION) {
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
				(_localctx as HiveReplaceColumnsContext)._columns = this.qualifiedColTypeWithPositionList();
				this.state = 574;
				this.match(SparkSqlParser.T__1);
				}
				break;

			case 25:
				_localctx = new SetTableSerDeContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
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
				if (_la === SparkSqlParser.PARTITION) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
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
				_localctx = new SetTableSerDeContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
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
				if (_la === SparkSqlParser.PARTITION) {
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
				_localctx = new AddTablePartitionContext(_localctx);
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 600;
				this.match(SparkSqlParser.ALTER);
				this.state = 601;
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.TABLE || _la === SparkSqlParser.VIEW)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

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
				if (_la === SparkSqlParser.IF) {
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
				} while (_la === SparkSqlParser.PARTITION);
				}
				break;

			case 28:
				_localctx = new RenameTablePartitionContext(_localctx);
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 614;
				this.match(SparkSqlParser.ALTER);
				this.state = 615;
				this.match(SparkSqlParser.TABLE);
				this.state = 616;
				this.multipartIdentifier();
				this.state = 617;
				(_localctx as RenameTablePartitionContext)._from = this.partitionSpec();
				this.state = 618;
				this.match(SparkSqlParser.RENAME);
				this.state = 619;
				this.match(SparkSqlParser.TO);
				this.state = 620;
				(_localctx as RenameTablePartitionContext)._to = this.partitionSpec();
				}
				break;

			case 29:
				_localctx = new DropTablePartitionsContext(_localctx);
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 622;
				this.match(SparkSqlParser.ALTER);
				this.state = 623;
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.TABLE || _la === SparkSqlParser.VIEW)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

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
				if (_la === SparkSqlParser.IF) {
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
				while (_la === SparkSqlParser.T__2) {
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
				if (_la === SparkSqlParser.PURGE) {
					{
					this.state = 638;
					this.match(SparkSqlParser.PURGE);
					}
				}

				}
				break;

			case 30:
				_localctx = new SetTableLocationContext(_localctx);
				this.enterOuterAlt(_localctx, 30);
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
				if (_la === SparkSqlParser.PARTITION) {
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
				_localctx = new RecoverPartitionsContext(_localctx);
				this.enterOuterAlt(_localctx, 31);
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
				_localctx = new DropTableContext(_localctx);
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 656;
				this.match(SparkSqlParser.DROP);
				this.state = 657;
				this.match(SparkSqlParser.TABLE);
				this.state = 660;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
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
				if (_la === SparkSqlParser.PURGE) {
					{
					this.state = 663;
					this.match(SparkSqlParser.PURGE);
					}
				}

				}
				break;

			case 33:
				_localctx = new DropViewContext(_localctx);
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 666;
				this.match(SparkSqlParser.DROP);
				this.state = 667;
				this.match(SparkSqlParser.VIEW);
				this.state = 670;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
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
				_localctx = new CreateViewContext(_localctx);
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 673;
				this.match(SparkSqlParser.CREATE);
				this.state = 676;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.OR) {
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
				if (_la === SparkSqlParser.GLOBAL || _la === SparkSqlParser.TEMPORARY) {
					{
					this.state = 679;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SparkSqlParser.GLOBAL) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
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
				if (_la === SparkSqlParser.T__0) {
					{
					this.state = 691;
					this.identifierCommentList();
					}
				}

				this.state = 702;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SparkSqlParser.COMMENT || _la === SparkSqlParser.PARTITIONED || _la === SparkSqlParser.TBLPROPERTIES) {
					{
					this.state = 700;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SparkSqlParser.COMMENT:
						{
						this.state = 694;
						this.commentSpec();
						}
						break;
					case SparkSqlParser.PARTITIONED:
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
					case SparkSqlParser.TBLPROPERTIES:
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
				_localctx = new CreateTempViewUsingContext(_localctx);
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 708;
				this.match(SparkSqlParser.CREATE);
				this.state = 711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.OR) {
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
				if (_la === SparkSqlParser.GLOBAL) {
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
				if (_la === SparkSqlParser.T__0) {
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
				if (_la === SparkSqlParser.OPTIONS) {
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
				_localctx = new AlterViewQueryContext(_localctx);
				this.enterOuterAlt(_localctx, 36);
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
				if (_la === SparkSqlParser.AS) {
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
				_localctx = new CreateFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 738;
				this.match(SparkSqlParser.CREATE);
				this.state = 741;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.OR) {
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
				if (_la === SparkSqlParser.TEMPORARY) {
					{
					this.state = 743;
					this.match(SparkSqlParser.TEMPORARY);
					}
				}

				this.state = 746;
				this.match(SparkSqlParser.FUNCTION);
				this.state = 750;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
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
				(_localctx as CreateFunctionContext)._className = this.match(SparkSqlParser.STRING);
				this.state = 764;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.USING) {
					{
					this.state = 755;
					this.match(SparkSqlParser.USING);
					this.state = 756;
					this.resource();
					this.state = 761;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SparkSqlParser.T__2) {
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
				_localctx = new DropFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 766;
				this.match(SparkSqlParser.DROP);
				this.state = 768;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.TEMPORARY) {
					{
					this.state = 767;
					this.match(SparkSqlParser.TEMPORARY);
					}
				}

				this.state = 770;
				this.match(SparkSqlParser.FUNCTION);
				this.state = 773;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
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
				_localctx = new ExplainContext(_localctx);
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 776;
				this.match(SparkSqlParser.EXPLAIN);
				this.state = 778;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.CODEGEN || _la === SparkSqlParser.COST || _la === SparkSqlParser.EXTENDED || _la === SparkSqlParser.FORMATTED || _la === SparkSqlParser.LOGICAL) {
					{
					this.state = 777;
					_la = this._input.LA(1);
					if (!(_la === SparkSqlParser.CODEGEN || _la === SparkSqlParser.COST || _la === SparkSqlParser.EXTENDED || _la === SparkSqlParser.FORMATTED || _la === SparkSqlParser.LOGICAL)) {
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

				this.state = 780;
				this.statement();
				}
				break;

			case 40:
				_localctx = new ShowTablesContext(_localctx);
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 781;
				this.match(SparkSqlParser.SHOW);
				this.state = 782;
				this.match(SparkSqlParser.TABLES);
				this.state = 785;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
				case 1:
					{
					this.state = 783;
					_la = this._input.LA(1);
					if (!(_la === SparkSqlParser.FROM || _la === SparkSqlParser.IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

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
				if (_la === SparkSqlParser.LIKE || _la === SparkSqlParser.STRING) {
					{
					this.state = 788;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SparkSqlParser.LIKE) {
						{
						this.state = 787;
						this.match(SparkSqlParser.LIKE);
						}
					}

					this.state = 790;
					(_localctx as ShowTablesContext)._pattern = this.match(SparkSqlParser.STRING);
					}
				}

				}
				break;

			case 41:
				_localctx = new ShowTableContext(_localctx);
				this.enterOuterAlt(_localctx, 41);
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
				if (_la === SparkSqlParser.FROM || _la === SparkSqlParser.IN) {
					{
					this.state = 796;
					_la = this._input.LA(1);
					if (!(_la === SparkSqlParser.FROM || _la === SparkSqlParser.IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 797;
					(_localctx as ShowTableContext)._ns = this.multipartIdentifier();
					}
				}

				this.state = 800;
				this.match(SparkSqlParser.LIKE);
				this.state = 801;
				(_localctx as ShowTableContext)._pattern = this.match(SparkSqlParser.STRING);
				this.state = 803;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.PARTITION) {
					{
					this.state = 802;
					this.partitionSpec();
					}
				}

				}
				break;

			case 42:
				_localctx = new ShowTblPropertiesContext(_localctx);
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 805;
				this.match(SparkSqlParser.SHOW);
				this.state = 806;
				this.match(SparkSqlParser.TBLPROPERTIES);
				this.state = 807;
				(_localctx as ShowTblPropertiesContext)._table = this.multipartIdentifier();
				this.state = 812;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 808;
					this.match(SparkSqlParser.T__0);
					this.state = 809;
					(_localctx as ShowTblPropertiesContext)._key = this.tablePropertyKey();
					this.state = 810;
					this.match(SparkSqlParser.T__1);
					}
					break;
				}
				}
				break;

			case 43:
				_localctx = new ShowColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 814;
				this.match(SparkSqlParser.SHOW);
				this.state = 815;
				this.match(SparkSqlParser.COLUMNS);
				this.state = 816;
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.FROM || _la === SparkSqlParser.IN)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 817;
				(_localctx as ShowColumnsContext)._table = this.multipartIdentifier();
				this.state = 820;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 818;
					_la = this._input.LA(1);
					if (!(_la === SparkSqlParser.FROM || _la === SparkSqlParser.IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 819;
					(_localctx as ShowColumnsContext)._ns = this.multipartIdentifier();
					}
					break;
				}
				}
				break;

			case 44:
				_localctx = new ShowViewsContext(_localctx);
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 822;
				this.match(SparkSqlParser.SHOW);
				this.state = 823;
				this.match(SparkSqlParser.VIEWS);
				this.state = 826;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
				case 1:
					{
					this.state = 824;
					_la = this._input.LA(1);
					if (!(_la === SparkSqlParser.FROM || _la === SparkSqlParser.IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

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
				if (_la === SparkSqlParser.LIKE || _la === SparkSqlParser.STRING) {
					{
					this.state = 829;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SparkSqlParser.LIKE) {
						{
						this.state = 828;
						this.match(SparkSqlParser.LIKE);
						}
					}

					this.state = 831;
					(_localctx as ShowViewsContext)._pattern = this.match(SparkSqlParser.STRING);
					}
				}

				}
				break;

			case 45:
				_localctx = new ShowPartitionsContext(_localctx);
				this.enterOuterAlt(_localctx, 45);
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
				if (_la === SparkSqlParser.PARTITION) {
					{
					this.state = 837;
					this.partitionSpec();
					}
				}

				}
				break;

			case 46:
				_localctx = new ShowFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 840;
				this.match(SparkSqlParser.SHOW);
				this.state = 842;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
				case 1:
					{
					this.state = 846;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
					case 1:
						{
						this.state = 845;
						this.match(SparkSqlParser.LIKE);
						}
						break;
					}
					this.state = 850;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
					case 1:
						{
						this.state = 848;
						this.multipartIdentifier();
						}
						break;

					case 2:
						{
						this.state = 849;
						(_localctx as ShowFunctionsContext)._pattern = this.match(SparkSqlParser.STRING);
						}
						break;
					}
					}
					break;
				}
				}
				break;

			case 47:
				_localctx = new ShowCreateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 47);
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
				if (_la === SparkSqlParser.AS) {
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
				_localctx = new ShowCurrentNamespaceContext(_localctx);
				this.enterOuterAlt(_localctx, 48);
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
				_localctx = new DescribeFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 865;
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.DESC || _la === SparkSqlParser.DESCRIBE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 866;
				this.match(SparkSqlParser.FUNCTION);
				this.state = 868;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
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
				_localctx = new DescribeNamespaceContext(_localctx);
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 871;
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.DESC || _la === SparkSqlParser.DESCRIBE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 872;
				this.namespace();
				this.state = 874;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
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
				_localctx = new DescribeRelationContext(_localctx);
				this.enterOuterAlt(_localctx, 51);
				{
				this.state = 878;
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.DESC || _la === SparkSqlParser.DESCRIBE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 880;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 879;
					this.match(SparkSqlParser.TABLE);
					}
					break;
				}
				this.state = 883;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
				case 1:
					{
					this.state = 882;
					(_localctx as DescribeRelationContext)._option = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === SparkSqlParser.EXTENDED || _la === SparkSqlParser.FORMATTED)) {
						(_localctx as DescribeRelationContext)._option = this._errHandler.recoverInline(this);
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
				this.state = 885;
				this.multipartIdentifier();
				this.state = 887;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 886;
					this.partitionSpec();
					}
					break;
				}
				this.state = 890;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
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
				_localctx = new DescribeQueryContext(_localctx);
				this.enterOuterAlt(_localctx, 52);
				{
				this.state = 892;
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.DESC || _la === SparkSqlParser.DESCRIBE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 894;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.QUERY) {
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
				_localctx = new CommentNamespaceContext(_localctx);
				this.enterOuterAlt(_localctx, 53);
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
				(_localctx as CommentNamespaceContext)._comment = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.NULL || _la === SparkSqlParser.STRING)) {
					(_localctx as CommentNamespaceContext)._comment = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 54:
				_localctx = new CommentTableContext(_localctx);
				this.enterOuterAlt(_localctx, 54);
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
				(_localctx as CommentTableContext)._comment = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.NULL || _la === SparkSqlParser.STRING)) {
					(_localctx as CommentTableContext)._comment = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 55:
				_localctx = new RefreshTableContext(_localctx);
				this.enterOuterAlt(_localctx, 55);
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
				_localctx = new RefreshFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 56);
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
				_localctx = new RefreshResourceContext(_localctx);
				this.enterOuterAlt(_localctx, 57);
				{
				this.state = 917;
				this.match(SparkSqlParser.REFRESH);
				this.state = 925;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
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
					_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
					}
					}
					break;
				}
				}
				break;

			case 58:
				_localctx = new CacheTableContext(_localctx);
				this.enterOuterAlt(_localctx, 58);
				{
				this.state = 927;
				this.match(SparkSqlParser.CACHE);
				this.state = 929;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.LAZY) {
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
				if (_la === SparkSqlParser.OPTIONS) {
					{
					this.state = 933;
					this.match(SparkSqlParser.OPTIONS);
					this.state = 934;
					this.tablePropertyList();
					}
				}

				this.state = 941;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
				case 1:
					{
					this.state = 938;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SparkSqlParser.AS) {
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
				_localctx = new UncacheTableContext(_localctx);
				this.enterOuterAlt(_localctx, 59);
				{
				this.state = 943;
				this.match(SparkSqlParser.UNCACHE);
				this.state = 944;
				this.match(SparkSqlParser.TABLE);
				this.state = 947;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
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
				_localctx = new ClearCacheContext(_localctx);
				this.enterOuterAlt(_localctx, 60);
				{
				this.state = 950;
				this.match(SparkSqlParser.CLEAR);
				this.state = 951;
				this.match(SparkSqlParser.CACHE);
				}
				break;

			case 61:
				_localctx = new LoadDataContext(_localctx);
				this.enterOuterAlt(_localctx, 61);
				{
				this.state = 952;
				this.match(SparkSqlParser.LOAD);
				this.state = 953;
				this.match(SparkSqlParser.DATA);
				this.state = 955;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.LOCAL) {
					{
					this.state = 954;
					this.match(SparkSqlParser.LOCAL);
					}
				}

				this.state = 957;
				this.match(SparkSqlParser.INPATH);
				this.state = 958;
				(_localctx as LoadDataContext)._path = this.match(SparkSqlParser.STRING);
				this.state = 960;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.OVERWRITE) {
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
				if (_la === SparkSqlParser.PARTITION) {
					{
					this.state = 965;
					this.partitionSpec();
					}
				}

				}
				break;

			case 62:
				_localctx = new TruncateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 62);
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
				if (_la === SparkSqlParser.PARTITION) {
					{
					this.state = 971;
					this.partitionSpec();
					}
				}

				}
				break;

			case 63:
				_localctx = new RepairTableContext(_localctx);
				this.enterOuterAlt(_localctx, 63);
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
				_localctx = new ManageResourceContext(_localctx);
				this.enterOuterAlt(_localctx, 64);
				{
				this.state = 978;
				(_localctx as ManageResourceContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.ADD || _la === SparkSqlParser.LIST)) {
					(_localctx as ManageResourceContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 979;
				this.identifier();
				this.state = 987;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
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
					_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
					}
					}
					break;
				}
				}
				break;

			case 65:
				_localctx = new FailNativeCommandContext(_localctx);
				this.enterOuterAlt(_localctx, 65);
				{
				this.state = 989;
				this.match(SparkSqlParser.SET);
				this.state = 990;
				this.match(SparkSqlParser.ROLE);
				this.state = 994;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
				}
				}
				break;

			case 66:
				_localctx = new SetTimeZoneContext(_localctx);
				this.enterOuterAlt(_localctx, 66);
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
				_localctx = new SetTimeZoneContext(_localctx);
				this.enterOuterAlt(_localctx, 67);
				{
				this.state = 1001;
				this.match(SparkSqlParser.SET);
				this.state = 1002;
				this.match(SparkSqlParser.TIME);
				this.state = 1003;
				this.match(SparkSqlParser.ZONE);
				this.state = 1004;
				(_localctx as SetTimeZoneContext)._timezone = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.LOCAL || _la === SparkSqlParser.STRING)) {
					(_localctx as SetTimeZoneContext)._timezone = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 68:
				_localctx = new SetTimeZoneContext(_localctx);
				this.enterOuterAlt(_localctx, 68);
				{
				this.state = 1005;
				this.match(SparkSqlParser.SET);
				this.state = 1006;
				this.match(SparkSqlParser.TIME);
				this.state = 1007;
				this.match(SparkSqlParser.ZONE);
				this.state = 1011;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
				}
				}
				break;

			case 69:
				_localctx = new SetQuotedConfigurationContext(_localctx);
				this.enterOuterAlt(_localctx, 69);
				{
				this.state = 1014;
				this.match(SparkSqlParser.SET);
				this.state = 1015;
				this.configKey();
				this.state = 1023;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.EQ) {
					{
					this.state = 1016;
					this.match(SparkSqlParser.EQ);
					this.state = 1020;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
					}
					}
				}

				}
				break;

			case 70:
				_localctx = new SetConfigurationContext(_localctx);
				this.enterOuterAlt(_localctx, 70);
				{
				this.state = 1025;
				this.match(SparkSqlParser.SET);
				this.state = 1029;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
				}
				}
				break;

			case 71:
				_localctx = new ResetQuotedConfigurationContext(_localctx);
				this.enterOuterAlt(_localctx, 71);
				{
				this.state = 1032;
				this.match(SparkSqlParser.RESET);
				this.state = 1033;
				this.configKey();
				}
				break;

			case 72:
				_localctx = new ResetConfigurationContext(_localctx);
				this.enterOuterAlt(_localctx, 72);
				{
				this.state = 1034;
				this.match(SparkSqlParser.RESET);
				this.state = 1038;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
				}
				}
				break;

			case 73:
				_localctx = new FailNativeCommandContext(_localctx);
				this.enterOuterAlt(_localctx, 73);
				{
				this.state = 1041;
				this.unsupportedHiveNativeCommands();
				this.state = 1045;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
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
	public configKey(): ConfigKeyContext {
		let _localctx: ConfigKeyContext = new ConfigKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SparkSqlParser.RULE_configKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1050;
			this.quotedIdentifier();
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
	public unsupportedHiveNativeCommands(): UnsupportedHiveNativeCommandsContext {
		let _localctx: UnsupportedHiveNativeCommandsContext = new UnsupportedHiveNativeCommandsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SparkSqlParser.RULE_unsupportedHiveNativeCommands);
		let _la: number;
		try {
			this.state = 1220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1052;
				_localctx._kw1 = this.match(SparkSqlParser.CREATE);
				this.state = 1053;
				_localctx._kw2 = this.match(SparkSqlParser.ROLE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1054;
				_localctx._kw1 = this.match(SparkSqlParser.DROP);
				this.state = 1055;
				_localctx._kw2 = this.match(SparkSqlParser.ROLE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1056;
				_localctx._kw1 = this.match(SparkSqlParser.GRANT);
				this.state = 1058;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
				case 1:
					{
					this.state = 1057;
					_localctx._kw2 = this.match(SparkSqlParser.ROLE);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1060;
				_localctx._kw1 = this.match(SparkSqlParser.REVOKE);
				this.state = 1062;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
				case 1:
					{
					this.state = 1061;
					_localctx._kw2 = this.match(SparkSqlParser.ROLE);
					}
					break;
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1064;
				_localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1065;
				_localctx._kw2 = this.match(SparkSqlParser.GRANT);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1066;
				_localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1067;
				_localctx._kw2 = this.match(SparkSqlParser.ROLE);
				this.state = 1069;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
				case 1:
					{
					this.state = 1068;
					_localctx._kw3 = this.match(SparkSqlParser.GRANT);
					}
					break;
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1071;
				_localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1072;
				_localctx._kw2 = this.match(SparkSqlParser.PRINCIPALS);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1073;
				_localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1074;
				_localctx._kw2 = this.match(SparkSqlParser.ROLES);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1075;
				_localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1076;
				_localctx._kw2 = this.match(SparkSqlParser.CURRENT);
				this.state = 1077;
				_localctx._kw3 = this.match(SparkSqlParser.ROLES);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1078;
				_localctx._kw1 = this.match(SparkSqlParser.EXPORT);
				this.state = 1079;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1080;
				_localctx._kw1 = this.match(SparkSqlParser.IMPORT);
				this.state = 1081;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1082;
				_localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1083;
				_localctx._kw2 = this.match(SparkSqlParser.COMPACTIONS);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1084;
				_localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1085;
				_localctx._kw2 = this.match(SparkSqlParser.CREATE);
				this.state = 1086;
				_localctx._kw3 = this.match(SparkSqlParser.TABLE);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1087;
				_localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1088;
				_localctx._kw2 = this.match(SparkSqlParser.TRANSACTIONS);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1089;
				_localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1090;
				_localctx._kw2 = this.match(SparkSqlParser.INDEXES);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1091;
				_localctx._kw1 = this.match(SparkSqlParser.SHOW);
				this.state = 1092;
				_localctx._kw2 = this.match(SparkSqlParser.LOCKS);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1093;
				_localctx._kw1 = this.match(SparkSqlParser.CREATE);
				this.state = 1094;
				_localctx._kw2 = this.match(SparkSqlParser.INDEX);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1095;
				_localctx._kw1 = this.match(SparkSqlParser.DROP);
				this.state = 1096;
				_localctx._kw2 = this.match(SparkSqlParser.INDEX);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1097;
				_localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1098;
				_localctx._kw2 = this.match(SparkSqlParser.INDEX);
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1099;
				_localctx._kw1 = this.match(SparkSqlParser.LOCK);
				this.state = 1100;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1101;
				_localctx._kw1 = this.match(SparkSqlParser.LOCK);
				this.state = 1102;
				_localctx._kw2 = this.match(SparkSqlParser.DATABASE);
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1103;
				_localctx._kw1 = this.match(SparkSqlParser.UNLOCK);
				this.state = 1104;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1105;
				_localctx._kw1 = this.match(SparkSqlParser.UNLOCK);
				this.state = 1106;
				_localctx._kw2 = this.match(SparkSqlParser.DATABASE);
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1107;
				_localctx._kw1 = this.match(SparkSqlParser.CREATE);
				this.state = 1108;
				_localctx._kw2 = this.match(SparkSqlParser.TEMPORARY);
				this.state = 1109;
				_localctx._kw3 = this.match(SparkSqlParser.MACRO);
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1110;
				_localctx._kw1 = this.match(SparkSqlParser.DROP);
				this.state = 1111;
				_localctx._kw2 = this.match(SparkSqlParser.TEMPORARY);
				this.state = 1112;
				_localctx._kw3 = this.match(SparkSqlParser.MACRO);
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1113;
				_localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1114;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1115;
				this.tableIdentifier();
				this.state = 1116;
				_localctx._kw3 = this.match(SparkSqlParser.NOT);
				this.state = 1117;
				_localctx._kw4 = this.match(SparkSqlParser.CLUSTERED);
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 1119;
				_localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1120;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1121;
				this.tableIdentifier();
				this.state = 1122;
				_localctx._kw3 = this.match(SparkSqlParser.CLUSTERED);
				this.state = 1123;
				_localctx._kw4 = this.match(SparkSqlParser.BY);
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 1125;
				_localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1126;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1127;
				this.tableIdentifier();
				this.state = 1128;
				_localctx._kw3 = this.match(SparkSqlParser.NOT);
				this.state = 1129;
				_localctx._kw4 = this.match(SparkSqlParser.SORTED);
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 1131;
				_localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1132;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1133;
				this.tableIdentifier();
				this.state = 1134;
				_localctx._kw3 = this.match(SparkSqlParser.SKEWED);
				this.state = 1135;
				_localctx._kw4 = this.match(SparkSqlParser.BY);
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 1137;
				_localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1138;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1139;
				this.tableIdentifier();
				this.state = 1140;
				_localctx._kw3 = this.match(SparkSqlParser.NOT);
				this.state = 1141;
				_localctx._kw4 = this.match(SparkSqlParser.SKEWED);
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 1143;
				_localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1144;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1145;
				this.tableIdentifier();
				this.state = 1146;
				_localctx._kw3 = this.match(SparkSqlParser.NOT);
				this.state = 1147;
				_localctx._kw4 = this.match(SparkSqlParser.STORED);
				this.state = 1148;
				_localctx._kw5 = this.match(SparkSqlParser.AS);
				this.state = 1149;
				_localctx._kw6 = this.match(SparkSqlParser.DIRECTORIES);
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 1151;
				_localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1152;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1153;
				this.tableIdentifier();
				this.state = 1154;
				_localctx._kw3 = this.match(SparkSqlParser.SET);
				this.state = 1155;
				_localctx._kw4 = this.match(SparkSqlParser.SKEWED);
				this.state = 1156;
				_localctx._kw5 = this.match(SparkSqlParser.LOCATION);
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 1158;
				_localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1159;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1160;
				this.tableIdentifier();
				this.state = 1161;
				_localctx._kw3 = this.match(SparkSqlParser.EXCHANGE);
				this.state = 1162;
				_localctx._kw4 = this.match(SparkSqlParser.PARTITION);
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 1164;
				_localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1165;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1166;
				this.tableIdentifier();
				this.state = 1167;
				_localctx._kw3 = this.match(SparkSqlParser.ARCHIVE);
				this.state = 1168;
				_localctx._kw4 = this.match(SparkSqlParser.PARTITION);
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 1170;
				_localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1171;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1172;
				this.tableIdentifier();
				this.state = 1173;
				_localctx._kw3 = this.match(SparkSqlParser.UNARCHIVE);
				this.state = 1174;
				_localctx._kw4 = this.match(SparkSqlParser.PARTITION);
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 1176;
				_localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1177;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1178;
				this.tableIdentifier();
				this.state = 1179;
				_localctx._kw3 = this.match(SparkSqlParser.TOUCH);
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 1181;
				_localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1182;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1183;
				this.tableIdentifier();
				this.state = 1185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.PARTITION) {
					{
					this.state = 1184;
					this.partitionSpec();
					}
				}

				this.state = 1187;
				_localctx._kw3 = this.match(SparkSqlParser.COMPACT);
				}
				break;

			case 38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 1189;
				_localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1190;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1191;
				this.tableIdentifier();
				this.state = 1193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.PARTITION) {
					{
					this.state = 1192;
					this.partitionSpec();
					}
				}

				this.state = 1195;
				_localctx._kw3 = this.match(SparkSqlParser.CONCATENATE);
				}
				break;

			case 39:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 1197;
				_localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1198;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1199;
				this.tableIdentifier();
				this.state = 1201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.PARTITION) {
					{
					this.state = 1200;
					this.partitionSpec();
					}
				}

				this.state = 1203;
				_localctx._kw3 = this.match(SparkSqlParser.SET);
				this.state = 1204;
				_localctx._kw4 = this.match(SparkSqlParser.FILEFORMAT);
				}
				break;

			case 40:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 1206;
				_localctx._kw1 = this.match(SparkSqlParser.ALTER);
				this.state = 1207;
				_localctx._kw2 = this.match(SparkSqlParser.TABLE);
				this.state = 1208;
				this.tableIdentifier();
				this.state = 1210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.PARTITION) {
					{
					this.state = 1209;
					this.partitionSpec();
					}
				}

				this.state = 1212;
				_localctx._kw3 = this.match(SparkSqlParser.REPLACE);
				this.state = 1213;
				_localctx._kw4 = this.match(SparkSqlParser.COLUMNS);
				}
				break;

			case 41:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 1215;
				_localctx._kw1 = this.match(SparkSqlParser.START);
				this.state = 1216;
				_localctx._kw2 = this.match(SparkSqlParser.TRANSACTION);
				}
				break;

			case 42:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 1217;
				_localctx._kw1 = this.match(SparkSqlParser.COMMIT);
				}
				break;

			case 43:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 1218;
				_localctx._kw1 = this.match(SparkSqlParser.ROLLBACK);
				}
				break;

			case 44:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 1219;
				_localctx._kw1 = this.match(SparkSqlParser.DFS);
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
	public createTableHeader(): CreateTableHeaderContext {
		let _localctx: CreateTableHeaderContext = new CreateTableHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SparkSqlParser.RULE_createTableHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1222;
			this.match(SparkSqlParser.CREATE);
			this.state = 1224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SparkSqlParser.TEMPORARY) {
				{
				this.state = 1223;
				this.match(SparkSqlParser.TEMPORARY);
				}
			}

			this.state = 1227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SparkSqlParser.EXTERNAL) {
				{
				this.state = 1226;
				this.match(SparkSqlParser.EXTERNAL);
				}
			}

			this.state = 1229;
			this.match(SparkSqlParser.TABLE);
			this.state = 1233;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
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
	public replaceTableHeader(): ReplaceTableHeaderContext {
		let _localctx: ReplaceTableHeaderContext = new ReplaceTableHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SparkSqlParser.RULE_replaceTableHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SparkSqlParser.CREATE) {
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
	public bucketSpec(): BucketSpecContext {
		let _localctx: BucketSpecContext = new BucketSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SparkSqlParser.RULE_bucketSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
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
			if (_la === SparkSqlParser.SORTED) {
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
	public skewSpec(): SkewSpecContext {
		let _localctx: SkewSpecContext = new SkewSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SparkSqlParser.RULE_skewSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
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
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
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
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
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
	public locationSpec(): LocationSpecContext {
		let _localctx: LocationSpecContext = new LocationSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SparkSqlParser.RULE_locationSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1270;
			this.match(SparkSqlParser.LOCATION);
			this.state = 1271;
			this.match(SparkSqlParser.STRING);
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
		this.enterRule(_localctx, 32, SparkSqlParser.RULE_commentSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1273;
			this.match(SparkSqlParser.COMMENT);
			this.state = 1274;
			this.match(SparkSqlParser.STRING);
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
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SparkSqlParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SparkSqlParser.WITH) {
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
	public insertInto(): InsertIntoContext {
		let _localctx: InsertIntoContext = new InsertIntoContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SparkSqlParser.RULE_insertInto);
		let _la: number;
		try {
			this.state = 1337;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				_localctx = new InsertOverwriteTableContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1282;
				this.match(SparkSqlParser.INSERT);
				this.state = 1283;
				this.match(SparkSqlParser.OVERWRITE);
				this.state = 1285;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
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
				if (_la === SparkSqlParser.PARTITION) {
					{
					this.state = 1288;
					this.partitionSpec();
					this.state = 1292;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SparkSqlParser.IF) {
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
				_localctx = new InsertIntoTableContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1296;
				this.match(SparkSqlParser.INSERT);
				this.state = 1297;
				this.match(SparkSqlParser.INTO);
				this.state = 1299;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
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
				if (_la === SparkSqlParser.PARTITION) {
					{
					this.state = 1302;
					this.partitionSpec();
					}
				}

				this.state = 1308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.IF) {
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
				_localctx = new InsertOverwriteHiveDirContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1310;
				this.match(SparkSqlParser.INSERT);
				this.state = 1311;
				this.match(SparkSqlParser.OVERWRITE);
				this.state = 1313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.LOCAL) {
					{
					this.state = 1312;
					this.match(SparkSqlParser.LOCAL);
					}
				}

				this.state = 1315;
				this.match(SparkSqlParser.DIRECTORY);
				this.state = 1316;
				(_localctx as InsertOverwriteHiveDirContext)._path = this.match(SparkSqlParser.STRING);
				this.state = 1318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.ROW) {
					{
					this.state = 1317;
					this.rowFormat();
					}
				}

				this.state = 1321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.STORED) {
					{
					this.state = 1320;
					this.createFileFormat();
					}
				}

				}
				break;

			case 4:
				_localctx = new InsertOverwriteDirContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1323;
				this.match(SparkSqlParser.INSERT);
				this.state = 1324;
				this.match(SparkSqlParser.OVERWRITE);
				this.state = 1326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.LOCAL) {
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
				if (_la === SparkSqlParser.STRING) {
					{
					this.state = 1329;
					(_localctx as InsertOverwriteDirContext)._path = this.match(SparkSqlParser.STRING);
					}
				}

				this.state = 1332;
				this.tableProvider();
				this.state = 1335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.OPTIONS) {
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
	public partitionSpecLocation(): PartitionSpecLocationContext {
		let _localctx: PartitionSpecLocationContext = new PartitionSpecLocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SparkSqlParser.RULE_partitionSpecLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1339;
			this.partitionSpec();
			this.state = 1341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SparkSqlParser.LOCATION) {
				{
				this.state = 1340;
				this.locationSpec();
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
	public partitionSpec(): PartitionSpecContext {
		let _localctx: PartitionSpecContext = new PartitionSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SparkSqlParser.RULE_partitionSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
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
			while (_la === SparkSqlParser.T__2) {
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
	public partitionVal(): PartitionValContext {
		let _localctx: PartitionValContext = new PartitionValContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SparkSqlParser.RULE_partitionVal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1355;
			this.identifier();
			this.state = 1358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SparkSqlParser.EQ) {
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
	public namespace(): NamespaceContext {
		let _localctx: NamespaceContext = new NamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SparkSqlParser.RULE_namespace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1360;
			_la = this._input.LA(1);
			if (!(_la === SparkSqlParser.DATABASE || _la === SparkSqlParser.NAMESPACE || _la === SparkSqlParser.SCHEMA)) {
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
	public describeFuncName(): DescribeFuncNameContext {
		let _localctx: DescribeFuncNameContext = new DescribeFuncNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SparkSqlParser.RULE_describeFuncName);
		try {
			this.state = 1367;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1362;
				this.qualifiedName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1363;
				this.match(SparkSqlParser.STRING);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1364;
				this.comparisonOperator();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1365;
				this.arithmeticOperator();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1366;
				this.predicateOperator();
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
	public describeColName(): DescribeColNameContext {
		let _localctx: DescribeColNameContext = new DescribeColNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SparkSqlParser.RULE_describeColName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1369;
			_localctx._identifier = this.identifier();
			_localctx._nameParts.push(_localctx._identifier);
			this.state = 1374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SparkSqlParser.T__3) {
				{
				{
				this.state = 1370;
				this.match(SparkSqlParser.T__3);
				this.state = 1371;
				_localctx._identifier = this.identifier();
				_localctx._nameParts.push(_localctx._identifier);
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
	public ctes(): CtesContext {
		let _localctx: CtesContext = new CtesContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SparkSqlParser.RULE_ctes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1377;
			this.match(SparkSqlParser.WITH);
			this.state = 1378;
			this.namedQuery();
			this.state = 1383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SparkSqlParser.T__2) {
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
	public namedQuery(): NamedQueryContext {
		let _localctx: NamedQueryContext = new NamedQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SparkSqlParser.RULE_namedQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1386;
			_localctx._name = this.errorCapturingIdentifier();
			this.state = 1388;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				{
				this.state = 1387;
				_localctx._columnAliases = this.identifierList();
				}
				break;
			}
			this.state = 1391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SparkSqlParser.AS) {
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
	public tableProvider(): TableProviderContext {
		let _localctx: TableProviderContext = new TableProviderContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SparkSqlParser.RULE_tableProvider);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1397;
			this.match(SparkSqlParser.USING);
			this.state = 1398;
			this.multipartIdentifier();
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
	public createTableClauses(): CreateTableClausesContext {
		let _localctx: CreateTableClausesContext = new CreateTableClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SparkSqlParser.RULE_createTableClauses);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1412;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 1410;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SparkSqlParser.OPTIONS:
						{
						{
						this.state = 1400;
						this.match(SparkSqlParser.OPTIONS);
						this.state = 1401;
						this.tablePropertyList();
						}
						}
						break;
					case SparkSqlParser.PARTITIONED:
						{
						{
						this.state = 1402;
						this.match(SparkSqlParser.PARTITIONED);
						this.state = 1403;
						this.match(SparkSqlParser.BY);
						this.state = 1404;
						_localctx._partitioning = this.transformList();
						}
						}
						break;
					case SparkSqlParser.CLUSTERED:
						{
						this.state = 1405;
						this.bucketSpec();
						}
						break;
					case SparkSqlParser.LOCATION:
						{
						this.state = 1406;
						this.locationSpec();
						}
						break;
					case SparkSqlParser.COMMENT:
						{
						this.state = 1407;
						this.commentSpec();
						}
						break;
					case SparkSqlParser.TBLPROPERTIES:
						{
						{
						this.state = 1408;
						this.match(SparkSqlParser.TBLPROPERTIES);
						this.state = 1409;
						_localctx._tableProps = this.tablePropertyList();
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
				_alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
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
	public tablePropertyList(): TablePropertyListContext {
		let _localctx: TablePropertyListContext = new TablePropertyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SparkSqlParser.RULE_tablePropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1415;
			this.match(SparkSqlParser.T__0);
			this.state = 1416;
			this.tableProperty();
			this.state = 1421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SparkSqlParser.T__2) {
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
		this.enterRule(_localctx, 60, SparkSqlParser.RULE_tableProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1426;
			_localctx._key = this.tablePropertyKey();
			this.state = 1431;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SparkSqlParser.FALSE || _la === SparkSqlParser.TRUE || _la === SparkSqlParser.EQ || ((((_la - 279)) & ~0x1F) === 0 && ((1 << (_la - 279)) & ((1 << (SparkSqlParser.STRING - 279)) | (1 << (SparkSqlParser.INTEGER_VALUE - 279)) | (1 << (SparkSqlParser.DECIMAL_VALUE - 279)))) !== 0)) {
				{
				this.state = 1428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.EQ) {
					{
					this.state = 1427;
					this.match(SparkSqlParser.EQ);
					}
				}

				this.state = 1430;
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
		this.enterRule(_localctx, 62, SparkSqlParser.RULE_tablePropertyKey);
		let _la: number;
		try {
			this.state = 1442;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1433;
				this.identifier();
				this.state = 1438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SparkSqlParser.T__3) {
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
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1441;
				this.match(SparkSqlParser.STRING);
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
		this.enterRule(_localctx, 64, SparkSqlParser.RULE_tablePropertyValue);
		try {
			this.state = 1448;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SparkSqlParser.INTEGER_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1444;
				this.match(SparkSqlParser.INTEGER_VALUE);
				}
				break;
			case SparkSqlParser.DECIMAL_VALUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1445;
				this.match(SparkSqlParser.DECIMAL_VALUE);
				}
				break;
			case SparkSqlParser.FALSE:
			case SparkSqlParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1446;
				this.booleanValue();
				}
				break;
			case SparkSqlParser.STRING:
				this.enterOuterAlt(_localctx, 4);
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
	public constantList(): ConstantListContext {
		let _localctx: ConstantListContext = new ConstantListContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SparkSqlParser.RULE_constantList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1450;
			this.match(SparkSqlParser.T__0);
			this.state = 1451;
			this.constant();
			this.state = 1456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SparkSqlParser.T__2) {
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
	public nestedConstantList(): NestedConstantListContext {
		let _localctx: NestedConstantListContext = new NestedConstantListContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SparkSqlParser.RULE_nestedConstantList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1461;
			this.match(SparkSqlParser.T__0);
			this.state = 1462;
			this.constantList();
			this.state = 1467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SparkSqlParser.T__2) {
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
	public createFileFormat(): CreateFileFormatContext {
		let _localctx: CreateFileFormatContext = new CreateFileFormatContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SparkSqlParser.RULE_createFileFormat);
		try {
			this.state = 1478;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
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
				this.enterOuterAlt(_localctx, 2);
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
	public fileFormat(): FileFormatContext {
		let _localctx: FileFormatContext = new FileFormatContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SparkSqlParser.RULE_fileFormat);
		try {
			this.state = 1485;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				_localctx = new TableFileFormatContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1480;
				this.match(SparkSqlParser.INPUTFORMAT);
				this.state = 1481;
				(_localctx as TableFileFormatContext)._inFmt = this.match(SparkSqlParser.STRING);
				this.state = 1482;
				this.match(SparkSqlParser.OUTPUTFORMAT);
				this.state = 1483;
				(_localctx as TableFileFormatContext)._outFmt = this.match(SparkSqlParser.STRING);
				}
				break;

			case 2:
				_localctx = new GenericFileFormatContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1484;
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
	public storageHandler(): StorageHandlerContext {
		let _localctx: StorageHandlerContext = new StorageHandlerContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SparkSqlParser.RULE_storageHandler);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1487;
			this.match(SparkSqlParser.STRING);
			this.state = 1491;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
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
	public resource(): ResourceContext {
		let _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SparkSqlParser.RULE_resource);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1493;
			this.identifier();
			this.state = 1494;
			this.match(SparkSqlParser.STRING);
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
	public dmlStatementNoWith(): DmlStatementNoWithContext {
		let _localctx: DmlStatementNoWithContext = new DmlStatementNoWithContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SparkSqlParser.RULE_dmlStatementNoWith);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1547;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SparkSqlParser.INSERT:
				_localctx = new SingleInsertQueryContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1496;
				this.insertInto();
				this.state = 1497;
				this.queryTerm(0);
				this.state = 1498;
				this.queryOrganization();
				}
				break;
			case SparkSqlParser.FROM:
				_localctx = new MultiInsertQueryContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
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
					_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SparkSqlParser.DELETE:
				_localctx = new DeleteFromTableContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
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
				if (_la === SparkSqlParser.WHERE) {
					{
					this.state = 1510;
					this.whereClause();
					}
				}

				}
				break;
			case SparkSqlParser.UPDATE:
				_localctx = new UpdateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
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
				if (_la === SparkSqlParser.WHERE) {
					{
					this.state = 1517;
					this.whereClause();
					}
				}

				}
				break;
			case SparkSqlParser.MERGE:
				_localctx = new MergeIntoTableContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1520;
				this.match(SparkSqlParser.MERGE);
				this.state = 1521;
				this.match(SparkSqlParser.INTO);
				this.state = 1522;
				(_localctx as MergeIntoTableContext)._target = this.multipartIdentifier();
				this.state = 1523;
				(_localctx as MergeIntoTableContext)._targetAlias = this.tableAlias();
				this.state = 1524;
				this.match(SparkSqlParser.USING);
				this.state = 1530;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
				case 1:
					{
					this.state = 1525;
					(_localctx as MergeIntoTableContext)._source = this.multipartIdentifier();
					}
					break;

				case 2:
					{
					this.state = 1526;
					this.match(SparkSqlParser.T__0);
					this.state = 1527;
					(_localctx as MergeIntoTableContext)._sourceQuery = this.query();
					this.state = 1528;
					this.match(SparkSqlParser.T__1);
					}
					break;
				}
				this.state = 1532;
				(_localctx as MergeIntoTableContext)._sourceAlias = this.tableAlias();
				this.state = 1533;
				this.match(SparkSqlParser.ON);
				this.state = 1534;
				(_localctx as MergeIntoTableContext)._mergeCondition = this.booleanExpression(0);
				this.state = 1538;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
				}
				this.state = 1544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SparkSqlParser.WHEN) {
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
	public queryOrganization(): QueryOrganizationContext {
		let _localctx: QueryOrganizationContext = new QueryOrganizationContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SparkSqlParser.RULE_queryOrganization);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1559;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
			case 1:
				{
				this.state = 1549;
				this.match(SparkSqlParser.ORDER);
				this.state = 1550;
				this.match(SparkSqlParser.BY);
				this.state = 1551;
				_localctx._sortItem = this.sortItem();
				_localctx._order.push(_localctx._sortItem);
				this.state = 1556;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1552;
						this.match(SparkSqlParser.T__2);
						this.state = 1553;
						_localctx._sortItem = this.sortItem();
						_localctx._order.push(_localctx._sortItem);
						}
						}
					}
					this.state = 1558;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
				}
				}
				break;
			}
			this.state = 1571;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				{
				this.state = 1561;
				this.match(SparkSqlParser.CLUSTER);
				this.state = 1562;
				this.match(SparkSqlParser.BY);
				this.state = 1563;
				_localctx._expression = this.expression();
				_localctx._clusterBy.push(_localctx._expression);
				this.state = 1568;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1564;
						this.match(SparkSqlParser.T__2);
						this.state = 1565;
						_localctx._expression = this.expression();
						_localctx._clusterBy.push(_localctx._expression);
						}
						}
					}
					this.state = 1570;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
				}
				}
				break;
			}
			this.state = 1583;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				{
				this.state = 1573;
				this.match(SparkSqlParser.DISTRIBUTE);
				this.state = 1574;
				this.match(SparkSqlParser.BY);
				this.state = 1575;
				_localctx._expression = this.expression();
				_localctx._distributeBy.push(_localctx._expression);
				this.state = 1580;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1576;
						this.match(SparkSqlParser.T__2);
						this.state = 1577;
						_localctx._expression = this.expression();
						_localctx._distributeBy.push(_localctx._expression);
						}
						}
					}
					this.state = 1582;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
				}
				}
				break;
			}
			this.state = 1595;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				{
				this.state = 1585;
				this.match(SparkSqlParser.SORT);
				this.state = 1586;
				this.match(SparkSqlParser.BY);
				this.state = 1587;
				_localctx._sortItem = this.sortItem();
				_localctx._sort.push(_localctx._sortItem);
				this.state = 1592;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1588;
						this.match(SparkSqlParser.T__2);
						this.state = 1589;
						_localctx._sortItem = this.sortItem();
						_localctx._sort.push(_localctx._sortItem);
						}
						}
					}
					this.state = 1594;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
				}
				}
				break;
			}
			this.state = 1598;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1597;
				this.windowClause();
				}
				break;
			}
			this.state = 1605;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				{
				this.state = 1600;
				this.match(SparkSqlParser.LIMIT);
				this.state = 1603;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
				case 1:
					{
					this.state = 1601;
					this.match(SparkSqlParser.ALL);
					}
					break;

				case 2:
					{
					this.state = 1602;
					_localctx._limit = this.expression();
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
	public multiInsertQueryBody(): MultiInsertQueryBodyContext {
		let _localctx: MultiInsertQueryBodyContext = new MultiInsertQueryBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SparkSqlParser.RULE_multiInsertQueryBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1607;
			this.insertInto();
			this.state = 1608;
			this.fromStatementBody();
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

	public queryTerm(): QueryTermContext;
	public queryTerm(_p: number): QueryTermContext;
	// @RuleVersion(0)
	public queryTerm(_p?: number): QueryTermContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: QueryTermContext = new QueryTermContext(this._ctx, _parentState);
		let _prevctx: QueryTermContext = _localctx;
		let _startState: number = 84;
		this.enterRecursionRule(_localctx, 84, SparkSqlParser.RULE_queryTerm, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new QueryTermDefaultContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 1611;
			this.queryPrimary();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1636;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1634;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
					case 1:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SparkSqlParser.RULE_queryTerm);
						this.state = 1613;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1614;
						if (!(this.legacy_setops_precedence_enbled)) {
							throw this.createFailedPredicateException("this.legacy_setops_precedence_enbled");
						}
						this.state = 1615;
						(_localctx as SetOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === SparkSqlParser.EXCEPT || _la === SparkSqlParser.INTERSECT || _la === SparkSqlParser.SETMINUS || _la === SparkSqlParser.UNION)) {
							(_localctx as SetOperationContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1617;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === SparkSqlParser.ALL || _la === SparkSqlParser.DISTINCT) {
							{
							this.state = 1616;
							this.setQuantifier();
							}
						}

						this.state = 1619;
						(_localctx as SetOperationContext)._right = this.queryTerm(4);
						}
						break;

					case 2:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SparkSqlParser.RULE_queryTerm);
						this.state = 1620;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1621;
						if (!(!this.legacy_setops_precedence_enbled)) {
							throw this.createFailedPredicateException("!this.legacy_setops_precedence_enbled");
						}
						this.state = 1622;
						(_localctx as SetOperationContext)._operator = this.match(SparkSqlParser.INTERSECT);
						this.state = 1624;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === SparkSqlParser.ALL || _la === SparkSqlParser.DISTINCT) {
							{
							this.state = 1623;
							this.setQuantifier();
							}
						}

						this.state = 1626;
						(_localctx as SetOperationContext)._right = this.queryTerm(3);
						}
						break;

					case 3:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SparkSqlParser.RULE_queryTerm);
						this.state = 1627;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1628;
						if (!(!this.legacy_setops_precedence_enbled)) {
							throw this.createFailedPredicateException("!this.legacy_setops_precedence_enbled");
						}
						this.state = 1629;
						(_localctx as SetOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === SparkSqlParser.EXCEPT || _la === SparkSqlParser.SETMINUS || _la === SparkSqlParser.UNION)) {
							(_localctx as SetOperationContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1631;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === SparkSqlParser.ALL || _la === SparkSqlParser.DISTINCT) {
							{
							this.state = 1630;
							this.setQuantifier();
							}
						}

						this.state = 1633;
						(_localctx as SetOperationContext)._right = this.queryTerm(2);
						}
						break;
					}
					}
				}
				this.state = 1638;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
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
	public queryPrimary(): QueryPrimaryContext {
		let _localctx: QueryPrimaryContext = new QueryPrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SparkSqlParser.RULE_queryPrimary);
		try {
			this.state = 1648;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SparkSqlParser.MAP:
			case SparkSqlParser.REDUCE:
			case SparkSqlParser.SELECT:
				_localctx = new QueryPrimaryDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1639;
				this.querySpecification();
				}
				break;
			case SparkSqlParser.FROM:
				_localctx = new FromStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1640;
				this.fromStatement();
				}
				break;
			case SparkSqlParser.TABLE:
				_localctx = new TableContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1641;
				this.match(SparkSqlParser.TABLE);
				this.state = 1642;
				this.multipartIdentifier();
				}
				break;
			case SparkSqlParser.VALUES:
				_localctx = new InlineTableDefault1Context(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1643;
				this.inlineTable();
				}
				break;
			case SparkSqlParser.T__0:
				_localctx = new SubqueryContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
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
	public sortItem(): SortItemContext {
		let _localctx: SortItemContext = new SortItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SparkSqlParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1650;
			this.expression();
			this.state = 1652;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
			case 1:
				{
				this.state = 1651;
				_localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.ASC || _la === SparkSqlParser.DESC)) {
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
			this.state = 1656;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
			case 1:
				{
				this.state = 1654;
				this.match(SparkSqlParser.NULLS);
				this.state = 1655;
				_localctx._nullOrder = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.FIRST || _la === SparkSqlParser.LAST)) {
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
	public fromStatement(): FromStatementContext {
		let _localctx: FromStatementContext = new FromStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SparkSqlParser.RULE_fromStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
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
				_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
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
	public fromStatementBody(): FromStatementBodyContext {
		let _localctx: FromStatementBodyContext = new FromStatementBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SparkSqlParser.RULE_fromStatementBody);
		try {
			let _alt: number;
			this.state = 1691;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 196, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1664;
				this.transformClause();
				this.state = 1666;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
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
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1670;
				this.selectClause();
				this.state = 1674;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 191, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 191, this._ctx);
				}
				this.state = 1678;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
				case 1:
					{
					this.state = 1677;
					this.whereClause();
					}
					break;
				}
				this.state = 1681;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 193, this._ctx) ) {
				case 1:
					{
					this.state = 1680;
					this.aggregationClause();
					}
					break;
				}
				this.state = 1684;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
				case 1:
					{
					this.state = 1683;
					this.havingClause();
					}
					break;
				}
				this.state = 1687;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 195, this._ctx) ) {
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
	public querySpecification(): QuerySpecificationContext {
		let _localctx: QuerySpecificationContext = new QuerySpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SparkSqlParser.RULE_querySpecification);
		try {
			let _alt: number;
			this.state = 1722;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				_localctx = new TransformQuerySpecificationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1693;
				this.transformClause();
				this.state = 1695;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
				case 1:
					{
					this.state = 1694;
					this.fromClause();
					}
					break;
				}
				this.state = 1698;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 198, this._ctx) ) {
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
				_localctx = new RegularQuerySpecificationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1700;
				this.selectClause();
				this.state = 1702;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
				case 1:
					{
					this.state = 1701;
					this.fromClause();
					}
					break;
				}
				this.state = 1707;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 200, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 200, this._ctx);
				}
				this.state = 1711;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 201, this._ctx) ) {
				case 1:
					{
					this.state = 1710;
					this.whereClause();
					}
					break;
				}
				this.state = 1714;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
				case 1:
					{
					this.state = 1713;
					this.aggregationClause();
					}
					break;
				}
				this.state = 1717;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
				case 1:
					{
					this.state = 1716;
					this.havingClause();
					}
					break;
				}
				this.state = 1720;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 204, this._ctx) ) {
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
	public transformClause(): TransformClauseContext {
		let _localctx: TransformClauseContext = new TransformClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, SparkSqlParser.RULE_transformClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1734;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SparkSqlParser.SELECT:
				{
				this.state = 1724;
				this.match(SparkSqlParser.SELECT);
				this.state = 1725;
				_localctx._kind = this.match(SparkSqlParser.TRANSFORM);
				this.state = 1726;
				this.match(SparkSqlParser.T__0);
				this.state = 1727;
				this.namedExpressionSeq();
				this.state = 1728;
				this.match(SparkSqlParser.T__1);
				}
				break;
			case SparkSqlParser.MAP:
				{
				this.state = 1730;
				_localctx._kind = this.match(SparkSqlParser.MAP);
				this.state = 1731;
				this.namedExpressionSeq();
				}
				break;
			case SparkSqlParser.REDUCE:
				{
				this.state = 1732;
				_localctx._kind = this.match(SparkSqlParser.REDUCE);
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
			if (_la === SparkSqlParser.ROW) {
				{
				this.state = 1736;
				_localctx._inRowFormat = this.rowFormat();
				}
			}

			this.state = 1741;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SparkSqlParser.RECORDWRITER) {
				{
				this.state = 1739;
				this.match(SparkSqlParser.RECORDWRITER);
				this.state = 1740;
				_localctx._recordWriter = this.match(SparkSqlParser.STRING);
				}
			}

			this.state = 1743;
			this.match(SparkSqlParser.USING);
			this.state = 1744;
			_localctx._script = this.match(SparkSqlParser.STRING);
			this.state = 1757;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				{
				this.state = 1745;
				this.match(SparkSqlParser.AS);
				this.state = 1755;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 210, this._ctx) ) {
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
					switch ( this.interpreter.adaptivePredict(this._input, 209, this._ctx) ) {
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
			switch ( this.interpreter.adaptivePredict(this._input, 212, this._ctx) ) {
			case 1:
				{
				this.state = 1759;
				_localctx._outRowFormat = this.rowFormat();
				}
				break;
			}
			this.state = 1764;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 213, this._ctx) ) {
			case 1:
				{
				this.state = 1762;
				this.match(SparkSqlParser.RECORDREADER);
				this.state = 1763;
				_localctx._recordReader = this.match(SparkSqlParser.STRING);
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
	public selectClause(): SelectClauseContext {
		let _localctx: SelectClauseContext = new SelectClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SparkSqlParser.RULE_selectClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1766;
			this.match(SparkSqlParser.SELECT);
			this.state = 1770;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1767;
					_localctx._hint = this.hint();
					_localctx._hints.push(_localctx._hint);
					}
					}
				}
				this.state = 1772;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
			}
			this.state = 1774;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 215, this._ctx) ) {
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
	public setClause(): SetClauseContext {
		let _localctx: SetClauseContext = new SetClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, SparkSqlParser.RULE_setClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1778;
			this.match(SparkSqlParser.SET);
			this.state = 1779;
			this.assignmentList();
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
	public matchedClause(): MatchedClauseContext {
		let _localctx: MatchedClauseContext = new MatchedClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, SparkSqlParser.RULE_matchedClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1781;
			this.match(SparkSqlParser.WHEN);
			this.state = 1782;
			this.match(SparkSqlParser.MATCHED);
			this.state = 1785;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SparkSqlParser.AND) {
				{
				this.state = 1783;
				this.match(SparkSqlParser.AND);
				this.state = 1784;
				_localctx._matchedCond = this.booleanExpression(0);
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
	public notMatchedClause(): NotMatchedClauseContext {
		let _localctx: NotMatchedClauseContext = new NotMatchedClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, SparkSqlParser.RULE_notMatchedClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
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
			if (_la === SparkSqlParser.AND) {
				{
				this.state = 1793;
				this.match(SparkSqlParser.AND);
				this.state = 1794;
				_localctx._notMatchedCond = this.booleanExpression(0);
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
	public matchedAction(): MatchedActionContext {
		let _localctx: MatchedActionContext = new MatchedActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, SparkSqlParser.RULE_matchedAction);
		try {
			this.state = 1807;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 218, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1800;
				this.match(SparkSqlParser.DELETE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
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
				this.enterOuterAlt(_localctx, 3);
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
	public notMatchedAction(): NotMatchedActionContext {
		let _localctx: NotMatchedActionContext = new NotMatchedActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, SparkSqlParser.RULE_notMatchedAction);
		let _la: number;
		try {
			this.state = 1827;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 220, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1809;
				this.match(SparkSqlParser.INSERT);
				this.state = 1810;
				this.match(SparkSqlParser.ASTERISK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1811;
				this.match(SparkSqlParser.INSERT);
				this.state = 1812;
				this.match(SparkSqlParser.T__0);
				this.state = 1813;
				_localctx._columns = this.multipartIdentifierList();
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
				while (_la === SparkSqlParser.T__2) {
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
	public assignmentList(): AssignmentListContext {
		let _localctx: AssignmentListContext = new AssignmentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, SparkSqlParser.RULE_assignmentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1829;
			this.assignment();
			this.state = 1834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SparkSqlParser.T__2) {
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, SparkSqlParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1837;
			_localctx._key = this.multipartIdentifier();
			this.state = 1838;
			this.match(SparkSqlParser.EQ);
			this.state = 1839;
			_localctx._value = this.expression();
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
		this.enterRule(_localctx, 114, SparkSqlParser.RULE_whereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1841;
			this.match(SparkSqlParser.WHERE);
			this.state = 1842;
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
	public havingClause(): HavingClauseContext {
		let _localctx: HavingClauseContext = new HavingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, SparkSqlParser.RULE_havingClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1844;
			this.match(SparkSqlParser.HAVING);
			this.state = 1845;
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
	public hint(): HintContext {
		let _localctx: HintContext = new HintContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, SparkSqlParser.RULE_hint);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1847;
			this.match(SparkSqlParser.T__4);
			this.state = 1848;
			_localctx._hintStatement = this.hintStatement();
			_localctx._hintStatements.push(_localctx._hintStatement);
			this.state = 1855;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1850;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 222, this._ctx) ) {
					case 1:
						{
						this.state = 1849;
						this.match(SparkSqlParser.T__2);
						}
						break;
					}
					this.state = 1852;
					_localctx._hintStatement = this.hintStatement();
					_localctx._hintStatements.push(_localctx._hintStatement);
					}
					}
				}
				this.state = 1857;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
			}
			this.state = 1858;
			this.match(SparkSqlParser.T__5);
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
	public hintStatement(): HintStatementContext {
		let _localctx: HintStatementContext = new HintStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, SparkSqlParser.RULE_hintStatement);
		let _la: number;
		try {
			this.state = 1873;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 225, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1860;
				_localctx._hintName = this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1861;
				_localctx._hintName = this.identifier();
				this.state = 1862;
				this.match(SparkSqlParser.T__0);
				this.state = 1863;
				_localctx._primaryExpression = this.primaryExpression(0);
				_localctx._parameters.push(_localctx._primaryExpression);
				this.state = 1868;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SparkSqlParser.T__2) {
					{
					{
					this.state = 1864;
					this.match(SparkSqlParser.T__2);
					this.state = 1865;
					_localctx._primaryExpression = this.primaryExpression(0);
					_localctx._parameters.push(_localctx._primaryExpression);
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
		this.enterRule(_localctx, 122, SparkSqlParser.RULE_fromClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1875;
			this.match(SparkSqlParser.FROM);
			this.state = 1876;
			this.relation();
			this.state = 1881;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
			}
			this.state = 1887;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 227, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 227, this._ctx);
			}
			this.state = 1891;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 228, this._ctx) ) {
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
	public aggregationClause(): AggregationClauseContext {
		let _localctx: AggregationClauseContext = new AggregationClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, SparkSqlParser.RULE_aggregationClause);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1937;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 233, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1893;
				this.match(SparkSqlParser.GROUP);
				this.state = 1894;
				this.match(SparkSqlParser.BY);
				this.state = 1895;
				_localctx._expression = this.expression();
				_localctx._groupingExpressions.push(_localctx._expression);
				this.state = 1900;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1896;
						this.match(SparkSqlParser.T__2);
						this.state = 1897;
						_localctx._expression = this.expression();
						_localctx._groupingExpressions.push(_localctx._expression);
						}
						}
					}
					this.state = 1902;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
				}
				this.state = 1920;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 231, this._ctx) ) {
				case 1:
					{
					this.state = 1903;
					this.match(SparkSqlParser.WITH);
					this.state = 1904;
					_localctx._kind = this.match(SparkSqlParser.ROLLUP);
					}
					break;

				case 2:
					{
					this.state = 1905;
					this.match(SparkSqlParser.WITH);
					this.state = 1906;
					_localctx._kind = this.match(SparkSqlParser.CUBE);
					}
					break;

				case 3:
					{
					this.state = 1907;
					_localctx._kind = this.match(SparkSqlParser.GROUPING);
					this.state = 1908;
					this.match(SparkSqlParser.SETS);
					this.state = 1909;
					this.match(SparkSqlParser.T__0);
					this.state = 1910;
					this.groupingSet();
					this.state = 1915;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SparkSqlParser.T__2) {
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
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1922;
				this.match(SparkSqlParser.GROUP);
				this.state = 1923;
				this.match(SparkSqlParser.BY);
				this.state = 1924;
				_localctx._kind = this.match(SparkSqlParser.GROUPING);
				this.state = 1925;
				this.match(SparkSqlParser.SETS);
				this.state = 1926;
				this.match(SparkSqlParser.T__0);
				this.state = 1927;
				this.groupingSet();
				this.state = 1932;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SparkSqlParser.T__2) {
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
	public groupingSet(): GroupingSetContext {
		let _localctx: GroupingSetContext = new GroupingSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, SparkSqlParser.RULE_groupingSet);
		let _la: number;
		try {
			this.state = 1952;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 236, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1939;
				this.match(SparkSqlParser.T__0);
				this.state = 1948;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 235, this._ctx) ) {
				case 1:
					{
					this.state = 1940;
					this.expression();
					this.state = 1945;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SparkSqlParser.T__2) {
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
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1951;
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
	public pivotClause(): PivotClauseContext {
		let _localctx: PivotClauseContext = new PivotClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, SparkSqlParser.RULE_pivotClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1954;
			this.match(SparkSqlParser.PIVOT);
			this.state = 1955;
			this.match(SparkSqlParser.T__0);
			this.state = 1956;
			_localctx._aggregates = this.namedExpressionSeq();
			this.state = 1957;
			this.match(SparkSqlParser.FOR);
			this.state = 1958;
			this.pivotColumn();
			this.state = 1959;
			this.match(SparkSqlParser.IN);
			this.state = 1960;
			this.match(SparkSqlParser.T__0);
			this.state = 1961;
			_localctx._pivotValue = this.pivotValue();
			_localctx._pivotValues.push(_localctx._pivotValue);
			this.state = 1966;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SparkSqlParser.T__2) {
				{
				{
				this.state = 1962;
				this.match(SparkSqlParser.T__2);
				this.state = 1963;
				_localctx._pivotValue = this.pivotValue();
				_localctx._pivotValues.push(_localctx._pivotValue);
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
	public pivotColumn(): PivotColumnContext {
		let _localctx: PivotColumnContext = new PivotColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, SparkSqlParser.RULE_pivotColumn);
		let _la: number;
		try {
			this.state = 1984;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 239, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1972;
				_localctx._identifier = this.identifier();
				_localctx._identifiers.push(_localctx._identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1973;
				this.match(SparkSqlParser.T__0);
				this.state = 1974;
				_localctx._identifier = this.identifier();
				_localctx._identifiers.push(_localctx._identifier);
				this.state = 1979;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SparkSqlParser.T__2) {
					{
					{
					this.state = 1975;
					this.match(SparkSqlParser.T__2);
					this.state = 1976;
					_localctx._identifier = this.identifier();
					_localctx._identifiers.push(_localctx._identifier);
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
	public pivotValue(): PivotValueContext {
		let _localctx: PivotValueContext = new PivotValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, SparkSqlParser.RULE_pivotValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1986;
			this.expression();
			this.state = 1991;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 241, this._ctx) ) {
			case 1:
				{
				this.state = 1988;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
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
	public lateralView(): LateralViewContext {
		let _localctx: LateralViewContext = new LateralViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, SparkSqlParser.RULE_lateralView);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1993;
			this.match(SparkSqlParser.LATERAL);
			this.state = 1994;
			this.match(SparkSqlParser.VIEW);
			this.state = 1996;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
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
			switch ( this.interpreter.adaptivePredict(this._input, 244, this._ctx) ) {
			case 1:
				{
				this.state = 2000;
				this.expression();
				this.state = 2005;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SparkSqlParser.T__2) {
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
			_localctx._tblName = this.identifier();
			this.state = 2023;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 247, this._ctx) ) {
			case 1:
				{
				this.state = 2013;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 245, this._ctx) ) {
				case 1:
					{
					this.state = 2012;
					this.match(SparkSqlParser.AS);
					}
					break;
				}
				this.state = 2015;
				_localctx._identifier = this.identifier();
				_localctx._colName.push(_localctx._identifier);
				this.state = 2020;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 246, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2016;
						this.match(SparkSqlParser.T__2);
						this.state = 2017;
						_localctx._identifier = this.identifier();
						_localctx._colName.push(_localctx._identifier);
						}
						}
					}
					this.state = 2022;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 246, this._ctx);
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
	public setQuantifier(): SetQuantifierContext {
		let _localctx: SetQuantifierContext = new SetQuantifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, SparkSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2025;
			_la = this._input.LA(1);
			if (!(_la === SparkSqlParser.ALL || _la === SparkSqlParser.DISTINCT)) {
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
	public relation(): RelationContext {
		let _localctx: RelationContext = new RelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, SparkSqlParser.RULE_relation);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2027;
			this.relationPrimary();
			this.state = 2031;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 248, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 248, this._ctx);
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
	public joinRelation(): JoinRelationContext {
		let _localctx: JoinRelationContext = new JoinRelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, SparkSqlParser.RULE_joinRelation);
		try {
			this.state = 2045;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SparkSqlParser.ANTI:
			case SparkSqlParser.CROSS:
			case SparkSqlParser.FULL:
			case SparkSqlParser.INNER:
			case SparkSqlParser.JOIN:
			case SparkSqlParser.LEFT:
			case SparkSqlParser.RIGHT:
			case SparkSqlParser.SEMI:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 2034;
				this.joinType();
				}
				this.state = 2035;
				this.match(SparkSqlParser.JOIN);
				this.state = 2036;
				_localctx._right = this.relationPrimary();
				this.state = 2038;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 249, this._ctx) ) {
				case 1:
					{
					this.state = 2037;
					this.joinCriteria();
					}
					break;
				}
				}
				break;
			case SparkSqlParser.NATURAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2040;
				this.match(SparkSqlParser.NATURAL);
				this.state = 2041;
				this.joinType();
				this.state = 2042;
				this.match(SparkSqlParser.JOIN);
				this.state = 2043;
				_localctx._right = this.relationPrimary();
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
	public joinType(): JoinTypeContext {
		let _localctx: JoinTypeContext = new JoinTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, SparkSqlParser.RULE_joinType);
		let _la: number;
		try {
			this.state = 2071;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2048;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.INNER) {
					{
					this.state = 2047;
					this.match(SparkSqlParser.INNER);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2050;
				this.match(SparkSqlParser.CROSS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2051;
				this.match(SparkSqlParser.LEFT);
				this.state = 2053;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.OUTER) {
					{
					this.state = 2052;
					this.match(SparkSqlParser.OUTER);
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2056;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.LEFT) {
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
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2059;
				this.match(SparkSqlParser.RIGHT);
				this.state = 2061;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.OUTER) {
					{
					this.state = 2060;
					this.match(SparkSqlParser.OUTER);
					}
				}

				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2063;
				this.match(SparkSqlParser.FULL);
				this.state = 2065;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.OUTER) {
					{
					this.state = 2064;
					this.match(SparkSqlParser.OUTER);
					}
				}

				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2068;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.LEFT) {
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
	public joinCriteria(): JoinCriteriaContext {
		let _localctx: JoinCriteriaContext = new JoinCriteriaContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, SparkSqlParser.RULE_joinCriteria);
		try {
			this.state = 2077;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SparkSqlParser.ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2073;
				this.match(SparkSqlParser.ON);
				this.state = 2074;
				this.booleanExpression(0);
				}
				break;
			case SparkSqlParser.USING:
				this.enterOuterAlt(_localctx, 2);
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
	public sample(): SampleContext {
		let _localctx: SampleContext = new SampleContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, SparkSqlParser.RULE_sample);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2079;
			this.match(SparkSqlParser.TABLESAMPLE);
			this.state = 2080;
			this.match(SparkSqlParser.T__0);
			this.state = 2082;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 259, this._ctx) ) {
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
	public sampleMethod(): SampleMethodContext {
		let _localctx: SampleMethodContext = new SampleMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, SparkSqlParser.RULE_sampleMethod);
		let _la: number;
		try {
			this.state = 2110;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 263, this._ctx) ) {
			case 1:
				_localctx = new SampleByPercentileContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2087;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.MINUS) {
					{
					this.state = 2086;
					(_localctx as SampleByPercentileContext)._negativeSign = this.match(SparkSqlParser.MINUS);
					}
				}

				this.state = 2089;
				(_localctx as SampleByPercentileContext)._percentage = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.INTEGER_VALUE || _la === SparkSqlParser.DECIMAL_VALUE)) {
					(_localctx as SampleByPercentileContext)._percentage = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2090;
				this.match(SparkSqlParser.PERCENTLIT);
				}
				break;

			case 2:
				_localctx = new SampleByRowsContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2091;
				this.expression();
				this.state = 2092;
				this.match(SparkSqlParser.ROWS);
				}
				break;

			case 3:
				_localctx = new SampleByBucketContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2094;
				(_localctx as SampleByBucketContext)._sampleType = this.match(SparkSqlParser.BUCKET);
				this.state = 2095;
				(_localctx as SampleByBucketContext)._numerator = this.match(SparkSqlParser.INTEGER_VALUE);
				this.state = 2096;
				this.match(SparkSqlParser.OUT);
				this.state = 2097;
				this.match(SparkSqlParser.OF);
				this.state = 2098;
				(_localctx as SampleByBucketContext)._denominator = this.match(SparkSqlParser.INTEGER_VALUE);
				this.state = 2107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.ON) {
					{
					this.state = 2099;
					this.match(SparkSqlParser.ON);
					this.state = 2105;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 261, this._ctx) ) {
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
				_localctx = new SampleByBytesContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2109;
				(_localctx as SampleByBytesContext)._bytes = this.expression();
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
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, SparkSqlParser.RULE_identifierList);
		try {
			this.enterOuterAlt(_localctx, 1);
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
		this.enterRule(_localctx, 152, SparkSqlParser.RULE_identifierSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2116;
			_localctx._errorCapturingIdentifier = this.errorCapturingIdentifier();
			_localctx._ident.push(_localctx._errorCapturingIdentifier);
			this.state = 2121;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 264, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2117;
					this.match(SparkSqlParser.T__2);
					this.state = 2118;
					_localctx._errorCapturingIdentifier = this.errorCapturingIdentifier();
					_localctx._ident.push(_localctx._errorCapturingIdentifier);
					}
					}
				}
				this.state = 2123;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 264, this._ctx);
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
	public orderedIdentifierList(): OrderedIdentifierListContext {
		let _localctx: OrderedIdentifierListContext = new OrderedIdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, SparkSqlParser.RULE_orderedIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2124;
			this.match(SparkSqlParser.T__0);
			this.state = 2125;
			this.orderedIdentifier();
			this.state = 2130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SparkSqlParser.T__2) {
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
	public orderedIdentifier(): OrderedIdentifierContext {
		let _localctx: OrderedIdentifierContext = new OrderedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, SparkSqlParser.RULE_orderedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2135;
			_localctx._ident = this.errorCapturingIdentifier();
			this.state = 2137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SparkSqlParser.ASC || _la === SparkSqlParser.DESC) {
				{
				this.state = 2136;
				_localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.ASC || _la === SparkSqlParser.DESC)) {
					_localctx._ordering = this._errHandler.recoverInline(this);
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
	public identifierCommentList(): IdentifierCommentListContext {
		let _localctx: IdentifierCommentListContext = new IdentifierCommentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, SparkSqlParser.RULE_identifierCommentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2139;
			this.match(SparkSqlParser.T__0);
			this.state = 2140;
			this.identifierComment();
			this.state = 2145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SparkSqlParser.T__2) {
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
	public identifierComment(): IdentifierCommentContext {
		let _localctx: IdentifierCommentContext = new IdentifierCommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, SparkSqlParser.RULE_identifierComment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2150;
			this.identifier();
			this.state = 2152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SparkSqlParser.COMMENT) {
				{
				this.state = 2151;
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
	public relationPrimary(): RelationPrimaryContext {
		let _localctx: RelationPrimaryContext = new RelationPrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, SparkSqlParser.RULE_relationPrimary);
		try {
			this.state = 2178;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 272, this._ctx) ) {
			case 1:
				_localctx = new TableNameContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2154;
				this.multipartIdentifier();
				this.state = 2156;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 269, this._ctx) ) {
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
				_localctx = new AliasedQueryContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2160;
				this.match(SparkSqlParser.T__0);
				this.state = 2161;
				this.query();
				this.state = 2162;
				this.match(SparkSqlParser.T__1);
				this.state = 2164;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 270, this._ctx) ) {
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
				_localctx = new AliasedRelationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2168;
				this.match(SparkSqlParser.T__0);
				this.state = 2169;
				this.relation();
				this.state = 2170;
				this.match(SparkSqlParser.T__1);
				this.state = 2172;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 271, this._ctx) ) {
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
				_localctx = new InlineTableDefault2Context(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2176;
				this.inlineTable();
				}
				break;

			case 5:
				_localctx = new TableValuedFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2177;
				this.functionTable();
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
	public inlineTable(): InlineTableContext {
		let _localctx: InlineTableContext = new InlineTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, SparkSqlParser.RULE_inlineTable);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2180;
			this.match(SparkSqlParser.VALUES);
			this.state = 2181;
			this.expression();
			this.state = 2186;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
			}
			this.state = 2189;
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
	public functionTable(): FunctionTableContext {
		let _localctx: FunctionTableContext = new FunctionTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, SparkSqlParser.RULE_functionTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2191;
			_localctx._funcName = this.errorCapturingIdentifier();
			this.state = 2192;
			this.match(SparkSqlParser.T__0);
			this.state = 2201;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 275, this._ctx) ) {
			case 1:
				{
				this.state = 2193;
				this.expression();
				this.state = 2198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SparkSqlParser.T__2) {
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
		this.enterRule(_localctx, 168, SparkSqlParser.RULE_tableAlias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2213;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 278, this._ctx) ) {
			case 1:
				{
				this.state = 2207;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 276, this._ctx) ) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 277, this._ctx) ) {
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
	public rowFormat(): RowFormatContext {
		let _localctx: RowFormatContext = new RowFormatContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, SparkSqlParser.RULE_rowFormat);
		try {
			this.state = 2264;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 286, this._ctx) ) {
			case 1:
				_localctx = new RowFormatSerdeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2215;
				this.match(SparkSqlParser.ROW);
				this.state = 2216;
				this.match(SparkSqlParser.FORMAT);
				this.state = 2217;
				this.match(SparkSqlParser.SERDE);
				this.state = 2218;
				(_localctx as RowFormatSerdeContext)._name = this.match(SparkSqlParser.STRING);
				this.state = 2222;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 279, this._ctx) ) {
				case 1:
					{
					this.state = 2219;
					this.match(SparkSqlParser.WITH);
					this.state = 2220;
					this.match(SparkSqlParser.SERDEPROPERTIES);
					this.state = 2221;
					(_localctx as RowFormatSerdeContext)._props = this.tablePropertyList();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new RowFormatDelimitedContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2224;
				this.match(SparkSqlParser.ROW);
				this.state = 2225;
				this.match(SparkSqlParser.FORMAT);
				this.state = 2226;
				this.match(SparkSqlParser.DELIMITED);
				this.state = 2236;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 281, this._ctx) ) {
				case 1:
					{
					this.state = 2227;
					this.match(SparkSqlParser.FIELDS);
					this.state = 2228;
					this.match(SparkSqlParser.TERMINATED);
					this.state = 2229;
					this.match(SparkSqlParser.BY);
					this.state = 2230;
					(_localctx as RowFormatDelimitedContext)._fieldsTerminatedBy = this.match(SparkSqlParser.STRING);
					this.state = 2234;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 280, this._ctx) ) {
					case 1:
						{
						this.state = 2231;
						this.match(SparkSqlParser.ESCAPED);
						this.state = 2232;
						this.match(SparkSqlParser.BY);
						this.state = 2233;
						(_localctx as RowFormatDelimitedContext)._escapedBy = this.match(SparkSqlParser.STRING);
						}
						break;
					}
					}
					break;
				}
				this.state = 2243;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 282, this._ctx) ) {
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
					(_localctx as RowFormatDelimitedContext)._collectionItemsTerminatedBy = this.match(SparkSqlParser.STRING);
					}
					break;
				}
				this.state = 2250;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 283, this._ctx) ) {
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
					(_localctx as RowFormatDelimitedContext)._keysTerminatedBy = this.match(SparkSqlParser.STRING);
					}
					break;
				}
				this.state = 2256;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 284, this._ctx) ) {
				case 1:
					{
					this.state = 2252;
					this.match(SparkSqlParser.LINES);
					this.state = 2253;
					this.match(SparkSqlParser.TERMINATED);
					this.state = 2254;
					this.match(SparkSqlParser.BY);
					this.state = 2255;
					(_localctx as RowFormatDelimitedContext)._linesSeparatedBy = this.match(SparkSqlParser.STRING);
					}
					break;
				}
				this.state = 2262;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 285, this._ctx) ) {
				case 1:
					{
					this.state = 2258;
					this.match(SparkSqlParser.NULL);
					this.state = 2259;
					this.match(SparkSqlParser.DEFINED);
					this.state = 2260;
					this.match(SparkSqlParser.AS);
					this.state = 2261;
					(_localctx as RowFormatDelimitedContext)._nullDefinedAs = this.match(SparkSqlParser.STRING);
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
	public multipartIdentifierList(): MultipartIdentifierListContext {
		let _localctx: MultipartIdentifierListContext = new MultipartIdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, SparkSqlParser.RULE_multipartIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2266;
			this.multipartIdentifier();
			this.state = 2271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SparkSqlParser.T__2) {
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
	public multipartIdentifier(): MultipartIdentifierContext {
		let _localctx: MultipartIdentifierContext = new MultipartIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, SparkSqlParser.RULE_multipartIdentifier);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2274;
			_localctx._errorCapturingIdentifier = this.errorCapturingIdentifier();
			_localctx._parts.push(_localctx._errorCapturingIdentifier);
			this.state = 2279;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 288, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2275;
					this.match(SparkSqlParser.T__3);
					this.state = 2276;
					_localctx._errorCapturingIdentifier = this.errorCapturingIdentifier();
					_localctx._parts.push(_localctx._errorCapturingIdentifier);
					}
					}
				}
				this.state = 2281;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 288, this._ctx);
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
	public tableIdentifier(): TableIdentifierContext {
		let _localctx: TableIdentifierContext = new TableIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, SparkSqlParser.RULE_tableIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 289, this._ctx) ) {
			case 1:
				{
				this.state = 2282;
				_localctx._db = this.errorCapturingIdentifier();
				this.state = 2283;
				this.match(SparkSqlParser.T__3);
				}
				break;
			}
			this.state = 2287;
			_localctx._table = this.errorCapturingIdentifier();
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
	public namedExpression(): NamedExpressionContext {
		let _localctx: NamedExpressionContext = new NamedExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, SparkSqlParser.RULE_namedExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2289;
			this.expression();
			this.state = 2297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 292, this._ctx) ) {
			case 1:
				{
				this.state = 2291;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 290, this._ctx) ) {
				case 1:
					{
					this.state = 2290;
					this.match(SparkSqlParser.AS);
					}
					break;
				}
				this.state = 2295;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 291, this._ctx) ) {
				case 1:
					{
					this.state = 2293;
					_localctx._name = this.errorCapturingIdentifier();
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
	public namedExpressionSeq(): NamedExpressionSeqContext {
		let _localctx: NamedExpressionSeqContext = new NamedExpressionSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, SparkSqlParser.RULE_namedExpressionSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2299;
			this.namedExpression();
			this.state = 2304;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 293, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 293, this._ctx);
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
	public transformList(): TransformListContext {
		let _localctx: TransformListContext = new TransformListContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, SparkSqlParser.RULE_transformList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2307;
			this.match(SparkSqlParser.T__0);
			this.state = 2308;
			_localctx._transform = this.transform();
			_localctx._transforms.push(_localctx._transform);
			this.state = 2313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SparkSqlParser.T__2) {
				{
				{
				this.state = 2309;
				this.match(SparkSqlParser.T__2);
				this.state = 2310;
				_localctx._transform = this.transform();
				_localctx._transforms.push(_localctx._transform);
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
		this.enterRule(_localctx, 184, SparkSqlParser.RULE_transform);
		let _la: number;
		try {
			this.state = 2331;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 296, this._ctx) ) {
			case 1:
				_localctx = new IdentityTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2318;
				this.qualifiedName();
				}
				break;

			case 2:
				_localctx = new ApplyTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2319;
				(_localctx as ApplyTransformContext)._transformName = this.identifier();
				this.state = 2320;
				this.match(SparkSqlParser.T__0);
				this.state = 2321;
				(_localctx as ApplyTransformContext)._transformArgument = this.transformArgument();
				(_localctx as ApplyTransformContext)._argument.push((_localctx as ApplyTransformContext)._transformArgument);
				this.state = 2326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SparkSqlParser.T__2) {
					{
					{
					this.state = 2322;
					this.match(SparkSqlParser.T__2);
					this.state = 2323;
					(_localctx as ApplyTransformContext)._transformArgument = this.transformArgument();
					(_localctx as ApplyTransformContext)._argument.push((_localctx as ApplyTransformContext)._transformArgument);
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
		this.enterRule(_localctx, 186, SparkSqlParser.RULE_transformArgument);
		try {
			this.state = 2335;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 297, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2333;
				this.qualifiedName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2334;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, SparkSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2337;
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
		let _startState: number = 190;
		this.enterRecursionRule(_localctx, 190, SparkSqlParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2351;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 299, this._ctx) ) {
			case 1:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2340;
				this.match(SparkSqlParser.NOT);
				this.state = 2341;
				this.booleanExpression(5);
				}
				break;

			case 2:
				{
				_localctx = new ExistsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				_localctx = new PredicatedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2347;
				this.valueExpression(0);
				this.state = 2349;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 298, this._ctx) ) {
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
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2361;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 301, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2359;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 300, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SparkSqlParser.RULE_booleanExpression);
						this.state = 2353;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2354;
						(_localctx as LogicalBinaryContext)._operator = this.match(SparkSqlParser.AND);
						this.state = 2355;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SparkSqlParser.RULE_booleanExpression);
						this.state = 2356;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2357;
						(_localctx as LogicalBinaryContext)._operator = this.match(SparkSqlParser.OR);
						this.state = 2358;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 2363;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 301, this._ctx);
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
		this.enterRule(_localctx, 192, SparkSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 2446;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 315, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.NOT) {
					{
					this.state = 2364;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2367;
				_localctx._kind = this.match(SparkSqlParser.BETWEEN);
				this.state = 2368;
				_localctx._lower = this.valueExpression(0);
				this.state = 2369;
				this.match(SparkSqlParser.AND);
				this.state = 2370;
				_localctx._upper = this.valueExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.NOT) {
					{
					this.state = 2372;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2375;
				_localctx._kind = this.match(SparkSqlParser.IN);
				this.state = 2376;
				this.match(SparkSqlParser.T__0);
				this.state = 2377;
				this.expression();
				this.state = 2382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SparkSqlParser.T__2) {
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
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.NOT) {
					{
					this.state = 2387;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2390;
				_localctx._kind = this.match(SparkSqlParser.IN);
				this.state = 2391;
				this.match(SparkSqlParser.T__0);
				this.state = 2392;
				this.query();
				this.state = 2393;
				this.match(SparkSqlParser.T__1);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.NOT) {
					{
					this.state = 2395;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2398;
				_localctx._kind = this.match(SparkSqlParser.RLIKE);
				this.state = 2399;
				_localctx._pattern = this.valueExpression(0);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.NOT) {
					{
					this.state = 2400;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2403;
				_localctx._kind = this.match(SparkSqlParser.LIKE);
				this.state = 2404;
				_localctx._quantifier = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.ALL || _la === SparkSqlParser.ANY || _la === SparkSqlParser.SOME)) {
					_localctx._quantifier = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2418;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 309, this._ctx) ) {
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
					while (_la === SparkSqlParser.T__2) {
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
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.NOT) {
					{
					this.state = 2420;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2423;
				_localctx._kind = this.match(SparkSqlParser.LIKE);
				this.state = 2424;
				_localctx._pattern = this.valueExpression(0);
				this.state = 2427;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 311, this._ctx) ) {
				case 1:
					{
					this.state = 2425;
					this.match(SparkSqlParser.ESCAPE);
					this.state = 2426;
					_localctx._escapeChar = this.match(SparkSqlParser.STRING);
					}
					break;
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2429;
				this.match(SparkSqlParser.IS);
				this.state = 2431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.NOT) {
					{
					this.state = 2430;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2433;
				_localctx._kind = this.match(SparkSqlParser.NULL);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2434;
				this.match(SparkSqlParser.IS);
				this.state = 2436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.NOT) {
					{
					this.state = 2435;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2438;
				_localctx._kind = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.FALSE || _la === SparkSqlParser.TRUE || _la === SparkSqlParser.UNKNOWN)) {
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

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2439;
				this.match(SparkSqlParser.IS);
				this.state = 2441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.NOT) {
					{
					this.state = 2440;
					this.match(SparkSqlParser.NOT);
					}
				}

				this.state = 2443;
				_localctx._kind = this.match(SparkSqlParser.DISTINCT);
				this.state = 2444;
				this.match(SparkSqlParser.FROM);
				this.state = 2445;
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
		let _startState: number = 194;
		this.enterRecursionRule(_localctx, 194, SparkSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2452;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 316, this._ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2449;
				this.primaryExpression(0);
				}
				break;

			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2450;
				(_localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & ((1 << (SparkSqlParser.PLUS - 268)) | (1 << (SparkSqlParser.MINUS - 268)) | (1 << (SparkSqlParser.TILDE - 268)))) !== 0))) {
					(_localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2451;
				this.valueExpression(7);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2475;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 318, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2473;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 317, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SparkSqlParser.RULE_valueExpression);
						this.state = 2454;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 2455;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === SparkSqlParser.DIV || ((((_la - 270)) & ~0x1F) === 0 && ((1 << (_la - 270)) & ((1 << (SparkSqlParser.ASTERISK - 270)) | (1 << (SparkSqlParser.SLASH - 270)) | (1 << (SparkSqlParser.PERCENT - 270)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 2456;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SparkSqlParser.RULE_valueExpression);
						this.state = 2457;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 2458;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & ((1 << (SparkSqlParser.PLUS - 268)) | (1 << (SparkSqlParser.MINUS - 268)) | (1 << (SparkSqlParser.CONCAT_PIPE - 268)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 2459;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
						}
						break;

					case 3:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SparkSqlParser.RULE_valueExpression);
						this.state = 2460;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 2461;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(SparkSqlParser.AMPERSAND);
						this.state = 2462;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
						}
						break;

					case 4:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SparkSqlParser.RULE_valueExpression);
						this.state = 2463;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2464;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(SparkSqlParser.HAT);
						this.state = 2465;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;

					case 5:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SparkSqlParser.RULE_valueExpression);
						this.state = 2466;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2467;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(SparkSqlParser.PIPE);
						this.state = 2468;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;

					case 6:
						{
						_localctx = new ComparisonContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SparkSqlParser.RULE_valueExpression);
						this.state = 2469;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2470;
						this.comparisonOperator();
						this.state = 2471;
						(_localctx as ComparisonContext)._right = this.valueExpression(2);
						}
						break;
					}
					}
				}
				this.state = 2477;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 318, this._ctx);
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
		let _startState: number = 196;
		this.enterRecursionRule(_localctx, 196, SparkSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2662;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 338, this._ctx) ) {
			case 1:
				{
				_localctx = new CurrentDatetimeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2479;
				(_localctx as CurrentDatetimeContext)._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.CURRENT_DATE || _la === SparkSqlParser.CURRENT_TIMESTAMP)) {
					(_localctx as CurrentDatetimeContext)._name = this._errHandler.recoverInline(this);
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
				{
				_localctx = new SearchedCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				} while (_la === SparkSqlParser.WHEN);
				this.state = 2488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.ELSE) {
					{
					this.state = 2486;
					this.match(SparkSqlParser.ELSE);
					this.state = 2487;
					(_localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2490;
				this.match(SparkSqlParser.END);
				}
				break;

			case 3:
				{
				_localctx = new SimpleCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2492;
				this.match(SparkSqlParser.CASE);
				this.state = 2493;
				(_localctx as SimpleCaseContext)._value = this.expression();
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
				} while (_la === SparkSqlParser.WHEN);
				this.state = 2501;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.ELSE) {
					{
					this.state = 2499;
					this.match(SparkSqlParser.ELSE);
					this.state = 2500;
					(_localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2503;
				this.match(SparkSqlParser.END);
				}
				break;

			case 4:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				_localctx = new StructContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2512;
				this.match(SparkSqlParser.STRUCT);
				this.state = 2513;
				this.match(SparkSqlParser.T__0);
				this.state = 2522;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 324, this._ctx) ) {
				case 1:
					{
					this.state = 2514;
					(_localctx as StructContext)._namedExpression = this.namedExpression();
					(_localctx as StructContext)._argument.push((_localctx as StructContext)._namedExpression);
					this.state = 2519;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SparkSqlParser.T__2) {
						{
						{
						this.state = 2515;
						this.match(SparkSqlParser.T__2);
						this.state = 2516;
						(_localctx as StructContext)._namedExpression = this.namedExpression();
						(_localctx as StructContext)._argument.push((_localctx as StructContext)._namedExpression);
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
				_localctx = new FirstContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2525;
				this.match(SparkSqlParser.FIRST);
				this.state = 2526;
				this.match(SparkSqlParser.T__0);
				this.state = 2527;
				this.expression();
				this.state = 2530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.IGNORE) {
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
				_localctx = new LastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2534;
				this.match(SparkSqlParser.LAST);
				this.state = 2535;
				this.match(SparkSqlParser.T__0);
				this.state = 2536;
				this.expression();
				this.state = 2539;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.IGNORE) {
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
				_localctx = new PositionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2543;
				this.match(SparkSqlParser.POSITION);
				this.state = 2544;
				this.match(SparkSqlParser.T__0);
				this.state = 2545;
				(_localctx as PositionContext)._substr = this.valueExpression(0);
				this.state = 2546;
				this.match(SparkSqlParser.IN);
				this.state = 2547;
				(_localctx as PositionContext)._str = this.valueExpression(0);
				this.state = 2548;
				this.match(SparkSqlParser.T__1);
				}
				break;

			case 9:
				{
				_localctx = new ConstantDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2550;
				this.constant();
				}
				break;

			case 10:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2551;
				this.match(SparkSqlParser.ASTERISK);
				}
				break;

			case 11:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				_localctx = new RowConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				} while (_la === SparkSqlParser.T__2);
				this.state = 2564;
				this.match(SparkSqlParser.T__1);
				}
				break;

			case 13:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2570;
				this.functionName();
				this.state = 2571;
				this.match(SparkSqlParser.T__0);
				this.state = 2583;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 330, this._ctx) ) {
				case 1:
					{
					this.state = 2573;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 328, this._ctx) ) {
					case 1:
						{
						this.state = 2572;
						this.setQuantifier();
						}
						break;
					}
					this.state = 2575;
					(_localctx as FunctionCallContext)._expression = this.expression();
					(_localctx as FunctionCallContext)._argument.push((_localctx as FunctionCallContext)._expression);
					this.state = 2580;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SparkSqlParser.T__2) {
						{
						{
						this.state = 2576;
						this.match(SparkSqlParser.T__2);
						this.state = 2577;
						(_localctx as FunctionCallContext)._expression = this.expression();
						(_localctx as FunctionCallContext)._argument.push((_localctx as FunctionCallContext)._expression);
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
				switch ( this.interpreter.adaptivePredict(this._input, 331, this._ctx) ) {
				case 1:
					{
					this.state = 2586;
					this.match(SparkSqlParser.FILTER);
					this.state = 2587;
					this.match(SparkSqlParser.T__0);
					this.state = 2588;
					this.match(SparkSqlParser.WHERE);
					this.state = 2589;
					(_localctx as FunctionCallContext)._where = this.booleanExpression(0);
					this.state = 2590;
					this.match(SparkSqlParser.T__1);
					}
					break;
				}
				this.state = 2596;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 332, this._ctx) ) {
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
				_localctx = new LambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				_localctx = new LambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				} while (_la === SparkSqlParser.T__2);
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
				_localctx = new ColumnReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2614;
				this.identifier();
				}
				break;

			case 18:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				_localctx = new ExtractContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2619;
				this.match(SparkSqlParser.EXTRACT);
				this.state = 2620;
				this.match(SparkSqlParser.T__0);
				this.state = 2621;
				(_localctx as ExtractContext)._field = this.identifier();
				this.state = 2622;
				this.match(SparkSqlParser.FROM);
				this.state = 2623;
				(_localctx as ExtractContext)._source = this.valueExpression(0);
				this.state = 2624;
				this.match(SparkSqlParser.T__1);
				}
				break;

			case 20:
				{
				_localctx = new SubstringContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2626;
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.SUBSTR || _la === SparkSqlParser.SUBSTRING)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2627;
				this.match(SparkSqlParser.T__0);
				this.state = 2628;
				(_localctx as SubstringContext)._str = this.valueExpression(0);
				this.state = 2629;
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.T__2 || _la === SparkSqlParser.FROM)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2630;
				(_localctx as SubstringContext)._pos = this.valueExpression(0);
				this.state = 2633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.T__2 || _la === SparkSqlParser.FOR) {
					{
					this.state = 2631;
					_la = this._input.LA(1);
					if (!(_la === SparkSqlParser.T__2 || _la === SparkSqlParser.FOR)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 2632;
					(_localctx as SubstringContext)._len = this.valueExpression(0);
					}
				}

				this.state = 2635;
				this.match(SparkSqlParser.T__1);
				}
				break;

			case 21:
				{
				_localctx = new TrimContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2637;
				this.match(SparkSqlParser.TRIM);
				this.state = 2638;
				this.match(SparkSqlParser.T__0);
				this.state = 2640;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 335, this._ctx) ) {
				case 1:
					{
					this.state = 2639;
					(_localctx as TrimContext)._trimOption = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === SparkSqlParser.BOTH || _la === SparkSqlParser.LEADING || _la === SparkSqlParser.TRAILING)) {
						(_localctx as TrimContext)._trimOption = this._errHandler.recoverInline(this);
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
				this.state = 2643;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 336, this._ctx) ) {
				case 1:
					{
					this.state = 2642;
					(_localctx as TrimContext)._trimStr = this.valueExpression(0);
					}
					break;
				}
				this.state = 2645;
				this.match(SparkSqlParser.FROM);
				this.state = 2646;
				(_localctx as TrimContext)._srcStr = this.valueExpression(0);
				this.state = 2647;
				this.match(SparkSqlParser.T__1);
				}
				break;

			case 22:
				{
				_localctx = new OverlayContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2649;
				this.match(SparkSqlParser.OVERLAY);
				this.state = 2650;
				this.match(SparkSqlParser.T__0);
				this.state = 2651;
				(_localctx as OverlayContext)._input = this.valueExpression(0);
				this.state = 2652;
				this.match(SparkSqlParser.PLACING);
				this.state = 2653;
				(_localctx as OverlayContext)._replace = this.valueExpression(0);
				this.state = 2654;
				this.match(SparkSqlParser.FROM);
				this.state = 2655;
				(_localctx as OverlayContext)._position = this.valueExpression(0);
				this.state = 2658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.FOR) {
					{
					this.state = 2656;
					this.match(SparkSqlParser.FOR);
					this.state = 2657;
					(_localctx as OverlayContext)._length = this.valueExpression(0);
					}
				}

				this.state = 2660;
				this.match(SparkSqlParser.T__1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2674;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 340, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2672;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 339, this._ctx) ) {
					case 1:
						{
						_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as SubscriptContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SparkSqlParser.RULE_primaryExpression);
						this.state = 2664;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 2665;
						this.match(SparkSqlParser.T__7);
						this.state = 2666;
						(_localctx as SubscriptContext)._index = this.valueExpression(0);
						this.state = 2667;
						this.match(SparkSqlParser.T__8);
						}
						break;

					case 2:
						{
						_localctx = new DereferenceContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as DereferenceContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SparkSqlParser.RULE_primaryExpression);
						this.state = 2669;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 2670;
						this.match(SparkSqlParser.T__3);
						this.state = 2671;
						(_localctx as DereferenceContext)._fieldName = this.identifier();
						}
						break;
					}
					}
				}
				this.state = 2676;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 340, this._ctx);
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
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, SparkSqlParser.RULE_constant);
		try {
			let _alt: number;
			this.state = 2689;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 342, this._ctx) ) {
			case 1:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2677;
				this.match(SparkSqlParser.NULL);
				}
				break;

			case 2:
				_localctx = new IntervalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2678;
				this.interval();
				}
				break;

			case 3:
				_localctx = new TypeConstructorContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2679;
				this.identifier();
				this.state = 2680;
				this.match(SparkSqlParser.STRING);
				}
				break;

			case 4:
				_localctx = new NumericLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2682;
				this.number();
				}
				break;

			case 5:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2683;
				this.booleanValue();
				}
				break;

			case 6:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
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
					_alt = this.interpreter.adaptivePredict(this._input, 341, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, SparkSqlParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2691;
			_la = this._input.LA(1);
			if (!(((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (SparkSqlParser.EQ - 260)) | (1 << (SparkSqlParser.NSEQ - 260)) | (1 << (SparkSqlParser.NEQ - 260)) | (1 << (SparkSqlParser.NEQJ - 260)) | (1 << (SparkSqlParser.LT - 260)) | (1 << (SparkSqlParser.LTE - 260)) | (1 << (SparkSqlParser.GT - 260)) | (1 << (SparkSqlParser.GTE - 260)))) !== 0))) {
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
	public arithmeticOperator(): ArithmeticOperatorContext {
		let _localctx: ArithmeticOperatorContext = new ArithmeticOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, SparkSqlParser.RULE_arithmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2693;
			_la = this._input.LA(1);
			if (!(_la === SparkSqlParser.DIV || ((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & ((1 << (SparkSqlParser.PLUS - 268)) | (1 << (SparkSqlParser.MINUS - 268)) | (1 << (SparkSqlParser.ASTERISK - 268)) | (1 << (SparkSqlParser.SLASH - 268)) | (1 << (SparkSqlParser.PERCENT - 268)) | (1 << (SparkSqlParser.TILDE - 268)) | (1 << (SparkSqlParser.AMPERSAND - 268)) | (1 << (SparkSqlParser.PIPE - 268)) | (1 << (SparkSqlParser.CONCAT_PIPE - 268)) | (1 << (SparkSqlParser.HAT - 268)))) !== 0))) {
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
	public predicateOperator(): PredicateOperatorContext {
		let _localctx: PredicateOperatorContext = new PredicateOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, SparkSqlParser.RULE_predicateOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2695;
			_la = this._input.LA(1);
			if (!(_la === SparkSqlParser.AND || _la === SparkSqlParser.IN || _la === SparkSqlParser.NOT || _la === SparkSqlParser.OR)) {
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
	public booleanValue(): BooleanValueContext {
		let _localctx: BooleanValueContext = new BooleanValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, SparkSqlParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2697;
			_la = this._input.LA(1);
			if (!(_la === SparkSqlParser.FALSE || _la === SparkSqlParser.TRUE)) {
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
	public interval(): IntervalContext {
		let _localctx: IntervalContext = new IntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, SparkSqlParser.RULE_interval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2699;
			this.match(SparkSqlParser.INTERVAL);
			this.state = 2702;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 343, this._ctx) ) {
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
		this.enterRule(_localctx, 210, SparkSqlParser.RULE_errorCapturingMultiUnitsInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2704;
			this.multiUnitsInterval();
			this.state = 2706;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 344, this._ctx) ) {
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
		this.enterRule(_localctx, 212, SparkSqlParser.RULE_multiUnitsInterval);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
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
					_localctx._identifier = this.identifier();
					_localctx._unit.push(_localctx._identifier);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2713;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 345, this._ctx);
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
		this.enterRule(_localctx, 214, SparkSqlParser.RULE_errorCapturingUnitToUnitInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2715;
			_localctx._body = this.unitToUnitInterval();
			this.state = 2718;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 346, this._ctx) ) {
			case 1:
				{
				this.state = 2716;
				_localctx._error1 = this.multiUnitsInterval();
				}
				break;

			case 2:
				{
				this.state = 2717;
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
		this.enterRule(_localctx, 216, SparkSqlParser.RULE_unitToUnitInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2720;
			_localctx._value = this.intervalValue();
			this.state = 2721;
			_localctx._from = this.identifier();
			this.state = 2722;
			this.match(SparkSqlParser.TO);
			this.state = 2723;
			_localctx._to = this.identifier();
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
		this.enterRule(_localctx, 218, SparkSqlParser.RULE_intervalValue);
		let _la: number;
		try {
			this.state = 2730;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SparkSqlParser.PLUS:
			case SparkSqlParser.MINUS:
			case SparkSqlParser.INTEGER_VALUE:
			case SparkSqlParser.DECIMAL_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2726;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.PLUS || _la === SparkSqlParser.MINUS) {
					{
					this.state = 2725;
					_la = this._input.LA(1);
					if (!(_la === SparkSqlParser.PLUS || _la === SparkSqlParser.MINUS)) {
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

				this.state = 2728;
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.INTEGER_VALUE || _la === SparkSqlParser.DECIMAL_VALUE)) {
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
			case SparkSqlParser.STRING:
				this.enterOuterAlt(_localctx, 2);
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
	public colPosition(): ColPositionContext {
		let _localctx: ColPositionContext = new ColPositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, SparkSqlParser.RULE_colPosition);
		try {
			this.state = 2735;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SparkSqlParser.FIRST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2732;
				_localctx._position = this.match(SparkSqlParser.FIRST);
				}
				break;
			case SparkSqlParser.AFTER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2733;
				_localctx._position = this.match(SparkSqlParser.AFTER);
				this.state = 2734;
				_localctx._afterCol = this.errorCapturingIdentifier();
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
	public dataType(): DataTypeContext {
		let _localctx: DataTypeContext = new DataTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, SparkSqlParser.RULE_dataType);
		let _la: number;
		try {
			this.state = 2771;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 354, this._ctx) ) {
			case 1:
				_localctx = new ComplexDataTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2737;
				(_localctx as ComplexDataTypeContext)._complex = this.match(SparkSqlParser.ARRAY);
				this.state = 2738;
				this.match(SparkSqlParser.LT);
				this.state = 2739;
				this.dataType();
				this.state = 2740;
				this.match(SparkSqlParser.GT);
				}
				break;

			case 2:
				_localctx = new ComplexDataTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2742;
				(_localctx as ComplexDataTypeContext)._complex = this.match(SparkSqlParser.MAP);
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
				_localctx = new ComplexDataTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2749;
				(_localctx as ComplexDataTypeContext)._complex = this.match(SparkSqlParser.STRUCT);
				this.state = 2756;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SparkSqlParser.LT:
					{
					this.state = 2750;
					this.match(SparkSqlParser.LT);
					this.state = 2752;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 350, this._ctx) ) {
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
				case SparkSqlParser.NEQ:
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
				_localctx = new PrimitiveDataTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2758;
				this.identifier();
				this.state = 2769;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 353, this._ctx) ) {
				case 1:
					{
					this.state = 2759;
					this.match(SparkSqlParser.T__0);
					this.state = 2760;
					this.match(SparkSqlParser.INTEGER_VALUE);
					this.state = 2765;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SparkSqlParser.T__2) {
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
	public qualifiedColTypeWithPositionList(): QualifiedColTypeWithPositionListContext {
		let _localctx: QualifiedColTypeWithPositionListContext = new QualifiedColTypeWithPositionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, SparkSqlParser.RULE_qualifiedColTypeWithPositionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2773;
			this.qualifiedColTypeWithPosition();
			this.state = 2778;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SparkSqlParser.T__2) {
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
	public qualifiedColTypeWithPosition(): QualifiedColTypeWithPositionContext {
		let _localctx: QualifiedColTypeWithPositionContext = new QualifiedColTypeWithPositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, SparkSqlParser.RULE_qualifiedColTypeWithPosition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2781;
			_localctx._name = this.multipartIdentifier();
			this.state = 2782;
			this.dataType();
			this.state = 2785;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SparkSqlParser.NOT) {
				{
				this.state = 2783;
				this.match(SparkSqlParser.NOT);
				this.state = 2784;
				this.match(SparkSqlParser.NULL);
				}
			}

			this.state = 2788;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 357, this._ctx) ) {
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
			if (_la === SparkSqlParser.AFTER || _la === SparkSqlParser.FIRST) {
				{
				this.state = 2790;
				this.colPosition();
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
	public colTypeList(): ColTypeListContext {
		let _localctx: ColTypeListContext = new ColTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, SparkSqlParser.RULE_colTypeList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2793;
			this.colType();
			this.state = 2798;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 359, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 359, this._ctx);
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
	public colType(): ColTypeContext {
		let _localctx: ColTypeContext = new ColTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, SparkSqlParser.RULE_colType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2801;
			_localctx._colName = this.errorCapturingIdentifier();
			this.state = 2802;
			this.dataType();
			this.state = 2805;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 360, this._ctx) ) {
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
			switch ( this.interpreter.adaptivePredict(this._input, 361, this._ctx) ) {
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
	public complexColTypeList(): ComplexColTypeListContext {
		let _localctx: ComplexColTypeListContext = new ComplexColTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, SparkSqlParser.RULE_complexColTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2810;
			this.complexColType();
			this.state = 2815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SparkSqlParser.T__2) {
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
	public complexColType(): ComplexColTypeContext {
		let _localctx: ComplexColTypeContext = new ComplexColTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, SparkSqlParser.RULE_complexColType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
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
			if (_la === SparkSqlParser.NOT) {
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
			if (_la === SparkSqlParser.COMMENT) {
				{
				this.state = 2825;
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
	public whenClause(): WhenClauseContext {
		let _localctx: WhenClauseContext = new WhenClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, SparkSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2828;
			this.match(SparkSqlParser.WHEN);
			this.state = 2829;
			_localctx._condition = this.expression();
			this.state = 2830;
			this.match(SparkSqlParser.THEN);
			this.state = 2831;
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
	public windowClause(): WindowClauseContext {
		let _localctx: WindowClauseContext = new WindowClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, SparkSqlParser.RULE_windowClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2833;
			this.match(SparkSqlParser.WINDOW);
			this.state = 2834;
			this.namedWindow();
			this.state = 2839;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 365, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 365, this._ctx);
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
		this.enterRule(_localctx, 240, SparkSqlParser.RULE_namedWindow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2842;
			_localctx._name = this.errorCapturingIdentifier();
			this.state = 2843;
			this.match(SparkSqlParser.AS);
			this.state = 2844;
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
		this.enterRule(_localctx, 242, SparkSqlParser.RULE_windowSpec);
		let _la: number;
		try {
			this.state = 2892;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 373, this._ctx) ) {
			case 1:
				_localctx = new WindowRefContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2846;
				(_localctx as WindowRefContext)._name = this.errorCapturingIdentifier();
				}
				break;

			case 2:
				_localctx = new WindowRefContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2847;
				this.match(SparkSqlParser.T__0);
				this.state = 2848;
				(_localctx as WindowRefContext)._name = this.errorCapturingIdentifier();
				this.state = 2849;
				this.match(SparkSqlParser.T__1);
				}
				break;

			case 3:
				_localctx = new WindowDefContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2851;
				this.match(SparkSqlParser.T__0);
				this.state = 2886;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SparkSqlParser.CLUSTER:
					{
					this.state = 2852;
					this.match(SparkSqlParser.CLUSTER);
					this.state = 2853;
					this.match(SparkSqlParser.BY);
					this.state = 2854;
					(_localctx as WindowDefContext)._expression = this.expression();
					(_localctx as WindowDefContext)._partition.push((_localctx as WindowDefContext)._expression);
					this.state = 2859;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SparkSqlParser.T__2) {
						{
						{
						this.state = 2855;
						this.match(SparkSqlParser.T__2);
						this.state = 2856;
						(_localctx as WindowDefContext)._expression = this.expression();
						(_localctx as WindowDefContext)._partition.push((_localctx as WindowDefContext)._expression);
						}
						}
						this.state = 2861;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case SparkSqlParser.T__1:
				case SparkSqlParser.DISTRIBUTE:
				case SparkSqlParser.ORDER:
				case SparkSqlParser.PARTITION:
				case SparkSqlParser.RANGE:
				case SparkSqlParser.ROWS:
				case SparkSqlParser.SORT:
					{
					this.state = 2872;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SparkSqlParser.DISTRIBUTE || _la === SparkSqlParser.PARTITION) {
						{
						this.state = 2862;
						_la = this._input.LA(1);
						if (!(_la === SparkSqlParser.DISTRIBUTE || _la === SparkSqlParser.PARTITION)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 2863;
						this.match(SparkSqlParser.BY);
						this.state = 2864;
						(_localctx as WindowDefContext)._expression = this.expression();
						(_localctx as WindowDefContext)._partition.push((_localctx as WindowDefContext)._expression);
						this.state = 2869;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === SparkSqlParser.T__2) {
							{
							{
							this.state = 2865;
							this.match(SparkSqlParser.T__2);
							this.state = 2866;
							(_localctx as WindowDefContext)._expression = this.expression();
							(_localctx as WindowDefContext)._partition.push((_localctx as WindowDefContext)._expression);
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
					if (_la === SparkSqlParser.ORDER || _la === SparkSqlParser.SORT) {
						{
						this.state = 2874;
						_la = this._input.LA(1);
						if (!(_la === SparkSqlParser.ORDER || _la === SparkSqlParser.SORT)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

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
						while (_la === SparkSqlParser.T__2) {
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
				if (_la === SparkSqlParser.RANGE || _la === SparkSqlParser.ROWS) {
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
		this.enterRule(_localctx, 244, SparkSqlParser.RULE_windowFrame);
		try {
			this.state = 2910;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 374, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2894;
				_localctx._frameType = this.match(SparkSqlParser.RANGE);
				this.state = 2895;
				_localctx._frameStart = this.frameBound();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2896;
				_localctx._frameType = this.match(SparkSqlParser.ROWS);
				this.state = 2897;
				_localctx._frameStart = this.frameBound();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2898;
				_localctx._frameType = this.match(SparkSqlParser.RANGE);
				this.state = 2899;
				this.match(SparkSqlParser.BETWEEN);
				this.state = 2900;
				_localctx._frameStart = this.frameBound();
				this.state = 2901;
				this.match(SparkSqlParser.AND);
				this.state = 2902;
				_localctx._end = this.frameBound();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2904;
				_localctx._frameType = this.match(SparkSqlParser.ROWS);
				this.state = 2905;
				this.match(SparkSqlParser.BETWEEN);
				this.state = 2906;
				_localctx._frameStart = this.frameBound();
				this.state = 2907;
				this.match(SparkSqlParser.AND);
				this.state = 2908;
				_localctx._end = this.frameBound();
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
	public frameBound(): FrameBoundContext {
		let _localctx: FrameBoundContext = new FrameBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, SparkSqlParser.RULE_frameBound);
		let _la: number;
		try {
			this.state = 2919;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 375, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2912;
				this.match(SparkSqlParser.UNBOUNDED);
				this.state = 2913;
				_localctx._boundType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.FOLLOWING || _la === SparkSqlParser.PRECEDING)) {
					_localctx._boundType = this._errHandler.recoverInline(this);
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
				this.state = 2914;
				_localctx._boundType = this.match(SparkSqlParser.CURRENT);
				this.state = 2915;
				this.match(SparkSqlParser.ROW);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2916;
				this.expression();
				this.state = 2917;
				_localctx._boundType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.FOLLOWING || _la === SparkSqlParser.PRECEDING)) {
					_localctx._boundType = this._errHandler.recoverInline(this);
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
	public qualifiedNameList(): QualifiedNameListContext {
		let _localctx: QualifiedNameListContext = new QualifiedNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, SparkSqlParser.RULE_qualifiedNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2921;
			this.qualifiedName();
			this.state = 2926;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SparkSqlParser.T__2) {
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
	public functionName(): FunctionNameContext {
		let _localctx: FunctionNameContext = new FunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, SparkSqlParser.RULE_functionName);
		try {
			this.state = 2933;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 377, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2929;
				this.qualifiedName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2930;
				this.match(SparkSqlParser.FILTER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2931;
				this.match(SparkSqlParser.LEFT);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2932;
				this.match(SparkSqlParser.RIGHT);
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
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, SparkSqlParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2935;
			this.identifier();
			this.state = 2940;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 378, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 378, this._ctx);
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
		this.enterRule(_localctx, 254, SparkSqlParser.RULE_errorCapturingIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2943;
			this.identifier();
			this.state = 2944;
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
		this.enterRule(_localctx, 256, SparkSqlParser.RULE_errorCapturingIdentifierExtra);
		try {
			let _alt: number;
			this.state = 2953;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 380, this._ctx) ) {
			case 1:
				_localctx = new ErrorIdentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
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
					_alt = this.interpreter.adaptivePredict(this._input, 379, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 2:
				_localctx = new RealIdentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, SparkSqlParser.RULE_identifier);
		try {
			this.state = 2958;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 381, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2955;
				this.strictIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2956;
				if (!(!this.SQL_standard_keyword_behavior)) {
					throw this.createFailedPredicateException("!this.SQL_standard_keyword_behavior");
				}
				this.state = 2957;
				this.strictNonReserved();
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
	public strictIdentifier(): StrictIdentifierContext {
		let _localctx: StrictIdentifierContext = new StrictIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, SparkSqlParser.RULE_strictIdentifier);
		try {
			this.state = 2966;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 382, this._ctx) ) {
			case 1:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2960;
				this.match(SparkSqlParser.IDENTIFIER);
				}
				break;

			case 2:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2961;
				this.quotedIdentifier();
				}
				break;

			case 3:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2962;
				if (!(this.SQL_standard_keyword_behavior)) {
					throw this.createFailedPredicateException("this.SQL_standard_keyword_behavior");
				}
				this.state = 2963;
				this.ansiNonReserved();
				}
				break;

			case 4:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2964;
				if (!(!this.SQL_standard_keyword_behavior)) {
					throw this.createFailedPredicateException("!this.SQL_standard_keyword_behavior");
				}
				this.state = 2965;
				this.nonReserved();
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
	public quotedIdentifier(): QuotedIdentifierContext {
		let _localctx: QuotedIdentifierContext = new QuotedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, SparkSqlParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2968;
			this.match(SparkSqlParser.BACKQUOTED_IDENTIFIER);
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, SparkSqlParser.RULE_number);
		let _la: number;
		try {
			this.state = 3013;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 393, this._ctx) ) {
			case 1:
				_localctx = new ExponentLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2970;
				if (!(!this.legacy_exponent_literal_as_decimal_enabled)) {
					throw this.createFailedPredicateException("!this.legacy_exponent_literal_as_decimal_enabled");
				}
				this.state = 2972;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.MINUS) {
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
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2975;
				if (!(!this.legacy_exponent_literal_as_decimal_enabled)) {
					throw this.createFailedPredicateException("!this.legacy_exponent_literal_as_decimal_enabled");
				}
				this.state = 2977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.MINUS) {
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
				_localctx = new LegacyDecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2980;
				if (!(this.legacy_exponent_literal_as_decimal_enabled)) {
					throw this.createFailedPredicateException("this.legacy_exponent_literal_as_decimal_enabled");
				}
				this.state = 2982;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.MINUS) {
					{
					this.state = 2981;
					this.match(SparkSqlParser.MINUS);
					}
				}

				this.state = 2984;
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.EXPONENT_VALUE || _la === SparkSqlParser.DECIMAL_VALUE)) {
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

			case 4:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.MINUS) {
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
				_localctx = new BigIntLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2990;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.MINUS) {
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
				_localctx = new SmallIntLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2994;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.MINUS) {
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
				_localctx = new TinyIntLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2998;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.MINUS) {
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
				_localctx = new DoubleLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 3002;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.MINUS) {
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
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 3006;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.MINUS) {
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
				_localctx = new BigDecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 3010;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SparkSqlParser.MINUS) {
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
	public alterColumnAction(): AlterColumnActionContext {
		let _localctx: AlterColumnActionContext = new AlterColumnActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, SparkSqlParser.RULE_alterColumnAction);
		let _la: number;
		try {
			this.state = 3022;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SparkSqlParser.TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3015;
				this.match(SparkSqlParser.TYPE);
				this.state = 3016;
				this.dataType();
				}
				break;
			case SparkSqlParser.COMMENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3017;
				this.commentSpec();
				}
				break;
			case SparkSqlParser.AFTER:
			case SparkSqlParser.FIRST:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 3018;
				this.colPosition();
				}
				break;
			case SparkSqlParser.DROP:
			case SparkSqlParser.SET:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 3019;
				_localctx._setOrDrop = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SparkSqlParser.DROP || _la === SparkSqlParser.SET)) {
					_localctx._setOrDrop = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

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
	public ansiNonReserved(): AnsiNonReservedContext {
		let _localctx: AnsiNonReservedContext = new AnsiNonReservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, SparkSqlParser.RULE_ansiNonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3024;
			_la = this._input.LA(1);
			if (!(((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (SparkSqlParser.ADD - 11)) | (1 << (SparkSqlParser.AFTER - 11)) | (1 << (SparkSqlParser.ALTER - 11)) | (1 << (SparkSqlParser.ANALYZE - 11)) | (1 << (SparkSqlParser.ANTI - 11)) | (1 << (SparkSqlParser.ARCHIVE - 11)) | (1 << (SparkSqlParser.ARRAY - 11)) | (1 << (SparkSqlParser.ASC - 11)) | (1 << (SparkSqlParser.AT - 11)) | (1 << (SparkSqlParser.BETWEEN - 11)) | (1 << (SparkSqlParser.BUCKET - 11)) | (1 << (SparkSqlParser.BUCKETS - 11)) | (1 << (SparkSqlParser.BY - 11)) | (1 << (SparkSqlParser.CACHE - 11)) | (1 << (SparkSqlParser.CASCADE - 11)) | (1 << (SparkSqlParser.CHANGE - 11)) | (1 << (SparkSqlParser.CLEAR - 11)) | (1 << (SparkSqlParser.CLUSTER - 11)) | (1 << (SparkSqlParser.CLUSTERED - 11)) | (1 << (SparkSqlParser.CODEGEN - 11)) | (1 << (SparkSqlParser.COLLECTION - 11)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (SparkSqlParser.COLUMNS - 43)) | (1 << (SparkSqlParser.COMMENT - 43)) | (1 << (SparkSqlParser.COMMIT - 43)) | (1 << (SparkSqlParser.COMPACT - 43)) | (1 << (SparkSqlParser.COMPACTIONS - 43)) | (1 << (SparkSqlParser.COMPUTE - 43)) | (1 << (SparkSqlParser.CONCATENATE - 43)) | (1 << (SparkSqlParser.COST - 43)) | (1 << (SparkSqlParser.CUBE - 43)) | (1 << (SparkSqlParser.CURRENT - 43)) | (1 << (SparkSqlParser.DATA - 43)) | (1 << (SparkSqlParser.DATABASE - 43)) | (1 << (SparkSqlParser.DATABASES - 43)) | (1 << (SparkSqlParser.DBPROPERTIES - 43)) | (1 << (SparkSqlParser.DEFINED - 43)) | (1 << (SparkSqlParser.DELETE - 43)) | (1 << (SparkSqlParser.DELIMITED - 43)) | (1 << (SparkSqlParser.DESC - 43)) | (1 << (SparkSqlParser.DESCRIBE - 43)) | (1 << (SparkSqlParser.DFS - 43)) | (1 << (SparkSqlParser.DIRECTORIES - 43)) | (1 << (SparkSqlParser.DIRECTORY - 43)) | (1 << (SparkSqlParser.DISTRIBUTE - 43)) | (1 << (SparkSqlParser.DIV - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (SparkSqlParser.DROP - 75)) | (1 << (SparkSqlParser.ESCAPED - 75)) | (1 << (SparkSqlParser.EXCHANGE - 75)) | (1 << (SparkSqlParser.EXISTS - 75)) | (1 << (SparkSqlParser.EXPLAIN - 75)) | (1 << (SparkSqlParser.EXPORT - 75)) | (1 << (SparkSqlParser.EXTENDED - 75)) | (1 << (SparkSqlParser.EXTERNAL - 75)) | (1 << (SparkSqlParser.EXTRACT - 75)) | (1 << (SparkSqlParser.FIELDS - 75)) | (1 << (SparkSqlParser.FILEFORMAT - 75)) | (1 << (SparkSqlParser.FIRST - 75)) | (1 << (SparkSqlParser.FOLLOWING - 75)) | (1 << (SparkSqlParser.FORMAT - 75)) | (1 << (SparkSqlParser.FORMATTED - 75)) | (1 << (SparkSqlParser.FUNCTION - 75)) | (1 << (SparkSqlParser.FUNCTIONS - 75)) | (1 << (SparkSqlParser.GLOBAL - 75)) | (1 << (SparkSqlParser.GROUPING - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (SparkSqlParser.IF - 108)) | (1 << (SparkSqlParser.IGNORE - 108)) | (1 << (SparkSqlParser.IMPORT - 108)) | (1 << (SparkSqlParser.INDEX - 108)) | (1 << (SparkSqlParser.INDEXES - 108)) | (1 << (SparkSqlParser.INPATH - 108)) | (1 << (SparkSqlParser.INPUTFORMAT - 108)) | (1 << (SparkSqlParser.INSERT - 108)) | (1 << (SparkSqlParser.INTERVAL - 108)) | (1 << (SparkSqlParser.ITEMS - 108)) | (1 << (SparkSqlParser.KEYS - 108)) | (1 << (SparkSqlParser.LAST - 108)) | (1 << (SparkSqlParser.LATERAL - 108)) | (1 << (SparkSqlParser.LAZY - 108)) | (1 << (SparkSqlParser.LIKE - 108)) | (1 << (SparkSqlParser.LIMIT - 108)) | (1 << (SparkSqlParser.LINES - 108)) | (1 << (SparkSqlParser.LIST - 108)) | (1 << (SparkSqlParser.LOAD - 108)) | (1 << (SparkSqlParser.LOCAL - 108)) | (1 << (SparkSqlParser.LOCATION - 108)) | (1 << (SparkSqlParser.LOCK - 108)) | (1 << (SparkSqlParser.LOCKS - 108)) | (1 << (SparkSqlParser.LOGICAL - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (SparkSqlParser.MACRO - 140)) | (1 << (SparkSqlParser.MAP - 140)) | (1 << (SparkSqlParser.MATCHED - 140)) | (1 << (SparkSqlParser.MERGE - 140)) | (1 << (SparkSqlParser.MSCK - 140)) | (1 << (SparkSqlParser.NAMESPACE - 140)) | (1 << (SparkSqlParser.NAMESPACES - 140)) | (1 << (SparkSqlParser.NO - 140)) | (1 << (SparkSqlParser.NULLS - 140)) | (1 << (SparkSqlParser.OF - 140)) | (1 << (SparkSqlParser.OPTION - 140)) | (1 << (SparkSqlParser.OPTIONS - 140)) | (1 << (SparkSqlParser.OUT - 140)) | (1 << (SparkSqlParser.OUTPUTFORMAT - 140)) | (1 << (SparkSqlParser.OVER - 140)) | (1 << (SparkSqlParser.OVERLAY - 140)) | (1 << (SparkSqlParser.OVERWRITE - 140)) | (1 << (SparkSqlParser.PARTITION - 140)) | (1 << (SparkSqlParser.PARTITIONED - 140)) | (1 << (SparkSqlParser.PARTITIONS - 140)) | (1 << (SparkSqlParser.PERCENTLIT - 140)) | (1 << (SparkSqlParser.PIVOT - 140)) | (1 << (SparkSqlParser.PLACING - 140)))) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & ((1 << (SparkSqlParser.POSITION - 172)) | (1 << (SparkSqlParser.PRECEDING - 172)) | (1 << (SparkSqlParser.PRINCIPALS - 172)) | (1 << (SparkSqlParser.PROPERTIES - 172)) | (1 << (SparkSqlParser.PURGE - 172)) | (1 << (SparkSqlParser.QUERY - 172)) | (1 << (SparkSqlParser.RANGE - 172)) | (1 << (SparkSqlParser.RECORDREADER - 172)) | (1 << (SparkSqlParser.RECORDWRITER - 172)) | (1 << (SparkSqlParser.RECOVER - 172)) | (1 << (SparkSqlParser.REDUCE - 172)) | (1 << (SparkSqlParser.REFRESH - 172)) | (1 << (SparkSqlParser.RENAME - 172)) | (1 << (SparkSqlParser.REPAIR - 172)) | (1 << (SparkSqlParser.REPLACE - 172)) | (1 << (SparkSqlParser.RESET - 172)) | (1 << (SparkSqlParser.RESTRICT - 172)) | (1 << (SparkSqlParser.REVOKE - 172)) | (1 << (SparkSqlParser.RLIKE - 172)) | (1 << (SparkSqlParser.ROLE - 172)) | (1 << (SparkSqlParser.ROLES - 172)) | (1 << (SparkSqlParser.ROLLBACK - 172)) | (1 << (SparkSqlParser.ROLLUP - 172)) | (1 << (SparkSqlParser.ROW - 172)) | (1 << (SparkSqlParser.ROWS - 172)) | (1 << (SparkSqlParser.SCHEMA - 172)) | (1 << (SparkSqlParser.SEMI - 172)) | (1 << (SparkSqlParser.SEPARATED - 172)))) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & ((1 << (SparkSqlParser.SERDE - 204)) | (1 << (SparkSqlParser.SERDEPROPERTIES - 204)) | (1 << (SparkSqlParser.SET - 204)) | (1 << (SparkSqlParser.SETMINUS - 204)) | (1 << (SparkSqlParser.SETS - 204)) | (1 << (SparkSqlParser.SHOW - 204)) | (1 << (SparkSqlParser.SKEWED - 204)) | (1 << (SparkSqlParser.SORT - 204)) | (1 << (SparkSqlParser.SORTED - 204)) | (1 << (SparkSqlParser.START - 204)) | (1 << (SparkSqlParser.STATISTICS - 204)) | (1 << (SparkSqlParser.STORED - 204)) | (1 << (SparkSqlParser.STRATIFY - 204)) | (1 << (SparkSqlParser.STRUCT - 204)) | (1 << (SparkSqlParser.SUBSTR - 204)) | (1 << (SparkSqlParser.SUBSTRING - 204)) | (1 << (SparkSqlParser.TABLES - 204)) | (1 << (SparkSqlParser.TABLESAMPLE - 204)) | (1 << (SparkSqlParser.TBLPROPERTIES - 204)) | (1 << (SparkSqlParser.TEMPORARY - 204)) | (1 << (SparkSqlParser.TERMINATED - 204)) | (1 << (SparkSqlParser.TOUCH - 204)) | (1 << (SparkSqlParser.TRANSACTION - 204)) | (1 << (SparkSqlParser.TRANSACTIONS - 204)) | (1 << (SparkSqlParser.TRANSFORM - 204)))) !== 0) || ((((_la - 236)) & ~0x1F) === 0 && ((1 << (_la - 236)) & ((1 << (SparkSqlParser.TRIM - 236)) | (1 << (SparkSqlParser.TRUE - 236)) | (1 << (SparkSqlParser.TRUNCATE - 236)) | (1 << (SparkSqlParser.TYPE - 236)) | (1 << (SparkSqlParser.UNARCHIVE - 236)) | (1 << (SparkSqlParser.UNBOUNDED - 236)) | (1 << (SparkSqlParser.UNCACHE - 236)) | (1 << (SparkSqlParser.UNLOCK - 236)) | (1 << (SparkSqlParser.UNSET - 236)) | (1 << (SparkSqlParser.UPDATE - 236)) | (1 << (SparkSqlParser.USE - 236)) | (1 << (SparkSqlParser.VALUES - 236)) | (1 << (SparkSqlParser.VIEW - 236)) | (1 << (SparkSqlParser.VIEWS - 236)) | (1 << (SparkSqlParser.WINDOW - 236)) | (1 << (SparkSqlParser.ZONE - 236)))) !== 0))) {
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
	public strictNonReserved(): StrictNonReservedContext {
		let _localctx: StrictNonReservedContext = new StrictNonReservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, SparkSqlParser.RULE_strictNonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3026;
			_la = this._input.LA(1);
			if (!(_la === SparkSqlParser.ANTI || _la === SparkSqlParser.CROSS || _la === SparkSqlParser.EXCEPT || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SparkSqlParser.FULL - 100)) | (1 << (SparkSqlParser.INNER - 100)) | (1 << (SparkSqlParser.INTERSECT - 100)) | (1 << (SparkSqlParser.JOIN - 100)) | (1 << (SparkSqlParser.LEFT - 100)))) !== 0) || _la === SparkSqlParser.NATURAL || _la === SparkSqlParser.ON || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (SparkSqlParser.RIGHT - 192)) | (1 << (SparkSqlParser.SEMI - 192)) | (1 << (SparkSqlParser.SETMINUS - 192)))) !== 0) || _la === SparkSqlParser.UNION || _la === SparkSqlParser.USING)) {
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
	public nonReserved(): NonReservedContext {
		let _localctx: NonReservedContext = new NonReservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, SparkSqlParser.RULE_nonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3028;
			_la = this._input.LA(1);
			if (!(((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (SparkSqlParser.ADD - 11)) | (1 << (SparkSqlParser.AFTER - 11)) | (1 << (SparkSqlParser.ALL - 11)) | (1 << (SparkSqlParser.ALTER - 11)) | (1 << (SparkSqlParser.ANALYZE - 11)) | (1 << (SparkSqlParser.AND - 11)) | (1 << (SparkSqlParser.ANY - 11)) | (1 << (SparkSqlParser.ARCHIVE - 11)) | (1 << (SparkSqlParser.ARRAY - 11)) | (1 << (SparkSqlParser.AS - 11)) | (1 << (SparkSqlParser.ASC - 11)) | (1 << (SparkSqlParser.AT - 11)) | (1 << (SparkSqlParser.AUTHORIZATION - 11)) | (1 << (SparkSqlParser.BETWEEN - 11)) | (1 << (SparkSqlParser.BOTH - 11)) | (1 << (SparkSqlParser.BUCKET - 11)) | (1 << (SparkSqlParser.BUCKETS - 11)) | (1 << (SparkSqlParser.BY - 11)) | (1 << (SparkSqlParser.CACHE - 11)) | (1 << (SparkSqlParser.CASCADE - 11)) | (1 << (SparkSqlParser.CASE - 11)) | (1 << (SparkSqlParser.CAST - 11)) | (1 << (SparkSqlParser.CHANGE - 11)) | (1 << (SparkSqlParser.CHECK - 11)) | (1 << (SparkSqlParser.CLEAR - 11)) | (1 << (SparkSqlParser.CLUSTER - 11)) | (1 << (SparkSqlParser.CLUSTERED - 11)) | (1 << (SparkSqlParser.CODEGEN - 11)) | (1 << (SparkSqlParser.COLLATE - 11)) | (1 << (SparkSqlParser.COLLECTION - 11)) | (1 << (SparkSqlParser.COLUMN - 11)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (SparkSqlParser.COLUMNS - 43)) | (1 << (SparkSqlParser.COMMENT - 43)) | (1 << (SparkSqlParser.COMMIT - 43)) | (1 << (SparkSqlParser.COMPACT - 43)) | (1 << (SparkSqlParser.COMPACTIONS - 43)) | (1 << (SparkSqlParser.COMPUTE - 43)) | (1 << (SparkSqlParser.CONCATENATE - 43)) | (1 << (SparkSqlParser.CONSTRAINT - 43)) | (1 << (SparkSqlParser.COST - 43)) | (1 << (SparkSqlParser.CREATE - 43)) | (1 << (SparkSqlParser.CUBE - 43)) | (1 << (SparkSqlParser.CURRENT - 43)) | (1 << (SparkSqlParser.CURRENT_DATE - 43)) | (1 << (SparkSqlParser.CURRENT_TIME - 43)) | (1 << (SparkSqlParser.CURRENT_TIMESTAMP - 43)) | (1 << (SparkSqlParser.CURRENT_USER - 43)) | (1 << (SparkSqlParser.DATA - 43)) | (1 << (SparkSqlParser.DATABASE - 43)) | (1 << (SparkSqlParser.DATABASES - 43)) | (1 << (SparkSqlParser.DBPROPERTIES - 43)) | (1 << (SparkSqlParser.DEFINED - 43)) | (1 << (SparkSqlParser.DELETE - 43)) | (1 << (SparkSqlParser.DELIMITED - 43)) | (1 << (SparkSqlParser.DESC - 43)) | (1 << (SparkSqlParser.DESCRIBE - 43)) | (1 << (SparkSqlParser.DFS - 43)) | (1 << (SparkSqlParser.DIRECTORIES - 43)) | (1 << (SparkSqlParser.DIRECTORY - 43)) | (1 << (SparkSqlParser.DISTINCT - 43)) | (1 << (SparkSqlParser.DISTRIBUTE - 43)) | (1 << (SparkSqlParser.DIV - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (SparkSqlParser.DROP - 75)) | (1 << (SparkSqlParser.ELSE - 75)) | (1 << (SparkSqlParser.END - 75)) | (1 << (SparkSqlParser.ESCAPE - 75)) | (1 << (SparkSqlParser.ESCAPED - 75)) | (1 << (SparkSqlParser.EXCHANGE - 75)) | (1 << (SparkSqlParser.EXISTS - 75)) | (1 << (SparkSqlParser.EXPLAIN - 75)) | (1 << (SparkSqlParser.EXPORT - 75)) | (1 << (SparkSqlParser.EXTENDED - 75)) | (1 << (SparkSqlParser.EXTERNAL - 75)) | (1 << (SparkSqlParser.EXTRACT - 75)) | (1 << (SparkSqlParser.FALSE - 75)) | (1 << (SparkSqlParser.FETCH - 75)) | (1 << (SparkSqlParser.FIELDS - 75)) | (1 << (SparkSqlParser.FILTER - 75)) | (1 << (SparkSqlParser.FILEFORMAT - 75)) | (1 << (SparkSqlParser.FIRST - 75)) | (1 << (SparkSqlParser.FOLLOWING - 75)) | (1 << (SparkSqlParser.FOR - 75)) | (1 << (SparkSqlParser.FOREIGN - 75)) | (1 << (SparkSqlParser.FORMAT - 75)) | (1 << (SparkSqlParser.FORMATTED - 75)) | (1 << (SparkSqlParser.FROM - 75)) | (1 << (SparkSqlParser.FUNCTION - 75)) | (1 << (SparkSqlParser.FUNCTIONS - 75)) | (1 << (SparkSqlParser.GLOBAL - 75)) | (1 << (SparkSqlParser.GRANT - 75)) | (1 << (SparkSqlParser.GROUP - 75)) | (1 << (SparkSqlParser.GROUPING - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (SparkSqlParser.HAVING - 107)) | (1 << (SparkSqlParser.IF - 107)) | (1 << (SparkSqlParser.IGNORE - 107)) | (1 << (SparkSqlParser.IMPORT - 107)) | (1 << (SparkSqlParser.IN - 107)) | (1 << (SparkSqlParser.INDEX - 107)) | (1 << (SparkSqlParser.INDEXES - 107)) | (1 << (SparkSqlParser.INPATH - 107)) | (1 << (SparkSqlParser.INPUTFORMAT - 107)) | (1 << (SparkSqlParser.INSERT - 107)) | (1 << (SparkSqlParser.INTERVAL - 107)) | (1 << (SparkSqlParser.INTO - 107)) | (1 << (SparkSqlParser.IS - 107)) | (1 << (SparkSqlParser.ITEMS - 107)) | (1 << (SparkSqlParser.KEYS - 107)) | (1 << (SparkSqlParser.LAST - 107)) | (1 << (SparkSqlParser.LATERAL - 107)) | (1 << (SparkSqlParser.LAZY - 107)) | (1 << (SparkSqlParser.LEADING - 107)) | (1 << (SparkSqlParser.LIKE - 107)) | (1 << (SparkSqlParser.LIMIT - 107)) | (1 << (SparkSqlParser.LINES - 107)) | (1 << (SparkSqlParser.LIST - 107)) | (1 << (SparkSqlParser.LOAD - 107)) | (1 << (SparkSqlParser.LOCAL - 107)) | (1 << (SparkSqlParser.LOCATION - 107)) | (1 << (SparkSqlParser.LOCK - 107)) | (1 << (SparkSqlParser.LOCKS - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (SparkSqlParser.LOGICAL - 139)) | (1 << (SparkSqlParser.MACRO - 139)) | (1 << (SparkSqlParser.MAP - 139)) | (1 << (SparkSqlParser.MATCHED - 139)) | (1 << (SparkSqlParser.MERGE - 139)) | (1 << (SparkSqlParser.MSCK - 139)) | (1 << (SparkSqlParser.NAMESPACE - 139)) | (1 << (SparkSqlParser.NAMESPACES - 139)) | (1 << (SparkSqlParser.NO - 139)) | (1 << (SparkSqlParser.NOT - 139)) | (1 << (SparkSqlParser.NULL - 139)) | (1 << (SparkSqlParser.NULLS - 139)) | (1 << (SparkSqlParser.OF - 139)) | (1 << (SparkSqlParser.ONLY - 139)) | (1 << (SparkSqlParser.OPTION - 139)) | (1 << (SparkSqlParser.OPTIONS - 139)) | (1 << (SparkSqlParser.OR - 139)) | (1 << (SparkSqlParser.ORDER - 139)) | (1 << (SparkSqlParser.OUT - 139)) | (1 << (SparkSqlParser.OUTER - 139)) | (1 << (SparkSqlParser.OUTPUTFORMAT - 139)) | (1 << (SparkSqlParser.OVER - 139)) | (1 << (SparkSqlParser.OVERLAPS - 139)) | (1 << (SparkSqlParser.OVERLAY - 139)) | (1 << (SparkSqlParser.OVERWRITE - 139)) | (1 << (SparkSqlParser.PARTITION - 139)) | (1 << (SparkSqlParser.PARTITIONED - 139)) | (1 << (SparkSqlParser.PARTITIONS - 139)) | (1 << (SparkSqlParser.PERCENTLIT - 139)) | (1 << (SparkSqlParser.PIVOT - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (SparkSqlParser.PLACING - 171)) | (1 << (SparkSqlParser.POSITION - 171)) | (1 << (SparkSqlParser.PRECEDING - 171)) | (1 << (SparkSqlParser.PRIMARY - 171)) | (1 << (SparkSqlParser.PRINCIPALS - 171)) | (1 << (SparkSqlParser.PROPERTIES - 171)) | (1 << (SparkSqlParser.PURGE - 171)) | (1 << (SparkSqlParser.QUERY - 171)) | (1 << (SparkSqlParser.RANGE - 171)) | (1 << (SparkSqlParser.RECORDREADER - 171)) | (1 << (SparkSqlParser.RECORDWRITER - 171)) | (1 << (SparkSqlParser.RECOVER - 171)) | (1 << (SparkSqlParser.REDUCE - 171)) | (1 << (SparkSqlParser.REFERENCES - 171)) | (1 << (SparkSqlParser.REFRESH - 171)) | (1 << (SparkSqlParser.RENAME - 171)) | (1 << (SparkSqlParser.REPAIR - 171)) | (1 << (SparkSqlParser.REPLACE - 171)) | (1 << (SparkSqlParser.RESET - 171)) | (1 << (SparkSqlParser.RESTRICT - 171)) | (1 << (SparkSqlParser.REVOKE - 171)) | (1 << (SparkSqlParser.RLIKE - 171)) | (1 << (SparkSqlParser.ROLE - 171)) | (1 << (SparkSqlParser.ROLES - 171)) | (1 << (SparkSqlParser.ROLLBACK - 171)) | (1 << (SparkSqlParser.ROLLUP - 171)) | (1 << (SparkSqlParser.ROW - 171)) | (1 << (SparkSqlParser.ROWS - 171)) | (1 << (SparkSqlParser.SCHEMA - 171)) | (1 << (SparkSqlParser.SELECT - 171)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (SparkSqlParser.SEPARATED - 203)) | (1 << (SparkSqlParser.SERDE - 203)) | (1 << (SparkSqlParser.SERDEPROPERTIES - 203)) | (1 << (SparkSqlParser.SESSION_USER - 203)) | (1 << (SparkSqlParser.SET - 203)) | (1 << (SparkSqlParser.SETS - 203)) | (1 << (SparkSqlParser.SHOW - 203)) | (1 << (SparkSqlParser.SKEWED - 203)) | (1 << (SparkSqlParser.SOME - 203)) | (1 << (SparkSqlParser.SORT - 203)) | (1 << (SparkSqlParser.SORTED - 203)) | (1 << (SparkSqlParser.START - 203)) | (1 << (SparkSqlParser.STATISTICS - 203)) | (1 << (SparkSqlParser.STORED - 203)) | (1 << (SparkSqlParser.STRATIFY - 203)) | (1 << (SparkSqlParser.STRUCT - 203)) | (1 << (SparkSqlParser.SUBSTR - 203)) | (1 << (SparkSqlParser.SUBSTRING - 203)) | (1 << (SparkSqlParser.TABLE - 203)) | (1 << (SparkSqlParser.TABLES - 203)) | (1 << (SparkSqlParser.TABLESAMPLE - 203)) | (1 << (SparkSqlParser.TBLPROPERTIES - 203)) | (1 << (SparkSqlParser.TEMPORARY - 203)) | (1 << (SparkSqlParser.TERMINATED - 203)) | (1 << (SparkSqlParser.THEN - 203)) | (1 << (SparkSqlParser.TIME - 203)) | (1 << (SparkSqlParser.TO - 203)) | (1 << (SparkSqlParser.TOUCH - 203)) | (1 << (SparkSqlParser.TRAILING - 203)) | (1 << (SparkSqlParser.TRANSACTION - 203)) | (1 << (SparkSqlParser.TRANSACTIONS - 203)))) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (SparkSqlParser.TRANSFORM - 235)) | (1 << (SparkSqlParser.TRIM - 235)) | (1 << (SparkSqlParser.TRUE - 235)) | (1 << (SparkSqlParser.TRUNCATE - 235)) | (1 << (SparkSqlParser.TYPE - 235)) | (1 << (SparkSqlParser.UNARCHIVE - 235)) | (1 << (SparkSqlParser.UNBOUNDED - 235)) | (1 << (SparkSqlParser.UNCACHE - 235)) | (1 << (SparkSqlParser.UNIQUE - 235)) | (1 << (SparkSqlParser.UNKNOWN - 235)) | (1 << (SparkSqlParser.UNLOCK - 235)) | (1 << (SparkSqlParser.UNSET - 235)) | (1 << (SparkSqlParser.UPDATE - 235)) | (1 << (SparkSqlParser.USE - 235)) | (1 << (SparkSqlParser.USER - 235)) | (1 << (SparkSqlParser.VALUES - 235)) | (1 << (SparkSqlParser.VIEW - 235)) | (1 << (SparkSqlParser.VIEWS - 235)) | (1 << (SparkSqlParser.WHEN - 235)) | (1 << (SparkSqlParser.WHERE - 235)) | (1 << (SparkSqlParser.WINDOW - 235)) | (1 << (SparkSqlParser.WITH - 235)) | (1 << (SparkSqlParser.ZONE - 235)))) !== 0))) {
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
		case 42:
			return this.queryTerm_sempred(_localctx as QueryTermContext, predIndex);

		case 95:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 97:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);

		case 98:
			return this.primaryExpression_sempred(_localctx as PrimaryExpressionContext, predIndex);

		case 129:
			return this.identifier_sempred(_localctx as IdentifierContext, predIndex);

		case 130:
			return this.strictIdentifier_sempred(_localctx as StrictIdentifierContext, predIndex);

		case 132:
			return this.number_sempred(_localctx as NumberContext, predIndex);
		}
		return true;
	}
	private queryTerm_sempred(_localctx: QueryTermContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);

		case 1:
			return this.legacy_setops_precedence_enbled;

		case 2:
			return this.precpred(this._ctx, 2);

		case 3:
			return !this.legacy_setops_precedence_enbled;

		case 4:
			return this.precpred(this._ctx, 1);

		case 5:
			return !this.legacy_setops_precedence_enbled;
		}
		return true;
	}
	private booleanExpression_sempred(_localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 2);

		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private valueExpression_sempred(_localctx: ValueExpressionContext, predIndex: number): boolean {
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
	private primaryExpression_sempred(_localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.precpred(this._ctx, 8);

		case 15:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}
	private identifier_sempred(_localctx: IdentifierContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return !this.SQL_standard_keyword_behavior;
		}
		return true;
	}
	private strictIdentifier_sempred(_localctx: StrictIdentifierContext, predIndex: number): boolean {
		switch (predIndex) {
		case 17:
			return this.SQL_standard_keyword_behavior;

		case 18:
			return !this.SQL_standard_keyword_behavior;
		}
		return true;
	}
	private number_sempred(_localctx: NumberContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return !this.legacy_exponent_literal_as_decimal_enabled;

		case 20:
			return !this.legacy_exponent_literal_as_decimal_enabled;

		case 21:
			return this.legacy_exponent_literal_as_decimal_enabled;
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 6;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u0129\u0BD9\x04" +
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
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x05\x03\u011A\n\x03\x03\x03\x07\x03\u011D\n\x03" +
		"\f\x03\x0E\x03\u0120\v\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03" +
		"\t\x03\t\x03\n\x03\n\x05\n\u0135\n\n\x03\n\x03\n\x03\n\x05\n\u013A\n\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0142\n\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x07\n\u014A\n\n\f\n\x0E\n\u014D\v\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\u0160\n\n\x03\n\x03\n\x05\n\u0164\n\n\x03\n\x03\n" +
		"\x03\n\x03\n\x05\n\u016A\n\n\x03\n\x05\n\u016D\n\n\x03\n\x05\n\u0170\n" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0177\n\n\x03\n\x03\n\x03\n\x05" +
		"\n\u017C\n\n\x03\n\x05\n\u017F\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n" +
		"\u0186\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x05\n\u0192\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u019B" +
		"\n\n\f\n\x0E\n\u019E\v\n\x03\n\x05\n\u01A1\n\n\x03\n\x05\n\u01A4\n\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x05\n\u01AB\n\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x07\n\u01B6\n\n\f\n\x0E\n\u01B9\v\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x05\n\u01C0\n\n\x03\n\x03\n\x03\n\x05\n\u01C5\n\n" +
		"\x03\n\x05\n\u01C8\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u01CE\n\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u01D9\n\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\u0219\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0222" +
		"\n\n\x03\n\x03\n\x05\n\u0226\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u022C\n" +
		"\n\x03\n\x03\n\x05\n\u0230\n\n\x03\n\x03\n\x03\n\x05\n\u0235\n\n\x03\n" +
		"\x03\n\x03\n\x03\n\x05\n\u023B\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x05\n\u0247\n\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x05\n\u024F\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0255\n\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0262\n" +
		"\n\x03\n\x06\n\u0265\n\n\r\n\x0E\n\u0266\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0277\n\n" +
		"\x03\n\x03\n\x03\n\x07\n\u027C\n\n\f\n\x0E\n\u027F\v\n\x03\n\x05\n\u0282" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0288\n\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0297\n\n\x03" +
		"\n\x03\n\x05\n\u029B\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u02A1\n\n\x03\n" +
		"\x03\n\x03\n\x03\n\x05\n\u02A7\n\n\x03\n\x05\n\u02AA\n\n\x03\n\x05\n\u02AD" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u02B3\n\n\x03\n\x03\n\x05\n\u02B7\n" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u02BF\n\n\f\n\x0E\n\u02C2" +
		"\v\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u02CA\n\n\x03\n\x05\n\u02CD" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u02D6\n\n\x03\n\x03" +
		"\n\x03\n\x05\n\u02DB\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u02E1\n\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x05\n\u02E8\n\n\x03\n\x05\n\u02EB\n\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\u02F1\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x07\n\u02FA\n\n\f\n\x0E\n\u02FD\v\n\x05\n\u02FF\n\n\x03\n\x03\n\x05" +
		"\n\u0303\n\n\x03\n\x03\n\x03\n\x05\n\u0308\n\n\x03\n\x03\n\x03\n\x05\n" +
		"\u030D\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0314\n\n\x03\n\x05\n\u0317" +
		"\n\n\x03\n\x05\n\u031A\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0321\n" +
		"\n\x03\n\x03\n\x03\n\x05\n\u0326\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x05\n\u032F\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0337" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u033D\n\n\x03\n\x05\n\u0340\n\n\x03" +
		"\n\x05\n\u0343\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0349\n\n\x03\n\x03\n" +
		"\x05\n\u034D\n\n\x03\n\x03\n\x05\n\u0351\n\n\x03\n\x03\n\x05\n\u0355\n" +
		"\n\x05\n\u0357\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u035F\n\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0367\n\n\x03\n\x03\n\x03\n" +
		"\x03\n\x05\n\u036D\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0373\n\n\x03\n\x05" +
		"\n\u0376\n\n\x03\n\x03\n\x05\n\u037A\n\n\x03\n\x05\n\u037D\n\n\x03\n\x03" +
		"\n\x05\n\u0381\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x07\n\u039B\n\n\f\n\x0E\n\u039E\v\n\x05\n\u03A0\n" +
		"\n\x03\n\x03\n\x05\n\u03A4\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u03AA\n\n" +
		"\x03\n\x05\n\u03AD\n\n\x03\n\x05\n\u03B0\n\n\x03\n\x03\n\x03\n\x03\n\x05" +
		"\n\u03B6\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u03BE\n\n\x03\n" +
		"\x03\n\x03\n\x05\n\u03C3\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u03C9\n\n\x03" +
		"\n\x03\n\x03\n\x03\n\x05\n\u03CF\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x07\n\u03D9\n\n\f\n\x0E\n\u03DC\v\n\x05\n\u03DE\n\n\x03" +
		"\n\x03\n\x03\n\x07\n\u03E3\n\n\f\n\x0E\n\u03E6\v\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u03F4\n\n\f\n" +
		"\x0E\n\u03F7\v\n\x03\n\x03\n\x03\n\x03\n\x07\n\u03FD\n\n\f\n\x0E\n\u0400" +
		"\v\n\x05\n\u0402\n\n\x03\n\x03\n\x07\n\u0406\n\n\f\n\x0E\n\u0409\v\n\x03" +
		"\n\x03\n\x03\n\x03\n\x07\n\u040F\n\n\f\n\x0E\n\u0412\v\n\x03\n\x03\n\x07" +
		"\n\u0416\n\n\f\n\x0E\n\u0419\v\n\x05\n\u041B\n\n\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0425\n\f\x03\f\x03\f\x05\f\u0429\n\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0430\n\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x05\f\u04A4\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\u04AC\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u04B4\n\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u04BD\n\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u04C7\n\f\x03\r\x03\r\x05\r\u04CB" +
		"\n\r\x03\r\x05\r\u04CE\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u04D4\n\r\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x05\x0E\u04DA\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u04E6\n\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x05\x10\u04F2\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\u04F7\n\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x05\x13\u0500" +
		"\n\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x05\x14\u0508\n" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u050F\n\x14\x05\x14" +
		"\u0511\n\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0516\n\x14\x03\x14\x03\x14" +
		"\x05\x14\u051A\n\x14\x03\x14\x03\x14\x03\x14\x05\x14\u051F\n\x14\x03\x14" +
		"\x03\x14\x03\x14\x05\x14\u0524\n\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0529" +
		"\n\x14\x03\x14\x05\x14\u052C\n\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0531" +
		"\n\x14\x03\x14\x03\x14\x05\x14\u0535\n\x14\x03\x14\x03\x14\x03\x14\x05" +
		"\x14\u053A\n\x14\x05\x14\u053C\n\x14\x03\x15\x03\x15\x05\x15\u0540\n\x15" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u0547\n\x16\f\x16\x0E" +
		"\x16\u054A\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x05\x17\u0551" +
		"\n\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19" +
		"\u055A\n\x19\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u055F\n\x1A\f\x1A\x0E\x1A" +
		"\u0562\v\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0568\n\x1B\f\x1B" +
		"\x0E\x1B\u056B\v\x1B\x03\x1C\x03\x1C\x05\x1C\u056F\n\x1C\x03\x1C\x05\x1C" +
		"\u0572\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x07\x1E\u0585\n\x1E\f\x1E\x0E\x1E\u0588\v\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x07\x1F\u058E\n\x1F\f\x1F\x0E\x1F\u0591\v\x1F\x03\x1F\x03" +
		"\x1F\x03 \x03 \x05 \u0597\n \x03 \x05 \u059A\n \x03!\x03!\x03!\x07!\u059F" +
		"\n!\f!\x0E!\u05A2\v!\x03!\x05!\u05A5\n!\x03\"\x03\"\x03\"\x03\"\x05\"" +
		"\u05AB\n\"\x03#\x03#\x03#\x03#\x07#\u05B1\n#\f#\x0E#\u05B4\v#\x03#\x03" +
		"#\x03$\x03$\x03$\x03$\x07$\u05BC\n$\f$\x0E$\u05BF\v$\x03$\x03$\x03%\x03" +
		"%\x03%\x03%\x03%\x03%\x05%\u05C9\n%\x03&\x03&\x03&\x03&\x03&\x05&\u05D0" +
		"\n&\x03\'\x03\'\x03\'\x03\'\x05\'\u05D6\n\'\x03(\x03(\x03(\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x06)\u05E1\n)\r)\x0E)\u05E2\x03)\x03)\x03)\x03)\x03)" +
		"\x05)\u05EA\n)\x03)\x03)\x03)\x03)\x03)\x05)\u05F1\n)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u05FD\n)\x03)\x03)\x03)\x03)\x07" +
		")\u0603\n)\f)\x0E)\u0606\v)\x03)\x07)\u0609\n)\f)\x0E)\u060C\v)\x05)\u060E" +
		"\n)\x03*\x03*\x03*\x03*\x03*\x07*\u0615\n*\f*\x0E*\u0618\v*\x05*\u061A" +
		"\n*\x03*\x03*\x03*\x03*\x03*\x07*\u0621\n*\f*\x0E*\u0624\v*\x05*\u0626" +
		"\n*\x03*\x03*\x03*\x03*\x03*\x07*\u062D\n*\f*\x0E*\u0630\v*\x05*\u0632" +
		"\n*\x03*\x03*\x03*\x03*\x03*\x07*\u0639\n*\f*\x0E*\u063C\v*\x05*\u063E" +
		"\n*\x03*\x05*\u0641\n*\x03*\x03*\x03*\x05*\u0646\n*\x05*\u0648\n*\x03" +
		"+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u0654\n,\x03,\x03" +
		",\x03,\x03,\x03,\x05,\u065B\n,\x03,\x03,\x03,\x03,\x03,\x05,\u0662\n," +
		"\x03,\x07,\u0665\n,\f,\x0E,\u0668\v,\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x05-\u0673\n-\x03.\x03.\x05.\u0677\n.\x03.\x03.\x05.\u067B" +
		"\n.\x03/\x03/\x06/\u067F\n/\r/\x0E/\u0680\x030\x030\x050\u0685\n0\x03" +
		"0\x030\x030\x030\x070\u068B\n0\f0\x0E0\u068E\v0\x030\x050\u0691\n0\x03" +
		"0\x050\u0694\n0\x030\x050\u0697\n0\x030\x050\u069A\n0\x030\x030\x050\u069E" +
		"\n0\x031\x031\x051\u06A2\n1\x031\x051\u06A5\n1\x031\x031\x051\u06A9\n" +
		"1\x031\x071\u06AC\n1\f1\x0E1\u06AF\v1\x031\x051\u06B2\n1\x031\x051\u06B5" +
		"\n1\x031\x051\u06B8\n1\x031\x051\u06BB\n1\x051\u06BD\n1\x032\x032\x03" +
		"2\x032\x032\x032\x032\x032\x032\x032\x052\u06C9\n2\x032\x052\u06CC\n2" +
		"\x032\x032\x052\u06D0\n2\x032\x032\x032\x032\x032\x032\x032\x032\x052" +
		"\u06DA\n2\x032\x032\x052\u06DE\n2\x052\u06E0\n2\x032\x052\u06E3\n2\x03" +
		"2\x032\x052\u06E7\n2\x033\x033\x073\u06EB\n3\f3\x0E3\u06EE\v3\x033\x05" +
		"3\u06F1\n3\x033\x033\x034\x034\x034\x035\x035\x035\x035\x055\u06FC\n5" +
		"\x035\x035\x035\x036\x036\x036\x036\x036\x056\u0706\n6\x036\x036\x036" +
		"\x037\x037\x037\x037\x037\x037\x037\x057\u0712\n7\x038\x038\x038\x038" +
		"\x038\x038\x038\x038\x038\x038\x038\x078\u071F\n8\f8\x0E8\u0722\v8\x03" +
		"8\x038\x058\u0726\n8\x039\x039\x039\x079\u072B\n9\f9\x0E9\u072E\v9\x03" +
		":\x03:\x03:\x03:\x03;\x03;\x03;\x03<\x03<\x03<\x03=\x03=\x03=\x05=\u073D" +
		"\n=\x03=\x07=\u0740\n=\f=\x0E=\u0743\v=\x03=\x03=\x03>\x03>\x03>\x03>" +
		"\x03>\x03>\x07>\u074D\n>\f>\x0E>\u0750\v>\x03>\x03>\x05>\u0754\n>\x03" +
		"?\x03?\x03?\x03?\x07?\u075A\n?\f?\x0E?\u075D\v?\x03?\x07?\u0760\n?\f?" +
		"\x0E?\u0763\v?\x03?\x05?\u0766\n?\x03@\x03@\x03@\x03@\x03@\x07@\u076D" +
		"\n@\f@\x0E@\u0770\v@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x07@\u077C\n@\f@\x0E@\u077F\v@\x03@\x03@\x05@\u0783\n@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x03@\x07@\u078D\n@\f@\x0E@\u0790\v@\x03@\x03@\x05" +
		"@\u0794\n@\x03A\x03A\x03A\x03A\x07A\u079A\nA\fA\x0EA\u079D\vA\x05A\u079F" +
		"\nA\x03A\x03A\x05A\u07A3\nA\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03" +
		"B\x03B\x07B\u07AF\nB\fB\x0EB\u07B2\vB\x03B\x03B\x03B\x03C\x03C\x03C\x03" +
		"C\x03C\x07C\u07BC\nC\fC\x0EC\u07BF\vC\x03C\x03C\x05C\u07C3\nC\x03D\x03" +
		"D\x05D\u07C7\nD\x03D\x05D\u07CA\nD\x03E\x03E\x03E\x05E\u07CF\nE\x03E\x03" +
		"E\x03E\x03E\x03E\x07E\u07D6\nE\fE\x0EE\u07D9\vE\x05E\u07DB\nE\x03E\x03" +
		"E\x03E\x05E\u07E0\nE\x03E\x03E\x03E\x07E\u07E5\nE\fE\x0EE\u07E8\vE\x05" +
		"E\u07EA\nE\x03F\x03F\x03G\x03G\x07G\u07F0\nG\fG\x0EG\u07F3\vG\x03H\x03" +
		"H\x03H\x03H\x05H\u07F9\nH\x03H\x03H\x03H\x03H\x03H\x05H\u0800\nH\x03I" +
		"\x05I\u0803\nI\x03I\x03I\x03I\x05I\u0808\nI\x03I\x05I\u080B\nI\x03I\x03" +
		"I\x03I\x05I\u0810\nI\x03I\x03I\x05I\u0814\nI\x03I\x05I\u0817\nI\x03I\x05" +
		"I\u081A\nI\x03J\x03J\x03J\x03J\x05J\u0820\nJ\x03K\x03K\x03K\x05K\u0825" +
		"\nK\x03K\x03K\x03L\x05L\u082A\nL\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u083C\nL\x05L\u083E\nL" +
		"\x03L\x05L\u0841\nL\x03M\x03M\x03M\x03M\x03N\x03N\x03N\x07N\u084A\nN\f" +
		"N\x0EN\u084D\vN\x03O\x03O\x03O\x03O\x07O\u0853\nO\fO\x0EO\u0856\vO\x03" +
		"O\x03O\x03P\x03P\x05P\u085C\nP\x03Q\x03Q\x03Q\x03Q\x07Q\u0862\nQ\fQ\x0E" +
		"Q\u0865\vQ\x03Q\x03Q\x03R\x03R\x05R\u086B\nR\x03S\x03S\x05S\u086F\nS\x03" +
		"S\x03S\x03S\x03S\x03S\x03S\x05S\u0877\nS\x03S\x03S\x03S\x03S\x03S\x03" +
		"S\x05S\u087F\nS\x03S\x03S\x03S\x03S\x05S\u0885\nS\x03T\x03T\x03T\x03T" +
		"\x07T\u088B\nT\fT\x0ET\u088E\vT\x03T\x03T\x03U\x03U\x03U\x03U\x03U\x07" +
		"U\u0897\nU\fU\x0EU\u089A\vU\x05U\u089C\nU\x03U\x03U\x03U\x03V\x05V\u08A2" +
		"\nV\x03V\x03V\x05V\u08A6\nV\x05V\u08A8\nV\x03W\x03W\x03W\x03W\x03W\x03" +
		"W\x03W\x05W\u08B1\nW\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03" +
		"W\x05W\u08BD\nW\x05W\u08BF\nW\x03W\x03W\x03W\x03W\x03W\x05W\u08C6\nW\x03" +
		"W\x03W\x03W\x03W\x03W\x05W\u08CD\nW\x03W\x03W\x03W\x03W\x05W\u08D3\nW" +
		"\x03W\x03W\x03W\x03W\x05W\u08D9\nW\x05W\u08DB\nW\x03X\x03X\x03X\x07X\u08E0" +
		"\nX\fX\x0EX\u08E3\vX\x03Y\x03Y\x03Y\x07Y\u08E8\nY\fY\x0EY\u08EB\vY\x03" +
		"Z\x03Z\x03Z\x05Z\u08F0\nZ\x03Z\x03Z\x03[\x03[\x05[\u08F6\n[\x03[\x03[" +
		"\x05[\u08FA\n[\x05[\u08FC\n[\x03\\\x03\\\x03\\\x07\\\u0901\n\\\f\\\x0E" +
		"\\\u0904\v\\\x03]\x03]\x03]\x03]\x07]\u090A\n]\f]\x0E]\u090D\v]\x03]\x03" +
		"]\x03^\x03^";
	private static readonly _serializedATNSegment1: string =
		"\x03^\x03^\x03^\x03^\x07^\u0917\n^\f^\x0E^\u091A\v^\x03^\x03^\x05^\u091E" +
		"\n^\x03_\x03_\x05_\u0922\n_\x03`\x03`\x03a\x03a\x03a\x03a\x03a\x03a\x03" +
		"a\x03a\x03a\x03a\x05a\u0930\na\x05a\u0932\na\x03a\x03a\x03a\x03a\x03a" +
		"\x03a\x07a\u093A\na\fa\x0Ea\u093D\va\x03b\x05b\u0940\nb\x03b\x03b\x03" +
		"b\x03b\x03b\x03b\x05b\u0948\nb\x03b\x03b\x03b\x03b\x03b\x07b\u094F\nb" +
		"\fb\x0Eb\u0952\vb\x03b\x03b\x03b\x05b\u0957\nb\x03b\x03b\x03b\x03b\x03" +
		"b\x03b\x05b\u095F\nb\x03b\x03b\x03b\x05b\u0964\nb\x03b\x03b\x03b\x03b" +
		"\x03b\x03b\x03b\x03b\x07b\u096E\nb\fb\x0Eb\u0971\vb\x03b\x03b\x05b\u0975" +
		"\nb\x03b\x05b\u0978\nb\x03b\x03b\x03b\x03b\x05b\u097E\nb\x03b\x03b\x05" +
		"b\u0982\nb\x03b\x03b\x03b\x05b\u0987\nb\x03b\x03b\x03b\x05b\u098C\nb\x03" +
		"b\x03b\x03b\x05b\u0991\nb\x03c\x03c\x03c\x03c\x05c\u0997\nc\x03c\x03c" +
		"\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03" +
		"c\x03c\x03c\x03c\x07c\u09AC\nc\fc\x0Ec\u09AF\vc\x03d\x03d\x03d\x03d\x06" +
		"d\u09B5\nd\rd\x0Ed\u09B6\x03d\x03d\x05d\u09BB\nd\x03d\x03d\x03d\x03d\x03" +
		"d\x06d\u09C2\nd\rd\x0Ed\u09C3\x03d\x03d\x05d\u09C8\nd\x03d\x03d\x03d\x03" +
		"d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x07d\u09D8\nd\fd\x0E" +
		"d\u09DB\vd\x05d\u09DD\nd\x03d\x03d\x03d\x03d\x03d\x03d\x05d\u09E5\nd\x03" +
		"d\x03d\x03d\x03d\x03d\x03d\x03d\x05d\u09EE\nd\x03d\x03d\x03d\x03d\x03" +
		"d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03" +
		"d\x06d\u0A03\nd\rd\x0Ed\u0A04\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d" +
		"\x03d\x05d\u0A10\nd\x03d\x03d\x03d\x07d\u0A15\nd\fd\x0Ed\u0A18\vd\x05" +
		"d\u0A1A\nd\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x05d\u0A23\nd\x03d\x03d" +
		"\x05d\u0A27\nd\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x06d\u0A31\nd\r" +
		"d\x0Ed\u0A32\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03" +
		"d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x05d\u0A4C\n" +
		"d\x03d\x03d\x03d\x03d\x03d\x05d\u0A53\nd\x03d\x05d\u0A56\nd\x03d\x03d" +
		"\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x05d\u0A65\nd" +
		"\x03d\x03d\x05d\u0A69\nd\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x07d" +
		"\u0A73\nd\fd\x0Ed\u0A76\vd\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x06" +
		"e\u0A80\ne\re\x0Ee\u0A81\x05e\u0A84\ne\x03f\x03f\x03g\x03g\x03h\x03h\x03" +
		"i\x03i\x03j\x03j\x03j\x05j\u0A91\nj\x03k\x03k\x05k\u0A95\nk\x03l\x03l" +
		"\x03l\x06l\u0A9A\nl\rl\x0El\u0A9B\x03m\x03m\x03m\x05m\u0AA1\nm\x03n\x03" +
		"n\x03n\x03n\x03n\x03o\x05o\u0AA9\no\x03o\x03o\x05o\u0AAD\no\x03p\x03p" +
		"\x03p\x05p\u0AB2\np\x03q\x03q\x03q\x03q\x03q\x03q\x03q\x03q\x03q\x03q" +
		"\x03q\x03q\x03q\x03q\x03q\x05q\u0AC3\nq\x03q\x03q\x05q\u0AC7\nq\x03q\x03" +
		"q\x03q\x03q\x03q\x07q\u0ACE\nq\fq\x0Eq\u0AD1\vq\x03q\x05q\u0AD4\nq\x05" +
		"q\u0AD6\nq\x03r\x03r\x03r\x07r\u0ADB\nr\fr\x0Er\u0ADE\vr\x03s\x03s\x03" +
		"s\x03s\x05s\u0AE4\ns\x03s\x05s\u0AE7\ns\x03s\x05s\u0AEA\ns\x03t\x03t\x03" +
		"t\x07t\u0AEF\nt\ft\x0Et\u0AF2\vt\x03u\x03u\x03u\x03u\x05u\u0AF8\nu\x03" +
		"u\x05u\u0AFB\nu\x03v\x03v\x03v\x07v\u0B00\nv\fv\x0Ev\u0B03\vv\x03w\x03" +
		"w\x03w\x03w\x03w\x05w\u0B0A\nw\x03w\x05w\u0B0D\nw\x03x\x03x\x03x\x03x" +
		"\x03x\x03y\x03y\x03y\x03y\x07y\u0B18\ny\fy\x0Ey\u0B1B\vy\x03z\x03z\x03" +
		"z\x03z\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x07{\u0B2C" +
		"\n{\f{\x0E{\u0B2F\v{\x03{\x03{\x03{\x03{\x03{\x07{\u0B36\n{\f{\x0E{\u0B39" +
		"\v{\x05{\u0B3B\n{\x03{\x03{\x03{\x03{\x03{\x07{\u0B42\n{\f{\x0E{\u0B45" +
		"\v{\x05{\u0B47\n{\x05{\u0B49\n{\x03{\x05{\u0B4C\n{\x03{\x05{\u0B4F\n{" +
		"\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03" +
		"|\x03|\x03|\x05|\u0B61\n|\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x05}\u0B6A" +
		"\n}\x03~\x03~\x03~\x07~\u0B6F\n~\f~\x0E~\u0B72\v~\x03\x7F\x03\x7F\x03" +
		"\x7F\x03\x7F\x05\x7F\u0B78\n\x7F\x03\x80\x03\x80\x03\x80\x07\x80\u0B7D" +
		"\n\x80\f\x80\x0E\x80\u0B80\v\x80\x03\x81\x03\x81\x03\x81\x03\x82\x03\x82" +
		"\x06\x82\u0B87\n\x82\r\x82\x0E\x82\u0B88\x03\x82\x05\x82\u0B8C\n\x82\x03" +
		"\x83\x03\x83\x03\x83\x05\x83\u0B91\n\x83\x03\x84\x03\x84\x03\x84\x03\x84" +
		"\x03\x84\x03\x84\x05\x84\u0B99\n\x84\x03\x85\x03\x85\x03\x86\x03\x86\x05" +
		"\x86\u0B9F\n\x86\x03\x86\x03\x86\x03\x86\x05\x86\u0BA4\n\x86\x03\x86\x03" +
		"\x86\x03\x86\x05\x86\u0BA9\n\x86\x03\x86\x03\x86\x05\x86\u0BAD\n\x86\x03" +
		"\x86\x03\x86\x05\x86\u0BB1\n\x86\x03\x86\x03\x86\x05\x86\u0BB5\n\x86\x03" +
		"\x86\x03\x86\x05\x86\u0BB9\n\x86\x03\x86\x03\x86\x05\x86\u0BBD\n\x86\x03" +
		"\x86\x03\x86\x05\x86\u0BC1\n\x86\x03\x86\x03\x86\x05\x86\u0BC5\n\x86\x03" +
		"\x86\x05\x86\u0BC8\n\x86\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87" +
		"\x03\x87\x05\x87\u0BD1\n\x87\x03\x88\x03\x88\x03\x89\x03\x89\x03\x8A\x03" +
		"\x8A\x03\x8A\n\u039C\u03DA\u03E4\u03F5\u03FE\u0407\u0410\u0417\x02\x06" +
		"V\xC0\xC4\xC6\x8B\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
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
		"\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\x02-\x04\x02AA" +
		"\xB2\xB2\x04\x02!!\xC0\xC0\x04\x02@@\x94\x94\x04\x02eeqq\x03\x02,-\x04" +
		"\x02\xE0\xE0\xFF\xFF\x04\x02\x10\x10$$\x07\x02))55WWdd\x8D\x8D\x03\x02" +
		"EF\x04\x02WWdd\x04\x02\x98\x98\u0119\u0119\x04\x02\r\r\x87\x87\x04\x02" +
		"\x89\x89\u0119\u0119\x05\x02??\x93\x93\xCA\xCA\x06\x02RRxx\xD2\xD2\xF5" +
		"\xF5\x05\x02RR\xD2\xD2\xF5\xF5\x04\x02\x18\x18EE\x04\x02__\x7F\x7F\x04" +
		"\x02\x0F\x0FJJ\x04\x02\u011D\u011D\u011F\u011F\x05\x02\x0F\x0F\x14\x14" +
		"\xD6\xD6\x05\x02ZZ\xEF\xEF\xF7\xF7\x04\x02\u010E\u010F\u0113\u0113\x04" +
		"\x02LL\u0110\u0112\x04\x02\u010E\u010F\u0116\u0116\x04\x02::<<\x03\x02" +
		"\xDE\xDF\x04\x02\x05\x05ee\x04\x02\x05\x05aa\x05\x02\x1C\x1C\x82\x82\xEA" +
		"\xEA\x03\x02\u0106\u010D\x04\x02LL\u010E\u0117\x06\x02\x12\x12qq\x97\x97" +
		"\x9F\x9F\x04\x02ZZ\xEF\xEF\x03\x02\u010E\u010F\x04\x02KK\xA8\xA8\x04\x02" +
		"\xA0\xA0\xD7\xD7\x04\x02``\xAF\xAF\x03\x02\u011E\u011F\x04\x02MM\xD1\xD1" +
		"2\x02\r\x0E\x10\x11\x13\x13\x15\x16\x18\x19\x1B\x1B\x1D!$$&)++-35589>" +
		"IKMQQSY\\\\^`cdgillnprsuwyy||~\x81\x84\x94\x96\x96\x99\x9A\x9D\x9E\xA1" +
		"\xA1\xA3\xA4\xA6\xAF\xB1\xB9\xBB\xC1\xC3\xCA\xCC\xCF\xD1\xD5\xD7\xDF\xE1" +
		"\xE5\xE9\xE9\xEB\xF4\xF8\xFB\xFE\u0100\u0103\u0103\u0105\u0105\x11\x02" +
		"\x13\x1377RRffttxx}}\x83\x83\x95\x95\x9B\x9B\xC2\xC2\xCC\xCC\xD2\xD2\xF5" +
		"\xF5\xFD\xFD\x12\x02\r\x12\x1468QSegsuwy|~\x82\x84\x94\x96\x9A\x9C\xC1" +
		"\xC3\xCB\xCD\xD1\xD3\xF4\xF6\xFC\xFE\u0105\x02\u0DB3\x02\u0114\x03\x02" +
		"\x02\x02\x04\u011E\x03\x02\x02\x02\x06\u0121\x03\x02\x02\x02\b\u0123\x03" +
		"\x02\x02\x02\n\u0126\x03\x02\x02\x02\f\u0129\x03\x02\x02\x02\x0E\u012C" +
		"\x03\x02\x02\x02\x10\u012F\x03\x02\x02\x02\x12\u041A\x03\x02\x02\x02\x14" +
		"\u041C\x03\x02\x02\x02\x16\u04C6\x03\x02\x02\x02\x18\u04C8\x03\x02\x02" +
		"\x02\x1A\u04D9\x03\x02\x02\x02\x1C\u04DF\x03\x02\x02\x02\x1E\u04EB\x03" +
		"\x02\x02\x02 \u04F8\x03\x02\x02\x02\"\u04FB\x03\x02\x02\x02$\u04FF\x03" +
		"\x02\x02\x02&\u053B\x03\x02\x02\x02(\u053D\x03\x02\x02\x02*\u0541\x03" +
		"\x02\x02\x02,\u054D\x03\x02\x02\x02.\u0552\x03\x02\x02\x020\u0559\x03" +
		"\x02\x02\x022\u055B\x03\x02\x02\x024\u0563\x03\x02\x02\x026\u056C\x03" +
		"\x02\x02\x028\u0577\x03\x02\x02\x02:\u0586\x03\x02\x02\x02<\u0589\x03" +
		"\x02\x02\x02>\u0594\x03\x02\x02\x02@\u05A4\x03\x02\x02\x02B\u05AA\x03" +
		"\x02\x02\x02D\u05AC\x03\x02\x02\x02F\u05B7\x03\x02\x02\x02H\u05C8\x03" +
		"\x02\x02\x02J\u05CF\x03\x02\x02\x02L\u05D1\x03\x02\x02\x02N\u05D7\x03" +
		"\x02\x02\x02P\u060D\x03\x02\x02\x02R\u0619\x03\x02\x02\x02T\u0649\x03" +
		"\x02\x02\x02V\u064C\x03\x02\x02\x02X\u0672\x03\x02\x02\x02Z\u0674\x03" +
		"\x02\x02\x02\\\u067C\x03\x02\x02\x02^\u069D\x03\x02\x02\x02`\u06BC\x03" +
		"\x02\x02\x02b\u06C8\x03\x02\x02\x02d\u06E8\x03\x02\x02\x02f\u06F4\x03" +
		"\x02\x02\x02h\u06F7\x03\x02\x02\x02j\u0700\x03\x02\x02\x02l\u0711\x03" +
		"\x02\x02\x02n\u0725\x03\x02\x02\x02p\u0727\x03\x02\x02\x02r\u072F\x03" +
		"\x02\x02\x02t\u0733\x03\x02\x02\x02v\u0736\x03\x02\x02\x02x\u0739\x03" +
		"\x02\x02\x02z\u0753\x03\x02\x02\x02|\u0755\x03\x02\x02\x02~\u0793\x03" +
		"\x02\x02\x02\x80\u07A2\x03\x02\x02\x02\x82\u07A4\x03\x02\x02\x02\x84\u07C2" +
		"\x03\x02\x02\x02\x86\u07C4\x03\x02\x02\x02\x88\u07CB\x03\x02\x02\x02\x8A" +
		"\u07EB\x03\x02\x02\x02\x8C\u07ED\x03\x02\x02\x02\x8E\u07FF\x03\x02\x02" +
		"\x02\x90\u0819\x03\x02\x02\x02\x92\u081F\x03\x02\x02\x02\x94\u0821\x03" +
		"\x02\x02\x02\x96\u0840\x03\x02\x02\x02\x98\u0842\x03\x02\x02\x02\x9A\u0846" +
		"\x03\x02\x02\x02\x9C\u084E\x03\x02\x02\x02\x9E\u0859\x03\x02\x02\x02\xA0" +
		"\u085D\x03\x02\x02\x02\xA2\u0868\x03\x02\x02\x02\xA4\u0884\x03\x02\x02" +
		"\x02\xA6\u0886\x03\x02\x02\x02\xA8\u0891\x03\x02\x02\x02\xAA\u08A7\x03" +
		"\x02\x02\x02\xAC\u08DA\x03\x02\x02\x02\xAE\u08DC\x03\x02\x02\x02\xB0\u08E4" +
		"\x03\x02\x02\x02\xB2\u08EF\x03\x02\x02\x02\xB4\u08F3\x03\x02\x02\x02\xB6" +
		"\u08FD\x03\x02\x02\x02\xB8\u0905\x03\x02\x02\x02\xBA\u091D\x03\x02\x02" +
		"\x02\xBC\u0921\x03\x02\x02\x02\xBE\u0923\x03\x02\x02\x02\xC0\u0931\x03" +
		"\x02\x02\x02\xC2\u0990\x03\x02\x02\x02\xC4\u0996\x03\x02\x02\x02\xC6\u0A68" +
		"\x03\x02\x02\x02\xC8\u0A83\x03\x02\x02\x02\xCA\u0A85\x03\x02\x02\x02\xCC" +
		"\u0A87\x03\x02\x02\x02\xCE\u0A89\x03\x02\x02\x02\xD0\u0A8B\x03\x02\x02" +
		"\x02\xD2\u0A8D\x03\x02\x02\x02\xD4\u0A92\x03\x02\x02\x02\xD6\u0A99\x03" +
		"\x02\x02\x02\xD8\u0A9D\x03\x02\x02\x02\xDA\u0AA2\x03\x02\x02\x02\xDC\u0AAC" +
		"\x03\x02\x02\x02\xDE\u0AB1\x03\x02\x02\x02\xE0\u0AD5\x03\x02\x02\x02\xE2" +
		"\u0AD7\x03\x02\x02\x02\xE4\u0ADF\x03\x02\x02\x02\xE6\u0AEB\x03\x02\x02" +
		"\x02\xE8\u0AF3\x03\x02\x02\x02\xEA\u0AFC\x03\x02\x02\x02\xEC\u0B04\x03" +
		"\x02\x02\x02\xEE\u0B0E\x03\x02\x02\x02\xF0\u0B13\x03\x02\x02\x02\xF2\u0B1C" +
		"\x03\x02\x02\x02\xF4\u0B4E\x03\x02\x02\x02\xF6\u0B60\x03\x02\x02\x02\xF8" +
		"\u0B69\x03\x02\x02\x02\xFA\u0B6B\x03\x02\x02\x02\xFC\u0B77\x03\x02\x02" +
		"\x02\xFE\u0B79\x03\x02\x02\x02\u0100\u0B81\x03\x02\x02\x02\u0102\u0B8B" +
		"\x03\x02\x02\x02\u0104\u0B90\x03\x02\x02\x02\u0106\u0B98\x03\x02\x02\x02" +
		"\u0108\u0B9A\x03\x02\x02\x02\u010A\u0BC7\x03\x02\x02\x02\u010C\u0BD0\x03" +
		"\x02\x02\x02\u010E\u0BD2\x03\x02\x02\x02\u0110\u0BD4\x03\x02\x02\x02\u0112" +
		"\u0BD6\x03\x02\x02\x02\u0114\u0115\x05\x04\x03\x02\u0115\u0116\x07\x02" +
		"\x02\x03\u0116\x03\x03\x02\x02\x02\u0117\u0119\x05\x12\n\x02\u0118\u011A" +
		"\x07\u0118\x02\x02\u0119\u0118\x03\x02\x02\x02\u0119\u011A\x03\x02\x02" +
		"\x02\u011A\u011D\x03\x02\x02\x02\u011B\u011D\x05\x06\x04\x02\u011C\u0117" +
		"\x03\x02\x02\x02\u011C\u011B\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02" +
		"\u011E\u011C\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\x05\x03" +
		"\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0121\u0122\x07\u0118\x02\x02" +
		"\u0122\x07\x03\x02\x02\x02\u0123\u0124\x05\xB4[\x02\u0124\u0125\x07\x02" +
		"\x02\x03\u0125\t\x03\x02\x02\x02\u0126\u0127\x05\xB2Z\x02\u0127\u0128" +
		"\x07\x02\x02\x03\u0128\v\x03\x02\x02\x02\u0129\u012A\x05\xB0Y\x02\u012A" +
		"\u012B\x07\x02\x02\x03\u012B\r\x03\x02\x02\x02\u012C\u012D\x05\xE0q\x02" +
		"\u012D\u012E\x07\x02\x02\x03\u012E\x0F\x03\x02\x02\x02\u012F\u0130\x05" +
		"\xE6t\x02\u0130\u0131\x07\x02\x02\x03\u0131\x11\x03\x02\x02\x02\u0132" +
		"\u041B\x05$\x13\x02\u0133\u0135\x054\x1B\x02\u0134\u0133\x03\x02\x02\x02" +
		"\u0134\u0135\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u041B\x05" +
		"P)\x02\u0137\u0139\x07\xFB\x02\x02\u0138\u013A\x07\x93\x02\x02\u0139\u0138" +
		"\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02" +
		"\u013B\u041B\x05\xB0Y\x02\u013C\u013D\x076\x02\x02\u013D\u0141\x05.\x18" +
		"\x02\u013E\u013F\x07n\x02\x02\u013F\u0140\x07\x97\x02\x02\u0140\u0142" +
		"\x07T\x02\x02\u0141\u013E\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02" +
		"\u0142\u0143\x03\x02\x02\x02\u0143\u014B\x05\xB0Y\x02\u0144\u014A\x05" +
		"\"\x12\x02\u0145\u014A\x05 \x11\x02\u0146\u0147\x07\u0104\x02\x02\u0147" +
		"\u0148\t\x02\x02\x02\u0148\u014A\x05<\x1F\x02\u0149\u0144\x03\x02\x02" +
		"\x02\u0149\u0145\x03\x02\x02\x02\u0149\u0146\x03\x02\x02\x02\u014A\u014D" +
		"\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02" +
		"\u014C\u041B\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014E\u014F\x07" +
		"\x10\x02\x02\u014F\u0150\x05.\x18\x02\u0150\u0151\x05\xB0Y\x02\u0151\u0152" +
		"\x07\xD1\x02\x02\u0152\u0153\t\x02\x02\x02\u0153\u0154\x05<\x1F\x02\u0154" +
		"\u041B\x03\x02\x02\x02\u0155\u0156\x07\x10\x02\x02\u0156\u0157\x05.\x18" +
		"\x02\u0157\u0158\x05\xB0Y\x02\u0158\u0159\x07\xD1\x02\x02\u0159\u015A" +
		"\x05 \x11\x02\u015A\u041B\x03\x02\x02\x02\u015B\u015C\x07M\x02\x02\u015C" +
		"\u015F\x05.\x18\x02\u015D\u015E\x07n\x02\x02\u015E\u0160\x07T\x02\x02" +
		"\u015F\u015D\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0161\x03" +
		"\x02\x02\x02\u0161\u0163\x05\xB0Y\x02\u0162\u0164\t\x03\x02\x02\u0163" +
		"\u0162\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u041B\x03\x02" +
		"\x02\x02\u0165\u0166\x07\xD4\x02\x02\u0166\u0169\t\x04\x02\x02\u0167\u0168" +
		"\t\x05\x02\x02\u0168\u016A\x05\xB0Y\x02\u0169\u0167\x03\x02\x02\x02\u0169" +
		"\u016A\x03\x02\x02\x02\u016A\u016F\x03\x02\x02\x02\u016B\u016D\x07\x84" +
		"\x02\x02\u016C\u016B\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D" +
		"\u016E\x03\x02\x02\x02\u016E\u0170\x07\u0119\x02\x02\u016F\u016C\x03\x02" +
		"\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u041B\x03\x02\x02\x02\u0171" +
		"\u0176\x05\x18\r\x02\u0172\u0173\x07\x03\x02\x02\u0173\u0174\x05\xE6t" +
		"\x02\u0174\u0175\x07\x04\x02\x02\u0175\u0177\x03\x02\x02\x02\u0176\u0172" +
		"\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02" +
		"\u0178\u0179\x058\x1D\x02\u0179\u017E\x05:\x1E\x02\u017A\u017C\x07\x17" +
		"\x02\x02\u017B\u017A\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C" +
		"\u017D\x03\x02\x02\x02\u017D\u017F\x05$\x13\x02\u017E\u017B\x03\x02\x02" +
		"\x02\u017E\u017F\x03\x02\x02\x02\u017F\u041B\x03\x02\x02\x02\u0180\u0185" +
		"\x05\x18\r\x02\u0181\u0182\x07\x03\x02\x02\u0182\u0183\x05\xE6t\x02\u0183" +
		"\u0184\x07\x04\x02\x02\u0184\u0186\x03\x02\x02\x02\u0185\u0181\x03\x02" +
		"\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u019C\x03\x02\x02\x02\u0187" +
		"\u019B\x05\"\x12\x02\u0188\u0189\x07\xA9\x02\x02\u0189\u018A\x07\x1F\x02" +
		"\x02\u018A\u018B\x07\x03\x02\x02\u018B\u018C\x05\xE6t\x02\u018C\u018D" +
		"\x07\x04\x02\x02\u018D\u0192\x03\x02\x02\x02\u018E\u018F\x07\xA9\x02\x02" +
		"\u018F\u0190\x07\x1F\x02\x02\u0190\u0192\x05\x98M\x02\u0191\u0188\x03" +
		"\x02\x02\x02\u0191\u018E\x03\x02\x02\x02\u0192\u019B\x03\x02\x02\x02\u0193" +
		"\u019B\x05\x1C\x0F\x02\u0194\u019B\x05\x1E\x10\x02\u0195\u019B\x05\xAC" +
		"W\x02\u0196\u019B\x05H%\x02\u0197\u019B\x05 \x11\x02\u0198\u0199\x07\xE3" +
		"\x02\x02\u0199\u019B\x05<\x1F\x02\u019A\u0187\x03\x02\x02\x02\u019A\u0191" +
		"\x03\x02\x02\x02\u019A\u0193\x03\x02\x02\x02\u019A\u0194\x03\x02\x02\x02" +
		"\u019A\u0195\x03\x02\x02\x02\u019A\u0196\x03\x02\x02\x02\u019A\u0197\x03" +
		"\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C" +
		"\u019A\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u01A3\x03\x02" +
		"\x02\x02\u019E\u019C\x03\x02\x02\x02\u019F\u01A1\x07\x17\x02\x02\u01A0" +
		"\u019F\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A2\x03\x02" +
		"\x02\x02\u01A2\u01A4\x05$\x13\x02\u01A3\u01A0\x03\x02\x02\x02\u01A3\u01A4" +
		"\x03\x02\x02\x02\u01A4\u041B\x03\x02\x02\x02\u01A5\u01A6\x076\x02\x02" +
		"\u01A6\u01AA\x07\xE0\x02\x02\u01A7\u01A8\x07n\x02\x02\u01A8\u01A9\x07" +
		"\x97\x02\x02\u01A9\u01AB\x07T\x02\x02\u01AA\u01A7\x03\x02\x02\x02\u01AA" +
		"\u01AB\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AD\x05\xB2" +
		"Z\x02\u01AD\u01AE\x07\x84\x02\x02\u01AE\u01B7\x05\xB2Z\x02\u01AF\u01B6" +
		"\x058\x1D\x02\u01B0\u01B6\x05\xACW\x02\u01B1\u01B6\x05H%\x02\u01B2\u01B6" +
		"\x05 \x11\x02\u01B3\u01B4\x07\xE3\x02\x02\u01B4\u01B6\x05<\x1F\x02\u01B5" +
		"\u01AF\x03\x02\x02\x02\u01B5\u01B0\x03\x02\x02\x02\u01B5\u01B1\x03\x02" +
		"\x02\x02\u01B5\u01B2\x03\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B6" +
		"\u01B9\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B7\u01B8\x03\x02" +
		"\x02\x02\u01B8\u041B\x03\x02\x02\x02\u01B9\u01B7\x03\x02\x02\x02\u01BA" +
		"\u01BF\x05\x1A\x0E\x02\u01BB\u01BC\x07\x03\x02\x02\u01BC\u01BD\x05\xE6" +
		"t\x02\u01BD\u01BE\x07\x04\x02\x02\u01BE\u01C0\x03\x02\x02\x02\u01BF\u01BB" +
		"\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02" +
		"\u01C1\u01C2\x058\x1D\x02\u01C2\u01C7\x05:\x1E\x02\u01C3\u01C5\x07\x17" +
		"\x02\x02\u01C4\u01C3\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5" +
		"\u01C6\x03\x02\x02\x02\u01C6\u01C8\x05$\x13\x02\u01C7\u01C4\x03\x02\x02" +
		"\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u041B\x03\x02\x02\x02\u01C9\u01CA" +
		"\x07\x11\x02\x02\u01CA\u01CB\x07\xE0\x02\x02\u01CB\u01CD\x05\xB0Y\x02" +
		"\u01CC\u01CE\x05*\x16\x02\u01CD\u01CC\x03\x02\x02\x02\u01CD\u01CE\x03" +
		"\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D0\x072\x02\x02\u01D0" +
		"\u01D8\x07\xDA\x02\x02\u01D1\u01D9\x05\u0104\x83\x02\u01D2\u01D3\x07a" +
		"\x02\x02\u01D3\u01D4\x07-\x02\x02\u01D4\u01D9\x05\x9AN\x02\u01D5\u01D6" +
		"\x07a\x02\x02\u01D6\u01D7\x07\x0F\x02\x02\u01D7\u01D9\x07-\x02\x02\u01D8" +
		"\u01D1\x03\x02\x02\x02\u01D8\u01D2\x03\x02\x02\x02\u01D8\u01D5\x03\x02" +
		"\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u041B\x03\x02\x02\x02\u01DA" +
		"\u01DB\x07\x10\x02\x02\u01DB\u01DC\x07\xE0\x02\x02\u01DC\u01DD\x05\xB0" +
		"Y\x02\u01DD\u01DE\x07\r\x02\x02\u01DE\u01DF\t\x06\x02\x02\u01DF\u01E0" +
		"\x05\xE2r\x02\u01E0\u041B\x03\x02\x02\x02\u01E1\u01E2\x07\x10\x02\x02" +
		"\u01E2\u01E3\x07\xE0\x02\x02\u01E3\u01E4\x05\xB0Y\x02\u01E4\u01E5\x07" +
		"\r\x02\x02\u01E5\u01E6\t\x06\x02\x02\u01E6\u01E7\x07\x03\x02\x02\u01E7" +
		"\u01E8\x05\xE2r\x02\u01E8\u01E9\x07\x04\x02\x02\u01E9\u041B\x03\x02\x02" +
		"\x02\u01EA\u01EB\x07\x10\x02\x02\u01EB\u01EC\x07\xE0\x02\x02\u01EC\u01ED" +
		"\x05\xB0Y\x02\u01ED\u01EE\x07\xBC\x02\x02\u01EE\u01EF\x07,\x02\x02\u01EF" +
		"\u01F0\x05\xB0Y\x02\u01F0\u01F1\x07\xE8\x02\x02\u01F1\u01F2\x05\u0100" +
		"\x81\x02\u01F2\u041B\x03\x02\x02\x02\u01F3\u01F4\x07\x10\x02\x02\u01F4" +
		"\u01F5\x07\xE0\x02\x02\u01F5\u01F6\x05\xB0Y\x02\u01F6\u01F7\x07M\x02\x02" +
		"\u01F7\u01F8\t\x06\x02\x02\u01F8\u01F9\x07\x03\x02\x02\u01F9\u01FA\x05" +
		"\xAEX\x02\u01FA\u01FB\x07\x04\x02\x02\u01FB\u041B\x03\x02\x02\x02\u01FC" +
		"\u01FD\x07\x10\x02\x02\u01FD\u01FE\x07\xE0\x02\x02\u01FE\u01FF\x05\xB0" +
		"Y\x02\u01FF\u0200\x07M\x02\x02\u0200\u0201\t\x06\x02\x02\u0201\u0202\x05" +
		"\xAEX\x02\u0202\u041B\x03\x02\x02\x02\u0203\u0204\x07\x10\x02\x02\u0204" +
		"\u0205\t\x07\x02\x02\u0205\u0206\x05\xB0Y\x02\u0206\u0207\x07\xBC\x02" +
		"\x02\u0207\u0208\x07\xE8\x02\x02\u0208\u0209\x05\xB0Y\x02\u0209\u041B" +
		"\x03\x02\x02\x02\u020A\u020B\x07\x10\x02\x02\u020B\u020C\t\x07\x02\x02" +
		"\u020C\u020D\x05\xB0Y\x02\u020D\u020E\x07\xD1\x02\x02\u020E\u020F\x07" +
		"\xE3\x02\x02\u020F\u0210\x05<\x1F\x02\u0210\u041B\x03\x02\x02\x02\u0211" +
		"\u0212\x07\x10\x02\x02\u0212\u0213\t\x07\x02\x02\u0213\u0214\x05\xB0Y" +
		"\x02\u0214\u0215\x07\xF9\x02\x02\u0215\u0218\x07\xE3\x02\x02\u0216\u0217" +
		"\x07n\x02\x02\u0217\u0219\x07T\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218" +
		"\u0219\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021B\x05<\x1F" +
		"\x02\u021B\u041B\x03\x02\x02\x02\u021C\u021D\x07\x10\x02\x02\u021D\u021E" +
		"\x07\xE0\x02\x02\u021E\u021F\x05\xB0Y\x02\u021F\u0221\t\b\x02\x02\u0220" +
		"\u0222\x07,\x02\x02\u0221\u0220\x03\x02\x02\x02\u0221\u0222\x03\x02\x02" +
		"\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0225\x05\xB0Y\x02\u0224\u0226" +
		"\x05\u010C\x87\x02\u0225\u0224\x03\x02\x02\x02\u0225\u0226\x03\x02\x02" +
		"\x02\u0226\u041B\x03\x02\x02\x02\u0227\u0228\x07\x10";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\u0228\u0229\x07\xE0\x02\x02\u0229\u022B\x05\xB0Y\x02\u022A\u022C" +
		"\x05*\x16\x02\u022B\u022A\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02" +
		"\u022C\u022D\x03\x02\x02\x02\u022D\u022F\x07$\x02\x02\u022E\u0230\x07" +
		",\x02\x02\u022F\u022E\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230" +
		"\u0231\x03\x02\x02\x02\u0231\u0232\x05\xB0Y\x02\u0232\u0234\x05\xE8u\x02" +
		"\u0233\u0235\x05\xDEp\x02\u0234\u0233\x03\x02\x02\x02\u0234\u0235\x03" +
		"\x02\x02\x02\u0235\u041B\x03\x02\x02\x02\u0236\u0237\x07\x10\x02\x02\u0237" +
		"\u0238\x07\xE0\x02\x02\u0238\u023A\x05\xB0Y\x02\u0239\u023B\x05*\x16\x02" +
		"\u023A\u0239\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023C\x03" +
		"\x02\x02\x02\u023C\u023D\x07\xBE\x02\x02\u023D\u023E\x07-\x02\x02\u023E" +
		"\u023F\x07\x03\x02\x02\u023F\u0240\x05\xE2r\x02\u0240\u0241\x07\x04\x02" +
		"\x02\u0241\u041B\x03\x02\x02\x02\u0242\u0243\x07\x10\x02\x02\u0243\u0244" +
		"\x07\xE0\x02\x02\u0244\u0246\x05\xB0Y\x02\u0245\u0247\x05*\x16\x02\u0246" +
		"\u0245\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\u0248\x03\x02" +
		"\x02\x02\u0248\u0249\x07\xD1\x02\x02\u0249\u024A\x07\xCE\x02\x02\u024A" +
		"\u024E\x07\u0119\x02\x02\u024B\u024C\x07\u0104\x02\x02\u024C\u024D\x07" +
		"\xCF\x02\x02\u024D\u024F\x05<\x1F\x02\u024E\u024B\x03\x02\x02\x02\u024E" +
		"\u024F\x03\x02\x02\x02\u024F\u041B\x03\x02\x02\x02\u0250\u0251\x07\x10" +
		"\x02\x02\u0251\u0252\x07\xE0\x02\x02\u0252\u0254\x05\xB0Y\x02\u0253\u0255" +
		"\x05*\x16\x02\u0254\u0253\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02" +
		"\u0255\u0256\x03\x02\x02\x02\u0256\u0257\x07\xD1\x02\x02\u0257\u0258\x07" +
		"\xCF\x02\x02\u0258\u0259\x05<\x1F\x02\u0259\u041B\x03\x02\x02\x02\u025A" +
		"\u025B\x07\x10\x02\x02\u025B\u025C\t\x07\x02\x02\u025C\u025D\x05\xB0Y" +
		"\x02\u025D\u0261\x07\r\x02\x02\u025E\u025F\x07n\x02\x02\u025F\u0260\x07" +
		"\x97\x02\x02\u0260\u0262\x07T\x02\x02\u0261\u025E\x03\x02\x02\x02\u0261" +
		"\u0262\x03\x02\x02\x02\u0262\u0264\x03\x02\x02\x02\u0263\u0265\x05(\x15" +
		"\x02\u0264\u0263\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266\u0264" +
		"\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u041B\x03\x02\x02\x02" +
		"\u0268\u0269\x07\x10\x02\x02\u0269\u026A\x07\xE0\x02\x02\u026A\u026B\x05" +
		"\xB0Y\x02\u026B\u026C\x05*\x16\x02\u026C\u026D\x07\xBC\x02\x02\u026D\u026E" +
		"\x07\xE8\x02\x02\u026E\u026F\x05*\x16\x02\u026F\u041B\x03\x02\x02\x02" +
		"\u0270\u0271\x07\x10\x02\x02\u0271\u0272\t\x07\x02\x02\u0272\u0273\x05" +
		"\xB0Y\x02\u0273\u0276\x07M\x02\x02\u0274\u0275\x07n\x02\x02\u0275\u0277" +
		"\x07T\x02\x02\u0276\u0274\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02" +
		"\u0277\u0278\x03\x02\x02\x02\u0278\u027D\x05*\x16\x02\u0279\u027A\x07" +
		"\x05\x02\x02\u027A\u027C\x05*\x16\x02\u027B\u0279\x03\x02\x02\x02\u027C" +
		"\u027F\x03\x02\x02\x02\u027D\u027B\x03\x02\x02\x02\u027D\u027E\x03\x02" +
		"\x02\x02\u027E\u0281\x03\x02\x02\x02\u027F\u027D\x03\x02\x02\x02\u0280" +
		"\u0282\x07\xB3\x02\x02\u0281\u0280\x03\x02\x02\x02\u0281\u0282\x03\x02" +
		"\x02\x02\u0282\u041B\x03\x02\x02\x02\u0283\u0284\x07\x10\x02\x02\u0284" +
		"\u0285\x07\xE0\x02\x02\u0285\u0287\x05\xB0Y\x02\u0286\u0288\x05*\x16\x02" +
		"\u0287\u0286\x03\x02\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288\u0289\x03" +
		"\x02\x02\x02\u0289\u028A\x07\xD1\x02\x02\u028A\u028B\x05 \x11\x02\u028B" +
		"\u041B\x03\x02\x02\x02\u028C\u028D\x07\x10\x02\x02\u028D\u028E\x07\xE0" +
		"\x02\x02\u028E\u028F\x05\xB0Y\x02\u028F\u0290\x07\xB8\x02\x02\u0290\u0291" +
		"\x07\xAA\x02\x02\u0291\u041B\x03\x02\x02\x02\u0292\u0293\x07M\x02\x02" +
		"\u0293\u0296\x07\xE0\x02\x02\u0294\u0295\x07n\x02\x02\u0295\u0297\x07" +
		"T\x02\x02\u0296\u0294\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297" +
		"\u0298\x03\x02\x02\x02\u0298\u029A\x05\xB0Y\x02\u0299\u029B\x07\xB3\x02" +
		"\x02\u029A\u0299\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B\u041B" +
		"\x03\x02\x02\x02\u029C\u029D\x07M\x02\x02\u029D\u02A0\x07\xFF\x02\x02" +
		"\u029E\u029F\x07n\x02\x02\u029F\u02A1\x07T\x02\x02\u02A0\u029E\x03\x02" +
		"\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2" +
		"\u041B\x05\xB0Y\x02\u02A3\u02A6\x076\x02\x02\u02A4\u02A5\x07\x9F\x02\x02" +
		"\u02A5\u02A7\x07\xBE\x02\x02\u02A6\u02A4\x03\x02\x02\x02\u02A6\u02A7\x03" +
		"\x02\x02\x02\u02A7\u02AC\x03\x02\x02\x02\u02A8\u02AA\x07i\x02\x02\u02A9" +
		"\u02A8\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA\u02AB\x03\x02" +
		"\x02\x02\u02AB\u02AD\x07\xE4\x02\x02\u02AC\u02A9\x03\x02\x02\x02\u02AC" +
		"\u02AD\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02B2\x07\xFF" +
		"\x02\x02\u02AF\u02B0\x07n\x02\x02\u02B0\u02B1\x07\x97\x02\x02\u02B1\u02B3" +
		"\x07T\x02\x02\u02B2\u02AF\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02" +
		"\u02B3\u02B4\x03\x02\x02\x02\u02B4\u02B6\x05\xB0Y\x02\u02B5\u02B7\x05" +
		"\xA0Q\x02\u02B6\u02B5\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7" +
		"\u02C0\x03\x02\x02\x02\u02B8\u02BF\x05\"\x12\x02\u02B9\u02BA\x07\xA9\x02" +
		"\x02\u02BA\u02BB\x07\x9B\x02\x02\u02BB\u02BF\x05\x98M\x02\u02BC\u02BD" +
		"\x07\xE3\x02\x02\u02BD\u02BF\x05<\x1F\x02\u02BE\u02B8\x03\x02\x02\x02" +
		"\u02BE\u02B9\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BF\u02C2\x03" +
		"\x02\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1" +
		"\u02C3\x03\x02\x02\x02\u02C2\u02C0\x03\x02\x02\x02\u02C3\u02C4\x07\x17" +
		"\x02\x02\u02C4\u02C5\x05$\x13\x02\u02C5\u041B\x03\x02\x02\x02\u02C6\u02C9" +
		"\x076\x02\x02\u02C7\u02C8\x07\x9F\x02\x02\u02C8\u02CA\x07\xBE\x02\x02" +
		"\u02C9\u02C7\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA\u02CC\x03" +
		"\x02\x02\x02\u02CB\u02CD\x07i\x02\x02\u02CC\u02CB\x03\x02\x02\x02\u02CC" +
		"\u02CD\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02CF\x07\xE4" +
		"\x02\x02\u02CF\u02D0\x07\xFF\x02\x02\u02D0\u02D5\x05\xB2Z\x02\u02D1\u02D2" +
		"\x07\x03\x02\x02\u02D2\u02D3\x05\xE6t\x02\u02D3\u02D4\x07\x04\x02\x02" +
		"\u02D4\u02D6\x03\x02\x02\x02\u02D5\u02D1\x03\x02\x02\x02\u02D5\u02D6\x03" +
		"\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02DA\x058\x1D\x02\u02D8" +
		"\u02D9\x07\x9E\x02\x02\u02D9\u02DB\x05<\x1F\x02\u02DA\u02D8\x03\x02\x02" +
		"\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u041B\x03\x02\x02\x02\u02DC\u02DD" +
		"\x07\x10\x02\x02\u02DD\u02DE\x07\xFF\x02\x02\u02DE\u02E0\x05\xB0Y\x02" +
		"\u02DF\u02E1\x07\x17\x02\x02\u02E0\u02DF\x03\x02\x02\x02\u02E0\u02E1\x03" +
		"\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02E3\x05$\x13\x02\u02E3" +
		"\u041B\x03\x02\x02\x02\u02E4\u02E7\x076\x02\x02\u02E5\u02E6\x07\x9F\x02" +
		"\x02\u02E6\u02E8\x07\xBE\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E7\u02E8" +
		"\x03\x02\x02\x02\u02E8\u02EA\x03\x02\x02\x02\u02E9\u02EB\x07\xE4\x02\x02" +
		"\u02EA\u02E9\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02EC\x03" +
		"\x02\x02\x02\u02EC\u02F0\x07g\x02\x02\u02ED\u02EE\x07n\x02\x02\u02EE\u02EF" +
		"\x07\x97\x02\x02\u02EF\u02F1\x07T\x02\x02\u02F0\u02ED\x03\x02\x02\x02" +
		"\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F3\x05" +
		"\xB0Y\x02\u02F3\u02F4\x07\x17\x02\x02\u02F4\u02FE\x07\u0119\x02\x02\u02F5" +
		"\u02F6\x07\xFD\x02\x02\u02F6\u02FB\x05N(\x02\u02F7\u02F8\x07\x05\x02\x02" +
		"\u02F8\u02FA\x05N(\x02\u02F9\u02F7\x03\x02\x02\x02\u02FA\u02FD\x03\x02" +
		"\x02\x02\u02FB\u02F9\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02\u02FC" +
		"\u02FF\x03\x02\x02\x02\u02FD\u02FB\x03\x02\x02\x02\u02FE\u02F5\x03\x02" +
		"\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF\u041B\x03\x02\x02\x02\u0300" +
		"\u0302\x07M\x02\x02\u0301\u0303\x07\xE4\x02\x02\u0302\u0301\x03\x02\x02" +
		"\x02\u0302\u0303\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304\u0307" +
		"\x07g\x02\x02\u0305\u0306\x07n\x02\x02\u0306\u0308\x07T\x02\x02\u0307" +
		"\u0305\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308\u0309\x03\x02" +
		"\x02\x02\u0309\u041B\x05\xB0Y\x02\u030A\u030C\x07U\x02\x02\u030B\u030D" +
		"\t\t\x02\x02\u030C\u030B\x03\x02\x02\x02\u030C\u030D\x03\x02\x02\x02\u030D" +
		"\u030E\x03\x02\x02\x02\u030E\u041B\x05\x12\n\x02\u030F\u0310\x07\xD4\x02" +
		"\x02\u0310\u0313\x07\xE1\x02\x02\u0311\u0312\t\x05\x02\x02\u0312\u0314" +
		"\x05\xB0Y\x02\u0313\u0311\x03\x02\x02\x02\u0313\u0314\x03\x02\x02\x02" +
		"\u0314\u0319\x03\x02\x02\x02\u0315\u0317\x07\x84\x02\x02\u0316\u0315\x03" +
		"\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02\u0318" +
		"\u031A\x07\u0119\x02\x02\u0319\u0316\x03\x02\x02\x02\u0319\u031A\x03\x02" +
		"\x02\x02\u031A\u041B\x03\x02\x02\x02\u031B\u031C\x07\xD4\x02\x02\u031C" +
		"\u031D\x07\xE0\x02\x02\u031D\u0320\x07W\x02\x02\u031E\u031F\t\x05\x02" +
		"\x02\u031F\u0321\x05\xB0Y\x02\u0320\u031E\x03\x02\x02\x02\u0320\u0321" +
		"\x03\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0323\x07\x84\x02\x02" +
		"\u0323\u0325\x07\u0119\x02\x02\u0324\u0326\x05*\x16\x02\u0325\u0324\x03" +
		"\x02\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326\u041B\x03\x02\x02\x02\u0327" +
		"\u0328\x07\xD4\x02\x02\u0328\u0329\x07\xE3\x02\x02\u0329\u032E\x05\xB0" +
		"Y\x02\u032A\u032B\x07\x03\x02\x02\u032B\u032C\x05@!\x02\u032C\u032D\x07" +
		"\x04\x02\x02\u032D\u032F\x03\x02\x02\x02\u032E\u032A\x03\x02\x02\x02\u032E" +
		"\u032F\x03\x02\x02\x02\u032F\u041B\x03\x02\x02\x02\u0330\u0331\x07\xD4" +
		"\x02\x02\u0331\u0332\x07-\x02\x02\u0332\u0333\t\x05\x02\x02\u0333\u0336" +
		"\x05\xB0Y\x02\u0334\u0335\t\x05\x02\x02\u0335\u0337\x05\xB0Y\x02\u0336" +
		"\u0334\x03\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337\u041B\x03\x02" +
		"\x02\x02\u0338\u0339\x07\xD4\x02\x02\u0339\u033C\x07\u0100\x02\x02\u033A" +
		"\u033B\t\x05\x02\x02\u033B\u033D\x05\xB0Y\x02\u033C\u033A\x03\x02\x02" +
		"\x02\u033C\u033D\x03\x02\x02\x02\u033D\u0342\x03\x02\x02\x02\u033E\u0340" +
		"\x07\x84\x02\x02\u033F\u033E\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02" +
		"\u0340\u0341\x03\x02\x02\x02\u0341\u0343\x07\u0119\x02\x02\u0342\u033F" +
		"\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343\u041B\x03\x02\x02\x02" +
		"\u0344\u0345\x07\xD4\x02\x02\u0345\u0346\x07\xAA\x02\x02\u0346\u0348\x05" +
		"\xB0Y\x02\u0347\u0349\x05*\x16\x02\u0348\u0347\x03\x02\x02\x02\u0348\u0349" +
		"\x03\x02\x02\x02\u0349\u041B\x03\x02\x02\x02\u034A\u034C\x07\xD4\x02\x02" +
		"\u034B\u034D\x05\u0104\x83\x02\u034C\u034B\x03\x02\x02\x02\u034C\u034D" +
		"\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E\u0356\x07h\x02\x02" +
		"\u034F\u0351\x07\x84\x02\x02\u0350\u034F\x03\x02\x02\x02\u0350\u0351\x03" +
		"\x02\x02\x02\u0351\u0354\x03\x02\x02\x02\u0352\u0355\x05\xB0Y\x02\u0353" +
		"\u0355\x07\u0119\x02\x02\u0354\u0352\x03\x02\x02\x02\u0354\u0353\x03\x02" +
		"\x02\x02\u0355\u0357\x03\x02\x02\x02\u0356\u0350\x03\x02\x02\x02\u0356" +
		"\u0357\x03\x02\x02\x02\u0357\u041B\x03\x02\x02\x02\u0358\u0359\x07\xD4" +
		"\x02\x02\u0359\u035A\x076\x02\x02\u035A\u035B\x07\xE0\x02\x02\u035B\u035E" +
		"\x05\xB0Y\x02\u035C\u035D\x07\x17\x02\x02\u035D\u035F\x07\xCE\x02\x02" +
		"\u035E\u035C\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\u041B\x03" +
		"\x02\x02\x02\u0360\u0361\x07\xD4\x02\x02\u0361\u0362\x079\x02\x02\u0362" +
		"\u041B\x07\x93\x02\x02\u0363\u0364\t\n\x02\x02\u0364\u0366\x07g\x02\x02" +
		"\u0365\u0367\x07W\x02\x02\u0366\u0365\x03\x02\x02\x02\u0366\u0367\x03" +
		"\x02\x02\x02\u0367\u0368\x03\x02\x02\x02\u0368\u041B\x050\x19\x02\u0369" +
		"\u036A\t\n\x02\x02\u036A\u036C\x05.\x18\x02\u036B\u036D\x07W\x02\x02\u036C" +
		"\u036B\x03\x02\x02\x02\u036C\u036D\x03\x02\x02\x02\u036D\u036E\x03\x02" +
		"\x02\x02\u036E\u036F\x05\xB0Y\x02\u036F\u041B\x03\x02\x02\x02\u0370\u0372" +
		"\t\n\x02\x02\u0371\u0373\x07\xE0\x02\x02\u0372\u0371\x03\x02\x02\x02\u0372" +
		"\u0373\x03\x02\x02\x02\u0373\u0375\x03\x02\x02\x02\u0374\u0376\t\v\x02" +
		"\x02\u0375\u0374\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\u0377" +
		"\x03\x02\x02\x02\u0377\u0379\x05\xB0Y\x02\u0378\u037A\x05*\x16\x02\u0379" +
		"\u0378\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\u037C\x03\x02" +
		"\x02\x02\u037B\u037D\x052\x1A\x02\u037C\u037B\x03\x02\x02\x02\u037C\u037D" +
		"\x03\x02\x02\x02\u037D\u041B\x03\x02\x02\x02\u037E\u0380\t\n\x02\x02\u037F" +
		"\u0381\x07\xB4\x02\x02\u0380\u037F\x03\x02\x02\x02\u0380\u0381\x03\x02" +
		"\x02\x02\u0381\u0382\x03\x02\x02\x02\u0382\u041B\x05$\x13\x02\u0383\u0384" +
		"\x07.\x02\x02\u0384\u0385\x07\x9B\x02\x02\u0385\u0386\x05.\x18\x02\u0386" +
		"\u0387\x05\xB0Y\x02\u0387\u0388\x07{\x02\x02\u0388\u0389\t\f\x02\x02\u0389" +
		"\u041B\x03\x02\x02\x02\u038A\u038B\x07.\x02\x02\u038B\u038C\x07\x9B\x02" +
		"\x02\u038C\u038D\x07\xE0\x02\x02\u038D\u038E\x05\xB0Y\x02\u038E\u038F" +
		"\x07{\x02\x02\u038F\u0390\t\f\x02\x02\u0390\u041B\x03\x02\x02\x02\u0391" +
		"\u0392\x07\xBB\x02\x02\u0392\u0393\x07\xE0\x02\x02\u0393\u041B\x05\xB0" +
		"Y\x02\u0394\u0395\x07\xBB\x02\x02\u0395\u0396\x07g\x02\x02\u0396\u041B" +
		"\x05\xB0Y\x02\u0397\u039F\x07\xBB\x02\x02\u0398\u03A0\x07\u0119\x02\x02" +
		"\u0399\u039B\v\x02\x02\x02\u039A\u0399\x03\x02\x02\x02\u039B\u039E\x03" +
		"\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039C\u039A\x03\x02\x02\x02\u039D" +
		"\u03A0\x03\x02\x02\x02\u039E\u039C\x03\x02\x02\x02\u039F\u0398\x03\x02" +
		"\x02\x02\u039F\u039C\x03\x02\x02\x02\u03A0\u041B\x03\x02\x02\x02\u03A1" +
		"\u03A3\x07 \x02\x02\u03A2\u03A4\x07\x81\x02\x02\u03A3\u03A2\x03\x02\x02" +
		"\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5\u03A6" +
		"\x07\xE0\x02\x02\u03A6\u03A9\x05\xB0Y\x02\u03A7\u03A8\x07\x9E\x02\x02" +
		"\u03A8\u03AA\x05<\x1F\x02\u03A9\u03A7\x03\x02\x02\x02\u03A9\u03AA\x03" +
		"\x02\x02\x02\u03AA\u03AF\x03\x02\x02\x02\u03AB\u03AD\x07\x17\x02\x02\u03AC" +
		"\u03AB\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02\u03AD\u03AE\x03\x02" +
		"\x02\x02\u03AE\u03B0\x05$\x13\x02\u03AF\u03AC\x03\x02\x02\x02\u03AF\u03B0" +
		"\x03\x02\x02\x02\u03B0\u041B\x03\x02\x02\x02\u03B1\u03B2\x07\xF4\x02\x02" +
		"\u03B2\u03B5\x07\xE0\x02\x02\u03B3\u03B4\x07n\x02\x02\u03B4\u03B6\x07" +
		"T\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B5\u03B6\x03\x02\x02\x02\u03B6" +
		"\u03B7\x03\x02\x02\x02\u03B7\u041B\x05\xB0Y\x02\u03B8\u03B9\x07&\x02\x02" +
		"\u03B9\u041B\x07 \x02\x02\u03BA\u03BB\x07\x88\x02\x02\u03BB\u03BD\x07" +
		">\x02\x02\u03BC\u03BE\x07\x89\x02\x02\u03BD\u03BC\x03\x02\x02\x02\u03BD" +
		"\u03BE\x03\x02\x02\x02\u03BE\u03BF\x03\x02\x02\x02\u03BF\u03C0\x07u\x02" +
		"\x02\u03C0\u03C2\x07\u0119\x02\x02\u03C1\u03C3\x07\xA7\x02\x02\u03C2\u03C1" +
		"\x03\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02" +
		"\u03C4\u03C5\x07z\x02\x02\u03C5\u03C6\x07\xE0\x02\x02\u03C6\u03C8\x05" +
		"\xB0Y\x02\u03C7\u03C9\x05*\x16\x02\u03C8\u03C7\x03\x02\x02\x02\u03C8\u03C9" +
		"\x03\x02\x02\x02\u03C9\u041B\x03\x02\x02\x02\u03CA\u03CB\x07\xF0\x02\x02" +
		"\u03CB\u03CC\x07\xE0\x02\x02\u03CC\u03CE\x05\xB0Y\x02\u03CD\u03CF\x05" +
		"*\x16\x02\u03CE\u03CD\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02\u03CF" +
		"\u041B\x03\x02\x02\x02\u03D0\u03D1\x07\x92\x02\x02\u03D1\u03D2\x07\xBD" +
		"\x02\x02\u03D2\u03D3\x07\xE0\x02\x02\u03D3\u041B\x05\xB0Y\x02\u03D4\u03D5" +
		"\t\r\x02\x02\u03D5\u03DD\x05\u0104\x83\x02\u03D6\u03DE\x07\u0119\x02\x02" +
		"\u03D7\u03D9\v\x02\x02\x02\u03D8\u03D7\x03\x02\x02\x02\u03D9\u03DC\x03" +
		"\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DA\u03D8\x03\x02\x02\x02\u03DB" +
		"\u03DE\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DD\u03D6\x03\x02" +
		"\x02\x02\u03DD\u03DA\x03\x02\x02\x02\u03DE\u041B\x03\x02\x02\x02\u03DF" +
		"\u03E0\x07\xD1\x02\x02\u03E0\u03E4\x07\xC4\x02\x02\u03E1\u03E3\v\x02\x02" +
		"\x02\u03E2\u03E1\x03\x02\x02\x02\u03E3\u03E6\x03\x02\x02\x02\u03E4\u03E5" +
		"\x03\x02\x02\x02\u03E4\u03E2\x03\x02\x02\x02\u03E5\u041B\x03\x02\x02\x02" +
		"\u03E6\u03E4\x03\x02\x02\x02\u03E7\u03E8\x07\xD1\x02\x02\u03E8\u03E9\x07" +
		"\xE7\x02\x02\u03E9\u03EA\x07\u0105\x02\x02\u03EA\u041B\x05\xD2j\x02\u03EB" +
		"\u03EC\x07\xD1\x02\x02\u03EC\u03ED\x07\xE7\x02\x02\u03ED\u03EE\x07\u0105" +
		"\x02\x02\u03EE\u041B\t\x0E\x02\x02\u03EF\u03F0\x07\xD1\x02\x02\u03F0\u03F1" +
		"\x07\xE7\x02\x02\u03F1\u03F5\x07\u0105\x02\x02\u03F2\u03F4\v\x02\x02\x02" +
		"\u03F3\u03F2\x03\x02\x02\x02\u03F4\u03F7\x03\x02\x02\x02\u03F5\u03F6\x03" +
		"\x02\x02\x02\u03F5\u03F3\x03\x02\x02\x02\u03F6\u041B\x03\x02\x02\x02\u03F7" +
		"\u03F5\x03\x02\x02\x02\u03F8\u03F9\x07\xD1\x02\x02\u03F9\u0401\x05\x14" +
		"\v\x02\u03FA\u03FE\x07\u0106\x02\x02\u03FB\u03FD\v\x02\x02\x02\u03FC\u03FB" +
		"\x03\x02\x02\x02\u03FD\u0400\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02" +
		"\u03FE\u03FC\x03\x02\x02\x02\u03FF\u0402\x03\x02\x02\x02\u0400\u03FE\x03" +
		"\x02\x02\x02\u0401\u03FA\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402" +
		"\u041B\x03\x02\x02\x02\u0403\u0407\x07\xD1\x02\x02\u0404\u0406\v\x02\x02" +
		"\x02\u0405\u0404\x03\x02\x02\x02\u0406\u0409\x03\x02\x02\x02\u0407\u0408" +
		"\x03\x02\x02\x02\u0407\u0405\x03\x02\x02\x02\u0408\u041B\x03\x02\x02\x02" +
		"\u0409\u0407\x03\x02\x02\x02\u040A\u040B\x07\xBF\x02\x02\u040B\u041B\x05" +
		"\x14\v\x02\u040C\u0410\x07\xBF\x02\x02\u040D\u040F\v\x02\x02\x02\u040E" +
		"\u040D\x03\x02\x02\x02\u040F\u0412\x03\x02\x02\x02\u0410\u0411\x03\x02" +
		"\x02\x02\u0410\u040E\x03\x02\x02\x02\u0411\u041B\x03\x02\x02\x02\u0412" +
		"\u0410\x03\x02\x02\x02\u0413\u0417\x05\x16\f\x02\u0414\u0416\v\x02\x02" +
		"\x02\u0415\u0414\x03\x02\x02\x02\u0416\u0419\x03\x02\x02\x02\u0417\u0418" +
		"\x03\x02\x02\x02\u0417\u0415\x03\x02\x02\x02\u0418\u041B\x03\x02\x02\x02" +
		"\u0419\u0417\x03\x02\x02\x02\u041A\u0132\x03\x02\x02\x02\u041A\u0134\x03" +
		"\x02\x02\x02\u041A\u0137\x03\x02\x02\x02\u041A\u013C\x03\x02\x02\x02\u041A" +
		"\u014E\x03\x02\x02\x02\u041A\u0155\x03\x02\x02\x02\u041A\u015B\x03\x02" +
		"\x02\x02\u041A\u0165\x03\x02\x02\x02\u041A\u0171\x03\x02\x02\x02\u041A" +
		"\u0180\x03\x02\x02\x02\u041A\u01A5\x03\x02\x02\x02\u041A\u01BA\x03\x02" +
		"\x02\x02\u041A\u01C9\x03\x02\x02\x02\u041A\u01DA\x03\x02\x02\x02\u041A" +
		"\u01E1\x03\x02\x02\x02\u041A\u01EA\x03\x02\x02\x02\u041A\u01F3\x03\x02" +
		"\x02\x02\u041A\u01FC\x03\x02\x02\x02\u041A\u0203\x03\x02\x02\x02\u041A" +
		"\u020A\x03\x02\x02\x02\u041A\u0211\x03\x02\x02\x02\u041A\u021C\x03\x02" +
		"\x02\x02\u041A\u0227\x03\x02\x02\x02\u041A\u0236\x03\x02\x02\x02\u041A" +
		"\u0242\x03\x02\x02\x02\u041A\u0250\x03\x02\x02\x02\u041A\u025A\x03\x02" +
		"\x02\x02\u041A\u0268\x03\x02\x02\x02\u041A\u0270\x03\x02\x02\x02\u041A" +
		"\u0283\x03\x02\x02\x02\u041A\u028C\x03\x02\x02\x02\u041A\u0292\x03\x02" +
		"\x02\x02\u041A\u029C\x03\x02\x02\x02\u041A\u02A3\x03\x02\x02\x02\u041A" +
		"\u02C6\x03\x02\x02\x02\u041A\u02DC\x03\x02\x02\x02\u041A\u02E4\x03\x02" +
		"\x02\x02\u041A\u0300\x03\x02\x02\x02\u041A\u030A\x03\x02\x02\x02\u041A" +
		"\u030F\x03\x02\x02\x02\u041A\u031B\x03\x02\x02\x02\u041A\u0327\x03\x02" +
		"\x02\x02\u041A\u0330\x03\x02\x02\x02\u041A\u0338\x03\x02\x02\x02\u041A" +
		"\u0344\x03\x02\x02\x02\u041A\u034A\x03\x02\x02\x02\u041A\u0358\x03\x02" +
		"\x02\x02\u041A\u0360\x03\x02\x02\x02\u041A\u0363\x03\x02\x02\x02\u041A" +
		"\u0369\x03\x02\x02\x02\u041A\u0370\x03\x02\x02\x02\u041A\u037E\x03\x02" +
		"\x02\x02\u041A\u0383\x03\x02\x02\x02\u041A\u038A\x03\x02\x02\x02\u041A" +
		"\u0391\x03\x02\x02\x02\u041A\u0394\x03\x02\x02\x02\u041A\u0397\x03\x02" +
		"\x02\x02\u041A\u03A1\x03\x02\x02\x02\u041A\u03B1\x03\x02\x02\x02\u041A" +
		"\u03B8\x03\x02\x02\x02\u041A\u03BA\x03\x02\x02\x02\u041A\u03CA\x03\x02" +
		"\x02\x02\u041A\u03D0\x03\x02\x02\x02\u041A\u03D4\x03\x02\x02\x02\u041A" +
		"\u03DF\x03\x02\x02\x02\u041A\u03E7\x03\x02\x02\x02\u041A\u03EB\x03\x02" +
		"\x02\x02\u041A\u03EF\x03\x02\x02\x02\u041A\u03F8\x03\x02\x02\x02\u041A" +
		"\u0403\x03\x02\x02\x02\u041A\u040A\x03\x02\x02\x02\u041A\u040C\x03\x02" +
		"\x02\x02\u041A\u0413\x03\x02\x02\x02\u041B\x13\x03\x02\x02\x02\u041C\u041D" +
		"\x05\u0108\x85\x02\u041D\x15\x03\x02\x02\x02\u041E\u041F\x076\x02\x02" +
		"\u041F\u04C7\x07\xC4\x02\x02\u0420\u0421\x07M\x02\x02\u0421\u04C7\x07" +
		"\xC4\x02\x02\u0422\u0424\x07j\x02\x02\u0423\u0425\x07\xC4\x02\x02\u0424" +
		"\u0423\x03\x02\x02\x02\u0424\u0425\x03\x02\x02\x02\u0425\u04C7\x03\x02" +
		"\x02\x02\u0426\u0428\x07\xC1\x02\x02\u0427\u0429\x07\xC4\x02\x02\u0428" +
		"\u0427\x03\x02\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429\u04C7\x03\x02" +
		"\x02\x02\u042A\u042B\x07\xD4\x02\x02\u042B\u04C7\x07j\x02\x02\u042C\u042D" +
		"\x07\xD4\x02\x02\u042D\u042F\x07\xC4\x02\x02\u042E\u0430\x07j\x02\x02" +
		"\u042F\u042E\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\u04C7\x03" +
		"\x02\x02\x02\u0431\u0432\x07\xD4\x02\x02\u0432\u04C7\x07\xB1\x02\x02\u0433" +
		"\u0434\x07\xD4\x02\x02\u0434\u04C7\x07\xC5\x02\x02\u0435\u0436\x07\xD4" +
		"\x02\x02\u0436\u0437\x079\x02\x02\u0437\u04C7\x07\xC5\x02\x02\u0438\u0439" +
		"\x07V\x02\x02\u0439\u04C7\x07\xE0\x02\x02\u043A\u043B\x07p\x02\x02\u043B" +
		"\u04C7\x07\xE0\x02\x02\u043C\u043D\x07\xD4\x02\x02\u043D\u04C7\x071\x02" +
		"\x02\u043E\u043F\x07\xD4\x02\x02\u043F\u0440\x076\x02\x02\u0440\u04C7" +
		"\x07\xE0\x02\x02\u0441\u0442\x07\xD4\x02\x02\u0442\u04C7\x07\xEC\x02\x02" +
		"\u0443\u0444\x07\xD4\x02\x02\u0444\u04C7\x07s\x02\x02\u0445\u0446\x07" +
		"\xD4\x02\x02\u0446\u04C7\x07\x8C\x02\x02\u0447\u0448\x076\x02\x02\u0448" +
		"\u04C7\x07r\x02\x02\u0449\u044A\x07M\x02\x02\u044A\u04C7\x07r\x02\x02" +
		"\u044B\u044C\x07\x10\x02\x02\u044C\u04C7\x07r\x02\x02\u044D\u044E\x07" +
		"\x8B\x02\x02\u044E\u04C7\x07\xE0\x02\x02\u044F\u0450\x07\x8B\x02\x02\u0450" +
		"\u04C7\x07?\x02\x02\u0451\u0452\x07\xF8\x02\x02\u0452\u04C7\x07\xE0\x02" +
		"\x02\u0453\u0454\x07\xF8\x02\x02\u0454\u04C7\x07?\x02\x02\u0455\u0456" +
		"\x076\x02\x02\u0456\u0457\x07\xE4\x02\x02\u0457\u04C7\x07\x8E\x02\x02" +
		"\u0458\u0459\x07M\x02\x02\u0459\u045A\x07\xE4\x02\x02\u045A\u04C7\x07" +
		"\x8E\x02\x02\u045B\u045C\x07\x10\x02\x02\u045C\u045D\x07\xE0\x02\x02\u045D" +
		"\u045E\x05\xB2Z\x02\u045E\u045F\x07\x97\x02\x02\u045F\u0460\x07(\x02\x02" +
		"\u0460\u04C7\x03\x02\x02\x02\u0461\u0462\x07\x10\x02\x02\u0462\u0463\x07" +
		"\xE0\x02\x02\u0463\u0464\x05\xB2Z\x02\u0464\u0465\x07(\x02\x02\u0465\u0466" +
		"\x07\x1F\x02\x02\u0466\u04C7\x03\x02\x02\x02\u0467\u0468\x07\x10\x02\x02" +
		"\u0468\u0469\x07\xE0\x02\x02\u0469\u046A\x05\xB2Z\x02\u046A\u046B\x07" +
		"\x97\x02\x02\u046B\u046C\x07\xD8\x02\x02\u046C\u04C7\x03\x02\x02\x02\u046D" +
		"\u046E\x07\x10\x02\x02\u046E\u046F\x07\xE0\x02\x02\u046F\u0470\x05\xB2" +
		"Z\x02\u0470\u0471\x07\xD5\x02\x02\u0471\u0472\x07\x1F\x02\x02\u0472\u04C7" +
		"\x03\x02\x02\x02\u0473\u0474\x07\x10\x02\x02\u0474\u0475\x07\xE0\x02\x02" +
		"\u0475\u0476\x05\xB2Z\x02\u0476\u0477\x07\x97\x02\x02\u0477\u0478\x07" +
		"\xD5\x02\x02\u0478\u04C7\x03\x02\x02\x02\u0479\u047A\x07\x10\x02\x02\u047A" +
		"\u047B\x07\xE0\x02\x02\u047B\u047C\x05\xB2Z\x02\u047C\u047D\x07\x97\x02" +
		"\x02\u047D\u047E\x07\xDB\x02\x02\u047E\u047F\x07\x17\x02\x02\u047F\u0480" +
		"\x07H\x02\x02\u0480\u04C7\x03\x02\x02\x02\u0481\u0482\x07\x10\x02\x02" +
		"\u0482\u0483\x07\xE0\x02\x02\u0483\u0484\x05\xB2Z\x02\u0484\u0485\x07" +
		"\xD1\x02\x02\u0485\u0486\x07\xD5\x02\x02\u0486\u0487\x07\x8A\x02\x02\u0487" +
		"\u04C7\x03\x02\x02\x02\u0488\u0489\x07\x10\x02\x02\u0489\u048A\x07\xE0" +
		"\x02\x02\u048A\u048B\x05\xB2Z\x02\u048B\u048C\x07S\x02\x02\u048C\u048D" +
		"\x07\xA8\x02\x02\u048D\u04C7\x03\x02\x02\x02\u048E\u048F\x07\x10\x02\x02" +
		"\u048F\u0490\x07\xE0\x02\x02\u0490\u0491\x05\xB2Z\x02\u0491\u0492\x07" +
		"\x15\x02\x02\u0492\u0493\x07\xA8\x02\x02\u0493\u04C7\x03\x02\x02\x02\u0494" +
		"\u0495\x07\x10\x02\x02\u0495\u0496\x07\xE0\x02\x02\u0496\u0497\x05\xB2" +
		"Z\x02\u0497\u0498\x07\xF2\x02\x02\u0498\u0499\x07\xA8\x02\x02\u0499\u04C7" +
		"\x03\x02\x02\x02\u049A\u049B\x07\x10\x02\x02\u049B\u049C\x07\xE0\x02\x02" +
		"\u049C\u049D\x05\xB2Z\x02\u049D\u049E\x07\xE9\x02\x02\u049E\u04C7\x03" +
		"\x02\x02\x02\u049F\u04A0\x07\x10\x02\x02\u04A0\u04A1\x07\xE0\x02\x02\u04A1" +
		"\u04A3\x05\xB2Z\x02\u04A2\u04A4\x05*\x16\x02\u04A3\u04A2\x03\x02\x02\x02" +
		"\u04A3\u04A4\x03\x02\x02\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5\u04A6\x07" +
		"0\x02\x02\u04A6\u04C7\x03\x02\x02\x02\u04A7\u04A8\x07\x10\x02\x02\u04A8" +
		"\u04A9\x07\xE0\x02\x02\u04A9\u04AB\x05\xB2Z\x02\u04AA\u04AC\x05*\x16\x02" +
		"\u04AB\u04AA\x03\x02\x02\x02\u04AB\u04AC\x03\x02\x02\x02\u04AC\u04AD\x03" +
		"\x02\x02\x02\u04AD\u04AE\x073\x02\x02\u04AE\u04C7\x03\x02\x02\x02\u04AF" +
		"\u04B0\x07\x10\x02\x02\u04B0\u04B1\x07\xE0\x02\x02\u04B1\u04B3\x05\xB2" +
		"Z\x02\u04B2\u04B4\x05*\x16\x02\u04B3\u04B2\x03\x02\x02\x02\u04B3\u04B4" +
		"\x03\x02\x02\x02\u04B4\u04B5\x03\x02\x02\x02\u04B5\u04B6\x07\xD1\x02\x02" +
		"\u04B6\u04B7\x07^\x02\x02\u04B7\u04C7\x03\x02\x02\x02\u04B8\u04B9\x07" +
		"\x10\x02\x02\u04B9\u04BA\x07\xE0\x02\x02\u04BA\u04BC\x05\xB2Z\x02\u04BB" +
		"\u04BD\x05*\x16\x02\u04BC\u04BB\x03\x02\x02\x02\u04BC\u04BD\x03\x02\x02" +
		"\x02\u04BD\u04BE\x03\x02\x02\x02\u04BE\u04BF\x07\xBE\x02\x02\u04BF\u04C0" +
		"\x07-\x02\x02\u04C0\u04C7\x03\x02\x02\x02\u04C1\u04C2\x07\xD9\x02\x02" +
		"\u04C2\u04C7\x07\xEB\x02\x02\u04C3\u04C7\x07/\x02\x02\u04C4\u04C7\x07" +
		"\xC6\x02\x02\u04C5\u04C7\x07G\x02\x02\u04C6\u041E\x03\x02\x02\x02\u04C6" +
		"\u0420\x03\x02\x02\x02\u04C6\u0422\x03\x02\x02\x02\u04C6\u0426\x03\x02" +
		"\x02\x02";
	private static readonly _serializedATNSegment3: string =
		"\u04C6\u042A\x03\x02\x02\x02\u04C6\u042C\x03\x02\x02\x02\u04C6\u0431\x03" +
		"\x02\x02\x02\u04C6\u0433\x03\x02\x02\x02\u04C6\u0435\x03\x02\x02\x02\u04C6" +
		"\u0438\x03\x02\x02\x02\u04C6\u043A\x03\x02\x02\x02\u04C6\u043C\x03\x02" +
		"\x02\x02\u04C6\u043E\x03\x02\x02\x02\u04C6\u0441\x03\x02\x02\x02\u04C6" +
		"\u0443\x03\x02\x02\x02\u04C6\u0445\x03\x02\x02\x02\u04C6\u0447\x03\x02" +
		"\x02\x02\u04C6\u0449\x03\x02\x02\x02\u04C6\u044B\x03\x02\x02\x02\u04C6" +
		"\u044D\x03\x02\x02\x02\u04C6\u044F\x03\x02\x02\x02\u04C6\u0451\x03\x02" +
		"\x02\x02\u04C6\u0453\x03\x02\x02\x02\u04C6\u0455\x03\x02\x02\x02\u04C6" +
		"\u0458\x03\x02\x02\x02\u04C6\u045B\x03\x02\x02\x02\u04C6\u0461\x03\x02" +
		"\x02\x02\u04C6\u0467\x03\x02\x02\x02\u04C6\u046D\x03\x02\x02\x02\u04C6" +
		"\u0473\x03\x02\x02\x02\u04C6\u0479\x03\x02\x02\x02\u04C6\u0481\x03\x02" +
		"\x02\x02\u04C6\u0488\x03\x02\x02\x02\u04C6\u048E\x03\x02\x02\x02\u04C6" +
		"\u0494\x03\x02\x02\x02\u04C6\u049A\x03\x02\x02\x02\u04C6\u049F\x03\x02" +
		"\x02\x02\u04C6\u04A7\x03\x02\x02\x02\u04C6\u04AF\x03\x02\x02\x02\u04C6" +
		"\u04B8\x03\x02\x02\x02\u04C6\u04C1\x03\x02\x02\x02\u04C6\u04C3\x03\x02" +
		"\x02\x02\u04C6\u04C4\x03\x02\x02\x02\u04C6\u04C5\x03\x02\x02\x02\u04C7" +
		"\x17\x03\x02\x02\x02\u04C8\u04CA\x076\x02\x02\u04C9\u04CB\x07\xE4\x02" +
		"\x02\u04CA\u04C9\x03\x02\x02\x02\u04CA\u04CB\x03\x02\x02\x02\u04CB\u04CD" +
		"\x03\x02\x02\x02\u04CC\u04CE\x07X\x02\x02\u04CD\u04CC\x03\x02\x02\x02" +
		"\u04CD\u04CE\x03\x02\x02\x02\u04CE\u04CF\x03\x02\x02\x02\u04CF\u04D3\x07" +
		"\xE0\x02\x02\u04D0\u04D1\x07n\x02\x02\u04D1\u04D2\x07\x97\x02\x02\u04D2" +
		"\u04D4\x07T\x02\x02\u04D3\u04D0\x03\x02\x02\x02\u04D3\u04D4\x03\x02\x02" +
		"\x02\u04D4\u04D5\x03\x02\x02\x02\u04D5\u04D6\x05\xB0Y\x02\u04D6\x19\x03" +
		"\x02\x02\x02\u04D7\u04D8\x076\x02\x02\u04D8\u04DA\x07\x9F\x02\x02\u04D9" +
		"\u04D7\x03\x02\x02\x02\u04D9\u04DA\x03\x02\x02\x02\u04DA\u04DB\x03\x02" +
		"\x02\x02\u04DB\u04DC\x07\xBE\x02\x02\u04DC\u04DD\x07\xE0\x02\x02\u04DD" +
		"\u04DE\x05\xB0Y\x02\u04DE\x1B\x03\x02\x02\x02\u04DF\u04E0\x07(\x02\x02" +
		"\u04E0\u04E1\x07\x1F\x02\x02\u04E1\u04E5\x05\x98M\x02\u04E2\u04E3\x07" +
		"\xD8\x02\x02\u04E3\u04E4\x07\x1F\x02\x02\u04E4\u04E6\x05\x9CO\x02\u04E5" +
		"\u04E2\x03\x02\x02\x02\u04E5\u04E6\x03\x02\x02\x02\u04E6\u04E7\x03\x02" +
		"\x02\x02\u04E7\u04E8\x07z\x02\x02\u04E8\u04E9\x07\u011D\x02\x02\u04E9" +
		"\u04EA\x07\x1E\x02\x02\u04EA\x1D\x03\x02\x02\x02\u04EB\u04EC\x07\xD5\x02" +
		"\x02\u04EC\u04ED\x07\x1F\x02\x02\u04ED\u04EE\x05\x98M\x02\u04EE\u04F1" +
		"\x07\x9B\x02\x02\u04EF\u04F2\x05D#\x02\u04F0\u04F2\x05F$\x02\u04F1\u04EF" +
		"\x03\x02\x02\x02\u04F1\u04F0\x03\x02\x02\x02\u04F2\u04F6\x03\x02\x02\x02" +
		"\u04F3\u04F4\x07\xDB\x02\x02\u04F4\u04F5\x07\x17\x02\x02\u04F5\u04F7\x07" +
		"H\x02\x02\u04F6\u04F3\x03\x02\x02\x02\u04F6\u04F7\x03\x02\x02\x02\u04F7" +
		"\x1F\x03\x02\x02\x02\u04F8\u04F9\x07\x8A\x02\x02\u04F9\u04FA\x07\u0119" +
		"\x02\x02\u04FA!\x03\x02\x02\x02\u04FB\u04FC\x07.\x02\x02\u04FC\u04FD\x07" +
		"\u0119\x02\x02\u04FD#\x03\x02\x02\x02\u04FE\u0500\x054\x1B\x02\u04FF\u04FE" +
		"\x03\x02\x02\x02\u04FF\u0500\x03\x02\x02\x02\u0500\u0501\x03\x02\x02\x02" +
		"\u0501\u0502\x05V,\x02\u0502\u0503\x05R*\x02\u0503%\x03\x02\x02\x02\u0504" +
		"\u0505\x07w\x02\x02\u0505\u0507\x07\xA7\x02\x02\u0506\u0508\x07\xE0\x02" +
		"\x02\u0507\u0506\x03\x02\x02\x02\u0507\u0508\x03\x02\x02\x02\u0508\u0509" +
		"\x03\x02\x02\x02\u0509\u0510\x05\xB0Y\x02\u050A\u050E\x05*\x16\x02\u050B" +
		"\u050C\x07n\x02\x02\u050C\u050D\x07\x97\x02\x02\u050D\u050F\x07T\x02\x02" +
		"\u050E\u050B\x03\x02\x02\x02\u050E\u050F\x03\x02\x02\x02\u050F\u0511\x03" +
		"\x02\x02\x02\u0510\u050A\x03\x02\x02\x02\u0510\u0511\x03\x02\x02\x02\u0511" +
		"\u053C\x03\x02\x02\x02\u0512\u0513\x07w\x02\x02\u0513\u0515\x07z\x02\x02" +
		"\u0514\u0516\x07\xE0\x02\x02\u0515\u0514\x03\x02\x02\x02\u0515\u0516\x03" +
		"\x02\x02\x02\u0516\u0517\x03\x02\x02\x02\u0517\u0519\x05\xB0Y\x02\u0518" +
		"\u051A\x05*\x16\x02\u0519\u0518\x03\x02\x02\x02\u0519\u051A\x03\x02\x02" +
		"\x02\u051A\u051E\x03\x02\x02\x02\u051B\u051C\x07n\x02\x02\u051C\u051D" +
		"\x07\x97\x02\x02\u051D\u051F\x07T\x02\x02\u051E\u051B\x03\x02\x02\x02" +
		"\u051E\u051F\x03\x02\x02\x02\u051F\u053C\x03\x02\x02\x02\u0520\u0521\x07" +
		"w\x02\x02\u0521\u0523\x07\xA7\x02\x02\u0522\u0524\x07\x89\x02\x02\u0523" +
		"\u0522\x03\x02\x02\x02\u0523\u0524\x03\x02\x02\x02\u0524\u0525\x03\x02" +
		"\x02\x02\u0525\u0526\x07I\x02\x02\u0526\u0528\x07\u0119\x02\x02\u0527" +
		"\u0529\x05\xACW\x02\u0528\u0527\x03\x02\x02\x02\u0528\u0529\x03\x02\x02" +
		"\x02\u0529\u052B\x03\x02\x02\x02\u052A\u052C\x05H%\x02\u052B\u052A\x03" +
		"\x02\x02\x02\u052B\u052C\x03\x02\x02\x02\u052C\u053C\x03\x02\x02\x02\u052D" +
		"\u052E\x07w\x02\x02\u052E\u0530\x07\xA7\x02\x02\u052F\u0531\x07\x89\x02" +
		"\x02\u0530\u052F\x03\x02\x02\x02\u0530\u0531\x03\x02\x02\x02\u0531\u0532" +
		"\x03\x02\x02\x02\u0532\u0534\x07I\x02\x02\u0533\u0535\x07\u0119\x02\x02" +
		"\u0534\u0533\x03\x02\x02\x02\u0534\u0535\x03\x02\x02\x02\u0535\u0536\x03" +
		"\x02\x02\x02\u0536\u0539\x058\x1D\x02\u0537\u0538\x07\x9E\x02\x02\u0538" +
		"\u053A\x05<\x1F\x02\u0539\u0537\x03\x02\x02\x02\u0539\u053A\x03\x02\x02" +
		"\x02\u053A\u053C\x03\x02\x02\x02\u053B\u0504\x03\x02\x02\x02\u053B\u0512" +
		"\x03\x02\x02\x02\u053B\u0520\x03\x02\x02\x02\u053B\u052D\x03\x02\x02\x02" +
		"\u053C\'\x03\x02\x02\x02\u053D\u053F\x05*\x16\x02\u053E\u0540\x05 \x11" +
		"\x02\u053F\u053E\x03\x02\x02\x02\u053F\u0540\x03\x02\x02\x02\u0540)\x03" +
		"\x02\x02\x02\u0541\u0542\x07\xA8\x02\x02\u0542\u0543\x07\x03\x02\x02\u0543" +
		"\u0548\x05,\x17\x02\u0544\u0545\x07\x05\x02\x02\u0545\u0547\x05,\x17\x02" +
		"\u0546\u0544\x03\x02\x02\x02\u0547\u054A\x03\x02\x02\x02\u0548\u0546\x03" +
		"\x02\x02\x02\u0548\u0549\x03\x02\x02\x02\u0549\u054B\x03\x02\x02\x02\u054A" +
		"\u0548\x03\x02\x02\x02\u054B\u054C\x07\x04\x02\x02\u054C+\x03\x02\x02" +
		"\x02\u054D\u0550\x05\u0104\x83\x02\u054E\u054F\x07\u0106\x02\x02\u054F" +
		"\u0551\x05\xC8e\x02\u0550\u054E\x03\x02\x02\x02\u0550\u0551\x03\x02\x02" +
		"\x02\u0551-\x03\x02\x02\x02\u0552\u0553\t\x0F\x02\x02\u0553/\x03\x02\x02" +
		"\x02\u0554\u055A\x05\xFE\x80\x02\u0555\u055A\x07\u0119\x02\x02\u0556\u055A" +
		"\x05\xCAf\x02\u0557\u055A\x05\xCCg\x02\u0558\u055A\x05\xCEh\x02\u0559" +
		"\u0554\x03\x02\x02\x02\u0559\u0555\x03\x02\x02\x02\u0559\u0556\x03\x02" +
		"\x02\x02\u0559\u0557\x03\x02\x02\x02\u0559\u0558\x03\x02\x02\x02\u055A" +
		"1\x03\x02\x02\x02\u055B\u0560\x05\u0104\x83\x02\u055C\u055D\x07\x06\x02" +
		"\x02\u055D\u055F\x05\u0104\x83\x02\u055E\u055C\x03\x02\x02\x02\u055F\u0562" +
		"\x03\x02\x02\x02\u0560\u055E\x03\x02\x02\x02\u0560\u0561\x03\x02\x02\x02" +
		"\u05613\x03\x02\x02\x02\u0562\u0560\x03\x02\x02\x02\u0563\u0564\x07\u0104" +
		"\x02\x02\u0564\u0569\x056\x1C\x02\u0565\u0566\x07\x05\x02\x02\u0566\u0568" +
		"\x056\x1C\x02\u0567\u0565\x03\x02\x02\x02\u0568\u056B\x03\x02\x02\x02" +
		"\u0569\u0567\x03\x02\x02\x02\u0569\u056A\x03\x02\x02\x02\u056A5\x03\x02" +
		"\x02\x02\u056B\u0569\x03\x02\x02\x02\u056C\u056E\x05\u0100\x81\x02\u056D" +
		"\u056F\x05\x98M\x02\u056E\u056D\x03\x02\x02\x02\u056E\u056F\x03\x02\x02" +
		"\x02\u056F\u0571\x03\x02\x02\x02\u0570\u0572\x07\x17\x02\x02\u0571\u0570" +
		"\x03\x02\x02\x02\u0571\u0572\x03\x02\x02\x02\u0572\u0573\x03\x02\x02\x02" +
		"\u0573\u0574\x07\x03\x02\x02\u0574\u0575\x05$\x13\x02\u0575\u0576\x07" +
		"\x04\x02\x02\u05767\x03\x02\x02\x02\u0577\u0578\x07\xFD\x02\x02\u0578" +
		"\u0579\x05\xB0Y\x02\u05799\x03\x02\x02\x02\u057A\u057B\x07\x9E\x02\x02" +
		"\u057B\u0585\x05<\x1F\x02\u057C\u057D\x07\xA9\x02\x02\u057D\u057E\x07" +
		"\x1F\x02\x02\u057E\u0585\x05\xB8]\x02\u057F\u0585\x05\x1C\x0F\x02\u0580" +
		"\u0585\x05 \x11\x02\u0581\u0585\x05\"\x12\x02\u0582\u0583\x07\xE3\x02" +
		"\x02\u0583\u0585\x05<\x1F\x02\u0584\u057A\x03\x02\x02\x02\u0584\u057C" +
		"\x03\x02\x02\x02\u0584\u057F\x03\x02\x02\x02\u0584\u0580\x03\x02\x02\x02" +
		"\u0584\u0581\x03\x02\x02\x02\u0584\u0582\x03\x02\x02\x02\u0585\u0588\x03" +
		"\x02\x02\x02\u0586\u0584\x03\x02\x02\x02\u0586\u0587\x03\x02\x02\x02\u0587" +
		";\x03\x02\x02\x02\u0588\u0586\x03\x02\x02\x02\u0589\u058A\x07\x03\x02" +
		"\x02\u058A\u058F\x05> \x02\u058B\u058C\x07\x05\x02\x02\u058C\u058E\x05" +
		"> \x02\u058D\u058B\x03\x02\x02\x02\u058E\u0591\x03\x02\x02\x02\u058F\u058D" +
		"\x03\x02\x02\x02\u058F\u0590\x03\x02\x02\x02\u0590\u0592\x03\x02\x02\x02" +
		"\u0591\u058F\x03\x02\x02\x02\u0592\u0593\x07\x04\x02\x02\u0593=\x03\x02" +
		"\x02\x02\u0594\u0599\x05@!\x02\u0595\u0597\x07\u0106\x02\x02\u0596\u0595" +
		"\x03\x02\x02\x02\u0596\u0597\x03\x02\x02\x02\u0597\u0598\x03\x02\x02\x02" +
		"\u0598\u059A\x05B\"\x02\u0599\u0596\x03\x02\x02\x02\u0599\u059A\x03\x02" +
		"\x02\x02\u059A?\x03\x02\x02\x02\u059B\u05A0\x05\u0104\x83\x02\u059C\u059D" +
		"\x07\x06\x02\x02\u059D\u059F\x05\u0104\x83\x02\u059E\u059C\x03\x02\x02" +
		"\x02\u059F\u05A2\x03\x02\x02\x02\u05A0\u059E\x03\x02\x02\x02\u05A0\u05A1" +
		"\x03\x02\x02\x02\u05A1\u05A5\x03\x02\x02\x02\u05A2\u05A0\x03\x02\x02\x02" +
		"\u05A3\u05A5\x07\u0119\x02\x02\u05A4\u059B\x03\x02\x02\x02\u05A4\u05A3" +
		"\x03\x02\x02\x02\u05A5A\x03\x02\x02\x02\u05A6\u05AB\x07\u011D\x02\x02" +
		"\u05A7\u05AB\x07\u011F\x02\x02\u05A8\u05AB\x05\xD0i\x02\u05A9\u05AB\x07" +
		"\u0119\x02\x02\u05AA\u05A6\x03\x02\x02\x02\u05AA\u05A7\x03\x02\x02\x02" +
		"\u05AA\u05A8\x03\x02\x02\x02\u05AA\u05A9\x03\x02\x02\x02\u05ABC\x03\x02" +
		"\x02\x02\u05AC\u05AD\x07\x03\x02\x02\u05AD\u05B2\x05\xC8e\x02\u05AE\u05AF" +
		"\x07\x05\x02\x02\u05AF\u05B1\x05\xC8e\x02\u05B0\u05AE\x03\x02\x02\x02" +
		"\u05B1\u05B4\x03\x02\x02\x02\u05B2\u05B0\x03\x02\x02\x02\u05B2\u05B3\x03" +
		"\x02\x02\x02\u05B3\u05B5\x03\x02\x02\x02\u05B4\u05B2\x03\x02\x02\x02\u05B5" +
		"\u05B6\x07\x04\x02\x02\u05B6E\x03\x02\x02\x02\u05B7\u05B8\x07\x03\x02" +
		"\x02\u05B8\u05BD\x05D#\x02\u05B9\u05BA\x07\x05\x02\x02\u05BA\u05BC\x05" +
		"D#\x02\u05BB\u05B9\x03\x02\x02\x02\u05BC\u05BF\x03\x02\x02\x02\u05BD\u05BB" +
		"\x03\x02\x02\x02\u05BD\u05BE\x03\x02\x02\x02\u05BE\u05C0\x03\x02\x02\x02" +
		"\u05BF\u05BD\x03\x02\x02\x02\u05C0\u05C1\x07\x04\x02\x02\u05C1G\x03\x02" +
		"\x02\x02\u05C2\u05C3\x07\xDB\x02\x02\u05C3\u05C4\x07\x17\x02\x02\u05C4" +
		"\u05C9\x05J&\x02\u05C5\u05C6\x07\xDB\x02\x02\u05C6\u05C7\x07\x1F\x02\x02" +
		"\u05C7\u05C9\x05L\'\x02\u05C8\u05C2\x03\x02\x02\x02\u05C8\u05C5\x03\x02" +
		"\x02\x02\u05C9I\x03\x02\x02\x02\u05CA\u05CB\x07v\x02\x02\u05CB\u05CC\x07" +
		"\u0119\x02\x02\u05CC\u05CD\x07\xA3\x02\x02\u05CD\u05D0\x07\u0119\x02\x02" +
		"\u05CE\u05D0\x05\u0104\x83\x02\u05CF\u05CA\x03\x02\x02\x02\u05CF\u05CE" +
		"\x03\x02\x02\x02\u05D0K\x03\x02\x02\x02\u05D1\u05D5\x07\u0119\x02\x02" +
		"\u05D2\u05D3\x07\u0104\x02\x02\u05D3\u05D4\x07\xCF\x02\x02\u05D4\u05D6" +
		"\x05<\x1F\x02\u05D5\u05D2\x03\x02\x02\x02\u05D5\u05D6\x03\x02\x02\x02" +
		"\u05D6M\x03\x02\x02\x02\u05D7\u05D8\x05\u0104\x83\x02\u05D8\u05D9\x07" +
		"\u0119\x02\x02\u05D9O\x03\x02\x02\x02\u05DA\u05DB\x05&\x14\x02\u05DB\u05DC" +
		"\x05V,\x02\u05DC\u05DD\x05R*\x02\u05DD\u060E\x03\x02\x02\x02\u05DE\u05E0" +
		"\x05|?\x02\u05DF\u05E1\x05T+\x02\u05E0\u05DF\x03\x02\x02\x02\u05E1\u05E2" +
		"\x03\x02\x02\x02\u05E2\u05E0\x03\x02\x02\x02\u05E2\u05E3\x03\x02\x02\x02" +
		"\u05E3\u060E\x03\x02\x02\x02\u05E4\u05E5\x07C\x02\x02\u05E5\u05E6\x07" +
		"e\x02\x02\u05E6\u05E7\x05\xB0Y\x02\u05E7\u05E9\x05\xAAV\x02\u05E8\u05EA" +
		"\x05t;\x02\u05E9\u05E8\x03\x02\x02\x02\u05E9\u05EA\x03\x02\x02\x02\u05EA" +
		"\u060E\x03\x02\x02\x02\u05EB\u05EC\x07\xFA\x02\x02\u05EC\u05ED\x05\xB0" +
		"Y\x02\u05ED\u05EE\x05\xAAV\x02\u05EE\u05F0\x05f4\x02\u05EF\u05F1\x05t" +
		";\x02\u05F0\u05EF\x03\x02\x02\x02\u05F0\u05F1\x03\x02\x02\x02\u05F1\u060E" +
		"\x03\x02\x02\x02\u05F2\u05F3\x07\x91\x02\x02\u05F3\u05F4\x07z\x02\x02" +
		"\u05F4\u05F5\x05\xB0Y\x02\u05F5\u05F6\x05\xAAV\x02\u05F6\u05FC\x07\xFD" +
		"\x02\x02\u05F7\u05FD\x05\xB0Y\x02\u05F8\u05F9\x07\x03\x02\x02\u05F9\u05FA" +
		"\x05$\x13\x02\u05FA\u05FB\x07\x04\x02\x02\u05FB\u05FD\x03\x02\x02\x02" +
		"\u05FC\u05F7\x03\x02\x02\x02\u05FC\u05F8\x03\x02\x02\x02\u05FD\u05FE\x03" +
		"\x02\x02\x02\u05FE\u05FF\x05\xAAV\x02\u05FF\u0600\x07\x9B\x02\x02\u0600" +
		"\u0604\x05\xC0a\x02\u0601\u0603\x05h5\x02\u0602\u0601\x03\x02\x02\x02" +
		"\u0603\u0606\x03\x02\x02\x02\u0604\u0602\x03\x02\x02\x02\u0604\u0605\x03" +
		"\x02\x02\x02\u0605\u060A\x03\x02\x02\x02\u0606\u0604\x03\x02\x02\x02\u0607" +
		"\u0609\x05j6\x02\u0608\u0607\x03\x02\x02\x02\u0609\u060C\x03\x02\x02\x02" +
		"\u060A\u0608\x03\x02\x02\x02\u060A\u060B\x03\x02\x02\x02\u060B\u060E\x03" +
		"\x02\x02\x02\u060C\u060A\x03\x02\x02\x02\u060D\u05DA\x03\x02\x02\x02\u060D" +
		"\u05DE\x03\x02\x02\x02\u060D\u05E4\x03\x02\x02\x02\u060D\u05EB\x03\x02" +
		"\x02\x02\u060D\u05F2\x03\x02\x02\x02\u060EQ\x03\x02\x02\x02\u060F\u0610" +
		"\x07\xA0\x02\x02\u0610\u0611\x07\x1F\x02\x02\u0611\u0616\x05Z.\x02\u0612" +
		"\u0613\x07\x05\x02\x02\u0613\u0615\x05Z.\x02\u0614\u0612\x03\x02\x02\x02" +
		"\u0615\u0618\x03\x02\x02\x02\u0616\u0614\x03\x02\x02\x02\u0616\u0617\x03" +
		"\x02\x02\x02\u0617\u061A\x03\x02\x02\x02\u0618\u0616\x03\x02\x02\x02\u0619" +
		"\u060F\x03\x02\x02\x02\u0619\u061A\x03\x02\x02\x02\u061A\u0625\x03\x02" +
		"\x02\x02\u061B\u061C\x07\'\x02\x02\u061C\u061D\x07\x1F\x02\x02\u061D\u0622" +
		"\x05\xBE`\x02\u061E\u061F\x07\x05\x02\x02\u061F\u0621\x05\xBE`\x02\u0620" +
		"\u061E\x03\x02\x02\x02\u0621\u0624\x03\x02\x02\x02\u0622\u0620\x03\x02" +
		"\x02\x02\u0622\u0623\x03\x02\x02\x02\u0623\u0626\x03\x02\x02\x02\u0624" +
		"\u0622\x03\x02\x02\x02\u0625\u061B\x03\x02\x02\x02\u0625\u0626\x03\x02" +
		"\x02\x02\u0626\u0631\x03\x02\x02\x02\u0627\u0628\x07K\x02\x02\u0628\u0629" +
		"\x07\x1F\x02\x02\u0629\u062E\x05\xBE`\x02\u062A\u062B\x07\x05\x02\x02" +
		"\u062B\u062D\x05\xBE`\x02\u062C\u062A\x03\x02\x02\x02\u062D\u0630\x03" +
		"\x02\x02\x02\u062E\u062C\x03\x02\x02\x02\u062E\u062F\x03\x02\x02\x02\u062F" +
		"\u0632\x03\x02\x02\x02\u0630\u062E\x03\x02\x02\x02\u0631\u0627\x03\x02" +
		"\x02\x02\u0631\u0632\x03\x02\x02\x02\u0632\u063D\x03\x02\x02\x02\u0633" +
		"\u0634\x07\xD7\x02\x02\u0634\u0635\x07\x1F\x02\x02\u0635\u063A\x05Z.\x02" +
		"\u0636\u0637\x07\x05\x02\x02\u0637\u0639\x05Z.\x02\u0638\u0636\x03\x02" +
		"\x02\x02\u0639\u063C\x03\x02\x02\x02\u063A\u0638\x03\x02\x02\x02\u063A" +
		"\u063B\x03\x02\x02\x02\u063B\u063E\x03\x02\x02\x02\u063C\u063A\x03\x02" +
		"\x02\x02\u063D\u0633\x03\x02\x02\x02\u063D\u063E\x03\x02\x02\x02\u063E" +
		"\u0640\x03\x02\x02\x02\u063F\u0641\x05\xF0y\x02\u0640\u063F\x03\x02\x02" +
		"\x02\u0640\u0641\x03\x02\x02\x02\u0641\u0647\x03\x02\x02\x02\u0642\u0645" +
		"\x07\x85\x02\x02\u0643\u0646\x07\x0F\x02\x02\u0644\u0646\x05\xBE`\x02" +
		"\u0645\u0643\x03\x02\x02\x02\u0645\u0644\x03\x02\x02\x02\u0646\u0648\x03" +
		"\x02\x02\x02\u0647\u0642\x03\x02\x02\x02\u0647\u0648\x03\x02\x02\x02\u0648" +
		"S\x03\x02\x02\x02\u0649\u064A\x05&\x14\x02\u064A\u064B\x05^0\x02\u064B" +
		"U\x03\x02\x02\x02\u064C\u064D\b,\x01\x02\u064D\u064E\x05X-\x02\u064E\u0666" +
		"\x03\x02\x02\x02\u064F\u0650\f\x05\x02\x02\u0650\u0651\x06,\x03\x02\u0651" +
		"\u0653\t\x10\x02\x02\u0652\u0654\x05\x8AF\x02\u0653\u0652\x03\x02\x02" +
		"\x02\u0653\u0654\x03\x02\x02\x02\u0654\u0655\x03\x02\x02\x02\u0655\u0665" +
		"\x05V,\x06\u0656\u0657\f\x04\x02\x02\u0657\u0658\x06,\x05\x02\u0658\u065A" +
		"\x07x\x02\x02\u0659\u065B\x05\x8AF\x02\u065A\u0659\x03\x02\x02\x02\u065A" +
		"\u065B\x03\x02\x02\x02\u065B\u065C\x03\x02\x02\x02\u065C\u0665\x05V,\x05" +
		"\u065D\u065E\f\x03\x02\x02\u065E\u065F\x06,\x07\x02\u065F\u0661\t\x11" +
		"\x02\x02\u0660\u0662\x05\x8AF\x02\u0661\u0660\x03\x02\x02\x02\u0661\u0662" +
		"\x03\x02\x02\x02\u0662\u0663\x03\x02\x02\x02\u0663\u0665\x05V,\x04\u0664" +
		"\u064F\x03\x02\x02\x02\u0664\u0656\x03\x02\x02\x02\u0664\u065D\x03\x02" +
		"\x02\x02\u0665\u0668\x03\x02\x02\x02\u0666\u0664\x03\x02\x02\x02\u0666" +
		"\u0667\x03\x02\x02\x02\u0667W\x03\x02\x02\x02\u0668\u0666\x03\x02\x02" +
		"\x02\u0669\u0673\x05`1\x02\u066A\u0673\x05\\/\x02\u066B\u066C\x07\xE0" +
		"\x02\x02\u066C\u0673\x05\xB0Y\x02\u066D\u0673\x05\xA6T\x02\u066E\u066F" +
		"\x07\x03\x02\x02\u066F\u0670\x05$\x13\x02\u0670\u0671\x07\x04\x02\x02" +
		"\u0671\u0673\x03\x02\x02\x02\u0672\u0669\x03\x02\x02\x02\u0672\u066A\x03" +
		"\x02\x02\x02\u0672\u066B\x03\x02\x02\x02\u0672\u066D\x03\x02\x02\x02\u0672" +
		"\u066E\x03\x02\x02\x02\u0673Y\x03\x02\x02\x02\u0674\u0676\x05\xBE`\x02" +
		"\u0675\u0677\t\x12\x02\x02\u0676\u0675\x03\x02\x02\x02\u0676\u0677\x03" +
		"\x02\x02\x02\u0677\u067A\x03\x02\x02\x02\u0678\u0679\x07\x99\x02\x02\u0679" +
		"\u067B\t\x13\x02\x02\u067A\u0678\x03\x02\x02\x02\u067A\u067B\x03\x02\x02" +
		"\x02\u067B[\x03\x02\x02\x02\u067C\u067E\x05|?\x02\u067D\u067F\x05^0\x02" +
		"\u067E\u067D\x03\x02\x02\x02\u067F\u0680\x03\x02\x02\x02\u0680\u067E\x03" +
		"\x02\x02\x02\u0680\u0681\x03\x02\x02\x02\u0681]\x03\x02\x02\x02\u0682" +
		"\u0684\x05b2\x02\u0683\u0685\x05t;\x02\u0684\u0683\x03\x02\x02\x02\u0684" +
		"\u0685\x03\x02\x02\x02\u0685\u0686\x03\x02\x02\x02\u0686\u0687\x05R*\x02" +
		"\u0687\u069E\x03\x02\x02\x02\u0688\u068C\x05d3\x02\u0689\u068B\x05\x88" +
		"E\x02\u068A\u0689\x03\x02\x02\x02\u068B\u068E\x03\x02\x02\x02\u068C\u068A" +
		"\x03\x02\x02\x02\u068C\u068D\x03\x02\x02\x02\u068D\u0690\x03\x02\x02\x02" +
		"\u068E\u068C\x03\x02\x02\x02\u068F\u0691\x05t;\x02\u0690\u068F\x03\x02" +
		"\x02\x02\u0690\u0691\x03\x02\x02\x02\u0691\u0693\x03\x02\x02\x02\u0692" +
		"\u0694\x05~@\x02\u0693\u0692\x03\x02\x02\x02\u0693\u0694\x03\x02\x02\x02" +
		"\u0694\u0696\x03\x02\x02\x02\u0695\u0697\x05v<\x02\u0696\u0695\x03\x02" +
		"\x02\x02\u0696\u0697\x03\x02\x02\x02\u0697\u0699\x03\x02\x02\x02\u0698" +
		"\u069A\x05\xF0y\x02\u0699\u0698\x03\x02\x02\x02\u0699\u069A\x03\x02\x02" +
		"\x02\u069A\u069B\x03\x02\x02\x02\u069B\u069C\x05R*\x02\u069C\u069E\x03" +
		"\x02\x02\x02\u069D\u0682\x03\x02\x02\x02\u069D\u0688\x03\x02\x02\x02\u069E" +
		"_\x03\x02\x02\x02\u069F\u06A1\x05b2\x02\u06A0\u06A2\x05|?\x02\u06A1\u06A0" +
		"\x03\x02\x02\x02\u06A1\u06A2\x03\x02\x02\x02\u06A2\u06A4\x03\x02\x02\x02" +
		"\u06A3\u06A5\x05t;\x02\u06A4\u06A3\x03\x02\x02\x02\u06A4\u06A5\x03\x02" +
		"\x02\x02\u06A5\u06BD\x03\x02\x02\x02\u06A6\u06A8\x05d3\x02\u06A7\u06A9" +
		"\x05|?\x02\u06A8\u06A7\x03\x02\x02\x02\u06A8\u06A9\x03\x02\x02\x02\u06A9" +
		"\u06AD\x03\x02\x02\x02\u06AA\u06AC\x05\x88E\x02\u06AB\u06AA\x03\x02\x02" +
		"\x02\u06AC\u06AF\x03\x02\x02\x02\u06AD\u06AB\x03\x02\x02\x02\u06AD\u06AE" +
		"\x03\x02\x02\x02\u06AE\u06B1\x03\x02\x02\x02\u06AF\u06AD\x03\x02\x02\x02" +
		"\u06B0\u06B2\x05t;\x02\u06B1\u06B0\x03\x02\x02\x02\u06B1\u06B2\x03\x02" +
		"\x02\x02\u06B2\u06B4\x03\x02\x02\x02\u06B3\u06B5\x05~@\x02\u06B4\u06B3" +
		"\x03\x02\x02\x02\u06B4\u06B5\x03\x02\x02\x02\u06B5\u06B7\x03\x02\x02\x02" +
		"\u06B6\u06B8\x05v<\x02\u06B7\u06B6\x03\x02\x02\x02\u06B7\u06B8\x03\x02" +
		"\x02\x02\u06B8\u06BA\x03\x02\x02\x02\u06B9\u06BB\x05\xF0y\x02\u06BA\u06B9" +
		"\x03\x02\x02\x02\u06BA\u06BB\x03\x02\x02\x02\u06BB\u06BD\x03\x02\x02\x02" +
		"\u06BC\u069F\x03\x02\x02\x02\u06BC\u06A6\x03\x02\x02\x02\u06BDa\x03\x02" +
		"\x02\x02\u06BE\u06BF\x07\xCB\x02\x02\u06BF\u06C0\x07\xED\x02\x02\u06C0" +
		"\u06C1\x07\x03\x02\x02\u06C1\u06C2\x05\xB6\\\x02\u06C2\u06C3\x07\x04\x02" +
		"\x02\u06C3\u06C9\x03\x02\x02\x02\u06C4\u06C5\x07\x8F\x02\x02\u06C5\u06C9" +
		"\x05\xB6\\\x02\u06C6\u06C7\x07\xB9\x02\x02\u06C7\u06C9\x05\xB6\\\x02\u06C8" +
		"\u06BE\x03\x02\x02\x02\u06C8\u06C4\x03\x02\x02\x02\u06C8\u06C6\x03\x02" +
		"\x02\x02\u06C9\u06CB\x03\x02\x02\x02\u06CA\u06CC\x05\xACW\x02\u06CB\u06CA" +
		"\x03\x02\x02\x02\u06CB\u06CC\x03\x02\x02\x02\u06CC\u06CF\x03\x02\x02\x02" +
		"\u06CD\u06CE\x07\xB7\x02\x02\u06CE\u06D0\x07\u0119\x02\x02\u06CF\u06CD" +
		"\x03\x02\x02\x02\u06CF\u06D0\x03\x02\x02\x02\u06D0\u06D1\x03\x02\x02\x02" +
		"\u06D1\u06D2\x07\xFD\x02\x02\u06D2\u06DF\x07\u0119\x02\x02\u06D3\u06DD" +
		"\x07\x17\x02\x02\u06D4\u06DE\x05\x9AN\x02\u06D5\u06DE\x05\xE6t\x02\u06D6" +
		"\u06D9\x07\x03\x02\x02\u06D7\u06DA\x05\x9AN\x02\u06D8\u06DA\x05\xE6t\x02" +
		"\u06D9\u06D7\x03\x02\x02\x02\u06D9\u06D8\x03\x02\x02\x02\u06DA\u06DB\x03" +
		"\x02\x02\x02\u06DB\u06DC\x07\x04\x02\x02\u06DC\u06DE\x03\x02\x02\x02\u06DD" +
		"\u06D4\x03\x02\x02\x02\u06DD\u06D5\x03\x02\x02\x02\u06DD\u06D6\x03\x02" +
		"\x02\x02\u06DE\u06E0\x03\x02\x02\x02\u06DF\u06D3\x03\x02\x02\x02\u06DF" +
		"\u06E0\x03\x02\x02\x02\u06E0\u06E2\x03\x02\x02\x02\u06E1\u06E3\x05\xAC" +
		"W\x02\u06E2\u06E1\x03\x02\x02\x02\u06E2\u06E3\x03\x02\x02\x02\u06E3\u06E6" +
		"\x03\x02\x02\x02\u06E4\u06E5\x07\xB6\x02\x02\u06E5\u06E7\x07\u0119\x02" +
		"\x02\u06E6\u06E4\x03\x02\x02\x02\u06E6\u06E7\x03\x02\x02\x02\u06E7c\x03" +
		"\x02\x02\x02\u06E8\u06EC\x07\xCB\x02\x02\u06E9\u06EB\x05x=\x02\u06EA\u06E9" +
		"\x03\x02\x02\x02\u06EB\u06EE\x03\x02\x02\x02\u06EC\u06EA\x03\x02\x02\x02" +
		"\u06EC\u06ED\x03\x02\x02\x02\u06ED\u06F0\x03\x02\x02\x02\u06EE\u06EC\x03" +
		"\x02\x02\x02\u06EF\u06F1\x05\x8AF\x02\u06F0\u06EF\x03\x02\x02\x02\u06F0" +
		"\u06F1\x03\x02\x02\x02\u06F1\u06F2\x03\x02\x02\x02\u06F2\u06F3\x05\xB6" +
		"\\\x02\u06F3e\x03\x02\x02\x02\u06F4\u06F5\x07\xD1\x02\x02\u06F5\u06F6" +
		"\x05p9\x02\u06F6g\x03\x02\x02\x02\u06F7\u06F8\x07\u0101\x02\x02\u06F8" +
		"\u06FB\x07\x90\x02\x02\u06F9\u06FA\x07\x12\x02\x02\u06FA\u06FC\x05\xC0" +
		"a\x02\u06FB\u06F9\x03\x02\x02\x02\u06FB\u06FC\x03\x02\x02\x02\u06FC\u06FD" +
		"\x03\x02\x02\x02\u06FD\u06FE\x07\xE6\x02\x02\u06FE\u06FF\x05l7\x02\u06FF" +
		"i\x03\x02\x02\x02\u0700\u0701\x07\u0101\x02\x02\u0701\u0702\x07\x97\x02" +
		"\x02\u0702\u0705\x07\x90\x02\x02\u0703\u0704\x07\x12\x02\x02\u0704\u0706" +
		"\x05\xC0a\x02\u0705\u0703\x03\x02\x02\x02\u0705\u0706\x03\x02\x02\x02" +
		"\u0706\u0707\x03\x02\x02\x02\u0707\u0708\x07\xE6\x02\x02\u0708\u0709\x05" +
		"n8\x02\u0709k\x03\x02\x02\x02\u070A\u0712\x07C\x02\x02\u070B\u070C\x07" +
		"\xFA\x02\x02\u070C\u070D\x07\xD1\x02\x02\u070D\u0712\x07\u0110\x02\x02" +
		"\u070E\u070F\x07\xFA\x02\x02\u070F\u0710\x07\xD1\x02\x02\u0710\u0712\x05" +
		"p9\x02\u0711\u070A\x03\x02\x02\x02\u0711\u070B\x03\x02\x02\x02\u0711\u070E" +
		"\x03\x02\x02\x02\u0712m\x03\x02\x02\x02\u0713\u0714\x07w\x02\x02\u0714" +
		"\u0726\x07\u0110\x02\x02\u0715\u0716\x07w\x02\x02\u0716\u0717\x07\x03" +
		"\x02\x02\u0717\u0718\x05\xAEX\x02\u0718\u0719\x07\x04\x02\x02\u0719\u071A" +
		"\x07\xFE\x02\x02\u071A\u071B\x07\x03\x02\x02\u071B\u0720\x05\xBE`\x02" +
		"\u071C\u071D\x07\x05\x02\x02\u071D\u071F\x05\xBE`\x02\u071E\u071C\x03" +
		"\x02\x02\x02\u071F\u0722\x03\x02\x02\x02\u0720\u071E\x03\x02\x02\x02\u0720" +
		"\u0721\x03\x02\x02\x02\u0721\u0723\x03\x02\x02\x02\u0722\u0720\x03\x02" +
		"\x02\x02\u0723\u0724\x07\x04\x02\x02\u0724\u0726\x03\x02\x02\x02\u0725" +
		"\u0713\x03\x02\x02\x02\u0725\u0715\x03\x02\x02\x02\u0726o\x03\x02\x02" +
		"\x02\u0727\u072C\x05r:\x02\u0728\u0729\x07\x05\x02\x02\u0729\u072B\x05" +
		"r:\x02\u072A\u0728\x03\x02\x02\x02\u072B\u072E\x03\x02\x02\x02\u072C\u072A" +
		"\x03\x02\x02\x02\u072C\u072D\x03\x02\x02\x02\u072Dq\x03\x02\x02\x02\u072E" +
		"\u072C\x03\x02\x02\x02\u072F\u0730\x05\xB0Y\x02\u0730\u0731\x07\u0106" +
		"\x02\x02\u0731\u0732\x05\xBE`\x02\u0732s\x03\x02\x02\x02\u0733\u0734\x07" +
		"\u0102\x02\x02\u0734\u0735\x05\xC0a\x02\u0735u\x03\x02\x02\x02\u0736\u0737" +
		"\x07m\x02\x02\u0737\u0738\x05\xC0a\x02\u0738w\x03\x02\x02\x02\u0739\u073A" +
		"\x07\x07\x02\x02\u073A\u0741\x05z>\x02\u073B\u073D\x07\x05\x02\x02\u073C" +
		"\u073B\x03\x02\x02\x02\u073C\u073D\x03\x02\x02\x02\u073D\u073E\x03\x02" +
		"\x02\x02\u073E\u0740\x05z>\x02\u073F\u073C\x03\x02\x02\x02\u0740\u0743" +
		"\x03\x02\x02\x02\u0741\u073F\x03\x02\x02\x02\u0741\u0742\x03\x02\x02\x02" +
		"\u0742\u0744\x03\x02\x02\x02\u0743\u0741\x03\x02\x02\x02\u0744\u0745\x07" +
		"\b\x02\x02\u0745y\x03\x02\x02\x02\u0746\u0754\x05\u0104\x83\x02\u0747" +
		"\u0748\x05\u0104\x83\x02\u0748\u0749\x07\x03\x02\x02\u0749\u074E\x05\xC6" +
		"d\x02\u074A\u074B\x07\x05\x02\x02\u074B\u074D\x05\xC6d\x02\u074C\u074A" +
		"\x03\x02\x02\x02\u074D\u0750\x03\x02\x02\x02\u074E\u074C\x03\x02\x02\x02" +
		"\u074E\u074F\x03\x02\x02\x02\u074F\u0751\x03\x02\x02\x02\u0750\u074E\x03" +
		"\x02\x02\x02\u0751\u0752\x07\x04\x02\x02\u0752\u0754\x03\x02\x02\x02\u0753" +
		"\u0746\x03\x02\x02\x02\u0753\u0747\x03\x02\x02\x02\u0754{\x03\x02\x02" +
		"\x02\u0755\u0756\x07e\x02\x02\u0756\u075B\x05\x8CG\x02\u0757\u0758\x07" +
		"\x05\x02\x02\u0758\u075A\x05\x8CG\x02\u0759\u0757\x03\x02\x02\x02\u075A" +
		"\u075D\x03\x02\x02\x02\u075B\u0759\x03\x02\x02\x02\u075B\u075C\x03\x02" +
		"\x02\x02\u075C\u0761\x03\x02\x02\x02\u075D\u075B\x03\x02\x02\x02\u075E" +
		"\u0760\x05\x88E\x02\u075F\u075E\x03\x02\x02\x02\u0760\u0763\x03\x02\x02" +
		"\x02\u0761\u075F";
	private static readonly _serializedATNSegment4: string =
		"\x03\x02\x02\x02\u0761\u0762\x03\x02\x02\x02\u0762\u0765\x03\x02\x02\x02" +
		"\u0763\u0761\x03\x02\x02\x02\u0764\u0766\x05\x82B\x02\u0765\u0764\x03" +
		"\x02\x02\x02\u0765\u0766\x03\x02\x02\x02\u0766}\x03\x02\x02\x02\u0767" +
		"\u0768\x07k\x02\x02\u0768\u0769\x07\x1F\x02\x02\u0769\u076E\x05\xBE`\x02" +
		"\u076A\u076B\x07\x05\x02\x02\u076B\u076D\x05\xBE`\x02\u076C\u076A\x03" +
		"\x02\x02\x02\u076D\u0770\x03\x02\x02\x02\u076E\u076C\x03\x02\x02\x02\u076E" +
		"\u076F\x03\x02\x02\x02\u076F\u0782\x03\x02\x02\x02\u0770\u076E\x03\x02" +
		"\x02\x02\u0771\u0772\x07\u0104\x02\x02\u0772\u0783\x07\xC7\x02\x02\u0773" +
		"\u0774\x07\u0104\x02\x02\u0774\u0783\x078\x02\x02\u0775\u0776\x07l\x02" +
		"\x02\u0776\u0777\x07\xD3\x02\x02\u0777\u0778\x07\x03\x02\x02\u0778\u077D" +
		"\x05\x80A\x02\u0779\u077A\x07\x05\x02\x02\u077A\u077C\x05\x80A\x02\u077B" +
		"\u0779\x03\x02\x02\x02\u077C\u077F\x03\x02\x02\x02\u077D\u077B\x03\x02" +
		"\x02\x02\u077D\u077E\x03\x02\x02\x02\u077E\u0780\x03\x02\x02\x02\u077F" +
		"\u077D\x03\x02\x02\x02\u0780\u0781\x07\x04\x02\x02\u0781\u0783\x03\x02" +
		"\x02\x02\u0782\u0771\x03\x02\x02\x02\u0782\u0773\x03\x02\x02\x02\u0782" +
		"\u0775\x03\x02\x02\x02\u0782\u0783\x03\x02\x02\x02\u0783\u0794\x03\x02" +
		"\x02\x02\u0784\u0785\x07k\x02\x02\u0785\u0786\x07\x1F\x02\x02\u0786\u0787" +
		"\x07l\x02\x02\u0787\u0788\x07\xD3\x02\x02\u0788\u0789\x07\x03\x02\x02" +
		"\u0789\u078E\x05\x80A\x02\u078A\u078B\x07\x05\x02\x02\u078B\u078D\x05" +
		"\x80A\x02\u078C\u078A\x03\x02\x02\x02\u078D\u0790\x03\x02\x02\x02\u078E" +
		"\u078C\x03\x02\x02\x02\u078E\u078F\x03\x02\x02\x02\u078F\u0791\x03\x02" +
		"\x02\x02\u0790\u078E\x03\x02\x02\x02\u0791\u0792\x07\x04\x02\x02\u0792" +
		"\u0794\x03\x02\x02\x02\u0793\u0767\x03\x02\x02\x02\u0793\u0784\x03\x02" +
		"\x02\x02\u0794\x7F\x03\x02\x02\x02\u0795\u079E\x07\x03\x02\x02\u0796\u079B" +
		"\x05\xBE`\x02\u0797\u0798\x07\x05\x02\x02\u0798\u079A\x05\xBE`\x02\u0799" +
		"\u0797\x03\x02\x02\x02\u079A\u079D\x03\x02\x02\x02\u079B\u0799\x03\x02" +
		"\x02\x02\u079B\u079C\x03\x02\x02\x02\u079C\u079F\x03\x02\x02\x02\u079D" +
		"\u079B\x03\x02\x02\x02\u079E\u0796\x03\x02\x02\x02\u079E\u079F\x03\x02" +
		"\x02\x02\u079F\u07A0\x03\x02\x02\x02\u07A0\u07A3\x07\x04\x02\x02\u07A1" +
		"\u07A3\x05\xBE`\x02\u07A2\u0795\x03\x02\x02\x02\u07A2\u07A1\x03\x02\x02" +
		"\x02\u07A3\x81\x03\x02\x02\x02\u07A4\u07A5\x07\xAC\x02\x02\u07A5\u07A6" +
		"\x07\x03\x02\x02\u07A6\u07A7\x05\xB6\\\x02\u07A7\u07A8\x07a\x02\x02\u07A8" +
		"\u07A9\x05\x84C\x02\u07A9\u07AA\x07q\x02\x02\u07AA\u07AB\x07\x03\x02\x02" +
		"\u07AB\u07B0\x05\x86D\x02\u07AC\u07AD\x07\x05\x02\x02\u07AD\u07AF\x05" +
		"\x86D\x02\u07AE\u07AC\x03\x02\x02\x02\u07AF\u07B2\x03\x02\x02\x02\u07B0" +
		"\u07AE\x03\x02\x02\x02\u07B0\u07B1\x03\x02\x02\x02\u07B1\u07B3\x03\x02" +
		"\x02\x02\u07B2\u07B0\x03\x02\x02\x02\u07B3\u07B4\x07\x04\x02\x02\u07B4" +
		"\u07B5\x07\x04\x02\x02\u07B5\x83\x03\x02\x02\x02\u07B6\u07C3\x05\u0104" +
		"\x83\x02\u07B7\u07B8\x07\x03\x02\x02\u07B8\u07BD\x05\u0104\x83\x02\u07B9" +
		"\u07BA\x07\x05\x02\x02\u07BA\u07BC\x05\u0104\x83\x02\u07BB\u07B9\x03\x02" +
		"\x02\x02\u07BC\u07BF\x03\x02\x02\x02\u07BD\u07BB\x03\x02\x02\x02\u07BD" +
		"\u07BE\x03\x02\x02\x02\u07BE\u07C0\x03\x02\x02\x02\u07BF\u07BD\x03\x02" +
		"\x02\x02\u07C0\u07C1\x07\x04\x02\x02\u07C1\u07C3\x03\x02\x02\x02\u07C2" +
		"\u07B6\x03\x02\x02\x02\u07C2\u07B7\x03\x02\x02\x02\u07C3\x85\x03\x02\x02" +
		"\x02\u07C4\u07C9\x05\xBE`\x02\u07C5\u07C7\x07\x17\x02\x02\u07C6\u07C5" +
		"\x03\x02\x02\x02\u07C6\u07C7\x03\x02\x02\x02\u07C7\u07C8\x03\x02\x02\x02" +
		"\u07C8\u07CA\x05\u0104\x83\x02\u07C9\u07C6\x03\x02\x02\x02\u07C9\u07CA" +
		"\x03\x02\x02\x02\u07CA\x87\x03\x02\x02\x02\u07CB\u07CC\x07\x80\x02\x02" +
		"\u07CC\u07CE\x07\xFF\x02\x02\u07CD\u07CF\x07\xA2\x02\x02\u07CE\u07CD\x03" +
		"\x02\x02\x02\u07CE\u07CF\x03\x02\x02\x02\u07CF\u07D0\x03\x02\x02\x02\u07D0" +
		"\u07D1\x05\xFE\x80\x02\u07D1\u07DA\x07\x03\x02\x02\u07D2\u07D7\x05\xBE" +
		"`\x02\u07D3\u07D4\x07\x05\x02\x02\u07D4\u07D6\x05\xBE`\x02\u07D5\u07D3" +
		"\x03\x02\x02\x02\u07D6\u07D9\x03\x02\x02\x02\u07D7\u07D5\x03\x02\x02\x02" +
		"\u07D7\u07D8\x03\x02\x02\x02\u07D8\u07DB\x03\x02\x02\x02\u07D9\u07D7\x03" +
		"\x02\x02\x02\u07DA\u07D2\x03\x02\x02\x02\u07DA\u07DB\x03\x02\x02\x02\u07DB" +
		"\u07DC\x03\x02\x02\x02\u07DC\u07DD\x07\x04\x02\x02\u07DD\u07E9\x05\u0104" +
		"\x83\x02\u07DE\u07E0\x07\x17\x02\x02\u07DF\u07DE\x03\x02\x02\x02\u07DF" +
		"\u07E0\x03\x02\x02\x02\u07E0\u07E1\x03\x02\x02\x02\u07E1\u07E6\x05\u0104" +
		"\x83\x02\u07E2\u07E3\x07\x05\x02\x02\u07E3\u07E5\x05\u0104\x83\x02\u07E4" +
		"\u07E2\x03\x02\x02\x02\u07E5\u07E8\x03\x02\x02\x02\u07E6\u07E4\x03\x02" +
		"\x02\x02\u07E6\u07E7\x03\x02\x02\x02\u07E7\u07EA\x03\x02\x02\x02\u07E8" +
		"\u07E6\x03\x02\x02\x02\u07E9\u07DF\x03\x02\x02\x02\u07E9\u07EA\x03\x02" +
		"\x02\x02\u07EA\x89\x03\x02\x02\x02\u07EB\u07EC\t\x14\x02\x02\u07EC\x8B" +
		"\x03\x02\x02\x02\u07ED\u07F1\x05\xA4S\x02\u07EE\u07F0\x05\x8EH\x02\u07EF" +
		"\u07EE\x03\x02\x02\x02\u07F0\u07F3\x03\x02\x02\x02\u07F1\u07EF\x03\x02" +
		"\x02\x02\u07F1\u07F2\x03\x02\x02\x02\u07F2\x8D\x03\x02\x02\x02\u07F3\u07F1" +
		"\x03\x02\x02\x02\u07F4\u07F5\x05\x90I\x02\u07F5\u07F6\x07}\x02\x02\u07F6" +
		"\u07F8\x05\xA4S\x02\u07F7\u07F9\x05\x92J\x02\u07F8\u07F7\x03\x02\x02\x02" +
		"\u07F8\u07F9\x03\x02\x02\x02\u07F9\u0800\x03\x02\x02\x02\u07FA\u07FB\x07" +
		"\x95\x02\x02\u07FB\u07FC\x05\x90I\x02\u07FC\u07FD\x07}\x02\x02\u07FD\u07FE" +
		"\x05\xA4S\x02\u07FE\u0800\x03\x02\x02\x02\u07FF\u07F4\x03\x02\x02\x02" +
		"\u07FF\u07FA\x03\x02\x02\x02\u0800\x8F\x03\x02\x02\x02\u0801\u0803\x07" +
		"t\x02\x02\u0802\u0801\x03\x02\x02\x02\u0802\u0803\x03\x02\x02\x02\u0803" +
		"\u081A\x03\x02\x02\x02\u0804\u081A\x077\x02\x02\u0805\u0807\x07\x83\x02" +
		"\x02\u0806\u0808\x07\xA2\x02\x02\u0807\u0806\x03\x02\x02\x02\u0807\u0808" +
		"\x03\x02\x02\x02\u0808\u081A\x03\x02\x02\x02\u0809\u080B\x07\x83\x02\x02" +
		"\u080A\u0809\x03\x02\x02\x02\u080A\u080B\x03\x02\x02\x02\u080B\u080C\x03" +
		"\x02\x02\x02\u080C\u081A\x07\xCC\x02\x02\u080D\u080F\x07\xC2\x02\x02\u080E" +
		"\u0810\x07\xA2\x02\x02\u080F\u080E\x03\x02\x02\x02\u080F\u0810\x03\x02" +
		"\x02\x02\u0810\u081A\x03\x02\x02\x02\u0811\u0813\x07f\x02\x02\u0812\u0814" +
		"\x07\xA2\x02\x02\u0813\u0812\x03\x02\x02\x02\u0813\u0814\x03\x02\x02\x02" +
		"\u0814\u081A\x03\x02\x02\x02\u0815\u0817\x07\x83\x02\x02\u0816\u0815\x03" +
		"\x02\x02\x02\u0816\u0817\x03\x02\x02\x02\u0817\u0818\x03\x02\x02\x02\u0818" +
		"\u081A\x07\x13\x02\x02\u0819\u0802\x03\x02\x02\x02\u0819\u0804\x03\x02" +
		"\x02\x02\u0819\u0805\x03\x02\x02\x02\u0819\u080A\x03\x02\x02\x02\u0819" +
		"\u080D\x03\x02\x02\x02\u0819\u0811\x03\x02\x02\x02\u0819\u0816\x03\x02" +
		"\x02\x02\u081A\x91\x03\x02\x02\x02\u081B\u081C\x07\x9B\x02\x02\u081C\u0820" +
		"\x05\xC0a\x02\u081D\u081E\x07\xFD\x02\x02\u081E\u0820\x05\x98M\x02\u081F" +
		"\u081B\x03\x02\x02\x02\u081F\u081D\x03\x02\x02\x02\u0820\x93\x03\x02\x02" +
		"\x02\u0821\u0822\x07\xE2\x02\x02\u0822\u0824\x07\x03\x02\x02\u0823\u0825" +
		"\x05\x96L\x02\u0824\u0823\x03\x02\x02\x02\u0824\u0825\x03\x02\x02\x02" +
		"\u0825\u0826\x03\x02\x02\x02\u0826\u0827\x07\x04\x02\x02\u0827\x95\x03" +
		"\x02\x02\x02\u0828\u082A\x07\u010F\x02\x02\u0829\u0828\x03\x02\x02\x02" +
		"\u0829\u082A\x03\x02\x02\x02\u082A\u082B\x03\x02\x02\x02\u082B\u082C\t" +
		"\x15\x02\x02\u082C\u0841\x07\xAB\x02\x02\u082D\u082E\x05\xBE`\x02\u082E" +
		"\u082F\x07\xC9\x02\x02\u082F\u0841\x03\x02\x02\x02\u0830\u0831\x07\x1D" +
		"\x02\x02\u0831\u0832\x07\u011D\x02\x02\u0832\u0833\x07\xA1\x02\x02\u0833" +
		"\u0834\x07\x9A\x02\x02\u0834\u083D\x07\u011D\x02\x02\u0835\u083B\x07\x9B" +
		"\x02\x02\u0836\u083C\x05\u0104\x83\x02\u0837\u0838\x05\xFE\x80\x02\u0838" +
		"\u0839\x07\x03\x02\x02\u0839\u083A\x07\x04\x02\x02\u083A\u083C\x03\x02" +
		"\x02\x02\u083B\u0836\x03\x02\x02\x02\u083B\u0837\x03\x02\x02\x02\u083C" +
		"\u083E\x03\x02\x02\x02\u083D\u0835\x03\x02\x02\x02\u083D\u083E\x03\x02" +
		"\x02\x02\u083E\u0841\x03\x02\x02\x02\u083F\u0841\x05\xBE`\x02\u0840\u0829" +
		"\x03\x02\x02\x02\u0840\u082D\x03\x02\x02\x02\u0840\u0830\x03\x02\x02\x02" +
		"\u0840\u083F\x03\x02\x02\x02\u0841\x97\x03\x02\x02\x02\u0842\u0843\x07" +
		"\x03\x02\x02\u0843\u0844\x05\x9AN\x02\u0844\u0845\x07\x04\x02\x02\u0845" +
		"\x99\x03\x02\x02\x02\u0846\u084B\x05\u0100\x81\x02\u0847\u0848\x07\x05" +
		"\x02\x02\u0848\u084A\x05\u0100\x81\x02\u0849\u0847\x03\x02\x02\x02\u084A" +
		"\u084D\x03\x02\x02\x02\u084B\u0849\x03\x02\x02\x02\u084B\u084C\x03\x02" +
		"\x02\x02\u084C\x9B\x03\x02\x02\x02\u084D\u084B\x03\x02\x02\x02\u084E\u084F" +
		"\x07\x03\x02\x02\u084F\u0854\x05\x9EP\x02\u0850\u0851\x07\x05\x02\x02" +
		"\u0851\u0853\x05\x9EP\x02\u0852\u0850\x03\x02\x02\x02\u0853\u0856\x03" +
		"\x02\x02\x02\u0854\u0852\x03\x02\x02\x02\u0854\u0855\x03\x02\x02\x02\u0855" +
		"\u0857\x03\x02\x02\x02\u0856\u0854\x03\x02\x02\x02\u0857\u0858\x07\x04" +
		"\x02\x02\u0858\x9D\x03\x02\x02\x02\u0859\u085B\x05\u0100\x81\x02\u085A" +
		"\u085C\t\x12\x02\x02\u085B\u085A\x03\x02\x02\x02\u085B\u085C\x03\x02\x02" +
		"\x02\u085C\x9F\x03\x02\x02\x02\u085D\u085E\x07\x03\x02\x02\u085E\u0863" +
		"\x05\xA2R\x02\u085F\u0860\x07\x05\x02\x02\u0860\u0862\x05\xA2R\x02\u0861" +
		"\u085F\x03\x02\x02\x02\u0862\u0865\x03\x02\x02\x02\u0863\u0861\x03\x02" +
		"\x02\x02\u0863\u0864\x03\x02\x02\x02\u0864\u0866\x03\x02\x02\x02\u0865" +
		"\u0863\x03\x02\x02\x02\u0866\u0867\x07\x04\x02\x02\u0867\xA1\x03\x02\x02" +
		"\x02\u0868\u086A\x05\u0104\x83\x02\u0869\u086B\x05\"\x12\x02\u086A\u0869" +
		"\x03\x02\x02\x02\u086A\u086B\x03\x02\x02\x02\u086B\xA3\x03\x02\x02\x02" +
		"\u086C\u086E\x05\xB0Y\x02\u086D\u086F\x05\x94K\x02\u086E\u086D\x03\x02" +
		"\x02\x02\u086E\u086F\x03\x02\x02\x02\u086F\u0870\x03\x02\x02\x02\u0870" +
		"\u0871\x05\xAAV\x02\u0871\u0885\x03\x02\x02\x02\u0872\u0873\x07\x03\x02" +
		"\x02\u0873\u0874\x05$\x13\x02\u0874\u0876\x07\x04\x02\x02\u0875\u0877" +
		"\x05\x94K\x02\u0876\u0875\x03\x02\x02\x02\u0876\u0877\x03\x02\x02\x02" +
		"\u0877\u0878\x03\x02\x02\x02\u0878\u0879\x05\xAAV\x02\u0879\u0885\x03" +
		"\x02\x02\x02\u087A\u087B\x07\x03\x02\x02\u087B\u087C\x05\x8CG\x02\u087C" +
		"\u087E\x07\x04\x02\x02\u087D\u087F\x05\x94K\x02\u087E\u087D\x03\x02\x02" +
		"\x02\u087E\u087F\x03\x02\x02\x02\u087F\u0880\x03\x02\x02\x02\u0880\u0881" +
		"\x05\xAAV\x02\u0881\u0885\x03\x02\x02\x02\u0882\u0885\x05\xA6T\x02\u0883" +
		"\u0885\x05\xA8U\x02\u0884\u086C\x03\x02\x02\x02\u0884\u0872\x03\x02\x02" +
		"\x02\u0884\u087A\x03\x02\x02\x02\u0884\u0882\x03\x02\x02\x02\u0884\u0883" +
		"\x03\x02\x02\x02\u0885\xA5\x03\x02\x02\x02\u0886\u0887\x07\xFE\x02\x02" +
		"\u0887\u088C\x05\xBE`\x02\u0888\u0889\x07\x05\x02\x02\u0889\u088B\x05" +
		"\xBE`\x02\u088A\u0888\x03\x02\x02\x02\u088B\u088E\x03\x02\x02\x02\u088C" +
		"\u088A\x03\x02\x02\x02\u088C\u088D\x03\x02\x02\x02\u088D\u088F\x03\x02" +
		"\x02\x02\u088E\u088C\x03\x02\x02\x02\u088F\u0890\x05\xAAV\x02\u0890\xA7" +
		"\x03\x02\x02\x02\u0891\u0892\x05\u0100\x81\x02\u0892\u089B\x07\x03\x02" +
		"\x02\u0893\u0898\x05\xBE`\x02\u0894\u0895\x07\x05\x02\x02\u0895\u0897" +
		"\x05\xBE`\x02\u0896\u0894\x03\x02\x02\x02\u0897\u089A\x03\x02\x02\x02" +
		"\u0898\u0896\x03\x02\x02\x02\u0898\u0899\x03\x02\x02\x02\u0899\u089C\x03" +
		"\x02\x02\x02\u089A\u0898\x03\x02\x02\x02\u089B\u0893\x03\x02\x02\x02\u089B" +
		"\u089C\x03\x02\x02\x02\u089C\u089D\x03\x02\x02\x02\u089D\u089E\x07\x04" +
		"\x02\x02\u089E\u089F\x05\xAAV\x02\u089F\xA9\x03\x02\x02\x02\u08A0\u08A2" +
		"\x07\x17\x02\x02\u08A1\u08A0\x03\x02\x02\x02\u08A1\u08A2\x03\x02\x02\x02" +
		"\u08A2\u08A3\x03\x02\x02\x02\u08A3\u08A5\x05\u0106\x84\x02\u08A4\u08A6" +
		"\x05\x98M\x02\u08A5\u08A4\x03\x02\x02\x02\u08A5\u08A6\x03\x02\x02\x02" +
		"\u08A6\u08A8\x03\x02\x02\x02\u08A7\u08A1\x03\x02\x02\x02\u08A7\u08A8\x03" +
		"\x02\x02\x02\u08A8\xAB\x03\x02\x02\x02\u08A9\u08AA\x07\xC8\x02\x02\u08AA" +
		"\u08AB\x07c\x02\x02\u08AB\u08AC\x07\xCE\x02\x02\u08AC\u08B0\x07\u0119" +
		"\x02\x02\u08AD\u08AE\x07\u0104\x02\x02\u08AE\u08AF\x07\xCF\x02\x02\u08AF" +
		"\u08B1\x05<\x1F\x02\u08B0\u08AD\x03\x02\x02\x02\u08B0\u08B1\x03\x02\x02" +
		"\x02\u08B1\u08DB\x03\x02\x02\x02\u08B2\u08B3\x07\xC8\x02\x02\u08B3\u08B4" +
		"\x07c\x02\x02\u08B4\u08BE\x07D\x02\x02\u08B5\u08B6\x07\\\x02\x02\u08B6" +
		"\u08B7\x07\xE5\x02\x02\u08B7\u08B8\x07\x1F\x02\x02\u08B8\u08BC\x07\u0119" +
		"\x02\x02\u08B9\u08BA\x07Q\x02\x02\u08BA\u08BB\x07\x1F\x02\x02\u08BB\u08BD" +
		"\x07\u0119\x02\x02\u08BC\u08B9\x03\x02\x02\x02\u08BC\u08BD\x03\x02\x02" +
		"\x02\u08BD\u08BF\x03\x02\x02\x02\u08BE\u08B5\x03\x02\x02\x02\u08BE\u08BF" +
		"\x03\x02\x02\x02\u08BF\u08C5\x03\x02\x02\x02\u08C0\u08C1\x07+\x02\x02" +
		"\u08C1\u08C2\x07|\x02\x02\u08C2\u08C3\x07\xE5\x02\x02\u08C3\u08C4\x07" +
		"\x1F\x02\x02\u08C4\u08C6\x07\u0119\x02\x02\u08C5\u08C0\x03\x02\x02\x02" +
		"\u08C5\u08C6\x03\x02\x02\x02\u08C6\u08CC\x03\x02\x02\x02\u08C7\u08C8\x07" +
		"\x8F\x02\x02\u08C8\u08C9\x07~\x02\x02\u08C9\u08CA\x07\xE5\x02\x02\u08CA" +
		"\u08CB\x07\x1F\x02\x02\u08CB\u08CD\x07\u0119\x02\x02\u08CC\u08C7\x03\x02" +
		"\x02\x02\u08CC\u08CD\x03\x02\x02\x02\u08CD\u08D2\x03\x02\x02\x02\u08CE" +
		"\u08CF\x07\x86\x02\x02\u08CF\u08D0\x07\xE5\x02\x02\u08D0\u08D1\x07\x1F" +
		"\x02\x02\u08D1\u08D3\x07\u0119\x02\x02\u08D2\u08CE\x03\x02\x02\x02\u08D2" +
		"\u08D3\x03\x02\x02\x02\u08D3\u08D8\x03\x02\x02\x02\u08D4\u08D5\x07\x98" +
		"\x02\x02\u08D5\u08D6\x07B\x02\x02\u08D6\u08D7\x07\x17\x02\x02\u08D7\u08D9" +
		"\x07\u0119\x02\x02\u08D8\u08D4\x03\x02\x02\x02\u08D8\u08D9\x03\x02\x02" +
		"\x02\u08D9\u08DB\x03\x02\x02\x02\u08DA\u08A9\x03\x02\x02\x02\u08DA\u08B2" +
		"\x03\x02\x02\x02\u08DB\xAD\x03\x02\x02\x02\u08DC\u08E1\x05\xB0Y\x02\u08DD" +
		"\u08DE\x07\x05\x02\x02\u08DE\u08E0\x05\xB0Y\x02\u08DF\u08DD\x03\x02\x02" +
		"\x02\u08E0\u08E3\x03\x02\x02\x02\u08E1\u08DF\x03\x02\x02\x02\u08E1\u08E2" +
		"\x03\x02\x02\x02\u08E2\xAF\x03\x02\x02\x02\u08E3\u08E1\x03\x02\x02\x02" +
		"\u08E4\u08E9\x05\u0100\x81\x02\u08E5\u08E6\x07\x06\x02\x02\u08E6\u08E8" +
		"\x05\u0100\x81\x02\u08E7\u08E5\x03\x02\x02\x02\u08E8\u08EB\x03\x02\x02" +
		"\x02\u08E9\u08E7\x03\x02\x02\x02\u08E9\u08EA\x03\x02\x02\x02\u08EA\xB1" +
		"\x03\x02\x02\x02\u08EB\u08E9\x03\x02\x02\x02\u08EC\u08ED\x05\u0100\x81" +
		"\x02\u08ED\u08EE\x07\x06\x02\x02\u08EE\u08F0\x03\x02\x02\x02\u08EF\u08EC" +
		"\x03\x02\x02\x02\u08EF\u08F0\x03\x02\x02\x02\u08F0\u08F1\x03\x02\x02\x02" +
		"\u08F1\u08F2\x05\u0100\x81\x02\u08F2\xB3\x03\x02\x02\x02\u08F3\u08FB\x05" +
		"\xBE`\x02\u08F4\u08F6\x07\x17\x02\x02\u08F5\u08F4\x03\x02\x02\x02\u08F5" +
		"\u08F6\x03\x02\x02\x02\u08F6\u08F9\x03\x02\x02\x02\u08F7\u08FA\x05\u0100" +
		"\x81\x02\u08F8\u08FA\x05\x98M\x02\u08F9\u08F7\x03\x02\x02\x02\u08F9\u08F8" +
		"\x03\x02\x02\x02\u08FA\u08FC\x03\x02\x02\x02\u08FB\u08F5\x03\x02\x02\x02" +
		"\u08FB\u08FC\x03\x02\x02\x02\u08FC\xB5\x03\x02\x02\x02\u08FD\u0902\x05" +
		"\xB4[\x02\u08FE\u08FF\x07\x05\x02\x02\u08FF\u0901\x05\xB4[\x02\u0900\u08FE" +
		"\x03\x02\x02\x02\u0901\u0904\x03\x02\x02\x02\u0902\u0900\x03\x02\x02\x02" +
		"\u0902\u0903\x03\x02\x02\x02\u0903\xB7\x03\x02\x02\x02\u0904\u0902\x03" +
		"\x02\x02\x02\u0905\u0906\x07\x03\x02\x02\u0906\u090B\x05\xBA^\x02\u0907" +
		"\u0908\x07\x05\x02\x02\u0908\u090A\x05\xBA^\x02\u0909\u0907\x03\x02\x02" +
		"\x02\u090A\u090D\x03\x02\x02\x02\u090B\u0909\x03\x02\x02\x02\u090B\u090C" +
		"\x03\x02\x02\x02\u090C\u090E\x03\x02\x02\x02\u090D\u090B\x03\x02\x02\x02" +
		"\u090E\u090F\x07\x04\x02\x02\u090F\xB9\x03\x02\x02\x02\u0910\u091E\x05" +
		"\xFE\x80\x02\u0911\u0912\x05\u0104\x83\x02\u0912\u0913\x07\x03\x02\x02" +
		"\u0913\u0918\x05\xBC_\x02\u0914\u0915\x07\x05\x02\x02\u0915\u0917\x05" +
		"\xBC_\x02\u0916\u0914\x03\x02\x02\x02\u0917\u091A\x03\x02\x02\x02\u0918" +
		"\u0916\x03\x02\x02\x02\u0918\u0919\x03\x02\x02\x02\u0919\u091B\x03\x02" +
		"\x02\x02\u091A\u0918\x03\x02\x02\x02\u091B\u091C\x07\x04\x02\x02\u091C" +
		"\u091E\x03\x02\x02\x02\u091D\u0910\x03\x02\x02\x02\u091D\u0911\x03\x02" +
		"\x02\x02\u091E\xBB\x03\x02\x02\x02\u091F\u0922\x05\xFE\x80\x02\u0920\u0922" +
		"\x05\xC8e\x02\u0921\u091F\x03\x02\x02\x02\u0921\u0920\x03\x02\x02\x02" +
		"\u0922\xBD\x03\x02\x02\x02\u0923\u0924\x05\xC0a\x02\u0924\xBF\x03\x02" +
		"\x02\x02\u0925\u0926\ba\x01\x02\u0926\u0927\x07\x97\x02\x02\u0927\u0932" +
		"\x05\xC0a\x07\u0928\u0929\x07T\x02\x02\u0929\u092A\x07\x03\x02\x02\u092A" +
		"\u092B\x05$\x13\x02\u092B\u092C\x07\x04\x02\x02\u092C\u0932\x03\x02\x02" +
		"\x02\u092D\u092F\x05\xC4c\x02\u092E\u0930\x05\xC2b\x02\u092F\u092E\x03" +
		"\x02\x02\x02\u092F\u0930\x03\x02\x02\x02\u0930\u0932\x03\x02\x02\x02\u0931" +
		"\u0925\x03\x02\x02\x02\u0931\u0928\x03\x02\x02\x02\u0931\u092D\x03\x02" +
		"\x02\x02\u0932\u093B\x03\x02\x02\x02\u0933\u0934\f\x04\x02\x02\u0934\u0935" +
		"\x07\x12\x02\x02\u0935\u093A\x05\xC0a\x05\u0936\u0937\f\x03\x02\x02\u0937" +
		"\u0938\x07\x9F\x02\x02\u0938\u093A\x05\xC0a\x04\u0939\u0933\x03\x02\x02" +
		"\x02\u0939\u0936\x03\x02\x02\x02\u093A\u093D\x03\x02\x02\x02\u093B\u0939" +
		"\x03\x02\x02\x02\u093B\u093C\x03\x02\x02\x02\u093C\xC1\x03\x02\x02\x02" +
		"\u093D\u093B\x03\x02\x02\x02\u093E\u0940\x07\x97\x02\x02\u093F\u093E\x03" +
		"\x02\x02\x02\u093F\u0940\x03\x02\x02\x02\u0940\u0941\x03\x02\x02\x02\u0941" +
		"\u0942\x07\x1B\x02\x02\u0942\u0943\x05\xC4c\x02\u0943\u0944\x07\x12\x02" +
		"\x02\u0944\u0945\x05\xC4c\x02\u0945\u0991\x03\x02\x02\x02\u0946\u0948" +
		"\x07\x97\x02\x02\u0947\u0946\x03\x02\x02\x02\u0947\u0948\x03\x02\x02\x02" +
		"\u0948\u0949\x03\x02\x02\x02\u0949\u094A\x07q\x02\x02\u094A\u094B\x07" +
		"\x03\x02\x02\u094B\u0950\x05\xBE`\x02\u094C\u094D\x07\x05\x02\x02\u094D" +
		"\u094F\x05\xBE`\x02\u094E\u094C\x03\x02\x02\x02\u094F\u0952\x03\x02\x02" +
		"\x02\u0950\u094E\x03\x02\x02\x02\u0950\u0951\x03\x02\x02\x02\u0951\u0953" +
		"\x03\x02\x02\x02\u0952\u0950\x03\x02\x02\x02\u0953\u0954\x07\x04\x02\x02" +
		"\u0954\u0991\x03\x02\x02\x02\u0955\u0957\x07\x97\x02\x02\u0956\u0955\x03" +
		"\x02\x02\x02\u0956\u0957\x03\x02\x02\x02\u0957\u0958\x03\x02\x02\x02\u0958" +
		"\u0959\x07q\x02\x02\u0959\u095A\x07\x03\x02\x02\u095A\u095B\x05$\x13\x02" +
		"\u095B\u095C\x07\x04\x02\x02\u095C\u0991\x03\x02\x02\x02\u095D\u095F\x07" +
		"\x97\x02\x02\u095E\u095D\x03\x02\x02\x02\u095E\u095F\x03\x02\x02\x02\u095F" +
		"\u0960\x03\x02\x02\x02\u0960\u0961\x07\xC3\x02\x02\u0961\u0991\x05\xC4" +
		"c\x02\u0962\u0964\x07\x97\x02\x02\u0963\u0962\x03\x02\x02\x02\u0963\u0964" +
		"\x03\x02\x02\x02\u0964\u0965\x03\x02\x02\x02\u0965\u0966\x07\x84\x02\x02" +
		"\u0966\u0974\t\x16\x02\x02\u0967\u0968\x07\x03\x02\x02\u0968\u0975\x07" +
		"\x04\x02\x02\u0969\u096A\x07\x03\x02\x02\u096A\u096F\x05\xBE`\x02\u096B" +
		"\u096C\x07\x05\x02\x02\u096C\u096E\x05\xBE`\x02\u096D\u096B\x03\x02\x02" +
		"\x02\u096E\u0971\x03\x02\x02\x02\u096F\u096D\x03\x02\x02\x02\u096F\u0970" +
		"\x03\x02\x02\x02\u0970\u0972\x03\x02\x02\x02\u0971\u096F\x03\x02\x02\x02" +
		"\u0972\u0973\x07\x04\x02\x02\u0973\u0975\x03\x02\x02\x02\u0974\u0967\x03" +
		"\x02\x02\x02\u0974\u0969\x03\x02\x02\x02\u0975\u0991\x03\x02\x02\x02\u0976" +
		"\u0978\x07\x97\x02\x02\u0977\u0976\x03\x02\x02\x02\u0977\u0978\x03\x02" +
		"\x02\x02\u0978\u0979\x03\x02\x02\x02\u0979\u097A\x07\x84\x02\x02\u097A" +
		"\u097D\x05\xC4c\x02\u097B\u097C\x07P\x02\x02\u097C\u097E\x07\u0119\x02" +
		"\x02\u097D\u097B\x03\x02\x02\x02\u097D\u097E\x03\x02\x02\x02\u097E\u0991" +
		"\x03\x02\x02\x02\u097F\u0981\x07{\x02\x02\u0980\u0982\x07\x97\x02\x02" +
		"\u0981\u0980\x03\x02\x02\x02\u0981\u0982\x03\x02\x02\x02\u0982\u0983\x03" +
		"\x02\x02\x02\u0983\u0991\x07\x98\x02\x02\u0984\u0986\x07{\x02\x02\u0985" +
		"\u0987\x07\x97\x02\x02\u0986\u0985\x03\x02\x02\x02\u0986\u0987\x03\x02" +
		"\x02\x02\u0987\u0988\x03\x02\x02\x02\u0988\u0991\t\x17\x02\x02\u0989\u098B" +
		"\x07{\x02\x02\u098A\u098C\x07\x97\x02\x02\u098B\u098A\x03\x02\x02\x02" +
		"\u098B\u098C\x03\x02\x02\x02\u098C\u098D\x03\x02\x02\x02\u098D\u098E\x07" +
		"J\x02\x02\u098E\u098F\x07e\x02\x02\u098F\u0991\x05\xC4c\x02\u0990\u093F" +
		"\x03\x02\x02\x02\u0990\u0947\x03\x02\x02\x02\u0990\u0956\x03\x02\x02\x02" +
		"\u0990\u095E\x03\x02\x02\x02\u0990\u0963\x03\x02\x02\x02\u0990\u0977\x03" +
		"\x02\x02\x02\u0990\u097F\x03\x02\x02\x02\u0990\u0984\x03\x02\x02\x02\u0990" +
		"\u0989\x03\x02\x02\x02\u0991\xC3\x03\x02\x02\x02\u0992\u0993\bc\x01\x02" +
		"\u0993\u0997\x05\xC6d\x02\u0994\u0995\t\x18\x02\x02\u0995\u0997\x05\xC4" +
		"c\t\u0996\u0992\x03\x02\x02\x02\u0996\u0994\x03\x02\x02\x02\u0997\u09AD" +
		"\x03\x02\x02\x02\u0998\u0999\f\b\x02\x02\u0999\u099A\t\x19\x02\x02\u099A" +
		"\u09AC\x05\xC4c\t\u099B\u099C\f\x07\x02\x02\u099C\u099D\t\x1A\x02\x02" +
		"\u099D\u09AC\x05\xC4c\b\u099E\u099F\f\x06\x02\x02\u099F\u09A0\x07\u0114" +
		"\x02\x02\u09A0\u09AC\x05\xC4c\x07\u09A1\u09A2\f\x05\x02\x02\u09A2\u09A3" +
		"\x07\u0117\x02\x02\u09A3\u09AC\x05\xC4c\x06\u09A4\u09A5\f\x04\x02\x02" +
		"\u09A5\u09A6\x07\u0115\x02\x02\u09A6\u09AC\x05\xC4c\x05\u09A7\u09A8\f" +
		"\x03\x02\x02\u09A8\u09A9\x05\xCAf\x02\u09A9\u09AA\x05\xC4c\x04\u09AA\u09AC" +
		"\x03\x02\x02\x02\u09AB\u0998\x03\x02\x02\x02\u09AB\u099B\x03\x02\x02\x02" +
		"\u09AB\u099E\x03\x02\x02\x02\u09AB\u09A1\x03\x02\x02\x02\u09AB\u09A4\x03" +
		"\x02\x02\x02\u09AB\u09A7\x03\x02\x02\x02\u09AC\u09AF\x03\x02\x02\x02\u09AD" +
		"\u09AB\x03\x02\x02\x02\u09AD\u09AE\x03\x02\x02\x02\u09AE\xC5\x03\x02\x02" +
		"\x02\u09AF\u09AD\x03\x02\x02\x02\u09B0\u09B1\bd\x01\x02\u09B1\u0A69\t" +
		"\x1B\x02\x02\u09B2\u09B4\x07\"\x02\x02\u09B3\u09B5\x05\xEEx\x02\u09B4" +
		"\u09B3\x03\x02\x02\x02\u09B5\u09B6\x03\x02\x02\x02\u09B6\u09B4\x03\x02" +
		"\x02\x02\u09B6\u09B7\x03\x02\x02\x02\u09B7\u09BA\x03\x02\x02\x02\u09B8" +
		"\u09B9\x07N\x02\x02\u09B9\u09BB\x05\xBE`\x02\u09BA\u09B8\x03\x02\x02\x02" +
		"\u09BA\u09BB\x03\x02\x02\x02\u09BB\u09BC\x03\x02\x02\x02\u09BC\u09BD\x07" +
		"O\x02\x02\u09BD\u0A69\x03\x02\x02\x02\u09BE\u09BF\x07\"\x02\x02\u09BF" +
		"\u09C1\x05\xBE`\x02\u09C0\u09C2\x05\xEEx\x02\u09C1\u09C0\x03\x02\x02\x02" +
		"\u09C2\u09C3\x03\x02\x02\x02\u09C3\u09C1\x03\x02\x02\x02\u09C3\u09C4\x03" +
		"\x02\x02\x02\u09C4\u09C7\x03\x02\x02\x02\u09C5\u09C6\x07N\x02\x02\u09C6" +
		"\u09C8\x05\xBE`\x02\u09C7\u09C5\x03\x02\x02\x02\u09C7\u09C8\x03\x02\x02" +
		"\x02\u09C8\u09C9\x03\x02\x02\x02\u09C9\u09CA\x07O\x02\x02\u09CA\u0A69" +
		"\x03\x02\x02\x02\u09CB\u09CC\x07#\x02\x02\u09CC\u09CD\x07\x03\x02\x02" +
		"\u09CD\u09CE\x05\xBE`\x02\u09CE\u09CF\x07\x17\x02\x02\u09CF\u09D0\x05" +
		"\xE0q\x02\u09D0\u09D1\x07\x04\x02\x02\u09D1\u0A69\x03\x02\x02\x02\u09D2" +
		"\u09D3\x07\xDD\x02\x02\u09D3\u09DC\x07\x03\x02\x02\u09D4\u09D9\x05\xB4" +
		"[\x02\u09D5\u09D6\x07\x05\x02\x02\u09D6\u09D8\x05\xB4[\x02\u09D7\u09D5" +
		"\x03\x02\x02\x02\u09D8\u09DB\x03\x02\x02\x02\u09D9\u09D7\x03\x02\x02\x02" +
		"\u09D9\u09DA\x03\x02\x02\x02\u09DA\u09DD\x03\x02\x02\x02\u09DB\u09D9\x03" +
		"\x02\x02\x02\u09DC\u09D4\x03\x02\x02\x02\u09DC\u09DD\x03\x02\x02\x02\u09DD" +
		"\u09DE\x03\x02\x02\x02\u09DE\u0A69\x07\x04\x02\x02\u09DF\u09E0\x07_\x02" +
		"\x02\u09E0\u09E1\x07\x03\x02\x02\u09E1\u09E4\x05\xBE`\x02\u09E2\u09E3" +
		"\x07o\x02\x02\u09E3\u09E5\x07\x99\x02\x02\u09E4\u09E2\x03\x02\x02\x02" +
		"\u09E4\u09E5\x03\x02\x02\x02\u09E5\u09E6\x03\x02\x02\x02\u09E6\u09E7\x07" +
		"\x04\x02\x02\u09E7\u0A69\x03\x02\x02\x02\u09E8\u09E9\x07\x7F\x02\x02\u09E9" +
		"\u09EA\x07\x03\x02\x02\u09EA\u09ED\x05\xBE`\x02\u09EB\u09EC\x07o\x02\x02" +
		"\u09EC\u09EE\x07\x99\x02\x02\u09ED\u09EB\x03\x02\x02\x02\u09ED\u09EE\x03" +
		"\x02\x02\x02\u09EE\u09EF\x03\x02\x02\x02\u09EF\u09F0\x07\x04\x02\x02\u09F0" +
		"\u0A69\x03\x02\x02\x02\u09F1\u09F2\x07\xAE\x02\x02\u09F2\u09F3\x07\x03" +
		"\x02\x02\u09F3\u09F4\x05\xC4c\x02\u09F4\u09F5\x07q\x02\x02\u09F5\u09F6" +
		"\x05\xC4c\x02\u09F6\u09F7\x07\x04\x02\x02\u09F7\u0A69\x03\x02\x02\x02" +
		"\u09F8\u0A69\x05\xC8e\x02\u09F9\u0A69\x07\u0110\x02\x02\u09FA\u09FB\x05" +
		"\xFE\x80\x02\u09FB\u09FC\x07\x06\x02\x02\u09FC\u09FD\x07\u0110\x02\x02" +
		"\u09FD\u0A69\x03\x02\x02\x02\u09FE\u09FF\x07\x03\x02\x02\u09FF\u0A02\x05" +
		"\xB4[\x02\u0A00\u0A01\x07\x05\x02\x02\u0A01\u0A03\x05\xB4[\x02\u0A02\u0A00" +
		"\x03\x02\x02\x02\u0A03\u0A04\x03\x02\x02\x02\u0A04\u0A02\x03\x02\x02\x02" +
		"\u0A04\u0A05\x03\x02\x02\x02\u0A05\u0A06\x03\x02\x02\x02\u0A06\u0A07\x07" +
		"\x04\x02\x02\u0A07\u0A69\x03\x02\x02\x02\u0A08\u0A09\x07\x03\x02\x02\u0A09" +
		"\u0A0A\x05$\x13\x02\u0A0A\u0A0B\x07\x04\x02\x02\u0A0B\u0A69\x03\x02\x02" +
		"\x02\u0A0C\u0A0D\x05\xFC\x7F\x02\u0A0D\u0A19\x07\x03\x02\x02\u0A0E\u0A10" +
		"\x05\x8AF\x02\u0A0F\u0A0E\x03\x02\x02\x02\u0A0F\u0A10\x03\x02\x02\x02" +
		"\u0A10\u0A11\x03\x02\x02\x02\u0A11\u0A16\x05\xBE`\x02\u0A12\u0A13\x07" +
		"\x05\x02\x02\u0A13\u0A15\x05\xBE`\x02\u0A14\u0A12\x03\x02\x02\x02\u0A15" +
		"\u0A18\x03\x02\x02\x02\u0A16\u0A14\x03\x02\x02\x02\u0A16\u0A17\x03\x02" +
		"\x02\x02\u0A17\u0A1A\x03\x02\x02\x02\u0A18\u0A16\x03\x02\x02\x02\u0A19" +
		"\u0A0F\x03\x02\x02\x02\u0A19\u0A1A\x03\x02\x02\x02\u0A1A\u0A1B\x03\x02" +
		"\x02\x02\u0A1B\u0A22\x07\x04\x02\x02\u0A1C\u0A1D\x07]\x02\x02\u0A1D\u0A1E" +
		"\x07\x03\x02\x02\u0A1E\u0A1F\x07\u0102\x02\x02\u0A1F\u0A20\x05\xC0a\x02" +
		"\u0A20\u0A21\x07\x04\x02\x02\u0A21\u0A23\x03\x02\x02\x02\u0A22\u0A1C\x03" +
		"\x02";
	private static readonly _serializedATNSegment5: string =
		"\x02\x02\u0A22\u0A23\x03\x02\x02\x02\u0A23\u0A26\x03\x02\x02\x02\u0A24" +
		"\u0A25\x07\xA4\x02\x02\u0A25\u0A27\x05\xF4{\x02\u0A26\u0A24\x03\x02\x02" +
		"\x02\u0A26\u0A27\x03\x02\x02\x02\u0A27\u0A69\x03\x02\x02\x02\u0A28\u0A29" +
		"\x05\u0104\x83\x02\u0A29\u0A2A\x07\t\x02\x02\u0A2A\u0A2B\x05\xBE`\x02" +
		"\u0A2B\u0A69\x03\x02\x02\x02\u0A2C\u0A2D\x07\x03\x02\x02\u0A2D\u0A30\x05" +
		"\u0104\x83\x02\u0A2E\u0A2F\x07\x05\x02\x02\u0A2F\u0A31\x05\u0104\x83\x02" +
		"\u0A30\u0A2E\x03\x02\x02\x02\u0A31\u0A32\x03\x02\x02\x02\u0A32\u0A30\x03" +
		"\x02\x02\x02\u0A32\u0A33\x03\x02\x02\x02\u0A33\u0A34\x03\x02\x02\x02\u0A34" +
		"\u0A35\x07\x04\x02\x02\u0A35\u0A36\x07\t\x02\x02\u0A36\u0A37\x05\xBE`" +
		"\x02\u0A37\u0A69\x03\x02\x02\x02\u0A38\u0A69\x05\u0104\x83\x02\u0A39\u0A3A" +
		"\x07\x03\x02\x02\u0A3A\u0A3B\x05\xBE`\x02\u0A3B\u0A3C\x07\x04\x02\x02" +
		"\u0A3C\u0A69\x03\x02\x02\x02\u0A3D\u0A3E\x07Y\x02\x02\u0A3E\u0A3F\x07" +
		"\x03\x02\x02\u0A3F\u0A40\x05\u0104\x83\x02\u0A40\u0A41\x07e\x02\x02\u0A41" +
		"\u0A42\x05\xC4c\x02\u0A42\u0A43\x07\x04\x02\x02\u0A43\u0A69\x03\x02\x02" +
		"\x02\u0A44\u0A45\t\x1C\x02\x02\u0A45\u0A46\x07\x03\x02\x02\u0A46\u0A47" +
		"\x05\xC4c\x02\u0A47\u0A48\t\x1D\x02\x02\u0A48\u0A4B\x05\xC4c\x02\u0A49" +
		"\u0A4A\t\x1E\x02\x02\u0A4A\u0A4C\x05\xC4c\x02\u0A4B\u0A49\x03\x02\x02" +
		"\x02\u0A4B\u0A4C\x03\x02\x02\x02\u0A4C\u0A4D\x03\x02\x02\x02\u0A4D\u0A4E" +
		"\x07\x04\x02\x02\u0A4E\u0A69\x03\x02\x02\x02\u0A4F\u0A50\x07\xEE\x02\x02" +
		"\u0A50\u0A52\x07\x03\x02\x02\u0A51\u0A53\t\x1F\x02\x02\u0A52\u0A51\x03" +
		"\x02\x02\x02\u0A52\u0A53\x03\x02\x02\x02\u0A53\u0A55\x03\x02\x02\x02\u0A54" +
		"\u0A56\x05\xC4c\x02\u0A55\u0A54\x03\x02\x02\x02\u0A55\u0A56\x03\x02\x02" +
		"\x02\u0A56\u0A57\x03\x02\x02\x02\u0A57\u0A58\x07e\x02\x02\u0A58\u0A59" +
		"\x05\xC4c\x02\u0A59\u0A5A\x07\x04\x02\x02\u0A5A\u0A69\x03\x02\x02\x02" +
		"\u0A5B\u0A5C\x07\xA6\x02\x02\u0A5C\u0A5D\x07\x03\x02\x02\u0A5D\u0A5E\x05" +
		"\xC4c\x02\u0A5E\u0A5F\x07\xAD\x02\x02\u0A5F\u0A60\x05\xC4c\x02\u0A60\u0A61" +
		"\x07e\x02\x02\u0A61\u0A64\x05\xC4c\x02\u0A62\u0A63\x07a\x02\x02\u0A63" +
		"\u0A65\x05\xC4c\x02\u0A64\u0A62\x03\x02\x02\x02\u0A64\u0A65\x03\x02\x02" +
		"\x02\u0A65\u0A66\x03\x02\x02\x02\u0A66\u0A67\x07\x04\x02\x02\u0A67\u0A69" +
		"\x03\x02\x02\x02\u0A68\u09B0\x03\x02\x02\x02\u0A68\u09B2\x03\x02\x02\x02" +
		"\u0A68\u09BE\x03\x02\x02\x02\u0A68\u09CB\x03\x02\x02\x02\u0A68\u09D2\x03" +
		"\x02\x02\x02\u0A68\u09DF\x03\x02\x02\x02\u0A68\u09E8\x03\x02\x02\x02\u0A68" +
		"\u09F1\x03\x02\x02\x02\u0A68\u09F8\x03\x02\x02\x02\u0A68\u09F9\x03\x02" +
		"\x02\x02\u0A68\u09FA\x03\x02\x02\x02\u0A68\u09FE\x03\x02\x02\x02\u0A68" +
		"\u0A08\x03\x02\x02\x02\u0A68\u0A0C\x03\x02\x02\x02\u0A68\u0A28\x03\x02" +
		"\x02\x02\u0A68\u0A2C\x03\x02\x02\x02\u0A68\u0A38\x03\x02\x02\x02\u0A68" +
		"\u0A39\x03\x02\x02\x02\u0A68\u0A3D\x03\x02\x02\x02\u0A68\u0A44\x03\x02" +
		"\x02\x02\u0A68\u0A4F\x03\x02\x02\x02\u0A68\u0A5B\x03\x02\x02\x02\u0A69" +
		"\u0A74\x03\x02\x02\x02\u0A6A\u0A6B\f\n\x02\x02\u0A6B\u0A6C\x07\n\x02\x02" +
		"\u0A6C\u0A6D\x05\xC4c\x02\u0A6D\u0A6E\x07\v\x02\x02\u0A6E\u0A73\x03\x02" +
		"\x02\x02\u0A6F\u0A70\f\b\x02\x02\u0A70\u0A71\x07\x06\x02\x02\u0A71\u0A73" +
		"\x05\u0104\x83\x02\u0A72\u0A6A\x03\x02\x02\x02\u0A72\u0A6F\x03\x02\x02" +
		"\x02\u0A73\u0A76\x03\x02\x02\x02\u0A74\u0A72\x03\x02\x02\x02\u0A74\u0A75" +
		"\x03\x02\x02\x02\u0A75\xC7\x03\x02\x02\x02\u0A76\u0A74\x03\x02\x02\x02" +
		"\u0A77\u0A84\x07\x98\x02\x02\u0A78\u0A84\x05\xD2j\x02\u0A79\u0A7A\x05" +
		"\u0104\x83\x02\u0A7A\u0A7B\x07\u0119\x02\x02\u0A7B\u0A84\x03\x02\x02\x02" +
		"\u0A7C\u0A84\x05\u010A\x86\x02\u0A7D\u0A84\x05\xD0i\x02\u0A7E\u0A80\x07" +
		"\u0119\x02\x02\u0A7F\u0A7E\x03\x02\x02\x02\u0A80\u0A81\x03\x02\x02\x02" +
		"\u0A81\u0A7F\x03\x02\x02\x02\u0A81\u0A82\x03\x02\x02\x02\u0A82\u0A84\x03" +
		"\x02\x02\x02\u0A83\u0A77\x03\x02\x02\x02\u0A83\u0A78\x03\x02\x02\x02\u0A83" +
		"\u0A79\x03\x02\x02\x02\u0A83\u0A7C\x03\x02\x02\x02\u0A83\u0A7D\x03\x02" +
		"\x02\x02\u0A83\u0A7F\x03\x02\x02\x02\u0A84\xC9\x03\x02\x02\x02\u0A85\u0A86" +
		"\t \x02\x02\u0A86\xCB\x03\x02\x02\x02\u0A87\u0A88\t!\x02\x02\u0A88\xCD" +
		"\x03\x02\x02\x02\u0A89\u0A8A\t\"\x02\x02\u0A8A\xCF\x03\x02\x02\x02\u0A8B" +
		"\u0A8C\t#\x02\x02\u0A8C\xD1\x03\x02\x02\x02\u0A8D\u0A90\x07y\x02\x02\u0A8E" +
		"\u0A91\x05\xD4k\x02\u0A8F\u0A91\x05\xD8m\x02\u0A90\u0A8E\x03\x02\x02\x02" +
		"\u0A90\u0A8F\x03\x02\x02\x02\u0A90\u0A91\x03\x02\x02\x02\u0A91\xD3\x03" +
		"\x02\x02\x02\u0A92\u0A94\x05\xD6l\x02\u0A93\u0A95\x05\xDAn\x02\u0A94\u0A93" +
		"\x03\x02\x02\x02\u0A94\u0A95\x03\x02\x02\x02\u0A95\xD5\x03\x02\x02\x02" +
		"\u0A96\u0A97\x05\xDCo\x02\u0A97\u0A98\x05\u0104\x83\x02\u0A98\u0A9A\x03" +
		"\x02\x02\x02\u0A99\u0A96\x03\x02\x02\x02\u0A9A\u0A9B\x03\x02\x02\x02\u0A9B" +
		"\u0A99\x03\x02\x02\x02\u0A9B\u0A9C\x03\x02\x02\x02\u0A9C\xD7\x03\x02\x02" +
		"\x02\u0A9D\u0AA0\x05\xDAn\x02\u0A9E\u0AA1\x05\xD6l\x02\u0A9F\u0AA1\x05" +
		"\xDAn\x02\u0AA0\u0A9E\x03\x02\x02\x02\u0AA0\u0A9F\x03\x02\x02\x02\u0AA0" +
		"\u0AA1\x03\x02\x02\x02\u0AA1\xD9\x03\x02\x02\x02\u0AA2\u0AA3\x05\xDCo" +
		"\x02\u0AA3\u0AA4\x05\u0104\x83\x02\u0AA4\u0AA5\x07\xE8\x02\x02\u0AA5\u0AA6" +
		"\x05\u0104\x83\x02\u0AA6\xDB\x03\x02\x02\x02\u0AA7\u0AA9\t$\x02\x02\u0AA8" +
		"\u0AA7\x03\x02\x02\x02\u0AA8\u0AA9\x03\x02\x02\x02\u0AA9\u0AAA\x03\x02" +
		"\x02\x02\u0AAA\u0AAD\t\x15\x02\x02\u0AAB\u0AAD\x07\u0119\x02\x02\u0AAC" +
		"\u0AA8\x03\x02\x02\x02\u0AAC\u0AAB\x03\x02\x02\x02\u0AAD\xDD\x03\x02\x02" +
		"\x02\u0AAE\u0AB2\x07_\x02\x02\u0AAF\u0AB0\x07\x0E\x02\x02\u0AB0\u0AB2" +
		"\x05\u0100\x81\x02\u0AB1\u0AAE\x03\x02\x02\x02\u0AB1\u0AAF\x03\x02\x02" +
		"\x02\u0AB2\xDF\x03\x02\x02\x02\u0AB3\u0AB4\x07\x16\x02\x02\u0AB4\u0AB5" +
		"\x07\u010A\x02\x02\u0AB5\u0AB6\x05\xE0q\x02\u0AB6\u0AB7\x07\u010C\x02" +
		"\x02\u0AB7\u0AD6\x03\x02\x02\x02\u0AB8\u0AB9\x07\x8F\x02\x02\u0AB9\u0ABA" +
		"\x07\u010A\x02\x02\u0ABA\u0ABB\x05\xE0q\x02\u0ABB\u0ABC\x07\x05\x02\x02" +
		"\u0ABC\u0ABD\x05\xE0q\x02\u0ABD\u0ABE\x07\u010C\x02\x02\u0ABE\u0AD6\x03" +
		"\x02\x02\x02\u0ABF\u0AC6\x07\xDD\x02\x02\u0AC0\u0AC2\x07\u010A\x02\x02" +
		"\u0AC1\u0AC3\x05\xEAv\x02\u0AC2\u0AC1\x03\x02\x02\x02\u0AC2\u0AC3\x03" +
		"\x02\x02\x02\u0AC3\u0AC4\x03\x02\x02\x02\u0AC4\u0AC7\x07\u010C\x02\x02" +
		"\u0AC5\u0AC7\x07\u0108\x02\x02\u0AC6\u0AC0\x03\x02\x02\x02\u0AC6\u0AC5" +
		"\x03\x02\x02\x02\u0AC7\u0AD6\x03\x02\x02\x02\u0AC8\u0AD3\x05\u0104\x83" +
		"\x02\u0AC9\u0ACA\x07\x03\x02\x02\u0ACA\u0ACF\x07\u011D\x02\x02\u0ACB\u0ACC" +
		"\x07\x05\x02\x02\u0ACC\u0ACE\x07\u011D\x02\x02\u0ACD\u0ACB\x03\x02\x02" +
		"\x02\u0ACE\u0AD1\x03\x02\x02\x02\u0ACF\u0ACD\x03\x02\x02\x02\u0ACF\u0AD0" +
		"\x03\x02\x02\x02\u0AD0\u0AD2\x03\x02\x02\x02\u0AD1\u0ACF\x03\x02\x02\x02" +
		"\u0AD2\u0AD4\x07\x04\x02\x02\u0AD3\u0AC9\x03\x02\x02\x02\u0AD3\u0AD4\x03" +
		"\x02\x02\x02\u0AD4\u0AD6\x03\x02\x02\x02\u0AD5\u0AB3\x03\x02\x02\x02\u0AD5" +
		"\u0AB8\x03\x02\x02\x02\u0AD5\u0ABF\x03\x02\x02\x02\u0AD5\u0AC8\x03\x02" +
		"\x02\x02\u0AD6\xE1\x03\x02\x02\x02\u0AD7\u0ADC\x05\xE4s\x02\u0AD8\u0AD9" +
		"\x07\x05\x02\x02\u0AD9\u0ADB\x05\xE4s\x02\u0ADA\u0AD8\x03\x02\x02\x02" +
		"\u0ADB\u0ADE\x03\x02\x02\x02\u0ADC\u0ADA\x03\x02\x02\x02\u0ADC\u0ADD\x03" +
		"\x02\x02\x02\u0ADD\xE3\x03\x02\x02\x02\u0ADE\u0ADC\x03\x02\x02\x02\u0ADF" +
		"\u0AE0\x05\xB0Y\x02\u0AE0\u0AE3\x05\xE0q\x02\u0AE1\u0AE2\x07\x97\x02\x02" +
		"\u0AE2\u0AE4\x07\x98\x02\x02\u0AE3\u0AE1\x03\x02\x02\x02\u0AE3\u0AE4\x03" +
		"\x02\x02\x02\u0AE4\u0AE6\x03\x02\x02\x02\u0AE5\u0AE7\x05\"\x12\x02\u0AE6" +
		"\u0AE5\x03\x02\x02\x02\u0AE6\u0AE7\x03\x02\x02\x02\u0AE7\u0AE9\x03\x02" +
		"\x02\x02\u0AE8\u0AEA\x05\xDEp\x02\u0AE9\u0AE8\x03\x02\x02\x02\u0AE9\u0AEA" +
		"\x03\x02\x02\x02\u0AEA\xE5\x03\x02\x02\x02\u0AEB\u0AF0\x05\xE8u\x02\u0AEC" +
		"\u0AED\x07\x05\x02\x02\u0AED\u0AEF\x05\xE8u\x02\u0AEE\u0AEC\x03\x02\x02" +
		"\x02\u0AEF\u0AF2\x03\x02\x02\x02\u0AF0\u0AEE\x03\x02\x02\x02\u0AF0\u0AF1" +
		"\x03\x02\x02\x02\u0AF1\xE7\x03\x02\x02\x02\u0AF2\u0AF0\x03\x02\x02\x02" +
		"\u0AF3\u0AF4\x05\u0100\x81\x02\u0AF4\u0AF7\x05\xE0q\x02\u0AF5\u0AF6\x07" +
		"\x97\x02\x02\u0AF6\u0AF8\x07\x98\x02\x02\u0AF7\u0AF5\x03\x02\x02\x02\u0AF7" +
		"\u0AF8\x03\x02\x02\x02\u0AF8\u0AFA\x03\x02\x02\x02\u0AF9\u0AFB\x05\"\x12" +
		"\x02\u0AFA\u0AF9\x03\x02\x02\x02\u0AFA\u0AFB\x03\x02\x02\x02\u0AFB\xE9" +
		"\x03\x02\x02\x02\u0AFC\u0B01\x05\xECw\x02\u0AFD\u0AFE\x07\x05\x02\x02" +
		"\u0AFE\u0B00\x05\xECw\x02\u0AFF\u0AFD\x03\x02\x02\x02\u0B00\u0B03\x03" +
		"\x02\x02\x02\u0B01\u0AFF\x03\x02\x02\x02\u0B01\u0B02\x03\x02\x02\x02\u0B02" +
		"\xEB\x03\x02\x02\x02\u0B03\u0B01\x03\x02\x02\x02\u0B04\u0B05\x05\u0104" +
		"\x83\x02\u0B05\u0B06\x07\f\x02\x02\u0B06\u0B09\x05\xE0q\x02\u0B07\u0B08" +
		"\x07\x97\x02\x02\u0B08\u0B0A\x07\x98\x02\x02\u0B09\u0B07\x03\x02\x02\x02" +
		"\u0B09\u0B0A\x03\x02\x02\x02\u0B0A\u0B0C\x03\x02\x02\x02\u0B0B\u0B0D\x05" +
		"\"\x12\x02\u0B0C\u0B0B\x03\x02\x02\x02\u0B0C\u0B0D\x03\x02\x02\x02\u0B0D" +
		"\xED\x03\x02\x02\x02\u0B0E\u0B0F\x07\u0101\x02\x02\u0B0F\u0B10\x05\xBE" +
		"`\x02\u0B10\u0B11\x07\xE6\x02\x02\u0B11\u0B12\x05\xBE`\x02\u0B12\xEF\x03" +
		"\x02\x02\x02\u0B13\u0B14\x07\u0103\x02\x02\u0B14\u0B19\x05\xF2z\x02\u0B15" +
		"\u0B16\x07\x05\x02\x02\u0B16\u0B18\x05\xF2z\x02\u0B17\u0B15\x03\x02\x02" +
		"\x02\u0B18\u0B1B\x03\x02\x02\x02\u0B19\u0B17\x03\x02\x02\x02\u0B19\u0B1A" +
		"\x03\x02\x02\x02\u0B1A\xF1\x03\x02\x02\x02\u0B1B\u0B19\x03\x02\x02\x02" +
		"\u0B1C\u0B1D\x05\u0100\x81\x02\u0B1D\u0B1E\x07\x17\x02\x02\u0B1E\u0B1F" +
		"\x05\xF4{\x02\u0B1F\xF3\x03\x02\x02\x02\u0B20\u0B4F\x05\u0100\x81\x02" +
		"\u0B21\u0B22\x07\x03\x02\x02\u0B22\u0B23\x05\u0100\x81\x02\u0B23\u0B24" +
		"\x07\x04\x02\x02\u0B24\u0B4F\x03\x02\x02\x02\u0B25\u0B48\x07\x03\x02\x02" +
		"\u0B26\u0B27\x07\'\x02\x02\u0B27\u0B28\x07\x1F\x02\x02\u0B28\u0B2D\x05" +
		"\xBE`\x02\u0B29\u0B2A\x07\x05\x02\x02\u0B2A\u0B2C\x05\xBE`\x02\u0B2B\u0B29" +
		"\x03\x02\x02\x02\u0B2C\u0B2F\x03\x02\x02\x02\u0B2D\u0B2B\x03\x02\x02\x02" +
		"\u0B2D\u0B2E\x03\x02\x02\x02\u0B2E\u0B49\x03\x02\x02\x02\u0B2F\u0B2D\x03" +
		"\x02\x02\x02\u0B30\u0B31\t%\x02\x02\u0B31\u0B32\x07\x1F\x02\x02\u0B32" +
		"\u0B37\x05\xBE`\x02\u0B33\u0B34\x07\x05\x02\x02\u0B34\u0B36\x05\xBE`\x02" +
		"\u0B35\u0B33\x03\x02\x02\x02\u0B36\u0B39\x03\x02\x02\x02\u0B37\u0B35\x03" +
		"\x02\x02\x02\u0B37\u0B38\x03\x02\x02\x02\u0B38\u0B3B\x03\x02\x02\x02\u0B39" +
		"\u0B37\x03\x02\x02\x02\u0B3A\u0B30\x03\x02\x02\x02\u0B3A\u0B3B\x03\x02" +
		"\x02\x02\u0B3B\u0B46\x03\x02\x02\x02\u0B3C\u0B3D\t&\x02\x02\u0B3D\u0B3E" +
		"\x07\x1F\x02\x02\u0B3E\u0B43\x05Z.\x02\u0B3F\u0B40\x07\x05\x02\x02\u0B40" +
		"\u0B42\x05Z.\x02\u0B41\u0B3F\x03\x02\x02\x02\u0B42\u0B45\x03\x02\x02\x02" +
		"\u0B43\u0B41\x03\x02\x02\x02\u0B43\u0B44\x03\x02\x02\x02\u0B44\u0B47\x03" +
		"\x02\x02\x02\u0B45\u0B43\x03\x02\x02\x02\u0B46\u0B3C\x03\x02\x02\x02\u0B46" +
		"\u0B47\x03\x02\x02\x02\u0B47\u0B49\x03\x02\x02\x02\u0B48\u0B26\x03\x02" +
		"\x02\x02\u0B48\u0B3A\x03\x02\x02\x02\u0B49\u0B4B\x03\x02\x02\x02\u0B4A" +
		"\u0B4C\x05\xF6|\x02\u0B4B\u0B4A\x03\x02\x02\x02\u0B4B\u0B4C\x03\x02\x02" +
		"\x02\u0B4C\u0B4D\x03\x02\x02\x02\u0B4D\u0B4F\x07\x04\x02\x02\u0B4E\u0B20" +
		"\x03\x02\x02\x02\u0B4E\u0B21\x03\x02\x02\x02\u0B4E\u0B25\x03\x02\x02\x02" +
		"\u0B4F\xF5\x03\x02\x02\x02\u0B50\u0B51\x07\xB5\x02\x02\u0B51\u0B61\x05" +
		"\xF8}\x02\u0B52\u0B53\x07\xC9\x02\x02\u0B53\u0B61\x05\xF8}\x02\u0B54\u0B55" +
		"\x07\xB5\x02\x02\u0B55\u0B56\x07\x1B\x02\x02\u0B56\u0B57\x05\xF8}\x02" +
		"\u0B57\u0B58\x07\x12\x02\x02\u0B58\u0B59\x05\xF8}\x02\u0B59\u0B61\x03" +
		"\x02\x02\x02\u0B5A\u0B5B\x07\xC9\x02\x02\u0B5B\u0B5C\x07\x1B\x02\x02\u0B5C" +
		"\u0B5D\x05\xF8}\x02\u0B5D\u0B5E\x07\x12\x02\x02\u0B5E\u0B5F\x05\xF8}\x02" +
		"\u0B5F\u0B61\x03\x02\x02\x02\u0B60\u0B50\x03\x02\x02\x02\u0B60\u0B52\x03" +
		"\x02\x02\x02\u0B60\u0B54\x03\x02\x02\x02\u0B60\u0B5A\x03\x02\x02\x02\u0B61" +
		"\xF7\x03\x02\x02\x02\u0B62\u0B63\x07\xF3\x02\x02\u0B63\u0B6A\t\'\x02\x02" +
		"\u0B64\u0B65\x079\x02\x02\u0B65\u0B6A\x07\xC8\x02\x02\u0B66\u0B67\x05" +
		"\xBE`\x02\u0B67\u0B68\t\'\x02\x02\u0B68\u0B6A\x03\x02\x02\x02\u0B69\u0B62" +
		"\x03\x02\x02\x02\u0B69\u0B64\x03\x02\x02\x02\u0B69\u0B66\x03\x02\x02\x02" +
		"\u0B6A\xF9\x03\x02\x02\x02\u0B6B\u0B70\x05\xFE\x80\x02\u0B6C\u0B6D\x07" +
		"\x05\x02\x02\u0B6D\u0B6F\x05\xFE\x80\x02\u0B6E\u0B6C\x03\x02\x02\x02\u0B6F" +
		"\u0B72\x03\x02\x02\x02\u0B70\u0B6E\x03\x02\x02\x02\u0B70\u0B71\x03\x02" +
		"\x02\x02\u0B71\xFB\x03\x02\x02\x02\u0B72\u0B70\x03\x02\x02\x02\u0B73\u0B78" +
		"\x05\xFE\x80\x02\u0B74\u0B78\x07]\x02\x02\u0B75\u0B78\x07\x83\x02\x02" +
		"\u0B76\u0B78\x07\xC2\x02\x02\u0B77\u0B73\x03\x02\x02\x02\u0B77\u0B74\x03" +
		"\x02\x02\x02\u0B77\u0B75\x03\x02\x02\x02\u0B77\u0B76\x03\x02\x02\x02\u0B78" +
		"\xFD\x03\x02\x02\x02\u0B79\u0B7E\x05\u0104\x83\x02\u0B7A\u0B7B\x07\x06" +
		"\x02\x02\u0B7B\u0B7D\x05\u0104\x83\x02\u0B7C\u0B7A\x03\x02\x02\x02\u0B7D" +
		"\u0B80\x03\x02\x02\x02\u0B7E\u0B7C\x03\x02\x02\x02\u0B7E\u0B7F\x03\x02" +
		"\x02\x02\u0B7F\xFF\x03\x02\x02\x02\u0B80\u0B7E\x03\x02\x02\x02\u0B81\u0B82" +
		"\x05\u0104\x83\x02\u0B82\u0B83\x05\u0102\x82\x02\u0B83\u0101\x03\x02\x02" +
		"\x02\u0B84\u0B85\x07\u010F\x02\x02\u0B85\u0B87\x05\u0104\x83\x02\u0B86" +
		"\u0B84\x03\x02\x02\x02\u0B87\u0B88\x03\x02\x02\x02\u0B88\u0B86\x03\x02" +
		"\x02\x02\u0B88\u0B89\x03\x02\x02\x02\u0B89\u0B8C\x03\x02\x02\x02\u0B8A" +
		"\u0B8C\x03\x02\x02\x02\u0B8B\u0B86\x03\x02\x02\x02\u0B8B\u0B8A\x03\x02" +
		"\x02\x02\u0B8C\u0103\x03\x02\x02\x02\u0B8D\u0B91\x05\u0106\x84\x02\u0B8E" +
		"\u0B8F\x06\x83\x12\x02\u0B8F\u0B91\x05\u0110\x89\x02\u0B90\u0B8D\x03\x02" +
		"\x02\x02\u0B90\u0B8E\x03\x02\x02\x02\u0B91\u0105\x03\x02\x02\x02\u0B92" +
		"\u0B99\x07\u0123\x02\x02\u0B93\u0B99\x05\u0108\x85\x02\u0B94\u0B95\x06" +
		"\x84\x13\x02\u0B95\u0B99\x05\u010E\x88\x02\u0B96\u0B97\x06\x84\x14\x02" +
		"\u0B97\u0B99\x05\u0112\x8A\x02\u0B98\u0B92\x03\x02\x02\x02\u0B98\u0B93" +
		"\x03\x02\x02\x02\u0B98\u0B94\x03\x02\x02\x02\u0B98\u0B96\x03\x02\x02\x02" +
		"\u0B99\u0107\x03\x02\x02\x02\u0B9A\u0B9B\x07\u0124\x02\x02\u0B9B\u0109" +
		"\x03\x02\x02\x02\u0B9C\u0B9E\x06\x86\x15\x02\u0B9D\u0B9F\x07\u010F\x02" +
		"\x02\u0B9E\u0B9D\x03\x02\x02\x02\u0B9E\u0B9F\x03\x02\x02\x02\u0B9F\u0BA0" +
		"\x03\x02\x02\x02\u0BA0\u0BC8\x07\u011E\x02\x02\u0BA1\u0BA3\x06\x86\x16" +
		"\x02\u0BA2\u0BA4\x07\u010F\x02\x02\u0BA3\u0BA2\x03\x02\x02\x02\u0BA3\u0BA4" +
		"\x03\x02\x02\x02\u0BA4\u0BA5\x03\x02\x02\x02\u0BA5\u0BC8\x07\u011F\x02" +
		"\x02\u0BA6\u0BA8\x06\x86\x17\x02\u0BA7\u0BA9\x07\u010F\x02\x02\u0BA8\u0BA7" +
		"\x03\x02\x02\x02\u0BA8\u0BA9\x03\x02\x02\x02\u0BA9\u0BAA\x03\x02\x02\x02" +
		"\u0BAA\u0BC8\t(\x02\x02\u0BAB\u0BAD\x07\u010F\x02\x02\u0BAC\u0BAB\x03" +
		"\x02\x02\x02\u0BAC\u0BAD\x03\x02\x02\x02\u0BAD\u0BAE\x03\x02\x02\x02\u0BAE" +
		"\u0BC8\x07\u011D\x02\x02\u0BAF\u0BB1\x07\u010F\x02\x02\u0BB0\u0BAF\x03" +
		"\x02\x02\x02\u0BB0\u0BB1\x03\x02\x02\x02\u0BB1\u0BB2\x03\x02\x02\x02\u0BB2" +
		"\u0BC8\x07\u011A\x02\x02\u0BB3\u0BB5\x07\u010F\x02\x02\u0BB4\u0BB3\x03" +
		"\x02\x02\x02\u0BB4\u0BB5\x03\x02\x02\x02\u0BB5\u0BB6\x03\x02\x02\x02\u0BB6" +
		"\u0BC8\x07\u011B\x02\x02\u0BB7\u0BB9\x07\u010F\x02\x02\u0BB8\u0BB7\x03" +
		"\x02\x02\x02\u0BB8\u0BB9\x03\x02\x02\x02\u0BB9\u0BBA\x03\x02\x02\x02\u0BBA" +
		"\u0BC8\x07\u011C\x02\x02\u0BBB\u0BBD\x07\u010F\x02\x02\u0BBC\u0BBB\x03" +
		"\x02\x02\x02\u0BBC\u0BBD\x03\x02\x02\x02\u0BBD\u0BBE\x03\x02\x02\x02\u0BBE" +
		"\u0BC8\x07\u0121\x02\x02\u0BBF\u0BC1\x07\u010F\x02\x02\u0BC0\u0BBF\x03" +
		"\x02\x02\x02\u0BC0\u0BC1\x03\x02\x02\x02\u0BC1\u0BC2\x03\x02\x02\x02\u0BC2" +
		"\u0BC8\x07\u0120\x02\x02\u0BC3\u0BC5\x07\u010F\x02\x02\u0BC4\u0BC3\x03" +
		"\x02\x02\x02\u0BC4\u0BC5\x03\x02\x02\x02\u0BC5\u0BC6\x03\x02\x02\x02\u0BC6" +
		"\u0BC8\x07\u0122\x02\x02\u0BC7\u0B9C\x03\x02\x02\x02\u0BC7\u0BA1\x03\x02" +
		"\x02\x02\u0BC7\u0BA6\x03\x02\x02\x02\u0BC7\u0BAC\x03\x02\x02\x02\u0BC7" +
		"\u0BB0\x03\x02\x02\x02\u0BC7\u0BB4\x03\x02\x02\x02\u0BC7\u0BB8\x03\x02" +
		"\x02\x02\u0BC7\u0BBC\x03\x02\x02\x02\u0BC7\u0BC0\x03\x02\x02\x02\u0BC7" +
		"\u0BC4\x03\x02\x02\x02\u0BC8\u010B\x03\x02\x02\x02\u0BC9\u0BCA\x07\xF1" +
		"\x02\x02\u0BCA\u0BD1\x05\xE0q\x02\u0BCB\u0BD1\x05\"\x12\x02\u0BCC\u0BD1" +
		"\x05\xDEp\x02\u0BCD\u0BCE\t)\x02\x02\u0BCE\u0BCF\x07\x97\x02\x02\u0BCF" +
		"\u0BD1\x07\x98\x02\x02\u0BD0\u0BC9\x03\x02\x02\x02\u0BD0\u0BCB\x03\x02" +
		"\x02\x02\u0BD0\u0BCC\x03\x02\x02\x02\u0BD0\u0BCD\x03\x02\x02\x02\u0BD1" +
		"\u010D\x03\x02\x02\x02\u0BD2\u0BD3\t*\x02\x02\u0BD3\u010F\x03\x02\x02" +
		"\x02\u0BD4\u0BD5\t+\x02\x02\u0BD5\u0111\x03\x02\x02\x02\u0BD6\u0BD7\t" +
		",\x02\x02\u0BD7\u0113\x03\x02\x02\x02\u018D\u0119\u011C\u011E\u0134\u0139" +
		"\u0141\u0149\u014B\u015F\u0163\u0169\u016C\u016F\u0176\u017B\u017E\u0185" +
		"\u0191\u019A\u019C\u01A0\u01A3\u01AA\u01B5\u01B7\u01BF\u01C4\u01C7\u01CD" +
		"\u01D8\u0218\u0221\u0225\u022B\u022F\u0234\u023A\u0246\u024E\u0254\u0261" +
		"\u0266\u0276\u027D\u0281\u0287\u0296\u029A\u02A0\u02A6\u02A9\u02AC\u02B2" +
		"\u02B6\u02BE\u02C0\u02C9\u02CC\u02D5\u02DA\u02E0\u02E7\u02EA\u02F0\u02FB" +
		"\u02FE\u0302\u0307\u030C\u0313\u0316\u0319\u0320\u0325\u032E\u0336\u033C" +
		"\u033F\u0342\u0348\u034C\u0350\u0354\u0356\u035E\u0366\u036C\u0372\u0375" +
		"\u0379\u037C\u0380\u039C\u039F\u03A3\u03A9\u03AC\u03AF\u03B5\u03BD\u03C2" +
		"\u03C8\u03CE\u03DA\u03DD\u03E4\u03F5\u03FE\u0401\u0407\u0410\u0417\u041A" +
		"\u0424\u0428\u042F\u04A3\u04AB\u04B3\u04BC\u04C6\u04CA\u04CD\u04D3\u04D9" +
		"\u04E5\u04F1\u04F6\u04FF\u0507\u050E\u0510\u0515\u0519\u051E\u0523\u0528" +
		"\u052B\u0530\u0534\u0539\u053B\u053F\u0548\u0550\u0559\u0560\u0569\u056E" +
		"\u0571\u0584\u0586\u058F\u0596\u0599\u05A0\u05A4\u05AA\u05B2\u05BD\u05C8" +
		"\u05CF\u05D5\u05E2\u05E9\u05F0\u05FC\u0604\u060A\u060D\u0616\u0619\u0622" +
		"\u0625\u062E\u0631\u063A\u063D\u0640\u0645\u0647\u0653\u065A\u0661\u0664" +
		"\u0666\u0672\u0676\u067A\u0680\u0684\u068C\u0690\u0693\u0696\u0699\u069D" +
		"\u06A1\u06A4\u06A8\u06AD\u06B1\u06B4\u06B7\u06BA\u06BC\u06C8\u06CB\u06CF" +
		"\u06D9\u06DD\u06DF\u06E2\u06E6\u06EC\u06F0\u06FB\u0705\u0711\u0720\u0725" +
		"\u072C\u073C\u0741\u074E\u0753\u075B\u0761\u0765\u076E\u077D\u0782\u078E" +
		"\u0793\u079B\u079E\u07A2\u07B0\u07BD\u07C2\u07C6\u07C9\u07CE\u07D7\u07DA" +
		"\u07DF\u07E6\u07E9\u07F1\u07F8\u07FF\u0802\u0807\u080A\u080F\u0813\u0816" +
		"\u0819\u081F\u0824\u0829\u083B\u083D\u0840\u084B\u0854\u085B\u0863\u086A" +
		"\u086E\u0876\u087E\u0884\u088C\u0898\u089B\u08A1\u08A5\u08A7\u08B0\u08BC" +
		"\u08BE\u08C5\u08CC\u08D2\u08D8\u08DA\u08E1\u08E9\u08EF\u08F5\u08F9\u08FB" +
		"\u0902\u090B\u0918\u091D\u0921\u092F\u0931\u0939\u093B\u093F\u0947\u0950" +
		"\u0956\u095E\u0963\u096F\u0974\u0977\u097D\u0981\u0986\u098B\u0990\u0996" +
		"\u09AB\u09AD\u09B6\u09BA\u09C3\u09C7\u09D9\u09DC\u09E4\u09ED\u0A04\u0A0F" +
		"\u0A16\u0A19\u0A22\u0A26\u0A32\u0A4B\u0A52\u0A55\u0A64\u0A68\u0A72\u0A74" +
		"\u0A81\u0A83\u0A90\u0A94\u0A9B\u0AA0\u0AA8\u0AAC\u0AB1\u0AC2\u0AC6\u0ACF" +
		"\u0AD3\u0AD5\u0ADC\u0AE3\u0AE6\u0AE9\u0AF0\u0AF7\u0AFA\u0B01\u0B09\u0B0C" +
		"\u0B19\u0B2D\u0B37\u0B3A\u0B43\u0B46\u0B48\u0B4B\u0B4E\u0B60\u0B69\u0B70" +
		"\u0B77\u0B7E\u0B88\u0B8B\u0B90\u0B98\u0B9E\u0BA3\u0BA8\u0BAC\u0BB0\u0BB4" +
		"\u0BB8\u0BBC\u0BC0\u0BC4\u0BC7\u0BD0";
	public static readonly _serializedATN: string = Utils.join(
		[
			SparkSqlParser._serializedATNSegment0,
			SparkSqlParser._serializedATNSegment1,
			SparkSqlParser._serializedATNSegment2,
			SparkSqlParser._serializedATNSegment3,
			SparkSqlParser._serializedATNSegment4,
			SparkSqlParser._serializedATNSegment5,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SparkSqlParser.__ATN) {
			SparkSqlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SparkSqlParser._serializedATN));
		}

		return SparkSqlParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public singleStatement(): SingleStatementContext {
		return this.getRuleContext(0, SingleStatementContext);
	}
	public EOF(): TerminalNode { return this.getToken(SparkSqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_program; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitProgram) {
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
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
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
			return this.getTokens(SparkSqlParser.SEMICOLON);
		} else {
			return this.getToken(SparkSqlParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_singleStatement; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSingleStatement) {
			listener.enterSingleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSingleStatement) {
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
	public SEMICOLON(): TerminalNode { return this.getToken(SparkSqlParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_emptyStatement; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitEmptyStatement) {
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
	public namedExpression(): NamedExpressionContext {
		return this.getRuleContext(0, NamedExpressionContext);
	}
	public EOF(): TerminalNode { return this.getToken(SparkSqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_singleExpression; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSingleExpression) {
			listener.enterSingleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSingleExpression) {
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
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public EOF(): TerminalNode { return this.getToken(SparkSqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_singleTableIdentifier; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSingleTableIdentifier) {
			listener.enterSingleTableIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSingleTableIdentifier) {
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
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public EOF(): TerminalNode { return this.getToken(SparkSqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_singleMultipartIdentifier; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSingleMultipartIdentifier) {
			listener.enterSingleMultipartIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSingleMultipartIdentifier) {
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
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public EOF(): TerminalNode { return this.getToken(SparkSqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_singleDataType; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSingleDataType) {
			listener.enterSingleDataType(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSingleDataType) {
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
	public colTypeList(): ColTypeListContext {
		return this.getRuleContext(0, ColTypeListContext);
	}
	public EOF(): TerminalNode { return this.getToken(SparkSqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_singleTableSchema; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSingleTableSchema) {
			listener.enterSingleTableSchema(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSingleTableSchema) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class StatementDefaultContext extends StatementContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterStatementDefault) {
			listener.enterStatementDefault(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitStatementDefault) {
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
export class DmlStatementContext extends StatementContext {
	public dmlStatementNoWith(): DmlStatementNoWithContext {
		return this.getRuleContext(0, DmlStatementNoWithContext);
	}
	public ctes(): CtesContext | undefined {
		return this.tryGetRuleContext(0, CtesContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterDmlStatement) {
			listener.enterDmlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitDmlStatement) {
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
export class UseContext extends StatementContext {
	public USE(): TerminalNode { return this.getToken(SparkSqlParser.USE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public NAMESPACE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NAMESPACE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterUse) {
			listener.enterUse(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitUse) {
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
export class CreateNamespaceContext extends StatementContext {
	public CREATE(): TerminalNode { return this.getToken(SparkSqlParser.CREATE, 0); }
	public namespace(): NamespaceContext {
		return this.getRuleContext(0, NamespaceContext);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXISTS, 0); }
	public commentSpec(): CommentSpecContext[];
	public commentSpec(i: number): CommentSpecContext;
	public commentSpec(i?: number): CommentSpecContext | CommentSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentSpecContext);
		} else {
			return this.getRuleContext(i, CommentSpecContext);
		}
	}
	public locationSpec(): LocationSpecContext[];
	public locationSpec(i: number): LocationSpecContext;
	public locationSpec(i?: number): LocationSpecContext | LocationSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LocationSpecContext);
		} else {
			return this.getRuleContext(i, LocationSpecContext);
		}
	}
	public WITH(): TerminalNode[];
	public WITH(i: number): TerminalNode;
	public WITH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.WITH);
		} else {
			return this.getToken(SparkSqlParser.WITH, i);
		}
	}
	public tablePropertyList(): TablePropertyListContext[];
	public tablePropertyList(i: number): TablePropertyListContext;
	public tablePropertyList(i?: number): TablePropertyListContext | TablePropertyListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyListContext);
		} else {
			return this.getRuleContext(i, TablePropertyListContext);
		}
	}
	public DBPROPERTIES(): TerminalNode[];
	public DBPROPERTIES(i: number): TerminalNode;
	public DBPROPERTIES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.DBPROPERTIES);
		} else {
			return this.getToken(SparkSqlParser.DBPROPERTIES, i);
		}
	}
	public PROPERTIES(): TerminalNode[];
	public PROPERTIES(i: number): TerminalNode;
	public PROPERTIES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.PROPERTIES);
		} else {
			return this.getToken(SparkSqlParser.PROPERTIES, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterCreateNamespace) {
			listener.enterCreateNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitCreateNamespace) {
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
export class SetNamespacePropertiesContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(SparkSqlParser.ALTER, 0); }
	public namespace(): NamespaceContext {
		return this.getRuleContext(0, NamespaceContext);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public SET(): TerminalNode { return this.getToken(SparkSqlParser.SET, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	public DBPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DBPROPERTIES, 0); }
	public PROPERTIES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PROPERTIES, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSetNamespaceProperties) {
			listener.enterSetNamespaceProperties(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSetNamespaceProperties) {
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
export class SetNamespaceLocationContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(SparkSqlParser.ALTER, 0); }
	public namespace(): NamespaceContext {
		return this.getRuleContext(0, NamespaceContext);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public SET(): TerminalNode { return this.getToken(SparkSqlParser.SET, 0); }
	public locationSpec(): LocationSpecContext {
		return this.getRuleContext(0, LocationSpecContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSetNamespaceLocation) {
			listener.enterSetNamespaceLocation(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSetNamespaceLocation) {
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
export class DropNamespaceContext extends StatementContext {
	public DROP(): TerminalNode { return this.getToken(SparkSqlParser.DROP, 0); }
	public namespace(): NamespaceContext {
		return this.getRuleContext(0, NamespaceContext);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXISTS, 0); }
	public RESTRICT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RESTRICT, 0); }
	public CASCADE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CASCADE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterDropNamespace) {
			listener.enterDropNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitDropNamespace) {
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
export class ShowNamespacesContext extends StatementContext {
	public _pattern!: Token;
	public SHOW(): TerminalNode { return this.getToken(SparkSqlParser.SHOW, 0); }
	public DATABASES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DATABASES, 0); }
	public NAMESPACES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NAMESPACES, 0); }
	public multipartIdentifier(): MultipartIdentifierContext | undefined {
		return this.tryGetRuleContext(0, MultipartIdentifierContext);
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FROM, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IN, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRING, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LIKE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterShowNamespaces) {
			listener.enterShowNamespaces(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitShowNamespaces) {
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
export class CreateTableContext extends StatementContext {
	public createTableHeader(): CreateTableHeaderContext {
		return this.getRuleContext(0, CreateTableHeaderContext);
	}
	public tableProvider(): TableProviderContext {
		return this.getRuleContext(0, TableProviderContext);
	}
	public createTableClauses(): CreateTableClausesContext {
		return this.getRuleContext(0, CreateTableClausesContext);
	}
	public colTypeList(): ColTypeListContext | undefined {
		return this.tryGetRuleContext(0, ColTypeListContext);
	}
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterCreateTable) {
			listener.enterCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitCreateTable) {
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
export class CreateHiveTableContext extends StatementContext {
	public _columns!: ColTypeListContext;
	public _partitionColumns!: ColTypeListContext;
	public _partitionColumnNames!: IdentifierListContext;
	public _tableProps!: TablePropertyListContext;
	public createTableHeader(): CreateTableHeaderContext {
		return this.getRuleContext(0, CreateTableHeaderContext);
	}
	public commentSpec(): CommentSpecContext[];
	public commentSpec(i: number): CommentSpecContext;
	public commentSpec(i?: number): CommentSpecContext | CommentSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentSpecContext);
		} else {
			return this.getRuleContext(i, CommentSpecContext);
		}
	}
	public bucketSpec(): BucketSpecContext[];
	public bucketSpec(i: number): BucketSpecContext;
	public bucketSpec(i?: number): BucketSpecContext | BucketSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BucketSpecContext);
		} else {
			return this.getRuleContext(i, BucketSpecContext);
		}
	}
	public skewSpec(): SkewSpecContext[];
	public skewSpec(i: number): SkewSpecContext;
	public skewSpec(i?: number): SkewSpecContext | SkewSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SkewSpecContext);
		} else {
			return this.getRuleContext(i, SkewSpecContext);
		}
	}
	public rowFormat(): RowFormatContext[];
	public rowFormat(i: number): RowFormatContext;
	public rowFormat(i?: number): RowFormatContext | RowFormatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowFormatContext);
		} else {
			return this.getRuleContext(i, RowFormatContext);
		}
	}
	public createFileFormat(): CreateFileFormatContext[];
	public createFileFormat(i: number): CreateFileFormatContext;
	public createFileFormat(i?: number): CreateFileFormatContext | CreateFileFormatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CreateFileFormatContext);
		} else {
			return this.getRuleContext(i, CreateFileFormatContext);
		}
	}
	public locationSpec(): LocationSpecContext[];
	public locationSpec(i: number): LocationSpecContext;
	public locationSpec(i?: number): LocationSpecContext | LocationSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LocationSpecContext);
		} else {
			return this.getRuleContext(i, LocationSpecContext);
		}
	}
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public colTypeList(): ColTypeListContext[];
	public colTypeList(i: number): ColTypeListContext;
	public colTypeList(i?: number): ColTypeListContext | ColTypeListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColTypeListContext);
		} else {
			return this.getRuleContext(i, ColTypeListContext);
		}
	}
	public PARTITIONED(): TerminalNode[];
	public PARTITIONED(i: number): TerminalNode;
	public PARTITIONED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.PARTITIONED);
		} else {
			return this.getToken(SparkSqlParser.PARTITIONED, i);
		}
	}
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.BY);
		} else {
			return this.getToken(SparkSqlParser.BY, i);
		}
	}
	public TBLPROPERTIES(): TerminalNode[];
	public TBLPROPERTIES(i: number): TerminalNode;
	public TBLPROPERTIES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.TBLPROPERTIES);
		} else {
			return this.getToken(SparkSqlParser.TBLPROPERTIES, i);
		}
	}
	public identifierList(): IdentifierListContext[];
	public identifierList(i: number): IdentifierListContext;
	public identifierList(i?: number): IdentifierListContext | IdentifierListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierListContext);
		} else {
			return this.getRuleContext(i, IdentifierListContext);
		}
	}
	public tablePropertyList(): TablePropertyListContext[];
	public tablePropertyList(i: number): TablePropertyListContext;
	public tablePropertyList(i?: number): TablePropertyListContext | TablePropertyListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyListContext);
		} else {
			return this.getRuleContext(i, TablePropertyListContext);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterCreateHiveTable) {
			listener.enterCreateHiveTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitCreateHiveTable) {
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
export class CreateTableLikeContext extends StatementContext {
	public _target!: TableIdentifierContext;
	public _source!: TableIdentifierContext;
	public _tableProps!: TablePropertyListContext;
	public CREATE(): TerminalNode { return this.getToken(SparkSqlParser.CREATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public LIKE(): TerminalNode { return this.getToken(SparkSqlParser.LIKE, 0); }
	public tableIdentifier(): TableIdentifierContext[];
	public tableIdentifier(i: number): TableIdentifierContext;
	public tableIdentifier(i?: number): TableIdentifierContext | TableIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableIdentifierContext);
		} else {
			return this.getRuleContext(i, TableIdentifierContext);
		}
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXISTS, 0); }
	public tableProvider(): TableProviderContext[];
	public tableProvider(i: number): TableProviderContext;
	public tableProvider(i?: number): TableProviderContext | TableProviderContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableProviderContext);
		} else {
			return this.getRuleContext(i, TableProviderContext);
		}
	}
	public rowFormat(): RowFormatContext[];
	public rowFormat(i: number): RowFormatContext;
	public rowFormat(i?: number): RowFormatContext | RowFormatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowFormatContext);
		} else {
			return this.getRuleContext(i, RowFormatContext);
		}
	}
	public createFileFormat(): CreateFileFormatContext[];
	public createFileFormat(i: number): CreateFileFormatContext;
	public createFileFormat(i?: number): CreateFileFormatContext | CreateFileFormatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CreateFileFormatContext);
		} else {
			return this.getRuleContext(i, CreateFileFormatContext);
		}
	}
	public locationSpec(): LocationSpecContext[];
	public locationSpec(i: number): LocationSpecContext;
	public locationSpec(i?: number): LocationSpecContext | LocationSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LocationSpecContext);
		} else {
			return this.getRuleContext(i, LocationSpecContext);
		}
	}
	public TBLPROPERTIES(): TerminalNode[];
	public TBLPROPERTIES(i: number): TerminalNode;
	public TBLPROPERTIES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.TBLPROPERTIES);
		} else {
			return this.getToken(SparkSqlParser.TBLPROPERTIES, i);
		}
	}
	public tablePropertyList(): TablePropertyListContext[];
	public tablePropertyList(i: number): TablePropertyListContext;
	public tablePropertyList(i?: number): TablePropertyListContext | TablePropertyListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyListContext);
		} else {
			return this.getRuleContext(i, TablePropertyListContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterCreateTableLike) {
			listener.enterCreateTableLike(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitCreateTableLike) {
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
export class ReplaceTableContext extends StatementContext {
	public replaceTableHeader(): ReplaceTableHeaderContext {
		return this.getRuleContext(0, ReplaceTableHeaderContext);
	}
	public tableProvider(): TableProviderContext {
		return this.getRuleContext(0, TableProviderContext);
	}
	public createTableClauses(): CreateTableClausesContext {
		return this.getRuleContext(0, CreateTableClausesContext);
	}
	public colTypeList(): ColTypeListContext | undefined {
		return this.tryGetRuleContext(0, ColTypeListContext);
	}
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterReplaceTable) {
			listener.enterReplaceTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitReplaceTable) {
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
export class AnalyzeContext extends StatementContext {
	public ANALYZE(): TerminalNode { return this.getToken(SparkSqlParser.ANALYZE, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public COMPUTE(): TerminalNode { return this.getToken(SparkSqlParser.COMPUTE, 0); }
	public STATISTICS(): TerminalNode { return this.getToken(SparkSqlParser.STATISTICS, 0); }
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public FOR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FOR, 0); }
	public COLUMNS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COLUMNS, 0); }
	public identifierSeq(): IdentifierSeqContext | undefined {
		return this.tryGetRuleContext(0, IdentifierSeqContext);
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ALL, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterAnalyze) {
			listener.enterAnalyze(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitAnalyze) {
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
export class AddTableColumnsContext extends StatementContext {
	public _columns!: QualifiedColTypeWithPositionListContext;
	public ALTER(): TerminalNode { return this.getToken(SparkSqlParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public ADD(): TerminalNode { return this.getToken(SparkSqlParser.ADD, 0); }
	public COLUMN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COLUMN, 0); }
	public COLUMNS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COLUMNS, 0); }
	public qualifiedColTypeWithPositionList(): QualifiedColTypeWithPositionListContext {
		return this.getRuleContext(0, QualifiedColTypeWithPositionListContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterAddTableColumns) {
			listener.enterAddTableColumns(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitAddTableColumns) {
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
export class RenameTableColumnContext extends StatementContext {
	public _table!: MultipartIdentifierContext;
	public _from!: MultipartIdentifierContext;
	public _to!: ErrorCapturingIdentifierContext;
	public ALTER(): TerminalNode { return this.getToken(SparkSqlParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public RENAME(): TerminalNode { return this.getToken(SparkSqlParser.RENAME, 0); }
	public COLUMN(): TerminalNode { return this.getToken(SparkSqlParser.COLUMN, 0); }
	public TO(): TerminalNode { return this.getToken(SparkSqlParser.TO, 0); }
	public multipartIdentifier(): MultipartIdentifierContext[];
	public multipartIdentifier(i: number): MultipartIdentifierContext;
	public multipartIdentifier(i?: number): MultipartIdentifierContext | MultipartIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultipartIdentifierContext);
		} else {
			return this.getRuleContext(i, MultipartIdentifierContext);
		}
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getRuleContext(0, ErrorCapturingIdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterRenameTableColumn) {
			listener.enterRenameTableColumn(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitRenameTableColumn) {
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
export class DropTableColumnsContext extends StatementContext {
	public _columns!: MultipartIdentifierListContext;
	public ALTER(): TerminalNode { return this.getToken(SparkSqlParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public DROP(): TerminalNode { return this.getToken(SparkSqlParser.DROP, 0); }
	public COLUMN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COLUMN, 0); }
	public COLUMNS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COLUMNS, 0); }
	public multipartIdentifierList(): MultipartIdentifierListContext {
		return this.getRuleContext(0, MultipartIdentifierListContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterDropTableColumns) {
			listener.enterDropTableColumns(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitDropTableColumns) {
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
export class RenameTableContext extends StatementContext {
	public _from!: MultipartIdentifierContext;
	public _to!: MultipartIdentifierContext;
	public ALTER(): TerminalNode { return this.getToken(SparkSqlParser.ALTER, 0); }
	public RENAME(): TerminalNode { return this.getToken(SparkSqlParser.RENAME, 0); }
	public TO(): TerminalNode { return this.getToken(SparkSqlParser.TO, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TABLE, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.VIEW, 0); }
	public multipartIdentifier(): MultipartIdentifierContext[];
	public multipartIdentifier(i: number): MultipartIdentifierContext;
	public multipartIdentifier(i?: number): MultipartIdentifierContext | MultipartIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultipartIdentifierContext);
		} else {
			return this.getRuleContext(i, MultipartIdentifierContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterRenameTable) {
			listener.enterRenameTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitRenameTable) {
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
export class SetTablePropertiesContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(SparkSqlParser.ALTER, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public SET(): TerminalNode { return this.getToken(SparkSqlParser.SET, 0); }
	public TBLPROPERTIES(): TerminalNode { return this.getToken(SparkSqlParser.TBLPROPERTIES, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TABLE, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.VIEW, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSetTableProperties) {
			listener.enterSetTableProperties(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSetTableProperties) {
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
export class UnsetTablePropertiesContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(SparkSqlParser.ALTER, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public UNSET(): TerminalNode { return this.getToken(SparkSqlParser.UNSET, 0); }
	public TBLPROPERTIES(): TerminalNode { return this.getToken(SparkSqlParser.TBLPROPERTIES, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TABLE, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.VIEW, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXISTS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterUnsetTableProperties) {
			listener.enterUnsetTableProperties(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitUnsetTableProperties) {
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
export class AlterTableAlterColumnContext extends StatementContext {
	public _table!: MultipartIdentifierContext;
	public _column!: MultipartIdentifierContext;
	public ALTER(): TerminalNode[];
	public ALTER(i: number): TerminalNode;
	public ALTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.ALTER);
		} else {
			return this.getToken(SparkSqlParser.ALTER, i);
		}
	}
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext[];
	public multipartIdentifier(i: number): MultipartIdentifierContext;
	public multipartIdentifier(i?: number): MultipartIdentifierContext | MultipartIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultipartIdentifierContext);
		} else {
			return this.getRuleContext(i, MultipartIdentifierContext);
		}
	}
	public CHANGE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CHANGE, 0); }
	public COLUMN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COLUMN, 0); }
	public alterColumnAction(): AlterColumnActionContext | undefined {
		return this.tryGetRuleContext(0, AlterColumnActionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterAlterTableAlterColumn) {
			listener.enterAlterTableAlterColumn(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitAlterTableAlterColumn) {
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
export class HiveChangeColumnContext extends StatementContext {
	public _table!: MultipartIdentifierContext;
	public _colName!: MultipartIdentifierContext;
	public ALTER(): TerminalNode { return this.getToken(SparkSqlParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public CHANGE(): TerminalNode { return this.getToken(SparkSqlParser.CHANGE, 0); }
	public colType(): ColTypeContext {
		return this.getRuleContext(0, ColTypeContext);
	}
	public multipartIdentifier(): MultipartIdentifierContext[];
	public multipartIdentifier(i: number): MultipartIdentifierContext;
	public multipartIdentifier(i?: number): MultipartIdentifierContext | MultipartIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultipartIdentifierContext);
		} else {
			return this.getRuleContext(i, MultipartIdentifierContext);
		}
	}
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	public COLUMN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COLUMN, 0); }
	public colPosition(): ColPositionContext | undefined {
		return this.tryGetRuleContext(0, ColPositionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterHiveChangeColumn) {
			listener.enterHiveChangeColumn(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitHiveChangeColumn) {
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
export class HiveReplaceColumnsContext extends StatementContext {
	public _table!: MultipartIdentifierContext;
	public _columns!: QualifiedColTypeWithPositionListContext;
	public ALTER(): TerminalNode { return this.getToken(SparkSqlParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public REPLACE(): TerminalNode { return this.getToken(SparkSqlParser.REPLACE, 0); }
	public COLUMNS(): TerminalNode { return this.getToken(SparkSqlParser.COLUMNS, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public qualifiedColTypeWithPositionList(): QualifiedColTypeWithPositionListContext {
		return this.getRuleContext(0, QualifiedColTypeWithPositionListContext);
	}
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterHiveReplaceColumns) {
			listener.enterHiveReplaceColumns(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitHiveReplaceColumns) {
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
export class SetTableSerDeContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(SparkSqlParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public SET(): TerminalNode { return this.getToken(SparkSqlParser.SET, 0); }
	public SERDE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SERDE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRING, 0); }
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.WITH, 0); }
	public SERDEPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SERDEPROPERTIES, 0); }
	public tablePropertyList(): TablePropertyListContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyListContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSetTableSerDe) {
			listener.enterSetTableSerDe(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSetTableSerDe) {
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
export class AddTablePartitionContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(SparkSqlParser.ALTER, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public ADD(): TerminalNode { return this.getToken(SparkSqlParser.ADD, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TABLE, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.VIEW, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXISTS, 0); }
	public partitionSpecLocation(): PartitionSpecLocationContext[];
	public partitionSpecLocation(i: number): PartitionSpecLocationContext;
	public partitionSpecLocation(i?: number): PartitionSpecLocationContext | PartitionSpecLocationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartitionSpecLocationContext);
		} else {
			return this.getRuleContext(i, PartitionSpecLocationContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterAddTablePartition) {
			listener.enterAddTablePartition(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitAddTablePartition) {
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
export class RenameTablePartitionContext extends StatementContext {
	public _from!: PartitionSpecContext;
	public _to!: PartitionSpecContext;
	public ALTER(): TerminalNode { return this.getToken(SparkSqlParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public RENAME(): TerminalNode { return this.getToken(SparkSqlParser.RENAME, 0); }
	public TO(): TerminalNode { return this.getToken(SparkSqlParser.TO, 0); }
	public partitionSpec(): PartitionSpecContext[];
	public partitionSpec(i: number): PartitionSpecContext;
	public partitionSpec(i?: number): PartitionSpecContext | PartitionSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartitionSpecContext);
		} else {
			return this.getRuleContext(i, PartitionSpecContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterRenameTablePartition) {
			listener.enterRenameTablePartition(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitRenameTablePartition) {
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
export class DropTablePartitionsContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(SparkSqlParser.ALTER, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public DROP(): TerminalNode { return this.getToken(SparkSqlParser.DROP, 0); }
	public partitionSpec(): PartitionSpecContext[];
	public partitionSpec(i: number): PartitionSpecContext;
	public partitionSpec(i?: number): PartitionSpecContext | PartitionSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartitionSpecContext);
		} else {
			return this.getRuleContext(i, PartitionSpecContext);
		}
	}
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TABLE, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.VIEW, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXISTS, 0); }
	public PURGE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PURGE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterDropTablePartitions) {
			listener.enterDropTablePartitions(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitDropTablePartitions) {
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
export class SetTableLocationContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(SparkSqlParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public SET(): TerminalNode { return this.getToken(SparkSqlParser.SET, 0); }
	public locationSpec(): LocationSpecContext {
		return this.getRuleContext(0, LocationSpecContext);
	}
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSetTableLocation) {
			listener.enterSetTableLocation(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSetTableLocation) {
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
export class RecoverPartitionsContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(SparkSqlParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public RECOVER(): TerminalNode { return this.getToken(SparkSqlParser.RECOVER, 0); }
	public PARTITIONS(): TerminalNode { return this.getToken(SparkSqlParser.PARTITIONS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterRecoverPartitions) {
			listener.enterRecoverPartitions(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitRecoverPartitions) {
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
export class DropTableContext extends StatementContext {
	public DROP(): TerminalNode { return this.getToken(SparkSqlParser.DROP, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXISTS, 0); }
	public PURGE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PURGE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterDropTable) {
			listener.enterDropTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitDropTable) {
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
export class DropViewContext extends StatementContext {
	public DROP(): TerminalNode { return this.getToken(SparkSqlParser.DROP, 0); }
	public VIEW(): TerminalNode { return this.getToken(SparkSqlParser.VIEW, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXISTS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterDropView) {
			listener.enterDropView(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitDropView) {
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
export class CreateViewContext extends StatementContext {
	public CREATE(): TerminalNode { return this.getToken(SparkSqlParser.CREATE, 0); }
	public VIEW(): TerminalNode { return this.getToken(SparkSqlParser.VIEW, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public AS(): TerminalNode { return this.getToken(SparkSqlParser.AS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OR, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.REPLACE, 0); }
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TEMPORARY, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXISTS, 0); }
	public identifierCommentList(): IdentifierCommentListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierCommentListContext);
	}
	public commentSpec(): CommentSpecContext[];
	public commentSpec(i: number): CommentSpecContext;
	public commentSpec(i?: number): CommentSpecContext | CommentSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentSpecContext);
		} else {
			return this.getRuleContext(i, CommentSpecContext);
		}
	}
	public PARTITIONED(): TerminalNode[];
	public PARTITIONED(i: number): TerminalNode;
	public PARTITIONED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.PARTITIONED);
		} else {
			return this.getToken(SparkSqlParser.PARTITIONED, i);
		}
	}
	public ON(): TerminalNode[];
	public ON(i: number): TerminalNode;
	public ON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.ON);
		} else {
			return this.getToken(SparkSqlParser.ON, i);
		}
	}
	public identifierList(): IdentifierListContext[];
	public identifierList(i: number): IdentifierListContext;
	public identifierList(i?: number): IdentifierListContext | IdentifierListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierListContext);
		} else {
			return this.getRuleContext(i, IdentifierListContext);
		}
	}
	public TBLPROPERTIES(): TerminalNode[];
	public TBLPROPERTIES(i: number): TerminalNode;
	public TBLPROPERTIES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.TBLPROPERTIES);
		} else {
			return this.getToken(SparkSqlParser.TBLPROPERTIES, i);
		}
	}
	public tablePropertyList(): TablePropertyListContext[];
	public tablePropertyList(i: number): TablePropertyListContext;
	public tablePropertyList(i?: number): TablePropertyListContext | TablePropertyListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyListContext);
		} else {
			return this.getRuleContext(i, TablePropertyListContext);
		}
	}
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.GLOBAL, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterCreateView) {
			listener.enterCreateView(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitCreateView) {
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
export class CreateTempViewUsingContext extends StatementContext {
	public CREATE(): TerminalNode { return this.getToken(SparkSqlParser.CREATE, 0); }
	public TEMPORARY(): TerminalNode { return this.getToken(SparkSqlParser.TEMPORARY, 0); }
	public VIEW(): TerminalNode { return this.getToken(SparkSqlParser.VIEW, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public tableProvider(): TableProviderContext {
		return this.getRuleContext(0, TableProviderContext);
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OR, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.REPLACE, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.GLOBAL, 0); }
	public colTypeList(): ColTypeListContext | undefined {
		return this.tryGetRuleContext(0, ColTypeListContext);
	}
	public OPTIONS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OPTIONS, 0); }
	public tablePropertyList(): TablePropertyListContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyListContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterCreateTempViewUsing) {
			listener.enterCreateTempViewUsing(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitCreateTempViewUsing) {
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
export class AlterViewQueryContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(SparkSqlParser.ALTER, 0); }
	public VIEW(): TerminalNode { return this.getToken(SparkSqlParser.VIEW, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterAlterViewQuery) {
			listener.enterAlterViewQuery(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitAlterViewQuery) {
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
export class CreateFunctionContext extends StatementContext {
	public _className!: Token;
	public CREATE(): TerminalNode { return this.getToken(SparkSqlParser.CREATE, 0); }
	public FUNCTION(): TerminalNode { return this.getToken(SparkSqlParser.FUNCTION, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public AS(): TerminalNode { return this.getToken(SparkSqlParser.AS, 0); }
	public STRING(): TerminalNode { return this.getToken(SparkSqlParser.STRING, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OR, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.REPLACE, 0); }
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TEMPORARY, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXISTS, 0); }
	public USING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.USING, 0); }
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterCreateFunction) {
			listener.enterCreateFunction(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitCreateFunction) {
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
export class DropFunctionContext extends StatementContext {
	public DROP(): TerminalNode { return this.getToken(SparkSqlParser.DROP, 0); }
	public FUNCTION(): TerminalNode { return this.getToken(SparkSqlParser.FUNCTION, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TEMPORARY, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXISTS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterDropFunction) {
			listener.enterDropFunction(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitDropFunction) {
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
export class ExplainContext extends StatementContext {
	public EXPLAIN(): TerminalNode { return this.getToken(SparkSqlParser.EXPLAIN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public LOGICAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOGICAL, 0); }
	public FORMATTED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FORMATTED, 0); }
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXTENDED, 0); }
	public CODEGEN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CODEGEN, 0); }
	public COST(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COST, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterExplain) {
			listener.enterExplain(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitExplain) {
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
export class ShowTablesContext extends StatementContext {
	public _pattern!: Token;
	public SHOW(): TerminalNode { return this.getToken(SparkSqlParser.SHOW, 0); }
	public TABLES(): TerminalNode { return this.getToken(SparkSqlParser.TABLES, 0); }
	public multipartIdentifier(): MultipartIdentifierContext | undefined {
		return this.tryGetRuleContext(0, MultipartIdentifierContext);
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FROM, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IN, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRING, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LIKE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterShowTables) {
			listener.enterShowTables(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitShowTables) {
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
export class ShowTableContext extends StatementContext {
	public _ns!: MultipartIdentifierContext;
	public _pattern!: Token;
	public SHOW(): TerminalNode { return this.getToken(SparkSqlParser.SHOW, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public EXTENDED(): TerminalNode { return this.getToken(SparkSqlParser.EXTENDED, 0); }
	public LIKE(): TerminalNode { return this.getToken(SparkSqlParser.LIKE, 0); }
	public STRING(): TerminalNode { return this.getToken(SparkSqlParser.STRING, 0); }
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FROM, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IN, 0); }
	public multipartIdentifier(): MultipartIdentifierContext | undefined {
		return this.tryGetRuleContext(0, MultipartIdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterShowTable) {
			listener.enterShowTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitShowTable) {
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
export class ShowTblPropertiesContext extends StatementContext {
	public _table!: MultipartIdentifierContext;
	public _key!: TablePropertyKeyContext;
	public SHOW(): TerminalNode { return this.getToken(SparkSqlParser.SHOW, 0); }
	public TBLPROPERTIES(): TerminalNode { return this.getToken(SparkSqlParser.TBLPROPERTIES, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public tablePropertyKey(): TablePropertyKeyContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyKeyContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterShowTblProperties) {
			listener.enterShowTblProperties(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitShowTblProperties) {
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
export class ShowColumnsContext extends StatementContext {
	public _table!: MultipartIdentifierContext;
	public _ns!: MultipartIdentifierContext;
	public SHOW(): TerminalNode { return this.getToken(SparkSqlParser.SHOW, 0); }
	public COLUMNS(): TerminalNode { return this.getToken(SparkSqlParser.COLUMNS, 0); }
	public FROM(): TerminalNode[];
	public FROM(i: number): TerminalNode;
	public FROM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.FROM);
		} else {
			return this.getToken(SparkSqlParser.FROM, i);
		}
	}
	public IN(): TerminalNode[];
	public IN(i: number): TerminalNode;
	public IN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.IN);
		} else {
			return this.getToken(SparkSqlParser.IN, i);
		}
	}
	public multipartIdentifier(): MultipartIdentifierContext[];
	public multipartIdentifier(i: number): MultipartIdentifierContext;
	public multipartIdentifier(i?: number): MultipartIdentifierContext | MultipartIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultipartIdentifierContext);
		} else {
			return this.getRuleContext(i, MultipartIdentifierContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterShowColumns) {
			listener.enterShowColumns(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitShowColumns) {
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
export class ShowViewsContext extends StatementContext {
	public _pattern!: Token;
	public SHOW(): TerminalNode { return this.getToken(SparkSqlParser.SHOW, 0); }
	public VIEWS(): TerminalNode { return this.getToken(SparkSqlParser.VIEWS, 0); }
	public multipartIdentifier(): MultipartIdentifierContext | undefined {
		return this.tryGetRuleContext(0, MultipartIdentifierContext);
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FROM, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IN, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRING, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LIKE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterShowViews) {
			listener.enterShowViews(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitShowViews) {
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
export class ShowPartitionsContext extends StatementContext {
	public SHOW(): TerminalNode { return this.getToken(SparkSqlParser.SHOW, 0); }
	public PARTITIONS(): TerminalNode { return this.getToken(SparkSqlParser.PARTITIONS, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterShowPartitions) {
			listener.enterShowPartitions(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitShowPartitions) {
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
export class ShowFunctionsContext extends StatementContext {
	public _pattern!: Token;
	public SHOW(): TerminalNode { return this.getToken(SparkSqlParser.SHOW, 0); }
	public FUNCTIONS(): TerminalNode { return this.getToken(SparkSqlParser.FUNCTIONS, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public multipartIdentifier(): MultipartIdentifierContext | undefined {
		return this.tryGetRuleContext(0, MultipartIdentifierContext);
	}
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LIKE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRING, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterShowFunctions) {
			listener.enterShowFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitShowFunctions) {
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
export class ShowCreateTableContext extends StatementContext {
	public SHOW(): TerminalNode { return this.getToken(SparkSqlParser.SHOW, 0); }
	public CREATE(): TerminalNode { return this.getToken(SparkSqlParser.CREATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AS, 0); }
	public SERDE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SERDE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterShowCreateTable) {
			listener.enterShowCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitShowCreateTable) {
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
export class ShowCurrentNamespaceContext extends StatementContext {
	public SHOW(): TerminalNode { return this.getToken(SparkSqlParser.SHOW, 0); }
	public CURRENT(): TerminalNode { return this.getToken(SparkSqlParser.CURRENT, 0); }
	public NAMESPACE(): TerminalNode { return this.getToken(SparkSqlParser.NAMESPACE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterShowCurrentNamespace) {
			listener.enterShowCurrentNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitShowCurrentNamespace) {
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
export class DescribeFunctionContext extends StatementContext {
	public FUNCTION(): TerminalNode { return this.getToken(SparkSqlParser.FUNCTION, 0); }
	public describeFuncName(): DescribeFuncNameContext {
		return this.getRuleContext(0, DescribeFuncNameContext);
	}
	public DESC(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DESC, 0); }
	public DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DESCRIBE, 0); }
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXTENDED, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterDescribeFunction) {
			listener.enterDescribeFunction(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitDescribeFunction) {
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
export class DescribeNamespaceContext extends StatementContext {
	public namespace(): NamespaceContext {
		return this.getRuleContext(0, NamespaceContext);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public DESC(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DESC, 0); }
	public DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DESCRIBE, 0); }
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXTENDED, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterDescribeNamespace) {
			listener.enterDescribeNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitDescribeNamespace) {
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
export class DescribeRelationContext extends StatementContext {
	public _option!: Token;
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public DESC(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DESC, 0); }
	public DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DESCRIBE, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TABLE, 0); }
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	public describeColName(): DescribeColNameContext | undefined {
		return this.tryGetRuleContext(0, DescribeColNameContext);
	}
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXTENDED, 0); }
	public FORMATTED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FORMATTED, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterDescribeRelation) {
			listener.enterDescribeRelation(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitDescribeRelation) {
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
export class DescribeQueryContext extends StatementContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public DESC(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DESC, 0); }
	public DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DESCRIBE, 0); }
	public QUERY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.QUERY, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterDescribeQuery) {
			listener.enterDescribeQuery(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitDescribeQuery) {
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
export class CommentNamespaceContext extends StatementContext {
	public _comment!: Token;
	public COMMENT(): TerminalNode { return this.getToken(SparkSqlParser.COMMENT, 0); }
	public ON(): TerminalNode { return this.getToken(SparkSqlParser.ON, 0); }
	public namespace(): NamespaceContext {
		return this.getRuleContext(0, NamespaceContext);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public IS(): TerminalNode { return this.getToken(SparkSqlParser.IS, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRING, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NULL, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterCommentNamespace) {
			listener.enterCommentNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitCommentNamespace) {
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
export class CommentTableContext extends StatementContext {
	public _comment!: Token;
	public COMMENT(): TerminalNode { return this.getToken(SparkSqlParser.COMMENT, 0); }
	public ON(): TerminalNode { return this.getToken(SparkSqlParser.ON, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public IS(): TerminalNode { return this.getToken(SparkSqlParser.IS, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRING, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NULL, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterCommentTable) {
			listener.enterCommentTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitCommentTable) {
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
export class RefreshTableContext extends StatementContext {
	public REFRESH(): TerminalNode { return this.getToken(SparkSqlParser.REFRESH, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterRefreshTable) {
			listener.enterRefreshTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitRefreshTable) {
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
export class RefreshFunctionContext extends StatementContext {
	public REFRESH(): TerminalNode { return this.getToken(SparkSqlParser.REFRESH, 0); }
	public FUNCTION(): TerminalNode { return this.getToken(SparkSqlParser.FUNCTION, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterRefreshFunction) {
			listener.enterRefreshFunction(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitRefreshFunction) {
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
export class RefreshResourceContext extends StatementContext {
	public REFRESH(): TerminalNode { return this.getToken(SparkSqlParser.REFRESH, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRING, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterRefreshResource) {
			listener.enterRefreshResource(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitRefreshResource) {
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
export class CacheTableContext extends StatementContext {
	public CACHE(): TerminalNode { return this.getToken(SparkSqlParser.CACHE, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public LAZY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LAZY, 0); }
	public OPTIONS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OPTIONS, 0); }
	public tablePropertyList(): TablePropertyListContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyListContext);
	}
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterCacheTable) {
			listener.enterCacheTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitCacheTable) {
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
export class UncacheTableContext extends StatementContext {
	public UNCACHE(): TerminalNode { return this.getToken(SparkSqlParser.UNCACHE, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXISTS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterUncacheTable) {
			listener.enterUncacheTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitUncacheTable) {
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
export class ClearCacheContext extends StatementContext {
	public CLEAR(): TerminalNode { return this.getToken(SparkSqlParser.CLEAR, 0); }
	public CACHE(): TerminalNode { return this.getToken(SparkSqlParser.CACHE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterClearCache) {
			listener.enterClearCache(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitClearCache) {
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
export class LoadDataContext extends StatementContext {
	public _path!: Token;
	public LOAD(): TerminalNode { return this.getToken(SparkSqlParser.LOAD, 0); }
	public DATA(): TerminalNode { return this.getToken(SparkSqlParser.DATA, 0); }
	public INPATH(): TerminalNode { return this.getToken(SparkSqlParser.INPATH, 0); }
	public INTO(): TerminalNode { return this.getToken(SparkSqlParser.INTO, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public STRING(): TerminalNode { return this.getToken(SparkSqlParser.STRING, 0); }
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOCAL, 0); }
	public OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OVERWRITE, 0); }
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterLoadData) {
			listener.enterLoadData(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitLoadData) {
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
export class TruncateTableContext extends StatementContext {
	public TRUNCATE(): TerminalNode { return this.getToken(SparkSqlParser.TRUNCATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTruncateTable) {
			listener.enterTruncateTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTruncateTable) {
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
export class RepairTableContext extends StatementContext {
	public MSCK(): TerminalNode { return this.getToken(SparkSqlParser.MSCK, 0); }
	public REPAIR(): TerminalNode { return this.getToken(SparkSqlParser.REPAIR, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterRepairTable) {
			listener.enterRepairTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitRepairTable) {
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
export class ManageResourceContext extends StatementContext {
	public _op!: Token;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ADD, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LIST, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRING, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterManageResource) {
			listener.enterManageResource(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitManageResource) {
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
export class FailNativeCommandContext extends StatementContext {
	public SET(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SET, 0); }
	public ROLE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROLE, 0); }
	public unsupportedHiveNativeCommands(): UnsupportedHiveNativeCommandsContext | undefined {
		return this.tryGetRuleContext(0, UnsupportedHiveNativeCommandsContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterFailNativeCommand) {
			listener.enterFailNativeCommand(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitFailNativeCommand) {
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
export class SetTimeZoneContext extends StatementContext {
	public _timezone!: Token;
	public SET(): TerminalNode { return this.getToken(SparkSqlParser.SET, 0); }
	public TIME(): TerminalNode { return this.getToken(SparkSqlParser.TIME, 0); }
	public ZONE(): TerminalNode { return this.getToken(SparkSqlParser.ZONE, 0); }
	public interval(): IntervalContext | undefined {
		return this.tryGetRuleContext(0, IntervalContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRING, 0); }
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOCAL, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSetTimeZone) {
			listener.enterSetTimeZone(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSetTimeZone) {
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
export class SetQuotedConfigurationContext extends StatementContext {
	public SET(): TerminalNode { return this.getToken(SparkSqlParser.SET, 0); }
	public configKey(): ConfigKeyContext {
		return this.getRuleContext(0, ConfigKeyContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EQ, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSetQuotedConfiguration) {
			listener.enterSetQuotedConfiguration(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSetQuotedConfiguration) {
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
export class SetConfigurationContext extends StatementContext {
	public SET(): TerminalNode { return this.getToken(SparkSqlParser.SET, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSetConfiguration) {
			listener.enterSetConfiguration(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSetConfiguration) {
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
export class ResetQuotedConfigurationContext extends StatementContext {
	public RESET(): TerminalNode { return this.getToken(SparkSqlParser.RESET, 0); }
	public configKey(): ConfigKeyContext {
		return this.getRuleContext(0, ConfigKeyContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterResetQuotedConfiguration) {
			listener.enterResetQuotedConfiguration(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitResetQuotedConfiguration) {
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
export class ResetConfigurationContext extends StatementContext {
	public RESET(): TerminalNode { return this.getToken(SparkSqlParser.RESET, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterResetConfiguration) {
			listener.enterResetConfiguration(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitResetConfiguration) {
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


export class ConfigKeyContext extends ParserRuleContext {
	public quotedIdentifier(): QuotedIdentifierContext {
		return this.getRuleContext(0, QuotedIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_configKey; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterConfigKey) {
			listener.enterConfigKey(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitConfigKey) {
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
	public CREATE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CREATE, 0); }
	public ROLE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROLE, 0); }
	public DROP(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DROP, 0); }
	public GRANT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.GRANT, 0); }
	public REVOKE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.REVOKE, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SHOW, 0); }
	public PRINCIPALS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PRINCIPALS, 0); }
	public ROLES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROLES, 0); }
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CURRENT, 0); }
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXPORT, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TABLE, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IMPORT, 0); }
	public COMPACTIONS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COMPACTIONS, 0); }
	public TRANSACTIONS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRANSACTIONS, 0); }
	public INDEXES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INDEXES, 0); }
	public LOCKS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOCKS, 0); }
	public INDEX(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INDEX, 0); }
	public ALTER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ALTER, 0); }
	public LOCK(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOCK, 0); }
	public DATABASE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DATABASE, 0); }
	public UNLOCK(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNLOCK, 0); }
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TEMPORARY, 0); }
	public MACRO(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MACRO, 0); }
	public tableIdentifier(): TableIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TableIdentifierContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NOT, 0); }
	public CLUSTERED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CLUSTERED, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.BY, 0); }
	public SORTED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SORTED, 0); }
	public SKEWED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SKEWED, 0); }
	public STORED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STORED, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AS, 0); }
	public DIRECTORIES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DIRECTORIES, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SET, 0); }
	public LOCATION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOCATION, 0); }
	public EXCHANGE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXCHANGE, 0); }
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PARTITION, 0); }
	public ARCHIVE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ARCHIVE, 0); }
	public UNARCHIVE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNARCHIVE, 0); }
	public TOUCH(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TOUCH, 0); }
	public COMPACT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COMPACT, 0); }
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	public CONCATENATE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CONCATENATE, 0); }
	public FILEFORMAT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FILEFORMAT, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.REPLACE, 0); }
	public COLUMNS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COLUMNS, 0); }
	public START(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.START, 0); }
	public TRANSACTION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRANSACTION, 0); }
	public COMMIT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COMMIT, 0); }
	public ROLLBACK(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROLLBACK, 0); }
	public DFS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DFS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_unsupportedHiveNativeCommands; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterUnsupportedHiveNativeCommands) {
			listener.enterUnsupportedHiveNativeCommands(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitUnsupportedHiveNativeCommands) {
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
	public CREATE(): TerminalNode { return this.getToken(SparkSqlParser.CREATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TEMPORARY, 0); }
	public EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXTERNAL, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXISTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_createTableHeader; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterCreateTableHeader) {
			listener.enterCreateTableHeader(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitCreateTableHeader) {
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
	public REPLACE(): TerminalNode { return this.getToken(SparkSqlParser.REPLACE, 0); }
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public CREATE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CREATE, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_replaceTableHeader; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterReplaceTableHeader) {
			listener.enterReplaceTableHeader(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitReplaceTableHeader) {
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
	public CLUSTERED(): TerminalNode { return this.getToken(SparkSqlParser.CLUSTERED, 0); }
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.BY);
		} else {
			return this.getToken(SparkSqlParser.BY, i);
		}
	}
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public INTO(): TerminalNode { return this.getToken(SparkSqlParser.INTO, 0); }
	public INTEGER_VALUE(): TerminalNode { return this.getToken(SparkSqlParser.INTEGER_VALUE, 0); }
	public BUCKETS(): TerminalNode { return this.getToken(SparkSqlParser.BUCKETS, 0); }
	public SORTED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SORTED, 0); }
	public orderedIdentifierList(): OrderedIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, OrderedIdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_bucketSpec; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterBucketSpec) {
			listener.enterBucketSpec(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitBucketSpec) {
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
	public SKEWED(): TerminalNode { return this.getToken(SparkSqlParser.SKEWED, 0); }
	public BY(): TerminalNode { return this.getToken(SparkSqlParser.BY, 0); }
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public ON(): TerminalNode { return this.getToken(SparkSqlParser.ON, 0); }
	public constantList(): ConstantListContext | undefined {
		return this.tryGetRuleContext(0, ConstantListContext);
	}
	public nestedConstantList(): NestedConstantListContext | undefined {
		return this.tryGetRuleContext(0, NestedConstantListContext);
	}
	public STORED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STORED, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AS, 0); }
	public DIRECTORIES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DIRECTORIES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_skewSpec; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSkewSpec) {
			listener.enterSkewSpec(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSkewSpec) {
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
	public LOCATION(): TerminalNode { return this.getToken(SparkSqlParser.LOCATION, 0); }
	public STRING(): TerminalNode { return this.getToken(SparkSqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_locationSpec; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterLocationSpec) {
			listener.enterLocationSpec(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitLocationSpec) {
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
	public COMMENT(): TerminalNode { return this.getToken(SparkSqlParser.COMMENT, 0); }
	public STRING(): TerminalNode { return this.getToken(SparkSqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_commentSpec; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterCommentSpec) {
			listener.enterCommentSpec(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitCommentSpec) {
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
	public queryTerm(): QueryTermContext {
		return this.getRuleContext(0, QueryTermContext);
	}
	public queryOrganization(): QueryOrganizationContext {
		return this.getRuleContext(0, QueryOrganizationContext);
	}
	public ctes(): CtesContext | undefined {
		return this.tryGetRuleContext(0, CtesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_query; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitQuery) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_insertInto; }
	public copyFrom(ctx: InsertIntoContext): void {
		super.copyFrom(ctx);
	}
}
export class InsertOverwriteTableContext extends InsertIntoContext {
	public INSERT(): TerminalNode { return this.getToken(SparkSqlParser.INSERT, 0); }
	public OVERWRITE(): TerminalNode { return this.getToken(SparkSqlParser.OVERWRITE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TABLE, 0); }
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXISTS, 0); }
	constructor(ctx: InsertIntoContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterInsertOverwriteTable) {
			listener.enterInsertOverwriteTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitInsertOverwriteTable) {
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
	public INSERT(): TerminalNode { return this.getToken(SparkSqlParser.INSERT, 0); }
	public INTO(): TerminalNode { return this.getToken(SparkSqlParser.INTO, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TABLE, 0); }
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXISTS, 0); }
	constructor(ctx: InsertIntoContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterInsertIntoTable) {
			listener.enterInsertIntoTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitInsertIntoTable) {
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
export class InsertOverwriteHiveDirContext extends InsertIntoContext {
	public _path!: Token;
	public INSERT(): TerminalNode { return this.getToken(SparkSqlParser.INSERT, 0); }
	public OVERWRITE(): TerminalNode { return this.getToken(SparkSqlParser.OVERWRITE, 0); }
	public DIRECTORY(): TerminalNode { return this.getToken(SparkSqlParser.DIRECTORY, 0); }
	public STRING(): TerminalNode { return this.getToken(SparkSqlParser.STRING, 0); }
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOCAL, 0); }
	public rowFormat(): RowFormatContext | undefined {
		return this.tryGetRuleContext(0, RowFormatContext);
	}
	public createFileFormat(): CreateFileFormatContext | undefined {
		return this.tryGetRuleContext(0, CreateFileFormatContext);
	}
	constructor(ctx: InsertIntoContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterInsertOverwriteHiveDir) {
			listener.enterInsertOverwriteHiveDir(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitInsertOverwriteHiveDir) {
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
	public INSERT(): TerminalNode { return this.getToken(SparkSqlParser.INSERT, 0); }
	public OVERWRITE(): TerminalNode { return this.getToken(SparkSqlParser.OVERWRITE, 0); }
	public DIRECTORY(): TerminalNode { return this.getToken(SparkSqlParser.DIRECTORY, 0); }
	public tableProvider(): TableProviderContext {
		return this.getRuleContext(0, TableProviderContext);
	}
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOCAL, 0); }
	public OPTIONS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OPTIONS, 0); }
	public tablePropertyList(): TablePropertyListContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyListContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRING, 0); }
	constructor(ctx: InsertIntoContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterInsertOverwriteDir) {
			listener.enterInsertOverwriteDir(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitInsertOverwriteDir) {
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


export class PartitionSpecLocationContext extends ParserRuleContext {
	public partitionSpec(): PartitionSpecContext {
		return this.getRuleContext(0, PartitionSpecContext);
	}
	public locationSpec(): LocationSpecContext | undefined {
		return this.tryGetRuleContext(0, LocationSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_partitionSpecLocation; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterPartitionSpecLocation) {
			listener.enterPartitionSpecLocation(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitPartitionSpecLocation) {
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
	public PARTITION(): TerminalNode { return this.getToken(SparkSqlParser.PARTITION, 0); }
	public partitionVal(): PartitionValContext[];
	public partitionVal(i: number): PartitionValContext;
	public partitionVal(i?: number): PartitionValContext | PartitionValContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartitionValContext);
		} else {
			return this.getRuleContext(i, PartitionValContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_partitionSpec; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterPartitionSpec) {
			listener.enterPartitionSpec(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitPartitionSpec) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EQ, 0); }
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_partitionVal; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterPartitionVal) {
			listener.enterPartitionVal(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitPartitionVal) {
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
	public NAMESPACE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NAMESPACE, 0); }
	public DATABASE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DATABASE, 0); }
	public SCHEMA(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SCHEMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_namespace; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterNamespace) {
			listener.enterNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitNamespace) {
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
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRING, 0); }
	public comparisonOperator(): ComparisonOperatorContext | undefined {
		return this.tryGetRuleContext(0, ComparisonOperatorContext);
	}
	public arithmeticOperator(): ArithmeticOperatorContext | undefined {
		return this.tryGetRuleContext(0, ArithmeticOperatorContext);
	}
	public predicateOperator(): PredicateOperatorContext | undefined {
		return this.tryGetRuleContext(0, PredicateOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_describeFuncName; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterDescribeFuncName) {
			listener.enterDescribeFuncName(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitDescribeFuncName) {
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
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_describeColName; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterDescribeColName) {
			listener.enterDescribeColName(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitDescribeColName) {
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
	public WITH(): TerminalNode { return this.getToken(SparkSqlParser.WITH, 0); }
	public namedQuery(): NamedQueryContext[];
	public namedQuery(i: number): NamedQueryContext;
	public namedQuery(i?: number): NamedQueryContext | NamedQueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedQueryContext);
		} else {
			return this.getRuleContext(i, NamedQueryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_ctes; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterCtes) {
			listener.enterCtes(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitCtes) {
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
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getRuleContext(0, ErrorCapturingIdentifierContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AS, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_namedQuery; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterNamedQuery) {
			listener.enterNamedQuery(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitNamedQuery) {
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
	public USING(): TerminalNode { return this.getToken(SparkSqlParser.USING, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_tableProvider; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTableProvider) {
			listener.enterTableProvider(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTableProvider) {
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
	public bucketSpec(): BucketSpecContext[];
	public bucketSpec(i: number): BucketSpecContext;
	public bucketSpec(i?: number): BucketSpecContext | BucketSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BucketSpecContext);
		} else {
			return this.getRuleContext(i, BucketSpecContext);
		}
	}
	public locationSpec(): LocationSpecContext[];
	public locationSpec(i: number): LocationSpecContext;
	public locationSpec(i?: number): LocationSpecContext | LocationSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LocationSpecContext);
		} else {
			return this.getRuleContext(i, LocationSpecContext);
		}
	}
	public commentSpec(): CommentSpecContext[];
	public commentSpec(i: number): CommentSpecContext;
	public commentSpec(i?: number): CommentSpecContext | CommentSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentSpecContext);
		} else {
			return this.getRuleContext(i, CommentSpecContext);
		}
	}
	public OPTIONS(): TerminalNode[];
	public OPTIONS(i: number): TerminalNode;
	public OPTIONS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.OPTIONS);
		} else {
			return this.getToken(SparkSqlParser.OPTIONS, i);
		}
	}
	public tablePropertyList(): TablePropertyListContext[];
	public tablePropertyList(i: number): TablePropertyListContext;
	public tablePropertyList(i?: number): TablePropertyListContext | TablePropertyListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyListContext);
		} else {
			return this.getRuleContext(i, TablePropertyListContext);
		}
	}
	public PARTITIONED(): TerminalNode[];
	public PARTITIONED(i: number): TerminalNode;
	public PARTITIONED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.PARTITIONED);
		} else {
			return this.getToken(SparkSqlParser.PARTITIONED, i);
		}
	}
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.BY);
		} else {
			return this.getToken(SparkSqlParser.BY, i);
		}
	}
	public TBLPROPERTIES(): TerminalNode[];
	public TBLPROPERTIES(i: number): TerminalNode;
	public TBLPROPERTIES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.TBLPROPERTIES);
		} else {
			return this.getToken(SparkSqlParser.TBLPROPERTIES, i);
		}
	}
	public transformList(): TransformListContext[];
	public transformList(i: number): TransformListContext;
	public transformList(i?: number): TransformListContext | TransformListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransformListContext);
		} else {
			return this.getRuleContext(i, TransformListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_createTableClauses; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterCreateTableClauses) {
			listener.enterCreateTableClauses(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitCreateTableClauses) {
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
	public tableProperty(): TablePropertyContext[];
	public tableProperty(i: number): TablePropertyContext;
	public tableProperty(i?: number): TablePropertyContext | TablePropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyContext);
		} else {
			return this.getRuleContext(i, TablePropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_tablePropertyList; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTablePropertyList) {
			listener.enterTablePropertyList(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTablePropertyList) {
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
	public tablePropertyKey(): TablePropertyKeyContext {
		return this.getRuleContext(0, TablePropertyKeyContext);
	}
	public tablePropertyValue(): TablePropertyValueContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyValueContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_tableProperty; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTableProperty) {
			listener.enterTableProperty(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTableProperty) {
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
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_tablePropertyKey; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTablePropertyKey) {
			listener.enterTablePropertyKey(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTablePropertyKey) {
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
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INTEGER_VALUE, 0); }
	public DECIMAL_VALUE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DECIMAL_VALUE, 0); }
	public booleanValue(): BooleanValueContext | undefined {
		return this.tryGetRuleContext(0, BooleanValueContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_tablePropertyValue; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTablePropertyValue) {
			listener.enterTablePropertyValue(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTablePropertyValue) {
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
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_constantList; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterConstantList) {
			listener.enterConstantList(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitConstantList) {
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
	public constantList(): ConstantListContext[];
	public constantList(i: number): ConstantListContext;
	public constantList(i?: number): ConstantListContext | ConstantListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantListContext);
		} else {
			return this.getRuleContext(i, ConstantListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_nestedConstantList; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterNestedConstantList) {
			listener.enterNestedConstantList(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitNestedConstantList) {
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
	public STORED(): TerminalNode { return this.getToken(SparkSqlParser.STORED, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AS, 0); }
	public fileFormat(): FileFormatContext | undefined {
		return this.tryGetRuleContext(0, FileFormatContext);
	}
	public BY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.BY, 0); }
	public storageHandler(): StorageHandlerContext | undefined {
		return this.tryGetRuleContext(0, StorageHandlerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_createFileFormat; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterCreateFileFormat) {
			listener.enterCreateFileFormat(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitCreateFileFormat) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_fileFormat; }
	public copyFrom(ctx: FileFormatContext): void {
		super.copyFrom(ctx);
	}
}
export class TableFileFormatContext extends FileFormatContext {
	public _inFmt!: Token;
	public _outFmt!: Token;
	public INPUTFORMAT(): TerminalNode { return this.getToken(SparkSqlParser.INPUTFORMAT, 0); }
	public OUTPUTFORMAT(): TerminalNode { return this.getToken(SparkSqlParser.OUTPUTFORMAT, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.STRING);
		} else {
			return this.getToken(SparkSqlParser.STRING, i);
		}
	}
	constructor(ctx: FileFormatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTableFileFormat) {
			listener.enterTableFileFormat(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTableFileFormat) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: FileFormatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterGenericFileFormat) {
			listener.enterGenericFileFormat(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitGenericFileFormat) {
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
	public STRING(): TerminalNode { return this.getToken(SparkSqlParser.STRING, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.WITH, 0); }
	public SERDEPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SERDEPROPERTIES, 0); }
	public tablePropertyList(): TablePropertyListContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_storageHandler; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterStorageHandler) {
			listener.enterStorageHandler(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitStorageHandler) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public STRING(): TerminalNode { return this.getToken(SparkSqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_resource; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitResource) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_dmlStatementNoWith; }
	public copyFrom(ctx: DmlStatementNoWithContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleInsertQueryContext extends DmlStatementNoWithContext {
	public insertInto(): InsertIntoContext {
		return this.getRuleContext(0, InsertIntoContext);
	}
	public queryTerm(): QueryTermContext {
		return this.getRuleContext(0, QueryTermContext);
	}
	public queryOrganization(): QueryOrganizationContext {
		return this.getRuleContext(0, QueryOrganizationContext);
	}
	constructor(ctx: DmlStatementNoWithContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSingleInsertQuery) {
			listener.enterSingleInsertQuery(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSingleInsertQuery) {
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
	public fromClause(): FromClauseContext {
		return this.getRuleContext(0, FromClauseContext);
	}
	public multiInsertQueryBody(): MultiInsertQueryBodyContext[];
	public multiInsertQueryBody(i: number): MultiInsertQueryBodyContext;
	public multiInsertQueryBody(i?: number): MultiInsertQueryBodyContext | MultiInsertQueryBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiInsertQueryBodyContext);
		} else {
			return this.getRuleContext(i, MultiInsertQueryBodyContext);
		}
	}
	constructor(ctx: DmlStatementNoWithContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterMultiInsertQuery) {
			listener.enterMultiInsertQuery(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitMultiInsertQuery) {
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
export class DeleteFromTableContext extends DmlStatementNoWithContext {
	public DELETE(): TerminalNode { return this.getToken(SparkSqlParser.DELETE, 0); }
	public FROM(): TerminalNode { return this.getToken(SparkSqlParser.FROM, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public tableAlias(): TableAliasContext {
		return this.getRuleContext(0, TableAliasContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	constructor(ctx: DmlStatementNoWithContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterDeleteFromTable) {
			listener.enterDeleteFromTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitDeleteFromTable) {
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
export class UpdateTableContext extends DmlStatementNoWithContext {
	public UPDATE(): TerminalNode { return this.getToken(SparkSqlParser.UPDATE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public tableAlias(): TableAliasContext {
		return this.getRuleContext(0, TableAliasContext);
	}
	public setClause(): SetClauseContext {
		return this.getRuleContext(0, SetClauseContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	constructor(ctx: DmlStatementNoWithContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterUpdateTable) {
			listener.enterUpdateTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitUpdateTable) {
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
	public MERGE(): TerminalNode { return this.getToken(SparkSqlParser.MERGE, 0); }
	public INTO(): TerminalNode { return this.getToken(SparkSqlParser.INTO, 0); }
	public USING(): TerminalNode { return this.getToken(SparkSqlParser.USING, 0); }
	public ON(): TerminalNode { return this.getToken(SparkSqlParser.ON, 0); }
	public multipartIdentifier(): MultipartIdentifierContext[];
	public multipartIdentifier(i: number): MultipartIdentifierContext;
	public multipartIdentifier(i?: number): MultipartIdentifierContext | MultipartIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultipartIdentifierContext);
		} else {
			return this.getRuleContext(i, MultipartIdentifierContext);
		}
	}
	public tableAlias(): TableAliasContext[];
	public tableAlias(i: number): TableAliasContext;
	public tableAlias(i?: number): TableAliasContext | TableAliasContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableAliasContext);
		} else {
			return this.getRuleContext(i, TableAliasContext);
		}
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public matchedClause(): MatchedClauseContext[];
	public matchedClause(i: number): MatchedClauseContext;
	public matchedClause(i?: number): MatchedClauseContext | MatchedClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MatchedClauseContext);
		} else {
			return this.getRuleContext(i, MatchedClauseContext);
		}
	}
	public notMatchedClause(): NotMatchedClauseContext[];
	public notMatchedClause(i: number): NotMatchedClauseContext;
	public notMatchedClause(i?: number): NotMatchedClauseContext | NotMatchedClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NotMatchedClauseContext);
		} else {
			return this.getRuleContext(i, NotMatchedClauseContext);
		}
	}
	constructor(ctx: DmlStatementNoWithContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterMergeIntoTable) {
			listener.enterMergeIntoTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitMergeIntoTable) {
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
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ORDER, 0); }
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.BY);
		} else {
			return this.getToken(SparkSqlParser.BY, i);
		}
	}
	public CLUSTER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CLUSTER, 0); }
	public DISTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DISTRIBUTE, 0); }
	public SORT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SORT, 0); }
	public windowClause(): WindowClauseContext | undefined {
		return this.tryGetRuleContext(0, WindowClauseContext);
	}
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LIMIT, 0); }
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
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
	public ALL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_queryOrganization; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterQueryOrganization) {
			listener.enterQueryOrganization(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitQueryOrganization) {
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
	public insertInto(): InsertIntoContext {
		return this.getRuleContext(0, InsertIntoContext);
	}
	public fromStatementBody(): FromStatementBodyContext {
		return this.getRuleContext(0, FromStatementBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_multiInsertQueryBody; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterMultiInsertQueryBody) {
			listener.enterMultiInsertQueryBody(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitMultiInsertQueryBody) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_queryTerm; }
	public copyFrom(ctx: QueryTermContext): void {
		super.copyFrom(ctx);
	}
}
export class QueryTermDefaultContext extends QueryTermContext {
	public queryPrimary(): QueryPrimaryContext {
		return this.getRuleContext(0, QueryPrimaryContext);
	}
	constructor(ctx: QueryTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterQueryTermDefault) {
			listener.enterQueryTermDefault(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitQueryTermDefault) {
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
	public queryTerm(): QueryTermContext[];
	public queryTerm(i: number): QueryTermContext;
	public queryTerm(i?: number): QueryTermContext | QueryTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryTermContext);
		} else {
			return this.getRuleContext(i, QueryTermContext);
		}
	}
	public INTERSECT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INTERSECT, 0); }
	public UNION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNION, 0); }
	public EXCEPT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXCEPT, 0); }
	public SETMINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SETMINUS, 0); }
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	constructor(ctx: QueryTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSetOperation) {
			listener.enterSetOperation(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSetOperation) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_queryPrimary; }
	public copyFrom(ctx: QueryPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class QueryPrimaryDefaultContext extends QueryPrimaryContext {
	public querySpecification(): QuerySpecificationContext {
		return this.getRuleContext(0, QuerySpecificationContext);
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterQueryPrimaryDefault) {
			listener.enterQueryPrimaryDefault(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitQueryPrimaryDefault) {
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
export class FromStmtContext extends QueryPrimaryContext {
	public fromStatement(): FromStatementContext {
		return this.getRuleContext(0, FromStatementContext);
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterFromStmt) {
			listener.enterFromStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitFromStmt) {
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
	public TABLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLE, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTable) {
			listener.enterTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTable) {
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
export class InlineTableDefault1Context extends QueryPrimaryContext {
	public inlineTable(): InlineTableContext {
		return this.getRuleContext(0, InlineTableContext);
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterInlineTableDefault1) {
			listener.enterInlineTableDefault1(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitInlineTableDefault1) {
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
export class SubqueryContext extends QueryPrimaryContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSubquery) {
			listener.enterSubquery(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSubquery) {
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


export class SortItemContext extends ParserRuleContext {
	public _ordering!: Token;
	public _nullOrder!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NULLS, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DESC, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LAST, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FIRST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_sortItem; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSortItem) {
			listener.enterSortItem(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSortItem) {
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
	public fromClause(): FromClauseContext {
		return this.getRuleContext(0, FromClauseContext);
	}
	public fromStatementBody(): FromStatementBodyContext[];
	public fromStatementBody(i: number): FromStatementBodyContext;
	public fromStatementBody(i?: number): FromStatementBodyContext | FromStatementBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FromStatementBodyContext);
		} else {
			return this.getRuleContext(i, FromStatementBodyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_fromStatement; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterFromStatement) {
			listener.enterFromStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitFromStatement) {
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
	public transformClause(): TransformClauseContext | undefined {
		return this.tryGetRuleContext(0, TransformClauseContext);
	}
	public queryOrganization(): QueryOrganizationContext {
		return this.getRuleContext(0, QueryOrganizationContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public selectClause(): SelectClauseContext | undefined {
		return this.tryGetRuleContext(0, SelectClauseContext);
	}
	public lateralView(): LateralViewContext[];
	public lateralView(i: number): LateralViewContext;
	public lateralView(i?: number): LateralViewContext | LateralViewContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LateralViewContext);
		} else {
			return this.getRuleContext(i, LateralViewContext);
		}
	}
	public aggregationClause(): AggregationClauseContext | undefined {
		return this.tryGetRuleContext(0, AggregationClauseContext);
	}
	public havingClause(): HavingClauseContext | undefined {
		return this.tryGetRuleContext(0, HavingClauseContext);
	}
	public windowClause(): WindowClauseContext | undefined {
		return this.tryGetRuleContext(0, WindowClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_fromStatementBody; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterFromStatementBody) {
			listener.enterFromStatementBody(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitFromStatementBody) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_querySpecification; }
	public copyFrom(ctx: QuerySpecificationContext): void {
		super.copyFrom(ctx);
	}
}
export class TransformQuerySpecificationContext extends QuerySpecificationContext {
	public transformClause(): TransformClauseContext {
		return this.getRuleContext(0, TransformClauseContext);
	}
	public fromClause(): FromClauseContext | undefined {
		return this.tryGetRuleContext(0, FromClauseContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	constructor(ctx: QuerySpecificationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTransformQuerySpecification) {
			listener.enterTransformQuerySpecification(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTransformQuerySpecification) {
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
export class RegularQuerySpecificationContext extends QuerySpecificationContext {
	public selectClause(): SelectClauseContext {
		return this.getRuleContext(0, SelectClauseContext);
	}
	public fromClause(): FromClauseContext | undefined {
		return this.tryGetRuleContext(0, FromClauseContext);
	}
	public lateralView(): LateralViewContext[];
	public lateralView(i: number): LateralViewContext;
	public lateralView(i?: number): LateralViewContext | LateralViewContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LateralViewContext);
		} else {
			return this.getRuleContext(i, LateralViewContext);
		}
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public aggregationClause(): AggregationClauseContext | undefined {
		return this.tryGetRuleContext(0, AggregationClauseContext);
	}
	public havingClause(): HavingClauseContext | undefined {
		return this.tryGetRuleContext(0, HavingClauseContext);
	}
	public windowClause(): WindowClauseContext | undefined {
		return this.tryGetRuleContext(0, WindowClauseContext);
	}
	constructor(ctx: QuerySpecificationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterRegularQuerySpecification) {
			listener.enterRegularQuerySpecification(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitRegularQuerySpecification) {
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


export class TransformClauseContext extends ParserRuleContext {
	public _kind!: Token;
	public _inRowFormat!: RowFormatContext;
	public _recordWriter!: Token;
	public _script!: Token;
	public _outRowFormat!: RowFormatContext;
	public _recordReader!: Token;
	public USING(): TerminalNode { return this.getToken(SparkSqlParser.USING, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.STRING);
		} else {
			return this.getToken(SparkSqlParser.STRING, i);
		}
	}
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SELECT, 0); }
	public namedExpressionSeq(): NamedExpressionSeqContext | undefined {
		return this.tryGetRuleContext(0, NamedExpressionSeqContext);
	}
	public TRANSFORM(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRANSFORM, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MAP, 0); }
	public REDUCE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.REDUCE, 0); }
	public RECORDWRITER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RECORDWRITER, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AS, 0); }
	public RECORDREADER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RECORDREADER, 0); }
	public rowFormat(): RowFormatContext[];
	public rowFormat(i: number): RowFormatContext;
	public rowFormat(i?: number): RowFormatContext | RowFormatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowFormatContext);
		} else {
			return this.getRuleContext(i, RowFormatContext);
		}
	}
	public identifierSeq(): IdentifierSeqContext | undefined {
		return this.tryGetRuleContext(0, IdentifierSeqContext);
	}
	public colTypeList(): ColTypeListContext | undefined {
		return this.tryGetRuleContext(0, ColTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_transformClause; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTransformClause) {
			listener.enterTransformClause(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTransformClause) {
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
	public SELECT(): TerminalNode { return this.getToken(SparkSqlParser.SELECT, 0); }
	public namedExpressionSeq(): NamedExpressionSeqContext {
		return this.getRuleContext(0, NamedExpressionSeqContext);
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public hint(): HintContext[];
	public hint(i: number): HintContext;
	public hint(i?: number): HintContext | HintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HintContext);
		} else {
			return this.getRuleContext(i, HintContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_selectClause; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSelectClause) {
			listener.enterSelectClause(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSelectClause) {
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
	public SET(): TerminalNode { return this.getToken(SparkSqlParser.SET, 0); }
	public assignmentList(): AssignmentListContext {
		return this.getRuleContext(0, AssignmentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_setClause; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSetClause) {
			listener.enterSetClause(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSetClause) {
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
	public WHEN(): TerminalNode { return this.getToken(SparkSqlParser.WHEN, 0); }
	public MATCHED(): TerminalNode { return this.getToken(SparkSqlParser.MATCHED, 0); }
	public THEN(): TerminalNode { return this.getToken(SparkSqlParser.THEN, 0); }
	public matchedAction(): MatchedActionContext {
		return this.getRuleContext(0, MatchedActionContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AND, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_matchedClause; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterMatchedClause) {
			listener.enterMatchedClause(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitMatchedClause) {
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
	public WHEN(): TerminalNode { return this.getToken(SparkSqlParser.WHEN, 0); }
	public NOT(): TerminalNode { return this.getToken(SparkSqlParser.NOT, 0); }
	public MATCHED(): TerminalNode { return this.getToken(SparkSqlParser.MATCHED, 0); }
	public THEN(): TerminalNode { return this.getToken(SparkSqlParser.THEN, 0); }
	public notMatchedAction(): NotMatchedActionContext {
		return this.getRuleContext(0, NotMatchedActionContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AND, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_notMatchedClause; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterNotMatchedClause) {
			listener.enterNotMatchedClause(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitNotMatchedClause) {
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
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DELETE, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UPDATE, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SET, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ASTERISK, 0); }
	public assignmentList(): AssignmentListContext | undefined {
		return this.tryGetRuleContext(0, AssignmentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_matchedAction; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterMatchedAction) {
			listener.enterMatchedAction(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitMatchedAction) {
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
	public INSERT(): TerminalNode { return this.getToken(SparkSqlParser.INSERT, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ASTERISK, 0); }
	public VALUES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.VALUES, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public multipartIdentifierList(): MultipartIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, MultipartIdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_notMatchedAction; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterNotMatchedAction) {
			listener.enterNotMatchedAction(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitNotMatchedAction) {
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
	public assignment(): AssignmentContext[];
	public assignment(i: number): AssignmentContext;
	public assignment(i?: number): AssignmentContext | AssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentContext);
		} else {
			return this.getRuleContext(i, AssignmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_assignmentList; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterAssignmentList) {
			listener.enterAssignmentList(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitAssignmentList) {
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
	public EQ(): TerminalNode { return this.getToken(SparkSqlParser.EQ, 0); }
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_assignment; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitAssignment) {
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
	public WHERE(): TerminalNode { return this.getToken(SparkSqlParser.WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_whereClause; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterWhereClause) {
			listener.enterWhereClause(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitWhereClause) {
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
	public HAVING(): TerminalNode { return this.getToken(SparkSqlParser.HAVING, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_havingClause; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterHavingClause) {
			listener.enterHavingClause(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitHavingClause) {
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
	public hintStatement(): HintStatementContext[];
	public hintStatement(i: number): HintStatementContext;
	public hintStatement(i?: number): HintStatementContext | HintStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HintStatementContext);
		} else {
			return this.getRuleContext(i, HintStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_hint; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterHint) {
			listener.enterHint(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitHint) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public primaryExpression(): PrimaryExpressionContext[];
	public primaryExpression(i: number): PrimaryExpressionContext;
	public primaryExpression(i?: number): PrimaryExpressionContext | PrimaryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryExpressionContext);
		} else {
			return this.getRuleContext(i, PrimaryExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_hintStatement; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterHintStatement) {
			listener.enterHintStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitHintStatement) {
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
	public FROM(): TerminalNode { return this.getToken(SparkSqlParser.FROM, 0); }
	public relation(): RelationContext[];
	public relation(i: number): RelationContext;
	public relation(i?: number): RelationContext | RelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationContext);
		} else {
			return this.getRuleContext(i, RelationContext);
		}
	}
	public lateralView(): LateralViewContext[];
	public lateralView(i: number): LateralViewContext;
	public lateralView(i?: number): LateralViewContext | LateralViewContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LateralViewContext);
		} else {
			return this.getRuleContext(i, LateralViewContext);
		}
	}
	public pivotClause(): PivotClauseContext | undefined {
		return this.tryGetRuleContext(0, PivotClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_fromClause; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterFromClause) {
			listener.enterFromClause(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitFromClause) {
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
	public GROUP(): TerminalNode { return this.getToken(SparkSqlParser.GROUP, 0); }
	public BY(): TerminalNode { return this.getToken(SparkSqlParser.BY, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.WITH, 0); }
	public SETS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SETS, 0); }
	public groupingSet(): GroupingSetContext[];
	public groupingSet(i: number): GroupingSetContext;
	public groupingSet(i?: number): GroupingSetContext | GroupingSetContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupingSetContext);
		} else {
			return this.getRuleContext(i, GroupingSetContext);
		}
	}
	public ROLLUP(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROLLUP, 0); }
	public CUBE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CUBE, 0); }
	public GROUPING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.GROUPING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_aggregationClause; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterAggregationClause) {
			listener.enterAggregationClause(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitAggregationClause) {
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
	public get ruleIndex(): number { return SparkSqlParser.RULE_groupingSet; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterGroupingSet) {
			listener.enterGroupingSet(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitGroupingSet) {
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
	public PIVOT(): TerminalNode { return this.getToken(SparkSqlParser.PIVOT, 0); }
	public FOR(): TerminalNode { return this.getToken(SparkSqlParser.FOR, 0); }
	public pivotColumn(): PivotColumnContext {
		return this.getRuleContext(0, PivotColumnContext);
	}
	public IN(): TerminalNode { return this.getToken(SparkSqlParser.IN, 0); }
	public namedExpressionSeq(): NamedExpressionSeqContext {
		return this.getRuleContext(0, NamedExpressionSeqContext);
	}
	public pivotValue(): PivotValueContext[];
	public pivotValue(i: number): PivotValueContext;
	public pivotValue(i?: number): PivotValueContext | PivotValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PivotValueContext);
		} else {
			return this.getRuleContext(i, PivotValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_pivotClause; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterPivotClause) {
			listener.enterPivotClause(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitPivotClause) {
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
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_pivotColumn; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterPivotColumn) {
			listener.enterPivotColumn(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitPivotColumn) {
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_pivotValue; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterPivotValue) {
			listener.enterPivotValue(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitPivotValue) {
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
	public LATERAL(): TerminalNode { return this.getToken(SparkSqlParser.LATERAL, 0); }
	public VIEW(): TerminalNode { return this.getToken(SparkSqlParser.VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OUTER, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_lateralView; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterLateralView) {
			listener.enterLateralView(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitLateralView) {
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
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DISTINCT, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_setQuantifier; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSetQuantifier) {
			listener.enterSetQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSetQuantifier) {
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
	public relationPrimary(): RelationPrimaryContext {
		return this.getRuleContext(0, RelationPrimaryContext);
	}
	public joinRelation(): JoinRelationContext[];
	public joinRelation(i: number): JoinRelationContext;
	public joinRelation(i?: number): JoinRelationContext | JoinRelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JoinRelationContext);
		} else {
			return this.getRuleContext(i, JoinRelationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_relation; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterRelation) {
			listener.enterRelation(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitRelation) {
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
	public JOIN(): TerminalNode { return this.getToken(SparkSqlParser.JOIN, 0); }
	public relationPrimary(): RelationPrimaryContext {
		return this.getRuleContext(0, RelationPrimaryContext);
	}
	public joinType(): JoinTypeContext | undefined {
		return this.tryGetRuleContext(0, JoinTypeContext);
	}
	public joinCriteria(): JoinCriteriaContext | undefined {
		return this.tryGetRuleContext(0, JoinCriteriaContext);
	}
	public NATURAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NATURAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_joinRelation; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterJoinRelation) {
			listener.enterJoinRelation(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitJoinRelation) {
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
	public INNER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INNER, 0); }
	public CROSS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CROSS, 0); }
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LEFT, 0); }
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OUTER, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SEMI, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RIGHT, 0); }
	public FULL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FULL, 0); }
	public ANTI(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ANTI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_joinType; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterJoinType) {
			listener.enterJoinType(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitJoinType) {
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
	public ON(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ON, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public USING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.USING, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_joinCriteria; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterJoinCriteria) {
			listener.enterJoinCriteria(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitJoinCriteria) {
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
	public TABLESAMPLE(): TerminalNode { return this.getToken(SparkSqlParser.TABLESAMPLE, 0); }
	public sampleMethod(): SampleMethodContext | undefined {
		return this.tryGetRuleContext(0, SampleMethodContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_sample; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSample) {
			listener.enterSample(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSample) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_sampleMethod; }
	public copyFrom(ctx: SampleMethodContext): void {
		super.copyFrom(ctx);
	}
}
export class SampleByPercentileContext extends SampleMethodContext {
	public _negativeSign!: Token;
	public _percentage!: Token;
	public PERCENTLIT(): TerminalNode { return this.getToken(SparkSqlParser.PERCENTLIT, 0); }
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INTEGER_VALUE, 0); }
	public DECIMAL_VALUE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DECIMAL_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MINUS, 0); }
	constructor(ctx: SampleMethodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSampleByPercentile) {
			listener.enterSampleByPercentile(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSampleByPercentile) {
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
export class SampleByRowsContext extends SampleMethodContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ROWS(): TerminalNode { return this.getToken(SparkSqlParser.ROWS, 0); }
	constructor(ctx: SampleMethodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSampleByRows) {
			listener.enterSampleByRows(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSampleByRows) {
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
export class SampleByBucketContext extends SampleMethodContext {
	public _sampleType!: Token;
	public _numerator!: Token;
	public _denominator!: Token;
	public OUT(): TerminalNode { return this.getToken(SparkSqlParser.OUT, 0); }
	public OF(): TerminalNode { return this.getToken(SparkSqlParser.OF, 0); }
	public BUCKET(): TerminalNode { return this.getToken(SparkSqlParser.BUCKET, 0); }
	public INTEGER_VALUE(): TerminalNode[];
	public INTEGER_VALUE(i: number): TerminalNode;
	public INTEGER_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.INTEGER_VALUE);
		} else {
			return this.getToken(SparkSqlParser.INTEGER_VALUE, i);
		}
	}
	public ON(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ON, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: SampleMethodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSampleByBucket) {
			listener.enterSampleByBucket(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSampleByBucket) {
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: SampleMethodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSampleByBytes) {
			listener.enterSampleByBytes(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSampleByBytes) {
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
	public identifierSeq(): IdentifierSeqContext {
		return this.getRuleContext(0, IdentifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitIdentifierList) {
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
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext[];
	public errorCapturingIdentifier(i: number): ErrorCapturingIdentifierContext;
	public errorCapturingIdentifier(i?: number): ErrorCapturingIdentifierContext | ErrorCapturingIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ErrorCapturingIdentifierContext);
		} else {
			return this.getRuleContext(i, ErrorCapturingIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_identifierSeq; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterIdentifierSeq) {
			listener.enterIdentifierSeq(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitIdentifierSeq) {
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
	public orderedIdentifier(): OrderedIdentifierContext[];
	public orderedIdentifier(i: number): OrderedIdentifierContext;
	public orderedIdentifier(i?: number): OrderedIdentifierContext | OrderedIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OrderedIdentifierContext);
		} else {
			return this.getRuleContext(i, OrderedIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_orderedIdentifierList; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterOrderedIdentifierList) {
			listener.enterOrderedIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitOrderedIdentifierList) {
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
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getRuleContext(0, ErrorCapturingIdentifierContext);
	}
	public ASC(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DESC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_orderedIdentifier; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterOrderedIdentifier) {
			listener.enterOrderedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitOrderedIdentifier) {
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
	public identifierComment(): IdentifierCommentContext[];
	public identifierComment(i: number): IdentifierCommentContext;
	public identifierComment(i?: number): IdentifierCommentContext | IdentifierCommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierCommentContext);
		} else {
			return this.getRuleContext(i, IdentifierCommentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_identifierCommentList; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterIdentifierCommentList) {
			listener.enterIdentifierCommentList(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitIdentifierCommentList) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_identifierComment; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterIdentifierComment) {
			listener.enterIdentifierComment(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitIdentifierComment) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_relationPrimary; }
	public copyFrom(ctx: RelationPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class TableNameContext extends RelationPrimaryContext {
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public tableAlias(): TableAliasContext {
		return this.getRuleContext(0, TableAliasContext);
	}
	public sample(): SampleContext | undefined {
		return this.tryGetRuleContext(0, SampleContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTableName) {
			listener.enterTableName(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTableName) {
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
export class AliasedQueryContext extends RelationPrimaryContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public tableAlias(): TableAliasContext {
		return this.getRuleContext(0, TableAliasContext);
	}
	public sample(): SampleContext | undefined {
		return this.tryGetRuleContext(0, SampleContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterAliasedQuery) {
			listener.enterAliasedQuery(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitAliasedQuery) {
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
export class AliasedRelationContext extends RelationPrimaryContext {
	public relation(): RelationContext {
		return this.getRuleContext(0, RelationContext);
	}
	public tableAlias(): TableAliasContext {
		return this.getRuleContext(0, TableAliasContext);
	}
	public sample(): SampleContext | undefined {
		return this.tryGetRuleContext(0, SampleContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterAliasedRelation) {
			listener.enterAliasedRelation(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitAliasedRelation) {
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
export class InlineTableDefault2Context extends RelationPrimaryContext {
	public inlineTable(): InlineTableContext {
		return this.getRuleContext(0, InlineTableContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterInlineTableDefault2) {
			listener.enterInlineTableDefault2(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitInlineTableDefault2) {
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
export class TableValuedFunctionContext extends RelationPrimaryContext {
	public functionTable(): FunctionTableContext {
		return this.getRuleContext(0, FunctionTableContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTableValuedFunction) {
			listener.enterTableValuedFunction(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTableValuedFunction) {
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


export class InlineTableContext extends ParserRuleContext {
	public VALUES(): TerminalNode { return this.getToken(SparkSqlParser.VALUES, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public tableAlias(): TableAliasContext {
		return this.getRuleContext(0, TableAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_inlineTable; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterInlineTable) {
			listener.enterInlineTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitInlineTable) {
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
	public tableAlias(): TableAliasContext {
		return this.getRuleContext(0, TableAliasContext);
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getRuleContext(0, ErrorCapturingIdentifierContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_functionTable; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterFunctionTable) {
			listener.enterFunctionTable(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitFunctionTable) {
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
	public strictIdentifier(): StrictIdentifierContext | undefined {
		return this.tryGetRuleContext(0, StrictIdentifierContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AS, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_tableAlias; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTableAlias) {
			listener.enterTableAlias(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTableAlias) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_rowFormat; }
	public copyFrom(ctx: RowFormatContext): void {
		super.copyFrom(ctx);
	}
}
export class RowFormatSerdeContext extends RowFormatContext {
	public _name!: Token;
	public _props!: TablePropertyListContext;
	public ROW(): TerminalNode { return this.getToken(SparkSqlParser.ROW, 0); }
	public FORMAT(): TerminalNode { return this.getToken(SparkSqlParser.FORMAT, 0); }
	public SERDE(): TerminalNode { return this.getToken(SparkSqlParser.SERDE, 0); }
	public STRING(): TerminalNode { return this.getToken(SparkSqlParser.STRING, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.WITH, 0); }
	public SERDEPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SERDEPROPERTIES, 0); }
	public tablePropertyList(): TablePropertyListContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyListContext);
	}
	constructor(ctx: RowFormatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterRowFormatSerde) {
			listener.enterRowFormatSerde(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitRowFormatSerde) {
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
	public ROW(): TerminalNode { return this.getToken(SparkSqlParser.ROW, 0); }
	public FORMAT(): TerminalNode { return this.getToken(SparkSqlParser.FORMAT, 0); }
	public DELIMITED(): TerminalNode { return this.getToken(SparkSqlParser.DELIMITED, 0); }
	public FIELDS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FIELDS, 0); }
	public TERMINATED(): TerminalNode[];
	public TERMINATED(i: number): TerminalNode;
	public TERMINATED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.TERMINATED);
		} else {
			return this.getToken(SparkSqlParser.TERMINATED, i);
		}
	}
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.BY);
		} else {
			return this.getToken(SparkSqlParser.BY, i);
		}
	}
	public COLLECTION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COLLECTION, 0); }
	public ITEMS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ITEMS, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MAP, 0); }
	public KEYS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.KEYS, 0); }
	public LINES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LINES, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NULL, 0); }
	public DEFINED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DEFINED, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AS, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.STRING);
		} else {
			return this.getToken(SparkSqlParser.STRING, i);
		}
	}
	public ESCAPED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ESCAPED, 0); }
	constructor(ctx: RowFormatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterRowFormatDelimited) {
			listener.enterRowFormatDelimited(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitRowFormatDelimited) {
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
	public multipartIdentifier(): MultipartIdentifierContext[];
	public multipartIdentifier(i: number): MultipartIdentifierContext;
	public multipartIdentifier(i?: number): MultipartIdentifierContext | MultipartIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultipartIdentifierContext);
		} else {
			return this.getRuleContext(i, MultipartIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_multipartIdentifierList; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterMultipartIdentifierList) {
			listener.enterMultipartIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitMultipartIdentifierList) {
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
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext[];
	public errorCapturingIdentifier(i: number): ErrorCapturingIdentifierContext;
	public errorCapturingIdentifier(i?: number): ErrorCapturingIdentifierContext | ErrorCapturingIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ErrorCapturingIdentifierContext);
		} else {
			return this.getRuleContext(i, ErrorCapturingIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_multipartIdentifier; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterMultipartIdentifier) {
			listener.enterMultipartIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitMultipartIdentifier) {
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
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext[];
	public errorCapturingIdentifier(i: number): ErrorCapturingIdentifierContext;
	public errorCapturingIdentifier(i?: number): ErrorCapturingIdentifierContext | ErrorCapturingIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ErrorCapturingIdentifierContext);
		} else {
			return this.getRuleContext(i, ErrorCapturingIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_tableIdentifier; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTableIdentifier) {
			listener.enterTableIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTableIdentifier) {
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AS, 0); }
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ErrorCapturingIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_namedExpression; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterNamedExpression) {
			listener.enterNamedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitNamedExpression) {
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
	public namedExpression(): NamedExpressionContext[];
	public namedExpression(i: number): NamedExpressionContext;
	public namedExpression(i?: number): NamedExpressionContext | NamedExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedExpressionContext);
		} else {
			return this.getRuleContext(i, NamedExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_namedExpressionSeq; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterNamedExpressionSeq) {
			listener.enterNamedExpressionSeq(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitNamedExpressionSeq) {
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
	public transform(): TransformContext[];
	public transform(i: number): TransformContext;
	public transform(i?: number): TransformContext | TransformContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransformContext);
		} else {
			return this.getRuleContext(i, TransformContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_transformList; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTransformList) {
			listener.enterTransformList(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTransformList) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_transform; }
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
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterIdentityTransform) {
			listener.enterIdentityTransform(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitIdentityTransform) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public transformArgument(): TransformArgumentContext[];
	public transformArgument(i: number): TransformArgumentContext;
	public transformArgument(i?: number): TransformArgumentContext | TransformArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransformArgumentContext);
		} else {
			return this.getRuleContext(i, TransformArgumentContext);
		}
	}
	constructor(ctx: TransformContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterApplyTransform) {
			listener.enterApplyTransform(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitApplyTransform) {
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
	public get ruleIndex(): number { return SparkSqlParser.RULE_transformArgument; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTransformArgument) {
			listener.enterTransformArgument(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTransformArgument) {
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
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_expression; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitExpression) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_booleanExpression; }
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	public NOT(): TerminalNode { return this.getToken(SparkSqlParser.NOT, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterLogicalNot) {
			listener.enterLogicalNot(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitLogicalNot) {
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
export class ExistsContext extends BooleanExpressionContext {
	public EXISTS(): TerminalNode { return this.getToken(SparkSqlParser.EXISTS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterExists) {
			listener.enterExists(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitExists) {
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
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterPredicated) {
			listener.enterPredicated(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitPredicated) {
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
	public AND(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OR, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterLogicalBinary) {
			listener.enterLogicalBinary(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitLogicalBinary) {
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
	public AND(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AND, 0); }
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.BETWEEN, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NOT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IN, 0); }
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public RLIKE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RLIKE, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LIKE, 0); }
	public ANY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ANY, 0); }
	public SOME(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SOME, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ALL, 0); }
	public ESCAPE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ESCAPE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRING, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IS, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NULL, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FALSE, 0); }
	public UNKNOWN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNKNOWN, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FROM, 0); }
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DISTINCT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_predicate; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterPredicate) {
			listener.enterPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitPredicate) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_valueExpression; }
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
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterValueExpressionDefault) {
			listener.enterValueExpressionDefault(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitValueExpressionDefault) {
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
export class ArithmeticUnaryContext extends ValueExpressionContext {
	public _operator!: Token;
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PLUS, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TILDE, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterArithmeticUnary) {
			listener.enterArithmeticUnary(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitArithmeticUnary) {
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
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SLASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PERCENT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DIV, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MINUS, 0); }
	public CONCAT_PIPE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CONCAT_PIPE, 0); }
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AMPERSAND, 0); }
	public HAT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.HAT, 0); }
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PIPE, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterArithmeticBinary) {
			listener.enterArithmeticBinary(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitArithmeticBinary) {
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
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitComparison) {
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


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_primaryExpression; }
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CurrentDatetimeContext extends PrimaryExpressionContext {
	public _name!: Token;
	public CURRENT_DATE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CURRENT_DATE, 0); }
	public CURRENT_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CURRENT_TIMESTAMP, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterCurrentDatetime) {
			listener.enterCurrentDatetime(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitCurrentDatetime) {
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
export class SearchedCaseContext extends PrimaryExpressionContext {
	public _elseExpression!: ExpressionContext;
	public CASE(): TerminalNode { return this.getToken(SparkSqlParser.CASE, 0); }
	public END(): TerminalNode { return this.getToken(SparkSqlParser.END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ELSE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSearchedCase) {
			listener.enterSearchedCase(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSearchedCase) {
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
export class SimpleCaseContext extends PrimaryExpressionContext {
	public _value!: ExpressionContext;
	public _elseExpression!: ExpressionContext;
	public CASE(): TerminalNode { return this.getToken(SparkSqlParser.CASE, 0); }
	public END(): TerminalNode { return this.getToken(SparkSqlParser.END, 0); }
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
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ELSE, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSimpleCase) {
			listener.enterSimpleCase(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSimpleCase) {
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
export class CastContext extends PrimaryExpressionContext {
	public CAST(): TerminalNode { return this.getToken(SparkSqlParser.CAST, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public AS(): TerminalNode { return this.getToken(SparkSqlParser.AS, 0); }
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterCast) {
			listener.enterCast(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitCast) {
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
export class StructContext extends PrimaryExpressionContext {
	public _namedExpression!: NamedExpressionContext;
	public _argument: NamedExpressionContext[] = [];
	public STRUCT(): TerminalNode { return this.getToken(SparkSqlParser.STRUCT, 0); }
	public namedExpression(): NamedExpressionContext[];
	public namedExpression(i: number): NamedExpressionContext;
	public namedExpression(i?: number): NamedExpressionContext | NamedExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedExpressionContext);
		} else {
			return this.getRuleContext(i, NamedExpressionContext);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterStruct) {
			listener.enterStruct(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitStruct) {
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
export class FirstContext extends PrimaryExpressionContext {
	public FIRST(): TerminalNode { return this.getToken(SparkSqlParser.FIRST, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public IGNORE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IGNORE, 0); }
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NULLS, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterFirst) {
			listener.enterFirst(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitFirst) {
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
export class LastContext extends PrimaryExpressionContext {
	public LAST(): TerminalNode { return this.getToken(SparkSqlParser.LAST, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public IGNORE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IGNORE, 0); }
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NULLS, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterLast) {
			listener.enterLast(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitLast) {
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
export class PositionContext extends PrimaryExpressionContext {
	public _substr!: ValueExpressionContext;
	public _str!: ValueExpressionContext;
	public POSITION(): TerminalNode { return this.getToken(SparkSqlParser.POSITION, 0); }
	public IN(): TerminalNode { return this.getToken(SparkSqlParser.IN, 0); }
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
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterPosition) {
			listener.enterPosition(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitPosition) {
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
export class ConstantDefaultContext extends PrimaryExpressionContext {
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterConstantDefault) {
			listener.enterConstantDefault(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitConstantDefault) {
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
export class StarContext extends PrimaryExpressionContext {
	public ASTERISK(): TerminalNode { return this.getToken(SparkSqlParser.ASTERISK, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterStar) {
			listener.enterStar(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitStar) {
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
export class RowConstructorContext extends PrimaryExpressionContext {
	public namedExpression(): NamedExpressionContext[];
	public namedExpression(i: number): NamedExpressionContext;
	public namedExpression(i?: number): NamedExpressionContext | NamedExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedExpressionContext);
		} else {
			return this.getRuleContext(i, NamedExpressionContext);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterRowConstructor) {
			listener.enterRowConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitRowConstructor) {
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
export class SubqueryExpressionContext extends PrimaryExpressionContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSubqueryExpression) {
			listener.enterSubqueryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSubqueryExpression) {
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
export class FunctionCallContext extends PrimaryExpressionContext {
	public _expression!: ExpressionContext;
	public _argument: ExpressionContext[] = [];
	public _where!: BooleanExpressionContext;
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public FILTER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FILTER, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.WHERE, 0); }
	public OVER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OVER, 0); }
	public windowSpec(): WindowSpecContext | undefined {
		return this.tryGetRuleContext(0, WindowSpecContext);
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
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitFunctionCall) {
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
export class LambdaContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterLambda) {
			listener.enterLambda(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitLambda) {
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
export class SubscriptContext extends PrimaryExpressionContext {
	public _value!: PrimaryExpressionContext;
	public _index!: ValueExpressionContext;
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
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSubscript) {
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
export class ColumnReferenceContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterColumnReference) {
			listener.enterColumnReference(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitColumnReference) {
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
export class DereferenceContext extends PrimaryExpressionContext {
	public _base!: PrimaryExpressionContext;
	public _fieldName!: IdentifierContext;
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterDereference) {
			listener.enterDereference(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitDereference) {
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
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitParenthesizedExpression) {
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
	public EXTRACT(): TerminalNode { return this.getToken(SparkSqlParser.EXTRACT, 0); }
	public FROM(): TerminalNode { return this.getToken(SparkSqlParser.FROM, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterExtract) {
			listener.enterExtract(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitExtract) {
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
export class SubstringContext extends PrimaryExpressionContext {
	public _str!: ValueExpressionContext;
	public _pos!: ValueExpressionContext;
	public _len!: ValueExpressionContext;
	public SUBSTR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SUBSTR, 0); }
	public SUBSTRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SUBSTRING, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public FROM(): TerminalNode { return this.getToken(SparkSqlParser.FROM, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FOR, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSubstring) {
			listener.enterSubstring(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSubstring) {
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
export class TrimContext extends PrimaryExpressionContext {
	public _trimOption!: Token;
	public _trimStr!: ValueExpressionContext;
	public _srcStr!: ValueExpressionContext;
	public TRIM(): TerminalNode { return this.getToken(SparkSqlParser.TRIM, 0); }
	public FROM(): TerminalNode { return this.getToken(SparkSqlParser.FROM, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public BOTH(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.BOTH, 0); }
	public LEADING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LEADING, 0); }
	public TRAILING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRAILING, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTrim) {
			listener.enterTrim(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTrim) {
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
export class OverlayContext extends PrimaryExpressionContext {
	public _input!: ValueExpressionContext;
	public _replace!: ValueExpressionContext;
	public _position!: ValueExpressionContext;
	public _length!: ValueExpressionContext;
	public OVERLAY(): TerminalNode { return this.getToken(SparkSqlParser.OVERLAY, 0); }
	public PLACING(): TerminalNode { return this.getToken(SparkSqlParser.PLACING, 0); }
	public FROM(): TerminalNode { return this.getToken(SparkSqlParser.FROM, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public FOR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FOR, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterOverlay) {
			listener.enterOverlay(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitOverlay) {
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


export class ConstantContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_constant; }
	public copyFrom(ctx: ConstantContext): void {
		super.copyFrom(ctx);
	}
}
export class NullLiteralContext extends ConstantContext {
	public NULL(): TerminalNode { return this.getToken(SparkSqlParser.NULL, 0); }
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterNullLiteral) {
			listener.enterNullLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitNullLiteral) {
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
export class IntervalLiteralContext extends ConstantContext {
	public interval(): IntervalContext {
		return this.getRuleContext(0, IntervalContext);
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterIntervalLiteral) {
			listener.enterIntervalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitIntervalLiteral) {
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
export class TypeConstructorContext extends ConstantContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public STRING(): TerminalNode { return this.getToken(SparkSqlParser.STRING, 0); }
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTypeConstructor) {
			listener.enterTypeConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTypeConstructor) {
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
export class NumericLiteralContext extends ConstantContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitNumericLiteral) {
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
	public booleanValue(): BooleanValueContext {
		return this.getRuleContext(0, BooleanValueContext);
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitBooleanLiteral) {
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
export class StringLiteralContext extends ConstantContext {
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.STRING);
		} else {
			return this.getToken(SparkSqlParser.STRING, i);
		}
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitStringLiteral) {
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


export class ComparisonOperatorContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NEQ, 0); }
	public NEQJ(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NEQJ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.GT, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.GTE, 0); }
	public NSEQ(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NSEQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitComparisonOperator) {
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
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MINUS, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SLASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PERCENT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DIV, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TILDE, 0); }
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AMPERSAND, 0); }
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PIPE, 0); }
	public CONCAT_PIPE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CONCAT_PIPE, 0); }
	public HAT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.HAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_arithmeticOperator; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterArithmeticOperator) {
			listener.enterArithmeticOperator(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitArithmeticOperator) {
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
	public OR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AND, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IN, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_predicateOperator; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterPredicateOperator) {
			listener.enterPredicateOperator(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitPredicateOperator) {
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
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_booleanValue; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterBooleanValue) {
			listener.enterBooleanValue(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitBooleanValue) {
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
	public INTERVAL(): TerminalNode { return this.getToken(SparkSqlParser.INTERVAL, 0); }
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
	public get ruleIndex(): number { return SparkSqlParser.RULE_interval; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterInterval) {
			listener.enterInterval(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitInterval) {
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
	public get ruleIndex(): number { return SparkSqlParser.RULE_errorCapturingMultiUnitsInterval; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterErrorCapturingMultiUnitsInterval) {
			listener.enterErrorCapturingMultiUnitsInterval(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitErrorCapturingMultiUnitsInterval) {
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
	public intervalValue(): IntervalValueContext[];
	public intervalValue(i: number): IntervalValueContext;
	public intervalValue(i?: number): IntervalValueContext | IntervalValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntervalValueContext);
		} else {
			return this.getRuleContext(i, IntervalValueContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_multiUnitsInterval; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterMultiUnitsInterval) {
			listener.enterMultiUnitsInterval(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitMultiUnitsInterval) {
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
	public get ruleIndex(): number { return SparkSqlParser.RULE_errorCapturingUnitToUnitInterval; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterErrorCapturingUnitToUnitInterval) {
			listener.enterErrorCapturingUnitToUnitInterval(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitErrorCapturingUnitToUnitInterval) {
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
	public _from!: IdentifierContext;
	public _to!: IdentifierContext;
	public TO(): TerminalNode { return this.getToken(SparkSqlParser.TO, 0); }
	public intervalValue(): IntervalValueContext {
		return this.getRuleContext(0, IntervalValueContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_unitToUnitInterval; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterUnitToUnitInterval) {
			listener.enterUnitToUnitInterval(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitUnitToUnitInterval) {
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
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INTEGER_VALUE, 0); }
	public DECIMAL_VALUE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DECIMAL_VALUE, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MINUS, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_intervalValue; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterIntervalValue) {
			listener.enterIntervalValue(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitIntervalValue) {
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
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FIRST, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AFTER, 0); }
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ErrorCapturingIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_colPosition; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterColPosition) {
			listener.enterColPosition(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitColPosition) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_dataType; }
	public copyFrom(ctx: DataTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class ComplexDataTypeContext extends DataTypeContext {
	public _complex!: Token;
	public LT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LT, 0); }
	public dataType(): DataTypeContext[];
	public dataType(i: number): DataTypeContext;
	public dataType(i?: number): DataTypeContext | DataTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeContext);
		} else {
			return this.getRuleContext(i, DataTypeContext);
		}
	}
	public GT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.GT, 0); }
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ARRAY, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MAP, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRUCT, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NEQ, 0); }
	public complexColTypeList(): ComplexColTypeListContext | undefined {
		return this.tryGetRuleContext(0, ComplexColTypeListContext);
	}
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterComplexDataType) {
			listener.enterComplexDataType(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitComplexDataType) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public INTEGER_VALUE(): TerminalNode[];
	public INTEGER_VALUE(i: number): TerminalNode;
	public INTEGER_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.INTEGER_VALUE);
		} else {
			return this.getToken(SparkSqlParser.INTEGER_VALUE, i);
		}
	}
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterPrimitiveDataType) {
			listener.enterPrimitiveDataType(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitPrimitiveDataType) {
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
	public qualifiedColTypeWithPosition(): QualifiedColTypeWithPositionContext[];
	public qualifiedColTypeWithPosition(i: number): QualifiedColTypeWithPositionContext;
	public qualifiedColTypeWithPosition(i?: number): QualifiedColTypeWithPositionContext | QualifiedColTypeWithPositionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedColTypeWithPositionContext);
		} else {
			return this.getRuleContext(i, QualifiedColTypeWithPositionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_qualifiedColTypeWithPositionList; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterQualifiedColTypeWithPositionList) {
			listener.enterQualifiedColTypeWithPositionList(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitQualifiedColTypeWithPositionList) {
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
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public multipartIdentifier(): MultipartIdentifierContext {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NOT, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NULL, 0); }
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	public colPosition(): ColPositionContext | undefined {
		return this.tryGetRuleContext(0, ColPositionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_qualifiedColTypeWithPosition; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterQualifiedColTypeWithPosition) {
			listener.enterQualifiedColTypeWithPosition(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitQualifiedColTypeWithPosition) {
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
	public colType(): ColTypeContext[];
	public colType(i: number): ColTypeContext;
	public colType(i?: number): ColTypeContext | ColTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColTypeContext);
		} else {
			return this.getRuleContext(i, ColTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_colTypeList; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterColTypeList) {
			listener.enterColTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitColTypeList) {
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
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getRuleContext(0, ErrorCapturingIdentifierContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NOT, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NULL, 0); }
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_colType; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterColType) {
			listener.enterColType(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitColType) {
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
	public complexColType(): ComplexColTypeContext[];
	public complexColType(i: number): ComplexColTypeContext;
	public complexColType(i?: number): ComplexColTypeContext | ComplexColTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComplexColTypeContext);
		} else {
			return this.getRuleContext(i, ComplexColTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_complexColTypeList; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterComplexColTypeList) {
			listener.enterComplexColTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitComplexColTypeList) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NOT, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NULL, 0); }
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_complexColType; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterComplexColType) {
			listener.enterComplexColType(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitComplexColType) {
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
	public WHEN(): TerminalNode { return this.getToken(SparkSqlParser.WHEN, 0); }
	public THEN(): TerminalNode { return this.getToken(SparkSqlParser.THEN, 0); }
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
	public get ruleIndex(): number { return SparkSqlParser.RULE_whenClause; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterWhenClause) {
			listener.enterWhenClause(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitWhenClause) {
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
	public WINDOW(): TerminalNode { return this.getToken(SparkSqlParser.WINDOW, 0); }
	public namedWindow(): NamedWindowContext[];
	public namedWindow(i: number): NamedWindowContext;
	public namedWindow(i?: number): NamedWindowContext | NamedWindowContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedWindowContext);
		} else {
			return this.getRuleContext(i, NamedWindowContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_windowClause; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterWindowClause) {
			listener.enterWindowClause(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitWindowClause) {
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
	public AS(): TerminalNode { return this.getToken(SparkSqlParser.AS, 0); }
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
	public get ruleIndex(): number { return SparkSqlParser.RULE_namedWindow; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterNamedWindow) {
			listener.enterNamedWindow(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitNamedWindow) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_windowSpec; }
	public copyFrom(ctx: WindowSpecContext): void {
		super.copyFrom(ctx);
	}
}
export class WindowRefContext extends WindowSpecContext {
	public _name!: ErrorCapturingIdentifierContext;
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getRuleContext(0, ErrorCapturingIdentifierContext);
	}
	constructor(ctx: WindowSpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterWindowRef) {
			listener.enterWindowRef(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitWindowRef) {
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
	public CLUSTER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CLUSTER, 0); }
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.BY);
		} else {
			return this.getToken(SparkSqlParser.BY, i);
		}
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
	public windowFrame(): WindowFrameContext | undefined {
		return this.tryGetRuleContext(0, WindowFrameContext);
	}
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PARTITION, 0); }
	public DISTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DISTRIBUTE, 0); }
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ORDER, 0); }
	public SORT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SORT, 0); }
	constructor(ctx: WindowSpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterWindowDef) {
			listener.enterWindowDef(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitWindowDef) {
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
	public _frameStart!: FrameBoundContext;
	public _end!: FrameBoundContext;
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RANGE, 0); }
	public frameBound(): FrameBoundContext[];
	public frameBound(i: number): FrameBoundContext;
	public frameBound(i?: number): FrameBoundContext | FrameBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FrameBoundContext);
		} else {
			return this.getRuleContext(i, FrameBoundContext);
		}
	}
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROWS, 0); }
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.BETWEEN, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_windowFrame; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterWindowFrame) {
			listener.enterWindowFrame(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitWindowFrame) {
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
	public UNBOUNDED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNBOUNDED, 0); }
	public PRECEDING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PRECEDING, 0); }
	public FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FOLLOWING, 0); }
	public ROW(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROW, 0); }
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CURRENT, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_frameBound; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterFrameBound) {
			listener.enterFrameBound(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitFrameBound) {
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
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_qualifiedNameList; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterQualifiedNameList) {
			listener.enterQualifiedNameList(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitQualifiedNameList) {
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
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public FILTER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FILTER, 0); }
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LEFT, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RIGHT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_functionName; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterFunctionName) {
			listener.enterFunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitFunctionName) {
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
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitQualifiedName) {
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
	public get ruleIndex(): number { return SparkSqlParser.RULE_errorCapturingIdentifier; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterErrorCapturingIdentifier) {
			listener.enterErrorCapturingIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitErrorCapturingIdentifier) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_errorCapturingIdentifierExtra; }
	public copyFrom(ctx: ErrorCapturingIdentifierExtraContext): void {
		super.copyFrom(ctx);
	}
}
export class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SparkSqlParser.MINUS);
		} else {
			return this.getToken(SparkSqlParser.MINUS, i);
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
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterErrorIdent) {
			listener.enterErrorIdent(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitErrorIdent) {
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
	constructor(ctx: ErrorCapturingIdentifierExtraContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterRealIdent) {
			listener.enterRealIdent(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitRealIdent) {
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
	public strictIdentifier(): StrictIdentifierContext | undefined {
		return this.tryGetRuleContext(0, StrictIdentifierContext);
	}
	public strictNonReserved(): StrictNonReservedContext | undefined {
		return this.tryGetRuleContext(0, StrictNonReservedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_identifier; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitIdentifier) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_strictIdentifier; }
	public copyFrom(ctx: StrictIdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class UnquotedIdentifierContext extends StrictIdentifierContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IDENTIFIER, 0); }
	public ansiNonReserved(): AnsiNonReservedContext | undefined {
		return this.tryGetRuleContext(0, AnsiNonReservedContext);
	}
	public nonReserved(): NonReservedContext | undefined {
		return this.tryGetRuleContext(0, NonReservedContext);
	}
	constructor(ctx: StrictIdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterUnquotedIdentifier) {
			listener.enterUnquotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitUnquotedIdentifier) {
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
export class QuotedIdentifierAlternativeContext extends StrictIdentifierContext {
	public quotedIdentifier(): QuotedIdentifierContext {
		return this.getRuleContext(0, QuotedIdentifierContext);
	}
	constructor(ctx: StrictIdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterQuotedIdentifierAlternative) {
			listener.enterQuotedIdentifierAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitQuotedIdentifierAlternative) {
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


export class QuotedIdentifierContext extends ParserRuleContext {
	public BACKQUOTED_IDENTIFIER(): TerminalNode { return this.getToken(SparkSqlParser.BACKQUOTED_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_quotedIdentifier; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterQuotedIdentifier) {
			listener.enterQuotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitQuotedIdentifier) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_number; }
	public copyFrom(ctx: NumberContext): void {
		super.copyFrom(ctx);
	}
}
export class ExponentLiteralContext extends NumberContext {
	public EXPONENT_VALUE(): TerminalNode { return this.getToken(SparkSqlParser.EXPONENT_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterExponentLiteral) {
			listener.enterExponentLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitExponentLiteral) {
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
export class DecimalLiteralContext extends NumberContext {
	public DECIMAL_VALUE(): TerminalNode { return this.getToken(SparkSqlParser.DECIMAL_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterDecimalLiteral) {
			listener.enterDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitDecimalLiteral) {
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
export class LegacyDecimalLiteralContext extends NumberContext {
	public EXPONENT_VALUE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXPONENT_VALUE, 0); }
	public DECIMAL_VALUE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DECIMAL_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterLegacyDecimalLiteral) {
			listener.enterLegacyDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitLegacyDecimalLiteral) {
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
export class IntegerLiteralContext extends NumberContext {
	public INTEGER_VALUE(): TerminalNode { return this.getToken(SparkSqlParser.INTEGER_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitIntegerLiteral) {
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
export class BigIntLiteralContext extends NumberContext {
	public BIGINT_LITERAL(): TerminalNode { return this.getToken(SparkSqlParser.BIGINT_LITERAL, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterBigIntLiteral) {
			listener.enterBigIntLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitBigIntLiteral) {
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
export class SmallIntLiteralContext extends NumberContext {
	public SMALLINT_LITERAL(): TerminalNode { return this.getToken(SparkSqlParser.SMALLINT_LITERAL, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterSmallIntLiteral) {
			listener.enterSmallIntLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitSmallIntLiteral) {
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
export class TinyIntLiteralContext extends NumberContext {
	public TINYINT_LITERAL(): TerminalNode { return this.getToken(SparkSqlParser.TINYINT_LITERAL, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterTinyIntLiteral) {
			listener.enterTinyIntLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitTinyIntLiteral) {
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
export class DoubleLiteralContext extends NumberContext {
	public DOUBLE_LITERAL(): TerminalNode { return this.getToken(SparkSqlParser.DOUBLE_LITERAL, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterDoubleLiteral) {
			listener.enterDoubleLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitDoubleLiteral) {
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
export class FloatLiteralContext extends NumberContext {
	public FLOAT_LITERAL(): TerminalNode { return this.getToken(SparkSqlParser.FLOAT_LITERAL, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterFloatLiteral) {
			listener.enterFloatLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitFloatLiteral) {
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
export class BigDecimalLiteralContext extends NumberContext {
	public BIGDECIMAL_LITERAL(): TerminalNode { return this.getToken(SparkSqlParser.BIGDECIMAL_LITERAL, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterBigDecimalLiteral) {
			listener.enterBigDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitBigDecimalLiteral) {
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


export class AlterColumnActionContext extends ParserRuleContext {
	public _setOrDrop!: Token;
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TYPE, 0); }
	public dataType(): DataTypeContext | undefined {
		return this.tryGetRuleContext(0, DataTypeContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	public colPosition(): ColPositionContext | undefined {
		return this.tryGetRuleContext(0, ColPositionContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NOT, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NULL, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SET, 0); }
	public DROP(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DROP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_alterColumnAction; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterAlterColumnAction) {
			listener.enterAlterColumnAction(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitAlterColumnAction) {
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
	public ADD(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ADD, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AFTER, 0); }
	public ALTER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ALTER, 0); }
	public ANALYZE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ANALYZE, 0); }
	public ANTI(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ANTI, 0); }
	public ARCHIVE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ARCHIVE, 0); }
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ARRAY, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ASC, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AT, 0); }
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.BETWEEN, 0); }
	public BUCKET(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.BUCKET, 0); }
	public BUCKETS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.BUCKETS, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.BY, 0); }
	public CACHE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CACHE, 0); }
	public CASCADE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CASCADE, 0); }
	public CHANGE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CHANGE, 0); }
	public CLEAR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CLEAR, 0); }
	public CLUSTER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CLUSTER, 0); }
	public CLUSTERED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CLUSTERED, 0); }
	public CODEGEN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CODEGEN, 0); }
	public COLLECTION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COLLECTION, 0); }
	public COLUMNS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COLUMNS, 0); }
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COMMENT, 0); }
	public COMMIT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COMMIT, 0); }
	public COMPACT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COMPACT, 0); }
	public COMPACTIONS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COMPACTIONS, 0); }
	public COMPUTE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COMPUTE, 0); }
	public CONCATENATE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CONCATENATE, 0); }
	public COST(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COST, 0); }
	public CUBE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CUBE, 0); }
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CURRENT, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DATA, 0); }
	public DATABASE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DATABASE, 0); }
	public DATABASES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DATABASES, 0); }
	public DBPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DBPROPERTIES, 0); }
	public DEFINED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DEFINED, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DELETE, 0); }
	public DELIMITED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DELIMITED, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DESC, 0); }
	public DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DESCRIBE, 0); }
	public DFS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DFS, 0); }
	public DIRECTORIES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DIRECTORIES, 0); }
	public DIRECTORY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DIRECTORY, 0); }
	public DISTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DISTRIBUTE, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DIV, 0); }
	public DROP(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DROP, 0); }
	public ESCAPED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ESCAPED, 0); }
	public EXCHANGE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXCHANGE, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXISTS, 0); }
	public EXPLAIN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXPLAIN, 0); }
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXPORT, 0); }
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXTENDED, 0); }
	public EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXTERNAL, 0); }
	public EXTRACT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXTRACT, 0); }
	public FIELDS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FIELDS, 0); }
	public FILEFORMAT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FILEFORMAT, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FIRST, 0); }
	public FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FOLLOWING, 0); }
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FORMAT, 0); }
	public FORMATTED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FORMATTED, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FUNCTION, 0); }
	public FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FUNCTIONS, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.GLOBAL, 0); }
	public GROUPING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.GROUPING, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IF, 0); }
	public IGNORE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IGNORE, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IMPORT, 0); }
	public INDEX(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INDEX, 0); }
	public INDEXES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INDEXES, 0); }
	public INPATH(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INPATH, 0); }
	public INPUTFORMAT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INPUTFORMAT, 0); }
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INSERT, 0); }
	public INTERVAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INTERVAL, 0); }
	public ITEMS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ITEMS, 0); }
	public KEYS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.KEYS, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LAST, 0); }
	public LATERAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LATERAL, 0); }
	public LAZY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LAZY, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LIKE, 0); }
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LIMIT, 0); }
	public LINES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LINES, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LIST, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOAD, 0); }
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOCAL, 0); }
	public LOCATION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOCATION, 0); }
	public LOCK(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOCK, 0); }
	public LOCKS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOCKS, 0); }
	public LOGICAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOGICAL, 0); }
	public MACRO(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MACRO, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MAP, 0); }
	public MATCHED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MATCHED, 0); }
	public MERGE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MERGE, 0); }
	public MSCK(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MSCK, 0); }
	public NAMESPACE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NAMESPACE, 0); }
	public NAMESPACES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NAMESPACES, 0); }
	public NO(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NO, 0); }
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NULLS, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OF, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OPTION, 0); }
	public OPTIONS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OPTIONS, 0); }
	public OUT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OUT, 0); }
	public OUTPUTFORMAT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OUTPUTFORMAT, 0); }
	public OVER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OVER, 0); }
	public OVERLAY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OVERLAY, 0); }
	public OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OVERWRITE, 0); }
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PARTITION, 0); }
	public PARTITIONED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PARTITIONED, 0); }
	public PARTITIONS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PARTITIONS, 0); }
	public PERCENTLIT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PERCENTLIT, 0); }
	public PIVOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PIVOT, 0); }
	public PLACING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PLACING, 0); }
	public POSITION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.POSITION, 0); }
	public PRECEDING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PRECEDING, 0); }
	public PRINCIPALS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PRINCIPALS, 0); }
	public PROPERTIES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PROPERTIES, 0); }
	public PURGE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PURGE, 0); }
	public QUERY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.QUERY, 0); }
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RANGE, 0); }
	public RECORDREADER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RECORDREADER, 0); }
	public RECORDWRITER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RECORDWRITER, 0); }
	public RECOVER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RECOVER, 0); }
	public REDUCE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.REDUCE, 0); }
	public REFRESH(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.REFRESH, 0); }
	public RENAME(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RENAME, 0); }
	public REPAIR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.REPAIR, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.REPLACE, 0); }
	public RESET(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RESET, 0); }
	public RESTRICT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RESTRICT, 0); }
	public REVOKE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.REVOKE, 0); }
	public RLIKE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RLIKE, 0); }
	public ROLE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROLE, 0); }
	public ROLES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROLES, 0); }
	public ROLLBACK(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROLLBACK, 0); }
	public ROLLUP(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROLLUP, 0); }
	public ROW(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROW, 0); }
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROWS, 0); }
	public SCHEMA(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SCHEMA, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SEMI, 0); }
	public SEPARATED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SEPARATED, 0); }
	public SERDE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SERDE, 0); }
	public SERDEPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SERDEPROPERTIES, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SET, 0); }
	public SETMINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SETMINUS, 0); }
	public SETS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SETS, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SHOW, 0); }
	public SKEWED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SKEWED, 0); }
	public SORT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SORT, 0); }
	public SORTED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SORTED, 0); }
	public START(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.START, 0); }
	public STATISTICS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STATISTICS, 0); }
	public STORED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STORED, 0); }
	public STRATIFY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRATIFY, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRUCT, 0); }
	public SUBSTR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SUBSTR, 0); }
	public SUBSTRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SUBSTRING, 0); }
	public TABLES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TABLES, 0); }
	public TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TABLESAMPLE, 0); }
	public TBLPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TBLPROPERTIES, 0); }
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TEMPORARY, 0); }
	public TERMINATED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TERMINATED, 0); }
	public TOUCH(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TOUCH, 0); }
	public TRANSACTION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRANSACTION, 0); }
	public TRANSACTIONS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRANSACTIONS, 0); }
	public TRANSFORM(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRANSFORM, 0); }
	public TRIM(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRIM, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRUE, 0); }
	public TRUNCATE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRUNCATE, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TYPE, 0); }
	public UNARCHIVE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNARCHIVE, 0); }
	public UNBOUNDED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNBOUNDED, 0); }
	public UNCACHE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNCACHE, 0); }
	public UNLOCK(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNLOCK, 0); }
	public UNSET(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNSET, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UPDATE, 0); }
	public USE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.USE, 0); }
	public VALUES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.VALUES, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.VIEW, 0); }
	public VIEWS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.VIEWS, 0); }
	public WINDOW(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.WINDOW, 0); }
	public ZONE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ZONE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_ansiNonReserved; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterAnsiNonReserved) {
			listener.enterAnsiNonReserved(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitAnsiNonReserved) {
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
	public ANTI(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ANTI, 0); }
	public CROSS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CROSS, 0); }
	public EXCEPT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXCEPT, 0); }
	public FULL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FULL, 0); }
	public INNER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INNER, 0); }
	public INTERSECT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INTERSECT, 0); }
	public JOIN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.JOIN, 0); }
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LEFT, 0); }
	public NATURAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NATURAL, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ON, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RIGHT, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SEMI, 0); }
	public SETMINUS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SETMINUS, 0); }
	public UNION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNION, 0); }
	public USING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.USING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_strictNonReserved; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterStrictNonReserved) {
			listener.enterStrictNonReserved(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitStrictNonReserved) {
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
	public ADD(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ADD, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AFTER, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ALL, 0); }
	public ALTER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ALTER, 0); }
	public ANALYZE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ANALYZE, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AND, 0); }
	public ANY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ANY, 0); }
	public ARCHIVE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ARCHIVE, 0); }
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ARRAY, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AS, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ASC, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AT, 0); }
	public AUTHORIZATION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.AUTHORIZATION, 0); }
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.BETWEEN, 0); }
	public BOTH(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.BOTH, 0); }
	public BUCKET(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.BUCKET, 0); }
	public BUCKETS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.BUCKETS, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.BY, 0); }
	public CACHE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CACHE, 0); }
	public CASCADE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CASCADE, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CASE, 0); }
	public CAST(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CAST, 0); }
	public CHANGE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CHANGE, 0); }
	public CHECK(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CHECK, 0); }
	public CLEAR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CLEAR, 0); }
	public CLUSTER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CLUSTER, 0); }
	public CLUSTERED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CLUSTERED, 0); }
	public CODEGEN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CODEGEN, 0); }
	public COLLATE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COLLATE, 0); }
	public COLLECTION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COLLECTION, 0); }
	public COLUMN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COLUMN, 0); }
	public COLUMNS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COLUMNS, 0); }
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COMMENT, 0); }
	public COMMIT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COMMIT, 0); }
	public COMPACT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COMPACT, 0); }
	public COMPACTIONS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COMPACTIONS, 0); }
	public COMPUTE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COMPUTE, 0); }
	public CONCATENATE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CONCATENATE, 0); }
	public CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CONSTRAINT, 0); }
	public COST(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.COST, 0); }
	public CREATE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CREATE, 0); }
	public CUBE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CUBE, 0); }
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CURRENT, 0); }
	public CURRENT_DATE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CURRENT_DATE, 0); }
	public CURRENT_TIME(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CURRENT_TIME, 0); }
	public CURRENT_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CURRENT_TIMESTAMP, 0); }
	public CURRENT_USER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.CURRENT_USER, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DATA, 0); }
	public DATABASE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DATABASE, 0); }
	public DATABASES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DATABASES, 0); }
	public DBPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DBPROPERTIES, 0); }
	public DEFINED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DEFINED, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DELETE, 0); }
	public DELIMITED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DELIMITED, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DESC, 0); }
	public DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DESCRIBE, 0); }
	public DFS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DFS, 0); }
	public DIRECTORIES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DIRECTORIES, 0); }
	public DIRECTORY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DIRECTORY, 0); }
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DISTINCT, 0); }
	public DISTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DISTRIBUTE, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DIV, 0); }
	public DROP(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.DROP, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ELSE, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.END, 0); }
	public ESCAPE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ESCAPE, 0); }
	public ESCAPED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ESCAPED, 0); }
	public EXCHANGE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXCHANGE, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXISTS, 0); }
	public EXPLAIN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXPLAIN, 0); }
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXPORT, 0); }
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXTENDED, 0); }
	public EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXTERNAL, 0); }
	public EXTRACT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.EXTRACT, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FALSE, 0); }
	public FETCH(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FETCH, 0); }
	public FILTER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FILTER, 0); }
	public FIELDS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FIELDS, 0); }
	public FILEFORMAT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FILEFORMAT, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FIRST, 0); }
	public FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FOLLOWING, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FOR, 0); }
	public FOREIGN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FOREIGN, 0); }
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FORMAT, 0); }
	public FORMATTED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FORMATTED, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FROM, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FUNCTION, 0); }
	public FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.FUNCTIONS, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.GLOBAL, 0); }
	public GRANT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.GRANT, 0); }
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.GROUP, 0); }
	public GROUPING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.GROUPING, 0); }
	public HAVING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.HAVING, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IF, 0); }
	public IGNORE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IGNORE, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IMPORT, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IN, 0); }
	public INDEX(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INDEX, 0); }
	public INDEXES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INDEXES, 0); }
	public INPATH(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INPATH, 0); }
	public INPUTFORMAT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INPUTFORMAT, 0); }
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INSERT, 0); }
	public INTERVAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INTERVAL, 0); }
	public INTO(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.INTO, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.IS, 0); }
	public ITEMS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ITEMS, 0); }
	public KEYS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.KEYS, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LAST, 0); }
	public LATERAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LATERAL, 0); }
	public LAZY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LAZY, 0); }
	public LEADING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LEADING, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LIKE, 0); }
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LIMIT, 0); }
	public LINES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LINES, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LIST, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOAD, 0); }
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOCAL, 0); }
	public LOCATION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOCATION, 0); }
	public LOCK(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOCK, 0); }
	public LOCKS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOCKS, 0); }
	public LOGICAL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.LOGICAL, 0); }
	public MACRO(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MACRO, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MAP, 0); }
	public MATCHED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MATCHED, 0); }
	public MERGE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MERGE, 0); }
	public MSCK(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.MSCK, 0); }
	public NAMESPACE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NAMESPACE, 0); }
	public NAMESPACES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NAMESPACES, 0); }
	public NO(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NO, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NOT, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NULL, 0); }
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.NULLS, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OF, 0); }
	public ONLY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ONLY, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OPTION, 0); }
	public OPTIONS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OPTIONS, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OR, 0); }
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ORDER, 0); }
	public OUT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OUT, 0); }
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OUTER, 0); }
	public OUTPUTFORMAT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OUTPUTFORMAT, 0); }
	public OVER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OVER, 0); }
	public OVERLAPS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OVERLAPS, 0); }
	public OVERLAY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OVERLAY, 0); }
	public OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.OVERWRITE, 0); }
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PARTITION, 0); }
	public PARTITIONED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PARTITIONED, 0); }
	public PARTITIONS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PARTITIONS, 0); }
	public PERCENTLIT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PERCENTLIT, 0); }
	public PIVOT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PIVOT, 0); }
	public PLACING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PLACING, 0); }
	public POSITION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.POSITION, 0); }
	public PRECEDING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PRECEDING, 0); }
	public PRIMARY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PRIMARY, 0); }
	public PRINCIPALS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PRINCIPALS, 0); }
	public PROPERTIES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PROPERTIES, 0); }
	public PURGE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.PURGE, 0); }
	public QUERY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.QUERY, 0); }
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RANGE, 0); }
	public RECORDREADER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RECORDREADER, 0); }
	public RECORDWRITER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RECORDWRITER, 0); }
	public RECOVER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RECOVER, 0); }
	public REDUCE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.REDUCE, 0); }
	public REFERENCES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.REFERENCES, 0); }
	public REFRESH(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.REFRESH, 0); }
	public RENAME(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RENAME, 0); }
	public REPAIR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.REPAIR, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.REPLACE, 0); }
	public RESET(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RESET, 0); }
	public RESTRICT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RESTRICT, 0); }
	public REVOKE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.REVOKE, 0); }
	public RLIKE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.RLIKE, 0); }
	public ROLE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROLE, 0); }
	public ROLES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROLES, 0); }
	public ROLLBACK(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROLLBACK, 0); }
	public ROLLUP(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROLLUP, 0); }
	public ROW(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROW, 0); }
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ROWS, 0); }
	public SCHEMA(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SCHEMA, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SELECT, 0); }
	public SEPARATED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SEPARATED, 0); }
	public SERDE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SERDE, 0); }
	public SERDEPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SERDEPROPERTIES, 0); }
	public SESSION_USER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SESSION_USER, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SET, 0); }
	public SETS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SETS, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SHOW, 0); }
	public SKEWED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SKEWED, 0); }
	public SOME(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SOME, 0); }
	public SORT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SORT, 0); }
	public SORTED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SORTED, 0); }
	public START(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.START, 0); }
	public STATISTICS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STATISTICS, 0); }
	public STORED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STORED, 0); }
	public STRATIFY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRATIFY, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.STRUCT, 0); }
	public SUBSTR(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SUBSTR, 0); }
	public SUBSTRING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.SUBSTRING, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TABLE, 0); }
	public TABLES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TABLES, 0); }
	public TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TABLESAMPLE, 0); }
	public TBLPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TBLPROPERTIES, 0); }
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TEMPORARY, 0); }
	public TERMINATED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TERMINATED, 0); }
	public THEN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.THEN, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TIME, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TO, 0); }
	public TOUCH(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TOUCH, 0); }
	public TRAILING(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRAILING, 0); }
	public TRANSACTION(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRANSACTION, 0); }
	public TRANSACTIONS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRANSACTIONS, 0); }
	public TRANSFORM(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRANSFORM, 0); }
	public TRIM(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRIM, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRUE, 0); }
	public TRUNCATE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TRUNCATE, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.TYPE, 0); }
	public UNARCHIVE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNARCHIVE, 0); }
	public UNBOUNDED(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNBOUNDED, 0); }
	public UNCACHE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNCACHE, 0); }
	public UNIQUE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNIQUE, 0); }
	public UNKNOWN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNKNOWN, 0); }
	public UNLOCK(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNLOCK, 0); }
	public UNSET(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UNSET, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.UPDATE, 0); }
	public USE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.USE, 0); }
	public USER(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.USER, 0); }
	public VALUES(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.VALUES, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.VIEW, 0); }
	public VIEWS(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.VIEWS, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.WHEN, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.WHERE, 0); }
	public WINDOW(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.WINDOW, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.WITH, 0); }
	public ZONE(): TerminalNode | undefined { return this.tryGetToken(SparkSqlParser.ZONE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SparkSqlParser.RULE_nonReserved; }
	// @Override
	public enterRule(listener: SparkSqlListener): void {
		if (listener.enterNonReserved) {
			listener.enterNonReserved(this);
		}
	}
	// @Override
	public exitRule(listener: SparkSqlListener): void {
		if (listener.exitNonReserved) {
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


