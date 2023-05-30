// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/trinosql/TrinoSql.g4 by ANTLR 4.9.0-SNAPSHOT


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

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'('", "')'", "','", "'SKIP'", "'->'", "'['", "']'", 
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
		undefined, undefined, undefined, "ADD", "ADMIN", "AFTER", "ALL", "ALTER", 
		"ANALYZE", "AND", "ANY", "ARRAY", "AS", "ASC", "AT", "AUTHORIZATION", 
		"BERNOULLI", "BETWEEN", "BY", "CALL", "CASCADE", "CASE", "CAST", "CATALOGS", 
		"COLUMN", "COLUMNS", "COMMENT", "COMMIT", "COMMITTED", "CONSTRAINT", "CREATE", 
		"CROSS", "CUBE", "CURRENT", "CURRENT_CATALOG", "CURRENT_DATE", "CURRENT_PATH", 
		"CURRENT_ROLE", "CURRENT_SCHEMA", "CURRENT_TIME", "CURRENT_TIMESTAMP", 
		"CURRENT_USER", "DATA", "DATE", "DAY", "DEFAULT", "DEALLOCATE", "DEFINER", 
		"DELETE", "DESC", "DESCRIBE", "DEFINE", "DISTINCT", "DISTRIBUTED", "DOUBLE", 
		"DROP", "ELSE", "EMPTY", "END", "ESCAPE", "EXCEPT", "EXCLUDING", "EXECUTE", 
		"EXISTS", "EXPLAIN", "EXTRACT", "FALSE", "FETCH", "FILTER", "FINAL", "FIRST", 
		"FOLLOWING", "FOR", "FORMAT", "FROM", "FULL", "FUNCTIONS", "GRANT", "GRANTED", 
		"GRANTS", "DENY", "GRAPHVIZ", "GROUP", "GROUPING", "GROUPS", "HAVING", 
		"HOUR", "IF", "IGNORE", "IN", "INCLUDING", "INITIAL", "INNER", "INPUT", 
		"INSERT", "INTERSECT", "INTERVAL", "INTO", "INVOKER", "IO", "IS", "ISOLATION", 
		"JOIN", "JSON", "LAST", "LATERAL", "LEFT", "LEVEL", "LIKE", "LIMIT", "LOCAL", 
		"LOCALTIME", "LOCALTIMESTAMP", "LOGICAL", "MAP", "MATCH", "MATCHED", "MATCHES", 
		"MATCH_RECOGNIZE", "MATERIALIZED", "MEASURES", "MERGE", "MINUTE", "MONTH", 
		"NATURAL", "NEXT", "NFC", "NFD", "NFKC", "NFKD", "NO", "NONE", "NORMALIZE", 
		"NOT", "NULL", "NULLIF", "NULLS", "OFFSET", "OMIT", "ON", "ONE", "ONLY", 
		"OPTION", "OR", "ORDER", "ORDINALITY", "OUTER", "OUTPUT", "OVER", "PARTITION", 
		"PARTITIONS", "PAST", "PATH", "PATTERN", "PER", "PERMUTE", "POSITION", 
		"PRECEDING", "PRECISION", "PREPARE", "PRIVILEGES", "PROPERTIES", "RANGE", 
		"READ", "RECURSIVE", "REFRESH", "RENAME", "REPEATABLE", "REPLACE", "RESET", 
		"RESPECT", "RESTRICT", "REVOKE", "RIGHT", "ROLE", "ROLES", "ROLLBACK", 
		"ROLLUP", "ROW", "ROWS", "RUNNING", "SCHEMA", "SCHEMAS", "SECOND", "SECURITY", 
		"SEEK", "SELECT", "SERIALIZABLE", "SESSION", "SET", "SETS", "SHOW", "SOME", 
		"START", "STATS", "SUBSET", "SUBSTRING", "SYSTEM", "TABLE", "TABLES", 
		"TABLESAMPLE", "TEXT", "THEN", "TIES", "TIME", "TIMESTAMP", "TO", "TRANSACTION", 
		"TRUNCATE", "TRUE", "TRY_CAST", "TYPE", "UESCAPE", "UNBOUNDED", "UNCOMMITTED", 
		"UNION", "UNMATCHED", "UNNEST", "UPDATE", "USE", "USER", "USING", "VALIDATE", 
		"VALUES", "VERBOSE", "VIEW", "WHEN", "WHERE", "WINDOW", "WITH", "WITHOUT", 
		"WORK", "WRITE", "YEAR", "ZONE", "EQ", "NEQ", "LT", "LTE", "GT", "GTE", 
		"PLUS", "MINUS", "ASTERISK", "SLASH", "PERCENT", "CONCAT", "QUESTION_MARK", 
		"STRING", "UNICODE_STRING", "BINARY_LITERAL", "INTEGER_VALUE", "DECIMAL_VALUE", 
		"DOUBLE_VALUE", "IDENTIFIER", "DIGIT_IDENTIFIER", "QUOTED_IDENTIFIER", 
		"BACKQUOTED_IDENTIFIER", "SEMICOLON", "SIMPLE_COMMENT", "BRACKETED_COMMENT", 
		"WS", "UNRECOGNIZED", "DELIMITER",
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
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TrinoSqlParser.T__1) | (1 << TrinoSqlParser.T__9) | (1 << TrinoSqlParser.T__10) | (1 << TrinoSqlParser.T__11) | (1 << TrinoSqlParser.ADD) | (1 << TrinoSqlParser.ADMIN) | (1 << TrinoSqlParser.AFTER) | (1 << TrinoSqlParser.ALL) | (1 << TrinoSqlParser.ALTER) | (1 << TrinoSqlParser.ANALYZE) | (1 << TrinoSqlParser.ANY) | (1 << TrinoSqlParser.ARRAY) | (1 << TrinoSqlParser.ASC) | (1 << TrinoSqlParser.AT) | (1 << TrinoSqlParser.AUTHORIZATION) | (1 << TrinoSqlParser.BERNOULLI))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TrinoSqlParser.CALL - 33)) | (1 << (TrinoSqlParser.CASCADE - 33)) | (1 << (TrinoSqlParser.CASE - 33)) | (1 << (TrinoSqlParser.CAST - 33)) | (1 << (TrinoSqlParser.CATALOGS - 33)) | (1 << (TrinoSqlParser.COLUMN - 33)) | (1 << (TrinoSqlParser.COLUMNS - 33)) | (1 << (TrinoSqlParser.COMMENT - 33)) | (1 << (TrinoSqlParser.COMMIT - 33)) | (1 << (TrinoSqlParser.COMMITTED - 33)) | (1 << (TrinoSqlParser.CREATE - 33)) | (1 << (TrinoSqlParser.CURRENT - 33)) | (1 << (TrinoSqlParser.CURRENT_CATALOG - 33)) | (1 << (TrinoSqlParser.CURRENT_DATE - 33)) | (1 << (TrinoSqlParser.CURRENT_PATH - 33)) | (1 << (TrinoSqlParser.CURRENT_SCHEMA - 33)) | (1 << (TrinoSqlParser.CURRENT_TIME - 33)) | (1 << (TrinoSqlParser.CURRENT_TIMESTAMP - 33)) | (1 << (TrinoSqlParser.CURRENT_USER - 33)) | (1 << (TrinoSqlParser.DATA - 33)) | (1 << (TrinoSqlParser.DATE - 33)) | (1 << (TrinoSqlParser.DAY - 33)) | (1 << (TrinoSqlParser.DEFAULT - 33)) | (1 << (TrinoSqlParser.DEALLOCATE - 33)) | (1 << (TrinoSqlParser.DEFINER - 33)) | (1 << (TrinoSqlParser.DELETE - 33)) | (1 << (TrinoSqlParser.DESC - 33)) | (1 << (TrinoSqlParser.DESCRIBE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (TrinoSqlParser.DEFINE - 65)) | (1 << (TrinoSqlParser.DISTRIBUTED - 65)) | (1 << (TrinoSqlParser.DOUBLE - 65)) | (1 << (TrinoSqlParser.DROP - 65)) | (1 << (TrinoSqlParser.EMPTY - 65)) | (1 << (TrinoSqlParser.EXCLUDING - 65)) | (1 << (TrinoSqlParser.EXECUTE - 65)) | (1 << (TrinoSqlParser.EXISTS - 65)) | (1 << (TrinoSqlParser.EXPLAIN - 65)) | (1 << (TrinoSqlParser.EXTRACT - 65)) | (1 << (TrinoSqlParser.FALSE - 65)) | (1 << (TrinoSqlParser.FETCH - 65)) | (1 << (TrinoSqlParser.FILTER - 65)) | (1 << (TrinoSqlParser.FINAL - 65)) | (1 << (TrinoSqlParser.FIRST - 65)) | (1 << (TrinoSqlParser.FOLLOWING - 65)) | (1 << (TrinoSqlParser.FORMAT - 65)) | (1 << (TrinoSqlParser.FUNCTIONS - 65)) | (1 << (TrinoSqlParser.GRANT - 65)) | (1 << (TrinoSqlParser.GRANTED - 65)) | (1 << (TrinoSqlParser.GRANTS - 65)) | (1 << (TrinoSqlParser.DENY - 65)) | (1 << (TrinoSqlParser.GRAPHVIZ - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (TrinoSqlParser.GROUPING - 97)) | (1 << (TrinoSqlParser.GROUPS - 97)) | (1 << (TrinoSqlParser.HOUR - 97)) | (1 << (TrinoSqlParser.IF - 97)) | (1 << (TrinoSqlParser.IGNORE - 97)) | (1 << (TrinoSqlParser.INCLUDING - 97)) | (1 << (TrinoSqlParser.INITIAL - 97)) | (1 << (TrinoSqlParser.INPUT - 97)) | (1 << (TrinoSqlParser.INSERT - 97)) | (1 << (TrinoSqlParser.INTERVAL - 97)) | (1 << (TrinoSqlParser.INVOKER - 97)) | (1 << (TrinoSqlParser.IO - 97)) | (1 << (TrinoSqlParser.ISOLATION - 97)) | (1 << (TrinoSqlParser.JSON - 97)) | (1 << (TrinoSqlParser.LAST - 97)) | (1 << (TrinoSqlParser.LATERAL - 97)) | (1 << (TrinoSqlParser.LEVEL - 97)) | (1 << (TrinoSqlParser.LIMIT - 97)) | (1 << (TrinoSqlParser.LOCAL - 97)) | (1 << (TrinoSqlParser.LOCALTIME - 97)) | (1 << (TrinoSqlParser.LOCALTIMESTAMP - 97)) | (1 << (TrinoSqlParser.LOGICAL - 97)) | (1 << (TrinoSqlParser.MAP - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (TrinoSqlParser.MATCH - 129)) | (1 << (TrinoSqlParser.MATCHED - 129)) | (1 << (TrinoSqlParser.MATCHES - 129)) | (1 << (TrinoSqlParser.MATCH_RECOGNIZE - 129)) | (1 << (TrinoSqlParser.MATERIALIZED - 129)) | (1 << (TrinoSqlParser.MEASURES - 129)) | (1 << (TrinoSqlParser.MERGE - 129)) | (1 << (TrinoSqlParser.MINUTE - 129)) | (1 << (TrinoSqlParser.MONTH - 129)) | (1 << (TrinoSqlParser.NEXT - 129)) | (1 << (TrinoSqlParser.NFC - 129)) | (1 << (TrinoSqlParser.NFD - 129)) | (1 << (TrinoSqlParser.NFKC - 129)) | (1 << (TrinoSqlParser.NFKD - 129)) | (1 << (TrinoSqlParser.NO - 129)) | (1 << (TrinoSqlParser.NONE - 129)) | (1 << (TrinoSqlParser.NORMALIZE - 129)) | (1 << (TrinoSqlParser.NOT - 129)) | (1 << (TrinoSqlParser.NULL - 129)) | (1 << (TrinoSqlParser.NULLIF - 129)) | (1 << (TrinoSqlParser.NULLS - 129)) | (1 << (TrinoSqlParser.OFFSET - 129)) | (1 << (TrinoSqlParser.OMIT - 129)) | (1 << (TrinoSqlParser.ONE - 129)) | (1 << (TrinoSqlParser.ONLY - 129)) | (1 << (TrinoSqlParser.OPTION - 129)) | (1 << (TrinoSqlParser.ORDINALITY - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (TrinoSqlParser.OUTPUT - 161)) | (1 << (TrinoSqlParser.OVER - 161)) | (1 << (TrinoSqlParser.PARTITION - 161)) | (1 << (TrinoSqlParser.PARTITIONS - 161)) | (1 << (TrinoSqlParser.PAST - 161)) | (1 << (TrinoSqlParser.PATH - 161)) | (1 << (TrinoSqlParser.PATTERN - 161)) | (1 << (TrinoSqlParser.PER - 161)) | (1 << (TrinoSqlParser.PERMUTE - 161)) | (1 << (TrinoSqlParser.POSITION - 161)) | (1 << (TrinoSqlParser.PRECEDING - 161)) | (1 << (TrinoSqlParser.PRECISION - 161)) | (1 << (TrinoSqlParser.PREPARE - 161)) | (1 << (TrinoSqlParser.PRIVILEGES - 161)) | (1 << (TrinoSqlParser.PROPERTIES - 161)) | (1 << (TrinoSqlParser.RANGE - 161)) | (1 << (TrinoSqlParser.READ - 161)) | (1 << (TrinoSqlParser.REFRESH - 161)) | (1 << (TrinoSqlParser.RENAME - 161)) | (1 << (TrinoSqlParser.REPEATABLE - 161)) | (1 << (TrinoSqlParser.REPLACE - 161)) | (1 << (TrinoSqlParser.RESET - 161)) | (1 << (TrinoSqlParser.RESPECT - 161)) | (1 << (TrinoSqlParser.RESTRICT - 161)) | (1 << (TrinoSqlParser.REVOKE - 161)) | (1 << (TrinoSqlParser.ROLE - 161)) | (1 << (TrinoSqlParser.ROLES - 161)) | (1 << (TrinoSqlParser.ROLLBACK - 161)) | (1 << (TrinoSqlParser.ROW - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (TrinoSqlParser.ROWS - 193)) | (1 << (TrinoSqlParser.RUNNING - 193)) | (1 << (TrinoSqlParser.SCHEMA - 193)) | (1 << (TrinoSqlParser.SCHEMAS - 193)) | (1 << (TrinoSqlParser.SECOND - 193)) | (1 << (TrinoSqlParser.SECURITY - 193)) | (1 << (TrinoSqlParser.SEEK - 193)) | (1 << (TrinoSqlParser.SELECT - 193)) | (1 << (TrinoSqlParser.SERIALIZABLE - 193)) | (1 << (TrinoSqlParser.SESSION - 193)) | (1 << (TrinoSqlParser.SET - 193)) | (1 << (TrinoSqlParser.SETS - 193)) | (1 << (TrinoSqlParser.SHOW - 193)) | (1 << (TrinoSqlParser.SOME - 193)) | (1 << (TrinoSqlParser.START - 193)) | (1 << (TrinoSqlParser.STATS - 193)) | (1 << (TrinoSqlParser.SUBSET - 193)) | (1 << (TrinoSqlParser.SUBSTRING - 193)) | (1 << (TrinoSqlParser.SYSTEM - 193)) | (1 << (TrinoSqlParser.TABLE - 193)) | (1 << (TrinoSqlParser.TABLES - 193)) | (1 << (TrinoSqlParser.TABLESAMPLE - 193)) | (1 << (TrinoSqlParser.TEXT - 193)) | (1 << (TrinoSqlParser.TIES - 193)) | (1 << (TrinoSqlParser.TIME - 193)) | (1 << (TrinoSqlParser.TIMESTAMP - 193)) | (1 << (TrinoSqlParser.TO - 193)) | (1 << (TrinoSqlParser.TRANSACTION - 193)) | (1 << (TrinoSqlParser.TRUNCATE - 193)) | (1 << (TrinoSqlParser.TRUE - 193)) | (1 << (TrinoSqlParser.TRY_CAST - 193)))) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (TrinoSqlParser.TYPE - 225)) | (1 << (TrinoSqlParser.UNBOUNDED - 225)) | (1 << (TrinoSqlParser.UNCOMMITTED - 225)) | (1 << (TrinoSqlParser.UNMATCHED - 225)) | (1 << (TrinoSqlParser.UPDATE - 225)) | (1 << (TrinoSqlParser.USE - 225)) | (1 << (TrinoSqlParser.USER - 225)) | (1 << (TrinoSqlParser.VALIDATE - 225)) | (1 << (TrinoSqlParser.VALUES - 225)) | (1 << (TrinoSqlParser.VERBOSE - 225)) | (1 << (TrinoSqlParser.VIEW - 225)) | (1 << (TrinoSqlParser.WINDOW - 225)) | (1 << (TrinoSqlParser.WITH - 225)) | (1 << (TrinoSqlParser.WITHOUT - 225)) | (1 << (TrinoSqlParser.WORK - 225)) | (1 << (TrinoSqlParser.WRITE - 225)) | (1 << (TrinoSqlParser.YEAR - 225)) | (1 << (TrinoSqlParser.ZONE - 225)) | (1 << (TrinoSqlParser.PLUS - 225)) | (1 << (TrinoSqlParser.MINUS - 225)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (TrinoSqlParser.QUESTION_MARK - 261)) | (1 << (TrinoSqlParser.STRING - 261)) | (1 << (TrinoSqlParser.UNICODE_STRING - 261)) | (1 << (TrinoSqlParser.BINARY_LITERAL - 261)) | (1 << (TrinoSqlParser.INTEGER_VALUE - 261)) | (1 << (TrinoSqlParser.DECIMAL_VALUE - 261)) | (1 << (TrinoSqlParser.DOUBLE_VALUE - 261)) | (1 << (TrinoSqlParser.IDENTIFIER - 261)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 261)))) !== 0)) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 193;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 188;
				this.singleStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 189;
				this.standaloneExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 190;
				this.standalonePathSpecification();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 191;
				this.standaloneType();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 192;
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
		this.enterRule(_localctx, 4, TrinoSqlParser.RULE_singleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.statement();
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.SEMICOLON) {
				{
				this.state = 196;
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
		this.enterRule(_localctx, 6, TrinoSqlParser.RULE_standaloneExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.expression();
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.SEMICOLON) {
				{
				this.state = 200;
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
		this.enterRule(_localctx, 8, TrinoSqlParser.RULE_standalonePathSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.pathSpecification();
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.SEMICOLON) {
				{
				this.state = 204;
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
		this.enterRule(_localctx, 10, TrinoSqlParser.RULE_standaloneType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.type(0);
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.SEMICOLON) {
				{
				this.state = 208;
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
		this.enterRule(_localctx, 12, TrinoSqlParser.RULE_standaloneRowPattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.rowPattern(0);
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.SEMICOLON) {
				{
				this.state = 212;
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
		this.enterRule(_localctx, 14, TrinoSqlParser.RULE_statement);
		let _la: number;
		try {
			this.state = 985;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				_localctx = new StatementDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 215;
				this.query();
				}
				break;

			case 2:
				_localctx = new UseContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 216;
				this.match(TrinoSqlParser.USE);
				this.state = 217;
				(_localctx as UseContext)._schema = this.identifier();
				}
				break;

			case 3:
				_localctx = new UseContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 218;
				this.match(TrinoSqlParser.USE);
				this.state = 219;
				(_localctx as UseContext)._catalog = this.identifier();
				this.state = 220;
				this.match(TrinoSqlParser.T__0);
				this.state = 221;
				(_localctx as UseContext)._schema = this.identifier();
				}
				break;

			case 4:
				_localctx = new CreateSchemaContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 223;
				this.match(TrinoSqlParser.CREATE);
				this.state = 224;
				this.match(TrinoSqlParser.SCHEMA);
				this.state = 228;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
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
				_localctx = new DropSchemaContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 239;
				this.match(TrinoSqlParser.DROP);
				this.state = 240;
				this.match(TrinoSqlParser.SCHEMA);
				this.state = 243;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 246;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.CASCADE || _la === TrinoSqlParser.RESTRICT)) {
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
				}
				}
				break;

			case 6:
				_localctx = new RenameSchemaContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
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
				_localctx = new SetSchemaAuthorizationContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
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
				_localctx = new CreateTableAsSelectContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 263;
				this.match(TrinoSqlParser.CREATE);
				this.state = 264;
				this.match(TrinoSqlParser.TABLE);
				this.state = 268;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
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
				if (_la === TrinoSqlParser.T__1) {
					{
					this.state = 271;
					this.columnAliases();
					}
				}

				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.COMMENT) {
					{
					this.state = 274;
					this.match(TrinoSqlParser.COMMENT);
					this.state = 275;
					this.string();
					}
				}

				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.WITH) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 290;
					this.match(TrinoSqlParser.WITH);
					this.state = 292;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.NO) {
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
				_localctx = new CreateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 297;
				this.match(TrinoSqlParser.CREATE);
				this.state = 298;
				this.match(TrinoSqlParser.TABLE);
				this.state = 302;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
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
				while (_la === TrinoSqlParser.T__3) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 315;
					this.match(TrinoSqlParser.COMMENT);
					this.state = 316;
					this.string();
					}
					break;
				}
				this.state = 321;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
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
				_localctx = new DropTableContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 323;
				this.match(TrinoSqlParser.DROP);
				this.state = 324;
				this.match(TrinoSqlParser.TABLE);
				this.state = 327;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
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
				_localctx = new InsertIntoContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 330;
				this.match(TrinoSqlParser.INSERT);
				this.state = 331;
				this.match(TrinoSqlParser.INTO);
				this.state = 332;
				this.qualifiedName();
				this.state = 334;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
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
				_localctx = new DeleteContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
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
				if (_la === TrinoSqlParser.WHERE) {
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
				_localctx = new TruncateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
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
				_localctx = new RenameTableContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 348;
				this.match(TrinoSqlParser.ALTER);
				this.state = 349;
				this.match(TrinoSqlParser.TABLE);
				this.state = 352;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
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
				(_localctx as RenameTableContext)._from = this.qualifiedName();
				this.state = 355;
				this.match(TrinoSqlParser.RENAME);
				this.state = 356;
				this.match(TrinoSqlParser.TO);
				this.state = 357;
				(_localctx as RenameTableContext)._to = this.qualifiedName();
				}
				break;

			case 15:
				_localctx = new CommentTableContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
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
				case TrinoSqlParser.STRING:
				case TrinoSqlParser.UNICODE_STRING:
					{
					this.state = 364;
					this.string();
					}
					break;
				case TrinoSqlParser.NULL:
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
				_localctx = new CommentColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
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
				case TrinoSqlParser.STRING:
				case TrinoSqlParser.UNICODE_STRING:
					{
					this.state = 373;
					this.string();
					}
					break;
				case TrinoSqlParser.NULL:
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
				_localctx = new RenameColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 377;
				this.match(TrinoSqlParser.ALTER);
				this.state = 378;
				this.match(TrinoSqlParser.TABLE);
				this.state = 381;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
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
				(_localctx as RenameColumnContext)._tableName = this.qualifiedName();
				this.state = 384;
				this.match(TrinoSqlParser.RENAME);
				this.state = 385;
				this.match(TrinoSqlParser.COLUMN);
				this.state = 388;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
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
				(_localctx as RenameColumnContext)._from = this.identifier();
				this.state = 391;
				this.match(TrinoSqlParser.TO);
				this.state = 392;
				(_localctx as RenameColumnContext)._to = this.identifier();
				}
				break;

			case 18:
				_localctx = new DropColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 394;
				this.match(TrinoSqlParser.ALTER);
				this.state = 395;
				this.match(TrinoSqlParser.TABLE);
				this.state = 398;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
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
				(_localctx as DropColumnContext)._tableName = this.qualifiedName();
				this.state = 401;
				this.match(TrinoSqlParser.DROP);
				this.state = 402;
				this.match(TrinoSqlParser.COLUMN);
				this.state = 405;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
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
				(_localctx as DropColumnContext)._column = this.qualifiedName();
				}
				break;

			case 19:
				_localctx = new AddColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 409;
				this.match(TrinoSqlParser.ALTER);
				this.state = 410;
				this.match(TrinoSqlParser.TABLE);
				this.state = 413;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
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
				(_localctx as AddColumnContext)._tableName = this.qualifiedName();
				this.state = 416;
				this.match(TrinoSqlParser.ADD);
				this.state = 417;
				this.match(TrinoSqlParser.COLUMN);
				this.state = 421;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
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
				(_localctx as AddColumnContext)._column = this.columnDefinition();
				}
				break;

			case 20:
				_localctx = new SetTableAuthorizationContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 425;
				this.match(TrinoSqlParser.ALTER);
				this.state = 426;
				this.match(TrinoSqlParser.TABLE);
				this.state = 427;
				(_localctx as SetTableAuthorizationContext)._tableName = this.qualifiedName();
				this.state = 428;
				this.match(TrinoSqlParser.SET);
				this.state = 429;
				this.match(TrinoSqlParser.AUTHORIZATION);
				this.state = 430;
				this.principal();
				}
				break;

			case 21:
				_localctx = new SetTablePropertiesContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 432;
				this.match(TrinoSqlParser.ALTER);
				this.state = 433;
				this.match(TrinoSqlParser.TABLE);
				this.state = 434;
				(_localctx as SetTablePropertiesContext)._tableName = this.qualifiedName();
				this.state = 435;
				this.match(TrinoSqlParser.SET);
				this.state = 436;
				this.match(TrinoSqlParser.PROPERTIES);
				this.state = 437;
				this.propertyAssignments();
				}
				break;

			case 22:
				_localctx = new TableExecuteContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 439;
				this.match(TrinoSqlParser.ALTER);
				this.state = 440;
				this.match(TrinoSqlParser.TABLE);
				this.state = 441;
				(_localctx as TableExecuteContext)._tableName = this.qualifiedName();
				this.state = 442;
				this.match(TrinoSqlParser.EXECUTE);
				this.state = 443;
				(_localctx as TableExecuteContext)._procedureName = this.identifier();
				this.state = 456;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 444;
					this.match(TrinoSqlParser.T__1);
					this.state = 453;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TrinoSqlParser.T__1) | (1 << TrinoSqlParser.ADD) | (1 << TrinoSqlParser.ADMIN) | (1 << TrinoSqlParser.AFTER) | (1 << TrinoSqlParser.ALL) | (1 << TrinoSqlParser.ANALYZE) | (1 << TrinoSqlParser.ANY) | (1 << TrinoSqlParser.ARRAY) | (1 << TrinoSqlParser.ASC) | (1 << TrinoSqlParser.AT) | (1 << TrinoSqlParser.AUTHORIZATION) | (1 << TrinoSqlParser.BERNOULLI))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TrinoSqlParser.CALL - 33)) | (1 << (TrinoSqlParser.CASCADE - 33)) | (1 << (TrinoSqlParser.CASE - 33)) | (1 << (TrinoSqlParser.CAST - 33)) | (1 << (TrinoSqlParser.CATALOGS - 33)) | (1 << (TrinoSqlParser.COLUMN - 33)) | (1 << (TrinoSqlParser.COLUMNS - 33)) | (1 << (TrinoSqlParser.COMMENT - 33)) | (1 << (TrinoSqlParser.COMMIT - 33)) | (1 << (TrinoSqlParser.COMMITTED - 33)) | (1 << (TrinoSqlParser.CURRENT - 33)) | (1 << (TrinoSqlParser.CURRENT_CATALOG - 33)) | (1 << (TrinoSqlParser.CURRENT_DATE - 33)) | (1 << (TrinoSqlParser.CURRENT_PATH - 33)) | (1 << (TrinoSqlParser.CURRENT_SCHEMA - 33)) | (1 << (TrinoSqlParser.CURRENT_TIME - 33)) | (1 << (TrinoSqlParser.CURRENT_TIMESTAMP - 33)) | (1 << (TrinoSqlParser.CURRENT_USER - 33)) | (1 << (TrinoSqlParser.DATA - 33)) | (1 << (TrinoSqlParser.DATE - 33)) | (1 << (TrinoSqlParser.DAY - 33)) | (1 << (TrinoSqlParser.DEFAULT - 33)) | (1 << (TrinoSqlParser.DEFINER - 33)) | (1 << (TrinoSqlParser.DESC - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (TrinoSqlParser.DEFINE - 65)) | (1 << (TrinoSqlParser.DISTRIBUTED - 65)) | (1 << (TrinoSqlParser.DOUBLE - 65)) | (1 << (TrinoSqlParser.EMPTY - 65)) | (1 << (TrinoSqlParser.EXCLUDING - 65)) | (1 << (TrinoSqlParser.EXISTS - 65)) | (1 << (TrinoSqlParser.EXPLAIN - 65)) | (1 << (TrinoSqlParser.EXTRACT - 65)) | (1 << (TrinoSqlParser.FALSE - 65)) | (1 << (TrinoSqlParser.FETCH - 65)) | (1 << (TrinoSqlParser.FILTER - 65)) | (1 << (TrinoSqlParser.FINAL - 65)) | (1 << (TrinoSqlParser.FIRST - 65)) | (1 << (TrinoSqlParser.FOLLOWING - 65)) | (1 << (TrinoSqlParser.FORMAT - 65)) | (1 << (TrinoSqlParser.FUNCTIONS - 65)) | (1 << (TrinoSqlParser.GRANT - 65)) | (1 << (TrinoSqlParser.GRANTED - 65)) | (1 << (TrinoSqlParser.GRANTS - 65)) | (1 << (TrinoSqlParser.DENY - 65)) | (1 << (TrinoSqlParser.GRAPHVIZ - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (TrinoSqlParser.GROUPING - 97)) | (1 << (TrinoSqlParser.GROUPS - 97)) | (1 << (TrinoSqlParser.HOUR - 97)) | (1 << (TrinoSqlParser.IF - 97)) | (1 << (TrinoSqlParser.IGNORE - 97)) | (1 << (TrinoSqlParser.INCLUDING - 97)) | (1 << (TrinoSqlParser.INITIAL - 97)) | (1 << (TrinoSqlParser.INPUT - 97)) | (1 << (TrinoSqlParser.INTERVAL - 97)) | (1 << (TrinoSqlParser.INVOKER - 97)) | (1 << (TrinoSqlParser.IO - 97)) | (1 << (TrinoSqlParser.ISOLATION - 97)) | (1 << (TrinoSqlParser.JSON - 97)) | (1 << (TrinoSqlParser.LAST - 97)) | (1 << (TrinoSqlParser.LATERAL - 97)) | (1 << (TrinoSqlParser.LEVEL - 97)) | (1 << (TrinoSqlParser.LIMIT - 97)) | (1 << (TrinoSqlParser.LOCAL - 97)) | (1 << (TrinoSqlParser.LOCALTIME - 97)) | (1 << (TrinoSqlParser.LOCALTIMESTAMP - 97)) | (1 << (TrinoSqlParser.LOGICAL - 97)) | (1 << (TrinoSqlParser.MAP - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (TrinoSqlParser.MATCH - 129)) | (1 << (TrinoSqlParser.MATCHED - 129)) | (1 << (TrinoSqlParser.MATCHES - 129)) | (1 << (TrinoSqlParser.MATCH_RECOGNIZE - 129)) | (1 << (TrinoSqlParser.MATERIALIZED - 129)) | (1 << (TrinoSqlParser.MEASURES - 129)) | (1 << (TrinoSqlParser.MERGE - 129)) | (1 << (TrinoSqlParser.MINUTE - 129)) | (1 << (TrinoSqlParser.MONTH - 129)) | (1 << (TrinoSqlParser.NEXT - 129)) | (1 << (TrinoSqlParser.NFC - 129)) | (1 << (TrinoSqlParser.NFD - 129)) | (1 << (TrinoSqlParser.NFKC - 129)) | (1 << (TrinoSqlParser.NFKD - 129)) | (1 << (TrinoSqlParser.NO - 129)) | (1 << (TrinoSqlParser.NONE - 129)) | (1 << (TrinoSqlParser.NORMALIZE - 129)) | (1 << (TrinoSqlParser.NOT - 129)) | (1 << (TrinoSqlParser.NULL - 129)) | (1 << (TrinoSqlParser.NULLIF - 129)) | (1 << (TrinoSqlParser.NULLS - 129)) | (1 << (TrinoSqlParser.OFFSET - 129)) | (1 << (TrinoSqlParser.OMIT - 129)) | (1 << (TrinoSqlParser.ONE - 129)) | (1 << (TrinoSqlParser.ONLY - 129)) | (1 << (TrinoSqlParser.OPTION - 129)) | (1 << (TrinoSqlParser.ORDINALITY - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (TrinoSqlParser.OUTPUT - 161)) | (1 << (TrinoSqlParser.OVER - 161)) | (1 << (TrinoSqlParser.PARTITION - 161)) | (1 << (TrinoSqlParser.PARTITIONS - 161)) | (1 << (TrinoSqlParser.PAST - 161)) | (1 << (TrinoSqlParser.PATH - 161)) | (1 << (TrinoSqlParser.PATTERN - 161)) | (1 << (TrinoSqlParser.PER - 161)) | (1 << (TrinoSqlParser.PERMUTE - 161)) | (1 << (TrinoSqlParser.POSITION - 161)) | (1 << (TrinoSqlParser.PRECEDING - 161)) | (1 << (TrinoSqlParser.PRECISION - 161)) | (1 << (TrinoSqlParser.PRIVILEGES - 161)) | (1 << (TrinoSqlParser.PROPERTIES - 161)) | (1 << (TrinoSqlParser.RANGE - 161)) | (1 << (TrinoSqlParser.READ - 161)) | (1 << (TrinoSqlParser.REFRESH - 161)) | (1 << (TrinoSqlParser.RENAME - 161)) | (1 << (TrinoSqlParser.REPEATABLE - 161)) | (1 << (TrinoSqlParser.REPLACE - 161)) | (1 << (TrinoSqlParser.RESET - 161)) | (1 << (TrinoSqlParser.RESPECT - 161)) | (1 << (TrinoSqlParser.RESTRICT - 161)) | (1 << (TrinoSqlParser.REVOKE - 161)) | (1 << (TrinoSqlParser.ROLE - 161)) | (1 << (TrinoSqlParser.ROLES - 161)) | (1 << (TrinoSqlParser.ROLLBACK - 161)) | (1 << (TrinoSqlParser.ROW - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (TrinoSqlParser.ROWS - 193)) | (1 << (TrinoSqlParser.RUNNING - 193)) | (1 << (TrinoSqlParser.SCHEMA - 193)) | (1 << (TrinoSqlParser.SCHEMAS - 193)) | (1 << (TrinoSqlParser.SECOND - 193)) | (1 << (TrinoSqlParser.SECURITY - 193)) | (1 << (TrinoSqlParser.SEEK - 193)) | (1 << (TrinoSqlParser.SERIALIZABLE - 193)) | (1 << (TrinoSqlParser.SESSION - 193)) | (1 << (TrinoSqlParser.SET - 193)) | (1 << (TrinoSqlParser.SETS - 193)) | (1 << (TrinoSqlParser.SHOW - 193)) | (1 << (TrinoSqlParser.SOME - 193)) | (1 << (TrinoSqlParser.START - 193)) | (1 << (TrinoSqlParser.STATS - 193)) | (1 << (TrinoSqlParser.SUBSET - 193)) | (1 << (TrinoSqlParser.SUBSTRING - 193)) | (1 << (TrinoSqlParser.SYSTEM - 193)) | (1 << (TrinoSqlParser.TABLES - 193)) | (1 << (TrinoSqlParser.TABLESAMPLE - 193)) | (1 << (TrinoSqlParser.TEXT - 193)) | (1 << (TrinoSqlParser.TIES - 193)) | (1 << (TrinoSqlParser.TIME - 193)) | (1 << (TrinoSqlParser.TIMESTAMP - 193)) | (1 << (TrinoSqlParser.TO - 193)) | (1 << (TrinoSqlParser.TRANSACTION - 193)) | (1 << (TrinoSqlParser.TRUNCATE - 193)) | (1 << (TrinoSqlParser.TRUE - 193)) | (1 << (TrinoSqlParser.TRY_CAST - 193)))) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (TrinoSqlParser.TYPE - 225)) | (1 << (TrinoSqlParser.UNBOUNDED - 225)) | (1 << (TrinoSqlParser.UNCOMMITTED - 225)) | (1 << (TrinoSqlParser.UNMATCHED - 225)) | (1 << (TrinoSqlParser.UPDATE - 225)) | (1 << (TrinoSqlParser.USE - 225)) | (1 << (TrinoSqlParser.USER - 225)) | (1 << (TrinoSqlParser.VALIDATE - 225)) | (1 << (TrinoSqlParser.VERBOSE - 225)) | (1 << (TrinoSqlParser.VIEW - 225)) | (1 << (TrinoSqlParser.WINDOW - 225)) | (1 << (TrinoSqlParser.WITHOUT - 225)) | (1 << (TrinoSqlParser.WORK - 225)) | (1 << (TrinoSqlParser.WRITE - 225)) | (1 << (TrinoSqlParser.YEAR - 225)) | (1 << (TrinoSqlParser.ZONE - 225)) | (1 << (TrinoSqlParser.PLUS - 225)) | (1 << (TrinoSqlParser.MINUS - 225)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (TrinoSqlParser.QUESTION_MARK - 261)) | (1 << (TrinoSqlParser.STRING - 261)) | (1 << (TrinoSqlParser.UNICODE_STRING - 261)) | (1 << (TrinoSqlParser.BINARY_LITERAL - 261)) | (1 << (TrinoSqlParser.INTEGER_VALUE - 261)) | (1 << (TrinoSqlParser.DECIMAL_VALUE - 261)) | (1 << (TrinoSqlParser.DOUBLE_VALUE - 261)) | (1 << (TrinoSqlParser.IDENTIFIER - 261)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 261)))) !== 0)) {
						{
						this.state = 445;
						this.callArgument();
						this.state = 450;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === TrinoSqlParser.T__3) {
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
				if (_la === TrinoSqlParser.WHERE) {
					{
					this.state = 458;
					this.match(TrinoSqlParser.WHERE);
					this.state = 459;
					(_localctx as TableExecuteContext)._where = this.booleanExpression(0);
					}
				}

				}
				break;

			case 23:
				_localctx = new AnalyzeContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 462;
				this.match(TrinoSqlParser.ANALYZE);
				this.state = 463;
				this.qualifiedName();
				this.state = 466;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
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
				_localctx = new CreateMaterializedViewContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 468;
				this.match(TrinoSqlParser.CREATE);
				this.state = 471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.OR) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
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
				if (_la === TrinoSqlParser.COMMENT) {
					{
					this.state = 481;
					this.match(TrinoSqlParser.COMMENT);
					this.state = 482;
					this.string();
					}
				}

				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.WITH) {
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
				_localctx = new CreateViewContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 492;
				this.match(TrinoSqlParser.CREATE);
				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.OR) {
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
				if (_la === TrinoSqlParser.COMMENT) {
					{
					this.state = 499;
					this.match(TrinoSqlParser.COMMENT);
					this.state = 500;
					this.string();
					}
				}

				this.state = 505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.SECURITY) {
					{
					this.state = 503;
					this.match(TrinoSqlParser.SECURITY);
					this.state = 504;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.DEFINER || _la === TrinoSqlParser.INVOKER)) {
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

				this.state = 507;
				this.match(TrinoSqlParser.AS);
				this.state = 508;
				this.query();
				}
				break;

			case 26:
				_localctx = new RefreshMaterializedViewContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
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
				_localctx = new DropMaterializedViewContext(_localctx);
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 514;
				this.match(TrinoSqlParser.DROP);
				this.state = 515;
				this.match(TrinoSqlParser.MATERIALIZED);
				this.state = 516;
				this.match(TrinoSqlParser.VIEW);
				this.state = 519;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
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
				_localctx = new RenameMaterializedViewContext(_localctx);
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 522;
				this.match(TrinoSqlParser.ALTER);
				this.state = 523;
				this.match(TrinoSqlParser.MATERIALIZED);
				this.state = 524;
				this.match(TrinoSqlParser.VIEW);
				this.state = 527;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
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
				(_localctx as RenameMaterializedViewContext)._from = this.qualifiedName();
				this.state = 530;
				this.match(TrinoSqlParser.RENAME);
				this.state = 531;
				this.match(TrinoSqlParser.TO);
				this.state = 532;
				(_localctx as RenameMaterializedViewContext)._to = this.qualifiedName();
				}
				break;

			case 29:
				_localctx = new SetMaterializedViewPropertiesContext(_localctx);
				this.enterOuterAlt(_localctx, 29);
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
				_localctx = new DropViewContext(_localctx);
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 542;
				this.match(TrinoSqlParser.DROP);
				this.state = 543;
				this.match(TrinoSqlParser.VIEW);
				this.state = 546;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
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
				_localctx = new RenameViewContext(_localctx);
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 549;
				this.match(TrinoSqlParser.ALTER);
				this.state = 550;
				this.match(TrinoSqlParser.VIEW);
				this.state = 551;
				(_localctx as RenameViewContext)._from = this.qualifiedName();
				this.state = 552;
				this.match(TrinoSqlParser.RENAME);
				this.state = 553;
				this.match(TrinoSqlParser.TO);
				this.state = 554;
				(_localctx as RenameViewContext)._to = this.qualifiedName();
				}
				break;

			case 32:
				_localctx = new SetViewAuthorizationContext(_localctx);
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 556;
				this.match(TrinoSqlParser.ALTER);
				this.state = 557;
				this.match(TrinoSqlParser.VIEW);
				this.state = 558;
				(_localctx as SetViewAuthorizationContext)._from = this.qualifiedName();
				this.state = 559;
				this.match(TrinoSqlParser.SET);
				this.state = 560;
				this.match(TrinoSqlParser.AUTHORIZATION);
				this.state = 561;
				this.principal();
				}
				break;

			case 33:
				_localctx = new CallContext(_localctx);
				this.enterOuterAlt(_localctx, 33);
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
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TrinoSqlParser.T__1) | (1 << TrinoSqlParser.ADD) | (1 << TrinoSqlParser.ADMIN) | (1 << TrinoSqlParser.AFTER) | (1 << TrinoSqlParser.ALL) | (1 << TrinoSqlParser.ANALYZE) | (1 << TrinoSqlParser.ANY) | (1 << TrinoSqlParser.ARRAY) | (1 << TrinoSqlParser.ASC) | (1 << TrinoSqlParser.AT) | (1 << TrinoSqlParser.AUTHORIZATION) | (1 << TrinoSqlParser.BERNOULLI))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TrinoSqlParser.CALL - 33)) | (1 << (TrinoSqlParser.CASCADE - 33)) | (1 << (TrinoSqlParser.CASE - 33)) | (1 << (TrinoSqlParser.CAST - 33)) | (1 << (TrinoSqlParser.CATALOGS - 33)) | (1 << (TrinoSqlParser.COLUMN - 33)) | (1 << (TrinoSqlParser.COLUMNS - 33)) | (1 << (TrinoSqlParser.COMMENT - 33)) | (1 << (TrinoSqlParser.COMMIT - 33)) | (1 << (TrinoSqlParser.COMMITTED - 33)) | (1 << (TrinoSqlParser.CURRENT - 33)) | (1 << (TrinoSqlParser.CURRENT_CATALOG - 33)) | (1 << (TrinoSqlParser.CURRENT_DATE - 33)) | (1 << (TrinoSqlParser.CURRENT_PATH - 33)) | (1 << (TrinoSqlParser.CURRENT_SCHEMA - 33)) | (1 << (TrinoSqlParser.CURRENT_TIME - 33)) | (1 << (TrinoSqlParser.CURRENT_TIMESTAMP - 33)) | (1 << (TrinoSqlParser.CURRENT_USER - 33)) | (1 << (TrinoSqlParser.DATA - 33)) | (1 << (TrinoSqlParser.DATE - 33)) | (1 << (TrinoSqlParser.DAY - 33)) | (1 << (TrinoSqlParser.DEFAULT - 33)) | (1 << (TrinoSqlParser.DEFINER - 33)) | (1 << (TrinoSqlParser.DESC - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (TrinoSqlParser.DEFINE - 65)) | (1 << (TrinoSqlParser.DISTRIBUTED - 65)) | (1 << (TrinoSqlParser.DOUBLE - 65)) | (1 << (TrinoSqlParser.EMPTY - 65)) | (1 << (TrinoSqlParser.EXCLUDING - 65)) | (1 << (TrinoSqlParser.EXISTS - 65)) | (1 << (TrinoSqlParser.EXPLAIN - 65)) | (1 << (TrinoSqlParser.EXTRACT - 65)) | (1 << (TrinoSqlParser.FALSE - 65)) | (1 << (TrinoSqlParser.FETCH - 65)) | (1 << (TrinoSqlParser.FILTER - 65)) | (1 << (TrinoSqlParser.FINAL - 65)) | (1 << (TrinoSqlParser.FIRST - 65)) | (1 << (TrinoSqlParser.FOLLOWING - 65)) | (1 << (TrinoSqlParser.FORMAT - 65)) | (1 << (TrinoSqlParser.FUNCTIONS - 65)) | (1 << (TrinoSqlParser.GRANT - 65)) | (1 << (TrinoSqlParser.GRANTED - 65)) | (1 << (TrinoSqlParser.GRANTS - 65)) | (1 << (TrinoSqlParser.DENY - 65)) | (1 << (TrinoSqlParser.GRAPHVIZ - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (TrinoSqlParser.GROUPING - 97)) | (1 << (TrinoSqlParser.GROUPS - 97)) | (1 << (TrinoSqlParser.HOUR - 97)) | (1 << (TrinoSqlParser.IF - 97)) | (1 << (TrinoSqlParser.IGNORE - 97)) | (1 << (TrinoSqlParser.INCLUDING - 97)) | (1 << (TrinoSqlParser.INITIAL - 97)) | (1 << (TrinoSqlParser.INPUT - 97)) | (1 << (TrinoSqlParser.INTERVAL - 97)) | (1 << (TrinoSqlParser.INVOKER - 97)) | (1 << (TrinoSqlParser.IO - 97)) | (1 << (TrinoSqlParser.ISOLATION - 97)) | (1 << (TrinoSqlParser.JSON - 97)) | (1 << (TrinoSqlParser.LAST - 97)) | (1 << (TrinoSqlParser.LATERAL - 97)) | (1 << (TrinoSqlParser.LEVEL - 97)) | (1 << (TrinoSqlParser.LIMIT - 97)) | (1 << (TrinoSqlParser.LOCAL - 97)) | (1 << (TrinoSqlParser.LOCALTIME - 97)) | (1 << (TrinoSqlParser.LOCALTIMESTAMP - 97)) | (1 << (TrinoSqlParser.LOGICAL - 97)) | (1 << (TrinoSqlParser.MAP - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (TrinoSqlParser.MATCH - 129)) | (1 << (TrinoSqlParser.MATCHED - 129)) | (1 << (TrinoSqlParser.MATCHES - 129)) | (1 << (TrinoSqlParser.MATCH_RECOGNIZE - 129)) | (1 << (TrinoSqlParser.MATERIALIZED - 129)) | (1 << (TrinoSqlParser.MEASURES - 129)) | (1 << (TrinoSqlParser.MERGE - 129)) | (1 << (TrinoSqlParser.MINUTE - 129)) | (1 << (TrinoSqlParser.MONTH - 129)) | (1 << (TrinoSqlParser.NEXT - 129)) | (1 << (TrinoSqlParser.NFC - 129)) | (1 << (TrinoSqlParser.NFD - 129)) | (1 << (TrinoSqlParser.NFKC - 129)) | (1 << (TrinoSqlParser.NFKD - 129)) | (1 << (TrinoSqlParser.NO - 129)) | (1 << (TrinoSqlParser.NONE - 129)) | (1 << (TrinoSqlParser.NORMALIZE - 129)) | (1 << (TrinoSqlParser.NOT - 129)) | (1 << (TrinoSqlParser.NULL - 129)) | (1 << (TrinoSqlParser.NULLIF - 129)) | (1 << (TrinoSqlParser.NULLS - 129)) | (1 << (TrinoSqlParser.OFFSET - 129)) | (1 << (TrinoSqlParser.OMIT - 129)) | (1 << (TrinoSqlParser.ONE - 129)) | (1 << (TrinoSqlParser.ONLY - 129)) | (1 << (TrinoSqlParser.OPTION - 129)) | (1 << (TrinoSqlParser.ORDINALITY - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (TrinoSqlParser.OUTPUT - 161)) | (1 << (TrinoSqlParser.OVER - 161)) | (1 << (TrinoSqlParser.PARTITION - 161)) | (1 << (TrinoSqlParser.PARTITIONS - 161)) | (1 << (TrinoSqlParser.PAST - 161)) | (1 << (TrinoSqlParser.PATH - 161)) | (1 << (TrinoSqlParser.PATTERN - 161)) | (1 << (TrinoSqlParser.PER - 161)) | (1 << (TrinoSqlParser.PERMUTE - 161)) | (1 << (TrinoSqlParser.POSITION - 161)) | (1 << (TrinoSqlParser.PRECEDING - 161)) | (1 << (TrinoSqlParser.PRECISION - 161)) | (1 << (TrinoSqlParser.PRIVILEGES - 161)) | (1 << (TrinoSqlParser.PROPERTIES - 161)) | (1 << (TrinoSqlParser.RANGE - 161)) | (1 << (TrinoSqlParser.READ - 161)) | (1 << (TrinoSqlParser.REFRESH - 161)) | (1 << (TrinoSqlParser.RENAME - 161)) | (1 << (TrinoSqlParser.REPEATABLE - 161)) | (1 << (TrinoSqlParser.REPLACE - 161)) | (1 << (TrinoSqlParser.RESET - 161)) | (1 << (TrinoSqlParser.RESPECT - 161)) | (1 << (TrinoSqlParser.RESTRICT - 161)) | (1 << (TrinoSqlParser.REVOKE - 161)) | (1 << (TrinoSqlParser.ROLE - 161)) | (1 << (TrinoSqlParser.ROLES - 161)) | (1 << (TrinoSqlParser.ROLLBACK - 161)) | (1 << (TrinoSqlParser.ROW - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (TrinoSqlParser.ROWS - 193)) | (1 << (TrinoSqlParser.RUNNING - 193)) | (1 << (TrinoSqlParser.SCHEMA - 193)) | (1 << (TrinoSqlParser.SCHEMAS - 193)) | (1 << (TrinoSqlParser.SECOND - 193)) | (1 << (TrinoSqlParser.SECURITY - 193)) | (1 << (TrinoSqlParser.SEEK - 193)) | (1 << (TrinoSqlParser.SERIALIZABLE - 193)) | (1 << (TrinoSqlParser.SESSION - 193)) | (1 << (TrinoSqlParser.SET - 193)) | (1 << (TrinoSqlParser.SETS - 193)) | (1 << (TrinoSqlParser.SHOW - 193)) | (1 << (TrinoSqlParser.SOME - 193)) | (1 << (TrinoSqlParser.START - 193)) | (1 << (TrinoSqlParser.STATS - 193)) | (1 << (TrinoSqlParser.SUBSET - 193)) | (1 << (TrinoSqlParser.SUBSTRING - 193)) | (1 << (TrinoSqlParser.SYSTEM - 193)) | (1 << (TrinoSqlParser.TABLES - 193)) | (1 << (TrinoSqlParser.TABLESAMPLE - 193)) | (1 << (TrinoSqlParser.TEXT - 193)) | (1 << (TrinoSqlParser.TIES - 193)) | (1 << (TrinoSqlParser.TIME - 193)) | (1 << (TrinoSqlParser.TIMESTAMP - 193)) | (1 << (TrinoSqlParser.TO - 193)) | (1 << (TrinoSqlParser.TRANSACTION - 193)) | (1 << (TrinoSqlParser.TRUNCATE - 193)) | (1 << (TrinoSqlParser.TRUE - 193)) | (1 << (TrinoSqlParser.TRY_CAST - 193)))) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (TrinoSqlParser.TYPE - 225)) | (1 << (TrinoSqlParser.UNBOUNDED - 225)) | (1 << (TrinoSqlParser.UNCOMMITTED - 225)) | (1 << (TrinoSqlParser.UNMATCHED - 225)) | (1 << (TrinoSqlParser.UPDATE - 225)) | (1 << (TrinoSqlParser.USE - 225)) | (1 << (TrinoSqlParser.USER - 225)) | (1 << (TrinoSqlParser.VALIDATE - 225)) | (1 << (TrinoSqlParser.VERBOSE - 225)) | (1 << (TrinoSqlParser.VIEW - 225)) | (1 << (TrinoSqlParser.WINDOW - 225)) | (1 << (TrinoSqlParser.WITHOUT - 225)) | (1 << (TrinoSqlParser.WORK - 225)) | (1 << (TrinoSqlParser.WRITE - 225)) | (1 << (TrinoSqlParser.YEAR - 225)) | (1 << (TrinoSqlParser.ZONE - 225)) | (1 << (TrinoSqlParser.PLUS - 225)) | (1 << (TrinoSqlParser.MINUS - 225)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (TrinoSqlParser.QUESTION_MARK - 261)) | (1 << (TrinoSqlParser.STRING - 261)) | (1 << (TrinoSqlParser.UNICODE_STRING - 261)) | (1 << (TrinoSqlParser.BINARY_LITERAL - 261)) | (1 << (TrinoSqlParser.INTEGER_VALUE - 261)) | (1 << (TrinoSqlParser.DECIMAL_VALUE - 261)) | (1 << (TrinoSqlParser.DOUBLE_VALUE - 261)) | (1 << (TrinoSqlParser.IDENTIFIER - 261)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 261)))) !== 0)) {
					{
					this.state = 566;
					this.callArgument();
					this.state = 571;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
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
				_localctx = new CreateRoleContext(_localctx);
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 578;
				this.match(TrinoSqlParser.CREATE);
				this.state = 579;
				this.match(TrinoSqlParser.ROLE);
				this.state = 580;
				(_localctx as CreateRoleContext)._name = this.identifier();
				this.state = 584;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
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
				if (_la === TrinoSqlParser.IN) {
					{
					this.state = 586;
					this.match(TrinoSqlParser.IN);
					this.state = 587;
					(_localctx as CreateRoleContext)._catalog = this.identifier();
					}
				}

				}
				break;

			case 35:
				_localctx = new DropRoleContext(_localctx);
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 590;
				this.match(TrinoSqlParser.DROP);
				this.state = 591;
				this.match(TrinoSqlParser.ROLE);
				this.state = 592;
				(_localctx as DropRoleContext)._name = this.identifier();
				}
				break;

			case 36:
				_localctx = new GrantRolesContext(_localctx);
				this.enterOuterAlt(_localctx, 36);
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
				while (_la === TrinoSqlParser.T__3) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
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
				if (_la === TrinoSqlParser.IN) {
					{
					this.state = 614;
					this.match(TrinoSqlParser.IN);
					this.state = 615;
					(_localctx as GrantRolesContext)._catalog = this.identifier();
					}
				}

				}
				break;

			case 37:
				_localctx = new RevokeRolesContext(_localctx);
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 618;
				this.match(TrinoSqlParser.REVOKE);
				this.state = 622;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
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
				while (_la === TrinoSqlParser.T__3) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
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
				if (_la === TrinoSqlParser.IN) {
					{
					this.state = 639;
					this.match(TrinoSqlParser.IN);
					this.state = 640;
					(_localctx as RevokeRolesContext)._catalog = this.identifier();
					}
				}

				}
				break;

			case 38:
				_localctx = new SetRoleContext(_localctx);
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 643;
				this.match(TrinoSqlParser.SET);
				this.state = 644;
				this.match(TrinoSqlParser.ROLE);
				this.state = 648;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
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
					(_localctx as SetRoleContext)._role = this.identifier();
					}
					break;
				}
				this.state = 652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.IN) {
					{
					this.state = 650;
					this.match(TrinoSqlParser.IN);
					this.state = 651;
					(_localctx as SetRoleContext)._catalog = this.identifier();
					}
				}

				}
				break;

			case 39:
				_localctx = new GrantContext(_localctx);
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 654;
				this.match(TrinoSqlParser.GRANT);
				this.state = 665;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TrinoSqlParser.DELETE:
				case TrinoSqlParser.INSERT:
				case TrinoSqlParser.SELECT:
				case TrinoSqlParser.UPDATE:
					{
					this.state = 655;
					this.privilege();
					this.state = 660;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
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
				case TrinoSqlParser.ALL:
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
				switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
				case 1:
					{
					this.state = 668;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.SCHEMA || _la === TrinoSqlParser.TABLE)) {
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
				}
				this.state = 671;
				this.qualifiedName();
				this.state = 672;
				this.match(TrinoSqlParser.TO);
				this.state = 673;
				(_localctx as GrantContext)._grantee = this.principal();
				this.state = 677;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
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
				_localctx = new DenyContext(_localctx);
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 679;
				this.match(TrinoSqlParser.DENY);
				this.state = 690;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TrinoSqlParser.DELETE:
				case TrinoSqlParser.INSERT:
				case TrinoSqlParser.SELECT:
				case TrinoSqlParser.UPDATE:
					{
					this.state = 680;
					this.privilege();
					this.state = 685;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
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
				case TrinoSqlParser.ALL:
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
				switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
				case 1:
					{
					this.state = 693;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.SCHEMA || _la === TrinoSqlParser.TABLE)) {
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
				}
				this.state = 696;
				this.qualifiedName();
				this.state = 697;
				this.match(TrinoSqlParser.TO);
				this.state = 698;
				(_localctx as DenyContext)._grantee = this.principal();
				}
				break;

			case 41:
				_localctx = new RevokeContext(_localctx);
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 700;
				this.match(TrinoSqlParser.REVOKE);
				this.state = 704;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.GRANT) {
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
				case TrinoSqlParser.DELETE:
				case TrinoSqlParser.INSERT:
				case TrinoSqlParser.SELECT:
				case TrinoSqlParser.UPDATE:
					{
					this.state = 706;
					this.privilege();
					this.state = 711;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
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
				case TrinoSqlParser.ALL:
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
				switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 719;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.SCHEMA || _la === TrinoSqlParser.TABLE)) {
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
				}
				this.state = 722;
				this.qualifiedName();
				this.state = 723;
				this.match(TrinoSqlParser.FROM);
				this.state = 724;
				(_localctx as RevokeContext)._grantee = this.principal();
				}
				break;

			case 42:
				_localctx = new ShowGrantsContext(_localctx);
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 726;
				this.match(TrinoSqlParser.SHOW);
				this.state = 727;
				this.match(TrinoSqlParser.GRANTS);
				this.state = 733;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.ON) {
					{
					this.state = 728;
					this.match(TrinoSqlParser.ON);
					this.state = 730;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.TABLE) {
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
				_localctx = new ExplainContext(_localctx);
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 735;
				this.match(TrinoSqlParser.EXPLAIN);
				this.state = 737;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
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
				if (_la === TrinoSqlParser.VERBOSE) {
					{
					this.state = 739;
					this.match(TrinoSqlParser.VERBOSE);
					}
				}

				this.state = 753;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
				case 1:
					{
					this.state = 742;
					this.match(TrinoSqlParser.T__1);
					this.state = 743;
					this.explainOption();
					this.state = 748;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
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
				_localctx = new ShowCreateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 44);
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
				_localctx = new ShowCreateSchemaContext(_localctx);
				this.enterOuterAlt(_localctx, 45);
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
				_localctx = new ShowCreateViewContext(_localctx);
				this.enterOuterAlt(_localctx, 46);
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
				_localctx = new ShowCreateMaterializedViewContext(_localctx);
				this.enterOuterAlt(_localctx, 47);
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
				_localctx = new ShowTablesContext(_localctx);
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 773;
				this.match(TrinoSqlParser.SHOW);
				this.state = 774;
				this.match(TrinoSqlParser.TABLES);
				this.state = 777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.FROM || _la === TrinoSqlParser.IN) {
					{
					this.state = 775;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.FROM || _la === TrinoSqlParser.IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

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
				if (_la === TrinoSqlParser.LIKE) {
					{
					this.state = 779;
					this.match(TrinoSqlParser.LIKE);
					this.state = 780;
					(_localctx as ShowTablesContext)._pattern = this.string();
					this.state = 783;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.ESCAPE) {
						{
						this.state = 781;
						this.match(TrinoSqlParser.ESCAPE);
						this.state = 782;
						(_localctx as ShowTablesContext)._escape = this.string();
						}
					}

					}
				}

				}
				break;

			case 49:
				_localctx = new ShowSchemasContext(_localctx);
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 787;
				this.match(TrinoSqlParser.SHOW);
				this.state = 788;
				this.match(TrinoSqlParser.SCHEMAS);
				this.state = 791;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.FROM || _la === TrinoSqlParser.IN) {
					{
					this.state = 789;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.FROM || _la === TrinoSqlParser.IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

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
				if (_la === TrinoSqlParser.LIKE) {
					{
					this.state = 793;
					this.match(TrinoSqlParser.LIKE);
					this.state = 794;
					(_localctx as ShowSchemasContext)._pattern = this.string();
					this.state = 797;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.ESCAPE) {
						{
						this.state = 795;
						this.match(TrinoSqlParser.ESCAPE);
						this.state = 796;
						(_localctx as ShowSchemasContext)._escape = this.string();
						}
					}

					}
				}

				}
				break;

			case 50:
				_localctx = new ShowCatalogsContext(_localctx);
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 801;
				this.match(TrinoSqlParser.SHOW);
				this.state = 802;
				this.match(TrinoSqlParser.CATALOGS);
				this.state = 809;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.LIKE) {
					{
					this.state = 803;
					this.match(TrinoSqlParser.LIKE);
					this.state = 804;
					(_localctx as ShowCatalogsContext)._pattern = this.string();
					this.state = 807;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.ESCAPE) {
						{
						this.state = 805;
						this.match(TrinoSqlParser.ESCAPE);
						this.state = 806;
						(_localctx as ShowCatalogsContext)._escape = this.string();
						}
					}

					}
				}

				}
				break;

			case 51:
				_localctx = new ShowColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 51);
				{
				this.state = 811;
				this.match(TrinoSqlParser.SHOW);
				this.state = 812;
				this.match(TrinoSqlParser.COLUMNS);
				this.state = 813;
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.FROM || _la === TrinoSqlParser.IN)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 815;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
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
				if (_la === TrinoSqlParser.LIKE) {
					{
					this.state = 817;
					this.match(TrinoSqlParser.LIKE);
					this.state = 818;
					(_localctx as ShowColumnsContext)._pattern = this.string();
					this.state = 821;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.ESCAPE) {
						{
						this.state = 819;
						this.match(TrinoSqlParser.ESCAPE);
						this.state = 820;
						(_localctx as ShowColumnsContext)._escape = this.string();
						}
					}

					}
				}

				}
				break;

			case 52:
				_localctx = new ShowStatsContext(_localctx);
				this.enterOuterAlt(_localctx, 52);
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
				_localctx = new ShowStatsForQueryContext(_localctx);
				this.enterOuterAlt(_localctx, 53);
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
				_localctx = new ShowRolesContext(_localctx);
				this.enterOuterAlt(_localctx, 54);
				{
				this.state = 836;
				this.match(TrinoSqlParser.SHOW);
				this.state = 838;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.CURRENT) {
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
				if (_la === TrinoSqlParser.FROM || _la === TrinoSqlParser.IN) {
					{
					this.state = 841;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.FROM || _la === TrinoSqlParser.IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

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
				_localctx = new ShowRoleGrantsContext(_localctx);
				this.enterOuterAlt(_localctx, 55);
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
				if (_la === TrinoSqlParser.FROM || _la === TrinoSqlParser.IN) {
					{
					this.state = 848;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.FROM || _la === TrinoSqlParser.IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

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
				_localctx = new ShowColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 56);
				{
				this.state = 852;
				this.match(TrinoSqlParser.DESCRIBE);
				this.state = 853;
				this.qualifiedName();
				}
				break;

			case 57:
				_localctx = new ShowColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 57);
				{
				this.state = 854;
				this.match(TrinoSqlParser.DESC);
				this.state = 855;
				this.qualifiedName();
				}
				break;

			case 58:
				_localctx = new ShowFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 58);
				{
				this.state = 856;
				this.match(TrinoSqlParser.SHOW);
				this.state = 857;
				this.match(TrinoSqlParser.FUNCTIONS);
				this.state = 864;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.LIKE) {
					{
					this.state = 858;
					this.match(TrinoSqlParser.LIKE);
					this.state = 859;
					(_localctx as ShowFunctionsContext)._pattern = this.string();
					this.state = 862;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.ESCAPE) {
						{
						this.state = 860;
						this.match(TrinoSqlParser.ESCAPE);
						this.state = 861;
						(_localctx as ShowFunctionsContext)._escape = this.string();
						}
					}

					}
				}

				}
				break;

			case 59:
				_localctx = new ShowSessionContext(_localctx);
				this.enterOuterAlt(_localctx, 59);
				{
				this.state = 866;
				this.match(TrinoSqlParser.SHOW);
				this.state = 867;
				this.match(TrinoSqlParser.SESSION);
				this.state = 874;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.LIKE) {
					{
					this.state = 868;
					this.match(TrinoSqlParser.LIKE);
					this.state = 869;
					(_localctx as ShowSessionContext)._pattern = this.string();
					this.state = 872;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.ESCAPE) {
						{
						this.state = 870;
						this.match(TrinoSqlParser.ESCAPE);
						this.state = 871;
						(_localctx as ShowSessionContext)._escape = this.string();
						}
					}

					}
				}

				}
				break;

			case 60:
				_localctx = new SetSessionContext(_localctx);
				this.enterOuterAlt(_localctx, 60);
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
				_localctx = new ResetSessionContext(_localctx);
				this.enterOuterAlt(_localctx, 61);
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
				_localctx = new StartTransactionContext(_localctx);
				this.enterOuterAlt(_localctx, 62);
				{
				this.state = 885;
				this.match(TrinoSqlParser.START);
				this.state = 886;
				this.match(TrinoSqlParser.TRANSACTION);
				this.state = 895;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
				case 1:
					{
					this.state = 887;
					this.transactionMode();
					this.state = 892;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
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
				_localctx = new CommitContext(_localctx);
				this.enterOuterAlt(_localctx, 63);
				{
				this.state = 897;
				this.match(TrinoSqlParser.COMMIT);
				this.state = 899;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
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
				_localctx = new RollbackContext(_localctx);
				this.enterOuterAlt(_localctx, 64);
				{
				this.state = 901;
				this.match(TrinoSqlParser.ROLLBACK);
				this.state = 903;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
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
				_localctx = new PrepareContext(_localctx);
				this.enterOuterAlt(_localctx, 65);
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
				_localctx = new DeallocateContext(_localctx);
				this.enterOuterAlt(_localctx, 66);
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
				_localctx = new ExecuteContext(_localctx);
				this.enterOuterAlt(_localctx, 67);
				{
				this.state = 913;
				this.match(TrinoSqlParser.EXECUTE);
				this.state = 914;
				this.identifier();
				this.state = 924;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.USING) {
					{
					this.state = 915;
					this.match(TrinoSqlParser.USING);
					this.state = 916;
					this.expression();
					this.state = 921;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
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
				_localctx = new DescribeInputContext(_localctx);
				this.enterOuterAlt(_localctx, 68);
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
				_localctx = new DescribeOutputContext(_localctx);
				this.enterOuterAlt(_localctx, 69);
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
				_localctx = new SetPathContext(_localctx);
				this.enterOuterAlt(_localctx, 70);
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
				_localctx = new SetTimeZoneContext(_localctx);
				this.enterOuterAlt(_localctx, 71);
				{
				this.state = 935;
				this.match(TrinoSqlParser.SET);
				this.state = 936;
				this.match(TrinoSqlParser.TIME);
				this.state = 937;
				this.match(TrinoSqlParser.ZONE);
				this.state = 940;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
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
				_localctx = new UpdateContext(_localctx);
				this.enterOuterAlt(_localctx, 72);
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
				while (_la === TrinoSqlParser.T__3) {
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
				if (_la === TrinoSqlParser.WHERE) {
					{
					this.state = 953;
					this.match(TrinoSqlParser.WHERE);
					this.state = 954;
					(_localctx as UpdateContext)._where = this.booleanExpression(0);
					}
				}

				}
				break;

			case 73:
				_localctx = new MergeContext(_localctx);
				this.enterOuterAlt(_localctx, 73);
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
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (TrinoSqlParser.ADD - 17)) | (1 << (TrinoSqlParser.ADMIN - 17)) | (1 << (TrinoSqlParser.AFTER - 17)) | (1 << (TrinoSqlParser.ALL - 17)) | (1 << (TrinoSqlParser.ANALYZE - 17)) | (1 << (TrinoSqlParser.ANY - 17)) | (1 << (TrinoSqlParser.ARRAY - 17)) | (1 << (TrinoSqlParser.AS - 17)) | (1 << (TrinoSqlParser.ASC - 17)) | (1 << (TrinoSqlParser.AT - 17)) | (1 << (TrinoSqlParser.AUTHORIZATION - 17)) | (1 << (TrinoSqlParser.BERNOULLI - 17)) | (1 << (TrinoSqlParser.CALL - 17)) | (1 << (TrinoSqlParser.CASCADE - 17)) | (1 << (TrinoSqlParser.CATALOGS - 17)) | (1 << (TrinoSqlParser.COLUMN - 17)) | (1 << (TrinoSqlParser.COLUMNS - 17)) | (1 << (TrinoSqlParser.COMMENT - 17)) | (1 << (TrinoSqlParser.COMMIT - 17)) | (1 << (TrinoSqlParser.COMMITTED - 17)) | (1 << (TrinoSqlParser.CURRENT - 17)))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (TrinoSqlParser.DATA - 56)) | (1 << (TrinoSqlParser.DATE - 56)) | (1 << (TrinoSqlParser.DAY - 56)) | (1 << (TrinoSqlParser.DEFAULT - 56)) | (1 << (TrinoSqlParser.DEFINER - 56)) | (1 << (TrinoSqlParser.DESC - 56)) | (1 << (TrinoSqlParser.DEFINE - 56)) | (1 << (TrinoSqlParser.DISTRIBUTED - 56)) | (1 << (TrinoSqlParser.DOUBLE - 56)) | (1 << (TrinoSqlParser.EMPTY - 56)) | (1 << (TrinoSqlParser.EXCLUDING - 56)) | (1 << (TrinoSqlParser.EXPLAIN - 56)) | (1 << (TrinoSqlParser.FETCH - 56)) | (1 << (TrinoSqlParser.FILTER - 56)) | (1 << (TrinoSqlParser.FINAL - 56)) | (1 << (TrinoSqlParser.FIRST - 56)) | (1 << (TrinoSqlParser.FOLLOWING - 56)) | (1 << (TrinoSqlParser.FORMAT - 56)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (TrinoSqlParser.FUNCTIONS - 90)) | (1 << (TrinoSqlParser.GRANT - 90)) | (1 << (TrinoSqlParser.GRANTED - 90)) | (1 << (TrinoSqlParser.GRANTS - 90)) | (1 << (TrinoSqlParser.DENY - 90)) | (1 << (TrinoSqlParser.GRAPHVIZ - 90)) | (1 << (TrinoSqlParser.GROUPS - 90)) | (1 << (TrinoSqlParser.HOUR - 90)) | (1 << (TrinoSqlParser.IF - 90)) | (1 << (TrinoSqlParser.IGNORE - 90)) | (1 << (TrinoSqlParser.INCLUDING - 90)) | (1 << (TrinoSqlParser.INITIAL - 90)) | (1 << (TrinoSqlParser.INPUT - 90)) | (1 << (TrinoSqlParser.INTERVAL - 90)) | (1 << (TrinoSqlParser.INVOKER - 90)) | (1 << (TrinoSqlParser.IO - 90)) | (1 << (TrinoSqlParser.ISOLATION - 90)) | (1 << (TrinoSqlParser.JSON - 90)) | (1 << (TrinoSqlParser.LAST - 90)) | (1 << (TrinoSqlParser.LATERAL - 90)) | (1 << (TrinoSqlParser.LEVEL - 90)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TrinoSqlParser.LIMIT - 123)) | (1 << (TrinoSqlParser.LOCAL - 123)) | (1 << (TrinoSqlParser.LOGICAL - 123)) | (1 << (TrinoSqlParser.MAP - 123)) | (1 << (TrinoSqlParser.MATCH - 123)) | (1 << (TrinoSqlParser.MATCHED - 123)) | (1 << (TrinoSqlParser.MATCHES - 123)) | (1 << (TrinoSqlParser.MATCH_RECOGNIZE - 123)) | (1 << (TrinoSqlParser.MATERIALIZED - 123)) | (1 << (TrinoSqlParser.MEASURES - 123)) | (1 << (TrinoSqlParser.MERGE - 123)) | (1 << (TrinoSqlParser.MINUTE - 123)) | (1 << (TrinoSqlParser.MONTH - 123)) | (1 << (TrinoSqlParser.NEXT - 123)) | (1 << (TrinoSqlParser.NFC - 123)) | (1 << (TrinoSqlParser.NFD - 123)) | (1 << (TrinoSqlParser.NFKC - 123)) | (1 << (TrinoSqlParser.NFKD - 123)) | (1 << (TrinoSqlParser.NO - 123)) | (1 << (TrinoSqlParser.NONE - 123)) | (1 << (TrinoSqlParser.NULLIF - 123)) | (1 << (TrinoSqlParser.NULLS - 123)) | (1 << (TrinoSqlParser.OFFSET - 123)) | (1 << (TrinoSqlParser.OMIT - 123)) | (1 << (TrinoSqlParser.ONE - 123)))) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (TrinoSqlParser.ONLY - 155)) | (1 << (TrinoSqlParser.OPTION - 155)) | (1 << (TrinoSqlParser.ORDINALITY - 155)) | (1 << (TrinoSqlParser.OUTPUT - 155)) | (1 << (TrinoSqlParser.OVER - 155)) | (1 << (TrinoSqlParser.PARTITION - 155)) | (1 << (TrinoSqlParser.PARTITIONS - 155)) | (1 << (TrinoSqlParser.PAST - 155)) | (1 << (TrinoSqlParser.PATH - 155)) | (1 << (TrinoSqlParser.PATTERN - 155)) | (1 << (TrinoSqlParser.PER - 155)) | (1 << (TrinoSqlParser.PERMUTE - 155)) | (1 << (TrinoSqlParser.POSITION - 155)) | (1 << (TrinoSqlParser.PRECEDING - 155)) | (1 << (TrinoSqlParser.PRECISION - 155)) | (1 << (TrinoSqlParser.PRIVILEGES - 155)) | (1 << (TrinoSqlParser.PROPERTIES - 155)) | (1 << (TrinoSqlParser.RANGE - 155)) | (1 << (TrinoSqlParser.READ - 155)) | (1 << (TrinoSqlParser.REFRESH - 155)) | (1 << (TrinoSqlParser.RENAME - 155)) | (1 << (TrinoSqlParser.REPEATABLE - 155)) | (1 << (TrinoSqlParser.REPLACE - 155)) | (1 << (TrinoSqlParser.RESET - 155)) | (1 << (TrinoSqlParser.RESPECT - 155)) | (1 << (TrinoSqlParser.RESTRICT - 155)) | (1 << (TrinoSqlParser.REVOKE - 155)))) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & ((1 << (TrinoSqlParser.ROLE - 188)) | (1 << (TrinoSqlParser.ROLES - 188)) | (1 << (TrinoSqlParser.ROLLBACK - 188)) | (1 << (TrinoSqlParser.ROW - 188)) | (1 << (TrinoSqlParser.ROWS - 188)) | (1 << (TrinoSqlParser.RUNNING - 188)) | (1 << (TrinoSqlParser.SCHEMA - 188)) | (1 << (TrinoSqlParser.SCHEMAS - 188)) | (1 << (TrinoSqlParser.SECOND - 188)) | (1 << (TrinoSqlParser.SECURITY - 188)) | (1 << (TrinoSqlParser.SEEK - 188)) | (1 << (TrinoSqlParser.SERIALIZABLE - 188)) | (1 << (TrinoSqlParser.SESSION - 188)) | (1 << (TrinoSqlParser.SET - 188)) | (1 << (TrinoSqlParser.SETS - 188)) | (1 << (TrinoSqlParser.SHOW - 188)) | (1 << (TrinoSqlParser.SOME - 188)) | (1 << (TrinoSqlParser.START - 188)) | (1 << (TrinoSqlParser.STATS - 188)) | (1 << (TrinoSqlParser.SUBSET - 188)) | (1 << (TrinoSqlParser.SUBSTRING - 188)) | (1 << (TrinoSqlParser.SYSTEM - 188)) | (1 << (TrinoSqlParser.TABLES - 188)) | (1 << (TrinoSqlParser.TABLESAMPLE - 188)) | (1 << (TrinoSqlParser.TEXT - 188)) | (1 << (TrinoSqlParser.TIES - 188)) | (1 << (TrinoSqlParser.TIME - 188)) | (1 << (TrinoSqlParser.TIMESTAMP - 188)))) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & ((1 << (TrinoSqlParser.TO - 220)) | (1 << (TrinoSqlParser.TRANSACTION - 220)) | (1 << (TrinoSqlParser.TRUNCATE - 220)) | (1 << (TrinoSqlParser.TRY_CAST - 220)) | (1 << (TrinoSqlParser.TYPE - 220)) | (1 << (TrinoSqlParser.UNBOUNDED - 220)) | (1 << (TrinoSqlParser.UNCOMMITTED - 220)) | (1 << (TrinoSqlParser.UNMATCHED - 220)) | (1 << (TrinoSqlParser.UPDATE - 220)) | (1 << (TrinoSqlParser.USE - 220)) | (1 << (TrinoSqlParser.USER - 220)) | (1 << (TrinoSqlParser.VALIDATE - 220)) | (1 << (TrinoSqlParser.VERBOSE - 220)) | (1 << (TrinoSqlParser.VIEW - 220)) | (1 << (TrinoSqlParser.WINDOW - 220)) | (1 << (TrinoSqlParser.WITHOUT - 220)) | (1 << (TrinoSqlParser.WORK - 220)) | (1 << (TrinoSqlParser.WRITE - 220)) | (1 << (TrinoSqlParser.YEAR - 220)) | (1 << (TrinoSqlParser.ZONE - 220)))) !== 0) || ((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & ((1 << (TrinoSqlParser.IDENTIFIER - 268)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 268)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 268)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 268)))) !== 0)) {
					{
					this.state = 961;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.AS) {
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
				} while (_la === TrinoSqlParser.WHEN);
				}
				break;

			case 74:
				_localctx = new ShowTableCommentContext(_localctx);
				this.enterOuterAlt(_localctx, 74);
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
				_localctx = new ShowColumnCommentContext(_localctx);
				this.enterOuterAlt(_localctx, 75);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 16, TrinoSqlParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 988;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.WITH) {
				{
				this.state = 987;
				this.with();
				}
			}

			this.state = 990;
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
		this.enterRule(_localctx, 18, TrinoSqlParser.RULE_with);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 992;
			this.match(TrinoSqlParser.WITH);
			this.state = 994;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.RECURSIVE) {
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
			while (_la === TrinoSqlParser.T__3) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 20, TrinoSqlParser.RULE_tableElement);
		try {
			this.state = 1006;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.ADD:
			case TrinoSqlParser.ADMIN:
			case TrinoSqlParser.AFTER:
			case TrinoSqlParser.ALL:
			case TrinoSqlParser.ANALYZE:
			case TrinoSqlParser.ANY:
			case TrinoSqlParser.ARRAY:
			case TrinoSqlParser.ASC:
			case TrinoSqlParser.AT:
			case TrinoSqlParser.AUTHORIZATION:
			case TrinoSqlParser.BERNOULLI:
			case TrinoSqlParser.CALL:
			case TrinoSqlParser.CASCADE:
			case TrinoSqlParser.CATALOGS:
			case TrinoSqlParser.COLUMN:
			case TrinoSqlParser.COLUMNS:
			case TrinoSqlParser.COMMENT:
			case TrinoSqlParser.COMMIT:
			case TrinoSqlParser.COMMITTED:
			case TrinoSqlParser.CURRENT:
			case TrinoSqlParser.DATA:
			case TrinoSqlParser.DATE:
			case TrinoSqlParser.DAY:
			case TrinoSqlParser.DEFAULT:
			case TrinoSqlParser.DEFINER:
			case TrinoSqlParser.DESC:
			case TrinoSqlParser.DEFINE:
			case TrinoSqlParser.DISTRIBUTED:
			case TrinoSqlParser.DOUBLE:
			case TrinoSqlParser.EMPTY:
			case TrinoSqlParser.EXCLUDING:
			case TrinoSqlParser.EXPLAIN:
			case TrinoSqlParser.FETCH:
			case TrinoSqlParser.FILTER:
			case TrinoSqlParser.FINAL:
			case TrinoSqlParser.FIRST:
			case TrinoSqlParser.FOLLOWING:
			case TrinoSqlParser.FORMAT:
			case TrinoSqlParser.FUNCTIONS:
			case TrinoSqlParser.GRANT:
			case TrinoSqlParser.GRANTED:
			case TrinoSqlParser.GRANTS:
			case TrinoSqlParser.DENY:
			case TrinoSqlParser.GRAPHVIZ:
			case TrinoSqlParser.GROUPS:
			case TrinoSqlParser.HOUR:
			case TrinoSqlParser.IF:
			case TrinoSqlParser.IGNORE:
			case TrinoSqlParser.INCLUDING:
			case TrinoSqlParser.INITIAL:
			case TrinoSqlParser.INPUT:
			case TrinoSqlParser.INTERVAL:
			case TrinoSqlParser.INVOKER:
			case TrinoSqlParser.IO:
			case TrinoSqlParser.ISOLATION:
			case TrinoSqlParser.JSON:
			case TrinoSqlParser.LAST:
			case TrinoSqlParser.LATERAL:
			case TrinoSqlParser.LEVEL:
			case TrinoSqlParser.LIMIT:
			case TrinoSqlParser.LOCAL:
			case TrinoSqlParser.LOGICAL:
			case TrinoSqlParser.MAP:
			case TrinoSqlParser.MATCH:
			case TrinoSqlParser.MATCHED:
			case TrinoSqlParser.MATCHES:
			case TrinoSqlParser.MATCH_RECOGNIZE:
			case TrinoSqlParser.MATERIALIZED:
			case TrinoSqlParser.MEASURES:
			case TrinoSqlParser.MERGE:
			case TrinoSqlParser.MINUTE:
			case TrinoSqlParser.MONTH:
			case TrinoSqlParser.NEXT:
			case TrinoSqlParser.NFC:
			case TrinoSqlParser.NFD:
			case TrinoSqlParser.NFKC:
			case TrinoSqlParser.NFKD:
			case TrinoSqlParser.NO:
			case TrinoSqlParser.NONE:
			case TrinoSqlParser.NULLIF:
			case TrinoSqlParser.NULLS:
			case TrinoSqlParser.OFFSET:
			case TrinoSqlParser.OMIT:
			case TrinoSqlParser.ONE:
			case TrinoSqlParser.ONLY:
			case TrinoSqlParser.OPTION:
			case TrinoSqlParser.ORDINALITY:
			case TrinoSqlParser.OUTPUT:
			case TrinoSqlParser.OVER:
			case TrinoSqlParser.PARTITION:
			case TrinoSqlParser.PARTITIONS:
			case TrinoSqlParser.PAST:
			case TrinoSqlParser.PATH:
			case TrinoSqlParser.PATTERN:
			case TrinoSqlParser.PER:
			case TrinoSqlParser.PERMUTE:
			case TrinoSqlParser.POSITION:
			case TrinoSqlParser.PRECEDING:
			case TrinoSqlParser.PRECISION:
			case TrinoSqlParser.PRIVILEGES:
			case TrinoSqlParser.PROPERTIES:
			case TrinoSqlParser.RANGE:
			case TrinoSqlParser.READ:
			case TrinoSqlParser.REFRESH:
			case TrinoSqlParser.RENAME:
			case TrinoSqlParser.REPEATABLE:
			case TrinoSqlParser.REPLACE:
			case TrinoSqlParser.RESET:
			case TrinoSqlParser.RESPECT:
			case TrinoSqlParser.RESTRICT:
			case TrinoSqlParser.REVOKE:
			case TrinoSqlParser.ROLE:
			case TrinoSqlParser.ROLES:
			case TrinoSqlParser.ROLLBACK:
			case TrinoSqlParser.ROW:
			case TrinoSqlParser.ROWS:
			case TrinoSqlParser.RUNNING:
			case TrinoSqlParser.SCHEMA:
			case TrinoSqlParser.SCHEMAS:
			case TrinoSqlParser.SECOND:
			case TrinoSqlParser.SECURITY:
			case TrinoSqlParser.SEEK:
			case TrinoSqlParser.SERIALIZABLE:
			case TrinoSqlParser.SESSION:
			case TrinoSqlParser.SET:
			case TrinoSqlParser.SETS:
			case TrinoSqlParser.SHOW:
			case TrinoSqlParser.SOME:
			case TrinoSqlParser.START:
			case TrinoSqlParser.STATS:
			case TrinoSqlParser.SUBSET:
			case TrinoSqlParser.SUBSTRING:
			case TrinoSqlParser.SYSTEM:
			case TrinoSqlParser.TABLES:
			case TrinoSqlParser.TABLESAMPLE:
			case TrinoSqlParser.TEXT:
			case TrinoSqlParser.TIES:
			case TrinoSqlParser.TIME:
			case TrinoSqlParser.TIMESTAMP:
			case TrinoSqlParser.TO:
			case TrinoSqlParser.TRANSACTION:
			case TrinoSqlParser.TRUNCATE:
			case TrinoSqlParser.TRY_CAST:
			case TrinoSqlParser.TYPE:
			case TrinoSqlParser.UNBOUNDED:
			case TrinoSqlParser.UNCOMMITTED:
			case TrinoSqlParser.UNMATCHED:
			case TrinoSqlParser.UPDATE:
			case TrinoSqlParser.USE:
			case TrinoSqlParser.USER:
			case TrinoSqlParser.VALIDATE:
			case TrinoSqlParser.VERBOSE:
			case TrinoSqlParser.VIEW:
			case TrinoSqlParser.WINDOW:
			case TrinoSqlParser.WITHOUT:
			case TrinoSqlParser.WORK:
			case TrinoSqlParser.WRITE:
			case TrinoSqlParser.YEAR:
			case TrinoSqlParser.ZONE:
			case TrinoSqlParser.IDENTIFIER:
			case TrinoSqlParser.DIGIT_IDENTIFIER:
			case TrinoSqlParser.QUOTED_IDENTIFIER:
			case TrinoSqlParser.BACKQUOTED_IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1004;
				this.columnDefinition();
				}
				break;
			case TrinoSqlParser.LIKE:
				this.enterOuterAlt(_localctx, 2);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 22, TrinoSqlParser.RULE_columnDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1008;
			this.identifier();
			this.state = 1009;
			this.type(0);
			this.state = 1012;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
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
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1014;
				this.match(TrinoSqlParser.COMMENT);
				this.state = 1015;
				this.string();
				}
				break;
			}
			this.state = 1020;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 24, TrinoSqlParser.RULE_likeClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1022;
			this.match(TrinoSqlParser.LIKE);
			this.state = 1023;
			this.qualifiedName();
			this.state = 1026;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.EXCLUDING || _la === TrinoSqlParser.INCLUDING) {
				{
				this.state = 1024;
				_localctx._optionType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.EXCLUDING || _la === TrinoSqlParser.INCLUDING)) {
					_localctx._optionType = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 26, TrinoSqlParser.RULE_properties);
		try {
			this.enterOuterAlt(_localctx, 1);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 28, TrinoSqlParser.RULE_propertyAssignments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1032;
			this.property();
			this.state = 1037;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TrinoSqlParser.T__3) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 30, TrinoSqlParser.RULE_property);
		try {
			this.enterOuterAlt(_localctx, 1);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 32, TrinoSqlParser.RULE_propertyValue);
		try {
			this.state = 1046;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				_localctx = new DefaultPropertyValueContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1044;
				this.match(TrinoSqlParser.DEFAULT);
				}
				break;

			case 2:
				_localctx = new NonDefaultPropertyValueContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1045;
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
		this.enterRule(_localctx, 34, TrinoSqlParser.RULE_queryNoWith);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1048;
			this.queryTerm(0);
			this.state = 1059;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.ORDER) {
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
				while (_la === TrinoSqlParser.T__3) {
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
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				{
				this.state = 1061;
				this.match(TrinoSqlParser.OFFSET);
				this.state = 1062;
				_localctx._offset = this.rowCount();
				this.state = 1064;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
				case 1:
					{
					this.state = 1063;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.ROW || _la === TrinoSqlParser.ROWS)) {
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
				}
				}
				break;
			}
			this.state = 1081;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1068;
				this.match(TrinoSqlParser.LIMIT);
				this.state = 1069;
				_localctx._limit = this.limitRowCount();
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
				if (!(_la === TrinoSqlParser.FIRST || _la === TrinoSqlParser.NEXT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1073;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.QUESTION_MARK || _la === TrinoSqlParser.INTEGER_VALUE) {
					{
					this.state = 1072;
					_localctx._fetchFirst = this.rowCount();
					}
				}

				this.state = 1075;
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.ROW || _la === TrinoSqlParser.ROWS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1079;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TrinoSqlParser.ONLY:
					{
					this.state = 1076;
					this.match(TrinoSqlParser.ONLY);
					}
					break;
				case TrinoSqlParser.WITH:
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 36, TrinoSqlParser.RULE_limitRowCount);
		try {
			this.state = 1085;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.ALL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1083;
				this.match(TrinoSqlParser.ALL);
				}
				break;
			case TrinoSqlParser.QUESTION_MARK:
			case TrinoSqlParser.INTEGER_VALUE:
				this.enterOuterAlt(_localctx, 2);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 38, TrinoSqlParser.RULE_rowCount);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1087;
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
		let _startState: number = 40;
		this.enterRecursionRule(_localctx, 40, TrinoSqlParser.RULE_queryTerm, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new QueryTermDefaultContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 1090;
			this.queryPrimary();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1106;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1104;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
					case 1:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_queryTerm);
						this.state = 1092;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1093;
						(_localctx as SetOperationContext)._operator = this.match(TrinoSqlParser.INTERSECT);
						this.state = 1095;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === TrinoSqlParser.ALL || _la === TrinoSqlParser.DISTINCT) {
							{
							this.state = 1094;
							this.setQuantifier();
							}
						}

						this.state = 1097;
						(_localctx as SetOperationContext)._right = this.queryTerm(3);
						}
						break;

					case 2:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_queryTerm);
						this.state = 1098;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1099;
						(_localctx as SetOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === TrinoSqlParser.EXCEPT || _la === TrinoSqlParser.UNION)) {
							(_localctx as SetOperationContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1101;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === TrinoSqlParser.ALL || _la === TrinoSqlParser.DISTINCT) {
							{
							this.state = 1100;
							this.setQuantifier();
							}
						}

						this.state = 1103;
						(_localctx as SetOperationContext)._right = this.queryTerm(2);
						}
						break;
					}
					}
				}
				this.state = 1108;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
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
		this.enterRule(_localctx, 42, TrinoSqlParser.RULE_queryPrimary);
		try {
			let _alt: number;
			this.state = 1125;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.SELECT:
				_localctx = new QueryPrimaryDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1109;
				this.querySpecification();
				}
				break;
			case TrinoSqlParser.TABLE:
				_localctx = new TableContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1110;
				this.match(TrinoSqlParser.TABLE);
				this.state = 1111;
				this.qualifiedName();
				}
				break;
			case TrinoSqlParser.VALUES:
				_localctx = new InlineTableContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1112;
				this.match(TrinoSqlParser.VALUES);
				this.state = 1113;
				this.expression();
				this.state = 1118;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
				}
				}
				break;
			case TrinoSqlParser.T__1:
				_localctx = new SubqueryContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 44, TrinoSqlParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1127;
			this.expression();
			this.state = 1129;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				{
				this.state = 1128;
				_localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.ASC || _la === TrinoSqlParser.DESC)) {
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
			this.state = 1133;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				{
				this.state = 1131;
				this.match(TrinoSqlParser.NULLS);
				this.state = 1132;
				_localctx._nullOrdering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.FIRST || _la === TrinoSqlParser.LAST)) {
					_localctx._nullOrdering = this._errHandler.recoverInline(this);
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
	public querySpecification(): QuerySpecificationContext {
		let _localctx: QuerySpecificationContext = new QuerySpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, TrinoSqlParser.RULE_querySpecification);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1135;
			this.match(TrinoSqlParser.SELECT);
			this.state = 1137;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
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
			_alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
			}
			this.state = 1156;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 1147;
				this.match(TrinoSqlParser.FROM);
				this.state = 1148;
				this.relation(0);
				this.state = 1153;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
				}
				}
				break;
			}
			this.state = 1160;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 1158;
				this.match(TrinoSqlParser.WHERE);
				this.state = 1159;
				_localctx._where = this.booleanExpression(0);
				}
				break;
			}
			this.state = 1165;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
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
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				{
				this.state = 1167;
				this.match(TrinoSqlParser.HAVING);
				this.state = 1168;
				_localctx._having = this.booleanExpression(0);
				}
				break;
			}
			this.state = 1180;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1171;
				this.match(TrinoSqlParser.WINDOW);
				this.state = 1172;
				this.windowDefinition();
				this.state = 1177;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
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
		this.enterRule(_localctx, 48, TrinoSqlParser.RULE_groupBy);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1183;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
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
			_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
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
	public groupingElement(): GroupingElementContext {
		let _localctx: GroupingElementContext = new GroupingElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, TrinoSqlParser.RULE_groupingElement);
		let _la: number;
		try {
			this.state = 1233;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				_localctx = new SingleGroupingSetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1193;
				this.groupingSet();
				}
				break;

			case 2:
				_localctx = new RollupContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1194;
				this.match(TrinoSqlParser.ROLLUP);
				this.state = 1195;
				this.match(TrinoSqlParser.T__1);
				this.state = 1204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TrinoSqlParser.T__1) | (1 << TrinoSqlParser.ADD) | (1 << TrinoSqlParser.ADMIN) | (1 << TrinoSqlParser.AFTER) | (1 << TrinoSqlParser.ALL) | (1 << TrinoSqlParser.ANALYZE) | (1 << TrinoSqlParser.ANY) | (1 << TrinoSqlParser.ARRAY) | (1 << TrinoSqlParser.ASC) | (1 << TrinoSqlParser.AT) | (1 << TrinoSqlParser.AUTHORIZATION) | (1 << TrinoSqlParser.BERNOULLI))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TrinoSqlParser.CALL - 33)) | (1 << (TrinoSqlParser.CASCADE - 33)) | (1 << (TrinoSqlParser.CASE - 33)) | (1 << (TrinoSqlParser.CAST - 33)) | (1 << (TrinoSqlParser.CATALOGS - 33)) | (1 << (TrinoSqlParser.COLUMN - 33)) | (1 << (TrinoSqlParser.COLUMNS - 33)) | (1 << (TrinoSqlParser.COMMENT - 33)) | (1 << (TrinoSqlParser.COMMIT - 33)) | (1 << (TrinoSqlParser.COMMITTED - 33)) | (1 << (TrinoSqlParser.CURRENT - 33)) | (1 << (TrinoSqlParser.CURRENT_CATALOG - 33)) | (1 << (TrinoSqlParser.CURRENT_DATE - 33)) | (1 << (TrinoSqlParser.CURRENT_PATH - 33)) | (1 << (TrinoSqlParser.CURRENT_SCHEMA - 33)) | (1 << (TrinoSqlParser.CURRENT_TIME - 33)) | (1 << (TrinoSqlParser.CURRENT_TIMESTAMP - 33)) | (1 << (TrinoSqlParser.CURRENT_USER - 33)) | (1 << (TrinoSqlParser.DATA - 33)) | (1 << (TrinoSqlParser.DATE - 33)) | (1 << (TrinoSqlParser.DAY - 33)) | (1 << (TrinoSqlParser.DEFAULT - 33)) | (1 << (TrinoSqlParser.DEFINER - 33)) | (1 << (TrinoSqlParser.DESC - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (TrinoSqlParser.DEFINE - 65)) | (1 << (TrinoSqlParser.DISTRIBUTED - 65)) | (1 << (TrinoSqlParser.DOUBLE - 65)) | (1 << (TrinoSqlParser.EMPTY - 65)) | (1 << (TrinoSqlParser.EXCLUDING - 65)) | (1 << (TrinoSqlParser.EXISTS - 65)) | (1 << (TrinoSqlParser.EXPLAIN - 65)) | (1 << (TrinoSqlParser.EXTRACT - 65)) | (1 << (TrinoSqlParser.FALSE - 65)) | (1 << (TrinoSqlParser.FETCH - 65)) | (1 << (TrinoSqlParser.FILTER - 65)) | (1 << (TrinoSqlParser.FINAL - 65)) | (1 << (TrinoSqlParser.FIRST - 65)) | (1 << (TrinoSqlParser.FOLLOWING - 65)) | (1 << (TrinoSqlParser.FORMAT - 65)) | (1 << (TrinoSqlParser.FUNCTIONS - 65)) | (1 << (TrinoSqlParser.GRANT - 65)) | (1 << (TrinoSqlParser.GRANTED - 65)) | (1 << (TrinoSqlParser.GRANTS - 65)) | (1 << (TrinoSqlParser.DENY - 65)) | (1 << (TrinoSqlParser.GRAPHVIZ - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (TrinoSqlParser.GROUPING - 97)) | (1 << (TrinoSqlParser.GROUPS - 97)) | (1 << (TrinoSqlParser.HOUR - 97)) | (1 << (TrinoSqlParser.IF - 97)) | (1 << (TrinoSqlParser.IGNORE - 97)) | (1 << (TrinoSqlParser.INCLUDING - 97)) | (1 << (TrinoSqlParser.INITIAL - 97)) | (1 << (TrinoSqlParser.INPUT - 97)) | (1 << (TrinoSqlParser.INTERVAL - 97)) | (1 << (TrinoSqlParser.INVOKER - 97)) | (1 << (TrinoSqlParser.IO - 97)) | (1 << (TrinoSqlParser.ISOLATION - 97)) | (1 << (TrinoSqlParser.JSON - 97)) | (1 << (TrinoSqlParser.LAST - 97)) | (1 << (TrinoSqlParser.LATERAL - 97)) | (1 << (TrinoSqlParser.LEVEL - 97)) | (1 << (TrinoSqlParser.LIMIT - 97)) | (1 << (TrinoSqlParser.LOCAL - 97)) | (1 << (TrinoSqlParser.LOCALTIME - 97)) | (1 << (TrinoSqlParser.LOCALTIMESTAMP - 97)) | (1 << (TrinoSqlParser.LOGICAL - 97)) | (1 << (TrinoSqlParser.MAP - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (TrinoSqlParser.MATCH - 129)) | (1 << (TrinoSqlParser.MATCHED - 129)) | (1 << (TrinoSqlParser.MATCHES - 129)) | (1 << (TrinoSqlParser.MATCH_RECOGNIZE - 129)) | (1 << (TrinoSqlParser.MATERIALIZED - 129)) | (1 << (TrinoSqlParser.MEASURES - 129)) | (1 << (TrinoSqlParser.MERGE - 129)) | (1 << (TrinoSqlParser.MINUTE - 129)) | (1 << (TrinoSqlParser.MONTH - 129)) | (1 << (TrinoSqlParser.NEXT - 129)) | (1 << (TrinoSqlParser.NFC - 129)) | (1 << (TrinoSqlParser.NFD - 129)) | (1 << (TrinoSqlParser.NFKC - 129)) | (1 << (TrinoSqlParser.NFKD - 129)) | (1 << (TrinoSqlParser.NO - 129)) | (1 << (TrinoSqlParser.NONE - 129)) | (1 << (TrinoSqlParser.NORMALIZE - 129)) | (1 << (TrinoSqlParser.NOT - 129)) | (1 << (TrinoSqlParser.NULL - 129)) | (1 << (TrinoSqlParser.NULLIF - 129)) | (1 << (TrinoSqlParser.NULLS - 129)) | (1 << (TrinoSqlParser.OFFSET - 129)) | (1 << (TrinoSqlParser.OMIT - 129)) | (1 << (TrinoSqlParser.ONE - 129)) | (1 << (TrinoSqlParser.ONLY - 129)) | (1 << (TrinoSqlParser.OPTION - 129)) | (1 << (TrinoSqlParser.ORDINALITY - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (TrinoSqlParser.OUTPUT - 161)) | (1 << (TrinoSqlParser.OVER - 161)) | (1 << (TrinoSqlParser.PARTITION - 161)) | (1 << (TrinoSqlParser.PARTITIONS - 161)) | (1 << (TrinoSqlParser.PAST - 161)) | (1 << (TrinoSqlParser.PATH - 161)) | (1 << (TrinoSqlParser.PATTERN - 161)) | (1 << (TrinoSqlParser.PER - 161)) | (1 << (TrinoSqlParser.PERMUTE - 161)) | (1 << (TrinoSqlParser.POSITION - 161)) | (1 << (TrinoSqlParser.PRECEDING - 161)) | (1 << (TrinoSqlParser.PRECISION - 161)) | (1 << (TrinoSqlParser.PRIVILEGES - 161)) | (1 << (TrinoSqlParser.PROPERTIES - 161)) | (1 << (TrinoSqlParser.RANGE - 161)) | (1 << (TrinoSqlParser.READ - 161)) | (1 << (TrinoSqlParser.REFRESH - 161)) | (1 << (TrinoSqlParser.RENAME - 161)) | (1 << (TrinoSqlParser.REPEATABLE - 161)) | (1 << (TrinoSqlParser.REPLACE - 161)) | (1 << (TrinoSqlParser.RESET - 161)) | (1 << (TrinoSqlParser.RESPECT - 161)) | (1 << (TrinoSqlParser.RESTRICT - 161)) | (1 << (TrinoSqlParser.REVOKE - 161)) | (1 << (TrinoSqlParser.ROLE - 161)) | (1 << (TrinoSqlParser.ROLES - 161)) | (1 << (TrinoSqlParser.ROLLBACK - 161)) | (1 << (TrinoSqlParser.ROW - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (TrinoSqlParser.ROWS - 193)) | (1 << (TrinoSqlParser.RUNNING - 193)) | (1 << (TrinoSqlParser.SCHEMA - 193)) | (1 << (TrinoSqlParser.SCHEMAS - 193)) | (1 << (TrinoSqlParser.SECOND - 193)) | (1 << (TrinoSqlParser.SECURITY - 193)) | (1 << (TrinoSqlParser.SEEK - 193)) | (1 << (TrinoSqlParser.SERIALIZABLE - 193)) | (1 << (TrinoSqlParser.SESSION - 193)) | (1 << (TrinoSqlParser.SET - 193)) | (1 << (TrinoSqlParser.SETS - 193)) | (1 << (TrinoSqlParser.SHOW - 193)) | (1 << (TrinoSqlParser.SOME - 193)) | (1 << (TrinoSqlParser.START - 193)) | (1 << (TrinoSqlParser.STATS - 193)) | (1 << (TrinoSqlParser.SUBSET - 193)) | (1 << (TrinoSqlParser.SUBSTRING - 193)) | (1 << (TrinoSqlParser.SYSTEM - 193)) | (1 << (TrinoSqlParser.TABLES - 193)) | (1 << (TrinoSqlParser.TABLESAMPLE - 193)) | (1 << (TrinoSqlParser.TEXT - 193)) | (1 << (TrinoSqlParser.TIES - 193)) | (1 << (TrinoSqlParser.TIME - 193)) | (1 << (TrinoSqlParser.TIMESTAMP - 193)) | (1 << (TrinoSqlParser.TO - 193)) | (1 << (TrinoSqlParser.TRANSACTION - 193)) | (1 << (TrinoSqlParser.TRUNCATE - 193)) | (1 << (TrinoSqlParser.TRUE - 193)) | (1 << (TrinoSqlParser.TRY_CAST - 193)))) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (TrinoSqlParser.TYPE - 225)) | (1 << (TrinoSqlParser.UNBOUNDED - 225)) | (1 << (TrinoSqlParser.UNCOMMITTED - 225)) | (1 << (TrinoSqlParser.UNMATCHED - 225)) | (1 << (TrinoSqlParser.UPDATE - 225)) | (1 << (TrinoSqlParser.USE - 225)) | (1 << (TrinoSqlParser.USER - 225)) | (1 << (TrinoSqlParser.VALIDATE - 225)) | (1 << (TrinoSqlParser.VERBOSE - 225)) | (1 << (TrinoSqlParser.VIEW - 225)) | (1 << (TrinoSqlParser.WINDOW - 225)) | (1 << (TrinoSqlParser.WITHOUT - 225)) | (1 << (TrinoSqlParser.WORK - 225)) | (1 << (TrinoSqlParser.WRITE - 225)) | (1 << (TrinoSqlParser.YEAR - 225)) | (1 << (TrinoSqlParser.ZONE - 225)) | (1 << (TrinoSqlParser.PLUS - 225)) | (1 << (TrinoSqlParser.MINUS - 225)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (TrinoSqlParser.QUESTION_MARK - 261)) | (1 << (TrinoSqlParser.STRING - 261)) | (1 << (TrinoSqlParser.UNICODE_STRING - 261)) | (1 << (TrinoSqlParser.BINARY_LITERAL - 261)) | (1 << (TrinoSqlParser.INTEGER_VALUE - 261)) | (1 << (TrinoSqlParser.DECIMAL_VALUE - 261)) | (1 << (TrinoSqlParser.DOUBLE_VALUE - 261)) | (1 << (TrinoSqlParser.IDENTIFIER - 261)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 261)))) !== 0)) {
					{
					this.state = 1196;
					this.expression();
					this.state = 1201;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
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
				_localctx = new CubeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1207;
				this.match(TrinoSqlParser.CUBE);
				this.state = 1208;
				this.match(TrinoSqlParser.T__1);
				this.state = 1217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TrinoSqlParser.T__1) | (1 << TrinoSqlParser.ADD) | (1 << TrinoSqlParser.ADMIN) | (1 << TrinoSqlParser.AFTER) | (1 << TrinoSqlParser.ALL) | (1 << TrinoSqlParser.ANALYZE) | (1 << TrinoSqlParser.ANY) | (1 << TrinoSqlParser.ARRAY) | (1 << TrinoSqlParser.ASC) | (1 << TrinoSqlParser.AT) | (1 << TrinoSqlParser.AUTHORIZATION) | (1 << TrinoSqlParser.BERNOULLI))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TrinoSqlParser.CALL - 33)) | (1 << (TrinoSqlParser.CASCADE - 33)) | (1 << (TrinoSqlParser.CASE - 33)) | (1 << (TrinoSqlParser.CAST - 33)) | (1 << (TrinoSqlParser.CATALOGS - 33)) | (1 << (TrinoSqlParser.COLUMN - 33)) | (1 << (TrinoSqlParser.COLUMNS - 33)) | (1 << (TrinoSqlParser.COMMENT - 33)) | (1 << (TrinoSqlParser.COMMIT - 33)) | (1 << (TrinoSqlParser.COMMITTED - 33)) | (1 << (TrinoSqlParser.CURRENT - 33)) | (1 << (TrinoSqlParser.CURRENT_CATALOG - 33)) | (1 << (TrinoSqlParser.CURRENT_DATE - 33)) | (1 << (TrinoSqlParser.CURRENT_PATH - 33)) | (1 << (TrinoSqlParser.CURRENT_SCHEMA - 33)) | (1 << (TrinoSqlParser.CURRENT_TIME - 33)) | (1 << (TrinoSqlParser.CURRENT_TIMESTAMP - 33)) | (1 << (TrinoSqlParser.CURRENT_USER - 33)) | (1 << (TrinoSqlParser.DATA - 33)) | (1 << (TrinoSqlParser.DATE - 33)) | (1 << (TrinoSqlParser.DAY - 33)) | (1 << (TrinoSqlParser.DEFAULT - 33)) | (1 << (TrinoSqlParser.DEFINER - 33)) | (1 << (TrinoSqlParser.DESC - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (TrinoSqlParser.DEFINE - 65)) | (1 << (TrinoSqlParser.DISTRIBUTED - 65)) | (1 << (TrinoSqlParser.DOUBLE - 65)) | (1 << (TrinoSqlParser.EMPTY - 65)) | (1 << (TrinoSqlParser.EXCLUDING - 65)) | (1 << (TrinoSqlParser.EXISTS - 65)) | (1 << (TrinoSqlParser.EXPLAIN - 65)) | (1 << (TrinoSqlParser.EXTRACT - 65)) | (1 << (TrinoSqlParser.FALSE - 65)) | (1 << (TrinoSqlParser.FETCH - 65)) | (1 << (TrinoSqlParser.FILTER - 65)) | (1 << (TrinoSqlParser.FINAL - 65)) | (1 << (TrinoSqlParser.FIRST - 65)) | (1 << (TrinoSqlParser.FOLLOWING - 65)) | (1 << (TrinoSqlParser.FORMAT - 65)) | (1 << (TrinoSqlParser.FUNCTIONS - 65)) | (1 << (TrinoSqlParser.GRANT - 65)) | (1 << (TrinoSqlParser.GRANTED - 65)) | (1 << (TrinoSqlParser.GRANTS - 65)) | (1 << (TrinoSqlParser.DENY - 65)) | (1 << (TrinoSqlParser.GRAPHVIZ - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (TrinoSqlParser.GROUPING - 97)) | (1 << (TrinoSqlParser.GROUPS - 97)) | (1 << (TrinoSqlParser.HOUR - 97)) | (1 << (TrinoSqlParser.IF - 97)) | (1 << (TrinoSqlParser.IGNORE - 97)) | (1 << (TrinoSqlParser.INCLUDING - 97)) | (1 << (TrinoSqlParser.INITIAL - 97)) | (1 << (TrinoSqlParser.INPUT - 97)) | (1 << (TrinoSqlParser.INTERVAL - 97)) | (1 << (TrinoSqlParser.INVOKER - 97)) | (1 << (TrinoSqlParser.IO - 97)) | (1 << (TrinoSqlParser.ISOLATION - 97)) | (1 << (TrinoSqlParser.JSON - 97)) | (1 << (TrinoSqlParser.LAST - 97)) | (1 << (TrinoSqlParser.LATERAL - 97)) | (1 << (TrinoSqlParser.LEVEL - 97)) | (1 << (TrinoSqlParser.LIMIT - 97)) | (1 << (TrinoSqlParser.LOCAL - 97)) | (1 << (TrinoSqlParser.LOCALTIME - 97)) | (1 << (TrinoSqlParser.LOCALTIMESTAMP - 97)) | (1 << (TrinoSqlParser.LOGICAL - 97)) | (1 << (TrinoSqlParser.MAP - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (TrinoSqlParser.MATCH - 129)) | (1 << (TrinoSqlParser.MATCHED - 129)) | (1 << (TrinoSqlParser.MATCHES - 129)) | (1 << (TrinoSqlParser.MATCH_RECOGNIZE - 129)) | (1 << (TrinoSqlParser.MATERIALIZED - 129)) | (1 << (TrinoSqlParser.MEASURES - 129)) | (1 << (TrinoSqlParser.MERGE - 129)) | (1 << (TrinoSqlParser.MINUTE - 129)) | (1 << (TrinoSqlParser.MONTH - 129)) | (1 << (TrinoSqlParser.NEXT - 129)) | (1 << (TrinoSqlParser.NFC - 129)) | (1 << (TrinoSqlParser.NFD - 129)) | (1 << (TrinoSqlParser.NFKC - 129)) | (1 << (TrinoSqlParser.NFKD - 129)) | (1 << (TrinoSqlParser.NO - 129)) | (1 << (TrinoSqlParser.NONE - 129)) | (1 << (TrinoSqlParser.NORMALIZE - 129)) | (1 << (TrinoSqlParser.NOT - 129)) | (1 << (TrinoSqlParser.NULL - 129)) | (1 << (TrinoSqlParser.NULLIF - 129)) | (1 << (TrinoSqlParser.NULLS - 129)) | (1 << (TrinoSqlParser.OFFSET - 129)) | (1 << (TrinoSqlParser.OMIT - 129)) | (1 << (TrinoSqlParser.ONE - 129)) | (1 << (TrinoSqlParser.ONLY - 129)) | (1 << (TrinoSqlParser.OPTION - 129)) | (1 << (TrinoSqlParser.ORDINALITY - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (TrinoSqlParser.OUTPUT - 161)) | (1 << (TrinoSqlParser.OVER - 161)) | (1 << (TrinoSqlParser.PARTITION - 161)) | (1 << (TrinoSqlParser.PARTITIONS - 161)) | (1 << (TrinoSqlParser.PAST - 161)) | (1 << (TrinoSqlParser.PATH - 161)) | (1 << (TrinoSqlParser.PATTERN - 161)) | (1 << (TrinoSqlParser.PER - 161)) | (1 << (TrinoSqlParser.PERMUTE - 161)) | (1 << (TrinoSqlParser.POSITION - 161)) | (1 << (TrinoSqlParser.PRECEDING - 161)) | (1 << (TrinoSqlParser.PRECISION - 161)) | (1 << (TrinoSqlParser.PRIVILEGES - 161)) | (1 << (TrinoSqlParser.PROPERTIES - 161)) | (1 << (TrinoSqlParser.RANGE - 161)) | (1 << (TrinoSqlParser.READ - 161)) | (1 << (TrinoSqlParser.REFRESH - 161)) | (1 << (TrinoSqlParser.RENAME - 161)) | (1 << (TrinoSqlParser.REPEATABLE - 161)) | (1 << (TrinoSqlParser.REPLACE - 161)) | (1 << (TrinoSqlParser.RESET - 161)) | (1 << (TrinoSqlParser.RESPECT - 161)) | (1 << (TrinoSqlParser.RESTRICT - 161)) | (1 << (TrinoSqlParser.REVOKE - 161)) | (1 << (TrinoSqlParser.ROLE - 161)) | (1 << (TrinoSqlParser.ROLES - 161)) | (1 << (TrinoSqlParser.ROLLBACK - 161)) | (1 << (TrinoSqlParser.ROW - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (TrinoSqlParser.ROWS - 193)) | (1 << (TrinoSqlParser.RUNNING - 193)) | (1 << (TrinoSqlParser.SCHEMA - 193)) | (1 << (TrinoSqlParser.SCHEMAS - 193)) | (1 << (TrinoSqlParser.SECOND - 193)) | (1 << (TrinoSqlParser.SECURITY - 193)) | (1 << (TrinoSqlParser.SEEK - 193)) | (1 << (TrinoSqlParser.SERIALIZABLE - 193)) | (1 << (TrinoSqlParser.SESSION - 193)) | (1 << (TrinoSqlParser.SET - 193)) | (1 << (TrinoSqlParser.SETS - 193)) | (1 << (TrinoSqlParser.SHOW - 193)) | (1 << (TrinoSqlParser.SOME - 193)) | (1 << (TrinoSqlParser.START - 193)) | (1 << (TrinoSqlParser.STATS - 193)) | (1 << (TrinoSqlParser.SUBSET - 193)) | (1 << (TrinoSqlParser.SUBSTRING - 193)) | (1 << (TrinoSqlParser.SYSTEM - 193)) | (1 << (TrinoSqlParser.TABLES - 193)) | (1 << (TrinoSqlParser.TABLESAMPLE - 193)) | (1 << (TrinoSqlParser.TEXT - 193)) | (1 << (TrinoSqlParser.TIES - 193)) | (1 << (TrinoSqlParser.TIME - 193)) | (1 << (TrinoSqlParser.TIMESTAMP - 193)) | (1 << (TrinoSqlParser.TO - 193)) | (1 << (TrinoSqlParser.TRANSACTION - 193)) | (1 << (TrinoSqlParser.TRUNCATE - 193)) | (1 << (TrinoSqlParser.TRUE - 193)) | (1 << (TrinoSqlParser.TRY_CAST - 193)))) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (TrinoSqlParser.TYPE - 225)) | (1 << (TrinoSqlParser.UNBOUNDED - 225)) | (1 << (TrinoSqlParser.UNCOMMITTED - 225)) | (1 << (TrinoSqlParser.UNMATCHED - 225)) | (1 << (TrinoSqlParser.UPDATE - 225)) | (1 << (TrinoSqlParser.USE - 225)) | (1 << (TrinoSqlParser.USER - 225)) | (1 << (TrinoSqlParser.VALIDATE - 225)) | (1 << (TrinoSqlParser.VERBOSE - 225)) | (1 << (TrinoSqlParser.VIEW - 225)) | (1 << (TrinoSqlParser.WINDOW - 225)) | (1 << (TrinoSqlParser.WITHOUT - 225)) | (1 << (TrinoSqlParser.WORK - 225)) | (1 << (TrinoSqlParser.WRITE - 225)) | (1 << (TrinoSqlParser.YEAR - 225)) | (1 << (TrinoSqlParser.ZONE - 225)) | (1 << (TrinoSqlParser.PLUS - 225)) | (1 << (TrinoSqlParser.MINUS - 225)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (TrinoSqlParser.QUESTION_MARK - 261)) | (1 << (TrinoSqlParser.STRING - 261)) | (1 << (TrinoSqlParser.UNICODE_STRING - 261)) | (1 << (TrinoSqlParser.BINARY_LITERAL - 261)) | (1 << (TrinoSqlParser.INTEGER_VALUE - 261)) | (1 << (TrinoSqlParser.DECIMAL_VALUE - 261)) | (1 << (TrinoSqlParser.DOUBLE_VALUE - 261)) | (1 << (TrinoSqlParser.IDENTIFIER - 261)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 261)))) !== 0)) {
					{
					this.state = 1209;
					this.expression();
					this.state = 1214;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
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
				_localctx = new MultipleGroupingSetsContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
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
				while (_la === TrinoSqlParser.T__3) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 52, TrinoSqlParser.RULE_groupingSet);
		let _la: number;
		try {
			this.state = 1248;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1235;
				this.match(TrinoSqlParser.T__1);
				this.state = 1244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TrinoSqlParser.T__1) | (1 << TrinoSqlParser.ADD) | (1 << TrinoSqlParser.ADMIN) | (1 << TrinoSqlParser.AFTER) | (1 << TrinoSqlParser.ALL) | (1 << TrinoSqlParser.ANALYZE) | (1 << TrinoSqlParser.ANY) | (1 << TrinoSqlParser.ARRAY) | (1 << TrinoSqlParser.ASC) | (1 << TrinoSqlParser.AT) | (1 << TrinoSqlParser.AUTHORIZATION) | (1 << TrinoSqlParser.BERNOULLI))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TrinoSqlParser.CALL - 33)) | (1 << (TrinoSqlParser.CASCADE - 33)) | (1 << (TrinoSqlParser.CASE - 33)) | (1 << (TrinoSqlParser.CAST - 33)) | (1 << (TrinoSqlParser.CATALOGS - 33)) | (1 << (TrinoSqlParser.COLUMN - 33)) | (1 << (TrinoSqlParser.COLUMNS - 33)) | (1 << (TrinoSqlParser.COMMENT - 33)) | (1 << (TrinoSqlParser.COMMIT - 33)) | (1 << (TrinoSqlParser.COMMITTED - 33)) | (1 << (TrinoSqlParser.CURRENT - 33)) | (1 << (TrinoSqlParser.CURRENT_CATALOG - 33)) | (1 << (TrinoSqlParser.CURRENT_DATE - 33)) | (1 << (TrinoSqlParser.CURRENT_PATH - 33)) | (1 << (TrinoSqlParser.CURRENT_SCHEMA - 33)) | (1 << (TrinoSqlParser.CURRENT_TIME - 33)) | (1 << (TrinoSqlParser.CURRENT_TIMESTAMP - 33)) | (1 << (TrinoSqlParser.CURRENT_USER - 33)) | (1 << (TrinoSqlParser.DATA - 33)) | (1 << (TrinoSqlParser.DATE - 33)) | (1 << (TrinoSqlParser.DAY - 33)) | (1 << (TrinoSqlParser.DEFAULT - 33)) | (1 << (TrinoSqlParser.DEFINER - 33)) | (1 << (TrinoSqlParser.DESC - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (TrinoSqlParser.DEFINE - 65)) | (1 << (TrinoSqlParser.DISTRIBUTED - 65)) | (1 << (TrinoSqlParser.DOUBLE - 65)) | (1 << (TrinoSqlParser.EMPTY - 65)) | (1 << (TrinoSqlParser.EXCLUDING - 65)) | (1 << (TrinoSqlParser.EXISTS - 65)) | (1 << (TrinoSqlParser.EXPLAIN - 65)) | (1 << (TrinoSqlParser.EXTRACT - 65)) | (1 << (TrinoSqlParser.FALSE - 65)) | (1 << (TrinoSqlParser.FETCH - 65)) | (1 << (TrinoSqlParser.FILTER - 65)) | (1 << (TrinoSqlParser.FINAL - 65)) | (1 << (TrinoSqlParser.FIRST - 65)) | (1 << (TrinoSqlParser.FOLLOWING - 65)) | (1 << (TrinoSqlParser.FORMAT - 65)) | (1 << (TrinoSqlParser.FUNCTIONS - 65)) | (1 << (TrinoSqlParser.GRANT - 65)) | (1 << (TrinoSqlParser.GRANTED - 65)) | (1 << (TrinoSqlParser.GRANTS - 65)) | (1 << (TrinoSqlParser.DENY - 65)) | (1 << (TrinoSqlParser.GRAPHVIZ - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (TrinoSqlParser.GROUPING - 97)) | (1 << (TrinoSqlParser.GROUPS - 97)) | (1 << (TrinoSqlParser.HOUR - 97)) | (1 << (TrinoSqlParser.IF - 97)) | (1 << (TrinoSqlParser.IGNORE - 97)) | (1 << (TrinoSqlParser.INCLUDING - 97)) | (1 << (TrinoSqlParser.INITIAL - 97)) | (1 << (TrinoSqlParser.INPUT - 97)) | (1 << (TrinoSqlParser.INTERVAL - 97)) | (1 << (TrinoSqlParser.INVOKER - 97)) | (1 << (TrinoSqlParser.IO - 97)) | (1 << (TrinoSqlParser.ISOLATION - 97)) | (1 << (TrinoSqlParser.JSON - 97)) | (1 << (TrinoSqlParser.LAST - 97)) | (1 << (TrinoSqlParser.LATERAL - 97)) | (1 << (TrinoSqlParser.LEVEL - 97)) | (1 << (TrinoSqlParser.LIMIT - 97)) | (1 << (TrinoSqlParser.LOCAL - 97)) | (1 << (TrinoSqlParser.LOCALTIME - 97)) | (1 << (TrinoSqlParser.LOCALTIMESTAMP - 97)) | (1 << (TrinoSqlParser.LOGICAL - 97)) | (1 << (TrinoSqlParser.MAP - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (TrinoSqlParser.MATCH - 129)) | (1 << (TrinoSqlParser.MATCHED - 129)) | (1 << (TrinoSqlParser.MATCHES - 129)) | (1 << (TrinoSqlParser.MATCH_RECOGNIZE - 129)) | (1 << (TrinoSqlParser.MATERIALIZED - 129)) | (1 << (TrinoSqlParser.MEASURES - 129)) | (1 << (TrinoSqlParser.MERGE - 129)) | (1 << (TrinoSqlParser.MINUTE - 129)) | (1 << (TrinoSqlParser.MONTH - 129)) | (1 << (TrinoSqlParser.NEXT - 129)) | (1 << (TrinoSqlParser.NFC - 129)) | (1 << (TrinoSqlParser.NFD - 129)) | (1 << (TrinoSqlParser.NFKC - 129)) | (1 << (TrinoSqlParser.NFKD - 129)) | (1 << (TrinoSqlParser.NO - 129)) | (1 << (TrinoSqlParser.NONE - 129)) | (1 << (TrinoSqlParser.NORMALIZE - 129)) | (1 << (TrinoSqlParser.NOT - 129)) | (1 << (TrinoSqlParser.NULL - 129)) | (1 << (TrinoSqlParser.NULLIF - 129)) | (1 << (TrinoSqlParser.NULLS - 129)) | (1 << (TrinoSqlParser.OFFSET - 129)) | (1 << (TrinoSqlParser.OMIT - 129)) | (1 << (TrinoSqlParser.ONE - 129)) | (1 << (TrinoSqlParser.ONLY - 129)) | (1 << (TrinoSqlParser.OPTION - 129)) | (1 << (TrinoSqlParser.ORDINALITY - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (TrinoSqlParser.OUTPUT - 161)) | (1 << (TrinoSqlParser.OVER - 161)) | (1 << (TrinoSqlParser.PARTITION - 161)) | (1 << (TrinoSqlParser.PARTITIONS - 161)) | (1 << (TrinoSqlParser.PAST - 161)) | (1 << (TrinoSqlParser.PATH - 161)) | (1 << (TrinoSqlParser.PATTERN - 161)) | (1 << (TrinoSqlParser.PER - 161)) | (1 << (TrinoSqlParser.PERMUTE - 161)) | (1 << (TrinoSqlParser.POSITION - 161)) | (1 << (TrinoSqlParser.PRECEDING - 161)) | (1 << (TrinoSqlParser.PRECISION - 161)) | (1 << (TrinoSqlParser.PRIVILEGES - 161)) | (1 << (TrinoSqlParser.PROPERTIES - 161)) | (1 << (TrinoSqlParser.RANGE - 161)) | (1 << (TrinoSqlParser.READ - 161)) | (1 << (TrinoSqlParser.REFRESH - 161)) | (1 << (TrinoSqlParser.RENAME - 161)) | (1 << (TrinoSqlParser.REPEATABLE - 161)) | (1 << (TrinoSqlParser.REPLACE - 161)) | (1 << (TrinoSqlParser.RESET - 161)) | (1 << (TrinoSqlParser.RESPECT - 161)) | (1 << (TrinoSqlParser.RESTRICT - 161)) | (1 << (TrinoSqlParser.REVOKE - 161)) | (1 << (TrinoSqlParser.ROLE - 161)) | (1 << (TrinoSqlParser.ROLES - 161)) | (1 << (TrinoSqlParser.ROLLBACK - 161)) | (1 << (TrinoSqlParser.ROW - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (TrinoSqlParser.ROWS - 193)) | (1 << (TrinoSqlParser.RUNNING - 193)) | (1 << (TrinoSqlParser.SCHEMA - 193)) | (1 << (TrinoSqlParser.SCHEMAS - 193)) | (1 << (TrinoSqlParser.SECOND - 193)) | (1 << (TrinoSqlParser.SECURITY - 193)) | (1 << (TrinoSqlParser.SEEK - 193)) | (1 << (TrinoSqlParser.SERIALIZABLE - 193)) | (1 << (TrinoSqlParser.SESSION - 193)) | (1 << (TrinoSqlParser.SET - 193)) | (1 << (TrinoSqlParser.SETS - 193)) | (1 << (TrinoSqlParser.SHOW - 193)) | (1 << (TrinoSqlParser.SOME - 193)) | (1 << (TrinoSqlParser.START - 193)) | (1 << (TrinoSqlParser.STATS - 193)) | (1 << (TrinoSqlParser.SUBSET - 193)) | (1 << (TrinoSqlParser.SUBSTRING - 193)) | (1 << (TrinoSqlParser.SYSTEM - 193)) | (1 << (TrinoSqlParser.TABLES - 193)) | (1 << (TrinoSqlParser.TABLESAMPLE - 193)) | (1 << (TrinoSqlParser.TEXT - 193)) | (1 << (TrinoSqlParser.TIES - 193)) | (1 << (TrinoSqlParser.TIME - 193)) | (1 << (TrinoSqlParser.TIMESTAMP - 193)) | (1 << (TrinoSqlParser.TO - 193)) | (1 << (TrinoSqlParser.TRANSACTION - 193)) | (1 << (TrinoSqlParser.TRUNCATE - 193)) | (1 << (TrinoSqlParser.TRUE - 193)) | (1 << (TrinoSqlParser.TRY_CAST - 193)))) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (TrinoSqlParser.TYPE - 225)) | (1 << (TrinoSqlParser.UNBOUNDED - 225)) | (1 << (TrinoSqlParser.UNCOMMITTED - 225)) | (1 << (TrinoSqlParser.UNMATCHED - 225)) | (1 << (TrinoSqlParser.UPDATE - 225)) | (1 << (TrinoSqlParser.USE - 225)) | (1 << (TrinoSqlParser.USER - 225)) | (1 << (TrinoSqlParser.VALIDATE - 225)) | (1 << (TrinoSqlParser.VERBOSE - 225)) | (1 << (TrinoSqlParser.VIEW - 225)) | (1 << (TrinoSqlParser.WINDOW - 225)) | (1 << (TrinoSqlParser.WITHOUT - 225)) | (1 << (TrinoSqlParser.WORK - 225)) | (1 << (TrinoSqlParser.WRITE - 225)) | (1 << (TrinoSqlParser.YEAR - 225)) | (1 << (TrinoSqlParser.ZONE - 225)) | (1 << (TrinoSqlParser.PLUS - 225)) | (1 << (TrinoSqlParser.MINUS - 225)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (TrinoSqlParser.QUESTION_MARK - 261)) | (1 << (TrinoSqlParser.STRING - 261)) | (1 << (TrinoSqlParser.UNICODE_STRING - 261)) | (1 << (TrinoSqlParser.BINARY_LITERAL - 261)) | (1 << (TrinoSqlParser.INTEGER_VALUE - 261)) | (1 << (TrinoSqlParser.DECIMAL_VALUE - 261)) | (1 << (TrinoSqlParser.DOUBLE_VALUE - 261)) | (1 << (TrinoSqlParser.IDENTIFIER - 261)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 261)))) !== 0)) {
					{
					this.state = 1236;
					this.expression();
					this.state = 1241;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
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
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1247;
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
		this.enterRule(_localctx, 54, TrinoSqlParser.RULE_windowDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1250;
			_localctx._name = this.identifier();
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 56, TrinoSqlParser.RULE_windowSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1257;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				{
				this.state = 1256;
				_localctx._existingWindowName = this.identifier();
				}
				break;
			}
			this.state = 1269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.PARTITION) {
				{
				this.state = 1259;
				this.match(TrinoSqlParser.PARTITION);
				this.state = 1260;
				this.match(TrinoSqlParser.BY);
				this.state = 1261;
				_localctx._expression = this.expression();
				_localctx._partition.push(_localctx._expression);
				this.state = 1266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__3) {
					{
					{
					this.state = 1262;
					this.match(TrinoSqlParser.T__3);
					this.state = 1263;
					_localctx._expression = this.expression();
					_localctx._partition.push(_localctx._expression);
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
			if (_la === TrinoSqlParser.ORDER) {
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
				while (_la === TrinoSqlParser.T__3) {
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
			if (_la === TrinoSqlParser.GROUPS || _la === TrinoSqlParser.MEASURES || _la === TrinoSqlParser.RANGE || _la === TrinoSqlParser.ROWS) {
				{
				this.state = 1283;
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
		this.enterRule(_localctx, 58, TrinoSqlParser.RULE_namedQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1286;
			_localctx._name = this.identifier();
			this.state = 1288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.T__1) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 60, TrinoSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1295;
			_la = this._input.LA(1);
			if (!(_la === TrinoSqlParser.ALL || _la === TrinoSqlParser.DISTINCT)) {
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
		this.enterRule(_localctx, 62, TrinoSqlParser.RULE_selectItem);
		let _la: number;
		try {
			this.state = 1312;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				_localctx = new SelectSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1297;
				this.expression();
				this.state = 1302;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
				case 1:
					{
					this.state = 1299;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.AS) {
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
				_localctx = new SelectAllContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1304;
				this.primaryExpression(0);
				this.state = 1305;
				this.match(TrinoSqlParser.T__0);
				this.state = 1306;
				this.match(TrinoSqlParser.ASTERISK);
				this.state = 1309;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
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
				_localctx = new SelectAllContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1311;
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
		let _startState: number = 64;
		this.enterRecursionRule(_localctx, 64, TrinoSqlParser.RULE_relation, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new RelationDefaultContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 1315;
			this.sampledRelation();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1335;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
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
					this.state = 1317;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1331;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case TrinoSqlParser.CROSS:
						{
						this.state = 1318;
						this.match(TrinoSqlParser.CROSS);
						this.state = 1319;
						this.match(TrinoSqlParser.JOIN);
						this.state = 1320;
						(_localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					case TrinoSqlParser.FULL:
					case TrinoSqlParser.INNER:
					case TrinoSqlParser.JOIN:
					case TrinoSqlParser.LEFT:
					case TrinoSqlParser.RIGHT:
						{
						this.state = 1321;
						this.joinType();
						this.state = 1322;
						this.match(TrinoSqlParser.JOIN);
						this.state = 1323;
						(_localctx as JoinRelationContext)._rightRelation = this.relation(0);
						this.state = 1324;
						this.joinCriteria();
						}
						break;
					case TrinoSqlParser.NATURAL:
						{
						this.state = 1326;
						this.match(TrinoSqlParser.NATURAL);
						this.state = 1327;
						this.joinType();
						this.state = 1328;
						this.match(TrinoSqlParser.JOIN);
						this.state = 1329;
						(_localctx as JoinRelationContext)._right = this.sampledRelation();
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
				_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
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
		this.enterRule(_localctx, 66, TrinoSqlParser.RULE_joinType);
		let _la: number;
		try {
			this.state = 1353;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.INNER:
			case TrinoSqlParser.JOIN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.INNER) {
					{
					this.state = 1338;
					this.match(TrinoSqlParser.INNER);
					}
				}

				}
				break;
			case TrinoSqlParser.LEFT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1341;
				this.match(TrinoSqlParser.LEFT);
				this.state = 1343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.OUTER) {
					{
					this.state = 1342;
					this.match(TrinoSqlParser.OUTER);
					}
				}

				}
				break;
			case TrinoSqlParser.RIGHT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1345;
				this.match(TrinoSqlParser.RIGHT);
				this.state = 1347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.OUTER) {
					{
					this.state = 1346;
					this.match(TrinoSqlParser.OUTER);
					}
				}

				}
				break;
			case TrinoSqlParser.FULL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1349;
				this.match(TrinoSqlParser.FULL);
				this.state = 1351;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.OUTER) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 68, TrinoSqlParser.RULE_joinCriteria);
		let _la: number;
		try {
			this.state = 1369;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1355;
				this.match(TrinoSqlParser.ON);
				this.state = 1356;
				this.booleanExpression(0);
				}
				break;
			case TrinoSqlParser.USING:
				this.enterOuterAlt(_localctx, 2);
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
				while (_la === TrinoSqlParser.T__3) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 70, TrinoSqlParser.RULE_sampledRelation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1371;
			this.patternRecognition();
			this.state = 1378;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1372;
				this.match(TrinoSqlParser.TABLESAMPLE);
				this.state = 1373;
				this.sampleType();
				this.state = 1374;
				this.match(TrinoSqlParser.T__1);
				this.state = 1375;
				_localctx._percentage = this.expression();
				this.state = 1376;
				this.match(TrinoSqlParser.T__2);
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
		this.enterRule(_localctx, 72, TrinoSqlParser.RULE_sampleType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1380;
			_la = this._input.LA(1);
			if (!(_la === TrinoSqlParser.BERNOULLI || _la === TrinoSqlParser.SYSTEM)) {
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
		this.enterRule(_localctx, 74, TrinoSqlParser.RULE_patternRecognition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1382;
			this.aliasedRelation();
			this.state = 1465;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				{
				this.state = 1383;
				this.match(TrinoSqlParser.MATCH_RECOGNIZE);
				this.state = 1384;
				this.match(TrinoSqlParser.T__1);
				this.state = 1395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.PARTITION) {
					{
					this.state = 1385;
					this.match(TrinoSqlParser.PARTITION);
					this.state = 1386;
					this.match(TrinoSqlParser.BY);
					this.state = 1387;
					_localctx._expression = this.expression();
					_localctx._partition.push(_localctx._expression);
					this.state = 1392;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
						{
						{
						this.state = 1388;
						this.match(TrinoSqlParser.T__3);
						this.state = 1389;
						_localctx._expression = this.expression();
						_localctx._partition.push(_localctx._expression);
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
				if (_la === TrinoSqlParser.ORDER) {
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
					while (_la === TrinoSqlParser.T__3) {
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
				if (_la === TrinoSqlParser.MEASURES) {
					{
					this.state = 1409;
					this.match(TrinoSqlParser.MEASURES);
					this.state = 1410;
					this.measureDefinition();
					this.state = 1415;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
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
				if (_la === TrinoSqlParser.ALL || _la === TrinoSqlParser.ONE) {
					{
					this.state = 1420;
					this.rowsPerMatch();
					}
				}

				this.state = 1426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.AFTER) {
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
				if (_la === TrinoSqlParser.INITIAL || _la === TrinoSqlParser.SEEK) {
					{
					this.state = 1428;
					_la = this._input.LA(1);
					if (!(_la === TrinoSqlParser.INITIAL || _la === TrinoSqlParser.SEEK)) {
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
				if (_la === TrinoSqlParser.SUBSET) {
					{
					this.state = 1435;
					this.match(TrinoSqlParser.SUBSET);
					this.state = 1436;
					this.subsetDefinition();
					this.state = 1441;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
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
				while (_la === TrinoSqlParser.T__3) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 193, this._ctx) ) {
				case 1:
					{
					this.state = 1457;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.AS) {
						{
						this.state = 1456;
						this.match(TrinoSqlParser.AS);
						}
					}

					this.state = 1459;
					this.identifier();
					this.state = 1461;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 76, TrinoSqlParser.RULE_measureDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 78, TrinoSqlParser.RULE_rowsPerMatch);
		let _la: number;
		try {
			this.state = 1482;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.ONE:
				this.enterOuterAlt(_localctx, 1);
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
			case TrinoSqlParser.ALL:
				this.enterOuterAlt(_localctx, 2);
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
				if (_la === TrinoSqlParser.OMIT || _la === TrinoSqlParser.SHOW || _la === TrinoSqlParser.WITH) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 80, TrinoSqlParser.RULE_emptyMatchHandling);
		try {
			this.state = 1493;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.SHOW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1484;
				this.match(TrinoSqlParser.SHOW);
				this.state = 1485;
				this.match(TrinoSqlParser.EMPTY);
				this.state = 1486;
				this.match(TrinoSqlParser.MATCHES);
				}
				break;
			case TrinoSqlParser.OMIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1487;
				this.match(TrinoSqlParser.OMIT);
				this.state = 1488;
				this.match(TrinoSqlParser.EMPTY);
				this.state = 1489;
				this.match(TrinoSqlParser.MATCHES);
				}
				break;
			case TrinoSqlParser.WITH:
				this.enterOuterAlt(_localctx, 3);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 82, TrinoSqlParser.RULE_skipTo);
		try {
			this.state = 1514;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 198, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
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
				this.enterOuterAlt(_localctx, 2);
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
				this.enterOuterAlt(_localctx, 3);
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
				this.enterOuterAlt(_localctx, 4);
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
				this.enterOuterAlt(_localctx, 5);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 84, TrinoSqlParser.RULE_subsetDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1516;
			_localctx._name = this.identifier();
			this.state = 1517;
			this.match(TrinoSqlParser.EQ);
			this.state = 1518;
			this.match(TrinoSqlParser.T__1);
			this.state = 1519;
			_localctx._identifier = this.identifier();
			_localctx._union.push(_localctx._identifier);
			this.state = 1524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TrinoSqlParser.T__3) {
				{
				{
				this.state = 1520;
				this.match(TrinoSqlParser.T__3);
				this.state = 1521;
				_localctx._identifier = this.identifier();
				_localctx._union.push(_localctx._identifier);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 86, TrinoSqlParser.RULE_variableDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 88, TrinoSqlParser.RULE_aliasedRelation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1533;
			this.relationPrimary();
			this.state = 1541;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				{
				this.state = 1535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.AS) {
					{
					this.state = 1534;
					this.match(TrinoSqlParser.AS);
					}
				}

				this.state = 1537;
				this.identifier();
				this.state = 1539;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 201, this._ctx) ) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 90, TrinoSqlParser.RULE_columnAliases);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1543;
			this.match(TrinoSqlParser.T__1);
			this.state = 1544;
			this.identifier();
			this.state = 1549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TrinoSqlParser.T__3) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 92, TrinoSqlParser.RULE_relationPrimary);
		let _la: number;
		try {
			this.state = 1583;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 206, this._ctx) ) {
			case 1:
				_localctx = new TableNameContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1554;
				this.qualifiedName();
				}
				break;

			case 2:
				_localctx = new SubqueryRelationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
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
				_localctx = new UnnestContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
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
				while (_la === TrinoSqlParser.T__3) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 205, this._ctx) ) {
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
				_localctx = new LateralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
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
				_localctx = new ParenthesizedRelationContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 94, TrinoSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1585;
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
		let _startState: number = 96;
		this.enterRecursionRule(_localctx, 96, TrinoSqlParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1594;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.T__1:
			case TrinoSqlParser.ADD:
			case TrinoSqlParser.ADMIN:
			case TrinoSqlParser.AFTER:
			case TrinoSqlParser.ALL:
			case TrinoSqlParser.ANALYZE:
			case TrinoSqlParser.ANY:
			case TrinoSqlParser.ARRAY:
			case TrinoSqlParser.ASC:
			case TrinoSqlParser.AT:
			case TrinoSqlParser.AUTHORIZATION:
			case TrinoSqlParser.BERNOULLI:
			case TrinoSqlParser.CALL:
			case TrinoSqlParser.CASCADE:
			case TrinoSqlParser.CASE:
			case TrinoSqlParser.CAST:
			case TrinoSqlParser.CATALOGS:
			case TrinoSqlParser.COLUMN:
			case TrinoSqlParser.COLUMNS:
			case TrinoSqlParser.COMMENT:
			case TrinoSqlParser.COMMIT:
			case TrinoSqlParser.COMMITTED:
			case TrinoSqlParser.CURRENT:
			case TrinoSqlParser.CURRENT_CATALOG:
			case TrinoSqlParser.CURRENT_DATE:
			case TrinoSqlParser.CURRENT_PATH:
			case TrinoSqlParser.CURRENT_SCHEMA:
			case TrinoSqlParser.CURRENT_TIME:
			case TrinoSqlParser.CURRENT_TIMESTAMP:
			case TrinoSqlParser.CURRENT_USER:
			case TrinoSqlParser.DATA:
			case TrinoSqlParser.DATE:
			case TrinoSqlParser.DAY:
			case TrinoSqlParser.DEFAULT:
			case TrinoSqlParser.DEFINER:
			case TrinoSqlParser.DESC:
			case TrinoSqlParser.DEFINE:
			case TrinoSqlParser.DISTRIBUTED:
			case TrinoSqlParser.DOUBLE:
			case TrinoSqlParser.EMPTY:
			case TrinoSqlParser.EXCLUDING:
			case TrinoSqlParser.EXISTS:
			case TrinoSqlParser.EXPLAIN:
			case TrinoSqlParser.EXTRACT:
			case TrinoSqlParser.FALSE:
			case TrinoSqlParser.FETCH:
			case TrinoSqlParser.FILTER:
			case TrinoSqlParser.FINAL:
			case TrinoSqlParser.FIRST:
			case TrinoSqlParser.FOLLOWING:
			case TrinoSqlParser.FORMAT:
			case TrinoSqlParser.FUNCTIONS:
			case TrinoSqlParser.GRANT:
			case TrinoSqlParser.GRANTED:
			case TrinoSqlParser.GRANTS:
			case TrinoSqlParser.DENY:
			case TrinoSqlParser.GRAPHVIZ:
			case TrinoSqlParser.GROUPING:
			case TrinoSqlParser.GROUPS:
			case TrinoSqlParser.HOUR:
			case TrinoSqlParser.IF:
			case TrinoSqlParser.IGNORE:
			case TrinoSqlParser.INCLUDING:
			case TrinoSqlParser.INITIAL:
			case TrinoSqlParser.INPUT:
			case TrinoSqlParser.INTERVAL:
			case TrinoSqlParser.INVOKER:
			case TrinoSqlParser.IO:
			case TrinoSqlParser.ISOLATION:
			case TrinoSqlParser.JSON:
			case TrinoSqlParser.LAST:
			case TrinoSqlParser.LATERAL:
			case TrinoSqlParser.LEVEL:
			case TrinoSqlParser.LIMIT:
			case TrinoSqlParser.LOCAL:
			case TrinoSqlParser.LOCALTIME:
			case TrinoSqlParser.LOCALTIMESTAMP:
			case TrinoSqlParser.LOGICAL:
			case TrinoSqlParser.MAP:
			case TrinoSqlParser.MATCH:
			case TrinoSqlParser.MATCHED:
			case TrinoSqlParser.MATCHES:
			case TrinoSqlParser.MATCH_RECOGNIZE:
			case TrinoSqlParser.MATERIALIZED:
			case TrinoSqlParser.MEASURES:
			case TrinoSqlParser.MERGE:
			case TrinoSqlParser.MINUTE:
			case TrinoSqlParser.MONTH:
			case TrinoSqlParser.NEXT:
			case TrinoSqlParser.NFC:
			case TrinoSqlParser.NFD:
			case TrinoSqlParser.NFKC:
			case TrinoSqlParser.NFKD:
			case TrinoSqlParser.NO:
			case TrinoSqlParser.NONE:
			case TrinoSqlParser.NORMALIZE:
			case TrinoSqlParser.NULL:
			case TrinoSqlParser.NULLIF:
			case TrinoSqlParser.NULLS:
			case TrinoSqlParser.OFFSET:
			case TrinoSqlParser.OMIT:
			case TrinoSqlParser.ONE:
			case TrinoSqlParser.ONLY:
			case TrinoSqlParser.OPTION:
			case TrinoSqlParser.ORDINALITY:
			case TrinoSqlParser.OUTPUT:
			case TrinoSqlParser.OVER:
			case TrinoSqlParser.PARTITION:
			case TrinoSqlParser.PARTITIONS:
			case TrinoSqlParser.PAST:
			case TrinoSqlParser.PATH:
			case TrinoSqlParser.PATTERN:
			case TrinoSqlParser.PER:
			case TrinoSqlParser.PERMUTE:
			case TrinoSqlParser.POSITION:
			case TrinoSqlParser.PRECEDING:
			case TrinoSqlParser.PRECISION:
			case TrinoSqlParser.PRIVILEGES:
			case TrinoSqlParser.PROPERTIES:
			case TrinoSqlParser.RANGE:
			case TrinoSqlParser.READ:
			case TrinoSqlParser.REFRESH:
			case TrinoSqlParser.RENAME:
			case TrinoSqlParser.REPEATABLE:
			case TrinoSqlParser.REPLACE:
			case TrinoSqlParser.RESET:
			case TrinoSqlParser.RESPECT:
			case TrinoSqlParser.RESTRICT:
			case TrinoSqlParser.REVOKE:
			case TrinoSqlParser.ROLE:
			case TrinoSqlParser.ROLES:
			case TrinoSqlParser.ROLLBACK:
			case TrinoSqlParser.ROW:
			case TrinoSqlParser.ROWS:
			case TrinoSqlParser.RUNNING:
			case TrinoSqlParser.SCHEMA:
			case TrinoSqlParser.SCHEMAS:
			case TrinoSqlParser.SECOND:
			case TrinoSqlParser.SECURITY:
			case TrinoSqlParser.SEEK:
			case TrinoSqlParser.SERIALIZABLE:
			case TrinoSqlParser.SESSION:
			case TrinoSqlParser.SET:
			case TrinoSqlParser.SETS:
			case TrinoSqlParser.SHOW:
			case TrinoSqlParser.SOME:
			case TrinoSqlParser.START:
			case TrinoSqlParser.STATS:
			case TrinoSqlParser.SUBSET:
			case TrinoSqlParser.SUBSTRING:
			case TrinoSqlParser.SYSTEM:
			case TrinoSqlParser.TABLES:
			case TrinoSqlParser.TABLESAMPLE:
			case TrinoSqlParser.TEXT:
			case TrinoSqlParser.TIES:
			case TrinoSqlParser.TIME:
			case TrinoSqlParser.TIMESTAMP:
			case TrinoSqlParser.TO:
			case TrinoSqlParser.TRANSACTION:
			case TrinoSqlParser.TRUNCATE:
			case TrinoSqlParser.TRUE:
			case TrinoSqlParser.TRY_CAST:
			case TrinoSqlParser.TYPE:
			case TrinoSqlParser.UNBOUNDED:
			case TrinoSqlParser.UNCOMMITTED:
			case TrinoSqlParser.UNMATCHED:
			case TrinoSqlParser.UPDATE:
			case TrinoSqlParser.USE:
			case TrinoSqlParser.USER:
			case TrinoSqlParser.VALIDATE:
			case TrinoSqlParser.VERBOSE:
			case TrinoSqlParser.VIEW:
			case TrinoSqlParser.WINDOW:
			case TrinoSqlParser.WITHOUT:
			case TrinoSqlParser.WORK:
			case TrinoSqlParser.WRITE:
			case TrinoSqlParser.YEAR:
			case TrinoSqlParser.ZONE:
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

				this.state = 1588;
				(_localctx as PredicatedContext)._valueExpression = this.valueExpression(0);
				this.state = 1590;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 207, this._ctx) ) {
				case 1:
					{
					this.state = 1589;
					this.predicate((_localctx as PredicatedContext)._valueExpression);
					}
					break;
				}
				}
				break;
			case TrinoSqlParser.NOT:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1592;
				this.match(TrinoSqlParser.NOT);
				this.state = 1593;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1604;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1602;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 209, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_booleanExpression);
						this.state = 1596;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1597;
						(_localctx as LogicalBinaryContext)._operator = this.match(TrinoSqlParser.AND);
						this.state = 1598;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_booleanExpression);
						this.state = 1599;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1600;
						(_localctx as LogicalBinaryContext)._operator = this.match(TrinoSqlParser.OR);
						this.state = 1601;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1606;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
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
		this.enterRule(_localctx, 98, TrinoSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1668;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				_localctx = new ComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1607;
				this.comparisonOperator();
				this.state = 1608;
				(_localctx as ComparisonContext)._right = this.valueExpression(0);
				}
				break;

			case 2:
				_localctx = new QuantifiedComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
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
				_localctx = new BetweenContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1617;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.NOT) {
					{
					this.state = 1616;
					this.match(TrinoSqlParser.NOT);
					}
				}

				this.state = 1619;
				this.match(TrinoSqlParser.BETWEEN);
				this.state = 1620;
				(_localctx as BetweenContext)._lower = this.valueExpression(0);
				this.state = 1621;
				this.match(TrinoSqlParser.AND);
				this.state = 1622;
				(_localctx as BetweenContext)._upper = this.valueExpression(0);
				}
				break;

			case 4:
				_localctx = new InListContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1625;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.NOT) {
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
				while (_la === TrinoSqlParser.T__3) {
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
				_localctx = new InSubqueryContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.NOT) {
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
				_localctx = new LikeContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1648;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.NOT) {
					{
					this.state = 1647;
					this.match(TrinoSqlParser.NOT);
					}
				}

				this.state = 1650;
				this.match(TrinoSqlParser.LIKE);
				this.state = 1651;
				(_localctx as LikeContext)._pattern = this.valueExpression(0);
				this.state = 1654;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 216, this._ctx) ) {
				case 1:
					{
					this.state = 1652;
					this.match(TrinoSqlParser.ESCAPE);
					this.state = 1653;
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
				this.state = 1656;
				this.match(TrinoSqlParser.IS);
				this.state = 1658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.NOT) {
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
				_localctx = new DistinctFromContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1661;
				this.match(TrinoSqlParser.IS);
				this.state = 1663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.NOT) {
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
		let _startState: number = 100;
		this.enterRecursionRule(_localctx, 100, TrinoSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1674;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 220, this._ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1671;
				this.primaryExpression(0);
				}
				break;

			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1672;
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
				this.state = 1673;
				this.valueExpression(4);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1690;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1688;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 221, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_valueExpression);
						this.state = 1676;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1677;
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
						this.state = 1678;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_valueExpression);
						this.state = 1679;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1680;
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
						this.state = 1681;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;

					case 3:
						{
						_localctx = new ConcatenationContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ConcatenationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_valueExpression);
						this.state = 1682;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1683;
						this.match(TrinoSqlParser.CONCAT);
						this.state = 1684;
						(_localctx as ConcatenationContext)._right = this.valueExpression(2);
						}
						break;

					case 4:
						{
						_localctx = new AtTimeZoneContext(new ValueExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_valueExpression);
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
				_alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
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
		let _startState: number = 102;
		this.enterRecursionRule(_localctx, 102, TrinoSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1942;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 252, this._ctx) ) {
			case 1:
				{
				_localctx = new NullLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1694;
				this.match(TrinoSqlParser.NULL);
				}
				break;

			case 2:
				{
				_localctx = new IntervalLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1695;
				this.interval();
				}
				break;

			case 3:
				{
				_localctx = new TypeConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1696;
				this.identifier();
				this.state = 1697;
				this.string();
				}
				break;

			case 4:
				{
				_localctx = new TypeConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1699;
				this.match(TrinoSqlParser.DOUBLE);
				this.state = 1700;
				this.match(TrinoSqlParser.PRECISION);
				this.state = 1701;
				this.string();
				}
				break;

			case 5:
				{
				_localctx = new NumericLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1702;
				this.number();
				}
				break;

			case 6:
				{
				_localctx = new BooleanLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1703;
				this.booleanValue();
				}
				break;

			case 7:
				{
				_localctx = new StringLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1704;
				this.string();
				}
				break;

			case 8:
				{
				_localctx = new BinaryLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1705;
				this.match(TrinoSqlParser.BINARY_LITERAL);
				}
				break;

			case 9:
				{
				_localctx = new ParameterContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1706;
				this.match(TrinoSqlParser.QUESTION_MARK);
				}
				break;

			case 10:
				{
				_localctx = new PositionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				_localctx = new RowConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				} while (_la === TrinoSqlParser.T__3);
				this.state = 1722;
				this.match(TrinoSqlParser.T__2);
				}
				break;

			case 12:
				{
				_localctx = new RowConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1724;
				this.match(TrinoSqlParser.ROW);
				this.state = 1725;
				this.match(TrinoSqlParser.T__1);
				this.state = 1726;
				this.expression();
				this.state = 1731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__3) {
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
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				switch ( this.interpreter.adaptivePredict(this._input, 225, this._ctx) ) {
				case 1:
					{
					this.state = 1740;
					this.filter();
					}
					break;
				}
				this.state = 1744;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 226, this._ctx) ) {
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
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1747;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 227, this._ctx) ) {
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
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TrinoSqlParser.T__1) | (1 << TrinoSqlParser.ADD) | (1 << TrinoSqlParser.ADMIN) | (1 << TrinoSqlParser.AFTER) | (1 << TrinoSqlParser.ALL) | (1 << TrinoSqlParser.ANALYZE) | (1 << TrinoSqlParser.ANY) | (1 << TrinoSqlParser.ARRAY) | (1 << TrinoSqlParser.ASC) | (1 << TrinoSqlParser.AT) | (1 << TrinoSqlParser.AUTHORIZATION) | (1 << TrinoSqlParser.BERNOULLI))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TrinoSqlParser.CALL - 33)) | (1 << (TrinoSqlParser.CASCADE - 33)) | (1 << (TrinoSqlParser.CASE - 33)) | (1 << (TrinoSqlParser.CAST - 33)) | (1 << (TrinoSqlParser.CATALOGS - 33)) | (1 << (TrinoSqlParser.COLUMN - 33)) | (1 << (TrinoSqlParser.COLUMNS - 33)) | (1 << (TrinoSqlParser.COMMENT - 33)) | (1 << (TrinoSqlParser.COMMIT - 33)) | (1 << (TrinoSqlParser.COMMITTED - 33)) | (1 << (TrinoSqlParser.CURRENT - 33)) | (1 << (TrinoSqlParser.CURRENT_CATALOG - 33)) | (1 << (TrinoSqlParser.CURRENT_DATE - 33)) | (1 << (TrinoSqlParser.CURRENT_PATH - 33)) | (1 << (TrinoSqlParser.CURRENT_SCHEMA - 33)) | (1 << (TrinoSqlParser.CURRENT_TIME - 33)) | (1 << (TrinoSqlParser.CURRENT_TIMESTAMP - 33)) | (1 << (TrinoSqlParser.CURRENT_USER - 33)) | (1 << (TrinoSqlParser.DATA - 33)) | (1 << (TrinoSqlParser.DATE - 33)) | (1 << (TrinoSqlParser.DAY - 33)) | (1 << (TrinoSqlParser.DEFAULT - 33)) | (1 << (TrinoSqlParser.DEFINER - 33)) | (1 << (TrinoSqlParser.DESC - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (TrinoSqlParser.DEFINE - 65)) | (1 << (TrinoSqlParser.DISTINCT - 65)) | (1 << (TrinoSqlParser.DISTRIBUTED - 65)) | (1 << (TrinoSqlParser.DOUBLE - 65)) | (1 << (TrinoSqlParser.EMPTY - 65)) | (1 << (TrinoSqlParser.EXCLUDING - 65)) | (1 << (TrinoSqlParser.EXISTS - 65)) | (1 << (TrinoSqlParser.EXPLAIN - 65)) | (1 << (TrinoSqlParser.EXTRACT - 65)) | (1 << (TrinoSqlParser.FALSE - 65)) | (1 << (TrinoSqlParser.FETCH - 65)) | (1 << (TrinoSqlParser.FILTER - 65)) | (1 << (TrinoSqlParser.FINAL - 65)) | (1 << (TrinoSqlParser.FIRST - 65)) | (1 << (TrinoSqlParser.FOLLOWING - 65)) | (1 << (TrinoSqlParser.FORMAT - 65)) | (1 << (TrinoSqlParser.FUNCTIONS - 65)) | (1 << (TrinoSqlParser.GRANT - 65)) | (1 << (TrinoSqlParser.GRANTED - 65)) | (1 << (TrinoSqlParser.GRANTS - 65)) | (1 << (TrinoSqlParser.DENY - 65)) | (1 << (TrinoSqlParser.GRAPHVIZ - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (TrinoSqlParser.GROUPING - 97)) | (1 << (TrinoSqlParser.GROUPS - 97)) | (1 << (TrinoSqlParser.HOUR - 97)) | (1 << (TrinoSqlParser.IF - 97)) | (1 << (TrinoSqlParser.IGNORE - 97)) | (1 << (TrinoSqlParser.INCLUDING - 97)) | (1 << (TrinoSqlParser.INITIAL - 97)) | (1 << (TrinoSqlParser.INPUT - 97)) | (1 << (TrinoSqlParser.INTERVAL - 97)) | (1 << (TrinoSqlParser.INVOKER - 97)) | (1 << (TrinoSqlParser.IO - 97)) | (1 << (TrinoSqlParser.ISOLATION - 97)) | (1 << (TrinoSqlParser.JSON - 97)) | (1 << (TrinoSqlParser.LAST - 97)) | (1 << (TrinoSqlParser.LATERAL - 97)) | (1 << (TrinoSqlParser.LEVEL - 97)) | (1 << (TrinoSqlParser.LIMIT - 97)) | (1 << (TrinoSqlParser.LOCAL - 97)) | (1 << (TrinoSqlParser.LOCALTIME - 97)) | (1 << (TrinoSqlParser.LOCALTIMESTAMP - 97)) | (1 << (TrinoSqlParser.LOGICAL - 97)) | (1 << (TrinoSqlParser.MAP - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (TrinoSqlParser.MATCH - 129)) | (1 << (TrinoSqlParser.MATCHED - 129)) | (1 << (TrinoSqlParser.MATCHES - 129)) | (1 << (TrinoSqlParser.MATCH_RECOGNIZE - 129)) | (1 << (TrinoSqlParser.MATERIALIZED - 129)) | (1 << (TrinoSqlParser.MEASURES - 129)) | (1 << (TrinoSqlParser.MERGE - 129)) | (1 << (TrinoSqlParser.MINUTE - 129)) | (1 << (TrinoSqlParser.MONTH - 129)) | (1 << (TrinoSqlParser.NEXT - 129)) | (1 << (TrinoSqlParser.NFC - 129)) | (1 << (TrinoSqlParser.NFD - 129)) | (1 << (TrinoSqlParser.NFKC - 129)) | (1 << (TrinoSqlParser.NFKD - 129)) | (1 << (TrinoSqlParser.NO - 129)) | (1 << (TrinoSqlParser.NONE - 129)) | (1 << (TrinoSqlParser.NORMALIZE - 129)) | (1 << (TrinoSqlParser.NOT - 129)) | (1 << (TrinoSqlParser.NULL - 129)) | (1 << (TrinoSqlParser.NULLIF - 129)) | (1 << (TrinoSqlParser.NULLS - 129)) | (1 << (TrinoSqlParser.OFFSET - 129)) | (1 << (TrinoSqlParser.OMIT - 129)) | (1 << (TrinoSqlParser.ONE - 129)) | (1 << (TrinoSqlParser.ONLY - 129)) | (1 << (TrinoSqlParser.OPTION - 129)) | (1 << (TrinoSqlParser.ORDINALITY - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (TrinoSqlParser.OUTPUT - 161)) | (1 << (TrinoSqlParser.OVER - 161)) | (1 << (TrinoSqlParser.PARTITION - 161)) | (1 << (TrinoSqlParser.PARTITIONS - 161)) | (1 << (TrinoSqlParser.PAST - 161)) | (1 << (TrinoSqlParser.PATH - 161)) | (1 << (TrinoSqlParser.PATTERN - 161)) | (1 << (TrinoSqlParser.PER - 161)) | (1 << (TrinoSqlParser.PERMUTE - 161)) | (1 << (TrinoSqlParser.POSITION - 161)) | (1 << (TrinoSqlParser.PRECEDING - 161)) | (1 << (TrinoSqlParser.PRECISION - 161)) | (1 << (TrinoSqlParser.PRIVILEGES - 161)) | (1 << (TrinoSqlParser.PROPERTIES - 161)) | (1 << (TrinoSqlParser.RANGE - 161)) | (1 << (TrinoSqlParser.READ - 161)) | (1 << (TrinoSqlParser.REFRESH - 161)) | (1 << (TrinoSqlParser.RENAME - 161)) | (1 << (TrinoSqlParser.REPEATABLE - 161)) | (1 << (TrinoSqlParser.REPLACE - 161)) | (1 << (TrinoSqlParser.RESET - 161)) | (1 << (TrinoSqlParser.RESPECT - 161)) | (1 << (TrinoSqlParser.RESTRICT - 161)) | (1 << (TrinoSqlParser.REVOKE - 161)) | (1 << (TrinoSqlParser.ROLE - 161)) | (1 << (TrinoSqlParser.ROLES - 161)) | (1 << (TrinoSqlParser.ROLLBACK - 161)) | (1 << (TrinoSqlParser.ROW - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (TrinoSqlParser.ROWS - 193)) | (1 << (TrinoSqlParser.RUNNING - 193)) | (1 << (TrinoSqlParser.SCHEMA - 193)) | (1 << (TrinoSqlParser.SCHEMAS - 193)) | (1 << (TrinoSqlParser.SECOND - 193)) | (1 << (TrinoSqlParser.SECURITY - 193)) | (1 << (TrinoSqlParser.SEEK - 193)) | (1 << (TrinoSqlParser.SERIALIZABLE - 193)) | (1 << (TrinoSqlParser.SESSION - 193)) | (1 << (TrinoSqlParser.SET - 193)) | (1 << (TrinoSqlParser.SETS - 193)) | (1 << (TrinoSqlParser.SHOW - 193)) | (1 << (TrinoSqlParser.SOME - 193)) | (1 << (TrinoSqlParser.START - 193)) | (1 << (TrinoSqlParser.STATS - 193)) | (1 << (TrinoSqlParser.SUBSET - 193)) | (1 << (TrinoSqlParser.SUBSTRING - 193)) | (1 << (TrinoSqlParser.SYSTEM - 193)) | (1 << (TrinoSqlParser.TABLES - 193)) | (1 << (TrinoSqlParser.TABLESAMPLE - 193)) | (1 << (TrinoSqlParser.TEXT - 193)) | (1 << (TrinoSqlParser.TIES - 193)) | (1 << (TrinoSqlParser.TIME - 193)) | (1 << (TrinoSqlParser.TIMESTAMP - 193)) | (1 << (TrinoSqlParser.TO - 193)) | (1 << (TrinoSqlParser.TRANSACTION - 193)) | (1 << (TrinoSqlParser.TRUNCATE - 193)) | (1 << (TrinoSqlParser.TRUE - 193)) | (1 << (TrinoSqlParser.TRY_CAST - 193)))) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (TrinoSqlParser.TYPE - 225)) | (1 << (TrinoSqlParser.UNBOUNDED - 225)) | (1 << (TrinoSqlParser.UNCOMMITTED - 225)) | (1 << (TrinoSqlParser.UNMATCHED - 225)) | (1 << (TrinoSqlParser.UPDATE - 225)) | (1 << (TrinoSqlParser.USE - 225)) | (1 << (TrinoSqlParser.USER - 225)) | (1 << (TrinoSqlParser.VALIDATE - 225)) | (1 << (TrinoSqlParser.VERBOSE - 225)) | (1 << (TrinoSqlParser.VIEW - 225)) | (1 << (TrinoSqlParser.WINDOW - 225)) | (1 << (TrinoSqlParser.WITHOUT - 225)) | (1 << (TrinoSqlParser.WORK - 225)) | (1 << (TrinoSqlParser.WRITE - 225)) | (1 << (TrinoSqlParser.YEAR - 225)) | (1 << (TrinoSqlParser.ZONE - 225)) | (1 << (TrinoSqlParser.PLUS - 225)) | (1 << (TrinoSqlParser.MINUS - 225)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (TrinoSqlParser.QUESTION_MARK - 261)) | (1 << (TrinoSqlParser.STRING - 261)) | (1 << (TrinoSqlParser.UNICODE_STRING - 261)) | (1 << (TrinoSqlParser.BINARY_LITERAL - 261)) | (1 << (TrinoSqlParser.INTEGER_VALUE - 261)) | (1 << (TrinoSqlParser.DECIMAL_VALUE - 261)) | (1 << (TrinoSqlParser.DOUBLE_VALUE - 261)) | (1 << (TrinoSqlParser.IDENTIFIER - 261)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 261)))) !== 0)) {
					{
					this.state = 1752;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 228, this._ctx) ) {
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
					while (_la === TrinoSqlParser.T__3) {
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
				if (_la === TrinoSqlParser.ORDER) {
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
					while (_la === TrinoSqlParser.T__3) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 233, this._ctx) ) {
				case 1:
					{
					this.state = 1777;
					this.filter();
					}
					break;
				}
				this.state = 1784;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 235, this._ctx) ) {
				case 1:
					{
					this.state = 1781;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TrinoSqlParser.IGNORE || _la === TrinoSqlParser.RESPECT) {
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
				_localctx = new MeasureContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1786;
				this.identifier();
				this.state = 1787;
				this.over();
				}
				break;

			case 16:
				{
				_localctx = new LambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				_localctx = new LambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1793;
				this.match(TrinoSqlParser.T__1);
				this.state = 1802;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (TrinoSqlParser.ADD - 17)) | (1 << (TrinoSqlParser.ADMIN - 17)) | (1 << (TrinoSqlParser.AFTER - 17)) | (1 << (TrinoSqlParser.ALL - 17)) | (1 << (TrinoSqlParser.ANALYZE - 17)) | (1 << (TrinoSqlParser.ANY - 17)) | (1 << (TrinoSqlParser.ARRAY - 17)) | (1 << (TrinoSqlParser.ASC - 17)) | (1 << (TrinoSqlParser.AT - 17)) | (1 << (TrinoSqlParser.AUTHORIZATION - 17)) | (1 << (TrinoSqlParser.BERNOULLI - 17)) | (1 << (TrinoSqlParser.CALL - 17)) | (1 << (TrinoSqlParser.CASCADE - 17)) | (1 << (TrinoSqlParser.CATALOGS - 17)) | (1 << (TrinoSqlParser.COLUMN - 17)) | (1 << (TrinoSqlParser.COLUMNS - 17)) | (1 << (TrinoSqlParser.COMMENT - 17)) | (1 << (TrinoSqlParser.COMMIT - 17)) | (1 << (TrinoSqlParser.COMMITTED - 17)) | (1 << (TrinoSqlParser.CURRENT - 17)))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (TrinoSqlParser.DATA - 56)) | (1 << (TrinoSqlParser.DATE - 56)) | (1 << (TrinoSqlParser.DAY - 56)) | (1 << (TrinoSqlParser.DEFAULT - 56)) | (1 << (TrinoSqlParser.DEFINER - 56)) | (1 << (TrinoSqlParser.DESC - 56)) | (1 << (TrinoSqlParser.DEFINE - 56)) | (1 << (TrinoSqlParser.DISTRIBUTED - 56)) | (1 << (TrinoSqlParser.DOUBLE - 56)) | (1 << (TrinoSqlParser.EMPTY - 56)) | (1 << (TrinoSqlParser.EXCLUDING - 56)) | (1 << (TrinoSqlParser.EXPLAIN - 56)) | (1 << (TrinoSqlParser.FETCH - 56)) | (1 << (TrinoSqlParser.FILTER - 56)) | (1 << (TrinoSqlParser.FINAL - 56)) | (1 << (TrinoSqlParser.FIRST - 56)) | (1 << (TrinoSqlParser.FOLLOWING - 56)) | (1 << (TrinoSqlParser.FORMAT - 56)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (TrinoSqlParser.FUNCTIONS - 90)) | (1 << (TrinoSqlParser.GRANT - 90)) | (1 << (TrinoSqlParser.GRANTED - 90)) | (1 << (TrinoSqlParser.GRANTS - 90)) | (1 << (TrinoSqlParser.DENY - 90)) | (1 << (TrinoSqlParser.GRAPHVIZ - 90)) | (1 << (TrinoSqlParser.GROUPS - 90)) | (1 << (TrinoSqlParser.HOUR - 90)) | (1 << (TrinoSqlParser.IF - 90)) | (1 << (TrinoSqlParser.IGNORE - 90)) | (1 << (TrinoSqlParser.INCLUDING - 90)) | (1 << (TrinoSqlParser.INITIAL - 90)) | (1 << (TrinoSqlParser.INPUT - 90)) | (1 << (TrinoSqlParser.INTERVAL - 90)) | (1 << (TrinoSqlParser.INVOKER - 90)) | (1 << (TrinoSqlParser.IO - 90)) | (1 << (TrinoSqlParser.ISOLATION - 90)) | (1 << (TrinoSqlParser.JSON - 90)) | (1 << (TrinoSqlParser.LAST - 90)) | (1 << (TrinoSqlParser.LATERAL - 90)) | (1 << (TrinoSqlParser.LEVEL - 90)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TrinoSqlParser.LIMIT - 123)) | (1 << (TrinoSqlParser.LOCAL - 123)) | (1 << (TrinoSqlParser.LOGICAL - 123)) | (1 << (TrinoSqlParser.MAP - 123)) | (1 << (TrinoSqlParser.MATCH - 123)) | (1 << (TrinoSqlParser.MATCHED - 123)) | (1 << (TrinoSqlParser.MATCHES - 123)) | (1 << (TrinoSqlParser.MATCH_RECOGNIZE - 123)) | (1 << (TrinoSqlParser.MATERIALIZED - 123)) | (1 << (TrinoSqlParser.MEASURES - 123)) | (1 << (TrinoSqlParser.MERGE - 123)) | (1 << (TrinoSqlParser.MINUTE - 123)) | (1 << (TrinoSqlParser.MONTH - 123)) | (1 << (TrinoSqlParser.NEXT - 123)) | (1 << (TrinoSqlParser.NFC - 123)) | (1 << (TrinoSqlParser.NFD - 123)) | (1 << (TrinoSqlParser.NFKC - 123)) | (1 << (TrinoSqlParser.NFKD - 123)) | (1 << (TrinoSqlParser.NO - 123)) | (1 << (TrinoSqlParser.NONE - 123)) | (1 << (TrinoSqlParser.NULLIF - 123)) | (1 << (TrinoSqlParser.NULLS - 123)) | (1 << (TrinoSqlParser.OFFSET - 123)) | (1 << (TrinoSqlParser.OMIT - 123)) | (1 << (TrinoSqlParser.ONE - 123)))) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (TrinoSqlParser.ONLY - 155)) | (1 << (TrinoSqlParser.OPTION - 155)) | (1 << (TrinoSqlParser.ORDINALITY - 155)) | (1 << (TrinoSqlParser.OUTPUT - 155)) | (1 << (TrinoSqlParser.OVER - 155)) | (1 << (TrinoSqlParser.PARTITION - 155)) | (1 << (TrinoSqlParser.PARTITIONS - 155)) | (1 << (TrinoSqlParser.PAST - 155)) | (1 << (TrinoSqlParser.PATH - 155)) | (1 << (TrinoSqlParser.PATTERN - 155)) | (1 << (TrinoSqlParser.PER - 155)) | (1 << (TrinoSqlParser.PERMUTE - 155)) | (1 << (TrinoSqlParser.POSITION - 155)) | (1 << (TrinoSqlParser.PRECEDING - 155)) | (1 << (TrinoSqlParser.PRECISION - 155)) | (1 << (TrinoSqlParser.PRIVILEGES - 155)) | (1 << (TrinoSqlParser.PROPERTIES - 155)) | (1 << (TrinoSqlParser.RANGE - 155)) | (1 << (TrinoSqlParser.READ - 155)) | (1 << (TrinoSqlParser.REFRESH - 155)) | (1 << (TrinoSqlParser.RENAME - 155)) | (1 << (TrinoSqlParser.REPEATABLE - 155)) | (1 << (TrinoSqlParser.REPLACE - 155)) | (1 << (TrinoSqlParser.RESET - 155)) | (1 << (TrinoSqlParser.RESPECT - 155)) | (1 << (TrinoSqlParser.RESTRICT - 155)) | (1 << (TrinoSqlParser.REVOKE - 155)))) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & ((1 << (TrinoSqlParser.ROLE - 188)) | (1 << (TrinoSqlParser.ROLES - 188)) | (1 << (TrinoSqlParser.ROLLBACK - 188)) | (1 << (TrinoSqlParser.ROW - 188)) | (1 << (TrinoSqlParser.ROWS - 188)) | (1 << (TrinoSqlParser.RUNNING - 188)) | (1 << (TrinoSqlParser.SCHEMA - 188)) | (1 << (TrinoSqlParser.SCHEMAS - 188)) | (1 << (TrinoSqlParser.SECOND - 188)) | (1 << (TrinoSqlParser.SECURITY - 188)) | (1 << (TrinoSqlParser.SEEK - 188)) | (1 << (TrinoSqlParser.SERIALIZABLE - 188)) | (1 << (TrinoSqlParser.SESSION - 188)) | (1 << (TrinoSqlParser.SET - 188)) | (1 << (TrinoSqlParser.SETS - 188)) | (1 << (TrinoSqlParser.SHOW - 188)) | (1 << (TrinoSqlParser.SOME - 188)) | (1 << (TrinoSqlParser.START - 188)) | (1 << (TrinoSqlParser.STATS - 188)) | (1 << (TrinoSqlParser.SUBSET - 188)) | (1 << (TrinoSqlParser.SUBSTRING - 188)) | (1 << (TrinoSqlParser.SYSTEM - 188)) | (1 << (TrinoSqlParser.TABLES - 188)) | (1 << (TrinoSqlParser.TABLESAMPLE - 188)) | (1 << (TrinoSqlParser.TEXT - 188)) | (1 << (TrinoSqlParser.TIES - 188)) | (1 << (TrinoSqlParser.TIME - 188)) | (1 << (TrinoSqlParser.TIMESTAMP - 188)))) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & ((1 << (TrinoSqlParser.TO - 220)) | (1 << (TrinoSqlParser.TRANSACTION - 220)) | (1 << (TrinoSqlParser.TRUNCATE - 220)) | (1 << (TrinoSqlParser.TRY_CAST - 220)) | (1 << (TrinoSqlParser.TYPE - 220)) | (1 << (TrinoSqlParser.UNBOUNDED - 220)) | (1 << (TrinoSqlParser.UNCOMMITTED - 220)) | (1 << (TrinoSqlParser.UNMATCHED - 220)) | (1 << (TrinoSqlParser.UPDATE - 220)) | (1 << (TrinoSqlParser.USE - 220)) | (1 << (TrinoSqlParser.USER - 220)) | (1 << (TrinoSqlParser.VALIDATE - 220)) | (1 << (TrinoSqlParser.VERBOSE - 220)) | (1 << (TrinoSqlParser.VIEW - 220)) | (1 << (TrinoSqlParser.WINDOW - 220)) | (1 << (TrinoSqlParser.WITHOUT - 220)) | (1 << (TrinoSqlParser.WORK - 220)) | (1 << (TrinoSqlParser.WRITE - 220)) | (1 << (TrinoSqlParser.YEAR - 220)) | (1 << (TrinoSqlParser.ZONE - 220)))) !== 0) || ((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & ((1 << (TrinoSqlParser.IDENTIFIER - 268)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 268)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 268)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 268)))) !== 0)) {
					{
					this.state = 1794;
					this.identifier();
					this.state = 1799;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
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
				_localctx = new SubqueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				_localctx = new ExistsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				_localctx = new SimpleCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1816;
				this.match(TrinoSqlParser.CASE);
				this.state = 1817;
				(_localctx as SimpleCaseContext)._operand = this.expression();
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
				} while (_la === TrinoSqlParser.WHEN);
				this.state = 1825;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.ELSE) {
					{
					this.state = 1823;
					this.match(TrinoSqlParser.ELSE);
					this.state = 1824;
					(_localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1827;
				this.match(TrinoSqlParser.END);
				}
				break;

			case 21:
				{
				_localctx = new SearchedCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				} while (_la === TrinoSqlParser.WHEN);
				this.state = 1837;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.ELSE) {
					{
					this.state = 1835;
					this.match(TrinoSqlParser.ELSE);
					this.state = 1836;
					(_localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1839;
				this.match(TrinoSqlParser.END);
				}
				break;

			case 22:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1841;
				this.match(TrinoSqlParser.CAST);
				this.state = 1842;
				this.match(TrinoSqlParser.T__1);
				this.state = 1843;
				this.expression();
				this.state = 1844;
				this.match(TrinoSqlParser.AS);
				this.state = 1845;
				this.type(0);
				this.state = 1846;
				this.match(TrinoSqlParser.T__2);
				}
				break;

			case 23:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1848;
				this.match(TrinoSqlParser.TRY_CAST);
				this.state = 1849;
				this.match(TrinoSqlParser.T__1);
				this.state = 1850;
				this.expression();
				this.state = 1851;
				this.match(TrinoSqlParser.AS);
				this.state = 1852;
				this.type(0);
				this.state = 1853;
				this.match(TrinoSqlParser.T__2);
				}
				break;

			case 24:
				{
				_localctx = new ArrayConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1855;
				this.match(TrinoSqlParser.ARRAY);
				this.state = 1856;
				this.match(TrinoSqlParser.T__6);
				this.state = 1865;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TrinoSqlParser.T__1) | (1 << TrinoSqlParser.ADD) | (1 << TrinoSqlParser.ADMIN) | (1 << TrinoSqlParser.AFTER) | (1 << TrinoSqlParser.ALL) | (1 << TrinoSqlParser.ANALYZE) | (1 << TrinoSqlParser.ANY) | (1 << TrinoSqlParser.ARRAY) | (1 << TrinoSqlParser.ASC) | (1 << TrinoSqlParser.AT) | (1 << TrinoSqlParser.AUTHORIZATION) | (1 << TrinoSqlParser.BERNOULLI))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TrinoSqlParser.CALL - 33)) | (1 << (TrinoSqlParser.CASCADE - 33)) | (1 << (TrinoSqlParser.CASE - 33)) | (1 << (TrinoSqlParser.CAST - 33)) | (1 << (TrinoSqlParser.CATALOGS - 33)) | (1 << (TrinoSqlParser.COLUMN - 33)) | (1 << (TrinoSqlParser.COLUMNS - 33)) | (1 << (TrinoSqlParser.COMMENT - 33)) | (1 << (TrinoSqlParser.COMMIT - 33)) | (1 << (TrinoSqlParser.COMMITTED - 33)) | (1 << (TrinoSqlParser.CURRENT - 33)) | (1 << (TrinoSqlParser.CURRENT_CATALOG - 33)) | (1 << (TrinoSqlParser.CURRENT_DATE - 33)) | (1 << (TrinoSqlParser.CURRENT_PATH - 33)) | (1 << (TrinoSqlParser.CURRENT_SCHEMA - 33)) | (1 << (TrinoSqlParser.CURRENT_TIME - 33)) | (1 << (TrinoSqlParser.CURRENT_TIMESTAMP - 33)) | (1 << (TrinoSqlParser.CURRENT_USER - 33)) | (1 << (TrinoSqlParser.DATA - 33)) | (1 << (TrinoSqlParser.DATE - 33)) | (1 << (TrinoSqlParser.DAY - 33)) | (1 << (TrinoSqlParser.DEFAULT - 33)) | (1 << (TrinoSqlParser.DEFINER - 33)) | (1 << (TrinoSqlParser.DESC - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (TrinoSqlParser.DEFINE - 65)) | (1 << (TrinoSqlParser.DISTRIBUTED - 65)) | (1 << (TrinoSqlParser.DOUBLE - 65)) | (1 << (TrinoSqlParser.EMPTY - 65)) | (1 << (TrinoSqlParser.EXCLUDING - 65)) | (1 << (TrinoSqlParser.EXISTS - 65)) | (1 << (TrinoSqlParser.EXPLAIN - 65)) | (1 << (TrinoSqlParser.EXTRACT - 65)) | (1 << (TrinoSqlParser.FALSE - 65)) | (1 << (TrinoSqlParser.FETCH - 65)) | (1 << (TrinoSqlParser.FILTER - 65)) | (1 << (TrinoSqlParser.FINAL - 65)) | (1 << (TrinoSqlParser.FIRST - 65)) | (1 << (TrinoSqlParser.FOLLOWING - 65)) | (1 << (TrinoSqlParser.FORMAT - 65)) | (1 << (TrinoSqlParser.FUNCTIONS - 65)) | (1 << (TrinoSqlParser.GRANT - 65)) | (1 << (TrinoSqlParser.GRANTED - 65)) | (1 << (TrinoSqlParser.GRANTS - 65)) | (1 << (TrinoSqlParser.DENY - 65)) | (1 << (TrinoSqlParser.GRAPHVIZ - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (TrinoSqlParser.GROUPING - 97)) | (1 << (TrinoSqlParser.GROUPS - 97)) | (1 << (TrinoSqlParser.HOUR - 97)) | (1 << (TrinoSqlParser.IF - 97)) | (1 << (TrinoSqlParser.IGNORE - 97)) | (1 << (TrinoSqlParser.INCLUDING - 97)) | (1 << (TrinoSqlParser.INITIAL - 97)) | (1 << (TrinoSqlParser.INPUT - 97)) | (1 << (TrinoSqlParser.INTERVAL - 97)) | (1 << (TrinoSqlParser.INVOKER - 97)) | (1 << (TrinoSqlParser.IO - 97)) | (1 << (TrinoSqlParser.ISOLATION - 97)) | (1 << (TrinoSqlParser.JSON - 97)) | (1 << (TrinoSqlParser.LAST - 97)) | (1 << (TrinoSqlParser.LATERAL - 97)) | (1 << (TrinoSqlParser.LEVEL - 97)) | (1 << (TrinoSqlParser.LIMIT - 97)) | (1 << (TrinoSqlParser.LOCAL - 97)) | (1 << (TrinoSqlParser.LOCALTIME - 97)) | (1 << (TrinoSqlParser.LOCALTIMESTAMP - 97)) | (1 << (TrinoSqlParser.LOGICAL - 97)) | (1 << (TrinoSqlParser.MAP - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (TrinoSqlParser.MATCH - 129)) | (1 << (TrinoSqlParser.MATCHED - 129)) | (1 << (TrinoSqlParser.MATCHES - 129)) | (1 << (TrinoSqlParser.MATCH_RECOGNIZE - 129)) | (1 << (TrinoSqlParser.MATERIALIZED - 129)) | (1 << (TrinoSqlParser.MEASURES - 129)) | (1 << (TrinoSqlParser.MERGE - 129)) | (1 << (TrinoSqlParser.MINUTE - 129)) | (1 << (TrinoSqlParser.MONTH - 129)) | (1 << (TrinoSqlParser.NEXT - 129)) | (1 << (TrinoSqlParser.NFC - 129)) | (1 << (TrinoSqlParser.NFD - 129)) | (1 << (TrinoSqlParser.NFKC - 129)) | (1 << (TrinoSqlParser.NFKD - 129)) | (1 << (TrinoSqlParser.NO - 129)) | (1 << (TrinoSqlParser.NONE - 129)) | (1 << (TrinoSqlParser.NORMALIZE - 129)) | (1 << (TrinoSqlParser.NOT - 129)) | (1 << (TrinoSqlParser.NULL - 129)) | (1 << (TrinoSqlParser.NULLIF - 129)) | (1 << (TrinoSqlParser.NULLS - 129)) | (1 << (TrinoSqlParser.OFFSET - 129)) | (1 << (TrinoSqlParser.OMIT - 129)) | (1 << (TrinoSqlParser.ONE - 129)) | (1 << (TrinoSqlParser.ONLY - 129)) | (1 << (TrinoSqlParser.OPTION - 129)) | (1 << (TrinoSqlParser.ORDINALITY - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (TrinoSqlParser.OUTPUT - 161)) | (1 << (TrinoSqlParser.OVER - 161)) | (1 << (TrinoSqlParser.PARTITION - 161)) | (1 << (TrinoSqlParser.PARTITIONS - 161)) | (1 << (TrinoSqlParser.PAST - 161)) | (1 << (TrinoSqlParser.PATH - 161)) | (1 << (TrinoSqlParser.PATTERN - 161)) | (1 << (TrinoSqlParser.PER - 161)) | (1 << (TrinoSqlParser.PERMUTE - 161)) | (1 << (TrinoSqlParser.POSITION - 161)) | (1 << (TrinoSqlParser.PRECEDING - 161)) | (1 << (TrinoSqlParser.PRECISION - 161)) | (1 << (TrinoSqlParser.PRIVILEGES - 161)) | (1 << (TrinoSqlParser.PROPERTIES - 161)) | (1 << (TrinoSqlParser.RANGE - 161)) | (1 << (TrinoSqlParser.READ - 161)) | (1 << (TrinoSqlParser.REFRESH - 161)) | (1 << (TrinoSqlParser.RENAME - 161)) | (1 << (TrinoSqlParser.REPEATABLE - 161)) | (1 << (TrinoSqlParser.REPLACE - 161)) | (1 << (TrinoSqlParser.RESET - 161)) | (1 << (TrinoSqlParser.RESPECT - 161)) | (1 << (TrinoSqlParser.RESTRICT - 161)) | (1 << (TrinoSqlParser.REVOKE - 161)) | (1 << (TrinoSqlParser.ROLE - 161)) | (1 << (TrinoSqlParser.ROLES - 161)) | (1 << (TrinoSqlParser.ROLLBACK - 161)) | (1 << (TrinoSqlParser.ROW - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (TrinoSqlParser.ROWS - 193)) | (1 << (TrinoSqlParser.RUNNING - 193)) | (1 << (TrinoSqlParser.SCHEMA - 193)) | (1 << (TrinoSqlParser.SCHEMAS - 193)) | (1 << (TrinoSqlParser.SECOND - 193)) | (1 << (TrinoSqlParser.SECURITY - 193)) | (1 << (TrinoSqlParser.SEEK - 193)) | (1 << (TrinoSqlParser.SERIALIZABLE - 193)) | (1 << (TrinoSqlParser.SESSION - 193)) | (1 << (TrinoSqlParser.SET - 193)) | (1 << (TrinoSqlParser.SETS - 193)) | (1 << (TrinoSqlParser.SHOW - 193)) | (1 << (TrinoSqlParser.SOME - 193)) | (1 << (TrinoSqlParser.START - 193)) | (1 << (TrinoSqlParser.STATS - 193)) | (1 << (TrinoSqlParser.SUBSET - 193)) | (1 << (TrinoSqlParser.SUBSTRING - 193)) | (1 << (TrinoSqlParser.SYSTEM - 193)) | (1 << (TrinoSqlParser.TABLES - 193)) | (1 << (TrinoSqlParser.TABLESAMPLE - 193)) | (1 << (TrinoSqlParser.TEXT - 193)) | (1 << (TrinoSqlParser.TIES - 193)) | (1 << (TrinoSqlParser.TIME - 193)) | (1 << (TrinoSqlParser.TIMESTAMP - 193)) | (1 << (TrinoSqlParser.TO - 193)) | (1 << (TrinoSqlParser.TRANSACTION - 193)) | (1 << (TrinoSqlParser.TRUNCATE - 193)) | (1 << (TrinoSqlParser.TRUE - 193)) | (1 << (TrinoSqlParser.TRY_CAST - 193)))) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (TrinoSqlParser.TYPE - 225)) | (1 << (TrinoSqlParser.UNBOUNDED - 225)) | (1 << (TrinoSqlParser.UNCOMMITTED - 225)) | (1 << (TrinoSqlParser.UNMATCHED - 225)) | (1 << (TrinoSqlParser.UPDATE - 225)) | (1 << (TrinoSqlParser.USE - 225)) | (1 << (TrinoSqlParser.USER - 225)) | (1 << (TrinoSqlParser.VALIDATE - 225)) | (1 << (TrinoSqlParser.VERBOSE - 225)) | (1 << (TrinoSqlParser.VIEW - 225)) | (1 << (TrinoSqlParser.WINDOW - 225)) | (1 << (TrinoSqlParser.WITHOUT - 225)) | (1 << (TrinoSqlParser.WORK - 225)) | (1 << (TrinoSqlParser.WRITE - 225)) | (1 << (TrinoSqlParser.YEAR - 225)) | (1 << (TrinoSqlParser.ZONE - 225)) | (1 << (TrinoSqlParser.PLUS - 225)) | (1 << (TrinoSqlParser.MINUS - 225)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (TrinoSqlParser.QUESTION_MARK - 261)) | (1 << (TrinoSqlParser.STRING - 261)) | (1 << (TrinoSqlParser.UNICODE_STRING - 261)) | (1 << (TrinoSqlParser.BINARY_LITERAL - 261)) | (1 << (TrinoSqlParser.INTEGER_VALUE - 261)) | (1 << (TrinoSqlParser.DECIMAL_VALUE - 261)) | (1 << (TrinoSqlParser.DOUBLE_VALUE - 261)) | (1 << (TrinoSqlParser.IDENTIFIER - 261)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 261)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 261)))) !== 0)) {
					{
					this.state = 1857;
					this.expression();
					this.state = 1862;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
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
				_localctx = new ColumnReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1868;
				this.identifier();
				}
				break;

			case 26:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1869;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.CURRENT_DATE);
				}
				break;

			case 27:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1870;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.CURRENT_TIME);
				this.state = 1874;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 244, this._ctx) ) {
				case 1:
					{
					this.state = 1871;
					this.match(TrinoSqlParser.T__1);
					this.state = 1872;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(TrinoSqlParser.INTEGER_VALUE);
					this.state = 1873;
					this.match(TrinoSqlParser.T__2);
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
				this.state = 1876;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.CURRENT_TIMESTAMP);
				this.state = 1880;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 245, this._ctx) ) {
				case 1:
					{
					this.state = 1877;
					this.match(TrinoSqlParser.T__1);
					this.state = 1878;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(TrinoSqlParser.INTEGER_VALUE);
					this.state = 1879;
					this.match(TrinoSqlParser.T__2);
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
				this.state = 1882;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.LOCALTIME);
				this.state = 1886;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 246, this._ctx) ) {
				case 1:
					{
					this.state = 1883;
					this.match(TrinoSqlParser.T__1);
					this.state = 1884;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(TrinoSqlParser.INTEGER_VALUE);
					this.state = 1885;
					this.match(TrinoSqlParser.T__2);
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
				this.state = 1888;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.LOCALTIMESTAMP);
				this.state = 1892;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 247, this._ctx) ) {
				case 1:
					{
					this.state = 1889;
					this.match(TrinoSqlParser.T__1);
					this.state = 1890;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(TrinoSqlParser.INTEGER_VALUE);
					this.state = 1891;
					this.match(TrinoSqlParser.T__2);
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
				this.state = 1894;
				(_localctx as CurrentUserContext)._name = this.match(TrinoSqlParser.CURRENT_USER);
				}
				break;

			case 32:
				{
				_localctx = new CurrentCatalogContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1895;
				(_localctx as CurrentCatalogContext)._name = this.match(TrinoSqlParser.CURRENT_CATALOG);
				}
				break;

			case 33:
				{
				_localctx = new CurrentSchemaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1896;
				(_localctx as CurrentSchemaContext)._name = this.match(TrinoSqlParser.CURRENT_SCHEMA);
				}
				break;

			case 34:
				{
				_localctx = new CurrentPathContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1897;
				(_localctx as CurrentPathContext)._name = this.match(TrinoSqlParser.CURRENT_PATH);
				}
				break;

			case 35:
				{
				_localctx = new SubstringContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				if (_la === TrinoSqlParser.FOR) {
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
				_localctx = new NormalizeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1909;
				this.match(TrinoSqlParser.NORMALIZE);
				this.state = 1910;
				this.match(TrinoSqlParser.T__1);
				this.state = 1911;
				this.valueExpression(0);
				this.state = 1914;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.T__3) {
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
				_localctx = new ExtractContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
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
				_localctx = new GroupingOperationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1929;
				this.match(TrinoSqlParser.GROUPING);
				this.state = 1930;
				this.match(TrinoSqlParser.T__1);
				this.state = 1939;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (TrinoSqlParser.ADD - 17)) | (1 << (TrinoSqlParser.ADMIN - 17)) | (1 << (TrinoSqlParser.AFTER - 17)) | (1 << (TrinoSqlParser.ALL - 17)) | (1 << (TrinoSqlParser.ANALYZE - 17)) | (1 << (TrinoSqlParser.ANY - 17)) | (1 << (TrinoSqlParser.ARRAY - 17)) | (1 << (TrinoSqlParser.ASC - 17)) | (1 << (TrinoSqlParser.AT - 17)) | (1 << (TrinoSqlParser.AUTHORIZATION - 17)) | (1 << (TrinoSqlParser.BERNOULLI - 17)) | (1 << (TrinoSqlParser.CALL - 17)) | (1 << (TrinoSqlParser.CASCADE - 17)) | (1 << (TrinoSqlParser.CATALOGS - 17)) | (1 << (TrinoSqlParser.COLUMN - 17)) | (1 << (TrinoSqlParser.COLUMNS - 17)) | (1 << (TrinoSqlParser.COMMENT - 17)) | (1 << (TrinoSqlParser.COMMIT - 17)) | (1 << (TrinoSqlParser.COMMITTED - 17)) | (1 << (TrinoSqlParser.CURRENT - 17)))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (TrinoSqlParser.DATA - 56)) | (1 << (TrinoSqlParser.DATE - 56)) | (1 << (TrinoSqlParser.DAY - 56)) | (1 << (TrinoSqlParser.DEFAULT - 56)) | (1 << (TrinoSqlParser.DEFINER - 56)) | (1 << (TrinoSqlParser.DESC - 56)) | (1 << (TrinoSqlParser.DEFINE - 56)) | (1 << (TrinoSqlParser.DISTRIBUTED - 56)) | (1 << (TrinoSqlParser.DOUBLE - 56)) | (1 << (TrinoSqlParser.EMPTY - 56)) | (1 << (TrinoSqlParser.EXCLUDING - 56)) | (1 << (TrinoSqlParser.EXPLAIN - 56)) | (1 << (TrinoSqlParser.FETCH - 56)) | (1 << (TrinoSqlParser.FILTER - 56)) | (1 << (TrinoSqlParser.FINAL - 56)) | (1 << (TrinoSqlParser.FIRST - 56)) | (1 << (TrinoSqlParser.FOLLOWING - 56)) | (1 << (TrinoSqlParser.FORMAT - 56)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (TrinoSqlParser.FUNCTIONS - 90)) | (1 << (TrinoSqlParser.GRANT - 90)) | (1 << (TrinoSqlParser.GRANTED - 90)) | (1 << (TrinoSqlParser.GRANTS - 90)) | (1 << (TrinoSqlParser.DENY - 90)) | (1 << (TrinoSqlParser.GRAPHVIZ - 90)) | (1 << (TrinoSqlParser.GROUPS - 90)) | (1 << (TrinoSqlParser.HOUR - 90)) | (1 << (TrinoSqlParser.IF - 90)) | (1 << (TrinoSqlParser.IGNORE - 90)) | (1 << (TrinoSqlParser.INCLUDING - 90)) | (1 << (TrinoSqlParser.INITIAL - 90)) | (1 << (TrinoSqlParser.INPUT - 90)) | (1 << (TrinoSqlParser.INTERVAL - 90)) | (1 << (TrinoSqlParser.INVOKER - 90)) | (1 << (TrinoSqlParser.IO - 90)) | (1 << (TrinoSqlParser.ISOLATION - 90)) | (1 << (TrinoSqlParser.JSON - 90)) | (1 << (TrinoSqlParser.LAST - 90)) | (1 << (TrinoSqlParser.LATERAL - 90)) | (1 << (TrinoSqlParser.LEVEL - 90)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TrinoSqlParser.LIMIT - 123)) | (1 << (TrinoSqlParser.LOCAL - 123)) | (1 << (TrinoSqlParser.LOGICAL - 123)) | (1 << (TrinoSqlParser.MAP - 123)) | (1 << (TrinoSqlParser.MATCH - 123)) | (1 << (TrinoSqlParser.MATCHED - 123)) | (1 << (TrinoSqlParser.MATCHES - 123)) | (1 << (TrinoSqlParser.MATCH_RECOGNIZE - 123)) | (1 << (TrinoSqlParser.MATERIALIZED - 123)) | (1 << (TrinoSqlParser.MEASURES - 123)) | (1 << (TrinoSqlParser.MERGE - 123)) | (1 << (TrinoSqlParser.MINUTE - 123)) | (1 << (TrinoSqlParser.MONTH - 123)) | (1 << (TrinoSqlParser.NEXT - 123)) | (1 << (TrinoSqlParser.NFC - 123)) | (1 << (TrinoSqlParser.NFD - 123)) | (1 << (TrinoSqlParser.NFKC - 123)) | (1 << (TrinoSqlParser.NFKD - 123)) | (1 << (TrinoSqlParser.NO - 123)) | (1 << (TrinoSqlParser.NONE - 123)) | (1 << (TrinoSqlParser.NULLIF - 123)) | (1 << (TrinoSqlParser.NULLS - 123)) | (1 << (TrinoSqlParser.OFFSET - 123)) | (1 << (TrinoSqlParser.OMIT - 123)) | (1 << (TrinoSqlParser.ONE - 123)))) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (TrinoSqlParser.ONLY - 155)) | (1 << (TrinoSqlParser.OPTION - 155)) | (1 << (TrinoSqlParser.ORDINALITY - 155)) | (1 << (TrinoSqlParser.OUTPUT - 155)) | (1 << (TrinoSqlParser.OVER - 155)) | (1 << (TrinoSqlParser.PARTITION - 155)) | (1 << (TrinoSqlParser.PARTITIONS - 155)) | (1 << (TrinoSqlParser.PAST - 155)) | (1 << (TrinoSqlParser.PATH - 155)) | (1 << (TrinoSqlParser.PATTERN - 155)) | (1 << (TrinoSqlParser.PER - 155)) | (1 << (TrinoSqlParser.PERMUTE - 155)) | (1 << (TrinoSqlParser.POSITION - 155)) | (1 << (TrinoSqlParser.PRECEDING - 155)) | (1 << (TrinoSqlParser.PRECISION - 155)) | (1 << (TrinoSqlParser.PRIVILEGES - 155)) | (1 << (TrinoSqlParser.PROPERTIES - 155)) | (1 << (TrinoSqlParser.RANGE - 155)) | (1 << (TrinoSqlParser.READ - 155)) | (1 << (TrinoSqlParser.REFRESH - 155)) | (1 << (TrinoSqlParser.RENAME - 155)) | (1 << (TrinoSqlParser.REPEATABLE - 155)) | (1 << (TrinoSqlParser.REPLACE - 155)) | (1 << (TrinoSqlParser.RESET - 155)) | (1 << (TrinoSqlParser.RESPECT - 155)) | (1 << (TrinoSqlParser.RESTRICT - 155)) | (1 << (TrinoSqlParser.REVOKE - 155)))) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & ((1 << (TrinoSqlParser.ROLE - 188)) | (1 << (TrinoSqlParser.ROLES - 188)) | (1 << (TrinoSqlParser.ROLLBACK - 188)) | (1 << (TrinoSqlParser.ROW - 188)) | (1 << (TrinoSqlParser.ROWS - 188)) | (1 << (TrinoSqlParser.RUNNING - 188)) | (1 << (TrinoSqlParser.SCHEMA - 188)) | (1 << (TrinoSqlParser.SCHEMAS - 188)) | (1 << (TrinoSqlParser.SECOND - 188)) | (1 << (TrinoSqlParser.SECURITY - 188)) | (1 << (TrinoSqlParser.SEEK - 188)) | (1 << (TrinoSqlParser.SERIALIZABLE - 188)) | (1 << (TrinoSqlParser.SESSION - 188)) | (1 << (TrinoSqlParser.SET - 188)) | (1 << (TrinoSqlParser.SETS - 188)) | (1 << (TrinoSqlParser.SHOW - 188)) | (1 << (TrinoSqlParser.SOME - 188)) | (1 << (TrinoSqlParser.START - 188)) | (1 << (TrinoSqlParser.STATS - 188)) | (1 << (TrinoSqlParser.SUBSET - 188)) | (1 << (TrinoSqlParser.SUBSTRING - 188)) | (1 << (TrinoSqlParser.SYSTEM - 188)) | (1 << (TrinoSqlParser.TABLES - 188)) | (1 << (TrinoSqlParser.TABLESAMPLE - 188)) | (1 << (TrinoSqlParser.TEXT - 188)) | (1 << (TrinoSqlParser.TIES - 188)) | (1 << (TrinoSqlParser.TIME - 188)) | (1 << (TrinoSqlParser.TIMESTAMP - 188)))) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & ((1 << (TrinoSqlParser.TO - 220)) | (1 << (TrinoSqlParser.TRANSACTION - 220)) | (1 << (TrinoSqlParser.TRUNCATE - 220)) | (1 << (TrinoSqlParser.TRY_CAST - 220)) | (1 << (TrinoSqlParser.TYPE - 220)) | (1 << (TrinoSqlParser.UNBOUNDED - 220)) | (1 << (TrinoSqlParser.UNCOMMITTED - 220)) | (1 << (TrinoSqlParser.UNMATCHED - 220)) | (1 << (TrinoSqlParser.UPDATE - 220)) | (1 << (TrinoSqlParser.USE - 220)) | (1 << (TrinoSqlParser.USER - 220)) | (1 << (TrinoSqlParser.VALIDATE - 220)) | (1 << (TrinoSqlParser.VERBOSE - 220)) | (1 << (TrinoSqlParser.VIEW - 220)) | (1 << (TrinoSqlParser.WINDOW - 220)) | (1 << (TrinoSqlParser.WITHOUT - 220)) | (1 << (TrinoSqlParser.WORK - 220)) | (1 << (TrinoSqlParser.WRITE - 220)) | (1 << (TrinoSqlParser.YEAR - 220)) | (1 << (TrinoSqlParser.ZONE - 220)))) !== 0) || ((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & ((1 << (TrinoSqlParser.IDENTIFIER - 268)) | (1 << (TrinoSqlParser.DIGIT_IDENTIFIER - 268)) | (1 << (TrinoSqlParser.QUOTED_IDENTIFIER - 268)) | (1 << (TrinoSqlParser.BACKQUOTED_IDENTIFIER - 268)))) !== 0)) {
					{
					this.state = 1931;
					this.qualifiedName();
					this.state = 1936;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
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
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1954;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 254, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1952;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 253, this._ctx) ) {
					case 1:
						{
						_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as SubscriptContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_primaryExpression);
						this.state = 1944;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1945;
						this.match(TrinoSqlParser.T__6);
						this.state = 1946;
						(_localctx as SubscriptContext)._index = this.valueExpression(0);
						this.state = 1947;
						this.match(TrinoSqlParser.T__7);
						}
						break;

					case 2:
						{
						_localctx = new DereferenceContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as DereferenceContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_primaryExpression);
						this.state = 1949;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1950;
						this.match(TrinoSqlParser.T__0);
						this.state = 1951;
						(_localctx as DereferenceContext)._fieldName = this.identifier();
						}
						break;
					}
					}
				}
				this.state = 1956;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 254, this._ctx);
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
		this.enterRule(_localctx, 104, TrinoSqlParser.RULE_processingMode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1957;
			_la = this._input.LA(1);
			if (!(_la === TrinoSqlParser.FINAL || _la === TrinoSqlParser.RUNNING)) {
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
		this.enterRule(_localctx, 106, TrinoSqlParser.RULE_nullTreatment);
		try {
			this.state = 1963;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.IGNORE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1959;
				this.match(TrinoSqlParser.IGNORE);
				this.state = 1960;
				this.match(TrinoSqlParser.NULLS);
				}
				break;
			case TrinoSqlParser.RESPECT:
				this.enterOuterAlt(_localctx, 2);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 108, TrinoSqlParser.RULE_string);
		try {
			this.state = 1971;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.STRING:
				_localctx = new BasicStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1965;
				this.match(TrinoSqlParser.STRING);
				}
				break;
			case TrinoSqlParser.UNICODE_STRING:
				_localctx = new UnicodeStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1966;
				this.match(TrinoSqlParser.UNICODE_STRING);
				this.state = 1969;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 256, this._ctx) ) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 110, TrinoSqlParser.RULE_timeZoneSpecifier);
		try {
			this.state = 1979;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 258, this._ctx) ) {
			case 1:
				_localctx = new TimeZoneIntervalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
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
				_localctx = new TimeZoneStringContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1976;
				this.match(TrinoSqlParser.TIME);
				this.state = 1977;
				this.match(TrinoSqlParser.ZONE);
				this.state = 1978;
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
		this.enterRule(_localctx, 112, TrinoSqlParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1981;
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
		this.enterRule(_localctx, 114, TrinoSqlParser.RULE_comparisonQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1983;
			_la = this._input.LA(1);
			if (!(_la === TrinoSqlParser.ALL || _la === TrinoSqlParser.ANY || _la === TrinoSqlParser.SOME)) {
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
		this.enterRule(_localctx, 116, TrinoSqlParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1985;
			_la = this._input.LA(1);
			if (!(_la === TrinoSqlParser.FALSE || _la === TrinoSqlParser.TRUE)) {
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
		this.enterRule(_localctx, 118, TrinoSqlParser.RULE_interval);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1987;
			this.match(TrinoSqlParser.INTERVAL);
			this.state = 1989;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.PLUS || _la === TrinoSqlParser.MINUS) {
				{
				this.state = 1988;
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

			this.state = 1991;
			this.string();
			this.state = 1992;
			_localctx._from = this.intervalField();
			this.state = 1995;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 260, this._ctx) ) {
			case 1:
				{
				this.state = 1993;
				this.match(TrinoSqlParser.TO);
				this.state = 1994;
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
		this.enterRule(_localctx, 120, TrinoSqlParser.RULE_intervalField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1997;
			_la = this._input.LA(1);
			if (!(_la === TrinoSqlParser.DAY || _la === TrinoSqlParser.HOUR || _la === TrinoSqlParser.MINUTE || _la === TrinoSqlParser.MONTH || _la === TrinoSqlParser.SECOND || _la === TrinoSqlParser.YEAR)) {
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
		this.enterRule(_localctx, 122, TrinoSqlParser.RULE_normalForm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1999;
			_la = this._input.LA(1);
			if (!(((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (TrinoSqlParser.NFC - 140)) | (1 << (TrinoSqlParser.NFD - 140)) | (1 << (TrinoSqlParser.NFKC - 140)) | (1 << (TrinoSqlParser.NFKD - 140)))) !== 0))) {
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
		let _startState: number = 124;
		this.enterRecursionRule(_localctx, 124, TrinoSqlParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2092;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 271, this._ctx) ) {
			case 1:
				{
				_localctx = new RowTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2002;
				this.match(TrinoSqlParser.ROW);
				this.state = 2003;
				this.match(TrinoSqlParser.T__1);
				this.state = 2004;
				this.rowField();
				this.state = 2009;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__3) {
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
				_localctx = new IntervalTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2014;
				this.match(TrinoSqlParser.INTERVAL);
				this.state = 2015;
				(_localctx as IntervalTypeContext)._from = this.intervalField();
				this.state = 2018;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 262, this._ctx) ) {
				case 1:
					{
					this.state = 2016;
					this.match(TrinoSqlParser.TO);
					this.state = 2017;
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
				this.state = 2020;
				(_localctx as DateTimeTypeContext)._base = this.match(TrinoSqlParser.TIMESTAMP);
				this.state = 2025;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 263, this._ctx) ) {
				case 1:
					{
					this.state = 2021;
					this.match(TrinoSqlParser.T__1);
					this.state = 2022;
					(_localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 2023;
					this.match(TrinoSqlParser.T__2);
					}
					break;
				}
				this.state = 2030;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 264, this._ctx) ) {
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
				_localctx = new DateTimeTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2032;
				(_localctx as DateTimeTypeContext)._base = this.match(TrinoSqlParser.TIMESTAMP);
				this.state = 2037;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.T__1) {
					{
					this.state = 2033;
					this.match(TrinoSqlParser.T__1);
					this.state = 2034;
					(_localctx as DateTimeTypeContext)._precision = this.typeParameter();
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
				_localctx = new DateTimeTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2042;
				(_localctx as DateTimeTypeContext)._base = this.match(TrinoSqlParser.TIME);
				this.state = 2047;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 266, this._ctx) ) {
				case 1:
					{
					this.state = 2043;
					this.match(TrinoSqlParser.T__1);
					this.state = 2044;
					(_localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 2045;
					this.match(TrinoSqlParser.T__2);
					}
					break;
				}
				this.state = 2052;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 267, this._ctx) ) {
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
				_localctx = new DateTimeTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2054;
				(_localctx as DateTimeTypeContext)._base = this.match(TrinoSqlParser.TIME);
				this.state = 2059;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.T__1) {
					{
					this.state = 2055;
					this.match(TrinoSqlParser.T__1);
					this.state = 2056;
					(_localctx as DateTimeTypeContext)._precision = this.typeParameter();
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
				_localctx = new DoublePrecisionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2064;
				this.match(TrinoSqlParser.DOUBLE);
				this.state = 2065;
				this.match(TrinoSqlParser.PRECISION);
				}
				break;

			case 8:
				{
				_localctx = new LegacyArrayTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2066;
				this.match(TrinoSqlParser.ARRAY);
				this.state = 2067;
				this.match(TrinoSqlParser.LT);
				this.state = 2068;
				this.type(0);
				this.state = 2069;
				this.match(TrinoSqlParser.GT);
				}
				break;

			case 9:
				{
				_localctx = new LegacyMapTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2071;
				this.match(TrinoSqlParser.MAP);
				this.state = 2072;
				this.match(TrinoSqlParser.LT);
				this.state = 2073;
				(_localctx as LegacyMapTypeContext)._keyType = this.type(0);
				this.state = 2074;
				this.match(TrinoSqlParser.T__3);
				this.state = 2075;
				(_localctx as LegacyMapTypeContext)._valueType = this.type(0);
				this.state = 2076;
				this.match(TrinoSqlParser.GT);
				}
				break;

			case 10:
				{
				_localctx = new GenericTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2078;
				this.identifier();
				this.state = 2090;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 270, this._ctx) ) {
				case 1:
					{
					this.state = 2079;
					this.match(TrinoSqlParser.T__1);
					this.state = 2080;
					this.typeParameter();
					this.state = 2085;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
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
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2103;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
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
					this.state = 2094;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 2095;
					this.match(TrinoSqlParser.ARRAY);
					this.state = 2099;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 272, this._ctx) ) {
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
				_alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
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
		this.enterRule(_localctx, 126, TrinoSqlParser.RULE_rowField);
		try {
			this.state = 2110;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 274, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2106;
				this.type(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2107;
				this.identifier();
				this.state = 2108;
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
		this.enterRule(_localctx, 128, TrinoSqlParser.RULE_typeParameter);
		try {
			this.state = 2114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.INTEGER_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2112;
				this.match(TrinoSqlParser.INTEGER_VALUE);
				}
				break;
			case TrinoSqlParser.ADD:
			case TrinoSqlParser.ADMIN:
			case TrinoSqlParser.AFTER:
			case TrinoSqlParser.ALL:
			case TrinoSqlParser.ANALYZE:
			case TrinoSqlParser.ANY:
			case TrinoSqlParser.ARRAY:
			case TrinoSqlParser.ASC:
			case TrinoSqlParser.AT:
			case TrinoSqlParser.AUTHORIZATION:
			case TrinoSqlParser.BERNOULLI:
			case TrinoSqlParser.CALL:
			case TrinoSqlParser.CASCADE:
			case TrinoSqlParser.CATALOGS:
			case TrinoSqlParser.COLUMN:
			case TrinoSqlParser.COLUMNS:
			case TrinoSqlParser.COMMENT:
			case TrinoSqlParser.COMMIT:
			case TrinoSqlParser.COMMITTED:
			case TrinoSqlParser.CURRENT:
			case TrinoSqlParser.DATA:
			case TrinoSqlParser.DATE:
			case TrinoSqlParser.DAY:
			case TrinoSqlParser.DEFAULT:
			case TrinoSqlParser.DEFINER:
			case TrinoSqlParser.DESC:
			case TrinoSqlParser.DEFINE:
			case TrinoSqlParser.DISTRIBUTED:
			case TrinoSqlParser.DOUBLE:
			case TrinoSqlParser.EMPTY:
			case TrinoSqlParser.EXCLUDING:
			case TrinoSqlParser.EXPLAIN:
			case TrinoSqlParser.FETCH:
			case TrinoSqlParser.FILTER:
			case TrinoSqlParser.FINAL:
			case TrinoSqlParser.FIRST:
			case TrinoSqlParser.FOLLOWING:
			case TrinoSqlParser.FORMAT:
			case TrinoSqlParser.FUNCTIONS:
			case TrinoSqlParser.GRANT:
			case TrinoSqlParser.GRANTED:
			case TrinoSqlParser.GRANTS:
			case TrinoSqlParser.DENY:
			case TrinoSqlParser.GRAPHVIZ:
			case TrinoSqlParser.GROUPS:
			case TrinoSqlParser.HOUR:
			case TrinoSqlParser.IF:
			case TrinoSqlParser.IGNORE:
			case TrinoSqlParser.INCLUDING:
			case TrinoSqlParser.INITIAL:
			case TrinoSqlParser.INPUT:
			case TrinoSqlParser.INTERVAL:
			case TrinoSqlParser.INVOKER:
			case TrinoSqlParser.IO:
			case TrinoSqlParser.ISOLATION:
			case TrinoSqlParser.JSON:
			case TrinoSqlParser.LAST:
			case TrinoSqlParser.LATERAL:
			case TrinoSqlParser.LEVEL:
			case TrinoSqlParser.LIMIT:
			case TrinoSqlParser.LOCAL:
			case TrinoSqlParser.LOGICAL:
			case TrinoSqlParser.MAP:
			case TrinoSqlParser.MATCH:
			case TrinoSqlParser.MATCHED:
			case TrinoSqlParser.MATCHES:
			case TrinoSqlParser.MATCH_RECOGNIZE:
			case TrinoSqlParser.MATERIALIZED:
			case TrinoSqlParser.MEASURES:
			case TrinoSqlParser.MERGE:
			case TrinoSqlParser.MINUTE:
			case TrinoSqlParser.MONTH:
			case TrinoSqlParser.NEXT:
			case TrinoSqlParser.NFC:
			case TrinoSqlParser.NFD:
			case TrinoSqlParser.NFKC:
			case TrinoSqlParser.NFKD:
			case TrinoSqlParser.NO:
			case TrinoSqlParser.NONE:
			case TrinoSqlParser.NULLIF:
			case TrinoSqlParser.NULLS:
			case TrinoSqlParser.OFFSET:
			case TrinoSqlParser.OMIT:
			case TrinoSqlParser.ONE:
			case TrinoSqlParser.ONLY:
			case TrinoSqlParser.OPTION:
			case TrinoSqlParser.ORDINALITY:
			case TrinoSqlParser.OUTPUT:
			case TrinoSqlParser.OVER:
			case TrinoSqlParser.PARTITION:
			case TrinoSqlParser.PARTITIONS:
			case TrinoSqlParser.PAST:
			case TrinoSqlParser.PATH:
			case TrinoSqlParser.PATTERN:
			case TrinoSqlParser.PER:
			case TrinoSqlParser.PERMUTE:
			case TrinoSqlParser.POSITION:
			case TrinoSqlParser.PRECEDING:
			case TrinoSqlParser.PRECISION:
			case TrinoSqlParser.PRIVILEGES:
			case TrinoSqlParser.PROPERTIES:
			case TrinoSqlParser.RANGE:
			case TrinoSqlParser.READ:
			case TrinoSqlParser.REFRESH:
			case TrinoSqlParser.RENAME:
			case TrinoSqlParser.REPEATABLE:
			case TrinoSqlParser.REPLACE:
			case TrinoSqlParser.RESET:
			case TrinoSqlParser.RESPECT:
			case TrinoSqlParser.RESTRICT:
			case TrinoSqlParser.REVOKE:
			case TrinoSqlParser.ROLE:
			case TrinoSqlParser.ROLES:
			case TrinoSqlParser.ROLLBACK:
			case TrinoSqlParser.ROW:
			case TrinoSqlParser.ROWS:
			case TrinoSqlParser.RUNNING:
			case TrinoSqlParser.SCHEMA:
			case TrinoSqlParser.SCHEMAS:
			case TrinoSqlParser.SECOND:
			case TrinoSqlParser.SECURITY:
			case TrinoSqlParser.SEEK:
			case TrinoSqlParser.SERIALIZABLE:
			case TrinoSqlParser.SESSION:
			case TrinoSqlParser.SET:
			case TrinoSqlParser.SETS:
			case TrinoSqlParser.SHOW:
			case TrinoSqlParser.SOME:
			case TrinoSqlParser.START:
			case TrinoSqlParser.STATS:
			case TrinoSqlParser.SUBSET:
			case TrinoSqlParser.SUBSTRING:
			case TrinoSqlParser.SYSTEM:
			case TrinoSqlParser.TABLES:
			case TrinoSqlParser.TABLESAMPLE:
			case TrinoSqlParser.TEXT:
			case TrinoSqlParser.TIES:
			case TrinoSqlParser.TIME:
			case TrinoSqlParser.TIMESTAMP:
			case TrinoSqlParser.TO:
			case TrinoSqlParser.TRANSACTION:
			case TrinoSqlParser.TRUNCATE:
			case TrinoSqlParser.TRY_CAST:
			case TrinoSqlParser.TYPE:
			case TrinoSqlParser.UNBOUNDED:
			case TrinoSqlParser.UNCOMMITTED:
			case TrinoSqlParser.UNMATCHED:
			case TrinoSqlParser.UPDATE:
			case TrinoSqlParser.USE:
			case TrinoSqlParser.USER:
			case TrinoSqlParser.VALIDATE:
			case TrinoSqlParser.VERBOSE:
			case TrinoSqlParser.VIEW:
			case TrinoSqlParser.WINDOW:
			case TrinoSqlParser.WITHOUT:
			case TrinoSqlParser.WORK:
			case TrinoSqlParser.WRITE:
			case TrinoSqlParser.YEAR:
			case TrinoSqlParser.ZONE:
			case TrinoSqlParser.IDENTIFIER:
			case TrinoSqlParser.DIGIT_IDENTIFIER:
			case TrinoSqlParser.QUOTED_IDENTIFIER:
			case TrinoSqlParser.BACKQUOTED_IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2113;
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
		this.enterRule(_localctx, 130, TrinoSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2116;
			this.match(TrinoSqlParser.WHEN);
			this.state = 2117;
			_localctx._condition = this.expression();
			this.state = 2118;
			this.match(TrinoSqlParser.THEN);
			this.state = 2119;
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
		this.enterRule(_localctx, 132, TrinoSqlParser.RULE_filter);
		try {
			this.enterOuterAlt(_localctx, 1);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 134, TrinoSqlParser.RULE_mergeCase);
		let _la: number;
		try {
			this.state = 2191;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 283, this._ctx) ) {
			case 1:
				_localctx = new MergeUpdateContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2127;
				this.match(TrinoSqlParser.WHEN);
				this.state = 2128;
				this.match(TrinoSqlParser.MATCHED);
				this.state = 2131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.AND) {
					{
					this.state = 2129;
					this.match(TrinoSqlParser.AND);
					this.state = 2130;
					(_localctx as MergeUpdateContext)._condition = this.expression();
					}
				}

				this.state = 2133;
				this.match(TrinoSqlParser.THEN);
				this.state = 2134;
				this.match(TrinoSqlParser.UPDATE);
				this.state = 2135;
				this.match(TrinoSqlParser.SET);
				this.state = 2136;
				(_localctx as MergeUpdateContext)._identifier = this.identifier();
				(_localctx as MergeUpdateContext)._targets.push((_localctx as MergeUpdateContext)._identifier);
				this.state = 2137;
				this.match(TrinoSqlParser.EQ);
				this.state = 2138;
				(_localctx as MergeUpdateContext)._expression = this.expression();
				(_localctx as MergeUpdateContext)._values.push((_localctx as MergeUpdateContext)._expression);
				this.state = 2146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__3) {
					{
					{
					this.state = 2139;
					this.match(TrinoSqlParser.T__3);
					this.state = 2140;
					(_localctx as MergeUpdateContext)._identifier = this.identifier();
					(_localctx as MergeUpdateContext)._targets.push((_localctx as MergeUpdateContext)._identifier);
					this.state = 2141;
					this.match(TrinoSqlParser.EQ);
					this.state = 2142;
					(_localctx as MergeUpdateContext)._expression = this.expression();
					(_localctx as MergeUpdateContext)._values.push((_localctx as MergeUpdateContext)._expression);
					}
					}
					this.state = 2148;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				_localctx = new MergeDeleteContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2149;
				this.match(TrinoSqlParser.WHEN);
				this.state = 2150;
				this.match(TrinoSqlParser.MATCHED);
				this.state = 2153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.AND) {
					{
					this.state = 2151;
					this.match(TrinoSqlParser.AND);
					this.state = 2152;
					(_localctx as MergeDeleteContext)._condition = this.expression();
					}
				}

				this.state = 2155;
				this.match(TrinoSqlParser.THEN);
				this.state = 2156;
				this.match(TrinoSqlParser.DELETE);
				}
				break;

			case 3:
				_localctx = new MergeInsertContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
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
				if (_la === TrinoSqlParser.AND) {
					{
					this.state = 2160;
					this.match(TrinoSqlParser.AND);
					this.state = 2161;
					(_localctx as MergeInsertContext)._condition = this.expression();
					}
				}

				this.state = 2164;
				this.match(TrinoSqlParser.THEN);
				this.state = 2165;
				this.match(TrinoSqlParser.INSERT);
				this.state = 2177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.T__1) {
					{
					this.state = 2166;
					this.match(TrinoSqlParser.T__1);
					this.state = 2167;
					(_localctx as MergeInsertContext)._identifier = this.identifier();
					(_localctx as MergeInsertContext)._targets.push((_localctx as MergeInsertContext)._identifier);
					this.state = 2172;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TrinoSqlParser.T__3) {
						{
						{
						this.state = 2168;
						this.match(TrinoSqlParser.T__3);
						this.state = 2169;
						(_localctx as MergeInsertContext)._identifier = this.identifier();
						(_localctx as MergeInsertContext)._targets.push((_localctx as MergeInsertContext)._identifier);
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
				(_localctx as MergeInsertContext)._expression = this.expression();
				(_localctx as MergeInsertContext)._values.push((_localctx as MergeInsertContext)._expression);
				this.state = 2186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__3) {
					{
					{
					this.state = 2182;
					this.match(TrinoSqlParser.T__3);
					this.state = 2183;
					(_localctx as MergeInsertContext)._expression = this.expression();
					(_localctx as MergeInsertContext)._values.push((_localctx as MergeInsertContext)._expression);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 136, TrinoSqlParser.RULE_over);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2193;
			this.match(TrinoSqlParser.OVER);
			this.state = 2199;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.ADD:
			case TrinoSqlParser.ADMIN:
			case TrinoSqlParser.AFTER:
			case TrinoSqlParser.ALL:
			case TrinoSqlParser.ANALYZE:
			case TrinoSqlParser.ANY:
			case TrinoSqlParser.ARRAY:
			case TrinoSqlParser.ASC:
			case TrinoSqlParser.AT:
			case TrinoSqlParser.AUTHORIZATION:
			case TrinoSqlParser.BERNOULLI:
			case TrinoSqlParser.CALL:
			case TrinoSqlParser.CASCADE:
			case TrinoSqlParser.CATALOGS:
			case TrinoSqlParser.COLUMN:
			case TrinoSqlParser.COLUMNS:
			case TrinoSqlParser.COMMENT:
			case TrinoSqlParser.COMMIT:
			case TrinoSqlParser.COMMITTED:
			case TrinoSqlParser.CURRENT:
			case TrinoSqlParser.DATA:
			case TrinoSqlParser.DATE:
			case TrinoSqlParser.DAY:
			case TrinoSqlParser.DEFAULT:
			case TrinoSqlParser.DEFINER:
			case TrinoSqlParser.DESC:
			case TrinoSqlParser.DEFINE:
			case TrinoSqlParser.DISTRIBUTED:
			case TrinoSqlParser.DOUBLE:
			case TrinoSqlParser.EMPTY:
			case TrinoSqlParser.EXCLUDING:
			case TrinoSqlParser.EXPLAIN:
			case TrinoSqlParser.FETCH:
			case TrinoSqlParser.FILTER:
			case TrinoSqlParser.FINAL:
			case TrinoSqlParser.FIRST:
			case TrinoSqlParser.FOLLOWING:
			case TrinoSqlParser.FORMAT:
			case TrinoSqlParser.FUNCTIONS:
			case TrinoSqlParser.GRANT:
			case TrinoSqlParser.GRANTED:
			case TrinoSqlParser.GRANTS:
			case TrinoSqlParser.DENY:
			case TrinoSqlParser.GRAPHVIZ:
			case TrinoSqlParser.GROUPS:
			case TrinoSqlParser.HOUR:
			case TrinoSqlParser.IF:
			case TrinoSqlParser.IGNORE:
			case TrinoSqlParser.INCLUDING:
			case TrinoSqlParser.INITIAL:
			case TrinoSqlParser.INPUT:
			case TrinoSqlParser.INTERVAL:
			case TrinoSqlParser.INVOKER:
			case TrinoSqlParser.IO:
			case TrinoSqlParser.ISOLATION:
			case TrinoSqlParser.JSON:
			case TrinoSqlParser.LAST:
			case TrinoSqlParser.LATERAL:
			case TrinoSqlParser.LEVEL:
			case TrinoSqlParser.LIMIT:
			case TrinoSqlParser.LOCAL:
			case TrinoSqlParser.LOGICAL:
			case TrinoSqlParser.MAP:
			case TrinoSqlParser.MATCH:
			case TrinoSqlParser.MATCHED:
			case TrinoSqlParser.MATCHES:
			case TrinoSqlParser.MATCH_RECOGNIZE:
			case TrinoSqlParser.MATERIALIZED:
			case TrinoSqlParser.MEASURES:
			case TrinoSqlParser.MERGE:
			case TrinoSqlParser.MINUTE:
			case TrinoSqlParser.MONTH:
			case TrinoSqlParser.NEXT:
			case TrinoSqlParser.NFC:
			case TrinoSqlParser.NFD:
			case TrinoSqlParser.NFKC:
			case TrinoSqlParser.NFKD:
			case TrinoSqlParser.NO:
			case TrinoSqlParser.NONE:
			case TrinoSqlParser.NULLIF:
			case TrinoSqlParser.NULLS:
			case TrinoSqlParser.OFFSET:
			case TrinoSqlParser.OMIT:
			case TrinoSqlParser.ONE:
			case TrinoSqlParser.ONLY:
			case TrinoSqlParser.OPTION:
			case TrinoSqlParser.ORDINALITY:
			case TrinoSqlParser.OUTPUT:
			case TrinoSqlParser.OVER:
			case TrinoSqlParser.PARTITION:
			case TrinoSqlParser.PARTITIONS:
			case TrinoSqlParser.PAST:
			case TrinoSqlParser.PATH:
			case TrinoSqlParser.PATTERN:
			case TrinoSqlParser.PER:
			case TrinoSqlParser.PERMUTE:
			case TrinoSqlParser.POSITION:
			case TrinoSqlParser.PRECEDING:
			case TrinoSqlParser.PRECISION:
			case TrinoSqlParser.PRIVILEGES:
			case TrinoSqlParser.PROPERTIES:
			case TrinoSqlParser.RANGE:
			case TrinoSqlParser.READ:
			case TrinoSqlParser.REFRESH:
			case TrinoSqlParser.RENAME:
			case TrinoSqlParser.REPEATABLE:
			case TrinoSqlParser.REPLACE:
			case TrinoSqlParser.RESET:
			case TrinoSqlParser.RESPECT:
			case TrinoSqlParser.RESTRICT:
			case TrinoSqlParser.REVOKE:
			case TrinoSqlParser.ROLE:
			case TrinoSqlParser.ROLES:
			case TrinoSqlParser.ROLLBACK:
			case TrinoSqlParser.ROW:
			case TrinoSqlParser.ROWS:
			case TrinoSqlParser.RUNNING:
			case TrinoSqlParser.SCHEMA:
			case TrinoSqlParser.SCHEMAS:
			case TrinoSqlParser.SECOND:
			case TrinoSqlParser.SECURITY:
			case TrinoSqlParser.SEEK:
			case TrinoSqlParser.SERIALIZABLE:
			case TrinoSqlParser.SESSION:
			case TrinoSqlParser.SET:
			case TrinoSqlParser.SETS:
			case TrinoSqlParser.SHOW:
			case TrinoSqlParser.SOME:
			case TrinoSqlParser.START:
			case TrinoSqlParser.STATS:
			case TrinoSqlParser.SUBSET:
			case TrinoSqlParser.SUBSTRING:
			case TrinoSqlParser.SYSTEM:
			case TrinoSqlParser.TABLES:
			case TrinoSqlParser.TABLESAMPLE:
			case TrinoSqlParser.TEXT:
			case TrinoSqlParser.TIES:
			case TrinoSqlParser.TIME:
			case TrinoSqlParser.TIMESTAMP:
			case TrinoSqlParser.TO:
			case TrinoSqlParser.TRANSACTION:
			case TrinoSqlParser.TRUNCATE:
			case TrinoSqlParser.TRY_CAST:
			case TrinoSqlParser.TYPE:
			case TrinoSqlParser.UNBOUNDED:
			case TrinoSqlParser.UNCOMMITTED:
			case TrinoSqlParser.UNMATCHED:
			case TrinoSqlParser.UPDATE:
			case TrinoSqlParser.USE:
			case TrinoSqlParser.USER:
			case TrinoSqlParser.VALIDATE:
			case TrinoSqlParser.VERBOSE:
			case TrinoSqlParser.VIEW:
			case TrinoSqlParser.WINDOW:
			case TrinoSqlParser.WITHOUT:
			case TrinoSqlParser.WORK:
			case TrinoSqlParser.WRITE:
			case TrinoSqlParser.YEAR:
			case TrinoSqlParser.ZONE:
			case TrinoSqlParser.IDENTIFIER:
			case TrinoSqlParser.DIGIT_IDENTIFIER:
			case TrinoSqlParser.QUOTED_IDENTIFIER:
			case TrinoSqlParser.BACKQUOTED_IDENTIFIER:
				{
				this.state = 2194;
				_localctx._windowName = this.identifier();
				}
				break;
			case TrinoSqlParser.T__1:
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 138, TrinoSqlParser.RULE_windowFrame);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.MEASURES) {
				{
				this.state = 2201;
				this.match(TrinoSqlParser.MEASURES);
				this.state = 2202;
				this.measureDefinition();
				this.state = 2207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__3) {
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
			if (_la === TrinoSqlParser.AFTER) {
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
			if (_la === TrinoSqlParser.INITIAL || _la === TrinoSqlParser.SEEK) {
				{
				this.state = 2218;
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.INITIAL || _la === TrinoSqlParser.SEEK)) {
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

			this.state = 2226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TrinoSqlParser.PATTERN) {
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
			if (_la === TrinoSqlParser.SUBSET) {
				{
				this.state = 2228;
				this.match(TrinoSqlParser.SUBSET);
				this.state = 2229;
				this.subsetDefinition();
				this.state = 2234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__3) {
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
			if (_la === TrinoSqlParser.DEFINE) {
				{
				this.state = 2239;
				this.match(TrinoSqlParser.DEFINE);
				this.state = 2240;
				this.variableDefinition();
				this.state = 2245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TrinoSqlParser.T__3) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 140, TrinoSqlParser.RULE_frameExtent);
		try {
			this.state = 2274;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 294, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2250;
				_localctx._frameType = this.match(TrinoSqlParser.RANGE);
				this.state = 2251;
				_localctx._frameStart = this.frameBound();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2252;
				_localctx._frameType = this.match(TrinoSqlParser.ROWS);
				this.state = 2253;
				_localctx._frameStart = this.frameBound();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2254;
				_localctx._frameType = this.match(TrinoSqlParser.GROUPS);
				this.state = 2255;
				_localctx._frameStart = this.frameBound();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2256;
				_localctx._frameType = this.match(TrinoSqlParser.RANGE);
				this.state = 2257;
				this.match(TrinoSqlParser.BETWEEN);
				this.state = 2258;
				_localctx._frameStart = this.frameBound();
				this.state = 2259;
				this.match(TrinoSqlParser.AND);
				this.state = 2260;
				_localctx._end = this.frameBound();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2262;
				_localctx._frameType = this.match(TrinoSqlParser.ROWS);
				this.state = 2263;
				this.match(TrinoSqlParser.BETWEEN);
				this.state = 2264;
				_localctx._frameStart = this.frameBound();
				this.state = 2265;
				this.match(TrinoSqlParser.AND);
				this.state = 2266;
				_localctx._end = this.frameBound();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2268;
				_localctx._frameType = this.match(TrinoSqlParser.GROUPS);
				this.state = 2269;
				this.match(TrinoSqlParser.BETWEEN);
				this.state = 2270;
				_localctx._frameStart = this.frameBound();
				this.state = 2271;
				this.match(TrinoSqlParser.AND);
				this.state = 2272;
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
		this.enterRule(_localctx, 142, TrinoSqlParser.RULE_frameBound);
		let _la: number;
		try {
			this.state = 2285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 295, this._ctx) ) {
			case 1:
				_localctx = new UnboundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2276;
				this.match(TrinoSqlParser.UNBOUNDED);
				this.state = 2277;
				(_localctx as UnboundedFrameContext)._boundType = this.match(TrinoSqlParser.PRECEDING);
				}
				break;

			case 2:
				_localctx = new UnboundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2278;
				this.match(TrinoSqlParser.UNBOUNDED);
				this.state = 2279;
				(_localctx as UnboundedFrameContext)._boundType = this.match(TrinoSqlParser.FOLLOWING);
				}
				break;

			case 3:
				_localctx = new CurrentRowBoundContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2280;
				this.match(TrinoSqlParser.CURRENT);
				this.state = 2281;
				this.match(TrinoSqlParser.ROW);
				}
				break;

			case 4:
				_localctx = new BoundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2282;
				this.expression();
				this.state = 2283;
				(_localctx as BoundedFrameContext)._boundType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.FOLLOWING || _la === TrinoSqlParser.PRECEDING)) {
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
		let _startState: number = 144;
		this.enterRecursionRule(_localctx, 144, TrinoSqlParser.RULE_rowPattern, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new QuantifiedPrimaryContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 2288;
			this.patternPrimary();
			this.state = 2290;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 296, this._ctx) ) {
			case 1:
				{
				this.state = 2289;
				this.patternQuantifier();
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2299;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 298, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2297;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 297, this._ctx) ) {
					case 1:
						{
						_localctx = new PatternConcatenationContext(new RowPatternContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_rowPattern);
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
						_localctx = new PatternAlternationContext(new RowPatternContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TrinoSqlParser.RULE_rowPattern);
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
				_alt = this.interpreter.adaptivePredict(this._input, 298, this._ctx);
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
		this.enterRule(_localctx, 146, TrinoSqlParser.RULE_patternPrimary);
		let _la: number;
		try {
			this.state = 2327;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 300, this._ctx) ) {
			case 1:
				_localctx = new PatternVariableContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2302;
				this.identifier();
				}
				break;

			case 2:
				_localctx = new EmptyPatternContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2303;
				this.match(TrinoSqlParser.T__1);
				this.state = 2304;
				this.match(TrinoSqlParser.T__2);
				}
				break;

			case 3:
				_localctx = new PatternPermutationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
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
				while (_la === TrinoSqlParser.T__3) {
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
				_localctx = new GroupedPatternContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
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
				_localctx = new PartitionStartAnchorContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2321;
				this.match(TrinoSqlParser.T__9);
				}
				break;

			case 6:
				_localctx = new PartitionEndAnchorContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2322;
				this.match(TrinoSqlParser.T__10);
				}
				break;

			case 7:
				_localctx = new ExcludedPatternContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 148, TrinoSqlParser.RULE_patternQuantifier);
		let _la: number;
		try {
			this.state = 2359;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 308, this._ctx) ) {
			case 1:
				_localctx = new ZeroOrMoreQuantifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2329;
				this.match(TrinoSqlParser.ASTERISK);
				this.state = 2331;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 301, this._ctx) ) {
				case 1:
					{
					this.state = 2330;
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
				this.state = 2333;
				this.match(TrinoSqlParser.PLUS);
				this.state = 2335;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 302, this._ctx) ) {
				case 1:
					{
					this.state = 2334;
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
				this.state = 2337;
				this.match(TrinoSqlParser.QUESTION_MARK);
				this.state = 2339;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 303, this._ctx) ) {
				case 1:
					{
					this.state = 2338;
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
				this.state = 2341;
				this.match(TrinoSqlParser.T__13);
				this.state = 2342;
				(_localctx as RangeQuantifierContext)._exactly = this.match(TrinoSqlParser.INTEGER_VALUE);
				this.state = 2343;
				this.match(TrinoSqlParser.T__14);
				this.state = 2345;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 304, this._ctx) ) {
				case 1:
					{
					this.state = 2344;
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
				this.state = 2347;
				this.match(TrinoSqlParser.T__13);
				this.state = 2349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.INTEGER_VALUE) {
					{
					this.state = 2348;
					(_localctx as RangeQuantifierContext)._atLeast = this.match(TrinoSqlParser.INTEGER_VALUE);
					}
				}

				this.state = 2351;
				this.match(TrinoSqlParser.T__3);
				this.state = 2353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.INTEGER_VALUE) {
					{
					this.state = 2352;
					(_localctx as RangeQuantifierContext)._atMost = this.match(TrinoSqlParser.INTEGER_VALUE);
					}
				}

				this.state = 2355;
				this.match(TrinoSqlParser.T__14);
				this.state = 2357;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 307, this._ctx) ) {
				case 1:
					{
					this.state = 2356;
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
		this.enterRule(_localctx, 150, TrinoSqlParser.RULE_updateAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 152, TrinoSqlParser.RULE_explainOption);
		let _la: number;
		try {
			this.state = 2369;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.FORMAT:
				_localctx = new ExplainFormatContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2365;
				this.match(TrinoSqlParser.FORMAT);
				this.state = 2366;
				(_localctx as ExplainFormatContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.GRAPHVIZ || _la === TrinoSqlParser.JSON || _la === TrinoSqlParser.TEXT)) {
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
			case TrinoSqlParser.TYPE:
				_localctx = new ExplainTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2367;
				this.match(TrinoSqlParser.TYPE);
				this.state = 2368;
				(_localctx as ExplainTypeContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.DISTRIBUTED || _la === TrinoSqlParser.IO || _la === TrinoSqlParser.LOGICAL || _la === TrinoSqlParser.VALIDATE)) {
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
		this.enterRule(_localctx, 154, TrinoSqlParser.RULE_transactionMode);
		let _la: number;
		try {
			this.state = 2376;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.ISOLATION:
				_localctx = new IsolationLevelContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2371;
				this.match(TrinoSqlParser.ISOLATION);
				this.state = 2372;
				this.match(TrinoSqlParser.LEVEL);
				this.state = 2373;
				this.levelOfIsolation();
				}
				break;
			case TrinoSqlParser.READ:
				_localctx = new TransactionAccessModeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2374;
				this.match(TrinoSqlParser.READ);
				this.state = 2375;
				(_localctx as TransactionAccessModeContext)._accessMode = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === TrinoSqlParser.ONLY || _la === TrinoSqlParser.WRITE)) {
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
		this.enterRule(_localctx, 156, TrinoSqlParser.RULE_levelOfIsolation);
		try {
			this.state = 2385;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 311, this._ctx) ) {
			case 1:
				_localctx = new ReadUncommittedContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2378;
				this.match(TrinoSqlParser.READ);
				this.state = 2379;
				this.match(TrinoSqlParser.UNCOMMITTED);
				}
				break;

			case 2:
				_localctx = new ReadCommittedContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2380;
				this.match(TrinoSqlParser.READ);
				this.state = 2381;
				this.match(TrinoSqlParser.COMMITTED);
				}
				break;

			case 3:
				_localctx = new RepeatableReadContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2382;
				this.match(TrinoSqlParser.REPEATABLE);
				this.state = 2383;
				this.match(TrinoSqlParser.READ);
				}
				break;

			case 4:
				_localctx = new SerializableContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2384;
				this.match(TrinoSqlParser.SERIALIZABLE);
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
		this.enterRule(_localctx, 158, TrinoSqlParser.RULE_callArgument);
		try {
			this.state = 2392;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 312, this._ctx) ) {
			case 1:
				_localctx = new PositionalArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2387;
				this.expression();
				}
				break;

			case 2:
				_localctx = new NamedArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 160, TrinoSqlParser.RULE_pathElement);
		try {
			this.state = 2399;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 313, this._ctx) ) {
			case 1:
				_localctx = new QualifiedArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
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
				_localctx = new UnqualifiedArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2398;
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
		this.enterRule(_localctx, 162, TrinoSqlParser.RULE_pathSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2401;
			this.pathElement();
			this.state = 2406;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TrinoSqlParser.T__3) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 164, TrinoSqlParser.RULE_privilege);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2409;
			_la = this._input.LA(1);
			if (!(_la === TrinoSqlParser.DELETE || _la === TrinoSqlParser.INSERT || _la === TrinoSqlParser.SELECT || _la === TrinoSqlParser.UPDATE)) {
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
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, TrinoSqlParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2411;
			this.identifier();
			this.state = 2416;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 315, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 315, this._ctx);
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
		this.enterRule(_localctx, 168, TrinoSqlParser.RULE_grantor);
		try {
			this.state = 2422;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.ADD:
			case TrinoSqlParser.ADMIN:
			case TrinoSqlParser.AFTER:
			case TrinoSqlParser.ALL:
			case TrinoSqlParser.ANALYZE:
			case TrinoSqlParser.ANY:
			case TrinoSqlParser.ARRAY:
			case TrinoSqlParser.ASC:
			case TrinoSqlParser.AT:
			case TrinoSqlParser.AUTHORIZATION:
			case TrinoSqlParser.BERNOULLI:
			case TrinoSqlParser.CALL:
			case TrinoSqlParser.CASCADE:
			case TrinoSqlParser.CATALOGS:
			case TrinoSqlParser.COLUMN:
			case TrinoSqlParser.COLUMNS:
			case TrinoSqlParser.COMMENT:
			case TrinoSqlParser.COMMIT:
			case TrinoSqlParser.COMMITTED:
			case TrinoSqlParser.CURRENT:
			case TrinoSqlParser.DATA:
			case TrinoSqlParser.DATE:
			case TrinoSqlParser.DAY:
			case TrinoSqlParser.DEFAULT:
			case TrinoSqlParser.DEFINER:
			case TrinoSqlParser.DESC:
			case TrinoSqlParser.DEFINE:
			case TrinoSqlParser.DISTRIBUTED:
			case TrinoSqlParser.DOUBLE:
			case TrinoSqlParser.EMPTY:
			case TrinoSqlParser.EXCLUDING:
			case TrinoSqlParser.EXPLAIN:
			case TrinoSqlParser.FETCH:
			case TrinoSqlParser.FILTER:
			case TrinoSqlParser.FINAL:
			case TrinoSqlParser.FIRST:
			case TrinoSqlParser.FOLLOWING:
			case TrinoSqlParser.FORMAT:
			case TrinoSqlParser.FUNCTIONS:
			case TrinoSqlParser.GRANT:
			case TrinoSqlParser.GRANTED:
			case TrinoSqlParser.GRANTS:
			case TrinoSqlParser.DENY:
			case TrinoSqlParser.GRAPHVIZ:
			case TrinoSqlParser.GROUPS:
			case TrinoSqlParser.HOUR:
			case TrinoSqlParser.IF:
			case TrinoSqlParser.IGNORE:
			case TrinoSqlParser.INCLUDING:
			case TrinoSqlParser.INITIAL:
			case TrinoSqlParser.INPUT:
			case TrinoSqlParser.INTERVAL:
			case TrinoSqlParser.INVOKER:
			case TrinoSqlParser.IO:
			case TrinoSqlParser.ISOLATION:
			case TrinoSqlParser.JSON:
			case TrinoSqlParser.LAST:
			case TrinoSqlParser.LATERAL:
			case TrinoSqlParser.LEVEL:
			case TrinoSqlParser.LIMIT:
			case TrinoSqlParser.LOCAL:
			case TrinoSqlParser.LOGICAL:
			case TrinoSqlParser.MAP:
			case TrinoSqlParser.MATCH:
			case TrinoSqlParser.MATCHED:
			case TrinoSqlParser.MATCHES:
			case TrinoSqlParser.MATCH_RECOGNIZE:
			case TrinoSqlParser.MATERIALIZED:
			case TrinoSqlParser.MEASURES:
			case TrinoSqlParser.MERGE:
			case TrinoSqlParser.MINUTE:
			case TrinoSqlParser.MONTH:
			case TrinoSqlParser.NEXT:
			case TrinoSqlParser.NFC:
			case TrinoSqlParser.NFD:
			case TrinoSqlParser.NFKC:
			case TrinoSqlParser.NFKD:
			case TrinoSqlParser.NO:
			case TrinoSqlParser.NONE:
			case TrinoSqlParser.NULLIF:
			case TrinoSqlParser.NULLS:
			case TrinoSqlParser.OFFSET:
			case TrinoSqlParser.OMIT:
			case TrinoSqlParser.ONE:
			case TrinoSqlParser.ONLY:
			case TrinoSqlParser.OPTION:
			case TrinoSqlParser.ORDINALITY:
			case TrinoSqlParser.OUTPUT:
			case TrinoSqlParser.OVER:
			case TrinoSqlParser.PARTITION:
			case TrinoSqlParser.PARTITIONS:
			case TrinoSqlParser.PAST:
			case TrinoSqlParser.PATH:
			case TrinoSqlParser.PATTERN:
			case TrinoSqlParser.PER:
			case TrinoSqlParser.PERMUTE:
			case TrinoSqlParser.POSITION:
			case TrinoSqlParser.PRECEDING:
			case TrinoSqlParser.PRECISION:
			case TrinoSqlParser.PRIVILEGES:
			case TrinoSqlParser.PROPERTIES:
			case TrinoSqlParser.RANGE:
			case TrinoSqlParser.READ:
			case TrinoSqlParser.REFRESH:
			case TrinoSqlParser.RENAME:
			case TrinoSqlParser.REPEATABLE:
			case TrinoSqlParser.REPLACE:
			case TrinoSqlParser.RESET:
			case TrinoSqlParser.RESPECT:
			case TrinoSqlParser.RESTRICT:
			case TrinoSqlParser.REVOKE:
			case TrinoSqlParser.ROLE:
			case TrinoSqlParser.ROLES:
			case TrinoSqlParser.ROLLBACK:
			case TrinoSqlParser.ROW:
			case TrinoSqlParser.ROWS:
			case TrinoSqlParser.RUNNING:
			case TrinoSqlParser.SCHEMA:
			case TrinoSqlParser.SCHEMAS:
			case TrinoSqlParser.SECOND:
			case TrinoSqlParser.SECURITY:
			case TrinoSqlParser.SEEK:
			case TrinoSqlParser.SERIALIZABLE:
			case TrinoSqlParser.SESSION:
			case TrinoSqlParser.SET:
			case TrinoSqlParser.SETS:
			case TrinoSqlParser.SHOW:
			case TrinoSqlParser.SOME:
			case TrinoSqlParser.START:
			case TrinoSqlParser.STATS:
			case TrinoSqlParser.SUBSET:
			case TrinoSqlParser.SUBSTRING:
			case TrinoSqlParser.SYSTEM:
			case TrinoSqlParser.TABLES:
			case TrinoSqlParser.TABLESAMPLE:
			case TrinoSqlParser.TEXT:
			case TrinoSqlParser.TIES:
			case TrinoSqlParser.TIME:
			case TrinoSqlParser.TIMESTAMP:
			case TrinoSqlParser.TO:
			case TrinoSqlParser.TRANSACTION:
			case TrinoSqlParser.TRUNCATE:
			case TrinoSqlParser.TRY_CAST:
			case TrinoSqlParser.TYPE:
			case TrinoSqlParser.UNBOUNDED:
			case TrinoSqlParser.UNCOMMITTED:
			case TrinoSqlParser.UNMATCHED:
			case TrinoSqlParser.UPDATE:
			case TrinoSqlParser.USE:
			case TrinoSqlParser.USER:
			case TrinoSqlParser.VALIDATE:
			case TrinoSqlParser.VERBOSE:
			case TrinoSqlParser.VIEW:
			case TrinoSqlParser.WINDOW:
			case TrinoSqlParser.WITHOUT:
			case TrinoSqlParser.WORK:
			case TrinoSqlParser.WRITE:
			case TrinoSqlParser.YEAR:
			case TrinoSqlParser.ZONE:
			case TrinoSqlParser.IDENTIFIER:
			case TrinoSqlParser.DIGIT_IDENTIFIER:
			case TrinoSqlParser.QUOTED_IDENTIFIER:
			case TrinoSqlParser.BACKQUOTED_IDENTIFIER:
				_localctx = new SpecifiedPrincipalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2419;
				this.principal();
				}
				break;
			case TrinoSqlParser.CURRENT_USER:
				_localctx = new CurrentUserGrantorContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2420;
				this.match(TrinoSqlParser.CURRENT_USER);
				}
				break;
			case TrinoSqlParser.CURRENT_ROLE:
				_localctx = new CurrentRoleGrantorContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 170, TrinoSqlParser.RULE_principal);
		try {
			this.state = 2429;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 317, this._ctx) ) {
			case 1:
				_localctx = new UnspecifiedPrincipalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2424;
				this.identifier();
				}
				break;

			case 2:
				_localctx = new UserPrincipalContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2425;
				this.match(TrinoSqlParser.USER);
				this.state = 2426;
				this.identifier();
				}
				break;

			case 3:
				_localctx = new RolePrincipalContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 172, TrinoSqlParser.RULE_roles);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2431;
			this.identifier();
			this.state = 2436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TrinoSqlParser.T__3) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 174, TrinoSqlParser.RULE_identifier);
		try {
			this.state = 2444;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TrinoSqlParser.IDENTIFIER:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2439;
				this.match(TrinoSqlParser.IDENTIFIER);
				}
				break;
			case TrinoSqlParser.QUOTED_IDENTIFIER:
				_localctx = new QuotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2440;
				this.match(TrinoSqlParser.QUOTED_IDENTIFIER);
				}
				break;
			case TrinoSqlParser.ADD:
			case TrinoSqlParser.ADMIN:
			case TrinoSqlParser.AFTER:
			case TrinoSqlParser.ALL:
			case TrinoSqlParser.ANALYZE:
			case TrinoSqlParser.ANY:
			case TrinoSqlParser.ARRAY:
			case TrinoSqlParser.ASC:
			case TrinoSqlParser.AT:
			case TrinoSqlParser.AUTHORIZATION:
			case TrinoSqlParser.BERNOULLI:
			case TrinoSqlParser.CALL:
			case TrinoSqlParser.CASCADE:
			case TrinoSqlParser.CATALOGS:
			case TrinoSqlParser.COLUMN:
			case TrinoSqlParser.COLUMNS:
			case TrinoSqlParser.COMMENT:
			case TrinoSqlParser.COMMIT:
			case TrinoSqlParser.COMMITTED:
			case TrinoSqlParser.CURRENT:
			case TrinoSqlParser.DATA:
			case TrinoSqlParser.DATE:
			case TrinoSqlParser.DAY:
			case TrinoSqlParser.DEFAULT:
			case TrinoSqlParser.DEFINER:
			case TrinoSqlParser.DESC:
			case TrinoSqlParser.DEFINE:
			case TrinoSqlParser.DISTRIBUTED:
			case TrinoSqlParser.DOUBLE:
			case TrinoSqlParser.EMPTY:
			case TrinoSqlParser.EXCLUDING:
			case TrinoSqlParser.EXPLAIN:
			case TrinoSqlParser.FETCH:
			case TrinoSqlParser.FILTER:
			case TrinoSqlParser.FINAL:
			case TrinoSqlParser.FIRST:
			case TrinoSqlParser.FOLLOWING:
			case TrinoSqlParser.FORMAT:
			case TrinoSqlParser.FUNCTIONS:
			case TrinoSqlParser.GRANT:
			case TrinoSqlParser.GRANTED:
			case TrinoSqlParser.GRANTS:
			case TrinoSqlParser.DENY:
			case TrinoSqlParser.GRAPHVIZ:
			case TrinoSqlParser.GROUPS:
			case TrinoSqlParser.HOUR:
			case TrinoSqlParser.IF:
			case TrinoSqlParser.IGNORE:
			case TrinoSqlParser.INCLUDING:
			case TrinoSqlParser.INITIAL:
			case TrinoSqlParser.INPUT:
			case TrinoSqlParser.INTERVAL:
			case TrinoSqlParser.INVOKER:
			case TrinoSqlParser.IO:
			case TrinoSqlParser.ISOLATION:
			case TrinoSqlParser.JSON:
			case TrinoSqlParser.LAST:
			case TrinoSqlParser.LATERAL:
			case TrinoSqlParser.LEVEL:
			case TrinoSqlParser.LIMIT:
			case TrinoSqlParser.LOCAL:
			case TrinoSqlParser.LOGICAL:
			case TrinoSqlParser.MAP:
			case TrinoSqlParser.MATCH:
			case TrinoSqlParser.MATCHED:
			case TrinoSqlParser.MATCHES:
			case TrinoSqlParser.MATCH_RECOGNIZE:
			case TrinoSqlParser.MATERIALIZED:
			case TrinoSqlParser.MEASURES:
			case TrinoSqlParser.MERGE:
			case TrinoSqlParser.MINUTE:
			case TrinoSqlParser.MONTH:
			case TrinoSqlParser.NEXT:
			case TrinoSqlParser.NFC:
			case TrinoSqlParser.NFD:
			case TrinoSqlParser.NFKC:
			case TrinoSqlParser.NFKD:
			case TrinoSqlParser.NO:
			case TrinoSqlParser.NONE:
			case TrinoSqlParser.NULLIF:
			case TrinoSqlParser.NULLS:
			case TrinoSqlParser.OFFSET:
			case TrinoSqlParser.OMIT:
			case TrinoSqlParser.ONE:
			case TrinoSqlParser.ONLY:
			case TrinoSqlParser.OPTION:
			case TrinoSqlParser.ORDINALITY:
			case TrinoSqlParser.OUTPUT:
			case TrinoSqlParser.OVER:
			case TrinoSqlParser.PARTITION:
			case TrinoSqlParser.PARTITIONS:
			case TrinoSqlParser.PAST:
			case TrinoSqlParser.PATH:
			case TrinoSqlParser.PATTERN:
			case TrinoSqlParser.PER:
			case TrinoSqlParser.PERMUTE:
			case TrinoSqlParser.POSITION:
			case TrinoSqlParser.PRECEDING:
			case TrinoSqlParser.PRECISION:
			case TrinoSqlParser.PRIVILEGES:
			case TrinoSqlParser.PROPERTIES:
			case TrinoSqlParser.RANGE:
			case TrinoSqlParser.READ:
			case TrinoSqlParser.REFRESH:
			case TrinoSqlParser.RENAME:
			case TrinoSqlParser.REPEATABLE:
			case TrinoSqlParser.REPLACE:
			case TrinoSqlParser.RESET:
			case TrinoSqlParser.RESPECT:
			case TrinoSqlParser.RESTRICT:
			case TrinoSqlParser.REVOKE:
			case TrinoSqlParser.ROLE:
			case TrinoSqlParser.ROLES:
			case TrinoSqlParser.ROLLBACK:
			case TrinoSqlParser.ROW:
			case TrinoSqlParser.ROWS:
			case TrinoSqlParser.RUNNING:
			case TrinoSqlParser.SCHEMA:
			case TrinoSqlParser.SCHEMAS:
			case TrinoSqlParser.SECOND:
			case TrinoSqlParser.SECURITY:
			case TrinoSqlParser.SEEK:
			case TrinoSqlParser.SERIALIZABLE:
			case TrinoSqlParser.SESSION:
			case TrinoSqlParser.SET:
			case TrinoSqlParser.SETS:
			case TrinoSqlParser.SHOW:
			case TrinoSqlParser.SOME:
			case TrinoSqlParser.START:
			case TrinoSqlParser.STATS:
			case TrinoSqlParser.SUBSET:
			case TrinoSqlParser.SUBSTRING:
			case TrinoSqlParser.SYSTEM:
			case TrinoSqlParser.TABLES:
			case TrinoSqlParser.TABLESAMPLE:
			case TrinoSqlParser.TEXT:
			case TrinoSqlParser.TIES:
			case TrinoSqlParser.TIME:
			case TrinoSqlParser.TIMESTAMP:
			case TrinoSqlParser.TO:
			case TrinoSqlParser.TRANSACTION:
			case TrinoSqlParser.TRUNCATE:
			case TrinoSqlParser.TRY_CAST:
			case TrinoSqlParser.TYPE:
			case TrinoSqlParser.UNBOUNDED:
			case TrinoSqlParser.UNCOMMITTED:
			case TrinoSqlParser.UNMATCHED:
			case TrinoSqlParser.UPDATE:
			case TrinoSqlParser.USE:
			case TrinoSqlParser.USER:
			case TrinoSqlParser.VALIDATE:
			case TrinoSqlParser.VERBOSE:
			case TrinoSqlParser.VIEW:
			case TrinoSqlParser.WINDOW:
			case TrinoSqlParser.WITHOUT:
			case TrinoSqlParser.WORK:
			case TrinoSqlParser.WRITE:
			case TrinoSqlParser.YEAR:
			case TrinoSqlParser.ZONE:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2441;
				this.nonReserved();
				}
				break;
			case TrinoSqlParser.BACKQUOTED_IDENTIFIER:
				_localctx = new BackQuotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2442;
				this.match(TrinoSqlParser.BACKQUOTED_IDENTIFIER);
				}
				break;
			case TrinoSqlParser.DIGIT_IDENTIFIER:
				_localctx = new DigitIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 176, TrinoSqlParser.RULE_number);
		let _la: number;
		try {
			this.state = 2458;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 323, this._ctx) ) {
			case 1:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2447;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.MINUS) {
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
				_localctx = new DoubleLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.MINUS) {
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
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TrinoSqlParser.MINUS) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 178, TrinoSqlParser.RULE_nonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2460;
			_la = this._input.LA(1);
			if (!(((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (TrinoSqlParser.ADD - 17)) | (1 << (TrinoSqlParser.ADMIN - 17)) | (1 << (TrinoSqlParser.AFTER - 17)) | (1 << (TrinoSqlParser.ALL - 17)) | (1 << (TrinoSqlParser.ANALYZE - 17)) | (1 << (TrinoSqlParser.ANY - 17)) | (1 << (TrinoSqlParser.ARRAY - 17)) | (1 << (TrinoSqlParser.ASC - 17)) | (1 << (TrinoSqlParser.AT - 17)) | (1 << (TrinoSqlParser.AUTHORIZATION - 17)) | (1 << (TrinoSqlParser.BERNOULLI - 17)) | (1 << (TrinoSqlParser.CALL - 17)) | (1 << (TrinoSqlParser.CASCADE - 17)) | (1 << (TrinoSqlParser.CATALOGS - 17)) | (1 << (TrinoSqlParser.COLUMN - 17)) | (1 << (TrinoSqlParser.COLUMNS - 17)) | (1 << (TrinoSqlParser.COMMENT - 17)) | (1 << (TrinoSqlParser.COMMIT - 17)) | (1 << (TrinoSqlParser.COMMITTED - 17)) | (1 << (TrinoSqlParser.CURRENT - 17)))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (TrinoSqlParser.DATA - 56)) | (1 << (TrinoSqlParser.DATE - 56)) | (1 << (TrinoSqlParser.DAY - 56)) | (1 << (TrinoSqlParser.DEFAULT - 56)) | (1 << (TrinoSqlParser.DEFINER - 56)) | (1 << (TrinoSqlParser.DESC - 56)) | (1 << (TrinoSqlParser.DEFINE - 56)) | (1 << (TrinoSqlParser.DISTRIBUTED - 56)) | (1 << (TrinoSqlParser.DOUBLE - 56)) | (1 << (TrinoSqlParser.EMPTY - 56)) | (1 << (TrinoSqlParser.EXCLUDING - 56)) | (1 << (TrinoSqlParser.EXPLAIN - 56)) | (1 << (TrinoSqlParser.FETCH - 56)) | (1 << (TrinoSqlParser.FILTER - 56)) | (1 << (TrinoSqlParser.FINAL - 56)) | (1 << (TrinoSqlParser.FIRST - 56)) | (1 << (TrinoSqlParser.FOLLOWING - 56)) | (1 << (TrinoSqlParser.FORMAT - 56)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (TrinoSqlParser.FUNCTIONS - 90)) | (1 << (TrinoSqlParser.GRANT - 90)) | (1 << (TrinoSqlParser.GRANTED - 90)) | (1 << (TrinoSqlParser.GRANTS - 90)) | (1 << (TrinoSqlParser.DENY - 90)) | (1 << (TrinoSqlParser.GRAPHVIZ - 90)) | (1 << (TrinoSqlParser.GROUPS - 90)) | (1 << (TrinoSqlParser.HOUR - 90)) | (1 << (TrinoSqlParser.IF - 90)) | (1 << (TrinoSqlParser.IGNORE - 90)) | (1 << (TrinoSqlParser.INCLUDING - 90)) | (1 << (TrinoSqlParser.INITIAL - 90)) | (1 << (TrinoSqlParser.INPUT - 90)) | (1 << (TrinoSqlParser.INTERVAL - 90)) | (1 << (TrinoSqlParser.INVOKER - 90)) | (1 << (TrinoSqlParser.IO - 90)) | (1 << (TrinoSqlParser.ISOLATION - 90)) | (1 << (TrinoSqlParser.JSON - 90)) | (1 << (TrinoSqlParser.LAST - 90)) | (1 << (TrinoSqlParser.LATERAL - 90)) | (1 << (TrinoSqlParser.LEVEL - 90)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (TrinoSqlParser.LIMIT - 123)) | (1 << (TrinoSqlParser.LOCAL - 123)) | (1 << (TrinoSqlParser.LOGICAL - 123)) | (1 << (TrinoSqlParser.MAP - 123)) | (1 << (TrinoSqlParser.MATCH - 123)) | (1 << (TrinoSqlParser.MATCHED - 123)) | (1 << (TrinoSqlParser.MATCHES - 123)) | (1 << (TrinoSqlParser.MATCH_RECOGNIZE - 123)) | (1 << (TrinoSqlParser.MATERIALIZED - 123)) | (1 << (TrinoSqlParser.MEASURES - 123)) | (1 << (TrinoSqlParser.MERGE - 123)) | (1 << (TrinoSqlParser.MINUTE - 123)) | (1 << (TrinoSqlParser.MONTH - 123)) | (1 << (TrinoSqlParser.NEXT - 123)) | (1 << (TrinoSqlParser.NFC - 123)) | (1 << (TrinoSqlParser.NFD - 123)) | (1 << (TrinoSqlParser.NFKC - 123)) | (1 << (TrinoSqlParser.NFKD - 123)) | (1 << (TrinoSqlParser.NO - 123)) | (1 << (TrinoSqlParser.NONE - 123)) | (1 << (TrinoSqlParser.NULLIF - 123)) | (1 << (TrinoSqlParser.NULLS - 123)) | (1 << (TrinoSqlParser.OFFSET - 123)) | (1 << (TrinoSqlParser.OMIT - 123)) | (1 << (TrinoSqlParser.ONE - 123)))) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (TrinoSqlParser.ONLY - 155)) | (1 << (TrinoSqlParser.OPTION - 155)) | (1 << (TrinoSqlParser.ORDINALITY - 155)) | (1 << (TrinoSqlParser.OUTPUT - 155)) | (1 << (TrinoSqlParser.OVER - 155)) | (1 << (TrinoSqlParser.PARTITION - 155)) | (1 << (TrinoSqlParser.PARTITIONS - 155)) | (1 << (TrinoSqlParser.PAST - 155)) | (1 << (TrinoSqlParser.PATH - 155)) | (1 << (TrinoSqlParser.PATTERN - 155)) | (1 << (TrinoSqlParser.PER - 155)) | (1 << (TrinoSqlParser.PERMUTE - 155)) | (1 << (TrinoSqlParser.POSITION - 155)) | (1 << (TrinoSqlParser.PRECEDING - 155)) | (1 << (TrinoSqlParser.PRECISION - 155)) | (1 << (TrinoSqlParser.PRIVILEGES - 155)) | (1 << (TrinoSqlParser.PROPERTIES - 155)) | (1 << (TrinoSqlParser.RANGE - 155)) | (1 << (TrinoSqlParser.READ - 155)) | (1 << (TrinoSqlParser.REFRESH - 155)) | (1 << (TrinoSqlParser.RENAME - 155)) | (1 << (TrinoSqlParser.REPEATABLE - 155)) | (1 << (TrinoSqlParser.REPLACE - 155)) | (1 << (TrinoSqlParser.RESET - 155)) | (1 << (TrinoSqlParser.RESPECT - 155)) | (1 << (TrinoSqlParser.RESTRICT - 155)) | (1 << (TrinoSqlParser.REVOKE - 155)))) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & ((1 << (TrinoSqlParser.ROLE - 188)) | (1 << (TrinoSqlParser.ROLES - 188)) | (1 << (TrinoSqlParser.ROLLBACK - 188)) | (1 << (TrinoSqlParser.ROW - 188)) | (1 << (TrinoSqlParser.ROWS - 188)) | (1 << (TrinoSqlParser.RUNNING - 188)) | (1 << (TrinoSqlParser.SCHEMA - 188)) | (1 << (TrinoSqlParser.SCHEMAS - 188)) | (1 << (TrinoSqlParser.SECOND - 188)) | (1 << (TrinoSqlParser.SECURITY - 188)) | (1 << (TrinoSqlParser.SEEK - 188)) | (1 << (TrinoSqlParser.SERIALIZABLE - 188)) | (1 << (TrinoSqlParser.SESSION - 188)) | (1 << (TrinoSqlParser.SET - 188)) | (1 << (TrinoSqlParser.SETS - 188)) | (1 << (TrinoSqlParser.SHOW - 188)) | (1 << (TrinoSqlParser.SOME - 188)) | (1 << (TrinoSqlParser.START - 188)) | (1 << (TrinoSqlParser.STATS - 188)) | (1 << (TrinoSqlParser.SUBSET - 188)) | (1 << (TrinoSqlParser.SUBSTRING - 188)) | (1 << (TrinoSqlParser.SYSTEM - 188)) | (1 << (TrinoSqlParser.TABLES - 188)) | (1 << (TrinoSqlParser.TABLESAMPLE - 188)) | (1 << (TrinoSqlParser.TEXT - 188)) | (1 << (TrinoSqlParser.TIES - 188)) | (1 << (TrinoSqlParser.TIME - 188)) | (1 << (TrinoSqlParser.TIMESTAMP - 188)))) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & ((1 << (TrinoSqlParser.TO - 220)) | (1 << (TrinoSqlParser.TRANSACTION - 220)) | (1 << (TrinoSqlParser.TRUNCATE - 220)) | (1 << (TrinoSqlParser.TRY_CAST - 220)) | (1 << (TrinoSqlParser.TYPE - 220)) | (1 << (TrinoSqlParser.UNBOUNDED - 220)) | (1 << (TrinoSqlParser.UNCOMMITTED - 220)) | (1 << (TrinoSqlParser.UNMATCHED - 220)) | (1 << (TrinoSqlParser.UPDATE - 220)) | (1 << (TrinoSqlParser.USE - 220)) | (1 << (TrinoSqlParser.USER - 220)) | (1 << (TrinoSqlParser.VALIDATE - 220)) | (1 << (TrinoSqlParser.VERBOSE - 220)) | (1 << (TrinoSqlParser.VIEW - 220)) | (1 << (TrinoSqlParser.WINDOW - 220)) | (1 << (TrinoSqlParser.WITHOUT - 220)) | (1 << (TrinoSqlParser.WORK - 220)) | (1 << (TrinoSqlParser.WRITE - 220)) | (1 << (TrinoSqlParser.YEAR - 220)) | (1 << (TrinoSqlParser.ZONE - 220)))) !== 0))) {
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
		case 20:
			return this.queryTerm_sempred(_localctx as QueryTermContext, predIndex);

		case 32:
			return this.relation_sempred(_localctx as RelationContext, predIndex);

		case 48:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 50:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);

		case 51:
			return this.primaryExpression_sempred(_localctx as PrimaryExpressionContext, predIndex);

		case 62:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 72:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u0117\u09A1\x04" +
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
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x03\x02\x07\x02\xB8\n\x02\f\x02\x0E\x02\xBB" +
		"\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"\xC4\n\x03\x03\x04\x03\x04\x05\x04\xC8\n\x04\x03\x05\x03\x05\x05\x05\xCC" +
		"\n\x05\x03\x06\x03\x06\x05\x06\xD0\n\x06\x03\x07\x03\x07\x05\x07\xD4\n" +
		"\x07\x03\b\x03\b\x05\b\xD8\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xE7\n\t\x03\t\x03\t\x03\t" +
		"\x05\t\xEC\n\t\x03\t\x03\t\x05\t\xF0\n\t\x03\t\x03\t\x03\t\x03\t\x05\t" +
		"\xF6\n\t\x03\t\x03\t\x05\t\xFA\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\u010F\n\t\x03\t\x03\t\x05\t\u0113\n\t\x03\t\x03\t\x05\t" +
		"\u0117\n\t\x03\t\x03\t\x05\t\u011B\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x05\t\u0123\n\t\x03\t\x03\t\x05\t\u0127\n\t\x03\t\x05\t\u012A\n\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0131\n\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x07\t\u0138\n\t\f\t\x0E\t\u013B\v\t\x03\t\x03\t\x03\t\x05\t\u0140\n" +
		"\t\x03\t\x03\t\x05\t\u0144\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\u014A\n\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0151\n\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x05\t\u015A\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x05\t\u0163\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x05\t\u0171\n\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x05\t\u017A\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0180\n\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0187\n\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t\u0191\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05" +
		"\t\u0198\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u01A0\n\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u01A8\n\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u01C3\n" +
		"\t\f\t\x0E\t\u01C6\v\t\x05\t\u01C8\n\t\x03\t\x05\t\u01CB\n\t\x03\t\x03" +
		"\t\x05\t\u01CF\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\u01D5\n\t\x03\t\x03\t" +
		"\x03\t\x05\t\u01DA\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u01E1\n\t\x03" +
		"\t\x03\t\x03\t\x05\t\u01E6\n\t\x03\t\x03\t\x05\t\u01EA\n\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x05\t\u01F2\n\t\x03\t\x03\t\x03\t\x03\t\x05\t" +
		"\u01F8\n\t\x03\t\x03\t\x05\t\u01FC\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u020A\n\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t\u0212\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05" +
		"\t\u0225\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07" +
		"\t\u023C\n\t\f\t\x0E\t\u023F\v\t\x05\t\u0241\n\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x05\t\u024B\n\t\x03\t\x03\t\x05\t\u024F\n\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u025A\n\t" +
		"\f\t\x0E\t\u025D\v\t\x03\t\x03\t\x03\t\x05\t\u0262\n\t\x03\t\x03\t\x03" +
		"\t\x05\t\u0267\n\t\x03\t\x03\t\x05\t\u026B\n\t\x03\t\x03\t\x03\t\x03\t" +
		"\x05\t\u0271\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0278\n\t\f\t\x0E" +
		"\t\u027B\v\t\x03\t\x03\t\x03\t\x05\t\u0280\n\t\x03\t\x03\t\x05\t\u0284" +
		"\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u028B\n\t\x03\t\x03\t\x05\t\u028F" +
		"\n\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0295\n\t\f\t\x0E\t\u0298\v\t\x03\t" +
		"\x03\t\x05\t\u029C\n\t\x03\t\x03\t\x05\t\u02A0\n\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x05\t\u02A8\n\t\x03\t\x03\t\x03\t\x03\t\x07\t\u02AE\n\t" +
		"\f\t\x0E\t\u02B1\v\t\x03\t\x03\t\x05\t\u02B5\n\t\x03\t\x03\t\x05\t\u02B9" +
		"\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u02C3\n\t\x03" +
		"\t\x03\t\x03\t\x07\t\u02C8\n\t\f\t\x0E\t\u02CB\v\t\x03\t\x03\t\x05\t\u02CF" +
		"\n\t\x03\t\x03\t\x05\t\u02D3\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\u02DD\n\t\x03\t\x05\t\u02E0\n\t\x03\t\x03\t\x05\t\u02E4" +
		"\n\t\x03\t\x05\t\u02E7\n\t\x03\t\x03\t\x03\t\x03\t\x07\t\u02ED\n\t\f\t" +
		"\x0E\t\u02F0\v\t\x03\t\x03\t\x05\t\u02F4\n\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u030C\n\t\x03\t\x03\t\x03\t\x03" +
		"\t\x05\t\u0312\n\t\x05\t\u0314\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\u031A" +
		"\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0320\n\t\x05\t\u0322\n\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x05\t\u032A\n\t\x05\t\u032C\n\t\x03\t\x03\t" +
		"\x03\t\x03\t\x05\t\u0332\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0338\n\t\x05" +
		"\t\u033A\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t\u0349\n\t\x03\t\x03\t\x03\t\x05\t\u034E\n\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0355\n\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0361\n\t\x05\t\u0363\n\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u036B\n\t\x05\t\u036D\n\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x07\t\u037D\n\t\f\t\x0E\t\u0380\v\t\x05\t\u0382\n\t\x03\t\x03" +
		"\t\x05\t\u0386\n\t\x03\t\x03\t\x05\t\u038A\n\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u039A" +
		"\n\t\f\t\x0E\t\u039D\v\t\x05\t\u039F\n\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u03AF\n\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u03B7\n\t\f\t\x0E\t\u03BA\v" +
		"\t\x03\t\x03\t\x05\t\u03BE\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\u03C4\n\t" +
		"\x03\t\x05\t\u03C7\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x06\t\u03CE\n\t\r" +
		"\t\x0E\t\u03CF\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x05\t\u03DC\n\t\x03\n\x05\n\u03DF\n\n\x03\n\x03\n\x03\v\x03\v\x05\v" +
		"\u03E5\n\v\x03\v\x03\v\x03\v\x07\v\u03EA\n\v\f\v\x0E\v\u03ED\v\v\x03\f" +
		"\x03\f\x05\f\u03F1\n\f\x03\r\x03\r\x03\r\x03\r\x05\r\u03F7\n\r\x03\r\x03" +
		"\r\x05\r\u03FB\n\r\x03\r\x03\r\x05\r\u03FF\n\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\u0405\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x10\x07\x10\u040E\n\x10\f\x10\x0E\x10\u0411\v\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x12\x03\x12\x05\x12\u0419\n\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u0421\n\x13\f\x13\x0E\x13\u0424" +
		"\v\x13\x05\x13\u0426\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u042B\n\x13" +
		"\x05\x13\u042D\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0434" +
		"\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u043A\n\x13\x05\x13\u043C" +
		"\n\x13\x03\x14\x03\x14\x05\x14\u0440\n\x14\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u044A\n\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x05\x16\u0450\n\x16\x03\x16\x07\x16\u0453\n\x16\f\x16" +
		"\x0E\x16\u0456\v\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x07\x17\u045F\n\x17\f\x17\x0E\x17\u0462\v\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x05\x17\u0468\n\x17\x03\x18\x03\x18\x05\x18\u046C\n\x18\x03" +
		"\x18\x03\x18\x05\x18\u0470\n\x18\x03\x19\x03\x19\x05\x19\u0474\n\x19\x03" +
		"\x19\x03\x19\x03\x19\x07\x19\u0479\n\x19\f\x19\x0E\x19\u047C\v\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0482\n\x19\f\x19\x0E\x19\u0485\v" +
		"\x19\x05\x19\u0487\n\x19\x03\x19\x03\x19\x05\x19\u048B\n\x19\x03\x19\x03" +
		"\x19\x03\x19\x05\x19\u0490\n\x19\x03\x19\x03\x19\x05\x19\u0494\n\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x07\x19\u049A\n\x19\f\x19\x0E\x19\u049D\v" +
		"\x19\x05\x19\u049F\n\x19\x03\x1A\x05\x1A\u04A2\n\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x07\x1A\u04A7\n\x1A\f\x1A\x0E\x1A\u04AA\v\x1A\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u04B2\n\x1B\f\x1B\x0E\x1B\u04B5\v" +
		"\x1B\x05\x1B\u04B7\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x07\x1B\u04BF\n\x1B\f\x1B\x0E\x1B\u04C2\v\x1B\x05\x1B\u04C4\n\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u04CD\n\x1B" +
		"\f\x1B\x0E\x1B\u04D0\v\x1B\x03\x1B\x03\x1B\x05\x1B\u04D4\n\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u04DA\n\x1C\f\x1C\x0E\x1C\u04DD\v\x1C" +
		"\x05\x1C\u04DF\n\x1C\x03\x1C\x03\x1C\x05\x1C\u04E3\n\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x05\x1E\u04EC\n\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u04F3\n\x1E\f\x1E\x0E\x1E\u04F6\v" +
		"\x1E\x05\x1E\u04F8\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E" +
		"\u04FF\n\x1E\f\x1E\x0E\x1E\u0502\v\x1E\x05\x1E\u0504\n\x1E\x03\x1E\x05" +
		"\x1E\u0507\n\x1E\x03\x1F\x03\x1F\x05\x1F\u050B\n\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x05!\u0516\n!\x03!\x05!\u0519" +
		"\n!\x03!\x03!\x03!\x03!\x03!\x05!\u0520\n!\x03!\x05!\u0523\n!\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x05\"\u0536\n\"\x07\"\u0538\n\"\f\"\x0E\"\u053B\v" +
		"\"\x03#\x05#\u053E\n#\x03#\x03#\x05#\u0542\n#\x03#\x03#\x05#\u0546\n#" +
		"\x03#\x03#\x05#\u054A\n#\x05#\u054C\n#\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x07$\u0555\n$\f$\x0E$\u0558\v$\x03$\x03$\x05$\u055C\n$\x03%\x03%\x03" +
		"%\x03%\x03%\x03%\x03%\x05%\u0565\n%\x03&\x03&\x03\'\x03\'\x03\'\x03\'" +
		"\x03\'\x03\'\x03\'\x03\'\x07\'\u0571\n\'\f\'\x0E\'\u0574\v\'\x05\'\u0576" +
		"\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u057D\n\'\f\'\x0E\'\u0580\v\'" +
		"\x05\'\u0582\n\'\x03\'\x03\'\x03\'\x03\'\x07\'\u0588\n\'\f\'\x0E\'\u058B" +
		"\v\'\x05\'\u058D\n\'\x03\'\x05\'\u0590\n\'\x03\'\x03\'\x03\'\x05\'\u0595" +
		"\n\'\x03\'\x05\'\u0598\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x07\'\u05A2\n\'\f\'\x0E\'\u05A5\v\'\x05\'\u05A7\n\'\x03\'\x03\'\x03" +
		"\'\x03\'\x07\'\u05AD\n\'\f\'\x0E\'\u05B0\v\'\x03\'\x03\'\x05\'\u05B4\n" +
		"\'\x03\'\x03\'\x05\'\u05B8\n\'\x05\'\u05BA\n\'\x05\'\u05BC\n\'\x03(\x03" +
		"(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u05CB\n" +
		")\x05)\u05CD\n)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u05D8" +
		"\n*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x05+\u05ED\n+\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x07,\u05F5\n,\f,\x0E,\u05F8\v,\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x03" +
		".\x05.\u0602\n.\x03.\x03.\x05.\u0606\n.\x05.\u0608\n.\x03/\x03/\x03/\x03" +
		"/\x07/\u060E\n/\f/\x0E/\u0611\v/\x03/\x03/\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x070\u061F\n0\f0\x0E0\u0622\v0\x030\x030\x030\x05" +
		"0\u0627\n0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x050\u0632\n0" +
		"\x031\x031\x032\x032\x032\x052\u0639\n2\x032\x032\x052\u063D\n2\x032\x03" +
		"2\x032\x032\x032\x032\x072\u0645\n2\f2\x0E2\u0648\v2\x033\x033\x033\x03" +
		"3\x033\x033\x033\x033\x033\x033\x053\u0654\n3\x033\x033\x033\x033\x03" +
		"3\x033\x053\u065C\n3\x033\x033\x033\x033\x033\x073\u0663\n3\f3\x0E3\u0666" +
		"\v3\x033\x033\x033\x053\u066B\n3\x033\x033\x033\x033\x033\x033\x053\u0673" +
		"\n3\x033\x033\x033\x033\x053\u0679\n3\x033\x033\x053\u067D\n3\x033\x03" +
		"3\x033\x053\u0682\n3\x033\x033\x033\x053\u0687\n3\x034\x034\x034\x034" +
		"\x054\u068D\n4\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034" +
		"\x034\x074\u069B\n4\f4\x0E4\u069E\v4\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x065\u06B9\n5\r5\x0E5\u06BA\x035\x035\x035\x035" +
		"\x035\x035\x035\x075\u06C4\n5\f5\x0E5\u06C7\v5\x035\x035\x035\x035\x03" +
		"5\x035\x035\x055\u06D0\n5\x035\x055\u06D3\n5\x035\x055\u06D6\n5\x035\x03" +
		"5\x035\x055\u06DB\n5\x035\x035\x035\x075\u06E0\n5\f5\x0E5\u06E3\v5\x05" +
		"5\u06E5\n5\x035\x035\x035\x035\x035\x075\u06EC\n5\f5\x0E5\u06EF\v5\x05" +
		"5\u06F1\n5\x035\x035\x055\u06F5\n5\x035\x055\u06F8\n5\x035\x055\u06FB" +
		"\n5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x075\u0708" +
		"\n5\f5\x0E5\u070B\v5\x055\u070D\n5\x035\x035\x035\x035\x035\x035\x035" +
		"\x035\x035\x035\x035\x035\x035\x035\x035\x065\u071E\n5\r5\x0E5\u071F\x03" +
		"5\x035\x055\u0724\n5\x035\x035\x035\x035\x065\u072A\n5\r5\x0E5\u072B\x03" +
		"5\x035\x055\u0730\n5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x075\u0747\n" +
		"5\f5\x0E5\u074A\v5\x055\u074C\n5\x035\x035\x035\x035\x035\x035\x035\x05" +
		"5\u0755\n5\x035\x035\x035\x035\x055\u075B\n5\x035\x035\x035\x035\x055" +
		"\u0761\n5\x035\x035\x035\x035\x055\u0767\n5\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x055\u0774\n5\x035\x035\x035\x035\x035\x03" +
		"5\x035\x055\u077D\n5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x035\x075\u0791\n5\f5\x0E5\u0794" +
		"\v5\x055\u0796\n5\x035\x055\u0799\n5\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x075\u07A3\n5\f5\x0E5\u07A6\v5\x036\x036\x037\x037\x037\x037\x05" +
		"7\u07AE\n7\x038\x038\x038\x038\x058\u07B4\n8\x058\u07B6\n8\x039\x039\x03" +
		"9\x039\x039\x039\x059\u07BE\n9\x03:\x03:\x03;\x03;\x03<\x03<\x03=\x03" +
		"=\x05=\u07C8\n=\x03=\x03=\x03=\x03=\x05=\u07CE\n=\x03>\x03>\x03?\x03?" +
		"\x03@\x03@\x03@\x03@\x03@\x03@\x07@\u07DA\n@\f@\x0E@\u07DD\v@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x05@\u07E5\n@\x03@\x03@\x03@\x03@\x03@\x05@\u07EC" +
		"\n@\x03@\x03@\x03@\x05@\u07F1\n@\x03@\x03@\x03@\x03@\x03@\x05@\u07F8\n" +
		"@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u0802\n@\x03@\x03@\x03" +
		"@\x05@\u0807\n@\x03@\x03@\x03@\x03@\x03@\x05@\u080E\n@\x03@\x03@\x03@" +
		"\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x03@\x07@\u0826\n@\f@\x0E@\u0829\v@\x03@\x03@\x05" +
		"@\u082D\n@\x05@\u082F\n@\x03@\x03@\x03@\x03@\x03@\x05@\u0836\n@\x07@\u0838" +
		"\n@\f@\x0E@\u083B\v@\x03A\x03A\x03A\x03A\x05A\u0841\nA\x03B\x03B\x05B" +
		"\u0845\nB\x03C\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x03D\x03D\x03E" +
		"\x03E\x03E\x03E\x05E\u0856\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E" +
		"\x03E\x03E\x03E\x07E\u0863\nE\fE\x0EE\u0866\vE\x03E\x03E\x03E\x03E\x05" +
		"E\u086C\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u0875\nE\x03E\x03E" +
		"\x03E\x03E\x03E\x03E\x07E\u087D\nE\fE\x0EE\u0880\vE\x03E\x03E\x05E\u0884" +
		"\nE\x03E\x03E\x03E\x03E\x03E\x07E\u088B\nE\fE\x0EE\u088E\vE\x03E\x03E" +
		"\x05E\u0892\nE\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u089A\nF\x03G\x03G\x03" +
		"G\x03G\x07G\u08A0\nG\fG\x0EG\u08A3\vG\x05G\u08A5\nG\x03G\x03G\x03G\x03" +
		"G\x05G\u08AB\nG\x03G\x05G\u08AE\nG\x03G\x03G\x03G\x03G\x03G\x05G\u08B5" +
		"\nG\x03G\x03G\x03G\x03G\x07G\u08BB\nG\fG\x0EG\u08BE\vG\x05G\u08C0\nG\x03" +
		"G\x03G\x03G\x03G\x07G\u08C6\nG\fG\x0EG\u08C9\vG\x05G\u08CB\nG\x03H\x03" +
		"H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
		"H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u08E5\nH\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u08F0\nI\x03J\x03J\x03J\x05J\u08F5" +
		"\nJ\x03J\x03J\x03J\x03J\x03J\x07J\u08FC\nJ\fJ\x0EJ\u08FF\vJ\x03K\x03K" +
		"\x03K\x03K\x03K\x03K\x03K\x03K\x07K\u0909\nK\fK\x0EK\u090C\vK";
	private static readonly _serializedATNSegment1: string =
		"\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u091A" +
		"\nK\x03L\x03L\x05L\u091E\nL\x03L\x03L\x05L\u0922\nL\x03L\x03L\x05L\u0926" +
		"\nL\x03L\x03L\x03L\x03L\x05L\u092C\nL\x03L\x03L\x05L\u0930\nL\x03L\x03" +
		"L\x05L\u0934\nL\x03L\x03L\x05L\u0938\nL\x05L\u093A\nL\x03M\x03M\x03M\x03" +
		"M\x03N\x03N\x03N\x03N\x05N\u0944\nN\x03O\x03O\x03O\x03O\x03O\x05O\u094B" +
		"\nO\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x05P\u0954\nP\x03Q\x03Q\x03Q\x03" +
		"Q\x03Q\x05Q\u095B\nQ\x03R\x03R\x03R\x03R\x03R\x05R\u0962\nR\x03S\x03S" +
		"\x03S\x07S\u0967\nS\fS\x0ES\u096A\vS\x03T\x03T\x03U\x03U\x03U\x07U\u0971" +
		"\nU\fU\x0EU\u0974\vU\x03V\x03V\x03V\x05V\u0979\nV\x03W\x03W\x03W\x03W" +
		"\x03W\x05W\u0980\nW\x03X\x03X\x03X\x07X\u0985\nX\fX\x0EX\u0988\vX\x03" +
		"Y\x03Y\x03Y\x03Y\x03Y\x05Y\u098F\nY\x03Z\x05Z\u0992\nZ\x03Z\x03Z\x05Z" +
		"\u0996\nZ\x03Z\x03Z\x05Z\u099A\nZ\x03Z\x05Z\u099D\nZ\x03[\x03[\x03[\x02" +
		"\x02\t*Bbfh~\x92\\\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
		"\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
		"x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
		"\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
		"\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0" +
		"\x02\xB2\x02\xB4\x02\x02\x1E\x04\x02$$\xBB\xBB\x04\x02??rr\x04\x02\xC5" +
		"\xC5\xD6\xD6\x04\x02ZZii\x04\x02MMjj\x03\x02\xC2\xC3\x04\x02VV\x8D\x8D" +
		"\x04\x02\u0107\u0107\u010B\u010B\x04\x02LL\xE7\xE7\x04\x02\x1D\x1DAA\x04" +
		"\x02VVxx\x04\x02\x16\x16DD\x04\x02  \xD5\xD5\x04\x02kk\xC9\xC9\x03\x02" +
		"\u0101\u0102\x03\x02\u0103\u0105\x04\x02UU\xC4\xC4\x03\x02\xFB\u0100\x05" +
		"\x02\x16\x16\x1A\x1A\xD0\xD0\x04\x02RR\xE1\xE1\x07\x02<<ff\x8A\x8B\xC7" +
		"\xC7\xF9\xF9\x03\x02\x8E\x91\x04\x02WW\xAD\xAD\x05\x02aaww\xD9\xD9\x06" +
		"\x02EEss\x81\x81\xEE\xEE\x04\x02\x9D\x9D\xF8\xF8\x06\x02@@nn\xCA\xCA\xEA" +
		"\xEA3\x02\x13\x16\x18\x18\x1A\x1B\x1D #$\',11:=??AACCEFIIMMPPSWYY\\ad" +
		"dfhjkmmpprsuuwy{{}~\x81\x8B\x8D\x93\x97\x9A\x9C\x9E\xA1\xA1\xA3\xAE\xB0" +
		"\xB3\xB5\xBC\xBE\xC0\xC2\xC9\xCB\xD5\xD7\xD9\xDB\xE0\xE2\xE3\xE5\xE6\xE8" +
		"\xE8\xEA\xEC\xEE\xEE\xF0\xF1\xF4\xF4\xF6\xFA\x02\u0B33\x02\xB9\x03\x02" +
		"\x02\x02\x04\xC3\x03\x02\x02\x02\x06\xC5\x03\x02\x02\x02\b\xC9\x03\x02" +
		"\x02\x02\n\xCD\x03\x02\x02\x02\f\xD1\x03\x02\x02\x02\x0E\xD5\x03\x02\x02" +
		"\x02\x10\u03DB\x03\x02\x02\x02\x12\u03DE\x03\x02\x02\x02\x14\u03E2\x03" +
		"\x02\x02\x02\x16\u03F0\x03\x02\x02\x02\x18\u03F2\x03\x02\x02\x02\x1A\u0400" +
		"\x03\x02\x02\x02\x1C\u0406\x03\x02\x02\x02\x1E\u040A\x03\x02\x02\x02 " +
		"\u0412\x03\x02\x02\x02\"\u0418\x03\x02\x02\x02$\u041A\x03\x02\x02\x02" +
		"&\u043F\x03\x02\x02\x02(\u0441\x03\x02\x02\x02*\u0443\x03\x02\x02\x02" +
		",\u0467\x03\x02\x02\x02.\u0469\x03\x02\x02\x020\u0471\x03\x02\x02\x02" +
		"2\u04A1\x03\x02\x02\x024\u04D3\x03\x02\x02\x026\u04E2\x03\x02\x02\x02" +
		"8\u04E4\x03\x02\x02\x02:\u04EB\x03\x02\x02\x02<\u0508\x03\x02\x02\x02" +
		">\u0511\x03\x02\x02\x02@\u0522\x03\x02\x02\x02B\u0524\x03\x02\x02\x02" +
		"D\u054B\x03\x02\x02\x02F\u055B\x03\x02\x02\x02H\u055D\x03\x02\x02\x02" +
		"J\u0566\x03\x02\x02\x02L\u0568\x03\x02\x02\x02N\u05BD\x03\x02\x02\x02" +
		"P\u05CC\x03\x02\x02\x02R\u05D7\x03\x02\x02\x02T\u05EC\x03\x02\x02\x02" +
		"V\u05EE\x03\x02\x02\x02X\u05FB\x03\x02\x02\x02Z\u05FF\x03\x02\x02\x02" +
		"\\\u0609\x03\x02\x02\x02^\u0631\x03\x02\x02\x02`\u0633\x03\x02\x02\x02" +
		"b\u063C\x03\x02\x02\x02d\u0686\x03\x02\x02\x02f\u068C\x03\x02\x02\x02" +
		"h\u0798\x03\x02\x02\x02j\u07A7\x03\x02\x02\x02l\u07AD\x03\x02\x02\x02" +
		"n\u07B5\x03\x02\x02\x02p\u07BD\x03\x02\x02\x02r\u07BF\x03\x02\x02\x02" +
		"t\u07C1\x03\x02\x02\x02v\u07C3\x03\x02\x02\x02x\u07C5\x03\x02\x02\x02" +
		"z\u07CF\x03\x02\x02\x02|\u07D1\x03\x02\x02\x02~\u082E\x03\x02\x02\x02" +
		"\x80\u0840\x03\x02\x02\x02\x82\u0844\x03\x02\x02\x02\x84\u0846\x03\x02" +
		"\x02\x02\x86\u084B\x03\x02\x02\x02\x88\u0891\x03\x02\x02\x02\x8A\u0893" +
		"\x03\x02\x02\x02\x8C\u08A4\x03\x02\x02\x02\x8E\u08E4\x03\x02\x02\x02\x90" +
		"\u08EF\x03\x02\x02\x02\x92\u08F1\x03\x02\x02\x02\x94\u0919\x03\x02\x02" +
		"\x02\x96\u0939\x03\x02\x02\x02\x98\u093B\x03\x02\x02\x02\x9A\u0943\x03" +
		"\x02\x02\x02\x9C\u094A\x03\x02\x02\x02\x9E\u0953\x03\x02\x02\x02\xA0\u095A" +
		"\x03\x02\x02\x02\xA2\u0961\x03\x02\x02\x02\xA4\u0963\x03\x02\x02\x02\xA6" +
		"\u096B\x03\x02\x02\x02\xA8\u096D\x03\x02\x02\x02\xAA\u0978\x03\x02\x02" +
		"\x02\xAC\u097F\x03\x02\x02\x02\xAE\u0981\x03\x02\x02\x02\xB0\u098E\x03" +
		"\x02\x02\x02\xB2\u099C\x03\x02\x02\x02\xB4\u099E\x03\x02\x02\x02\xB6\xB8" +
		"\x05\x04\x03\x02\xB7\xB6\x03\x02\x02\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7" +
		"\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBC\x03\x02\x02\x02\xBB\xB9" +
		"\x03\x02\x02\x02\xBC\xBD\x07\x02\x02\x03\xBD\x03\x03\x02\x02\x02\xBE\xC4" +
		"\x05\x06\x04\x02\xBF\xC4\x05\b\x05\x02\xC0\xC4\x05\n\x06\x02\xC1\xC4\x05" +
		"\f\x07\x02\xC2\xC4\x05\x0E\b\x02\xC3\xBE\x03\x02\x02\x02\xC3\xBF\x03\x02" +
		"\x02\x02\xC3\xC0\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC2\x03\x02" +
		"\x02\x02\xC4\x05\x03\x02\x02\x02\xC5\xC7\x05\x10\t\x02\xC6\xC8\x07\u0112" +
		"\x02\x02\xC7\xC6\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\x07\x03\x02" +
		"\x02\x02\xC9\xCB\x05`1\x02\xCA\xCC\x07\u0112\x02\x02\xCB\xCA\x03\x02\x02" +
		"\x02\xCB\xCC\x03\x02\x02\x02\xCC\t\x03\x02\x02\x02\xCD\xCF\x05\xA4S\x02" +
		"\xCE\xD0\x07\u0112\x02\x02\xCF\xCE\x03\x02\x02\x02\xCF\xD0\x03\x02\x02" +
		"\x02\xD0\v\x03\x02\x02\x02\xD1\xD3\x05~@\x02\xD2\xD4\x07\u0112\x02\x02" +
		"\xD3\xD2\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\r\x03\x02\x02\x02" +
		"\xD5\xD7\x05\x92J\x02\xD6\xD8\x07\u0112\x02\x02\xD7\xD6\x03\x02\x02\x02" +
		"\xD7\xD8\x03\x02\x02\x02\xD8\x0F\x03\x02\x02\x02\xD9\u03DC\x05\x12\n\x02" +
		"\xDA\xDB\x07\xEB\x02\x02\xDB\u03DC\x05\xB0Y\x02\xDC\xDD\x07\xEB\x02\x02" +
		"\xDD\xDE\x05\xB0Y\x02\xDE\xDF\x07\x03\x02\x02\xDF\xE0\x05\xB0Y\x02\xE0" +
		"\u03DC\x03\x02\x02\x02\xE1\xE2\x07.\x02\x02\xE2\xE6\x07\xC5\x02\x02\xE3" +
		"\xE4\x07g\x02\x02\xE4\xE5\x07\x95\x02\x02\xE5\xE7\x07O\x02\x02\xE6\xE3" +
		"\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEB" +
		"\x05\xA8U\x02\xE9\xEA\x07\x1F\x02\x02\xEA\xEC\x05\xACW\x02\xEB\xE9\x03" +
		"\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEE\x07" +
		"\xF5\x02\x02\xEE\xF0\x05\x1C\x0F\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03" +
		"\x02\x02\x02\xF0\u03DC\x03\x02\x02\x02\xF1\xF2\x07G\x02\x02\xF2\xF5\x07" +
		"\xC5\x02\x02\xF3\xF4\x07g\x02\x02\xF4\xF6\x07O\x02\x02\xF5\xF3\x03\x02" +
		"\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF9\x05\xA8" +
		"U\x02\xF8\xFA\t\x02\x02\x02\xF9\xF8\x03\x02\x02\x02\xF9\xFA\x03\x02\x02" +
		"\x02\xFA\u03DC\x03\x02\x02\x02\xFB\xFC\x07\x17\x02\x02\xFC\xFD\x07\xC5" +
		"\x02\x02\xFD\xFE\x05\xA8U\x02\xFE\xFF\x07\xB6\x02\x02\xFF\u0100\x07\xDE" +
		"\x02\x02\u0100\u0101\x05\xB0Y\x02\u0101\u03DC\x03\x02\x02\x02\u0102\u0103" +
		"\x07\x17\x02\x02\u0103\u0104\x07\xC5\x02\x02\u0104\u0105\x05\xA8U\x02" +
		"\u0105\u0106\x07\xCD\x02\x02\u0106\u0107\x07\x1F\x02\x02\u0107\u0108\x05" +
		"\xACW\x02\u0108\u03DC\x03\x02\x02\x02\u0109\u010A\x07.\x02\x02\u010A\u010E" +
		"\x07\xD6\x02\x02\u010B\u010C\x07g\x02\x02\u010C\u010D\x07\x95\x02\x02" +
		"\u010D\u010F\x07O\x02\x02\u010E\u010B\x03\x02\x02\x02\u010E\u010F\x03" +
		"\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0112\x05\xA8U\x02\u0111" +
		"\u0113\x05\\/\x02\u0112\u0111\x03\x02\x02\x02\u0112\u0113\x03\x02\x02" +
		"\x02\u0113\u0116\x03\x02\x02\x02\u0114\u0115\x07*\x02\x02\u0115\u0117" +
		"\x05n8\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117" +
		"\u011A\x03\x02\x02\x02\u0118\u0119\x07\xF5\x02\x02\u0119\u011B\x05\x1C" +
		"\x0F\x02\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B" +
		"\u011C\x03\x02\x02\x02\u011C\u0122\x07\x1C\x02\x02\u011D\u0123\x05\x12" +
		"\n\x02\u011E\u011F\x07\x04\x02\x02\u011F\u0120\x05\x12\n\x02\u0120\u0121" +
		"\x07\x05\x02\x02\u0121\u0123\x03\x02\x02\x02\u0122\u011D\x03\x02\x02\x02" +
		"\u0122\u011E\x03\x02\x02\x02\u0123\u0129\x03\x02\x02\x02\u0124\u0126\x07" +
		"\xF5\x02\x02\u0125\u0127\x07\x92\x02\x02\u0126\u0125\x03\x02\x02\x02\u0126" +
		"\u0127\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012A\x07:\x02" +
		"\x02\u0129\u0124\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u03DC" +
		"\x03\x02\x02\x02\u012B\u012C\x07.\x02\x02\u012C\u0130\x07\xD6\x02\x02" +
		"\u012D\u012E\x07g\x02\x02\u012E\u012F\x07\x95\x02\x02\u012F\u0131\x07" +
		"O\x02\x02\u0130\u012D\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131" +
		"\u0132\x03\x02\x02\x02\u0132\u0133\x05\xA8U\x02\u0133\u0134\x07\x04\x02" +
		"\x02\u0134\u0139\x05\x16\f\x02\u0135\u0136\x07\x06\x02\x02\u0136\u0138" +
		"\x05\x16\f\x02\u0137\u0135\x03\x02\x02\x02\u0138\u013B\x03\x02\x02\x02" +
		"\u0139\u0137\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013C\x03" +
		"\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013C\u013F\x07\x05\x02\x02\u013D" +
		"\u013E\x07*\x02\x02\u013E\u0140\x05n8\x02\u013F\u013D\x03\x02\x02\x02" +
		"\u013F\u0140\x03\x02\x02\x02\u0140\u0143\x03\x02\x02\x02\u0141\u0142\x07" +
		"\xF5\x02\x02\u0142\u0144\x05\x1C\x0F\x02\u0143\u0141\x03\x02\x02\x02\u0143" +
		"\u0144\x03\x02\x02\x02\u0144\u03DC\x03\x02\x02\x02\u0145\u0146\x07G\x02" +
		"\x02\u0146\u0149\x07\xD6\x02\x02\u0147\u0148\x07g\x02\x02\u0148\u014A" +
		"\x07O\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02" +
		"\u014A\u014B\x03\x02\x02\x02\u014B\u03DC\x05\xA8U\x02\u014C\u014D\x07" +
		"n\x02\x02\u014D\u014E\x07q\x02\x02\u014E\u0150\x05\xA8U\x02\u014F\u0151" +
		"\x05\\/\x02\u0150\u014F\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151" +
		"\u0152\x03\x02\x02\x02\u0152\u0153\x05\x12\n\x02\u0153\u03DC\x03\x02\x02" +
		"\x02\u0154\u0155\x07@\x02\x02\u0155\u0156\x07Z\x02\x02\u0156\u0159\x05" +
		"\xA8U\x02\u0157\u0158\x07\xF3\x02\x02\u0158\u015A\x05b2\x02\u0159\u0157" +
		"\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u03DC\x03\x02\x02\x02" +
		"\u015B\u015C\x07\xE0\x02\x02\u015C\u015D\x07\xD6\x02\x02\u015D\u03DC\x05" +
		"\xA8U\x02\u015E\u015F\x07\x17\x02\x02\u015F\u0162\x07\xD6\x02\x02\u0160" +
		"\u0161\x07g\x02\x02\u0161\u0163\x07O\x02\x02\u0162\u0160\x03\x02\x02\x02" +
		"\u0162\u0163\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0165\x05" +
		"\xA8U\x02\u0165\u0166\x07\xB6\x02\x02\u0166\u0167\x07\xDE\x02\x02\u0167" +
		"\u0168\x05\xA8U\x02\u0168\u03DC\x03\x02\x02\x02\u0169\u016A\x07*\x02\x02" +
		"\u016A\u016B\x07\x9B\x02\x02\u016B\u016C\x07\xD6\x02\x02\u016C\u016D\x05" +
		"\xA8U\x02\u016D\u0170\x07t\x02\x02\u016E\u0171\x05n8\x02\u016F\u0171\x07" +
		"\x96\x02\x02\u0170\u016E\x03\x02\x02\x02\u0170\u016F\x03\x02\x02\x02\u0171" +
		"\u03DC\x03\x02\x02\x02\u0172\u0173\x07*\x02\x02\u0173\u0174\x07\x9B\x02" +
		"\x02\u0174\u0175\x07(\x02\x02\u0175\u0176\x05\xA8U\x02\u0176\u0179\x07" +
		"t\x02\x02\u0177\u017A\x05n8\x02\u0178\u017A\x07\x96\x02\x02\u0179\u0177" +
		"\x03\x02\x02\x02\u0179\u0178\x03\x02\x02\x02\u017A\u03DC\x03\x02\x02\x02" +
		"\u017B\u017C\x07\x17\x02\x02\u017C\u017F\x07\xD6\x02\x02\u017D\u017E\x07" +
		"g\x02\x02\u017E\u0180\x07O\x02\x02\u017F\u017D\x03\x02\x02\x02\u017F\u0180" +
		"\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0182\x05\xA8U\x02" +
		"\u0182\u0183\x07\xB6\x02\x02\u0183\u0186\x07(\x02\x02\u0184\u0185\x07" +
		"g\x02\x02\u0185\u0187\x07O\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0187" +
		"\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u0189\x05\xB0Y\x02" +
		"\u0189\u018A\x07\xDE\x02\x02\u018A\u018B\x05\xB0Y\x02\u018B\u03DC\x03" +
		"\x02\x02\x02\u018C\u018D\x07\x17\x02\x02\u018D\u0190\x07\xD6\x02\x02\u018E" +
		"\u018F\x07g\x02\x02\u018F\u0191\x07O\x02\x02\u0190\u018E\x03\x02\x02\x02" +
		"\u0190\u0191\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0193\x05" +
		"\xA8U\x02\u0193\u0194\x07G\x02\x02\u0194\u0197\x07(\x02\x02\u0195\u0196" +
		"\x07g\x02\x02\u0196\u0198\x07O\x02\x02\u0197\u0195\x03\x02\x02\x02\u0197" +
		"\u0198\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019A\x05\xA8" +
		"U\x02\u019A\u03DC\x03\x02\x02\x02\u019B\u019C\x07\x17\x02\x02\u019C\u019F" +
		"\x07\xD6\x02\x02\u019D\u019E\x07g\x02\x02\u019E\u01A0\x07O\x02\x02\u019F" +
		"\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A1\x03\x02" +
		"\x02\x02\u01A1\u01A2\x05\xA8U\x02\u01A2\u01A3\x07\x13\x02\x02\u01A3\u01A7" +
		"\x07(\x02\x02\u01A4\u01A5\x07g\x02\x02\u01A5\u01A6\x07\x95\x02\x02\u01A6" +
		"\u01A8\x07O\x02\x02\u01A7\u01A4\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02" +
		"\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AA\x05\x18\r\x02\u01AA\u03DC" +
		"\x03\x02\x02\x02\u01AB\u01AC\x07\x17\x02\x02\u01AC\u01AD\x07\xD6\x02\x02" +
		"\u01AD\u01AE\x05\xA8U\x02\u01AE\u01AF\x07\xCD\x02\x02\u01AF\u01B0\x07" +
		"\x1F\x02\x02\u01B0\u01B1\x05\xACW\x02\u01B1\u03DC\x03\x02\x02\x02\u01B2" +
		"\u01B3\x07\x17\x02\x02\u01B3\u01B4\x07\xD6\x02\x02\u01B4\u01B5\x05\xA8" +
		"U\x02\u01B5\u01B6\x07\xCD\x02\x02\u01B6\u01B7\x07\xB1\x02\x02\u01B7\u01B8" +
		"\x05\x1E\x10\x02\u01B8\u03DC\x03\x02\x02\x02\u01B9\u01BA\x07\x17\x02\x02" +
		"\u01BA\u01BB\x07\xD6\x02\x02\u01BB\u01BC\x05\xA8U\x02\u01BC\u01BD\x07" +
		"N\x02\x02\u01BD\u01CA\x05\xB0Y\x02\u01BE\u01C7\x07\x04\x02\x02\u01BF\u01C4" +
		"\x05\xA0Q\x02\u01C0\u01C1\x07\x06\x02\x02\u01C1\u01C3\x05\xA0Q\x02\u01C2" +
		"\u01C0\x03\x02\x02\x02\u01C3\u01C6\x03\x02\x02\x02\u01C4\u01C2\x03\x02" +
		"\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C8\x03\x02\x02\x02\u01C6" +
		"\u01C4\x03\x02\x02\x02\u01C7\u01BF\x03\x02\x02\x02\u01C7\u01C8\x03\x02" +
		"\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CB\x07\x05\x02\x02\u01CA" +
		"\u01BE\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CE\x03\x02" +
		"\x02\x02\u01CC\u01CD\x07\xF3\x02\x02\u01CD\u01CF\x05b2\x02\u01CE\u01CC" +
		"\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u03DC\x03\x02\x02\x02" +
		"\u01D0\u01D1\x07\x18\x02\x02\u01D1\u01D4\x05\xA8U\x02\u01D2\u01D3\x07" +
		"\xF5\x02\x02\u01D3\u01D5\x05\x1C\x0F\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4" +
		"\u01D5\x03\x02\x02\x02\u01D5\u03DC\x03\x02\x02\x02\u01D6\u01D9\x07.\x02" +
		"\x02\u01D7\u01D8\x07\x9F\x02\x02\u01D8\u01DA\x07\xB8\x02\x02\u01D9\u01D7" +
		"\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02" +
		"\u01DB\u01DC\x07\x87\x02\x02\u01DC\u01E0\x07\xF1\x02\x02\u01DD\u01DE\x07" +
		"g\x02\x02\u01DE\u01DF\x07\x95\x02\x02\u01DF\u01E1\x07O\x02\x02\u01E0\u01DD" +
		"\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02" +
		"\u01E2\u01E5\x05\xA8U\x02\u01E3\u01E4\x07*\x02\x02\u01E4\u01E6\x05n8\x02" +
		"\u01E5\u01E3\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E9\x03" +
		"\x02\x02\x02\u01E7\u01E8\x07\xF5\x02\x02\u01E8\u01EA\x05\x1C\x0F\x02\u01E9" +
		"\u01E7\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EB\x03\x02" +
		"\x02\x02\u01EB\u01EC\x07\x1C\x02\x02\u01EC\u01ED\x05\x12\n\x02\u01ED\u03DC" +
		"\x03\x02\x02\x02\u01EE\u01F1\x07.\x02\x02\u01EF\u01F0\x07\x9F\x02\x02" +
		"\u01F0\u01F2\x07\xB8\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03" +
		"\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F4\x07\xF1\x02\x02\u01F4" +
		"\u01F7\x05\xA8U\x02\u01F5\u01F6\x07*\x02\x02\u01F6\u01F8\x05n8\x02\u01F7" +
		"\u01F5\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01FB\x03\x02" +
		"\x02\x02\u01F9\u01FA\x07\xC8\x02\x02\u01FA\u01FC\t\x03\x02\x02\u01FB\u01F9" +
		"\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02" +
		"\u01FD\u01FE\x07\x1C\x02\x02\u01FE\u01FF\x05\x12\n\x02\u01FF\u03DC\x03" +
		"\x02\x02\x02\u0200\u0201\x07\xB5\x02\x02\u0201\u0202\x07\x87\x02\x02\u0202" +
		"\u0203\x07\xF1\x02\x02\u0203\u03DC\x05\xA8U\x02\u0204\u0205\x07G\x02\x02" +
		"\u0205\u0206\x07\x87\x02\x02\u0206\u0209\x07\xF1\x02\x02\u0207\u0208\x07" +
		"g\x02\x02\u0208\u020A\x07O\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A" +
		"\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u03DC\x05\xA8U\x02" +
		"\u020C\u020D\x07\x17\x02\x02\u020D\u020E\x07\x87\x02\x02\u020E\u0211\x07" +
		"\xF1\x02\x02\u020F\u0210\x07g\x02\x02\u0210\u0212\x07O\x02\x02\u0211\u020F" +
		"\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02" +
		"\u0213\u0214\x05\xA8U\x02\u0214\u0215\x07\xB6\x02\x02\u0215\u0216\x07" +
		"\xDE\x02\x02\u0216\u0217\x05\xA8U\x02\u0217\u03DC\x03\x02\x02\x02\u0218" +
		"\u0219\x07\x17\x02\x02\u0219\u021A\x07\x87\x02\x02\u021A\u021B\x07\xF1" +
		"\x02\x02\u021B\u021C\x05\xA8U\x02\u021C\u021D\x07\xCD\x02\x02\u021D\u021E" +
		"\x07\xB1\x02\x02\u021E\u021F\x05\x1E\x10\x02\u021F\u03DC\x03\x02\x02\x02" +
		"\u0220\u0221\x07G\x02\x02\u0221\u0224\x07\xF1\x02\x02\u0222\u0223\x07" +
		"g\x02\x02\u0223\u0225\x07O\x02\x02\u0224\u0222\x03\x02\x02\x02\u0224\u0225" +
		"\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u03DC\x05\xA8U\x02" +
		"\u0227\u0228\x07\x17\x02\x02\u0228\u0229\x07\xF1\x02\x02\u0229\u022A\x05" +
		"\xA8U\x02\u022A\u022B\x07\xB6\x02\x02\u022B\u022C\x07\xDE\x02\x02\u022C" +
		"\u022D\x05\xA8U\x02\u022D\u03DC\x03\x02\x02\x02\u022E\u022F\x07\x17\x02" +
		"\x02\u022F\u0230\x07\xF1\x02\x02\u0230\u0231\x05\xA8U\x02\u0231\u0232" +
		"\x07\xCD\x02\x02\u0232\u0233\x07\x1F\x02\x02\u0233\u0234\x05\xACW\x02" +
		"\u0234\u03DC\x03\x02\x02\x02\u0235\u0236\x07#\x02\x02\u0236\u0237\x05" +
		"\xA8U\x02\u0237\u0240\x07\x04\x02\x02\u0238\u023D\x05\xA0Q\x02\u0239\u023A" +
		"\x07\x06\x02\x02\u023A\u023C\x05\xA0Q\x02\u023B\u0239\x03\x02\x02\x02" +
		"\u023C\u023F\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023D\u023E\x03" +
		"\x02\x02\x02\u023E\u0241\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u0240" +
		"\u0238\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241\u0242\x03\x02" +
		"\x02\x02\u0242\u0243\x07\x05\x02\x02\u0243\u03DC\x03\x02\x02\x02\u0244" +
		"\u0245\x07.\x02\x02\u0245\u0246\x07\xBE\x02\x02\u0246\u024A\x05\xB0Y\x02" +
		"\u0247\u0248\x07\xF5\x02\x02\u0248\u0249\x07\x14\x02\x02\u0249\u024B\x05" +
		"\xAAV\x02\u024A\u0247\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B" +
		"\u024E\x03\x02\x02\x02\u024C\u024D\x07i\x02\x02\u024D\u024F\x05\xB0Y\x02" +
		"\u024E\u024C\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u03DC\x03" +
		"\x02\x02\x02\u0250\u0251\x07G\x02\x02\u0251\u0252\x07\xBE\x02\x02\u0252" +
		"\u03DC\x05\xB0Y\x02\u0253\u0254\x07]\x02\x02\u0254\u0255\x05\xAEX\x02" +
		"\u0255\u0256\x07\xDE\x02\x02\u0256\u025B\x05\xACW\x02\u0257\u0258\x07" +
		"\x06\x02\x02\u0258\u025A\x05\xACW\x02\u0259\u0257\x03\x02\x02\x02\u025A" +
		"\u025D\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025B\u025C\x03\x02" +
		"\x02\x02\u025C\u0261\x03\x02\x02\x02\u025D\u025B\x03\x02\x02\x02\u025E" +
		"\u025F\x07\xF5\x02\x02\u025F\u0260\x07\x14\x02\x02\u0260\u0262\x07\x9E" +
		"\x02\x02\u0261\u025E\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262" +
		"\u0266\x03\x02\x02\x02\u0263\u0264\x07^\x02\x02\u0264\u0265\x07\"\x02" +
		"\x02\u0265\u0267\x05\xAAV\x02\u0266\u0263\x03\x02\x02\x02\u0266\u0267" +
		"\x03\x02\x02\x02\u0267\u026A\x03\x02\x02\x02\u0268\u0269\x07i\x02\x02" +
		"\u0269\u026B\x05\xB0Y\x02\u026A\u0268\x03\x02\x02\x02\u026A\u026B\x03" +
		"\x02\x02\x02\u026B\u03DC\x03\x02\x02\x02\u026C\u0270\x07\xBC\x02\x02\u026D" +
		"\u026E\x07\x14\x02\x02\u026E\u026F\x07\x9E\x02\x02\u026F\u0271\x07X\x02" +
		"\x02\u0270\u026D\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271\u0272" +
		"\x03\x02\x02\x02\u0272\u0273\x05\xAEX\x02\u0273\u0274\x07Z\x02\x02\u0274" +
		"\u0279\x05\xACW\x02\u0275\u0276\x07\x06\x02\x02\u0276\u0278\x05\xACW\x02" +
		"\u0277\u0275\x03\x02\x02\x02\u0278\u027B\x03\x02\x02\x02\u0279\u0277\x03" +
		"\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A\u027F\x03\x02\x02\x02\u027B" +
		"\u0279\x03\x02\x02\x02\u027C\u027D\x07^\x02\x02\u027D\u027E\x07\"\x02" +
		"\x02\u027E\u0280\x05\xAAV\x02\u027F\u027C\x03\x02\x02\x02\u027F\u0280" +
		"\x03\x02\x02\x02\u0280\u0283\x03\x02\x02\x02\u0281\u0282\x07i\x02\x02" +
		"\u0282\u0284\x05\xB0Y\x02\u0283\u0281\x03\x02\x02\x02\u0283\u0284\x03" +
		"\x02\x02\x02\u0284\u03DC\x03\x02\x02\x02\u0285\u0286\x07\xCD\x02\x02\u0286" +
		"\u028A\x07\xBE\x02\x02\u0287\u028B\x07\x16\x02\x02\u0288\u028B\x07\x93" +
		"\x02\x02\u0289\u028B\x05\xB0Y\x02\u028A\u0287\x03\x02\x02\x02\u028A\u0288" +
		"\x03\x02\x02\x02\u028A\u0289\x03\x02\x02\x02\u028B\u028E\x03\x02\x02\x02" +
		"\u028C\u028D\x07i\x02\x02\u028D\u028F\x05\xB0Y\x02\u028E\u028C\x03\x02" +
		"\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\u03DC\x03\x02\x02\x02\u0290" +
		"\u029B\x07]\x02\x02\u0291\u0296\x05\xA6T\x02\u0292\u0293\x07\x06\x02\x02" +
		"\u0293\u0295\x05\xA6T\x02\u0294\u0292\x03\x02\x02\x02\u0295\u0298\x03" +
		"\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297" +
		"\u029C\x03\x02\x02\x02\u0298\u0296\x03\x02\x02\x02\u0299\u029A\x07\x16" +
		"\x02\x02\u029A\u029C\x07\xB0\x02\x02\u029B\u0291\x03\x02\x02\x02\u029B" +
		"\u0299\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u029F\x07\x9B" +
		"\x02\x02\u029E\u02A0\t\x04\x02\x02\u029F\u029E\x03\x02\x02\x02\u029F\u02A0" +
		"\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A2\x05\xA8U\x02" +
		"\u02A2\u02A3\x07\xDE\x02\x02\u02A3\u02A7\x05\xACW\x02\u02A4\u02A5\x07" +
		"\xF5\x02\x02\u02A5\u02A6\x07]\x02\x02\u02A6\u02A8\x07\x9E\x02\x02\u02A7" +
		"\u02A4\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8\u03DC\x03\x02" +
		"\x02\x02\u02A9\u02B4\x07`\x02\x02\u02AA\u02AF\x05\xA6T\x02\u02AB\u02AC" +
		"\x07\x06\x02\x02\u02AC\u02AE\x05\xA6T\x02\u02AD\u02AB\x03\x02\x02\x02" +
		"\u02AE\u02B1\x03\x02\x02\x02\u02AF\u02AD\x03\x02\x02\x02\u02AF\u02B0\x03" +
		"\x02\x02\x02\u02B0\u02B5\x03\x02\x02\x02\u02B1\u02AF\x03\x02\x02\x02\u02B2" +
		"\u02B3\x07\x16\x02\x02\u02B3\u02B5\x07\xB0\x02\x02\u02B4\u02AA\x03\x02" +
		"\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6" +
		"\u02B8\x07\x9B\x02\x02\u02B7\u02B9\t\x04\x02\x02\u02B8\u02B7\x03\x02\x02" +
		"\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BB" +
		"\x05\xA8U\x02\u02BB\u02BC\x07\xDE\x02\x02\u02BC\u02BD\x05\xACW\x02\u02BD" +
		"\u03DC\x03\x02\x02\x02\u02BE\u02C2\x07\xBC\x02\x02\u02BF\u02C0\x07]\x02" +
		"\x02\u02C0\u02C1\x07\x9E\x02\x02\u02C1\u02C3\x07X\x02\x02\u02C2\u02BF" +
		"\x03\x02\x02\x02\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02CE\x03\x02\x02\x02" +
		"\u02C4\u02C9\x05\xA6T\x02\u02C5\u02C6\x07\x06\x02\x02\u02C6\u02C8\x05" +
		"\xA6T\x02\u02C7\u02C5\x03\x02\x02\x02\u02C8\u02CB\x03\x02\x02\x02\u02C9" +
		"\u02C7\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA\u02CF\x03\x02" +
		"\x02\x02\u02CB\u02C9\x03\x02\x02\x02\u02CC\u02CD\x07\x16\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u02CD\u02CF\x07\xB0\x02\x02\u02CE\u02C4\x03\x02\x02\x02\u02CE\u02CC\x03" +
		"\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0\u02D2\x07\x9B\x02\x02\u02D1" +
		"\u02D3\t\x04\x02\x02\u02D2\u02D1\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02" +
		"\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D5\x05\xA8U\x02\u02D5\u02D6" +
		"\x07Z\x02\x02\u02D6\u02D7\x05\xACW\x02\u02D7\u03DC\x03\x02\x02\x02\u02D8" +
		"\u02D9\x07\xCF\x02\x02\u02D9\u02DF\x07_\x02\x02\u02DA\u02DC\x07\x9B\x02" +
		"\x02\u02DB\u02DD\x07\xD6\x02\x02\u02DC\u02DB\x03\x02\x02\x02\u02DC\u02DD" +
		"\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02E0\x05\xA8U\x02" +
		"\u02DF\u02DA\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\u03DC\x03" +
		"\x02\x02\x02\u02E1\u02E3\x07P\x02\x02\u02E2\u02E4\x07\x18\x02\x02\u02E3" +
		"\u02E2\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E6\x03\x02" +
		"\x02\x02\u02E5\u02E7\x07\xF0\x02\x02\u02E6\u02E5\x03\x02\x02\x02\u02E6" +
		"\u02E7\x03\x02\x02\x02\u02E7\u02F3\x03\x02\x02\x02\u02E8\u02E9\x07\x04" +
		"\x02\x02\u02E9\u02EE\x05\x9AN\x02\u02EA\u02EB\x07\x06\x02\x02\u02EB\u02ED" +
		"\x05\x9AN\x02\u02EC\u02EA\x03\x02\x02\x02\u02ED\u02F0\x03\x02\x02\x02" +
		"\u02EE\u02EC\x03\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F1\x03" +
		"\x02\x02\x02\u02F0\u02EE\x03\x02\x02\x02\u02F1\u02F2\x07\x05\x02\x02\u02F2" +
		"\u02F4\x03\x02\x02\x02\u02F3\u02E8\x03\x02\x02\x02\u02F3\u02F4\x03\x02" +
		"\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5\u03DC\x05\x10\t\x02\u02F6\u02F7" +
		"\x07\xCF\x02\x02\u02F7\u02F8\x07.\x02\x02\u02F8\u02F9\x07\xD6\x02\x02" +
		"\u02F9\u03DC\x05\xA8U\x02\u02FA\u02FB\x07\xCF\x02\x02\u02FB\u02FC\x07" +
		".\x02\x02\u02FC\u02FD\x07\xC5\x02\x02\u02FD\u03DC\x05\xA8U\x02\u02FE\u02FF" +
		"\x07\xCF\x02\x02\u02FF\u0300\x07.\x02\x02\u0300\u0301\x07\xF1\x02\x02" +
		"\u0301\u03DC\x05\xA8U\x02\u0302\u0303\x07\xCF\x02\x02\u0303\u0304\x07" +
		".\x02\x02\u0304\u0305\x07\x87\x02\x02\u0305\u0306\x07\xF1\x02\x02\u0306" +
		"\u03DC\x05\xA8U\x02\u0307\u0308\x07\xCF\x02\x02\u0308\u030B\x07\xD7\x02" +
		"\x02\u0309\u030A\t\x05\x02\x02\u030A\u030C\x05\xA8U\x02\u030B\u0309\x03" +
		"\x02\x02\x02\u030B\u030C\x03\x02\x02\x02\u030C\u0313\x03\x02\x02\x02\u030D" +
		"\u030E\x07|\x02\x02\u030E\u0311\x05n8\x02\u030F\u0310\x07K\x02\x02\u0310" +
		"\u0312\x05n8\x02\u0311\u030F\x03\x02\x02\x02\u0311\u0312\x03\x02\x02\x02" +
		"\u0312\u0314\x03\x02\x02\x02\u0313\u030D\x03\x02\x02\x02\u0313\u0314\x03" +
		"\x02\x02\x02\u0314\u03DC\x03\x02\x02\x02\u0315\u0316\x07\xCF\x02\x02\u0316" +
		"\u0319\x07\xC6\x02\x02\u0317\u0318\t\x05\x02\x02\u0318\u031A\x05\xB0Y" +
		"\x02\u0319\u0317\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A\u0321" +
		"\x03\x02\x02\x02\u031B\u031C\x07|\x02\x02\u031C\u031F\x05n8\x02\u031D" +
		"\u031E\x07K\x02\x02\u031E\u0320\x05n8\x02\u031F\u031D\x03\x02\x02\x02" +
		"\u031F\u0320\x03\x02\x02\x02\u0320\u0322\x03\x02\x02\x02\u0321\u031B\x03" +
		"\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u03DC\x03\x02\x02\x02\u0323" +
		"\u0324\x07\xCF\x02\x02\u0324\u032B\x07\'\x02\x02\u0325\u0326\x07|\x02" +
		"\x02\u0326\u0329\x05n8\x02\u0327\u0328\x07K\x02\x02\u0328\u032A\x05n8" +
		"\x02\u0329\u0327\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02\u032A\u032C" +
		"\x03\x02\x02\x02\u032B\u0325\x03\x02\x02\x02\u032B\u032C\x03\x02\x02\x02" +
		"\u032C\u03DC\x03\x02\x02\x02\u032D\u032E\x07\xCF\x02\x02\u032E\u032F\x07" +
		")\x02\x02\u032F\u0331\t\x05\x02\x02\u0330\u0332\x05\xA8U\x02\u0331\u0330" +
		"\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332\u0339\x03\x02\x02\x02" +
		"\u0333\u0334\x07|\x02\x02\u0334\u0337\x05n8\x02\u0335\u0336\x07K\x02\x02" +
		"\u0336\u0338\x05n8\x02\u0337\u0335\x03\x02\x02\x02\u0337\u0338\x03\x02" +
		"\x02\x02\u0338\u033A\x03\x02\x02\x02\u0339\u0333\x03\x02\x02\x02\u0339" +
		"\u033A\x03\x02\x02\x02\u033A\u03DC\x03\x02\x02\x02\u033B\u033C\x07\xCF" +
		"\x02\x02\u033C\u033D\x07\xD2\x02\x02\u033D\u033E\x07X\x02\x02\u033E\u03DC" +
		"\x05\xA8U\x02\u033F\u0340\x07\xCF\x02\x02\u0340\u0341\x07\xD2\x02\x02" +
		"\u0341\u0342\x07X\x02\x02\u0342\u0343\x07\x04\x02\x02\u0343\u0344\x05" +
		"\x12\n\x02\u0344\u0345\x07\x05\x02\x02\u0345\u03DC\x03\x02\x02\x02\u0346" +
		"\u0348\x07\xCF\x02\x02\u0347\u0349\x071\x02\x02\u0348\u0347\x03\x02\x02" +
		"\x02\u0348\u0349\x03\x02\x02\x02\u0349\u034A\x03\x02\x02\x02\u034A\u034D" +
		"\x07\xBF\x02\x02\u034B\u034C\t\x05\x02\x02\u034C\u034E\x05\xB0Y\x02\u034D" +
		"\u034B\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E\u03DC\x03\x02" +
		"\x02\x02\u034F\u0350\x07\xCF\x02\x02\u0350\u0351\x07\xBE\x02\x02\u0351" +
		"\u0354\x07_\x02\x02\u0352\u0353\t\x05\x02\x02\u0353\u0355\x05\xB0Y\x02" +
		"\u0354\u0352\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355\u03DC\x03" +
		"\x02\x02\x02\u0356\u0357\x07B\x02\x02\u0357\u03DC\x05\xA8U\x02\u0358\u0359" +
		"\x07A\x02\x02\u0359\u03DC\x05\xA8U\x02\u035A\u035B\x07\xCF\x02\x02\u035B" +
		"\u0362\x07\\\x02\x02\u035C\u035D\x07|\x02\x02\u035D\u0360\x05n8\x02\u035E" +
		"\u035F\x07K\x02\x02\u035F\u0361\x05n8\x02\u0360\u035E\x03\x02\x02\x02" +
		"\u0360\u0361\x03\x02\x02\x02\u0361\u0363\x03\x02\x02\x02\u0362\u035C\x03" +
		"\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u03DC\x03\x02\x02\x02\u0364" +
		"\u0365\x07\xCF\x02\x02\u0365\u036C\x07\xCC\x02\x02\u0366\u0367\x07|\x02" +
		"\x02\u0367\u036A\x05n8\x02\u0368\u0369\x07K\x02\x02\u0369\u036B\x05n8" +
		"\x02\u036A\u0368\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B\u036D" +
		"\x03\x02\x02\x02\u036C\u0366\x03\x02\x02\x02\u036C\u036D\x03\x02\x02\x02" +
		"\u036D\u03DC\x03\x02\x02\x02\u036E\u036F\x07\xCD\x02\x02\u036F\u0370\x07" +
		"\xCC\x02\x02\u0370\u0371\x05\xA8U\x02\u0371\u0372\x07\xFB\x02\x02\u0372" +
		"\u0373\x05`1\x02\u0373\u03DC\x03\x02\x02\x02\u0374\u0375\x07\xB9\x02\x02" +
		"\u0375\u0376\x07\xCC\x02\x02\u0376\u03DC\x05\xA8U\x02\u0377\u0378\x07" +
		"\xD1\x02\x02\u0378\u0381\x07\xDF\x02\x02\u0379\u037E\x05\x9CO\x02\u037A" +
		"\u037B\x07\x06\x02\x02\u037B\u037D\x05\x9CO\x02\u037C\u037A\x03\x02\x02" +
		"\x02\u037D\u0380\x03\x02\x02\x02\u037E\u037C\x03\x02\x02\x02\u037E\u037F" +
		"\x03\x02\x02\x02\u037F\u0382\x03\x02\x02\x02\u0380\u037E\x03\x02\x02\x02" +
		"\u0381\u0379\x03\x02\x02\x02\u0381\u0382\x03\x02\x02\x02\u0382\u03DC\x03" +
		"\x02\x02\x02\u0383\u0385\x07+\x02\x02\u0384\u0386\x07\xF7\x02\x02\u0385" +
		"\u0384\x03\x02\x02\x02\u0385\u0386\x03\x02\x02\x02\u0386\u03DC\x03\x02" +
		"\x02\x02\u0387\u0389\x07\xC0\x02\x02\u0388\u038A\x07\xF7\x02\x02\u0389" +
		"\u0388\x03\x02\x02\x02\u0389\u038A\x03\x02\x02\x02\u038A\u03DC\x03\x02" +
		"\x02\x02\u038B\u038C\x07\xAF\x02\x02\u038C\u038D\x05\xB0Y\x02\u038D\u038E" +
		"\x07Z\x02\x02\u038E\u038F\x05\x10\t\x02\u038F\u03DC\x03\x02\x02\x02\u0390" +
		"\u0391\x07>\x02\x02\u0391\u0392\x07\xAF\x02\x02\u0392\u03DC\x05\xB0Y\x02" +
		"\u0393\u0394\x07N\x02\x02\u0394\u039E\x05\xB0Y\x02\u0395\u0396\x07\xED" +
		"\x02\x02\u0396\u039B\x05`1\x02\u0397\u0398\x07\x06\x02\x02\u0398\u039A" +
		"\x05`1\x02\u0399\u0397\x03\x02\x02\x02\u039A\u039D\x03\x02\x02\x02\u039B" +
		"\u0399\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\u039F\x03\x02" +
		"\x02\x02\u039D\u039B\x03\x02\x02\x02\u039E\u0395\x03\x02\x02\x02\u039E" +
		"\u039F\x03\x02\x02\x02\u039F\u03DC\x03\x02\x02\x02\u03A0\u03A1\x07B\x02" +
		"\x02\u03A1\u03A2\x07m\x02\x02\u03A2\u03DC\x05\xB0Y\x02\u03A3\u03A4\x07" +
		"B\x02\x02\u03A4\u03A5\x07\xA3\x02\x02\u03A5\u03DC\x05\xB0Y\x02\u03A6\u03A7" +
		"\x07\xCD\x02\x02\u03A7\u03A8\x07\xA8\x02\x02\u03A8\u03DC\x05\xA4S\x02" +
		"\u03A9\u03AA\x07\xCD\x02\x02\u03AA\u03AB\x07\xDC\x02\x02\u03AB\u03AE\x07" +
		"\xFA\x02\x02\u03AC\u03AF\x07~\x02\x02\u03AD\u03AF\x05`1\x02\u03AE\u03AC" +
		"\x03\x02\x02\x02\u03AE\u03AD\x03\x02\x02\x02\u03AF\u03DC\x03\x02\x02\x02" +
		"\u03B0\u03B1\x07\xEA\x02\x02\u03B1\u03B2\x05\xA8U\x02\u03B2\u03B3\x07" +
		"\xCD\x02\x02\u03B3\u03B8\x05\x98M\x02\u03B4\u03B5\x07\x06\x02\x02\u03B5" +
		"\u03B7\x05\x98M\x02\u03B6\u03B4\x03\x02\x02\x02\u03B7\u03BA\x03\x02\x02" +
		"\x02\u03B8\u03B6\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BD" +
		"\x03\x02\x02\x02\u03BA\u03B8\x03\x02\x02\x02\u03BB\u03BC\x07\xF3\x02\x02" +
		"\u03BC\u03BE\x05b2\x02\u03BD\u03BB\x03\x02\x02\x02\u03BD\u03BE\x03\x02" +
		"\x02\x02\u03BE\u03DC\x03\x02\x02\x02\u03BF\u03C0\x07\x89\x02\x02\u03C0" +
		"\u03C1\x07q\x02\x02\u03C1\u03C6\x05\xA8U\x02\u03C2\u03C4\x07\x1C\x02\x02" +
		"\u03C3\u03C2\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4\u03C5\x03" +
		"\x02\x02\x02\u03C5\u03C7\x05\xB0Y\x02\u03C6\u03C3\x03\x02\x02\x02\u03C6" +
		"\u03C7\x03\x02\x02\x02\u03C7\u03C8\x03\x02\x02\x02\u03C8\u03C9\x07\xED" +
		"\x02\x02\u03C9\u03CA\x05B\"\x02\u03CA\u03CB\x07\x9B\x02\x02\u03CB\u03CD" +
		"\x05`1\x02\u03CC\u03CE\x05\x88E\x02\u03CD\u03CC\x03\x02\x02\x02\u03CE" +
		"\u03CF\x03\x02\x02\x02\u03CF\u03CD\x03\x02\x02\x02\u03CF\u03D0\x03\x02" +
		"\x02\x02\u03D0\u03DC\x03\x02\x02\x02\u03D1\u03D2\x07\xCF\x02\x02\u03D2" +
		"\u03D3\x07*\x02\x02\u03D3\u03D4\x07\x9B\x02\x02\u03D4\u03D5\x07\xD6\x02" +
		"\x02\u03D5\u03DC\x05\xA8U\x02\u03D6\u03D7\x07\xCF\x02\x02\u03D7\u03D8" +
		"\x07*\x02\x02\u03D8\u03D9\x07\x9B\x02\x02\u03D9\u03DA\x07(\x02\x02\u03DA" +
		"\u03DC\x05\xA8U\x02\u03DB\xD9\x03\x02\x02\x02\u03DB\xDA\x03\x02\x02\x02" +
		"\u03DB\xDC\x03\x02\x02\x02\u03DB\xE1\x03\x02\x02\x02\u03DB\xF1\x03\x02" +
		"\x02\x02\u03DB\xFB\x03\x02\x02\x02\u03DB\u0102\x03\x02\x02\x02\u03DB\u0109" +
		"\x03\x02\x02\x02\u03DB\u012B\x03\x02\x02\x02\u03DB\u0145\x03\x02\x02\x02" +
		"\u03DB\u014C\x03\x02\x02\x02\u03DB\u0154\x03\x02\x02\x02\u03DB\u015B\x03" +
		"\x02\x02\x02\u03DB\u015E\x03\x02\x02\x02\u03DB\u0169\x03\x02\x02\x02\u03DB" +
		"\u0172\x03\x02\x02\x02\u03DB\u017B\x03\x02\x02\x02\u03DB\u018C\x03\x02" +
		"\x02\x02\u03DB\u019B\x03\x02\x02\x02\u03DB\u01AB\x03\x02\x02\x02\u03DB" +
		"\u01B2\x03\x02\x02\x02\u03DB\u01B9\x03\x02\x02\x02\u03DB\u01D0\x03\x02" +
		"\x02\x02\u03DB\u01D6\x03\x02\x02\x02\u03DB\u01EE\x03\x02\x02\x02\u03DB" +
		"\u0200\x03\x02\x02\x02\u03DB\u0204\x03\x02\x02\x02\u03DB\u020C\x03\x02" +
		"\x02\x02\u03DB\u0218\x03\x02\x02\x02\u03DB\u0220\x03\x02\x02\x02\u03DB" +
		"\u0227\x03\x02\x02\x02\u03DB\u022E\x03\x02\x02\x02\u03DB\u0235\x03\x02" +
		"\x02\x02\u03DB\u0244\x03\x02\x02\x02\u03DB\u0250\x03\x02\x02\x02\u03DB" +
		"\u0253\x03\x02\x02\x02\u03DB\u026C\x03\x02\x02\x02\u03DB\u0285\x03\x02" +
		"\x02\x02\u03DB\u0290\x03\x02\x02\x02\u03DB\u02A9\x03\x02\x02\x02\u03DB" +
		"\u02BE\x03\x02\x02\x02\u03DB\u02D8\x03\x02\x02\x02\u03DB\u02E1\x03\x02" +
		"\x02\x02\u03DB\u02F6\x03\x02\x02\x02\u03DB\u02FA\x03\x02\x02\x02\u03DB" +
		"\u02FE\x03\x02\x02\x02\u03DB\u0302\x03\x02\x02\x02\u03DB\u0307\x03\x02" +
		"\x02\x02\u03DB\u0315\x03\x02\x02\x02\u03DB\u0323\x03\x02\x02\x02\u03DB" +
		"\u032D\x03\x02\x02\x02\u03DB\u033B\x03\x02\x02\x02\u03DB\u033F\x03\x02" +
		"\x02\x02\u03DB\u0346\x03\x02\x02\x02\u03DB\u034F\x03\x02\x02\x02\u03DB" +
		"\u0356\x03\x02\x02\x02\u03DB\u0358\x03\x02\x02\x02\u03DB\u035A\x03\x02" +
		"\x02\x02\u03DB\u0364\x03\x02\x02\x02\u03DB\u036E\x03\x02\x02\x02\u03DB" +
		"\u0374\x03\x02\x02\x02\u03DB\u0377\x03\x02\x02\x02\u03DB\u0383\x03\x02" +
		"\x02\x02\u03DB\u0387\x03\x02\x02\x02\u03DB\u038B\x03\x02\x02\x02\u03DB" +
		"\u0390\x03\x02\x02\x02\u03DB\u0393\x03\x02\x02\x02\u03DB\u03A0\x03\x02" +
		"\x02\x02\u03DB\u03A3\x03\x02\x02\x02\u03DB\u03A6\x03\x02\x02\x02\u03DB" +
		"\u03A9\x03\x02\x02\x02\u03DB\u03B0\x03\x02\x02\x02\u03DB\u03BF\x03\x02" +
		"\x02\x02\u03DB\u03D1\x03\x02\x02\x02\u03DB\u03D6\x03\x02\x02\x02\u03DC" +
		"\x11\x03\x02\x02\x02\u03DD\u03DF\x05\x14\v\x02\u03DE\u03DD\x03\x02\x02" +
		"\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0\u03E1" +
		"\x05$\x13\x02\u03E1\x13\x03\x02\x02\x02\u03E2\u03E4\x07\xF5\x02\x02\u03E3" +
		"\u03E5\x07\xB4\x02\x02\u03E4\u03E3\x03\x02\x02\x02\u03E4\u03E5\x03\x02" +
		"\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6\u03EB\x05<\x1F\x02\u03E7\u03E8" +
		"\x07\x06\x02\x02\u03E8\u03EA\x05<\x1F\x02\u03E9\u03E7\x03\x02\x02\x02" +
		"\u03EA\u03ED\x03\x02\x02\x02\u03EB\u03E9\x03\x02\x02\x02\u03EB\u03EC\x03" +
		"\x02\x02\x02\u03EC\x15\x03\x02\x02\x02\u03ED\u03EB\x03\x02\x02\x02\u03EE" +
		"\u03F1\x05\x18\r\x02\u03EF\u03F1\x05\x1A\x0E\x02\u03F0\u03EE\x03\x02\x02" +
		"\x02\u03F0\u03EF\x03\x02\x02\x02\u03F1\x17\x03\x02\x02\x02\u03F2\u03F3" +
		"\x05\xB0Y\x02\u03F3\u03F6\x05~@\x02\u03F4\u03F5\x07\x95\x02\x02\u03F5" +
		"\u03F7\x07\x96\x02\x02\u03F6\u03F4\x03\x02\x02\x02\u03F6\u03F7\x03\x02" +
		"\x02\x02\u03F7\u03FA\x03\x02\x02\x02\u03F8\u03F9\x07*\x02\x02\u03F9\u03FB" +
		"\x05n8\x02\u03FA\u03F8\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB" +
		"\u03FE\x03\x02\x02\x02\u03FC\u03FD\x07\xF5\x02\x02\u03FD\u03FF\x05\x1C" +
		"\x0F\x02\u03FE\u03FC\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF" +
		"\x19\x03\x02\x02\x02\u0400\u0401\x07|\x02\x02\u0401\u0404\x05\xA8U\x02" +
		"\u0402\u0403\t\x06\x02\x02\u0403\u0405\x07\xB1\x02\x02\u0404\u0402\x03" +
		"\x02\x02\x02\u0404\u0405\x03\x02\x02\x02\u0405\x1B\x03\x02\x02\x02\u0406" +
		"\u0407\x07\x04\x02\x02\u0407\u0408\x05\x1E\x10\x02\u0408\u0409\x07\x05" +
		"\x02\x02\u0409\x1D\x03\x02\x02\x02\u040A\u040F\x05 \x11\x02\u040B\u040C" +
		"\x07\x06\x02\x02\u040C\u040E\x05 \x11\x02\u040D\u040B\x03\x02\x02\x02" +
		"\u040E\u0411\x03\x02\x02\x02\u040F\u040D\x03\x02\x02\x02\u040F\u0410\x03" +
		"\x02\x02\x02\u0410\x1F\x03\x02\x02\x02\u0411\u040F\x03\x02\x02\x02\u0412" +
		"\u0413\x05\xB0Y\x02\u0413\u0414\x07\xFB\x02\x02\u0414\u0415\x05\"\x12" +
		"\x02\u0415!\x03\x02\x02\x02\u0416\u0419\x07=\x02\x02\u0417\u0419\x05`" +
		"1\x02\u0418\u0416\x03\x02\x02\x02\u0418\u0417\x03\x02\x02\x02\u0419#\x03" +
		"\x02\x02\x02\u041A\u0425\x05*\x16\x02\u041B\u041C\x07\xA0\x02\x02\u041C" +
		"\u041D\x07\"\x02\x02\u041D\u0422\x05.\x18\x02\u041E\u041F\x07\x06\x02" +
		"\x02\u041F\u0421\x05.\x18\x02\u0420\u041E\x03\x02\x02\x02\u0421\u0424" +
		"\x03\x02\x02\x02\u0422\u0420\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02" +
		"\u0423\u0426\x03\x02\x02\x02\u0424\u0422\x03\x02\x02\x02\u0425\u041B\x03" +
		"\x02\x02\x02\u0425\u0426\x03\x02\x02\x02\u0426\u042C\x03\x02\x02\x02\u0427" +
		"\u0428\x07\x99\x02\x02\u0428\u042A\x05(\x15\x02\u0429\u042B\t\x07\x02" +
		"\x02\u042A\u0429\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\u042D" +
		"\x03\x02\x02\x02\u042C\u0427\x03\x02\x02\x02\u042C\u042D\x03\x02\x02\x02" +
		"\u042D\u043B\x03\x02\x02\x02\u042E\u042F\x07}\x02\x02\u042F\u043C\x05" +
		"&\x14\x02\u0430\u0431\x07S\x02\x02\u0431\u0433\t\b\x02\x02\u0432\u0434" +
		"\x05(\x15\x02\u0433\u0432\x03\x02\x02\x02\u0433\u0434\x03\x02\x02\x02" +
		"\u0434\u0435\x03\x02\x02\x02\u0435\u0439\t\x07\x02\x02\u0436\u043A\x07" +
		"\x9D\x02\x02\u0437\u0438\x07\xF5\x02\x02\u0438\u043A\x07\xDB\x02\x02\u0439" +
		"\u0436\x03\x02\x02\x02\u0439\u0437\x03\x02\x02\x02\u043A\u043C\x03\x02" +
		"\x02\x02\u043B\u042E\x03\x02\x02\x02\u043B\u0430\x03\x02\x02\x02\u043B" +
		"\u043C\x03\x02\x02\x02\u043C%\x03\x02\x02\x02\u043D\u0440\x07\x16\x02" +
		"\x02\u043E\u0440\x05(\x15\x02\u043F\u043D\x03\x02\x02\x02\u043F\u043E" +
		"\x03\x02\x02\x02\u0440\'\x03\x02\x02\x02\u0441\u0442\t\t\x02\x02\u0442" +
		")\x03\x02\x02\x02\u0443\u0444\b\x16\x01\x02\u0444\u0445\x05,\x17\x02\u0445" +
		"\u0454\x03\x02\x02\x02\u0446\u0447\f\x04\x02\x02\u0447\u0449\x07o\x02" +
		"\x02\u0448\u044A\x05> \x02\u0449\u0448\x03\x02\x02\x02\u0449\u044A\x03" +
		"\x02\x02\x02\u044A\u044B\x03\x02\x02\x02\u044B\u0453\x05*\x16\x05\u044C" +
		"\u044D\f\x03\x02\x02\u044D\u044F\t\n\x02\x02\u044E\u0450\x05> \x02\u044F" +
		"\u044E\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450\u0451\x03\x02" +
		"\x02\x02\u0451\u0453\x05*\x16\x04\u0452\u0446\x03\x02\x02\x02\u0452\u044C" +
		"\x03\x02\x02\x02\u0453\u0456\x03\x02\x02\x02\u0454\u0452\x03\x02\x02\x02" +
		"\u0454\u0455\x03\x02\x02\x02\u0455+\x03\x02\x02\x02\u0456\u0454\x03\x02" +
		"\x02\x02\u0457\u0468\x050\x19\x02\u0458\u0459\x07\xD6\x02\x02\u0459\u0468" +
		"\x05\xA8U\x02\u045A\u045B\x07\xEF\x02\x02\u045B\u0460\x05`1\x02\u045C" +
		"\u045D\x07\x06\x02\x02\u045D\u045F\x05`1\x02\u045E\u045C\x03\x02\x02\x02" +
		"\u045F\u0462\x03\x02\x02\x02\u0460\u045E\x03\x02\x02\x02\u0460\u0461\x03" +
		"\x02\x02\x02\u0461\u0468\x03\x02\x02\x02\u0462\u0460\x03\x02\x02\x02\u0463" +
		"\u0464\x07\x04\x02\x02\u0464\u0465\x05$\x13\x02\u0465\u0466\x07\x05\x02" +
		"\x02\u0466\u0468\x03\x02\x02\x02\u0467\u0457\x03\x02\x02\x02\u0467\u0458" +
		"\x03\x02\x02\x02\u0467\u045A\x03\x02\x02\x02\u0467\u0463\x03\x02\x02\x02" +
		"\u0468-\x03\x02\x02\x02\u0469\u046B\x05`1\x02\u046A\u046C\t\v\x02\x02" +
		"\u046B\u046A\x03\x02\x02\x02\u046B\u046C\x03\x02\x02\x02\u046C\u046F\x03" +
		"\x02\x02\x02\u046D\u046E\x07\x98\x02\x02\u046E\u0470\t\f\x02\x02\u046F" +
		"\u046D\x03\x02\x02\x02\u046F\u0470\x03\x02\x02\x02\u0470/\x03\x02\x02" +
		"\x02\u0471\u0473\x07\xCA\x02\x02\u0472\u0474\x05> \x02\u0473\u0472\x03" +
		"\x02\x02\x02\u0473\u0474\x03\x02\x02\x02\u0474\u0475\x03\x02\x02\x02\u0475" +
		"\u047A\x05@!\x02\u0476\u0477\x07\x06\x02\x02\u0477\u0479\x05@!\x02\u0478" +
		"\u0476\x03\x02\x02\x02\u0479\u047C\x03\x02\x02\x02\u047A\u0478\x03\x02" +
		"\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B\u0486\x03\x02\x02\x02\u047C" +
		"\u047A\x03\x02\x02\x02\u047D\u047E\x07Z\x02\x02\u047E\u0483\x05B\"\x02" +
		"\u047F\u0480\x07\x06\x02\x02\u0480\u0482\x05B\"\x02\u0481\u047F\x03\x02" +
		"\x02\x02\u0482\u0485\x03\x02\x02\x02\u0483\u0481\x03\x02\x02\x02\u0483" +
		"\u0484\x03\x02\x02\x02\u0484\u0487\x03\x02\x02\x02\u0485\u0483\x03\x02" +
		"\x02\x02\u0486\u047D\x03\x02\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487" +
		"\u048A\x03\x02\x02\x02\u0488\u0489\x07\xF3\x02\x02\u0489\u048B\x05b2\x02" +
		"\u048A\u0488\x03\x02\x02\x02\u048A\u048B\x03\x02\x02\x02\u048B\u048F\x03" +
		"\x02\x02\x02\u048C\u048D\x07b\x02\x02\u048D\u048E\x07\"\x02\x02\u048E" +
		"\u0490\x052\x1A\x02\u048F\u048C\x03\x02\x02\x02\u048F\u0490\x03\x02\x02" +
		"\x02\u0490\u0493\x03\x02\x02\x02\u0491\u0492\x07e\x02\x02\u0492\u0494" +
		"\x05b2\x02\u0493\u0491\x03\x02\x02\x02\u0493\u0494\x03\x02\x02\x02\u0494" +
		"\u049E\x03\x02\x02\x02\u0495\u0496\x07\xF4\x02\x02\u0496\u049B\x058\x1D" +
		"\x02\u0497\u0498\x07\x06\x02\x02\u0498\u049A\x058\x1D\x02\u0499\u0497" +
		"\x03\x02\x02\x02\u049A\u049D\x03\x02\x02\x02\u049B\u0499\x03\x02\x02\x02" +
		"\u049B\u049C\x03\x02\x02\x02\u049C\u049F\x03\x02\x02\x02\u049D\u049B\x03" +
		"\x02\x02\x02\u049E\u0495\x03\x02\x02\x02\u049E\u049F\x03\x02\x02\x02\u049F" +
		"1\x03\x02\x02\x02\u04A0\u04A2\x05> \x02\u04A1\u04A0\x03\x02\x02\x02\u04A1" +
		"\u04A2\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02\x02\u04A3\u04A8\x054\x1B" +
		"\x02\u04A4\u04A5\x07\x06\x02\x02\u04A5\u04A7\x054\x1B\x02\u04A6\u04A4" +
		"\x03\x02\x02\x02\u04A7\u04AA\x03\x02\x02\x02\u04A8\u04A6\x03\x02\x02\x02" +
		"\u04A8\u04A9\x03\x02\x02\x02\u04A93\x03\x02\x02\x02\u04AA\u04A8\x03\x02" +
		"\x02\x02\u04AB\u04D4\x056\x1C\x02\u04AC\u04AD\x07\xC1\x02\x02\u04AD\u04B6" +
		"\x07\x04\x02\x02\u04AE\u04B3\x05`1\x02\u04AF\u04B0\x07\x06\x02\x02\u04B0" +
		"\u04B2\x05`1\x02\u04B1\u04AF\x03\x02\x02\x02\u04B2\u04B5\x03\x02\x02\x02" +
		"\u04B3\u04B1\x03\x02\x02\x02\u04B3\u04B4\x03\x02\x02\x02\u04B4\u04B7\x03" +
		"\x02\x02\x02\u04B5\u04B3\x03\x02\x02\x02\u04B6\u04AE\x03\x02\x02\x02\u04B6" +
		"\u04B7\x03\x02\x02\x02\u04B7\u04B8\x03\x02\x02\x02\u04B8\u04D4\x07\x05" +
		"\x02\x02\u04B9\u04BA\x070\x02\x02\u04BA\u04C3\x07\x04\x02\x02\u04BB\u04C0" +
		"\x05`1\x02\u04BC\u04BD\x07\x06\x02\x02\u04BD\u04BF\x05`1\x02\u04BE\u04BC" +
		"\x03\x02\x02\x02\u04BF\u04C2\x03\x02\x02\x02\u04C0\u04BE\x03\x02\x02\x02" +
		"\u04C0\u04C1\x03\x02\x02\x02\u04C1\u04C4\x03\x02\x02\x02\u04C2\u04C0\x03" +
		"\x02\x02\x02\u04C3\u04BB\x03\x02\x02\x02\u04C3\u04C4\x03\x02\x02\x02\u04C4" +
		"\u04C5\x03\x02\x02\x02\u04C5\u04D4\x07\x05\x02\x02\u04C6\u04C7\x07c\x02" +
		"\x02\u04C7\u04C8\x07\xCE\x02\x02\u04C8\u04C9\x07\x04\x02\x02\u04C9\u04CE" +
		"\x056\x1C\x02\u04CA\u04CB\x07\x06\x02\x02\u04CB\u04CD\x056\x1C\x02\u04CC" +
		"\u04CA\x03\x02\x02\x02\u04CD\u04D0\x03\x02\x02\x02\u04CE\u04CC\x03\x02" +
		"\x02\x02\u04CE\u04CF\x03\x02\x02\x02\u04CF\u04D1\x03\x02\x02\x02\u04D0" +
		"\u04CE\x03\x02\x02\x02\u04D1\u04D2\x07\x05\x02\x02\u04D2\u04D4\x03\x02" +
		"\x02\x02\u04D3\u04AB\x03\x02\x02\x02\u04D3\u04AC\x03\x02\x02\x02\u04D3" +
		"\u04B9\x03\x02\x02\x02\u04D3\u04C6\x03\x02\x02\x02\u04D45\x03\x02\x02" +
		"\x02\u04D5\u04DE\x07\x04\x02\x02\u04D6\u04DB\x05`1\x02\u04D7\u04D8\x07" +
		"\x06\x02\x02\u04D8\u04DA\x05`1\x02\u04D9\u04D7\x03\x02\x02\x02\u04DA\u04DD" +
		"\x03\x02\x02\x02\u04DB\u04D9\x03\x02\x02\x02\u04DB\u04DC\x03\x02\x02\x02" +
		"\u04DC\u04DF\x03\x02\x02\x02\u04DD\u04DB\x03\x02\x02\x02\u04DE\u04D6\x03" +
		"\x02\x02\x02\u04DE\u04DF\x03\x02\x02\x02\u04DF\u04E0\x03\x02\x02\x02\u04E0" +
		"\u04E3\x07\x05\x02\x02\u04E1\u04E3\x05`1\x02\u04E2\u04D5\x03\x02\x02\x02" +
		"\u04E2\u04E1\x03\x02\x02\x02\u04E37\x03\x02\x02\x02\u04E4\u04E5\x05\xB0" +
		"Y\x02\u04E5\u04E6\x07\x1C\x02\x02\u04E6\u04E7\x07\x04\x02\x02\u04E7\u04E8" +
		"\x05:\x1E\x02\u04E8\u04E9\x07\x05\x02\x02\u04E99\x03\x02\x02\x02\u04EA" +
		"\u04EC\x05\xB0Y\x02\u04EB\u04EA\x03\x02\x02\x02\u04EB\u04EC\x03\x02\x02" +
		"\x02\u04EC\u04F7\x03\x02\x02\x02\u04ED\u04EE\x07\xA5\x02\x02\u04EE\u04EF" +
		"\x07\"\x02\x02\u04EF\u04F4\x05`1\x02\u04F0\u04F1\x07\x06\x02\x02\u04F1" +
		"\u04F3\x05`1\x02\u04F2\u04F0\x03\x02\x02\x02\u04F3\u04F6\x03\x02\x02\x02" +
		"\u04F4\u04F2\x03\x02\x02\x02\u04F4\u04F5\x03\x02\x02\x02\u04F5\u04F8\x03" +
		"\x02\x02\x02\u04F6\u04F4\x03\x02\x02\x02\u04F7\u04ED\x03\x02\x02\x02\u04F7" +
		"\u04F8\x03\x02\x02\x02\u04F8\u0503\x03\x02\x02\x02\u04F9\u04FA\x07\xA0" +
		"\x02\x02\u04FA\u04FB\x07\"\x02\x02\u04FB\u0500\x05.\x18\x02\u04FC\u04FD" +
		"\x07\x06\x02\x02\u04FD\u04FF\x05.\x18\x02\u04FE\u04FC\x03\x02\x02\x02" +
		"\u04FF\u0502\x03\x02\x02\x02\u0500\u04FE\x03\x02\x02\x02\u0500\u0501\x03" +
		"\x02\x02\x02\u0501\u0504\x03\x02\x02\x02\u0502\u0500\x03\x02\x02\x02\u0503" +
		"\u04F9\x03\x02\x02\x02\u0503\u0504\x03\x02\x02\x02\u0504\u0506\x03\x02" +
		"\x02\x02\u0505\u0507\x05\x8CG\x02\u0506\u0505\x03\x02\x02\x02\u0506\u0507" +
		"\x03\x02\x02\x02\u0507;\x03\x02\x02\x02\u0508\u050A\x05\xB0Y\x02\u0509" +
		"\u050B\x05\\/\x02\u050A\u0509\x03\x02\x02\x02\u050A\u050B\x03\x02\x02" +
		"\x02\u050B\u050C\x03\x02\x02\x02\u050C\u050D\x07\x1C\x02\x02\u050D\u050E" +
		"\x07\x04\x02\x02\u050E\u050F\x05\x12\n\x02\u050F\u0510\x07\x05\x02\x02" +
		"\u0510=\x03\x02\x02\x02\u0511\u0512\t\r\x02\x02\u0512?\x03\x02\x02\x02" +
		"\u0513\u0518\x05`1\x02\u0514\u0516\x07\x1C\x02\x02\u0515\u0514\x03\x02" +
		"\x02\x02\u0515\u0516\x03\x02\x02\x02\u0516\u0517\x03\x02\x02\x02\u0517" +
		"\u0519\x05\xB0Y\x02\u0518\u0515\x03\x02\x02\x02\u0518\u0519\x03\x02\x02" +
		"\x02\u0519\u0523\x03\x02\x02\x02\u051A\u051B\x05h5\x02\u051B\u051C\x07" +
		"\x03\x02\x02\u051C\u051F\x07\u0103\x02\x02\u051D\u051E\x07\x1C\x02\x02" +
		"\u051E\u0520\x05\\/\x02\u051F\u051D\x03\x02\x02\x02\u051F\u0520\x03\x02" +
		"\x02\x02\u0520\u0523\x03\x02\x02\x02\u0521\u0523\x07\u0103\x02\x02\u0522" +
		"\u0513\x03\x02\x02\x02\u0522\u051A\x03\x02\x02\x02\u0522\u0521\x03\x02" +
		"\x02\x02\u0523A\x03\x02\x02\x02\u0524\u0525\b\"\x01\x02\u0525\u0526\x05" +
		"H%\x02\u0526\u0539\x03\x02\x02\x02\u0527\u0535\f\x04\x02\x02\u0528\u0529" +
		"\x07/\x02\x02\u0529\u052A\x07v\x02\x02\u052A\u0536\x05H%\x02\u052B\u052C" +
		"\x05D#\x02\u052C\u052D\x07v\x02\x02\u052D\u052E\x05B\"\x02\u052E\u052F" +
		"\x05F$\x02\u052F\u0536\x03\x02\x02\x02\u0530\u0531\x07\x8C\x02\x02\u0531" +
		"\u0532\x05D#\x02\u0532\u0533\x07v\x02\x02\u0533\u0534\x05H%\x02\u0534" +
		"\u0536\x03\x02\x02\x02\u0535\u0528\x03\x02\x02\x02\u0535\u052B\x03\x02" +
		"\x02\x02\u0535\u0530\x03\x02\x02\x02\u0536\u0538\x03\x02\x02\x02\u0537" +
		"\u0527\x03\x02\x02\x02\u0538\u053B\x03\x02\x02\x02\u0539\u0537\x03\x02" +
		"\x02\x02\u0539\u053A\x03\x02\x02\x02\u053AC\x03\x02\x02\x02\u053B\u0539" +
		"\x03\x02\x02\x02\u053C\u053E\x07l\x02\x02\u053D\u053C\x03\x02\x02\x02" +
		"\u053D\u053E\x03\x02\x02\x02\u053E\u054C\x03\x02\x02\x02\u053F\u0541\x07" +
		"z\x02\x02\u0540\u0542\x07\xA2\x02\x02\u0541\u0540\x03\x02\x02\x02\u0541" +
		"\u0542\x03\x02\x02\x02\u0542\u054C\x03\x02\x02\x02\u0543\u0545\x07\xBD" +
		"\x02\x02\u0544\u0546\x07\xA2\x02\x02\u0545\u0544\x03\x02\x02\x02\u0545" +
		"\u0546\x03\x02\x02\x02\u0546\u054C\x03\x02\x02\x02\u0547\u0549\x07[\x02" +
		"\x02\u0548\u054A\x07\xA2\x02\x02\u0549\u0548\x03\x02\x02\x02\u0549\u054A" +
		"\x03\x02\x02\x02\u054A\u054C\x03\x02\x02\x02\u054B\u053D\x03\x02\x02\x02" +
		"\u054B\u053F\x03\x02\x02\x02\u054B\u0543\x03\x02\x02\x02\u054B\u0547\x03" +
		"\x02\x02\x02\u054CE\x03\x02\x02\x02\u054D\u054E\x07\x9B\x02\x02\u054E" +
		"\u055C\x05b2\x02\u054F\u0550\x07\xED\x02\x02\u0550\u0551\x07\x04\x02\x02" +
		"\u0551\u0556\x05\xB0Y\x02\u0552\u0553\x07\x06\x02\x02\u0553\u0555\x05" +
		"\xB0Y\x02\u0554\u0552\x03\x02\x02\x02\u0555\u0558";
	private static readonly _serializedATNSegment3: string =
		"\x03\x02\x02\x02\u0556\u0554\x03\x02\x02\x02\u0556\u0557\x03\x02\x02\x02" +
		"\u0557\u0559\x03\x02\x02\x02\u0558\u0556\x03\x02\x02\x02\u0559\u055A\x07" +
		"\x05\x02\x02\u055A\u055C\x03\x02\x02\x02\u055B\u054D\x03\x02\x02\x02\u055B" +
		"\u054F\x03\x02\x02\x02\u055CG\x03\x02\x02\x02\u055D\u0564\x05L\'\x02\u055E" +
		"\u055F\x07\xD8\x02\x02\u055F\u0560\x05J&\x02\u0560\u0561\x07\x04\x02\x02" +
		"\u0561\u0562\x05`1\x02\u0562\u0563\x07\x05\x02\x02\u0563\u0565\x03\x02" +
		"\x02\x02\u0564\u055E\x03\x02\x02\x02\u0564\u0565\x03\x02\x02\x02\u0565" +
		"I\x03\x02\x02\x02\u0566\u0567\t\x0E\x02\x02\u0567K\x03\x02\x02\x02\u0568" +
		"\u05BB\x05Z.\x02\u0569\u056A\x07\x86\x02\x02\u056A\u0575\x07\x04\x02\x02" +
		"\u056B\u056C\x07\xA5\x02\x02\u056C\u056D\x07\"\x02\x02\u056D\u0572\x05" +
		"`1\x02\u056E\u056F\x07\x06\x02\x02\u056F\u0571\x05`1\x02\u0570\u056E\x03" +
		"\x02\x02\x02\u0571\u0574\x03\x02\x02\x02\u0572\u0570\x03\x02\x02\x02\u0572" +
		"\u0573\x03\x02\x02\x02\u0573\u0576\x03\x02\x02\x02\u0574\u0572\x03\x02" +
		"\x02\x02\u0575\u056B\x03\x02\x02\x02\u0575\u0576\x03\x02\x02\x02\u0576" +
		"\u0581\x03\x02\x02\x02\u0577\u0578\x07\xA0\x02\x02\u0578\u0579\x07\"\x02" +
		"\x02\u0579\u057E\x05.\x18\x02\u057A\u057B\x07\x06\x02\x02\u057B\u057D" +
		"\x05.\x18\x02\u057C\u057A\x03\x02\x02\x02\u057D\u0580\x03\x02\x02\x02" +
		"\u057E\u057C\x03\x02\x02\x02\u057E\u057F\x03\x02\x02\x02\u057F\u0582\x03" +
		"\x02\x02\x02\u0580\u057E\x03\x02\x02\x02\u0581\u0577\x03\x02\x02\x02\u0581" +
		"\u0582\x03\x02\x02\x02\u0582\u058C\x03\x02\x02\x02\u0583\u0584\x07\x88" +
		"\x02\x02\u0584\u0589\x05N(\x02\u0585\u0586\x07\x06\x02\x02\u0586\u0588" +
		"\x05N(\x02\u0587\u0585\x03\x02\x02\x02\u0588\u058B\x03\x02\x02\x02\u0589" +
		"\u0587\x03\x02\x02\x02\u0589\u058A\x03\x02\x02\x02\u058A\u058D\x03\x02" +
		"\x02\x02\u058B\u0589\x03\x02\x02\x02\u058C\u0583\x03\x02\x02\x02\u058C" +
		"\u058D\x03\x02\x02\x02\u058D\u058F\x03\x02\x02\x02\u058E\u0590\x05P)\x02" +
		"\u058F\u058E\x03\x02\x02\x02\u058F\u0590\x03\x02\x02\x02\u0590\u0594\x03" +
		"\x02\x02\x02\u0591\u0592\x07\x15\x02\x02\u0592\u0593\x07\x83\x02\x02\u0593" +
		"\u0595\x05T+\x02\u0594\u0591\x03\x02\x02\x02\u0594\u0595\x03\x02\x02\x02" +
		"\u0595\u0597\x03\x02\x02\x02\u0596\u0598\t\x0F\x02\x02\u0597\u0596\x03" +
		"\x02\x02\x02\u0597\u0598\x03\x02\x02\x02\u0598\u0599\x03\x02\x02\x02\u0599" +
		"\u059A\x07\xA9\x02\x02\u059A\u059B\x07\x04\x02\x02\u059B\u059C\x05\x92" +
		"J\x02\u059C\u05A6\x07\x05\x02\x02\u059D\u059E\x07\xD3\x02\x02\u059E\u05A3" +
		"\x05V,\x02\u059F\u05A0\x07\x06\x02\x02\u05A0\u05A2\x05V,\x02\u05A1\u059F" +
		"\x03\x02\x02\x02\u05A2\u05A5\x03\x02\x02\x02\u05A3\u05A1\x03\x02\x02\x02" +
		"\u05A3\u05A4\x03\x02\x02\x02\u05A4\u05A7\x03\x02\x02\x02\u05A5\u05A3\x03" +
		"\x02\x02\x02\u05A6\u059D\x03\x02\x02\x02\u05A6\u05A7\x03\x02\x02\x02\u05A7" +
		"\u05A8\x03\x02\x02\x02\u05A8\u05A9\x07C\x02\x02\u05A9\u05AE\x05X-\x02" +
		"\u05AA\u05AB\x07\x06\x02\x02\u05AB\u05AD\x05X-\x02\u05AC\u05AA\x03\x02" +
		"\x02\x02\u05AD\u05B0\x03\x02\x02\x02\u05AE\u05AC\x03\x02\x02\x02\u05AE" +
		"\u05AF\x03\x02\x02\x02\u05AF\u05B1\x03\x02\x02\x02\u05B0\u05AE\x03\x02" +
		"\x02\x02\u05B1\u05B9\x07\x05\x02\x02\u05B2\u05B4\x07\x1C\x02\x02\u05B3" +
		"\u05B2\x03\x02\x02\x02\u05B3\u05B4\x03\x02\x02\x02\u05B4\u05B5\x03\x02" +
		"\x02\x02\u05B5\u05B7\x05\xB0Y\x02\u05B6\u05B8\x05\\/\x02\u05B7\u05B6\x03" +
		"\x02\x02\x02\u05B7\u05B8\x03\x02\x02\x02\u05B8\u05BA\x03\x02\x02\x02\u05B9" +
		"\u05B3\x03\x02\x02\x02\u05B9\u05BA\x03\x02\x02\x02\u05BA\u05BC\x03\x02" +
		"\x02\x02\u05BB\u0569\x03\x02\x02\x02\u05BB\u05BC\x03\x02\x02\x02\u05BC" +
		"M\x03\x02\x02\x02\u05BD\u05BE\x05`1\x02\u05BE\u05BF\x07\x1C\x02\x02\u05BF" +
		"\u05C0\x05\xB0Y\x02\u05C0O\x03\x02\x02\x02\u05C1\u05C2\x07\x9C\x02\x02" +
		"\u05C2\u05C3\x07\xC2\x02\x02\u05C3\u05C4\x07\xAA\x02\x02\u05C4\u05CD\x07" +
		"\x83\x02\x02\u05C5\u05C6\x07\x16\x02\x02\u05C6\u05C7\x07\xC3\x02\x02\u05C7" +
		"\u05C8\x07\xAA\x02\x02\u05C8\u05CA\x07\x83\x02\x02\u05C9\u05CB\x05R*\x02" +
		"\u05CA\u05C9\x03\x02\x02\x02\u05CA\u05CB\x03\x02\x02\x02\u05CB\u05CD\x03" +
		"\x02\x02\x02\u05CC\u05C1\x03\x02\x02\x02\u05CC\u05C5\x03\x02\x02\x02\u05CD" +
		"Q\x03\x02\x02\x02\u05CE\u05CF\x07\xCF\x02\x02\u05CF\u05D0\x07I\x02\x02" +
		"\u05D0\u05D8\x07\x85\x02\x02\u05D1\u05D2\x07\x9A\x02\x02\u05D2\u05D3\x07" +
		"I\x02\x02\u05D3\u05D8\x07\x85\x02\x02\u05D4\u05D5\x07\xF5\x02\x02\u05D5" +
		"\u05D6\x07\xE8\x02\x02\u05D6\u05D8\x07\xC3\x02\x02\u05D7\u05CE\x03\x02" +
		"\x02\x02\u05D7\u05D1\x03\x02\x02\x02\u05D7\u05D4\x03\x02\x02\x02\u05D8" +
		"S\x03\x02\x02\x02\u05D9\u05DA\x07\x07\x02\x02\u05DA\u05DB\x07\xDE\x02" +
		"\x02\u05DB\u05DC\x07\x8D\x02\x02\u05DC\u05ED\x07\xC2\x02\x02\u05DD\u05DE" +
		"\x07\x07\x02\x02\u05DE\u05DF\x07\xA7\x02\x02\u05DF\u05E0\x07x\x02\x02" +
		"\u05E0\u05ED\x07\xC2\x02\x02\u05E1\u05E2\x07\x07\x02\x02\u05E2\u05E3\x07" +
		"\xDE\x02\x02\u05E3\u05E4\x07V\x02\x02\u05E4\u05ED\x05\xB0Y\x02\u05E5\u05E6" +
		"\x07\x07\x02\x02\u05E6\u05E7\x07\xDE\x02\x02\u05E7\u05E8\x07x\x02\x02" +
		"\u05E8\u05ED\x05\xB0Y\x02\u05E9\u05EA\x07\x07\x02\x02\u05EA\u05EB\x07" +
		"\xDE\x02\x02\u05EB\u05ED\x05\xB0Y\x02\u05EC\u05D9\x03\x02\x02\x02\u05EC" +
		"\u05DD\x03\x02\x02\x02\u05EC\u05E1\x03\x02\x02\x02\u05EC\u05E5\x03\x02" +
		"\x02\x02\u05EC\u05E9\x03\x02\x02\x02\u05EDU\x03\x02\x02\x02\u05EE\u05EF" +
		"\x05\xB0Y\x02\u05EF\u05F0\x07\xFB\x02\x02\u05F0\u05F1\x07\x04\x02\x02" +
		"\u05F1\u05F6\x05\xB0Y\x02\u05F2\u05F3\x07\x06\x02\x02\u05F3\u05F5\x05" +
		"\xB0Y\x02\u05F4\u05F2\x03\x02\x02\x02\u05F5\u05F8\x03\x02\x02\x02\u05F6" +
		"\u05F4\x03\x02\x02\x02\u05F6\u05F7\x03\x02\x02\x02\u05F7\u05F9\x03\x02" +
		"\x02\x02\u05F8\u05F6\x03\x02\x02\x02\u05F9\u05FA\x07\x05\x02\x02\u05FA" +
		"W\x03\x02\x02\x02\u05FB\u05FC\x05\xB0Y\x02\u05FC\u05FD\x07\x1C\x02\x02" +
		"\u05FD\u05FE\x05`1\x02\u05FEY\x03\x02\x02\x02\u05FF\u0607\x05^0\x02\u0600" +
		"\u0602\x07\x1C\x02\x02\u0601\u0600\x03\x02\x02\x02\u0601\u0602\x03\x02" +
		"\x02\x02\u0602\u0603\x03\x02\x02\x02\u0603\u0605\x05\xB0Y\x02\u0604\u0606" +
		"\x05\\/\x02\u0605\u0604\x03\x02\x02\x02\u0605\u0606\x03\x02\x02\x02\u0606" +
		"\u0608\x03\x02\x02\x02\u0607\u0601\x03\x02\x02\x02\u0607\u0608\x03\x02" +
		"\x02\x02\u0608[\x03\x02\x02\x02\u0609\u060A\x07\x04\x02\x02\u060A\u060F" +
		"\x05\xB0Y\x02\u060B\u060C\x07\x06\x02\x02\u060C\u060E\x05\xB0Y\x02\u060D" +
		"\u060B\x03\x02\x02\x02\u060E\u0611\x03\x02\x02\x02\u060F\u060D\x03\x02" +
		"\x02\x02\u060F\u0610\x03\x02\x02\x02\u0610\u0612\x03\x02\x02\x02\u0611" +
		"\u060F\x03\x02\x02\x02\u0612\u0613\x07\x05\x02\x02\u0613]\x03\x02\x02" +
		"\x02\u0614\u0632\x05\xA8U\x02\u0615\u0616\x07\x04\x02\x02\u0616\u0617" +
		"\x05\x12\n\x02\u0617\u0618\x07\x05\x02\x02\u0618\u0632\x03\x02\x02\x02" +
		"\u0619\u061A\x07\xE9\x02\x02\u061A\u061B\x07\x04\x02\x02\u061B\u0620\x05" +
		"`1\x02\u061C\u061D\x07\x06\x02\x02\u061D\u061F\x05`1\x02\u061E\u061C\x03" +
		"\x02\x02\x02\u061F\u0622\x03\x02\x02\x02\u0620\u061E\x03\x02\x02\x02\u0620" +
		"\u0621\x03\x02\x02\x02\u0621\u0623\x03\x02\x02\x02\u0622\u0620\x03\x02" +
		"\x02\x02\u0623\u0626\x07\x05\x02\x02\u0624\u0625\x07\xF5\x02\x02\u0625" +
		"\u0627\x07\xA1\x02\x02\u0626\u0624\x03\x02\x02\x02\u0626\u0627\x03\x02" +
		"\x02\x02\u0627\u0632\x03\x02\x02\x02\u0628\u0629\x07y\x02\x02\u0629\u062A" +
		"\x07\x04\x02\x02\u062A\u062B\x05\x12\n\x02\u062B\u062C\x07\x05\x02\x02" +
		"\u062C\u0632\x03\x02\x02\x02\u062D\u062E\x07\x04\x02\x02\u062E\u062F\x05" +
		"B\"\x02\u062F\u0630\x07\x05\x02\x02\u0630\u0632\x03\x02\x02\x02\u0631" +
		"\u0614\x03\x02\x02\x02\u0631\u0615\x03\x02\x02\x02\u0631\u0619\x03\x02" +
		"\x02\x02\u0631\u0628\x03\x02\x02\x02\u0631\u062D\x03\x02\x02\x02\u0632" +
		"_\x03\x02\x02\x02\u0633\u0634\x05b2\x02\u0634a\x03\x02\x02\x02\u0635\u0636" +
		"\b2\x01\x02\u0636\u0638\x05f4\x02\u0637\u0639\x05d3\x02\u0638\u0637\x03" +
		"\x02\x02\x02\u0638\u0639\x03\x02\x02\x02\u0639\u063D\x03\x02\x02\x02\u063A" +
		"\u063B\x07\x95\x02\x02\u063B\u063D\x05b2\x05\u063C\u0635\x03\x02\x02\x02" +
		"\u063C\u063A\x03\x02\x02\x02\u063D\u0646\x03\x02\x02\x02\u063E\u063F\f" +
		"\x04\x02\x02\u063F\u0640\x07\x19\x02\x02\u0640\u0645\x05b2\x05\u0641\u0642" +
		"\f\x03\x02\x02\u0642\u0643\x07\x9F\x02\x02\u0643\u0645\x05b2\x04\u0644" +
		"\u063E\x03\x02\x02\x02\u0644\u0641\x03\x02\x02\x02\u0645\u0648\x03\x02" +
		"\x02\x02\u0646\u0644\x03\x02\x02\x02\u0646\u0647\x03\x02\x02\x02\u0647" +
		"c\x03\x02\x02\x02\u0648\u0646\x03\x02\x02\x02\u0649\u064A\x05r:\x02\u064A" +
		"\u064B\x05f4\x02\u064B\u0687\x03\x02\x02\x02\u064C\u064D\x05r:\x02\u064D" +
		"\u064E\x05t;\x02\u064E\u064F\x07\x04\x02\x02\u064F\u0650\x05\x12\n\x02" +
		"\u0650\u0651\x07\x05\x02\x02\u0651\u0687\x03\x02\x02\x02\u0652\u0654\x07" +
		"\x95\x02\x02\u0653\u0652\x03\x02\x02\x02\u0653\u0654\x03\x02\x02\x02\u0654" +
		"\u0655\x03\x02\x02\x02\u0655\u0656\x07!\x02\x02\u0656\u0657\x05f4\x02" +
		"\u0657\u0658\x07\x19\x02\x02\u0658\u0659\x05f4\x02\u0659\u0687\x03\x02" +
		"\x02\x02\u065A\u065C\x07\x95\x02\x02\u065B\u065A\x03\x02\x02\x02\u065B" +
		"\u065C\x03\x02\x02\x02\u065C\u065D\x03\x02\x02\x02\u065D\u065E\x07i\x02" +
		"\x02\u065E\u065F\x07\x04\x02\x02\u065F\u0664\x05`1\x02\u0660\u0661\x07" +
		"\x06\x02\x02\u0661\u0663\x05`1\x02\u0662\u0660\x03\x02\x02\x02\u0663\u0666" +
		"\x03\x02\x02\x02\u0664\u0662\x03\x02\x02\x02\u0664\u0665\x03\x02\x02\x02" +
		"\u0665\u0667\x03\x02\x02\x02\u0666\u0664\x03\x02\x02\x02\u0667\u0668\x07" +
		"\x05\x02\x02\u0668\u0687\x03\x02\x02\x02\u0669\u066B\x07\x95\x02\x02\u066A" +
		"\u0669\x03\x02\x02\x02\u066A\u066B\x03\x02\x02\x02\u066B\u066C\x03\x02" +
		"\x02\x02\u066C\u066D\x07i\x02\x02\u066D\u066E\x07\x04\x02\x02\u066E\u066F" +
		"\x05\x12\n\x02\u066F\u0670\x07\x05\x02\x02\u0670\u0687\x03\x02\x02\x02" +
		"\u0671\u0673\x07\x95\x02\x02\u0672\u0671\x03\x02\x02\x02\u0672\u0673\x03" +
		"\x02\x02\x02\u0673\u0674\x03\x02\x02\x02\u0674\u0675\x07|\x02\x02\u0675" +
		"\u0678\x05f4\x02\u0676\u0677\x07K\x02\x02\u0677\u0679\x05f4\x02\u0678" +
		"\u0676\x03\x02\x02\x02\u0678\u0679\x03\x02\x02\x02\u0679\u0687\x03\x02" +
		"\x02\x02\u067A\u067C\x07t\x02\x02\u067B\u067D\x07\x95\x02\x02\u067C\u067B" +
		"\x03\x02\x02\x02\u067C\u067D\x03\x02\x02\x02\u067D\u067E\x03\x02\x02\x02" +
		"\u067E\u0687\x07\x96\x02\x02\u067F\u0681\x07t\x02\x02\u0680\u0682\x07" +
		"\x95\x02\x02\u0681\u0680\x03\x02\x02\x02\u0681\u0682\x03\x02\x02\x02\u0682" +
		"\u0683\x03\x02\x02\x02\u0683\u0684\x07D\x02\x02\u0684\u0685\x07Z\x02\x02" +
		"\u0685\u0687\x05f4\x02\u0686\u0649\x03\x02\x02\x02\u0686\u064C\x03\x02" +
		"\x02\x02\u0686\u0653\x03\x02\x02\x02\u0686\u065B\x03\x02\x02\x02\u0686" +
		"\u066A\x03\x02\x02\x02\u0686\u0672\x03\x02\x02\x02\u0686\u067A\x03\x02" +
		"\x02\x02\u0686\u067F\x03\x02\x02\x02\u0687e\x03\x02\x02\x02\u0688\u0689" +
		"\b4\x01\x02\u0689\u068D\x05h5\x02\u068A\u068B\t\x10\x02\x02\u068B\u068D" +
		"\x05f4\x06\u068C\u0688\x03\x02\x02\x02\u068C\u068A\x03\x02\x02\x02\u068D" +
		"\u069C\x03\x02\x02\x02\u068E\u068F\f\x05\x02\x02\u068F\u0690\t\x11\x02" +
		"\x02\u0690\u069B\x05f4\x06\u0691\u0692\f\x04\x02\x02\u0692\u0693\t\x10" +
		"\x02\x02\u0693\u069B\x05f4\x05\u0694\u0695\f\x03\x02\x02\u0695\u0696\x07" +
		"\u0106\x02\x02\u0696\u069B\x05f4\x04\u0697\u0698\f\x07\x02\x02\u0698\u0699" +
		"\x07\x1E\x02\x02\u0699\u069B\x05p9\x02\u069A\u068E\x03\x02\x02\x02\u069A" +
		"\u0691\x03\x02\x02\x02\u069A\u0694\x03\x02\x02\x02\u069A\u0697\x03\x02" +
		"\x02\x02\u069B\u069E\x03\x02\x02\x02\u069C\u069A\x03\x02\x02\x02\u069C" +
		"\u069D\x03\x02\x02\x02\u069Dg\x03\x02\x02\x02\u069E\u069C\x03\x02\x02" +
		"\x02\u069F\u06A0\b5\x01\x02\u06A0\u0799\x07\x96\x02\x02\u06A1\u0799\x05" +
		"x=\x02\u06A2\u06A3\x05\xB0Y\x02\u06A3\u06A4\x05n8\x02\u06A4\u0799\x03" +
		"\x02\x02\x02\u06A5\u06A6\x07F\x02\x02\u06A6\u06A7\x07\xAE\x02\x02\u06A7" +
		"\u0799\x05n8\x02\u06A8\u0799\x05\xB2Z\x02\u06A9\u0799\x05v<\x02\u06AA" +
		"\u0799\x05n8\x02\u06AB\u0799\x07\u010A\x02\x02\u06AC\u0799\x07\u0107\x02" +
		"\x02\u06AD\u06AE\x07\xAC\x02\x02\u06AE\u06AF\x07\x04\x02\x02\u06AF\u06B0" +
		"\x05f4\x02\u06B0\u06B1\x07i\x02\x02\u06B1\u06B2\x05f4\x02\u06B2\u06B3" +
		"\x07\x05\x02\x02\u06B3\u0799\x03\x02\x02\x02\u06B4\u06B5\x07\x04\x02\x02" +
		"\u06B5\u06B8\x05`1\x02\u06B6\u06B7\x07\x06\x02\x02\u06B7\u06B9\x05`1\x02" +
		"\u06B8\u06B6\x03\x02\x02\x02\u06B9\u06BA\x03\x02\x02\x02\u06BA\u06B8\x03" +
		"\x02\x02\x02\u06BA\u06BB\x03\x02\x02\x02\u06BB\u06BC\x03\x02\x02\x02\u06BC" +
		"\u06BD\x07\x05\x02\x02\u06BD\u0799\x03\x02\x02\x02\u06BE\u06BF\x07\xC2" +
		"\x02\x02\u06BF\u06C0\x07\x04\x02\x02\u06C0\u06C5\x05`1\x02\u06C1\u06C2" +
		"\x07\x06\x02\x02\u06C2\u06C4\x05`1\x02\u06C3\u06C1\x03\x02\x02\x02\u06C4" +
		"\u06C7\x03\x02\x02\x02\u06C5\u06C3\x03\x02\x02\x02\u06C5\u06C6\x03\x02" +
		"\x02\x02\u06C6\u06C8\x03\x02\x02\x02\u06C7\u06C5\x03\x02\x02\x02\u06C8" +
		"\u06C9\x07\x05\x02\x02\u06C9\u0799\x03\x02\x02\x02\u06CA\u06CB\x05\xA8" +
		"U\x02\u06CB\u06CC\x07\x04\x02\x02\u06CC\u06CD\x07\u0103\x02\x02\u06CD" +
		"\u06CF\x07\x05\x02\x02\u06CE\u06D0\x05\x86D\x02\u06CF\u06CE\x03\x02\x02" +
		"\x02\u06CF\u06D0\x03\x02\x02\x02\u06D0\u06D2\x03\x02\x02\x02\u06D1\u06D3" +
		"\x05\x8AF\x02\u06D2\u06D1\x03\x02\x02\x02\u06D2\u06D3\x03\x02\x02\x02" +
		"\u06D3\u0799\x03\x02\x02\x02\u06D4\u06D6\x05j6\x02\u06D5\u06D4\x03\x02" +
		"\x02\x02\u06D5\u06D6\x03\x02\x02\x02\u06D6\u06D7\x03\x02\x02\x02\u06D7" +
		"\u06D8\x05\xA8U\x02\u06D8\u06E4\x07\x04\x02\x02\u06D9\u06DB\x05> \x02" +
		"\u06DA\u06D9\x03\x02\x02\x02\u06DA\u06DB\x03\x02\x02\x02\u06DB\u06DC\x03" +
		"\x02\x02\x02\u06DC\u06E1\x05`1\x02\u06DD\u06DE\x07\x06\x02\x02\u06DE\u06E0" +
		"\x05`1\x02\u06DF\u06DD\x03\x02\x02\x02\u06E0\u06E3\x03\x02\x02\x02\u06E1" +
		"\u06DF\x03\x02\x02\x02\u06E1\u06E2\x03\x02\x02\x02\u06E2\u06E5\x03\x02" +
		"\x02\x02\u06E3\u06E1\x03\x02\x02\x02\u06E4\u06DA\x03\x02\x02\x02\u06E4" +
		"\u06E5\x03\x02\x02\x02\u06E5\u06F0\x03\x02\x02\x02\u06E6\u06E7\x07\xA0" +
		"\x02\x02\u06E7\u06E8\x07\"\x02\x02\u06E8\u06ED\x05.\x18\x02\u06E9\u06EA" +
		"\x07\x06\x02\x02\u06EA\u06EC\x05.\x18\x02\u06EB\u06E9\x03\x02\x02\x02" +
		"\u06EC\u06EF\x03\x02\x02\x02\u06ED\u06EB\x03\x02\x02\x02\u06ED\u06EE\x03" +
		"\x02\x02\x02\u06EE\u06F1\x03\x02\x02\x02\u06EF\u06ED\x03\x02\x02\x02\u06F0" +
		"\u06E6\x03\x02\x02\x02\u06F0\u06F1\x03\x02\x02\x02\u06F1\u06F2\x03\x02" +
		"\x02\x02\u06F2\u06F4\x07\x05\x02\x02\u06F3\u06F5\x05\x86D\x02\u06F4\u06F3" +
		"\x03\x02\x02\x02\u06F4\u06F5\x03\x02\x02\x02\u06F5\u06FA\x03\x02\x02\x02" +
		"\u06F6\u06F8\x05l7\x02\u06F7\u06F6\x03\x02\x02\x02\u06F7\u06F8\x03\x02" +
		"\x02\x02\u06F8\u06F9\x03\x02\x02\x02\u06F9\u06FB\x05\x8AF\x02\u06FA\u06F7" +
		"\x03\x02\x02\x02\u06FA\u06FB\x03\x02\x02\x02\u06FB\u0799\x03\x02\x02\x02" +
		"\u06FC\u06FD\x05\xB0Y\x02\u06FD\u06FE\x05\x8AF\x02\u06FE\u0799\x03\x02" +
		"\x02\x02\u06FF\u0700\x05\xB0Y\x02\u0700\u0701\x07\b\x02\x02\u0701\u0702" +
		"\x05`1\x02\u0702\u0799\x03\x02\x02\x02\u0703\u070C\x07\x04\x02\x02\u0704" +
		"\u0709\x05\xB0Y\x02\u0705\u0706\x07\x06\x02\x02\u0706\u0708\x05\xB0Y\x02" +
		"\u0707\u0705\x03\x02\x02\x02\u0708\u070B\x03\x02\x02\x02\u0709\u0707\x03" +
		"\x02\x02\x02\u0709\u070A\x03\x02\x02\x02\u070A\u070D\x03\x02\x02\x02\u070B" +
		"\u0709\x03\x02\x02\x02\u070C\u0704\x03\x02\x02\x02\u070C\u070D\x03\x02" +
		"\x02\x02\u070D\u070E\x03\x02\x02\x02\u070E\u070F\x07\x05\x02\x02\u070F" +
		"\u0710\x07\b\x02\x02\u0710\u0799\x05`1\x02\u0711\u0712\x07\x04\x02\x02" +
		"\u0712\u0713\x05\x12\n\x02\u0713\u0714\x07\x05\x02\x02\u0714\u0799\x03" +
		"\x02\x02\x02\u0715\u0716\x07O\x02\x02\u0716\u0717\x07\x04\x02\x02\u0717" +
		"\u0718\x05\x12\n\x02\u0718\u0719\x07\x05\x02\x02\u0719\u0799\x03\x02\x02" +
		"\x02\u071A\u071B\x07%\x02\x02\u071B\u071D\x05`1\x02\u071C\u071E\x05\x84" +
		"C\x02\u071D\u071C\x03\x02\x02\x02\u071E\u071F\x03\x02\x02\x02\u071F\u071D" +
		"\x03\x02\x02\x02\u071F\u0720\x03\x02\x02\x02\u0720\u0723\x03\x02\x02\x02" +
		"\u0721\u0722\x07H\x02\x02\u0722\u0724\x05`1\x02\u0723\u0721\x03\x02\x02" +
		"\x02\u0723\u0724\x03\x02\x02\x02\u0724\u0725\x03\x02\x02\x02\u0725\u0726" +
		"\x07J\x02\x02\u0726\u0799\x03\x02\x02\x02\u0727\u0729\x07%\x02\x02\u0728" +
		"\u072A\x05\x84C\x02\u0729\u0728\x03\x02\x02\x02\u072A\u072B\x03\x02\x02" +
		"\x02\u072B\u0729\x03\x02\x02\x02\u072B\u072C\x03\x02\x02\x02\u072C\u072F" +
		"\x03\x02\x02\x02\u072D\u072E\x07H\x02\x02\u072E\u0730\x05`1\x02\u072F" +
		"\u072D\x03\x02\x02\x02\u072F\u0730\x03\x02\x02\x02\u0730\u0731\x03\x02" +
		"\x02\x02\u0731\u0732\x07J\x02\x02\u0732\u0799\x03\x02\x02\x02\u0733\u0734" +
		"\x07&\x02\x02\u0734\u0735\x07\x04\x02\x02\u0735\u0736\x05`1\x02\u0736" +
		"\u0737\x07\x1C\x02\x02\u0737\u0738\x05~@\x02\u0738\u0739\x07\x05\x02\x02" +
		"\u0739\u0799\x03\x02\x02\x02\u073A\u073B\x07\xE2\x02\x02\u073B\u073C\x07" +
		"\x04\x02\x02\u073C\u073D\x05`1\x02\u073D\u073E\x07\x1C\x02\x02\u073E\u073F" +
		"\x05~@\x02\u073F\u0740\x07\x05\x02\x02\u0740\u0799\x03\x02\x02\x02\u0741" +
		"\u0742\x07\x1B\x02\x02\u0742\u074B\x07\t\x02\x02\u0743\u0748\x05`1\x02" +
		"\u0744\u0745\x07\x06\x02\x02\u0745\u0747\x05`1\x02\u0746\u0744\x03\x02" +
		"\x02\x02\u0747\u074A\x03\x02\x02\x02\u0748\u0746\x03\x02\x02\x02\u0748" +
		"\u0749\x03\x02\x02\x02\u0749\u074C\x03\x02\x02\x02\u074A\u0748\x03\x02" +
		"\x02\x02\u074B\u0743\x03\x02\x02\x02\u074B\u074C\x03\x02\x02\x02\u074C" +
		"\u074D\x03\x02\x02\x02\u074D\u0799\x07\n\x02\x02\u074E\u0799\x05\xB0Y" +
		"\x02\u074F\u0799\x073\x02\x02\u0750\u0754\x077\x02\x02\u0751\u0752\x07" +
		"\x04\x02\x02\u0752\u0753\x07\u010B\x02\x02\u0753\u0755\x07\x05\x02\x02" +
		"\u0754\u0751\x03\x02\x02\x02\u0754\u0755\x03\x02\x02\x02\u0755\u0799\x03" +
		"\x02\x02\x02\u0756\u075A\x078\x02\x02\u0757\u0758\x07\x04\x02\x02\u0758" +
		"\u0759\x07\u010B\x02\x02\u0759\u075B\x07\x05\x02\x02\u075A\u0757\x03\x02" +
		"\x02\x02\u075A\u075B\x03\x02\x02\x02\u075B\u0799\x03\x02\x02\x02\u075C" +
		"\u0760\x07\x7F\x02\x02\u075D\u075E\x07\x04\x02\x02\u075E\u075F\x07\u010B" +
		"\x02\x02\u075F\u0761\x07\x05\x02\x02\u0760\u075D\x03\x02\x02\x02\u0760" +
		"\u0761\x03\x02\x02\x02\u0761\u0799\x03\x02\x02\x02\u0762\u0766\x07\x80" +
		"\x02\x02\u0763\u0764\x07\x04\x02\x02\u0764\u0765\x07\u010B\x02\x02\u0765" +
		"\u0767\x07\x05\x02\x02\u0766\u0763\x03\x02\x02\x02\u0766\u0767\x03\x02" +
		"\x02\x02\u0767\u0799\x03\x02\x02\x02\u0768\u0799\x079\x02\x02\u0769\u0799" +
		"\x072\x02\x02\u076A\u0799\x076\x02\x02\u076B\u0799\x074\x02\x02\u076C" +
		"\u076D\x07\xD4\x02\x02\u076D\u076E\x07\x04\x02\x02\u076E\u076F\x05f4\x02" +
		"\u076F\u0770\x07Z\x02\x02\u0770\u0773\x05f4\x02\u0771\u0772\x07X\x02\x02" +
		"\u0772\u0774\x05f4\x02\u0773\u0771\x03\x02\x02\x02\u0773\u0774\x03\x02" +
		"\x02\x02\u0774\u0775\x03\x02\x02\x02\u0775\u0776\x07\x05\x02\x02\u0776" +
		"\u0799\x03\x02\x02\x02\u0777\u0778\x07\x94\x02\x02\u0778\u0779\x07\x04" +
		"\x02\x02\u0779\u077C\x05f4\x02\u077A\u077B\x07\x06\x02\x02\u077B\u077D" +
		"\x05|?\x02\u077C\u077A\x03\x02\x02\x02\u077C\u077D\x03\x02\x02\x02\u077D" +
		"\u077E\x03\x02\x02\x02\u077E\u077F\x07\x05\x02\x02\u077F\u0799\x03\x02" +
		"\x02\x02\u0780\u0781\x07Q\x02\x02\u0781\u0782\x07\x04\x02\x02\u0782\u0783" +
		"\x05\xB0Y\x02\u0783\u0784\x07Z\x02\x02\u0784\u0785\x05f4\x02\u0785\u0786" +
		"\x07\x05\x02\x02\u0786\u0799\x03\x02\x02\x02\u0787\u0788\x07\x04\x02\x02" +
		"\u0788\u0789\x05`1\x02\u0789\u078A\x07\x05\x02\x02\u078A\u0799\x03\x02" +
		"\x02\x02\u078B\u078C\x07c\x02\x02\u078C\u0795\x07\x04\x02\x02\u078D\u0792" +
		"\x05\xA8U\x02\u078E\u078F\x07\x06\x02\x02\u078F\u0791\x05\xA8U\x02\u0790" +
		"\u078E\x03\x02\x02\x02\u0791\u0794\x03\x02\x02\x02\u0792\u0790\x03\x02" +
		"\x02\x02\u0792\u0793\x03\x02\x02\x02\u0793\u0796\x03\x02\x02\x02\u0794" +
		"\u0792\x03\x02\x02\x02\u0795\u078D\x03\x02\x02\x02\u0795\u0796\x03\x02" +
		"\x02\x02\u0796\u0797\x03\x02\x02\x02\u0797\u0799\x07\x05\x02\x02\u0798" +
		"\u069F\x03\x02\x02\x02\u0798\u06A1\x03\x02\x02\x02\u0798\u06A2\x03\x02" +
		"\x02\x02\u0798\u06A5\x03\x02\x02\x02\u0798\u06A8\x03\x02\x02\x02\u0798" +
		"\u06A9\x03\x02\x02\x02\u0798\u06AA\x03\x02\x02\x02\u0798\u06AB\x03\x02" +
		"\x02\x02\u0798\u06AC\x03\x02\x02\x02\u0798\u06AD\x03\x02\x02\x02\u0798" +
		"\u06B4\x03\x02\x02\x02\u0798\u06BE\x03\x02\x02\x02\u0798\u06CA\x03\x02" +
		"\x02\x02\u0798\u06D5\x03\x02\x02\x02\u0798\u06FC\x03\x02\x02\x02\u0798" +
		"\u06FF\x03\x02\x02\x02\u0798\u0703\x03\x02\x02\x02\u0798\u0711\x03\x02" +
		"\x02\x02\u0798\u0715\x03\x02\x02\x02\u0798\u071A\x03\x02\x02\x02\u0798" +
		"\u0727\x03\x02\x02\x02\u0798\u0733\x03\x02\x02\x02\u0798\u073A\x03\x02" +
		"\x02\x02\u0798\u0741\x03\x02\x02\x02\u0798\u074E\x03\x02\x02\x02\u0798" +
		"\u074F\x03\x02\x02\x02\u0798\u0750\x03\x02\x02\x02\u0798\u0756\x03\x02" +
		"\x02\x02\u0798\u075C\x03\x02\x02\x02\u0798\u0762\x03\x02\x02\x02\u0798" +
		"\u0768\x03\x02\x02\x02\u0798\u0769\x03\x02\x02\x02\u0798\u076A\x03\x02" +
		"\x02\x02\u0798\u076B\x03\x02\x02\x02\u0798\u076C\x03\x02\x02\x02\u0798" +
		"\u0777\x03\x02\x02\x02\u0798\u0780\x03\x02\x02\x02\u0798\u0787\x03\x02" +
		"\x02\x02\u0798\u078B\x03\x02\x02\x02\u0799\u07A4\x03\x02\x02\x02\u079A" +
		"\u079B\f\x13\x02\x02\u079B\u079C\x07\t\x02\x02\u079C\u079D\x05f4\x02\u079D" +
		"\u079E\x07\n\x02\x02\u079E\u07A3\x03\x02\x02\x02\u079F\u07A0\f\x11\x02" +
		"\x02\u07A0\u07A1\x07\x03\x02\x02\u07A1\u07A3\x05\xB0Y\x02\u07A2\u079A" +
		"\x03\x02\x02\x02\u07A2\u079F\x03\x02\x02\x02\u07A3\u07A6\x03\x02\x02\x02" +
		"\u07A4\u07A2\x03\x02\x02\x02\u07A4\u07A5\x03\x02\x02\x02\u07A5i\x03\x02" +
		"\x02\x02\u07A6\u07A4\x03\x02\x02\x02\u07A7\u07A8\t\x12\x02\x02\u07A8k" +
		"\x03\x02\x02\x02\u07A9\u07AA\x07h\x02\x02\u07AA\u07AE\x07\x98\x02\x02" +
		"\u07AB\u07AC\x07\xBA\x02\x02\u07AC\u07AE\x07\x98\x02\x02\u07AD\u07A9\x03" +
		"\x02\x02\x02\u07AD\u07AB\x03\x02\x02\x02\u07AEm\x03\x02\x02\x02\u07AF" +
		"\u07B6\x07\u0108\x02\x02\u07B0\u07B3\x07\u0109\x02\x02\u07B1\u07B2\x07" +
		"\xE4\x02\x02\u07B2\u07B4\x07\u0108\x02\x02\u07B3\u07B1\x03\x02\x02\x02" +
		"\u07B3\u07B4\x03\x02\x02\x02\u07B4\u07B6\x03\x02\x02\x02\u07B5\u07AF\x03" +
		"\x02\x02\x02\u07B5\u07B0\x03\x02\x02\x02\u07B6o\x03\x02\x02\x02\u07B7" +
		"\u07B8\x07\xDC\x02\x02\u07B8\u07B9\x07\xFA\x02\x02\u07B9\u07BE\x05x=\x02" +
		"\u07BA\u07BB\x07\xDC\x02\x02\u07BB\u07BC\x07\xFA\x02\x02\u07BC\u07BE\x05" +
		"n8\x02\u07BD\u07B7\x03\x02\x02\x02\u07BD\u07BA\x03\x02\x02\x02\u07BEq" +
		"\x03\x02\x02\x02\u07BF\u07C0\t\x13\x02\x02\u07C0s\x03\x02\x02\x02\u07C1" +
		"\u07C2\t\x14\x02\x02\u07C2u\x03\x02\x02\x02\u07C3\u07C4\t\x15\x02\x02" +
		"\u07C4w\x03\x02\x02\x02\u07C5\u07C7\x07p\x02\x02\u07C6\u07C8\t\x10\x02" +
		"\x02\u07C7\u07C6\x03\x02\x02\x02\u07C7\u07C8\x03\x02\x02\x02\u07C8\u07C9" +
		"\x03\x02\x02\x02\u07C9\u07CA\x05n8\x02\u07CA\u07CD\x05z>\x02\u07CB\u07CC" +
		"\x07\xDE\x02\x02\u07CC\u07CE\x05z>\x02\u07CD\u07CB\x03\x02\x02\x02\u07CD" +
		"\u07CE\x03\x02\x02\x02\u07CEy\x03\x02\x02\x02\u07CF\u07D0\t\x16\x02\x02" +
		"\u07D0{\x03\x02\x02\x02\u07D1\u07D2\t\x17\x02\x02\u07D2}\x03\x02\x02\x02" +
		"\u07D3\u07D4\b@\x01\x02\u07D4\u07D5\x07\xC2\x02\x02\u07D5\u07D6\x07\x04" +
		"\x02\x02\u07D6\u07DB\x05\x80A\x02\u07D7\u07D8\x07\x06\x02\x02\u07D8\u07DA" +
		"\x05\x80A\x02\u07D9\u07D7\x03\x02\x02\x02\u07DA\u07DD\x03\x02\x02\x02" +
		"\u07DB\u07D9\x03\x02\x02\x02\u07DB\u07DC\x03\x02\x02\x02\u07DC\u07DE\x03" +
		"\x02\x02\x02\u07DD\u07DB\x03\x02\x02\x02\u07DE\u07DF\x07\x05\x02\x02\u07DF" +
		"\u082F\x03\x02\x02\x02\u07E0\u07E1\x07p\x02\x02\u07E1\u07E4\x05z>\x02" +
		"\u07E2\u07E3\x07\xDE\x02\x02\u07E3\u07E5\x05z>\x02\u07E4\u07E2\x03\x02" +
		"\x02\x02\u07E4\u07E5\x03\x02\x02\x02\u07E5\u082F\x03\x02\x02\x02\u07E6" +
		"\u07EB\x07\xDD\x02\x02\u07E7\u07E8\x07\x04\x02\x02\u07E8\u07E9\x05\x82" +
		"B\x02\u07E9\u07EA\x07\x05\x02\x02\u07EA\u07EC\x03\x02\x02\x02\u07EB\u07E7" +
		"\x03\x02\x02\x02\u07EB\u07EC\x03\x02\x02\x02\u07EC\u07F0\x03\x02\x02\x02" +
		"\u07ED\u07EE\x07\xF6\x02\x02\u07EE\u07EF\x07\xDC\x02\x02\u07EF\u07F1\x07" +
		"\xFA\x02\x02\u07F0\u07ED\x03\x02\x02\x02\u07F0\u07F1\x03\x02\x02\x02\u07F1" +
		"\u082F\x03\x02\x02\x02\u07F2\u07F7\x07\xDD\x02\x02\u07F3\u07F4\x07\x04" +
		"\x02\x02\u07F4\u07F5\x05\x82B\x02\u07F5\u07F6\x07\x05\x02\x02\u07F6\u07F8" +
		"\x03\x02\x02\x02\u07F7\u07F3\x03\x02\x02\x02\u07F7\u07F8\x03\x02\x02\x02" +
		"\u07F8\u07F9\x03\x02\x02\x02\u07F9\u07FA\x07\xF5\x02\x02\u07FA\u07FB\x07" +
		"\xDC\x02\x02\u07FB\u082F\x07\xFA\x02\x02\u07FC\u0801\x07\xDC\x02\x02\u07FD" +
		"\u07FE\x07\x04\x02\x02\u07FE\u07FF\x05\x82B\x02\u07FF\u0800\x07\x05\x02" +
		"\x02\u0800\u0802\x03\x02\x02\x02\u0801\u07FD\x03\x02\x02\x02\u0801\u0802" +
		"\x03\x02\x02\x02\u0802\u0806\x03\x02\x02\x02\u0803\u0804\x07\xF6\x02\x02" +
		"\u0804\u0805\x07\xDC\x02\x02\u0805\u0807\x07\xFA\x02\x02\u0806\u0803\x03" +
		"\x02\x02\x02\u0806\u0807\x03\x02";
	private static readonly _serializedATNSegment4: string =
		"\x02\x02\u0807\u082F\x03\x02\x02\x02\u0808\u080D\x07\xDC\x02\x02\u0809" +
		"\u080A\x07\x04\x02\x02\u080A\u080B\x05\x82B\x02\u080B\u080C\x07\x05\x02" +
		"\x02\u080C\u080E\x03\x02\x02\x02\u080D\u0809\x03\x02\x02\x02\u080D\u080E" +
		"\x03\x02\x02\x02\u080E\u080F\x03\x02\x02\x02\u080F\u0810\x07\xF5\x02\x02" +
		"\u0810\u0811\x07\xDC\x02\x02\u0811\u082F\x07\xFA\x02\x02\u0812\u0813\x07" +
		"F\x02\x02\u0813\u082F\x07\xAE\x02\x02\u0814\u0815\x07\x1B\x02\x02\u0815" +
		"\u0816\x07\xFD\x02\x02\u0816\u0817\x05~@\x02\u0817\u0818\x07\xFF\x02\x02" +
		"\u0818\u082F\x03\x02\x02\x02\u0819\u081A\x07\x82\x02\x02\u081A\u081B\x07" +
		"\xFD\x02\x02\u081B\u081C\x05~@\x02\u081C\u081D\x07\x06\x02\x02\u081D\u081E" +
		"\x05~@\x02\u081E\u081F\x07\xFF\x02\x02\u081F\u082F\x03\x02\x02\x02\u0820" +
		"\u082C\x05\xB0Y\x02\u0821\u0822\x07\x04\x02\x02\u0822\u0827\x05\x82B\x02" +
		"\u0823\u0824\x07\x06\x02\x02\u0824\u0826\x05\x82B\x02\u0825\u0823\x03" +
		"\x02\x02\x02\u0826\u0829\x03\x02\x02\x02\u0827\u0825\x03\x02\x02\x02\u0827" +
		"\u0828\x03\x02\x02\x02\u0828\u082A\x03\x02\x02\x02\u0829\u0827\x03\x02" +
		"\x02\x02\u082A\u082B\x07\x05\x02\x02\u082B\u082D\x03\x02\x02\x02\u082C" +
		"\u0821\x03\x02\x02\x02\u082C\u082D\x03\x02\x02\x02\u082D\u082F\x03\x02" +
		"\x02\x02\u082E\u07D3\x03\x02\x02\x02\u082E\u07E0\x03\x02\x02\x02\u082E" +
		"\u07E6\x03\x02\x02\x02\u082E\u07F2\x03\x02\x02\x02\u082E\u07FC\x03\x02" +
		"\x02\x02\u082E\u0808\x03\x02\x02\x02\u082E\u0812\x03\x02\x02\x02\u082E" +
		"\u0814\x03\x02\x02\x02\u082E\u0819\x03\x02\x02\x02\u082E\u0820\x03\x02" +
		"\x02\x02\u082F\u0839\x03\x02\x02\x02\u0830\u0831\f\x04\x02\x02\u0831\u0835" +
		"\x07\x1B\x02\x02\u0832\u0833\x07\t\x02\x02\u0833\u0834\x07\u010B\x02\x02" +
		"\u0834\u0836\x07\n\x02\x02\u0835\u0832\x03\x02\x02\x02\u0835\u0836\x03" +
		"\x02\x02\x02\u0836\u0838\x03\x02\x02\x02\u0837\u0830\x03\x02\x02\x02\u0838" +
		"\u083B\x03\x02\x02\x02\u0839\u0837\x03\x02\x02\x02\u0839\u083A\x03\x02" +
		"\x02\x02\u083A\x7F\x03\x02\x02\x02\u083B\u0839\x03\x02\x02\x02\u083C\u0841" +
		"\x05~@\x02\u083D\u083E\x05\xB0Y\x02\u083E\u083F\x05~@\x02\u083F\u0841" +
		"\x03\x02\x02\x02\u0840\u083C\x03\x02\x02\x02\u0840\u083D\x03\x02\x02\x02" +
		"\u0841\x81\x03\x02\x02\x02\u0842\u0845\x07\u010B\x02\x02\u0843\u0845\x05" +
		"~@\x02\u0844\u0842\x03\x02\x02\x02\u0844\u0843\x03\x02\x02\x02\u0845\x83" +
		"\x03\x02\x02\x02\u0846\u0847\x07\xF2\x02\x02\u0847\u0848\x05`1\x02\u0848" +
		"\u0849\x07\xDA\x02\x02\u0849\u084A\x05`1\x02\u084A\x85\x03\x02\x02\x02" +
		"\u084B\u084C\x07T\x02\x02\u084C\u084D\x07\x04\x02\x02\u084D\u084E\x07" +
		"\xF3\x02\x02\u084E\u084F\x05b2\x02\u084F\u0850\x07\x05\x02\x02\u0850\x87" +
		"\x03\x02\x02\x02\u0851\u0852\x07\xF2\x02\x02\u0852\u0855\x07\x84\x02\x02" +
		"\u0853\u0854\x07\x19\x02\x02\u0854\u0856\x05`1\x02\u0855\u0853\x03\x02" +
		"\x02\x02\u0855\u0856\x03\x02\x02\x02\u0856\u0857\x03\x02\x02\x02\u0857" +
		"\u0858\x07\xDA\x02\x02\u0858\u0859\x07\xEA\x02\x02\u0859\u085A\x07\xCD" +
		"\x02\x02\u085A\u085B\x05\xB0Y\x02\u085B\u085C\x07\xFB\x02\x02\u085C\u0864" +
		"\x05`1\x02\u085D\u085E\x07\x06\x02\x02\u085E\u085F\x05\xB0Y\x02\u085F" +
		"\u0860\x07\xFB\x02\x02\u0860\u0861\x05`1\x02\u0861\u0863\x03\x02\x02\x02" +
		"\u0862\u085D\x03\x02\x02\x02\u0863\u0866\x03\x02\x02\x02\u0864\u0862\x03" +
		"\x02\x02\x02\u0864\u0865\x03\x02\x02\x02\u0865\u0892\x03\x02\x02\x02\u0866" +
		"\u0864\x03\x02\x02\x02\u0867\u0868\x07\xF2\x02\x02\u0868\u086B\x07\x84" +
		"\x02\x02\u0869\u086A\x07\x19\x02\x02\u086A\u086C\x05`1\x02\u086B\u0869" +
		"\x03\x02\x02\x02\u086B\u086C\x03\x02\x02\x02\u086C\u086D\x03\x02\x02\x02" +
		"\u086D\u086E\x07\xDA\x02\x02\u086E\u0892\x07@\x02\x02\u086F\u0870\x07" +
		"\xF2\x02\x02\u0870\u0871\x07\x95\x02\x02\u0871\u0874\x07\x84\x02\x02\u0872" +
		"\u0873\x07\x19\x02\x02\u0873\u0875\x05`1\x02\u0874\u0872\x03\x02\x02\x02" +
		"\u0874\u0875\x03\x02\x02\x02\u0875\u0876\x03\x02\x02\x02\u0876\u0877\x07" +
		"\xDA\x02\x02\u0877\u0883\x07n\x02\x02\u0878\u0879\x07\x04\x02\x02\u0879" +
		"\u087E\x05\xB0Y\x02\u087A\u087B\x07\x06\x02\x02\u087B\u087D\x05\xB0Y\x02" +
		"\u087C\u087A\x03\x02\x02\x02\u087D\u0880\x03\x02\x02\x02\u087E\u087C\x03" +
		"\x02\x02\x02\u087E\u087F\x03\x02\x02\x02\u087F\u0881\x03\x02\x02\x02\u0880" +
		"\u087E\x03\x02\x02\x02\u0881\u0882\x07\x05\x02\x02\u0882\u0884\x03\x02" +
		"\x02\x02\u0883\u0878\x03\x02\x02\x02\u0883\u0884\x03\x02\x02\x02\u0884" +
		"\u0885\x03\x02\x02\x02\u0885\u0886\x07\xEF\x02\x02\u0886\u0887\x07\x04" +
		"\x02\x02\u0887\u088C\x05`1\x02\u0888\u0889\x07\x06\x02\x02\u0889\u088B" +
		"\x05`1\x02\u088A\u0888\x03\x02\x02\x02\u088B\u088E\x03\x02\x02\x02\u088C" +
		"\u088A\x03\x02\x02\x02\u088C\u088D\x03\x02\x02\x02\u088D\u088F\x03\x02" +
		"\x02\x02\u088E\u088C\x03\x02\x02\x02\u088F\u0890\x07\x05\x02\x02\u0890" +
		"\u0892\x03\x02\x02\x02\u0891\u0851\x03\x02\x02\x02\u0891\u0867\x03\x02" +
		"\x02\x02\u0891\u086F\x03\x02\x02\x02\u0892\x89\x03\x02\x02\x02\u0893\u0899" +
		"\x07\xA4\x02\x02\u0894\u089A\x05\xB0Y\x02\u0895\u0896\x07\x04\x02\x02" +
		"\u0896\u0897\x05:\x1E\x02\u0897\u0898\x07\x05\x02\x02\u0898\u089A\x03" +
		"\x02\x02\x02\u0899\u0894\x03\x02\x02\x02\u0899\u0895\x03\x02\x02\x02\u089A" +
		"\x8B\x03\x02\x02\x02\u089B\u089C\x07\x88\x02\x02\u089C\u08A1\x05N(\x02" +
		"\u089D\u089E\x07\x06\x02\x02\u089E\u08A0\x05N(\x02\u089F\u089D\x03\x02" +
		"\x02\x02\u08A0\u08A3\x03\x02\x02\x02\u08A1\u089F\x03\x02\x02\x02\u08A1" +
		"\u08A2\x03\x02\x02\x02\u08A2\u08A5\x03\x02\x02\x02\u08A3\u08A1\x03\x02" +
		"\x02\x02\u08A4\u089B\x03\x02\x02\x02\u08A4\u08A5\x03\x02\x02\x02\u08A5" +
		"\u08A6\x03\x02\x02\x02\u08A6\u08AA\x05\x8EH\x02\u08A7\u08A8\x07\x15\x02" +
		"\x02\u08A8\u08A9\x07\x83\x02\x02\u08A9\u08AB\x05T+\x02\u08AA\u08A7\x03" +
		"\x02\x02\x02\u08AA\u08AB\x03\x02\x02\x02\u08AB\u08AD\x03\x02\x02\x02\u08AC" +
		"\u08AE\t\x0F\x02\x02\u08AD\u08AC\x03\x02\x02\x02\u08AD\u08AE\x03\x02\x02" +
		"\x02\u08AE\u08B4\x03\x02\x02\x02\u08AF\u08B0\x07\xA9\x02\x02\u08B0\u08B1" +
		"\x07\x04\x02\x02\u08B1\u08B2\x05\x92J\x02\u08B2\u08B3\x07\x05\x02\x02" +
		"\u08B3\u08B5\x03\x02\x02\x02\u08B4\u08AF\x03\x02\x02\x02\u08B4\u08B5\x03" +
		"\x02\x02\x02\u08B5\u08BF\x03\x02\x02\x02\u08B6\u08B7\x07\xD3\x02\x02\u08B7" +
		"\u08BC\x05V,\x02\u08B8\u08B9\x07\x06\x02\x02\u08B9\u08BB\x05V,\x02\u08BA" +
		"\u08B8\x03\x02\x02\x02\u08BB\u08BE\x03\x02\x02\x02\u08BC\u08BA\x03\x02" +
		"\x02\x02\u08BC\u08BD\x03\x02\x02\x02\u08BD\u08C0\x03\x02\x02\x02\u08BE" +
		"\u08BC\x03\x02\x02\x02\u08BF\u08B6\x03\x02\x02\x02\u08BF\u08C0\x03\x02" +
		"\x02\x02\u08C0\u08CA\x03\x02\x02\x02\u08C1\u08C2\x07C\x02\x02\u08C2\u08C7" +
		"\x05X-\x02\u08C3\u08C4\x07\x06\x02\x02\u08C4\u08C6\x05X-\x02\u08C5\u08C3" +
		"\x03\x02\x02\x02\u08C6\u08C9\x03\x02\x02\x02\u08C7\u08C5\x03\x02\x02\x02" +
		"\u08C7\u08C8\x03\x02\x02\x02\u08C8\u08CB\x03\x02\x02\x02\u08C9\u08C7\x03" +
		"\x02\x02\x02\u08CA\u08C1\x03\x02\x02\x02\u08CA\u08CB\x03\x02\x02\x02\u08CB" +
		"\x8D\x03\x02\x02\x02\u08CC\u08CD\x07\xB2\x02\x02\u08CD\u08E5\x05\x90I" +
		"\x02\u08CE\u08CF\x07\xC3\x02\x02\u08CF\u08E5\x05\x90I\x02\u08D0\u08D1" +
		"\x07d\x02\x02\u08D1\u08E5\x05\x90I\x02\u08D2\u08D3\x07\xB2\x02\x02\u08D3" +
		"\u08D4\x07!\x02\x02\u08D4\u08D5\x05\x90I\x02\u08D5\u08D6\x07\x19\x02\x02" +
		"\u08D6\u08D7\x05\x90I\x02\u08D7\u08E5\x03\x02\x02\x02\u08D8\u08D9\x07" +
		"\xC3\x02\x02\u08D9\u08DA\x07!\x02\x02\u08DA\u08DB\x05\x90I\x02\u08DB\u08DC" +
		"\x07\x19\x02\x02\u08DC\u08DD\x05\x90I\x02\u08DD\u08E5\x03\x02\x02\x02" +
		"\u08DE\u08DF\x07d\x02\x02\u08DF\u08E0\x07!\x02\x02\u08E0\u08E1\x05\x90" +
		"I\x02\u08E1\u08E2\x07\x19\x02\x02\u08E2\u08E3\x05\x90I\x02\u08E3\u08E5" +
		"\x03\x02\x02\x02\u08E4\u08CC\x03\x02\x02\x02\u08E4\u08CE\x03\x02\x02\x02" +
		"\u08E4\u08D0\x03\x02\x02\x02\u08E4\u08D2\x03\x02\x02\x02\u08E4\u08D8\x03" +
		"\x02\x02\x02\u08E4\u08DE\x03\x02\x02\x02\u08E5\x8F\x03\x02\x02\x02\u08E6" +
		"\u08E7\x07\xE5\x02\x02\u08E7\u08F0\x07\xAD\x02\x02\u08E8\u08E9\x07\xE5" +
		"\x02\x02\u08E9\u08F0\x07W\x02\x02\u08EA\u08EB\x071\x02\x02\u08EB\u08F0" +
		"\x07\xC2\x02\x02\u08EC\u08ED\x05`1\x02\u08ED\u08EE\t\x18\x02\x02\u08EE" +
		"\u08F0\x03\x02\x02\x02\u08EF\u08E6\x03\x02\x02\x02\u08EF\u08E8\x03\x02" +
		"\x02\x02\u08EF\u08EA\x03\x02\x02\x02\u08EF\u08EC\x03\x02\x02\x02\u08F0" +
		"\x91\x03\x02\x02\x02\u08F1\u08F2\bJ\x01\x02\u08F2\u08F4\x05\x94K\x02\u08F3" +
		"\u08F5\x05\x96L\x02\u08F4\u08F3\x03\x02\x02\x02\u08F4\u08F5\x03\x02\x02" +
		"\x02\u08F5\u08FD\x03\x02\x02\x02\u08F6\u08F7\f\x04\x02\x02\u08F7\u08FC" +
		"\x05\x92J\x05\u08F8\u08F9\f\x03\x02\x02\u08F9\u08FA\x07\v\x02\x02\u08FA" +
		"\u08FC\x05\x92J\x04\u08FB\u08F6\x03\x02\x02\x02\u08FB\u08F8\x03\x02\x02" +
		"\x02\u08FC\u08FF\x03\x02\x02\x02\u08FD\u08FB\x03\x02\x02\x02\u08FD\u08FE" +
		"\x03\x02\x02\x02\u08FE\x93\x03\x02\x02\x02\u08FF\u08FD\x03\x02\x02\x02" +
		"\u0900\u091A\x05\xB0Y\x02\u0901\u0902\x07\x04\x02\x02\u0902\u091A\x07" +
		"\x05\x02\x02\u0903\u0904\x07\xAB\x02\x02\u0904\u0905\x07\x04\x02\x02\u0905" +
		"\u090A\x05\x92J\x02\u0906\u0907\x07\x06\x02\x02\u0907\u0909\x05\x92J\x02" +
		"\u0908\u0906\x03\x02\x02\x02\u0909\u090C\x03\x02\x02\x02\u090A\u0908\x03" +
		"\x02\x02\x02\u090A\u090B\x03\x02\x02\x02\u090B\u090D\x03\x02\x02\x02\u090C" +
		"\u090A\x03\x02\x02\x02\u090D\u090E\x07\x05\x02\x02\u090E\u091A\x03\x02" +
		"\x02\x02\u090F\u0910\x07\x04\x02\x02\u0910\u0911\x05\x92J\x02\u0911\u0912" +
		"\x07\x05\x02\x02\u0912\u091A\x03\x02\x02\x02\u0913\u091A\x07\f\x02\x02" +
		"\u0914\u091A\x07\r\x02\x02\u0915\u0916\x07\x0E\x02\x02\u0916\u0917\x05" +
		"\x92J\x02\u0917\u0918\x07\x0F\x02\x02\u0918\u091A\x03\x02\x02\x02\u0919" +
		"\u0900\x03\x02\x02\x02\u0919\u0901\x03\x02\x02\x02\u0919\u0903\x03\x02" +
		"\x02\x02\u0919\u090F\x03\x02\x02\x02\u0919\u0913\x03\x02\x02\x02\u0919" +
		"\u0914\x03\x02\x02\x02\u0919\u0915\x03\x02\x02\x02\u091A\x95\x03\x02\x02" +
		"\x02\u091B\u091D\x07\u0103\x02\x02\u091C\u091E\x07\u0107\x02\x02\u091D" +
		"\u091C\x03\x02\x02\x02\u091D\u091E\x03\x02\x02\x02\u091E\u093A\x03\x02" +
		"\x02\x02\u091F\u0921\x07\u0101\x02\x02\u0920\u0922\x07\u0107\x02\x02\u0921" +
		"\u0920\x03\x02\x02\x02\u0921\u0922\x03\x02\x02\x02\u0922\u093A\x03\x02" +
		"\x02\x02\u0923\u0925\x07\u0107\x02\x02\u0924\u0926\x07\u0107\x02\x02\u0925" +
		"\u0924\x03\x02\x02\x02\u0925\u0926\x03\x02\x02\x02\u0926\u093A\x03\x02" +
		"\x02\x02\u0927\u0928\x07\x10\x02\x02\u0928\u0929\x07\u010B\x02\x02\u0929" +
		"\u092B\x07\x11\x02\x02\u092A\u092C\x07\u0107\x02\x02\u092B\u092A\x03\x02" +
		"\x02\x02\u092B\u092C\x03\x02\x02\x02\u092C\u093A\x03\x02\x02\x02\u092D" +
		"\u092F\x07\x10\x02\x02\u092E\u0930\x07\u010B\x02\x02\u092F\u092E\x03\x02" +
		"\x02\x02\u092F\u0930\x03\x02\x02\x02\u0930\u0931\x03\x02\x02\x02\u0931" +
		"\u0933\x07\x06\x02\x02\u0932\u0934\x07\u010B\x02\x02\u0933\u0932\x03\x02" +
		"\x02\x02\u0933\u0934\x03\x02\x02\x02\u0934\u0935\x03\x02\x02\x02\u0935" +
		"\u0937\x07\x11\x02\x02\u0936\u0938\x07\u0107\x02\x02\u0937\u0936\x03\x02" +
		"\x02\x02\u0937\u0938\x03\x02\x02\x02\u0938\u093A\x03\x02\x02\x02\u0939" +
		"\u091B\x03\x02\x02\x02\u0939\u091F\x03\x02\x02\x02\u0939\u0923\x03\x02" +
		"\x02\x02\u0939\u0927\x03\x02\x02\x02\u0939\u092D\x03\x02\x02\x02\u093A" +
		"\x97\x03\x02\x02\x02\u093B\u093C\x05\xB0Y\x02\u093C\u093D\x07\xFB\x02" +
		"\x02\u093D\u093E\x05`1\x02\u093E\x99\x03\x02\x02\x02\u093F\u0940\x07Y" +
		"\x02\x02\u0940\u0944\t\x19\x02\x02\u0941\u0942\x07\xE3\x02\x02\u0942\u0944" +
		"\t\x1A\x02\x02\u0943\u093F\x03\x02\x02\x02\u0943\u0941\x03\x02\x02\x02" +
		"\u0944\x9B\x03\x02\x02\x02\u0945\u0946\x07u\x02\x02\u0946\u0947\x07{\x02" +
		"\x02\u0947\u094B\x05\x9EP\x02\u0948\u0949\x07\xB3\x02\x02\u0949\u094B" +
		"\t\x1B\x02\x02\u094A\u0945\x03\x02\x02\x02\u094A\u0948\x03\x02\x02\x02" +
		"\u094B\x9D\x03\x02\x02\x02\u094C\u094D\x07\xB3\x02\x02\u094D\u0954\x07" +
		"\xE6\x02\x02\u094E\u094F\x07\xB3\x02\x02\u094F\u0954\x07,\x02\x02\u0950" +
		"\u0951\x07\xB7\x02\x02\u0951\u0954\x07\xB3\x02\x02\u0952\u0954\x07\xCB" +
		"\x02\x02\u0953\u094C\x03\x02\x02\x02\u0953\u094E\x03\x02\x02\x02\u0953" +
		"\u0950\x03\x02\x02\x02\u0953\u0952\x03\x02\x02\x02\u0954\x9F\x03\x02\x02" +
		"\x02\u0955\u095B\x05`1\x02\u0956\u0957\x05\xB0Y\x02\u0957\u0958\x07\x12" +
		"\x02\x02\u0958\u0959\x05`1\x02\u0959\u095B\x03\x02\x02\x02\u095A\u0955" +
		"\x03\x02\x02\x02\u095A\u0956\x03\x02\x02\x02\u095B\xA1\x03\x02\x02\x02" +
		"\u095C\u095D\x05\xB0Y\x02\u095D\u095E\x07\x03\x02\x02\u095E\u095F\x05" +
		"\xB0Y\x02\u095F\u0962\x03\x02\x02\x02\u0960\u0962\x05\xB0Y\x02\u0961\u095C" +
		"\x03\x02\x02\x02\u0961\u0960\x03\x02\x02\x02\u0962\xA3\x03\x02\x02\x02" +
		"\u0963\u0968\x05\xA2R\x02\u0964\u0965\x07\x06\x02\x02\u0965\u0967\x05" +
		"\xA2R\x02\u0966\u0964\x03\x02\x02\x02\u0967\u096A\x03\x02\x02\x02\u0968" +
		"\u0966\x03\x02\x02\x02\u0968\u0969\x03\x02\x02\x02\u0969\xA5\x03\x02\x02" +
		"\x02\u096A\u0968\x03\x02\x02\x02\u096B\u096C\t\x1C\x02\x02\u096C\xA7\x03" +
		"\x02\x02\x02\u096D\u0972\x05\xB0Y\x02\u096E\u096F\x07\x03\x02\x02\u096F" +
		"\u0971\x05\xB0Y\x02\u0970\u096E\x03\x02\x02\x02\u0971\u0974\x03\x02\x02" +
		"\x02\u0972\u0970\x03\x02\x02\x02\u0972\u0973\x03\x02\x02\x02\u0973\xA9" +
		"\x03\x02\x02\x02\u0974\u0972\x03\x02\x02\x02\u0975\u0979\x05\xACW\x02" +
		"\u0976\u0979\x079\x02\x02\u0977\u0979\x075\x02\x02\u0978\u0975\x03\x02" +
		"\x02\x02\u0978\u0976\x03\x02\x02\x02\u0978\u0977\x03\x02\x02\x02\u0979" +
		"\xAB\x03\x02\x02\x02\u097A\u0980\x05\xB0Y\x02\u097B\u097C\x07\xEC\x02" +
		"\x02\u097C\u0980\x05\xB0Y\x02\u097D\u097E\x07\xBE\x02\x02\u097E\u0980" +
		"\x05\xB0Y\x02\u097F\u097A\x03\x02\x02\x02\u097F\u097B\x03\x02\x02\x02" +
		"\u097F\u097D\x03\x02\x02\x02\u0980\xAD\x03\x02\x02\x02\u0981\u0986\x05" +
		"\xB0Y\x02\u0982\u0983\x07\x06\x02\x02\u0983\u0985\x05\xB0Y\x02\u0984\u0982" +
		"\x03\x02\x02\x02\u0985\u0988\x03\x02\x02\x02\u0986\u0984\x03\x02\x02\x02" +
		"\u0986\u0987\x03\x02\x02\x02\u0987\xAF\x03\x02\x02\x02\u0988\u0986\x03" +
		"\x02\x02\x02\u0989\u098F\x07\u010E\x02\x02\u098A\u098F\x07\u0110\x02\x02" +
		"\u098B\u098F\x05\xB4[\x02\u098C\u098F\x07\u0111\x02\x02\u098D\u098F\x07" +
		"\u010F\x02\x02\u098E\u0989\x03\x02\x02\x02\u098E\u098A\x03\x02\x02\x02" +
		"\u098E\u098B\x03\x02\x02\x02\u098E\u098C\x03\x02\x02\x02\u098E\u098D\x03" +
		"\x02\x02\x02\u098F\xB1\x03\x02\x02\x02\u0990\u0992\x07\u0102\x02\x02\u0991" +
		"\u0990\x03\x02\x02\x02\u0991\u0992\x03\x02\x02\x02\u0992\u0993\x03\x02" +
		"\x02\x02\u0993\u099D\x07\u010C\x02\x02\u0994\u0996\x07\u0102\x02\x02\u0995" +
		"\u0994\x03\x02\x02\x02\u0995\u0996\x03\x02\x02\x02\u0996\u0997\x03\x02" +
		"\x02\x02\u0997\u099D\x07\u010D\x02\x02\u0998\u099A\x07\u0102\x02\x02\u0999" +
		"\u0998\x03\x02\x02\x02\u0999\u099A\x03\x02\x02\x02\u099A\u099B\x03\x02" +
		"\x02\x02\u099B\u099D\x07\u010B\x02\x02\u099C\u0991\x03\x02\x02\x02\u099C" +
		"\u0995\x03\x02\x02\x02\u099C\u0999\x03\x02\x02\x02\u099D\xB3\x03\x02\x02" +
		"\x02\u099E\u099F\t\x1D\x02\x02\u099F\xB5\x03\x02\x02\x02\u0146\xB9\xC3" +
		"\xC7\xCB\xCF\xD3\xD7\xE6\xEB\xEF\xF5\xF9\u010E\u0112\u0116\u011A\u0122" +
		"\u0126\u0129\u0130\u0139\u013F\u0143\u0149\u0150\u0159\u0162\u0170\u0179" +
		"\u017F\u0186\u0190\u0197\u019F\u01A7\u01C4\u01C7\u01CA\u01CE\u01D4\u01D9" +
		"\u01E0\u01E5\u01E9\u01F1\u01F7\u01FB\u0209\u0211\u0224\u023D\u0240\u024A" +
		"\u024E\u025B\u0261\u0266\u026A\u0270\u0279\u027F\u0283\u028A\u028E\u0296" +
		"\u029B\u029F\u02A7\u02AF\u02B4\u02B8\u02C2\u02C9\u02CE\u02D2\u02DC\u02DF" +
		"\u02E3\u02E6\u02EE\u02F3\u030B\u0311\u0313\u0319\u031F\u0321\u0329\u032B" +
		"\u0331\u0337\u0339\u0348\u034D\u0354\u0360\u0362\u036A\u036C\u037E\u0381" +
		"\u0385\u0389\u039B\u039E\u03AE\u03B8\u03BD\u03C3\u03C6\u03CF\u03DB\u03DE" +
		"\u03E4\u03EB\u03F0\u03F6\u03FA\u03FE\u0404\u040F\u0418\u0422\u0425\u042A" +
		"\u042C\u0433\u0439\u043B\u043F\u0449\u044F\u0452\u0454\u0460\u0467\u046B" +
		"\u046F\u0473\u047A\u0483\u0486\u048A\u048F\u0493\u049B\u049E\u04A1\u04A8" +
		"\u04B3\u04B6\u04C0\u04C3\u04CE\u04D3\u04DB\u04DE\u04E2\u04EB\u04F4\u04F7" +
		"\u0500\u0503\u0506\u050A\u0515\u0518\u051F\u0522\u0535\u0539\u053D\u0541" +
		"\u0545\u0549\u054B\u0556\u055B\u0564\u0572\u0575\u057E\u0581\u0589\u058C" +
		"\u058F\u0594\u0597\u05A3\u05A6\u05AE\u05B3\u05B7\u05B9\u05BB\u05CA\u05CC" +
		"\u05D7\u05EC\u05F6\u0601\u0605\u0607\u060F\u0620\u0626\u0631\u0638\u063C" +
		"\u0644\u0646\u0653\u065B\u0664\u066A\u0672\u0678\u067C\u0681\u0686\u068C" +
		"\u069A\u069C\u06BA\u06C5\u06CF\u06D2\u06D5\u06DA\u06E1\u06E4\u06ED\u06F0" +
		"\u06F4\u06F7\u06FA\u0709\u070C\u071F\u0723\u072B\u072F\u0748\u074B\u0754" +
		"\u075A\u0760\u0766\u0773\u077C\u0792\u0795\u0798\u07A2\u07A4\u07AD\u07B3" +
		"\u07B5\u07BD\u07C7\u07CD\u07DB\u07E4\u07EB\u07F0\u07F7\u0801\u0806\u080D" +
		"\u0827\u082C\u082E\u0835\u0839\u0840\u0844\u0855\u0864\u086B\u0874\u087E" +
		"\u0883\u088C\u0891\u0899\u08A1\u08A4\u08AA\u08AD\u08B4\u08BC\u08BF\u08C7" +
		"\u08CA\u08E4\u08EF\u08F4\u08FB\u08FD\u090A\u0919\u091D\u0921\u0925\u092B" +
		"\u092F\u0933\u0937\u0939\u0943\u094A\u0953\u095A\u0961\u0968\u0972\u0978" +
		"\u097F\u0986\u098E\u0991\u0995\u0999\u099C";
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
	public singleStatement(): SingleStatementContext | undefined {
		return this.tryGetRuleContext(0, SingleStatementContext);
	}
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
	public _schema!: IdentifierContext;
	public _catalog!: IdentifierContext;
	public USE(): TerminalNode { return this.getToken(TrinoSqlParser.USE, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
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
	public CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.CREATE, 0); }
	public SCHEMA(): TerminalNode { return this.getToken(TrinoSqlParser.SCHEMA, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.EXISTS, 0); }
	public AUTHORIZATION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.AUTHORIZATION, 0); }
	public principal(): PrincipalContext | undefined {
		return this.tryGetRuleContext(0, PrincipalContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WITH, 0); }
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
	public DROP(): TerminalNode { return this.getToken(TrinoSqlParser.DROP, 0); }
	public SCHEMA(): TerminalNode { return this.getToken(TrinoSqlParser.SCHEMA, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.EXISTS, 0); }
	public CASCADE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.CASCADE, 0); }
	public RESTRICT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.RESTRICT, 0); }
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
	public ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.ALTER, 0); }
	public SCHEMA(): TerminalNode { return this.getToken(TrinoSqlParser.SCHEMA, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public RENAME(): TerminalNode { return this.getToken(TrinoSqlParser.RENAME, 0); }
	public TO(): TerminalNode { return this.getToken(TrinoSqlParser.TO, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
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
	public ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.ALTER, 0); }
	public SCHEMA(): TerminalNode { return this.getToken(TrinoSqlParser.SCHEMA, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public SET(): TerminalNode { return this.getToken(TrinoSqlParser.SET, 0); }
	public AUTHORIZATION(): TerminalNode { return this.getToken(TrinoSqlParser.AUTHORIZATION, 0); }
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
	public CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.CREATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public AS(): TerminalNode { return this.getToken(TrinoSqlParser.AS, 0); }
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.EXISTS, 0); }
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.COMMENT, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public WITH(): TerminalNode[];
	public WITH(i: number): TerminalNode;
	public WITH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.WITH);
		} else {
			return this.getToken(TrinoSqlParser.WITH, i);
		}
	}
	public properties(): PropertiesContext | undefined {
		return this.tryGetRuleContext(0, PropertiesContext);
	}
	public DATA(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DATA, 0); }
	public NO(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NO, 0); }
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
	public CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.CREATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.EXISTS, 0); }
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.COMMENT, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WITH, 0); }
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
	public DROP(): TerminalNode { return this.getToken(TrinoSqlParser.DROP, 0); }
	public TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.EXISTS, 0); }
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
	public INSERT(): TerminalNode { return this.getToken(TrinoSqlParser.INSERT, 0); }
	public INTO(): TerminalNode { return this.getToken(TrinoSqlParser.INTO, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
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
	public DELETE(): TerminalNode { return this.getToken(TrinoSqlParser.DELETE, 0); }
	public FROM(): TerminalNode { return this.getToken(TrinoSqlParser.FROM, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WHERE, 0); }
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
	public TRUNCATE(): TerminalNode { return this.getToken(TrinoSqlParser.TRUNCATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public _from!: QualifiedNameContext;
	public _to!: QualifiedNameContext;
	public ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.TABLE, 0); }
	public RENAME(): TerminalNode { return this.getToken(TrinoSqlParser.RENAME, 0); }
	public TO(): TerminalNode { return this.getToken(TrinoSqlParser.TO, 0); }
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.EXISTS, 0); }
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
	public COMMENT(): TerminalNode { return this.getToken(TrinoSqlParser.COMMENT, 0); }
	public ON(): TerminalNode { return this.getToken(TrinoSqlParser.ON, 0); }
	public TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public IS(): TerminalNode { return this.getToken(TrinoSqlParser.IS, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public NULL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NULL, 0); }
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
	public COMMENT(): TerminalNode { return this.getToken(TrinoSqlParser.COMMENT, 0); }
	public ON(): TerminalNode { return this.getToken(TrinoSqlParser.ON, 0); }
	public COLUMN(): TerminalNode { return this.getToken(TrinoSqlParser.COLUMN, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public IS(): TerminalNode { return this.getToken(TrinoSqlParser.IS, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public NULL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NULL, 0); }
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
	public _tableName!: QualifiedNameContext;
	public _from!: IdentifierContext;
	public _to!: IdentifierContext;
	public ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.TABLE, 0); }
	public RENAME(): TerminalNode { return this.getToken(TrinoSqlParser.RENAME, 0); }
	public COLUMN(): TerminalNode { return this.getToken(TrinoSqlParser.COLUMN, 0); }
	public TO(): TerminalNode { return this.getToken(TrinoSqlParser.TO, 0); }
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
	public IF(): TerminalNode[];
	public IF(i: number): TerminalNode;
	public IF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.IF);
		} else {
			return this.getToken(TrinoSqlParser.IF, i);
		}
	}
	public EXISTS(): TerminalNode[];
	public EXISTS(i: number): TerminalNode;
	public EXISTS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.EXISTS);
		} else {
			return this.getToken(TrinoSqlParser.EXISTS, i);
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
	public _tableName!: QualifiedNameContext;
	public _column!: QualifiedNameContext;
	public ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.TABLE, 0); }
	public DROP(): TerminalNode { return this.getToken(TrinoSqlParser.DROP, 0); }
	public COLUMN(): TerminalNode { return this.getToken(TrinoSqlParser.COLUMN, 0); }
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public IF(): TerminalNode[];
	public IF(i: number): TerminalNode;
	public IF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.IF);
		} else {
			return this.getToken(TrinoSqlParser.IF, i);
		}
	}
	public EXISTS(): TerminalNode[];
	public EXISTS(i: number): TerminalNode;
	public EXISTS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.EXISTS);
		} else {
			return this.getToken(TrinoSqlParser.EXISTS, i);
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
	public _tableName!: QualifiedNameContext;
	public _column!: ColumnDefinitionContext;
	public ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.TABLE, 0); }
	public ADD(): TerminalNode { return this.getToken(TrinoSqlParser.ADD, 0); }
	public COLUMN(): TerminalNode { return this.getToken(TrinoSqlParser.COLUMN, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public columnDefinition(): ColumnDefinitionContext {
		return this.getRuleContext(0, ColumnDefinitionContext);
	}
	public IF(): TerminalNode[];
	public IF(i: number): TerminalNode;
	public IF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.IF);
		} else {
			return this.getToken(TrinoSqlParser.IF, i);
		}
	}
	public EXISTS(): TerminalNode[];
	public EXISTS(i: number): TerminalNode;
	public EXISTS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.EXISTS);
		} else {
			return this.getToken(TrinoSqlParser.EXISTS, i);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NOT, 0); }
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
	public _tableName!: QualifiedNameContext;
	public ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.TABLE, 0); }
	public SET(): TerminalNode { return this.getToken(TrinoSqlParser.SET, 0); }
	public AUTHORIZATION(): TerminalNode { return this.getToken(TrinoSqlParser.AUTHORIZATION, 0); }
	public principal(): PrincipalContext {
		return this.getRuleContext(0, PrincipalContext);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public _tableName!: QualifiedNameContext;
	public ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.TABLE, 0); }
	public SET(): TerminalNode { return this.getToken(TrinoSqlParser.SET, 0); }
	public PROPERTIES(): TerminalNode { return this.getToken(TrinoSqlParser.PROPERTIES, 0); }
	public propertyAssignments(): PropertyAssignmentsContext {
		return this.getRuleContext(0, PropertyAssignmentsContext);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public _tableName!: QualifiedNameContext;
	public _procedureName!: IdentifierContext;
	public _where!: BooleanExpressionContext;
	public ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.TABLE, 0); }
	public EXECUTE(): TerminalNode { return this.getToken(TrinoSqlParser.EXECUTE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WHERE, 0); }
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
	public ANALYZE(): TerminalNode { return this.getToken(TrinoSqlParser.ANALYZE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WITH, 0); }
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
	public CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.CREATE, 0); }
	public MATERIALIZED(): TerminalNode { return this.getToken(TrinoSqlParser.MATERIALIZED, 0); }
	public VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public AS(): TerminalNode { return this.getToken(TrinoSqlParser.AS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.OR, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.REPLACE, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.EXISTS, 0); }
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.COMMENT, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WITH, 0); }
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
	public CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.CREATE, 0); }
	public VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public AS(): TerminalNode { return this.getToken(TrinoSqlParser.AS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.OR, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.REPLACE, 0); }
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.COMMENT, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public SECURITY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SECURITY, 0); }
	public DEFINER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DEFINER, 0); }
	public INVOKER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.INVOKER, 0); }
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
	public REFRESH(): TerminalNode { return this.getToken(TrinoSqlParser.REFRESH, 0); }
	public MATERIALIZED(): TerminalNode { return this.getToken(TrinoSqlParser.MATERIALIZED, 0); }
	public VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public DROP(): TerminalNode { return this.getToken(TrinoSqlParser.DROP, 0); }
	public MATERIALIZED(): TerminalNode { return this.getToken(TrinoSqlParser.MATERIALIZED, 0); }
	public VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.EXISTS, 0); }
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
	public _from!: QualifiedNameContext;
	public _to!: QualifiedNameContext;
	public ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.ALTER, 0); }
	public MATERIALIZED(): TerminalNode { return this.getToken(TrinoSqlParser.MATERIALIZED, 0); }
	public VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.VIEW, 0); }
	public RENAME(): TerminalNode { return this.getToken(TrinoSqlParser.RENAME, 0); }
	public TO(): TerminalNode { return this.getToken(TrinoSqlParser.TO, 0); }
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.EXISTS, 0); }
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
	public ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.ALTER, 0); }
	public MATERIALIZED(): TerminalNode { return this.getToken(TrinoSqlParser.MATERIALIZED, 0); }
	public VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public SET(): TerminalNode { return this.getToken(TrinoSqlParser.SET, 0); }
	public PROPERTIES(): TerminalNode { return this.getToken(TrinoSqlParser.PROPERTIES, 0); }
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
	public DROP(): TerminalNode { return this.getToken(TrinoSqlParser.DROP, 0); }
	public VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.EXISTS, 0); }
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
	public _from!: QualifiedNameContext;
	public _to!: QualifiedNameContext;
	public ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.ALTER, 0); }
	public VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.VIEW, 0); }
	public RENAME(): TerminalNode { return this.getToken(TrinoSqlParser.RENAME, 0); }
	public TO(): TerminalNode { return this.getToken(TrinoSqlParser.TO, 0); }
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
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
	public _from!: QualifiedNameContext;
	public ALTER(): TerminalNode { return this.getToken(TrinoSqlParser.ALTER, 0); }
	public VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.VIEW, 0); }
	public SET(): TerminalNode { return this.getToken(TrinoSqlParser.SET, 0); }
	public AUTHORIZATION(): TerminalNode { return this.getToken(TrinoSqlParser.AUTHORIZATION, 0); }
	public principal(): PrincipalContext {
		return this.getRuleContext(0, PrincipalContext);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public CALL(): TerminalNode { return this.getToken(TrinoSqlParser.CALL, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public _catalog!: IdentifierContext;
	public CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.CREATE, 0); }
	public ROLE(): TerminalNode { return this.getToken(TrinoSqlParser.ROLE, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WITH, 0); }
	public ADMIN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ADMIN, 0); }
	public grantor(): GrantorContext | undefined {
		return this.tryGetRuleContext(0, GrantorContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IN, 0); }
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
	public DROP(): TerminalNode { return this.getToken(TrinoSqlParser.DROP, 0); }
	public ROLE(): TerminalNode { return this.getToken(TrinoSqlParser.ROLE, 0); }
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
	public _catalog!: IdentifierContext;
	public GRANT(): TerminalNode { return this.getToken(TrinoSqlParser.GRANT, 0); }
	public roles(): RolesContext {
		return this.getRuleContext(0, RolesContext);
	}
	public TO(): TerminalNode { return this.getToken(TrinoSqlParser.TO, 0); }
	public principal(): PrincipalContext[];
	public principal(i: number): PrincipalContext;
	public principal(i?: number): PrincipalContext | PrincipalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrincipalContext);
		} else {
			return this.getRuleContext(i, PrincipalContext);
		}
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WITH, 0); }
	public ADMIN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ADMIN, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.OPTION, 0); }
	public GRANTED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.GRANTED, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.BY, 0); }
	public grantor(): GrantorContext | undefined {
		return this.tryGetRuleContext(0, GrantorContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IN, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
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
	public _catalog!: IdentifierContext;
	public REVOKE(): TerminalNode { return this.getToken(TrinoSqlParser.REVOKE, 0); }
	public roles(): RolesContext {
		return this.getRuleContext(0, RolesContext);
	}
	public FROM(): TerminalNode { return this.getToken(TrinoSqlParser.FROM, 0); }
	public principal(): PrincipalContext[];
	public principal(i: number): PrincipalContext;
	public principal(i?: number): PrincipalContext | PrincipalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrincipalContext);
		} else {
			return this.getRuleContext(i, PrincipalContext);
		}
	}
	public ADMIN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ADMIN, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.OPTION, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FOR, 0); }
	public GRANTED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.GRANTED, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.BY, 0); }
	public grantor(): GrantorContext | undefined {
		return this.tryGetRuleContext(0, GrantorContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IN, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
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
	public _catalog!: IdentifierContext;
	public SET(): TerminalNode { return this.getToken(TrinoSqlParser.SET, 0); }
	public ROLE(): TerminalNode { return this.getToken(TrinoSqlParser.ROLE, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ALL, 0); }
	public NONE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NONE, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IN, 0); }
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
	public GRANT(): TerminalNode[];
	public GRANT(i: number): TerminalNode;
	public GRANT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.GRANT);
		} else {
			return this.getToken(TrinoSqlParser.GRANT, i);
		}
	}
	public ON(): TerminalNode { return this.getToken(TrinoSqlParser.ON, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public TO(): TerminalNode { return this.getToken(TrinoSqlParser.TO, 0); }
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
	public ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ALL, 0); }
	public PRIVILEGES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PRIVILEGES, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WITH, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.OPTION, 0); }
	public SCHEMA(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SCHEMA, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TABLE, 0); }
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
	public DENY(): TerminalNode { return this.getToken(TrinoSqlParser.DENY, 0); }
	public ON(): TerminalNode { return this.getToken(TrinoSqlParser.ON, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public TO(): TerminalNode { return this.getToken(TrinoSqlParser.TO, 0); }
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
	public ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ALL, 0); }
	public PRIVILEGES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PRIVILEGES, 0); }
	public SCHEMA(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SCHEMA, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TABLE, 0); }
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
	public REVOKE(): TerminalNode { return this.getToken(TrinoSqlParser.REVOKE, 0); }
	public ON(): TerminalNode { return this.getToken(TrinoSqlParser.ON, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public FROM(): TerminalNode { return this.getToken(TrinoSqlParser.FROM, 0); }
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
	public ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ALL, 0); }
	public PRIVILEGES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PRIVILEGES, 0); }
	public GRANT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.GRANT, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.OPTION, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FOR, 0); }
	public SCHEMA(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SCHEMA, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TABLE, 0); }
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
	public SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.SHOW, 0); }
	public GRANTS(): TerminalNode { return this.getToken(TrinoSqlParser.GRANTS, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ON, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TABLE, 0); }
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
	public EXPLAIN(): TerminalNode { return this.getToken(TrinoSqlParser.EXPLAIN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public ANALYZE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ANALYZE, 0); }
	public VERBOSE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.VERBOSE, 0); }
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
	public SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.SHOW, 0); }
	public CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.CREATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.SHOW, 0); }
	public CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.CREATE, 0); }
	public SCHEMA(): TerminalNode { return this.getToken(TrinoSqlParser.SCHEMA, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.SHOW, 0); }
	public CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.CREATE, 0); }
	public VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.SHOW, 0); }
	public CREATE(): TerminalNode { return this.getToken(TrinoSqlParser.CREATE, 0); }
	public MATERIALIZED(): TerminalNode { return this.getToken(TrinoSqlParser.MATERIALIZED, 0); }
	public VIEW(): TerminalNode { return this.getToken(TrinoSqlParser.VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.SHOW, 0); }
	public TABLES(): TerminalNode { return this.getToken(TrinoSqlParser.TABLES, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LIKE, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FROM, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IN, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public ESCAPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ESCAPE, 0); }
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
	public SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.SHOW, 0); }
	public SCHEMAS(): TerminalNode { return this.getToken(TrinoSqlParser.SCHEMAS, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LIKE, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FROM, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IN, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public ESCAPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ESCAPE, 0); }
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
	public SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.SHOW, 0); }
	public CATALOGS(): TerminalNode { return this.getToken(TrinoSqlParser.CATALOGS, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LIKE, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public ESCAPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ESCAPE, 0); }
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
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SHOW, 0); }
	public COLUMNS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.COLUMNS, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FROM, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IN, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LIKE, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public ESCAPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ESCAPE, 0); }
	public DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DESCRIBE, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DESC, 0); }
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
	public SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.SHOW, 0); }
	public STATS(): TerminalNode { return this.getToken(TrinoSqlParser.STATS, 0); }
	public FOR(): TerminalNode { return this.getToken(TrinoSqlParser.FOR, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.SHOW, 0); }
	public STATS(): TerminalNode { return this.getToken(TrinoSqlParser.STATS, 0); }
	public FOR(): TerminalNode { return this.getToken(TrinoSqlParser.FOR, 0); }
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
	public SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.SHOW, 0); }
	public ROLES(): TerminalNode { return this.getToken(TrinoSqlParser.ROLES, 0); }
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.CURRENT, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FROM, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IN, 0); }
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
	public SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.SHOW, 0); }
	public ROLE(): TerminalNode { return this.getToken(TrinoSqlParser.ROLE, 0); }
	public GRANTS(): TerminalNode { return this.getToken(TrinoSqlParser.GRANTS, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FROM, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IN, 0); }
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
	public SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.SHOW, 0); }
	public FUNCTIONS(): TerminalNode { return this.getToken(TrinoSqlParser.FUNCTIONS, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LIKE, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public ESCAPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ESCAPE, 0); }
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
	public SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.SHOW, 0); }
	public SESSION(): TerminalNode { return this.getToken(TrinoSqlParser.SESSION, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LIKE, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public ESCAPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ESCAPE, 0); }
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
	public SET(): TerminalNode { return this.getToken(TrinoSqlParser.SET, 0); }
	public SESSION(): TerminalNode { return this.getToken(TrinoSqlParser.SESSION, 0); }
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
	public RESET(): TerminalNode { return this.getToken(TrinoSqlParser.RESET, 0); }
	public SESSION(): TerminalNode { return this.getToken(TrinoSqlParser.SESSION, 0); }
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
	public START(): TerminalNode { return this.getToken(TrinoSqlParser.START, 0); }
	public TRANSACTION(): TerminalNode { return this.getToken(TrinoSqlParser.TRANSACTION, 0); }
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
	public COMMIT(): TerminalNode { return this.getToken(TrinoSqlParser.COMMIT, 0); }
	public WORK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WORK, 0); }
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
	public ROLLBACK(): TerminalNode { return this.getToken(TrinoSqlParser.ROLLBACK, 0); }
	public WORK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WORK, 0); }
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
	public PREPARE(): TerminalNode { return this.getToken(TrinoSqlParser.PREPARE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public FROM(): TerminalNode { return this.getToken(TrinoSqlParser.FROM, 0); }
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
	public DEALLOCATE(): TerminalNode { return this.getToken(TrinoSqlParser.DEALLOCATE, 0); }
	public PREPARE(): TerminalNode { return this.getToken(TrinoSqlParser.PREPARE, 0); }
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
	public EXECUTE(): TerminalNode { return this.getToken(TrinoSqlParser.EXECUTE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public USING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.USING, 0); }
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
	public DESCRIBE(): TerminalNode { return this.getToken(TrinoSqlParser.DESCRIBE, 0); }
	public INPUT(): TerminalNode { return this.getToken(TrinoSqlParser.INPUT, 0); }
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
	public DESCRIBE(): TerminalNode { return this.getToken(TrinoSqlParser.DESCRIBE, 0); }
	public OUTPUT(): TerminalNode { return this.getToken(TrinoSqlParser.OUTPUT, 0); }
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
	public SET(): TerminalNode { return this.getToken(TrinoSqlParser.SET, 0); }
	public PATH(): TerminalNode { return this.getToken(TrinoSqlParser.PATH, 0); }
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
	public SET(): TerminalNode { return this.getToken(TrinoSqlParser.SET, 0); }
	public TIME(): TerminalNode { return this.getToken(TrinoSqlParser.TIME, 0); }
	public ZONE(): TerminalNode { return this.getToken(TrinoSqlParser.ZONE, 0); }
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LOCAL, 0); }
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
	public UPDATE(): TerminalNode { return this.getToken(TrinoSqlParser.UPDATE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public SET(): TerminalNode { return this.getToken(TrinoSqlParser.SET, 0); }
	public updateAssignment(): UpdateAssignmentContext[];
	public updateAssignment(i: number): UpdateAssignmentContext;
	public updateAssignment(i?: number): UpdateAssignmentContext | UpdateAssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UpdateAssignmentContext);
		} else {
			return this.getRuleContext(i, UpdateAssignmentContext);
		}
	}
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WHERE, 0); }
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
	public MERGE(): TerminalNode { return this.getToken(TrinoSqlParser.MERGE, 0); }
	public INTO(): TerminalNode { return this.getToken(TrinoSqlParser.INTO, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public USING(): TerminalNode { return this.getToken(TrinoSqlParser.USING, 0); }
	public relation(): RelationContext {
		return this.getRuleContext(0, RelationContext);
	}
	public ON(): TerminalNode { return this.getToken(TrinoSqlParser.ON, 0); }
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
	public AS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.AS, 0); }
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
	public SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.SHOW, 0); }
	public COMMENT(): TerminalNode { return this.getToken(TrinoSqlParser.COMMENT, 0); }
	public ON(): TerminalNode { return this.getToken(TrinoSqlParser.ON, 0); }
	public TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public SHOW(): TerminalNode { return this.getToken(TrinoSqlParser.SHOW, 0); }
	public COMMENT(): TerminalNode { return this.getToken(TrinoSqlParser.COMMENT, 0); }
	public ON(): TerminalNode { return this.getToken(TrinoSqlParser.ON, 0); }
	public COLUMN(): TerminalNode { return this.getToken(TrinoSqlParser.COLUMN, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public WITH(): TerminalNode { return this.getToken(TrinoSqlParser.WITH, 0); }
	public namedQuery(): NamedQueryContext[];
	public namedQuery(i: number): NamedQueryContext;
	public namedQuery(i?: number): NamedQueryContext | NamedQueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedQueryContext);
		} else {
			return this.getRuleContext(i, NamedQueryContext);
		}
	}
	public RECURSIVE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.RECURSIVE, 0); }
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NOT, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NULL, 0); }
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.COMMENT, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WITH, 0); }
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
	public LIKE(): TerminalNode { return this.getToken(TrinoSqlParser.LIKE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public PROPERTIES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PROPERTIES, 0); }
	public INCLUDING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.INCLUDING, 0); }
	public EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.EXCLUDING, 0); }
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
	public DEFAULT(): TerminalNode { return this.getToken(TrinoSqlParser.DEFAULT, 0); }
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
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ORDER, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.BY, 0); }
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public OFFSET(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.OFFSET, 0); }
	public rowCount(): RowCountContext[];
	public rowCount(i: number): RowCountContext;
	public rowCount(i?: number): RowCountContext | RowCountContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowCountContext);
		} else {
			return this.getRuleContext(i, RowCountContext);
		}
	}
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LIMIT, 0); }
	public FETCH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FETCH, 0); }
	public limitRowCount(): LimitRowCountContext | undefined {
		return this.tryGetRuleContext(0, LimitRowCountContext);
	}
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FIRST, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NEXT, 0); }
	public ROW(): TerminalNode[];
	public ROW(i: number): TerminalNode;
	public ROW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.ROW);
		} else {
			return this.getToken(TrinoSqlParser.ROW, i);
		}
	}
	public ROWS(): TerminalNode[];
	public ROWS(i: number): TerminalNode;
	public ROWS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.ROWS);
		} else {
			return this.getToken(TrinoSqlParser.ROWS, i);
		}
	}
	public ONLY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ONLY, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WITH, 0); }
	public TIES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TIES, 0); }
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
	public ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ALL, 0); }
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
	public INTERSECT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.INTERSECT, 0); }
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public UNION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.UNION, 0); }
	public EXCEPT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.EXCEPT, 0); }
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
	public TABLE(): TerminalNode { return this.getToken(TrinoSqlParser.TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public VALUES(): TerminalNode { return this.getToken(TrinoSqlParser.VALUES, 0); }
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NULLS, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DESC, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FIRST, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LAST, 0); }
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
	public SELECT(): TerminalNode { return this.getToken(TrinoSqlParser.SELECT, 0); }
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
	public FROM(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FROM, 0); }
	public relation(): RelationContext[];
	public relation(i: number): RelationContext;
	public relation(i?: number): RelationContext | RelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationContext);
		} else {
			return this.getRuleContext(i, RelationContext);
		}
	}
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WHERE, 0); }
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.GROUP, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.BY, 0); }
	public groupBy(): GroupByContext | undefined {
		return this.tryGetRuleContext(0, GroupByContext);
	}
	public HAVING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.HAVING, 0); }
	public WINDOW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WINDOW, 0); }
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
	public ROLLUP(): TerminalNode { return this.getToken(TrinoSqlParser.ROLLUP, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
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
	public CUBE(): TerminalNode { return this.getToken(TrinoSqlParser.CUBE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
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
	public GROUPING(): TerminalNode { return this.getToken(TrinoSqlParser.GROUPING, 0); }
	public SETS(): TerminalNode { return this.getToken(TrinoSqlParser.SETS, 0); }
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


export class WindowDefinitionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public AS(): TerminalNode { return this.getToken(TrinoSqlParser.AS, 0); }
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
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PARTITION, 0); }
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.BY);
		} else {
			return this.getToken(TrinoSqlParser.BY, i);
		}
	}
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ORDER, 0); }
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
	public AS(): TerminalNode { return this.getToken(TrinoSqlParser.AS, 0); }
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
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DISTINCT, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ALL, 0); }
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.AS, 0); }
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
	public AS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.AS, 0); }
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
	public CROSS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.CROSS, 0); }
	public JOIN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.JOIN, 0); }
	public joinType(): JoinTypeContext | undefined {
		return this.tryGetRuleContext(0, JoinTypeContext);
	}
	public joinCriteria(): JoinCriteriaContext | undefined {
		return this.tryGetRuleContext(0, JoinCriteriaContext);
	}
	public NATURAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NATURAL, 0); }
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
	public INNER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.INNER, 0); }
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LEFT, 0); }
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.OUTER, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.RIGHT, 0); }
	public FULL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FULL, 0); }
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
	public ON(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ON, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public USING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.USING, 0); }
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
	public TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TABLESAMPLE, 0); }
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
	public BERNOULLI(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.BERNOULLI, 0); }
	public SYSTEM(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SYSTEM, 0); }
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
	public MATCH_RECOGNIZE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MATCH_RECOGNIZE, 0); }
	public PATTERN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PATTERN, 0); }
	public rowPattern(): RowPatternContext | undefined {
		return this.tryGetRuleContext(0, RowPatternContext);
	}
	public DEFINE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DEFINE, 0); }
	public variableDefinition(): VariableDefinitionContext[];
	public variableDefinition(i: number): VariableDefinitionContext;
	public variableDefinition(i?: number): VariableDefinitionContext | VariableDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDefinitionContext);
		} else {
			return this.getRuleContext(i, VariableDefinitionContext);
		}
	}
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PARTITION, 0); }
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.BY);
		} else {
			return this.getToken(TrinoSqlParser.BY, i);
		}
	}
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ORDER, 0); }
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public MEASURES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MEASURES, 0); }
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
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.AFTER, 0); }
	public MATCH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MATCH, 0); }
	public skipTo(): SkipToContext | undefined {
		return this.tryGetRuleContext(0, SkipToContext);
	}
	public SUBSET(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SUBSET, 0); }
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
	public INITIAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.INITIAL, 0); }
	public SEEK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SEEK, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.AS, 0); }
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
	public AS(): TerminalNode { return this.getToken(TrinoSqlParser.AS, 0); }
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
	public ONE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ONE, 0); }
	public ROW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ROW, 0); }
	public PER(): TerminalNode { return this.getToken(TrinoSqlParser.PER, 0); }
	public MATCH(): TerminalNode { return this.getToken(TrinoSqlParser.MATCH, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ALL, 0); }
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ROWS, 0); }
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
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SHOW, 0); }
	public EMPTY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.EMPTY, 0); }
	public MATCHES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MATCHES, 0); }
	public OMIT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.OMIT, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WITH, 0); }
	public UNMATCHED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.UNMATCHED, 0); }
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ROWS, 0); }
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
	public TO(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TO, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NEXT, 0); }
	public ROW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ROW, 0); }
	public PAST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PAST, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LAST, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FIRST, 0); }
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
	public AS(): TerminalNode { return this.getToken(TrinoSqlParser.AS, 0); }
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
	public AS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.AS, 0); }
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
export class TableNameContext extends RelationPrimaryContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
	public UNNEST(): TerminalNode { return this.getToken(TrinoSqlParser.UNNEST, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WITH, 0); }
	public ORDINALITY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ORDINALITY, 0); }
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
	public LATERAL(): TerminalNode { return this.getToken(TrinoSqlParser.LATERAL, 0); }
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
	public NOT(): TerminalNode { return this.getToken(TrinoSqlParser.NOT, 0); }
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
	public AND(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.OR, 0); }
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
	public BETWEEN(): TerminalNode { return this.getToken(TrinoSqlParser.BETWEEN, 0); }
	public AND(): TerminalNode { return this.getToken(TrinoSqlParser.AND, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NOT, 0); }
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
	public IN(): TerminalNode { return this.getToken(TrinoSqlParser.IN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NOT, 0); }
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
	public IN(): TerminalNode { return this.getToken(TrinoSqlParser.IN, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NOT, 0); }
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
	public LIKE(): TerminalNode { return this.getToken(TrinoSqlParser.LIKE, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NOT, 0); }
	public ESCAPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ESCAPE, 0); }
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
	public IS(): TerminalNode { return this.getToken(TrinoSqlParser.IS, 0); }
	public NULL(): TerminalNode { return this.getToken(TrinoSqlParser.NULL, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NOT, 0); }
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
	public IS(): TerminalNode { return this.getToken(TrinoSqlParser.IS, 0); }
	public DISTINCT(): TerminalNode { return this.getToken(TrinoSqlParser.DISTINCT, 0); }
	public FROM(): TerminalNode { return this.getToken(TrinoSqlParser.FROM, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NOT, 0); }
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
	public AT(): TerminalNode { return this.getToken(TrinoSqlParser.AT, 0); }
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
	public NULL(): TerminalNode { return this.getToken(TrinoSqlParser.NULL, 0); }
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
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DOUBLE, 0); }
	public PRECISION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PRECISION, 0); }
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
	public POSITION(): TerminalNode { return this.getToken(TrinoSqlParser.POSITION, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public IN(): TerminalNode { return this.getToken(TrinoSqlParser.IN, 0); }
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
	public ROW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ROW, 0); }
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ORDER, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.BY, 0); }
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
	public EXISTS(): TerminalNode { return this.getToken(TrinoSqlParser.EXISTS, 0); }
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
	public CASE(): TerminalNode { return this.getToken(TrinoSqlParser.CASE, 0); }
	public END(): TerminalNode { return this.getToken(TrinoSqlParser.END, 0); }
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
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ELSE, 0); }
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
	public CASE(): TerminalNode { return this.getToken(TrinoSqlParser.CASE, 0); }
	public END(): TerminalNode { return this.getToken(TrinoSqlParser.END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ELSE, 0); }
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
	public CAST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.CAST, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public AS(): TerminalNode { return this.getToken(TrinoSqlParser.AS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public TRY_CAST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TRY_CAST, 0); }
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
	public ARRAY(): TerminalNode { return this.getToken(TrinoSqlParser.ARRAY, 0); }
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
	public CURRENT_DATE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.CURRENT_DATE, 0); }
	public CURRENT_TIME(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.CURRENT_TIME, 0); }
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.INTEGER_VALUE, 0); }
	public CURRENT_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.CURRENT_TIMESTAMP, 0); }
	public LOCALTIME(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LOCALTIME, 0); }
	public LOCALTIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LOCALTIMESTAMP, 0); }
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
	public CURRENT_USER(): TerminalNode { return this.getToken(TrinoSqlParser.CURRENT_USER, 0); }
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
	public CURRENT_CATALOG(): TerminalNode { return this.getToken(TrinoSqlParser.CURRENT_CATALOG, 0); }
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
	public CURRENT_SCHEMA(): TerminalNode { return this.getToken(TrinoSqlParser.CURRENT_SCHEMA, 0); }
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
	public CURRENT_PATH(): TerminalNode { return this.getToken(TrinoSqlParser.CURRENT_PATH, 0); }
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
	public SUBSTRING(): TerminalNode { return this.getToken(TrinoSqlParser.SUBSTRING, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public FROM(): TerminalNode { return this.getToken(TrinoSqlParser.FROM, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FOR, 0); }
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
	public NORMALIZE(): TerminalNode { return this.getToken(TrinoSqlParser.NORMALIZE, 0); }
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
	public EXTRACT(): TerminalNode { return this.getToken(TrinoSqlParser.EXTRACT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public FROM(): TerminalNode { return this.getToken(TrinoSqlParser.FROM, 0); }
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
	public GROUPING(): TerminalNode { return this.getToken(TrinoSqlParser.GROUPING, 0); }
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
	public RUNNING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.RUNNING, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FINAL, 0); }
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
	public IGNORE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IGNORE, 0); }
	public NULLS(): TerminalNode { return this.getToken(TrinoSqlParser.NULLS, 0); }
	public RESPECT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.RESPECT, 0); }
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
	public UESCAPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.UESCAPE, 0); }
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
	public TIME(): TerminalNode { return this.getToken(TrinoSqlParser.TIME, 0); }
	public ZONE(): TerminalNode { return this.getToken(TrinoSqlParser.ZONE, 0); }
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
	public TIME(): TerminalNode { return this.getToken(TrinoSqlParser.TIME, 0); }
	public ZONE(): TerminalNode { return this.getToken(TrinoSqlParser.ZONE, 0); }
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
	public ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ALL, 0); }
	public SOME(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SOME, 0); }
	public ANY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ANY, 0); }
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
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FALSE, 0); }
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
	public INTERVAL(): TerminalNode { return this.getToken(TrinoSqlParser.INTERVAL, 0); }
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
	public TO(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TO, 0); }
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
	public YEAR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.YEAR, 0); }
	public MONTH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MONTH, 0); }
	public DAY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DAY, 0); }
	public HOUR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.HOUR, 0); }
	public MINUTE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MINUTE, 0); }
	public SECOND(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SECOND, 0); }
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
	public NFD(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NFD, 0); }
	public NFC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NFC, 0); }
	public NFKD(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NFKD, 0); }
	public NFKC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NFKC, 0); }
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
	public ROW(): TerminalNode { return this.getToken(TrinoSqlParser.ROW, 0); }
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
	public INTERVAL(): TerminalNode { return this.getToken(TrinoSqlParser.INTERVAL, 0); }
	public intervalField(): IntervalFieldContext[];
	public intervalField(i: number): IntervalFieldContext;
	public intervalField(i?: number): IntervalFieldContext | IntervalFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntervalFieldContext);
		} else {
			return this.getRuleContext(i, IntervalFieldContext);
		}
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TO, 0); }
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
	public TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TIMESTAMP, 0); }
	public WITHOUT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WITHOUT, 0); }
	public TIME(): TerminalNode[];
	public TIME(i: number): TerminalNode;
	public TIME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TrinoSqlParser.TIME);
		} else {
			return this.getToken(TrinoSqlParser.TIME, i);
		}
	}
	public ZONE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ZONE, 0); }
	public typeParameter(): TypeParameterContext | undefined {
		return this.tryGetRuleContext(0, TypeParameterContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WITH, 0); }
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
	public DOUBLE(): TerminalNode { return this.getToken(TrinoSqlParser.DOUBLE, 0); }
	public PRECISION(): TerminalNode { return this.getToken(TrinoSqlParser.PRECISION, 0); }
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
	public ARRAY(): TerminalNode { return this.getToken(TrinoSqlParser.ARRAY, 0); }
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
	public MAP(): TerminalNode { return this.getToken(TrinoSqlParser.MAP, 0); }
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
	public ARRAY(): TerminalNode { return this.getToken(TrinoSqlParser.ARRAY, 0); }
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
	public WHEN(): TerminalNode { return this.getToken(TrinoSqlParser.WHEN, 0); }
	public THEN(): TerminalNode { return this.getToken(TrinoSqlParser.THEN, 0); }
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
	public FILTER(): TerminalNode { return this.getToken(TrinoSqlParser.FILTER, 0); }
	public WHERE(): TerminalNode { return this.getToken(TrinoSqlParser.WHERE, 0); }
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
	public WHEN(): TerminalNode { return this.getToken(TrinoSqlParser.WHEN, 0); }
	public MATCHED(): TerminalNode { return this.getToken(TrinoSqlParser.MATCHED, 0); }
	public THEN(): TerminalNode { return this.getToken(TrinoSqlParser.THEN, 0); }
	public UPDATE(): TerminalNode { return this.getToken(TrinoSqlParser.UPDATE, 0); }
	public SET(): TerminalNode { return this.getToken(TrinoSqlParser.SET, 0); }
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
	public AND(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.AND, 0); }
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
	public WHEN(): TerminalNode { return this.getToken(TrinoSqlParser.WHEN, 0); }
	public MATCHED(): TerminalNode { return this.getToken(TrinoSqlParser.MATCHED, 0); }
	public THEN(): TerminalNode { return this.getToken(TrinoSqlParser.THEN, 0); }
	public DELETE(): TerminalNode { return this.getToken(TrinoSqlParser.DELETE, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.AND, 0); }
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
	public WHEN(): TerminalNode { return this.getToken(TrinoSqlParser.WHEN, 0); }
	public NOT(): TerminalNode { return this.getToken(TrinoSqlParser.NOT, 0); }
	public MATCHED(): TerminalNode { return this.getToken(TrinoSqlParser.MATCHED, 0); }
	public THEN(): TerminalNode { return this.getToken(TrinoSqlParser.THEN, 0); }
	public INSERT(): TerminalNode { return this.getToken(TrinoSqlParser.INSERT, 0); }
	public VALUES(): TerminalNode { return this.getToken(TrinoSqlParser.VALUES, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.AND, 0); }
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
	public OVER(): TerminalNode { return this.getToken(TrinoSqlParser.OVER, 0); }
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
	public MEASURES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MEASURES, 0); }
	public measureDefinition(): MeasureDefinitionContext[];
	public measureDefinition(i: number): MeasureDefinitionContext;
	public measureDefinition(i?: number): MeasureDefinitionContext | MeasureDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MeasureDefinitionContext);
		} else {
			return this.getRuleContext(i, MeasureDefinitionContext);
		}
	}
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.AFTER, 0); }
	public MATCH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MATCH, 0); }
	public skipTo(): SkipToContext | undefined {
		return this.tryGetRuleContext(0, SkipToContext);
	}
	public PATTERN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PATTERN, 0); }
	public rowPattern(): RowPatternContext | undefined {
		return this.tryGetRuleContext(0, RowPatternContext);
	}
	public SUBSET(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SUBSET, 0); }
	public subsetDefinition(): SubsetDefinitionContext[];
	public subsetDefinition(i: number): SubsetDefinitionContext;
	public subsetDefinition(i?: number): SubsetDefinitionContext | SubsetDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubsetDefinitionContext);
		} else {
			return this.getRuleContext(i, SubsetDefinitionContext);
		}
	}
	public DEFINE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DEFINE, 0); }
	public variableDefinition(): VariableDefinitionContext[];
	public variableDefinition(i: number): VariableDefinitionContext;
	public variableDefinition(i?: number): VariableDefinitionContext | VariableDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDefinitionContext);
		} else {
			return this.getRuleContext(i, VariableDefinitionContext);
		}
	}
	public INITIAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.INITIAL, 0); }
	public SEEK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SEEK, 0); }
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
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.RANGE, 0); }
	public frameBound(): FrameBoundContext[];
	public frameBound(i: number): FrameBoundContext;
	public frameBound(i?: number): FrameBoundContext | FrameBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FrameBoundContext);
		} else {
			return this.getRuleContext(i, FrameBoundContext);
		}
	}
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ROWS, 0); }
	public GROUPS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.GROUPS, 0); }
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.BETWEEN, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.AND, 0); }
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
	public UNBOUNDED(): TerminalNode { return this.getToken(TrinoSqlParser.UNBOUNDED, 0); }
	public PRECEDING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PRECEDING, 0); }
	public FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FOLLOWING, 0); }
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
	public CURRENT(): TerminalNode { return this.getToken(TrinoSqlParser.CURRENT, 0); }
	public ROW(): TerminalNode { return this.getToken(TrinoSqlParser.ROW, 0); }
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
	public PRECEDING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PRECEDING, 0); }
	public FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FOLLOWING, 0); }
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
	public PERMUTE(): TerminalNode { return this.getToken(TrinoSqlParser.PERMUTE, 0); }
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
	public FORMAT(): TerminalNode { return this.getToken(TrinoSqlParser.FORMAT, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TEXT, 0); }
	public GRAPHVIZ(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.GRAPHVIZ, 0); }
	public JSON(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.JSON, 0); }
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
	public TYPE(): TerminalNode { return this.getToken(TrinoSqlParser.TYPE, 0); }
	public LOGICAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LOGICAL, 0); }
	public DISTRIBUTED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DISTRIBUTED, 0); }
	public VALIDATE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.VALIDATE, 0); }
	public IO(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IO, 0); }
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
	public ISOLATION(): TerminalNode { return this.getToken(TrinoSqlParser.ISOLATION, 0); }
	public LEVEL(): TerminalNode { return this.getToken(TrinoSqlParser.LEVEL, 0); }
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
	public READ(): TerminalNode { return this.getToken(TrinoSqlParser.READ, 0); }
	public ONLY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ONLY, 0); }
	public WRITE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WRITE, 0); }
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
	public READ(): TerminalNode { return this.getToken(TrinoSqlParser.READ, 0); }
	public UNCOMMITTED(): TerminalNode { return this.getToken(TrinoSqlParser.UNCOMMITTED, 0); }
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
	public READ(): TerminalNode { return this.getToken(TrinoSqlParser.READ, 0); }
	public COMMITTED(): TerminalNode { return this.getToken(TrinoSqlParser.COMMITTED, 0); }
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
	public REPEATABLE(): TerminalNode { return this.getToken(TrinoSqlParser.REPEATABLE, 0); }
	public READ(): TerminalNode { return this.getToken(TrinoSqlParser.READ, 0); }
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
	public SERIALIZABLE(): TerminalNode { return this.getToken(TrinoSqlParser.SERIALIZABLE, 0); }
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
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SELECT, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DELETE, 0); }
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.INSERT, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.UPDATE, 0); }
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
	public CURRENT_USER(): TerminalNode { return this.getToken(TrinoSqlParser.CURRENT_USER, 0); }
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
	public CURRENT_ROLE(): TerminalNode { return this.getToken(TrinoSqlParser.CURRENT_ROLE, 0); }
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
	public USER(): TerminalNode { return this.getToken(TrinoSqlParser.USER, 0); }
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
	public ROLE(): TerminalNode { return this.getToken(TrinoSqlParser.ROLE, 0); }
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
	public ADD(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ADD, 0); }
	public ADMIN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ADMIN, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.AFTER, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ALL, 0); }
	public ANALYZE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ANALYZE, 0); }
	public ANY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ANY, 0); }
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ARRAY, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ASC, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.AT, 0); }
	public AUTHORIZATION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.AUTHORIZATION, 0); }
	public BERNOULLI(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.BERNOULLI, 0); }
	public CALL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.CALL, 0); }
	public CASCADE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.CASCADE, 0); }
	public CATALOGS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.CATALOGS, 0); }
	public COLUMN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.COLUMN, 0); }
	public COLUMNS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.COLUMNS, 0); }
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.COMMENT, 0); }
	public COMMIT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.COMMIT, 0); }
	public COMMITTED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.COMMITTED, 0); }
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.CURRENT, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DATA, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DATE, 0); }
	public DAY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DAY, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DEFAULT, 0); }
	public DEFINE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DEFINE, 0); }
	public DEFINER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DEFINER, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DESC, 0); }
	public DISTRIBUTED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DISTRIBUTED, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DOUBLE, 0); }
	public EMPTY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.EMPTY, 0); }
	public EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.EXCLUDING, 0); }
	public EXPLAIN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.EXPLAIN, 0); }
	public FETCH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FETCH, 0); }
	public FILTER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FILTER, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FINAL, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FIRST, 0); }
	public FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FOLLOWING, 0); }
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FORMAT, 0); }
	public FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.FUNCTIONS, 0); }
	public GRANT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.GRANT, 0); }
	public GRANTED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.GRANTED, 0); }
	public GRANTS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.GRANTS, 0); }
	public DENY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.DENY, 0); }
	public GRAPHVIZ(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.GRAPHVIZ, 0); }
	public GROUPS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.GROUPS, 0); }
	public HOUR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.HOUR, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IF, 0); }
	public IGNORE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IGNORE, 0); }
	public INCLUDING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.INCLUDING, 0); }
	public INITIAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.INITIAL, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.INPUT, 0); }
	public INTERVAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.INTERVAL, 0); }
	public INVOKER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.INVOKER, 0); }
	public IO(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.IO, 0); }
	public ISOLATION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ISOLATION, 0); }
	public JSON(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.JSON, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LAST, 0); }
	public LATERAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LATERAL, 0); }
	public LEVEL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LEVEL, 0); }
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LIMIT, 0); }
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LOCAL, 0); }
	public LOGICAL(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.LOGICAL, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MAP, 0); }
	public MATCH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MATCH, 0); }
	public MATCHED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MATCHED, 0); }
	public MATCHES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MATCHES, 0); }
	public MATCH_RECOGNIZE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MATCH_RECOGNIZE, 0); }
	public MATERIALIZED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MATERIALIZED, 0); }
	public MEASURES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MEASURES, 0); }
	public MERGE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MERGE, 0); }
	public MINUTE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MINUTE, 0); }
	public MONTH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.MONTH, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NEXT, 0); }
	public NFC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NFC, 0); }
	public NFD(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NFD, 0); }
	public NFKC(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NFKC, 0); }
	public NFKD(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NFKD, 0); }
	public NO(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NO, 0); }
	public NONE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NONE, 0); }
	public NULLIF(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NULLIF, 0); }
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.NULLS, 0); }
	public OFFSET(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.OFFSET, 0); }
	public OMIT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.OMIT, 0); }
	public ONE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ONE, 0); }
	public ONLY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ONLY, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.OPTION, 0); }
	public ORDINALITY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ORDINALITY, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.OUTPUT, 0); }
	public OVER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.OVER, 0); }
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PARTITION, 0); }
	public PARTITIONS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PARTITIONS, 0); }
	public PAST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PAST, 0); }
	public PATH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PATH, 0); }
	public PATTERN(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PATTERN, 0); }
	public PER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PER, 0); }
	public PERMUTE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PERMUTE, 0); }
	public POSITION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.POSITION, 0); }
	public PRECEDING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PRECEDING, 0); }
	public PRECISION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PRECISION, 0); }
	public PRIVILEGES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PRIVILEGES, 0); }
	public PROPERTIES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.PROPERTIES, 0); }
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.RANGE, 0); }
	public READ(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.READ, 0); }
	public REFRESH(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.REFRESH, 0); }
	public RENAME(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.RENAME, 0); }
	public REPEATABLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.REPEATABLE, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.REPLACE, 0); }
	public RESET(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.RESET, 0); }
	public RESPECT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.RESPECT, 0); }
	public RESTRICT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.RESTRICT, 0); }
	public REVOKE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.REVOKE, 0); }
	public ROLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ROLE, 0); }
	public ROLES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ROLES, 0); }
	public ROLLBACK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ROLLBACK, 0); }
	public ROW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ROW, 0); }
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ROWS, 0); }
	public RUNNING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.RUNNING, 0); }
	public SCHEMA(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SCHEMA, 0); }
	public SCHEMAS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SCHEMAS, 0); }
	public SECOND(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SECOND, 0); }
	public SECURITY(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SECURITY, 0); }
	public SEEK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SEEK, 0); }
	public SERIALIZABLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SERIALIZABLE, 0); }
	public SESSION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SESSION, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SET, 0); }
	public SETS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SETS, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SHOW, 0); }
	public SOME(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SOME, 0); }
	public START(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.START, 0); }
	public STATS(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.STATS, 0); }
	public SUBSET(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SUBSET, 0); }
	public SUBSTRING(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SUBSTRING, 0); }
	public SYSTEM(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.SYSTEM, 0); }
	public TABLES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TABLES, 0); }
	public TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TABLESAMPLE, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TEXT, 0); }
	public TIES(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TIES, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TIME, 0); }
	public TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TIMESTAMP, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TO, 0); }
	public TRANSACTION(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TRANSACTION, 0); }
	public TRUNCATE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TRUNCATE, 0); }
	public TRY_CAST(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TRY_CAST, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.TYPE, 0); }
	public UNBOUNDED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.UNBOUNDED, 0); }
	public UNCOMMITTED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.UNCOMMITTED, 0); }
	public UNMATCHED(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.UNMATCHED, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.UPDATE, 0); }
	public USE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.USE, 0); }
	public USER(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.USER, 0); }
	public VALIDATE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.VALIDATE, 0); }
	public VERBOSE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.VERBOSE, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.VIEW, 0); }
	public WINDOW(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WINDOW, 0); }
	public WITHOUT(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WITHOUT, 0); }
	public WORK(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WORK, 0); }
	public WRITE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.WRITE, 0); }
	public YEAR(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.YEAR, 0); }
	public ZONE(): TerminalNode | undefined { return this.tryGetToken(TrinoSqlParser.ZONE, 0); }
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


