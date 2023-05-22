// Generated from /Users/zhenglin/Documents/parser/dt-sql-parser/src/grammar/trinosql/trinoSqlLexer.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class trinoSqlLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, "'ABSENT'", "'ADD'", 
                                                   "'ADMIN'", "'AFTER'", 
                                                   "'ALL'", "'ALTER'", "'ANALYZE'", 
                                                   "'AND'", "'ANY'", "'ARRAY'", 
                                                   "'AS'", "'ASC'", "'AT'", 
                                                   "'AUTHORIZATION'", "'BERNOULLI'", 
                                                   "'BETWEEN'", "'BOTH'", 
                                                   "'BY'", "'CALL'", "'CASCADE'", 
                                                   "'CASE'", "'CAST'", "'CATALOGS'", 
                                                   "'COLUMN'", "'COLUMNS'", 
                                                   "'COMMENT'", "'COMMIT'", 
                                                   "'COMMITTED'", "'CONDITIONAL'", 
                                                   "'CONSTRAINT'", "'COUNT'", 
                                                   "'COPARTITION'", "'CREATE'", 
                                                   "'CROSS'", "'CUBE'", 
                                                   "'CURRENT'", "'CURRENT_CATALOG'", 
                                                   "'CURRENT_DATE'", "'CURRENT_PATH'", 
                                                   "'CURRENT_ROLE'", "'CURRENT_SCHEMA'", 
                                                   "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", 
                                                   "'CURRENT_USER'", "'DATA'", 
                                                   "'DATE'", "'DAY'", "'DEALLOCATE'", 
                                                   "'DEFAULT'", "'DEFINER'", 
                                                   "'DELETE'", "'DENY'", 
                                                   "'DESC'", "'DESCRIBE'", 
                                                   "'DESCRIPTOR'", "'DEFINE'", 
                                                   "'DISTINCT'", "'DISTRIBUTED'", 
                                                   "'DOUBLE'", "'DROP'", 
                                                   "'ELSE'", "'EMPTY'", 
                                                   "'ENCODING'", "'END'", 
                                                   "'ERROR'", "'ESCAPE'", 
                                                   "'EXCEPT'", "'EXCLUDING'", 
                                                   "'EXECUTE'", "'EXISTS'", 
                                                   "'EXPLAIN'", "'EXTRACT'", 
                                                   "'FALSE'", "'FETCH'", 
                                                   "'FILTER'", "'FINAL'", 
                                                   "'FIRST'", "'FOLLOWING'", 
                                                   "'FOR'", "'FORMAT'", 
                                                   "'FROM'", "'FULL'", "'FUNCTIONS'", 
                                                   "'GRACE'", "'GRANT'", 
                                                   "'GRANTED'", "'GRANTS'", 
                                                   "'GRAPHVIZ'", "'GROUP'", 
                                                   "'GROUPING'", "'GROUPS'", 
                                                   "'HAVING'", "'HOUR'", 
                                                   "'IF'", "'IGNORE'", "'IN'", 
                                                   "'INCLUDING'", "'INITIAL'", 
                                                   "'INNER'", "'INPUT'", 
                                                   "'INSERT'", "'INTERSECT'", 
                                                   "'INTERVAL'", "'INTO'", 
                                                   "'INVOKER'", "'IO'", 
                                                   "'IS'", "'ISOLATION'", 
                                                   "'JOIN'", "'JSON'", "'JSON_ARRAY'", 
                                                   "'JSON_EXISTS'", "'JSON_OBJECT'", 
                                                   "'JSON_QUERY'", "'JSON_VALUE'", 
                                                   "'KEEP'", "'KEY'", "'KEYS'", 
                                                   "'LAST'", "'LATERAL'", 
                                                   "'LEADING'", "'LEFT'", 
                                                   "'LEVEL'", "'LIKE'", 
                                                   "'LIMIT'", "'LISTAGG'", 
                                                   "'LOCAL'", "'LOCALTIME'", 
                                                   "'LOCALTIMESTAMP'", "'LOGICAL'", 
                                                   "'MAP'", "'MATCH'", "'MATCHED'", 
                                                   "'MATCHES'", "'MATCH_RECOGNIZE'", 
                                                   "'MATERIALIZED'", "'MEASURES'", 
                                                   "'MERGE'", "'MINUTE'", 
                                                   "'MONTH'", "'NATURAL'", 
                                                   "'NEXT'", "'NFC'", "'NFD'", 
                                                   "'NFKC'", "'NFKD'", "'NO'", 
                                                   "'NONE'", "'NORMALIZE'", 
                                                   "'NOT'", "'NULL'", "'NULLIF'", 
                                                   "'NULLS'", "'OBJECT'", 
                                                   "'OFFSET'", "'OMIT'", 
                                                   "'OF'", "'ON'", "'ONE'", 
                                                   "'ONLY'", "'OPTION'", 
                                                   "'OR'", "'ORDER'", "'ORDINALITY'", 
                                                   "'OUTER'", "'OUTPUT'", 
                                                   "'OVER'", "'OVERFLOW'", 
                                                   "'PARTITION'", "'PARTITIONS'", 
                                                   "'PASSING'", "'PAST'", 
                                                   "'PATH'", "'PATTERN'", 
                                                   "'PER'", "'PERIOD'", 
                                                   "'PERMUTE'", "'POSITION'", 
                                                   "'PRECEDING'", "'PRECISION'", 
                                                   "'PREPARE'", "'PRIVILEGES'", 
                                                   "'PROPERTIES'", "'PRUNE'", 
                                                   "'QUOTES'", "'RANGE'", 
                                                   "'READ'", "'RECURSIVE'", 
                                                   "'REFRESH'", "'RENAME'", 
                                                   "'REPEATABLE'", "'REPLACE'", 
                                                   "'RESET'", "'RESPECT'", 
                                                   "'RESTRICT'", "'RETURNING'", 
                                                   "'REVOKE'", "'RIGHT'", 
                                                   "'ROLE'", "'ROLES'", 
                                                   "'ROLLBACK'", "'ROLLUP'", 
                                                   "'ROW'", "'ROWS'", "'RUNNING'", 
                                                   "'SCALAR'", "'SCHEMA'", 
                                                   "'SCHEMAS'", "'SECOND'", 
                                                   "'SECURITY'", "'SEEK'", 
                                                   "'SELECT'", "'SERIALIZABLE'", 
                                                   "'SESSION'", "'SET'", 
                                                   "'SETS'", "'SHOW'", "'SKIP'", 
                                                   "'SOME'", "'START'", 
                                                   "'STATS'", "'SUBSET'", 
                                                   "'SUBSTRING'", "'SYSTEM'", 
                                                   "'TABLE'", "'TABLES'", 
                                                   "'TABLESAMPLE'", "'TEXT'", 
                                                   "'STRING'", "'THEN'", 
                                                   "'TIES'", "'TIME'", "'TIMESTAMP'", 
                                                   "'TO'", "'TRAILING'", 
                                                   "'TRANSACTION'", "'TRIM'", 
                                                   "'TRUE'", "'TRUNCATE'", 
                                                   "'TRY_CAST'", "'TYPE'", 
                                                   "'UESCAPE'", "'UNBOUNDED'", 
                                                   "'UNCOMMITTED'", "'UNCONDITIONAL'", 
                                                   "'UNION'", "'UNIQUE'", 
                                                   "'UNKNOWN'", "'UNMATCHED'", 
                                                   "'UNNEST'", "'UPDATE'", 
                                                   "'USE'", "'USER'", "'USING'", 
                                                   "'UTF16'", "'UTF32'", 
                                                   "'UTF8'", "'VALIDATE'", 
                                                   "'VALUE'", "'VALUES'", 
                                                   "'VERBOSE'", "'VERSION'", 
                                                   "'VIEW'", "'WHEN'", "'WHERE'", 
                                                   "'WINDOW'", "'WITH'", 
                                                   "'WITHIN'", "'WITHOUT'", 
                                                   "'WORK'", "'WRAPPER'", 
                                                   "'WRITE'", "'YEAR'", 
                                                   "'ZONE'", "'='", null, 
                                                   "'<'", "'<='", "'>'", 
                                                   "'>='", "'+'", "'-'", 
                                                   "'*'", "'/'", "'%'", 
                                                   "'||'", "'?'", "'.'", 
                                                   "'_:'", "','", "';'", 
                                                   "'('", "')'", "'['", 
                                                   "']'", "'{'", "'}'", 
                                                   "'{-'", "'-}'", "'<-'", 
                                                   "'->'", "'=>'", "'|'", 
                                                   "'$'", "'^'" ];
	public static readonly symbolicNames: string[] = [ null, "ABSENT_", "ADD_", 
                                                    "ADMIN_", "AFTER_", 
                                                    "ALL_", "ALTER_", "ANALYZE_", 
                                                    "AND_", "ANY_", "ARRAY_", 
                                                    "AS_", "ASC_", "AT_", 
                                                    "AUTHORIZATION_", "BERNOULLI_", 
                                                    "BETWEEN_", "BOTH_", 
                                                    "BY_", "CALL_", "CASCADE_", 
                                                    "CASE_", "CAST_", "CATALOGS_", 
                                                    "COLUMN_", "COLUMNS_", 
                                                    "COMMENT_", "COMMIT_", 
                                                    "COMMITTED_", "CONDITIONAL_", 
                                                    "CONSTRAINT_", "COUNT_", 
                                                    "COPARTITION_", "CREATE_", 
                                                    "CROSS_", "CUBE_", "CURRENT_", 
                                                    "CURRENT_CATALOG_", 
                                                    "CURRENT_DATE_", "CURRENT_PATH_", 
                                                    "CURRENT_ROLE_", "CURRENT_SCHEMA_", 
                                                    "CURRENT_TIME_", "CURRENT_TIMESTAMP_", 
                                                    "CURRENT_USER_", "DATA_", 
                                                    "DATE_", "DAY_", "DEALLOCATE_", 
                                                    "DEFAULT_", "DEFINER_", 
                                                    "DELETE_", "DENY_", 
                                                    "DESC_", "DESCRIBE_", 
                                                    "DESCRIPTOR_", "DEFINE_", 
                                                    "DISTINCT_", "DISTRIBUTED_", 
                                                    "DOUBLE_", "DROP_", 
                                                    "ELSE_", "EMPTY_", "ENCODING_", 
                                                    "END_", "ERROR_", "ESCAPE_", 
                                                    "EXCEPT_", "EXCLUDING_", 
                                                    "EXECUTE_", "EXISTS_", 
                                                    "EXPLAIN_", "EXTRACT_", 
                                                    "FALSE_", "FETCH_", 
                                                    "FILTER_", "FINAL_", 
                                                    "FIRST_", "FOLLOWING_", 
                                                    "FOR_", "FORMAT_", "FROM_", 
                                                    "FULL_", "FUNCTIONS_", 
                                                    "GRACE_", "GRANT_", 
                                                    "GRANTED_", "GRANTS_", 
                                                    "GRAPHVIZ_", "GROUP_", 
                                                    "GROUPING_", "GROUPS_", 
                                                    "HAVING_", "HOUR_", 
                                                    "IF_", "IGNORE_", "IN_", 
                                                    "INCLUDING_", "INITIAL_", 
                                                    "INNER_", "INPUT_", 
                                                    "INSERT_", "INTERSECT_", 
                                                    "INTERVAL_", "INTO_", 
                                                    "INVOKER_", "IO_", "IS_", 
                                                    "ISOLATION_", "JOIN_", 
                                                    "JSON_", "JSON_ARRAY_", 
                                                    "JSON_EXISTS_", "JSON_OBJECT_", 
                                                    "JSON_QUERY_", "JSON_VALUE_", 
                                                    "KEEP_", "KEY_", "KEYS_", 
                                                    "LAST_", "LATERAL_", 
                                                    "LEADING_", "LEFT_", 
                                                    "LEVEL_", "LIKE_", "LIMIT_", 
                                                    "LISTAGG_", "LOCAL_", 
                                                    "LOCALTIME_", "LOCALTIMESTAMP_", 
                                                    "LOGICAL_", "MAP_", 
                                                    "MATCH_", "MATCHED_", 
                                                    "MATCHES_", "MATCH_RECOGNIZE_", 
                                                    "MATERIALIZED_", "MEASURES_", 
                                                    "MERGE_", "MINUTE_", 
                                                    "MONTH_", "NATURAL_", 
                                                    "NEXT_", "NFC_", "NFD_", 
                                                    "NFKC_", "NFKD_", "NO_", 
                                                    "NONE_", "NORMALIZE_", 
                                                    "NOT_", "NULL_", "NULLIF_", 
                                                    "NULLS_", "OBJECT_", 
                                                    "OFFSET_", "OMIT_", 
                                                    "OF_", "ON_", "ONE_", 
                                                    "ONLY_", "OPTION_", 
                                                    "OR_", "ORDER_", "ORDINALITY_", 
                                                    "OUTER_", "OUTPUT_", 
                                                    "OVER_", "OVERFLOW_", 
                                                    "PARTITION_", "PARTITIONS_", 
                                                    "PASSING_", "PAST_", 
                                                    "PATH_", "PATTERN_", 
                                                    "PER_", "PERIOD_", "PERMUTE_", 
                                                    "POSITION_", "PRECEDING_", 
                                                    "PRECISION_", "PREPARE_", 
                                                    "PRIVILEGES_", "PROPERTIES_", 
                                                    "PRUNE_", "QUOTES_", 
                                                    "RANGE_", "READ_", "RECURSIVE_", 
                                                    "REFRESH_", "RENAME_", 
                                                    "REPEATABLE_", "REPLACE_", 
                                                    "RESET_", "RESPECT_", 
                                                    "RESTRICT_", "RETURNING_", 
                                                    "REVOKE_", "RIGHT_", 
                                                    "ROLE_", "ROLES_", "ROLLBACK_", 
                                                    "ROLLUP_", "ROW_", "ROWS_", 
                                                    "RUNNING_", "SCALAR_", 
                                                    "SCHEMA_", "SCHEMAS_", 
                                                    "SECOND_", "SECURITY_", 
                                                    "SEEK_", "SELECT_", 
                                                    "SERIALIZABLE_", "SESSION_", 
                                                    "SET_", "SETS_", "SHOW_", 
                                                    "SKIP_", "SOME_", "START_", 
                                                    "STATS_", "SUBSET_", 
                                                    "SUBSTRING_", "SYSTEM_", 
                                                    "TABLE_", "TABLES_", 
                                                    "TABLESAMPLE_", "TEXT_", 
                                                    "TEXT_STRING_", "THEN_", 
                                                    "TIES_", "TIME_", "TIMESTAMP_", 
                                                    "TO_", "TRAILING_", 
                                                    "TRANSACTION_", "TRIM_", 
                                                    "TRUE_", "TRUNCATE_", 
                                                    "TRY_CAST_", "TYPE_", 
                                                    "UESCAPE_", "UNBOUNDED_", 
                                                    "UNCOMMITTED_", "UNCONDITIONAL_", 
                                                    "UNION_", "UNIQUE_", 
                                                    "UNKNOWN_", "UNMATCHED_", 
                                                    "UNNEST_", "UPDATE_", 
                                                    "USE_", "USER_", "USING_", 
                                                    "UTF16_", "UTF32_", 
                                                    "UTF8_", "VALIDATE_", 
                                                    "VALUE_", "VALUES_", 
                                                    "VERBOSE_", "VERSION_", 
                                                    "VIEW_", "WHEN_", "WHERE_", 
                                                    "WINDOW_", "WITH_", 
                                                    "WITHIN_", "WITHOUT_", 
                                                    "WORK_", "WRAPPER_", 
                                                    "WRITE_", "YEAR_", "ZONE_", 
                                                    "EQ_", "NEQ_", "LT_", 
                                                    "LTE_", "GT_", "GTE_", 
                                                    "PLUS_", "MINUS_", "ASTERISK_", 
                                                    "SLASH_", "PERCENT_", 
                                                    "CONCAT_", "QUESTION_MARK_", 
                                                    "DOT_", "COLON_", "COMMA_", 
                                                    "SEMICOLON_", "LPAREN_", 
                                                    "RPAREN_", "LSQUARE_", 
                                                    "RSQUARE_", "LCURLY_", 
                                                    "RCURLY_", "LCURLYHYPHEN_", 
                                                    "RCURLYHYPHEN_", "LARROW_", 
                                                    "RARROW_", "RDOUBLEARROW_", 
                                                    "VBAR_", "DOLLAR_", 
                                                    "CARET_", "STRING_", 
                                                    "UNICODE_STRING_", "BINARY_LITERAL_", 
                                                    "INTEGER_VALUE_", "DECIMAL_VALUE_", 
                                                    "DOUBLE_VALUE_", "IDENTIFIER_", 
                                                    "DIGIT_IDENTIFIER_", 
                                                    "QUOTED_IDENTIFIER_", 
                                                    "BACKQUOTED_IDENTIFIER_", 
                                                    "SIMPLE_COMMENT_", "BRACKETED_COMMENT_", 
                                                    "WS_", "UNRECOGNIZED_" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"ABSENT_", "ADD_", "ADMIN_", "AFTER_", "ALL_", "ALTER_", "ANALYZE_", "AND_", 
		"ANY_", "ARRAY_", "AS_", "ASC_", "AT_", "AUTHORIZATION_", "BERNOULLI_", 
		"BETWEEN_", "BOTH_", "BY_", "CALL_", "CASCADE_", "CASE_", "CAST_", "CATALOGS_", 
		"COLUMN_", "COLUMNS_", "COMMENT_", "COMMIT_", "COMMITTED_", "CONDITIONAL_", 
		"CONSTRAINT_", "COUNT_", "COPARTITION_", "CREATE_", "CROSS_", "CUBE_", 
		"CURRENT_", "CURRENT_CATALOG_", "CURRENT_DATE_", "CURRENT_PATH_", "CURRENT_ROLE_", 
		"CURRENT_SCHEMA_", "CURRENT_TIME_", "CURRENT_TIMESTAMP_", "CURRENT_USER_", 
		"DATA_", "DATE_", "DAY_", "DEALLOCATE_", "DEFAULT_", "DEFINER_", "DELETE_", 
		"DENY_", "DESC_", "DESCRIBE_", "DESCRIPTOR_", "DEFINE_", "DISTINCT_", 
		"DISTRIBUTED_", "DOUBLE_", "DROP_", "ELSE_", "EMPTY_", "ENCODING_", "END_", 
		"ERROR_", "ESCAPE_", "EXCEPT_", "EXCLUDING_", "EXECUTE_", "EXISTS_", "EXPLAIN_", 
		"EXTRACT_", "FALSE_", "FETCH_", "FILTER_", "FINAL_", "FIRST_", "FOLLOWING_", 
		"FOR_", "FORMAT_", "FROM_", "FULL_", "FUNCTIONS_", "GRACE_", "GRANT_", 
		"GRANTED_", "GRANTS_", "GRAPHVIZ_", "GROUP_", "GROUPING_", "GROUPS_", 
		"HAVING_", "HOUR_", "IF_", "IGNORE_", "IN_", "INCLUDING_", "INITIAL_", 
		"INNER_", "INPUT_", "INSERT_", "INTERSECT_", "INTERVAL_", "INTO_", "INVOKER_", 
		"IO_", "IS_", "ISOLATION_", "JOIN_", "JSON_", "JSON_ARRAY_", "JSON_EXISTS_", 
		"JSON_OBJECT_", "JSON_QUERY_", "JSON_VALUE_", "KEEP_", "KEY_", "KEYS_", 
		"LAST_", "LATERAL_", "LEADING_", "LEFT_", "LEVEL_", "LIKE_", "LIMIT_", 
		"LISTAGG_", "LOCAL_", "LOCALTIME_", "LOCALTIMESTAMP_", "LOGICAL_", "MAP_", 
		"MATCH_", "MATCHED_", "MATCHES_", "MATCH_RECOGNIZE_", "MATERIALIZED_", 
		"MEASURES_", "MERGE_", "MINUTE_", "MONTH_", "NATURAL_", "NEXT_", "NFC_", 
		"NFD_", "NFKC_", "NFKD_", "NO_", "NONE_", "NORMALIZE_", "NOT_", "NULL_", 
		"NULLIF_", "NULLS_", "OBJECT_", "OFFSET_", "OMIT_", "OF_", "ON_", "ONE_", 
		"ONLY_", "OPTION_", "OR_", "ORDER_", "ORDINALITY_", "OUTER_", "OUTPUT_", 
		"OVER_", "OVERFLOW_", "PARTITION_", "PARTITIONS_", "PASSING_", "PAST_", 
		"PATH_", "PATTERN_", "PER_", "PERIOD_", "PERMUTE_", "POSITION_", "PRECEDING_", 
		"PRECISION_", "PREPARE_", "PRIVILEGES_", "PROPERTIES_", "PRUNE_", "QUOTES_", 
		"RANGE_", "READ_", "RECURSIVE_", "REFRESH_", "RENAME_", "REPEATABLE_", 
		"REPLACE_", "RESET_", "RESPECT_", "RESTRICT_", "RETURNING_", "REVOKE_", 
		"RIGHT_", "ROLE_", "ROLES_", "ROLLBACK_", "ROLLUP_", "ROW_", "ROWS_", 
		"RUNNING_", "SCALAR_", "SCHEMA_", "SCHEMAS_", "SECOND_", "SECURITY_", 
		"SEEK_", "SELECT_", "SERIALIZABLE_", "SESSION_", "SET_", "SETS_", "SHOW_", 
		"SKIP_", "SOME_", "START_", "STATS_", "SUBSET_", "SUBSTRING_", "SYSTEM_", 
		"TABLE_", "TABLES_", "TABLESAMPLE_", "TEXT_", "TEXT_STRING_", "THEN_", 
		"TIES_", "TIME_", "TIMESTAMP_", "TO_", "TRAILING_", "TRANSACTION_", "TRIM_", 
		"TRUE_", "TRUNCATE_", "TRY_CAST_", "TYPE_", "UESCAPE_", "UNBOUNDED_", 
		"UNCOMMITTED_", "UNCONDITIONAL_", "UNION_", "UNIQUE_", "UNKNOWN_", "UNMATCHED_", 
		"UNNEST_", "UPDATE_", "USE_", "USER_", "USING_", "UTF16_", "UTF32_", "UTF8_", 
		"VALIDATE_", "VALUE_", "VALUES_", "VERBOSE_", "VERSION_", "VIEW_", "WHEN_", 
		"WHERE_", "WINDOW_", "WITH_", "WITHIN_", "WITHOUT_", "WORK_", "WRAPPER_", 
		"WRITE_", "YEAR_", "ZONE_", "EQ_", "NEQ_", "LT_", "LTE_", "GT_", "GTE_", 
		"PLUS_", "MINUS_", "ASTERISK_", "SLASH_", "PERCENT_", "CONCAT_", "QUESTION_MARK_", 
		"DOT_", "COLON_", "COMMA_", "SEMICOLON_", "LPAREN_", "RPAREN_", "LSQUARE_", 
		"RSQUARE_", "LCURLY_", "RCURLY_", "LCURLYHYPHEN_", "RCURLYHYPHEN_", "LARROW_", 
		"RARROW_", "RDOUBLEARROW_", "VBAR_", "DOLLAR_", "CARET_", "STRING_", "UNICODE_STRING_", 
		"BINARY_LITERAL_", "INTEGER_VALUE_", "DECIMAL_VALUE_", "DOUBLE_VALUE_", 
		"IDENTIFIER_", "DIGIT_IDENTIFIER_", "QUOTED_IDENTIFIER_", "BACKQUOTED_IDENTIFIER_", 
		"EXPONENT_", "DIGIT_", "LETTER_", "SIMPLE_COMMENT_", "BRACKETED_COMMENT_", 
		"WS_", "UNRECOGNIZED_",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, trinoSqlLexer._ATN, trinoSqlLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "trinoSqlLexer.g4"; }

	public get literalNames(): (string | null)[] { return trinoSqlLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return trinoSqlLexer.symbolicNames; }
	public get ruleNames(): string[] { return trinoSqlLexer.ruleNames; }

	public get serializedATN(): number[] { return trinoSqlLexer._serializedATN; }

	public get channelNames(): string[] { return trinoSqlLexer.channelNames; }

	public get modeNames(): string[] { return trinoSqlLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,319,2880,6,-1,2,
	0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,
	9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,
	7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,
	23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,
	2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,
	38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,
	7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
	52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,
	2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,
	67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,
	7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,
	81,2,82,7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,
	2,89,7,89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,
	96,7,96,2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,
	2,103,7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,
	2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
	2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,
	2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,
	2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,
	2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,
	2,139,7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,
	2,145,7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,
	2,151,7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,
	2,157,7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,
	2,163,7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,
	2,169,7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,
	2,175,7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,
	2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,7,186,
	2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,2,192,7,192,
	2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,2,197,7,197,2,198,7,198,
	2,199,7,199,2,200,7,200,2,201,7,201,2,202,7,202,2,203,7,203,2,204,7,204,
	2,205,7,205,2,206,7,206,2,207,7,207,2,208,7,208,2,209,7,209,2,210,7,210,
	2,211,7,211,2,212,7,212,2,213,7,213,2,214,7,214,2,215,7,215,2,216,7,216,
	2,217,7,217,2,218,7,218,2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,
	2,223,7,223,2,224,7,224,2,225,7,225,2,226,7,226,2,227,7,227,2,228,7,228,
	2,229,7,229,2,230,7,230,2,231,7,231,2,232,7,232,2,233,7,233,2,234,7,234,
	2,235,7,235,2,236,7,236,2,237,7,237,2,238,7,238,2,239,7,239,2,240,7,240,
	2,241,7,241,2,242,7,242,2,243,7,243,2,244,7,244,2,245,7,245,2,246,7,246,
	2,247,7,247,2,248,7,248,2,249,7,249,2,250,7,250,2,251,7,251,2,252,7,252,
	2,253,7,253,2,254,7,254,2,255,7,255,2,256,7,256,2,257,7,257,2,258,7,258,
	2,259,7,259,2,260,7,260,2,261,7,261,2,262,7,262,2,263,7,263,2,264,7,264,
	2,265,7,265,2,266,7,266,2,267,7,267,2,268,7,268,2,269,7,269,2,270,7,270,
	2,271,7,271,2,272,7,272,2,273,7,273,2,274,7,274,2,275,7,275,2,276,7,276,
	2,277,7,277,2,278,7,278,2,279,7,279,2,280,7,280,2,281,7,281,2,282,7,282,
	2,283,7,283,2,284,7,284,2,285,7,285,2,286,7,286,2,287,7,287,2,288,7,288,
	2,289,7,289,2,290,7,290,2,291,7,291,2,292,7,292,2,293,7,293,2,294,7,294,
	2,295,7,295,2,296,7,296,2,297,7,297,2,298,7,298,2,299,7,299,2,300,7,300,
	2,301,7,301,2,302,7,302,2,303,7,303,2,304,7,304,2,305,7,305,2,306,7,306,
	2,307,7,307,2,308,7,308,2,309,7,309,2,310,7,310,2,311,7,311,2,312,7,312,
	2,313,7,313,2,314,7,314,2,315,7,315,2,316,7,316,2,317,7,317,2,318,7,318,
	2,319,7,319,2,320,7,320,2,321,7,321,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,
	1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,
	1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,
	1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,
	11,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
	1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,
	1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,
	20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,
	1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,
	24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,
	1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
	28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,
	1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,
	31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,
	34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,
	1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,
	37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,
	1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,
	39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,
	1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,
	41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,
	1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,
	43,1,43,1,43,1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,
	1,45,1,45,1,46,1,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,
	47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,
	1,49,1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,
	51,1,51,1,52,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,
	1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,
	55,1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,57,
	1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,
	58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,61,
	1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,
	63,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,
	1,65,1,65,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,67,1,67,1,
	67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,69,1,69,
	1,69,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,71,1,
	71,1,71,1,71,1,71,1,71,1,71,1,71,1,72,1,72,1,72,1,72,1,72,1,72,1,73,1,73,
	1,73,1,73,1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,75,1,75,1,75,1,
	75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,77,
	1,77,1,77,1,77,1,77,1,78,1,78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,1,
	79,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,82,1,82,1,82,1,82,
	1,82,1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,83,1,83,1,84,1,84,1,
	84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,86,1,86,1,86,
	1,86,1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,88,1,
	88,1,88,1,88,1,88,1,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,90,
	1,90,1,90,1,90,1,90,1,90,1,90,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,92,1,
	92,1,92,1,92,1,92,1,93,1,93,1,93,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,95,
	1,95,1,95,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,97,1,97,1,
	97,1,97,1,97,1,97,1,97,1,97,1,98,1,98,1,98,1,98,1,98,1,98,1,99,1,99,1,99,
	1,99,1,99,1,99,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,101,1,101,1,
	101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,102,1,102,1,102,1,102,1,
	102,1,102,1,102,1,102,1,102,1,103,1,103,1,103,1,103,1,103,1,104,1,104,1,
	104,1,104,1,104,1,104,1,104,1,104,1,105,1,105,1,105,1,106,1,106,1,106,1,
	107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,108,1,108,1,
	108,1,108,1,108,1,109,1,109,1,109,1,109,1,109,1,110,1,110,1,110,1,110,1,
	110,1,110,1,110,1,110,1,110,1,110,1,110,1,111,1,111,1,111,1,111,1,111,1,
	111,1,111,1,111,1,111,1,111,1,111,1,111,1,112,1,112,1,112,1,112,1,112,1,
	112,1,112,1,112,1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,113,1,
	113,1,113,1,113,1,113,1,113,1,113,1,114,1,114,1,114,1,114,1,114,1,114,1,
	114,1,114,1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,115,1,116,1,116,1,
	116,1,116,1,117,1,117,1,117,1,117,1,117,1,118,1,118,1,118,1,118,1,118,1,
	119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,120,1,120,1,120,1,120,1,
	120,1,120,1,120,1,120,1,121,1,121,1,121,1,121,1,121,1,122,1,122,1,122,1,
	122,1,122,1,122,1,123,1,123,1,123,1,123,1,123,1,124,1,124,1,124,1,124,1,
	124,1,124,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,126,1,126,1,
	126,1,126,1,126,1,126,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,
	127,1,127,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,
	128,1,128,1,128,1,128,1,128,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,
	129,1,130,1,130,1,130,1,130,1,131,1,131,1,131,1,131,1,131,1,131,1,132,1,
	132,1,132,1,132,1,132,1,132,1,132,1,132,1,133,1,133,1,133,1,133,1,133,1,
	133,1,133,1,133,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,
	134,1,134,1,134,1,134,1,134,1,134,1,134,1,135,1,135,1,135,1,135,1,135,1,
	135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,136,1,136,1,136,1,136,1,
	136,1,136,1,136,1,136,1,136,1,137,1,137,1,137,1,137,1,137,1,137,1,138,1,
	138,1,138,1,138,1,138,1,138,1,138,1,139,1,139,1,139,1,139,1,139,1,139,1,
	140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,141,1,141,1,141,1,141,1,
	141,1,142,1,142,1,142,1,142,1,143,1,143,1,143,1,143,1,144,1,144,1,144,1,
	144,1,144,1,145,1,145,1,145,1,145,1,145,1,146,1,146,1,146,1,147,1,147,1,
	147,1,147,1,147,1,148,1,148,1,148,1,148,1,148,1,148,1,148,1,148,1,148,1,
	148,1,149,1,149,1,149,1,149,1,150,1,150,1,150,1,150,1,150,1,151,1,151,1,
	151,1,151,1,151,1,151,1,151,1,152,1,152,1,152,1,152,1,152,1,152,1,153,1,
	153,1,153,1,153,1,153,1,153,1,153,1,154,1,154,1,154,1,154,1,154,1,154,1,
	154,1,155,1,155,1,155,1,155,1,155,1,156,1,156,1,156,1,157,1,157,1,157,1,
	158,1,158,1,158,1,158,1,159,1,159,1,159,1,159,1,159,1,160,1,160,1,160,1,
	160,1,160,1,160,1,160,1,161,1,161,1,161,1,162,1,162,1,162,1,162,1,162,1,
	162,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,
	164,1,164,1,164,1,164,1,164,1,164,1,165,1,165,1,165,1,165,1,165,1,165,1,
	165,1,166,1,166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,1,167,1,167,1,
	167,1,167,1,167,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,
	168,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,
	170,1,170,1,170,1,170,1,170,1,170,1,170,1,170,1,171,1,171,1,171,1,171,1,
	171,1,172,1,172,1,172,1,172,1,172,1,173,1,173,1,173,1,173,1,173,1,173,1,
	173,1,173,1,174,1,174,1,174,1,174,1,175,1,175,1,175,1,175,1,175,1,175,1,
	175,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,177,1,177,1,177,1,
	177,1,177,1,177,1,177,1,177,1,177,1,178,1,178,1,178,1,178,1,178,1,178,1,
	178,1,178,1,178,1,178,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,
	179,1,179,1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,181,1,181,1,
	181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,182,1,182,1,182,1,
	182,1,182,1,182,1,182,1,182,1,182,1,182,1,182,1,183,1,183,1,183,1,183,1,
	183,1,183,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,185,1,185,1,185,1,
	185,1,185,1,185,1,186,1,186,1,186,1,186,1,186,1,187,1,187,1,187,1,187,1,
	187,1,187,1,187,1,187,1,187,1,187,1,188,1,188,1,188,1,188,1,188,1,188,1,
	188,1,188,1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,190,1,190,1,190,1,
	190,1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,191,1,191,1,191,1,191,1,
	191,1,191,1,191,1,191,1,192,1,192,1,192,1,192,1,192,1,192,1,193,1,193,1,
	193,1,193,1,193,1,193,1,193,1,193,1,194,1,194,1,194,1,194,1,194,1,194,1,
	194,1,194,1,194,1,195,1,195,1,195,1,195,1,195,1,195,1,195,1,195,1,195,1,
	195,1,196,1,196,1,196,1,196,1,196,1,196,1,196,1,197,1,197,1,197,1,197,1,
	197,1,197,1,198,1,198,1,198,1,198,1,198,1,199,1,199,1,199,1,199,1,199,1,
	199,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,201,1,201,1,
	201,1,201,1,201,1,201,1,201,1,202,1,202,1,202,1,202,1,203,1,203,1,203,1,
	203,1,203,1,204,1,204,1,204,1,204,1,204,1,204,1,204,1,204,1,205,1,205,1,
	205,1,205,1,205,1,205,1,205,1,206,1,206,1,206,1,206,1,206,1,206,1,206,1,
	207,1,207,1,207,1,207,1,207,1,207,1,207,1,207,1,208,1,208,1,208,1,208,1,
	208,1,208,1,208,1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,
	210,1,210,1,210,1,210,1,210,1,211,1,211,1,211,1,211,1,211,1,211,1,211,1,
	212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,
	212,1,213,1,213,1,213,1,213,1,213,1,213,1,213,1,213,1,214,1,214,1,214,1,
	214,1,215,1,215,1,215,1,215,1,215,1,216,1,216,1,216,1,216,1,216,1,217,1,
	217,1,217,1,217,1,217,1,218,1,218,1,218,1,218,1,218,1,219,1,219,1,219,1,
	219,1,219,1,219,1,220,1,220,1,220,1,220,1,220,1,220,1,221,1,221,1,221,1,
	221,1,221,1,221,1,221,1,222,1,222,1,222,1,222,1,222,1,222,1,222,1,222,1,
	222,1,222,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,224,1,224,1,224,1,
	224,1,224,1,224,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,226,1,226,1,
	226,1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,227,1,227,1,
	227,1,227,1,227,1,228,1,228,1,228,1,228,1,228,1,228,1,228,1,229,1,229,1,
	229,1,229,1,229,1,230,1,230,1,230,1,230,1,230,1,231,1,231,1,231,1,231,1,
	231,1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,233,1,
	233,1,233,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,235,1,
	235,1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,236,1,
	236,1,236,1,236,1,236,1,237,1,237,1,237,1,237,1,237,1,238,1,238,1,238,1,
	238,1,238,1,238,1,238,1,238,1,238,1,239,1,239,1,239,1,239,1,239,1,239,1,
	239,1,239,1,239,1,240,1,240,1,240,1,240,1,240,1,241,1,241,1,241,1,241,1,
	241,1,241,1,241,1,241,1,242,1,242,1,242,1,242,1,242,1,242,1,242,1,242,1,
	242,1,242,1,243,1,243,1,243,1,243,1,243,1,243,1,243,1,243,1,243,1,243,1,
	243,1,243,1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,
	244,1,244,1,244,1,244,1,245,1,245,1,245,1,245,1,245,1,245,1,246,1,246,1,
	246,1,246,1,246,1,246,1,246,1,247,1,247,1,247,1,247,1,247,1,247,1,247,1,
	247,1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,249,1,
	249,1,249,1,249,1,249,1,249,1,249,1,250,1,250,1,250,1,250,1,250,1,250,1,
	250,1,251,1,251,1,251,1,251,1,252,1,252,1,252,1,252,1,252,1,253,1,253,1,
	253,1,253,1,253,1,253,1,254,1,254,1,254,1,254,1,254,1,254,1,255,1,255,1,
	255,1,255,1,255,1,255,1,256,1,256,1,256,1,256,1,256,1,257,1,257,1,257,1,
	257,1,257,1,257,1,257,1,257,1,257,1,258,1,258,1,258,1,258,1,258,1,258,1,
	259,1,259,1,259,1,259,1,259,1,259,1,259,1,260,1,260,1,260,1,260,1,260,1,
	260,1,260,1,260,1,261,1,261,1,261,1,261,1,261,1,261,1,261,1,261,1,262,1,
	262,1,262,1,262,1,262,1,263,1,263,1,263,1,263,1,263,1,264,1,264,1,264,1,
	264,1,264,1,264,1,265,1,265,1,265,1,265,1,265,1,265,1,265,1,266,1,266,1,
	266,1,266,1,266,1,267,1,267,1,267,1,267,1,267,1,267,1,267,1,268,1,268,1,
	268,1,268,1,268,1,268,1,268,1,268,1,269,1,269,1,269,1,269,1,269,1,270,1,
	270,1,270,1,270,1,270,1,270,1,270,1,270,1,271,1,271,1,271,1,271,1,271,1,
	271,1,272,1,272,1,272,1,272,1,272,1,273,1,273,1,273,1,273,1,273,1,274,1,
	274,1,275,1,275,1,275,1,275,3,275,2630,8,275,1,276,1,276,1,277,1,277,1,
	277,1,278,1,278,1,279,1,279,1,279,1,280,1,280,1,281,1,281,1,282,1,282,1,
	283,1,283,1,284,1,284,1,285,1,285,1,285,1,286,1,286,1,287,1,287,1,288,1,
	288,1,288,1,289,1,289,1,290,1,290,1,291,1,291,1,292,1,292,1,293,1,293,1,
	294,1,294,1,295,1,295,1,296,1,296,1,297,1,297,1,297,1,298,1,298,1,298,1,
	299,1,299,1,299,1,300,1,300,1,300,1,301,1,301,1,301,1,302,1,302,1,303,1,
	303,1,304,1,304,1,305,1,305,1,305,1,305,5,305,2703,8,305,10,305,12,305,
	2706,9,305,1,305,1,305,1,306,1,306,1,306,1,306,1,306,1,306,1,306,5,306,
	2717,8,306,10,306,12,306,2720,9,306,1,306,1,306,1,307,1,307,1,307,1,307,
	5,307,2728,8,307,10,307,12,307,2731,9,307,1,307,1,307,1,308,4,308,2736,
	8,308,11,308,12,308,2737,1,309,4,309,2741,8,309,11,309,12,309,2742,1,309,
	1,309,5,309,2747,8,309,10,309,12,309,2750,9,309,1,309,1,309,4,309,2754,
	8,309,11,309,12,309,2755,3,309,2758,8,309,1,310,4,310,2761,8,310,11,310,
	12,310,2762,1,310,1,310,5,310,2767,8,310,10,310,12,310,2770,9,310,3,310,
	2772,8,310,1,310,1,310,1,310,1,310,4,310,2778,8,310,11,310,12,310,2779,
	1,310,1,310,3,310,2784,8,310,1,311,1,311,3,311,2788,8,311,1,311,1,311,1,
	311,5,311,2793,8,311,10,311,12,311,2796,9,311,1,312,1,312,1,312,1,312,4,
	312,2802,8,312,11,312,12,312,2803,1,313,1,313,1,313,1,313,5,313,2810,8,
	313,10,313,12,313,2813,9,313,1,313,1,313,1,314,1,314,1,314,1,314,5,314,
	2821,8,314,10,314,12,314,2824,9,314,1,314,1,314,1,315,1,315,3,315,2830,
	8,315,1,315,4,315,2833,8,315,11,315,12,315,2834,1,316,1,316,1,317,1,317,
	1,318,1,318,1,318,1,318,5,318,2845,8,318,10,318,12,318,2848,9,318,1,318,
	3,318,2851,8,318,1,318,3,318,2854,8,318,1,318,1,318,1,319,1,319,1,319,1,
	319,5,319,2862,8,319,10,319,12,319,2865,9,319,1,319,1,319,1,319,1,319,1,
	319,1,320,4,320,2873,8,320,11,320,12,320,2874,1,320,1,320,1,321,1,321,1,
	2863,0,322,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,
	13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,
	25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,
	37,75,38,77,39,79,40,81,41,83,42,85,43,87,44,89,45,91,46,93,47,95,48,97,
	49,99,50,101,51,103,52,105,53,107,54,109,55,111,56,113,57,115,58,117,59,
	119,60,121,61,123,62,125,63,127,64,129,65,131,66,133,67,135,68,137,69,139,
	70,141,71,143,72,145,73,147,74,149,75,151,76,153,77,155,78,157,79,159,80,
	161,81,163,82,165,83,167,84,169,85,171,86,173,87,175,88,177,89,179,90,181,
	91,183,92,185,93,187,94,189,95,191,96,193,97,195,98,197,99,199,100,201,
	101,203,102,205,103,207,104,209,105,211,106,213,107,215,108,217,109,219,
	110,221,111,223,112,225,113,227,114,229,115,231,116,233,117,235,118,237,
	119,239,120,241,121,243,122,245,123,247,124,249,125,251,126,253,127,255,
	128,257,129,259,130,261,131,263,132,265,133,267,134,269,135,271,136,273,
	137,275,138,277,139,279,140,281,141,283,142,285,143,287,144,289,145,291,
	146,293,147,295,148,297,149,299,150,301,151,303,152,305,153,307,154,309,
	155,311,156,313,157,315,158,317,159,319,160,321,161,323,162,325,163,327,
	164,329,165,331,166,333,167,335,168,337,169,339,170,341,171,343,172,345,
	173,347,174,349,175,351,176,353,177,355,178,357,179,359,180,361,181,363,
	182,365,183,367,184,369,185,371,186,373,187,375,188,377,189,379,190,381,
	191,383,192,385,193,387,194,389,195,391,196,393,197,395,198,397,199,399,
	200,401,201,403,202,405,203,407,204,409,205,411,206,413,207,415,208,417,
	209,419,210,421,211,423,212,425,213,427,214,429,215,431,216,433,217,435,
	218,437,219,439,220,441,221,443,222,445,223,447,224,449,225,451,226,453,
	227,455,228,457,229,459,230,461,231,463,232,465,233,467,234,469,235,471,
	236,473,237,475,238,477,239,479,240,481,241,483,242,485,243,487,244,489,
	245,491,246,493,247,495,248,497,249,499,250,501,251,503,252,505,253,507,
	254,509,255,511,256,513,257,515,258,517,259,519,260,521,261,523,262,525,
	263,527,264,529,265,531,266,533,267,535,268,537,269,539,270,541,271,543,
	272,545,273,547,274,549,275,551,276,553,277,555,278,557,279,559,280,561,
	281,563,282,565,283,567,284,569,285,571,286,573,287,575,288,577,289,579,
	290,581,291,583,292,585,293,587,294,589,295,591,296,593,297,595,298,597,
	299,599,300,601,301,603,302,605,303,607,304,609,305,611,306,613,307,615,
	308,617,309,619,310,621,311,623,312,625,313,627,314,629,315,631,0,633,0,
	635,0,637,316,639,317,641,318,643,319,1,0,8,1,0,39,39,1,0,34,34,1,0,96,
	96,2,0,43,43,45,45,1,0,48,57,1,0,65,90,2,0,10,10,13,13,3,0,9,10,13,13,32,
	32,2910,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
	1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,
	0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,
	1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,
	0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,
	1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,
	0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,
	1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,
	0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,
	1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,109,1,
	0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,0,0,119,1,0,
	0,0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,
	0,0,131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,
	0,141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,0,0,0,
	151,1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,0,0,0,161,
	1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,0,169,1,0,0,0,0,171,1,
	0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,0,0,0,0,179,1,0,0,0,0,181,1,0,
	0,0,0,183,1,0,0,0,0,185,1,0,0,0,0,187,1,0,0,0,0,189,1,0,0,0,0,191,1,0,0,
	0,0,193,1,0,0,0,0,195,1,0,0,0,0,197,1,0,0,0,0,199,1,0,0,0,0,201,1,0,0,0,
	0,203,1,0,0,0,0,205,1,0,0,0,0,207,1,0,0,0,0,209,1,0,0,0,0,211,1,0,0,0,0,
	213,1,0,0,0,0,215,1,0,0,0,0,217,1,0,0,0,0,219,1,0,0,0,0,221,1,0,0,0,0,223,
	1,0,0,0,0,225,1,0,0,0,0,227,1,0,0,0,0,229,1,0,0,0,0,231,1,0,0,0,0,233,1,
	0,0,0,0,235,1,0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,0,241,1,0,0,0,0,243,1,0,
	0,0,0,245,1,0,0,0,0,247,1,0,0,0,0,249,1,0,0,0,0,251,1,0,0,0,0,253,1,0,0,
	0,0,255,1,0,0,0,0,257,1,0,0,0,0,259,1,0,0,0,0,261,1,0,0,0,0,263,1,0,0,0,
	0,265,1,0,0,0,0,267,1,0,0,0,0,269,1,0,0,0,0,271,1,0,0,0,0,273,1,0,0,0,0,
	275,1,0,0,0,0,277,1,0,0,0,0,279,1,0,0,0,0,281,1,0,0,0,0,283,1,0,0,0,0,285,
	1,0,0,0,0,287,1,0,0,0,0,289,1,0,0,0,0,291,1,0,0,0,0,293,1,0,0,0,0,295,1,
	0,0,0,0,297,1,0,0,0,0,299,1,0,0,0,0,301,1,0,0,0,0,303,1,0,0,0,0,305,1,0,
	0,0,0,307,1,0,0,0,0,309,1,0,0,0,0,311,1,0,0,0,0,313,1,0,0,0,0,315,1,0,0,
	0,0,317,1,0,0,0,0,319,1,0,0,0,0,321,1,0,0,0,0,323,1,0,0,0,0,325,1,0,0,0,
	0,327,1,0,0,0,0,329,1,0,0,0,0,331,1,0,0,0,0,333,1,0,0,0,0,335,1,0,0,0,0,
	337,1,0,0,0,0,339,1,0,0,0,0,341,1,0,0,0,0,343,1,0,0,0,0,345,1,0,0,0,0,347,
	1,0,0,0,0,349,1,0,0,0,0,351,1,0,0,0,0,353,1,0,0,0,0,355,1,0,0,0,0,357,1,
	0,0,0,0,359,1,0,0,0,0,361,1,0,0,0,0,363,1,0,0,0,0,365,1,0,0,0,0,367,1,0,
	0,0,0,369,1,0,0,0,0,371,1,0,0,0,0,373,1,0,0,0,0,375,1,0,0,0,0,377,1,0,0,
	0,0,379,1,0,0,0,0,381,1,0,0,0,0,383,1,0,0,0,0,385,1,0,0,0,0,387,1,0,0,0,
	0,389,1,0,0,0,0,391,1,0,0,0,0,393,1,0,0,0,0,395,1,0,0,0,0,397,1,0,0,0,0,
	399,1,0,0,0,0,401,1,0,0,0,0,403,1,0,0,0,0,405,1,0,0,0,0,407,1,0,0,0,0,409,
	1,0,0,0,0,411,1,0,0,0,0,413,1,0,0,0,0,415,1,0,0,0,0,417,1,0,0,0,0,419,1,
	0,0,0,0,421,1,0,0,0,0,423,1,0,0,0,0,425,1,0,0,0,0,427,1,0,0,0,0,429,1,0,
	0,0,0,431,1,0,0,0,0,433,1,0,0,0,0,435,1,0,0,0,0,437,1,0,0,0,0,439,1,0,0,
	0,0,441,1,0,0,0,0,443,1,0,0,0,0,445,1,0,0,0,0,447,1,0,0,0,0,449,1,0,0,0,
	0,451,1,0,0,0,0,453,1,0,0,0,0,455,1,0,0,0,0,457,1,0,0,0,0,459,1,0,0,0,0,
	461,1,0,0,0,0,463,1,0,0,0,0,465,1,0,0,0,0,467,1,0,0,0,0,469,1,0,0,0,0,471,
	1,0,0,0,0,473,1,0,0,0,0,475,1,0,0,0,0,477,1,0,0,0,0,479,1,0,0,0,0,481,1,
	0,0,0,0,483,1,0,0,0,0,485,1,0,0,0,0,487,1,0,0,0,0,489,1,0,0,0,0,491,1,0,
	0,0,0,493,1,0,0,0,0,495,1,0,0,0,0,497,1,0,0,0,0,499,1,0,0,0,0,501,1,0,0,
	0,0,503,1,0,0,0,0,505,1,0,0,0,0,507,1,0,0,0,0,509,1,0,0,0,0,511,1,0,0,0,
	0,513,1,0,0,0,0,515,1,0,0,0,0,517,1,0,0,0,0,519,1,0,0,0,0,521,1,0,0,0,0,
	523,1,0,0,0,0,525,1,0,0,0,0,527,1,0,0,0,0,529,1,0,0,0,0,531,1,0,0,0,0,533,
	1,0,0,0,0,535,1,0,0,0,0,537,1,0,0,0,0,539,1,0,0,0,0,541,1,0,0,0,0,543,1,
	0,0,0,0,545,1,0,0,0,0,547,1,0,0,0,0,549,1,0,0,0,0,551,1,0,0,0,0,553,1,0,
	0,0,0,555,1,0,0,0,0,557,1,0,0,0,0,559,1,0,0,0,0,561,1,0,0,0,0,563,1,0,0,
	0,0,565,1,0,0,0,0,567,1,0,0,0,0,569,1,0,0,0,0,571,1,0,0,0,0,573,1,0,0,0,
	0,575,1,0,0,0,0,577,1,0,0,0,0,579,1,0,0,0,0,581,1,0,0,0,0,583,1,0,0,0,0,
	585,1,0,0,0,0,587,1,0,0,0,0,589,1,0,0,0,0,591,1,0,0,0,0,593,1,0,0,0,0,595,
	1,0,0,0,0,597,1,0,0,0,0,599,1,0,0,0,0,601,1,0,0,0,0,603,1,0,0,0,0,605,1,
	0,0,0,0,607,1,0,0,0,0,609,1,0,0,0,0,611,1,0,0,0,0,613,1,0,0,0,0,615,1,0,
	0,0,0,617,1,0,0,0,0,619,1,0,0,0,0,621,1,0,0,0,0,623,1,0,0,0,0,625,1,0,0,
	0,0,627,1,0,0,0,0,629,1,0,0,0,0,637,1,0,0,0,0,639,1,0,0,0,0,641,1,0,0,0,
	0,643,1,0,0,0,1,645,1,0,0,0,3,652,1,0,0,0,5,656,1,0,0,0,7,662,1,0,0,0,9,
	668,1,0,0,0,11,672,1,0,0,0,13,678,1,0,0,0,15,686,1,0,0,0,17,690,1,0,0,0,
	19,694,1,0,0,0,21,700,1,0,0,0,23,703,1,0,0,0,25,707,1,0,0,0,27,710,1,0,
	0,0,29,724,1,0,0,0,31,734,1,0,0,0,33,742,1,0,0,0,35,747,1,0,0,0,37,750,
	1,0,0,0,39,755,1,0,0,0,41,763,1,0,0,0,43,768,1,0,0,0,45,773,1,0,0,0,47,
	782,1,0,0,0,49,789,1,0,0,0,51,797,1,0,0,0,53,805,1,0,0,0,55,812,1,0,0,0,
	57,822,1,0,0,0,59,834,1,0,0,0,61,845,1,0,0,0,63,851,1,0,0,0,65,863,1,0,
	0,0,67,870,1,0,0,0,69,876,1,0,0,0,71,881,1,0,0,0,73,889,1,0,0,0,75,905,
	1,0,0,0,77,918,1,0,0,0,79,931,1,0,0,0,81,944,1,0,0,0,83,959,1,0,0,0,85,
	972,1,0,0,0,87,990,1,0,0,0,89,1003,1,0,0,0,91,1008,1,0,0,0,93,1013,1,0,
	0,0,95,1017,1,0,0,0,97,1028,1,0,0,0,99,1036,1,0,0,0,101,1044,1,0,0,0,103,
	1051,1,0,0,0,105,1056,1,0,0,0,107,1061,1,0,0,0,109,1070,1,0,0,0,111,1081,
	1,0,0,0,113,1088,1,0,0,0,115,1097,1,0,0,0,117,1109,1,0,0,0,119,1116,1,0,
	0,0,121,1121,1,0,0,0,123,1126,1,0,0,0,125,1132,1,0,0,0,127,1141,1,0,0,0,
	129,1145,1,0,0,0,131,1151,1,0,0,0,133,1158,1,0,0,0,135,1165,1,0,0,0,137,
	1175,1,0,0,0,139,1183,1,0,0,0,141,1190,1,0,0,0,143,1198,1,0,0,0,145,1206,
	1,0,0,0,147,1212,1,0,0,0,149,1218,1,0,0,0,151,1225,1,0,0,0,153,1231,1,0,
	0,0,155,1237,1,0,0,0,157,1247,1,0,0,0,159,1251,1,0,0,0,161,1258,1,0,0,0,
	163,1263,1,0,0,0,165,1268,1,0,0,0,167,1278,1,0,0,0,169,1284,1,0,0,0,171,
	1290,1,0,0,0,173,1298,1,0,0,0,175,1305,1,0,0,0,177,1314,1,0,0,0,179,1320,
	1,0,0,0,181,1329,1,0,0,0,183,1336,1,0,0,0,185,1343,1,0,0,0,187,1348,1,0,
	0,0,189,1351,1,0,0,0,191,1358,1,0,0,0,193,1361,1,0,0,0,195,1371,1,0,0,0,
	197,1379,1,0,0,0,199,1385,1,0,0,0,201,1391,1,0,0,0,203,1398,1,0,0,0,205,
	1408,1,0,0,0,207,1417,1,0,0,0,209,1422,1,0,0,0,211,1430,1,0,0,0,213,1433,
	1,0,0,0,215,1436,1,0,0,0,217,1446,1,0,0,0,219,1451,1,0,0,0,221,1456,1,0,
	0,0,223,1467,1,0,0,0,225,1479,1,0,0,0,227,1491,1,0,0,0,229,1502,1,0,0,0,
	231,1513,1,0,0,0,233,1518,1,0,0,0,235,1522,1,0,0,0,237,1527,1,0,0,0,239,
	1532,1,0,0,0,241,1540,1,0,0,0,243,1548,1,0,0,0,245,1553,1,0,0,0,247,1559,
	1,0,0,0,249,1564,1,0,0,0,251,1570,1,0,0,0,253,1578,1,0,0,0,255,1584,1,0,
	0,0,257,1594,1,0,0,0,259,1609,1,0,0,0,261,1617,1,0,0,0,263,1621,1,0,0,0,
	265,1627,1,0,0,0,267,1635,1,0,0,0,269,1643,1,0,0,0,271,1659,1,0,0,0,273,
	1672,1,0,0,0,275,1681,1,0,0,0,277,1687,1,0,0,0,279,1694,1,0,0,0,281,1700,
	1,0,0,0,283,1708,1,0,0,0,285,1713,1,0,0,0,287,1717,1,0,0,0,289,1721,1,0,
	0,0,291,1726,1,0,0,0,293,1731,1,0,0,0,295,1734,1,0,0,0,297,1739,1,0,0,0,
	299,1749,1,0,0,0,301,1753,1,0,0,0,303,1758,1,0,0,0,305,1765,1,0,0,0,307,
	1771,1,0,0,0,309,1778,1,0,0,0,311,1785,1,0,0,0,313,1790,1,0,0,0,315,1793,
	1,0,0,0,317,1796,1,0,0,0,319,1800,1,0,0,0,321,1805,1,0,0,0,323,1812,1,0,
	0,0,325,1815,1,0,0,0,327,1821,1,0,0,0,329,1832,1,0,0,0,331,1838,1,0,0,0,
	333,1845,1,0,0,0,335,1850,1,0,0,0,337,1859,1,0,0,0,339,1869,1,0,0,0,341,
	1880,1,0,0,0,343,1888,1,0,0,0,345,1893,1,0,0,0,347,1898,1,0,0,0,349,1906,
	1,0,0,0,351,1910,1,0,0,0,353,1917,1,0,0,0,355,1925,1,0,0,0,357,1934,1,0,
	0,0,359,1944,1,0,0,0,361,1954,1,0,0,0,363,1962,1,0,0,0,365,1973,1,0,0,0,
	367,1984,1,0,0,0,369,1990,1,0,0,0,371,1997,1,0,0,0,373,2003,1,0,0,0,375,
	2008,1,0,0,0,377,2018,1,0,0,0,379,2026,1,0,0,0,381,2033,1,0,0,0,383,2044,
	1,0,0,0,385,2052,1,0,0,0,387,2058,1,0,0,0,389,2066,1,0,0,0,391,2075,1,0,
	0,0,393,2085,1,0,0,0,395,2092,1,0,0,0,397,2098,1,0,0,0,399,2103,1,0,0,0,
	401,2109,1,0,0,0,403,2118,1,0,0,0,405,2125,1,0,0,0,407,2129,1,0,0,0,409,
	2134,1,0,0,0,411,2142,1,0,0,0,413,2149,1,0,0,0,415,2156,1,0,0,0,417,2164,
	1,0,0,0,419,2171,1,0,0,0,421,2180,1,0,0,0,423,2185,1,0,0,0,425,2192,1,0,
	0,0,427,2205,1,0,0,0,429,2213,1,0,0,0,431,2217,1,0,0,0,433,2222,1,0,0,0,
	435,2227,1,0,0,0,437,2232,1,0,0,0,439,2237,1,0,0,0,441,2243,1,0,0,0,443,
	2249,1,0,0,0,445,2256,1,0,0,0,447,2266,1,0,0,0,449,2273,1,0,0,0,451,2279,
	1,0,0,0,453,2286,1,0,0,0,455,2298,1,0,0,0,457,2303,1,0,0,0,459,2310,1,0,
	0,0,461,2315,1,0,0,0,463,2320,1,0,0,0,465,2325,1,0,0,0,467,2335,1,0,0,0,
	469,2338,1,0,0,0,471,2347,1,0,0,0,473,2359,1,0,0,0,475,2364,1,0,0,0,477,
	2369,1,0,0,0,479,2378,1,0,0,0,481,2387,1,0,0,0,483,2392,1,0,0,0,485,2400,
	1,0,0,0,487,2410,1,0,0,0,489,2422,1,0,0,0,491,2436,1,0,0,0,493,2442,1,0,
	0,0,495,2449,1,0,0,0,497,2457,1,0,0,0,499,2467,1,0,0,0,501,2474,1,0,0,0,
	503,2481,1,0,0,0,505,2485,1,0,0,0,507,2490,1,0,0,0,509,2496,1,0,0,0,511,
	2502,1,0,0,0,513,2508,1,0,0,0,515,2513,1,0,0,0,517,2522,1,0,0,0,519,2528,
	1,0,0,0,521,2535,1,0,0,0,523,2543,1,0,0,0,525,2551,1,0,0,0,527,2556,1,0,
	0,0,529,2561,1,0,0,0,531,2567,1,0,0,0,533,2574,1,0,0,0,535,2579,1,0,0,0,
	537,2586,1,0,0,0,539,2594,1,0,0,0,541,2599,1,0,0,0,543,2607,1,0,0,0,545,
	2613,1,0,0,0,547,2618,1,0,0,0,549,2623,1,0,0,0,551,2629,1,0,0,0,553,2631,
	1,0,0,0,555,2633,1,0,0,0,557,2636,1,0,0,0,559,2638,1,0,0,0,561,2641,1,0,
	0,0,563,2643,1,0,0,0,565,2645,1,0,0,0,567,2647,1,0,0,0,569,2649,1,0,0,0,
	571,2651,1,0,0,0,573,2654,1,0,0,0,575,2656,1,0,0,0,577,2658,1,0,0,0,579,
	2661,1,0,0,0,581,2663,1,0,0,0,583,2665,1,0,0,0,585,2667,1,0,0,0,587,2669,
	1,0,0,0,589,2671,1,0,0,0,591,2673,1,0,0,0,593,2675,1,0,0,0,595,2677,1,0,
	0,0,597,2680,1,0,0,0,599,2683,1,0,0,0,601,2686,1,0,0,0,603,2689,1,0,0,0,
	605,2692,1,0,0,0,607,2694,1,0,0,0,609,2696,1,0,0,0,611,2698,1,0,0,0,613,
	2709,1,0,0,0,615,2723,1,0,0,0,617,2735,1,0,0,0,619,2757,1,0,0,0,621,2783,
	1,0,0,0,623,2787,1,0,0,0,625,2797,1,0,0,0,627,2805,1,0,0,0,629,2816,1,0,
	0,0,631,2827,1,0,0,0,633,2836,1,0,0,0,635,2838,1,0,0,0,637,2840,1,0,0,0,
	639,2857,1,0,0,0,641,2872,1,0,0,0,643,2878,1,0,0,0,645,646,5,65,0,0,646,
	647,5,66,0,0,647,648,5,83,0,0,648,649,5,69,0,0,649,650,5,78,0,0,650,651,
	5,84,0,0,651,2,1,0,0,0,652,653,5,65,0,0,653,654,5,68,0,0,654,655,5,68,0,
	0,655,4,1,0,0,0,656,657,5,65,0,0,657,658,5,68,0,0,658,659,5,77,0,0,659,
	660,5,73,0,0,660,661,5,78,0,0,661,6,1,0,0,0,662,663,5,65,0,0,663,664,5,
	70,0,0,664,665,5,84,0,0,665,666,5,69,0,0,666,667,5,82,0,0,667,8,1,0,0,0,
	668,669,5,65,0,0,669,670,5,76,0,0,670,671,5,76,0,0,671,10,1,0,0,0,672,673,
	5,65,0,0,673,674,5,76,0,0,674,675,5,84,0,0,675,676,5,69,0,0,676,677,5,82,
	0,0,677,12,1,0,0,0,678,679,5,65,0,0,679,680,5,78,0,0,680,681,5,65,0,0,681,
	682,5,76,0,0,682,683,5,89,0,0,683,684,5,90,0,0,684,685,5,69,0,0,685,14,
	1,0,0,0,686,687,5,65,0,0,687,688,5,78,0,0,688,689,5,68,0,0,689,16,1,0,0,
	0,690,691,5,65,0,0,691,692,5,78,0,0,692,693,5,89,0,0,693,18,1,0,0,0,694,
	695,5,65,0,0,695,696,5,82,0,0,696,697,5,82,0,0,697,698,5,65,0,0,698,699,
	5,89,0,0,699,20,1,0,0,0,700,701,5,65,0,0,701,702,5,83,0,0,702,22,1,0,0,
	0,703,704,5,65,0,0,704,705,5,83,0,0,705,706,5,67,0,0,706,24,1,0,0,0,707,
	708,5,65,0,0,708,709,5,84,0,0,709,26,1,0,0,0,710,711,5,65,0,0,711,712,5,
	85,0,0,712,713,5,84,0,0,713,714,5,72,0,0,714,715,5,79,0,0,715,716,5,82,
	0,0,716,717,5,73,0,0,717,718,5,90,0,0,718,719,5,65,0,0,719,720,5,84,0,0,
	720,721,5,73,0,0,721,722,5,79,0,0,722,723,5,78,0,0,723,28,1,0,0,0,724,725,
	5,66,0,0,725,726,5,69,0,0,726,727,5,82,0,0,727,728,5,78,0,0,728,729,5,79,
	0,0,729,730,5,85,0,0,730,731,5,76,0,0,731,732,5,76,0,0,732,733,5,73,0,0,
	733,30,1,0,0,0,734,735,5,66,0,0,735,736,5,69,0,0,736,737,5,84,0,0,737,738,
	5,87,0,0,738,739,5,69,0,0,739,740,5,69,0,0,740,741,5,78,0,0,741,32,1,0,
	0,0,742,743,5,66,0,0,743,744,5,79,0,0,744,745,5,84,0,0,745,746,5,72,0,0,
	746,34,1,0,0,0,747,748,5,66,0,0,748,749,5,89,0,0,749,36,1,0,0,0,750,751,
	5,67,0,0,751,752,5,65,0,0,752,753,5,76,0,0,753,754,5,76,0,0,754,38,1,0,
	0,0,755,756,5,67,0,0,756,757,5,65,0,0,757,758,5,83,0,0,758,759,5,67,0,0,
	759,760,5,65,0,0,760,761,5,68,0,0,761,762,5,69,0,0,762,40,1,0,0,0,763,764,
	5,67,0,0,764,765,5,65,0,0,765,766,5,83,0,0,766,767,5,69,0,0,767,42,1,0,
	0,0,768,769,5,67,0,0,769,770,5,65,0,0,770,771,5,83,0,0,771,772,5,84,0,0,
	772,44,1,0,0,0,773,774,5,67,0,0,774,775,5,65,0,0,775,776,5,84,0,0,776,777,
	5,65,0,0,777,778,5,76,0,0,778,779,5,79,0,0,779,780,5,71,0,0,780,781,5,83,
	0,0,781,46,1,0,0,0,782,783,5,67,0,0,783,784,5,79,0,0,784,785,5,76,0,0,785,
	786,5,85,0,0,786,787,5,77,0,0,787,788,5,78,0,0,788,48,1,0,0,0,789,790,5,
	67,0,0,790,791,5,79,0,0,791,792,5,76,0,0,792,793,5,85,0,0,793,794,5,77,
	0,0,794,795,5,78,0,0,795,796,5,83,0,0,796,50,1,0,0,0,797,798,5,67,0,0,798,
	799,5,79,0,0,799,800,5,77,0,0,800,801,5,77,0,0,801,802,5,69,0,0,802,803,
	5,78,0,0,803,804,5,84,0,0,804,52,1,0,0,0,805,806,5,67,0,0,806,807,5,79,
	0,0,807,808,5,77,0,0,808,809,5,77,0,0,809,810,5,73,0,0,810,811,5,84,0,0,
	811,54,1,0,0,0,812,813,5,67,0,0,813,814,5,79,0,0,814,815,5,77,0,0,815,816,
	5,77,0,0,816,817,5,73,0,0,817,818,5,84,0,0,818,819,5,84,0,0,819,820,5,69,
	0,0,820,821,5,68,0,0,821,56,1,0,0,0,822,823,5,67,0,0,823,824,5,79,0,0,824,
	825,5,78,0,0,825,826,5,68,0,0,826,827,5,73,0,0,827,828,5,84,0,0,828,829,
	5,73,0,0,829,830,5,79,0,0,830,831,5,78,0,0,831,832,5,65,0,0,832,833,5,76,
	0,0,833,58,1,0,0,0,834,835,5,67,0,0,835,836,5,79,0,0,836,837,5,78,0,0,837,
	838,5,83,0,0,838,839,5,84,0,0,839,840,5,82,0,0,840,841,5,65,0,0,841,842,
	5,73,0,0,842,843,5,78,0,0,843,844,5,84,0,0,844,60,1,0,0,0,845,846,5,67,
	0,0,846,847,5,79,0,0,847,848,5,85,0,0,848,849,5,78,0,0,849,850,5,84,0,0,
	850,62,1,0,0,0,851,852,5,67,0,0,852,853,5,79,0,0,853,854,5,80,0,0,854,855,
	5,65,0,0,855,856,5,82,0,0,856,857,5,84,0,0,857,858,5,73,0,0,858,859,5,84,
	0,0,859,860,5,73,0,0,860,861,5,79,0,0,861,862,5,78,0,0,862,64,1,0,0,0,863,
	864,5,67,0,0,864,865,5,82,0,0,865,866,5,69,0,0,866,867,5,65,0,0,867,868,
	5,84,0,0,868,869,5,69,0,0,869,66,1,0,0,0,870,871,5,67,0,0,871,872,5,82,
	0,0,872,873,5,79,0,0,873,874,5,83,0,0,874,875,5,83,0,0,875,68,1,0,0,0,876,
	877,5,67,0,0,877,878,5,85,0,0,878,879,5,66,0,0,879,880,5,69,0,0,880,70,
	1,0,0,0,881,882,5,67,0,0,882,883,5,85,0,0,883,884,5,82,0,0,884,885,5,82,
	0,0,885,886,5,69,0,0,886,887,5,78,0,0,887,888,5,84,0,0,888,72,1,0,0,0,889,
	890,5,67,0,0,890,891,5,85,0,0,891,892,5,82,0,0,892,893,5,82,0,0,893,894,
	5,69,0,0,894,895,5,78,0,0,895,896,5,84,0,0,896,897,5,95,0,0,897,898,5,67,
	0,0,898,899,5,65,0,0,899,900,5,84,0,0,900,901,5,65,0,0,901,902,5,76,0,0,
	902,903,5,79,0,0,903,904,5,71,0,0,904,74,1,0,0,0,905,906,5,67,0,0,906,907,
	5,85,0,0,907,908,5,82,0,0,908,909,5,82,0,0,909,910,5,69,0,0,910,911,5,78,
	0,0,911,912,5,84,0,0,912,913,5,95,0,0,913,914,5,68,0,0,914,915,5,65,0,0,
	915,916,5,84,0,0,916,917,5,69,0,0,917,76,1,0,0,0,918,919,5,67,0,0,919,920,
	5,85,0,0,920,921,5,82,0,0,921,922,5,82,0,0,922,923,5,69,0,0,923,924,5,78,
	0,0,924,925,5,84,0,0,925,926,5,95,0,0,926,927,5,80,0,0,927,928,5,65,0,0,
	928,929,5,84,0,0,929,930,5,72,0,0,930,78,1,0,0,0,931,932,5,67,0,0,932,933,
	5,85,0,0,933,934,5,82,0,0,934,935,5,82,0,0,935,936,5,69,0,0,936,937,5,78,
	0,0,937,938,5,84,0,0,938,939,5,95,0,0,939,940,5,82,0,0,940,941,5,79,0,0,
	941,942,5,76,0,0,942,943,5,69,0,0,943,80,1,0,0,0,944,945,5,67,0,0,945,946,
	5,85,0,0,946,947,5,82,0,0,947,948,5,82,0,0,948,949,5,69,0,0,949,950,5,78,
	0,0,950,951,5,84,0,0,951,952,5,95,0,0,952,953,5,83,0,0,953,954,5,67,0,0,
	954,955,5,72,0,0,955,956,5,69,0,0,956,957,5,77,0,0,957,958,5,65,0,0,958,
	82,1,0,0,0,959,960,5,67,0,0,960,961,5,85,0,0,961,962,5,82,0,0,962,963,5,
	82,0,0,963,964,5,69,0,0,964,965,5,78,0,0,965,966,5,84,0,0,966,967,5,95,
	0,0,967,968,5,84,0,0,968,969,5,73,0,0,969,970,5,77,0,0,970,971,5,69,0,0,
	971,84,1,0,0,0,972,973,5,67,0,0,973,974,5,85,0,0,974,975,5,82,0,0,975,976,
	5,82,0,0,976,977,5,69,0,0,977,978,5,78,0,0,978,979,5,84,0,0,979,980,5,95,
	0,0,980,981,5,84,0,0,981,982,5,73,0,0,982,983,5,77,0,0,983,984,5,69,0,0,
	984,985,5,83,0,0,985,986,5,84,0,0,986,987,5,65,0,0,987,988,5,77,0,0,988,
	989,5,80,0,0,989,86,1,0,0,0,990,991,5,67,0,0,991,992,5,85,0,0,992,993,5,
	82,0,0,993,994,5,82,0,0,994,995,5,69,0,0,995,996,5,78,0,0,996,997,5,84,
	0,0,997,998,5,95,0,0,998,999,5,85,0,0,999,1000,5,83,0,0,1000,1001,5,69,
	0,0,1001,1002,5,82,0,0,1002,88,1,0,0,0,1003,1004,5,68,0,0,1004,1005,5,65,
	0,0,1005,1006,5,84,0,0,1006,1007,5,65,0,0,1007,90,1,0,0,0,1008,1009,5,68,
	0,0,1009,1010,5,65,0,0,1010,1011,5,84,0,0,1011,1012,5,69,0,0,1012,92,1,
	0,0,0,1013,1014,5,68,0,0,1014,1015,5,65,0,0,1015,1016,5,89,0,0,1016,94,
	1,0,0,0,1017,1018,5,68,0,0,1018,1019,5,69,0,0,1019,1020,5,65,0,0,1020,1021,
	5,76,0,0,1021,1022,5,76,0,0,1022,1023,5,79,0,0,1023,1024,5,67,0,0,1024,
	1025,5,65,0,0,1025,1026,5,84,0,0,1026,1027,5,69,0,0,1027,96,1,0,0,0,1028,
	1029,5,68,0,0,1029,1030,5,69,0,0,1030,1031,5,70,0,0,1031,1032,5,65,0,0,
	1032,1033,5,85,0,0,1033,1034,5,76,0,0,1034,1035,5,84,0,0,1035,98,1,0,0,
	0,1036,1037,5,68,0,0,1037,1038,5,69,0,0,1038,1039,5,70,0,0,1039,1040,5,
	73,0,0,1040,1041,5,78,0,0,1041,1042,5,69,0,0,1042,1043,5,82,0,0,1043,100,
	1,0,0,0,1044,1045,5,68,0,0,1045,1046,5,69,0,0,1046,1047,5,76,0,0,1047,1048,
	5,69,0,0,1048,1049,5,84,0,0,1049,1050,5,69,0,0,1050,102,1,0,0,0,1051,1052,
	5,68,0,0,1052,1053,5,69,0,0,1053,1054,5,78,0,0,1054,1055,5,89,0,0,1055,
	104,1,0,0,0,1056,1057,5,68,0,0,1057,1058,5,69,0,0,1058,1059,5,83,0,0,1059,
	1060,5,67,0,0,1060,106,1,0,0,0,1061,1062,5,68,0,0,1062,1063,5,69,0,0,1063,
	1064,5,83,0,0,1064,1065,5,67,0,0,1065,1066,5,82,0,0,1066,1067,5,73,0,0,
	1067,1068,5,66,0,0,1068,1069,5,69,0,0,1069,108,1,0,0,0,1070,1071,5,68,0,
	0,1071,1072,5,69,0,0,1072,1073,5,83,0,0,1073,1074,5,67,0,0,1074,1075,5,
	82,0,0,1075,1076,5,73,0,0,1076,1077,5,80,0,0,1077,1078,5,84,0,0,1078,1079,
	5,79,0,0,1079,1080,5,82,0,0,1080,110,1,0,0,0,1081,1082,5,68,0,0,1082,1083,
	5,69,0,0,1083,1084,5,70,0,0,1084,1085,5,73,0,0,1085,1086,5,78,0,0,1086,
	1087,5,69,0,0,1087,112,1,0,0,0,1088,1089,5,68,0,0,1089,1090,5,73,0,0,1090,
	1091,5,83,0,0,1091,1092,5,84,0,0,1092,1093,5,73,0,0,1093,1094,5,78,0,0,
	1094,1095,5,67,0,0,1095,1096,5,84,0,0,1096,114,1,0,0,0,1097,1098,5,68,0,
	0,1098,1099,5,73,0,0,1099,1100,5,83,0,0,1100,1101,5,84,0,0,1101,1102,5,
	82,0,0,1102,1103,5,73,0,0,1103,1104,5,66,0,0,1104,1105,5,85,0,0,1105,1106,
	5,84,0,0,1106,1107,5,69,0,0,1107,1108,5,68,0,0,1108,116,1,0,0,0,1109,1110,
	5,68,0,0,1110,1111,5,79,0,0,1111,1112,5,85,0,0,1112,1113,5,66,0,0,1113,
	1114,5,76,0,0,1114,1115,5,69,0,0,1115,118,1,0,0,0,1116,1117,5,68,0,0,1117,
	1118,5,82,0,0,1118,1119,5,79,0,0,1119,1120,5,80,0,0,1120,120,1,0,0,0,1121,
	1122,5,69,0,0,1122,1123,5,76,0,0,1123,1124,5,83,0,0,1124,1125,5,69,0,0,
	1125,122,1,0,0,0,1126,1127,5,69,0,0,1127,1128,5,77,0,0,1128,1129,5,80,0,
	0,1129,1130,5,84,0,0,1130,1131,5,89,0,0,1131,124,1,0,0,0,1132,1133,5,69,
	0,0,1133,1134,5,78,0,0,1134,1135,5,67,0,0,1135,1136,5,79,0,0,1136,1137,
	5,68,0,0,1137,1138,5,73,0,0,1138,1139,5,78,0,0,1139,1140,5,71,0,0,1140,
	126,1,0,0,0,1141,1142,5,69,0,0,1142,1143,5,78,0,0,1143,1144,5,68,0,0,1144,
	128,1,0,0,0,1145,1146,5,69,0,0,1146,1147,5,82,0,0,1147,1148,5,82,0,0,1148,
	1149,5,79,0,0,1149,1150,5,82,0,0,1150,130,1,0,0,0,1151,1152,5,69,0,0,1152,
	1153,5,83,0,0,1153,1154,5,67,0,0,1154,1155,5,65,0,0,1155,1156,5,80,0,0,
	1156,1157,5,69,0,0,1157,132,1,0,0,0,1158,1159,5,69,0,0,1159,1160,5,88,0,
	0,1160,1161,5,67,0,0,1161,1162,5,69,0,0,1162,1163,5,80,0,0,1163,1164,5,
	84,0,0,1164,134,1,0,0,0,1165,1166,5,69,0,0,1166,1167,5,88,0,0,1167,1168,
	5,67,0,0,1168,1169,5,76,0,0,1169,1170,5,85,0,0,1170,1171,5,68,0,0,1171,
	1172,5,73,0,0,1172,1173,5,78,0,0,1173,1174,5,71,0,0,1174,136,1,0,0,0,1175,
	1176,5,69,0,0,1176,1177,5,88,0,0,1177,1178,5,69,0,0,1178,1179,5,67,0,0,
	1179,1180,5,85,0,0,1180,1181,5,84,0,0,1181,1182,5,69,0,0,1182,138,1,0,0,
	0,1183,1184,5,69,0,0,1184,1185,5,88,0,0,1185,1186,5,73,0,0,1186,1187,5,
	83,0,0,1187,1188,5,84,0,0,1188,1189,5,83,0,0,1189,140,1,0,0,0,1190,1191,
	5,69,0,0,1191,1192,5,88,0,0,1192,1193,5,80,0,0,1193,1194,5,76,0,0,1194,
	1195,5,65,0,0,1195,1196,5,73,0,0,1196,1197,5,78,0,0,1197,142,1,0,0,0,1198,
	1199,5,69,0,0,1199,1200,5,88,0,0,1200,1201,5,84,0,0,1201,1202,5,82,0,0,
	1202,1203,5,65,0,0,1203,1204,5,67,0,0,1204,1205,5,84,0,0,1205,144,1,0,0,
	0,1206,1207,5,70,0,0,1207,1208,5,65,0,0,1208,1209,5,76,0,0,1209,1210,5,
	83,0,0,1210,1211,5,69,0,0,1211,146,1,0,0,0,1212,1213,5,70,0,0,1213,1214,
	5,69,0,0,1214,1215,5,84,0,0,1215,1216,5,67,0,0,1216,1217,5,72,0,0,1217,
	148,1,0,0,0,1218,1219,5,70,0,0,1219,1220,5,73,0,0,1220,1221,5,76,0,0,1221,
	1222,5,84,0,0,1222,1223,5,69,0,0,1223,1224,5,82,0,0,1224,150,1,0,0,0,1225,
	1226,5,70,0,0,1226,1227,5,73,0,0,1227,1228,5,78,0,0,1228,1229,5,65,0,0,
	1229,1230,5,76,0,0,1230,152,1,0,0,0,1231,1232,5,70,0,0,1232,1233,5,73,0,
	0,1233,1234,5,82,0,0,1234,1235,5,83,0,0,1235,1236,5,84,0,0,1236,154,1,0,
	0,0,1237,1238,5,70,0,0,1238,1239,5,79,0,0,1239,1240,5,76,0,0,1240,1241,
	5,76,0,0,1241,1242,5,79,0,0,1242,1243,5,87,0,0,1243,1244,5,73,0,0,1244,
	1245,5,78,0,0,1245,1246,5,71,0,0,1246,156,1,0,0,0,1247,1248,5,70,0,0,1248,
	1249,5,79,0,0,1249,1250,5,82,0,0,1250,158,1,0,0,0,1251,1252,5,70,0,0,1252,
	1253,5,79,0,0,1253,1254,5,82,0,0,1254,1255,5,77,0,0,1255,1256,5,65,0,0,
	1256,1257,5,84,0,0,1257,160,1,0,0,0,1258,1259,5,70,0,0,1259,1260,5,82,0,
	0,1260,1261,5,79,0,0,1261,1262,5,77,0,0,1262,162,1,0,0,0,1263,1264,5,70,
	0,0,1264,1265,5,85,0,0,1265,1266,5,76,0,0,1266,1267,5,76,0,0,1267,164,1,
	0,0,0,1268,1269,5,70,0,0,1269,1270,5,85,0,0,1270,1271,5,78,0,0,1271,1272,
	5,67,0,0,1272,1273,5,84,0,0,1273,1274,5,73,0,0,1274,1275,5,79,0,0,1275,
	1276,5,78,0,0,1276,1277,5,83,0,0,1277,166,1,0,0,0,1278,1279,5,71,0,0,1279,
	1280,5,82,0,0,1280,1281,5,65,0,0,1281,1282,5,67,0,0,1282,1283,5,69,0,0,
	1283,168,1,0,0,0,1284,1285,5,71,0,0,1285,1286,5,82,0,0,1286,1287,5,65,0,
	0,1287,1288,5,78,0,0,1288,1289,5,84,0,0,1289,170,1,0,0,0,1290,1291,5,71,
	0,0,1291,1292,5,82,0,0,1292,1293,5,65,0,0,1293,1294,5,78,0,0,1294,1295,
	5,84,0,0,1295,1296,5,69,0,0,1296,1297,5,68,0,0,1297,172,1,0,0,0,1298,1299,
	5,71,0,0,1299,1300,5,82,0,0,1300,1301,5,65,0,0,1301,1302,5,78,0,0,1302,
	1303,5,84,0,0,1303,1304,5,83,0,0,1304,174,1,0,0,0,1305,1306,5,71,0,0,1306,
	1307,5,82,0,0,1307,1308,5,65,0,0,1308,1309,5,80,0,0,1309,1310,5,72,0,0,
	1310,1311,5,86,0,0,1311,1312,5,73,0,0,1312,1313,5,90,0,0,1313,176,1,0,0,
	0,1314,1315,5,71,0,0,1315,1316,5,82,0,0,1316,1317,5,79,0,0,1317,1318,5,
	85,0,0,1318,1319,5,80,0,0,1319,178,1,0,0,0,1320,1321,5,71,0,0,1321,1322,
	5,82,0,0,1322,1323,5,79,0,0,1323,1324,5,85,0,0,1324,1325,5,80,0,0,1325,
	1326,5,73,0,0,1326,1327,5,78,0,0,1327,1328,5,71,0,0,1328,180,1,0,0,0,1329,
	1330,5,71,0,0,1330,1331,5,82,0,0,1331,1332,5,79,0,0,1332,1333,5,85,0,0,
	1333,1334,5,80,0,0,1334,1335,5,83,0,0,1335,182,1,0,0,0,1336,1337,5,72,0,
	0,1337,1338,5,65,0,0,1338,1339,5,86,0,0,1339,1340,5,73,0,0,1340,1341,5,
	78,0,0,1341,1342,5,71,0,0,1342,184,1,0,0,0,1343,1344,5,72,0,0,1344,1345,
	5,79,0,0,1345,1346,5,85,0,0,1346,1347,5,82,0,0,1347,186,1,0,0,0,1348,1349,
	5,73,0,0,1349,1350,5,70,0,0,1350,188,1,0,0,0,1351,1352,5,73,0,0,1352,1353,
	5,71,0,0,1353,1354,5,78,0,0,1354,1355,5,79,0,0,1355,1356,5,82,0,0,1356,
	1357,5,69,0,0,1357,190,1,0,0,0,1358,1359,5,73,0,0,1359,1360,5,78,0,0,1360,
	192,1,0,0,0,1361,1362,5,73,0,0,1362,1363,5,78,0,0,1363,1364,5,67,0,0,1364,
	1365,5,76,0,0,1365,1366,5,85,0,0,1366,1367,5,68,0,0,1367,1368,5,73,0,0,
	1368,1369,5,78,0,0,1369,1370,5,71,0,0,1370,194,1,0,0,0,1371,1372,5,73,0,
	0,1372,1373,5,78,0,0,1373,1374,5,73,0,0,1374,1375,5,84,0,0,1375,1376,5,
	73,0,0,1376,1377,5,65,0,0,1377,1378,5,76,0,0,1378,196,1,0,0,0,1379,1380,
	5,73,0,0,1380,1381,5,78,0,0,1381,1382,5,78,0,0,1382,1383,5,69,0,0,1383,
	1384,5,82,0,0,1384,198,1,0,0,0,1385,1386,5,73,0,0,1386,1387,5,78,0,0,1387,
	1388,5,80,0,0,1388,1389,5,85,0,0,1389,1390,5,84,0,0,1390,200,1,0,0,0,1391,
	1392,5,73,0,0,1392,1393,5,78,0,0,1393,1394,5,83,0,0,1394,1395,5,69,0,0,
	1395,1396,5,82,0,0,1396,1397,5,84,0,0,1397,202,1,0,0,0,1398,1399,5,73,0,
	0,1399,1400,5,78,0,0,1400,1401,5,84,0,0,1401,1402,5,69,0,0,1402,1403,5,
	82,0,0,1403,1404,5,83,0,0,1404,1405,5,69,0,0,1405,1406,5,67,0,0,1406,1407,
	5,84,0,0,1407,204,1,0,0,0,1408,1409,5,73,0,0,1409,1410,5,78,0,0,1410,1411,
	5,84,0,0,1411,1412,5,69,0,0,1412,1413,5,82,0,0,1413,1414,5,86,0,0,1414,
	1415,5,65,0,0,1415,1416,5,76,0,0,1416,206,1,0,0,0,1417,1418,5,73,0,0,1418,
	1419,5,78,0,0,1419,1420,5,84,0,0,1420,1421,5,79,0,0,1421,208,1,0,0,0,1422,
	1423,5,73,0,0,1423,1424,5,78,0,0,1424,1425,5,86,0,0,1425,1426,5,79,0,0,
	1426,1427,5,75,0,0,1427,1428,5,69,0,0,1428,1429,5,82,0,0,1429,210,1,0,0,
	0,1430,1431,5,73,0,0,1431,1432,5,79,0,0,1432,212,1,0,0,0,1433,1434,5,73,
	0,0,1434,1435,5,83,0,0,1435,214,1,0,0,0,1436,1437,5,73,0,0,1437,1438,5,
	83,0,0,1438,1439,5,79,0,0,1439,1440,5,76,0,0,1440,1441,5,65,0,0,1441,1442,
	5,84,0,0,1442,1443,5,73,0,0,1443,1444,5,79,0,0,1444,1445,5,78,0,0,1445,
	216,1,0,0,0,1446,1447,5,74,0,0,1447,1448,5,79,0,0,1448,1449,5,73,0,0,1449,
	1450,5,78,0,0,1450,218,1,0,0,0,1451,1452,5,74,0,0,1452,1453,5,83,0,0,1453,
	1454,5,79,0,0,1454,1455,5,78,0,0,1455,220,1,0,0,0,1456,1457,5,74,0,0,1457,
	1458,5,83,0,0,1458,1459,5,79,0,0,1459,1460,5,78,0,0,1460,1461,5,95,0,0,
	1461,1462,5,65,0,0,1462,1463,5,82,0,0,1463,1464,5,82,0,0,1464,1465,5,65,
	0,0,1465,1466,5,89,0,0,1466,222,1,0,0,0,1467,1468,5,74,0,0,1468,1469,5,
	83,0,0,1469,1470,5,79,0,0,1470,1471,5,78,0,0,1471,1472,5,95,0,0,1472,1473,
	5,69,0,0,1473,1474,5,88,0,0,1474,1475,5,73,0,0,1475,1476,5,83,0,0,1476,
	1477,5,84,0,0,1477,1478,5,83,0,0,1478,224,1,0,0,0,1479,1480,5,74,0,0,1480,
	1481,5,83,0,0,1481,1482,5,79,0,0,1482,1483,5,78,0,0,1483,1484,5,95,0,0,
	1484,1485,5,79,0,0,1485,1486,5,66,0,0,1486,1487,5,74,0,0,1487,1488,5,69,
	0,0,1488,1489,5,67,0,0,1489,1490,5,84,0,0,1490,226,1,0,0,0,1491,1492,5,
	74,0,0,1492,1493,5,83,0,0,1493,1494,5,79,0,0,1494,1495,5,78,0,0,1495,1496,
	5,95,0,0,1496,1497,5,81,0,0,1497,1498,5,85,0,0,1498,1499,5,69,0,0,1499,
	1500,5,82,0,0,1500,1501,5,89,0,0,1501,228,1,0,0,0,1502,1503,5,74,0,0,1503,
	1504,5,83,0,0,1504,1505,5,79,0,0,1505,1506,5,78,0,0,1506,1507,5,95,0,0,
	1507,1508,5,86,0,0,1508,1509,5,65,0,0,1509,1510,5,76,0,0,1510,1511,5,85,
	0,0,1511,1512,5,69,0,0,1512,230,1,0,0,0,1513,1514,5,75,0,0,1514,1515,5,
	69,0,0,1515,1516,5,69,0,0,1516,1517,5,80,0,0,1517,232,1,0,0,0,1518,1519,
	5,75,0,0,1519,1520,5,69,0,0,1520,1521,5,89,0,0,1521,234,1,0,0,0,1522,1523,
	5,75,0,0,1523,1524,5,69,0,0,1524,1525,5,89,0,0,1525,1526,5,83,0,0,1526,
	236,1,0,0,0,1527,1528,5,76,0,0,1528,1529,5,65,0,0,1529,1530,5,83,0,0,1530,
	1531,5,84,0,0,1531,238,1,0,0,0,1532,1533,5,76,0,0,1533,1534,5,65,0,0,1534,
	1535,5,84,0,0,1535,1536,5,69,0,0,1536,1537,5,82,0,0,1537,1538,5,65,0,0,
	1538,1539,5,76,0,0,1539,240,1,0,0,0,1540,1541,5,76,0,0,1541,1542,5,69,0,
	0,1542,1543,5,65,0,0,1543,1544,5,68,0,0,1544,1545,5,73,0,0,1545,1546,5,
	78,0,0,1546,1547,5,71,0,0,1547,242,1,0,0,0,1548,1549,5,76,0,0,1549,1550,
	5,69,0,0,1550,1551,5,70,0,0,1551,1552,5,84,0,0,1552,244,1,0,0,0,1553,1554,
	5,76,0,0,1554,1555,5,69,0,0,1555,1556,5,86,0,0,1556,1557,5,69,0,0,1557,
	1558,5,76,0,0,1558,246,1,0,0,0,1559,1560,5,76,0,0,1560,1561,5,73,0,0,1561,
	1562,5,75,0,0,1562,1563,5,69,0,0,1563,248,1,0,0,0,1564,1565,5,76,0,0,1565,
	1566,5,73,0,0,1566,1567,5,77,0,0,1567,1568,5,73,0,0,1568,1569,5,84,0,0,
	1569,250,1,0,0,0,1570,1571,5,76,0,0,1571,1572,5,73,0,0,1572,1573,5,83,0,
	0,1573,1574,5,84,0,0,1574,1575,5,65,0,0,1575,1576,5,71,0,0,1576,1577,5,
	71,0,0,1577,252,1,0,0,0,1578,1579,5,76,0,0,1579,1580,5,79,0,0,1580,1581,
	5,67,0,0,1581,1582,5,65,0,0,1582,1583,5,76,0,0,1583,254,1,0,0,0,1584,1585,
	5,76,0,0,1585,1586,5,79,0,0,1586,1587,5,67,0,0,1587,1588,5,65,0,0,1588,
	1589,5,76,0,0,1589,1590,5,84,0,0,1590,1591,5,73,0,0,1591,1592,5,77,0,0,
	1592,1593,5,69,0,0,1593,256,1,0,0,0,1594,1595,5,76,0,0,1595,1596,5,79,0,
	0,1596,1597,5,67,0,0,1597,1598,5,65,0,0,1598,1599,5,76,0,0,1599,1600,5,
	84,0,0,1600,1601,5,73,0,0,1601,1602,5,77,0,0,1602,1603,5,69,0,0,1603,1604,
	5,83,0,0,1604,1605,5,84,0,0,1605,1606,5,65,0,0,1606,1607,5,77,0,0,1607,
	1608,5,80,0,0,1608,258,1,0,0,0,1609,1610,5,76,0,0,1610,1611,5,79,0,0,1611,
	1612,5,71,0,0,1612,1613,5,73,0,0,1613,1614,5,67,0,0,1614,1615,5,65,0,0,
	1615,1616,5,76,0,0,1616,260,1,0,0,0,1617,1618,5,77,0,0,1618,1619,5,65,0,
	0,1619,1620,5,80,0,0,1620,262,1,0,0,0,1621,1622,5,77,0,0,1622,1623,5,65,
	0,0,1623,1624,5,84,0,0,1624,1625,5,67,0,0,1625,1626,5,72,0,0,1626,264,1,
	0,0,0,1627,1628,5,77,0,0,1628,1629,5,65,0,0,1629,1630,5,84,0,0,1630,1631,
	5,67,0,0,1631,1632,5,72,0,0,1632,1633,5,69,0,0,1633,1634,5,68,0,0,1634,
	266,1,0,0,0,1635,1636,5,77,0,0,1636,1637,5,65,0,0,1637,1638,5,84,0,0,1638,
	1639,5,67,0,0,1639,1640,5,72,0,0,1640,1641,5,69,0,0,1641,1642,5,83,0,0,
	1642,268,1,0,0,0,1643,1644,5,77,0,0,1644,1645,5,65,0,0,1645,1646,5,84,0,
	0,1646,1647,5,67,0,0,1647,1648,5,72,0,0,1648,1649,5,95,0,0,1649,1650,5,
	82,0,0,1650,1651,5,69,0,0,1651,1652,5,67,0,0,1652,1653,5,79,0,0,1653,1654,
	5,71,0,0,1654,1655,5,78,0,0,1655,1656,5,73,0,0,1656,1657,5,90,0,0,1657,
	1658,5,69,0,0,1658,270,1,0,0,0,1659,1660,5,77,0,0,1660,1661,5,65,0,0,1661,
	1662,5,84,0,0,1662,1663,5,69,0,0,1663,1664,5,82,0,0,1664,1665,5,73,0,0,
	1665,1666,5,65,0,0,1666,1667,5,76,0,0,1667,1668,5,73,0,0,1668,1669,5,90,
	0,0,1669,1670,5,69,0,0,1670,1671,5,68,0,0,1671,272,1,0,0,0,1672,1673,5,
	77,0,0,1673,1674,5,69,0,0,1674,1675,5,65,0,0,1675,1676,5,83,0,0,1676,1677,
	5,85,0,0,1677,1678,5,82,0,0,1678,1679,5,69,0,0,1679,1680,5,83,0,0,1680,
	274,1,0,0,0,1681,1682,5,77,0,0,1682,1683,5,69,0,0,1683,1684,5,82,0,0,1684,
	1685,5,71,0,0,1685,1686,5,69,0,0,1686,276,1,0,0,0,1687,1688,5,77,0,0,1688,
	1689,5,73,0,0,1689,1690,5,78,0,0,1690,1691,5,85,0,0,1691,1692,5,84,0,0,
	1692,1693,5,69,0,0,1693,278,1,0,0,0,1694,1695,5,77,0,0,1695,1696,5,79,0,
	0,1696,1697,5,78,0,0,1697,1698,5,84,0,0,1698,1699,5,72,0,0,1699,280,1,0,
	0,0,1700,1701,5,78,0,0,1701,1702,5,65,0,0,1702,1703,5,84,0,0,1703,1704,
	5,85,0,0,1704,1705,5,82,0,0,1705,1706,5,65,0,0,1706,1707,5,76,0,0,1707,
	282,1,0,0,0,1708,1709,5,78,0,0,1709,1710,5,69,0,0,1710,1711,5,88,0,0,1711,
	1712,5,84,0,0,1712,284,1,0,0,0,1713,1714,5,78,0,0,1714,1715,5,70,0,0,1715,
	1716,5,67,0,0,1716,286,1,0,0,0,1717,1718,5,78,0,0,1718,1719,5,70,0,0,1719,
	1720,5,68,0,0,1720,288,1,0,0,0,1721,1722,5,78,0,0,1722,1723,5,70,0,0,1723,
	1724,5,75,0,0,1724,1725,5,67,0,0,1725,290,1,0,0,0,1726,1727,5,78,0,0,1727,
	1728,5,70,0,0,1728,1729,5,75,0,0,1729,1730,5,68,0,0,1730,292,1,0,0,0,1731,
	1732,5,78,0,0,1732,1733,5,79,0,0,1733,294,1,0,0,0,1734,1735,5,78,0,0,1735,
	1736,5,79,0,0,1736,1737,5,78,0,0,1737,1738,5,69,0,0,1738,296,1,0,0,0,1739,
	1740,5,78,0,0,1740,1741,5,79,0,0,1741,1742,5,82,0,0,1742,1743,5,77,0,0,
	1743,1744,5,65,0,0,1744,1745,5,76,0,0,1745,1746,5,73,0,0,1746,1747,5,90,
	0,0,1747,1748,5,69,0,0,1748,298,1,0,0,0,1749,1750,5,78,0,0,1750,1751,5,
	79,0,0,1751,1752,5,84,0,0,1752,300,1,0,0,0,1753,1754,5,78,0,0,1754,1755,
	5,85,0,0,1755,1756,5,76,0,0,1756,1757,5,76,0,0,1757,302,1,0,0,0,1758,1759,
	5,78,0,0,1759,1760,5,85,0,0,1760,1761,5,76,0,0,1761,1762,5,76,0,0,1762,
	1763,5,73,0,0,1763,1764,5,70,0,0,1764,304,1,0,0,0,1765,1766,5,78,0,0,1766,
	1767,5,85,0,0,1767,1768,5,76,0,0,1768,1769,5,76,0,0,1769,1770,5,83,0,0,
	1770,306,1,0,0,0,1771,1772,5,79,0,0,1772,1773,5,66,0,0,1773,1774,5,74,0,
	0,1774,1775,5,69,0,0,1775,1776,5,67,0,0,1776,1777,5,84,0,0,1777,308,1,0,
	0,0,1778,1779,5,79,0,0,1779,1780,5,70,0,0,1780,1781,5,70,0,0,1781,1782,
	5,83,0,0,1782,1783,5,69,0,0,1783,1784,5,84,0,0,1784,310,1,0,0,0,1785,1786,
	5,79,0,0,1786,1787,5,77,0,0,1787,1788,5,73,0,0,1788,1789,5,84,0,0,1789,
	312,1,0,0,0,1790,1791,5,79,0,0,1791,1792,5,70,0,0,1792,314,1,0,0,0,1793,
	1794,5,79,0,0,1794,1795,5,78,0,0,1795,316,1,0,0,0,1796,1797,5,79,0,0,1797,
	1798,5,78,0,0,1798,1799,5,69,0,0,1799,318,1,0,0,0,1800,1801,5,79,0,0,1801,
	1802,5,78,0,0,1802,1803,5,76,0,0,1803,1804,5,89,0,0,1804,320,1,0,0,0,1805,
	1806,5,79,0,0,1806,1807,5,80,0,0,1807,1808,5,84,0,0,1808,1809,5,73,0,0,
	1809,1810,5,79,0,0,1810,1811,5,78,0,0,1811,322,1,0,0,0,1812,1813,5,79,0,
	0,1813,1814,5,82,0,0,1814,324,1,0,0,0,1815,1816,5,79,0,0,1816,1817,5,82,
	0,0,1817,1818,5,68,0,0,1818,1819,5,69,0,0,1819,1820,5,82,0,0,1820,326,1,
	0,0,0,1821,1822,5,79,0,0,1822,1823,5,82,0,0,1823,1824,5,68,0,0,1824,1825,
	5,73,0,0,1825,1826,5,78,0,0,1826,1827,5,65,0,0,1827,1828,5,76,0,0,1828,
	1829,5,73,0,0,1829,1830,5,84,0,0,1830,1831,5,89,0,0,1831,328,1,0,0,0,1832,
	1833,5,79,0,0,1833,1834,5,85,0,0,1834,1835,5,84,0,0,1835,1836,5,69,0,0,
	1836,1837,5,82,0,0,1837,330,1,0,0,0,1838,1839,5,79,0,0,1839,1840,5,85,0,
	0,1840,1841,5,84,0,0,1841,1842,5,80,0,0,1842,1843,5,85,0,0,1843,1844,5,
	84,0,0,1844,332,1,0,0,0,1845,1846,5,79,0,0,1846,1847,5,86,0,0,1847,1848,
	5,69,0,0,1848,1849,5,82,0,0,1849,334,1,0,0,0,1850,1851,5,79,0,0,1851,1852,
	5,86,0,0,1852,1853,5,69,0,0,1853,1854,5,82,0,0,1854,1855,5,70,0,0,1855,
	1856,5,76,0,0,1856,1857,5,79,0,0,1857,1858,5,87,0,0,1858,336,1,0,0,0,1859,
	1860,5,80,0,0,1860,1861,5,65,0,0,1861,1862,5,82,0,0,1862,1863,5,84,0,0,
	1863,1864,5,73,0,0,1864,1865,5,84,0,0,1865,1866,5,73,0,0,1866,1867,5,79,
	0,0,1867,1868,5,78,0,0,1868,338,1,0,0,0,1869,1870,5,80,0,0,1870,1871,5,
	65,0,0,1871,1872,5,82,0,0,1872,1873,5,84,0,0,1873,1874,5,73,0,0,1874,1875,
	5,84,0,0,1875,1876,5,73,0,0,1876,1877,5,79,0,0,1877,1878,5,78,0,0,1878,
	1879,5,83,0,0,1879,340,1,0,0,0,1880,1881,5,80,0,0,1881,1882,5,65,0,0,1882,
	1883,5,83,0,0,1883,1884,5,83,0,0,1884,1885,5,73,0,0,1885,1886,5,78,0,0,
	1886,1887,5,71,0,0,1887,342,1,0,0,0,1888,1889,5,80,0,0,1889,1890,5,65,0,
	0,1890,1891,5,83,0,0,1891,1892,5,84,0,0,1892,344,1,0,0,0,1893,1894,5,80,
	0,0,1894,1895,5,65,0,0,1895,1896,5,84,0,0,1896,1897,5,72,0,0,1897,346,1,
	0,0,0,1898,1899,5,80,0,0,1899,1900,5,65,0,0,1900,1901,5,84,0,0,1901,1902,
	5,84,0,0,1902,1903,5,69,0,0,1903,1904,5,82,0,0,1904,1905,5,78,0,0,1905,
	348,1,0,0,0,1906,1907,5,80,0,0,1907,1908,5,69,0,0,1908,1909,5,82,0,0,1909,
	350,1,0,0,0,1910,1911,5,80,0,0,1911,1912,5,69,0,0,1912,1913,5,82,0,0,1913,
	1914,5,73,0,0,1914,1915,5,79,0,0,1915,1916,5,68,0,0,1916,352,1,0,0,0,1917,
	1918,5,80,0,0,1918,1919,5,69,0,0,1919,1920,5,82,0,0,1920,1921,5,77,0,0,
	1921,1922,5,85,0,0,1922,1923,5,84,0,0,1923,1924,5,69,0,0,1924,354,1,0,0,
	0,1925,1926,5,80,0,0,1926,1927,5,79,0,0,1927,1928,5,83,0,0,1928,1929,5,
	73,0,0,1929,1930,5,84,0,0,1930,1931,5,73,0,0,1931,1932,5,79,0,0,1932,1933,
	5,78,0,0,1933,356,1,0,0,0,1934,1935,5,80,0,0,1935,1936,5,82,0,0,1936,1937,
	5,69,0,0,1937,1938,5,67,0,0,1938,1939,5,69,0,0,1939,1940,5,68,0,0,1940,
	1941,5,73,0,0,1941,1942,5,78,0,0,1942,1943,5,71,0,0,1943,358,1,0,0,0,1944,
	1945,5,80,0,0,1945,1946,5,82,0,0,1946,1947,5,69,0,0,1947,1948,5,67,0,0,
	1948,1949,5,73,0,0,1949,1950,5,83,0,0,1950,1951,5,73,0,0,1951,1952,5,79,
	0,0,1952,1953,5,78,0,0,1953,360,1,0,0,0,1954,1955,5,80,0,0,1955,1956,5,
	82,0,0,1956,1957,5,69,0,0,1957,1958,5,80,0,0,1958,1959,5,65,0,0,1959,1960,
	5,82,0,0,1960,1961,5,69,0,0,1961,362,1,0,0,0,1962,1963,5,80,0,0,1963,1964,
	5,82,0,0,1964,1965,5,73,0,0,1965,1966,5,86,0,0,1966,1967,5,73,0,0,1967,
	1968,5,76,0,0,1968,1969,5,69,0,0,1969,1970,5,71,0,0,1970,1971,5,69,0,0,
	1971,1972,5,83,0,0,1972,364,1,0,0,0,1973,1974,5,80,0,0,1974,1975,5,82,0,
	0,1975,1976,5,79,0,0,1976,1977,5,80,0,0,1977,1978,5,69,0,0,1978,1979,5,
	82,0,0,1979,1980,5,84,0,0,1980,1981,5,73,0,0,1981,1982,5,69,0,0,1982,1983,
	5,83,0,0,1983,366,1,0,0,0,1984,1985,5,80,0,0,1985,1986,5,82,0,0,1986,1987,
	5,85,0,0,1987,1988,5,78,0,0,1988,1989,5,69,0,0,1989,368,1,0,0,0,1990,1991,
	5,81,0,0,1991,1992,5,85,0,0,1992,1993,5,79,0,0,1993,1994,5,84,0,0,1994,
	1995,5,69,0,0,1995,1996,5,83,0,0,1996,370,1,0,0,0,1997,1998,5,82,0,0,1998,
	1999,5,65,0,0,1999,2000,5,78,0,0,2000,2001,5,71,0,0,2001,2002,5,69,0,0,
	2002,372,1,0,0,0,2003,2004,5,82,0,0,2004,2005,5,69,0,0,2005,2006,5,65,0,
	0,2006,2007,5,68,0,0,2007,374,1,0,0,0,2008,2009,5,82,0,0,2009,2010,5,69,
	0,0,2010,2011,5,67,0,0,2011,2012,5,85,0,0,2012,2013,5,82,0,0,2013,2014,
	5,83,0,0,2014,2015,5,73,0,0,2015,2016,5,86,0,0,2016,2017,5,69,0,0,2017,
	376,1,0,0,0,2018,2019,5,82,0,0,2019,2020,5,69,0,0,2020,2021,5,70,0,0,2021,
	2022,5,82,0,0,2022,2023,5,69,0,0,2023,2024,5,83,0,0,2024,2025,5,72,0,0,
	2025,378,1,0,0,0,2026,2027,5,82,0,0,2027,2028,5,69,0,0,2028,2029,5,78,0,
	0,2029,2030,5,65,0,0,2030,2031,5,77,0,0,2031,2032,5,69,0,0,2032,380,1,0,
	0,0,2033,2034,5,82,0,0,2034,2035,5,69,0,0,2035,2036,5,80,0,0,2036,2037,
	5,69,0,0,2037,2038,5,65,0,0,2038,2039,5,84,0,0,2039,2040,5,65,0,0,2040,
	2041,5,66,0,0,2041,2042,5,76,0,0,2042,2043,5,69,0,0,2043,382,1,0,0,0,2044,
	2045,5,82,0,0,2045,2046,5,69,0,0,2046,2047,5,80,0,0,2047,2048,5,76,0,0,
	2048,2049,5,65,0,0,2049,2050,5,67,0,0,2050,2051,5,69,0,0,2051,384,1,0,0,
	0,2052,2053,5,82,0,0,2053,2054,5,69,0,0,2054,2055,5,83,0,0,2055,2056,5,
	69,0,0,2056,2057,5,84,0,0,2057,386,1,0,0,0,2058,2059,5,82,0,0,2059,2060,
	5,69,0,0,2060,2061,5,83,0,0,2061,2062,5,80,0,0,2062,2063,5,69,0,0,2063,
	2064,5,67,0,0,2064,2065,5,84,0,0,2065,388,1,0,0,0,2066,2067,5,82,0,0,2067,
	2068,5,69,0,0,2068,2069,5,83,0,0,2069,2070,5,84,0,0,2070,2071,5,82,0,0,
	2071,2072,5,73,0,0,2072,2073,5,67,0,0,2073,2074,5,84,0,0,2074,390,1,0,0,
	0,2075,2076,5,82,0,0,2076,2077,5,69,0,0,2077,2078,5,84,0,0,2078,2079,5,
	85,0,0,2079,2080,5,82,0,0,2080,2081,5,78,0,0,2081,2082,5,73,0,0,2082,2083,
	5,78,0,0,2083,2084,5,71,0,0,2084,392,1,0,0,0,2085,2086,5,82,0,0,2086,2087,
	5,69,0,0,2087,2088,5,86,0,0,2088,2089,5,79,0,0,2089,2090,5,75,0,0,2090,
	2091,5,69,0,0,2091,394,1,0,0,0,2092,2093,5,82,0,0,2093,2094,5,73,0,0,2094,
	2095,5,71,0,0,2095,2096,5,72,0,0,2096,2097,5,84,0,0,2097,396,1,0,0,0,2098,
	2099,5,82,0,0,2099,2100,5,79,0,0,2100,2101,5,76,0,0,2101,2102,5,69,0,0,
	2102,398,1,0,0,0,2103,2104,5,82,0,0,2104,2105,5,79,0,0,2105,2106,5,76,0,
	0,2106,2107,5,69,0,0,2107,2108,5,83,0,0,2108,400,1,0,0,0,2109,2110,5,82,
	0,0,2110,2111,5,79,0,0,2111,2112,5,76,0,0,2112,2113,5,76,0,0,2113,2114,
	5,66,0,0,2114,2115,5,65,0,0,2115,2116,5,67,0,0,2116,2117,5,75,0,0,2117,
	402,1,0,0,0,2118,2119,5,82,0,0,2119,2120,5,79,0,0,2120,2121,5,76,0,0,2121,
	2122,5,76,0,0,2122,2123,5,85,0,0,2123,2124,5,80,0,0,2124,404,1,0,0,0,2125,
	2126,5,82,0,0,2126,2127,5,79,0,0,2127,2128,5,87,0,0,2128,406,1,0,0,0,2129,
	2130,5,82,0,0,2130,2131,5,79,0,0,2131,2132,5,87,0,0,2132,2133,5,83,0,0,
	2133,408,1,0,0,0,2134,2135,5,82,0,0,2135,2136,5,85,0,0,2136,2137,5,78,0,
	0,2137,2138,5,78,0,0,2138,2139,5,73,0,0,2139,2140,5,78,0,0,2140,2141,5,
	71,0,0,2141,410,1,0,0,0,2142,2143,5,83,0,0,2143,2144,5,67,0,0,2144,2145,
	5,65,0,0,2145,2146,5,76,0,0,2146,2147,5,65,0,0,2147,2148,5,82,0,0,2148,
	412,1,0,0,0,2149,2150,5,83,0,0,2150,2151,5,67,0,0,2151,2152,5,72,0,0,2152,
	2153,5,69,0,0,2153,2154,5,77,0,0,2154,2155,5,65,0,0,2155,414,1,0,0,0,2156,
	2157,5,83,0,0,2157,2158,5,67,0,0,2158,2159,5,72,0,0,2159,2160,5,69,0,0,
	2160,2161,5,77,0,0,2161,2162,5,65,0,0,2162,2163,5,83,0,0,2163,416,1,0,0,
	0,2164,2165,5,83,0,0,2165,2166,5,69,0,0,2166,2167,5,67,0,0,2167,2168,5,
	79,0,0,2168,2169,5,78,0,0,2169,2170,5,68,0,0,2170,418,1,0,0,0,2171,2172,
	5,83,0,0,2172,2173,5,69,0,0,2173,2174,5,67,0,0,2174,2175,5,85,0,0,2175,
	2176,5,82,0,0,2176,2177,5,73,0,0,2177,2178,5,84,0,0,2178,2179,5,89,0,0,
	2179,420,1,0,0,0,2180,2181,5,83,0,0,2181,2182,5,69,0,0,2182,2183,5,69,0,
	0,2183,2184,5,75,0,0,2184,422,1,0,0,0,2185,2186,5,83,0,0,2186,2187,5,69,
	0,0,2187,2188,5,76,0,0,2188,2189,5,69,0,0,2189,2190,5,67,0,0,2190,2191,
	5,84,0,0,2191,424,1,0,0,0,2192,2193,5,83,0,0,2193,2194,5,69,0,0,2194,2195,
	5,82,0,0,2195,2196,5,73,0,0,2196,2197,5,65,0,0,2197,2198,5,76,0,0,2198,
	2199,5,73,0,0,2199,2200,5,90,0,0,2200,2201,5,65,0,0,2201,2202,5,66,0,0,
	2202,2203,5,76,0,0,2203,2204,5,69,0,0,2204,426,1,0,0,0,2205,2206,5,83,0,
	0,2206,2207,5,69,0,0,2207,2208,5,83,0,0,2208,2209,5,83,0,0,2209,2210,5,
	73,0,0,2210,2211,5,79,0,0,2211,2212,5,78,0,0,2212,428,1,0,0,0,2213,2214,
	5,83,0,0,2214,2215,5,69,0,0,2215,2216,5,84,0,0,2216,430,1,0,0,0,2217,2218,
	5,83,0,0,2218,2219,5,69,0,0,2219,2220,5,84,0,0,2220,2221,5,83,0,0,2221,
	432,1,0,0,0,2222,2223,5,83,0,0,2223,2224,5,72,0,0,2224,2225,5,79,0,0,2225,
	2226,5,87,0,0,2226,434,1,0,0,0,2227,2228,5,83,0,0,2228,2229,5,75,0,0,2229,
	2230,5,73,0,0,2230,2231,5,80,0,0,2231,436,1,0,0,0,2232,2233,5,83,0,0,2233,
	2234,5,79,0,0,2234,2235,5,77,0,0,2235,2236,5,69,0,0,2236,438,1,0,0,0,2237,
	2238,5,83,0,0,2238,2239,5,84,0,0,2239,2240,5,65,0,0,2240,2241,5,82,0,0,
	2241,2242,5,84,0,0,2242,440,1,0,0,0,2243,2244,5,83,0,0,2244,2245,5,84,0,
	0,2245,2246,5,65,0,0,2246,2247,5,84,0,0,2247,2248,5,83,0,0,2248,442,1,0,
	0,0,2249,2250,5,83,0,0,2250,2251,5,85,0,0,2251,2252,5,66,0,0,2252,2253,
	5,83,0,0,2253,2254,5,69,0,0,2254,2255,5,84,0,0,2255,444,1,0,0,0,2256,2257,
	5,83,0,0,2257,2258,5,85,0,0,2258,2259,5,66,0,0,2259,2260,5,83,0,0,2260,
	2261,5,84,0,0,2261,2262,5,82,0,0,2262,2263,5,73,0,0,2263,2264,5,78,0,0,
	2264,2265,5,71,0,0,2265,446,1,0,0,0,2266,2267,5,83,0,0,2267,2268,5,89,0,
	0,2268,2269,5,83,0,0,2269,2270,5,84,0,0,2270,2271,5,69,0,0,2271,2272,5,
	77,0,0,2272,448,1,0,0,0,2273,2274,5,84,0,0,2274,2275,5,65,0,0,2275,2276,
	5,66,0,0,2276,2277,5,76,0,0,2277,2278,5,69,0,0,2278,450,1,0,0,0,2279,2280,
	5,84,0,0,2280,2281,5,65,0,0,2281,2282,5,66,0,0,2282,2283,5,76,0,0,2283,
	2284,5,69,0,0,2284,2285,5,83,0,0,2285,452,1,0,0,0,2286,2287,5,84,0,0,2287,
	2288,5,65,0,0,2288,2289,5,66,0,0,2289,2290,5,76,0,0,2290,2291,5,69,0,0,
	2291,2292,5,83,0,0,2292,2293,5,65,0,0,2293,2294,5,77,0,0,2294,2295,5,80,
	0,0,2295,2296,5,76,0,0,2296,2297,5,69,0,0,2297,454,1,0,0,0,2298,2299,5,
	84,0,0,2299,2300,5,69,0,0,2300,2301,5,88,0,0,2301,2302,5,84,0,0,2302,456,
	1,0,0,0,2303,2304,5,83,0,0,2304,2305,5,84,0,0,2305,2306,5,82,0,0,2306,2307,
	5,73,0,0,2307,2308,5,78,0,0,2308,2309,5,71,0,0,2309,458,1,0,0,0,2310,2311,
	5,84,0,0,2311,2312,5,72,0,0,2312,2313,5,69,0,0,2313,2314,5,78,0,0,2314,
	460,1,0,0,0,2315,2316,5,84,0,0,2316,2317,5,73,0,0,2317,2318,5,69,0,0,2318,
	2319,5,83,0,0,2319,462,1,0,0,0,2320,2321,5,84,0,0,2321,2322,5,73,0,0,2322,
	2323,5,77,0,0,2323,2324,5,69,0,0,2324,464,1,0,0,0,2325,2326,5,84,0,0,2326,
	2327,5,73,0,0,2327,2328,5,77,0,0,2328,2329,5,69,0,0,2329,2330,5,83,0,0,
	2330,2331,5,84,0,0,2331,2332,5,65,0,0,2332,2333,5,77,0,0,2333,2334,5,80,
	0,0,2334,466,1,0,0,0,2335,2336,5,84,0,0,2336,2337,5,79,0,0,2337,468,1,0,
	0,0,2338,2339,5,84,0,0,2339,2340,5,82,0,0,2340,2341,5,65,0,0,2341,2342,
	5,73,0,0,2342,2343,5,76,0,0,2343,2344,5,73,0,0,2344,2345,5,78,0,0,2345,
	2346,5,71,0,0,2346,470,1,0,0,0,2347,2348,5,84,0,0,2348,2349,5,82,0,0,2349,
	2350,5,65,0,0,2350,2351,5,78,0,0,2351,2352,5,83,0,0,2352,2353,5,65,0,0,
	2353,2354,5,67,0,0,2354,2355,5,84,0,0,2355,2356,5,73,0,0,2356,2357,5,79,
	0,0,2357,2358,5,78,0,0,2358,472,1,0,0,0,2359,2360,5,84,0,0,2360,2361,5,
	82,0,0,2361,2362,5,73,0,0,2362,2363,5,77,0,0,2363,474,1,0,0,0,2364,2365,
	5,84,0,0,2365,2366,5,82,0,0,2366,2367,5,85,0,0,2367,2368,5,69,0,0,2368,
	476,1,0,0,0,2369,2370,5,84,0,0,2370,2371,5,82,0,0,2371,2372,5,85,0,0,2372,
	2373,5,78,0,0,2373,2374,5,67,0,0,2374,2375,5,65,0,0,2375,2376,5,84,0,0,
	2376,2377,5,69,0,0,2377,478,1,0,0,0,2378,2379,5,84,0,0,2379,2380,5,82,0,
	0,2380,2381,5,89,0,0,2381,2382,5,95,0,0,2382,2383,5,67,0,0,2383,2384,5,
	65,0,0,2384,2385,5,83,0,0,2385,2386,5,84,0,0,2386,480,1,0,0,0,2387,2388,
	5,84,0,0,2388,2389,5,89,0,0,2389,2390,5,80,0,0,2390,2391,5,69,0,0,2391,
	482,1,0,0,0,2392,2393,5,85,0,0,2393,2394,5,69,0,0,2394,2395,5,83,0,0,2395,
	2396,5,67,0,0,2396,2397,5,65,0,0,2397,2398,5,80,0,0,2398,2399,5,69,0,0,
	2399,484,1,0,0,0,2400,2401,5,85,0,0,2401,2402,5,78,0,0,2402,2403,5,66,0,
	0,2403,2404,5,79,0,0,2404,2405,5,85,0,0,2405,2406,5,78,0,0,2406,2407,5,
	68,0,0,2407,2408,5,69,0,0,2408,2409,5,68,0,0,2409,486,1,0,0,0,2410,2411,
	5,85,0,0,2411,2412,5,78,0,0,2412,2413,5,67,0,0,2413,2414,5,79,0,0,2414,
	2415,5,77,0,0,2415,2416,5,77,0,0,2416,2417,5,73,0,0,2417,2418,5,84,0,0,
	2418,2419,5,84,0,0,2419,2420,5,69,0,0,2420,2421,5,68,0,0,2421,488,1,0,0,
	0,2422,2423,5,85,0,0,2423,2424,5,78,0,0,2424,2425,5,67,0,0,2425,2426,5,
	79,0,0,2426,2427,5,78,0,0,2427,2428,5,68,0,0,2428,2429,5,73,0,0,2429,2430,
	5,84,0,0,2430,2431,5,73,0,0,2431,2432,5,79,0,0,2432,2433,5,78,0,0,2433,
	2434,5,65,0,0,2434,2435,5,76,0,0,2435,490,1,0,0,0,2436,2437,5,85,0,0,2437,
	2438,5,78,0,0,2438,2439,5,73,0,0,2439,2440,5,79,0,0,2440,2441,5,78,0,0,
	2441,492,1,0,0,0,2442,2443,5,85,0,0,2443,2444,5,78,0,0,2444,2445,5,73,0,
	0,2445,2446,5,81,0,0,2446,2447,5,85,0,0,2447,2448,5,69,0,0,2448,494,1,0,
	0,0,2449,2450,5,85,0,0,2450,2451,5,78,0,0,2451,2452,5,75,0,0,2452,2453,
	5,78,0,0,2453,2454,5,79,0,0,2454,2455,5,87,0,0,2455,2456,5,78,0,0,2456,
	496,1,0,0,0,2457,2458,5,85,0,0,2458,2459,5,78,0,0,2459,2460,5,77,0,0,2460,
	2461,5,65,0,0,2461,2462,5,84,0,0,2462,2463,5,67,0,0,2463,2464,5,72,0,0,
	2464,2465,5,69,0,0,2465,2466,5,68,0,0,2466,498,1,0,0,0,2467,2468,5,85,0,
	0,2468,2469,5,78,0,0,2469,2470,5,78,0,0,2470,2471,5,69,0,0,2471,2472,5,
	83,0,0,2472,2473,5,84,0,0,2473,500,1,0,0,0,2474,2475,5,85,0,0,2475,2476,
	5,80,0,0,2476,2477,5,68,0,0,2477,2478,5,65,0,0,2478,2479,5,84,0,0,2479,
	2480,5,69,0,0,2480,502,1,0,0,0,2481,2482,5,85,0,0,2482,2483,5,83,0,0,2483,
	2484,5,69,0,0,2484,504,1,0,0,0,2485,2486,5,85,0,0,2486,2487,5,83,0,0,2487,
	2488,5,69,0,0,2488,2489,5,82,0,0,2489,506,1,0,0,0,2490,2491,5,85,0,0,2491,
	2492,5,83,0,0,2492,2493,5,73,0,0,2493,2494,5,78,0,0,2494,2495,5,71,0,0,
	2495,508,1,0,0,0,2496,2497,5,85,0,0,2497,2498,5,84,0,0,2498,2499,5,70,0,
	0,2499,2500,5,49,0,0,2500,2501,5,54,0,0,2501,510,1,0,0,0,2502,2503,5,85,
	0,0,2503,2504,5,84,0,0,2504,2505,5,70,0,0,2505,2506,5,51,0,0,2506,2507,
	5,50,0,0,2507,512,1,0,0,0,2508,2509,5,85,0,0,2509,2510,5,84,0,0,2510,2511,
	5,70,0,0,2511,2512,5,56,0,0,2512,514,1,0,0,0,2513,2514,5,86,0,0,2514,2515,
	5,65,0,0,2515,2516,5,76,0,0,2516,2517,5,73,0,0,2517,2518,5,68,0,0,2518,
	2519,5,65,0,0,2519,2520,5,84,0,0,2520,2521,5,69,0,0,2521,516,1,0,0,0,2522,
	2523,5,86,0,0,2523,2524,5,65,0,0,2524,2525,5,76,0,0,2525,2526,5,85,0,0,
	2526,2527,5,69,0,0,2527,518,1,0,0,0,2528,2529,5,86,0,0,2529,2530,5,65,0,
	0,2530,2531,5,76,0,0,2531,2532,5,85,0,0,2532,2533,5,69,0,0,2533,2534,5,
	83,0,0,2534,520,1,0,0,0,2535,2536,5,86,0,0,2536,2537,5,69,0,0,2537,2538,
	5,82,0,0,2538,2539,5,66,0,0,2539,2540,5,79,0,0,2540,2541,5,83,0,0,2541,
	2542,5,69,0,0,2542,522,1,0,0,0,2543,2544,5,86,0,0,2544,2545,5,69,0,0,2545,
	2546,5,82,0,0,2546,2547,5,83,0,0,2547,2548,5,73,0,0,2548,2549,5,79,0,0,
	2549,2550,5,78,0,0,2550,524,1,0,0,0,2551,2552,5,86,0,0,2552,2553,5,73,0,
	0,2553,2554,5,69,0,0,2554,2555,5,87,0,0,2555,526,1,0,0,0,2556,2557,5,87,
	0,0,2557,2558,5,72,0,0,2558,2559,5,69,0,0,2559,2560,5,78,0,0,2560,528,1,
	0,0,0,2561,2562,5,87,0,0,2562,2563,5,72,0,0,2563,2564,5,69,0,0,2564,2565,
	5,82,0,0,2565,2566,5,69,0,0,2566,530,1,0,0,0,2567,2568,5,87,0,0,2568,2569,
	5,73,0,0,2569,2570,5,78,0,0,2570,2571,5,68,0,0,2571,2572,5,79,0,0,2572,
	2573,5,87,0,0,2573,532,1,0,0,0,2574,2575,5,87,0,0,2575,2576,5,73,0,0,2576,
	2577,5,84,0,0,2577,2578,5,72,0,0,2578,534,1,0,0,0,2579,2580,5,87,0,0,2580,
	2581,5,73,0,0,2581,2582,5,84,0,0,2582,2583,5,72,0,0,2583,2584,5,73,0,0,
	2584,2585,5,78,0,0,2585,536,1,0,0,0,2586,2587,5,87,0,0,2587,2588,5,73,0,
	0,2588,2589,5,84,0,0,2589,2590,5,72,0,0,2590,2591,5,79,0,0,2591,2592,5,
	85,0,0,2592,2593,5,84,0,0,2593,538,1,0,0,0,2594,2595,5,87,0,0,2595,2596,
	5,79,0,0,2596,2597,5,82,0,0,2597,2598,5,75,0,0,2598,540,1,0,0,0,2599,2600,
	5,87,0,0,2600,2601,5,82,0,0,2601,2602,5,65,0,0,2602,2603,5,80,0,0,2603,
	2604,5,80,0,0,2604,2605,5,69,0,0,2605,2606,5,82,0,0,2606,542,1,0,0,0,2607,
	2608,5,87,0,0,2608,2609,5,82,0,0,2609,2610,5,73,0,0,2610,2611,5,84,0,0,
	2611,2612,5,69,0,0,2612,544,1,0,0,0,2613,2614,5,89,0,0,2614,2615,5,69,0,
	0,2615,2616,5,65,0,0,2616,2617,5,82,0,0,2617,546,1,0,0,0,2618,2619,5,90,
	0,0,2619,2620,5,79,0,0,2620,2621,5,78,0,0,2621,2622,5,69,0,0,2622,548,1,
	0,0,0,2623,2624,5,61,0,0,2624,550,1,0,0,0,2625,2626,5,60,0,0,2626,2630,
	5,62,0,0,2627,2628,5,33,0,0,2628,2630,5,61,0,0,2629,2625,1,0,0,0,2629,2627,
	1,0,0,0,2630,552,1,0,0,0,2631,2632,5,60,0,0,2632,554,1,0,0,0,2633,2634,
	5,60,0,0,2634,2635,5,61,0,0,2635,556,1,0,0,0,2636,2637,5,62,0,0,2637,558,
	1,0,0,0,2638,2639,5,62,0,0,2639,2640,5,61,0,0,2640,560,1,0,0,0,2641,2642,
	5,43,0,0,2642,562,1,0,0,0,2643,2644,5,45,0,0,2644,564,1,0,0,0,2645,2646,
	5,42,0,0,2646,566,1,0,0,0,2647,2648,5,47,0,0,2648,568,1,0,0,0,2649,2650,
	5,37,0,0,2650,570,1,0,0,0,2651,2652,5,124,0,0,2652,2653,5,124,0,0,2653,
	572,1,0,0,0,2654,2655,5,63,0,0,2655,574,1,0,0,0,2656,2657,5,46,0,0,2657,
	576,1,0,0,0,2658,2659,5,95,0,0,2659,2660,5,58,0,0,2660,578,1,0,0,0,2661,
	2662,5,44,0,0,2662,580,1,0,0,0,2663,2664,5,59,0,0,2664,582,1,0,0,0,2665,
	2666,5,40,0,0,2666,584,1,0,0,0,2667,2668,5,41,0,0,2668,586,1,0,0,0,2669,
	2670,5,91,0,0,2670,588,1,0,0,0,2671,2672,5,93,0,0,2672,590,1,0,0,0,2673,
	2674,5,123,0,0,2674,592,1,0,0,0,2675,2676,5,125,0,0,2676,594,1,0,0,0,2677,
	2678,5,123,0,0,2678,2679,5,45,0,0,2679,596,1,0,0,0,2680,2681,5,45,0,0,2681,
	2682,5,125,0,0,2682,598,1,0,0,0,2683,2684,5,60,0,0,2684,2685,5,45,0,0,2685,
	600,1,0,0,0,2686,2687,5,45,0,0,2687,2688,5,62,0,0,2688,602,1,0,0,0,2689,
	2690,5,61,0,0,2690,2691,5,62,0,0,2691,604,1,0,0,0,2692,2693,5,124,0,0,2693,
	606,1,0,0,0,2694,2695,5,36,0,0,2695,608,1,0,0,0,2696,2697,5,94,0,0,2697,
	610,1,0,0,0,2698,2704,5,39,0,0,2699,2703,8,0,0,0,2700,2701,5,39,0,0,2701,
	2703,5,39,0,0,2702,2699,1,0,0,0,2702,2700,1,0,0,0,2703,2706,1,0,0,0,2704,
	2702,1,0,0,0,2704,2705,1,0,0,0,2705,2707,1,0,0,0,2706,2704,1,0,0,0,2707,
	2708,5,39,0,0,2708,612,1,0,0,0,2709,2710,5,85,0,0,2710,2711,5,38,0,0,2711,
	2712,5,39,0,0,2712,2718,1,0,0,0,2713,2717,8,0,0,0,2714,2715,5,39,0,0,2715,
	2717,5,39,0,0,2716,2713,1,0,0,0,2716,2714,1,0,0,0,2717,2720,1,0,0,0,2718,
	2716,1,0,0,0,2718,2719,1,0,0,0,2719,2721,1,0,0,0,2720,2718,1,0,0,0,2721,
	2722,5,39,0,0,2722,614,1,0,0,0,2723,2724,5,88,0,0,2724,2725,5,39,0,0,2725,
	2729,1,0,0,0,2726,2728,8,0,0,0,2727,2726,1,0,0,0,2728,2731,1,0,0,0,2729,
	2727,1,0,0,0,2729,2730,1,0,0,0,2730,2732,1,0,0,0,2731,2729,1,0,0,0,2732,
	2733,5,39,0,0,2733,616,1,0,0,0,2734,2736,3,633,316,0,2735,2734,1,0,0,0,
	2736,2737,1,0,0,0,2737,2735,1,0,0,0,2737,2738,1,0,0,0,2738,618,1,0,0,0,
	2739,2741,3,633,316,0,2740,2739,1,0,0,0,2741,2742,1,0,0,0,2742,2740,1,0,
	0,0,2742,2743,1,0,0,0,2743,2744,1,0,0,0,2744,2748,5,46,0,0,2745,2747,3,
	633,316,0,2746,2745,1,0,0,0,2747,2750,1,0,0,0,2748,2746,1,0,0,0,2748,2749,
	1,0,0,0,2749,2758,1,0,0,0,2750,2748,1,0,0,0,2751,2753,5,46,0,0,2752,2754,
	3,633,316,0,2753,2752,1,0,0,0,2754,2755,1,0,0,0,2755,2753,1,0,0,0,2755,
	2756,1,0,0,0,2756,2758,1,0,0,0,2757,2740,1,0,0,0,2757,2751,1,0,0,0,2758,
	620,1,0,0,0,2759,2761,3,633,316,0,2760,2759,1,0,0,0,2761,2762,1,0,0,0,2762,
	2760,1,0,0,0,2762,2763,1,0,0,0,2763,2771,1,0,0,0,2764,2768,5,46,0,0,2765,
	2767,3,633,316,0,2766,2765,1,0,0,0,2767,2770,1,0,0,0,2768,2766,1,0,0,0,
	2768,2769,1,0,0,0,2769,2772,1,0,0,0,2770,2768,1,0,0,0,2771,2764,1,0,0,0,
	2771,2772,1,0,0,0,2772,2773,1,0,0,0,2773,2774,3,631,315,0,2774,2784,1,0,
	0,0,2775,2777,5,46,0,0,2776,2778,3,633,316,0,2777,2776,1,0,0,0,2778,2779,
	1,0,0,0,2779,2777,1,0,0,0,2779,2780,1,0,0,0,2780,2781,1,0,0,0,2781,2782,
	3,631,315,0,2782,2784,1,0,0,0,2783,2760,1,0,0,0,2783,2775,1,0,0,0,2784,
	622,1,0,0,0,2785,2788,3,635,317,0,2786,2788,5,95,0,0,2787,2785,1,0,0,0,
	2787,2786,1,0,0,0,2788,2794,1,0,0,0,2789,2793,3,635,317,0,2790,2793,3,633,
	316,0,2791,2793,5,95,0,0,2792,2789,1,0,0,0,2792,2790,1,0,0,0,2792,2791,
	1,0,0,0,2793,2796,1,0,0,0,2794,2792,1,0,0,0,2794,2795,1,0,0,0,2795,624,
	1,0,0,0,2796,2794,1,0,0,0,2797,2801,3,633,316,0,2798,2802,3,635,317,0,2799,
	2802,3,633,316,0,2800,2802,5,95,0,0,2801,2798,1,0,0,0,2801,2799,1,0,0,0,
	2801,2800,1,0,0,0,2802,2803,1,0,0,0,2803,2801,1,0,0,0,2803,2804,1,0,0,0,
	2804,626,1,0,0,0,2805,2811,5,34,0,0,2806,2810,8,1,0,0,2807,2808,5,34,0,
	0,2808,2810,5,34,0,0,2809,2806,1,0,0,0,2809,2807,1,0,0,0,2810,2813,1,0,
	0,0,2811,2809,1,0,0,0,2811,2812,1,0,0,0,2812,2814,1,0,0,0,2813,2811,1,0,
	0,0,2814,2815,5,34,0,0,2815,628,1,0,0,0,2816,2822,5,96,0,0,2817,2821,8,
	2,0,0,2818,2819,5,96,0,0,2819,2821,5,96,0,0,2820,2817,1,0,0,0,2820,2818,
	1,0,0,0,2821,2824,1,0,0,0,2822,2820,1,0,0,0,2822,2823,1,0,0,0,2823,2825,
	1,0,0,0,2824,2822,1,0,0,0,2825,2826,5,96,0,0,2826,630,1,0,0,0,2827,2829,
	5,69,0,0,2828,2830,7,3,0,0,2829,2828,1,0,0,0,2829,2830,1,0,0,0,2830,2832,
	1,0,0,0,2831,2833,3,633,316,0,2832,2831,1,0,0,0,2833,2834,1,0,0,0,2834,
	2832,1,0,0,0,2834,2835,1,0,0,0,2835,632,1,0,0,0,2836,2837,7,4,0,0,2837,
	634,1,0,0,0,2838,2839,7,5,0,0,2839,636,1,0,0,0,2840,2841,5,45,0,0,2841,
	2842,5,45,0,0,2842,2846,1,0,0,0,2843,2845,8,6,0,0,2844,2843,1,0,0,0,2845,
	2848,1,0,0,0,2846,2844,1,0,0,0,2846,2847,1,0,0,0,2847,2850,1,0,0,0,2848,
	2846,1,0,0,0,2849,2851,5,13,0,0,2850,2849,1,0,0,0,2850,2851,1,0,0,0,2851,
	2853,1,0,0,0,2852,2854,5,10,0,0,2853,2852,1,0,0,0,2853,2854,1,0,0,0,2854,
	2855,1,0,0,0,2855,2856,6,318,0,0,2856,638,1,0,0,0,2857,2858,5,47,0,0,2858,
	2859,5,42,0,0,2859,2863,1,0,0,0,2860,2862,9,0,0,0,2861,2860,1,0,0,0,2862,
	2865,1,0,0,0,2863,2864,1,0,0,0,2863,2861,1,0,0,0,2864,2866,1,0,0,0,2865,
	2863,1,0,0,0,2866,2867,5,42,0,0,2867,2868,5,47,0,0,2868,2869,1,0,0,0,2869,
	2870,6,319,0,0,2870,640,1,0,0,0,2871,2873,7,7,0,0,2872,2871,1,0,0,0,2873,
	2874,1,0,0,0,2874,2872,1,0,0,0,2874,2875,1,0,0,0,2875,2876,1,0,0,0,2876,
	2877,6,320,0,0,2877,642,1,0,0,0,2878,2879,9,0,0,0,2879,644,1,0,0,0,33,0,
	2629,2702,2704,2716,2718,2729,2737,2742,2748,2755,2757,2762,2768,2771,2779,
	2783,2787,2792,2794,2801,2803,2809,2811,2820,2822,2829,2834,2846,2850,2853,
	2863,2874,1,0,1,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!trinoSqlLexer.__ATN) {
			trinoSqlLexer.__ATN = new ATNDeserializer().deserialize(trinoSqlLexer._serializedATN);
		}

		return trinoSqlLexer.__ATN;
	}


	static DecisionsToDFA = trinoSqlLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}