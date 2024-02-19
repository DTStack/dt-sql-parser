// Generated from dt-sql-parser/src/grammar/trinosql/TrinoSql.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { TrinoSqlListener } from "./TrinoSqlListener.js";
import { TrinoSqlVisitor } from "./TrinoSqlVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class TrinoSqlParser extends antlr.Parser {
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

    public static readonly literalNames = [
        null, "'('", "')'", "','", "'.'", "'SKIP'", "'->'", "'['", "']'", 
        "'|'", "'^'", "'$'", "'{-'", "'-}'", "'{'", "'}'", "'=>'", "'ADD'", 
        "'ADMIN'", "'AFTER'", "'ALL'", "'ALTER'", "'ANALYZE'", "'AND'", 
        "'ANY'", "'ARRAY'", "'AS'", "'ASC'", "'AT'", "'AUTHORIZATION'", 
        "'BERNOULLI'", "'BETWEEN'", "'BY'", "'CALL'", "'CASCADE'", "'CASE'", 
        "'CAST'", "'CATALOGS'", "'COLUMN'", "'COLUMNS'", "'COMMENT'", "'COMMIT'", 
        "'COMMITTED'", "'CONSTRAINT'", "'CREATE'", "'CROSS'", "'CUBE'", 
        "'CURRENT'", "'CURRENT_CATALOG'", "'CURRENT_DATE'", "'CURRENT_PATH'", 
        "'CURRENT_ROLE'", "'CURRENT_SCHEMA'", "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", 
        "'CURRENT_USER'", "'DATA'", "'DATE'", "'DAY'", "'DEFAULT'", "'DEALLOCATE'", 
        "'DEFINER'", "'DELETE'", "'DESC'", "'DESCRIBE'", "'DEFINE'", "'DISTINCT'", 
        "'DISTRIBUTED'", "'DOUBLE'", "'DROP'", "'ELSE'", "'EMPTY'", "'END'", 
        "'ESCAPE'", "'EXCEPT'", "'EXCLUDING'", "'EXECUTE'", "'EXISTS'", 
        "'EXPLAIN'", "'EXTRACT'", "'FALSE'", "'FETCH'", "'FILTER'", "'FINAL'", 
        "'FIRST'", "'FOLLOWING'", "'FOR'", "'FORMAT'", "'FROM'", "'FULL'", 
        "'FUNCTIONS'", "'GRANT'", "'GRANTED'", "'GRANTS'", "'DENY'", "'GRAPHVIZ'", 
        "'GROUP'", "'GROUPING'", "'GROUPS'", "'HAVING'", "'HOUR'", "'IF'", 
        "'IGNORE'", "'IN'", "'INCLUDING'", "'INITIAL'", "'INNER'", "'INPUT'", 
        "'INSERT'", "'INTERSECT'", "'INTERVAL'", "'INTO'", "'INVOKER'", 
        "'IO'", "'IS'", "'ISOLATION'", "'JOIN'", "'JSON'", "'LAST'", "'LATERAL'", 
        "'LEFT'", "'LEVEL'", "'LIKE'", "'LIMIT'", "'LOCAL'", "'LOCALTIME'", 
        "'LOCALTIMESTAMP'", "'LOGICAL'", "'MAP'", "'MATCH'", "'MATCHED'", 
        "'MATCHES'", "'MATCH_RECOGNIZE'", "'MATERIALIZED'", "'MEASURES'", 
        "'MERGE'", "'MINUTE'", "'MONTH'", "'NATURAL'", "'NEXT'", "'NFC'", 
        "'NFD'", "'NFKC'", "'NFKD'", "'NO'", "'NONE'", "'NORMALIZE'", "'NOT'", 
        "'NULL'", "'NULLIF'", "'NULLS'", "'OFFSET'", "'OMIT'", "'ON'", "'ONE'", 
        "'ONLY'", "'OPTION'", "'OR'", "'ORDER'", "'ORDINALITY'", "'OUTER'", 
        "'OUTPUT'", "'OVER'", "'PARTITION'", "'PARTITIONS'", "'PAST'", "'PATH'", 
        "'PATTERN'", "'PER'", "'PERMUTE'", "'POSITION'", "'PRECEDING'", 
        "'PRECISION'", "'PREPARE'", "'PRIVILEGES'", "'PROPERTIES'", "'RANGE'", 
        "'READ'", "'RECURSIVE'", "'REFRESH'", "'RENAME'", "'REPEATABLE'", 
        "'REPLACE'", "'RESET'", "'RESPECT'", "'RESTRICT'", "'REVOKE'", "'RIGHT'", 
        "'ROLE'", "'ROLES'", "'ROLLBACK'", "'ROLLUP'", "'ROW'", "'ROWS'", 
        "'RUNNING'", "'SCHEMA'", "'SCHEMAS'", "'SECOND'", "'SECURITY'", 
        "'SEEK'", "'SELECT'", "'SERIALIZABLE'", "'SESSION'", "'SET'", "'SETS'", 
        "'SHOW'", "'SOME'", "'START'", "'STATS'", "'SUBSET'", "'SUBSTRING'", 
        "'SYSTEM'", "'TABLE'", "'TABLES'", "'TABLESAMPLE'", "'TEXT'", "'THEN'", 
        "'TIES'", "'TIME'", "'TIMESTAMP'", "'TO'", "'TRANSACTION'", "'TRUNCATE'", 
        "'TRUE'", "'TRY_CAST'", "'TYPE'", "'UESCAPE'", "'UNBOUNDED'", "'UNCOMMITTED'", 
        "'UNION'", "'UNMATCHED'", "'UNNEST'", "'UPDATE'", "'USE'", "'USER'", 
        "'USING'", "'VALIDATE'", "'VALUES'", "'VERBOSE'", "'VIEW'", "'WHEN'", 
        "'WHERE'", "'WINDOW'", "'WITH'", "'WITHOUT'", "'WORK'", "'WRITE'", 
        "'YEAR'", "'ZONE'", "'='", null, "'<'", "'<='", "'>'", "'>='", "'+'", 
        "'-'", "'*'", "'/'", "'%'", "'||'", "'?'", null, null, null, null, 
        null, null, null, null, null, null, "';'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, "KW_ADD", "KW_ADMIN", "KW_AFTER", 
        "KW_ALL", "KW_ALTER", "KW_ANALYZE", "KW_AND", "KW_ANY", "KW_ARRAY", 
        "KW_AS", "KW_ASC", "KW_AT", "KW_AUTHORIZATION", "KW_BERNOULLI", 
        "KW_BETWEEN", "KW_BY", "KW_CALL", "KW_CASCADE", "KW_CASE", "KW_CAST", 
        "KW_CATALOGS", "KW_COLUMN", "KW_COLUMNS", "KW_COMMENT", "KW_COMMIT", 
        "KW_COMMITTED", "KW_CONSTRAINT", "KW_CREATE", "KW_CROSS", "KW_CUBE", 
        "KW_CURRENT", "KW_CURRENT_CATALOG", "KW_CURRENT_DATE", "KW_CURRENT_PATH", 
        "KW_CURRENT_ROLE", "KW_CURRENT_SCHEMA", "KW_CURRENT_TIME", "KW_CURRENT_TIMESTAMP", 
        "KW_CURRENT_USER", "KW_DATA", "KW_DATE", "KW_DAY", "KW_DEFAULT", 
        "KW_DEALLOCATE", "KW_DEFINER", "KW_DELETE", "KW_DESC", "KW_DESCRIBE", 
        "KW_DEFINE", "KW_DISTINCT", "KW_DISTRIBUTED", "KW_DOUBLE", "KW_DROP", 
        "KW_ELSE", "KW_EMPTY", "KW_END", "KW_ESCAPE", "KW_EXCEPT", "KW_EXCLUDING", 
        "KW_EXECUTE", "KW_EXISTS", "KW_EXPLAIN", "KW_EXTRACT", "KW_FALSE", 
        "KW_FETCH", "KW_FILTER", "KW_FINAL", "KW_FIRST", "KW_FOLLOWING", 
        "KW_FOR", "KW_FORMAT", "KW_FROM", "KW_FULL", "KW_FUNCTIONS", "KW_GRANT", 
        "KW_GRANTED", "KW_GRANTS", "KW_DENY", "KW_GRAPHVIZ", "KW_GROUP", 
        "KW_GROUPING", "KW_GROUPS", "KW_HAVING", "KW_HOUR", "KW_IF", "KW_IGNORE", 
        "KW_IN", "KW_INCLUDING", "KW_INITIAL", "KW_INNER", "KW_INPUT", "KW_INSERT", 
        "KW_INTERSECT", "KW_INTERVAL", "KW_INTO", "KW_INVOKER", "KW_IO", 
        "KW_IS", "KW_ISOLATION", "KW_JOIN", "KW_JSON", "KW_LAST", "KW_LATERAL", 
        "KW_LEFT", "KW_LEVEL", "KW_LIKE", "KW_LIMIT", "KW_LOCAL", "KW_LOCALTIME", 
        "KW_LOCALTIMESTAMP", "KW_LOGICAL", "KW_MAP", "KW_MATCH", "KW_MATCHED", 
        "KW_MATCHES", "KW_MATCH_RECOGNIZE", "KW_MATERIALIZED", "KW_MEASURES", 
        "KW_MERGE", "KW_MINUTE", "KW_MONTH", "KW_NATURAL", "KW_NEXT", "KW_NFC", 
        "KW_NFD", "KW_NFKC", "KW_NFKD", "KW_NO", "KW_NONE", "KW_NORMALIZE", 
        "KW_NOT", "KW_NULL", "KW_NULLIF", "KW_NULLS", "KW_OFFSET", "KW_OMIT", 
        "KW_ON", "KW_ONE", "KW_ONLY", "KW_OPTION", "KW_OR", "KW_ORDER", 
        "KW_ORDINALITY", "KW_OUTER", "KW_OUTPUT", "KW_OVER", "KW_PARTITION", 
        "KW_PARTITIONS", "KW_PAST", "KW_PATH", "KW_PATTERN", "KW_PER", "KW_PERMUTE", 
        "KW_POSITION", "KW_PRECEDING", "KW_PRECISION", "KW_PREPARE", "KW_PRIVILEGES", 
        "KW_PROPERTIES", "KW_RANGE", "KW_READ", "KW_RECURSIVE", "KW_REFRESH", 
        "KW_RENAME", "KW_REPEATABLE", "KW_REPLACE", "KW_RESET", "KW_RESPECT", 
        "KW_RESTRICT", "KW_REVOKE", "KW_RIGHT", "KW_ROLE", "KW_ROLES", "KW_ROLLBACK", 
        "KW_ROLLUP", "KW_ROW", "KW_ROWS", "KW_RUNNING", "KW_SCHEMA", "KW_SCHEMAS", 
        "KW_SECOND", "KW_SECURITY", "KW_SEEK", "KW_SELECT", "KW_SERIALIZABLE", 
        "KW_SESSION", "KW_SET", "KW_SETS", "KW_SHOW", "KW_SOME", "KW_START", 
        "KW_STATS", "KW_SUBSET", "KW_SUBSTRING", "KW_SYSTEM", "KW_TABLE", 
        "KW_TABLES", "KW_TABLESAMPLE", "KW_TEXT", "KW_THEN", "KW_TIES", 
        "KW_TIME", "KW_TIMESTAMP", "KW_TO", "KW_TRANSACTION", "KW_TRUNCATE", 
        "KW_TRUE", "KW_TRY_CAST", "KW_TYPE", "KW_UESCAPE", "KW_UNBOUNDED", 
        "KW_UNCOMMITTED", "KW_UNION", "KW_UNMATCHED", "KW_UNNEST", "KW_UPDATE", 
        "KW_USE", "KW_USER", "KW_USING", "KW_VALIDATE", "KW_VALUES", "KW_VERBOSE", 
        "KW_VIEW", "KW_WHEN", "KW_WHERE", "KW_WINDOW", "KW_WITH", "KW_WITHOUT", 
        "KW_WORK", "KW_WRITE", "KW_YEAR", "KW_ZONE", "EQ", "NEQ", "LT", 
        "LTE", "GT", "GTE", "PLUS", "MINUS", "ASTERISK", "SLASH", "PERCENT", 
        "CONCAT", "QUESTION_MARK", "STRING", "UNICODE_STRING", "BINARY_LITERAL", 
        "INTEGER_VALUE", "DECIMAL_VALUE", "DOUBLE_VALUE", "IDENTIFIER", 
        "DIGIT_IDENTIFIER", "QUOTED_IDENTIFIER", "BACKQUOTED_IDENTIFIER", 
        "SEMICOLON", "SIMPLE_COMMENT", "BRACKETED_COMMENT", "WS", "UNRECOGNIZED", 
        "DELIMITER"
    ];
    public static readonly ruleNames = [
        "program", "statements", "standaloneClause", "singleStatement", 
        "standaloneExpression", "standalonePathSpecification", "standaloneType", 
        "standaloneRowPattern", "statement", "query", "with", "tableElement", 
        "columnDefinition", "likeClause", "properties", "propertyAssignments", 
        "property", "propertyValue", "queryNoWith", "limitRowCount", "rowCount", 
        "queryTerm", "queryPrimary", "sortItem", "querySpecification", "groupBy", 
        "groupingElement", "groupingSet", "groupingTerm", "windowDefinition", 
        "windowSpecification", "namedQuery", "setQuantifier", "selectItem", 
        "relation", "joinType", "joinCriteria", "sampledRelation", "sampleType", 
        "patternRecognition", "measureDefinition", "rowsPerMatch", "emptyMatchHandling", 
        "skipTo", "subsetDefinition", "variableDefinition", "aliasedRelation", 
        "columnListCreate", "columnList", "columnAliases", "relationPrimary", 
        "expression", "booleanExpression", "predicate", "valueExpression", 
        "primaryExpression", "processingMode", "nullTreatment", "string", 
        "timeZoneSpecifier", "comparisonOperator", "comparisonQuantifier", 
        "booleanValue", "interval", "intervalField", "normalForm", "type", 
        "rowField", "typeParameter", "whenClause", "filter", "mergeCase", 
        "over", "windowFrame", "frameExtent", "frameBound", "rowPattern", 
        "patternPrimary", "patternQuantifier", "updateAssignment", "explainOption", 
        "transactionMode", "levelOfIsolation", "callArgument", "pathElement", 
        "pathSpecification", "privilege", "tableOrViewName", "tableName", 
        "tableNameCreate", "viewName", "viewNameCreate", "tablePath", "viewPath", 
        "schemaName", "schemaNameCreate", "schemaPath", "catalogName", "catalogNameCreate", 
        "functionName", "columnName", "columnNameCreate", "qualifiedName", 
        "grantor", "principal", "roles", "identifier", "number", "nonReserved",
    ];

    public get grammarFileName(): string { return "TrinoSql.g4"; }
    public get literalNames(): (string | null)[] { return TrinoSqlParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return TrinoSqlParser.symbolicNames; }
    public get ruleNames(): string[] { return TrinoSqlParser.ruleNames; }
    public get serializedATN(): number[] { return TrinoSqlParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, TrinoSqlParser._ATN, TrinoSqlParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, TrinoSqlParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 221;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 6291458) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 3892316545) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 37749377) !== 0) || _la === 108 || _la === 135 || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & 1208099905) !== 0) || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 402784389) !== 0) || _la === 237 || _la === 243) {
                {
                {
                this.state = 218;
                this.statements();
                }
                }
                this.state = 223;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 224;
            this.match(TrinoSqlParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statements(): StatementsContext {
        let localContext = new StatementsContext(this.context, this.state);
        this.enterRule(localContext, 2, TrinoSqlParser.RULE_statements);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 226;
            this.singleStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public standaloneClause(): StandaloneClauseContext {
        let localContext = new StandaloneClauseContext(this.context, this.state);
        this.enterRule(localContext, 4, TrinoSqlParser.RULE_standaloneClause);
        try {
            this.state = 232;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 228;
                this.standaloneExpression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 229;
                this.standalonePathSpecification();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 230;
                this.standaloneType();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 231;
                this.standaloneRowPattern();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public singleStatement(): SingleStatementContext {
        let localContext = new SingleStatementContext(this.context, this.state);
        this.enterRule(localContext, 6, TrinoSqlParser.RULE_singleStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 234;
            this.statement();
            this.state = 236;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 272) {
                {
                this.state = 235;
                this.match(TrinoSqlParser.SEMICOLON);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public standaloneExpression(): StandaloneExpressionContext {
        let localContext = new StandaloneExpressionContext(this.context, this.state);
        this.enterRule(localContext, 8, TrinoSqlParser.RULE_standaloneExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 238;
            this.expression();
            this.state = 240;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 272) {
                {
                this.state = 239;
                this.match(TrinoSqlParser.SEMICOLON);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public standalonePathSpecification(): StandalonePathSpecificationContext {
        let localContext = new StandalonePathSpecificationContext(this.context, this.state);
        this.enterRule(localContext, 10, TrinoSqlParser.RULE_standalonePathSpecification);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 242;
            this.pathSpecification();
            this.state = 244;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 272) {
                {
                this.state = 243;
                this.match(TrinoSqlParser.SEMICOLON);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public standaloneType(): StandaloneTypeContext {
        let localContext = new StandaloneTypeContext(this.context, this.state);
        this.enterRule(localContext, 12, TrinoSqlParser.RULE_standaloneType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 246;
            this.type_(0);
            this.state = 248;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 272) {
                {
                this.state = 247;
                this.match(TrinoSqlParser.SEMICOLON);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public standaloneRowPattern(): StandaloneRowPatternContext {
        let localContext = new StandaloneRowPatternContext(this.context, this.state);
        this.enterRule(localContext, 14, TrinoSqlParser.RULE_standaloneRowPattern);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 250;
            this.rowPattern(0);
            this.state = 252;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 272) {
                {
                this.state = 251;
                this.match(TrinoSqlParser.SEMICOLON);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 16, TrinoSqlParser.RULE_statement);
        let _la: number;
        try {
            this.state = 1036;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 117, this.context) ) {
            case 1:
                localContext = new StatementDefaultContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 254;
                this.query();
                }
                break;
            case 2:
                localContext = new UseContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 255;
                this.match(TrinoSqlParser.KW_USE);
                this.state = 256;
                this.schemaName();
                }
                break;
            case 3:
                localContext = new CreateSchemaContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 257;
                this.match(TrinoSqlParser.KW_CREATE);
                this.state = 258;
                this.match(TrinoSqlParser.KW_SCHEMA);
                this.state = 262;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 29) {
                    {
                    this.state = 265;
                    this.match(TrinoSqlParser.KW_AUTHORIZATION);
                    this.state = 266;
                    this.principal();
                    }
                }

                this.state = 271;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
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
                localContext = new DropSchemaContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 273;
                this.match(TrinoSqlParser.KW_DROP);
                this.state = 274;
                this.match(TrinoSqlParser.KW_SCHEMA);
                this.state = 277;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 34 || _la === 185) {
                    {
                    this.state = 280;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 34 || _la === 185)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                }
                break;
            case 5:
                localContext = new RenameSchemaContext(localContext);
                this.enterOuterAlt(localContext, 5);
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
                localContext = new SetSchemaAuthorizationContext(localContext);
                this.enterOuterAlt(localContext, 6);
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
                localContext = new CreateTableAsSelectContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 297;
                this.match(TrinoSqlParser.KW_CREATE);
                this.state = 298;
                this.match(TrinoSqlParser.KW_TABLE);
                this.state = 302;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 12, this.context) ) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 305;
                    this.columnListCreate();
                    }
                }

                this.state = 310;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 40) {
                    {
                    this.state = 308;
                    this.match(TrinoSqlParser.KW_COMMENT);
                    this.state = 309;
                    this.string_();
                    }
                }

                this.state = 314;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 243) {
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
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 16, this.context) ) {
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
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 18, this.context) ) {
                case 1:
                    {
                    this.state = 324;
                    this.match(TrinoSqlParser.KW_WITH);
                    this.state = 326;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 144) {
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
                localContext = new CreateTableContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 331;
                this.match(TrinoSqlParser.KW_CREATE);
                this.state = 332;
                this.match(TrinoSqlParser.KW_TABLE);
                this.state = 336;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context) ) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 341;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 342;
                    this.tableElement();
                    }
                    }
                    this.state = 347;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 348;
                this.match(TrinoSqlParser.T__1);
                this.state = 351;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context) ) {
                case 1:
                    {
                    this.state = 349;
                    this.match(TrinoSqlParser.KW_COMMENT);
                    this.state = 350;
                    this.string_();
                    }
                    break;
                }
                this.state = 355;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context) ) {
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
                localContext = new DropTableContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 357;
                this.match(TrinoSqlParser.KW_DROP);
                this.state = 358;
                this.match(TrinoSqlParser.KW_TABLE);
                this.state = 361;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 23, this.context) ) {
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
                localContext = new InsertIntoContext(localContext);
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 364;
                this.match(TrinoSqlParser.KW_INSERT);
                this.state = 365;
                this.match(TrinoSqlParser.KW_INTO);
                this.state = 366;
                this.tableName();
                this.state = 368;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
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
                localContext = new DeleteContext(localContext);
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 372;
                this.match(TrinoSqlParser.KW_DELETE);
                this.state = 373;
                this.match(TrinoSqlParser.KW_FROM);
                this.state = 374;
                this.tableName();
                this.state = 377;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 241) {
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
                localContext = new TruncateTableContext(localContext);
                this.enterOuterAlt(localContext, 12);
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
                localContext = new RenameTableContext(localContext);
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 382;
                this.match(TrinoSqlParser.KW_ALTER);
                this.state = 383;
                this.match(TrinoSqlParser.KW_TABLE);
                this.state = 386;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
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
                (localContext as RenameTableContext)._from_ = this.tableName();
                this.state = 389;
                this.match(TrinoSqlParser.KW_RENAME);
                this.state = 390;
                this.match(TrinoSqlParser.KW_TO);
                this.state = 391;
                (localContext as RenameTableContext)._to = this.tableNameCreate();
                }
                break;
            case 14:
                localContext = new CommentTableContext(localContext);
                this.enterOuterAlt(localContext, 14);
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
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case TrinoSqlParser.STRING:
                case TrinoSqlParser.UNICODE_STRING:
                    {
                    this.state = 398;
                    this.string_();
                    }
                    break;
                case TrinoSqlParser.KW_NULL:
                    {
                    this.state = 399;
                    this.match(TrinoSqlParser.KW_NULL);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case 15:
                localContext = new CommentColumnContext(localContext);
                this.enterOuterAlt(localContext, 15);
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
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case TrinoSqlParser.STRING:
                case TrinoSqlParser.UNICODE_STRING:
                    {
                    this.state = 407;
                    this.string_();
                    }
                    break;
                case TrinoSqlParser.KW_NULL:
                    {
                    this.state = 408;
                    this.match(TrinoSqlParser.KW_NULL);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case 16:
                localContext = new RenameColumnContext(localContext);
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 411;
                this.match(TrinoSqlParser.KW_ALTER);
                this.state = 412;
                this.match(TrinoSqlParser.KW_TABLE);
                this.state = 415;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 29, this.context) ) {
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
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
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
                (localContext as RenameColumnContext)._from_ = this.columnName();
                this.state = 425;
                this.match(TrinoSqlParser.KW_TO);
                this.state = 426;
                (localContext as RenameColumnContext)._to = this.columnNameCreate();
                }
                break;
            case 17:
                localContext = new DropColumnContext(localContext);
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 428;
                this.match(TrinoSqlParser.KW_ALTER);
                this.state = 429;
                this.match(TrinoSqlParser.KW_TABLE);
                this.state = 432;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
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
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
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
                (localContext as DropColumnContext)._column = this.columnName();
                }
                break;
            case 18:
                localContext = new AddColumnContext(localContext);
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 443;
                this.match(TrinoSqlParser.KW_ALTER);
                this.state = 444;
                this.match(TrinoSqlParser.KW_TABLE);
                this.state = 447;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context) ) {
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
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 34, this.context) ) {
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
                (localContext as AddColumnContext)._column = this.columnDefinition();
                }
                break;
            case 19:
                localContext = new SetTableAuthorizationContext(localContext);
                this.enterOuterAlt(localContext, 19);
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
                localContext = new SetTablePropertiesContext(localContext);
                this.enterOuterAlt(localContext, 20);
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
                localContext = new TableExecuteContext(localContext);
                this.enterOuterAlt(localContext, 21);
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
                (localContext as TableExecuteContext)._procedureName = this.identifier();
                this.state = 490;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context) ) {
                case 1:
                    {
                    this.state = 478;
                    this.match(TrinoSqlParser.T__0);
                    this.state = 487;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757954) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1476117503) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2120217677) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4252345787) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 1325399551) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3153981439) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4286054271) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 3237637037) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2047) !== 0)) {
                        {
                        this.state = 479;
                        this.callArgument();
                        this.state = 484;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 3) {
                            {
                            {
                            this.state = 480;
                            this.match(TrinoSqlParser.T__2);
                            this.state = 481;
                            this.callArgument();
                            }
                            }
                            this.state = 486;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        }
                    }

                    this.state = 489;
                    this.match(TrinoSqlParser.T__1);
                    }
                    break;
                }
                this.state = 494;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 241) {
                    {
                    this.state = 492;
                    this.match(TrinoSqlParser.KW_WHERE);
                    this.state = 493;
                    (localContext as TableExecuteContext)._where = this.booleanExpression(0);
                    }
                }

                }
                break;
            case 22:
                localContext = new AnalyzeContext(localContext);
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 496;
                this.match(TrinoSqlParser.KW_ANALYZE);
                this.state = 497;
                this.tableName();
                this.state = 500;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 39, this.context) ) {
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
                localContext = new CreateMaterializedViewContext(localContext);
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 502;
                this.match(TrinoSqlParser.KW_CREATE);
                this.state = 505;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 157) {
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
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 41, this.context) ) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 40) {
                    {
                    this.state = 515;
                    this.match(TrinoSqlParser.KW_COMMENT);
                    this.state = 516;
                    this.string_();
                    }
                }

                this.state = 521;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 243) {
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
                localContext = new CreateViewContext(localContext);
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 526;
                this.match(TrinoSqlParser.KW_CREATE);
                this.state = 529;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 157) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 40) {
                    {
                    this.state = 533;
                    this.match(TrinoSqlParser.KW_COMMENT);
                    this.state = 534;
                    this.string_();
                    }
                }

                this.state = 539;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 198) {
                    {
                    this.state = 537;
                    this.match(TrinoSqlParser.KW_SECURITY);
                    this.state = 538;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 61 || _la === 112)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
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
                localContext = new RefreshMaterializedViewContext(localContext);
                this.enterOuterAlt(localContext, 25);
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
                localContext = new DropMaterializedViewContext(localContext);
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 548;
                this.match(TrinoSqlParser.KW_DROP);
                this.state = 549;
                this.match(TrinoSqlParser.KW_MATERIALIZED);
                this.state = 550;
                this.match(TrinoSqlParser.KW_VIEW);
                this.state = 553;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context) ) {
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
                localContext = new RenameMaterializedViewContext(localContext);
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 556;
                this.match(TrinoSqlParser.KW_ALTER);
                this.state = 557;
                this.match(TrinoSqlParser.KW_MATERIALIZED);
                this.state = 558;
                this.match(TrinoSqlParser.KW_VIEW);
                this.state = 561;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context) ) {
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
                (localContext as RenameMaterializedViewContext)._from_ = this.viewName();
                this.state = 564;
                this.match(TrinoSqlParser.KW_RENAME);
                this.state = 565;
                this.match(TrinoSqlParser.KW_TO);
                this.state = 566;
                (localContext as RenameMaterializedViewContext)._to = this.viewNameCreate();
                }
                break;
            case 28:
                localContext = new SetMaterializedViewPropertiesContext(localContext);
                this.enterOuterAlt(localContext, 28);
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
                localContext = new DropViewContext(localContext);
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 576;
                this.match(TrinoSqlParser.KW_DROP);
                this.state = 577;
                this.match(TrinoSqlParser.KW_VIEW);
                this.state = 580;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 49, this.context) ) {
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
                localContext = new RenameViewContext(localContext);
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 583;
                this.match(TrinoSqlParser.KW_ALTER);
                this.state = 584;
                this.match(TrinoSqlParser.KW_VIEW);
                this.state = 585;
                (localContext as RenameViewContext)._from_ = this.viewName();
                this.state = 586;
                this.match(TrinoSqlParser.KW_RENAME);
                this.state = 587;
                this.match(TrinoSqlParser.KW_TO);
                this.state = 588;
                (localContext as RenameViewContext)._to = this.viewNameCreate();
                }
                break;
            case 31:
                localContext = new SetViewAuthorizationContext(localContext);
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 590;
                this.match(TrinoSqlParser.KW_ALTER);
                this.state = 591;
                this.match(TrinoSqlParser.KW_VIEW);
                this.state = 592;
                (localContext as SetViewAuthorizationContext)._from_ = this.viewName();
                this.state = 593;
                this.match(TrinoSqlParser.KW_SET);
                this.state = 594;
                this.match(TrinoSqlParser.KW_AUTHORIZATION);
                this.state = 595;
                this.principal();
                }
                break;
            case 32:
                localContext = new CallContext(localContext);
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 597;
                this.match(TrinoSqlParser.KW_CALL);
                this.state = 598;
                this.functionName();
                this.state = 599;
                this.match(TrinoSqlParser.T__0);
                this.state = 608;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757954) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1476117503) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2120217677) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4252345787) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 1325399551) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3153981439) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4286054271) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 3237637037) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2047) !== 0)) {
                    {
                    this.state = 600;
                    this.callArgument();
                    this.state = 605;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 601;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 602;
                        this.callArgument();
                        }
                        }
                        this.state = 607;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 610;
                this.match(TrinoSqlParser.T__1);
                }
                break;
            case 33:
                localContext = new CreateRoleContext(localContext);
                this.enterOuterAlt(localContext, 33);
                {
                this.state = 612;
                this.match(TrinoSqlParser.KW_CREATE);
                this.state = 613;
                this.match(TrinoSqlParser.KW_ROLE);
                this.state = 614;
                (localContext as CreateRoleContext)._name = this.identifier();
                this.state = 618;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 52, this.context) ) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 103) {
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
                localContext = new DropRoleContext(localContext);
                this.enterOuterAlt(localContext, 34);
                {
                this.state = 624;
                this.match(TrinoSqlParser.KW_DROP);
                this.state = 625;
                this.match(TrinoSqlParser.KW_ROLE);
                this.state = 626;
                (localContext as DropRoleContext)._name = this.identifier();
                }
                break;
            case 35:
                localContext = new GrantRolesContext(localContext);
                this.enterOuterAlt(localContext, 35);
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 631;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 632;
                    this.principal();
                    }
                    }
                    this.state = 637;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 641;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 92) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 103) {
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
                localContext = new RevokeRolesContext(localContext);
                this.enterOuterAlt(localContext, 36);
                {
                this.state = 652;
                this.match(TrinoSqlParser.KW_REVOKE);
                this.state = 656;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 58, this.context) ) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 661;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 662;
                    this.principal();
                    }
                    }
                    this.state = 667;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 671;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 92) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 103) {
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
                localContext = new SetRoleContext(localContext);
                this.enterOuterAlt(localContext, 37);
                {
                this.state = 677;
                this.match(TrinoSqlParser.KW_SET);
                this.state = 678;
                this.match(TrinoSqlParser.KW_ROLE);
                this.state = 682;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 62, this.context) ) {
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
                    (localContext as SetRoleContext)._role = this.identifier();
                    }
                    break;
                }
                this.state = 686;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 103) {
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
                localContext = new GrantContext(localContext);
                this.enterOuterAlt(localContext, 38);
                {
                this.state = 688;
                this.match(TrinoSqlParser.KW_GRANT);
                this.state = 699;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case TrinoSqlParser.KW_DELETE:
                case TrinoSqlParser.KW_INSERT:
                case TrinoSqlParser.KW_SELECT:
                case TrinoSqlParser.KW_UPDATE:
                    {
                    this.state = 689;
                    this.privilege();
                    this.state = 694;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 690;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 691;
                        this.privilege();
                        }
                        }
                        this.state = 696;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
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
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 701;
                this.match(TrinoSqlParser.KW_ON);
                this.state = 710;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 68, this.context) ) {
                case 1:
                    {
                    this.state = 703;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 66, this.context) ) {
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
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 212) {
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
                (localContext as GrantContext)._grantee = this.principal();
                this.state = 717;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 69, this.context) ) {
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
                localContext = new DenyContext(localContext);
                this.enterOuterAlt(localContext, 39);
                {
                this.state = 719;
                this.match(TrinoSqlParser.KW_DENY);
                this.state = 730;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case TrinoSqlParser.KW_DELETE:
                case TrinoSqlParser.KW_INSERT:
                case TrinoSqlParser.KW_SELECT:
                case TrinoSqlParser.KW_UPDATE:
                    {
                    this.state = 720;
                    this.privilege();
                    this.state = 725;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 721;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 722;
                        this.privilege();
                        }
                        }
                        this.state = 727;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
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
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 732;
                this.match(TrinoSqlParser.KW_ON);
                this.state = 741;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
                case 1:
                    {
                    this.state = 734;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 72, this.context) ) {
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
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 212) {
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
                (localContext as DenyContext)._grantee = this.principal();
                }
                break;
            case 40:
                localContext = new RevokeContext(localContext);
                this.enterOuterAlt(localContext, 40);
                {
                this.state = 746;
                this.match(TrinoSqlParser.KW_REVOKE);
                this.state = 750;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 91) {
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
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case TrinoSqlParser.KW_DELETE:
                case TrinoSqlParser.KW_INSERT:
                case TrinoSqlParser.KW_SELECT:
                case TrinoSqlParser.KW_UPDATE:
                    {
                    this.state = 752;
                    this.privilege();
                    this.state = 757;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 753;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 754;
                        this.privilege();
                        }
                        }
                        this.state = 759;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
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
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 764;
                this.match(TrinoSqlParser.KW_ON);
                this.state = 773;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 80, this.context) ) {
                case 1:
                    {
                    this.state = 766;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context) ) {
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
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 212) {
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
                (localContext as RevokeContext)._grantee = this.principal();
                }
                break;
            case 41:
                localContext = new ShowGrantsContext(localContext);
                this.enterOuterAlt(localContext, 41);
                {
                this.state = 777;
                this.match(TrinoSqlParser.KW_SHOW);
                this.state = 778;
                this.match(TrinoSqlParser.KW_GRANTS);
                this.state = 784;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 153) {
                    {
                    this.state = 779;
                    this.match(TrinoSqlParser.KW_ON);
                    this.state = 781;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 212) {
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
                localContext = new ExplainContext(localContext);
                this.enterOuterAlt(localContext, 42);
                {
                this.state = 786;
                this.match(TrinoSqlParser.KW_EXPLAIN);
                this.state = 788;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 83, this.context) ) {
                case 1:
                    {
                    this.state = 787;
                    this.match(TrinoSqlParser.KW_ANALYZE);
                    }
                    break;
                }
                this.state = 791;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 238) {
                    {
                    this.state = 790;
                    this.match(TrinoSqlParser.KW_VERBOSE);
                    }
                }

                this.state = 804;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 86, this.context) ) {
                case 1:
                    {
                    this.state = 793;
                    this.match(TrinoSqlParser.T__0);
                    this.state = 794;
                    this.explainOption();
                    this.state = 799;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 795;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 796;
                        this.explainOption();
                        }
                        }
                        this.state = 801;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
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
                localContext = new ShowCreateTableContext(localContext);
                this.enterOuterAlt(localContext, 43);
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
                localContext = new ShowCreateSchemaContext(localContext);
                this.enterOuterAlt(localContext, 44);
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
                localContext = new ShowCreateViewContext(localContext);
                this.enterOuterAlt(localContext, 45);
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
                localContext = new ShowCreateMaterializedViewContext(localContext);
                this.enterOuterAlt(localContext, 46);
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
                localContext = new ShowTablesContext(localContext);
                this.enterOuterAlt(localContext, 47);
                {
                this.state = 824;
                this.match(TrinoSqlParser.KW_SHOW);
                this.state = 825;
                this.match(TrinoSqlParser.KW_TABLES);
                this.state = 828;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 88 || _la === 103) {
                    {
                    this.state = 826;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 88 || _la === 103)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 827;
                    this.schemaName();
                    }
                }

                this.state = 836;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 122) {
                    {
                    this.state = 830;
                    this.match(TrinoSqlParser.KW_LIKE);
                    this.state = 831;
                    (localContext as ShowTablesContext)._pattern = this.string_();
                    this.state = 834;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 73) {
                        {
                        this.state = 832;
                        this.match(TrinoSqlParser.KW_ESCAPE);
                        this.state = 833;
                        (localContext as ShowTablesContext)._escape = this.string_();
                        }
                    }

                    }
                }

                }
                break;
            case 48:
                localContext = new ShowSchemasContext(localContext);
                this.enterOuterAlt(localContext, 48);
                {
                this.state = 838;
                this.match(TrinoSqlParser.KW_SHOW);
                this.state = 839;
                this.match(TrinoSqlParser.KW_SCHEMAS);
                this.state = 842;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 88 || _la === 103) {
                    {
                    this.state = 840;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 88 || _la === 103)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 841;
                    this.catalogName();
                    }
                }

                this.state = 850;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 122) {
                    {
                    this.state = 844;
                    this.match(TrinoSqlParser.KW_LIKE);
                    this.state = 845;
                    (localContext as ShowSchemasContext)._pattern = this.string_();
                    this.state = 848;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 73) {
                        {
                        this.state = 846;
                        this.match(TrinoSqlParser.KW_ESCAPE);
                        this.state = 847;
                        (localContext as ShowSchemasContext)._escape = this.string_();
                        }
                    }

                    }
                }

                }
                break;
            case 49:
                localContext = new ShowCatalogsContext(localContext);
                this.enterOuterAlt(localContext, 49);
                {
                this.state = 852;
                this.match(TrinoSqlParser.KW_SHOW);
                this.state = 853;
                this.match(TrinoSqlParser.KW_CATALOGS);
                this.state = 860;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 122) {
                    {
                    this.state = 854;
                    this.match(TrinoSqlParser.KW_LIKE);
                    this.state = 855;
                    (localContext as ShowCatalogsContext)._pattern = this.string_();
                    this.state = 858;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 73) {
                        {
                        this.state = 856;
                        this.match(TrinoSqlParser.KW_ESCAPE);
                        this.state = 857;
                        (localContext as ShowCatalogsContext)._escape = this.string_();
                        }
                    }

                    }
                }

                }
                break;
            case 50:
                localContext = new ShowColumnsContext(localContext);
                this.enterOuterAlt(localContext, 50);
                {
                this.state = 862;
                this.match(TrinoSqlParser.KW_SHOW);
                this.state = 863;
                this.match(TrinoSqlParser.KW_COLUMNS);
                this.state = 864;
                _la = this.tokenStream.LA(1);
                if(!(_la === 88 || _la === 103)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 866;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 95, this.context) ) {
                case 1:
                    {
                    this.state = 865;
                    this.tableOrViewName();
                    }
                    break;
                }
                this.state = 874;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 122) {
                    {
                    this.state = 868;
                    this.match(TrinoSqlParser.KW_LIKE);
                    this.state = 869;
                    (localContext as ShowColumnsContext)._pattern = this.string_();
                    this.state = 872;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 73) {
                        {
                        this.state = 870;
                        this.match(TrinoSqlParser.KW_ESCAPE);
                        this.state = 871;
                        (localContext as ShowColumnsContext)._escape = this.string_();
                        }
                    }

                    }
                }

                }
                break;
            case 51:
                localContext = new ShowStatsContext(localContext);
                this.enterOuterAlt(localContext, 51);
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
                localContext = new ShowStatsForQueryContext(localContext);
                this.enterOuterAlt(localContext, 52);
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
                localContext = new ShowRolesContext(localContext);
                this.enterOuterAlt(localContext, 53);
                {
                this.state = 887;
                this.match(TrinoSqlParser.KW_SHOW);
                this.state = 889;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 47) {
                    {
                    this.state = 888;
                    this.match(TrinoSqlParser.KW_CURRENT);
                    }
                }

                this.state = 891;
                this.match(TrinoSqlParser.KW_ROLES);
                this.state = 894;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 88 || _la === 103) {
                    {
                    this.state = 892;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 88 || _la === 103)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 893;
                    this.identifier();
                    }
                }

                }
                break;
            case 54:
                localContext = new ShowRoleGrantsContext(localContext);
                this.enterOuterAlt(localContext, 54);
                {
                this.state = 896;
                this.match(TrinoSqlParser.KW_SHOW);
                this.state = 897;
                this.match(TrinoSqlParser.KW_ROLE);
                this.state = 898;
                this.match(TrinoSqlParser.KW_GRANTS);
                this.state = 901;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 88 || _la === 103) {
                    {
                    this.state = 899;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 88 || _la === 103)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 900;
                    this.identifier();
                    }
                }

                }
                break;
            case 55:
                localContext = new ShowColumnsContext(localContext);
                this.enterOuterAlt(localContext, 55);
                {
                this.state = 903;
                this.match(TrinoSqlParser.KW_DESCRIBE);
                this.state = 904;
                this.tableOrViewName();
                }
                break;
            case 56:
                localContext = new ShowColumnsContext(localContext);
                this.enterOuterAlt(localContext, 56);
                {
                this.state = 905;
                this.match(TrinoSqlParser.KW_DESC);
                this.state = 906;
                this.tableOrViewName();
                }
                break;
            case 57:
                localContext = new ShowFunctionsContext(localContext);
                this.enterOuterAlt(localContext, 57);
                {
                this.state = 907;
                this.match(TrinoSqlParser.KW_SHOW);
                this.state = 908;
                this.match(TrinoSqlParser.KW_FUNCTIONS);
                this.state = 915;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 122) {
                    {
                    this.state = 909;
                    this.match(TrinoSqlParser.KW_LIKE);
                    this.state = 910;
                    (localContext as ShowFunctionsContext)._pattern = this.string_();
                    this.state = 913;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 73) {
                        {
                        this.state = 911;
                        this.match(TrinoSqlParser.KW_ESCAPE);
                        this.state = 912;
                        (localContext as ShowFunctionsContext)._escape = this.string_();
                        }
                    }

                    }
                }

                }
                break;
            case 58:
                localContext = new ShowSessionContext(localContext);
                this.enterOuterAlt(localContext, 58);
                {
                this.state = 917;
                this.match(TrinoSqlParser.KW_SHOW);
                this.state = 918;
                this.match(TrinoSqlParser.KW_SESSION);
                this.state = 925;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 122) {
                    {
                    this.state = 919;
                    this.match(TrinoSqlParser.KW_LIKE);
                    this.state = 920;
                    (localContext as ShowSessionContext)._pattern = this.string_();
                    this.state = 923;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 73) {
                        {
                        this.state = 921;
                        this.match(TrinoSqlParser.KW_ESCAPE);
                        this.state = 922;
                        (localContext as ShowSessionContext)._escape = this.string_();
                        }
                    }

                    }
                }

                }
                break;
            case 59:
                localContext = new SetSessionContext(localContext);
                this.enterOuterAlt(localContext, 59);
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
                localContext = new ResetSessionContext(localContext);
                this.enterOuterAlt(localContext, 60);
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
                localContext = new StartTransactionContext(localContext);
                this.enterOuterAlt(localContext, 61);
                {
                this.state = 936;
                this.match(TrinoSqlParser.KW_START);
                this.state = 937;
                this.match(TrinoSqlParser.KW_TRANSACTION);
                this.state = 946;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115 || _la === 177) {
                    {
                    this.state = 938;
                    this.transactionMode();
                    this.state = 943;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 939;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 940;
                        this.transactionMode();
                        }
                        }
                        this.state = 945;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                }
                break;
            case 62:
                localContext = new CommitContext(localContext);
                this.enterOuterAlt(localContext, 62);
                {
                this.state = 948;
                this.match(TrinoSqlParser.KW_COMMIT);
                this.state = 950;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 245) {
                    {
                    this.state = 949;
                    this.match(TrinoSqlParser.KW_WORK);
                    }
                }

                }
                break;
            case 63:
                localContext = new RollbackContext(localContext);
                this.enterOuterAlt(localContext, 63);
                {
                this.state = 952;
                this.match(TrinoSqlParser.KW_ROLLBACK);
                this.state = 954;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 245) {
                    {
                    this.state = 953;
                    this.match(TrinoSqlParser.KW_WORK);
                    }
                }

                }
                break;
            case 64:
                localContext = new PrepareContext(localContext);
                this.enterOuterAlt(localContext, 64);
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
                localContext = new DeallocateContext(localContext);
                this.enterOuterAlt(localContext, 65);
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
                localContext = new ExecuteContext(localContext);
                this.enterOuterAlt(localContext, 66);
                {
                this.state = 964;
                this.match(TrinoSqlParser.KW_EXECUTE);
                this.state = 965;
                this.identifier();
                this.state = 975;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 235) {
                    {
                    this.state = 966;
                    this.match(TrinoSqlParser.KW_USING);
                    this.state = 967;
                    this.expression();
                    this.state = 972;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 968;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 969;
                        this.expression();
                        }
                        }
                        this.state = 974;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                }
                break;
            case 67:
                localContext = new DescribeInputContext(localContext);
                this.enterOuterAlt(localContext, 67);
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
                localContext = new DescribeOutputContext(localContext);
                this.enterOuterAlt(localContext, 68);
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
                localContext = new SetPathContext(localContext);
                this.enterOuterAlt(localContext, 69);
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
                localContext = new SetTimeZoneContext(localContext);
                this.enterOuterAlt(localContext, 70);
                {
                this.state = 986;
                this.match(TrinoSqlParser.KW_SET);
                this.state = 987;
                this.match(TrinoSqlParser.KW_TIME);
                this.state = 988;
                this.match(TrinoSqlParser.KW_ZONE);
                this.state = 991;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 111, this.context) ) {
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
                localContext = new UpdateContext(localContext);
                this.enterOuterAlt(localContext, 71);
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 997;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 998;
                    this.updateAssignment();
                    }
                    }
                    this.state = 1003;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1006;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 241) {
                    {
                    this.state = 1004;
                    this.match(TrinoSqlParser.KW_WHERE);
                    this.state = 1005;
                    (localContext as UpdateContext)._where = this.booleanExpression(0);
                    }
                }

                }
                break;
            case 72:
                localContext = new MergeContext(localContext);
                this.enterOuterAlt(localContext, 72);
                {
                this.state = 1008;
                this.match(TrinoSqlParser.KW_MERGE);
                this.state = 1009;
                this.match(TrinoSqlParser.KW_INTO);
                this.state = 1010;
                this.tableName();
                this.state = 1015;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140015023) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 3192429231) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 3134381375) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3162472435) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 4286316499) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 4009750519) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 525170103) !== 0) || ((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & 15) !== 0)) {
                    {
                    this.state = 1012;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 26) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1021;
                    this.mergeCase();
                    }
                    }
                    this.state = 1024;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 240);
                }
                break;
            case 73:
                localContext = new ShowTableCommentContext(localContext);
                this.enterOuterAlt(localContext, 73);
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
                localContext = new ShowColumnCommentContext(localContext);
                this.enterOuterAlt(localContext, 74);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public query(): QueryContext {
        let localContext = new QueryContext(this.context, this.state);
        this.enterRule(localContext, 18, TrinoSqlParser.RULE_query);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1039;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 243) {
                {
                this.state = 1038;
                this.with_();
                }
            }

            this.state = 1041;
            this.queryNoWith();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public with_(): WithContext {
        let localContext = new WithContext(this.context, this.state);
        this.enterRule(localContext, 20, TrinoSqlParser.RULE_with);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1043;
            this.match(TrinoSqlParser.KW_WITH);
            this.state = 1045;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 178) {
                {
                this.state = 1044;
                this.match(TrinoSqlParser.KW_RECURSIVE);
                }
            }

            this.state = 1047;
            this.namedQuery();
            this.state = 1052;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 1048;
                this.match(TrinoSqlParser.T__2);
                this.state = 1049;
                this.namedQuery();
                }
                }
                this.state = 1054;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableElement(): TableElementContext {
        let localContext = new TableElementContext(this.context, this.state);
        this.enterRule(localContext, 22, TrinoSqlParser.RULE_tableElement);
        try {
            this.state = 1057;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
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
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1055;
                this.columnDefinition();
                }
                break;
            case TrinoSqlParser.KW_LIKE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1056;
                this.likeClause();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnDefinition(): ColumnDefinitionContext {
        let localContext = new ColumnDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 24, TrinoSqlParser.RULE_columnDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1059;
            this.columnNameCreate();
            this.state = 1060;
            this.type_(0);
            this.state = 1063;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 147) {
                {
                this.state = 1061;
                this.match(TrinoSqlParser.KW_NOT);
                this.state = 1062;
                this.match(TrinoSqlParser.KW_NULL);
                }
            }

            this.state = 1067;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 123, this.context) ) {
            case 1:
                {
                this.state = 1065;
                this.match(TrinoSqlParser.KW_COMMENT);
                this.state = 1066;
                this.string_();
                }
                break;
            }
            this.state = 1071;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 124, this.context) ) {
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public likeClause(): LikeClauseContext {
        let localContext = new LikeClauseContext(this.context, this.state);
        this.enterRule(localContext, 26, TrinoSqlParser.RULE_likeClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1073;
            this.match(TrinoSqlParser.KW_LIKE);
            this.state = 1074;
            this.tableName();
            this.state = 1077;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 75 || _la === 104) {
                {
                this.state = 1075;
                localContext._optionType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 75 || _la === 104)) {
                    localContext._optionType = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1076;
                this.match(TrinoSqlParser.KW_PROPERTIES);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public properties(): PropertiesContext {
        let localContext = new PropertiesContext(this.context, this.state);
        this.enterRule(localContext, 28, TrinoSqlParser.RULE_properties);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public propertyAssignments(): PropertyAssignmentsContext {
        let localContext = new PropertyAssignmentsContext(this.context, this.state);
        this.enterRule(localContext, 30, TrinoSqlParser.RULE_propertyAssignments);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1083;
            this.property();
            this.state = 1088;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 1084;
                this.match(TrinoSqlParser.T__2);
                this.state = 1085;
                this.property();
                }
                }
                this.state = 1090;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public property(): PropertyContext {
        let localContext = new PropertyContext(this.context, this.state);
        this.enterRule(localContext, 32, TrinoSqlParser.RULE_property);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public propertyValue(): PropertyValueContext {
        let localContext = new PropertyValueContext(this.context, this.state);
        this.enterRule(localContext, 34, TrinoSqlParser.RULE_propertyValue);
        try {
            this.state = 1097;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 127, this.context) ) {
            case 1:
                localContext = new DefaultPropertyValueContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1095;
                this.match(TrinoSqlParser.KW_DEFAULT);
                }
                break;
            case 2:
                localContext = new NonDefaultPropertyValueContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1096;
                this.expression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public queryNoWith(): QueryNoWithContext {
        let localContext = new QueryNoWithContext(this.context, this.state);
        this.enterRule(localContext, 36, TrinoSqlParser.RULE_queryNoWith);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1099;
            this.queryTerm(0);
            this.state = 1110;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 158) {
                {
                this.state = 1100;
                this.match(TrinoSqlParser.KW_ORDER);
                this.state = 1101;
                this.match(TrinoSqlParser.KW_BY);
                this.state = 1102;
                this.sortItem();
                this.state = 1107;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 1103;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 1104;
                    this.sortItem();
                    }
                    }
                    this.state = 1109;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1117;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 151) {
                {
                this.state = 1112;
                this.match(TrinoSqlParser.KW_OFFSET);
                this.state = 1113;
                localContext._offset = this.rowCount();
                this.state = 1115;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 192 || _la === 193) {
                    {
                    this.state = 1114;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 192 || _la === 193)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                }
            }

            this.state = 1132;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case TrinoSqlParser.KW_LIMIT:
                {
                {
                this.state = 1119;
                this.match(TrinoSqlParser.KW_LIMIT);
                this.state = 1120;
                localContext._limit = this.limitRowCount();
                }
                }
                break;
            case TrinoSqlParser.KW_FETCH:
                {
                {
                this.state = 1121;
                this.match(TrinoSqlParser.KW_FETCH);
                this.state = 1122;
                _la = this.tokenStream.LA(1);
                if(!(_la === 84 || _la === 139)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1124;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 261 || _la === 265) {
                    {
                    this.state = 1123;
                    localContext._fetchFirst = this.rowCount();
                    }
                }

                this.state = 1126;
                _la = this.tokenStream.LA(1);
                if(!(_la === 192 || _la === 193)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1130;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
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
                    throw new antlr.NoViableAltException(this);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public limitRowCount(): LimitRowCountContext {
        let localContext = new LimitRowCountContext(this.context, this.state);
        this.enterRule(localContext, 38, TrinoSqlParser.RULE_limitRowCount);
        try {
            this.state = 1136;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case TrinoSqlParser.KW_ALL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1134;
                this.match(TrinoSqlParser.KW_ALL);
                }
                break;
            case TrinoSqlParser.QUESTION_MARK:
            case TrinoSqlParser.INTEGER_VALUE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1135;
                this.rowCount();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rowCount(): RowCountContext {
        let localContext = new RowCountContext(this.context, this.state);
        this.enterRule(localContext, 40, TrinoSqlParser.RULE_rowCount);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1138;
            _la = this.tokenStream.LA(1);
            if(!(_la === 261 || _la === 265)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public queryTerm(): QueryTermContext;
    public queryTerm(_p: number): QueryTermContext;
    public queryTerm(_p?: number): QueryTermContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new QueryTermContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 42;
        this.enterRecursionRule(localContext, 42, TrinoSqlParser.RULE_queryTerm, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            localContext = new QueryTermDefaultContext(localContext);
            this.context = localContext;
            previousContext = localContext;

            this.state = 1141;
            this.queryPrimary();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1157;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 139, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1155;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 138, this.context) ) {
                    case 1:
                        {
                        localContext = new SetOperationContext(new QueryTermContext(parentContext, parentState));
                        (localContext as SetOperationContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, TrinoSqlParser.RULE_queryTerm);
                        this.state = 1143;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1144;
                        (localContext as SetOperationContext)._operator = this.match(TrinoSqlParser.KW_INTERSECT);
                        this.state = 1146;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 20 || _la === 66) {
                            {
                            this.state = 1145;
                            this.setQuantifier();
                            }
                        }

                        this.state = 1148;
                        (localContext as SetOperationContext)._right = this.queryTerm(3);
                        }
                        break;
                    case 2:
                        {
                        localContext = new SetOperationContext(new QueryTermContext(parentContext, parentState));
                        (localContext as SetOperationContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, TrinoSqlParser.RULE_queryTerm);
                        this.state = 1149;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 1150;
                        (localContext as SetOperationContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 74 || _la === 229)) {
                            (localContext as SetOperationContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1152;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 20 || _la === 66) {
                            {
                            this.state = 1151;
                            this.setQuantifier();
                            }
                        }

                        this.state = 1154;
                        (localContext as SetOperationContext)._right = this.queryTerm(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 1159;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 139, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public queryPrimary(): QueryPrimaryContext {
        let localContext = new QueryPrimaryContext(this.context, this.state);
        this.enterRule(localContext, 44, TrinoSqlParser.RULE_queryPrimary);
        try {
            let alternative: number;
            this.state = 1176;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case TrinoSqlParser.KW_SELECT:
                localContext = new QueryPrimaryDefaultContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1160;
                this.querySpecification();
                }
                break;
            case TrinoSqlParser.KW_TABLE:
                localContext = new TableContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1161;
                this.match(TrinoSqlParser.KW_TABLE);
                this.state = 1162;
                this.tableName();
                }
                break;
            case TrinoSqlParser.KW_VALUES:
                localContext = new InlineTableContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1163;
                this.match(TrinoSqlParser.KW_VALUES);
                this.state = 1164;
                this.expression();
                this.state = 1169;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 140, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
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
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 140, this.context);
                }
                }
                break;
            case TrinoSqlParser.T__0:
                localContext = new SubqueryContext(localContext);
                this.enterOuterAlt(localContext, 4);
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
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sortItem(): SortItemContext {
        let localContext = new SortItemContext(this.context, this.state);
        this.enterRule(localContext, 46, TrinoSqlParser.RULE_sortItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1180;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 142, this.context) ) {
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
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 143, this.context) ) {
            case 1:
                {
                this.state = 1182;
                localContext._ordering = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 27 || _la === 63)) {
                    localContext._ordering = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 1187;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 150) {
                {
                this.state = 1185;
                this.match(TrinoSqlParser.KW_NULLS);
                this.state = 1186;
                localContext._nullOrdering = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 84 || _la === 118)) {
                    localContext._nullOrdering = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public querySpecification(): QuerySpecificationContext {
        let localContext = new QuerySpecificationContext(this.context, this.state);
        this.enterRule(localContext, 48, TrinoSqlParser.RULE_querySpecification);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1189;
            this.match(TrinoSqlParser.KW_SELECT);
            this.state = 1191;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 145, this.context) ) {
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
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 146, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 146, this.context);
            }
            this.state = 1210;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 148, this.context) ) {
            case 1:
                {
                this.state = 1201;
                this.match(TrinoSqlParser.KW_FROM);
                this.state = 1202;
                this.relation(0);
                this.state = 1207;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 147, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
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
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 147, this.context);
                }
                }
                break;
            }
            this.state = 1214;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 149, this.context) ) {
            case 1:
                {
                this.state = 1212;
                this.match(TrinoSqlParser.KW_WHERE);
                this.state = 1213;
                localContext._where = this.booleanExpression(0);
                }
                break;
            }
            this.state = 1219;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 150, this.context) ) {
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
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 151, this.context) ) {
            case 1:
                {
                this.state = 1221;
                this.match(TrinoSqlParser.KW_HAVING);
                this.state = 1222;
                localContext._having = this.booleanExpression(0);
                }
                break;
            }
            this.state = 1234;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 153, this.context) ) {
            case 1:
                {
                this.state = 1225;
                this.match(TrinoSqlParser.KW_WINDOW);
                this.state = 1226;
                this.windowDefinition();
                this.state = 1231;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 152, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
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
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 152, this.context);
                }
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupBy(): GroupByContext {
        let localContext = new GroupByContext(this.context, this.state);
        this.enterRule(localContext, 50, TrinoSqlParser.RULE_groupBy);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1237;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 154, this.context) ) {
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
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 155, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 155, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupingElement(): GroupingElementContext {
        let localContext = new GroupingElementContext(this.context, this.state);
        this.enterRule(localContext, 52, TrinoSqlParser.RULE_groupingElement);
        let _la: number;
        try {
            this.state = 1287;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 161, this.context) ) {
            case 1:
                localContext = new SingleGroupingSetContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1247;
                this.groupingSet();
                }
                break;
            case 2:
                localContext = new RollupContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1248;
                this.match(TrinoSqlParser.KW_ROLLUP);
                this.state = 1249;
                this.match(TrinoSqlParser.T__0);
                this.state = 1258;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757954) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1476117503) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2120217677) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4252345787) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 1325399551) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3153981439) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4286054271) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 3237637037) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2047) !== 0)) {
                    {
                    this.state = 1250;
                    this.groupingTerm();
                    this.state = 1255;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 1251;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 1252;
                        this.groupingTerm();
                        }
                        }
                        this.state = 1257;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1260;
                this.match(TrinoSqlParser.T__1);
                }
                break;
            case 3:
                localContext = new CubeContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1261;
                this.match(TrinoSqlParser.KW_CUBE);
                this.state = 1262;
                this.match(TrinoSqlParser.T__0);
                this.state = 1271;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757954) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1476117503) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2120217677) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4252345787) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 1325399551) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3153981439) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4286054271) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 3237637037) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2047) !== 0)) {
                    {
                    this.state = 1263;
                    this.groupingTerm();
                    this.state = 1268;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 1264;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 1265;
                        this.groupingTerm();
                        }
                        }
                        this.state = 1270;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1273;
                this.match(TrinoSqlParser.T__1);
                }
                break;
            case 4:
                localContext = new MultipleGroupingSetsContext(localContext);
                this.enterOuterAlt(localContext, 4);
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 1278;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 1279;
                    this.groupingSet();
                    }
                    }
                    this.state = 1284;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1285;
                this.match(TrinoSqlParser.T__1);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupingSet(): GroupingSetContext {
        let localContext = new GroupingSetContext(this.context, this.state);
        this.enterRule(localContext, 54, TrinoSqlParser.RULE_groupingSet);
        let _la: number;
        try {
            this.state = 1302;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 164, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1289;
                this.match(TrinoSqlParser.T__0);
                this.state = 1298;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757954) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1476117503) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2120217677) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4252345787) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 1325399551) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3153981439) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4286054271) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 3237637037) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2047) !== 0)) {
                    {
                    this.state = 1290;
                    this.groupingTerm();
                    this.state = 1295;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 1291;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 1292;
                        this.groupingTerm();
                        }
                        }
                        this.state = 1297;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1300;
                this.match(TrinoSqlParser.T__1);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1301;
                this.groupingTerm();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupingTerm(): GroupingTermContext {
        let localContext = new GroupingTermContext(this.context, this.state);
        this.enterRule(localContext, 56, TrinoSqlParser.RULE_groupingTerm);
        try {
            this.state = 1306;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 165, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1304;
                this.columnName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1305;
                this.expression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowDefinition(): WindowDefinitionContext {
        let localContext = new WindowDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 58, TrinoSqlParser.RULE_windowDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1308;
            localContext._name = this.identifier();
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowSpecification(): WindowSpecificationContext {
        let localContext = new WindowSpecificationContext(this.context, this.state);
        this.enterRule(localContext, 60, TrinoSqlParser.RULE_windowSpecification);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1315;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 166, this.context) ) {
            case 1:
                {
                this.state = 1314;
                localContext._existingWindowName = this.identifier();
                }
                break;
            }
            this.state = 1327;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 163) {
                {
                this.state = 1317;
                this.match(TrinoSqlParser.KW_PARTITION);
                this.state = 1318;
                this.match(TrinoSqlParser.KW_BY);
                this.state = 1319;
                localContext._expression = this.expression();
                localContext._partition.push(localContext._expression);
                this.state = 1324;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 1320;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 1321;
                    localContext._expression = this.expression();
                    localContext._partition.push(localContext._expression);
                    }
                    }
                    this.state = 1326;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1339;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 158) {
                {
                this.state = 1329;
                this.match(TrinoSqlParser.KW_ORDER);
                this.state = 1330;
                this.match(TrinoSqlParser.KW_BY);
                this.state = 1331;
                this.sortItem();
                this.state = 1336;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 1332;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 1333;
                    this.sortItem();
                    }
                    }
                    this.state = 1338;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1342;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 98 || _la === 134 || _la === 176 || _la === 193) {
                {
                this.state = 1341;
                this.windowFrame();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namedQuery(): NamedQueryContext {
        let localContext = new NamedQueryContext(this.context, this.state);
        this.enterRule(localContext, 62, TrinoSqlParser.RULE_namedQuery);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1344;
            localContext._name = this.identifier();
            this.state = 1346;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public setQuantifier(): SetQuantifierContext {
        let localContext = new SetQuantifierContext(this.context, this.state);
        this.enterRule(localContext, 64, TrinoSqlParser.RULE_setQuantifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1353;
            _la = this.tokenStream.LA(1);
            if(!(_la === 20 || _la === 66)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectItem(): SelectItemContext {
        let localContext = new SelectItemContext(this.context, this.state);
        this.enterRule(localContext, 66, TrinoSqlParser.RULE_selectItem);
        let _la: number;
        try {
            this.state = 1373;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 177, this.context) ) {
            case 1:
                localContext = new SelectSingleContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1357;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 173, this.context) ) {
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
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 175, this.context) ) {
                case 1:
                    {
                    this.state = 1360;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 26) {
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
                localContext = new SelectAllContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1365;
                this.primaryExpression(0);
                this.state = 1366;
                this.match(TrinoSqlParser.T__3);
                this.state = 1367;
                this.match(TrinoSqlParser.ASTERISK);
                this.state = 1370;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 176, this.context) ) {
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
                localContext = new SelectAllContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1372;
                this.match(TrinoSqlParser.ASTERISK);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public relation(): RelationContext;
    public relation(_p: number): RelationContext;
    public relation(_p?: number): RelationContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new RelationContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 68;
        this.enterRecursionRule(localContext, 68, TrinoSqlParser.RULE_relation, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            localContext = new RelationDefaultContext(localContext);
            this.context = localContext;
            previousContext = localContext;

            this.state = 1376;
            this.sampledRelation();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1396;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 179, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new JoinRelationContext(new RelationContext(parentContext, parentState));
                    (localContext as JoinRelationContext)._left = previousContext;
                    this.pushNewRecursionContext(localContext, _startState, TrinoSqlParser.RULE_relation);
                    this.state = 1378;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 1392;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case TrinoSqlParser.KW_CROSS:
                        {
                        this.state = 1379;
                        this.match(TrinoSqlParser.KW_CROSS);
                        this.state = 1380;
                        this.match(TrinoSqlParser.KW_JOIN);
                        this.state = 1381;
                        (localContext as JoinRelationContext)._right = this.sampledRelation();
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
                        (localContext as JoinRelationContext)._rightRelation = this.relation(0);
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
                        (localContext as JoinRelationContext)._right = this.sampledRelation();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    }
                }
                this.state = 1398;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 179, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public joinType(): JoinTypeContext {
        let localContext = new JoinTypeContext(this.context, this.state);
        this.enterRule(localContext, 70, TrinoSqlParser.RULE_joinType);
        let _la: number;
        try {
            this.state = 1414;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case TrinoSqlParser.KW_INNER:
            case TrinoSqlParser.KW_JOIN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1400;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 106) {
                    {
                    this.state = 1399;
                    this.match(TrinoSqlParser.KW_INNER);
                    }
                }

                }
                break;
            case TrinoSqlParser.KW_LEFT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1402;
                this.match(TrinoSqlParser.KW_LEFT);
                this.state = 1404;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 160) {
                    {
                    this.state = 1403;
                    this.match(TrinoSqlParser.KW_OUTER);
                    }
                }

                }
                break;
            case TrinoSqlParser.KW_RIGHT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1406;
                this.match(TrinoSqlParser.KW_RIGHT);
                this.state = 1408;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 160) {
                    {
                    this.state = 1407;
                    this.match(TrinoSqlParser.KW_OUTER);
                    }
                }

                }
                break;
            case TrinoSqlParser.KW_FULL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1410;
                this.match(TrinoSqlParser.KW_FULL);
                this.state = 1412;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 160) {
                    {
                    this.state = 1411;
                    this.match(TrinoSqlParser.KW_OUTER);
                    }
                }

                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public joinCriteria(): JoinCriteriaContext {
        let localContext = new JoinCriteriaContext(this.context, this.state);
        this.enterRule(localContext, 72, TrinoSqlParser.RULE_joinCriteria);
        let _la: number;
        try {
            this.state = 1430;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case TrinoSqlParser.KW_ON:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1416;
                this.match(TrinoSqlParser.KW_ON);
                this.state = 1417;
                this.booleanExpression(0);
                }
                break;
            case TrinoSqlParser.KW_USING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1418;
                this.match(TrinoSqlParser.KW_USING);
                this.state = 1419;
                this.match(TrinoSqlParser.T__0);
                this.state = 1420;
                this.identifier();
                this.state = 1425;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 1421;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 1422;
                    this.identifier();
                    }
                    }
                    this.state = 1427;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1428;
                this.match(TrinoSqlParser.T__1);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sampledRelation(): SampledRelationContext {
        let localContext = new SampledRelationContext(this.context, this.state);
        this.enterRule(localContext, 74, TrinoSqlParser.RULE_sampledRelation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1432;
            this.patternRecognition();
            this.state = 1439;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 187, this.context) ) {
            case 1:
                {
                this.state = 1433;
                this.match(TrinoSqlParser.KW_TABLESAMPLE);
                this.state = 1434;
                this.sampleType();
                this.state = 1435;
                this.match(TrinoSqlParser.T__0);
                this.state = 1436;
                localContext._percentage = this.expression();
                this.state = 1437;
                this.match(TrinoSqlParser.T__1);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sampleType(): SampleTypeContext {
        let localContext = new SampleTypeContext(this.context, this.state);
        this.enterRule(localContext, 76, TrinoSqlParser.RULE_sampleType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1441;
            _la = this.tokenStream.LA(1);
            if(!(_la === 30 || _la === 211)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public patternRecognition(): PatternRecognitionContext {
        let localContext = new PatternRecognitionContext(this.context, this.state);
        this.enterRule(localContext, 78, TrinoSqlParser.RULE_patternRecognition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1443;
            this.aliasedRelation();
            this.state = 1526;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 203, this.context) ) {
            case 1:
                {
                this.state = 1444;
                this.match(TrinoSqlParser.KW_MATCH_RECOGNIZE);
                this.state = 1445;
                this.match(TrinoSqlParser.T__0);
                this.state = 1456;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 163) {
                    {
                    this.state = 1446;
                    this.match(TrinoSqlParser.KW_PARTITION);
                    this.state = 1447;
                    this.match(TrinoSqlParser.KW_BY);
                    this.state = 1448;
                    localContext._expression = this.expression();
                    localContext._partition.push(localContext._expression);
                    this.state = 1453;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 1449;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 1450;
                        localContext._expression = this.expression();
                        localContext._partition.push(localContext._expression);
                        }
                        }
                        this.state = 1455;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1468;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 158) {
                    {
                    this.state = 1458;
                    this.match(TrinoSqlParser.KW_ORDER);
                    this.state = 1459;
                    this.match(TrinoSqlParser.KW_BY);
                    this.state = 1460;
                    this.sortItem();
                    this.state = 1465;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 1461;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 1462;
                        this.sortItem();
                        }
                        }
                        this.state = 1467;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1479;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 134) {
                    {
                    this.state = 1470;
                    this.match(TrinoSqlParser.KW_MEASURES);
                    this.state = 1471;
                    this.measureDefinition();
                    this.state = 1476;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 1472;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 1473;
                        this.measureDefinition();
                        }
                        }
                        this.state = 1478;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1482;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 20 || _la === 154) {
                    {
                    this.state = 1481;
                    this.rowsPerMatch();
                    }
                }

                this.state = 1487;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 105 || _la === 199) {
                    {
                    this.state = 1489;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 105 || _la === 199)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 209) {
                    {
                    this.state = 1496;
                    this.match(TrinoSqlParser.KW_SUBSET);
                    this.state = 1497;
                    this.subsetDefinition();
                    this.state = 1502;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 1498;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 1499;
                        this.subsetDefinition();
                        }
                        }
                        this.state = 1504;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1507;
                this.match(TrinoSqlParser.KW_DEFINE);
                this.state = 1508;
                this.variableDefinition();
                this.state = 1513;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 1509;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 1510;
                    this.variableDefinition();
                    }
                    }
                    this.state = 1515;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1516;
                this.match(TrinoSqlParser.T__1);
                this.state = 1524;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 202, this.context) ) {
                case 1:
                    {
                    this.state = 1518;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 26) {
                        {
                        this.state = 1517;
                        this.match(TrinoSqlParser.KW_AS);
                        }
                    }

                    this.state = 1520;
                    this.identifier();
                    this.state = 1522;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 201, this.context) ) {
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public measureDefinition(): MeasureDefinitionContext {
        let localContext = new MeasureDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 80, TrinoSqlParser.RULE_measureDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rowsPerMatch(): RowsPerMatchContext {
        let localContext = new RowsPerMatchContext(this.context, this.state);
        this.enterRule(localContext, 82, TrinoSqlParser.RULE_rowsPerMatch);
        let _la: number;
        try {
            this.state = 1543;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case TrinoSqlParser.KW_ONE:
                this.enterOuterAlt(localContext, 1);
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
                this.enterOuterAlt(localContext, 2);
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 152 || _la === 205 || _la === 243) {
                    {
                    this.state = 1540;
                    this.emptyMatchHandling();
                    }
                }

                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public emptyMatchHandling(): EmptyMatchHandlingContext {
        let localContext = new EmptyMatchHandlingContext(this.context, this.state);
        this.enterRule(localContext, 84, TrinoSqlParser.RULE_emptyMatchHandling);
        try {
            this.state = 1554;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case TrinoSqlParser.KW_SHOW:
                this.enterOuterAlt(localContext, 1);
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
                this.enterOuterAlt(localContext, 2);
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
                this.enterOuterAlt(localContext, 3);
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
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public skipTo(): SkipToContext {
        let localContext = new SkipToContext(this.context, this.state);
        this.enterRule(localContext, 86, TrinoSqlParser.RULE_skipTo);
        try {
            this.state = 1575;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 207, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
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
                this.enterOuterAlt(localContext, 2);
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
                this.enterOuterAlt(localContext, 3);
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
                this.enterOuterAlt(localContext, 4);
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
                this.enterOuterAlt(localContext, 5);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public subsetDefinition(): SubsetDefinitionContext {
        let localContext = new SubsetDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 88, TrinoSqlParser.RULE_subsetDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1577;
            localContext._name = this.identifier();
            this.state = 1578;
            this.match(TrinoSqlParser.EQ);
            this.state = 1579;
            this.match(TrinoSqlParser.T__0);
            this.state = 1580;
            localContext._identifier = this.identifier();
            localContext._union.push(localContext._identifier);
            this.state = 1585;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 1581;
                this.match(TrinoSqlParser.T__2);
                this.state = 1582;
                localContext._identifier = this.identifier();
                localContext._union.push(localContext._identifier);
                }
                }
                this.state = 1587;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1588;
            this.match(TrinoSqlParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDefinition(): VariableDefinitionContext {
        let localContext = new VariableDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 90, TrinoSqlParser.RULE_variableDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aliasedRelation(): AliasedRelationContext {
        let localContext = new AliasedRelationContext(this.context, this.state);
        this.enterRule(localContext, 92, TrinoSqlParser.RULE_aliasedRelation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1594;
            this.relationPrimary();
            this.state = 1602;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 211, this.context) ) {
            case 1:
                {
                this.state = 1596;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 26) {
                    {
                    this.state = 1595;
                    this.match(TrinoSqlParser.KW_AS);
                    }
                }

                this.state = 1598;
                this.identifier();
                this.state = 1600;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 210, this.context) ) {
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnListCreate(): ColumnListCreateContext {
        let localContext = new ColumnListCreateContext(this.context, this.state);
        this.enterRule(localContext, 94, TrinoSqlParser.RULE_columnListCreate);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1604;
            this.match(TrinoSqlParser.T__0);
            this.state = 1605;
            this.columnNameCreate();
            this.state = 1610;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 1606;
                this.match(TrinoSqlParser.T__2);
                this.state = 1607;
                this.columnNameCreate();
                }
                }
                this.state = 1612;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1613;
            this.match(TrinoSqlParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnList(): ColumnListContext {
        let localContext = new ColumnListContext(this.context, this.state);
        this.enterRule(localContext, 96, TrinoSqlParser.RULE_columnList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1615;
            this.match(TrinoSqlParser.T__0);
            this.state = 1616;
            this.columnName();
            this.state = 1621;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 1617;
                this.match(TrinoSqlParser.T__2);
                this.state = 1618;
                this.columnName();
                }
                }
                this.state = 1623;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1624;
            this.match(TrinoSqlParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnAliases(): ColumnAliasesContext {
        let localContext = new ColumnAliasesContext(this.context, this.state);
        this.enterRule(localContext, 98, TrinoSqlParser.RULE_columnAliases);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1626;
            this.match(TrinoSqlParser.T__0);
            this.state = 1627;
            this.identifier();
            this.state = 1632;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 1628;
                this.match(TrinoSqlParser.T__2);
                this.state = 1629;
                this.identifier();
                }
                }
                this.state = 1634;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1635;
            this.match(TrinoSqlParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relationPrimary(): RelationPrimaryContext {
        let localContext = new RelationPrimaryContext(this.context, this.state);
        this.enterRule(localContext, 100, TrinoSqlParser.RULE_relationPrimary);
        let _la: number;
        try {
            this.state = 1666;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 217, this.context) ) {
            case 1:
                localContext = new TableOrViewRelationContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1637;
                this.tableOrViewName();
                }
                break;
            case 2:
                localContext = new SubqueryRelationContext(localContext);
                this.enterOuterAlt(localContext, 2);
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
                localContext = new UnnestContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1642;
                this.match(TrinoSqlParser.KW_UNNEST);
                this.state = 1643;
                this.match(TrinoSqlParser.T__0);
                this.state = 1644;
                this.expression();
                this.state = 1649;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 1645;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 1646;
                    this.expression();
                    }
                    }
                    this.state = 1651;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1652;
                this.match(TrinoSqlParser.T__1);
                this.state = 1655;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 216, this.context) ) {
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
                localContext = new LateralContext(localContext);
                this.enterOuterAlt(localContext, 4);
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
                localContext = new ParenthesizedRelationContext(localContext);
                this.enterOuterAlt(localContext, 5);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 102, TrinoSqlParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1668;
            this.booleanExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public booleanExpression(): BooleanExpressionContext;
    public booleanExpression(_p: number): BooleanExpressionContext;
    public booleanExpression(_p?: number): BooleanExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new BooleanExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 104;
        this.enterRecursionRule(localContext, 104, TrinoSqlParser.RULE_booleanExpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1677;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
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
                localContext = new PredicatedContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1671;
                (localContext as PredicatedContext)._valueExpression = this.valueExpression(0);
                this.state = 1673;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 218, this.context) ) {
                case 1:
                    {
                    this.state = 1672;
                    this.predicate((localContext as PredicatedContext)._valueExpression);
                    }
                    break;
                }
                }
                break;
            case TrinoSqlParser.KW_NOT:
                {
                localContext = new LogicalNotContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1675;
                this.match(TrinoSqlParser.KW_NOT);
                this.state = 1676;
                this.booleanExpression(3);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1687;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 221, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1685;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 220, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, TrinoSqlParser.RULE_booleanExpression);
                        this.state = 1679;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1680;
                        (localContext as LogicalBinaryContext)._operator = this.match(TrinoSqlParser.KW_AND);
                        this.state = 1681;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(3);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, TrinoSqlParser.RULE_booleanExpression);
                        this.state = 1682;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 1683;
                        (localContext as LogicalBinaryContext)._operator = this.match(TrinoSqlParser.KW_OR);
                        this.state = 1684;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 1689;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 221, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public predicate(value: ParserRuleContext): PredicateContext {
        let localContext = new PredicateContext(this.context, this.state, value);
        this.enterRule(localContext, 106, TrinoSqlParser.RULE_predicate);
        let _la: number;
        try {
            this.state = 1751;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 230, this.context) ) {
            case 1:
                localContext = new ComparisonContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1690;
                this.comparisonOperator();
                this.state = 1691;
                (localContext as ComparisonContext)._right = this.valueExpression(0);
                }
                break;
            case 2:
                localContext = new QuantifiedComparisonContext(localContext);
                this.enterOuterAlt(localContext, 2);
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
                localContext = new BetweenContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1700;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 1699;
                    this.match(TrinoSqlParser.KW_NOT);
                    }
                }

                this.state = 1702;
                this.match(TrinoSqlParser.KW_BETWEEN);
                this.state = 1703;
                (localContext as BetweenContext)._lower = this.valueExpression(0);
                this.state = 1704;
                this.match(TrinoSqlParser.KW_AND);
                this.state = 1705;
                (localContext as BetweenContext)._upper = this.valueExpression(0);
                }
                break;
            case 4:
                localContext = new InListContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1708;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 1713;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 1714;
                    this.expression();
                    }
                    }
                    this.state = 1719;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1720;
                this.match(TrinoSqlParser.T__1);
                }
                break;
            case 5:
                localContext = new InSubqueryContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1723;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
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
                localContext = new LikeContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1731;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 1730;
                    this.match(TrinoSqlParser.KW_NOT);
                    }
                }

                this.state = 1733;
                this.match(TrinoSqlParser.KW_LIKE);
                this.state = 1734;
                (localContext as LikeContext)._pattern = this.valueExpression(0);
                this.state = 1737;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 227, this.context) ) {
                case 1:
                    {
                    this.state = 1735;
                    this.match(TrinoSqlParser.KW_ESCAPE);
                    this.state = 1736;
                    (localContext as LikeContext)._escape = this.valueExpression(0);
                    }
                    break;
                }
                }
                break;
            case 7:
                localContext = new NullPredicateContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1739;
                this.match(TrinoSqlParser.KW_IS);
                this.state = 1741;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
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
                localContext = new DistinctFromContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1744;
                this.match(TrinoSqlParser.KW_IS);
                this.state = 1746;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
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
                (localContext as DistinctFromContext)._right = this.valueExpression(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public valueExpression(): ValueExpressionContext;
    public valueExpression(_p: number): ValueExpressionContext;
    public valueExpression(_p?: number): ValueExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ValueExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 108;
        this.enterRecursionRule(localContext, 108, TrinoSqlParser.RULE_valueExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1757;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 231, this.context) ) {
            case 1:
                {
                localContext = new ValueExpressionDefaultContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1754;
                this.primaryExpression(0);
                }
                break;
            case 2:
                {
                localContext = new ArithmeticUnaryContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1755;
                (localContext as ArithmeticUnaryContext)._operator = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 255 || _la === 256)) {
                    (localContext as ArithmeticUnaryContext)._operator = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1756;
                this.valueExpression(4);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1773;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 233, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1771;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 232, this.context) ) {
                    case 1:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, TrinoSqlParser.RULE_valueExpression);
                        this.state = 1759;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1760;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 257)) & ~0x1F) === 0 && ((1 << (_la - 257)) & 7) !== 0))) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1761;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, TrinoSqlParser.RULE_valueExpression);
                        this.state = 1762;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1763;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 255 || _la === 256)) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1764;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(3);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ConcatenationContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ConcatenationContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, TrinoSqlParser.RULE_valueExpression);
                        this.state = 1765;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 1766;
                        this.match(TrinoSqlParser.CONCAT);
                        this.state = 1767;
                        (localContext as ConcatenationContext)._right = this.valueExpression(2);
                        }
                        break;
                    case 4:
                        {
                        localContext = new AtTimeZoneContext(new ValueExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, TrinoSqlParser.RULE_valueExpression);
                        this.state = 1768;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 233, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public primaryExpression(): PrimaryExpressionContext;
    public primaryExpression(_p: number): PrimaryExpressionContext;
    public primaryExpression(_p?: number): PrimaryExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new PrimaryExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 110;
        this.enterRecursionRule(localContext, 110, TrinoSqlParser.RULE_primaryExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2025;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 263, this.context) ) {
            case 1:
                {
                localContext = new NullLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1777;
                this.match(TrinoSqlParser.KW_NULL);
                }
                break;
            case 2:
                {
                localContext = new IntervalLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1778;
                this.interval();
                }
                break;
            case 3:
                {
                localContext = new TypeConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1779;
                this.identifier();
                this.state = 1780;
                this.string_();
                }
                break;
            case 4:
                {
                localContext = new TypeConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1782;
                this.match(TrinoSqlParser.KW_DOUBLE);
                this.state = 1783;
                this.match(TrinoSqlParser.KW_PRECISION);
                this.state = 1784;
                this.string_();
                }
                break;
            case 5:
                {
                localContext = new NumericLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1785;
                this.number_();
                }
                break;
            case 6:
                {
                localContext = new BooleanLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1786;
                this.booleanValue();
                }
                break;
            case 7:
                {
                localContext = new StringLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1787;
                this.string_();
                }
                break;
            case 8:
                {
                localContext = new BinaryLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1788;
                this.match(TrinoSqlParser.BINARY_LITERAL);
                }
                break;
            case 9:
                {
                localContext = new ParameterContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1789;
                this.match(TrinoSqlParser.QUESTION_MARK);
                }
                break;
            case 10:
                {
                localContext = new PositionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
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
                localContext = new RowConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1797;
                this.match(TrinoSqlParser.T__0);
                this.state = 1798;
                this.expression();
                this.state = 1801;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 3);
                this.state = 1805;
                this.match(TrinoSqlParser.T__1);
                }
                break;
            case 12:
                {
                localContext = new RowConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1807;
                this.match(TrinoSqlParser.KW_ROW);
                this.state = 1808;
                this.match(TrinoSqlParser.T__0);
                this.state = 1809;
                this.expression();
                this.state = 1814;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 1810;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 1811;
                    this.expression();
                    }
                    }
                    this.state = 1816;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1817;
                this.match(TrinoSqlParser.T__1);
                }
                break;
            case 13:
                {
                localContext = new FunctionCallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1819;
                this.functionName();
                this.state = 1820;
                this.match(TrinoSqlParser.T__0);
                this.state = 1821;
                this.match(TrinoSqlParser.ASTERISK);
                this.state = 1822;
                this.match(TrinoSqlParser.T__1);
                this.state = 1824;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 236, this.context) ) {
                case 1:
                    {
                    this.state = 1823;
                    this.filter();
                    }
                    break;
                }
                this.state = 1827;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 237, this.context) ) {
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
                localContext = new FunctionCallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1830;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 238, this.context) ) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757954) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1476117503) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2120217679) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4252345787) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 1325399551) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3153981439) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4286054271) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 3237637037) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2047) !== 0)) {
                    {
                    this.state = 1835;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 239, this.context) ) {
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
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 1838;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 1839;
                        this.expression();
                        }
                        }
                        this.state = 1844;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1857;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 158) {
                    {
                    this.state = 1847;
                    this.match(TrinoSqlParser.KW_ORDER);
                    this.state = 1848;
                    this.match(TrinoSqlParser.KW_BY);
                    this.state = 1849;
                    this.sortItem();
                    this.state = 1854;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 1850;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 1851;
                        this.sortItem();
                        }
                        }
                        this.state = 1856;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1859;
                this.match(TrinoSqlParser.T__1);
                this.state = 1861;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 244, this.context) ) {
                case 1:
                    {
                    this.state = 1860;
                    this.filter();
                    }
                    break;
                }
                this.state = 1867;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 246, this.context) ) {
                case 1:
                    {
                    this.state = 1864;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 102 || _la === 184) {
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
                localContext = new MeasureContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1869;
                this.identifier();
                this.state = 1870;
                this.over();
                }
                break;
            case 16:
                {
                localContext = new LambdaContext(localContext);
                this.context = localContext;
                previousContext = localContext;
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
                localContext = new LambdaContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1876;
                this.match(TrinoSqlParser.T__0);
                this.state = 1885;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 3192429231) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 3134381375) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3162472435) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 4286316499) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 4009750519) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 525170103) !== 0) || ((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & 15) !== 0)) {
                    {
                    this.state = 1877;
                    this.identifier();
                    this.state = 1882;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 1878;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 1879;
                        this.identifier();
                        }
                        }
                        this.state = 1884;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
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
                localContext = new SubqueryExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
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
                localContext = new ExistsContext(localContext);
                this.context = localContext;
                previousContext = localContext;
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
                localContext = new SimpleCaseContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1899;
                this.match(TrinoSqlParser.KW_CASE);
                this.state = 1900;
                (localContext as SimpleCaseContext)._operand = this.expression();
                this.state = 1902;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1901;
                    this.whenClause();
                    }
                    }
                    this.state = 1904;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 240);
                this.state = 1908;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 70) {
                    {
                    this.state = 1906;
                    this.match(TrinoSqlParser.KW_ELSE);
                    this.state = 1907;
                    (localContext as SimpleCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 1910;
                this.match(TrinoSqlParser.KW_END);
                }
                break;
            case 21:
                {
                localContext = new SearchedCaseContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1912;
                this.match(TrinoSqlParser.KW_CASE);
                this.state = 1914;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1913;
                    this.whenClause();
                    }
                    }
                    this.state = 1916;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 240);
                this.state = 1920;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 70) {
                    {
                    this.state = 1918;
                    this.match(TrinoSqlParser.KW_ELSE);
                    this.state = 1919;
                    (localContext as SearchedCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 1922;
                this.match(TrinoSqlParser.KW_END);
                }
                break;
            case 22:
                {
                localContext = new CastContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1924;
                this.match(TrinoSqlParser.KW_CAST);
                this.state = 1925;
                this.match(TrinoSqlParser.T__0);
                this.state = 1926;
                this.expression();
                this.state = 1927;
                this.match(TrinoSqlParser.KW_AS);
                this.state = 1928;
                this.type_(0);
                this.state = 1929;
                this.match(TrinoSqlParser.T__1);
                }
                break;
            case 23:
                {
                localContext = new CastContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1931;
                this.match(TrinoSqlParser.KW_TRY_CAST);
                this.state = 1932;
                this.match(TrinoSqlParser.T__0);
                this.state = 1933;
                this.expression();
                this.state = 1934;
                this.match(TrinoSqlParser.KW_AS);
                this.state = 1935;
                this.type_(0);
                this.state = 1936;
                this.match(TrinoSqlParser.T__1);
                }
                break;
            case 24:
                {
                localContext = new ArrayConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1938;
                this.match(TrinoSqlParser.KW_ARRAY);
                this.state = 1939;
                this.match(TrinoSqlParser.T__6);
                this.state = 1948;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2069757954) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1476117503) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2120217677) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4252345787) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 1325399551) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3153981439) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4286054271) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 3237637037) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2047) !== 0)) {
                    {
                    this.state = 1940;
                    this.expression();
                    this.state = 1945;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 1941;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 1942;
                        this.expression();
                        }
                        }
                        this.state = 1947;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1950;
                this.match(TrinoSqlParser.T__7);
                }
                break;
            case 25:
                {
                localContext = new ColumnReferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1951;
                this.identifier();
                }
                break;
            case 26:
                {
                localContext = new SpecialDateTimeFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1952;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.KW_CURRENT_DATE);
                }
                break;
            case 27:
                {
                localContext = new SpecialDateTimeFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1953;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.KW_CURRENT_TIME);
                this.state = 1957;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 255, this.context) ) {
                case 1:
                    {
                    this.state = 1954;
                    this.match(TrinoSqlParser.T__0);
                    this.state = 1955;
                    (localContext as SpecialDateTimeFunctionContext)._precision = this.match(TrinoSqlParser.INTEGER_VALUE);
                    this.state = 1956;
                    this.match(TrinoSqlParser.T__1);
                    }
                    break;
                }
                }
                break;
            case 28:
                {
                localContext = new SpecialDateTimeFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1959;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.KW_CURRENT_TIMESTAMP);
                this.state = 1963;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 256, this.context) ) {
                case 1:
                    {
                    this.state = 1960;
                    this.match(TrinoSqlParser.T__0);
                    this.state = 1961;
                    (localContext as SpecialDateTimeFunctionContext)._precision = this.match(TrinoSqlParser.INTEGER_VALUE);
                    this.state = 1962;
                    this.match(TrinoSqlParser.T__1);
                    }
                    break;
                }
                }
                break;
            case 29:
                {
                localContext = new SpecialDateTimeFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1965;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.KW_LOCALTIME);
                this.state = 1969;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 257, this.context) ) {
                case 1:
                    {
                    this.state = 1966;
                    this.match(TrinoSqlParser.T__0);
                    this.state = 1967;
                    (localContext as SpecialDateTimeFunctionContext)._precision = this.match(TrinoSqlParser.INTEGER_VALUE);
                    this.state = 1968;
                    this.match(TrinoSqlParser.T__1);
                    }
                    break;
                }
                }
                break;
            case 30:
                {
                localContext = new SpecialDateTimeFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1971;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(TrinoSqlParser.KW_LOCALTIMESTAMP);
                this.state = 1975;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 258, this.context) ) {
                case 1:
                    {
                    this.state = 1972;
                    this.match(TrinoSqlParser.T__0);
                    this.state = 1973;
                    (localContext as SpecialDateTimeFunctionContext)._precision = this.match(TrinoSqlParser.INTEGER_VALUE);
                    this.state = 1974;
                    this.match(TrinoSqlParser.T__1);
                    }
                    break;
                }
                }
                break;
            case 31:
                {
                localContext = new CurrentUserContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1977;
                (localContext as CurrentUserContext)._name = this.match(TrinoSqlParser.KW_CURRENT_USER);
                }
                break;
            case 32:
                {
                localContext = new CurrentCatalogContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1978;
                (localContext as CurrentCatalogContext)._name = this.match(TrinoSqlParser.KW_CURRENT_CATALOG);
                }
                break;
            case 33:
                {
                localContext = new CurrentSchemaContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1979;
                (localContext as CurrentSchemaContext)._name = this.match(TrinoSqlParser.KW_CURRENT_SCHEMA);
                }
                break;
            case 34:
                {
                localContext = new CurrentPathContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1980;
                (localContext as CurrentPathContext)._name = this.match(TrinoSqlParser.KW_CURRENT_PATH);
                }
                break;
            case 35:
                {
                localContext = new SubstringContext(localContext);
                this.context = localContext;
                previousContext = localContext;
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 86) {
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
                localContext = new NormalizeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1992;
                this.match(TrinoSqlParser.KW_NORMALIZE);
                this.state = 1993;
                this.match(TrinoSqlParser.T__0);
                this.state = 1994;
                this.valueExpression(0);
                this.state = 1997;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3) {
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
                localContext = new ExtractContext(localContext);
                this.context = localContext;
                previousContext = localContext;
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
                localContext = new ParenthesizedExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
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
                localContext = new GroupingOperationContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2012;
                this.match(TrinoSqlParser.KW_GROUPING);
                this.state = 2013;
                this.match(TrinoSqlParser.T__0);
                this.state = 2022;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 3192429231) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 3134381375) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3162472435) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 4286316499) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 4009750519) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 525170103) !== 0) || ((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & 15) !== 0)) {
                    {
                    this.state = 2014;
                    this.qualifiedName();
                    this.state = 2019;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 2015;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 2016;
                        this.qualifiedName();
                        }
                        }
                        this.state = 2021;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 2024;
                this.match(TrinoSqlParser.T__1);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2037;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 265, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 2035;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 264, this.context) ) {
                    case 1:
                        {
                        localContext = new SubscriptContext(new PrimaryExpressionContext(parentContext, parentState));
                        (localContext as SubscriptContext)._value = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, TrinoSqlParser.RULE_primaryExpression);
                        this.state = 2027;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 2028;
                        this.match(TrinoSqlParser.T__6);
                        this.state = 2029;
                        (localContext as SubscriptContext)._index = this.valueExpression(0);
                        this.state = 2030;
                        this.match(TrinoSqlParser.T__7);
                        }
                        break;
                    case 2:
                        {
                        localContext = new DereferenceContext(new PrimaryExpressionContext(parentContext, parentState));
                        (localContext as DereferenceContext)._base = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, TrinoSqlParser.RULE_primaryExpression);
                        this.state = 2032;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 2033;
                        this.match(TrinoSqlParser.T__3);
                        this.state = 2034;
                        (localContext as DereferenceContext)._fieldName = this.identifier();
                        }
                        break;
                    }
                    }
                }
                this.state = 2039;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 265, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public processingMode(): ProcessingModeContext {
        let localContext = new ProcessingModeContext(this.context, this.state);
        this.enterRule(localContext, 112, TrinoSqlParser.RULE_processingMode);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2040;
            _la = this.tokenStream.LA(1);
            if(!(_la === 83 || _la === 194)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nullTreatment(): NullTreatmentContext {
        let localContext = new NullTreatmentContext(this.context, this.state);
        this.enterRule(localContext, 114, TrinoSqlParser.RULE_nullTreatment);
        try {
            this.state = 2046;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case TrinoSqlParser.KW_IGNORE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2042;
                this.match(TrinoSqlParser.KW_IGNORE);
                this.state = 2043;
                this.match(TrinoSqlParser.KW_NULLS);
                }
                break;
            case TrinoSqlParser.KW_RESPECT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2044;
                this.match(TrinoSqlParser.KW_RESPECT);
                this.state = 2045;
                this.match(TrinoSqlParser.KW_NULLS);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public string_(): StringContext {
        let localContext = new StringContext(this.context, this.state);
        this.enterRule(localContext, 116, TrinoSqlParser.RULE_string);
        try {
            this.state = 2054;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case TrinoSqlParser.STRING:
                localContext = new BasicStringLiteralContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2048;
                this.match(TrinoSqlParser.STRING);
                }
                break;
            case TrinoSqlParser.UNICODE_STRING:
                localContext = new UnicodeStringLiteralContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2049;
                this.match(TrinoSqlParser.UNICODE_STRING);
                this.state = 2052;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 267, this.context) ) {
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
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timeZoneSpecifier(): TimeZoneSpecifierContext {
        let localContext = new TimeZoneSpecifierContext(this.context, this.state);
        this.enterRule(localContext, 118, TrinoSqlParser.RULE_timeZoneSpecifier);
        try {
            this.state = 2062;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 269, this.context) ) {
            case 1:
                localContext = new TimeZoneIntervalContext(localContext);
                this.enterOuterAlt(localContext, 1);
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
                localContext = new TimeZoneStringContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2059;
                this.match(TrinoSqlParser.KW_TIME);
                this.state = 2060;
                this.match(TrinoSqlParser.KW_ZONE);
                this.state = 2061;
                this.string_();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public comparisonOperator(): ComparisonOperatorContext {
        let localContext = new ComparisonOperatorContext(this.context, this.state);
        this.enterRule(localContext, 120, TrinoSqlParser.RULE_comparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2064;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 249)) & ~0x1F) === 0 && ((1 << (_la - 249)) & 63) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public comparisonQuantifier(): ComparisonQuantifierContext {
        let localContext = new ComparisonQuantifierContext(this.context, this.state);
        this.enterRule(localContext, 122, TrinoSqlParser.RULE_comparisonQuantifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2066;
            _la = this.tokenStream.LA(1);
            if(!(_la === 20 || _la === 24 || _la === 206)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public booleanValue(): BooleanValueContext {
        let localContext = new BooleanValueContext(this.context, this.state);
        this.enterRule(localContext, 124, TrinoSqlParser.RULE_booleanValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2068;
            _la = this.tokenStream.LA(1);
            if(!(_la === 80 || _la === 223)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interval(): IntervalContext {
        let localContext = new IntervalContext(this.context, this.state);
        this.enterRule(localContext, 126, TrinoSqlParser.RULE_interval);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2070;
            this.match(TrinoSqlParser.KW_INTERVAL);
            this.state = 2072;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 255 || _la === 256) {
                {
                this.state = 2071;
                localContext._sign = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 255 || _la === 256)) {
                    localContext._sign = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 2074;
            this.string_();
            this.state = 2075;
            localContext._from_ = this.intervalField();
            this.state = 2078;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 271, this.context) ) {
            case 1:
                {
                this.state = 2076;
                this.match(TrinoSqlParser.KW_TO);
                this.state = 2077;
                localContext._to = this.intervalField();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public intervalField(): IntervalFieldContext {
        let localContext = new IntervalFieldContext(this.context, this.state);
        this.enterRule(localContext, 128, TrinoSqlParser.RULE_intervalField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2080;
            _la = this.tokenStream.LA(1);
            if(!(_la === 58 || _la === 100 || _la === 136 || _la === 137 || _la === 197 || _la === 247)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public normalForm(): NormalFormContext {
        let localContext = new NormalFormContext(this.context, this.state);
        this.enterRule(localContext, 130, TrinoSqlParser.RULE_normalForm);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2082;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & 15) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public type_(): TypeContext;
    public type_(_p: number): TypeContext;
    public type_(_p?: number): TypeContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TypeContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 132;
        this.enterRecursionRule(localContext, 132, TrinoSqlParser.RULE_type, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2175;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 282, this.context) ) {
            case 1:
                {
                localContext = new RowTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 2085;
                this.match(TrinoSqlParser.KW_ROW);
                this.state = 2086;
                this.match(TrinoSqlParser.T__0);
                this.state = 2087;
                this.rowField();
                this.state = 2092;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 2088;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 2089;
                    this.rowField();
                    }
                    }
                    this.state = 2094;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2095;
                this.match(TrinoSqlParser.T__1);
                }
                break;
            case 2:
                {
                localContext = new IntervalTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2097;
                this.match(TrinoSqlParser.KW_INTERVAL);
                this.state = 2098;
                (localContext as IntervalTypeContext)._from_ = this.intervalField();
                this.state = 2101;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 273, this.context) ) {
                case 1:
                    {
                    this.state = 2099;
                    this.match(TrinoSqlParser.KW_TO);
                    this.state = 2100;
                    (localContext as IntervalTypeContext)._to = this.intervalField();
                    }
                    break;
                }
                }
                break;
            case 3:
                {
                localContext = new DateTimeTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2103;
                (localContext as DateTimeTypeContext)._base = this.match(TrinoSqlParser.KW_TIMESTAMP);
                this.state = 2108;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 274, this.context) ) {
                case 1:
                    {
                    this.state = 2104;
                    this.match(TrinoSqlParser.T__0);
                    this.state = 2105;
                    (localContext as DateTimeTypeContext)._precision = this.typeParameter();
                    this.state = 2106;
                    this.match(TrinoSqlParser.T__1);
                    }
                    break;
                }
                this.state = 2113;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 275, this.context) ) {
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
                localContext = new DateTimeTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2115;
                (localContext as DateTimeTypeContext)._base = this.match(TrinoSqlParser.KW_TIMESTAMP);
                this.state = 2120;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 2116;
                    this.match(TrinoSqlParser.T__0);
                    this.state = 2117;
                    (localContext as DateTimeTypeContext)._precision = this.typeParameter();
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
                localContext = new DateTimeTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2125;
                (localContext as DateTimeTypeContext)._base = this.match(TrinoSqlParser.KW_TIME);
                this.state = 2130;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 277, this.context) ) {
                case 1:
                    {
                    this.state = 2126;
                    this.match(TrinoSqlParser.T__0);
                    this.state = 2127;
                    (localContext as DateTimeTypeContext)._precision = this.typeParameter();
                    this.state = 2128;
                    this.match(TrinoSqlParser.T__1);
                    }
                    break;
                }
                this.state = 2135;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 278, this.context) ) {
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
                localContext = new DateTimeTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2137;
                (localContext as DateTimeTypeContext)._base = this.match(TrinoSqlParser.KW_TIME);
                this.state = 2142;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 2138;
                    this.match(TrinoSqlParser.T__0);
                    this.state = 2139;
                    (localContext as DateTimeTypeContext)._precision = this.typeParameter();
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
                localContext = new DoublePrecisionTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2147;
                this.match(TrinoSqlParser.KW_DOUBLE);
                this.state = 2148;
                this.match(TrinoSqlParser.KW_PRECISION);
                }
                break;
            case 8:
                {
                localContext = new LegacyArrayTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2149;
                this.match(TrinoSqlParser.KW_ARRAY);
                this.state = 2150;
                this.match(TrinoSqlParser.LT);
                this.state = 2151;
                this.type_(0);
                this.state = 2152;
                this.match(TrinoSqlParser.GT);
                }
                break;
            case 9:
                {
                localContext = new LegacyMapTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2154;
                this.match(TrinoSqlParser.KW_MAP);
                this.state = 2155;
                this.match(TrinoSqlParser.LT);
                this.state = 2156;
                (localContext as LegacyMapTypeContext)._keyType = this.type_(0);
                this.state = 2157;
                this.match(TrinoSqlParser.T__2);
                this.state = 2158;
                (localContext as LegacyMapTypeContext)._valueType = this.type_(0);
                this.state = 2159;
                this.match(TrinoSqlParser.GT);
                }
                break;
            case 10:
                {
                localContext = new GenericTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2161;
                this.identifier();
                this.state = 2173;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 281, this.context) ) {
                case 1:
                    {
                    this.state = 2162;
                    this.match(TrinoSqlParser.T__0);
                    this.state = 2163;
                    this.typeParameter();
                    this.state = 2168;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 2164;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 2165;
                        this.typeParameter();
                        }
                        }
                        this.state = 2170;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 2171;
                    this.match(TrinoSqlParser.T__1);
                    }
                    break;
                }
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2186;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 284, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new ArrayTypeContext(new TypeContext(parentContext, parentState));
                    this.pushNewRecursionContext(localContext, _startState, TrinoSqlParser.RULE_type);
                    this.state = 2177;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 2178;
                    this.match(TrinoSqlParser.KW_ARRAY);
                    this.state = 2182;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 283, this.context) ) {
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 284, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public rowField(): RowFieldContext {
        let localContext = new RowFieldContext(this.context, this.state);
        this.enterRule(localContext, 134, TrinoSqlParser.RULE_rowField);
        try {
            this.state = 2193;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 285, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2189;
                this.type_(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2190;
                this.identifier();
                this.state = 2191;
                this.type_(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeParameter(): TypeParameterContext {
        let localContext = new TypeParameterContext(this.context, this.state);
        this.enterRule(localContext, 136, TrinoSqlParser.RULE_typeParameter);
        try {
            this.state = 2197;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case TrinoSqlParser.INTEGER_VALUE:
                this.enterOuterAlt(localContext, 1);
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2196;
                this.type_(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whenClause(): WhenClauseContext {
        let localContext = new WhenClauseContext(this.context, this.state);
        this.enterRule(localContext, 138, TrinoSqlParser.RULE_whenClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2199;
            this.match(TrinoSqlParser.KW_WHEN);
            this.state = 2200;
            localContext._condition = this.expression();
            this.state = 2201;
            this.match(TrinoSqlParser.KW_THEN);
            this.state = 2202;
            localContext._result = this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public filter(): FilterContext {
        let localContext = new FilterContext(this.context, this.state);
        this.enterRule(localContext, 140, TrinoSqlParser.RULE_filter);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mergeCase(): MergeCaseContext {
        let localContext = new MergeCaseContext(this.context, this.state);
        this.enterRule(localContext, 142, TrinoSqlParser.RULE_mergeCase);
        let _la: number;
        try {
            this.state = 2274;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 294, this.context) ) {
            case 1:
                localContext = new MergeUpdateContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2210;
                this.match(TrinoSqlParser.KW_WHEN);
                this.state = 2211;
                this.match(TrinoSqlParser.KW_MATCHED);
                this.state = 2214;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 23) {
                    {
                    this.state = 2212;
                    this.match(TrinoSqlParser.KW_AND);
                    this.state = 2213;
                    (localContext as MergeUpdateContext)._condition = this.expression();
                    }
                }

                this.state = 2216;
                this.match(TrinoSqlParser.KW_THEN);
                this.state = 2217;
                this.match(TrinoSqlParser.KW_UPDATE);
                this.state = 2218;
                this.match(TrinoSqlParser.KW_SET);
                this.state = 2219;
                (localContext as MergeUpdateContext)._identifier = this.identifier();
                (localContext as MergeUpdateContext)._targets.push((localContext as MergeUpdateContext)._identifier);
                this.state = 2220;
                this.match(TrinoSqlParser.EQ);
                this.state = 2221;
                (localContext as MergeUpdateContext)._expression = this.expression();
                (localContext as MergeUpdateContext)._values.push((localContext as MergeUpdateContext)._expression);
                this.state = 2229;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 2222;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 2223;
                    (localContext as MergeUpdateContext)._identifier = this.identifier();
                    (localContext as MergeUpdateContext)._targets.push((localContext as MergeUpdateContext)._identifier);
                    this.state = 2224;
                    this.match(TrinoSqlParser.EQ);
                    this.state = 2225;
                    (localContext as MergeUpdateContext)._expression = this.expression();
                    (localContext as MergeUpdateContext)._values.push((localContext as MergeUpdateContext)._expression);
                    }
                    }
                    this.state = 2231;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case 2:
                localContext = new MergeDeleteContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2232;
                this.match(TrinoSqlParser.KW_WHEN);
                this.state = 2233;
                this.match(TrinoSqlParser.KW_MATCHED);
                this.state = 2236;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 23) {
                    {
                    this.state = 2234;
                    this.match(TrinoSqlParser.KW_AND);
                    this.state = 2235;
                    (localContext as MergeDeleteContext)._condition = this.expression();
                    }
                }

                this.state = 2238;
                this.match(TrinoSqlParser.KW_THEN);
                this.state = 2239;
                this.match(TrinoSqlParser.KW_DELETE);
                }
                break;
            case 3:
                localContext = new MergeInsertContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2240;
                this.match(TrinoSqlParser.KW_WHEN);
                this.state = 2241;
                this.match(TrinoSqlParser.KW_NOT);
                this.state = 2242;
                this.match(TrinoSqlParser.KW_MATCHED);
                this.state = 2245;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 23) {
                    {
                    this.state = 2243;
                    this.match(TrinoSqlParser.KW_AND);
                    this.state = 2244;
                    (localContext as MergeInsertContext)._condition = this.expression();
                    }
                }

                this.state = 2247;
                this.match(TrinoSqlParser.KW_THEN);
                this.state = 2248;
                this.match(TrinoSqlParser.KW_INSERT);
                this.state = 2260;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 2249;
                    this.match(TrinoSqlParser.T__0);
                    this.state = 2250;
                    (localContext as MergeInsertContext)._identifier = this.identifier();
                    (localContext as MergeInsertContext)._targets.push((localContext as MergeInsertContext)._identifier);
                    this.state = 2255;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 3) {
                        {
                        {
                        this.state = 2251;
                        this.match(TrinoSqlParser.T__2);
                        this.state = 2252;
                        (localContext as MergeInsertContext)._identifier = this.identifier();
                        (localContext as MergeInsertContext)._targets.push((localContext as MergeInsertContext)._identifier);
                        }
                        }
                        this.state = 2257;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
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
                (localContext as MergeInsertContext)._expression = this.expression();
                (localContext as MergeInsertContext)._values.push((localContext as MergeInsertContext)._expression);
                this.state = 2269;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 2265;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 2266;
                    (localContext as MergeInsertContext)._expression = this.expression();
                    (localContext as MergeInsertContext)._values.push((localContext as MergeInsertContext)._expression);
                    }
                    }
                    this.state = 2271;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2272;
                this.match(TrinoSqlParser.T__1);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public over(): OverContext {
        let localContext = new OverContext(this.context, this.state);
        this.enterRule(localContext, 144, TrinoSqlParser.RULE_over);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2276;
            this.match(TrinoSqlParser.KW_OVER);
            this.state = 2282;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
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
                localContext._windowName = this.identifier();
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
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowFrame(): WindowFrameContext {
        let localContext = new WindowFrameContext(this.context, this.state);
        this.enterRule(localContext, 146, TrinoSqlParser.RULE_windowFrame);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2293;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 134) {
                {
                this.state = 2284;
                this.match(TrinoSqlParser.KW_MEASURES);
                this.state = 2285;
                this.measureDefinition();
                this.state = 2290;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 2286;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 2287;
                    this.measureDefinition();
                    }
                    }
                    this.state = 2292;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 2295;
            this.frameExtent();
            this.state = 2299;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
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
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 105 || _la === 199) {
                {
                this.state = 2301;
                _la = this.tokenStream.LA(1);
                if(!(_la === 105 || _la === 199)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 2309;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
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
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 209) {
                {
                this.state = 2311;
                this.match(TrinoSqlParser.KW_SUBSET);
                this.state = 2312;
                this.subsetDefinition();
                this.state = 2317;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 2313;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 2314;
                    this.subsetDefinition();
                    }
                    }
                    this.state = 2319;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 2331;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 65) {
                {
                this.state = 2322;
                this.match(TrinoSqlParser.KW_DEFINE);
                this.state = 2323;
                this.variableDefinition();
                this.state = 2328;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 2324;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 2325;
                    this.variableDefinition();
                    }
                    }
                    this.state = 2330;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public frameExtent(): FrameExtentContext {
        let localContext = new FrameExtentContext(this.context, this.state);
        this.enterRule(localContext, 148, TrinoSqlParser.RULE_frameExtent);
        try {
            this.state = 2357;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 305, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2333;
                localContext._frameType = this.match(TrinoSqlParser.KW_RANGE);
                this.state = 2334;
                localContext._frameStart = this.frameBound();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2335;
                localContext._frameType = this.match(TrinoSqlParser.KW_ROWS);
                this.state = 2336;
                localContext._frameStart = this.frameBound();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2337;
                localContext._frameType = this.match(TrinoSqlParser.KW_GROUPS);
                this.state = 2338;
                localContext._frameStart = this.frameBound();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2339;
                localContext._frameType = this.match(TrinoSqlParser.KW_RANGE);
                this.state = 2340;
                this.match(TrinoSqlParser.KW_BETWEEN);
                this.state = 2341;
                localContext._frameStart = this.frameBound();
                this.state = 2342;
                this.match(TrinoSqlParser.KW_AND);
                this.state = 2343;
                localContext._end = this.frameBound();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2345;
                localContext._frameType = this.match(TrinoSqlParser.KW_ROWS);
                this.state = 2346;
                this.match(TrinoSqlParser.KW_BETWEEN);
                this.state = 2347;
                localContext._frameStart = this.frameBound();
                this.state = 2348;
                this.match(TrinoSqlParser.KW_AND);
                this.state = 2349;
                localContext._end = this.frameBound();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2351;
                localContext._frameType = this.match(TrinoSqlParser.KW_GROUPS);
                this.state = 2352;
                this.match(TrinoSqlParser.KW_BETWEEN);
                this.state = 2353;
                localContext._frameStart = this.frameBound();
                this.state = 2354;
                this.match(TrinoSqlParser.KW_AND);
                this.state = 2355;
                localContext._end = this.frameBound();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public frameBound(): FrameBoundContext {
        let localContext = new FrameBoundContext(this.context, this.state);
        this.enterRule(localContext, 150, TrinoSqlParser.RULE_frameBound);
        let _la: number;
        try {
            this.state = 2368;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 306, this.context) ) {
            case 1:
                localContext = new UnboundedFrameContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2359;
                this.match(TrinoSqlParser.KW_UNBOUNDED);
                this.state = 2360;
                (localContext as UnboundedFrameContext)._boundType = this.match(TrinoSqlParser.KW_PRECEDING);
                }
                break;
            case 2:
                localContext = new UnboundedFrameContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2361;
                this.match(TrinoSqlParser.KW_UNBOUNDED);
                this.state = 2362;
                (localContext as UnboundedFrameContext)._boundType = this.match(TrinoSqlParser.KW_FOLLOWING);
                }
                break;
            case 3:
                localContext = new CurrentRowBoundContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2363;
                this.match(TrinoSqlParser.KW_CURRENT);
                this.state = 2364;
                this.match(TrinoSqlParser.KW_ROW);
                }
                break;
            case 4:
                localContext = new BoundedFrameContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2365;
                this.expression();
                this.state = 2366;
                (localContext as BoundedFrameContext)._boundType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 85 || _la === 171)) {
                    (localContext as BoundedFrameContext)._boundType = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public rowPattern(): RowPatternContext;
    public rowPattern(_p: number): RowPatternContext;
    public rowPattern(_p?: number): RowPatternContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new RowPatternContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 152;
        this.enterRecursionRule(localContext, 152, TrinoSqlParser.RULE_rowPattern, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            localContext = new QuantifiedPrimaryContext(localContext);
            this.context = localContext;
            previousContext = localContext;

            this.state = 2371;
            this.patternPrimary();
            this.state = 2373;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 307, this.context) ) {
            case 1:
                {
                this.state = 2372;
                this.patternQuantifier();
                }
                break;
            }
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2382;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 309, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 2380;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 308, this.context) ) {
                    case 1:
                        {
                        localContext = new PatternConcatenationContext(new RowPatternContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, TrinoSqlParser.RULE_rowPattern);
                        this.state = 2375;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 2376;
                        this.rowPattern(3);
                        }
                        break;
                    case 2:
                        {
                        localContext = new PatternAlternationContext(new RowPatternContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, TrinoSqlParser.RULE_rowPattern);
                        this.state = 2377;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 309, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public patternPrimary(): PatternPrimaryContext {
        let localContext = new PatternPrimaryContext(this.context, this.state);
        this.enterRule(localContext, 154, TrinoSqlParser.RULE_patternPrimary);
        let _la: number;
        try {
            this.state = 2410;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 311, this.context) ) {
            case 1:
                localContext = new PatternVariableContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2385;
                this.identifier();
                }
                break;
            case 2:
                localContext = new EmptyPatternContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2386;
                this.match(TrinoSqlParser.T__0);
                this.state = 2387;
                this.match(TrinoSqlParser.T__1);
                }
                break;
            case 3:
                localContext = new PatternPermutationContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2388;
                this.match(TrinoSqlParser.KW_PERMUTE);
                this.state = 2389;
                this.match(TrinoSqlParser.T__0);
                this.state = 2390;
                this.rowPattern(0);
                this.state = 2395;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 3) {
                    {
                    {
                    this.state = 2391;
                    this.match(TrinoSqlParser.T__2);
                    this.state = 2392;
                    this.rowPattern(0);
                    }
                    }
                    this.state = 2397;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2398;
                this.match(TrinoSqlParser.T__1);
                }
                break;
            case 4:
                localContext = new GroupedPatternContext(localContext);
                this.enterOuterAlt(localContext, 4);
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
                localContext = new PartitionStartAnchorContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2404;
                this.match(TrinoSqlParser.T__9);
                }
                break;
            case 6:
                localContext = new PartitionEndAnchorContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2405;
                this.match(TrinoSqlParser.T__10);
                }
                break;
            case 7:
                localContext = new ExcludedPatternContext(localContext);
                this.enterOuterAlt(localContext, 7);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public patternQuantifier(): PatternQuantifierContext {
        let localContext = new PatternQuantifierContext(this.context, this.state);
        this.enterRule(localContext, 156, TrinoSqlParser.RULE_patternQuantifier);
        let _la: number;
        try {
            this.state = 2442;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 319, this.context) ) {
            case 1:
                localContext = new ZeroOrMoreQuantifierContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2412;
                this.match(TrinoSqlParser.ASTERISK);
                this.state = 2414;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 312, this.context) ) {
                case 1:
                    {
                    this.state = 2413;
                    (localContext as ZeroOrMoreQuantifierContext)._reluctant = this.match(TrinoSqlParser.QUESTION_MARK);
                    }
                    break;
                }
                }
                break;
            case 2:
                localContext = new OneOrMoreQuantifierContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2416;
                this.match(TrinoSqlParser.PLUS);
                this.state = 2418;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 313, this.context) ) {
                case 1:
                    {
                    this.state = 2417;
                    (localContext as OneOrMoreQuantifierContext)._reluctant = this.match(TrinoSqlParser.QUESTION_MARK);
                    }
                    break;
                }
                }
                break;
            case 3:
                localContext = new ZeroOrOneQuantifierContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2420;
                this.match(TrinoSqlParser.QUESTION_MARK);
                this.state = 2422;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 314, this.context) ) {
                case 1:
                    {
                    this.state = 2421;
                    (localContext as ZeroOrOneQuantifierContext)._reluctant = this.match(TrinoSqlParser.QUESTION_MARK);
                    }
                    break;
                }
                }
                break;
            case 4:
                localContext = new RangeQuantifierContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2424;
                this.match(TrinoSqlParser.T__13);
                this.state = 2425;
                (localContext as RangeQuantifierContext)._exactly = this.match(TrinoSqlParser.INTEGER_VALUE);
                this.state = 2426;
                this.match(TrinoSqlParser.T__14);
                this.state = 2428;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 315, this.context) ) {
                case 1:
                    {
                    this.state = 2427;
                    (localContext as RangeQuantifierContext)._reluctant = this.match(TrinoSqlParser.QUESTION_MARK);
                    }
                    break;
                }
                }
                break;
            case 5:
                localContext = new RangeQuantifierContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2430;
                this.match(TrinoSqlParser.T__13);
                this.state = 2432;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 265) {
                    {
                    this.state = 2431;
                    (localContext as RangeQuantifierContext)._atLeast = this.match(TrinoSqlParser.INTEGER_VALUE);
                    }
                }

                this.state = 2434;
                this.match(TrinoSqlParser.T__2);
                this.state = 2436;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 265) {
                    {
                    this.state = 2435;
                    (localContext as RangeQuantifierContext)._atMost = this.match(TrinoSqlParser.INTEGER_VALUE);
                    }
                }

                this.state = 2438;
                this.match(TrinoSqlParser.T__14);
                this.state = 2440;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 318, this.context) ) {
                case 1:
                    {
                    this.state = 2439;
                    (localContext as RangeQuantifierContext)._reluctant = this.match(TrinoSqlParser.QUESTION_MARK);
                    }
                    break;
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public updateAssignment(): UpdateAssignmentContext {
        let localContext = new UpdateAssignmentContext(this.context, this.state);
        this.enterRule(localContext, 158, TrinoSqlParser.RULE_updateAssignment);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public explainOption(): ExplainOptionContext {
        let localContext = new ExplainOptionContext(this.context, this.state);
        this.enterRule(localContext, 160, TrinoSqlParser.RULE_explainOption);
        let _la: number;
        try {
            this.state = 2452;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case TrinoSqlParser.KW_FORMAT:
                localContext = new ExplainFormatContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2448;
                this.match(TrinoSqlParser.KW_FORMAT);
                this.state = 2449;
                (localContext as ExplainFormatContext)._value = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 95 || _la === 117 || _la === 215)) {
                    (localContext as ExplainFormatContext)._value = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case TrinoSqlParser.KW_TYPE:
                localContext = new ExplainTypeContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2450;
                this.match(TrinoSqlParser.KW_TYPE);
                this.state = 2451;
                (localContext as ExplainTypeContext)._value = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 67 || _la === 113 || _la === 127 || _la === 236)) {
                    (localContext as ExplainTypeContext)._value = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public transactionMode(): TransactionModeContext {
        let localContext = new TransactionModeContext(this.context, this.state);
        this.enterRule(localContext, 162, TrinoSqlParser.RULE_transactionMode);
        let _la: number;
        try {
            this.state = 2459;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case TrinoSqlParser.KW_ISOLATION:
                localContext = new IsolationLevelContext(localContext);
                this.enterOuterAlt(localContext, 1);
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
                localContext = new TransactionAccessModeContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2457;
                this.match(TrinoSqlParser.KW_READ);
                this.state = 2458;
                (localContext as TransactionAccessModeContext)._accessMode = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 155 || _la === 246)) {
                    (localContext as TransactionAccessModeContext)._accessMode = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public levelOfIsolation(): LevelOfIsolationContext {
        let localContext = new LevelOfIsolationContext(this.context, this.state);
        this.enterRule(localContext, 164, TrinoSqlParser.RULE_levelOfIsolation);
        try {
            this.state = 2468;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 322, this.context) ) {
            case 1:
                localContext = new ReadUncommittedContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2461;
                this.match(TrinoSqlParser.KW_READ);
                this.state = 2462;
                this.match(TrinoSqlParser.KW_UNCOMMITTED);
                }
                break;
            case 2:
                localContext = new ReadCommittedContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2463;
                this.match(TrinoSqlParser.KW_READ);
                this.state = 2464;
                this.match(TrinoSqlParser.KW_COMMITTED);
                }
                break;
            case 3:
                localContext = new RepeatableReadContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2465;
                this.match(TrinoSqlParser.KW_REPEATABLE);
                this.state = 2466;
                this.match(TrinoSqlParser.KW_READ);
                }
                break;
            case 4:
                localContext = new SerializableContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2467;
                this.match(TrinoSqlParser.KW_SERIALIZABLE);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public callArgument(): CallArgumentContext {
        let localContext = new CallArgumentContext(this.context, this.state);
        this.enterRule(localContext, 166, TrinoSqlParser.RULE_callArgument);
        try {
            this.state = 2475;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 323, this.context) ) {
            case 1:
                localContext = new PositionalArgumentContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2470;
                this.expression();
                }
                break;
            case 2:
                localContext = new NamedArgumentContext(localContext);
                this.enterOuterAlt(localContext, 2);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pathElement(): PathElementContext {
        let localContext = new PathElementContext(this.context, this.state);
        this.enterRule(localContext, 168, TrinoSqlParser.RULE_pathElement);
        try {
            this.state = 2482;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 324, this.context) ) {
            case 1:
                localContext = new QualifiedArgumentContext(localContext);
                this.enterOuterAlt(localContext, 1);
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
                localContext = new UnqualifiedArgumentContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2481;
                this.identifier();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pathSpecification(): PathSpecificationContext {
        let localContext = new PathSpecificationContext(this.context, this.state);
        this.enterRule(localContext, 170, TrinoSqlParser.RULE_pathSpecification);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2484;
            this.pathElement();
            this.state = 2489;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 2485;
                this.match(TrinoSqlParser.T__2);
                this.state = 2486;
                this.pathElement();
                }
                }
                this.state = 2491;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public privilege(): PrivilegeContext {
        let localContext = new PrivilegeContext(this.context, this.state);
        this.enterRule(localContext, 172, TrinoSqlParser.RULE_privilege);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2492;
            _la = this.tokenStream.LA(1);
            if(!(_la === 62 || _la === 108 || _la === 200 || _la === 232)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableOrViewName(): TableOrViewNameContext {
        let localContext = new TableOrViewNameContext(this.context, this.state);
        this.enterRule(localContext, 174, TrinoSqlParser.RULE_tableOrViewName);
        try {
            this.state = 2496;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 326, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2494;
                this.tableName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2495;
                this.viewName();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableName(): TableNameContext {
        let localContext = new TableNameContext(this.context, this.state);
        this.enterRule(localContext, 176, TrinoSqlParser.RULE_tableName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2498;
            this.tablePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableNameCreate(): TableNameCreateContext {
        let localContext = new TableNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 178, TrinoSqlParser.RULE_tableNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2500;
            this.tablePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public viewName(): ViewNameContext {
        let localContext = new ViewNameContext(this.context, this.state);
        this.enterRule(localContext, 180, TrinoSqlParser.RULE_viewName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2502;
            this.viewPath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public viewNameCreate(): ViewNameCreateContext {
        let localContext = new ViewNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 182, TrinoSqlParser.RULE_viewNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2504;
            this.viewPath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tablePath(): TablePathContext {
        let localContext = new TablePathContext(this.context, this.state);
        this.enterRule(localContext, 184, TrinoSqlParser.RULE_tablePath);
        try {
            this.state = 2517;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 327, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2506;
                localContext._table = this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2507;
                localContext._schema = this.identifier();
                this.state = 2508;
                this.match(TrinoSqlParser.T__3);
                this.state = 2509;
                localContext._table = this.identifier();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2511;
                localContext._catalog = this.identifier();
                this.state = 2512;
                this.match(TrinoSqlParser.T__3);
                this.state = 2513;
                localContext._schema = this.identifier();
                this.state = 2514;
                this.match(TrinoSqlParser.T__3);
                this.state = 2515;
                localContext._table = this.identifier();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public viewPath(): ViewPathContext {
        let localContext = new ViewPathContext(this.context, this.state);
        this.enterRule(localContext, 186, TrinoSqlParser.RULE_viewPath);
        try {
            this.state = 2530;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 328, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2519;
                localContext._view = this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2520;
                localContext._schema = this.identifier();
                this.state = 2521;
                this.match(TrinoSqlParser.T__3);
                this.state = 2522;
                localContext._view = this.identifier();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2524;
                localContext._catalog = this.identifier();
                this.state = 2525;
                this.match(TrinoSqlParser.T__3);
                this.state = 2526;
                localContext._schema = this.identifier();
                this.state = 2527;
                this.match(TrinoSqlParser.T__3);
                this.state = 2528;
                localContext._view = this.identifier();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public schemaName(): SchemaNameContext {
        let localContext = new SchemaNameContext(this.context, this.state);
        this.enterRule(localContext, 188, TrinoSqlParser.RULE_schemaName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2532;
            this.schemaPath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public schemaNameCreate(): SchemaNameCreateContext {
        let localContext = new SchemaNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 190, TrinoSqlParser.RULE_schemaNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2534;
            this.schemaPath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public schemaPath(): SchemaPathContext {
        let localContext = new SchemaPathContext(this.context, this.state);
        this.enterRule(localContext, 192, TrinoSqlParser.RULE_schemaPath);
        try {
            this.state = 2541;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 329, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2536;
                localContext._schema = this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2537;
                localContext._catalog = this.identifier();
                this.state = 2538;
                this.match(TrinoSqlParser.T__3);
                this.state = 2539;
                localContext._schema = this.identifier();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public catalogName(): CatalogNameContext {
        let localContext = new CatalogNameContext(this.context, this.state);
        this.enterRule(localContext, 194, TrinoSqlParser.RULE_catalogName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2543;
            localContext._catalog = this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public catalogNameCreate(): CatalogNameCreateContext {
        let localContext = new CatalogNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 196, TrinoSqlParser.RULE_catalogNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2545;
            localContext._catalog = this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionName(): FunctionNameContext {
        let localContext = new FunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 198, TrinoSqlParser.RULE_functionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2547;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnName(): ColumnNameContext {
        let localContext = new ColumnNameContext(this.context, this.state);
        this.enterRule(localContext, 200, TrinoSqlParser.RULE_columnName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2549;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnNameCreate(): ColumnNameCreateContext {
        let localContext = new ColumnNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 202, TrinoSqlParser.RULE_columnNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2551;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedName(): QualifiedNameContext {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 204, TrinoSqlParser.RULE_qualifiedName);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2553;
            this.identifier();
            this.state = 2558;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 330, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 330, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public grantor(): GrantorContext {
        let localContext = new GrantorContext(this.context, this.state);
        this.enterRule(localContext, 206, TrinoSqlParser.RULE_grantor);
        try {
            this.state = 2564;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
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
                localContext = new SpecifiedPrincipalContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2561;
                this.principal();
                }
                break;
            case TrinoSqlParser.KW_CURRENT_USER:
                localContext = new CurrentUserGrantorContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2562;
                this.match(TrinoSqlParser.KW_CURRENT_USER);
                }
                break;
            case TrinoSqlParser.KW_CURRENT_ROLE:
                localContext = new CurrentRoleGrantorContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2563;
                this.match(TrinoSqlParser.KW_CURRENT_ROLE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public principal(): PrincipalContext {
        let localContext = new PrincipalContext(this.context, this.state);
        this.enterRule(localContext, 208, TrinoSqlParser.RULE_principal);
        try {
            this.state = 2571;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 332, this.context) ) {
            case 1:
                localContext = new UnspecifiedPrincipalContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2566;
                this.identifier();
                }
                break;
            case 2:
                localContext = new UserPrincipalContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2567;
                this.match(TrinoSqlParser.KW_USER);
                this.state = 2568;
                this.identifier();
                }
                break;
            case 3:
                localContext = new RolePrincipalContext(localContext);
                this.enterOuterAlt(localContext, 3);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public roles(): RolesContext {
        let localContext = new RolesContext(this.context, this.state);
        this.enterRule(localContext, 210, TrinoSqlParser.RULE_roles);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2573;
            this.identifier();
            this.state = 2578;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 2574;
                this.match(TrinoSqlParser.T__2);
                this.state = 2575;
                this.identifier();
                }
                }
                this.state = 2580;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 212, TrinoSqlParser.RULE_identifier);
        try {
            this.state = 2586;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case TrinoSqlParser.IDENTIFIER:
                localContext = new UnquotedIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2581;
                this.match(TrinoSqlParser.IDENTIFIER);
                }
                break;
            case TrinoSqlParser.QUOTED_IDENTIFIER:
                localContext = new QuotedIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 2);
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
                localContext = new UnquotedIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2583;
                this.nonReserved();
                }
                break;
            case TrinoSqlParser.BACKQUOTED_IDENTIFIER:
                localContext = new BackQuotedIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2584;
                this.match(TrinoSqlParser.BACKQUOTED_IDENTIFIER);
                }
                break;
            case TrinoSqlParser.DIGIT_IDENTIFIER:
                localContext = new DigitIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2585;
                this.match(TrinoSqlParser.DIGIT_IDENTIFIER);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public number_(): NumberContext {
        let localContext = new NumberContext(this.context, this.state);
        this.enterRule(localContext, 214, TrinoSqlParser.RULE_number);
        let _la: number;
        try {
            this.state = 2600;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 338, this.context) ) {
            case 1:
                localContext = new DecimalLiteralContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2589;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 256) {
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
                localContext = new DoubleLiteralContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2593;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 256) {
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
                localContext = new IntegerLiteralContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2597;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 256) {
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nonReserved(): NonReservedContext {
        let localContext = new NonReservedContext(this.context, this.state);
        this.enterRule(localContext, 216, TrinoSqlParser.RULE_nonReserved);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2602;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 1140014511) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 3192429231) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 3134381375) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3162472435) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 4286316499) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 4009750519) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 525170103) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 21:
            return this.queryTerm_sempred(localContext as QueryTermContext, predIndex);
        case 34:
            return this.relation_sempred(localContext as RelationContext, predIndex);
        case 52:
            return this.booleanExpression_sempred(localContext as BooleanExpressionContext, predIndex);
        case 54:
            return this.valueExpression_sempred(localContext as ValueExpressionContext, predIndex);
        case 55:
            return this.primaryExpression_sempred(localContext as PrimaryExpressionContext, predIndex);
        case 66:
            return this.type_sempred(localContext as TypeContext, predIndex);
        case 76:
            return this.rowPattern_sempred(localContext as RowPatternContext, predIndex);
        }
        return true;
    }
    private queryTerm_sempred(localContext: QueryTermContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 2);
        case 1:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private relation_sempred(localContext: RelationContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 2:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private booleanExpression_sempred(localContext: BooleanExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 3:
            return this.precpred(this.context, 2);
        case 4:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private valueExpression_sempred(localContext: ValueExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 5:
            return this.precpred(this.context, 3);
        case 6:
            return this.precpred(this.context, 2);
        case 7:
            return this.precpred(this.context, 1);
        case 8:
            return this.precpred(this.context, 5);
        }
        return true;
    }
    private primaryExpression_sempred(localContext: PrimaryExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 9:
            return this.precpred(this.context, 17);
        case 10:
            return this.precpred(this.context, 15);
        }
        return true;
    }
    private type_sempred(localContext: TypeContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 11:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private rowPattern_sempred(localContext: RowPatternContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 12:
            return this.precpred(this.context, 2);
        case 13:
            return this.precpred(this.context, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,277,2605,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,1,0,
        5,0,220,8,0,10,0,12,0,223,9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,3,
        2,233,8,2,1,3,1,3,3,3,237,8,3,1,4,1,4,3,4,241,8,4,1,5,1,5,3,5,245,
        8,5,1,6,1,6,3,6,249,8,6,1,7,1,7,3,7,253,8,7,1,8,1,8,1,8,1,8,1,8,
        1,8,1,8,1,8,3,8,263,8,8,1,8,1,8,1,8,3,8,268,8,8,1,8,1,8,3,8,272,
        8,8,1,8,1,8,1,8,1,8,3,8,278,8,8,1,8,1,8,3,8,282,8,8,1,8,1,8,1,8,
        1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
        3,8,303,8,8,1,8,1,8,3,8,307,8,8,1,8,1,8,3,8,311,8,8,1,8,1,8,3,8,
        315,8,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,323,8,8,1,8,1,8,3,8,327,8,8,
        1,8,3,8,330,8,8,1,8,1,8,1,8,1,8,1,8,3,8,337,8,8,1,8,1,8,1,8,1,8,
        1,8,5,8,344,8,8,10,8,12,8,347,9,8,1,8,1,8,1,8,3,8,352,8,8,1,8,1,
        8,3,8,356,8,8,1,8,1,8,1,8,1,8,3,8,362,8,8,1,8,1,8,1,8,1,8,1,8,3,
        8,369,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,378,8,8,1,8,1,8,1,8,1,
        8,1,8,1,8,1,8,3,8,387,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
        8,1,8,1,8,3,8,401,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,410,8,8,1,
        8,1,8,1,8,1,8,3,8,416,8,8,1,8,1,8,1,8,1,8,1,8,3,8,423,8,8,1,8,1,
        8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,433,8,8,1,8,1,8,1,8,1,8,1,8,3,8,440,
        8,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,448,8,8,1,8,1,8,1,8,1,8,1,8,1,8,
        3,8,456,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
        1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,483,8,8,10,8,
        12,8,486,9,8,3,8,488,8,8,1,8,3,8,491,8,8,1,8,1,8,3,8,495,8,8,1,8,
        1,8,1,8,1,8,3,8,501,8,8,1,8,1,8,1,8,3,8,506,8,8,1,8,1,8,1,8,1,8,
        1,8,3,8,513,8,8,1,8,1,8,1,8,3,8,518,8,8,1,8,1,8,3,8,522,8,8,1,8,
        1,8,1,8,1,8,1,8,1,8,3,8,530,8,8,1,8,1,8,1,8,1,8,3,8,536,8,8,1,8,
        1,8,3,8,540,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
        3,8,554,8,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,562,8,8,1,8,1,8,1,8,1,8,
        1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,581,8,8,
        1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
        1,8,1,8,1,8,1,8,1,8,5,8,604,8,8,10,8,12,8,607,9,8,3,8,609,8,8,1,
        8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,619,8,8,1,8,1,8,3,8,623,8,8,1,
        8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,634,8,8,10,8,12,8,637,9,8,
        1,8,1,8,1,8,3,8,642,8,8,1,8,1,8,1,8,3,8,647,8,8,1,8,1,8,3,8,651,
        8,8,1,8,1,8,1,8,1,8,3,8,657,8,8,1,8,1,8,1,8,1,8,1,8,5,8,664,8,8,
        10,8,12,8,667,9,8,1,8,1,8,1,8,3,8,672,8,8,1,8,1,8,3,8,676,8,8,1,
        8,1,8,1,8,1,8,1,8,3,8,683,8,8,1,8,1,8,3,8,687,8,8,1,8,1,8,1,8,1,
        8,5,8,693,8,8,10,8,12,8,696,9,8,1,8,1,8,3,8,700,8,8,1,8,1,8,3,8,
        704,8,8,1,8,1,8,3,8,708,8,8,1,8,3,8,711,8,8,1,8,1,8,1,8,1,8,1,8,
        3,8,718,8,8,1,8,1,8,1,8,1,8,5,8,724,8,8,10,8,12,8,727,9,8,1,8,1,
        8,3,8,731,8,8,1,8,1,8,3,8,735,8,8,1,8,1,8,3,8,739,8,8,1,8,3,8,742,
        8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,751,8,8,1,8,1,8,1,8,5,8,756,
        8,8,10,8,12,8,759,9,8,1,8,1,8,3,8,763,8,8,1,8,1,8,3,8,767,8,8,1,
        8,1,8,3,8,771,8,8,1,8,3,8,774,8,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,782,
        8,8,1,8,3,8,785,8,8,1,8,1,8,3,8,789,8,8,1,8,3,8,792,8,8,1,8,1,8,
        1,8,1,8,5,8,798,8,8,10,8,12,8,801,9,8,1,8,1,8,3,8,805,8,8,1,8,1,
        8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
        8,1,8,1,8,1,8,1,8,3,8,829,8,8,1,8,1,8,1,8,1,8,3,8,835,8,8,3,8,837,
        8,8,1,8,1,8,1,8,1,8,3,8,843,8,8,1,8,1,8,1,8,1,8,3,8,849,8,8,3,8,
        851,8,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,859,8,8,3,8,861,8,8,1,8,1,8,
        1,8,1,8,3,8,867,8,8,1,8,1,8,1,8,1,8,3,8,873,8,8,3,8,875,8,8,1,8,
        1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,890,8,8,1,8,
        1,8,1,8,3,8,895,8,8,1,8,1,8,1,8,1,8,1,8,3,8,902,8,8,1,8,1,8,1,8,
        1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,914,8,8,3,8,916,8,8,1,8,1,8,1,8,
        1,8,1,8,1,8,3,8,924,8,8,3,8,926,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
        1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,942,8,8,10,8,12,8,945,9,8,3,8,947,
        8,8,1,8,1,8,3,8,951,8,8,1,8,1,8,3,8,955,8,8,1,8,1,8,1,8,1,8,1,8,
        1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,971,8,8,10,8,12,8,974,9,
        8,3,8,976,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
        8,1,8,3,8,992,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,1000,8,8,10,8,12,8,
        1003,9,8,1,8,1,8,3,8,1007,8,8,1,8,1,8,1,8,1,8,3,8,1013,8,8,1,8,3,
        8,1016,8,8,1,8,1,8,1,8,1,8,1,8,4,8,1023,8,8,11,8,12,8,1024,1,8,1,
        8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,1037,8,8,1,9,3,9,1040,8,9,
        1,9,1,9,1,10,1,10,3,10,1046,8,10,1,10,1,10,1,10,5,10,1051,8,10,10,
        10,12,10,1054,9,10,1,11,1,11,3,11,1058,8,11,1,12,1,12,1,12,1,12,
        3,12,1064,8,12,1,12,1,12,3,12,1068,8,12,1,12,1,12,3,12,1072,8,12,
        1,13,1,13,1,13,1,13,3,13,1078,8,13,1,14,1,14,1,14,1,14,1,15,1,15,
        1,15,5,15,1087,8,15,10,15,12,15,1090,9,15,1,16,1,16,1,16,1,16,1,
        17,1,17,3,17,1098,8,17,1,18,1,18,1,18,1,18,1,18,1,18,5,18,1106,8,
        18,10,18,12,18,1109,9,18,3,18,1111,8,18,1,18,1,18,1,18,3,18,1116,
        8,18,3,18,1118,8,18,1,18,1,18,1,18,1,18,1,18,3,18,1125,8,18,1,18,
        1,18,1,18,1,18,3,18,1131,8,18,3,18,1133,8,18,1,19,1,19,3,19,1137,
        8,19,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,3,21,1147,8,21,1,21,
        1,21,1,21,1,21,3,21,1153,8,21,1,21,5,21,1156,8,21,10,21,12,21,1159,
        9,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,5,22,1168,8,22,10,22,12,
        22,1171,9,22,1,22,1,22,1,22,1,22,3,22,1177,8,22,1,23,1,23,3,23,1181,
        8,23,1,23,3,23,1184,8,23,1,23,1,23,3,23,1188,8,23,1,24,1,24,3,24,
        1192,8,24,1,24,1,24,1,24,5,24,1197,8,24,10,24,12,24,1200,9,24,1,
        24,1,24,1,24,1,24,5,24,1206,8,24,10,24,12,24,1209,9,24,3,24,1211,
        8,24,1,24,1,24,3,24,1215,8,24,1,24,1,24,1,24,3,24,1220,8,24,1,24,
        1,24,3,24,1224,8,24,1,24,1,24,1,24,1,24,5,24,1230,8,24,10,24,12,
        24,1233,9,24,3,24,1235,8,24,1,25,3,25,1238,8,25,1,25,1,25,1,25,5,
        25,1243,8,25,10,25,12,25,1246,9,25,1,26,1,26,1,26,1,26,1,26,1,26,
        5,26,1254,8,26,10,26,12,26,1257,9,26,3,26,1259,8,26,1,26,1,26,1,
        26,1,26,1,26,1,26,5,26,1267,8,26,10,26,12,26,1270,9,26,3,26,1272,
        8,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,5,26,1281,8,26,10,26,12,
        26,1284,9,26,1,26,1,26,3,26,1288,8,26,1,27,1,27,1,27,1,27,5,27,1294,
        8,27,10,27,12,27,1297,9,27,3,27,1299,8,27,1,27,1,27,3,27,1303,8,
        27,1,28,1,28,3,28,1307,8,28,1,29,1,29,1,29,1,29,1,29,1,29,1,30,3,
        30,1316,8,30,1,30,1,30,1,30,1,30,1,30,5,30,1323,8,30,10,30,12,30,
        1326,9,30,3,30,1328,8,30,1,30,1,30,1,30,1,30,1,30,5,30,1335,8,30,
        10,30,12,30,1338,9,30,3,30,1340,8,30,1,30,3,30,1343,8,30,1,31,1,
        31,3,31,1347,8,31,1,31,1,31,1,31,1,31,1,31,1,32,1,32,1,33,1,33,3,
        33,1358,8,33,1,33,3,33,1361,8,33,1,33,3,33,1364,8,33,1,33,1,33,1,
        33,1,33,1,33,3,33,1371,8,33,1,33,3,33,1374,8,33,1,34,1,34,1,34,1,
        34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,
        34,3,34,1393,8,34,5,34,1395,8,34,10,34,12,34,1398,9,34,1,35,3,35,
        1401,8,35,1,35,1,35,3,35,1405,8,35,1,35,1,35,3,35,1409,8,35,1,35,
        1,35,3,35,1413,8,35,3,35,1415,8,35,1,36,1,36,1,36,1,36,1,36,1,36,
        1,36,5,36,1424,8,36,10,36,12,36,1427,9,36,1,36,1,36,3,36,1431,8,
        36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,1440,8,37,1,38,1,38,1,
        39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,5,39,1452,8,39,10,39,12,39,
        1455,9,39,3,39,1457,8,39,1,39,1,39,1,39,1,39,1,39,5,39,1464,8,39,
        10,39,12,39,1467,9,39,3,39,1469,8,39,1,39,1,39,1,39,1,39,5,39,1475,
        8,39,10,39,12,39,1478,9,39,3,39,1480,8,39,1,39,3,39,1483,8,39,1,
        39,1,39,1,39,3,39,1488,8,39,1,39,3,39,1491,8,39,1,39,1,39,1,39,1,
        39,1,39,1,39,1,39,1,39,5,39,1501,8,39,10,39,12,39,1504,9,39,3,39,
        1506,8,39,1,39,1,39,1,39,1,39,5,39,1512,8,39,10,39,12,39,1515,9,
        39,1,39,1,39,3,39,1519,8,39,1,39,1,39,3,39,1523,8,39,3,39,1525,8,
        39,3,39,1527,8,39,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,
        41,1,41,1,41,1,41,3,41,1542,8,41,3,41,1544,8,41,1,42,1,42,1,42,1,
        42,1,42,1,42,1,42,1,42,1,42,3,42,1555,8,42,1,43,1,43,1,43,1,43,1,
        43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,
        43,1,43,3,43,1576,8,43,1,44,1,44,1,44,1,44,1,44,1,44,5,44,1584,8,
        44,10,44,12,44,1587,9,44,1,44,1,44,1,45,1,45,1,45,1,45,1,46,1,46,
        3,46,1597,8,46,1,46,1,46,3,46,1601,8,46,3,46,1603,8,46,1,47,1,47,
        1,47,1,47,5,47,1609,8,47,10,47,12,47,1612,9,47,1,47,1,47,1,48,1,
        48,1,48,1,48,5,48,1620,8,48,10,48,12,48,1623,9,48,1,48,1,48,1,49,
        1,49,1,49,1,49,5,49,1631,8,49,10,49,12,49,1634,9,49,1,49,1,49,1,
        50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,5,50,1648,8,50,10,
        50,12,50,1651,9,50,1,50,1,50,1,50,3,50,1656,8,50,1,50,1,50,1,50,
        1,50,1,50,1,50,1,50,1,50,1,50,3,50,1667,8,50,1,51,1,51,1,52,1,52,
        1,52,3,52,1674,8,52,1,52,1,52,3,52,1678,8,52,1,52,1,52,1,52,1,52,
        1,52,1,52,5,52,1686,8,52,10,52,12,52,1689,9,52,1,53,1,53,1,53,1,
        53,1,53,1,53,1,53,1,53,1,53,1,53,3,53,1701,8,53,1,53,1,53,1,53,1,
        53,1,53,1,53,3,53,1709,8,53,1,53,1,53,1,53,1,53,1,53,5,53,1716,8,
        53,10,53,12,53,1719,9,53,1,53,1,53,1,53,3,53,1724,8,53,1,53,1,53,
        1,53,1,53,1,53,1,53,3,53,1732,8,53,1,53,1,53,1,53,1,53,3,53,1738,
        8,53,1,53,1,53,3,53,1742,8,53,1,53,1,53,1,53,3,53,1747,8,53,1,53,
        1,53,1,53,3,53,1752,8,53,1,54,1,54,1,54,1,54,3,54,1758,8,54,1,54,
        1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,5,54,1772,
        8,54,10,54,12,54,1775,9,54,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,
        55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,
        55,1,55,1,55,1,55,1,55,4,55,1802,8,55,11,55,12,55,1803,1,55,1,55,
        1,55,1,55,1,55,1,55,1,55,5,55,1813,8,55,10,55,12,55,1816,9,55,1,
        55,1,55,1,55,1,55,1,55,1,55,1,55,3,55,1825,8,55,1,55,3,55,1828,8,
        55,1,55,3,55,1831,8,55,1,55,1,55,1,55,3,55,1836,8,55,1,55,1,55,1,
        55,5,55,1841,8,55,10,55,12,55,1844,9,55,3,55,1846,8,55,1,55,1,55,
        1,55,1,55,1,55,5,55,1853,8,55,10,55,12,55,1856,9,55,3,55,1858,8,
        55,1,55,1,55,3,55,1862,8,55,1,55,3,55,1865,8,55,1,55,3,55,1868,8,
        55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,5,55,1881,
        8,55,10,55,12,55,1884,9,55,3,55,1886,8,55,1,55,1,55,1,55,1,55,1,
        55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,4,55,1903,8,
        55,11,55,12,55,1904,1,55,1,55,3,55,1909,8,55,1,55,1,55,1,55,1,55,
        4,55,1915,8,55,11,55,12,55,1916,1,55,1,55,3,55,1921,8,55,1,55,1,
        55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,
        55,1,55,1,55,1,55,1,55,1,55,1,55,5,55,1944,8,55,10,55,12,55,1947,
        9,55,3,55,1949,8,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,3,55,1958,
        8,55,1,55,1,55,1,55,1,55,3,55,1964,8,55,1,55,1,55,1,55,1,55,3,55,
        1970,8,55,1,55,1,55,1,55,1,55,3,55,1976,8,55,1,55,1,55,1,55,1,55,
        1,55,1,55,1,55,1,55,1,55,1,55,1,55,3,55,1989,8,55,1,55,1,55,1,55,
        1,55,1,55,1,55,1,55,3,55,1998,8,55,1,55,1,55,1,55,1,55,1,55,1,55,
        1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,5,55,
        2018,8,55,10,55,12,55,2021,9,55,3,55,2023,8,55,1,55,3,55,2026,8,
        55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,5,55,2036,8,55,10,55,
        12,55,2039,9,55,1,56,1,56,1,57,1,57,1,57,1,57,3,57,2047,8,57,1,58,
        1,58,1,58,1,58,3,58,2053,8,58,3,58,2055,8,58,1,59,1,59,1,59,1,59,
        1,59,1,59,3,59,2063,8,59,1,60,1,60,1,61,1,61,1,62,1,62,1,63,1,63,
        3,63,2073,8,63,1,63,1,63,1,63,1,63,3,63,2079,8,63,1,64,1,64,1,65,
        1,65,1,66,1,66,1,66,1,66,1,66,1,66,5,66,2091,8,66,10,66,12,66,2094,
        9,66,1,66,1,66,1,66,1,66,1,66,1,66,3,66,2102,8,66,1,66,1,66,1,66,
        1,66,1,66,3,66,2109,8,66,1,66,1,66,1,66,3,66,2114,8,66,1,66,1,66,
        1,66,1,66,1,66,3,66,2121,8,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,
        1,66,3,66,2131,8,66,1,66,1,66,1,66,3,66,2136,8,66,1,66,1,66,1,66,
        1,66,1,66,3,66,2143,8,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,
        1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,
        1,66,5,66,2167,8,66,10,66,12,66,2170,9,66,1,66,1,66,3,66,2174,8,
        66,3,66,2176,8,66,1,66,1,66,1,66,1,66,1,66,3,66,2183,8,66,5,66,2185,
        8,66,10,66,12,66,2188,9,66,1,67,1,67,1,67,1,67,3,67,2194,8,67,1,
        68,1,68,3,68,2198,8,68,1,69,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,
        70,1,70,1,70,1,71,1,71,1,71,1,71,3,71,2215,8,71,1,71,1,71,1,71,1,
        71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,5,71,2228,8,71,10,71,12,71,
        2231,9,71,1,71,1,71,1,71,1,71,3,71,2237,8,71,1,71,1,71,1,71,1,71,
        1,71,1,71,1,71,3,71,2246,8,71,1,71,1,71,1,71,1,71,1,71,1,71,5,71,
        2254,8,71,10,71,12,71,2257,9,71,1,71,1,71,3,71,2261,8,71,1,71,1,
        71,1,71,1,71,1,71,5,71,2268,8,71,10,71,12,71,2271,9,71,1,71,1,71,
        3,71,2275,8,71,1,72,1,72,1,72,1,72,1,72,1,72,3,72,2283,8,72,1,73,
        1,73,1,73,1,73,5,73,2289,8,73,10,73,12,73,2292,9,73,3,73,2294,8,
        73,1,73,1,73,1,73,1,73,3,73,2300,8,73,1,73,3,73,2303,8,73,1,73,1,
        73,1,73,1,73,1,73,3,73,2310,8,73,1,73,1,73,1,73,1,73,5,73,2316,8,
        73,10,73,12,73,2319,9,73,3,73,2321,8,73,1,73,1,73,1,73,1,73,5,73,
        2327,8,73,10,73,12,73,2330,9,73,3,73,2332,8,73,1,74,1,74,1,74,1,
        74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,
        74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,3,74,2358,8,74,1,75,1,75,1,
        75,1,75,1,75,1,75,1,75,1,75,1,75,3,75,2369,8,75,1,76,1,76,1,76,3,
        76,2374,8,76,1,76,1,76,1,76,1,76,1,76,5,76,2381,8,76,10,76,12,76,
        2384,9,76,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,5,77,2394,8,77,
        10,77,12,77,2397,9,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,
        77,1,77,1,77,1,77,3,77,2411,8,77,1,78,1,78,3,78,2415,8,78,1,78,1,
        78,3,78,2419,8,78,1,78,1,78,3,78,2423,8,78,1,78,1,78,1,78,1,78,3,
        78,2429,8,78,1,78,1,78,3,78,2433,8,78,1,78,1,78,3,78,2437,8,78,1,
        78,1,78,3,78,2441,8,78,3,78,2443,8,78,1,79,1,79,1,79,1,79,1,80,1,
        80,1,80,1,80,3,80,2453,8,80,1,81,1,81,1,81,1,81,1,81,3,81,2460,8,
        81,1,82,1,82,1,82,1,82,1,82,1,82,1,82,3,82,2469,8,82,1,83,1,83,1,
        83,1,83,1,83,3,83,2476,8,83,1,84,1,84,1,84,1,84,1,84,3,84,2483,8,
        84,1,85,1,85,1,85,5,85,2488,8,85,10,85,12,85,2491,9,85,1,86,1,86,
        1,87,1,87,3,87,2497,8,87,1,88,1,88,1,89,1,89,1,90,1,90,1,91,1,91,
        1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,3,92,2518,
        8,92,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,3,93,
        2531,8,93,1,94,1,94,1,95,1,95,1,96,1,96,1,96,1,96,1,96,3,96,2542,
        8,96,1,97,1,97,1,98,1,98,1,99,1,99,1,100,1,100,1,101,1,101,1,102,
        1,102,1,102,5,102,2557,8,102,10,102,12,102,2560,9,102,1,103,1,103,
        1,103,3,103,2565,8,103,1,104,1,104,1,104,1,104,1,104,3,104,2572,
        8,104,1,105,1,105,1,105,5,105,2577,8,105,10,105,12,105,2580,9,105,
        1,106,1,106,1,106,1,106,1,106,3,106,2587,8,106,1,107,3,107,2590,
        8,107,1,107,1,107,3,107,2594,8,107,1,107,1,107,3,107,2598,8,107,
        1,107,3,107,2601,8,107,1,108,1,108,1,108,0,7,42,68,104,108,110,132,
        152,109,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
        42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
        86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,
        122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,
        154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,
        186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,
        0,27,2,0,34,34,185,185,2,0,61,61,112,112,2,0,88,88,103,103,2,0,75,
        75,104,104,1,0,192,193,2,0,84,84,139,139,2,0,261,261,265,265,2,0,
        74,74,229,229,2,0,27,27,63,63,2,0,84,84,118,118,2,0,20,20,66,66,
        2,0,30,30,211,211,2,0,105,105,199,199,1,0,255,256,1,0,257,259,2,
        0,83,83,194,194,1,0,249,254,3,0,20,20,24,24,206,206,2,0,80,80,223,
        223,5,0,58,58,100,100,136,137,197,197,247,247,1,0,140,143,2,0,85,
        85,171,171,3,0,95,95,117,117,215,215,4,0,67,67,113,113,127,127,236,
        236,2,0,155,155,246,246,4,0,62,62,108,108,200,200,232,232,49,0,17,
        20,22,22,24,25,27,30,33,34,37,42,47,47,56,59,61,61,63,63,65,65,67,
        68,71,71,75,75,78,78,81,85,87,87,90,95,98,98,100,102,104,105,107,
        107,110,110,112,113,115,115,117,119,121,121,123,124,127,137,139,
        145,149,152,154,156,159,159,161,172,174,177,179,186,188,190,192,
        199,201,211,213,215,217,222,224,225,227,228,230,230,232,234,236,
        236,238,239,242,242,244,248,3005,0,221,1,0,0,0,2,226,1,0,0,0,4,232,
        1,0,0,0,6,234,1,0,0,0,8,238,1,0,0,0,10,242,1,0,0,0,12,246,1,0,0,
        0,14,250,1,0,0,0,16,1036,1,0,0,0,18,1039,1,0,0,0,20,1043,1,0,0,0,
        22,1057,1,0,0,0,24,1059,1,0,0,0,26,1073,1,0,0,0,28,1079,1,0,0,0,
        30,1083,1,0,0,0,32,1091,1,0,0,0,34,1097,1,0,0,0,36,1099,1,0,0,0,
        38,1136,1,0,0,0,40,1138,1,0,0,0,42,1140,1,0,0,0,44,1176,1,0,0,0,
        46,1180,1,0,0,0,48,1189,1,0,0,0,50,1237,1,0,0,0,52,1287,1,0,0,0,
        54,1302,1,0,0,0,56,1306,1,0,0,0,58,1308,1,0,0,0,60,1315,1,0,0,0,
        62,1344,1,0,0,0,64,1353,1,0,0,0,66,1373,1,0,0,0,68,1375,1,0,0,0,
        70,1414,1,0,0,0,72,1430,1,0,0,0,74,1432,1,0,0,0,76,1441,1,0,0,0,
        78,1443,1,0,0,0,80,1528,1,0,0,0,82,1543,1,0,0,0,84,1554,1,0,0,0,
        86,1575,1,0,0,0,88,1577,1,0,0,0,90,1590,1,0,0,0,92,1594,1,0,0,0,
        94,1604,1,0,0,0,96,1615,1,0,0,0,98,1626,1,0,0,0,100,1666,1,0,0,0,
        102,1668,1,0,0,0,104,1677,1,0,0,0,106,1751,1,0,0,0,108,1757,1,0,
        0,0,110,2025,1,0,0,0,112,2040,1,0,0,0,114,2046,1,0,0,0,116,2054,
        1,0,0,0,118,2062,1,0,0,0,120,2064,1,0,0,0,122,2066,1,0,0,0,124,2068,
        1,0,0,0,126,2070,1,0,0,0,128,2080,1,0,0,0,130,2082,1,0,0,0,132,2175,
        1,0,0,0,134,2193,1,0,0,0,136,2197,1,0,0,0,138,2199,1,0,0,0,140,2204,
        1,0,0,0,142,2274,1,0,0,0,144,2276,1,0,0,0,146,2293,1,0,0,0,148,2357,
        1,0,0,0,150,2368,1,0,0,0,152,2370,1,0,0,0,154,2410,1,0,0,0,156,2442,
        1,0,0,0,158,2444,1,0,0,0,160,2452,1,0,0,0,162,2459,1,0,0,0,164,2468,
        1,0,0,0,166,2475,1,0,0,0,168,2482,1,0,0,0,170,2484,1,0,0,0,172,2492,
        1,0,0,0,174,2496,1,0,0,0,176,2498,1,0,0,0,178,2500,1,0,0,0,180,2502,
        1,0,0,0,182,2504,1,0,0,0,184,2517,1,0,0,0,186,2530,1,0,0,0,188,2532,
        1,0,0,0,190,2534,1,0,0,0,192,2541,1,0,0,0,194,2543,1,0,0,0,196,2545,
        1,0,0,0,198,2547,1,0,0,0,200,2549,1,0,0,0,202,2551,1,0,0,0,204,2553,
        1,0,0,0,206,2564,1,0,0,0,208,2571,1,0,0,0,210,2573,1,0,0,0,212,2586,
        1,0,0,0,214,2600,1,0,0,0,216,2602,1,0,0,0,218,220,3,2,1,0,219,218,
        1,0,0,0,220,223,1,0,0,0,221,219,1,0,0,0,221,222,1,0,0,0,222,224,
        1,0,0,0,223,221,1,0,0,0,224,225,5,0,0,1,225,1,1,0,0,0,226,227,3,
        6,3,0,227,3,1,0,0,0,228,233,3,8,4,0,229,233,3,10,5,0,230,233,3,12,
        6,0,231,233,3,14,7,0,232,228,1,0,0,0,232,229,1,0,0,0,232,230,1,0,
        0,0,232,231,1,0,0,0,233,5,1,0,0,0,234,236,3,16,8,0,235,237,5,272,
        0,0,236,235,1,0,0,0,236,237,1,0,0,0,237,7,1,0,0,0,238,240,3,102,
        51,0,239,241,5,272,0,0,240,239,1,0,0,0,240,241,1,0,0,0,241,9,1,0,
        0,0,242,244,3,170,85,0,243,245,5,272,0,0,244,243,1,0,0,0,244,245,
        1,0,0,0,245,11,1,0,0,0,246,248,3,132,66,0,247,249,5,272,0,0,248,
        247,1,0,0,0,248,249,1,0,0,0,249,13,1,0,0,0,250,252,3,152,76,0,251,
        253,5,272,0,0,252,251,1,0,0,0,252,253,1,0,0,0,253,15,1,0,0,0,254,
        1037,3,18,9,0,255,256,5,233,0,0,256,1037,3,188,94,0,257,258,5,44,
        0,0,258,262,5,195,0,0,259,260,5,101,0,0,260,261,5,147,0,0,261,263,
        5,77,0,0,262,259,1,0,0,0,262,263,1,0,0,0,263,264,1,0,0,0,264,267,
        3,190,95,0,265,266,5,29,0,0,266,268,3,208,104,0,267,265,1,0,0,0,
        267,268,1,0,0,0,268,271,1,0,0,0,269,270,5,243,0,0,270,272,3,28,14,
        0,271,269,1,0,0,0,271,272,1,0,0,0,272,1037,1,0,0,0,273,274,5,69,
        0,0,274,277,5,195,0,0,275,276,5,101,0,0,276,278,5,77,0,0,277,275,
        1,0,0,0,277,278,1,0,0,0,278,279,1,0,0,0,279,281,3,188,94,0,280,282,
        7,0,0,0,281,280,1,0,0,0,281,282,1,0,0,0,282,1037,1,0,0,0,283,284,
        5,21,0,0,284,285,5,195,0,0,285,286,3,188,94,0,286,287,5,180,0,0,
        287,288,5,220,0,0,288,289,3,190,95,0,289,1037,1,0,0,0,290,291,5,
        21,0,0,291,292,5,195,0,0,292,293,3,188,94,0,293,294,5,203,0,0,294,
        295,5,29,0,0,295,296,3,208,104,0,296,1037,1,0,0,0,297,298,5,44,0,
        0,298,302,5,212,0,0,299,300,5,101,0,0,300,301,5,147,0,0,301,303,
        5,77,0,0,302,299,1,0,0,0,302,303,1,0,0,0,303,304,1,0,0,0,304,306,
        3,178,89,0,305,307,3,94,47,0,306,305,1,0,0,0,306,307,1,0,0,0,307,
        310,1,0,0,0,308,309,5,40,0,0,309,311,3,116,58,0,310,308,1,0,0,0,
        310,311,1,0,0,0,311,314,1,0,0,0,312,313,5,243,0,0,313,315,3,28,14,
        0,314,312,1,0,0,0,314,315,1,0,0,0,315,316,1,0,0,0,316,322,5,26,0,
        0,317,323,3,18,9,0,318,319,5,1,0,0,319,320,3,18,9,0,320,321,5,2,
        0,0,321,323,1,0,0,0,322,317,1,0,0,0,322,318,1,0,0,0,323,329,1,0,
        0,0,324,326,5,243,0,0,325,327,5,144,0,0,326,325,1,0,0,0,326,327,
        1,0,0,0,327,328,1,0,0,0,328,330,5,56,0,0,329,324,1,0,0,0,329,330,
        1,0,0,0,330,1037,1,0,0,0,331,332,5,44,0,0,332,336,5,212,0,0,333,
        334,5,101,0,0,334,335,5,147,0,0,335,337,5,77,0,0,336,333,1,0,0,0,
        336,337,1,0,0,0,337,338,1,0,0,0,338,339,3,178,89,0,339,340,5,1,0,
        0,340,345,3,22,11,0,341,342,5,3,0,0,342,344,3,22,11,0,343,341,1,
        0,0,0,344,347,1,0,0,0,345,343,1,0,0,0,345,346,1,0,0,0,346,348,1,
        0,0,0,347,345,1,0,0,0,348,351,5,2,0,0,349,350,5,40,0,0,350,352,3,
        116,58,0,351,349,1,0,0,0,351,352,1,0,0,0,352,355,1,0,0,0,353,354,
        5,243,0,0,354,356,3,28,14,0,355,353,1,0,0,0,355,356,1,0,0,0,356,
        1037,1,0,0,0,357,358,5,69,0,0,358,361,5,212,0,0,359,360,5,101,0,
        0,360,362,5,77,0,0,361,359,1,0,0,0,361,362,1,0,0,0,362,363,1,0,0,
        0,363,1037,3,176,88,0,364,365,5,108,0,0,365,366,5,111,0,0,366,368,
        3,176,88,0,367,369,3,96,48,0,368,367,1,0,0,0,368,369,1,0,0,0,369,
        370,1,0,0,0,370,371,3,18,9,0,371,1037,1,0,0,0,372,373,5,62,0,0,373,
        374,5,88,0,0,374,377,3,176,88,0,375,376,5,241,0,0,376,378,3,104,
        52,0,377,375,1,0,0,0,377,378,1,0,0,0,378,1037,1,0,0,0,379,380,5,
        222,0,0,380,381,5,212,0,0,381,1037,3,176,88,0,382,383,5,21,0,0,383,
        386,5,212,0,0,384,385,5,101,0,0,385,387,5,77,0,0,386,384,1,0,0,0,
        386,387,1,0,0,0,387,388,1,0,0,0,388,389,3,176,88,0,389,390,5,180,
        0,0,390,391,5,220,0,0,391,392,3,178,89,0,392,1037,1,0,0,0,393,394,
        5,40,0,0,394,395,5,153,0,0,395,396,5,212,0,0,396,397,3,176,88,0,
        397,400,5,114,0,0,398,401,3,116,58,0,399,401,5,148,0,0,400,398,1,
        0,0,0,400,399,1,0,0,0,401,1037,1,0,0,0,402,403,5,40,0,0,403,404,
        5,153,0,0,404,405,5,38,0,0,405,406,3,200,100,0,406,409,5,114,0,0,
        407,410,3,116,58,0,408,410,5,148,0,0,409,407,1,0,0,0,409,408,1,0,
        0,0,410,1037,1,0,0,0,411,412,5,21,0,0,412,415,5,212,0,0,413,414,
        5,101,0,0,414,416,5,77,0,0,415,413,1,0,0,0,415,416,1,0,0,0,416,417,
        1,0,0,0,417,418,3,176,88,0,418,419,5,180,0,0,419,422,5,38,0,0,420,
        421,5,101,0,0,421,423,5,77,0,0,422,420,1,0,0,0,422,423,1,0,0,0,423,
        424,1,0,0,0,424,425,3,200,100,0,425,426,5,220,0,0,426,427,3,202,
        101,0,427,1037,1,0,0,0,428,429,5,21,0,0,429,432,5,212,0,0,430,431,
        5,101,0,0,431,433,5,77,0,0,432,430,1,0,0,0,432,433,1,0,0,0,433,434,
        1,0,0,0,434,435,3,176,88,0,435,436,5,69,0,0,436,439,5,38,0,0,437,
        438,5,101,0,0,438,440,5,77,0,0,439,437,1,0,0,0,439,440,1,0,0,0,440,
        441,1,0,0,0,441,442,3,200,100,0,442,1037,1,0,0,0,443,444,5,21,0,
        0,444,447,5,212,0,0,445,446,5,101,0,0,446,448,5,77,0,0,447,445,1,
        0,0,0,447,448,1,0,0,0,448,449,1,0,0,0,449,450,3,176,88,0,450,451,
        5,17,0,0,451,455,5,38,0,0,452,453,5,101,0,0,453,454,5,147,0,0,454,
        456,5,77,0,0,455,452,1,0,0,0,455,456,1,0,0,0,456,457,1,0,0,0,457,
        458,3,24,12,0,458,1037,1,0,0,0,459,460,5,21,0,0,460,461,5,212,0,
        0,461,462,3,176,88,0,462,463,5,203,0,0,463,464,5,29,0,0,464,465,
        3,208,104,0,465,1037,1,0,0,0,466,467,5,21,0,0,467,468,5,212,0,0,
        468,469,3,176,88,0,469,470,5,203,0,0,470,471,5,175,0,0,471,472,3,
        30,15,0,472,1037,1,0,0,0,473,474,5,21,0,0,474,475,5,212,0,0,475,
        476,3,176,88,0,476,477,5,76,0,0,477,490,3,212,106,0,478,487,5,1,
        0,0,479,484,3,166,83,0,480,481,5,3,0,0,481,483,3,166,83,0,482,480,
        1,0,0,0,483,486,1,0,0,0,484,482,1,0,0,0,484,485,1,0,0,0,485,488,
        1,0,0,0,486,484,1,0,0,0,487,479,1,0,0,0,487,488,1,0,0,0,488,489,
        1,0,0,0,489,491,5,2,0,0,490,478,1,0,0,0,490,491,1,0,0,0,491,494,
        1,0,0,0,492,493,5,241,0,0,493,495,3,104,52,0,494,492,1,0,0,0,494,
        495,1,0,0,0,495,1037,1,0,0,0,496,497,5,22,0,0,497,500,3,176,88,0,
        498,499,5,243,0,0,499,501,3,28,14,0,500,498,1,0,0,0,500,501,1,0,
        0,0,501,1037,1,0,0,0,502,505,5,44,0,0,503,504,5,157,0,0,504,506,
        5,182,0,0,505,503,1,0,0,0,505,506,1,0,0,0,506,507,1,0,0,0,507,508,
        5,133,0,0,508,512,5,239,0,0,509,510,5,101,0,0,510,511,5,147,0,0,
        511,513,5,77,0,0,512,509,1,0,0,0,512,513,1,0,0,0,513,514,1,0,0,0,
        514,517,3,182,91,0,515,516,5,40,0,0,516,518,3,116,58,0,517,515,1,
        0,0,0,517,518,1,0,0,0,518,521,1,0,0,0,519,520,5,243,0,0,520,522,
        3,28,14,0,521,519,1,0,0,0,521,522,1,0,0,0,522,523,1,0,0,0,523,524,
        5,26,0,0,524,525,3,18,9,0,525,1037,1,0,0,0,526,529,5,44,0,0,527,
        528,5,157,0,0,528,530,5,182,0,0,529,527,1,0,0,0,529,530,1,0,0,0,
        530,531,1,0,0,0,531,532,5,239,0,0,532,535,3,182,91,0,533,534,5,40,
        0,0,534,536,3,116,58,0,535,533,1,0,0,0,535,536,1,0,0,0,536,539,1,
        0,0,0,537,538,5,198,0,0,538,540,7,1,0,0,539,537,1,0,0,0,539,540,
        1,0,0,0,540,541,1,0,0,0,541,542,5,26,0,0,542,543,3,18,9,0,543,1037,
        1,0,0,0,544,545,5,179,0,0,545,546,5,133,0,0,546,547,5,239,0,0,547,
        1037,3,180,90,0,548,549,5,69,0,0,549,550,5,133,0,0,550,553,5,239,
        0,0,551,552,5,101,0,0,552,554,5,77,0,0,553,551,1,0,0,0,553,554,1,
        0,0,0,554,555,1,0,0,0,555,1037,3,180,90,0,556,557,5,21,0,0,557,558,
        5,133,0,0,558,561,5,239,0,0,559,560,5,101,0,0,560,562,5,77,0,0,561,
        559,1,0,0,0,561,562,1,0,0,0,562,563,1,0,0,0,563,564,3,180,90,0,564,
        565,5,180,0,0,565,566,5,220,0,0,566,567,3,182,91,0,567,1037,1,0,
        0,0,568,569,5,21,0,0,569,570,5,133,0,0,570,571,5,239,0,0,571,572,
        3,180,90,0,572,573,5,203,0,0,573,574,5,175,0,0,574,575,3,30,15,0,
        575,1037,1,0,0,0,576,577,5,69,0,0,577,580,5,239,0,0,578,579,5,101,
        0,0,579,581,5,77,0,0,580,578,1,0,0,0,580,581,1,0,0,0,581,582,1,0,
        0,0,582,1037,3,180,90,0,583,584,5,21,0,0,584,585,5,239,0,0,585,586,
        3,180,90,0,586,587,5,180,0,0,587,588,5,220,0,0,588,589,3,182,91,
        0,589,1037,1,0,0,0,590,591,5,21,0,0,591,592,5,239,0,0,592,593,3,
        180,90,0,593,594,5,203,0,0,594,595,5,29,0,0,595,596,3,208,104,0,
        596,1037,1,0,0,0,597,598,5,33,0,0,598,599,3,198,99,0,599,608,5,1,
        0,0,600,605,3,166,83,0,601,602,5,3,0,0,602,604,3,166,83,0,603,601,
        1,0,0,0,604,607,1,0,0,0,605,603,1,0,0,0,605,606,1,0,0,0,606,609,
        1,0,0,0,607,605,1,0,0,0,608,600,1,0,0,0,608,609,1,0,0,0,609,610,
        1,0,0,0,610,611,5,2,0,0,611,1037,1,0,0,0,612,613,5,44,0,0,613,614,
        5,188,0,0,614,618,3,212,106,0,615,616,5,243,0,0,616,617,5,18,0,0,
        617,619,3,206,103,0,618,615,1,0,0,0,618,619,1,0,0,0,619,622,1,0,
        0,0,620,621,5,103,0,0,621,623,3,194,97,0,622,620,1,0,0,0,622,623,
        1,0,0,0,623,1037,1,0,0,0,624,625,5,69,0,0,625,626,5,188,0,0,626,
        1037,3,212,106,0,627,628,5,91,0,0,628,629,3,210,105,0,629,630,5,
        220,0,0,630,635,3,208,104,0,631,632,5,3,0,0,632,634,3,208,104,0,
        633,631,1,0,0,0,634,637,1,0,0,0,635,633,1,0,0,0,635,636,1,0,0,0,
        636,641,1,0,0,0,637,635,1,0,0,0,638,639,5,243,0,0,639,640,5,18,0,
        0,640,642,5,156,0,0,641,638,1,0,0,0,641,642,1,0,0,0,642,646,1,0,
        0,0,643,644,5,92,0,0,644,645,5,32,0,0,645,647,3,206,103,0,646,643,
        1,0,0,0,646,647,1,0,0,0,647,650,1,0,0,0,648,649,5,103,0,0,649,651,
        3,194,97,0,650,648,1,0,0,0,650,651,1,0,0,0,651,1037,1,0,0,0,652,
        656,5,186,0,0,653,654,5,18,0,0,654,655,5,156,0,0,655,657,5,86,0,
        0,656,653,1,0,0,0,656,657,1,0,0,0,657,658,1,0,0,0,658,659,3,210,
        105,0,659,660,5,88,0,0,660,665,3,208,104,0,661,662,5,3,0,0,662,664,
        3,208,104,0,663,661,1,0,0,0,664,667,1,0,0,0,665,663,1,0,0,0,665,
        666,1,0,0,0,666,671,1,0,0,0,667,665,1,0,0,0,668,669,5,92,0,0,669,
        670,5,32,0,0,670,672,3,206,103,0,671,668,1,0,0,0,671,672,1,0,0,0,
        672,675,1,0,0,0,673,674,5,103,0,0,674,676,3,194,97,0,675,673,1,0,
        0,0,675,676,1,0,0,0,676,1037,1,0,0,0,677,678,5,203,0,0,678,682,5,
        188,0,0,679,683,5,20,0,0,680,683,5,145,0,0,681,683,3,212,106,0,682,
        679,1,0,0,0,682,680,1,0,0,0,682,681,1,0,0,0,683,686,1,0,0,0,684,
        685,5,103,0,0,685,687,3,194,97,0,686,684,1,0,0,0,686,687,1,0,0,0,
        687,1037,1,0,0,0,688,699,5,91,0,0,689,694,3,172,86,0,690,691,5,3,
        0,0,691,693,3,172,86,0,692,690,1,0,0,0,693,696,1,0,0,0,694,692,1,
        0,0,0,694,695,1,0,0,0,695,700,1,0,0,0,696,694,1,0,0,0,697,698,5,
        20,0,0,698,700,5,174,0,0,699,689,1,0,0,0,699,697,1,0,0,0,700,701,
        1,0,0,0,701,710,5,153,0,0,702,704,5,195,0,0,703,702,1,0,0,0,703,
        704,1,0,0,0,704,705,1,0,0,0,705,711,3,188,94,0,706,708,5,212,0,0,
        707,706,1,0,0,0,707,708,1,0,0,0,708,709,1,0,0,0,709,711,3,176,88,
        0,710,703,1,0,0,0,710,707,1,0,0,0,710,711,1,0,0,0,711,712,1,0,0,
        0,712,713,5,220,0,0,713,717,3,208,104,0,714,715,5,243,0,0,715,716,
        5,91,0,0,716,718,5,156,0,0,717,714,1,0,0,0,717,718,1,0,0,0,718,1037,
        1,0,0,0,719,730,5,94,0,0,720,725,3,172,86,0,721,722,5,3,0,0,722,
        724,3,172,86,0,723,721,1,0,0,0,724,727,1,0,0,0,725,723,1,0,0,0,725,
        726,1,0,0,0,726,731,1,0,0,0,727,725,1,0,0,0,728,729,5,20,0,0,729,
        731,5,174,0,0,730,720,1,0,0,0,730,728,1,0,0,0,731,732,1,0,0,0,732,
        741,5,153,0,0,733,735,5,195,0,0,734,733,1,0,0,0,734,735,1,0,0,0,
        735,736,1,0,0,0,736,742,3,188,94,0,737,739,5,212,0,0,738,737,1,0,
        0,0,738,739,1,0,0,0,739,740,1,0,0,0,740,742,3,176,88,0,741,734,1,
        0,0,0,741,738,1,0,0,0,742,743,1,0,0,0,743,744,5,220,0,0,744,745,
        3,208,104,0,745,1037,1,0,0,0,746,750,5,186,0,0,747,748,5,91,0,0,
        748,749,5,156,0,0,749,751,5,86,0,0,750,747,1,0,0,0,750,751,1,0,0,
        0,751,762,1,0,0,0,752,757,3,172,86,0,753,754,5,3,0,0,754,756,3,172,
        86,0,755,753,1,0,0,0,756,759,1,0,0,0,757,755,1,0,0,0,757,758,1,0,
        0,0,758,763,1,0,0,0,759,757,1,0,0,0,760,761,5,20,0,0,761,763,5,174,
        0,0,762,752,1,0,0,0,762,760,1,0,0,0,763,764,1,0,0,0,764,773,5,153,
        0,0,765,767,5,195,0,0,766,765,1,0,0,0,766,767,1,0,0,0,767,768,1,
        0,0,0,768,774,3,188,94,0,769,771,5,212,0,0,770,769,1,0,0,0,770,771,
        1,0,0,0,771,772,1,0,0,0,772,774,3,176,88,0,773,766,1,0,0,0,773,770,
        1,0,0,0,773,774,1,0,0,0,774,775,1,0,0,0,775,776,5,88,0,0,776,1037,
        3,208,104,0,777,778,5,205,0,0,778,784,5,93,0,0,779,781,5,153,0,0,
        780,782,5,212,0,0,781,780,1,0,0,0,781,782,1,0,0,0,782,783,1,0,0,
        0,783,785,3,176,88,0,784,779,1,0,0,0,784,785,1,0,0,0,785,1037,1,
        0,0,0,786,788,5,78,0,0,787,789,5,22,0,0,788,787,1,0,0,0,788,789,
        1,0,0,0,789,791,1,0,0,0,790,792,5,238,0,0,791,790,1,0,0,0,791,792,
        1,0,0,0,792,804,1,0,0,0,793,794,5,1,0,0,794,799,3,160,80,0,795,796,
        5,3,0,0,796,798,3,160,80,0,797,795,1,0,0,0,798,801,1,0,0,0,799,797,
        1,0,0,0,799,800,1,0,0,0,800,802,1,0,0,0,801,799,1,0,0,0,802,803,
        5,2,0,0,803,805,1,0,0,0,804,793,1,0,0,0,804,805,1,0,0,0,805,806,
        1,0,0,0,806,1037,3,16,8,0,807,808,5,205,0,0,808,809,5,44,0,0,809,
        810,5,212,0,0,810,1037,3,176,88,0,811,812,5,205,0,0,812,813,5,44,
        0,0,813,814,5,195,0,0,814,1037,3,188,94,0,815,816,5,205,0,0,816,
        817,5,44,0,0,817,818,5,239,0,0,818,1037,3,180,90,0,819,820,5,205,
        0,0,820,821,5,44,0,0,821,822,5,133,0,0,822,823,5,239,0,0,823,1037,
        3,180,90,0,824,825,5,205,0,0,825,828,5,213,0,0,826,827,7,2,0,0,827,
        829,3,188,94,0,828,826,1,0,0,0,828,829,1,0,0,0,829,836,1,0,0,0,830,
        831,5,122,0,0,831,834,3,116,58,0,832,833,5,73,0,0,833,835,3,116,
        58,0,834,832,1,0,0,0,834,835,1,0,0,0,835,837,1,0,0,0,836,830,1,0,
        0,0,836,837,1,0,0,0,837,1037,1,0,0,0,838,839,5,205,0,0,839,842,5,
        196,0,0,840,841,7,2,0,0,841,843,3,194,97,0,842,840,1,0,0,0,842,843,
        1,0,0,0,843,850,1,0,0,0,844,845,5,122,0,0,845,848,3,116,58,0,846,
        847,5,73,0,0,847,849,3,116,58,0,848,846,1,0,0,0,848,849,1,0,0,0,
        849,851,1,0,0,0,850,844,1,0,0,0,850,851,1,0,0,0,851,1037,1,0,0,0,
        852,853,5,205,0,0,853,860,5,37,0,0,854,855,5,122,0,0,855,858,3,116,
        58,0,856,857,5,73,0,0,857,859,3,116,58,0,858,856,1,0,0,0,858,859,
        1,0,0,0,859,861,1,0,0,0,860,854,1,0,0,0,860,861,1,0,0,0,861,1037,
        1,0,0,0,862,863,5,205,0,0,863,864,5,39,0,0,864,866,7,2,0,0,865,867,
        3,174,87,0,866,865,1,0,0,0,866,867,1,0,0,0,867,874,1,0,0,0,868,869,
        5,122,0,0,869,872,3,116,58,0,870,871,5,73,0,0,871,873,3,116,58,0,
        872,870,1,0,0,0,872,873,1,0,0,0,873,875,1,0,0,0,874,868,1,0,0,0,
        874,875,1,0,0,0,875,1037,1,0,0,0,876,877,5,205,0,0,877,878,5,208,
        0,0,878,879,5,86,0,0,879,1037,3,176,88,0,880,881,5,205,0,0,881,882,
        5,208,0,0,882,883,5,86,0,0,883,884,5,1,0,0,884,885,3,18,9,0,885,
        886,5,2,0,0,886,1037,1,0,0,0,887,889,5,205,0,0,888,890,5,47,0,0,
        889,888,1,0,0,0,889,890,1,0,0,0,890,891,1,0,0,0,891,894,5,189,0,
        0,892,893,7,2,0,0,893,895,3,212,106,0,894,892,1,0,0,0,894,895,1,
        0,0,0,895,1037,1,0,0,0,896,897,5,205,0,0,897,898,5,188,0,0,898,901,
        5,93,0,0,899,900,7,2,0,0,900,902,3,212,106,0,901,899,1,0,0,0,901,
        902,1,0,0,0,902,1037,1,0,0,0,903,904,5,64,0,0,904,1037,3,174,87,
        0,905,906,5,63,0,0,906,1037,3,174,87,0,907,908,5,205,0,0,908,915,
        5,90,0,0,909,910,5,122,0,0,910,913,3,116,58,0,911,912,5,73,0,0,912,
        914,3,116,58,0,913,911,1,0,0,0,913,914,1,0,0,0,914,916,1,0,0,0,915,
        909,1,0,0,0,915,916,1,0,0,0,916,1037,1,0,0,0,917,918,5,205,0,0,918,
        925,5,202,0,0,919,920,5,122,0,0,920,923,3,116,58,0,921,922,5,73,
        0,0,922,924,3,116,58,0,923,921,1,0,0,0,923,924,1,0,0,0,924,926,1,
        0,0,0,925,919,1,0,0,0,925,926,1,0,0,0,926,1037,1,0,0,0,927,928,5,
        203,0,0,928,929,5,202,0,0,929,930,3,204,102,0,930,931,5,249,0,0,
        931,932,3,102,51,0,932,1037,1,0,0,0,933,934,5,183,0,0,934,935,5,
        202,0,0,935,1037,3,204,102,0,936,937,5,207,0,0,937,946,5,221,0,0,
        938,943,3,162,81,0,939,940,5,3,0,0,940,942,3,162,81,0,941,939,1,
        0,0,0,942,945,1,0,0,0,943,941,1,0,0,0,943,944,1,0,0,0,944,947,1,
        0,0,0,945,943,1,0,0,0,946,938,1,0,0,0,946,947,1,0,0,0,947,1037,1,
        0,0,0,948,950,5,41,0,0,949,951,5,245,0,0,950,949,1,0,0,0,950,951,
        1,0,0,0,951,1037,1,0,0,0,952,954,5,190,0,0,953,955,5,245,0,0,954,
        953,1,0,0,0,954,955,1,0,0,0,955,1037,1,0,0,0,956,957,5,173,0,0,957,
        958,3,212,106,0,958,959,5,88,0,0,959,960,3,16,8,0,960,1037,1,0,0,
        0,961,962,5,60,0,0,962,963,5,173,0,0,963,1037,3,212,106,0,964,965,
        5,76,0,0,965,975,3,212,106,0,966,967,5,235,0,0,967,972,3,102,51,
        0,968,969,5,3,0,0,969,971,3,102,51,0,970,968,1,0,0,0,971,974,1,0,
        0,0,972,970,1,0,0,0,972,973,1,0,0,0,973,976,1,0,0,0,974,972,1,0,
        0,0,975,966,1,0,0,0,975,976,1,0,0,0,976,1037,1,0,0,0,977,978,5,64,
        0,0,978,979,5,107,0,0,979,1037,3,212,106,0,980,981,5,64,0,0,981,
        982,5,161,0,0,982,1037,3,212,106,0,983,984,5,203,0,0,984,985,5,166,
        0,0,985,1037,3,170,85,0,986,987,5,203,0,0,987,988,5,218,0,0,988,
        991,5,248,0,0,989,992,5,124,0,0,990,992,3,102,51,0,991,989,1,0,0,
        0,991,990,1,0,0,0,992,1037,1,0,0,0,993,994,5,232,0,0,994,995,3,176,
        88,0,995,996,5,203,0,0,996,1001,3,158,79,0,997,998,5,3,0,0,998,1000,
        3,158,79,0,999,997,1,0,0,0,1000,1003,1,0,0,0,1001,999,1,0,0,0,1001,
        1002,1,0,0,0,1002,1006,1,0,0,0,1003,1001,1,0,0,0,1004,1005,5,241,
        0,0,1005,1007,3,104,52,0,1006,1004,1,0,0,0,1006,1007,1,0,0,0,1007,
        1037,1,0,0,0,1008,1009,5,135,0,0,1009,1010,5,111,0,0,1010,1015,3,
        176,88,0,1011,1013,5,26,0,0,1012,1011,1,0,0,0,1012,1013,1,0,0,0,
        1013,1014,1,0,0,0,1014,1016,3,212,106,0,1015,1012,1,0,0,0,1015,1016,
        1,0,0,0,1016,1017,1,0,0,0,1017,1018,5,235,0,0,1018,1019,3,68,34,
        0,1019,1020,5,153,0,0,1020,1022,3,102,51,0,1021,1023,3,142,71,0,
        1022,1021,1,0,0,0,1023,1024,1,0,0,0,1024,1022,1,0,0,0,1024,1025,
        1,0,0,0,1025,1037,1,0,0,0,1026,1027,5,205,0,0,1027,1028,5,40,0,0,
        1028,1029,5,153,0,0,1029,1030,5,212,0,0,1030,1037,3,176,88,0,1031,
        1032,5,205,0,0,1032,1033,5,40,0,0,1033,1034,5,153,0,0,1034,1035,
        5,38,0,0,1035,1037,3,200,100,0,1036,254,1,0,0,0,1036,255,1,0,0,0,
        1036,257,1,0,0,0,1036,273,1,0,0,0,1036,283,1,0,0,0,1036,290,1,0,
        0,0,1036,297,1,0,0,0,1036,331,1,0,0,0,1036,357,1,0,0,0,1036,364,
        1,0,0,0,1036,372,1,0,0,0,1036,379,1,0,0,0,1036,382,1,0,0,0,1036,
        393,1,0,0,0,1036,402,1,0,0,0,1036,411,1,0,0,0,1036,428,1,0,0,0,1036,
        443,1,0,0,0,1036,459,1,0,0,0,1036,466,1,0,0,0,1036,473,1,0,0,0,1036,
        496,1,0,0,0,1036,502,1,0,0,0,1036,526,1,0,0,0,1036,544,1,0,0,0,1036,
        548,1,0,0,0,1036,556,1,0,0,0,1036,568,1,0,0,0,1036,576,1,0,0,0,1036,
        583,1,0,0,0,1036,590,1,0,0,0,1036,597,1,0,0,0,1036,612,1,0,0,0,1036,
        624,1,0,0,0,1036,627,1,0,0,0,1036,652,1,0,0,0,1036,677,1,0,0,0,1036,
        688,1,0,0,0,1036,719,1,0,0,0,1036,746,1,0,0,0,1036,777,1,0,0,0,1036,
        786,1,0,0,0,1036,807,1,0,0,0,1036,811,1,0,0,0,1036,815,1,0,0,0,1036,
        819,1,0,0,0,1036,824,1,0,0,0,1036,838,1,0,0,0,1036,852,1,0,0,0,1036,
        862,1,0,0,0,1036,876,1,0,0,0,1036,880,1,0,0,0,1036,887,1,0,0,0,1036,
        896,1,0,0,0,1036,903,1,0,0,0,1036,905,1,0,0,0,1036,907,1,0,0,0,1036,
        917,1,0,0,0,1036,927,1,0,0,0,1036,933,1,0,0,0,1036,936,1,0,0,0,1036,
        948,1,0,0,0,1036,952,1,0,0,0,1036,956,1,0,0,0,1036,961,1,0,0,0,1036,
        964,1,0,0,0,1036,977,1,0,0,0,1036,980,1,0,0,0,1036,983,1,0,0,0,1036,
        986,1,0,0,0,1036,993,1,0,0,0,1036,1008,1,0,0,0,1036,1026,1,0,0,0,
        1036,1031,1,0,0,0,1037,17,1,0,0,0,1038,1040,3,20,10,0,1039,1038,
        1,0,0,0,1039,1040,1,0,0,0,1040,1041,1,0,0,0,1041,1042,3,36,18,0,
        1042,19,1,0,0,0,1043,1045,5,243,0,0,1044,1046,5,178,0,0,1045,1044,
        1,0,0,0,1045,1046,1,0,0,0,1046,1047,1,0,0,0,1047,1052,3,62,31,0,
        1048,1049,5,3,0,0,1049,1051,3,62,31,0,1050,1048,1,0,0,0,1051,1054,
        1,0,0,0,1052,1050,1,0,0,0,1052,1053,1,0,0,0,1053,21,1,0,0,0,1054,
        1052,1,0,0,0,1055,1058,3,24,12,0,1056,1058,3,26,13,0,1057,1055,1,
        0,0,0,1057,1056,1,0,0,0,1058,23,1,0,0,0,1059,1060,3,202,101,0,1060,
        1063,3,132,66,0,1061,1062,5,147,0,0,1062,1064,5,148,0,0,1063,1061,
        1,0,0,0,1063,1064,1,0,0,0,1064,1067,1,0,0,0,1065,1066,5,40,0,0,1066,
        1068,3,116,58,0,1067,1065,1,0,0,0,1067,1068,1,0,0,0,1068,1071,1,
        0,0,0,1069,1070,5,243,0,0,1070,1072,3,28,14,0,1071,1069,1,0,0,0,
        1071,1072,1,0,0,0,1072,25,1,0,0,0,1073,1074,5,122,0,0,1074,1077,
        3,176,88,0,1075,1076,7,3,0,0,1076,1078,5,175,0,0,1077,1075,1,0,0,
        0,1077,1078,1,0,0,0,1078,27,1,0,0,0,1079,1080,5,1,0,0,1080,1081,
        3,30,15,0,1081,1082,5,2,0,0,1082,29,1,0,0,0,1083,1088,3,32,16,0,
        1084,1085,5,3,0,0,1085,1087,3,32,16,0,1086,1084,1,0,0,0,1087,1090,
        1,0,0,0,1088,1086,1,0,0,0,1088,1089,1,0,0,0,1089,31,1,0,0,0,1090,
        1088,1,0,0,0,1091,1092,3,212,106,0,1092,1093,5,249,0,0,1093,1094,
        3,34,17,0,1094,33,1,0,0,0,1095,1098,5,59,0,0,1096,1098,3,102,51,
        0,1097,1095,1,0,0,0,1097,1096,1,0,0,0,1098,35,1,0,0,0,1099,1110,
        3,42,21,0,1100,1101,5,158,0,0,1101,1102,5,32,0,0,1102,1107,3,46,
        23,0,1103,1104,5,3,0,0,1104,1106,3,46,23,0,1105,1103,1,0,0,0,1106,
        1109,1,0,0,0,1107,1105,1,0,0,0,1107,1108,1,0,0,0,1108,1111,1,0,0,
        0,1109,1107,1,0,0,0,1110,1100,1,0,0,0,1110,1111,1,0,0,0,1111,1117,
        1,0,0,0,1112,1113,5,151,0,0,1113,1115,3,40,20,0,1114,1116,7,4,0,
        0,1115,1114,1,0,0,0,1115,1116,1,0,0,0,1116,1118,1,0,0,0,1117,1112,
        1,0,0,0,1117,1118,1,0,0,0,1118,1132,1,0,0,0,1119,1120,5,123,0,0,
        1120,1133,3,38,19,0,1121,1122,5,81,0,0,1122,1124,7,5,0,0,1123,1125,
        3,40,20,0,1124,1123,1,0,0,0,1124,1125,1,0,0,0,1125,1126,1,0,0,0,
        1126,1130,7,4,0,0,1127,1131,5,155,0,0,1128,1129,5,243,0,0,1129,1131,
        5,217,0,0,1130,1127,1,0,0,0,1130,1128,1,0,0,0,1131,1133,1,0,0,0,
        1132,1119,1,0,0,0,1132,1121,1,0,0,0,1132,1133,1,0,0,0,1133,37,1,
        0,0,0,1134,1137,5,20,0,0,1135,1137,3,40,20,0,1136,1134,1,0,0,0,1136,
        1135,1,0,0,0,1137,39,1,0,0,0,1138,1139,7,6,0,0,1139,41,1,0,0,0,1140,
        1141,6,21,-1,0,1141,1142,3,44,22,0,1142,1157,1,0,0,0,1143,1144,10,
        2,0,0,1144,1146,5,109,0,0,1145,1147,3,64,32,0,1146,1145,1,0,0,0,
        1146,1147,1,0,0,0,1147,1148,1,0,0,0,1148,1156,3,42,21,3,1149,1150,
        10,1,0,0,1150,1152,7,7,0,0,1151,1153,3,64,32,0,1152,1151,1,0,0,0,
        1152,1153,1,0,0,0,1153,1154,1,0,0,0,1154,1156,3,42,21,2,1155,1143,
        1,0,0,0,1155,1149,1,0,0,0,1156,1159,1,0,0,0,1157,1155,1,0,0,0,1157,
        1158,1,0,0,0,1158,43,1,0,0,0,1159,1157,1,0,0,0,1160,1177,3,48,24,
        0,1161,1162,5,212,0,0,1162,1177,3,176,88,0,1163,1164,5,237,0,0,1164,
        1169,3,102,51,0,1165,1166,5,3,0,0,1166,1168,3,102,51,0,1167,1165,
        1,0,0,0,1168,1171,1,0,0,0,1169,1167,1,0,0,0,1169,1170,1,0,0,0,1170,
        1177,1,0,0,0,1171,1169,1,0,0,0,1172,1173,5,1,0,0,1173,1174,3,36,
        18,0,1174,1175,5,2,0,0,1175,1177,1,0,0,0,1176,1160,1,0,0,0,1176,
        1161,1,0,0,0,1176,1163,1,0,0,0,1176,1172,1,0,0,0,1177,45,1,0,0,0,
        1178,1181,3,200,100,0,1179,1181,3,102,51,0,1180,1178,1,0,0,0,1180,
        1179,1,0,0,0,1181,1183,1,0,0,0,1182,1184,7,8,0,0,1183,1182,1,0,0,
        0,1183,1184,1,0,0,0,1184,1187,1,0,0,0,1185,1186,5,150,0,0,1186,1188,
        7,9,0,0,1187,1185,1,0,0,0,1187,1188,1,0,0,0,1188,47,1,0,0,0,1189,
        1191,5,200,0,0,1190,1192,3,64,32,0,1191,1190,1,0,0,0,1191,1192,1,
        0,0,0,1192,1193,1,0,0,0,1193,1198,3,66,33,0,1194,1195,5,3,0,0,1195,
        1197,3,66,33,0,1196,1194,1,0,0,0,1197,1200,1,0,0,0,1198,1196,1,0,
        0,0,1198,1199,1,0,0,0,1199,1210,1,0,0,0,1200,1198,1,0,0,0,1201,1202,
        5,88,0,0,1202,1207,3,68,34,0,1203,1204,5,3,0,0,1204,1206,3,68,34,
        0,1205,1203,1,0,0,0,1206,1209,1,0,0,0,1207,1205,1,0,0,0,1207,1208,
        1,0,0,0,1208,1211,1,0,0,0,1209,1207,1,0,0,0,1210,1201,1,0,0,0,1210,
        1211,1,0,0,0,1211,1214,1,0,0,0,1212,1213,5,241,0,0,1213,1215,3,104,
        52,0,1214,1212,1,0,0,0,1214,1215,1,0,0,0,1215,1219,1,0,0,0,1216,
        1217,5,96,0,0,1217,1218,5,32,0,0,1218,1220,3,50,25,0,1219,1216,1,
        0,0,0,1219,1220,1,0,0,0,1220,1223,1,0,0,0,1221,1222,5,99,0,0,1222,
        1224,3,104,52,0,1223,1221,1,0,0,0,1223,1224,1,0,0,0,1224,1234,1,
        0,0,0,1225,1226,5,242,0,0,1226,1231,3,58,29,0,1227,1228,5,3,0,0,
        1228,1230,3,58,29,0,1229,1227,1,0,0,0,1230,1233,1,0,0,0,1231,1229,
        1,0,0,0,1231,1232,1,0,0,0,1232,1235,1,0,0,0,1233,1231,1,0,0,0,1234,
        1225,1,0,0,0,1234,1235,1,0,0,0,1235,49,1,0,0,0,1236,1238,3,64,32,
        0,1237,1236,1,0,0,0,1237,1238,1,0,0,0,1238,1239,1,0,0,0,1239,1244,
        3,52,26,0,1240,1241,5,3,0,0,1241,1243,3,52,26,0,1242,1240,1,0,0,
        0,1243,1246,1,0,0,0,1244,1242,1,0,0,0,1244,1245,1,0,0,0,1245,51,
        1,0,0,0,1246,1244,1,0,0,0,1247,1288,3,54,27,0,1248,1249,5,191,0,
        0,1249,1258,5,1,0,0,1250,1255,3,56,28,0,1251,1252,5,3,0,0,1252,1254,
        3,56,28,0,1253,1251,1,0,0,0,1254,1257,1,0,0,0,1255,1253,1,0,0,0,
        1255,1256,1,0,0,0,1256,1259,1,0,0,0,1257,1255,1,0,0,0,1258,1250,
        1,0,0,0,1258,1259,1,0,0,0,1259,1260,1,0,0,0,1260,1288,5,2,0,0,1261,
        1262,5,46,0,0,1262,1271,5,1,0,0,1263,1268,3,56,28,0,1264,1265,5,
        3,0,0,1265,1267,3,56,28,0,1266,1264,1,0,0,0,1267,1270,1,0,0,0,1268,
        1266,1,0,0,0,1268,1269,1,0,0,0,1269,1272,1,0,0,0,1270,1268,1,0,0,
        0,1271,1263,1,0,0,0,1271,1272,1,0,0,0,1272,1273,1,0,0,0,1273,1288,
        5,2,0,0,1274,1275,5,97,0,0,1275,1276,5,204,0,0,1276,1277,5,1,0,0,
        1277,1282,3,54,27,0,1278,1279,5,3,0,0,1279,1281,3,54,27,0,1280,1278,
        1,0,0,0,1281,1284,1,0,0,0,1282,1280,1,0,0,0,1282,1283,1,0,0,0,1283,
        1285,1,0,0,0,1284,1282,1,0,0,0,1285,1286,5,2,0,0,1286,1288,1,0,0,
        0,1287,1247,1,0,0,0,1287,1248,1,0,0,0,1287,1261,1,0,0,0,1287,1274,
        1,0,0,0,1288,53,1,0,0,0,1289,1298,5,1,0,0,1290,1295,3,56,28,0,1291,
        1292,5,3,0,0,1292,1294,3,56,28,0,1293,1291,1,0,0,0,1294,1297,1,0,
        0,0,1295,1293,1,0,0,0,1295,1296,1,0,0,0,1296,1299,1,0,0,0,1297,1295,
        1,0,0,0,1298,1290,1,0,0,0,1298,1299,1,0,0,0,1299,1300,1,0,0,0,1300,
        1303,5,2,0,0,1301,1303,3,56,28,0,1302,1289,1,0,0,0,1302,1301,1,0,
        0,0,1303,55,1,0,0,0,1304,1307,3,200,100,0,1305,1307,3,102,51,0,1306,
        1304,1,0,0,0,1306,1305,1,0,0,0,1307,57,1,0,0,0,1308,1309,3,212,106,
        0,1309,1310,5,26,0,0,1310,1311,5,1,0,0,1311,1312,3,60,30,0,1312,
        1313,5,2,0,0,1313,59,1,0,0,0,1314,1316,3,212,106,0,1315,1314,1,0,
        0,0,1315,1316,1,0,0,0,1316,1327,1,0,0,0,1317,1318,5,163,0,0,1318,
        1319,5,32,0,0,1319,1324,3,102,51,0,1320,1321,5,3,0,0,1321,1323,3,
        102,51,0,1322,1320,1,0,0,0,1323,1326,1,0,0,0,1324,1322,1,0,0,0,1324,
        1325,1,0,0,0,1325,1328,1,0,0,0,1326,1324,1,0,0,0,1327,1317,1,0,0,
        0,1327,1328,1,0,0,0,1328,1339,1,0,0,0,1329,1330,5,158,0,0,1330,1331,
        5,32,0,0,1331,1336,3,46,23,0,1332,1333,5,3,0,0,1333,1335,3,46,23,
        0,1334,1332,1,0,0,0,1335,1338,1,0,0,0,1336,1334,1,0,0,0,1336,1337,
        1,0,0,0,1337,1340,1,0,0,0,1338,1336,1,0,0,0,1339,1329,1,0,0,0,1339,
        1340,1,0,0,0,1340,1342,1,0,0,0,1341,1343,3,146,73,0,1342,1341,1,
        0,0,0,1342,1343,1,0,0,0,1343,61,1,0,0,0,1344,1346,3,212,106,0,1345,
        1347,3,98,49,0,1346,1345,1,0,0,0,1346,1347,1,0,0,0,1347,1348,1,0,
        0,0,1348,1349,5,26,0,0,1349,1350,5,1,0,0,1350,1351,3,18,9,0,1351,
        1352,5,2,0,0,1352,63,1,0,0,0,1353,1354,7,10,0,0,1354,65,1,0,0,0,
        1355,1358,3,200,100,0,1356,1358,3,102,51,0,1357,1355,1,0,0,0,1357,
        1356,1,0,0,0,1358,1363,1,0,0,0,1359,1361,5,26,0,0,1360,1359,1,0,
        0,0,1360,1361,1,0,0,0,1361,1362,1,0,0,0,1362,1364,3,212,106,0,1363,
        1360,1,0,0,0,1363,1364,1,0,0,0,1364,1374,1,0,0,0,1365,1366,3,110,
        55,0,1366,1367,5,4,0,0,1367,1370,5,257,0,0,1368,1369,5,26,0,0,1369,
        1371,3,98,49,0,1370,1368,1,0,0,0,1370,1371,1,0,0,0,1371,1374,1,0,
        0,0,1372,1374,5,257,0,0,1373,1357,1,0,0,0,1373,1365,1,0,0,0,1373,
        1372,1,0,0,0,1374,67,1,0,0,0,1375,1376,6,34,-1,0,1376,1377,3,74,
        37,0,1377,1396,1,0,0,0,1378,1392,10,2,0,0,1379,1380,5,45,0,0,1380,
        1381,5,116,0,0,1381,1393,3,74,37,0,1382,1383,3,70,35,0,1383,1384,
        5,116,0,0,1384,1385,3,68,34,0,1385,1386,3,72,36,0,1386,1393,1,0,
        0,0,1387,1388,5,138,0,0,1388,1389,3,70,35,0,1389,1390,5,116,0,0,
        1390,1391,3,74,37,0,1391,1393,1,0,0,0,1392,1379,1,0,0,0,1392,1382,
        1,0,0,0,1392,1387,1,0,0,0,1393,1395,1,0,0,0,1394,1378,1,0,0,0,1395,
        1398,1,0,0,0,1396,1394,1,0,0,0,1396,1397,1,0,0,0,1397,69,1,0,0,0,
        1398,1396,1,0,0,0,1399,1401,5,106,0,0,1400,1399,1,0,0,0,1400,1401,
        1,0,0,0,1401,1415,1,0,0,0,1402,1404,5,120,0,0,1403,1405,5,160,0,
        0,1404,1403,1,0,0,0,1404,1405,1,0,0,0,1405,1415,1,0,0,0,1406,1408,
        5,187,0,0,1407,1409,5,160,0,0,1408,1407,1,0,0,0,1408,1409,1,0,0,
        0,1409,1415,1,0,0,0,1410,1412,5,89,0,0,1411,1413,5,160,0,0,1412,
        1411,1,0,0,0,1412,1413,1,0,0,0,1413,1415,1,0,0,0,1414,1400,1,0,0,
        0,1414,1402,1,0,0,0,1414,1406,1,0,0,0,1414,1410,1,0,0,0,1415,71,
        1,0,0,0,1416,1417,5,153,0,0,1417,1431,3,104,52,0,1418,1419,5,235,
        0,0,1419,1420,5,1,0,0,1420,1425,3,212,106,0,1421,1422,5,3,0,0,1422,
        1424,3,212,106,0,1423,1421,1,0,0,0,1424,1427,1,0,0,0,1425,1423,1,
        0,0,0,1425,1426,1,0,0,0,1426,1428,1,0,0,0,1427,1425,1,0,0,0,1428,
        1429,5,2,0,0,1429,1431,1,0,0,0,1430,1416,1,0,0,0,1430,1418,1,0,0,
        0,1431,73,1,0,0,0,1432,1439,3,78,39,0,1433,1434,5,214,0,0,1434,1435,
        3,76,38,0,1435,1436,5,1,0,0,1436,1437,3,102,51,0,1437,1438,5,2,0,
        0,1438,1440,1,0,0,0,1439,1433,1,0,0,0,1439,1440,1,0,0,0,1440,75,
        1,0,0,0,1441,1442,7,11,0,0,1442,77,1,0,0,0,1443,1526,3,92,46,0,1444,
        1445,5,132,0,0,1445,1456,5,1,0,0,1446,1447,5,163,0,0,1447,1448,5,
        32,0,0,1448,1453,3,102,51,0,1449,1450,5,3,0,0,1450,1452,3,102,51,
        0,1451,1449,1,0,0,0,1452,1455,1,0,0,0,1453,1451,1,0,0,0,1453,1454,
        1,0,0,0,1454,1457,1,0,0,0,1455,1453,1,0,0,0,1456,1446,1,0,0,0,1456,
        1457,1,0,0,0,1457,1468,1,0,0,0,1458,1459,5,158,0,0,1459,1460,5,32,
        0,0,1460,1465,3,46,23,0,1461,1462,5,3,0,0,1462,1464,3,46,23,0,1463,
        1461,1,0,0,0,1464,1467,1,0,0,0,1465,1463,1,0,0,0,1465,1466,1,0,0,
        0,1466,1469,1,0,0,0,1467,1465,1,0,0,0,1468,1458,1,0,0,0,1468,1469,
        1,0,0,0,1469,1479,1,0,0,0,1470,1471,5,134,0,0,1471,1476,3,80,40,
        0,1472,1473,5,3,0,0,1473,1475,3,80,40,0,1474,1472,1,0,0,0,1475,1478,
        1,0,0,0,1476,1474,1,0,0,0,1476,1477,1,0,0,0,1477,1480,1,0,0,0,1478,
        1476,1,0,0,0,1479,1470,1,0,0,0,1479,1480,1,0,0,0,1480,1482,1,0,0,
        0,1481,1483,3,82,41,0,1482,1481,1,0,0,0,1482,1483,1,0,0,0,1483,1487,
        1,0,0,0,1484,1485,5,19,0,0,1485,1486,5,129,0,0,1486,1488,3,86,43,
        0,1487,1484,1,0,0,0,1487,1488,1,0,0,0,1488,1490,1,0,0,0,1489,1491,
        7,12,0,0,1490,1489,1,0,0,0,1490,1491,1,0,0,0,1491,1492,1,0,0,0,1492,
        1493,5,167,0,0,1493,1494,5,1,0,0,1494,1495,3,152,76,0,1495,1505,
        5,2,0,0,1496,1497,5,209,0,0,1497,1502,3,88,44,0,1498,1499,5,3,0,
        0,1499,1501,3,88,44,0,1500,1498,1,0,0,0,1501,1504,1,0,0,0,1502,1500,
        1,0,0,0,1502,1503,1,0,0,0,1503,1506,1,0,0,0,1504,1502,1,0,0,0,1505,
        1496,1,0,0,0,1505,1506,1,0,0,0,1506,1507,1,0,0,0,1507,1508,5,65,
        0,0,1508,1513,3,90,45,0,1509,1510,5,3,0,0,1510,1512,3,90,45,0,1511,
        1509,1,0,0,0,1512,1515,1,0,0,0,1513,1511,1,0,0,0,1513,1514,1,0,0,
        0,1514,1516,1,0,0,0,1515,1513,1,0,0,0,1516,1524,5,2,0,0,1517,1519,
        5,26,0,0,1518,1517,1,0,0,0,1518,1519,1,0,0,0,1519,1520,1,0,0,0,1520,
        1522,3,212,106,0,1521,1523,3,98,49,0,1522,1521,1,0,0,0,1522,1523,
        1,0,0,0,1523,1525,1,0,0,0,1524,1518,1,0,0,0,1524,1525,1,0,0,0,1525,
        1527,1,0,0,0,1526,1444,1,0,0,0,1526,1527,1,0,0,0,1527,79,1,0,0,0,
        1528,1529,3,102,51,0,1529,1530,5,26,0,0,1530,1531,3,212,106,0,1531,
        81,1,0,0,0,1532,1533,5,154,0,0,1533,1534,5,192,0,0,1534,1535,5,168,
        0,0,1535,1544,5,129,0,0,1536,1537,5,20,0,0,1537,1538,5,193,0,0,1538,
        1539,5,168,0,0,1539,1541,5,129,0,0,1540,1542,3,84,42,0,1541,1540,
        1,0,0,0,1541,1542,1,0,0,0,1542,1544,1,0,0,0,1543,1532,1,0,0,0,1543,
        1536,1,0,0,0,1544,83,1,0,0,0,1545,1546,5,205,0,0,1546,1547,5,71,
        0,0,1547,1555,5,131,0,0,1548,1549,5,152,0,0,1549,1550,5,71,0,0,1550,
        1555,5,131,0,0,1551,1552,5,243,0,0,1552,1553,5,230,0,0,1553,1555,
        5,193,0,0,1554,1545,1,0,0,0,1554,1548,1,0,0,0,1554,1551,1,0,0,0,
        1555,85,1,0,0,0,1556,1557,5,5,0,0,1557,1558,5,220,0,0,1558,1559,
        5,139,0,0,1559,1576,5,192,0,0,1560,1561,5,5,0,0,1561,1562,5,165,
        0,0,1562,1563,5,118,0,0,1563,1576,5,192,0,0,1564,1565,5,5,0,0,1565,
        1566,5,220,0,0,1566,1567,5,84,0,0,1567,1576,3,212,106,0,1568,1569,
        5,5,0,0,1569,1570,5,220,0,0,1570,1571,5,118,0,0,1571,1576,3,212,
        106,0,1572,1573,5,5,0,0,1573,1574,5,220,0,0,1574,1576,3,212,106,
        0,1575,1556,1,0,0,0,1575,1560,1,0,0,0,1575,1564,1,0,0,0,1575,1568,
        1,0,0,0,1575,1572,1,0,0,0,1576,87,1,0,0,0,1577,1578,3,212,106,0,
        1578,1579,5,249,0,0,1579,1580,5,1,0,0,1580,1585,3,212,106,0,1581,
        1582,5,3,0,0,1582,1584,3,212,106,0,1583,1581,1,0,0,0,1584,1587,1,
        0,0,0,1585,1583,1,0,0,0,1585,1586,1,0,0,0,1586,1588,1,0,0,0,1587,
        1585,1,0,0,0,1588,1589,5,2,0,0,1589,89,1,0,0,0,1590,1591,3,212,106,
        0,1591,1592,5,26,0,0,1592,1593,3,102,51,0,1593,91,1,0,0,0,1594,1602,
        3,100,50,0,1595,1597,5,26,0,0,1596,1595,1,0,0,0,1596,1597,1,0,0,
        0,1597,1598,1,0,0,0,1598,1600,3,212,106,0,1599,1601,3,98,49,0,1600,
        1599,1,0,0,0,1600,1601,1,0,0,0,1601,1603,1,0,0,0,1602,1596,1,0,0,
        0,1602,1603,1,0,0,0,1603,93,1,0,0,0,1604,1605,5,1,0,0,1605,1610,
        3,202,101,0,1606,1607,5,3,0,0,1607,1609,3,202,101,0,1608,1606,1,
        0,0,0,1609,1612,1,0,0,0,1610,1608,1,0,0,0,1610,1611,1,0,0,0,1611,
        1613,1,0,0,0,1612,1610,1,0,0,0,1613,1614,5,2,0,0,1614,95,1,0,0,0,
        1615,1616,5,1,0,0,1616,1621,3,200,100,0,1617,1618,5,3,0,0,1618,1620,
        3,200,100,0,1619,1617,1,0,0,0,1620,1623,1,0,0,0,1621,1619,1,0,0,
        0,1621,1622,1,0,0,0,1622,1624,1,0,0,0,1623,1621,1,0,0,0,1624,1625,
        5,2,0,0,1625,97,1,0,0,0,1626,1627,5,1,0,0,1627,1632,3,212,106,0,
        1628,1629,5,3,0,0,1629,1631,3,212,106,0,1630,1628,1,0,0,0,1631,1634,
        1,0,0,0,1632,1630,1,0,0,0,1632,1633,1,0,0,0,1633,1635,1,0,0,0,1634,
        1632,1,0,0,0,1635,1636,5,2,0,0,1636,99,1,0,0,0,1637,1667,3,174,87,
        0,1638,1639,5,1,0,0,1639,1640,3,18,9,0,1640,1641,5,2,0,0,1641,1667,
        1,0,0,0,1642,1643,5,231,0,0,1643,1644,5,1,0,0,1644,1649,3,102,51,
        0,1645,1646,5,3,0,0,1646,1648,3,102,51,0,1647,1645,1,0,0,0,1648,
        1651,1,0,0,0,1649,1647,1,0,0,0,1649,1650,1,0,0,0,1650,1652,1,0,0,
        0,1651,1649,1,0,0,0,1652,1655,5,2,0,0,1653,1654,5,243,0,0,1654,1656,
        5,159,0,0,1655,1653,1,0,0,0,1655,1656,1,0,0,0,1656,1667,1,0,0,0,
        1657,1658,5,119,0,0,1658,1659,5,1,0,0,1659,1660,3,18,9,0,1660,1661,
        5,2,0,0,1661,1667,1,0,0,0,1662,1663,5,1,0,0,1663,1664,3,68,34,0,
        1664,1665,5,2,0,0,1665,1667,1,0,0,0,1666,1637,1,0,0,0,1666,1638,
        1,0,0,0,1666,1642,1,0,0,0,1666,1657,1,0,0,0,1666,1662,1,0,0,0,1667,
        101,1,0,0,0,1668,1669,3,104,52,0,1669,103,1,0,0,0,1670,1671,6,52,
        -1,0,1671,1673,3,108,54,0,1672,1674,3,106,53,0,1673,1672,1,0,0,0,
        1673,1674,1,0,0,0,1674,1678,1,0,0,0,1675,1676,5,147,0,0,1676,1678,
        3,104,52,3,1677,1670,1,0,0,0,1677,1675,1,0,0,0,1678,1687,1,0,0,0,
        1679,1680,10,2,0,0,1680,1681,5,23,0,0,1681,1686,3,104,52,3,1682,
        1683,10,1,0,0,1683,1684,5,157,0,0,1684,1686,3,104,52,2,1685,1679,
        1,0,0,0,1685,1682,1,0,0,0,1686,1689,1,0,0,0,1687,1685,1,0,0,0,1687,
        1688,1,0,0,0,1688,105,1,0,0,0,1689,1687,1,0,0,0,1690,1691,3,120,
        60,0,1691,1692,3,108,54,0,1692,1752,1,0,0,0,1693,1694,3,120,60,0,
        1694,1695,3,122,61,0,1695,1696,5,1,0,0,1696,1697,3,18,9,0,1697,1698,
        5,2,0,0,1698,1752,1,0,0,0,1699,1701,5,147,0,0,1700,1699,1,0,0,0,
        1700,1701,1,0,0,0,1701,1702,1,0,0,0,1702,1703,5,31,0,0,1703,1704,
        3,108,54,0,1704,1705,5,23,0,0,1705,1706,3,108,54,0,1706,1752,1,0,
        0,0,1707,1709,5,147,0,0,1708,1707,1,0,0,0,1708,1709,1,0,0,0,1709,
        1710,1,0,0,0,1710,1711,5,103,0,0,1711,1712,5,1,0,0,1712,1717,3,102,
        51,0,1713,1714,5,3,0,0,1714,1716,3,102,51,0,1715,1713,1,0,0,0,1716,
        1719,1,0,0,0,1717,1715,1,0,0,0,1717,1718,1,0,0,0,1718,1720,1,0,0,
        0,1719,1717,1,0,0,0,1720,1721,5,2,0,0,1721,1752,1,0,0,0,1722,1724,
        5,147,0,0,1723,1722,1,0,0,0,1723,1724,1,0,0,0,1724,1725,1,0,0,0,
        1725,1726,5,103,0,0,1726,1727,5,1,0,0,1727,1728,3,18,9,0,1728,1729,
        5,2,0,0,1729,1752,1,0,0,0,1730,1732,5,147,0,0,1731,1730,1,0,0,0,
        1731,1732,1,0,0,0,1732,1733,1,0,0,0,1733,1734,5,122,0,0,1734,1737,
        3,108,54,0,1735,1736,5,73,0,0,1736,1738,3,108,54,0,1737,1735,1,0,
        0,0,1737,1738,1,0,0,0,1738,1752,1,0,0,0,1739,1741,5,114,0,0,1740,
        1742,5,147,0,0,1741,1740,1,0,0,0,1741,1742,1,0,0,0,1742,1743,1,0,
        0,0,1743,1752,5,148,0,0,1744,1746,5,114,0,0,1745,1747,5,147,0,0,
        1746,1745,1,0,0,0,1746,1747,1,0,0,0,1747,1748,1,0,0,0,1748,1749,
        5,66,0,0,1749,1750,5,88,0,0,1750,1752,3,108,54,0,1751,1690,1,0,0,
        0,1751,1693,1,0,0,0,1751,1700,1,0,0,0,1751,1708,1,0,0,0,1751,1723,
        1,0,0,0,1751,1731,1,0,0,0,1751,1739,1,0,0,0,1751,1744,1,0,0,0,1752,
        107,1,0,0,0,1753,1754,6,54,-1,0,1754,1758,3,110,55,0,1755,1756,7,
        13,0,0,1756,1758,3,108,54,4,1757,1753,1,0,0,0,1757,1755,1,0,0,0,
        1758,1773,1,0,0,0,1759,1760,10,3,0,0,1760,1761,7,14,0,0,1761,1772,
        3,108,54,4,1762,1763,10,2,0,0,1763,1764,7,13,0,0,1764,1772,3,108,
        54,3,1765,1766,10,1,0,0,1766,1767,5,260,0,0,1767,1772,3,108,54,2,
        1768,1769,10,5,0,0,1769,1770,5,28,0,0,1770,1772,3,118,59,0,1771,
        1759,1,0,0,0,1771,1762,1,0,0,0,1771,1765,1,0,0,0,1771,1768,1,0,0,
        0,1772,1775,1,0,0,0,1773,1771,1,0,0,0,1773,1774,1,0,0,0,1774,109,
        1,0,0,0,1775,1773,1,0,0,0,1776,1777,6,55,-1,0,1777,2026,5,148,0,
        0,1778,2026,3,126,63,0,1779,1780,3,212,106,0,1780,1781,3,116,58,
        0,1781,2026,1,0,0,0,1782,1783,5,68,0,0,1783,1784,5,172,0,0,1784,
        2026,3,116,58,0,1785,2026,3,214,107,0,1786,2026,3,124,62,0,1787,
        2026,3,116,58,0,1788,2026,5,264,0,0,1789,2026,5,261,0,0,1790,1791,
        5,170,0,0,1791,1792,5,1,0,0,1792,1793,3,108,54,0,1793,1794,5,103,
        0,0,1794,1795,3,108,54,0,1795,1796,5,2,0,0,1796,2026,1,0,0,0,1797,
        1798,5,1,0,0,1798,1801,3,102,51,0,1799,1800,5,3,0,0,1800,1802,3,
        102,51,0,1801,1799,1,0,0,0,1802,1803,1,0,0,0,1803,1801,1,0,0,0,1803,
        1804,1,0,0,0,1804,1805,1,0,0,0,1805,1806,5,2,0,0,1806,2026,1,0,0,
        0,1807,1808,5,192,0,0,1808,1809,5,1,0,0,1809,1814,3,102,51,0,1810,
        1811,5,3,0,0,1811,1813,3,102,51,0,1812,1810,1,0,0,0,1813,1816,1,
        0,0,0,1814,1812,1,0,0,0,1814,1815,1,0,0,0,1815,1817,1,0,0,0,1816,
        1814,1,0,0,0,1817,1818,5,2,0,0,1818,2026,1,0,0,0,1819,1820,3,198,
        99,0,1820,1821,5,1,0,0,1821,1822,5,257,0,0,1822,1824,5,2,0,0,1823,
        1825,3,140,70,0,1824,1823,1,0,0,0,1824,1825,1,0,0,0,1825,1827,1,
        0,0,0,1826,1828,3,144,72,0,1827,1826,1,0,0,0,1827,1828,1,0,0,0,1828,
        2026,1,0,0,0,1829,1831,3,112,56,0,1830,1829,1,0,0,0,1830,1831,1,
        0,0,0,1831,1832,1,0,0,0,1832,1833,3,198,99,0,1833,1845,5,1,0,0,1834,
        1836,3,64,32,0,1835,1834,1,0,0,0,1835,1836,1,0,0,0,1836,1837,1,0,
        0,0,1837,1842,3,102,51,0,1838,1839,5,3,0,0,1839,1841,3,102,51,0,
        1840,1838,1,0,0,0,1841,1844,1,0,0,0,1842,1840,1,0,0,0,1842,1843,
        1,0,0,0,1843,1846,1,0,0,0,1844,1842,1,0,0,0,1845,1835,1,0,0,0,1845,
        1846,1,0,0,0,1846,1857,1,0,0,0,1847,1848,5,158,0,0,1848,1849,5,32,
        0,0,1849,1854,3,46,23,0,1850,1851,5,3,0,0,1851,1853,3,46,23,0,1852,
        1850,1,0,0,0,1853,1856,1,0,0,0,1854,1852,1,0,0,0,1854,1855,1,0,0,
        0,1855,1858,1,0,0,0,1856,1854,1,0,0,0,1857,1847,1,0,0,0,1857,1858,
        1,0,0,0,1858,1859,1,0,0,0,1859,1861,5,2,0,0,1860,1862,3,140,70,0,
        1861,1860,1,0,0,0,1861,1862,1,0,0,0,1862,1867,1,0,0,0,1863,1865,
        3,114,57,0,1864,1863,1,0,0,0,1864,1865,1,0,0,0,1865,1866,1,0,0,0,
        1866,1868,3,144,72,0,1867,1864,1,0,0,0,1867,1868,1,0,0,0,1868,2026,
        1,0,0,0,1869,1870,3,212,106,0,1870,1871,3,144,72,0,1871,2026,1,0,
        0,0,1872,1873,3,212,106,0,1873,1874,5,6,0,0,1874,1875,3,102,51,0,
        1875,2026,1,0,0,0,1876,1885,5,1,0,0,1877,1882,3,212,106,0,1878,1879,
        5,3,0,0,1879,1881,3,212,106,0,1880,1878,1,0,0,0,1881,1884,1,0,0,
        0,1882,1880,1,0,0,0,1882,1883,1,0,0,0,1883,1886,1,0,0,0,1884,1882,
        1,0,0,0,1885,1877,1,0,0,0,1885,1886,1,0,0,0,1886,1887,1,0,0,0,1887,
        1888,5,2,0,0,1888,1889,5,6,0,0,1889,2026,3,102,51,0,1890,1891,5,
        1,0,0,1891,1892,3,18,9,0,1892,1893,5,2,0,0,1893,2026,1,0,0,0,1894,
        1895,5,77,0,0,1895,1896,5,1,0,0,1896,1897,3,18,9,0,1897,1898,5,2,
        0,0,1898,2026,1,0,0,0,1899,1900,5,35,0,0,1900,1902,3,102,51,0,1901,
        1903,3,138,69,0,1902,1901,1,0,0,0,1903,1904,1,0,0,0,1904,1902,1,
        0,0,0,1904,1905,1,0,0,0,1905,1908,1,0,0,0,1906,1907,5,70,0,0,1907,
        1909,3,102,51,0,1908,1906,1,0,0,0,1908,1909,1,0,0,0,1909,1910,1,
        0,0,0,1910,1911,5,72,0,0,1911,2026,1,0,0,0,1912,1914,5,35,0,0,1913,
        1915,3,138,69,0,1914,1913,1,0,0,0,1915,1916,1,0,0,0,1916,1914,1,
        0,0,0,1916,1917,1,0,0,0,1917,1920,1,0,0,0,1918,1919,5,70,0,0,1919,
        1921,3,102,51,0,1920,1918,1,0,0,0,1920,1921,1,0,0,0,1921,1922,1,
        0,0,0,1922,1923,5,72,0,0,1923,2026,1,0,0,0,1924,1925,5,36,0,0,1925,
        1926,5,1,0,0,1926,1927,3,102,51,0,1927,1928,5,26,0,0,1928,1929,3,
        132,66,0,1929,1930,5,2,0,0,1930,2026,1,0,0,0,1931,1932,5,224,0,0,
        1932,1933,5,1,0,0,1933,1934,3,102,51,0,1934,1935,5,26,0,0,1935,1936,
        3,132,66,0,1936,1937,5,2,0,0,1937,2026,1,0,0,0,1938,1939,5,25,0,
        0,1939,1948,5,7,0,0,1940,1945,3,102,51,0,1941,1942,5,3,0,0,1942,
        1944,3,102,51,0,1943,1941,1,0,0,0,1944,1947,1,0,0,0,1945,1943,1,
        0,0,0,1945,1946,1,0,0,0,1946,1949,1,0,0,0,1947,1945,1,0,0,0,1948,
        1940,1,0,0,0,1948,1949,1,0,0,0,1949,1950,1,0,0,0,1950,2026,5,8,0,
        0,1951,2026,3,212,106,0,1952,2026,5,49,0,0,1953,1957,5,53,0,0,1954,
        1955,5,1,0,0,1955,1956,5,265,0,0,1956,1958,5,2,0,0,1957,1954,1,0,
        0,0,1957,1958,1,0,0,0,1958,2026,1,0,0,0,1959,1963,5,54,0,0,1960,
        1961,5,1,0,0,1961,1962,5,265,0,0,1962,1964,5,2,0,0,1963,1960,1,0,
        0,0,1963,1964,1,0,0,0,1964,2026,1,0,0,0,1965,1969,5,125,0,0,1966,
        1967,5,1,0,0,1967,1968,5,265,0,0,1968,1970,5,2,0,0,1969,1966,1,0,
        0,0,1969,1970,1,0,0,0,1970,2026,1,0,0,0,1971,1975,5,126,0,0,1972,
        1973,5,1,0,0,1973,1974,5,265,0,0,1974,1976,5,2,0,0,1975,1972,1,0,
        0,0,1975,1976,1,0,0,0,1976,2026,1,0,0,0,1977,2026,5,55,0,0,1978,
        2026,5,48,0,0,1979,2026,5,52,0,0,1980,2026,5,50,0,0,1981,1982,5,
        210,0,0,1982,1983,5,1,0,0,1983,1984,3,108,54,0,1984,1985,5,88,0,
        0,1985,1988,3,108,54,0,1986,1987,5,86,0,0,1987,1989,3,108,54,0,1988,
        1986,1,0,0,0,1988,1989,1,0,0,0,1989,1990,1,0,0,0,1990,1991,5,2,0,
        0,1991,2026,1,0,0,0,1992,1993,5,146,0,0,1993,1994,5,1,0,0,1994,1997,
        3,108,54,0,1995,1996,5,3,0,0,1996,1998,3,130,65,0,1997,1995,1,0,
        0,0,1997,1998,1,0,0,0,1998,1999,1,0,0,0,1999,2000,5,2,0,0,2000,2026,
        1,0,0,0,2001,2002,5,79,0,0,2002,2003,5,1,0,0,2003,2004,3,212,106,
        0,2004,2005,5,88,0,0,2005,2006,3,108,54,0,2006,2007,5,2,0,0,2007,
        2026,1,0,0,0,2008,2009,5,1,0,0,2009,2010,3,102,51,0,2010,2011,5,
        2,0,0,2011,2026,1,0,0,0,2012,2013,5,97,0,0,2013,2022,5,1,0,0,2014,
        2019,3,204,102,0,2015,2016,5,3,0,0,2016,2018,3,204,102,0,2017,2015,
        1,0,0,0,2018,2021,1,0,0,0,2019,2017,1,0,0,0,2019,2020,1,0,0,0,2020,
        2023,1,0,0,0,2021,2019,1,0,0,0,2022,2014,1,0,0,0,2022,2023,1,0,0,
        0,2023,2024,1,0,0,0,2024,2026,5,2,0,0,2025,1776,1,0,0,0,2025,1778,
        1,0,0,0,2025,1779,1,0,0,0,2025,1782,1,0,0,0,2025,1785,1,0,0,0,2025,
        1786,1,0,0,0,2025,1787,1,0,0,0,2025,1788,1,0,0,0,2025,1789,1,0,0,
        0,2025,1790,1,0,0,0,2025,1797,1,0,0,0,2025,1807,1,0,0,0,2025,1819,
        1,0,0,0,2025,1830,1,0,0,0,2025,1869,1,0,0,0,2025,1872,1,0,0,0,2025,
        1876,1,0,0,0,2025,1890,1,0,0,0,2025,1894,1,0,0,0,2025,1899,1,0,0,
        0,2025,1912,1,0,0,0,2025,1924,1,0,0,0,2025,1931,1,0,0,0,2025,1938,
        1,0,0,0,2025,1951,1,0,0,0,2025,1952,1,0,0,0,2025,1953,1,0,0,0,2025,
        1959,1,0,0,0,2025,1965,1,0,0,0,2025,1971,1,0,0,0,2025,1977,1,0,0,
        0,2025,1978,1,0,0,0,2025,1979,1,0,0,0,2025,1980,1,0,0,0,2025,1981,
        1,0,0,0,2025,1992,1,0,0,0,2025,2001,1,0,0,0,2025,2008,1,0,0,0,2025,
        2012,1,0,0,0,2026,2037,1,0,0,0,2027,2028,10,17,0,0,2028,2029,5,7,
        0,0,2029,2030,3,108,54,0,2030,2031,5,8,0,0,2031,2036,1,0,0,0,2032,
        2033,10,15,0,0,2033,2034,5,4,0,0,2034,2036,3,212,106,0,2035,2027,
        1,0,0,0,2035,2032,1,0,0,0,2036,2039,1,0,0,0,2037,2035,1,0,0,0,2037,
        2038,1,0,0,0,2038,111,1,0,0,0,2039,2037,1,0,0,0,2040,2041,7,15,0,
        0,2041,113,1,0,0,0,2042,2043,5,102,0,0,2043,2047,5,150,0,0,2044,
        2045,5,184,0,0,2045,2047,5,150,0,0,2046,2042,1,0,0,0,2046,2044,1,
        0,0,0,2047,115,1,0,0,0,2048,2055,5,262,0,0,2049,2052,5,263,0,0,2050,
        2051,5,226,0,0,2051,2053,5,262,0,0,2052,2050,1,0,0,0,2052,2053,1,
        0,0,0,2053,2055,1,0,0,0,2054,2048,1,0,0,0,2054,2049,1,0,0,0,2055,
        117,1,0,0,0,2056,2057,5,218,0,0,2057,2058,5,248,0,0,2058,2063,3,
        126,63,0,2059,2060,5,218,0,0,2060,2061,5,248,0,0,2061,2063,3,116,
        58,0,2062,2056,1,0,0,0,2062,2059,1,0,0,0,2063,119,1,0,0,0,2064,2065,
        7,16,0,0,2065,121,1,0,0,0,2066,2067,7,17,0,0,2067,123,1,0,0,0,2068,
        2069,7,18,0,0,2069,125,1,0,0,0,2070,2072,5,110,0,0,2071,2073,7,13,
        0,0,2072,2071,1,0,0,0,2072,2073,1,0,0,0,2073,2074,1,0,0,0,2074,2075,
        3,116,58,0,2075,2078,3,128,64,0,2076,2077,5,220,0,0,2077,2079,3,
        128,64,0,2078,2076,1,0,0,0,2078,2079,1,0,0,0,2079,127,1,0,0,0,2080,
        2081,7,19,0,0,2081,129,1,0,0,0,2082,2083,7,20,0,0,2083,131,1,0,0,
        0,2084,2085,6,66,-1,0,2085,2086,5,192,0,0,2086,2087,5,1,0,0,2087,
        2092,3,134,67,0,2088,2089,5,3,0,0,2089,2091,3,134,67,0,2090,2088,
        1,0,0,0,2091,2094,1,0,0,0,2092,2090,1,0,0,0,2092,2093,1,0,0,0,2093,
        2095,1,0,0,0,2094,2092,1,0,0,0,2095,2096,5,2,0,0,2096,2176,1,0,0,
        0,2097,2098,5,110,0,0,2098,2101,3,128,64,0,2099,2100,5,220,0,0,2100,
        2102,3,128,64,0,2101,2099,1,0,0,0,2101,2102,1,0,0,0,2102,2176,1,
        0,0,0,2103,2108,5,219,0,0,2104,2105,5,1,0,0,2105,2106,3,136,68,0,
        2106,2107,5,2,0,0,2107,2109,1,0,0,0,2108,2104,1,0,0,0,2108,2109,
        1,0,0,0,2109,2113,1,0,0,0,2110,2111,5,244,0,0,2111,2112,5,218,0,
        0,2112,2114,5,248,0,0,2113,2110,1,0,0,0,2113,2114,1,0,0,0,2114,2176,
        1,0,0,0,2115,2120,5,219,0,0,2116,2117,5,1,0,0,2117,2118,3,136,68,
        0,2118,2119,5,2,0,0,2119,2121,1,0,0,0,2120,2116,1,0,0,0,2120,2121,
        1,0,0,0,2121,2122,1,0,0,0,2122,2123,5,243,0,0,2123,2124,5,218,0,
        0,2124,2176,5,248,0,0,2125,2130,5,218,0,0,2126,2127,5,1,0,0,2127,
        2128,3,136,68,0,2128,2129,5,2,0,0,2129,2131,1,0,0,0,2130,2126,1,
        0,0,0,2130,2131,1,0,0,0,2131,2135,1,0,0,0,2132,2133,5,244,0,0,2133,
        2134,5,218,0,0,2134,2136,5,248,0,0,2135,2132,1,0,0,0,2135,2136,1,
        0,0,0,2136,2176,1,0,0,0,2137,2142,5,218,0,0,2138,2139,5,1,0,0,2139,
        2140,3,136,68,0,2140,2141,5,2,0,0,2141,2143,1,0,0,0,2142,2138,1,
        0,0,0,2142,2143,1,0,0,0,2143,2144,1,0,0,0,2144,2145,5,243,0,0,2145,
        2146,5,218,0,0,2146,2176,5,248,0,0,2147,2148,5,68,0,0,2148,2176,
        5,172,0,0,2149,2150,5,25,0,0,2150,2151,5,251,0,0,2151,2152,3,132,
        66,0,2152,2153,5,253,0,0,2153,2176,1,0,0,0,2154,2155,5,128,0,0,2155,
        2156,5,251,0,0,2156,2157,3,132,66,0,2157,2158,5,3,0,0,2158,2159,
        3,132,66,0,2159,2160,5,253,0,0,2160,2176,1,0,0,0,2161,2173,3,212,
        106,0,2162,2163,5,1,0,0,2163,2168,3,136,68,0,2164,2165,5,3,0,0,2165,
        2167,3,136,68,0,2166,2164,1,0,0,0,2167,2170,1,0,0,0,2168,2166,1,
        0,0,0,2168,2169,1,0,0,0,2169,2171,1,0,0,0,2170,2168,1,0,0,0,2171,
        2172,5,2,0,0,2172,2174,1,0,0,0,2173,2162,1,0,0,0,2173,2174,1,0,0,
        0,2174,2176,1,0,0,0,2175,2084,1,0,0,0,2175,2097,1,0,0,0,2175,2103,
        1,0,0,0,2175,2115,1,0,0,0,2175,2125,1,0,0,0,2175,2137,1,0,0,0,2175,
        2147,1,0,0,0,2175,2149,1,0,0,0,2175,2154,1,0,0,0,2175,2161,1,0,0,
        0,2176,2186,1,0,0,0,2177,2178,10,2,0,0,2178,2182,5,25,0,0,2179,2180,
        5,7,0,0,2180,2181,5,265,0,0,2181,2183,5,8,0,0,2182,2179,1,0,0,0,
        2182,2183,1,0,0,0,2183,2185,1,0,0,0,2184,2177,1,0,0,0,2185,2188,
        1,0,0,0,2186,2184,1,0,0,0,2186,2187,1,0,0,0,2187,133,1,0,0,0,2188,
        2186,1,0,0,0,2189,2194,3,132,66,0,2190,2191,3,212,106,0,2191,2192,
        3,132,66,0,2192,2194,1,0,0,0,2193,2189,1,0,0,0,2193,2190,1,0,0,0,
        2194,135,1,0,0,0,2195,2198,5,265,0,0,2196,2198,3,132,66,0,2197,2195,
        1,0,0,0,2197,2196,1,0,0,0,2198,137,1,0,0,0,2199,2200,5,240,0,0,2200,
        2201,3,102,51,0,2201,2202,5,216,0,0,2202,2203,3,102,51,0,2203,139,
        1,0,0,0,2204,2205,5,82,0,0,2205,2206,5,1,0,0,2206,2207,5,241,0,0,
        2207,2208,3,104,52,0,2208,2209,5,2,0,0,2209,141,1,0,0,0,2210,2211,
        5,240,0,0,2211,2214,5,130,0,0,2212,2213,5,23,0,0,2213,2215,3,102,
        51,0,2214,2212,1,0,0,0,2214,2215,1,0,0,0,2215,2216,1,0,0,0,2216,
        2217,5,216,0,0,2217,2218,5,232,0,0,2218,2219,5,203,0,0,2219,2220,
        3,212,106,0,2220,2221,5,249,0,0,2221,2229,3,102,51,0,2222,2223,5,
        3,0,0,2223,2224,3,212,106,0,2224,2225,5,249,0,0,2225,2226,3,102,
        51,0,2226,2228,1,0,0,0,2227,2222,1,0,0,0,2228,2231,1,0,0,0,2229,
        2227,1,0,0,0,2229,2230,1,0,0,0,2230,2275,1,0,0,0,2231,2229,1,0,0,
        0,2232,2233,5,240,0,0,2233,2236,5,130,0,0,2234,2235,5,23,0,0,2235,
        2237,3,102,51,0,2236,2234,1,0,0,0,2236,2237,1,0,0,0,2237,2238,1,
        0,0,0,2238,2239,5,216,0,0,2239,2275,5,62,0,0,2240,2241,5,240,0,0,
        2241,2242,5,147,0,0,2242,2245,5,130,0,0,2243,2244,5,23,0,0,2244,
        2246,3,102,51,0,2245,2243,1,0,0,0,2245,2246,1,0,0,0,2246,2247,1,
        0,0,0,2247,2248,5,216,0,0,2248,2260,5,108,0,0,2249,2250,5,1,0,0,
        2250,2255,3,212,106,0,2251,2252,5,3,0,0,2252,2254,3,212,106,0,2253,
        2251,1,0,0,0,2254,2257,1,0,0,0,2255,2253,1,0,0,0,2255,2256,1,0,0,
        0,2256,2258,1,0,0,0,2257,2255,1,0,0,0,2258,2259,5,2,0,0,2259,2261,
        1,0,0,0,2260,2249,1,0,0,0,2260,2261,1,0,0,0,2261,2262,1,0,0,0,2262,
        2263,5,237,0,0,2263,2264,5,1,0,0,2264,2269,3,102,51,0,2265,2266,
        5,3,0,0,2266,2268,3,102,51,0,2267,2265,1,0,0,0,2268,2271,1,0,0,0,
        2269,2267,1,0,0,0,2269,2270,1,0,0,0,2270,2272,1,0,0,0,2271,2269,
        1,0,0,0,2272,2273,5,2,0,0,2273,2275,1,0,0,0,2274,2210,1,0,0,0,2274,
        2232,1,0,0,0,2274,2240,1,0,0,0,2275,143,1,0,0,0,2276,2282,5,162,
        0,0,2277,2283,3,212,106,0,2278,2279,5,1,0,0,2279,2280,3,60,30,0,
        2280,2281,5,2,0,0,2281,2283,1,0,0,0,2282,2277,1,0,0,0,2282,2278,
        1,0,0,0,2283,145,1,0,0,0,2284,2285,5,134,0,0,2285,2290,3,80,40,0,
        2286,2287,5,3,0,0,2287,2289,3,80,40,0,2288,2286,1,0,0,0,2289,2292,
        1,0,0,0,2290,2288,1,0,0,0,2290,2291,1,0,0,0,2291,2294,1,0,0,0,2292,
        2290,1,0,0,0,2293,2284,1,0,0,0,2293,2294,1,0,0,0,2294,2295,1,0,0,
        0,2295,2299,3,148,74,0,2296,2297,5,19,0,0,2297,2298,5,129,0,0,2298,
        2300,3,86,43,0,2299,2296,1,0,0,0,2299,2300,1,0,0,0,2300,2302,1,0,
        0,0,2301,2303,7,12,0,0,2302,2301,1,0,0,0,2302,2303,1,0,0,0,2303,
        2309,1,0,0,0,2304,2305,5,167,0,0,2305,2306,5,1,0,0,2306,2307,3,152,
        76,0,2307,2308,5,2,0,0,2308,2310,1,0,0,0,2309,2304,1,0,0,0,2309,
        2310,1,0,0,0,2310,2320,1,0,0,0,2311,2312,5,209,0,0,2312,2317,3,88,
        44,0,2313,2314,5,3,0,0,2314,2316,3,88,44,0,2315,2313,1,0,0,0,2316,
        2319,1,0,0,0,2317,2315,1,0,0,0,2317,2318,1,0,0,0,2318,2321,1,0,0,
        0,2319,2317,1,0,0,0,2320,2311,1,0,0,0,2320,2321,1,0,0,0,2321,2331,
        1,0,0,0,2322,2323,5,65,0,0,2323,2328,3,90,45,0,2324,2325,5,3,0,0,
        2325,2327,3,90,45,0,2326,2324,1,0,0,0,2327,2330,1,0,0,0,2328,2326,
        1,0,0,0,2328,2329,1,0,0,0,2329,2332,1,0,0,0,2330,2328,1,0,0,0,2331,
        2322,1,0,0,0,2331,2332,1,0,0,0,2332,147,1,0,0,0,2333,2334,5,176,
        0,0,2334,2358,3,150,75,0,2335,2336,5,193,0,0,2336,2358,3,150,75,
        0,2337,2338,5,98,0,0,2338,2358,3,150,75,0,2339,2340,5,176,0,0,2340,
        2341,5,31,0,0,2341,2342,3,150,75,0,2342,2343,5,23,0,0,2343,2344,
        3,150,75,0,2344,2358,1,0,0,0,2345,2346,5,193,0,0,2346,2347,5,31,
        0,0,2347,2348,3,150,75,0,2348,2349,5,23,0,0,2349,2350,3,150,75,0,
        2350,2358,1,0,0,0,2351,2352,5,98,0,0,2352,2353,5,31,0,0,2353,2354,
        3,150,75,0,2354,2355,5,23,0,0,2355,2356,3,150,75,0,2356,2358,1,0,
        0,0,2357,2333,1,0,0,0,2357,2335,1,0,0,0,2357,2337,1,0,0,0,2357,2339,
        1,0,0,0,2357,2345,1,0,0,0,2357,2351,1,0,0,0,2358,149,1,0,0,0,2359,
        2360,5,227,0,0,2360,2369,5,171,0,0,2361,2362,5,227,0,0,2362,2369,
        5,85,0,0,2363,2364,5,47,0,0,2364,2369,5,192,0,0,2365,2366,3,102,
        51,0,2366,2367,7,21,0,0,2367,2369,1,0,0,0,2368,2359,1,0,0,0,2368,
        2361,1,0,0,0,2368,2363,1,0,0,0,2368,2365,1,0,0,0,2369,151,1,0,0,
        0,2370,2371,6,76,-1,0,2371,2373,3,154,77,0,2372,2374,3,156,78,0,
        2373,2372,1,0,0,0,2373,2374,1,0,0,0,2374,2382,1,0,0,0,2375,2376,
        10,2,0,0,2376,2381,3,152,76,3,2377,2378,10,1,0,0,2378,2379,5,9,0,
        0,2379,2381,3,152,76,2,2380,2375,1,0,0,0,2380,2377,1,0,0,0,2381,
        2384,1,0,0,0,2382,2380,1,0,0,0,2382,2383,1,0,0,0,2383,153,1,0,0,
        0,2384,2382,1,0,0,0,2385,2411,3,212,106,0,2386,2387,5,1,0,0,2387,
        2411,5,2,0,0,2388,2389,5,169,0,0,2389,2390,5,1,0,0,2390,2395,3,152,
        76,0,2391,2392,5,3,0,0,2392,2394,3,152,76,0,2393,2391,1,0,0,0,2394,
        2397,1,0,0,0,2395,2393,1,0,0,0,2395,2396,1,0,0,0,2396,2398,1,0,0,
        0,2397,2395,1,0,0,0,2398,2399,5,2,0,0,2399,2411,1,0,0,0,2400,2401,
        5,1,0,0,2401,2402,3,152,76,0,2402,2403,5,2,0,0,2403,2411,1,0,0,0,
        2404,2411,5,10,0,0,2405,2411,5,11,0,0,2406,2407,5,12,0,0,2407,2408,
        3,152,76,0,2408,2409,5,13,0,0,2409,2411,1,0,0,0,2410,2385,1,0,0,
        0,2410,2386,1,0,0,0,2410,2388,1,0,0,0,2410,2400,1,0,0,0,2410,2404,
        1,0,0,0,2410,2405,1,0,0,0,2410,2406,1,0,0,0,2411,155,1,0,0,0,2412,
        2414,5,257,0,0,2413,2415,5,261,0,0,2414,2413,1,0,0,0,2414,2415,1,
        0,0,0,2415,2443,1,0,0,0,2416,2418,5,255,0,0,2417,2419,5,261,0,0,
        2418,2417,1,0,0,0,2418,2419,1,0,0,0,2419,2443,1,0,0,0,2420,2422,
        5,261,0,0,2421,2423,5,261,0,0,2422,2421,1,0,0,0,2422,2423,1,0,0,
        0,2423,2443,1,0,0,0,2424,2425,5,14,0,0,2425,2426,5,265,0,0,2426,
        2428,5,15,0,0,2427,2429,5,261,0,0,2428,2427,1,0,0,0,2428,2429,1,
        0,0,0,2429,2443,1,0,0,0,2430,2432,5,14,0,0,2431,2433,5,265,0,0,2432,
        2431,1,0,0,0,2432,2433,1,0,0,0,2433,2434,1,0,0,0,2434,2436,5,3,0,
        0,2435,2437,5,265,0,0,2436,2435,1,0,0,0,2436,2437,1,0,0,0,2437,2438,
        1,0,0,0,2438,2440,5,15,0,0,2439,2441,5,261,0,0,2440,2439,1,0,0,0,
        2440,2441,1,0,0,0,2441,2443,1,0,0,0,2442,2412,1,0,0,0,2442,2416,
        1,0,0,0,2442,2420,1,0,0,0,2442,2424,1,0,0,0,2442,2430,1,0,0,0,2443,
        157,1,0,0,0,2444,2445,3,212,106,0,2445,2446,5,249,0,0,2446,2447,
        3,102,51,0,2447,159,1,0,0,0,2448,2449,5,87,0,0,2449,2453,7,22,0,
        0,2450,2451,5,225,0,0,2451,2453,7,23,0,0,2452,2448,1,0,0,0,2452,
        2450,1,0,0,0,2453,161,1,0,0,0,2454,2455,5,115,0,0,2455,2456,5,121,
        0,0,2456,2460,3,164,82,0,2457,2458,5,177,0,0,2458,2460,7,24,0,0,
        2459,2454,1,0,0,0,2459,2457,1,0,0,0,2460,163,1,0,0,0,2461,2462,5,
        177,0,0,2462,2469,5,228,0,0,2463,2464,5,177,0,0,2464,2469,5,42,0,
        0,2465,2466,5,181,0,0,2466,2469,5,177,0,0,2467,2469,5,201,0,0,2468,
        2461,1,0,0,0,2468,2463,1,0,0,0,2468,2465,1,0,0,0,2468,2467,1,0,0,
        0,2469,165,1,0,0,0,2470,2476,3,102,51,0,2471,2472,3,212,106,0,2472,
        2473,5,16,0,0,2473,2474,3,102,51,0,2474,2476,1,0,0,0,2475,2470,1,
        0,0,0,2475,2471,1,0,0,0,2476,167,1,0,0,0,2477,2478,3,212,106,0,2478,
        2479,5,4,0,0,2479,2480,3,212,106,0,2480,2483,1,0,0,0,2481,2483,3,
        212,106,0,2482,2477,1,0,0,0,2482,2481,1,0,0,0,2483,169,1,0,0,0,2484,
        2489,3,168,84,0,2485,2486,5,3,0,0,2486,2488,3,168,84,0,2487,2485,
        1,0,0,0,2488,2491,1,0,0,0,2489,2487,1,0,0,0,2489,2490,1,0,0,0,2490,
        171,1,0,0,0,2491,2489,1,0,0,0,2492,2493,7,25,0,0,2493,173,1,0,0,
        0,2494,2497,3,176,88,0,2495,2497,3,180,90,0,2496,2494,1,0,0,0,2496,
        2495,1,0,0,0,2497,175,1,0,0,0,2498,2499,3,184,92,0,2499,177,1,0,
        0,0,2500,2501,3,184,92,0,2501,179,1,0,0,0,2502,2503,3,186,93,0,2503,
        181,1,0,0,0,2504,2505,3,186,93,0,2505,183,1,0,0,0,2506,2518,3,212,
        106,0,2507,2508,3,212,106,0,2508,2509,5,4,0,0,2509,2510,3,212,106,
        0,2510,2518,1,0,0,0,2511,2512,3,212,106,0,2512,2513,5,4,0,0,2513,
        2514,3,212,106,0,2514,2515,5,4,0,0,2515,2516,3,212,106,0,2516,2518,
        1,0,0,0,2517,2506,1,0,0,0,2517,2507,1,0,0,0,2517,2511,1,0,0,0,2518,
        185,1,0,0,0,2519,2531,3,212,106,0,2520,2521,3,212,106,0,2521,2522,
        5,4,0,0,2522,2523,3,212,106,0,2523,2531,1,0,0,0,2524,2525,3,212,
        106,0,2525,2526,5,4,0,0,2526,2527,3,212,106,0,2527,2528,5,4,0,0,
        2528,2529,3,212,106,0,2529,2531,1,0,0,0,2530,2519,1,0,0,0,2530,2520,
        1,0,0,0,2530,2524,1,0,0,0,2531,187,1,0,0,0,2532,2533,3,192,96,0,
        2533,189,1,0,0,0,2534,2535,3,192,96,0,2535,191,1,0,0,0,2536,2542,
        3,212,106,0,2537,2538,3,212,106,0,2538,2539,5,4,0,0,2539,2540,3,
        212,106,0,2540,2542,1,0,0,0,2541,2536,1,0,0,0,2541,2537,1,0,0,0,
        2542,193,1,0,0,0,2543,2544,3,212,106,0,2544,195,1,0,0,0,2545,2546,
        3,212,106,0,2546,197,1,0,0,0,2547,2548,3,204,102,0,2548,199,1,0,
        0,0,2549,2550,3,204,102,0,2550,201,1,0,0,0,2551,2552,3,212,106,0,
        2552,203,1,0,0,0,2553,2558,3,212,106,0,2554,2555,5,4,0,0,2555,2557,
        3,212,106,0,2556,2554,1,0,0,0,2557,2560,1,0,0,0,2558,2556,1,0,0,
        0,2558,2559,1,0,0,0,2559,205,1,0,0,0,2560,2558,1,0,0,0,2561,2565,
        3,208,104,0,2562,2565,5,55,0,0,2563,2565,5,51,0,0,2564,2561,1,0,
        0,0,2564,2562,1,0,0,0,2564,2563,1,0,0,0,2565,207,1,0,0,0,2566,2572,
        3,212,106,0,2567,2568,5,234,0,0,2568,2572,3,212,106,0,2569,2570,
        5,188,0,0,2570,2572,3,212,106,0,2571,2566,1,0,0,0,2571,2567,1,0,
        0,0,2571,2569,1,0,0,0,2572,209,1,0,0,0,2573,2578,3,212,106,0,2574,
        2575,5,3,0,0,2575,2577,3,212,106,0,2576,2574,1,0,0,0,2577,2580,1,
        0,0,0,2578,2576,1,0,0,0,2578,2579,1,0,0,0,2579,211,1,0,0,0,2580,
        2578,1,0,0,0,2581,2587,5,268,0,0,2582,2587,5,270,0,0,2583,2587,3,
        216,108,0,2584,2587,5,271,0,0,2585,2587,5,269,0,0,2586,2581,1,0,
        0,0,2586,2582,1,0,0,0,2586,2583,1,0,0,0,2586,2584,1,0,0,0,2586,2585,
        1,0,0,0,2587,213,1,0,0,0,2588,2590,5,256,0,0,2589,2588,1,0,0,0,2589,
        2590,1,0,0,0,2590,2591,1,0,0,0,2591,2601,5,266,0,0,2592,2594,5,256,
        0,0,2593,2592,1,0,0,0,2593,2594,1,0,0,0,2594,2595,1,0,0,0,2595,2601,
        5,267,0,0,2596,2598,5,256,0,0,2597,2596,1,0,0,0,2597,2598,1,0,0,
        0,2598,2599,1,0,0,0,2599,2601,5,265,0,0,2600,2589,1,0,0,0,2600,2593,
        1,0,0,0,2600,2597,1,0,0,0,2601,215,1,0,0,0,2602,2603,7,26,0,0,2603,
        217,1,0,0,0,339,221,232,236,240,244,248,252,262,267,271,277,281,
        302,306,310,314,322,326,329,336,345,351,355,361,368,377,386,400,
        409,415,422,432,439,447,455,484,487,490,494,500,505,512,517,521,
        529,535,539,553,561,580,605,608,618,622,635,641,646,650,656,665,
        671,675,682,686,694,699,703,707,710,717,725,730,734,738,741,750,
        757,762,766,770,773,781,784,788,791,799,804,828,834,836,842,848,
        850,858,860,866,872,874,889,894,901,913,915,923,925,943,946,950,
        954,972,975,991,1001,1006,1012,1015,1024,1036,1039,1045,1052,1057,
        1063,1067,1071,1077,1088,1097,1107,1110,1115,1117,1124,1130,1132,
        1136,1146,1152,1155,1157,1169,1176,1180,1183,1187,1191,1198,1207,
        1210,1214,1219,1223,1231,1234,1237,1244,1255,1258,1268,1271,1282,
        1287,1295,1298,1302,1306,1315,1324,1327,1336,1339,1342,1346,1357,
        1360,1363,1370,1373,1392,1396,1400,1404,1408,1412,1414,1425,1430,
        1439,1453,1456,1465,1468,1476,1479,1482,1487,1490,1502,1505,1513,
        1518,1522,1524,1526,1541,1543,1554,1575,1585,1596,1600,1602,1610,
        1621,1632,1649,1655,1666,1673,1677,1685,1687,1700,1708,1717,1723,
        1731,1737,1741,1746,1751,1757,1771,1773,1803,1814,1824,1827,1830,
        1835,1842,1845,1854,1857,1861,1864,1867,1882,1885,1904,1908,1916,
        1920,1945,1948,1957,1963,1969,1975,1988,1997,2019,2022,2025,2035,
        2037,2046,2052,2054,2062,2072,2078,2092,2101,2108,2113,2120,2130,
        2135,2142,2168,2173,2175,2182,2186,2193,2197,2214,2229,2236,2245,
        2255,2260,2269,2274,2282,2290,2293,2299,2302,2309,2317,2320,2328,
        2331,2357,2368,2373,2380,2382,2395,2410,2414,2418,2422,2428,2432,
        2436,2440,2442,2452,2459,2468,2475,2482,2489,2496,2517,2530,2541,
        2558,2564,2571,2578,2586,2589,2593,2597,2600
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!TrinoSqlParser.__ATN) {
            TrinoSqlParser.__ATN = new antlr.ATNDeserializer().deserialize(TrinoSqlParser._serializedATN);
        }

        return TrinoSqlParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(TrinoSqlParser.literalNames, TrinoSqlParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return TrinoSqlParser.vocabulary;
    }

    private static readonly decisionsToDFA = TrinoSqlParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.EOF, 0)!;
    }
    public statements(): StatementsContext[];
    public statements(i: number): StatementsContext | null;
    public statements(i?: number): StatementsContext[] | StatementsContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementsContext);
        }

        return this.getRuleContext(i, StatementsContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_program;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public singleStatement(): SingleStatementContext {
        return this.getRuleContext(0, SingleStatementContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_statements;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterStatements) {
             listener.enterStatements(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitStatements) {
             listener.exitStatements(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitStatements) {
            return visitor.visitStatements(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StandaloneClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public standaloneExpression(): StandaloneExpressionContext | null {
        return this.getRuleContext(0, StandaloneExpressionContext);
    }
    public standalonePathSpecification(): StandalonePathSpecificationContext | null {
        return this.getRuleContext(0, StandalonePathSpecificationContext);
    }
    public standaloneType(): StandaloneTypeContext | null {
        return this.getRuleContext(0, StandaloneTypeContext);
    }
    public standaloneRowPattern(): StandaloneRowPatternContext | null {
        return this.getRuleContext(0, StandaloneRowPatternContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_standaloneClause;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterStandaloneClause) {
             listener.enterStandaloneClause(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitStandaloneClause) {
             listener.exitStandaloneClause(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitStandaloneClause) {
            return visitor.visitStandaloneClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SingleStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.SEMICOLON, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_singleStatement;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSingleStatement) {
             listener.enterSingleStatement(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSingleStatement) {
             listener.exitSingleStatement(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSingleStatement) {
            return visitor.visitSingleStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StandaloneExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.SEMICOLON, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_standaloneExpression;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterStandaloneExpression) {
             listener.enterStandaloneExpression(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitStandaloneExpression) {
             listener.exitStandaloneExpression(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitStandaloneExpression) {
            return visitor.visitStandaloneExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StandalonePathSpecificationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathSpecification(): PathSpecificationContext {
        return this.getRuleContext(0, PathSpecificationContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.SEMICOLON, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_standalonePathSpecification;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterStandalonePathSpecification) {
             listener.enterStandalonePathSpecification(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitStandalonePathSpecification) {
             listener.exitStandalonePathSpecification(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitStandalonePathSpecification) {
            return visitor.visitStandalonePathSpecification(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StandaloneTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.SEMICOLON, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_standaloneType;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterStandaloneType) {
             listener.enterStandaloneType(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitStandaloneType) {
             listener.exitStandaloneType(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitStandaloneType) {
            return visitor.visitStandaloneType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StandaloneRowPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public rowPattern(): RowPatternContext {
        return this.getRuleContext(0, RowPatternContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.SEMICOLON, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_standaloneRowPattern;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterStandaloneRowPattern) {
             listener.enterStandaloneRowPattern(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitStandaloneRowPattern) {
             listener.exitStandaloneRowPattern(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitStandaloneRowPattern) {
            return visitor.visitStandaloneRowPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_statement;
    }
    public override copyFrom(ctx: StatementContext): void {
        super.copyFrom(ctx);
    }
}
export class ExplainContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_EXPLAIN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_EXPLAIN, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public KW_ANALYZE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ANALYZE, 0);
    }
    public KW_VERBOSE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_VERBOSE, 0);
    }
    public explainOption(): ExplainOptionContext[];
    public explainOption(i: number): ExplainOptionContext | null;
    public explainOption(i?: number): ExplainOptionContext[] | ExplainOptionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExplainOptionContext);
        }

        return this.getRuleContext(i, ExplainOptionContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterExplain) {
             listener.enterExplain(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitExplain) {
             listener.exitExplain(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitExplain) {
            return visitor.visitExplain(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PrepareContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_PREPARE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_PREPARE, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_FROM, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterPrepare) {
             listener.enterPrepare(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitPrepare) {
             listener.exitPrepare(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitPrepare) {
            return visitor.visitPrepare(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropMaterializedViewContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_DROP, 0)!;
    }
    public KW_MATERIALIZED(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_MATERIALIZED, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_VIEW, 0)!;
    }
    public viewName(): ViewNameContext {
        return this.getRuleContext(0, ViewNameContext)!;
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IF, 0);
    }
    public KW_EXISTS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_EXISTS, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDropMaterializedView) {
             listener.enterDropMaterializedView(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDropMaterializedView) {
             listener.exitDropMaterializedView(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDropMaterializedView) {
            return visitor.visitDropMaterializedView(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetMaterializedViewPropertiesContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ALTER, 0)!;
    }
    public KW_MATERIALIZED(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_MATERIALIZED, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_VIEW, 0)!;
    }
    public viewName(): ViewNameContext {
        return this.getRuleContext(0, ViewNameContext)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SET, 0)!;
    }
    public KW_PROPERTIES(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_PROPERTIES, 0)!;
    }
    public propertyAssignments(): PropertyAssignmentsContext {
        return this.getRuleContext(0, PropertyAssignmentsContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSetMaterializedViewProperties) {
             listener.enterSetMaterializedViewProperties(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSetMaterializedViewProperties) {
             listener.exitSetMaterializedViewProperties(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSetMaterializedViewProperties) {
            return visitor.visitSetMaterializedViewProperties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UseContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_USE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_USE, 0)!;
    }
    public schemaName(): SchemaNameContext {
        return this.getRuleContext(0, SchemaNameContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterUse) {
             listener.enterUse(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitUse) {
             listener.exitUse(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitUse) {
            return visitor.visitUse(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DeallocateContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_DEALLOCATE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_DEALLOCATE, 0)!;
    }
    public KW_PREPARE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_PREPARE, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDeallocate) {
             listener.enterDeallocate(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDeallocate) {
             listener.exitDeallocate(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDeallocate) {
            return visitor.visitDeallocate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RenameTableContext extends StatementContext {
    public _from_?: TableNameContext;
    public _to?: TableNameCreateContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0)!;
    }
    public KW_RENAME(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_RENAME, 0)!;
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TO, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public tableNameCreate(): TableNameCreateContext {
        return this.getRuleContext(0, TableNameCreateContext)!;
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IF, 0);
    }
    public KW_EXISTS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_EXISTS, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRenameTable) {
             listener.enterRenameTable(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRenameTable) {
             listener.exitRenameTable(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRenameTable) {
            return visitor.visitRenameTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CommitContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_COMMIT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_COMMIT, 0)!;
    }
    public KW_WORK(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WORK, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCommit) {
             listener.enterCommit(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCommit) {
             listener.exitCommit(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCommit) {
            return visitor.visitCommit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateRoleContext extends StatementContext {
    public _name?: IdentifierContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CREATE, 0)!;
    }
    public KW_ROLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ROLE, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WITH, 0);
    }
    public KW_ADMIN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ADMIN, 0);
    }
    public grantor(): GrantorContext | null {
        return this.getRuleContext(0, GrantorContext);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IN, 0);
    }
    public catalogName(): CatalogNameContext | null {
        return this.getRuleContext(0, CatalogNameContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCreateRole) {
             listener.enterCreateRole(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCreateRole) {
             listener.exitCreateRole(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCreateRole) {
            return visitor.visitCreateRole(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropColumnContext extends StatementContext {
    public _column?: ColumnNameContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_DROP, 0)!;
    }
    public KW_COLUMN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_COLUMN, 0)!;
    }
    public columnName(): ColumnNameContext {
        return this.getRuleContext(0, ColumnNameContext)!;
    }
    public KW_IF(): antlr.TerminalNode[];
    public KW_IF(i: number): antlr.TerminalNode | null;
    public KW_IF(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(TrinoSqlParser.KW_IF);
    	} else {
    		return this.getToken(TrinoSqlParser.KW_IF, i);
    	}
    }
    public KW_EXISTS(): antlr.TerminalNode[];
    public KW_EXISTS(i: number): antlr.TerminalNode | null;
    public KW_EXISTS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(TrinoSqlParser.KW_EXISTS);
    	} else {
    		return this.getToken(TrinoSqlParser.KW_EXISTS, i);
    	}
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDropColumn) {
             listener.enterDropColumn(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDropColumn) {
             listener.exitDropColumn(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDropColumn) {
            return visitor.visitDropColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropViewContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_DROP, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_VIEW, 0)!;
    }
    public viewName(): ViewNameContext {
        return this.getRuleContext(0, ViewNameContext)!;
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IF, 0);
    }
    public KW_EXISTS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_EXISTS, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDropView) {
             listener.enterDropView(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDropView) {
             listener.exitDropView(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDropView) {
            return visitor.visitDropView(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowTablesContext extends StatementContext {
    public _pattern?: StringContext;
    public _escape?: StringContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0)!;
    }
    public KW_TABLES(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TABLES, 0)!;
    }
    public schemaName(): SchemaNameContext | null {
        return this.getRuleContext(0, SchemaNameContext);
    }
    public KW_LIKE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LIKE, 0);
    }
    public KW_FROM(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FROM, 0);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IN, 0);
    }
    public string_(): StringContext[];
    public string_(i: number): StringContext | null;
    public string_(i?: number): StringContext[] | StringContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringContext);
        }

        return this.getRuleContext(i, StringContext);
    }
    public KW_ESCAPE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ESCAPE, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterShowTables) {
             listener.enterShowTables(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitShowTables) {
             listener.exitShowTables(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitShowTables) {
            return visitor.visitShowTables(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetViewAuthorizationContext extends StatementContext {
    public _from_?: ViewNameContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ALTER, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_VIEW, 0)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SET, 0)!;
    }
    public KW_AUTHORIZATION(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_AUTHORIZATION, 0)!;
    }
    public principal(): PrincipalContext {
        return this.getRuleContext(0, PrincipalContext)!;
    }
    public viewName(): ViewNameContext {
        return this.getRuleContext(0, ViewNameContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSetViewAuthorization) {
             listener.enterSetViewAuthorization(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSetViewAuthorization) {
             listener.exitSetViewAuthorization(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSetViewAuthorization) {
            return visitor.visitSetViewAuthorization(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowTableCommentContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0)!;
    }
    public KW_COMMENT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_COMMENT, 0)!;
    }
    public KW_ON(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ON, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterShowTableComment) {
             listener.enterShowTableComment(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitShowTableComment) {
             listener.exitShowTableComment(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitShowTableComment) {
            return visitor.visitShowTableComment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowCatalogsContext extends StatementContext {
    public _pattern?: StringContext;
    public _escape?: StringContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0)!;
    }
    public KW_CATALOGS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CATALOGS, 0)!;
    }
    public KW_LIKE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LIKE, 0);
    }
    public string_(): StringContext[];
    public string_(i: number): StringContext | null;
    public string_(i?: number): StringContext[] | StringContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringContext);
        }

        return this.getRuleContext(i, StringContext);
    }
    public KW_ESCAPE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ESCAPE, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterShowCatalogs) {
             listener.enterShowCatalogs(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitShowCatalogs) {
             listener.exitShowCatalogs(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitShowCatalogs) {
            return visitor.visitShowCatalogs(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowRolesContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0)!;
    }
    public KW_ROLES(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ROLES, 0)!;
    }
    public KW_CURRENT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_CURRENT, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_FROM(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FROM, 0);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IN, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterShowRoles) {
             listener.enterShowRoles(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitShowRoles) {
             listener.exitShowRoles(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitShowRoles) {
            return visitor.visitShowRoles(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MergeContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_MERGE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_MERGE, 0)!;
    }
    public KW_INTO(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_INTO, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public KW_USING(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_USING, 0)!;
    }
    public relation(): RelationContext {
        return this.getRuleContext(0, RelationContext)!;
    }
    public KW_ON(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ON, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public mergeCase(): MergeCaseContext[];
    public mergeCase(i: number): MergeCaseContext | null;
    public mergeCase(i?: number): MergeCaseContext[] | MergeCaseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MergeCaseContext);
        }

        return this.getRuleContext(i, MergeCaseContext);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_AS, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterMerge) {
             listener.enterMerge(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitMerge) {
             listener.exitMerge(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitMerge) {
            return visitor.visitMerge(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RenameColumnContext extends StatementContext {
    public _from_?: ColumnNameContext;
    public _to?: ColumnNameCreateContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public KW_RENAME(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_RENAME, 0)!;
    }
    public KW_COLUMN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_COLUMN, 0)!;
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TO, 0)!;
    }
    public columnName(): ColumnNameContext {
        return this.getRuleContext(0, ColumnNameContext)!;
    }
    public columnNameCreate(): ColumnNameCreateContext {
        return this.getRuleContext(0, ColumnNameCreateContext)!;
    }
    public KW_IF(): antlr.TerminalNode[];
    public KW_IF(i: number): antlr.TerminalNode | null;
    public KW_IF(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(TrinoSqlParser.KW_IF);
    	} else {
    		return this.getToken(TrinoSqlParser.KW_IF, i);
    	}
    }
    public KW_EXISTS(): antlr.TerminalNode[];
    public KW_EXISTS(i: number): antlr.TerminalNode | null;
    public KW_EXISTS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(TrinoSqlParser.KW_EXISTS);
    	} else {
    		return this.getToken(TrinoSqlParser.KW_EXISTS, i);
    	}
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRenameColumn) {
             listener.enterRenameColumn(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRenameColumn) {
             listener.exitRenameColumn(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRenameColumn) {
            return visitor.visitRenameColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CommentColumnContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_COMMENT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_COMMENT, 0)!;
    }
    public KW_ON(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ON, 0)!;
    }
    public KW_COLUMN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_COLUMN, 0)!;
    }
    public columnName(): ColumnNameContext {
        return this.getRuleContext(0, ColumnNameContext)!;
    }
    public KW_IS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_IS, 0)!;
    }
    public string(): StringContext | null {
        return this.getRuleContext(0, StringContext);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NULL, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCommentColumn) {
             listener.enterCommentColumn(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCommentColumn) {
             listener.exitCommentColumn(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCommentColumn) {
            return visitor.visitCommentColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RevokeRolesContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_REVOKE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_REVOKE, 0)!;
    }
    public roles(): RolesContext {
        return this.getRuleContext(0, RolesContext)!;
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_FROM, 0)!;
    }
    public principal(): PrincipalContext[];
    public principal(i: number): PrincipalContext | null;
    public principal(i?: number): PrincipalContext[] | PrincipalContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PrincipalContext);
        }

        return this.getRuleContext(i, PrincipalContext);
    }
    public KW_ADMIN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ADMIN, 0);
    }
    public KW_OPTION(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_OPTION, 0);
    }
    public KW_FOR(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FOR, 0);
    }
    public KW_GRANTED(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_GRANTED, 0);
    }
    public KW_BY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_BY, 0);
    }
    public grantor(): GrantorContext | null {
        return this.getRuleContext(0, GrantorContext);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IN, 0);
    }
    public catalogName(): CatalogNameContext | null {
        return this.getRuleContext(0, CatalogNameContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRevokeRoles) {
             listener.enterRevokeRoles(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRevokeRoles) {
             listener.exitRevokeRoles(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRevokeRoles) {
            return visitor.visitRevokeRoles(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowCreateTableContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0)!;
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CREATE, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterShowCreateTable) {
             listener.enterShowCreateTable(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitShowCreateTable) {
             listener.exitShowCreateTable(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitShowCreateTable) {
            return visitor.visitShowCreateTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowColumnsContext extends StatementContext {
    public _pattern?: StringContext;
    public _escape?: StringContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SHOW(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0);
    }
    public KW_COLUMNS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_COLUMNS, 0);
    }
    public KW_FROM(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FROM, 0);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IN, 0);
    }
    public tableOrViewName(): TableOrViewNameContext | null {
        return this.getRuleContext(0, TableOrViewNameContext);
    }
    public KW_LIKE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LIKE, 0);
    }
    public string_(): StringContext[];
    public string_(i: number): StringContext | null;
    public string_(i?: number): StringContext[] | StringContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringContext);
        }

        return this.getRuleContext(i, StringContext);
    }
    public KW_ESCAPE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ESCAPE, 0);
    }
    public KW_DESCRIBE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DESCRIBE, 0);
    }
    public KW_DESC(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DESC, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterShowColumns) {
             listener.enterShowColumns(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitShowColumns) {
             listener.exitShowColumns(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitShowColumns) {
            return visitor.visitShowColumns(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowRoleGrantsContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0)!;
    }
    public KW_ROLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ROLE, 0)!;
    }
    public KW_GRANTS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_GRANTS, 0)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_FROM(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FROM, 0);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IN, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterShowRoleGrants) {
             listener.enterShowRoleGrants(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitShowRoleGrants) {
             listener.exitShowRoleGrants(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitShowRoleGrants) {
            return visitor.visitShowRoleGrants(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddColumnContext extends StatementContext {
    public _column?: ColumnDefinitionContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public KW_ADD(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ADD, 0)!;
    }
    public KW_COLUMN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_COLUMN, 0)!;
    }
    public columnDefinition(): ColumnDefinitionContext {
        return this.getRuleContext(0, ColumnDefinitionContext)!;
    }
    public KW_IF(): antlr.TerminalNode[];
    public KW_IF(i: number): antlr.TerminalNode | null;
    public KW_IF(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(TrinoSqlParser.KW_IF);
    	} else {
    		return this.getToken(TrinoSqlParser.KW_IF, i);
    	}
    }
    public KW_EXISTS(): antlr.TerminalNode[];
    public KW_EXISTS(i: number): antlr.TerminalNode | null;
    public KW_EXISTS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(TrinoSqlParser.KW_EXISTS);
    	} else {
    		return this.getToken(TrinoSqlParser.KW_EXISTS, i);
    	}
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NOT, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterAddColumn) {
             listener.enterAddColumn(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitAddColumn) {
             listener.exitAddColumn(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitAddColumn) {
            return visitor.visitAddColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DenyContext extends StatementContext {
    public _grantee?: PrincipalContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_DENY(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_DENY, 0)!;
    }
    public KW_ON(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ON, 0)!;
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TO, 0)!;
    }
    public principal(): PrincipalContext {
        return this.getRuleContext(0, PrincipalContext)!;
    }
    public privilege(): PrivilegeContext[];
    public privilege(i: number): PrivilegeContext | null;
    public privilege(i?: number): PrivilegeContext[] | PrivilegeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PrivilegeContext);
        }

        return this.getRuleContext(i, PrivilegeContext);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ALL, 0);
    }
    public KW_PRIVILEGES(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PRIVILEGES, 0);
    }
    public schemaName(): SchemaNameContext | null {
        return this.getRuleContext(0, SchemaNameContext);
    }
    public tableName(): TableNameContext | null {
        return this.getRuleContext(0, TableNameContext);
    }
    public KW_SCHEMA(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SCHEMA, 0);
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDeny) {
             listener.enterDeny(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDeny) {
             listener.exitDeny(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDeny) {
            return visitor.visitDeny(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ResetSessionContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_RESET(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_RESET, 0)!;
    }
    public KW_SESSION(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SESSION, 0)!;
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterResetSession) {
             listener.enterResetSession(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitResetSession) {
             listener.exitResetSession(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitResetSession) {
            return visitor.visitResetSession(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class InsertIntoContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_INSERT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_INSERT, 0)!;
    }
    public KW_INTO(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_INTO, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public columnList(): ColumnListContext | null {
        return this.getRuleContext(0, ColumnListContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterInsertInto) {
             listener.enterInsertInto(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitInsertInto) {
             listener.exitInsertInto(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitInsertInto) {
            return visitor.visitInsertInto(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowSessionContext extends StatementContext {
    public _pattern?: StringContext;
    public _escape?: StringContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0)!;
    }
    public KW_SESSION(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SESSION, 0)!;
    }
    public KW_LIKE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LIKE, 0);
    }
    public string_(): StringContext[];
    public string_(i: number): StringContext | null;
    public string_(i?: number): StringContext[] | StringContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringContext);
        }

        return this.getRuleContext(i, StringContext);
    }
    public KW_ESCAPE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ESCAPE, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterShowSession) {
             listener.enterShowSession(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitShowSession) {
             listener.exitShowSession(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitShowSession) {
            return visitor.visitShowSession(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateSchemaContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CREATE, 0)!;
    }
    public KW_SCHEMA(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SCHEMA, 0)!;
    }
    public schemaNameCreate(): SchemaNameCreateContext {
        return this.getRuleContext(0, SchemaNameCreateContext)!;
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IF, 0);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NOT, 0);
    }
    public KW_EXISTS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_EXISTS, 0);
    }
    public KW_AUTHORIZATION(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_AUTHORIZATION, 0);
    }
    public principal(): PrincipalContext | null {
        return this.getRuleContext(0, PrincipalContext);
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WITH, 0);
    }
    public properties(): PropertiesContext | null {
        return this.getRuleContext(0, PropertiesContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCreateSchema) {
             listener.enterCreateSchema(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCreateSchema) {
             listener.exitCreateSchema(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCreateSchema) {
            return visitor.visitCreateSchema(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExecuteContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_EXECUTE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_EXECUTE, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_USING(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_USING, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterExecute) {
             listener.enterExecute(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitExecute) {
             listener.exitExecute(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitExecute) {
            return visitor.visitExecute(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RenameSchemaContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ALTER, 0)!;
    }
    public KW_SCHEMA(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SCHEMA, 0)!;
    }
    public schemaName(): SchemaNameContext {
        return this.getRuleContext(0, SchemaNameContext)!;
    }
    public KW_RENAME(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_RENAME, 0)!;
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TO, 0)!;
    }
    public schemaNameCreate(): SchemaNameCreateContext {
        return this.getRuleContext(0, SchemaNameCreateContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRenameSchema) {
             listener.enterRenameSchema(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRenameSchema) {
             listener.exitRenameSchema(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRenameSchema) {
            return visitor.visitRenameSchema(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropRoleContext extends StatementContext {
    public _name?: IdentifierContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_DROP, 0)!;
    }
    public KW_ROLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ROLE, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDropRole) {
             listener.enterDropRole(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDropRole) {
             listener.exitDropRole(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDropRole) {
            return visitor.visitDropRole(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AnalyzeContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ANALYZE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ANALYZE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WITH, 0);
    }
    public properties(): PropertiesContext | null {
        return this.getRuleContext(0, PropertiesContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterAnalyze) {
             listener.enterAnalyze(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitAnalyze) {
             listener.exitAnalyze(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitAnalyze) {
            return visitor.visitAnalyze(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetRoleContext extends StatementContext {
    public _role?: IdentifierContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SET, 0)!;
    }
    public KW_ROLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ROLE, 0)!;
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ALL, 0);
    }
    public KW_NONE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NONE, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IN, 0);
    }
    public catalogName(): CatalogNameContext | null {
        return this.getRuleContext(0, CatalogNameContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSetRole) {
             listener.enterSetRole(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSetRole) {
             listener.exitSetRole(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSetRole) {
            return visitor.visitSetRole(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowGrantsContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0)!;
    }
    public KW_GRANTS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_GRANTS, 0)!;
    }
    public KW_ON(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ON, 0);
    }
    public tableName(): TableNameContext | null {
        return this.getRuleContext(0, TableNameContext);
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterShowGrants) {
             listener.enterShowGrants(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitShowGrants) {
             listener.exitShowGrants(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitShowGrants) {
            return visitor.visitShowGrants(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropSchemaContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_DROP, 0)!;
    }
    public KW_SCHEMA(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SCHEMA, 0)!;
    }
    public schemaName(): SchemaNameContext {
        return this.getRuleContext(0, SchemaNameContext)!;
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IF, 0);
    }
    public KW_EXISTS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_EXISTS, 0);
    }
    public KW_CASCADE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_CASCADE, 0);
    }
    public KW_RESTRICT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_RESTRICT, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDropSchema) {
             listener.enterDropSchema(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDropSchema) {
             listener.exitDropSchema(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDropSchema) {
            return visitor.visitDropSchema(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetTableAuthorizationContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SET, 0)!;
    }
    public KW_AUTHORIZATION(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_AUTHORIZATION, 0)!;
    }
    public principal(): PrincipalContext {
        return this.getRuleContext(0, PrincipalContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSetTableAuthorization) {
             listener.enterSetTableAuthorization(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSetTableAuthorization) {
             listener.exitSetTableAuthorization(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSetTableAuthorization) {
            return visitor.visitSetTableAuthorization(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowCreateViewContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0)!;
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CREATE, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_VIEW, 0)!;
    }
    public viewName(): ViewNameContext {
        return this.getRuleContext(0, ViewNameContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterShowCreateView) {
             listener.enterShowCreateView(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitShowCreateView) {
             listener.exitShowCreateView(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitShowCreateView) {
            return visitor.visitShowCreateView(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowColumnCommentContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0)!;
    }
    public KW_COMMENT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_COMMENT, 0)!;
    }
    public KW_ON(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ON, 0)!;
    }
    public KW_COLUMN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_COLUMN, 0)!;
    }
    public columnName(): ColumnNameContext {
        return this.getRuleContext(0, ColumnNameContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterShowColumnComment) {
             listener.enterShowColumnComment(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitShowColumnComment) {
             listener.exitShowColumnComment(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitShowColumnComment) {
            return visitor.visitShowColumnComment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateTableContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CREATE, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0)!;
    }
    public tableNameCreate(): TableNameCreateContext {
        return this.getRuleContext(0, TableNameCreateContext)!;
    }
    public tableElement(): TableElementContext[];
    public tableElement(i: number): TableElementContext | null;
    public tableElement(i?: number): TableElementContext[] | TableElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TableElementContext);
        }

        return this.getRuleContext(i, TableElementContext);
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IF, 0);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NOT, 0);
    }
    public KW_EXISTS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_EXISTS, 0);
    }
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_COMMENT, 0);
    }
    public string(): StringContext | null {
        return this.getRuleContext(0, StringContext);
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WITH, 0);
    }
    public properties(): PropertiesContext | null {
        return this.getRuleContext(0, PropertiesContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCreateTable) {
             listener.enterCreateTable(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCreateTable) {
             listener.exitCreateTable(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCreateTable) {
            return visitor.visitCreateTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StartTransactionContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_START(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_START, 0)!;
    }
    public KW_TRANSACTION(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TRANSACTION, 0)!;
    }
    public transactionMode(): TransactionModeContext[];
    public transactionMode(i: number): TransactionModeContext | null;
    public transactionMode(i?: number): TransactionModeContext[] | TransactionModeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TransactionModeContext);
        }

        return this.getRuleContext(i, TransactionModeContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterStartTransaction) {
             listener.enterStartTransaction(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitStartTransaction) {
             listener.exitStartTransaction(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitStartTransaction) {
            return visitor.visitStartTransaction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateTableAsSelectContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CREATE, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0)!;
    }
    public tableNameCreate(): TableNameCreateContext {
        return this.getRuleContext(0, TableNameCreateContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_AS, 0)!;
    }
    public query(): QueryContext | null {
        return this.getRuleContext(0, QueryContext);
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IF, 0);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NOT, 0);
    }
    public KW_EXISTS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_EXISTS, 0);
    }
    public columnListCreate(): ColumnListCreateContext | null {
        return this.getRuleContext(0, ColumnListCreateContext);
    }
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_COMMENT, 0);
    }
    public string(): StringContext | null {
        return this.getRuleContext(0, StringContext);
    }
    public KW_WITH(): antlr.TerminalNode[];
    public KW_WITH(i: number): antlr.TerminalNode | null;
    public KW_WITH(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(TrinoSqlParser.KW_WITH);
    	} else {
    		return this.getToken(TrinoSqlParser.KW_WITH, i);
    	}
    }
    public properties(): PropertiesContext | null {
        return this.getRuleContext(0, PropertiesContext);
    }
    public KW_DATA(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DATA, 0);
    }
    public KW_NO(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NO, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCreateTableAsSelect) {
             listener.enterCreateTableAsSelect(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCreateTableAsSelect) {
             listener.exitCreateTableAsSelect(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCreateTableAsSelect) {
            return visitor.visitCreateTableAsSelect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowStatsContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0)!;
    }
    public KW_STATS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_STATS, 0)!;
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_FOR, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterShowStats) {
             listener.enterShowStats(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitShowStats) {
             listener.exitShowStats(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitShowStats) {
            return visitor.visitShowStats(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowCreateSchemaContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0)!;
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CREATE, 0)!;
    }
    public KW_SCHEMA(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SCHEMA, 0)!;
    }
    public schemaName(): SchemaNameContext {
        return this.getRuleContext(0, SchemaNameContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterShowCreateSchema) {
             listener.enterShowCreateSchema(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitShowCreateSchema) {
             listener.exitShowCreateSchema(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitShowCreateSchema) {
            return visitor.visitShowCreateSchema(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RevokeContext extends StatementContext {
    public _grantee?: PrincipalContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_REVOKE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_REVOKE, 0)!;
    }
    public KW_ON(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ON, 0)!;
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_FROM, 0)!;
    }
    public principal(): PrincipalContext {
        return this.getRuleContext(0, PrincipalContext)!;
    }
    public privilege(): PrivilegeContext[];
    public privilege(i: number): PrivilegeContext | null;
    public privilege(i?: number): PrivilegeContext[] | PrivilegeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PrivilegeContext);
        }

        return this.getRuleContext(i, PrivilegeContext);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ALL, 0);
    }
    public KW_PRIVILEGES(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PRIVILEGES, 0);
    }
    public KW_GRANT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_GRANT, 0);
    }
    public KW_OPTION(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_OPTION, 0);
    }
    public KW_FOR(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FOR, 0);
    }
    public schemaName(): SchemaNameContext | null {
        return this.getRuleContext(0, SchemaNameContext);
    }
    public tableName(): TableNameContext | null {
        return this.getRuleContext(0, TableNameContext);
    }
    public KW_SCHEMA(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SCHEMA, 0);
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRevoke) {
             listener.enterRevoke(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRevoke) {
             listener.exitRevoke(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRevoke) {
            return visitor.visitRevoke(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UpdateContext extends StatementContext {
    public _where?: BooleanExpressionContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_UPDATE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_UPDATE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SET, 0)!;
    }
    public updateAssignment(): UpdateAssignmentContext[];
    public updateAssignment(i: number): UpdateAssignmentContext | null;
    public updateAssignment(i?: number): UpdateAssignmentContext[] | UpdateAssignmentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UpdateAssignmentContext);
        }

        return this.getRuleContext(i, UpdateAssignmentContext);
    }
    public KW_WHERE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WHERE, 0);
    }
    public booleanExpression(): BooleanExpressionContext | null {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterUpdate) {
             listener.enterUpdate(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitUpdate) {
             listener.exitUpdate(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitUpdate) {
            return visitor.visitUpdate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableExecuteContext extends StatementContext {
    public _procedureName?: IdentifierContext;
    public _where?: BooleanExpressionContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public KW_EXECUTE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_EXECUTE, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_WHERE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WHERE, 0);
    }
    public booleanExpression(): BooleanExpressionContext | null {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    public callArgument(): CallArgumentContext[];
    public callArgument(i: number): CallArgumentContext | null;
    public callArgument(i?: number): CallArgumentContext[] | CallArgumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CallArgumentContext);
        }

        return this.getRuleContext(i, CallArgumentContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterTableExecute) {
             listener.enterTableExecute(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitTableExecute) {
             listener.exitTableExecute(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitTableExecute) {
            return visitor.visitTableExecute(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DeleteContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_DELETE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_DELETE, 0)!;
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_FROM, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public KW_WHERE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WHERE, 0);
    }
    public booleanExpression(): BooleanExpressionContext | null {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDelete) {
             listener.enterDelete(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDelete) {
             listener.exitDelete(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDelete) {
            return visitor.visitDelete(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DescribeInputContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_DESCRIBE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_DESCRIBE, 0)!;
    }
    public KW_INPUT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_INPUT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDescribeInput) {
             listener.enterDescribeInput(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDescribeInput) {
             listener.exitDescribeInput(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDescribeInput) {
            return visitor.visitDescribeInput(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowStatsForQueryContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0)!;
    }
    public KW_STATS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_STATS, 0)!;
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_FOR, 0)!;
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterShowStatsForQuery) {
             listener.enterShowStatsForQuery(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitShowStatsForQuery) {
             listener.exitShowStatsForQuery(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitShowStatsForQuery) {
            return visitor.visitShowStatsForQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StatementDefaultContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterStatementDefault) {
             listener.enterStatementDefault(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitStatementDefault) {
             listener.exitStatementDefault(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitStatementDefault) {
            return visitor.visitStatementDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetTimeZoneContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SET, 0)!;
    }
    public KW_TIME(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TIME, 0)!;
    }
    public KW_ZONE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ZONE, 0)!;
    }
    public KW_LOCAL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LOCAL, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSetTimeZone) {
             listener.enterSetTimeZone(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSetTimeZone) {
             listener.exitSetTimeZone(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSetTimeZone) {
            return visitor.visitSetTimeZone(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TruncateTableContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_TRUNCATE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TRUNCATE, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterTruncateTable) {
             listener.enterTruncateTable(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitTruncateTable) {
             listener.exitTruncateTable(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitTruncateTable) {
            return visitor.visitTruncateTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateMaterializedViewContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CREATE, 0)!;
    }
    public KW_MATERIALIZED(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_MATERIALIZED, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_VIEW, 0)!;
    }
    public viewNameCreate(): ViewNameCreateContext {
        return this.getRuleContext(0, ViewNameCreateContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_AS, 0)!;
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public KW_OR(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_OR, 0);
    }
    public KW_REPLACE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_REPLACE, 0);
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IF, 0);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NOT, 0);
    }
    public KW_EXISTS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_EXISTS, 0);
    }
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_COMMENT, 0);
    }
    public string(): StringContext | null {
        return this.getRuleContext(0, StringContext);
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WITH, 0);
    }
    public properties(): PropertiesContext | null {
        return this.getRuleContext(0, PropertiesContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCreateMaterializedView) {
             listener.enterCreateMaterializedView(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCreateMaterializedView) {
             listener.exitCreateMaterializedView(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCreateMaterializedView) {
            return visitor.visitCreateMaterializedView(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetSessionContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SET, 0)!;
    }
    public KW_SESSION(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SESSION, 0)!;
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.EQ, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSetSession) {
             listener.enterSetSession(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSetSession) {
             listener.exitSetSession(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSetSession) {
            return visitor.visitSetSession(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateViewContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CREATE, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_VIEW, 0)!;
    }
    public viewNameCreate(): ViewNameCreateContext {
        return this.getRuleContext(0, ViewNameCreateContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_AS, 0)!;
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public KW_OR(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_OR, 0);
    }
    public KW_REPLACE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_REPLACE, 0);
    }
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_COMMENT, 0);
    }
    public string(): StringContext | null {
        return this.getRuleContext(0, StringContext);
    }
    public KW_SECURITY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SECURITY, 0);
    }
    public KW_DEFINER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DEFINER, 0);
    }
    public KW_INVOKER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_INVOKER, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCreateView) {
             listener.enterCreateView(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCreateView) {
             listener.exitCreateView(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCreateView) {
            return visitor.visitCreateView(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RenameMaterializedViewContext extends StatementContext {
    public _from_?: ViewNameContext;
    public _to?: ViewNameCreateContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ALTER, 0)!;
    }
    public KW_MATERIALIZED(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_MATERIALIZED, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_VIEW, 0)!;
    }
    public KW_RENAME(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_RENAME, 0)!;
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TO, 0)!;
    }
    public viewName(): ViewNameContext {
        return this.getRuleContext(0, ViewNameContext)!;
    }
    public viewNameCreate(): ViewNameCreateContext {
        return this.getRuleContext(0, ViewNameCreateContext)!;
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IF, 0);
    }
    public KW_EXISTS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_EXISTS, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRenameMaterializedView) {
             listener.enterRenameMaterializedView(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRenameMaterializedView) {
             listener.exitRenameMaterializedView(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRenameMaterializedView) {
            return visitor.visitRenameMaterializedView(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowSchemasContext extends StatementContext {
    public _pattern?: StringContext;
    public _escape?: StringContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0)!;
    }
    public KW_SCHEMAS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SCHEMAS, 0)!;
    }
    public catalogName(): CatalogNameContext | null {
        return this.getRuleContext(0, CatalogNameContext);
    }
    public KW_LIKE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LIKE, 0);
    }
    public KW_FROM(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FROM, 0);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IN, 0);
    }
    public string_(): StringContext[];
    public string_(i: number): StringContext | null;
    public string_(i?: number): StringContext[] | StringContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringContext);
        }

        return this.getRuleContext(i, StringContext);
    }
    public KW_ESCAPE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ESCAPE, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterShowSchemas) {
             listener.enterShowSchemas(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitShowSchemas) {
             listener.exitShowSchemas(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitShowSchemas) {
            return visitor.visitShowSchemas(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropTableContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_DROP, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IF, 0);
    }
    public KW_EXISTS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_EXISTS, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDropTable) {
             listener.enterDropTable(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDropTable) {
             listener.exitDropTable(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDropTable) {
            return visitor.visitDropTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetSchemaAuthorizationContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ALTER, 0)!;
    }
    public KW_SCHEMA(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SCHEMA, 0)!;
    }
    public schemaName(): SchemaNameContext {
        return this.getRuleContext(0, SchemaNameContext)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SET, 0)!;
    }
    public KW_AUTHORIZATION(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_AUTHORIZATION, 0)!;
    }
    public principal(): PrincipalContext {
        return this.getRuleContext(0, PrincipalContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSetSchemaAuthorization) {
             listener.enterSetSchemaAuthorization(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSetSchemaAuthorization) {
             listener.exitSetSchemaAuthorization(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSetSchemaAuthorization) {
            return visitor.visitSetSchemaAuthorization(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RollbackContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ROLLBACK(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ROLLBACK, 0)!;
    }
    public KW_WORK(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WORK, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRollback) {
             listener.enterRollback(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRollback) {
             listener.exitRollback(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRollback) {
            return visitor.visitRollback(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CommentTableContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_COMMENT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_COMMENT, 0)!;
    }
    public KW_ON(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ON, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public KW_IS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_IS, 0)!;
    }
    public string(): StringContext | null {
        return this.getRuleContext(0, StringContext);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NULL, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCommentTable) {
             listener.enterCommentTable(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCommentTable) {
             listener.exitCommentTable(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCommentTable) {
            return visitor.visitCommentTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RenameViewContext extends StatementContext {
    public _from_?: ViewNameContext;
    public _to?: ViewNameCreateContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ALTER, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_VIEW, 0)!;
    }
    public KW_RENAME(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_RENAME, 0)!;
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TO, 0)!;
    }
    public viewName(): ViewNameContext {
        return this.getRuleContext(0, ViewNameContext)!;
    }
    public viewNameCreate(): ViewNameCreateContext {
        return this.getRuleContext(0, ViewNameCreateContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRenameView) {
             listener.enterRenameView(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRenameView) {
             listener.exitRenameView(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRenameView) {
            return visitor.visitRenameView(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetPathContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SET, 0)!;
    }
    public KW_PATH(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_PATH, 0)!;
    }
    public pathSpecification(): PathSpecificationContext {
        return this.getRuleContext(0, PathSpecificationContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSetPath) {
             listener.enterSetPath(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSetPath) {
             listener.exitSetPath(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSetPath) {
            return visitor.visitSetPath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class GrantRolesContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_GRANT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_GRANT, 0)!;
    }
    public roles(): RolesContext {
        return this.getRuleContext(0, RolesContext)!;
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TO, 0)!;
    }
    public principal(): PrincipalContext[];
    public principal(i: number): PrincipalContext | null;
    public principal(i?: number): PrincipalContext[] | PrincipalContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PrincipalContext);
        }

        return this.getRuleContext(i, PrincipalContext);
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WITH, 0);
    }
    public KW_ADMIN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ADMIN, 0);
    }
    public KW_OPTION(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_OPTION, 0);
    }
    public KW_GRANTED(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_GRANTED, 0);
    }
    public KW_BY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_BY, 0);
    }
    public grantor(): GrantorContext | null {
        return this.getRuleContext(0, GrantorContext);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IN, 0);
    }
    public catalogName(): CatalogNameContext | null {
        return this.getRuleContext(0, CatalogNameContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterGrantRoles) {
             listener.enterGrantRoles(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitGrantRoles) {
             listener.exitGrantRoles(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitGrantRoles) {
            return visitor.visitGrantRoles(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CallContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CALL(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CALL, 0)!;
    }
    public functionName(): FunctionNameContext {
        return this.getRuleContext(0, FunctionNameContext)!;
    }
    public callArgument(): CallArgumentContext[];
    public callArgument(i: number): CallArgumentContext | null;
    public callArgument(i?: number): CallArgumentContext[] | CallArgumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CallArgumentContext);
        }

        return this.getRuleContext(i, CallArgumentContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCall) {
             listener.enterCall(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCall) {
             listener.exitCall(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCall) {
            return visitor.visitCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RefreshMaterializedViewContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_REFRESH(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_REFRESH, 0)!;
    }
    public KW_MATERIALIZED(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_MATERIALIZED, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_VIEW, 0)!;
    }
    public viewName(): ViewNameContext {
        return this.getRuleContext(0, ViewNameContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRefreshMaterializedView) {
             listener.enterRefreshMaterializedView(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRefreshMaterializedView) {
             listener.exitRefreshMaterializedView(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRefreshMaterializedView) {
            return visitor.visitRefreshMaterializedView(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowCreateMaterializedViewContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0)!;
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CREATE, 0)!;
    }
    public KW_MATERIALIZED(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_MATERIALIZED, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_VIEW, 0)!;
    }
    public viewName(): ViewNameContext {
        return this.getRuleContext(0, ViewNameContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterShowCreateMaterializedView) {
             listener.enterShowCreateMaterializedView(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitShowCreateMaterializedView) {
             listener.exitShowCreateMaterializedView(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitShowCreateMaterializedView) {
            return visitor.visitShowCreateMaterializedView(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowFunctionsContext extends StatementContext {
    public _pattern?: StringContext;
    public _escape?: StringContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0)!;
    }
    public KW_FUNCTIONS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_FUNCTIONS, 0)!;
    }
    public KW_LIKE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LIKE, 0);
    }
    public string_(): StringContext[];
    public string_(i: number): StringContext | null;
    public string_(i?: number): StringContext[] | StringContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringContext);
        }

        return this.getRuleContext(i, StringContext);
    }
    public KW_ESCAPE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ESCAPE, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterShowFunctions) {
             listener.enterShowFunctions(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitShowFunctions) {
             listener.exitShowFunctions(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitShowFunctions) {
            return visitor.visitShowFunctions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DescribeOutputContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_DESCRIBE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_DESCRIBE, 0)!;
    }
    public KW_OUTPUT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_OUTPUT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDescribeOutput) {
             listener.enterDescribeOutput(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDescribeOutput) {
             listener.exitDescribeOutput(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDescribeOutput) {
            return visitor.visitDescribeOutput(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class GrantContext extends StatementContext {
    public _grantee?: PrincipalContext;
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_GRANT(): antlr.TerminalNode[];
    public KW_GRANT(i: number): antlr.TerminalNode | null;
    public KW_GRANT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(TrinoSqlParser.KW_GRANT);
    	} else {
    		return this.getToken(TrinoSqlParser.KW_GRANT, i);
    	}
    }
    public KW_ON(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ON, 0)!;
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TO, 0)!;
    }
    public principal(): PrincipalContext {
        return this.getRuleContext(0, PrincipalContext)!;
    }
    public privilege(): PrivilegeContext[];
    public privilege(i: number): PrivilegeContext | null;
    public privilege(i?: number): PrivilegeContext[] | PrivilegeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PrivilegeContext);
        }

        return this.getRuleContext(i, PrivilegeContext);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ALL, 0);
    }
    public KW_PRIVILEGES(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PRIVILEGES, 0);
    }
    public schemaName(): SchemaNameContext | null {
        return this.getRuleContext(0, SchemaNameContext);
    }
    public tableName(): TableNameContext | null {
        return this.getRuleContext(0, TableNameContext);
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WITH, 0);
    }
    public KW_OPTION(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_OPTION, 0);
    }
    public KW_SCHEMA(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SCHEMA, 0);
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterGrant) {
             listener.enterGrant(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitGrant) {
             listener.exitGrant(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitGrant) {
            return visitor.visitGrant(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetTablePropertiesContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SET, 0)!;
    }
    public KW_PROPERTIES(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_PROPERTIES, 0)!;
    }
    public propertyAssignments(): PropertyAssignmentsContext {
        return this.getRuleContext(0, PropertyAssignmentsContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSetTableProperties) {
             listener.enterSetTableProperties(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSetTableProperties) {
             listener.exitSetTableProperties(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSetTableProperties) {
            return visitor.visitSetTableProperties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public queryNoWith(): QueryNoWithContext {
        return this.getRuleContext(0, QueryNoWithContext)!;
    }
    public with(): WithContext | null {
        return this.getRuleContext(0, WithContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_query;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterQuery) {
             listener.enterQuery(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitQuery) {
             listener.exitQuery(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitQuery) {
            return visitor.visitQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WithContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WITH(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_WITH, 0)!;
    }
    public namedQuery(): NamedQueryContext[];
    public namedQuery(i: number): NamedQueryContext | null;
    public namedQuery(i?: number): NamedQueryContext[] | NamedQueryContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamedQueryContext);
        }

        return this.getRuleContext(i, NamedQueryContext);
    }
    public KW_RECURSIVE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_RECURSIVE, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_with;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterWith) {
             listener.enterWith(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitWith) {
             listener.exitWith(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitWith) {
            return visitor.visitWith(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnDefinition(): ColumnDefinitionContext | null {
        return this.getRuleContext(0, ColumnDefinitionContext);
    }
    public likeClause(): LikeClauseContext | null {
        return this.getRuleContext(0, LikeClauseContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_tableElement;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterTableElement) {
             listener.enterTableElement(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitTableElement) {
             listener.exitTableElement(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitTableElement) {
            return visitor.visitTableElement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnNameCreate(): ColumnNameCreateContext {
        return this.getRuleContext(0, ColumnNameCreateContext)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NOT, 0);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NULL, 0);
    }
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_COMMENT, 0);
    }
    public string(): StringContext | null {
        return this.getRuleContext(0, StringContext);
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WITH, 0);
    }
    public properties(): PropertiesContext | null {
        return this.getRuleContext(0, PropertiesContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_columnDefinition;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterColumnDefinition) {
             listener.enterColumnDefinition(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitColumnDefinition) {
             listener.exitColumnDefinition(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitColumnDefinition) {
            return visitor.visitColumnDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LikeClauseContext extends antlr.ParserRuleContext {
    public _optionType?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LIKE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_LIKE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public KW_PROPERTIES(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PROPERTIES, 0);
    }
    public KW_INCLUDING(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_INCLUDING, 0);
    }
    public KW_EXCLUDING(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_EXCLUDING, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_likeClause;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterLikeClause) {
             listener.enterLikeClause(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitLikeClause) {
             listener.exitLikeClause(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitLikeClause) {
            return visitor.visitLikeClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public propertyAssignments(): PropertyAssignmentsContext {
        return this.getRuleContext(0, PropertyAssignmentsContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_properties;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterProperties) {
             listener.enterProperties(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitProperties) {
             listener.exitProperties(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitProperties) {
            return visitor.visitProperties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertyAssignmentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public property(): PropertyContext[];
    public property(i: number): PropertyContext | null;
    public property(i?: number): PropertyContext[] | PropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }

        return this.getRuleContext(i, PropertyContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_propertyAssignments;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterPropertyAssignments) {
             listener.enterPropertyAssignments(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitPropertyAssignments) {
             listener.exitPropertyAssignments(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitPropertyAssignments) {
            return visitor.visitPropertyAssignments(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.EQ, 0)!;
    }
    public propertyValue(): PropertyValueContext {
        return this.getRuleContext(0, PropertyValueContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_property;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterProperty) {
             listener.enterProperty(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitProperty) {
             listener.exitProperty(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitProperty) {
            return visitor.visitProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertyValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_propertyValue;
    }
    public override copyFrom(ctx: PropertyValueContext): void {
        super.copyFrom(ctx);
    }
}
export class DefaultPropertyValueContext extends PropertyValueContext {
    public constructor(ctx: PropertyValueContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_DEFAULT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_DEFAULT, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDefaultPropertyValue) {
             listener.enterDefaultPropertyValue(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDefaultPropertyValue) {
             listener.exitDefaultPropertyValue(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDefaultPropertyValue) {
            return visitor.visitDefaultPropertyValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NonDefaultPropertyValueContext extends PropertyValueContext {
    public constructor(ctx: PropertyValueContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterNonDefaultPropertyValue) {
             listener.enterNonDefaultPropertyValue(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitNonDefaultPropertyValue) {
             listener.exitNonDefaultPropertyValue(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitNonDefaultPropertyValue) {
            return visitor.visitNonDefaultPropertyValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryNoWithContext extends antlr.ParserRuleContext {
    public _offset?: RowCountContext;
    public _limit?: LimitRowCountContext;
    public _fetchFirst?: RowCountContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public queryTerm(): QueryTermContext {
        return this.getRuleContext(0, QueryTermContext)!;
    }
    public KW_ORDER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ORDER, 0);
    }
    public KW_BY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_BY, 0);
    }
    public sortItem(): SortItemContext[];
    public sortItem(i: number): SortItemContext | null;
    public sortItem(i?: number): SortItemContext[] | SortItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SortItemContext);
        }

        return this.getRuleContext(i, SortItemContext);
    }
    public KW_OFFSET(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_OFFSET, 0);
    }
    public rowCount(): RowCountContext[];
    public rowCount(i: number): RowCountContext | null;
    public rowCount(i?: number): RowCountContext[] | RowCountContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RowCountContext);
        }

        return this.getRuleContext(i, RowCountContext);
    }
    public KW_LIMIT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LIMIT, 0);
    }
    public KW_FETCH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FETCH, 0);
    }
    public limitRowCount(): LimitRowCountContext | null {
        return this.getRuleContext(0, LimitRowCountContext);
    }
    public KW_FIRST(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FIRST, 0);
    }
    public KW_NEXT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NEXT, 0);
    }
    public KW_ROW(): antlr.TerminalNode[];
    public KW_ROW(i: number): antlr.TerminalNode | null;
    public KW_ROW(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(TrinoSqlParser.KW_ROW);
    	} else {
    		return this.getToken(TrinoSqlParser.KW_ROW, i);
    	}
    }
    public KW_ROWS(): antlr.TerminalNode[];
    public KW_ROWS(i: number): antlr.TerminalNode | null;
    public KW_ROWS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(TrinoSqlParser.KW_ROWS);
    	} else {
    		return this.getToken(TrinoSqlParser.KW_ROWS, i);
    	}
    }
    public KW_ONLY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ONLY, 0);
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WITH, 0);
    }
    public KW_TIES(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TIES, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_queryNoWith;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterQueryNoWith) {
             listener.enterQueryNoWith(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitQueryNoWith) {
             listener.exitQueryNoWith(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitQueryNoWith) {
            return visitor.visitQueryNoWith(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LimitRowCountContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ALL, 0);
    }
    public rowCount(): RowCountContext | null {
        return this.getRuleContext(0, RowCountContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_limitRowCount;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterLimitRowCount) {
             listener.enterLimitRowCount(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitLimitRowCount) {
             listener.exitLimitRowCount(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitLimitRowCount) {
            return visitor.visitLimitRowCount(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RowCountContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTEGER_VALUE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.INTEGER_VALUE, 0);
    }
    public QUESTION_MARK(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.QUESTION_MARK, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_rowCount;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRowCount) {
             listener.enterRowCount(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRowCount) {
             listener.exitRowCount(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRowCount) {
            return visitor.visitRowCount(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryTermContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_queryTerm;
    }
    public override copyFrom(ctx: QueryTermContext): void {
        super.copyFrom(ctx);
    }
}
export class QueryTermDefaultContext extends QueryTermContext {
    public constructor(ctx: QueryTermContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public queryPrimary(): QueryPrimaryContext {
        return this.getRuleContext(0, QueryPrimaryContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterQueryTermDefault) {
             listener.enterQueryTermDefault(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitQueryTermDefault) {
             listener.exitQueryTermDefault(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitQueryTermDefault) {
            return visitor.visitQueryTermDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetOperationContext extends QueryTermContext {
    public _left?: QueryTermContext;
    public _operator?: Token | null;
    public _right?: QueryTermContext;
    public constructor(ctx: QueryTermContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public queryTerm(): QueryTermContext[];
    public queryTerm(i: number): QueryTermContext | null;
    public queryTerm(i?: number): QueryTermContext[] | QueryTermContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QueryTermContext);
        }

        return this.getRuleContext(i, QueryTermContext);
    }
    public KW_INTERSECT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_INTERSECT, 0);
    }
    public setQuantifier(): SetQuantifierContext | null {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    public KW_UNION(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_UNION, 0);
    }
    public KW_EXCEPT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_EXCEPT, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSetOperation) {
             listener.enterSetOperation(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSetOperation) {
             listener.exitSetOperation(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSetOperation) {
            return visitor.visitSetOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryPrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_queryPrimary;
    }
    public override copyFrom(ctx: QueryPrimaryContext): void {
        super.copyFrom(ctx);
    }
}
export class SubqueryContext extends QueryPrimaryContext {
    public constructor(ctx: QueryPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public queryNoWith(): QueryNoWithContext {
        return this.getRuleContext(0, QueryNoWithContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSubquery) {
             listener.enterSubquery(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSubquery) {
             listener.exitSubquery(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSubquery) {
            return visitor.visitSubquery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class QueryPrimaryDefaultContext extends QueryPrimaryContext {
    public constructor(ctx: QueryPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public querySpecification(): QuerySpecificationContext {
        return this.getRuleContext(0, QuerySpecificationContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterQueryPrimaryDefault) {
             listener.enterQueryPrimaryDefault(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitQueryPrimaryDefault) {
             listener.exitQueryPrimaryDefault(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitQueryPrimaryDefault) {
            return visitor.visitQueryPrimaryDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableContext extends QueryPrimaryContext {
    public constructor(ctx: QueryPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TABLE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterTable) {
             listener.enterTable(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitTable) {
             listener.exitTable(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitTable) {
            return visitor.visitTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class InlineTableContext extends QueryPrimaryContext {
    public constructor(ctx: QueryPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_VALUES(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_VALUES, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterInlineTable) {
             listener.enterInlineTable(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitInlineTable) {
             listener.exitInlineTable(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitInlineTable) {
            return visitor.visitInlineTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SortItemContext extends antlr.ParserRuleContext {
    public _ordering?: Token | null;
    public _nullOrdering?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnName(): ColumnNameContext | null {
        return this.getRuleContext(0, ColumnNameContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public KW_NULLS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NULLS, 0);
    }
    public KW_ASC(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ASC, 0);
    }
    public KW_DESC(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DESC, 0);
    }
    public KW_FIRST(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FIRST, 0);
    }
    public KW_LAST(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LAST, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_sortItem;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSortItem) {
             listener.enterSortItem(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSortItem) {
             listener.exitSortItem(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSortItem) {
            return visitor.visitSortItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QuerySpecificationContext extends antlr.ParserRuleContext {
    public _where?: BooleanExpressionContext;
    public _having?: BooleanExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SELECT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SELECT, 0)!;
    }
    public selectItem(): SelectItemContext[];
    public selectItem(i: number): SelectItemContext | null;
    public selectItem(i?: number): SelectItemContext[] | SelectItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SelectItemContext);
        }

        return this.getRuleContext(i, SelectItemContext);
    }
    public setQuantifier(): SetQuantifierContext | null {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    public KW_FROM(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FROM, 0);
    }
    public relation(): RelationContext[];
    public relation(i: number): RelationContext | null;
    public relation(i?: number): RelationContext[] | RelationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelationContext);
        }

        return this.getRuleContext(i, RelationContext);
    }
    public KW_WHERE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WHERE, 0);
    }
    public KW_GROUP(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_GROUP, 0);
    }
    public KW_BY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_BY, 0);
    }
    public groupBy(): GroupByContext | null {
        return this.getRuleContext(0, GroupByContext);
    }
    public KW_HAVING(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_HAVING, 0);
    }
    public KW_WINDOW(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WINDOW, 0);
    }
    public windowDefinition(): WindowDefinitionContext[];
    public windowDefinition(i: number): WindowDefinitionContext | null;
    public windowDefinition(i?: number): WindowDefinitionContext[] | WindowDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WindowDefinitionContext);
        }

        return this.getRuleContext(i, WindowDefinitionContext);
    }
    public booleanExpression(): BooleanExpressionContext[];
    public booleanExpression(i: number): BooleanExpressionContext | null;
    public booleanExpression(i?: number): BooleanExpressionContext[] | BooleanExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BooleanExpressionContext);
        }

        return this.getRuleContext(i, BooleanExpressionContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_querySpecification;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterQuerySpecification) {
             listener.enterQuerySpecification(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitQuerySpecification) {
             listener.exitQuerySpecification(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitQuerySpecification) {
            return visitor.visitQuerySpecification(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupByContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public groupingElement(): GroupingElementContext[];
    public groupingElement(i: number): GroupingElementContext | null;
    public groupingElement(i?: number): GroupingElementContext[] | GroupingElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GroupingElementContext);
        }

        return this.getRuleContext(i, GroupingElementContext);
    }
    public setQuantifier(): SetQuantifierContext | null {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_groupBy;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterGroupBy) {
             listener.enterGroupBy(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitGroupBy) {
             listener.exitGroupBy(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitGroupBy) {
            return visitor.visitGroupBy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupingElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_groupingElement;
    }
    public override copyFrom(ctx: GroupingElementContext): void {
        super.copyFrom(ctx);
    }
}
export class MultipleGroupingSetsContext extends GroupingElementContext {
    public constructor(ctx: GroupingElementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_GROUPING(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_GROUPING, 0)!;
    }
    public KW_SETS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SETS, 0)!;
    }
    public groupingSet(): GroupingSetContext[];
    public groupingSet(i: number): GroupingSetContext | null;
    public groupingSet(i?: number): GroupingSetContext[] | GroupingSetContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GroupingSetContext);
        }

        return this.getRuleContext(i, GroupingSetContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterMultipleGroupingSets) {
             listener.enterMultipleGroupingSets(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitMultipleGroupingSets) {
             listener.exitMultipleGroupingSets(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitMultipleGroupingSets) {
            return visitor.visitMultipleGroupingSets(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SingleGroupingSetContext extends GroupingElementContext {
    public constructor(ctx: GroupingElementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public groupingSet(): GroupingSetContext {
        return this.getRuleContext(0, GroupingSetContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSingleGroupingSet) {
             listener.enterSingleGroupingSet(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSingleGroupingSet) {
             listener.exitSingleGroupingSet(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSingleGroupingSet) {
            return visitor.visitSingleGroupingSet(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CubeContext extends GroupingElementContext {
    public constructor(ctx: GroupingElementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CUBE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CUBE, 0)!;
    }
    public groupingTerm(): GroupingTermContext[];
    public groupingTerm(i: number): GroupingTermContext | null;
    public groupingTerm(i?: number): GroupingTermContext[] | GroupingTermContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GroupingTermContext);
        }

        return this.getRuleContext(i, GroupingTermContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCube) {
             listener.enterCube(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCube) {
             listener.exitCube(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCube) {
            return visitor.visitCube(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RollupContext extends GroupingElementContext {
    public constructor(ctx: GroupingElementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ROLLUP(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ROLLUP, 0)!;
    }
    public groupingTerm(): GroupingTermContext[];
    public groupingTerm(i: number): GroupingTermContext | null;
    public groupingTerm(i?: number): GroupingTermContext[] | GroupingTermContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GroupingTermContext);
        }

        return this.getRuleContext(i, GroupingTermContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRollup) {
             listener.enterRollup(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRollup) {
             listener.exitRollup(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRollup) {
            return visitor.visitRollup(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupingSetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public groupingTerm(): GroupingTermContext[];
    public groupingTerm(i: number): GroupingTermContext | null;
    public groupingTerm(i?: number): GroupingTermContext[] | GroupingTermContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GroupingTermContext);
        }

        return this.getRuleContext(i, GroupingTermContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_groupingSet;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterGroupingSet) {
             listener.enterGroupingSet(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitGroupingSet) {
             listener.exitGroupingSet(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitGroupingSet) {
            return visitor.visitGroupingSet(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupingTermContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnName(): ColumnNameContext | null {
        return this.getRuleContext(0, ColumnNameContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_groupingTerm;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterGroupingTerm) {
             listener.enterGroupingTerm(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitGroupingTerm) {
             listener.exitGroupingTerm(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitGroupingTerm) {
            return visitor.visitGroupingTerm(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_AS, 0)!;
    }
    public windowSpecification(): WindowSpecificationContext {
        return this.getRuleContext(0, WindowSpecificationContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_windowDefinition;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterWindowDefinition) {
             listener.enterWindowDefinition(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitWindowDefinition) {
             listener.exitWindowDefinition(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitWindowDefinition) {
            return visitor.visitWindowDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowSpecificationContext extends antlr.ParserRuleContext {
    public _existingWindowName?: IdentifierContext;
    public _expression?: ExpressionContext;
    public _partition: ExpressionContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PARTITION(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PARTITION, 0);
    }
    public KW_BY(): antlr.TerminalNode[];
    public KW_BY(i: number): antlr.TerminalNode | null;
    public KW_BY(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(TrinoSqlParser.KW_BY);
    	} else {
    		return this.getToken(TrinoSqlParser.KW_BY, i);
    	}
    }
    public KW_ORDER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ORDER, 0);
    }
    public sortItem(): SortItemContext[];
    public sortItem(i: number): SortItemContext | null;
    public sortItem(i?: number): SortItemContext[] | SortItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SortItemContext);
        }

        return this.getRuleContext(i, SortItemContext);
    }
    public windowFrame(): WindowFrameContext | null {
        return this.getRuleContext(0, WindowFrameContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_windowSpecification;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterWindowSpecification) {
             listener.enterWindowSpecification(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitWindowSpecification) {
             listener.exitWindowSpecification(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitWindowSpecification) {
            return visitor.visitWindowSpecification(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NamedQueryContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_AS, 0)!;
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public columnAliases(): ColumnAliasesContext | null {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_namedQuery;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterNamedQuery) {
             listener.enterNamedQuery(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitNamedQuery) {
             listener.exitNamedQuery(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitNamedQuery) {
            return visitor.visitNamedQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SetQuantifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DISTINCT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DISTINCT, 0);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ALL, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_setQuantifier;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSetQuantifier) {
             listener.enterSetQuantifier(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSetQuantifier) {
             listener.exitSetQuantifier(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSetQuantifier) {
            return visitor.visitSetQuantifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_selectItem;
    }
    public override copyFrom(ctx: SelectItemContext): void {
        super.copyFrom(ctx);
    }
}
export class SelectAllContext extends SelectItemContext {
    public constructor(ctx: SelectItemContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primaryExpression(): PrimaryExpressionContext | null {
        return this.getRuleContext(0, PrimaryExpressionContext);
    }
    public ASTERISK(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.ASTERISK, 0)!;
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_AS, 0);
    }
    public columnAliases(): ColumnAliasesContext | null {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSelectAll) {
             listener.enterSelectAll(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSelectAll) {
             listener.exitSelectAll(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSelectAll) {
            return visitor.visitSelectAll(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SelectSingleContext extends SelectItemContext {
    public constructor(ctx: SelectItemContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnName(): ColumnNameContext | null {
        return this.getRuleContext(0, ColumnNameContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_AS, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSelectSingle) {
             listener.enterSelectSingle(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSelectSingle) {
             listener.exitSelectSingle(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSelectSingle) {
            return visitor.visitSelectSingle(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_relation;
    }
    public override copyFrom(ctx: RelationContext): void {
        super.copyFrom(ctx);
    }
}
export class RelationDefaultContext extends RelationContext {
    public constructor(ctx: RelationContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public sampledRelation(): SampledRelationContext {
        return this.getRuleContext(0, SampledRelationContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRelationDefault) {
             listener.enterRelationDefault(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRelationDefault) {
             listener.exitRelationDefault(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRelationDefault) {
            return visitor.visitRelationDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class JoinRelationContext extends RelationContext {
    public _left?: RelationContext;
    public _right?: SampledRelationContext;
    public _rightRelation?: RelationContext;
    public constructor(ctx: RelationContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public relation(): RelationContext[];
    public relation(i: number): RelationContext | null;
    public relation(i?: number): RelationContext[] | RelationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelationContext);
        }

        return this.getRuleContext(i, RelationContext);
    }
    public KW_CROSS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_CROSS, 0);
    }
    public KW_JOIN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_JOIN, 0);
    }
    public joinType(): JoinTypeContext | null {
        return this.getRuleContext(0, JoinTypeContext);
    }
    public joinCriteria(): JoinCriteriaContext | null {
        return this.getRuleContext(0, JoinCriteriaContext);
    }
    public KW_NATURAL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NATURAL, 0);
    }
    public sampledRelation(): SampledRelationContext | null {
        return this.getRuleContext(0, SampledRelationContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterJoinRelation) {
             listener.enterJoinRelation(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitJoinRelation) {
             listener.exitJoinRelation(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitJoinRelation) {
            return visitor.visitJoinRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JoinTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_INNER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_INNER, 0);
    }
    public KW_LEFT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LEFT, 0);
    }
    public KW_OUTER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_OUTER, 0);
    }
    public KW_RIGHT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_RIGHT, 0);
    }
    public KW_FULL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FULL, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_joinType;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterJoinType) {
             listener.enterJoinType(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitJoinType) {
             listener.exitJoinType(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitJoinType) {
            return visitor.visitJoinType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JoinCriteriaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ON(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ON, 0);
    }
    public booleanExpression(): BooleanExpressionContext | null {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    public KW_USING(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_USING, 0);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_joinCriteria;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterJoinCriteria) {
             listener.enterJoinCriteria(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitJoinCriteria) {
             listener.exitJoinCriteria(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitJoinCriteria) {
            return visitor.visitJoinCriteria(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SampledRelationContext extends antlr.ParserRuleContext {
    public _percentage?: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public patternRecognition(): PatternRecognitionContext {
        return this.getRuleContext(0, PatternRecognitionContext)!;
    }
    public KW_TABLESAMPLE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TABLESAMPLE, 0);
    }
    public sampleType(): SampleTypeContext | null {
        return this.getRuleContext(0, SampleTypeContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_sampledRelation;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSampledRelation) {
             listener.enterSampledRelation(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSampledRelation) {
             listener.exitSampledRelation(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSampledRelation) {
            return visitor.visitSampledRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SampleTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_BERNOULLI(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_BERNOULLI, 0);
    }
    public KW_SYSTEM(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SYSTEM, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_sampleType;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSampleType) {
             listener.enterSampleType(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSampleType) {
             listener.exitSampleType(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSampleType) {
            return visitor.visitSampleType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternRecognitionContext extends antlr.ParserRuleContext {
    public _expression?: ExpressionContext;
    public _partition: ExpressionContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public aliasedRelation(): AliasedRelationContext {
        return this.getRuleContext(0, AliasedRelationContext)!;
    }
    public KW_MATCH_RECOGNIZE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MATCH_RECOGNIZE, 0);
    }
    public KW_PATTERN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PATTERN, 0);
    }
    public rowPattern(): RowPatternContext | null {
        return this.getRuleContext(0, RowPatternContext);
    }
    public KW_DEFINE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DEFINE, 0);
    }
    public variableDefinition(): VariableDefinitionContext[];
    public variableDefinition(i: number): VariableDefinitionContext | null;
    public variableDefinition(i?: number): VariableDefinitionContext[] | VariableDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableDefinitionContext);
        }

        return this.getRuleContext(i, VariableDefinitionContext);
    }
    public KW_PARTITION(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PARTITION, 0);
    }
    public KW_BY(): antlr.TerminalNode[];
    public KW_BY(i: number): antlr.TerminalNode | null;
    public KW_BY(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(TrinoSqlParser.KW_BY);
    	} else {
    		return this.getToken(TrinoSqlParser.KW_BY, i);
    	}
    }
    public KW_ORDER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ORDER, 0);
    }
    public sortItem(): SortItemContext[];
    public sortItem(i: number): SortItemContext | null;
    public sortItem(i?: number): SortItemContext[] | SortItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SortItemContext);
        }

        return this.getRuleContext(i, SortItemContext);
    }
    public KW_MEASURES(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MEASURES, 0);
    }
    public measureDefinition(): MeasureDefinitionContext[];
    public measureDefinition(i: number): MeasureDefinitionContext | null;
    public measureDefinition(i?: number): MeasureDefinitionContext[] | MeasureDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MeasureDefinitionContext);
        }

        return this.getRuleContext(i, MeasureDefinitionContext);
    }
    public rowsPerMatch(): RowsPerMatchContext | null {
        return this.getRuleContext(0, RowsPerMatchContext);
    }
    public KW_AFTER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_AFTER, 0);
    }
    public KW_MATCH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MATCH, 0);
    }
    public skipTo(): SkipToContext | null {
        return this.getRuleContext(0, SkipToContext);
    }
    public KW_SUBSET(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SUBSET, 0);
    }
    public subsetDefinition(): SubsetDefinitionContext[];
    public subsetDefinition(i: number): SubsetDefinitionContext | null;
    public subsetDefinition(i?: number): SubsetDefinitionContext[] | SubsetDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SubsetDefinitionContext);
        }

        return this.getRuleContext(i, SubsetDefinitionContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public KW_INITIAL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_INITIAL, 0);
    }
    public KW_SEEK(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SEEK, 0);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_AS, 0);
    }
    public columnAliases(): ColumnAliasesContext | null {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_patternRecognition;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterPatternRecognition) {
             listener.enterPatternRecognition(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitPatternRecognition) {
             listener.exitPatternRecognition(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitPatternRecognition) {
            return visitor.visitPatternRecognition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MeasureDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_AS, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_measureDefinition;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterMeasureDefinition) {
             listener.enterMeasureDefinition(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitMeasureDefinition) {
             listener.exitMeasureDefinition(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitMeasureDefinition) {
            return visitor.visitMeasureDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RowsPerMatchContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ONE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ONE, 0);
    }
    public KW_ROW(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ROW, 0);
    }
    public KW_PER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_PER, 0)!;
    }
    public KW_MATCH(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_MATCH, 0)!;
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ALL, 0);
    }
    public KW_ROWS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ROWS, 0);
    }
    public emptyMatchHandling(): EmptyMatchHandlingContext | null {
        return this.getRuleContext(0, EmptyMatchHandlingContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_rowsPerMatch;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRowsPerMatch) {
             listener.enterRowsPerMatch(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRowsPerMatch) {
             listener.exitRowsPerMatch(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRowsPerMatch) {
            return visitor.visitRowsPerMatch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EmptyMatchHandlingContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SHOW(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0);
    }
    public KW_EMPTY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_EMPTY, 0);
    }
    public KW_MATCHES(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MATCHES, 0);
    }
    public KW_OMIT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_OMIT, 0);
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WITH, 0);
    }
    public KW_UNMATCHED(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_UNMATCHED, 0);
    }
    public KW_ROWS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ROWS, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_emptyMatchHandling;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterEmptyMatchHandling) {
             listener.enterEmptyMatchHandling(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitEmptyMatchHandling) {
             listener.exitEmptyMatchHandling(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitEmptyMatchHandling) {
            return visitor.visitEmptyMatchHandling(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SkipToContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TO(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TO, 0);
    }
    public KW_NEXT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NEXT, 0);
    }
    public KW_ROW(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ROW, 0);
    }
    public KW_PAST(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PAST, 0);
    }
    public KW_LAST(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LAST, 0);
    }
    public KW_FIRST(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FIRST, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_skipTo;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSkipTo) {
             listener.enterSkipTo(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSkipTo) {
             listener.exitSkipTo(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSkipTo) {
            return visitor.visitSkipTo(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SubsetDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public _identifier?: IdentifierContext;
    public _union: IdentifierContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.EQ, 0)!;
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_subsetDefinition;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSubsetDefinition) {
             listener.enterSubsetDefinition(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSubsetDefinition) {
             listener.exitSubsetDefinition(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSubsetDefinition) {
            return visitor.visitSubsetDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_AS, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_variableDefinition;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterVariableDefinition) {
             listener.enterVariableDefinition(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitVariableDefinition) {
             listener.exitVariableDefinition(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitVariableDefinition) {
            return visitor.visitVariableDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AliasedRelationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public relationPrimary(): RelationPrimaryContext {
        return this.getRuleContext(0, RelationPrimaryContext)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_AS, 0);
    }
    public columnAliases(): ColumnAliasesContext | null {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_aliasedRelation;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterAliasedRelation) {
             listener.enterAliasedRelation(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitAliasedRelation) {
             listener.exitAliasedRelation(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitAliasedRelation) {
            return visitor.visitAliasedRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnListCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnNameCreate(): ColumnNameCreateContext[];
    public columnNameCreate(i: number): ColumnNameCreateContext | null;
    public columnNameCreate(i?: number): ColumnNameCreateContext[] | ColumnNameCreateContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNameCreateContext);
        }

        return this.getRuleContext(i, ColumnNameCreateContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_columnListCreate;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterColumnListCreate) {
             listener.enterColumnListCreate(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitColumnListCreate) {
             listener.exitColumnListCreate(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitColumnListCreate) {
            return visitor.visitColumnListCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnName(): ColumnNameContext[];
    public columnName(i: number): ColumnNameContext | null;
    public columnName(i?: number): ColumnNameContext[] | ColumnNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNameContext);
        }

        return this.getRuleContext(i, ColumnNameContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_columnList;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterColumnList) {
             listener.enterColumnList(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitColumnList) {
             listener.exitColumnList(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitColumnList) {
            return visitor.visitColumnList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnAliasesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_columnAliases;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterColumnAliases) {
             listener.enterColumnAliases(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitColumnAliases) {
             listener.exitColumnAliases(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitColumnAliases) {
            return visitor.visitColumnAliases(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelationPrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_relationPrimary;
    }
    public override copyFrom(ctx: RelationPrimaryContext): void {
        super.copyFrom(ctx);
    }
}
export class SubqueryRelationContext extends RelationPrimaryContext {
    public constructor(ctx: RelationPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSubqueryRelation) {
             listener.enterSubqueryRelation(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSubqueryRelation) {
             listener.exitSubqueryRelation(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSubqueryRelation) {
            return visitor.visitSubqueryRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesizedRelationContext extends RelationPrimaryContext {
    public constructor(ctx: RelationPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public relation(): RelationContext {
        return this.getRuleContext(0, RelationContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterParenthesizedRelation) {
             listener.enterParenthesizedRelation(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitParenthesizedRelation) {
             listener.exitParenthesizedRelation(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitParenthesizedRelation) {
            return visitor.visitParenthesizedRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnnestContext extends RelationPrimaryContext {
    public constructor(ctx: RelationPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_UNNEST(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_UNNEST, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WITH, 0);
    }
    public KW_ORDINALITY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ORDINALITY, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterUnnest) {
             listener.enterUnnest(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitUnnest) {
             listener.exitUnnest(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitUnnest) {
            return visitor.visitUnnest(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableOrViewRelationContext extends RelationPrimaryContext {
    public constructor(ctx: RelationPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tableOrViewName(): TableOrViewNameContext {
        return this.getRuleContext(0, TableOrViewNameContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterTableOrViewRelation) {
             listener.enterTableOrViewRelation(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitTableOrViewRelation) {
             listener.exitTableOrViewRelation(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitTableOrViewRelation) {
            return visitor.visitTableOrViewRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LateralContext extends RelationPrimaryContext {
    public constructor(ctx: RelationPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_LATERAL(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_LATERAL, 0)!;
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterLateral) {
             listener.enterLateral(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitLateral) {
             listener.exitLateral(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitLateral) {
            return visitor.visitLateral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_expression;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BooleanExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_booleanExpression;
    }
    public override copyFrom(ctx: BooleanExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class LogicalNotContext extends BooleanExpressionContext {
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_NOT, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterLogicalNot) {
             listener.enterLogicalNot(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitLogicalNot) {
             listener.exitLogicalNot(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitLogicalNot) {
            return visitor.visitLogicalNot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PredicatedContext extends BooleanExpressionContext {
    public _valueExpression?: ValueExpressionContext;
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public predicate(): PredicateContext | null {
        return this.getRuleContext(0, PredicateContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterPredicated) {
             listener.enterPredicated(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitPredicated) {
             listener.exitPredicated(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitPredicated) {
            return visitor.visitPredicated(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalBinaryContext extends BooleanExpressionContext {
    public _left?: BooleanExpressionContext;
    public _operator?: Token | null;
    public _right?: BooleanExpressionContext;
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public booleanExpression(): BooleanExpressionContext[];
    public booleanExpression(i: number): BooleanExpressionContext | null;
    public booleanExpression(i?: number): BooleanExpressionContext[] | BooleanExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BooleanExpressionContext);
        }

        return this.getRuleContext(i, BooleanExpressionContext);
    }
    public KW_AND(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_AND, 0);
    }
    public KW_OR(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_OR, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterLogicalBinary) {
             listener.enterLogicalBinary(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitLogicalBinary) {
             listener.exitLogicalBinary(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitLogicalBinary) {
            return visitor.visitLogicalBinary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PredicateContext extends antlr.ParserRuleContext {
    public value: ParserRuleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number, value: ParserRuleContext) {
        super(parent, invokingState);
        this.value = value;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_predicate;
    }
    public override copyFrom(ctx: PredicateContext): void {
        super.copyFrom(ctx);
        this.value = ctx.value;
    }
}
export class ComparisonContext extends PredicateContext {
    public _right?: ValueExpressionContext;
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    public comparisonOperator(): ComparisonOperatorContext {
        return this.getRuleContext(0, ComparisonOperatorContext)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterComparison) {
             listener.enterComparison(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitComparison) {
             listener.exitComparison(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LikeContext extends PredicateContext {
    public _pattern?: ValueExpressionContext;
    public _escape?: ValueExpressionContext;
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    public KW_LIKE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_LIKE, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NOT, 0);
    }
    public KW_ESCAPE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ESCAPE, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterLike) {
             listener.enterLike(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitLike) {
             listener.exitLike(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitLike) {
            return visitor.visitLike(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class InSubqueryContext extends PredicateContext {
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_IN, 0)!;
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NOT, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterInSubquery) {
             listener.enterInSubquery(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitInSubquery) {
             listener.exitInSubquery(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitInSubquery) {
            return visitor.visitInSubquery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DistinctFromContext extends PredicateContext {
    public _right?: ValueExpressionContext;
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    public KW_IS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_IS, 0)!;
    }
    public KW_DISTINCT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_DISTINCT, 0)!;
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_FROM, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NOT, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDistinctFrom) {
             listener.enterDistinctFrom(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDistinctFrom) {
             listener.exitDistinctFrom(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDistinctFrom) {
            return visitor.visitDistinctFrom(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class InListContext extends PredicateContext {
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_IN, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NOT, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterInList) {
             listener.enterInList(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitInList) {
             listener.exitInList(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitInList) {
            return visitor.visitInList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NullPredicateContext extends PredicateContext {
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    public KW_IS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_IS, 0)!;
    }
    public KW_NULL(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_NULL, 0)!;
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NOT, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterNullPredicate) {
             listener.enterNullPredicate(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitNullPredicate) {
             listener.exitNullPredicate(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitNullPredicate) {
            return visitor.visitNullPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BetweenContext extends PredicateContext {
    public _lower?: ValueExpressionContext;
    public _upper?: ValueExpressionContext;
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    public KW_BETWEEN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_BETWEEN, 0)!;
    }
    public KW_AND(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_AND, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NOT, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterBetween) {
             listener.enterBetween(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitBetween) {
             listener.exitBetween(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitBetween) {
            return visitor.visitBetween(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class QuantifiedComparisonContext extends PredicateContext {
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    public comparisonOperator(): ComparisonOperatorContext {
        return this.getRuleContext(0, ComparisonOperatorContext)!;
    }
    public comparisonQuantifier(): ComparisonQuantifierContext {
        return this.getRuleContext(0, ComparisonQuantifierContext)!;
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterQuantifiedComparison) {
             listener.enterQuantifiedComparison(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitQuantifiedComparison) {
             listener.exitQuantifiedComparison(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitQuantifiedComparison) {
            return visitor.visitQuantifiedComparison(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValueExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_valueExpression;
    }
    public override copyFrom(ctx: ValueExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterValueExpressionDefault) {
             listener.enterValueExpressionDefault(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitValueExpressionDefault) {
             listener.exitValueExpressionDefault(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitValueExpressionDefault) {
            return visitor.visitValueExpressionDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConcatenationContext extends ValueExpressionContext {
    public _left?: ValueExpressionContext;
    public _right?: ValueExpressionContext;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CONCAT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.CONCAT, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterConcatenation) {
             listener.enterConcatenation(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitConcatenation) {
             listener.exitConcatenation(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitConcatenation) {
            return visitor.visitConcatenation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
    public _left?: ValueExpressionContext;
    public _operator?: Token | null;
    public _right?: ValueExpressionContext;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public ASTERISK(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.ASTERISK, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.SLASH, 0);
    }
    public PERCENT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.PERCENT, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.MINUS, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterArithmeticBinary) {
             listener.enterArithmeticBinary(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitArithmeticBinary) {
             listener.exitArithmeticBinary(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitArithmeticBinary) {
            return visitor.visitArithmeticBinary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.MINUS, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.PLUS, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterArithmeticUnary) {
             listener.enterArithmeticUnary(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitArithmeticUnary) {
             listener.exitArithmeticUnary(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitArithmeticUnary) {
            return visitor.visitArithmeticUnary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AtTimeZoneContext extends ValueExpressionContext {
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public KW_AT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_AT, 0)!;
    }
    public timeZoneSpecifier(): TimeZoneSpecifierContext {
        return this.getRuleContext(0, TimeZoneSpecifierContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterAtTimeZone) {
             listener.enterAtTimeZone(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitAtTimeZone) {
             listener.exitAtTimeZone(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitAtTimeZone) {
            return visitor.visitAtTimeZone(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimaryExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_primaryExpression;
    }
    public override copyFrom(ctx: PrimaryExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class DereferenceContext extends PrimaryExpressionContext {
    public _base?: PrimaryExpressionContext;
    public _fieldName?: IdentifierContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDereference) {
             listener.enterDereference(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDereference) {
             listener.exitDereference(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDereference) {
            return visitor.visitDereference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TypeConstructorContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public string(): StringContext {
        return this.getRuleContext(0, StringContext)!;
    }
    public KW_DOUBLE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DOUBLE, 0);
    }
    public KW_PRECISION(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PRECISION, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterTypeConstructor) {
             listener.enterTypeConstructor(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitTypeConstructor) {
             listener.exitTypeConstructor(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitTypeConstructor) {
            return visitor.visitTypeConstructor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SpecialDateTimeFunctionContext extends PrimaryExpressionContext {
    public _name?: Token | null;
    public _precision?: Token | null;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CURRENT_DATE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_CURRENT_DATE, 0);
    }
    public KW_CURRENT_TIME(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_CURRENT_TIME, 0);
    }
    public INTEGER_VALUE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.INTEGER_VALUE, 0);
    }
    public KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_CURRENT_TIMESTAMP, 0);
    }
    public KW_LOCALTIME(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LOCALTIME, 0);
    }
    public KW_LOCALTIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LOCALTIMESTAMP, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSpecialDateTimeFunction) {
             listener.enterSpecialDateTimeFunction(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSpecialDateTimeFunction) {
             listener.exitSpecialDateTimeFunction(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSpecialDateTimeFunction) {
            return visitor.visitSpecialDateTimeFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubstringContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SUBSTRING(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SUBSTRING, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_FROM, 0)!;
    }
    public KW_FOR(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FOR, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSubstring) {
             listener.enterSubstring(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSubstring) {
             listener.exitSubstring(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSubstring) {
            return visitor.visitSubstring(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CastContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CAST(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_CAST, 0);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_AS, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public KW_TRY_CAST(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TRY_CAST, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCast) {
             listener.enterCast(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCast) {
             listener.exitCast(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCast) {
            return visitor.visitCast(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LambdaContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterLambda) {
             listener.enterLambda(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitLambda) {
             listener.exitLambda(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitLambda) {
            return visitor.visitLambda(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterParenthesizedExpression) {
             listener.enterParenthesizedExpression(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitParenthesizedExpression) {
             listener.exitParenthesizedExpression(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitParenthesizedExpression) {
            return visitor.visitParenthesizedExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParameterContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public QUESTION_MARK(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.QUESTION_MARK, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterParameter) {
             listener.enterParameter(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitParameter) {
             listener.exitParameter(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NormalizeContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_NORMALIZE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_NORMALIZE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public normalForm(): NormalFormContext | null {
        return this.getRuleContext(0, NormalFormContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterNormalize) {
             listener.enterNormalize(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitNormalize) {
             listener.exitNormalize(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitNormalize) {
            return visitor.visitNormalize(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntervalLiteralContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public interval(): IntervalContext {
        return this.getRuleContext(0, IntervalContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterIntervalLiteral) {
             listener.enterIntervalLiteral(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitIntervalLiteral) {
             listener.exitIntervalLiteral(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitIntervalLiteral) {
            return visitor.visitIntervalLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumericLiteralContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public number(): NumberContext {
        return this.getRuleContext(0, NumberContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterNumericLiteral) {
             listener.enterNumericLiteral(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitNumericLiteral) {
             listener.exitNumericLiteral(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitNumericLiteral) {
            return visitor.visitNumericLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BooleanLiteralContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public booleanValue(): BooleanValueContext {
        return this.getRuleContext(0, BooleanValueContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterBooleanLiteral) {
             listener.enterBooleanLiteral(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitBooleanLiteral) {
             listener.exitBooleanLiteral(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SimpleCaseContext extends PrimaryExpressionContext {
    public _operand?: ExpressionContext;
    public _elseExpression?: ExpressionContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CASE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CASE, 0)!;
    }
    public KW_END(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_END, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public whenClause(): WhenClauseContext[];
    public whenClause(i: number): WhenClauseContext | null;
    public whenClause(i?: number): WhenClauseContext[] | WhenClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WhenClauseContext);
        }

        return this.getRuleContext(i, WhenClauseContext);
    }
    public KW_ELSE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ELSE, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSimpleCase) {
             listener.enterSimpleCase(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSimpleCase) {
             listener.exitSimpleCase(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSimpleCase) {
            return visitor.visitSimpleCase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterColumnReference) {
             listener.enterColumnReference(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitColumnReference) {
             listener.exitColumnReference(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitColumnReference) {
            return visitor.visitColumnReference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NullLiteralContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_NULL(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_NULL, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterNullLiteral) {
             listener.enterNullLiteral(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitNullLiteral) {
             listener.exitNullLiteral(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitNullLiteral) {
            return visitor.visitNullLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RowConstructorContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public KW_ROW(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ROW, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRowConstructor) {
             listener.enterRowConstructor(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRowConstructor) {
             listener.exitRowConstructor(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRowConstructor) {
            return visitor.visitRowConstructor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubscriptContext extends PrimaryExpressionContext {
    public _value?: PrimaryExpressionContext;
    public _index?: ValueExpressionContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSubscript) {
             listener.enterSubscript(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSubscript) {
             listener.exitSubscript(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSubscript) {
            return visitor.visitSubscript(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CurrentPathContext extends PrimaryExpressionContext {
    public _name?: Token | null;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CURRENT_PATH(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CURRENT_PATH, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCurrentPath) {
             listener.enterCurrentPath(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCurrentPath) {
             listener.exitCurrentPath(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCurrentPath) {
            return visitor.visitCurrentPath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSubqueryExpression) {
             listener.enterSubqueryExpression(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSubqueryExpression) {
             listener.exitSubqueryExpression(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSubqueryExpression) {
            return visitor.visitSubqueryExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BinaryLiteralContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public BINARY_LITERAL(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.BINARY_LITERAL, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterBinaryLiteral) {
             listener.enterBinaryLiteral(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitBinaryLiteral) {
             listener.exitBinaryLiteral(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitBinaryLiteral) {
            return visitor.visitBinaryLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CurrentUserContext extends PrimaryExpressionContext {
    public _name?: Token | null;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CURRENT_USER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CURRENT_USER, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCurrentUser) {
             listener.enterCurrentUser(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCurrentUser) {
             listener.exitCurrentUser(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCurrentUser) {
            return visitor.visitCurrentUser(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MeasureContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public over(): OverContext {
        return this.getRuleContext(0, OverContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterMeasure) {
             listener.enterMeasure(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitMeasure) {
             listener.exitMeasure(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitMeasure) {
            return visitor.visitMeasure(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExtractContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_EXTRACT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_EXTRACT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_FROM, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterExtract) {
             listener.enterExtract(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitExtract) {
             listener.exitExtract(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitExtract) {
            return visitor.visitExtract(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringLiteralContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public string(): StringContext {
        return this.getRuleContext(0, StringContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterStringLiteral) {
             listener.enterStringLiteral(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitStringLiteral) {
             listener.exitStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrayConstructorContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ARRAY(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ARRAY, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterArrayConstructor) {
             listener.enterArrayConstructor(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitArrayConstructor) {
             listener.exitArrayConstructor(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitArrayConstructor) {
            return visitor.visitArrayConstructor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionCallContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionName(): FunctionNameContext {
        return this.getRuleContext(0, FunctionNameContext)!;
    }
    public ASTERISK(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.ASTERISK, 0);
    }
    public filter(): FilterContext | null {
        return this.getRuleContext(0, FilterContext);
    }
    public over(): OverContext | null {
        return this.getRuleContext(0, OverContext);
    }
    public processingMode(): ProcessingModeContext | null {
        return this.getRuleContext(0, ProcessingModeContext);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public KW_ORDER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ORDER, 0);
    }
    public KW_BY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_BY, 0);
    }
    public sortItem(): SortItemContext[];
    public sortItem(i: number): SortItemContext | null;
    public sortItem(i?: number): SortItemContext[] | SortItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SortItemContext);
        }

        return this.getRuleContext(i, SortItemContext);
    }
    public setQuantifier(): SetQuantifierContext | null {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    public nullTreatment(): NullTreatmentContext | null {
        return this.getRuleContext(0, NullTreatmentContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterFunctionCall) {
             listener.enterFunctionCall(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitFunctionCall) {
             listener.exitFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CurrentSchemaContext extends PrimaryExpressionContext {
    public _name?: Token | null;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CURRENT_SCHEMA(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CURRENT_SCHEMA, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCurrentSchema) {
             listener.enterCurrentSchema(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCurrentSchema) {
             listener.exitCurrentSchema(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCurrentSchema) {
            return visitor.visitCurrentSchema(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExistsContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_EXISTS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_EXISTS, 0)!;
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterExists) {
             listener.enterExists(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitExists) {
             listener.exitExists(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitExists) {
            return visitor.visitExists(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PositionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_POSITION(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_POSITION, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_IN, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterPosition) {
             listener.enterPosition(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitPosition) {
             listener.exitPosition(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitPosition) {
            return visitor.visitPosition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SearchedCaseContext extends PrimaryExpressionContext {
    public _elseExpression?: ExpressionContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CASE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CASE, 0)!;
    }
    public KW_END(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_END, 0)!;
    }
    public whenClause(): WhenClauseContext[];
    public whenClause(i: number): WhenClauseContext | null;
    public whenClause(i?: number): WhenClauseContext[] | WhenClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WhenClauseContext);
        }

        return this.getRuleContext(i, WhenClauseContext);
    }
    public KW_ELSE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ELSE, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSearchedCase) {
             listener.enterSearchedCase(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSearchedCase) {
             listener.exitSearchedCase(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSearchedCase) {
            return visitor.visitSearchedCase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CurrentCatalogContext extends PrimaryExpressionContext {
    public _name?: Token | null;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CURRENT_CATALOG(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CURRENT_CATALOG, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCurrentCatalog) {
             listener.enterCurrentCatalog(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCurrentCatalog) {
             listener.exitCurrentCatalog(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCurrentCatalog) {
            return visitor.visitCurrentCatalog(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupingOperationContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_GROUPING(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_GROUPING, 0)!;
    }
    public qualifiedName(): QualifiedNameContext[];
    public qualifiedName(i: number): QualifiedNameContext | null;
    public qualifiedName(i?: number): QualifiedNameContext[] | QualifiedNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }

        return this.getRuleContext(i, QualifiedNameContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterGroupingOperation) {
             listener.enterGroupingOperation(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitGroupingOperation) {
             listener.exitGroupingOperation(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitGroupingOperation) {
            return visitor.visitGroupingOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ProcessingModeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_RUNNING(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_RUNNING, 0);
    }
    public KW_FINAL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FINAL, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_processingMode;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterProcessingMode) {
             listener.enterProcessingMode(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitProcessingMode) {
             listener.exitProcessingMode(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitProcessingMode) {
            return visitor.visitProcessingMode(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NullTreatmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IGNORE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IGNORE, 0);
    }
    public KW_NULLS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_NULLS, 0)!;
    }
    public KW_RESPECT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_RESPECT, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_nullTreatment;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterNullTreatment) {
             listener.enterNullTreatment(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitNullTreatment) {
             listener.exitNullTreatment(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitNullTreatment) {
            return visitor.visitNullTreatment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_string;
    }
    public override copyFrom(ctx: StringContext): void {
        super.copyFrom(ctx);
    }
}
export class UnicodeStringLiteralContext extends StringContext {
    public constructor(ctx: StringContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public UNICODE_STRING(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.UNICODE_STRING, 0)!;
    }
    public KW_UESCAPE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_UESCAPE, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.STRING, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterUnicodeStringLiteral) {
             listener.enterUnicodeStringLiteral(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitUnicodeStringLiteral) {
             listener.exitUnicodeStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitUnicodeStringLiteral) {
            return visitor.visitUnicodeStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BasicStringLiteralContext extends StringContext {
    public constructor(ctx: StringContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.STRING, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterBasicStringLiteral) {
             listener.enterBasicStringLiteral(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitBasicStringLiteral) {
             listener.exitBasicStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitBasicStringLiteral) {
            return visitor.visitBasicStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimeZoneSpecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_timeZoneSpecifier;
    }
    public override copyFrom(ctx: TimeZoneSpecifierContext): void {
        super.copyFrom(ctx);
    }
}
export class TimeZoneIntervalContext extends TimeZoneSpecifierContext {
    public constructor(ctx: TimeZoneSpecifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_TIME(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TIME, 0)!;
    }
    public KW_ZONE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ZONE, 0)!;
    }
    public interval(): IntervalContext {
        return this.getRuleContext(0, IntervalContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterTimeZoneInterval) {
             listener.enterTimeZoneInterval(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitTimeZoneInterval) {
             listener.exitTimeZoneInterval(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitTimeZoneInterval) {
            return visitor.visitTimeZoneInterval(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TimeZoneStringContext extends TimeZoneSpecifierContext {
    public constructor(ctx: TimeZoneSpecifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_TIME(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TIME, 0)!;
    }
    public KW_ZONE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ZONE, 0)!;
    }
    public string(): StringContext {
        return this.getRuleContext(0, StringContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterTimeZoneString) {
             listener.enterTimeZoneString(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitTimeZoneString) {
             listener.exitTimeZoneString(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitTimeZoneString) {
            return visitor.visitTimeZoneString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComparisonOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.EQ, 0);
    }
    public NEQ(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.NEQ, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.LT, 0);
    }
    public LTE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.LTE, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.GT, 0);
    }
    public GTE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.GTE, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_comparisonOperator;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterComparisonOperator) {
             listener.enterComparisonOperator(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitComparisonOperator) {
             listener.exitComparisonOperator(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitComparisonOperator) {
            return visitor.visitComparisonOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComparisonQuantifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ALL, 0);
    }
    public KW_SOME(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SOME, 0);
    }
    public KW_ANY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ANY, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_comparisonQuantifier;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterComparisonQuantifier) {
             listener.enterComparisonQuantifier(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitComparisonQuantifier) {
             listener.exitComparisonQuantifier(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitComparisonQuantifier) {
            return visitor.visitComparisonQuantifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BooleanValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FALSE, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_booleanValue;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterBooleanValue) {
             listener.enterBooleanValue(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitBooleanValue) {
             listener.exitBooleanValue(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitBooleanValue) {
            return visitor.visitBooleanValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IntervalContext extends antlr.ParserRuleContext {
    public _sign?: Token | null;
    public _from_?: IntervalFieldContext;
    public _to?: IntervalFieldContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_INTERVAL(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_INTERVAL, 0)!;
    }
    public string(): StringContext {
        return this.getRuleContext(0, StringContext)!;
    }
    public intervalField(): IntervalFieldContext[];
    public intervalField(i: number): IntervalFieldContext | null;
    public intervalField(i?: number): IntervalFieldContext[] | IntervalFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IntervalFieldContext);
        }

        return this.getRuleContext(i, IntervalFieldContext);
    }
    public KW_TO(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TO, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_interval;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterInterval) {
             listener.enterInterval(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitInterval) {
             listener.exitInterval(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitInterval) {
            return visitor.visitInterval(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IntervalFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_YEAR(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_YEAR, 0);
    }
    public KW_MONTH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MONTH, 0);
    }
    public KW_DAY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DAY, 0);
    }
    public KW_HOUR(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_HOUR, 0);
    }
    public KW_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MINUTE, 0);
    }
    public KW_SECOND(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SECOND, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_intervalField;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterIntervalField) {
             listener.enterIntervalField(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitIntervalField) {
             listener.exitIntervalField(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitIntervalField) {
            return visitor.visitIntervalField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NormalFormContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_NFD(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NFD, 0);
    }
    public KW_NFC(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NFC, 0);
    }
    public KW_NFKD(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NFKD, 0);
    }
    public KW_NFKC(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NFKC, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_normalForm;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterNormalForm) {
             listener.enterNormalForm(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitNormalForm) {
             listener.exitNormalForm(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitNormalForm) {
            return visitor.visitNormalForm(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_type;
    }
    public override copyFrom(ctx: TypeContext): void {
        super.copyFrom(ctx);
    }
}
export class RowTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ROW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ROW, 0)!;
    }
    public rowField(): RowFieldContext[];
    public rowField(i: number): RowFieldContext | null;
    public rowField(i?: number): RowFieldContext[] | RowFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RowFieldContext);
        }

        return this.getRuleContext(i, RowFieldContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRowType) {
             listener.enterRowType(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRowType) {
             listener.exitRowType(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRowType) {
            return visitor.visitRowType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntervalTypeContext extends TypeContext {
    public _from_?: IntervalFieldContext;
    public _to?: IntervalFieldContext;
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_INTERVAL(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_INTERVAL, 0)!;
    }
    public intervalField(): IntervalFieldContext[];
    public intervalField(i: number): IntervalFieldContext | null;
    public intervalField(i?: number): IntervalFieldContext[] | IntervalFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IntervalFieldContext);
        }

        return this.getRuleContext(i, IntervalFieldContext);
    }
    public KW_TO(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TO, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterIntervalType) {
             listener.enterIntervalType(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitIntervalType) {
             listener.exitIntervalType(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitIntervalType) {
            return visitor.visitIntervalType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrayTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public KW_ARRAY(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ARRAY, 0)!;
    }
    public INTEGER_VALUE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.INTEGER_VALUE, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterArrayType) {
             listener.enterArrayType(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitArrayType) {
             listener.exitArrayType(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitArrayType) {
            return visitor.visitArrayType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DoublePrecisionTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_DOUBLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_DOUBLE, 0)!;
    }
    public KW_PRECISION(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_PRECISION, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDoublePrecisionType) {
             listener.enterDoublePrecisionType(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDoublePrecisionType) {
             listener.exitDoublePrecisionType(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDoublePrecisionType) {
            return visitor.visitDoublePrecisionType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LegacyArrayTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ARRAY(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ARRAY, 0)!;
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.LT, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.GT, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterLegacyArrayType) {
             listener.enterLegacyArrayType(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitLegacyArrayType) {
             listener.exitLegacyArrayType(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitLegacyArrayType) {
            return visitor.visitLegacyArrayType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class GenericTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public typeParameter(): TypeParameterContext[];
    public typeParameter(i: number): TypeParameterContext | null;
    public typeParameter(i?: number): TypeParameterContext[] | TypeParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterContext);
        }

        return this.getRuleContext(i, TypeParameterContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterGenericType) {
             listener.enterGenericType(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitGenericType) {
             listener.exitGenericType(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitGenericType) {
            return visitor.visitGenericType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DateTimeTypeContext extends TypeContext {
    public _base?: Token | null;
    public _precision?: TypeParameterContext;
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TIMESTAMP, 0);
    }
    public KW_WITHOUT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WITHOUT, 0);
    }
    public KW_TIME(): antlr.TerminalNode[];
    public KW_TIME(i: number): antlr.TerminalNode | null;
    public KW_TIME(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(TrinoSqlParser.KW_TIME);
    	} else {
    		return this.getToken(TrinoSqlParser.KW_TIME, i);
    	}
    }
    public KW_ZONE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ZONE, 0);
    }
    public typeParameter(): TypeParameterContext | null {
        return this.getRuleContext(0, TypeParameterContext);
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WITH, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDateTimeType) {
             listener.enterDateTimeType(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDateTimeType) {
             listener.exitDateTimeType(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDateTimeType) {
            return visitor.visitDateTimeType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LegacyMapTypeContext extends TypeContext {
    public _keyType?: TypeContext;
    public _valueType?: TypeContext;
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_MAP(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_MAP, 0)!;
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.LT, 0)!;
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.GT, 0)!;
    }
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterLegacyMapType) {
             listener.enterLegacyMapType(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitLegacyMapType) {
             listener.exitLegacyMapType(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitLegacyMapType) {
            return visitor.visitLegacyMapType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RowFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_rowField;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRowField) {
             listener.enterRowField(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRowField) {
             listener.exitRowField(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRowField) {
            return visitor.visitRowField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTEGER_VALUE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.INTEGER_VALUE, 0);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_typeParameter;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterTypeParameter) {
             listener.enterTypeParameter(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitTypeParameter) {
             listener.exitTypeParameter(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitTypeParameter) {
            return visitor.visitTypeParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhenClauseContext extends antlr.ParserRuleContext {
    public _condition?: ExpressionContext;
    public _result?: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHEN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_WHEN, 0)!;
    }
    public KW_THEN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_THEN, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_whenClause;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterWhenClause) {
             listener.enterWhenClause(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitWhenClause) {
             listener.exitWhenClause(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitWhenClause) {
            return visitor.visitWhenClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FilterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FILTER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_FILTER, 0)!;
    }
    public KW_WHERE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_WHERE, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_filter;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterFilter) {
             listener.enterFilter(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitFilter) {
             listener.exitFilter(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitFilter) {
            return visitor.visitFilter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MergeCaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_mergeCase;
    }
    public override copyFrom(ctx: MergeCaseContext): void {
        super.copyFrom(ctx);
    }
}
export class MergeInsertContext extends MergeCaseContext {
    public _condition?: ExpressionContext;
    public _identifier?: IdentifierContext;
    public _targets: IdentifierContext[] = [];
    public _expression?: ExpressionContext;
    public _values: ExpressionContext[] = [];
    public constructor(ctx: MergeCaseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_WHEN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_WHEN, 0)!;
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_NOT, 0)!;
    }
    public KW_MATCHED(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_MATCHED, 0)!;
    }
    public KW_THEN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_THEN, 0)!;
    }
    public KW_INSERT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_INSERT, 0)!;
    }
    public KW_VALUES(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_VALUES, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public KW_AND(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_AND, 0);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterMergeInsert) {
             listener.enterMergeInsert(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitMergeInsert) {
             listener.exitMergeInsert(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitMergeInsert) {
            return visitor.visitMergeInsert(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MergeUpdateContext extends MergeCaseContext {
    public _condition?: ExpressionContext;
    public _identifier?: IdentifierContext;
    public _targets: IdentifierContext[] = [];
    public _expression?: ExpressionContext;
    public _values: ExpressionContext[] = [];
    public constructor(ctx: MergeCaseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_WHEN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_WHEN, 0)!;
    }
    public KW_MATCHED(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_MATCHED, 0)!;
    }
    public KW_THEN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_THEN, 0)!;
    }
    public KW_UPDATE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_UPDATE, 0)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SET, 0)!;
    }
    public EQ(): antlr.TerminalNode[];
    public EQ(i: number): antlr.TerminalNode | null;
    public EQ(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(TrinoSqlParser.EQ);
    	} else {
    		return this.getToken(TrinoSqlParser.EQ, i);
    	}
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public KW_AND(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_AND, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterMergeUpdate) {
             listener.enterMergeUpdate(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitMergeUpdate) {
             listener.exitMergeUpdate(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitMergeUpdate) {
            return visitor.visitMergeUpdate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MergeDeleteContext extends MergeCaseContext {
    public _condition?: ExpressionContext;
    public constructor(ctx: MergeCaseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_WHEN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_WHEN, 0)!;
    }
    public KW_MATCHED(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_MATCHED, 0)!;
    }
    public KW_THEN(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_THEN, 0)!;
    }
    public KW_DELETE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_DELETE, 0)!;
    }
    public KW_AND(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_AND, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterMergeDelete) {
             listener.enterMergeDelete(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitMergeDelete) {
             listener.exitMergeDelete(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitMergeDelete) {
            return visitor.visitMergeDelete(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OverContext extends antlr.ParserRuleContext {
    public _windowName?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_OVER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_OVER, 0)!;
    }
    public windowSpecification(): WindowSpecificationContext | null {
        return this.getRuleContext(0, WindowSpecificationContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_over;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterOver) {
             listener.enterOver(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitOver) {
             listener.exitOver(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitOver) {
            return visitor.visitOver(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowFrameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public frameExtent(): FrameExtentContext {
        return this.getRuleContext(0, FrameExtentContext)!;
    }
    public KW_MEASURES(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MEASURES, 0);
    }
    public measureDefinition(): MeasureDefinitionContext[];
    public measureDefinition(i: number): MeasureDefinitionContext | null;
    public measureDefinition(i?: number): MeasureDefinitionContext[] | MeasureDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MeasureDefinitionContext);
        }

        return this.getRuleContext(i, MeasureDefinitionContext);
    }
    public KW_AFTER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_AFTER, 0);
    }
    public KW_MATCH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MATCH, 0);
    }
    public skipTo(): SkipToContext | null {
        return this.getRuleContext(0, SkipToContext);
    }
    public KW_PATTERN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PATTERN, 0);
    }
    public rowPattern(): RowPatternContext | null {
        return this.getRuleContext(0, RowPatternContext);
    }
    public KW_SUBSET(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SUBSET, 0);
    }
    public subsetDefinition(): SubsetDefinitionContext[];
    public subsetDefinition(i: number): SubsetDefinitionContext | null;
    public subsetDefinition(i?: number): SubsetDefinitionContext[] | SubsetDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SubsetDefinitionContext);
        }

        return this.getRuleContext(i, SubsetDefinitionContext);
    }
    public KW_DEFINE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DEFINE, 0);
    }
    public variableDefinition(): VariableDefinitionContext[];
    public variableDefinition(i: number): VariableDefinitionContext | null;
    public variableDefinition(i?: number): VariableDefinitionContext[] | VariableDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableDefinitionContext);
        }

        return this.getRuleContext(i, VariableDefinitionContext);
    }
    public KW_INITIAL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_INITIAL, 0);
    }
    public KW_SEEK(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SEEK, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_windowFrame;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterWindowFrame) {
             listener.enterWindowFrame(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitWindowFrame) {
             listener.exitWindowFrame(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitWindowFrame) {
            return visitor.visitWindowFrame(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FrameExtentContext extends antlr.ParserRuleContext {
    public _frameType?: Token | null;
    public _frameStart?: FrameBoundContext;
    public _end?: FrameBoundContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_RANGE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_RANGE, 0);
    }
    public frameBound(): FrameBoundContext[];
    public frameBound(i: number): FrameBoundContext | null;
    public frameBound(i?: number): FrameBoundContext[] | FrameBoundContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FrameBoundContext);
        }

        return this.getRuleContext(i, FrameBoundContext);
    }
    public KW_ROWS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ROWS, 0);
    }
    public KW_GROUPS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_GROUPS, 0);
    }
    public KW_BETWEEN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_BETWEEN, 0);
    }
    public KW_AND(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_AND, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_frameExtent;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterFrameExtent) {
             listener.enterFrameExtent(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitFrameExtent) {
             listener.exitFrameExtent(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitFrameExtent) {
            return visitor.visitFrameExtent(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FrameBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_frameBound;
    }
    public override copyFrom(ctx: FrameBoundContext): void {
        super.copyFrom(ctx);
    }
}
export class BoundedFrameContext extends FrameBoundContext {
    public _boundType?: Token | null;
    public constructor(ctx: FrameBoundContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public KW_PRECEDING(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PRECEDING, 0);
    }
    public KW_FOLLOWING(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FOLLOWING, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterBoundedFrame) {
             listener.enterBoundedFrame(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitBoundedFrame) {
             listener.exitBoundedFrame(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitBoundedFrame) {
            return visitor.visitBoundedFrame(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnboundedFrameContext extends FrameBoundContext {
    public _boundType?: Token | null;
    public constructor(ctx: FrameBoundContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_UNBOUNDED(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_UNBOUNDED, 0)!;
    }
    public KW_PRECEDING(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PRECEDING, 0);
    }
    public KW_FOLLOWING(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FOLLOWING, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterUnboundedFrame) {
             listener.enterUnboundedFrame(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitUnboundedFrame) {
             listener.exitUnboundedFrame(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitUnboundedFrame) {
            return visitor.visitUnboundedFrame(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CurrentRowBoundContext extends FrameBoundContext {
    public constructor(ctx: FrameBoundContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CURRENT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CURRENT, 0)!;
    }
    public KW_ROW(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ROW, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCurrentRowBound) {
             listener.enterCurrentRowBound(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCurrentRowBound) {
             listener.exitCurrentRowBound(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCurrentRowBound) {
            return visitor.visitCurrentRowBound(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RowPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_rowPattern;
    }
    public override copyFrom(ctx: RowPatternContext): void {
        super.copyFrom(ctx);
    }
}
export class QuantifiedPrimaryContext extends RowPatternContext {
    public constructor(ctx: RowPatternContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public patternPrimary(): PatternPrimaryContext {
        return this.getRuleContext(0, PatternPrimaryContext)!;
    }
    public patternQuantifier(): PatternQuantifierContext | null {
        return this.getRuleContext(0, PatternQuantifierContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterQuantifiedPrimary) {
             listener.enterQuantifiedPrimary(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitQuantifiedPrimary) {
             listener.exitQuantifiedPrimary(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitQuantifiedPrimary) {
            return visitor.visitQuantifiedPrimary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PatternConcatenationContext extends RowPatternContext {
    public constructor(ctx: RowPatternContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public rowPattern(): RowPatternContext[];
    public rowPattern(i: number): RowPatternContext | null;
    public rowPattern(i?: number): RowPatternContext[] | RowPatternContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RowPatternContext);
        }

        return this.getRuleContext(i, RowPatternContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterPatternConcatenation) {
             listener.enterPatternConcatenation(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitPatternConcatenation) {
             listener.exitPatternConcatenation(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitPatternConcatenation) {
            return visitor.visitPatternConcatenation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PatternAlternationContext extends RowPatternContext {
    public constructor(ctx: RowPatternContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public rowPattern(): RowPatternContext[];
    public rowPattern(i: number): RowPatternContext | null;
    public rowPattern(i?: number): RowPatternContext[] | RowPatternContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RowPatternContext);
        }

        return this.getRuleContext(i, RowPatternContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterPatternAlternation) {
             listener.enterPatternAlternation(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitPatternAlternation) {
             listener.exitPatternAlternation(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitPatternAlternation) {
            return visitor.visitPatternAlternation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternPrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_patternPrimary;
    }
    public override copyFrom(ctx: PatternPrimaryContext): void {
        super.copyFrom(ctx);
    }
}
export class PatternPermutationContext extends PatternPrimaryContext {
    public constructor(ctx: PatternPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_PERMUTE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_PERMUTE, 0)!;
    }
    public rowPattern(): RowPatternContext[];
    public rowPattern(i: number): RowPatternContext | null;
    public rowPattern(i?: number): RowPatternContext[] | RowPatternContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RowPatternContext);
        }

        return this.getRuleContext(i, RowPatternContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterPatternPermutation) {
             listener.enterPatternPermutation(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitPatternPermutation) {
             listener.exitPatternPermutation(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitPatternPermutation) {
            return visitor.visitPatternPermutation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PartitionEndAnchorContext extends PatternPrimaryContext {
    public constructor(ctx: PatternPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterPartitionEndAnchor) {
             listener.enterPartitionEndAnchor(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitPartitionEndAnchor) {
             listener.exitPartitionEndAnchor(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitPartitionEndAnchor) {
            return visitor.visitPartitionEndAnchor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PatternVariableContext extends PatternPrimaryContext {
    public constructor(ctx: PatternPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterPatternVariable) {
             listener.enterPatternVariable(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitPatternVariable) {
             listener.exitPatternVariable(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitPatternVariable) {
            return visitor.visitPatternVariable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExcludedPatternContext extends PatternPrimaryContext {
    public constructor(ctx: PatternPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public rowPattern(): RowPatternContext {
        return this.getRuleContext(0, RowPatternContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterExcludedPattern) {
             listener.enterExcludedPattern(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitExcludedPattern) {
             listener.exitExcludedPattern(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitExcludedPattern) {
            return visitor.visitExcludedPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PartitionStartAnchorContext extends PatternPrimaryContext {
    public constructor(ctx: PatternPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterPartitionStartAnchor) {
             listener.enterPartitionStartAnchor(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitPartitionStartAnchor) {
             listener.exitPartitionStartAnchor(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitPartitionStartAnchor) {
            return visitor.visitPartitionStartAnchor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class EmptyPatternContext extends PatternPrimaryContext {
    public constructor(ctx: PatternPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterEmptyPattern) {
             listener.enterEmptyPattern(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitEmptyPattern) {
             listener.exitEmptyPattern(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitEmptyPattern) {
            return visitor.visitEmptyPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupedPatternContext extends PatternPrimaryContext {
    public constructor(ctx: PatternPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public rowPattern(): RowPatternContext {
        return this.getRuleContext(0, RowPatternContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterGroupedPattern) {
             listener.enterGroupedPattern(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitGroupedPattern) {
             listener.exitGroupedPattern(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitGroupedPattern) {
            return visitor.visitGroupedPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternQuantifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_patternQuantifier;
    }
    public override copyFrom(ctx: PatternQuantifierContext): void {
        super.copyFrom(ctx);
    }
}
export class ZeroOrMoreQuantifierContext extends PatternQuantifierContext {
    public _reluctant?: Token | null;
    public constructor(ctx: PatternQuantifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ASTERISK(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.ASTERISK, 0)!;
    }
    public QUESTION_MARK(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.QUESTION_MARK, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterZeroOrMoreQuantifier) {
             listener.enterZeroOrMoreQuantifier(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitZeroOrMoreQuantifier) {
             listener.exitZeroOrMoreQuantifier(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitZeroOrMoreQuantifier) {
            return visitor.visitZeroOrMoreQuantifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OneOrMoreQuantifierContext extends PatternQuantifierContext {
    public _reluctant?: Token | null;
    public constructor(ctx: PatternQuantifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public PLUS(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.PLUS, 0)!;
    }
    public QUESTION_MARK(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.QUESTION_MARK, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterOneOrMoreQuantifier) {
             listener.enterOneOrMoreQuantifier(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitOneOrMoreQuantifier) {
             listener.exitOneOrMoreQuantifier(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitOneOrMoreQuantifier) {
            return visitor.visitOneOrMoreQuantifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ZeroOrOneQuantifierContext extends PatternQuantifierContext {
    public _reluctant?: Token | null;
    public constructor(ctx: PatternQuantifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public QUESTION_MARK(): antlr.TerminalNode[];
    public QUESTION_MARK(i: number): antlr.TerminalNode | null;
    public QUESTION_MARK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(TrinoSqlParser.QUESTION_MARK);
    	} else {
    		return this.getToken(TrinoSqlParser.QUESTION_MARK, i);
    	}
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterZeroOrOneQuantifier) {
             listener.enterZeroOrOneQuantifier(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitZeroOrOneQuantifier) {
             listener.exitZeroOrOneQuantifier(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitZeroOrOneQuantifier) {
            return visitor.visitZeroOrOneQuantifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RangeQuantifierContext extends PatternQuantifierContext {
    public _exactly?: Token | null;
    public _reluctant?: Token | null;
    public _atLeast?: Token | null;
    public _atMost?: Token | null;
    public constructor(ctx: PatternQuantifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INTEGER_VALUE(): antlr.TerminalNode[];
    public INTEGER_VALUE(i: number): antlr.TerminalNode | null;
    public INTEGER_VALUE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(TrinoSqlParser.INTEGER_VALUE);
    	} else {
    		return this.getToken(TrinoSqlParser.INTEGER_VALUE, i);
    	}
    }
    public QUESTION_MARK(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.QUESTION_MARK, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRangeQuantifier) {
             listener.enterRangeQuantifier(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRangeQuantifier) {
             listener.exitRangeQuantifier(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRangeQuantifier) {
            return visitor.visitRangeQuantifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UpdateAssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.EQ, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_updateAssignment;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterUpdateAssignment) {
             listener.enterUpdateAssignment(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitUpdateAssignment) {
             listener.exitUpdateAssignment(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitUpdateAssignment) {
            return visitor.visitUpdateAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExplainOptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_explainOption;
    }
    public override copyFrom(ctx: ExplainOptionContext): void {
        super.copyFrom(ctx);
    }
}
export class ExplainFormatContext extends ExplainOptionContext {
    public _value?: Token | null;
    public constructor(ctx: ExplainOptionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_FORMAT(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_FORMAT, 0)!;
    }
    public KW_TEXT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TEXT, 0);
    }
    public KW_GRAPHVIZ(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_GRAPHVIZ, 0);
    }
    public KW_JSON(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_JSON, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterExplainFormat) {
             listener.enterExplainFormat(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitExplainFormat) {
             listener.exitExplainFormat(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitExplainFormat) {
            return visitor.visitExplainFormat(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExplainTypeContext extends ExplainOptionContext {
    public _value?: Token | null;
    public constructor(ctx: ExplainOptionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_TYPE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_TYPE, 0)!;
    }
    public KW_LOGICAL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LOGICAL, 0);
    }
    public KW_DISTRIBUTED(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DISTRIBUTED, 0);
    }
    public KW_VALIDATE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_VALIDATE, 0);
    }
    public KW_IO(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IO, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterExplainType) {
             listener.enterExplainType(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitExplainType) {
             listener.exitExplainType(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitExplainType) {
            return visitor.visitExplainType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TransactionModeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_transactionMode;
    }
    public override copyFrom(ctx: TransactionModeContext): void {
        super.copyFrom(ctx);
    }
}
export class TransactionAccessModeContext extends TransactionModeContext {
    public _accessMode?: Token | null;
    public constructor(ctx: TransactionModeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_READ(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_READ, 0)!;
    }
    public KW_ONLY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ONLY, 0);
    }
    public KW_WRITE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WRITE, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterTransactionAccessMode) {
             listener.enterTransactionAccessMode(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitTransactionAccessMode) {
             listener.exitTransactionAccessMode(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitTransactionAccessMode) {
            return visitor.visitTransactionAccessMode(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IsolationLevelContext extends TransactionModeContext {
    public constructor(ctx: TransactionModeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ISOLATION(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ISOLATION, 0)!;
    }
    public KW_LEVEL(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_LEVEL, 0)!;
    }
    public levelOfIsolation(): LevelOfIsolationContext {
        return this.getRuleContext(0, LevelOfIsolationContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterIsolationLevel) {
             listener.enterIsolationLevel(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitIsolationLevel) {
             listener.exitIsolationLevel(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitIsolationLevel) {
            return visitor.visitIsolationLevel(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LevelOfIsolationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_levelOfIsolation;
    }
    public override copyFrom(ctx: LevelOfIsolationContext): void {
        super.copyFrom(ctx);
    }
}
export class ReadUncommittedContext extends LevelOfIsolationContext {
    public constructor(ctx: LevelOfIsolationContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_READ(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_READ, 0)!;
    }
    public KW_UNCOMMITTED(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_UNCOMMITTED, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterReadUncommitted) {
             listener.enterReadUncommitted(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitReadUncommitted) {
             listener.exitReadUncommitted(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitReadUncommitted) {
            return visitor.visitReadUncommitted(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SerializableContext extends LevelOfIsolationContext {
    public constructor(ctx: LevelOfIsolationContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SERIALIZABLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_SERIALIZABLE, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSerializable) {
             listener.enterSerializable(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSerializable) {
             listener.exitSerializable(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSerializable) {
            return visitor.visitSerializable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ReadCommittedContext extends LevelOfIsolationContext {
    public constructor(ctx: LevelOfIsolationContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_READ(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_READ, 0)!;
    }
    public KW_COMMITTED(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_COMMITTED, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterReadCommitted) {
             listener.enterReadCommitted(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitReadCommitted) {
             listener.exitReadCommitted(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitReadCommitted) {
            return visitor.visitReadCommitted(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RepeatableReadContext extends LevelOfIsolationContext {
    public constructor(ctx: LevelOfIsolationContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_REPEATABLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_REPEATABLE, 0)!;
    }
    public KW_READ(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_READ, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRepeatableRead) {
             listener.enterRepeatableRead(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRepeatableRead) {
             listener.exitRepeatableRead(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRepeatableRead) {
            return visitor.visitRepeatableRead(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CallArgumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_callArgument;
    }
    public override copyFrom(ctx: CallArgumentContext): void {
        super.copyFrom(ctx);
    }
}
export class PositionalArgumentContext extends CallArgumentContext {
    public constructor(ctx: CallArgumentContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterPositionalArgument) {
             listener.enterPositionalArgument(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitPositionalArgument) {
             listener.exitPositionalArgument(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitPositionalArgument) {
            return visitor.visitPositionalArgument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NamedArgumentContext extends CallArgumentContext {
    public constructor(ctx: CallArgumentContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterNamedArgument) {
             listener.enterNamedArgument(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitNamedArgument) {
             listener.exitNamedArgument(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitNamedArgument) {
            return visitor.visitNamedArgument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_pathElement;
    }
    public override copyFrom(ctx: PathElementContext): void {
        super.copyFrom(ctx);
    }
}
export class QualifiedArgumentContext extends PathElementContext {
    public constructor(ctx: PathElementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterQualifiedArgument) {
             listener.enterQualifiedArgument(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitQualifiedArgument) {
             listener.exitQualifiedArgument(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitQualifiedArgument) {
            return visitor.visitQualifiedArgument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnqualifiedArgumentContext extends PathElementContext {
    public constructor(ctx: PathElementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterUnqualifiedArgument) {
             listener.enterUnqualifiedArgument(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitUnqualifiedArgument) {
             listener.exitUnqualifiedArgument(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitUnqualifiedArgument) {
            return visitor.visitUnqualifiedArgument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathSpecificationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathElement(): PathElementContext[];
    public pathElement(i: number): PathElementContext | null;
    public pathElement(i?: number): PathElementContext[] | PathElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PathElementContext);
        }

        return this.getRuleContext(i, PathElementContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_pathSpecification;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterPathSpecification) {
             listener.enterPathSpecification(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitPathSpecification) {
             listener.exitPathSpecification(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitPathSpecification) {
            return visitor.visitPathSpecification(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrivilegeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SELECT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SELECT, 0);
    }
    public KW_DELETE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DELETE, 0);
    }
    public KW_INSERT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_INSERT, 0);
    }
    public KW_UPDATE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_UPDATE, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_privilege;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterPrivilege) {
             listener.enterPrivilege(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitPrivilege) {
             listener.exitPrivilege(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitPrivilege) {
            return visitor.visitPrivilege(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableOrViewNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tableName(): TableNameContext | null {
        return this.getRuleContext(0, TableNameContext);
    }
    public viewName(): ViewNameContext | null {
        return this.getRuleContext(0, ViewNameContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_tableOrViewName;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterTableOrViewName) {
             listener.enterTableOrViewName(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitTableOrViewName) {
             listener.exitTableOrViewName(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitTableOrViewName) {
            return visitor.visitTableOrViewName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_tableName;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterTableName) {
             listener.enterTableName(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitTableName) {
             listener.exitTableName(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitTableName) {
            return visitor.visitTableName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableNameCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_tableNameCreate;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterTableNameCreate) {
             listener.enterTableNameCreate(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitTableNameCreate) {
             listener.exitTableNameCreate(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitTableNameCreate) {
            return visitor.visitTableNameCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ViewNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public viewPath(): ViewPathContext {
        return this.getRuleContext(0, ViewPathContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_viewName;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterViewName) {
             listener.enterViewName(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitViewName) {
             listener.exitViewName(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitViewName) {
            return visitor.visitViewName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ViewNameCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public viewPath(): ViewPathContext {
        return this.getRuleContext(0, ViewPathContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_viewNameCreate;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterViewNameCreate) {
             listener.enterViewNameCreate(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitViewNameCreate) {
             listener.exitViewNameCreate(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitViewNameCreate) {
            return visitor.visitViewNameCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TablePathContext extends antlr.ParserRuleContext {
    public _table?: IdentifierContext;
    public _schema?: IdentifierContext;
    public _catalog?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_tablePath;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterTablePath) {
             listener.enterTablePath(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitTablePath) {
             listener.exitTablePath(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitTablePath) {
            return visitor.visitTablePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ViewPathContext extends antlr.ParserRuleContext {
    public _view?: IdentifierContext;
    public _schema?: IdentifierContext;
    public _catalog?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_viewPath;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterViewPath) {
             listener.enterViewPath(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitViewPath) {
             listener.exitViewPath(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitViewPath) {
            return visitor.visitViewPath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SchemaNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public schemaPath(): SchemaPathContext {
        return this.getRuleContext(0, SchemaPathContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_schemaName;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSchemaName) {
             listener.enterSchemaName(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSchemaName) {
             listener.exitSchemaName(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSchemaName) {
            return visitor.visitSchemaName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SchemaNameCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public schemaPath(): SchemaPathContext {
        return this.getRuleContext(0, SchemaPathContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_schemaNameCreate;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSchemaNameCreate) {
             listener.enterSchemaNameCreate(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSchemaNameCreate) {
             listener.exitSchemaNameCreate(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSchemaNameCreate) {
            return visitor.visitSchemaNameCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SchemaPathContext extends antlr.ParserRuleContext {
    public _schema?: IdentifierContext;
    public _catalog?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_schemaPath;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSchemaPath) {
             listener.enterSchemaPath(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSchemaPath) {
             listener.exitSchemaPath(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSchemaPath) {
            return visitor.visitSchemaPath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CatalogNameContext extends antlr.ParserRuleContext {
    public _catalog?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_catalogName;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCatalogName) {
             listener.enterCatalogName(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCatalogName) {
             listener.exitCatalogName(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCatalogName) {
            return visitor.visitCatalogName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CatalogNameCreateContext extends antlr.ParserRuleContext {
    public _catalog?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_catalogNameCreate;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCatalogNameCreate) {
             listener.enterCatalogNameCreate(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCatalogNameCreate) {
             listener.exitCatalogNameCreate(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCatalogNameCreate) {
            return visitor.visitCatalogNameCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_functionName;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterFunctionName) {
             listener.enterFunctionName(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitFunctionName) {
             listener.exitFunctionName(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitFunctionName) {
            return visitor.visitFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_columnName;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterColumnName) {
             listener.enterColumnName(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitColumnName) {
             listener.exitColumnName(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitColumnName) {
            return visitor.visitColumnName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnNameCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_columnNameCreate;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterColumnNameCreate) {
             listener.enterColumnNameCreate(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitColumnNameCreate) {
             listener.exitColumnNameCreate(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitColumnNameCreate) {
            return visitor.visitColumnNameCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_qualifiedName;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterQualifiedName) {
             listener.enterQualifiedName(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitQualifiedName) {
             listener.exitQualifiedName(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GrantorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_grantor;
    }
    public override copyFrom(ctx: GrantorContext): void {
        super.copyFrom(ctx);
    }
}
export class CurrentUserGrantorContext extends GrantorContext {
    public constructor(ctx: GrantorContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CURRENT_USER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CURRENT_USER, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCurrentUserGrantor) {
             listener.enterCurrentUserGrantor(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCurrentUserGrantor) {
             listener.exitCurrentUserGrantor(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCurrentUserGrantor) {
            return visitor.visitCurrentUserGrantor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SpecifiedPrincipalContext extends GrantorContext {
    public constructor(ctx: GrantorContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public principal(): PrincipalContext {
        return this.getRuleContext(0, PrincipalContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterSpecifiedPrincipal) {
             listener.enterSpecifiedPrincipal(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitSpecifiedPrincipal) {
             listener.exitSpecifiedPrincipal(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitSpecifiedPrincipal) {
            return visitor.visitSpecifiedPrincipal(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CurrentRoleGrantorContext extends GrantorContext {
    public constructor(ctx: GrantorContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CURRENT_ROLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_CURRENT_ROLE, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterCurrentRoleGrantor) {
             listener.enterCurrentRoleGrantor(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitCurrentRoleGrantor) {
             listener.exitCurrentRoleGrantor(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitCurrentRoleGrantor) {
            return visitor.visitCurrentRoleGrantor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrincipalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_principal;
    }
    public override copyFrom(ctx: PrincipalContext): void {
        super.copyFrom(ctx);
    }
}
export class UnspecifiedPrincipalContext extends PrincipalContext {
    public constructor(ctx: PrincipalContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterUnspecifiedPrincipal) {
             listener.enterUnspecifiedPrincipal(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitUnspecifiedPrincipal) {
             listener.exitUnspecifiedPrincipal(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitUnspecifiedPrincipal) {
            return visitor.visitUnspecifiedPrincipal(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UserPrincipalContext extends PrincipalContext {
    public constructor(ctx: PrincipalContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_USER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_USER, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterUserPrincipal) {
             listener.enterUserPrincipal(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitUserPrincipal) {
             listener.exitUserPrincipal(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitUserPrincipal) {
            return visitor.visitUserPrincipal(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RolePrincipalContext extends PrincipalContext {
    public constructor(ctx: PrincipalContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ROLE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.KW_ROLE, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRolePrincipal) {
             listener.enterRolePrincipal(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRolePrincipal) {
             listener.exitRolePrincipal(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRolePrincipal) {
            return visitor.visitRolePrincipal(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RolesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_roles;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterRoles) {
             listener.enterRoles(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitRoles) {
             listener.exitRoles(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitRoles) {
            return visitor.visitRoles(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_identifier;
    }
    public override copyFrom(ctx: IdentifierContext): void {
        super.copyFrom(ctx);
    }
}
export class BackQuotedIdentifierContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public BACKQUOTED_IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.BACKQUOTED_IDENTIFIER, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterBackQuotedIdentifier) {
             listener.enterBackQuotedIdentifier(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitBackQuotedIdentifier) {
             listener.exitBackQuotedIdentifier(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitBackQuotedIdentifier) {
            return visitor.visitBackQuotedIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class QuotedIdentifierContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public QUOTED_IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.QUOTED_IDENTIFIER, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterQuotedIdentifier) {
             listener.enterQuotedIdentifier(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitQuotedIdentifier) {
             listener.exitQuotedIdentifier(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitQuotedIdentifier) {
            return visitor.visitQuotedIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DigitIdentifierContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DIGIT_IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.DIGIT_IDENTIFIER, 0)!;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDigitIdentifier) {
             listener.enterDigitIdentifier(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDigitIdentifier) {
             listener.exitDigitIdentifier(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDigitIdentifier) {
            return visitor.visitDigitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnquotedIdentifierContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.IDENTIFIER, 0);
    }
    public nonReserved(): NonReservedContext | null {
        return this.getRuleContext(0, NonReservedContext);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterUnquotedIdentifier) {
             listener.enterUnquotedIdentifier(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitUnquotedIdentifier) {
             listener.exitUnquotedIdentifier(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitUnquotedIdentifier) {
            return visitor.visitUnquotedIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NumberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_number;
    }
    public override copyFrom(ctx: NumberContext): void {
        super.copyFrom(ctx);
    }
}
export class DecimalLiteralContext extends NumberContext {
    public constructor(ctx: NumberContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DECIMAL_VALUE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.DECIMAL_VALUE, 0)!;
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.MINUS, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDecimalLiteral) {
             listener.enterDecimalLiteral(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDecimalLiteral) {
             listener.exitDecimalLiteral(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDecimalLiteral) {
            return visitor.visitDecimalLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DoubleLiteralContext extends NumberContext {
    public constructor(ctx: NumberContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DOUBLE_VALUE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.DOUBLE_VALUE, 0)!;
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.MINUS, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterDoubleLiteral) {
             listener.enterDoubleLiteral(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitDoubleLiteral) {
             listener.exitDoubleLiteral(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitDoubleLiteral) {
            return visitor.visitDoubleLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntegerLiteralContext extends NumberContext {
    public constructor(ctx: NumberContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INTEGER_VALUE(): antlr.TerminalNode {
        return this.getToken(TrinoSqlParser.INTEGER_VALUE, 0)!;
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.MINUS, 0);
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterIntegerLiteral) {
             listener.enterIntegerLiteral(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitIntegerLiteral) {
             listener.exitIntegerLiteral(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitIntegerLiteral) {
            return visitor.visitIntegerLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NonReservedContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ADD(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ADD, 0);
    }
    public KW_ADMIN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ADMIN, 0);
    }
    public KW_AFTER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_AFTER, 0);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ALL, 0);
    }
    public KW_ANALYZE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ANALYZE, 0);
    }
    public KW_ANY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ANY, 0);
    }
    public KW_ARRAY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ARRAY, 0);
    }
    public KW_ASC(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ASC, 0);
    }
    public KW_AT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_AT, 0);
    }
    public KW_AUTHORIZATION(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_AUTHORIZATION, 0);
    }
    public KW_BERNOULLI(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_BERNOULLI, 0);
    }
    public KW_CALL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_CALL, 0);
    }
    public KW_CASCADE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_CASCADE, 0);
    }
    public KW_CATALOGS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_CATALOGS, 0);
    }
    public KW_COLUMN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_COLUMN, 0);
    }
    public KW_COLUMNS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_COLUMNS, 0);
    }
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_COMMENT, 0);
    }
    public KW_COMMIT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_COMMIT, 0);
    }
    public KW_COMMITTED(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_COMMITTED, 0);
    }
    public KW_CURRENT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_CURRENT, 0);
    }
    public KW_DATA(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DATA, 0);
    }
    public KW_DATE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DATE, 0);
    }
    public KW_DAY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DAY, 0);
    }
    public KW_DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DEFAULT, 0);
    }
    public KW_DEFINE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DEFINE, 0);
    }
    public KW_DEFINER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DEFINER, 0);
    }
    public KW_DESC(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DESC, 0);
    }
    public KW_DISTRIBUTED(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DISTRIBUTED, 0);
    }
    public KW_DOUBLE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DOUBLE, 0);
    }
    public KW_EMPTY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_EMPTY, 0);
    }
    public KW_EXCLUDING(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_EXCLUDING, 0);
    }
    public KW_EXPLAIN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_EXPLAIN, 0);
    }
    public KW_FETCH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FETCH, 0);
    }
    public KW_FILTER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FILTER, 0);
    }
    public KW_FINAL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FINAL, 0);
    }
    public KW_FIRST(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FIRST, 0);
    }
    public KW_FOLLOWING(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FOLLOWING, 0);
    }
    public KW_FORMAT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FORMAT, 0);
    }
    public KW_FUNCTIONS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_FUNCTIONS, 0);
    }
    public KW_GRANT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_GRANT, 0);
    }
    public KW_GRANTED(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_GRANTED, 0);
    }
    public KW_GRANTS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_GRANTS, 0);
    }
    public KW_DENY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_DENY, 0);
    }
    public KW_GRAPHVIZ(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_GRAPHVIZ, 0);
    }
    public KW_GROUPS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_GROUPS, 0);
    }
    public KW_HOUR(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_HOUR, 0);
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IF, 0);
    }
    public KW_IGNORE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IGNORE, 0);
    }
    public KW_INCLUDING(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_INCLUDING, 0);
    }
    public KW_INITIAL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_INITIAL, 0);
    }
    public KW_INPUT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_INPUT, 0);
    }
    public KW_INTERVAL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_INTERVAL, 0);
    }
    public KW_INVOKER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_INVOKER, 0);
    }
    public KW_IO(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_IO, 0);
    }
    public KW_ISOLATION(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ISOLATION, 0);
    }
    public KW_JSON(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_JSON, 0);
    }
    public KW_LAST(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LAST, 0);
    }
    public KW_LATERAL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LATERAL, 0);
    }
    public KW_LEVEL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LEVEL, 0);
    }
    public KW_LIMIT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LIMIT, 0);
    }
    public KW_LOCAL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LOCAL, 0);
    }
    public KW_LOGICAL(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_LOGICAL, 0);
    }
    public KW_MAP(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MAP, 0);
    }
    public KW_MATCH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MATCH, 0);
    }
    public KW_MATCHED(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MATCHED, 0);
    }
    public KW_MATCHES(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MATCHES, 0);
    }
    public KW_MATCH_RECOGNIZE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MATCH_RECOGNIZE, 0);
    }
    public KW_MATERIALIZED(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MATERIALIZED, 0);
    }
    public KW_MEASURES(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MEASURES, 0);
    }
    public KW_MERGE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MERGE, 0);
    }
    public KW_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MINUTE, 0);
    }
    public KW_MONTH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_MONTH, 0);
    }
    public KW_NEXT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NEXT, 0);
    }
    public KW_NFC(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NFC, 0);
    }
    public KW_NFD(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NFD, 0);
    }
    public KW_NFKC(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NFKC, 0);
    }
    public KW_NFKD(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NFKD, 0);
    }
    public KW_NO(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NO, 0);
    }
    public KW_NONE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NONE, 0);
    }
    public KW_NULLIF(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NULLIF, 0);
    }
    public KW_NULLS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_NULLS, 0);
    }
    public KW_OFFSET(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_OFFSET, 0);
    }
    public KW_OMIT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_OMIT, 0);
    }
    public KW_ONE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ONE, 0);
    }
    public KW_ONLY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ONLY, 0);
    }
    public KW_OPTION(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_OPTION, 0);
    }
    public KW_ORDINALITY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ORDINALITY, 0);
    }
    public KW_OUTPUT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_OUTPUT, 0);
    }
    public KW_OVER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_OVER, 0);
    }
    public KW_PARTITION(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PARTITION, 0);
    }
    public KW_PARTITIONS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PARTITIONS, 0);
    }
    public KW_PAST(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PAST, 0);
    }
    public KW_PATH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PATH, 0);
    }
    public KW_PATTERN(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PATTERN, 0);
    }
    public KW_PER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PER, 0);
    }
    public KW_PERMUTE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PERMUTE, 0);
    }
    public KW_POSITION(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_POSITION, 0);
    }
    public KW_PRECEDING(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PRECEDING, 0);
    }
    public KW_PRECISION(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PRECISION, 0);
    }
    public KW_PRIVILEGES(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PRIVILEGES, 0);
    }
    public KW_PROPERTIES(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_PROPERTIES, 0);
    }
    public KW_RANGE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_RANGE, 0);
    }
    public KW_READ(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_READ, 0);
    }
    public KW_REFRESH(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_REFRESH, 0);
    }
    public KW_RENAME(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_RENAME, 0);
    }
    public KW_REPEATABLE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_REPEATABLE, 0);
    }
    public KW_REPLACE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_REPLACE, 0);
    }
    public KW_RESET(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_RESET, 0);
    }
    public KW_RESPECT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_RESPECT, 0);
    }
    public KW_RESTRICT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_RESTRICT, 0);
    }
    public KW_REVOKE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_REVOKE, 0);
    }
    public KW_ROLE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ROLE, 0);
    }
    public KW_ROLES(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ROLES, 0);
    }
    public KW_ROLLBACK(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ROLLBACK, 0);
    }
    public KW_ROW(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ROW, 0);
    }
    public KW_ROWS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ROWS, 0);
    }
    public KW_RUNNING(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_RUNNING, 0);
    }
    public KW_SCHEMA(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SCHEMA, 0);
    }
    public KW_SCHEMAS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SCHEMAS, 0);
    }
    public KW_SECOND(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SECOND, 0);
    }
    public KW_SECURITY(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SECURITY, 0);
    }
    public KW_SEEK(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SEEK, 0);
    }
    public KW_SERIALIZABLE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SERIALIZABLE, 0);
    }
    public KW_SESSION(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SESSION, 0);
    }
    public KW_SET(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SET, 0);
    }
    public KW_SETS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SETS, 0);
    }
    public KW_SHOW(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SHOW, 0);
    }
    public KW_SOME(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SOME, 0);
    }
    public KW_START(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_START, 0);
    }
    public KW_STATS(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_STATS, 0);
    }
    public KW_SUBSET(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SUBSET, 0);
    }
    public KW_SUBSTRING(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SUBSTRING, 0);
    }
    public KW_SYSTEM(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_SYSTEM, 0);
    }
    public KW_TABLES(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TABLES, 0);
    }
    public KW_TABLESAMPLE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TABLESAMPLE, 0);
    }
    public KW_TEXT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TEXT, 0);
    }
    public KW_TIES(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TIES, 0);
    }
    public KW_TIME(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TIME, 0);
    }
    public KW_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TIMESTAMP, 0);
    }
    public KW_TO(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TO, 0);
    }
    public KW_TRANSACTION(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TRANSACTION, 0);
    }
    public KW_TRUNCATE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TRUNCATE, 0);
    }
    public KW_TRY_CAST(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TRY_CAST, 0);
    }
    public KW_TYPE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_TYPE, 0);
    }
    public KW_UNBOUNDED(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_UNBOUNDED, 0);
    }
    public KW_UNCOMMITTED(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_UNCOMMITTED, 0);
    }
    public KW_UNMATCHED(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_UNMATCHED, 0);
    }
    public KW_UPDATE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_UPDATE, 0);
    }
    public KW_USE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_USE, 0);
    }
    public KW_USER(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_USER, 0);
    }
    public KW_VALIDATE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_VALIDATE, 0);
    }
    public KW_VERBOSE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_VERBOSE, 0);
    }
    public KW_VIEW(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_VIEW, 0);
    }
    public KW_WINDOW(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WINDOW, 0);
    }
    public KW_WITHOUT(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WITHOUT, 0);
    }
    public KW_WORK(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WORK, 0);
    }
    public KW_WRITE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_WRITE, 0);
    }
    public KW_YEAR(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_YEAR, 0);
    }
    public KW_ZONE(): antlr.TerminalNode | null {
        return this.getToken(TrinoSqlParser.KW_ZONE, 0);
    }
    public override get ruleIndex(): number {
        return TrinoSqlParser.RULE_nonReserved;
    }
    public override enterRule(listener: TrinoSqlListener): void {
        if(listener.enterNonReserved) {
             listener.enterNonReserved(this);
        }
    }
    public override exitRule(listener: TrinoSqlListener): void {
        if(listener.exitNonReserved) {
             listener.exitNonReserved(this);
        }
    }
    public override accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null {
        if (visitor.visitNonReserved) {
            return visitor.visitNonReserved(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
