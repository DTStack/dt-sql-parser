// Generated from dt-sql-parser/src/grammar/trinosql/TrinoSql.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { TrinoSqlListener } from "./TrinoSqlListener";
import { TrinoSqlVisitor } from "./TrinoSqlVisitor";


export class TrinoSqlParser extends Parser {
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
	public static readonly KW_ADD = 17;
	public static readonly KW_ADMIN = 18;
	public static readonly KW_AFTER = 19;
	public static readonly KW_ALL = 20;
	public static readonly KW_ALTER = 21;
	public static readonly KW_ANALYZE = 22;
	public static readonly KW_AND = 23;
	public static readonly KW_ANY = 24;
	public static readonly KW_ARRAY = 25;
	public static readonly KW_AS = 26;
	public static readonly KW_ASC = 27;
	public static readonly KW_AT = 28;
	public static readonly KW_AUTHORIZATION = 29;
	public static readonly KW_BERNOULLI = 30;
	public static readonly KW_BETWEEN = 31;
	public static readonly KW_BY = 32;
	public static readonly KW_CALL = 33;
	public static readonly KW_CASCADE = 34;
	public static readonly KW_CASE = 35;
	public static readonly KW_CAST = 36;
	public static readonly KW_CATALOGS = 37;
	public static readonly KW_COLUMN = 38;
	public static readonly KW_COLUMNS = 39;
	public static readonly KW_COMMENT = 40;
	public static readonly KW_COMMIT = 41;
	public static readonly KW_COMMITTED = 42;
	public static readonly KW_CONSTRAINT = 43;
	public static readonly KW_CREATE = 44;
	public static readonly KW_CROSS = 45;
	public static readonly KW_CUBE = 46;
	public static readonly KW_CURRENT = 47;
	public static readonly KW_CURRENT_CATALOG = 48;
	public static readonly KW_CURRENT_DATE = 49;
	public static readonly KW_CURRENT_PATH = 50;
	public static readonly KW_CURRENT_ROLE = 51;
	public static readonly KW_CURRENT_SCHEMA = 52;
	public static readonly KW_CURRENT_TIME = 53;
	public static readonly KW_CURRENT_TIMESTAMP = 54;
	public static readonly KW_CURRENT_USER = 55;
	public static readonly KW_DATA = 56;
	public static readonly KW_DATE = 57;
	public static readonly KW_DAY = 58;
	public static readonly KW_DEFAULT = 59;
	public static readonly KW_DEALLOCATE = 60;
	public static readonly KW_DEFINER = 61;
	public static readonly KW_DELETE = 62;
	public static readonly KW_DESC = 63;
	public static readonly KW_DESCRIBE = 64;
	public static readonly KW_DEFINE = 65;
	public static readonly KW_DISTINCT = 66;
	public static readonly KW_DISTRIBUTED = 67;
	public static readonly KW_DOUBLE = 68;
	public static readonly KW_DROP = 69;
	public static readonly KW_ELSE = 70;
	public static readonly KW_EMPTY = 71;
	public static readonly KW_END = 72;
	public static readonly KW_ESCAPE = 73;
	public static readonly KW_EXCEPT = 74;
	public static readonly KW_EXCLUDING = 75;
	public static readonly KW_EXECUTE = 76;
	public static readonly KW_EXISTS = 77;
	public static readonly KW_EXPLAIN = 78;
	public static readonly KW_EXTRACT = 79;
	public static readonly KW_FALSE = 80;
	public static readonly KW_FETCH = 81;
	public static readonly KW_FILTER = 82;
	public static readonly KW_FINAL = 83;
	public static readonly KW_FIRST = 84;
	public static readonly KW_FOLLOWING = 85;
	public static readonly KW_FOR = 86;
	public static readonly KW_FORMAT = 87;
	public static readonly KW_FROM = 88;
	public static readonly KW_FULL = 89;
	public static readonly KW_FUNCTIONS = 90;
	public static readonly KW_GRANT = 91;
	public static readonly KW_GRANTED = 92;
	public static readonly KW_GRANTS = 93;
	public static readonly KW_DENY = 94;
	public static readonly KW_GRAPHVIZ = 95;
	public static readonly KW_GROUP = 96;
	public static readonly KW_GROUPING = 97;
	public static readonly KW_GROUPS = 98;
	public static readonly KW_HAVING = 99;
	public static readonly KW_HOUR = 100;
	public static readonly KW_IF = 101;
	public static readonly KW_IGNORE = 102;
	public static readonly KW_IN = 103;
	public static readonly KW_INCLUDING = 104;
	public static readonly KW_INITIAL = 105;
	public static readonly KW_INNER = 106;
	public static readonly KW_INPUT = 107;
	public static readonly KW_INSERT = 108;
	public static readonly KW_INTERSECT = 109;
	public static readonly KW_INTERVAL = 110;
	public static readonly KW_INTO = 111;
	public static readonly KW_INVOKER = 112;
	public static readonly KW_IO = 113;
	public static readonly KW_IS = 114;
	public static readonly KW_ISOLATION = 115;
	public static readonly KW_JOIN = 116;
	public static readonly KW_JSON = 117;
	public static readonly KW_LAST = 118;
	public static readonly KW_LATERAL = 119;
	public static readonly KW_LEFT = 120;
	public static readonly KW_LEVEL = 121;
	public static readonly KW_LIKE = 122;
	public static readonly KW_LIMIT = 123;
	public static readonly KW_LOCAL = 124;
	public static readonly KW_LOCALTIME = 125;
	public static readonly KW_LOCALTIMESTAMP = 126;
	public static readonly KW_LOGICAL = 127;
	public static readonly KW_MAP = 128;
	public static readonly KW_MATCH = 129;
	public static readonly KW_MATCHED = 130;
	public static readonly KW_MATCHES = 131;
	public static readonly KW_MATCH_RECOGNIZE = 132;
	public static readonly KW_MATERIALIZED = 133;
	public static readonly KW_MEASURES = 134;
	public static readonly KW_MERGE = 135;
	public static readonly KW_MINUTE = 136;
	public static readonly KW_MONTH = 137;
	public static readonly KW_NATURAL = 138;
	public static readonly KW_NEXT = 139;
	public static readonly KW_NFC = 140;
	public static readonly KW_NFD = 141;
	public static readonly KW_NFKC = 142;
	public static readonly KW_NFKD = 143;
	public static readonly KW_NO = 144;
	public static readonly KW_NONE = 145;
	public static readonly KW_NORMALIZE = 146;
	public static readonly KW_NOT = 147;
	public static readonly KW_NULL = 148;
	public static readonly KW_NULLIF = 149;
	public static readonly KW_NULLS = 150;
	public static readonly KW_OFFSET = 151;
	public static readonly KW_OMIT = 152;
	public static readonly KW_ON = 153;
	public static readonly KW_ONE = 154;
	public static readonly KW_ONLY = 155;
	public static readonly KW_OPTION = 156;
	public static readonly KW_OR = 157;
	public static readonly KW_ORDER = 158;
	public static readonly KW_ORDINALITY = 159;
	public static readonly KW_OUTER = 160;
	public static readonly KW_OUTPUT = 161;
	public static readonly KW_OVER = 162;
	public static readonly KW_PARTITION = 163;
	public static readonly KW_PARTITIONS = 164;
	public static readonly KW_PAST = 165;
	public static readonly KW_PATH = 166;
	public static readonly KW_PATTERN = 167;
	public static readonly KW_PER = 168;
	public static readonly KW_PERMUTE = 169;
	public static readonly KW_POSITION = 170;
	public static readonly KW_PRECEDING = 171;
	public static readonly KW_PRECISION = 172;
	public static readonly KW_PREPARE = 173;
	public static readonly KW_PRIVILEGES = 174;
	public static readonly KW_PROPERTIES = 175;
	public static readonly KW_RANGE = 176;
	public static readonly KW_READ = 177;
	public static readonly KW_RECURSIVE = 178;
	public static readonly KW_REFRESH = 179;
	public static readonly KW_RENAME = 180;
	public static readonly KW_REPEATABLE = 181;
	public static readonly KW_REPLACE = 182;
	public static readonly KW_RESET = 183;
	public static readonly KW_RESPECT = 184;
	public static readonly KW_RESTRICT = 185;
	public static readonly KW_REVOKE = 186;
	public static readonly KW_RIGHT = 187;
	public static readonly KW_ROLE = 188;
	public static readonly KW_ROLES = 189;
	public static readonly KW_ROLLBACK = 190;
	public static readonly KW_ROLLUP = 191;
	public static readonly KW_ROW = 192;
	public static readonly KW_ROWS = 193;
	public static readonly KW_RUNNING = 194;
	public static readonly KW_SCHEMA = 195;
	public static readonly KW_SCHEMAS = 196;
	public static readonly KW_SECOND = 197;
	public static readonly KW_SECURITY = 198;
	public static readonly KW_SEEK = 199;
	public static readonly KW_SELECT = 200;
	public static readonly KW_SERIALIZABLE = 201;
	public static readonly KW_SESSION = 202;
	public static readonly KW_SET = 203;
	public static readonly KW_SETS = 204;
	public static readonly KW_SHOW = 205;
	public static readonly KW_SOME = 206;
	public static readonly KW_START = 207;
	public static readonly KW_STATS = 208;
	public static readonly KW_SUBSET = 209;
	public static readonly KW_SUBSTRING = 210;
	public static readonly KW_SYSTEM = 211;
	public static readonly KW_TABLE = 212;
	public static readonly KW_TABLES = 213;
	public static readonly KW_TABLESAMPLE = 214;
	public static readonly KW_TEXT = 215;
	public static readonly KW_THEN = 216;
	public static readonly KW_TIES = 217;
	public static readonly KW_TIME = 218;
	public static readonly KW_TIMESTAMP = 219;
	public static readonly KW_TO = 220;
	public static readonly KW_TRANSACTION = 221;
	public static readonly KW_TRUNCATE = 222;
	public static readonly KW_TRUE = 223;
	public static readonly KW_TRY_CAST = 224;
	public static readonly KW_TYPE = 225;
	public static readonly KW_UESCAPE = 226;
	public static readonly KW_UNBOUNDED = 227;
	public static readonly KW_UNCOMMITTED = 228;
	public static readonly KW_UNION = 229;
	public static readonly KW_UNMATCHED = 230;
	public static readonly KW_UNNEST = 231;
	public static readonly KW_UPDATE = 232;
	public static readonly KW_USE = 233;
	public static readonly KW_USER = 234;
	public static readonly KW_USING = 235;
	public static readonly KW_VALIDATE = 236;
	public static readonly KW_VALUES = 237;
	public static readonly KW_VERBOSE = 238;
	public static readonly KW_VIEW = 239;
	public static readonly KW_WHEN = 240;
	public static readonly KW_WHERE = 241;
	public static readonly KW_WINDOW = 242;
	public static readonly KW_WITH = 243;
	public static readonly KW_WITHOUT = 244;
	public static readonly KW_WORK = 245;
	public static readonly KW_WRITE = 246;
	public static readonly KW_YEAR = 247;
	public static readonly KW_ZONE = 248;
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
	public static readonly RULE_program = 0;
	public static readonly RULE_statements = 1;
	public static readonly RULE_standaloneClause = 2;
	public static readonly RULE_singleStatement = 3;
	public static readonly RULE_standaloneExpression = 4;
	public static readonly RULE_standalonePathSpecification = 5;
	public static readonly RULE_standaloneType = 6;
	public static readonly RULE_standaloneRowPattern = 7;
	public static readonly RULE_statement = 8;
	public static readonly RULE_query = 9;
	public static readonly RULE_with = 10;
	public static readonly RULE_tableElement = 11;
	public static readonly RULE_columnDefinition = 12;
	public static readonly RULE_likeClause = 13;
	public static readonly RULE_properties = 14;
	public static readonly RULE_propertyAssignments = 15;
	public static readonly RULE_property = 16;
	public static readonly RULE_propertyValue = 17;
	public static readonly RULE_queryNoWith = 18;
	public static readonly RULE_limitRowCount = 19;
	public static readonly RULE_rowCount = 20;
	public static readonly RULE_queryTerm = 21;
	public static readonly RULE_queryPrimary = 22;
	public static readonly RULE_sortItem = 23;
	public static readonly RULE_querySpecification = 24;
	public static readonly RULE_groupBy = 25;
	public static readonly RULE_groupingElement = 26;
	public static readonly RULE_groupingSet = 27;
	public static readonly RULE_groupingTerm = 28;
	public static readonly RULE_windowDefinition = 29;
	public static readonly RULE_windowSpecification = 30;
	public static readonly RULE_namedQuery = 31;
	public static readonly RULE_setQuantifier = 32;
	public static readonly RULE_selectItem = 33;
	public static readonly RULE_relation = 34;
	public static readonly RULE_joinType = 35;
	public static readonly RULE_joinCriteria = 36;
	public static readonly RULE_sampledRelation = 37;
	public static readonly RULE_sampleType = 38;
	public static readonly RULE_patternRecognition = 39;
	public static readonly RULE_measureDefinition = 40;
	public static readonly RULE_rowsPerMatch = 41;
	public static readonly RULE_emptyMatchHandling = 42;
	public static readonly RULE_skipTo = 43;
	public static readonly RULE_subsetDefinition = 44;
	public static readonly RULE_variableDefinition = 45;
	public static readonly RULE_aliasedRelation = 46;
	public static readonly RULE_columnListCreate = 47;
	public static readonly RULE_columnList = 48;
	public static readonly RULE_columnAliases = 49;
	public static readonly RULE_relationPrimary = 50;
	public static readonly RULE_expression = 51;
	public static readonly RULE_booleanExpression = 52;
	public static readonly RULE_predicate = 53;
	public static readonly RULE_valueExpression = 54;
	public static readonly RULE_primaryExpression = 55;
	public static readonly RULE_processingMode = 56;
	public static readonly RULE_nullTreatment = 57;
	public static readonly RULE_string = 58;
	public static readonly RULE_timeZoneSpecifier = 59;
	public static readonly RULE_comparisonOperator = 60;
	public static readonly RULE_comparisonQuantifier = 61;
	public static readonly RULE_booleanValue = 62;
	public static readonly RULE_interval = 63;
	public static readonly RULE_intervalField = 64;
	public static readonly RULE_normalForm = 65;
	public static readonly RULE_type = 66;
	public static readonly RULE_rowField = 67;
	public static readonly RULE_typeParameter = 68;
	public static readonly RULE_whenClause = 69;
	public static readonly RULE_filter = 70;
	public static readonly RULE_mergeCase = 71;
	public static readonly RULE_over = 72;
	public static readonly RULE_windowFrame = 73;
	public static readonly RULE_frameExtent = 74;
	public static readonly RULE_frameBound = 75;
	public static readonly RULE_rowPattern = 76;
	public static readonly RULE_patternPrimary = 77;
	public static readonly RULE_patternQuantifier = 78;
	public static readonly RULE_updateAssignment = 79;
	public static readonly RULE_explainOption = 80;
	public static readonly RULE_transactionMode = 81;
	public static readonly RULE_levelOfIsolation = 82;
	public static readonly RULE_callArgument = 83;
	public static readonly RULE_pathElement = 84;
	public static readonly RULE_pathSpecification = 85;
	public static readonly RULE_privilege = 86;
	public static readonly RULE_tableOrViewName = 87;
	public static readonly RULE_tableName = 88;
	public static readonly RULE_tableNameCreate = 89;
	public static readonly RULE_viewName = 90;
	public static readonly RULE_viewNameCreate = 91;
	public static readonly RULE_tablePath = 92;
	public static readonly RULE_viewPath = 93;
	public static readonly RULE_schemaName = 94;
	public static readonly RULE_schemaNameCreate = 95;
	public static readonly RULE_schemaPath = 96;
	public static readonly RULE_catalogName = 97;
	public static readonly RULE_catalogNameCreate = 98;
	public static readonly RULE_functionName = 99;
	public static readonly RULE_columnName = 100;
	public static readonly RULE_columnNameCreate = 101;
	public static readonly RULE_qualifiedName = 102;
	public static readonly RULE_grantor = 103;
	public static readonly RULE_principal = 104;
	public static readonly RULE_roles = 105;
	public static readonly RULE_identifier = 106;
	public static readonly RULE_number = 107;
	public static readonly RULE_nonReserved = 108;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statements", "standaloneClause", "singleStatement", "standaloneExpression", 
		"standalonePathSpecification", "standaloneType", "standaloneRowPattern", 
		"statement", "query", "with", "tableElement", "columnDefinition", "likeClause", 
		"properties", "propertyAssignments", "property", "propertyValue", "queryNoWith", 
		"limitRowCount", "rowCount", "queryTerm", "queryPrimary", "sortItem", 
		"querySpecification", "groupBy", "groupingElement", "groupingSet", "groupingTerm", 
		"windowDefinition", "windowSpecification", "namedQuery", "setQuantifier", 
		"selectItem", "relation", "joinType", "joinCriteria", "sampledRelation", 
		"sampleType", "patternRecognition", "measureDefinition", "rowsPerMatch", 
		"emptyMatchHandling", "skipTo", "subsetDefinition", "variableDefinition", 
		"aliasedRelation", "columnListCreate", "columnList", "columnAliases", 
		"relationPrimary", "expression", "booleanExpression", "predicate", "valueExpression", 
		"primaryExpression", "processingMode", "nullTreatment", "string", "timeZoneSpecifier", 
		"comparisonOperator", "comparisonQuantifier", "booleanValue", "interval", 
		"intervalField", "normalForm", "type", "rowField", "typeParameter", "whenClause", 
		"filter", "mergeCase", "over", "windowFrame", "frameExtent", "frameBound", 
		"rowPattern", "patternPrimary", "patternQuantifier", "updateAssignment", 
		"explainOption", "transactionMode", "levelOfIsolation", "callArgument", 
		"pathElement", "pathSpecification", "privilege", "tableOrViewName", "tableName", 
		"tableNameCreate", "viewName", "viewNameCreate", "tablePath", "viewPath", 
		"schemaName", "schemaNameCreate", "schemaPath", "catalogName", "catalogNameCreate", 
		"functionName", "columnName", "columnNameCreate", "qualifiedName", "grantor", 
		"principal", "roles", "identifier", "number", "nonReserved",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "','", "'.'", "'SKIP'", "'->'", "'['", "']'", 
		"'|'", "'^'", "'$'", "'{-'", "'-}'", "'{'", "'}'", "'=>'", "'ADD'", "'ADMIN'", 
		"'AFTER'", "'ALL'", "'ALTER'", "'ANALYZE'", "'AND'", "'ANY'", "'ARRAY'", 
		"'AS'", "'ASC'", "'AT'", "'AUTHORIZATION'", "'BERNOULLI'", "'BETWEEN'", 
		"'BY'", "'CALL'", "'CASCADE'", "'CASE'", "'CAST'", "'CATALOGS'", "'COLUMN'", 
		"'COLUMNS'", "'COMMENT'", "'COMMIT'", "'COMMITTED'", "'CONSTRAINT'", "'CREATE'", 
		"'CROSS'", "'CUBE'", "'CURRENT'", "'CURRENT_CATALOG'", "'CURRENT_DATE'", 
		"'CURRENT_PATH'", "'CURRENT_ROLE'", "'CURRENT_SCHEMA'", "'CURRENT_TIME'", 
		"'CURRENT_TIMESTAMP'", "'CURRENT_USER'", "'DATA'", "'DATE'", "'DAY'", 
		"'DEFAULT'", "'DEALLOCATE'", "'DEFINER'", "'DELETE'", "'DESC'", "'DESCRIBE'", 
		"'DEFINE'", "'DISTINCT'", "'DISTRIBUTED'", "'DOUBLE'", "'DROP'", "'ELSE'", 
		"'EMPTY'", "'END'", "'ESCAPE'", "'EXCEPT'", "'EXCLUDING'", "'EXECUTE'", 
		"'EXISTS'", "'EXPLAIN'", "'EXTRACT'", "'FALSE'", "'FETCH'", "'FILTER'", 
		"'FINAL'", "'FIRST'", "'FOLLOWING'", "'FOR'", "'FORMAT'", "'FROM'", "'FULL'", 
		"'FUNCTIONS'", "'GRANT'", "'GRANTED'", "'GRANTS'", "'DENY'", "'GRAPHVIZ'", 
		"'GROUP'", "'GROUPING'", "'GROUPS'", "'HAVING'", "'HOUR'", "'IF'", "'IGNORE'", 
		"'IN'", "'INCLUDING'", "'INITIAL'", "'INNER'", "'INPUT'", "'INSERT'", 
		"'INTERSECT'", "'INTERVAL'", "'INTO'", "'INVOKER'", "'IO'", "'IS'", "'ISOLATION'", 
		"'JOIN'", "'JSON'", "'LAST'", "'LATERAL'", "'LEFT'", "'LEVEL'", "'LIKE'", 
		"'LIMIT'", "'LOCAL'", "'LOCALTIME'", "'LOCALTIMESTAMP'", "'LOGICAL'", 
		"'MAP'", "'MATCH'", "'MATCHED'", "'MATCHES'", "'MATCH_RECOGNIZE'", "'MATERIALIZED'", 
		"'MEASURES'", "'MERGE'", "'MINUTE'", "'MONTH'", "'NATURAL'", "'NEXT'", 
		"'NFC'", "'NFD'", "'NFKC'", "'NFKD'", "'NO'", "'NONE'", "'NORMALIZE'", 
		"'NOT'", "'NULL'", "'NULLIF'", "'NULLS'", "'OFFSET'", "'OMIT'", "'ON'", 
		"'ONE'", "'ONLY'", "'OPTION'", "'OR'", "'ORDER'", "'ORDINALITY'", "'OUTER'", 
		"'OUTPUT'", "'OVER'", "'PARTITION'", "'PARTITIONS'", "'PAST'", "'PATH'", 
		"'PATTERN'", "'PER'", "'PERMUTE'", "'POSITION'", "'PRECEDING'", "'PRECISION'", 
		"'PREPARE'", "'PRIVILEGES'", "'PROPERTIES'", "'RANGE'", "'READ'", "'RECURSIVE'", 
		"'REFRESH'", "'RENAME'", "'REPEATABLE'", "'REPLACE'", "'RESET'", "'RESPECT'", 
		"'RESTRICT'", "'REVOKE'", "'RIGHT'", "'ROLE'", "'ROLES'", "'ROLLBACK'", 
		"'ROLLUP'", "'ROW'", "'ROWS'", "'RUNNING'", "'SCHEMA'", "'SCHEMAS'", "'SECOND'", 
		"'SECURITY'", "'SEEK'", "'SELECT'", "'SERIALIZABLE'", "'SESSION'", "'SET'", 
		"'SETS'", "'SHOW'", "'SOME'", "'START'", "'STATS'", "'SUBSET'", "'SUBSTRING'", 
		"'SYSTEM'", "'TABLE'", "'TABLES'", "'TABLESAMPLE'", "'TEXT'", "'THEN'", 
		"'TIES'", "'TIME'", "'TIMESTAMP'", "'TO'", "'TRANSACTION'", "'TRUNCATE'", 
		"'TRUE'", "'TRY_CAST'", "'TYPE'", "'UESCAPE'", "'UNBOUNDED'", "'UNCOMMITTED'", 
		"'UNION'", "'UNMATCHED'", "'UNNEST'", "'UPDATE'", "'USE'", "'USER'", "'USING'", 
		"'VALIDATE'", "'VALUES'", "'VERBOSE'", "'VIEW'", "'WHEN'", "'WHERE'", 
		"'WINDOW'", "'WITH'", "'WITHOUT'", "'WORK'", "'WRITE'", "'YEAR'", "'ZONE'", 
		"'='", undefined, "'<'", "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", 
		"'%'", "'||'", "'?'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "KW_ADD", "KW_ADMIN", "KW_AFTER", "KW_ALL", 
		"KW_ALTER", "KW_ANALYZE", "KW_AND", "KW_ANY", "KW_ARRAY", "KW_AS", "KW_ASC", 
		"KW_AT", "KW_AUTHORIZATION", "KW_BERNOULLI", "KW_BETWEEN", "KW_BY", "KW_CALL", 
		"KW_CASCADE", "KW_CASE", "KW_CAST", "KW_CATALOGS", "KW_COLUMN", "KW_COLUMNS", 
		"KW_COMMENT", "KW_COMMIT", "KW_COMMITTED", "KW_CONSTRAINT", "KW_CREATE", 
		"KW_CROSS", "KW_CUBE", "KW_CURRENT", "KW_CURRENT_CATALOG", "KW_CURRENT_DATE", 
		"KW_CURRENT_PATH", "KW_CURRENT_ROLE", "KW_CURRENT_SCHEMA", "KW_CURRENT_TIME", 
		"KW_CURRENT_TIMESTAMP", "KW_CURRENT_USER", "KW_DATA", "KW_DATE", "KW_DAY", 
		"KW_DEFAULT", "KW_DEALLOCATE", "KW_DEFINER", "KW_DELETE", "KW_DESC", "KW_DESCRIBE", 
		"KW_DEFINE", "KW_DISTINCT", "KW_DISTRIBUTED", "KW_DOUBLE", "KW_DROP", 
		"KW_ELSE", "KW_EMPTY", "KW_END", "KW_ESCAPE", "KW_EXCEPT", "KW_EXCLUDING", 
		"KW_EXECUTE", "KW_EXISTS", "KW_EXPLAIN", "KW_EXTRACT", "KW_FALSE", "KW_FETCH", 
		"KW_FILTER", "KW_FINAL", "KW_FIRST", "KW_FOLLOWING", "KW_FOR", "KW_FORMAT", 
		"KW_FROM", "KW_FULL", "KW_FUNCTIONS", "KW_GRANT", "KW_GRANTED", "KW_GRANTS", 
		"KW_DENY", "KW_GRAPHVIZ", "KW_GROUP", "KW_GROUPING", "KW_GROUPS", "KW_HAVING", 
		"KW_HOUR", "KW_IF", "KW_IGNORE", "KW_IN", "KW_INCLUDING", "KW_INITIAL", 
		"KW_INNER", "KW_INPUT", "KW_INSERT", "KW_INTERSECT", "KW_INTERVAL", "KW_INTO", 
		"KW_INVOKER", "KW_IO", "KW_IS", "KW_ISOLATION", "KW_JOIN", "KW_JSON", 
		"KW_LAST", "KW_LATERAL", "KW_LEFT", "KW_LEVEL", "KW_LIKE", "KW_LIMIT", 
		"KW_LOCAL", "KW_LOCALTIME", "KW_LOCALTIMESTAMP", "KW_LOGICAL", "KW_MAP", 
		"KW_MATCH", "KW_MATCHED", "KW_MATCHES", "KW_MATCH_RECOGNIZE", "KW_MATERIALIZED", 
		"KW_MEASURES", "KW_MERGE", "KW_MINUTE", "KW_MONTH", "KW_NATURAL", "KW_NEXT", 
		"KW_NFC", "KW_NFD", "KW_NFKC", "KW_NFKD", "KW_NO", "KW_NONE", "KW_NORMALIZE", 
		"KW_NOT", "KW_NULL", "KW_NULLIF", "KW_NULLS", "KW_OFFSET", "KW_OMIT", 
		"KW_ON", "KW_ONE", "KW_ONLY", "KW_OPTION", "KW_OR", "KW_ORDER", "KW_ORDINALITY", 
		"KW_OUTER", "KW_OUTPUT", "KW_OVER", "KW_PARTITION", "KW_PARTITIONS", "KW_PAST", 
		"KW_PATH", "KW_PATTERN", "KW_PER", "KW_PERMUTE", "KW_POSITION", "KW_PRECEDING", 
		"KW_PRECISION", "KW_PREPARE", "KW_PRIVILEGES", "KW_PROPERTIES", "KW_RANGE", 
		"KW_READ", "KW_RECURSIVE", "KW_REFRESH", "KW_RENAME", "KW_REPEATABLE", 
		"KW_REPLACE", "KW_RESET", "KW_RESPECT", "KW_RESTRICT", "KW_REVOKE", "KW_RIGHT", 
		"KW_ROLE", "KW_ROLES", "KW_ROLLBACK", "KW_ROLLUP", "KW_ROW", "KW_ROWS", 
		"KW_RUNNING", "KW_SCHEMA", "KW_SCHEMAS", "KW_SECOND", "KW_SECURITY", "KW_SEEK", 
		"KW_SELECT", "KW_SERIALIZABLE", "KW_SESSION", "KW_SET", "KW_SETS", "KW_SHOW", 
		"KW_SOME", "KW_START", "KW_STATS", "KW_SUBSET", "KW_SUBSTRING", "KW_SYSTEM", 
		"KW_TABLE", "KW_TABLES", "KW_TABLESAMPLE", "KW_TEXT", "KW_THEN", "KW_TIES", 
		"KW_TIME", "KW_TIMESTAMP", "KW_TO", "KW_TRANSACTION", "KW_TRUNCATE", "KW_TRUE", 
		"KW_TRY_CAST", "KW_TYPE", "KW_UESCAPE", "KW_UNBOUNDED", "KW_UNCOMMITTED", 
		"KW_UNION", "KW_UNMATCHED", "KW_UNNEST", "KW_UPDATE", "KW_USE", "KW_USER", 
		"KW_USING", "KW_VALIDATE", "KW_VALUES", "KW_VERBOSE", "KW_VIEW", "KW_WHEN", 
		"KW_WHERE", "KW_WINDOW", "KW_WITH", "KW_WITHOUT", "KW_WORK", "KW_WRITE", 
		"KW_YEAR", "KW_ZONE", "EQ", "NEQ", "LT", "LTE", "GT", "GTE", "PLUS", "MINUS", 
		"ASTERISK", "SLASH", "PERCENT", "CONCAT", "QUESTION_MARK", "STRING", "UNICODE_STRING", 
		"BINARY_LITERAL", "INTEGER_VALUE", "DECIMAL_VALUE", "DOUBLE_VALUE", "IDENTIFIER", 
		"DIGIT_IDENTIFIER", "QUOTED_IDENTIFIER", "BACKQUOTED_IDENTIFIER", "SEMICOLON", 
		"SIMPLE_COMMENT", "BRACKETED_COMMENT", "WS", "UNRECOGNIZED", "DELIMITER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TrinoSqlParser._LITERAL_NAMES, TrinoSqlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TrinoSqlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TrinoSql.g4"; }

	// @Override
	public get ruleNames(): string[] { return TrinoSqlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TrinoSqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TrinoSqlParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TrinoSqlParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TrinoSqlParser.T__0) | (1 << TrinoSqlParser.KW_ALTER) | (1 << TrinoSqlParser.KW_ANALYZE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TrinoSqlParser.KW_CALL - 33)) | (1 << (TrinoSqlParser.KW_COMMENT - 33)) | (1 << (TrinoSqlParser.KW_COMMIT - 33)) | (1 << (TrinoSqlParser.KW_CREATE - 33)) | (1 << (TrinoSqlParser.KW_DEALLOCATE - 33)) | (1 << (TrinoSqlParser.KW_DELETE - 33)) | (1 << (TrinoSqlParser.KW_DESC - 33)) | (1 << (TrinoSqlParser.KW_DESCRIBE - 33)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (TrinoSqlParser.KW_DROP - 69)) | (1 << (TrinoSqlParser.KW_EXECUTE - 69)) | (1 << (TrinoSqlParser.KW_EXPLAIN - 69)) | (1 << (TrinoSqlParser.KW_GRANT - 69)) | (1 << (TrinoSqlParser.KW_DENY - 69)))) !== 0) || _la === TrinoSqlParser.KW_INSERT || _la === TrinoSqlParser.KW_MERGE || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (TrinoSqlParser.KW_PREPARE - 173)) | (1 << (TrinoSqlParser.KW_REFRESH - 173)) | (1 << (TrinoSqlParser.KW_RESET - 173)) | (1 << (TrinoSqlParser.KW_REVOKE - 173)) | (1 << (TrinoSqlParser.KW_ROLLBACK - 173)) | (1 << (TrinoSqlParser.KW_SELECT - 173)) | (1 << (TrinoSqlParser.KW_SET - 173)))) !== 0) || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & ((1 << (TrinoSqlParser.KW_SHOW - 205)) | (1 << (TrinoSqlParser.KW_START - 205)) | (1 << (TrinoSqlParser.KW_TABLE - 205)) | (1 << (TrinoSqlParser.KW_TRUNCATE - 205)) | (1 << (TrinoSqlParser.KW_UPDATE - 205)) | (1 << (TrinoSqlParser.KW_USE - 205)))) !== 0) || _la === TrinoSqlParser.KW_VALUES || _la === TrinoSqlParser.KW_WITH) {
				{
				{
				this.state = 218;
				this.statements();
				}
				}
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 224;
			this.match(TrinoSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TrinoSqlParser.RULE_statements);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.singleStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public standaloneClause(): StandaloneClauseContext {
		let _localctx: StandaloneClauseContext = new StandaloneClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TrinoSqlParser.RULE_standaloneClause);
		try {
			this.state = 232;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 228;
				this.standaloneExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 229;
				this.standalonePathSpecification();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 230;
				this.standaloneType();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 231;
				this.standaloneRowPattern();
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
	public singleStatement(): SingleStatementContext {
		let _localctx: SingleStatementContext = new SingleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TrinoSqlParser.RULE_singleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.statement();
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.SEMICOLON) {
				{
				this.state = 235;
				this.match(TrinoSqlParser.SEMICOLON);
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
	public standaloneExpression(): StandaloneExpressionContext {
		let _localctx: StandaloneExpressionContext = new StandaloneExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TrinoSqlParser.RULE_standaloneExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.expression();
			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.SEMICOLON) {
				{
				this.state = 239;
				this.match(TrinoSqlParser.SEMICOLON);
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
	public standalonePathSpecification(): StandalonePathSpecificationContext {
		let _localctx: StandalonePathSpecificationContext = new StandalonePathSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TrinoSqlParser.RULE_standalonePathSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.pathSpecification();
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.SEMICOLON) {
				{
				this.state = 243;
				this.match(TrinoSqlParser.SEMICOLON);
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
	public standaloneType(): StandaloneTypeContext {
		let _localctx: StandaloneTypeContext = new StandaloneTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TrinoSqlParser.RULE_standaloneType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.type(0);
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.SEMICOLON) {
				{
				this.state = 247;
				this.match(TrinoSqlParser.SEMICOLON);
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
	public standaloneRowPattern(): StandaloneRowPatternContext {
		let _localctx: StandaloneRowPatternContext = new StandaloneRowPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TrinoSqlParser.RULE_standaloneRowPattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.rowPattern(0);
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.SEMICOLON) {
				{
				this.state = 251;
				this.match(TrinoSqlParser.SEMICOLON);
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TrinoSqlParser.RULE_statement);
		let _la: number;
		try {
			this.state = 1036;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				_localctx = new StatementDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 254;
				this.query();
				}
				break;

			case 2:
				_localctx = new UseContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 255;
				this.match(TrinoSqlParser.KW_USE);
				this.state = 256;
				this.schemaName();
				}
				break;

			case 3:
				_localctx = new CreateSchemaContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 257;
				this.match(TrinoSqlParser.KW_CREATE);
				this.state = 258;
				this.match(TrinoSqlParser.KW_SCHEMA);
				this.state = 262;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 259;
					this.match(TrinoSqlParser.KW_IF);
					this.state = 260;
					this.match(TrinoSqlParser.KW_NOT);
					this.state = 261;
					this.match(TrinoSqlParser.KW_EXISTS);
					}
					break;
				}
				this.state = 264;
				this.schemaNameCreate();
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_AUTHORIZATION) {
					{
					this.state = 265;
					this.match(TrinoSqlParser.KW_AUTHORIZATION);
					this.state = 266;
					this.principal();
					}
				}

				this.state = 271;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 269;
					this.match(TrinoSqlParser.KW_WITH);
					this.state = 270;
					this.properties();
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new DropSchemaContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 273;
				this.match(TrinoSqlParser.KW_DROP);
				this.state = 274;
				this.match(TrinoSqlParser.KW_SCHEMA);
				this.state = 277;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 275;
					this.match(TrinoSqlParser.KW_IF);
					this.state = 276;
					this.match(TrinoSqlParser.KW_EXISTS);
					}
					break;
				}
				this.state = 279;
				this.schemaName();
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_CASCADE || _la === TrinoSqlParser.KW_RESTRICT) {
					{
					this.state = 280;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.KW_CASCADE || _la === TrinoSqlParser.KW_RESTRICT)) {
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

			case 5:
				_localctx = new RenameSchemaContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 283;
				this.match(TrinoSqlParser.KW_ALTER);
				this.state = 284;
				this.match(TrinoSqlParser.KW_SCHEMA);
				this.state = 285;
				this.schemaName();
				this.state = 286;
				this.match(TrinoSqlParser.KW_RENAME);
				this.state = 287;
				this.match(TrinoSqlParser.KW_TO);
				this.state = 288;
				this.schemaNameCreate();
				}
				break;

			case 6:
				_localctx = new SetSchemaAuthorizationContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 290;
				this.match(TrinoSqlParser.KW_ALTER);
				this.state = 291;
				this.match(TrinoSqlParser.KW_SCHEMA);
				this.state = 292;
				this.schemaName();
				this.state = 293;
				this.match(TrinoSqlParser.KW_SET);
				this.state = 294;
				this.match(TrinoSqlParser.KW_AUTHORIZATION);
				this.state = 295;
				this.principal();
				}
				break;

			case 7:
				_localctx = new CreateTableAsSelectContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 297;
				this.match(TrinoSqlParser.KW_CREATE);
				this.state = 298;
				this.match(TrinoSqlParser.KW_TABLE);
				this.state = 302;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 299;
					this.match(TrinoSqlParser.KW_IF);
					this.state = 300;
					this.match(TrinoSqlParser.KW_NOT);
					this.state = 301;
					this.match(TrinoSqlParser.KW_EXISTS);
					}
					break;
				}
				this.state = 304;
				this.tableNameCreate();
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.T__0) {
					{
					this.state = 305;
					this.columnListCreate();
					}
				}

				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_COMMENT) {
					{
					this.state = 308;
					this.match(TrinoSqlParser.KW_COMMENT);
					this.state = 309;
					this.string();
					}
				}

				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_WITH) {
					{
					this.state = 312;
					this.match(TrinoSqlParser.KW_WITH);
					this.state = 313;
					this.properties();
					}
				}

				this.state = 316;
				this.match(TrinoSqlParser.KW_AS);
				this.state = 322;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 317;
					this.query();
					}
					break;

				case 2:
					{
					this.state = 318;
					this.match(TrinoSqlParser.T__0);
					this.state = 319;
					this.query();
					this.state = 320;
					this.match(TrinoSqlParser.T__1);
					}
					break;
				}
				this.state = 329;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 324;
					this.match(TrinoSqlParser.KW_WITH);
					this.state = 326;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.KW_NO) {
						{
						this.state = 325;
						this.match(TrinoSqlParser.KW_NO);
						}
					}

					this.state = 328;
					this.match(TrinoSqlParser.KW_DATA);
					}
					break;
				}
				}
				break;

			case 8:
				_localctx = new CreateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 331;
				this.match(TrinoSqlParser.KW_CREATE);
				this.state = 332;
				this.match(TrinoSqlParser.KW_TABLE);
				this.state = 336;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 333;
					this.match(TrinoSqlParser.KW_IF);
					this.state = 334;
					this.match(TrinoSqlParser.KW_NOT);
					this.state = 335;
					this.match(TrinoSqlParser.KW_EXISTS);
					}
					break;
				}
				this.state = 338;
				this.tableNameCreate();
				this.state = 339;
				this.match(TrinoSqlParser.T__0);
				this.state = 340;
				this.tableElement();
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 341;
					this.match(TrinoSqlParser.T__2);
					this.state = 342;
					this.tableElement();
					}
					}
					this.state = 347;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 348;
				this.match(TrinoSqlParser.T__1);
				this.state = 351;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 349;
					this.match(TrinoSqlParser.KW_COMMENT);
					this.state = 350;
					this.string();
					}
					break;
				}
				this.state = 355;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 353;
					this.match(TrinoSqlParser.KW_WITH);
					this.state = 354;
					this.properties();
					}
					break;
				}
				}
				break;

			case 9:
				_localctx = new DropTableContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 357;
				this.match(TrinoSqlParser.KW_DROP);
				this.state = 358;
				this.match(TrinoSqlParser.KW_TABLE);
				this.state = 361;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 359;
					this.match(TrinoSqlParser.KW_IF);
					this.state = 360;
					this.match(TrinoSqlParser.KW_EXISTS);
					}
					break;
				}
				this.state = 363;
				this.tableName();
				}
				break;

			case 10:
				_localctx = new InsertIntoContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 364;
				this.match(TrinoSqlParser.KW_INSERT);
				this.state = 365;
				this.match(TrinoSqlParser.KW_INTO);
				this.state = 366;
				this.tableName();
				this.state = 368;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 367;
					this.columnList();
					}
					break;
				}
				this.state = 370;
				this.query();
				}
				break;

			case 11:
				_localctx = new DeleteContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 372;
				this.match(TrinoSqlParser.KW_DELETE);
				this.state = 373;
				this.match(TrinoSqlParser.KW_FROM);
				this.state = 374;
				this.tableName();
				this.state = 377;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_WHERE) {
					{
					this.state = 375;
					this.match(TrinoSqlParser.KW_WHERE);
					this.state = 376;
					this.booleanExpression(0);
					}
				}

				}
				break;

			case 12:
				_localctx = new TruncateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 379;
				this.match(TrinoSqlParser.KW_TRUNCATE);
				this.state = 380;
				this.match(TrinoSqlParser.KW_TABLE);
				this.state = 381;
				this.tableName();
				}
				break;

			case 13:
				_localctx = new RenameTableContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 382;
				this.match(TrinoSqlParser.KW_ALTER);
				this.state = 383;
				this.match(TrinoSqlParser.KW_TABLE);
				this.state = 386;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 384;
					this.match(TrinoSqlParser.KW_IF);
					this.state = 385;
					this.match(TrinoSqlParser.KW_EXISTS);
					}
					break;
				}
				this.state = 388;
				(_localctx as RenameTableContext)._from = this.tableName();
				this.state = 389;
				this.match(TrinoSqlParser.KW_RENAME);
				this.state = 390;
				this.match(TrinoSqlParser.KW_TO);
				this.state = 391;
				(_localctx as RenameTableContext)._to = this.tableNameCreate();
				}
				break;

			case 14:
				_localctx = new CommentTableContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 393;
				this.match(TrinoSqlParser.KW_COMMENT);
				this.state = 394;
				this.match(TrinoSqlParser.KW_ON);
				this.state = 395;
				this.match(TrinoSqlParser.KW_TABLE);
				this.state = 396;
				this.tableName();
				this.state = 397;
				this.match(TrinoSqlParser.KW_IS);
				this.state = 400;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TrinoSqlParser.STRING:
				case TrinoSqlParser.UNICODE_STRING:
					{
					this.state = 398;
					this.string();
					}
					break;
				case TrinoSqlParser.KW_NULL:
					{
					this.state = 399;
					this.match(TrinoSqlParser.KW_NULL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 15:
				_localctx = new CommentColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 402;
				this.match(TrinoSqlParser.KW_COMMENT);
				this.state = 403;
				this.match(TrinoSqlParser.KW_ON);
				this.state = 404;
				this.match(TrinoSqlParser.KW_COLUMN);
				this.state = 405;
				this.columnName();
				this.state = 406;
				this.match(TrinoSqlParser.KW_IS);
				this.state = 409;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TrinoSqlParser.STRING:
				case TrinoSqlParser.UNICODE_STRING:
					{
					this.state = 407;
					this.string();
					}
					break;
				case TrinoSqlParser.KW_NULL:
					{
					this.state = 408;
					this.match(TrinoSqlParser.KW_NULL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 16:
				_localctx = new RenameColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 411;
				this.match(TrinoSqlParser.KW_ALTER);
				this.state = 412;
				this.match(TrinoSqlParser.KW_TABLE);
				this.state = 415;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 413;
					this.match(TrinoSqlParser.KW_IF);
					this.state = 414;
					this.match(TrinoSqlParser.KW_EXISTS);
					}
					break;
				}
				this.state = 417;
				this.tableName();
				this.state = 418;
				this.match(TrinoSqlParser.KW_RENAME);
				this.state = 419;
				this.match(TrinoSqlParser.KW_COLUMN);
				this.state = 422;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 420;
					this.match(TrinoSqlParser.KW_IF);
					this.state = 421;
					this.match(TrinoSqlParser.KW_EXISTS);
					}
					break;
				}
				this.state = 424;
				(_localctx as RenameColumnContext)._from = this.columnName();
				this.state = 425;
				this.match(TrinoSqlParser.KW_TO);
				this.state = 426;
				(_localctx as RenameColumnContext)._to = this.columnNameCreate();
				}
				break;

			case 17:
				_localctx = new DropColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 428;
				this.match(TrinoSqlParser.KW_ALTER);
				this.state = 429;
				this.match(TrinoSqlParser.KW_TABLE);
				this.state = 432;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 430;
					this.match(TrinoSqlParser.KW_IF);
					this.state = 431;
					this.match(TrinoSqlParser.KW_EXISTS);
					}
					break;
				}
				this.state = 434;
				this.tableName();
				this.state = 435;
				this.match(TrinoSqlParser.KW_DROP);
				this.state = 436;
				this.match(TrinoSqlParser.KW_COLUMN);
				this.state = 439;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 437;
					this.match(TrinoSqlParser.KW_IF);
					this.state = 438;
					this.match(TrinoSqlParser.KW_EXISTS);
					}
					break;
				}
				this.state = 441;
				(_localctx as DropColumnContext)._column = this.columnName();
				}
				break;

			case 18:
				_localctx = new AddColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 443;
				this.match(TrinoSqlParser.KW_ALTER);
				this.state = 444;
				this.match(TrinoSqlParser.KW_TABLE);
				this.state = 447;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 445;
					this.match(TrinoSqlParser.KW_IF);
					this.state = 446;
					this.match(TrinoSqlParser.KW_EXISTS);
					}
					break;
				}
				this.state = 449;
				this.tableName();
				this.state = 450;
				this.match(TrinoSqlParser.KW_ADD);
				this.state = 451;
				this.match(TrinoSqlParser.KW_COLUMN);
				this.state = 455;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					this.state = 452;
					this.match(TrinoSqlParser.KW_IF);
					this.state = 453;
					this.match(TrinoSqlParser.KW_NOT);
					this.state = 454;
					this.match(TrinoSqlParser.KW_EXISTS);
					}
					break;
				}
				this.state = 457;
				(_localctx as AddColumnContext)._column = this.columnDefinition();
				}
				break;

			case 19:
				_localctx = new SetTableAuthorizationContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 459;
				this.match(TrinoSqlParser.KW_ALTER);
				this.state = 460;
				this.match(TrinoSqlParser.KW_TABLE);
				this.state = 461;
				this.tableName();
				this.state = 462;
				this.match(TrinoSqlParser.KW_SET);
				this.state = 463;
				this.match(TrinoSqlParser.KW_AUTHORIZATION);
				this.state = 464;
				this.principal();
				}
				break;

			case 20:
				_localctx = new SetTablePropertiesContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 466;
				this.match(TrinoSqlParser.KW_ALTER);
				this.state = 467;
				this.match(TrinoSqlParser.KW_TABLE);
				this.state = 468;
				this.tableName();
				this.state = 469;
				this.match(TrinoSqlParser.KW_SET);
				this.state = 470;
				this.match(TrinoSqlParser.KW_PROPERTIES);
				this.state = 471;
				this.propertyAssignments();
				}
				break;

			case 21:
				_localctx = new TableExecuteContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 473;
				this.match(TrinoSqlParser.KW_ALTER);
				this.state = 474;
				this.match(TrinoSqlParser.KW_TABLE);
				this.state = 475;
				this.tableName();
				this.state = 476;
				this.match(TrinoSqlParser.KW_EXECUTE);
				this.state = 477;
				(_localctx as TableExecuteContext)._procedureName = this.identifier();
				this.state = 490;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 478;
					this.match(TrinoSqlParser.T__0);
					this.state = 487;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TrinoSqlParser.T__0) | (1 << TrinoSqlParser.KW_ADD) | (1 << TrinoSqlParser.KW_ADMIN) | (1 << TrinoSqlParser.KW_AFTER) | (1 << TrinoSqlParser.KW_ALL) | (1 << TrinoSqlParser.KW_ANALYZE) | (1 << TrinoSqlParser.KW_ANY) | (1 << TrinoSqlParser.KW_ARRAY) | (1 << TrinoSqlParser.KW_ASC) | (1 << TrinoSqlParser.KW_AT) | (1 << TrinoSqlParser.KW_AUTHORIZATION) | (1 << TrinoSqlParser.KW_BERNOULLI))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TrinoSqlParser.KW_CALL - 33)) | (1 << (TrinoSqlParser.KW_CASCADE - 33)) | (1 << (TrinoSqlParser.KW_CASE - 33)) | (1 << (TrinoSqlParser.KW_CAST - 33)) | (1 << (TrinoSqlParser.KW_CATALOGS - 33)) | (1 << (TrinoSqlParser.KW_COLUMN - 33)) | (1 << (TrinoSqlParser.KW_COLUMNS - 33)) | (1 << (TrinoSqlParser.KW_COMMENT - 33)) | (1 << (TrinoSqlParser.KW_COMMIT - 33)) | (1 << (TrinoSqlParser.KW_COMMITTED - 33)) | (1 << (TrinoSqlParser.KW_CURRENT - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_CATALOG - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_DATE - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_PATH - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_SCHEMA - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_TIME - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_TIMESTAMP - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_USER - 33)) | (1 << (TrinoSqlParser.KW_DATA - 33)) | (1 << (TrinoSqlParser.KW_DATE - 33)) | (1 << (TrinoSqlParser.KW_DAY - 33)) | (1 << (TrinoSqlParser.KW_DEFAULT - 33)) | (1 << (TrinoSqlParser.KW_DEFINER - 33)) | (1 << (TrinoSqlParser.KW_DESC - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (TrinoSqlParser.KW_DEFINE - 65)) | (1 << (TrinoSqlParser.KW_DISTRIBUTED - 65)) | (1 << (TrinoSqlParser.KW_DOUBLE - 65)) | (1 << (TrinoSqlParser.KW_EMPTY - 65)) | (1 << (TrinoSqlParser.KW_EXCLUDING - 65)) | (1 << (TrinoSqlParser.KW_EXISTS - 65)) | (1 << (TrinoSqlParser.KW_EXPLAIN - 65)) | (1 << (TrinoSqlParser.KW_EXTRACT - 65)) | (1 << (TrinoSqlParser.KW_FALSE - 65)) | (1 << (TrinoSqlParser.KW_FETCH - 65)) | (1 << (TrinoSqlParser.KW_FILTER - 65)) | (1 << (TrinoSqlParser.KW_FINAL - 65)) | (1 << (TrinoSqlParser.KW_FIRST - 65)) | (1 << (TrinoSqlParser.KW_FOLLOWING - 65)) | (1 << (TrinoSqlParser.KW_FORMAT - 65)) | (1 << (TrinoSqlParser.KW_FUNCTIONS - 65)) | (1 << (TrinoSqlParser.KW_GRANT - 65)) | (1 << (TrinoSqlParser.KW_GRANTED - 65)) | (1 << (TrinoSqlParser.KW_GRANTS - 65)) | (1 << (TrinoSqlParser.KW_DENY - 65)) | (1 << (TrinoSqlParser.KW_GRAPHVIZ - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (TrinoSqlParser.KW_GROUPING - 97)) | (1 << (TrinoSqlParser.KW_GROUPS - 97)) | (1 << (TrinoSqlParser.KW_HOUR - 97)) | (1 << (TrinoSqlParser.KW_IF - 97)) | (1 << (TrinoSqlParser.KW_IGNORE - 97)) | (1 << (TrinoSqlParser.KW_INCLUDING - 97)) | (1 << (TrinoSqlParser.KW_INITIAL - 97)) | (1 << (TrinoSqlParser.KW_INPUT - 97)) | (1 << (TrinoSqlParser.KW_INTERVAL - 97)) | (1 << (TrinoSqlParser.KW_INVOKER - 97)) | (1 << (TrinoSqlParser.KW_IO - 97)) | (1 << (TrinoSqlParser.KW_ISOLATION - 97)) | (1 << (TrinoSqlParser.KW_JSON - 97)) | (1 << (TrinoSqlParser.KW_LAST - 97)) | (1 << (TrinoSqlParser.KW_LATERAL - 97)) | (1 << (TrinoSqlParser.KW_LEVEL - 97)) | (1 << (TrinoSqlParser.KW_LIMIT - 97)) | (1 << (TrinoSqlParser.KW_LOCAL - 97)) | (1 << (TrinoSqlParser.KW_LOCALTIME - 97)) | (1 << (TrinoSqlParser.KW_LOCALTIMESTAMP - 97)) | (1 << (TrinoSqlParser.KW_LOGICAL - 97)) | (1 << (TrinoSqlParser.KW_MAP - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (TrinoSqlParser.KW_MATCH - 129)) | (1 << (TrinoSqlParser.KW_MATCHED - 129)) | (1 << (TrinoSqlParser.KW_MATCHES - 129)) | (1 << (TrinoSqlParser.KW_MATCH_RECOGNIZE - 129)) | (1 << (TrinoSqlParser.KW_MATERIALIZED - 129)) | (1 << (TrinoSqlParser.KW_MEASURES - 129)) | (1 << (TrinoSqlParser.KW_MERGE - 129)) | (1 << (TrinoSqlParser.KW_MINUTE - 129)) | (1 << (TrinoSqlParser.KW_MONTH - 129)) | (1 << (TrinoSqlParser.KW_NEXT - 129)) | (1 << (TrinoSqlParser.KW_NFC - 129)) | (1 << (TrinoSqlParser.KW_NFD - 129)) | (1 << (TrinoSqlParser.KW_NFKC - 129)) | (1 << (TrinoSqlParser.KW_NFKD - 129)) | (1 << (TrinoSqlParser.KW_NO - 129)) | (1 << (TrinoSqlParser.KW_NONE - 129)) | (1 << (TrinoSqlParser.KW_NORMALIZE - 129)) | (1 << (TrinoSqlParser.KW_NOT - 129)) | (1 << (TrinoSqlParser.KW_NULL - 129)) | (1 << (TrinoSqlParser.KW_NULLIF - 129)) | (1 << (TrinoSqlParser.KW_NULLS - 129)) | (1 << (TrinoSqlParser.KW_OFFSET - 129)) | (1 << (TrinoSqlParser.KW_OMIT - 129)) | (1 << (TrinoSqlParser.KW_ONE - 129)) | (1 << (TrinoSqlParser.KW_ONLY - 129)) | (1 << (TrinoSqlParser.KW_OPTION - 129)) | (1 << (TrinoSqlParser.KW_ORDINALITY - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (TrinoSqlParser.KW_OUTPUT - 161)) | (1 << (TrinoSqlParser.KW_OVER - 161)) | (1 << (TrinoSqlParser.KW_PARTITION - 161)) | (1 << (TrinoSqlParser.KW_PARTITIONS - 161)) | (1 << (TrinoSqlParser.KW_PAST - 161)) | (1 << (TrinoSqlParser.KW_PATH - 161)) | (1 << (TrinoSqlParser.KW_PATTERN - 161)) | (1 << (TrinoSqlParser.KW_PER - 161)) | (1 << (TrinoSqlParser.KW_PERMUTE - 161)) | (1 << (TrinoSqlParser.KW_POSITION - 161)) | (1 << (TrinoSqlParser.KW_PRECEDING - 161)) | (1 << (TrinoSqlParser.KW_PRECISION - 161)) | (1 << (TrinoSqlParser.KW_PRIVILEGES - 161)) | (1 << (TrinoSqlParser.KW_PROPERTIES - 161)) | (1 << (TrinoSqlParser.KW_RANGE - 161)) | (1 << (TrinoSqlParser.KW_READ - 161)) | (1 << (TrinoSqlParser.KW_REFRESH - 161)) | (1 << (TrinoSqlParser.KW_RENAME - 161)) | (1 << (TrinoSqlParser.KW_REPEATABLE - 161)) | (1 << (TrinoSqlParser.KW_REPLACE - 161)) | (1 << (TrinoSqlParser.KW_RESET - 161)) | (1 << (TrinoSqlParser.KW_RESPECT - 161)) | (1 << (TrinoSqlParser.KW_RESTRICT - 161)) | (1 << (TrinoSqlParser.KW_REVOKE - 161)) | (1 << (TrinoSqlParser.KW_ROLE - 161)) | (1 << (TrinoSqlParser.KW_ROLES - 161)) | (1 << (TrinoSqlParser.KW_ROLLBACK - 161)) | (1 << (TrinoSqlParser.KW_ROW - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (TrinoSqlParser.KW_ROWS - 193)) | (1 << (TrinoSqlParser.KW_RUNNING - 193)) | (1 << (TrinoSqlParser.KW_SCHEMA - 193)) | (1 << (TrinoSqlParser.KW_SCHEMAS - 193)) | (1 << (TrinoSqlParser.KW_SECOND - 193)) | (1 << (TrinoSqlParser.KW_SECURITY - 193)) | (1 << (TrinoSqlParser.KW_SEEK - 193)) | (1 << (TrinoSqlParser.KW_SERIALIZABLE - 193)) | (1 << (TrinoSqlParser.KW_SESSION - 193)) | (1 << (TrinoSqlParser.KW_SET - 193)) | (1 << (TrinoSqlParser.KW_SETS - 193)) | (1 << (TrinoSqlParser.KW_SHOW - 193)) | (1 << (TrinoSqlParser.KW_SOME - 193)) | (1 << (TrinoSqlParser.KW_START - 193)) | (1 << (TrinoSqlParser.KW_STATS - 193)) | (1 << (TrinoSqlParser.KW_SUBSET - 193)) | (1 << (TrinoSqlParser.KW_SUBSTRING - 193)) | (1 << (TrinoSqlParser.KW_SYSTEM - 193)) | (1 << (TrinoSqlParser.KW_TABLES - 193)) | (1 << (TrinoSqlParser.KW_TABLESAMPLE - 193)) | (1 << (TrinoSqlParser.KW_TEXT - 193)) | (1 << (TrinoSqlParser.KW_TIES - 193)) | (1 << (TrinoSqlParser.KW_TIME - 193)) | (1 << (TrinoSqlParser.KW_TIMESTAMP - 193)) | (1 << (TrinoSqlParser.KW_TO - 193)) | (1 << (TrinoSqlParser.KW_TRANSACTION - 193)) | (1 << (TrinoSqlParser.KW_TRUNCATE - 193)) | (1 << (TrinoSqlParser.KW_TRUE - 193)) | (1 << (TrinoSqlParser.KW_TRY_CAST - 193)))) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (TrinoSqlParser.KW_TYPE - 225)) | (1 << (TrinoSqlParser.KW_UNBOUNDED - 225)) | (1 << (TrinoSqlParser.KW_UNCOMMITTED - 225)) | (1 << (TrinoSqlParser.KW_UNMATCHED - 225)) | (1 << (TrinoSqlParser.KW_UPDATE - 225)) | (1 << (TrinoSqlParser.KW_USE - 225)) | (1 << (TrinoSqlParser.KW_USER - 225)) | (1 << (TrinoSqlParser.KW_VALIDATE - 225)) | (1 << (TrinoSqlParser.KW_VERBOSE - 225)) | (1 << (TrinoSqlParser.KW_VIEW - 225)) | (1 << (TrinoSqlParser.KW_WINDOW - 225)) | (1 << (TrinoSqlParser.KW_WITHOUT - 225)) | (1 << (TrinoSqlParser.KW_WORK - 225)) | (1 << (TrinoSqlParser.KW_WRITE - 225)) | (1 << (TrinoSqlParser.KW_YEAR - 225)) | (1 << (TrinoSqlParser.KW_ZONE - 225)) | (1 << (TrinoSqlParser.PLUS - 225)) | (1 << (TrinoSqlParser.MINUS - 225)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (TrinoSqlParser.QUESTION_MARK - 261)) | (1 << (TrinoSqlParser.STRING - 261)) | (1 << (TrinoSqlParser.UNICODE_STRING - 261)) | (1 << (TrinoSqlParser.BINARY_LITERAL - 261)) | (1 << (TrinoSqlParser.INTEGER_VALUE - 261)) | (1 << (TrinoSqlParser.DECIMAL_VALUE - 261)) | (1 << (TrinoSqlParser.DOUBLE_VALUE - 261)) | (1 << (TrinoSqlParser.IDENTIFIER - 261)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 261)))) !== 0)) {
						{
						this.state = 479;
						this.callArgument();
						this.state = 484;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === TrinoSqlParser.T__2) {
							{
							{
							this.state = 480;
							this.match(TrinoSqlParser.T__2);
							this.state = 481;
							this.callArgument();
							}
							}
							this.state = 486;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
					}

					this.state = 489;
					this.match(TrinoSqlParser.T__1);
					}
					break;
				}
				this.state = 494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_WHERE) {
					{
					this.state = 492;
					this.match(TrinoSqlParser.KW_WHERE);
					this.state = 493;
					(_localctx as TableExecuteContext)._where = this.booleanExpression(0);
					}
				}

				}
				break;

			case 22:
				_localctx = new AnalyzeContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 496;
				this.match(TrinoSqlParser.KW_ANALYZE);
				this.state = 497;
				this.tableName();
				this.state = 500;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 498;
					this.match(TrinoSqlParser.KW_WITH);
					this.state = 499;
					this.properties();
					}
					break;
				}
				}
				break;

			case 23:
				_localctx = new CreateMaterializedViewContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 502;
				this.match(TrinoSqlParser.KW_CREATE);
				this.state = 505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_OR) {
					{
					this.state = 503;
					this.match(TrinoSqlParser.KW_OR);
					this.state = 504;
					this.match(TrinoSqlParser.KW_REPLACE);
					}
				}

				this.state = 507;
				this.match(TrinoSqlParser.KW_MATERIALIZED);
				this.state = 508;
				this.match(TrinoSqlParser.KW_VIEW);
				this.state = 512;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 509;
					this.match(TrinoSqlParser.KW_IF);
					this.state = 510;
					this.match(TrinoSqlParser.KW_NOT);
					this.state = 511;
					this.match(TrinoSqlParser.KW_EXISTS);
					}
					break;
				}
				this.state = 514;
				this.viewNameCreate();
				this.state = 517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_COMMENT) {
					{
					this.state = 515;
					this.match(TrinoSqlParser.KW_COMMENT);
					this.state = 516;
					this.string();
					}
				}

				this.state = 521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_WITH) {
					{
					this.state = 519;
					this.match(TrinoSqlParser.KW_WITH);
					this.state = 520;
					this.properties();
					}
				}

				this.state = 523;
				this.match(TrinoSqlParser.KW_AS);
				this.state = 524;
				this.query();
				}
				break;

			case 24:
				_localctx = new CreateViewContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 526;
				this.match(TrinoSqlParser.KW_CREATE);
				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_OR) {
					{
					this.state = 527;
					this.match(TrinoSqlParser.KW_OR);
					this.state = 528;
					this.match(TrinoSqlParser.KW_REPLACE);
					}
				}

				this.state = 531;
				this.match(TrinoSqlParser.KW_VIEW);
				this.state = 532;
				this.viewNameCreate();
				this.state = 535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_COMMENT) {
					{
					this.state = 533;
					this.match(TrinoSqlParser.KW_COMMENT);
					this.state = 534;
					this.string();
					}
				}

				this.state = 539;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_SECURITY) {
					{
					this.state = 537;
					this.match(TrinoSqlParser.KW_SECURITY);
					this.state = 538;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.KW_DEFINER || _la === TrinoSqlParser.KW_INVOKER)) {
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

				this.state = 541;
				this.match(TrinoSqlParser.KW_AS);
				this.state = 542;
				this.query();
				}
				break;

			case 25:
				_localctx = new RefreshMaterializedViewContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 544;
				this.match(TrinoSqlParser.KW_REFRESH);
				this.state = 545;
				this.match(TrinoSqlParser.KW_MATERIALIZED);
				this.state = 546;
				this.match(TrinoSqlParser.KW_VIEW);
				this.state = 547;
				this.viewName();
				}
				break;

			case 26:
				_localctx = new DropMaterializedViewContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 548;
				this.match(TrinoSqlParser.KW_DROP);
				this.state = 549;
				this.match(TrinoSqlParser.KW_MATERIALIZED);
				this.state = 550;
				this.match(TrinoSqlParser.KW_VIEW);
				this.state = 553;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 551;
					this.match(TrinoSqlParser.KW_IF);
					this.state = 552;
					this.match(TrinoSqlParser.KW_EXISTS);
					}
					break;
				}
				this.state = 555;
				this.viewName();
				}
				break;

			case 27:
				_localctx = new RenameMaterializedViewContext(_localctx);
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 556;
				this.match(TrinoSqlParser.KW_ALTER);
				this.state = 557;
				this.match(TrinoSqlParser.KW_MATERIALIZED);
				this.state = 558;
				this.match(TrinoSqlParser.KW_VIEW);
				this.state = 561;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 559;
					this.match(TrinoSqlParser.KW_IF);
					this.state = 560;
					this.match(TrinoSqlParser.KW_EXISTS);
					}
					break;
				}
				this.state = 563;
				(_localctx as RenameMaterializedViewContext)._from = this.viewName();
				this.state = 564;
				this.match(TrinoSqlParser.KW_RENAME);
				this.state = 565;
				this.match(TrinoSqlParser.KW_TO);
				this.state = 566;
				(_localctx as RenameMaterializedViewContext)._to = this.viewNameCreate();
				}
				break;

			case 28:
				_localctx = new SetMaterializedViewPropertiesContext(_localctx);
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 568;
				this.match(TrinoSqlParser.KW_ALTER);
				this.state = 569;
				this.match(TrinoSqlParser.KW_MATERIALIZED);
				this.state = 570;
				this.match(TrinoSqlParser.KW_VIEW);
				this.state = 571;
				this.viewName();
				this.state = 572;
				this.match(TrinoSqlParser.KW_SET);
				this.state = 573;
				this.match(TrinoSqlParser.KW_PROPERTIES);
				this.state = 574;
				this.propertyAssignments();
				}
				break;

			case 29:
				_localctx = new DropViewContext(_localctx);
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 576;
				this.match(TrinoSqlParser.KW_DROP);
				this.state = 577;
				this.match(TrinoSqlParser.KW_VIEW);
				this.state = 580;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 578;
					this.match(TrinoSqlParser.KW_IF);
					this.state = 579;
					this.match(TrinoSqlParser.KW_EXISTS);
					}
					break;
				}
				this.state = 582;
				this.viewName();
				}
				break;

			case 30:
				_localctx = new RenameViewContext(_localctx);
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 583;
				this.match(TrinoSqlParser.KW_ALTER);
				this.state = 584;
				this.match(TrinoSqlParser.KW_VIEW);
				this.state = 585;
				(_localctx as RenameViewContext)._from = this.viewName();
				this.state = 586;
				this.match(TrinoSqlParser.KW_RENAME);
				this.state = 587;
				this.match(TrinoSqlParser.KW_TO);
				this.state = 588;
				(_localctx as RenameViewContext)._to = this.viewNameCreate();
				}
				break;

			case 31:
				_localctx = new SetViewAuthorizationContext(_localctx);
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 590;
				this.match(TrinoSqlParser.KW_ALTER);
				this.state = 591;
				this.match(TrinoSqlParser.KW_VIEW);
				this.state = 592;
				(_localctx as SetViewAuthorizationContext)._from = this.viewName();
				this.state = 593;
				this.match(TrinoSqlParser.KW_SET);
				this.state = 594;
				this.match(TrinoSqlParser.KW_AUTHORIZATION);
				this.state = 595;
				this.principal();
				}
				break;

			case 32:
				_localctx = new CallContext(_localctx);
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 597;
				this.match(TrinoSqlParser.KW_CALL);
				this.state = 598;
				this.functionName();
				this.state = 599;
				this.match(TrinoSqlParser.T__0);
				this.state = 608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TrinoSqlParser.T__0) | (1 << TrinoSqlParser.KW_ADD) | (1 << TrinoSqlParser.KW_ADMIN) | (1 << TrinoSqlParser.KW_AFTER) | (1 << TrinoSqlParser.KW_ALL) | (1 << TrinoSqlParser.KW_ANALYZE) | (1 << TrinoSqlParser.KW_ANY) | (1 << TrinoSqlParser.KW_ARRAY) | (1 << TrinoSqlParser.KW_ASC) | (1 << TrinoSqlParser.KW_AT) | (1 << TrinoSqlParser.KW_AUTHORIZATION) | (1 << TrinoSqlParser.KW_BERNOULLI))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TrinoSqlParser.KW_CALL - 33)) | (1 << (TrinoSqlParser.KW_CASCADE - 33)) | (1 << (TrinoSqlParser.KW_CASE - 33)) | (1 << (TrinoSqlParser.KW_CAST - 33)) | (1 << (TrinoSqlParser.KW_CATALOGS - 33)) | (1 << (TrinoSqlParser.KW_COLUMN - 33)) | (1 << (TrinoSqlParser.KW_COLUMNS - 33)) | (1 << (TrinoSqlParser.KW_COMMENT - 33)) | (1 << (TrinoSqlParser.KW_COMMIT - 33)) | (1 << (TrinoSqlParser.KW_COMMITTED - 33)) | (1 << (TrinoSqlParser.KW_CURRENT - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_CATALOG - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_DATE - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_PATH - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_SCHEMA - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_TIME - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_TIMESTAMP - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_USER - 33)) | (1 << (TrinoSqlParser.KW_DATA - 33)) | (1 << (TrinoSqlParser.KW_DATE - 33)) | (1 << (TrinoSqlParser.KW_DAY - 33)) | (1 << (TrinoSqlParser.KW_DEFAULT - 33)) | (1 << (TrinoSqlParser.KW_DEFINER - 33)) | (1 << (TrinoSqlParser.KW_DESC - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (TrinoSqlParser.KW_DEFINE - 65)) | (1 << (TrinoSqlParser.KW_DISTRIBUTED - 65)) | (1 << (TrinoSqlParser.KW_DOUBLE - 65)) | (1 << (TrinoSqlParser.KW_EMPTY - 65)) | (1 << (TrinoSqlParser.KW_EXCLUDING - 65)) | (1 << (TrinoSqlParser.KW_EXISTS - 65)) | (1 << (TrinoSqlParser.KW_EXPLAIN - 65)) | (1 << (TrinoSqlParser.KW_EXTRACT - 65)) | (1 << (TrinoSqlParser.KW_FALSE - 65)) | (1 << (TrinoSqlParser.KW_FETCH - 65)) | (1 << (TrinoSqlParser.KW_FILTER - 65)) | (1 << (TrinoSqlParser.KW_FINAL - 65)) | (1 << (TrinoSqlParser.KW_FIRST - 65)) | (1 << (TrinoSqlParser.KW_FOLLOWING - 65)) | (1 << (TrinoSqlParser.KW_FORMAT - 65)) | (1 << (TrinoSqlParser.KW_FUNCTIONS - 65)) | (1 << (TrinoSqlParser.KW_GRANT - 65)) | (1 << (TrinoSqlParser.KW_GRANTED - 65)) | (1 << (TrinoSqlParser.KW_GRANTS - 65)) | (1 << (TrinoSqlParser.KW_DENY - 65)) | (1 << (TrinoSqlParser.KW_GRAPHVIZ - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (TrinoSqlParser.KW_GROUPING - 97)) | (1 << (TrinoSqlParser.KW_GROUPS - 97)) | (1 << (TrinoSqlParser.KW_HOUR - 97)) | (1 << (TrinoSqlParser.KW_IF - 97)) | (1 << (TrinoSqlParser.KW_IGNORE - 97)) | (1 << (TrinoSqlParser.KW_INCLUDING - 97)) | (1 << (TrinoSqlParser.KW_INITIAL - 97)) | (1 << (TrinoSqlParser.KW_INPUT - 97)) | (1 << (TrinoSqlParser.KW_INTERVAL - 97)) | (1 << (TrinoSqlParser.KW_INVOKER - 97)) | (1 << (TrinoSqlParser.KW_IO - 97)) | (1 << (TrinoSqlParser.KW_ISOLATION - 97)) | (1 << (TrinoSqlParser.KW_JSON - 97)) | (1 << (TrinoSqlParser.KW_LAST - 97)) | (1 << (TrinoSqlParser.KW_LATERAL - 97)) | (1 << (TrinoSqlParser.KW_LEVEL - 97)) | (1 << (TrinoSqlParser.KW_LIMIT - 97)) | (1 << (TrinoSqlParser.KW_LOCAL - 97)) | (1 << (TrinoSqlParser.KW_LOCALTIME - 97)) | (1 << (TrinoSqlParser.KW_LOCALTIMESTAMP - 97)) | (1 << (TrinoSqlParser.KW_LOGICAL - 97)) | (1 << (TrinoSqlParser.KW_MAP - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (TrinoSqlParser.KW_MATCH - 129)) | (1 << (TrinoSqlParser.KW_MATCHED - 129)) | (1 << (TrinoSqlParser.KW_MATCHES - 129)) | (1 << (TrinoSqlParser.KW_MATCH_RECOGNIZE - 129)) | (1 << (TrinoSqlParser.KW_MATERIALIZED - 129)) | (1 << (TrinoSqlParser.KW_MEASURES - 129)) | (1 << (TrinoSqlParser.KW_MERGE - 129)) | (1 << (TrinoSqlParser.KW_MINUTE - 129)) | (1 << (TrinoSqlParser.KW_MONTH - 129)) | (1 << (TrinoSqlParser.KW_NEXT - 129)) | (1 << (TrinoSqlParser.KW_NFC - 129)) | (1 << (TrinoSqlParser.KW_NFD - 129)) | (1 << (TrinoSqlParser.KW_NFKC - 129)) | (1 << (TrinoSqlParser.KW_NFKD - 129)) | (1 << (TrinoSqlParser.KW_NO - 129)) | (1 << (TrinoSqlParser.KW_NONE - 129)) | (1 << (TrinoSqlParser.KW_NORMALIZE - 129)) | (1 << (TrinoSqlParser.KW_NOT - 129)) | (1 << (TrinoSqlParser.KW_NULL - 129)) | (1 << (TrinoSqlParser.KW_NULLIF - 129)) | (1 << (TrinoSqlParser.KW_NULLS - 129)) | (1 << (TrinoSqlParser.KW_OFFSET - 129)) | (1 << (TrinoSqlParser.KW_OMIT - 129)) | (1 << (TrinoSqlParser.KW_ONE - 129)) | (1 << (TrinoSqlParser.KW_ONLY - 129)) | (1 << (TrinoSqlParser.KW_OPTION - 129)) | (1 << (TrinoSqlParser.KW_ORDINALITY - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (TrinoSqlParser.KW_OUTPUT - 161)) | (1 << (TrinoSqlParser.KW_OVER - 161)) | (1 << (TrinoSqlParser.KW_PARTITION - 161)) | (1 << (TrinoSqlParser.KW_PARTITIONS - 161)) | (1 << (TrinoSqlParser.KW_PAST - 161)) | (1 << (TrinoSqlParser.KW_PATH - 161)) | (1 << (TrinoSqlParser.KW_PATTERN - 161)) | (1 << (TrinoSqlParser.KW_PER - 161)) | (1 << (TrinoSqlParser.KW_PERMUTE - 161)) | (1 << (TrinoSqlParser.KW_POSITION - 161)) | (1 << (TrinoSqlParser.KW_PRECEDING - 161)) | (1 << (TrinoSqlParser.KW_PRECISION - 161)) | (1 << (TrinoSqlParser.KW_PRIVILEGES - 161)) | (1 << (TrinoSqlParser.KW_PROPERTIES - 161)) | (1 << (TrinoSqlParser.KW_RANGE - 161)) | (1 << (TrinoSqlParser.KW_READ - 161)) | (1 << (TrinoSqlParser.KW_REFRESH - 161)) | (1 << (TrinoSqlParser.KW_RENAME - 161)) | (1 << (TrinoSqlParser.KW_REPEATABLE - 161)) | (1 << (TrinoSqlParser.KW_REPLACE - 161)) | (1 << (TrinoSqlParser.KW_RESET - 161)) | (1 << (TrinoSqlParser.KW_RESPECT - 161)) | (1 << (TrinoSqlParser.KW_RESTRICT - 161)) | (1 << (TrinoSqlParser.KW_REVOKE - 161)) | (1 << (TrinoSqlParser.KW_ROLE - 161)) | (1 << (TrinoSqlParser.KW_ROLES - 161)) | (1 << (TrinoSqlParser.KW_ROLLBACK - 161)) | (1 << (TrinoSqlParser.KW_ROW - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (TrinoSqlParser.KW_ROWS - 193)) | (1 << (TrinoSqlParser.KW_RUNNING - 193)) | (1 << (TrinoSqlParser.KW_SCHEMA - 193)) | (1 << (TrinoSqlParser.KW_SCHEMAS - 193)) | (1 << (TrinoSqlParser.KW_SECOND - 193)) | (1 << (TrinoSqlParser.KW_SECURITY - 193)) | (1 << (TrinoSqlParser.KW_SEEK - 193)) | (1 << (TrinoSqlParser.KW_SERIALIZABLE - 193)) | (1 << (TrinoSqlParser.KW_SESSION - 193)) | (1 << (TrinoSqlParser.KW_SET - 193)) | (1 << (TrinoSqlParser.KW_SETS - 193)) | (1 << (TrinoSqlParser.KW_SHOW - 193)) | (1 << (TrinoSqlParser.KW_SOME - 193)) | (1 << (TrinoSqlParser.KW_START - 193)) | (1 << (TrinoSqlParser.KW_STATS - 193)) | (1 << (TrinoSqlParser.KW_SUBSET - 193)) | (1 << (TrinoSqlParser.KW_SUBSTRING - 193)) | (1 << (TrinoSqlParser.KW_SYSTEM - 193)) | (1 << (TrinoSqlParser.KW_TABLES - 193)) | (1 << (TrinoSqlParser.KW_TABLESAMPLE - 193)) | (1 << (TrinoSqlParser.KW_TEXT - 193)) | (1 << (TrinoSqlParser.KW_TIES - 193)) | (1 << (TrinoSqlParser.KW_TIME - 193)) | (1 << (TrinoSqlParser.KW_TIMESTAMP - 193)) | (1 << (TrinoSqlParser.KW_TO - 193)) | (1 << (TrinoSqlParser.KW_TRANSACTION - 193)) | (1 << (TrinoSqlParser.KW_TRUNCATE - 193)) | (1 << (TrinoSqlParser.KW_TRUE - 193)) | (1 << (TrinoSqlParser.KW_TRY_CAST - 193)))) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (TrinoSqlParser.KW_TYPE - 225)) | (1 << (TrinoSqlParser.KW_UNBOUNDED - 225)) | (1 << (TrinoSqlParser.KW_UNCOMMITTED - 225)) | (1 << (TrinoSqlParser.KW_UNMATCHED - 225)) | (1 << (TrinoSqlParser.KW_UPDATE - 225)) | (1 << (TrinoSqlParser.KW_USE - 225)) | (1 << (TrinoSqlParser.KW_USER - 225)) | (1 << (TrinoSqlParser.KW_VALIDATE - 225)) | (1 << (TrinoSqlParser.KW_VERBOSE - 225)) | (1 << (TrinoSqlParser.KW_VIEW - 225)) | (1 << (TrinoSqlParser.KW_WINDOW - 225)) | (1 << (TrinoSqlParser.KW_WITHOUT - 225)) | (1 << (TrinoSqlParser.KW_WORK - 225)) | (1 << (TrinoSqlParser.KW_WRITE - 225)) | (1 << (TrinoSqlParser.KW_YEAR - 225)) | (1 << (TrinoSqlParser.KW_ZONE - 225)) | (1 << (TrinoSqlParser.PLUS - 225)) | (1 << (TrinoSqlParser.MINUS - 225)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (TrinoSqlParser.QUESTION_MARK - 261)) | (1 << (TrinoSqlParser.STRING - 261)) | (1 << (TrinoSqlParser.UNICODE_STRING - 261)) | (1 << (TrinoSqlParser.BINARY_LITERAL - 261)) | (1 << (TrinoSqlParser.INTEGER_VALUE - 261)) | (1 << (TrinoSqlParser.DECIMAL_VALUE - 261)) | (1 << (TrinoSqlParser.DOUBLE_VALUE - 261)) | (1 << (TrinoSqlParser.IDENTIFIER - 261)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 261)))) !== 0)) {
					{
					this.state = 600;
					this.callArgument();
					this.state = 605;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 601;
						this.match(TrinoSqlParser.T__2);
						this.state = 602;
						this.callArgument();
						}
						}
						this.state = 607;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 610;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 33:
				_localctx = new CreateRoleContext(_localctx);
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 612;
				this.match(TrinoSqlParser.KW_CREATE);
				this.state = 613;
				this.match(TrinoSqlParser.KW_ROLE);
				this.state = 614;
				(_localctx as CreateRoleContext)._name = this.identifier();
				this.state = 618;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
				case 1:
					{
					this.state = 615;
					this.match(TrinoSqlParser.KW_WITH);
					this.state = 616;
					this.match(TrinoSqlParser.KW_ADMIN);
					this.state = 617;
					this.grantor();
					}
					break;
				}
				this.state = 622;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_IN) {
					{
					this.state = 620;
					this.match(TrinoSqlParser.KW_IN);
					this.state = 621;
					this.catalogName();
					}
				}

				}
				break;

			case 34:
				_localctx = new DropRoleContext(_localctx);
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 624;
				this.match(TrinoSqlParser.KW_DROP);
				this.state = 625;
				this.match(TrinoSqlParser.KW_ROLE);
				this.state = 626;
				(_localctx as DropRoleContext)._name = this.identifier();
				}
				break;

			case 35:
				_localctx = new GrantRolesContext(_localctx);
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 627;
				this.match(TrinoSqlParser.KW_GRANT);
				this.state = 628;
				this.roles();
				this.state = 629;
				this.match(TrinoSqlParser.KW_TO);
				this.state = 630;
				this.principal();
				this.state = 635;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 631;
					this.match(TrinoSqlParser.T__2);
					this.state = 632;
					this.principal();
					}
					}
					this.state = 637;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 641;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
				case 1:
					{
					this.state = 638;
					this.match(TrinoSqlParser.KW_WITH);
					this.state = 639;
					this.match(TrinoSqlParser.KW_ADMIN);
					this.state = 640;
					this.match(TrinoSqlParser.KW_OPTION);
					}
					break;
				}
				this.state = 646;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_GRANTED) {
					{
					this.state = 643;
					this.match(TrinoSqlParser.KW_GRANTED);
					this.state = 644;
					this.match(TrinoSqlParser.KW_BY);
					this.state = 645;
					this.grantor();
					}
				}

				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_IN) {
					{
					this.state = 648;
					this.match(TrinoSqlParser.KW_IN);
					this.state = 649;
					this.catalogName();
					}
				}

				}
				break;

			case 36:
				_localctx = new RevokeRolesContext(_localctx);
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 652;
				this.match(TrinoSqlParser.KW_REVOKE);
				this.state = 656;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 653;
					this.match(TrinoSqlParser.KW_ADMIN);
					this.state = 654;
					this.match(TrinoSqlParser.KW_OPTION);
					this.state = 655;
					this.match(TrinoSqlParser.KW_FOR);
					}
					break;
				}
				this.state = 658;
				this.roles();
				this.state = 659;
				this.match(TrinoSqlParser.KW_FROM);
				this.state = 660;
				this.principal();
				this.state = 665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 661;
					this.match(TrinoSqlParser.T__2);
					this.state = 662;
					this.principal();
					}
					}
					this.state = 667;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_GRANTED) {
					{
					this.state = 668;
					this.match(TrinoSqlParser.KW_GRANTED);
					this.state = 669;
					this.match(TrinoSqlParser.KW_BY);
					this.state = 670;
					this.grantor();
					}
				}

				this.state = 675;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_IN) {
					{
					this.state = 673;
					this.match(TrinoSqlParser.KW_IN);
					this.state = 674;
					this.catalogName();
					}
				}

				}
				break;

			case 37:
				_localctx = new SetRoleContext(_localctx);
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 677;
				this.match(TrinoSqlParser.KW_SET);
				this.state = 678;
				this.match(TrinoSqlParser.KW_ROLE);
				this.state = 682;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
				case 1:
					{
					this.state = 679;
					this.match(TrinoSqlParser.KW_ALL);
					}
					break;

				case 2:
					{
					this.state = 680;
					this.match(TrinoSqlParser.KW_NONE);
					}
					break;

				case 3:
					{
					this.state = 681;
					(_localctx as SetRoleContext)._role = this.identifier();
					}
					break;
				}
				this.state = 686;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_IN) {
					{
					this.state = 684;
					this.match(TrinoSqlParser.KW_IN);
					this.state = 685;
					this.catalogName();
					}
				}

				}
				break;

			case 38:
				_localctx = new GrantContext(_localctx);
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 688;
				this.match(TrinoSqlParser.KW_GRANT);
				this.state = 699;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TrinoSqlParser.KW_DELETE:
				case TrinoSqlParser.KW_INSERT:
				case TrinoSqlParser.KW_SELECT:
				case TrinoSqlParser.KW_UPDATE:
					{
					this.state = 689;
					this.privilege();
					this.state = 694;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 690;
						this.match(TrinoSqlParser.T__2);
						this.state = 691;
						this.privilege();
						}
						}
						this.state = 696;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case TrinoSqlParser.KW_ALL:
					{
					this.state = 697;
					this.match(TrinoSqlParser.KW_ALL);
					this.state = 698;
					this.match(TrinoSqlParser.KW_PRIVILEGES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 701;
				this.match(TrinoSqlParser.KW_ON);
				this.state = 710;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
				case 1:
					{
					this.state = 703;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
					case 1:
						{
						this.state = 702;
						this.match(TrinoSqlParser.KW_SCHEMA);
						}
						break;
					}
					this.state = 705;
					this.schemaName();
					}
					break;

				case 2:
					{
					this.state = 707;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.KW_TABLE) {
						{
						this.state = 706;
						this.match(TrinoSqlParser.KW_TABLE);
						}
					}

					this.state = 709;
					this.tableName();
					}
					break;
				}
				this.state = 712;
				this.match(TrinoSqlParser.KW_TO);
				this.state = 713;
				(_localctx as GrantContext)._grantee = this.principal();
				this.state = 717;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
				case 1:
					{
					this.state = 714;
					this.match(TrinoSqlParser.KW_WITH);
					this.state = 715;
					this.match(TrinoSqlParser.KW_GRANT);
					this.state = 716;
					this.match(TrinoSqlParser.KW_OPTION);
					}
					break;
				}
				}
				break;

			case 39:
				_localctx = new DenyContext(_localctx);
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 719;
				this.match(TrinoSqlParser.KW_DENY);
				this.state = 730;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TrinoSqlParser.KW_DELETE:
				case TrinoSqlParser.KW_INSERT:
				case TrinoSqlParser.KW_SELECT:
				case TrinoSqlParser.KW_UPDATE:
					{
					this.state = 720;
					this.privilege();
					this.state = 725;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 721;
						this.match(TrinoSqlParser.T__2);
						this.state = 722;
						this.privilege();
						}
						}
						this.state = 727;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case TrinoSqlParser.KW_ALL:
					{
					this.state = 728;
					this.match(TrinoSqlParser.KW_ALL);
					this.state = 729;
					this.match(TrinoSqlParser.KW_PRIVILEGES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 732;
				this.match(TrinoSqlParser.KW_ON);
				this.state = 741;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 734;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
					case 1:
						{
						this.state = 733;
						this.match(TrinoSqlParser.KW_SCHEMA);
						}
						break;
					}
					this.state = 736;
					this.schemaName();
					}
					break;

				case 2:
					{
					this.state = 738;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.KW_TABLE) {
						{
						this.state = 737;
						this.match(TrinoSqlParser.KW_TABLE);
						}
					}

					this.state = 740;
					this.tableName();
					}
					break;
				}
				this.state = 743;
				this.match(TrinoSqlParser.KW_TO);
				this.state = 744;
				(_localctx as DenyContext)._grantee = this.principal();
				}
				break;

			case 40:
				_localctx = new RevokeContext(_localctx);
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 746;
				this.match(TrinoSqlParser.KW_REVOKE);
				this.state = 750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_GRANT) {
					{
					this.state = 747;
					this.match(TrinoSqlParser.KW_GRANT);
					this.state = 748;
					this.match(TrinoSqlParser.KW_OPTION);
					this.state = 749;
					this.match(TrinoSqlParser.KW_FOR);
					}
				}

				this.state = 762;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TrinoSqlParser.KW_DELETE:
				case TrinoSqlParser.KW_INSERT:
				case TrinoSqlParser.KW_SELECT:
				case TrinoSqlParser.KW_UPDATE:
					{
					this.state = 752;
					this.privilege();
					this.state = 757;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 753;
						this.match(TrinoSqlParser.T__2);
						this.state = 754;
						this.privilege();
						}
						}
						this.state = 759;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case TrinoSqlParser.KW_ALL:
					{
					this.state = 760;
					this.match(TrinoSqlParser.KW_ALL);
					this.state = 761;
					this.match(TrinoSqlParser.KW_PRIVILEGES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 764;
				this.match(TrinoSqlParser.KW_ON);
				this.state = 773;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
				case 1:
					{
					this.state = 766;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
					case 1:
						{
						this.state = 765;
						this.match(TrinoSqlParser.KW_SCHEMA);
						}
						break;
					}
					this.state = 768;
					this.schemaName();
					}
					break;

				case 2:
					{
					this.state = 770;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.KW_TABLE) {
						{
						this.state = 769;
						this.match(TrinoSqlParser.KW_TABLE);
						}
					}

					this.state = 772;
					this.tableName();
					}
					break;
				}
				this.state = 775;
				this.match(TrinoSqlParser.KW_FROM);
				this.state = 776;
				(_localctx as RevokeContext)._grantee = this.principal();
				}
				break;

			case 41:
				_localctx = new ShowGrantsContext(_localctx);
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 777;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 778;
				this.match(TrinoSqlParser.KW_GRANTS);
				this.state = 784;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_ON) {
					{
					this.state = 779;
					this.match(TrinoSqlParser.KW_ON);
					this.state = 781;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.KW_TABLE) {
						{
						this.state = 780;
						this.match(TrinoSqlParser.KW_TABLE);
						}
					}

					this.state = 783;
					this.tableName();
					}
				}

				}
				break;

			case 42:
				_localctx = new ExplainContext(_localctx);
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 786;
				this.match(TrinoSqlParser.KW_EXPLAIN);
				this.state = 788;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
				case 1:
					{
					this.state = 787;
					this.match(TrinoSqlParser.KW_ANALYZE);
					}
					break;
				}
				this.state = 791;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_VERBOSE) {
					{
					this.state = 790;
					this.match(TrinoSqlParser.KW_VERBOSE);
					}
				}

				this.state = 804;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
				case 1:
					{
					this.state = 793;
					this.match(TrinoSqlParser.T__0);
					this.state = 794;
					this.explainOption();
					this.state = 799;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 795;
						this.match(TrinoSqlParser.T__2);
						this.state = 796;
						this.explainOption();
						}
						}
						this.state = 801;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 802;
					this.match(TrinoSqlParser.T__1);
					}
					break;
				}
				this.state = 806;
				this.statement();
				}
				break;

			case 43:
				_localctx = new ShowCreateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 807;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 808;
				this.match(TrinoSqlParser.KW_CREATE);
				this.state = 809;
				this.match(TrinoSqlParser.KW_TABLE);
				this.state = 810;
				this.tableName();
				}
				break;

			case 44:
				_localctx = new ShowCreateSchemaContext(_localctx);
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 811;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 812;
				this.match(TrinoSqlParser.KW_CREATE);
				this.state = 813;
				this.match(TrinoSqlParser.KW_SCHEMA);
				this.state = 814;
				this.schemaName();
				}
				break;

			case 45:
				_localctx = new ShowCreateViewContext(_localctx);
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 815;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 816;
				this.match(TrinoSqlParser.KW_CREATE);
				this.state = 817;
				this.match(TrinoSqlParser.KW_VIEW);
				this.state = 818;
				this.viewName();
				}
				break;

			case 46:
				_localctx = new ShowCreateMaterializedViewContext(_localctx);
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 819;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 820;
				this.match(TrinoSqlParser.KW_CREATE);
				this.state = 821;
				this.match(TrinoSqlParser.KW_MATERIALIZED);
				this.state = 822;
				this.match(TrinoSqlParser.KW_VIEW);
				this.state = 823;
				this.viewName();
				}
				break;

			case 47:
				_localctx = new ShowTablesContext(_localctx);
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 824;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 825;
				this.match(TrinoSqlParser.KW_TABLES);
				this.state = 828;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_FROM || _la === TrinoSqlParser.KW_IN) {
					{
					this.state = 826;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.KW_FROM || _la === TrinoSqlParser.KW_IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 827;
					this.schemaName();
					}
				}

				this.state = 836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_LIKE) {
					{
					this.state = 830;
					this.match(TrinoSqlParser.KW_LIKE);
					this.state = 831;
					(_localctx as ShowTablesContext)._pattern = this.string();
					this.state = 834;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.KW_ESCAPE) {
						{
						this.state = 832;
						this.match(TrinoSqlParser.KW_ESCAPE);
						this.state = 833;
						(_localctx as ShowTablesContext)._escape = this.string();
						}
					}

					}
				}

				}
				break;

			case 48:
				_localctx = new ShowSchemasContext(_localctx);
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 838;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 839;
				this.match(TrinoSqlParser.KW_SCHEMAS);
				this.state = 842;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_FROM || _la === TrinoSqlParser.KW_IN) {
					{
					this.state = 840;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.KW_FROM || _la === TrinoSqlParser.KW_IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 841;
					this.catalogName();
					}
				}

				this.state = 850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_LIKE) {
					{
					this.state = 844;
					this.match(TrinoSqlParser.KW_LIKE);
					this.state = 845;
					(_localctx as ShowSchemasContext)._pattern = this.string();
					this.state = 848;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.KW_ESCAPE) {
						{
						this.state = 846;
						this.match(TrinoSqlParser.KW_ESCAPE);
						this.state = 847;
						(_localctx as ShowSchemasContext)._escape = this.string();
						}
					}

					}
				}

				}
				break;

			case 49:
				_localctx = new ShowCatalogsContext(_localctx);
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 852;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 853;
				this.match(TrinoSqlParser.KW_CATALOGS);
				this.state = 860;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_LIKE) {
					{
					this.state = 854;
					this.match(TrinoSqlParser.KW_LIKE);
					this.state = 855;
					(_localctx as ShowCatalogsContext)._pattern = this.string();
					this.state = 858;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.KW_ESCAPE) {
						{
						this.state = 856;
						this.match(TrinoSqlParser.KW_ESCAPE);
						this.state = 857;
						(_localctx as ShowCatalogsContext)._escape = this.string();
						}
					}

					}
				}

				}
				break;

			case 50:
				_localctx = new ShowColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 862;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 863;
				this.match(TrinoSqlParser.KW_COLUMNS);
				this.state = 864;
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.KW_FROM || _la === TrinoSqlParser.KW_IN)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 866;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
				case 1:
					{
					this.state = 865;
					this.tableOrViewName();
					}
					break;
				}
				this.state = 874;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_LIKE) {
					{
					this.state = 868;
					this.match(TrinoSqlParser.KW_LIKE);
					this.state = 869;
					(_localctx as ShowColumnsContext)._pattern = this.string();
					this.state = 872;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.KW_ESCAPE) {
						{
						this.state = 870;
						this.match(TrinoSqlParser.KW_ESCAPE);
						this.state = 871;
						(_localctx as ShowColumnsContext)._escape = this.string();
						}
					}

					}
				}

				}
				break;

			case 51:
				_localctx = new ShowStatsContext(_localctx);
				this.enterOuterAlt(_localctx, 51);
				{
				this.state = 876;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 877;
				this.match(TrinoSqlParser.KW_STATS);
				this.state = 878;
				this.match(TrinoSqlParser.KW_FOR);
				this.state = 879;
				this.tableName();
				}
				break;

			case 52:
				_localctx = new ShowStatsForQueryContext(_localctx);
				this.enterOuterAlt(_localctx, 52);
				{
				this.state = 880;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 881;
				this.match(TrinoSqlParser.KW_STATS);
				this.state = 882;
				this.match(TrinoSqlParser.KW_FOR);
				this.state = 883;
				this.match(TrinoSqlParser.T__0);
				this.state = 884;
				this.query();
				this.state = 885;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 53:
				_localctx = new ShowRolesContext(_localctx);
				this.enterOuterAlt(_localctx, 53);
				{
				this.state = 887;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 889;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_CURRENT) {
					{
					this.state = 888;
					this.match(TrinoSqlParser.KW_CURRENT);
					}
				}

				this.state = 891;
				this.match(TrinoSqlParser.KW_ROLES);
				this.state = 894;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_FROM || _la === TrinoSqlParser.KW_IN) {
					{
					this.state = 892;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.KW_FROM || _la === TrinoSqlParser.KW_IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 893;
					this.identifier();
					}
				}

				}
				break;

			case 54:
				_localctx = new ShowRoleGrantsContext(_localctx);
				this.enterOuterAlt(_localctx, 54);
				{
				this.state = 896;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 897;
				this.match(TrinoSqlParser.KW_ROLE);
				this.state = 898;
				this.match(TrinoSqlParser.KW_GRANTS);
				this.state = 901;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_FROM || _la === TrinoSqlParser.KW_IN) {
					{
					this.state = 899;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.KW_FROM || _la === TrinoSqlParser.KW_IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 900;
					this.identifier();
					}
				}

				}
				break;

			case 55:
				_localctx = new ShowColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 55);
				{
				this.state = 903;
				this.match(TrinoSqlParser.KW_DESCRIBE);
				this.state = 904;
				this.tableOrViewName();
				}
				break;

			case 56:
				_localctx = new ShowColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 56);
				{
				this.state = 905;
				this.match(TrinoSqlParser.KW_DESC);
				this.state = 906;
				this.tableOrViewName();
				}
				break;

			case 57:
				_localctx = new ShowFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 57);
				{
				this.state = 907;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 908;
				this.match(TrinoSqlParser.KW_FUNCTIONS);
				this.state = 915;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_LIKE) {
					{
					this.state = 909;
					this.match(TrinoSqlParser.KW_LIKE);
					this.state = 910;
					(_localctx as ShowFunctionsContext)._pattern = this.string();
					this.state = 913;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.KW_ESCAPE) {
						{
						this.state = 911;
						this.match(TrinoSqlParser.KW_ESCAPE);
						this.state = 912;
						(_localctx as ShowFunctionsContext)._escape = this.string();
						}
					}

					}
				}

				}
				break;

			case 58:
				_localctx = new ShowSessionContext(_localctx);
				this.enterOuterAlt(_localctx, 58);
				{
				this.state = 917;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 918;
				this.match(TrinoSqlParser.KW_SESSION);
				this.state = 925;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_LIKE) {
					{
					this.state = 919;
					this.match(TrinoSqlParser.KW_LIKE);
					this.state = 920;
					(_localctx as ShowSessionContext)._pattern = this.string();
					this.state = 923;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.KW_ESCAPE) {
						{
						this.state = 921;
						this.match(TrinoSqlParser.KW_ESCAPE);
						this.state = 922;
						(_localctx as ShowSessionContext)._escape = this.string();
						}
					}

					}
				}

				}
				break;

			case 59:
				_localctx = new SetSessionContext(_localctx);
				this.enterOuterAlt(_localctx, 59);
				{
				this.state = 927;
				this.match(TrinoSqlParser.KW_SET);
				this.state = 928;
				this.match(TrinoSqlParser.KW_SESSION);
				this.state = 929;
				this.qualifiedName();
				this.state = 930;
				this.match(TrinoSqlParser.EQ);
				this.state = 931;
				this.expression();
				}
				break;

			case 60:
				_localctx = new ResetSessionContext(_localctx);
				this.enterOuterAlt(_localctx, 60);
				{
				this.state = 933;
				this.match(TrinoSqlParser.KW_RESET);
				this.state = 934;
				this.match(TrinoSqlParser.KW_SESSION);
				this.state = 935;
				this.qualifiedName();
				}
				break;

			case 61:
				_localctx = new StartTransactionContext(_localctx);
				this.enterOuterAlt(_localctx, 61);
				{
				this.state = 936;
				this.match(TrinoSqlParser.KW_START);
				this.state = 937;
				this.match(TrinoSqlParser.KW_TRANSACTION);
				this.state = 946;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_ISOLATION || _la === TrinoSqlParser.KW_READ) {
					{
					this.state = 938;
					this.transactionMode();
					this.state = 943;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 939;
						this.match(TrinoSqlParser.T__2);
						this.state = 940;
						this.transactionMode();
						}
						}
						this.state = 945;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;

			case 62:
				_localctx = new CommitContext(_localctx);
				this.enterOuterAlt(_localctx, 62);
				{
				this.state = 948;
				this.match(TrinoSqlParser.KW_COMMIT);
				this.state = 950;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_WORK) {
					{
					this.state = 949;
					this.match(TrinoSqlParser.KW_WORK);
					}
				}

				}
				break;

			case 63:
				_localctx = new RollbackContext(_localctx);
				this.enterOuterAlt(_localctx, 63);
				{
				this.state = 952;
				this.match(TrinoSqlParser.KW_ROLLBACK);
				this.state = 954;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_WORK) {
					{
					this.state = 953;
					this.match(TrinoSqlParser.KW_WORK);
					}
				}

				}
				break;

			case 64:
				_localctx = new PrepareContext(_localctx);
				this.enterOuterAlt(_localctx, 64);
				{
				this.state = 956;
				this.match(TrinoSqlParser.KW_PREPARE);
				this.state = 957;
				this.identifier();
				this.state = 958;
				this.match(TrinoSqlParser.KW_FROM);
				this.state = 959;
				this.statement();
				}
				break;

			case 65:
				_localctx = new DeallocateContext(_localctx);
				this.enterOuterAlt(_localctx, 65);
				{
				this.state = 961;
				this.match(TrinoSqlParser.KW_DEALLOCATE);
				this.state = 962;
				this.match(TrinoSqlParser.KW_PREPARE);
				this.state = 963;
				this.identifier();
				}
				break;

			case 66:
				_localctx = new ExecuteContext(_localctx);
				this.enterOuterAlt(_localctx, 66);
				{
				this.state = 964;
				this.match(TrinoSqlParser.KW_EXECUTE);
				this.state = 965;
				this.identifier();
				this.state = 975;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_USING) {
					{
					this.state = 966;
					this.match(TrinoSqlParser.KW_USING);
					this.state = 967;
					this.expression();
					this.state = 972;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 968;
						this.match(TrinoSqlParser.T__2);
						this.state = 969;
						this.expression();
						}
						}
						this.state = 974;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;

			case 67:
				_localctx = new DescribeInputContext(_localctx);
				this.enterOuterAlt(_localctx, 67);
				{
				this.state = 977;
				this.match(TrinoSqlParser.KW_DESCRIBE);
				this.state = 978;
				this.match(TrinoSqlParser.KW_INPUT);
				this.state = 979;
				this.identifier();
				}
				break;

			case 68:
				_localctx = new DescribeOutputContext(_localctx);
				this.enterOuterAlt(_localctx, 68);
				{
				this.state = 980;
				this.match(TrinoSqlParser.KW_DESCRIBE);
				this.state = 981;
				this.match(TrinoSqlParser.KW_OUTPUT);
				this.state = 982;
				this.identifier();
				}
				break;

			case 69:
				_localctx = new SetPathContext(_localctx);
				this.enterOuterAlt(_localctx, 69);
				{
				this.state = 983;
				this.match(TrinoSqlParser.KW_SET);
				this.state = 984;
				this.match(TrinoSqlParser.KW_PATH);
				this.state = 985;
				this.pathSpecification();
				}
				break;

			case 70:
				_localctx = new SetTimeZoneContext(_localctx);
				this.enterOuterAlt(_localctx, 70);
				{
				this.state = 986;
				this.match(TrinoSqlParser.KW_SET);
				this.state = 987;
				this.match(TrinoSqlParser.KW_TIME);
				this.state = 988;
				this.match(TrinoSqlParser.KW_ZONE);
				this.state = 991;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
				case 1:
					{
					this.state = 989;
					this.match(TrinoSqlParser.KW_LOCAL);
					}
					break;

				case 2:
					{
					this.state = 990;
					this.expression();
					}
					break;
				}
				}
				break;

			case 71:
				_localctx = new UpdateContext(_localctx);
				this.enterOuterAlt(_localctx, 71);
				{
				this.state = 993;
				this.match(TrinoSqlParser.KW_UPDATE);
				this.state = 994;
				this.tableName();
				this.state = 995;
				this.match(TrinoSqlParser.KW_SET);
				this.state = 996;
				this.updateAssignment();
				this.state = 1001;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 997;
					this.match(TrinoSqlParser.T__2);
					this.state = 998;
					this.updateAssignment();
					}
					}
					this.state = 1003;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1006;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_WHERE) {
					{
					this.state = 1004;
					this.match(TrinoSqlParser.KW_WHERE);
					this.state = 1005;
					(_localctx as UpdateContext)._where = this.booleanExpression(0);
					}
				}

				}
				break;

			case 72:
				_localctx = new MergeContext(_localctx);
				this.enterOuterAlt(_localctx, 72);
				{
				this.state = 1008;
				this.match(TrinoSqlParser.KW_MERGE);
				this.state = 1009;
				this.match(TrinoSqlParser.KW_INTO);
				this.state = 1010;
				this.tableName();
				this.state = 1015;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (TrinoSqlParser.KW_ADD - 17)) | (1 << (TrinoSqlParser.KW_ADMIN - 17)) | (1 << (TrinoSqlParser.KW_AFTER - 17)) | (1 << (TrinoSqlParser.KW_ALL - 17)) | (1 << (TrinoSqlParser.KW_ANALYZE - 17)) | (1 << (TrinoSqlParser.KW_ANY - 17)) | (1 << (TrinoSqlParser.KW_ARRAY - 17)) | (1 << (TrinoSqlParser.KW_AS - 17)) | (1 << (TrinoSqlParser.KW_ASC - 17)) | (1 << (TrinoSqlParser.KW_AT - 17)) | (1 << (TrinoSqlParser.KW_AUTHORIZATION - 17)) | (1 << (TrinoSqlParser.KW_BERNOULLI - 17)) | (1 << (TrinoSqlParser.KW_CALL - 17)) | (1 << (TrinoSqlParser.KW_CASCADE - 17)) | (1 << (TrinoSqlParser.KW_CATALOGS - 17)) | (1 << (TrinoSqlParser.KW_COLUMN - 17)) | (1 << (TrinoSqlParser.KW_COLUMNS - 17)) | (1 << (TrinoSqlParser.KW_COMMENT - 17)) | (1 << (TrinoSqlParser.KW_COMMIT - 17)) | (1 << (TrinoSqlParser.KW_COMMITTED - 17)) | (1 << (TrinoSqlParser.KW_CURRENT - 17)))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (TrinoSqlParser.KW_DATA - 56)) | (1 << (TrinoSqlParser.KW_DATE - 56)) | (1 << (TrinoSqlParser.KW_DAY - 56)) | (1 << (TrinoSqlParser.KW_DEFAULT - 56)) | (1 << (TrinoSqlParser.KW_DEFINER - 56)) | (1 << (TrinoSqlParser.KW_DESC - 56)) | (1 << (TrinoSqlParser.KW_DEFINE - 56)) | (1 << (TrinoSqlParser.KW_DISTRIBUTED - 56)) | (1 << (TrinoSqlParser.KW_DOUBLE - 56)) | (1 << (TrinoSqlParser.KW_EMPTY - 56)) | (1 << (TrinoSqlParser.KW_EXCLUDING - 56)) | (1 << (TrinoSqlParser.KW_EXPLAIN - 56)) | (1 << (TrinoSqlParser.KW_FETCH - 56)) | (1 << (TrinoSqlParser.KW_FILTER - 56)) | (1 << (TrinoSqlParser.KW_FINAL - 56)) | (1 << (TrinoSqlParser.KW_FIRST - 56)) | (1 << (TrinoSqlParser.KW_FOLLOWING - 56)) | (1 << (TrinoSqlParser.KW_FORMAT - 56)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (TrinoSqlParser.KW_FUNCTIONS - 90)) | (1 << (TrinoSqlParser.KW_GRANT - 90)) | (1 << (TrinoSqlParser.KW_GRANTED - 90)) | (1 << (TrinoSqlParser.KW_GRANTS - 90)) | (1 << (TrinoSqlParser.KW_DENY - 90)) | (1 << (TrinoSqlParser.KW_GRAPHVIZ - 90)) | (1 << (TrinoSqlParser.KW_GROUPS - 90)) | (1 << (TrinoSqlParser.KW_HOUR - 90)) | (1 << (TrinoSqlParser.KW_IF - 90)) | (1 << (TrinoSqlParser.KW_IGNORE - 90)) | (1 << (TrinoSqlParser.KW_INCLUDING - 90)) | (1 << (TrinoSqlParser.KW_INITIAL - 90)) | (1 << (TrinoSqlParser.KW_INPUT - 90)) | (1 << (TrinoSqlParser.KW_INTERVAL - 90)) | (1 << (TrinoSqlParser.KW_INVOKER - 90)) | (1 << (TrinoSqlParser.KW_IO - 90)) | (1 << (TrinoSqlParser.KW_ISOLATION - 90)) | (1 << (TrinoSqlParser.KW_JSON - 90)) | (1 << (TrinoSqlParser.KW_LAST - 90)) | (1 << (TrinoSqlParser.KW_LATERAL - 90)) | (1 << (TrinoSqlParser.KW_LEVEL - 90)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TrinoSqlParser.KW_LIMIT - 123)) | (1 << (TrinoSqlParser.KW_LOCAL - 123)) | (1 << (TrinoSqlParser.KW_LOGICAL - 123)) | (1 << (TrinoSqlParser.KW_MAP - 123)) | (1 << (TrinoSqlParser.KW_MATCH - 123)) | (1 << (TrinoSqlParser.KW_MATCHED - 123)) | (1 << (TrinoSqlParser.KW_MATCHES - 123)) | (1 << (TrinoSqlParser.KW_MATCH_RECOGNIZE - 123)) | (1 << (TrinoSqlParser.KW_MATERIALIZED - 123)) | (1 << (TrinoSqlParser.KW_MEASURES - 123)) | (1 << (TrinoSqlParser.KW_MERGE - 123)) | (1 << (TrinoSqlParser.KW_MINUTE - 123)) | (1 << (TrinoSqlParser.KW_MONTH - 123)) | (1 << (TrinoSqlParser.KW_NEXT - 123)) | (1 << (TrinoSqlParser.KW_NFC - 123)) | (1 << (TrinoSqlParser.KW_NFD - 123)) | (1 << (TrinoSqlParser.KW_NFKC - 123)) | (1 << (TrinoSqlParser.KW_NFKD - 123)) | (1 << (TrinoSqlParser.KW_NO - 123)) | (1 << (TrinoSqlParser.KW_NONE - 123)) | (1 << (TrinoSqlParser.KW_NULLIF - 123)) | (1 << (TrinoSqlParser.KW_NULLS - 123)) | (1 << (TrinoSqlParser.KW_OFFSET - 123)) | (1 << (TrinoSqlParser.KW_OMIT - 123)) | (1 << (TrinoSqlParser.KW_ONE - 123)))) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (TrinoSqlParser.KW_ONLY - 155)) | (1 << (TrinoSqlParser.KW_OPTION - 155)) | (1 << (TrinoSqlParser.KW_ORDINALITY - 155)) | (1 << (TrinoSqlParser.KW_OUTPUT - 155)) | (1 << (TrinoSqlParser.KW_OVER - 155)) | (1 << (TrinoSqlParser.KW_PARTITION - 155)) | (1 << (TrinoSqlParser.KW_PARTITIONS - 155)) | (1 << (TrinoSqlParser.KW_PAST - 155)) | (1 << (TrinoSqlParser.KW_PATH - 155)) | (1 << (TrinoSqlParser.KW_PATTERN - 155)) | (1 << (TrinoSqlParser.KW_PER - 155)) | (1 << (TrinoSqlParser.KW_PERMUTE - 155)) | (1 << (TrinoSqlParser.KW_POSITION - 155)) | (1 << (TrinoSqlParser.KW_PRECEDING - 155)) | (1 << (TrinoSqlParser.KW_PRECISION - 155)) | (1 << (TrinoSqlParser.KW_PRIVILEGES - 155)) | (1 << (TrinoSqlParser.KW_PROPERTIES - 155)) | (1 << (TrinoSqlParser.KW_RANGE - 155)) | (1 << (TrinoSqlParser.KW_READ - 155)) | (1 << (TrinoSqlParser.KW_REFRESH - 155)) | (1 << (TrinoSqlParser.KW_RENAME - 155)) | (1 << (TrinoSqlParser.KW_REPEATABLE - 155)) | (1 << (TrinoSqlParser.KW_REPLACE - 155)) | (1 << (TrinoSqlParser.KW_RESET - 155)) | (1 << (TrinoSqlParser.KW_RESPECT - 155)) | (1 << (TrinoSqlParser.KW_RESTRICT - 155)) | (1 << (TrinoSqlParser.KW_REVOKE - 155)))) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & ((1 << (TrinoSqlParser.KW_ROLE - 188)) | (1 << (TrinoSqlParser.KW_ROLES - 188)) | (1 << (TrinoSqlParser.KW_ROLLBACK - 188)) | (1 << (TrinoSqlParser.KW_ROW - 188)) | (1 << (TrinoSqlParser.KW_ROWS - 188)) | (1 << (TrinoSqlParser.KW_RUNNING - 188)) | (1 << (TrinoSqlParser.KW_SCHEMA - 188)) | (1 << (TrinoSqlParser.KW_SCHEMAS - 188)) | (1 << (TrinoSqlParser.KW_SECOND - 188)) | (1 << (TrinoSqlParser.KW_SECURITY - 188)) | (1 << (TrinoSqlParser.KW_SEEK - 188)) | (1 << (TrinoSqlParser.KW_SERIALIZABLE - 188)) | (1 << (TrinoSqlParser.KW_SESSION - 188)) | (1 << (TrinoSqlParser.KW_SET - 188)) | (1 << (TrinoSqlParser.KW_SETS - 188)) | (1 << (TrinoSqlParser.KW_SHOW - 188)) | (1 << (TrinoSqlParser.KW_SOME - 188)) | (1 << (TrinoSqlParser.KW_START - 188)) | (1 << (TrinoSqlParser.KW_STATS - 188)) | (1 << (TrinoSqlParser.KW_SUBSET - 188)) | (1 << (TrinoSqlParser.KW_SUBSTRING - 188)) | (1 << (TrinoSqlParser.KW_SYSTEM - 188)) | (1 << (TrinoSqlParser.KW_TABLES - 188)) | (1 << (TrinoSqlParser.KW_TABLESAMPLE - 188)) | (1 << (TrinoSqlParser.KW_TEXT - 188)) | (1 << (TrinoSqlParser.KW_TIES - 188)) | (1 << (TrinoSqlParser.KW_TIME - 188)) | (1 << (TrinoSqlParser.KW_TIMESTAMP - 188)))) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & ((1 << (TrinoSqlParser.KW_TO - 220)) | (1 << (TrinoSqlParser.KW_TRANSACTION - 220)) | (1 << (TrinoSqlParser.KW_TRUNCATE - 220)) | (1 << (TrinoSqlParser.KW_TRY_CAST - 220)) | (1 << (TrinoSqlParser.KW_TYPE - 220)) | (1 << (TrinoSqlParser.KW_UNBOUNDED - 220)) | (1 << (TrinoSqlParser.KW_UNCOMMITTED - 220)) | (1 << (TrinoSqlParser.KW_UNMATCHED - 220)) | (1 << (TrinoSqlParser.KW_UPDATE - 220)) | (1 << (TrinoSqlParser.KW_USE - 220)) | (1 << (TrinoSqlParser.KW_USER - 220)) | (1 << (TrinoSqlParser.KW_VALIDATE - 220)) | (1 << (TrinoSqlParser.KW_VERBOSE - 220)) | (1 << (TrinoSqlParser.KW_VIEW - 220)) | (1 << (TrinoSqlParser.KW_WINDOW - 220)) | (1 << (TrinoSqlParser.KW_WITHOUT - 220)) | (1 << (TrinoSqlParser.KW_WORK - 220)) | (1 << (TrinoSqlParser.KW_WRITE - 220)) | (1 << (TrinoSqlParser.KW_YEAR - 220)) | (1 << (TrinoSqlParser.KW_ZONE - 220)))) !== 0) || ((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & ((1 << (TrinoSqlParser.IDENTIFIER - 268)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 268)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 268)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 268)))) !== 0)) {
					{
					this.state = 1012;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.KW_AS) {
						{
						this.state = 1011;
						this.match(TrinoSqlParser.KW_AS);
						}
					}

					this.state = 1014;
					this.identifier();
					}
				}

				this.state = 1017;
				this.match(TrinoSqlParser.KW_USING);
				this.state = 1018;
				this.relation(0);
				this.state = 1019;
				this.match(TrinoSqlParser.KW_ON);
				this.state = 1020;
				this.expression();
				this.state = 1022;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1021;
					this.mergeCase();
					}
					}
					this.state = 1024;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === TrinoSqlParser.KW_WHEN);
				}
				break;

			case 73:
				_localctx = new ShowTableCommentContext(_localctx);
				this.enterOuterAlt(_localctx, 73);
				{
				this.state = 1026;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 1027;
				this.match(TrinoSqlParser.KW_COMMENT);
				this.state = 1028;
				this.match(TrinoSqlParser.KW_ON);
				this.state = 1029;
				this.match(TrinoSqlParser.KW_TABLE);
				this.state = 1030;
				this.tableName();
				}
				break;

			case 74:
				_localctx = new ShowColumnCommentContext(_localctx);
				this.enterOuterAlt(_localctx, 74);
				{
				this.state = 1031;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 1032;
				this.match(TrinoSqlParser.KW_COMMENT);
				this.state = 1033;
				this.match(TrinoSqlParser.KW_ON);
				this.state = 1034;
				this.match(TrinoSqlParser.KW_COLUMN);
				this.state = 1035;
				this.columnName();
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
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, TrinoSqlParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1039;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.KW_WITH) {
				{
				this.state = 1038;
				this.with();
				}
			}

			this.state = 1041;
			this.queryNoWith();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public with(): WithContext {
		let _localctx: WithContext = new WithContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TrinoSqlParser.RULE_with);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1043;
			this.match(TrinoSqlParser.KW_WITH);
			this.state = 1045;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.KW_RECURSIVE) {
				{
				this.state = 1044;
				this.match(TrinoSqlParser.KW_RECURSIVE);
				}
			}

			this.state = 1047;
			this.namedQuery();
			this.state = 1052;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TrinoSqlParser.T__2) {
				{
				{
				this.state = 1048;
				this.match(TrinoSqlParser.T__2);
				this.state = 1049;
				this.namedQuery();
				}
				}
				this.state = 1054;
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
	public tableElement(): TableElementContext {
		let _localctx: TableElementContext = new TableElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TrinoSqlParser.RULE_tableElement);
		try {
			this.state = 1057;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.KW_ADD:
			case TrinoSqlParser.KW_ADMIN:
			case TrinoSqlParser.KW_AFTER:
			case TrinoSqlParser.KW_ALL:
			case TrinoSqlParser.KW_ANALYZE:
			case TrinoSqlParser.KW_ANY:
			case TrinoSqlParser.KW_ARRAY:
			case TrinoSqlParser.KW_ASC:
			case TrinoSqlParser.KW_AT:
			case TrinoSqlParser.KW_AUTHORIZATION:
			case TrinoSqlParser.KW_BERNOULLI:
			case TrinoSqlParser.KW_CALL:
			case TrinoSqlParser.KW_CASCADE:
			case TrinoSqlParser.KW_CATALOGS:
			case TrinoSqlParser.KW_COLUMN:
			case TrinoSqlParser.KW_COLUMNS:
			case TrinoSqlParser.KW_COMMENT:
			case TrinoSqlParser.KW_COMMIT:
			case TrinoSqlParser.KW_COMMITTED:
			case TrinoSqlParser.KW_CURRENT:
			case TrinoSqlParser.KW_DATA:
			case TrinoSqlParser.KW_DATE:
			case TrinoSqlParser.KW_DAY:
			case TrinoSqlParser.KW_DEFAULT:
			case TrinoSqlParser.KW_DEFINER:
			case TrinoSqlParser.KW_DESC:
			case TrinoSqlParser.KW_DEFINE:
			case TrinoSqlParser.KW_DISTRIBUTED:
			case TrinoSqlParser.KW_DOUBLE:
			case TrinoSqlParser.KW_EMPTY:
			case TrinoSqlParser.KW_EXCLUDING:
			case TrinoSqlParser.KW_EXPLAIN:
			case TrinoSqlParser.KW_FETCH:
			case TrinoSqlParser.KW_FILTER:
			case TrinoSqlParser.KW_FINAL:
			case TrinoSqlParser.KW_FIRST:
			case TrinoSqlParser.KW_FOLLOWING:
			case TrinoSqlParser.KW_FORMAT:
			case TrinoSqlParser.KW_FUNCTIONS:
			case TrinoSqlParser.KW_GRANT:
			case TrinoSqlParser.KW_GRANTED:
			case TrinoSqlParser.KW_GRANTS:
			case TrinoSqlParser.KW_DENY:
			case TrinoSqlParser.KW_GRAPHVIZ:
			case TrinoSqlParser.KW_GROUPS:
			case TrinoSqlParser.KW_HOUR:
			case TrinoSqlParser.KW_IF:
			case TrinoSqlParser.KW_IGNORE:
			case TrinoSqlParser.KW_INCLUDING:
			case TrinoSqlParser.KW_INITIAL:
			case TrinoSqlParser.KW_INPUT:
			case TrinoSqlParser.KW_INTERVAL:
			case TrinoSqlParser.KW_INVOKER:
			case TrinoSqlParser.KW_IO:
			case TrinoSqlParser.KW_ISOLATION:
			case TrinoSqlParser.KW_JSON:
			case TrinoSqlParser.KW_LAST:
			case TrinoSqlParser.KW_LATERAL:
			case TrinoSqlParser.KW_LEVEL:
			case TrinoSqlParser.KW_LIMIT:
			case TrinoSqlParser.KW_LOCAL:
			case TrinoSqlParser.KW_LOGICAL:
			case TrinoSqlParser.KW_MAP:
			case TrinoSqlParser.KW_MATCH:
			case TrinoSqlParser.KW_MATCHED:
			case TrinoSqlParser.KW_MATCHES:
			case TrinoSqlParser.KW_MATCH_RECOGNIZE:
			case TrinoSqlParser.KW_MATERIALIZED:
			case TrinoSqlParser.KW_MEASURES:
			case TrinoSqlParser.KW_MERGE:
			case TrinoSqlParser.KW_MINUTE:
			case TrinoSqlParser.KW_MONTH:
			case TrinoSqlParser.KW_NEXT:
			case TrinoSqlParser.KW_NFC:
			case TrinoSqlParser.KW_NFD:
			case TrinoSqlParser.KW_NFKC:
			case TrinoSqlParser.KW_NFKD:
			case TrinoSqlParser.KW_NO:
			case TrinoSqlParser.KW_NONE:
			case TrinoSqlParser.KW_NULLIF:
			case TrinoSqlParser.KW_NULLS:
			case TrinoSqlParser.KW_OFFSET:
			case TrinoSqlParser.KW_OMIT:
			case TrinoSqlParser.KW_ONE:
			case TrinoSqlParser.KW_ONLY:
			case TrinoSqlParser.KW_OPTION:
			case TrinoSqlParser.KW_ORDINALITY:
			case TrinoSqlParser.KW_OUTPUT:
			case TrinoSqlParser.KW_OVER:
			case TrinoSqlParser.KW_PARTITION:
			case TrinoSqlParser.KW_PARTITIONS:
			case TrinoSqlParser.KW_PAST:
			case TrinoSqlParser.KW_PATH:
			case TrinoSqlParser.KW_PATTERN:
			case TrinoSqlParser.KW_PER:
			case TrinoSqlParser.KW_PERMUTE:
			case TrinoSqlParser.KW_POSITION:
			case TrinoSqlParser.KW_PRECEDING:
			case TrinoSqlParser.KW_PRECISION:
			case TrinoSqlParser.KW_PRIVILEGES:
			case TrinoSqlParser.KW_PROPERTIES:
			case TrinoSqlParser.KW_RANGE:
			case TrinoSqlParser.KW_READ:
			case TrinoSqlParser.KW_REFRESH:
			case TrinoSqlParser.KW_RENAME:
			case TrinoSqlParser.KW_REPEATABLE:
			case TrinoSqlParser.KW_REPLACE:
			case TrinoSqlParser.KW_RESET:
			case TrinoSqlParser.KW_RESPECT:
			case TrinoSqlParser.KW_RESTRICT:
			case TrinoSqlParser.KW_REVOKE:
			case TrinoSqlParser.KW_ROLE:
			case TrinoSqlParser.KW_ROLES:
			case TrinoSqlParser.KW_ROLLBACK:
			case TrinoSqlParser.KW_ROW:
			case TrinoSqlParser.KW_ROWS:
			case TrinoSqlParser.KW_RUNNING:
			case TrinoSqlParser.KW_SCHEMA:
			case TrinoSqlParser.KW_SCHEMAS:
			case TrinoSqlParser.KW_SECOND:
			case TrinoSqlParser.KW_SECURITY:
			case TrinoSqlParser.KW_SEEK:
			case TrinoSqlParser.KW_SERIALIZABLE:
			case TrinoSqlParser.KW_SESSION:
			case TrinoSqlParser.KW_SET:
			case TrinoSqlParser.KW_SETS:
			case TrinoSqlParser.KW_SHOW:
			case TrinoSqlParser.KW_SOME:
			case TrinoSqlParser.KW_START:
			case TrinoSqlParser.KW_STATS:
			case TrinoSqlParser.KW_SUBSET:
			case TrinoSqlParser.KW_SUBSTRING:
			case TrinoSqlParser.KW_SYSTEM:
			case TrinoSqlParser.KW_TABLES:
			case TrinoSqlParser.KW_TABLESAMPLE:
			case TrinoSqlParser.KW_TEXT:
			case TrinoSqlParser.KW_TIES:
			case TrinoSqlParser.KW_TIME:
			case TrinoSqlParser.KW_TIMESTAMP:
			case TrinoSqlParser.KW_TO:
			case TrinoSqlParser.KW_TRANSACTION:
			case TrinoSqlParser.KW_TRUNCATE:
			case TrinoSqlParser.KW_TRY_CAST:
			case TrinoSqlParser.KW_TYPE:
			case TrinoSqlParser.KW_UNBOUNDED:
			case TrinoSqlParser.KW_UNCOMMITTED:
			case TrinoSqlParser.KW_UNMATCHED:
			case TrinoSqlParser.KW_UPDATE:
			case TrinoSqlParser.KW_USE:
			case TrinoSqlParser.KW_USER:
			case TrinoSqlParser.KW_VALIDATE:
			case TrinoSqlParser.KW_VERBOSE:
			case TrinoSqlParser.KW_VIEW:
			case TrinoSqlParser.KW_WINDOW:
			case TrinoSqlParser.KW_WITHOUT:
			case TrinoSqlParser.KW_WORK:
			case TrinoSqlParser.KW_WRITE:
			case TrinoSqlParser.KW_YEAR:
			case TrinoSqlParser.KW_ZONE:
			case TrinoSqlParser.IDENTIFIER:
			case TrinoSqlParser.DIGIT_IDENTIFIER:
			case TrinoSqlParser.QUOTED_IDENTIFIER:
			case TrinoSqlParser.BACKQUOTED_IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1055;
				this.columnDefinition();
				}
				break;
			case TrinoSqlParser.KW_LIKE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1056;
				this.likeClause();
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
	public columnDefinition(): ColumnDefinitionContext {
		let _localctx: ColumnDefinitionContext = new ColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TrinoSqlParser.RULE_columnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1059;
			this.columnNameCreate();
			this.state = 1060;
			this.type(0);
			this.state = 1063;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.KW_NOT) {
				{
				this.state = 1061;
				this.match(TrinoSqlParser.KW_NOT);
				this.state = 1062;
				this.match(TrinoSqlParser.KW_NULL);
				}
			}

			this.state = 1067;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				{
				this.state = 1065;
				this.match(TrinoSqlParser.KW_COMMENT);
				this.state = 1066;
				this.string();
				}
				break;
			}
			this.state = 1071;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				{
				this.state = 1069;
				this.match(TrinoSqlParser.KW_WITH);
				this.state = 1070;
				this.properties();
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
	public likeClause(): LikeClauseContext {
		let _localctx: LikeClauseContext = new LikeClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TrinoSqlParser.RULE_likeClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1073;
			this.match(TrinoSqlParser.KW_LIKE);
			this.state = 1074;
			this.tableName();
			this.state = 1077;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.KW_EXCLUDING || _la === TrinoSqlParser.KW_INCLUDING) {
				{
				this.state = 1075;
				_localctx._optionType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.KW_EXCLUDING || _la === TrinoSqlParser.KW_INCLUDING)) {
					_localctx._optionType = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1076;
				this.match(TrinoSqlParser.KW_PROPERTIES);
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
	public properties(): PropertiesContext {
		let _localctx: PropertiesContext = new PropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, TrinoSqlParser.RULE_properties);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1079;
			this.match(TrinoSqlParser.T__0);
			this.state = 1080;
			this.propertyAssignments();
			this.state = 1081;
			this.match(TrinoSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyAssignments(): PropertyAssignmentsContext {
		let _localctx: PropertyAssignmentsContext = new PropertyAssignmentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TrinoSqlParser.RULE_propertyAssignments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1083;
			this.property();
			this.state = 1088;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TrinoSqlParser.T__2) {
				{
				{
				this.state = 1084;
				this.match(TrinoSqlParser.T__2);
				this.state = 1085;
				this.property();
				}
				}
				this.state = 1090;
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
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, TrinoSqlParser.RULE_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1091;
			this.identifier();
			this.state = 1092;
			this.match(TrinoSqlParser.EQ);
			this.state = 1093;
			this.propertyValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyValue(): PropertyValueContext {
		let _localctx: PropertyValueContext = new PropertyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, TrinoSqlParser.RULE_propertyValue);
		try {
			this.state = 1097;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				_localctx = new DefaultPropertyValueContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1095;
				this.match(TrinoSqlParser.KW_DEFAULT);
				}
				break;

			case 2:
				_localctx = new NonDefaultPropertyValueContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1096;
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
	public queryNoWith(): QueryNoWithContext {
		let _localctx: QueryNoWithContext = new QueryNoWithContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, TrinoSqlParser.RULE_queryNoWith);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1099;
			this.queryTerm(0);
			this.state = 1110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.KW_ORDER) {
				{
				this.state = 1100;
				this.match(TrinoSqlParser.KW_ORDER);
				this.state = 1101;
				this.match(TrinoSqlParser.KW_BY);
				this.state = 1102;
				this.sortItem();
				this.state = 1107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 1103;
					this.match(TrinoSqlParser.T__2);
					this.state = 1104;
					this.sortItem();
					}
					}
					this.state = 1109;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.KW_OFFSET) {
				{
				this.state = 1112;
				this.match(TrinoSqlParser.KW_OFFSET);
				this.state = 1113;
				_localctx._offset = this.rowCount();
				this.state = 1115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_ROW || _la === TrinoSqlParser.KW_ROWS) {
					{
					this.state = 1114;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.KW_ROW || _la === TrinoSqlParser.KW_ROWS)) {
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

			this.state = 1132;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.KW_LIMIT:
				{
				{
				this.state = 1119;
				this.match(TrinoSqlParser.KW_LIMIT);
				this.state = 1120;
				_localctx._limit = this.limitRowCount();
				}
				}
				break;
			case TrinoSqlParser.KW_FETCH:
				{
				{
				this.state = 1121;
				this.match(TrinoSqlParser.KW_FETCH);
				this.state = 1122;
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.KW_FIRST || _la === TrinoSqlParser.KW_NEXT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.QUESTION_MARK || _la === TrinoSqlParser.INTEGER_VALUE) {
					{
					this.state = 1123;
					_localctx._fetchFirst = this.rowCount();
					}
				}

				this.state = 1126;
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.KW_ROW || _la === TrinoSqlParser.KW_ROWS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1130;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TrinoSqlParser.KW_ONLY:
					{
					this.state = 1127;
					this.match(TrinoSqlParser.KW_ONLY);
					}
					break;
				case TrinoSqlParser.KW_WITH:
					{
					this.state = 1128;
					this.match(TrinoSqlParser.KW_WITH);
					this.state = 1129;
					this.match(TrinoSqlParser.KW_TIES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;
			case TrinoSqlParser.EOF:
			case TrinoSqlParser.T__0:
			case TrinoSqlParser.T__1:
			case TrinoSqlParser.KW_ALTER:
			case TrinoSqlParser.KW_ANALYZE:
			case TrinoSqlParser.KW_CALL:
			case TrinoSqlParser.KW_COMMENT:
			case TrinoSqlParser.KW_COMMIT:
			case TrinoSqlParser.KW_CREATE:
			case TrinoSqlParser.KW_DEALLOCATE:
			case TrinoSqlParser.KW_DELETE:
			case TrinoSqlParser.KW_DESC:
			case TrinoSqlParser.KW_DESCRIBE:
			case TrinoSqlParser.KW_DROP:
			case TrinoSqlParser.KW_EXECUTE:
			case TrinoSqlParser.KW_EXPLAIN:
			case TrinoSqlParser.KW_GRANT:
			case TrinoSqlParser.KW_DENY:
			case TrinoSqlParser.KW_INSERT:
			case TrinoSqlParser.KW_MERGE:
			case TrinoSqlParser.KW_PREPARE:
			case TrinoSqlParser.KW_REFRESH:
			case TrinoSqlParser.KW_RESET:
			case TrinoSqlParser.KW_REVOKE:
			case TrinoSqlParser.KW_ROLLBACK:
			case TrinoSqlParser.KW_SELECT:
			case TrinoSqlParser.KW_SET:
			case TrinoSqlParser.KW_SHOW:
			case TrinoSqlParser.KW_START:
			case TrinoSqlParser.KW_TABLE:
			case TrinoSqlParser.KW_TRUNCATE:
			case TrinoSqlParser.KW_UPDATE:
			case TrinoSqlParser.KW_USE:
			case TrinoSqlParser.KW_VALUES:
			case TrinoSqlParser.KW_WITH:
			case TrinoSqlParser.SEMICOLON:
				break;
			default:
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
	public limitRowCount(): LimitRowCountContext {
		let _localctx: LimitRowCountContext = new LimitRowCountContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, TrinoSqlParser.RULE_limitRowCount);
		try {
			this.state = 1136;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.KW_ALL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1134;
				this.match(TrinoSqlParser.KW_ALL);
				}
				break;
			case TrinoSqlParser.QUESTION_MARK:
			case TrinoSqlParser.INTEGER_VALUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1135;
				this.rowCount();
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
	public rowCount(): RowCountContext {
		let _localctx: RowCountContext = new RowCountContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, TrinoSqlParser.RULE_rowCount);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1138;
			_la = this._input.LA(1);
			if (!(_la === TrinoSqlParser.QUESTION_MARK || _la === TrinoSqlParser.INTEGER_VALUE)) {
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
		let _startState: number = 42;
		this.enterRecursionRule(_localctx, 42, TrinoSqlParser.RULE_queryTerm, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new QueryTermDefaultContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 1141;
			this.queryPrimary();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1157;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1155;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
					case 1:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_queryTerm);
						this.state = 1143;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1144;
						(_localctx as SetOperationContext)._operator = this.match(TrinoSqlParser.KW_INTERSECT);
						this.state = 1146;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === TrinoSqlParser.KW_ALL || _la === TrinoSqlParser.KW_DISTINCT) {
							{
							this.state = 1145;
							this.setQuantifier();
							}
						}

						this.state = 1148;
						(_localctx as SetOperationContext)._right = this.queryTerm(3);
						}
						break;

					case 2:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_queryTerm);
						this.state = 1149;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1150;
						(_localctx as SetOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === TrinoSqlParser.KW_EXCEPT || _la === TrinoSqlParser.KW_UNION)) {
							(_localctx as SetOperationContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1152;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === TrinoSqlParser.KW_ALL || _la === TrinoSqlParser.KW_DISTINCT) {
							{
							this.state = 1151;
							this.setQuantifier();
							}
						}

						this.state = 1154;
						(_localctx as SetOperationContext)._right = this.queryTerm(2);
						}
						break;
					}
					}
				}
				this.state = 1159;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
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
		this.enterRule(_localctx, 44, TrinoSqlParser.RULE_queryPrimary);
		try {
			let _alt: number;
			this.state = 1176;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.KW_SELECT:
				_localctx = new QueryPrimaryDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1160;
				this.querySpecification();
				}
				break;
			case TrinoSqlParser.KW_TABLE:
				_localctx = new TableContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1161;
				this.match(TrinoSqlParser.KW_TABLE);
				this.state = 1162;
				this.tableName();
				}
				break;
			case TrinoSqlParser.KW_VALUES:
				_localctx = new InlineTableContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1163;
				this.match(TrinoSqlParser.KW_VALUES);
				this.state = 1164;
				this.expression();
				this.state = 1169;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1165;
						this.match(TrinoSqlParser.T__2);
						this.state = 1166;
						this.expression();
						}
						}
					}
					this.state = 1171;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
				}
				}
				break;
			case TrinoSqlParser.T__0:
				_localctx = new SubqueryContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1172;
				this.match(TrinoSqlParser.T__0);
				this.state = 1173;
				this.queryNoWith();
				this.state = 1174;
				this.match(TrinoSqlParser.T__1);
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
		this.enterRule(_localctx, 46, TrinoSqlParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1180;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 1178;
				this.columnName();
				}
				break;

			case 2:
				{
				this.state = 1179;
				this.expression();
				}
				break;
			}
			this.state = 1183;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				{
				this.state = 1182;
				_localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.KW_ASC || _la === TrinoSqlParser.KW_DESC)) {
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
			this.state = 1187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.KW_NULLS) {
				{
				this.state = 1185;
				this.match(TrinoSqlParser.KW_NULLS);
				this.state = 1186;
				_localctx._nullOrdering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.KW_FIRST || _la === TrinoSqlParser.KW_LAST)) {
					_localctx._nullOrdering = this._errHandler.recoverInline(this);
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
	public querySpecification(): QuerySpecificationContext {
		let _localctx: QuerySpecificationContext = new QuerySpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, TrinoSqlParser.RULE_querySpecification);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1189;
			this.match(TrinoSqlParser.KW_SELECT);
			this.state = 1191;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 1190;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1193;
			this.selectItem();
			this.state = 1198;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1194;
					this.match(TrinoSqlParser.T__2);
					this.state = 1195;
					this.selectItem();
					}
					}
				}
				this.state = 1200;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
			}
			this.state = 1210;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				{
				this.state = 1201;
				this.match(TrinoSqlParser.KW_FROM);
				this.state = 1202;
				this.relation(0);
				this.state = 1207;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1203;
						this.match(TrinoSqlParser.T__2);
						this.state = 1204;
						this.relation(0);
						}
						}
					}
					this.state = 1209;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
				}
				}
				break;
			}
			this.state = 1214;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				{
				this.state = 1212;
				this.match(TrinoSqlParser.KW_WHERE);
				this.state = 1213;
				_localctx._where = this.booleanExpression(0);
				}
				break;
			}
			this.state = 1219;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				{
				this.state = 1216;
				this.match(TrinoSqlParser.KW_GROUP);
				this.state = 1217;
				this.match(TrinoSqlParser.KW_BY);
				this.state = 1218;
				this.groupBy();
				}
				break;
			}
			this.state = 1223;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				{
				this.state = 1221;
				this.match(TrinoSqlParser.KW_HAVING);
				this.state = 1222;
				_localctx._having = this.booleanExpression(0);
				}
				break;
			}
			this.state = 1234;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				{
				this.state = 1225;
				this.match(TrinoSqlParser.KW_WINDOW);
				this.state = 1226;
				this.windowDefinition();
				this.state = 1231;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1227;
						this.match(TrinoSqlParser.T__2);
						this.state = 1228;
						this.windowDefinition();
						}
						}
					}
					this.state = 1233;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
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
	public groupBy(): GroupByContext {
		let _localctx: GroupByContext = new GroupByContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, TrinoSqlParser.RULE_groupBy);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1237;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				{
				this.state = 1236;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1239;
			this.groupingElement();
			this.state = 1244;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1240;
					this.match(TrinoSqlParser.T__2);
					this.state = 1241;
					this.groupingElement();
					}
					}
				}
				this.state = 1246;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
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
	public groupingElement(): GroupingElementContext {
		let _localctx: GroupingElementContext = new GroupingElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, TrinoSqlParser.RULE_groupingElement);
		let _la: number;
		try {
			this.state = 1287;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				_localctx = new SingleGroupingSetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1247;
				this.groupingSet();
				}
				break;

			case 2:
				_localctx = new RollupContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1248;
				this.match(TrinoSqlParser.KW_ROLLUP);
				this.state = 1249;
				this.match(TrinoSqlParser.T__0);
				this.state = 1258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TrinoSqlParser.T__0) | (1 << TrinoSqlParser.KW_ADD) | (1 << TrinoSqlParser.KW_ADMIN) | (1 << TrinoSqlParser.KW_AFTER) | (1 << TrinoSqlParser.KW_ALL) | (1 << TrinoSqlParser.KW_ANALYZE) | (1 << TrinoSqlParser.KW_ANY) | (1 << TrinoSqlParser.KW_ARRAY) | (1 << TrinoSqlParser.KW_ASC) | (1 << TrinoSqlParser.KW_AT) | (1 << TrinoSqlParser.KW_AUTHORIZATION) | (1 << TrinoSqlParser.KW_BERNOULLI))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TrinoSqlParser.KW_CALL - 33)) | (1 << (TrinoSqlParser.KW_CASCADE - 33)) | (1 << (TrinoSqlParser.KW_CASE - 33)) | (1 << (TrinoSqlParser.KW_CAST - 33)) | (1 << (TrinoSqlParser.KW_CATALOGS - 33)) | (1 << (TrinoSqlParser.KW_COLUMN - 33)) | (1 << (TrinoSqlParser.KW_COLUMNS - 33)) | (1 << (TrinoSqlParser.KW_COMMENT - 33)) | (1 << (TrinoSqlParser.KW_COMMIT - 33)) | (1 << (TrinoSqlParser.KW_COMMITTED - 33)) | (1 << (TrinoSqlParser.KW_CURRENT - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_CATALOG - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_DATE - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_PATH - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_SCHEMA - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_TIME - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_TIMESTAMP - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_USER - 33)) | (1 << (TrinoSqlParser.KW_DATA - 33)) | (1 << (TrinoSqlParser.KW_DATE - 33)) | (1 << (TrinoSqlParser.KW_DAY - 33)) | (1 << (TrinoSqlParser.KW_DEFAULT - 33)) | (1 << (TrinoSqlParser.KW_DEFINER - 33)) | (1 << (TrinoSqlParser.KW_DESC - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (TrinoSqlParser.KW_DEFINE - 65)) | (1 << (TrinoSqlParser.KW_DISTRIBUTED - 65)) | (1 << (TrinoSqlParser.KW_DOUBLE - 65)) | (1 << (TrinoSqlParser.KW_EMPTY - 65)) | (1 << (TrinoSqlParser.KW_EXCLUDING - 65)) | (1 << (TrinoSqlParser.KW_EXISTS - 65)) | (1 << (TrinoSqlParser.KW_EXPLAIN - 65)) | (1 << (TrinoSqlParser.KW_EXTRACT - 65)) | (1 << (TrinoSqlParser.KW_FALSE - 65)) | (1 << (TrinoSqlParser.KW_FETCH - 65)) | (1 << (TrinoSqlParser.KW_FILTER - 65)) | (1 << (TrinoSqlParser.KW_FINAL - 65)) | (1 << (TrinoSqlParser.KW_FIRST - 65)) | (1 << (TrinoSqlParser.KW_FOLLOWING - 65)) | (1 << (TrinoSqlParser.KW_FORMAT - 65)) | (1 << (TrinoSqlParser.KW_FUNCTIONS - 65)) | (1 << (TrinoSqlParser.KW_GRANT - 65)) | (1 << (TrinoSqlParser.KW_GRANTED - 65)) | (1 << (TrinoSqlParser.KW_GRANTS - 65)) | (1 << (TrinoSqlParser.KW_DENY - 65)) | (1 << (TrinoSqlParser.KW_GRAPHVIZ - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (TrinoSqlParser.KW_GROUPING - 97)) | (1 << (TrinoSqlParser.KW_GROUPS - 97)) | (1 << (TrinoSqlParser.KW_HOUR - 97)) | (1 << (TrinoSqlParser.KW_IF - 97)) | (1 << (TrinoSqlParser.KW_IGNORE - 97)) | (1 << (TrinoSqlParser.KW_INCLUDING - 97)) | (1 << (TrinoSqlParser.KW_INITIAL - 97)) | (1 << (TrinoSqlParser.KW_INPUT - 97)) | (1 << (TrinoSqlParser.KW_INTERVAL - 97)) | (1 << (TrinoSqlParser.KW_INVOKER - 97)) | (1 << (TrinoSqlParser.KW_IO - 97)) | (1 << (TrinoSqlParser.KW_ISOLATION - 97)) | (1 << (TrinoSqlParser.KW_JSON - 97)) | (1 << (TrinoSqlParser.KW_LAST - 97)) | (1 << (TrinoSqlParser.KW_LATERAL - 97)) | (1 << (TrinoSqlParser.KW_LEVEL - 97)) | (1 << (TrinoSqlParser.KW_LIMIT - 97)) | (1 << (TrinoSqlParser.KW_LOCAL - 97)) | (1 << (TrinoSqlParser.KW_LOCALTIME - 97)) | (1 << (TrinoSqlParser.KW_LOCALTIMESTAMP - 97)) | (1 << (TrinoSqlParser.KW_LOGICAL - 97)) | (1 << (TrinoSqlParser.KW_MAP - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (TrinoSqlParser.KW_MATCH - 129)) | (1 << (TrinoSqlParser.KW_MATCHED - 129)) | (1 << (TrinoSqlParser.KW_MATCHES - 129)) | (1 << (TrinoSqlParser.KW_MATCH_RECOGNIZE - 129)) | (1 << (TrinoSqlParser.KW_MATERIALIZED - 129)) | (1 << (TrinoSqlParser.KW_MEASURES - 129)) | (1 << (TrinoSqlParser.KW_MERGE - 129)) | (1 << (TrinoSqlParser.KW_MINUTE - 129)) | (1 << (TrinoSqlParser.KW_MONTH - 129)) | (1 << (TrinoSqlParser.KW_NEXT - 129)) | (1 << (TrinoSqlParser.KW_NFC - 129)) | (1 << (TrinoSqlParser.KW_NFD - 129)) | (1 << (TrinoSqlParser.KW_NFKC - 129)) | (1 << (TrinoSqlParser.KW_NFKD - 129)) | (1 << (TrinoSqlParser.KW_NO - 129)) | (1 << (TrinoSqlParser.KW_NONE - 129)) | (1 << (TrinoSqlParser.KW_NORMALIZE - 129)) | (1 << (TrinoSqlParser.KW_NOT - 129)) | (1 << (TrinoSqlParser.KW_NULL - 129)) | (1 << (TrinoSqlParser.KW_NULLIF - 129)) | (1 << (TrinoSqlParser.KW_NULLS - 129)) | (1 << (TrinoSqlParser.KW_OFFSET - 129)) | (1 << (TrinoSqlParser.KW_OMIT - 129)) | (1 << (TrinoSqlParser.KW_ONE - 129)) | (1 << (TrinoSqlParser.KW_ONLY - 129)) | (1 << (TrinoSqlParser.KW_OPTION - 129)) | (1 << (TrinoSqlParser.KW_ORDINALITY - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (TrinoSqlParser.KW_OUTPUT - 161)) | (1 << (TrinoSqlParser.KW_OVER - 161)) | (1 << (TrinoSqlParser.KW_PARTITION - 161)) | (1 << (TrinoSqlParser.KW_PARTITIONS - 161)) | (1 << (TrinoSqlParser.KW_PAST - 161)) | (1 << (TrinoSqlParser.KW_PATH - 161)) | (1 << (TrinoSqlParser.KW_PATTERN - 161)) | (1 << (TrinoSqlParser.KW_PER - 161)) | (1 << (TrinoSqlParser.KW_PERMUTE - 161)) | (1 << (TrinoSqlParser.KW_POSITION - 161)) | (1 << (TrinoSqlParser.KW_PRECEDING - 161)) | (1 << (TrinoSqlParser.KW_PRECISION - 161)) | (1 << (TrinoSqlParser.KW_PRIVILEGES - 161)) | (1 << (TrinoSqlParser.KW_PROPERTIES - 161)) | (1 << (TrinoSqlParser.KW_RANGE - 161)) | (1 << (TrinoSqlParser.KW_READ - 161)) | (1 << (TrinoSqlParser.KW_REFRESH - 161)) | (1 << (TrinoSqlParser.KW_RENAME - 161)) | (1 << (TrinoSqlParser.KW_REPEATABLE - 161)) | (1 << (TrinoSqlParser.KW_REPLACE - 161)) | (1 << (TrinoSqlParser.KW_RESET - 161)) | (1 << (TrinoSqlParser.KW_RESPECT - 161)) | (1 << (TrinoSqlParser.KW_RESTRICT - 161)) | (1 << (TrinoSqlParser.KW_REVOKE - 161)) | (1 << (TrinoSqlParser.KW_ROLE - 161)) | (1 << (TrinoSqlParser.KW_ROLES - 161)) | (1 << (TrinoSqlParser.KW_ROLLBACK - 161)) | (1 << (TrinoSqlParser.KW_ROW - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (TrinoSqlParser.KW_ROWS - 193)) | (1 << (TrinoSqlParser.KW_RUNNING - 193)) | (1 << (TrinoSqlParser.KW_SCHEMA - 193)) | (1 << (TrinoSqlParser.KW_SCHEMAS - 193)) | (1 << (TrinoSqlParser.KW_SECOND - 193)) | (1 << (TrinoSqlParser.KW_SECURITY - 193)) | (1 << (TrinoSqlParser.KW_SEEK - 193)) | (1 << (TrinoSqlParser.KW_SERIALIZABLE - 193)) | (1 << (TrinoSqlParser.KW_SESSION - 193)) | (1 << (TrinoSqlParser.KW_SET - 193)) | (1 << (TrinoSqlParser.KW_SETS - 193)) | (1 << (TrinoSqlParser.KW_SHOW - 193)) | (1 << (TrinoSqlParser.KW_SOME - 193)) | (1 << (TrinoSqlParser.KW_START - 193)) | (1 << (TrinoSqlParser.KW_STATS - 193)) | (1 << (TrinoSqlParser.KW_SUBSET - 193)) | (1 << (TrinoSqlParser.KW_SUBSTRING - 193)) | (1 << (TrinoSqlParser.KW_SYSTEM - 193)) | (1 << (TrinoSqlParser.KW_TABLES - 193)) | (1 << (TrinoSqlParser.KW_TABLESAMPLE - 193)) | (1 << (TrinoSqlParser.KW_TEXT - 193)) | (1 << (TrinoSqlParser.KW_TIES - 193)) | (1 << (TrinoSqlParser.KW_TIME - 193)) | (1 << (TrinoSqlParser.KW_TIMESTAMP - 193)) | (1 << (TrinoSqlParser.KW_TO - 193)) | (1 << (TrinoSqlParser.KW_TRANSACTION - 193)) | (1 << (TrinoSqlParser.KW_TRUNCATE - 193)) | (1 << (TrinoSqlParser.KW_TRUE - 193)) | (1 << (TrinoSqlParser.KW_TRY_CAST - 193)))) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (TrinoSqlParser.KW_TYPE - 225)) | (1 << (TrinoSqlParser.KW_UNBOUNDED - 225)) | (1 << (TrinoSqlParser.KW_UNCOMMITTED - 225)) | (1 << (TrinoSqlParser.KW_UNMATCHED - 225)) | (1 << (TrinoSqlParser.KW_UPDATE - 225)) | (1 << (TrinoSqlParser.KW_USE - 225)) | (1 << (TrinoSqlParser.KW_USER - 225)) | (1 << (TrinoSqlParser.KW_VALIDATE - 225)) | (1 << (TrinoSqlParser.KW_VERBOSE - 225)) | (1 << (TrinoSqlParser.KW_VIEW - 225)) | (1 << (TrinoSqlParser.KW_WINDOW - 225)) | (1 << (TrinoSqlParser.KW_WITHOUT - 225)) | (1 << (TrinoSqlParser.KW_WORK - 225)) | (1 << (TrinoSqlParser.KW_WRITE - 225)) | (1 << (TrinoSqlParser.KW_YEAR - 225)) | (1 << (TrinoSqlParser.KW_ZONE - 225)) | (1 << (TrinoSqlParser.PLUS - 225)) | (1 << (TrinoSqlParser.MINUS - 225)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (TrinoSqlParser.QUESTION_MARK - 261)) | (1 << (TrinoSqlParser.STRING - 261)) | (1 << (TrinoSqlParser.UNICODE_STRING - 261)) | (1 << (TrinoSqlParser.BINARY_LITERAL - 261)) | (1 << (TrinoSqlParser.INTEGER_VALUE - 261)) | (1 << (TrinoSqlParser.DECIMAL_VALUE - 261)) | (1 << (TrinoSqlParser.DOUBLE_VALUE - 261)) | (1 << (TrinoSqlParser.IDENTIFIER - 261)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 261)))) !== 0)) {
					{
					this.state = 1250;
					this.groupingTerm();
					this.state = 1255;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 1251;
						this.match(TrinoSqlParser.T__2);
						this.state = 1252;
						this.groupingTerm();
						}
						}
						this.state = 1257;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1260;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 3:
				_localctx = new CubeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1261;
				this.match(TrinoSqlParser.KW_CUBE);
				this.state = 1262;
				this.match(TrinoSqlParser.T__0);
				this.state = 1271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TrinoSqlParser.T__0) | (1 << TrinoSqlParser.KW_ADD) | (1 << TrinoSqlParser.KW_ADMIN) | (1 << TrinoSqlParser.KW_AFTER) | (1 << TrinoSqlParser.KW_ALL) | (1 << TrinoSqlParser.KW_ANALYZE) | (1 << TrinoSqlParser.KW_ANY) | (1 << TrinoSqlParser.KW_ARRAY) | (1 << TrinoSqlParser.KW_ASC) | (1 << TrinoSqlParser.KW_AT) | (1 << TrinoSqlParser.KW_AUTHORIZATION) | (1 << TrinoSqlParser.KW_BERNOULLI))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TrinoSqlParser.KW_CALL - 33)) | (1 << (TrinoSqlParser.KW_CASCADE - 33)) | (1 << (TrinoSqlParser.KW_CASE - 33)) | (1 << (TrinoSqlParser.KW_CAST - 33)) | (1 << (TrinoSqlParser.KW_CATALOGS - 33)) | (1 << (TrinoSqlParser.KW_COLUMN - 33)) | (1 << (TrinoSqlParser.KW_COLUMNS - 33)) | (1 << (TrinoSqlParser.KW_COMMENT - 33)) | (1 << (TrinoSqlParser.KW_COMMIT - 33)) | (1 << (TrinoSqlParser.KW_COMMITTED - 33)) | (1 << (TrinoSqlParser.KW_CURRENT - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_CATALOG - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_DATE - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_PATH - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_SCHEMA - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_TIME - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_TIMESTAMP - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_USER - 33)) | (1 << (TrinoSqlParser.KW_DATA - 33)) | (1 << (TrinoSqlParser.KW_DATE - 33)) | (1 << (TrinoSqlParser.KW_DAY - 33)) | (1 << (TrinoSqlParser.KW_DEFAULT - 33)) | (1 << (TrinoSqlParser.KW_DEFINER - 33)) | (1 << (TrinoSqlParser.KW_DESC - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (TrinoSqlParser.KW_DEFINE - 65)) | (1 << (TrinoSqlParser.KW_DISTRIBUTED - 65)) | (1 << (TrinoSqlParser.KW_DOUBLE - 65)) | (1 << (TrinoSqlParser.KW_EMPTY - 65)) | (1 << (TrinoSqlParser.KW_EXCLUDING - 65)) | (1 << (TrinoSqlParser.KW_EXISTS - 65)) | (1 << (TrinoSqlParser.KW_EXPLAIN - 65)) | (1 << (TrinoSqlParser.KW_EXTRACT - 65)) | (1 << (TrinoSqlParser.KW_FALSE - 65)) | (1 << (TrinoSqlParser.KW_FETCH - 65)) | (1 << (TrinoSqlParser.KW_FILTER - 65)) | (1 << (TrinoSqlParser.KW_FINAL - 65)) | (1 << (TrinoSqlParser.KW_FIRST - 65)) | (1 << (TrinoSqlParser.KW_FOLLOWING - 65)) | (1 << (TrinoSqlParser.KW_FORMAT - 65)) | (1 << (TrinoSqlParser.KW_FUNCTIONS - 65)) | (1 << (TrinoSqlParser.KW_GRANT - 65)) | (1 << (TrinoSqlParser.KW_GRANTED - 65)) | (1 << (TrinoSqlParser.KW_GRANTS - 65)) | (1 << (TrinoSqlParser.KW_DENY - 65)) | (1 << (TrinoSqlParser.KW_GRAPHVIZ - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (TrinoSqlParser.KW_GROUPING - 97)) | (1 << (TrinoSqlParser.KW_GROUPS - 97)) | (1 << (TrinoSqlParser.KW_HOUR - 97)) | (1 << (TrinoSqlParser.KW_IF - 97)) | (1 << (TrinoSqlParser.KW_IGNORE - 97)) | (1 << (TrinoSqlParser.KW_INCLUDING - 97)) | (1 << (TrinoSqlParser.KW_INITIAL - 97)) | (1 << (TrinoSqlParser.KW_INPUT - 97)) | (1 << (TrinoSqlParser.KW_INTERVAL - 97)) | (1 << (TrinoSqlParser.KW_INVOKER - 97)) | (1 << (TrinoSqlParser.KW_IO - 97)) | (1 << (TrinoSqlParser.KW_ISOLATION - 97)) | (1 << (TrinoSqlParser.KW_JSON - 97)) | (1 << (TrinoSqlParser.KW_LAST - 97)) | (1 << (TrinoSqlParser.KW_LATERAL - 97)) | (1 << (TrinoSqlParser.KW_LEVEL - 97)) | (1 << (TrinoSqlParser.KW_LIMIT - 97)) | (1 << (TrinoSqlParser.KW_LOCAL - 97)) | (1 << (TrinoSqlParser.KW_LOCALTIME - 97)) | (1 << (TrinoSqlParser.KW_LOCALTIMESTAMP - 97)) | (1 << (TrinoSqlParser.KW_LOGICAL - 97)) | (1 << (TrinoSqlParser.KW_MAP - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (TrinoSqlParser.KW_MATCH - 129)) | (1 << (TrinoSqlParser.KW_MATCHED - 129)) | (1 << (TrinoSqlParser.KW_MATCHES - 129)) | (1 << (TrinoSqlParser.KW_MATCH_RECOGNIZE - 129)) | (1 << (TrinoSqlParser.KW_MATERIALIZED - 129)) | (1 << (TrinoSqlParser.KW_MEASURES - 129)) | (1 << (TrinoSqlParser.KW_MERGE - 129)) | (1 << (TrinoSqlParser.KW_MINUTE - 129)) | (1 << (TrinoSqlParser.KW_MONTH - 129)) | (1 << (TrinoSqlParser.KW_NEXT - 129)) | (1 << (TrinoSqlParser.KW_NFC - 129)) | (1 << (TrinoSqlParser.KW_NFD - 129)) | (1 << (TrinoSqlParser.KW_NFKC - 129)) | (1 << (TrinoSqlParser.KW_NFKD - 129)) | (1 << (TrinoSqlParser.KW_NO - 129)) | (1 << (TrinoSqlParser.KW_NONE - 129)) | (1 << (TrinoSqlParser.KW_NORMALIZE - 129)) | (1 << (TrinoSqlParser.KW_NOT - 129)) | (1 << (TrinoSqlParser.KW_NULL - 129)) | (1 << (TrinoSqlParser.KW_NULLIF - 129)) | (1 << (TrinoSqlParser.KW_NULLS - 129)) | (1 << (TrinoSqlParser.KW_OFFSET - 129)) | (1 << (TrinoSqlParser.KW_OMIT - 129)) | (1 << (TrinoSqlParser.KW_ONE - 129)) | (1 << (TrinoSqlParser.KW_ONLY - 129)) | (1 << (TrinoSqlParser.KW_OPTION - 129)) | (1 << (TrinoSqlParser.KW_ORDINALITY - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (TrinoSqlParser.KW_OUTPUT - 161)) | (1 << (TrinoSqlParser.KW_OVER - 161)) | (1 << (TrinoSqlParser.KW_PARTITION - 161)) | (1 << (TrinoSqlParser.KW_PARTITIONS - 161)) | (1 << (TrinoSqlParser.KW_PAST - 161)) | (1 << (TrinoSqlParser.KW_PATH - 161)) | (1 << (TrinoSqlParser.KW_PATTERN - 161)) | (1 << (TrinoSqlParser.KW_PER - 161)) | (1 << (TrinoSqlParser.KW_PERMUTE - 161)) | (1 << (TrinoSqlParser.KW_POSITION - 161)) | (1 << (TrinoSqlParser.KW_PRECEDING - 161)) | (1 << (TrinoSqlParser.KW_PRECISION - 161)) | (1 << (TrinoSqlParser.KW_PRIVILEGES - 161)) | (1 << (TrinoSqlParser.KW_PROPERTIES - 161)) | (1 << (TrinoSqlParser.KW_RANGE - 161)) | (1 << (TrinoSqlParser.KW_READ - 161)) | (1 << (TrinoSqlParser.KW_REFRESH - 161)) | (1 << (TrinoSqlParser.KW_RENAME - 161)) | (1 << (TrinoSqlParser.KW_REPEATABLE - 161)) | (1 << (TrinoSqlParser.KW_REPLACE - 161)) | (1 << (TrinoSqlParser.KW_RESET - 161)) | (1 << (TrinoSqlParser.KW_RESPECT - 161)) | (1 << (TrinoSqlParser.KW_RESTRICT - 161)) | (1 << (TrinoSqlParser.KW_REVOKE - 161)) | (1 << (TrinoSqlParser.KW_ROLE - 161)) | (1 << (TrinoSqlParser.KW_ROLES - 161)) | (1 << (TrinoSqlParser.KW_ROLLBACK - 161)) | (1 << (TrinoSqlParser.KW_ROW - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (TrinoSqlParser.KW_ROWS - 193)) | (1 << (TrinoSqlParser.KW_RUNNING - 193)) | (1 << (TrinoSqlParser.KW_SCHEMA - 193)) | (1 << (TrinoSqlParser.KW_SCHEMAS - 193)) | (1 << (TrinoSqlParser.KW_SECOND - 193)) | (1 << (TrinoSqlParser.KW_SECURITY - 193)) | (1 << (TrinoSqlParser.KW_SEEK - 193)) | (1 << (TrinoSqlParser.KW_SERIALIZABLE - 193)) | (1 << (TrinoSqlParser.KW_SESSION - 193)) | (1 << (TrinoSqlParser.KW_SET - 193)) | (1 << (TrinoSqlParser.KW_SETS - 193)) | (1 << (TrinoSqlParser.KW_SHOW - 193)) | (1 << (TrinoSqlParser.KW_SOME - 193)) | (1 << (TrinoSqlParser.KW_START - 193)) | (1 << (TrinoSqlParser.KW_STATS - 193)) | (1 << (TrinoSqlParser.KW_SUBSET - 193)) | (1 << (TrinoSqlParser.KW_SUBSTRING - 193)) | (1 << (TrinoSqlParser.KW_SYSTEM - 193)) | (1 << (TrinoSqlParser.KW_TABLES - 193)) | (1 << (TrinoSqlParser.KW_TABLESAMPLE - 193)) | (1 << (TrinoSqlParser.KW_TEXT - 193)) | (1 << (TrinoSqlParser.KW_TIES - 193)) | (1 << (TrinoSqlParser.KW_TIME - 193)) | (1 << (TrinoSqlParser.KW_TIMESTAMP - 193)) | (1 << (TrinoSqlParser.KW_TO - 193)) | (1 << (TrinoSqlParser.KW_TRANSACTION - 193)) | (1 << (TrinoSqlParser.KW_TRUNCATE - 193)) | (1 << (TrinoSqlParser.KW_TRUE - 193)) | (1 << (TrinoSqlParser.KW_TRY_CAST - 193)))) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (TrinoSqlParser.KW_TYPE - 225)) | (1 << (TrinoSqlParser.KW_UNBOUNDED - 225)) | (1 << (TrinoSqlParser.KW_UNCOMMITTED - 225)) | (1 << (TrinoSqlParser.KW_UNMATCHED - 225)) | (1 << (TrinoSqlParser.KW_UPDATE - 225)) | (1 << (TrinoSqlParser.KW_USE - 225)) | (1 << (TrinoSqlParser.KW_USER - 225)) | (1 << (TrinoSqlParser.KW_VALIDATE - 225)) | (1 << (TrinoSqlParser.KW_VERBOSE - 225)) | (1 << (TrinoSqlParser.KW_VIEW - 225)) | (1 << (TrinoSqlParser.KW_WINDOW - 225)) | (1 << (TrinoSqlParser.KW_WITHOUT - 225)) | (1 << (TrinoSqlParser.KW_WORK - 225)) | (1 << (TrinoSqlParser.KW_WRITE - 225)) | (1 << (TrinoSqlParser.KW_YEAR - 225)) | (1 << (TrinoSqlParser.KW_ZONE - 225)) | (1 << (TrinoSqlParser.PLUS - 225)) | (1 << (TrinoSqlParser.MINUS - 225)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (TrinoSqlParser.QUESTION_MARK - 261)) | (1 << (TrinoSqlParser.STRING - 261)) | (1 << (TrinoSqlParser.UNICODE_STRING - 261)) | (1 << (TrinoSqlParser.BINARY_LITERAL - 261)) | (1 << (TrinoSqlParser.INTEGER_VALUE - 261)) | (1 << (TrinoSqlParser.DECIMAL_VALUE - 261)) | (1 << (TrinoSqlParser.DOUBLE_VALUE - 261)) | (1 << (TrinoSqlParser.IDENTIFIER - 261)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 261)))) !== 0)) {
					{
					this.state = 1263;
					this.groupingTerm();
					this.state = 1268;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 1264;
						this.match(TrinoSqlParser.T__2);
						this.state = 1265;
						this.groupingTerm();
						}
						}
						this.state = 1270;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1273;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 4:
				_localctx = new MultipleGroupingSetsContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1274;
				this.match(TrinoSqlParser.KW_GROUPING);
				this.state = 1275;
				this.match(TrinoSqlParser.KW_SETS);
				this.state = 1276;
				this.match(TrinoSqlParser.T__0);
				this.state = 1277;
				this.groupingSet();
				this.state = 1282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 1278;
					this.match(TrinoSqlParser.T__2);
					this.state = 1279;
					this.groupingSet();
					}
					}
					this.state = 1284;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1285;
				this.match(TrinoSqlParser.T__1);
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
		this.enterRule(_localctx, 54, TrinoSqlParser.RULE_groupingSet);
		let _la: number;
		try {
			this.state = 1302;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1289;
				this.match(TrinoSqlParser.T__0);
				this.state = 1298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TrinoSqlParser.T__0) | (1 << TrinoSqlParser.KW_ADD) | (1 << TrinoSqlParser.KW_ADMIN) | (1 << TrinoSqlParser.KW_AFTER) | (1 << TrinoSqlParser.KW_ALL) | (1 << TrinoSqlParser.KW_ANALYZE) | (1 << TrinoSqlParser.KW_ANY) | (1 << TrinoSqlParser.KW_ARRAY) | (1 << TrinoSqlParser.KW_ASC) | (1 << TrinoSqlParser.KW_AT) | (1 << TrinoSqlParser.KW_AUTHORIZATION) | (1 << TrinoSqlParser.KW_BERNOULLI))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TrinoSqlParser.KW_CALL - 33)) | (1 << (TrinoSqlParser.KW_CASCADE - 33)) | (1 << (TrinoSqlParser.KW_CASE - 33)) | (1 << (TrinoSqlParser.KW_CAST - 33)) | (1 << (TrinoSqlParser.KW_CATALOGS - 33)) | (1 << (TrinoSqlParser.KW_COLUMN - 33)) | (1 << (TrinoSqlParser.KW_COLUMNS - 33)) | (1 << (TrinoSqlParser.KW_COMMENT - 33)) | (1 << (TrinoSqlParser.KW_COMMIT - 33)) | (1 << (TrinoSqlParser.KW_COMMITTED - 33)) | (1 << (TrinoSqlParser.KW_CURRENT - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_CATALOG - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_DATE - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_PATH - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_SCHEMA - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_TIME - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_TIMESTAMP - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_USER - 33)) | (1 << (TrinoSqlParser.KW_DATA - 33)) | (1 << (TrinoSqlParser.KW_DATE - 33)) | (1 << (TrinoSqlParser.KW_DAY - 33)) | (1 << (TrinoSqlParser.KW_DEFAULT - 33)) | (1 << (TrinoSqlParser.KW_DEFINER - 33)) | (1 << (TrinoSqlParser.KW_DESC - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (TrinoSqlParser.KW_DEFINE - 65)) | (1 << (TrinoSqlParser.KW_DISTRIBUTED - 65)) | (1 << (TrinoSqlParser.KW_DOUBLE - 65)) | (1 << (TrinoSqlParser.KW_EMPTY - 65)) | (1 << (TrinoSqlParser.KW_EXCLUDING - 65)) | (1 << (TrinoSqlParser.KW_EXISTS - 65)) | (1 << (TrinoSqlParser.KW_EXPLAIN - 65)) | (1 << (TrinoSqlParser.KW_EXTRACT - 65)) | (1 << (TrinoSqlParser.KW_FALSE - 65)) | (1 << (TrinoSqlParser.KW_FETCH - 65)) | (1 << (TrinoSqlParser.KW_FILTER - 65)) | (1 << (TrinoSqlParser.KW_FINAL - 65)) | (1 << (TrinoSqlParser.KW_FIRST - 65)) | (1 << (TrinoSqlParser.KW_FOLLOWING - 65)) | (1 << (TrinoSqlParser.KW_FORMAT - 65)) | (1 << (TrinoSqlParser.KW_FUNCTIONS - 65)) | (1 << (TrinoSqlParser.KW_GRANT - 65)) | (1 << (TrinoSqlParser.KW_GRANTED - 65)) | (1 << (TrinoSqlParser.KW_GRANTS - 65)) | (1 << (TrinoSqlParser.KW_DENY - 65)) | (1 << (TrinoSqlParser.KW_GRAPHVIZ - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (TrinoSqlParser.KW_GROUPING - 97)) | (1 << (TrinoSqlParser.KW_GROUPS - 97)) | (1 << (TrinoSqlParser.KW_HOUR - 97)) | (1 << (TrinoSqlParser.KW_IF - 97)) | (1 << (TrinoSqlParser.KW_IGNORE - 97)) | (1 << (TrinoSqlParser.KW_INCLUDING - 97)) | (1 << (TrinoSqlParser.KW_INITIAL - 97)) | (1 << (TrinoSqlParser.KW_INPUT - 97)) | (1 << (TrinoSqlParser.KW_INTERVAL - 97)) | (1 << (TrinoSqlParser.KW_INVOKER - 97)) | (1 << (TrinoSqlParser.KW_IO - 97)) | (1 << (TrinoSqlParser.KW_ISOLATION - 97)) | (1 << (TrinoSqlParser.KW_JSON - 97)) | (1 << (TrinoSqlParser.KW_LAST - 97)) | (1 << (TrinoSqlParser.KW_LATERAL - 97)) | (1 << (TrinoSqlParser.KW_LEVEL - 97)) | (1 << (TrinoSqlParser.KW_LIMIT - 97)) | (1 << (TrinoSqlParser.KW_LOCAL - 97)) | (1 << (TrinoSqlParser.KW_LOCALTIME - 97)) | (1 << (TrinoSqlParser.KW_LOCALTIMESTAMP - 97)) | (1 << (TrinoSqlParser.KW_LOGICAL - 97)) | (1 << (TrinoSqlParser.KW_MAP - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (TrinoSqlParser.KW_MATCH - 129)) | (1 << (TrinoSqlParser.KW_MATCHED - 129)) | (1 << (TrinoSqlParser.KW_MATCHES - 129)) | (1 << (TrinoSqlParser.KW_MATCH_RECOGNIZE - 129)) | (1 << (TrinoSqlParser.KW_MATERIALIZED - 129)) | (1 << (TrinoSqlParser.KW_MEASURES - 129)) | (1 << (TrinoSqlParser.KW_MERGE - 129)) | (1 << (TrinoSqlParser.KW_MINUTE - 129)) | (1 << (TrinoSqlParser.KW_MONTH - 129)) | (1 << (TrinoSqlParser.KW_NEXT - 129)) | (1 << (TrinoSqlParser.KW_NFC - 129)) | (1 << (TrinoSqlParser.KW_NFD - 129)) | (1 << (TrinoSqlParser.KW_NFKC - 129)) | (1 << (TrinoSqlParser.KW_NFKD - 129)) | (1 << (TrinoSqlParser.KW_NO - 129)) | (1 << (TrinoSqlParser.KW_NONE - 129)) | (1 << (TrinoSqlParser.KW_NORMALIZE - 129)) | (1 << (TrinoSqlParser.KW_NOT - 129)) | (1 << (TrinoSqlParser.KW_NULL - 129)) | (1 << (TrinoSqlParser.KW_NULLIF - 129)) | (1 << (TrinoSqlParser.KW_NULLS - 129)) | (1 << (TrinoSqlParser.KW_OFFSET - 129)) | (1 << (TrinoSqlParser.KW_OMIT - 129)) | (1 << (TrinoSqlParser.KW_ONE - 129)) | (1 << (TrinoSqlParser.KW_ONLY - 129)) | (1 << (TrinoSqlParser.KW_OPTION - 129)) | (1 << (TrinoSqlParser.KW_ORDINALITY - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (TrinoSqlParser.KW_OUTPUT - 161)) | (1 << (TrinoSqlParser.KW_OVER - 161)) | (1 << (TrinoSqlParser.KW_PARTITION - 161)) | (1 << (TrinoSqlParser.KW_PARTITIONS - 161)) | (1 << (TrinoSqlParser.KW_PAST - 161)) | (1 << (TrinoSqlParser.KW_PATH - 161)) | (1 << (TrinoSqlParser.KW_PATTERN - 161)) | (1 << (TrinoSqlParser.KW_PER - 161)) | (1 << (TrinoSqlParser.KW_PERMUTE - 161)) | (1 << (TrinoSqlParser.KW_POSITION - 161)) | (1 << (TrinoSqlParser.KW_PRECEDING - 161)) | (1 << (TrinoSqlParser.KW_PRECISION - 161)) | (1 << (TrinoSqlParser.KW_PRIVILEGES - 161)) | (1 << (TrinoSqlParser.KW_PROPERTIES - 161)) | (1 << (TrinoSqlParser.KW_RANGE - 161)) | (1 << (TrinoSqlParser.KW_READ - 161)) | (1 << (TrinoSqlParser.KW_REFRESH - 161)) | (1 << (TrinoSqlParser.KW_RENAME - 161)) | (1 << (TrinoSqlParser.KW_REPEATABLE - 161)) | (1 << (TrinoSqlParser.KW_REPLACE - 161)) | (1 << (TrinoSqlParser.KW_RESET - 161)) | (1 << (TrinoSqlParser.KW_RESPECT - 161)) | (1 << (TrinoSqlParser.KW_RESTRICT - 161)) | (1 << (TrinoSqlParser.KW_REVOKE - 161)) | (1 << (TrinoSqlParser.KW_ROLE - 161)) | (1 << (TrinoSqlParser.KW_ROLES - 161)) | (1 << (TrinoSqlParser.KW_ROLLBACK - 161)) | (1 << (TrinoSqlParser.KW_ROW - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (TrinoSqlParser.KW_ROWS - 193)) | (1 << (TrinoSqlParser.KW_RUNNING - 193)) | (1 << (TrinoSqlParser.KW_SCHEMA - 193)) | (1 << (TrinoSqlParser.KW_SCHEMAS - 193)) | (1 << (TrinoSqlParser.KW_SECOND - 193)) | (1 << (TrinoSqlParser.KW_SECURITY - 193)) | (1 << (TrinoSqlParser.KW_SEEK - 193)) | (1 << (TrinoSqlParser.KW_SERIALIZABLE - 193)) | (1 << (TrinoSqlParser.KW_SESSION - 193)) | (1 << (TrinoSqlParser.KW_SET - 193)) | (1 << (TrinoSqlParser.KW_SETS - 193)) | (1 << (TrinoSqlParser.KW_SHOW - 193)) | (1 << (TrinoSqlParser.KW_SOME - 193)) | (1 << (TrinoSqlParser.KW_START - 193)) | (1 << (TrinoSqlParser.KW_STATS - 193)) | (1 << (TrinoSqlParser.KW_SUBSET - 193)) | (1 << (TrinoSqlParser.KW_SUBSTRING - 193)) | (1 << (TrinoSqlParser.KW_SYSTEM - 193)) | (1 << (TrinoSqlParser.KW_TABLES - 193)) | (1 << (TrinoSqlParser.KW_TABLESAMPLE - 193)) | (1 << (TrinoSqlParser.KW_TEXT - 193)) | (1 << (TrinoSqlParser.KW_TIES - 193)) | (1 << (TrinoSqlParser.KW_TIME - 193)) | (1 << (TrinoSqlParser.KW_TIMESTAMP - 193)) | (1 << (TrinoSqlParser.KW_TO - 193)) | (1 << (TrinoSqlParser.KW_TRANSACTION - 193)) | (1 << (TrinoSqlParser.KW_TRUNCATE - 193)) | (1 << (TrinoSqlParser.KW_TRUE - 193)) | (1 << (TrinoSqlParser.KW_TRY_CAST - 193)))) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (TrinoSqlParser.KW_TYPE - 225)) | (1 << (TrinoSqlParser.KW_UNBOUNDED - 225)) | (1 << (TrinoSqlParser.KW_UNCOMMITTED - 225)) | (1 << (TrinoSqlParser.KW_UNMATCHED - 225)) | (1 << (TrinoSqlParser.KW_UPDATE - 225)) | (1 << (TrinoSqlParser.KW_USE - 225)) | (1 << (TrinoSqlParser.KW_USER - 225)) | (1 << (TrinoSqlParser.KW_VALIDATE - 225)) | (1 << (TrinoSqlParser.KW_VERBOSE - 225)) | (1 << (TrinoSqlParser.KW_VIEW - 225)) | (1 << (TrinoSqlParser.KW_WINDOW - 225)) | (1 << (TrinoSqlParser.KW_WITHOUT - 225)) | (1 << (TrinoSqlParser.KW_WORK - 225)) | (1 << (TrinoSqlParser.KW_WRITE - 225)) | (1 << (TrinoSqlParser.KW_YEAR - 225)) | (1 << (TrinoSqlParser.KW_ZONE - 225)) | (1 << (TrinoSqlParser.PLUS - 225)) | (1 << (TrinoSqlParser.MINUS - 225)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (TrinoSqlParser.QUESTION_MARK - 261)) | (1 << (TrinoSqlParser.STRING - 261)) | (1 << (TrinoSqlParser.UNICODE_STRING - 261)) | (1 << (TrinoSqlParser.BINARY_LITERAL - 261)) | (1 << (TrinoSqlParser.INTEGER_VALUE - 261)) | (1 << (TrinoSqlParser.DECIMAL_VALUE - 261)) | (1 << (TrinoSqlParser.DOUBLE_VALUE - 261)) | (1 << (TrinoSqlParser.IDENTIFIER - 261)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 261)))) !== 0)) {
					{
					this.state = 1290;
					this.groupingTerm();
					this.state = 1295;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 1291;
						this.match(TrinoSqlParser.T__2);
						this.state = 1292;
						this.groupingTerm();
						}
						}
						this.state = 1297;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1300;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1301;
				this.groupingTerm();
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
	public groupingTerm(): GroupingTermContext {
		let _localctx: GroupingTermContext = new GroupingTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, TrinoSqlParser.RULE_groupingTerm);
		try {
			this.state = 1306;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1304;
				this.columnName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1305;
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
	public windowDefinition(): WindowDefinitionContext {
		let _localctx: WindowDefinitionContext = new WindowDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, TrinoSqlParser.RULE_windowDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1308;
			_localctx._name = this.identifier();
			this.state = 1309;
			this.match(TrinoSqlParser.KW_AS);
			this.state = 1310;
			this.match(TrinoSqlParser.T__0);
			this.state = 1311;
			this.windowSpecification();
			this.state = 1312;
			this.match(TrinoSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowSpecification(): WindowSpecificationContext {
		let _localctx: WindowSpecificationContext = new WindowSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, TrinoSqlParser.RULE_windowSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1315;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
			case 1:
				{
				this.state = 1314;
				_localctx._existingWindowName = this.identifier();
				}
				break;
			}
			this.state = 1327;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.KW_PARTITION) {
				{
				this.state = 1317;
				this.match(TrinoSqlParser.KW_PARTITION);
				this.state = 1318;
				this.match(TrinoSqlParser.KW_BY);
				this.state = 1319;
				_localctx._expression = this.expression();
				_localctx._partition.push(_localctx._expression);
				this.state = 1324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 1320;
					this.match(TrinoSqlParser.T__2);
					this.state = 1321;
					_localctx._expression = this.expression();
					_localctx._partition.push(_localctx._expression);
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
			if (_la === TrinoSqlParser.KW_ORDER) {
				{
				this.state = 1329;
				this.match(TrinoSqlParser.KW_ORDER);
				this.state = 1330;
				this.match(TrinoSqlParser.KW_BY);
				this.state = 1331;
				this.sortItem();
				this.state = 1336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 1332;
					this.match(TrinoSqlParser.T__2);
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

			this.state = 1342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.KW_GROUPS || _la === TrinoSqlParser.KW_MEASURES || _la === TrinoSqlParser.KW_RANGE || _la === TrinoSqlParser.KW_ROWS) {
				{
				this.state = 1341;
				this.windowFrame();
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
	public namedQuery(): NamedQueryContext {
		let _localctx: NamedQueryContext = new NamedQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, TrinoSqlParser.RULE_namedQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1344;
			_localctx._name = this.identifier();
			this.state = 1346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.T__0) {
				{
				this.state = 1345;
				this.columnAliases();
				}
			}

			this.state = 1348;
			this.match(TrinoSqlParser.KW_AS);
			this.state = 1349;
			this.match(TrinoSqlParser.T__0);
			this.state = 1350;
			this.query();
			this.state = 1351;
			this.match(TrinoSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 64, TrinoSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1353;
			_la = this._input.LA(1);
			if (!(_la === TrinoSqlParser.KW_ALL || _la === TrinoSqlParser.KW_DISTINCT)) {
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
	public selectItem(): SelectItemContext {
		let _localctx: SelectItemContext = new SelectItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, TrinoSqlParser.RULE_selectItem);
		let _la: number;
		try {
			this.state = 1373;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				_localctx = new SelectSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1357;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
				case 1:
					{
					this.state = 1355;
					this.columnName();
					}
					break;

				case 2:
					{
					this.state = 1356;
					this.expression();
					}
					break;
				}
				this.state = 1363;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
				case 1:
					{
					this.state = 1360;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.KW_AS) {
						{
						this.state = 1359;
						this.match(TrinoSqlParser.KW_AS);
						}
					}

					this.state = 1362;
					this.identifier();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new SelectAllContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1365;
				this.primaryExpression(0);
				this.state = 1366;
				this.match(TrinoSqlParser.T__3);
				this.state = 1367;
				this.match(TrinoSqlParser.ASTERISK);
				this.state = 1370;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 176, this._ctx) ) {
				case 1:
					{
					this.state = 1368;
					this.match(TrinoSqlParser.KW_AS);
					this.state = 1369;
					this.columnAliases();
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new SelectAllContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1372;
				this.match(TrinoSqlParser.ASTERISK);
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

	public relation(): RelationContext;
	public relation(_p: number): RelationContext;
	// @RuleVersion(0)
	public relation(_p?: number): RelationContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RelationContext = new RelationContext(this._ctx, _parentState);
		let _prevctx: RelationContext = _localctx;
		let _startState: number = 68;
		this.enterRecursionRule(_localctx, 68, TrinoSqlParser.RULE_relation, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new RelationDefaultContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 1376;
			this.sampledRelation();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1396;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new JoinRelationContext(new RelationContext(_parentctx, _parentState));
					(_localctx as JoinRelationContext)._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_relation);
					this.state = 1378;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1392;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case TrinoSqlParser.KW_CROSS:
						{
						this.state = 1379;
						this.match(TrinoSqlParser.KW_CROSS);
						this.state = 1380;
						this.match(TrinoSqlParser.KW_JOIN);
						this.state = 1381;
						(_localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					case TrinoSqlParser.KW_FULL:
					case TrinoSqlParser.KW_INNER:
					case TrinoSqlParser.KW_JOIN:
					case TrinoSqlParser.KW_LEFT:
					case TrinoSqlParser.KW_RIGHT:
						{
						this.state = 1382;
						this.joinType();
						this.state = 1383;
						this.match(TrinoSqlParser.KW_JOIN);
						this.state = 1384;
						(_localctx as JoinRelationContext)._rightRelation = this.relation(0);
						this.state = 1385;
						this.joinCriteria();
						}
						break;
					case TrinoSqlParser.KW_NATURAL:
						{
						this.state = 1387;
						this.match(TrinoSqlParser.KW_NATURAL);
						this.state = 1388;
						this.joinType();
						this.state = 1389;
						this.match(TrinoSqlParser.KW_JOIN);
						this.state = 1390;
						(_localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 1398;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
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
	public joinType(): JoinTypeContext {
		let _localctx: JoinTypeContext = new JoinTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, TrinoSqlParser.RULE_joinType);
		let _la: number;
		try {
			this.state = 1414;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.KW_INNER:
			case TrinoSqlParser.KW_JOIN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_INNER) {
					{
					this.state = 1399;
					this.match(TrinoSqlParser.KW_INNER);
					}
				}

				}
				break;
			case TrinoSqlParser.KW_LEFT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1402;
				this.match(TrinoSqlParser.KW_LEFT);
				this.state = 1404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_OUTER) {
					{
					this.state = 1403;
					this.match(TrinoSqlParser.KW_OUTER);
					}
				}

				}
				break;
			case TrinoSqlParser.KW_RIGHT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1406;
				this.match(TrinoSqlParser.KW_RIGHT);
				this.state = 1408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_OUTER) {
					{
					this.state = 1407;
					this.match(TrinoSqlParser.KW_OUTER);
					}
				}

				}
				break;
			case TrinoSqlParser.KW_FULL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1410;
				this.match(TrinoSqlParser.KW_FULL);
				this.state = 1412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_OUTER) {
					{
					this.state = 1411;
					this.match(TrinoSqlParser.KW_OUTER);
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
	public joinCriteria(): JoinCriteriaContext {
		let _localctx: JoinCriteriaContext = new JoinCriteriaContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, TrinoSqlParser.RULE_joinCriteria);
		let _la: number;
		try {
			this.state = 1430;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.KW_ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1416;
				this.match(TrinoSqlParser.KW_ON);
				this.state = 1417;
				this.booleanExpression(0);
				}
				break;
			case TrinoSqlParser.KW_USING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1418;
				this.match(TrinoSqlParser.KW_USING);
				this.state = 1419;
				this.match(TrinoSqlParser.T__0);
				this.state = 1420;
				this.identifier();
				this.state = 1425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 1421;
					this.match(TrinoSqlParser.T__2);
					this.state = 1422;
					this.identifier();
					}
					}
					this.state = 1427;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1428;
				this.match(TrinoSqlParser.T__1);
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
	public sampledRelation(): SampledRelationContext {
		let _localctx: SampledRelationContext = new SampledRelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, TrinoSqlParser.RULE_sampledRelation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1432;
			this.patternRecognition();
			this.state = 1439;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
			case 1:
				{
				this.state = 1433;
				this.match(TrinoSqlParser.KW_TABLESAMPLE);
				this.state = 1434;
				this.sampleType();
				this.state = 1435;
				this.match(TrinoSqlParser.T__0);
				this.state = 1436;
				_localctx._percentage = this.expression();
				this.state = 1437;
				this.match(TrinoSqlParser.T__1);
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
	public sampleType(): SampleTypeContext {
		let _localctx: SampleTypeContext = new SampleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, TrinoSqlParser.RULE_sampleType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1441;
			_la = this._input.LA(1);
			if (!(_la === TrinoSqlParser.KW_BERNOULLI || _la === TrinoSqlParser.KW_SYSTEM)) {
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
	public patternRecognition(): PatternRecognitionContext {
		let _localctx: PatternRecognitionContext = new PatternRecognitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, TrinoSqlParser.RULE_patternRecognition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1443;
			this.aliasedRelation();
			this.state = 1526;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				{
				this.state = 1444;
				this.match(TrinoSqlParser.KW_MATCH_RECOGNIZE);
				this.state = 1445;
				this.match(TrinoSqlParser.T__0);
				this.state = 1456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_PARTITION) {
					{
					this.state = 1446;
					this.match(TrinoSqlParser.KW_PARTITION);
					this.state = 1447;
					this.match(TrinoSqlParser.KW_BY);
					this.state = 1448;
					_localctx._expression = this.expression();
					_localctx._partition.push(_localctx._expression);
					this.state = 1453;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 1449;
						this.match(TrinoSqlParser.T__2);
						this.state = 1450;
						_localctx._expression = this.expression();
						_localctx._partition.push(_localctx._expression);
						}
						}
						this.state = 1455;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_ORDER) {
					{
					this.state = 1458;
					this.match(TrinoSqlParser.KW_ORDER);
					this.state = 1459;
					this.match(TrinoSqlParser.KW_BY);
					this.state = 1460;
					this.sortItem();
					this.state = 1465;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 1461;
						this.match(TrinoSqlParser.T__2);
						this.state = 1462;
						this.sortItem();
						}
						}
						this.state = 1467;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_MEASURES) {
					{
					this.state = 1470;
					this.match(TrinoSqlParser.KW_MEASURES);
					this.state = 1471;
					this.measureDefinition();
					this.state = 1476;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 1472;
						this.match(TrinoSqlParser.T__2);
						this.state = 1473;
						this.measureDefinition();
						}
						}
						this.state = 1478;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_ALL || _la === TrinoSqlParser.KW_ONE) {
					{
					this.state = 1481;
					this.rowsPerMatch();
					}
				}

				this.state = 1487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_AFTER) {
					{
					this.state = 1484;
					this.match(TrinoSqlParser.KW_AFTER);
					this.state = 1485;
					this.match(TrinoSqlParser.KW_MATCH);
					this.state = 1486;
					this.skipTo();
					}
				}

				this.state = 1490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_INITIAL || _la === TrinoSqlParser.KW_SEEK) {
					{
					this.state = 1489;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.KW_INITIAL || _la === TrinoSqlParser.KW_SEEK)) {
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

				this.state = 1492;
				this.match(TrinoSqlParser.KW_PATTERN);
				this.state = 1493;
				this.match(TrinoSqlParser.T__0);
				this.state = 1494;
				this.rowPattern(0);
				this.state = 1495;
				this.match(TrinoSqlParser.T__1);
				this.state = 1505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_SUBSET) {
					{
					this.state = 1496;
					this.match(TrinoSqlParser.KW_SUBSET);
					this.state = 1497;
					this.subsetDefinition();
					this.state = 1502;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 1498;
						this.match(TrinoSqlParser.T__2);
						this.state = 1499;
						this.subsetDefinition();
						}
						}
						this.state = 1504;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1507;
				this.match(TrinoSqlParser.KW_DEFINE);
				this.state = 1508;
				this.variableDefinition();
				this.state = 1513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 1509;
					this.match(TrinoSqlParser.T__2);
					this.state = 1510;
					this.variableDefinition();
					}
					}
					this.state = 1515;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1516;
				this.match(TrinoSqlParser.T__1);
				this.state = 1524;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
				case 1:
					{
					this.state = 1518;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.KW_AS) {
						{
						this.state = 1517;
						this.match(TrinoSqlParser.KW_AS);
						}
					}

					this.state = 1520;
					this.identifier();
					this.state = 1522;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 201, this._ctx) ) {
					case 1:
						{
						this.state = 1521;
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public measureDefinition(): MeasureDefinitionContext {
		let _localctx: MeasureDefinitionContext = new MeasureDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, TrinoSqlParser.RULE_measureDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1528;
			this.expression();
			this.state = 1529;
			this.match(TrinoSqlParser.KW_AS);
			this.state = 1530;
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
	public rowsPerMatch(): RowsPerMatchContext {
		let _localctx: RowsPerMatchContext = new RowsPerMatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, TrinoSqlParser.RULE_rowsPerMatch);
		let _la: number;
		try {
			this.state = 1543;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.KW_ONE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1532;
				this.match(TrinoSqlParser.KW_ONE);
				this.state = 1533;
				this.match(TrinoSqlParser.KW_ROW);
				this.state = 1534;
				this.match(TrinoSqlParser.KW_PER);
				this.state = 1535;
				this.match(TrinoSqlParser.KW_MATCH);
				}
				break;
			case TrinoSqlParser.KW_ALL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1536;
				this.match(TrinoSqlParser.KW_ALL);
				this.state = 1537;
				this.match(TrinoSqlParser.KW_ROWS);
				this.state = 1538;
				this.match(TrinoSqlParser.KW_PER);
				this.state = 1539;
				this.match(TrinoSqlParser.KW_MATCH);
				this.state = 1541;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_OMIT || _la === TrinoSqlParser.KW_SHOW || _la === TrinoSqlParser.KW_WITH) {
					{
					this.state = 1540;
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyMatchHandling(): EmptyMatchHandlingContext {
		let _localctx: EmptyMatchHandlingContext = new EmptyMatchHandlingContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, TrinoSqlParser.RULE_emptyMatchHandling);
		try {
			this.state = 1554;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.KW_SHOW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1545;
				this.match(TrinoSqlParser.KW_SHOW);
				this.state = 1546;
				this.match(TrinoSqlParser.KW_EMPTY);
				this.state = 1547;
				this.match(TrinoSqlParser.KW_MATCHES);
				}
				break;
			case TrinoSqlParser.KW_OMIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1548;
				this.match(TrinoSqlParser.KW_OMIT);
				this.state = 1549;
				this.match(TrinoSqlParser.KW_EMPTY);
				this.state = 1550;
				this.match(TrinoSqlParser.KW_MATCHES);
				}
				break;
			case TrinoSqlParser.KW_WITH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1551;
				this.match(TrinoSqlParser.KW_WITH);
				this.state = 1552;
				this.match(TrinoSqlParser.KW_UNMATCHED);
				this.state = 1553;
				this.match(TrinoSqlParser.KW_ROWS);
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
	public skipTo(): SkipToContext {
		let _localctx: SkipToContext = new SkipToContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, TrinoSqlParser.RULE_skipTo);
		try {
			this.state = 1575;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 207, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1556;
				this.match(TrinoSqlParser.T__4);
				this.state = 1557;
				this.match(TrinoSqlParser.KW_TO);
				this.state = 1558;
				this.match(TrinoSqlParser.KW_NEXT);
				this.state = 1559;
				this.match(TrinoSqlParser.KW_ROW);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1560;
				this.match(TrinoSqlParser.T__4);
				this.state = 1561;
				this.match(TrinoSqlParser.KW_PAST);
				this.state = 1562;
				this.match(TrinoSqlParser.KW_LAST);
				this.state = 1563;
				this.match(TrinoSqlParser.KW_ROW);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1564;
				this.match(TrinoSqlParser.T__4);
				this.state = 1565;
				this.match(TrinoSqlParser.KW_TO);
				this.state = 1566;
				this.match(TrinoSqlParser.KW_FIRST);
				this.state = 1567;
				this.identifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1568;
				this.match(TrinoSqlParser.T__4);
				this.state = 1569;
				this.match(TrinoSqlParser.KW_TO);
				this.state = 1570;
				this.match(TrinoSqlParser.KW_LAST);
				this.state = 1571;
				this.identifier();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1572;
				this.match(TrinoSqlParser.T__4);
				this.state = 1573;
				this.match(TrinoSqlParser.KW_TO);
				this.state = 1574;
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
	public subsetDefinition(): SubsetDefinitionContext {
		let _localctx: SubsetDefinitionContext = new SubsetDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, TrinoSqlParser.RULE_subsetDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1577;
			_localctx._name = this.identifier();
			this.state = 1578;
			this.match(TrinoSqlParser.EQ);
			this.state = 1579;
			this.match(TrinoSqlParser.T__0);
			this.state = 1580;
			_localctx._identifier = this.identifier();
			_localctx._union.push(_localctx._identifier);
			this.state = 1585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TrinoSqlParser.T__2) {
				{
				{
				this.state = 1581;
				this.match(TrinoSqlParser.T__2);
				this.state = 1582;
				_localctx._identifier = this.identifier();
				_localctx._union.push(_localctx._identifier);
				}
				}
				this.state = 1587;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1588;
			this.match(TrinoSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDefinition(): VariableDefinitionContext {
		let _localctx: VariableDefinitionContext = new VariableDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, TrinoSqlParser.RULE_variableDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1590;
			this.identifier();
			this.state = 1591;
			this.match(TrinoSqlParser.KW_AS);
			this.state = 1592;
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
	public aliasedRelation(): AliasedRelationContext {
		let _localctx: AliasedRelationContext = new AliasedRelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, TrinoSqlParser.RULE_aliasedRelation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1594;
			this.relationPrimary();
			this.state = 1602;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				{
				this.state = 1596;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_AS) {
					{
					this.state = 1595;
					this.match(TrinoSqlParser.KW_AS);
					}
				}

				this.state = 1598;
				this.identifier();
				this.state = 1600;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 210, this._ctx) ) {
				case 1:
					{
					this.state = 1599;
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnListCreate(): ColumnListCreateContext {
		let _localctx: ColumnListCreateContext = new ColumnListCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, TrinoSqlParser.RULE_columnListCreate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1604;
			this.match(TrinoSqlParser.T__0);
			this.state = 1605;
			this.columnNameCreate();
			this.state = 1610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TrinoSqlParser.T__2) {
				{
				{
				this.state = 1606;
				this.match(TrinoSqlParser.T__2);
				this.state = 1607;
				this.columnNameCreate();
				}
				}
				this.state = 1612;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1613;
			this.match(TrinoSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnList(): ColumnListContext {
		let _localctx: ColumnListContext = new ColumnListContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, TrinoSqlParser.RULE_columnList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1615;
			this.match(TrinoSqlParser.T__0);
			this.state = 1616;
			this.columnName();
			this.state = 1621;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TrinoSqlParser.T__2) {
				{
				{
				this.state = 1617;
				this.match(TrinoSqlParser.T__2);
				this.state = 1618;
				this.columnName();
				}
				}
				this.state = 1623;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1624;
			this.match(TrinoSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnAliases(): ColumnAliasesContext {
		let _localctx: ColumnAliasesContext = new ColumnAliasesContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, TrinoSqlParser.RULE_columnAliases);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1626;
			this.match(TrinoSqlParser.T__0);
			this.state = 1627;
			this.identifier();
			this.state = 1632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TrinoSqlParser.T__2) {
				{
				{
				this.state = 1628;
				this.match(TrinoSqlParser.T__2);
				this.state = 1629;
				this.identifier();
				}
				}
				this.state = 1634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1635;
			this.match(TrinoSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 100, TrinoSqlParser.RULE_relationPrimary);
		let _la: number;
		try {
			this.state = 1666;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				_localctx = new TableOrViewRelationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1637;
				this.tableOrViewName();
				}
				break;

			case 2:
				_localctx = new SubqueryRelationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1638;
				this.match(TrinoSqlParser.T__0);
				this.state = 1639;
				this.query();
				this.state = 1640;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 3:
				_localctx = new UnnestContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1642;
				this.match(TrinoSqlParser.KW_UNNEST);
				this.state = 1643;
				this.match(TrinoSqlParser.T__0);
				this.state = 1644;
				this.expression();
				this.state = 1649;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 1645;
					this.match(TrinoSqlParser.T__2);
					this.state = 1646;
					this.expression();
					}
					}
					this.state = 1651;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1652;
				this.match(TrinoSqlParser.T__1);
				this.state = 1655;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 216, this._ctx) ) {
				case 1:
					{
					this.state = 1653;
					this.match(TrinoSqlParser.KW_WITH);
					this.state = 1654;
					this.match(TrinoSqlParser.KW_ORDINALITY);
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new LateralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1657;
				this.match(TrinoSqlParser.KW_LATERAL);
				this.state = 1658;
				this.match(TrinoSqlParser.T__0);
				this.state = 1659;
				this.query();
				this.state = 1660;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 5:
				_localctx = new ParenthesizedRelationContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1662;
				this.match(TrinoSqlParser.T__0);
				this.state = 1663;
				this.relation(0);
				this.state = 1664;
				this.match(TrinoSqlParser.T__1);
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
		this.enterRule(_localctx, 102, TrinoSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1668;
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
		let _startState: number = 104;
		this.enterRecursionRule(_localctx, 104, TrinoSqlParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1677;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.T__0:
			case TrinoSqlParser.KW_ADD:
			case TrinoSqlParser.KW_ADMIN:
			case TrinoSqlParser.KW_AFTER:
			case TrinoSqlParser.KW_ALL:
			case TrinoSqlParser.KW_ANALYZE:
			case TrinoSqlParser.KW_ANY:
			case TrinoSqlParser.KW_ARRAY:
			case TrinoSqlParser.KW_ASC:
			case TrinoSqlParser.KW_AT:
			case TrinoSqlParser.KW_AUTHORIZATION:
			case TrinoSqlParser.KW_BERNOULLI:
			case TrinoSqlParser.KW_CALL:
			case TrinoSqlParser.KW_CASCADE:
			case TrinoSqlParser.KW_CASE:
			case TrinoSqlParser.KW_CAST:
			case TrinoSqlParser.KW_CATALOGS:
			case TrinoSqlParser.KW_COLUMN:
			case TrinoSqlParser.KW_COLUMNS:
			case TrinoSqlParser.KW_COMMENT:
			case TrinoSqlParser.KW_COMMIT:
			case TrinoSqlParser.KW_COMMITTED:
			case TrinoSqlParser.KW_CURRENT:
			case TrinoSqlParser.KW_CURRENT_CATALOG:
			case TrinoSqlParser.KW_CURRENT_DATE:
			case TrinoSqlParser.KW_CURRENT_PATH:
			case TrinoSqlParser.KW_CURRENT_SCHEMA:
			case TrinoSqlParser.KW_CURRENT_TIME:
			case TrinoSqlParser.KW_CURRENT_TIMESTAMP:
			case TrinoSqlParser.KW_CURRENT_USER:
			case TrinoSqlParser.KW_DATA:
			case TrinoSqlParser.KW_DATE:
			case TrinoSqlParser.KW_DAY:
			case TrinoSqlParser.KW_DEFAULT:
			case TrinoSqlParser.KW_DEFINER:
			case TrinoSqlParser.KW_DESC:
			case TrinoSqlParser.KW_DEFINE:
			case TrinoSqlParser.KW_DISTRIBUTED:
			case TrinoSqlParser.KW_DOUBLE:
			case TrinoSqlParser.KW_EMPTY:
			case TrinoSqlParser.KW_EXCLUDING:
			case TrinoSqlParser.KW_EXISTS:
			case TrinoSqlParser.KW_EXPLAIN:
			case TrinoSqlParser.KW_EXTRACT:
			case TrinoSqlParser.KW_FALSE:
			case TrinoSqlParser.KW_FETCH:
			case TrinoSqlParser.KW_FILTER:
			case TrinoSqlParser.KW_FINAL:
			case TrinoSqlParser.KW_FIRST:
			case TrinoSqlParser.KW_FOLLOWING:
			case TrinoSqlParser.KW_FORMAT:
			case TrinoSqlParser.KW_FUNCTIONS:
			case TrinoSqlParser.KW_GRANT:
			case TrinoSqlParser.KW_GRANTED:
			case TrinoSqlParser.KW_GRANTS:
			case TrinoSqlParser.KW_DENY:
			case TrinoSqlParser.KW_GRAPHVIZ:
			case TrinoSqlParser.KW_GROUPING:
			case TrinoSqlParser.KW_GROUPS:
			case TrinoSqlParser.KW_HOUR:
			case TrinoSqlParser.KW_IF:
			case TrinoSqlParser.KW_IGNORE:
			case TrinoSqlParser.KW_INCLUDING:
			case TrinoSqlParser.KW_INITIAL:
			case TrinoSqlParser.KW_INPUT:
			case TrinoSqlParser.KW_INTERVAL:
			case TrinoSqlParser.KW_INVOKER:
			case TrinoSqlParser.KW_IO:
			case TrinoSqlParser.KW_ISOLATION:
			case TrinoSqlParser.KW_JSON:
			case TrinoSqlParser.KW_LAST:
			case TrinoSqlParser.KW_LATERAL:
			case TrinoSqlParser.KW_LEVEL:
			case TrinoSqlParser.KW_LIMIT:
			case TrinoSqlParser.KW_LOCAL:
			case TrinoSqlParser.KW_LOCALTIME:
			case TrinoSqlParser.KW_LOCALTIMESTAMP:
			case TrinoSqlParser.KW_LOGICAL:
			case TrinoSqlParser.KW_MAP:
			case TrinoSqlParser.KW_MATCH:
			case TrinoSqlParser.KW_MATCHED:
			case TrinoSqlParser.KW_MATCHES:
			case TrinoSqlParser.KW_MATCH_RECOGNIZE:
			case TrinoSqlParser.KW_MATERIALIZED:
			case TrinoSqlParser.KW_MEASURES:
			case TrinoSqlParser.KW_MERGE:
			case TrinoSqlParser.KW_MINUTE:
			case TrinoSqlParser.KW_MONTH:
			case TrinoSqlParser.KW_NEXT:
			case TrinoSqlParser.KW_NFC:
			case TrinoSqlParser.KW_NFD:
			case TrinoSqlParser.KW_NFKC:
			case TrinoSqlParser.KW_NFKD:
			case TrinoSqlParser.KW_NO:
			case TrinoSqlParser.KW_NONE:
			case TrinoSqlParser.KW_NORMALIZE:
			case TrinoSqlParser.KW_NULL:
			case TrinoSqlParser.KW_NULLIF:
			case TrinoSqlParser.KW_NULLS:
			case TrinoSqlParser.KW_OFFSET:
			case TrinoSqlParser.KW_OMIT:
			case TrinoSqlParser.KW_ONE:
			case TrinoSqlParser.KW_ONLY:
			case TrinoSqlParser.KW_OPTION:
			case TrinoSqlParser.KW_ORDINALITY:
			case TrinoSqlParser.KW_OUTPUT:
			case TrinoSqlParser.KW_OVER:
			case TrinoSqlParser.KW_PARTITION:
			case TrinoSqlParser.KW_PARTITIONS:
			case TrinoSqlParser.KW_PAST:
			case TrinoSqlParser.KW_PATH:
			case TrinoSqlParser.KW_PATTERN:
			case TrinoSqlParser.KW_PER:
			case TrinoSqlParser.KW_PERMUTE:
			case TrinoSqlParser.KW_POSITION:
			case TrinoSqlParser.KW_PRECEDING:
			case TrinoSqlParser.KW_PRECISION:
			case TrinoSqlParser.KW_PRIVILEGES:
			case TrinoSqlParser.KW_PROPERTIES:
			case TrinoSqlParser.KW_RANGE:
			case TrinoSqlParser.KW_READ:
			case TrinoSqlParser.KW_REFRESH:
			case TrinoSqlParser.KW_RENAME:
			case TrinoSqlParser.KW_REPEATABLE:
			case TrinoSqlParser.KW_REPLACE:
			case TrinoSqlParser.KW_RESET:
			case TrinoSqlParser.KW_RESPECT:
			case TrinoSqlParser.KW_RESTRICT:
			case TrinoSqlParser.KW_REVOKE:
			case TrinoSqlParser.KW_ROLE:
			case TrinoSqlParser.KW_ROLES:
			case TrinoSqlParser.KW_ROLLBACK:
			case TrinoSqlParser.KW_ROW:
			case TrinoSqlParser.KW_ROWS:
			case TrinoSqlParser.KW_RUNNING:
			case TrinoSqlParser.KW_SCHEMA:
			case TrinoSqlParser.KW_SCHEMAS:
			case TrinoSqlParser.KW_SECOND:
			case TrinoSqlParser.KW_SECURITY:
			case TrinoSqlParser.KW_SEEK:
			case TrinoSqlParser.KW_SERIALIZABLE:
			case TrinoSqlParser.KW_SESSION:
			case TrinoSqlParser.KW_SET:
			case TrinoSqlParser.KW_SETS:
			case TrinoSqlParser.KW_SHOW:
			case TrinoSqlParser.KW_SOME:
			case TrinoSqlParser.KW_START:
			case TrinoSqlParser.KW_STATS:
			case TrinoSqlParser.KW_SUBSET:
			case TrinoSqlParser.KW_SUBSTRING:
			case TrinoSqlParser.KW_SYSTEM:
			case TrinoSqlParser.KW_TABLES:
			case TrinoSqlParser.KW_TABLESAMPLE:
			case TrinoSqlParser.KW_TEXT:
			case TrinoSqlParser.KW_TIES:
			case TrinoSqlParser.KW_TIME:
			case TrinoSqlParser.KW_TIMESTAMP:
			case TrinoSqlParser.KW_TO:
			case TrinoSqlParser.KW_TRANSACTION:
			case TrinoSqlParser.KW_TRUNCATE:
			case TrinoSqlParser.KW_TRUE:
			case TrinoSqlParser.KW_TRY_CAST:
			case TrinoSqlParser.KW_TYPE:
			case TrinoSqlParser.KW_UNBOUNDED:
			case TrinoSqlParser.KW_UNCOMMITTED:
			case TrinoSqlParser.KW_UNMATCHED:
			case TrinoSqlParser.KW_UPDATE:
			case TrinoSqlParser.KW_USE:
			case TrinoSqlParser.KW_USER:
			case TrinoSqlParser.KW_VALIDATE:
			case TrinoSqlParser.KW_VERBOSE:
			case TrinoSqlParser.KW_VIEW:
			case TrinoSqlParser.KW_WINDOW:
			case TrinoSqlParser.KW_WITHOUT:
			case TrinoSqlParser.KW_WORK:
			case TrinoSqlParser.KW_WRITE:
			case TrinoSqlParser.KW_YEAR:
			case TrinoSqlParser.KW_ZONE:
			case TrinoSqlParser.PLUS:
			case TrinoSqlParser.MINUS:
			case TrinoSqlParser.QUESTION_MARK:
			case TrinoSqlParser.STRING:
			case TrinoSqlParser.UNICODE_STRING:
			case TrinoSqlParser.BINARY_LITERAL:
			case TrinoSqlParser.INTEGER_VALUE:
			case TrinoSqlParser.DECIMAL_VALUE:
			case TrinoSqlParser.DOUBLE_VALUE:
			case TrinoSqlParser.IDENTIFIER:
			case TrinoSqlParser.DIGIT_IDENTIFIER:
			case TrinoSqlParser.QUOTED_IDENTIFIER:
			case TrinoSqlParser.BACKQUOTED_IDENTIFIER:
				{
				_localctx = new PredicatedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1671;
				(_localctx as PredicatedContext)._valueExpression = this.valueExpression(0);
				this.state = 1673;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 218, this._ctx) ) {
				case 1:
					{
					this.state = 1672;
					this.predicate((_localctx as PredicatedContext)._valueExpression);
					}
					break;
				}
				}
				break;
			case TrinoSqlParser.KW_NOT:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1675;
				this.match(TrinoSqlParser.KW_NOT);
				this.state = 1676;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1687;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1685;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 220, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_booleanExpression);
						this.state = 1679;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1680;
						(_localctx as LogicalBinaryContext)._operator = this.match(TrinoSqlParser.KW_AND);
						this.state = 1681;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_booleanExpression);
						this.state = 1682;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1683;
						(_localctx as LogicalBinaryContext)._operator = this.match(TrinoSqlParser.KW_OR);
						this.state = 1684;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1689;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
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
	public predicate(value: ParserRuleContext): PredicateContext {
		let _localctx: PredicateContext = new PredicateContext(this._ctx, this.state, value);
		this.enterRule(_localctx, 106, TrinoSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1751;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				_localctx = new ComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1690;
				this.comparisonOperator();
				this.state = 1691;
				(_localctx as ComparisonContext)._right = this.valueExpression(0);
				}
				break;

			case 2:
				_localctx = new QuantifiedComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1693;
				this.comparisonOperator();
				this.state = 1694;
				this.comparisonQuantifier();
				this.state = 1695;
				this.match(TrinoSqlParser.T__0);
				this.state = 1696;
				this.query();
				this.state = 1697;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 3:
				_localctx = new BetweenContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1700;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_NOT) {
					{
					this.state = 1699;
					this.match(TrinoSqlParser.KW_NOT);
					}
				}

				this.state = 1702;
				this.match(TrinoSqlParser.KW_BETWEEN);
				this.state = 1703;
				(_localctx as BetweenContext)._lower = this.valueExpression(0);
				this.state = 1704;
				this.match(TrinoSqlParser.KW_AND);
				this.state = 1705;
				(_localctx as BetweenContext)._upper = this.valueExpression(0);
				}
				break;

			case 4:
				_localctx = new InListContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1708;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_NOT) {
					{
					this.state = 1707;
					this.match(TrinoSqlParser.KW_NOT);
					}
				}

				this.state = 1710;
				this.match(TrinoSqlParser.KW_IN);
				this.state = 1711;
				this.match(TrinoSqlParser.T__0);
				this.state = 1712;
				this.expression();
				this.state = 1717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 1713;
					this.match(TrinoSqlParser.T__2);
					this.state = 1714;
					this.expression();
					}
					}
					this.state = 1719;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1720;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 5:
				_localctx = new InSubqueryContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1723;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_NOT) {
					{
					this.state = 1722;
					this.match(TrinoSqlParser.KW_NOT);
					}
				}

				this.state = 1725;
				this.match(TrinoSqlParser.KW_IN);
				this.state = 1726;
				this.match(TrinoSqlParser.T__0);
				this.state = 1727;
				this.query();
				this.state = 1728;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 6:
				_localctx = new LikeContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_NOT) {
					{
					this.state = 1730;
					this.match(TrinoSqlParser.KW_NOT);
					}
				}

				this.state = 1733;
				this.match(TrinoSqlParser.KW_LIKE);
				this.state = 1734;
				(_localctx as LikeContext)._pattern = this.valueExpression(0);
				this.state = 1737;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 227, this._ctx) ) {
				case 1:
					{
					this.state = 1735;
					this.match(TrinoSqlParser.KW_ESCAPE);
					this.state = 1736;
					(_localctx as LikeContext)._escape = this.valueExpression(0);
					}
					break;
				}
				}
				break;

			case 7:
				_localctx = new NullPredicateContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1739;
				this.match(TrinoSqlParser.KW_IS);
				this.state = 1741;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_NOT) {
					{
					this.state = 1740;
					this.match(TrinoSqlParser.KW_NOT);
					}
				}

				this.state = 1743;
				this.match(TrinoSqlParser.KW_NULL);
				}
				break;

			case 8:
				_localctx = new DistinctFromContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1744;
				this.match(TrinoSqlParser.KW_IS);
				this.state = 1746;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_NOT) {
					{
					this.state = 1745;
					this.match(TrinoSqlParser.KW_NOT);
					}
				}

				this.state = 1748;
				this.match(TrinoSqlParser.KW_DISTINCT);
				this.state = 1749;
				this.match(TrinoSqlParser.KW_FROM);
				this.state = 1750;
				(_localctx as DistinctFromContext)._right = this.valueExpression(0);
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
		let _startState: number = 108;
		this.enterRecursionRule(_localctx, 108, TrinoSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1757;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 231, this._ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1754;
				this.primaryExpression(0);
				}
				break;

			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1755;
				(_localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.PLUS || _la === TrinoSqlParser.MINUS)) {
					(_localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1756;
				this.valueExpression(4);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1773;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 233, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1771;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 232, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_valueExpression);
						this.state = 1759;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1760;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 257)) & ~0x1F) === 0 && ((1 << (_la - 257)) & ((1 << (TrinoSqlParser.ASTERISK - 257)) | (1 << (TrinoSqlParser.SLASH - 257)) | (1 << (TrinoSqlParser.PERCENT - 257)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1761;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_valueExpression);
						this.state = 1762;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1763;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === TrinoSqlParser.PLUS || _la === TrinoSqlParser.MINUS)) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1764;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;

					case 3:
						{
						_localctx = new ConcatenationContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ConcatenationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_valueExpression);
						this.state = 1765;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1766;
						this.match(TrinoSqlParser.CONCAT);
						this.state = 1767;
						(_localctx as ConcatenationContext)._right = this.valueExpression(2);
						}
						break;

					case 4:
						{
						_localctx = new AtTimeZoneContext(new ValueExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_valueExpression);
						this.state = 1768;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1769;
						this.match(TrinoSqlParser.KW_AT);
						this.state = 1770;
						this.timeZoneSpecifier();
						}
						break;
					}
					}
				}
				this.state = 1775;
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
		let _startState: number = 110;
		this.enterRecursionRule(_localctx, 110, TrinoSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2025;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 263, this._ctx) ) {
			case 1:
				{
				_localctx = new NullLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1777;
				this.match(TrinoSqlParser.KW_NULL);
				}
				break;

			case 2:
				{
				_localctx = new IntervalLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1778;
				this.interval();
				}
				break;

			case 3:
				{
				_localctx = new TypeConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1779;
				this.identifier();
				this.state = 1780;
				this.string();
				}
				break;

			case 4:
				{
				_localctx = new TypeConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1782;
				this.match(TrinoSqlParser.KW_DOUBLE);
				this.state = 1783;
				this.match(TrinoSqlParser.KW_PRECISION);
				this.state = 1784;
				this.string();
				}
				break;

			case 5:
				{
				_localctx = new NumericLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1785;
				this.number();
				}
				break;

			case 6:
				{
				_localctx = new BooleanLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1786;
				this.booleanValue();
				}
				break;

			case 7:
				{
				_localctx = new StringLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1787;
				this.string();
				}
				break;

			case 8:
				{
				_localctx = new BinaryLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1788;
				this.match(TrinoSqlParser.BINARY_LITERAL);
				}
				break;

			case 9:
				{
				_localctx = new ParameterContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1789;
				this.match(TrinoSqlParser.QUESTION_MARK);
				}
				break;

			case 10:
				{
				_localctx = new PositionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1790;
				this.match(TrinoSqlParser.KW_POSITION);
				this.state = 1791;
				this.match(TrinoSqlParser.T__0);
				this.state = 1792;
				this.valueExpression(0);
				this.state = 1793;
				this.match(TrinoSqlParser.KW_IN);
				this.state = 1794;
				this.valueExpression(0);
				this.state = 1795;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 11:
				{
				_localctx = new RowConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1797;
				this.match(TrinoSqlParser.T__0);
				this.state = 1798;
				this.expression();
				this.state = 1801;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1799;
					this.match(TrinoSqlParser.T__2);
					this.state = 1800;
					this.expression();
					}
					}
					this.state = 1803;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === TrinoSqlParser.T__2);
				this.state = 1805;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 12:
				{
				_localctx = new RowConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1807;
				this.match(TrinoSqlParser.KW_ROW);
				this.state = 1808;
				this.match(TrinoSqlParser.T__0);
				this.state = 1809;
				this.expression();
				this.state = 1814;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 1810;
					this.match(TrinoSqlParser.T__2);
					this.state = 1811;
					this.expression();
					}
					}
					this.state = 1816;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1817;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 13:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1819;
				this.functionName();
				this.state = 1820;
				this.match(TrinoSqlParser.T__0);
				this.state = 1821;
				this.match(TrinoSqlParser.ASTERISK);
				this.state = 1822;
				this.match(TrinoSqlParser.T__1);
				this.state = 1824;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 236, this._ctx) ) {
				case 1:
					{
					this.state = 1823;
					this.filter();
					}
					break;
				}
				this.state = 1827;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 237, this._ctx) ) {
				case 1:
					{
					this.state = 1826;
					this.over();
					}
					break;
				}
				}
				break;

			case 14:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1830;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
				case 1:
					{
					this.state = 1829;
					this.processingMode();
					}
					break;
				}
				this.state = 1832;
				this.functionName();
				this.state = 1833;
				this.match(TrinoSqlParser.T__0);
				this.state = 1845;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TrinoSqlParser.T__0) | (1 << TrinoSqlParser.KW_ADD) | (1 << TrinoSqlParser.KW_ADMIN) | (1 << TrinoSqlParser.KW_AFTER) | (1 << TrinoSqlParser.KW_ALL) | (1 << TrinoSqlParser.KW_ANALYZE) | (1 << TrinoSqlParser.KW_ANY) | (1 << TrinoSqlParser.KW_ARRAY) | (1 << TrinoSqlParser.KW_ASC) | (1 << TrinoSqlParser.KW_AT) | (1 << TrinoSqlParser.KW_AUTHORIZATION) | (1 << TrinoSqlParser.KW_BERNOULLI))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TrinoSqlParser.KW_CALL - 33)) | (1 << (TrinoSqlParser.KW_CASCADE - 33)) | (1 << (TrinoSqlParser.KW_CASE - 33)) | (1 << (TrinoSqlParser.KW_CAST - 33)) | (1 << (TrinoSqlParser.KW_CATALOGS - 33)) | (1 << (TrinoSqlParser.KW_COLUMN - 33)) | (1 << (TrinoSqlParser.KW_COLUMNS - 33)) | (1 << (TrinoSqlParser.KW_COMMENT - 33)) | (1 << (TrinoSqlParser.KW_COMMIT - 33)) | (1 << (TrinoSqlParser.KW_COMMITTED - 33)) | (1 << (TrinoSqlParser.KW_CURRENT - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_CATALOG - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_DATE - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_PATH - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_SCHEMA - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_TIME - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_TIMESTAMP - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_USER - 33)) | (1 << (TrinoSqlParser.KW_DATA - 33)) | (1 << (TrinoSqlParser.KW_DATE - 33)) | (1 << (TrinoSqlParser.KW_DAY - 33)) | (1 << (TrinoSqlParser.KW_DEFAULT - 33)) | (1 << (TrinoSqlParser.KW_DEFINER - 33)) | (1 << (TrinoSqlParser.KW_DESC - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (TrinoSqlParser.KW_DEFINE - 65)) | (1 << (TrinoSqlParser.KW_DISTINCT - 65)) | (1 << (TrinoSqlParser.KW_DISTRIBUTED - 65)) | (1 << (TrinoSqlParser.KW_DOUBLE - 65)) | (1 << (TrinoSqlParser.KW_EMPTY - 65)) | (1 << (TrinoSqlParser.KW_EXCLUDING - 65)) | (1 << (TrinoSqlParser.KW_EXISTS - 65)) | (1 << (TrinoSqlParser.KW_EXPLAIN - 65)) | (1 << (TrinoSqlParser.KW_EXTRACT - 65)) | (1 << (TrinoSqlParser.KW_FALSE - 65)) | (1 << (TrinoSqlParser.KW_FETCH - 65)) | (1 << (TrinoSqlParser.KW_FILTER - 65)) | (1 << (TrinoSqlParser.KW_FINAL - 65)) | (1 << (TrinoSqlParser.KW_FIRST - 65)) | (1 << (TrinoSqlParser.KW_FOLLOWING - 65)) | (1 << (TrinoSqlParser.KW_FORMAT - 65)) | (1 << (TrinoSqlParser.KW_FUNCTIONS - 65)) | (1 << (TrinoSqlParser.KW_GRANT - 65)) | (1 << (TrinoSqlParser.KW_GRANTED - 65)) | (1 << (TrinoSqlParser.KW_GRANTS - 65)) | (1 << (TrinoSqlParser.KW_DENY - 65)) | (1 << (TrinoSqlParser.KW_GRAPHVIZ - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (TrinoSqlParser.KW_GROUPING - 97)) | (1 << (TrinoSqlParser.KW_GROUPS - 97)) | (1 << (TrinoSqlParser.KW_HOUR - 97)) | (1 << (TrinoSqlParser.KW_IF - 97)) | (1 << (TrinoSqlParser.KW_IGNORE - 97)) | (1 << (TrinoSqlParser.KW_INCLUDING - 97)) | (1 << (TrinoSqlParser.KW_INITIAL - 97)) | (1 << (TrinoSqlParser.KW_INPUT - 97)) | (1 << (TrinoSqlParser.KW_INTERVAL - 97)) | (1 << (TrinoSqlParser.KW_INVOKER - 97)) | (1 << (TrinoSqlParser.KW_IO - 97)) | (1 << (TrinoSqlParser.KW_ISOLATION - 97)) | (1 << (TrinoSqlParser.KW_JSON - 97)) | (1 << (TrinoSqlParser.KW_LAST - 97)) | (1 << (TrinoSqlParser.KW_LATERAL - 97)) | (1 << (TrinoSqlParser.KW_LEVEL - 97)) | (1 << (TrinoSqlParser.KW_LIMIT - 97)) | (1 << (TrinoSqlParser.KW_LOCAL - 97)) | (1 << (TrinoSqlParser.KW_LOCALTIME - 97)) | (1 << (TrinoSqlParser.KW_LOCALTIMESTAMP - 97)) | (1 << (TrinoSqlParser.KW_LOGICAL - 97)) | (1 << (TrinoSqlParser.KW_MAP - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (TrinoSqlParser.KW_MATCH - 129)) | (1 << (TrinoSqlParser.KW_MATCHED - 129)) | (1 << (TrinoSqlParser.KW_MATCHES - 129)) | (1 << (TrinoSqlParser.KW_MATCH_RECOGNIZE - 129)) | (1 << (TrinoSqlParser.KW_MATERIALIZED - 129)) | (1 << (TrinoSqlParser.KW_MEASURES - 129)) | (1 << (TrinoSqlParser.KW_MERGE - 129)) | (1 << (TrinoSqlParser.KW_MINUTE - 129)) | (1 << (TrinoSqlParser.KW_MONTH - 129)) | (1 << (TrinoSqlParser.KW_NEXT - 129)) | (1 << (TrinoSqlParser.KW_NFC - 129)) | (1 << (TrinoSqlParser.KW_NFD - 129)) | (1 << (TrinoSqlParser.KW_NFKC - 129)) | (1 << (TrinoSqlParser.KW_NFKD - 129)) | (1 << (TrinoSqlParser.KW_NO - 129)) | (1 << (TrinoSqlParser.KW_NONE - 129)) | (1 << (TrinoSqlParser.KW_NORMALIZE - 129)) | (1 << (TrinoSqlParser.KW_NOT - 129)) | (1 << (TrinoSqlParser.KW_NULL - 129)) | (1 << (TrinoSqlParser.KW_NULLIF - 129)) | (1 << (TrinoSqlParser.KW_NULLS - 129)) | (1 << (TrinoSqlParser.KW_OFFSET - 129)) | (1 << (TrinoSqlParser.KW_OMIT - 129)) | (1 << (TrinoSqlParser.KW_ONE - 129)) | (1 << (TrinoSqlParser.KW_ONLY - 129)) | (1 << (TrinoSqlParser.KW_OPTION - 129)) | (1 << (TrinoSqlParser.KW_ORDINALITY - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (TrinoSqlParser.KW_OUTPUT - 161)) | (1 << (TrinoSqlParser.KW_OVER - 161)) | (1 << (TrinoSqlParser.KW_PARTITION - 161)) | (1 << (TrinoSqlParser.KW_PARTITIONS - 161)) | (1 << (TrinoSqlParser.KW_PAST - 161)) | (1 << (TrinoSqlParser.KW_PATH - 161)) | (1 << (TrinoSqlParser.KW_PATTERN - 161)) | (1 << (TrinoSqlParser.KW_PER - 161)) | (1 << (TrinoSqlParser.KW_PERMUTE - 161)) | (1 << (TrinoSqlParser.KW_POSITION - 161)) | (1 << (TrinoSqlParser.KW_PRECEDING - 161)) | (1 << (TrinoSqlParser.KW_PRECISION - 161)) | (1 << (TrinoSqlParser.KW_PRIVILEGES - 161)) | (1 << (TrinoSqlParser.KW_PROPERTIES - 161)) | (1 << (TrinoSqlParser.KW_RANGE - 161)) | (1 << (TrinoSqlParser.KW_READ - 161)) | (1 << (TrinoSqlParser.KW_REFRESH - 161)) | (1 << (TrinoSqlParser.KW_RENAME - 161)) | (1 << (TrinoSqlParser.KW_REPEATABLE - 161)) | (1 << (TrinoSqlParser.KW_REPLACE - 161)) | (1 << (TrinoSqlParser.KW_RESET - 161)) | (1 << (TrinoSqlParser.KW_RESPECT - 161)) | (1 << (TrinoSqlParser.KW_RESTRICT - 161)) | (1 << (TrinoSqlParser.KW_REVOKE - 161)) | (1 << (TrinoSqlParser.KW_ROLE - 161)) | (1 << (TrinoSqlParser.KW_ROLES - 161)) | (1 << (TrinoSqlParser.KW_ROLLBACK - 161)) | (1 << (TrinoSqlParser.KW_ROW - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (TrinoSqlParser.KW_ROWS - 193)) | (1 << (TrinoSqlParser.KW_RUNNING - 193)) | (1 << (TrinoSqlParser.KW_SCHEMA - 193)) | (1 << (TrinoSqlParser.KW_SCHEMAS - 193)) | (1 << (TrinoSqlParser.KW_SECOND - 193)) | (1 << (TrinoSqlParser.KW_SECURITY - 193)) | (1 << (TrinoSqlParser.KW_SEEK - 193)) | (1 << (TrinoSqlParser.KW_SERIALIZABLE - 193)) | (1 << (TrinoSqlParser.KW_SESSION - 193)) | (1 << (TrinoSqlParser.KW_SET - 193)) | (1 << (TrinoSqlParser.KW_SETS - 193)) | (1 << (TrinoSqlParser.KW_SHOW - 193)) | (1 << (TrinoSqlParser.KW_SOME - 193)) | (1 << (TrinoSqlParser.KW_START - 193)) | (1 << (TrinoSqlParser.KW_STATS - 193)) | (1 << (TrinoSqlParser.KW_SUBSET - 193)) | (1 << (TrinoSqlParser.KW_SUBSTRING - 193)) | (1 << (TrinoSqlParser.KW_SYSTEM - 193)) | (1 << (TrinoSqlParser.KW_TABLES - 193)) | (1 << (TrinoSqlParser.KW_TABLESAMPLE - 193)) | (1 << (TrinoSqlParser.KW_TEXT - 193)) | (1 << (TrinoSqlParser.KW_TIES - 193)) | (1 << (TrinoSqlParser.KW_TIME - 193)) | (1 << (TrinoSqlParser.KW_TIMESTAMP - 193)) | (1 << (TrinoSqlParser.KW_TO - 193)) | (1 << (TrinoSqlParser.KW_TRANSACTION - 193)) | (1 << (TrinoSqlParser.KW_TRUNCATE - 193)) | (1 << (TrinoSqlParser.KW_TRUE - 193)) | (1 << (TrinoSqlParser.KW_TRY_CAST - 193)))) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (TrinoSqlParser.KW_TYPE - 225)) | (1 << (TrinoSqlParser.KW_UNBOUNDED - 225)) | (1 << (TrinoSqlParser.KW_UNCOMMITTED - 225)) | (1 << (TrinoSqlParser.KW_UNMATCHED - 225)) | (1 << (TrinoSqlParser.KW_UPDATE - 225)) | (1 << (TrinoSqlParser.KW_USE - 225)) | (1 << (TrinoSqlParser.KW_USER - 225)) | (1 << (TrinoSqlParser.KW_VALIDATE - 225)) | (1 << (TrinoSqlParser.KW_VERBOSE - 225)) | (1 << (TrinoSqlParser.KW_VIEW - 225)) | (1 << (TrinoSqlParser.KW_WINDOW - 225)) | (1 << (TrinoSqlParser.KW_WITHOUT - 225)) | (1 << (TrinoSqlParser.KW_WORK - 225)) | (1 << (TrinoSqlParser.KW_WRITE - 225)) | (1 << (TrinoSqlParser.KW_YEAR - 225)) | (1 << (TrinoSqlParser.KW_ZONE - 225)) | (1 << (TrinoSqlParser.PLUS - 225)) | (1 << (TrinoSqlParser.MINUS - 225)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (TrinoSqlParser.QUESTION_MARK - 261)) | (1 << (TrinoSqlParser.STRING - 261)) | (1 << (TrinoSqlParser.UNICODE_STRING - 261)) | (1 << (TrinoSqlParser.BINARY_LITERAL - 261)) | (1 << (TrinoSqlParser.INTEGER_VALUE - 261)) | (1 << (TrinoSqlParser.DECIMAL_VALUE - 261)) | (1 << (TrinoSqlParser.DOUBLE_VALUE - 261)) | (1 << (TrinoSqlParser.IDENTIFIER - 261)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 261)))) !== 0)) {
					{
					this.state = 1835;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 239, this._ctx) ) {
					case 1:
						{
						this.state = 1834;
						this.setQuantifier();
						}
						break;
					}
					this.state = 1837;
					this.expression();
					this.state = 1842;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 1838;
						this.match(TrinoSqlParser.T__2);
						this.state = 1839;
						this.expression();
						}
						}
						this.state = 1844;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1857;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_ORDER) {
					{
					this.state = 1847;
					this.match(TrinoSqlParser.KW_ORDER);
					this.state = 1848;
					this.match(TrinoSqlParser.KW_BY);
					this.state = 1849;
					this.sortItem();
					this.state = 1854;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 1850;
						this.match(TrinoSqlParser.T__2);
						this.state = 1851;
						this.sortItem();
						}
						}
						this.state = 1856;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1859;
				this.match(TrinoSqlParser.T__1);
				this.state = 1861;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 244, this._ctx) ) {
				case 1:
					{
					this.state = 1860;
					this.filter();
					}
					break;
				}
				this.state = 1867;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 246, this._ctx) ) {
				case 1:
					{
					this.state = 1864;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.KW_IGNORE || _la === TrinoSqlParser.KW_RESPECT) {
						{
						this.state = 1863;
						this.nullTreatment();
						}
					}

					this.state = 1866;
					this.over();
					}
					break;
				}
				}
				break;

			case 15:
				{
				_localctx = new MeasureContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1869;
				this.identifier();
				this.state = 1870;
				this.over();
				}
				break;

			case 16:
				{
				_localctx = new LambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1872;
				this.identifier();
				this.state = 1873;
				this.match(TrinoSqlParser.T__5);
				this.state = 1874;
				this.expression();
				}
				break;

			case 17:
				{
				_localctx = new LambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1876;
				this.match(TrinoSqlParser.T__0);
				this.state = 1885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (TrinoSqlParser.KW_ADD - 17)) | (1 << (TrinoSqlParser.KW_ADMIN - 17)) | (1 << (TrinoSqlParser.KW_AFTER - 17)) | (1 << (TrinoSqlParser.KW_ALL - 17)) | (1 << (TrinoSqlParser.KW_ANALYZE - 17)) | (1 << (TrinoSqlParser.KW_ANY - 17)) | (1 << (TrinoSqlParser.KW_ARRAY - 17)) | (1 << (TrinoSqlParser.KW_ASC - 17)) | (1 << (TrinoSqlParser.KW_AT - 17)) | (1 << (TrinoSqlParser.KW_AUTHORIZATION - 17)) | (1 << (TrinoSqlParser.KW_BERNOULLI - 17)) | (1 << (TrinoSqlParser.KW_CALL - 17)) | (1 << (TrinoSqlParser.KW_CASCADE - 17)) | (1 << (TrinoSqlParser.KW_CATALOGS - 17)) | (1 << (TrinoSqlParser.KW_COLUMN - 17)) | (1 << (TrinoSqlParser.KW_COLUMNS - 17)) | (1 << (TrinoSqlParser.KW_COMMENT - 17)) | (1 << (TrinoSqlParser.KW_COMMIT - 17)) | (1 << (TrinoSqlParser.KW_COMMITTED - 17)) | (1 << (TrinoSqlParser.KW_CURRENT - 17)))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (TrinoSqlParser.KW_DATA - 56)) | (1 << (TrinoSqlParser.KW_DATE - 56)) | (1 << (TrinoSqlParser.KW_DAY - 56)) | (1 << (TrinoSqlParser.KW_DEFAULT - 56)) | (1 << (TrinoSqlParser.KW_DEFINER - 56)) | (1 << (TrinoSqlParser.KW_DESC - 56)) | (1 << (TrinoSqlParser.KW_DEFINE - 56)) | (1 << (TrinoSqlParser.KW_DISTRIBUTED - 56)) | (1 << (TrinoSqlParser.KW_DOUBLE - 56)) | (1 << (TrinoSqlParser.KW_EMPTY - 56)) | (1 << (TrinoSqlParser.KW_EXCLUDING - 56)) | (1 << (TrinoSqlParser.KW_EXPLAIN - 56)) | (1 << (TrinoSqlParser.KW_FETCH - 56)) | (1 << (TrinoSqlParser.KW_FILTER - 56)) | (1 << (TrinoSqlParser.KW_FINAL - 56)) | (1 << (TrinoSqlParser.KW_FIRST - 56)) | (1 << (TrinoSqlParser.KW_FOLLOWING - 56)) | (1 << (TrinoSqlParser.KW_FORMAT - 56)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (TrinoSqlParser.KW_FUNCTIONS - 90)) | (1 << (TrinoSqlParser.KW_GRANT - 90)) | (1 << (TrinoSqlParser.KW_GRANTED - 90)) | (1 << (TrinoSqlParser.KW_GRANTS - 90)) | (1 << (TrinoSqlParser.KW_DENY - 90)) | (1 << (TrinoSqlParser.KW_GRAPHVIZ - 90)) | (1 << (TrinoSqlParser.KW_GROUPS - 90)) | (1 << (TrinoSqlParser.KW_HOUR - 90)) | (1 << (TrinoSqlParser.KW_IF - 90)) | (1 << (TrinoSqlParser.KW_IGNORE - 90)) | (1 << (TrinoSqlParser.KW_INCLUDING - 90)) | (1 << (TrinoSqlParser.KW_INITIAL - 90)) | (1 << (TrinoSqlParser.KW_INPUT - 90)) | (1 << (TrinoSqlParser.KW_INTERVAL - 90)) | (1 << (TrinoSqlParser.KW_INVOKER - 90)) | (1 << (TrinoSqlParser.KW_IO - 90)) | (1 << (TrinoSqlParser.KW_ISOLATION - 90)) | (1 << (TrinoSqlParser.KW_JSON - 90)) | (1 << (TrinoSqlParser.KW_LAST - 90)) | (1 << (TrinoSqlParser.KW_LATERAL - 90)) | (1 << (TrinoSqlParser.KW_LEVEL - 90)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TrinoSqlParser.KW_LIMIT - 123)) | (1 << (TrinoSqlParser.KW_LOCAL - 123)) | (1 << (TrinoSqlParser.KW_LOGICAL - 123)) | (1 << (TrinoSqlParser.KW_MAP - 123)) | (1 << (TrinoSqlParser.KW_MATCH - 123)) | (1 << (TrinoSqlParser.KW_MATCHED - 123)) | (1 << (TrinoSqlParser.KW_MATCHES - 123)) | (1 << (TrinoSqlParser.KW_MATCH_RECOGNIZE - 123)) | (1 << (TrinoSqlParser.KW_MATERIALIZED - 123)) | (1 << (TrinoSqlParser.KW_MEASURES - 123)) | (1 << (TrinoSqlParser.KW_MERGE - 123)) | (1 << (TrinoSqlParser.KW_MINUTE - 123)) | (1 << (TrinoSqlParser.KW_MONTH - 123)) | (1 << (TrinoSqlParser.KW_NEXT - 123)) | (1 << (TrinoSqlParser.KW_NFC - 123)) | (1 << (TrinoSqlParser.KW_NFD - 123)) | (1 << (TrinoSqlParser.KW_NFKC - 123)) | (1 << (TrinoSqlParser.KW_NFKD - 123)) | (1 << (TrinoSqlParser.KW_NO - 123)) | (1 << (TrinoSqlParser.KW_NONE - 123)) | (1 << (TrinoSqlParser.KW_NULLIF - 123)) | (1 << (TrinoSqlParser.KW_NULLS - 123)) | (1 << (TrinoSqlParser.KW_OFFSET - 123)) | (1 << (TrinoSqlParser.KW_OMIT - 123)) | (1 << (TrinoSqlParser.KW_ONE - 123)))) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (TrinoSqlParser.KW_ONLY - 155)) | (1 << (TrinoSqlParser.KW_OPTION - 155)) | (1 << (TrinoSqlParser.KW_ORDINALITY - 155)) | (1 << (TrinoSqlParser.KW_OUTPUT - 155)) | (1 << (TrinoSqlParser.KW_OVER - 155)) | (1 << (TrinoSqlParser.KW_PARTITION - 155)) | (1 << (TrinoSqlParser.KW_PARTITIONS - 155)) | (1 << (TrinoSqlParser.KW_PAST - 155)) | (1 << (TrinoSqlParser.KW_PATH - 155)) | (1 << (TrinoSqlParser.KW_PATTERN - 155)) | (1 << (TrinoSqlParser.KW_PER - 155)) | (1 << (TrinoSqlParser.KW_PERMUTE - 155)) | (1 << (TrinoSqlParser.KW_POSITION - 155)) | (1 << (TrinoSqlParser.KW_PRECEDING - 155)) | (1 << (TrinoSqlParser.KW_PRECISION - 155)) | (1 << (TrinoSqlParser.KW_PRIVILEGES - 155)) | (1 << (TrinoSqlParser.KW_PROPERTIES - 155)) | (1 << (TrinoSqlParser.KW_RANGE - 155)) | (1 << (TrinoSqlParser.KW_READ - 155)) | (1 << (TrinoSqlParser.KW_REFRESH - 155)) | (1 << (TrinoSqlParser.KW_RENAME - 155)) | (1 << (TrinoSqlParser.KW_REPEATABLE - 155)) | (1 << (TrinoSqlParser.KW_REPLACE - 155)) | (1 << (TrinoSqlParser.KW_RESET - 155)) | (1 << (TrinoSqlParser.KW_RESPECT - 155)) | (1 << (TrinoSqlParser.KW_RESTRICT - 155)) | (1 << (TrinoSqlParser.KW_REVOKE - 155)))) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & ((1 << (TrinoSqlParser.KW_ROLE - 188)) | (1 << (TrinoSqlParser.KW_ROLES - 188)) | (1 << (TrinoSqlParser.KW_ROLLBACK - 188)) | (1 << (TrinoSqlParser.KW_ROW - 188)) | (1 << (TrinoSqlParser.KW_ROWS - 188)) | (1 << (TrinoSqlParser.KW_RUNNING - 188)) | (1 << (TrinoSqlParser.KW_SCHEMA - 188)) | (1 << (TrinoSqlParser.KW_SCHEMAS - 188)) | (1 << (TrinoSqlParser.KW_SECOND - 188)) | (1 << (TrinoSqlParser.KW_SECURITY - 188)) | (1 << (TrinoSqlParser.KW_SEEK - 188)) | (1 << (TrinoSqlParser.KW_SERIALIZABLE - 188)) | (1 << (TrinoSqlParser.KW_SESSION - 188)) | (1 << (TrinoSqlParser.KW_SET - 188)) | (1 << (TrinoSqlParser.KW_SETS - 188)) | (1 << (TrinoSqlParser.KW_SHOW - 188)) | (1 << (TrinoSqlParser.KW_SOME - 188)) | (1 << (TrinoSqlParser.KW_START - 188)) | (1 << (TrinoSqlParser.KW_STATS - 188)) | (1 << (TrinoSqlParser.KW_SUBSET - 188)) | (1 << (TrinoSqlParser.KW_SUBSTRING - 188)) | (1 << (TrinoSqlParser.KW_SYSTEM - 188)) | (1 << (TrinoSqlParser.KW_TABLES - 188)) | (1 << (TrinoSqlParser.KW_TABLESAMPLE - 188)) | (1 << (TrinoSqlParser.KW_TEXT - 188)) | (1 << (TrinoSqlParser.KW_TIES - 188)) | (1 << (TrinoSqlParser.KW_TIME - 188)) | (1 << (TrinoSqlParser.KW_TIMESTAMP - 188)))) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & ((1 << (TrinoSqlParser.KW_TO - 220)) | (1 << (TrinoSqlParser.KW_TRANSACTION - 220)) | (1 << (TrinoSqlParser.KW_TRUNCATE - 220)) | (1 << (TrinoSqlParser.KW_TRY_CAST - 220)) | (1 << (TrinoSqlParser.KW_TYPE - 220)) | (1 << (TrinoSqlParser.KW_UNBOUNDED - 220)) | (1 << (TrinoSqlParser.KW_UNCOMMITTED - 220)) | (1 << (TrinoSqlParser.KW_UNMATCHED - 220)) | (1 << (TrinoSqlParser.KW_UPDATE - 220)) | (1 << (TrinoSqlParser.KW_USE - 220)) | (1 << (TrinoSqlParser.KW_USER - 220)) | (1 << (TrinoSqlParser.KW_VALIDATE - 220)) | (1 << (TrinoSqlParser.KW_VERBOSE - 220)) | (1 << (TrinoSqlParser.KW_VIEW - 220)) | (1 << (TrinoSqlParser.KW_WINDOW - 220)) | (1 << (TrinoSqlParser.KW_WITHOUT - 220)) | (1 << (TrinoSqlParser.KW_WORK - 220)) | (1 << (TrinoSqlParser.KW_WRITE - 220)) | (1 << (TrinoSqlParser.KW_YEAR - 220)) | (1 << (TrinoSqlParser.KW_ZONE - 220)))) !== 0) || ((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & ((1 << (TrinoSqlParser.IDENTIFIER - 268)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 268)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 268)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 268)))) !== 0)) {
					{
					this.state = 1877;
					this.identifier();
					this.state = 1882;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 1878;
						this.match(TrinoSqlParser.T__2);
						this.state = 1879;
						this.identifier();
						}
						}
						this.state = 1884;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1887;
				this.match(TrinoSqlParser.T__1);
				this.state = 1888;
				this.match(TrinoSqlParser.T__5);
				this.state = 1889;
				this.expression();
				}
				break;

			case 18:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1890;
				this.match(TrinoSqlParser.T__0);
				this.state = 1891;
				this.query();
				this.state = 1892;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 19:
				{
				_localctx = new ExistsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1894;
				this.match(TrinoSqlParser.KW_EXISTS);
				this.state = 1895;
				this.match(TrinoSqlParser.T__0);
				this.state = 1896;
				this.query();
				this.state = 1897;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 20:
				{
				_localctx = new SimpleCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1899;
				this.match(TrinoSqlParser.KW_CASE);
				this.state = 1900;
				(_localctx as SimpleCaseContext)._operand = this.expression();
				this.state = 1902;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1901;
					this.whenClause();
					}
					}
					this.state = 1904;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === TrinoSqlParser.KW_WHEN);
				this.state = 1908;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_ELSE) {
					{
					this.state = 1906;
					this.match(TrinoSqlParser.KW_ELSE);
					this.state = 1907;
					(_localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1910;
				this.match(TrinoSqlParser.KW_END);
				}
				break;

			case 21:
				{
				_localctx = new SearchedCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1912;
				this.match(TrinoSqlParser.KW_CASE);
				this.state = 1914;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1913;
					this.whenClause();
					}
					}
					this.state = 1916;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === TrinoSqlParser.KW_WHEN);
				this.state = 1920;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_ELSE) {
					{
					this.state = 1918;
					this.match(TrinoSqlParser.KW_ELSE);
					this.state = 1919;
					(_localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1922;
				this.match(TrinoSqlParser.KW_END);
				}
				break;

			case 22:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1924;
				this.match(TrinoSqlParser.KW_CAST);
				this.state = 1925;
				this.match(TrinoSqlParser.T__0);
				this.state = 1926;
				this.expression();
				this.state = 1927;
				this.match(TrinoSqlParser.KW_AS);
				this.state = 1928;
				this.type(0);
				this.state = 1929;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 23:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1931;
				this.match(TrinoSqlParser.KW_TRY_CAST);
				this.state = 1932;
				this.match(TrinoSqlParser.T__0);
				this.state = 1933;
				this.expression();
				this.state = 1934;
				this.match(TrinoSqlParser.KW_AS);
				this.state = 1935;
				this.type(0);
				this.state = 1936;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 24:
				{
				_localctx = new ArrayConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1938;
				this.match(TrinoSqlParser.KW_ARRAY);
				this.state = 1939;
				this.match(TrinoSqlParser.T__6);
				this.state = 1948;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TrinoSqlParser.T__0) | (1 << TrinoSqlParser.KW_ADD) | (1 << TrinoSqlParser.KW_ADMIN) | (1 << TrinoSqlParser.KW_AFTER) | (1 << TrinoSqlParser.KW_ALL) | (1 << TrinoSqlParser.KW_ANALYZE) | (1 << TrinoSqlParser.KW_ANY) | (1 << TrinoSqlParser.KW_ARRAY) | (1 << TrinoSqlParser.KW_ASC) | (1 << TrinoSqlParser.KW_AT) | (1 << TrinoSqlParser.KW_AUTHORIZATION) | (1 << TrinoSqlParser.KW_BERNOULLI))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TrinoSqlParser.KW_CALL - 33)) | (1 << (TrinoSqlParser.KW_CASCADE - 33)) | (1 << (TrinoSqlParser.KW_CASE - 33)) | (1 << (TrinoSqlParser.KW_CAST - 33)) | (1 << (TrinoSqlParser.KW_CATALOGS - 33)) | (1 << (TrinoSqlParser.KW_COLUMN - 33)) | (1 << (TrinoSqlParser.KW_COLUMNS - 33)) | (1 << (TrinoSqlParser.KW_COMMENT - 33)) | (1 << (TrinoSqlParser.KW_COMMIT - 33)) | (1 << (TrinoSqlParser.KW_COMMITTED - 33)) | (1 << (TrinoSqlParser.KW_CURRENT - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_CATALOG - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_DATE - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_PATH - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_SCHEMA - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_TIME - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_TIMESTAMP - 33)) | (1 << (TrinoSqlParser.KW_CURRENT_USER - 33)) | (1 << (TrinoSqlParser.KW_DATA - 33)) | (1 << (TrinoSqlParser.KW_DATE - 33)) | (1 << (TrinoSqlParser.KW_DAY - 33)) | (1 << (TrinoSqlParser.KW_DEFAULT - 33)) | (1 << (TrinoSqlParser.KW_DEFINER - 33)) | (1 << (TrinoSqlParser.KW_DESC - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (TrinoSqlParser.KW_DEFINE - 65)) | (1 << (TrinoSqlParser.KW_DISTRIBUTED - 65)) | (1 << (TrinoSqlParser.KW_DOUBLE - 65)) | (1 << (TrinoSqlParser.KW_EMPTY - 65)) | (1 << (TrinoSqlParser.KW_EXCLUDING - 65)) | (1 << (TrinoSqlParser.KW_EXISTS - 65)) | (1 << (TrinoSqlParser.KW_EXPLAIN - 65)) | (1 << (TrinoSqlParser.KW_EXTRACT - 65)) | (1 << (TrinoSqlParser.KW_FALSE - 65)) | (1 << (TrinoSqlParser.KW_FETCH - 65)) | (1 << (TrinoSqlParser.KW_FILTER - 65)) | (1 << (TrinoSqlParser.KW_FINAL - 65)) | (1 << (TrinoSqlParser.KW_FIRST - 65)) | (1 << (TrinoSqlParser.KW_FOLLOWING - 65)) | (1 << (TrinoSqlParser.KW_FORMAT - 65)) | (1 << (TrinoSqlParser.KW_FUNCTIONS - 65)) | (1 << (TrinoSqlParser.KW_GRANT - 65)) | (1 << (TrinoSqlParser.KW_GRANTED - 65)) | (1 << (TrinoSqlParser.KW_GRANTS - 65)) | (1 << (TrinoSqlParser.KW_DENY - 65)) | (1 << (TrinoSqlParser.KW_GRAPHVIZ - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (TrinoSqlParser.KW_GROUPING - 97)) | (1 << (TrinoSqlParser.KW_GROUPS - 97)) | (1 << (TrinoSqlParser.KW_HOUR - 97)) | (1 << (TrinoSqlParser.KW_IF - 97)) | (1 << (TrinoSqlParser.KW_IGNORE - 97)) | (1 << (TrinoSqlParser.KW_INCLUDING - 97)) | (1 << (TrinoSqlParser.KW_INITIAL - 97)) | (1 << (TrinoSqlParser.KW_INPUT - 97)) | (1 << (TrinoSqlParser.KW_INTERVAL - 97)) | (1 << (TrinoSqlParser.KW_INVOKER - 97)) | (1 << (TrinoSqlParser.KW_IO - 97)) | (1 << (TrinoSqlParser.KW_ISOLATION - 97)) | (1 << (TrinoSqlParser.KW_JSON - 97)) | (1 << (TrinoSqlParser.KW_LAST - 97)) | (1 << (TrinoSqlParser.KW_LATERAL - 97)) | (1 << (TrinoSqlParser.KW_LEVEL - 97)) | (1 << (TrinoSqlParser.KW_LIMIT - 97)) | (1 << (TrinoSqlParser.KW_LOCAL - 97)) | (1 << (TrinoSqlParser.KW_LOCALTIME - 97)) | (1 << (TrinoSqlParser.KW_LOCALTIMESTAMP - 97)) | (1 << (TrinoSqlParser.KW_LOGICAL - 97)) | (1 << (TrinoSqlParser.KW_MAP - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (TrinoSqlParser.KW_MATCH - 129)) | (1 << (TrinoSqlParser.KW_MATCHED - 129)) | (1 << (TrinoSqlParser.KW_MATCHES - 129)) | (1 << (TrinoSqlParser.KW_MATCH_RECOGNIZE - 129)) | (1 << (TrinoSqlParser.KW_MATERIALIZED - 129)) | (1 << (TrinoSqlParser.KW_MEASURES - 129)) | (1 << (TrinoSqlParser.KW_MERGE - 129)) | (1 << (TrinoSqlParser.KW_MINUTE - 129)) | (1 << (TrinoSqlParser.KW_MONTH - 129)) | (1 << (TrinoSqlParser.KW_NEXT - 129)) | (1 << (TrinoSqlParser.KW_NFC - 129)) | (1 << (TrinoSqlParser.KW_NFD - 129)) | (1 << (TrinoSqlParser.KW_NFKC - 129)) | (1 << (TrinoSqlParser.KW_NFKD - 129)) | (1 << (TrinoSqlParser.KW_NO - 129)) | (1 << (TrinoSqlParser.KW_NONE - 129)) | (1 << (TrinoSqlParser.KW_NORMALIZE - 129)) | (1 << (TrinoSqlParser.KW_NOT - 129)) | (1 << (TrinoSqlParser.KW_NULL - 129)) | (1 << (TrinoSqlParser.KW_NULLIF - 129)) | (1 << (TrinoSqlParser.KW_NULLS - 129)) | (1 << (TrinoSqlParser.KW_OFFSET - 129)) | (1 << (TrinoSqlParser.KW_OMIT - 129)) | (1 << (TrinoSqlParser.KW_ONE - 129)) | (1 << (TrinoSqlParser.KW_ONLY - 129)) | (1 << (TrinoSqlParser.KW_OPTION - 129)) | (1 << (TrinoSqlParser.KW_ORDINALITY - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (TrinoSqlParser.KW_OUTPUT - 161)) | (1 << (TrinoSqlParser.KW_OVER - 161)) | (1 << (TrinoSqlParser.KW_PARTITION - 161)) | (1 << (TrinoSqlParser.KW_PARTITIONS - 161)) | (1 << (TrinoSqlParser.KW_PAST - 161)) | (1 << (TrinoSqlParser.KW_PATH - 161)) | (1 << (TrinoSqlParser.KW_PATTERN - 161)) | (1 << (TrinoSqlParser.KW_PER - 161)) | (1 << (TrinoSqlParser.KW_PERMUTE - 161)) | (1 << (TrinoSqlParser.KW_POSITION - 161)) | (1 << (TrinoSqlParser.KW_PRECEDING - 161)) | (1 << (TrinoSqlParser.KW_PRECISION - 161)) | (1 << (TrinoSqlParser.KW_PRIVILEGES - 161)) | (1 << (TrinoSqlParser.KW_PROPERTIES - 161)) | (1 << (TrinoSqlParser.KW_RANGE - 161)) | (1 << (TrinoSqlParser.KW_READ - 161)) | (1 << (TrinoSqlParser.KW_REFRESH - 161)) | (1 << (TrinoSqlParser.KW_RENAME - 161)) | (1 << (TrinoSqlParser.KW_REPEATABLE - 161)) | (1 << (TrinoSqlParser.KW_REPLACE - 161)) | (1 << (TrinoSqlParser.KW_RESET - 161)) | (1 << (TrinoSqlParser.KW_RESPECT - 161)) | (1 << (TrinoSqlParser.KW_RESTRICT - 161)) | (1 << (TrinoSqlParser.KW_REVOKE - 161)) | (1 << (TrinoSqlParser.KW_ROLE - 161)) | (1 << (TrinoSqlParser.KW_ROLES - 161)) | (1 << (TrinoSqlParser.KW_ROLLBACK - 161)) | (1 << (TrinoSqlParser.KW_ROW - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (TrinoSqlParser.KW_ROWS - 193)) | (1 << (TrinoSqlParser.KW_RUNNING - 193)) | (1 << (TrinoSqlParser.KW_SCHEMA - 193)) | (1 << (TrinoSqlParser.KW_SCHEMAS - 193)) | (1 << (TrinoSqlParser.KW_SECOND - 193)) | (1 << (TrinoSqlParser.KW_SECURITY - 193)) | (1 << (TrinoSqlParser.KW_SEEK - 193)) | (1 << (TrinoSqlParser.KW_SERIALIZABLE - 193)) | (1 << (TrinoSqlParser.KW_SESSION - 193)) | (1 << (TrinoSqlParser.KW_SET - 193)) | (1 << (TrinoSqlParser.KW_SETS - 193)) | (1 << (TrinoSqlParser.KW_SHOW - 193)) | (1 << (TrinoSqlParser.KW_SOME - 193)) | (1 << (TrinoSqlParser.KW_START - 193)) | (1 << (TrinoSqlParser.KW_STATS - 193)) | (1 << (TrinoSqlParser.KW_SUBSET - 193)) | (1 << (TrinoSqlParser.KW_SUBSTRING - 193)) | (1 << (TrinoSqlParser.KW_SYSTEM - 193)) | (1 << (TrinoSqlParser.KW_TABLES - 193)) | (1 << (TrinoSqlParser.KW_TABLESAMPLE - 193)) | (1 << (TrinoSqlParser.KW_TEXT - 193)) | (1 << (TrinoSqlParser.KW_TIES - 193)) | (1 << (TrinoSqlParser.KW_TIME - 193)) | (1 << (TrinoSqlParser.KW_TIMESTAMP - 193)) | (1 << (TrinoSqlParser.KW_TO - 193)) | (1 << (TrinoSqlParser.KW_TRANSACTION - 193)) | (1 << (TrinoSqlParser.KW_TRUNCATE - 193)) | (1 << (TrinoSqlParser.KW_TRUE - 193)) | (1 << (TrinoSqlParser.KW_TRY_CAST - 193)))) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (TrinoSqlParser.KW_TYPE - 225)) | (1 << (TrinoSqlParser.KW_UNBOUNDED - 225)) | (1 << (TrinoSqlParser.KW_UNCOMMITTED - 225)) | (1 << (TrinoSqlParser.KW_UNMATCHED - 225)) | (1 << (TrinoSqlParser.KW_UPDATE - 225)) | (1 << (TrinoSqlParser.KW_USE - 225)) | (1 << (TrinoSqlParser.KW_USER - 225)) | (1 << (TrinoSqlParser.KW_VALIDATE - 225)) | (1 << (TrinoSqlParser.KW_VERBOSE - 225)) | (1 << (TrinoSqlParser.KW_VIEW - 225)) | (1 << (TrinoSqlParser.KW_WINDOW - 225)) | (1 << (TrinoSqlParser.KW_WITHOUT - 225)) | (1 << (TrinoSqlParser.KW_WORK - 225)) | (1 << (TrinoSqlParser.KW_WRITE - 225)) | (1 << (TrinoSqlParser.KW_YEAR - 225)) | (1 << (TrinoSqlParser.KW_ZONE - 225)) | (1 << (TrinoSqlParser.PLUS - 225)) | (1 << (TrinoSqlParser.MINUS - 225)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (TrinoSqlParser.QUESTION_MARK - 261)) | (1 << (TrinoSqlParser.STRING - 261)) | (1 << (TrinoSqlParser.UNICODE_STRING - 261)) | (1 << (TrinoSqlParser.BINARY_LITERAL - 261)) | (1 << (TrinoSqlParser.INTEGER_VALUE - 261)) | (1 << (TrinoSqlParser.DECIMAL_VALUE - 261)) | (1 << (TrinoSqlParser.DOUBLE_VALUE - 261)) | (1 << (TrinoSqlParser.IDENTIFIER - 261)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 261)))) !== 0)) {
					{
					this.state = 1940;
					this.expression();
					this.state = 1945;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 1941;
						this.match(TrinoSqlParser.T__2);
						this.state = 1942;
						this.expression();
						}
						}
						this.state = 1947;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1950;
				this.match(TrinoSqlParser.T__7);
				}
				break;

			case 25:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1951;
				this.identifier();
				}
				break;

			case 26:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1952;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.KW_CURRENT_DATE);
				}
				break;

			case 27:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1953;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.KW_CURRENT_TIME);
				this.state = 1957;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 255, this._ctx) ) {
				case 1:
					{
					this.state = 1954;
					this.match(TrinoSqlParser.T__0);
					this.state = 1955;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(TrinoSqlParser.INTEGER_VALUE);
					this.state = 1956;
					this.match(TrinoSqlParser.T__1);
					}
					break;
				}
				}
				break;

			case 28:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1959;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.KW_CURRENT_TIMESTAMP);
				this.state = 1963;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 256, this._ctx) ) {
				case 1:
					{
					this.state = 1960;
					this.match(TrinoSqlParser.T__0);
					this.state = 1961;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(TrinoSqlParser.INTEGER_VALUE);
					this.state = 1962;
					this.match(TrinoSqlParser.T__1);
					}
					break;
				}
				}
				break;

			case 29:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1965;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.KW_LOCALTIME);
				this.state = 1969;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
				case 1:
					{
					this.state = 1966;
					this.match(TrinoSqlParser.T__0);
					this.state = 1967;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(TrinoSqlParser.INTEGER_VALUE);
					this.state = 1968;
					this.match(TrinoSqlParser.T__1);
					}
					break;
				}
				}
				break;

			case 30:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1971;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.KW_LOCALTIMESTAMP);
				this.state = 1975;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 258, this._ctx) ) {
				case 1:
					{
					this.state = 1972;
					this.match(TrinoSqlParser.T__0);
					this.state = 1973;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(TrinoSqlParser.INTEGER_VALUE);
					this.state = 1974;
					this.match(TrinoSqlParser.T__1);
					}
					break;
				}
				}
				break;

			case 31:
				{
				_localctx = new CurrentUserContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1977;
				(_localctx as CurrentUserContext)._name = this.match(TrinoSqlParser.KW_CURRENT_USER);
				}
				break;

			case 32:
				{
				_localctx = new CurrentCatalogContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1978;
				(_localctx as CurrentCatalogContext)._name = this.match(TrinoSqlParser.KW_CURRENT_CATALOG);
				}
				break;

			case 33:
				{
				_localctx = new CurrentSchemaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1979;
				(_localctx as CurrentSchemaContext)._name = this.match(TrinoSqlParser.KW_CURRENT_SCHEMA);
				}
				break;

			case 34:
				{
				_localctx = new CurrentPathContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1980;
				(_localctx as CurrentPathContext)._name = this.match(TrinoSqlParser.KW_CURRENT_PATH);
				}
				break;

			case 35:
				{
				_localctx = new SubstringContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1981;
				this.match(TrinoSqlParser.KW_SUBSTRING);
				this.state = 1982;
				this.match(TrinoSqlParser.T__0);
				this.state = 1983;
				this.valueExpression(0);
				this.state = 1984;
				this.match(TrinoSqlParser.KW_FROM);
				this.state = 1985;
				this.valueExpression(0);
				this.state = 1988;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_FOR) {
					{
					this.state = 1986;
					this.match(TrinoSqlParser.KW_FOR);
					this.state = 1987;
					this.valueExpression(0);
					}
				}

				this.state = 1990;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 36:
				{
				_localctx = new NormalizeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1992;
				this.match(TrinoSqlParser.KW_NORMALIZE);
				this.state = 1993;
				this.match(TrinoSqlParser.T__0);
				this.state = 1994;
				this.valueExpression(0);
				this.state = 1997;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.T__2) {
					{
					this.state = 1995;
					this.match(TrinoSqlParser.T__2);
					this.state = 1996;
					this.normalForm();
					}
				}

				this.state = 1999;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 37:
				{
				_localctx = new ExtractContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2001;
				this.match(TrinoSqlParser.KW_EXTRACT);
				this.state = 2002;
				this.match(TrinoSqlParser.T__0);
				this.state = 2003;
				this.identifier();
				this.state = 2004;
				this.match(TrinoSqlParser.KW_FROM);
				this.state = 2005;
				this.valueExpression(0);
				this.state = 2006;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 38:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2008;
				this.match(TrinoSqlParser.T__0);
				this.state = 2009;
				this.expression();
				this.state = 2010;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 39:
				{
				_localctx = new GroupingOperationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2012;
				this.match(TrinoSqlParser.KW_GROUPING);
				this.state = 2013;
				this.match(TrinoSqlParser.T__0);
				this.state = 2022;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (TrinoSqlParser.KW_ADD - 17)) | (1 << (TrinoSqlParser.KW_ADMIN - 17)) | (1 << (TrinoSqlParser.KW_AFTER - 17)) | (1 << (TrinoSqlParser.KW_ALL - 17)) | (1 << (TrinoSqlParser.KW_ANALYZE - 17)) | (1 << (TrinoSqlParser.KW_ANY - 17)) | (1 << (TrinoSqlParser.KW_ARRAY - 17)) | (1 << (TrinoSqlParser.KW_ASC - 17)) | (1 << (TrinoSqlParser.KW_AT - 17)) | (1 << (TrinoSqlParser.KW_AUTHORIZATION - 17)) | (1 << (TrinoSqlParser.KW_BERNOULLI - 17)) | (1 << (TrinoSqlParser.KW_CALL - 17)) | (1 << (TrinoSqlParser.KW_CASCADE - 17)) | (1 << (TrinoSqlParser.KW_CATALOGS - 17)) | (1 << (TrinoSqlParser.KW_COLUMN - 17)) | (1 << (TrinoSqlParser.KW_COLUMNS - 17)) | (1 << (TrinoSqlParser.KW_COMMENT - 17)) | (1 << (TrinoSqlParser.KW_COMMIT - 17)) | (1 << (TrinoSqlParser.KW_COMMITTED - 17)) | (1 << (TrinoSqlParser.KW_CURRENT - 17)))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (TrinoSqlParser.KW_DATA - 56)) | (1 << (TrinoSqlParser.KW_DATE - 56)) | (1 << (TrinoSqlParser.KW_DAY - 56)) | (1 << (TrinoSqlParser.KW_DEFAULT - 56)) | (1 << (TrinoSqlParser.KW_DEFINER - 56)) | (1 << (TrinoSqlParser.KW_DESC - 56)) | (1 << (TrinoSqlParser.KW_DEFINE - 56)) | (1 << (TrinoSqlParser.KW_DISTRIBUTED - 56)) | (1 << (TrinoSqlParser.KW_DOUBLE - 56)) | (1 << (TrinoSqlParser.KW_EMPTY - 56)) | (1 << (TrinoSqlParser.KW_EXCLUDING - 56)) | (1 << (TrinoSqlParser.KW_EXPLAIN - 56)) | (1 << (TrinoSqlParser.KW_FETCH - 56)) | (1 << (TrinoSqlParser.KW_FILTER - 56)) | (1 << (TrinoSqlParser.KW_FINAL - 56)) | (1 << (TrinoSqlParser.KW_FIRST - 56)) | (1 << (TrinoSqlParser.KW_FOLLOWING - 56)) | (1 << (TrinoSqlParser.KW_FORMAT - 56)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (TrinoSqlParser.KW_FUNCTIONS - 90)) | (1 << (TrinoSqlParser.KW_GRANT - 90)) | (1 << (TrinoSqlParser.KW_GRANTED - 90)) | (1 << (TrinoSqlParser.KW_GRANTS - 90)) | (1 << (TrinoSqlParser.KW_DENY - 90)) | (1 << (TrinoSqlParser.KW_GRAPHVIZ - 90)) | (1 << (TrinoSqlParser.KW_GROUPS - 90)) | (1 << (TrinoSqlParser.KW_HOUR - 90)) | (1 << (TrinoSqlParser.KW_IF - 90)) | (1 << (TrinoSqlParser.KW_IGNORE - 90)) | (1 << (TrinoSqlParser.KW_INCLUDING - 90)) | (1 << (TrinoSqlParser.KW_INITIAL - 90)) | (1 << (TrinoSqlParser.KW_INPUT - 90)) | (1 << (TrinoSqlParser.KW_INTERVAL - 90)) | (1 << (TrinoSqlParser.KW_INVOKER - 90)) | (1 << (TrinoSqlParser.KW_IO - 90)) | (1 << (TrinoSqlParser.KW_ISOLATION - 90)) | (1 << (TrinoSqlParser.KW_JSON - 90)) | (1 << (TrinoSqlParser.KW_LAST - 90)) | (1 << (TrinoSqlParser.KW_LATERAL - 90)) | (1 << (TrinoSqlParser.KW_LEVEL - 90)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TrinoSqlParser.KW_LIMIT - 123)) | (1 << (TrinoSqlParser.KW_LOCAL - 123)) | (1 << (TrinoSqlParser.KW_LOGICAL - 123)) | (1 << (TrinoSqlParser.KW_MAP - 123)) | (1 << (TrinoSqlParser.KW_MATCH - 123)) | (1 << (TrinoSqlParser.KW_MATCHED - 123)) | (1 << (TrinoSqlParser.KW_MATCHES - 123)) | (1 << (TrinoSqlParser.KW_MATCH_RECOGNIZE - 123)) | (1 << (TrinoSqlParser.KW_MATERIALIZED - 123)) | (1 << (TrinoSqlParser.KW_MEASURES - 123)) | (1 << (TrinoSqlParser.KW_MERGE - 123)) | (1 << (TrinoSqlParser.KW_MINUTE - 123)) | (1 << (TrinoSqlParser.KW_MONTH - 123)) | (1 << (TrinoSqlParser.KW_NEXT - 123)) | (1 << (TrinoSqlParser.KW_NFC - 123)) | (1 << (TrinoSqlParser.KW_NFD - 123)) | (1 << (TrinoSqlParser.KW_NFKC - 123)) | (1 << (TrinoSqlParser.KW_NFKD - 123)) | (1 << (TrinoSqlParser.KW_NO - 123)) | (1 << (TrinoSqlParser.KW_NONE - 123)) | (1 << (TrinoSqlParser.KW_NULLIF - 123)) | (1 << (TrinoSqlParser.KW_NULLS - 123)) | (1 << (TrinoSqlParser.KW_OFFSET - 123)) | (1 << (TrinoSqlParser.KW_OMIT - 123)) | (1 << (TrinoSqlParser.KW_ONE - 123)))) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (TrinoSqlParser.KW_ONLY - 155)) | (1 << (TrinoSqlParser.KW_OPTION - 155)) | (1 << (TrinoSqlParser.KW_ORDINALITY - 155)) | (1 << (TrinoSqlParser.KW_OUTPUT - 155)) | (1 << (TrinoSqlParser.KW_OVER - 155)) | (1 << (TrinoSqlParser.KW_PARTITION - 155)) | (1 << (TrinoSqlParser.KW_PARTITIONS - 155)) | (1 << (TrinoSqlParser.KW_PAST - 155)) | (1 << (TrinoSqlParser.KW_PATH - 155)) | (1 << (TrinoSqlParser.KW_PATTERN - 155)) | (1 << (TrinoSqlParser.KW_PER - 155)) | (1 << (TrinoSqlParser.KW_PERMUTE - 155)) | (1 << (TrinoSqlParser.KW_POSITION - 155)) | (1 << (TrinoSqlParser.KW_PRECEDING - 155)) | (1 << (TrinoSqlParser.KW_PRECISION - 155)) | (1 << (TrinoSqlParser.KW_PRIVILEGES - 155)) | (1 << (TrinoSqlParser.KW_PROPERTIES - 155)) | (1 << (TrinoSqlParser.KW_RANGE - 155)) | (1 << (TrinoSqlParser.KW_READ - 155)) | (1 << (TrinoSqlParser.KW_REFRESH - 155)) | (1 << (TrinoSqlParser.KW_RENAME - 155)) | (1 << (TrinoSqlParser.KW_REPEATABLE - 155)) | (1 << (TrinoSqlParser.KW_REPLACE - 155)) | (1 << (TrinoSqlParser.KW_RESET - 155)) | (1 << (TrinoSqlParser.KW_RESPECT - 155)) | (1 << (TrinoSqlParser.KW_RESTRICT - 155)) | (1 << (TrinoSqlParser.KW_REVOKE - 155)))) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & ((1 << (TrinoSqlParser.KW_ROLE - 188)) | (1 << (TrinoSqlParser.KW_ROLES - 188)) | (1 << (TrinoSqlParser.KW_ROLLBACK - 188)) | (1 << (TrinoSqlParser.KW_ROW - 188)) | (1 << (TrinoSqlParser.KW_ROWS - 188)) | (1 << (TrinoSqlParser.KW_RUNNING - 188)) | (1 << (TrinoSqlParser.KW_SCHEMA - 188)) | (1 << (TrinoSqlParser.KW_SCHEMAS - 188)) | (1 << (TrinoSqlParser.KW_SECOND - 188)) | (1 << (TrinoSqlParser.KW_SECURITY - 188)) | (1 << (TrinoSqlParser.KW_SEEK - 188)) | (1 << (TrinoSqlParser.KW_SERIALIZABLE - 188)) | (1 << (TrinoSqlParser.KW_SESSION - 188)) | (1 << (TrinoSqlParser.KW_SET - 188)) | (1 << (TrinoSqlParser.KW_SETS - 188)) | (1 << (TrinoSqlParser.KW_SHOW - 188)) | (1 << (TrinoSqlParser.KW_SOME - 188)) | (1 << (TrinoSqlParser.KW_START - 188)) | (1 << (TrinoSqlParser.KW_STATS - 188)) | (1 << (TrinoSqlParser.KW_SUBSET - 188)) | (1 << (TrinoSqlParser.KW_SUBSTRING - 188)) | (1 << (TrinoSqlParser.KW_SYSTEM - 188)) | (1 << (TrinoSqlParser.KW_TABLES - 188)) | (1 << (TrinoSqlParser.KW_TABLESAMPLE - 188)) | (1 << (TrinoSqlParser.KW_TEXT - 188)) | (1 << (TrinoSqlParser.KW_TIES - 188)) | (1 << (TrinoSqlParser.KW_TIME - 188)) | (1 << (TrinoSqlParser.KW_TIMESTAMP - 188)))) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & ((1 << (TrinoSqlParser.KW_TO - 220)) | (1 << (TrinoSqlParser.KW_TRANSACTION - 220)) | (1 << (TrinoSqlParser.KW_TRUNCATE - 220)) | (1 << (TrinoSqlParser.KW_TRY_CAST - 220)) | (1 << (TrinoSqlParser.KW_TYPE - 220)) | (1 << (TrinoSqlParser.KW_UNBOUNDED - 220)) | (1 << (TrinoSqlParser.KW_UNCOMMITTED - 220)) | (1 << (TrinoSqlParser.KW_UNMATCHED - 220)) | (1 << (TrinoSqlParser.KW_UPDATE - 220)) | (1 << (TrinoSqlParser.KW_USE - 220)) | (1 << (TrinoSqlParser.KW_USER - 220)) | (1 << (TrinoSqlParser.KW_VALIDATE - 220)) | (1 << (TrinoSqlParser.KW_VERBOSE - 220)) | (1 << (TrinoSqlParser.KW_VIEW - 220)) | (1 << (TrinoSqlParser.KW_WINDOW - 220)) | (1 << (TrinoSqlParser.KW_WITHOUT - 220)) | (1 << (TrinoSqlParser.KW_WORK - 220)) | (1 << (TrinoSqlParser.KW_WRITE - 220)) | (1 << (TrinoSqlParser.KW_YEAR - 220)) | (1 << (TrinoSqlParser.KW_ZONE - 220)))) !== 0) || ((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & ((1 << (TrinoSqlParser.IDENTIFIER - 268)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 268)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 268)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 268)))) !== 0)) {
					{
					this.state = 2014;
					this.qualifiedName();
					this.state = 2019;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 2015;
						this.match(TrinoSqlParser.T__2);
						this.state = 2016;
						this.qualifiedName();
						}
						}
						this.state = 2021;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2024;
				this.match(TrinoSqlParser.T__1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2037;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 265, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2035;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 264, this._ctx) ) {
					case 1:
						{
						_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as SubscriptContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_primaryExpression);
						this.state = 2027;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 2028;
						this.match(TrinoSqlParser.T__6);
						this.state = 2029;
						(_localctx as SubscriptContext)._index = this.valueExpression(0);
						this.state = 2030;
						this.match(TrinoSqlParser.T__7);
						}
						break;

					case 2:
						{
						_localctx = new DereferenceContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as DereferenceContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_primaryExpression);
						this.state = 2032;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 2033;
						this.match(TrinoSqlParser.T__3);
						this.state = 2034;
						(_localctx as DereferenceContext)._fieldName = this.identifier();
						}
						break;
					}
					}
				}
				this.state = 2039;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 265, this._ctx);
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
	public processingMode(): ProcessingModeContext {
		let _localctx: ProcessingModeContext = new ProcessingModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, TrinoSqlParser.RULE_processingMode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2040;
			_la = this._input.LA(1);
			if (!(_la === TrinoSqlParser.KW_FINAL || _la === TrinoSqlParser.KW_RUNNING)) {
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
	public nullTreatment(): NullTreatmentContext {
		let _localctx: NullTreatmentContext = new NullTreatmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, TrinoSqlParser.RULE_nullTreatment);
		try {
			this.state = 2046;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.KW_IGNORE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2042;
				this.match(TrinoSqlParser.KW_IGNORE);
				this.state = 2043;
				this.match(TrinoSqlParser.KW_NULLS);
				}
				break;
			case TrinoSqlParser.KW_RESPECT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2044;
				this.match(TrinoSqlParser.KW_RESPECT);
				this.state = 2045;
				this.match(TrinoSqlParser.KW_NULLS);
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
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, TrinoSqlParser.RULE_string);
		try {
			this.state = 2054;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.STRING:
				_localctx = new BasicStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2048;
				this.match(TrinoSqlParser.STRING);
				}
				break;
			case TrinoSqlParser.UNICODE_STRING:
				_localctx = new UnicodeStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2049;
				this.match(TrinoSqlParser.UNICODE_STRING);
				this.state = 2052;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 267, this._ctx) ) {
				case 1:
					{
					this.state = 2050;
					this.match(TrinoSqlParser.KW_UESCAPE);
					this.state = 2051;
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeZoneSpecifier(): TimeZoneSpecifierContext {
		let _localctx: TimeZoneSpecifierContext = new TimeZoneSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, TrinoSqlParser.RULE_timeZoneSpecifier);
		try {
			this.state = 2062;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 269, this._ctx) ) {
			case 1:
				_localctx = new TimeZoneIntervalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2056;
				this.match(TrinoSqlParser.KW_TIME);
				this.state = 2057;
				this.match(TrinoSqlParser.KW_ZONE);
				this.state = 2058;
				this.interval();
				}
				break;

			case 2:
				_localctx = new TimeZoneStringContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2059;
				this.match(TrinoSqlParser.KW_TIME);
				this.state = 2060;
				this.match(TrinoSqlParser.KW_ZONE);
				this.state = 2061;
				this.string();
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
		this.enterRule(_localctx, 120, TrinoSqlParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2064;
			_la = this._input.LA(1);
			if (!(((((_la - 249)) & ~0x1F) === 0 && ((1 << (_la - 249)) & ((1 << (TrinoSqlParser.EQ - 249)) | (1 << (TrinoSqlParser.NEQ - 249)) | (1 << (TrinoSqlParser.LT - 249)) | (1 << (TrinoSqlParser.LTE - 249)) | (1 << (TrinoSqlParser.GT - 249)) | (1 << (TrinoSqlParser.GTE - 249)))) !== 0))) {
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
	public comparisonQuantifier(): ComparisonQuantifierContext {
		let _localctx: ComparisonQuantifierContext = new ComparisonQuantifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, TrinoSqlParser.RULE_comparisonQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2066;
			_la = this._input.LA(1);
			if (!(_la === TrinoSqlParser.KW_ALL || _la === TrinoSqlParser.KW_ANY || _la === TrinoSqlParser.KW_SOME)) {
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
		this.enterRule(_localctx, 124, TrinoSqlParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2068;
			_la = this._input.LA(1);
			if (!(_la === TrinoSqlParser.KW_FALSE || _la === TrinoSqlParser.KW_TRUE)) {
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
		this.enterRule(_localctx, 126, TrinoSqlParser.RULE_interval);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2070;
			this.match(TrinoSqlParser.KW_INTERVAL);
			this.state = 2072;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.PLUS || _la === TrinoSqlParser.MINUS) {
				{
				this.state = 2071;
				_localctx._sign = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.PLUS || _la === TrinoSqlParser.MINUS)) {
					_localctx._sign = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 2074;
			this.string();
			this.state = 2075;
			_localctx._from = this.intervalField();
			this.state = 2078;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 271, this._ctx) ) {
			case 1:
				{
				this.state = 2076;
				this.match(TrinoSqlParser.KW_TO);
				this.state = 2077;
				_localctx._to = this.intervalField();
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
	public intervalField(): IntervalFieldContext {
		let _localctx: IntervalFieldContext = new IntervalFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, TrinoSqlParser.RULE_intervalField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2080;
			_la = this._input.LA(1);
			if (!(_la === TrinoSqlParser.KW_DAY || _la === TrinoSqlParser.KW_HOUR || _la === TrinoSqlParser.KW_MINUTE || _la === TrinoSqlParser.KW_MONTH || _la === TrinoSqlParser.KW_SECOND || _la === TrinoSqlParser.KW_YEAR)) {
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
	public normalForm(): NormalFormContext {
		let _localctx: NormalFormContext = new NormalFormContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, TrinoSqlParser.RULE_normalForm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2082;
			_la = this._input.LA(1);
			if (!(((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (TrinoSqlParser.KW_NFC - 140)) | (1 << (TrinoSqlParser.KW_NFD - 140)) | (1 << (TrinoSqlParser.KW_NFKC - 140)) | (1 << (TrinoSqlParser.KW_NFKD - 140)))) !== 0))) {
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

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	// @RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 132;
		this.enterRecursionRule(_localctx, 132, TrinoSqlParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2175;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 282, this._ctx) ) {
			case 1:
				{
				_localctx = new RowTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2085;
				this.match(TrinoSqlParser.KW_ROW);
				this.state = 2086;
				this.match(TrinoSqlParser.T__0);
				this.state = 2087;
				this.rowField();
				this.state = 2092;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 2088;
					this.match(TrinoSqlParser.T__2);
					this.state = 2089;
					this.rowField();
					}
					}
					this.state = 2094;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2095;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 2:
				{
				_localctx = new IntervalTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2097;
				this.match(TrinoSqlParser.KW_INTERVAL);
				this.state = 2098;
				(_localctx as IntervalTypeContext)._from = this.intervalField();
				this.state = 2101;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 273, this._ctx) ) {
				case 1:
					{
					this.state = 2099;
					this.match(TrinoSqlParser.KW_TO);
					this.state = 2100;
					(_localctx as IntervalTypeContext)._to = this.intervalField();
					}
					break;
				}
				}
				break;

			case 3:
				{
				_localctx = new DateTimeTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2103;
				(_localctx as DateTimeTypeContext)._base = this.match(TrinoSqlParser.KW_TIMESTAMP);
				this.state = 2108;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 274, this._ctx) ) {
				case 1:
					{
					this.state = 2104;
					this.match(TrinoSqlParser.T__0);
					this.state = 2105;
					(_localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 2106;
					this.match(TrinoSqlParser.T__1);
					}
					break;
				}
				this.state = 2113;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 275, this._ctx) ) {
				case 1:
					{
					this.state = 2110;
					this.match(TrinoSqlParser.KW_WITHOUT);
					this.state = 2111;
					this.match(TrinoSqlParser.KW_TIME);
					this.state = 2112;
					this.match(TrinoSqlParser.KW_ZONE);
					}
					break;
				}
				}
				break;

			case 4:
				{
				_localctx = new DateTimeTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2115;
				(_localctx as DateTimeTypeContext)._base = this.match(TrinoSqlParser.KW_TIMESTAMP);
				this.state = 2120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.T__0) {
					{
					this.state = 2116;
					this.match(TrinoSqlParser.T__0);
					this.state = 2117;
					(_localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 2118;
					this.match(TrinoSqlParser.T__1);
					}
				}

				this.state = 2122;
				this.match(TrinoSqlParser.KW_WITH);
				this.state = 2123;
				this.match(TrinoSqlParser.KW_TIME);
				this.state = 2124;
				this.match(TrinoSqlParser.KW_ZONE);
				}
				break;

			case 5:
				{
				_localctx = new DateTimeTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2125;
				(_localctx as DateTimeTypeContext)._base = this.match(TrinoSqlParser.KW_TIME);
				this.state = 2130;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 277, this._ctx) ) {
				case 1:
					{
					this.state = 2126;
					this.match(TrinoSqlParser.T__0);
					this.state = 2127;
					(_localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 2128;
					this.match(TrinoSqlParser.T__1);
					}
					break;
				}
				this.state = 2135;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 278, this._ctx) ) {
				case 1:
					{
					this.state = 2132;
					this.match(TrinoSqlParser.KW_WITHOUT);
					this.state = 2133;
					this.match(TrinoSqlParser.KW_TIME);
					this.state = 2134;
					this.match(TrinoSqlParser.KW_ZONE);
					}
					break;
				}
				}
				break;

			case 6:
				{
				_localctx = new DateTimeTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2137;
				(_localctx as DateTimeTypeContext)._base = this.match(TrinoSqlParser.KW_TIME);
				this.state = 2142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.T__0) {
					{
					this.state = 2138;
					this.match(TrinoSqlParser.T__0);
					this.state = 2139;
					(_localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 2140;
					this.match(TrinoSqlParser.T__1);
					}
				}

				this.state = 2144;
				this.match(TrinoSqlParser.KW_WITH);
				this.state = 2145;
				this.match(TrinoSqlParser.KW_TIME);
				this.state = 2146;
				this.match(TrinoSqlParser.KW_ZONE);
				}
				break;

			case 7:
				{
				_localctx = new DoublePrecisionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2147;
				this.match(TrinoSqlParser.KW_DOUBLE);
				this.state = 2148;
				this.match(TrinoSqlParser.KW_PRECISION);
				}
				break;

			case 8:
				{
				_localctx = new LegacyArrayTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2149;
				this.match(TrinoSqlParser.KW_ARRAY);
				this.state = 2150;
				this.match(TrinoSqlParser.LT);
				this.state = 2151;
				this.type(0);
				this.state = 2152;
				this.match(TrinoSqlParser.GT);
				}
				break;

			case 9:
				{
				_localctx = new LegacyMapTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2154;
				this.match(TrinoSqlParser.KW_MAP);
				this.state = 2155;
				this.match(TrinoSqlParser.LT);
				this.state = 2156;
				(_localctx as LegacyMapTypeContext)._keyType = this.type(0);
				this.state = 2157;
				this.match(TrinoSqlParser.T__2);
				this.state = 2158;
				(_localctx as LegacyMapTypeContext)._valueType = this.type(0);
				this.state = 2159;
				this.match(TrinoSqlParser.GT);
				}
				break;

			case 10:
				{
				_localctx = new GenericTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2161;
				this.identifier();
				this.state = 2173;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 281, this._ctx) ) {
				case 1:
					{
					this.state = 2162;
					this.match(TrinoSqlParser.T__0);
					this.state = 2163;
					this.typeParameter();
					this.state = 2168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 2164;
						this.match(TrinoSqlParser.T__2);
						this.state = 2165;
						this.typeParameter();
						}
						}
						this.state = 2170;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2171;
					this.match(TrinoSqlParser.T__1);
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2186;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 284, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_type);
					this.state = 2177;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 2178;
					this.match(TrinoSqlParser.KW_ARRAY);
					this.state = 2182;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 283, this._ctx) ) {
					case 1:
						{
						this.state = 2179;
						this.match(TrinoSqlParser.T__6);
						this.state = 2180;
						this.match(TrinoSqlParser.INTEGER_VALUE);
						this.state = 2181;
						this.match(TrinoSqlParser.T__7);
						}
						break;
					}
					}
					}
				}
				this.state = 2188;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 284, this._ctx);
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
	public rowField(): RowFieldContext {
		let _localctx: RowFieldContext = new RowFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, TrinoSqlParser.RULE_rowField);
		try {
			this.state = 2193;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 285, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2189;
				this.type(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2190;
				this.identifier();
				this.state = 2191;
				this.type(0);
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
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, TrinoSqlParser.RULE_typeParameter);
		try {
			this.state = 2197;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.INTEGER_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2195;
				this.match(TrinoSqlParser.INTEGER_VALUE);
				}
				break;
			case TrinoSqlParser.KW_ADD:
			case TrinoSqlParser.KW_ADMIN:
			case TrinoSqlParser.KW_AFTER:
			case TrinoSqlParser.KW_ALL:
			case TrinoSqlParser.KW_ANALYZE:
			case TrinoSqlParser.KW_ANY:
			case TrinoSqlParser.KW_ARRAY:
			case TrinoSqlParser.KW_ASC:
			case TrinoSqlParser.KW_AT:
			case TrinoSqlParser.KW_AUTHORIZATION:
			case TrinoSqlParser.KW_BERNOULLI:
			case TrinoSqlParser.KW_CALL:
			case TrinoSqlParser.KW_CASCADE:
			case TrinoSqlParser.KW_CATALOGS:
			case TrinoSqlParser.KW_COLUMN:
			case TrinoSqlParser.KW_COLUMNS:
			case TrinoSqlParser.KW_COMMENT:
			case TrinoSqlParser.KW_COMMIT:
			case TrinoSqlParser.KW_COMMITTED:
			case TrinoSqlParser.KW_CURRENT:
			case TrinoSqlParser.KW_DATA:
			case TrinoSqlParser.KW_DATE:
			case TrinoSqlParser.KW_DAY:
			case TrinoSqlParser.KW_DEFAULT:
			case TrinoSqlParser.KW_DEFINER:
			case TrinoSqlParser.KW_DESC:
			case TrinoSqlParser.KW_DEFINE:
			case TrinoSqlParser.KW_DISTRIBUTED:
			case TrinoSqlParser.KW_DOUBLE:
			case TrinoSqlParser.KW_EMPTY:
			case TrinoSqlParser.KW_EXCLUDING:
			case TrinoSqlParser.KW_EXPLAIN:
			case TrinoSqlParser.KW_FETCH:
			case TrinoSqlParser.KW_FILTER:
			case TrinoSqlParser.KW_FINAL:
			case TrinoSqlParser.KW_FIRST:
			case TrinoSqlParser.KW_FOLLOWING:
			case TrinoSqlParser.KW_FORMAT:
			case TrinoSqlParser.KW_FUNCTIONS:
			case TrinoSqlParser.KW_GRANT:
			case TrinoSqlParser.KW_GRANTED:
			case TrinoSqlParser.KW_GRANTS:
			case TrinoSqlParser.KW_DENY:
			case TrinoSqlParser.KW_GRAPHVIZ:
			case TrinoSqlParser.KW_GROUPS:
			case TrinoSqlParser.KW_HOUR:
			case TrinoSqlParser.KW_IF:
			case TrinoSqlParser.KW_IGNORE:
			case TrinoSqlParser.KW_INCLUDING:
			case TrinoSqlParser.KW_INITIAL:
			case TrinoSqlParser.KW_INPUT:
			case TrinoSqlParser.KW_INTERVAL:
			case TrinoSqlParser.KW_INVOKER:
			case TrinoSqlParser.KW_IO:
			case TrinoSqlParser.KW_ISOLATION:
			case TrinoSqlParser.KW_JSON:
			case TrinoSqlParser.KW_LAST:
			case TrinoSqlParser.KW_LATERAL:
			case TrinoSqlParser.KW_LEVEL:
			case TrinoSqlParser.KW_LIMIT:
			case TrinoSqlParser.KW_LOCAL:
			case TrinoSqlParser.KW_LOGICAL:
			case TrinoSqlParser.KW_MAP:
			case TrinoSqlParser.KW_MATCH:
			case TrinoSqlParser.KW_MATCHED:
			case TrinoSqlParser.KW_MATCHES:
			case TrinoSqlParser.KW_MATCH_RECOGNIZE:
			case TrinoSqlParser.KW_MATERIALIZED:
			case TrinoSqlParser.KW_MEASURES:
			case TrinoSqlParser.KW_MERGE:
			case TrinoSqlParser.KW_MINUTE:
			case TrinoSqlParser.KW_MONTH:
			case TrinoSqlParser.KW_NEXT:
			case TrinoSqlParser.KW_NFC:
			case TrinoSqlParser.KW_NFD:
			case TrinoSqlParser.KW_NFKC:
			case TrinoSqlParser.KW_NFKD:
			case TrinoSqlParser.KW_NO:
			case TrinoSqlParser.KW_NONE:
			case TrinoSqlParser.KW_NULLIF:
			case TrinoSqlParser.KW_NULLS:
			case TrinoSqlParser.KW_OFFSET:
			case TrinoSqlParser.KW_OMIT:
			case TrinoSqlParser.KW_ONE:
			case TrinoSqlParser.KW_ONLY:
			case TrinoSqlParser.KW_OPTION:
			case TrinoSqlParser.KW_ORDINALITY:
			case TrinoSqlParser.KW_OUTPUT:
			case TrinoSqlParser.KW_OVER:
			case TrinoSqlParser.KW_PARTITION:
			case TrinoSqlParser.KW_PARTITIONS:
			case TrinoSqlParser.KW_PAST:
			case TrinoSqlParser.KW_PATH:
			case TrinoSqlParser.KW_PATTERN:
			case TrinoSqlParser.KW_PER:
			case TrinoSqlParser.KW_PERMUTE:
			case TrinoSqlParser.KW_POSITION:
			case TrinoSqlParser.KW_PRECEDING:
			case TrinoSqlParser.KW_PRECISION:
			case TrinoSqlParser.KW_PRIVILEGES:
			case TrinoSqlParser.KW_PROPERTIES:
			case TrinoSqlParser.KW_RANGE:
			case TrinoSqlParser.KW_READ:
			case TrinoSqlParser.KW_REFRESH:
			case TrinoSqlParser.KW_RENAME:
			case TrinoSqlParser.KW_REPEATABLE:
			case TrinoSqlParser.KW_REPLACE:
			case TrinoSqlParser.KW_RESET:
			case TrinoSqlParser.KW_RESPECT:
			case TrinoSqlParser.KW_RESTRICT:
			case TrinoSqlParser.KW_REVOKE:
			case TrinoSqlParser.KW_ROLE:
			case TrinoSqlParser.KW_ROLES:
			case TrinoSqlParser.KW_ROLLBACK:
			case TrinoSqlParser.KW_ROW:
			case TrinoSqlParser.KW_ROWS:
			case TrinoSqlParser.KW_RUNNING:
			case TrinoSqlParser.KW_SCHEMA:
			case TrinoSqlParser.KW_SCHEMAS:
			case TrinoSqlParser.KW_SECOND:
			case TrinoSqlParser.KW_SECURITY:
			case TrinoSqlParser.KW_SEEK:
			case TrinoSqlParser.KW_SERIALIZABLE:
			case TrinoSqlParser.KW_SESSION:
			case TrinoSqlParser.KW_SET:
			case TrinoSqlParser.KW_SETS:
			case TrinoSqlParser.KW_SHOW:
			case TrinoSqlParser.KW_SOME:
			case TrinoSqlParser.KW_START:
			case TrinoSqlParser.KW_STATS:
			case TrinoSqlParser.KW_SUBSET:
			case TrinoSqlParser.KW_SUBSTRING:
			case TrinoSqlParser.KW_SYSTEM:
			case TrinoSqlParser.KW_TABLES:
			case TrinoSqlParser.KW_TABLESAMPLE:
			case TrinoSqlParser.KW_TEXT:
			case TrinoSqlParser.KW_TIES:
			case TrinoSqlParser.KW_TIME:
			case TrinoSqlParser.KW_TIMESTAMP:
			case TrinoSqlParser.KW_TO:
			case TrinoSqlParser.KW_TRANSACTION:
			case TrinoSqlParser.KW_TRUNCATE:
			case TrinoSqlParser.KW_TRY_CAST:
			case TrinoSqlParser.KW_TYPE:
			case TrinoSqlParser.KW_UNBOUNDED:
			case TrinoSqlParser.KW_UNCOMMITTED:
			case TrinoSqlParser.KW_UNMATCHED:
			case TrinoSqlParser.KW_UPDATE:
			case TrinoSqlParser.KW_USE:
			case TrinoSqlParser.KW_USER:
			case TrinoSqlParser.KW_VALIDATE:
			case TrinoSqlParser.KW_VERBOSE:
			case TrinoSqlParser.KW_VIEW:
			case TrinoSqlParser.KW_WINDOW:
			case TrinoSqlParser.KW_WITHOUT:
			case TrinoSqlParser.KW_WORK:
			case TrinoSqlParser.KW_WRITE:
			case TrinoSqlParser.KW_YEAR:
			case TrinoSqlParser.KW_ZONE:
			case TrinoSqlParser.IDENTIFIER:
			case TrinoSqlParser.DIGIT_IDENTIFIER:
			case TrinoSqlParser.QUOTED_IDENTIFIER:
			case TrinoSqlParser.BACKQUOTED_IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2196;
				this.type(0);
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
	public whenClause(): WhenClauseContext {
		let _localctx: WhenClauseContext = new WhenClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, TrinoSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2199;
			this.match(TrinoSqlParser.KW_WHEN);
			this.state = 2200;
			_localctx._condition = this.expression();
			this.state = 2201;
			this.match(TrinoSqlParser.KW_THEN);
			this.state = 2202;
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
	public filter(): FilterContext {
		let _localctx: FilterContext = new FilterContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, TrinoSqlParser.RULE_filter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2204;
			this.match(TrinoSqlParser.KW_FILTER);
			this.state = 2205;
			this.match(TrinoSqlParser.T__0);
			this.state = 2206;
			this.match(TrinoSqlParser.KW_WHERE);
			this.state = 2207;
			this.booleanExpression(0);
			this.state = 2208;
			this.match(TrinoSqlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mergeCase(): MergeCaseContext {
		let _localctx: MergeCaseContext = new MergeCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, TrinoSqlParser.RULE_mergeCase);
		let _la: number;
		try {
			this.state = 2274;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 294, this._ctx) ) {
			case 1:
				_localctx = new MergeUpdateContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2210;
				this.match(TrinoSqlParser.KW_WHEN);
				this.state = 2211;
				this.match(TrinoSqlParser.KW_MATCHED);
				this.state = 2214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_AND) {
					{
					this.state = 2212;
					this.match(TrinoSqlParser.KW_AND);
					this.state = 2213;
					(_localctx as MergeUpdateContext)._condition = this.expression();
					}
				}

				this.state = 2216;
				this.match(TrinoSqlParser.KW_THEN);
				this.state = 2217;
				this.match(TrinoSqlParser.KW_UPDATE);
				this.state = 2218;
				this.match(TrinoSqlParser.KW_SET);
				this.state = 2219;
				(_localctx as MergeUpdateContext)._identifier = this.identifier();
				(_localctx as MergeUpdateContext)._targets.push((_localctx as MergeUpdateContext)._identifier);
				this.state = 2220;
				this.match(TrinoSqlParser.EQ);
				this.state = 2221;
				(_localctx as MergeUpdateContext)._expression = this.expression();
				(_localctx as MergeUpdateContext)._values.push((_localctx as MergeUpdateContext)._expression);
				this.state = 2229;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 2222;
					this.match(TrinoSqlParser.T__2);
					this.state = 2223;
					(_localctx as MergeUpdateContext)._identifier = this.identifier();
					(_localctx as MergeUpdateContext)._targets.push((_localctx as MergeUpdateContext)._identifier);
					this.state = 2224;
					this.match(TrinoSqlParser.EQ);
					this.state = 2225;
					(_localctx as MergeUpdateContext)._expression = this.expression();
					(_localctx as MergeUpdateContext)._values.push((_localctx as MergeUpdateContext)._expression);
					}
					}
					this.state = 2231;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				_localctx = new MergeDeleteContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2232;
				this.match(TrinoSqlParser.KW_WHEN);
				this.state = 2233;
				this.match(TrinoSqlParser.KW_MATCHED);
				this.state = 2236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_AND) {
					{
					this.state = 2234;
					this.match(TrinoSqlParser.KW_AND);
					this.state = 2235;
					(_localctx as MergeDeleteContext)._condition = this.expression();
					}
				}

				this.state = 2238;
				this.match(TrinoSqlParser.KW_THEN);
				this.state = 2239;
				this.match(TrinoSqlParser.KW_DELETE);
				}
				break;

			case 3:
				_localctx = new MergeInsertContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2240;
				this.match(TrinoSqlParser.KW_WHEN);
				this.state = 2241;
				this.match(TrinoSqlParser.KW_NOT);
				this.state = 2242;
				this.match(TrinoSqlParser.KW_MATCHED);
				this.state = 2245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.KW_AND) {
					{
					this.state = 2243;
					this.match(TrinoSqlParser.KW_AND);
					this.state = 2244;
					(_localctx as MergeInsertContext)._condition = this.expression();
					}
				}

				this.state = 2247;
				this.match(TrinoSqlParser.KW_THEN);
				this.state = 2248;
				this.match(TrinoSqlParser.KW_INSERT);
				this.state = 2260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.T__0) {
					{
					this.state = 2249;
					this.match(TrinoSqlParser.T__0);
					this.state = 2250;
					(_localctx as MergeInsertContext)._identifier = this.identifier();
					(_localctx as MergeInsertContext)._targets.push((_localctx as MergeInsertContext)._identifier);
					this.state = 2255;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__2) {
						{
						{
						this.state = 2251;
						this.match(TrinoSqlParser.T__2);
						this.state = 2252;
						(_localctx as MergeInsertContext)._identifier = this.identifier();
						(_localctx as MergeInsertContext)._targets.push((_localctx as MergeInsertContext)._identifier);
						}
						}
						this.state = 2257;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2258;
					this.match(TrinoSqlParser.T__1);
					}
				}

				this.state = 2262;
				this.match(TrinoSqlParser.KW_VALUES);
				this.state = 2263;
				this.match(TrinoSqlParser.T__0);
				this.state = 2264;
				(_localctx as MergeInsertContext)._expression = this.expression();
				(_localctx as MergeInsertContext)._values.push((_localctx as MergeInsertContext)._expression);
				this.state = 2269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 2265;
					this.match(TrinoSqlParser.T__2);
					this.state = 2266;
					(_localctx as MergeInsertContext)._expression = this.expression();
					(_localctx as MergeInsertContext)._values.push((_localctx as MergeInsertContext)._expression);
					}
					}
					this.state = 2271;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2272;
				this.match(TrinoSqlParser.T__1);
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
	public over(): OverContext {
		let _localctx: OverContext = new OverContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, TrinoSqlParser.RULE_over);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2276;
			this.match(TrinoSqlParser.KW_OVER);
			this.state = 2282;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.KW_ADD:
			case TrinoSqlParser.KW_ADMIN:
			case TrinoSqlParser.KW_AFTER:
			case TrinoSqlParser.KW_ALL:
			case TrinoSqlParser.KW_ANALYZE:
			case TrinoSqlParser.KW_ANY:
			case TrinoSqlParser.KW_ARRAY:
			case TrinoSqlParser.KW_ASC:
			case TrinoSqlParser.KW_AT:
			case TrinoSqlParser.KW_AUTHORIZATION:
			case TrinoSqlParser.KW_BERNOULLI:
			case TrinoSqlParser.KW_CALL:
			case TrinoSqlParser.KW_CASCADE:
			case TrinoSqlParser.KW_CATALOGS:
			case TrinoSqlParser.KW_COLUMN:
			case TrinoSqlParser.KW_COLUMNS:
			case TrinoSqlParser.KW_COMMENT:
			case TrinoSqlParser.KW_COMMIT:
			case TrinoSqlParser.KW_COMMITTED:
			case TrinoSqlParser.KW_CURRENT:
			case TrinoSqlParser.KW_DATA:
			case TrinoSqlParser.KW_DATE:
			case TrinoSqlParser.KW_DAY:
			case TrinoSqlParser.KW_DEFAULT:
			case TrinoSqlParser.KW_DEFINER:
			case TrinoSqlParser.KW_DESC:
			case TrinoSqlParser.KW_DEFINE:
			case TrinoSqlParser.KW_DISTRIBUTED:
			case TrinoSqlParser.KW_DOUBLE:
			case TrinoSqlParser.KW_EMPTY:
			case TrinoSqlParser.KW_EXCLUDING:
			case TrinoSqlParser.KW_EXPLAIN:
			case TrinoSqlParser.KW_FETCH:
			case TrinoSqlParser.KW_FILTER:
			case TrinoSqlParser.KW_FINAL:
			case TrinoSqlParser.KW_FIRST:
			case TrinoSqlParser.KW_FOLLOWING:
			case TrinoSqlParser.KW_FORMAT:
			case TrinoSqlParser.KW_FUNCTIONS:
			case TrinoSqlParser.KW_GRANT:
			case TrinoSqlParser.KW_GRANTED:
			case TrinoSqlParser.KW_GRANTS:
			case TrinoSqlParser.KW_DENY:
			case TrinoSqlParser.KW_GRAPHVIZ:
			case TrinoSqlParser.KW_GROUPS:
			case TrinoSqlParser.KW_HOUR:
			case TrinoSqlParser.KW_IF:
			case TrinoSqlParser.KW_IGNORE:
			case TrinoSqlParser.KW_INCLUDING:
			case TrinoSqlParser.KW_INITIAL:
			case TrinoSqlParser.KW_INPUT:
			case TrinoSqlParser.KW_INTERVAL:
			case TrinoSqlParser.KW_INVOKER:
			case TrinoSqlParser.KW_IO:
			case TrinoSqlParser.KW_ISOLATION:
			case TrinoSqlParser.KW_JSON:
			case TrinoSqlParser.KW_LAST:
			case TrinoSqlParser.KW_LATERAL:
			case TrinoSqlParser.KW_LEVEL:
			case TrinoSqlParser.KW_LIMIT:
			case TrinoSqlParser.KW_LOCAL:
			case TrinoSqlParser.KW_LOGICAL:
			case TrinoSqlParser.KW_MAP:
			case TrinoSqlParser.KW_MATCH:
			case TrinoSqlParser.KW_MATCHED:
			case TrinoSqlParser.KW_MATCHES:
			case TrinoSqlParser.KW_MATCH_RECOGNIZE:
			case TrinoSqlParser.KW_MATERIALIZED:
			case TrinoSqlParser.KW_MEASURES:
			case TrinoSqlParser.KW_MERGE:
			case TrinoSqlParser.KW_MINUTE:
			case TrinoSqlParser.KW_MONTH:
			case TrinoSqlParser.KW_NEXT:
			case TrinoSqlParser.KW_NFC:
			case TrinoSqlParser.KW_NFD:
			case TrinoSqlParser.KW_NFKC:
			case TrinoSqlParser.KW_NFKD:
			case TrinoSqlParser.KW_NO:
			case TrinoSqlParser.KW_NONE:
			case TrinoSqlParser.KW_NULLIF:
			case TrinoSqlParser.KW_NULLS:
			case TrinoSqlParser.KW_OFFSET:
			case TrinoSqlParser.KW_OMIT:
			case TrinoSqlParser.KW_ONE:
			case TrinoSqlParser.KW_ONLY:
			case TrinoSqlParser.KW_OPTION:
			case TrinoSqlParser.KW_ORDINALITY:
			case TrinoSqlParser.KW_OUTPUT:
			case TrinoSqlParser.KW_OVER:
			case TrinoSqlParser.KW_PARTITION:
			case TrinoSqlParser.KW_PARTITIONS:
			case TrinoSqlParser.KW_PAST:
			case TrinoSqlParser.KW_PATH:
			case TrinoSqlParser.KW_PATTERN:
			case TrinoSqlParser.KW_PER:
			case TrinoSqlParser.KW_PERMUTE:
			case TrinoSqlParser.KW_POSITION:
			case TrinoSqlParser.KW_PRECEDING:
			case TrinoSqlParser.KW_PRECISION:
			case TrinoSqlParser.KW_PRIVILEGES:
			case TrinoSqlParser.KW_PROPERTIES:
			case TrinoSqlParser.KW_RANGE:
			case TrinoSqlParser.KW_READ:
			case TrinoSqlParser.KW_REFRESH:
			case TrinoSqlParser.KW_RENAME:
			case TrinoSqlParser.KW_REPEATABLE:
			case TrinoSqlParser.KW_REPLACE:
			case TrinoSqlParser.KW_RESET:
			case TrinoSqlParser.KW_RESPECT:
			case TrinoSqlParser.KW_RESTRICT:
			case TrinoSqlParser.KW_REVOKE:
			case TrinoSqlParser.KW_ROLE:
			case TrinoSqlParser.KW_ROLES:
			case TrinoSqlParser.KW_ROLLBACK:
			case TrinoSqlParser.KW_ROW:
			case TrinoSqlParser.KW_ROWS:
			case TrinoSqlParser.KW_RUNNING:
			case TrinoSqlParser.KW_SCHEMA:
			case TrinoSqlParser.KW_SCHEMAS:
			case TrinoSqlParser.KW_SECOND:
			case TrinoSqlParser.KW_SECURITY:
			case TrinoSqlParser.KW_SEEK:
			case TrinoSqlParser.KW_SERIALIZABLE:
			case TrinoSqlParser.KW_SESSION:
			case TrinoSqlParser.KW_SET:
			case TrinoSqlParser.KW_SETS:
			case TrinoSqlParser.KW_SHOW:
			case TrinoSqlParser.KW_SOME:
			case TrinoSqlParser.KW_START:
			case TrinoSqlParser.KW_STATS:
			case TrinoSqlParser.KW_SUBSET:
			case TrinoSqlParser.KW_SUBSTRING:
			case TrinoSqlParser.KW_SYSTEM:
			case TrinoSqlParser.KW_TABLES:
			case TrinoSqlParser.KW_TABLESAMPLE:
			case TrinoSqlParser.KW_TEXT:
			case TrinoSqlParser.KW_TIES:
			case TrinoSqlParser.KW_TIME:
			case TrinoSqlParser.KW_TIMESTAMP:
			case TrinoSqlParser.KW_TO:
			case TrinoSqlParser.KW_TRANSACTION:
			case TrinoSqlParser.KW_TRUNCATE:
			case TrinoSqlParser.KW_TRY_CAST:
			case TrinoSqlParser.KW_TYPE:
			case TrinoSqlParser.KW_UNBOUNDED:
			case TrinoSqlParser.KW_UNCOMMITTED:
			case TrinoSqlParser.KW_UNMATCHED:
			case TrinoSqlParser.KW_UPDATE:
			case TrinoSqlParser.KW_USE:
			case TrinoSqlParser.KW_USER:
			case TrinoSqlParser.KW_VALIDATE:
			case TrinoSqlParser.KW_VERBOSE:
			case TrinoSqlParser.KW_VIEW:
			case TrinoSqlParser.KW_WINDOW:
			case TrinoSqlParser.KW_WITHOUT:
			case TrinoSqlParser.KW_WORK:
			case TrinoSqlParser.KW_WRITE:
			case TrinoSqlParser.KW_YEAR:
			case TrinoSqlParser.KW_ZONE:
			case TrinoSqlParser.IDENTIFIER:
			case TrinoSqlParser.DIGIT_IDENTIFIER:
			case TrinoSqlParser.QUOTED_IDENTIFIER:
			case TrinoSqlParser.BACKQUOTED_IDENTIFIER:
				{
				this.state = 2277;
				_localctx._windowName = this.identifier();
				}
				break;
			case TrinoSqlParser.T__0:
				{
				this.state = 2278;
				this.match(TrinoSqlParser.T__0);
				this.state = 2279;
				this.windowSpecification();
				this.state = 2280;
				this.match(TrinoSqlParser.T__1);
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
	public windowFrame(): WindowFrameContext {
		let _localctx: WindowFrameContext = new WindowFrameContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, TrinoSqlParser.RULE_windowFrame);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.KW_MEASURES) {
				{
				this.state = 2284;
				this.match(TrinoSqlParser.KW_MEASURES);
				this.state = 2285;
				this.measureDefinition();
				this.state = 2290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 2286;
					this.match(TrinoSqlParser.T__2);
					this.state = 2287;
					this.measureDefinition();
					}
					}
					this.state = 2292;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2295;
			this.frameExtent();
			this.state = 2299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.KW_AFTER) {
				{
				this.state = 2296;
				this.match(TrinoSqlParser.KW_AFTER);
				this.state = 2297;
				this.match(TrinoSqlParser.KW_MATCH);
				this.state = 2298;
				this.skipTo();
				}
			}

			this.state = 2302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.KW_INITIAL || _la === TrinoSqlParser.KW_SEEK) {
				{
				this.state = 2301;
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.KW_INITIAL || _la === TrinoSqlParser.KW_SEEK)) {
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

			this.state = 2309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.KW_PATTERN) {
				{
				this.state = 2304;
				this.match(TrinoSqlParser.KW_PATTERN);
				this.state = 2305;
				this.match(TrinoSqlParser.T__0);
				this.state = 2306;
				this.rowPattern(0);
				this.state = 2307;
				this.match(TrinoSqlParser.T__1);
				}
			}

			this.state = 2320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.KW_SUBSET) {
				{
				this.state = 2311;
				this.match(TrinoSqlParser.KW_SUBSET);
				this.state = 2312;
				this.subsetDefinition();
				this.state = 2317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 2313;
					this.match(TrinoSqlParser.T__2);
					this.state = 2314;
					this.subsetDefinition();
					}
					}
					this.state = 2319;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.KW_DEFINE) {
				{
				this.state = 2322;
				this.match(TrinoSqlParser.KW_DEFINE);
				this.state = 2323;
				this.variableDefinition();
				this.state = 2328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 2324;
					this.match(TrinoSqlParser.T__2);
					this.state = 2325;
					this.variableDefinition();
					}
					}
					this.state = 2330;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
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
	public frameExtent(): FrameExtentContext {
		let _localctx: FrameExtentContext = new FrameExtentContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, TrinoSqlParser.RULE_frameExtent);
		try {
			this.state = 2357;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 305, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2333;
				_localctx._frameType = this.match(TrinoSqlParser.KW_RANGE);
				this.state = 2334;
				_localctx._frameStart = this.frameBound();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2335;
				_localctx._frameType = this.match(TrinoSqlParser.KW_ROWS);
				this.state = 2336;
				_localctx._frameStart = this.frameBound();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2337;
				_localctx._frameType = this.match(TrinoSqlParser.KW_GROUPS);
				this.state = 2338;
				_localctx._frameStart = this.frameBound();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2339;
				_localctx._frameType = this.match(TrinoSqlParser.KW_RANGE);
				this.state = 2340;
				this.match(TrinoSqlParser.KW_BETWEEN);
				this.state = 2341;
				_localctx._frameStart = this.frameBound();
				this.state = 2342;
				this.match(TrinoSqlParser.KW_AND);
				this.state = 2343;
				_localctx._end = this.frameBound();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2345;
				_localctx._frameType = this.match(TrinoSqlParser.KW_ROWS);
				this.state = 2346;
				this.match(TrinoSqlParser.KW_BETWEEN);
				this.state = 2347;
				_localctx._frameStart = this.frameBound();
				this.state = 2348;
				this.match(TrinoSqlParser.KW_AND);
				this.state = 2349;
				_localctx._end = this.frameBound();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2351;
				_localctx._frameType = this.match(TrinoSqlParser.KW_GROUPS);
				this.state = 2352;
				this.match(TrinoSqlParser.KW_BETWEEN);
				this.state = 2353;
				_localctx._frameStart = this.frameBound();
				this.state = 2354;
				this.match(TrinoSqlParser.KW_AND);
				this.state = 2355;
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
		this.enterRule(_localctx, 150, TrinoSqlParser.RULE_frameBound);
		let _la: number;
		try {
			this.state = 2368;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 306, this._ctx) ) {
			case 1:
				_localctx = new UnboundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2359;
				this.match(TrinoSqlParser.KW_UNBOUNDED);
				this.state = 2360;
				(_localctx as UnboundedFrameContext)._boundType = this.match(TrinoSqlParser.KW_PRECEDING);
				}
				break;

			case 2:
				_localctx = new UnboundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2361;
				this.match(TrinoSqlParser.KW_UNBOUNDED);
				this.state = 2362;
				(_localctx as UnboundedFrameContext)._boundType = this.match(TrinoSqlParser.KW_FOLLOWING);
				}
				break;

			case 3:
				_localctx = new CurrentRowBoundContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2363;
				this.match(TrinoSqlParser.KW_CURRENT);
				this.state = 2364;
				this.match(TrinoSqlParser.KW_ROW);
				}
				break;

			case 4:
				_localctx = new BoundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2365;
				this.expression();
				this.state = 2366;
				(_localctx as BoundedFrameContext)._boundType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.KW_FOLLOWING || _la === TrinoSqlParser.KW_PRECEDING)) {
					(_localctx as BoundedFrameContext)._boundType = this._errHandler.recoverInline(this);
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

	public rowPattern(): RowPatternContext;
	public rowPattern(_p: number): RowPatternContext;
	// @RuleVersion(0)
	public rowPattern(_p?: number): RowPatternContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RowPatternContext = new RowPatternContext(this._ctx, _parentState);
		let _prevctx: RowPatternContext = _localctx;
		let _startState: number = 152;
		this.enterRecursionRule(_localctx, 152, TrinoSqlParser.RULE_rowPattern, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new QuantifiedPrimaryContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 2371;
			this.patternPrimary();
			this.state = 2373;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 307, this._ctx) ) {
			case 1:
				{
				this.state = 2372;
				this.patternQuantifier();
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2382;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 309, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2380;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 308, this._ctx) ) {
					case 1:
						{
						_localctx = new PatternConcatenationContext(new RowPatternContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_rowPattern);
						this.state = 2375;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2376;
						this.rowPattern(3);
						}
						break;

					case 2:
						{
						_localctx = new PatternAlternationContext(new RowPatternContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_rowPattern);
						this.state = 2377;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2378;
						this.match(TrinoSqlParser.T__8);
						this.state = 2379;
						this.rowPattern(2);
						}
						break;
					}
					}
				}
				this.state = 2384;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 309, this._ctx);
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
	public patternPrimary(): PatternPrimaryContext {
		let _localctx: PatternPrimaryContext = new PatternPrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, TrinoSqlParser.RULE_patternPrimary);
		let _la: number;
		try {
			this.state = 2410;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 311, this._ctx) ) {
			case 1:
				_localctx = new PatternVariableContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2385;
				this.identifier();
				}
				break;

			case 2:
				_localctx = new EmptyPatternContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2386;
				this.match(TrinoSqlParser.T__0);
				this.state = 2387;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 3:
				_localctx = new PatternPermutationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2388;
				this.match(TrinoSqlParser.KW_PERMUTE);
				this.state = 2389;
				this.match(TrinoSqlParser.T__0);
				this.state = 2390;
				this.rowPattern(0);
				this.state = 2395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__2) {
					{
					{
					this.state = 2391;
					this.match(TrinoSqlParser.T__2);
					this.state = 2392;
					this.rowPattern(0);
					}
					}
					this.state = 2397;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2398;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 4:
				_localctx = new GroupedPatternContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2400;
				this.match(TrinoSqlParser.T__0);
				this.state = 2401;
				this.rowPattern(0);
				this.state = 2402;
				this.match(TrinoSqlParser.T__1);
				}
				break;

			case 5:
				_localctx = new PartitionStartAnchorContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2404;
				this.match(TrinoSqlParser.T__9);
				}
				break;

			case 6:
				_localctx = new PartitionEndAnchorContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2405;
				this.match(TrinoSqlParser.T__10);
				}
				break;

			case 7:
				_localctx = new ExcludedPatternContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2406;
				this.match(TrinoSqlParser.T__11);
				this.state = 2407;
				this.rowPattern(0);
				this.state = 2408;
				this.match(TrinoSqlParser.T__12);
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
	public patternQuantifier(): PatternQuantifierContext {
		let _localctx: PatternQuantifierContext = new PatternQuantifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, TrinoSqlParser.RULE_patternQuantifier);
		let _la: number;
		try {
			this.state = 2442;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 319, this._ctx) ) {
			case 1:
				_localctx = new ZeroOrMoreQuantifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2412;
				this.match(TrinoSqlParser.ASTERISK);
				this.state = 2414;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 312, this._ctx) ) {
				case 1:
					{
					this.state = 2413;
					(_localctx as ZeroOrMoreQuantifierContext)._reluctant = this.match(TrinoSqlParser.QUESTION_MARK);
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new OneOrMoreQuantifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2416;
				this.match(TrinoSqlParser.PLUS);
				this.state = 2418;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 313, this._ctx) ) {
				case 1:
					{
					this.state = 2417;
					(_localctx as OneOrMoreQuantifierContext)._reluctant = this.match(TrinoSqlParser.QUESTION_MARK);
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new ZeroOrOneQuantifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2420;
				this.match(TrinoSqlParser.QUESTION_MARK);
				this.state = 2422;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 314, this._ctx) ) {
				case 1:
					{
					this.state = 2421;
					(_localctx as ZeroOrOneQuantifierContext)._reluctant = this.match(TrinoSqlParser.QUESTION_MARK);
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new RangeQuantifierContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2424;
				this.match(TrinoSqlParser.T__13);
				this.state = 2425;
				(_localctx as RangeQuantifierContext)._exactly = this.match(TrinoSqlParser.INTEGER_VALUE);
				this.state = 2426;
				this.match(TrinoSqlParser.T__14);
				this.state = 2428;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 315, this._ctx) ) {
				case 1:
					{
					this.state = 2427;
					(_localctx as RangeQuantifierContext)._reluctant = this.match(TrinoSqlParser.QUESTION_MARK);
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new RangeQuantifierContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2430;
				this.match(TrinoSqlParser.T__13);
				this.state = 2432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.INTEGER_VALUE) {
					{
					this.state = 2431;
					(_localctx as RangeQuantifierContext)._atLeast = this.match(TrinoSqlParser.INTEGER_VALUE);
					}
				}

				this.state = 2434;
				this.match(TrinoSqlParser.T__2);
				this.state = 2436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.INTEGER_VALUE) {
					{
					this.state = 2435;
					(_localctx as RangeQuantifierContext)._atMost = this.match(TrinoSqlParser.INTEGER_VALUE);
					}
				}

				this.state = 2438;
				this.match(TrinoSqlParser.T__14);
				this.state = 2440;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 318, this._ctx) ) {
				case 1:
					{
					this.state = 2439;
					(_localctx as RangeQuantifierContext)._reluctant = this.match(TrinoSqlParser.QUESTION_MARK);
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
	public updateAssignment(): UpdateAssignmentContext {
		let _localctx: UpdateAssignmentContext = new UpdateAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, TrinoSqlParser.RULE_updateAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2444;
			this.identifier();
			this.state = 2445;
			this.match(TrinoSqlParser.EQ);
			this.state = 2446;
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
	public explainOption(): ExplainOptionContext {
		let _localctx: ExplainOptionContext = new ExplainOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, TrinoSqlParser.RULE_explainOption);
		let _la: number;
		try {
			this.state = 2452;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.KW_FORMAT:
				_localctx = new ExplainFormatContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2448;
				this.match(TrinoSqlParser.KW_FORMAT);
				this.state = 2449;
				(_localctx as ExplainFormatContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.KW_GRAPHVIZ || _la === TrinoSqlParser.KW_JSON || _la === TrinoSqlParser.KW_TEXT)) {
					(_localctx as ExplainFormatContext)._value = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case TrinoSqlParser.KW_TYPE:
				_localctx = new ExplainTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2450;
				this.match(TrinoSqlParser.KW_TYPE);
				this.state = 2451;
				(_localctx as ExplainTypeContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.KW_DISTRIBUTED || _la === TrinoSqlParser.KW_IO || _la === TrinoSqlParser.KW_LOGICAL || _la === TrinoSqlParser.KW_VALIDATE)) {
					(_localctx as ExplainTypeContext)._value = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transactionMode(): TransactionModeContext {
		let _localctx: TransactionModeContext = new TransactionModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, TrinoSqlParser.RULE_transactionMode);
		let _la: number;
		try {
			this.state = 2459;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.KW_ISOLATION:
				_localctx = new IsolationLevelContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2454;
				this.match(TrinoSqlParser.KW_ISOLATION);
				this.state = 2455;
				this.match(TrinoSqlParser.KW_LEVEL);
				this.state = 2456;
				this.levelOfIsolation();
				}
				break;
			case TrinoSqlParser.KW_READ:
				_localctx = new TransactionAccessModeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2457;
				this.match(TrinoSqlParser.KW_READ);
				this.state = 2458;
				(_localctx as TransactionAccessModeContext)._accessMode = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.KW_ONLY || _la === TrinoSqlParser.KW_WRITE)) {
					(_localctx as TransactionAccessModeContext)._accessMode = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public levelOfIsolation(): LevelOfIsolationContext {
		let _localctx: LevelOfIsolationContext = new LevelOfIsolationContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, TrinoSqlParser.RULE_levelOfIsolation);
		try {
			this.state = 2468;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 322, this._ctx) ) {
			case 1:
				_localctx = new ReadUncommittedContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2461;
				this.match(TrinoSqlParser.KW_READ);
				this.state = 2462;
				this.match(TrinoSqlParser.KW_UNCOMMITTED);
				}
				break;

			case 2:
				_localctx = new ReadCommittedContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2463;
				this.match(TrinoSqlParser.KW_READ);
				this.state = 2464;
				this.match(TrinoSqlParser.KW_COMMITTED);
				}
				break;

			case 3:
				_localctx = new RepeatableReadContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2465;
				this.match(TrinoSqlParser.KW_REPEATABLE);
				this.state = 2466;
				this.match(TrinoSqlParser.KW_READ);
				}
				break;

			case 4:
				_localctx = new SerializableContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2467;
				this.match(TrinoSqlParser.KW_SERIALIZABLE);
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
	public callArgument(): CallArgumentContext {
		let _localctx: CallArgumentContext = new CallArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, TrinoSqlParser.RULE_callArgument);
		try {
			this.state = 2475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 323, this._ctx) ) {
			case 1:
				_localctx = new PositionalArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2470;
				this.expression();
				}
				break;

			case 2:
				_localctx = new NamedArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2471;
				this.identifier();
				this.state = 2472;
				this.match(TrinoSqlParser.T__15);
				this.state = 2473;
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
	public pathElement(): PathElementContext {
		let _localctx: PathElementContext = new PathElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, TrinoSqlParser.RULE_pathElement);
		try {
			this.state = 2482;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 324, this._ctx) ) {
			case 1:
				_localctx = new QualifiedArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2477;
				this.identifier();
				this.state = 2478;
				this.match(TrinoSqlParser.T__3);
				this.state = 2479;
				this.identifier();
				}
				break;

			case 2:
				_localctx = new UnqualifiedArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2481;
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
	public pathSpecification(): PathSpecificationContext {
		let _localctx: PathSpecificationContext = new PathSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, TrinoSqlParser.RULE_pathSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2484;
			this.pathElement();
			this.state = 2489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TrinoSqlParser.T__2) {
				{
				{
				this.state = 2485;
				this.match(TrinoSqlParser.T__2);
				this.state = 2486;
				this.pathElement();
				}
				}
				this.state = 2491;
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
	public privilege(): PrivilegeContext {
		let _localctx: PrivilegeContext = new PrivilegeContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, TrinoSqlParser.RULE_privilege);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2492;
			_la = this._input.LA(1);
			if (!(_la === TrinoSqlParser.KW_DELETE || _la === TrinoSqlParser.KW_INSERT || _la === TrinoSqlParser.KW_SELECT || _la === TrinoSqlParser.KW_UPDATE)) {
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
	public tableOrViewName(): TableOrViewNameContext {
		let _localctx: TableOrViewNameContext = new TableOrViewNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, TrinoSqlParser.RULE_tableOrViewName);
		try {
			this.state = 2496;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 326, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2494;
				this.tableName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2495;
				this.viewName();
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
	public tableName(): TableNameContext {
		let _localctx: TableNameContext = new TableNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, TrinoSqlParser.RULE_tableName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2498;
			this.tablePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableNameCreate(): TableNameCreateContext {
		let _localctx: TableNameCreateContext = new TableNameCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, TrinoSqlParser.RULE_tableNameCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2500;
			this.tablePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public viewName(): ViewNameContext {
		let _localctx: ViewNameContext = new ViewNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, TrinoSqlParser.RULE_viewName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2502;
			this.viewPath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public viewNameCreate(): ViewNameCreateContext {
		let _localctx: ViewNameCreateContext = new ViewNameCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, TrinoSqlParser.RULE_viewNameCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2504;
			this.viewPath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 184, TrinoSqlParser.RULE_tablePath);
		try {
			this.state = 2517;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 327, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2506;
				_localctx._table = this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2507;
				_localctx._schema = this.identifier();
				this.state = 2508;
				this.match(TrinoSqlParser.T__3);
				this.state = 2509;
				_localctx._table = this.identifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2511;
				_localctx._catalog = this.identifier();
				this.state = 2512;
				this.match(TrinoSqlParser.T__3);
				this.state = 2513;
				_localctx._schema = this.identifier();
				this.state = 2514;
				this.match(TrinoSqlParser.T__3);
				this.state = 2515;
				_localctx._table = this.identifier();
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
	public viewPath(): ViewPathContext {
		let _localctx: ViewPathContext = new ViewPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, TrinoSqlParser.RULE_viewPath);
		try {
			this.state = 2530;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 328, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2519;
				_localctx._view = this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2520;
				_localctx._schema = this.identifier();
				this.state = 2521;
				this.match(TrinoSqlParser.T__3);
				this.state = 2522;
				_localctx._view = this.identifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2524;
				_localctx._catalog = this.identifier();
				this.state = 2525;
				this.match(TrinoSqlParser.T__3);
				this.state = 2526;
				_localctx._schema = this.identifier();
				this.state = 2527;
				this.match(TrinoSqlParser.T__3);
				this.state = 2528;
				_localctx._view = this.identifier();
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
	public schemaName(): SchemaNameContext {
		let _localctx: SchemaNameContext = new SchemaNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, TrinoSqlParser.RULE_schemaName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2532;
			this.schemaPath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public schemaNameCreate(): SchemaNameCreateContext {
		let _localctx: SchemaNameCreateContext = new SchemaNameCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, TrinoSqlParser.RULE_schemaNameCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2534;
			this.schemaPath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public schemaPath(): SchemaPathContext {
		let _localctx: SchemaPathContext = new SchemaPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, TrinoSqlParser.RULE_schemaPath);
		try {
			this.state = 2541;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 329, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2536;
				_localctx._schema = this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2537;
				_localctx._catalog = this.identifier();
				this.state = 2538;
				this.match(TrinoSqlParser.T__3);
				this.state = 2539;
				_localctx._schema = this.identifier();
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
	public catalogName(): CatalogNameContext {
		let _localctx: CatalogNameContext = new CatalogNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, TrinoSqlParser.RULE_catalogName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2543;
			_localctx._catalog = this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catalogNameCreate(): CatalogNameCreateContext {
		let _localctx: CatalogNameCreateContext = new CatalogNameCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, TrinoSqlParser.RULE_catalogNameCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2545;
			_localctx._catalog = this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 198, TrinoSqlParser.RULE_functionName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2547;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 200, TrinoSqlParser.RULE_columnName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2549;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnNameCreate(): ColumnNameCreateContext {
		let _localctx: ColumnNameCreateContext = new ColumnNameCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, TrinoSqlParser.RULE_columnNameCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2551;
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
		this.enterRule(_localctx, 204, TrinoSqlParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2553;
			this.identifier();
			this.state = 2558;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 330, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2554;
					this.match(TrinoSqlParser.T__3);
					this.state = 2555;
					this.identifier();
					}
					}
				}
				this.state = 2560;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 330, this._ctx);
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
	public grantor(): GrantorContext {
		let _localctx: GrantorContext = new GrantorContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, TrinoSqlParser.RULE_grantor);
		try {
			this.state = 2564;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.KW_ADD:
			case TrinoSqlParser.KW_ADMIN:
			case TrinoSqlParser.KW_AFTER:
			case TrinoSqlParser.KW_ALL:
			case TrinoSqlParser.KW_ANALYZE:
			case TrinoSqlParser.KW_ANY:
			case TrinoSqlParser.KW_ARRAY:
			case TrinoSqlParser.KW_ASC:
			case TrinoSqlParser.KW_AT:
			case TrinoSqlParser.KW_AUTHORIZATION:
			case TrinoSqlParser.KW_BERNOULLI:
			case TrinoSqlParser.KW_CALL:
			case TrinoSqlParser.KW_CASCADE:
			case TrinoSqlParser.KW_CATALOGS:
			case TrinoSqlParser.KW_COLUMN:
			case TrinoSqlParser.KW_COLUMNS:
			case TrinoSqlParser.KW_COMMENT:
			case TrinoSqlParser.KW_COMMIT:
			case TrinoSqlParser.KW_COMMITTED:
			case TrinoSqlParser.KW_CURRENT:
			case TrinoSqlParser.KW_DATA:
			case TrinoSqlParser.KW_DATE:
			case TrinoSqlParser.KW_DAY:
			case TrinoSqlParser.KW_DEFAULT:
			case TrinoSqlParser.KW_DEFINER:
			case TrinoSqlParser.KW_DESC:
			case TrinoSqlParser.KW_DEFINE:
			case TrinoSqlParser.KW_DISTRIBUTED:
			case TrinoSqlParser.KW_DOUBLE:
			case TrinoSqlParser.KW_EMPTY:
			case TrinoSqlParser.KW_EXCLUDING:
			case TrinoSqlParser.KW_EXPLAIN:
			case TrinoSqlParser.KW_FETCH:
			case TrinoSqlParser.KW_FILTER:
			case TrinoSqlParser.KW_FINAL:
			case TrinoSqlParser.KW_FIRST:
			case TrinoSqlParser.KW_FOLLOWING:
			case TrinoSqlParser.KW_FORMAT:
			case TrinoSqlParser.KW_FUNCTIONS:
			case TrinoSqlParser.KW_GRANT:
			case TrinoSqlParser.KW_GRANTED:
			case TrinoSqlParser.KW_GRANTS:
			case TrinoSqlParser.KW_DENY:
			case TrinoSqlParser.KW_GRAPHVIZ:
			case TrinoSqlParser.KW_GROUPS:
			case TrinoSqlParser.KW_HOUR:
			case TrinoSqlParser.KW_IF:
			case TrinoSqlParser.KW_IGNORE:
			case TrinoSqlParser.KW_INCLUDING:
			case TrinoSqlParser.KW_INITIAL:
			case TrinoSqlParser.KW_INPUT:
			case TrinoSqlParser.KW_INTERVAL:
			case TrinoSqlParser.KW_INVOKER:
			case TrinoSqlParser.KW_IO:
			case TrinoSqlParser.KW_ISOLATION:
			case TrinoSqlParser.KW_JSON:
			case TrinoSqlParser.KW_LAST:
			case TrinoSqlParser.KW_LATERAL:
			case TrinoSqlParser.KW_LEVEL:
			case TrinoSqlParser.KW_LIMIT:
			case TrinoSqlParser.KW_LOCAL:
			case TrinoSqlParser.KW_LOGICAL:
			case TrinoSqlParser.KW_MAP:
			case TrinoSqlParser.KW_MATCH:
			case TrinoSqlParser.KW_MATCHED:
			case TrinoSqlParser.KW_MATCHES:
			case TrinoSqlParser.KW_MATCH_RECOGNIZE:
			case TrinoSqlParser.KW_MATERIALIZED:
			case TrinoSqlParser.KW_MEASURES:
			case TrinoSqlParser.KW_MERGE:
			case TrinoSqlParser.KW_MINUTE:
			case TrinoSqlParser.KW_MONTH:
			case TrinoSqlParser.KW_NEXT:
			case TrinoSqlParser.KW_NFC:
			case TrinoSqlParser.KW_NFD:
			case TrinoSqlParser.KW_NFKC:
			case TrinoSqlParser.KW_NFKD:
			case TrinoSqlParser.KW_NO:
			case TrinoSqlParser.KW_NONE:
			case TrinoSqlParser.KW_NULLIF:
			case TrinoSqlParser.KW_NULLS:
			case TrinoSqlParser.KW_OFFSET:
			case TrinoSqlParser.KW_OMIT:
			case TrinoSqlParser.KW_ONE:
			case TrinoSqlParser.KW_ONLY:
			case TrinoSqlParser.KW_OPTION:
			case TrinoSqlParser.KW_ORDINALITY:
			case TrinoSqlParser.KW_OUTPUT:
			case TrinoSqlParser.KW_OVER:
			case TrinoSqlParser.KW_PARTITION:
			case TrinoSqlParser.KW_PARTITIONS:
			case TrinoSqlParser.KW_PAST:
			case TrinoSqlParser.KW_PATH:
			case TrinoSqlParser.KW_PATTERN:
			case TrinoSqlParser.KW_PER:
			case TrinoSqlParser.KW_PERMUTE:
			case TrinoSqlParser.KW_POSITION:
			case TrinoSqlParser.KW_PRECEDING:
			case TrinoSqlParser.KW_PRECISION:
			case TrinoSqlParser.KW_PRIVILEGES:
			case TrinoSqlParser.KW_PROPERTIES:
			case TrinoSqlParser.KW_RANGE:
			case TrinoSqlParser.KW_READ:
			case TrinoSqlParser.KW_REFRESH:
			case TrinoSqlParser.KW_RENAME:
			case TrinoSqlParser.KW_REPEATABLE:
			case TrinoSqlParser.KW_REPLACE:
			case TrinoSqlParser.KW_RESET:
			case TrinoSqlParser.KW_RESPECT:
			case TrinoSqlParser.KW_RESTRICT:
			case TrinoSqlParser.KW_REVOKE:
			case TrinoSqlParser.KW_ROLE:
			case TrinoSqlParser.KW_ROLES:
			case TrinoSqlParser.KW_ROLLBACK:
			case TrinoSqlParser.KW_ROW:
			case TrinoSqlParser.KW_ROWS:
			case TrinoSqlParser.KW_RUNNING:
			case TrinoSqlParser.KW_SCHEMA:
			case TrinoSqlParser.KW_SCHEMAS:
			case TrinoSqlParser.KW_SECOND:
			case TrinoSqlParser.KW_SECURITY:
			case TrinoSqlParser.KW_SEEK:
			case TrinoSqlParser.KW_SERIALIZABLE:
			case TrinoSqlParser.KW_SESSION:
			case TrinoSqlParser.KW_SET:
			case TrinoSqlParser.KW_SETS:
			case TrinoSqlParser.KW_SHOW:
			case TrinoSqlParser.KW_SOME:
			case TrinoSqlParser.KW_START:
			case TrinoSqlParser.KW_STATS:
			case TrinoSqlParser.KW_SUBSET:
			case TrinoSqlParser.KW_SUBSTRING:
			case TrinoSqlParser.KW_SYSTEM:
			case TrinoSqlParser.KW_TABLES:
			case TrinoSqlParser.KW_TABLESAMPLE:
			case TrinoSqlParser.KW_TEXT:
			case TrinoSqlParser.KW_TIES:
			case TrinoSqlParser.KW_TIME:
			case TrinoSqlParser.KW_TIMESTAMP:
			case TrinoSqlParser.KW_TO:
			case TrinoSqlParser.KW_TRANSACTION:
			case TrinoSqlParser.KW_TRUNCATE:
			case TrinoSqlParser.KW_TRY_CAST:
			case TrinoSqlParser.KW_TYPE:
			case TrinoSqlParser.KW_UNBOUNDED:
			case TrinoSqlParser.KW_UNCOMMITTED:
			case TrinoSqlParser.KW_UNMATCHED:
			case TrinoSqlParser.KW_UPDATE:
			case TrinoSqlParser.KW_USE:
			case TrinoSqlParser.KW_USER:
			case TrinoSqlParser.KW_VALIDATE:
			case TrinoSqlParser.KW_VERBOSE:
			case TrinoSqlParser.KW_VIEW:
			case TrinoSqlParser.KW_WINDOW:
			case TrinoSqlParser.KW_WITHOUT:
			case TrinoSqlParser.KW_WORK:
			case TrinoSqlParser.KW_WRITE:
			case TrinoSqlParser.KW_YEAR:
			case TrinoSqlParser.KW_ZONE:
			case TrinoSqlParser.IDENTIFIER:
			case TrinoSqlParser.DIGIT_IDENTIFIER:
			case TrinoSqlParser.QUOTED_IDENTIFIER:
			case TrinoSqlParser.BACKQUOTED_IDENTIFIER:
				_localctx = new SpecifiedPrincipalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2561;
				this.principal();
				}
				break;
			case TrinoSqlParser.KW_CURRENT_USER:
				_localctx = new CurrentUserGrantorContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2562;
				this.match(TrinoSqlParser.KW_CURRENT_USER);
				}
				break;
			case TrinoSqlParser.KW_CURRENT_ROLE:
				_localctx = new CurrentRoleGrantorContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2563;
				this.match(TrinoSqlParser.KW_CURRENT_ROLE);
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
	public principal(): PrincipalContext {
		let _localctx: PrincipalContext = new PrincipalContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, TrinoSqlParser.RULE_principal);
		try {
			this.state = 2571;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 332, this._ctx) ) {
			case 1:
				_localctx = new UnspecifiedPrincipalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2566;
				this.identifier();
				}
				break;

			case 2:
				_localctx = new UserPrincipalContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2567;
				this.match(TrinoSqlParser.KW_USER);
				this.state = 2568;
				this.identifier();
				}
				break;

			case 3:
				_localctx = new RolePrincipalContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2569;
				this.match(TrinoSqlParser.KW_ROLE);
				this.state = 2570;
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
	public roles(): RolesContext {
		let _localctx: RolesContext = new RolesContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, TrinoSqlParser.RULE_roles);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2573;
			this.identifier();
			this.state = 2578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TrinoSqlParser.T__2) {
				{
				{
				this.state = 2574;
				this.match(TrinoSqlParser.T__2);
				this.state = 2575;
				this.identifier();
				}
				}
				this.state = 2580;
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
		this.enterRule(_localctx, 212, TrinoSqlParser.RULE_identifier);
		try {
			this.state = 2586;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.IDENTIFIER:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2581;
				this.match(TrinoSqlParser.IDENTIFIER);
				}
				break;
			case TrinoSqlParser.QUOTED_IDENTIFIER:
				_localctx = new QuotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2582;
				this.match(TrinoSqlParser.QUOTED_IDENTIFIER);
				}
				break;
			case TrinoSqlParser.KW_ADD:
			case TrinoSqlParser.KW_ADMIN:
			case TrinoSqlParser.KW_AFTER:
			case TrinoSqlParser.KW_ALL:
			case TrinoSqlParser.KW_ANALYZE:
			case TrinoSqlParser.KW_ANY:
			case TrinoSqlParser.KW_ARRAY:
			case TrinoSqlParser.KW_ASC:
			case TrinoSqlParser.KW_AT:
			case TrinoSqlParser.KW_AUTHORIZATION:
			case TrinoSqlParser.KW_BERNOULLI:
			case TrinoSqlParser.KW_CALL:
			case TrinoSqlParser.KW_CASCADE:
			case TrinoSqlParser.KW_CATALOGS:
			case TrinoSqlParser.KW_COLUMN:
			case TrinoSqlParser.KW_COLUMNS:
			case TrinoSqlParser.KW_COMMENT:
			case TrinoSqlParser.KW_COMMIT:
			case TrinoSqlParser.KW_COMMITTED:
			case TrinoSqlParser.KW_CURRENT:
			case TrinoSqlParser.KW_DATA:
			case TrinoSqlParser.KW_DATE:
			case TrinoSqlParser.KW_DAY:
			case TrinoSqlParser.KW_DEFAULT:
			case TrinoSqlParser.KW_DEFINER:
			case TrinoSqlParser.KW_DESC:
			case TrinoSqlParser.KW_DEFINE:
			case TrinoSqlParser.KW_DISTRIBUTED:
			case TrinoSqlParser.KW_DOUBLE:
			case TrinoSqlParser.KW_EMPTY:
			case TrinoSqlParser.KW_EXCLUDING:
			case TrinoSqlParser.KW_EXPLAIN:
			case TrinoSqlParser.KW_FETCH:
			case TrinoSqlParser.KW_FILTER:
			case TrinoSqlParser.KW_FINAL:
			case TrinoSqlParser.KW_FIRST:
			case TrinoSqlParser.KW_FOLLOWING:
			case TrinoSqlParser.KW_FORMAT:
			case TrinoSqlParser.KW_FUNCTIONS:
			case TrinoSqlParser.KW_GRANT:
			case TrinoSqlParser.KW_GRANTED:
			case TrinoSqlParser.KW_GRANTS:
			case TrinoSqlParser.KW_DENY:
			case TrinoSqlParser.KW_GRAPHVIZ:
			case TrinoSqlParser.KW_GROUPS:
			case TrinoSqlParser.KW_HOUR:
			case TrinoSqlParser.KW_IF:
			case TrinoSqlParser.KW_IGNORE:
			case TrinoSqlParser.KW_INCLUDING:
			case TrinoSqlParser.KW_INITIAL:
			case TrinoSqlParser.KW_INPUT:
			case TrinoSqlParser.KW_INTERVAL:
			case TrinoSqlParser.KW_INVOKER:
			case TrinoSqlParser.KW_IO:
			case TrinoSqlParser.KW_ISOLATION:
			case TrinoSqlParser.KW_JSON:
			case TrinoSqlParser.KW_LAST:
			case TrinoSqlParser.KW_LATERAL:
			case TrinoSqlParser.KW_LEVEL:
			case TrinoSqlParser.KW_LIMIT:
			case TrinoSqlParser.KW_LOCAL:
			case TrinoSqlParser.KW_LOGICAL:
			case TrinoSqlParser.KW_MAP:
			case TrinoSqlParser.KW_MATCH:
			case TrinoSqlParser.KW_MATCHED:
			case TrinoSqlParser.KW_MATCHES:
			case TrinoSqlParser.KW_MATCH_RECOGNIZE:
			case TrinoSqlParser.KW_MATERIALIZED:
			case TrinoSqlParser.KW_MEASURES:
			case TrinoSqlParser.KW_MERGE:
			case TrinoSqlParser.KW_MINUTE:
			case TrinoSqlParser.KW_MONTH:
			case TrinoSqlParser.KW_NEXT:
			case TrinoSqlParser.KW_NFC:
			case TrinoSqlParser.KW_NFD:
			case TrinoSqlParser.KW_NFKC:
			case TrinoSqlParser.KW_NFKD:
			case TrinoSqlParser.KW_NO:
			case TrinoSqlParser.KW_NONE:
			case TrinoSqlParser.KW_NULLIF:
			case TrinoSqlParser.KW_NULLS:
			case TrinoSqlParser.KW_OFFSET:
			case TrinoSqlParser.KW_OMIT:
			case TrinoSqlParser.KW_ONE:
			case TrinoSqlParser.KW_ONLY:
			case TrinoSqlParser.KW_OPTION:
			case TrinoSqlParser.KW_ORDINALITY:
			case TrinoSqlParser.KW_OUTPUT:
			case TrinoSqlParser.KW_OVER:
			case TrinoSqlParser.KW_PARTITION:
			case TrinoSqlParser.KW_PARTITIONS:
			case TrinoSqlParser.KW_PAST:
			case TrinoSqlParser.KW_PATH:
			case TrinoSqlParser.KW_PATTERN:
			case TrinoSqlParser.KW_PER:
			case TrinoSqlParser.KW_PERMUTE:
			case TrinoSqlParser.KW_POSITION:
			case TrinoSqlParser.KW_PRECEDING:
			case TrinoSqlParser.KW_PRECISION:
			case TrinoSqlParser.KW_PRIVILEGES:
			case TrinoSqlParser.KW_PROPERTIES:
			case TrinoSqlParser.KW_RANGE:
			case TrinoSqlParser.KW_READ:
			case TrinoSqlParser.KW_REFRESH:
			case TrinoSqlParser.KW_RENAME:
			case TrinoSqlParser.KW_REPEATABLE:
			case TrinoSqlParser.KW_REPLACE:
			case TrinoSqlParser.KW_RESET:
			case TrinoSqlParser.KW_RESPECT:
			case TrinoSqlParser.KW_RESTRICT:
			case TrinoSqlParser.KW_REVOKE:
			case TrinoSqlParser.KW_ROLE:
			case TrinoSqlParser.KW_ROLES:
			case TrinoSqlParser.KW_ROLLBACK:
			case TrinoSqlParser.KW_ROW:
			case TrinoSqlParser.KW_ROWS:
			case TrinoSqlParser.KW_RUNNING:
			case TrinoSqlParser.KW_SCHEMA:
			case TrinoSqlParser.KW_SCHEMAS:
			case TrinoSqlParser.KW_SECOND:
			case TrinoSqlParser.KW_SECURITY:
			case TrinoSqlParser.KW_SEEK:
			case TrinoSqlParser.KW_SERIALIZABLE:
			case TrinoSqlParser.KW_SESSION:
			case TrinoSqlParser.KW_SET:
			case TrinoSqlParser.KW_SETS:
			case TrinoSqlParser.KW_SHOW:
			case TrinoSqlParser.KW_SOME:
			case TrinoSqlParser.KW_START:
			case TrinoSqlParser.KW_STATS:
			case TrinoSqlParser.KW_SUBSET:
			case TrinoSqlParser.KW_SUBSTRING:
			case TrinoSqlParser.KW_SYSTEM:
			case TrinoSqlParser.KW_TABLES:
			case TrinoSqlParser.KW_TABLESAMPLE:
			case TrinoSqlParser.KW_TEXT:
			case TrinoSqlParser.KW_TIES:
			case TrinoSqlParser.KW_TIME:
			case TrinoSqlParser.KW_TIMESTAMP:
			case TrinoSqlParser.KW_TO:
			case TrinoSqlParser.KW_TRANSACTION:
			case TrinoSqlParser.KW_TRUNCATE:
			case TrinoSqlParser.KW_TRY_CAST:
			case TrinoSqlParser.KW_TYPE:
			case TrinoSqlParser.KW_UNBOUNDED:
			case TrinoSqlParser.KW_UNCOMMITTED:
			case TrinoSqlParser.KW_UNMATCHED:
			case TrinoSqlParser.KW_UPDATE:
			case TrinoSqlParser.KW_USE:
			case TrinoSqlParser.KW_USER:
			case TrinoSqlParser.KW_VALIDATE:
			case TrinoSqlParser.KW_VERBOSE:
			case TrinoSqlParser.KW_VIEW:
			case TrinoSqlParser.KW_WINDOW:
			case TrinoSqlParser.KW_WITHOUT:
			case TrinoSqlParser.KW_WORK:
			case TrinoSqlParser.KW_WRITE:
			case TrinoSqlParser.KW_YEAR:
			case TrinoSqlParser.KW_ZONE:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2583;
				this.nonReserved();
				}
				break;
			case TrinoSqlParser.BACKQUOTED_IDENTIFIER:
				_localctx = new BackQuotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2584;
				this.match(TrinoSqlParser.BACKQUOTED_IDENTIFIER);
				}
				break;
			case TrinoSqlParser.DIGIT_IDENTIFIER:
				_localctx = new DigitIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2585;
				this.match(TrinoSqlParser.DIGIT_IDENTIFIER);
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, TrinoSqlParser.RULE_number);
		let _la: number;
		try {
			this.state = 2600;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 338, this._ctx) ) {
			case 1:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2589;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.MINUS) {
					{
					this.state = 2588;
					this.match(TrinoSqlParser.MINUS);
					}
				}

				this.state = 2591;
				this.match(TrinoSqlParser.DECIMAL_VALUE);
				}
				break;

			case 2:
				_localctx = new DoubleLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.MINUS) {
					{
					this.state = 2592;
					this.match(TrinoSqlParser.MINUS);
					}
				}

				this.state = 2595;
				this.match(TrinoSqlParser.DOUBLE_VALUE);
				}
				break;

			case 3:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.MINUS) {
					{
					this.state = 2596;
					this.match(TrinoSqlParser.MINUS);
					}
				}

				this.state = 2599;
				this.match(TrinoSqlParser.INTEGER_VALUE);
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
	public nonReserved(): NonReservedContext {
		let _localctx: NonReservedContext = new NonReservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, TrinoSqlParser.RULE_nonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2602;
			_la = this._input.LA(1);
			if (!(((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (TrinoSqlParser.KW_ADD - 17)) | (1 << (TrinoSqlParser.KW_ADMIN - 17)) | (1 << (TrinoSqlParser.KW_AFTER - 17)) | (1 << (TrinoSqlParser.KW_ALL - 17)) | (1 << (TrinoSqlParser.KW_ANALYZE - 17)) | (1 << (TrinoSqlParser.KW_ANY - 17)) | (1 << (TrinoSqlParser.KW_ARRAY - 17)) | (1 << (TrinoSqlParser.KW_ASC - 17)) | (1 << (TrinoSqlParser.KW_AT - 17)) | (1 << (TrinoSqlParser.KW_AUTHORIZATION - 17)) | (1 << (TrinoSqlParser.KW_BERNOULLI - 17)) | (1 << (TrinoSqlParser.KW_CALL - 17)) | (1 << (TrinoSqlParser.KW_CASCADE - 17)) | (1 << (TrinoSqlParser.KW_CATALOGS - 17)) | (1 << (TrinoSqlParser.KW_COLUMN - 17)) | (1 << (TrinoSqlParser.KW_COLUMNS - 17)) | (1 << (TrinoSqlParser.KW_COMMENT - 17)) | (1 << (TrinoSqlParser.KW_COMMIT - 17)) | (1 << (TrinoSqlParser.KW_COMMITTED - 17)) | (1 << (TrinoSqlParser.KW_CURRENT - 17)))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (TrinoSqlParser.KW_DATA - 56)) | (1 << (TrinoSqlParser.KW_DATE - 56)) | (1 << (TrinoSqlParser.KW_DAY - 56)) | (1 << (TrinoSqlParser.KW_DEFAULT - 56)) | (1 << (TrinoSqlParser.KW_DEFINER - 56)) | (1 << (TrinoSqlParser.KW_DESC - 56)) | (1 << (TrinoSqlParser.KW_DEFINE - 56)) | (1 << (TrinoSqlParser.KW_DISTRIBUTED - 56)) | (1 << (TrinoSqlParser.KW_DOUBLE - 56)) | (1 << (TrinoSqlParser.KW_EMPTY - 56)) | (1 << (TrinoSqlParser.KW_EXCLUDING - 56)) | (1 << (TrinoSqlParser.KW_EXPLAIN - 56)) | (1 << (TrinoSqlParser.KW_FETCH - 56)) | (1 << (TrinoSqlParser.KW_FILTER - 56)) | (1 << (TrinoSqlParser.KW_FINAL - 56)) | (1 << (TrinoSqlParser.KW_FIRST - 56)) | (1 << (TrinoSqlParser.KW_FOLLOWING - 56)) | (1 << (TrinoSqlParser.KW_FORMAT - 56)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (TrinoSqlParser.KW_FUNCTIONS - 90)) | (1 << (TrinoSqlParser.KW_GRANT - 90)) | (1 << (TrinoSqlParser.KW_GRANTED - 90)) | (1 << (TrinoSqlParser.KW_GRANTS - 90)) | (1 << (TrinoSqlParser.KW_DENY - 90)) | (1 << (TrinoSqlParser.KW_GRAPHVIZ - 90)) | (1 << (TrinoSqlParser.KW_GROUPS - 90)) | (1 << (TrinoSqlParser.KW_HOUR - 90)) | (1 << (TrinoSqlParser.KW_IF - 90)) | (1 << (TrinoSqlParser.KW_IGNORE - 90)) | (1 << (TrinoSqlParser.KW_INCLUDING - 90)) | (1 << (TrinoSqlParser.KW_INITIAL - 90)) | (1 << (TrinoSqlParser.KW_INPUT - 90)) | (1 << (TrinoSqlParser.KW_INTERVAL - 90)) | (1 << (TrinoSqlParser.KW_INVOKER - 90)) | (1 << (TrinoSqlParser.KW_IO - 90)) | (1 << (TrinoSqlParser.KW_ISOLATION - 90)) | (1 << (TrinoSqlParser.KW_JSON - 90)) | (1 << (TrinoSqlParser.KW_LAST - 90)) | (1 << (TrinoSqlParser.KW_LATERAL - 90)) | (1 << (TrinoSqlParser.KW_LEVEL - 90)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TrinoSqlParser.KW_LIMIT - 123)) | (1 << (TrinoSqlParser.KW_LOCAL - 123)) | (1 << (TrinoSqlParser.KW_LOGICAL - 123)) | (1 << (TrinoSqlParser.KW_MAP - 123)) | (1 << (TrinoSqlParser.KW_MATCH - 123)) | (1 << (TrinoSqlParser.KW_MATCHED - 123)) | (1 << (TrinoSqlParser.KW_MATCHES - 123)) | (1 << (TrinoSqlParser.KW_MATCH_RECOGNIZE - 123)) | (1 << (TrinoSqlParser.KW_MATERIALIZED - 123)) | (1 << (TrinoSqlParser.KW_MEASURES - 123)) | (1 << (TrinoSqlParser.KW_MERGE - 123)) | (1 << (TrinoSqlParser.KW_MINUTE - 123)) | (1 << (TrinoSqlParser.KW_MONTH - 123)) | (1 << (TrinoSqlParser.KW_NEXT - 123)) | (1 << (TrinoSqlParser.KW_NFC - 123)) | (1 << (TrinoSqlParser.KW_NFD - 123)) | (1 << (TrinoSqlParser.KW_NFKC - 123)) | (1 << (TrinoSqlParser.KW_NFKD - 123)) | (1 << (TrinoSqlParser.KW_NO - 123)) | (1 << (TrinoSqlParser.KW_NONE - 123)) | (1 << (TrinoSqlParser.KW_NULLIF - 123)) | (1 << (TrinoSqlParser.KW_NULLS - 123)) | (1 << (TrinoSqlParser.KW_OFFSET - 123)) | (1 << (TrinoSqlParser.KW_OMIT - 123)) | (1 << (TrinoSqlParser.KW_ONE - 123)))) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (TrinoSqlParser.KW_ONLY - 155)) | (1 << (TrinoSqlParser.KW_OPTION - 155)) | (1 << (TrinoSqlParser.KW_ORDINALITY - 155)) | (1 << (TrinoSqlParser.KW_OUTPUT - 155)) | (1 << (TrinoSqlParser.KW_OVER - 155)) | (1 << (TrinoSqlParser.KW_PARTITION - 155)) | (1 << (TrinoSqlParser.KW_PARTITIONS - 155)) | (1 << (TrinoSqlParser.KW_PAST - 155)) | (1 << (TrinoSqlParser.KW_PATH - 155)) | (1 << (TrinoSqlParser.KW_PATTERN - 155)) | (1 << (TrinoSqlParser.KW_PER - 155)) | (1 << (TrinoSqlParser.KW_PERMUTE - 155)) | (1 << (TrinoSqlParser.KW_POSITION - 155)) | (1 << (TrinoSqlParser.KW_PRECEDING - 155)) | (1 << (TrinoSqlParser.KW_PRECISION - 155)) | (1 << (TrinoSqlParser.KW_PRIVILEGES - 155)) | (1 << (TrinoSqlParser.KW_PROPERTIES - 155)) | (1 << (TrinoSqlParser.KW_RANGE - 155)) | (1 << (TrinoSqlParser.KW_READ - 155)) | (1 << (TrinoSqlParser.KW_REFRESH - 155)) | (1 << (TrinoSqlParser.KW_RENAME - 155)) | (1 << (TrinoSqlParser.KW_REPEATABLE - 155)) | (1 << (TrinoSqlParser.KW_REPLACE - 155)) | (1 << (TrinoSqlParser.KW_RESET - 155)) | (1 << (TrinoSqlParser.KW_RESPECT - 155)) | (1 << (TrinoSqlParser.KW_RESTRICT - 155)) | (1 << (TrinoSqlParser.KW_REVOKE - 155)))) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & ((1 << (TrinoSqlParser.KW_ROLE - 188)) | (1 << (TrinoSqlParser.KW_ROLES - 188)) | (1 << (TrinoSqlParser.KW_ROLLBACK - 188)) | (1 << (TrinoSqlParser.KW_ROW - 188)) | (1 << (TrinoSqlParser.KW_ROWS - 188)) | (1 << (TrinoSqlParser.KW_RUNNING - 188)) | (1 << (TrinoSqlParser.KW_SCHEMA - 188)) | (1 << (TrinoSqlParser.KW_SCHEMAS - 188)) | (1 << (TrinoSqlParser.KW_SECOND - 188)) | (1 << (TrinoSqlParser.KW_SECURITY - 188)) | (1 << (TrinoSqlParser.KW_SEEK - 188)) | (1 << (TrinoSqlParser.KW_SERIALIZABLE - 188)) | (1 << (TrinoSqlParser.KW_SESSION - 188)) | (1 << (TrinoSqlParser.KW_SET - 188)) | (1 << (TrinoSqlParser.KW_SETS - 188)) | (1 << (TrinoSqlParser.KW_SHOW - 188)) | (1 << (TrinoSqlParser.KW_SOME - 188)) | (1 << (TrinoSqlParser.KW_START - 188)) | (1 << (TrinoSqlParser.KW_STATS - 188)) | (1 << (TrinoSqlParser.KW_SUBSET - 188)) | (1 << (TrinoSqlParser.KW_SUBSTRING - 188)) | (1 << (TrinoSqlParser.KW_SYSTEM - 188)) | (1 << (TrinoSqlParser.KW_TABLES - 188)) | (1 << (TrinoSqlParser.KW_TABLESAMPLE - 188)) | (1 << (TrinoSqlParser.KW_TEXT - 188)) | (1 << (TrinoSqlParser.KW_TIES - 188)) | (1 << (TrinoSqlParser.KW_TIME - 188)) | (1 << (TrinoSqlParser.KW_TIMESTAMP - 188)))) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & ((1 << (TrinoSqlParser.KW_TO - 220)) | (1 << (TrinoSqlParser.KW_TRANSACTION - 220)) | (1 << (TrinoSqlParser.KW_TRUNCATE - 220)) | (1 << (TrinoSqlParser.KW_TRY_CAST - 220)) | (1 << (TrinoSqlParser.KW_TYPE - 220)) | (1 << (TrinoSqlParser.KW_UNBOUNDED - 220)) | (1 << (TrinoSqlParser.KW_UNCOMMITTED - 220)) | (1 << (TrinoSqlParser.KW_UNMATCHED - 220)) | (1 << (TrinoSqlParser.KW_UPDATE - 220)) | (1 << (TrinoSqlParser.KW_USE - 220)) | (1 << (TrinoSqlParser.KW_USER - 220)) | (1 << (TrinoSqlParser.KW_VALIDATE - 220)) | (1 << (TrinoSqlParser.KW_VERBOSE - 220)) | (1 << (TrinoSqlParser.KW_VIEW - 220)) | (1 << (TrinoSqlParser.KW_WINDOW - 220)) | (1 << (TrinoSqlParser.KW_WITHOUT - 220)) | (1 << (TrinoSqlParser.KW_WORK - 220)) | (1 << (TrinoSqlParser.KW_WRITE - 220)) | (1 << (TrinoSqlParser.KW_YEAR - 220)) | (1 << (TrinoSqlParser.KW_ZONE - 220)))) !== 0))) {
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
		case 21:
			return this.queryTerm_sempred(_localctx as QueryTermContext, predIndex);

		case 34:
			return this.relation_sempred(_localctx as RelationContext, predIndex);

		case 52:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 54:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);

		case 55:
			return this.primaryExpression_sempred(_localctx as PrimaryExpressionContext, predIndex);

		case 66:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 76:
			return this.rowPattern_sempred(_localctx as RowPatternContext, predIndex);
		}
		return true;
	}
	private queryTerm_sempred(_localctx: QueryTermContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relation_sempred(_localctx: RelationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
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
	private primaryExpression_sempred(_localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 17);

		case 10:
			return this.precpred(this._ctx, 15);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private rowPattern_sempred(_localctx: RowPatternContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.precpred(this._ctx, 2);

		case 13:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u0117\u0A2F\x04" +
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
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x03\x02\x07\x02\xDE\n\x02" +
		"\f\x02\x0E\x02\xE1\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x04\xEB\n\x04\x03\x05\x03\x05\x05\x05\xEF\n\x05\x03" +
		"\x06\x03\x06\x05\x06\xF3\n\x06\x03\x07\x03\x07\x05\x07\xF7\n\x07\x03\b" +
		"\x03\b\x05\b\xFB\n\b\x03\t\x03\t\x05\t\xFF\n\t\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x05\n\u0109\n\n\x03\n\x03\n\x03\n\x05\n\u010E" +
		"\n\n\x03\n\x03\n\x05\n\u0112\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0118\n" +
		"\n\x03\n\x03\n\x05\n\u011C\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\u0131\n\n\x03\n\x03\n\x05\n\u0135\n\n\x03\n\x03\n\x05\n\u0139" +
		"\n\n\x03\n\x03\n\x05\n\u013D\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05" +
		"\n\u0145\n\n\x03\n\x03\n\x05\n\u0149\n\n\x03\n\x05\n\u014C\n\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x05\n\u0153\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07" +
		"\n\u015A\n\n\f\n\x0E\n\u015D\v\n\x03\n\x03\n\x03\n\x05\n\u0162\n\n\x03" +
		"\n\x03\n\x05\n\u0166\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u016C\n\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x05\n\u0173\n\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x05\n\u017C\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x05\n\u0185\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x05\n\u0193\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x05\n\u019C\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u01A2\n\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x05\n\u01A9\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\u01B3\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u01BA" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u01C2\n\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x05\n\u01CA\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u01E5\n\n\f\n\x0E\n" +
		"\u01E8\v\n\x05\n\u01EA\n\n\x03\n\x05\n\u01ED\n\n\x03\n\x03\n\x05\n\u01F1" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u01F7\n\n\x03\n\x03\n\x03\n\x05\n\u01FC" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0203\n\n\x03\n\x03\n\x03\n\x05" +
		"\n\u0208\n\n\x03\n\x03\n\x05\n\u020C\n\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x05\n\u0214\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u021A\n\n\x03\n\x03" +
		"\n\x05\n\u021E\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x05\n\u022C\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\u0234\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0247\n\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u025E\n\n\f\n" +
		"\x0E\n\u0261\v\n\x05\n\u0263\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x05\n\u026D\n\n\x03\n\x03\n\x05\n\u0271\n\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u027C\n\n\f\n\x0E\n\u027F\v" +
		"\n\x03\n\x03\n\x03\n\x05\n\u0284\n\n\x03\n\x03\n\x03\n\x05\n\u0289\n\n" +
		"\x03\n\x03\n\x05\n\u028D\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0293\n\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x07\n\u029A\n\n\f\n\x0E\n\u029D\v\n\x03\n\x03" +
		"\n\x03\n\x05\n\u02A2\n\n\x03\n\x03\n\x05\n\u02A6\n\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x05\n\u02AD\n\n\x03\n\x03\n\x05\n\u02B1\n\n\x03\n\x03\n\x03" +
		"\n\x03\n\x07\n\u02B7\n\n\f\n\x0E\n\u02BA\v\n\x03\n\x03\n\x05\n\u02BE\n" +
		"\n\x03\n\x03\n\x05\n\u02C2\n\n\x03\n\x03\n\x05\n\u02C6\n\n\x03\n\x05\n" +
		"\u02C9\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u02D0\n\n\x03\n\x03\n\x03" +
		"\n\x03\n\x07\n\u02D6\n\n\f\n\x0E\n\u02D9\v\n\x03\n\x03\n\x05\n\u02DD\n" +
		"\n\x03\n\x03\n\x05\n\u02E1\n\n\x03\n\x03\n\x05\n\u02E5\n\n\x03\n\x05\n" +
		"\u02E8\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u02F1\n\n\x03" +
		"\n\x03\n\x03\n\x07\n\u02F6\n\n\f\n\x0E\n\u02F9\v\n\x03\n\x03\n\x05\n\u02FD" +
		"\n\n\x03\n\x03\n\x05\n\u0301\n\n\x03\n\x03\n\x05\n\u0305\n\n\x03\n\x05" +
		"\n\u0308\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0310\n\n\x03\n" +
		"\x05\n\u0313\n\n\x03\n\x03\n\x05\n\u0317\n\n\x03\n\x05\n\u031A\n\n\x03" +
		"\n\x03\n\x03\n\x03\n\x07\n\u0320\n\n\f\n\x0E\n\u0323\v\n\x03\n\x03\n\x05" +
		"\n\u0327\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\u033F\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0345\n\n\x05\n\u0347" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u034D\n\n\x03\n\x03\n\x03\n\x03\n\x05" +
		"\n\u0353\n\n\x05\n\u0355\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n" +
		"\u035D\n\n\x05\n\u035F\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0365\n\n\x03" +
		"\n\x03\n\x03\n\x03\n\x05\n\u036B\n\n\x05\n\u036D\n\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u037C" +
		"\n\n\x03\n\x03\n\x03\n\x05\n\u0381\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05" +
		"\n\u0388\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\u0394\n\n\x05\n\u0396\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x05\n\u039E\n\n\x05\n\u03A0\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u03B0\n\n\f\n\x0E\n" +
		"\u03B3\v\n\x05\n\u03B5\n\n\x03\n\x03\n\x05\n\u03B9\n\n\x03\n\x03\n\x05" +
		"\n\u03BD\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x07\n\u03CD\n\n\f\n\x0E\n\u03D0\v\n\x05\n\u03D2" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x05\n\u03E2\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x07\n\u03EA\n\n\f\n\x0E\n\u03ED\v\n\x03\n\x03\n\x05\n\u03F1\n\n\x03\n" +
		"\x03\n\x03\n\x03\n\x05\n\u03F7\n\n\x03\n\x05\n\u03FA\n\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x06\n\u0401\n\n\r\n\x0E\n\u0402\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u040F\n\n\x03\v\x05\v\u0412" +
		"\n\v\x03\v\x03\v\x03\f\x03\f\x05\f\u0418\n\f\x03\f\x03\f\x03\f\x07\f\u041D" +
		"\n\f\f\f\x0E\f\u0420\v\f\x03\r\x03\r\x05\r\u0424\n\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u042A\n\x0E\x03\x0E\x03\x0E\x05\x0E\u042E\n\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u0432\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\u0438\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07" +
		"\x11\u0441\n\x11\f\x11\x0E\x11\u0444\v\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x05\x13\u044C\n\x13\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x07\x14\u0454\n\x14\f\x14\x0E\x14\u0457\v\x14\x05\x14" +
		"\u0459\n\x14\x03\x14\x03\x14\x03\x14\x05\x14\u045E\n\x14\x05\x14\u0460" +
		"\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0467\n\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x05\x14\u046D\n\x14\x05\x14\u046F\n\x14\x03" +
		"\x15\x03\x15\x05\x15\u0473\n\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x05\x17\u047D\n\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x05\x17\u0483\n\x17\x03\x17\x07\x17\u0486\n\x17\f\x17\x0E\x17\u0489" +
		"\v\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18" +
		"\u0492\n\x18\f\x18\x0E\x18\u0495\v\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x05\x18\u049B\n\x18\x03\x19\x03\x19\x05\x19\u049F\n\x19\x03\x19\x05\x19" +
		"\u04A2\n\x19\x03\x19\x03\x19\x05\x19\u04A6\n\x19\x03\x1A\x03\x1A\x05\x1A" +
		"\u04AA\n\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u04AF\n\x1A\f\x1A\x0E\x1A" +
		"\u04B2\v\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u04B8\n\x1A\f\x1A" +
		"\x0E\x1A\u04BB\v\x1A\x05\x1A\u04BD\n\x1A\x03\x1A\x03\x1A\x05\x1A\u04C1" +
		"\n\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u04C6\n\x1A\x03\x1A\x03\x1A\x05" +
		"\x1A\u04CA\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u04D0\n\x1A\f" +
		"\x1A\x0E\x1A\u04D3\v\x1A\x05\x1A\u04D5\n\x1A\x03\x1B\x05\x1B\u04D8\n\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u04DD\n\x1B\f\x1B\x0E\x1B\u04E0\v\x1B" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u04E8\n\x1C\f" +
		"\x1C\x0E\x1C\u04EB\v\x1C\x05\x1C\u04ED\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x07\x1C\u04F5\n\x1C\f\x1C\x0E\x1C\u04F8\v\x1C\x05" +
		"\x1C\u04FA\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x07\x1C\u0503\n\x1C\f\x1C\x0E\x1C\u0506\v\x1C\x03\x1C\x03\x1C\x05\x1C" +
		"\u050A\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0510\n\x1D\f\x1D" +
		"\x0E\x1D\u0513\v\x1D\x05\x1D\u0515\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0519" +
		"\n\x1D\x03\x1E\x03\x1E\x05\x1E\u051D\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03 \x05 \u0526\n \x03 \x03 \x03 \x03 \x03 \x07 " +
		"\u052D\n \f \x0E \u0530\v \x05 \u0532\n \x03 \x03 \x03 \x03 \x03 \x07" +
		" \u0539\n \f \x0E \u053C\v \x05 \u053E\n \x03 \x05 \u0541\n \x03!\x03" +
		"!\x05!\u0545\n!\x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03#\x03#\x05#\u0550" +
		"\n#\x03#\x05#\u0553\n#\x03#\x05#\u0556\n#\x03#\x03#\x03#\x03#\x03#\x05" +
		"#\u055D\n#\x03#\x05#\u0560\n#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$" +
		"\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u0573\n$\x07$\u0575" +
		"\n$\f$\x0E$\u0578\v$\x03%\x05%\u057B\n%\x03%\x03%\x05%\u057F\n%\x03%\x03" +
		"%\x05%\u0583\n%\x03%\x03%\x05%\u0587\n%\x05%\u0589\n%\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x07&\u0592\n&\f&\x0E&\u0595\v&\x03&\x03&\x05&\u0599\n" +
		"&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u05A2\n\'\x03(\x03(" +
		"\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x07)\u05AE\n)\f)\x0E)\u05B1\v" +
		")\x05)\u05B3\n)\x03)\x03)\x03)\x03)\x03)\x07)\u05BA\n)\f)\x0E)\u05BD\v" +
		")\x05)\u05BF\n)\x03)\x03)\x03)\x03)\x07)\u05C5\n)\f)\x0E)\u05C8\v)\x05" +
		")\u05CA\n)\x03)\x05)\u05CD\n)\x03)\x03)\x03)\x05)\u05D2\n)\x03)\x05)\u05D5" +
		"\n)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x07)\u05DF\n)\f)\x0E)\u05E2" +
		"\v)\x05)\u05E4\n)\x03)\x03)\x03)\x03)\x07)\u05EA\n)\f)\x0E)\u05ED\v)\x03" +
		")\x03)\x05)\u05F1\n)\x03)\x03)\x05)\u05F5\n)\x05)\u05F7\n)\x05)\u05F9" +
		"\n)\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05" +
		"+\u0608\n+\x05+\u060A\n+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03," +
		"\x05,\u0615\n,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-" +
		"\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u062A\n-\x03.\x03.\x03." +
		"\x03.\x03.\x03.\x07.\u0632\n.\f.\x0E.\u0635\v.\x03.\x03.\x03/\x03/\x03" +
		"/\x03/\x030\x030\x050\u063F\n0\x030\x030\x050\u0643\n0\x050\u0645\n0\x03" +
		"1\x031\x031\x031\x071\u064B\n1\f1\x0E1\u064E\v1\x031\x031\x032\x032\x03" +
		"2\x032\x072\u0656\n2\f2\x0E2\u0659\v2\x032\x032\x033\x033\x033\x033\x07" +
		"3\u0661\n3\f3\x0E3\u0664\v3\x033\x033\x034\x034\x034\x034\x034\x034\x03" +
		"4\x034\x034\x034\x074\u0672\n4\f4\x0E4\u0675\v4\x034\x034\x034\x054\u067A" +
		"\n4\x034\x034\x034\x034\x034\x034\x034\x034\x034\x054\u0685\n4\x035\x03" +
		"5\x036\x036\x036\x056\u068C\n6\x036\x036\x056\u0690\n6\x036\x036\x036" +
		"\x036\x036\x036\x076\u0698\n6\f6\x0E6\u069B\v6\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x057\u06A7\n7\x037\x037\x037\x037\x037\x03" +
		"7\x057\u06AF\n7\x037\x037\x037\x037\x037\x077\u06B6\n7\f7\x0E7\u06B9\v" +
		"7\x037\x037\x037\x057\u06BE\n7\x037\x037\x037\x037\x037\x037\x057\u06C6" +
		"\n7\x037\x037\x037\x037\x057\u06CC\n7\x037\x037\x057\u06D0\n7\x037\x03" +
		"7\x037\x057\u06D5\n7\x037\x037\x037\x057\u06DA\n7\x038\x038\x038\x038" +
		"\x058\u06E0\n8\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038" +
		"\x038\x078\u06EE\n8\f8\x0E8\u06F1\v8\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x069\u070C\n9\r9\x0E9\u070D\x039\x039\x039\x039" +
		"\x039\x039\x039\x079\u0717\n9\f9\x0E9\u071A\v9\x039\x039\x039\x039\x03" +
		"9\x039\x039\x059\u0723\n9\x039\x059\u0726\n9\x039\x059\u0729\n9\x039\x03" +
		"9\x039\x059\u072E\n9\x039\x039\x039\x079\u0733\n9\f9\x0E9\u0736\v9\x05" +
		"9\u0738\n9\x039\x039\x039\x039\x039\x079\u073F\n9\f9\x0E9\u0742\v9\x05" +
		"9\u0744\n9\x039\x039\x059\u0748\n9\x039\x059\u074B\n9\x039\x059\u074E" +
		"\n9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x079\u075B" +
		"\n9\f9\x0E9\u075E\v9\x059\u0760\n9\x039\x039\x039\x039\x039\x039\x039" +
		"\x039\x039\x039\x039\x039\x039\x039\x039\x069\u0771\n9\r9\x0E9\u0772\x03" +
		"9\x039\x059\u0777\n9\x039\x039\x039\x039\x069\u077D\n9\r9\x0E9\u077E\x03" +
		"9\x039\x059\u0783\n9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x079\u079A\n" +
		"9\f9\x0E9\u079D\v9\x059\u079F\n9\x039\x039\x039\x039\x039\x039\x039\x05" +
		"9\u07A8\n9\x039\x039\x039\x039\x059\u07AE\n9\x039\x039\x039\x039\x059" +
		"\u07B4\n9\x039\x039\x039\x039\x059\u07BA\n9\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x059\u07C7\n9\x039\x039\x039\x039\x039\x03" +
		"9\x039\x059\u07D0\n9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x079\u07E4\n9\f9\x0E9\u07E7" +
		"\v9\x059\u07E9\n9\x039\x059\u07EC\n9\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x079\u07F6\n9\f9\x0E9\u07F9\v9\x03:\x03:\x03;\x03;\x03;\x03;\x05" +
		";\u0801\n;\x03<\x03<\x03<\x03<\x05<\u0807\n<\x05<\u0809\n<\x03=\x03=\x03" +
		"=\x03=\x03=\x03=\x05=\u0811\n=\x03>\x03>\x03?\x03?\x03@\x03@\x03A\x03" +
		"A\x05A\u081B\nA\x03A\x03A\x03A\x03A\x05A\u0821\nA\x03B\x03B\x03C\x03C" +
		"\x03D\x03D\x03D\x03D\x03D\x03D\x07D\u082D\nD\fD\x0ED\u0830\vD\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x05D\u0838\nD\x03D\x03D\x03D\x03D\x03D\x05D\u083F" +
		"\nD\x03D\x03D\x03D\x05D\u0844\nD\x03D\x03D\x03D\x03D\x03D\x05D\u084B\n" +
		"D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u0855\nD\x03D\x03D\x03" +
		"D\x05D\u085A\nD\x03D\x03D\x03D\x03D\x03D\x05D\u0861\nD\x03D\x03D\x03D" +
		"\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x03D\x07D\u0879\nD\fD\x0ED\u087C\vD\x03D\x03D\x05" +
		"D\u0880\nD\x05D\u0882\nD\x03D\x03D\x03D\x03D\x03D\x05D\u0889\nD\x07D\u088B" +
		"\nD\fD\x0ED\u088E\vD\x03E\x03E\x03E\x03E\x05E\u0894\nE\x03F\x03F\x05F" +
		"\u0898\nF\x03G\x03G\x03G\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x03H\x03I" +
		"\x03I\x03I\x03I\x05I\u08A9\nI\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I" +
		"\x03I\x03I\x03I\x07I\u08B6\nI\fI\x0EI\u08B9\vI\x03I\x03I\x03I\x03I\x05" +
		"I\u08BF\nI\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u08C8\nI\x03I\x03I" +
		"\x03I\x03I\x03I\x03I\x07I\u08D0\nI\fI\x0EI\u08D3\vI\x03I\x03I\x05I\u08D7" +
		"\nI\x03I\x03I\x03I\x03I\x03I\x07I\u08DE\nI\fI\x0EI\u08E1\vI\x03I\x03I" +
		"\x05I\u08E5\nI\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u08ED\nJ\x03K\x03K\x03" +
		"K\x03K\x07K\u08F3\nK\fK\x0EK\u08F6\vK\x05K\u08F8\nK\x03K\x03K\x03K\x03" +
		"K\x05K\u08FE\nK\x03K\x05K\u0901\nK\x03K\x03K\x03K\x03K\x03K\x05K\u0908" +
		"\nK\x03K\x03K\x03K\x03K";
	private static readonly _serializedATNSegment1: string =
		"\x07K\u090E\nK\fK\x0EK\u0911\vK\x05K\u0913\nK\x03K\x03K\x03K\x03K\x07" +
		"K\u0919\nK\fK\x0EK\u091C\vK\x05K\u091E\nK\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x03L\x03L\x05L\u0938\nL\x03M\x03M\x03M\x03M\x03M\x03M\x03" +
		"M\x03M\x03M\x05M\u0943\nM\x03N\x03N\x03N\x05N\u0948\nN\x03N\x03N\x03N" +
		"\x03N\x03N\x07N\u094F\nN\fN\x0EN\u0952\vN\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x03O\x03O\x07O\u095C\nO\fO\x0EO\u095F\vO\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u096D\nO\x03P\x03P\x05P\u0971\nP" +
		"\x03P\x03P\x05P\u0975\nP\x03P\x03P\x05P\u0979\nP\x03P\x03P\x03P\x03P\x05" +
		"P\u097F\nP\x03P\x03P\x05P\u0983\nP\x03P\x03P\x05P\u0987\nP\x03P\x03P\x05" +
		"P\u098B\nP\x05P\u098D\nP\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03R\x05R" +
		"\u0997\nR\x03S\x03S\x03S\x03S\x03S\x05S\u099E\nS\x03T\x03T\x03T\x03T\x03" +
		"T\x03T\x03T\x05T\u09A7\nT\x03U\x03U\x03U\x03U\x03U\x05U\u09AE\nU\x03V" +
		"\x03V\x03V\x03V\x03V\x05V\u09B5\nV\x03W\x03W\x03W\x07W\u09BA\nW\fW\x0E" +
		"W\u09BD\vW\x03X\x03X\x03Y\x03Y\x05Y\u09C3\nY\x03Z\x03Z\x03[\x03[\x03\\" +
		"\x03\\\x03]\x03]\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03" +
		"^\x05^\u09D8\n^\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03" +
		"_\x05_\u09E5\n_\x03`\x03`\x03a\x03a\x03b\x03b\x03b\x03b\x03b\x05b\u09F0" +
		"\nb\x03c\x03c\x03d\x03d\x03e\x03e\x03f\x03f\x03g\x03g\x03h\x03h\x03h\x07" +
		"h\u09FF\nh\fh\x0Eh\u0A02\vh\x03i\x03i\x03i\x05i\u0A07\ni\x03j\x03j\x03" +
		"j\x03j\x03j\x05j\u0A0E\nj\x03k\x03k\x03k\x07k\u0A13\nk\fk\x0Ek\u0A16\v" +
		"k\x03l\x03l\x03l\x03l\x03l\x05l\u0A1D\nl\x03m\x05m\u0A20\nm\x03m\x03m" +
		"\x05m\u0A24\nm\x03m\x03m\x05m\u0A28\nm\x03m\x05m\u0A2B\nm\x03n\x03n\x03" +
		"n\x02\x02\t,Fjnp\x86\x9Ao\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
		"\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02" +
		"\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\x02\x1D\x04\x02$$\xBB\xBB\x04" +
		"\x02??rr\x04\x02ZZii\x04\x02MMjj\x03\x02\xC2\xC3\x04\x02VV\x8D\x8D\x04" +
		"\x02\u0107\u0107\u010B\u010B\x04\x02LL\xE7\xE7\x04\x02\x1D\x1DAA\x04\x02" +
		"VVxx\x04\x02\x16\x16DD\x04\x02  \xD5\xD5\x04\x02kk\xC9\xC9\x03\x02\u0101" +
		"\u0102\x03\x02\u0103\u0105\x04\x02UU\xC4\xC4\x03\x02\xFB\u0100\x05\x02" +
		"\x16\x16\x1A\x1A\xD0\xD0\x04\x02RR\xE1\xE1\x07\x02<<ff\x8A\x8B\xC7\xC7" +
		"\xF9\xF9\x03\x02\x8E\x91\x04\x02WW\xAD\xAD\x05\x02aaww\xD9\xD9\x06\x02" +
		"EEss\x81\x81\xEE\xEE\x04\x02\x9D\x9D\xF8\xF8\x06\x02@@nn\xCA\xCA\xEA\xEA" +
		"3\x02\x13\x16\x18\x18\x1A\x1B\x1D #$\',11:=??AACCEFIIMMPPSWYY\\addfhj" +
		"kmmpprsuuwy{{}~\x81\x8B\x8D\x93\x97\x9A\x9C\x9E\xA1\xA1\xA3\xAE\xB0\xB3" +
		"\xB5\xBC\xBE\xC0\xC2\xC9\xCB\xD5\xD7\xD9\xDB\xE0\xE2\xE3\xE5\xE6\xE8\xE8" +
		"\xEA\xEC\xEE\xEE\xF0\xF1\xF4\xF4\xF6\xFA\x02\u0BBF\x02\xDF\x03\x02\x02" +
		"\x02\x04\xE4\x03\x02\x02\x02\x06\xEA\x03\x02\x02\x02\b\xEC\x03\x02\x02" +
		"\x02\n\xF0\x03\x02\x02\x02\f\xF4\x03\x02\x02\x02\x0E\xF8\x03\x02\x02\x02" +
		"\x10\xFC\x03\x02\x02\x02\x12\u040E\x03\x02\x02\x02\x14\u0411\x03\x02\x02" +
		"\x02\x16\u0415\x03\x02\x02\x02\x18\u0423\x03\x02\x02\x02\x1A\u0425\x03" +
		"\x02\x02\x02\x1C\u0433\x03\x02\x02\x02\x1E\u0439\x03\x02\x02\x02 \u043D" +
		"\x03\x02\x02\x02\"\u0445\x03\x02\x02\x02$\u044B\x03\x02\x02\x02&\u044D" +
		"\x03\x02\x02\x02(\u0472\x03\x02\x02\x02*\u0474\x03\x02\x02\x02,\u0476" +
		"\x03\x02\x02\x02.\u049A\x03\x02\x02\x020\u049E\x03\x02\x02\x022\u04A7" +
		"\x03\x02\x02\x024\u04D7\x03\x02\x02\x026\u0509\x03\x02\x02\x028\u0518" +
		"\x03\x02\x02\x02:\u051C\x03\x02\x02\x02<\u051E\x03\x02\x02\x02>\u0525" +
		"\x03\x02\x02\x02@\u0542\x03\x02\x02\x02B\u054B\x03\x02\x02\x02D\u055F" +
		"\x03\x02\x02\x02F\u0561\x03\x02\x02\x02H\u0588\x03\x02\x02\x02J\u0598" +
		"\x03\x02\x02\x02L\u059A\x03\x02\x02\x02N\u05A3\x03\x02\x02\x02P\u05A5" +
		"\x03\x02\x02\x02R\u05FA\x03\x02\x02\x02T\u0609\x03\x02\x02\x02V\u0614" +
		"\x03\x02\x02\x02X\u0629\x03\x02\x02\x02Z\u062B\x03\x02\x02\x02\\\u0638" +
		"\x03\x02\x02\x02^\u063C\x03\x02\x02\x02`\u0646\x03\x02\x02\x02b\u0651" +
		"\x03\x02\x02\x02d\u065C\x03\x02\x02\x02f\u0684\x03\x02\x02\x02h\u0686" +
		"\x03\x02\x02\x02j\u068F\x03\x02\x02\x02l\u06D9\x03\x02\x02\x02n\u06DF" +
		"\x03\x02\x02\x02p\u07EB\x03\x02\x02\x02r\u07FA\x03\x02\x02\x02t\u0800" +
		"\x03\x02\x02\x02v\u0808\x03\x02\x02\x02x\u0810\x03\x02\x02\x02z\u0812" +
		"\x03\x02\x02\x02|\u0814\x03\x02\x02\x02~\u0816\x03\x02\x02\x02\x80\u0818" +
		"\x03\x02\x02\x02\x82\u0822\x03\x02\x02\x02\x84\u0824\x03\x02\x02\x02\x86" +
		"\u0881\x03\x02\x02\x02\x88\u0893\x03\x02\x02\x02\x8A\u0897\x03\x02\x02" +
		"\x02\x8C\u0899\x03\x02\x02\x02\x8E\u089E\x03\x02\x02\x02\x90\u08E4\x03" +
		"\x02\x02\x02\x92\u08E6\x03\x02\x02\x02\x94\u08F7\x03\x02\x02\x02\x96\u0937" +
		"\x03\x02\x02\x02\x98\u0942\x03\x02\x02\x02\x9A\u0944\x03\x02\x02\x02\x9C" +
		"\u096C\x03\x02\x02\x02\x9E\u098C\x03\x02\x02\x02\xA0\u098E\x03\x02\x02" +
		"\x02\xA2\u0996\x03\x02\x02\x02\xA4\u099D\x03\x02\x02\x02\xA6\u09A6\x03" +
		"\x02\x02\x02\xA8\u09AD\x03\x02\x02\x02\xAA\u09B4\x03\x02\x02\x02\xAC\u09B6" +
		"\x03\x02\x02\x02\xAE\u09BE\x03\x02\x02\x02\xB0\u09C2\x03\x02\x02\x02\xB2" +
		"\u09C4\x03\x02\x02\x02\xB4\u09C6\x03\x02\x02\x02\xB6\u09C8\x03\x02\x02" +
		"\x02\xB8\u09CA\x03\x02\x02\x02\xBA\u09D7\x03\x02\x02\x02\xBC\u09E4\x03" +
		"\x02\x02\x02\xBE\u09E6\x03\x02\x02\x02\xC0\u09E8\x03\x02\x02\x02\xC2\u09EF" +
		"\x03\x02\x02\x02\xC4\u09F1\x03\x02\x02\x02\xC6\u09F3\x03\x02\x02\x02\xC8" +
		"\u09F5\x03\x02\x02\x02\xCA\u09F7\x03\x02\x02\x02\xCC\u09F9\x03\x02\x02" +
		"\x02\xCE\u09FB\x03\x02\x02\x02\xD0\u0A06\x03\x02\x02\x02\xD2\u0A0D\x03" +
		"\x02\x02\x02\xD4\u0A0F\x03\x02\x02\x02\xD6\u0A1C\x03\x02\x02\x02\xD8\u0A2A" +
		"\x03\x02\x02\x02\xDA\u0A2C\x03\x02\x02\x02\xDC\xDE\x05\x04\x03\x02\xDD" +
		"\xDC\x03\x02\x02\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF" +
		"\xE0\x03\x02\x02\x02\xE0\xE2\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2" +
		"\xE3\x07\x02\x02\x03\xE3\x03\x03\x02\x02\x02\xE4\xE5\x05\b\x05\x02\xE5" +
		"\x05\x03\x02\x02\x02\xE6\xEB\x05\n\x06\x02\xE7\xEB\x05\f\x07\x02\xE8\xEB" +
		"\x05\x0E\b\x02\xE9\xEB\x05\x10\t\x02\xEA\xE6\x03\x02\x02\x02\xEA\xE7\x03" +
		"\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xE9\x03\x02\x02\x02\xEB\x07\x03" +
		"\x02\x02\x02\xEC\xEE\x05\x12\n\x02\xED\xEF\x07\u0112\x02\x02\xEE\xED\x03" +
		"\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\t\x03\x02\x02\x02\xF0\xF2\x05" +
		"h5\x02\xF1\xF3\x07\u0112\x02\x02\xF2\xF1\x03\x02\x02\x02\xF2\xF3\x03\x02" +
		"\x02\x02\xF3\v\x03\x02\x02\x02\xF4\xF6\x05\xACW\x02\xF5\xF7\x07\u0112" +
		"\x02\x02\xF6\xF5\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\r\x03\x02" +
		"\x02\x02\xF8\xFA\x05\x86D\x02\xF9\xFB\x07\u0112\x02\x02\xFA\xF9\x03\x02" +
		"\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\x0F\x03\x02\x02\x02\xFC\xFE\x05\x9A" +
		"N\x02\xFD\xFF\x07\u0112\x02\x02\xFE\xFD\x03\x02\x02\x02\xFE\xFF\x03\x02" +
		"\x02\x02\xFF\x11\x03\x02\x02\x02\u0100\u040F\x05\x14\v\x02\u0101\u0102" +
		"\x07\xEB\x02\x02\u0102\u040F\x05\xBE`\x02\u0103\u0104\x07.\x02\x02\u0104" +
		"\u0108\x07\xC5\x02\x02\u0105\u0106\x07g\x02\x02\u0106\u0107\x07\x95\x02" +
		"\x02\u0107\u0109\x07O\x02\x02\u0108\u0105\x03\x02\x02\x02\u0108\u0109" +
		"\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010D\x05\xC0a\x02" +
		"\u010B\u010C\x07\x1F\x02\x02\u010C\u010E\x05\xD2j\x02\u010D\u010B\x03" +
		"\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u0111\x03\x02\x02\x02\u010F" +
		"\u0110\x07\xF5\x02\x02\u0110\u0112\x05\x1E\x10\x02\u0111\u010F\x03\x02" +
		"\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u040F\x03\x02\x02\x02\u0113" +
		"\u0114\x07G\x02\x02\u0114\u0117\x07\xC5\x02\x02\u0115\u0116\x07g\x02\x02" +
		"\u0116\u0118\x07O\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0118\x03" +
		"\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011B\x05\xBE`\x02\u011A" +
		"\u011C\t\x02\x02\x02\u011B\u011A\x03\x02\x02\x02\u011B\u011C\x03\x02\x02" +
		"\x02\u011C\u040F\x03\x02\x02\x02\u011D\u011E\x07\x17\x02\x02\u011E\u011F" +
		"\x07\xC5\x02\x02\u011F\u0120\x05\xBE`\x02\u0120\u0121\x07\xB6\x02\x02" +
		"\u0121\u0122\x07\xDE\x02\x02\u0122\u0123\x05\xC0a\x02\u0123\u040F\x03" +
		"\x02\x02\x02\u0124\u0125\x07\x17\x02\x02\u0125\u0126\x07\xC5\x02\x02\u0126" +
		"\u0127\x05\xBE`\x02\u0127\u0128\x07\xCD\x02\x02\u0128\u0129\x07\x1F\x02" +
		"\x02\u0129\u012A\x05\xD2j\x02\u012A\u040F\x03\x02\x02\x02\u012B\u012C" +
		"\x07.\x02\x02\u012C\u0130\x07\xD6\x02\x02\u012D\u012E\x07g\x02\x02\u012E" +
		"\u012F\x07\x95\x02\x02\u012F\u0131\x07O\x02\x02\u0130\u012D\x03\x02\x02" +
		"\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0134" +
		"\x05\xB4[\x02\u0133\u0135\x05`1\x02\u0134\u0133\x03\x02\x02\x02\u0134" +
		"\u0135\x03\x02\x02\x02\u0135\u0138\x03\x02\x02\x02\u0136\u0137\x07*\x02" +
		"\x02\u0137\u0139\x05v<\x02\u0138\u0136\x03\x02\x02\x02\u0138\u0139\x03" +
		"\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u013B\x07\xF5\x02\x02\u013B" +
		"\u013D\x05\x1E\x10\x02\u013C\u013A\x03\x02\x02\x02\u013C\u013D\x03\x02" +
		"\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0144\x07\x1C\x02\x02\u013F" +
		"\u0145\x05\x14\v\x02\u0140\u0141\x07\x03\x02\x02\u0141\u0142\x05\x14\v" +
		"\x02\u0142\u0143\x07\x04\x02\x02\u0143\u0145\x03\x02\x02\x02\u0144\u013F" +
		"\x03\x02\x02\x02\u0144\u0140\x03\x02\x02\x02\u0145\u014B\x03\x02\x02\x02" +
		"\u0146\u0148\x07\xF5\x02\x02\u0147\u0149\x07\x92\x02\x02\u0148\u0147\x03" +
		"\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A" +
		"\u014C\x07:\x02\x02\u014B\u0146\x03\x02\x02\x02\u014B\u014C\x03\x02\x02" +
		"\x02\u014C\u040F\x03\x02\x02\x02\u014D\u014E\x07.\x02\x02\u014E\u0152" +
		"\x07\xD6\x02\x02\u014F\u0150\x07g\x02\x02\u0150\u0151\x07\x95\x02\x02" +
		"\u0151\u0153\x07O\x02\x02\u0152\u014F\x03\x02\x02\x02\u0152\u0153\x03" +
		"\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0155\x05\xB4[\x02\u0155" +
		"\u0156\x07\x03\x02\x02\u0156\u015B\x05\x18\r\x02\u0157\u0158\x07\x05\x02" +
		"\x02\u0158\u015A\x05\x18\r\x02\u0159\u0157\x03\x02\x02\x02\u015A\u015D" +
		"\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02" +
		"\u015C\u015E\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015E\u0161\x07" +
		"\x04\x02\x02\u015F\u0160\x07*\x02\x02\u0160\u0162\x05v<\x02\u0161\u015F" +
		"\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0165\x03\x02\x02\x02" +
		"\u0163\u0164\x07\xF5\x02\x02\u0164\u0166\x05\x1E\x10\x02\u0165\u0163\x03" +
		"\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u040F\x03\x02\x02\x02\u0167" +
		"\u0168\x07G\x02\x02\u0168\u016B\x07\xD6\x02\x02\u0169\u016A\x07g\x02\x02" +
		"\u016A\u016C\x07O\x02\x02\u016B\u0169\x03\x02\x02\x02\u016B\u016C\x03" +
		"\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u040F\x05\xB2Z\x02\u016E" +
		"\u016F\x07n\x02\x02\u016F\u0170\x07q\x02\x02\u0170\u0172\x05\xB2Z\x02" +
		"\u0171\u0173\x05b2\x02\u0172\u0171\x03\x02\x02\x02\u0172\u0173\x03\x02" +
		"\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0175\x05\x14\v\x02\u0175\u040F" +
		"\x03\x02\x02\x02\u0176\u0177\x07@\x02\x02\u0177\u0178\x07Z\x02\x02\u0178" +
		"\u017B\x05\xB2Z\x02\u0179\u017A\x07\xF3\x02\x02\u017A\u017C\x05j6\x02" +
		"\u017B\u0179\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u040F\x03" +
		"\x02\x02\x02\u017D\u017E\x07\xE0\x02\x02\u017E\u017F\x07\xD6\x02\x02\u017F" +
		"\u040F\x05\xB2Z\x02\u0180\u0181\x07\x17\x02\x02\u0181\u0184\x07\xD6\x02" +
		"\x02\u0182\u0183\x07g\x02\x02\u0183\u0185\x07O\x02\x02\u0184\u0182\x03" +
		"\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186" +
		"\u0187\x05\xB2Z\x02\u0187\u0188\x07\xB6\x02\x02\u0188\u0189\x07\xDE\x02" +
		"\x02\u0189\u018A\x05\xB4[\x02\u018A\u040F\x03\x02\x02\x02\u018B\u018C" +
		"\x07*\x02\x02\u018C\u018D\x07\x9B\x02\x02\u018D\u018E\x07\xD6\x02\x02" +
		"\u018E\u018F\x05\xB2Z\x02\u018F\u0192\x07t\x02\x02\u0190\u0193\x05v<\x02" +
		"\u0191\u0193\x07\x96\x02\x02\u0192\u0190\x03\x02\x02\x02\u0192\u0191\x03" +
		"\x02\x02\x02\u0193\u040F\x03\x02\x02\x02\u0194\u0195\x07*\x02\x02\u0195" +
		"\u0196\x07\x9B\x02\x02\u0196\u0197\x07(\x02\x02\u0197\u0198\x05\xCAf\x02" +
		"\u0198\u019B\x07t\x02\x02\u0199\u019C\x05v<\x02\u019A\u019C\x07\x96\x02" +
		"\x02\u019B\u0199\x03\x02\x02\x02\u019B\u019A\x03\x02\x02\x02\u019C\u040F" +
		"\x03\x02\x02\x02\u019D\u019E\x07\x17\x02\x02\u019E\u01A1\x07\xD6\x02\x02" +
		"\u019F\u01A0\x07g\x02\x02\u01A0\u01A2\x07O\x02\x02\u01A1\u019F\x03\x02" +
		"\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3" +
		"\u01A4\x05\xB2Z\x02\u01A4\u01A5\x07\xB6\x02\x02\u01A5\u01A8\x07(\x02\x02" +
		"\u01A6\u01A7\x07g\x02\x02\u01A7\u01A9\x07O\x02\x02\u01A8\u01A6\x03\x02" +
		"\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA" +
		"\u01AB\x05\xCAf\x02\u01AB\u01AC\x07\xDE\x02\x02\u01AC\u01AD\x05\xCCg\x02" +
		"\u01AD\u040F\x03\x02\x02\x02\u01AE\u01AF\x07\x17\x02\x02\u01AF\u01B2\x07" +
		"\xD6\x02\x02\u01B0\u01B1\x07g\x02\x02\u01B1\u01B3\x07O\x02\x02\u01B2\u01B0" +
		"\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02" +
		"\u01B4\u01B5\x05\xB2Z\x02\u01B5\u01B6\x07G\x02\x02\u01B6\u01B9\x07(\x02" +
		"\x02\u01B7\u01B8\x07g\x02\x02\u01B8\u01BA\x07O\x02\x02\u01B9\u01B7\x03" +
		"\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB" +
		"\u01BC\x05\xCAf\x02\u01BC\u040F\x03\x02\x02\x02\u01BD\u01BE\x07\x17\x02" +
		"\x02\u01BE\u01C1\x07\xD6\x02\x02\u01BF\u01C0\x07g\x02\x02\u01C0\u01C2" +
		"\x07O\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02" +
		"\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C4\x05\xB2Z\x02\u01C4\u01C5\x07" +
		"\x13\x02\x02\u01C5\u01C9\x07(\x02\x02\u01C6\u01C7\x07g\x02\x02\u01C7\u01C8" +
		"\x07\x95\x02\x02\u01C8\u01CA\x07O\x02\x02\u01C9\u01C6\x03\x02\x02\x02" +
		"\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CC\x05" +
		"\x1A\x0E\x02\u01CC\u040F\x03\x02\x02\x02\u01CD\u01CE\x07\x17\x02\x02\u01CE" +
		"\u01CF\x07\xD6\x02\x02\u01CF\u01D0\x05\xB2Z\x02\u01D0\u01D1\x07\xCD\x02" +
		"\x02\u01D1\u01D2\x07\x1F\x02\x02\u01D2\u01D3\x05\xD2j\x02\u01D3\u040F" +
		"\x03\x02\x02\x02\u01D4\u01D5\x07\x17\x02\x02\u01D5\u01D6\x07\xD6\x02\x02" +
		"\u01D6\u01D7\x05\xB2Z\x02\u01D7\u01D8\x07\xCD\x02\x02\u01D8\u01D9\x07" +
		"\xB1\x02\x02\u01D9\u01DA\x05 \x11\x02\u01DA\u040F\x03\x02\x02\x02\u01DB" +
		"\u01DC\x07\x17\x02\x02\u01DC\u01DD\x07\xD6\x02\x02\u01DD\u01DE\x05\xB2" +
		"Z\x02\u01DE\u01DF\x07N\x02\x02\u01DF\u01EC\x05\xD6l\x02\u01E0\u01E9\x07" +
		"\x03\x02\x02\u01E1\u01E6\x05\xA8U\x02\u01E2\u01E3\x07\x05\x02\x02\u01E3" +
		"\u01E5\x05\xA8U\x02\u01E4\u01E2\x03\x02\x02\x02\u01E5\u01E8\x03\x02\x02" +
		"\x02\u01E6\u01E4\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01EA" +
		"\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E9\u01E1\x03\x02\x02\x02" +
		"\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01ED\x07" +
		"\x04\x02\x02\u01EC\u01E0\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED" +
		"\u01F0\x03\x02\x02\x02\u01EE\u01EF\x07\xF3\x02\x02\u01EF\u01F1\x05j6\x02" +
		"\u01F0\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u040F\x03" +
		"\x02\x02\x02\u01F2\u01F3\x07\x18\x02\x02\u01F3\u01F6\x05\xB2Z\x02\u01F4" +
		"\u01F5\x07\xF5\x02\x02\u01F5\u01F7\x05\x1E\x10\x02\u01F6\u01F4\x03\x02" +
		"\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u040F\x03\x02\x02\x02\u01F8" +
		"\u01FB\x07.\x02\x02\u01F9\u01FA\x07\x9F\x02\x02\u01FA\u01FC\x07\xB8\x02" +
		"\x02\u01FB\u01F9\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FD" +
		"\x03\x02\x02\x02\u01FD\u01FE\x07\x87\x02\x02\u01FE\u0202\x07\xF1\x02\x02" +
		"\u01FF\u0200\x07g\x02\x02\u0200\u0201\x07\x95\x02\x02\u0201\u0203\x07" +
		"O\x02\x02\u0202\u01FF\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203" +
		"\u0204\x03\x02\x02\x02\u0204\u0207\x05\xB8]\x02\u0205\u0206\x07*\x02\x02" +
		"\u0206\u0208\x05v<\x02\u0207\u0205\x03\x02\x02\x02\u0207\u0208\x03\x02" +
		"\x02\x02\u0208\u020B\x03\x02\x02\x02\u0209\u020A\x07\xF5\x02\x02\u020A" +
		"\u020C\x05\x1E\x10\x02\u020B\u0209\x03\x02\x02\x02\u020B\u020C\x03\x02" +
		"\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u020E\x07\x1C\x02\x02\u020E" +
		"\u020F\x05\x14\v\x02\u020F\u040F\x03\x02\x02\x02\u0210\u0213\x07.\x02" +
		"\x02\u0211\u0212\x07\x9F\x02\x02\u0212\u0214\x07\xB8\x02\x02\u0213\u0211" +
		"\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02" +
		"\u0215\u0216\x07\xF1\x02\x02\u0216\u0219\x05\xB8]\x02\u0217\u0218\x07" +
		"*\x02\x02\u0218\u021A\x05v<\x02\u0219\u0217\x03\x02\x02\x02\u0219\u021A" +
		"\x03\x02\x02\x02\u021A\u021D\x03\x02\x02\x02\u021B\u021C\x07\xC8\x02\x02" +
		"\u021C\u021E\t\x03\x02\x02\u021D\u021B\x03\x02\x02\x02\u021D\u021E\x03" +
		"\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0220\x07\x1C\x02\x02\u0220" +
		"\u0221\x05\x14\v\x02\u0221\u040F\x03\x02\x02\x02\u0222\u0223\x07\xB5\x02" +
		"\x02\u0223\u0224\x07\x87\x02\x02\u0224\u0225\x07\xF1\x02\x02\u0225\u040F" +
		"\x05\xB6\\\x02\u0226\u0227\x07G\x02\x02\u0227\u0228\x07\x87\x02\x02\u0228" +
		"\u022B\x07\xF1\x02\x02\u0229\u022A\x07g\x02\x02\u022A\u022C\x07O\x02\x02" +
		"\u022B\u0229\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022D\x03" +
		"\x02\x02\x02\u022D\u040F\x05\xB6\\\x02\u022E\u022F\x07\x17\x02\x02\u022F" +
		"\u0230\x07\x87\x02\x02\u0230\u0233\x07\xF1\x02\x02\u0231\u0232\x07g\x02" +
		"\x02\u0232\u0234\x07O\x02\x02\u0233\u0231\x03\x02\x02\x02\u0233\u0234" +
		"\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0236\x05\xB6\\\x02" +
		"\u0236\u0237\x07\xB6\x02\x02\u0237\u0238\x07\xDE\x02\x02\u0238\u0239\x05" +
		"\xB8]\x02\u0239\u040F\x03\x02\x02\x02\u023A\u023B\x07\x17\x02\x02\u023B" +
		"\u023C\x07\x87\x02\x02\u023C\u023D\x07\xF1\x02\x02\u023D\u023E\x05\xB6" +
		"\\\x02\u023E\u023F\x07\xCD\x02\x02\u023F\u0240\x07\xB1\x02\x02\u0240\u0241" +
		"\x05 \x11\x02\u0241\u040F\x03\x02\x02\x02\u0242\u0243\x07G\x02\x02\u0243" +
		"\u0246\x07\xF1\x02\x02\u0244\u0245\x07g\x02\x02\u0245\u0247\x07O\x02\x02" +
		"\u0246\u0244\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\u0248\x03" +
		"\x02\x02\x02\u0248\u040F\x05\xB6\\\x02\u0249\u024A\x07\x17\x02\x02\u024A" +
		"\u024B\x07\xF1\x02\x02\u024B\u024C\x05\xB6\\\x02\u024C\u024D\x07\xB6\x02" +
		"\x02\u024D\u024E\x07\xDE\x02\x02\u024E\u024F\x05\xB8]\x02\u024F\u040F" +
		"\x03\x02\x02\x02\u0250\u0251\x07\x17\x02\x02\u0251\u0252\x07\xF1\x02\x02" +
		"\u0252\u0253\x05\xB6\\\x02\u0253\u0254\x07\xCD\x02\x02\u0254\u0255\x07" +
		"\x1F\x02\x02\u0255\u0256\x05\xD2j\x02\u0256\u040F\x03\x02\x02\x02\u0257" +
		"\u0258\x07#\x02\x02\u0258\u0259\x05\xC8e\x02\u0259\u0262\x07\x03\x02\x02" +
		"\u025A\u025F\x05\xA8U\x02\u025B\u025C\x07\x05\x02\x02\u025C\u025E\x05" +
		"\xA8U\x02\u025D\u025B\x03\x02\x02\x02\u025E\u0261\x03\x02\x02\x02\u025F" +
		"\u025D\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260\u0263\x03\x02" +
		"\x02\x02\u0261\u025F\x03\x02\x02\x02\u0262\u025A\x03\x02\x02\x02\u0262" +
		"\u0263\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0265\x07\x04" +
		"\x02\x02\u0265\u040F\x03\x02\x02\x02\u0266\u0267\x07.\x02\x02\u0267\u0268" +
		"\x07\xBE\x02\x02\u0268\u026C\x05\xD6l\x02\u0269\u026A\x07\xF5\x02\x02" +
		"\u026A\u026B\x07\x14\x02\x02\u026B\u026D\x05\xD0i\x02\u026C\u0269\x03" +
		"\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\u0270\x03\x02\x02\x02\u026E" +
		"\u026F\x07i\x02\x02\u026F\u0271\x05\xC4c\x02\u0270\u026E\x03\x02\x02\x02" +
		"\u0270\u0271\x03\x02\x02\x02\u0271\u040F\x03\x02\x02\x02\u0272\u0273\x07" +
		"G\x02\x02\u0273\u0274\x07\xBE\x02\x02\u0274\u040F\x05\xD6l\x02\u0275\u0276" +
		"\x07]\x02\x02\u0276\u0277\x05\xD4k\x02\u0277\u0278\x07\xDE\x02\x02\u0278" +
		"\u027D\x05\xD2j\x02\u0279\u027A\x07\x05\x02\x02\u027A\u027C\x05\xD2j\x02" +
		"\u027B\u0279\x03\x02\x02\x02\u027C\u027F\x03\x02\x02\x02\u027D\u027B\x03" +
		"\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E\u0283\x03\x02\x02\x02\u027F" +
		"\u027D\x03\x02\x02\x02\u0280\u0281\x07\xF5\x02\x02\u0281\u0282\x07\x14" +
		"\x02\x02\u0282\u0284\x07\x9E\x02\x02\u0283\u0280\x03\x02\x02\x02\u0283" +
		"\u0284\x03\x02\x02\x02\u0284\u0288\x03\x02\x02\x02\u0285\u0286\x07^\x02" +
		"\x02\u0286\u0287\x07\"\x02\x02\u0287\u0289\x05\xD0i\x02\u0288\u0285\x03" +
		"\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289\u028C\x03\x02\x02\x02\u028A" +
		"\u028B\x07i\x02\x02\u028B\u028D\x05\xC4c\x02\u028C\u028A\x03\x02\x02\x02" +
		"\u028C\u028D\x03\x02\x02\x02\u028D\u040F\x03\x02\x02\x02\u028E\u0292\x07" +
		"\xBC\x02\x02\u028F\u0290\x07\x14\x02\x02\u0290\u0291\x07\x9E\x02\x02\u0291" +
		"\u0293\x07X\x02\x02\u0292\u028F\x03\x02\x02\x02\u0292\u0293\x03\x02\x02" +
		"\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0295\x05\xD4k\x02\u0295\u0296" +
		"\x07Z\x02\x02\u0296\u029B\x05\xD2j\x02\u0297\u0298\x07\x05\x02\x02\u0298" +
		"\u029A\x05\xD2j\x02\u0299\u0297\x03\x02\x02\x02\u029A\u029D\x03\x02\x02" +
		"\x02\u029B\u0299\x03\x02\x02\x02\u029B\u029C\x03\x02\x02\x02\u029C\u02A1" +
		"\x03\x02\x02\x02\u029D\u029B\x03\x02\x02\x02\u029E\u029F\x07^\x02\x02" +
		"\u029F\u02A0\x07\"\x02\x02\u02A0\u02A2\x05\xD0i\x02\u02A1\u029E\x03\x02" +
		"\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A5\x03\x02\x02\x02\u02A3" +
		"\u02A4\x07i\x02\x02\u02A4\u02A6\x05\xC4c\x02\u02A5\u02A3\x03\x02\x02\x02" +
		"\u02A5\u02A6\x03\x02\x02\x02\u02A6\u040F\x03\x02\x02\x02\u02A7\u02A8\x07" +
		"\xCD\x02\x02\u02A8\u02AC\x07\xBE\x02\x02\u02A9\u02AD\x07\x16\x02\x02\u02AA" +
		"\u02AD\x07\x93\x02\x02\u02AB\u02AD\x05\xD6l\x02\u02AC\u02A9\x03\x02\x02" +
		"\x02\u02AC\u02AA\x03\x02\x02\x02\u02AC\u02AB\x03\x02\x02\x02\u02AD\u02B0" +
		"\x03\x02\x02\x02\u02AE\u02AF\x07i\x02\x02\u02AF\u02B1\x05\xC4c\x02\u02B0" +
		"\u02AE\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02\u02B1\u040F\x03\x02" +
		"\x02\x02\u02B2\u02BD\x07";
	private static readonly _serializedATNSegment2: string =
		"]\x02\x02\u02B3\u02B8\x05\xAEX\x02\u02B4\u02B5\x07\x05\x02\x02\u02B5\u02B7" +
		"\x05\xAEX\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7\u02BA\x03\x02\x02\x02" +
		"\u02B8\u02B6\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BE\x03" +
		"\x02\x02\x02\u02BA\u02B8\x03\x02\x02\x02\u02BB\u02BC\x07\x16\x02\x02\u02BC" +
		"\u02BE\x07\xB0\x02\x02\u02BD\u02B3\x03\x02\x02\x02\u02BD\u02BB\x03\x02" +
		"\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C8\x07\x9B\x02\x02\u02C0" +
		"\u02C2\x07\xC5\x02\x02\u02C1\u02C0\x03\x02\x02\x02\u02C1\u02C2\x03\x02" +
		"\x02\x02\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02C9\x05\xBE`\x02\u02C4\u02C6" +
		"\x07\xD6\x02\x02\u02C5\u02C4\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02" +
		"\u02C6\u02C7\x03\x02\x02\x02\u02C7\u02C9\x05\xB2Z\x02\u02C8\u02C1\x03" +
		"\x02\x02\x02\u02C8\u02C5\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9" +
		"\u02CA\x03\x02\x02\x02\u02CA\u02CB\x07\xDE\x02\x02\u02CB\u02CF\x05\xD2" +
		"j\x02\u02CC\u02CD\x07\xF5\x02\x02\u02CD\u02CE\x07]\x02\x02\u02CE\u02D0" +
		"\x07\x9E\x02\x02\u02CF\u02CC\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02" +
		"\u02D0\u040F\x03\x02\x02\x02\u02D1\u02DC\x07`\x02\x02\u02D2\u02D7\x05" +
		"\xAEX\x02\u02D3\u02D4\x07\x05\x02\x02\u02D4\u02D6\x05\xAEX\x02\u02D5\u02D3" +
		"\x03\x02\x02\x02\u02D6\u02D9\x03\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02" +
		"\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02DD\x03\x02\x02\x02\u02D9\u02D7\x03" +
		"\x02\x02\x02\u02DA\u02DB\x07\x16\x02\x02\u02DB\u02DD\x07\xB0\x02\x02\u02DC" +
		"\u02D2\x03\x02\x02\x02\u02DC\u02DA\x03\x02\x02\x02\u02DD\u02DE\x03\x02" +
		"\x02\x02\u02DE\u02E7\x07\x9B\x02\x02\u02DF\u02E1\x07\xC5\x02\x02\u02E0" +
		"\u02DF\x03\x02\x02\x02\u02E0\u02E1\x03\x02\x02\x02\u02E1\u02E2\x03\x02" +
		"\x02\x02\u02E2\u02E8\x05\xBE`\x02\u02E3\u02E5\x07\xD6\x02\x02\u02E4\u02E3" +
		"\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02" +
		"\u02E6\u02E8\x05\xB2Z\x02\u02E7\u02E0\x03\x02\x02\x02\u02E7\u02E4\x03" +
		"\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9\u02EA\x07\xDE\x02\x02\u02EA" +
		"\u02EB\x05\xD2j\x02\u02EB\u040F\x03\x02\x02\x02\u02EC\u02F0\x07\xBC\x02" +
		"\x02\u02ED\u02EE\x07]\x02\x02\u02EE\u02EF\x07\x9E\x02\x02\u02EF\u02F1" +
		"\x07X\x02\x02\u02F0\u02ED\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02" +
		"\u02F1\u02FC\x03\x02\x02\x02\u02F2\u02F7\x05\xAEX\x02\u02F3\u02F4\x07" +
		"\x05\x02\x02\u02F4\u02F6\x05\xAEX\x02\u02F5\u02F3\x03\x02\x02\x02\u02F6" +
		"\u02F9\x03\x02\x02\x02\u02F7\u02F5\x03\x02\x02\x02\u02F7\u02F8\x03\x02" +
		"\x02\x02\u02F8\u02FD\x03\x02\x02\x02\u02F9\u02F7\x03\x02\x02\x02\u02FA" +
		"\u02FB\x07\x16\x02\x02\u02FB\u02FD\x07\xB0\x02\x02\u02FC\u02F2\x03\x02" +
		"\x02\x02\u02FC\u02FA\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02\u02FE" +
		"\u0307\x07\x9B\x02\x02\u02FF\u0301\x07\xC5\x02\x02\u0300\u02FF\x03\x02" +
		"\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301\u0302\x03\x02\x02\x02\u0302" +
		"\u0308\x05\xBE`\x02\u0303\u0305\x07\xD6\x02\x02\u0304\u0303\x03\x02\x02" +
		"\x02\u0304\u0305\x03\x02\x02\x02\u0305\u0306\x03\x02\x02\x02\u0306\u0308" +
		"\x05\xB2Z\x02\u0307\u0300\x03\x02\x02\x02\u0307\u0304\x03\x02\x02\x02" +
		"\u0307\u0308\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030A\x07" +
		"Z\x02\x02\u030A\u040F\x05\xD2j\x02\u030B\u030C\x07\xCF\x02\x02\u030C\u0312" +
		"\x07_\x02\x02\u030D\u030F\x07\x9B\x02\x02\u030E\u0310\x07\xD6\x02\x02" +
		"\u030F\u030E\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02\u0310\u0311\x03" +
		"\x02\x02\x02\u0311\u0313\x05\xB2Z\x02\u0312\u030D\x03\x02\x02\x02\u0312" +
		"\u0313\x03\x02\x02\x02\u0313\u040F\x03\x02\x02\x02\u0314\u0316\x07P\x02" +
		"\x02\u0315\u0317\x07\x18\x02\x02\u0316\u0315\x03\x02\x02\x02\u0316\u0317" +
		"\x03\x02\x02\x02\u0317\u0319\x03\x02\x02\x02\u0318\u031A\x07\xF0\x02\x02" +
		"\u0319\u0318\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A\u0326\x03" +
		"\x02\x02\x02\u031B\u031C\x07\x03\x02\x02\u031C\u0321\x05\xA2R\x02\u031D" +
		"\u031E\x07\x05\x02\x02\u031E\u0320\x05\xA2R\x02\u031F\u031D\x03\x02\x02" +
		"\x02\u0320\u0323\x03\x02\x02\x02\u0321\u031F\x03\x02\x02\x02\u0321\u0322" +
		"\x03\x02\x02\x02\u0322\u0324\x03\x02\x02\x02\u0323\u0321\x03\x02\x02\x02" +
		"\u0324\u0325\x07\x04\x02\x02\u0325\u0327\x03\x02\x02\x02\u0326\u031B\x03" +
		"\x02\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328" +
		"\u040F\x05\x12\n\x02\u0329\u032A\x07\xCF\x02\x02\u032A\u032B\x07.\x02" +
		"\x02\u032B\u032C\x07\xD6\x02\x02\u032C\u040F\x05\xB2Z\x02\u032D\u032E" +
		"\x07\xCF\x02\x02\u032E\u032F\x07.\x02\x02\u032F\u0330\x07\xC5\x02\x02" +
		"\u0330\u040F\x05\xBE`\x02\u0331\u0332\x07\xCF\x02\x02\u0332\u0333\x07" +
		".\x02\x02\u0333\u0334\x07\xF1\x02\x02\u0334\u040F\x05\xB6\\\x02\u0335" +
		"\u0336\x07\xCF\x02\x02\u0336\u0337\x07.\x02\x02\u0337\u0338\x07\x87\x02" +
		"\x02\u0338\u0339\x07\xF1\x02\x02\u0339\u040F\x05\xB6\\\x02\u033A\u033B" +
		"\x07\xCF\x02\x02\u033B\u033E\x07\xD7\x02\x02\u033C\u033D\t\x04\x02\x02" +
		"\u033D\u033F\x05\xBE`\x02\u033E\u033C\x03\x02\x02\x02\u033E\u033F\x03" +
		"\x02\x02\x02\u033F\u0346\x03\x02\x02\x02\u0340\u0341\x07|\x02\x02\u0341" +
		"\u0344\x05v<\x02\u0342\u0343\x07K\x02\x02\u0343\u0345\x05v<\x02\u0344" +
		"\u0342\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345\u0347\x03\x02" +
		"\x02\x02\u0346\u0340\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347" +
		"\u040F\x03\x02\x02\x02\u0348\u0349\x07\xCF\x02\x02\u0349\u034C\x07\xC6" +
		"\x02\x02\u034A\u034B\t\x04\x02\x02\u034B\u034D\x05\xC4c\x02\u034C\u034A" +
		"\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\u0354\x03\x02\x02\x02" +
		"\u034E\u034F\x07|\x02\x02\u034F\u0352\x05v<\x02\u0350\u0351\x07K\x02\x02" +
		"\u0351\u0353\x05v<\x02\u0352\u0350\x03\x02\x02\x02\u0352\u0353\x03\x02" +
		"\x02\x02\u0353\u0355\x03\x02\x02\x02\u0354\u034E\x03\x02\x02\x02\u0354" +
		"\u0355\x03\x02\x02\x02\u0355\u040F\x03\x02\x02\x02\u0356\u0357\x07\xCF" +
		"\x02\x02\u0357\u035E\x07\'\x02\x02\u0358\u0359\x07|\x02\x02\u0359\u035C" +
		"\x05v<\x02\u035A\u035B\x07K\x02\x02\u035B\u035D\x05v<\x02\u035C\u035A" +
		"\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D\u035F\x03\x02\x02\x02" +
		"\u035E\u0358\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\u040F\x03" +
		"\x02\x02\x02\u0360\u0361\x07\xCF\x02\x02\u0361\u0362\x07)\x02\x02\u0362" +
		"\u0364\t\x04\x02\x02\u0363\u0365\x05\xB0Y\x02\u0364\u0363\x03\x02\x02" +
		"\x02\u0364\u0365\x03\x02\x02\x02\u0365\u036C\x03\x02\x02\x02\u0366\u0367" +
		"\x07|\x02\x02\u0367\u036A\x05v<\x02\u0368\u0369\x07K\x02\x02\u0369\u036B" +
		"\x05v<\x02\u036A\u0368\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B" +
		"\u036D\x03\x02\x02\x02\u036C\u0366\x03\x02\x02\x02\u036C\u036D\x03\x02" +
		"\x02\x02\u036D\u040F\x03\x02\x02\x02\u036E\u036F\x07\xCF\x02\x02\u036F" +
		"\u0370\x07\xD2\x02\x02\u0370\u0371\x07X\x02\x02\u0371\u040F\x05\xB2Z\x02" +
		"\u0372\u0373\x07\xCF\x02\x02\u0373\u0374\x07\xD2\x02\x02\u0374\u0375\x07" +
		"X\x02\x02\u0375\u0376\x07\x03\x02\x02\u0376\u0377\x05\x14\v\x02\u0377" +
		"\u0378\x07\x04\x02\x02\u0378\u040F\x03\x02\x02\x02\u0379\u037B\x07\xCF" +
		"\x02\x02\u037A\u037C\x071\x02\x02\u037B\u037A\x03\x02\x02\x02\u037B\u037C" +
		"\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D\u0380\x07\xBF\x02\x02" +
		"\u037E\u037F\t\x04\x02\x02\u037F\u0381\x05\xD6l\x02\u0380\u037E\x03\x02" +
		"\x02\x02\u0380\u0381\x03\x02\x02\x02\u0381\u040F\x03\x02\x02\x02\u0382" +
		"\u0383\x07\xCF\x02\x02\u0383\u0384\x07\xBE\x02\x02\u0384\u0387\x07_\x02" +
		"\x02\u0385\u0386\t\x04\x02\x02\u0386\u0388\x05\xD6l\x02\u0387\u0385\x03" +
		"\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388\u040F\x03\x02\x02\x02\u0389" +
		"\u038A\x07B\x02\x02\u038A\u040F\x05\xB0Y\x02\u038B\u038C\x07A\x02\x02" +
		"\u038C\u040F\x05\xB0Y\x02\u038D\u038E\x07\xCF\x02\x02\u038E\u0395\x07" +
		"\\\x02\x02\u038F\u0390\x07|\x02\x02\u0390\u0393\x05v<\x02\u0391\u0392" +
		"\x07K\x02\x02\u0392\u0394\x05v<\x02\u0393\u0391\x03\x02\x02\x02\u0393" +
		"\u0394\x03\x02\x02\x02\u0394\u0396\x03\x02\x02\x02\u0395\u038F\x03\x02" +
		"\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396\u040F\x03\x02\x02\x02\u0397" +
		"\u0398\x07\xCF\x02\x02\u0398\u039F\x07\xCC\x02\x02\u0399\u039A\x07|\x02" +
		"\x02\u039A\u039D\x05v<\x02\u039B\u039C\x07K\x02\x02\u039C\u039E\x05v<" +
		"\x02\u039D\u039B\x03\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\u03A0" +
		"\x03\x02\x02\x02\u039F\u0399\x03\x02\x02\x02\u039F\u03A0\x03\x02\x02\x02" +
		"\u03A0\u040F\x03\x02\x02\x02\u03A1\u03A2\x07\xCD\x02\x02\u03A2\u03A3\x07" +
		"\xCC\x02\x02\u03A3\u03A4\x05\xCEh\x02\u03A4\u03A5\x07\xFB\x02\x02\u03A5" +
		"\u03A6\x05h5\x02\u03A6\u040F\x03\x02\x02\x02\u03A7\u03A8\x07\xB9\x02\x02" +
		"\u03A8\u03A9\x07\xCC\x02\x02\u03A9\u040F\x05\xCEh\x02\u03AA\u03AB\x07" +
		"\xD1\x02\x02\u03AB\u03B4\x07\xDF\x02\x02\u03AC\u03B1\x05\xA4S\x02\u03AD" +
		"\u03AE\x07\x05\x02\x02\u03AE\u03B0\x05\xA4S\x02\u03AF\u03AD\x03\x02\x02" +
		"\x02\u03B0\u03B3\x03\x02\x02\x02\u03B1\u03AF\x03\x02\x02\x02\u03B1\u03B2" +
		"\x03\x02\x02\x02\u03B2\u03B5\x03\x02\x02\x02\u03B3\u03B1\x03\x02\x02\x02" +
		"\u03B4\u03AC\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5\u040F\x03" +
		"\x02\x02\x02\u03B6\u03B8\x07+\x02\x02\u03B7\u03B9\x07\xF7\x02\x02\u03B8" +
		"\u03B7\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u040F\x03\x02" +
		"\x02\x02\u03BA\u03BC\x07\xC0\x02\x02\u03BB\u03BD\x07\xF7\x02\x02\u03BC" +
		"\u03BB\x03\x02\x02\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD\u040F\x03\x02" +
		"\x02\x02\u03BE\u03BF\x07\xAF\x02\x02\u03BF\u03C0\x05\xD6l\x02\u03C0\u03C1" +
		"\x07Z\x02\x02\u03C1\u03C2\x05\x12\n\x02\u03C2\u040F\x03\x02\x02\x02\u03C3" +
		"\u03C4\x07>\x02\x02\u03C4\u03C5\x07\xAF\x02\x02\u03C5\u040F\x05\xD6l\x02" +
		"\u03C6\u03C7\x07N\x02\x02\u03C7\u03D1\x05\xD6l\x02\u03C8\u03C9\x07\xED" +
		"\x02\x02\u03C9\u03CE\x05h5\x02\u03CA\u03CB\x07\x05\x02\x02\u03CB\u03CD" +
		"\x05h5\x02\u03CC\u03CA\x03\x02\x02\x02\u03CD\u03D0\x03\x02\x02\x02\u03CE" +
		"\u03CC\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02\u03CF\u03D2\x03\x02" +
		"\x02\x02\u03D0\u03CE\x03\x02\x02\x02\u03D1\u03C8\x03\x02\x02\x02\u03D1" +
		"\u03D2\x03\x02\x02\x02\u03D2\u040F\x03\x02\x02\x02\u03D3\u03D4\x07B\x02" +
		"\x02\u03D4\u03D5\x07m\x02\x02\u03D5\u040F\x05\xD6l\x02\u03D6\u03D7\x07" +
		"B\x02\x02\u03D7\u03D8\x07\xA3\x02\x02\u03D8\u040F\x05\xD6l\x02\u03D9\u03DA" +
		"\x07\xCD\x02\x02\u03DA\u03DB\x07\xA8\x02\x02\u03DB\u040F\x05\xACW\x02" +
		"\u03DC\u03DD\x07\xCD\x02\x02\u03DD\u03DE\x07\xDC\x02\x02\u03DE\u03E1\x07" +
		"\xFA\x02\x02\u03DF\u03E2\x07~\x02\x02\u03E0\u03E2\x05h5\x02\u03E1\u03DF" +
		"\x03\x02\x02\x02\u03E1\u03E0\x03\x02\x02\x02\u03E2\u040F\x03\x02\x02\x02" +
		"\u03E3\u03E4\x07\xEA\x02\x02\u03E4\u03E5\x05\xB2Z\x02\u03E5\u03E6\x07" +
		"\xCD\x02\x02\u03E6\u03EB\x05\xA0Q\x02\u03E7\u03E8\x07\x05\x02\x02\u03E8" +
		"\u03EA\x05\xA0Q\x02\u03E9\u03E7\x03\x02\x02\x02\u03EA\u03ED\x03\x02\x02" +
		"\x02\u03EB\u03E9\x03\x02\x02\x02\u03EB\u03EC\x03\x02\x02\x02\u03EC\u03F0" +
		"\x03\x02\x02\x02\u03ED\u03EB\x03\x02\x02\x02\u03EE\u03EF\x07\xF3\x02\x02" +
		"\u03EF\u03F1\x05j6\x02\u03F0\u03EE\x03\x02\x02\x02\u03F0\u03F1\x03\x02" +
		"\x02\x02\u03F1\u040F\x03\x02\x02\x02\u03F2\u03F3\x07\x89\x02\x02\u03F3" +
		"\u03F4\x07q\x02\x02\u03F4\u03F9\x05\xB2Z\x02\u03F5\u03F7\x07\x1C\x02\x02" +
		"\u03F6\u03F5\x03\x02\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7\u03F8\x03" +
		"\x02\x02\x02\u03F8\u03FA\x05\xD6l\x02\u03F9\u03F6\x03\x02\x02\x02\u03F9" +
		"\u03FA\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB\u03FC\x07\xED" +
		"\x02\x02\u03FC\u03FD\x05F$\x02\u03FD\u03FE\x07\x9B\x02\x02\u03FE\u0400" +
		"\x05h5\x02\u03FF\u0401\x05\x90I\x02\u0400\u03FF\x03\x02\x02\x02\u0401" +
		"\u0402\x03\x02\x02\x02\u0402\u0400\x03\x02\x02\x02\u0402\u0403\x03\x02" +
		"\x02\x02\u0403\u040F\x03\x02\x02\x02\u0404\u0405\x07\xCF\x02\x02\u0405" +
		"\u0406\x07*\x02\x02\u0406\u0407\x07\x9B\x02\x02\u0407\u0408\x07\xD6\x02" +
		"\x02\u0408\u040F\x05\xB2Z\x02\u0409\u040A\x07\xCF\x02\x02\u040A\u040B" +
		"\x07*\x02\x02\u040B\u040C\x07\x9B\x02\x02\u040C\u040D\x07(\x02\x02\u040D" +
		"\u040F\x05\xCAf\x02\u040E\u0100\x03\x02\x02\x02\u040E\u0101\x03\x02\x02" +
		"\x02\u040E\u0103\x03\x02\x02\x02\u040E\u0113\x03\x02\x02\x02\u040E\u011D" +
		"\x03\x02\x02\x02\u040E\u0124\x03\x02\x02\x02\u040E\u012B\x03\x02\x02\x02" +
		"\u040E\u014D\x03\x02\x02\x02\u040E\u0167\x03\x02\x02\x02\u040E\u016E\x03" +
		"\x02\x02\x02\u040E\u0176\x03\x02\x02\x02\u040E\u017D\x03\x02\x02\x02\u040E" +
		"\u0180\x03\x02\x02\x02\u040E\u018B\x03\x02\x02\x02\u040E\u0194\x03\x02" +
		"\x02\x02\u040E\u019D\x03\x02\x02\x02\u040E\u01AE\x03\x02\x02\x02\u040E" +
		"\u01BD\x03\x02\x02\x02\u040E\u01CD\x03\x02\x02\x02\u040E\u01D4\x03\x02" +
		"\x02\x02\u040E\u01DB\x03\x02\x02\x02\u040E\u01F2\x03\x02\x02\x02\u040E" +
		"\u01F8\x03\x02\x02\x02\u040E\u0210\x03\x02\x02\x02\u040E\u0222\x03\x02" +
		"\x02\x02\u040E\u0226\x03\x02\x02\x02\u040E\u022E\x03\x02\x02\x02\u040E" +
		"\u023A\x03\x02\x02\x02\u040E\u0242\x03\x02\x02\x02\u040E\u0249\x03\x02" +
		"\x02\x02\u040E\u0250\x03\x02\x02\x02\u040E\u0257\x03\x02\x02\x02\u040E" +
		"\u0266\x03\x02\x02\x02\u040E\u0272\x03\x02\x02\x02\u040E\u0275\x03\x02" +
		"\x02\x02\u040E\u028E\x03\x02\x02\x02\u040E\u02A7\x03\x02\x02\x02\u040E" +
		"\u02B2\x03\x02\x02\x02\u040E\u02D1\x03\x02\x02\x02\u040E\u02EC\x03\x02" +
		"\x02\x02\u040E\u030B\x03\x02\x02\x02\u040E\u0314\x03\x02\x02\x02\u040E" +
		"\u0329\x03\x02\x02\x02\u040E\u032D\x03\x02\x02\x02\u040E\u0331\x03\x02" +
		"\x02\x02\u040E\u0335\x03\x02\x02\x02\u040E\u033A\x03\x02\x02\x02\u040E" +
		"\u0348\x03\x02\x02\x02\u040E\u0356\x03\x02\x02\x02\u040E\u0360\x03\x02" +
		"\x02\x02\u040E\u036E\x03\x02\x02\x02\u040E\u0372\x03\x02\x02\x02\u040E" +
		"\u0379\x03\x02\x02\x02\u040E\u0382\x03\x02\x02\x02\u040E\u0389\x03\x02" +
		"\x02\x02\u040E\u038B\x03\x02\x02\x02\u040E\u038D\x03\x02\x02\x02\u040E" +
		"\u0397\x03\x02\x02\x02\u040E\u03A1\x03\x02\x02\x02\u040E\u03A7\x03\x02" +
		"\x02\x02\u040E\u03AA\x03\x02\x02\x02\u040E\u03B6\x03\x02\x02\x02\u040E" +
		"\u03BA\x03\x02\x02\x02\u040E\u03BE\x03\x02\x02\x02\u040E\u03C3\x03\x02" +
		"\x02\x02\u040E\u03C6\x03\x02\x02\x02\u040E\u03D3\x03\x02\x02\x02\u040E" +
		"\u03D6\x03\x02\x02\x02\u040E\u03D9\x03\x02\x02\x02\u040E\u03DC\x03\x02" +
		"\x02\x02\u040E\u03E3\x03\x02\x02\x02\u040E\u03F2\x03\x02\x02\x02\u040E" +
		"\u0404\x03\x02\x02\x02\u040E\u0409\x03\x02\x02\x02\u040F\x13\x03\x02\x02" +
		"\x02\u0410\u0412\x05\x16\f\x02\u0411\u0410\x03\x02\x02\x02\u0411\u0412" +
		"\x03\x02\x02\x02\u0412\u0413\x03\x02\x02\x02\u0413\u0414\x05&\x14\x02" +
		"\u0414\x15\x03\x02\x02\x02\u0415\u0417\x07\xF5\x02\x02\u0416\u0418\x07" +
		"\xB4\x02\x02\u0417\u0416\x03\x02\x02\x02\u0417\u0418\x03\x02\x02\x02\u0418" +
		"\u0419\x03\x02\x02\x02\u0419\u041E\x05@!\x02\u041A\u041B\x07\x05\x02\x02" +
		"\u041B\u041D\x05@!\x02\u041C\u041A\x03\x02\x02\x02\u041D\u0420\x03\x02" +
		"\x02\x02\u041E\u041C\x03\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F" +
		"\x17\x03\x02\x02\x02\u0420\u041E\x03\x02\x02\x02\u0421\u0424\x05\x1A\x0E" +
		"\x02\u0422\u0424\x05\x1C\x0F\x02\u0423\u0421\x03\x02\x02\x02\u0423\u0422" +
		"\x03\x02\x02\x02\u0424\x19\x03\x02\x02\x02\u0425\u0426\x05\xCCg\x02\u0426" +
		"\u0429\x05\x86D\x02\u0427\u0428\x07\x95\x02\x02\u0428\u042A\x07\x96\x02" +
		"\x02\u0429\u0427\x03\x02\x02\x02\u0429\u042A\x03\x02\x02\x02\u042A\u042D" +
		"\x03\x02\x02\x02\u042B\u042C\x07*\x02\x02\u042C\u042E\x05v<\x02\u042D" +
		"\u042B\x03\x02\x02\x02\u042D\u042E\x03\x02\x02\x02\u042E\u0431\x03\x02" +
		"\x02\x02\u042F\u0430\x07\xF5\x02\x02\u0430\u0432\x05\x1E\x10\x02\u0431" +
		"\u042F\x03\x02\x02\x02\u0431\u0432\x03\x02\x02\x02\u0432\x1B\x03\x02\x02" +
		"\x02\u0433\u0434\x07|\x02\x02\u0434\u0437\x05\xB2Z\x02\u0435\u0436\t\x05" +
		"\x02\x02\u0436\u0438\x07\xB1\x02\x02\u0437\u0435\x03\x02\x02\x02\u0437" +
		"\u0438\x03\x02\x02\x02\u0438\x1D\x03\x02\x02\x02\u0439\u043A\x07\x03\x02" +
		"\x02\u043A\u043B\x05 \x11\x02\u043B\u043C\x07\x04\x02\x02\u043C\x1F\x03" +
		"\x02\x02\x02\u043D\u0442\x05\"\x12\x02\u043E\u043F\x07\x05\x02\x02\u043F" +
		"\u0441\x05\"\x12\x02\u0440\u043E\x03\x02\x02\x02\u0441\u0444\x03\x02\x02" +
		"\x02\u0442\u0440\x03\x02\x02\x02\u0442\u0443\x03\x02\x02\x02\u0443!\x03" +
		"\x02\x02\x02\u0444\u0442\x03\x02\x02\x02\u0445\u0446\x05\xD6l\x02\u0446" +
		"\u0447\x07\xFB\x02\x02\u0447\u0448\x05$\x13\x02\u0448#\x03\x02\x02\x02" +
		"\u0449\u044C\x07=\x02\x02\u044A\u044C\x05h5\x02\u044B\u0449\x03\x02\x02" +
		"\x02\u044B\u044A\x03\x02\x02\x02\u044C%\x03\x02\x02\x02\u044D\u0458\x05" +
		",\x17\x02\u044E\u044F\x07\xA0\x02\x02\u044F\u0450\x07\"\x02\x02\u0450" +
		"\u0455\x050\x19\x02\u0451\u0452\x07\x05\x02\x02\u0452\u0454\x050\x19\x02" +
		"\u0453\u0451\x03\x02\x02\x02\u0454\u0457\x03\x02\x02\x02\u0455\u0453\x03" +
		"\x02\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456\u0459\x03\x02\x02\x02\u0457" +
		"\u0455\x03\x02\x02\x02\u0458\u044E\x03\x02\x02\x02\u0458\u0459\x03\x02" +
		"\x02\x02\u0459\u045F\x03\x02\x02\x02\u045A\u045B\x07\x99\x02\x02\u045B" +
		"\u045D\x05*\x16\x02\u045C\u045E\t\x06\x02\x02\u045D\u045C\x03\x02\x02" +
		"\x02\u045D\u045E\x03\x02\x02\x02\u045E\u0460\x03\x02\x02\x02\u045F\u045A" +
		"\x03\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460\u046E\x03\x02\x02\x02" +
		"\u0461\u0462\x07}\x02\x02\u0462\u046F\x05(\x15\x02\u0463\u0464\x07S\x02" +
		"\x02\u0464\u0466\t\x07\x02\x02\u0465\u0467\x05*\x16\x02\u0466\u0465\x03" +
		"\x02\x02\x02\u0466\u0467\x03\x02\x02\x02\u0467\u0468\x03\x02\x02\x02\u0468" +
		"\u046C\t\x06\x02\x02\u0469\u046D\x07\x9D\x02\x02\u046A\u046B\x07\xF5\x02" +
		"\x02\u046B\u046D\x07\xDB\x02\x02\u046C\u0469\x03\x02\x02\x02\u046C\u046A" +
		"\x03\x02\x02\x02\u046D\u046F\x03\x02\x02\x02\u046E\u0461\x03\x02\x02\x02" +
		"\u046E\u0463\x03\x02\x02\x02\u046E\u046F\x03\x02\x02\x02\u046F\'\x03\x02" +
		"\x02\x02\u0470\u0473\x07\x16\x02\x02\u0471\u0473\x05*\x16\x02\u0472\u0470" +
		"\x03\x02\x02\x02\u0472\u0471\x03\x02\x02\x02\u0473)\x03\x02\x02\x02\u0474" +
		"\u0475\t\b\x02\x02\u0475+\x03\x02\x02\x02\u0476\u0477\b\x17\x01\x02\u0477" +
		"\u0478\x05.\x18\x02\u0478\u0487\x03\x02\x02\x02\u0479\u047A\f\x04\x02" +
		"\x02\u047A\u047C\x07o\x02\x02\u047B\u047D\x05B\"\x02\u047C\u047B\x03\x02" +
		"\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D\u047E\x03\x02\x02\x02\u047E" +
		"\u0486\x05,\x17\x05\u047F\u0480\f\x03\x02\x02\u0480\u0482\t\t\x02\x02" +
		"\u0481\u0483\x05B\"\x02\u0482\u0481\x03\x02\x02\x02\u0482\u0483\x03\x02" +
		"\x02\x02\u0483\u0484\x03\x02\x02\x02\u0484\u0486\x05,\x17\x04\u0485\u0479" +
		"\x03\x02\x02\x02\u0485\u047F\x03\x02\x02\x02\u0486\u0489\x03\x02\x02\x02" +
		"\u0487\u0485\x03\x02\x02\x02\u0487\u0488\x03\x02\x02\x02\u0488-\x03\x02" +
		"\x02\x02\u0489\u0487\x03\x02\x02\x02\u048A\u049B\x052\x1A\x02\u048B\u048C" +
		"\x07\xD6\x02\x02\u048C\u049B\x05\xB2Z\x02\u048D\u048E\x07\xEF\x02\x02" +
		"\u048E\u0493\x05h5\x02\u048F\u0490\x07\x05\x02\x02\u0490\u0492\x05h5\x02" +
		"\u0491\u048F\x03\x02\x02\x02\u0492\u0495\x03\x02\x02\x02\u0493\u0491\x03" +
		"\x02\x02\x02\u0493\u0494\x03\x02\x02\x02\u0494\u049B\x03\x02\x02\x02\u0495" +
		"\u0493\x03\x02\x02\x02\u0496\u0497\x07\x03\x02\x02\u0497\u0498\x05&\x14" +
		"\x02\u0498\u0499\x07\x04\x02\x02\u0499\u049B\x03\x02\x02\x02\u049A\u048A" +
		"\x03\x02\x02\x02\u049A\u048B\x03\x02\x02\x02\u049A\u048D\x03\x02\x02\x02" +
		"\u049A\u0496\x03\x02\x02\x02\u049B/\x03\x02\x02\x02\u049C\u049F\x05\xCA" +
		"f\x02\u049D\u049F\x05h5\x02\u049E\u049C\x03\x02\x02\x02\u049E\u049D\x03" +
		"\x02\x02\x02\u049F\u04A1\x03\x02\x02\x02\u04A0\u04A2\t\n\x02\x02\u04A1" +
		"\u04A0\x03\x02\x02\x02\u04A1\u04A2\x03\x02\x02\x02\u04A2\u04A5\x03\x02" +
		"\x02\x02\u04A3\u04A4\x07\x98\x02\x02\u04A4\u04A6\t\v\x02\x02\u04A5\u04A3" +
		"\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A61\x03\x02\x02\x02\u04A7" +
		"\u04A9\x07\xCA\x02\x02\u04A8\u04AA\x05B\"\x02\u04A9\u04A8\x03\x02\x02" +
		"\x02\u04A9\u04AA\x03\x02\x02\x02\u04AA\u04AB\x03\x02\x02\x02\u04AB\u04B0" +
		"\x05D#\x02\u04AC\u04AD\x07\x05\x02\x02\u04AD\u04AF\x05D#\x02\u04AE\u04AC" +
		"\x03\x02\x02\x02\u04AF\u04B2\x03\x02\x02\x02\u04B0\u04AE\x03\x02\x02\x02" +
		"\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04BC\x03\x02\x02\x02\u04B2\u04B0\x03" +
		"\x02\x02\x02\u04B3\u04B4\x07Z\x02\x02\u04B4\u04B9\x05F$\x02\u04B5\u04B6" +
		"\x07\x05\x02\x02\u04B6\u04B8\x05F$\x02\u04B7\u04B5\x03\x02\x02\x02\u04B8" +
		"\u04BB\x03\x02\x02\x02\u04B9\u04B7\x03\x02\x02\x02\u04B9\u04BA\x03\x02" +
		"\x02\x02\u04BA\u04BD\x03\x02\x02\x02\u04BB\u04B9\x03\x02\x02\x02\u04BC" +
		"\u04B3\x03\x02\x02\x02\u04BC\u04BD\x03\x02\x02\x02\u04BD\u04C0\x03\x02" +
		"\x02\x02\u04BE\u04BF\x07\xF3\x02\x02\u04BF\u04C1\x05j6\x02\u04C0\u04BE" +
		"\x03\x02\x02\x02\u04C0\u04C1\x03\x02\x02\x02\u04C1\u04C5\x03\x02\x02\x02" +
		"\u04C2\u04C3\x07b\x02\x02\u04C3\u04C4\x07\"\x02\x02\u04C4\u04C6\x054\x1B" +
		"\x02\u04C5\u04C2\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02\x02\u04C6\u04C9" +
		"\x03\x02\x02\x02\u04C7\u04C8\x07e\x02\x02\u04C8\u04CA\x05j6\x02\u04C9" +
		"\u04C7\x03\x02\x02\x02\u04C9\u04CA\x03\x02\x02\x02\u04CA\u04D4\x03\x02" +
		"\x02\x02\u04CB\u04CC\x07\xF4\x02\x02\u04CC\u04D1\x05<\x1F\x02\u04CD\u04CE" +
		"\x07\x05\x02\x02\u04CE\u04D0\x05<\x1F\x02\u04CF\u04CD\x03\x02\x02\x02" +
		"\u04D0\u04D3\x03\x02\x02\x02\u04D1\u04CF\x03\x02\x02\x02\u04D1\u04D2\x03" +
		"\x02\x02\x02\u04D2\u04D5\x03\x02\x02\x02\u04D3\u04D1\x03\x02\x02\x02\u04D4" +
		"\u04CB\x03\x02\x02\x02\u04D4\u04D5\x03\x02\x02\x02\u04D53\x03\x02\x02" +
		"\x02\u04D6\u04D8\x05B\"\x02\u04D7\u04D6\x03\x02\x02\x02\u04D7\u04D8\x03" +
		"\x02\x02\x02\u04D8\u04D9\x03\x02\x02\x02\u04D9\u04DE\x056\x1C\x02\u04DA" +
		"\u04DB\x07\x05\x02\x02\u04DB\u04DD\x056\x1C\x02\u04DC\u04DA\x03\x02\x02" +
		"\x02\u04DD\u04E0\x03\x02\x02\x02\u04DE\u04DC\x03\x02\x02\x02\u04DE\u04DF" +
		"\x03\x02\x02\x02\u04DF5\x03\x02\x02\x02\u04E0\u04DE\x03\x02\x02\x02\u04E1" +
		"\u050A\x058\x1D\x02\u04E2\u04E3\x07\xC1\x02\x02\u04E3\u04EC\x07\x03\x02" +
		"\x02\u04E4\u04E9\x05:\x1E\x02\u04E5\u04E6\x07\x05\x02\x02\u04E6\u04E8" +
		"\x05:\x1E\x02\u04E7\u04E5\x03\x02\x02\x02\u04E8\u04EB\x03\x02\x02\x02" +
		"\u04E9\u04E7\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EA\u04ED\x03" +
		"\x02\x02\x02\u04EB\u04E9\x03\x02\x02\x02\u04EC\u04E4\x03\x02\x02\x02\u04EC" +
		"\u04ED\x03\x02\x02\x02\u04ED\u04EE\x03\x02\x02\x02\u04EE\u050A\x07\x04" +
		"\x02\x02\u04EF\u04F0\x070\x02\x02\u04F0\u04F9\x07\x03\x02\x02\u04F1\u04F6" +
		"\x05:\x1E\x02\u04F2\u04F3\x07\x05\x02\x02\u04F3\u04F5\x05:\x1E\x02\u04F4" +
		"\u04F2\x03\x02\x02\x02\u04F5\u04F8\x03\x02\x02\x02\u04F6\u04F4\x03\x02" +
		"\x02\x02\u04F6\u04F7\x03\x02\x02\x02\u04F7\u04FA\x03\x02\x02\x02\u04F8" +
		"\u04F6\x03\x02\x02\x02\u04F9\u04F1\x03\x02\x02\x02\u04F9\u04FA\x03\x02" +
		"\x02\x02\u04FA\u04FB\x03\x02\x02\x02\u04FB\u050A\x07\x04\x02\x02\u04FC" +
		"\u04FD\x07c\x02\x02\u04FD\u04FE\x07\xCE\x02\x02\u04FE\u04FF\x07\x03\x02" +
		"\x02\u04FF\u0504\x058\x1D\x02\u0500\u0501\x07\x05\x02\x02\u0501\u0503" +
		"\x058\x1D\x02\u0502\u0500\x03\x02\x02\x02\u0503\u0506\x03\x02\x02\x02" +
		"\u0504\u0502\x03\x02\x02\x02\u0504\u0505\x03\x02\x02\x02\u0505\u0507\x03" +
		"\x02\x02\x02\u0506\u0504\x03\x02\x02\x02\u0507\u0508\x07\x04\x02\x02\u0508" +
		"\u050A\x03\x02\x02\x02\u0509\u04E1\x03\x02\x02\x02\u0509\u04E2\x03\x02" +
		"\x02\x02\u0509\u04EF\x03\x02\x02\x02\u0509\u04FC\x03\x02\x02\x02\u050A" +
		"7\x03\x02\x02\x02\u050B\u0514\x07\x03\x02\x02\u050C\u0511\x05:\x1E\x02" +
		"\u050D\u050E\x07\x05\x02\x02\u050E\u0510\x05:\x1E\x02\u050F\u050D\x03" +
		"\x02\x02\x02\u0510\u0513\x03\x02\x02\x02\u0511\u050F\x03\x02\x02\x02\u0511" +
		"\u0512\x03\x02\x02\x02\u0512\u0515\x03\x02\x02\x02\u0513\u0511\x03\x02" +
		"\x02\x02\u0514\u050C\x03\x02\x02\x02\u0514\u0515\x03\x02\x02\x02\u0515" +
		"\u0516\x03\x02\x02\x02\u0516\u0519\x07\x04\x02\x02\u0517\u0519\x05:\x1E" +
		"\x02\u0518\u050B\x03\x02\x02\x02\u0518\u0517\x03\x02\x02\x02\u05199\x03" +
		"\x02\x02\x02\u051A\u051D\x05\xCAf\x02\u051B\u051D\x05h5\x02\u051C\u051A" +
		"\x03\x02\x02\x02\u051C\u051B\x03\x02\x02\x02\u051D;\x03\x02\x02\x02\u051E" +
		"\u051F\x05\xD6l\x02\u051F\u0520\x07\x1C\x02\x02\u0520\u0521\x07\x03\x02" +
		"\x02\u0521\u0522\x05> \x02\u0522\u0523\x07\x04\x02\x02\u0523=\x03\x02" +
		"\x02\x02\u0524\u0526\x05\xD6l\x02\u0525\u0524\x03\x02\x02\x02\u0525\u0526" +
		"\x03\x02\x02\x02\u0526\u0531\x03\x02\x02\x02\u0527\u0528\x07\xA5\x02\x02" +
		"\u0528\u0529\x07\"\x02\x02\u0529\u052E\x05h5\x02\u052A\u052B\x07\x05\x02" +
		"\x02\u052B\u052D\x05h5\x02\u052C\u052A\x03\x02\x02\x02\u052D\u0530\x03" +
		"\x02\x02\x02\u052E\u052C\x03\x02\x02\x02\u052E\u052F\x03\x02\x02\x02\u052F" +
		"\u0532\x03\x02\x02\x02\u0530\u052E\x03\x02\x02\x02\u0531\u0527\x03\x02" +
		"\x02\x02\u0531\u0532\x03\x02\x02\x02\u0532\u053D\x03\x02\x02\x02\u0533" +
		"\u0534\x07\xA0\x02\x02\u0534\u0535\x07\"\x02\x02\u0535\u053A\x050\x19" +
		"\x02\u0536\u0537\x07\x05\x02\x02\u0537\u0539\x050\x19\x02\u0538\u0536" +
		"\x03\x02\x02\x02\u0539\u053C\x03\x02\x02\x02\u053A\u0538\x03\x02\x02\x02" +
		"\u053A\u053B\x03\x02\x02";
	private static readonly _serializedATNSegment3: string =
		"\x02\u053B\u053E\x03\x02\x02\x02\u053C\u053A\x03\x02\x02\x02\u053D\u0533" +
		"\x03\x02\x02\x02\u053D\u053E\x03\x02\x02\x02\u053E\u0540\x03\x02\x02\x02" +
		"\u053F\u0541\x05\x94K\x02\u0540\u053F\x03\x02\x02\x02\u0540\u0541\x03" +
		"\x02\x02\x02\u0541?\x03\x02\x02\x02\u0542\u0544\x05\xD6l\x02\u0543\u0545" +
		"\x05d3\x02\u0544\u0543\x03\x02\x02\x02\u0544\u0545\x03\x02\x02\x02\u0545" +
		"\u0546\x03\x02\x02\x02\u0546\u0547\x07\x1C\x02\x02\u0547\u0548\x07\x03" +
		"\x02\x02\u0548\u0549\x05\x14\v\x02\u0549\u054A\x07\x04\x02\x02\u054AA" +
		"\x03\x02\x02\x02\u054B\u054C\t\f\x02\x02\u054CC\x03\x02\x02\x02\u054D" +
		"\u0550\x05\xCAf\x02\u054E\u0550\x05h5\x02\u054F\u054D\x03\x02\x02\x02" +
		"\u054F\u054E\x03\x02\x02\x02\u0550\u0555\x03\x02\x02\x02\u0551\u0553\x07" +
		"\x1C\x02\x02\u0552\u0551\x03\x02\x02\x02\u0552\u0553\x03\x02\x02\x02\u0553" +
		"\u0554\x03\x02\x02\x02\u0554\u0556\x05\xD6l\x02\u0555\u0552\x03\x02\x02" +
		"\x02\u0555\u0556\x03\x02\x02\x02\u0556\u0560\x03\x02\x02\x02\u0557\u0558" +
		"\x05p9\x02\u0558\u0559\x07\x06\x02\x02\u0559\u055C\x07\u0103\x02\x02\u055A" +
		"\u055B\x07\x1C\x02\x02\u055B\u055D\x05d3\x02\u055C\u055A\x03\x02\x02\x02" +
		"\u055C\u055D\x03\x02\x02\x02\u055D\u0560\x03\x02\x02\x02\u055E\u0560\x07" +
		"\u0103\x02\x02\u055F\u054F\x03\x02\x02\x02\u055F\u0557\x03\x02\x02\x02" +
		"\u055F\u055E\x03\x02\x02\x02\u0560E\x03\x02\x02\x02\u0561\u0562\b$\x01" +
		"\x02\u0562\u0563\x05L\'\x02\u0563\u0576\x03\x02\x02\x02\u0564\u0572\f" +
		"\x04\x02\x02\u0565\u0566\x07/\x02\x02\u0566\u0567\x07v\x02\x02\u0567\u0573" +
		"\x05L\'\x02\u0568\u0569\x05H%\x02\u0569\u056A\x07v\x02\x02\u056A\u056B" +
		"\x05F$\x02\u056B\u056C\x05J&\x02\u056C\u0573\x03\x02\x02\x02\u056D\u056E" +
		"\x07\x8C\x02\x02\u056E\u056F\x05H%\x02\u056F\u0570\x07v\x02\x02\u0570" +
		"\u0571\x05L\'\x02\u0571\u0573\x03\x02\x02\x02\u0572\u0565\x03\x02\x02" +
		"\x02\u0572\u0568\x03\x02\x02\x02\u0572\u056D\x03\x02\x02\x02\u0573\u0575" +
		"\x03\x02\x02\x02\u0574\u0564\x03\x02\x02\x02\u0575\u0578\x03\x02\x02\x02" +
		"\u0576\u0574\x03\x02\x02\x02\u0576\u0577\x03\x02\x02\x02\u0577G\x03\x02" +
		"\x02\x02\u0578\u0576\x03\x02\x02\x02\u0579\u057B\x07l\x02\x02\u057A\u0579" +
		"\x03\x02\x02\x02\u057A\u057B\x03\x02\x02\x02\u057B\u0589\x03\x02\x02\x02" +
		"\u057C\u057E\x07z\x02\x02\u057D\u057F\x07\xA2\x02\x02\u057E\u057D\x03" +
		"\x02\x02\x02\u057E\u057F\x03\x02\x02\x02\u057F\u0589\x03\x02\x02\x02\u0580" +
		"\u0582\x07\xBD\x02\x02\u0581\u0583\x07\xA2\x02\x02\u0582\u0581\x03\x02" +
		"\x02\x02\u0582\u0583\x03\x02\x02\x02\u0583\u0589\x03\x02\x02\x02\u0584" +
		"\u0586\x07[\x02\x02\u0585\u0587\x07\xA2\x02\x02\u0586\u0585\x03\x02\x02" +
		"\x02\u0586\u0587\x03\x02\x02\x02\u0587\u0589\x03\x02\x02\x02\u0588\u057A" +
		"\x03\x02\x02\x02\u0588\u057C\x03\x02\x02\x02\u0588\u0580\x03\x02\x02\x02" +
		"\u0588\u0584\x03\x02\x02\x02\u0589I\x03\x02\x02\x02\u058A\u058B\x07\x9B" +
		"\x02\x02\u058B\u0599\x05j6\x02\u058C\u058D\x07\xED\x02\x02\u058D\u058E" +
		"\x07\x03\x02\x02\u058E\u0593\x05\xD6l\x02\u058F\u0590\x07\x05\x02\x02" +
		"\u0590\u0592\x05\xD6l\x02\u0591\u058F\x03\x02\x02\x02\u0592\u0595\x03" +
		"\x02\x02\x02\u0593\u0591\x03\x02\x02\x02\u0593\u0594\x03\x02\x02\x02\u0594" +
		"\u0596\x03\x02\x02\x02\u0595\u0593\x03\x02\x02\x02\u0596\u0597\x07\x04" +
		"\x02\x02\u0597\u0599\x03\x02\x02\x02\u0598\u058A\x03\x02\x02\x02\u0598" +
		"\u058C\x03\x02\x02\x02\u0599K\x03\x02\x02\x02\u059A\u05A1\x05P)\x02\u059B" +
		"\u059C\x07\xD8\x02\x02\u059C\u059D\x05N(\x02\u059D\u059E\x07\x03\x02\x02" +
		"\u059E\u059F\x05h5\x02\u059F\u05A0\x07\x04\x02\x02\u05A0\u05A2\x03\x02" +
		"\x02\x02\u05A1\u059B\x03\x02\x02\x02\u05A1\u05A2\x03\x02\x02\x02\u05A2" +
		"M\x03\x02\x02\x02\u05A3\u05A4\t\r\x02\x02\u05A4O\x03\x02\x02\x02\u05A5" +
		"\u05F8\x05^0\x02\u05A6\u05A7\x07\x86\x02\x02\u05A7\u05B2\x07\x03\x02\x02" +
		"\u05A8\u05A9\x07\xA5\x02\x02\u05A9\u05AA\x07\"\x02\x02\u05AA\u05AF\x05" +
		"h5\x02\u05AB\u05AC\x07\x05\x02\x02\u05AC\u05AE\x05h5\x02\u05AD\u05AB\x03" +
		"\x02\x02\x02\u05AE\u05B1\x03\x02\x02\x02\u05AF\u05AD\x03\x02\x02\x02\u05AF" +
		"\u05B0\x03\x02\x02\x02\u05B0\u05B3\x03\x02\x02\x02\u05B1\u05AF\x03\x02" +
		"\x02\x02\u05B2\u05A8\x03\x02\x02\x02\u05B2\u05B3\x03\x02\x02\x02\u05B3" +
		"\u05BE\x03\x02\x02\x02\u05B4\u05B5\x07\xA0\x02\x02\u05B5\u05B6\x07\"\x02" +
		"\x02\u05B6\u05BB\x050\x19\x02\u05B7\u05B8\x07\x05\x02\x02\u05B8\u05BA" +
		"\x050\x19\x02\u05B9\u05B7\x03\x02\x02\x02\u05BA\u05BD\x03\x02\x02\x02" +
		"\u05BB\u05B9\x03\x02\x02\x02\u05BB\u05BC\x03\x02\x02\x02\u05BC\u05BF\x03" +
		"\x02\x02\x02\u05BD\u05BB\x03\x02\x02\x02\u05BE\u05B4\x03\x02\x02\x02\u05BE" +
		"\u05BF\x03\x02\x02\x02\u05BF\u05C9\x03\x02\x02\x02\u05C0\u05C1\x07\x88" +
		"\x02\x02\u05C1\u05C6\x05R*\x02\u05C2\u05C3\x07\x05\x02\x02\u05C3\u05C5" +
		"\x05R*\x02\u05C4\u05C2\x03\x02\x02\x02\u05C5\u05C8\x03\x02\x02\x02\u05C6" +
		"\u05C4\x03\x02\x02\x02\u05C6\u05C7\x03\x02\x02\x02\u05C7\u05CA\x03\x02" +
		"\x02\x02\u05C8\u05C6\x03\x02\x02\x02\u05C9\u05C0\x03\x02\x02\x02\u05C9" +
		"\u05CA\x03\x02\x02\x02\u05CA\u05CC\x03\x02\x02\x02\u05CB\u05CD\x05T+\x02" +
		"\u05CC\u05CB\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02\x02\u05CD\u05D1\x03" +
		"\x02\x02\x02\u05CE\u05CF\x07\x15\x02\x02\u05CF\u05D0\x07\x83\x02\x02\u05D0" +
		"\u05D2\x05X-\x02\u05D1\u05CE\x03\x02\x02\x02\u05D1\u05D2\x03\x02\x02\x02" +
		"\u05D2\u05D4\x03\x02\x02\x02\u05D3\u05D5\t\x0E\x02\x02\u05D4\u05D3\x03" +
		"\x02\x02\x02\u05D4\u05D5\x03\x02\x02\x02\u05D5\u05D6\x03\x02\x02\x02\u05D6" +
		"\u05D7\x07\xA9\x02\x02\u05D7\u05D8\x07\x03\x02\x02\u05D8\u05D9\x05\x9A" +
		"N\x02\u05D9\u05E3\x07\x04\x02\x02\u05DA\u05DB\x07\xD3\x02\x02\u05DB\u05E0" +
		"\x05Z.\x02\u05DC\u05DD\x07\x05\x02\x02\u05DD\u05DF\x05Z.\x02\u05DE\u05DC" +
		"\x03\x02\x02\x02\u05DF\u05E2\x03\x02\x02\x02\u05E0\u05DE\x03\x02\x02\x02" +
		"\u05E0\u05E1\x03\x02\x02\x02\u05E1\u05E4\x03\x02\x02\x02\u05E2\u05E0\x03" +
		"\x02\x02\x02\u05E3\u05DA\x03\x02\x02\x02\u05E3\u05E4\x03\x02\x02\x02\u05E4" +
		"\u05E5\x03\x02\x02\x02\u05E5\u05E6\x07C\x02\x02\u05E6\u05EB\x05\\/\x02" +
		"\u05E7\u05E8\x07\x05\x02\x02\u05E8\u05EA\x05\\/\x02\u05E9\u05E7\x03\x02" +
		"\x02\x02\u05EA\u05ED\x03\x02\x02\x02\u05EB\u05E9\x03\x02\x02\x02\u05EB" +
		"\u05EC\x03\x02\x02\x02\u05EC\u05EE\x03\x02\x02\x02\u05ED\u05EB\x03\x02" +
		"\x02\x02\u05EE\u05F6\x07\x04\x02\x02\u05EF\u05F1\x07\x1C\x02\x02\u05F0" +
		"\u05EF\x03\x02\x02\x02\u05F0\u05F1\x03\x02\x02\x02\u05F1\u05F2\x03\x02" +
		"\x02\x02\u05F2\u05F4\x05\xD6l\x02\u05F3\u05F5\x05d3\x02\u05F4\u05F3\x03" +
		"\x02\x02\x02\u05F4\u05F5\x03\x02\x02\x02\u05F5\u05F7\x03\x02\x02\x02\u05F6" +
		"\u05F0\x03\x02\x02\x02\u05F6\u05F7\x03\x02\x02\x02\u05F7\u05F9\x03\x02" +
		"\x02\x02\u05F8\u05A6\x03\x02\x02\x02\u05F8\u05F9\x03\x02\x02\x02\u05F9" +
		"Q\x03\x02\x02\x02\u05FA\u05FB\x05h5\x02\u05FB\u05FC\x07\x1C\x02\x02\u05FC" +
		"\u05FD\x05\xD6l\x02\u05FDS\x03\x02\x02\x02\u05FE\u05FF\x07\x9C\x02\x02" +
		"\u05FF\u0600\x07\xC2\x02\x02\u0600\u0601\x07\xAA\x02\x02\u0601\u060A\x07" +
		"\x83\x02\x02\u0602\u0603\x07\x16\x02\x02\u0603\u0604\x07\xC3\x02\x02\u0604" +
		"\u0605\x07\xAA\x02\x02\u0605\u0607\x07\x83\x02\x02\u0606\u0608\x05V,\x02" +
		"\u0607\u0606\x03\x02\x02\x02\u0607\u0608\x03\x02\x02\x02\u0608\u060A\x03" +
		"\x02\x02\x02\u0609\u05FE\x03\x02\x02\x02\u0609\u0602\x03\x02\x02\x02\u060A" +
		"U\x03\x02\x02\x02\u060B\u060C\x07\xCF\x02\x02\u060C\u060D\x07I\x02\x02" +
		"\u060D\u0615\x07\x85\x02\x02\u060E\u060F\x07\x9A\x02\x02\u060F\u0610\x07" +
		"I\x02\x02\u0610\u0615\x07\x85\x02\x02\u0611\u0612\x07\xF5\x02\x02\u0612" +
		"\u0613\x07\xE8\x02\x02\u0613\u0615\x07\xC3\x02\x02\u0614\u060B\x03\x02" +
		"\x02\x02\u0614\u060E\x03\x02\x02\x02\u0614\u0611\x03\x02\x02\x02\u0615" +
		"W\x03\x02\x02\x02\u0616\u0617\x07\x07\x02\x02\u0617\u0618\x07\xDE\x02" +
		"\x02\u0618\u0619\x07\x8D\x02\x02\u0619\u062A\x07\xC2\x02\x02\u061A\u061B" +
		"\x07\x07\x02\x02\u061B\u061C\x07\xA7\x02\x02\u061C\u061D\x07x\x02\x02" +
		"\u061D\u062A\x07\xC2\x02\x02\u061E\u061F\x07\x07\x02\x02\u061F\u0620\x07" +
		"\xDE\x02\x02\u0620\u0621\x07V\x02\x02\u0621\u062A\x05\xD6l\x02\u0622\u0623" +
		"\x07\x07\x02\x02\u0623\u0624\x07\xDE\x02\x02\u0624\u0625\x07x\x02\x02" +
		"\u0625\u062A\x05\xD6l\x02\u0626\u0627\x07\x07\x02\x02\u0627\u0628\x07" +
		"\xDE\x02\x02\u0628\u062A\x05\xD6l\x02\u0629\u0616\x03\x02\x02\x02\u0629" +
		"\u061A\x03\x02\x02\x02\u0629\u061E\x03\x02\x02\x02\u0629\u0622\x03\x02" +
		"\x02\x02\u0629\u0626\x03\x02\x02\x02\u062AY\x03\x02\x02\x02\u062B\u062C" +
		"\x05\xD6l\x02\u062C\u062D\x07\xFB\x02\x02\u062D\u062E\x07\x03\x02\x02" +
		"\u062E\u0633\x05\xD6l\x02\u062F\u0630\x07\x05\x02\x02\u0630\u0632\x05" +
		"\xD6l\x02\u0631\u062F\x03\x02\x02\x02\u0632\u0635\x03\x02\x02\x02\u0633" +
		"\u0631\x03\x02\x02\x02\u0633\u0634\x03\x02\x02\x02\u0634\u0636\x03\x02" +
		"\x02\x02\u0635\u0633\x03\x02\x02\x02\u0636\u0637\x07\x04\x02\x02\u0637" +
		"[\x03\x02\x02\x02\u0638\u0639\x05\xD6l\x02\u0639\u063A\x07\x1C\x02\x02" +
		"\u063A\u063B\x05h5\x02\u063B]\x03\x02\x02\x02\u063C\u0644\x05f4\x02\u063D" +
		"\u063F\x07\x1C\x02\x02\u063E\u063D\x03\x02\x02\x02\u063E\u063F\x03\x02" +
		"\x02\x02\u063F\u0640\x03\x02\x02\x02\u0640\u0642\x05\xD6l\x02\u0641\u0643" +
		"\x05d3\x02\u0642\u0641\x03\x02\x02\x02\u0642\u0643\x03\x02\x02\x02\u0643" +
		"\u0645\x03\x02\x02\x02\u0644\u063E\x03\x02\x02\x02\u0644\u0645\x03\x02" +
		"\x02\x02\u0645_\x03\x02\x02\x02\u0646\u0647\x07\x03\x02\x02\u0647\u064C" +
		"\x05\xCCg\x02\u0648\u0649\x07\x05\x02\x02\u0649\u064B\x05\xCCg\x02\u064A" +
		"\u0648\x03\x02\x02\x02\u064B\u064E\x03\x02\x02\x02\u064C\u064A\x03\x02" +
		"\x02\x02\u064C\u064D\x03\x02\x02\x02\u064D\u064F\x03\x02\x02\x02\u064E" +
		"\u064C\x03\x02\x02\x02\u064F\u0650\x07\x04\x02\x02\u0650a\x03\x02\x02" +
		"\x02\u0651\u0652\x07\x03\x02\x02\u0652\u0657\x05\xCAf\x02\u0653\u0654" +
		"\x07\x05\x02\x02\u0654\u0656\x05\xCAf\x02\u0655\u0653\x03\x02\x02\x02" +
		"\u0656\u0659\x03\x02\x02\x02\u0657\u0655\x03\x02\x02\x02\u0657\u0658\x03" +
		"\x02\x02\x02\u0658\u065A\x03\x02\x02\x02\u0659\u0657\x03\x02\x02\x02\u065A" +
		"\u065B\x07\x04\x02\x02\u065Bc\x03\x02\x02\x02\u065C\u065D\x07\x03\x02" +
		"\x02\u065D\u0662\x05\xD6l\x02\u065E\u065F\x07\x05\x02\x02\u065F\u0661" +
		"\x05\xD6l\x02\u0660\u065E\x03\x02\x02\x02\u0661\u0664\x03\x02\x02\x02" +
		"\u0662\u0660\x03\x02\x02\x02\u0662\u0663\x03\x02\x02\x02\u0663\u0665\x03" +
		"\x02\x02\x02\u0664\u0662\x03\x02\x02\x02\u0665\u0666\x07\x04\x02\x02\u0666" +
		"e\x03\x02\x02\x02\u0667\u0685\x05\xB0Y\x02\u0668\u0669\x07\x03\x02\x02" +
		"\u0669\u066A\x05\x14\v\x02\u066A\u066B\x07\x04\x02\x02\u066B\u0685\x03" +
		"\x02\x02\x02\u066C\u066D\x07\xE9\x02\x02\u066D\u066E\x07\x03\x02\x02\u066E" +
		"\u0673\x05h5\x02\u066F\u0670\x07\x05\x02\x02\u0670\u0672\x05h5\x02\u0671" +
		"\u066F\x03\x02\x02\x02\u0672\u0675\x03\x02\x02\x02\u0673\u0671\x03\x02" +
		"\x02\x02\u0673\u0674\x03\x02\x02\x02\u0674\u0676\x03\x02\x02\x02\u0675" +
		"\u0673\x03\x02\x02\x02\u0676\u0679\x07\x04\x02\x02\u0677\u0678\x07\xF5" +
		"\x02\x02\u0678\u067A\x07\xA1\x02\x02\u0679\u0677\x03\x02\x02\x02\u0679" +
		"\u067A\x03\x02\x02\x02\u067A\u0685\x03\x02\x02\x02\u067B\u067C\x07y\x02" +
		"\x02\u067C\u067D\x07\x03\x02\x02\u067D\u067E\x05\x14\v\x02\u067E\u067F" +
		"\x07\x04\x02\x02\u067F\u0685\x03\x02\x02\x02\u0680\u0681\x07\x03\x02\x02" +
		"\u0681\u0682\x05F$\x02\u0682\u0683\x07\x04\x02\x02\u0683\u0685\x03\x02" +
		"\x02\x02\u0684\u0667\x03\x02\x02\x02\u0684\u0668\x03\x02\x02\x02\u0684" +
		"\u066C\x03\x02\x02\x02\u0684\u067B\x03\x02\x02\x02\u0684\u0680\x03\x02" +
		"\x02\x02\u0685g\x03\x02\x02\x02\u0686\u0687\x05j6\x02\u0687i\x03\x02\x02" +
		"\x02\u0688\u0689\b6\x01\x02\u0689\u068B\x05n8\x02\u068A\u068C\x05l7\x02" +
		"\u068B\u068A\x03\x02\x02\x02\u068B\u068C\x03\x02\x02\x02\u068C\u0690\x03" +
		"\x02\x02\x02\u068D\u068E\x07\x95\x02\x02\u068E\u0690\x05j6\x05\u068F\u0688" +
		"\x03\x02\x02\x02\u068F\u068D\x03\x02\x02\x02\u0690\u0699\x03\x02\x02\x02" +
		"\u0691\u0692\f\x04\x02\x02\u0692\u0693\x07\x19\x02\x02\u0693\u0698\x05" +
		"j6\x05\u0694\u0695\f\x03\x02\x02\u0695\u0696\x07\x9F\x02\x02\u0696\u0698" +
		"\x05j6\x04\u0697\u0691\x03\x02\x02\x02\u0697\u0694\x03\x02\x02\x02\u0698" +
		"\u069B\x03\x02\x02\x02\u0699\u0697\x03\x02\x02\x02\u0699\u069A\x03\x02" +
		"\x02\x02\u069Ak\x03\x02\x02\x02\u069B\u0699\x03\x02\x02\x02\u069C\u069D" +
		"\x05z>\x02\u069D\u069E\x05n8\x02\u069E\u06DA\x03\x02\x02\x02\u069F\u06A0" +
		"\x05z>\x02\u06A0\u06A1\x05|?\x02\u06A1\u06A2\x07\x03\x02\x02\u06A2\u06A3" +
		"\x05\x14\v\x02\u06A3\u06A4\x07\x04\x02\x02\u06A4\u06DA\x03\x02\x02\x02" +
		"\u06A5\u06A7\x07\x95\x02\x02\u06A6\u06A5\x03\x02\x02\x02\u06A6\u06A7\x03" +
		"\x02\x02\x02\u06A7\u06A8\x03\x02\x02\x02\u06A8\u06A9\x07!\x02\x02\u06A9" +
		"\u06AA\x05n8\x02\u06AA\u06AB\x07\x19\x02\x02\u06AB\u06AC\x05n8\x02\u06AC" +
		"\u06DA\x03\x02\x02\x02\u06AD\u06AF\x07\x95\x02\x02\u06AE\u06AD\x03\x02" +
		"\x02\x02\u06AE\u06AF\x03\x02\x02\x02\u06AF\u06B0\x03\x02\x02\x02\u06B0" +
		"\u06B1\x07i\x02\x02\u06B1\u06B2\x07\x03\x02\x02\u06B2\u06B7\x05h5\x02" +
		"\u06B3\u06B4\x07\x05\x02\x02\u06B4\u06B6\x05h5\x02\u06B5\u06B3\x03\x02" +
		"\x02\x02\u06B6\u06B9\x03\x02\x02\x02\u06B7\u06B5\x03\x02\x02\x02\u06B7" +
		"\u06B8\x03\x02\x02\x02\u06B8\u06BA\x03\x02\x02\x02\u06B9\u06B7\x03\x02" +
		"\x02\x02\u06BA\u06BB\x07\x04\x02\x02\u06BB\u06DA\x03\x02\x02\x02\u06BC" +
		"\u06BE\x07\x95\x02\x02\u06BD\u06BC\x03\x02\x02\x02\u06BD\u06BE\x03\x02" +
		"\x02\x02\u06BE\u06BF\x03\x02\x02\x02\u06BF\u06C0\x07i\x02\x02\u06C0\u06C1" +
		"\x07\x03\x02\x02\u06C1\u06C2\x05\x14\v\x02\u06C2\u06C3\x07\x04\x02\x02" +
		"\u06C3\u06DA\x03\x02\x02\x02\u06C4\u06C6\x07\x95\x02\x02\u06C5\u06C4\x03" +
		"\x02\x02\x02\u06C5\u06C6\x03\x02\x02\x02\u06C6\u06C7\x03\x02\x02\x02\u06C7" +
		"\u06C8\x07|\x02\x02\u06C8\u06CB\x05n8\x02\u06C9\u06CA\x07K\x02\x02\u06CA" +
		"\u06CC\x05n8\x02\u06CB\u06C9\x03\x02\x02\x02\u06CB\u06CC\x03\x02\x02\x02" +
		"\u06CC\u06DA\x03\x02\x02\x02\u06CD\u06CF\x07t\x02\x02\u06CE\u06D0\x07" +
		"\x95\x02\x02\u06CF\u06CE\x03\x02\x02\x02\u06CF\u06D0\x03\x02\x02\x02\u06D0" +
		"\u06D1\x03\x02\x02\x02\u06D1\u06DA\x07\x96\x02\x02\u06D2\u06D4\x07t\x02" +
		"\x02\u06D3\u06D5\x07\x95\x02\x02\u06D4\u06D3\x03\x02\x02\x02\u06D4\u06D5" +
		"\x03\x02\x02\x02\u06D5\u06D6\x03\x02\x02\x02\u06D6\u06D7\x07D\x02\x02" +
		"\u06D7\u06D8\x07Z\x02\x02\u06D8\u06DA\x05n8\x02\u06D9\u069C\x03\x02\x02" +
		"\x02\u06D9\u069F\x03\x02\x02\x02\u06D9\u06A6\x03\x02\x02\x02\u06D9\u06AE" +
		"\x03\x02\x02\x02\u06D9\u06BD\x03\x02\x02\x02\u06D9\u06C5\x03\x02\x02\x02" +
		"\u06D9\u06CD\x03\x02\x02\x02\u06D9\u06D2\x03\x02\x02\x02\u06DAm\x03\x02" +
		"\x02\x02\u06DB\u06DC\b8\x01\x02\u06DC\u06E0\x05p9\x02\u06DD\u06DE\t\x0F" +
		"\x02\x02\u06DE\u06E0\x05n8\x06\u06DF\u06DB\x03\x02\x02\x02\u06DF\u06DD" +
		"\x03\x02\x02\x02\u06E0\u06EF\x03\x02\x02\x02\u06E1\u06E2\f\x05\x02\x02" +
		"\u06E2\u06E3\t\x10\x02\x02\u06E3\u06EE\x05n8\x06\u06E4\u06E5\f\x04\x02" +
		"\x02\u06E5\u06E6\t\x0F\x02\x02\u06E6\u06EE\x05n8\x05\u06E7\u06E8\f\x03" +
		"\x02\x02\u06E8\u06E9\x07\u0106\x02\x02\u06E9\u06EE\x05n8\x04\u06EA\u06EB" +
		"\f\x07\x02\x02\u06EB\u06EC\x07\x1E\x02\x02\u06EC\u06EE\x05x=\x02\u06ED" +
		"\u06E1\x03\x02\x02\x02\u06ED\u06E4\x03\x02\x02\x02\u06ED\u06E7\x03\x02" +
		"\x02\x02\u06ED\u06EA\x03\x02\x02\x02\u06EE\u06F1\x03\x02\x02\x02\u06EF" +
		"\u06ED\x03\x02\x02\x02\u06EF\u06F0\x03\x02\x02\x02\u06F0o\x03\x02\x02" +
		"\x02\u06F1\u06EF\x03\x02\x02\x02\u06F2\u06F3\b9\x01\x02\u06F3\u07EC\x07" +
		"\x96\x02\x02\u06F4\u07EC\x05\x80A\x02\u06F5\u06F6\x05\xD6l\x02\u06F6\u06F7" +
		"\x05v<\x02\u06F7\u07EC\x03\x02\x02\x02\u06F8\u06F9\x07F\x02\x02\u06F9" +
		"\u06FA\x07\xAE\x02\x02\u06FA\u07EC\x05v<\x02\u06FB\u07EC\x05\xD8m\x02" +
		"\u06FC\u07EC\x05~@\x02\u06FD\u07EC\x05v<\x02\u06FE\u07EC\x07\u010A\x02" +
		"\x02\u06FF\u07EC\x07\u0107\x02\x02\u0700\u0701\x07\xAC\x02\x02\u0701\u0702" +
		"\x07\x03\x02\x02\u0702\u0703\x05n8\x02\u0703\u0704\x07i\x02\x02\u0704" +
		"\u0705\x05n8\x02\u0705\u0706\x07\x04\x02\x02\u0706\u07EC\x03\x02\x02\x02" +
		"\u0707\u0708\x07\x03\x02\x02\u0708\u070B\x05h5\x02\u0709\u070A\x07\x05" +
		"\x02\x02\u070A\u070C\x05h5\x02\u070B\u0709\x03\x02\x02\x02\u070C\u070D" +
		"\x03\x02\x02\x02\u070D\u070B\x03\x02\x02\x02\u070D\u070E\x03\x02\x02\x02" +
		"\u070E\u070F\x03\x02\x02\x02\u070F\u0710\x07\x04\x02\x02\u0710\u07EC\x03" +
		"\x02\x02\x02\u0711\u0712\x07\xC2\x02\x02\u0712\u0713\x07\x03\x02\x02\u0713" +
		"\u0718\x05h5\x02\u0714\u0715\x07\x05\x02\x02\u0715\u0717\x05h5\x02\u0716" +
		"\u0714\x03\x02\x02\x02\u0717\u071A\x03\x02\x02\x02\u0718\u0716\x03\x02" +
		"\x02\x02\u0718\u0719\x03\x02\x02\x02\u0719\u071B\x03\x02\x02\x02\u071A" +
		"\u0718\x03\x02\x02\x02\u071B\u071C\x07\x04\x02\x02\u071C\u07EC\x03\x02" +
		"\x02\x02\u071D\u071E\x05\xC8e\x02\u071E\u071F\x07\x03\x02\x02\u071F\u0720" +
		"\x07\u0103\x02\x02\u0720\u0722\x07\x04\x02\x02\u0721\u0723\x05\x8EH\x02" +
		"\u0722\u0721\x03\x02\x02\x02\u0722\u0723\x03\x02\x02\x02\u0723\u0725\x03" +
		"\x02\x02\x02\u0724\u0726\x05\x92J\x02\u0725\u0724\x03\x02\x02\x02\u0725" +
		"\u0726\x03\x02\x02\x02\u0726\u07EC\x03\x02\x02\x02\u0727\u0729\x05r:\x02" +
		"\u0728\u0727\x03\x02\x02\x02\u0728\u0729\x03\x02\x02\x02\u0729\u072A\x03" +
		"\x02\x02\x02\u072A\u072B\x05\xC8e\x02\u072B\u0737\x07\x03\x02\x02\u072C" +
		"\u072E\x05B\"\x02\u072D\u072C\x03\x02\x02\x02\u072D\u072E\x03\x02\x02" +
		"\x02\u072E\u072F\x03\x02\x02\x02\u072F\u0734\x05h5\x02\u0730\u0731\x07" +
		"\x05\x02\x02\u0731\u0733\x05h5\x02\u0732\u0730\x03\x02\x02\x02\u0733\u0736" +
		"\x03\x02\x02\x02\u0734\u0732\x03\x02\x02\x02\u0734\u0735\x03\x02\x02\x02" +
		"\u0735\u0738\x03\x02\x02\x02\u0736\u0734\x03\x02\x02\x02\u0737\u072D\x03" +
		"\x02\x02\x02\u0737\u0738\x03\x02\x02\x02\u0738\u0743\x03\x02\x02\x02\u0739" +
		"\u073A\x07\xA0\x02\x02\u073A\u073B\x07\"\x02\x02\u073B\u0740\x050\x19" +
		"\x02\u073C\u073D\x07\x05\x02\x02\u073D\u073F\x050\x19\x02\u073E\u073C" +
		"\x03\x02\x02\x02\u073F\u0742\x03\x02\x02\x02\u0740\u073E\x03\x02\x02\x02" +
		"\u0740\u0741\x03\x02\x02\x02\u0741\u0744\x03\x02\x02\x02\u0742\u0740\x03" +
		"\x02\x02\x02\u0743\u0739\x03\x02\x02\x02\u0743\u0744\x03\x02\x02\x02\u0744" +
		"\u0745\x03\x02\x02\x02\u0745\u0747\x07\x04\x02\x02\u0746\u0748\x05\x8E" +
		"H\x02\u0747\u0746\x03\x02\x02\x02\u0747\u0748\x03\x02\x02\x02\u0748\u074D" +
		"\x03\x02\x02\x02\u0749\u074B\x05t;\x02\u074A\u0749\x03\x02\x02\x02\u074A" +
		"\u074B\x03\x02\x02\x02\u074B\u074C\x03\x02\x02\x02\u074C\u074E\x05\x92" +
		"J\x02\u074D\u074A\x03\x02\x02\x02\u074D\u074E\x03\x02\x02\x02\u074E\u07EC" +
		"\x03\x02\x02\x02\u074F\u0750\x05\xD6l\x02\u0750\u0751\x05\x92J\x02\u0751" +
		"\u07EC\x03\x02\x02\x02\u0752\u0753\x05\xD6l\x02\u0753\u0754\x07\b\x02" +
		"\x02\u0754\u0755\x05h5\x02\u0755\u07EC\x03\x02\x02\x02\u0756\u075F\x07" +
		"\x03\x02\x02\u0757\u075C\x05\xD6l\x02\u0758\u0759\x07\x05\x02\x02\u0759" +
		"\u075B\x05\xD6l\x02\u075A\u0758\x03\x02\x02\x02\u075B\u075E\x03\x02\x02" +
		"\x02\u075C\u075A\x03\x02\x02\x02\u075C\u075D\x03\x02\x02\x02\u075D\u0760" +
		"\x03\x02\x02\x02\u075E\u075C\x03\x02\x02\x02\u075F\u0757\x03\x02\x02\x02" +
		"\u075F\u0760\x03\x02\x02\x02\u0760\u0761\x03\x02\x02\x02\u0761\u0762\x07" +
		"\x04\x02\x02\u0762\u0763\x07\b\x02\x02\u0763\u07EC\x05h5\x02\u0764\u0765" +
		"\x07\x03\x02\x02\u0765\u0766\x05\x14\v\x02\u0766\u0767\x07\x04\x02\x02" +
		"\u0767\u07EC\x03\x02\x02\x02\u0768\u0769\x07O\x02\x02\u0769\u076A\x07" +
		"\x03\x02\x02\u076A\u076B\x05\x14\v\x02\u076B\u076C\x07\x04\x02\x02\u076C" +
		"\u07EC\x03\x02\x02\x02\u076D\u076E\x07%\x02\x02\u076E\u0770\x05h5\x02" +
		"\u076F\u0771\x05\x8CG\x02\u0770\u076F\x03\x02\x02\x02\u0771\u0772\x03" +
		"\x02\x02\x02\u0772\u0770\x03\x02\x02\x02\u0772\u0773\x03\x02\x02\x02\u0773" +
		"\u0776\x03\x02\x02\x02\u0774\u0775\x07H\x02\x02\u0775\u0777\x05h5\x02" +
		"\u0776\u0774\x03\x02\x02\x02\u0776\u0777\x03\x02\x02\x02\u0777\u0778\x03" +
		"\x02\x02\x02\u0778\u0779\x07J\x02\x02\u0779\u07EC\x03\x02\x02\x02\u077A" +
		"\u077C\x07%\x02\x02\u077B\u077D\x05\x8CG\x02\u077C\u077B\x03\x02\x02\x02" +
		"\u077D\u077E\x03\x02\x02\x02\u077E\u077C\x03\x02\x02\x02\u077E\u077F\x03" +
		"\x02\x02\x02\u077F\u0782\x03\x02\x02\x02\u0780\u0781\x07H\x02\x02\u0781" +
		"\u0783\x05h5\x02\u0782\u0780\x03\x02\x02\x02\u0782\u0783\x03\x02\x02\x02" +
		"\u0783\u0784\x03\x02\x02\x02\u0784\u0785\x07J\x02\x02\u0785\u07EC\x03" +
		"\x02\x02\x02\u0786\u0787\x07&\x02\x02\u0787\u0788\x07\x03\x02\x02\u0788" +
		"\u0789\x05h5\x02\u0789\u078A\x07\x1C\x02\x02\u078A\u078B\x05\x86D\x02" +
		"\u078B\u078C\x07\x04\x02\x02\u078C\u07EC\x03\x02\x02\x02\u078D\u078E\x07" +
		"\xE2\x02\x02\u078E\u078F\x07\x03\x02\x02\u078F\u0790\x05h5\x02\u0790\u0791" +
		"\x07\x1C\x02\x02\u0791\u0792\x05\x86D\x02\u0792\u0793\x07\x04\x02\x02" +
		"\u0793\u07EC\x03\x02\x02\x02\u0794\u0795\x07\x1B\x02\x02\u0795\u079E\x07" +
		"\t\x02\x02\u0796\u079B\x05h5\x02\u0797\u0798\x07\x05\x02\x02\u0798\u079A" +
		"\x05h5\x02\u0799\u0797\x03\x02\x02\x02\u079A\u079D\x03\x02\x02\x02\u079B" +
		"\u0799\x03\x02\x02\x02\u079B\u079C\x03\x02\x02\x02\u079C\u079F\x03\x02" +
		"\x02\x02\u079D\u079B\x03\x02\x02\x02\u079E\u0796\x03\x02\x02\x02\u079E" +
		"\u079F\x03\x02\x02\x02\u079F\u07A0\x03\x02\x02\x02\u07A0\u07EC\x07\n\x02" +
		"\x02\u07A1\u07EC\x05\xD6l\x02\u07A2\u07EC\x073\x02\x02\u07A3\u07A7\x07" +
		"7\x02\x02\u07A4\u07A5\x07\x03\x02\x02\u07A5\u07A6\x07\u010B\x02\x02\u07A6" +
		"\u07A8\x07\x04\x02\x02\u07A7\u07A4\x03\x02\x02\x02\u07A7\u07A8\x03\x02" +
		"\x02\x02\u07A8\u07EC\x03\x02\x02\x02\u07A9\u07AD\x078\x02\x02\u07AA\u07AB" +
		"\x07\x03\x02\x02\u07AB\u07AC\x07\u010B\x02\x02\u07AC\u07AE\x07\x04\x02" +
		"\x02\u07AD\u07AA\x03\x02\x02\x02\u07AD\u07AE\x03\x02\x02\x02\u07AE\u07EC" +
		"\x03\x02\x02\x02\u07AF\u07B3\x07\x7F\x02\x02\u07B0\u07B1\x07\x03\x02\x02" +
		"\u07B1\u07B2\x07\u010B\x02\x02\u07B2\u07B4\x07\x04\x02\x02\u07B3\u07B0" +
		"\x03\x02\x02\x02\u07B3\u07B4\x03\x02\x02\x02\u07B4\u07EC\x03\x02\x02\x02" +
		"\u07B5\u07B9\x07\x80\x02\x02\u07B6\u07B7\x07\x03\x02\x02\u07B7\u07B8\x07" +
		"\u010B\x02\x02\u07B8\u07BA\x07\x04\x02\x02\u07B9\u07B6\x03\x02\x02\x02" +
		"\u07B9\u07BA\x03\x02\x02\x02\u07BA\u07EC\x03\x02\x02\x02\u07BB\u07EC\x07" +
		"9\x02\x02\u07BC\u07EC\x072\x02\x02\u07BD\u07EC\x076\x02\x02\u07BE\u07EC" +
		"\x074\x02\x02\u07BF\u07C0\x07\xD4\x02\x02\u07C0\u07C1\x07\x03\x02\x02" +
		"\u07C1\u07C2\x05n8\x02\u07C2\u07C3\x07Z\x02\x02\u07C3\u07C6\x05n8\x02" +
		"\u07C4\u07C5\x07X\x02\x02\u07C5\u07C7\x05n8\x02\u07C6\u07C4\x03\x02\x02" +
		"\x02\u07C6\u07C7\x03\x02\x02\x02\u07C7\u07C8\x03\x02\x02\x02\u07C8\u07C9" +
		"\x07\x04\x02\x02\u07C9\u07EC\x03\x02\x02\x02\u07CA\u07CB\x07\x94\x02\x02" +
		"\u07CB\u07CC\x07\x03\x02\x02\u07CC\u07CF\x05n8\x02\u07CD\u07CE\x07\x05" +
		"\x02\x02\u07CE\u07D0\x05\x84C\x02\u07CF\u07CD\x03\x02\x02\x02\u07CF\u07D0" +
		"\x03\x02\x02\x02\u07D0\u07D1\x03\x02\x02\x02\u07D1\u07D2\x07\x04\x02\x02" +
		"\u07D2\u07EC\x03\x02\x02\x02\u07D3\u07D4\x07Q\x02\x02\u07D4\u07D5\x07" +
		"\x03\x02\x02\u07D5\u07D6\x05\xD6l\x02\u07D6\u07D7\x07Z\x02\x02\u07D7\u07D8" +
		"\x05n8\x02\u07D8\u07D9\x07\x04\x02\x02\u07D9\u07EC\x03\x02\x02\x02\u07DA" +
		"\u07DB\x07\x03\x02\x02\u07DB\u07DC\x05h5\x02\u07DC\u07DD\x07\x04\x02\x02" +
		"\u07DD\u07EC\x03\x02\x02\x02\u07DE\u07DF\x07c\x02\x02\u07DF\u07E8\x07" +
		"\x03\x02\x02\u07E0\u07E5\x05\xCEh\x02\u07E1\u07E2\x07\x05\x02\x02\u07E2" +
		"\u07E4\x05\xCEh\x02\u07E3\u07E1\x03\x02\x02\x02\u07E4\u07E7\x03\x02\x02" +
		"\x02\u07E5\u07E3\x03\x02\x02\x02\u07E5\u07E6\x03\x02\x02\x02\u07E6\u07E9" +
		"\x03\x02\x02\x02\u07E7\u07E5\x03\x02\x02\x02\u07E8\u07E0\x03\x02\x02\x02" +
		"\u07E8\u07E9\x03\x02\x02\x02\u07E9\u07EA\x03\x02\x02\x02\u07EA\u07EC\x07" +
		"\x04\x02\x02\u07EB\u06F2\x03\x02\x02\x02\u07EB\u06F4\x03\x02\x02\x02\u07EB" +
		"\u06F5\x03\x02\x02\x02\u07EB\u06F8\x03\x02\x02\x02\u07EB\u06FB\x03\x02" +
		"\x02\x02\u07EB\u06FC\x03\x02\x02\x02\u07EB\u06FD\x03\x02\x02\x02\u07EB" +
		"\u06FE\x03\x02\x02\x02\u07EB\u06FF\x03\x02\x02\x02\u07EB\u0700\x03\x02" +
		"\x02\x02\u07EB\u0707\x03\x02\x02\x02\u07EB\u0711\x03\x02\x02\x02\u07EB" +
		"\u071D\x03\x02\x02\x02\u07EB\u0728\x03\x02\x02\x02\u07EB\u074F\x03\x02" +
		"\x02\x02\u07EB\u0752\x03\x02\x02\x02\u07EB\u0756\x03\x02\x02\x02\u07EB" +
		"\u0764\x03\x02\x02\x02\u07EB\u0768\x03\x02\x02\x02\u07EB\u076D\x03\x02" +
		"\x02\x02\u07EB\u077A\x03\x02\x02\x02\u07EB\u0786\x03\x02\x02\x02\u07EB" +
		"\u078D\x03\x02\x02\x02\u07EB\u0794\x03\x02\x02\x02\u07EB\u07A1\x03\x02" +
		"\x02\x02\u07EB\u07A2\x03\x02\x02\x02\u07EB\u07A3\x03\x02\x02\x02\u07EB" +
		"\u07A9\x03\x02\x02\x02\u07EB\u07AF\x03\x02\x02\x02\u07EB\u07B5\x03\x02" +
		"\x02\x02\u07EB\u07BB\x03\x02\x02\x02\u07EB\u07BC\x03\x02\x02\x02\u07EB" +
		"\u07BD\x03\x02\x02\x02\u07EB";
	private static readonly _serializedATNSegment4: string =
		"\u07BE\x03\x02\x02\x02\u07EB\u07BF\x03\x02\x02\x02\u07EB\u07CA\x03\x02" +
		"\x02\x02\u07EB\u07D3\x03\x02\x02\x02\u07EB\u07DA\x03\x02\x02\x02\u07EB" +
		"\u07DE\x03\x02\x02\x02\u07EC\u07F7\x03\x02\x02\x02\u07ED\u07EE\f\x13\x02" +
		"\x02\u07EE\u07EF\x07\t\x02\x02\u07EF\u07F0\x05n8\x02\u07F0\u07F1\x07\n" +
		"\x02\x02\u07F1\u07F6\x03\x02\x02\x02\u07F2\u07F3\f\x11\x02\x02\u07F3\u07F4" +
		"\x07\x06\x02\x02\u07F4\u07F6\x05\xD6l\x02\u07F5\u07ED\x03\x02\x02\x02" +
		"\u07F5\u07F2\x03\x02\x02\x02\u07F6\u07F9\x03\x02\x02\x02\u07F7\u07F5\x03" +
		"\x02\x02\x02\u07F7\u07F8\x03\x02\x02\x02\u07F8q\x03\x02\x02\x02\u07F9" +
		"\u07F7\x03\x02\x02\x02\u07FA\u07FB\t\x11\x02\x02\u07FBs\x03\x02\x02\x02" +
		"\u07FC\u07FD\x07h\x02\x02\u07FD\u0801\x07\x98\x02\x02\u07FE\u07FF\x07" +
		"\xBA\x02\x02\u07FF\u0801\x07\x98\x02\x02\u0800\u07FC\x03\x02\x02\x02\u0800" +
		"\u07FE\x03\x02\x02\x02\u0801u\x03\x02\x02\x02\u0802\u0809\x07\u0108\x02" +
		"\x02\u0803\u0806\x07\u0109\x02\x02\u0804\u0805\x07\xE4\x02\x02\u0805\u0807" +
		"\x07\u0108\x02\x02\u0806\u0804\x03\x02\x02\x02\u0806\u0807\x03\x02\x02" +
		"\x02\u0807\u0809\x03\x02\x02\x02\u0808\u0802\x03\x02\x02\x02\u0808\u0803" +
		"\x03\x02\x02\x02\u0809w\x03\x02\x02\x02\u080A\u080B\x07\xDC\x02\x02\u080B" +
		"\u080C\x07\xFA\x02\x02\u080C\u0811\x05\x80A\x02\u080D\u080E\x07\xDC\x02" +
		"\x02\u080E\u080F\x07\xFA\x02\x02\u080F\u0811\x05v<\x02\u0810\u080A\x03" +
		"\x02\x02\x02\u0810\u080D\x03\x02\x02\x02\u0811y\x03\x02\x02\x02\u0812" +
		"\u0813\t\x12\x02\x02\u0813{\x03\x02\x02\x02\u0814\u0815\t\x13\x02\x02" +
		"\u0815}\x03\x02\x02\x02\u0816\u0817\t\x14\x02\x02\u0817\x7F\x03\x02\x02" +
		"\x02\u0818\u081A\x07p\x02\x02\u0819\u081B\t\x0F\x02\x02\u081A\u0819\x03" +
		"\x02\x02\x02\u081A\u081B\x03\x02\x02\x02\u081B\u081C\x03\x02\x02\x02\u081C" +
		"\u081D\x05v<\x02\u081D\u0820\x05\x82B\x02\u081E\u081F\x07\xDE\x02\x02" +
		"\u081F\u0821\x05\x82B\x02\u0820\u081E\x03\x02\x02\x02\u0820\u0821\x03" +
		"\x02\x02\x02\u0821\x81\x03\x02\x02\x02\u0822\u0823\t\x15\x02\x02\u0823" +
		"\x83\x03\x02\x02\x02\u0824\u0825\t\x16\x02\x02\u0825\x85\x03\x02\x02\x02" +
		"\u0826\u0827\bD\x01\x02\u0827\u0828\x07\xC2\x02\x02\u0828\u0829\x07\x03" +
		"\x02\x02\u0829\u082E\x05\x88E\x02\u082A\u082B\x07\x05\x02\x02\u082B\u082D" +
		"\x05\x88E\x02\u082C\u082A\x03\x02\x02\x02\u082D\u0830\x03\x02\x02\x02" +
		"\u082E\u082C\x03\x02\x02\x02\u082E\u082F\x03\x02\x02\x02\u082F\u0831\x03" +
		"\x02\x02\x02\u0830\u082E\x03\x02\x02\x02\u0831\u0832\x07\x04\x02\x02\u0832" +
		"\u0882\x03\x02\x02\x02\u0833\u0834\x07p\x02\x02\u0834\u0837\x05\x82B\x02" +
		"\u0835\u0836\x07\xDE\x02\x02\u0836\u0838\x05\x82B\x02\u0837\u0835\x03" +
		"\x02\x02\x02\u0837\u0838\x03\x02\x02\x02\u0838\u0882\x03\x02\x02\x02\u0839" +
		"\u083E\x07\xDD\x02\x02\u083A\u083B\x07\x03\x02\x02\u083B\u083C\x05\x8A" +
		"F\x02\u083C\u083D\x07\x04\x02\x02\u083D\u083F\x03\x02\x02\x02\u083E\u083A" +
		"\x03\x02\x02\x02\u083E\u083F\x03\x02\x02\x02\u083F\u0843\x03\x02\x02\x02" +
		"\u0840\u0841\x07\xF6\x02\x02\u0841\u0842\x07\xDC\x02\x02\u0842\u0844\x07" +
		"\xFA\x02\x02\u0843\u0840\x03\x02\x02\x02\u0843\u0844\x03\x02\x02\x02\u0844" +
		"\u0882\x03\x02\x02\x02\u0845\u084A\x07\xDD\x02\x02\u0846\u0847\x07\x03" +
		"\x02\x02\u0847\u0848\x05\x8AF\x02\u0848\u0849\x07\x04\x02\x02\u0849\u084B" +
		"\x03\x02\x02\x02\u084A\u0846\x03\x02\x02\x02\u084A\u084B\x03\x02\x02\x02" +
		"\u084B\u084C\x03\x02\x02\x02\u084C\u084D\x07\xF5\x02\x02\u084D\u084E\x07" +
		"\xDC\x02\x02\u084E\u0882\x07\xFA\x02\x02\u084F\u0854\x07\xDC\x02\x02\u0850" +
		"\u0851\x07\x03\x02\x02\u0851\u0852\x05\x8AF\x02\u0852\u0853\x07\x04\x02" +
		"\x02\u0853\u0855\x03\x02\x02\x02\u0854\u0850\x03\x02\x02\x02\u0854\u0855" +
		"\x03\x02\x02\x02\u0855\u0859\x03\x02\x02\x02\u0856\u0857\x07\xF6\x02\x02" +
		"\u0857\u0858\x07\xDC\x02\x02\u0858\u085A\x07\xFA\x02\x02\u0859\u0856\x03" +
		"\x02\x02\x02\u0859\u085A\x03\x02\x02\x02\u085A\u0882\x03\x02\x02\x02\u085B" +
		"\u0860\x07\xDC\x02\x02\u085C\u085D\x07\x03\x02\x02\u085D\u085E\x05\x8A" +
		"F\x02\u085E\u085F\x07\x04\x02\x02\u085F\u0861\x03\x02\x02\x02\u0860\u085C" +
		"\x03\x02\x02\x02\u0860\u0861\x03\x02\x02\x02\u0861\u0862\x03\x02\x02\x02" +
		"\u0862\u0863\x07\xF5\x02\x02\u0863\u0864\x07\xDC\x02\x02\u0864\u0882\x07" +
		"\xFA\x02\x02\u0865\u0866\x07F\x02\x02\u0866\u0882\x07\xAE\x02\x02\u0867" +
		"\u0868\x07\x1B\x02\x02\u0868\u0869\x07\xFD\x02\x02\u0869\u086A\x05\x86" +
		"D\x02\u086A\u086B\x07\xFF\x02\x02\u086B\u0882\x03\x02\x02\x02\u086C\u086D" +
		"\x07\x82\x02\x02\u086D\u086E\x07\xFD\x02\x02\u086E\u086F\x05\x86D\x02" +
		"\u086F\u0870\x07\x05\x02\x02\u0870\u0871\x05\x86D\x02\u0871\u0872\x07" +
		"\xFF\x02\x02\u0872\u0882\x03\x02\x02\x02\u0873\u087F\x05\xD6l\x02\u0874" +
		"\u0875\x07\x03\x02\x02\u0875\u087A\x05\x8AF\x02\u0876\u0877\x07\x05\x02" +
		"\x02\u0877\u0879\x05\x8AF\x02\u0878\u0876\x03\x02\x02\x02\u0879\u087C" +
		"\x03\x02\x02\x02\u087A\u0878\x03\x02\x02\x02\u087A\u087B\x03\x02\x02\x02" +
		"\u087B\u087D\x03\x02\x02\x02\u087C\u087A\x03\x02\x02\x02\u087D\u087E\x07" +
		"\x04\x02\x02\u087E\u0880\x03\x02\x02\x02\u087F\u0874\x03\x02\x02\x02\u087F" +
		"\u0880\x03\x02\x02\x02\u0880\u0882\x03\x02\x02\x02\u0881\u0826\x03\x02" +
		"\x02\x02\u0881\u0833\x03\x02\x02\x02\u0881\u0839\x03\x02\x02\x02\u0881" +
		"\u0845\x03\x02\x02\x02\u0881\u084F\x03\x02\x02\x02\u0881\u085B\x03\x02" +
		"\x02\x02\u0881\u0865\x03\x02\x02\x02\u0881\u0867\x03\x02\x02\x02\u0881" +
		"\u086C\x03\x02\x02\x02\u0881\u0873\x03\x02\x02\x02\u0882\u088C\x03\x02" +
		"\x02\x02\u0883\u0884\f\x04\x02\x02\u0884\u0888\x07\x1B\x02\x02\u0885\u0886" +
		"\x07\t\x02\x02\u0886\u0887\x07\u010B\x02\x02\u0887\u0889\x07\n\x02\x02" +
		"\u0888\u0885\x03\x02\x02\x02\u0888\u0889\x03\x02\x02\x02\u0889\u088B\x03" +
		"\x02\x02\x02\u088A\u0883\x03\x02\x02\x02\u088B\u088E\x03\x02\x02\x02\u088C" +
		"\u088A\x03\x02\x02\x02\u088C\u088D\x03\x02\x02\x02\u088D\x87\x03\x02\x02" +
		"\x02\u088E\u088C\x03\x02\x02\x02\u088F\u0894\x05\x86D\x02\u0890\u0891" +
		"\x05\xD6l\x02\u0891\u0892\x05\x86D\x02\u0892\u0894\x03\x02\x02\x02\u0893" +
		"\u088F\x03\x02\x02\x02\u0893\u0890\x03\x02\x02\x02\u0894\x89\x03\x02\x02" +
		"\x02\u0895\u0898\x07\u010B\x02\x02\u0896\u0898\x05\x86D\x02\u0897\u0895" +
		"\x03\x02\x02\x02\u0897\u0896\x03\x02\x02\x02\u0898\x8B\x03\x02\x02\x02" +
		"\u0899\u089A\x07\xF2\x02\x02\u089A\u089B\x05h5\x02\u089B\u089C\x07\xDA" +
		"\x02\x02\u089C\u089D\x05h5\x02\u089D\x8D\x03\x02\x02\x02\u089E\u089F\x07" +
		"T\x02\x02\u089F\u08A0\x07\x03\x02\x02\u08A0\u08A1\x07\xF3\x02\x02\u08A1" +
		"\u08A2\x05j6\x02\u08A2\u08A3\x07\x04\x02\x02\u08A3\x8F\x03\x02\x02\x02" +
		"\u08A4\u08A5\x07\xF2\x02\x02\u08A5\u08A8\x07\x84\x02\x02\u08A6\u08A7\x07" +
		"\x19\x02\x02\u08A7\u08A9\x05h5\x02\u08A8\u08A6\x03\x02\x02\x02\u08A8\u08A9" +
		"\x03\x02\x02\x02\u08A9\u08AA\x03\x02\x02\x02\u08AA\u08AB\x07\xDA\x02\x02" +
		"\u08AB\u08AC\x07\xEA\x02\x02\u08AC\u08AD\x07\xCD\x02\x02\u08AD\u08AE\x05" +
		"\xD6l\x02\u08AE\u08AF\x07\xFB\x02\x02\u08AF\u08B7\x05h5\x02\u08B0\u08B1" +
		"\x07\x05\x02\x02\u08B1\u08B2\x05\xD6l\x02\u08B2\u08B3\x07\xFB\x02\x02" +
		"\u08B3\u08B4\x05h5\x02\u08B4\u08B6\x03\x02\x02\x02\u08B5\u08B0\x03\x02" +
		"\x02\x02\u08B6\u08B9\x03\x02\x02\x02\u08B7\u08B5\x03\x02\x02\x02\u08B7" +
		"\u08B8\x03\x02\x02\x02\u08B8\u08E5\x03\x02\x02\x02\u08B9\u08B7\x03\x02" +
		"\x02\x02\u08BA\u08BB\x07\xF2\x02\x02\u08BB\u08BE\x07\x84\x02\x02\u08BC" +
		"\u08BD\x07\x19\x02\x02\u08BD\u08BF\x05h5\x02\u08BE\u08BC\x03\x02\x02\x02" +
		"\u08BE\u08BF\x03\x02\x02\x02\u08BF\u08C0\x03\x02\x02\x02\u08C0\u08C1\x07" +
		"\xDA\x02\x02\u08C1\u08E5\x07@\x02\x02\u08C2\u08C3\x07\xF2\x02\x02\u08C3" +
		"\u08C4\x07\x95\x02\x02\u08C4\u08C7\x07\x84\x02\x02\u08C5\u08C6\x07\x19" +
		"\x02\x02\u08C6\u08C8\x05h5\x02\u08C7\u08C5\x03\x02\x02\x02\u08C7\u08C8" +
		"\x03\x02\x02\x02\u08C8\u08C9\x03\x02\x02\x02\u08C9\u08CA\x07\xDA\x02\x02" +
		"\u08CA\u08D6\x07n\x02\x02\u08CB\u08CC\x07\x03\x02\x02\u08CC\u08D1\x05" +
		"\xD6l\x02\u08CD\u08CE\x07\x05\x02\x02\u08CE\u08D0\x05\xD6l\x02\u08CF\u08CD" +
		"\x03\x02\x02\x02\u08D0\u08D3\x03\x02\x02\x02\u08D1\u08CF\x03\x02\x02\x02" +
		"\u08D1\u08D2\x03\x02\x02\x02\u08D2\u08D4\x03\x02\x02\x02\u08D3\u08D1\x03" +
		"\x02\x02\x02\u08D4\u08D5\x07\x04\x02\x02\u08D5\u08D7\x03\x02\x02\x02\u08D6" +
		"\u08CB\x03\x02\x02\x02\u08D6\u08D7\x03\x02\x02\x02\u08D7\u08D8\x03\x02" +
		"\x02\x02\u08D8\u08D9\x07\xEF\x02\x02\u08D9\u08DA\x07\x03\x02\x02\u08DA" +
		"\u08DF\x05h5\x02\u08DB\u08DC\x07\x05\x02\x02\u08DC\u08DE\x05h5\x02\u08DD" +
		"\u08DB\x03\x02\x02\x02\u08DE\u08E1\x03\x02\x02\x02\u08DF\u08DD\x03\x02" +
		"\x02\x02\u08DF\u08E0\x03\x02\x02\x02\u08E0\u08E2\x03\x02\x02\x02\u08E1" +
		"\u08DF\x03\x02\x02\x02\u08E2\u08E3\x07\x04\x02\x02\u08E3\u08E5\x03\x02" +
		"\x02\x02\u08E4\u08A4\x03\x02\x02\x02\u08E4\u08BA\x03\x02\x02\x02\u08E4" +
		"\u08C2\x03\x02\x02\x02\u08E5\x91\x03\x02\x02\x02\u08E6\u08EC\x07\xA4\x02" +
		"\x02\u08E7\u08ED\x05\xD6l\x02\u08E8\u08E9\x07\x03\x02\x02\u08E9\u08EA" +
		"\x05> \x02\u08EA\u08EB\x07\x04\x02\x02\u08EB\u08ED\x03\x02\x02\x02\u08EC" +
		"\u08E7\x03\x02\x02\x02\u08EC\u08E8\x03\x02\x02\x02\u08ED\x93\x03\x02\x02" +
		"\x02\u08EE\u08EF\x07\x88\x02\x02\u08EF\u08F4\x05R*\x02\u08F0\u08F1\x07" +
		"\x05\x02\x02\u08F1\u08F3\x05R*\x02\u08F2\u08F0\x03\x02\x02\x02\u08F3\u08F6" +
		"\x03\x02\x02\x02\u08F4\u08F2\x03\x02\x02\x02\u08F4\u08F5\x03\x02\x02\x02" +
		"\u08F5\u08F8\x03\x02\x02\x02\u08F6\u08F4\x03\x02\x02\x02\u08F7\u08EE\x03" +
		"\x02\x02\x02\u08F7\u08F8\x03\x02\x02\x02\u08F8\u08F9\x03\x02\x02\x02\u08F9" +
		"\u08FD\x05\x96L\x02\u08FA\u08FB\x07\x15\x02\x02\u08FB\u08FC\x07\x83\x02" +
		"\x02\u08FC\u08FE\x05X-\x02\u08FD\u08FA\x03\x02\x02\x02\u08FD\u08FE\x03" +
		"\x02\x02\x02\u08FE\u0900\x03\x02\x02\x02\u08FF\u0901\t\x0E\x02\x02\u0900" +
		"\u08FF\x03\x02\x02\x02\u0900\u0901\x03\x02\x02\x02\u0901\u0907\x03\x02" +
		"\x02\x02\u0902\u0903\x07\xA9\x02\x02\u0903\u0904\x07\x03\x02\x02\u0904" +
		"\u0905\x05\x9AN\x02\u0905\u0906\x07\x04\x02\x02\u0906\u0908\x03\x02\x02" +
		"\x02\u0907\u0902\x03\x02\x02\x02\u0907\u0908\x03\x02\x02\x02\u0908\u0912" +
		"\x03\x02\x02\x02\u0909\u090A\x07\xD3\x02\x02\u090A\u090F\x05Z.\x02\u090B" +
		"\u090C\x07\x05\x02\x02\u090C\u090E\x05Z.\x02\u090D\u090B\x03\x02\x02\x02" +
		"\u090E\u0911\x03\x02\x02\x02\u090F\u090D\x03\x02\x02\x02\u090F\u0910\x03" +
		"\x02\x02\x02\u0910\u0913\x03\x02\x02\x02\u0911\u090F\x03\x02\x02\x02\u0912" +
		"\u0909\x03\x02\x02\x02\u0912\u0913\x03\x02\x02\x02\u0913\u091D\x03\x02" +
		"\x02\x02\u0914\u0915\x07C\x02\x02\u0915\u091A\x05\\/\x02\u0916\u0917\x07" +
		"\x05\x02\x02\u0917\u0919\x05\\/\x02\u0918\u0916\x03\x02\x02\x02\u0919" +
		"\u091C\x03\x02\x02\x02\u091A\u0918\x03\x02\x02\x02\u091A\u091B\x03\x02" +
		"\x02\x02\u091B\u091E\x03\x02\x02\x02\u091C\u091A\x03\x02\x02\x02\u091D" +
		"\u0914\x03\x02\x02\x02\u091D\u091E\x03\x02\x02\x02\u091E\x95\x03\x02\x02" +
		"\x02\u091F\u0920\x07\xB2\x02\x02\u0920\u0938\x05\x98M\x02\u0921\u0922" +
		"\x07\xC3\x02\x02\u0922\u0938\x05\x98M\x02\u0923\u0924\x07d\x02\x02\u0924" +
		"\u0938\x05\x98M\x02\u0925\u0926\x07\xB2\x02\x02\u0926\u0927\x07!\x02\x02" +
		"\u0927\u0928\x05\x98M\x02\u0928\u0929\x07\x19\x02\x02\u0929\u092A\x05" +
		"\x98M\x02\u092A\u0938\x03\x02\x02\x02\u092B\u092C\x07\xC3\x02\x02\u092C" +
		"\u092D\x07!\x02\x02\u092D\u092E\x05\x98M\x02\u092E\u092F\x07\x19\x02\x02" +
		"\u092F\u0930\x05\x98M\x02\u0930\u0938\x03\x02\x02\x02\u0931\u0932\x07" +
		"d\x02\x02\u0932\u0933\x07!\x02\x02\u0933\u0934\x05\x98M\x02\u0934\u0935" +
		"\x07\x19\x02\x02\u0935\u0936\x05\x98M\x02\u0936\u0938\x03\x02\x02\x02" +
		"\u0937\u091F\x03\x02\x02\x02\u0937\u0921\x03\x02\x02\x02\u0937\u0923\x03" +
		"\x02\x02\x02\u0937\u0925\x03\x02\x02\x02\u0937\u092B\x03\x02\x02\x02\u0937" +
		"\u0931\x03\x02\x02\x02\u0938\x97\x03\x02\x02\x02\u0939\u093A\x07\xE5\x02" +
		"\x02\u093A\u0943\x07\xAD\x02\x02\u093B\u093C\x07\xE5\x02\x02\u093C\u0943" +
		"\x07W\x02\x02\u093D\u093E\x071\x02\x02\u093E\u0943\x07\xC2\x02\x02\u093F" +
		"\u0940\x05h5\x02\u0940\u0941\t\x17\x02\x02\u0941\u0943\x03\x02\x02\x02" +
		"\u0942\u0939\x03\x02\x02\x02\u0942\u093B\x03\x02\x02\x02\u0942\u093D\x03" +
		"\x02\x02\x02\u0942\u093F\x03\x02\x02\x02\u0943\x99\x03\x02\x02\x02\u0944" +
		"\u0945\bN\x01\x02\u0945\u0947\x05\x9CO\x02\u0946\u0948\x05\x9EP\x02\u0947" +
		"\u0946\x03\x02\x02\x02\u0947\u0948\x03\x02\x02\x02\u0948\u0950\x03\x02" +
		"\x02\x02\u0949\u094A\f\x04\x02\x02\u094A\u094F\x05\x9AN\x05\u094B\u094C" +
		"\f\x03\x02\x02\u094C\u094D\x07\v\x02\x02\u094D\u094F\x05\x9AN\x04\u094E" +
		"\u0949\x03\x02\x02\x02\u094E\u094B\x03\x02\x02\x02\u094F\u0952\x03\x02" +
		"\x02\x02\u0950\u094E\x03\x02\x02\x02\u0950\u0951\x03\x02\x02\x02\u0951" +
		"\x9B\x03\x02\x02\x02\u0952\u0950\x03\x02\x02\x02\u0953\u096D\x05\xD6l" +
		"\x02\u0954\u0955\x07\x03\x02\x02\u0955\u096D\x07\x04\x02\x02\u0956\u0957" +
		"\x07\xAB\x02\x02\u0957\u0958\x07\x03\x02\x02\u0958\u095D\x05\x9AN\x02" +
		"\u0959\u095A\x07\x05\x02\x02\u095A\u095C\x05\x9AN\x02\u095B\u0959\x03" +
		"\x02\x02\x02\u095C\u095F\x03\x02\x02\x02\u095D\u095B\x03\x02\x02\x02\u095D" +
		"\u095E\x03\x02\x02\x02\u095E\u0960\x03\x02\x02\x02\u095F\u095D\x03\x02" +
		"\x02\x02\u0960\u0961\x07\x04\x02\x02\u0961\u096D\x03\x02\x02\x02\u0962" +
		"\u0963\x07\x03\x02\x02\u0963\u0964\x05\x9AN\x02\u0964\u0965\x07\x04\x02" +
		"\x02\u0965\u096D\x03\x02\x02\x02\u0966\u096D\x07\f\x02\x02\u0967\u096D" +
		"\x07\r\x02\x02\u0968\u0969\x07\x0E\x02\x02\u0969\u096A\x05\x9AN\x02\u096A" +
		"\u096B\x07\x0F\x02\x02\u096B\u096D\x03\x02\x02\x02\u096C\u0953\x03\x02" +
		"\x02\x02\u096C\u0954\x03\x02\x02\x02\u096C\u0956\x03\x02\x02\x02\u096C" +
		"\u0962\x03\x02\x02\x02\u096C\u0966\x03\x02\x02\x02\u096C\u0967\x03\x02" +
		"\x02\x02\u096C\u0968\x03\x02\x02\x02\u096D\x9D\x03\x02\x02\x02\u096E\u0970" +
		"\x07\u0103\x02\x02\u096F\u0971\x07\u0107\x02\x02\u0970\u096F\x03\x02\x02" +
		"\x02\u0970\u0971\x03\x02\x02\x02\u0971\u098D\x03\x02\x02\x02\u0972\u0974" +
		"\x07\u0101\x02\x02\u0973\u0975\x07\u0107\x02\x02\u0974\u0973\x03\x02\x02" +
		"\x02\u0974\u0975\x03\x02\x02\x02\u0975\u098D\x03\x02\x02\x02\u0976\u0978" +
		"\x07\u0107\x02\x02\u0977\u0979\x07\u0107\x02\x02\u0978\u0977\x03\x02\x02" +
		"\x02\u0978\u0979\x03\x02\x02\x02\u0979\u098D\x03\x02\x02\x02\u097A\u097B" +
		"\x07\x10\x02\x02\u097B\u097C\x07\u010B\x02\x02\u097C\u097E\x07\x11\x02" +
		"\x02\u097D\u097F\x07\u0107\x02\x02\u097E\u097D\x03\x02\x02\x02\u097E\u097F" +
		"\x03\x02\x02\x02\u097F\u098D\x03\x02\x02\x02\u0980\u0982\x07\x10\x02\x02" +
		"\u0981\u0983\x07\u010B\x02\x02\u0982\u0981\x03\x02\x02\x02\u0982\u0983" +
		"\x03\x02\x02\x02\u0983\u0984\x03\x02\x02\x02\u0984\u0986\x07\x05\x02\x02" +
		"\u0985\u0987\x07\u010B\x02\x02\u0986\u0985\x03\x02\x02\x02\u0986\u0987" +
		"\x03\x02\x02\x02\u0987\u0988\x03\x02\x02\x02\u0988\u098A\x07\x11\x02\x02" +
		"\u0989\u098B\x07\u0107\x02\x02\u098A\u0989\x03\x02\x02\x02\u098A\u098B" +
		"\x03\x02\x02\x02\u098B\u098D\x03\x02\x02\x02\u098C\u096E\x03\x02\x02\x02" +
		"\u098C\u0972\x03\x02\x02\x02\u098C\u0976\x03\x02\x02\x02\u098C\u097A\x03" +
		"\x02\x02\x02\u098C\u0980\x03\x02\x02\x02\u098D\x9F\x03\x02\x02\x02\u098E" +
		"\u098F\x05\xD6l\x02\u098F\u0990\x07\xFB\x02\x02\u0990\u0991\x05h5\x02" +
		"\u0991\xA1\x03\x02\x02\x02\u0992\u0993\x07Y\x02\x02\u0993\u0997\t\x18" +
		"\x02\x02\u0994\u0995\x07\xE3\x02\x02\u0995\u0997\t\x19\x02\x02\u0996\u0992" +
		"\x03\x02\x02\x02\u0996\u0994\x03\x02\x02\x02\u0997\xA3\x03\x02\x02\x02" +
		"\u0998\u0999\x07u\x02\x02\u0999\u099A\x07{\x02\x02\u099A\u099E\x05\xA6" +
		"T\x02\u099B\u099C\x07\xB3\x02\x02\u099C\u099E\t\x1A\x02\x02\u099D\u0998" +
		"\x03\x02\x02\x02\u099D\u099B\x03\x02\x02\x02\u099E\xA5\x03\x02\x02\x02" +
		"\u099F\u09A0\x07\xB3\x02\x02\u09A0\u09A7\x07\xE6\x02\x02\u09A1\u09A2\x07" +
		"\xB3\x02\x02\u09A2\u09A7\x07,\x02\x02\u09A3\u09A4\x07\xB7\x02\x02\u09A4" +
		"\u09A7\x07\xB3\x02\x02\u09A5\u09A7\x07\xCB\x02\x02\u09A6\u099F\x03\x02" +
		"\x02\x02\u09A6\u09A1\x03\x02\x02\x02\u09A6\u09A3\x03\x02\x02\x02\u09A6" +
		"\u09A5\x03\x02\x02\x02\u09A7\xA7\x03\x02\x02\x02\u09A8\u09AE\x05h5\x02" +
		"\u09A9\u09AA\x05\xD6l\x02\u09AA\u09AB\x07\x12\x02\x02\u09AB\u09AC\x05" +
		"h5\x02\u09AC\u09AE\x03\x02\x02\x02\u09AD\u09A8\x03\x02\x02\x02\u09AD\u09A9" +
		"\x03\x02\x02\x02\u09AE\xA9\x03\x02\x02\x02\u09AF\u09B0\x05\xD6l\x02\u09B0" +
		"\u09B1\x07\x06\x02\x02\u09B1\u09B2\x05\xD6l\x02\u09B2\u09B5\x03\x02\x02" +
		"\x02\u09B3\u09B5\x05\xD6l\x02\u09B4\u09AF\x03\x02\x02\x02\u09B4\u09B3" +
		"\x03\x02\x02\x02\u09B5\xAB\x03\x02\x02\x02\u09B6\u09BB\x05\xAAV\x02\u09B7" +
		"\u09B8\x07\x05\x02\x02\u09B8\u09BA\x05\xAAV\x02\u09B9\u09B7\x03\x02\x02" +
		"\x02\u09BA\u09BD\x03\x02\x02\x02\u09BB\u09B9\x03\x02\x02\x02\u09BB\u09BC" +
		"\x03\x02\x02\x02\u09BC\xAD\x03\x02\x02\x02\u09BD\u09BB\x03\x02\x02\x02" +
		"\u09BE\u09BF\t\x1B\x02\x02\u09BF\xAF\x03\x02\x02\x02\u09C0\u09C3\x05\xB2" +
		"Z\x02\u09C1\u09C3\x05\xB6\\\x02\u09C2\u09C0\x03\x02\x02\x02\u09C2\u09C1" +
		"\x03\x02\x02\x02\u09C3\xB1\x03\x02\x02\x02\u09C4\u09C5\x05\xBA^\x02\u09C5" +
		"\xB3\x03\x02\x02\x02\u09C6\u09C7\x05\xBA^\x02\u09C7\xB5\x03\x02\x02\x02" +
		"\u09C8\u09C9\x05\xBC_\x02\u09C9\xB7\x03\x02\x02\x02\u09CA\u09CB\x05\xBC" +
		"_\x02\u09CB\xB9\x03\x02\x02\x02\u09CC\u09D8\x05\xD6l\x02\u09CD\u09CE\x05" +
		"\xD6l\x02\u09CE\u09CF\x07\x06\x02\x02\u09CF\u09D0\x05\xD6l\x02\u09D0\u09D8" +
		"\x03\x02\x02\x02\u09D1\u09D2\x05\xD6l\x02\u09D2\u09D3\x07\x06\x02\x02" +
		"\u09D3\u09D4\x05\xD6l\x02\u09D4\u09D5\x07\x06\x02\x02\u09D5\u09D6\x05" +
		"\xD6l\x02\u09D6\u09D8\x03\x02\x02\x02\u09D7\u09CC\x03\x02\x02\x02\u09D7" +
		"\u09CD\x03\x02\x02\x02\u09D7\u09D1\x03\x02\x02\x02\u09D8\xBB\x03\x02\x02" +
		"\x02\u09D9\u09E5\x05\xD6l\x02\u09DA\u09DB\x05\xD6l\x02\u09DB\u09DC\x07" +
		"\x06\x02\x02\u09DC\u09DD\x05\xD6l\x02\u09DD\u09E5\x03\x02\x02\x02\u09DE" +
		"\u09DF\x05\xD6l\x02\u09DF\u09E0\x07\x06\x02\x02\u09E0\u09E1\x05\xD6l\x02" +
		"\u09E1\u09E2\x07\x06\x02\x02\u09E2\u09E3\x05\xD6l\x02\u09E3\u09E5\x03" +
		"\x02\x02\x02\u09E4\u09D9\x03\x02\x02\x02\u09E4\u09DA\x03\x02\x02\x02\u09E4" +
		"\u09DE\x03\x02\x02\x02\u09E5\xBD\x03\x02\x02\x02\u09E6\u09E7\x05\xC2b" +
		"\x02\u09E7\xBF\x03\x02\x02\x02\u09E8\u09E9\x05\xC2b\x02\u09E9\xC1\x03" +
		"\x02\x02\x02\u09EA\u09F0\x05\xD6l\x02\u09EB\u09EC\x05\xD6l\x02\u09EC\u09ED" +
		"\x07\x06\x02\x02\u09ED\u09EE\x05\xD6l\x02\u09EE\u09F0\x03\x02\x02\x02" +
		"\u09EF\u09EA\x03\x02\x02\x02\u09EF\u09EB\x03\x02\x02\x02\u09F0\xC3\x03" +
		"\x02\x02\x02\u09F1\u09F2\x05\xD6l\x02\u09F2\xC5\x03\x02\x02\x02\u09F3" +
		"\u09F4\x05\xD6l\x02\u09F4\xC7\x03\x02\x02\x02\u09F5\u09F6\x05\xCEh\x02" +
		"\u09F6\xC9\x03\x02\x02\x02\u09F7\u09F8\x05\xCEh\x02\u09F8\xCB\x03\x02" +
		"\x02\x02\u09F9\u09FA\x05\xD6l\x02\u09FA\xCD\x03\x02\x02\x02\u09FB\u0A00" +
		"\x05\xD6l\x02\u09FC\u09FD\x07\x06\x02\x02\u09FD\u09FF\x05\xD6l\x02\u09FE" +
		"\u09FC\x03\x02\x02\x02\u09FF\u0A02\x03\x02\x02\x02\u0A00\u09FE\x03\x02" +
		"\x02\x02\u0A00\u0A01\x03\x02\x02\x02\u0A01\xCF\x03\x02\x02\x02\u0A02\u0A00" +
		"\x03\x02\x02\x02\u0A03\u0A07\x05\xD2j\x02\u0A04\u0A07\x079\x02\x02\u0A05" +
		"\u0A07\x075\x02\x02\u0A06\u0A03\x03\x02\x02\x02\u0A06\u0A04\x03\x02\x02" +
		"\x02\u0A06\u0A05\x03\x02\x02\x02\u0A07\xD1\x03\x02\x02\x02\u0A08\u0A0E" +
		"\x05\xD6l\x02\u0A09\u0A0A\x07\xEC\x02\x02\u0A0A\u0A0E\x05\xD6l\x02\u0A0B" +
		"\u0A0C\x07\xBE\x02\x02\u0A0C\u0A0E\x05\xD6l\x02\u0A0D\u0A08\x03\x02\x02" +
		"\x02\u0A0D\u0A09\x03\x02\x02\x02\u0A0D\u0A0B\x03\x02\x02\x02\u0A0E\xD3" +
		"\x03\x02\x02\x02\u0A0F\u0A14\x05\xD6l\x02\u0A10\u0A11\x07\x05\x02\x02" +
		"\u0A11\u0A13\x05\xD6l\x02\u0A12\u0A10\x03\x02\x02\x02\u0A13\u0A16\x03" +
		"\x02\x02\x02\u0A14\u0A12\x03\x02\x02\x02\u0A14\u0A15\x03\x02\x02\x02\u0A15" +
		"\xD5\x03\x02\x02\x02\u0A16\u0A14\x03\x02\x02\x02\u0A17\u0A1D\x07\u010E" +
		"\x02\x02\u0A18\u0A1D\x07\u0110\x02\x02\u0A19\u0A1D\x05\xDAn\x02\u0A1A" +
		"\u0A1D\x07\u0111\x02\x02\u0A1B\u0A1D\x07\u010F\x02\x02\u0A1C\u0A17\x03" +
		"\x02\x02\x02\u0A1C\u0A18\x03\x02\x02\x02\u0A1C\u0A19\x03\x02\x02\x02\u0A1C" +
		"\u0A1A\x03\x02\x02\x02\u0A1C\u0A1B\x03\x02\x02\x02\u0A1D\xD7\x03\x02\x02" +
		"\x02\u0A1E\u0A20\x07\u0102\x02\x02\u0A1F\u0A1E\x03\x02\x02\x02\u0A1F\u0A20" +
		"\x03\x02\x02\x02\u0A20\u0A21\x03\x02\x02\x02\u0A21\u0A2B\x07\u010C\x02" +
		"\x02\u0A22\u0A24\x07\u0102\x02\x02\u0A23\u0A22\x03\x02\x02\x02\u0A23\u0A24" +
		"\x03\x02\x02\x02\u0A24\u0A25\x03\x02\x02\x02\u0A25\u0A2B\x07\u010D\x02" +
		"\x02\u0A26\u0A28\x07\u0102\x02\x02\u0A27\u0A26\x03\x02\x02\x02\u0A27\u0A28" +
		"\x03\x02\x02\x02\u0A28\u0A29\x03\x02\x02\x02\u0A29\u0A2B\x07\u010B\x02" +
		"\x02\u0A2A\u0A1F\x03\x02\x02\x02\u0A2A\u0A23\x03\x02\x02\x02\u0A2A\u0A27" +
		"\x03\x02\x02\x02\u0A2B\xD9\x03\x02\x02\x02\u0A2C\u0A2D\t\x1C\x02\x02\u0A2D" +
		"\xDB\x03\x02\x02\x02\u0155\xDF\xEA\xEE\xF2\xF6\xFA\xFE\u0108\u010D\u0111" +
		"\u0117\u011B\u0130\u0134\u0138\u013C\u0144\u0148\u014B\u0152\u015B\u0161" +
		"\u0165\u016B\u0172\u017B\u0184\u0192\u019B\u01A1\u01A8\u01B2\u01B9\u01C1" +
		"\u01C9\u01E6\u01E9\u01EC\u01F0\u01F6\u01FB\u0202\u0207\u020B\u0213\u0219" +
		"\u021D\u022B\u0233\u0246\u025F\u0262\u026C\u0270\u027D\u0283\u0288\u028C" +
		"\u0292\u029B\u02A1\u02A5\u02AC\u02B0\u02B8\u02BD\u02C1\u02C5\u02C8\u02CF" +
		"\u02D7\u02DC\u02E0\u02E4\u02E7\u02F0\u02F7\u02FC\u0300\u0304\u0307\u030F" +
		"\u0312\u0316\u0319\u0321\u0326\u033E\u0344\u0346\u034C\u0352\u0354\u035C" +
		"\u035E\u0364\u036A\u036C\u037B\u0380\u0387\u0393\u0395\u039D\u039F\u03B1" +
		"\u03B4\u03B8\u03BC\u03CE\u03D1\u03E1\u03EB\u03F0\u03F6\u03F9\u0402\u040E" +
		"\u0411\u0417\u041E\u0423\u0429\u042D\u0431\u0437\u0442\u044B\u0455\u0458" +
		"\u045D\u045F\u0466\u046C\u046E\u0472\u047C\u0482\u0485\u0487\u0493\u049A" +
		"\u049E\u04A1\u04A5\u04A9\u04B0\u04B9\u04BC\u04C0\u04C5\u04C9\u04D1\u04D4" +
		"\u04D7\u04DE\u04E9\u04EC\u04F6\u04F9\u0504\u0509\u0511\u0514\u0518\u051C" +
		"\u0525\u052E\u0531\u053A\u053D\u0540\u0544\u054F\u0552\u0555\u055C\u055F" +
		"\u0572\u0576\u057A\u057E\u0582\u0586\u0588\u0593\u0598\u05A1\u05AF\u05B2" +
		"\u05BB\u05BE\u05C6\u05C9\u05CC\u05D1\u05D4\u05E0\u05E3\u05EB\u05F0\u05F4" +
		"\u05F6\u05F8\u0607\u0609\u0614\u0629\u0633\u063E\u0642\u0644\u064C\u0657" +
		"\u0662\u0673\u0679\u0684\u068B\u068F\u0697\u0699\u06A6\u06AE\u06B7\u06BD" +
		"\u06C5\u06CB\u06CF\u06D4\u06D9\u06DF\u06ED\u06EF\u070D\u0718\u0722\u0725" +
		"\u0728\u072D\u0734\u0737\u0740\u0743\u0747\u074A\u074D\u075C\u075F\u0772" +
		"\u0776\u077E\u0782\u079B\u079E\u07A7\u07AD\u07B3\u07B9\u07C6\u07CF\u07E5" +
		"\u07E8\u07EB\u07F5\u07F7\u0800\u0806\u0808\u0810\u081A\u0820\u082E\u0837" +
		"\u083E\u0843\u084A\u0854\u0859\u0860\u087A\u087F\u0881\u0888\u088C\u0893" +
		"\u0897\u08A8\u08B7\u08BE\u08C7\u08D1\u08D6\u08DF\u08E4\u08EC\u08F4\u08F7" +
		"\u08FD\u0900\u0907\u090F\u0912\u091A\u091D\u0937\u0942\u0947\u094E\u0950" +
		"\u095D\u096C\u0970\u0974\u0978\u097E\u0982\u0986\u098A\u098C\u0996\u099D" +
		"\u09A6\u09AD\u09B4\u09BB\u09C2\u09D7\u09E4\u09EF\u0A00\u0A06\u0A0D\u0A14" +
		"\u0A1C\u0A1F\u0A23\u0A27\u0A2A";
	public static readonly _serializedATN: string = Utils.join(
		[
			TrinoSqlParser._serializedATNSegment0,
			TrinoSqlParser._serializedATNSegment1,
			TrinoSqlParser._serializedATNSegment2,
			TrinoSqlParser._serializedATNSegment3,
			TrinoSqlParser._serializedATNSegment4,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TrinoSqlParser.__ATN) {
			TrinoSqlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TrinoSqlParser._serializedATN));
		}

		return TrinoSqlParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(TrinoSqlParser.EOF, 0); }
	public statements(): StatementsContext[];
	public statements(i: number): StatementsContext;
	public statements(i?: number): StatementsContext | StatementsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementsContext);
		} else {
			return this.getRuleContext(i, StatementsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_program; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitProgram) {
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
	public singleStatement(): SingleStatementContext {
		return this.getRuleContext(0, SingleStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_statements; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterStatements) {
			listener.enterStatements(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitStatements) {
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


export class StandaloneClauseContext extends ParserRuleContext {
	public standaloneExpression(): StandaloneExpressionContext | undefined {
		return this.tryGetRuleContext(0, StandaloneExpressionContext);
	}
	public standalonePathSpecification(): StandalonePathSpecificationContext | undefined {
		return this.tryGetRuleContext(0, StandalonePathSpecificationContext);
	}
	public standaloneType(): StandaloneTypeContext | undefined {
		return this.tryGetRuleContext(0, StandaloneTypeContext);
	}
	public standaloneRowPattern(): StandaloneRowPatternContext | undefined {
		return this.tryGetRuleContext(0, StandaloneRowPatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_standaloneClause; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterStandaloneClause) {
			listener.enterStandaloneClause(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitStandaloneClause) {
			listener.exitStandaloneClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitStandaloneClause) {
			return visitor.visitStandaloneClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_singleStatement; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSingleStatement) {
			listener.enterSingleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSingleStatement) {
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_standaloneExpression; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterStandaloneExpression) {
			listener.enterStandaloneExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitStandaloneExpression) {
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
	public pathSpecification(): PathSpecificationContext {
		return this.getRuleContext(0, PathSpecificationContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_standalonePathSpecification; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterStandalonePathSpecification) {
			listener.enterStandalonePathSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitStandalonePathSpecification) {
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
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_standaloneType; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterStandaloneType) {
			listener.enterStandaloneType(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitStandaloneType) {
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
	public rowPattern(): RowPatternContext {
		return this.getRuleContext(0, RowPatternContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_standaloneRowPattern; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterStandaloneRowPattern) {
			listener.enterStandaloneRowPattern(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitStandaloneRowPattern) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_statement; }
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
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterStatementDefault) {
			listener.enterStatementDefault(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitStatementDefault) {
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
export class UseContext extends StatementContext {
	public KW_USE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_USE, 0); }
	public schemaName(): SchemaNameContext {
		return this.getRuleContext(0, SchemaNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterUse) {
			listener.enterUse(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitUse) {
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
export class CreateSchemaContext extends StatementContext {
	public KW_CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CREATE, 0); }
	public KW_SCHEMA(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SCHEMA, 0); }
	public schemaNameCreate(): SchemaNameCreateContext {
		return this.getRuleContext(0, SchemaNameCreateContext);
	}
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_EXISTS, 0); }
	public KW_AUTHORIZATION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_AUTHORIZATION, 0); }
	public principal(): PrincipalContext | undefined {
		return this.tryGetRuleContext(0, PrincipalContext);
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WITH, 0); }
	public properties(): PropertiesContext | undefined {
		return this.tryGetRuleContext(0, PropertiesContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCreateSchema) {
			listener.enterCreateSchema(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCreateSchema) {
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
export class DropSchemaContext extends StatementContext {
	public KW_DROP(): TerminalNode { return this.getToken(TrinoSqlParser.KW_DROP, 0); }
	public KW_SCHEMA(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SCHEMA, 0); }
	public schemaName(): SchemaNameContext {
		return this.getRuleContext(0, SchemaNameContext);
	}
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IF, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_EXISTS, 0); }
	public KW_CASCADE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_CASCADE, 0); }
	public KW_RESTRICT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_RESTRICT, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDropSchema) {
			listener.enterDropSchema(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDropSchema) {
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
export class RenameSchemaContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ALTER, 0); }
	public KW_SCHEMA(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SCHEMA, 0); }
	public schemaName(): SchemaNameContext {
		return this.getRuleContext(0, SchemaNameContext);
	}
	public KW_RENAME(): TerminalNode { return this.getToken(TrinoSqlParser.KW_RENAME, 0); }
	public KW_TO(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TO, 0); }
	public schemaNameCreate(): SchemaNameCreateContext {
		return this.getRuleContext(0, SchemaNameCreateContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRenameSchema) {
			listener.enterRenameSchema(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRenameSchema) {
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
export class SetSchemaAuthorizationContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ALTER, 0); }
	public KW_SCHEMA(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SCHEMA, 0); }
	public schemaName(): SchemaNameContext {
		return this.getRuleContext(0, SchemaNameContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SET, 0); }
	public KW_AUTHORIZATION(): TerminalNode { return this.getToken(TrinoSqlParser.KW_AUTHORIZATION, 0); }
	public principal(): PrincipalContext {
		return this.getRuleContext(0, PrincipalContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSetSchemaAuthorization) {
			listener.enterSetSchemaAuthorization(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSetSchemaAuthorization) {
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
export class CreateTableAsSelectContext extends StatementContext {
	public KW_CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TABLE, 0); }
	public tableNameCreate(): TableNameCreateContext {
		return this.getRuleContext(0, TableNameCreateContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_AS, 0); }
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_EXISTS, 0); }
	public columnListCreate(): ColumnListCreateContext | undefined {
		return this.tryGetRuleContext(0, ColumnListCreateContext);
	}
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_COMMENT, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public KW_WITH(): TerminalNode[];
	public KW_WITH(i: number): TerminalNode;
	public KW_WITH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.KW_WITH);
		} else {
			return this.getToken(TrinoSqlParser.KW_WITH, i);
		}
	}
	public properties(): PropertiesContext | undefined {
		return this.tryGetRuleContext(0, PropertiesContext);
	}
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DATA, 0); }
	public KW_NO(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NO, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCreateTableAsSelect) {
			listener.enterCreateTableAsSelect(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCreateTableAsSelect) {
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
export class CreateTableContext extends StatementContext {
	public KW_CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TABLE, 0); }
	public tableNameCreate(): TableNameCreateContext {
		return this.getRuleContext(0, TableNameCreateContext);
	}
	public tableElement(): TableElementContext[];
	public tableElement(i: number): TableElementContext;
	public tableElement(i?: number): TableElementContext | TableElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableElementContext);
		} else {
			return this.getRuleContext(i, TableElementContext);
		}
	}
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_EXISTS, 0); }
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_COMMENT, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WITH, 0); }
	public properties(): PropertiesContext | undefined {
		return this.tryGetRuleContext(0, PropertiesContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCreateTable) {
			listener.enterCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCreateTable) {
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
export class DropTableContext extends StatementContext {
	public KW_DROP(): TerminalNode { return this.getToken(TrinoSqlParser.KW_DROP, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TABLE, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IF, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_EXISTS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDropTable) {
			listener.enterDropTable(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDropTable) {
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
export class InsertIntoContext extends StatementContext {
	public KW_INSERT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_INSERT, 0); }
	public KW_INTO(): TerminalNode { return this.getToken(TrinoSqlParser.KW_INTO, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public columnList(): ColumnListContext | undefined {
		return this.tryGetRuleContext(0, ColumnListContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterInsertInto) {
			listener.enterInsertInto(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitInsertInto) {
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
export class DeleteContext extends StatementContext {
	public KW_DELETE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_DELETE, 0); }
	public KW_FROM(): TerminalNode { return this.getToken(TrinoSqlParser.KW_FROM, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	public KW_WHERE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDelete) {
			listener.enterDelete(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDelete) {
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
export class TruncateTableContext extends StatementContext {
	public KW_TRUNCATE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TRUNCATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TABLE, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterTruncateTable) {
			listener.enterTruncateTable(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitTruncateTable) {
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
export class RenameTableContext extends StatementContext {
	public _from!: TableNameContext;
	public _to!: TableNameCreateContext;
	public KW_ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TABLE, 0); }
	public KW_RENAME(): TerminalNode { return this.getToken(TrinoSqlParser.KW_RENAME, 0); }
	public KW_TO(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TO, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	public tableNameCreate(): TableNameCreateContext {
		return this.getRuleContext(0, TableNameCreateContext);
	}
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IF, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_EXISTS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRenameTable) {
			listener.enterRenameTable(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRenameTable) {
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
export class CommentTableContext extends StatementContext {
	public KW_COMMENT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_COMMENT, 0); }
	public KW_ON(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ON, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TABLE, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	public KW_IS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_IS, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NULL, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCommentTable) {
			listener.enterCommentTable(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCommentTable) {
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
export class CommentColumnContext extends StatementContext {
	public KW_COMMENT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_COMMENT, 0); }
	public KW_ON(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ON, 0); }
	public KW_COLUMN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_COLUMN, 0); }
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
	}
	public KW_IS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_IS, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NULL, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCommentColumn) {
			listener.enterCommentColumn(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCommentColumn) {
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
export class RenameColumnContext extends StatementContext {
	public _from!: ColumnNameContext;
	public _to!: ColumnNameCreateContext;
	public KW_ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TABLE, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	public KW_RENAME(): TerminalNode { return this.getToken(TrinoSqlParser.KW_RENAME, 0); }
	public KW_COLUMN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_COLUMN, 0); }
	public KW_TO(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TO, 0); }
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
	}
	public columnNameCreate(): ColumnNameCreateContext {
		return this.getRuleContext(0, ColumnNameCreateContext);
	}
	public KW_IF(): TerminalNode[];
	public KW_IF(i: number): TerminalNode;
	public KW_IF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.KW_IF);
		} else {
			return this.getToken(TrinoSqlParser.KW_IF, i);
		}
	}
	public KW_EXISTS(): TerminalNode[];
	public KW_EXISTS(i: number): TerminalNode;
	public KW_EXISTS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.KW_EXISTS);
		} else {
			return this.getToken(TrinoSqlParser.KW_EXISTS, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRenameColumn) {
			listener.enterRenameColumn(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRenameColumn) {
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
export class DropColumnContext extends StatementContext {
	public _column!: ColumnNameContext;
	public KW_ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TABLE, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	public KW_DROP(): TerminalNode { return this.getToken(TrinoSqlParser.KW_DROP, 0); }
	public KW_COLUMN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_COLUMN, 0); }
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
	}
	public KW_IF(): TerminalNode[];
	public KW_IF(i: number): TerminalNode;
	public KW_IF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.KW_IF);
		} else {
			return this.getToken(TrinoSqlParser.KW_IF, i);
		}
	}
	public KW_EXISTS(): TerminalNode[];
	public KW_EXISTS(i: number): TerminalNode;
	public KW_EXISTS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.KW_EXISTS);
		} else {
			return this.getToken(TrinoSqlParser.KW_EXISTS, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDropColumn) {
			listener.enterDropColumn(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDropColumn) {
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
export class AddColumnContext extends StatementContext {
	public _column!: ColumnDefinitionContext;
	public KW_ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TABLE, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	public KW_ADD(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ADD, 0); }
	public KW_COLUMN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_COLUMN, 0); }
	public columnDefinition(): ColumnDefinitionContext {
		return this.getRuleContext(0, ColumnDefinitionContext);
	}
	public KW_IF(): TerminalNode[];
	public KW_IF(i: number): TerminalNode;
	public KW_IF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.KW_IF);
		} else {
			return this.getToken(TrinoSqlParser.KW_IF, i);
		}
	}
	public KW_EXISTS(): TerminalNode[];
	public KW_EXISTS(i: number): TerminalNode;
	public KW_EXISTS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.KW_EXISTS);
		} else {
			return this.getToken(TrinoSqlParser.KW_EXISTS, i);
		}
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NOT, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterAddColumn) {
			listener.enterAddColumn(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitAddColumn) {
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
export class SetTableAuthorizationContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TABLE, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SET, 0); }
	public KW_AUTHORIZATION(): TerminalNode { return this.getToken(TrinoSqlParser.KW_AUTHORIZATION, 0); }
	public principal(): PrincipalContext {
		return this.getRuleContext(0, PrincipalContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSetTableAuthorization) {
			listener.enterSetTableAuthorization(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSetTableAuthorization) {
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
export class SetTablePropertiesContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TABLE, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SET, 0); }
	public KW_PROPERTIES(): TerminalNode { return this.getToken(TrinoSqlParser.KW_PROPERTIES, 0); }
	public propertyAssignments(): PropertyAssignmentsContext {
		return this.getRuleContext(0, PropertyAssignmentsContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSetTableProperties) {
			listener.enterSetTableProperties(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSetTableProperties) {
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
export class TableExecuteContext extends StatementContext {
	public _procedureName!: IdentifierContext;
	public _where!: BooleanExpressionContext;
	public KW_ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TABLE, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	public KW_EXECUTE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_EXECUTE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_WHERE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public callArgument(): CallArgumentContext[];
	public callArgument(i: number): CallArgumentContext;
	public callArgument(i?: number): CallArgumentContext | CallArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CallArgumentContext);
		} else {
			return this.getRuleContext(i, CallArgumentContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterTableExecute) {
			listener.enterTableExecute(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitTableExecute) {
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
export class AnalyzeContext extends StatementContext {
	public KW_ANALYZE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ANALYZE, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WITH, 0); }
	public properties(): PropertiesContext | undefined {
		return this.tryGetRuleContext(0, PropertiesContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterAnalyze) {
			listener.enterAnalyze(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitAnalyze) {
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
export class CreateMaterializedViewContext extends StatementContext {
	public KW_CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CREATE, 0); }
	public KW_MATERIALIZED(): TerminalNode { return this.getToken(TrinoSqlParser.KW_MATERIALIZED, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_VIEW, 0); }
	public viewNameCreate(): ViewNameCreateContext {
		return this.getRuleContext(0, ViewNameCreateContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_AS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public KW_OR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_OR, 0); }
	public KW_REPLACE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_REPLACE, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_EXISTS, 0); }
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_COMMENT, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WITH, 0); }
	public properties(): PropertiesContext | undefined {
		return this.tryGetRuleContext(0, PropertiesContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCreateMaterializedView) {
			listener.enterCreateMaterializedView(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCreateMaterializedView) {
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
export class CreateViewContext extends StatementContext {
	public KW_CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CREATE, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_VIEW, 0); }
	public viewNameCreate(): ViewNameCreateContext {
		return this.getRuleContext(0, ViewNameCreateContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_AS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public KW_OR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_OR, 0); }
	public KW_REPLACE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_REPLACE, 0); }
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_COMMENT, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public KW_SECURITY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SECURITY, 0); }
	public KW_DEFINER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DEFINER, 0); }
	public KW_INVOKER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_INVOKER, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCreateView) {
			listener.enterCreateView(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCreateView) {
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
export class RefreshMaterializedViewContext extends StatementContext {
	public KW_REFRESH(): TerminalNode { return this.getToken(TrinoSqlParser.KW_REFRESH, 0); }
	public KW_MATERIALIZED(): TerminalNode { return this.getToken(TrinoSqlParser.KW_MATERIALIZED, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_VIEW, 0); }
	public viewName(): ViewNameContext {
		return this.getRuleContext(0, ViewNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRefreshMaterializedView) {
			listener.enterRefreshMaterializedView(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRefreshMaterializedView) {
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
export class DropMaterializedViewContext extends StatementContext {
	public KW_DROP(): TerminalNode { return this.getToken(TrinoSqlParser.KW_DROP, 0); }
	public KW_MATERIALIZED(): TerminalNode { return this.getToken(TrinoSqlParser.KW_MATERIALIZED, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_VIEW, 0); }
	public viewName(): ViewNameContext {
		return this.getRuleContext(0, ViewNameContext);
	}
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IF, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_EXISTS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDropMaterializedView) {
			listener.enterDropMaterializedView(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDropMaterializedView) {
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
export class RenameMaterializedViewContext extends StatementContext {
	public _from!: ViewNameContext;
	public _to!: ViewNameCreateContext;
	public KW_ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ALTER, 0); }
	public KW_MATERIALIZED(): TerminalNode { return this.getToken(TrinoSqlParser.KW_MATERIALIZED, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_VIEW, 0); }
	public KW_RENAME(): TerminalNode { return this.getToken(TrinoSqlParser.KW_RENAME, 0); }
	public KW_TO(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TO, 0); }
	public viewName(): ViewNameContext {
		return this.getRuleContext(0, ViewNameContext);
	}
	public viewNameCreate(): ViewNameCreateContext {
		return this.getRuleContext(0, ViewNameCreateContext);
	}
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IF, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_EXISTS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRenameMaterializedView) {
			listener.enterRenameMaterializedView(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRenameMaterializedView) {
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
export class SetMaterializedViewPropertiesContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ALTER, 0); }
	public KW_MATERIALIZED(): TerminalNode { return this.getToken(TrinoSqlParser.KW_MATERIALIZED, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_VIEW, 0); }
	public viewName(): ViewNameContext {
		return this.getRuleContext(0, ViewNameContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SET, 0); }
	public KW_PROPERTIES(): TerminalNode { return this.getToken(TrinoSqlParser.KW_PROPERTIES, 0); }
	public propertyAssignments(): PropertyAssignmentsContext {
		return this.getRuleContext(0, PropertyAssignmentsContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSetMaterializedViewProperties) {
			listener.enterSetMaterializedViewProperties(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSetMaterializedViewProperties) {
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
export class DropViewContext extends StatementContext {
	public KW_DROP(): TerminalNode { return this.getToken(TrinoSqlParser.KW_DROP, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_VIEW, 0); }
	public viewName(): ViewNameContext {
		return this.getRuleContext(0, ViewNameContext);
	}
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IF, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_EXISTS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDropView) {
			listener.enterDropView(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDropView) {
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
export class RenameViewContext extends StatementContext {
	public _from!: ViewNameContext;
	public _to!: ViewNameCreateContext;
	public KW_ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ALTER, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_VIEW, 0); }
	public KW_RENAME(): TerminalNode { return this.getToken(TrinoSqlParser.KW_RENAME, 0); }
	public KW_TO(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TO, 0); }
	public viewName(): ViewNameContext {
		return this.getRuleContext(0, ViewNameContext);
	}
	public viewNameCreate(): ViewNameCreateContext {
		return this.getRuleContext(0, ViewNameCreateContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRenameView) {
			listener.enterRenameView(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRenameView) {
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
export class SetViewAuthorizationContext extends StatementContext {
	public _from!: ViewNameContext;
	public KW_ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ALTER, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_VIEW, 0); }
	public KW_SET(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SET, 0); }
	public KW_AUTHORIZATION(): TerminalNode { return this.getToken(TrinoSqlParser.KW_AUTHORIZATION, 0); }
	public principal(): PrincipalContext {
		return this.getRuleContext(0, PrincipalContext);
	}
	public viewName(): ViewNameContext {
		return this.getRuleContext(0, ViewNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSetViewAuthorization) {
			listener.enterSetViewAuthorization(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSetViewAuthorization) {
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
export class CallContext extends StatementContext {
	public KW_CALL(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CALL, 0); }
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public callArgument(): CallArgumentContext[];
	public callArgument(i: number): CallArgumentContext;
	public callArgument(i?: number): CallArgumentContext | CallArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CallArgumentContext);
		} else {
			return this.getRuleContext(i, CallArgumentContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCall) {
			listener.enterCall(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCall) {
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
export class CreateRoleContext extends StatementContext {
	public _name!: IdentifierContext;
	public KW_CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CREATE, 0); }
	public KW_ROLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ROLE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WITH, 0); }
	public KW_ADMIN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ADMIN, 0); }
	public grantor(): GrantorContext | undefined {
		return this.tryGetRuleContext(0, GrantorContext);
	}
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IN, 0); }
	public catalogName(): CatalogNameContext | undefined {
		return this.tryGetRuleContext(0, CatalogNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCreateRole) {
			listener.enterCreateRole(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCreateRole) {
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
export class DropRoleContext extends StatementContext {
	public _name!: IdentifierContext;
	public KW_DROP(): TerminalNode { return this.getToken(TrinoSqlParser.KW_DROP, 0); }
	public KW_ROLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ROLE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDropRole) {
			listener.enterDropRole(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDropRole) {
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
export class GrantRolesContext extends StatementContext {
	public KW_GRANT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_GRANT, 0); }
	public roles(): RolesContext {
		return this.getRuleContext(0, RolesContext);
	}
	public KW_TO(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TO, 0); }
	public principal(): PrincipalContext[];
	public principal(i: number): PrincipalContext;
	public principal(i?: number): PrincipalContext | PrincipalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrincipalContext);
		} else {
			return this.getRuleContext(i, PrincipalContext);
		}
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WITH, 0); }
	public KW_ADMIN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ADMIN, 0); }
	public KW_OPTION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_OPTION, 0); }
	public KW_GRANTED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_GRANTED, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_BY, 0); }
	public grantor(): GrantorContext | undefined {
		return this.tryGetRuleContext(0, GrantorContext);
	}
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IN, 0); }
	public catalogName(): CatalogNameContext | undefined {
		return this.tryGetRuleContext(0, CatalogNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterGrantRoles) {
			listener.enterGrantRoles(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitGrantRoles) {
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
export class RevokeRolesContext extends StatementContext {
	public KW_REVOKE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_REVOKE, 0); }
	public roles(): RolesContext {
		return this.getRuleContext(0, RolesContext);
	}
	public KW_FROM(): TerminalNode { return this.getToken(TrinoSqlParser.KW_FROM, 0); }
	public principal(): PrincipalContext[];
	public principal(i: number): PrincipalContext;
	public principal(i?: number): PrincipalContext | PrincipalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrincipalContext);
		} else {
			return this.getRuleContext(i, PrincipalContext);
		}
	}
	public KW_ADMIN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ADMIN, 0); }
	public KW_OPTION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_OPTION, 0); }
	public KW_FOR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FOR, 0); }
	public KW_GRANTED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_GRANTED, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_BY, 0); }
	public grantor(): GrantorContext | undefined {
		return this.tryGetRuleContext(0, GrantorContext);
	}
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IN, 0); }
	public catalogName(): CatalogNameContext | undefined {
		return this.tryGetRuleContext(0, CatalogNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRevokeRoles) {
			listener.enterRevokeRoles(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRevokeRoles) {
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
export class SetRoleContext extends StatementContext {
	public _role!: IdentifierContext;
	public KW_SET(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SET, 0); }
	public KW_ROLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ROLE, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ALL, 0); }
	public KW_NONE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NONE, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IN, 0); }
	public catalogName(): CatalogNameContext | undefined {
		return this.tryGetRuleContext(0, CatalogNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSetRole) {
			listener.enterSetRole(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSetRole) {
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
export class GrantContext extends StatementContext {
	public _grantee!: PrincipalContext;
	public KW_GRANT(): TerminalNode[];
	public KW_GRANT(i: number): TerminalNode;
	public KW_GRANT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.KW_GRANT);
		} else {
			return this.getToken(TrinoSqlParser.KW_GRANT, i);
		}
	}
	public KW_ON(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ON, 0); }
	public KW_TO(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TO, 0); }
	public principal(): PrincipalContext {
		return this.getRuleContext(0, PrincipalContext);
	}
	public privilege(): PrivilegeContext[];
	public privilege(i: number): PrivilegeContext;
	public privilege(i?: number): PrivilegeContext | PrivilegeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrivilegeContext);
		} else {
			return this.getRuleContext(i, PrivilegeContext);
		}
	}
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ALL, 0); }
	public KW_PRIVILEGES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PRIVILEGES, 0); }
	public schemaName(): SchemaNameContext | undefined {
		return this.tryGetRuleContext(0, SchemaNameContext);
	}
	public tableName(): TableNameContext | undefined {
		return this.tryGetRuleContext(0, TableNameContext);
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WITH, 0); }
	public KW_OPTION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_OPTION, 0); }
	public KW_SCHEMA(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SCHEMA, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TABLE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterGrant) {
			listener.enterGrant(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitGrant) {
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
export class DenyContext extends StatementContext {
	public _grantee!: PrincipalContext;
	public KW_DENY(): TerminalNode { return this.getToken(TrinoSqlParser.KW_DENY, 0); }
	public KW_ON(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ON, 0); }
	public KW_TO(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TO, 0); }
	public principal(): PrincipalContext {
		return this.getRuleContext(0, PrincipalContext);
	}
	public privilege(): PrivilegeContext[];
	public privilege(i: number): PrivilegeContext;
	public privilege(i?: number): PrivilegeContext | PrivilegeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrivilegeContext);
		} else {
			return this.getRuleContext(i, PrivilegeContext);
		}
	}
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ALL, 0); }
	public KW_PRIVILEGES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PRIVILEGES, 0); }
	public schemaName(): SchemaNameContext | undefined {
		return this.tryGetRuleContext(0, SchemaNameContext);
	}
	public tableName(): TableNameContext | undefined {
		return this.tryGetRuleContext(0, TableNameContext);
	}
	public KW_SCHEMA(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SCHEMA, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TABLE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDeny) {
			listener.enterDeny(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDeny) {
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
export class RevokeContext extends StatementContext {
	public _grantee!: PrincipalContext;
	public KW_REVOKE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_REVOKE, 0); }
	public KW_ON(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ON, 0); }
	public KW_FROM(): TerminalNode { return this.getToken(TrinoSqlParser.KW_FROM, 0); }
	public principal(): PrincipalContext {
		return this.getRuleContext(0, PrincipalContext);
	}
	public privilege(): PrivilegeContext[];
	public privilege(i: number): PrivilegeContext;
	public privilege(i?: number): PrivilegeContext | PrivilegeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrivilegeContext);
		} else {
			return this.getRuleContext(i, PrivilegeContext);
		}
	}
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ALL, 0); }
	public KW_PRIVILEGES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PRIVILEGES, 0); }
	public KW_GRANT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_GRANT, 0); }
	public KW_OPTION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_OPTION, 0); }
	public KW_FOR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FOR, 0); }
	public schemaName(): SchemaNameContext | undefined {
		return this.tryGetRuleContext(0, SchemaNameContext);
	}
	public tableName(): TableNameContext | undefined {
		return this.tryGetRuleContext(0, TableNameContext);
	}
	public KW_SCHEMA(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SCHEMA, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TABLE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRevoke) {
			listener.enterRevoke(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRevoke) {
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
export class ShowGrantsContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_GRANTS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_GRANTS, 0); }
	public KW_ON(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ON, 0); }
	public tableName(): TableNameContext | undefined {
		return this.tryGetRuleContext(0, TableNameContext);
	}
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TABLE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterShowGrants) {
			listener.enterShowGrants(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitShowGrants) {
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
export class ExplainContext extends StatementContext {
	public KW_EXPLAIN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_EXPLAIN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public KW_ANALYZE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ANALYZE, 0); }
	public KW_VERBOSE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_VERBOSE, 0); }
	public explainOption(): ExplainOptionContext[];
	public explainOption(i: number): ExplainOptionContext;
	public explainOption(i?: number): ExplainOptionContext | ExplainOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExplainOptionContext);
		} else {
			return this.getRuleContext(i, ExplainOptionContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterExplain) {
			listener.enterExplain(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitExplain) {
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
export class ShowCreateTableContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TABLE, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterShowCreateTable) {
			listener.enterShowCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitShowCreateTable) {
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
export class ShowCreateSchemaContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CREATE, 0); }
	public KW_SCHEMA(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SCHEMA, 0); }
	public schemaName(): SchemaNameContext {
		return this.getRuleContext(0, SchemaNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterShowCreateSchema) {
			listener.enterShowCreateSchema(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitShowCreateSchema) {
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
export class ShowCreateViewContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CREATE, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_VIEW, 0); }
	public viewName(): ViewNameContext {
		return this.getRuleContext(0, ViewNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterShowCreateView) {
			listener.enterShowCreateView(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitShowCreateView) {
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
export class ShowCreateMaterializedViewContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CREATE, 0); }
	public KW_MATERIALIZED(): TerminalNode { return this.getToken(TrinoSqlParser.KW_MATERIALIZED, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_VIEW, 0); }
	public viewName(): ViewNameContext {
		return this.getRuleContext(0, ViewNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterShowCreateMaterializedView) {
			listener.enterShowCreateMaterializedView(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitShowCreateMaterializedView) {
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
export class ShowTablesContext extends StatementContext {
	public _pattern!: StringContext;
	public _escape!: StringContext;
	public KW_SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_TABLES(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TABLES, 0); }
	public schemaName(): SchemaNameContext | undefined {
		return this.tryGetRuleContext(0, SchemaNameContext);
	}
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LIKE, 0); }
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FROM, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IN, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public KW_ESCAPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ESCAPE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterShowTables) {
			listener.enterShowTables(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitShowTables) {
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
export class ShowSchemasContext extends StatementContext {
	public _pattern!: StringContext;
	public _escape!: StringContext;
	public KW_SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_SCHEMAS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SCHEMAS, 0); }
	public catalogName(): CatalogNameContext | undefined {
		return this.tryGetRuleContext(0, CatalogNameContext);
	}
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LIKE, 0); }
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FROM, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IN, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public KW_ESCAPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ESCAPE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterShowSchemas) {
			listener.enterShowSchemas(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitShowSchemas) {
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
export class ShowCatalogsContext extends StatementContext {
	public _pattern!: StringContext;
	public _escape!: StringContext;
	public KW_SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_CATALOGS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CATALOGS, 0); }
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LIKE, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public KW_ESCAPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ESCAPE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterShowCatalogs) {
			listener.enterShowCatalogs(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitShowCatalogs) {
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
export class ShowColumnsContext extends StatementContext {
	public _pattern!: StringContext;
	public _escape!: StringContext;
	public KW_SHOW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_COLUMNS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_COLUMNS, 0); }
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FROM, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IN, 0); }
	public tableOrViewName(): TableOrViewNameContext | undefined {
		return this.tryGetRuleContext(0, TableOrViewNameContext);
	}
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LIKE, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public KW_ESCAPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ESCAPE, 0); }
	public KW_DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DESCRIBE, 0); }
	public KW_DESC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DESC, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterShowColumns) {
			listener.enterShowColumns(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitShowColumns) {
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
export class ShowStatsContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_STATS, 0); }
	public KW_FOR(): TerminalNode { return this.getToken(TrinoSqlParser.KW_FOR, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterShowStats) {
			listener.enterShowStats(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitShowStats) {
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
export class ShowStatsForQueryContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_STATS, 0); }
	public KW_FOR(): TerminalNode { return this.getToken(TrinoSqlParser.KW_FOR, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterShowStatsForQuery) {
			listener.enterShowStatsForQuery(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitShowStatsForQuery) {
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
export class ShowRolesContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_ROLES(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ROLES, 0); }
	public KW_CURRENT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_CURRENT, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FROM, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IN, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterShowRoles) {
			listener.enterShowRoles(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitShowRoles) {
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
export class ShowRoleGrantsContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_ROLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ROLE, 0); }
	public KW_GRANTS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_GRANTS, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FROM, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IN, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterShowRoleGrants) {
			listener.enterShowRoleGrants(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitShowRoleGrants) {
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
export class ShowFunctionsContext extends StatementContext {
	public _pattern!: StringContext;
	public _escape!: StringContext;
	public KW_SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_FUNCTIONS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_FUNCTIONS, 0); }
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LIKE, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public KW_ESCAPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ESCAPE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterShowFunctions) {
			listener.enterShowFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitShowFunctions) {
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
export class ShowSessionContext extends StatementContext {
	public _pattern!: StringContext;
	public _escape!: StringContext;
	public KW_SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_SESSION(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SESSION, 0); }
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LIKE, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public KW_ESCAPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ESCAPE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterShowSession) {
			listener.enterShowSession(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitShowSession) {
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
export class SetSessionContext extends StatementContext {
	public KW_SET(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SET, 0); }
	public KW_SESSION(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SESSION, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public EQ(): TerminalNode { return this.getToken(TrinoSqlParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSetSession) {
			listener.enterSetSession(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSetSession) {
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
export class ResetSessionContext extends StatementContext {
	public KW_RESET(): TerminalNode { return this.getToken(TrinoSqlParser.KW_RESET, 0); }
	public KW_SESSION(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SESSION, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterResetSession) {
			listener.enterResetSession(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitResetSession) {
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
export class StartTransactionContext extends StatementContext {
	public KW_START(): TerminalNode { return this.getToken(TrinoSqlParser.KW_START, 0); }
	public KW_TRANSACTION(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TRANSACTION, 0); }
	public transactionMode(): TransactionModeContext[];
	public transactionMode(i: number): TransactionModeContext;
	public transactionMode(i?: number): TransactionModeContext | TransactionModeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransactionModeContext);
		} else {
			return this.getRuleContext(i, TransactionModeContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterStartTransaction) {
			listener.enterStartTransaction(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitStartTransaction) {
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
export class CommitContext extends StatementContext {
	public KW_COMMIT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_COMMIT, 0); }
	public KW_WORK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WORK, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCommit) {
			listener.enterCommit(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCommit) {
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
export class RollbackContext extends StatementContext {
	public KW_ROLLBACK(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ROLLBACK, 0); }
	public KW_WORK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WORK, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRollback) {
			listener.enterRollback(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRollback) {
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
export class PrepareContext extends StatementContext {
	public KW_PREPARE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_PREPARE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_FROM(): TerminalNode { return this.getToken(TrinoSqlParser.KW_FROM, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterPrepare) {
			listener.enterPrepare(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitPrepare) {
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
export class DeallocateContext extends StatementContext {
	public KW_DEALLOCATE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_DEALLOCATE, 0); }
	public KW_PREPARE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_PREPARE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDeallocate) {
			listener.enterDeallocate(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDeallocate) {
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
export class ExecuteContext extends StatementContext {
	public KW_EXECUTE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_EXECUTE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_USING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_USING, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterExecute) {
			listener.enterExecute(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitExecute) {
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
export class DescribeInputContext extends StatementContext {
	public KW_DESCRIBE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_DESCRIBE, 0); }
	public KW_INPUT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_INPUT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDescribeInput) {
			listener.enterDescribeInput(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDescribeInput) {
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
export class DescribeOutputContext extends StatementContext {
	public KW_DESCRIBE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_DESCRIBE, 0); }
	public KW_OUTPUT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_OUTPUT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDescribeOutput) {
			listener.enterDescribeOutput(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDescribeOutput) {
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
export class SetPathContext extends StatementContext {
	public KW_SET(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SET, 0); }
	public KW_PATH(): TerminalNode { return this.getToken(TrinoSqlParser.KW_PATH, 0); }
	public pathSpecification(): PathSpecificationContext {
		return this.getRuleContext(0, PathSpecificationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSetPath) {
			listener.enterSetPath(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSetPath) {
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
export class SetTimeZoneContext extends StatementContext {
	public KW_SET(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SET, 0); }
	public KW_TIME(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TIME, 0); }
	public KW_ZONE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ZONE, 0); }
	public KW_LOCAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LOCAL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSetTimeZone) {
			listener.enterSetTimeZone(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSetTimeZone) {
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
export class UpdateContext extends StatementContext {
	public _where!: BooleanExpressionContext;
	public KW_UPDATE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_UPDATE, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SET, 0); }
	public updateAssignment(): UpdateAssignmentContext[];
	public updateAssignment(i: number): UpdateAssignmentContext;
	public updateAssignment(i?: number): UpdateAssignmentContext | UpdateAssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UpdateAssignmentContext);
		} else {
			return this.getRuleContext(i, UpdateAssignmentContext);
		}
	}
	public KW_WHERE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterUpdate) {
			listener.enterUpdate(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitUpdate) {
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
export class MergeContext extends StatementContext {
	public KW_MERGE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_MERGE, 0); }
	public KW_INTO(): TerminalNode { return this.getToken(TrinoSqlParser.KW_INTO, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	public KW_USING(): TerminalNode { return this.getToken(TrinoSqlParser.KW_USING, 0); }
	public relation(): RelationContext {
		return this.getRuleContext(0, RelationContext);
	}
	public KW_ON(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public mergeCase(): MergeCaseContext[];
	public mergeCase(i: number): MergeCaseContext;
	public mergeCase(i?: number): MergeCaseContext | MergeCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MergeCaseContext);
		} else {
			return this.getRuleContext(i, MergeCaseContext);
		}
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_AS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterMerge) {
			listener.enterMerge(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitMerge) {
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
export class ShowTableCommentContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_COMMENT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_COMMENT, 0); }
	public KW_ON(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ON, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TABLE, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterShowTableComment) {
			listener.enterShowTableComment(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitShowTableComment) {
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
export class ShowColumnCommentContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_COMMENT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_COMMENT, 0); }
	public KW_ON(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ON, 0); }
	public KW_COLUMN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_COLUMN, 0); }
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterShowColumnComment) {
			listener.enterShowColumnComment(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitShowColumnComment) {
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


export class QueryContext extends ParserRuleContext {
	public queryNoWith(): QueryNoWithContext {
		return this.getRuleContext(0, QueryNoWithContext);
	}
	public with(): WithContext | undefined {
		return this.tryGetRuleContext(0, WithContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_query; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitQuery) {
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
	public KW_WITH(): TerminalNode { return this.getToken(TrinoSqlParser.KW_WITH, 0); }
	public namedQuery(): NamedQueryContext[];
	public namedQuery(i: number): NamedQueryContext;
	public namedQuery(i?: number): NamedQueryContext | NamedQueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedQueryContext);
		} else {
			return this.getRuleContext(i, NamedQueryContext);
		}
	}
	public KW_RECURSIVE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_RECURSIVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_with; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterWith) {
			listener.enterWith(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitWith) {
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
	public columnDefinition(): ColumnDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ColumnDefinitionContext);
	}
	public likeClause(): LikeClauseContext | undefined {
		return this.tryGetRuleContext(0, LikeClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_tableElement; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterTableElement) {
			listener.enterTableElement(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitTableElement) {
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
	public columnNameCreate(): ColumnNameCreateContext {
		return this.getRuleContext(0, ColumnNameCreateContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NOT, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NULL, 0); }
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_COMMENT, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WITH, 0); }
	public properties(): PropertiesContext | undefined {
		return this.tryGetRuleContext(0, PropertiesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_columnDefinition; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterColumnDefinition) {
			listener.enterColumnDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitColumnDefinition) {
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
	public KW_LIKE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_LIKE, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	public KW_PROPERTIES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PROPERTIES, 0); }
	public KW_INCLUDING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_INCLUDING, 0); }
	public KW_EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_EXCLUDING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_likeClause; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterLikeClause) {
			listener.enterLikeClause(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitLikeClause) {
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
	public propertyAssignments(): PropertyAssignmentsContext {
		return this.getRuleContext(0, PropertyAssignmentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_properties; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterProperties) {
			listener.enterProperties(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitProperties) {
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
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_propertyAssignments; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterPropertyAssignments) {
			listener.enterPropertyAssignments(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitPropertyAssignments) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EQ(): TerminalNode { return this.getToken(TrinoSqlParser.EQ, 0); }
	public propertyValue(): PropertyValueContext {
		return this.getRuleContext(0, PropertyValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_property; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitProperty) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_propertyValue; }
	public copyFrom(ctx: PropertyValueContext): void {
		super.copyFrom(ctx);
	}
}
export class DefaultPropertyValueContext extends PropertyValueContext {
	public KW_DEFAULT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_DEFAULT, 0); }
	constructor(ctx: PropertyValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDefaultPropertyValue) {
			listener.enterDefaultPropertyValue(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDefaultPropertyValue) {
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PropertyValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterNonDefaultPropertyValue) {
			listener.enterNonDefaultPropertyValue(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitNonDefaultPropertyValue) {
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
	public queryTerm(): QueryTermContext {
		return this.getRuleContext(0, QueryTermContext);
	}
	public KW_ORDER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ORDER, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_BY, 0); }
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public KW_OFFSET(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_OFFSET, 0); }
	public rowCount(): RowCountContext[];
	public rowCount(i: number): RowCountContext;
	public rowCount(i?: number): RowCountContext | RowCountContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowCountContext);
		} else {
			return this.getRuleContext(i, RowCountContext);
		}
	}
	public KW_LIMIT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LIMIT, 0); }
	public KW_FETCH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FETCH, 0); }
	public limitRowCount(): LimitRowCountContext | undefined {
		return this.tryGetRuleContext(0, LimitRowCountContext);
	}
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FIRST, 0); }
	public KW_NEXT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NEXT, 0); }
	public KW_ROW(): TerminalNode[];
	public KW_ROW(i: number): TerminalNode;
	public KW_ROW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.KW_ROW);
		} else {
			return this.getToken(TrinoSqlParser.KW_ROW, i);
		}
	}
	public KW_ROWS(): TerminalNode[];
	public KW_ROWS(i: number): TerminalNode;
	public KW_ROWS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.KW_ROWS);
		} else {
			return this.getToken(TrinoSqlParser.KW_ROWS, i);
		}
	}
	public KW_ONLY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ONLY, 0); }
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WITH, 0); }
	public KW_TIES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TIES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_queryNoWith; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterQueryNoWith) {
			listener.enterQueryNoWith(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitQueryNoWith) {
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
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ALL, 0); }
	public rowCount(): RowCountContext | undefined {
		return this.tryGetRuleContext(0, RowCountContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_limitRowCount; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterLimitRowCount) {
			listener.enterLimitRowCount(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitLimitRowCount) {
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
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.INTEGER_VALUE, 0); }
	public QUESTION_MARK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.QUESTION_MARK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_rowCount; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRowCount) {
			listener.enterRowCount(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRowCount) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_queryTerm; }
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
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterQueryTermDefault) {
			listener.enterQueryTermDefault(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitQueryTermDefault) {
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
	public queryTerm(): QueryTermContext[];
	public queryTerm(i: number): QueryTermContext;
	public queryTerm(i?: number): QueryTermContext | QueryTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryTermContext);
		} else {
			return this.getRuleContext(i, QueryTermContext);
		}
	}
	public KW_INTERSECT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_INTERSECT, 0); }
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public KW_UNION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_UNION, 0); }
	public KW_EXCEPT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_EXCEPT, 0); }
	constructor(ctx: QueryTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSetOperation) {
			listener.enterSetOperation(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSetOperation) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_queryPrimary; }
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
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterQueryPrimaryDefault) {
			listener.enterQueryPrimaryDefault(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitQueryPrimaryDefault) {
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
	public KW_TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TABLE, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterTable) {
			listener.enterTable(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitTable) {
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
	public KW_VALUES(): TerminalNode { return this.getToken(TrinoSqlParser.KW_VALUES, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterInlineTable) {
			listener.enterInlineTable(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitInlineTable) {
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
export class SubqueryContext extends QueryPrimaryContext {
	public queryNoWith(): QueryNoWithContext {
		return this.getRuleContext(0, QueryNoWithContext);
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSubquery) {
			listener.enterSubquery(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSubquery) {
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


export class SortItemContext extends ParserRuleContext {
	public _ordering!: Token;
	public _nullOrdering!: Token;
	public columnName(): ColumnNameContext | undefined {
		return this.tryGetRuleContext(0, ColumnNameContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NULLS, 0); }
	public KW_ASC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ASC, 0); }
	public KW_DESC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DESC, 0); }
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FIRST, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LAST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_sortItem; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSortItem) {
			listener.enterSortItem(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSortItem) {
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
	public KW_SELECT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SELECT, 0); }
	public selectItem(): SelectItemContext[];
	public selectItem(i: number): SelectItemContext;
	public selectItem(i?: number): SelectItemContext | SelectItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectItemContext);
		} else {
			return this.getRuleContext(i, SelectItemContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FROM, 0); }
	public relation(): RelationContext[];
	public relation(i: number): RelationContext;
	public relation(i?: number): RelationContext | RelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationContext);
		} else {
			return this.getRuleContext(i, RelationContext);
		}
	}
	public KW_WHERE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WHERE, 0); }
	public KW_GROUP(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_GROUP, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_BY, 0); }
	public groupBy(): GroupByContext | undefined {
		return this.tryGetRuleContext(0, GroupByContext);
	}
	public KW_HAVING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_HAVING, 0); }
	public KW_WINDOW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WINDOW, 0); }
	public windowDefinition(): WindowDefinitionContext[];
	public windowDefinition(i: number): WindowDefinitionContext;
	public windowDefinition(i?: number): WindowDefinitionContext | WindowDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WindowDefinitionContext);
		} else {
			return this.getRuleContext(i, WindowDefinitionContext);
		}
	}
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_querySpecification; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterQuerySpecification) {
			listener.enterQuerySpecification(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitQuerySpecification) {
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
	public groupingElement(): GroupingElementContext[];
	public groupingElement(i: number): GroupingElementContext;
	public groupingElement(i?: number): GroupingElementContext | GroupingElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupingElementContext);
		} else {
			return this.getRuleContext(i, GroupingElementContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_groupBy; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterGroupBy) {
			listener.enterGroupBy(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitGroupBy) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_groupingElement; }
	public copyFrom(ctx: GroupingElementContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleGroupingSetContext extends GroupingElementContext {
	public groupingSet(): GroupingSetContext {
		return this.getRuleContext(0, GroupingSetContext);
	}
	constructor(ctx: GroupingElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSingleGroupingSet) {
			listener.enterSingleGroupingSet(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSingleGroupingSet) {
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
export class RollupContext extends GroupingElementContext {
	public KW_ROLLUP(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ROLLUP, 0); }
	public groupingTerm(): GroupingTermContext[];
	public groupingTerm(i: number): GroupingTermContext;
	public groupingTerm(i?: number): GroupingTermContext | GroupingTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupingTermContext);
		} else {
			return this.getRuleContext(i, GroupingTermContext);
		}
	}
	constructor(ctx: GroupingElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRollup) {
			listener.enterRollup(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRollup) {
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
export class CubeContext extends GroupingElementContext {
	public KW_CUBE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CUBE, 0); }
	public groupingTerm(): GroupingTermContext[];
	public groupingTerm(i: number): GroupingTermContext;
	public groupingTerm(i?: number): GroupingTermContext | GroupingTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupingTermContext);
		} else {
			return this.getRuleContext(i, GroupingTermContext);
		}
	}
	constructor(ctx: GroupingElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCube) {
			listener.enterCube(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCube) {
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
export class MultipleGroupingSetsContext extends GroupingElementContext {
	public KW_GROUPING(): TerminalNode { return this.getToken(TrinoSqlParser.KW_GROUPING, 0); }
	public KW_SETS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SETS, 0); }
	public groupingSet(): GroupingSetContext[];
	public groupingSet(i: number): GroupingSetContext;
	public groupingSet(i?: number): GroupingSetContext | GroupingSetContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupingSetContext);
		} else {
			return this.getRuleContext(i, GroupingSetContext);
		}
	}
	constructor(ctx: GroupingElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterMultipleGroupingSets) {
			listener.enterMultipleGroupingSets(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitMultipleGroupingSets) {
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


export class GroupingSetContext extends ParserRuleContext {
	public groupingTerm(): GroupingTermContext[];
	public groupingTerm(i: number): GroupingTermContext;
	public groupingTerm(i?: number): GroupingTermContext | GroupingTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupingTermContext);
		} else {
			return this.getRuleContext(i, GroupingTermContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_groupingSet; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterGroupingSet) {
			listener.enterGroupingSet(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitGroupingSet) {
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


export class GroupingTermContext extends ParserRuleContext {
	public columnName(): ColumnNameContext | undefined {
		return this.tryGetRuleContext(0, ColumnNameContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_groupingTerm; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterGroupingTerm) {
			listener.enterGroupingTerm(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitGroupingTerm) {
			listener.exitGroupingTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitGroupingTerm) {
			return visitor.visitGroupingTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowDefinitionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public KW_AS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_AS, 0); }
	public windowSpecification(): WindowSpecificationContext {
		return this.getRuleContext(0, WindowSpecificationContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_windowDefinition; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterWindowDefinition) {
			listener.enterWindowDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitWindowDefinition) {
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
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PARTITION, 0); }
	public KW_BY(): TerminalNode[];
	public KW_BY(i: number): TerminalNode;
	public KW_BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.KW_BY);
		} else {
			return this.getToken(TrinoSqlParser.KW_BY, i);
		}
	}
	public KW_ORDER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ORDER, 0); }
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public windowFrame(): WindowFrameContext | undefined {
		return this.tryGetRuleContext(0, WindowFrameContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
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
	public get ruleIndex(): number { return TrinoSqlParser.RULE_windowSpecification; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterWindowSpecification) {
			listener.enterWindowSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitWindowSpecification) {
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
	public KW_AS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_AS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_namedQuery; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterNamedQuery) {
			listener.enterNamedQuery(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitNamedQuery) {
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
	public KW_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DISTINCT, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_setQuantifier; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSetQuantifier) {
			listener.enterSetQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSetQuantifier) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_selectItem; }
	public copyFrom(ctx: SelectItemContext): void {
		super.copyFrom(ctx);
	}
}
export class SelectSingleContext extends SelectItemContext {
	public columnName(): ColumnNameContext | undefined {
		return this.tryGetRuleContext(0, ColumnNameContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_AS, 0); }
	constructor(ctx: SelectItemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSelectSingle) {
			listener.enterSelectSingle(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSelectSingle) {
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
export class SelectAllContext extends SelectItemContext {
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	public ASTERISK(): TerminalNode { return this.getToken(TrinoSqlParser.ASTERISK, 0); }
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_AS, 0); }
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	constructor(ctx: SelectItemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSelectAll) {
			listener.enterSelectAll(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSelectAll) {
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


export class RelationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_relation; }
	public copyFrom(ctx: RelationContext): void {
		super.copyFrom(ctx);
	}
}
export class JoinRelationContext extends RelationContext {
	public _left!: RelationContext;
	public _right!: SampledRelationContext;
	public _rightRelation!: RelationContext;
	public relation(): RelationContext[];
	public relation(i: number): RelationContext;
	public relation(i?: number): RelationContext | RelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationContext);
		} else {
			return this.getRuleContext(i, RelationContext);
		}
	}
	public KW_CROSS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_CROSS, 0); }
	public KW_JOIN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_JOIN, 0); }
	public joinType(): JoinTypeContext | undefined {
		return this.tryGetRuleContext(0, JoinTypeContext);
	}
	public joinCriteria(): JoinCriteriaContext | undefined {
		return this.tryGetRuleContext(0, JoinCriteriaContext);
	}
	public KW_NATURAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NATURAL, 0); }
	public sampledRelation(): SampledRelationContext | undefined {
		return this.tryGetRuleContext(0, SampledRelationContext);
	}
	constructor(ctx: RelationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterJoinRelation) {
			listener.enterJoinRelation(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitJoinRelation) {
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
export class RelationDefaultContext extends RelationContext {
	public sampledRelation(): SampledRelationContext {
		return this.getRuleContext(0, SampledRelationContext);
	}
	constructor(ctx: RelationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRelationDefault) {
			listener.enterRelationDefault(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRelationDefault) {
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


export class JoinTypeContext extends ParserRuleContext {
	public KW_INNER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_INNER, 0); }
	public KW_LEFT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LEFT, 0); }
	public KW_OUTER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_OUTER, 0); }
	public KW_RIGHT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_RIGHT, 0); }
	public KW_FULL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_joinType; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterJoinType) {
			listener.enterJoinType(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitJoinType) {
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
	public KW_ON(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ON, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public KW_USING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_USING, 0); }
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
	public get ruleIndex(): number { return TrinoSqlParser.RULE_joinCriteria; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterJoinCriteria) {
			listener.enterJoinCriteria(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitJoinCriteria) {
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
	public patternRecognition(): PatternRecognitionContext {
		return this.getRuleContext(0, PatternRecognitionContext);
	}
	public KW_TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TABLESAMPLE, 0); }
	public sampleType(): SampleTypeContext | undefined {
		return this.tryGetRuleContext(0, SampleTypeContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_sampledRelation; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSampledRelation) {
			listener.enterSampledRelation(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSampledRelation) {
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
	public KW_BERNOULLI(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_BERNOULLI, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SYSTEM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_sampleType; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSampleType) {
			listener.enterSampleType(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSampleType) {
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
	public aliasedRelation(): AliasedRelationContext {
		return this.getRuleContext(0, AliasedRelationContext);
	}
	public KW_MATCH_RECOGNIZE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MATCH_RECOGNIZE, 0); }
	public KW_PATTERN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PATTERN, 0); }
	public rowPattern(): RowPatternContext | undefined {
		return this.tryGetRuleContext(0, RowPatternContext);
	}
	public KW_DEFINE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DEFINE, 0); }
	public variableDefinition(): VariableDefinitionContext[];
	public variableDefinition(i: number): VariableDefinitionContext;
	public variableDefinition(i?: number): VariableDefinitionContext | VariableDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDefinitionContext);
		} else {
			return this.getRuleContext(i, VariableDefinitionContext);
		}
	}
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PARTITION, 0); }
	public KW_BY(): TerminalNode[];
	public KW_BY(i: number): TerminalNode;
	public KW_BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.KW_BY);
		} else {
			return this.getToken(TrinoSqlParser.KW_BY, i);
		}
	}
	public KW_ORDER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ORDER, 0); }
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public KW_MEASURES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MEASURES, 0); }
	public measureDefinition(): MeasureDefinitionContext[];
	public measureDefinition(i: number): MeasureDefinitionContext;
	public measureDefinition(i?: number): MeasureDefinitionContext | MeasureDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MeasureDefinitionContext);
		} else {
			return this.getRuleContext(i, MeasureDefinitionContext);
		}
	}
	public rowsPerMatch(): RowsPerMatchContext | undefined {
		return this.tryGetRuleContext(0, RowsPerMatchContext);
	}
	public KW_AFTER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_AFTER, 0); }
	public KW_MATCH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MATCH, 0); }
	public skipTo(): SkipToContext | undefined {
		return this.tryGetRuleContext(0, SkipToContext);
	}
	public KW_SUBSET(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SUBSET, 0); }
	public subsetDefinition(): SubsetDefinitionContext[];
	public subsetDefinition(i: number): SubsetDefinitionContext;
	public subsetDefinition(i?: number): SubsetDefinitionContext | SubsetDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubsetDefinitionContext);
		} else {
			return this.getRuleContext(i, SubsetDefinitionContext);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
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
	public KW_INITIAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_INITIAL, 0); }
	public KW_SEEK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SEEK, 0); }
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_AS, 0); }
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_patternRecognition; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterPatternRecognition) {
			listener.enterPatternRecognition(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitPatternRecognition) {
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_AS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_measureDefinition; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterMeasureDefinition) {
			listener.enterMeasureDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitMeasureDefinition) {
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
	public KW_ONE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ONE, 0); }
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ROW, 0); }
	public KW_PER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_PER, 0); }
	public KW_MATCH(): TerminalNode { return this.getToken(TrinoSqlParser.KW_MATCH, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ALL, 0); }
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ROWS, 0); }
	public emptyMatchHandling(): EmptyMatchHandlingContext | undefined {
		return this.tryGetRuleContext(0, EmptyMatchHandlingContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_rowsPerMatch; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRowsPerMatch) {
			listener.enterRowsPerMatch(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRowsPerMatch) {
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
	public KW_SHOW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_EMPTY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_EMPTY, 0); }
	public KW_MATCHES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MATCHES, 0); }
	public KW_OMIT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_OMIT, 0); }
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WITH, 0); }
	public KW_UNMATCHED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_UNMATCHED, 0); }
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ROWS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_emptyMatchHandling; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterEmptyMatchHandling) {
			listener.enterEmptyMatchHandling(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitEmptyMatchHandling) {
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
	public KW_TO(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TO, 0); }
	public KW_NEXT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NEXT, 0); }
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ROW, 0); }
	public KW_PAST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PAST, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LAST, 0); }
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FIRST, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_skipTo; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSkipTo) {
			listener.enterSkipTo(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSkipTo) {
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
	public EQ(): TerminalNode { return this.getToken(TrinoSqlParser.EQ, 0); }
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
	public get ruleIndex(): number { return TrinoSqlParser.RULE_subsetDefinition; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSubsetDefinition) {
			listener.enterSubsetDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSubsetDefinition) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_AS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_variableDefinition; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterVariableDefinition) {
			listener.enterVariableDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitVariableDefinition) {
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
	public relationPrimary(): RelationPrimaryContext {
		return this.getRuleContext(0, RelationPrimaryContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_AS, 0); }
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_aliasedRelation; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterAliasedRelation) {
			listener.enterAliasedRelation(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitAliasedRelation) {
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


export class ColumnListCreateContext extends ParserRuleContext {
	public columnNameCreate(): ColumnNameCreateContext[];
	public columnNameCreate(i: number): ColumnNameCreateContext;
	public columnNameCreate(i?: number): ColumnNameCreateContext | ColumnNameCreateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnNameCreateContext);
		} else {
			return this.getRuleContext(i, ColumnNameCreateContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_columnListCreate; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterColumnListCreate) {
			listener.enterColumnListCreate(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitColumnListCreate) {
			listener.exitColumnListCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitColumnListCreate) {
			return visitor.visitColumnListCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnListContext extends ParserRuleContext {
	public columnName(): ColumnNameContext[];
	public columnName(i: number): ColumnNameContext;
	public columnName(i?: number): ColumnNameContext | ColumnNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnNameContext);
		} else {
			return this.getRuleContext(i, ColumnNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_columnList; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterColumnList) {
			listener.enterColumnList(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitColumnList) {
			listener.exitColumnList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitColumnList) {
			return visitor.visitColumnList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnAliasesContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return TrinoSqlParser.RULE_columnAliases; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterColumnAliases) {
			listener.enterColumnAliases(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitColumnAliases) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_relationPrimary; }
	public copyFrom(ctx: RelationPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class TableOrViewRelationContext extends RelationPrimaryContext {
	public tableOrViewName(): TableOrViewNameContext {
		return this.getRuleContext(0, TableOrViewNameContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterTableOrViewRelation) {
			listener.enterTableOrViewRelation(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitTableOrViewRelation) {
			listener.exitTableOrViewRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitTableOrViewRelation) {
			return visitor.visitTableOrViewRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryRelationContext extends RelationPrimaryContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSubqueryRelation) {
			listener.enterSubqueryRelation(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSubqueryRelation) {
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
export class UnnestContext extends RelationPrimaryContext {
	public KW_UNNEST(): TerminalNode { return this.getToken(TrinoSqlParser.KW_UNNEST, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WITH, 0); }
	public KW_ORDINALITY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ORDINALITY, 0); }
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterUnnest) {
			listener.enterUnnest(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitUnnest) {
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
	public KW_LATERAL(): TerminalNode { return this.getToken(TrinoSqlParser.KW_LATERAL, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterLateral) {
			listener.enterLateral(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitLateral) {
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
export class ParenthesizedRelationContext extends RelationPrimaryContext {
	public relation(): RelationContext {
		return this.getRuleContext(0, RelationContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterParenthesizedRelation) {
			listener.enterParenthesizedRelation(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitParenthesizedRelation) {
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


export class ExpressionContext extends ParserRuleContext {
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_expression; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitExpression) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_booleanExpression; }
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PredicatedContext extends BooleanExpressionContext {
	public _valueExpression!: ValueExpressionContext;
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
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterPredicated) {
			listener.enterPredicated(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitPredicated) {
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
export class LogicalNotContext extends BooleanExpressionContext {
	public KW_NOT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_NOT, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterLogicalNot) {
			listener.enterLogicalNot(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitLogicalNot) {
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
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_AND, 0); }
	public KW_OR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_OR, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterLogicalBinary) {
			listener.enterLogicalBinary(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitLogicalBinary) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number, value: ParserRuleContext) {
		super(parent, invokingState);
		this.value = value;
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_predicate; }
	public copyFrom(ctx: PredicateContext): void {
		super.copyFrom(ctx);
		this.value = ctx.value;
	}
}
export class ComparisonContext extends PredicateContext {
	public _right!: ValueExpressionContext;
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitComparison) {
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
export class QuantifiedComparisonContext extends PredicateContext {
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public comparisonQuantifier(): ComparisonQuantifierContext {
		return this.getRuleContext(0, ComparisonQuantifierContext);
	}
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterQuantifiedComparison) {
			listener.enterQuantifiedComparison(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitQuantifiedComparison) {
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
export class BetweenContext extends PredicateContext {
	public _lower!: ValueExpressionContext;
	public _upper!: ValueExpressionContext;
	public KW_BETWEEN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_BETWEEN, 0); }
	public KW_AND(): TerminalNode { return this.getToken(TrinoSqlParser.KW_AND, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterBetween) {
			listener.enterBetween(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitBetween) {
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
export class InListContext extends PredicateContext {
	public KW_IN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_IN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterInList) {
			listener.enterInList(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitInList) {
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
export class InSubqueryContext extends PredicateContext {
	public KW_IN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_IN, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterInSubquery) {
			listener.enterInSubquery(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitInSubquery) {
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
export class LikeContext extends PredicateContext {
	public _pattern!: ValueExpressionContext;
	public _escape!: ValueExpressionContext;
	public KW_LIKE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_LIKE, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NOT, 0); }
	public KW_ESCAPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ESCAPE, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterLike) {
			listener.enterLike(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitLike) {
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
export class NullPredicateContext extends PredicateContext {
	public KW_IS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_IS, 0); }
	public KW_NULL(): TerminalNode { return this.getToken(TrinoSqlParser.KW_NULL, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterNullPredicate) {
			listener.enterNullPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitNullPredicate) {
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
export class DistinctFromContext extends PredicateContext {
	public _right!: ValueExpressionContext;
	public KW_IS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_IS, 0); }
	public KW_DISTINCT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_DISTINCT, 0); }
	public KW_FROM(): TerminalNode { return this.getToken(TrinoSqlParser.KW_FROM, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDistinctFrom) {
			listener.enterDistinctFrom(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDistinctFrom) {
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


export class ValueExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_valueExpression; }
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
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterValueExpressionDefault) {
			listener.enterValueExpressionDefault(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitValueExpressionDefault) {
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
export class AtTimeZoneContext extends ValueExpressionContext {
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public KW_AT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_AT, 0); }
	public timeZoneSpecifier(): TimeZoneSpecifierContext {
		return this.getRuleContext(0, TimeZoneSpecifierContext);
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterAtTimeZone) {
			listener.enterAtTimeZone(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitAtTimeZone) {
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
export class ArithmeticUnaryContext extends ValueExpressionContext {
	public _operator!: Token;
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PLUS, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterArithmeticUnary) {
			listener.enterArithmeticUnary(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitArithmeticUnary) {
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
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SLASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PERCENT, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MINUS, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterArithmeticBinary) {
			listener.enterArithmeticBinary(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitArithmeticBinary) {
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
export class ConcatenationContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _right!: ValueExpressionContext;
	public CONCAT(): TerminalNode { return this.getToken(TrinoSqlParser.CONCAT, 0); }
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
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterConcatenation) {
			listener.enterConcatenation(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitConcatenation) {
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


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_primaryExpression; }
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class NullLiteralContext extends PrimaryExpressionContext {
	public KW_NULL(): TerminalNode { return this.getToken(TrinoSqlParser.KW_NULL, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterNullLiteral) {
			listener.enterNullLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitNullLiteral) {
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
export class IntervalLiteralContext extends PrimaryExpressionContext {
	public interval(): IntervalContext {
		return this.getRuleContext(0, IntervalContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterIntervalLiteral) {
			listener.enterIntervalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitIntervalLiteral) {
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
export class TypeConstructorContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public KW_DOUBLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DOUBLE, 0); }
	public KW_PRECISION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PRECISION, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterTypeConstructor) {
			listener.enterTypeConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitTypeConstructor) {
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
export class NumericLiteralContext extends PrimaryExpressionContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitNumericLiteral) {
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
	public booleanValue(): BooleanValueContext {
		return this.getRuleContext(0, BooleanValueContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitBooleanLiteral) {
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
export class StringLiteralContext extends PrimaryExpressionContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitStringLiteral) {
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
export class BinaryLiteralContext extends PrimaryExpressionContext {
	public BINARY_LITERAL(): TerminalNode { return this.getToken(TrinoSqlParser.BINARY_LITERAL, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterBinaryLiteral) {
			listener.enterBinaryLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitBinaryLiteral) {
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
export class ParameterContext extends PrimaryExpressionContext {
	public QUESTION_MARK(): TerminalNode { return this.getToken(TrinoSqlParser.QUESTION_MARK, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitParameter) {
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
export class PositionContext extends PrimaryExpressionContext {
	public KW_POSITION(): TerminalNode { return this.getToken(TrinoSqlParser.KW_POSITION, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public KW_IN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_IN, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterPosition) {
			listener.enterPosition(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitPosition) {
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
export class RowConstructorContext extends PrimaryExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ROW, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRowConstructor) {
			listener.enterRowConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRowConstructor) {
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
export class FunctionCallContext extends PrimaryExpressionContext {
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ASTERISK, 0); }
	public filter(): FilterContext | undefined {
		return this.tryGetRuleContext(0, FilterContext);
	}
	public over(): OverContext | undefined {
		return this.tryGetRuleContext(0, OverContext);
	}
	public processingMode(): ProcessingModeContext | undefined {
		return this.tryGetRuleContext(0, ProcessingModeContext);
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
	public KW_ORDER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ORDER, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_BY, 0); }
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public nullTreatment(): NullTreatmentContext | undefined {
		return this.tryGetRuleContext(0, NullTreatmentContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitFunctionCall) {
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
export class MeasureContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public over(): OverContext {
		return this.getRuleContext(0, OverContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterMeasure) {
			listener.enterMeasure(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitMeasure) {
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
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterLambda) {
			listener.enterLambda(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitLambda) {
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
export class SubqueryExpressionContext extends PrimaryExpressionContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSubqueryExpression) {
			listener.enterSubqueryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSubqueryExpression) {
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
export class ExistsContext extends PrimaryExpressionContext {
	public KW_EXISTS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_EXISTS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterExists) {
			listener.enterExists(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitExists) {
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
export class SimpleCaseContext extends PrimaryExpressionContext {
	public _operand!: ExpressionContext;
	public _elseExpression!: ExpressionContext;
	public KW_CASE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CASE, 0); }
	public KW_END(): TerminalNode { return this.getToken(TrinoSqlParser.KW_END, 0); }
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
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ELSE, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSimpleCase) {
			listener.enterSimpleCase(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSimpleCase) {
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
export class SearchedCaseContext extends PrimaryExpressionContext {
	public _elseExpression!: ExpressionContext;
	public KW_CASE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CASE, 0); }
	public KW_END(): TerminalNode { return this.getToken(TrinoSqlParser.KW_END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ELSE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSearchedCase) {
			listener.enterSearchedCase(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSearchedCase) {
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
export class CastContext extends PrimaryExpressionContext {
	public KW_CAST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_CAST, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_AS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public KW_TRY_CAST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TRY_CAST, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCast) {
			listener.enterCast(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCast) {
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
export class ArrayConstructorContext extends PrimaryExpressionContext {
	public KW_ARRAY(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ARRAY, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterArrayConstructor) {
			listener.enterArrayConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitArrayConstructor) {
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
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSubscript) {
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
export class ColumnReferenceContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterColumnReference) {
			listener.enterColumnReference(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitColumnReference) {
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
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDereference) {
			listener.enterDereference(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDereference) {
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
export class SpecialDateTimeFunctionContext extends PrimaryExpressionContext {
	public _name!: Token;
	public _precision!: Token;
	public KW_CURRENT_DATE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_CURRENT_DATE, 0); }
	public KW_CURRENT_TIME(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_CURRENT_TIME, 0); }
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.INTEGER_VALUE, 0); }
	public KW_CURRENT_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_CURRENT_TIMESTAMP, 0); }
	public KW_LOCALTIME(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LOCALTIME, 0); }
	public KW_LOCALTIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LOCALTIMESTAMP, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSpecialDateTimeFunction) {
			listener.enterSpecialDateTimeFunction(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSpecialDateTimeFunction) {
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
export class CurrentUserContext extends PrimaryExpressionContext {
	public _name!: Token;
	public KW_CURRENT_USER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CURRENT_USER, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCurrentUser) {
			listener.enterCurrentUser(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCurrentUser) {
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
export class CurrentCatalogContext extends PrimaryExpressionContext {
	public _name!: Token;
	public KW_CURRENT_CATALOG(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CURRENT_CATALOG, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCurrentCatalog) {
			listener.enterCurrentCatalog(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCurrentCatalog) {
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
export class CurrentSchemaContext extends PrimaryExpressionContext {
	public _name!: Token;
	public KW_CURRENT_SCHEMA(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CURRENT_SCHEMA, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCurrentSchema) {
			listener.enterCurrentSchema(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCurrentSchema) {
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
export class CurrentPathContext extends PrimaryExpressionContext {
	public _name!: Token;
	public KW_CURRENT_PATH(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CURRENT_PATH, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCurrentPath) {
			listener.enterCurrentPath(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCurrentPath) {
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
export class SubstringContext extends PrimaryExpressionContext {
	public KW_SUBSTRING(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SUBSTRING, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public KW_FROM(): TerminalNode { return this.getToken(TrinoSqlParser.KW_FROM, 0); }
	public KW_FOR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FOR, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSubstring) {
			listener.enterSubstring(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSubstring) {
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
export class NormalizeContext extends PrimaryExpressionContext {
	public KW_NORMALIZE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_NORMALIZE, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public normalForm(): NormalFormContext | undefined {
		return this.tryGetRuleContext(0, NormalFormContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterNormalize) {
			listener.enterNormalize(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitNormalize) {
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
export class ExtractContext extends PrimaryExpressionContext {
	public KW_EXTRACT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_EXTRACT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_FROM(): TerminalNode { return this.getToken(TrinoSqlParser.KW_FROM, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterExtract) {
			listener.enterExtract(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitExtract) {
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
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitParenthesizedExpression) {
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
export class GroupingOperationContext extends PrimaryExpressionContext {
	public KW_GROUPING(): TerminalNode { return this.getToken(TrinoSqlParser.KW_GROUPING, 0); }
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterGroupingOperation) {
			listener.enterGroupingOperation(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitGroupingOperation) {
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
	public KW_RUNNING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_RUNNING, 0); }
	public KW_FINAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FINAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_processingMode; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterProcessingMode) {
			listener.enterProcessingMode(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitProcessingMode) {
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
	public KW_IGNORE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IGNORE, 0); }
	public KW_NULLS(): TerminalNode { return this.getToken(TrinoSqlParser.KW_NULLS, 0); }
	public KW_RESPECT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_RESPECT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_nullTreatment; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterNullTreatment) {
			listener.enterNullTreatment(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitNullTreatment) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_string; }
	public copyFrom(ctx: StringContext): void {
		super.copyFrom(ctx);
	}
}
export class BasicStringLiteralContext extends StringContext {
	public STRING(): TerminalNode { return this.getToken(TrinoSqlParser.STRING, 0); }
	constructor(ctx: StringContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterBasicStringLiteral) {
			listener.enterBasicStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitBasicStringLiteral) {
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
export class UnicodeStringLiteralContext extends StringContext {
	public UNICODE_STRING(): TerminalNode { return this.getToken(TrinoSqlParser.UNICODE_STRING, 0); }
	public KW_UESCAPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_UESCAPE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.STRING, 0); }
	constructor(ctx: StringContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterUnicodeStringLiteral) {
			listener.enterUnicodeStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitUnicodeStringLiteral) {
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


export class TimeZoneSpecifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_timeZoneSpecifier; }
	public copyFrom(ctx: TimeZoneSpecifierContext): void {
		super.copyFrom(ctx);
	}
}
export class TimeZoneIntervalContext extends TimeZoneSpecifierContext {
	public KW_TIME(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TIME, 0); }
	public KW_ZONE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ZONE, 0); }
	public interval(): IntervalContext {
		return this.getRuleContext(0, IntervalContext);
	}
	constructor(ctx: TimeZoneSpecifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterTimeZoneInterval) {
			listener.enterTimeZoneInterval(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitTimeZoneInterval) {
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
	public KW_TIME(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TIME, 0); }
	public KW_ZONE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ZONE, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(ctx: TimeZoneSpecifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterTimeZoneString) {
			listener.enterTimeZoneString(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitTimeZoneString) {
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
	public EQ(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NEQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.GT, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.GTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitComparisonOperator) {
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
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ALL, 0); }
	public KW_SOME(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SOME, 0); }
	public KW_ANY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ANY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_comparisonQuantifier; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterComparisonQuantifier) {
			listener.enterComparisonQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitComparisonQuantifier) {
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
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TRUE, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_booleanValue; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterBooleanValue) {
			listener.enterBooleanValue(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitBooleanValue) {
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
	public _from!: IntervalFieldContext;
	public _to!: IntervalFieldContext;
	public KW_INTERVAL(): TerminalNode { return this.getToken(TrinoSqlParser.KW_INTERVAL, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public intervalField(): IntervalFieldContext[];
	public intervalField(i: number): IntervalFieldContext;
	public intervalField(i?: number): IntervalFieldContext | IntervalFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntervalFieldContext);
		} else {
			return this.getRuleContext(i, IntervalFieldContext);
		}
	}
	public KW_TO(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TO, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_interval; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterInterval) {
			listener.enterInterval(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitInterval) {
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
	public KW_YEAR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_YEAR, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MONTH, 0); }
	public KW_DAY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DAY, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_HOUR, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MINUTE, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SECOND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_intervalField; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterIntervalField) {
			listener.enterIntervalField(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitIntervalField) {
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
	public KW_NFD(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NFD, 0); }
	public KW_NFC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NFC, 0); }
	public KW_NFKD(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NFKD, 0); }
	public KW_NFKC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NFKC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_normalForm; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterNormalForm) {
			listener.enterNormalForm(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitNormalForm) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class RowTypeContext extends TypeContext {
	public KW_ROW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ROW, 0); }
	public rowField(): RowFieldContext[];
	public rowField(i: number): RowFieldContext;
	public rowField(i?: number): RowFieldContext | RowFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowFieldContext);
		} else {
			return this.getRuleContext(i, RowFieldContext);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRowType) {
			listener.enterRowType(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRowType) {
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
	public _from!: IntervalFieldContext;
	public _to!: IntervalFieldContext;
	public KW_INTERVAL(): TerminalNode { return this.getToken(TrinoSqlParser.KW_INTERVAL, 0); }
	public intervalField(): IntervalFieldContext[];
	public intervalField(i: number): IntervalFieldContext;
	public intervalField(i?: number): IntervalFieldContext | IntervalFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntervalFieldContext);
		} else {
			return this.getRuleContext(i, IntervalFieldContext);
		}
	}
	public KW_TO(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TO, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterIntervalType) {
			listener.enterIntervalType(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitIntervalType) {
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
export class DateTimeTypeContext extends TypeContext {
	public _base!: Token;
	public _precision!: TypeParameterContext;
	public KW_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TIMESTAMP, 0); }
	public KW_WITHOUT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WITHOUT, 0); }
	public KW_TIME(): TerminalNode[];
	public KW_TIME(i: number): TerminalNode;
	public KW_TIME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.KW_TIME);
		} else {
			return this.getToken(TrinoSqlParser.KW_TIME, i);
		}
	}
	public KW_ZONE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ZONE, 0); }
	public typeParameter(): TypeParameterContext | undefined {
		return this.tryGetRuleContext(0, TypeParameterContext);
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WITH, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDateTimeType) {
			listener.enterDateTimeType(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDateTimeType) {
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
export class DoublePrecisionTypeContext extends TypeContext {
	public KW_DOUBLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_DOUBLE, 0); }
	public KW_PRECISION(): TerminalNode { return this.getToken(TrinoSqlParser.KW_PRECISION, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDoublePrecisionType) {
			listener.enterDoublePrecisionType(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDoublePrecisionType) {
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
	public KW_ARRAY(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ARRAY, 0); }
	public LT(): TerminalNode { return this.getToken(TrinoSqlParser.LT, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public GT(): TerminalNode { return this.getToken(TrinoSqlParser.GT, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterLegacyArrayType) {
			listener.enterLegacyArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitLegacyArrayType) {
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
export class LegacyMapTypeContext extends TypeContext {
	public _keyType!: TypeContext;
	public _valueType!: TypeContext;
	public KW_MAP(): TerminalNode { return this.getToken(TrinoSqlParser.KW_MAP, 0); }
	public LT(): TerminalNode { return this.getToken(TrinoSqlParser.LT, 0); }
	public GT(): TerminalNode { return this.getToken(TrinoSqlParser.GT, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterLegacyMapType) {
			listener.enterLegacyMapType(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitLegacyMapType) {
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
export class ArrayTypeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public KW_ARRAY(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ARRAY, 0); }
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.INTEGER_VALUE, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitArrayType) {
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
export class GenericTypeContext extends TypeContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterGenericType) {
			listener.enterGenericType(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitGenericType) {
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


export class RowFieldContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_rowField; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRowField) {
			listener.enterRowField(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRowField) {
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
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.INTEGER_VALUE, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitTypeParameter) {
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
	public KW_WHEN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_WHEN, 0); }
	public KW_THEN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_THEN, 0); }
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
	public get ruleIndex(): number { return TrinoSqlParser.RULE_whenClause; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterWhenClause) {
			listener.enterWhenClause(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitWhenClause) {
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
	public KW_FILTER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_FILTER, 0); }
	public KW_WHERE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_filter; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterFilter) {
			listener.enterFilter(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitFilter) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_mergeCase; }
	public copyFrom(ctx: MergeCaseContext): void {
		super.copyFrom(ctx);
	}
}
export class MergeUpdateContext extends MergeCaseContext {
	public _condition!: ExpressionContext;
	public _identifier!: IdentifierContext;
	public _targets: IdentifierContext[] = [];
	public _expression!: ExpressionContext;
	public _values: ExpressionContext[] = [];
	public KW_WHEN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_WHEN, 0); }
	public KW_MATCHED(): TerminalNode { return this.getToken(TrinoSqlParser.KW_MATCHED, 0); }
	public KW_THEN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_THEN, 0); }
	public KW_UPDATE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_UPDATE, 0); }
	public KW_SET(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SET, 0); }
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.EQ);
		} else {
			return this.getToken(TrinoSqlParser.EQ, i);
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
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_AND, 0); }
	constructor(ctx: MergeCaseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterMergeUpdate) {
			listener.enterMergeUpdate(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitMergeUpdate) {
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
	public KW_WHEN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_WHEN, 0); }
	public KW_MATCHED(): TerminalNode { return this.getToken(TrinoSqlParser.KW_MATCHED, 0); }
	public KW_THEN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_THEN, 0); }
	public KW_DELETE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_DELETE, 0); }
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_AND, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: MergeCaseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterMergeDelete) {
			listener.enterMergeDelete(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitMergeDelete) {
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
export class MergeInsertContext extends MergeCaseContext {
	public _condition!: ExpressionContext;
	public _identifier!: IdentifierContext;
	public _targets: IdentifierContext[] = [];
	public _expression!: ExpressionContext;
	public _values: ExpressionContext[] = [];
	public KW_WHEN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_WHEN, 0); }
	public KW_NOT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_NOT, 0); }
	public KW_MATCHED(): TerminalNode { return this.getToken(TrinoSqlParser.KW_MATCHED, 0); }
	public KW_THEN(): TerminalNode { return this.getToken(TrinoSqlParser.KW_THEN, 0); }
	public KW_INSERT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_INSERT, 0); }
	public KW_VALUES(): TerminalNode { return this.getToken(TrinoSqlParser.KW_VALUES, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_AND, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(ctx: MergeCaseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterMergeInsert) {
			listener.enterMergeInsert(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitMergeInsert) {
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


export class OverContext extends ParserRuleContext {
	public _windowName!: IdentifierContext;
	public KW_OVER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_OVER, 0); }
	public windowSpecification(): WindowSpecificationContext | undefined {
		return this.tryGetRuleContext(0, WindowSpecificationContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_over; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterOver) {
			listener.enterOver(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitOver) {
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
	public frameExtent(): FrameExtentContext {
		return this.getRuleContext(0, FrameExtentContext);
	}
	public KW_MEASURES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MEASURES, 0); }
	public measureDefinition(): MeasureDefinitionContext[];
	public measureDefinition(i: number): MeasureDefinitionContext;
	public measureDefinition(i?: number): MeasureDefinitionContext | MeasureDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MeasureDefinitionContext);
		} else {
			return this.getRuleContext(i, MeasureDefinitionContext);
		}
	}
	public KW_AFTER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_AFTER, 0); }
	public KW_MATCH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MATCH, 0); }
	public skipTo(): SkipToContext | undefined {
		return this.tryGetRuleContext(0, SkipToContext);
	}
	public KW_PATTERN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PATTERN, 0); }
	public rowPattern(): RowPatternContext | undefined {
		return this.tryGetRuleContext(0, RowPatternContext);
	}
	public KW_SUBSET(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SUBSET, 0); }
	public subsetDefinition(): SubsetDefinitionContext[];
	public subsetDefinition(i: number): SubsetDefinitionContext;
	public subsetDefinition(i?: number): SubsetDefinitionContext | SubsetDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubsetDefinitionContext);
		} else {
			return this.getRuleContext(i, SubsetDefinitionContext);
		}
	}
	public KW_DEFINE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DEFINE, 0); }
	public variableDefinition(): VariableDefinitionContext[];
	public variableDefinition(i: number): VariableDefinitionContext;
	public variableDefinition(i?: number): VariableDefinitionContext | VariableDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDefinitionContext);
		} else {
			return this.getRuleContext(i, VariableDefinitionContext);
		}
	}
	public KW_INITIAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_INITIAL, 0); }
	public KW_SEEK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SEEK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_windowFrame; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterWindowFrame) {
			listener.enterWindowFrame(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitWindowFrame) {
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
	public _frameStart!: FrameBoundContext;
	public _end!: FrameBoundContext;
	public KW_RANGE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_RANGE, 0); }
	public frameBound(): FrameBoundContext[];
	public frameBound(i: number): FrameBoundContext;
	public frameBound(i?: number): FrameBoundContext | FrameBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FrameBoundContext);
		} else {
			return this.getRuleContext(i, FrameBoundContext);
		}
	}
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ROWS, 0); }
	public KW_GROUPS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_GROUPS, 0); }
	public KW_BETWEEN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_BETWEEN, 0); }
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_frameExtent; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterFrameExtent) {
			listener.enterFrameExtent(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitFrameExtent) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_frameBound; }
	public copyFrom(ctx: FrameBoundContext): void {
		super.copyFrom(ctx);
	}
}
export class UnboundedFrameContext extends FrameBoundContext {
	public _boundType!: Token;
	public KW_UNBOUNDED(): TerminalNode { return this.getToken(TrinoSqlParser.KW_UNBOUNDED, 0); }
	public KW_PRECEDING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PRECEDING, 0); }
	public KW_FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FOLLOWING, 0); }
	constructor(ctx: FrameBoundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterUnboundedFrame) {
			listener.enterUnboundedFrame(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitUnboundedFrame) {
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
	public KW_CURRENT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CURRENT, 0); }
	public KW_ROW(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ROW, 0); }
	constructor(ctx: FrameBoundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCurrentRowBound) {
			listener.enterCurrentRowBound(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCurrentRowBound) {
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
export class BoundedFrameContext extends FrameBoundContext {
	public _boundType!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public KW_PRECEDING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PRECEDING, 0); }
	public KW_FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FOLLOWING, 0); }
	constructor(ctx: FrameBoundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterBoundedFrame) {
			listener.enterBoundedFrame(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitBoundedFrame) {
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


export class RowPatternContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_rowPattern; }
	public copyFrom(ctx: RowPatternContext): void {
		super.copyFrom(ctx);
	}
}
export class QuantifiedPrimaryContext extends RowPatternContext {
	public patternPrimary(): PatternPrimaryContext {
		return this.getRuleContext(0, PatternPrimaryContext);
	}
	public patternQuantifier(): PatternQuantifierContext | undefined {
		return this.tryGetRuleContext(0, PatternQuantifierContext);
	}
	constructor(ctx: RowPatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterQuantifiedPrimary) {
			listener.enterQuantifiedPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitQuantifiedPrimary) {
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
	public rowPattern(): RowPatternContext[];
	public rowPattern(i: number): RowPatternContext;
	public rowPattern(i?: number): RowPatternContext | RowPatternContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowPatternContext);
		} else {
			return this.getRuleContext(i, RowPatternContext);
		}
	}
	constructor(ctx: RowPatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterPatternConcatenation) {
			listener.enterPatternConcatenation(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitPatternConcatenation) {
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
	public rowPattern(): RowPatternContext[];
	public rowPattern(i: number): RowPatternContext;
	public rowPattern(i?: number): RowPatternContext | RowPatternContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowPatternContext);
		} else {
			return this.getRuleContext(i, RowPatternContext);
		}
	}
	constructor(ctx: RowPatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterPatternAlternation) {
			listener.enterPatternAlternation(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitPatternAlternation) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_patternPrimary; }
	public copyFrom(ctx: PatternPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class PatternVariableContext extends PatternPrimaryContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PatternPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterPatternVariable) {
			listener.enterPatternVariable(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitPatternVariable) {
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
export class EmptyPatternContext extends PatternPrimaryContext {
	constructor(ctx: PatternPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterEmptyPattern) {
			listener.enterEmptyPattern(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitEmptyPattern) {
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
export class PatternPermutationContext extends PatternPrimaryContext {
	public KW_PERMUTE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_PERMUTE, 0); }
	public rowPattern(): RowPatternContext[];
	public rowPattern(i: number): RowPatternContext;
	public rowPattern(i?: number): RowPatternContext | RowPatternContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowPatternContext);
		} else {
			return this.getRuleContext(i, RowPatternContext);
		}
	}
	constructor(ctx: PatternPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterPatternPermutation) {
			listener.enterPatternPermutation(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitPatternPermutation) {
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
export class GroupedPatternContext extends PatternPrimaryContext {
	public rowPattern(): RowPatternContext {
		return this.getRuleContext(0, RowPatternContext);
	}
	constructor(ctx: PatternPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterGroupedPattern) {
			listener.enterGroupedPattern(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitGroupedPattern) {
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
export class PartitionStartAnchorContext extends PatternPrimaryContext {
	constructor(ctx: PatternPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterPartitionStartAnchor) {
			listener.enterPartitionStartAnchor(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitPartitionStartAnchor) {
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
export class PartitionEndAnchorContext extends PatternPrimaryContext {
	constructor(ctx: PatternPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterPartitionEndAnchor) {
			listener.enterPartitionEndAnchor(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitPartitionEndAnchor) {
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
export class ExcludedPatternContext extends PatternPrimaryContext {
	public rowPattern(): RowPatternContext {
		return this.getRuleContext(0, RowPatternContext);
	}
	constructor(ctx: PatternPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterExcludedPattern) {
			listener.enterExcludedPattern(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitExcludedPattern) {
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


export class PatternQuantifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_patternQuantifier; }
	public copyFrom(ctx: PatternQuantifierContext): void {
		super.copyFrom(ctx);
	}
}
export class ZeroOrMoreQuantifierContext extends PatternQuantifierContext {
	public _reluctant!: Token;
	public ASTERISK(): TerminalNode { return this.getToken(TrinoSqlParser.ASTERISK, 0); }
	public QUESTION_MARK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.QUESTION_MARK, 0); }
	constructor(ctx: PatternQuantifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterZeroOrMoreQuantifier) {
			listener.enterZeroOrMoreQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitZeroOrMoreQuantifier) {
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
	public PLUS(): TerminalNode { return this.getToken(TrinoSqlParser.PLUS, 0); }
	public QUESTION_MARK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.QUESTION_MARK, 0); }
	constructor(ctx: PatternQuantifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterOneOrMoreQuantifier) {
			listener.enterOneOrMoreQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitOneOrMoreQuantifier) {
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
	public QUESTION_MARK(): TerminalNode[];
	public QUESTION_MARK(i: number): TerminalNode;
	public QUESTION_MARK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.QUESTION_MARK);
		} else {
			return this.getToken(TrinoSqlParser.QUESTION_MARK, i);
		}
	}
	constructor(ctx: PatternQuantifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterZeroOrOneQuantifier) {
			listener.enterZeroOrOneQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitZeroOrOneQuantifier) {
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
	public INTEGER_VALUE(): TerminalNode[];
	public INTEGER_VALUE(i: number): TerminalNode;
	public INTEGER_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.INTEGER_VALUE);
		} else {
			return this.getToken(TrinoSqlParser.INTEGER_VALUE, i);
		}
	}
	public QUESTION_MARK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.QUESTION_MARK, 0); }
	constructor(ctx: PatternQuantifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRangeQuantifier) {
			listener.enterRangeQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRangeQuantifier) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EQ(): TerminalNode { return this.getToken(TrinoSqlParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_updateAssignment; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterUpdateAssignment) {
			listener.enterUpdateAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitUpdateAssignment) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_explainOption; }
	public copyFrom(ctx: ExplainOptionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExplainFormatContext extends ExplainOptionContext {
	public _value!: Token;
	public KW_FORMAT(): TerminalNode { return this.getToken(TrinoSqlParser.KW_FORMAT, 0); }
	public KW_TEXT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TEXT, 0); }
	public KW_GRAPHVIZ(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_GRAPHVIZ, 0); }
	public KW_JSON(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_JSON, 0); }
	constructor(ctx: ExplainOptionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterExplainFormat) {
			listener.enterExplainFormat(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitExplainFormat) {
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
	public KW_TYPE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_TYPE, 0); }
	public KW_LOGICAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LOGICAL, 0); }
	public KW_DISTRIBUTED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DISTRIBUTED, 0); }
	public KW_VALIDATE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_VALIDATE, 0); }
	public KW_IO(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IO, 0); }
	constructor(ctx: ExplainOptionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterExplainType) {
			listener.enterExplainType(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitExplainType) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_transactionMode; }
	public copyFrom(ctx: TransactionModeContext): void {
		super.copyFrom(ctx);
	}
}
export class IsolationLevelContext extends TransactionModeContext {
	public KW_ISOLATION(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ISOLATION, 0); }
	public KW_LEVEL(): TerminalNode { return this.getToken(TrinoSqlParser.KW_LEVEL, 0); }
	public levelOfIsolation(): LevelOfIsolationContext {
		return this.getRuleContext(0, LevelOfIsolationContext);
	}
	constructor(ctx: TransactionModeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterIsolationLevel) {
			listener.enterIsolationLevel(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitIsolationLevel) {
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
export class TransactionAccessModeContext extends TransactionModeContext {
	public _accessMode!: Token;
	public KW_READ(): TerminalNode { return this.getToken(TrinoSqlParser.KW_READ, 0); }
	public KW_ONLY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ONLY, 0); }
	public KW_WRITE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WRITE, 0); }
	constructor(ctx: TransactionModeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterTransactionAccessMode) {
			listener.enterTransactionAccessMode(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitTransactionAccessMode) {
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


export class LevelOfIsolationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_levelOfIsolation; }
	public copyFrom(ctx: LevelOfIsolationContext): void {
		super.copyFrom(ctx);
	}
}
export class ReadUncommittedContext extends LevelOfIsolationContext {
	public KW_READ(): TerminalNode { return this.getToken(TrinoSqlParser.KW_READ, 0); }
	public KW_UNCOMMITTED(): TerminalNode { return this.getToken(TrinoSqlParser.KW_UNCOMMITTED, 0); }
	constructor(ctx: LevelOfIsolationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterReadUncommitted) {
			listener.enterReadUncommitted(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitReadUncommitted) {
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
export class ReadCommittedContext extends LevelOfIsolationContext {
	public KW_READ(): TerminalNode { return this.getToken(TrinoSqlParser.KW_READ, 0); }
	public KW_COMMITTED(): TerminalNode { return this.getToken(TrinoSqlParser.KW_COMMITTED, 0); }
	constructor(ctx: LevelOfIsolationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterReadCommitted) {
			listener.enterReadCommitted(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitReadCommitted) {
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
	public KW_REPEATABLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_REPEATABLE, 0); }
	public KW_READ(): TerminalNode { return this.getToken(TrinoSqlParser.KW_READ, 0); }
	constructor(ctx: LevelOfIsolationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRepeatableRead) {
			listener.enterRepeatableRead(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRepeatableRead) {
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
export class SerializableContext extends LevelOfIsolationContext {
	public KW_SERIALIZABLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_SERIALIZABLE, 0); }
	constructor(ctx: LevelOfIsolationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSerializable) {
			listener.enterSerializable(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSerializable) {
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


export class CallArgumentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_callArgument; }
	public copyFrom(ctx: CallArgumentContext): void {
		super.copyFrom(ctx);
	}
}
export class PositionalArgumentContext extends CallArgumentContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: CallArgumentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterPositionalArgument) {
			listener.enterPositionalArgument(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitPositionalArgument) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: CallArgumentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterNamedArgument) {
			listener.enterNamedArgument(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitNamedArgument) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_pathElement; }
	public copyFrom(ctx: PathElementContext): void {
		super.copyFrom(ctx);
	}
}
export class QualifiedArgumentContext extends PathElementContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(ctx: PathElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterQualifiedArgument) {
			listener.enterQualifiedArgument(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitQualifiedArgument) {
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PathElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterUnqualifiedArgument) {
			listener.enterUnqualifiedArgument(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitUnqualifiedArgument) {
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
	public pathElement(): PathElementContext[];
	public pathElement(i: number): PathElementContext;
	public pathElement(i?: number): PathElementContext | PathElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PathElementContext);
		} else {
			return this.getRuleContext(i, PathElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_pathSpecification; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterPathSpecification) {
			listener.enterPathSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitPathSpecification) {
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
	public KW_SELECT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SELECT, 0); }
	public KW_DELETE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DELETE, 0); }
	public KW_INSERT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_INSERT, 0); }
	public KW_UPDATE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_UPDATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_privilege; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterPrivilege) {
			listener.enterPrivilege(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitPrivilege) {
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


export class TableOrViewNameContext extends ParserRuleContext {
	public tableName(): TableNameContext | undefined {
		return this.tryGetRuleContext(0, TableNameContext);
	}
	public viewName(): ViewNameContext | undefined {
		return this.tryGetRuleContext(0, ViewNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_tableOrViewName; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterTableOrViewName) {
			listener.enterTableOrViewName(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitTableOrViewName) {
			listener.exitTableOrViewName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitTableOrViewName) {
			return visitor.visitTableOrViewName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableNameContext extends ParserRuleContext {
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_tableName; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterTableName) {
			listener.enterTableName(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitTableName) {
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


export class TableNameCreateContext extends ParserRuleContext {
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_tableNameCreate; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterTableNameCreate) {
			listener.enterTableNameCreate(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitTableNameCreate) {
			listener.exitTableNameCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitTableNameCreate) {
			return visitor.visitTableNameCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ViewNameContext extends ParserRuleContext {
	public viewPath(): ViewPathContext {
		return this.getRuleContext(0, ViewPathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_viewName; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterViewName) {
			listener.enterViewName(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitViewName) {
			listener.exitViewName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitViewName) {
			return visitor.visitViewName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ViewNameCreateContext extends ParserRuleContext {
	public viewPath(): ViewPathContext {
		return this.getRuleContext(0, ViewPathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_viewNameCreate; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterViewNameCreate) {
			listener.enterViewNameCreate(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitViewNameCreate) {
			listener.exitViewNameCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitViewNameCreate) {
			return visitor.visitViewNameCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePathContext extends ParserRuleContext {
	public _table!: IdentifierContext;
	public _schema!: IdentifierContext;
	public _catalog!: IdentifierContext;
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
	public get ruleIndex(): number { return TrinoSqlParser.RULE_tablePath; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterTablePath) {
			listener.enterTablePath(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitTablePath) {
			listener.exitTablePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitTablePath) {
			return visitor.visitTablePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ViewPathContext extends ParserRuleContext {
	public _view!: IdentifierContext;
	public _schema!: IdentifierContext;
	public _catalog!: IdentifierContext;
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
	public get ruleIndex(): number { return TrinoSqlParser.RULE_viewPath; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterViewPath) {
			listener.enterViewPath(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitViewPath) {
			listener.exitViewPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitViewPath) {
			return visitor.visitViewPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SchemaNameContext extends ParserRuleContext {
	public schemaPath(): SchemaPathContext {
		return this.getRuleContext(0, SchemaPathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_schemaName; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSchemaName) {
			listener.enterSchemaName(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSchemaName) {
			listener.exitSchemaName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSchemaName) {
			return visitor.visitSchemaName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SchemaNameCreateContext extends ParserRuleContext {
	public schemaPath(): SchemaPathContext {
		return this.getRuleContext(0, SchemaPathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_schemaNameCreate; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSchemaNameCreate) {
			listener.enterSchemaNameCreate(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSchemaNameCreate) {
			listener.exitSchemaNameCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSchemaNameCreate) {
			return visitor.visitSchemaNameCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SchemaPathContext extends ParserRuleContext {
	public _schema!: IdentifierContext;
	public _catalog!: IdentifierContext;
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
	public get ruleIndex(): number { return TrinoSqlParser.RULE_schemaPath; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSchemaPath) {
			listener.enterSchemaPath(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSchemaPath) {
			listener.exitSchemaPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitSchemaPath) {
			return visitor.visitSchemaPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatalogNameContext extends ParserRuleContext {
	public _catalog!: IdentifierContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_catalogName; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCatalogName) {
			listener.enterCatalogName(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCatalogName) {
			listener.exitCatalogName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCatalogName) {
			return visitor.visitCatalogName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatalogNameCreateContext extends ParserRuleContext {
	public _catalog!: IdentifierContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_catalogNameCreate; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCatalogNameCreate) {
			listener.enterCatalogNameCreate(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCatalogNameCreate) {
			listener.exitCatalogNameCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitCatalogNameCreate) {
			return visitor.visitCatalogNameCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_functionName; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterFunctionName) {
			listener.enterFunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitFunctionName) {
			listener.exitFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitFunctionName) {
			return visitor.visitFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnNameContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_columnName; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterColumnName) {
			listener.enterColumnName(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitColumnName) {
			listener.exitColumnName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitColumnName) {
			return visitor.visitColumnName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnNameCreateContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_columnNameCreate; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterColumnNameCreate) {
			listener.enterColumnNameCreate(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitColumnNameCreate) {
			listener.exitColumnNameCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TrinoSqlVisitor<Result>): Result {
		if (visitor.visitColumnNameCreate) {
			return visitor.visitColumnNameCreate(this);
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
	public get ruleIndex(): number { return TrinoSqlParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitQualifiedName) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_grantor; }
	public copyFrom(ctx: GrantorContext): void {
		super.copyFrom(ctx);
	}
}
export class SpecifiedPrincipalContext extends GrantorContext {
	public principal(): PrincipalContext {
		return this.getRuleContext(0, PrincipalContext);
	}
	constructor(ctx: GrantorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterSpecifiedPrincipal) {
			listener.enterSpecifiedPrincipal(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitSpecifiedPrincipal) {
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
export class CurrentUserGrantorContext extends GrantorContext {
	public KW_CURRENT_USER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CURRENT_USER, 0); }
	constructor(ctx: GrantorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCurrentUserGrantor) {
			listener.enterCurrentUserGrantor(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCurrentUserGrantor) {
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
export class CurrentRoleGrantorContext extends GrantorContext {
	public KW_CURRENT_ROLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_CURRENT_ROLE, 0); }
	constructor(ctx: GrantorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterCurrentRoleGrantor) {
			listener.enterCurrentRoleGrantor(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitCurrentRoleGrantor) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_principal; }
	public copyFrom(ctx: PrincipalContext): void {
		super.copyFrom(ctx);
	}
}
export class UnspecifiedPrincipalContext extends PrincipalContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrincipalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterUnspecifiedPrincipal) {
			listener.enterUnspecifiedPrincipal(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitUnspecifiedPrincipal) {
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
	public KW_USER(): TerminalNode { return this.getToken(TrinoSqlParser.KW_USER, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrincipalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterUserPrincipal) {
			listener.enterUserPrincipal(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitUserPrincipal) {
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
	public KW_ROLE(): TerminalNode { return this.getToken(TrinoSqlParser.KW_ROLE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrincipalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRolePrincipal) {
			listener.enterRolePrincipal(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRolePrincipal) {
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
	public get ruleIndex(): number { return TrinoSqlParser.RULE_roles; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterRoles) {
			listener.enterRoles(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitRoles) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_identifier; }
	public copyFrom(ctx: IdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class UnquotedIdentifierContext extends IdentifierContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IDENTIFIER, 0); }
	public nonReserved(): NonReservedContext | undefined {
		return this.tryGetRuleContext(0, NonReservedContext);
	}
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterUnquotedIdentifier) {
			listener.enterUnquotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitUnquotedIdentifier) {
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
export class QuotedIdentifierContext extends IdentifierContext {
	public QUOTED_IDENTIFIER(): TerminalNode { return this.getToken(TrinoSqlParser.QUOTED_IDENTIFIER, 0); }
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterQuotedIdentifier) {
			listener.enterQuotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitQuotedIdentifier) {
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
export class BackQuotedIdentifierContext extends IdentifierContext {
	public BACKQUOTED_IDENTIFIER(): TerminalNode { return this.getToken(TrinoSqlParser.BACKQUOTED_IDENTIFIER, 0); }
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterBackQuotedIdentifier) {
			listener.enterBackQuotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitBackQuotedIdentifier) {
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
export class DigitIdentifierContext extends IdentifierContext {
	public DIGIT_IDENTIFIER(): TerminalNode { return this.getToken(TrinoSqlParser.DIGIT_IDENTIFIER, 0); }
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDigitIdentifier) {
			listener.enterDigitIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDigitIdentifier) {
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


export class NumberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_number; }
	public copyFrom(ctx: NumberContext): void {
		super.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends NumberContext {
	public DECIMAL_VALUE(): TerminalNode { return this.getToken(TrinoSqlParser.DECIMAL_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDecimalLiteral) {
			listener.enterDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDecimalLiteral) {
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
	public DOUBLE_VALUE(): TerminalNode { return this.getToken(TrinoSqlParser.DOUBLE_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterDoubleLiteral) {
			listener.enterDoubleLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitDoubleLiteral) {
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
	public INTEGER_VALUE(): TerminalNode { return this.getToken(TrinoSqlParser.INTEGER_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitIntegerLiteral) {
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
	public KW_ADD(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ADD, 0); }
	public KW_ADMIN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ADMIN, 0); }
	public KW_AFTER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_AFTER, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ALL, 0); }
	public KW_ANALYZE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ANALYZE, 0); }
	public KW_ANY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ANY, 0); }
	public KW_ARRAY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ARRAY, 0); }
	public KW_ASC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ASC, 0); }
	public KW_AT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_AT, 0); }
	public KW_AUTHORIZATION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_AUTHORIZATION, 0); }
	public KW_BERNOULLI(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_BERNOULLI, 0); }
	public KW_CALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_CALL, 0); }
	public KW_CASCADE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_CASCADE, 0); }
	public KW_CATALOGS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_CATALOGS, 0); }
	public KW_COLUMN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_COLUMN, 0); }
	public KW_COLUMNS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_COLUMNS, 0); }
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_COMMENT, 0); }
	public KW_COMMIT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_COMMIT, 0); }
	public KW_COMMITTED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_COMMITTED, 0); }
	public KW_CURRENT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_CURRENT, 0); }
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DATA, 0); }
	public KW_DATE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DATE, 0); }
	public KW_DAY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DAY, 0); }
	public KW_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DEFAULT, 0); }
	public KW_DEFINE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DEFINE, 0); }
	public KW_DEFINER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DEFINER, 0); }
	public KW_DESC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DESC, 0); }
	public KW_DISTRIBUTED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DISTRIBUTED, 0); }
	public KW_DOUBLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DOUBLE, 0); }
	public KW_EMPTY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_EMPTY, 0); }
	public KW_EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_EXCLUDING, 0); }
	public KW_EXPLAIN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_EXPLAIN, 0); }
	public KW_FETCH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FETCH, 0); }
	public KW_FILTER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FILTER, 0); }
	public KW_FINAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FINAL, 0); }
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FIRST, 0); }
	public KW_FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FOLLOWING, 0); }
	public KW_FORMAT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FORMAT, 0); }
	public KW_FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_FUNCTIONS, 0); }
	public KW_GRANT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_GRANT, 0); }
	public KW_GRANTED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_GRANTED, 0); }
	public KW_GRANTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_GRANTS, 0); }
	public KW_DENY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_DENY, 0); }
	public KW_GRAPHVIZ(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_GRAPHVIZ, 0); }
	public KW_GROUPS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_GROUPS, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_HOUR, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IF, 0); }
	public KW_IGNORE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IGNORE, 0); }
	public KW_INCLUDING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_INCLUDING, 0); }
	public KW_INITIAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_INITIAL, 0); }
	public KW_INPUT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_INPUT, 0); }
	public KW_INTERVAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_INTERVAL, 0); }
	public KW_INVOKER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_INVOKER, 0); }
	public KW_IO(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_IO, 0); }
	public KW_ISOLATION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ISOLATION, 0); }
	public KW_JSON(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_JSON, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LAST, 0); }
	public KW_LATERAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LATERAL, 0); }
	public KW_LEVEL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LEVEL, 0); }
	public KW_LIMIT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LIMIT, 0); }
	public KW_LOCAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LOCAL, 0); }
	public KW_LOGICAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_LOGICAL, 0); }
	public KW_MAP(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MAP, 0); }
	public KW_MATCH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MATCH, 0); }
	public KW_MATCHED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MATCHED, 0); }
	public KW_MATCHES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MATCHES, 0); }
	public KW_MATCH_RECOGNIZE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MATCH_RECOGNIZE, 0); }
	public KW_MATERIALIZED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MATERIALIZED, 0); }
	public KW_MEASURES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MEASURES, 0); }
	public KW_MERGE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MERGE, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MINUTE, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_MONTH, 0); }
	public KW_NEXT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NEXT, 0); }
	public KW_NFC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NFC, 0); }
	public KW_NFD(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NFD, 0); }
	public KW_NFKC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NFKC, 0); }
	public KW_NFKD(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NFKD, 0); }
	public KW_NO(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NO, 0); }
	public KW_NONE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NONE, 0); }
	public KW_NULLIF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NULLIF, 0); }
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_NULLS, 0); }
	public KW_OFFSET(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_OFFSET, 0); }
	public KW_OMIT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_OMIT, 0); }
	public KW_ONE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ONE, 0); }
	public KW_ONLY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ONLY, 0); }
	public KW_OPTION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_OPTION, 0); }
	public KW_ORDINALITY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ORDINALITY, 0); }
	public KW_OUTPUT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_OUTPUT, 0); }
	public KW_OVER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_OVER, 0); }
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PARTITION, 0); }
	public KW_PARTITIONS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PARTITIONS, 0); }
	public KW_PAST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PAST, 0); }
	public KW_PATH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PATH, 0); }
	public KW_PATTERN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PATTERN, 0); }
	public KW_PER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PER, 0); }
	public KW_PERMUTE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PERMUTE, 0); }
	public KW_POSITION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_POSITION, 0); }
	public KW_PRECEDING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PRECEDING, 0); }
	public KW_PRECISION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PRECISION, 0); }
	public KW_PRIVILEGES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PRIVILEGES, 0); }
	public KW_PROPERTIES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_PROPERTIES, 0); }
	public KW_RANGE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_RANGE, 0); }
	public KW_READ(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_READ, 0); }
	public KW_REFRESH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_REFRESH, 0); }
	public KW_RENAME(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_RENAME, 0); }
	public KW_REPEATABLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_REPEATABLE, 0); }
	public KW_REPLACE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_REPLACE, 0); }
	public KW_RESET(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_RESET, 0); }
	public KW_RESPECT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_RESPECT, 0); }
	public KW_RESTRICT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_RESTRICT, 0); }
	public KW_REVOKE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_REVOKE, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ROLE, 0); }
	public KW_ROLES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ROLES, 0); }
	public KW_ROLLBACK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ROLLBACK, 0); }
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ROW, 0); }
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ROWS, 0); }
	public KW_RUNNING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_RUNNING, 0); }
	public KW_SCHEMA(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SCHEMA, 0); }
	public KW_SCHEMAS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SCHEMAS, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SECOND, 0); }
	public KW_SECURITY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SECURITY, 0); }
	public KW_SEEK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SEEK, 0); }
	public KW_SERIALIZABLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SERIALIZABLE, 0); }
	public KW_SESSION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SESSION, 0); }
	public KW_SET(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SET, 0); }
	public KW_SETS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SETS, 0); }
	public KW_SHOW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SHOW, 0); }
	public KW_SOME(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SOME, 0); }
	public KW_START(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_START, 0); }
	public KW_STATS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_STATS, 0); }
	public KW_SUBSET(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SUBSET, 0); }
	public KW_SUBSTRING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SUBSTRING, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_SYSTEM, 0); }
	public KW_TABLES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TABLES, 0); }
	public KW_TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TABLESAMPLE, 0); }
	public KW_TEXT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TEXT, 0); }
	public KW_TIES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TIES, 0); }
	public KW_TIME(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TIME, 0); }
	public KW_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TIMESTAMP, 0); }
	public KW_TO(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TO, 0); }
	public KW_TRANSACTION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TRANSACTION, 0); }
	public KW_TRUNCATE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TRUNCATE, 0); }
	public KW_TRY_CAST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TRY_CAST, 0); }
	public KW_TYPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_TYPE, 0); }
	public KW_UNBOUNDED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_UNBOUNDED, 0); }
	public KW_UNCOMMITTED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_UNCOMMITTED, 0); }
	public KW_UNMATCHED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_UNMATCHED, 0); }
	public KW_UPDATE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_UPDATE, 0); }
	public KW_USE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_USE, 0); }
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_USER, 0); }
	public KW_VALIDATE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_VALIDATE, 0); }
	public KW_VERBOSE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_VERBOSE, 0); }
	public KW_VIEW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_VIEW, 0); }
	public KW_WINDOW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WINDOW, 0); }
	public KW_WITHOUT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WITHOUT, 0); }
	public KW_WORK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WORK, 0); }
	public KW_WRITE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_WRITE, 0); }
	public KW_YEAR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_YEAR, 0); }
	public KW_ZONE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.KW_ZONE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TrinoSqlParser.RULE_nonReserved; }
	// @Override
	public enterRule(listener: TrinoSqlListener): void {
		if (listener.enterNonReserved) {
			listener.enterNonReserved(this);
		}
	}
	// @Override
	public exitRule(listener: TrinoSqlListener): void {
		if (listener.exitNonReserved) {
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


