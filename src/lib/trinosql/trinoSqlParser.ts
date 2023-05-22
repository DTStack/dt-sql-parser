// Generated from /Users/zhenglin/Documents/parser/dt-sql-parser/src/grammar/trinosql/trinoSqlParser.g4 by ANTLR 4.12.0
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
import trinoSqlParserListener from "./trinoSqlParserListener.js";
import trinoSqlParserVisitor from "./trinoSqlParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class trinoSqlParser extends Parser {
	public static readonly ABSENT_ = 1;
	public static readonly ADD_ = 2;
	public static readonly ADMIN_ = 3;
	public static readonly AFTER_ = 4;
	public static readonly ALL_ = 5;
	public static readonly ALTER_ = 6;
	public static readonly ANALYZE_ = 7;
	public static readonly AND_ = 8;
	public static readonly ANY_ = 9;
	public static readonly ARRAY_ = 10;
	public static readonly AS_ = 11;
	public static readonly ASC_ = 12;
	public static readonly AT_ = 13;
	public static readonly AUTHORIZATION_ = 14;
	public static readonly BERNOULLI_ = 15;
	public static readonly BETWEEN_ = 16;
	public static readonly BOTH_ = 17;
	public static readonly BY_ = 18;
	public static readonly CALL_ = 19;
	public static readonly CASCADE_ = 20;
	public static readonly CASE_ = 21;
	public static readonly CAST_ = 22;
	public static readonly CATALOGS_ = 23;
	public static readonly COLUMN_ = 24;
	public static readonly COLUMNS_ = 25;
	public static readonly COMMENT_ = 26;
	public static readonly COMMIT_ = 27;
	public static readonly COMMITTED_ = 28;
	public static readonly CONDITIONAL_ = 29;
	public static readonly CONSTRAINT_ = 30;
	public static readonly COUNT_ = 31;
	public static readonly COPARTITION_ = 32;
	public static readonly CREATE_ = 33;
	public static readonly CROSS_ = 34;
	public static readonly CUBE_ = 35;
	public static readonly CURRENT_ = 36;
	public static readonly CURRENT_CATALOG_ = 37;
	public static readonly CURRENT_DATE_ = 38;
	public static readonly CURRENT_PATH_ = 39;
	public static readonly CURRENT_ROLE_ = 40;
	public static readonly CURRENT_SCHEMA_ = 41;
	public static readonly CURRENT_TIME_ = 42;
	public static readonly CURRENT_TIMESTAMP_ = 43;
	public static readonly CURRENT_USER_ = 44;
	public static readonly DATA_ = 45;
	public static readonly DATE_ = 46;
	public static readonly DAY_ = 47;
	public static readonly DEALLOCATE_ = 48;
	public static readonly DEFAULT_ = 49;
	public static readonly DEFINER_ = 50;
	public static readonly DELETE_ = 51;
	public static readonly DENY_ = 52;
	public static readonly DESC_ = 53;
	public static readonly DESCRIBE_ = 54;
	public static readonly DESCRIPTOR_ = 55;
	public static readonly DEFINE_ = 56;
	public static readonly DISTINCT_ = 57;
	public static readonly DISTRIBUTED_ = 58;
	public static readonly DOUBLE_ = 59;
	public static readonly DROP_ = 60;
	public static readonly ELSE_ = 61;
	public static readonly EMPTY_ = 62;
	public static readonly ENCODING_ = 63;
	public static readonly END_ = 64;
	public static readonly ERROR_ = 65;
	public static readonly ESCAPE_ = 66;
	public static readonly EXCEPT_ = 67;
	public static readonly EXCLUDING_ = 68;
	public static readonly EXECUTE_ = 69;
	public static readonly EXISTS_ = 70;
	public static readonly EXPLAIN_ = 71;
	public static readonly EXTRACT_ = 72;
	public static readonly FALSE_ = 73;
	public static readonly FETCH_ = 74;
	public static readonly FILTER_ = 75;
	public static readonly FINAL_ = 76;
	public static readonly FIRST_ = 77;
	public static readonly FOLLOWING_ = 78;
	public static readonly FOR_ = 79;
	public static readonly FORMAT_ = 80;
	public static readonly FROM_ = 81;
	public static readonly FULL_ = 82;
	public static readonly FUNCTIONS_ = 83;
	public static readonly GRACE_ = 84;
	public static readonly GRANT_ = 85;
	public static readonly GRANTED_ = 86;
	public static readonly GRANTS_ = 87;
	public static readonly GRAPHVIZ_ = 88;
	public static readonly GROUP_ = 89;
	public static readonly GROUPING_ = 90;
	public static readonly GROUPS_ = 91;
	public static readonly HAVING_ = 92;
	public static readonly HOUR_ = 93;
	public static readonly IF_ = 94;
	public static readonly IGNORE_ = 95;
	public static readonly IN_ = 96;
	public static readonly INCLUDING_ = 97;
	public static readonly INITIAL_ = 98;
	public static readonly INNER_ = 99;
	public static readonly INPUT_ = 100;
	public static readonly INSERT_ = 101;
	public static readonly INTERSECT_ = 102;
	public static readonly INTERVAL_ = 103;
	public static readonly INTO_ = 104;
	public static readonly INVOKER_ = 105;
	public static readonly IO_ = 106;
	public static readonly IS_ = 107;
	public static readonly ISOLATION_ = 108;
	public static readonly JOIN_ = 109;
	public static readonly JSON_ = 110;
	public static readonly JSON_ARRAY_ = 111;
	public static readonly JSON_EXISTS_ = 112;
	public static readonly JSON_OBJECT_ = 113;
	public static readonly JSON_QUERY_ = 114;
	public static readonly JSON_VALUE_ = 115;
	public static readonly KEEP_ = 116;
	public static readonly KEY_ = 117;
	public static readonly KEYS_ = 118;
	public static readonly LAST_ = 119;
	public static readonly LATERAL_ = 120;
	public static readonly LEADING_ = 121;
	public static readonly LEFT_ = 122;
	public static readonly LEVEL_ = 123;
	public static readonly LIKE_ = 124;
	public static readonly LIMIT_ = 125;
	public static readonly LISTAGG_ = 126;
	public static readonly LOCAL_ = 127;
	public static readonly LOCALTIME_ = 128;
	public static readonly LOCALTIMESTAMP_ = 129;
	public static readonly LOGICAL_ = 130;
	public static readonly MAP_ = 131;
	public static readonly MATCH_ = 132;
	public static readonly MATCHED_ = 133;
	public static readonly MATCHES_ = 134;
	public static readonly MATCH_RECOGNIZE_ = 135;
	public static readonly MATERIALIZED_ = 136;
	public static readonly MEASURES_ = 137;
	public static readonly MERGE_ = 138;
	public static readonly MINUTE_ = 139;
	public static readonly MONTH_ = 140;
	public static readonly NATURAL_ = 141;
	public static readonly NEXT_ = 142;
	public static readonly NFC_ = 143;
	public static readonly NFD_ = 144;
	public static readonly NFKC_ = 145;
	public static readonly NFKD_ = 146;
	public static readonly NO_ = 147;
	public static readonly NONE_ = 148;
	public static readonly NORMALIZE_ = 149;
	public static readonly NOT_ = 150;
	public static readonly NULL_ = 151;
	public static readonly NULLIF_ = 152;
	public static readonly NULLS_ = 153;
	public static readonly OBJECT_ = 154;
	public static readonly OFFSET_ = 155;
	public static readonly OMIT_ = 156;
	public static readonly OF_ = 157;
	public static readonly ON_ = 158;
	public static readonly ONE_ = 159;
	public static readonly ONLY_ = 160;
	public static readonly OPTION_ = 161;
	public static readonly OR_ = 162;
	public static readonly ORDER_ = 163;
	public static readonly ORDINALITY_ = 164;
	public static readonly OUTER_ = 165;
	public static readonly OUTPUT_ = 166;
	public static readonly OVER_ = 167;
	public static readonly OVERFLOW_ = 168;
	public static readonly PARTITION_ = 169;
	public static readonly PARTITIONS_ = 170;
	public static readonly PASSING_ = 171;
	public static readonly PAST_ = 172;
	public static readonly PATH_ = 173;
	public static readonly PATTERN_ = 174;
	public static readonly PER_ = 175;
	public static readonly PERIOD_ = 176;
	public static readonly PERMUTE_ = 177;
	public static readonly POSITION_ = 178;
	public static readonly PRECEDING_ = 179;
	public static readonly PRECISION_ = 180;
	public static readonly PREPARE_ = 181;
	public static readonly PRIVILEGES_ = 182;
	public static readonly PROPERTIES_ = 183;
	public static readonly PRUNE_ = 184;
	public static readonly QUOTES_ = 185;
	public static readonly RANGE_ = 186;
	public static readonly READ_ = 187;
	public static readonly RECURSIVE_ = 188;
	public static readonly REFRESH_ = 189;
	public static readonly RENAME_ = 190;
	public static readonly REPEATABLE_ = 191;
	public static readonly REPLACE_ = 192;
	public static readonly RESET_ = 193;
	public static readonly RESPECT_ = 194;
	public static readonly RESTRICT_ = 195;
	public static readonly RETURNING_ = 196;
	public static readonly REVOKE_ = 197;
	public static readonly RIGHT_ = 198;
	public static readonly ROLE_ = 199;
	public static readonly ROLES_ = 200;
	public static readonly ROLLBACK_ = 201;
	public static readonly ROLLUP_ = 202;
	public static readonly ROW_ = 203;
	public static readonly ROWS_ = 204;
	public static readonly RUNNING_ = 205;
	public static readonly SCALAR_ = 206;
	public static readonly SCHEMA_ = 207;
	public static readonly SCHEMAS_ = 208;
	public static readonly SECOND_ = 209;
	public static readonly SECURITY_ = 210;
	public static readonly SEEK_ = 211;
	public static readonly SELECT_ = 212;
	public static readonly SERIALIZABLE_ = 213;
	public static readonly SESSION_ = 214;
	public static readonly SET_ = 215;
	public static readonly SETS_ = 216;
	public static readonly SHOW_ = 217;
	public static readonly SKIP_ = 218;
	public static readonly SOME_ = 219;
	public static readonly START_ = 220;
	public static readonly STATS_ = 221;
	public static readonly SUBSET_ = 222;
	public static readonly SUBSTRING_ = 223;
	public static readonly SYSTEM_ = 224;
	public static readonly TABLE_ = 225;
	public static readonly TABLES_ = 226;
	public static readonly TABLESAMPLE_ = 227;
	public static readonly TEXT_ = 228;
	public static readonly TEXT_STRING_ = 229;
	public static readonly THEN_ = 230;
	public static readonly TIES_ = 231;
	public static readonly TIME_ = 232;
	public static readonly TIMESTAMP_ = 233;
	public static readonly TO_ = 234;
	public static readonly TRAILING_ = 235;
	public static readonly TRANSACTION_ = 236;
	public static readonly TRIM_ = 237;
	public static readonly TRUE_ = 238;
	public static readonly TRUNCATE_ = 239;
	public static readonly TRY_CAST_ = 240;
	public static readonly TYPE_ = 241;
	public static readonly UESCAPE_ = 242;
	public static readonly UNBOUNDED_ = 243;
	public static readonly UNCOMMITTED_ = 244;
	public static readonly UNCONDITIONAL_ = 245;
	public static readonly UNION_ = 246;
	public static readonly UNIQUE_ = 247;
	public static readonly UNKNOWN_ = 248;
	public static readonly UNMATCHED_ = 249;
	public static readonly UNNEST_ = 250;
	public static readonly UPDATE_ = 251;
	public static readonly USE_ = 252;
	public static readonly USER_ = 253;
	public static readonly USING_ = 254;
	public static readonly UTF16_ = 255;
	public static readonly UTF32_ = 256;
	public static readonly UTF8_ = 257;
	public static readonly VALIDATE_ = 258;
	public static readonly VALUE_ = 259;
	public static readonly VALUES_ = 260;
	public static readonly VERBOSE_ = 261;
	public static readonly VERSION_ = 262;
	public static readonly VIEW_ = 263;
	public static readonly WHEN_ = 264;
	public static readonly WHERE_ = 265;
	public static readonly WINDOW_ = 266;
	public static readonly WITH_ = 267;
	public static readonly WITHIN_ = 268;
	public static readonly WITHOUT_ = 269;
	public static readonly WORK_ = 270;
	public static readonly WRAPPER_ = 271;
	public static readonly WRITE_ = 272;
	public static readonly YEAR_ = 273;
	public static readonly ZONE_ = 274;
	public static readonly EQ_ = 275;
	public static readonly NEQ_ = 276;
	public static readonly LT_ = 277;
	public static readonly LTE_ = 278;
	public static readonly GT_ = 279;
	public static readonly GTE_ = 280;
	public static readonly PLUS_ = 281;
	public static readonly MINUS_ = 282;
	public static readonly ASTERISK_ = 283;
	public static readonly SLASH_ = 284;
	public static readonly PERCENT_ = 285;
	public static readonly CONCAT_ = 286;
	public static readonly QUESTION_MARK_ = 287;
	public static readonly DOT_ = 288;
	public static readonly COLON_ = 289;
	public static readonly COMMA_ = 290;
	public static readonly SEMICOLON_ = 291;
	public static readonly LPAREN_ = 292;
	public static readonly RPAREN_ = 293;
	public static readonly LSQUARE_ = 294;
	public static readonly RSQUARE_ = 295;
	public static readonly LCURLY_ = 296;
	public static readonly RCURLY_ = 297;
	public static readonly LCURLYHYPHEN_ = 298;
	public static readonly RCURLYHYPHEN_ = 299;
	public static readonly LARROW_ = 300;
	public static readonly RARROW_ = 301;
	public static readonly RDOUBLEARROW_ = 302;
	public static readonly VBAR_ = 303;
	public static readonly DOLLAR_ = 304;
	public static readonly CARET_ = 305;
	public static readonly STRING_ = 306;
	public static readonly UNICODE_STRING_ = 307;
	public static readonly BINARY_LITERAL_ = 308;
	public static readonly INTEGER_VALUE_ = 309;
	public static readonly DECIMAL_VALUE_ = 310;
	public static readonly DOUBLE_VALUE_ = 311;
	public static readonly IDENTIFIER_ = 312;
	public static readonly DIGIT_IDENTIFIER_ = 313;
	public static readonly QUOTED_IDENTIFIER_ = 314;
	public static readonly BACKQUOTED_IDENTIFIER_ = 315;
	public static readonly SIMPLE_COMMENT_ = 316;
	public static readonly BRACKETED_COMMENT_ = 317;
	public static readonly WS_ = 318;
	public static readonly UNRECOGNIZED_ = 319;
	public static readonly EOF = Token.EOF;
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
	public static readonly RULE_trimsSpecification = 37;
	public static readonly RULE_listAggOverflowBehavior = 38;
	public static readonly RULE_listaggCountIndication = 39;
	public static readonly RULE_patternRecognition = 40;
	public static readonly RULE_measureDefinition = 41;
	public static readonly RULE_rowsPerMatch = 42;
	public static readonly RULE_emptyMatchHandling = 43;
	public static readonly RULE_skipTo = 44;
	public static readonly RULE_subsetDefinition = 45;
	public static readonly RULE_variableDefinition = 46;
	public static readonly RULE_aliasedRelation = 47;
	public static readonly RULE_columnAliases = 48;
	public static readonly RULE_relationPrimary = 49;
	public static readonly RULE_tableFunctionCall = 50;
	public static readonly RULE_tableFunctionArgument = 51;
	public static readonly RULE_tableArgument = 52;
	public static readonly RULE_tableArgumentRelation = 53;
	public static readonly RULE_descriptorArgument = 54;
	public static readonly RULE_descriptorField = 55;
	public static readonly RULE_copartitionTables = 56;
	public static readonly RULE_expression = 57;
	public static readonly RULE_booleanExpression = 58;
	public static readonly RULE_predicate_ = 59;
	public static readonly RULE_valueExpression = 60;
	public static readonly RULE_primaryExpression = 61;
	public static readonly RULE_jsonPathInvocation = 62;
	public static readonly RULE_jsonValueExpression = 63;
	public static readonly RULE_jsonRepresentation = 64;
	public static readonly RULE_jsonArgument = 65;
	public static readonly RULE_jsonExistsErrorBehavior = 66;
	public static readonly RULE_jsonValueBehavior = 67;
	public static readonly RULE_jsonQueryWrapperBehavior = 68;
	public static readonly RULE_jsonQueryBehavior = 69;
	public static readonly RULE_jsonObjectMember = 70;
	public static readonly RULE_processingMode = 71;
	public static readonly RULE_nullTreatment = 72;
	public static readonly RULE_string_ = 73;
	public static readonly RULE_timeZoneSpecifier = 74;
	public static readonly RULE_comparisonOperator = 75;
	public static readonly RULE_comparisonQuantifier = 76;
	public static readonly RULE_booleanValue = 77;
	public static readonly RULE_interval = 78;
	public static readonly RULE_intervalField = 79;
	public static readonly RULE_normalForm = 80;
	public static readonly RULE_type = 81;
	public static readonly RULE_rowField = 82;
	public static readonly RULE_typeParameter = 83;
	public static readonly RULE_whenClause = 84;
	public static readonly RULE_filter = 85;
	public static readonly RULE_mergeCase = 86;
	public static readonly RULE_over = 87;
	public static readonly RULE_windowFrame = 88;
	public static readonly RULE_frameExtent = 89;
	public static readonly RULE_frameBound = 90;
	public static readonly RULE_rowPattern = 91;
	public static readonly RULE_patternPrimary = 92;
	public static readonly RULE_patternQuantifier = 93;
	public static readonly RULE_updateAssignment = 94;
	public static readonly RULE_explainOption = 95;
	public static readonly RULE_transactionMode = 96;
	public static readonly RULE_levelOfIsolation = 97;
	public static readonly RULE_callArgument = 98;
	public static readonly RULE_pathElement = 99;
	public static readonly RULE_pathSpecification = 100;
	public static readonly RULE_privilege = 101;
	public static readonly RULE_qualifiedName = 102;
	public static readonly RULE_queryPeriod = 103;
	public static readonly RULE_rangeType = 104;
	public static readonly RULE_grantor = 105;
	public static readonly RULE_principal = 106;
	public static readonly RULE_roles = 107;
	public static readonly RULE_identifier = 108;
	public static readonly RULE_number = 109;
	public static readonly RULE_nonReserved = 110;
	public static readonly literalNames: (string | null)[] = [ null, "'ABSENT'", 
                                                            "'ADD'", "'ADMIN'", 
                                                            "'AFTER'", "'ALL'", 
                                                            "'ALTER'", "'ANALYZE'", 
                                                            "'AND'", "'ANY'", 
                                                            "'ARRAY'", "'AS'", 
                                                            "'ASC'", "'AT'", 
                                                            "'AUTHORIZATION'", 
                                                            "'BERNOULLI'", 
                                                            "'BETWEEN'", 
                                                            "'BOTH'", "'BY'", 
                                                            "'CALL'", "'CASCADE'", 
                                                            "'CASE'", "'CAST'", 
                                                            "'CATALOGS'", 
                                                            "'COLUMN'", 
                                                            "'COLUMNS'", 
                                                            "'COMMENT'", 
                                                            "'COMMIT'", 
                                                            "'COMMITTED'", 
                                                            "'CONDITIONAL'", 
                                                            "'CONSTRAINT'", 
                                                            "'COUNT'", "'COPARTITION'", 
                                                            "'CREATE'", 
                                                            "'CROSS'", "'CUBE'", 
                                                            "'CURRENT'", 
                                                            "'CURRENT_CATALOG'", 
                                                            "'CURRENT_DATE'", 
                                                            "'CURRENT_PATH'", 
                                                            "'CURRENT_ROLE'", 
                                                            "'CURRENT_SCHEMA'", 
                                                            "'CURRENT_TIME'", 
                                                            "'CURRENT_TIMESTAMP'", 
                                                            "'CURRENT_USER'", 
                                                            "'DATA'", "'DATE'", 
                                                            "'DAY'", "'DEALLOCATE'", 
                                                            "'DEFAULT'", 
                                                            "'DEFINER'", 
                                                            "'DELETE'", 
                                                            "'DENY'", "'DESC'", 
                                                            "'DESCRIBE'", 
                                                            "'DESCRIPTOR'", 
                                                            "'DEFINE'", 
                                                            "'DISTINCT'", 
                                                            "'DISTRIBUTED'", 
                                                            "'DOUBLE'", 
                                                            "'DROP'", "'ELSE'", 
                                                            "'EMPTY'", "'ENCODING'", 
                                                            "'END'", "'ERROR'", 
                                                            "'ESCAPE'", 
                                                            "'EXCEPT'", 
                                                            "'EXCLUDING'", 
                                                            "'EXECUTE'", 
                                                            "'EXISTS'", 
                                                            "'EXPLAIN'", 
                                                            "'EXTRACT'", 
                                                            "'FALSE'", "'FETCH'", 
                                                            "'FILTER'", 
                                                            "'FINAL'", "'FIRST'", 
                                                            "'FOLLOWING'", 
                                                            "'FOR'", "'FORMAT'", 
                                                            "'FROM'", "'FULL'", 
                                                            "'FUNCTIONS'", 
                                                            "'GRACE'", "'GRANT'", 
                                                            "'GRANTED'", 
                                                            "'GRANTS'", 
                                                            "'GRAPHVIZ'", 
                                                            "'GROUP'", "'GROUPING'", 
                                                            "'GROUPS'", 
                                                            "'HAVING'", 
                                                            "'HOUR'", "'IF'", 
                                                            "'IGNORE'", 
                                                            "'IN'", "'INCLUDING'", 
                                                            "'INITIAL'", 
                                                            "'INNER'", "'INPUT'", 
                                                            "'INSERT'", 
                                                            "'INTERSECT'", 
                                                            "'INTERVAL'", 
                                                            "'INTO'", "'INVOKER'", 
                                                            "'IO'", "'IS'", 
                                                            "'ISOLATION'", 
                                                            "'JOIN'", "'JSON'", 
                                                            "'JSON_ARRAY'", 
                                                            "'JSON_EXISTS'", 
                                                            "'JSON_OBJECT'", 
                                                            "'JSON_QUERY'", 
                                                            "'JSON_VALUE'", 
                                                            "'KEEP'", "'KEY'", 
                                                            "'KEYS'", "'LAST'", 
                                                            "'LATERAL'", 
                                                            "'LEADING'", 
                                                            "'LEFT'", "'LEVEL'", 
                                                            "'LIKE'", "'LIMIT'", 
                                                            "'LISTAGG'", 
                                                            "'LOCAL'", "'LOCALTIME'", 
                                                            "'LOCALTIMESTAMP'", 
                                                            "'LOGICAL'", 
                                                            "'MAP'", "'MATCH'", 
                                                            "'MATCHED'", 
                                                            "'MATCHES'", 
                                                            "'MATCH_RECOGNIZE'", 
                                                            "'MATERIALIZED'", 
                                                            "'MEASURES'", 
                                                            "'MERGE'", "'MINUTE'", 
                                                            "'MONTH'", "'NATURAL'", 
                                                            "'NEXT'", "'NFC'", 
                                                            "'NFD'", "'NFKC'", 
                                                            "'NFKD'", "'NO'", 
                                                            "'NONE'", "'NORMALIZE'", 
                                                            "'NOT'", "'NULL'", 
                                                            "'NULLIF'", 
                                                            "'NULLS'", "'OBJECT'", 
                                                            "'OFFSET'", 
                                                            "'OMIT'", "'OF'", 
                                                            "'ON'", "'ONE'", 
                                                            "'ONLY'", "'OPTION'", 
                                                            "'OR'", "'ORDER'", 
                                                            "'ORDINALITY'", 
                                                            "'OUTER'", "'OUTPUT'", 
                                                            "'OVER'", "'OVERFLOW'", 
                                                            "'PARTITION'", 
                                                            "'PARTITIONS'", 
                                                            "'PASSING'", 
                                                            "'PAST'", "'PATH'", 
                                                            "'PATTERN'", 
                                                            "'PER'", "'PERIOD'", 
                                                            "'PERMUTE'", 
                                                            "'POSITION'", 
                                                            "'PRECEDING'", 
                                                            "'PRECISION'", 
                                                            "'PREPARE'", 
                                                            "'PRIVILEGES'", 
                                                            "'PROPERTIES'", 
                                                            "'PRUNE'", "'QUOTES'", 
                                                            "'RANGE'", "'READ'", 
                                                            "'RECURSIVE'", 
                                                            "'REFRESH'", 
                                                            "'RENAME'", 
                                                            "'REPEATABLE'", 
                                                            "'REPLACE'", 
                                                            "'RESET'", "'RESPECT'", 
                                                            "'RESTRICT'", 
                                                            "'RETURNING'", 
                                                            "'REVOKE'", 
                                                            "'RIGHT'", "'ROLE'", 
                                                            "'ROLES'", "'ROLLBACK'", 
                                                            "'ROLLUP'", 
                                                            "'ROW'", "'ROWS'", 
                                                            "'RUNNING'", 
                                                            "'SCALAR'", 
                                                            "'SCHEMA'", 
                                                            "'SCHEMAS'", 
                                                            "'SECOND'", 
                                                            "'SECURITY'", 
                                                            "'SEEK'", "'SELECT'", 
                                                            "'SERIALIZABLE'", 
                                                            "'SESSION'", 
                                                            "'SET'", "'SETS'", 
                                                            "'SHOW'", "'SKIP'", 
                                                            "'SOME'", "'START'", 
                                                            "'STATS'", "'SUBSET'", 
                                                            "'SUBSTRING'", 
                                                            "'SYSTEM'", 
                                                            "'TABLE'", "'TABLES'", 
                                                            "'TABLESAMPLE'", 
                                                            "'TEXT'", "'STRING'", 
                                                            "'THEN'", "'TIES'", 
                                                            "'TIME'", "'TIMESTAMP'", 
                                                            "'TO'", "'TRAILING'", 
                                                            "'TRANSACTION'", 
                                                            "'TRIM'", "'TRUE'", 
                                                            "'TRUNCATE'", 
                                                            "'TRY_CAST'", 
                                                            "'TYPE'", "'UESCAPE'", 
                                                            "'UNBOUNDED'", 
                                                            "'UNCOMMITTED'", 
                                                            "'UNCONDITIONAL'", 
                                                            "'UNION'", "'UNIQUE'", 
                                                            "'UNKNOWN'", 
                                                            "'UNMATCHED'", 
                                                            "'UNNEST'", 
                                                            "'UPDATE'", 
                                                            "'USE'", "'USER'", 
                                                            "'USING'", "'UTF16'", 
                                                            "'UTF32'", "'UTF8'", 
                                                            "'VALIDATE'", 
                                                            "'VALUE'", "'VALUES'", 
                                                            "'VERBOSE'", 
                                                            "'VERSION'", 
                                                            "'VIEW'", "'WHEN'", 
                                                            "'WHERE'", "'WINDOW'", 
                                                            "'WITH'", "'WITHIN'", 
                                                            "'WITHOUT'", 
                                                            "'WORK'", "'WRAPPER'", 
                                                            "'WRITE'", "'YEAR'", 
                                                            "'ZONE'", "'='", 
                                                            null, "'<'", 
                                                            "'<='", "'>'", 
                                                            "'>='", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "'||'", "'?'", 
                                                            "'.'", "'_:'", 
                                                            "','", "';'", 
                                                            "'('", "')'", 
                                                            "'['", "']'", 
                                                            "'{'", "'}'", 
                                                            "'{-'", "'-}'", 
                                                            "'<-'", "'->'", 
                                                            "'=>'", "'|'", 
                                                            "'$'", "'^'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "ABSENT_", 
                                                             "ADD_", "ADMIN_", 
                                                             "AFTER_", "ALL_", 
                                                             "ALTER_", "ANALYZE_", 
                                                             "AND_", "ANY_", 
                                                             "ARRAY_", "AS_", 
                                                             "ASC_", "AT_", 
                                                             "AUTHORIZATION_", 
                                                             "BERNOULLI_", 
                                                             "BETWEEN_", 
                                                             "BOTH_", "BY_", 
                                                             "CALL_", "CASCADE_", 
                                                             "CASE_", "CAST_", 
                                                             "CATALOGS_", 
                                                             "COLUMN_", 
                                                             "COLUMNS_", 
                                                             "COMMENT_", 
                                                             "COMMIT_", 
                                                             "COMMITTED_", 
                                                             "CONDITIONAL_", 
                                                             "CONSTRAINT_", 
                                                             "COUNT_", "COPARTITION_", 
                                                             "CREATE_", 
                                                             "CROSS_", "CUBE_", 
                                                             "CURRENT_", 
                                                             "CURRENT_CATALOG_", 
                                                             "CURRENT_DATE_", 
                                                             "CURRENT_PATH_", 
                                                             "CURRENT_ROLE_", 
                                                             "CURRENT_SCHEMA_", 
                                                             "CURRENT_TIME_", 
                                                             "CURRENT_TIMESTAMP_", 
                                                             "CURRENT_USER_", 
                                                             "DATA_", "DATE_", 
                                                             "DAY_", "DEALLOCATE_", 
                                                             "DEFAULT_", 
                                                             "DEFINER_", 
                                                             "DELETE_", 
                                                             "DENY_", "DESC_", 
                                                             "DESCRIBE_", 
                                                             "DESCRIPTOR_", 
                                                             "DEFINE_", 
                                                             "DISTINCT_", 
                                                             "DISTRIBUTED_", 
                                                             "DOUBLE_", 
                                                             "DROP_", "ELSE_", 
                                                             "EMPTY_", "ENCODING_", 
                                                             "END_", "ERROR_", 
                                                             "ESCAPE_", 
                                                             "EXCEPT_", 
                                                             "EXCLUDING_", 
                                                             "EXECUTE_", 
                                                             "EXISTS_", 
                                                             "EXPLAIN_", 
                                                             "EXTRACT_", 
                                                             "FALSE_", "FETCH_", 
                                                             "FILTER_", 
                                                             "FINAL_", "FIRST_", 
                                                             "FOLLOWING_", 
                                                             "FOR_", "FORMAT_", 
                                                             "FROM_", "FULL_", 
                                                             "FUNCTIONS_", 
                                                             "GRACE_", "GRANT_", 
                                                             "GRANTED_", 
                                                             "GRANTS_", 
                                                             "GRAPHVIZ_", 
                                                             "GROUP_", "GROUPING_", 
                                                             "GROUPS_", 
                                                             "HAVING_", 
                                                             "HOUR_", "IF_", 
                                                             "IGNORE_", 
                                                             "IN_", "INCLUDING_", 
                                                             "INITIAL_", 
                                                             "INNER_", "INPUT_", 
                                                             "INSERT_", 
                                                             "INTERSECT_", 
                                                             "INTERVAL_", 
                                                             "INTO_", "INVOKER_", 
                                                             "IO_", "IS_", 
                                                             "ISOLATION_", 
                                                             "JOIN_", "JSON_", 
                                                             "JSON_ARRAY_", 
                                                             "JSON_EXISTS_", 
                                                             "JSON_OBJECT_", 
                                                             "JSON_QUERY_", 
                                                             "JSON_VALUE_", 
                                                             "KEEP_", "KEY_", 
                                                             "KEYS_", "LAST_", 
                                                             "LATERAL_", 
                                                             "LEADING_", 
                                                             "LEFT_", "LEVEL_", 
                                                             "LIKE_", "LIMIT_", 
                                                             "LISTAGG_", 
                                                             "LOCAL_", "LOCALTIME_", 
                                                             "LOCALTIMESTAMP_", 
                                                             "LOGICAL_", 
                                                             "MAP_", "MATCH_", 
                                                             "MATCHED_", 
                                                             "MATCHES_", 
                                                             "MATCH_RECOGNIZE_", 
                                                             "MATERIALIZED_", 
                                                             "MEASURES_", 
                                                             "MERGE_", "MINUTE_", 
                                                             "MONTH_", "NATURAL_", 
                                                             "NEXT_", "NFC_", 
                                                             "NFD_", "NFKC_", 
                                                             "NFKD_", "NO_", 
                                                             "NONE_", "NORMALIZE_", 
                                                             "NOT_", "NULL_", 
                                                             "NULLIF_", 
                                                             "NULLS_", "OBJECT_", 
                                                             "OFFSET_", 
                                                             "OMIT_", "OF_", 
                                                             "ON_", "ONE_", 
                                                             "ONLY_", "OPTION_", 
                                                             "OR_", "ORDER_", 
                                                             "ORDINALITY_", 
                                                             "OUTER_", "OUTPUT_", 
                                                             "OVER_", "OVERFLOW_", 
                                                             "PARTITION_", 
                                                             "PARTITIONS_", 
                                                             "PASSING_", 
                                                             "PAST_", "PATH_", 
                                                             "PATTERN_", 
                                                             "PER_", "PERIOD_", 
                                                             "PERMUTE_", 
                                                             "POSITION_", 
                                                             "PRECEDING_", 
                                                             "PRECISION_", 
                                                             "PREPARE_", 
                                                             "PRIVILEGES_", 
                                                             "PROPERTIES_", 
                                                             "PRUNE_", "QUOTES_", 
                                                             "RANGE_", "READ_", 
                                                             "RECURSIVE_", 
                                                             "REFRESH_", 
                                                             "RENAME_", 
                                                             "REPEATABLE_", 
                                                             "REPLACE_", 
                                                             "RESET_", "RESPECT_", 
                                                             "RESTRICT_", 
                                                             "RETURNING_", 
                                                             "REVOKE_", 
                                                             "RIGHT_", "ROLE_", 
                                                             "ROLES_", "ROLLBACK_", 
                                                             "ROLLUP_", 
                                                             "ROW_", "ROWS_", 
                                                             "RUNNING_", 
                                                             "SCALAR_", 
                                                             "SCHEMA_", 
                                                             "SCHEMAS_", 
                                                             "SECOND_", 
                                                             "SECURITY_", 
                                                             "SEEK_", "SELECT_", 
                                                             "SERIALIZABLE_", 
                                                             "SESSION_", 
                                                             "SET_", "SETS_", 
                                                             "SHOW_", "SKIP_", 
                                                             "SOME_", "START_", 
                                                             "STATS_", "SUBSET_", 
                                                             "SUBSTRING_", 
                                                             "SYSTEM_", 
                                                             "TABLE_", "TABLES_", 
                                                             "TABLESAMPLE_", 
                                                             "TEXT_", "TEXT_STRING_", 
                                                             "THEN_", "TIES_", 
                                                             "TIME_", "TIMESTAMP_", 
                                                             "TO_", "TRAILING_", 
                                                             "TRANSACTION_", 
                                                             "TRIM_", "TRUE_", 
                                                             "TRUNCATE_", 
                                                             "TRY_CAST_", 
                                                             "TYPE_", "UESCAPE_", 
                                                             "UNBOUNDED_", 
                                                             "UNCOMMITTED_", 
                                                             "UNCONDITIONAL_", 
                                                             "UNION_", "UNIQUE_", 
                                                             "UNKNOWN_", 
                                                             "UNMATCHED_", 
                                                             "UNNEST_", 
                                                             "UPDATE_", 
                                                             "USE_", "USER_", 
                                                             "USING_", "UTF16_", 
                                                             "UTF32_", "UTF8_", 
                                                             "VALIDATE_", 
                                                             "VALUE_", "VALUES_", 
                                                             "VERBOSE_", 
                                                             "VERSION_", 
                                                             "VIEW_", "WHEN_", 
                                                             "WHERE_", "WINDOW_", 
                                                             "WITH_", "WITHIN_", 
                                                             "WITHOUT_", 
                                                             "WORK_", "WRAPPER_", 
                                                             "WRITE_", "YEAR_", 
                                                             "ZONE_", "EQ_", 
                                                             "NEQ_", "LT_", 
                                                             "LTE_", "GT_", 
                                                             "GTE_", "PLUS_", 
                                                             "MINUS_", "ASTERISK_", 
                                                             "SLASH_", "PERCENT_", 
                                                             "CONCAT_", 
                                                             "QUESTION_MARK_", 
                                                             "DOT_", "COLON_", 
                                                             "COMMA_", "SEMICOLON_", 
                                                             "LPAREN_", 
                                                             "RPAREN_", 
                                                             "LSQUARE_", 
                                                             "RSQUARE_", 
                                                             "LCURLY_", 
                                                             "RCURLY_", 
                                                             "LCURLYHYPHEN_", 
                                                             "RCURLYHYPHEN_", 
                                                             "LARROW_", 
                                                             "RARROW_", 
                                                             "RDOUBLEARROW_", 
                                                             "VBAR_", "DOLLAR_", 
                                                             "CARET_", "STRING_", 
                                                             "UNICODE_STRING_", 
                                                             "BINARY_LITERAL_", 
                                                             "INTEGER_VALUE_", 
                                                             "DECIMAL_VALUE_", 
                                                             "DOUBLE_VALUE_", 
                                                             "IDENTIFIER_", 
                                                             "DIGIT_IDENTIFIER_", 
                                                             "QUOTED_IDENTIFIER_", 
                                                             "BACKQUOTED_IDENTIFIER_", 
                                                             "SIMPLE_COMMENT_", 
                                                             "BRACKETED_COMMENT_", 
                                                             "WS_", "UNRECOGNIZED_" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statements", "singleStatement", "standaloneExpression", "standalonePathSpecification", 
		"standaloneType", "standaloneRowPattern", "statement", "query", "with", 
		"tableElement", "columnDefinition", "likeClause", "properties", "propertyAssignments", 
		"property", "propertyValue", "queryNoWith", "limitRowCount", "rowCount", 
		"queryTerm", "queryPrimary", "sortItem", "querySpecification", "groupBy", 
		"groupingElement", "groupingSet", "windowDefinition", "windowSpecification", 
		"namedQuery", "setQuantifier", "selectItem", "relation", "joinType", "joinCriteria", 
		"sampledRelation", "sampleType", "trimsSpecification", "listAggOverflowBehavior", 
		"listaggCountIndication", "patternRecognition", "measureDefinition", "rowsPerMatch", 
		"emptyMatchHandling", "skipTo", "subsetDefinition", "variableDefinition", 
		"aliasedRelation", "columnAliases", "relationPrimary", "tableFunctionCall", 
		"tableFunctionArgument", "tableArgument", "tableArgumentRelation", "descriptorArgument", 
		"descriptorField", "copartitionTables", "expression", "booleanExpression", 
		"predicate_", "valueExpression", "primaryExpression", "jsonPathInvocation", 
		"jsonValueExpression", "jsonRepresentation", "jsonArgument", "jsonExistsErrorBehavior", 
		"jsonValueBehavior", "jsonQueryWrapperBehavior", "jsonQueryBehavior", 
		"jsonObjectMember", "processingMode", "nullTreatment", "string_", "timeZoneSpecifier", 
		"comparisonOperator", "comparisonQuantifier", "booleanValue", "interval", 
		"intervalField", "normalForm", "type", "rowField", "typeParameter", "whenClause", 
		"filter", "mergeCase", "over", "windowFrame", "frameExtent", "frameBound", 
		"rowPattern", "patternPrimary", "patternQuantifier", "updateAssignment", 
		"explainOption", "transactionMode", "levelOfIsolation", "callArgument", 
		"pathElement", "pathSpecification", "privilege", "qualifiedName", "queryPeriod", 
		"rangeType", "grantor", "principal", "roles", "identifier", "number", 
		"nonReserved",
	];
	public get grammarFileName(): string { return "trinoSqlParser.g4"; }
	public get literalNames(): (string | null)[] { return trinoSqlParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return trinoSqlParser.symbolicNames; }
	public get ruleNames(): string[] { return trinoSqlParser.ruleNames; }
	public get serializedATN(): number[] { return trinoSqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, trinoSqlParser._ATN, trinoSqlParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, trinoSqlParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3220895486) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3724541683) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 1996275705) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4127189851) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 3758092287) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 4160749545) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4261412319) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 3722313695) !== 0) || ((((_la - 257)) & ~0x1F) === 0 && ((1 << (_la - 257)) & 1124335231) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 16773185) !== 0)) {
				{
				{
				this.state = 222;
				this.statements();
				}
				}
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 228;
			this.match(trinoSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statements(): StatementsContext {
		let localctx: StatementsContext = new StatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, trinoSqlParser.RULE_statements);
		let _la: number;
		try {
			this.state = 238;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 230;
				this.singleStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 231;
				this.standaloneExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 232;
				this.standalonePathSpecification();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 233;
				this.standaloneType();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 234;
				this.standaloneRowPattern();
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===291) {
					{
					this.state = 235;
					this.match(trinoSqlParser.SEMICOLON_);
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
	public singleStatement(): SingleStatementContext {
		let localctx: SingleStatementContext = new SingleStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, trinoSqlParser.RULE_singleStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 240;
			this.statement();
			this.state = 241;
			this.match(trinoSqlParser.SEMICOLON_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public standaloneExpression(): StandaloneExpressionContext {
		let localctx: StandaloneExpressionContext = new StandaloneExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, trinoSqlParser.RULE_standaloneExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 243;
			this.expression();
			this.state = 244;
			this.match(trinoSqlParser.SEMICOLON_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public standalonePathSpecification(): StandalonePathSpecificationContext {
		let localctx: StandalonePathSpecificationContext = new StandalonePathSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, trinoSqlParser.RULE_standalonePathSpecification);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 246;
			this.pathSpecification();
			this.state = 247;
			this.match(trinoSqlParser.SEMICOLON_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public standaloneType(): StandaloneTypeContext {
		let localctx: StandaloneTypeContext = new StandaloneTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, trinoSqlParser.RULE_standaloneType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 249;
			this.type_(0);
			this.state = 250;
			this.match(trinoSqlParser.SEMICOLON_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public standaloneRowPattern(): StandaloneRowPatternContext {
		let localctx: StandaloneRowPatternContext = new StandaloneRowPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, trinoSqlParser.RULE_standaloneRowPattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 252;
			this.rowPattern(0);
			this.state = 253;
			this.match(trinoSqlParser.SEMICOLON_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 14, trinoSqlParser.RULE_statement);
		let _la: number;
		try {
			this.state = 1048;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				localctx = new StatementDefaultContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 255;
				this.query();
				}
				break;
			case 2:
				localctx = new UseContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 256;
				this.match(trinoSqlParser.USE_);
				this.state = 257;
				(localctx as UseContext)._schema = this.identifier();
				}
				break;
			case 3:
				localctx = new UseContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 258;
				this.match(trinoSqlParser.USE_);
				this.state = 259;
				(localctx as UseContext)._catalog = this.identifier();
				this.state = 260;
				this.match(trinoSqlParser.DOT_);
				this.state = 261;
				(localctx as UseContext)._schema = this.identifier();
				}
				break;
			case 4:
				localctx = new CreateSchemaContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 263;
				this.match(trinoSqlParser.CREATE_);
				this.state = 264;
				this.match(trinoSqlParser.SCHEMA_);
				this.state = 268;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 265;
					this.match(trinoSqlParser.IF_);
					this.state = 266;
					this.match(trinoSqlParser.NOT_);
					this.state = 267;
					this.match(trinoSqlParser.EXISTS_);
					}
					break;
				}
				this.state = 270;
				this.qualifiedName();
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14) {
					{
					this.state = 271;
					this.match(trinoSqlParser.AUTHORIZATION_);
					this.state = 272;
					this.principal();
					}
				}

				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===267) {
					{
					this.state = 275;
					this.match(trinoSqlParser.WITH_);
					this.state = 276;
					this.properties();
					}
				}

				}
				break;
			case 5:
				localctx = new DropSchemaContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 279;
				this.match(trinoSqlParser.DROP_);
				this.state = 280;
				this.match(trinoSqlParser.SCHEMA_);
				this.state = 283;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 281;
					this.match(trinoSqlParser.IF_);
					this.state = 282;
					this.match(trinoSqlParser.EXISTS_);
					}
					break;
				}
				this.state = 285;
				this.qualifiedName();
				this.state = 287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20 || _la===195) {
					{
					this.state = 286;
					_la = this._input.LA(1);
					if(!(_la===20 || _la===195)) {
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
			case 6:
				localctx = new RenameSchemaContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 289;
				this.match(trinoSqlParser.ALTER_);
				this.state = 290;
				this.match(trinoSqlParser.SCHEMA_);
				this.state = 291;
				this.qualifiedName();
				this.state = 292;
				this.match(trinoSqlParser.RENAME_);
				this.state = 293;
				this.match(trinoSqlParser.TO_);
				this.state = 294;
				this.identifier();
				}
				break;
			case 7:
				localctx = new SetSchemaAuthorizationContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 296;
				this.match(trinoSqlParser.ALTER_);
				this.state = 297;
				this.match(trinoSqlParser.SCHEMA_);
				this.state = 298;
				this.qualifiedName();
				this.state = 299;
				this.match(trinoSqlParser.SET_);
				this.state = 300;
				this.match(trinoSqlParser.AUTHORIZATION_);
				this.state = 301;
				this.principal();
				}
				break;
			case 8:
				localctx = new CreateTableAsSelectContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 303;
				this.match(trinoSqlParser.CREATE_);
				this.state = 304;
				this.match(trinoSqlParser.TABLE_);
				this.state = 308;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 305;
					this.match(trinoSqlParser.IF_);
					this.state = 306;
					this.match(trinoSqlParser.NOT_);
					this.state = 307;
					this.match(trinoSqlParser.EXISTS_);
					}
					break;
				}
				this.state = 310;
				this.qualifiedName();
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===292) {
					{
					this.state = 311;
					this.columnAliases();
					}
				}

				this.state = 316;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26) {
					{
					this.state = 314;
					this.match(trinoSqlParser.COMMENT_);
					this.state = 315;
					this.string_();
					}
				}

				this.state = 320;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===267) {
					{
					this.state = 318;
					this.match(trinoSqlParser.WITH_);
					this.state = 319;
					this.properties();
					}
				}

				this.state = 322;
				this.match(trinoSqlParser.AS_);
				this.state = 328;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 323;
					this.query();
					}
					break;
				case 2:
					{
					this.state = 324;
					this.match(trinoSqlParser.LPAREN_);
					this.state = 325;
					this.query();
					this.state = 326;
					this.match(trinoSqlParser.RPAREN_);
					}
					break;
				}
				this.state = 335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===267) {
					{
					this.state = 330;
					this.match(trinoSqlParser.WITH_);
					this.state = 332;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===147) {
						{
						this.state = 331;
						this.match(trinoSqlParser.NO_);
						}
					}

					this.state = 334;
					this.match(trinoSqlParser.DATA_);
					}
				}

				}
				break;
			case 9:
				localctx = new CreateTableContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 337;
				this.match(trinoSqlParser.CREATE_);
				this.state = 338;
				this.match(trinoSqlParser.TABLE_);
				this.state = 342;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 339;
					this.match(trinoSqlParser.IF_);
					this.state = 340;
					this.match(trinoSqlParser.NOT_);
					this.state = 341;
					this.match(trinoSqlParser.EXISTS_);
					}
					break;
				}
				this.state = 344;
				this.qualifiedName();
				this.state = 345;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 346;
				this.tableElement();
				this.state = 351;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 347;
					this.match(trinoSqlParser.COMMA_);
					this.state = 348;
					this.tableElement();
					}
					}
					this.state = 353;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 354;
				this.match(trinoSqlParser.RPAREN_);
				this.state = 357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26) {
					{
					this.state = 355;
					this.match(trinoSqlParser.COMMENT_);
					this.state = 356;
					this.string_();
					}
				}

				this.state = 361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===267) {
					{
					this.state = 359;
					this.match(trinoSqlParser.WITH_);
					this.state = 360;
					this.properties();
					}
				}

				}
				break;
			case 10:
				localctx = new DropTableContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 363;
				this.match(trinoSqlParser.DROP_);
				this.state = 364;
				this.match(trinoSqlParser.TABLE_);
				this.state = 367;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 365;
					this.match(trinoSqlParser.IF_);
					this.state = 366;
					this.match(trinoSqlParser.EXISTS_);
					}
					break;
				}
				this.state = 369;
				this.qualifiedName();
				}
				break;
			case 11:
				localctx = new InsertIntoContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 370;
				this.match(trinoSqlParser.INSERT_);
				this.state = 371;
				this.match(trinoSqlParser.INTO_);
				this.state = 372;
				this.qualifiedName();
				this.state = 374;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 373;
					this.columnAliases();
					}
					break;
				}
				this.state = 376;
				this.query();
				}
				break;
			case 12:
				localctx = new DeleteContext(this, localctx);
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 378;
				this.match(trinoSqlParser.DELETE_);
				this.state = 379;
				this.match(trinoSqlParser.FROM_);
				this.state = 380;
				this.qualifiedName();
				this.state = 383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===265) {
					{
					this.state = 381;
					this.match(trinoSqlParser.WHERE_);
					this.state = 382;
					this.booleanExpression(0);
					}
				}

				}
				break;
			case 13:
				localctx = new TruncateTableContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 385;
				this.match(trinoSqlParser.TRUNCATE_);
				this.state = 386;
				this.match(trinoSqlParser.TABLE_);
				this.state = 387;
				this.qualifiedName();
				}
				break;
			case 14:
				localctx = new CommentTableContext(this, localctx);
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 388;
				this.match(trinoSqlParser.COMMENT_);
				this.state = 389;
				this.match(trinoSqlParser.ON_);
				this.state = 390;
				this.match(trinoSqlParser.TABLE_);
				this.state = 391;
				this.qualifiedName();
				this.state = 392;
				this.match(trinoSqlParser.IS_);
				this.state = 395;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 306:
				case 307:
					{
					this.state = 393;
					this.string_();
					}
					break;
				case 151:
					{
					this.state = 394;
					this.match(trinoSqlParser.NULL_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 15:
				localctx = new CommentViewContext(this, localctx);
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 397;
				this.match(trinoSqlParser.COMMENT_);
				this.state = 398;
				this.match(trinoSqlParser.ON_);
				this.state = 399;
				this.match(trinoSqlParser.VIEW_);
				this.state = 400;
				this.qualifiedName();
				this.state = 401;
				this.match(trinoSqlParser.IS_);
				this.state = 404;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 306:
				case 307:
					{
					this.state = 402;
					this.string_();
					}
					break;
				case 151:
					{
					this.state = 403;
					this.match(trinoSqlParser.NULL_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 16:
				localctx = new CommentColumnContext(this, localctx);
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 406;
				this.match(trinoSqlParser.COMMENT_);
				this.state = 407;
				this.match(trinoSqlParser.ON_);
				this.state = 408;
				this.match(trinoSqlParser.COLUMN_);
				this.state = 409;
				this.qualifiedName();
				this.state = 410;
				this.match(trinoSqlParser.IS_);
				this.state = 413;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 306:
				case 307:
					{
					this.state = 411;
					this.string_();
					}
					break;
				case 151:
					{
					this.state = 412;
					this.match(trinoSqlParser.NULL_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 17:
				localctx = new RenameTableContext(this, localctx);
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 415;
				this.match(trinoSqlParser.ALTER_);
				this.state = 416;
				this.match(trinoSqlParser.TABLE_);
				this.state = 419;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 417;
					this.match(trinoSqlParser.IF_);
					this.state = 418;
					this.match(trinoSqlParser.EXISTS_);
					}
					break;
				}
				this.state = 421;
				(localctx as RenameTableContext)._from_ = this.qualifiedName();
				this.state = 422;
				this.match(trinoSqlParser.RENAME_);
				this.state = 423;
				this.match(trinoSqlParser.TO_);
				this.state = 424;
				(localctx as RenameTableContext)._to = this.qualifiedName();
				}
				break;
			case 18:
				localctx = new AddColumnContext(this, localctx);
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 426;
				this.match(trinoSqlParser.ALTER_);
				this.state = 427;
				this.match(trinoSqlParser.TABLE_);
				this.state = 430;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 428;
					this.match(trinoSqlParser.IF_);
					this.state = 429;
					this.match(trinoSqlParser.EXISTS_);
					}
					break;
				}
				this.state = 432;
				(localctx as AddColumnContext)._tableName = this.qualifiedName();
				this.state = 433;
				this.match(trinoSqlParser.ADD_);
				this.state = 434;
				this.match(trinoSqlParser.COLUMN_);
				this.state = 438;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 435;
					this.match(trinoSqlParser.IF_);
					this.state = 436;
					this.match(trinoSqlParser.NOT_);
					this.state = 437;
					this.match(trinoSqlParser.EXISTS_);
					}
					break;
				}
				this.state = 440;
				(localctx as AddColumnContext)._column = this.columnDefinition();
				}
				break;
			case 19:
				localctx = new RenameColumnContext(this, localctx);
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 442;
				this.match(trinoSqlParser.ALTER_);
				this.state = 443;
				this.match(trinoSqlParser.TABLE_);
				this.state = 446;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 444;
					this.match(trinoSqlParser.IF_);
					this.state = 445;
					this.match(trinoSqlParser.EXISTS_);
					}
					break;
				}
				this.state = 448;
				(localctx as RenameColumnContext)._tableName = this.qualifiedName();
				this.state = 449;
				this.match(trinoSqlParser.RENAME_);
				this.state = 450;
				this.match(trinoSqlParser.COLUMN_);
				this.state = 453;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 451;
					this.match(trinoSqlParser.IF_);
					this.state = 452;
					this.match(trinoSqlParser.EXISTS_);
					}
					break;
				}
				this.state = 455;
				(localctx as RenameColumnContext)._from_ = this.identifier();
				this.state = 456;
				this.match(trinoSqlParser.TO_);
				this.state = 457;
				(localctx as RenameColumnContext)._to = this.identifier();
				}
				break;
			case 20:
				localctx = new DropColumnContext(this, localctx);
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 459;
				this.match(trinoSqlParser.ALTER_);
				this.state = 460;
				this.match(trinoSqlParser.TABLE_);
				this.state = 463;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 461;
					this.match(trinoSqlParser.IF_);
					this.state = 462;
					this.match(trinoSqlParser.EXISTS_);
					}
					break;
				}
				this.state = 465;
				(localctx as DropColumnContext)._tableName = this.qualifiedName();
				this.state = 466;
				this.match(trinoSqlParser.DROP_);
				this.state = 467;
				this.match(trinoSqlParser.COLUMN_);
				this.state = 470;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 468;
					this.match(trinoSqlParser.IF_);
					this.state = 469;
					this.match(trinoSqlParser.EXISTS_);
					}
					break;
				}
				this.state = 472;
				(localctx as DropColumnContext)._column = this.qualifiedName();
				}
				break;
			case 21:
				localctx = new SetColumnTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 474;
				this.match(trinoSqlParser.ALTER_);
				this.state = 475;
				this.match(trinoSqlParser.TABLE_);
				this.state = 478;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 476;
					this.match(trinoSqlParser.IF_);
					this.state = 477;
					this.match(trinoSqlParser.EXISTS_);
					}
					break;
				}
				this.state = 480;
				(localctx as SetColumnTypeContext)._tableName = this.qualifiedName();
				this.state = 481;
				this.match(trinoSqlParser.ALTER_);
				this.state = 482;
				this.match(trinoSqlParser.COLUMN_);
				this.state = 483;
				(localctx as SetColumnTypeContext)._columnName = this.identifier();
				this.state = 484;
				this.match(trinoSqlParser.SET_);
				this.state = 485;
				this.match(trinoSqlParser.DATA_);
				this.state = 486;
				this.match(trinoSqlParser.TYPE_);
				this.state = 487;
				this.type_(0);
				}
				break;
			case 22:
				localctx = new SetTableAuthorizationContext(this, localctx);
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 489;
				this.match(trinoSqlParser.ALTER_);
				this.state = 490;
				this.match(trinoSqlParser.TABLE_);
				this.state = 491;
				(localctx as SetTableAuthorizationContext)._tableName = this.qualifiedName();
				this.state = 492;
				this.match(trinoSqlParser.SET_);
				this.state = 493;
				this.match(trinoSqlParser.AUTHORIZATION_);
				this.state = 494;
				this.principal();
				}
				break;
			case 23:
				localctx = new SetTablePropertiesContext(this, localctx);
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 496;
				this.match(trinoSqlParser.ALTER_);
				this.state = 497;
				this.match(trinoSqlParser.TABLE_);
				this.state = 498;
				(localctx as SetTablePropertiesContext)._tableName = this.qualifiedName();
				this.state = 499;
				this.match(trinoSqlParser.SET_);
				this.state = 500;
				this.match(trinoSqlParser.PROPERTIES_);
				this.state = 501;
				this.propertyAssignments();
				}
				break;
			case 24:
				localctx = new TableExecuteContext(this, localctx);
				this.enterOuterAlt(localctx, 24);
				{
				this.state = 503;
				this.match(trinoSqlParser.ALTER_);
				this.state = 504;
				this.match(trinoSqlParser.TABLE_);
				this.state = 505;
				(localctx as TableExecuteContext)._tableName = this.qualifiedName();
				this.state = 506;
				this.match(trinoSqlParser.EXECUTE_);
				this.state = 507;
				(localctx as TableExecuteContext)._procedureName = this.identifier();
				this.state = 520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===292) {
					{
					this.state = 508;
					this.match(trinoSqlParser.LPAREN_);
					this.state = 517;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3220895422) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3451322097) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 1996275689) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4127189835) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 3758092287) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 4159700969) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4260888031) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4008640495) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 562167099) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 16760833) !== 0)) {
						{
						this.state = 509;
						this.callArgument();
						this.state = 514;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===290) {
							{
							{
							this.state = 510;
							this.match(trinoSqlParser.COMMA_);
							this.state = 511;
							this.callArgument();
							}
							}
							this.state = 516;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
					}

					this.state = 519;
					this.match(trinoSqlParser.RPAREN_);
					}
				}

				this.state = 524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===265) {
					{
					this.state = 522;
					this.match(trinoSqlParser.WHERE_);
					this.state = 523;
					(localctx as TableExecuteContext)._where = this.booleanExpression(0);
					}
				}

				}
				break;
			case 25:
				localctx = new AnalyzeContext(this, localctx);
				this.enterOuterAlt(localctx, 25);
				{
				this.state = 526;
				this.match(trinoSqlParser.ANALYZE_);
				this.state = 527;
				this.qualifiedName();
				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===267) {
					{
					this.state = 528;
					this.match(trinoSqlParser.WITH_);
					this.state = 529;
					this.properties();
					}
				}

				}
				break;
			case 26:
				localctx = new CreateMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 26);
				{
				this.state = 532;
				this.match(trinoSqlParser.CREATE_);
				this.state = 535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===162) {
					{
					this.state = 533;
					this.match(trinoSqlParser.OR_);
					this.state = 534;
					this.match(trinoSqlParser.REPLACE_);
					}
				}

				this.state = 537;
				this.match(trinoSqlParser.MATERIALIZED_);
				this.state = 538;
				this.match(trinoSqlParser.VIEW_);
				this.state = 542;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 539;
					this.match(trinoSqlParser.IF_);
					this.state = 540;
					this.match(trinoSqlParser.NOT_);
					this.state = 541;
					this.match(trinoSqlParser.EXISTS_);
					}
					break;
				}
				this.state = 544;
				this.qualifiedName();
				this.state = 548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===84) {
					{
					this.state = 545;
					this.match(trinoSqlParser.GRACE_);
					this.state = 546;
					this.match(trinoSqlParser.PERIOD_);
					this.state = 547;
					this.interval();
					}
				}

				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26) {
					{
					this.state = 550;
					this.match(trinoSqlParser.COMMENT_);
					this.state = 551;
					this.string_();
					}
				}

				this.state = 556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===267) {
					{
					this.state = 554;
					this.match(trinoSqlParser.WITH_);
					this.state = 555;
					this.properties();
					}
				}

				this.state = 558;
				this.match(trinoSqlParser.AS_);
				this.state = 559;
				this.query();
				}
				break;
			case 27:
				localctx = new CreateViewContext(this, localctx);
				this.enterOuterAlt(localctx, 27);
				{
				this.state = 561;
				this.match(trinoSqlParser.CREATE_);
				this.state = 564;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===162) {
					{
					this.state = 562;
					this.match(trinoSqlParser.OR_);
					this.state = 563;
					this.match(trinoSqlParser.REPLACE_);
					}
				}

				this.state = 566;
				this.match(trinoSqlParser.VIEW_);
				this.state = 567;
				this.qualifiedName();
				this.state = 570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26) {
					{
					this.state = 568;
					this.match(trinoSqlParser.COMMENT_);
					this.state = 569;
					this.string_();
					}
				}

				this.state = 574;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===210) {
					{
					this.state = 572;
					this.match(trinoSqlParser.SECURITY_);
					this.state = 573;
					_la = this._input.LA(1);
					if(!(_la===50 || _la===105)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 576;
				this.match(trinoSqlParser.AS_);
				this.state = 577;
				this.query();
				}
				break;
			case 28:
				localctx = new RefreshMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 28);
				{
				this.state = 579;
				this.match(trinoSqlParser.REFRESH_);
				this.state = 580;
				this.match(trinoSqlParser.MATERIALIZED_);
				this.state = 581;
				this.match(trinoSqlParser.VIEW_);
				this.state = 582;
				this.qualifiedName();
				}
				break;
			case 29:
				localctx = new DropMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 29);
				{
				this.state = 583;
				this.match(trinoSqlParser.DROP_);
				this.state = 584;
				this.match(trinoSqlParser.MATERIALIZED_);
				this.state = 585;
				this.match(trinoSqlParser.VIEW_);
				this.state = 588;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
				case 1:
					{
					this.state = 586;
					this.match(trinoSqlParser.IF_);
					this.state = 587;
					this.match(trinoSqlParser.EXISTS_);
					}
					break;
				}
				this.state = 590;
				this.qualifiedName();
				}
				break;
			case 30:
				localctx = new RenameMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 30);
				{
				this.state = 591;
				this.match(trinoSqlParser.ALTER_);
				this.state = 592;
				this.match(trinoSqlParser.MATERIALIZED_);
				this.state = 593;
				this.match(trinoSqlParser.VIEW_);
				this.state = 596;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 594;
					this.match(trinoSqlParser.IF_);
					this.state = 595;
					this.match(trinoSqlParser.EXISTS_);
					}
					break;
				}
				this.state = 598;
				(localctx as RenameMaterializedViewContext)._from_ = this.qualifiedName();
				this.state = 599;
				this.match(trinoSqlParser.RENAME_);
				this.state = 600;
				this.match(trinoSqlParser.TO_);
				this.state = 601;
				(localctx as RenameMaterializedViewContext)._to = this.qualifiedName();
				}
				break;
			case 31:
				localctx = new SetMaterializedViewPropertiesContext(this, localctx);
				this.enterOuterAlt(localctx, 31);
				{
				this.state = 603;
				this.match(trinoSqlParser.ALTER_);
				this.state = 604;
				this.match(trinoSqlParser.MATERIALIZED_);
				this.state = 605;
				this.match(trinoSqlParser.VIEW_);
				this.state = 606;
				this.qualifiedName();
				this.state = 607;
				this.match(trinoSqlParser.SET_);
				this.state = 608;
				this.match(trinoSqlParser.PROPERTIES_);
				this.state = 609;
				this.propertyAssignments();
				}
				break;
			case 32:
				localctx = new DropViewContext(this, localctx);
				this.enterOuterAlt(localctx, 32);
				{
				this.state = 611;
				this.match(trinoSqlParser.DROP_);
				this.state = 612;
				this.match(trinoSqlParser.VIEW_);
				this.state = 615;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 613;
					this.match(trinoSqlParser.IF_);
					this.state = 614;
					this.match(trinoSqlParser.EXISTS_);
					}
					break;
				}
				this.state = 617;
				this.qualifiedName();
				}
				break;
			case 33:
				localctx = new RenameViewContext(this, localctx);
				this.enterOuterAlt(localctx, 33);
				{
				this.state = 618;
				this.match(trinoSqlParser.ALTER_);
				this.state = 619;
				this.match(trinoSqlParser.VIEW_);
				this.state = 620;
				(localctx as RenameViewContext)._from_ = this.qualifiedName();
				this.state = 621;
				this.match(trinoSqlParser.RENAME_);
				this.state = 622;
				this.match(trinoSqlParser.TO_);
				this.state = 623;
				(localctx as RenameViewContext)._to = this.qualifiedName();
				}
				break;
			case 34:
				localctx = new SetViewAuthorizationContext(this, localctx);
				this.enterOuterAlt(localctx, 34);
				{
				this.state = 625;
				this.match(trinoSqlParser.ALTER_);
				this.state = 626;
				this.match(trinoSqlParser.VIEW_);
				this.state = 627;
				(localctx as SetViewAuthorizationContext)._from_ = this.qualifiedName();
				this.state = 628;
				this.match(trinoSqlParser.SET_);
				this.state = 629;
				this.match(trinoSqlParser.AUTHORIZATION_);
				this.state = 630;
				this.principal();
				}
				break;
			case 35:
				localctx = new CallContext(this, localctx);
				this.enterOuterAlt(localctx, 35);
				{
				this.state = 632;
				this.match(trinoSqlParser.CALL_);
				this.state = 633;
				this.qualifiedName();
				this.state = 634;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3220895422) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3451322097) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 1996275689) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4127189835) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 3758092287) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 4159700969) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4260888031) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4008640495) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 562167099) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 16760833) !== 0)) {
					{
					this.state = 635;
					this.callArgument();
					this.state = 640;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 636;
						this.match(trinoSqlParser.COMMA_);
						this.state = 637;
						this.callArgument();
						}
						}
						this.state = 642;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 645;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 36:
				localctx = new CreateRoleContext(this, localctx);
				this.enterOuterAlt(localctx, 36);
				{
				this.state = 647;
				this.match(trinoSqlParser.CREATE_);
				this.state = 648;
				this.match(trinoSqlParser.ROLE_);
				this.state = 649;
				(localctx as CreateRoleContext)._name = this.identifier();
				this.state = 653;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===267) {
					{
					this.state = 650;
					this.match(trinoSqlParser.WITH_);
					this.state = 651;
					this.match(trinoSqlParser.ADMIN_);
					this.state = 652;
					this.grantor();
					}
				}

				this.state = 657;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===96) {
					{
					this.state = 655;
					this.match(trinoSqlParser.IN_);
					this.state = 656;
					(localctx as CreateRoleContext)._catalog = this.identifier();
					}
				}

				}
				break;
			case 37:
				localctx = new DropRoleContext(this, localctx);
				this.enterOuterAlt(localctx, 37);
				{
				this.state = 659;
				this.match(trinoSqlParser.DROP_);
				this.state = 660;
				this.match(trinoSqlParser.ROLE_);
				this.state = 661;
				(localctx as DropRoleContext)._name = this.identifier();
				this.state = 664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===96) {
					{
					this.state = 662;
					this.match(trinoSqlParser.IN_);
					this.state = 663;
					(localctx as DropRoleContext)._catalog = this.identifier();
					}
				}

				}
				break;
			case 38:
				localctx = new GrantRolesContext(this, localctx);
				this.enterOuterAlt(localctx, 38);
				{
				this.state = 666;
				this.match(trinoSqlParser.GRANT_);
				this.state = 667;
				this.roles();
				this.state = 668;
				this.match(trinoSqlParser.TO_);
				this.state = 669;
				this.principal();
				this.state = 674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 670;
					this.match(trinoSqlParser.COMMA_);
					this.state = 671;
					this.principal();
					}
					}
					this.state = 676;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 680;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===267) {
					{
					this.state = 677;
					this.match(trinoSqlParser.WITH_);
					this.state = 678;
					this.match(trinoSqlParser.ADMIN_);
					this.state = 679;
					this.match(trinoSqlParser.OPTION_);
					}
				}

				this.state = 685;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===86) {
					{
					this.state = 682;
					this.match(trinoSqlParser.GRANTED_);
					this.state = 683;
					this.match(trinoSqlParser.BY_);
					this.state = 684;
					this.grantor();
					}
				}

				this.state = 689;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===96) {
					{
					this.state = 687;
					this.match(trinoSqlParser.IN_);
					this.state = 688;
					(localctx as GrantRolesContext)._catalog = this.identifier();
					}
				}

				}
				break;
			case 39:
				localctx = new RevokeRolesContext(this, localctx);
				this.enterOuterAlt(localctx, 39);
				{
				this.state = 691;
				this.match(trinoSqlParser.REVOKE_);
				this.state = 695;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 692;
					this.match(trinoSqlParser.ADMIN_);
					this.state = 693;
					this.match(trinoSqlParser.OPTION_);
					this.state = 694;
					this.match(trinoSqlParser.FOR_);
					}
					break;
				}
				this.state = 697;
				this.roles();
				this.state = 698;
				this.match(trinoSqlParser.FROM_);
				this.state = 699;
				this.principal();
				this.state = 704;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 700;
					this.match(trinoSqlParser.COMMA_);
					this.state = 701;
					this.principal();
					}
					}
					this.state = 706;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 710;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===86) {
					{
					this.state = 707;
					this.match(trinoSqlParser.GRANTED_);
					this.state = 708;
					this.match(trinoSqlParser.BY_);
					this.state = 709;
					this.grantor();
					}
				}

				this.state = 714;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===96) {
					{
					this.state = 712;
					this.match(trinoSqlParser.IN_);
					this.state = 713;
					(localctx as RevokeRolesContext)._catalog = this.identifier();
					}
				}

				}
				break;
			case 40:
				localctx = new SetRoleContext(this, localctx);
				this.enterOuterAlt(localctx, 40);
				{
				this.state = 716;
				this.match(trinoSqlParser.SET_);
				this.state = 717;
				this.match(trinoSqlParser.ROLE_);
				this.state = 721;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
				case 1:
					{
					this.state = 718;
					this.match(trinoSqlParser.ALL_);
					}
					break;
				case 2:
					{
					this.state = 719;
					this.match(trinoSqlParser.NONE_);
					}
					break;
				case 3:
					{
					this.state = 720;
					(localctx as SetRoleContext)._role = this.identifier();
					}
					break;
				}
				this.state = 725;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===96) {
					{
					this.state = 723;
					this.match(trinoSqlParser.IN_);
					this.state = 724;
					(localctx as SetRoleContext)._catalog = this.identifier();
					}
				}

				}
				break;
			case 41:
				localctx = new GrantContext(this, localctx);
				this.enterOuterAlt(localctx, 41);
				{
				this.state = 727;
				this.match(trinoSqlParser.GRANT_);
				this.state = 738;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 33:
				case 51:
				case 101:
				case 212:
				case 251:
					{
					this.state = 728;
					this.privilege();
					this.state = 733;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 729;
						this.match(trinoSqlParser.COMMA_);
						this.state = 730;
						this.privilege();
						}
						}
						this.state = 735;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 5:
					{
					this.state = 736;
					this.match(trinoSqlParser.ALL_);
					this.state = 737;
					this.match(trinoSqlParser.PRIVILEGES_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 740;
				this.match(trinoSqlParser.ON_);
				this.state = 742;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
				case 1:
					{
					this.state = 741;
					_la = this._input.LA(1);
					if(!(_la===207 || _la===225)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 744;
				this.qualifiedName();
				this.state = 745;
				this.match(trinoSqlParser.TO_);
				this.state = 746;
				(localctx as GrantContext)._grantee = this.principal();
				this.state = 750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===267) {
					{
					this.state = 747;
					this.match(trinoSqlParser.WITH_);
					this.state = 748;
					this.match(trinoSqlParser.GRANT_);
					this.state = 749;
					this.match(trinoSqlParser.OPTION_);
					}
				}

				}
				break;
			case 42:
				localctx = new DenyContext(this, localctx);
				this.enterOuterAlt(localctx, 42);
				{
				this.state = 752;
				this.match(trinoSqlParser.DENY_);
				this.state = 763;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 33:
				case 51:
				case 101:
				case 212:
				case 251:
					{
					this.state = 753;
					this.privilege();
					this.state = 758;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 754;
						this.match(trinoSqlParser.COMMA_);
						this.state = 755;
						this.privilege();
						}
						}
						this.state = 760;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 5:
					{
					this.state = 761;
					this.match(trinoSqlParser.ALL_);
					this.state = 762;
					this.match(trinoSqlParser.PRIVILEGES_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 765;
				this.match(trinoSqlParser.ON_);
				this.state = 767;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
				case 1:
					{
					this.state = 766;
					_la = this._input.LA(1);
					if(!(_la===207 || _la===225)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 769;
				this.qualifiedName();
				this.state = 770;
				this.match(trinoSqlParser.TO_);
				this.state = 771;
				(localctx as DenyContext)._grantee = this.principal();
				}
				break;
			case 43:
				localctx = new RevokeContext(this, localctx);
				this.enterOuterAlt(localctx, 43);
				{
				this.state = 773;
				this.match(trinoSqlParser.REVOKE_);
				this.state = 777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===85) {
					{
					this.state = 774;
					this.match(trinoSqlParser.GRANT_);
					this.state = 775;
					this.match(trinoSqlParser.OPTION_);
					this.state = 776;
					this.match(trinoSqlParser.FOR_);
					}
				}

				this.state = 789;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 33:
				case 51:
				case 101:
				case 212:
				case 251:
					{
					this.state = 779;
					this.privilege();
					this.state = 784;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 780;
						this.match(trinoSqlParser.COMMA_);
						this.state = 781;
						this.privilege();
						}
						}
						this.state = 786;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 5:
					{
					this.state = 787;
					this.match(trinoSqlParser.ALL_);
					this.state = 788;
					this.match(trinoSqlParser.PRIVILEGES_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 791;
				this.match(trinoSqlParser.ON_);
				this.state = 793;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 792;
					_la = this._input.LA(1);
					if(!(_la===207 || _la===225)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 795;
				this.qualifiedName();
				this.state = 796;
				this.match(trinoSqlParser.FROM_);
				this.state = 797;
				(localctx as RevokeContext)._grantee = this.principal();
				}
				break;
			case 44:
				localctx = new ShowGrantsContext(this, localctx);
				this.enterOuterAlt(localctx, 44);
				{
				this.state = 799;
				this.match(trinoSqlParser.SHOW_);
				this.state = 800;
				this.match(trinoSqlParser.GRANTS_);
				this.state = 806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===158) {
					{
					this.state = 801;
					this.match(trinoSqlParser.ON_);
					this.state = 803;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===225) {
						{
						this.state = 802;
						this.match(trinoSqlParser.TABLE_);
						}
					}

					this.state = 805;
					this.qualifiedName();
					}
				}

				}
				break;
			case 45:
				localctx = new ExplainContext(this, localctx);
				this.enterOuterAlt(localctx, 45);
				{
				this.state = 808;
				this.match(trinoSqlParser.EXPLAIN_);
				this.state = 820;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 78, this._ctx) ) {
				case 1:
					{
					this.state = 809;
					this.match(trinoSqlParser.LPAREN_);
					this.state = 810;
					this.explainOption();
					this.state = 815;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 811;
						this.match(trinoSqlParser.COMMA_);
						this.state = 812;
						this.explainOption();
						}
						}
						this.state = 817;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 818;
					this.match(trinoSqlParser.RPAREN_);
					}
					break;
				}
				this.state = 822;
				this.statement();
				}
				break;
			case 46:
				localctx = new ExplainAnalyzeContext(this, localctx);
				this.enterOuterAlt(localctx, 46);
				{
				this.state = 823;
				this.match(trinoSqlParser.EXPLAIN_);
				this.state = 824;
				this.match(trinoSqlParser.ANALYZE_);
				this.state = 826;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===261) {
					{
					this.state = 825;
					this.match(trinoSqlParser.VERBOSE_);
					}
				}

				this.state = 828;
				this.statement();
				}
				break;
			case 47:
				localctx = new ShowCreateTableContext(this, localctx);
				this.enterOuterAlt(localctx, 47);
				{
				this.state = 829;
				this.match(trinoSqlParser.SHOW_);
				this.state = 830;
				this.match(trinoSqlParser.CREATE_);
				this.state = 831;
				this.match(trinoSqlParser.TABLE_);
				this.state = 832;
				this.qualifiedName();
				}
				break;
			case 48:
				localctx = new ShowCreateSchemaContext(this, localctx);
				this.enterOuterAlt(localctx, 48);
				{
				this.state = 833;
				this.match(trinoSqlParser.SHOW_);
				this.state = 834;
				this.match(trinoSqlParser.CREATE_);
				this.state = 835;
				this.match(trinoSqlParser.SCHEMA_);
				this.state = 836;
				this.qualifiedName();
				}
				break;
			case 49:
				localctx = new ShowCreateViewContext(this, localctx);
				this.enterOuterAlt(localctx, 49);
				{
				this.state = 837;
				this.match(trinoSqlParser.SHOW_);
				this.state = 838;
				this.match(trinoSqlParser.CREATE_);
				this.state = 839;
				this.match(trinoSqlParser.VIEW_);
				this.state = 840;
				this.qualifiedName();
				}
				break;
			case 50:
				localctx = new ShowCreateMaterializedViewContext(this, localctx);
				this.enterOuterAlt(localctx, 50);
				{
				this.state = 841;
				this.match(trinoSqlParser.SHOW_);
				this.state = 842;
				this.match(trinoSqlParser.CREATE_);
				this.state = 843;
				this.match(trinoSqlParser.MATERIALIZED_);
				this.state = 844;
				this.match(trinoSqlParser.VIEW_);
				this.state = 845;
				this.qualifiedName();
				}
				break;
			case 51:
				localctx = new ShowTablesContext(this, localctx);
				this.enterOuterAlt(localctx, 51);
				{
				this.state = 846;
				this.match(trinoSqlParser.SHOW_);
				this.state = 847;
				this.match(trinoSqlParser.TABLES_);
				this.state = 850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===81 || _la===96) {
					{
					this.state = 848;
					_la = this._input.LA(1);
					if(!(_la===81 || _la===96)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 849;
					this.qualifiedName();
					}
				}

				this.state = 858;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===124) {
					{
					this.state = 852;
					this.match(trinoSqlParser.LIKE_);
					this.state = 853;
					(localctx as ShowTablesContext)._pattern = this.string_();
					this.state = 856;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===66) {
						{
						this.state = 854;
						this.match(trinoSqlParser.ESCAPE_);
						this.state = 855;
						(localctx as ShowTablesContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 52:
				localctx = new ShowSchemasContext(this, localctx);
				this.enterOuterAlt(localctx, 52);
				{
				this.state = 860;
				this.match(trinoSqlParser.SHOW_);
				this.state = 861;
				this.match(trinoSqlParser.SCHEMAS_);
				this.state = 864;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===81 || _la===96) {
					{
					this.state = 862;
					_la = this._input.LA(1);
					if(!(_la===81 || _la===96)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 863;
					this.identifier();
					}
				}

				this.state = 872;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===124) {
					{
					this.state = 866;
					this.match(trinoSqlParser.LIKE_);
					this.state = 867;
					(localctx as ShowSchemasContext)._pattern = this.string_();
					this.state = 870;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===66) {
						{
						this.state = 868;
						this.match(trinoSqlParser.ESCAPE_);
						this.state = 869;
						(localctx as ShowSchemasContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 53:
				localctx = new ShowCatalogsContext(this, localctx);
				this.enterOuterAlt(localctx, 53);
				{
				this.state = 874;
				this.match(trinoSqlParser.SHOW_);
				this.state = 875;
				this.match(trinoSqlParser.CATALOGS_);
				this.state = 882;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===124) {
					{
					this.state = 876;
					this.match(trinoSqlParser.LIKE_);
					this.state = 877;
					(localctx as ShowCatalogsContext)._pattern = this.string_();
					this.state = 880;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===66) {
						{
						this.state = 878;
						this.match(trinoSqlParser.ESCAPE_);
						this.state = 879;
						(localctx as ShowCatalogsContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 54:
				localctx = new ShowColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 54);
				{
				this.state = 884;
				this.match(trinoSqlParser.SHOW_);
				this.state = 885;
				this.match(trinoSqlParser.COLUMNS_);
				this.state = 886;
				_la = this._input.LA(1);
				if(!(_la===81 || _la===96)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 888;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3214603966) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3451314193) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 1962720841) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 1442327371) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 4022859775) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & 4278059005) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 3753836475) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 4223384059) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 16295) !== 0) || ((((_la - 312)) & ~0x1F) === 0 && ((1 << (_la - 312)) & 15) !== 0)) {
					{
					this.state = 887;
					this.qualifiedName();
					}
				}

				this.state = 896;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===124) {
					{
					this.state = 890;
					this.match(trinoSqlParser.LIKE_);
					this.state = 891;
					(localctx as ShowColumnsContext)._pattern = this.string_();
					this.state = 894;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===66) {
						{
						this.state = 892;
						this.match(trinoSqlParser.ESCAPE_);
						this.state = 893;
						(localctx as ShowColumnsContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 55:
				localctx = new ShowStatsContext(this, localctx);
				this.enterOuterAlt(localctx, 55);
				{
				this.state = 898;
				this.match(trinoSqlParser.SHOW_);
				this.state = 899;
				this.match(trinoSqlParser.STATS_);
				this.state = 900;
				this.match(trinoSqlParser.FOR_);
				this.state = 901;
				this.qualifiedName();
				}
				break;
			case 56:
				localctx = new ShowStatsForQueryContext(this, localctx);
				this.enterOuterAlt(localctx, 56);
				{
				this.state = 902;
				this.match(trinoSqlParser.SHOW_);
				this.state = 903;
				this.match(trinoSqlParser.STATS_);
				this.state = 904;
				this.match(trinoSqlParser.FOR_);
				this.state = 905;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 906;
				this.query();
				this.state = 907;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 57:
				localctx = new ShowRolesContext(this, localctx);
				this.enterOuterAlt(localctx, 57);
				{
				this.state = 909;
				this.match(trinoSqlParser.SHOW_);
				this.state = 911;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===36) {
					{
					this.state = 910;
					this.match(trinoSqlParser.CURRENT_);
					}
				}

				this.state = 913;
				this.match(trinoSqlParser.ROLES_);
				this.state = 916;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===81 || _la===96) {
					{
					this.state = 914;
					_la = this._input.LA(1);
					if(!(_la===81 || _la===96)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 915;
					this.identifier();
					}
				}

				}
				break;
			case 58:
				localctx = new ShowRoleGrantsContext(this, localctx);
				this.enterOuterAlt(localctx, 58);
				{
				this.state = 918;
				this.match(trinoSqlParser.SHOW_);
				this.state = 919;
				this.match(trinoSqlParser.ROLE_);
				this.state = 920;
				this.match(trinoSqlParser.GRANTS_);
				this.state = 923;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===81 || _la===96) {
					{
					this.state = 921;
					_la = this._input.LA(1);
					if(!(_la===81 || _la===96)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 922;
					this.identifier();
					}
				}

				}
				break;
			case 59:
				localctx = new ShowColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 59);
				{
				this.state = 925;
				this.match(trinoSqlParser.DESCRIBE_);
				this.state = 926;
				this.qualifiedName();
				}
				break;
			case 60:
				localctx = new ShowColumnsContext(this, localctx);
				this.enterOuterAlt(localctx, 60);
				{
				this.state = 927;
				this.match(trinoSqlParser.DESC_);
				this.state = 928;
				this.qualifiedName();
				}
				break;
			case 61:
				localctx = new ShowFunctionsContext(this, localctx);
				this.enterOuterAlt(localctx, 61);
				{
				this.state = 929;
				this.match(trinoSqlParser.SHOW_);
				this.state = 930;
				this.match(trinoSqlParser.FUNCTIONS_);
				this.state = 937;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===124) {
					{
					this.state = 931;
					this.match(trinoSqlParser.LIKE_);
					this.state = 932;
					(localctx as ShowFunctionsContext)._pattern = this.string_();
					this.state = 935;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===66) {
						{
						this.state = 933;
						this.match(trinoSqlParser.ESCAPE_);
						this.state = 934;
						(localctx as ShowFunctionsContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 62:
				localctx = new ShowSessionContext(this, localctx);
				this.enterOuterAlt(localctx, 62);
				{
				this.state = 939;
				this.match(trinoSqlParser.SHOW_);
				this.state = 940;
				this.match(trinoSqlParser.SESSION_);
				this.state = 947;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===124) {
					{
					this.state = 941;
					this.match(trinoSqlParser.LIKE_);
					this.state = 942;
					(localctx as ShowSessionContext)._pattern = this.string_();
					this.state = 945;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===66) {
						{
						this.state = 943;
						this.match(trinoSqlParser.ESCAPE_);
						this.state = 944;
						(localctx as ShowSessionContext)._escape = this.string_();
						}
					}

					}
				}

				}
				break;
			case 63:
				localctx = new SetSessionContext(this, localctx);
				this.enterOuterAlt(localctx, 63);
				{
				this.state = 949;
				this.match(trinoSqlParser.SET_);
				this.state = 950;
				this.match(trinoSqlParser.SESSION_);
				this.state = 951;
				this.qualifiedName();
				this.state = 952;
				this.match(trinoSqlParser.EQ_);
				this.state = 953;
				this.expression();
				}
				break;
			case 64:
				localctx = new ResetSessionContext(this, localctx);
				this.enterOuterAlt(localctx, 64);
				{
				this.state = 955;
				this.match(trinoSqlParser.RESET_);
				this.state = 956;
				this.match(trinoSqlParser.SESSION_);
				this.state = 957;
				this.qualifiedName();
				}
				break;
			case 65:
				localctx = new StartTransactionContext(this, localctx);
				this.enterOuterAlt(localctx, 65);
				{
				this.state = 958;
				this.match(trinoSqlParser.START_);
				this.state = 959;
				this.match(trinoSqlParser.TRANSACTION_);
				this.state = 968;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===108 || _la===187) {
					{
					this.state = 960;
					this.transactionMode();
					this.state = 965;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 961;
						this.match(trinoSqlParser.COMMA_);
						this.state = 962;
						this.transactionMode();
						}
						}
						this.state = 967;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;
			case 66:
				localctx = new CommitContext(this, localctx);
				this.enterOuterAlt(localctx, 66);
				{
				this.state = 970;
				this.match(trinoSqlParser.COMMIT_);
				this.state = 972;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===270) {
					{
					this.state = 971;
					this.match(trinoSqlParser.WORK_);
					}
				}

				}
				break;
			case 67:
				localctx = new RollbackContext(this, localctx);
				this.enterOuterAlt(localctx, 67);
				{
				this.state = 974;
				this.match(trinoSqlParser.ROLLBACK_);
				this.state = 976;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===270) {
					{
					this.state = 975;
					this.match(trinoSqlParser.WORK_);
					}
				}

				}
				break;
			case 68:
				localctx = new PrepareContext(this, localctx);
				this.enterOuterAlt(localctx, 68);
				{
				this.state = 978;
				this.match(trinoSqlParser.PREPARE_);
				this.state = 979;
				this.identifier();
				this.state = 980;
				this.match(trinoSqlParser.FROM_);
				this.state = 981;
				this.statement();
				}
				break;
			case 69:
				localctx = new DeallocateContext(this, localctx);
				this.enterOuterAlt(localctx, 69);
				{
				this.state = 983;
				this.match(trinoSqlParser.DEALLOCATE_);
				this.state = 984;
				this.match(trinoSqlParser.PREPARE_);
				this.state = 985;
				this.identifier();
				}
				break;
			case 70:
				localctx = new ExecuteContext(this, localctx);
				this.enterOuterAlt(localctx, 70);
				{
				this.state = 986;
				this.match(trinoSqlParser.EXECUTE_);
				this.state = 987;
				this.identifier();
				this.state = 997;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===254) {
					{
					this.state = 988;
					this.match(trinoSqlParser.USING_);
					this.state = 989;
					this.expression();
					this.state = 994;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 990;
						this.match(trinoSqlParser.COMMA_);
						this.state = 991;
						this.expression();
						}
						}
						this.state = 996;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;
			case 71:
				localctx = new DescribeInputContext(this, localctx);
				this.enterOuterAlt(localctx, 71);
				{
				this.state = 999;
				this.match(trinoSqlParser.DESCRIBE_);
				this.state = 1000;
				this.match(trinoSqlParser.INPUT_);
				this.state = 1001;
				this.identifier();
				}
				break;
			case 72:
				localctx = new DescribeOutputContext(this, localctx);
				this.enterOuterAlt(localctx, 72);
				{
				this.state = 1002;
				this.match(trinoSqlParser.DESCRIBE_);
				this.state = 1003;
				this.match(trinoSqlParser.OUTPUT_);
				this.state = 1004;
				this.identifier();
				}
				break;
			case 73:
				localctx = new SetPathContext(this, localctx);
				this.enterOuterAlt(localctx, 73);
				{
				this.state = 1005;
				this.match(trinoSqlParser.SET_);
				this.state = 1006;
				this.match(trinoSqlParser.PATH_);
				this.state = 1007;
				this.pathSpecification();
				}
				break;
			case 74:
				localctx = new SetTimeZoneContext(this, localctx);
				this.enterOuterAlt(localctx, 74);
				{
				this.state = 1008;
				this.match(trinoSqlParser.SET_);
				this.state = 1009;
				this.match(trinoSqlParser.TIME_);
				this.state = 1010;
				this.match(trinoSqlParser.ZONE_);
				this.state = 1013;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 1011;
					this.match(trinoSqlParser.LOCAL_);
					}
					break;
				case 2:
					{
					this.state = 1012;
					this.expression();
					}
					break;
				}
				}
				break;
			case 75:
				localctx = new UpdateContext(this, localctx);
				this.enterOuterAlt(localctx, 75);
				{
				this.state = 1015;
				this.match(trinoSqlParser.UPDATE_);
				this.state = 1016;
				this.qualifiedName();
				this.state = 1017;
				this.match(trinoSqlParser.SET_);
				this.state = 1018;
				this.updateAssignment();
				this.state = 1023;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 1019;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1020;
					this.updateAssignment();
					}
					}
					this.state = 1025;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===265) {
					{
					this.state = 1026;
					this.match(trinoSqlParser.WHERE_);
					this.state = 1027;
					(localctx as UpdateContext)._where = this.booleanExpression(0);
					}
				}

				}
				break;
			case 76:
				localctx = new MergeContext(this, localctx);
				this.enterOuterAlt(localctx, 76);
				{
				this.state = 1030;
				this.match(trinoSqlParser.MERGE_);
				this.state = 1031;
				this.match(trinoSqlParser.INTO_);
				this.state = 1032;
				this.qualifiedName();
				this.state = 1037;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3214606014) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3451314193) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 1962720841) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 1442327371) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 4022859775) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & 4278059005) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 3753836475) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 4223384059) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 16295) !== 0) || ((((_la - 312)) & ~0x1F) === 0 && ((1 << (_la - 312)) & 15) !== 0)) {
					{
					this.state = 1034;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===11) {
						{
						this.state = 1033;
						this.match(trinoSqlParser.AS_);
						}
					}

					this.state = 1036;
					this.identifier();
					}
				}

				this.state = 1039;
				this.match(trinoSqlParser.USING_);
				this.state = 1040;
				this.relation(0);
				this.state = 1041;
				this.match(trinoSqlParser.ON_);
				this.state = 1042;
				this.expression();
				this.state = 1044;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1043;
					this.mergeCase();
					}
					}
					this.state = 1046;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===264);
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
	public query(): QueryContext {
		let localctx: QueryContext = new QueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, trinoSqlParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1051;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===267) {
				{
				this.state = 1050;
				this.with_();
				}
			}

			this.state = 1053;
			this.queryNoWith();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public with_(): WithContext {
		let localctx: WithContext = new WithContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, trinoSqlParser.RULE_with);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1055;
			this.match(trinoSqlParser.WITH_);
			this.state = 1057;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===188) {
				{
				this.state = 1056;
				this.match(trinoSqlParser.RECURSIVE_);
				}
			}

			this.state = 1059;
			this.namedQuery();
			this.state = 1064;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===290) {
				{
				{
				this.state = 1060;
				this.match(trinoSqlParser.COMMA_);
				this.state = 1061;
				this.namedQuery();
				}
				}
				this.state = 1066;
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
	public tableElement(): TableElementContext {
		let localctx: TableElementContext = new TableElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, trinoSqlParser.RULE_tableElement);
		try {
			this.state = 1069;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 7:
			case 9:
			case 10:
			case 12:
			case 13:
			case 14:
			case 15:
			case 17:
			case 19:
			case 20:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 31:
			case 32:
			case 36:
			case 45:
			case 46:
			case 47:
			case 49:
			case 50:
			case 52:
			case 53:
			case 55:
			case 56:
			case 58:
			case 59:
			case 62:
			case 63:
			case 65:
			case 68:
			case 71:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 80:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 91:
			case 93:
			case 94:
			case 95:
			case 97:
			case 98:
			case 100:
			case 103:
			case 105:
			case 106:
			case 108:
			case 110:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 123:
			case 125:
			case 127:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 159:
			case 160:
			case 161:
			case 164:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 189:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 199:
			case 200:
			case 201:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 209:
			case 210:
			case 211:
			case 213:
			case 214:
			case 215:
			case 216:
			case 217:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 226:
			case 227:
			case 228:
			case 229:
			case 231:
			case 232:
			case 233:
			case 234:
			case 235:
			case 236:
			case 239:
			case 240:
			case 241:
			case 243:
			case 244:
			case 245:
			case 247:
			case 248:
			case 249:
			case 251:
			case 252:
			case 253:
			case 255:
			case 256:
			case 257:
			case 258:
			case 259:
			case 261:
			case 262:
			case 263:
			case 266:
			case 268:
			case 269:
			case 270:
			case 271:
			case 272:
			case 273:
			case 274:
			case 312:
			case 313:
			case 314:
			case 315:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1067;
				this.columnDefinition();
				}
				break;
			case 124:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1068;
				this.likeClause();
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
	public columnDefinition(): ColumnDefinitionContext {
		let localctx: ColumnDefinitionContext = new ColumnDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, trinoSqlParser.RULE_columnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1071;
			this.identifier();
			this.state = 1072;
			this.type_(0);
			this.state = 1075;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===150) {
				{
				this.state = 1073;
				this.match(trinoSqlParser.NOT_);
				this.state = 1074;
				this.match(trinoSqlParser.NULL_);
				}
			}

			this.state = 1079;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 1077;
				this.match(trinoSqlParser.COMMENT_);
				this.state = 1078;
				this.string_();
				}
			}

			this.state = 1083;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===267) {
				{
				this.state = 1081;
				this.match(trinoSqlParser.WITH_);
				this.state = 1082;
				this.properties();
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
	public likeClause(): LikeClauseContext {
		let localctx: LikeClauseContext = new LikeClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, trinoSqlParser.RULE_likeClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1085;
			this.match(trinoSqlParser.LIKE_);
			this.state = 1086;
			this.qualifiedName();
			this.state = 1089;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68 || _la===97) {
				{
				this.state = 1087;
				localctx._optionType = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===68 || _la===97)) {
				    localctx._optionType = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1088;
				this.match(trinoSqlParser.PROPERTIES_);
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
	public properties(): PropertiesContext {
		let localctx: PropertiesContext = new PropertiesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, trinoSqlParser.RULE_properties);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1091;
			this.match(trinoSqlParser.LPAREN_);
			this.state = 1092;
			this.propertyAssignments();
			this.state = 1093;
			this.match(trinoSqlParser.RPAREN_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyAssignments(): PropertyAssignmentsContext {
		let localctx: PropertyAssignmentsContext = new PropertyAssignmentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, trinoSqlParser.RULE_propertyAssignments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1095;
			this.property();
			this.state = 1100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===290) {
				{
				{
				this.state = 1096;
				this.match(trinoSqlParser.COMMA_);
				this.state = 1097;
				this.property();
				}
				}
				this.state = 1102;
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
	public property(): PropertyContext {
		let localctx: PropertyContext = new PropertyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, trinoSqlParser.RULE_property);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1103;
			this.identifier();
			this.state = 1104;
			this.match(trinoSqlParser.EQ_);
			this.state = 1105;
			this.propertyValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyValue(): PropertyValueContext {
		let localctx: PropertyValueContext = new PropertyValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, trinoSqlParser.RULE_propertyValue);
		try {
			this.state = 1109;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				localctx = new DefaultPropertyValueContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1107;
				this.match(trinoSqlParser.DEFAULT_);
				}
				break;
			case 2:
				localctx = new NonDefaultPropertyValueContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1108;
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
	public queryNoWith(): QueryNoWithContext {
		let localctx: QueryNoWithContext = new QueryNoWithContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, trinoSqlParser.RULE_queryNoWith);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1111;
			this.queryTerm(0);
			this.state = 1122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===163) {
				{
				this.state = 1112;
				this.match(trinoSqlParser.ORDER_);
				this.state = 1113;
				this.match(trinoSqlParser.BY_);
				this.state = 1114;
				this.sortItem();
				this.state = 1119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 1115;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1116;
					this.sortItem();
					}
					}
					this.state = 1121;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===155) {
				{
				this.state = 1124;
				this.match(trinoSqlParser.OFFSET_);
				this.state = 1125;
				localctx._offset = this.rowCount();
				this.state = 1127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===203 || _la===204) {
					{
					this.state = 1126;
					_la = this._input.LA(1);
					if(!(_la===203 || _la===204)) {
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

			this.state = 1144;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 125:
				{
				this.state = 1131;
				this.match(trinoSqlParser.LIMIT_);
				this.state = 1132;
				localctx._limit = this.limitRowCount();
				}
				break;
			case 74:
				{
				this.state = 1133;
				this.match(trinoSqlParser.FETCH_);
				this.state = 1134;
				_la = this._input.LA(1);
				if(!(_la===77 || _la===142)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===287 || _la===309) {
					{
					this.state = 1135;
					localctx._fetchFirst = this.rowCount();
					}
				}

				this.state = 1138;
				_la = this._input.LA(1);
				if(!(_la===203 || _la===204)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1142;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 160:
					{
					this.state = 1139;
					this.match(trinoSqlParser.ONLY_);
					}
					break;
				case 267:
					{
					this.state = 1140;
					this.match(trinoSqlParser.WITH_);
					this.state = 1141;
					this.match(trinoSqlParser.TIES_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 267:
			case 291:
			case 293:
				break;
			default:
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
	public limitRowCount(): LimitRowCountContext {
		let localctx: LimitRowCountContext = new LimitRowCountContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, trinoSqlParser.RULE_limitRowCount);
		try {
			this.state = 1148;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1146;
				this.match(trinoSqlParser.ALL_);
				}
				break;
			case 287:
			case 309:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1147;
				this.rowCount();
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
	public rowCount(): RowCountContext {
		let localctx: RowCountContext = new RowCountContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, trinoSqlParser.RULE_rowCount);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1150;
			_la = this._input.LA(1);
			if(!(_la===287 || _la===309)) {
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
		let _startState: number = 40;
		this.enterRecursionRule(localctx, 40, trinoSqlParser.RULE_queryTerm, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new QueryTermDefaultContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 1153;
			this.queryPrimary();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1169;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 132, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1167;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
					case 1:
						{
						localctx = new SetOperationContext(this, new QueryTermContext(this, _parentctx, _parentState));
						(localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParser.RULE_queryTerm);
						this.state = 1155;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1156;
						(localctx as SetOperationContext)._operator = this.match(trinoSqlParser.INTERSECT_);
						this.state = 1158;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===5 || _la===57) {
							{
							this.state = 1157;
							this.setQuantifier();
							}
						}

						this.state = 1160;
						(localctx as SetOperationContext)._right = this.queryTerm(3);
						}
						break;
					case 2:
						{
						localctx = new SetOperationContext(this, new QueryTermContext(this, _parentctx, _parentState));
						(localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParser.RULE_queryTerm);
						this.state = 1161;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1162;
						(localctx as SetOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===67 || _la===246)) {
						    (localctx as SetOperationContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1164;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===5 || _la===57) {
							{
							this.state = 1163;
							this.setQuantifier();
							}
						}

						this.state = 1166;
						(localctx as SetOperationContext)._right = this.queryTerm(2);
						}
						break;
					}
					}
				}
				this.state = 1171;
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
	public queryPrimary(): QueryPrimaryContext {
		let localctx: QueryPrimaryContext = new QueryPrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, trinoSqlParser.RULE_queryPrimary);
		try {
			let _alt: number;
			this.state = 1188;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 212:
				localctx = new QueryPrimaryDefaultContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1172;
				this.querySpecification();
				}
				break;
			case 225:
				localctx = new TableContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1173;
				this.match(trinoSqlParser.TABLE_);
				this.state = 1174;
				this.qualifiedName();
				}
				break;
			case 260:
				localctx = new InlineTableContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1175;
				this.match(trinoSqlParser.VALUES_);
				this.state = 1176;
				this.expression();
				this.state = 1181;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 133, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1177;
						this.match(trinoSqlParser.COMMA_);
						this.state = 1178;
						this.expression();
						}
						}
					}
					this.state = 1183;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 133, this._ctx);
				}
				}
				break;
			case 292:
				localctx = new SubqueryContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1184;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1185;
				this.queryNoWith();
				this.state = 1186;
				this.match(trinoSqlParser.RPAREN_);
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
		this.enterRule(localctx, 44, trinoSqlParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1190;
			this.expression();
			this.state = 1192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12 || _la===53) {
				{
				this.state = 1191;
				localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===12 || _la===53)) {
				    localctx._ordering = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 1196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===153) {
				{
				this.state = 1194;
				this.match(trinoSqlParser.NULLS_);
				this.state = 1195;
				localctx._nullOrdering = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===77 || _la===119)) {
				    localctx._nullOrdering = this._errHandler.recoverInline(this);
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
	public querySpecification(): QuerySpecificationContext {
		let localctx: QuerySpecificationContext = new QuerySpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, trinoSqlParser.RULE_querySpecification);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1198;
			this.match(trinoSqlParser.SELECT_);
			this.state = 1200;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				{
				this.state = 1199;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1202;
			this.selectItem();
			this.state = 1207;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 138, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1203;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1204;
					this.selectItem();
					}
					}
				}
				this.state = 1209;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 138, this._ctx);
			}
			this.state = 1219;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				{
				this.state = 1210;
				this.match(trinoSqlParser.FROM_);
				this.state = 1211;
				this.relation(0);
				this.state = 1216;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 139, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1212;
						this.match(trinoSqlParser.COMMA_);
						this.state = 1213;
						this.relation(0);
						}
						}
					}
					this.state = 1218;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 139, this._ctx);
				}
				}
				break;
			}
			this.state = 1223;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 1221;
				this.match(trinoSqlParser.WHERE_);
				this.state = 1222;
				localctx._where = this.booleanExpression(0);
				}
				break;
			}
			this.state = 1228;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 1225;
				this.match(trinoSqlParser.GROUP_);
				this.state = 1226;
				this.match(trinoSqlParser.BY_);
				this.state = 1227;
				this.groupBy();
				}
				break;
			}
			this.state = 1232;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				{
				this.state = 1230;
				this.match(trinoSqlParser.HAVING_);
				this.state = 1231;
				localctx._having = this.booleanExpression(0);
				}
				break;
			}
			this.state = 1243;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 1234;
				this.match(trinoSqlParser.WINDOW_);
				this.state = 1235;
				this.windowDefinition();
				this.state = 1240;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 144, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1236;
						this.match(trinoSqlParser.COMMA_);
						this.state = 1237;
						this.windowDefinition();
						}
						}
					}
					this.state = 1242;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 144, this._ctx);
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
	public groupBy(): GroupByContext {
		let localctx: GroupByContext = new GroupByContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, trinoSqlParser.RULE_groupBy);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1246;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1245;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1248;
			this.groupingElement();
			this.state = 1253;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 147, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1249;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1250;
					this.groupingElement();
					}
					}
				}
				this.state = 1255;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 147, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupingElement(): GroupingElementContext {
		let localctx: GroupingElementContext = new GroupingElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, trinoSqlParser.RULE_groupingElement);
		let _la: number;
		try {
			this.state = 1296;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				localctx = new SingleGroupingSetContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1256;
				this.groupingSet();
				}
				break;
			case 2:
				localctx = new RollupContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1257;
				this.match(trinoSqlParser.ROLLUP_);
				this.state = 1258;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3220895422) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3451322097) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 1996275689) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4127189835) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 3758092287) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 4159700969) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4260888031) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4008640495) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 562167099) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 16760833) !== 0)) {
					{
					this.state = 1259;
					this.expression();
					this.state = 1264;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 1260;
						this.match(trinoSqlParser.COMMA_);
						this.state = 1261;
						this.expression();
						}
						}
						this.state = 1266;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1269;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 3:
				localctx = new CubeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1270;
				this.match(trinoSqlParser.CUBE_);
				this.state = 1271;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3220895422) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3451322097) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 1996275689) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4127189835) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 3758092287) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 4159700969) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4260888031) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4008640495) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 562167099) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 16760833) !== 0)) {
					{
					this.state = 1272;
					this.expression();
					this.state = 1277;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 1273;
						this.match(trinoSqlParser.COMMA_);
						this.state = 1274;
						this.expression();
						}
						}
						this.state = 1279;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1282;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 4:
				localctx = new MultipleGroupingSetsContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1283;
				this.match(trinoSqlParser.GROUPING_);
				this.state = 1284;
				this.match(trinoSqlParser.SETS_);
				this.state = 1285;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1286;
				this.groupingSet();
				this.state = 1291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 1287;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1288;
					this.groupingSet();
					}
					}
					this.state = 1293;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1294;
				this.match(trinoSqlParser.RPAREN_);
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
		this.enterRule(localctx, 52, trinoSqlParser.RULE_groupingSet);
		let _la: number;
		try {
			this.state = 1311;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1298;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3220895422) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3451322097) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 1996275689) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4127189835) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 3758092287) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 4159700969) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4260888031) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4008640495) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 562167099) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 16760833) !== 0)) {
					{
					this.state = 1299;
					this.expression();
					this.state = 1304;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 1300;
						this.match(trinoSqlParser.COMMA_);
						this.state = 1301;
						this.expression();
						}
						}
						this.state = 1306;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1309;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1310;
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
	public windowDefinition(): WindowDefinitionContext {
		let localctx: WindowDefinitionContext = new WindowDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, trinoSqlParser.RULE_windowDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1313;
			localctx._name = this.identifier();
			this.state = 1314;
			this.match(trinoSqlParser.AS_);
			this.state = 1315;
			this.match(trinoSqlParser.LPAREN_);
			this.state = 1316;
			this.windowSpecification();
			this.state = 1317;
			this.match(trinoSqlParser.RPAREN_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public windowSpecification(): WindowSpecificationContext {
		let localctx: WindowSpecificationContext = new WindowSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, trinoSqlParser.RULE_windowSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1320;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				{
				this.state = 1319;
				localctx._existingWindowName = this.identifier();
				}
				break;
			}
			this.state = 1332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===169) {
				{
				this.state = 1322;
				this.match(trinoSqlParser.PARTITION_);
				this.state = 1323;
				this.match(trinoSqlParser.BY_);
				this.state = 1324;
				localctx._expression = this.expression();
				localctx._partition.push(localctx._expression);
				this.state = 1329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 1325;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1326;
					localctx._expression = this.expression();
					localctx._partition.push(localctx._expression);
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
			if (_la===163) {
				{
				this.state = 1334;
				this.match(trinoSqlParser.ORDER_);
				this.state = 1335;
				this.match(trinoSqlParser.BY_);
				this.state = 1336;
				this.sortItem();
				this.state = 1341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 1337;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1338;
					this.sortItem();
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
			if (_la===91 || _la===137 || _la===186 || _la===204) {
				{
				this.state = 1346;
				this.windowFrame();
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
	public namedQuery(): NamedQueryContext {
		let localctx: NamedQueryContext = new NamedQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, trinoSqlParser.RULE_namedQuery);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1349;
			localctx._name = this.identifier();
			this.state = 1351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===292) {
				{
				this.state = 1350;
				this.columnAliases();
				}
			}

			this.state = 1353;
			this.match(trinoSqlParser.AS_);
			this.state = 1354;
			this.match(trinoSqlParser.LPAREN_);
			this.state = 1355;
			this.query();
			this.state = 1356;
			this.match(trinoSqlParser.RPAREN_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 60, trinoSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1358;
			_la = this._input.LA(1);
			if(!(_la===5 || _la===57)) {
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
	public selectItem(): SelectItemContext {
		let localctx: SelectItemContext = new SelectItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, trinoSqlParser.RULE_selectItem);
		let _la: number;
		try {
			this.state = 1375;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				localctx = new SelectSingleContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1360;
				this.expression();
				this.state = 1365;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 165, this._ctx) ) {
				case 1:
					{
					this.state = 1362;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===11) {
						{
						this.state = 1361;
						this.match(trinoSqlParser.AS_);
						}
					}

					this.state = 1364;
					this.identifier();
					}
					break;
				}
				}
				break;
			case 2:
				localctx = new SelectAllContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1367;
				this.primaryExpression(0);
				this.state = 1368;
				this.match(trinoSqlParser.DOT_);
				this.state = 1369;
				this.match(trinoSqlParser.ASTERISK_);
				this.state = 1372;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 166, this._ctx) ) {
				case 1:
					{
					this.state = 1370;
					this.match(trinoSqlParser.AS_);
					this.state = 1371;
					this.columnAliases();
					}
					break;
				}
				}
				break;
			case 3:
				localctx = new SelectAllContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1374;
				this.match(trinoSqlParser.ASTERISK_);
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

	public relation(): RelationContext;
	public relation(_p: number): RelationContext;
	// @RuleVersion(0)
	public relation(_p?: number): RelationContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: RelationContext = new RelationContext(this, this._ctx, _parentState);
		let _prevctx: RelationContext = localctx;
		let _startState: number = 64;
		this.enterRecursionRule(localctx, 64, trinoSqlParser.RULE_relation, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new RelationDefaultContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 1378;
			this.sampledRelation();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1398;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 169, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new JoinRelationContext(this, new RelationContext(this, _parentctx, _parentState));
					(localctx as JoinRelationContext)._left = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, trinoSqlParser.RULE_relation);
					this.state = 1380;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1394;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 34:
						{
						this.state = 1381;
						this.match(trinoSqlParser.CROSS_);
						this.state = 1382;
						this.match(trinoSqlParser.JOIN_);
						this.state = 1383;
						(localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					case 82:
					case 99:
					case 109:
					case 122:
					case 198:
						{
						this.state = 1384;
						this.joinType();
						this.state = 1385;
						this.match(trinoSqlParser.JOIN_);
						this.state = 1386;
						(localctx as JoinRelationContext)._rightRelation = this.relation(0);
						this.state = 1387;
						this.joinCriteria();
						}
						break;
					case 141:
						{
						this.state = 1389;
						this.match(trinoSqlParser.NATURAL_);
						this.state = 1390;
						this.joinType();
						this.state = 1391;
						this.match(trinoSqlParser.JOIN_);
						this.state = 1392;
						(localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 1400;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 169, this._ctx);
			}
			}
		}
		catch (re) {
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
	public joinType(): JoinTypeContext {
		let localctx: JoinTypeContext = new JoinTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, trinoSqlParser.RULE_joinType);
		let _la: number;
		try {
			this.state = 1408;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 99:
			case 109:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===99) {
					{
					this.state = 1401;
					this.match(trinoSqlParser.INNER_);
					}
				}

				}
				break;
			case 82:
			case 122:
			case 198:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1404;
				_la = this._input.LA(1);
				if(!(_la===82 || _la===122 || _la===198)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===165) {
					{
					this.state = 1405;
					this.match(trinoSqlParser.OUTER_);
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
	public joinCriteria(): JoinCriteriaContext {
		let localctx: JoinCriteriaContext = new JoinCriteriaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, trinoSqlParser.RULE_joinCriteria);
		let _la: number;
		try {
			this.state = 1424;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 158:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1410;
				this.match(trinoSqlParser.ON_);
				this.state = 1411;
				this.booleanExpression(0);
				}
				break;
			case 254:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1412;
				this.match(trinoSqlParser.USING_);
				this.state = 1413;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1414;
				this.identifier();
				this.state = 1419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 1415;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1416;
					this.identifier();
					}
					}
					this.state = 1421;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1422;
				this.match(trinoSqlParser.RPAREN_);
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
	public sampledRelation(): SampledRelationContext {
		let localctx: SampledRelationContext = new SampledRelationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, trinoSqlParser.RULE_sampledRelation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1426;
			this.patternRecognition();
			this.state = 1433;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				{
				this.state = 1427;
				this.match(trinoSqlParser.TABLESAMPLE_);
				this.state = 1428;
				this.sampleType();
				this.state = 1429;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1430;
				localctx._percentage = this.expression();
				this.state = 1431;
				this.match(trinoSqlParser.RPAREN_);
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
	public sampleType(): SampleTypeContext {
		let localctx: SampleTypeContext = new SampleTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, trinoSqlParser.RULE_sampleType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1435;
			_la = this._input.LA(1);
			if(!(_la===15 || _la===224)) {
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
	public trimsSpecification(): TrimsSpecificationContext {
		let localctx: TrimsSpecificationContext = new TrimsSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, trinoSqlParser.RULE_trimsSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1437;
			_la = this._input.LA(1);
			if(!(_la===17 || _la===121 || _la===235)) {
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
	public listAggOverflowBehavior(): ListAggOverflowBehaviorContext {
		let localctx: ListAggOverflowBehaviorContext = new ListAggOverflowBehaviorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, trinoSqlParser.RULE_listAggOverflowBehavior);
		let _la: number;
		try {
			this.state = 1445;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 65:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1439;
				this.match(trinoSqlParser.ERROR_);
				}
				break;
			case 239:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1440;
				this.match(trinoSqlParser.TRUNCATE_);
				this.state = 1442;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===306 || _la===307) {
					{
					this.state = 1441;
					this.string_();
					}
				}

				this.state = 1444;
				this.listaggCountIndication();
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
	public listaggCountIndication(): ListaggCountIndicationContext {
		let localctx: ListaggCountIndicationContext = new ListaggCountIndicationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, trinoSqlParser.RULE_listaggCountIndication);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1447;
			_la = this._input.LA(1);
			if(!(_la===267 || _la===269)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1448;
			this.match(trinoSqlParser.COUNT_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternRecognition(): PatternRecognitionContext {
		let localctx: PatternRecognitionContext = new PatternRecognitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, trinoSqlParser.RULE_patternRecognition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1450;
			this.aliasedRelation();
			this.state = 1533;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 193, this._ctx) ) {
			case 1:
				{
				this.state = 1451;
				this.match(trinoSqlParser.MATCH_RECOGNIZE_);
				this.state = 1452;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1463;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===169) {
					{
					this.state = 1453;
					this.match(trinoSqlParser.PARTITION_);
					this.state = 1454;
					this.match(trinoSqlParser.BY_);
					this.state = 1455;
					localctx._expression = this.expression();
					localctx._partition.push(localctx._expression);
					this.state = 1460;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 1456;
						this.match(trinoSqlParser.COMMA_);
						this.state = 1457;
						localctx._expression = this.expression();
						localctx._partition.push(localctx._expression);
						}
						}
						this.state = 1462;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===163) {
					{
					this.state = 1465;
					this.match(trinoSqlParser.ORDER_);
					this.state = 1466;
					this.match(trinoSqlParser.BY_);
					this.state = 1467;
					this.sortItem();
					this.state = 1472;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 1468;
						this.match(trinoSqlParser.COMMA_);
						this.state = 1469;
						this.sortItem();
						}
						}
						this.state = 1474;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1486;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===137) {
					{
					this.state = 1477;
					this.match(trinoSqlParser.MEASURES_);
					this.state = 1478;
					this.measureDefinition();
					this.state = 1483;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 1479;
						this.match(trinoSqlParser.COMMA_);
						this.state = 1480;
						this.measureDefinition();
						}
						}
						this.state = 1485;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1489;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===5 || _la===159) {
					{
					this.state = 1488;
					this.rowsPerMatch();
					}
				}

				this.state = 1494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4) {
					{
					this.state = 1491;
					this.match(trinoSqlParser.AFTER_);
					this.state = 1492;
					this.match(trinoSqlParser.MATCH_);
					this.state = 1493;
					this.skipTo();
					}
				}

				this.state = 1497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===98 || _la===211) {
					{
					this.state = 1496;
					_la = this._input.LA(1);
					if(!(_la===98 || _la===211)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 1499;
				this.match(trinoSqlParser.PATTERN_);
				this.state = 1500;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1501;
				this.rowPattern(0);
				this.state = 1502;
				this.match(trinoSqlParser.RPAREN_);
				this.state = 1512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===222) {
					{
					this.state = 1503;
					this.match(trinoSqlParser.SUBSET_);
					this.state = 1504;
					this.subsetDefinition();
					this.state = 1509;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 1505;
						this.match(trinoSqlParser.COMMA_);
						this.state = 1506;
						this.subsetDefinition();
						}
						}
						this.state = 1511;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1514;
				this.match(trinoSqlParser.DEFINE_);
				this.state = 1515;
				this.variableDefinition();
				this.state = 1520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 1516;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1517;
					this.variableDefinition();
					}
					}
					this.state = 1522;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1523;
				this.match(trinoSqlParser.RPAREN_);
				this.state = 1531;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
				case 1:
					{
					this.state = 1525;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===11) {
						{
						this.state = 1524;
						this.match(trinoSqlParser.AS_);
						}
					}

					this.state = 1527;
					this.identifier();
					this.state = 1529;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 191, this._ctx) ) {
					case 1:
						{
						this.state = 1528;
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public measureDefinition(): MeasureDefinitionContext {
		let localctx: MeasureDefinitionContext = new MeasureDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, trinoSqlParser.RULE_measureDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1535;
			this.expression();
			this.state = 1536;
			this.match(trinoSqlParser.AS_);
			this.state = 1537;
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
	public rowsPerMatch(): RowsPerMatchContext {
		let localctx: RowsPerMatchContext = new RowsPerMatchContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, trinoSqlParser.RULE_rowsPerMatch);
		let _la: number;
		try {
			this.state = 1550;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 159:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1539;
				this.match(trinoSqlParser.ONE_);
				this.state = 1540;
				this.match(trinoSqlParser.ROW_);
				this.state = 1541;
				this.match(trinoSqlParser.PER_);
				this.state = 1542;
				this.match(trinoSqlParser.MATCH_);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1543;
				this.match(trinoSqlParser.ALL_);
				this.state = 1544;
				this.match(trinoSqlParser.ROWS_);
				this.state = 1545;
				this.match(trinoSqlParser.PER_);
				this.state = 1546;
				this.match(trinoSqlParser.MATCH_);
				this.state = 1548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===156 || _la===217 || _la===267) {
					{
					this.state = 1547;
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public emptyMatchHandling(): EmptyMatchHandlingContext {
		let localctx: EmptyMatchHandlingContext = new EmptyMatchHandlingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, trinoSqlParser.RULE_emptyMatchHandling);
		try {
			this.state = 1561;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 217:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1552;
				this.match(trinoSqlParser.SHOW_);
				this.state = 1553;
				this.match(trinoSqlParser.EMPTY_);
				this.state = 1554;
				this.match(trinoSqlParser.MATCHES_);
				}
				break;
			case 156:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1555;
				this.match(trinoSqlParser.OMIT_);
				this.state = 1556;
				this.match(trinoSqlParser.EMPTY_);
				this.state = 1557;
				this.match(trinoSqlParser.MATCHES_);
				}
				break;
			case 267:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1558;
				this.match(trinoSqlParser.WITH_);
				this.state = 1559;
				this.match(trinoSqlParser.UNMATCHED_);
				this.state = 1560;
				this.match(trinoSqlParser.ROWS_);
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
	public skipTo(): SkipToContext {
		let localctx: SkipToContext = new SkipToContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, trinoSqlParser.RULE_skipTo);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1563;
			this.match(trinoSqlParser.SKIP_);
			this.state = 1576;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 234:
				{
				this.state = 1564;
				this.match(trinoSqlParser.TO_);
				this.state = 1571;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 198, this._ctx) ) {
				case 1:
					{
					this.state = 1565;
					this.match(trinoSqlParser.NEXT_);
					this.state = 1566;
					this.match(trinoSqlParser.ROW_);
					}
					break;
				case 2:
					{
					this.state = 1568;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 197, this._ctx) ) {
					case 1:
						{
						this.state = 1567;
						_la = this._input.LA(1);
						if(!(_la===77 || _la===119)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						}
						break;
					}
					this.state = 1570;
					this.identifier();
					}
					break;
				}
				}
				break;
			case 172:
				{
				this.state = 1573;
				this.match(trinoSqlParser.PAST_);
				this.state = 1574;
				this.match(trinoSqlParser.LAST_);
				this.state = 1575;
				this.match(trinoSqlParser.ROW_);
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
	public subsetDefinition(): SubsetDefinitionContext {
		let localctx: SubsetDefinitionContext = new SubsetDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, trinoSqlParser.RULE_subsetDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1578;
			localctx._name = this.identifier();
			this.state = 1579;
			this.match(trinoSqlParser.EQ_);
			this.state = 1580;
			this.match(trinoSqlParser.LPAREN_);
			this.state = 1581;
			localctx._identifier = this.identifier();
			localctx._union.push(localctx._identifier);
			this.state = 1586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===290) {
				{
				{
				this.state = 1582;
				this.match(trinoSqlParser.COMMA_);
				this.state = 1583;
				localctx._identifier = this.identifier();
				localctx._union.push(localctx._identifier);
				}
				}
				this.state = 1588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1589;
			this.match(trinoSqlParser.RPAREN_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDefinition(): VariableDefinitionContext {
		let localctx: VariableDefinitionContext = new VariableDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, trinoSqlParser.RULE_variableDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1591;
			this.identifier();
			this.state = 1592;
			this.match(trinoSqlParser.AS_);
			this.state = 1593;
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
	public aliasedRelation(): AliasedRelationContext {
		let localctx: AliasedRelationContext = new AliasedRelationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, trinoSqlParser.RULE_aliasedRelation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1595;
			this.relationPrimary();
			this.state = 1603;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				{
				this.state = 1597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===11) {
					{
					this.state = 1596;
					this.match(trinoSqlParser.AS_);
					}
				}

				this.state = 1599;
				this.identifier();
				this.state = 1601;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
				case 1:
					{
					this.state = 1600;
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public columnAliases(): ColumnAliasesContext {
		let localctx: ColumnAliasesContext = new ColumnAliasesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, trinoSqlParser.RULE_columnAliases);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1605;
			this.match(trinoSqlParser.LPAREN_);
			this.state = 1606;
			this.identifier();
			this.state = 1611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===290) {
				{
				{
				this.state = 1607;
				this.match(trinoSqlParser.COMMA_);
				this.state = 1608;
				this.identifier();
				}
				}
				this.state = 1613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1614;
			this.match(trinoSqlParser.RPAREN_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 98, trinoSqlParser.RULE_relationPrimary);
		let _la: number;
		try {
			this.state = 1653;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
			case 1:
				localctx = new TableNameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1616;
				this.qualifiedName();
				this.state = 1618;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 205, this._ctx) ) {
				case 1:
					{
					this.state = 1617;
					this.queryPeriod();
					}
					break;
				}
				}
				break;
			case 2:
				localctx = new SubqueryRelationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1620;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1621;
				this.query();
				this.state = 1622;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 3:
				localctx = new UnnestContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1624;
				this.match(trinoSqlParser.UNNEST_);
				this.state = 1625;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1626;
				this.expression();
				this.state = 1631;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 1627;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1628;
					this.expression();
					}
					}
					this.state = 1633;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1634;
				this.match(trinoSqlParser.RPAREN_);
				this.state = 1637;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 207, this._ctx) ) {
				case 1:
					{
					this.state = 1635;
					this.match(trinoSqlParser.WITH_);
					this.state = 1636;
					this.match(trinoSqlParser.ORDINALITY_);
					}
					break;
				}
				}
				break;
			case 4:
				localctx = new LateralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1639;
				this.match(trinoSqlParser.LATERAL_);
				this.state = 1640;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1641;
				this.query();
				this.state = 1642;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 5:
				localctx = new TableFunctionInvocationContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1644;
				this.match(trinoSqlParser.TABLE_);
				this.state = 1645;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1646;
				this.tableFunctionCall();
				this.state = 1647;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 6:
				localctx = new ParenthesizedRelationContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1649;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1650;
				this.relation(0);
				this.state = 1651;
				this.match(trinoSqlParser.RPAREN_);
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
	public tableFunctionCall(): TableFunctionCallContext {
		let localctx: TableFunctionCallContext = new TableFunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, trinoSqlParser.RULE_tableFunctionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1655;
			this.qualifiedName();
			this.state = 1656;
			this.match(trinoSqlParser.LPAREN_);
			this.state = 1665;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 210, this._ctx) ) {
			case 1:
				{
				this.state = 1657;
				this.tableFunctionArgument();
				this.state = 1662;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 1658;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1659;
					this.tableFunctionArgument();
					}
					}
					this.state = 1664;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 1676;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 1667;
				this.match(trinoSqlParser.COPARTITION_);
				this.state = 1668;
				this.copartitionTables();
				this.state = 1673;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 1669;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1670;
					this.copartitionTables();
					}
					}
					this.state = 1675;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1678;
			this.match(trinoSqlParser.RPAREN_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tableFunctionArgument(): TableFunctionArgumentContext {
		let localctx: TableFunctionArgumentContext = new TableFunctionArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, trinoSqlParser.RULE_tableFunctionArgument);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1683;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 213, this._ctx) ) {
			case 1:
				{
				this.state = 1680;
				this.identifier();
				this.state = 1681;
				this.match(trinoSqlParser.RDOUBLEARROW_);
				}
				break;
			}
			this.state = 1688;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 214, this._ctx) ) {
			case 1:
				{
				this.state = 1685;
				this.tableArgument();
				}
				break;
			case 2:
				{
				this.state = 1686;
				this.descriptorArgument();
				}
				break;
			case 3:
				{
				this.state = 1687;
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
	public tableArgument(): TableArgumentContext {
		let localctx: TableArgumentContext = new TableArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, trinoSqlParser.RULE_tableArgument);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1690;
			this.tableArgumentRelation();
			this.state = 1708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===169) {
				{
				this.state = 1691;
				this.match(trinoSqlParser.PARTITION_);
				this.state = 1692;
				this.match(trinoSqlParser.BY_);
				this.state = 1706;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 217, this._ctx) ) {
				case 1:
					{
					this.state = 1693;
					this.match(trinoSqlParser.LPAREN_);
					this.state = 1702;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3220895422) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3451322097) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 1996275689) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4127189835) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 3758092287) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 4159700969) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4260888031) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4008640495) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 562167099) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 16760833) !== 0)) {
						{
						this.state = 1694;
						this.expression();
						this.state = 1699;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===290) {
							{
							{
							this.state = 1695;
							this.match(trinoSqlParser.COMMA_);
							this.state = 1696;
							this.expression();
							}
							}
							this.state = 1701;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
					}

					this.state = 1704;
					this.match(trinoSqlParser.RPAREN_);
					}
					break;
				case 2:
					{
					this.state = 1705;
					this.expression();
					}
					break;
				}
				}
			}

			this.state = 1716;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 184:
				{
				this.state = 1710;
				this.match(trinoSqlParser.PRUNE_);
				this.state = 1711;
				this.match(trinoSqlParser.WHEN_);
				this.state = 1712;
				this.match(trinoSqlParser.EMPTY_);
				}
				break;
			case 116:
				{
				this.state = 1713;
				this.match(trinoSqlParser.KEEP_);
				this.state = 1714;
				this.match(trinoSqlParser.WHEN_);
				this.state = 1715;
				this.match(trinoSqlParser.EMPTY_);
				}
				break;
			case 32:
			case 163:
			case 290:
			case 293:
				break;
			default:
				break;
			}
			this.state = 1734;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===163) {
				{
				this.state = 1718;
				this.match(trinoSqlParser.ORDER_);
				this.state = 1719;
				this.match(trinoSqlParser.BY_);
				this.state = 1732;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 221, this._ctx) ) {
				case 1:
					{
					this.state = 1720;
					this.match(trinoSqlParser.LPAREN_);
					this.state = 1721;
					this.sortItem();
					this.state = 1726;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 1722;
						this.match(trinoSqlParser.COMMA_);
						this.state = 1723;
						this.sortItem();
						}
						}
						this.state = 1728;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1729;
					this.match(trinoSqlParser.RPAREN_);
					}
					break;
				case 2:
					{
					this.state = 1731;
					this.sortItem();
					}
					break;
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
	public tableArgumentRelation(): TableArgumentRelationContext {
		let localctx: TableArgumentRelationContext = new TableArgumentRelationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, trinoSqlParser.RULE_tableArgumentRelation);
		let _la: number;
		try {
			this.state = 1762;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 229, this._ctx) ) {
			case 1:
				localctx = new TableArgumentTableContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1736;
				this.match(trinoSqlParser.TABLE_);
				this.state = 1737;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1738;
				this.qualifiedName();
				this.state = 1739;
				this.match(trinoSqlParser.RPAREN_);
				this.state = 1747;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 225, this._ctx) ) {
				case 1:
					{
					this.state = 1741;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===11) {
						{
						this.state = 1740;
						this.match(trinoSqlParser.AS_);
						}
					}

					this.state = 1743;
					this.identifier();
					this.state = 1745;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===292) {
						{
						this.state = 1744;
						this.columnAliases();
						}
					}

					}
					break;
				}
				}
				break;
			case 2:
				localctx = new TableArgumentQueryContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1749;
				this.match(trinoSqlParser.TABLE_);
				this.state = 1750;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1751;
				this.query();
				this.state = 1752;
				this.match(trinoSqlParser.RPAREN_);
				this.state = 1760;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 228, this._ctx) ) {
				case 1:
					{
					this.state = 1754;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===11) {
						{
						this.state = 1753;
						this.match(trinoSqlParser.AS_);
						}
					}

					this.state = 1756;
					this.identifier();
					this.state = 1758;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===292) {
						{
						this.state = 1757;
						this.columnAliases();
						}
					}

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
	public descriptorArgument(): DescriptorArgumentContext {
		let localctx: DescriptorArgumentContext = new DescriptorArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, trinoSqlParser.RULE_descriptorArgument);
		let _la: number;
		try {
			this.state = 1782;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 55:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1764;
				this.match(trinoSqlParser.DESCRIPTOR_);
				this.state = 1765;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1766;
				this.descriptorField();
				this.state = 1771;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 1767;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1768;
					this.descriptorField();
					}
					}
					this.state = 1773;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1774;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1776;
				this.match(trinoSqlParser.CAST_);
				this.state = 1777;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1778;
				this.match(trinoSqlParser.NULL_);
				this.state = 1779;
				this.match(trinoSqlParser.AS_);
				this.state = 1780;
				this.match(trinoSqlParser.DESCRIPTOR_);
				this.state = 1781;
				this.match(trinoSqlParser.RPAREN_);
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
	public descriptorField(): DescriptorFieldContext {
		let localctx: DescriptorFieldContext = new DescriptorFieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, trinoSqlParser.RULE_descriptorField);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1784;
			this.identifier();
			this.state = 1786;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3214603966) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3451314193) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 1962720841) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 1442327371) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 4022859775) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & 4278059005) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 3753836475) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 4223384059) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 16295) !== 0) || ((((_la - 312)) & ~0x1F) === 0 && ((1 << (_la - 312)) & 15) !== 0)) {
				{
				this.state = 1785;
				this.type_(0);
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
	public copartitionTables(): CopartitionTablesContext {
		let localctx: CopartitionTablesContext = new CopartitionTablesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, trinoSqlParser.RULE_copartitionTables);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1788;
			this.match(trinoSqlParser.LPAREN_);
			this.state = 1789;
			this.qualifiedName();
			this.state = 1790;
			this.match(trinoSqlParser.COMMA_);
			this.state = 1791;
			this.qualifiedName();
			this.state = 1796;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===290) {
				{
				{
				this.state = 1792;
				this.match(trinoSqlParser.COMMA_);
				this.state = 1793;
				this.qualifiedName();
				}
				}
				this.state = 1798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1799;
			this.match(trinoSqlParser.RPAREN_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 114, trinoSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1801;
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
		let _startState: number = 116;
		this.enterRecursionRule(localctx, 116, trinoSqlParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1810;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 7:
			case 9:
			case 10:
			case 12:
			case 13:
			case 14:
			case 15:
			case 17:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 31:
			case 32:
			case 36:
			case 37:
			case 38:
			case 39:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 49:
			case 50:
			case 52:
			case 53:
			case 55:
			case 56:
			case 58:
			case 59:
			case 62:
			case 63:
			case 65:
			case 68:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 80:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 90:
			case 91:
			case 93:
			case 94:
			case 95:
			case 97:
			case 98:
			case 100:
			case 103:
			case 105:
			case 106:
			case 108:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 123:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 159:
			case 160:
			case 161:
			case 164:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 189:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 199:
			case 200:
			case 201:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 209:
			case 210:
			case 211:
			case 213:
			case 214:
			case 215:
			case 216:
			case 217:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 226:
			case 227:
			case 228:
			case 229:
			case 231:
			case 232:
			case 233:
			case 234:
			case 235:
			case 236:
			case 237:
			case 238:
			case 239:
			case 240:
			case 241:
			case 243:
			case 244:
			case 245:
			case 247:
			case 248:
			case 249:
			case 251:
			case 252:
			case 253:
			case 255:
			case 256:
			case 257:
			case 258:
			case 259:
			case 261:
			case 262:
			case 263:
			case 266:
			case 268:
			case 269:
			case 270:
			case 271:
			case 272:
			case 273:
			case 274:
			case 281:
			case 282:
			case 287:
			case 292:
			case 306:
			case 307:
			case 308:
			case 309:
			case 310:
			case 311:
			case 312:
			case 313:
			case 314:
			case 315:
				{
				localctx = new PredicatedContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1804;
				this.valueExpression(0);
				this.state = 1806;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 234, this._ctx) ) {
				case 1:
					{
					this.state = 1805;
					this.predicate_();
					}
					break;
				}
				}
				break;
			case 150:
				{
				localctx = new LogicalNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1808;
				this.match(trinoSqlParser.NOT_);
				this.state = 1809;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1820;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 237, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1818;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 236, this._ctx) ) {
					case 1:
						{
						localctx = new AndContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParser.RULE_booleanExpression);
						this.state = 1812;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1813;
						this.match(trinoSqlParser.AND_);
						this.state = 1814;
						this.booleanExpression(3);
						}
						break;
					case 2:
						{
						localctx = new OrContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParser.RULE_booleanExpression);
						this.state = 1815;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1816;
						this.match(trinoSqlParser.OR_);
						this.state = 1817;
						this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1822;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 237, this._ctx);
			}
			}
		}
		catch (re) {
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
	public predicate_(): Predicate_Context {
		let localctx: Predicate_Context = new Predicate_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 118, trinoSqlParser.RULE_predicate_);
		let _la: number;
		try {
			this.state = 1884;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 246, this._ctx) ) {
			case 1:
				localctx = new ComparisonContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1823;
				this.comparisonOperator();
				this.state = 1824;
				(localctx as ComparisonContext)._right = this.valueExpression(0);
				}
				break;
			case 2:
				localctx = new QuantifiedComparisonContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1826;
				this.comparisonOperator();
				this.state = 1827;
				this.comparisonQuantifier();
				this.state = 1828;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1829;
				this.query();
				this.state = 1830;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 3:
				localctx = new BetweenContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1833;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===150) {
					{
					this.state = 1832;
					this.match(trinoSqlParser.NOT_);
					}
				}

				this.state = 1835;
				this.match(trinoSqlParser.BETWEEN_);
				this.state = 1836;
				(localctx as BetweenContext)._lower = this.valueExpression(0);
				this.state = 1837;
				this.match(trinoSqlParser.AND_);
				this.state = 1838;
				(localctx as BetweenContext)._upper = this.valueExpression(0);
				}
				break;
			case 4:
				localctx = new InListContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1841;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===150) {
					{
					this.state = 1840;
					this.match(trinoSqlParser.NOT_);
					}
				}

				this.state = 1843;
				this.match(trinoSqlParser.IN_);
				this.state = 1844;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1845;
				this.expression();
				this.state = 1850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 1846;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1847;
					this.expression();
					}
					}
					this.state = 1852;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1853;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 5:
				localctx = new InSubqueryContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1856;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===150) {
					{
					this.state = 1855;
					this.match(trinoSqlParser.NOT_);
					}
				}

				this.state = 1858;
				this.match(trinoSqlParser.IN_);
				this.state = 1859;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1860;
				this.query();
				this.state = 1861;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 6:
				localctx = new LikeContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1864;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===150) {
					{
					this.state = 1863;
					this.match(trinoSqlParser.NOT_);
					}
				}

				this.state = 1866;
				this.match(trinoSqlParser.LIKE_);
				this.state = 1867;
				(localctx as LikeContext)._pattern = this.valueExpression(0);
				this.state = 1870;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 243, this._ctx) ) {
				case 1:
					{
					this.state = 1868;
					this.match(trinoSqlParser.ESCAPE_);
					this.state = 1869;
					(localctx as LikeContext)._escape = this.valueExpression(0);
					}
					break;
				}
				}
				break;
			case 7:
				localctx = new NullPredicateContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1872;
				this.match(trinoSqlParser.IS_);
				this.state = 1874;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===150) {
					{
					this.state = 1873;
					this.match(trinoSqlParser.NOT_);
					}
				}

				this.state = 1876;
				this.match(trinoSqlParser.NULL_);
				}
				break;
			case 8:
				localctx = new DistinctFromContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1877;
				this.match(trinoSqlParser.IS_);
				this.state = 1879;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===150) {
					{
					this.state = 1878;
					this.match(trinoSqlParser.NOT_);
					}
				}

				this.state = 1881;
				this.match(trinoSqlParser.DISTINCT_);
				this.state = 1882;
				this.match(trinoSqlParser.FROM_);
				this.state = 1883;
				(localctx as DistinctFromContext)._right = this.valueExpression(0);
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
		let _startState: number = 120;
		this.enterRecursionRule(localctx, 120, trinoSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1890;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 247, this._ctx) ) {
			case 1:
				{
				localctx = new ValueExpressionDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1887;
				this.primaryExpression(0);
				}
				break;
			case 2:
				{
				localctx = new ArithmeticUnaryContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1888;
				(localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===281 || _la===282)) {
				    (localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1889;
				this.valueExpression(4);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1906;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 249, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1904;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 248, this._ctx) ) {
					case 1:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParser.RULE_valueExpression);
						this.state = 1892;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1893;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 283)) & ~0x1F) === 0 && ((1 << (_la - 283)) & 7) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1894;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;
					case 2:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParser.RULE_valueExpression);
						this.state = 1895;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1896;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===281 || _la===282)) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1897;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;
					case 3:
						{
						localctx = new ConcatenationContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ConcatenationContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParser.RULE_valueExpression);
						this.state = 1898;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1899;
						this.match(trinoSqlParser.CONCAT_);
						this.state = 1900;
						(localctx as ConcatenationContext)._right = this.valueExpression(2);
						}
						break;
					case 4:
						{
						localctx = new AtTimeZoneContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParser.RULE_valueExpression);
						this.state = 1901;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1902;
						this.match(trinoSqlParser.AT_);
						this.state = 1903;
						this.timeZoneSpecifier();
						}
						break;
					}
					}
				}
				this.state = 1908;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 249, this._ctx);
			}
			}
		}
		catch (re) {
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
		let _startState: number = 122;
		this.enterRecursionRule(localctx, 122, trinoSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2359;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 312, this._ctx) ) {
			case 1:
				{
				localctx = new NullLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1910;
				this.match(trinoSqlParser.NULL_);
				}
				break;
			case 2:
				{
				localctx = new IntervalLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1911;
				this.interval();
				}
				break;
			case 3:
				{
				localctx = new TypeConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1912;
				this.identifier();
				this.state = 1913;
				this.string_();
				}
				break;
			case 4:
				{
				localctx = new TypeConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1915;
				this.match(trinoSqlParser.DOUBLE_);
				this.state = 1916;
				this.match(trinoSqlParser.PRECISION_);
				this.state = 1917;
				this.string_();
				}
				break;
			case 5:
				{
				localctx = new NumericLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1918;
				this.number_();
				}
				break;
			case 6:
				{
				localctx = new BooleanLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1919;
				this.booleanValue();
				}
				break;
			case 7:
				{
				localctx = new StringLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1920;
				this.string_();
				}
				break;
			case 8:
				{
				localctx = new BinaryLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1921;
				this.match(trinoSqlParser.BINARY_LITERAL_);
				}
				break;
			case 9:
				{
				localctx = new ParameterContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1922;
				this.match(trinoSqlParser.QUESTION_MARK_);
				}
				break;
			case 10:
				{
				localctx = new PositionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1923;
				this.match(trinoSqlParser.POSITION_);
				this.state = 1924;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1925;
				this.valueExpression(0);
				this.state = 1926;
				this.match(trinoSqlParser.IN_);
				this.state = 1927;
				this.valueExpression(0);
				this.state = 1928;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 11:
				{
				localctx = new RowConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1930;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1931;
				this.expression();
				this.state = 1934;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1932;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1933;
					this.expression();
					}
					}
					this.state = 1936;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===290);
				this.state = 1938;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 12:
				{
				localctx = new RowConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1940;
				this.match(trinoSqlParser.ROW_);
				this.state = 1941;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1942;
				this.expression();
				this.state = 1947;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 1943;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1944;
					this.expression();
					}
					}
					this.state = 1949;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1950;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 13:
				{
				localctx = new ListaggContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1952;
				(localctx as ListaggContext)._name = this.match(trinoSqlParser.LISTAGG_);
				this.state = 1953;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1955;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 252, this._ctx) ) {
				case 1:
					{
					this.state = 1954;
					this.setQuantifier();
					}
					break;
				}
				this.state = 1957;
				this.expression();
				this.state = 1960;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===290) {
					{
					this.state = 1958;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1959;
					this.string_();
					}
				}

				this.state = 1965;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===158) {
					{
					this.state = 1962;
					this.match(trinoSqlParser.ON_);
					this.state = 1963;
					this.match(trinoSqlParser.OVERFLOW_);
					this.state = 1964;
					this.listAggOverflowBehavior();
					}
				}

				this.state = 1967;
				this.match(trinoSqlParser.RPAREN_);
				{
				this.state = 1968;
				this.match(trinoSqlParser.WITHIN_);
				this.state = 1969;
				this.match(trinoSqlParser.GROUP_);
				this.state = 1970;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1971;
				this.match(trinoSqlParser.ORDER_);
				this.state = 1972;
				this.match(trinoSqlParser.BY_);
				this.state = 1973;
				this.sortItem();
				this.state = 1978;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 1974;
					this.match(trinoSqlParser.COMMA_);
					this.state = 1975;
					this.sortItem();
					}
					}
					this.state = 1980;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1981;
				this.match(trinoSqlParser.RPAREN_);
				}
				}
				break;
			case 14:
				{
				localctx = new FunctionCallContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1984;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 256, this._ctx) ) {
				case 1:
					{
					this.state = 1983;
					this.processingMode();
					}
					break;
				}
				this.state = 1986;
				this.qualifiedName();
				this.state = 1987;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 1991;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3214603966) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3451314193) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 1962720841) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 1442327371) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 4022859775) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & 4278059005) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 3753836475) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 4223384059) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 16295) !== 0) || ((((_la - 312)) & ~0x1F) === 0 && ((1 << (_la - 312)) & 15) !== 0)) {
					{
					this.state = 1988;
					(localctx as FunctionCallContext)._label = this.identifier();
					this.state = 1989;
					this.match(trinoSqlParser.DOT_);
					}
				}

				this.state = 1993;
				this.match(trinoSqlParser.ASTERISK_);
				this.state = 1994;
				this.match(trinoSqlParser.RPAREN_);
				this.state = 1996;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 258, this._ctx) ) {
				case 1:
					{
					this.state = 1995;
					this.filter();
					}
					break;
				}
				this.state = 1999;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 259, this._ctx) ) {
				case 1:
					{
					this.state = 1998;
					this.over();
					}
					break;
				}
				}
				break;
			case 15:
				{
				localctx = new FunctionCallContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2002;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 260, this._ctx) ) {
				case 1:
					{
					this.state = 2001;
					this.processingMode();
					}
					break;
				}
				this.state = 2004;
				this.qualifiedName();
				this.state = 2005;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2017;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3220895422) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3484876529) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 1996275689) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4127189835) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 3758092287) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 4159700969) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4260888031) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4008640495) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 562167099) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 16760833) !== 0)) {
					{
					this.state = 2007;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 261, this._ctx) ) {
					case 1:
						{
						this.state = 2006;
						this.setQuantifier();
						}
						break;
					}
					this.state = 2009;
					this.expression();
					this.state = 2014;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 2010;
						this.match(trinoSqlParser.COMMA_);
						this.state = 2011;
						this.expression();
						}
						}
						this.state = 2016;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2029;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===163) {
					{
					this.state = 2019;
					this.match(trinoSqlParser.ORDER_);
					this.state = 2020;
					this.match(trinoSqlParser.BY_);
					this.state = 2021;
					this.sortItem();
					this.state = 2026;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 2022;
						this.match(trinoSqlParser.COMMA_);
						this.state = 2023;
						this.sortItem();
						}
						}
						this.state = 2028;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2031;
				this.match(trinoSqlParser.RPAREN_);
				this.state = 2033;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 266, this._ctx) ) {
				case 1:
					{
					this.state = 2032;
					this.filter();
					}
					break;
				}
				this.state = 2039;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 268, this._ctx) ) {
				case 1:
					{
					this.state = 2036;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===95 || _la===194) {
						{
						this.state = 2035;
						this.nullTreatment();
						}
					}

					this.state = 2038;
					this.over();
					}
					break;
				}
				}
				break;
			case 16:
				{
				localctx = new MeasureContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2041;
				this.identifier();
				this.state = 2042;
				this.over();
				}
				break;
			case 17:
				{
				localctx = new LambdaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2044;
				this.identifier();
				this.state = 2045;
				this.match(trinoSqlParser.RARROW_);
				this.state = 2046;
				this.expression();
				}
				break;
			case 18:
				{
				localctx = new LambdaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2048;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2057;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3214603966) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3451314193) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 1962720841) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 1442327371) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 4022859775) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & 4278059005) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 3753836475) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 4223384059) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 16295) !== 0) || ((((_la - 312)) & ~0x1F) === 0 && ((1 << (_la - 312)) & 15) !== 0)) {
					{
					this.state = 2049;
					this.identifier();
					this.state = 2054;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 2050;
						this.match(trinoSqlParser.COMMA_);
						this.state = 2051;
						this.identifier();
						}
						}
						this.state = 2056;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2059;
				this.match(trinoSqlParser.RPAREN_);
				this.state = 2060;
				this.match(trinoSqlParser.RARROW_);
				this.state = 2061;
				this.expression();
				}
				break;
			case 19:
				{
				localctx = new SubqueryExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2062;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2063;
				this.query();
				this.state = 2064;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 20:
				{
				localctx = new ExistsContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2066;
				this.match(trinoSqlParser.EXISTS_);
				this.state = 2067;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2068;
				this.query();
				this.state = 2069;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 21:
				{
				localctx = new SimpleCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2071;
				this.match(trinoSqlParser.CASE_);
				this.state = 2072;
				(localctx as SimpleCaseContext)._operand = this.expression();
				this.state = 2074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2073;
					this.whenClause();
					}
					}
					this.state = 2076;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===264);
				this.state = 2080;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===61) {
					{
					this.state = 2078;
					this.match(trinoSqlParser.ELSE_);
					this.state = 2079;
					(localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2082;
				this.match(trinoSqlParser.END_);
				}
				break;
			case 22:
				{
				localctx = new SearchedCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2084;
				this.match(trinoSqlParser.CASE_);
				this.state = 2086;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2085;
					this.whenClause();
					}
					}
					this.state = 2088;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===264);
				this.state = 2092;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===61) {
					{
					this.state = 2090;
					this.match(trinoSqlParser.ELSE_);
					this.state = 2091;
					(localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2094;
				this.match(trinoSqlParser.END_);
				}
				break;
			case 23:
				{
				localctx = new CastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2096;
				this.match(trinoSqlParser.CAST_);
				this.state = 2097;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2098;
				this.expression();
				this.state = 2099;
				this.match(trinoSqlParser.AS_);
				this.state = 2100;
				this.type_(0);
				this.state = 2101;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 24:
				{
				localctx = new CastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2103;
				this.match(trinoSqlParser.TRY_CAST_);
				this.state = 2104;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2105;
				this.expression();
				this.state = 2106;
				this.match(trinoSqlParser.AS_);
				this.state = 2107;
				this.type_(0);
				this.state = 2108;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 25:
				{
				localctx = new ArrayConstructorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2110;
				this.match(trinoSqlParser.ARRAY_);
				this.state = 2111;
				this.match(trinoSqlParser.LSQUARE_);
				this.state = 2120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3220895422) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3451322097) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 1996275689) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4127189835) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 3758092287) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 4159700969) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4260888031) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4008640495) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 562167099) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 16760833) !== 0)) {
					{
					this.state = 2112;
					this.expression();
					this.state = 2117;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 2113;
						this.match(trinoSqlParser.COMMA_);
						this.state = 2114;
						this.expression();
						}
						}
						this.state = 2119;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2122;
				this.match(trinoSqlParser.RSQUARE_);
				}
				break;
			case 26:
				{
				localctx = new ColumnReferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2123;
				this.identifier();
				}
				break;
			case 27:
				{
				localctx = new SpecialDateTimeFunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2124;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParser.CURRENT_DATE_);
				}
				break;
			case 28:
				{
				localctx = new SpecialDateTimeFunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2125;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParser.CURRENT_TIME_);
				this.state = 2129;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 277, this._ctx) ) {
				case 1:
					{
					this.state = 2126;
					this.match(trinoSqlParser.LPAREN_);
					this.state = 2127;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(trinoSqlParser.INTEGER_VALUE_);
					this.state = 2128;
					this.match(trinoSqlParser.RPAREN_);
					}
					break;
				}
				}
				break;
			case 29:
				{
				localctx = new SpecialDateTimeFunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2131;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParser.CURRENT_TIMESTAMP_);
				this.state = 2135;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 278, this._ctx) ) {
				case 1:
					{
					this.state = 2132;
					this.match(trinoSqlParser.LPAREN_);
					this.state = 2133;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(trinoSqlParser.INTEGER_VALUE_);
					this.state = 2134;
					this.match(trinoSqlParser.RPAREN_);
					}
					break;
				}
				}
				break;
			case 30:
				{
				localctx = new SpecialDateTimeFunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2137;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParser.LOCALTIME_);
				this.state = 2141;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 279, this._ctx) ) {
				case 1:
					{
					this.state = 2138;
					this.match(trinoSqlParser.LPAREN_);
					this.state = 2139;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(trinoSqlParser.INTEGER_VALUE_);
					this.state = 2140;
					this.match(trinoSqlParser.RPAREN_);
					}
					break;
				}
				}
				break;
			case 31:
				{
				localctx = new SpecialDateTimeFunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2143;
				(localctx as SpecialDateTimeFunctionContext)._name = this.match(trinoSqlParser.LOCALTIMESTAMP_);
				this.state = 2147;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 280, this._ctx) ) {
				case 1:
					{
					this.state = 2144;
					this.match(trinoSqlParser.LPAREN_);
					this.state = 2145;
					(localctx as SpecialDateTimeFunctionContext)._precision = this.match(trinoSqlParser.INTEGER_VALUE_);
					this.state = 2146;
					this.match(trinoSqlParser.RPAREN_);
					}
					break;
				}
				}
				break;
			case 32:
				{
				localctx = new CurrentUserContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2149;
				(localctx as CurrentUserContext)._name = this.match(trinoSqlParser.CURRENT_USER_);
				}
				break;
			case 33:
				{
				localctx = new CurrentCatalogContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2150;
				(localctx as CurrentCatalogContext)._name = this.match(trinoSqlParser.CURRENT_CATALOG_);
				}
				break;
			case 34:
				{
				localctx = new CurrentSchemaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2151;
				(localctx as CurrentSchemaContext)._name = this.match(trinoSqlParser.CURRENT_SCHEMA_);
				}
				break;
			case 35:
				{
				localctx = new CurrentPathContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2152;
				(localctx as CurrentPathContext)._name = this.match(trinoSqlParser.CURRENT_PATH_);
				}
				break;
			case 36:
				{
				localctx = new TrimContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2153;
				this.match(trinoSqlParser.TRIM_);
				this.state = 2154;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2162;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 283, this._ctx) ) {
				case 1:
					{
					this.state = 2156;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 281, this._ctx) ) {
					case 1:
						{
						this.state = 2155;
						this.trimsSpecification();
						}
						break;
					}
					this.state = 2159;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3220895422) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3451322097) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 1996275689) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4127189835) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 3755995135) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 4159700969) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4260888031) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4008640495) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 562167099) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 16760833) !== 0)) {
						{
						this.state = 2158;
						(localctx as TrimContext)._trimChar = this.valueExpression(0);
						}
					}

					this.state = 2161;
					this.match(trinoSqlParser.FROM_);
					}
					break;
				}
				this.state = 2164;
				(localctx as TrimContext)._trimSource = this.valueExpression(0);
				this.state = 2165;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 37:
				{
				localctx = new TrimContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2167;
				this.match(trinoSqlParser.TRIM_);
				this.state = 2168;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2169;
				(localctx as TrimContext)._trimSource = this.valueExpression(0);
				this.state = 2170;
				this.match(trinoSqlParser.COMMA_);
				this.state = 2171;
				(localctx as TrimContext)._trimChar = this.valueExpression(0);
				this.state = 2172;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 38:
				{
				localctx = new SubstringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2174;
				this.match(trinoSqlParser.SUBSTRING_);
				this.state = 2175;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2176;
				this.valueExpression(0);
				this.state = 2177;
				this.match(trinoSqlParser.FROM_);
				this.state = 2178;
				this.valueExpression(0);
				this.state = 2181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===79) {
					{
					this.state = 2179;
					this.match(trinoSqlParser.FOR_);
					this.state = 2180;
					this.valueExpression(0);
					}
				}

				this.state = 2183;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 39:
				{
				localctx = new NormalizeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2185;
				this.match(trinoSqlParser.NORMALIZE_);
				this.state = 2186;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2187;
				this.valueExpression(0);
				this.state = 2190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===290) {
					{
					this.state = 2188;
					this.match(trinoSqlParser.COMMA_);
					this.state = 2189;
					this.normalForm();
					}
				}

				this.state = 2192;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 40:
				{
				localctx = new ExtractContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2194;
				this.match(trinoSqlParser.EXTRACT_);
				this.state = 2195;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2196;
				this.identifier();
				this.state = 2197;
				this.match(trinoSqlParser.FROM_);
				this.state = 2198;
				this.valueExpression(0);
				this.state = 2199;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 41:
				{
				localctx = new ParenthesizedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2201;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2202;
				this.expression();
				this.state = 2203;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 42:
				{
				localctx = new GroupingOperationContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2205;
				this.match(trinoSqlParser.GROUPING_);
				this.state = 2206;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3214603966) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3451314193) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 1962720841) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 1442327371) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 4022859775) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & 4278059005) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 3753836475) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 4223384059) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 16295) !== 0) || ((((_la - 312)) & ~0x1F) === 0 && ((1 << (_la - 312)) & 15) !== 0)) {
					{
					this.state = 2207;
					this.qualifiedName();
					this.state = 2212;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 2208;
						this.match(trinoSqlParser.COMMA_);
						this.state = 2209;
						this.qualifiedName();
						}
						}
						this.state = 2214;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2217;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 43:
				{
				localctx = new JsonExistsContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2218;
				this.match(trinoSqlParser.JSON_EXISTS_);
				this.state = 2219;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2220;
				this.jsonPathInvocation();
				this.state = 2225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===65 || _la===73 || _la===238 || _la===248) {
					{
					this.state = 2221;
					this.jsonExistsErrorBehavior();
					this.state = 2222;
					this.match(trinoSqlParser.ON_);
					this.state = 2223;
					this.match(trinoSqlParser.ERROR_);
					}
				}

				this.state = 2227;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 44:
				{
				localctx = new JsonValueContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2229;
				this.match(trinoSqlParser.JSON_VALUE_);
				this.state = 2230;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2231;
				this.jsonPathInvocation();
				this.state = 2234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===196) {
					{
					this.state = 2232;
					this.match(trinoSqlParser.RETURNING_);
					this.state = 2233;
					this.type_(0);
					}
				}

				this.state = 2240;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 290, this._ctx) ) {
				case 1:
					{
					this.state = 2236;
					(localctx as JsonValueContext)._emptyBehavior = this.jsonValueBehavior();
					this.state = 2237;
					this.match(trinoSqlParser.ON_);
					this.state = 2238;
					this.match(trinoSqlParser.EMPTY_);
					}
					break;
				}
				this.state = 2246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===49 || _la===65 || _la===151) {
					{
					this.state = 2242;
					(localctx as JsonValueContext)._errorBehavior = this.jsonValueBehavior();
					this.state = 2243;
					this.match(trinoSqlParser.ON_);
					this.state = 2244;
					this.match(trinoSqlParser.ERROR_);
					}
				}

				this.state = 2248;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 45:
				{
				localctx = new JsonQueryContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2250;
				this.match(trinoSqlParser.JSON_QUERY_);
				this.state = 2251;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2252;
				this.jsonPathInvocation();
				this.state = 2259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===196) {
					{
					this.state = 2253;
					this.match(trinoSqlParser.RETURNING_);
					this.state = 2254;
					this.type_(0);
					this.state = 2257;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===80) {
						{
						this.state = 2255;
						this.match(trinoSqlParser.FORMAT_);
						this.state = 2256;
						this.jsonRepresentation();
						}
					}

					}
				}

				this.state = 2264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===267 || _la===269) {
					{
					this.state = 2261;
					this.jsonQueryWrapperBehavior();
					this.state = 2262;
					this.match(trinoSqlParser.WRAPPER_);
					}
				}

				this.state = 2273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===116 || _la===156) {
					{
					this.state = 2266;
					_la = this._input.LA(1);
					if(!(_la===116 || _la===156)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 2267;
					this.match(trinoSqlParser.QUOTES_);
					this.state = 2271;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===158) {
						{
						this.state = 2268;
						this.match(trinoSqlParser.ON_);
						this.state = 2269;
						this.match(trinoSqlParser.SCALAR_);
						this.state = 2270;
						this.match(trinoSqlParser.TEXT_STRING_);
						}
					}

					}
				}

				this.state = 2279;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 297, this._ctx) ) {
				case 1:
					{
					this.state = 2275;
					(localctx as JsonQueryContext)._emptyBehavior = this.jsonQueryBehavior();
					this.state = 2276;
					this.match(trinoSqlParser.ON_);
					this.state = 2277;
					this.match(trinoSqlParser.EMPTY_);
					}
					break;
				}
				this.state = 2285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===62 || _la===65 || _la===151) {
					{
					this.state = 2281;
					(localctx as JsonQueryContext)._errorBehavior = this.jsonQueryBehavior();
					this.state = 2282;
					this.match(trinoSqlParser.ON_);
					this.state = 2283;
					this.match(trinoSqlParser.ERROR_);
					}
				}

				this.state = 2287;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 46:
				{
				localctx = new JsonObjectContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2289;
				this.match(trinoSqlParser.JSON_OBJECT_);
				this.state = 2290;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2319;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 304, this._ctx) ) {
				case 1:
					{
					this.state = 2291;
					this.jsonObjectMember();
					this.state = 2296;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 2292;
						this.match(trinoSqlParser.COMMA_);
						this.state = 2293;
						this.jsonObjectMember();
						}
						}
						this.state = 2298;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2305;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 151:
						{
						this.state = 2299;
						this.match(trinoSqlParser.NULL_);
						this.state = 2300;
						this.match(trinoSqlParser.ON_);
						this.state = 2301;
						this.match(trinoSqlParser.NULL_);
						}
						break;
					case 1:
						{
						this.state = 2302;
						this.match(trinoSqlParser.ABSENT_);
						this.state = 2303;
						this.match(trinoSqlParser.ON_);
						this.state = 2304;
						this.match(trinoSqlParser.NULL_);
						}
						break;
					case 196:
					case 267:
					case 269:
					case 293:
						break;
					default:
						break;
					}
					this.state = 2317;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 267:
						{
						this.state = 2307;
						this.match(trinoSqlParser.WITH_);
						this.state = 2308;
						this.match(trinoSqlParser.UNIQUE_);
						this.state = 2310;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===118) {
							{
							this.state = 2309;
							this.match(trinoSqlParser.KEYS_);
							}
						}

						}
						break;
					case 269:
						{
						this.state = 2312;
						this.match(trinoSqlParser.WITHOUT_);
						this.state = 2313;
						this.match(trinoSqlParser.UNIQUE_);
						this.state = 2315;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===118) {
							{
							this.state = 2314;
							this.match(trinoSqlParser.KEYS_);
							}
						}

						}
						break;
					case 196:
					case 293:
						break;
					default:
						break;
					}
					}
					break;
				}
				this.state = 2327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===196) {
					{
					this.state = 2321;
					this.match(trinoSqlParser.RETURNING_);
					this.state = 2322;
					this.type_(0);
					this.state = 2325;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===80) {
						{
						this.state = 2323;
						this.match(trinoSqlParser.FORMAT_);
						this.state = 2324;
						this.jsonRepresentation();
						}
					}

					}
				}

				this.state = 2329;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 47:
				{
				localctx = new JsonArrayContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2330;
				this.match(trinoSqlParser.JSON_ARRAY_);
				this.state = 2331;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2348;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 309, this._ctx) ) {
				case 1:
					{
					this.state = 2332;
					this.jsonValueExpression();
					this.state = 2337;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 2333;
						this.match(trinoSqlParser.COMMA_);
						this.state = 2334;
						this.jsonValueExpression();
						}
						}
						this.state = 2339;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2346;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 151:
						{
						this.state = 2340;
						this.match(trinoSqlParser.NULL_);
						this.state = 2341;
						this.match(trinoSqlParser.ON_);
						this.state = 2342;
						this.match(trinoSqlParser.NULL_);
						}
						break;
					case 1:
						{
						this.state = 2343;
						this.match(trinoSqlParser.ABSENT_);
						this.state = 2344;
						this.match(trinoSqlParser.ON_);
						this.state = 2345;
						this.match(trinoSqlParser.NULL_);
						}
						break;
					case 196:
					case 293:
						break;
					default:
						break;
					}
					}
					break;
				}
				this.state = 2356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===196) {
					{
					this.state = 2350;
					this.match(trinoSqlParser.RETURNING_);
					this.state = 2351;
					this.type_(0);
					this.state = 2354;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===80) {
						{
						this.state = 2352;
						this.match(trinoSqlParser.FORMAT_);
						this.state = 2353;
						this.jsonRepresentation();
						}
					}

					}
				}

				this.state = 2358;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2371;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 314, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2369;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 313, this._ctx) ) {
					case 1:
						{
						localctx = new SubscriptContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						(localctx as SubscriptContext)._value = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParser.RULE_primaryExpression);
						this.state = 2361;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 2362;
						this.match(trinoSqlParser.LSQUARE_);
						this.state = 2363;
						(localctx as SubscriptContext)._index = this.valueExpression(0);
						this.state = 2364;
						this.match(trinoSqlParser.RSQUARE_);
						}
						break;
					case 2:
						{
						localctx = new DereferenceContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						(localctx as DereferenceContext)._base_ = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParser.RULE_primaryExpression);
						this.state = 2366;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 2367;
						this.match(trinoSqlParser.DOT_);
						this.state = 2368;
						(localctx as DereferenceContext)._fieldName = this.identifier();
						}
						break;
					}
					}
				}
				this.state = 2373;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 314, this._ctx);
			}
			}
		}
		catch (re) {
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
	public jsonPathInvocation(): JsonPathInvocationContext {
		let localctx: JsonPathInvocationContext = new JsonPathInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, trinoSqlParser.RULE_jsonPathInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2374;
			this.jsonValueExpression();
			this.state = 2375;
			this.match(trinoSqlParser.COMMA_);
			this.state = 2376;
			localctx._path = this.string_();
			this.state = 2386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===171) {
				{
				this.state = 2377;
				this.match(trinoSqlParser.PASSING_);
				this.state = 2378;
				this.jsonArgument();
				this.state = 2383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 2379;
					this.match(trinoSqlParser.COMMA_);
					this.state = 2380;
					this.jsonArgument();
					}
					}
					this.state = 2385;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
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
	public jsonValueExpression(): JsonValueExpressionContext {
		let localctx: JsonValueExpressionContext = new JsonValueExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, trinoSqlParser.RULE_jsonValueExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2388;
			this.expression();
			this.state = 2391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===80) {
				{
				this.state = 2389;
				this.match(trinoSqlParser.FORMAT_);
				this.state = 2390;
				this.jsonRepresentation();
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
	public jsonRepresentation(): JsonRepresentationContext {
		let localctx: JsonRepresentationContext = new JsonRepresentationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, trinoSqlParser.RULE_jsonRepresentation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2393;
			this.match(trinoSqlParser.JSON_);
			this.state = 2396;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===63) {
				{
				this.state = 2394;
				this.match(trinoSqlParser.ENCODING_);
				this.state = 2395;
				_la = this._input.LA(1);
				if(!(((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & 7) !== 0))) {
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
	public jsonArgument(): JsonArgumentContext {
		let localctx: JsonArgumentContext = new JsonArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, trinoSqlParser.RULE_jsonArgument);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2398;
			this.jsonValueExpression();
			this.state = 2399;
			this.match(trinoSqlParser.AS_);
			this.state = 2400;
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
	public jsonExistsErrorBehavior(): JsonExistsErrorBehaviorContext {
		let localctx: JsonExistsErrorBehaviorContext = new JsonExistsErrorBehaviorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, trinoSqlParser.RULE_jsonExistsErrorBehavior);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2402;
			_la = this._input.LA(1);
			if(!(_la===65 || _la===73 || _la===238 || _la===248)) {
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
	public jsonValueBehavior(): JsonValueBehaviorContext {
		let localctx: JsonValueBehaviorContext = new JsonValueBehaviorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, trinoSqlParser.RULE_jsonValueBehavior);
		try {
			this.state = 2408;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 65:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2404;
				this.match(trinoSqlParser.ERROR_);
				}
				break;
			case 151:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2405;
				this.match(trinoSqlParser.NULL_);
				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2406;
				this.match(trinoSqlParser.DEFAULT_);
				this.state = 2407;
				this.expression();
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
	public jsonQueryWrapperBehavior(): JsonQueryWrapperBehaviorContext {
		let localctx: JsonQueryWrapperBehaviorContext = new JsonQueryWrapperBehaviorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, trinoSqlParser.RULE_jsonQueryWrapperBehavior);
		let _la: number;
		try {
			this.state = 2421;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 269:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2410;
				this.match(trinoSqlParser.WITHOUT_);
				this.state = 2412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===10) {
					{
					this.state = 2411;
					this.match(trinoSqlParser.ARRAY_);
					}
				}

				}
				break;
			case 267:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2414;
				this.match(trinoSqlParser.WITH_);
				this.state = 2416;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===29 || _la===245) {
					{
					this.state = 2415;
					_la = this._input.LA(1);
					if(!(_la===29 || _la===245)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 2419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===10) {
					{
					this.state = 2418;
					this.match(trinoSqlParser.ARRAY_);
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
	public jsonQueryBehavior(): JsonQueryBehaviorContext {
		let localctx: JsonQueryBehaviorContext = new JsonQueryBehaviorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, trinoSqlParser.RULE_jsonQueryBehavior);
		let _la: number;
		try {
			this.state = 2427;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 65:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2423;
				this.match(trinoSqlParser.ERROR_);
				}
				break;
			case 151:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2424;
				this.match(trinoSqlParser.NULL_);
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2425;
				this.match(trinoSqlParser.EMPTY_);
				this.state = 2426;
				_la = this._input.LA(1);
				if(!(_la===10 || _la===154)) {
				this._errHandler.recoverInline(this);
				}
				else {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsonObjectMember(): JsonObjectMemberContext {
		let localctx: JsonObjectMemberContext = new JsonObjectMemberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, trinoSqlParser.RULE_jsonObjectMember);
		try {
			this.state = 2440;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 326, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2430;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 325, this._ctx) ) {
				case 1:
					{
					this.state = 2429;
					this.match(trinoSqlParser.KEY_);
					}
					break;
				}
				this.state = 2432;
				this.expression();
				this.state = 2433;
				this.match(trinoSqlParser.VALUE_);
				this.state = 2434;
				this.jsonValueExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2436;
				this.expression();
				this.state = 2437;
				this.match(trinoSqlParser.COLON_);
				this.state = 2438;
				this.jsonValueExpression();
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
	public processingMode(): ProcessingModeContext {
		let localctx: ProcessingModeContext = new ProcessingModeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, trinoSqlParser.RULE_processingMode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2442;
			_la = this._input.LA(1);
			if(!(_la===76 || _la===205)) {
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
	public nullTreatment(): NullTreatmentContext {
		let localctx: NullTreatmentContext = new NullTreatmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, trinoSqlParser.RULE_nullTreatment);
		try {
			this.state = 2448;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 95:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2444;
				this.match(trinoSqlParser.IGNORE_);
				this.state = 2445;
				this.match(trinoSqlParser.NULLS_);
				}
				break;
			case 194:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2446;
				this.match(trinoSqlParser.RESPECT_);
				this.state = 2447;
				this.match(trinoSqlParser.NULLS_);
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
	public string_(): String_Context {
		let localctx: String_Context = new String_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 146, trinoSqlParser.RULE_string_);
		try {
			this.state = 2456;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 306:
				localctx = new BasicStringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2450;
				this.match(trinoSqlParser.STRING_);
				}
				break;
			case 307:
				localctx = new UnicodeStringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2451;
				this.match(trinoSqlParser.UNICODE_STRING_);
				this.state = 2454;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 328, this._ctx) ) {
				case 1:
					{
					this.state = 2452;
					this.match(trinoSqlParser.UESCAPE_);
					this.state = 2453;
					this.match(trinoSqlParser.STRING_);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timeZoneSpecifier(): TimeZoneSpecifierContext {
		let localctx: TimeZoneSpecifierContext = new TimeZoneSpecifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, trinoSqlParser.RULE_timeZoneSpecifier);
		try {
			this.state = 2464;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 330, this._ctx) ) {
			case 1:
				localctx = new TimeZoneIntervalContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2458;
				this.match(trinoSqlParser.TIME_);
				this.state = 2459;
				this.match(trinoSqlParser.ZONE_);
				this.state = 2460;
				this.interval();
				}
				break;
			case 2:
				localctx = new TimeZoneStringContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2461;
				this.match(trinoSqlParser.TIME_);
				this.state = 2462;
				this.match(trinoSqlParser.ZONE_);
				this.state = 2463;
				this.string_();
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
		this.enterRule(localctx, 150, trinoSqlParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2466;
			_la = this._input.LA(1);
			if(!(((((_la - 275)) & ~0x1F) === 0 && ((1 << (_la - 275)) & 63) !== 0))) {
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
	public comparisonQuantifier(): ComparisonQuantifierContext {
		let localctx: ComparisonQuantifierContext = new ComparisonQuantifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, trinoSqlParser.RULE_comparisonQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2468;
			_la = this._input.LA(1);
			if(!(_la===5 || _la===9 || _la===219)) {
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
		this.enterRule(localctx, 154, trinoSqlParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2470;
			_la = this._input.LA(1);
			if(!(_la===73 || _la===238)) {
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
		this.enterRule(localctx, 156, trinoSqlParser.RULE_interval);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2472;
			this.match(trinoSqlParser.INTERVAL_);
			this.state = 2474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===281 || _la===282) {
				{
				this.state = 2473;
				localctx._sign = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===281 || _la===282)) {
				    localctx._sign = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 2476;
			this.string_();
			this.state = 2477;
			localctx._from_ = this.intervalField();
			this.state = 2480;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 332, this._ctx) ) {
			case 1:
				{
				this.state = 2478;
				this.match(trinoSqlParser.TO_);
				this.state = 2479;
				localctx._to = this.intervalField();
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
	public intervalField(): IntervalFieldContext {
		let localctx: IntervalFieldContext = new IntervalFieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, trinoSqlParser.RULE_intervalField);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2482;
			_la = this._input.LA(1);
			if(!(_la===47 || _la===93 || _la===139 || _la===140 || _la===209 || _la===273)) {
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
	public normalForm(): NormalFormContext {
		let localctx: NormalFormContext = new NormalFormContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, trinoSqlParser.RULE_normalForm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2484;
			_la = this._input.LA(1);
			if(!(((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 15) !== 0))) {
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

	public type_(): TypeContext;
	public type_(_p: number): TypeContext;
	// @RuleVersion(0)
	public type_(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: TypeContext = new TypeContext(this, this._ctx, _parentState);
		let _prevctx: TypeContext = localctx;
		let _startState: number = 162;
		this.enterRecursionRule(localctx, 162, trinoSqlParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2577;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 343, this._ctx) ) {
			case 1:
				{
				localctx = new RowTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 2487;
				this.match(trinoSqlParser.ROW_);
				this.state = 2488;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2489;
				this.rowField();
				this.state = 2494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 2490;
					this.match(trinoSqlParser.COMMA_);
					this.state = 2491;
					this.rowField();
					}
					}
					this.state = 2496;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2497;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 2:
				{
				localctx = new IntervalTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2499;
				this.match(trinoSqlParser.INTERVAL_);
				this.state = 2500;
				(localctx as IntervalTypeContext)._from_ = this.intervalField();
				this.state = 2503;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 334, this._ctx) ) {
				case 1:
					{
					this.state = 2501;
					this.match(trinoSqlParser.TO_);
					this.state = 2502;
					(localctx as IntervalTypeContext)._to = this.intervalField();
					}
					break;
				}
				}
				break;
			case 3:
				{
				localctx = new DateTimeTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2505;
				(localctx as DateTimeTypeContext)._base = this.match(trinoSqlParser.TIMESTAMP_);
				this.state = 2510;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 335, this._ctx) ) {
				case 1:
					{
					this.state = 2506;
					this.match(trinoSqlParser.LPAREN_);
					this.state = 2507;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 2508;
					this.match(trinoSqlParser.RPAREN_);
					}
					break;
				}
				this.state = 2515;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 336, this._ctx) ) {
				case 1:
					{
					this.state = 2512;
					this.match(trinoSqlParser.WITHOUT_);
					this.state = 2513;
					this.match(trinoSqlParser.TIME_);
					this.state = 2514;
					this.match(trinoSqlParser.ZONE_);
					}
					break;
				}
				}
				break;
			case 4:
				{
				localctx = new DateTimeTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2517;
				(localctx as DateTimeTypeContext)._base = this.match(trinoSqlParser.TIMESTAMP_);
				this.state = 2522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===292) {
					{
					this.state = 2518;
					this.match(trinoSqlParser.LPAREN_);
					this.state = 2519;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 2520;
					this.match(trinoSqlParser.RPAREN_);
					}
				}

				this.state = 2524;
				this.match(trinoSqlParser.WITH_);
				this.state = 2525;
				this.match(trinoSqlParser.TIME_);
				this.state = 2526;
				this.match(trinoSqlParser.ZONE_);
				}
				break;
			case 5:
				{
				localctx = new DateTimeTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2527;
				(localctx as DateTimeTypeContext)._base = this.match(trinoSqlParser.TIME_);
				this.state = 2532;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 338, this._ctx) ) {
				case 1:
					{
					this.state = 2528;
					this.match(trinoSqlParser.LPAREN_);
					this.state = 2529;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 2530;
					this.match(trinoSqlParser.RPAREN_);
					}
					break;
				}
				this.state = 2537;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 339, this._ctx) ) {
				case 1:
					{
					this.state = 2534;
					this.match(trinoSqlParser.WITHOUT_);
					this.state = 2535;
					this.match(trinoSqlParser.TIME_);
					this.state = 2536;
					this.match(trinoSqlParser.ZONE_);
					}
					break;
				}
				}
				break;
			case 6:
				{
				localctx = new DateTimeTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2539;
				(localctx as DateTimeTypeContext)._base = this.match(trinoSqlParser.TIME_);
				this.state = 2544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===292) {
					{
					this.state = 2540;
					this.match(trinoSqlParser.LPAREN_);
					this.state = 2541;
					(localctx as DateTimeTypeContext)._precision = this.typeParameter();
					this.state = 2542;
					this.match(trinoSqlParser.RPAREN_);
					}
				}

				this.state = 2546;
				this.match(trinoSqlParser.WITH_);
				this.state = 2547;
				this.match(trinoSqlParser.TIME_);
				this.state = 2548;
				this.match(trinoSqlParser.ZONE_);
				}
				break;
			case 7:
				{
				localctx = new DoublePrecisionTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2549;
				this.match(trinoSqlParser.DOUBLE_);
				this.state = 2550;
				this.match(trinoSqlParser.PRECISION_);
				}
				break;
			case 8:
				{
				localctx = new LegacyArrayTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2551;
				this.match(trinoSqlParser.ARRAY_);
				this.state = 2552;
				this.match(trinoSqlParser.LT_);
				this.state = 2553;
				this.type_(0);
				this.state = 2554;
				this.match(trinoSqlParser.GT_);
				}
				break;
			case 9:
				{
				localctx = new LegacyMapTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2556;
				this.match(trinoSqlParser.MAP_);
				this.state = 2557;
				this.match(trinoSqlParser.LT_);
				this.state = 2558;
				(localctx as LegacyMapTypeContext)._keyType = this.type_(0);
				this.state = 2559;
				this.match(trinoSqlParser.COMMA_);
				this.state = 2560;
				(localctx as LegacyMapTypeContext)._valueType = this.type_(0);
				this.state = 2561;
				this.match(trinoSqlParser.GT_);
				}
				break;
			case 10:
				{
				localctx = new GenericTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2563;
				this.identifier();
				this.state = 2575;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 342, this._ctx) ) {
				case 1:
					{
					this.state = 2564;
					this.match(trinoSqlParser.LPAREN_);
					this.state = 2565;
					this.typeParameter();
					this.state = 2570;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 2566;
						this.match(trinoSqlParser.COMMA_);
						this.state = 2567;
						this.typeParameter();
						}
						}
						this.state = 2572;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2573;
					this.match(trinoSqlParser.RPAREN_);
					}
					break;
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2588;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 345, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ArrayTypeContext(this, new TypeContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, trinoSqlParser.RULE_type);
					this.state = 2579;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 2580;
					this.match(trinoSqlParser.ARRAY_);
					this.state = 2584;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 344, this._ctx) ) {
					case 1:
						{
						this.state = 2581;
						this.match(trinoSqlParser.LSQUARE_);
						this.state = 2582;
						this.match(trinoSqlParser.INTEGER_VALUE_);
						this.state = 2583;
						this.match(trinoSqlParser.RSQUARE_);
						}
						break;
					}
					}
					}
				}
				this.state = 2590;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 345, this._ctx);
			}
			}
		}
		catch (re) {
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
	public rowField(): RowFieldContext {
		let localctx: RowFieldContext = new RowFieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, trinoSqlParser.RULE_rowField);
		try {
			this.state = 2595;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 346, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2591;
				this.type_(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2592;
				this.identifier();
				this.state = 2593;
				this.type_(0);
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
	public typeParameter(): TypeParameterContext {
		let localctx: TypeParameterContext = new TypeParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, trinoSqlParser.RULE_typeParameter);
		try {
			this.state = 2599;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 309:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2597;
				this.match(trinoSqlParser.INTEGER_VALUE_);
				}
				break;
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 7:
			case 9:
			case 10:
			case 12:
			case 13:
			case 14:
			case 15:
			case 17:
			case 19:
			case 20:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 31:
			case 32:
			case 36:
			case 45:
			case 46:
			case 47:
			case 49:
			case 50:
			case 52:
			case 53:
			case 55:
			case 56:
			case 58:
			case 59:
			case 62:
			case 63:
			case 65:
			case 68:
			case 71:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 80:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 91:
			case 93:
			case 94:
			case 95:
			case 97:
			case 98:
			case 100:
			case 103:
			case 105:
			case 106:
			case 108:
			case 110:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 123:
			case 125:
			case 127:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 159:
			case 160:
			case 161:
			case 164:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 189:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 199:
			case 200:
			case 201:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 209:
			case 210:
			case 211:
			case 213:
			case 214:
			case 215:
			case 216:
			case 217:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 226:
			case 227:
			case 228:
			case 229:
			case 231:
			case 232:
			case 233:
			case 234:
			case 235:
			case 236:
			case 239:
			case 240:
			case 241:
			case 243:
			case 244:
			case 245:
			case 247:
			case 248:
			case 249:
			case 251:
			case 252:
			case 253:
			case 255:
			case 256:
			case 257:
			case 258:
			case 259:
			case 261:
			case 262:
			case 263:
			case 266:
			case 268:
			case 269:
			case 270:
			case 271:
			case 272:
			case 273:
			case 274:
			case 312:
			case 313:
			case 314:
			case 315:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2598;
				this.type_(0);
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
	public whenClause(): WhenClauseContext {
		let localctx: WhenClauseContext = new WhenClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, trinoSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2601;
			this.match(trinoSqlParser.WHEN_);
			this.state = 2602;
			localctx._condition = this.expression();
			this.state = 2603;
			this.match(trinoSqlParser.THEN_);
			this.state = 2604;
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
	public filter(): FilterContext {
		let localctx: FilterContext = new FilterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, trinoSqlParser.RULE_filter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2606;
			this.match(trinoSqlParser.FILTER_);
			this.state = 2607;
			this.match(trinoSqlParser.LPAREN_);
			this.state = 2608;
			this.match(trinoSqlParser.WHERE_);
			this.state = 2609;
			this.booleanExpression(0);
			this.state = 2610;
			this.match(trinoSqlParser.RPAREN_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mergeCase(): MergeCaseContext {
		let localctx: MergeCaseContext = new MergeCaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, trinoSqlParser.RULE_mergeCase);
		let _la: number;
		try {
			this.state = 2676;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 355, this._ctx) ) {
			case 1:
				localctx = new MergeUpdateContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2612;
				this.match(trinoSqlParser.WHEN_);
				this.state = 2613;
				this.match(trinoSqlParser.MATCHED_);
				this.state = 2616;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===8) {
					{
					this.state = 2614;
					this.match(trinoSqlParser.AND_);
					this.state = 2615;
					(localctx as MergeUpdateContext)._condition = this.expression();
					}
				}

				this.state = 2618;
				this.match(trinoSqlParser.THEN_);
				this.state = 2619;
				this.match(trinoSqlParser.UPDATE_);
				this.state = 2620;
				this.match(trinoSqlParser.SET_);
				this.state = 2621;
				(localctx as MergeUpdateContext)._identifier = this.identifier();
				(localctx as MergeUpdateContext)._targets.push((localctx as MergeUpdateContext)._identifier);
				this.state = 2622;
				this.match(trinoSqlParser.EQ_);
				this.state = 2623;
				(localctx as MergeUpdateContext)._expression = this.expression();
				(localctx as MergeUpdateContext)._values.push((localctx as MergeUpdateContext)._expression);
				this.state = 2631;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 2624;
					this.match(trinoSqlParser.COMMA_);
					this.state = 2625;
					(localctx as MergeUpdateContext)._identifier = this.identifier();
					(localctx as MergeUpdateContext)._targets.push((localctx as MergeUpdateContext)._identifier);
					this.state = 2626;
					this.match(trinoSqlParser.EQ_);
					this.state = 2627;
					(localctx as MergeUpdateContext)._expression = this.expression();
					(localctx as MergeUpdateContext)._values.push((localctx as MergeUpdateContext)._expression);
					}
					}
					this.state = 2633;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				localctx = new MergeDeleteContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2634;
				this.match(trinoSqlParser.WHEN_);
				this.state = 2635;
				this.match(trinoSqlParser.MATCHED_);
				this.state = 2638;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===8) {
					{
					this.state = 2636;
					this.match(trinoSqlParser.AND_);
					this.state = 2637;
					(localctx as MergeDeleteContext)._condition = this.expression();
					}
				}

				this.state = 2640;
				this.match(trinoSqlParser.THEN_);
				this.state = 2641;
				this.match(trinoSqlParser.DELETE_);
				}
				break;
			case 3:
				localctx = new MergeInsertContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2642;
				this.match(trinoSqlParser.WHEN_);
				this.state = 2643;
				this.match(trinoSqlParser.NOT_);
				this.state = 2644;
				this.match(trinoSqlParser.MATCHED_);
				this.state = 2647;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===8) {
					{
					this.state = 2645;
					this.match(trinoSqlParser.AND_);
					this.state = 2646;
					(localctx as MergeInsertContext)._condition = this.expression();
					}
				}

				this.state = 2649;
				this.match(trinoSqlParser.THEN_);
				this.state = 2650;
				this.match(trinoSqlParser.INSERT_);
				this.state = 2662;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===292) {
					{
					this.state = 2651;
					this.match(trinoSqlParser.LPAREN_);
					this.state = 2652;
					(localctx as MergeInsertContext)._identifier = this.identifier();
					(localctx as MergeInsertContext)._targets.push((localctx as MergeInsertContext)._identifier);
					this.state = 2657;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===290) {
						{
						{
						this.state = 2653;
						this.match(trinoSqlParser.COMMA_);
						this.state = 2654;
						(localctx as MergeInsertContext)._identifier = this.identifier();
						(localctx as MergeInsertContext)._targets.push((localctx as MergeInsertContext)._identifier);
						}
						}
						this.state = 2659;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2660;
					this.match(trinoSqlParser.RPAREN_);
					}
				}

				this.state = 2664;
				this.match(trinoSqlParser.VALUES_);
				this.state = 2665;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2666;
				(localctx as MergeInsertContext)._expression = this.expression();
				(localctx as MergeInsertContext)._values.push((localctx as MergeInsertContext)._expression);
				this.state = 2671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 2667;
					this.match(trinoSqlParser.COMMA_);
					this.state = 2668;
					(localctx as MergeInsertContext)._expression = this.expression();
					(localctx as MergeInsertContext)._values.push((localctx as MergeInsertContext)._expression);
					}
					}
					this.state = 2673;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2674;
				this.match(trinoSqlParser.RPAREN_);
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
	public over(): OverContext {
		let localctx: OverContext = new OverContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, trinoSqlParser.RULE_over);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2678;
			this.match(trinoSqlParser.OVER_);
			this.state = 2684;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 7:
			case 9:
			case 10:
			case 12:
			case 13:
			case 14:
			case 15:
			case 17:
			case 19:
			case 20:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 31:
			case 32:
			case 36:
			case 45:
			case 46:
			case 47:
			case 49:
			case 50:
			case 52:
			case 53:
			case 55:
			case 56:
			case 58:
			case 59:
			case 62:
			case 63:
			case 65:
			case 68:
			case 71:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 80:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 91:
			case 93:
			case 94:
			case 95:
			case 97:
			case 98:
			case 100:
			case 103:
			case 105:
			case 106:
			case 108:
			case 110:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 123:
			case 125:
			case 127:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 159:
			case 160:
			case 161:
			case 164:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 189:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 199:
			case 200:
			case 201:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 209:
			case 210:
			case 211:
			case 213:
			case 214:
			case 215:
			case 216:
			case 217:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 226:
			case 227:
			case 228:
			case 229:
			case 231:
			case 232:
			case 233:
			case 234:
			case 235:
			case 236:
			case 239:
			case 240:
			case 241:
			case 243:
			case 244:
			case 245:
			case 247:
			case 248:
			case 249:
			case 251:
			case 252:
			case 253:
			case 255:
			case 256:
			case 257:
			case 258:
			case 259:
			case 261:
			case 262:
			case 263:
			case 266:
			case 268:
			case 269:
			case 270:
			case 271:
			case 272:
			case 273:
			case 274:
			case 312:
			case 313:
			case 314:
			case 315:
				{
				this.state = 2679;
				localctx._windowName = this.identifier();
				}
				break;
			case 292:
				{
				this.state = 2680;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2681;
				this.windowSpecification();
				this.state = 2682;
				this.match(trinoSqlParser.RPAREN_);
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
	public windowFrame(): WindowFrameContext {
		let localctx: WindowFrameContext = new WindowFrameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, trinoSqlParser.RULE_windowFrame);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===137) {
				{
				this.state = 2686;
				this.match(trinoSqlParser.MEASURES_);
				this.state = 2687;
				this.measureDefinition();
				this.state = 2692;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 2688;
					this.match(trinoSqlParser.COMMA_);
					this.state = 2689;
					this.measureDefinition();
					}
					}
					this.state = 2694;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2697;
			this.frameExtent();
			this.state = 2701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 2698;
				this.match(trinoSqlParser.AFTER_);
				this.state = 2699;
				this.match(trinoSqlParser.MATCH_);
				this.state = 2700;
				this.skipTo();
				}
			}

			this.state = 2704;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===98 || _la===211) {
				{
				this.state = 2703;
				_la = this._input.LA(1);
				if(!(_la===98 || _la===211)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 2711;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===174) {
				{
				this.state = 2706;
				this.match(trinoSqlParser.PATTERN_);
				this.state = 2707;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2708;
				this.rowPattern(0);
				this.state = 2709;
				this.match(trinoSqlParser.RPAREN_);
				}
			}

			this.state = 2722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===222) {
				{
				this.state = 2713;
				this.match(trinoSqlParser.SUBSET_);
				this.state = 2714;
				this.subsetDefinition();
				this.state = 2719;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 2715;
					this.match(trinoSqlParser.COMMA_);
					this.state = 2716;
					this.subsetDefinition();
					}
					}
					this.state = 2721;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===56) {
				{
				this.state = 2724;
				this.match(trinoSqlParser.DEFINE_);
				this.state = 2725;
				this.variableDefinition();
				this.state = 2730;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 2726;
					this.match(trinoSqlParser.COMMA_);
					this.state = 2727;
					this.variableDefinition();
					}
					}
					this.state = 2732;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
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
	public frameExtent(): FrameExtentContext {
		let localctx: FrameExtentContext = new FrameExtentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, trinoSqlParser.RULE_frameExtent);
		try {
			this.state = 2759;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 366, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2735;
				localctx._frameType = this.match(trinoSqlParser.RANGE_);
				this.state = 2736;
				localctx._start_ = this.frameBound();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2737;
				localctx._frameType = this.match(trinoSqlParser.ROWS_);
				this.state = 2738;
				localctx._start_ = this.frameBound();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2739;
				localctx._frameType = this.match(trinoSqlParser.GROUPS_);
				this.state = 2740;
				localctx._start_ = this.frameBound();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2741;
				localctx._frameType = this.match(trinoSqlParser.RANGE_);
				this.state = 2742;
				this.match(trinoSqlParser.BETWEEN_);
				this.state = 2743;
				localctx._start_ = this.frameBound();
				this.state = 2744;
				this.match(trinoSqlParser.AND_);
				this.state = 2745;
				localctx._end_ = this.frameBound();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2747;
				localctx._frameType = this.match(trinoSqlParser.ROWS_);
				this.state = 2748;
				this.match(trinoSqlParser.BETWEEN_);
				this.state = 2749;
				localctx._start_ = this.frameBound();
				this.state = 2750;
				this.match(trinoSqlParser.AND_);
				this.state = 2751;
				localctx._end_ = this.frameBound();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2753;
				localctx._frameType = this.match(trinoSqlParser.GROUPS_);
				this.state = 2754;
				this.match(trinoSqlParser.BETWEEN_);
				this.state = 2755;
				localctx._start_ = this.frameBound();
				this.state = 2756;
				this.match(trinoSqlParser.AND_);
				this.state = 2757;
				localctx._end_ = this.frameBound();
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
		this.enterRule(localctx, 180, trinoSqlParser.RULE_frameBound);
		let _la: number;
		try {
			this.state = 2770;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 367, this._ctx) ) {
			case 1:
				localctx = new UnboundedFrameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2761;
				this.match(trinoSqlParser.UNBOUNDED_);
				this.state = 2762;
				(localctx as UnboundedFrameContext)._boundType = this.match(trinoSqlParser.PRECEDING_);
				}
				break;
			case 2:
				localctx = new UnboundedFrameContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2763;
				this.match(trinoSqlParser.UNBOUNDED_);
				this.state = 2764;
				(localctx as UnboundedFrameContext)._boundType = this.match(trinoSqlParser.FOLLOWING_);
				}
				break;
			case 3:
				localctx = new CurrentRowBoundContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2765;
				this.match(trinoSqlParser.CURRENT_);
				this.state = 2766;
				this.match(trinoSqlParser.ROW_);
				}
				break;
			case 4:
				localctx = new BoundedFrameContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2767;
				this.expression();
				this.state = 2768;
				(localctx as BoundedFrameContext)._boundType = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===78 || _la===179)) {
				    (localctx as BoundedFrameContext)._boundType = this._errHandler.recoverInline(this);
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

	public rowPattern(): RowPatternContext;
	public rowPattern(_p: number): RowPatternContext;
	// @RuleVersion(0)
	public rowPattern(_p?: number): RowPatternContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: RowPatternContext = new RowPatternContext(this, this._ctx, _parentState);
		let _prevctx: RowPatternContext = localctx;
		let _startState: number = 182;
		this.enterRecursionRule(localctx, 182, trinoSqlParser.RULE_rowPattern, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new QuantifiedPrimaryContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2773;
			this.patternPrimary();
			this.state = 2775;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 368, this._ctx) ) {
			case 1:
				{
				this.state = 2774;
				this.patternQuantifier();
				}
				break;
			}
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2784;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 370, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2782;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 369, this._ctx) ) {
					case 1:
						{
						localctx = new PatternConcatenationContext(this, new RowPatternContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParser.RULE_rowPattern);
						this.state = 2777;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2778;
						this.rowPattern(3);
						}
						break;
					case 2:
						{
						localctx = new PatternAlternationContext(this, new RowPatternContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, trinoSqlParser.RULE_rowPattern);
						this.state = 2779;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2780;
						this.match(trinoSqlParser.VBAR_);
						this.state = 2781;
						this.rowPattern(2);
						}
						break;
					}
					}
				}
				this.state = 2786;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 370, this._ctx);
			}
			}
		}
		catch (re) {
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
	public patternPrimary(): PatternPrimaryContext {
		let localctx: PatternPrimaryContext = new PatternPrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, trinoSqlParser.RULE_patternPrimary);
		let _la: number;
		try {
			this.state = 2812;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 372, this._ctx) ) {
			case 1:
				localctx = new PatternVariableContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2787;
				this.identifier();
				}
				break;
			case 2:
				localctx = new EmptyPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2788;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2789;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 3:
				localctx = new PatternPermutationContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2790;
				this.match(trinoSqlParser.PERMUTE_);
				this.state = 2791;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2792;
				this.rowPattern(0);
				this.state = 2797;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===290) {
					{
					{
					this.state = 2793;
					this.match(trinoSqlParser.COMMA_);
					this.state = 2794;
					this.rowPattern(0);
					}
					}
					this.state = 2799;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2800;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 4:
				localctx = new GroupedPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2802;
				this.match(trinoSqlParser.LPAREN_);
				this.state = 2803;
				this.rowPattern(0);
				this.state = 2804;
				this.match(trinoSqlParser.RPAREN_);
				}
				break;
			case 5:
				localctx = new PartitionStartAnchorContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2806;
				this.match(trinoSqlParser.CARET_);
				}
				break;
			case 6:
				localctx = new PartitionEndAnchorContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2807;
				this.match(trinoSqlParser.DOLLAR_);
				}
				break;
			case 7:
				localctx = new ExcludedPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2808;
				this.match(trinoSqlParser.LCURLYHYPHEN_);
				this.state = 2809;
				this.rowPattern(0);
				this.state = 2810;
				this.match(trinoSqlParser.RCURLYHYPHEN_);
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
	public patternQuantifier(): PatternQuantifierContext {
		let localctx: PatternQuantifierContext = new PatternQuantifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, trinoSqlParser.RULE_patternQuantifier);
		let _la: number;
		try {
			this.state = 2844;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 380, this._ctx) ) {
			case 1:
				localctx = new ZeroOrMoreQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2814;
				this.match(trinoSqlParser.ASTERISK_);
				this.state = 2816;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 373, this._ctx) ) {
				case 1:
					{
					this.state = 2815;
					(localctx as ZeroOrMoreQuantifierContext)._reluctant = this.match(trinoSqlParser.QUESTION_MARK_);
					}
					break;
				}
				}
				break;
			case 2:
				localctx = new OneOrMoreQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2818;
				this.match(trinoSqlParser.PLUS_);
				this.state = 2820;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 374, this._ctx) ) {
				case 1:
					{
					this.state = 2819;
					(localctx as OneOrMoreQuantifierContext)._reluctant = this.match(trinoSqlParser.QUESTION_MARK_);
					}
					break;
				}
				}
				break;
			case 3:
				localctx = new ZeroOrOneQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2822;
				this.match(trinoSqlParser.QUESTION_MARK_);
				this.state = 2824;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 375, this._ctx) ) {
				case 1:
					{
					this.state = 2823;
					(localctx as ZeroOrOneQuantifierContext)._reluctant = this.match(trinoSqlParser.QUESTION_MARK_);
					}
					break;
				}
				}
				break;
			case 4:
				localctx = new RangeQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2826;
				this.match(trinoSqlParser.LCURLY_);
				this.state = 2827;
				(localctx as RangeQuantifierContext)._exactly = this.match(trinoSqlParser.INTEGER_VALUE_);
				this.state = 2828;
				this.match(trinoSqlParser.RCURLY_);
				this.state = 2830;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 376, this._ctx) ) {
				case 1:
					{
					this.state = 2829;
					(localctx as RangeQuantifierContext)._reluctant = this.match(trinoSqlParser.QUESTION_MARK_);
					}
					break;
				}
				}
				break;
			case 5:
				localctx = new RangeQuantifierContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2832;
				this.match(trinoSqlParser.LCURLY_);
				this.state = 2834;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===309) {
					{
					this.state = 2833;
					(localctx as RangeQuantifierContext)._atLeast = this.match(trinoSqlParser.INTEGER_VALUE_);
					}
				}

				this.state = 2836;
				this.match(trinoSqlParser.COMMA_);
				this.state = 2838;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===309) {
					{
					this.state = 2837;
					(localctx as RangeQuantifierContext)._atMost = this.match(trinoSqlParser.INTEGER_VALUE_);
					}
				}

				this.state = 2840;
				this.match(trinoSqlParser.RCURLY_);
				this.state = 2842;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 379, this._ctx) ) {
				case 1:
					{
					this.state = 2841;
					(localctx as RangeQuantifierContext)._reluctant = this.match(trinoSqlParser.QUESTION_MARK_);
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
	public updateAssignment(): UpdateAssignmentContext {
		let localctx: UpdateAssignmentContext = new UpdateAssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, trinoSqlParser.RULE_updateAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2846;
			this.identifier();
			this.state = 2847;
			this.match(trinoSqlParser.EQ_);
			this.state = 2848;
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
	public explainOption(): ExplainOptionContext {
		let localctx: ExplainOptionContext = new ExplainOptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, trinoSqlParser.RULE_explainOption);
		let _la: number;
		try {
			this.state = 2854;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 80:
				localctx = new ExplainFormatContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2850;
				this.match(trinoSqlParser.FORMAT_);
				this.state = 2851;
				(localctx as ExplainFormatContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===88 || _la===110 || _la===228)) {
				    (localctx as ExplainFormatContext)._value = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 241:
				localctx = new ExplainTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2852;
				this.match(trinoSqlParser.TYPE_);
				this.state = 2853;
				(localctx as ExplainTypeContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===58 || _la===106 || _la===130 || _la===258)) {
				    (localctx as ExplainTypeContext)._value = this._errHandler.recoverInline(this);
				}
				else {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public transactionMode(): TransactionModeContext {
		let localctx: TransactionModeContext = new TransactionModeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, trinoSqlParser.RULE_transactionMode);
		let _la: number;
		try {
			this.state = 2861;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 108:
				localctx = new IsolationLevelContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2856;
				this.match(trinoSqlParser.ISOLATION_);
				this.state = 2857;
				this.match(trinoSqlParser.LEVEL_);
				this.state = 2858;
				this.levelOfIsolation();
				}
				break;
			case 187:
				localctx = new TransactionAccessModeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2859;
				this.match(trinoSqlParser.READ_);
				this.state = 2860;
				(localctx as TransactionAccessModeContext)._accessMode = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===160 || _la===272)) {
				    (localctx as TransactionAccessModeContext)._accessMode = this._errHandler.recoverInline(this);
				}
				else {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public levelOfIsolation(): LevelOfIsolationContext {
		let localctx: LevelOfIsolationContext = new LevelOfIsolationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, trinoSqlParser.RULE_levelOfIsolation);
		try {
			this.state = 2870;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 383, this._ctx) ) {
			case 1:
				localctx = new ReadUncommittedContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2863;
				this.match(trinoSqlParser.READ_);
				this.state = 2864;
				this.match(trinoSqlParser.UNCOMMITTED_);
				}
				break;
			case 2:
				localctx = new ReadCommittedContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2865;
				this.match(trinoSqlParser.READ_);
				this.state = 2866;
				this.match(trinoSqlParser.COMMITTED_);
				}
				break;
			case 3:
				localctx = new RepeatableReadContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2867;
				this.match(trinoSqlParser.REPEATABLE_);
				this.state = 2868;
				this.match(trinoSqlParser.READ_);
				}
				break;
			case 4:
				localctx = new SerializableContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2869;
				this.match(trinoSqlParser.SERIALIZABLE_);
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
	public callArgument(): CallArgumentContext {
		let localctx: CallArgumentContext = new CallArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, trinoSqlParser.RULE_callArgument);
		try {
			this.state = 2877;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 384, this._ctx) ) {
			case 1:
				localctx = new PositionalArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2872;
				this.expression();
				}
				break;
			case 2:
				localctx = new NamedArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2873;
				this.identifier();
				this.state = 2874;
				this.match(trinoSqlParser.RDOUBLEARROW_);
				this.state = 2875;
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
	public pathElement(): PathElementContext {
		let localctx: PathElementContext = new PathElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, trinoSqlParser.RULE_pathElement);
		try {
			this.state = 2884;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 385, this._ctx) ) {
			case 1:
				localctx = new QualifiedArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2879;
				this.identifier();
				this.state = 2880;
				this.match(trinoSqlParser.DOT_);
				this.state = 2881;
				this.identifier();
				}
				break;
			case 2:
				localctx = new UnqualifiedArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2883;
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
	public pathSpecification(): PathSpecificationContext {
		let localctx: PathSpecificationContext = new PathSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, trinoSqlParser.RULE_pathSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2886;
			this.pathElement();
			this.state = 2891;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===290) {
				{
				{
				this.state = 2887;
				this.match(trinoSqlParser.COMMA_);
				this.state = 2888;
				this.pathElement();
				}
				}
				this.state = 2893;
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
	public privilege(): PrivilegeContext {
		let localctx: PrivilegeContext = new PrivilegeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, trinoSqlParser.RULE_privilege);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2894;
			_la = this._input.LA(1);
			if(!(_la===33 || _la===51 || _la===101 || _la===212 || _la===251)) {
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
	public qualifiedName(): QualifiedNameContext {
		let localctx: QualifiedNameContext = new QualifiedNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, trinoSqlParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2896;
			this.identifier();
			this.state = 2901;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 387, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2897;
					this.match(trinoSqlParser.DOT_);
					this.state = 2898;
					this.identifier();
					}
					}
				}
				this.state = 2903;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 387, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public queryPeriod(): QueryPeriodContext {
		let localctx: QueryPeriodContext = new QueryPeriodContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, trinoSqlParser.RULE_queryPeriod);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2904;
			this.match(trinoSqlParser.FOR_);
			this.state = 2905;
			this.rangeType();
			this.state = 2906;
			this.match(trinoSqlParser.AS_);
			this.state = 2907;
			this.match(trinoSqlParser.OF_);
			this.state = 2908;
			localctx._end = this.valueExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rangeType(): RangeTypeContext {
		let localctx: RangeTypeContext = new RangeTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, trinoSqlParser.RULE_rangeType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2910;
			_la = this._input.LA(1);
			if(!(_la===233 || _la===262)) {
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
	public grantor(): GrantorContext {
		let localctx: GrantorContext = new GrantorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, trinoSqlParser.RULE_grantor);
		try {
			this.state = 2915;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 7:
			case 9:
			case 10:
			case 12:
			case 13:
			case 14:
			case 15:
			case 17:
			case 19:
			case 20:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 31:
			case 32:
			case 36:
			case 45:
			case 46:
			case 47:
			case 49:
			case 50:
			case 52:
			case 53:
			case 55:
			case 56:
			case 58:
			case 59:
			case 62:
			case 63:
			case 65:
			case 68:
			case 71:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 80:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 91:
			case 93:
			case 94:
			case 95:
			case 97:
			case 98:
			case 100:
			case 103:
			case 105:
			case 106:
			case 108:
			case 110:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 123:
			case 125:
			case 127:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 159:
			case 160:
			case 161:
			case 164:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 189:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 199:
			case 200:
			case 201:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 209:
			case 210:
			case 211:
			case 213:
			case 214:
			case 215:
			case 216:
			case 217:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 226:
			case 227:
			case 228:
			case 229:
			case 231:
			case 232:
			case 233:
			case 234:
			case 235:
			case 236:
			case 239:
			case 240:
			case 241:
			case 243:
			case 244:
			case 245:
			case 247:
			case 248:
			case 249:
			case 251:
			case 252:
			case 253:
			case 255:
			case 256:
			case 257:
			case 258:
			case 259:
			case 261:
			case 262:
			case 263:
			case 266:
			case 268:
			case 269:
			case 270:
			case 271:
			case 272:
			case 273:
			case 274:
			case 312:
			case 313:
			case 314:
			case 315:
				localctx = new SpecifiedPrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2912;
				this.principal();
				}
				break;
			case 44:
				localctx = new CurrentUserGrantorContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2913;
				this.match(trinoSqlParser.CURRENT_USER_);
				}
				break;
			case 40:
				localctx = new CurrentRoleGrantorContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2914;
				this.match(trinoSqlParser.CURRENT_ROLE_);
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
	public principal(): PrincipalContext {
		let localctx: PrincipalContext = new PrincipalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, trinoSqlParser.RULE_principal);
		try {
			this.state = 2922;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 389, this._ctx) ) {
			case 1:
				localctx = new UnspecifiedPrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2917;
				this.identifier();
				}
				break;
			case 2:
				localctx = new UserPrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2918;
				this.match(trinoSqlParser.USER_);
				this.state = 2919;
				this.identifier();
				}
				break;
			case 3:
				localctx = new RolePrincipalContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2920;
				this.match(trinoSqlParser.ROLE_);
				this.state = 2921;
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
	public roles(): RolesContext {
		let localctx: RolesContext = new RolesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, trinoSqlParser.RULE_roles);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2924;
			this.identifier();
			this.state = 2929;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===290) {
				{
				{
				this.state = 2925;
				this.match(trinoSqlParser.COMMA_);
				this.state = 2926;
				this.identifier();
				}
				}
				this.state = 2931;
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
		this.enterRule(localctx, 216, trinoSqlParser.RULE_identifier);
		try {
			this.state = 2937;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 312:
				localctx = new UnquotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2932;
				this.match(trinoSqlParser.IDENTIFIER_);
				}
				break;
			case 314:
				localctx = new QuotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2933;
				this.match(trinoSqlParser.QUOTED_IDENTIFIER_);
				}
				break;
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 7:
			case 9:
			case 10:
			case 12:
			case 13:
			case 14:
			case 15:
			case 17:
			case 19:
			case 20:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 31:
			case 32:
			case 36:
			case 45:
			case 46:
			case 47:
			case 49:
			case 50:
			case 52:
			case 53:
			case 55:
			case 56:
			case 58:
			case 59:
			case 62:
			case 63:
			case 65:
			case 68:
			case 71:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 80:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 91:
			case 93:
			case 94:
			case 95:
			case 97:
			case 98:
			case 100:
			case 103:
			case 105:
			case 106:
			case 108:
			case 110:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 123:
			case 125:
			case 127:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 159:
			case 160:
			case 161:
			case 164:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 189:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 199:
			case 200:
			case 201:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 209:
			case 210:
			case 211:
			case 213:
			case 214:
			case 215:
			case 216:
			case 217:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 226:
			case 227:
			case 228:
			case 229:
			case 231:
			case 232:
			case 233:
			case 234:
			case 235:
			case 236:
			case 239:
			case 240:
			case 241:
			case 243:
			case 244:
			case 245:
			case 247:
			case 248:
			case 249:
			case 251:
			case 252:
			case 253:
			case 255:
			case 256:
			case 257:
			case 258:
			case 259:
			case 261:
			case 262:
			case 263:
			case 266:
			case 268:
			case 269:
			case 270:
			case 271:
			case 272:
			case 273:
			case 274:
				localctx = new UnquotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2934;
				this.nonReserved();
				}
				break;
			case 315:
				localctx = new BackQuotedIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2935;
				this.match(trinoSqlParser.BACKQUOTED_IDENTIFIER_);
				}
				break;
			case 313:
				localctx = new DigitIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2936;
				this.match(trinoSqlParser.DIGIT_IDENTIFIER_);
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
	public number_(): NumberContext {
		let localctx: NumberContext = new NumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, trinoSqlParser.RULE_number);
		let _la: number;
		try {
			this.state = 2951;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 395, this._ctx) ) {
			case 1:
				localctx = new DecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2940;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===282) {
					{
					this.state = 2939;
					this.match(trinoSqlParser.MINUS_);
					}
				}

				this.state = 2942;
				this.match(trinoSqlParser.DECIMAL_VALUE_);
				}
				break;
			case 2:
				localctx = new DoubleLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2944;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===282) {
					{
					this.state = 2943;
					this.match(trinoSqlParser.MINUS_);
					}
				}

				this.state = 2946;
				this.match(trinoSqlParser.DOUBLE_VALUE_);
				}
				break;
			case 3:
				localctx = new IntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2948;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===282) {
					{
					this.state = 2947;
					this.match(trinoSqlParser.MINUS_);
					}
				}

				this.state = 2950;
				this.match(trinoSqlParser.INTEGER_VALUE_);
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
	public nonReserved(): NonReservedContext {
		let localctx: NonReservedContext = new NonReservedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, trinoSqlParser.RULE_nonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2953;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3214603966) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3451314193) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 1962720841) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 1442327371) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 4022859775) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & 4278059005) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 3753836475) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 4223384059) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 16295) !== 0))) {
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
		case 20:
			return this.queryTerm_sempred(localctx as QueryTermContext, predIndex);
		case 32:
			return this.relation_sempred(localctx as RelationContext, predIndex);
		case 58:
			return this.booleanExpression_sempred(localctx as BooleanExpressionContext, predIndex);
		case 60:
			return this.valueExpression_sempred(localctx as ValueExpressionContext, predIndex);
		case 61:
			return this.primaryExpression_sempred(localctx as PrimaryExpressionContext, predIndex);
		case 81:
			return this.type_sempred(localctx as TypeContext, predIndex);
		case 91:
			return this.rowPattern_sempred(localctx as RowPatternContext, predIndex);
		}
		return true;
	}
	private queryTerm_sempred(localctx: QueryTermContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relation_sempred(localctx: RelationContext, predIndex: number): boolean {
		switch (predIndex) {
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
	private primaryExpression_sempred(localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 24);
		case 10:
			return this.precpred(this._ctx, 22);
		}
		return true;
	}
	private type_sempred(localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private rowPattern_sempred(localctx: RowPatternContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.precpred(this._ctx, 2);
		case 13:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,319,2956,2,0,7,0,
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
	7,109,2,110,7,110,1,0,5,0,224,8,0,10,0,12,0,227,9,0,1,0,1,0,1,1,1,1,1,1,
	1,1,1,1,1,1,3,1,237,8,1,3,1,239,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,
	1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,3,7,269,8,7,1,7,1,7,1,7,3,7,274,8,7,1,7,1,7,3,7,278,8,7,1,7,1,7,1,7,
	1,7,3,7,284,8,7,1,7,1,7,3,7,288,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,309,8,7,1,7,1,7,3,7,313,8,7,
	1,7,1,7,3,7,317,8,7,1,7,1,7,3,7,321,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,329,
	8,7,1,7,1,7,3,7,333,8,7,1,7,3,7,336,8,7,1,7,1,7,1,7,1,7,1,7,3,7,343,8,7,
	1,7,1,7,1,7,1,7,1,7,5,7,350,8,7,10,7,12,7,353,9,7,1,7,1,7,1,7,3,7,358,8,
	7,1,7,1,7,3,7,362,8,7,1,7,1,7,1,7,1,7,3,7,368,8,7,1,7,1,7,1,7,1,7,1,7,3,
	7,375,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,384,8,7,1,7,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,3,7,396,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,405,8,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,414,8,7,1,7,1,7,1,7,1,7,3,7,420,8,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,431,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,439,
	8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,447,8,7,1,7,1,7,1,7,1,7,1,7,3,7,454,8,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,464,8,7,1,7,1,7,1,7,1,7,1,7,3,7,471,
	8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,479,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,5,7,513,8,7,10,7,12,7,516,9,7,3,7,518,8,7,1,7,3,
	7,521,8,7,1,7,1,7,3,7,525,8,7,1,7,1,7,1,7,1,7,3,7,531,8,7,1,7,1,7,1,7,3,
	7,536,8,7,1,7,1,7,1,7,1,7,1,7,3,7,543,8,7,1,7,1,7,1,7,1,7,3,7,549,8,7,1,
	7,1,7,3,7,553,8,7,1,7,1,7,3,7,557,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,565,8,
	7,1,7,1,7,1,7,1,7,3,7,571,8,7,1,7,1,7,3,7,575,8,7,1,7,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,589,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,597,8,
	7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,
	7,616,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,5,7,639,8,7,10,7,12,7,642,9,7,3,7,644,8,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,3,7,654,8,7,1,7,1,7,3,7,658,8,7,1,7,1,7,1,7,1,7,
	1,7,3,7,665,8,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,673,8,7,10,7,12,7,676,9,7,1,
	7,1,7,1,7,3,7,681,8,7,1,7,1,7,1,7,3,7,686,8,7,1,7,1,7,3,7,690,8,7,1,7,1,
	7,1,7,1,7,3,7,696,8,7,1,7,1,7,1,7,1,7,1,7,5,7,703,8,7,10,7,12,7,706,9,7,
	1,7,1,7,1,7,3,7,711,8,7,1,7,1,7,3,7,715,8,7,1,7,1,7,1,7,1,7,1,7,3,7,722,
	8,7,1,7,1,7,3,7,726,8,7,1,7,1,7,1,7,1,7,5,7,732,8,7,10,7,12,7,735,9,7,1,
	7,1,7,3,7,739,8,7,1,7,1,7,3,7,743,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,751,8,
	7,1,7,1,7,1,7,1,7,5,7,757,8,7,10,7,12,7,760,9,7,1,7,1,7,3,7,764,8,7,1,7,
	1,7,3,7,768,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,778,8,7,1,7,1,7,1,7,
	5,7,783,8,7,10,7,12,7,786,9,7,1,7,1,7,3,7,790,8,7,1,7,1,7,3,7,794,8,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,804,8,7,1,7,3,7,807,8,7,1,7,1,7,1,7,1,
	7,1,7,5,7,814,8,7,10,7,12,7,817,9,7,1,7,1,7,3,7,821,8,7,1,7,1,7,1,7,1,7,
	3,7,827,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,851,8,7,1,7,1,7,1,7,1,7,3,7,857,8,7,3,7,
	859,8,7,1,7,1,7,1,7,1,7,3,7,865,8,7,1,7,1,7,1,7,1,7,3,7,871,8,7,3,7,873,
	8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,881,8,7,3,7,883,8,7,1,7,1,7,1,7,1,7,3,7,
	889,8,7,1,7,1,7,1,7,1,7,3,7,895,8,7,3,7,897,8,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,912,8,7,1,7,1,7,1,7,3,7,917,8,7,1,7,1,7,
	1,7,1,7,1,7,3,7,924,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,936,
	8,7,3,7,938,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,946,8,7,3,7,948,8,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,964,8,7,10,7,12,7,967,
	9,7,3,7,969,8,7,1,7,1,7,3,7,973,8,7,1,7,1,7,3,7,977,8,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,993,8,7,10,7,12,7,996,9,7,3,
	7,998,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,1014,
	8,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,1022,8,7,10,7,12,7,1025,9,7,1,7,1,7,3,7,
	1029,8,7,1,7,1,7,1,7,1,7,3,7,1035,8,7,1,7,3,7,1038,8,7,1,7,1,7,1,7,1,7,
	1,7,4,7,1045,8,7,11,7,12,7,1046,3,7,1049,8,7,1,8,3,8,1052,8,8,1,8,1,8,1,
	9,1,9,3,9,1058,8,9,1,9,1,9,1,9,5,9,1063,8,9,10,9,12,9,1066,9,9,1,10,1,10,
	3,10,1070,8,10,1,11,1,11,1,11,1,11,3,11,1076,8,11,1,11,1,11,3,11,1080,8,
	11,1,11,1,11,3,11,1084,8,11,1,12,1,12,1,12,1,12,3,12,1090,8,12,1,13,1,13,
	1,13,1,13,1,14,1,14,1,14,5,14,1099,8,14,10,14,12,14,1102,9,14,1,15,1,15,
	1,15,1,15,1,16,1,16,3,16,1110,8,16,1,17,1,17,1,17,1,17,1,17,1,17,5,17,1118,
	8,17,10,17,12,17,1121,9,17,3,17,1123,8,17,1,17,1,17,1,17,3,17,1128,8,17,
	3,17,1130,8,17,1,17,1,17,1,17,1,17,1,17,3,17,1137,8,17,1,17,1,17,1,17,1,
	17,3,17,1143,8,17,3,17,1145,8,17,1,18,1,18,3,18,1149,8,18,1,19,1,19,1,20,
	1,20,1,20,1,20,1,20,1,20,3,20,1159,8,20,1,20,1,20,1,20,1,20,3,20,1165,8,
	20,1,20,5,20,1168,8,20,10,20,12,20,1171,9,20,1,21,1,21,1,21,1,21,1,21,1,
	21,1,21,5,21,1180,8,21,10,21,12,21,1183,9,21,1,21,1,21,1,21,1,21,3,21,1189,
	8,21,1,22,1,22,3,22,1193,8,22,1,22,1,22,3,22,1197,8,22,1,23,1,23,3,23,1201,
	8,23,1,23,1,23,1,23,5,23,1206,8,23,10,23,12,23,1209,9,23,1,23,1,23,1,23,
	1,23,5,23,1215,8,23,10,23,12,23,1218,9,23,3,23,1220,8,23,1,23,1,23,3,23,
	1224,8,23,1,23,1,23,1,23,3,23,1229,8,23,1,23,1,23,3,23,1233,8,23,1,23,1,
	23,1,23,1,23,5,23,1239,8,23,10,23,12,23,1242,9,23,3,23,1244,8,23,1,24,3,
	24,1247,8,24,1,24,1,24,1,24,5,24,1252,8,24,10,24,12,24,1255,9,24,1,25,1,
	25,1,25,1,25,1,25,1,25,5,25,1263,8,25,10,25,12,25,1266,9,25,3,25,1268,8,
	25,1,25,1,25,1,25,1,25,1,25,1,25,5,25,1276,8,25,10,25,12,25,1279,9,25,3,
	25,1281,8,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,5,25,1290,8,25,10,25,12,
	25,1293,9,25,1,25,1,25,3,25,1297,8,25,1,26,1,26,1,26,1,26,5,26,1303,8,26,
	10,26,12,26,1306,9,26,3,26,1308,8,26,1,26,1,26,3,26,1312,8,26,1,27,1,27,
	1,27,1,27,1,27,1,27,1,28,3,28,1321,8,28,1,28,1,28,1,28,1,28,1,28,5,28,1328,
	8,28,10,28,12,28,1331,9,28,3,28,1333,8,28,1,28,1,28,1,28,1,28,1,28,5,28,
	1340,8,28,10,28,12,28,1343,9,28,3,28,1345,8,28,1,28,3,28,1348,8,28,1,29,
	1,29,3,29,1352,8,29,1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,31,1,31,3,31,1363,
	8,31,1,31,3,31,1366,8,31,1,31,1,31,1,31,1,31,1,31,3,31,1373,8,31,1,31,3,
	31,1376,8,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,3,32,1395,8,32,5,32,1397,8,32,10,32,12,32,1400,
	9,32,1,33,3,33,1403,8,33,1,33,1,33,3,33,1407,8,33,3,33,1409,8,33,1,34,1,
	34,1,34,1,34,1,34,1,34,1,34,5,34,1418,8,34,10,34,12,34,1421,9,34,1,34,1,
	34,3,34,1425,8,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,1434,8,35,1,36,
	1,36,1,37,1,37,1,38,1,38,1,38,3,38,1443,8,38,1,38,3,38,1446,8,38,1,39,1,
	39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,5,40,1459,8,40,10,40,12,
	40,1462,9,40,3,40,1464,8,40,1,40,1,40,1,40,1,40,1,40,5,40,1471,8,40,10,
	40,12,40,1474,9,40,3,40,1476,8,40,1,40,1,40,1,40,1,40,5,40,1482,8,40,10,
	40,12,40,1485,9,40,3,40,1487,8,40,1,40,3,40,1490,8,40,1,40,1,40,1,40,3,
	40,1495,8,40,1,40,3,40,1498,8,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,
	5,40,1508,8,40,10,40,12,40,1511,9,40,3,40,1513,8,40,1,40,1,40,1,40,1,40,
	5,40,1519,8,40,10,40,12,40,1522,9,40,1,40,1,40,3,40,1526,8,40,1,40,1,40,
	3,40,1530,8,40,3,40,1532,8,40,3,40,1534,8,40,1,41,1,41,1,41,1,41,1,42,1,
	42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,1549,8,42,3,42,1551,8,42,1,43,
	1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,1562,8,43,1,44,1,44,1,44,1,
	44,1,44,3,44,1569,8,44,1,44,3,44,1572,8,44,1,44,1,44,1,44,3,44,1577,8,44,
	1,45,1,45,1,45,1,45,1,45,1,45,5,45,1585,8,45,10,45,12,45,1588,9,45,1,45,
	1,45,1,46,1,46,1,46,1,46,1,47,1,47,3,47,1598,8,47,1,47,1,47,3,47,1602,8,
	47,3,47,1604,8,47,1,48,1,48,1,48,1,48,5,48,1610,8,48,10,48,12,48,1613,9,
	48,1,48,1,48,1,49,1,49,3,49,1619,8,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,
	1,49,1,49,5,49,1630,8,49,10,49,12,49,1633,9,49,1,49,1,49,1,49,3,49,1638,
	8,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
	49,3,49,1654,8,49,1,50,1,50,1,50,1,50,1,50,5,50,1661,8,50,10,50,12,50,1664,
	9,50,3,50,1666,8,50,1,50,1,50,1,50,1,50,5,50,1672,8,50,10,50,12,50,1675,
	9,50,3,50,1677,8,50,1,50,1,50,1,51,1,51,1,51,3,51,1684,8,51,1,51,1,51,1,
	51,3,51,1689,8,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,5,52,1698,8,52,10,
	52,12,52,1701,9,52,3,52,1703,8,52,1,52,1,52,3,52,1707,8,52,3,52,1709,8,
	52,1,52,1,52,1,52,1,52,1,52,1,52,3,52,1717,8,52,1,52,1,52,1,52,1,52,1,52,
	1,52,5,52,1725,8,52,10,52,12,52,1728,9,52,1,52,1,52,1,52,3,52,1733,8,52,
	3,52,1735,8,52,1,53,1,53,1,53,1,53,1,53,3,53,1742,8,53,1,53,1,53,3,53,1746,
	8,53,3,53,1748,8,53,1,53,1,53,1,53,1,53,1,53,3,53,1755,8,53,1,53,1,53,3,
	53,1759,8,53,3,53,1761,8,53,3,53,1763,8,53,1,54,1,54,1,54,1,54,1,54,5,54,
	1770,8,54,10,54,12,54,1773,9,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,
	3,54,1783,8,54,1,55,1,55,3,55,1787,8,55,1,56,1,56,1,56,1,56,1,56,1,56,5,
	56,1795,8,56,10,56,12,56,1798,9,56,1,56,1,56,1,57,1,57,1,58,1,58,1,58,3,
	58,1807,8,58,1,58,1,58,3,58,1811,8,58,1,58,1,58,1,58,1,58,1,58,1,58,5,58,
	1819,8,58,10,58,12,58,1822,9,58,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,
	1,59,1,59,3,59,1834,8,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,1842,8,59,1,
	59,1,59,1,59,1,59,1,59,5,59,1849,8,59,10,59,12,59,1852,9,59,1,59,1,59,1,
	59,3,59,1857,8,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,1865,8,59,1,59,1,59,
	1,59,1,59,3,59,1871,8,59,1,59,1,59,3,59,1875,8,59,1,59,1,59,1,59,3,59,1880,
	8,59,1,59,1,59,1,59,3,59,1885,8,59,1,60,1,60,1,60,1,60,3,60,1891,8,60,1,
	60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,5,60,1905,8,60,
	10,60,12,60,1908,9,60,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,
	1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,
	61,4,61,1935,8,61,11,61,12,61,1936,1,61,1,61,1,61,1,61,1,61,1,61,1,61,5,
	61,1946,8,61,10,61,12,61,1949,9,61,1,61,1,61,1,61,1,61,1,61,3,61,1956,8,
	61,1,61,1,61,1,61,3,61,1961,8,61,1,61,1,61,1,61,3,61,1966,8,61,1,61,1,61,
	1,61,1,61,1,61,1,61,1,61,1,61,1,61,5,61,1977,8,61,10,61,12,61,1980,9,61,
	1,61,1,61,1,61,3,61,1985,8,61,1,61,1,61,1,61,1,61,1,61,3,61,1992,8,61,1,
	61,1,61,1,61,3,61,1997,8,61,1,61,3,61,2000,8,61,1,61,3,61,2003,8,61,1,61,
	1,61,1,61,3,61,2008,8,61,1,61,1,61,1,61,5,61,2013,8,61,10,61,12,61,2016,
	9,61,3,61,2018,8,61,1,61,1,61,1,61,1,61,1,61,5,61,2025,8,61,10,61,12,61,
	2028,9,61,3,61,2030,8,61,1,61,1,61,3,61,2034,8,61,1,61,3,61,2037,8,61,1,
	61,3,61,2040,8,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,
	5,61,2053,8,61,10,61,12,61,2056,9,61,3,61,2058,8,61,1,61,1,61,1,61,1,61,
	1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,4,61,2075,8,61,11,
	61,12,61,2076,1,61,1,61,3,61,2081,8,61,1,61,1,61,1,61,1,61,4,61,2087,8,
	61,11,61,12,61,2088,1,61,1,61,3,61,2093,8,61,1,61,1,61,1,61,1,61,1,61,1,
	61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,
	1,61,5,61,2116,8,61,10,61,12,61,2119,9,61,3,61,2121,8,61,1,61,1,61,1,61,
	1,61,1,61,1,61,1,61,3,61,2130,8,61,1,61,1,61,1,61,1,61,3,61,2136,8,61,1,
	61,1,61,1,61,1,61,3,61,2142,8,61,1,61,1,61,1,61,1,61,3,61,2148,8,61,1,61,
	1,61,1,61,1,61,1,61,1,61,1,61,3,61,2157,8,61,1,61,3,61,2160,8,61,1,61,3,
	61,2163,8,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,
	1,61,1,61,1,61,1,61,1,61,3,61,2182,8,61,1,61,1,61,1,61,1,61,1,61,1,61,1,
	61,3,61,2191,8,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,
	1,61,1,61,1,61,1,61,1,61,1,61,1,61,5,61,2211,8,61,10,61,12,61,2214,9,61,
	3,61,2216,8,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,3,61,2226,8,61,1,
	61,1,61,1,61,1,61,1,61,1,61,1,61,3,61,2235,8,61,1,61,1,61,1,61,1,61,3,61,
	2241,8,61,1,61,1,61,1,61,1,61,3,61,2247,8,61,1,61,1,61,1,61,1,61,1,61,1,
	61,1,61,1,61,1,61,3,61,2258,8,61,3,61,2260,8,61,1,61,1,61,1,61,3,61,2265,
	8,61,1,61,1,61,1,61,1,61,1,61,3,61,2272,8,61,3,61,2274,8,61,1,61,1,61,1,
	61,1,61,3,61,2280,8,61,1,61,1,61,1,61,1,61,3,61,2286,8,61,1,61,1,61,1,61,
	1,61,1,61,1,61,1,61,5,61,2295,8,61,10,61,12,61,2298,9,61,1,61,1,61,1,61,
	1,61,1,61,1,61,3,61,2306,8,61,1,61,1,61,1,61,3,61,2311,8,61,1,61,1,61,1,
	61,3,61,2316,8,61,3,61,2318,8,61,3,61,2320,8,61,1,61,1,61,1,61,1,61,3,61,
	2326,8,61,3,61,2328,8,61,1,61,1,61,1,61,1,61,1,61,1,61,5,61,2336,8,61,10,
	61,12,61,2339,9,61,1,61,1,61,1,61,1,61,1,61,1,61,3,61,2347,8,61,3,61,2349,
	8,61,1,61,1,61,1,61,1,61,3,61,2355,8,61,3,61,2357,8,61,1,61,3,61,2360,8,
	61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,5,61,2370,8,61,10,61,12,61,2373,
	9,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,5,62,2382,8,62,10,62,12,62,2385,
	9,62,3,62,2387,8,62,1,63,1,63,1,63,3,63,2392,8,63,1,64,1,64,1,64,3,64,2397,
	8,64,1,65,1,65,1,65,1,65,1,66,1,66,1,67,1,67,1,67,1,67,3,67,2409,8,67,1,
	68,1,68,3,68,2413,8,68,1,68,1,68,3,68,2417,8,68,1,68,3,68,2420,8,68,3,68,
	2422,8,68,1,69,1,69,1,69,1,69,3,69,2428,8,69,1,70,3,70,2431,8,70,1,70,1,
	70,1,70,1,70,1,70,1,70,1,70,1,70,3,70,2441,8,70,1,71,1,71,1,72,1,72,1,72,
	1,72,3,72,2449,8,72,1,73,1,73,1,73,1,73,3,73,2455,8,73,3,73,2457,8,73,1,
	74,1,74,1,74,1,74,1,74,1,74,3,74,2465,8,74,1,75,1,75,1,76,1,76,1,77,1,77,
	1,78,1,78,3,78,2475,8,78,1,78,1,78,1,78,1,78,3,78,2481,8,78,1,79,1,79,1,
	80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,5,81,2493,8,81,10,81,12,81,2496,9,
	81,1,81,1,81,1,81,1,81,1,81,1,81,3,81,2504,8,81,1,81,1,81,1,81,1,81,1,81,
	3,81,2511,8,81,1,81,1,81,1,81,3,81,2516,8,81,1,81,1,81,1,81,1,81,1,81,3,
	81,2523,8,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,3,81,2533,8,81,1,81,
	1,81,1,81,3,81,2538,8,81,1,81,1,81,1,81,1,81,1,81,3,81,2545,8,81,1,81,1,
	81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,
	1,81,1,81,1,81,1,81,1,81,1,81,5,81,2569,8,81,10,81,12,81,2572,9,81,1,81,
	1,81,3,81,2576,8,81,3,81,2578,8,81,1,81,1,81,1,81,1,81,1,81,3,81,2585,8,
	81,5,81,2587,8,81,10,81,12,81,2590,9,81,1,82,1,82,1,82,1,82,3,82,2596,8,
	82,1,83,1,83,3,83,2600,8,83,1,84,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,
	1,85,1,85,1,86,1,86,1,86,1,86,3,86,2617,8,86,1,86,1,86,1,86,1,86,1,86,1,
	86,1,86,1,86,1,86,1,86,1,86,5,86,2630,8,86,10,86,12,86,2633,9,86,1,86,1,
	86,1,86,1,86,3,86,2639,8,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,3,86,2648,
	8,86,1,86,1,86,1,86,1,86,1,86,1,86,5,86,2656,8,86,10,86,12,86,2659,9,86,
	1,86,1,86,3,86,2663,8,86,1,86,1,86,1,86,1,86,1,86,5,86,2670,8,86,10,86,
	12,86,2673,9,86,1,86,1,86,3,86,2677,8,86,1,87,1,87,1,87,1,87,1,87,1,87,
	3,87,2685,8,87,1,88,1,88,1,88,1,88,5,88,2691,8,88,10,88,12,88,2694,9,88,
	3,88,2696,8,88,1,88,1,88,1,88,1,88,3,88,2702,8,88,1,88,3,88,2705,8,88,1,
	88,1,88,1,88,1,88,1,88,3,88,2712,8,88,1,88,1,88,1,88,1,88,5,88,2718,8,88,
	10,88,12,88,2721,9,88,3,88,2723,8,88,1,88,1,88,1,88,1,88,5,88,2729,8,88,
	10,88,12,88,2732,9,88,3,88,2734,8,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,
	1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,
	89,1,89,1,89,3,89,2760,8,89,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,
	3,90,2771,8,90,1,91,1,91,1,91,3,91,2776,8,91,1,91,1,91,1,91,1,91,1,91,5,
	91,2783,8,91,10,91,12,91,2786,9,91,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,
	92,5,92,2796,8,92,10,92,12,92,2799,9,92,1,92,1,92,1,92,1,92,1,92,1,92,1,
	92,1,92,1,92,1,92,1,92,1,92,3,92,2813,8,92,1,93,1,93,3,93,2817,8,93,1,93,
	1,93,3,93,2821,8,93,1,93,1,93,3,93,2825,8,93,1,93,1,93,1,93,1,93,3,93,2831,
	8,93,1,93,1,93,3,93,2835,8,93,1,93,1,93,3,93,2839,8,93,1,93,1,93,3,93,2843,
	8,93,3,93,2845,8,93,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,3,95,2855,8,
	95,1,96,1,96,1,96,1,96,1,96,3,96,2862,8,96,1,97,1,97,1,97,1,97,1,97,1,97,
	1,97,3,97,2871,8,97,1,98,1,98,1,98,1,98,1,98,3,98,2878,8,98,1,99,1,99,1,
	99,1,99,1,99,3,99,2885,8,99,1,100,1,100,1,100,5,100,2890,8,100,10,100,12,
	100,2893,9,100,1,101,1,101,1,102,1,102,1,102,5,102,2900,8,102,10,102,12,
	102,2903,9,102,1,103,1,103,1,103,1,103,1,103,1,103,1,104,1,104,1,105,1,
	105,1,105,3,105,2916,8,105,1,106,1,106,1,106,1,106,1,106,3,106,2923,8,106,
	1,107,1,107,1,107,5,107,2928,8,107,10,107,12,107,2931,9,107,1,108,1,108,
	1,108,1,108,1,108,3,108,2938,8,108,1,109,3,109,2941,8,109,1,109,1,109,3,
	109,2945,8,109,1,109,1,109,3,109,2949,8,109,1,109,3,109,2952,8,109,1,110,
	1,110,1,110,0,7,40,64,116,120,122,162,182,111,0,2,4,6,8,10,12,14,16,18,
	20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,
	68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,
	112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,
	148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,
	184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,
	220,0,37,2,0,20,20,195,195,2,0,50,50,105,105,2,0,207,207,225,225,2,0,81,
	81,96,96,2,0,68,68,97,97,1,0,203,204,2,0,77,77,142,142,2,0,287,287,309,
	309,2,0,67,67,246,246,2,0,12,12,53,53,2,0,77,77,119,119,2,0,5,5,57,57,3,
	0,82,82,122,122,198,198,2,0,15,15,224,224,3,0,17,17,121,121,235,235,2,0,
	267,267,269,269,2,0,98,98,211,211,1,0,281,282,1,0,283,285,2,0,116,116,156,
	156,1,0,255,257,4,0,65,65,73,73,238,238,248,248,2,0,29,29,245,245,2,0,10,
	10,154,154,2,0,76,76,205,205,1,0,275,280,3,0,5,5,9,9,219,219,2,0,73,73,
	238,238,5,0,47,47,93,93,139,140,209,209,273,273,1,0,143,146,2,0,78,78,179,
	179,3,0,88,88,110,110,228,228,4,0,58,58,106,106,130,130,258,258,2,0,160,
	160,272,272,5,0,33,33,51,51,101,101,212,212,251,251,2,0,233,233,262,262,
	55,0,1,5,7,7,9,10,12,15,17,17,19,20,23,29,31,32,36,36,45,47,49,50,52,53,
	55,56,58,59,62,63,65,65,68,68,71,71,74,78,80,80,83,88,91,91,93,95,97,98,
	100,100,103,103,105,106,108,108,110,110,116,121,123,123,125,125,127,127,
	130,140,142,148,152,157,159,161,164,164,166,180,182,187,189,197,199,201,
	203,211,213,217,219,224,226,229,231,236,239,241,243,245,247,249,251,253,
	255,259,261,263,266,266,268,274,3421,0,225,1,0,0,0,2,238,1,0,0,0,4,240,
	1,0,0,0,6,243,1,0,0,0,8,246,1,0,0,0,10,249,1,0,0,0,12,252,1,0,0,0,14,1048,
	1,0,0,0,16,1051,1,0,0,0,18,1055,1,0,0,0,20,1069,1,0,0,0,22,1071,1,0,0,0,
	24,1085,1,0,0,0,26,1091,1,0,0,0,28,1095,1,0,0,0,30,1103,1,0,0,0,32,1109,
	1,0,0,0,34,1111,1,0,0,0,36,1148,1,0,0,0,38,1150,1,0,0,0,40,1152,1,0,0,0,
	42,1188,1,0,0,0,44,1190,1,0,0,0,46,1198,1,0,0,0,48,1246,1,0,0,0,50,1296,
	1,0,0,0,52,1311,1,0,0,0,54,1313,1,0,0,0,56,1320,1,0,0,0,58,1349,1,0,0,0,
	60,1358,1,0,0,0,62,1375,1,0,0,0,64,1377,1,0,0,0,66,1408,1,0,0,0,68,1424,
	1,0,0,0,70,1426,1,0,0,0,72,1435,1,0,0,0,74,1437,1,0,0,0,76,1445,1,0,0,0,
	78,1447,1,0,0,0,80,1450,1,0,0,0,82,1535,1,0,0,0,84,1550,1,0,0,0,86,1561,
	1,0,0,0,88,1563,1,0,0,0,90,1578,1,0,0,0,92,1591,1,0,0,0,94,1595,1,0,0,0,
	96,1605,1,0,0,0,98,1653,1,0,0,0,100,1655,1,0,0,0,102,1683,1,0,0,0,104,1690,
	1,0,0,0,106,1762,1,0,0,0,108,1782,1,0,0,0,110,1784,1,0,0,0,112,1788,1,0,
	0,0,114,1801,1,0,0,0,116,1810,1,0,0,0,118,1884,1,0,0,0,120,1890,1,0,0,0,
	122,2359,1,0,0,0,124,2374,1,0,0,0,126,2388,1,0,0,0,128,2393,1,0,0,0,130,
	2398,1,0,0,0,132,2402,1,0,0,0,134,2408,1,0,0,0,136,2421,1,0,0,0,138,2427,
	1,0,0,0,140,2440,1,0,0,0,142,2442,1,0,0,0,144,2448,1,0,0,0,146,2456,1,0,
	0,0,148,2464,1,0,0,0,150,2466,1,0,0,0,152,2468,1,0,0,0,154,2470,1,0,0,0,
	156,2472,1,0,0,0,158,2482,1,0,0,0,160,2484,1,0,0,0,162,2577,1,0,0,0,164,
	2595,1,0,0,0,166,2599,1,0,0,0,168,2601,1,0,0,0,170,2606,1,0,0,0,172,2676,
	1,0,0,0,174,2678,1,0,0,0,176,2695,1,0,0,0,178,2759,1,0,0,0,180,2770,1,0,
	0,0,182,2772,1,0,0,0,184,2812,1,0,0,0,186,2844,1,0,0,0,188,2846,1,0,0,0,
	190,2854,1,0,0,0,192,2861,1,0,0,0,194,2870,1,0,0,0,196,2877,1,0,0,0,198,
	2884,1,0,0,0,200,2886,1,0,0,0,202,2894,1,0,0,0,204,2896,1,0,0,0,206,2904,
	1,0,0,0,208,2910,1,0,0,0,210,2915,1,0,0,0,212,2922,1,0,0,0,214,2924,1,0,
	0,0,216,2937,1,0,0,0,218,2951,1,0,0,0,220,2953,1,0,0,0,222,224,3,2,1,0,
	223,222,1,0,0,0,224,227,1,0,0,0,225,223,1,0,0,0,225,226,1,0,0,0,226,228,
	1,0,0,0,227,225,1,0,0,0,228,229,5,0,0,1,229,1,1,0,0,0,230,239,3,4,2,0,231,
	239,3,6,3,0,232,239,3,8,4,0,233,239,3,10,5,0,234,236,3,12,6,0,235,237,5,
	291,0,0,236,235,1,0,0,0,236,237,1,0,0,0,237,239,1,0,0,0,238,230,1,0,0,0,
	238,231,1,0,0,0,238,232,1,0,0,0,238,233,1,0,0,0,238,234,1,0,0,0,239,3,1,
	0,0,0,240,241,3,14,7,0,241,242,5,291,0,0,242,5,1,0,0,0,243,244,3,114,57,
	0,244,245,5,291,0,0,245,7,1,0,0,0,246,247,3,200,100,0,247,248,5,291,0,0,
	248,9,1,0,0,0,249,250,3,162,81,0,250,251,5,291,0,0,251,11,1,0,0,0,252,253,
	3,182,91,0,253,254,5,291,0,0,254,13,1,0,0,0,255,1049,3,16,8,0,256,257,5,
	252,0,0,257,1049,3,216,108,0,258,259,5,252,0,0,259,260,3,216,108,0,260,
	261,5,288,0,0,261,262,3,216,108,0,262,1049,1,0,0,0,263,264,5,33,0,0,264,
	268,5,207,0,0,265,266,5,94,0,0,266,267,5,150,0,0,267,269,5,70,0,0,268,265,
	1,0,0,0,268,269,1,0,0,0,269,270,1,0,0,0,270,273,3,204,102,0,271,272,5,14,
	0,0,272,274,3,212,106,0,273,271,1,0,0,0,273,274,1,0,0,0,274,277,1,0,0,0,
	275,276,5,267,0,0,276,278,3,26,13,0,277,275,1,0,0,0,277,278,1,0,0,0,278,
	1049,1,0,0,0,279,280,5,60,0,0,280,283,5,207,0,0,281,282,5,94,0,0,282,284,
	5,70,0,0,283,281,1,0,0,0,283,284,1,0,0,0,284,285,1,0,0,0,285,287,3,204,
	102,0,286,288,7,0,0,0,287,286,1,0,0,0,287,288,1,0,0,0,288,1049,1,0,0,0,
	289,290,5,6,0,0,290,291,5,207,0,0,291,292,3,204,102,0,292,293,5,190,0,0,
	293,294,5,234,0,0,294,295,3,216,108,0,295,1049,1,0,0,0,296,297,5,6,0,0,
	297,298,5,207,0,0,298,299,3,204,102,0,299,300,5,215,0,0,300,301,5,14,0,
	0,301,302,3,212,106,0,302,1049,1,0,0,0,303,304,5,33,0,0,304,308,5,225,0,
	0,305,306,5,94,0,0,306,307,5,150,0,0,307,309,5,70,0,0,308,305,1,0,0,0,308,
	309,1,0,0,0,309,310,1,0,0,0,310,312,3,204,102,0,311,313,3,96,48,0,312,311,
	1,0,0,0,312,313,1,0,0,0,313,316,1,0,0,0,314,315,5,26,0,0,315,317,3,146,
	73,0,316,314,1,0,0,0,316,317,1,0,0,0,317,320,1,0,0,0,318,319,5,267,0,0,
	319,321,3,26,13,0,320,318,1,0,0,0,320,321,1,0,0,0,321,322,1,0,0,0,322,328,
	5,11,0,0,323,329,3,16,8,0,324,325,5,292,0,0,325,326,3,16,8,0,326,327,5,
	293,0,0,327,329,1,0,0,0,328,323,1,0,0,0,328,324,1,0,0,0,329,335,1,0,0,0,
	330,332,5,267,0,0,331,333,5,147,0,0,332,331,1,0,0,0,332,333,1,0,0,0,333,
	334,1,0,0,0,334,336,5,45,0,0,335,330,1,0,0,0,335,336,1,0,0,0,336,1049,1,
	0,0,0,337,338,5,33,0,0,338,342,5,225,0,0,339,340,5,94,0,0,340,341,5,150,
	0,0,341,343,5,70,0,0,342,339,1,0,0,0,342,343,1,0,0,0,343,344,1,0,0,0,344,
	345,3,204,102,0,345,346,5,292,0,0,346,351,3,20,10,0,347,348,5,290,0,0,348,
	350,3,20,10,0,349,347,1,0,0,0,350,353,1,0,0,0,351,349,1,0,0,0,351,352,1,
	0,0,0,352,354,1,0,0,0,353,351,1,0,0,0,354,357,5,293,0,0,355,356,5,26,0,
	0,356,358,3,146,73,0,357,355,1,0,0,0,357,358,1,0,0,0,358,361,1,0,0,0,359,
	360,5,267,0,0,360,362,3,26,13,0,361,359,1,0,0,0,361,362,1,0,0,0,362,1049,
	1,0,0,0,363,364,5,60,0,0,364,367,5,225,0,0,365,366,5,94,0,0,366,368,5,70,
	0,0,367,365,1,0,0,0,367,368,1,0,0,0,368,369,1,0,0,0,369,1049,3,204,102,
	0,370,371,5,101,0,0,371,372,5,104,0,0,372,374,3,204,102,0,373,375,3,96,
	48,0,374,373,1,0,0,0,374,375,1,0,0,0,375,376,1,0,0,0,376,377,3,16,8,0,377,
	1049,1,0,0,0,378,379,5,51,0,0,379,380,5,81,0,0,380,383,3,204,102,0,381,
	382,5,265,0,0,382,384,3,116,58,0,383,381,1,0,0,0,383,384,1,0,0,0,384,1049,
	1,0,0,0,385,386,5,239,0,0,386,387,5,225,0,0,387,1049,3,204,102,0,388,389,
	5,26,0,0,389,390,5,158,0,0,390,391,5,225,0,0,391,392,3,204,102,0,392,395,
	5,107,0,0,393,396,3,146,73,0,394,396,5,151,0,0,395,393,1,0,0,0,395,394,
	1,0,0,0,396,1049,1,0,0,0,397,398,5,26,0,0,398,399,5,158,0,0,399,400,5,263,
	0,0,400,401,3,204,102,0,401,404,5,107,0,0,402,405,3,146,73,0,403,405,5,
	151,0,0,404,402,1,0,0,0,404,403,1,0,0,0,405,1049,1,0,0,0,406,407,5,26,0,
	0,407,408,5,158,0,0,408,409,5,24,0,0,409,410,3,204,102,0,410,413,5,107,
	0,0,411,414,3,146,73,0,412,414,5,151,0,0,413,411,1,0,0,0,413,412,1,0,0,
	0,414,1049,1,0,0,0,415,416,5,6,0,0,416,419,5,225,0,0,417,418,5,94,0,0,418,
	420,5,70,0,0,419,417,1,0,0,0,419,420,1,0,0,0,420,421,1,0,0,0,421,422,3,
	204,102,0,422,423,5,190,0,0,423,424,5,234,0,0,424,425,3,204,102,0,425,1049,
	1,0,0,0,426,427,5,6,0,0,427,430,5,225,0,0,428,429,5,94,0,0,429,431,5,70,
	0,0,430,428,1,0,0,0,430,431,1,0,0,0,431,432,1,0,0,0,432,433,3,204,102,0,
	433,434,5,2,0,0,434,438,5,24,0,0,435,436,5,94,0,0,436,437,5,150,0,0,437,
	439,5,70,0,0,438,435,1,0,0,0,438,439,1,0,0,0,439,440,1,0,0,0,440,441,3,
	22,11,0,441,1049,1,0,0,0,442,443,5,6,0,0,443,446,5,225,0,0,444,445,5,94,
	0,0,445,447,5,70,0,0,446,444,1,0,0,0,446,447,1,0,0,0,447,448,1,0,0,0,448,
	449,3,204,102,0,449,450,5,190,0,0,450,453,5,24,0,0,451,452,5,94,0,0,452,
	454,5,70,0,0,453,451,1,0,0,0,453,454,1,0,0,0,454,455,1,0,0,0,455,456,3,
	216,108,0,456,457,5,234,0,0,457,458,3,216,108,0,458,1049,1,0,0,0,459,460,
	5,6,0,0,460,463,5,225,0,0,461,462,5,94,0,0,462,464,5,70,0,0,463,461,1,0,
	0,0,463,464,1,0,0,0,464,465,1,0,0,0,465,466,3,204,102,0,466,467,5,60,0,
	0,467,470,5,24,0,0,468,469,5,94,0,0,469,471,5,70,0,0,470,468,1,0,0,0,470,
	471,1,0,0,0,471,472,1,0,0,0,472,473,3,204,102,0,473,1049,1,0,0,0,474,475,
	5,6,0,0,475,478,5,225,0,0,476,477,5,94,0,0,477,479,5,70,0,0,478,476,1,0,
	0,0,478,479,1,0,0,0,479,480,1,0,0,0,480,481,3,204,102,0,481,482,5,6,0,0,
	482,483,5,24,0,0,483,484,3,216,108,0,484,485,5,215,0,0,485,486,5,45,0,0,
	486,487,5,241,0,0,487,488,3,162,81,0,488,1049,1,0,0,0,489,490,5,6,0,0,490,
	491,5,225,0,0,491,492,3,204,102,0,492,493,5,215,0,0,493,494,5,14,0,0,494,
	495,3,212,106,0,495,1049,1,0,0,0,496,497,5,6,0,0,497,498,5,225,0,0,498,
	499,3,204,102,0,499,500,5,215,0,0,500,501,5,183,0,0,501,502,3,28,14,0,502,
	1049,1,0,0,0,503,504,5,6,0,0,504,505,5,225,0,0,505,506,3,204,102,0,506,
	507,5,69,0,0,507,520,3,216,108,0,508,517,5,292,0,0,509,514,3,196,98,0,510,
	511,5,290,0,0,511,513,3,196,98,0,512,510,1,0,0,0,513,516,1,0,0,0,514,512,
	1,0,0,0,514,515,1,0,0,0,515,518,1,0,0,0,516,514,1,0,0,0,517,509,1,0,0,0,
	517,518,1,0,0,0,518,519,1,0,0,0,519,521,5,293,0,0,520,508,1,0,0,0,520,521,
	1,0,0,0,521,524,1,0,0,0,522,523,5,265,0,0,523,525,3,116,58,0,524,522,1,
	0,0,0,524,525,1,0,0,0,525,1049,1,0,0,0,526,527,5,7,0,0,527,530,3,204,102,
	0,528,529,5,267,0,0,529,531,3,26,13,0,530,528,1,0,0,0,530,531,1,0,0,0,531,
	1049,1,0,0,0,532,535,5,33,0,0,533,534,5,162,0,0,534,536,5,192,0,0,535,533,
	1,0,0,0,535,536,1,0,0,0,536,537,1,0,0,0,537,538,5,136,0,0,538,542,5,263,
	0,0,539,540,5,94,0,0,540,541,5,150,0,0,541,543,5,70,0,0,542,539,1,0,0,0,
	542,543,1,0,0,0,543,544,1,0,0,0,544,548,3,204,102,0,545,546,5,84,0,0,546,
	547,5,176,0,0,547,549,3,156,78,0,548,545,1,0,0,0,548,549,1,0,0,0,549,552,
	1,0,0,0,550,551,5,26,0,0,551,553,3,146,73,0,552,550,1,0,0,0,552,553,1,0,
	0,0,553,556,1,0,0,0,554,555,5,267,0,0,555,557,3,26,13,0,556,554,1,0,0,0,
	556,557,1,0,0,0,557,558,1,0,0,0,558,559,5,11,0,0,559,560,3,16,8,0,560,1049,
	1,0,0,0,561,564,5,33,0,0,562,563,5,162,0,0,563,565,5,192,0,0,564,562,1,
	0,0,0,564,565,1,0,0,0,565,566,1,0,0,0,566,567,5,263,0,0,567,570,3,204,102,
	0,568,569,5,26,0,0,569,571,3,146,73,0,570,568,1,0,0,0,570,571,1,0,0,0,571,
	574,1,0,0,0,572,573,5,210,0,0,573,575,7,1,0,0,574,572,1,0,0,0,574,575,1,
	0,0,0,575,576,1,0,0,0,576,577,5,11,0,0,577,578,3,16,8,0,578,1049,1,0,0,
	0,579,580,5,189,0,0,580,581,5,136,0,0,581,582,5,263,0,0,582,1049,3,204,
	102,0,583,584,5,60,0,0,584,585,5,136,0,0,585,588,5,263,0,0,586,587,5,94,
	0,0,587,589,5,70,0,0,588,586,1,0,0,0,588,589,1,0,0,0,589,590,1,0,0,0,590,
	1049,3,204,102,0,591,592,5,6,0,0,592,593,5,136,0,0,593,596,5,263,0,0,594,
	595,5,94,0,0,595,597,5,70,0,0,596,594,1,0,0,0,596,597,1,0,0,0,597,598,1,
	0,0,0,598,599,3,204,102,0,599,600,5,190,0,0,600,601,5,234,0,0,601,602,3,
	204,102,0,602,1049,1,0,0,0,603,604,5,6,0,0,604,605,5,136,0,0,605,606,5,
	263,0,0,606,607,3,204,102,0,607,608,5,215,0,0,608,609,5,183,0,0,609,610,
	3,28,14,0,610,1049,1,0,0,0,611,612,5,60,0,0,612,615,5,263,0,0,613,614,5,
	94,0,0,614,616,5,70,0,0,615,613,1,0,0,0,615,616,1,0,0,0,616,617,1,0,0,0,
	617,1049,3,204,102,0,618,619,5,6,0,0,619,620,5,263,0,0,620,621,3,204,102,
	0,621,622,5,190,0,0,622,623,5,234,0,0,623,624,3,204,102,0,624,1049,1,0,
	0,0,625,626,5,6,0,0,626,627,5,263,0,0,627,628,3,204,102,0,628,629,5,215,
	0,0,629,630,5,14,0,0,630,631,3,212,106,0,631,1049,1,0,0,0,632,633,5,19,
	0,0,633,634,3,204,102,0,634,643,5,292,0,0,635,640,3,196,98,0,636,637,5,
	290,0,0,637,639,3,196,98,0,638,636,1,0,0,0,639,642,1,0,0,0,640,638,1,0,
	0,0,640,641,1,0,0,0,641,644,1,0,0,0,642,640,1,0,0,0,643,635,1,0,0,0,643,
	644,1,0,0,0,644,645,1,0,0,0,645,646,5,293,0,0,646,1049,1,0,0,0,647,648,
	5,33,0,0,648,649,5,199,0,0,649,653,3,216,108,0,650,651,5,267,0,0,651,652,
	5,3,0,0,652,654,3,210,105,0,653,650,1,0,0,0,653,654,1,0,0,0,654,657,1,0,
	0,0,655,656,5,96,0,0,656,658,3,216,108,0,657,655,1,0,0,0,657,658,1,0,0,
	0,658,1049,1,0,0,0,659,660,5,60,0,0,660,661,5,199,0,0,661,664,3,216,108,
	0,662,663,5,96,0,0,663,665,3,216,108,0,664,662,1,0,0,0,664,665,1,0,0,0,
	665,1049,1,0,0,0,666,667,5,85,0,0,667,668,3,214,107,0,668,669,5,234,0,0,
	669,674,3,212,106,0,670,671,5,290,0,0,671,673,3,212,106,0,672,670,1,0,0,
	0,673,676,1,0,0,0,674,672,1,0,0,0,674,675,1,0,0,0,675,680,1,0,0,0,676,674,
	1,0,0,0,677,678,5,267,0,0,678,679,5,3,0,0,679,681,5,161,0,0,680,677,1,0,
	0,0,680,681,1,0,0,0,681,685,1,0,0,0,682,683,5,86,0,0,683,684,5,18,0,0,684,
	686,3,210,105,0,685,682,1,0,0,0,685,686,1,0,0,0,686,689,1,0,0,0,687,688,
	5,96,0,0,688,690,3,216,108,0,689,687,1,0,0,0,689,690,1,0,0,0,690,1049,1,
	0,0,0,691,695,5,197,0,0,692,693,5,3,0,0,693,694,5,161,0,0,694,696,5,79,
	0,0,695,692,1,0,0,0,695,696,1,0,0,0,696,697,1,0,0,0,697,698,3,214,107,0,
	698,699,5,81,0,0,699,704,3,212,106,0,700,701,5,290,0,0,701,703,3,212,106,
	0,702,700,1,0,0,0,703,706,1,0,0,0,704,702,1,0,0,0,704,705,1,0,0,0,705,710,
	1,0,0,0,706,704,1,0,0,0,707,708,5,86,0,0,708,709,5,18,0,0,709,711,3,210,
	105,0,710,707,1,0,0,0,710,711,1,0,0,0,711,714,1,0,0,0,712,713,5,96,0,0,
	713,715,3,216,108,0,714,712,1,0,0,0,714,715,1,0,0,0,715,1049,1,0,0,0,716,
	717,5,215,0,0,717,721,5,199,0,0,718,722,5,5,0,0,719,722,5,148,0,0,720,722,
	3,216,108,0,721,718,1,0,0,0,721,719,1,0,0,0,721,720,1,0,0,0,722,725,1,0,
	0,0,723,724,5,96,0,0,724,726,3,216,108,0,725,723,1,0,0,0,725,726,1,0,0,
	0,726,1049,1,0,0,0,727,738,5,85,0,0,728,733,3,202,101,0,729,730,5,290,0,
	0,730,732,3,202,101,0,731,729,1,0,0,0,732,735,1,0,0,0,733,731,1,0,0,0,733,
	734,1,0,0,0,734,739,1,0,0,0,735,733,1,0,0,0,736,737,5,5,0,0,737,739,5,182,
	0,0,738,728,1,0,0,0,738,736,1,0,0,0,739,740,1,0,0,0,740,742,5,158,0,0,741,
	743,7,2,0,0,742,741,1,0,0,0,742,743,1,0,0,0,743,744,1,0,0,0,744,745,3,204,
	102,0,745,746,5,234,0,0,746,750,3,212,106,0,747,748,5,267,0,0,748,749,5,
	85,0,0,749,751,5,161,0,0,750,747,1,0,0,0,750,751,1,0,0,0,751,1049,1,0,0,
	0,752,763,5,52,0,0,753,758,3,202,101,0,754,755,5,290,0,0,755,757,3,202,
	101,0,756,754,1,0,0,0,757,760,1,0,0,0,758,756,1,0,0,0,758,759,1,0,0,0,759,
	764,1,0,0,0,760,758,1,0,0,0,761,762,5,5,0,0,762,764,5,182,0,0,763,753,1,
	0,0,0,763,761,1,0,0,0,764,765,1,0,0,0,765,767,5,158,0,0,766,768,7,2,0,0,
	767,766,1,0,0,0,767,768,1,0,0,0,768,769,1,0,0,0,769,770,3,204,102,0,770,
	771,5,234,0,0,771,772,3,212,106,0,772,1049,1,0,0,0,773,777,5,197,0,0,774,
	775,5,85,0,0,775,776,5,161,0,0,776,778,5,79,0,0,777,774,1,0,0,0,777,778,
	1,0,0,0,778,789,1,0,0,0,779,784,3,202,101,0,780,781,5,290,0,0,781,783,3,
	202,101,0,782,780,1,0,0,0,783,786,1,0,0,0,784,782,1,0,0,0,784,785,1,0,0,
	0,785,790,1,0,0,0,786,784,1,0,0,0,787,788,5,5,0,0,788,790,5,182,0,0,789,
	779,1,0,0,0,789,787,1,0,0,0,790,791,1,0,0,0,791,793,5,158,0,0,792,794,7,
	2,0,0,793,792,1,0,0,0,793,794,1,0,0,0,794,795,1,0,0,0,795,796,3,204,102,
	0,796,797,5,81,0,0,797,798,3,212,106,0,798,1049,1,0,0,0,799,800,5,217,0,
	0,800,806,5,87,0,0,801,803,5,158,0,0,802,804,5,225,0,0,803,802,1,0,0,0,
	803,804,1,0,0,0,804,805,1,0,0,0,805,807,3,204,102,0,806,801,1,0,0,0,806,
	807,1,0,0,0,807,1049,1,0,0,0,808,820,5,71,0,0,809,810,5,292,0,0,810,815,
	3,190,95,0,811,812,5,290,0,0,812,814,3,190,95,0,813,811,1,0,0,0,814,817,
	1,0,0,0,815,813,1,0,0,0,815,816,1,0,0,0,816,818,1,0,0,0,817,815,1,0,0,0,
	818,819,5,293,0,0,819,821,1,0,0,0,820,809,1,0,0,0,820,821,1,0,0,0,821,822,
	1,0,0,0,822,1049,3,14,7,0,823,824,5,71,0,0,824,826,5,7,0,0,825,827,5,261,
	0,0,826,825,1,0,0,0,826,827,1,0,0,0,827,828,1,0,0,0,828,1049,3,14,7,0,829,
	830,5,217,0,0,830,831,5,33,0,0,831,832,5,225,0,0,832,1049,3,204,102,0,833,
	834,5,217,0,0,834,835,5,33,0,0,835,836,5,207,0,0,836,1049,3,204,102,0,837,
	838,5,217,0,0,838,839,5,33,0,0,839,840,5,263,0,0,840,1049,3,204,102,0,841,
	842,5,217,0,0,842,843,5,33,0,0,843,844,5,136,0,0,844,845,5,263,0,0,845,
	1049,3,204,102,0,846,847,5,217,0,0,847,850,5,226,0,0,848,849,7,3,0,0,849,
	851,3,204,102,0,850,848,1,0,0,0,850,851,1,0,0,0,851,858,1,0,0,0,852,853,
	5,124,0,0,853,856,3,146,73,0,854,855,5,66,0,0,855,857,3,146,73,0,856,854,
	1,0,0,0,856,857,1,0,0,0,857,859,1,0,0,0,858,852,1,0,0,0,858,859,1,0,0,0,
	859,1049,1,0,0,0,860,861,5,217,0,0,861,864,5,208,0,0,862,863,7,3,0,0,863,
	865,3,216,108,0,864,862,1,0,0,0,864,865,1,0,0,0,865,872,1,0,0,0,866,867,
	5,124,0,0,867,870,3,146,73,0,868,869,5,66,0,0,869,871,3,146,73,0,870,868,
	1,0,0,0,870,871,1,0,0,0,871,873,1,0,0,0,872,866,1,0,0,0,872,873,1,0,0,0,
	873,1049,1,0,0,0,874,875,5,217,0,0,875,882,5,23,0,0,876,877,5,124,0,0,877,
	880,3,146,73,0,878,879,5,66,0,0,879,881,3,146,73,0,880,878,1,0,0,0,880,
	881,1,0,0,0,881,883,1,0,0,0,882,876,1,0,0,0,882,883,1,0,0,0,883,1049,1,
	0,0,0,884,885,5,217,0,0,885,886,5,25,0,0,886,888,7,3,0,0,887,889,3,204,
	102,0,888,887,1,0,0,0,888,889,1,0,0,0,889,896,1,0,0,0,890,891,5,124,0,0,
	891,894,3,146,73,0,892,893,5,66,0,0,893,895,3,146,73,0,894,892,1,0,0,0,
	894,895,1,0,0,0,895,897,1,0,0,0,896,890,1,0,0,0,896,897,1,0,0,0,897,1049,
	1,0,0,0,898,899,5,217,0,0,899,900,5,221,0,0,900,901,5,79,0,0,901,1049,3,
	204,102,0,902,903,5,217,0,0,903,904,5,221,0,0,904,905,5,79,0,0,905,906,
	5,292,0,0,906,907,3,16,8,0,907,908,5,293,0,0,908,1049,1,0,0,0,909,911,5,
	217,0,0,910,912,5,36,0,0,911,910,1,0,0,0,911,912,1,0,0,0,912,913,1,0,0,
	0,913,916,5,200,0,0,914,915,7,3,0,0,915,917,3,216,108,0,916,914,1,0,0,0,
	916,917,1,0,0,0,917,1049,1,0,0,0,918,919,5,217,0,0,919,920,5,199,0,0,920,
	923,5,87,0,0,921,922,7,3,0,0,922,924,3,216,108,0,923,921,1,0,0,0,923,924,
	1,0,0,0,924,1049,1,0,0,0,925,926,5,54,0,0,926,1049,3,204,102,0,927,928,
	5,53,0,0,928,1049,3,204,102,0,929,930,5,217,0,0,930,937,5,83,0,0,931,932,
	5,124,0,0,932,935,3,146,73,0,933,934,5,66,0,0,934,936,3,146,73,0,935,933,
	1,0,0,0,935,936,1,0,0,0,936,938,1,0,0,0,937,931,1,0,0,0,937,938,1,0,0,0,
	938,1049,1,0,0,0,939,940,5,217,0,0,940,947,5,214,0,0,941,942,5,124,0,0,
	942,945,3,146,73,0,943,944,5,66,0,0,944,946,3,146,73,0,945,943,1,0,0,0,
	945,946,1,0,0,0,946,948,1,0,0,0,947,941,1,0,0,0,947,948,1,0,0,0,948,1049,
	1,0,0,0,949,950,5,215,0,0,950,951,5,214,0,0,951,952,3,204,102,0,952,953,
	5,275,0,0,953,954,3,114,57,0,954,1049,1,0,0,0,955,956,5,193,0,0,956,957,
	5,214,0,0,957,1049,3,204,102,0,958,959,5,220,0,0,959,968,5,236,0,0,960,
	965,3,192,96,0,961,962,5,290,0,0,962,964,3,192,96,0,963,961,1,0,0,0,964,
	967,1,0,0,0,965,963,1,0,0,0,965,966,1,0,0,0,966,969,1,0,0,0,967,965,1,0,
	0,0,968,960,1,0,0,0,968,969,1,0,0,0,969,1049,1,0,0,0,970,972,5,27,0,0,971,
	973,5,270,0,0,972,971,1,0,0,0,972,973,1,0,0,0,973,1049,1,0,0,0,974,976,
	5,201,0,0,975,977,5,270,0,0,976,975,1,0,0,0,976,977,1,0,0,0,977,1049,1,
	0,0,0,978,979,5,181,0,0,979,980,3,216,108,0,980,981,5,81,0,0,981,982,3,
	14,7,0,982,1049,1,0,0,0,983,984,5,48,0,0,984,985,5,181,0,0,985,1049,3,216,
	108,0,986,987,5,69,0,0,987,997,3,216,108,0,988,989,5,254,0,0,989,994,3,
	114,57,0,990,991,5,290,0,0,991,993,3,114,57,0,992,990,1,0,0,0,993,996,1,
	0,0,0,994,992,1,0,0,0,994,995,1,0,0,0,995,998,1,0,0,0,996,994,1,0,0,0,997,
	988,1,0,0,0,997,998,1,0,0,0,998,1049,1,0,0,0,999,1000,5,54,0,0,1000,1001,
	5,100,0,0,1001,1049,3,216,108,0,1002,1003,5,54,0,0,1003,1004,5,166,0,0,
	1004,1049,3,216,108,0,1005,1006,5,215,0,0,1006,1007,5,173,0,0,1007,1049,
	3,200,100,0,1008,1009,5,215,0,0,1009,1010,5,232,0,0,1010,1013,5,274,0,0,
	1011,1014,5,127,0,0,1012,1014,3,114,57,0,1013,1011,1,0,0,0,1013,1012,1,
	0,0,0,1014,1049,1,0,0,0,1015,1016,5,251,0,0,1016,1017,3,204,102,0,1017,
	1018,5,215,0,0,1018,1023,3,188,94,0,1019,1020,5,290,0,0,1020,1022,3,188,
	94,0,1021,1019,1,0,0,0,1022,1025,1,0,0,0,1023,1021,1,0,0,0,1023,1024,1,
	0,0,0,1024,1028,1,0,0,0,1025,1023,1,0,0,0,1026,1027,5,265,0,0,1027,1029,
	3,116,58,0,1028,1026,1,0,0,0,1028,1029,1,0,0,0,1029,1049,1,0,0,0,1030,1031,
	5,138,0,0,1031,1032,5,104,0,0,1032,1037,3,204,102,0,1033,1035,5,11,0,0,
	1034,1033,1,0,0,0,1034,1035,1,0,0,0,1035,1036,1,0,0,0,1036,1038,3,216,108,
	0,1037,1034,1,0,0,0,1037,1038,1,0,0,0,1038,1039,1,0,0,0,1039,1040,5,254,
	0,0,1040,1041,3,64,32,0,1041,1042,5,158,0,0,1042,1044,3,114,57,0,1043,1045,
	3,172,86,0,1044,1043,1,0,0,0,1045,1046,1,0,0,0,1046,1044,1,0,0,0,1046,1047,
	1,0,0,0,1047,1049,1,0,0,0,1048,255,1,0,0,0,1048,256,1,0,0,0,1048,258,1,
	0,0,0,1048,263,1,0,0,0,1048,279,1,0,0,0,1048,289,1,0,0,0,1048,296,1,0,0,
	0,1048,303,1,0,0,0,1048,337,1,0,0,0,1048,363,1,0,0,0,1048,370,1,0,0,0,1048,
	378,1,0,0,0,1048,385,1,0,0,0,1048,388,1,0,0,0,1048,397,1,0,0,0,1048,406,
	1,0,0,0,1048,415,1,0,0,0,1048,426,1,0,0,0,1048,442,1,0,0,0,1048,459,1,0,
	0,0,1048,474,1,0,0,0,1048,489,1,0,0,0,1048,496,1,0,0,0,1048,503,1,0,0,0,
	1048,526,1,0,0,0,1048,532,1,0,0,0,1048,561,1,0,0,0,1048,579,1,0,0,0,1048,
	583,1,0,0,0,1048,591,1,0,0,0,1048,603,1,0,0,0,1048,611,1,0,0,0,1048,618,
	1,0,0,0,1048,625,1,0,0,0,1048,632,1,0,0,0,1048,647,1,0,0,0,1048,659,1,0,
	0,0,1048,666,1,0,0,0,1048,691,1,0,0,0,1048,716,1,0,0,0,1048,727,1,0,0,0,
	1048,752,1,0,0,0,1048,773,1,0,0,0,1048,799,1,0,0,0,1048,808,1,0,0,0,1048,
	823,1,0,0,0,1048,829,1,0,0,0,1048,833,1,0,0,0,1048,837,1,0,0,0,1048,841,
	1,0,0,0,1048,846,1,0,0,0,1048,860,1,0,0,0,1048,874,1,0,0,0,1048,884,1,0,
	0,0,1048,898,1,0,0,0,1048,902,1,0,0,0,1048,909,1,0,0,0,1048,918,1,0,0,0,
	1048,925,1,0,0,0,1048,927,1,0,0,0,1048,929,1,0,0,0,1048,939,1,0,0,0,1048,
	949,1,0,0,0,1048,955,1,0,0,0,1048,958,1,0,0,0,1048,970,1,0,0,0,1048,974,
	1,0,0,0,1048,978,1,0,0,0,1048,983,1,0,0,0,1048,986,1,0,0,0,1048,999,1,0,
	0,0,1048,1002,1,0,0,0,1048,1005,1,0,0,0,1048,1008,1,0,0,0,1048,1015,1,0,
	0,0,1048,1030,1,0,0,0,1049,15,1,0,0,0,1050,1052,3,18,9,0,1051,1050,1,0,
	0,0,1051,1052,1,0,0,0,1052,1053,1,0,0,0,1053,1054,3,34,17,0,1054,17,1,0,
	0,0,1055,1057,5,267,0,0,1056,1058,5,188,0,0,1057,1056,1,0,0,0,1057,1058,
	1,0,0,0,1058,1059,1,0,0,0,1059,1064,3,58,29,0,1060,1061,5,290,0,0,1061,
	1063,3,58,29,0,1062,1060,1,0,0,0,1063,1066,1,0,0,0,1064,1062,1,0,0,0,1064,
	1065,1,0,0,0,1065,19,1,0,0,0,1066,1064,1,0,0,0,1067,1070,3,22,11,0,1068,
	1070,3,24,12,0,1069,1067,1,0,0,0,1069,1068,1,0,0,0,1070,21,1,0,0,0,1071,
	1072,3,216,108,0,1072,1075,3,162,81,0,1073,1074,5,150,0,0,1074,1076,5,151,
	0,0,1075,1073,1,0,0,0,1075,1076,1,0,0,0,1076,1079,1,0,0,0,1077,1078,5,26,
	0,0,1078,1080,3,146,73,0,1079,1077,1,0,0,0,1079,1080,1,0,0,0,1080,1083,
	1,0,0,0,1081,1082,5,267,0,0,1082,1084,3,26,13,0,1083,1081,1,0,0,0,1083,
	1084,1,0,0,0,1084,23,1,0,0,0,1085,1086,5,124,0,0,1086,1089,3,204,102,0,
	1087,1088,7,4,0,0,1088,1090,5,183,0,0,1089,1087,1,0,0,0,1089,1090,1,0,0,
	0,1090,25,1,0,0,0,1091,1092,5,292,0,0,1092,1093,3,28,14,0,1093,1094,5,293,
	0,0,1094,27,1,0,0,0,1095,1100,3,30,15,0,1096,1097,5,290,0,0,1097,1099,3,
	30,15,0,1098,1096,1,0,0,0,1099,1102,1,0,0,0,1100,1098,1,0,0,0,1100,1101,
	1,0,0,0,1101,29,1,0,0,0,1102,1100,1,0,0,0,1103,1104,3,216,108,0,1104,1105,
	5,275,0,0,1105,1106,3,32,16,0,1106,31,1,0,0,0,1107,1110,5,49,0,0,1108,1110,
	3,114,57,0,1109,1107,1,0,0,0,1109,1108,1,0,0,0,1110,33,1,0,0,0,1111,1122,
	3,40,20,0,1112,1113,5,163,0,0,1113,1114,5,18,0,0,1114,1119,3,44,22,0,1115,
	1116,5,290,0,0,1116,1118,3,44,22,0,1117,1115,1,0,0,0,1118,1121,1,0,0,0,
	1119,1117,1,0,0,0,1119,1120,1,0,0,0,1120,1123,1,0,0,0,1121,1119,1,0,0,0,
	1122,1112,1,0,0,0,1122,1123,1,0,0,0,1123,1129,1,0,0,0,1124,1125,5,155,0,
	0,1125,1127,3,38,19,0,1126,1128,7,5,0,0,1127,1126,1,0,0,0,1127,1128,1,0,
	0,0,1128,1130,1,0,0,0,1129,1124,1,0,0,0,1129,1130,1,0,0,0,1130,1144,1,0,
	0,0,1131,1132,5,125,0,0,1132,1145,3,36,18,0,1133,1134,5,74,0,0,1134,1136,
	7,6,0,0,1135,1137,3,38,19,0,1136,1135,1,0,0,0,1136,1137,1,0,0,0,1137,1138,
	1,0,0,0,1138,1142,7,5,0,0,1139,1143,5,160,0,0,1140,1141,5,267,0,0,1141,
	1143,5,231,0,0,1142,1139,1,0,0,0,1142,1140,1,0,0,0,1143,1145,1,0,0,0,1144,
	1131,1,0,0,0,1144,1133,1,0,0,0,1144,1145,1,0,0,0,1145,35,1,0,0,0,1146,1149,
	5,5,0,0,1147,1149,3,38,19,0,1148,1146,1,0,0,0,1148,1147,1,0,0,0,1149,37,
	1,0,0,0,1150,1151,7,7,0,0,1151,39,1,0,0,0,1152,1153,6,20,-1,0,1153,1154,
	3,42,21,0,1154,1169,1,0,0,0,1155,1156,10,2,0,0,1156,1158,5,102,0,0,1157,
	1159,3,60,30,0,1158,1157,1,0,0,0,1158,1159,1,0,0,0,1159,1160,1,0,0,0,1160,
	1168,3,40,20,3,1161,1162,10,1,0,0,1162,1164,7,8,0,0,1163,1165,3,60,30,0,
	1164,1163,1,0,0,0,1164,1165,1,0,0,0,1165,1166,1,0,0,0,1166,1168,3,40,20,
	2,1167,1155,1,0,0,0,1167,1161,1,0,0,0,1168,1171,1,0,0,0,1169,1167,1,0,0,
	0,1169,1170,1,0,0,0,1170,41,1,0,0,0,1171,1169,1,0,0,0,1172,1189,3,46,23,
	0,1173,1174,5,225,0,0,1174,1189,3,204,102,0,1175,1176,5,260,0,0,1176,1181,
	3,114,57,0,1177,1178,5,290,0,0,1178,1180,3,114,57,0,1179,1177,1,0,0,0,1180,
	1183,1,0,0,0,1181,1179,1,0,0,0,1181,1182,1,0,0,0,1182,1189,1,0,0,0,1183,
	1181,1,0,0,0,1184,1185,5,292,0,0,1185,1186,3,34,17,0,1186,1187,5,293,0,
	0,1187,1189,1,0,0,0,1188,1172,1,0,0,0,1188,1173,1,0,0,0,1188,1175,1,0,0,
	0,1188,1184,1,0,0,0,1189,43,1,0,0,0,1190,1192,3,114,57,0,1191,1193,7,9,
	0,0,1192,1191,1,0,0,0,1192,1193,1,0,0,0,1193,1196,1,0,0,0,1194,1195,5,153,
	0,0,1195,1197,7,10,0,0,1196,1194,1,0,0,0,1196,1197,1,0,0,0,1197,45,1,0,
	0,0,1198,1200,5,212,0,0,1199,1201,3,60,30,0,1200,1199,1,0,0,0,1200,1201,
	1,0,0,0,1201,1202,1,0,0,0,1202,1207,3,62,31,0,1203,1204,5,290,0,0,1204,
	1206,3,62,31,0,1205,1203,1,0,0,0,1206,1209,1,0,0,0,1207,1205,1,0,0,0,1207,
	1208,1,0,0,0,1208,1219,1,0,0,0,1209,1207,1,0,0,0,1210,1211,5,81,0,0,1211,
	1216,3,64,32,0,1212,1213,5,290,0,0,1213,1215,3,64,32,0,1214,1212,1,0,0,
	0,1215,1218,1,0,0,0,1216,1214,1,0,0,0,1216,1217,1,0,0,0,1217,1220,1,0,0,
	0,1218,1216,1,0,0,0,1219,1210,1,0,0,0,1219,1220,1,0,0,0,1220,1223,1,0,0,
	0,1221,1222,5,265,0,0,1222,1224,3,116,58,0,1223,1221,1,0,0,0,1223,1224,
	1,0,0,0,1224,1228,1,0,0,0,1225,1226,5,89,0,0,1226,1227,5,18,0,0,1227,1229,
	3,48,24,0,1228,1225,1,0,0,0,1228,1229,1,0,0,0,1229,1232,1,0,0,0,1230,1231,
	5,92,0,0,1231,1233,3,116,58,0,1232,1230,1,0,0,0,1232,1233,1,0,0,0,1233,
	1243,1,0,0,0,1234,1235,5,266,0,0,1235,1240,3,54,27,0,1236,1237,5,290,0,
	0,1237,1239,3,54,27,0,1238,1236,1,0,0,0,1239,1242,1,0,0,0,1240,1238,1,0,
	0,0,1240,1241,1,0,0,0,1241,1244,1,0,0,0,1242,1240,1,0,0,0,1243,1234,1,0,
	0,0,1243,1244,1,0,0,0,1244,47,1,0,0,0,1245,1247,3,60,30,0,1246,1245,1,0,
	0,0,1246,1247,1,0,0,0,1247,1248,1,0,0,0,1248,1253,3,50,25,0,1249,1250,5,
	290,0,0,1250,1252,3,50,25,0,1251,1249,1,0,0,0,1252,1255,1,0,0,0,1253,1251,
	1,0,0,0,1253,1254,1,0,0,0,1254,49,1,0,0,0,1255,1253,1,0,0,0,1256,1297,3,
	52,26,0,1257,1258,5,202,0,0,1258,1267,5,292,0,0,1259,1264,3,114,57,0,1260,
	1261,5,290,0,0,1261,1263,3,114,57,0,1262,1260,1,0,0,0,1263,1266,1,0,0,0,
	1264,1262,1,0,0,0,1264,1265,1,0,0,0,1265,1268,1,0,0,0,1266,1264,1,0,0,0,
	1267,1259,1,0,0,0,1267,1268,1,0,0,0,1268,1269,1,0,0,0,1269,1297,5,293,0,
	0,1270,1271,5,35,0,0,1271,1280,5,292,0,0,1272,1277,3,114,57,0,1273,1274,
	5,290,0,0,1274,1276,3,114,57,0,1275,1273,1,0,0,0,1276,1279,1,0,0,0,1277,
	1275,1,0,0,0,1277,1278,1,0,0,0,1278,1281,1,0,0,0,1279,1277,1,0,0,0,1280,
	1272,1,0,0,0,1280,1281,1,0,0,0,1281,1282,1,0,0,0,1282,1297,5,293,0,0,1283,
	1284,5,90,0,0,1284,1285,5,216,0,0,1285,1286,5,292,0,0,1286,1291,3,52,26,
	0,1287,1288,5,290,0,0,1288,1290,3,52,26,0,1289,1287,1,0,0,0,1290,1293,1,
	0,0,0,1291,1289,1,0,0,0,1291,1292,1,0,0,0,1292,1294,1,0,0,0,1293,1291,1,
	0,0,0,1294,1295,5,293,0,0,1295,1297,1,0,0,0,1296,1256,1,0,0,0,1296,1257,
	1,0,0,0,1296,1270,1,0,0,0,1296,1283,1,0,0,0,1297,51,1,0,0,0,1298,1307,5,
	292,0,0,1299,1304,3,114,57,0,1300,1301,5,290,0,0,1301,1303,3,114,57,0,1302,
	1300,1,0,0,0,1303,1306,1,0,0,0,1304,1302,1,0,0,0,1304,1305,1,0,0,0,1305,
	1308,1,0,0,0,1306,1304,1,0,0,0,1307,1299,1,0,0,0,1307,1308,1,0,0,0,1308,
	1309,1,0,0,0,1309,1312,5,293,0,0,1310,1312,3,114,57,0,1311,1298,1,0,0,0,
	1311,1310,1,0,0,0,1312,53,1,0,0,0,1313,1314,3,216,108,0,1314,1315,5,11,
	0,0,1315,1316,5,292,0,0,1316,1317,3,56,28,0,1317,1318,5,293,0,0,1318,55,
	1,0,0,0,1319,1321,3,216,108,0,1320,1319,1,0,0,0,1320,1321,1,0,0,0,1321,
	1332,1,0,0,0,1322,1323,5,169,0,0,1323,1324,5,18,0,0,1324,1329,3,114,57,
	0,1325,1326,5,290,0,0,1326,1328,3,114,57,0,1327,1325,1,0,0,0,1328,1331,
	1,0,0,0,1329,1327,1,0,0,0,1329,1330,1,0,0,0,1330,1333,1,0,0,0,1331,1329,
	1,0,0,0,1332,1322,1,0,0,0,1332,1333,1,0,0,0,1333,1344,1,0,0,0,1334,1335,
	5,163,0,0,1335,1336,5,18,0,0,1336,1341,3,44,22,0,1337,1338,5,290,0,0,1338,
	1340,3,44,22,0,1339,1337,1,0,0,0,1340,1343,1,0,0,0,1341,1339,1,0,0,0,1341,
	1342,1,0,0,0,1342,1345,1,0,0,0,1343,1341,1,0,0,0,1344,1334,1,0,0,0,1344,
	1345,1,0,0,0,1345,1347,1,0,0,0,1346,1348,3,176,88,0,1347,1346,1,0,0,0,1347,
	1348,1,0,0,0,1348,57,1,0,0,0,1349,1351,3,216,108,0,1350,1352,3,96,48,0,
	1351,1350,1,0,0,0,1351,1352,1,0,0,0,1352,1353,1,0,0,0,1353,1354,5,11,0,
	0,1354,1355,5,292,0,0,1355,1356,3,16,8,0,1356,1357,5,293,0,0,1357,59,1,
	0,0,0,1358,1359,7,11,0,0,1359,61,1,0,0,0,1360,1365,3,114,57,0,1361,1363,
	5,11,0,0,1362,1361,1,0,0,0,1362,1363,1,0,0,0,1363,1364,1,0,0,0,1364,1366,
	3,216,108,0,1365,1362,1,0,0,0,1365,1366,1,0,0,0,1366,1376,1,0,0,0,1367,
	1368,3,122,61,0,1368,1369,5,288,0,0,1369,1372,5,283,0,0,1370,1371,5,11,
	0,0,1371,1373,3,96,48,0,1372,1370,1,0,0,0,1372,1373,1,0,0,0,1373,1376,1,
	0,0,0,1374,1376,5,283,0,0,1375,1360,1,0,0,0,1375,1367,1,0,0,0,1375,1374,
	1,0,0,0,1376,63,1,0,0,0,1377,1378,6,32,-1,0,1378,1379,3,70,35,0,1379,1398,
	1,0,0,0,1380,1394,10,2,0,0,1381,1382,5,34,0,0,1382,1383,5,109,0,0,1383,
	1395,3,70,35,0,1384,1385,3,66,33,0,1385,1386,5,109,0,0,1386,1387,3,64,32,
	0,1387,1388,3,68,34,0,1388,1395,1,0,0,0,1389,1390,5,141,0,0,1390,1391,3,
	66,33,0,1391,1392,5,109,0,0,1392,1393,3,70,35,0,1393,1395,1,0,0,0,1394,
	1381,1,0,0,0,1394,1384,1,0,0,0,1394,1389,1,0,0,0,1395,1397,1,0,0,0,1396,
	1380,1,0,0,0,1397,1400,1,0,0,0,1398,1396,1,0,0,0,1398,1399,1,0,0,0,1399,
	65,1,0,0,0,1400,1398,1,0,0,0,1401,1403,5,99,0,0,1402,1401,1,0,0,0,1402,
	1403,1,0,0,0,1403,1409,1,0,0,0,1404,1406,7,12,0,0,1405,1407,5,165,0,0,1406,
	1405,1,0,0,0,1406,1407,1,0,0,0,1407,1409,1,0,0,0,1408,1402,1,0,0,0,1408,
	1404,1,0,0,0,1409,67,1,0,0,0,1410,1411,5,158,0,0,1411,1425,3,116,58,0,1412,
	1413,5,254,0,0,1413,1414,5,292,0,0,1414,1419,3,216,108,0,1415,1416,5,290,
	0,0,1416,1418,3,216,108,0,1417,1415,1,0,0,0,1418,1421,1,0,0,0,1419,1417,
	1,0,0,0,1419,1420,1,0,0,0,1420,1422,1,0,0,0,1421,1419,1,0,0,0,1422,1423,
	5,293,0,0,1423,1425,1,0,0,0,1424,1410,1,0,0,0,1424,1412,1,0,0,0,1425,69,
	1,0,0,0,1426,1433,3,80,40,0,1427,1428,5,227,0,0,1428,1429,3,72,36,0,1429,
	1430,5,292,0,0,1430,1431,3,114,57,0,1431,1432,5,293,0,0,1432,1434,1,0,0,
	0,1433,1427,1,0,0,0,1433,1434,1,0,0,0,1434,71,1,0,0,0,1435,1436,7,13,0,
	0,1436,73,1,0,0,0,1437,1438,7,14,0,0,1438,75,1,0,0,0,1439,1446,5,65,0,0,
	1440,1442,5,239,0,0,1441,1443,3,146,73,0,1442,1441,1,0,0,0,1442,1443,1,
	0,0,0,1443,1444,1,0,0,0,1444,1446,3,78,39,0,1445,1439,1,0,0,0,1445,1440,
	1,0,0,0,1446,77,1,0,0,0,1447,1448,7,15,0,0,1448,1449,5,31,0,0,1449,79,1,
	0,0,0,1450,1533,3,94,47,0,1451,1452,5,135,0,0,1452,1463,5,292,0,0,1453,
	1454,5,169,0,0,1454,1455,5,18,0,0,1455,1460,3,114,57,0,1456,1457,5,290,
	0,0,1457,1459,3,114,57,0,1458,1456,1,0,0,0,1459,1462,1,0,0,0,1460,1458,
	1,0,0,0,1460,1461,1,0,0,0,1461,1464,1,0,0,0,1462,1460,1,0,0,0,1463,1453,
	1,0,0,0,1463,1464,1,0,0,0,1464,1475,1,0,0,0,1465,1466,5,163,0,0,1466,1467,
	5,18,0,0,1467,1472,3,44,22,0,1468,1469,5,290,0,0,1469,1471,3,44,22,0,1470,
	1468,1,0,0,0,1471,1474,1,0,0,0,1472,1470,1,0,0,0,1472,1473,1,0,0,0,1473,
	1476,1,0,0,0,1474,1472,1,0,0,0,1475,1465,1,0,0,0,1475,1476,1,0,0,0,1476,
	1486,1,0,0,0,1477,1478,5,137,0,0,1478,1483,3,82,41,0,1479,1480,5,290,0,
	0,1480,1482,3,82,41,0,1481,1479,1,0,0,0,1482,1485,1,0,0,0,1483,1481,1,0,
	0,0,1483,1484,1,0,0,0,1484,1487,1,0,0,0,1485,1483,1,0,0,0,1486,1477,1,0,
	0,0,1486,1487,1,0,0,0,1487,1489,1,0,0,0,1488,1490,3,84,42,0,1489,1488,1,
	0,0,0,1489,1490,1,0,0,0,1490,1494,1,0,0,0,1491,1492,5,4,0,0,1492,1493,5,
	132,0,0,1493,1495,3,88,44,0,1494,1491,1,0,0,0,1494,1495,1,0,0,0,1495,1497,
	1,0,0,0,1496,1498,7,16,0,0,1497,1496,1,0,0,0,1497,1498,1,0,0,0,1498,1499,
	1,0,0,0,1499,1500,5,174,0,0,1500,1501,5,292,0,0,1501,1502,3,182,91,0,1502,
	1512,5,293,0,0,1503,1504,5,222,0,0,1504,1509,3,90,45,0,1505,1506,5,290,
	0,0,1506,1508,3,90,45,0,1507,1505,1,0,0,0,1508,1511,1,0,0,0,1509,1507,1,
	0,0,0,1509,1510,1,0,0,0,1510,1513,1,0,0,0,1511,1509,1,0,0,0,1512,1503,1,
	0,0,0,1512,1513,1,0,0,0,1513,1514,1,0,0,0,1514,1515,5,56,0,0,1515,1520,
	3,92,46,0,1516,1517,5,290,0,0,1517,1519,3,92,46,0,1518,1516,1,0,0,0,1519,
	1522,1,0,0,0,1520,1518,1,0,0,0,1520,1521,1,0,0,0,1521,1523,1,0,0,0,1522,
	1520,1,0,0,0,1523,1531,5,293,0,0,1524,1526,5,11,0,0,1525,1524,1,0,0,0,1525,
	1526,1,0,0,0,1526,1527,1,0,0,0,1527,1529,3,216,108,0,1528,1530,3,96,48,
	0,1529,1528,1,0,0,0,1529,1530,1,0,0,0,1530,1532,1,0,0,0,1531,1525,1,0,0,
	0,1531,1532,1,0,0,0,1532,1534,1,0,0,0,1533,1451,1,0,0,0,1533,1534,1,0,0,
	0,1534,81,1,0,0,0,1535,1536,3,114,57,0,1536,1537,5,11,0,0,1537,1538,3,216,
	108,0,1538,83,1,0,0,0,1539,1540,5,159,0,0,1540,1541,5,203,0,0,1541,1542,
	5,175,0,0,1542,1551,5,132,0,0,1543,1544,5,5,0,0,1544,1545,5,204,0,0,1545,
	1546,5,175,0,0,1546,1548,5,132,0,0,1547,1549,3,86,43,0,1548,1547,1,0,0,
	0,1548,1549,1,0,0,0,1549,1551,1,0,0,0,1550,1539,1,0,0,0,1550,1543,1,0,0,
	0,1551,85,1,0,0,0,1552,1553,5,217,0,0,1553,1554,5,62,0,0,1554,1562,5,134,
	0,0,1555,1556,5,156,0,0,1556,1557,5,62,0,0,1557,1562,5,134,0,0,1558,1559,
	5,267,0,0,1559,1560,5,249,0,0,1560,1562,5,204,0,0,1561,1552,1,0,0,0,1561,
	1555,1,0,0,0,1561,1558,1,0,0,0,1562,87,1,0,0,0,1563,1576,5,218,0,0,1564,
	1571,5,234,0,0,1565,1566,5,142,0,0,1566,1572,5,203,0,0,1567,1569,7,10,0,
	0,1568,1567,1,0,0,0,1568,1569,1,0,0,0,1569,1570,1,0,0,0,1570,1572,3,216,
	108,0,1571,1565,1,0,0,0,1571,1568,1,0,0,0,1572,1577,1,0,0,0,1573,1574,5,
	172,0,0,1574,1575,5,119,0,0,1575,1577,5,203,0,0,1576,1564,1,0,0,0,1576,
	1573,1,0,0,0,1577,89,1,0,0,0,1578,1579,3,216,108,0,1579,1580,5,275,0,0,
	1580,1581,5,292,0,0,1581,1586,3,216,108,0,1582,1583,5,290,0,0,1583,1585,
	3,216,108,0,1584,1582,1,0,0,0,1585,1588,1,0,0,0,1586,1584,1,0,0,0,1586,
	1587,1,0,0,0,1587,1589,1,0,0,0,1588,1586,1,0,0,0,1589,1590,5,293,0,0,1590,
	91,1,0,0,0,1591,1592,3,216,108,0,1592,1593,5,11,0,0,1593,1594,3,114,57,
	0,1594,93,1,0,0,0,1595,1603,3,98,49,0,1596,1598,5,11,0,0,1597,1596,1,0,
	0,0,1597,1598,1,0,0,0,1598,1599,1,0,0,0,1599,1601,3,216,108,0,1600,1602,
	3,96,48,0,1601,1600,1,0,0,0,1601,1602,1,0,0,0,1602,1604,1,0,0,0,1603,1597,
	1,0,0,0,1603,1604,1,0,0,0,1604,95,1,0,0,0,1605,1606,5,292,0,0,1606,1611,
	3,216,108,0,1607,1608,5,290,0,0,1608,1610,3,216,108,0,1609,1607,1,0,0,0,
	1610,1613,1,0,0,0,1611,1609,1,0,0,0,1611,1612,1,0,0,0,1612,1614,1,0,0,0,
	1613,1611,1,0,0,0,1614,1615,5,293,0,0,1615,97,1,0,0,0,1616,1618,3,204,102,
	0,1617,1619,3,206,103,0,1618,1617,1,0,0,0,1618,1619,1,0,0,0,1619,1654,1,
	0,0,0,1620,1621,5,292,0,0,1621,1622,3,16,8,0,1622,1623,5,293,0,0,1623,1654,
	1,0,0,0,1624,1625,5,250,0,0,1625,1626,5,292,0,0,1626,1631,3,114,57,0,1627,
	1628,5,290,0,0,1628,1630,3,114,57,0,1629,1627,1,0,0,0,1630,1633,1,0,0,0,
	1631,1629,1,0,0,0,1631,1632,1,0,0,0,1632,1634,1,0,0,0,1633,1631,1,0,0,0,
	1634,1637,5,293,0,0,1635,1636,5,267,0,0,1636,1638,5,164,0,0,1637,1635,1,
	0,0,0,1637,1638,1,0,0,0,1638,1654,1,0,0,0,1639,1640,5,120,0,0,1640,1641,
	5,292,0,0,1641,1642,3,16,8,0,1642,1643,5,293,0,0,1643,1654,1,0,0,0,1644,
	1645,5,225,0,0,1645,1646,5,292,0,0,1646,1647,3,100,50,0,1647,1648,5,293,
	0,0,1648,1654,1,0,0,0,1649,1650,5,292,0,0,1650,1651,3,64,32,0,1651,1652,
	5,293,0,0,1652,1654,1,0,0,0,1653,1616,1,0,0,0,1653,1620,1,0,0,0,1653,1624,
	1,0,0,0,1653,1639,1,0,0,0,1653,1644,1,0,0,0,1653,1649,1,0,0,0,1654,99,1,
	0,0,0,1655,1656,3,204,102,0,1656,1665,5,292,0,0,1657,1662,3,102,51,0,1658,
	1659,5,290,0,0,1659,1661,3,102,51,0,1660,1658,1,0,0,0,1661,1664,1,0,0,0,
	1662,1660,1,0,0,0,1662,1663,1,0,0,0,1663,1666,1,0,0,0,1664,1662,1,0,0,0,
	1665,1657,1,0,0,0,1665,1666,1,0,0,0,1666,1676,1,0,0,0,1667,1668,5,32,0,
	0,1668,1673,3,112,56,0,1669,1670,5,290,0,0,1670,1672,3,112,56,0,1671,1669,
	1,0,0,0,1672,1675,1,0,0,0,1673,1671,1,0,0,0,1673,1674,1,0,0,0,1674,1677,
	1,0,0,0,1675,1673,1,0,0,0,1676,1667,1,0,0,0,1676,1677,1,0,0,0,1677,1678,
	1,0,0,0,1678,1679,5,293,0,0,1679,101,1,0,0,0,1680,1681,3,216,108,0,1681,
	1682,5,302,0,0,1682,1684,1,0,0,0,1683,1680,1,0,0,0,1683,1684,1,0,0,0,1684,
	1688,1,0,0,0,1685,1689,3,104,52,0,1686,1689,3,108,54,0,1687,1689,3,114,
	57,0,1688,1685,1,0,0,0,1688,1686,1,0,0,0,1688,1687,1,0,0,0,1689,103,1,0,
	0,0,1690,1708,3,106,53,0,1691,1692,5,169,0,0,1692,1706,5,18,0,0,1693,1702,
	5,292,0,0,1694,1699,3,114,57,0,1695,1696,5,290,0,0,1696,1698,3,114,57,0,
	1697,1695,1,0,0,0,1698,1701,1,0,0,0,1699,1697,1,0,0,0,1699,1700,1,0,0,0,
	1700,1703,1,0,0,0,1701,1699,1,0,0,0,1702,1694,1,0,0,0,1702,1703,1,0,0,0,
	1703,1704,1,0,0,0,1704,1707,5,293,0,0,1705,1707,3,114,57,0,1706,1693,1,
	0,0,0,1706,1705,1,0,0,0,1707,1709,1,0,0,0,1708,1691,1,0,0,0,1708,1709,1,
	0,0,0,1709,1716,1,0,0,0,1710,1711,5,184,0,0,1711,1712,5,264,0,0,1712,1717,
	5,62,0,0,1713,1714,5,116,0,0,1714,1715,5,264,0,0,1715,1717,5,62,0,0,1716,
	1710,1,0,0,0,1716,1713,1,0,0,0,1716,1717,1,0,0,0,1717,1734,1,0,0,0,1718,
	1719,5,163,0,0,1719,1732,5,18,0,0,1720,1721,5,292,0,0,1721,1726,3,44,22,
	0,1722,1723,5,290,0,0,1723,1725,3,44,22,0,1724,1722,1,0,0,0,1725,1728,1,
	0,0,0,1726,1724,1,0,0,0,1726,1727,1,0,0,0,1727,1729,1,0,0,0,1728,1726,1,
	0,0,0,1729,1730,5,293,0,0,1730,1733,1,0,0,0,1731,1733,3,44,22,0,1732,1720,
	1,0,0,0,1732,1731,1,0,0,0,1733,1735,1,0,0,0,1734,1718,1,0,0,0,1734,1735,
	1,0,0,0,1735,105,1,0,0,0,1736,1737,5,225,0,0,1737,1738,5,292,0,0,1738,1739,
	3,204,102,0,1739,1747,5,293,0,0,1740,1742,5,11,0,0,1741,1740,1,0,0,0,1741,
	1742,1,0,0,0,1742,1743,1,0,0,0,1743,1745,3,216,108,0,1744,1746,3,96,48,
	0,1745,1744,1,0,0,0,1745,1746,1,0,0,0,1746,1748,1,0,0,0,1747,1741,1,0,0,
	0,1747,1748,1,0,0,0,1748,1763,1,0,0,0,1749,1750,5,225,0,0,1750,1751,5,292,
	0,0,1751,1752,3,16,8,0,1752,1760,5,293,0,0,1753,1755,5,11,0,0,1754,1753,
	1,0,0,0,1754,1755,1,0,0,0,1755,1756,1,0,0,0,1756,1758,3,216,108,0,1757,
	1759,3,96,48,0,1758,1757,1,0,0,0,1758,1759,1,0,0,0,1759,1761,1,0,0,0,1760,
	1754,1,0,0,0,1760,1761,1,0,0,0,1761,1763,1,0,0,0,1762,1736,1,0,0,0,1762,
	1749,1,0,0,0,1763,107,1,0,0,0,1764,1765,5,55,0,0,1765,1766,5,292,0,0,1766,
	1771,3,110,55,0,1767,1768,5,290,0,0,1768,1770,3,110,55,0,1769,1767,1,0,
	0,0,1770,1773,1,0,0,0,1771,1769,1,0,0,0,1771,1772,1,0,0,0,1772,1774,1,0,
	0,0,1773,1771,1,0,0,0,1774,1775,5,293,0,0,1775,1783,1,0,0,0,1776,1777,5,
	22,0,0,1777,1778,5,292,0,0,1778,1779,5,151,0,0,1779,1780,5,11,0,0,1780,
	1781,5,55,0,0,1781,1783,5,293,0,0,1782,1764,1,0,0,0,1782,1776,1,0,0,0,1783,
	109,1,0,0,0,1784,1786,3,216,108,0,1785,1787,3,162,81,0,1786,1785,1,0,0,
	0,1786,1787,1,0,0,0,1787,111,1,0,0,0,1788,1789,5,292,0,0,1789,1790,3,204,
	102,0,1790,1791,5,290,0,0,1791,1796,3,204,102,0,1792,1793,5,290,0,0,1793,
	1795,3,204,102,0,1794,1792,1,0,0,0,1795,1798,1,0,0,0,1796,1794,1,0,0,0,
	1796,1797,1,0,0,0,1797,1799,1,0,0,0,1798,1796,1,0,0,0,1799,1800,5,293,0,
	0,1800,113,1,0,0,0,1801,1802,3,116,58,0,1802,115,1,0,0,0,1803,1804,6,58,
	-1,0,1804,1806,3,120,60,0,1805,1807,3,118,59,0,1806,1805,1,0,0,0,1806,1807,
	1,0,0,0,1807,1811,1,0,0,0,1808,1809,5,150,0,0,1809,1811,3,116,58,3,1810,
	1803,1,0,0,0,1810,1808,1,0,0,0,1811,1820,1,0,0,0,1812,1813,10,2,0,0,1813,
	1814,5,8,0,0,1814,1819,3,116,58,3,1815,1816,10,1,0,0,1816,1817,5,162,0,
	0,1817,1819,3,116,58,2,1818,1812,1,0,0,0,1818,1815,1,0,0,0,1819,1822,1,
	0,0,0,1820,1818,1,0,0,0,1820,1821,1,0,0,0,1821,117,1,0,0,0,1822,1820,1,
	0,0,0,1823,1824,3,150,75,0,1824,1825,3,120,60,0,1825,1885,1,0,0,0,1826,
	1827,3,150,75,0,1827,1828,3,152,76,0,1828,1829,5,292,0,0,1829,1830,3,16,
	8,0,1830,1831,5,293,0,0,1831,1885,1,0,0,0,1832,1834,5,150,0,0,1833,1832,
	1,0,0,0,1833,1834,1,0,0,0,1834,1835,1,0,0,0,1835,1836,5,16,0,0,1836,1837,
	3,120,60,0,1837,1838,5,8,0,0,1838,1839,3,120,60,0,1839,1885,1,0,0,0,1840,
	1842,5,150,0,0,1841,1840,1,0,0,0,1841,1842,1,0,0,0,1842,1843,1,0,0,0,1843,
	1844,5,96,0,0,1844,1845,5,292,0,0,1845,1850,3,114,57,0,1846,1847,5,290,
	0,0,1847,1849,3,114,57,0,1848,1846,1,0,0,0,1849,1852,1,0,0,0,1850,1848,
	1,0,0,0,1850,1851,1,0,0,0,1851,1853,1,0,0,0,1852,1850,1,0,0,0,1853,1854,
	5,293,0,0,1854,1885,1,0,0,0,1855,1857,5,150,0,0,1856,1855,1,0,0,0,1856,
	1857,1,0,0,0,1857,1858,1,0,0,0,1858,1859,5,96,0,0,1859,1860,5,292,0,0,1860,
	1861,3,16,8,0,1861,1862,5,293,0,0,1862,1885,1,0,0,0,1863,1865,5,150,0,0,
	1864,1863,1,0,0,0,1864,1865,1,0,0,0,1865,1866,1,0,0,0,1866,1867,5,124,0,
	0,1867,1870,3,120,60,0,1868,1869,5,66,0,0,1869,1871,3,120,60,0,1870,1868,
	1,0,0,0,1870,1871,1,0,0,0,1871,1885,1,0,0,0,1872,1874,5,107,0,0,1873,1875,
	5,150,0,0,1874,1873,1,0,0,0,1874,1875,1,0,0,0,1875,1876,1,0,0,0,1876,1885,
	5,151,0,0,1877,1879,5,107,0,0,1878,1880,5,150,0,0,1879,1878,1,0,0,0,1879,
	1880,1,0,0,0,1880,1881,1,0,0,0,1881,1882,5,57,0,0,1882,1883,5,81,0,0,1883,
	1885,3,120,60,0,1884,1823,1,0,0,0,1884,1826,1,0,0,0,1884,1833,1,0,0,0,1884,
	1841,1,0,0,0,1884,1856,1,0,0,0,1884,1864,1,0,0,0,1884,1872,1,0,0,0,1884,
	1877,1,0,0,0,1885,119,1,0,0,0,1886,1887,6,60,-1,0,1887,1891,3,122,61,0,
	1888,1889,7,17,0,0,1889,1891,3,120,60,4,1890,1886,1,0,0,0,1890,1888,1,0,
	0,0,1891,1906,1,0,0,0,1892,1893,10,3,0,0,1893,1894,7,18,0,0,1894,1905,3,
	120,60,4,1895,1896,10,2,0,0,1896,1897,7,17,0,0,1897,1905,3,120,60,3,1898,
	1899,10,1,0,0,1899,1900,5,286,0,0,1900,1905,3,120,60,2,1901,1902,10,5,0,
	0,1902,1903,5,13,0,0,1903,1905,3,148,74,0,1904,1892,1,0,0,0,1904,1895,1,
	0,0,0,1904,1898,1,0,0,0,1904,1901,1,0,0,0,1905,1908,1,0,0,0,1906,1904,1,
	0,0,0,1906,1907,1,0,0,0,1907,121,1,0,0,0,1908,1906,1,0,0,0,1909,1910,6,
	61,-1,0,1910,2360,5,151,0,0,1911,2360,3,156,78,0,1912,1913,3,216,108,0,
	1913,1914,3,146,73,0,1914,2360,1,0,0,0,1915,1916,5,59,0,0,1916,1917,5,180,
	0,0,1917,2360,3,146,73,0,1918,2360,3,218,109,0,1919,2360,3,154,77,0,1920,
	2360,3,146,73,0,1921,2360,5,308,0,0,1922,2360,5,287,0,0,1923,1924,5,178,
	0,0,1924,1925,5,292,0,0,1925,1926,3,120,60,0,1926,1927,5,96,0,0,1927,1928,
	3,120,60,0,1928,1929,5,293,0,0,1929,2360,1,0,0,0,1930,1931,5,292,0,0,1931,
	1934,3,114,57,0,1932,1933,5,290,0,0,1933,1935,3,114,57,0,1934,1932,1,0,
	0,0,1935,1936,1,0,0,0,1936,1934,1,0,0,0,1936,1937,1,0,0,0,1937,1938,1,0,
	0,0,1938,1939,5,293,0,0,1939,2360,1,0,0,0,1940,1941,5,203,0,0,1941,1942,
	5,292,0,0,1942,1947,3,114,57,0,1943,1944,5,290,0,0,1944,1946,3,114,57,0,
	1945,1943,1,0,0,0,1946,1949,1,0,0,0,1947,1945,1,0,0,0,1947,1948,1,0,0,0,
	1948,1950,1,0,0,0,1949,1947,1,0,0,0,1950,1951,5,293,0,0,1951,2360,1,0,0,
	0,1952,1953,5,126,0,0,1953,1955,5,292,0,0,1954,1956,3,60,30,0,1955,1954,
	1,0,0,0,1955,1956,1,0,0,0,1956,1957,1,0,0,0,1957,1960,3,114,57,0,1958,1959,
	5,290,0,0,1959,1961,3,146,73,0,1960,1958,1,0,0,0,1960,1961,1,0,0,0,1961,
	1965,1,0,0,0,1962,1963,5,158,0,0,1963,1964,5,168,0,0,1964,1966,3,76,38,
	0,1965,1962,1,0,0,0,1965,1966,1,0,0,0,1966,1967,1,0,0,0,1967,1968,5,293,
	0,0,1968,1969,5,268,0,0,1969,1970,5,89,0,0,1970,1971,5,292,0,0,1971,1972,
	5,163,0,0,1972,1973,5,18,0,0,1973,1978,3,44,22,0,1974,1975,5,290,0,0,1975,
	1977,3,44,22,0,1976,1974,1,0,0,0,1977,1980,1,0,0,0,1978,1976,1,0,0,0,1978,
	1979,1,0,0,0,1979,1981,1,0,0,0,1980,1978,1,0,0,0,1981,1982,5,293,0,0,1982,
	2360,1,0,0,0,1983,1985,3,142,71,0,1984,1983,1,0,0,0,1984,1985,1,0,0,0,1985,
	1986,1,0,0,0,1986,1987,3,204,102,0,1987,1991,5,292,0,0,1988,1989,3,216,
	108,0,1989,1990,5,288,0,0,1990,1992,1,0,0,0,1991,1988,1,0,0,0,1991,1992,
	1,0,0,0,1992,1993,1,0,0,0,1993,1994,5,283,0,0,1994,1996,5,293,0,0,1995,
	1997,3,170,85,0,1996,1995,1,0,0,0,1996,1997,1,0,0,0,1997,1999,1,0,0,0,1998,
	2000,3,174,87,0,1999,1998,1,0,0,0,1999,2000,1,0,0,0,2000,2360,1,0,0,0,2001,
	2003,3,142,71,0,2002,2001,1,0,0,0,2002,2003,1,0,0,0,2003,2004,1,0,0,0,2004,
	2005,3,204,102,0,2005,2017,5,292,0,0,2006,2008,3,60,30,0,2007,2006,1,0,
	0,0,2007,2008,1,0,0,0,2008,2009,1,0,0,0,2009,2014,3,114,57,0,2010,2011,
	5,290,0,0,2011,2013,3,114,57,0,2012,2010,1,0,0,0,2013,2016,1,0,0,0,2014,
	2012,1,0,0,0,2014,2015,1,0,0,0,2015,2018,1,0,0,0,2016,2014,1,0,0,0,2017,
	2007,1,0,0,0,2017,2018,1,0,0,0,2018,2029,1,0,0,0,2019,2020,5,163,0,0,2020,
	2021,5,18,0,0,2021,2026,3,44,22,0,2022,2023,5,290,0,0,2023,2025,3,44,22,
	0,2024,2022,1,0,0,0,2025,2028,1,0,0,0,2026,2024,1,0,0,0,2026,2027,1,0,0,
	0,2027,2030,1,0,0,0,2028,2026,1,0,0,0,2029,2019,1,0,0,0,2029,2030,1,0,0,
	0,2030,2031,1,0,0,0,2031,2033,5,293,0,0,2032,2034,3,170,85,0,2033,2032,
	1,0,0,0,2033,2034,1,0,0,0,2034,2039,1,0,0,0,2035,2037,3,144,72,0,2036,2035,
	1,0,0,0,2036,2037,1,0,0,0,2037,2038,1,0,0,0,2038,2040,3,174,87,0,2039,2036,
	1,0,0,0,2039,2040,1,0,0,0,2040,2360,1,0,0,0,2041,2042,3,216,108,0,2042,
	2043,3,174,87,0,2043,2360,1,0,0,0,2044,2045,3,216,108,0,2045,2046,5,301,
	0,0,2046,2047,3,114,57,0,2047,2360,1,0,0,0,2048,2057,5,292,0,0,2049,2054,
	3,216,108,0,2050,2051,5,290,0,0,2051,2053,3,216,108,0,2052,2050,1,0,0,0,
	2053,2056,1,0,0,0,2054,2052,1,0,0,0,2054,2055,1,0,0,0,2055,2058,1,0,0,0,
	2056,2054,1,0,0,0,2057,2049,1,0,0,0,2057,2058,1,0,0,0,2058,2059,1,0,0,0,
	2059,2060,5,293,0,0,2060,2061,5,301,0,0,2061,2360,3,114,57,0,2062,2063,
	5,292,0,0,2063,2064,3,16,8,0,2064,2065,5,293,0,0,2065,2360,1,0,0,0,2066,
	2067,5,70,0,0,2067,2068,5,292,0,0,2068,2069,3,16,8,0,2069,2070,5,293,0,
	0,2070,2360,1,0,0,0,2071,2072,5,21,0,0,2072,2074,3,114,57,0,2073,2075,3,
	168,84,0,2074,2073,1,0,0,0,2075,2076,1,0,0,0,2076,2074,1,0,0,0,2076,2077,
	1,0,0,0,2077,2080,1,0,0,0,2078,2079,5,61,0,0,2079,2081,3,114,57,0,2080,
	2078,1,0,0,0,2080,2081,1,0,0,0,2081,2082,1,0,0,0,2082,2083,5,64,0,0,2083,
	2360,1,0,0,0,2084,2086,5,21,0,0,2085,2087,3,168,84,0,2086,2085,1,0,0,0,
	2087,2088,1,0,0,0,2088,2086,1,0,0,0,2088,2089,1,0,0,0,2089,2092,1,0,0,0,
	2090,2091,5,61,0,0,2091,2093,3,114,57,0,2092,2090,1,0,0,0,2092,2093,1,0,
	0,0,2093,2094,1,0,0,0,2094,2095,5,64,0,0,2095,2360,1,0,0,0,2096,2097,5,
	22,0,0,2097,2098,5,292,0,0,2098,2099,3,114,57,0,2099,2100,5,11,0,0,2100,
	2101,3,162,81,0,2101,2102,5,293,0,0,2102,2360,1,0,0,0,2103,2104,5,240,0,
	0,2104,2105,5,292,0,0,2105,2106,3,114,57,0,2106,2107,5,11,0,0,2107,2108,
	3,162,81,0,2108,2109,5,293,0,0,2109,2360,1,0,0,0,2110,2111,5,10,0,0,2111,
	2120,5,294,0,0,2112,2117,3,114,57,0,2113,2114,5,290,0,0,2114,2116,3,114,
	57,0,2115,2113,1,0,0,0,2116,2119,1,0,0,0,2117,2115,1,0,0,0,2117,2118,1,
	0,0,0,2118,2121,1,0,0,0,2119,2117,1,0,0,0,2120,2112,1,0,0,0,2120,2121,1,
	0,0,0,2121,2122,1,0,0,0,2122,2360,5,295,0,0,2123,2360,3,216,108,0,2124,
	2360,5,38,0,0,2125,2129,5,42,0,0,2126,2127,5,292,0,0,2127,2128,5,309,0,
	0,2128,2130,5,293,0,0,2129,2126,1,0,0,0,2129,2130,1,0,0,0,2130,2360,1,0,
	0,0,2131,2135,5,43,0,0,2132,2133,5,292,0,0,2133,2134,5,309,0,0,2134,2136,
	5,293,0,0,2135,2132,1,0,0,0,2135,2136,1,0,0,0,2136,2360,1,0,0,0,2137,2141,
	5,128,0,0,2138,2139,5,292,0,0,2139,2140,5,309,0,0,2140,2142,5,293,0,0,2141,
	2138,1,0,0,0,2141,2142,1,0,0,0,2142,2360,1,0,0,0,2143,2147,5,129,0,0,2144,
	2145,5,292,0,0,2145,2146,5,309,0,0,2146,2148,5,293,0,0,2147,2144,1,0,0,
	0,2147,2148,1,0,0,0,2148,2360,1,0,0,0,2149,2360,5,44,0,0,2150,2360,5,37,
	0,0,2151,2360,5,41,0,0,2152,2360,5,39,0,0,2153,2154,5,237,0,0,2154,2162,
	5,292,0,0,2155,2157,3,74,37,0,2156,2155,1,0,0,0,2156,2157,1,0,0,0,2157,
	2159,1,0,0,0,2158,2160,3,120,60,0,2159,2158,1,0,0,0,2159,2160,1,0,0,0,2160,
	2161,1,0,0,0,2161,2163,5,81,0,0,2162,2156,1,0,0,0,2162,2163,1,0,0,0,2163,
	2164,1,0,0,0,2164,2165,3,120,60,0,2165,2166,5,293,0,0,2166,2360,1,0,0,0,
	2167,2168,5,237,0,0,2168,2169,5,292,0,0,2169,2170,3,120,60,0,2170,2171,
	5,290,0,0,2171,2172,3,120,60,0,2172,2173,5,293,0,0,2173,2360,1,0,0,0,2174,
	2175,5,223,0,0,2175,2176,5,292,0,0,2176,2177,3,120,60,0,2177,2178,5,81,
	0,0,2178,2181,3,120,60,0,2179,2180,5,79,0,0,2180,2182,3,120,60,0,2181,2179,
	1,0,0,0,2181,2182,1,0,0,0,2182,2183,1,0,0,0,2183,2184,5,293,0,0,2184,2360,
	1,0,0,0,2185,2186,5,149,0,0,2186,2187,5,292,0,0,2187,2190,3,120,60,0,2188,
	2189,5,290,0,0,2189,2191,3,160,80,0,2190,2188,1,0,0,0,2190,2191,1,0,0,0,
	2191,2192,1,0,0,0,2192,2193,5,293,0,0,2193,2360,1,0,0,0,2194,2195,5,72,
	0,0,2195,2196,5,292,0,0,2196,2197,3,216,108,0,2197,2198,5,81,0,0,2198,2199,
	3,120,60,0,2199,2200,5,293,0,0,2200,2360,1,0,0,0,2201,2202,5,292,0,0,2202,
	2203,3,114,57,0,2203,2204,5,293,0,0,2204,2360,1,0,0,0,2205,2206,5,90,0,
	0,2206,2215,5,292,0,0,2207,2212,3,204,102,0,2208,2209,5,290,0,0,2209,2211,
	3,204,102,0,2210,2208,1,0,0,0,2211,2214,1,0,0,0,2212,2210,1,0,0,0,2212,
	2213,1,0,0,0,2213,2216,1,0,0,0,2214,2212,1,0,0,0,2215,2207,1,0,0,0,2215,
	2216,1,0,0,0,2216,2217,1,0,0,0,2217,2360,5,293,0,0,2218,2219,5,112,0,0,
	2219,2220,5,292,0,0,2220,2225,3,124,62,0,2221,2222,3,132,66,0,2222,2223,
	5,158,0,0,2223,2224,5,65,0,0,2224,2226,1,0,0,0,2225,2221,1,0,0,0,2225,2226,
	1,0,0,0,2226,2227,1,0,0,0,2227,2228,5,293,0,0,2228,2360,1,0,0,0,2229,2230,
	5,115,0,0,2230,2231,5,292,0,0,2231,2234,3,124,62,0,2232,2233,5,196,0,0,
	2233,2235,3,162,81,0,2234,2232,1,0,0,0,2234,2235,1,0,0,0,2235,2240,1,0,
	0,0,2236,2237,3,134,67,0,2237,2238,5,158,0,0,2238,2239,5,62,0,0,2239,2241,
	1,0,0,0,2240,2236,1,0,0,0,2240,2241,1,0,0,0,2241,2246,1,0,0,0,2242,2243,
	3,134,67,0,2243,2244,5,158,0,0,2244,2245,5,65,0,0,2245,2247,1,0,0,0,2246,
	2242,1,0,0,0,2246,2247,1,0,0,0,2247,2248,1,0,0,0,2248,2249,5,293,0,0,2249,
	2360,1,0,0,0,2250,2251,5,114,0,0,2251,2252,5,292,0,0,2252,2259,3,124,62,
	0,2253,2254,5,196,0,0,2254,2257,3,162,81,0,2255,2256,5,80,0,0,2256,2258,
	3,128,64,0,2257,2255,1,0,0,0,2257,2258,1,0,0,0,2258,2260,1,0,0,0,2259,2253,
	1,0,0,0,2259,2260,1,0,0,0,2260,2264,1,0,0,0,2261,2262,3,136,68,0,2262,2263,
	5,271,0,0,2263,2265,1,0,0,0,2264,2261,1,0,0,0,2264,2265,1,0,0,0,2265,2273,
	1,0,0,0,2266,2267,7,19,0,0,2267,2271,5,185,0,0,2268,2269,5,158,0,0,2269,
	2270,5,206,0,0,2270,2272,5,229,0,0,2271,2268,1,0,0,0,2271,2272,1,0,0,0,
	2272,2274,1,0,0,0,2273,2266,1,0,0,0,2273,2274,1,0,0,0,2274,2279,1,0,0,0,
	2275,2276,3,138,69,0,2276,2277,5,158,0,0,2277,2278,5,62,0,0,2278,2280,1,
	0,0,0,2279,2275,1,0,0,0,2279,2280,1,0,0,0,2280,2285,1,0,0,0,2281,2282,3,
	138,69,0,2282,2283,5,158,0,0,2283,2284,5,65,0,0,2284,2286,1,0,0,0,2285,
	2281,1,0,0,0,2285,2286,1,0,0,0,2286,2287,1,0,0,0,2287,2288,5,293,0,0,2288,
	2360,1,0,0,0,2289,2290,5,113,0,0,2290,2319,5,292,0,0,2291,2296,3,140,70,
	0,2292,2293,5,290,0,0,2293,2295,3,140,70,0,2294,2292,1,0,0,0,2295,2298,
	1,0,0,0,2296,2294,1,0,0,0,2296,2297,1,0,0,0,2297,2305,1,0,0,0,2298,2296,
	1,0,0,0,2299,2300,5,151,0,0,2300,2301,5,158,0,0,2301,2306,5,151,0,0,2302,
	2303,5,1,0,0,2303,2304,5,158,0,0,2304,2306,5,151,0,0,2305,2299,1,0,0,0,
	2305,2302,1,0,0,0,2305,2306,1,0,0,0,2306,2317,1,0,0,0,2307,2308,5,267,0,
	0,2308,2310,5,247,0,0,2309,2311,5,118,0,0,2310,2309,1,0,0,0,2310,2311,1,
	0,0,0,2311,2318,1,0,0,0,2312,2313,5,269,0,0,2313,2315,5,247,0,0,2314,2316,
	5,118,0,0,2315,2314,1,0,0,0,2315,2316,1,0,0,0,2316,2318,1,0,0,0,2317,2307,
	1,0,0,0,2317,2312,1,0,0,0,2317,2318,1,0,0,0,2318,2320,1,0,0,0,2319,2291,
	1,0,0,0,2319,2320,1,0,0,0,2320,2327,1,0,0,0,2321,2322,5,196,0,0,2322,2325,
	3,162,81,0,2323,2324,5,80,0,0,2324,2326,3,128,64,0,2325,2323,1,0,0,0,2325,
	2326,1,0,0,0,2326,2328,1,0,0,0,2327,2321,1,0,0,0,2327,2328,1,0,0,0,2328,
	2329,1,0,0,0,2329,2360,5,293,0,0,2330,2331,5,111,0,0,2331,2348,5,292,0,
	0,2332,2337,3,126,63,0,2333,2334,5,290,0,0,2334,2336,3,126,63,0,2335,2333,
	1,0,0,0,2336,2339,1,0,0,0,2337,2335,1,0,0,0,2337,2338,1,0,0,0,2338,2346,
	1,0,0,0,2339,2337,1,0,0,0,2340,2341,5,151,0,0,2341,2342,5,158,0,0,2342,
	2347,5,151,0,0,2343,2344,5,1,0,0,2344,2345,5,158,0,0,2345,2347,5,151,0,
	0,2346,2340,1,0,0,0,2346,2343,1,0,0,0,2346,2347,1,0,0,0,2347,2349,1,0,0,
	0,2348,2332,1,0,0,0,2348,2349,1,0,0,0,2349,2356,1,0,0,0,2350,2351,5,196,
	0,0,2351,2354,3,162,81,0,2352,2353,5,80,0,0,2353,2355,3,128,64,0,2354,2352,
	1,0,0,0,2354,2355,1,0,0,0,2355,2357,1,0,0,0,2356,2350,1,0,0,0,2356,2357,
	1,0,0,0,2357,2358,1,0,0,0,2358,2360,5,293,0,0,2359,1909,1,0,0,0,2359,1911,
	1,0,0,0,2359,1912,1,0,0,0,2359,1915,1,0,0,0,2359,1918,1,0,0,0,2359,1919,
	1,0,0,0,2359,1920,1,0,0,0,2359,1921,1,0,0,0,2359,1922,1,0,0,0,2359,1923,
	1,0,0,0,2359,1930,1,0,0,0,2359,1940,1,0,0,0,2359,1952,1,0,0,0,2359,1984,
	1,0,0,0,2359,2002,1,0,0,0,2359,2041,1,0,0,0,2359,2044,1,0,0,0,2359,2048,
	1,0,0,0,2359,2062,1,0,0,0,2359,2066,1,0,0,0,2359,2071,1,0,0,0,2359,2084,
	1,0,0,0,2359,2096,1,0,0,0,2359,2103,1,0,0,0,2359,2110,1,0,0,0,2359,2123,
	1,0,0,0,2359,2124,1,0,0,0,2359,2125,1,0,0,0,2359,2131,1,0,0,0,2359,2137,
	1,0,0,0,2359,2143,1,0,0,0,2359,2149,1,0,0,0,2359,2150,1,0,0,0,2359,2151,
	1,0,0,0,2359,2152,1,0,0,0,2359,2153,1,0,0,0,2359,2167,1,0,0,0,2359,2174,
	1,0,0,0,2359,2185,1,0,0,0,2359,2194,1,0,0,0,2359,2201,1,0,0,0,2359,2205,
	1,0,0,0,2359,2218,1,0,0,0,2359,2229,1,0,0,0,2359,2250,1,0,0,0,2359,2289,
	1,0,0,0,2359,2330,1,0,0,0,2360,2371,1,0,0,0,2361,2362,10,24,0,0,2362,2363,
	5,294,0,0,2363,2364,3,120,60,0,2364,2365,5,295,0,0,2365,2370,1,0,0,0,2366,
	2367,10,22,0,0,2367,2368,5,288,0,0,2368,2370,3,216,108,0,2369,2361,1,0,
	0,0,2369,2366,1,0,0,0,2370,2373,1,0,0,0,2371,2369,1,0,0,0,2371,2372,1,0,
	0,0,2372,123,1,0,0,0,2373,2371,1,0,0,0,2374,2375,3,126,63,0,2375,2376,5,
	290,0,0,2376,2386,3,146,73,0,2377,2378,5,171,0,0,2378,2383,3,130,65,0,2379,
	2380,5,290,0,0,2380,2382,3,130,65,0,2381,2379,1,0,0,0,2382,2385,1,0,0,0,
	2383,2381,1,0,0,0,2383,2384,1,0,0,0,2384,2387,1,0,0,0,2385,2383,1,0,0,0,
	2386,2377,1,0,0,0,2386,2387,1,0,0,0,2387,125,1,0,0,0,2388,2391,3,114,57,
	0,2389,2390,5,80,0,0,2390,2392,3,128,64,0,2391,2389,1,0,0,0,2391,2392,1,
	0,0,0,2392,127,1,0,0,0,2393,2396,5,110,0,0,2394,2395,5,63,0,0,2395,2397,
	7,20,0,0,2396,2394,1,0,0,0,2396,2397,1,0,0,0,2397,129,1,0,0,0,2398,2399,
	3,126,63,0,2399,2400,5,11,0,0,2400,2401,3,216,108,0,2401,131,1,0,0,0,2402,
	2403,7,21,0,0,2403,133,1,0,0,0,2404,2409,5,65,0,0,2405,2409,5,151,0,0,2406,
	2407,5,49,0,0,2407,2409,3,114,57,0,2408,2404,1,0,0,0,2408,2405,1,0,0,0,
	2408,2406,1,0,0,0,2409,135,1,0,0,0,2410,2412,5,269,0,0,2411,2413,5,10,0,
	0,2412,2411,1,0,0,0,2412,2413,1,0,0,0,2413,2422,1,0,0,0,2414,2416,5,267,
	0,0,2415,2417,7,22,0,0,2416,2415,1,0,0,0,2416,2417,1,0,0,0,2417,2419,1,
	0,0,0,2418,2420,5,10,0,0,2419,2418,1,0,0,0,2419,2420,1,0,0,0,2420,2422,
	1,0,0,0,2421,2410,1,0,0,0,2421,2414,1,0,0,0,2422,137,1,0,0,0,2423,2428,
	5,65,0,0,2424,2428,5,151,0,0,2425,2426,5,62,0,0,2426,2428,7,23,0,0,2427,
	2423,1,0,0,0,2427,2424,1,0,0,0,2427,2425,1,0,0,0,2428,139,1,0,0,0,2429,
	2431,5,117,0,0,2430,2429,1,0,0,0,2430,2431,1,0,0,0,2431,2432,1,0,0,0,2432,
	2433,3,114,57,0,2433,2434,5,259,0,0,2434,2435,3,126,63,0,2435,2441,1,0,
	0,0,2436,2437,3,114,57,0,2437,2438,5,289,0,0,2438,2439,3,126,63,0,2439,
	2441,1,0,0,0,2440,2430,1,0,0,0,2440,2436,1,0,0,0,2441,141,1,0,0,0,2442,
	2443,7,24,0,0,2443,143,1,0,0,0,2444,2445,5,95,0,0,2445,2449,5,153,0,0,2446,
	2447,5,194,0,0,2447,2449,5,153,0,0,2448,2444,1,0,0,0,2448,2446,1,0,0,0,
	2449,145,1,0,0,0,2450,2457,5,306,0,0,2451,2454,5,307,0,0,2452,2453,5,242,
	0,0,2453,2455,5,306,0,0,2454,2452,1,0,0,0,2454,2455,1,0,0,0,2455,2457,1,
	0,0,0,2456,2450,1,0,0,0,2456,2451,1,0,0,0,2457,147,1,0,0,0,2458,2459,5,
	232,0,0,2459,2460,5,274,0,0,2460,2465,3,156,78,0,2461,2462,5,232,0,0,2462,
	2463,5,274,0,0,2463,2465,3,146,73,0,2464,2458,1,0,0,0,2464,2461,1,0,0,0,
	2465,149,1,0,0,0,2466,2467,7,25,0,0,2467,151,1,0,0,0,2468,2469,7,26,0,0,
	2469,153,1,0,0,0,2470,2471,7,27,0,0,2471,155,1,0,0,0,2472,2474,5,103,0,
	0,2473,2475,7,17,0,0,2474,2473,1,0,0,0,2474,2475,1,0,0,0,2475,2476,1,0,
	0,0,2476,2477,3,146,73,0,2477,2480,3,158,79,0,2478,2479,5,234,0,0,2479,
	2481,3,158,79,0,2480,2478,1,0,0,0,2480,2481,1,0,0,0,2481,157,1,0,0,0,2482,
	2483,7,28,0,0,2483,159,1,0,0,0,2484,2485,7,29,0,0,2485,161,1,0,0,0,2486,
	2487,6,81,-1,0,2487,2488,5,203,0,0,2488,2489,5,292,0,0,2489,2494,3,164,
	82,0,2490,2491,5,290,0,0,2491,2493,3,164,82,0,2492,2490,1,0,0,0,2493,2496,
	1,0,0,0,2494,2492,1,0,0,0,2494,2495,1,0,0,0,2495,2497,1,0,0,0,2496,2494,
	1,0,0,0,2497,2498,5,293,0,0,2498,2578,1,0,0,0,2499,2500,5,103,0,0,2500,
	2503,3,158,79,0,2501,2502,5,234,0,0,2502,2504,3,158,79,0,2503,2501,1,0,
	0,0,2503,2504,1,0,0,0,2504,2578,1,0,0,0,2505,2510,5,233,0,0,2506,2507,5,
	292,0,0,2507,2508,3,166,83,0,2508,2509,5,293,0,0,2509,2511,1,0,0,0,2510,
	2506,1,0,0,0,2510,2511,1,0,0,0,2511,2515,1,0,0,0,2512,2513,5,269,0,0,2513,
	2514,5,232,0,0,2514,2516,5,274,0,0,2515,2512,1,0,0,0,2515,2516,1,0,0,0,
	2516,2578,1,0,0,0,2517,2522,5,233,0,0,2518,2519,5,292,0,0,2519,2520,3,166,
	83,0,2520,2521,5,293,0,0,2521,2523,1,0,0,0,2522,2518,1,0,0,0,2522,2523,
	1,0,0,0,2523,2524,1,0,0,0,2524,2525,5,267,0,0,2525,2526,5,232,0,0,2526,
	2578,5,274,0,0,2527,2532,5,232,0,0,2528,2529,5,292,0,0,2529,2530,3,166,
	83,0,2530,2531,5,293,0,0,2531,2533,1,0,0,0,2532,2528,1,0,0,0,2532,2533,
	1,0,0,0,2533,2537,1,0,0,0,2534,2535,5,269,0,0,2535,2536,5,232,0,0,2536,
	2538,5,274,0,0,2537,2534,1,0,0,0,2537,2538,1,0,0,0,2538,2578,1,0,0,0,2539,
	2544,5,232,0,0,2540,2541,5,292,0,0,2541,2542,3,166,83,0,2542,2543,5,293,
	0,0,2543,2545,1,0,0,0,2544,2540,1,0,0,0,2544,2545,1,0,0,0,2545,2546,1,0,
	0,0,2546,2547,5,267,0,0,2547,2548,5,232,0,0,2548,2578,5,274,0,0,2549,2550,
	5,59,0,0,2550,2578,5,180,0,0,2551,2552,5,10,0,0,2552,2553,5,277,0,0,2553,
	2554,3,162,81,0,2554,2555,5,279,0,0,2555,2578,1,0,0,0,2556,2557,5,131,0,
	0,2557,2558,5,277,0,0,2558,2559,3,162,81,0,2559,2560,5,290,0,0,2560,2561,
	3,162,81,0,2561,2562,5,279,0,0,2562,2578,1,0,0,0,2563,2575,3,216,108,0,
	2564,2565,5,292,0,0,2565,2570,3,166,83,0,2566,2567,5,290,0,0,2567,2569,
	3,166,83,0,2568,2566,1,0,0,0,2569,2572,1,0,0,0,2570,2568,1,0,0,0,2570,2571,
	1,0,0,0,2571,2573,1,0,0,0,2572,2570,1,0,0,0,2573,2574,5,293,0,0,2574,2576,
	1,0,0,0,2575,2564,1,0,0,0,2575,2576,1,0,0,0,2576,2578,1,0,0,0,2577,2486,
	1,0,0,0,2577,2499,1,0,0,0,2577,2505,1,0,0,0,2577,2517,1,0,0,0,2577,2527,
	1,0,0,0,2577,2539,1,0,0,0,2577,2549,1,0,0,0,2577,2551,1,0,0,0,2577,2556,
	1,0,0,0,2577,2563,1,0,0,0,2578,2588,1,0,0,0,2579,2580,10,2,0,0,2580,2584,
	5,10,0,0,2581,2582,5,294,0,0,2582,2583,5,309,0,0,2583,2585,5,295,0,0,2584,
	2581,1,0,0,0,2584,2585,1,0,0,0,2585,2587,1,0,0,0,2586,2579,1,0,0,0,2587,
	2590,1,0,0,0,2588,2586,1,0,0,0,2588,2589,1,0,0,0,2589,163,1,0,0,0,2590,
	2588,1,0,0,0,2591,2596,3,162,81,0,2592,2593,3,216,108,0,2593,2594,3,162,
	81,0,2594,2596,1,0,0,0,2595,2591,1,0,0,0,2595,2592,1,0,0,0,2596,165,1,0,
	0,0,2597,2600,5,309,0,0,2598,2600,3,162,81,0,2599,2597,1,0,0,0,2599,2598,
	1,0,0,0,2600,167,1,0,0,0,2601,2602,5,264,0,0,2602,2603,3,114,57,0,2603,
	2604,5,230,0,0,2604,2605,3,114,57,0,2605,169,1,0,0,0,2606,2607,5,75,0,0,
	2607,2608,5,292,0,0,2608,2609,5,265,0,0,2609,2610,3,116,58,0,2610,2611,
	5,293,0,0,2611,171,1,0,0,0,2612,2613,5,264,0,0,2613,2616,5,133,0,0,2614,
	2615,5,8,0,0,2615,2617,3,114,57,0,2616,2614,1,0,0,0,2616,2617,1,0,0,0,2617,
	2618,1,0,0,0,2618,2619,5,230,0,0,2619,2620,5,251,0,0,2620,2621,5,215,0,
	0,2621,2622,3,216,108,0,2622,2623,5,275,0,0,2623,2631,3,114,57,0,2624,2625,
	5,290,0,0,2625,2626,3,216,108,0,2626,2627,5,275,0,0,2627,2628,3,114,57,
	0,2628,2630,1,0,0,0,2629,2624,1,0,0,0,2630,2633,1,0,0,0,2631,2629,1,0,0,
	0,2631,2632,1,0,0,0,2632,2677,1,0,0,0,2633,2631,1,0,0,0,2634,2635,5,264,
	0,0,2635,2638,5,133,0,0,2636,2637,5,8,0,0,2637,2639,3,114,57,0,2638,2636,
	1,0,0,0,2638,2639,1,0,0,0,2639,2640,1,0,0,0,2640,2641,5,230,0,0,2641,2677,
	5,51,0,0,2642,2643,5,264,0,0,2643,2644,5,150,0,0,2644,2647,5,133,0,0,2645,
	2646,5,8,0,0,2646,2648,3,114,57,0,2647,2645,1,0,0,0,2647,2648,1,0,0,0,2648,
	2649,1,0,0,0,2649,2650,5,230,0,0,2650,2662,5,101,0,0,2651,2652,5,292,0,
	0,2652,2657,3,216,108,0,2653,2654,5,290,0,0,2654,2656,3,216,108,0,2655,
	2653,1,0,0,0,2656,2659,1,0,0,0,2657,2655,1,0,0,0,2657,2658,1,0,0,0,2658,
	2660,1,0,0,0,2659,2657,1,0,0,0,2660,2661,5,293,0,0,2661,2663,1,0,0,0,2662,
	2651,1,0,0,0,2662,2663,1,0,0,0,2663,2664,1,0,0,0,2664,2665,5,260,0,0,2665,
	2666,5,292,0,0,2666,2671,3,114,57,0,2667,2668,5,290,0,0,2668,2670,3,114,
	57,0,2669,2667,1,0,0,0,2670,2673,1,0,0,0,2671,2669,1,0,0,0,2671,2672,1,
	0,0,0,2672,2674,1,0,0,0,2673,2671,1,0,0,0,2674,2675,5,293,0,0,2675,2677,
	1,0,0,0,2676,2612,1,0,0,0,2676,2634,1,0,0,0,2676,2642,1,0,0,0,2677,173,
	1,0,0,0,2678,2684,5,167,0,0,2679,2685,3,216,108,0,2680,2681,5,292,0,0,2681,
	2682,3,56,28,0,2682,2683,5,293,0,0,2683,2685,1,0,0,0,2684,2679,1,0,0,0,
	2684,2680,1,0,0,0,2685,175,1,0,0,0,2686,2687,5,137,0,0,2687,2692,3,82,41,
	0,2688,2689,5,290,0,0,2689,2691,3,82,41,0,2690,2688,1,0,0,0,2691,2694,1,
	0,0,0,2692,2690,1,0,0,0,2692,2693,1,0,0,0,2693,2696,1,0,0,0,2694,2692,1,
	0,0,0,2695,2686,1,0,0,0,2695,2696,1,0,0,0,2696,2697,1,0,0,0,2697,2701,3,
	178,89,0,2698,2699,5,4,0,0,2699,2700,5,132,0,0,2700,2702,3,88,44,0,2701,
	2698,1,0,0,0,2701,2702,1,0,0,0,2702,2704,1,0,0,0,2703,2705,7,16,0,0,2704,
	2703,1,0,0,0,2704,2705,1,0,0,0,2705,2711,1,0,0,0,2706,2707,5,174,0,0,2707,
	2708,5,292,0,0,2708,2709,3,182,91,0,2709,2710,5,293,0,0,2710,2712,1,0,0,
	0,2711,2706,1,0,0,0,2711,2712,1,0,0,0,2712,2722,1,0,0,0,2713,2714,5,222,
	0,0,2714,2719,3,90,45,0,2715,2716,5,290,0,0,2716,2718,3,90,45,0,2717,2715,
	1,0,0,0,2718,2721,1,0,0,0,2719,2717,1,0,0,0,2719,2720,1,0,0,0,2720,2723,
	1,0,0,0,2721,2719,1,0,0,0,2722,2713,1,0,0,0,2722,2723,1,0,0,0,2723,2733,
	1,0,0,0,2724,2725,5,56,0,0,2725,2730,3,92,46,0,2726,2727,5,290,0,0,2727,
	2729,3,92,46,0,2728,2726,1,0,0,0,2729,2732,1,0,0,0,2730,2728,1,0,0,0,2730,
	2731,1,0,0,0,2731,2734,1,0,0,0,2732,2730,1,0,0,0,2733,2724,1,0,0,0,2733,
	2734,1,0,0,0,2734,177,1,0,0,0,2735,2736,5,186,0,0,2736,2760,3,180,90,0,
	2737,2738,5,204,0,0,2738,2760,3,180,90,0,2739,2740,5,91,0,0,2740,2760,3,
	180,90,0,2741,2742,5,186,0,0,2742,2743,5,16,0,0,2743,2744,3,180,90,0,2744,
	2745,5,8,0,0,2745,2746,3,180,90,0,2746,2760,1,0,0,0,2747,2748,5,204,0,0,
	2748,2749,5,16,0,0,2749,2750,3,180,90,0,2750,2751,5,8,0,0,2751,2752,3,180,
	90,0,2752,2760,1,0,0,0,2753,2754,5,91,0,0,2754,2755,5,16,0,0,2755,2756,
	3,180,90,0,2756,2757,5,8,0,0,2757,2758,3,180,90,0,2758,2760,1,0,0,0,2759,
	2735,1,0,0,0,2759,2737,1,0,0,0,2759,2739,1,0,0,0,2759,2741,1,0,0,0,2759,
	2747,1,0,0,0,2759,2753,1,0,0,0,2760,179,1,0,0,0,2761,2762,5,243,0,0,2762,
	2771,5,179,0,0,2763,2764,5,243,0,0,2764,2771,5,78,0,0,2765,2766,5,36,0,
	0,2766,2771,5,203,0,0,2767,2768,3,114,57,0,2768,2769,7,30,0,0,2769,2771,
	1,0,0,0,2770,2761,1,0,0,0,2770,2763,1,0,0,0,2770,2765,1,0,0,0,2770,2767,
	1,0,0,0,2771,181,1,0,0,0,2772,2773,6,91,-1,0,2773,2775,3,184,92,0,2774,
	2776,3,186,93,0,2775,2774,1,0,0,0,2775,2776,1,0,0,0,2776,2784,1,0,0,0,2777,
	2778,10,2,0,0,2778,2783,3,182,91,3,2779,2780,10,1,0,0,2780,2781,5,303,0,
	0,2781,2783,3,182,91,2,2782,2777,1,0,0,0,2782,2779,1,0,0,0,2783,2786,1,
	0,0,0,2784,2782,1,0,0,0,2784,2785,1,0,0,0,2785,183,1,0,0,0,2786,2784,1,
	0,0,0,2787,2813,3,216,108,0,2788,2789,5,292,0,0,2789,2813,5,293,0,0,2790,
	2791,5,177,0,0,2791,2792,5,292,0,0,2792,2797,3,182,91,0,2793,2794,5,290,
	0,0,2794,2796,3,182,91,0,2795,2793,1,0,0,0,2796,2799,1,0,0,0,2797,2795,
	1,0,0,0,2797,2798,1,0,0,0,2798,2800,1,0,0,0,2799,2797,1,0,0,0,2800,2801,
	5,293,0,0,2801,2813,1,0,0,0,2802,2803,5,292,0,0,2803,2804,3,182,91,0,2804,
	2805,5,293,0,0,2805,2813,1,0,0,0,2806,2813,5,305,0,0,2807,2813,5,304,0,
	0,2808,2809,5,298,0,0,2809,2810,3,182,91,0,2810,2811,5,299,0,0,2811,2813,
	1,0,0,0,2812,2787,1,0,0,0,2812,2788,1,0,0,0,2812,2790,1,0,0,0,2812,2802,
	1,0,0,0,2812,2806,1,0,0,0,2812,2807,1,0,0,0,2812,2808,1,0,0,0,2813,185,
	1,0,0,0,2814,2816,5,283,0,0,2815,2817,5,287,0,0,2816,2815,1,0,0,0,2816,
	2817,1,0,0,0,2817,2845,1,0,0,0,2818,2820,5,281,0,0,2819,2821,5,287,0,0,
	2820,2819,1,0,0,0,2820,2821,1,0,0,0,2821,2845,1,0,0,0,2822,2824,5,287,0,
	0,2823,2825,5,287,0,0,2824,2823,1,0,0,0,2824,2825,1,0,0,0,2825,2845,1,0,
	0,0,2826,2827,5,296,0,0,2827,2828,5,309,0,0,2828,2830,5,297,0,0,2829,2831,
	5,287,0,0,2830,2829,1,0,0,0,2830,2831,1,0,0,0,2831,2845,1,0,0,0,2832,2834,
	5,296,0,0,2833,2835,5,309,0,0,2834,2833,1,0,0,0,2834,2835,1,0,0,0,2835,
	2836,1,0,0,0,2836,2838,5,290,0,0,2837,2839,5,309,0,0,2838,2837,1,0,0,0,
	2838,2839,1,0,0,0,2839,2840,1,0,0,0,2840,2842,5,297,0,0,2841,2843,5,287,
	0,0,2842,2841,1,0,0,0,2842,2843,1,0,0,0,2843,2845,1,0,0,0,2844,2814,1,0,
	0,0,2844,2818,1,0,0,0,2844,2822,1,0,0,0,2844,2826,1,0,0,0,2844,2832,1,0,
	0,0,2845,187,1,0,0,0,2846,2847,3,216,108,0,2847,2848,5,275,0,0,2848,2849,
	3,114,57,0,2849,189,1,0,0,0,2850,2851,5,80,0,0,2851,2855,7,31,0,0,2852,
	2853,5,241,0,0,2853,2855,7,32,0,0,2854,2850,1,0,0,0,2854,2852,1,0,0,0,2855,
	191,1,0,0,0,2856,2857,5,108,0,0,2857,2858,5,123,0,0,2858,2862,3,194,97,
	0,2859,2860,5,187,0,0,2860,2862,7,33,0,0,2861,2856,1,0,0,0,2861,2859,1,
	0,0,0,2862,193,1,0,0,0,2863,2864,5,187,0,0,2864,2871,5,244,0,0,2865,2866,
	5,187,0,0,2866,2871,5,28,0,0,2867,2868,5,191,0,0,2868,2871,5,187,0,0,2869,
	2871,5,213,0,0,2870,2863,1,0,0,0,2870,2865,1,0,0,0,2870,2867,1,0,0,0,2870,
	2869,1,0,0,0,2871,195,1,0,0,0,2872,2878,3,114,57,0,2873,2874,3,216,108,
	0,2874,2875,5,302,0,0,2875,2876,3,114,57,0,2876,2878,1,0,0,0,2877,2872,
	1,0,0,0,2877,2873,1,0,0,0,2878,197,1,0,0,0,2879,2880,3,216,108,0,2880,2881,
	5,288,0,0,2881,2882,3,216,108,0,2882,2885,1,0,0,0,2883,2885,3,216,108,0,
	2884,2879,1,0,0,0,2884,2883,1,0,0,0,2885,199,1,0,0,0,2886,2891,3,198,99,
	0,2887,2888,5,290,0,0,2888,2890,3,198,99,0,2889,2887,1,0,0,0,2890,2893,
	1,0,0,0,2891,2889,1,0,0,0,2891,2892,1,0,0,0,2892,201,1,0,0,0,2893,2891,
	1,0,0,0,2894,2895,7,34,0,0,2895,203,1,0,0,0,2896,2901,3,216,108,0,2897,
	2898,5,288,0,0,2898,2900,3,216,108,0,2899,2897,1,0,0,0,2900,2903,1,0,0,
	0,2901,2899,1,0,0,0,2901,2902,1,0,0,0,2902,205,1,0,0,0,2903,2901,1,0,0,
	0,2904,2905,5,79,0,0,2905,2906,3,208,104,0,2906,2907,5,11,0,0,2907,2908,
	5,157,0,0,2908,2909,3,120,60,0,2909,207,1,0,0,0,2910,2911,7,35,0,0,2911,
	209,1,0,0,0,2912,2916,3,212,106,0,2913,2916,5,44,0,0,2914,2916,5,40,0,0,
	2915,2912,1,0,0,0,2915,2913,1,0,0,0,2915,2914,1,0,0,0,2916,211,1,0,0,0,
	2917,2923,3,216,108,0,2918,2919,5,253,0,0,2919,2923,3,216,108,0,2920,2921,
	5,199,0,0,2921,2923,3,216,108,0,2922,2917,1,0,0,0,2922,2918,1,0,0,0,2922,
	2920,1,0,0,0,2923,213,1,0,0,0,2924,2929,3,216,108,0,2925,2926,5,290,0,0,
	2926,2928,3,216,108,0,2927,2925,1,0,0,0,2928,2931,1,0,0,0,2929,2927,1,0,
	0,0,2929,2930,1,0,0,0,2930,215,1,0,0,0,2931,2929,1,0,0,0,2932,2938,5,312,
	0,0,2933,2938,5,314,0,0,2934,2938,3,220,110,0,2935,2938,5,315,0,0,2936,
	2938,5,313,0,0,2937,2932,1,0,0,0,2937,2933,1,0,0,0,2937,2934,1,0,0,0,2937,
	2935,1,0,0,0,2937,2936,1,0,0,0,2938,217,1,0,0,0,2939,2941,5,282,0,0,2940,
	2939,1,0,0,0,2940,2941,1,0,0,0,2941,2942,1,0,0,0,2942,2952,5,310,0,0,2943,
	2945,5,282,0,0,2944,2943,1,0,0,0,2944,2945,1,0,0,0,2945,2946,1,0,0,0,2946,
	2952,5,311,0,0,2947,2949,5,282,0,0,2948,2947,1,0,0,0,2948,2949,1,0,0,0,
	2949,2950,1,0,0,0,2950,2952,5,309,0,0,2951,2940,1,0,0,0,2951,2944,1,0,0,
	0,2951,2948,1,0,0,0,2952,219,1,0,0,0,2953,2954,7,36,0,0,2954,221,1,0,0,
	0,396,225,236,238,268,273,277,283,287,308,312,316,320,328,332,335,342,351,
	357,361,367,374,383,395,404,413,419,430,438,446,453,463,470,478,514,517,
	520,524,530,535,542,548,552,556,564,570,574,588,596,615,640,643,653,657,
	664,674,680,685,689,695,704,710,714,721,725,733,738,742,750,758,763,767,
	777,784,789,793,803,806,815,820,826,850,856,858,864,870,872,880,882,888,
	894,896,911,916,923,935,937,945,947,965,968,972,976,994,997,1013,1023,1028,
	1034,1037,1046,1048,1051,1057,1064,1069,1075,1079,1083,1089,1100,1109,1119,
	1122,1127,1129,1136,1142,1144,1148,1158,1164,1167,1169,1181,1188,1192,1196,
	1200,1207,1216,1219,1223,1228,1232,1240,1243,1246,1253,1264,1267,1277,1280,
	1291,1296,1304,1307,1311,1320,1329,1332,1341,1344,1347,1351,1362,1365,1372,
	1375,1394,1398,1402,1406,1408,1419,1424,1433,1442,1445,1460,1463,1472,1475,
	1483,1486,1489,1494,1497,1509,1512,1520,1525,1529,1531,1533,1548,1550,1561,
	1568,1571,1576,1586,1597,1601,1603,1611,1618,1631,1637,1653,1662,1665,1673,
	1676,1683,1688,1699,1702,1706,1708,1716,1726,1732,1734,1741,1745,1747,1754,
	1758,1760,1762,1771,1782,1786,1796,1806,1810,1818,1820,1833,1841,1850,1856,
	1864,1870,1874,1879,1884,1890,1904,1906,1936,1947,1955,1960,1965,1978,1984,
	1991,1996,1999,2002,2007,2014,2017,2026,2029,2033,2036,2039,2054,2057,2076,
	2080,2088,2092,2117,2120,2129,2135,2141,2147,2156,2159,2162,2181,2190,2212,
	2215,2225,2234,2240,2246,2257,2259,2264,2271,2273,2279,2285,2296,2305,2310,
	2315,2317,2319,2325,2327,2337,2346,2348,2354,2356,2359,2369,2371,2383,2386,
	2391,2396,2408,2412,2416,2419,2421,2427,2430,2440,2448,2454,2456,2464,2474,
	2480,2494,2503,2510,2515,2522,2532,2537,2544,2570,2575,2577,2584,2588,2595,
	2599,2616,2631,2638,2647,2657,2662,2671,2676,2684,2692,2695,2701,2704,2711,
	2719,2722,2730,2733,2759,2770,2775,2782,2784,2797,2812,2816,2820,2824,2830,
	2834,2838,2842,2844,2854,2861,2870,2877,2884,2891,2901,2915,2922,2929,2937,
	2940,2944,2948,2951];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!trinoSqlParser.__ATN) {
			trinoSqlParser.__ATN = new ATNDeserializer().deserialize(trinoSqlParser._serializedATN);
		}

		return trinoSqlParser.__ATN;
	}


	static DecisionsToDFA = trinoSqlParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(trinoSqlParser.EOF, 0);
	}
	public statements_list(): StatementsContext[] {
		return this.getTypedRuleContexts(StatementsContext) as StatementsContext[];
	}
	public statements(i: number): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, i) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_program;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public singleStatement(): SingleStatementContext {
		return this.getTypedRuleContext(SingleStatementContext, 0) as SingleStatementContext;
	}
	public standaloneExpression(): StandaloneExpressionContext {
		return this.getTypedRuleContext(StandaloneExpressionContext, 0) as StandaloneExpressionContext;
	}
	public standalonePathSpecification(): StandalonePathSpecificationContext {
		return this.getTypedRuleContext(StandalonePathSpecificationContext, 0) as StandalonePathSpecificationContext;
	}
	public standaloneType(): StandaloneTypeContext {
		return this.getTypedRuleContext(StandaloneTypeContext, 0) as StandaloneTypeContext;
	}
	public standaloneRowPattern(): StandaloneRowPatternContext {
		return this.getTypedRuleContext(StandaloneRowPatternContext, 0) as StandaloneRowPatternContext;
	}
	public SEMICOLON_(): TerminalNode {
		return this.getToken(trinoSqlParser.SEMICOLON_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_statements;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterStatements) {
	 		listener.enterStatements(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitStatements) {
	 		listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleStatementContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public SEMICOLON_(): TerminalNode {
		return this.getToken(trinoSqlParser.SEMICOLON_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_singleStatement;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSingleStatement) {
	 		listener.enterSingleStatement(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSingleStatement) {
	 		listener.exitSingleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSingleStatement) {
			return visitor.visitSingleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StandaloneExpressionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMICOLON_(): TerminalNode {
		return this.getToken(trinoSqlParser.SEMICOLON_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_standaloneExpression;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterStandaloneExpression) {
	 		listener.enterStandaloneExpression(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitStandaloneExpression) {
	 		listener.exitStandaloneExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitStandaloneExpression) {
			return visitor.visitStandaloneExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StandalonePathSpecificationContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pathSpecification(): PathSpecificationContext {
		return this.getTypedRuleContext(PathSpecificationContext, 0) as PathSpecificationContext;
	}
	public SEMICOLON_(): TerminalNode {
		return this.getToken(trinoSqlParser.SEMICOLON_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_standalonePathSpecification;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterStandalonePathSpecification) {
	 		listener.enterStandalonePathSpecification(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitStandalonePathSpecification) {
	 		listener.exitStandalonePathSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitStandalonePathSpecification) {
			return visitor.visitStandalonePathSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StandaloneTypeContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public SEMICOLON_(): TerminalNode {
		return this.getToken(trinoSqlParser.SEMICOLON_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_standaloneType;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterStandaloneType) {
	 		listener.enterStandaloneType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitStandaloneType) {
	 		listener.exitStandaloneType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitStandaloneType) {
			return visitor.visitStandaloneType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StandaloneRowPatternContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public rowPattern(): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, 0) as RowPatternContext;
	}
	public SEMICOLON_(): TerminalNode {
		return this.getToken(trinoSqlParser.SEMICOLON_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_standaloneRowPattern;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterStandaloneRowPattern) {
	 		listener.enterStandaloneRowPattern(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitStandaloneRowPattern) {
	 		listener.exitStandaloneRowPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitStandaloneRowPattern) {
			return visitor.visitStandaloneRowPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_statement;
	}
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ExplainContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXPLAIN_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXPLAIN_, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public explainOption_list(): ExplainOptionContext[] {
		return this.getTypedRuleContexts(ExplainOptionContext) as ExplainOptionContext[];
	}
	public explainOption(i: number): ExplainOptionContext {
		return this.getTypedRuleContext(ExplainOptionContext, i) as ExplainOptionContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterExplain) {
	 		listener.enterExplain(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitExplain) {
	 		listener.exitExplain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitExplain) {
			return visitor.visitExplain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrepareContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PREPARE_(): TerminalNode {
		return this.getToken(trinoSqlParser.PREPARE_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public FROM_(): TerminalNode {
		return this.getToken(trinoSqlParser.FROM_, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPrepare) {
	 		listener.enterPrepare(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPrepare) {
	 		listener.exitPrepare(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPrepare) {
			return visitor.visitPrepare(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropMaterializedViewContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP_(): TerminalNode {
		return this.getToken(trinoSqlParser.DROP_, 0);
	}
	public MATERIALIZED_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATERIALIZED_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(trinoSqlParser.VIEW_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IF_(): TerminalNode {
		return this.getToken(trinoSqlParser.IF_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXISTS_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDropMaterializedView) {
	 		listener.enterDropMaterializedView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDropMaterializedView) {
	 		listener.exitDropMaterializedView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDropMaterializedView) {
			return visitor.visitDropMaterializedView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetMaterializedViewPropertiesContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALTER_, 0);
	}
	public MATERIALIZED_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATERIALIZED_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(trinoSqlParser.VIEW_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public SET_(): TerminalNode {
		return this.getToken(trinoSqlParser.SET_, 0);
	}
	public PROPERTIES_(): TerminalNode {
		return this.getToken(trinoSqlParser.PROPERTIES_, 0);
	}
	public propertyAssignments(): PropertyAssignmentsContext {
		return this.getTypedRuleContext(PropertyAssignmentsContext, 0) as PropertyAssignmentsContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetMaterializedViewProperties) {
	 		listener.enterSetMaterializedViewProperties(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetMaterializedViewProperties) {
	 		listener.exitSetMaterializedViewProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetMaterializedViewProperties) {
			return visitor.visitSetMaterializedViewProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UseContext extends StatementContext {
	public _schema!: IdentifierContext;
	public _catalog!: IdentifierContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public USE_(): TerminalNode {
		return this.getToken(trinoSqlParser.USE_, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public DOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.DOT_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUse) {
	 		listener.enterUse(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUse) {
	 		listener.exitUse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUse) {
			return visitor.visitUse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeallocateContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DEALLOCATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.DEALLOCATE_, 0);
	}
	public PREPARE_(): TerminalNode {
		return this.getToken(trinoSqlParser.PREPARE_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDeallocate) {
	 		listener.enterDeallocate(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDeallocate) {
	 		listener.exitDeallocate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDeallocate) {
			return visitor.visitDeallocate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameTableContext extends StatementContext {
	public _from_!: QualifiedNameContext;
	public _to!: QualifiedNameContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALTER_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public RENAME_(): TerminalNode {
		return this.getToken(trinoSqlParser.RENAME_, 0);
	}
	public TO_(): TerminalNode {
		return this.getToken(trinoSqlParser.TO_, 0);
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public IF_(): TerminalNode {
		return this.getToken(trinoSqlParser.IF_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXISTS_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRenameTable) {
	 		listener.enterRenameTable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRenameTable) {
	 		listener.exitRenameTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRenameTable) {
			return visitor.visitRenameTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommitContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMIT_(): TerminalNode {
		return this.getToken(trinoSqlParser.COMMIT_, 0);
	}
	public WORK_(): TerminalNode {
		return this.getToken(trinoSqlParser.WORK_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCommit) {
	 		listener.enterCommit(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCommit) {
	 		listener.exitCommit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCommit) {
			return visitor.visitCommit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateRoleContext extends StatementContext {
	public _name!: IdentifierContext;
	public _catalog!: IdentifierContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CREATE_, 0);
	}
	public ROLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROLE_, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public WITH_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITH_, 0);
	}
	public ADMIN_(): TerminalNode {
		return this.getToken(trinoSqlParser.ADMIN_, 0);
	}
	public grantor(): GrantorContext {
		return this.getTypedRuleContext(GrantorContext, 0) as GrantorContext;
	}
	public IN_(): TerminalNode {
		return this.getToken(trinoSqlParser.IN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCreateRole) {
	 		listener.enterCreateRole(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCreateRole) {
	 		listener.exitCreateRole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateRole) {
			return visitor.visitCreateRole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropColumnContext extends StatementContext {
	public _tableName!: QualifiedNameContext;
	public _column!: QualifiedNameContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALTER_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public DROP_(): TerminalNode {
		return this.getToken(trinoSqlParser.DROP_, 0);
	}
	public COLUMN_(): TerminalNode {
		return this.getToken(trinoSqlParser.COLUMN_, 0);
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public IF__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.IF_);
	}
	public IF_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.IF_, i);
	}
	public EXISTS__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.EXISTS_);
	}
	public EXISTS_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.EXISTS_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDropColumn) {
	 		listener.enterDropColumn(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDropColumn) {
	 		listener.exitDropColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDropColumn) {
			return visitor.visitDropColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropViewContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP_(): TerminalNode {
		return this.getToken(trinoSqlParser.DROP_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(trinoSqlParser.VIEW_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IF_(): TerminalNode {
		return this.getToken(trinoSqlParser.IF_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXISTS_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDropView) {
	 		listener.enterDropView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDropView) {
	 		listener.exitDropView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDropView) {
			return visitor.visitDropView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowTablesContext extends StatementContext {
	public _pattern!: String_Context;
	public _escape!: String_Context;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.SHOW_, 0);
	}
	public TABLES_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLES_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public LIKE_(): TerminalNode {
		return this.getToken(trinoSqlParser.LIKE_, 0);
	}
	public FROM_(): TerminalNode {
		return this.getToken(trinoSqlParser.FROM_, 0);
	}
	public IN_(): TerminalNode {
		return this.getToken(trinoSqlParser.IN_, 0);
	}
	public string__list(): String_Context[] {
		return this.getTypedRuleContexts(String_Context) as String_Context[];
	}
	public string_(i: number): String_Context {
		return this.getTypedRuleContext(String_Context, i) as String_Context;
	}
	public ESCAPE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ESCAPE_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowTables) {
	 		listener.enterShowTables(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowTables) {
	 		listener.exitShowTables(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowTables) {
			return visitor.visitShowTables(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetViewAuthorizationContext extends StatementContext {
	public _from_!: QualifiedNameContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALTER_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(trinoSqlParser.VIEW_, 0);
	}
	public SET_(): TerminalNode {
		return this.getToken(trinoSqlParser.SET_, 0);
	}
	public AUTHORIZATION_(): TerminalNode {
		return this.getToken(trinoSqlParser.AUTHORIZATION_, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetViewAuthorization) {
	 		listener.enterSetViewAuthorization(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetViewAuthorization) {
	 		listener.exitSetViewAuthorization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetViewAuthorization) {
			return visitor.visitSetViewAuthorization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCatalogsContext extends StatementContext {
	public _pattern!: String_Context;
	public _escape!: String_Context;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.SHOW_, 0);
	}
	public CATALOGS_(): TerminalNode {
		return this.getToken(trinoSqlParser.CATALOGS_, 0);
	}
	public LIKE_(): TerminalNode {
		return this.getToken(trinoSqlParser.LIKE_, 0);
	}
	public string__list(): String_Context[] {
		return this.getTypedRuleContexts(String_Context) as String_Context[];
	}
	public string_(i: number): String_Context {
		return this.getTypedRuleContext(String_Context, i) as String_Context;
	}
	public ESCAPE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ESCAPE_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowCatalogs) {
	 		listener.enterShowCatalogs(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowCatalogs) {
	 		listener.exitShowCatalogs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowCatalogs) {
			return visitor.visitShowCatalogs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowRolesContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.SHOW_, 0);
	}
	public ROLES_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROLES_, 0);
	}
	public CURRENT_(): TerminalNode {
		return this.getToken(trinoSqlParser.CURRENT_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public FROM_(): TerminalNode {
		return this.getToken(trinoSqlParser.FROM_, 0);
	}
	public IN_(): TerminalNode {
		return this.getToken(trinoSqlParser.IN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowRoles) {
	 		listener.enterShowRoles(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowRoles) {
	 		listener.exitShowRoles(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowRoles) {
			return visitor.visitShowRoles(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MergeContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MERGE_(): TerminalNode {
		return this.getToken(trinoSqlParser.MERGE_, 0);
	}
	public INTO_(): TerminalNode {
		return this.getToken(trinoSqlParser.INTO_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public USING_(): TerminalNode {
		return this.getToken(trinoSqlParser.USING_, 0);
	}
	public relation(): RelationContext {
		return this.getTypedRuleContext(RelationContext, 0) as RelationContext;
	}
	public ON_(): TerminalNode {
		return this.getToken(trinoSqlParser.ON_, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public mergeCase_list(): MergeCaseContext[] {
		return this.getTypedRuleContexts(MergeCaseContext) as MergeCaseContext[];
	}
	public mergeCase(i: number): MergeCaseContext {
		return this.getTypedRuleContext(MergeCaseContext, i) as MergeCaseContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterMerge) {
	 		listener.enterMerge(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitMerge) {
	 		listener.exitMerge(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitMerge) {
			return visitor.visitMerge(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameColumnContext extends StatementContext {
	public _tableName!: QualifiedNameContext;
	public _from_!: IdentifierContext;
	public _to!: IdentifierContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALTER_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public RENAME_(): TerminalNode {
		return this.getToken(trinoSqlParser.RENAME_, 0);
	}
	public COLUMN_(): TerminalNode {
		return this.getToken(trinoSqlParser.COLUMN_, 0);
	}
	public TO_(): TerminalNode {
		return this.getToken(trinoSqlParser.TO_, 0);
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
	public IF__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.IF_);
	}
	public IF_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.IF_, i);
	}
	public EXISTS__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.EXISTS_);
	}
	public EXISTS_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.EXISTS_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRenameColumn) {
	 		listener.enterRenameColumn(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRenameColumn) {
	 		listener.exitRenameColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRenameColumn) {
			return visitor.visitRenameColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommentColumnContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMENT_(): TerminalNode {
		return this.getToken(trinoSqlParser.COMMENT_, 0);
	}
	public ON_(): TerminalNode {
		return this.getToken(trinoSqlParser.ON_, 0);
	}
	public COLUMN_(): TerminalNode {
		return this.getToken(trinoSqlParser.COLUMN_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IS_(): TerminalNode {
		return this.getToken(trinoSqlParser.IS_, 0);
	}
	public string_(): String_Context {
		return this.getTypedRuleContext(String_Context, 0) as String_Context;
	}
	public NULL_(): TerminalNode {
		return this.getToken(trinoSqlParser.NULL_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCommentColumn) {
	 		listener.enterCommentColumn(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCommentColumn) {
	 		listener.exitCommentColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCommentColumn) {
			return visitor.visitCommentColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RevokeRolesContext extends StatementContext {
	public _catalog!: IdentifierContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REVOKE_(): TerminalNode {
		return this.getToken(trinoSqlParser.REVOKE_, 0);
	}
	public roles(): RolesContext {
		return this.getTypedRuleContext(RolesContext, 0) as RolesContext;
	}
	public FROM_(): TerminalNode {
		return this.getToken(trinoSqlParser.FROM_, 0);
	}
	public principal_list(): PrincipalContext[] {
		return this.getTypedRuleContexts(PrincipalContext) as PrincipalContext[];
	}
	public principal(i: number): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, i) as PrincipalContext;
	}
	public ADMIN_(): TerminalNode {
		return this.getToken(trinoSqlParser.ADMIN_, 0);
	}
	public OPTION_(): TerminalNode {
		return this.getToken(trinoSqlParser.OPTION_, 0);
	}
	public FOR_(): TerminalNode {
		return this.getToken(trinoSqlParser.FOR_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public GRANTED_(): TerminalNode {
		return this.getToken(trinoSqlParser.GRANTED_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(trinoSqlParser.BY_, 0);
	}
	public grantor(): GrantorContext {
		return this.getTypedRuleContext(GrantorContext, 0) as GrantorContext;
	}
	public IN_(): TerminalNode {
		return this.getToken(trinoSqlParser.IN_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRevokeRoles) {
	 		listener.enterRevokeRoles(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRevokeRoles) {
	 		listener.exitRevokeRoles(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRevokeRoles) {
			return visitor.visitRevokeRoles(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCreateTableContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.SHOW_, 0);
	}
	public CREATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CREATE_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowCreateTable) {
	 		listener.enterShowCreateTable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowCreateTable) {
	 		listener.exitShowCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowCreateTable) {
			return visitor.visitShowCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowColumnsContext extends StatementContext {
	public _pattern!: String_Context;
	public _escape!: String_Context;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.SHOW_, 0);
	}
	public COLUMNS_(): TerminalNode {
		return this.getToken(trinoSqlParser.COLUMNS_, 0);
	}
	public FROM_(): TerminalNode {
		return this.getToken(trinoSqlParser.FROM_, 0);
	}
	public IN_(): TerminalNode {
		return this.getToken(trinoSqlParser.IN_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public LIKE_(): TerminalNode {
		return this.getToken(trinoSqlParser.LIKE_, 0);
	}
	public string__list(): String_Context[] {
		return this.getTypedRuleContexts(String_Context) as String_Context[];
	}
	public string_(i: number): String_Context {
		return this.getTypedRuleContext(String_Context, i) as String_Context;
	}
	public ESCAPE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ESCAPE_, 0);
	}
	public DESCRIBE_(): TerminalNode {
		return this.getToken(trinoSqlParser.DESCRIBE_, 0);
	}
	public DESC_(): TerminalNode {
		return this.getToken(trinoSqlParser.DESC_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowColumns) {
	 		listener.enterShowColumns(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowColumns) {
	 		listener.exitShowColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowColumns) {
			return visitor.visitShowColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowRoleGrantsContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.SHOW_, 0);
	}
	public ROLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROLE_, 0);
	}
	public GRANTS_(): TerminalNode {
		return this.getToken(trinoSqlParser.GRANTS_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public FROM_(): TerminalNode {
		return this.getToken(trinoSqlParser.FROM_, 0);
	}
	public IN_(): TerminalNode {
		return this.getToken(trinoSqlParser.IN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowRoleGrants) {
	 		listener.enterShowRoleGrants(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowRoleGrants) {
	 		listener.exitShowRoleGrants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowRoleGrants) {
			return visitor.visitShowRoleGrants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddColumnContext extends StatementContext {
	public _tableName!: QualifiedNameContext;
	public _column!: ColumnDefinitionContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALTER_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public ADD_(): TerminalNode {
		return this.getToken(trinoSqlParser.ADD_, 0);
	}
	public COLUMN_(): TerminalNode {
		return this.getToken(trinoSqlParser.COLUMN_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public columnDefinition(): ColumnDefinitionContext {
		return this.getTypedRuleContext(ColumnDefinitionContext, 0) as ColumnDefinitionContext;
	}
	public IF__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.IF_);
	}
	public IF_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.IF_, i);
	}
	public EXISTS__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.EXISTS_);
	}
	public EXISTS_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.EXISTS_, i);
	}
	public NOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.NOT_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterAddColumn) {
	 		listener.enterAddColumn(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitAddColumn) {
	 		listener.exitAddColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitAddColumn) {
			return visitor.visitAddColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DenyContext extends StatementContext {
	public _grantee!: PrincipalContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DENY_(): TerminalNode {
		return this.getToken(trinoSqlParser.DENY_, 0);
	}
	public ON_(): TerminalNode {
		return this.getToken(trinoSqlParser.ON_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public TO_(): TerminalNode {
		return this.getToken(trinoSqlParser.TO_, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public privilege_list(): PrivilegeContext[] {
		return this.getTypedRuleContexts(PrivilegeContext) as PrivilegeContext[];
	}
	public privilege(i: number): PrivilegeContext {
		return this.getTypedRuleContext(PrivilegeContext, i) as PrivilegeContext;
	}
	public ALL_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALL_, 0);
	}
	public PRIVILEGES_(): TerminalNode {
		return this.getToken(trinoSqlParser.PRIVILEGES_, 0);
	}
	public SCHEMA_(): TerminalNode {
		return this.getToken(trinoSqlParser.SCHEMA_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDeny) {
	 		listener.enterDeny(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDeny) {
	 		listener.exitDeny(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDeny) {
			return visitor.visitDeny(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ResetSessionContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RESET_(): TerminalNode {
		return this.getToken(trinoSqlParser.RESET_, 0);
	}
	public SESSION_(): TerminalNode {
		return this.getToken(trinoSqlParser.SESSION_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterResetSession) {
	 		listener.enterResetSession(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitResetSession) {
	 		listener.exitResetSession(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitResetSession) {
			return visitor.visitResetSession(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InsertIntoContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INSERT_(): TerminalNode {
		return this.getToken(trinoSqlParser.INSERT_, 0);
	}
	public INTO_(): TerminalNode {
		return this.getToken(trinoSqlParser.INTO_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterInsertInto) {
	 		listener.enterInsertInto(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitInsertInto) {
	 		listener.exitInsertInto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitInsertInto) {
			return visitor.visitInsertInto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowSessionContext extends StatementContext {
	public _pattern!: String_Context;
	public _escape!: String_Context;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.SHOW_, 0);
	}
	public SESSION_(): TerminalNode {
		return this.getToken(trinoSqlParser.SESSION_, 0);
	}
	public LIKE_(): TerminalNode {
		return this.getToken(trinoSqlParser.LIKE_, 0);
	}
	public string__list(): String_Context[] {
		return this.getTypedRuleContexts(String_Context) as String_Context[];
	}
	public string_(i: number): String_Context {
		return this.getTypedRuleContext(String_Context, i) as String_Context;
	}
	public ESCAPE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ESCAPE_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowSession) {
	 		listener.enterShowSession(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowSession) {
	 		listener.exitShowSession(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowSession) {
			return visitor.visitShowSession(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateSchemaContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CREATE_, 0);
	}
	public SCHEMA_(): TerminalNode {
		return this.getToken(trinoSqlParser.SCHEMA_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IF_(): TerminalNode {
		return this.getToken(trinoSqlParser.IF_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.NOT_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXISTS_, 0);
	}
	public AUTHORIZATION_(): TerminalNode {
		return this.getToken(trinoSqlParser.AUTHORIZATION_, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public WITH_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITH_, 0);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCreateSchema) {
	 		listener.enterCreateSchema(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCreateSchema) {
	 		listener.exitCreateSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateSchema) {
			return visitor.visitCreateSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExplainAnalyzeContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXPLAIN_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXPLAIN_, 0);
	}
	public ANALYZE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ANALYZE_, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public VERBOSE_(): TerminalNode {
		return this.getToken(trinoSqlParser.VERBOSE_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterExplainAnalyze) {
	 		listener.enterExplainAnalyze(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitExplainAnalyze) {
	 		listener.exitExplainAnalyze(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitExplainAnalyze) {
			return visitor.visitExplainAnalyze(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecuteContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXECUTE_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXECUTE_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public USING_(): TerminalNode {
		return this.getToken(trinoSqlParser.USING_, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterExecute) {
	 		listener.enterExecute(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitExecute) {
	 		listener.exitExecute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitExecute) {
			return visitor.visitExecute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameSchemaContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALTER_, 0);
	}
	public SCHEMA_(): TerminalNode {
		return this.getToken(trinoSqlParser.SCHEMA_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public RENAME_(): TerminalNode {
		return this.getToken(trinoSqlParser.RENAME_, 0);
	}
	public TO_(): TerminalNode {
		return this.getToken(trinoSqlParser.TO_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRenameSchema) {
	 		listener.enterRenameSchema(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRenameSchema) {
	 		listener.exitRenameSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRenameSchema) {
			return visitor.visitRenameSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropRoleContext extends StatementContext {
	public _name!: IdentifierContext;
	public _catalog!: IdentifierContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP_(): TerminalNode {
		return this.getToken(trinoSqlParser.DROP_, 0);
	}
	public ROLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROLE_, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public IN_(): TerminalNode {
		return this.getToken(trinoSqlParser.IN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDropRole) {
	 		listener.enterDropRole(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDropRole) {
	 		listener.exitDropRole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDropRole) {
			return visitor.visitDropRole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AnalyzeContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ANALYZE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ANALYZE_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public WITH_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITH_, 0);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterAnalyze) {
	 		listener.enterAnalyze(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitAnalyze) {
	 		listener.exitAnalyze(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitAnalyze) {
			return visitor.visitAnalyze(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetRoleContext extends StatementContext {
	public _role!: IdentifierContext;
	public _catalog!: IdentifierContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SET_(): TerminalNode {
		return this.getToken(trinoSqlParser.SET_, 0);
	}
	public ROLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROLE_, 0);
	}
	public ALL_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALL_, 0);
	}
	public NONE_(): TerminalNode {
		return this.getToken(trinoSqlParser.NONE_, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public IN_(): TerminalNode {
		return this.getToken(trinoSqlParser.IN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetRole) {
	 		listener.enterSetRole(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetRole) {
	 		listener.exitSetRole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetRole) {
			return visitor.visitSetRole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowGrantsContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.SHOW_, 0);
	}
	public GRANTS_(): TerminalNode {
		return this.getToken(trinoSqlParser.GRANTS_, 0);
	}
	public ON_(): TerminalNode {
		return this.getToken(trinoSqlParser.ON_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowGrants) {
	 		listener.enterShowGrants(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowGrants) {
	 		listener.exitShowGrants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowGrants) {
			return visitor.visitShowGrants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropSchemaContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP_(): TerminalNode {
		return this.getToken(trinoSqlParser.DROP_, 0);
	}
	public SCHEMA_(): TerminalNode {
		return this.getToken(trinoSqlParser.SCHEMA_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IF_(): TerminalNode {
		return this.getToken(trinoSqlParser.IF_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXISTS_, 0);
	}
	public CASCADE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CASCADE_, 0);
	}
	public RESTRICT_(): TerminalNode {
		return this.getToken(trinoSqlParser.RESTRICT_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDropSchema) {
	 		listener.enterDropSchema(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDropSchema) {
	 		listener.exitDropSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDropSchema) {
			return visitor.visitDropSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetTableAuthorizationContext extends StatementContext {
	public _tableName!: QualifiedNameContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALTER_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public SET_(): TerminalNode {
		return this.getToken(trinoSqlParser.SET_, 0);
	}
	public AUTHORIZATION_(): TerminalNode {
		return this.getToken(trinoSqlParser.AUTHORIZATION_, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetTableAuthorization) {
	 		listener.enterSetTableAuthorization(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetTableAuthorization) {
	 		listener.exitSetTableAuthorization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetTableAuthorization) {
			return visitor.visitSetTableAuthorization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCreateViewContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.SHOW_, 0);
	}
	public CREATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CREATE_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(trinoSqlParser.VIEW_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowCreateView) {
	 		listener.enterShowCreateView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowCreateView) {
	 		listener.exitShowCreateView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowCreateView) {
			return visitor.visitShowCreateView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTableContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CREATE_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public tableElement_list(): TableElementContext[] {
		return this.getTypedRuleContexts(TableElementContext) as TableElementContext[];
	}
	public tableElement(i: number): TableElementContext {
		return this.getTypedRuleContext(TableElementContext, i) as TableElementContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public IF_(): TerminalNode {
		return this.getToken(trinoSqlParser.IF_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.NOT_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXISTS_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public COMMENT_(): TerminalNode {
		return this.getToken(trinoSqlParser.COMMENT_, 0);
	}
	public string_(): String_Context {
		return this.getTypedRuleContext(String_Context, 0) as String_Context;
	}
	public WITH_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITH_, 0);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCreateTable) {
	 		listener.enterCreateTable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCreateTable) {
	 		listener.exitCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateTable) {
			return visitor.visitCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StartTransactionContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public START_(): TerminalNode {
		return this.getToken(trinoSqlParser.START_, 0);
	}
	public TRANSACTION_(): TerminalNode {
		return this.getToken(trinoSqlParser.TRANSACTION_, 0);
	}
	public transactionMode_list(): TransactionModeContext[] {
		return this.getTypedRuleContexts(TransactionModeContext) as TransactionModeContext[];
	}
	public transactionMode(i: number): TransactionModeContext {
		return this.getTypedRuleContext(TransactionModeContext, i) as TransactionModeContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterStartTransaction) {
	 		listener.enterStartTransaction(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitStartTransaction) {
	 		listener.exitStartTransaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitStartTransaction) {
			return visitor.visitStartTransaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTableAsSelectContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CREATE_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public IF_(): TerminalNode {
		return this.getToken(trinoSqlParser.IF_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.NOT_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXISTS_, 0);
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
	public COMMENT_(): TerminalNode {
		return this.getToken(trinoSqlParser.COMMENT_, 0);
	}
	public string_(): String_Context {
		return this.getTypedRuleContext(String_Context, 0) as String_Context;
	}
	public WITH__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.WITH_);
	}
	public WITH_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.WITH_, i);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
	public DATA_(): TerminalNode {
		return this.getToken(trinoSqlParser.DATA_, 0);
	}
	public NO_(): TerminalNode {
		return this.getToken(trinoSqlParser.NO_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCreateTableAsSelect) {
	 		listener.enterCreateTableAsSelect(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCreateTableAsSelect) {
	 		listener.exitCreateTableAsSelect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateTableAsSelect) {
			return visitor.visitCreateTableAsSelect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommentViewContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMENT_(): TerminalNode {
		return this.getToken(trinoSqlParser.COMMENT_, 0);
	}
	public ON_(): TerminalNode {
		return this.getToken(trinoSqlParser.ON_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(trinoSqlParser.VIEW_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IS_(): TerminalNode {
		return this.getToken(trinoSqlParser.IS_, 0);
	}
	public string_(): String_Context {
		return this.getTypedRuleContext(String_Context, 0) as String_Context;
	}
	public NULL_(): TerminalNode {
		return this.getToken(trinoSqlParser.NULL_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCommentView) {
	 		listener.enterCommentView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCommentView) {
	 		listener.exitCommentView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCommentView) {
			return visitor.visitCommentView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowStatsContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.SHOW_, 0);
	}
	public STATS_(): TerminalNode {
		return this.getToken(trinoSqlParser.STATS_, 0);
	}
	public FOR_(): TerminalNode {
		return this.getToken(trinoSqlParser.FOR_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowStats) {
	 		listener.enterShowStats(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowStats) {
	 		listener.exitShowStats(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowStats) {
			return visitor.visitShowStats(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCreateSchemaContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.SHOW_, 0);
	}
	public CREATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CREATE_, 0);
	}
	public SCHEMA_(): TerminalNode {
		return this.getToken(trinoSqlParser.SCHEMA_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowCreateSchema) {
	 		listener.enterShowCreateSchema(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowCreateSchema) {
	 		listener.exitShowCreateSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowCreateSchema) {
			return visitor.visitShowCreateSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RevokeContext extends StatementContext {
	public _grantee!: PrincipalContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REVOKE_(): TerminalNode {
		return this.getToken(trinoSqlParser.REVOKE_, 0);
	}
	public ON_(): TerminalNode {
		return this.getToken(trinoSqlParser.ON_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public FROM_(): TerminalNode {
		return this.getToken(trinoSqlParser.FROM_, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public privilege_list(): PrivilegeContext[] {
		return this.getTypedRuleContexts(PrivilegeContext) as PrivilegeContext[];
	}
	public privilege(i: number): PrivilegeContext {
		return this.getTypedRuleContext(PrivilegeContext, i) as PrivilegeContext;
	}
	public ALL_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALL_, 0);
	}
	public PRIVILEGES_(): TerminalNode {
		return this.getToken(trinoSqlParser.PRIVILEGES_, 0);
	}
	public GRANT_(): TerminalNode {
		return this.getToken(trinoSqlParser.GRANT_, 0);
	}
	public OPTION_(): TerminalNode {
		return this.getToken(trinoSqlParser.OPTION_, 0);
	}
	public FOR_(): TerminalNode {
		return this.getToken(trinoSqlParser.FOR_, 0);
	}
	public SCHEMA_(): TerminalNode {
		return this.getToken(trinoSqlParser.SCHEMA_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRevoke) {
	 		listener.enterRevoke(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRevoke) {
	 		listener.exitRevoke(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRevoke) {
			return visitor.visitRevoke(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UpdateContext extends StatementContext {
	public _where!: BooleanExpressionContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UPDATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.UPDATE_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public SET_(): TerminalNode {
		return this.getToken(trinoSqlParser.SET_, 0);
	}
	public updateAssignment_list(): UpdateAssignmentContext[] {
		return this.getTypedRuleContexts(UpdateAssignmentContext) as UpdateAssignmentContext[];
	}
	public updateAssignment(i: number): UpdateAssignmentContext {
		return this.getTypedRuleContext(UpdateAssignmentContext, i) as UpdateAssignmentContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public WHERE_(): TerminalNode {
		return this.getToken(trinoSqlParser.WHERE_, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUpdate) {
	 		listener.enterUpdate(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUpdate) {
	 		listener.exitUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUpdate) {
			return visitor.visitUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableExecuteContext extends StatementContext {
	public _tableName!: QualifiedNameContext;
	public _procedureName!: IdentifierContext;
	public _where!: BooleanExpressionContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALTER_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public EXECUTE_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXECUTE_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public WHERE_(): TerminalNode {
		return this.getToken(trinoSqlParser.WHERE_, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public callArgument_list(): CallArgumentContext[] {
		return this.getTypedRuleContexts(CallArgumentContext) as CallArgumentContext[];
	}
	public callArgument(i: number): CallArgumentContext {
		return this.getTypedRuleContext(CallArgumentContext, i) as CallArgumentContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTableExecute) {
	 		listener.enterTableExecute(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTableExecute) {
	 		listener.exitTableExecute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTableExecute) {
			return visitor.visitTableExecute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeleteContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DELETE_(): TerminalNode {
		return this.getToken(trinoSqlParser.DELETE_, 0);
	}
	public FROM_(): TerminalNode {
		return this.getToken(trinoSqlParser.FROM_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public WHERE_(): TerminalNode {
		return this.getToken(trinoSqlParser.WHERE_, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDelete) {
	 		listener.enterDelete(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDelete) {
	 		listener.exitDelete(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDelete) {
			return visitor.visitDelete(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DescribeInputContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DESCRIBE_(): TerminalNode {
		return this.getToken(trinoSqlParser.DESCRIBE_, 0);
	}
	public INPUT_(): TerminalNode {
		return this.getToken(trinoSqlParser.INPUT_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDescribeInput) {
	 		listener.enterDescribeInput(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDescribeInput) {
	 		listener.exitDescribeInput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDescribeInput) {
			return visitor.visitDescribeInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowStatsForQueryContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.SHOW_, 0);
	}
	public STATS_(): TerminalNode {
		return this.getToken(trinoSqlParser.STATS_, 0);
	}
	public FOR_(): TerminalNode {
		return this.getToken(trinoSqlParser.FOR_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowStatsForQuery) {
	 		listener.enterShowStatsForQuery(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowStatsForQuery) {
	 		listener.exitShowStatsForQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowStatsForQuery) {
			return visitor.visitShowStatsForQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetColumnTypeContext extends StatementContext {
	public _tableName!: QualifiedNameContext;
	public _columnName!: IdentifierContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.ALTER_);
	}
	public ALTER_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.ALTER_, i);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public COLUMN_(): TerminalNode {
		return this.getToken(trinoSqlParser.COLUMN_, 0);
	}
	public SET_(): TerminalNode {
		return this.getToken(trinoSqlParser.SET_, 0);
	}
	public DATA_(): TerminalNode {
		return this.getToken(trinoSqlParser.DATA_, 0);
	}
	public TYPE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TYPE_, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public IF_(): TerminalNode {
		return this.getToken(trinoSqlParser.IF_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXISTS_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetColumnType) {
	 		listener.enterSetColumnType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetColumnType) {
	 		listener.exitSetColumnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetColumnType) {
			return visitor.visitSetColumnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StatementDefaultContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterStatementDefault) {
	 		listener.enterStatementDefault(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitStatementDefault) {
	 		listener.exitStatementDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitStatementDefault) {
			return visitor.visitStatementDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetTimeZoneContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SET_(): TerminalNode {
		return this.getToken(trinoSqlParser.SET_, 0);
	}
	public TIME_(): TerminalNode {
		return this.getToken(trinoSqlParser.TIME_, 0);
	}
	public ZONE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ZONE_, 0);
	}
	public LOCAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.LOCAL_, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetTimeZone) {
	 		listener.enterSetTimeZone(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetTimeZone) {
	 		listener.exitSetTimeZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetTimeZone) {
			return visitor.visitSetTimeZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TruncateTableContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TRUNCATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TRUNCATE_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTruncateTable) {
	 		listener.enterTruncateTable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTruncateTable) {
	 		listener.exitTruncateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTruncateTable) {
			return visitor.visitTruncateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateMaterializedViewContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CREATE_, 0);
	}
	public MATERIALIZED_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATERIALIZED_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(trinoSqlParser.VIEW_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public OR_(): TerminalNode {
		return this.getToken(trinoSqlParser.OR_, 0);
	}
	public REPLACE_(): TerminalNode {
		return this.getToken(trinoSqlParser.REPLACE_, 0);
	}
	public IF_(): TerminalNode {
		return this.getToken(trinoSqlParser.IF_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.NOT_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXISTS_, 0);
	}
	public GRACE_(): TerminalNode {
		return this.getToken(trinoSqlParser.GRACE_, 0);
	}
	public PERIOD_(): TerminalNode {
		return this.getToken(trinoSqlParser.PERIOD_, 0);
	}
	public interval(): IntervalContext {
		return this.getTypedRuleContext(IntervalContext, 0) as IntervalContext;
	}
	public COMMENT_(): TerminalNode {
		return this.getToken(trinoSqlParser.COMMENT_, 0);
	}
	public string_(): String_Context {
		return this.getTypedRuleContext(String_Context, 0) as String_Context;
	}
	public WITH_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITH_, 0);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCreateMaterializedView) {
	 		listener.enterCreateMaterializedView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCreateMaterializedView) {
	 		listener.exitCreateMaterializedView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateMaterializedView) {
			return visitor.visitCreateMaterializedView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetSessionContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SET_(): TerminalNode {
		return this.getToken(trinoSqlParser.SET_, 0);
	}
	public SESSION_(): TerminalNode {
		return this.getToken(trinoSqlParser.SESSION_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public EQ_(): TerminalNode {
		return this.getToken(trinoSqlParser.EQ_, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetSession) {
	 		listener.enterSetSession(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetSession) {
	 		listener.exitSetSession(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetSession) {
			return visitor.visitSetSession(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateViewContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CREATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CREATE_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(trinoSqlParser.VIEW_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public OR_(): TerminalNode {
		return this.getToken(trinoSqlParser.OR_, 0);
	}
	public REPLACE_(): TerminalNode {
		return this.getToken(trinoSqlParser.REPLACE_, 0);
	}
	public COMMENT_(): TerminalNode {
		return this.getToken(trinoSqlParser.COMMENT_, 0);
	}
	public string_(): String_Context {
		return this.getTypedRuleContext(String_Context, 0) as String_Context;
	}
	public SECURITY_(): TerminalNode {
		return this.getToken(trinoSqlParser.SECURITY_, 0);
	}
	public DEFINER_(): TerminalNode {
		return this.getToken(trinoSqlParser.DEFINER_, 0);
	}
	public INVOKER_(): TerminalNode {
		return this.getToken(trinoSqlParser.INVOKER_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCreateView) {
	 		listener.enterCreateView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCreateView) {
	 		listener.exitCreateView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateView) {
			return visitor.visitCreateView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameMaterializedViewContext extends StatementContext {
	public _from_!: QualifiedNameContext;
	public _to!: QualifiedNameContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALTER_, 0);
	}
	public MATERIALIZED_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATERIALIZED_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(trinoSqlParser.VIEW_, 0);
	}
	public RENAME_(): TerminalNode {
		return this.getToken(trinoSqlParser.RENAME_, 0);
	}
	public TO_(): TerminalNode {
		return this.getToken(trinoSqlParser.TO_, 0);
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public IF_(): TerminalNode {
		return this.getToken(trinoSqlParser.IF_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXISTS_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRenameMaterializedView) {
	 		listener.enterRenameMaterializedView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRenameMaterializedView) {
	 		listener.exitRenameMaterializedView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRenameMaterializedView) {
			return visitor.visitRenameMaterializedView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowSchemasContext extends StatementContext {
	public _pattern!: String_Context;
	public _escape!: String_Context;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.SHOW_, 0);
	}
	public SCHEMAS_(): TerminalNode {
		return this.getToken(trinoSqlParser.SCHEMAS_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LIKE_(): TerminalNode {
		return this.getToken(trinoSqlParser.LIKE_, 0);
	}
	public FROM_(): TerminalNode {
		return this.getToken(trinoSqlParser.FROM_, 0);
	}
	public IN_(): TerminalNode {
		return this.getToken(trinoSqlParser.IN_, 0);
	}
	public string__list(): String_Context[] {
		return this.getTypedRuleContexts(String_Context) as String_Context[];
	}
	public string_(i: number): String_Context {
		return this.getTypedRuleContext(String_Context, i) as String_Context;
	}
	public ESCAPE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ESCAPE_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowSchemas) {
	 		listener.enterShowSchemas(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowSchemas) {
	 		listener.exitShowSchemas(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowSchemas) {
			return visitor.visitShowSchemas(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropTableContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DROP_(): TerminalNode {
		return this.getToken(trinoSqlParser.DROP_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IF_(): TerminalNode {
		return this.getToken(trinoSqlParser.IF_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXISTS_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDropTable) {
	 		listener.enterDropTable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDropTable) {
	 		listener.exitDropTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDropTable) {
			return visitor.visitDropTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetSchemaAuthorizationContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALTER_, 0);
	}
	public SCHEMA_(): TerminalNode {
		return this.getToken(trinoSqlParser.SCHEMA_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public SET_(): TerminalNode {
		return this.getToken(trinoSqlParser.SET_, 0);
	}
	public AUTHORIZATION_(): TerminalNode {
		return this.getToken(trinoSqlParser.AUTHORIZATION_, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetSchemaAuthorization) {
	 		listener.enterSetSchemaAuthorization(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetSchemaAuthorization) {
	 		listener.exitSetSchemaAuthorization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetSchemaAuthorization) {
			return visitor.visitSetSchemaAuthorization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RollbackContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ROLLBACK_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROLLBACK_, 0);
	}
	public WORK_(): TerminalNode {
		return this.getToken(trinoSqlParser.WORK_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRollback) {
	 		listener.enterRollback(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRollback) {
	 		listener.exitRollback(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRollback) {
			return visitor.visitRollback(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommentTableContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMENT_(): TerminalNode {
		return this.getToken(trinoSqlParser.COMMENT_, 0);
	}
	public ON_(): TerminalNode {
		return this.getToken(trinoSqlParser.ON_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public IS_(): TerminalNode {
		return this.getToken(trinoSqlParser.IS_, 0);
	}
	public string_(): String_Context {
		return this.getTypedRuleContext(String_Context, 0) as String_Context;
	}
	public NULL_(): TerminalNode {
		return this.getToken(trinoSqlParser.NULL_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCommentTable) {
	 		listener.enterCommentTable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCommentTable) {
	 		listener.exitCommentTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCommentTable) {
			return visitor.visitCommentTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameViewContext extends StatementContext {
	public _from_!: QualifiedNameContext;
	public _to!: QualifiedNameContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALTER_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(trinoSqlParser.VIEW_, 0);
	}
	public RENAME_(): TerminalNode {
		return this.getToken(trinoSqlParser.RENAME_, 0);
	}
	public TO_(): TerminalNode {
		return this.getToken(trinoSqlParser.TO_, 0);
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRenameView) {
	 		listener.enterRenameView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRenameView) {
	 		listener.exitRenameView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRenameView) {
			return visitor.visitRenameView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetPathContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SET_(): TerminalNode {
		return this.getToken(trinoSqlParser.SET_, 0);
	}
	public PATH_(): TerminalNode {
		return this.getToken(trinoSqlParser.PATH_, 0);
	}
	public pathSpecification(): PathSpecificationContext {
		return this.getTypedRuleContext(PathSpecificationContext, 0) as PathSpecificationContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetPath) {
	 		listener.enterSetPath(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetPath) {
	 		listener.exitSetPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetPath) {
			return visitor.visitSetPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GrantRolesContext extends StatementContext {
	public _catalog!: IdentifierContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GRANT_(): TerminalNode {
		return this.getToken(trinoSqlParser.GRANT_, 0);
	}
	public roles(): RolesContext {
		return this.getTypedRuleContext(RolesContext, 0) as RolesContext;
	}
	public TO_(): TerminalNode {
		return this.getToken(trinoSqlParser.TO_, 0);
	}
	public principal_list(): PrincipalContext[] {
		return this.getTypedRuleContexts(PrincipalContext) as PrincipalContext[];
	}
	public principal(i: number): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, i) as PrincipalContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public WITH_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITH_, 0);
	}
	public ADMIN_(): TerminalNode {
		return this.getToken(trinoSqlParser.ADMIN_, 0);
	}
	public OPTION_(): TerminalNode {
		return this.getToken(trinoSqlParser.OPTION_, 0);
	}
	public GRANTED_(): TerminalNode {
		return this.getToken(trinoSqlParser.GRANTED_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(trinoSqlParser.BY_, 0);
	}
	public grantor(): GrantorContext {
		return this.getTypedRuleContext(GrantorContext, 0) as GrantorContext;
	}
	public IN_(): TerminalNode {
		return this.getToken(trinoSqlParser.IN_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterGrantRoles) {
	 		listener.enterGrantRoles(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitGrantRoles) {
	 		listener.exitGrantRoles(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitGrantRoles) {
			return visitor.visitGrantRoles(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CALL_(): TerminalNode {
		return this.getToken(trinoSqlParser.CALL_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public callArgument_list(): CallArgumentContext[] {
		return this.getTypedRuleContexts(CallArgumentContext) as CallArgumentContext[];
	}
	public callArgument(i: number): CallArgumentContext {
		return this.getTypedRuleContext(CallArgumentContext, i) as CallArgumentContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCall) {
	 		listener.enterCall(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCall) {
	 		listener.exitCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCall) {
			return visitor.visitCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RefreshMaterializedViewContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REFRESH_(): TerminalNode {
		return this.getToken(trinoSqlParser.REFRESH_, 0);
	}
	public MATERIALIZED_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATERIALIZED_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(trinoSqlParser.VIEW_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRefreshMaterializedView) {
	 		listener.enterRefreshMaterializedView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRefreshMaterializedView) {
	 		listener.exitRefreshMaterializedView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRefreshMaterializedView) {
			return visitor.visitRefreshMaterializedView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCreateMaterializedViewContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.SHOW_, 0);
	}
	public CREATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CREATE_, 0);
	}
	public MATERIALIZED_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATERIALIZED_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(trinoSqlParser.VIEW_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowCreateMaterializedView) {
	 		listener.enterShowCreateMaterializedView(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowCreateMaterializedView) {
	 		listener.exitShowCreateMaterializedView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowCreateMaterializedView) {
			return visitor.visitShowCreateMaterializedView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowFunctionsContext extends StatementContext {
	public _pattern!: String_Context;
	public _escape!: String_Context;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.SHOW_, 0);
	}
	public FUNCTIONS_(): TerminalNode {
		return this.getToken(trinoSqlParser.FUNCTIONS_, 0);
	}
	public LIKE_(): TerminalNode {
		return this.getToken(trinoSqlParser.LIKE_, 0);
	}
	public string__list(): String_Context[] {
		return this.getTypedRuleContexts(String_Context) as String_Context[];
	}
	public string_(i: number): String_Context {
		return this.getTypedRuleContext(String_Context, i) as String_Context;
	}
	public ESCAPE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ESCAPE_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterShowFunctions) {
	 		listener.enterShowFunctions(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitShowFunctions) {
	 		listener.exitShowFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitShowFunctions) {
			return visitor.visitShowFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DescribeOutputContext extends StatementContext {
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DESCRIBE_(): TerminalNode {
		return this.getToken(trinoSqlParser.DESCRIBE_, 0);
	}
	public OUTPUT_(): TerminalNode {
		return this.getToken(trinoSqlParser.OUTPUT_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDescribeOutput) {
	 		listener.enterDescribeOutput(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDescribeOutput) {
	 		listener.exitDescribeOutput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDescribeOutput) {
			return visitor.visitDescribeOutput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GrantContext extends StatementContext {
	public _grantee!: PrincipalContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GRANT__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.GRANT_);
	}
	public GRANT_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.GRANT_, i);
	}
	public ON_(): TerminalNode {
		return this.getToken(trinoSqlParser.ON_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public TO_(): TerminalNode {
		return this.getToken(trinoSqlParser.TO_, 0);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public privilege_list(): PrivilegeContext[] {
		return this.getTypedRuleContexts(PrivilegeContext) as PrivilegeContext[];
	}
	public privilege(i: number): PrivilegeContext {
		return this.getTypedRuleContext(PrivilegeContext, i) as PrivilegeContext;
	}
	public ALL_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALL_, 0);
	}
	public PRIVILEGES_(): TerminalNode {
		return this.getToken(trinoSqlParser.PRIVILEGES_, 0);
	}
	public WITH_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITH_, 0);
	}
	public OPTION_(): TerminalNode {
		return this.getToken(trinoSqlParser.OPTION_, 0);
	}
	public SCHEMA_(): TerminalNode {
		return this.getToken(trinoSqlParser.SCHEMA_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterGrant) {
	 		listener.enterGrant(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitGrant) {
	 		listener.exitGrant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitGrant) {
			return visitor.visitGrant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetTablePropertiesContext extends StatementContext {
	public _tableName!: QualifiedNameContext;
	constructor(parser: trinoSqlParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALTER_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public SET_(): TerminalNode {
		return this.getToken(trinoSqlParser.SET_, 0);
	}
	public PROPERTIES_(): TerminalNode {
		return this.getToken(trinoSqlParser.PROPERTIES_, 0);
	}
	public propertyAssignments(): PropertyAssignmentsContext {
		return this.getTypedRuleContext(PropertyAssignmentsContext, 0) as PropertyAssignmentsContext;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetTableProperties) {
	 		listener.enterSetTableProperties(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetTableProperties) {
	 		listener.exitSetTableProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetTableProperties) {
			return visitor.visitSetTableProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public queryNoWith(): QueryNoWithContext {
		return this.getTypedRuleContext(QueryNoWithContext, 0) as QueryNoWithContext;
	}
	public with_(): WithContext {
		return this.getTypedRuleContext(WithContext, 0) as WithContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_query;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQuery) {
	 		listener.enterQuery(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQuery) {
	 		listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITH_, 0);
	}
	public namedQuery_list(): NamedQueryContext[] {
		return this.getTypedRuleContexts(NamedQueryContext) as NamedQueryContext[];
	}
	public namedQuery(i: number): NamedQueryContext {
		return this.getTypedRuleContext(NamedQueryContext, i) as NamedQueryContext;
	}
	public RECURSIVE_(): TerminalNode {
		return this.getToken(trinoSqlParser.RECURSIVE_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_with;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterWith) {
	 		listener.enterWith(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitWith) {
	 		listener.exitWith(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitWith) {
			return visitor.visitWith(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableElementContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public columnDefinition(): ColumnDefinitionContext {
		return this.getTypedRuleContext(ColumnDefinitionContext, 0) as ColumnDefinitionContext;
	}
	public likeClause(): LikeClauseContext {
		return this.getTypedRuleContext(LikeClauseContext, 0) as LikeClauseContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_tableElement;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTableElement) {
	 		listener.enterTableElement(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTableElement) {
	 		listener.exitTableElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTableElement) {
			return visitor.visitTableElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnDefinitionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public NOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.NOT_, 0);
	}
	public NULL_(): TerminalNode {
		return this.getToken(trinoSqlParser.NULL_, 0);
	}
	public COMMENT_(): TerminalNode {
		return this.getToken(trinoSqlParser.COMMENT_, 0);
	}
	public string_(): String_Context {
		return this.getTypedRuleContext(String_Context, 0) as String_Context;
	}
	public WITH_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITH_, 0);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_columnDefinition;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterColumnDefinition) {
	 		listener.enterColumnDefinition(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitColumnDefinition) {
	 		listener.exitColumnDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnDefinition) {
			return visitor.visitColumnDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikeClauseContext extends ParserRuleContext {
	public _optionType!: Token;
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LIKE_(): TerminalNode {
		return this.getToken(trinoSqlParser.LIKE_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public PROPERTIES_(): TerminalNode {
		return this.getToken(trinoSqlParser.PROPERTIES_, 0);
	}
	public INCLUDING_(): TerminalNode {
		return this.getToken(trinoSqlParser.INCLUDING_, 0);
	}
	public EXCLUDING_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXCLUDING_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_likeClause;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterLikeClause) {
	 		listener.enterLikeClause(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitLikeClause) {
	 		listener.exitLikeClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitLikeClause) {
			return visitor.visitLikeClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertiesContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public propertyAssignments(): PropertyAssignmentsContext {
		return this.getTypedRuleContext(PropertyAssignmentsContext, 0) as PropertyAssignmentsContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_properties;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterProperties) {
	 		listener.enterProperties(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitProperties) {
	 		listener.exitProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitProperties) {
			return visitor.visitProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyAssignmentsContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public property_list(): PropertyContext[] {
		return this.getTypedRuleContexts(PropertyContext) as PropertyContext[];
	}
	public property(i: number): PropertyContext {
		return this.getTypedRuleContext(PropertyContext, i) as PropertyContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_propertyAssignments;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPropertyAssignments) {
	 		listener.enterPropertyAssignments(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPropertyAssignments) {
	 		listener.exitPropertyAssignments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPropertyAssignments) {
			return visitor.visitPropertyAssignments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public EQ_(): TerminalNode {
		return this.getToken(trinoSqlParser.EQ_, 0);
	}
	public propertyValue(): PropertyValueContext {
		return this.getTypedRuleContext(PropertyValueContext, 0) as PropertyValueContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_property;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterProperty) {
	 		listener.enterProperty(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitProperty) {
	 		listener.exitProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyValueContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_propertyValue;
	}
	public copyFrom(ctx: PropertyValueContext): void {
		super.copyFrom(ctx);
	}
}
export class DefaultPropertyValueContext extends PropertyValueContext {
	constructor(parser: trinoSqlParser, ctx: PropertyValueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DEFAULT_(): TerminalNode {
		return this.getToken(trinoSqlParser.DEFAULT_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDefaultPropertyValue) {
	 		listener.enterDefaultPropertyValue(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDefaultPropertyValue) {
	 		listener.exitDefaultPropertyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDefaultPropertyValue) {
			return visitor.visitDefaultPropertyValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NonDefaultPropertyValueContext extends PropertyValueContext {
	constructor(parser: trinoSqlParser, ctx: PropertyValueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNonDefaultPropertyValue) {
	 		listener.enterNonDefaultPropertyValue(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNonDefaultPropertyValue) {
	 		listener.exitNonDefaultPropertyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
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
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public queryTerm(): QueryTermContext {
		return this.getTypedRuleContext(QueryTermContext, 0) as QueryTermContext;
	}
	public ORDER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ORDER_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(trinoSqlParser.BY_, 0);
	}
	public sortItem_list(): SortItemContext[] {
		return this.getTypedRuleContexts(SortItemContext) as SortItemContext[];
	}
	public sortItem(i: number): SortItemContext {
		return this.getTypedRuleContext(SortItemContext, i) as SortItemContext;
	}
	public OFFSET_(): TerminalNode {
		return this.getToken(trinoSqlParser.OFFSET_, 0);
	}
	public LIMIT_(): TerminalNode {
		return this.getToken(trinoSqlParser.LIMIT_, 0);
	}
	public FETCH_(): TerminalNode {
		return this.getToken(trinoSqlParser.FETCH_, 0);
	}
	public rowCount_list(): RowCountContext[] {
		return this.getTypedRuleContexts(RowCountContext) as RowCountContext[];
	}
	public rowCount(i: number): RowCountContext {
		return this.getTypedRuleContext(RowCountContext, i) as RowCountContext;
	}
	public limitRowCount(): LimitRowCountContext {
		return this.getTypedRuleContext(LimitRowCountContext, 0) as LimitRowCountContext;
	}
	public FIRST_(): TerminalNode {
		return this.getToken(trinoSqlParser.FIRST_, 0);
	}
	public NEXT_(): TerminalNode {
		return this.getToken(trinoSqlParser.NEXT_, 0);
	}
	public ROW__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.ROW_);
	}
	public ROW_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.ROW_, i);
	}
	public ROWS__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.ROWS_);
	}
	public ROWS_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.ROWS_, i);
	}
	public ONLY_(): TerminalNode {
		return this.getToken(trinoSqlParser.ONLY_, 0);
	}
	public WITH_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITH_, 0);
	}
	public TIES_(): TerminalNode {
		return this.getToken(trinoSqlParser.TIES_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_queryNoWith;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQueryNoWith) {
	 		listener.enterQueryNoWith(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQueryNoWith) {
	 		listener.exitQueryNoWith(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQueryNoWith) {
			return visitor.visitQueryNoWith(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LimitRowCountContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALL_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALL_, 0);
	}
	public rowCount(): RowCountContext {
		return this.getTypedRuleContext(RowCountContext, 0) as RowCountContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_limitRowCount;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterLimitRowCount) {
	 		listener.enterLimitRowCount(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitLimitRowCount) {
	 		listener.exitLimitRowCount(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitLimitRowCount) {
			return visitor.visitLimitRowCount(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowCountContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER_VALUE_(): TerminalNode {
		return this.getToken(trinoSqlParser.INTEGER_VALUE_, 0);
	}
	public QUESTION_MARK_(): TerminalNode {
		return this.getToken(trinoSqlParser.QUESTION_MARK_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_rowCount;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRowCount) {
	 		listener.enterRowCount(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRowCount) {
	 		listener.exitRowCount(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRowCount) {
			return visitor.visitRowCount(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryTermContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_queryTerm;
	}
	public copyFrom(ctx: QueryTermContext): void {
		super.copyFrom(ctx);
	}
}
export class QueryTermDefaultContext extends QueryTermContext {
	constructor(parser: trinoSqlParser, ctx: QueryTermContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public queryPrimary(): QueryPrimaryContext {
		return this.getTypedRuleContext(QueryPrimaryContext, 0) as QueryPrimaryContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQueryTermDefault) {
	 		listener.enterQueryTermDefault(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQueryTermDefault) {
	 		listener.exitQueryTermDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
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
	constructor(parser: trinoSqlParser, ctx: QueryTermContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public queryTerm_list(): QueryTermContext[] {
		return this.getTypedRuleContexts(QueryTermContext) as QueryTermContext[];
	}
	public queryTerm(i: number): QueryTermContext {
		return this.getTypedRuleContext(QueryTermContext, i) as QueryTermContext;
	}
	public INTERSECT_(): TerminalNode {
		return this.getToken(trinoSqlParser.INTERSECT_, 0);
	}
	public setQuantifier(): SetQuantifierContext {
		return this.getTypedRuleContext(SetQuantifierContext, 0) as SetQuantifierContext;
	}
	public UNION_(): TerminalNode {
		return this.getToken(trinoSqlParser.UNION_, 0);
	}
	public EXCEPT_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXCEPT_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetOperation) {
	 		listener.enterSetOperation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetOperation) {
	 		listener.exitSetOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetOperation) {
			return visitor.visitSetOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryPrimaryContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_queryPrimary;
	}
	public copyFrom(ctx: QueryPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class SubqueryContext extends QueryPrimaryContext {
	constructor(parser: trinoSqlParser, ctx: QueryPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public queryNoWith(): QueryNoWithContext {
		return this.getTypedRuleContext(QueryNoWithContext, 0) as QueryNoWithContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSubquery) {
	 		listener.enterSubquery(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSubquery) {
	 		listener.exitSubquery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSubquery) {
			return visitor.visitSubquery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QueryPrimaryDefaultContext extends QueryPrimaryContext {
	constructor(parser: trinoSqlParser, ctx: QueryPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public querySpecification(): QuerySpecificationContext {
		return this.getTypedRuleContext(QuerySpecificationContext, 0) as QuerySpecificationContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQueryPrimaryDefault) {
	 		listener.enterQueryPrimaryDefault(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQueryPrimaryDefault) {
	 		listener.exitQueryPrimaryDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQueryPrimaryDefault) {
			return visitor.visitQueryPrimaryDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableContext extends QueryPrimaryContext {
	constructor(parser: trinoSqlParser, ctx: QueryPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTable) {
	 		listener.enterTable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTable) {
	 		listener.exitTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTable) {
			return visitor.visitTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InlineTableContext extends QueryPrimaryContext {
	constructor(parser: trinoSqlParser, ctx: QueryPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VALUES_(): TerminalNode {
		return this.getToken(trinoSqlParser.VALUES_, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterInlineTable) {
	 		listener.enterInlineTable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitInlineTable) {
	 		listener.exitInlineTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitInlineTable) {
			return visitor.visitInlineTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SortItemContext extends ParserRuleContext {
	public _ordering!: Token;
	public _nullOrdering!: Token;
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public NULLS_(): TerminalNode {
		return this.getToken(trinoSqlParser.NULLS_, 0);
	}
	public ASC_(): TerminalNode {
		return this.getToken(trinoSqlParser.ASC_, 0);
	}
	public DESC_(): TerminalNode {
		return this.getToken(trinoSqlParser.DESC_, 0);
	}
	public FIRST_(): TerminalNode {
		return this.getToken(trinoSqlParser.FIRST_, 0);
	}
	public LAST_(): TerminalNode {
		return this.getToken(trinoSqlParser.LAST_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_sortItem;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSortItem) {
	 		listener.enterSortItem(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSortItem) {
	 		listener.exitSortItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
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
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SELECT_(): TerminalNode {
		return this.getToken(trinoSqlParser.SELECT_, 0);
	}
	public selectItem_list(): SelectItemContext[] {
		return this.getTypedRuleContexts(SelectItemContext) as SelectItemContext[];
	}
	public selectItem(i: number): SelectItemContext {
		return this.getTypedRuleContext(SelectItemContext, i) as SelectItemContext;
	}
	public setQuantifier(): SetQuantifierContext {
		return this.getTypedRuleContext(SetQuantifierContext, 0) as SetQuantifierContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public FROM_(): TerminalNode {
		return this.getToken(trinoSqlParser.FROM_, 0);
	}
	public relation_list(): RelationContext[] {
		return this.getTypedRuleContexts(RelationContext) as RelationContext[];
	}
	public relation(i: number): RelationContext {
		return this.getTypedRuleContext(RelationContext, i) as RelationContext;
	}
	public WHERE_(): TerminalNode {
		return this.getToken(trinoSqlParser.WHERE_, 0);
	}
	public GROUP_(): TerminalNode {
		return this.getToken(trinoSqlParser.GROUP_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(trinoSqlParser.BY_, 0);
	}
	public groupBy(): GroupByContext {
		return this.getTypedRuleContext(GroupByContext, 0) as GroupByContext;
	}
	public HAVING_(): TerminalNode {
		return this.getToken(trinoSqlParser.HAVING_, 0);
	}
	public WINDOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.WINDOW_, 0);
	}
	public windowDefinition_list(): WindowDefinitionContext[] {
		return this.getTypedRuleContexts(WindowDefinitionContext) as WindowDefinitionContext[];
	}
	public windowDefinition(i: number): WindowDefinitionContext {
		return this.getTypedRuleContext(WindowDefinitionContext, i) as WindowDefinitionContext;
	}
	public booleanExpression_list(): BooleanExpressionContext[] {
		return this.getTypedRuleContexts(BooleanExpressionContext) as BooleanExpressionContext[];
	}
	public booleanExpression(i: number): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, i) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_querySpecification;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQuerySpecification) {
	 		listener.enterQuerySpecification(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQuerySpecification) {
	 		listener.exitQuerySpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQuerySpecification) {
			return visitor.visitQuerySpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupByContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public groupingElement_list(): GroupingElementContext[] {
		return this.getTypedRuleContexts(GroupingElementContext) as GroupingElementContext[];
	}
	public groupingElement(i: number): GroupingElementContext {
		return this.getTypedRuleContext(GroupingElementContext, i) as GroupingElementContext;
	}
	public setQuantifier(): SetQuantifierContext {
		return this.getTypedRuleContext(SetQuantifierContext, 0) as SetQuantifierContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_groupBy;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterGroupBy) {
	 		listener.enterGroupBy(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitGroupBy) {
	 		listener.exitGroupBy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupBy) {
			return visitor.visitGroupBy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingElementContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_groupingElement;
	}
	public copyFrom(ctx: GroupingElementContext): void {
		super.copyFrom(ctx);
	}
}
export class MultipleGroupingSetsContext extends GroupingElementContext {
	constructor(parser: trinoSqlParser, ctx: GroupingElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GROUPING_(): TerminalNode {
		return this.getToken(trinoSqlParser.GROUPING_, 0);
	}
	public SETS_(): TerminalNode {
		return this.getToken(trinoSqlParser.SETS_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public groupingSet_list(): GroupingSetContext[] {
		return this.getTypedRuleContexts(GroupingSetContext) as GroupingSetContext[];
	}
	public groupingSet(i: number): GroupingSetContext {
		return this.getTypedRuleContext(GroupingSetContext, i) as GroupingSetContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterMultipleGroupingSets) {
	 		listener.enterMultipleGroupingSets(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitMultipleGroupingSets) {
	 		listener.exitMultipleGroupingSets(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitMultipleGroupingSets) {
			return visitor.visitMultipleGroupingSets(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SingleGroupingSetContext extends GroupingElementContext {
	constructor(parser: trinoSqlParser, ctx: GroupingElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public groupingSet(): GroupingSetContext {
		return this.getTypedRuleContext(GroupingSetContext, 0) as GroupingSetContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSingleGroupingSet) {
	 		listener.enterSingleGroupingSet(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSingleGroupingSet) {
	 		listener.exitSingleGroupingSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSingleGroupingSet) {
			return visitor.visitSingleGroupingSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CubeContext extends GroupingElementContext {
	constructor(parser: trinoSqlParser, ctx: GroupingElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CUBE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CUBE_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCube) {
	 		listener.enterCube(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCube) {
	 		listener.exitCube(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCube) {
			return visitor.visitCube(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RollupContext extends GroupingElementContext {
	constructor(parser: trinoSqlParser, ctx: GroupingElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ROLLUP_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROLLUP_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRollup) {
	 		listener.enterRollup(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRollup) {
	 		listener.exitRollup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRollup) {
			return visitor.visitRollup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingSetContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_groupingSet;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterGroupingSet) {
	 		listener.enterGroupingSet(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitGroupingSet) {
	 		listener.exitGroupingSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupingSet) {
			return visitor.visitGroupingSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowDefinitionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public windowSpecification(): WindowSpecificationContext {
		return this.getTypedRuleContext(WindowSpecificationContext, 0) as WindowSpecificationContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_windowDefinition;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterWindowDefinition) {
	 		listener.enterWindowDefinition(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitWindowDefinition) {
	 		listener.exitWindowDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
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
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PARTITION_(): TerminalNode {
		return this.getToken(trinoSqlParser.PARTITION_, 0);
	}
	public BY__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.BY_);
	}
	public BY_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.BY_, i);
	}
	public ORDER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ORDER_, 0);
	}
	public sortItem_list(): SortItemContext[] {
		return this.getTypedRuleContexts(SortItemContext) as SortItemContext[];
	}
	public sortItem(i: number): SortItemContext {
		return this.getTypedRuleContext(SortItemContext, i) as SortItemContext;
	}
	public windowFrame(): WindowFrameContext {
		return this.getTypedRuleContext(WindowFrameContext, 0) as WindowFrameContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_windowSpecification;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterWindowSpecification) {
	 		listener.enterWindowSpecification(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitWindowSpecification) {
	 		listener.exitWindowSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowSpecification) {
			return visitor.visitWindowSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedQueryContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_namedQuery;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNamedQuery) {
	 		listener.enterNamedQuery(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNamedQuery) {
	 		listener.exitNamedQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNamedQuery) {
			return visitor.visitNamedQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetQuantifierContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DISTINCT_(): TerminalNode {
		return this.getToken(trinoSqlParser.DISTINCT_, 0);
	}
	public ALL_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALL_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_setQuantifier;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSetQuantifier) {
	 		listener.enterSetQuantifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSetQuantifier) {
	 		listener.exitSetQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSetQuantifier) {
			return visitor.visitSetQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectItemContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_selectItem;
	}
	public copyFrom(ctx: SelectItemContext): void {
		super.copyFrom(ctx);
	}
}
export class SelectAllContext extends SelectItemContext {
	constructor(parser: trinoSqlParser, ctx: SelectItemContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public DOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.DOT_, 0);
	}
	public ASTERISK_(): TerminalNode {
		return this.getToken(trinoSqlParser.ASTERISK_, 0);
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSelectAll) {
	 		listener.enterSelectAll(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSelectAll) {
	 		listener.exitSelectAll(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSelectAll) {
			return visitor.visitSelectAll(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectSingleContext extends SelectItemContext {
	constructor(parser: trinoSqlParser, ctx: SelectItemContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSelectSingle) {
	 		listener.enterSelectSingle(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSelectSingle) {
	 		listener.exitSelectSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSelectSingle) {
			return visitor.visitSelectSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_relation;
	}
	public copyFrom(ctx: RelationContext): void {
		super.copyFrom(ctx);
	}
}
export class RelationDefaultContext extends RelationContext {
	constructor(parser: trinoSqlParser, ctx: RelationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public sampledRelation(): SampledRelationContext {
		return this.getTypedRuleContext(SampledRelationContext, 0) as SampledRelationContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRelationDefault) {
	 		listener.enterRelationDefault(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRelationDefault) {
	 		listener.exitRelationDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRelationDefault) {
			return visitor.visitRelationDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JoinRelationContext extends RelationContext {
	public _left!: RelationContext;
	public _right!: SampledRelationContext;
	public _rightRelation!: RelationContext;
	constructor(parser: trinoSqlParser, ctx: RelationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public relation_list(): RelationContext[] {
		return this.getTypedRuleContexts(RelationContext) as RelationContext[];
	}
	public relation(i: number): RelationContext {
		return this.getTypedRuleContext(RelationContext, i) as RelationContext;
	}
	public CROSS_(): TerminalNode {
		return this.getToken(trinoSqlParser.CROSS_, 0);
	}
	public JOIN_(): TerminalNode {
		return this.getToken(trinoSqlParser.JOIN_, 0);
	}
	public joinType(): JoinTypeContext {
		return this.getTypedRuleContext(JoinTypeContext, 0) as JoinTypeContext;
	}
	public joinCriteria(): JoinCriteriaContext {
		return this.getTypedRuleContext(JoinCriteriaContext, 0) as JoinCriteriaContext;
	}
	public NATURAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.NATURAL_, 0);
	}
	public sampledRelation(): SampledRelationContext {
		return this.getTypedRuleContext(SampledRelationContext, 0) as SampledRelationContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJoinRelation) {
	 		listener.enterJoinRelation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJoinRelation) {
	 		listener.exitJoinRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJoinRelation) {
			return visitor.visitJoinRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinTypeContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INNER_(): TerminalNode {
		return this.getToken(trinoSqlParser.INNER_, 0);
	}
	public LEFT_(): TerminalNode {
		return this.getToken(trinoSqlParser.LEFT_, 0);
	}
	public RIGHT_(): TerminalNode {
		return this.getToken(trinoSqlParser.RIGHT_, 0);
	}
	public FULL_(): TerminalNode {
		return this.getToken(trinoSqlParser.FULL_, 0);
	}
	public OUTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.OUTER_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_joinType;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJoinType) {
	 		listener.enterJoinType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJoinType) {
	 		listener.exitJoinType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJoinType) {
			return visitor.visitJoinType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinCriteriaContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON_(): TerminalNode {
		return this.getToken(trinoSqlParser.ON_, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public USING_(): TerminalNode {
		return this.getToken(trinoSqlParser.USING_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_joinCriteria;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJoinCriteria) {
	 		listener.enterJoinCriteria(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJoinCriteria) {
	 		listener.exitJoinCriteria(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJoinCriteria) {
			return visitor.visitJoinCriteria(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SampledRelationContext extends ParserRuleContext {
	public _percentage!: ExpressionContext;
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public patternRecognition(): PatternRecognitionContext {
		return this.getTypedRuleContext(PatternRecognitionContext, 0) as PatternRecognitionContext;
	}
	public TABLESAMPLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLESAMPLE_, 0);
	}
	public sampleType(): SampleTypeContext {
		return this.getTypedRuleContext(SampleTypeContext, 0) as SampleTypeContext;
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_sampledRelation;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSampledRelation) {
	 		listener.enterSampledRelation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSampledRelation) {
	 		listener.exitSampledRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSampledRelation) {
			return visitor.visitSampledRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SampleTypeContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BERNOULLI_(): TerminalNode {
		return this.getToken(trinoSqlParser.BERNOULLI_, 0);
	}
	public SYSTEM_(): TerminalNode {
		return this.getToken(trinoSqlParser.SYSTEM_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_sampleType;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSampleType) {
	 		listener.enterSampleType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSampleType) {
	 		listener.exitSampleType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSampleType) {
			return visitor.visitSampleType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrimsSpecificationContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEADING_(): TerminalNode {
		return this.getToken(trinoSqlParser.LEADING_, 0);
	}
	public TRAILING_(): TerminalNode {
		return this.getToken(trinoSqlParser.TRAILING_, 0);
	}
	public BOTH_(): TerminalNode {
		return this.getToken(trinoSqlParser.BOTH_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_trimsSpecification;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTrimsSpecification) {
	 		listener.enterTrimsSpecification(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTrimsSpecification) {
	 		listener.exitTrimsSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTrimsSpecification) {
			return visitor.visitTrimsSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListAggOverflowBehaviorContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ERROR_(): TerminalNode {
		return this.getToken(trinoSqlParser.ERROR_, 0);
	}
	public TRUNCATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TRUNCATE_, 0);
	}
	public listaggCountIndication(): ListaggCountIndicationContext {
		return this.getTypedRuleContext(ListaggCountIndicationContext, 0) as ListaggCountIndicationContext;
	}
	public string_(): String_Context {
		return this.getTypedRuleContext(String_Context, 0) as String_Context;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_listAggOverflowBehavior;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterListAggOverflowBehavior) {
	 		listener.enterListAggOverflowBehavior(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitListAggOverflowBehavior) {
	 		listener.exitListAggOverflowBehavior(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitListAggOverflowBehavior) {
			return visitor.visitListAggOverflowBehavior(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListaggCountIndicationContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COUNT_(): TerminalNode {
		return this.getToken(trinoSqlParser.COUNT_, 0);
	}
	public WITH_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITH_, 0);
	}
	public WITHOUT_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITHOUT_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_listaggCountIndication;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterListaggCountIndication) {
	 		listener.enterListaggCountIndication(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitListaggCountIndication) {
	 		listener.exitListaggCountIndication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitListaggCountIndication) {
			return visitor.visitListaggCountIndication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternRecognitionContext extends ParserRuleContext {
	public _expression!: ExpressionContext;
	public _partition: ExpressionContext[] = [];
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public aliasedRelation(): AliasedRelationContext {
		return this.getTypedRuleContext(AliasedRelationContext, 0) as AliasedRelationContext;
	}
	public MATCH_RECOGNIZE_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATCH_RECOGNIZE_, 0);
	}
	public LPAREN__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.LPAREN_);
	}
	public LPAREN_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, i);
	}
	public PATTERN_(): TerminalNode {
		return this.getToken(trinoSqlParser.PATTERN_, 0);
	}
	public rowPattern(): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, 0) as RowPatternContext;
	}
	public RPAREN__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.RPAREN_);
	}
	public RPAREN_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, i);
	}
	public DEFINE_(): TerminalNode {
		return this.getToken(trinoSqlParser.DEFINE_, 0);
	}
	public variableDefinition_list(): VariableDefinitionContext[] {
		return this.getTypedRuleContexts(VariableDefinitionContext) as VariableDefinitionContext[];
	}
	public variableDefinition(i: number): VariableDefinitionContext {
		return this.getTypedRuleContext(VariableDefinitionContext, i) as VariableDefinitionContext;
	}
	public PARTITION_(): TerminalNode {
		return this.getToken(trinoSqlParser.PARTITION_, 0);
	}
	public BY__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.BY_);
	}
	public BY_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.BY_, i);
	}
	public ORDER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ORDER_, 0);
	}
	public sortItem_list(): SortItemContext[] {
		return this.getTypedRuleContexts(SortItemContext) as SortItemContext[];
	}
	public sortItem(i: number): SortItemContext {
		return this.getTypedRuleContext(SortItemContext, i) as SortItemContext;
	}
	public MEASURES_(): TerminalNode {
		return this.getToken(trinoSqlParser.MEASURES_, 0);
	}
	public measureDefinition_list(): MeasureDefinitionContext[] {
		return this.getTypedRuleContexts(MeasureDefinitionContext) as MeasureDefinitionContext[];
	}
	public measureDefinition(i: number): MeasureDefinitionContext {
		return this.getTypedRuleContext(MeasureDefinitionContext, i) as MeasureDefinitionContext;
	}
	public rowsPerMatch(): RowsPerMatchContext {
		return this.getTypedRuleContext(RowsPerMatchContext, 0) as RowsPerMatchContext;
	}
	public AFTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.AFTER_, 0);
	}
	public MATCH_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATCH_, 0);
	}
	public skipTo(): SkipToContext {
		return this.getTypedRuleContext(SkipToContext, 0) as SkipToContext;
	}
	public SUBSET_(): TerminalNode {
		return this.getToken(trinoSqlParser.SUBSET_, 0);
	}
	public subsetDefinition_list(): SubsetDefinitionContext[] {
		return this.getTypedRuleContexts(SubsetDefinitionContext) as SubsetDefinitionContext[];
	}
	public subsetDefinition(i: number): SubsetDefinitionContext {
		return this.getTypedRuleContext(SubsetDefinitionContext, i) as SubsetDefinitionContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public INITIAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.INITIAL_, 0);
	}
	public SEEK_(): TerminalNode {
		return this.getToken(trinoSqlParser.SEEK_, 0);
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_patternRecognition;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPatternRecognition) {
	 		listener.enterPatternRecognition(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPatternRecognition) {
	 		listener.exitPatternRecognition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPatternRecognition) {
			return visitor.visitPatternRecognition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MeasureDefinitionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_measureDefinition;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterMeasureDefinition) {
	 		listener.enterMeasureDefinition(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitMeasureDefinition) {
	 		listener.exitMeasureDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitMeasureDefinition) {
			return visitor.visitMeasureDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowsPerMatchContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ONE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ONE_, 0);
	}
	public ROW_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROW_, 0);
	}
	public PER_(): TerminalNode {
		return this.getToken(trinoSqlParser.PER_, 0);
	}
	public MATCH_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATCH_, 0);
	}
	public ALL_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALL_, 0);
	}
	public ROWS_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROWS_, 0);
	}
	public emptyMatchHandling(): EmptyMatchHandlingContext {
		return this.getTypedRuleContext(EmptyMatchHandlingContext, 0) as EmptyMatchHandlingContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_rowsPerMatch;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRowsPerMatch) {
	 		listener.enterRowsPerMatch(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRowsPerMatch) {
	 		listener.exitRowsPerMatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRowsPerMatch) {
			return visitor.visitRowsPerMatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyMatchHandlingContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.SHOW_, 0);
	}
	public EMPTY_(): TerminalNode {
		return this.getToken(trinoSqlParser.EMPTY_, 0);
	}
	public MATCHES_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATCHES_, 0);
	}
	public OMIT_(): TerminalNode {
		return this.getToken(trinoSqlParser.OMIT_, 0);
	}
	public WITH_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITH_, 0);
	}
	public UNMATCHED_(): TerminalNode {
		return this.getToken(trinoSqlParser.UNMATCHED_, 0);
	}
	public ROWS_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROWS_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_emptyMatchHandling;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterEmptyMatchHandling) {
	 		listener.enterEmptyMatchHandling(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitEmptyMatchHandling) {
	 		listener.exitEmptyMatchHandling(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitEmptyMatchHandling) {
			return visitor.visitEmptyMatchHandling(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SkipToContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SKIP_(): TerminalNode {
		return this.getToken(trinoSqlParser.SKIP_, 0);
	}
	public TO_(): TerminalNode {
		return this.getToken(trinoSqlParser.TO_, 0);
	}
	public PAST_(): TerminalNode {
		return this.getToken(trinoSqlParser.PAST_, 0);
	}
	public LAST_(): TerminalNode {
		return this.getToken(trinoSqlParser.LAST_, 0);
	}
	public ROW_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROW_, 0);
	}
	public NEXT_(): TerminalNode {
		return this.getToken(trinoSqlParser.NEXT_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public FIRST_(): TerminalNode {
		return this.getToken(trinoSqlParser.FIRST_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_skipTo;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSkipTo) {
	 		listener.enterSkipTo(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSkipTo) {
	 		listener.exitSkipTo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
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
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ_(): TerminalNode {
		return this.getToken(trinoSqlParser.EQ_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_subsetDefinition;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSubsetDefinition) {
	 		listener.enterSubsetDefinition(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSubsetDefinition) {
	 		listener.exitSubsetDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSubsetDefinition) {
			return visitor.visitSubsetDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDefinitionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_variableDefinition;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterVariableDefinition) {
	 		listener.enterVariableDefinition(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitVariableDefinition) {
	 		listener.exitVariableDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitVariableDefinition) {
			return visitor.visitVariableDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasedRelationContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationPrimary(): RelationPrimaryContext {
		return this.getTypedRuleContext(RelationPrimaryContext, 0) as RelationPrimaryContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_aliasedRelation;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterAliasedRelation) {
	 		listener.enterAliasedRelation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitAliasedRelation) {
	 		listener.exitAliasedRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitAliasedRelation) {
			return visitor.visitAliasedRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnAliasesContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_columnAliases;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterColumnAliases) {
	 		listener.enterColumnAliases(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitColumnAliases) {
	 		listener.exitColumnAliases(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnAliases) {
			return visitor.visitColumnAliases(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationPrimaryContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_relationPrimary;
	}
	public copyFrom(ctx: RelationPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class SubqueryRelationContext extends RelationPrimaryContext {
	constructor(parser: trinoSqlParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSubqueryRelation) {
	 		listener.enterSubqueryRelation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSubqueryRelation) {
	 		listener.exitSubqueryRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSubqueryRelation) {
			return visitor.visitSubqueryRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedRelationContext extends RelationPrimaryContext {
	constructor(parser: trinoSqlParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public relation(): RelationContext {
		return this.getTypedRuleContext(RelationContext, 0) as RelationContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterParenthesizedRelation) {
	 		listener.enterParenthesizedRelation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitParenthesizedRelation) {
	 		listener.exitParenthesizedRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedRelation) {
			return visitor.visitParenthesizedRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnnestContext extends RelationPrimaryContext {
	constructor(parser: trinoSqlParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UNNEST_(): TerminalNode {
		return this.getToken(trinoSqlParser.UNNEST_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public WITH_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITH_, 0);
	}
	public ORDINALITY_(): TerminalNode {
		return this.getToken(trinoSqlParser.ORDINALITY_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUnnest) {
	 		listener.enterUnnest(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUnnest) {
	 		listener.exitUnnest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUnnest) {
			return visitor.visitUnnest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableFunctionInvocationContext extends RelationPrimaryContext {
	constructor(parser: trinoSqlParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public tableFunctionCall(): TableFunctionCallContext {
		return this.getTypedRuleContext(TableFunctionCallContext, 0) as TableFunctionCallContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTableFunctionInvocation) {
	 		listener.enterTableFunctionInvocation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTableFunctionInvocation) {
	 		listener.exitTableFunctionInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTableFunctionInvocation) {
			return visitor.visitTableFunctionInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LateralContext extends RelationPrimaryContext {
	constructor(parser: trinoSqlParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LATERAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.LATERAL_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterLateral) {
	 		listener.enterLateral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitLateral) {
	 		listener.exitLateral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitLateral) {
			return visitor.visitLateral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableNameContext extends RelationPrimaryContext {
	constructor(parser: trinoSqlParser, ctx: RelationPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public queryPeriod(): QueryPeriodContext {
		return this.getTypedRuleContext(QueryPeriodContext, 0) as QueryPeriodContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTableName) {
	 		listener.enterTableName(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTableName) {
	 		listener.exitTableName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTableName) {
			return visitor.visitTableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableFunctionCallContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public tableFunctionArgument_list(): TableFunctionArgumentContext[] {
		return this.getTypedRuleContexts(TableFunctionArgumentContext) as TableFunctionArgumentContext[];
	}
	public tableFunctionArgument(i: number): TableFunctionArgumentContext {
		return this.getTypedRuleContext(TableFunctionArgumentContext, i) as TableFunctionArgumentContext;
	}
	public COPARTITION_(): TerminalNode {
		return this.getToken(trinoSqlParser.COPARTITION_, 0);
	}
	public copartitionTables_list(): CopartitionTablesContext[] {
		return this.getTypedRuleContexts(CopartitionTablesContext) as CopartitionTablesContext[];
	}
	public copartitionTables(i: number): CopartitionTablesContext {
		return this.getTypedRuleContext(CopartitionTablesContext, i) as CopartitionTablesContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_tableFunctionCall;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTableFunctionCall) {
	 		listener.enterTableFunctionCall(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTableFunctionCall) {
	 		listener.exitTableFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTableFunctionCall) {
			return visitor.visitTableFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableFunctionArgumentContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tableArgument(): TableArgumentContext {
		return this.getTypedRuleContext(TableArgumentContext, 0) as TableArgumentContext;
	}
	public descriptorArgument(): DescriptorArgumentContext {
		return this.getTypedRuleContext(DescriptorArgumentContext, 0) as DescriptorArgumentContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public RDOUBLEARROW_(): TerminalNode {
		return this.getToken(trinoSqlParser.RDOUBLEARROW_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_tableFunctionArgument;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTableFunctionArgument) {
	 		listener.enterTableFunctionArgument(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTableFunctionArgument) {
	 		listener.exitTableFunctionArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTableFunctionArgument) {
			return visitor.visitTableFunctionArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableArgumentContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tableArgumentRelation(): TableArgumentRelationContext {
		return this.getTypedRuleContext(TableArgumentRelationContext, 0) as TableArgumentRelationContext;
	}
	public PARTITION_(): TerminalNode {
		return this.getToken(trinoSqlParser.PARTITION_, 0);
	}
	public BY__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.BY_);
	}
	public BY_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.BY_, i);
	}
	public PRUNE_(): TerminalNode {
		return this.getToken(trinoSqlParser.PRUNE_, 0);
	}
	public WHEN_(): TerminalNode {
		return this.getToken(trinoSqlParser.WHEN_, 0);
	}
	public EMPTY_(): TerminalNode {
		return this.getToken(trinoSqlParser.EMPTY_, 0);
	}
	public KEEP_(): TerminalNode {
		return this.getToken(trinoSqlParser.KEEP_, 0);
	}
	public ORDER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ORDER_, 0);
	}
	public LPAREN__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.LPAREN_);
	}
	public LPAREN_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, i);
	}
	public RPAREN__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.RPAREN_);
	}
	public RPAREN_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public sortItem_list(): SortItemContext[] {
		return this.getTypedRuleContexts(SortItemContext) as SortItemContext[];
	}
	public sortItem(i: number): SortItemContext {
		return this.getTypedRuleContext(SortItemContext, i) as SortItemContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_tableArgument;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTableArgument) {
	 		listener.enterTableArgument(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTableArgument) {
	 		listener.exitTableArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTableArgument) {
			return visitor.visitTableArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableArgumentRelationContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_tableArgumentRelation;
	}
	public copyFrom(ctx: TableArgumentRelationContext): void {
		super.copyFrom(ctx);
	}
}
export class TableArgumentQueryContext extends TableArgumentRelationContext {
	constructor(parser: trinoSqlParser, ctx: TableArgumentRelationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTableArgumentQuery) {
	 		listener.enterTableArgumentQuery(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTableArgumentQuery) {
	 		listener.exitTableArgumentQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTableArgumentQuery) {
			return visitor.visitTableArgumentQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableArgumentTableContext extends TableArgumentRelationContext {
	constructor(parser: trinoSqlParser, ctx: TableArgumentRelationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLE_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
	public columnAliases(): ColumnAliasesContext {
		return this.getTypedRuleContext(ColumnAliasesContext, 0) as ColumnAliasesContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTableArgumentTable) {
	 		listener.enterTableArgumentTable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTableArgumentTable) {
	 		listener.exitTableArgumentTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTableArgumentTable) {
			return visitor.visitTableArgumentTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescriptorArgumentContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DESCRIPTOR_(): TerminalNode {
		return this.getToken(trinoSqlParser.DESCRIPTOR_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public descriptorField_list(): DescriptorFieldContext[] {
		return this.getTypedRuleContexts(DescriptorFieldContext) as DescriptorFieldContext[];
	}
	public descriptorField(i: number): DescriptorFieldContext {
		return this.getTypedRuleContext(DescriptorFieldContext, i) as DescriptorFieldContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public CAST_(): TerminalNode {
		return this.getToken(trinoSqlParser.CAST_, 0);
	}
	public NULL_(): TerminalNode {
		return this.getToken(trinoSqlParser.NULL_, 0);
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_descriptorArgument;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDescriptorArgument) {
	 		listener.enterDescriptorArgument(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDescriptorArgument) {
	 		listener.exitDescriptorArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDescriptorArgument) {
			return visitor.visitDescriptorArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescriptorFieldContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_descriptorField;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDescriptorField) {
	 		listener.enterDescriptorField(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDescriptorField) {
	 		listener.exitDescriptorField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDescriptorField) {
			return visitor.visitDescriptorField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CopartitionTablesContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_copartitionTables;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCopartitionTables) {
	 		listener.enterCopartitionTables(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCopartitionTables) {
	 		listener.exitCopartitionTables(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCopartitionTables) {
			return visitor.visitCopartitionTables(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_expression;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_booleanExpression;
	}
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	constructor(parser: trinoSqlParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.NOT_, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterLogicalNot) {
	 		listener.enterLogicalNot(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitLogicalNot) {
	 		listener.exitLogicalNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitLogicalNot) {
			return visitor.visitLogicalNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredicatedContext extends BooleanExpressionContext {
	constructor(parser: trinoSqlParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public predicate_(): Predicate_Context {
		return this.getTypedRuleContext(Predicate_Context, 0) as Predicate_Context;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPredicated) {
	 		listener.enterPredicated(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPredicated) {
	 		listener.exitPredicated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPredicated) {
			return visitor.visitPredicated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrContext extends BooleanExpressionContext {
	constructor(parser: trinoSqlParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanExpression_list(): BooleanExpressionContext[] {
		return this.getTypedRuleContexts(BooleanExpressionContext) as BooleanExpressionContext[];
	}
	public booleanExpression(i: number): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, i) as BooleanExpressionContext;
	}
	public OR_(): TerminalNode {
		return this.getToken(trinoSqlParser.OR_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterOr) {
	 		listener.enterOr(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitOr) {
	 		listener.exitOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitOr) {
			return visitor.visitOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndContext extends BooleanExpressionContext {
	constructor(parser: trinoSqlParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanExpression_list(): BooleanExpressionContext[] {
		return this.getTypedRuleContexts(BooleanExpressionContext) as BooleanExpressionContext[];
	}
	public booleanExpression(i: number): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, i) as BooleanExpressionContext;
	}
	public AND_(): TerminalNode {
		return this.getToken(trinoSqlParser.AND_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterAnd) {
	 		listener.enterAnd(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitAnd) {
	 		listener.exitAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitAnd) {
			return visitor.visitAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Predicate_Context extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_predicate_;
	}
	public copyFrom(ctx: Predicate_Context): void {
		super.copyFrom(ctx);
	}
}
export class ComparisonContext extends Predicate_Context {
	public _right!: ValueExpressionContext;
	constructor(parser: trinoSqlParser, ctx: Predicate_Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext;
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterComparison) {
	 		listener.enterComparison(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitComparison) {
	 		listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LikeContext extends Predicate_Context {
	public _pattern!: ValueExpressionContext;
	public _escape!: ValueExpressionContext;
	constructor(parser: trinoSqlParser, ctx: Predicate_Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LIKE_(): TerminalNode {
		return this.getToken(trinoSqlParser.LIKE_, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public NOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.NOT_, 0);
	}
	public ESCAPE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ESCAPE_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterLike) {
	 		listener.enterLike(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitLike) {
	 		listener.exitLike(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitLike) {
			return visitor.visitLike(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InSubqueryContext extends Predicate_Context {
	constructor(parser: trinoSqlParser, ctx: Predicate_Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IN_(): TerminalNode {
		return this.getToken(trinoSqlParser.IN_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.NOT_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterInSubquery) {
	 		listener.enterInSubquery(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitInSubquery) {
	 		listener.exitInSubquery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitInSubquery) {
			return visitor.visitInSubquery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DistinctFromContext extends Predicate_Context {
	public _right!: ValueExpressionContext;
	constructor(parser: trinoSqlParser, ctx: Predicate_Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IS_(): TerminalNode {
		return this.getToken(trinoSqlParser.IS_, 0);
	}
	public DISTINCT_(): TerminalNode {
		return this.getToken(trinoSqlParser.DISTINCT_, 0);
	}
	public FROM_(): TerminalNode {
		return this.getToken(trinoSqlParser.FROM_, 0);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public NOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.NOT_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDistinctFrom) {
	 		listener.enterDistinctFrom(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDistinctFrom) {
	 		listener.exitDistinctFrom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDistinctFrom) {
			return visitor.visitDistinctFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InListContext extends Predicate_Context {
	constructor(parser: trinoSqlParser, ctx: Predicate_Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IN_(): TerminalNode {
		return this.getToken(trinoSqlParser.IN_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.NOT_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterInList) {
	 		listener.enterInList(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitInList) {
	 		listener.exitInList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitInList) {
			return visitor.visitInList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullPredicateContext extends Predicate_Context {
	constructor(parser: trinoSqlParser, ctx: Predicate_Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IS_(): TerminalNode {
		return this.getToken(trinoSqlParser.IS_, 0);
	}
	public NULL_(): TerminalNode {
		return this.getToken(trinoSqlParser.NULL_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.NOT_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNullPredicate) {
	 		listener.enterNullPredicate(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNullPredicate) {
	 		listener.exitNullPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNullPredicate) {
			return visitor.visitNullPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BetweenContext extends Predicate_Context {
	public _lower!: ValueExpressionContext;
	public _upper!: ValueExpressionContext;
	constructor(parser: trinoSqlParser, ctx: Predicate_Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BETWEEN_(): TerminalNode {
		return this.getToken(trinoSqlParser.BETWEEN_, 0);
	}
	public AND_(): TerminalNode {
		return this.getToken(trinoSqlParser.AND_, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public NOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.NOT_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterBetween) {
	 		listener.enterBetween(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitBetween) {
	 		listener.exitBetween(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitBetween) {
			return visitor.visitBetween(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuantifiedComparisonContext extends Predicate_Context {
	constructor(parser: trinoSqlParser, ctx: Predicate_Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext;
	}
	public comparisonQuantifier(): ComparisonQuantifierContext {
		return this.getTypedRuleContext(ComparisonQuantifierContext, 0) as ComparisonQuantifierContext;
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQuantifiedComparison) {
	 		listener.enterQuantifiedComparison(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQuantifiedComparison) {
	 		listener.exitQuantifiedComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQuantifiedComparison) {
			return visitor.visitQuantifiedComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueExpressionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_valueExpression;
	}
	public copyFrom(ctx: ValueExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
	constructor(parser: trinoSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterValueExpressionDefault) {
	 		listener.enterValueExpressionDefault(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitValueExpressionDefault) {
	 		listener.exitValueExpressionDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitValueExpressionDefault) {
			return visitor.visitValueExpressionDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConcatenationContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _right!: ValueExpressionContext;
	constructor(parser: trinoSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CONCAT_(): TerminalNode {
		return this.getToken(trinoSqlParser.CONCAT_, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterConcatenation) {
	 		listener.enterConcatenation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitConcatenation) {
	 		listener.exitConcatenation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitConcatenation) {
			return visitor.visitConcatenation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _operator!: Token;
	public _right!: ValueExpressionContext;
	constructor(parser: trinoSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public ASTERISK_(): TerminalNode {
		return this.getToken(trinoSqlParser.ASTERISK_, 0);
	}
	public SLASH_(): TerminalNode {
		return this.getToken(trinoSqlParser.SLASH_, 0);
	}
	public PERCENT_(): TerminalNode {
		return this.getToken(trinoSqlParser.PERCENT_, 0);
	}
	public PLUS_(): TerminalNode {
		return this.getToken(trinoSqlParser.PLUS_, 0);
	}
	public MINUS_(): TerminalNode {
		return this.getToken(trinoSqlParser.MINUS_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterArithmeticBinary) {
	 		listener.enterArithmeticBinary(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitArithmeticBinary) {
	 		listener.exitArithmeticBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitArithmeticBinary) {
			return visitor.visitArithmeticBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
	public _operator!: Token;
	constructor(parser: trinoSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public MINUS_(): TerminalNode {
		return this.getToken(trinoSqlParser.MINUS_, 0);
	}
	public PLUS_(): TerminalNode {
		return this.getToken(trinoSqlParser.PLUS_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterArithmeticUnary) {
	 		listener.enterArithmeticUnary(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitArithmeticUnary) {
	 		listener.exitArithmeticUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitArithmeticUnary) {
			return visitor.visitArithmeticUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AtTimeZoneContext extends ValueExpressionContext {
	constructor(parser: trinoSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public AT_(): TerminalNode {
		return this.getToken(trinoSqlParser.AT_, 0);
	}
	public timeZoneSpecifier(): TimeZoneSpecifierContext {
		return this.getTypedRuleContext(TimeZoneSpecifierContext, 0) as TimeZoneSpecifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterAtTimeZone) {
	 		listener.enterAtTimeZone(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitAtTimeZone) {
	 		listener.exitAtTimeZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitAtTimeZone) {
			return visitor.visitAtTimeZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_primaryExpression;
	}
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class DereferenceContext extends PrimaryExpressionContext {
	public _base_!: PrimaryExpressionContext;
	public _fieldName!: IdentifierContext;
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.DOT_, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDereference) {
	 		listener.enterDereference(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDereference) {
	 		listener.exitDereference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDereference) {
			return visitor.visitDereference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeConstructorContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public string_(): String_Context {
		return this.getTypedRuleContext(String_Context, 0) as String_Context;
	}
	public DOUBLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.DOUBLE_, 0);
	}
	public PRECISION_(): TerminalNode {
		return this.getToken(trinoSqlParser.PRECISION_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTypeConstructor) {
	 		listener.enterTypeConstructor(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTypeConstructor) {
	 		listener.exitTypeConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTypeConstructor) {
			return visitor.visitTypeConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JsonValueContext extends PrimaryExpressionContext {
	public _emptyBehavior!: JsonValueBehaviorContext;
	public _errorBehavior!: JsonValueBehaviorContext;
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public JSON_VALUE_(): TerminalNode {
		return this.getToken(trinoSqlParser.JSON_VALUE_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public jsonPathInvocation(): JsonPathInvocationContext {
		return this.getTypedRuleContext(JsonPathInvocationContext, 0) as JsonPathInvocationContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public RETURNING_(): TerminalNode {
		return this.getToken(trinoSqlParser.RETURNING_, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public ON__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.ON_);
	}
	public ON_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.ON_, i);
	}
	public EMPTY_(): TerminalNode {
		return this.getToken(trinoSqlParser.EMPTY_, 0);
	}
	public ERROR_(): TerminalNode {
		return this.getToken(trinoSqlParser.ERROR_, 0);
	}
	public jsonValueBehavior_list(): JsonValueBehaviorContext[] {
		return this.getTypedRuleContexts(JsonValueBehaviorContext) as JsonValueBehaviorContext[];
	}
	public jsonValueBehavior(i: number): JsonValueBehaviorContext {
		return this.getTypedRuleContext(JsonValueBehaviorContext, i) as JsonValueBehaviorContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJsonValue) {
	 		listener.enterJsonValue(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJsonValue) {
	 		listener.exitJsonValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJsonValue) {
			return visitor.visitJsonValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SpecialDateTimeFunctionContext extends PrimaryExpressionContext {
	public _name!: Token;
	public _precision!: Token;
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_DATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CURRENT_DATE_, 0);
	}
	public CURRENT_TIME_(): TerminalNode {
		return this.getToken(trinoSqlParser.CURRENT_TIME_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public INTEGER_VALUE_(): TerminalNode {
		return this.getToken(trinoSqlParser.INTEGER_VALUE_, 0);
	}
	public CURRENT_TIMESTAMP_(): TerminalNode {
		return this.getToken(trinoSqlParser.CURRENT_TIMESTAMP_, 0);
	}
	public LOCALTIME_(): TerminalNode {
		return this.getToken(trinoSqlParser.LOCALTIME_, 0);
	}
	public LOCALTIMESTAMP_(): TerminalNode {
		return this.getToken(trinoSqlParser.LOCALTIMESTAMP_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSpecialDateTimeFunction) {
	 		listener.enterSpecialDateTimeFunction(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSpecialDateTimeFunction) {
	 		listener.exitSpecialDateTimeFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSpecialDateTimeFunction) {
			return visitor.visitSpecialDateTimeFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubstringContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SUBSTRING_(): TerminalNode {
		return this.getToken(trinoSqlParser.SUBSTRING_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public FROM_(): TerminalNode {
		return this.getToken(trinoSqlParser.FROM_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public FOR_(): TerminalNode {
		return this.getToken(trinoSqlParser.FOR_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSubstring) {
	 		listener.enterSubstring(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSubstring) {
	 		listener.exitSubstring(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSubstring) {
			return visitor.visitSubstring(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CAST_(): TerminalNode {
		return this.getToken(trinoSqlParser.CAST_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public TRY_CAST_(): TerminalNode {
		return this.getToken(trinoSqlParser.TRY_CAST_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCast) {
	 		listener.enterCast(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCast) {
	 		listener.exitCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCast) {
			return visitor.visitCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public RARROW_(): TerminalNode {
		return this.getToken(trinoSqlParser.RARROW_, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterLambda) {
	 		listener.enterLambda(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitLambda) {
	 		listener.exitLambda(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitLambda) {
			return visitor.visitLambda(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterParenthesizedExpression) {
	 		listener.enterParenthesizedExpression(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitParenthesizedExpression) {
	 		listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TrimContext extends PrimaryExpressionContext {
	public _trimChar!: ValueExpressionContext;
	public _trimSource!: ValueExpressionContext;
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TRIM_(): TerminalNode {
		return this.getToken(trinoSqlParser.TRIM_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public FROM_(): TerminalNode {
		return this.getToken(trinoSqlParser.FROM_, 0);
	}
	public trimsSpecification(): TrimsSpecificationContext {
		return this.getTypedRuleContext(TrimsSpecificationContext, 0) as TrimsSpecificationContext;
	}
	public COMMA_(): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTrim) {
	 		listener.enterTrim(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTrim) {
	 		listener.exitTrim(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTrim) {
			return visitor.visitTrim(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParameterContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public QUESTION_MARK_(): TerminalNode {
		return this.getToken(trinoSqlParser.QUESTION_MARK_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NormalizeContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NORMALIZE_(): TerminalNode {
		return this.getToken(trinoSqlParser.NORMALIZE_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public COMMA_(): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, 0);
	}
	public normalForm(): NormalFormContext {
		return this.getTypedRuleContext(NormalFormContext, 0) as NormalFormContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNormalize) {
	 		listener.enterNormalize(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNormalize) {
	 		listener.exitNormalize(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNormalize) {
			return visitor.visitNormalize(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JsonObjectContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public JSON_OBJECT_(): TerminalNode {
		return this.getToken(trinoSqlParser.JSON_OBJECT_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public jsonObjectMember_list(): JsonObjectMemberContext[] {
		return this.getTypedRuleContexts(JsonObjectMemberContext) as JsonObjectMemberContext[];
	}
	public jsonObjectMember(i: number): JsonObjectMemberContext {
		return this.getTypedRuleContext(JsonObjectMemberContext, i) as JsonObjectMemberContext;
	}
	public RETURNING_(): TerminalNode {
		return this.getToken(trinoSqlParser.RETURNING_, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public NULL__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.NULL_);
	}
	public NULL_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.NULL_, i);
	}
	public ON_(): TerminalNode {
		return this.getToken(trinoSqlParser.ON_, 0);
	}
	public ABSENT_(): TerminalNode {
		return this.getToken(trinoSqlParser.ABSENT_, 0);
	}
	public WITH_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITH_, 0);
	}
	public UNIQUE_(): TerminalNode {
		return this.getToken(trinoSqlParser.UNIQUE_, 0);
	}
	public WITHOUT_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITHOUT_, 0);
	}
	public FORMAT_(): TerminalNode {
		return this.getToken(trinoSqlParser.FORMAT_, 0);
	}
	public jsonRepresentation(): JsonRepresentationContext {
		return this.getTypedRuleContext(JsonRepresentationContext, 0) as JsonRepresentationContext;
	}
	public KEYS_(): TerminalNode {
		return this.getToken(trinoSqlParser.KEYS_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJsonObject) {
	 		listener.enterJsonObject(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJsonObject) {
	 		listener.exitJsonObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJsonObject) {
			return visitor.visitJsonObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntervalLiteralContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public interval(): IntervalContext {
		return this.getTypedRuleContext(IntervalContext, 0) as IntervalContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterIntervalLiteral) {
	 		listener.enterIntervalLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitIntervalLiteral) {
	 		listener.exitIntervalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitIntervalLiteral) {
			return visitor.visitIntervalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericLiteralContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNumericLiteral) {
	 		listener.enterNumericLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNumericLiteral) {
	 		listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanValue(): BooleanValueContext {
		return this.getTypedRuleContext(BooleanValueContext, 0) as BooleanValueContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterBooleanLiteral) {
	 		listener.enterBooleanLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitBooleanLiteral) {
	 		listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JsonArrayContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public JSON_ARRAY_(): TerminalNode {
		return this.getToken(trinoSqlParser.JSON_ARRAY_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public jsonValueExpression_list(): JsonValueExpressionContext[] {
		return this.getTypedRuleContexts(JsonValueExpressionContext) as JsonValueExpressionContext[];
	}
	public jsonValueExpression(i: number): JsonValueExpressionContext {
		return this.getTypedRuleContext(JsonValueExpressionContext, i) as JsonValueExpressionContext;
	}
	public RETURNING_(): TerminalNode {
		return this.getToken(trinoSqlParser.RETURNING_, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public NULL__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.NULL_);
	}
	public NULL_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.NULL_, i);
	}
	public ON_(): TerminalNode {
		return this.getToken(trinoSqlParser.ON_, 0);
	}
	public ABSENT_(): TerminalNode {
		return this.getToken(trinoSqlParser.ABSENT_, 0);
	}
	public FORMAT_(): TerminalNode {
		return this.getToken(trinoSqlParser.FORMAT_, 0);
	}
	public jsonRepresentation(): JsonRepresentationContext {
		return this.getTypedRuleContext(JsonRepresentationContext, 0) as JsonRepresentationContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJsonArray) {
	 		listener.enterJsonArray(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJsonArray) {
	 		listener.exitJsonArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJsonArray) {
			return visitor.visitJsonArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleCaseContext extends PrimaryExpressionContext {
	public _operand!: ExpressionContext;
	public _elseExpression!: ExpressionContext;
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CASE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CASE_, 0);
	}
	public END_(): TerminalNode {
		return this.getToken(trinoSqlParser.END_, 0);
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
	public ELSE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ELSE_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSimpleCase) {
	 		listener.enterSimpleCase(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSimpleCase) {
	 		listener.exitSimpleCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSimpleCase) {
			return visitor.visitSimpleCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterColumnReference) {
	 		listener.enterColumnReference(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitColumnReference) {
	 		listener.exitColumnReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnReference) {
			return visitor.visitColumnReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullLiteralContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NULL_(): TerminalNode {
		return this.getToken(trinoSqlParser.NULL_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNullLiteral) {
	 		listener.enterNullLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNullLiteral) {
	 		listener.exitNullLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNullLiteral) {
			return visitor.visitNullLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RowConstructorContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public ROW_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROW_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRowConstructor) {
	 		listener.enterRowConstructor(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRowConstructor) {
	 		listener.exitRowConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRowConstructor) {
			return visitor.visitRowConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubscriptContext extends PrimaryExpressionContext {
	public _value!: PrimaryExpressionContext;
	public _index!: ValueExpressionContext;
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LSQUARE_(): TerminalNode {
		return this.getToken(trinoSqlParser.LSQUARE_, 0);
	}
	public RSQUARE_(): TerminalNode {
		return this.getToken(trinoSqlParser.RSQUARE_, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSubscript) {
	 		listener.enterSubscript(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSubscript) {
	 		listener.exitSubscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSubscript) {
			return visitor.visitSubscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JsonExistsContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public JSON_EXISTS_(): TerminalNode {
		return this.getToken(trinoSqlParser.JSON_EXISTS_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public jsonPathInvocation(): JsonPathInvocationContext {
		return this.getTypedRuleContext(JsonPathInvocationContext, 0) as JsonPathInvocationContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public jsonExistsErrorBehavior(): JsonExistsErrorBehaviorContext {
		return this.getTypedRuleContext(JsonExistsErrorBehaviorContext, 0) as JsonExistsErrorBehaviorContext;
	}
	public ON_(): TerminalNode {
		return this.getToken(trinoSqlParser.ON_, 0);
	}
	public ERROR_(): TerminalNode {
		return this.getToken(trinoSqlParser.ERROR_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJsonExists) {
	 		listener.enterJsonExists(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJsonExists) {
	 		listener.exitJsonExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJsonExists) {
			return visitor.visitJsonExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentPathContext extends PrimaryExpressionContext {
	public _name!: Token;
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_PATH_(): TerminalNode {
		return this.getToken(trinoSqlParser.CURRENT_PATH_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCurrentPath) {
	 		listener.enterCurrentPath(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCurrentPath) {
	 		listener.exitCurrentPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCurrentPath) {
			return visitor.visitCurrentPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSubqueryExpression) {
	 		listener.enterSubqueryExpression(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSubqueryExpression) {
	 		listener.exitSubqueryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSubqueryExpression) {
			return visitor.visitSubqueryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryLiteralContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BINARY_LITERAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.BINARY_LITERAL_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterBinaryLiteral) {
	 		listener.enterBinaryLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitBinaryLiteral) {
	 		listener.exitBinaryLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitBinaryLiteral) {
			return visitor.visitBinaryLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentUserContext extends PrimaryExpressionContext {
	public _name!: Token;
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_USER_(): TerminalNode {
		return this.getToken(trinoSqlParser.CURRENT_USER_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCurrentUser) {
	 		listener.enterCurrentUser(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCurrentUser) {
	 		listener.exitCurrentUser(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCurrentUser) {
			return visitor.visitCurrentUser(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JsonQueryContext extends PrimaryExpressionContext {
	public _emptyBehavior!: JsonQueryBehaviorContext;
	public _errorBehavior!: JsonQueryBehaviorContext;
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public JSON_QUERY_(): TerminalNode {
		return this.getToken(trinoSqlParser.JSON_QUERY_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public jsonPathInvocation(): JsonPathInvocationContext {
		return this.getTypedRuleContext(JsonPathInvocationContext, 0) as JsonPathInvocationContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public RETURNING_(): TerminalNode {
		return this.getToken(trinoSqlParser.RETURNING_, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public jsonQueryWrapperBehavior(): JsonQueryWrapperBehaviorContext {
		return this.getTypedRuleContext(JsonQueryWrapperBehaviorContext, 0) as JsonQueryWrapperBehaviorContext;
	}
	public WRAPPER_(): TerminalNode {
		return this.getToken(trinoSqlParser.WRAPPER_, 0);
	}
	public QUOTES_(): TerminalNode {
		return this.getToken(trinoSqlParser.QUOTES_, 0);
	}
	public ON__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.ON_);
	}
	public ON_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.ON_, i);
	}
	public EMPTY_(): TerminalNode {
		return this.getToken(trinoSqlParser.EMPTY_, 0);
	}
	public ERROR_(): TerminalNode {
		return this.getToken(trinoSqlParser.ERROR_, 0);
	}
	public KEEP_(): TerminalNode {
		return this.getToken(trinoSqlParser.KEEP_, 0);
	}
	public OMIT_(): TerminalNode {
		return this.getToken(trinoSqlParser.OMIT_, 0);
	}
	public jsonQueryBehavior_list(): JsonQueryBehaviorContext[] {
		return this.getTypedRuleContexts(JsonQueryBehaviorContext) as JsonQueryBehaviorContext[];
	}
	public jsonQueryBehavior(i: number): JsonQueryBehaviorContext {
		return this.getTypedRuleContext(JsonQueryBehaviorContext, i) as JsonQueryBehaviorContext;
	}
	public FORMAT_(): TerminalNode {
		return this.getToken(trinoSqlParser.FORMAT_, 0);
	}
	public jsonRepresentation(): JsonRepresentationContext {
		return this.getTypedRuleContext(JsonRepresentationContext, 0) as JsonRepresentationContext;
	}
	public SCALAR_(): TerminalNode {
		return this.getToken(trinoSqlParser.SCALAR_, 0);
	}
	public TEXT_STRING_(): TerminalNode {
		return this.getToken(trinoSqlParser.TEXT_STRING_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJsonQuery) {
	 		listener.enterJsonQuery(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJsonQuery) {
	 		listener.exitJsonQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJsonQuery) {
			return visitor.visitJsonQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MeasureContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public over(): OverContext {
		return this.getTypedRuleContext(OverContext, 0) as OverContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterMeasure) {
	 		listener.enterMeasure(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitMeasure) {
	 		listener.exitMeasure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitMeasure) {
			return visitor.visitMeasure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExtractContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXTRACT_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXTRACT_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public FROM_(): TerminalNode {
		return this.getToken(trinoSqlParser.FROM_, 0);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterExtract) {
	 		listener.enterExtract(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitExtract) {
	 		listener.exitExtract(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitExtract) {
			return visitor.visitExtract(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public string_(): String_Context {
		return this.getTypedRuleContext(String_Context, 0) as String_Context;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterStringLiteral) {
	 		listener.enterStringLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitStringLiteral) {
	 		listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayConstructorContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ARRAY_(): TerminalNode {
		return this.getToken(trinoSqlParser.ARRAY_, 0);
	}
	public LSQUARE_(): TerminalNode {
		return this.getToken(trinoSqlParser.LSQUARE_, 0);
	}
	public RSQUARE_(): TerminalNode {
		return this.getToken(trinoSqlParser.RSQUARE_, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterArrayConstructor) {
	 		listener.enterArrayConstructor(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitArrayConstructor) {
	 		listener.exitArrayConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitArrayConstructor) {
			return visitor.visitArrayConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends PrimaryExpressionContext {
	public _label!: IdentifierContext;
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public ASTERISK_(): TerminalNode {
		return this.getToken(trinoSqlParser.ASTERISK_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public processingMode(): ProcessingModeContext {
		return this.getTypedRuleContext(ProcessingModeContext, 0) as ProcessingModeContext;
	}
	public DOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.DOT_, 0);
	}
	public filter(): FilterContext {
		return this.getTypedRuleContext(FilterContext, 0) as FilterContext;
	}
	public over(): OverContext {
		return this.getTypedRuleContext(OverContext, 0) as OverContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public ORDER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ORDER_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(trinoSqlParser.BY_, 0);
	}
	public sortItem_list(): SortItemContext[] {
		return this.getTypedRuleContexts(SortItemContext) as SortItemContext[];
	}
	public sortItem(i: number): SortItemContext {
		return this.getTypedRuleContext(SortItemContext, i) as SortItemContext;
	}
	public setQuantifier(): SetQuantifierContext {
		return this.getTypedRuleContext(SetQuantifierContext, 0) as SetQuantifierContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public nullTreatment(): NullTreatmentContext {
		return this.getTypedRuleContext(NullTreatmentContext, 0) as NullTreatmentContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentSchemaContext extends PrimaryExpressionContext {
	public _name!: Token;
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_SCHEMA_(): TerminalNode {
		return this.getToken(trinoSqlParser.CURRENT_SCHEMA_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCurrentSchema) {
	 		listener.enterCurrentSchema(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCurrentSchema) {
	 		listener.exitCurrentSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCurrentSchema) {
			return visitor.visitCurrentSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistsContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXISTS_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterExists) {
	 		listener.enterExists(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitExists) {
	 		listener.exitExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitExists) {
			return visitor.visitExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PositionContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public POSITION_(): TerminalNode {
		return this.getToken(trinoSqlParser.POSITION_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public IN_(): TerminalNode {
		return this.getToken(trinoSqlParser.IN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPosition) {
	 		listener.enterPosition(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPosition) {
	 		listener.exitPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPosition) {
			return visitor.visitPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListaggContext extends PrimaryExpressionContext {
	public _name!: Token;
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.LPAREN_);
	}
	public LPAREN_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, i);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.RPAREN_);
	}
	public RPAREN_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, i);
	}
	public LISTAGG_(): TerminalNode {
		return this.getToken(trinoSqlParser.LISTAGG_, 0);
	}
	public WITHIN_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITHIN_, 0);
	}
	public GROUP_(): TerminalNode {
		return this.getToken(trinoSqlParser.GROUP_, 0);
	}
	public ORDER_(): TerminalNode {
		return this.getToken(trinoSqlParser.ORDER_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(trinoSqlParser.BY_, 0);
	}
	public sortItem_list(): SortItemContext[] {
		return this.getTypedRuleContexts(SortItemContext) as SortItemContext[];
	}
	public sortItem(i: number): SortItemContext {
		return this.getTypedRuleContext(SortItemContext, i) as SortItemContext;
	}
	public setQuantifier(): SetQuantifierContext {
		return this.getTypedRuleContext(SetQuantifierContext, 0) as SetQuantifierContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public string_(): String_Context {
		return this.getTypedRuleContext(String_Context, 0) as String_Context;
	}
	public ON_(): TerminalNode {
		return this.getToken(trinoSqlParser.ON_, 0);
	}
	public OVERFLOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.OVERFLOW_, 0);
	}
	public listAggOverflowBehavior(): ListAggOverflowBehaviorContext {
		return this.getTypedRuleContext(ListAggOverflowBehaviorContext, 0) as ListAggOverflowBehaviorContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterListagg) {
	 		listener.enterListagg(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitListagg) {
	 		listener.exitListagg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitListagg) {
			return visitor.visitListagg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SearchedCaseContext extends PrimaryExpressionContext {
	public _elseExpression!: ExpressionContext;
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CASE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CASE_, 0);
	}
	public END_(): TerminalNode {
		return this.getToken(trinoSqlParser.END_, 0);
	}
	public whenClause_list(): WhenClauseContext[] {
		return this.getTypedRuleContexts(WhenClauseContext) as WhenClauseContext[];
	}
	public whenClause(i: number): WhenClauseContext {
		return this.getTypedRuleContext(WhenClauseContext, i) as WhenClauseContext;
	}
	public ELSE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ELSE_, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSearchedCase) {
	 		listener.enterSearchedCase(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSearchedCase) {
	 		listener.exitSearchedCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSearchedCase) {
			return visitor.visitSearchedCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentCatalogContext extends PrimaryExpressionContext {
	public _name!: Token;
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_CATALOG_(): TerminalNode {
		return this.getToken(trinoSqlParser.CURRENT_CATALOG_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCurrentCatalog) {
	 		listener.enterCurrentCatalog(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCurrentCatalog) {
	 		listener.exitCurrentCatalog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCurrentCatalog) {
			return visitor.visitCurrentCatalog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GroupingOperationContext extends PrimaryExpressionContext {
	constructor(parser: trinoSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GROUPING_(): TerminalNode {
		return this.getToken(trinoSqlParser.GROUPING_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterGroupingOperation) {
	 		listener.enterGroupingOperation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitGroupingOperation) {
	 		listener.exitGroupingOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupingOperation) {
			return visitor.visitGroupingOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonPathInvocationContext extends ParserRuleContext {
	public _path!: String_Context;
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jsonValueExpression(): JsonValueExpressionContext {
		return this.getTypedRuleContext(JsonValueExpressionContext, 0) as JsonValueExpressionContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public string_(): String_Context {
		return this.getTypedRuleContext(String_Context, 0) as String_Context;
	}
	public PASSING_(): TerminalNode {
		return this.getToken(trinoSqlParser.PASSING_, 0);
	}
	public jsonArgument_list(): JsonArgumentContext[] {
		return this.getTypedRuleContexts(JsonArgumentContext) as JsonArgumentContext[];
	}
	public jsonArgument(i: number): JsonArgumentContext {
		return this.getTypedRuleContext(JsonArgumentContext, i) as JsonArgumentContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_jsonPathInvocation;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJsonPathInvocation) {
	 		listener.enterJsonPathInvocation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJsonPathInvocation) {
	 		listener.exitJsonPathInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJsonPathInvocation) {
			return visitor.visitJsonPathInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonValueExpressionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public FORMAT_(): TerminalNode {
		return this.getToken(trinoSqlParser.FORMAT_, 0);
	}
	public jsonRepresentation(): JsonRepresentationContext {
		return this.getTypedRuleContext(JsonRepresentationContext, 0) as JsonRepresentationContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_jsonValueExpression;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJsonValueExpression) {
	 		listener.enterJsonValueExpression(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJsonValueExpression) {
	 		listener.exitJsonValueExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJsonValueExpression) {
			return visitor.visitJsonValueExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonRepresentationContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public JSON_(): TerminalNode {
		return this.getToken(trinoSqlParser.JSON_, 0);
	}
	public ENCODING_(): TerminalNode {
		return this.getToken(trinoSqlParser.ENCODING_, 0);
	}
	public UTF8_(): TerminalNode {
		return this.getToken(trinoSqlParser.UTF8_, 0);
	}
	public UTF16_(): TerminalNode {
		return this.getToken(trinoSqlParser.UTF16_, 0);
	}
	public UTF32_(): TerminalNode {
		return this.getToken(trinoSqlParser.UTF32_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_jsonRepresentation;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJsonRepresentation) {
	 		listener.enterJsonRepresentation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJsonRepresentation) {
	 		listener.exitJsonRepresentation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJsonRepresentation) {
			return visitor.visitJsonRepresentation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonArgumentContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jsonValueExpression(): JsonValueExpressionContext {
		return this.getTypedRuleContext(JsonValueExpressionContext, 0) as JsonValueExpressionContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_jsonArgument;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJsonArgument) {
	 		listener.enterJsonArgument(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJsonArgument) {
	 		listener.exitJsonArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJsonArgument) {
			return visitor.visitJsonArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonExistsErrorBehaviorContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TRUE_, 0);
	}
	public FALSE_(): TerminalNode {
		return this.getToken(trinoSqlParser.FALSE_, 0);
	}
	public UNKNOWN_(): TerminalNode {
		return this.getToken(trinoSqlParser.UNKNOWN_, 0);
	}
	public ERROR_(): TerminalNode {
		return this.getToken(trinoSqlParser.ERROR_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_jsonExistsErrorBehavior;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJsonExistsErrorBehavior) {
	 		listener.enterJsonExistsErrorBehavior(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJsonExistsErrorBehavior) {
	 		listener.exitJsonExistsErrorBehavior(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJsonExistsErrorBehavior) {
			return visitor.visitJsonExistsErrorBehavior(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonValueBehaviorContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ERROR_(): TerminalNode {
		return this.getToken(trinoSqlParser.ERROR_, 0);
	}
	public NULL_(): TerminalNode {
		return this.getToken(trinoSqlParser.NULL_, 0);
	}
	public DEFAULT_(): TerminalNode {
		return this.getToken(trinoSqlParser.DEFAULT_, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_jsonValueBehavior;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJsonValueBehavior) {
	 		listener.enterJsonValueBehavior(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJsonValueBehavior) {
	 		listener.exitJsonValueBehavior(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJsonValueBehavior) {
			return visitor.visitJsonValueBehavior(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonQueryWrapperBehaviorContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITHOUT_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITHOUT_, 0);
	}
	public ARRAY_(): TerminalNode {
		return this.getToken(trinoSqlParser.ARRAY_, 0);
	}
	public WITH_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITH_, 0);
	}
	public CONDITIONAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.CONDITIONAL_, 0);
	}
	public UNCONDITIONAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.UNCONDITIONAL_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_jsonQueryWrapperBehavior;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJsonQueryWrapperBehavior) {
	 		listener.enterJsonQueryWrapperBehavior(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJsonQueryWrapperBehavior) {
	 		listener.exitJsonQueryWrapperBehavior(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJsonQueryWrapperBehavior) {
			return visitor.visitJsonQueryWrapperBehavior(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonQueryBehaviorContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ERROR_(): TerminalNode {
		return this.getToken(trinoSqlParser.ERROR_, 0);
	}
	public NULL_(): TerminalNode {
		return this.getToken(trinoSqlParser.NULL_, 0);
	}
	public EMPTY_(): TerminalNode {
		return this.getToken(trinoSqlParser.EMPTY_, 0);
	}
	public ARRAY_(): TerminalNode {
		return this.getToken(trinoSqlParser.ARRAY_, 0);
	}
	public OBJECT_(): TerminalNode {
		return this.getToken(trinoSqlParser.OBJECT_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_jsonQueryBehavior;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJsonQueryBehavior) {
	 		listener.enterJsonQueryBehavior(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJsonQueryBehavior) {
	 		listener.exitJsonQueryBehavior(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJsonQueryBehavior) {
			return visitor.visitJsonQueryBehavior(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonObjectMemberContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public VALUE_(): TerminalNode {
		return this.getToken(trinoSqlParser.VALUE_, 0);
	}
	public jsonValueExpression(): JsonValueExpressionContext {
		return this.getTypedRuleContext(JsonValueExpressionContext, 0) as JsonValueExpressionContext;
	}
	public KEY_(): TerminalNode {
		return this.getToken(trinoSqlParser.KEY_, 0);
	}
	public COLON_(): TerminalNode {
		return this.getToken(trinoSqlParser.COLON_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_jsonObjectMember;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterJsonObjectMember) {
	 		listener.enterJsonObjectMember(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitJsonObjectMember) {
	 		listener.exitJsonObjectMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitJsonObjectMember) {
			return visitor.visitJsonObjectMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessingModeContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RUNNING_(): TerminalNode {
		return this.getToken(trinoSqlParser.RUNNING_, 0);
	}
	public FINAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.FINAL_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_processingMode;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterProcessingMode) {
	 		listener.enterProcessingMode(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitProcessingMode) {
	 		listener.exitProcessingMode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitProcessingMode) {
			return visitor.visitProcessingMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NullTreatmentContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IGNORE_(): TerminalNode {
		return this.getToken(trinoSqlParser.IGNORE_, 0);
	}
	public NULLS_(): TerminalNode {
		return this.getToken(trinoSqlParser.NULLS_, 0);
	}
	public RESPECT_(): TerminalNode {
		return this.getToken(trinoSqlParser.RESPECT_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_nullTreatment;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNullTreatment) {
	 		listener.enterNullTreatment(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNullTreatment) {
	 		listener.exitNullTreatment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNullTreatment) {
			return visitor.visitNullTreatment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_Context extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_string_;
	}
	public copyFrom(ctx: String_Context): void {
		super.copyFrom(ctx);
	}
}
export class UnicodeStringLiteralContext extends String_Context {
	constructor(parser: trinoSqlParser, ctx: String_Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UNICODE_STRING_(): TerminalNode {
		return this.getToken(trinoSqlParser.UNICODE_STRING_, 0);
	}
	public UESCAPE_(): TerminalNode {
		return this.getToken(trinoSqlParser.UESCAPE_, 0);
	}
	public STRING_(): TerminalNode {
		return this.getToken(trinoSqlParser.STRING_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUnicodeStringLiteral) {
	 		listener.enterUnicodeStringLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUnicodeStringLiteral) {
	 		listener.exitUnicodeStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUnicodeStringLiteral) {
			return visitor.visitUnicodeStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BasicStringLiteralContext extends String_Context {
	constructor(parser: trinoSqlParser, ctx: String_Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING_(): TerminalNode {
		return this.getToken(trinoSqlParser.STRING_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterBasicStringLiteral) {
	 		listener.enterBasicStringLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitBasicStringLiteral) {
	 		listener.exitBasicStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitBasicStringLiteral) {
			return visitor.visitBasicStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeZoneSpecifierContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_timeZoneSpecifier;
	}
	public copyFrom(ctx: TimeZoneSpecifierContext): void {
		super.copyFrom(ctx);
	}
}
export class TimeZoneIntervalContext extends TimeZoneSpecifierContext {
	constructor(parser: trinoSqlParser, ctx: TimeZoneSpecifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TIME_(): TerminalNode {
		return this.getToken(trinoSqlParser.TIME_, 0);
	}
	public ZONE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ZONE_, 0);
	}
	public interval(): IntervalContext {
		return this.getTypedRuleContext(IntervalContext, 0) as IntervalContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTimeZoneInterval) {
	 		listener.enterTimeZoneInterval(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTimeZoneInterval) {
	 		listener.exitTimeZoneInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTimeZoneInterval) {
			return visitor.visitTimeZoneInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimeZoneStringContext extends TimeZoneSpecifierContext {
	constructor(parser: trinoSqlParser, ctx: TimeZoneSpecifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TIME_(): TerminalNode {
		return this.getToken(trinoSqlParser.TIME_, 0);
	}
	public ZONE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ZONE_, 0);
	}
	public string_(): String_Context {
		return this.getTypedRuleContext(String_Context, 0) as String_Context;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTimeZoneString) {
	 		listener.enterTimeZoneString(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTimeZoneString) {
	 		listener.exitTimeZoneString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTimeZoneString) {
			return visitor.visitTimeZoneString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ_(): TerminalNode {
		return this.getToken(trinoSqlParser.EQ_, 0);
	}
	public NEQ_(): TerminalNode {
		return this.getToken(trinoSqlParser.NEQ_, 0);
	}
	public LT_(): TerminalNode {
		return this.getToken(trinoSqlParser.LT_, 0);
	}
	public LTE_(): TerminalNode {
		return this.getToken(trinoSqlParser.LTE_, 0);
	}
	public GT_(): TerminalNode {
		return this.getToken(trinoSqlParser.GT_, 0);
	}
	public GTE_(): TerminalNode {
		return this.getToken(trinoSqlParser.GTE_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_comparisonOperator;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterComparisonOperator) {
	 		listener.enterComparisonOperator(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitComparisonOperator) {
	 		listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonQuantifierContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALL_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALL_, 0);
	}
	public SOME_(): TerminalNode {
		return this.getToken(trinoSqlParser.SOME_, 0);
	}
	public ANY_(): TerminalNode {
		return this.getToken(trinoSqlParser.ANY_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_comparisonQuantifier;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterComparisonQuantifier) {
	 		listener.enterComparisonQuantifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitComparisonQuantifier) {
	 		listener.exitComparisonQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitComparisonQuantifier) {
			return visitor.visitComparisonQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TRUE_, 0);
	}
	public FALSE_(): TerminalNode {
		return this.getToken(trinoSqlParser.FALSE_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_booleanValue;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterBooleanValue) {
	 		listener.enterBooleanValue(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitBooleanValue) {
	 		listener.exitBooleanValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitBooleanValue) {
			return visitor.visitBooleanValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalContext extends ParserRuleContext {
	public _sign!: Token;
	public _from_!: IntervalFieldContext;
	public _to!: IntervalFieldContext;
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTERVAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.INTERVAL_, 0);
	}
	public string_(): String_Context {
		return this.getTypedRuleContext(String_Context, 0) as String_Context;
	}
	public intervalField_list(): IntervalFieldContext[] {
		return this.getTypedRuleContexts(IntervalFieldContext) as IntervalFieldContext[];
	}
	public intervalField(i: number): IntervalFieldContext {
		return this.getTypedRuleContext(IntervalFieldContext, i) as IntervalFieldContext;
	}
	public TO_(): TerminalNode {
		return this.getToken(trinoSqlParser.TO_, 0);
	}
	public PLUS_(): TerminalNode {
		return this.getToken(trinoSqlParser.PLUS_, 0);
	}
	public MINUS_(): TerminalNode {
		return this.getToken(trinoSqlParser.MINUS_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_interval;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterInterval) {
	 		listener.enterInterval(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitInterval) {
	 		listener.exitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitInterval) {
			return visitor.visitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalFieldContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public YEAR_(): TerminalNode {
		return this.getToken(trinoSqlParser.YEAR_, 0);
	}
	public MONTH_(): TerminalNode {
		return this.getToken(trinoSqlParser.MONTH_, 0);
	}
	public DAY_(): TerminalNode {
		return this.getToken(trinoSqlParser.DAY_, 0);
	}
	public HOUR_(): TerminalNode {
		return this.getToken(trinoSqlParser.HOUR_, 0);
	}
	public MINUTE_(): TerminalNode {
		return this.getToken(trinoSqlParser.MINUTE_, 0);
	}
	public SECOND_(): TerminalNode {
		return this.getToken(trinoSqlParser.SECOND_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_intervalField;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterIntervalField) {
	 		listener.enterIntervalField(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitIntervalField) {
	 		listener.exitIntervalField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitIntervalField) {
			return visitor.visitIntervalField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalFormContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NFD_(): TerminalNode {
		return this.getToken(trinoSqlParser.NFD_, 0);
	}
	public NFC_(): TerminalNode {
		return this.getToken(trinoSqlParser.NFC_, 0);
	}
	public NFKD_(): TerminalNode {
		return this.getToken(trinoSqlParser.NFKD_, 0);
	}
	public NFKC_(): TerminalNode {
		return this.getToken(trinoSqlParser.NFKC_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_normalForm;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNormalForm) {
	 		listener.enterNormalForm(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNormalForm) {
	 		listener.exitNormalForm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNormalForm) {
			return visitor.visitNormalForm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_type;
	}
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class RowTypeContext extends TypeContext {
	constructor(parser: trinoSqlParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ROW_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROW_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public rowField_list(): RowFieldContext[] {
		return this.getTypedRuleContexts(RowFieldContext) as RowFieldContext[];
	}
	public rowField(i: number): RowFieldContext {
		return this.getTypedRuleContext(RowFieldContext, i) as RowFieldContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRowType) {
	 		listener.enterRowType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRowType) {
	 		listener.exitRowType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRowType) {
			return visitor.visitRowType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntervalTypeContext extends TypeContext {
	public _from_!: IntervalFieldContext;
	public _to!: IntervalFieldContext;
	constructor(parser: trinoSqlParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTERVAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.INTERVAL_, 0);
	}
	public intervalField_list(): IntervalFieldContext[] {
		return this.getTypedRuleContexts(IntervalFieldContext) as IntervalFieldContext[];
	}
	public intervalField(i: number): IntervalFieldContext {
		return this.getTypedRuleContext(IntervalFieldContext, i) as IntervalFieldContext;
	}
	public TO_(): TerminalNode {
		return this.getToken(trinoSqlParser.TO_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterIntervalType) {
	 		listener.enterIntervalType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitIntervalType) {
	 		listener.exitIntervalType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitIntervalType) {
			return visitor.visitIntervalType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayTypeContext extends TypeContext {
	constructor(parser: trinoSqlParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public ARRAY_(): TerminalNode {
		return this.getToken(trinoSqlParser.ARRAY_, 0);
	}
	public LSQUARE_(): TerminalNode {
		return this.getToken(trinoSqlParser.LSQUARE_, 0);
	}
	public INTEGER_VALUE_(): TerminalNode {
		return this.getToken(trinoSqlParser.INTEGER_VALUE_, 0);
	}
	public RSQUARE_(): TerminalNode {
		return this.getToken(trinoSqlParser.RSQUARE_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterArrayType) {
	 		listener.enterArrayType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitArrayType) {
	 		listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoublePrecisionTypeContext extends TypeContext {
	constructor(parser: trinoSqlParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOUBLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.DOUBLE_, 0);
	}
	public PRECISION_(): TerminalNode {
		return this.getToken(trinoSqlParser.PRECISION_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDoublePrecisionType) {
	 		listener.enterDoublePrecisionType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDoublePrecisionType) {
	 		listener.exitDoublePrecisionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDoublePrecisionType) {
			return visitor.visitDoublePrecisionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LegacyArrayTypeContext extends TypeContext {
	constructor(parser: trinoSqlParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ARRAY_(): TerminalNode {
		return this.getToken(trinoSqlParser.ARRAY_, 0);
	}
	public LT_(): TerminalNode {
		return this.getToken(trinoSqlParser.LT_, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public GT_(): TerminalNode {
		return this.getToken(trinoSqlParser.GT_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterLegacyArrayType) {
	 		listener.enterLegacyArrayType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitLegacyArrayType) {
	 		listener.exitLegacyArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitLegacyArrayType) {
			return visitor.visitLegacyArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GenericTypeContext extends TypeContext {
	constructor(parser: trinoSqlParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public typeParameter_list(): TypeParameterContext[] {
		return this.getTypedRuleContexts(TypeParameterContext) as TypeParameterContext[];
	}
	public typeParameter(i: number): TypeParameterContext {
		return this.getTypedRuleContext(TypeParameterContext, i) as TypeParameterContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterGenericType) {
	 		listener.enterGenericType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitGenericType) {
	 		listener.exitGenericType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitGenericType) {
			return visitor.visitGenericType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateTimeTypeContext extends TypeContext {
	public _base!: Token;
	public _precision!: TypeParameterContext;
	constructor(parser: trinoSqlParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TIMESTAMP_(): TerminalNode {
		return this.getToken(trinoSqlParser.TIMESTAMP_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public WITHOUT_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITHOUT_, 0);
	}
	public TIME__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.TIME_);
	}
	public TIME_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.TIME_, i);
	}
	public ZONE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ZONE_, 0);
	}
	public typeParameter(): TypeParameterContext {
		return this.getTypedRuleContext(TypeParameterContext, 0) as TypeParameterContext;
	}
	public WITH_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITH_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDateTimeType) {
	 		listener.enterDateTimeType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDateTimeType) {
	 		listener.exitDateTimeType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDateTimeType) {
			return visitor.visitDateTimeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LegacyMapTypeContext extends TypeContext {
	public _keyType!: TypeContext;
	public _valueType!: TypeContext;
	constructor(parser: trinoSqlParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MAP_(): TerminalNode {
		return this.getToken(trinoSqlParser.MAP_, 0);
	}
	public LT_(): TerminalNode {
		return this.getToken(trinoSqlParser.LT_, 0);
	}
	public COMMA_(): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, 0);
	}
	public GT_(): TerminalNode {
		return this.getToken(trinoSqlParser.GT_, 0);
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterLegacyMapType) {
	 		listener.enterLegacyMapType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitLegacyMapType) {
	 		listener.exitLegacyMapType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitLegacyMapType) {
			return visitor.visitLegacyMapType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowFieldContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_rowField;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRowField) {
	 		listener.enterRowField(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRowField) {
	 		listener.exitRowField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRowField) {
			return visitor.visitRowField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER_VALUE_(): TerminalNode {
		return this.getToken(trinoSqlParser.INTEGER_VALUE_, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_typeParameter;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTypeParameter) {
	 		listener.enterTypeParameter(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTypeParameter) {
	 		listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
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
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHEN_(): TerminalNode {
		return this.getToken(trinoSqlParser.WHEN_, 0);
	}
	public THEN_(): TerminalNode {
		return this.getToken(trinoSqlParser.THEN_, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_whenClause;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterWhenClause) {
	 		listener.enterWhenClause(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitWhenClause) {
	 		listener.exitWhenClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitWhenClause) {
			return visitor.visitWhenClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilterContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FILTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.FILTER_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public WHERE_(): TerminalNode {
		return this.getToken(trinoSqlParser.WHERE_, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_filter;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterFilter) {
	 		listener.enterFilter(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitFilter) {
	 		listener.exitFilter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitFilter) {
			return visitor.visitFilter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MergeCaseContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_mergeCase;
	}
	public copyFrom(ctx: MergeCaseContext): void {
		super.copyFrom(ctx);
	}
}
export class MergeInsertContext extends MergeCaseContext {
	public _condition!: ExpressionContext;
	public _identifier!: IdentifierContext;
	public _targets: IdentifierContext[] = [];
	public _expression!: ExpressionContext;
	public _values: ExpressionContext[] = [];
	constructor(parser: trinoSqlParser, ctx: MergeCaseContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public WHEN_(): TerminalNode {
		return this.getToken(trinoSqlParser.WHEN_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.NOT_, 0);
	}
	public MATCHED_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATCHED_, 0);
	}
	public THEN_(): TerminalNode {
		return this.getToken(trinoSqlParser.THEN_, 0);
	}
	public INSERT_(): TerminalNode {
		return this.getToken(trinoSqlParser.INSERT_, 0);
	}
	public VALUES_(): TerminalNode {
		return this.getToken(trinoSqlParser.VALUES_, 0);
	}
	public LPAREN__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.LPAREN_);
	}
	public LPAREN_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, i);
	}
	public RPAREN__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.RPAREN_);
	}
	public RPAREN_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public AND_(): TerminalNode {
		return this.getToken(trinoSqlParser.AND_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterMergeInsert) {
	 		listener.enterMergeInsert(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitMergeInsert) {
	 		listener.exitMergeInsert(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitMergeInsert) {
			return visitor.visitMergeInsert(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MergeUpdateContext extends MergeCaseContext {
	public _condition!: ExpressionContext;
	public _identifier!: IdentifierContext;
	public _targets: IdentifierContext[] = [];
	public _expression!: ExpressionContext;
	public _values: ExpressionContext[] = [];
	constructor(parser: trinoSqlParser, ctx: MergeCaseContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public WHEN_(): TerminalNode {
		return this.getToken(trinoSqlParser.WHEN_, 0);
	}
	public MATCHED_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATCHED_, 0);
	}
	public THEN_(): TerminalNode {
		return this.getToken(trinoSqlParser.THEN_, 0);
	}
	public UPDATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.UPDATE_, 0);
	}
	public SET_(): TerminalNode {
		return this.getToken(trinoSqlParser.SET_, 0);
	}
	public EQ__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.EQ_);
	}
	public EQ_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.EQ_, i);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public AND_(): TerminalNode {
		return this.getToken(trinoSqlParser.AND_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterMergeUpdate) {
	 		listener.enterMergeUpdate(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitMergeUpdate) {
	 		listener.exitMergeUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitMergeUpdate) {
			return visitor.visitMergeUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MergeDeleteContext extends MergeCaseContext {
	public _condition!: ExpressionContext;
	constructor(parser: trinoSqlParser, ctx: MergeCaseContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public WHEN_(): TerminalNode {
		return this.getToken(trinoSqlParser.WHEN_, 0);
	}
	public MATCHED_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATCHED_, 0);
	}
	public THEN_(): TerminalNode {
		return this.getToken(trinoSqlParser.THEN_, 0);
	}
	public DELETE_(): TerminalNode {
		return this.getToken(trinoSqlParser.DELETE_, 0);
	}
	public AND_(): TerminalNode {
		return this.getToken(trinoSqlParser.AND_, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterMergeDelete) {
	 		listener.enterMergeDelete(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitMergeDelete) {
	 		listener.exitMergeDelete(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitMergeDelete) {
			return visitor.visitMergeDelete(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverContext extends ParserRuleContext {
	public _windowName!: IdentifierContext;
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OVER_(): TerminalNode {
		return this.getToken(trinoSqlParser.OVER_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public windowSpecification(): WindowSpecificationContext {
		return this.getTypedRuleContext(WindowSpecificationContext, 0) as WindowSpecificationContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_over;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterOver) {
	 		listener.enterOver(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitOver) {
	 		listener.exitOver(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitOver) {
			return visitor.visitOver(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowFrameContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public frameExtent(): FrameExtentContext {
		return this.getTypedRuleContext(FrameExtentContext, 0) as FrameExtentContext;
	}
	public MEASURES_(): TerminalNode {
		return this.getToken(trinoSqlParser.MEASURES_, 0);
	}
	public measureDefinition_list(): MeasureDefinitionContext[] {
		return this.getTypedRuleContexts(MeasureDefinitionContext) as MeasureDefinitionContext[];
	}
	public measureDefinition(i: number): MeasureDefinitionContext {
		return this.getTypedRuleContext(MeasureDefinitionContext, i) as MeasureDefinitionContext;
	}
	public AFTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.AFTER_, 0);
	}
	public MATCH_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATCH_, 0);
	}
	public skipTo(): SkipToContext {
		return this.getTypedRuleContext(SkipToContext, 0) as SkipToContext;
	}
	public PATTERN_(): TerminalNode {
		return this.getToken(trinoSqlParser.PATTERN_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public rowPattern(): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, 0) as RowPatternContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public SUBSET_(): TerminalNode {
		return this.getToken(trinoSqlParser.SUBSET_, 0);
	}
	public subsetDefinition_list(): SubsetDefinitionContext[] {
		return this.getTypedRuleContexts(SubsetDefinitionContext) as SubsetDefinitionContext[];
	}
	public subsetDefinition(i: number): SubsetDefinitionContext {
		return this.getTypedRuleContext(SubsetDefinitionContext, i) as SubsetDefinitionContext;
	}
	public DEFINE_(): TerminalNode {
		return this.getToken(trinoSqlParser.DEFINE_, 0);
	}
	public variableDefinition_list(): VariableDefinitionContext[] {
		return this.getTypedRuleContexts(VariableDefinitionContext) as VariableDefinitionContext[];
	}
	public variableDefinition(i: number): VariableDefinitionContext {
		return this.getTypedRuleContext(VariableDefinitionContext, i) as VariableDefinitionContext;
	}
	public INITIAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.INITIAL_, 0);
	}
	public SEEK_(): TerminalNode {
		return this.getToken(trinoSqlParser.SEEK_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_windowFrame;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterWindowFrame) {
	 		listener.enterWindowFrame(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitWindowFrame) {
	 		listener.exitWindowFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowFrame) {
			return visitor.visitWindowFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FrameExtentContext extends ParserRuleContext {
	public _frameType!: Token;
	public _start_!: FrameBoundContext;
	public _end_!: FrameBoundContext;
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RANGE_(): TerminalNode {
		return this.getToken(trinoSqlParser.RANGE_, 0);
	}
	public frameBound_list(): FrameBoundContext[] {
		return this.getTypedRuleContexts(FrameBoundContext) as FrameBoundContext[];
	}
	public frameBound(i: number): FrameBoundContext {
		return this.getTypedRuleContext(FrameBoundContext, i) as FrameBoundContext;
	}
	public ROWS_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROWS_, 0);
	}
	public GROUPS_(): TerminalNode {
		return this.getToken(trinoSqlParser.GROUPS_, 0);
	}
	public BETWEEN_(): TerminalNode {
		return this.getToken(trinoSqlParser.BETWEEN_, 0);
	}
	public AND_(): TerminalNode {
		return this.getToken(trinoSqlParser.AND_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_frameExtent;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterFrameExtent) {
	 		listener.enterFrameExtent(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitFrameExtent) {
	 		listener.exitFrameExtent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitFrameExtent) {
			return visitor.visitFrameExtent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FrameBoundContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_frameBound;
	}
	public copyFrom(ctx: FrameBoundContext): void {
		super.copyFrom(ctx);
	}
}
export class BoundedFrameContext extends FrameBoundContext {
	public _boundType!: Token;
	constructor(parser: trinoSqlParser, ctx: FrameBoundContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public PRECEDING_(): TerminalNode {
		return this.getToken(trinoSqlParser.PRECEDING_, 0);
	}
	public FOLLOWING_(): TerminalNode {
		return this.getToken(trinoSqlParser.FOLLOWING_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterBoundedFrame) {
	 		listener.enterBoundedFrame(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitBoundedFrame) {
	 		listener.exitBoundedFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitBoundedFrame) {
			return visitor.visitBoundedFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnboundedFrameContext extends FrameBoundContext {
	public _boundType!: Token;
	constructor(parser: trinoSqlParser, ctx: FrameBoundContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UNBOUNDED_(): TerminalNode {
		return this.getToken(trinoSqlParser.UNBOUNDED_, 0);
	}
	public PRECEDING_(): TerminalNode {
		return this.getToken(trinoSqlParser.PRECEDING_, 0);
	}
	public FOLLOWING_(): TerminalNode {
		return this.getToken(trinoSqlParser.FOLLOWING_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUnboundedFrame) {
	 		listener.enterUnboundedFrame(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUnboundedFrame) {
	 		listener.exitUnboundedFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUnboundedFrame) {
			return visitor.visitUnboundedFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentRowBoundContext extends FrameBoundContext {
	constructor(parser: trinoSqlParser, ctx: FrameBoundContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_(): TerminalNode {
		return this.getToken(trinoSqlParser.CURRENT_, 0);
	}
	public ROW_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROW_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCurrentRowBound) {
	 		listener.enterCurrentRowBound(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCurrentRowBound) {
	 		listener.exitCurrentRowBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCurrentRowBound) {
			return visitor.visitCurrentRowBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowPatternContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_rowPattern;
	}
	public copyFrom(ctx: RowPatternContext): void {
		super.copyFrom(ctx);
	}
}
export class QuantifiedPrimaryContext extends RowPatternContext {
	constructor(parser: trinoSqlParser, ctx: RowPatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public patternPrimary(): PatternPrimaryContext {
		return this.getTypedRuleContext(PatternPrimaryContext, 0) as PatternPrimaryContext;
	}
	public patternQuantifier(): PatternQuantifierContext {
		return this.getTypedRuleContext(PatternQuantifierContext, 0) as PatternQuantifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQuantifiedPrimary) {
	 		listener.enterQuantifiedPrimary(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQuantifiedPrimary) {
	 		listener.exitQuantifiedPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQuantifiedPrimary) {
			return visitor.visitQuantifiedPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternConcatenationContext extends RowPatternContext {
	constructor(parser: trinoSqlParser, ctx: RowPatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public rowPattern_list(): RowPatternContext[] {
		return this.getTypedRuleContexts(RowPatternContext) as RowPatternContext[];
	}
	public rowPattern(i: number): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, i) as RowPatternContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPatternConcatenation) {
	 		listener.enterPatternConcatenation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPatternConcatenation) {
	 		listener.exitPatternConcatenation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPatternConcatenation) {
			return visitor.visitPatternConcatenation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternAlternationContext extends RowPatternContext {
	constructor(parser: trinoSqlParser, ctx: RowPatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public rowPattern_list(): RowPatternContext[] {
		return this.getTypedRuleContexts(RowPatternContext) as RowPatternContext[];
	}
	public rowPattern(i: number): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, i) as RowPatternContext;
	}
	public VBAR_(): TerminalNode {
		return this.getToken(trinoSqlParser.VBAR_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPatternAlternation) {
	 		listener.enterPatternAlternation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPatternAlternation) {
	 		listener.exitPatternAlternation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPatternAlternation) {
			return visitor.visitPatternAlternation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternPrimaryContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_patternPrimary;
	}
	public copyFrom(ctx: PatternPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class PatternPermutationContext extends PatternPrimaryContext {
	constructor(parser: trinoSqlParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PERMUTE_(): TerminalNode {
		return this.getToken(trinoSqlParser.PERMUTE_, 0);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public rowPattern_list(): RowPatternContext[] {
		return this.getTypedRuleContexts(RowPatternContext) as RowPatternContext[];
	}
	public rowPattern(i: number): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, i) as RowPatternContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPatternPermutation) {
	 		listener.enterPatternPermutation(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPatternPermutation) {
	 		listener.exitPatternPermutation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPatternPermutation) {
			return visitor.visitPatternPermutation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PartitionEndAnchorContext extends PatternPrimaryContext {
	constructor(parser: trinoSqlParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOLLAR_(): TerminalNode {
		return this.getToken(trinoSqlParser.DOLLAR_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPartitionEndAnchor) {
	 		listener.enterPartitionEndAnchor(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPartitionEndAnchor) {
	 		listener.exitPartitionEndAnchor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPartitionEndAnchor) {
			return visitor.visitPartitionEndAnchor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternVariableContext extends PatternPrimaryContext {
	constructor(parser: trinoSqlParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPatternVariable) {
	 		listener.enterPatternVariable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPatternVariable) {
	 		listener.exitPatternVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPatternVariable) {
			return visitor.visitPatternVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExcludedPatternContext extends PatternPrimaryContext {
	constructor(parser: trinoSqlParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURLYHYPHEN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LCURLYHYPHEN_, 0);
	}
	public rowPattern(): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, 0) as RowPatternContext;
	}
	public RCURLYHYPHEN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RCURLYHYPHEN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterExcludedPattern) {
	 		listener.enterExcludedPattern(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitExcludedPattern) {
	 		listener.exitExcludedPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitExcludedPattern) {
			return visitor.visitExcludedPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PartitionStartAnchorContext extends PatternPrimaryContext {
	constructor(parser: trinoSqlParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CARET_(): TerminalNode {
		return this.getToken(trinoSqlParser.CARET_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPartitionStartAnchor) {
	 		listener.enterPartitionStartAnchor(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPartitionStartAnchor) {
	 		listener.exitPartitionStartAnchor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPartitionStartAnchor) {
			return visitor.visitPartitionStartAnchor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmptyPatternContext extends PatternPrimaryContext {
	constructor(parser: trinoSqlParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterEmptyPattern) {
	 		listener.enterEmptyPattern(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitEmptyPattern) {
	 		listener.exitEmptyPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitEmptyPattern) {
			return visitor.visitEmptyPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GroupedPatternContext extends PatternPrimaryContext {
	constructor(parser: trinoSqlParser, ctx: PatternPrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.LPAREN_, 0);
	}
	public rowPattern(): RowPatternContext {
		return this.getTypedRuleContext(RowPatternContext, 0) as RowPatternContext;
	}
	public RPAREN_(): TerminalNode {
		return this.getToken(trinoSqlParser.RPAREN_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterGroupedPattern) {
	 		listener.enterGroupedPattern(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitGroupedPattern) {
	 		listener.exitGroupedPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupedPattern) {
			return visitor.visitGroupedPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternQuantifierContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_patternQuantifier;
	}
	public copyFrom(ctx: PatternQuantifierContext): void {
		super.copyFrom(ctx);
	}
}
export class ZeroOrMoreQuantifierContext extends PatternQuantifierContext {
	public _reluctant!: Token;
	constructor(parser: trinoSqlParser, ctx: PatternQuantifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ASTERISK_(): TerminalNode {
		return this.getToken(trinoSqlParser.ASTERISK_, 0);
	}
	public QUESTION_MARK_(): TerminalNode {
		return this.getToken(trinoSqlParser.QUESTION_MARK_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterZeroOrMoreQuantifier) {
	 		listener.enterZeroOrMoreQuantifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitZeroOrMoreQuantifier) {
	 		listener.exitZeroOrMoreQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitZeroOrMoreQuantifier) {
			return visitor.visitZeroOrMoreQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OneOrMoreQuantifierContext extends PatternQuantifierContext {
	public _reluctant!: Token;
	constructor(parser: trinoSqlParser, ctx: PatternQuantifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PLUS_(): TerminalNode {
		return this.getToken(trinoSqlParser.PLUS_, 0);
	}
	public QUESTION_MARK_(): TerminalNode {
		return this.getToken(trinoSqlParser.QUESTION_MARK_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterOneOrMoreQuantifier) {
	 		listener.enterOneOrMoreQuantifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitOneOrMoreQuantifier) {
	 		listener.exitOneOrMoreQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitOneOrMoreQuantifier) {
			return visitor.visitOneOrMoreQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ZeroOrOneQuantifierContext extends PatternQuantifierContext {
	public _reluctant!: Token;
	constructor(parser: trinoSqlParser, ctx: PatternQuantifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public QUESTION_MARK__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.QUESTION_MARK_);
	}
	public QUESTION_MARK_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.QUESTION_MARK_, i);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterZeroOrOneQuantifier) {
	 		listener.enterZeroOrOneQuantifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitZeroOrOneQuantifier) {
	 		listener.exitZeroOrOneQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
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
	constructor(parser: trinoSqlParser, ctx: PatternQuantifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURLY_(): TerminalNode {
		return this.getToken(trinoSqlParser.LCURLY_, 0);
	}
	public RCURLY_(): TerminalNode {
		return this.getToken(trinoSqlParser.RCURLY_, 0);
	}
	public INTEGER_VALUE__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.INTEGER_VALUE_);
	}
	public INTEGER_VALUE_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.INTEGER_VALUE_, i);
	}
	public QUESTION_MARK_(): TerminalNode {
		return this.getToken(trinoSqlParser.QUESTION_MARK_, 0);
	}
	public COMMA_(): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRangeQuantifier) {
	 		listener.enterRangeQuantifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRangeQuantifier) {
	 		listener.exitRangeQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRangeQuantifier) {
			return visitor.visitRangeQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateAssignmentContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public EQ_(): TerminalNode {
		return this.getToken(trinoSqlParser.EQ_, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_updateAssignment;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUpdateAssignment) {
	 		listener.enterUpdateAssignment(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUpdateAssignment) {
	 		listener.exitUpdateAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUpdateAssignment) {
			return visitor.visitUpdateAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplainOptionContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_explainOption;
	}
	public copyFrom(ctx: ExplainOptionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExplainFormatContext extends ExplainOptionContext {
	public _value!: Token;
	constructor(parser: trinoSqlParser, ctx: ExplainOptionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FORMAT_(): TerminalNode {
		return this.getToken(trinoSqlParser.FORMAT_, 0);
	}
	public TEXT_(): TerminalNode {
		return this.getToken(trinoSqlParser.TEXT_, 0);
	}
	public GRAPHVIZ_(): TerminalNode {
		return this.getToken(trinoSqlParser.GRAPHVIZ_, 0);
	}
	public JSON_(): TerminalNode {
		return this.getToken(trinoSqlParser.JSON_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterExplainFormat) {
	 		listener.enterExplainFormat(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitExplainFormat) {
	 		listener.exitExplainFormat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitExplainFormat) {
			return visitor.visitExplainFormat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExplainTypeContext extends ExplainOptionContext {
	public _value!: Token;
	constructor(parser: trinoSqlParser, ctx: ExplainOptionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TYPE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TYPE_, 0);
	}
	public LOGICAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.LOGICAL_, 0);
	}
	public DISTRIBUTED_(): TerminalNode {
		return this.getToken(trinoSqlParser.DISTRIBUTED_, 0);
	}
	public VALIDATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.VALIDATE_, 0);
	}
	public IO_(): TerminalNode {
		return this.getToken(trinoSqlParser.IO_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterExplainType) {
	 		listener.enterExplainType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitExplainType) {
	 		listener.exitExplainType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitExplainType) {
			return visitor.visitExplainType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransactionModeContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_transactionMode;
	}
	public copyFrom(ctx: TransactionModeContext): void {
		super.copyFrom(ctx);
	}
}
export class TransactionAccessModeContext extends TransactionModeContext {
	public _accessMode!: Token;
	constructor(parser: trinoSqlParser, ctx: TransactionModeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public READ_(): TerminalNode {
		return this.getToken(trinoSqlParser.READ_, 0);
	}
	public ONLY_(): TerminalNode {
		return this.getToken(trinoSqlParser.ONLY_, 0);
	}
	public WRITE_(): TerminalNode {
		return this.getToken(trinoSqlParser.WRITE_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterTransactionAccessMode) {
	 		listener.enterTransactionAccessMode(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitTransactionAccessMode) {
	 		listener.exitTransactionAccessMode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitTransactionAccessMode) {
			return visitor.visitTransactionAccessMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IsolationLevelContext extends TransactionModeContext {
	constructor(parser: trinoSqlParser, ctx: TransactionModeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ISOLATION_(): TerminalNode {
		return this.getToken(trinoSqlParser.ISOLATION_, 0);
	}
	public LEVEL_(): TerminalNode {
		return this.getToken(trinoSqlParser.LEVEL_, 0);
	}
	public levelOfIsolation(): LevelOfIsolationContext {
		return this.getTypedRuleContext(LevelOfIsolationContext, 0) as LevelOfIsolationContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterIsolationLevel) {
	 		listener.enterIsolationLevel(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitIsolationLevel) {
	 		listener.exitIsolationLevel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitIsolationLevel) {
			return visitor.visitIsolationLevel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LevelOfIsolationContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_levelOfIsolation;
	}
	public copyFrom(ctx: LevelOfIsolationContext): void {
		super.copyFrom(ctx);
	}
}
export class ReadUncommittedContext extends LevelOfIsolationContext {
	constructor(parser: trinoSqlParser, ctx: LevelOfIsolationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public READ_(): TerminalNode {
		return this.getToken(trinoSqlParser.READ_, 0);
	}
	public UNCOMMITTED_(): TerminalNode {
		return this.getToken(trinoSqlParser.UNCOMMITTED_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterReadUncommitted) {
	 		listener.enterReadUncommitted(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitReadUncommitted) {
	 		listener.exitReadUncommitted(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitReadUncommitted) {
			return visitor.visitReadUncommitted(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SerializableContext extends LevelOfIsolationContext {
	constructor(parser: trinoSqlParser, ctx: LevelOfIsolationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SERIALIZABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.SERIALIZABLE_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSerializable) {
	 		listener.enterSerializable(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSerializable) {
	 		listener.exitSerializable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSerializable) {
			return visitor.visitSerializable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReadCommittedContext extends LevelOfIsolationContext {
	constructor(parser: trinoSqlParser, ctx: LevelOfIsolationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public READ_(): TerminalNode {
		return this.getToken(trinoSqlParser.READ_, 0);
	}
	public COMMITTED_(): TerminalNode {
		return this.getToken(trinoSqlParser.COMMITTED_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterReadCommitted) {
	 		listener.enterReadCommitted(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitReadCommitted) {
	 		listener.exitReadCommitted(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitReadCommitted) {
			return visitor.visitReadCommitted(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RepeatableReadContext extends LevelOfIsolationContext {
	constructor(parser: trinoSqlParser, ctx: LevelOfIsolationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REPEATABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.REPEATABLE_, 0);
	}
	public READ_(): TerminalNode {
		return this.getToken(trinoSqlParser.READ_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRepeatableRead) {
	 		listener.enterRepeatableRead(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRepeatableRead) {
	 		listener.exitRepeatableRead(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRepeatableRead) {
			return visitor.visitRepeatableRead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallArgumentContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_callArgument;
	}
	public copyFrom(ctx: CallArgumentContext): void {
		super.copyFrom(ctx);
	}
}
export class PositionalArgumentContext extends CallArgumentContext {
	constructor(parser: trinoSqlParser, ctx: CallArgumentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPositionalArgument) {
	 		listener.enterPositionalArgument(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPositionalArgument) {
	 		listener.exitPositionalArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPositionalArgument) {
			return visitor.visitPositionalArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NamedArgumentContext extends CallArgumentContext {
	constructor(parser: trinoSqlParser, ctx: CallArgumentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public RDOUBLEARROW_(): TerminalNode {
		return this.getToken(trinoSqlParser.RDOUBLEARROW_, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNamedArgument) {
	 		listener.enterNamedArgument(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNamedArgument) {
	 		listener.exitNamedArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNamedArgument) {
			return visitor.visitNamedArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathElementContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_pathElement;
	}
	public copyFrom(ctx: PathElementContext): void {
		super.copyFrom(ctx);
	}
}
export class QualifiedArgumentContext extends PathElementContext {
	constructor(parser: trinoSqlParser, ctx: PathElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public DOT_(): TerminalNode {
		return this.getToken(trinoSqlParser.DOT_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQualifiedArgument) {
	 		listener.enterQualifiedArgument(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQualifiedArgument) {
	 		listener.exitQualifiedArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQualifiedArgument) {
			return visitor.visitQualifiedArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnqualifiedArgumentContext extends PathElementContext {
	constructor(parser: trinoSqlParser, ctx: PathElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUnqualifiedArgument) {
	 		listener.enterUnqualifiedArgument(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUnqualifiedArgument) {
	 		listener.exitUnqualifiedArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUnqualifiedArgument) {
			return visitor.visitUnqualifiedArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathSpecificationContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pathElement_list(): PathElementContext[] {
		return this.getTypedRuleContexts(PathElementContext) as PathElementContext[];
	}
	public pathElement(i: number): PathElementContext {
		return this.getTypedRuleContext(PathElementContext, i) as PathElementContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_pathSpecification;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPathSpecification) {
	 		listener.enterPathSpecification(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPathSpecification) {
	 		listener.exitPathSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPathSpecification) {
			return visitor.visitPathSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrivilegeContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CREATE_, 0);
	}
	public SELECT_(): TerminalNode {
		return this.getToken(trinoSqlParser.SELECT_, 0);
	}
	public DELETE_(): TerminalNode {
		return this.getToken(trinoSqlParser.DELETE_, 0);
	}
	public INSERT_(): TerminalNode {
		return this.getToken(trinoSqlParser.INSERT_, 0);
	}
	public UPDATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.UPDATE_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_privilege;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterPrivilege) {
	 		listener.enterPrivilege(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitPrivilege) {
	 		listener.exitPrivilege(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitPrivilege) {
			return visitor.visitPrivilege(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public DOT__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.DOT_);
	}
	public DOT_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.DOT_, i);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_qualifiedName;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQualifiedName) {
	 		listener.enterQualifiedName(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQualifiedName) {
	 		listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryPeriodContext extends ParserRuleContext {
	public _end!: ValueExpressionContext;
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR_(): TerminalNode {
		return this.getToken(trinoSqlParser.FOR_, 0);
	}
	public rangeType(): RangeTypeContext {
		return this.getTypedRuleContext(RangeTypeContext, 0) as RangeTypeContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(trinoSqlParser.AS_, 0);
	}
	public OF_(): TerminalNode {
		return this.getToken(trinoSqlParser.OF_, 0);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_queryPeriod;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQueryPeriod) {
	 		listener.enterQueryPeriod(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQueryPeriod) {
	 		listener.exitQueryPeriod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQueryPeriod) {
			return visitor.visitQueryPeriod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangeTypeContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TIMESTAMP_(): TerminalNode {
		return this.getToken(trinoSqlParser.TIMESTAMP_, 0);
	}
	public VERSION_(): TerminalNode {
		return this.getToken(trinoSqlParser.VERSION_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_rangeType;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRangeType) {
	 		listener.enterRangeType(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRangeType) {
	 		listener.exitRangeType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRangeType) {
			return visitor.visitRangeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GrantorContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_grantor;
	}
	public copyFrom(ctx: GrantorContext): void {
		super.copyFrom(ctx);
	}
}
export class CurrentUserGrantorContext extends GrantorContext {
	constructor(parser: trinoSqlParser, ctx: GrantorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_USER_(): TerminalNode {
		return this.getToken(trinoSqlParser.CURRENT_USER_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCurrentUserGrantor) {
	 		listener.enterCurrentUserGrantor(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCurrentUserGrantor) {
	 		listener.exitCurrentUserGrantor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCurrentUserGrantor) {
			return visitor.visitCurrentUserGrantor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SpecifiedPrincipalContext extends GrantorContext {
	constructor(parser: trinoSqlParser, ctx: GrantorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public principal(): PrincipalContext {
		return this.getTypedRuleContext(PrincipalContext, 0) as PrincipalContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterSpecifiedPrincipal) {
	 		listener.enterSpecifiedPrincipal(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitSpecifiedPrincipal) {
	 		listener.exitSpecifiedPrincipal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitSpecifiedPrincipal) {
			return visitor.visitSpecifiedPrincipal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentRoleGrantorContext extends GrantorContext {
	constructor(parser: trinoSqlParser, ctx: GrantorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_ROLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CURRENT_ROLE_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterCurrentRoleGrantor) {
	 		listener.enterCurrentRoleGrantor(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitCurrentRoleGrantor) {
	 		listener.exitCurrentRoleGrantor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitCurrentRoleGrantor) {
			return visitor.visitCurrentRoleGrantor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrincipalContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_principal;
	}
	public copyFrom(ctx: PrincipalContext): void {
		super.copyFrom(ctx);
	}
}
export class UnspecifiedPrincipalContext extends PrincipalContext {
	constructor(parser: trinoSqlParser, ctx: PrincipalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUnspecifiedPrincipal) {
	 		listener.enterUnspecifiedPrincipal(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUnspecifiedPrincipal) {
	 		listener.exitUnspecifiedPrincipal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUnspecifiedPrincipal) {
			return visitor.visitUnspecifiedPrincipal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UserPrincipalContext extends PrincipalContext {
	constructor(parser: trinoSqlParser, ctx: PrincipalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public USER_(): TerminalNode {
		return this.getToken(trinoSqlParser.USER_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUserPrincipal) {
	 		listener.enterUserPrincipal(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUserPrincipal) {
	 		listener.exitUserPrincipal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUserPrincipal) {
			return visitor.visitUserPrincipal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RolePrincipalContext extends PrincipalContext {
	constructor(parser: trinoSqlParser, ctx: PrincipalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ROLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROLE_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRolePrincipal) {
	 		listener.enterRolePrincipal(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRolePrincipal) {
	 		listener.exitRolePrincipal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRolePrincipal) {
			return visitor.visitRolePrincipal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RolesContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public COMMA__list(): TerminalNode[] {
	    	return this.getTokens(trinoSqlParser.COMMA_);
	}
	public COMMA_(i: number): TerminalNode {
		return this.getToken(trinoSqlParser.COMMA_, i);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_roles;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterRoles) {
	 		listener.enterRoles(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitRoles) {
	 		listener.exitRoles(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitRoles) {
			return visitor.visitRoles(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_identifier;
	}
	public copyFrom(ctx: IdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class BackQuotedIdentifierContext extends IdentifierContext {
	constructor(parser: trinoSqlParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BACKQUOTED_IDENTIFIER_(): TerminalNode {
		return this.getToken(trinoSqlParser.BACKQUOTED_IDENTIFIER_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterBackQuotedIdentifier) {
	 		listener.enterBackQuotedIdentifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitBackQuotedIdentifier) {
	 		listener.exitBackQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitBackQuotedIdentifier) {
			return visitor.visitBackQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuotedIdentifierContext extends IdentifierContext {
	constructor(parser: trinoSqlParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public QUOTED_IDENTIFIER_(): TerminalNode {
		return this.getToken(trinoSqlParser.QUOTED_IDENTIFIER_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterQuotedIdentifier) {
	 		listener.enterQuotedIdentifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitQuotedIdentifier) {
	 		listener.exitQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifier) {
			return visitor.visitQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DigitIdentifierContext extends IdentifierContext {
	constructor(parser: trinoSqlParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DIGIT_IDENTIFIER_(): TerminalNode {
		return this.getToken(trinoSqlParser.DIGIT_IDENTIFIER_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDigitIdentifier) {
	 		listener.enterDigitIdentifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDigitIdentifier) {
	 		listener.exitDigitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDigitIdentifier) {
			return visitor.visitDigitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnquotedIdentifierContext extends IdentifierContext {
	constructor(parser: trinoSqlParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IDENTIFIER_(): TerminalNode {
		return this.getToken(trinoSqlParser.IDENTIFIER_, 0);
	}
	public nonReserved(): NonReservedContext {
		return this.getTypedRuleContext(NonReservedContext, 0) as NonReservedContext;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterUnquotedIdentifier) {
	 		listener.enterUnquotedIdentifier(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitUnquotedIdentifier) {
	 		listener.exitUnquotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitUnquotedIdentifier) {
			return visitor.visitUnquotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_number;
	}
	public copyFrom(ctx: NumberContext): void {
		super.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends NumberContext {
	constructor(parser: trinoSqlParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DECIMAL_VALUE_(): TerminalNode {
		return this.getToken(trinoSqlParser.DECIMAL_VALUE_, 0);
	}
	public MINUS_(): TerminalNode {
		return this.getToken(trinoSqlParser.MINUS_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDecimalLiteral) {
	 		listener.enterDecimalLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDecimalLiteral) {
	 		listener.exitDecimalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDecimalLiteral) {
			return visitor.visitDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoubleLiteralContext extends NumberContext {
	constructor(parser: trinoSqlParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOUBLE_VALUE_(): TerminalNode {
		return this.getToken(trinoSqlParser.DOUBLE_VALUE_, 0);
	}
	public MINUS_(): TerminalNode {
		return this.getToken(trinoSqlParser.MINUS_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterDoubleLiteral) {
	 		listener.enterDoubleLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitDoubleLiteral) {
	 		listener.exitDoubleLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitDoubleLiteral) {
			return visitor.visitDoubleLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntegerLiteralContext extends NumberContext {
	constructor(parser: trinoSqlParser, ctx: NumberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER_VALUE_(): TerminalNode {
		return this.getToken(trinoSqlParser.INTEGER_VALUE_, 0);
	}
	public MINUS_(): TerminalNode {
		return this.getToken(trinoSqlParser.MINUS_, 0);
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterIntegerLiteral) {
	 		listener.enterIntegerLiteral(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitIntegerLiteral) {
	 		listener.exitIntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonReservedContext extends ParserRuleContext {
	constructor(parser?: trinoSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABSENT_(): TerminalNode {
		return this.getToken(trinoSqlParser.ABSENT_, 0);
	}
	public ADD_(): TerminalNode {
		return this.getToken(trinoSqlParser.ADD_, 0);
	}
	public ADMIN_(): TerminalNode {
		return this.getToken(trinoSqlParser.ADMIN_, 0);
	}
	public AFTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.AFTER_, 0);
	}
	public ALL_(): TerminalNode {
		return this.getToken(trinoSqlParser.ALL_, 0);
	}
	public ANALYZE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ANALYZE_, 0);
	}
	public ANY_(): TerminalNode {
		return this.getToken(trinoSqlParser.ANY_, 0);
	}
	public ARRAY_(): TerminalNode {
		return this.getToken(trinoSqlParser.ARRAY_, 0);
	}
	public ASC_(): TerminalNode {
		return this.getToken(trinoSqlParser.ASC_, 0);
	}
	public AT_(): TerminalNode {
		return this.getToken(trinoSqlParser.AT_, 0);
	}
	public AUTHORIZATION_(): TerminalNode {
		return this.getToken(trinoSqlParser.AUTHORIZATION_, 0);
	}
	public BERNOULLI_(): TerminalNode {
		return this.getToken(trinoSqlParser.BERNOULLI_, 0);
	}
	public BOTH_(): TerminalNode {
		return this.getToken(trinoSqlParser.BOTH_, 0);
	}
	public CALL_(): TerminalNode {
		return this.getToken(trinoSqlParser.CALL_, 0);
	}
	public CASCADE_(): TerminalNode {
		return this.getToken(trinoSqlParser.CASCADE_, 0);
	}
	public CATALOGS_(): TerminalNode {
		return this.getToken(trinoSqlParser.CATALOGS_, 0);
	}
	public COLUMN_(): TerminalNode {
		return this.getToken(trinoSqlParser.COLUMN_, 0);
	}
	public COLUMNS_(): TerminalNode {
		return this.getToken(trinoSqlParser.COLUMNS_, 0);
	}
	public COMMENT_(): TerminalNode {
		return this.getToken(trinoSqlParser.COMMENT_, 0);
	}
	public COMMIT_(): TerminalNode {
		return this.getToken(trinoSqlParser.COMMIT_, 0);
	}
	public COMMITTED_(): TerminalNode {
		return this.getToken(trinoSqlParser.COMMITTED_, 0);
	}
	public CONDITIONAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.CONDITIONAL_, 0);
	}
	public COPARTITION_(): TerminalNode {
		return this.getToken(trinoSqlParser.COPARTITION_, 0);
	}
	public COUNT_(): TerminalNode {
		return this.getToken(trinoSqlParser.COUNT_, 0);
	}
	public CURRENT_(): TerminalNode {
		return this.getToken(trinoSqlParser.CURRENT_, 0);
	}
	public DATA_(): TerminalNode {
		return this.getToken(trinoSqlParser.DATA_, 0);
	}
	public DATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.DATE_, 0);
	}
	public DAY_(): TerminalNode {
		return this.getToken(trinoSqlParser.DAY_, 0);
	}
	public DEFAULT_(): TerminalNode {
		return this.getToken(trinoSqlParser.DEFAULT_, 0);
	}
	public DEFINE_(): TerminalNode {
		return this.getToken(trinoSqlParser.DEFINE_, 0);
	}
	public DEFINER_(): TerminalNode {
		return this.getToken(trinoSqlParser.DEFINER_, 0);
	}
	public DESC_(): TerminalNode {
		return this.getToken(trinoSqlParser.DESC_, 0);
	}
	public DESCRIPTOR_(): TerminalNode {
		return this.getToken(trinoSqlParser.DESCRIPTOR_, 0);
	}
	public DISTRIBUTED_(): TerminalNode {
		return this.getToken(trinoSqlParser.DISTRIBUTED_, 0);
	}
	public DOUBLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.DOUBLE_, 0);
	}
	public EMPTY_(): TerminalNode {
		return this.getToken(trinoSqlParser.EMPTY_, 0);
	}
	public ENCODING_(): TerminalNode {
		return this.getToken(trinoSqlParser.ENCODING_, 0);
	}
	public ERROR_(): TerminalNode {
		return this.getToken(trinoSqlParser.ERROR_, 0);
	}
	public EXCLUDING_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXCLUDING_, 0);
	}
	public EXPLAIN_(): TerminalNode {
		return this.getToken(trinoSqlParser.EXPLAIN_, 0);
	}
	public FETCH_(): TerminalNode {
		return this.getToken(trinoSqlParser.FETCH_, 0);
	}
	public FILTER_(): TerminalNode {
		return this.getToken(trinoSqlParser.FILTER_, 0);
	}
	public FINAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.FINAL_, 0);
	}
	public FIRST_(): TerminalNode {
		return this.getToken(trinoSqlParser.FIRST_, 0);
	}
	public FOLLOWING_(): TerminalNode {
		return this.getToken(trinoSqlParser.FOLLOWING_, 0);
	}
	public FORMAT_(): TerminalNode {
		return this.getToken(trinoSqlParser.FORMAT_, 0);
	}
	public FUNCTIONS_(): TerminalNode {
		return this.getToken(trinoSqlParser.FUNCTIONS_, 0);
	}
	public GRACE_(): TerminalNode {
		return this.getToken(trinoSqlParser.GRACE_, 0);
	}
	public GRANT_(): TerminalNode {
		return this.getToken(trinoSqlParser.GRANT_, 0);
	}
	public DENY_(): TerminalNode {
		return this.getToken(trinoSqlParser.DENY_, 0);
	}
	public GRANTED_(): TerminalNode {
		return this.getToken(trinoSqlParser.GRANTED_, 0);
	}
	public GRANTS_(): TerminalNode {
		return this.getToken(trinoSqlParser.GRANTS_, 0);
	}
	public GRAPHVIZ_(): TerminalNode {
		return this.getToken(trinoSqlParser.GRAPHVIZ_, 0);
	}
	public GROUPS_(): TerminalNode {
		return this.getToken(trinoSqlParser.GROUPS_, 0);
	}
	public HOUR_(): TerminalNode {
		return this.getToken(trinoSqlParser.HOUR_, 0);
	}
	public IF_(): TerminalNode {
		return this.getToken(trinoSqlParser.IF_, 0);
	}
	public IGNORE_(): TerminalNode {
		return this.getToken(trinoSqlParser.IGNORE_, 0);
	}
	public INCLUDING_(): TerminalNode {
		return this.getToken(trinoSqlParser.INCLUDING_, 0);
	}
	public INITIAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.INITIAL_, 0);
	}
	public INPUT_(): TerminalNode {
		return this.getToken(trinoSqlParser.INPUT_, 0);
	}
	public INTERVAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.INTERVAL_, 0);
	}
	public INVOKER_(): TerminalNode {
		return this.getToken(trinoSqlParser.INVOKER_, 0);
	}
	public IO_(): TerminalNode {
		return this.getToken(trinoSqlParser.IO_, 0);
	}
	public ISOLATION_(): TerminalNode {
		return this.getToken(trinoSqlParser.ISOLATION_, 0);
	}
	public JSON_(): TerminalNode {
		return this.getToken(trinoSqlParser.JSON_, 0);
	}
	public KEEP_(): TerminalNode {
		return this.getToken(trinoSqlParser.KEEP_, 0);
	}
	public KEY_(): TerminalNode {
		return this.getToken(trinoSqlParser.KEY_, 0);
	}
	public KEYS_(): TerminalNode {
		return this.getToken(trinoSqlParser.KEYS_, 0);
	}
	public LAST_(): TerminalNode {
		return this.getToken(trinoSqlParser.LAST_, 0);
	}
	public LATERAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.LATERAL_, 0);
	}
	public LEADING_(): TerminalNode {
		return this.getToken(trinoSqlParser.LEADING_, 0);
	}
	public LEVEL_(): TerminalNode {
		return this.getToken(trinoSqlParser.LEVEL_, 0);
	}
	public LIMIT_(): TerminalNode {
		return this.getToken(trinoSqlParser.LIMIT_, 0);
	}
	public LOCAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.LOCAL_, 0);
	}
	public LOGICAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.LOGICAL_, 0);
	}
	public MAP_(): TerminalNode {
		return this.getToken(trinoSqlParser.MAP_, 0);
	}
	public MATCH_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATCH_, 0);
	}
	public MATCHED_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATCHED_, 0);
	}
	public MATCHES_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATCHES_, 0);
	}
	public MATCH_RECOGNIZE_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATCH_RECOGNIZE_, 0);
	}
	public MATERIALIZED_(): TerminalNode {
		return this.getToken(trinoSqlParser.MATERIALIZED_, 0);
	}
	public MEASURES_(): TerminalNode {
		return this.getToken(trinoSqlParser.MEASURES_, 0);
	}
	public MERGE_(): TerminalNode {
		return this.getToken(trinoSqlParser.MERGE_, 0);
	}
	public MINUTE_(): TerminalNode {
		return this.getToken(trinoSqlParser.MINUTE_, 0);
	}
	public MONTH_(): TerminalNode {
		return this.getToken(trinoSqlParser.MONTH_, 0);
	}
	public NEXT_(): TerminalNode {
		return this.getToken(trinoSqlParser.NEXT_, 0);
	}
	public NFC_(): TerminalNode {
		return this.getToken(trinoSqlParser.NFC_, 0);
	}
	public NFD_(): TerminalNode {
		return this.getToken(trinoSqlParser.NFD_, 0);
	}
	public NFKC_(): TerminalNode {
		return this.getToken(trinoSqlParser.NFKC_, 0);
	}
	public NFKD_(): TerminalNode {
		return this.getToken(trinoSqlParser.NFKD_, 0);
	}
	public NO_(): TerminalNode {
		return this.getToken(trinoSqlParser.NO_, 0);
	}
	public NONE_(): TerminalNode {
		return this.getToken(trinoSqlParser.NONE_, 0);
	}
	public NULLIF_(): TerminalNode {
		return this.getToken(trinoSqlParser.NULLIF_, 0);
	}
	public NULLS_(): TerminalNode {
		return this.getToken(trinoSqlParser.NULLS_, 0);
	}
	public OBJECT_(): TerminalNode {
		return this.getToken(trinoSqlParser.OBJECT_, 0);
	}
	public OF_(): TerminalNode {
		return this.getToken(trinoSqlParser.OF_, 0);
	}
	public OFFSET_(): TerminalNode {
		return this.getToken(trinoSqlParser.OFFSET_, 0);
	}
	public OMIT_(): TerminalNode {
		return this.getToken(trinoSqlParser.OMIT_, 0);
	}
	public ONE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ONE_, 0);
	}
	public ONLY_(): TerminalNode {
		return this.getToken(trinoSqlParser.ONLY_, 0);
	}
	public OPTION_(): TerminalNode {
		return this.getToken(trinoSqlParser.OPTION_, 0);
	}
	public ORDINALITY_(): TerminalNode {
		return this.getToken(trinoSqlParser.ORDINALITY_, 0);
	}
	public OUTPUT_(): TerminalNode {
		return this.getToken(trinoSqlParser.OUTPUT_, 0);
	}
	public OVER_(): TerminalNode {
		return this.getToken(trinoSqlParser.OVER_, 0);
	}
	public OVERFLOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.OVERFLOW_, 0);
	}
	public PARTITION_(): TerminalNode {
		return this.getToken(trinoSqlParser.PARTITION_, 0);
	}
	public PARTITIONS_(): TerminalNode {
		return this.getToken(trinoSqlParser.PARTITIONS_, 0);
	}
	public PASSING_(): TerminalNode {
		return this.getToken(trinoSqlParser.PASSING_, 0);
	}
	public PAST_(): TerminalNode {
		return this.getToken(trinoSqlParser.PAST_, 0);
	}
	public PATH_(): TerminalNode {
		return this.getToken(trinoSqlParser.PATH_, 0);
	}
	public PATTERN_(): TerminalNode {
		return this.getToken(trinoSqlParser.PATTERN_, 0);
	}
	public PER_(): TerminalNode {
		return this.getToken(trinoSqlParser.PER_, 0);
	}
	public PERIOD_(): TerminalNode {
		return this.getToken(trinoSqlParser.PERIOD_, 0);
	}
	public PERMUTE_(): TerminalNode {
		return this.getToken(trinoSqlParser.PERMUTE_, 0);
	}
	public POSITION_(): TerminalNode {
		return this.getToken(trinoSqlParser.POSITION_, 0);
	}
	public PRECEDING_(): TerminalNode {
		return this.getToken(trinoSqlParser.PRECEDING_, 0);
	}
	public PRECISION_(): TerminalNode {
		return this.getToken(trinoSqlParser.PRECISION_, 0);
	}
	public PRIVILEGES_(): TerminalNode {
		return this.getToken(trinoSqlParser.PRIVILEGES_, 0);
	}
	public PROPERTIES_(): TerminalNode {
		return this.getToken(trinoSqlParser.PROPERTIES_, 0);
	}
	public PRUNE_(): TerminalNode {
		return this.getToken(trinoSqlParser.PRUNE_, 0);
	}
	public QUOTES_(): TerminalNode {
		return this.getToken(trinoSqlParser.QUOTES_, 0);
	}
	public RANGE_(): TerminalNode {
		return this.getToken(trinoSqlParser.RANGE_, 0);
	}
	public READ_(): TerminalNode {
		return this.getToken(trinoSqlParser.READ_, 0);
	}
	public REFRESH_(): TerminalNode {
		return this.getToken(trinoSqlParser.REFRESH_, 0);
	}
	public RENAME_(): TerminalNode {
		return this.getToken(trinoSqlParser.RENAME_, 0);
	}
	public REPEATABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.REPEATABLE_, 0);
	}
	public REPLACE_(): TerminalNode {
		return this.getToken(trinoSqlParser.REPLACE_, 0);
	}
	public RESET_(): TerminalNode {
		return this.getToken(trinoSqlParser.RESET_, 0);
	}
	public RESPECT_(): TerminalNode {
		return this.getToken(trinoSqlParser.RESPECT_, 0);
	}
	public RESTRICT_(): TerminalNode {
		return this.getToken(trinoSqlParser.RESTRICT_, 0);
	}
	public RETURNING_(): TerminalNode {
		return this.getToken(trinoSqlParser.RETURNING_, 0);
	}
	public REVOKE_(): TerminalNode {
		return this.getToken(trinoSqlParser.REVOKE_, 0);
	}
	public ROLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROLE_, 0);
	}
	public ROLES_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROLES_, 0);
	}
	public ROLLBACK_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROLLBACK_, 0);
	}
	public ROW_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROW_, 0);
	}
	public ROWS_(): TerminalNode {
		return this.getToken(trinoSqlParser.ROWS_, 0);
	}
	public RUNNING_(): TerminalNode {
		return this.getToken(trinoSqlParser.RUNNING_, 0);
	}
	public SCALAR_(): TerminalNode {
		return this.getToken(trinoSqlParser.SCALAR_, 0);
	}
	public SCHEMA_(): TerminalNode {
		return this.getToken(trinoSqlParser.SCHEMA_, 0);
	}
	public SCHEMAS_(): TerminalNode {
		return this.getToken(trinoSqlParser.SCHEMAS_, 0);
	}
	public SECOND_(): TerminalNode {
		return this.getToken(trinoSqlParser.SECOND_, 0);
	}
	public SECURITY_(): TerminalNode {
		return this.getToken(trinoSqlParser.SECURITY_, 0);
	}
	public SEEK_(): TerminalNode {
		return this.getToken(trinoSqlParser.SEEK_, 0);
	}
	public SERIALIZABLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.SERIALIZABLE_, 0);
	}
	public SESSION_(): TerminalNode {
		return this.getToken(trinoSqlParser.SESSION_, 0);
	}
	public SET_(): TerminalNode {
		return this.getToken(trinoSqlParser.SET_, 0);
	}
	public SETS_(): TerminalNode {
		return this.getToken(trinoSqlParser.SETS_, 0);
	}
	public SHOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.SHOW_, 0);
	}
	public SOME_(): TerminalNode {
		return this.getToken(trinoSqlParser.SOME_, 0);
	}
	public START_(): TerminalNode {
		return this.getToken(trinoSqlParser.START_, 0);
	}
	public STATS_(): TerminalNode {
		return this.getToken(trinoSqlParser.STATS_, 0);
	}
	public SUBSET_(): TerminalNode {
		return this.getToken(trinoSqlParser.SUBSET_, 0);
	}
	public SUBSTRING_(): TerminalNode {
		return this.getToken(trinoSqlParser.SUBSTRING_, 0);
	}
	public SYSTEM_(): TerminalNode {
		return this.getToken(trinoSqlParser.SYSTEM_, 0);
	}
	public TABLES_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLES_, 0);
	}
	public TABLESAMPLE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TABLESAMPLE_, 0);
	}
	public TEXT_(): TerminalNode {
		return this.getToken(trinoSqlParser.TEXT_, 0);
	}
	public TEXT_STRING_(): TerminalNode {
		return this.getToken(trinoSqlParser.TEXT_STRING_, 0);
	}
	public TIES_(): TerminalNode {
		return this.getToken(trinoSqlParser.TIES_, 0);
	}
	public TIME_(): TerminalNode {
		return this.getToken(trinoSqlParser.TIME_, 0);
	}
	public TIMESTAMP_(): TerminalNode {
		return this.getToken(trinoSqlParser.TIMESTAMP_, 0);
	}
	public TO_(): TerminalNode {
		return this.getToken(trinoSqlParser.TO_, 0);
	}
	public TRAILING_(): TerminalNode {
		return this.getToken(trinoSqlParser.TRAILING_, 0);
	}
	public TRANSACTION_(): TerminalNode {
		return this.getToken(trinoSqlParser.TRANSACTION_, 0);
	}
	public TRUNCATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TRUNCATE_, 0);
	}
	public TRY_CAST_(): TerminalNode {
		return this.getToken(trinoSqlParser.TRY_CAST_, 0);
	}
	public TYPE_(): TerminalNode {
		return this.getToken(trinoSqlParser.TYPE_, 0);
	}
	public UNBOUNDED_(): TerminalNode {
		return this.getToken(trinoSqlParser.UNBOUNDED_, 0);
	}
	public UNCOMMITTED_(): TerminalNode {
		return this.getToken(trinoSqlParser.UNCOMMITTED_, 0);
	}
	public UNCONDITIONAL_(): TerminalNode {
		return this.getToken(trinoSqlParser.UNCONDITIONAL_, 0);
	}
	public UNIQUE_(): TerminalNode {
		return this.getToken(trinoSqlParser.UNIQUE_, 0);
	}
	public UNKNOWN_(): TerminalNode {
		return this.getToken(trinoSqlParser.UNKNOWN_, 0);
	}
	public UNMATCHED_(): TerminalNode {
		return this.getToken(trinoSqlParser.UNMATCHED_, 0);
	}
	public UPDATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.UPDATE_, 0);
	}
	public USE_(): TerminalNode {
		return this.getToken(trinoSqlParser.USE_, 0);
	}
	public USER_(): TerminalNode {
		return this.getToken(trinoSqlParser.USER_, 0);
	}
	public UTF16_(): TerminalNode {
		return this.getToken(trinoSqlParser.UTF16_, 0);
	}
	public UTF32_(): TerminalNode {
		return this.getToken(trinoSqlParser.UTF32_, 0);
	}
	public UTF8_(): TerminalNode {
		return this.getToken(trinoSqlParser.UTF8_, 0);
	}
	public VALIDATE_(): TerminalNode {
		return this.getToken(trinoSqlParser.VALIDATE_, 0);
	}
	public VALUE_(): TerminalNode {
		return this.getToken(trinoSqlParser.VALUE_, 0);
	}
	public VERBOSE_(): TerminalNode {
		return this.getToken(trinoSqlParser.VERBOSE_, 0);
	}
	public VERSION_(): TerminalNode {
		return this.getToken(trinoSqlParser.VERSION_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(trinoSqlParser.VIEW_, 0);
	}
	public WINDOW_(): TerminalNode {
		return this.getToken(trinoSqlParser.WINDOW_, 0);
	}
	public WITHIN_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITHIN_, 0);
	}
	public WITHOUT_(): TerminalNode {
		return this.getToken(trinoSqlParser.WITHOUT_, 0);
	}
	public WORK_(): TerminalNode {
		return this.getToken(trinoSqlParser.WORK_, 0);
	}
	public WRAPPER_(): TerminalNode {
		return this.getToken(trinoSqlParser.WRAPPER_, 0);
	}
	public WRITE_(): TerminalNode {
		return this.getToken(trinoSqlParser.WRITE_, 0);
	}
	public YEAR_(): TerminalNode {
		return this.getToken(trinoSqlParser.YEAR_, 0);
	}
	public ZONE_(): TerminalNode {
		return this.getToken(trinoSqlParser.ZONE_, 0);
	}
    public get ruleIndex(): number {
    	return trinoSqlParser.RULE_nonReserved;
	}
	public enterRule(listener: trinoSqlParserListener): void {
	    if(listener.enterNonReserved) {
	 		listener.enterNonReserved(this);
		}
	}
	public exitRule(listener: trinoSqlParserListener): void {
	    if(listener.exitNonReserved) {
	 		listener.exitNonReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: trinoSqlParserVisitor<Result>): Result {
		if (visitor.visitNonReserved) {
			return visitor.visitNonReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
