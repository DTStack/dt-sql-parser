// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/hive/HiveSql.g4 by ANTLR 4.12.0
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
import HiveSqlListener from "./HiveSqlListener.js";
import HiveSqlVisitor from "./HiveSqlVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class HiveSql extends Parser {
	public static readonly T_ACTION = 1;
	public static readonly T_ADD2 = 2;
	public static readonly T_ALL = 3;
	public static readonly T_ALLOCATE = 4;
	public static readonly T_ALTER = 5;
	public static readonly T_AND = 6;
	public static readonly T_ANSI_NULLS = 7;
	public static readonly T_ANSI_PADDING = 8;
	public static readonly T_AS = 9;
	public static readonly T_ASC = 10;
	public static readonly T_ASSOCIATE = 11;
	public static readonly T_AT = 12;
	public static readonly T_AUTO_INCREMENT = 13;
	public static readonly T_AVG = 14;
	public static readonly T_BATCHSIZE = 15;
	public static readonly T_BEGIN = 16;
	public static readonly T_BETWEEN = 17;
	public static readonly T_BIGINT = 18;
	public static readonly T_BINARY_DOUBLE = 19;
	public static readonly T_BINARY_FLOAT = 20;
	public static readonly T_BINARY_INTEGER = 21;
	public static readonly T_BIT = 22;
	public static readonly T_BODY = 23;
	public static readonly T_BREAK = 24;
	public static readonly T_BY = 25;
	public static readonly T_BYTE = 26;
	public static readonly T_CALL = 27;
	public static readonly T_CALLER = 28;
	public static readonly T_CASCADE = 29;
	public static readonly T_CASE = 30;
	public static readonly T_CASESPECIFIC = 31;
	public static readonly T_CAST = 32;
	public static readonly T_CHAR = 33;
	public static readonly T_CHARACTER = 34;
	public static readonly T_CHARSET = 35;
	public static readonly T_CLIENT = 36;
	public static readonly T_CLOSE = 37;
	public static readonly T_CLUSTERED = 38;
	public static readonly T_CMP = 39;
	public static readonly T_COLLECT = 40;
	public static readonly T_COLLECTION = 41;
	public static readonly T_COLUMN = 42;
	public static readonly T_COMMENT = 43;
	public static readonly T_CONSTANT = 44;
	public static readonly T_COMMIT = 45;
	public static readonly T_COMPRESS = 46;
	public static readonly T_CONCAT = 47;
	public static readonly T_CONDITION = 48;
	public static readonly T_CONSTRAINT = 49;
	public static readonly T_CONTINUE = 50;
	public static readonly T_COPY = 51;
	public static readonly T_COUNT = 52;
	public static readonly T_COUNT_BIG = 53;
	public static readonly T_CREATE = 54;
	public static readonly T_CREATION = 55;
	public static readonly T_CREATOR = 56;
	public static readonly T_CS = 57;
	public static readonly T_CURRENT = 58;
	public static readonly T_CURRENT_SCHEMA = 59;
	public static readonly T_CURSOR = 60;
	public static readonly T_DATABASE = 61;
	public static readonly T_DATA = 62;
	public static readonly T_DATE = 63;
	public static readonly T_DATETIME = 64;
	public static readonly T_DAY = 65;
	public static readonly T_DAYS = 66;
	public static readonly T_DEC = 67;
	public static readonly T_DECIMAL = 68;
	public static readonly T_DECLARE = 69;
	public static readonly T_DEFAULT = 70;
	public static readonly T_DEFERRED = 71;
	public static readonly T_DEFINED = 72;
	public static readonly T_DEFINER = 73;
	public static readonly T_DEFINITION = 74;
	public static readonly T_DELETE = 75;
	public static readonly T_DELIMITED = 76;
	public static readonly T_DELIMITER = 77;
	public static readonly T_DESC = 78;
	public static readonly T_DESCRIBE = 79;
	public static readonly T_DIAGNOSTICS = 80;
	public static readonly T_DIR = 81;
	public static readonly T_DIRECTORY = 82;
	public static readonly T_DISTINCT = 83;
	public static readonly T_DISTRIBUTE = 84;
	public static readonly T_DO = 85;
	public static readonly T_DOUBLE = 86;
	public static readonly T_DROP = 87;
	public static readonly T_DYNAMIC = 88;
	public static readonly T_ELSE = 89;
	public static readonly T_ELSEIF = 90;
	public static readonly T_ELSIF = 91;
	public static readonly T_ENABLE = 92;
	public static readonly T_END = 93;
	public static readonly T_ENGINE = 94;
	public static readonly T_ESCAPED = 95;
	public static readonly T_EXCEPT = 96;
	public static readonly T_EXEC = 97;
	public static readonly T_EXECUTE = 98;
	public static readonly T_EXCEPTION = 99;
	public static readonly T_EXCLUSIVE = 100;
	public static readonly T_EXISTS = 101;
	public static readonly T_EXIT = 102;
	public static readonly T_FALLBACK = 103;
	public static readonly T_FALSE = 104;
	public static readonly T_FETCH = 105;
	public static readonly T_FIELDS = 106;
	public static readonly T_FILE = 107;
	public static readonly T_FILES = 108;
	public static readonly T_FLOAT = 109;
	public static readonly T_FOR = 110;
	public static readonly T_FOREIGN = 111;
	public static readonly T_FORMAT = 112;
	public static readonly T_FOUND = 113;
	public static readonly T_FROM = 114;
	public static readonly T_FULL = 115;
	public static readonly T_FUNCTION = 116;
	public static readonly T_GET = 117;
	public static readonly T_GLOBAL = 118;
	public static readonly T_GO = 119;
	public static readonly T_GRANT = 120;
	public static readonly T_GROUP = 121;
	public static readonly T_HANDLER = 122;
	public static readonly T_HASH = 123;
	public static readonly T_HAVING = 124;
	public static readonly T_HDFS = 125;
	public static readonly T_HIVE = 126;
	public static readonly T_HOST = 127;
	public static readonly T_IDENTITY = 128;
	public static readonly T_IF = 129;
	public static readonly T_IGNORE = 130;
	public static readonly T_IMMEDIATE = 131;
	public static readonly T_IN = 132;
	public static readonly T_INCLUDE = 133;
	public static readonly T_INDEX = 134;
	public static readonly T_INITRANS = 135;
	public static readonly T_INNER = 136;
	public static readonly T_INOUT = 137;
	public static readonly T_INSERT = 138;
	public static readonly T_INT = 139;
	public static readonly T_INT2 = 140;
	public static readonly T_INT4 = 141;
	public static readonly T_INT8 = 142;
	public static readonly T_INTEGER = 143;
	public static readonly T_INTERSECT = 144;
	public static readonly T_INTERVAL = 145;
	public static readonly T_INTO = 146;
	public static readonly T_INVOKER = 147;
	public static readonly T_IS = 148;
	public static readonly T_ISOPEN = 149;
	public static readonly T_ITEMS = 150;
	public static readonly T_JOIN = 151;
	public static readonly T_KEEP = 152;
	public static readonly T_KEY = 153;
	public static readonly T_KEYS = 154;
	public static readonly T_LANGUAGE = 155;
	public static readonly T_LEAVE = 156;
	public static readonly T_LEFT = 157;
	public static readonly T_LIKE = 158;
	public static readonly T_LIMIT = 159;
	public static readonly T_LINES = 160;
	public static readonly T_LOCAL = 161;
	public static readonly T_LOCATION = 162;
	public static readonly T_LOCATOR = 163;
	public static readonly T_LOCATORS = 164;
	public static readonly T_LOCKS = 165;
	public static readonly T_LOG = 166;
	public static readonly T_LOGGED = 167;
	public static readonly T_LOGGING = 168;
	public static readonly T_LOOP = 169;
	public static readonly T_MAP = 170;
	public static readonly T_MATCHED = 171;
	public static readonly T_MAX = 172;
	public static readonly T_MAXTRANS = 173;
	public static readonly T_MERGE = 174;
	public static readonly T_MESSAGE_TEXT = 175;
	public static readonly T_MICROSECOND = 176;
	public static readonly T_MICROSECONDS = 177;
	public static readonly T_MIN = 178;
	public static readonly T_MULTISET = 179;
	public static readonly T_NCHAR = 180;
	public static readonly T_NEW = 181;
	public static readonly T_NVARCHAR = 182;
	public static readonly T_NO = 183;
	public static readonly T_NOCOUNT = 184;
	public static readonly T_NOCOMPRESS = 185;
	public static readonly T_NOLOGGING = 186;
	public static readonly T_NONE = 187;
	public static readonly T_NOT = 188;
	public static readonly T_NOTFOUND = 189;
	public static readonly T_NULL = 190;
	public static readonly T_NUMERIC = 191;
	public static readonly T_NUMBER = 192;
	public static readonly T_OBJECT = 193;
	public static readonly T_OFF = 194;
	public static readonly T_ON = 195;
	public static readonly T_ONLY = 196;
	public static readonly T_OPEN = 197;
	public static readonly T_OR = 198;
	public static readonly T_ORDER = 199;
	public static readonly T_OUT = 200;
	public static readonly T_OUTER = 201;
	public static readonly T_OVER = 202;
	public static readonly T_OVERWRITE = 203;
	public static readonly T_OWNER = 204;
	public static readonly T_PACKAGE = 205;
	public static readonly T_PARTITION = 206;
	public static readonly T_PCTFREE = 207;
	public static readonly T_PCTUSED = 208;
	public static readonly T_PLS_INTEGER = 209;
	public static readonly T_PRECISION = 210;
	public static readonly T_PRESERVE = 211;
	public static readonly T_PRIMARY = 212;
	public static readonly T_PRINT = 213;
	public static readonly T_PROC = 214;
	public static readonly T_PROCEDURE = 215;
	public static readonly T_QUALIFY = 216;
	public static readonly T_QUERY_BAND = 217;
	public static readonly T_QUIT = 218;
	public static readonly T_QUOTED_IDENTIFIER = 219;
	public static readonly T_RAISE = 220;
	public static readonly T_REAL = 221;
	public static readonly T_REFERENCES = 222;
	public static readonly T_REGEXP = 223;
	public static readonly T_REPLACE = 224;
	public static readonly T_RESIGNAL = 225;
	public static readonly T_RESTRICT = 226;
	public static readonly T_RESULT = 227;
	public static readonly T_RESULT_SET_LOCATOR = 228;
	public static readonly T_RETURN = 229;
	public static readonly T_RETURNS = 230;
	public static readonly T_REVERSE = 231;
	public static readonly T_RIGHT = 232;
	public static readonly T_RLIKE = 233;
	public static readonly T_ROLE = 234;
	public static readonly T_ROLLBACK = 235;
	public static readonly T_ROW = 236;
	public static readonly T_ROWS = 237;
	public static readonly T_ROWTYPE = 238;
	public static readonly T_ROW_COUNT = 239;
	public static readonly T_RR = 240;
	public static readonly T_RS = 241;
	public static readonly T_PWD = 242;
	public static readonly T_TRIM = 243;
	public static readonly T_SCHEMA = 244;
	public static readonly T_SECOND = 245;
	public static readonly T_SECONDS = 246;
	public static readonly T_SECURITY = 247;
	public static readonly T_SEGMENT = 248;
	public static readonly T_SEL = 249;
	public static readonly T_SELECT = 250;
	public static readonly T_SET = 251;
	public static readonly T_SESSION = 252;
	public static readonly T_SESSIONS = 253;
	public static readonly T_SETS = 254;
	public static readonly T_SHARE = 255;
	public static readonly T_SIGNAL = 256;
	public static readonly T_SIMPLE_DOUBLE = 257;
	public static readonly T_SIMPLE_FLOAT = 258;
	public static readonly T_SIMPLE_INTEGER = 259;
	public static readonly T_SMALLDATETIME = 260;
	public static readonly T_SMALLINT = 261;
	public static readonly T_SQL = 262;
	public static readonly T_SQLEXCEPTION = 263;
	public static readonly T_SQLINSERT = 264;
	public static readonly T_SQLSTATE = 265;
	public static readonly T_SQLWARNING = 266;
	public static readonly T_STATS = 267;
	public static readonly T_STATISTICS = 268;
	public static readonly T_STEP = 269;
	public static readonly T_STORAGE = 270;
	public static readonly T_STORED = 271;
	public static readonly T_STRING = 272;
	public static readonly T_SUBDIR = 273;
	public static readonly T_SUBSTRING = 274;
	public static readonly T_SUM = 275;
	public static readonly T_SUMMARY = 276;
	public static readonly T_SYS_REFCURSOR = 277;
	public static readonly T_TABLE = 278;
	public static readonly T_TABLESPACE = 279;
	public static readonly T_TEMPORARY = 280;
	public static readonly T_TERMINATED = 281;
	public static readonly T_TEXTIMAGE_ON = 282;
	public static readonly T_THEN = 283;
	public static readonly T_TIMESTAMP = 284;
	public static readonly T_TINYINT = 285;
	public static readonly T_TITLE = 286;
	public static readonly T_TO = 287;
	public static readonly T_TOP = 288;
	public static readonly T_TRANSACTION = 289;
	public static readonly T_TRUE = 290;
	public static readonly T_TRUNCATE = 291;
	public static readonly T_TYPE = 292;
	public static readonly T_UNION = 293;
	public static readonly T_UNIQUE = 294;
	public static readonly T_UPDATE = 295;
	public static readonly T_UR = 296;
	public static readonly T_USE = 297;
	public static readonly T_USING = 298;
	public static readonly T_VALUE = 299;
	public static readonly T_VALUES = 300;
	public static readonly T_VAR = 301;
	public static readonly T_VARCHAR = 302;
	public static readonly T_VARCHAR2 = 303;
	public static readonly T_VARYING = 304;
	public static readonly T_VOLATILE = 305;
	public static readonly T_WHEN = 306;
	public static readonly T_WHERE = 307;
	public static readonly T_WHILE = 308;
	public static readonly T_WITH = 309;
	public static readonly T_WITHOUT = 310;
	public static readonly T_WORK = 311;
	public static readonly T_XACT_ABORT = 312;
	public static readonly T_XML = 313;
	public static readonly T_YES = 314;
	public static readonly T_ACTIVITY_COUNT = 315;
	public static readonly T_CUME_DIST = 316;
	public static readonly T_CURRENT_DATE = 317;
	public static readonly T_CURRENT_TIMESTAMP = 318;
	public static readonly T_CURRENT_USER = 319;
	public static readonly T_DENSE_RANK = 320;
	public static readonly T_FIRST_VALUE = 321;
	public static readonly T_LAG = 322;
	public static readonly T_LAST_VALUE = 323;
	public static readonly T_LEAD = 324;
	public static readonly T_MAX_PART_STRING = 325;
	public static readonly T_MIN_PART_STRING = 326;
	public static readonly T_MAX_PART_INT = 327;
	public static readonly T_MIN_PART_INT = 328;
	public static readonly T_MAX_PART_DATE = 329;
	public static readonly T_MIN_PART_DATE = 330;
	public static readonly T_PART_COUNT = 331;
	public static readonly T_PART_LOC = 332;
	public static readonly T_RANK = 333;
	public static readonly T_ROW_NUMBER = 334;
	public static readonly T_STDEV = 335;
	public static readonly T_SYSDATE = 336;
	public static readonly T_VARIANCE = 337;
	public static readonly T_USER = 338;
	public static readonly T_ADD = 339;
	public static readonly T_COLON = 340;
	public static readonly T_COMMA = 341;
	public static readonly T_PIPE = 342;
	public static readonly T_DIV = 343;
	public static readonly T_DOT = 344;
	public static readonly T_DOT2 = 345;
	public static readonly T_EQUAL = 346;
	public static readonly T_EQUAL2 = 347;
	public static readonly T_SHARP = 348;
	public static readonly T_NOTE = 349;
	public static readonly T_NOTEQUAL = 350;
	public static readonly T_NOTEQUAL2 = 351;
	public static readonly T_GREATER = 352;
	public static readonly T_GREATEREQUAL = 353;
	public static readonly T_LESS = 354;
	public static readonly T_LESSEQUAL = 355;
	public static readonly T_MUL = 356;
	public static readonly T_PRECENT = 357;
	public static readonly T_CALLS = 358;
	public static readonly T_OPEN_B = 359;
	public static readonly T_OPEN_P = 360;
	public static readonly T_OPEN_SB = 361;
	public static readonly T_CLOSE_B = 362;
	public static readonly T_CLOSE_P = 363;
	public static readonly T_CLOSE_SB = 364;
	public static readonly T_SEMICOLON = 365;
	public static readonly T_SUB = 366;
	public static readonly L_ID = 367;
	public static readonly L_S_STRING = 368;
	public static readonly L_D_STRING = 369;
	public static readonly L_INT = 370;
	public static readonly L_DEC = 371;
	public static readonly L_WS = 372;
	public static readonly L_M_COMMENT = 373;
	public static readonly L_S_COMMENT = 374;
	public static readonly L_FILE = 375;
	public static readonly L_LABEL = 376;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_begin_end_block = 2;
	public static readonly RULE_single_block_stmt = 3;
	public static readonly RULE_block_end = 4;
	public static readonly RULE_proc_block = 5;
	public static readonly RULE_stmt = 6;
	public static readonly RULE_semicolon_stmt = 7;
	public static readonly RULE_exception_block = 8;
	public static readonly RULE_exception_block_item = 9;
	public static readonly RULE_null_stmt = 10;
	public static readonly RULE_expr_stmt = 11;
	public static readonly RULE_assignment_stmt = 12;
	public static readonly RULE_assignment_stmt_item = 13;
	public static readonly RULE_assignment_stmt_single_item = 14;
	public static readonly RULE_assignment_stmt_multiple_item = 15;
	public static readonly RULE_assignment_stmt_select_item = 16;
	public static readonly RULE_allocate_cursor_stmt = 17;
	public static readonly RULE_associate_locator_stmt = 18;
	public static readonly RULE_begin_transaction_stmt = 19;
	public static readonly RULE_break_stmt = 20;
	public static readonly RULE_call_stmt = 21;
	public static readonly RULE_declare_stmt = 22;
	public static readonly RULE_declare_block = 23;
	public static readonly RULE_declare_block_inplace = 24;
	public static readonly RULE_declare_stmt_item = 25;
	public static readonly RULE_declare_var_item = 26;
	public static readonly RULE_declare_condition_item = 27;
	public static readonly RULE_declare_cursor_item = 28;
	public static readonly RULE_cursor_with_return = 29;
	public static readonly RULE_cursor_without_return = 30;
	public static readonly RULE_declare_handler_item = 31;
	public static readonly RULE_declare_temporary_table_item = 32;
	public static readonly RULE_create_table_stmt = 33;
	public static readonly RULE_create_local_temp_table_stmt = 34;
	public static readonly RULE_create_table_definition = 35;
	public static readonly RULE_create_table_columns = 36;
	public static readonly RULE_create_table_columns_item = 37;
	public static readonly RULE_column_name = 38;
	public static readonly RULE_create_table_column_inline_cons = 39;
	public static readonly RULE_create_table_column_cons = 40;
	public static readonly RULE_create_table_fk_action = 41;
	public static readonly RULE_create_table_preoptions = 42;
	public static readonly RULE_create_table_preoptions_item = 43;
	public static readonly RULE_create_table_preoptions_td_item = 44;
	public static readonly RULE_create_table_options = 45;
	public static readonly RULE_create_table_options_item = 46;
	public static readonly RULE_create_table_options_ora_item = 47;
	public static readonly RULE_create_table_options_db2_item = 48;
	public static readonly RULE_create_table_options_td_item = 49;
	public static readonly RULE_create_table_options_hive_item = 50;
	public static readonly RULE_create_table_hive_row_format = 51;
	public static readonly RULE_create_table_hive_row_format_fields = 52;
	public static readonly RULE_create_table_options_mssql_item = 53;
	public static readonly RULE_create_table_options_mysql_item = 54;
	public static readonly RULE_alter_table_stmt = 55;
	public static readonly RULE_alter_table_item = 56;
	public static readonly RULE_alter_table_add_constraint = 57;
	public static readonly RULE_alter_table_add_constraint_item = 58;
	public static readonly RULE_dtype = 59;
	public static readonly RULE_dtype_len = 60;
	public static readonly RULE_dtype_attr = 61;
	public static readonly RULE_dtype_default = 62;
	public static readonly RULE_create_database_stmt = 63;
	public static readonly RULE_create_database_option = 64;
	public static readonly RULE_create_function_stmt = 65;
	public static readonly RULE_create_function_return = 66;
	public static readonly RULE_create_package_stmt = 67;
	public static readonly RULE_package_spec = 68;
	public static readonly RULE_package_spec_item = 69;
	public static readonly RULE_create_package_body_stmt = 70;
	public static readonly RULE_package_body = 71;
	public static readonly RULE_package_body_item = 72;
	public static readonly RULE_create_procedure_stmt = 73;
	public static readonly RULE_create_routine_params = 74;
	public static readonly RULE_create_routine_param_item = 75;
	public static readonly RULE_create_routine_options = 76;
	public static readonly RULE_create_routine_option = 77;
	public static readonly RULE_drop_stmt = 78;
	public static readonly RULE_end_transaction_stmt = 79;
	public static readonly RULE_exec_stmt = 80;
	public static readonly RULE_if_stmt = 81;
	public static readonly RULE_if_plsql_stmt = 82;
	public static readonly RULE_if_tsql_stmt = 83;
	public static readonly RULE_if_bteq_stmt = 84;
	public static readonly RULE_elseif_block = 85;
	public static readonly RULE_else_block = 86;
	public static readonly RULE_include_stmt = 87;
	public static readonly RULE_insert_stmt = 88;
	public static readonly RULE_insert_stmt_cols = 89;
	public static readonly RULE_insert_stmt_rows = 90;
	public static readonly RULE_insert_stmt_row = 91;
	public static readonly RULE_insert_directory_stmt = 92;
	public static readonly RULE_exit_stmt = 93;
	public static readonly RULE_get_diag_stmt = 94;
	public static readonly RULE_get_diag_stmt_item = 95;
	public static readonly RULE_get_diag_stmt_exception_item = 96;
	public static readonly RULE_get_diag_stmt_rowcount_item = 97;
	public static readonly RULE_grant_stmt = 98;
	public static readonly RULE_grant_stmt_item = 99;
	public static readonly RULE_leave_stmt = 100;
	public static readonly RULE_map_object_stmt = 101;
	public static readonly RULE_open_stmt = 102;
	public static readonly RULE_fetch_stmt = 103;
	public static readonly RULE_collect_stats_stmt = 104;
	public static readonly RULE_collect_stats_clause = 105;
	public static readonly RULE_close_stmt = 106;
	public static readonly RULE_cmp_stmt = 107;
	public static readonly RULE_cmp_source = 108;
	public static readonly RULE_copy_from_local_stmt = 109;
	public static readonly RULE_copy_stmt = 110;
	public static readonly RULE_copy_source = 111;
	public static readonly RULE_copy_target = 112;
	public static readonly RULE_copy_option = 113;
	public static readonly RULE_copy_file_option = 114;
	public static readonly RULE_commit_stmt = 115;
	public static readonly RULE_create_index_stmt = 116;
	public static readonly RULE_create_index_col = 117;
	public static readonly RULE_index_storage_clause = 118;
	public static readonly RULE_index_mssql_storage_clause = 119;
	public static readonly RULE_print_stmt = 120;
	public static readonly RULE_quit_stmt = 121;
	public static readonly RULE_raise_stmt = 122;
	public static readonly RULE_resignal_stmt = 123;
	public static readonly RULE_return_stmt = 124;
	public static readonly RULE_rollback_stmt = 125;
	public static readonly RULE_set_session_option = 126;
	public static readonly RULE_set_current_schema_option = 127;
	public static readonly RULE_set_mssql_session_option = 128;
	public static readonly RULE_set_teradata_session_option = 129;
	public static readonly RULE_signal_stmt = 130;
	public static readonly RULE_summary_stmt = 131;
	public static readonly RULE_truncate_stmt = 132;
	public static readonly RULE_use_stmt = 133;
	public static readonly RULE_values_into_stmt = 134;
	public static readonly RULE_while_stmt = 135;
	public static readonly RULE_for_cursor_stmt = 136;
	public static readonly RULE_for_range_stmt = 137;
	public static readonly RULE_label = 138;
	public static readonly RULE_using_clause = 139;
	public static readonly RULE_select_stmt = 140;
	public static readonly RULE_cte_select_stmt = 141;
	public static readonly RULE_cte_select_stmt_item = 142;
	public static readonly RULE_cte_select_cols = 143;
	public static readonly RULE_fullselect_stmt = 144;
	public static readonly RULE_fullselect_stmt_item = 145;
	public static readonly RULE_fullselect_set_clause = 146;
	public static readonly RULE_subselect_stmt = 147;
	public static readonly RULE_select_list = 148;
	public static readonly RULE_select_list_set = 149;
	public static readonly RULE_select_list_limit = 150;
	public static readonly RULE_select_list_item = 151;
	public static readonly RULE_select_list_alias = 152;
	public static readonly RULE_select_list_asterisk = 153;
	public static readonly RULE_into_clause = 154;
	public static readonly RULE_from_clause = 155;
	public static readonly RULE_from_table_clause = 156;
	public static readonly RULE_from_table_name_clause = 157;
	public static readonly RULE_from_subselect_clause = 158;
	public static readonly RULE_from_join_clause = 159;
	public static readonly RULE_from_join_type_clause = 160;
	public static readonly RULE_from_table_values_clause = 161;
	public static readonly RULE_from_table_values_row = 162;
	public static readonly RULE_from_alias_clause = 163;
	public static readonly RULE_table_name = 164;
	public static readonly RULE_where_clause = 165;
	public static readonly RULE_group_by_clause = 166;
	public static readonly RULE_having_clause = 167;
	public static readonly RULE_qualify_clause = 168;
	public static readonly RULE_order_by_clause = 169;
	public static readonly RULE_select_options = 170;
	public static readonly RULE_select_options_item = 171;
	public static readonly RULE_update_stmt = 172;
	public static readonly RULE_update_assignment = 173;
	public static readonly RULE_update_table = 174;
	public static readonly RULE_update_upsert = 175;
	public static readonly RULE_merge_stmt = 176;
	public static readonly RULE_merge_table = 177;
	public static readonly RULE_merge_condition = 178;
	public static readonly RULE_merge_action = 179;
	public static readonly RULE_delete_stmt = 180;
	public static readonly RULE_delete_alias = 181;
	public static readonly RULE_describe_stmt = 182;
	public static readonly RULE_bool_expr = 183;
	public static readonly RULE_bool_expr_atom = 184;
	public static readonly RULE_bool_expr_unary = 185;
	public static readonly RULE_bool_expr_single_in = 186;
	public static readonly RULE_bool_expr_multi_in = 187;
	public static readonly RULE_bool_expr_binary = 188;
	public static readonly RULE_bool_expr_logical_operator = 189;
	public static readonly RULE_bool_expr_binary_operator = 190;
	public static readonly RULE_expr = 191;
	public static readonly RULE_expr_atom = 192;
	public static readonly RULE_expr_interval = 193;
	public static readonly RULE_interval_item = 194;
	public static readonly RULE_expr_concat = 195;
	public static readonly RULE_expr_concat_item = 196;
	public static readonly RULE_expr_case = 197;
	public static readonly RULE_expr_case_simple = 198;
	public static readonly RULE_expr_case_searched = 199;
	public static readonly RULE_expr_cursor_attribute = 200;
	public static readonly RULE_expr_agg_window_func = 201;
	public static readonly RULE_expr_func_all_distinct = 202;
	public static readonly RULE_expr_func_over_clause = 203;
	public static readonly RULE_expr_func_partition_by_clause = 204;
	public static readonly RULE_expr_spec_func = 205;
	public static readonly RULE_expr_func = 206;
	public static readonly RULE_expr_func_params = 207;
	public static readonly RULE_func_param = 208;
	public static readonly RULE_expr_select = 209;
	public static readonly RULE_expr_file = 210;
	public static readonly RULE_hive = 211;
	public static readonly RULE_hive_item = 212;
	public static readonly RULE_host = 213;
	public static readonly RULE_host_cmd = 214;
	public static readonly RULE_host_stmt = 215;
	public static readonly RULE_file_name = 216;
	public static readonly RULE_date_literal = 217;
	public static readonly RULE_timestamp_literal = 218;
	public static readonly RULE_ident = 219;
	public static readonly RULE_string = 220;
	public static readonly RULE_int_number = 221;
	public static readonly RULE_dec_number = 222;
	public static readonly RULE_bool_literal = 223;
	public static readonly RULE_null_const = 224;
	public static readonly RULE_non_reserved_words = 225;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'+'", 
                                                            "':'", "','", 
                                                            "'||'", "'/'", 
                                                            "'.'", "'..'", 
                                                            "'='", "'=='", 
                                                            "'#'", "'!'", 
                                                            "'<>'", "'!='", 
                                                            "'>'", "'>='", 
                                                            "'<'", "'<='", 
                                                            "'*'", "'%'", 
                                                            "'@'", "'{'", 
                                                            "'('", "'['", 
                                                            "'}'", "')'", 
                                                            "']'", "';'", 
                                                            "'-'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "T_ACTION", 
                                                             "T_ADD2", "T_ALL", 
                                                             "T_ALLOCATE", 
                                                             "T_ALTER", 
                                                             "T_AND", "T_ANSI_NULLS", 
                                                             "T_ANSI_PADDING", 
                                                             "T_AS", "T_ASC", 
                                                             "T_ASSOCIATE", 
                                                             "T_AT", "T_AUTO_INCREMENT", 
                                                             "T_AVG", "T_BATCHSIZE", 
                                                             "T_BEGIN", 
                                                             "T_BETWEEN", 
                                                             "T_BIGINT", 
                                                             "T_BINARY_DOUBLE", 
                                                             "T_BINARY_FLOAT", 
                                                             "T_BINARY_INTEGER", 
                                                             "T_BIT", "T_BODY", 
                                                             "T_BREAK", 
                                                             "T_BY", "T_BYTE", 
                                                             "T_CALL", "T_CALLER", 
                                                             "T_CASCADE", 
                                                             "T_CASE", "T_CASESPECIFIC", 
                                                             "T_CAST", "T_CHAR", 
                                                             "T_CHARACTER", 
                                                             "T_CHARSET", 
                                                             "T_CLIENT", 
                                                             "T_CLOSE", 
                                                             "T_CLUSTERED", 
                                                             "T_CMP", "T_COLLECT", 
                                                             "T_COLLECTION", 
                                                             "T_COLUMN", 
                                                             "T_COMMENT", 
                                                             "T_CONSTANT", 
                                                             "T_COMMIT", 
                                                             "T_COMPRESS", 
                                                             "T_CONCAT", 
                                                             "T_CONDITION", 
                                                             "T_CONSTRAINT", 
                                                             "T_CONTINUE", 
                                                             "T_COPY", "T_COUNT", 
                                                             "T_COUNT_BIG", 
                                                             "T_CREATE", 
                                                             "T_CREATION", 
                                                             "T_CREATOR", 
                                                             "T_CS", "T_CURRENT", 
                                                             "T_CURRENT_SCHEMA", 
                                                             "T_CURSOR", 
                                                             "T_DATABASE", 
                                                             "T_DATA", "T_DATE", 
                                                             "T_DATETIME", 
                                                             "T_DAY", "T_DAYS", 
                                                             "T_DEC", "T_DECIMAL", 
                                                             "T_DECLARE", 
                                                             "T_DEFAULT", 
                                                             "T_DEFERRED", 
                                                             "T_DEFINED", 
                                                             "T_DEFINER", 
                                                             "T_DEFINITION", 
                                                             "T_DELETE", 
                                                             "T_DELIMITED", 
                                                             "T_DELIMITER", 
                                                             "T_DESC", "T_DESCRIBE", 
                                                             "T_DIAGNOSTICS", 
                                                             "T_DIR", "T_DIRECTORY", 
                                                             "T_DISTINCT", 
                                                             "T_DISTRIBUTE", 
                                                             "T_DO", "T_DOUBLE", 
                                                             "T_DROP", "T_DYNAMIC", 
                                                             "T_ELSE", "T_ELSEIF", 
                                                             "T_ELSIF", 
                                                             "T_ENABLE", 
                                                             "T_END", "T_ENGINE", 
                                                             "T_ESCAPED", 
                                                             "T_EXCEPT", 
                                                             "T_EXEC", "T_EXECUTE", 
                                                             "T_EXCEPTION", 
                                                             "T_EXCLUSIVE", 
                                                             "T_EXISTS", 
                                                             "T_EXIT", "T_FALLBACK", 
                                                             "T_FALSE", 
                                                             "T_FETCH", 
                                                             "T_FIELDS", 
                                                             "T_FILE", "T_FILES", 
                                                             "T_FLOAT", 
                                                             "T_FOR", "T_FOREIGN", 
                                                             "T_FORMAT", 
                                                             "T_FOUND", 
                                                             "T_FROM", "T_FULL", 
                                                             "T_FUNCTION", 
                                                             "T_GET", "T_GLOBAL", 
                                                             "T_GO", "T_GRANT", 
                                                             "T_GROUP", 
                                                             "T_HANDLER", 
                                                             "T_HASH", "T_HAVING", 
                                                             "T_HDFS", "T_HIVE", 
                                                             "T_HOST", "T_IDENTITY", 
                                                             "T_IF", "T_IGNORE", 
                                                             "T_IMMEDIATE", 
                                                             "T_IN", "T_INCLUDE", 
                                                             "T_INDEX", 
                                                             "T_INITRANS", 
                                                             "T_INNER", 
                                                             "T_INOUT", 
                                                             "T_INSERT", 
                                                             "T_INT", "T_INT2", 
                                                             "T_INT4", "T_INT8", 
                                                             "T_INTEGER", 
                                                             "T_INTERSECT", 
                                                             "T_INTERVAL", 
                                                             "T_INTO", "T_INVOKER", 
                                                             "T_IS", "T_ISOPEN", 
                                                             "T_ITEMS", 
                                                             "T_JOIN", "T_KEEP", 
                                                             "T_KEY", "T_KEYS", 
                                                             "T_LANGUAGE", 
                                                             "T_LEAVE", 
                                                             "T_LEFT", "T_LIKE", 
                                                             "T_LIMIT", 
                                                             "T_LINES", 
                                                             "T_LOCAL", 
                                                             "T_LOCATION", 
                                                             "T_LOCATOR", 
                                                             "T_LOCATORS", 
                                                             "T_LOCKS", 
                                                             "T_LOG", "T_LOGGED", 
                                                             "T_LOGGING", 
                                                             "T_LOOP", "T_MAP", 
                                                             "T_MATCHED", 
                                                             "T_MAX", "T_MAXTRANS", 
                                                             "T_MERGE", 
                                                             "T_MESSAGE_TEXT", 
                                                             "T_MICROSECOND", 
                                                             "T_MICROSECONDS", 
                                                             "T_MIN", "T_MULTISET", 
                                                             "T_NCHAR", 
                                                             "T_NEW", "T_NVARCHAR", 
                                                             "T_NO", "T_NOCOUNT", 
                                                             "T_NOCOMPRESS", 
                                                             "T_NOLOGGING", 
                                                             "T_NONE", "T_NOT", 
                                                             "T_NOTFOUND", 
                                                             "T_NULL", "T_NUMERIC", 
                                                             "T_NUMBER", 
                                                             "T_OBJECT", 
                                                             "T_OFF", "T_ON", 
                                                             "T_ONLY", "T_OPEN", 
                                                             "T_OR", "T_ORDER", 
                                                             "T_OUT", "T_OUTER", 
                                                             "T_OVER", "T_OVERWRITE", 
                                                             "T_OWNER", 
                                                             "T_PACKAGE", 
                                                             "T_PARTITION", 
                                                             "T_PCTFREE", 
                                                             "T_PCTUSED", 
                                                             "T_PLS_INTEGER", 
                                                             "T_PRECISION", 
                                                             "T_PRESERVE", 
                                                             "T_PRIMARY", 
                                                             "T_PRINT", 
                                                             "T_PROC", "T_PROCEDURE", 
                                                             "T_QUALIFY", 
                                                             "T_QUERY_BAND", 
                                                             "T_QUIT", "T_QUOTED_IDENTIFIER", 
                                                             "T_RAISE", 
                                                             "T_REAL", "T_REFERENCES", 
                                                             "T_REGEXP", 
                                                             "T_REPLACE", 
                                                             "T_RESIGNAL", 
                                                             "T_RESTRICT", 
                                                             "T_RESULT", 
                                                             "T_RESULT_SET_LOCATOR", 
                                                             "T_RETURN", 
                                                             "T_RETURNS", 
                                                             "T_REVERSE", 
                                                             "T_RIGHT", 
                                                             "T_RLIKE", 
                                                             "T_ROLE", "T_ROLLBACK", 
                                                             "T_ROW", "T_ROWS", 
                                                             "T_ROWTYPE", 
                                                             "T_ROW_COUNT", 
                                                             "T_RR", "T_RS", 
                                                             "T_PWD", "T_TRIM", 
                                                             "T_SCHEMA", 
                                                             "T_SECOND", 
                                                             "T_SECONDS", 
                                                             "T_SECURITY", 
                                                             "T_SEGMENT", 
                                                             "T_SEL", "T_SELECT", 
                                                             "T_SET", "T_SESSION", 
                                                             "T_SESSIONS", 
                                                             "T_SETS", "T_SHARE", 
                                                             "T_SIGNAL", 
                                                             "T_SIMPLE_DOUBLE", 
                                                             "T_SIMPLE_FLOAT", 
                                                             "T_SIMPLE_INTEGER", 
                                                             "T_SMALLDATETIME", 
                                                             "T_SMALLINT", 
                                                             "T_SQL", "T_SQLEXCEPTION", 
                                                             "T_SQLINSERT", 
                                                             "T_SQLSTATE", 
                                                             "T_SQLWARNING", 
                                                             "T_STATS", 
                                                             "T_STATISTICS", 
                                                             "T_STEP", "T_STORAGE", 
                                                             "T_STORED", 
                                                             "T_STRING", 
                                                             "T_SUBDIR", 
                                                             "T_SUBSTRING", 
                                                             "T_SUM", "T_SUMMARY", 
                                                             "T_SYS_REFCURSOR", 
                                                             "T_TABLE", 
                                                             "T_TABLESPACE", 
                                                             "T_TEMPORARY", 
                                                             "T_TERMINATED", 
                                                             "T_TEXTIMAGE_ON", 
                                                             "T_THEN", "T_TIMESTAMP", 
                                                             "T_TINYINT", 
                                                             "T_TITLE", 
                                                             "T_TO", "T_TOP", 
                                                             "T_TRANSACTION", 
                                                             "T_TRUE", "T_TRUNCATE", 
                                                             "T_TYPE", "T_UNION", 
                                                             "T_UNIQUE", 
                                                             "T_UPDATE", 
                                                             "T_UR", "T_USE", 
                                                             "T_USING", 
                                                             "T_VALUE", 
                                                             "T_VALUES", 
                                                             "T_VAR", "T_VARCHAR", 
                                                             "T_VARCHAR2", 
                                                             "T_VARYING", 
                                                             "T_VOLATILE", 
                                                             "T_WHEN", "T_WHERE", 
                                                             "T_WHILE", 
                                                             "T_WITH", "T_WITHOUT", 
                                                             "T_WORK", "T_XACT_ABORT", 
                                                             "T_XML", "T_YES", 
                                                             "T_ACTIVITY_COUNT", 
                                                             "T_CUME_DIST", 
                                                             "T_CURRENT_DATE", 
                                                             "T_CURRENT_TIMESTAMP", 
                                                             "T_CURRENT_USER", 
                                                             "T_DENSE_RANK", 
                                                             "T_FIRST_VALUE", 
                                                             "T_LAG", "T_LAST_VALUE", 
                                                             "T_LEAD", "T_MAX_PART_STRING", 
                                                             "T_MIN_PART_STRING", 
                                                             "T_MAX_PART_INT", 
                                                             "T_MIN_PART_INT", 
                                                             "T_MAX_PART_DATE", 
                                                             "T_MIN_PART_DATE", 
                                                             "T_PART_COUNT", 
                                                             "T_PART_LOC", 
                                                             "T_RANK", "T_ROW_NUMBER", 
                                                             "T_STDEV", 
                                                             "T_SYSDATE", 
                                                             "T_VARIANCE", 
                                                             "T_USER", "T_ADD", 
                                                             "T_COLON", 
                                                             "T_COMMA", 
                                                             "T_PIPE", "T_DIV", 
                                                             "T_DOT", "T_DOT2", 
                                                             "T_EQUAL", 
                                                             "T_EQUAL2", 
                                                             "T_SHARP", 
                                                             "T_NOTE", "T_NOTEQUAL", 
                                                             "T_NOTEQUAL2", 
                                                             "T_GREATER", 
                                                             "T_GREATEREQUAL", 
                                                             "T_LESS", "T_LESSEQUAL", 
                                                             "T_MUL", "T_PRECENT", 
                                                             "T_CALLS", 
                                                             "T_OPEN_B", 
                                                             "T_OPEN_P", 
                                                             "T_OPEN_SB", 
                                                             "T_CLOSE_B", 
                                                             "T_CLOSE_P", 
                                                             "T_CLOSE_SB", 
                                                             "T_SEMICOLON", 
                                                             "T_SUB", "L_ID", 
                                                             "L_S_STRING", 
                                                             "L_D_STRING", 
                                                             "L_INT", "L_DEC", 
                                                             "L_WS", "L_M_COMMENT", 
                                                             "L_S_COMMENT", 
                                                             "L_FILE", "L_LABEL" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "block", "begin_end_block", "single_block_stmt", "block_end", 
		"proc_block", "stmt", "semicolon_stmt", "exception_block", "exception_block_item", 
		"null_stmt", "expr_stmt", "assignment_stmt", "assignment_stmt_item", "assignment_stmt_single_item", 
		"assignment_stmt_multiple_item", "assignment_stmt_select_item", "allocate_cursor_stmt", 
		"associate_locator_stmt", "begin_transaction_stmt", "break_stmt", "call_stmt", 
		"declare_stmt", "declare_block", "declare_block_inplace", "declare_stmt_item", 
		"declare_var_item", "declare_condition_item", "declare_cursor_item", "cursor_with_return", 
		"cursor_without_return", "declare_handler_item", "declare_temporary_table_item", 
		"create_table_stmt", "create_local_temp_table_stmt", "create_table_definition", 
		"create_table_columns", "create_table_columns_item", "column_name", "create_table_column_inline_cons", 
		"create_table_column_cons", "create_table_fk_action", "create_table_preoptions", 
		"create_table_preoptions_item", "create_table_preoptions_td_item", "create_table_options", 
		"create_table_options_item", "create_table_options_ora_item", "create_table_options_db2_item", 
		"create_table_options_td_item", "create_table_options_hive_item", "create_table_hive_row_format", 
		"create_table_hive_row_format_fields", "create_table_options_mssql_item", 
		"create_table_options_mysql_item", "alter_table_stmt", "alter_table_item", 
		"alter_table_add_constraint", "alter_table_add_constraint_item", "dtype", 
		"dtype_len", "dtype_attr", "dtype_default", "create_database_stmt", "create_database_option", 
		"create_function_stmt", "create_function_return", "create_package_stmt", 
		"package_spec", "package_spec_item", "create_package_body_stmt", "package_body", 
		"package_body_item", "create_procedure_stmt", "create_routine_params", 
		"create_routine_param_item", "create_routine_options", "create_routine_option", 
		"drop_stmt", "end_transaction_stmt", "exec_stmt", "if_stmt", "if_plsql_stmt", 
		"if_tsql_stmt", "if_bteq_stmt", "elseif_block", "else_block", "include_stmt", 
		"insert_stmt", "insert_stmt_cols", "insert_stmt_rows", "insert_stmt_row", 
		"insert_directory_stmt", "exit_stmt", "get_diag_stmt", "get_diag_stmt_item", 
		"get_diag_stmt_exception_item", "get_diag_stmt_rowcount_item", "grant_stmt", 
		"grant_stmt_item", "leave_stmt", "map_object_stmt", "open_stmt", "fetch_stmt", 
		"collect_stats_stmt", "collect_stats_clause", "close_stmt", "cmp_stmt", 
		"cmp_source", "copy_from_local_stmt", "copy_stmt", "copy_source", "copy_target", 
		"copy_option", "copy_file_option", "commit_stmt", "create_index_stmt", 
		"create_index_col", "index_storage_clause", "index_mssql_storage_clause", 
		"print_stmt", "quit_stmt", "raise_stmt", "resignal_stmt", "return_stmt", 
		"rollback_stmt", "set_session_option", "set_current_schema_option", "set_mssql_session_option", 
		"set_teradata_session_option", "signal_stmt", "summary_stmt", "truncate_stmt", 
		"use_stmt", "values_into_stmt", "while_stmt", "for_cursor_stmt", "for_range_stmt", 
		"label", "using_clause", "select_stmt", "cte_select_stmt", "cte_select_stmt_item", 
		"cte_select_cols", "fullselect_stmt", "fullselect_stmt_item", "fullselect_set_clause", 
		"subselect_stmt", "select_list", "select_list_set", "select_list_limit", 
		"select_list_item", "select_list_alias", "select_list_asterisk", "into_clause", 
		"from_clause", "from_table_clause", "from_table_name_clause", "from_subselect_clause", 
		"from_join_clause", "from_join_type_clause", "from_table_values_clause", 
		"from_table_values_row", "from_alias_clause", "table_name", "where_clause", 
		"group_by_clause", "having_clause", "qualify_clause", "order_by_clause", 
		"select_options", "select_options_item", "update_stmt", "update_assignment", 
		"update_table", "update_upsert", "merge_stmt", "merge_table", "merge_condition", 
		"merge_action", "delete_stmt", "delete_alias", "describe_stmt", "bool_expr", 
		"bool_expr_atom", "bool_expr_unary", "bool_expr_single_in", "bool_expr_multi_in", 
		"bool_expr_binary", "bool_expr_logical_operator", "bool_expr_binary_operator", 
		"expr", "expr_atom", "expr_interval", "interval_item", "expr_concat", 
		"expr_concat_item", "expr_case", "expr_case_simple", "expr_case_searched", 
		"expr_cursor_attribute", "expr_agg_window_func", "expr_func_all_distinct", 
		"expr_func_over_clause", "expr_func_partition_by_clause", "expr_spec_func", 
		"expr_func", "expr_func_params", "func_param", "expr_select", "expr_file", 
		"hive", "hive_item", "host", "host_cmd", "host_stmt", "file_name", "date_literal", 
		"timestamp_literal", "ident", "string", "int_number", "dec_number", "bool_literal", 
		"null_const", "non_reserved_words",
	];
	public get grammarFileName(): string { return "HiveSql.g4"; }
	public get literalNames(): (string | null)[] { return HiveSql.literalNames; }
	public get symbolicNames(): (string | null)[] { return HiveSql.symbolicNames; }
	public get ruleNames(): string[] { return HiveSql.ruleNames; }
	public get serializedATN(): number[] { return HiveSql._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._input = input;
		this._interp = new ParserATNSimulator(this, HiveSql._ATN, HiveSql.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, HiveSql.RULE_program);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 452;
			this.block();
			this.state = 453;
			this.match(HiveSql.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, HiveSql.RULE_block);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 462;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 457;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 455;
						this.begin_end_block();
						}
						break;
					case 2:
						{
						this.state = 456;
						this.stmt();
						}
						break;
					}
					this.state = 460;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
					case 1:
						{
						this.state = 459;
						this.match(HiveSql.T_GO);
						}
						break;
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 464;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
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
	public begin_end_block(): Begin_end_blockContext {
		let localctx: Begin_end_blockContext = new Begin_end_blockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, HiveSql.RULE_begin_end_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===69) {
				{
				this.state = 466;
				this.declare_block();
				}
			}

			this.state = 469;
			this.match(HiveSql.T_BEGIN);
			this.state = 470;
			this.block();
			this.state = 472;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 471;
				this.exception_block();
				}
				break;
			}
			this.state = 474;
			this.block_end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public single_block_stmt(): Single_block_stmtContext {
		let localctx: Single_block_stmtContext = new Single_block_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, HiveSql.RULE_single_block_stmt);
		try {
			this.state = 487;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 476;
				this.match(HiveSql.T_BEGIN);
				this.state = 477;
				this.block();
				this.state = 479;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 478;
					this.exception_block();
					}
					break;
				}
				this.state = 481;
				this.block_end();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 483;
				this.stmt();
				this.state = 485;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 484;
					this.match(HiveSql.T_SEMICOLON);
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
	public block_end(): Block_endContext {
		let localctx: Block_endContext = new Block_endContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, HiveSql.RULE_block_end);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 489;
			if (!(!this._input.LT(2).text.toUpperCase() === "TRANSACTION")) {
				throw this.createFailedPredicateException("!this._input.LT(2).text.toUpperCase() === \"TRANSACTION\"");
			}
			this.state = 490;
			this.match(HiveSql.T_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public proc_block(): Proc_blockContext {
		let localctx: Proc_blockContext = new Proc_blockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, HiveSql.RULE_proc_block);
		try {
			let _alt: number;
			this.state = 501;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 492;
				this.begin_end_block();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 494;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 493;
						this.stmt();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 496;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 499;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 498;
					this.match(HiveSql.T_GO);
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
	public stmt(): StmtContext {
		let localctx: StmtContext = new StmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, HiveSql.RULE_stmt);
		try {
			this.state = 564;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 503;
				this.assignment_stmt();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 504;
				this.allocate_cursor_stmt();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 505;
				this.alter_table_stmt();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 506;
				this.associate_locator_stmt();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 507;
				this.begin_transaction_stmt();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 508;
				this.break_stmt();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 509;
				this.call_stmt();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 510;
				this.collect_stats_stmt();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 511;
				this.close_stmt();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 512;
				this.cmp_stmt();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 513;
				this.copy_from_local_stmt();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 514;
				this.copy_stmt();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 515;
				this.commit_stmt();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 516;
				this.create_database_stmt();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 517;
				this.create_function_stmt();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 518;
				this.create_index_stmt();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 519;
				this.create_local_temp_table_stmt();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 520;
				this.create_package_stmt();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 521;
				this.create_package_body_stmt();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 522;
				this.create_procedure_stmt();
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 523;
				this.create_table_stmt();
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 524;
				this.declare_stmt();
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 525;
				this.delete_stmt();
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 24);
				{
				this.state = 526;
				this.describe_stmt();
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 25);
				{
				this.state = 527;
				this.drop_stmt();
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 26);
				{
				this.state = 528;
				this.end_transaction_stmt();
				}
				break;
			case 27:
				this.enterOuterAlt(localctx, 27);
				{
				this.state = 529;
				this.exec_stmt();
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 28);
				{
				this.state = 530;
				this.exit_stmt();
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 29);
				{
				this.state = 531;
				this.fetch_stmt();
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 30);
				{
				this.state = 532;
				this.for_cursor_stmt();
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 31);
				{
				this.state = 533;
				this.for_range_stmt();
				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 32);
				{
				this.state = 534;
				this.if_stmt();
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 33);
				{
				this.state = 535;
				this.include_stmt();
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 34);
				{
				this.state = 536;
				this.insert_stmt();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 35);
				{
				this.state = 537;
				this.insert_directory_stmt();
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 36);
				{
				this.state = 538;
				this.get_diag_stmt();
				}
				break;
			case 37:
				this.enterOuterAlt(localctx, 37);
				{
				this.state = 539;
				this.grant_stmt();
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 38);
				{
				this.state = 540;
				this.leave_stmt();
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 39);
				{
				this.state = 541;
				this.map_object_stmt();
				}
				break;
			case 40:
				this.enterOuterAlt(localctx, 40);
				{
				this.state = 542;
				this.merge_stmt();
				}
				break;
			case 41:
				this.enterOuterAlt(localctx, 41);
				{
				this.state = 543;
				this.open_stmt();
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 42);
				{
				this.state = 544;
				this.print_stmt();
				}
				break;
			case 43:
				this.enterOuterAlt(localctx, 43);
				{
				this.state = 545;
				this.quit_stmt();
				}
				break;
			case 44:
				this.enterOuterAlt(localctx, 44);
				{
				this.state = 546;
				this.raise_stmt();
				}
				break;
			case 45:
				this.enterOuterAlt(localctx, 45);
				{
				this.state = 547;
				this.resignal_stmt();
				}
				break;
			case 46:
				this.enterOuterAlt(localctx, 46);
				{
				this.state = 548;
				this.return_stmt();
				}
				break;
			case 47:
				this.enterOuterAlt(localctx, 47);
				{
				this.state = 549;
				this.rollback_stmt();
				}
				break;
			case 48:
				this.enterOuterAlt(localctx, 48);
				{
				this.state = 550;
				this.select_stmt();
				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 49);
				{
				this.state = 551;
				this.signal_stmt();
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 50);
				{
				this.state = 552;
				this.summary_stmt();
				}
				break;
			case 51:
				this.enterOuterAlt(localctx, 51);
				{
				this.state = 553;
				this.update_stmt();
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 52);
				{
				this.state = 554;
				this.use_stmt();
				}
				break;
			case 53:
				this.enterOuterAlt(localctx, 53);
				{
				this.state = 555;
				this.truncate_stmt();
				}
				break;
			case 54:
				this.enterOuterAlt(localctx, 54);
				{
				this.state = 556;
				this.values_into_stmt();
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 55);
				{
				this.state = 557;
				this.while_stmt();
				}
				break;
			case 56:
				this.enterOuterAlt(localctx, 56);
				{
				this.state = 558;
				this.label();
				}
				break;
			case 57:
				this.enterOuterAlt(localctx, 57);
				{
				this.state = 559;
				this.hive();
				}
				break;
			case 58:
				this.enterOuterAlt(localctx, 58);
				{
				this.state = 560;
				this.host();
				}
				break;
			case 59:
				this.enterOuterAlt(localctx, 59);
				{
				this.state = 561;
				this.null_stmt();
				}
				break;
			case 60:
				this.enterOuterAlt(localctx, 60);
				{
				this.state = 562;
				this.expr_stmt();
				}
				break;
			case 61:
				this.enterOuterAlt(localctx, 61);
				{
				this.state = 563;
				this.semicolon_stmt();
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
	public semicolon_stmt(): Semicolon_stmtContext {
		let localctx: Semicolon_stmtContext = new Semicolon_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, HiveSql.RULE_semicolon_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 566;
			_la = this._input.LA(1);
			if(!(((((_la - 343)) & ~0x1F) === 0 && ((1 << (_la - 343)) & 4227105) !== 0))) {
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
	public exception_block(): Exception_blockContext {
		let localctx: Exception_blockContext = new Exception_blockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, HiveSql.RULE_exception_block);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 568;
			this.match(HiveSql.T_EXCEPTION);
			this.state = 570;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 569;
					this.exception_block_item();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 572;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
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
	public exception_block_item(): Exception_block_itemContext {
		let localctx: Exception_block_itemContext = new Exception_block_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, HiveSql.RULE_exception_block_item);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 574;
			this.match(HiveSql.T_WHEN);
			this.state = 575;
			this.match(HiveSql.L_ID);
			this.state = 576;
			this.match(HiveSql.T_THEN);
			this.state = 577;
			this.block();
			this.state = 578;
			_la = this._input.LA(1);
			if(_la<=0 || _la===93 || _la===306) {
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
	public null_stmt(): Null_stmtContext {
		let localctx: Null_stmtContext = new Null_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, HiveSql.RULE_null_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 580;
			this.match(HiveSql.T_NULL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr_stmt(): Expr_stmtContext {
		let localctx: Expr_stmtContext = new Expr_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, HiveSql.RULE_expr_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 582;
			if (!(this._input.LT(1).text.toUpperCase() !== "GO")) {
				throw this.createFailedPredicateException("this._input.LT(1).text.toUpperCase() !== \"GO\"");
			}
			this.state = 583;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignment_stmt(): Assignment_stmtContext {
		let localctx: Assignment_stmtContext = new Assignment_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, HiveSql.RULE_assignment_stmt);
		try {
			let _alt: number;
			this.state = 598;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 585;
				this.match(HiveSql.T_SET);
				this.state = 586;
				this.set_session_option();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 588;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 587;
					this.match(HiveSql.T_SET);
					}
					break;
				}
				this.state = 590;
				this.assignment_stmt_item();
				this.state = 595;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 591;
						this.match(HiveSql.T_COMMA);
						this.state = 592;
						this.assignment_stmt_item();
						}
						}
					}
					this.state = 597;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
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
	public assignment_stmt_item(): Assignment_stmt_itemContext {
		let localctx: Assignment_stmt_itemContext = new Assignment_stmt_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, HiveSql.RULE_assignment_stmt_item);
		try {
			this.state = 603;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 600;
				this.assignment_stmt_single_item();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 601;
				this.assignment_stmt_multiple_item();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 602;
				this.assignment_stmt_select_item();
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
	public assignment_stmt_single_item(): Assignment_stmt_single_itemContext {
		let localctx: Assignment_stmt_single_itemContext = new Assignment_stmt_single_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, HiveSql.RULE_assignment_stmt_single_item);
		let _la: number;
		try {
			this.state = 621;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 92:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
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
			case 122:
			case 123:
			case 124:
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
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
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
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
			case 200:
			case 201:
			case 202:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 210:
			case 211:
			case 212:
			case 213:
			case 214:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 225:
			case 226:
			case 227:
			case 228:
			case 229:
			case 230:
			case 231:
			case 232:
			case 233:
			case 234:
			case 235:
			case 236:
			case 237:
			case 239:
			case 240:
			case 241:
			case 242:
			case 243:
			case 244:
			case 245:
			case 246:
			case 247:
			case 248:
			case 249:
			case 250:
			case 251:
			case 252:
			case 253:
			case 254:
			case 255:
			case 256:
			case 257:
			case 258:
			case 260:
			case 261:
			case 262:
			case 263:
			case 264:
			case 265:
			case 266:
			case 267:
			case 268:
			case 269:
			case 270:
			case 271:
			case 272:
			case 273:
			case 274:
			case 275:
			case 276:
			case 277:
			case 278:
			case 279:
			case 280:
			case 281:
			case 282:
			case 283:
			case 284:
			case 286:
			case 287:
			case 288:
			case 289:
			case 290:
			case 291:
			case 294:
			case 295:
			case 296:
			case 297:
			case 298:
			case 299:
			case 300:
			case 301:
			case 302:
			case 303:
			case 304:
			case 305:
			case 308:
			case 309:
			case 310:
			case 311:
			case 312:
			case 313:
			case 314:
			case 315:
			case 316:
			case 317:
			case 318:
			case 319:
			case 320:
			case 321:
			case 322:
			case 323:
			case 324:
			case 331:
			case 332:
			case 333:
			case 334:
			case 335:
			case 336:
			case 337:
			case 338:
			case 367:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 605;
				this.ident();
				this.state = 607;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===340) {
					{
					this.state = 606;
					this.match(HiveSql.T_COLON);
					}
				}

				this.state = 609;
				this.match(HiveSql.T_EQUAL);
				this.state = 610;
				this.expr(0);
				}
				break;
			case 360:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 612;
				this.match(HiveSql.T_OPEN_P);
				this.state = 613;
				this.ident();
				this.state = 614;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 616;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===340) {
					{
					this.state = 615;
					this.match(HiveSql.T_COLON);
					}
				}

				this.state = 618;
				this.match(HiveSql.T_EQUAL);
				this.state = 619;
				this.expr(0);
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
	public assignment_stmt_multiple_item(): Assignment_stmt_multiple_itemContext {
		let localctx: Assignment_stmt_multiple_itemContext = new Assignment_stmt_multiple_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, HiveSql.RULE_assignment_stmt_multiple_item);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 623;
			this.match(HiveSql.T_OPEN_P);
			this.state = 624;
			this.ident();
			this.state = 629;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===341) {
				{
				{
				this.state = 625;
				this.match(HiveSql.T_COMMA);
				this.state = 626;
				this.ident();
				}
				}
				this.state = 631;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 632;
			this.match(HiveSql.T_CLOSE_P);
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===340) {
				{
				this.state = 633;
				this.match(HiveSql.T_COLON);
				}
			}

			this.state = 636;
			this.match(HiveSql.T_EQUAL);
			this.state = 637;
			this.match(HiveSql.T_OPEN_P);
			this.state = 638;
			this.expr(0);
			this.state = 643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===341) {
				{
				{
				this.state = 639;
				this.match(HiveSql.T_COMMA);
				this.state = 640;
				this.expr(0);
				}
				}
				this.state = 645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 646;
			this.match(HiveSql.T_CLOSE_P);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignment_stmt_select_item(): Assignment_stmt_select_itemContext {
		let localctx: Assignment_stmt_select_itemContext = new Assignment_stmt_select_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, HiveSql.RULE_assignment_stmt_select_item);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 660;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 92:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
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
			case 122:
			case 123:
			case 124:
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
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
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
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
			case 200:
			case 201:
			case 202:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 210:
			case 211:
			case 212:
			case 213:
			case 214:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 225:
			case 226:
			case 227:
			case 228:
			case 229:
			case 230:
			case 231:
			case 232:
			case 233:
			case 234:
			case 235:
			case 236:
			case 237:
			case 239:
			case 240:
			case 241:
			case 242:
			case 243:
			case 244:
			case 245:
			case 246:
			case 247:
			case 248:
			case 249:
			case 250:
			case 251:
			case 252:
			case 253:
			case 254:
			case 255:
			case 256:
			case 257:
			case 258:
			case 260:
			case 261:
			case 262:
			case 263:
			case 264:
			case 265:
			case 266:
			case 267:
			case 268:
			case 269:
			case 270:
			case 271:
			case 272:
			case 273:
			case 274:
			case 275:
			case 276:
			case 277:
			case 278:
			case 279:
			case 280:
			case 281:
			case 282:
			case 283:
			case 284:
			case 286:
			case 287:
			case 288:
			case 289:
			case 290:
			case 291:
			case 294:
			case 295:
			case 296:
			case 297:
			case 298:
			case 299:
			case 300:
			case 301:
			case 302:
			case 303:
			case 304:
			case 305:
			case 308:
			case 309:
			case 310:
			case 311:
			case 312:
			case 313:
			case 314:
			case 315:
			case 316:
			case 317:
			case 318:
			case 319:
			case 320:
			case 321:
			case 322:
			case 323:
			case 324:
			case 331:
			case 332:
			case 333:
			case 334:
			case 335:
			case 336:
			case 337:
			case 338:
			case 367:
				{
				this.state = 648;
				this.ident();
				}
				break;
			case 360:
				{
				{
				this.state = 649;
				this.match(HiveSql.T_OPEN_P);
				this.state = 650;
				this.ident();
				this.state = 655;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===341) {
					{
					{
					this.state = 651;
					this.match(HiveSql.T_COMMA);
					this.state = 652;
					this.ident();
					}
					}
					this.state = 657;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 658;
				this.match(HiveSql.T_CLOSE_P);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 663;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===340) {
				{
				this.state = 662;
				this.match(HiveSql.T_COLON);
				}
			}

			this.state = 665;
			this.match(HiveSql.T_EQUAL);
			this.state = 666;
			this.match(HiveSql.T_OPEN_P);
			this.state = 667;
			this.select_stmt();
			this.state = 668;
			this.match(HiveSql.T_CLOSE_P);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public allocate_cursor_stmt(): Allocate_cursor_stmtContext {
		let localctx: Allocate_cursor_stmtContext = new Allocate_cursor_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, HiveSql.RULE_allocate_cursor_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 670;
			this.match(HiveSql.T_ALLOCATE);
			this.state = 671;
			this.ident();
			this.state = 672;
			this.match(HiveSql.T_CURSOR);
			this.state = 673;
			this.match(HiveSql.T_FOR);
			this.state = 677;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 227:
				{
				{
				this.state = 674;
				this.match(HiveSql.T_RESULT);
				this.state = 675;
				this.match(HiveSql.T_SET);
				}
				}
				break;
			case 215:
				{
				this.state = 676;
				this.match(HiveSql.T_PROCEDURE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 679;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public associate_locator_stmt(): Associate_locator_stmtContext {
		let localctx: Associate_locator_stmtContext = new Associate_locator_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, HiveSql.RULE_associate_locator_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 681;
			this.match(HiveSql.T_ASSOCIATE);
			this.state = 684;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===227) {
				{
				this.state = 682;
				this.match(HiveSql.T_RESULT);
				this.state = 683;
				this.match(HiveSql.T_SET);
				}
			}

			this.state = 686;
			_la = this._input.LA(1);
			if(!(_la===163 || _la===164)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 687;
			this.match(HiveSql.T_OPEN_P);
			this.state = 688;
			this.ident();
			this.state = 693;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===341) {
				{
				{
				this.state = 689;
				this.match(HiveSql.T_COMMA);
				this.state = 690;
				this.ident();
				}
				}
				this.state = 695;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 696;
			this.match(HiveSql.T_CLOSE_P);
			this.state = 697;
			this.match(HiveSql.T_WITH);
			this.state = 698;
			this.match(HiveSql.T_PROCEDURE);
			this.state = 699;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public begin_transaction_stmt(): Begin_transaction_stmtContext {
		let localctx: Begin_transaction_stmtContext = new Begin_transaction_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, HiveSql.RULE_begin_transaction_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 701;
			this.match(HiveSql.T_BEGIN);
			this.state = 702;
			this.match(HiveSql.T_TRANSACTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public break_stmt(): Break_stmtContext {
		let localctx: Break_stmtContext = new Break_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, HiveSql.RULE_break_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 704;
			this.match(HiveSql.T_BREAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public call_stmt(): Call_stmtContext {
		let localctx: Call_stmtContext = new Call_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, HiveSql.RULE_call_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 706;
			this.match(HiveSql.T_CALL);
			this.state = 707;
			this.ident();
			this.state = 714;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 708;
				this.match(HiveSql.T_OPEN_P);
				this.state = 710;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 709;
					this.expr_func_params();
					}
					break;
				}
				this.state = 712;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 2:
				{
				this.state = 713;
				this.expr_func_params();
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
	public declare_stmt(): Declare_stmtContext {
		let localctx: Declare_stmtContext = new Declare_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, HiveSql.RULE_declare_stmt);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 716;
			this.match(HiveSql.T_DECLARE);
			this.state = 717;
			this.declare_stmt_item();
			this.state = 722;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 718;
					this.match(HiveSql.T_COMMA);
					this.state = 719;
					this.declare_stmt_item();
					}
					}
				}
				this.state = 724;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
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
	public declare_block(): Declare_blockContext {
		let localctx: Declare_blockContext = new Declare_blockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, HiveSql.RULE_declare_block);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 725;
			this.match(HiveSql.T_DECLARE);
			this.state = 726;
			this.declare_stmt_item();
			this.state = 727;
			this.match(HiveSql.T_SEMICOLON);
			this.state = 733;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 728;
					this.declare_stmt_item();
					this.state = 729;
					this.match(HiveSql.T_SEMICOLON);
					}
					}
				}
				this.state = 735;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
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
	public declare_block_inplace(): Declare_block_inplaceContext {
		let localctx: Declare_block_inplaceContext = new Declare_block_inplaceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, HiveSql.RULE_declare_block_inplace);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 736;
			this.declare_stmt_item();
			this.state = 737;
			this.match(HiveSql.T_SEMICOLON);
			this.state = 743;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 738;
					this.declare_stmt_item();
					this.state = 739;
					this.match(HiveSql.T_SEMICOLON);
					}
					}
				}
				this.state = 745;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
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
	public declare_stmt_item(): Declare_stmt_itemContext {
		let localctx: Declare_stmt_itemContext = new Declare_stmt_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, HiveSql.RULE_declare_stmt_item);
		try {
			this.state = 751;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 746;
				this.declare_cursor_item();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 747;
				this.declare_condition_item();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 748;
				this.declare_handler_item();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 749;
				this.declare_var_item();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 750;
				this.declare_temporary_table_item();
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
	public declare_var_item(): Declare_var_itemContext {
		let localctx: Declare_var_itemContext = new Declare_var_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, HiveSql.RULE_declare_var_item);
		let _la: number;
		try {
			let _alt: number;
			this.state = 788;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 753;
				this.ident();
				this.state = 758;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===341) {
					{
					{
					this.state = 754;
					this.match(HiveSql.T_COMMA);
					this.state = 755;
					this.ident();
					}
					}
					this.state = 760;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 762;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 761;
					this.match(HiveSql.T_AS);
					}
					break;
				}
				this.state = 764;
				this.dtype();
				this.state = 766;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 765;
					this.dtype_len();
					}
					break;
				}
				this.state = 771;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 768;
						this.dtype_attr();
						}
						}
					}
					this.state = 773;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
				}
				this.state = 775;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 774;
					this.dtype_default();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 777;
				this.ident();
				this.state = 778;
				this.match(HiveSql.T_CONSTANT);
				this.state = 780;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 779;
					this.match(HiveSql.T_AS);
					}
					break;
				}
				this.state = 782;
				this.dtype();
				this.state = 784;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===360) {
					{
					this.state = 783;
					this.dtype_len();
					}
				}

				this.state = 786;
				this.dtype_default();
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
	public declare_condition_item(): Declare_condition_itemContext {
		let localctx: Declare_condition_itemContext = new Declare_condition_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, HiveSql.RULE_declare_condition_item);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 790;
			this.ident();
			this.state = 791;
			this.match(HiveSql.T_CONDITION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declare_cursor_item(): Declare_cursor_itemContext {
		let localctx: Declare_cursor_itemContext = new Declare_cursor_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, HiveSql.RULE_declare_cursor_item);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 798;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 793;
				this.match(HiveSql.T_CURSOR);
				this.state = 794;
				this.ident();
				}
				break;
			case 2:
				{
				this.state = 795;
				this.ident();
				this.state = 796;
				this.match(HiveSql.T_CURSOR);
				}
				break;
			}
			this.state = 802;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 309:
				{
				this.state = 800;
				this.cursor_with_return();
				}
				break;
			case 310:
				{
				this.state = 801;
				this.cursor_without_return();
				}
				break;
			case 9:
			case 110:
			case 148:
				break;
			default:
				break;
			}
			this.state = 804;
			_la = this._input.LA(1);
			if(!(_la===9 || _la===110 || _la===148)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 807;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 805;
				this.select_stmt();
				}
				break;
			case 2:
				{
				this.state = 806;
				this.expr(0);
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
	public cursor_with_return(): Cursor_with_returnContext {
		let localctx: Cursor_with_returnContext = new Cursor_with_returnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, HiveSql.RULE_cursor_with_return);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 809;
			this.match(HiveSql.T_WITH);
			this.state = 810;
			this.match(HiveSql.T_RETURN);
			this.state = 812;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===196) {
				{
				this.state = 811;
				this.match(HiveSql.T_ONLY);
				}
			}

			this.state = 816;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===287) {
				{
				this.state = 814;
				this.match(HiveSql.T_TO);
				this.state = 815;
				_la = this._input.LA(1);
				if(!(_la===28 || _la===36)) {
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
	public cursor_without_return(): Cursor_without_returnContext {
		let localctx: Cursor_without_returnContext = new Cursor_without_returnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, HiveSql.RULE_cursor_without_return);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 818;
			this.match(HiveSql.T_WITHOUT);
			this.state = 819;
			this.match(HiveSql.T_RETURN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declare_handler_item(): Declare_handler_itemContext {
		let localctx: Declare_handler_itemContext = new Declare_handler_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, HiveSql.RULE_declare_handler_item);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 821;
			_la = this._input.LA(1);
			if(!(_la===50 || _la===102)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 822;
			this.match(HiveSql.T_HANDLER);
			this.state = 823;
			this.match(HiveSql.T_FOR);
			this.state = 829;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 824;
				this.match(HiveSql.T_SQLEXCEPTION);
				}
				break;
			case 2:
				{
				this.state = 825;
				this.match(HiveSql.T_SQLWARNING);
				}
				break;
			case 3:
				{
				this.state = 826;
				this.match(HiveSql.T_NOT);
				this.state = 827;
				this.match(HiveSql.T_FOUND);
				}
				break;
			case 4:
				{
				this.state = 828;
				this.ident();
				}
				break;
			}
			this.state = 831;
			this.single_block_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declare_temporary_table_item(): Declare_temporary_table_itemContext {
		let localctx: Declare_temporary_table_itemContext = new Declare_temporary_table_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, HiveSql.RULE_declare_temporary_table_item);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===118) {
				{
				this.state = 833;
				this.match(HiveSql.T_GLOBAL);
				}
			}

			this.state = 836;
			this.match(HiveSql.T_TEMPORARY);
			this.state = 837;
			this.match(HiveSql.T_TABLE);
			this.state = 838;
			this.ident();
			this.state = 840;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===236 || _la===271 || _la===341) {
				{
				this.state = 839;
				this.create_table_preoptions();
				}
			}

			this.state = 842;
			this.create_table_definition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public create_table_stmt(): Create_table_stmtContext {
		let localctx: Create_table_stmtContext = new Create_table_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, HiveSql.RULE_create_table_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 844;
			this.match(HiveSql.T_CREATE);
			this.state = 845;
			this.match(HiveSql.T_TABLE);
			this.state = 849;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 846;
				this.match(HiveSql.T_IF);
				this.state = 847;
				this.match(HiveSql.T_NOT);
				this.state = 848;
				this.match(HiveSql.T_EXISTS);
				}
				break;
			}
			this.state = 851;
			this.table_name();
			this.state = 853;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===236 || _la===271 || _la===341) {
				{
				this.state = 852;
				this.create_table_preoptions();
				}
			}

			this.state = 855;
			this.create_table_definition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public create_local_temp_table_stmt(): Create_local_temp_table_stmtContext {
		let localctx: Create_local_temp_table_stmtContext = new Create_local_temp_table_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, HiveSql.RULE_create_local_temp_table_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 857;
			this.match(HiveSql.T_CREATE);
			this.state = 864;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 161:
				{
				this.state = 858;
				this.match(HiveSql.T_LOCAL);
				this.state = 859;
				this.match(HiveSql.T_TEMPORARY);
				}
				break;
			case 179:
			case 251:
			case 305:
				{
				this.state = 861;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===179 || _la===251) {
					{
					this.state = 860;
					_la = this._input.LA(1);
					if(!(_la===179 || _la===251)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 863;
				this.match(HiveSql.T_VOLATILE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 866;
			this.match(HiveSql.T_TABLE);
			this.state = 867;
			this.ident();
			this.state = 869;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===236 || _la===271 || _la===341) {
				{
				this.state = 868;
				this.create_table_preoptions();
				}
			}

			this.state = 871;
			this.create_table_definition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public create_table_definition(): Create_table_definitionContext {
		let localctx: Create_table_definitionContext = new Create_table_definitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, HiveSql.RULE_create_table_definition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 888;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 874;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===9) {
					{
					this.state = 873;
					this.match(HiveSql.T_AS);
					}
				}

				this.state = 876;
				this.match(HiveSql.T_OPEN_P);
				this.state = 877;
				this.select_stmt();
				this.state = 878;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 2:
				{
				this.state = 881;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===9) {
					{
					this.state = 880;
					this.match(HiveSql.T_AS);
					}
				}

				this.state = 883;
				this.select_stmt();
				}
				break;
			case 3:
				{
				this.state = 884;
				this.match(HiveSql.T_OPEN_P);
				this.state = 885;
				this.create_table_columns();
				this.state = 886;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			}
			this.state = 891;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 890;
				this.create_table_options();
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
	public create_table_columns(): Create_table_columnsContext {
		let localctx: Create_table_columnsContext = new Create_table_columnsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, HiveSql.RULE_create_table_columns);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 893;
			this.create_table_columns_item();
			this.state = 898;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===341) {
				{
				{
				this.state = 894;
				this.match(HiveSql.T_COMMA);
				this.state = 895;
				this.create_table_columns_item();
				}
				}
				this.state = 900;
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
	public create_table_columns_item(): Create_table_columns_itemContext {
		let localctx: Create_table_columns_itemContext = new Create_table_columns_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, HiveSql.RULE_create_table_columns_item);
		let _la: number;
		try {
			let _alt: number;
			this.state = 923;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 901;
				this.column_name();
				this.state = 902;
				this.dtype();
				this.state = 904;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===360) {
					{
					this.state = 903;
					this.dtype_len();
					}
				}

				this.state = 909;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 906;
						this.dtype_attr();
						}
						}
					}
					this.state = 911;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
				}
				this.state = 915;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===13 || _la===70 || _la===92 || _la===128 || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 16777221) !== 0) || _la===222 || _la===294 || _la===309 || _la===340 || _la===346) {
					{
					{
					this.state = 912;
					this.create_table_column_inline_cons();
					}
					}
					this.state = 917;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 920;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===49) {
					{
					this.state = 918;
					this.match(HiveSql.T_CONSTRAINT);
					this.state = 919;
					this.ident();
					}
				}

				this.state = 922;
				this.create_table_column_cons();
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
	public column_name(): Column_nameContext {
		let localctx: Column_nameContext = new Column_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, HiveSql.RULE_column_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 925;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public create_table_column_inline_cons(): Create_table_column_inline_consContext {
		let localctx: Create_table_column_inline_consContext = new Create_table_column_inline_consContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, HiveSql.RULE_create_table_column_inline_cons);
		let _la: number;
		try {
			this.state = 959;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 70:
			case 309:
			case 340:
			case 346:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 927;
				this.dtype_default();
				}
				break;
			case 188:
			case 190:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 929;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===188) {
					{
					this.state = 928;
					this.match(HiveSql.T_NOT);
					}
				}

				this.state = 931;
				this.match(HiveSql.T_NULL);
				}
				break;
			case 212:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 932;
				this.match(HiveSql.T_PRIMARY);
				this.state = 933;
				this.match(HiveSql.T_KEY);
				}
				break;
			case 294:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 934;
				this.match(HiveSql.T_UNIQUE);
				}
				break;
			case 222:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 935;
				this.match(HiveSql.T_REFERENCES);
				this.state = 936;
				this.table_name();
				this.state = 937;
				this.match(HiveSql.T_OPEN_P);
				this.state = 938;
				this.ident();
				this.state = 939;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 943;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===195) {
					{
					{
					this.state = 940;
					this.create_table_fk_action();
					}
					}
					this.state = 945;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 128:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 946;
				this.match(HiveSql.T_IDENTITY);
				this.state = 947;
				this.match(HiveSql.T_OPEN_P);
				this.state = 948;
				this.match(HiveSql.L_INT);
				this.state = 953;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===341) {
					{
					{
					this.state = 949;
					this.match(HiveSql.T_COMMA);
					this.state = 950;
					this.match(HiveSql.L_INT);
					}
					}
					this.state = 955;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 956;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 957;
				this.match(HiveSql.T_AUTO_INCREMENT);
				}
				break;
			case 92:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 958;
				this.match(HiveSql.T_ENABLE);
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
	public create_table_column_cons(): Create_table_column_consContext {
		let localctx: Create_table_column_consContext = new Create_table_column_consContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, HiveSql.RULE_create_table_column_cons);
		let _la: number;
		try {
			this.state = 1018;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 212:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 961;
				this.match(HiveSql.T_PRIMARY);
				this.state = 962;
				this.match(HiveSql.T_KEY);
				this.state = 964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===38) {
					{
					this.state = 963;
					this.match(HiveSql.T_CLUSTERED);
					}
				}

				this.state = 966;
				this.match(HiveSql.T_OPEN_P);
				this.state = 967;
				this.ident();
				this.state = 969;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===10 || _la===78) {
					{
					this.state = 968;
					_la = this._input.LA(1);
					if(!(_la===10 || _la===78)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 978;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===341) {
					{
					{
					this.state = 971;
					this.match(HiveSql.T_COMMA);
					this.state = 972;
					this.ident();
					this.state = 974;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===10 || _la===78) {
						{
						this.state = 973;
						_la = this._input.LA(1);
						if(!(_la===10 || _la===78)) {
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
					this.state = 980;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 981;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 983;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===92) {
					{
					this.state = 982;
					this.match(HiveSql.T_ENABLE);
					}
				}

				this.state = 986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===309) {
					{
					this.state = 985;
					this.index_storage_clause();
					}
				}

				}
				break;
			case 111:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 988;
				this.match(HiveSql.T_FOREIGN);
				this.state = 989;
				this.match(HiveSql.T_KEY);
				this.state = 990;
				this.match(HiveSql.T_OPEN_P);
				this.state = 991;
				this.ident();
				this.state = 996;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===341) {
					{
					{
					this.state = 992;
					this.match(HiveSql.T_COMMA);
					this.state = 993;
					this.ident();
					}
					}
					this.state = 998;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 999;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 1000;
				this.match(HiveSql.T_REFERENCES);
				this.state = 1001;
				this.table_name();
				this.state = 1002;
				this.match(HiveSql.T_OPEN_P);
				this.state = 1003;
				this.ident();
				this.state = 1008;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===341) {
					{
					{
					this.state = 1004;
					this.match(HiveSql.T_COMMA);
					this.state = 1005;
					this.ident();
					}
					}
					this.state = 1010;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1011;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 1015;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===195) {
					{
					{
					this.state = 1012;
					this.create_table_fk_action();
					}
					}
					this.state = 1017;
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public create_table_fk_action(): Create_table_fk_actionContext {
		let localctx: Create_table_fk_actionContext = new Create_table_fk_actionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, HiveSql.RULE_create_table_fk_action);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1020;
			this.match(HiveSql.T_ON);
			this.state = 1021;
			_la = this._input.LA(1);
			if(!(_la===75 || _la===295)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1030;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 1022;
				this.match(HiveSql.T_NO);
				this.state = 1023;
				this.match(HiveSql.T_ACTION);
				}
				break;
			case 2:
				{
				this.state = 1024;
				this.match(HiveSql.T_RESTRICT);
				}
				break;
			case 3:
				{
				this.state = 1025;
				this.match(HiveSql.T_SET);
				this.state = 1026;
				this.match(HiveSql.T_NULL);
				}
				break;
			case 4:
				{
				this.state = 1027;
				this.match(HiveSql.T_SET);
				this.state = 1028;
				this.match(HiveSql.T_DEFAULT);
				}
				break;
			case 5:
				{
				this.state = 1029;
				this.match(HiveSql.T_CASCADE);
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
	public create_table_preoptions(): Create_table_preoptionsContext {
		let localctx: Create_table_preoptionsContext = new Create_table_preoptionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, HiveSql.RULE_create_table_preoptions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1033;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1032;
				this.create_table_preoptions_item();
				}
				}
				this.state = 1035;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===236 || _la===271 || _la===341);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public create_table_preoptions_item(): Create_table_preoptions_itemContext {
		let localctx: Create_table_preoptions_itemContext = new Create_table_preoptions_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, HiveSql.RULE_create_table_preoptions_item);
		try {
			this.state = 1040;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 341:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1037;
				this.match(HiveSql.T_COMMA);
				this.state = 1038;
				this.create_table_preoptions_td_item();
				}
				break;
			case 236:
			case 271:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1039;
				this.create_table_options_hive_item();
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
	public create_table_preoptions_td_item(): Create_table_preoptions_td_itemContext {
		let localctx: Create_table_preoptions_td_itemContext = new Create_table_preoptions_td_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, HiveSql.RULE_create_table_preoptions_td_item);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1043;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===183) {
				{
				this.state = 1042;
				this.match(HiveSql.T_NO);
				}
			}

			this.state = 1045;
			_la = this._input.LA(1);
			if(!(_la===103 || _la===166)) {
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
	public create_table_options(): Create_table_optionsContext {
		let localctx: Create_table_optionsContext = new Create_table_optionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, HiveSql.RULE_create_table_options);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1048;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1047;
					this.create_table_options_item();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1050;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
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
	public create_table_options_item(): Create_table_options_itemContext {
		let localctx: Create_table_options_itemContext = new Create_table_options_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, HiveSql.RULE_create_table_options_item);
		let _la: number;
		try {
			this.state = 1062;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1052;
				this.match(HiveSql.T_ON);
				this.state = 1053;
				this.match(HiveSql.T_COMMIT);
				this.state = 1054;
				_la = this._input.LA(1);
				if(!(_la===75 || _la===211)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1055;
				this.match(HiveSql.T_ROWS);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1056;
				this.create_table_options_ora_item();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1057;
				this.create_table_options_db2_item();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1058;
				this.create_table_options_td_item();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1059;
				this.create_table_options_hive_item();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1060;
				this.create_table_options_mssql_item();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1061;
				this.create_table_options_mysql_item();
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
	public create_table_options_ora_item(): Create_table_options_ora_itemContext {
		let localctx: Create_table_options_ora_itemContext = new Create_table_options_ora_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, HiveSql.RULE_create_table_options_ora_item);
		let _la: number;
		try {
			this.state = 1082;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 248:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1064;
				this.match(HiveSql.T_SEGMENT);
				this.state = 1065;
				this.match(HiveSql.T_CREATION);
				this.state = 1066;
				_la = this._input.LA(1);
				if(!(_la===71 || _la===131)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 135:
			case 173:
			case 207:
			case 208:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1067;
				_la = this._input.LA(1);
				if(!(_la===135 || _la===173 || _la===207 || _la===208)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1068;
				this.match(HiveSql.L_INT);
				}
				break;
			case 185:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1069;
				this.match(HiveSql.T_NOCOMPRESS);
				}
				break;
			case 168:
			case 186:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1070;
				_la = this._input.LA(1);
				if(!(_la===168 || _la===186)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 270:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1071;
				this.match(HiveSql.T_STORAGE);
				this.state = 1072;
				this.match(HiveSql.T_OPEN_P);
				this.state = 1075;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1075;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
					case 8:
					case 9:
					case 10:
					case 11:
					case 12:
					case 13:
					case 14:
					case 15:
					case 16:
					case 17:
					case 18:
					case 19:
					case 20:
					case 22:
					case 23:
					case 24:
					case 25:
					case 26:
					case 27:
					case 28:
					case 29:
					case 30:
					case 31:
					case 32:
					case 33:
					case 34:
					case 35:
					case 36:
					case 37:
					case 38:
					case 39:
					case 40:
					case 41:
					case 42:
					case 43:
					case 44:
					case 45:
					case 46:
					case 47:
					case 48:
					case 49:
					case 50:
					case 51:
					case 52:
					case 53:
					case 54:
					case 55:
					case 56:
					case 57:
					case 58:
					case 59:
					case 60:
					case 61:
					case 62:
					case 63:
					case 64:
					case 65:
					case 66:
					case 67:
					case 68:
					case 69:
					case 70:
					case 71:
					case 72:
					case 73:
					case 74:
					case 75:
					case 76:
					case 77:
					case 78:
					case 79:
					case 80:
					case 81:
					case 82:
					case 83:
					case 84:
					case 85:
					case 86:
					case 87:
					case 88:
					case 92:
					case 94:
					case 95:
					case 96:
					case 97:
					case 98:
					case 99:
					case 100:
					case 101:
					case 102:
					case 103:
					case 104:
					case 105:
					case 106:
					case 107:
					case 108:
					case 109:
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
					case 122:
					case 123:
					case 124:
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
					case 141:
					case 142:
					case 143:
					case 144:
					case 145:
					case 146:
					case 147:
					case 148:
					case 149:
					case 150:
					case 151:
					case 152:
					case 153:
					case 154:
					case 155:
					case 156:
					case 157:
					case 158:
					case 159:
					case 160:
					case 161:
					case 162:
					case 163:
					case 164:
					case 165:
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
					case 181:
					case 182:
					case 183:
					case 184:
					case 185:
					case 186:
					case 187:
					case 188:
					case 189:
					case 191:
					case 192:
					case 193:
					case 194:
					case 195:
					case 196:
					case 197:
					case 198:
					case 199:
					case 200:
					case 201:
					case 202:
					case 203:
					case 204:
					case 205:
					case 206:
					case 207:
					case 208:
					case 210:
					case 211:
					case 212:
					case 213:
					case 214:
					case 215:
					case 216:
					case 217:
					case 218:
					case 219:
					case 220:
					case 221:
					case 222:
					case 223:
					case 224:
					case 225:
					case 226:
					case 227:
					case 228:
					case 229:
					case 230:
					case 231:
					case 232:
					case 233:
					case 234:
					case 235:
					case 236:
					case 237:
					case 239:
					case 240:
					case 241:
					case 242:
					case 243:
					case 244:
					case 245:
					case 246:
					case 247:
					case 248:
					case 249:
					case 250:
					case 251:
					case 252:
					case 253:
					case 254:
					case 255:
					case 256:
					case 257:
					case 258:
					case 260:
					case 261:
					case 262:
					case 263:
					case 264:
					case 265:
					case 266:
					case 267:
					case 268:
					case 269:
					case 270:
					case 271:
					case 272:
					case 273:
					case 274:
					case 275:
					case 276:
					case 277:
					case 278:
					case 279:
					case 280:
					case 281:
					case 282:
					case 283:
					case 284:
					case 286:
					case 287:
					case 288:
					case 289:
					case 290:
					case 291:
					case 294:
					case 295:
					case 296:
					case 297:
					case 298:
					case 299:
					case 300:
					case 301:
					case 302:
					case 303:
					case 304:
					case 305:
					case 308:
					case 309:
					case 310:
					case 311:
					case 312:
					case 313:
					case 314:
					case 315:
					case 316:
					case 317:
					case 318:
					case 319:
					case 320:
					case 321:
					case 322:
					case 323:
					case 324:
					case 331:
					case 332:
					case 333:
					case 334:
					case 335:
					case 336:
					case 337:
					case 338:
					case 367:
						{
						this.state = 1073;
						this.ident();
						}
						break;
					case 370:
						{
						this.state = 1074;
						this.match(HiveSql.L_INT);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 1077;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4292870142) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 3523215359) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 3221225471) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 4294836223) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & 4294950911) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & 3758096375) !== 0) || ((((_la - 288)) & ~0x1F) === 0 && ((1 << (_la - 288)) & 4294180815) !== 0) || ((((_la - 320)) & ~0x1F) === 0 && ((1 << (_la - 320)) & 522271) !== 0) || _la===367 || _la===370);
				this.state = 1079;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 279:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1080;
				this.match(HiveSql.T_TABLESPACE);
				this.state = 1081;
				this.ident();
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
	public create_table_options_db2_item(): Create_table_options_db2_itemContext {
		let localctx: Create_table_options_db2_itemContext = new Create_table_options_db2_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, HiveSql.RULE_create_table_options_db2_item);
		let _la: number;
		try {
			this.state = 1117;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1085;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===134) {
					{
					this.state = 1084;
					this.match(HiveSql.T_INDEX);
					}
				}

				this.state = 1087;
				this.match(HiveSql.T_IN);
				this.state = 1088;
				this.ident();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1089;
				this.match(HiveSql.T_WITH);
				this.state = 1090;
				this.match(HiveSql.T_REPLACE);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1091;
				this.match(HiveSql.T_DISTRIBUTE);
				this.state = 1092;
				this.match(HiveSql.T_BY);
				this.state = 1093;
				this.match(HiveSql.T_HASH);
				this.state = 1094;
				this.match(HiveSql.T_OPEN_P);
				this.state = 1095;
				this.ident();
				this.state = 1100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===341) {
					{
					{
					this.state = 1096;
					this.match(HiveSql.T_COMMA);
					this.state = 1097;
					this.ident();
					}
					}
					this.state = 1102;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1103;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===188) {
					{
					this.state = 1105;
					this.match(HiveSql.T_NOT);
					}
				}

				this.state = 1108;
				this.match(HiveSql.T_LOGGED);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1109;
				this.match(HiveSql.T_COMPRESS);
				this.state = 1110;
				_la = this._input.LA(1);
				if(!(_la===183 || _la===314)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1111;
				this.match(HiveSql.T_DEFINITION);
				this.state = 1112;
				this.match(HiveSql.T_ONLY);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1113;
				this.match(HiveSql.T_WITH);
				this.state = 1114;
				this.match(HiveSql.T_RESTRICT);
				this.state = 1115;
				this.match(HiveSql.T_ON);
				this.state = 1116;
				this.match(HiveSql.T_DROP);
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
	public create_table_options_td_item(): Create_table_options_td_itemContext {
		let localctx: Create_table_options_td_itemContext = new Create_table_options_td_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, HiveSql.RULE_create_table_options_td_item);
		let _la: number;
		try {
			this.state = 1137;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 212:
			case 294:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===294) {
					{
					this.state = 1119;
					this.match(HiveSql.T_UNIQUE);
					}
				}

				this.state = 1122;
				this.match(HiveSql.T_PRIMARY);
				this.state = 1123;
				this.match(HiveSql.T_INDEX);
				this.state = 1124;
				this.match(HiveSql.T_OPEN_P);
				this.state = 1125;
				this.ident();
				this.state = 1130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===341) {
					{
					{
					this.state = 1126;
					this.match(HiveSql.T_COMMA);
					this.state = 1127;
					this.ident();
					}
					}
					this.state = 1132;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1133;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 309:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1135;
				this.match(HiveSql.T_WITH);
				this.state = 1136;
				this.match(HiveSql.T_DATA);
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
	public create_table_options_hive_item(): Create_table_options_hive_itemContext {
		let localctx: Create_table_options_hive_itemContext = new Create_table_options_hive_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, HiveSql.RULE_create_table_options_hive_item);
		try {
			this.state = 1143;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 236:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1139;
				this.create_table_hive_row_format();
				}
				break;
			case 271:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1140;
				this.match(HiveSql.T_STORED);
				this.state = 1141;
				this.match(HiveSql.T_AS);
				this.state = 1142;
				this.ident();
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
	public create_table_hive_row_format(): Create_table_hive_row_formatContext {
		let localctx: Create_table_hive_row_formatContext = new Create_table_hive_row_formatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, HiveSql.RULE_create_table_hive_row_format);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1145;
			this.match(HiveSql.T_ROW);
			this.state = 1146;
			this.match(HiveSql.T_FORMAT);
			this.state = 1147;
			this.match(HiveSql.T_DELIMITED);
			this.state = 1151;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 97, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1148;
					this.create_table_hive_row_format_fields();
					}
					}
				}
				this.state = 1153;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 97, this._ctx);
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
	public create_table_hive_row_format_fields(): Create_table_hive_row_format_fieldsContext {
		let localctx: Create_table_hive_row_format_fieldsContext = new Create_table_hive_row_format_fieldsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, HiveSql.RULE_create_table_hive_row_format_fields);
		try {
			this.state = 1181;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 106:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1154;
				this.match(HiveSql.T_FIELDS);
				this.state = 1155;
				this.match(HiveSql.T_TERMINATED);
				this.state = 1156;
				this.match(HiveSql.T_BY);
				this.state = 1157;
				this.expr(0);
				this.state = 1161;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 98, this._ctx) ) {
				case 1:
					{
					this.state = 1158;
					this.match(HiveSql.T_ESCAPED);
					this.state = 1159;
					this.match(HiveSql.T_BY);
					this.state = 1160;
					this.expr(0);
					}
					break;
				}
				}
				break;
			case 41:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1163;
				this.match(HiveSql.T_COLLECTION);
				this.state = 1164;
				this.match(HiveSql.T_ITEMS);
				this.state = 1165;
				this.match(HiveSql.T_TERMINATED);
				this.state = 1166;
				this.match(HiveSql.T_BY);
				this.state = 1167;
				this.expr(0);
				}
				break;
			case 170:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1168;
				this.match(HiveSql.T_MAP);
				this.state = 1169;
				this.match(HiveSql.T_KEYS);
				this.state = 1170;
				this.match(HiveSql.T_TERMINATED);
				this.state = 1171;
				this.match(HiveSql.T_BY);
				this.state = 1172;
				this.expr(0);
				}
				break;
			case 160:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1173;
				this.match(HiveSql.T_LINES);
				this.state = 1174;
				this.match(HiveSql.T_TERMINATED);
				this.state = 1175;
				this.match(HiveSql.T_BY);
				this.state = 1176;
				this.expr(0);
				}
				break;
			case 190:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1177;
				this.match(HiveSql.T_NULL);
				this.state = 1178;
				this.match(HiveSql.T_DEFINED);
				this.state = 1179;
				this.match(HiveSql.T_AS);
				this.state = 1180;
				this.expr(0);
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
	public create_table_options_mssql_item(): Create_table_options_mssql_itemContext {
		let localctx: Create_table_options_mssql_itemContext = new Create_table_options_mssql_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, HiveSql.RULE_create_table_options_mssql_item);
		try {
			this.state = 1187;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 195:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1183;
				this.match(HiveSql.T_ON);
				this.state = 1184;
				this.ident();
				}
				break;
			case 282:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1185;
				this.match(HiveSql.T_TEXTIMAGE_ON);
				this.state = 1186;
				this.ident();
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
	public create_table_options_mysql_item(): Create_table_options_mysql_itemContext {
		let localctx: Create_table_options_mysql_itemContext = new Create_table_options_mysql_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, HiveSql.RULE_create_table_options_mysql_item);
		let _la: number;
		try {
			this.state = 1216;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 13:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1189;
				this.match(HiveSql.T_AUTO_INCREMENT);
				this.state = 1191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===346) {
					{
					this.state = 1190;
					this.match(HiveSql.T_EQUAL);
					}
				}

				this.state = 1193;
				this.expr(0);
				}
				break;
			case 43:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1194;
				this.match(HiveSql.T_COMMENT);
				this.state = 1196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===346) {
					{
					this.state = 1195;
					this.match(HiveSql.T_EQUAL);
					}
				}

				this.state = 1198;
				this.expr(0);
				}
				break;
			case 34:
			case 35:
			case 70:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===70) {
					{
					this.state = 1199;
					this.match(HiveSql.T_DEFAULT);
					}
				}

				this.state = 1205;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 34:
					{
					this.state = 1202;
					this.match(HiveSql.T_CHARACTER);
					this.state = 1203;
					this.match(HiveSql.T_SET);
					}
					break;
				case 35:
					{
					this.state = 1204;
					this.match(HiveSql.T_CHARSET);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===346) {
					{
					this.state = 1207;
					this.match(HiveSql.T_EQUAL);
					}
				}

				this.state = 1210;
				this.expr(0);
				}
				break;
			case 94:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1211;
				this.match(HiveSql.T_ENGINE);
				this.state = 1213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===346) {
					{
					this.state = 1212;
					this.match(HiveSql.T_EQUAL);
					}
				}

				this.state = 1215;
				this.expr(0);
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
	public alter_table_stmt(): Alter_table_stmtContext {
		let localctx: Alter_table_stmtContext = new Alter_table_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, HiveSql.RULE_alter_table_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1218;
			this.match(HiveSql.T_ALTER);
			this.state = 1219;
			this.match(HiveSql.T_TABLE);
			this.state = 1220;
			this.table_name();
			this.state = 1221;
			this.alter_table_item();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alter_table_item(): Alter_table_itemContext {
		let localctx: Alter_table_itemContext = new Alter_table_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, HiveSql.RULE_alter_table_item);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1223;
			this.alter_table_add_constraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alter_table_add_constraint(): Alter_table_add_constraintContext {
		let localctx: Alter_table_add_constraintContext = new Alter_table_add_constraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, HiveSql.RULE_alter_table_add_constraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1225;
			this.match(HiveSql.T_ADD2);
			this.state = 1228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49) {
				{
				this.state = 1226;
				this.match(HiveSql.T_CONSTRAINT);
				this.state = 1227;
				this.ident();
				}
			}

			this.state = 1230;
			this.alter_table_add_constraint_item();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alter_table_add_constraint_item(): Alter_table_add_constraint_itemContext {
		let localctx: Alter_table_add_constraint_itemContext = new Alter_table_add_constraint_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, HiveSql.RULE_alter_table_add_constraint_item);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1294;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 212:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1232;
				this.match(HiveSql.T_PRIMARY);
				this.state = 1233;
				this.match(HiveSql.T_KEY);
				this.state = 1235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===38) {
					{
					this.state = 1234;
					this.match(HiveSql.T_CLUSTERED);
					}
				}

				this.state = 1237;
				this.match(HiveSql.T_OPEN_P);
				this.state = 1238;
				this.ident();
				this.state = 1240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===10 || _la===78) {
					{
					this.state = 1239;
					_la = this._input.LA(1);
					if(!(_la===10 || _la===78)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 1249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===341) {
					{
					{
					this.state = 1242;
					this.match(HiveSql.T_COMMA);
					this.state = 1243;
					this.ident();
					this.state = 1245;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===10 || _la===78) {
						{
						this.state = 1244;
						_la = this._input.LA(1);
						if(!(_la===10 || _la===78)) {
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
					this.state = 1251;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1252;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 1254;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 113, this._ctx) ) {
				case 1:
					{
					this.state = 1253;
					this.match(HiveSql.T_ENABLE);
					}
					break;
				}
				this.state = 1257;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
				case 1:
					{
					this.state = 1256;
					this.index_storage_clause();
					}
					break;
				}
				}
				break;
			case 111:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1259;
				this.match(HiveSql.T_FOREIGN);
				this.state = 1260;
				this.match(HiveSql.T_KEY);
				this.state = 1261;
				this.match(HiveSql.T_OPEN_P);
				this.state = 1262;
				this.ident();
				this.state = 1267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===341) {
					{
					{
					this.state = 1263;
					this.match(HiveSql.T_COMMA);
					this.state = 1264;
					this.ident();
					}
					}
					this.state = 1269;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1270;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 1271;
				this.match(HiveSql.T_REFERENCES);
				this.state = 1272;
				this.table_name();
				this.state = 1273;
				this.match(HiveSql.T_OPEN_P);
				this.state = 1274;
				this.ident();
				this.state = 1279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===341) {
					{
					{
					this.state = 1275;
					this.match(HiveSql.T_COMMA);
					this.state = 1276;
					this.ident();
					}
					}
					this.state = 1281;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1282;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 1286;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 117, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1283;
						this.create_table_fk_action();
						}
						}
					}
					this.state = 1288;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 117, this._ctx);
				}
				}
				break;
			case 70:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1289;
				this.match(HiveSql.T_DEFAULT);
				this.state = 1290;
				this.expr(0);
				this.state = 1291;
				this.match(HiveSql.T_FOR);
				this.state = 1292;
				this.ident();
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
	public dtype(): DtypeContext {
		let localctx: DtypeContext = new DtypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, HiveSql.RULE_dtype);
		let _la: number;
		try {
			this.state = 1341;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1296;
				this.match(HiveSql.T_CHAR);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1297;
				this.match(HiveSql.T_BIGINT);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1298;
				this.match(HiveSql.T_BINARY_DOUBLE);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1299;
				this.match(HiveSql.T_BINARY_FLOAT);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1300;
				this.match(HiveSql.T_BINARY_INTEGER);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1301;
				this.match(HiveSql.T_BIT);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1302;
				this.match(HiveSql.T_DATE);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1303;
				this.match(HiveSql.T_DATETIME);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1304;
				this.match(HiveSql.T_DEC);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1305;
				this.match(HiveSql.T_DECIMAL);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 1306;
				this.match(HiveSql.T_DOUBLE);
				this.state = 1308;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
				case 1:
					{
					this.state = 1307;
					this.match(HiveSql.T_PRECISION);
					}
					break;
				}
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 1310;
				this.match(HiveSql.T_FLOAT);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 1311;
				this.match(HiveSql.T_INT);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 1312;
				this.match(HiveSql.T_INT2);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 1313;
				this.match(HiveSql.T_INT4);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 1314;
				this.match(HiveSql.T_INT8);
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 1315;
				this.match(HiveSql.T_INTEGER);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 1316;
				this.match(HiveSql.T_NCHAR);
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 1317;
				this.match(HiveSql.T_NVARCHAR);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 1318;
				this.match(HiveSql.T_NUMBER);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 1319;
				this.match(HiveSql.T_NUMERIC);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 1320;
				this.match(HiveSql.T_PLS_INTEGER);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 1321;
				this.match(HiveSql.T_REAL);
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 24);
				{
				this.state = 1322;
				this.match(HiveSql.T_RESULT_SET_LOCATOR);
				this.state = 1323;
				this.match(HiveSql.T_VARYING);
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 25);
				{
				this.state = 1324;
				this.match(HiveSql.T_SIMPLE_FLOAT);
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 26);
				{
				this.state = 1325;
				this.match(HiveSql.T_SIMPLE_DOUBLE);
				}
				break;
			case 27:
				this.enterOuterAlt(localctx, 27);
				{
				this.state = 1326;
				this.match(HiveSql.T_SIMPLE_INTEGER);
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 28);
				{
				this.state = 1327;
				this.match(HiveSql.T_SMALLINT);
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 29);
				{
				this.state = 1328;
				this.match(HiveSql.T_SMALLDATETIME);
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 30);
				{
				this.state = 1329;
				this.match(HiveSql.T_STRING);
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 31);
				{
				this.state = 1330;
				this.match(HiveSql.T_SYS_REFCURSOR);
				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 32);
				{
				this.state = 1331;
				this.match(HiveSql.T_TIMESTAMP);
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 33);
				{
				this.state = 1332;
				this.match(HiveSql.T_TINYINT);
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 34);
				{
				this.state = 1333;
				this.match(HiveSql.T_VARCHAR);
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 35);
				{
				this.state = 1334;
				this.match(HiveSql.T_VARCHAR2);
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 36);
				{
				this.state = 1335;
				this.match(HiveSql.T_XML);
				}
				break;
			case 37:
				this.enterOuterAlt(localctx, 37);
				{
				this.state = 1336;
				this.ident();
				this.state = 1339;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
				case 1:
					{
					this.state = 1337;
					this.match(HiveSql.T_PRECENT);
					this.state = 1338;
					_la = this._input.LA(1);
					if(!(_la===238 || _la===292)) {
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
	public dtype_len(): Dtype_lenContext {
		let localctx: Dtype_lenContext = new Dtype_lenContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, HiveSql.RULE_dtype_len);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1343;
			this.match(HiveSql.T_OPEN_P);
			this.state = 1344;
			_la = this._input.LA(1);
			if(!(_la===172 || _la===370)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26 || _la===33) {
				{
				this.state = 1345;
				_la = this._input.LA(1);
				if(!(_la===26 || _la===33)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 1350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===341) {
				{
				this.state = 1348;
				this.match(HiveSql.T_COMMA);
				this.state = 1349;
				this.match(HiveSql.L_INT);
				}
			}

			this.state = 1352;
			this.match(HiveSql.T_CLOSE_P);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dtype_attr(): Dtype_attrContext {
		let localctx: Dtype_attrContext = new Dtype_attrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, HiveSql.RULE_dtype_attr);
		let _la: number;
		try {
			this.state = 1365;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===188) {
					{
					this.state = 1354;
					this.match(HiveSql.T_NOT);
					}
				}

				this.state = 1357;
				this.match(HiveSql.T_NULL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1358;
				this.match(HiveSql.T_CHARACTER);
				this.state = 1359;
				this.match(HiveSql.T_SET);
				this.state = 1360;
				this.ident();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===188) {
					{
					this.state = 1361;
					this.match(HiveSql.T_NOT);
					}
				}

				this.state = 1364;
				_la = this._input.LA(1);
				if(!(_la===31 || _la===57)) {
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
	public dtype_default(): Dtype_defaultContext {
		let localctx: Dtype_defaultContext = new Dtype_defaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, HiveSql.RULE_dtype_default);
		let _la: number;
		try {
			this.state = 1379;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 340:
			case 346:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===340) {
					{
					this.state = 1367;
					this.match(HiveSql.T_COLON);
					}
				}

				this.state = 1370;
				this.match(HiveSql.T_EQUAL);
				this.state = 1371;
				this.expr(0);
				}
				break;
			case 70:
			case 309:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===309) {
					{
					this.state = 1372;
					this.match(HiveSql.T_WITH);
					}
				}

				this.state = 1375;
				this.match(HiveSql.T_DEFAULT);
				this.state = 1377;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
				case 1:
					{
					this.state = 1376;
					this.expr(0);
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
	public create_database_stmt(): Create_database_stmtContext {
		let localctx: Create_database_stmtContext = new Create_database_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, HiveSql.RULE_create_database_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1381;
			this.match(HiveSql.T_CREATE);
			this.state = 1382;
			_la = this._input.LA(1);
			if(!(_la===61 || _la===244)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1386;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				{
				this.state = 1383;
				this.match(HiveSql.T_IF);
				this.state = 1384;
				this.match(HiveSql.T_NOT);
				this.state = 1385;
				this.match(HiveSql.T_EXISTS);
				}
				break;
			}
			this.state = 1388;
			this.expr(0);
			this.state = 1392;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 132, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1389;
					this.create_database_option();
					}
					}
				}
				this.state = 1394;
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
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public create_database_option(): Create_database_optionContext {
		let localctx: Create_database_optionContext = new Create_database_optionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, HiveSql.RULE_create_database_option);
		try {
			this.state = 1399;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 43:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1395;
				this.match(HiveSql.T_COMMENT);
				this.state = 1396;
				this.expr(0);
				}
				break;
			case 162:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1397;
				this.match(HiveSql.T_LOCATION);
				this.state = 1398;
				this.expr(0);
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
	public create_function_stmt(): Create_function_stmtContext {
		let localctx: Create_function_stmtContext = new Create_function_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, HiveSql.RULE_create_function_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1408;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				{
				this.state = 1401;
				this.match(HiveSql.T_ALTER);
				}
				break;
			case 54:
				{
				this.state = 1402;
				this.match(HiveSql.T_CREATE);
				this.state = 1405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===198) {
					{
					this.state = 1403;
					this.match(HiveSql.T_OR);
					this.state = 1404;
					this.match(HiveSql.T_REPLACE);
					}
				}

				}
				break;
			case 224:
				{
				this.state = 1407;
				this.match(HiveSql.T_REPLACE);
				}
				break;
			case 116:
				break;
			default:
				break;
			}
			this.state = 1410;
			this.match(HiveSql.T_FUNCTION);
			this.state = 1411;
			this.ident();
			this.state = 1413;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				{
				this.state = 1412;
				this.create_routine_params();
				}
				break;
			}
			this.state = 1415;
			this.create_function_return();
			this.state = 1417;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				{
				this.state = 1416;
				_la = this._input.LA(1);
				if(!(_la===9 || _la===148)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this.state = 1420;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				{
				this.state = 1419;
				this.declare_block_inplace();
				}
				break;
			}
			this.state = 1422;
			this.single_block_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public create_function_return(): Create_function_returnContext {
		let localctx: Create_function_returnContext = new Create_function_returnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, HiveSql.RULE_create_function_return);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1424;
			_la = this._input.LA(1);
			if(!(_la===229 || _la===230)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1425;
			this.dtype();
			this.state = 1427;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				{
				this.state = 1426;
				this.dtype_len();
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
	public create_package_stmt(): Create_package_stmtContext {
		let localctx: Create_package_stmtContext = new Create_package_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, HiveSql.RULE_create_package_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1436;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				{
				this.state = 1429;
				this.match(HiveSql.T_ALTER);
				}
				break;
			case 54:
				{
				this.state = 1430;
				this.match(HiveSql.T_CREATE);
				this.state = 1433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===198) {
					{
					this.state = 1431;
					this.match(HiveSql.T_OR);
					this.state = 1432;
					this.match(HiveSql.T_REPLACE);
					}
				}

				}
				break;
			case 224:
				{
				this.state = 1435;
				this.match(HiveSql.T_REPLACE);
				}
				break;
			case 205:
				break;
			default:
				break;
			}
			this.state = 1438;
			this.match(HiveSql.T_PACKAGE);
			this.state = 1439;
			this.ident();
			this.state = 1440;
			_la = this._input.LA(1);
			if(!(_la===9 || _la===148)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1441;
			this.package_spec();
			this.state = 1442;
			this.match(HiveSql.T_END);
			this.state = 1446;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 1443;
				this.ident();
				this.state = 1444;
				this.match(HiveSql.T_SEMICOLON);
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
	public package_spec(): Package_specContext {
		let localctx: Package_specContext = new Package_specContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, HiveSql.RULE_package_spec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1448;
			this.package_spec_item();
			this.state = 1449;
			this.match(HiveSql.T_SEMICOLON);
			this.state = 1455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4292870142) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 3523215359) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 3221225471) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 4294836223) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & 4294950911) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & 3758096375) !== 0) || ((((_la - 288)) & ~0x1F) === 0 && ((1 << (_la - 288)) & 4294180815) !== 0) || ((((_la - 320)) & ~0x1F) === 0 && ((1 << (_la - 320)) & 522271) !== 0) || _la===367) {
				{
				{
				this.state = 1450;
				this.package_spec_item();
				this.state = 1451;
				this.match(HiveSql.T_SEMICOLON);
				}
				}
				this.state = 1457;
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
	public package_spec_item(): Package_spec_itemContext {
		let localctx: Package_spec_itemContext = new Package_spec_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, HiveSql.RULE_package_spec_item);
		let _la: number;
		try {
			this.state = 1471;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1458;
				this.declare_stmt_item();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1459;
				this.match(HiveSql.T_FUNCTION);
				this.state = 1460;
				this.ident();
				this.state = 1462;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 144, this._ctx) ) {
				case 1:
					{
					this.state = 1461;
					this.create_routine_params();
					}
					break;
				}
				this.state = 1464;
				this.create_function_return();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1466;
				_la = this._input.LA(1);
				if(!(_la===214 || _la===215)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1467;
				this.ident();
				this.state = 1469;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
				case 1:
					{
					this.state = 1468;
					this.create_routine_params();
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
	public create_package_body_stmt(): Create_package_body_stmtContext {
		let localctx: Create_package_body_stmtContext = new Create_package_body_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, HiveSql.RULE_create_package_body_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1480;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				{
				this.state = 1473;
				this.match(HiveSql.T_ALTER);
				}
				break;
			case 54:
				{
				this.state = 1474;
				this.match(HiveSql.T_CREATE);
				this.state = 1477;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===198) {
					{
					this.state = 1475;
					this.match(HiveSql.T_OR);
					this.state = 1476;
					this.match(HiveSql.T_REPLACE);
					}
				}

				}
				break;
			case 224:
				{
				this.state = 1479;
				this.match(HiveSql.T_REPLACE);
				}
				break;
			case 205:
				break;
			default:
				break;
			}
			this.state = 1482;
			this.match(HiveSql.T_PACKAGE);
			this.state = 1483;
			this.match(HiveSql.T_BODY);
			this.state = 1484;
			this.ident();
			this.state = 1485;
			_la = this._input.LA(1);
			if(!(_la===9 || _la===148)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1486;
			this.package_body();
			this.state = 1487;
			this.match(HiveSql.T_END);
			this.state = 1491;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				{
				this.state = 1488;
				this.ident();
				this.state = 1489;
				this.match(HiveSql.T_SEMICOLON);
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
	public package_body(): Package_bodyContext {
		let localctx: Package_bodyContext = new Package_bodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, HiveSql.RULE_package_body);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1493;
			this.package_body_item();
			this.state = 1494;
			this.match(HiveSql.T_SEMICOLON);
			this.state = 1500;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4292870142) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 3523215359) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 3221225471) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 4294836223) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & 4294950911) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & 3758096375) !== 0) || ((((_la - 288)) & ~0x1F) === 0 && ((1 << (_la - 288)) & 4294180815) !== 0) || ((((_la - 320)) & ~0x1F) === 0 && ((1 << (_la - 320)) & 522271) !== 0) || _la===367) {
				{
				{
				this.state = 1495;
				this.package_body_item();
				this.state = 1496;
				this.match(HiveSql.T_SEMICOLON);
				}
				}
				this.state = 1502;
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
	public package_body_item(): Package_body_itemContext {
		let localctx: Package_body_itemContext = new Package_body_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, HiveSql.RULE_package_body_item);
		try {
			this.state = 1506;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1503;
				this.declare_stmt_item();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1504;
				this.create_function_stmt();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1505;
				this.create_procedure_stmt();
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
	public create_procedure_stmt(): Create_procedure_stmtContext {
		let localctx: Create_procedure_stmtContext = new Create_procedure_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, HiveSql.RULE_create_procedure_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1515;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				{
				this.state = 1508;
				this.match(HiveSql.T_ALTER);
				}
				break;
			case 54:
				{
				this.state = 1509;
				this.match(HiveSql.T_CREATE);
				this.state = 1512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===198) {
					{
					this.state = 1510;
					this.match(HiveSql.T_OR);
					this.state = 1511;
					this.match(HiveSql.T_REPLACE);
					}
				}

				}
				break;
			case 224:
				{
				this.state = 1514;
				this.match(HiveSql.T_REPLACE);
				}
				break;
			case 214:
			case 215:
				break;
			default:
				break;
			}
			this.state = 1517;
			_la = this._input.LA(1);
			if(!(_la===214 || _la===215)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1518;
			this.ident();
			this.state = 1520;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				{
				this.state = 1519;
				this.create_routine_params();
				}
				break;
			}
			this.state = 1523;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				{
				this.state = 1522;
				this.create_routine_options();
				}
				break;
			}
			this.state = 1526;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				{
				this.state = 1525;
				_la = this._input.LA(1);
				if(!(_la===9 || _la===148)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this.state = 1529;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				{
				this.state = 1528;
				this.declare_block_inplace();
				}
				break;
			}
			this.state = 1532;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				{
				this.state = 1531;
				this.label();
				}
				break;
			}
			this.state = 1534;
			this.proc_block();
			this.state = 1538;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				{
				this.state = 1535;
				this.ident();
				this.state = 1536;
				this.match(HiveSql.T_SEMICOLON);
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
	public create_routine_params(): Create_routine_paramsContext {
		let localctx: Create_routine_paramsContext = new Create_routine_paramsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, HiveSql.RULE_create_routine_params);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1562;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1540;
				this.match(HiveSql.T_OPEN_P);
				this.state = 1541;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1542;
				this.match(HiveSql.T_OPEN_P);
				this.state = 1543;
				this.create_routine_param_item();
				this.state = 1548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===341) {
					{
					{
					this.state = 1544;
					this.match(HiveSql.T_COMMA);
					this.state = 1545;
					this.create_routine_param_item();
					}
					}
					this.state = 1550;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1551;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1553;
				if (!(this._input.LT(1).text.toUpperCase() !== "IS" &&
				        this._input.LT(1).text.toUpperCase() !== "AS" &&
				        !(this._input.LT(1).text.toUpperCase() ==="DYNAMIC" && this._input.LT(2).text.toUpperCase() === "RESULT")
				        )) {
					throw this.createFailedPredicateException("this._input.LT(1).text.toUpperCase() !== \"IS\" &&\n        this._input.LT(1).text.toUpperCase() !== \"AS\" &&\n        !(this._input.LT(1).text.toUpperCase() ===\"DYNAMIC\" && this._input.LT(2).text.toUpperCase() === \"RESULT\")\n        ");
				}
				this.state = 1554;
				this.create_routine_param_item();
				this.state = 1559;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1555;
						this.match(HiveSql.T_COMMA);
						this.state = 1556;
						this.create_routine_param_item();
						}
						}
					}
					this.state = 1561;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
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
	public create_routine_param_item(): Create_routine_param_itemContext {
		let localctx: Create_routine_param_itemContext = new Create_routine_param_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, HiveSql.RULE_create_routine_param_item);
		try {
			let _alt: number;
			this.state = 1606;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 171, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1569;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 163, this._ctx) ) {
				case 1:
					{
					this.state = 1564;
					this.match(HiveSql.T_IN);
					}
					break;
				case 2:
					{
					this.state = 1565;
					this.match(HiveSql.T_OUT);
					}
					break;
				case 3:
					{
					this.state = 1566;
					this.match(HiveSql.T_INOUT);
					}
					break;
				case 4:
					{
					this.state = 1567;
					this.match(HiveSql.T_IN);
					this.state = 1568;
					this.match(HiveSql.T_OUT);
					}
					break;
				}
				this.state = 1571;
				this.ident();
				this.state = 1572;
				this.dtype();
				this.state = 1574;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 164, this._ctx) ) {
				case 1:
					{
					this.state = 1573;
					this.dtype_len();
					}
					break;
				}
				this.state = 1579;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 165, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1576;
						this.dtype_attr();
						}
						}
					}
					this.state = 1581;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 165, this._ctx);
				}
				this.state = 1583;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 166, this._ctx) ) {
				case 1:
					{
					this.state = 1582;
					this.dtype_default();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1585;
				this.ident();
				this.state = 1591;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 167, this._ctx) ) {
				case 1:
					{
					this.state = 1586;
					this.match(HiveSql.T_IN);
					}
					break;
				case 2:
					{
					this.state = 1587;
					this.match(HiveSql.T_OUT);
					}
					break;
				case 3:
					{
					this.state = 1588;
					this.match(HiveSql.T_INOUT);
					}
					break;
				case 4:
					{
					this.state = 1589;
					this.match(HiveSql.T_IN);
					this.state = 1590;
					this.match(HiveSql.T_OUT);
					}
					break;
				}
				this.state = 1593;
				this.dtype();
				this.state = 1595;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 168, this._ctx) ) {
				case 1:
					{
					this.state = 1594;
					this.dtype_len();
					}
					break;
				}
				this.state = 1600;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 169, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1597;
						this.dtype_attr();
						}
						}
					}
					this.state = 1602;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 169, this._ctx);
				}
				this.state = 1604;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 170, this._ctx) ) {
				case 1:
					{
					this.state = 1603;
					this.dtype_default();
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
	public create_routine_options(): Create_routine_optionsContext {
		let localctx: Create_routine_optionsContext = new Create_routine_optionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, HiveSql.RULE_create_routine_options);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1609;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1608;
					this.create_routine_option();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1611;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 172, this._ctx);
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
	public create_routine_option(): Create_routine_optionContext {
		let localctx: Create_routine_optionContext = new Create_routine_optionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, HiveSql.RULE_create_routine_option);
		let _la: number;
		try {
			this.state = 1624;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 155:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1613;
				this.match(HiveSql.T_LANGUAGE);
				this.state = 1614;
				this.match(HiveSql.T_SQL);
				}
				break;
			case 262:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1615;
				this.match(HiveSql.T_SQL);
				this.state = 1616;
				this.match(HiveSql.T_SECURITY);
				this.state = 1617;
				_la = this._input.LA(1);
				if(!(_la===56 || _la===73 || _la===147 || _la===204)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 88:
			case 227:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1619;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===88) {
					{
					this.state = 1618;
					this.match(HiveSql.T_DYNAMIC);
					}
				}

				this.state = 1621;
				this.match(HiveSql.T_RESULT);
				this.state = 1622;
				this.match(HiveSql.T_SETS);
				this.state = 1623;
				this.match(HiveSql.L_INT);
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
	public drop_stmt(): Drop_stmtContext {
		let localctx: Drop_stmtContext = new Drop_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, HiveSql.RULE_drop_stmt);
		let _la: number;
		try {
			this.state = 1640;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1626;
				this.match(HiveSql.T_DROP);
				this.state = 1627;
				this.match(HiveSql.T_TABLE);
				this.state = 1630;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
				case 1:
					{
					this.state = 1628;
					this.match(HiveSql.T_IF);
					this.state = 1629;
					this.match(HiveSql.T_EXISTS);
					}
					break;
				}
				this.state = 1632;
				this.table_name();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1633;
				this.match(HiveSql.T_DROP);
				this.state = 1634;
				_la = this._input.LA(1);
				if(!(_la===61 || _la===244)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1637;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 176, this._ctx) ) {
				case 1:
					{
					this.state = 1635;
					this.match(HiveSql.T_IF);
					this.state = 1636;
					this.match(HiveSql.T_EXISTS);
					}
					break;
				}
				this.state = 1639;
				this.expr(0);
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
	public end_transaction_stmt(): End_transaction_stmtContext {
		let localctx: End_transaction_stmtContext = new End_transaction_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, HiveSql.RULE_end_transaction_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1642;
			this.match(HiveSql.T_END);
			this.state = 1643;
			this.match(HiveSql.T_TRANSACTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exec_stmt(): Exec_stmtContext {
		let localctx: Exec_stmtContext = new Exec_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, HiveSql.RULE_exec_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1645;
			_la = this._input.LA(1);
			if(!(_la===97 || _la===98)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1647;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1646;
				this.match(HiveSql.T_IMMEDIATE);
				}
				break;
			}
			this.state = 1649;
			this.expr(0);
			this.state = 1655;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				{
				this.state = 1650;
				this.match(HiveSql.T_OPEN_P);
				this.state = 1651;
				this.expr_func_params();
				this.state = 1652;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 2:
				{
				this.state = 1654;
				this.expr_func_params();
				}
				break;
			}
			this.state = 1666;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				{
				this.state = 1657;
				this.match(HiveSql.T_INTO);
				this.state = 1658;
				this.match(HiveSql.L_ID);
				this.state = 1663;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 180, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1659;
						this.match(HiveSql.T_COMMA);
						this.state = 1660;
						this.match(HiveSql.L_ID);
						}
						}
					}
					this.state = 1665;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 180, this._ctx);
				}
				}
				break;
			}
			this.state = 1669;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 182, this._ctx) ) {
			case 1:
				{
				this.state = 1668;
				this.using_clause();
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
	public if_stmt(): If_stmtContext {
		let localctx: If_stmtContext = new If_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, HiveSql.RULE_if_stmt);
		try {
			this.state = 1674;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 183, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1671;
				this.if_plsql_stmt();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1672;
				this.if_tsql_stmt();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1673;
				this.if_bteq_stmt();
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
	public if_plsql_stmt(): If_plsql_stmtContext {
		let localctx: If_plsql_stmtContext = new If_plsql_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, HiveSql.RULE_if_plsql_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1676;
			this.match(HiveSql.T_IF);
			this.state = 1677;
			this.bool_expr(0);
			this.state = 1678;
			this.match(HiveSql.T_THEN);
			this.state = 1679;
			this.block();
			this.state = 1683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===90 || _la===91) {
				{
				{
				this.state = 1680;
				this.elseif_block();
				}
				}
				this.state = 1685;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1687;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===89) {
				{
				this.state = 1686;
				this.else_block();
				}
			}

			this.state = 1689;
			this.match(HiveSql.T_END);
			this.state = 1690;
			this.match(HiveSql.T_IF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public if_tsql_stmt(): If_tsql_stmtContext {
		let localctx: If_tsql_stmtContext = new If_tsql_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, HiveSql.RULE_if_tsql_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1692;
			this.match(HiveSql.T_IF);
			this.state = 1693;
			this.bool_expr(0);
			this.state = 1694;
			this.single_block_stmt();
			this.state = 1697;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				{
				this.state = 1695;
				this.match(HiveSql.T_ELSE);
				this.state = 1696;
				this.single_block_stmt();
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
	public if_bteq_stmt(): If_bteq_stmtContext {
		let localctx: If_bteq_stmtContext = new If_bteq_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, HiveSql.RULE_if_bteq_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1699;
			this.match(HiveSql.T_DOT);
			this.state = 1700;
			this.match(HiveSql.T_IF);
			this.state = 1701;
			this.bool_expr(0);
			this.state = 1702;
			this.match(HiveSql.T_THEN);
			this.state = 1703;
			this.single_block_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elseif_block(): Elseif_blockContext {
		let localctx: Elseif_blockContext = new Elseif_blockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, HiveSql.RULE_elseif_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1705;
			_la = this._input.LA(1);
			if(!(_la===90 || _la===91)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1706;
			this.bool_expr(0);
			this.state = 1707;
			this.match(HiveSql.T_THEN);
			this.state = 1708;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public else_block(): Else_blockContext {
		let localctx: Else_blockContext = new Else_blockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, HiveSql.RULE_else_block);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1710;
			this.match(HiveSql.T_ELSE);
			this.state = 1711;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public include_stmt(): Include_stmtContext {
		let localctx: Include_stmtContext = new Include_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, HiveSql.RULE_include_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1713;
			this.match(HiveSql.T_INCLUDE);
			this.state = 1716;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 187, this._ctx) ) {
			case 1:
				{
				this.state = 1714;
				this.file_name();
				}
				break;
			case 2:
				{
				this.state = 1715;
				this.expr(0);
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
	public insert_stmt(): Insert_stmtContext {
		let localctx: Insert_stmtContext = new Insert_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, HiveSql.RULE_insert_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1718;
			this.match(HiveSql.T_INSERT);
			this.state = 1725;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 203:
				{
				this.state = 1719;
				this.match(HiveSql.T_OVERWRITE);
				this.state = 1720;
				this.match(HiveSql.T_TABLE);
				}
				break;
			case 146:
				{
				this.state = 1721;
				this.match(HiveSql.T_INTO);
				this.state = 1723;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 188, this._ctx) ) {
				case 1:
					{
					this.state = 1722;
					this.match(HiveSql.T_TABLE);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1727;
			this.table_name();
			this.state = 1729;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				{
				this.state = 1728;
				this.insert_stmt_cols();
				}
				break;
			}
			this.state = 1733;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 249:
			case 250:
			case 309:
			case 360:
				{
				this.state = 1731;
				this.select_stmt();
				}
				break;
			case 300:
				{
				this.state = 1732;
				this.insert_stmt_rows();
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
	public insert_stmt_cols(): Insert_stmt_colsContext {
		let localctx: Insert_stmt_colsContext = new Insert_stmt_colsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, HiveSql.RULE_insert_stmt_cols);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1735;
			this.match(HiveSql.T_OPEN_P);
			this.state = 1736;
			this.ident();
			this.state = 1741;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===341) {
				{
				{
				this.state = 1737;
				this.match(HiveSql.T_COMMA);
				this.state = 1738;
				this.ident();
				}
				}
				this.state = 1743;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1744;
			this.match(HiveSql.T_CLOSE_P);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public insert_stmt_rows(): Insert_stmt_rowsContext {
		let localctx: Insert_stmt_rowsContext = new Insert_stmt_rowsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, HiveSql.RULE_insert_stmt_rows);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1746;
			this.match(HiveSql.T_VALUES);
			this.state = 1747;
			this.insert_stmt_row();
			this.state = 1752;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 193, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1748;
					this.match(HiveSql.T_COMMA);
					this.state = 1749;
					this.insert_stmt_row();
					}
					}
				}
				this.state = 1754;
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
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public insert_stmt_row(): Insert_stmt_rowContext {
		let localctx: Insert_stmt_rowContext = new Insert_stmt_rowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, HiveSql.RULE_insert_stmt_row);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1755;
			this.match(HiveSql.T_OPEN_P);
			this.state = 1756;
			this.expr(0);
			this.state = 1761;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===341) {
				{
				{
				this.state = 1757;
				this.match(HiveSql.T_COMMA);
				this.state = 1758;
				this.expr(0);
				}
				}
				this.state = 1763;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1764;
			this.match(HiveSql.T_CLOSE_P);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public insert_directory_stmt(): Insert_directory_stmtContext {
		let localctx: Insert_directory_stmtContext = new Insert_directory_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, HiveSql.RULE_insert_directory_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1766;
			this.match(HiveSql.T_INSERT);
			this.state = 1767;
			this.match(HiveSql.T_OVERWRITE);
			this.state = 1769;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===161) {
				{
				this.state = 1768;
				this.match(HiveSql.T_LOCAL);
				}
			}

			this.state = 1771;
			this.match(HiveSql.T_DIRECTORY);
			this.state = 1772;
			this.expr_file();
			this.state = 1773;
			this.expr_select();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exit_stmt(): Exit_stmtContext {
		let localctx: Exit_stmtContext = new Exit_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, HiveSql.RULE_exit_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1775;
			this.match(HiveSql.T_EXIT);
			this.state = 1777;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
			case 1:
				{
				this.state = 1776;
				this.match(HiveSql.L_ID);
				}
				break;
			}
			this.state = 1781;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				{
				this.state = 1779;
				this.match(HiveSql.T_WHEN);
				this.state = 1780;
				this.bool_expr(0);
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
	public get_diag_stmt(): Get_diag_stmtContext {
		let localctx: Get_diag_stmtContext = new Get_diag_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, HiveSql.RULE_get_diag_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1783;
			this.match(HiveSql.T_GET);
			this.state = 1784;
			this.match(HiveSql.T_DIAGNOSTICS);
			this.state = 1785;
			this.get_diag_stmt_item();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public get_diag_stmt_item(): Get_diag_stmt_itemContext {
		let localctx: Get_diag_stmt_itemContext = new Get_diag_stmt_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, HiveSql.RULE_get_diag_stmt_item);
		try {
			this.state = 1789;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 198, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1787;
				this.get_diag_stmt_exception_item();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1788;
				this.get_diag_stmt_rowcount_item();
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
	public get_diag_stmt_exception_item(): Get_diag_stmt_exception_itemContext {
		let localctx: Get_diag_stmt_exception_itemContext = new Get_diag_stmt_exception_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, HiveSql.RULE_get_diag_stmt_exception_item);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1791;
			this.match(HiveSql.T_EXCEPTION);
			this.state = 1792;
			this.match(HiveSql.L_INT);
			this.state = 1793;
			this.ident();
			this.state = 1794;
			this.match(HiveSql.T_EQUAL);
			this.state = 1795;
			this.match(HiveSql.T_MESSAGE_TEXT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public get_diag_stmt_rowcount_item(): Get_diag_stmt_rowcount_itemContext {
		let localctx: Get_diag_stmt_rowcount_itemContext = new Get_diag_stmt_rowcount_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, HiveSql.RULE_get_diag_stmt_rowcount_item);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1797;
			this.ident();
			this.state = 1798;
			this.match(HiveSql.T_EQUAL);
			this.state = 1799;
			this.match(HiveSql.T_ROW_COUNT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public grant_stmt(): Grant_stmtContext {
		let localctx: Grant_stmtContext = new Grant_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, HiveSql.RULE_grant_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1801;
			this.match(HiveSql.T_GRANT);
			this.state = 1802;
			this.grant_stmt_item();
			this.state = 1807;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===341) {
				{
				{
				this.state = 1803;
				this.match(HiveSql.T_COMMA);
				this.state = 1804;
				this.grant_stmt_item();
				}
				}
				this.state = 1809;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1810;
			this.match(HiveSql.T_TO);
			this.state = 1811;
			this.match(HiveSql.T_ROLE);
			this.state = 1812;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public grant_stmt_item(): Grant_stmt_itemContext {
		let localctx: Grant_stmt_itemContext = new Grant_stmt_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, HiveSql.RULE_grant_stmt_item);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1814;
			this.match(HiveSql.T_EXECUTE);
			this.state = 1815;
			this.match(HiveSql.T_ON);
			this.state = 1816;
			this.match(HiveSql.T_PROCEDURE);
			this.state = 1817;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public leave_stmt(): Leave_stmtContext {
		let localctx: Leave_stmtContext = new Leave_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, HiveSql.RULE_leave_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1819;
			this.match(HiveSql.T_LEAVE);
			this.state = 1821;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 200, this._ctx) ) {
			case 1:
				{
				this.state = 1820;
				this.match(HiveSql.L_ID);
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
	public map_object_stmt(): Map_object_stmtContext {
		let localctx: Map_object_stmtContext = new Map_object_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, HiveSql.RULE_map_object_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1823;
			this.match(HiveSql.T_MAP);
			this.state = 1824;
			this.match(HiveSql.T_OBJECT);
			this.state = 1825;
			this.expr(0);
			this.state = 1828;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 201, this._ctx) ) {
			case 1:
				{
				this.state = 1826;
				this.match(HiveSql.T_TO);
				this.state = 1827;
				this.expr(0);
				}
				break;
			}
			this.state = 1832;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				{
				this.state = 1830;
				this.match(HiveSql.T_AT);
				this.state = 1831;
				this.expr(0);
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
	public open_stmt(): Open_stmtContext {
		let localctx: Open_stmtContext = new Open_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, HiveSql.RULE_open_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1834;
			this.match(HiveSql.T_OPEN);
			this.state = 1835;
			this.match(HiveSql.L_ID);
			this.state = 1841;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 204, this._ctx) ) {
			case 1:
				{
				this.state = 1836;
				this.match(HiveSql.T_FOR);
				this.state = 1839;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
				case 1:
					{
					this.state = 1837;
					this.select_stmt();
					}
					break;
				case 2:
					{
					this.state = 1838;
					this.expr(0);
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
	public fetch_stmt(): Fetch_stmtContext {
		let localctx: Fetch_stmtContext = new Fetch_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, HiveSql.RULE_fetch_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1843;
			this.match(HiveSql.T_FETCH);
			this.state = 1845;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===114) {
				{
				this.state = 1844;
				this.match(HiveSql.T_FROM);
				}
			}

			this.state = 1847;
			this.match(HiveSql.L_ID);
			this.state = 1848;
			this.match(HiveSql.T_INTO);
			this.state = 1849;
			this.match(HiveSql.L_ID);
			this.state = 1854;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 206, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1850;
					this.match(HiveSql.T_COMMA);
					this.state = 1851;
					this.match(HiveSql.L_ID);
					}
					}
				}
				this.state = 1856;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 206, this._ctx);
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
	public collect_stats_stmt(): Collect_stats_stmtContext {
		let localctx: Collect_stats_stmtContext = new Collect_stats_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, HiveSql.RULE_collect_stats_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1857;
			this.match(HiveSql.T_COLLECT);
			this.state = 1858;
			_la = this._input.LA(1);
			if(!(_la===267 || _la===268)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1859;
			this.match(HiveSql.T_ON);
			this.state = 1860;
			this.table_name();
			this.state = 1862;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 207, this._ctx) ) {
			case 1:
				{
				this.state = 1861;
				this.collect_stats_clause();
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
	public collect_stats_clause(): Collect_stats_clauseContext {
		let localctx: Collect_stats_clauseContext = new Collect_stats_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, HiveSql.RULE_collect_stats_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1864;
			this.match(HiveSql.T_COLUMN);
			this.state = 1865;
			this.match(HiveSql.T_OPEN_P);
			this.state = 1866;
			this.ident();
			this.state = 1871;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===341) {
				{
				{
				this.state = 1867;
				this.match(HiveSql.T_COMMA);
				this.state = 1868;
				this.ident();
				}
				}
				this.state = 1873;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1874;
			this.match(HiveSql.T_CLOSE_P);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public close_stmt(): Close_stmtContext {
		let localctx: Close_stmtContext = new Close_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, HiveSql.RULE_close_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1876;
			this.match(HiveSql.T_CLOSE);
			this.state = 1877;
			this.match(HiveSql.L_ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cmp_stmt(): Cmp_stmtContext {
		let localctx: Cmp_stmtContext = new Cmp_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, HiveSql.RULE_cmp_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1879;
			this.match(HiveSql.T_CMP);
			this.state = 1880;
			_la = this._input.LA(1);
			if(!(_la===239 || _la===275)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1881;
			this.cmp_source();
			this.state = 1882;
			this.match(HiveSql.T_COMMA);
			this.state = 1883;
			this.cmp_source();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cmp_source(): Cmp_sourceContext {
		let localctx: Cmp_sourceContext = new Cmp_sourceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, HiveSql.RULE_cmp_source);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1893;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 92:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
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
			case 122:
			case 123:
			case 124:
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
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
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
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
			case 200:
			case 201:
			case 202:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 210:
			case 211:
			case 212:
			case 213:
			case 214:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 225:
			case 226:
			case 227:
			case 228:
			case 229:
			case 230:
			case 231:
			case 232:
			case 233:
			case 234:
			case 235:
			case 236:
			case 237:
			case 239:
			case 240:
			case 241:
			case 242:
			case 243:
			case 244:
			case 245:
			case 246:
			case 247:
			case 248:
			case 249:
			case 250:
			case 251:
			case 252:
			case 253:
			case 254:
			case 255:
			case 256:
			case 257:
			case 258:
			case 260:
			case 261:
			case 262:
			case 263:
			case 264:
			case 265:
			case 266:
			case 267:
			case 268:
			case 269:
			case 270:
			case 271:
			case 272:
			case 273:
			case 274:
			case 275:
			case 276:
			case 277:
			case 278:
			case 279:
			case 280:
			case 281:
			case 282:
			case 283:
			case 284:
			case 286:
			case 287:
			case 288:
			case 289:
			case 290:
			case 291:
			case 294:
			case 295:
			case 296:
			case 297:
			case 298:
			case 299:
			case 300:
			case 301:
			case 302:
			case 303:
			case 304:
			case 305:
			case 308:
			case 309:
			case 310:
			case 311:
			case 312:
			case 313:
			case 314:
			case 315:
			case 316:
			case 317:
			case 318:
			case 319:
			case 320:
			case 321:
			case 322:
			case 323:
			case 324:
			case 331:
			case 332:
			case 333:
			case 334:
			case 335:
			case 336:
			case 337:
			case 338:
			case 367:
				{
				this.state = 1885;
				this.table_name();
				this.state = 1887;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
				case 1:
					{
					this.state = 1886;
					this.where_clause();
					}
					break;
				}
				}
				break;
			case 360:
				{
				this.state = 1889;
				this.match(HiveSql.T_OPEN_P);
				this.state = 1890;
				this.select_stmt();
				this.state = 1891;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1897;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				{
				this.state = 1895;
				this.match(HiveSql.T_AT);
				this.state = 1896;
				this.ident();
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
	public copy_from_local_stmt(): Copy_from_local_stmtContext {
		let localctx: Copy_from_local_stmtContext = new Copy_from_local_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, HiveSql.RULE_copy_from_local_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1899;
			this.match(HiveSql.T_COPY);
			this.state = 1900;
			this.match(HiveSql.T_FROM);
			this.state = 1901;
			this.match(HiveSql.T_LOCAL);
			this.state = 1902;
			this.copy_source();
			this.state = 1907;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===341) {
				{
				{
				this.state = 1903;
				this.match(HiveSql.T_COMMA);
				this.state = 1904;
				this.copy_source();
				}
				}
				this.state = 1909;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1910;
			this.match(HiveSql.T_TO);
			this.state = 1911;
			this.copy_target();
			this.state = 1915;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 213, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1912;
					this.copy_file_option();
					}
					}
				}
				this.state = 1917;
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
	public copy_stmt(): Copy_stmtContext {
		let localctx: Copy_stmtContext = new Copy_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, HiveSql.RULE_copy_stmt);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1918;
			this.match(HiveSql.T_COPY);
			this.state = 1924;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 92:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
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
			case 122:
			case 123:
			case 124:
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
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
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
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
			case 200:
			case 201:
			case 202:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 210:
			case 211:
			case 212:
			case 213:
			case 214:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 225:
			case 226:
			case 227:
			case 228:
			case 229:
			case 230:
			case 231:
			case 232:
			case 233:
			case 234:
			case 235:
			case 236:
			case 237:
			case 239:
			case 240:
			case 241:
			case 242:
			case 243:
			case 244:
			case 245:
			case 246:
			case 247:
			case 248:
			case 249:
			case 250:
			case 251:
			case 252:
			case 253:
			case 254:
			case 255:
			case 256:
			case 257:
			case 258:
			case 260:
			case 261:
			case 262:
			case 263:
			case 264:
			case 265:
			case 266:
			case 267:
			case 268:
			case 269:
			case 270:
			case 271:
			case 272:
			case 273:
			case 274:
			case 275:
			case 276:
			case 277:
			case 278:
			case 279:
			case 280:
			case 281:
			case 282:
			case 283:
			case 284:
			case 286:
			case 287:
			case 288:
			case 289:
			case 290:
			case 291:
			case 294:
			case 295:
			case 296:
			case 297:
			case 298:
			case 299:
			case 300:
			case 301:
			case 302:
			case 303:
			case 304:
			case 305:
			case 308:
			case 309:
			case 310:
			case 311:
			case 312:
			case 313:
			case 314:
			case 315:
			case 316:
			case 317:
			case 318:
			case 319:
			case 320:
			case 321:
			case 322:
			case 323:
			case 324:
			case 331:
			case 332:
			case 333:
			case 334:
			case 335:
			case 336:
			case 337:
			case 338:
			case 367:
				{
				this.state = 1919;
				this.table_name();
				}
				break;
			case 360:
				{
				this.state = 1920;
				this.match(HiveSql.T_OPEN_P);
				this.state = 1921;
				this.select_stmt();
				this.state = 1922;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1926;
			this.match(HiveSql.T_TO);
			this.state = 1928;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 215, this._ctx) ) {
			case 1:
				{
				this.state = 1927;
				this.match(HiveSql.T_HDFS);
				}
				break;
			}
			this.state = 1930;
			this.copy_target();
			this.state = 1934;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 216, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1931;
					this.copy_option();
					}
					}
				}
				this.state = 1936;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 216, this._ctx);
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
	public copy_source(): Copy_sourceContext {
		let localctx: Copy_sourceContext = new Copy_sourceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, HiveSql.RULE_copy_source);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1939;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				{
				this.state = 1937;
				this.file_name();
				}
				break;
			case 2:
				{
				this.state = 1938;
				this.expr(0);
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
	public copy_target(): Copy_targetContext {
		let localctx: Copy_targetContext = new Copy_targetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, HiveSql.RULE_copy_target);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1943;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 218, this._ctx) ) {
			case 1:
				{
				this.state = 1941;
				this.file_name();
				}
				break;
			case 2:
				{
				this.state = 1942;
				this.expr(0);
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
	public copy_option(): Copy_optionContext {
		let localctx: Copy_optionContext = new Copy_optionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, HiveSql.RULE_copy_option);
		try {
			this.state = 1953;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1945;
				this.match(HiveSql.T_AT);
				this.state = 1946;
				this.ident();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1947;
				this.match(HiveSql.T_BATCHSIZE);
				this.state = 1948;
				this.expr(0);
				}
				break;
			case 77:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1949;
				this.match(HiveSql.T_DELIMITER);
				this.state = 1950;
				this.expr(0);
				}
				break;
			case 264:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1951;
				this.match(HiveSql.T_SQLINSERT);
				this.state = 1952;
				this.ident();
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
	public copy_file_option(): Copy_file_optionContext {
		let localctx: Copy_file_optionContext = new Copy_file_optionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, HiveSql.RULE_copy_file_option);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1955;
			_la = this._input.LA(1);
			if(!(_la===75 || _la===130 || _la===203)) {
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
	public commit_stmt(): Commit_stmtContext {
		let localctx: Commit_stmtContext = new Commit_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, HiveSql.RULE_commit_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1957;
			this.match(HiveSql.T_COMMIT);
			this.state = 1959;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 220, this._ctx) ) {
			case 1:
				{
				this.state = 1958;
				this.match(HiveSql.T_WORK);
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
	public create_index_stmt(): Create_index_stmtContext {
		let localctx: Create_index_stmtContext = new Create_index_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, HiveSql.RULE_create_index_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1961;
			this.match(HiveSql.T_CREATE);
			this.state = 1963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===294) {
				{
				this.state = 1962;
				this.match(HiveSql.T_UNIQUE);
				}
			}

			this.state = 1965;
			this.match(HiveSql.T_INDEX);
			this.state = 1966;
			this.ident();
			this.state = 1967;
			this.match(HiveSql.T_ON);
			this.state = 1968;
			this.table_name();
			this.state = 1969;
			this.match(HiveSql.T_OPEN_P);
			this.state = 1970;
			this.create_index_col();
			this.state = 1975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===341) {
				{
				{
				this.state = 1971;
				this.match(HiveSql.T_COMMA);
				this.state = 1972;
				this.create_index_col();
				}
				}
				this.state = 1977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1978;
			this.match(HiveSql.T_CLOSE_P);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public create_index_col(): Create_index_colContext {
		let localctx: Create_index_colContext = new Create_index_colContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, HiveSql.RULE_create_index_col);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1980;
			this.ident();
			this.state = 1982;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10 || _la===78) {
				{
				this.state = 1981;
				_la = this._input.LA(1);
				if(!(_la===10 || _la===78)) {
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
	public index_storage_clause(): Index_storage_clauseContext {
		let localctx: Index_storage_clauseContext = new Index_storage_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, HiveSql.RULE_index_storage_clause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1984;
			this.index_mssql_storage_clause();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public index_mssql_storage_clause(): Index_mssql_storage_clauseContext {
		let localctx: Index_mssql_storage_clauseContext = new Index_mssql_storage_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, HiveSql.RULE_index_mssql_storage_clause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1986;
			this.match(HiveSql.T_WITH);
			this.state = 1987;
			this.match(HiveSql.T_OPEN_P);
			this.state = 1988;
			this.ident();
			this.state = 1989;
			this.match(HiveSql.T_EQUAL);
			this.state = 1990;
			this.ident();
			this.state = 1998;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===341) {
				{
				{
				this.state = 1991;
				this.match(HiveSql.T_COMMA);
				this.state = 1992;
				this.ident();
				this.state = 1993;
				this.match(HiveSql.T_EQUAL);
				this.state = 1994;
				this.ident();
				}
				}
				this.state = 2000;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2001;
			this.match(HiveSql.T_CLOSE_P);
			this.state = 2005;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 225, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2002;
					this.create_table_options_mssql_item();
					}
					}
				}
				this.state = 2007;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 225, this._ctx);
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
	public print_stmt(): Print_stmtContext {
		let localctx: Print_stmtContext = new Print_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 240, HiveSql.RULE_print_stmt);
		try {
			this.state = 2015;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 226, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2008;
				this.match(HiveSql.T_PRINT);
				this.state = 2009;
				this.expr(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2010;
				this.match(HiveSql.T_PRINT);
				this.state = 2011;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2012;
				this.expr(0);
				this.state = 2013;
				this.match(HiveSql.T_CLOSE_P);
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
	public quit_stmt(): Quit_stmtContext {
		let localctx: Quit_stmtContext = new Quit_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, HiveSql.RULE_quit_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2018;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===344) {
				{
				this.state = 2017;
				this.match(HiveSql.T_DOT);
				}
			}

			this.state = 2020;
			this.match(HiveSql.T_QUIT);
			this.state = 2022;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				{
				this.state = 2021;
				this.expr(0);
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
	public raise_stmt(): Raise_stmtContext {
		let localctx: Raise_stmtContext = new Raise_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, HiveSql.RULE_raise_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2024;
			this.match(HiveSql.T_RAISE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resignal_stmt(): Resignal_stmtContext {
		let localctx: Resignal_stmtContext = new Resignal_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, HiveSql.RULE_resignal_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2026;
			this.match(HiveSql.T_RESIGNAL);
			this.state = 2038;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 231, this._ctx) ) {
			case 1:
				{
				this.state = 2027;
				this.match(HiveSql.T_SQLSTATE);
				this.state = 2029;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 229, this._ctx) ) {
				case 1:
					{
					this.state = 2028;
					this.match(HiveSql.T_VALUE);
					}
					break;
				}
				this.state = 2031;
				this.expr(0);
				this.state = 2036;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 230, this._ctx) ) {
				case 1:
					{
					this.state = 2032;
					this.match(HiveSql.T_SET);
					this.state = 2033;
					this.match(HiveSql.T_MESSAGE_TEXT);
					this.state = 2034;
					this.match(HiveSql.T_EQUAL);
					this.state = 2035;
					this.expr(0);
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
	public return_stmt(): Return_stmtContext {
		let localctx: Return_stmtContext = new Return_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, HiveSql.RULE_return_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2040;
			this.match(HiveSql.T_RETURN);
			this.state = 2042;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 232, this._ctx) ) {
			case 1:
				{
				this.state = 2041;
				this.expr(0);
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
	public rollback_stmt(): Rollback_stmtContext {
		let localctx: Rollback_stmtContext = new Rollback_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 250, HiveSql.RULE_rollback_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2044;
			this.match(HiveSql.T_ROLLBACK);
			this.state = 2046;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 233, this._ctx) ) {
			case 1:
				{
				this.state = 2045;
				this.match(HiveSql.T_WORK);
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
	public set_session_option(): Set_session_optionContext {
		let localctx: Set_session_optionContext = new Set_session_optionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 252, HiveSql.RULE_set_session_option);
		try {
			this.state = 2051;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 58:
			case 59:
			case 244:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2048;
				this.set_current_schema_option();
				}
				break;
			case 7:
			case 8:
			case 184:
			case 219:
			case 312:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2049;
				this.set_mssql_session_option();
				}
				break;
			case 217:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2050;
				this.set_teradata_session_option();
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
	public set_current_schema_option(): Set_current_schema_optionContext {
		let localctx: Set_current_schema_optionContext = new Set_current_schema_optionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 254, HiveSql.RULE_set_current_schema_option);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2058;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 58:
			case 244:
				{
				{
				this.state = 2054;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===58) {
					{
					this.state = 2053;
					this.match(HiveSql.T_CURRENT);
					}
				}

				this.state = 2056;
				this.match(HiveSql.T_SCHEMA);
				}
				}
				break;
			case 59:
				{
				this.state = 2057;
				this.match(HiveSql.T_CURRENT_SCHEMA);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2061;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===346) {
				{
				this.state = 2060;
				this.match(HiveSql.T_EQUAL);
				}
			}

			this.state = 2063;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public set_mssql_session_option(): Set_mssql_session_optionContext {
		let localctx: Set_mssql_session_optionContext = new Set_mssql_session_optionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 256, HiveSql.RULE_set_mssql_session_option);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2065;
			_la = this._input.LA(1);
			if(!(_la===7 || _la===8 || _la===184 || _la===219 || _la===312)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 2066;
			_la = this._input.LA(1);
			if(!(_la===194 || _la===195)) {
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
	public set_teradata_session_option(): Set_teradata_session_optionContext {
		let localctx: Set_teradata_session_optionContext = new Set_teradata_session_optionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 258, HiveSql.RULE_set_teradata_session_option);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2068;
			this.match(HiveSql.T_QUERY_BAND);
			this.state = 2069;
			this.match(HiveSql.T_EQUAL);
			this.state = 2072;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				{
				this.state = 2070;
				this.expr(0);
				}
				break;
			case 2:
				{
				this.state = 2071;
				this.match(HiveSql.T_NONE);
				}
				break;
			}
			this.state = 2075;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===295) {
				{
				this.state = 2074;
				this.match(HiveSql.T_UPDATE);
				}
			}

			this.state = 2077;
			this.match(HiveSql.T_FOR);
			this.state = 2078;
			_la = this._input.LA(1);
			if(!(_la===252 || _la===289)) {
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
	public signal_stmt(): Signal_stmtContext {
		let localctx: Signal_stmtContext = new Signal_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 260, HiveSql.RULE_signal_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2080;
			this.match(HiveSql.T_SIGNAL);
			this.state = 2081;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public summary_stmt(): Summary_stmtContext {
		let localctx: Summary_stmtContext = new Summary_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, HiveSql.RULE_summary_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2083;
			this.match(HiveSql.T_SUMMARY);
			this.state = 2086;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===288) {
				{
				this.state = 2084;
				this.match(HiveSql.T_TOP);
				this.state = 2085;
				this.expr(0);
				}
			}

			this.state = 2088;
			this.match(HiveSql.T_FOR);
			this.state = 2098;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 243, this._ctx) ) {
			case 1:
				{
				this.state = 2089;
				this.select_stmt();
				}
				break;
			case 2:
				{
				this.state = 2090;
				this.table_name();
				this.state = 2092;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 241, this._ctx) ) {
				case 1:
					{
					this.state = 2091;
					this.where_clause();
					}
					break;
				}
				this.state = 2096;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 242, this._ctx) ) {
				case 1:
					{
					this.state = 2094;
					this.match(HiveSql.T_LIMIT);
					this.state = 2095;
					this.expr(0);
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
	public truncate_stmt(): Truncate_stmtContext {
		let localctx: Truncate_stmtContext = new Truncate_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, HiveSql.RULE_truncate_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2100;
			this.match(HiveSql.T_TRUNCATE);
			this.state = 2102;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 244, this._ctx) ) {
			case 1:
				{
				this.state = 2101;
				this.match(HiveSql.T_TABLE);
				}
				break;
			}
			this.state = 2104;
			this.table_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public use_stmt(): Use_stmtContext {
		let localctx: Use_stmtContext = new Use_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 266, HiveSql.RULE_use_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2106;
			this.match(HiveSql.T_USE);
			this.state = 2107;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public values_into_stmt(): Values_into_stmtContext {
		let localctx: Values_into_stmtContext = new Values_into_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 268, HiveSql.RULE_values_into_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2109;
			this.match(HiveSql.T_VALUES);
			this.state = 2111;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 245, this._ctx) ) {
			case 1:
				{
				this.state = 2110;
				this.match(HiveSql.T_OPEN_P);
				}
				break;
			}
			this.state = 2113;
			this.expr(0);
			this.state = 2118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===341) {
				{
				{
				this.state = 2114;
				this.match(HiveSql.T_COMMA);
				this.state = 2115;
				this.expr(0);
				}
				}
				this.state = 2120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===363) {
				{
				this.state = 2121;
				this.match(HiveSql.T_CLOSE_P);
				}
			}

			this.state = 2124;
			this.match(HiveSql.T_INTO);
			this.state = 2126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===360) {
				{
				this.state = 2125;
				this.match(HiveSql.T_OPEN_P);
				}
			}

			this.state = 2128;
			this.ident();
			this.state = 2133;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 249, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2129;
					this.match(HiveSql.T_COMMA);
					this.state = 2130;
					this.ident();
					}
					}
				}
				this.state = 2135;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 249, this._ctx);
			}
			this.state = 2137;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 250, this._ctx) ) {
			case 1:
				{
				this.state = 2136;
				this.match(HiveSql.T_CLOSE_P);
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
	public while_stmt(): While_stmtContext {
		let localctx: While_stmtContext = new While_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 270, HiveSql.RULE_while_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2139;
			this.match(HiveSql.T_WHILE);
			this.state = 2140;
			this.bool_expr(0);
			this.state = 2141;
			_la = this._input.LA(1);
			if(!(_la===16 || _la===85 || _la===169 || _la===283)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 2142;
			this.block();
			this.state = 2143;
			this.match(HiveSql.T_END);
			this.state = 2145;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 251, this._ctx) ) {
			case 1:
				{
				this.state = 2144;
				_la = this._input.LA(1);
				if(!(_la===169 || _la===308)) {
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
	public for_cursor_stmt(): For_cursor_stmtContext {
		let localctx: For_cursor_stmtContext = new For_cursor_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 272, HiveSql.RULE_for_cursor_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2147;
			this.match(HiveSql.T_FOR);
			this.state = 2148;
			this.match(HiveSql.L_ID);
			this.state = 2149;
			this.match(HiveSql.T_IN);
			this.state = 2151;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 252, this._ctx) ) {
			case 1:
				{
				this.state = 2150;
				this.match(HiveSql.T_OPEN_P);
				}
				break;
			}
			this.state = 2153;
			this.select_stmt();
			this.state = 2155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===363) {
				{
				this.state = 2154;
				this.match(HiveSql.T_CLOSE_P);
				}
			}

			this.state = 2157;
			this.match(HiveSql.T_LOOP);
			this.state = 2158;
			this.block();
			this.state = 2159;
			this.match(HiveSql.T_END);
			this.state = 2160;
			this.match(HiveSql.T_LOOP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public for_range_stmt(): For_range_stmtContext {
		let localctx: For_range_stmtContext = new For_range_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 274, HiveSql.RULE_for_range_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2162;
			this.match(HiveSql.T_FOR);
			this.state = 2163;
			this.match(HiveSql.L_ID);
			this.state = 2164;
			this.match(HiveSql.T_IN);
			this.state = 2166;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 254, this._ctx) ) {
			case 1:
				{
				this.state = 2165;
				this.match(HiveSql.T_REVERSE);
				}
				break;
			}
			this.state = 2168;
			this.expr(0);
			this.state = 2169;
			this.match(HiveSql.T_DOT2);
			this.state = 2170;
			this.expr(0);
			this.state = 2173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25 || _la===269) {
				{
				this.state = 2171;
				_la = this._input.LA(1);
				if(!(_la===25 || _la===269)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2172;
				this.expr(0);
				}
			}

			this.state = 2175;
			this.match(HiveSql.T_LOOP);
			this.state = 2176;
			this.block();
			this.state = 2177;
			this.match(HiveSql.T_END);
			this.state = 2178;
			this.match(HiveSql.T_LOOP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let localctx: LabelContext = new LabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 276, HiveSql.RULE_label);
		try {
			this.state = 2186;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 376:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2180;
				this.match(HiveSql.L_LABEL);
				}
				break;
			case 354:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2181;
				this.match(HiveSql.T_LESS);
				this.state = 2182;
				this.match(HiveSql.T_LESS);
				this.state = 2183;
				this.match(HiveSql.L_ID);
				this.state = 2184;
				this.match(HiveSql.T_GREATER);
				this.state = 2185;
				this.match(HiveSql.T_GREATER);
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
	public using_clause(): Using_clauseContext {
		let localctx: Using_clauseContext = new Using_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 278, HiveSql.RULE_using_clause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2188;
			this.match(HiveSql.T_USING);
			this.state = 2189;
			this.expr(0);
			this.state = 2194;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 257, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2190;
					this.match(HiveSql.T_COMMA);
					this.state = 2191;
					this.expr(0);
					}
					}
				}
				this.state = 2196;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 257, this._ctx);
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
	public select_stmt(): Select_stmtContext {
		let localctx: Select_stmtContext = new Select_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 280, HiveSql.RULE_select_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===309) {
				{
				this.state = 2197;
				this.cte_select_stmt();
				}
			}

			this.state = 2200;
			this.fullselect_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cte_select_stmt(): Cte_select_stmtContext {
		let localctx: Cte_select_stmtContext = new Cte_select_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 282, HiveSql.RULE_cte_select_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2202;
			this.match(HiveSql.T_WITH);
			this.state = 2203;
			this.cte_select_stmt_item();
			this.state = 2208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===341) {
				{
				{
				this.state = 2204;
				this.match(HiveSql.T_COMMA);
				this.state = 2205;
				this.cte_select_stmt_item();
				}
				}
				this.state = 2210;
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
	public cte_select_stmt_item(): Cte_select_stmt_itemContext {
		let localctx: Cte_select_stmt_itemContext = new Cte_select_stmt_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 284, HiveSql.RULE_cte_select_stmt_item);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2211;
			this.ident();
			this.state = 2213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===360) {
				{
				this.state = 2212;
				this.cte_select_cols();
				}
			}

			this.state = 2215;
			this.match(HiveSql.T_AS);
			this.state = 2216;
			this.match(HiveSql.T_OPEN_P);
			this.state = 2217;
			this.fullselect_stmt();
			this.state = 2218;
			this.match(HiveSql.T_CLOSE_P);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cte_select_cols(): Cte_select_colsContext {
		let localctx: Cte_select_colsContext = new Cte_select_colsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 286, HiveSql.RULE_cte_select_cols);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2220;
			this.match(HiveSql.T_OPEN_P);
			this.state = 2221;
			this.ident();
			this.state = 2226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===341) {
				{
				{
				this.state = 2222;
				this.match(HiveSql.T_COMMA);
				this.state = 2223;
				this.ident();
				}
				}
				this.state = 2228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2229;
			this.match(HiveSql.T_CLOSE_P);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fullselect_stmt(): Fullselect_stmtContext {
		let localctx: Fullselect_stmtContext = new Fullselect_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 288, HiveSql.RULE_fullselect_stmt);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2231;
			this.fullselect_stmt_item();
			this.state = 2237;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 262, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2232;
					this.fullselect_set_clause();
					this.state = 2233;
					this.fullselect_stmt_item();
					}
					}
				}
				this.state = 2239;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 262, this._ctx);
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
	public fullselect_stmt_item(): Fullselect_stmt_itemContext {
		let localctx: Fullselect_stmt_itemContext = new Fullselect_stmt_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 290, HiveSql.RULE_fullselect_stmt_item);
		try {
			this.state = 2245;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 249:
			case 250:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2240;
				this.subselect_stmt();
				}
				break;
			case 360:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2241;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2242;
				this.fullselect_stmt();
				this.state = 2243;
				this.match(HiveSql.T_CLOSE_P);
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
	public fullselect_set_clause(): Fullselect_set_clauseContext {
		let localctx: Fullselect_set_clauseContext = new Fullselect_set_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 292, HiveSql.RULE_fullselect_set_clause);
		let _la: number;
		try {
			this.state = 2259;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 293:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2247;
				this.match(HiveSql.T_UNION);
				this.state = 2249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===3) {
					{
					this.state = 2248;
					this.match(HiveSql.T_ALL);
					}
				}

				}
				break;
			case 96:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2251;
				this.match(HiveSql.T_EXCEPT);
				this.state = 2253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===3) {
					{
					this.state = 2252;
					this.match(HiveSql.T_ALL);
					}
				}

				}
				break;
			case 144:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2255;
				this.match(HiveSql.T_INTERSECT);
				this.state = 2257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===3) {
					{
					this.state = 2256;
					this.match(HiveSql.T_ALL);
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
	public subselect_stmt(): Subselect_stmtContext {
		let localctx: Subselect_stmtContext = new Subselect_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 294, HiveSql.RULE_subselect_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2261;
			_la = this._input.LA(1);
			if(!(_la===249 || _la===250)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 2262;
			this.select_list();
			this.state = 2264;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 268, this._ctx) ) {
			case 1:
				{
				this.state = 2263;
				this.into_clause();
				}
				break;
			}
			this.state = 2267;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 269, this._ctx) ) {
			case 1:
				{
				this.state = 2266;
				this.from_clause();
				}
				break;
			}
			this.state = 2270;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 270, this._ctx) ) {
			case 1:
				{
				this.state = 2269;
				this.where_clause();
				}
				break;
			}
			this.state = 2273;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 271, this._ctx) ) {
			case 1:
				{
				this.state = 2272;
				this.group_by_clause();
				}
				break;
			}
			this.state = 2277;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 272, this._ctx) ) {
			case 1:
				{
				this.state = 2275;
				this.having_clause();
				}
				break;
			case 2:
				{
				this.state = 2276;
				this.qualify_clause();
				}
				break;
			}
			this.state = 2280;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 273, this._ctx) ) {
			case 1:
				{
				this.state = 2279;
				this.order_by_clause();
				}
				break;
			}
			this.state = 2283;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 274, this._ctx) ) {
			case 1:
				{
				this.state = 2282;
				this.select_options();
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
	public select_list(): Select_listContext {
		let localctx: Select_listContext = new Select_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 296, HiveSql.RULE_select_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2286;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 275, this._ctx) ) {
			case 1:
				{
				this.state = 2285;
				this.select_list_set();
				}
				break;
			}
			this.state = 2289;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 276, this._ctx) ) {
			case 1:
				{
				this.state = 2288;
				this.select_list_limit();
				}
				break;
			}
			this.state = 2291;
			this.select_list_item();
			this.state = 2296;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 277, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2292;
					this.match(HiveSql.T_COMMA);
					this.state = 2293;
					this.select_list_item();
					}
					}
				}
				this.state = 2298;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 277, this._ctx);
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
	public select_list_set(): Select_list_setContext {
		let localctx: Select_list_setContext = new Select_list_setContext(this, this._ctx, this.state);
		this.enterRule(localctx, 298, HiveSql.RULE_select_list_set);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2299;
			_la = this._input.LA(1);
			if(!(_la===3 || _la===83)) {
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
	public select_list_limit(): Select_list_limitContext {
		let localctx: Select_list_limitContext = new Select_list_limitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 300, HiveSql.RULE_select_list_limit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2301;
			this.match(HiveSql.T_TOP);
			this.state = 2302;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public select_list_item(): Select_list_itemContext {
		let localctx: Select_list_itemContext = new Select_list_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 302, HiveSql.RULE_select_list_item);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2314;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 280, this._ctx) ) {
			case 1:
				{
				this.state = 2307;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 278, this._ctx) ) {
				case 1:
					{
					this.state = 2304;
					this.ident();
					this.state = 2305;
					this.match(HiveSql.T_EQUAL);
					}
					break;
				}
				this.state = 2309;
				this.expr(0);
				this.state = 2311;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 279, this._ctx) ) {
				case 1:
					{
					this.state = 2310;
					this.select_list_alias();
					}
					break;
				}
				}
				break;
			case 2:
				{
				this.state = 2313;
				this.select_list_asterisk();
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
	public select_list_alias(): Select_list_aliasContext {
		let localctx: Select_list_aliasContext = new Select_list_aliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 304, HiveSql.RULE_select_list_alias);
		try {
			this.state = 2325;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 282, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2316;
				if (!(this._input.LT(1).text.toUpperCase() !== "INTO" && this._input.LT(1).text.toUpperCase() !== "FROM")) {
					throw this.createFailedPredicateException("this._input.LT(1).text.toUpperCase() !== \"INTO\" && this._input.LT(1).text.toUpperCase() !== \"FROM\"");
				}
				this.state = 2318;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 281, this._ctx) ) {
				case 1:
					{
					this.state = 2317;
					this.match(HiveSql.T_AS);
					}
					break;
				}
				this.state = 2320;
				this.ident();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2321;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2322;
				this.match(HiveSql.T_TITLE);
				this.state = 2323;
				this.match(HiveSql.L_S_STRING);
				this.state = 2324;
				this.match(HiveSql.T_CLOSE_P);
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
	public select_list_asterisk(): Select_list_asteriskContext {
		let localctx: Select_list_asteriskContext = new Select_list_asteriskContext(this, this._ctx, this.state);
		this.enterRule(localctx, 306, HiveSql.RULE_select_list_asterisk);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2329;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===367) {
				{
				this.state = 2327;
				this.match(HiveSql.L_ID);
				this.state = 2328;
				this.match(HiveSql.T_DOT);
				}
			}

			this.state = 2331;
			this.match(HiveSql.T_MUL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public into_clause(): Into_clauseContext {
		let localctx: Into_clauseContext = new Into_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 308, HiveSql.RULE_into_clause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2333;
			this.match(HiveSql.T_INTO);
			this.state = 2334;
			this.ident();
			this.state = 2339;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 284, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2335;
					this.match(HiveSql.T_COMMA);
					this.state = 2336;
					this.ident();
					}
					}
				}
				this.state = 2341;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 284, this._ctx);
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
	public from_clause(): From_clauseContext {
		let localctx: From_clauseContext = new From_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 310, HiveSql.RULE_from_clause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2342;
			this.match(HiveSql.T_FROM);
			this.state = 2343;
			this.from_table_clause();
			this.state = 2347;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 285, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2344;
					this.from_join_clause();
					}
					}
				}
				this.state = 2349;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 285, this._ctx);
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
	public from_table_clause(): From_table_clauseContext {
		let localctx: From_table_clauseContext = new From_table_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 312, HiveSql.RULE_from_table_clause);
		try {
			this.state = 2353;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 286, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2350;
				this.from_table_name_clause();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2351;
				this.from_subselect_clause();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2352;
				this.from_table_values_clause();
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
	public from_table_name_clause(): From_table_name_clauseContext {
		let localctx: From_table_name_clauseContext = new From_table_name_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 314, HiveSql.RULE_from_table_name_clause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2355;
			this.table_name();
			this.state = 2357;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 287, this._ctx) ) {
			case 1:
				{
				this.state = 2356;
				this.from_alias_clause();
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
	public from_subselect_clause(): From_subselect_clauseContext {
		let localctx: From_subselect_clauseContext = new From_subselect_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 316, HiveSql.RULE_from_subselect_clause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2359;
			this.match(HiveSql.T_OPEN_P);
			this.state = 2360;
			this.select_stmt();
			this.state = 2361;
			this.match(HiveSql.T_CLOSE_P);
			this.state = 2363;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 288, this._ctx) ) {
			case 1:
				{
				this.state = 2362;
				this.from_alias_clause();
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
	public from_join_clause(): From_join_clauseContext {
		let localctx: From_join_clauseContext = new From_join_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 318, HiveSql.RULE_from_join_clause);
		try {
			this.state = 2372;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 341:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2365;
				this.match(HiveSql.T_COMMA);
				this.state = 2366;
				this.from_table_clause();
				}
				break;
			case 115:
			case 136:
			case 151:
			case 157:
			case 232:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2367;
				this.from_join_type_clause();
				this.state = 2368;
				this.from_table_clause();
				this.state = 2369;
				this.match(HiveSql.T_ON);
				this.state = 2370;
				this.bool_expr(0);
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
	public from_join_type_clause(): From_join_type_clauseContext {
		let localctx: From_join_type_clauseContext = new From_join_type_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 320, HiveSql.RULE_from_join_type_clause);
		let _la: number;
		try {
			this.state = 2383;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 136:
			case 151:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2375;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===136) {
					{
					this.state = 2374;
					this.match(HiveSql.T_INNER);
					}
				}

				this.state = 2377;
				this.match(HiveSql.T_JOIN);
				}
				break;
			case 115:
			case 157:
			case 232:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2378;
				_la = this._input.LA(1);
				if(!(_la===115 || _la===157 || _la===232)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===201) {
					{
					this.state = 2379;
					this.match(HiveSql.T_OUTER);
					}
				}

				this.state = 2382;
				this.match(HiveSql.T_JOIN);
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
	public from_table_values_clause(): From_table_values_clauseContext {
		let localctx: From_table_values_clauseContext = new From_table_values_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 322, HiveSql.RULE_from_table_values_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2385;
			this.match(HiveSql.T_TABLE);
			this.state = 2386;
			this.match(HiveSql.T_OPEN_P);
			this.state = 2387;
			this.match(HiveSql.T_VALUES);
			this.state = 2388;
			this.from_table_values_row();
			this.state = 2393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===341) {
				{
				{
				this.state = 2389;
				this.match(HiveSql.T_COMMA);
				this.state = 2390;
				this.from_table_values_row();
				}
				}
				this.state = 2395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2396;
			this.match(HiveSql.T_CLOSE_P);
			this.state = 2398;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 294, this._ctx) ) {
			case 1:
				{
				this.state = 2397;
				this.from_alias_clause();
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
	public from_table_values_row(): From_table_values_rowContext {
		let localctx: From_table_values_rowContext = new From_table_values_rowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 324, HiveSql.RULE_from_table_values_row);
		let _la: number;
		try {
			this.state = 2412;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 296, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2400;
				this.expr(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2401;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2402;
				this.expr(0);
				this.state = 2407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===341) {
					{
					{
					this.state = 2403;
					this.match(HiveSql.T_COMMA);
					this.state = 2404;
					this.expr(0);
					}
					}
					this.state = 2409;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2410;
				this.match(HiveSql.T_CLOSE_P);
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
	public from_alias_clause(): From_alias_clauseContext {
		let localctx: From_alias_clauseContext = new From_alias_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 326, HiveSql.RULE_from_alias_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2414;
			if (!(this._input.LT(1).text.toUpperCase() !== "EXEC" &&
			        this._input.LT(1).text.toUpperCase() !== "EXECUTE" &&
			        this._input.LT(1).text.toUpperCase() !== "INNER" &&
			        this._input.LT(1).text.toUpperCase() !== "LEFT" &&
			        this._input.LT(1).text.toUpperCase() !== "GROUP" &&
			        this._input.LT(1).text.toUpperCase() !== "ORDER" &&
			        this._input.LT(1).text.toUpperCase() !== "LIMIT" &&
			        this._input.LT(1).text.toUpperCase() !== "WITH" &&
			        this._input.LT(1).text.toUpperCase() !== "JOIN")) {
				throw this.createFailedPredicateException("this._input.LT(1).text.toUpperCase() !== \"EXEC\" &&\n        this._input.LT(1).text.toUpperCase() !== \"EXECUTE\" &&\n        this._input.LT(1).text.toUpperCase() !== \"INNER\" &&\n        this._input.LT(1).text.toUpperCase() !== \"LEFT\" &&\n        this._input.LT(1).text.toUpperCase() !== \"GROUP\" &&\n        this._input.LT(1).text.toUpperCase() !== \"ORDER\" &&\n        this._input.LT(1).text.toUpperCase() !== \"LIMIT\" &&\n        this._input.LT(1).text.toUpperCase() !== \"WITH\" &&\n        this._input.LT(1).text.toUpperCase() !== \"JOIN\"");
			}
			this.state = 2416;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 297, this._ctx) ) {
			case 1:
				{
				this.state = 2415;
				this.match(HiveSql.T_AS);
				}
				break;
			}
			this.state = 2418;
			this.ident();
			this.state = 2429;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 299, this._ctx) ) {
			case 1:
				{
				this.state = 2419;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2420;
				this.match(HiveSql.L_ID);
				this.state = 2425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===341) {
					{
					{
					this.state = 2421;
					this.match(HiveSql.T_COMMA);
					this.state = 2422;
					this.match(HiveSql.L_ID);
					}
					}
					this.state = 2427;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2428;
				this.match(HiveSql.T_CLOSE_P);
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
	public table_name(): Table_nameContext {
		let localctx: Table_nameContext = new Table_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 328, HiveSql.RULE_table_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2431;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public where_clause(): Where_clauseContext {
		let localctx: Where_clauseContext = new Where_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 330, HiveSql.RULE_where_clause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2433;
			this.match(HiveSql.T_WHERE);
			this.state = 2434;
			this.bool_expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public group_by_clause(): Group_by_clauseContext {
		let localctx: Group_by_clauseContext = new Group_by_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 332, HiveSql.RULE_group_by_clause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2436;
			this.match(HiveSql.T_GROUP);
			this.state = 2437;
			this.match(HiveSql.T_BY);
			this.state = 2438;
			this.expr(0);
			this.state = 2443;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 300, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2439;
					this.match(HiveSql.T_COMMA);
					this.state = 2440;
					this.expr(0);
					}
					}
				}
				this.state = 2445;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 300, this._ctx);
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
	public having_clause(): Having_clauseContext {
		let localctx: Having_clauseContext = new Having_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 334, HiveSql.RULE_having_clause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2446;
			this.match(HiveSql.T_HAVING);
			this.state = 2447;
			this.bool_expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public qualify_clause(): Qualify_clauseContext {
		let localctx: Qualify_clauseContext = new Qualify_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 336, HiveSql.RULE_qualify_clause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2449;
			this.match(HiveSql.T_QUALIFY);
			this.state = 2450;
			this.bool_expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public order_by_clause(): Order_by_clauseContext {
		let localctx: Order_by_clauseContext = new Order_by_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 338, HiveSql.RULE_order_by_clause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2452;
			this.match(HiveSql.T_ORDER);
			this.state = 2453;
			this.match(HiveSql.T_BY);
			this.state = 2454;
			this.expr(0);
			this.state = 2456;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 301, this._ctx) ) {
			case 1:
				{
				this.state = 2455;
				_la = this._input.LA(1);
				if(!(_la===10 || _la===78)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this.state = 2465;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 303, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2458;
					this.match(HiveSql.T_COMMA);
					this.state = 2459;
					this.expr(0);
					this.state = 2461;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 302, this._ctx) ) {
					case 1:
						{
						this.state = 2460;
						_la = this._input.LA(1);
						if(!(_la===10 || _la===78)) {
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
				}
				this.state = 2467;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 303, this._ctx);
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
	public select_options(): Select_optionsContext {
		let localctx: Select_optionsContext = new Select_optionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 340, HiveSql.RULE_select_options);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2469;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2468;
					this.select_options_item();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2471;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 304, this._ctx);
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
	public select_options_item(): Select_options_itemContext {
		let localctx: Select_options_itemContext = new Select_options_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 342, HiveSql.RULE_select_options_item);
		let _la: number;
		try {
			this.state = 2484;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 159:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2473;
				this.match(HiveSql.T_LIMIT);
				this.state = 2474;
				this.expr(0);
				}
				break;
			case 309:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2475;
				this.match(HiveSql.T_WITH);
				this.state = 2476;
				_la = this._input.LA(1);
				if(!(_la===57 || _la===240 || _la===241 || _la===296)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2482;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 305, this._ctx) ) {
				case 1:
					{
					this.state = 2477;
					this.match(HiveSql.T_USE);
					this.state = 2478;
					this.match(HiveSql.T_AND);
					this.state = 2479;
					this.match(HiveSql.T_KEEP);
					this.state = 2480;
					_la = this._input.LA(1);
					if(!(_la===100 || _la===255 || _la===295)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 2481;
					this.match(HiveSql.T_LOCKS);
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
	public update_stmt(): Update_stmtContext {
		let localctx: Update_stmtContext = new Update_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 344, HiveSql.RULE_update_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2486;
			this.match(HiveSql.T_UPDATE);
			this.state = 2487;
			this.update_table();
			this.state = 2488;
			this.match(HiveSql.T_SET);
			this.state = 2489;
			this.update_assignment();
			this.state = 2491;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 307, this._ctx) ) {
			case 1:
				{
				this.state = 2490;
				this.where_clause();
				}
				break;
			}
			this.state = 2494;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 308, this._ctx) ) {
			case 1:
				{
				this.state = 2493;
				this.update_upsert();
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
	public update_assignment(): Update_assignmentContext {
		let localctx: Update_assignmentContext = new Update_assignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 346, HiveSql.RULE_update_assignment);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2496;
			this.assignment_stmt_item();
			this.state = 2501;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 309, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2497;
					this.match(HiveSql.T_COMMA);
					this.state = 2498;
					this.assignment_stmt_item();
					}
					}
				}
				this.state = 2503;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 309, this._ctx);
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
	public update_table(): Update_tableContext {
		let localctx: Update_tableContext = new Update_tableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 348, HiveSql.RULE_update_table);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2512;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 92:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
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
			case 122:
			case 123:
			case 124:
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
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
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
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
			case 200:
			case 201:
			case 202:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 210:
			case 211:
			case 212:
			case 213:
			case 214:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 225:
			case 226:
			case 227:
			case 228:
			case 229:
			case 230:
			case 231:
			case 232:
			case 233:
			case 234:
			case 235:
			case 236:
			case 237:
			case 239:
			case 240:
			case 241:
			case 242:
			case 243:
			case 244:
			case 245:
			case 246:
			case 247:
			case 248:
			case 249:
			case 250:
			case 251:
			case 252:
			case 253:
			case 254:
			case 255:
			case 256:
			case 257:
			case 258:
			case 260:
			case 261:
			case 262:
			case 263:
			case 264:
			case 265:
			case 266:
			case 267:
			case 268:
			case 269:
			case 270:
			case 271:
			case 272:
			case 273:
			case 274:
			case 275:
			case 276:
			case 277:
			case 278:
			case 279:
			case 280:
			case 281:
			case 282:
			case 283:
			case 284:
			case 286:
			case 287:
			case 288:
			case 289:
			case 290:
			case 291:
			case 294:
			case 295:
			case 296:
			case 297:
			case 298:
			case 299:
			case 300:
			case 301:
			case 302:
			case 303:
			case 304:
			case 305:
			case 308:
			case 309:
			case 310:
			case 311:
			case 312:
			case 313:
			case 314:
			case 315:
			case 316:
			case 317:
			case 318:
			case 319:
			case 320:
			case 321:
			case 322:
			case 323:
			case 324:
			case 331:
			case 332:
			case 333:
			case 334:
			case 335:
			case 336:
			case 337:
			case 338:
			case 367:
				{
				this.state = 2504;
				this.table_name();
				this.state = 2506;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 310, this._ctx) ) {
				case 1:
					{
					this.state = 2505;
					this.from_clause();
					}
					break;
				}
				}
				break;
			case 360:
				{
				this.state = 2508;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2509;
				this.select_stmt();
				this.state = 2510;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2518;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 313, this._ctx) ) {
			case 1:
				{
				this.state = 2515;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 312, this._ctx) ) {
				case 1:
					{
					this.state = 2514;
					this.match(HiveSql.T_AS);
					}
					break;
				}
				this.state = 2517;
				this.ident();
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
	public update_upsert(): Update_upsertContext {
		let localctx: Update_upsertContext = new Update_upsertContext(this, this._ctx, this.state);
		this.enterRule(localctx, 350, HiveSql.RULE_update_upsert);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2520;
			this.match(HiveSql.T_ELSE);
			this.state = 2521;
			this.insert_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public merge_stmt(): Merge_stmtContext {
		let localctx: Merge_stmtContext = new Merge_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 352, HiveSql.RULE_merge_stmt);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2523;
			this.match(HiveSql.T_MERGE);
			this.state = 2524;
			this.match(HiveSql.T_INTO);
			this.state = 2525;
			this.merge_table();
			this.state = 2526;
			this.match(HiveSql.T_USING);
			this.state = 2527;
			this.merge_table();
			this.state = 2528;
			this.match(HiveSql.T_ON);
			this.state = 2529;
			this.bool_expr(0);
			this.state = 2531;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2530;
					this.merge_condition();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2533;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 314, this._ctx);
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
	public merge_table(): Merge_tableContext {
		let localctx: Merge_tableContext = new Merge_tableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 354, HiveSql.RULE_merge_table);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2540;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 92:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
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
			case 122:
			case 123:
			case 124:
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
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
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
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
			case 200:
			case 201:
			case 202:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 210:
			case 211:
			case 212:
			case 213:
			case 214:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 225:
			case 226:
			case 227:
			case 228:
			case 229:
			case 230:
			case 231:
			case 232:
			case 233:
			case 234:
			case 235:
			case 236:
			case 237:
			case 239:
			case 240:
			case 241:
			case 242:
			case 243:
			case 244:
			case 245:
			case 246:
			case 247:
			case 248:
			case 249:
			case 250:
			case 251:
			case 252:
			case 253:
			case 254:
			case 255:
			case 256:
			case 257:
			case 258:
			case 260:
			case 261:
			case 262:
			case 263:
			case 264:
			case 265:
			case 266:
			case 267:
			case 268:
			case 269:
			case 270:
			case 271:
			case 272:
			case 273:
			case 274:
			case 275:
			case 276:
			case 277:
			case 278:
			case 279:
			case 280:
			case 281:
			case 282:
			case 283:
			case 284:
			case 286:
			case 287:
			case 288:
			case 289:
			case 290:
			case 291:
			case 294:
			case 295:
			case 296:
			case 297:
			case 298:
			case 299:
			case 300:
			case 301:
			case 302:
			case 303:
			case 304:
			case 305:
			case 308:
			case 309:
			case 310:
			case 311:
			case 312:
			case 313:
			case 314:
			case 315:
			case 316:
			case 317:
			case 318:
			case 319:
			case 320:
			case 321:
			case 322:
			case 323:
			case 324:
			case 331:
			case 332:
			case 333:
			case 334:
			case 335:
			case 336:
			case 337:
			case 338:
			case 367:
				{
				this.state = 2535;
				this.table_name();
				}
				break;
			case 360:
				{
				{
				this.state = 2536;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2537;
				this.select_stmt();
				this.state = 2538;
				this.match(HiveSql.T_CLOSE_P);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2546;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 317, this._ctx) ) {
			case 1:
				{
				this.state = 2543;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 316, this._ctx) ) {
				case 1:
					{
					this.state = 2542;
					this.match(HiveSql.T_AS);
					}
					break;
				}
				this.state = 2545;
				this.ident();
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
	public merge_condition(): Merge_conditionContext {
		let localctx: Merge_conditionContext = new Merge_conditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 356, HiveSql.RULE_merge_condition);
		let _la: number;
		try {
			this.state = 2561;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 306:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2548;
				this.match(HiveSql.T_WHEN);
				this.state = 2550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===188) {
					{
					this.state = 2549;
					this.match(HiveSql.T_NOT);
					}
				}

				this.state = 2552;
				this.match(HiveSql.T_MATCHED);
				this.state = 2555;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===6) {
					{
					this.state = 2553;
					this.match(HiveSql.T_AND);
					this.state = 2554;
					this.bool_expr(0);
					}
				}

				this.state = 2557;
				this.match(HiveSql.T_THEN);
				this.state = 2558;
				this.merge_action();
				}
				break;
			case 89:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2559;
				this.match(HiveSql.T_ELSE);
				this.state = 2560;
				this.match(HiveSql.T_IGNORE);
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
	public merge_action(): Merge_actionContext {
		let localctx: Merge_actionContext = new Merge_actionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 358, HiveSql.RULE_merge_action);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2583;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 138:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2563;
				this.match(HiveSql.T_INSERT);
				this.state = 2565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===360) {
					{
					this.state = 2564;
					this.insert_stmt_cols();
					}
				}

				this.state = 2567;
				this.match(HiveSql.T_VALUES);
				this.state = 2568;
				this.insert_stmt_row();
				}
				break;
			case 295:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2569;
				this.match(HiveSql.T_UPDATE);
				this.state = 2570;
				this.match(HiveSql.T_SET);
				this.state = 2571;
				this.assignment_stmt_item();
				this.state = 2576;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 322, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2572;
						this.match(HiveSql.T_COMMA);
						this.state = 2573;
						this.assignment_stmt_item();
						}
						}
					}
					this.state = 2578;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 322, this._ctx);
				}
				this.state = 2580;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 323, this._ctx) ) {
				case 1:
					{
					this.state = 2579;
					this.where_clause();
					}
					break;
				}
				}
				break;
			case 75:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2582;
				this.match(HiveSql.T_DELETE);
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
	public delete_stmt(): Delete_stmtContext {
		let localctx: Delete_stmtContext = new Delete_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 360, HiveSql.RULE_delete_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2585;
			this.match(HiveSql.T_DELETE);
			this.state = 2587;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 325, this._ctx) ) {
			case 1:
				{
				this.state = 2586;
				this.match(HiveSql.T_FROM);
				}
				break;
			}
			this.state = 2589;
			this.table_name();
			this.state = 2591;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 326, this._ctx) ) {
			case 1:
				{
				this.state = 2590;
				this.delete_alias();
				}
				break;
			}
			this.state = 2595;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 327, this._ctx) ) {
			case 1:
				{
				this.state = 2593;
				this.where_clause();
				}
				break;
			case 2:
				{
				this.state = 2594;
				this.match(HiveSql.T_ALL);
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
	public delete_alias(): Delete_aliasContext {
		let localctx: Delete_aliasContext = new Delete_aliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 362, HiveSql.RULE_delete_alias);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2597;
			if (!(this._input.LT(1).text.toUpperCase() !== "ALL")) {
				throw this.createFailedPredicateException("this._input.LT(1).text.toUpperCase() !== \"ALL\"");
			}
			this.state = 2599;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 328, this._ctx) ) {
			case 1:
				{
				this.state = 2598;
				this.match(HiveSql.T_AS);
				}
				break;
			}
			this.state = 2601;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public describe_stmt(): Describe_stmtContext {
		let localctx: Describe_stmtContext = new Describe_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 364, HiveSql.RULE_describe_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2603;
			_la = this._input.LA(1);
			if(!(_la===78 || _la===79)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 2605;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 329, this._ctx) ) {
			case 1:
				{
				this.state = 2604;
				this.match(HiveSql.T_TABLE);
				}
				break;
			}
			this.state = 2607;
			this.table_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public bool_expr(): Bool_exprContext;
	public bool_expr(_p: number): Bool_exprContext;
	// @RuleVersion(0)
	public bool_expr(_p?: number): Bool_exprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Bool_exprContext = new Bool_exprContext(this, this._ctx, _parentState);
		let _prevctx: Bool_exprContext = localctx;
		let _startState: number = 366;
		this.enterRecursionRule(localctx, 366, HiveSql.RULE_bool_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2618;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 331, this._ctx) ) {
			case 1:
				{
				this.state = 2611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===188) {
					{
					this.state = 2610;
					this.match(HiveSql.T_NOT);
					}
				}

				this.state = 2613;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2614;
				this.bool_expr(0);
				this.state = 2615;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 2:
				{
				this.state = 2617;
				this.bool_expr_atom();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2626;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 332, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new Bool_exprContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, HiveSql.RULE_bool_expr);
					this.state = 2620;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 2621;
					this.bool_expr_logical_operator();
					this.state = 2622;
					this.bool_expr(3);
					}
					}
				}
				this.state = 2628;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 332, this._ctx);
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
	public bool_expr_atom(): Bool_expr_atomContext {
		let localctx: Bool_expr_atomContext = new Bool_expr_atomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 368, HiveSql.RULE_bool_expr_atom);
		try {
			this.state = 2632;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 333, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2629;
				this.bool_expr_unary();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2630;
				this.bool_expr_binary();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2631;
				this.expr(0);
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
	public bool_expr_unary(): Bool_expr_unaryContext {
		let localctx: Bool_expr_unaryContext = new Bool_expr_unaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 370, HiveSql.RULE_bool_expr_unary);
		let _la: number;
		try {
			this.state = 2657;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 336, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2634;
				this.expr(0);
				this.state = 2635;
				this.match(HiveSql.T_IS);
				this.state = 2637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===188) {
					{
					this.state = 2636;
					this.match(HiveSql.T_NOT);
					}
				}

				this.state = 2639;
				this.match(HiveSql.T_NULL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2641;
				this.expr(0);
				this.state = 2642;
				this.match(HiveSql.T_BETWEEN);
				this.state = 2643;
				this.expr(0);
				this.state = 2644;
				this.match(HiveSql.T_AND);
				this.state = 2645;
				this.expr(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2648;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===188) {
					{
					this.state = 2647;
					this.match(HiveSql.T_NOT);
					}
				}

				this.state = 2650;
				this.match(HiveSql.T_EXISTS);
				this.state = 2651;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2652;
				this.select_stmt();
				this.state = 2653;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2655;
				this.bool_expr_single_in();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2656;
				this.bool_expr_multi_in();
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
	public bool_expr_single_in(): Bool_expr_single_inContext {
		let localctx: Bool_expr_single_inContext = new Bool_expr_single_inContext(this, this._ctx, this.state);
		this.enterRule(localctx, 372, HiveSql.RULE_bool_expr_single_in);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2659;
			this.expr(0);
			this.state = 2661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===188) {
				{
				this.state = 2660;
				this.match(HiveSql.T_NOT);
				}
			}

			this.state = 2663;
			this.match(HiveSql.T_IN);
			this.state = 2664;
			this.match(HiveSql.T_OPEN_P);
			this.state = 2674;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 339, this._ctx) ) {
			case 1:
				{
				{
				this.state = 2665;
				this.expr(0);
				this.state = 2670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===341) {
					{
					{
					this.state = 2666;
					this.match(HiveSql.T_COMMA);
					this.state = 2667;
					this.expr(0);
					}
					}
					this.state = 2672;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;
			case 2:
				{
				this.state = 2673;
				this.select_stmt();
				}
				break;
			}
			this.state = 2676;
			this.match(HiveSql.T_CLOSE_P);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bool_expr_multi_in(): Bool_expr_multi_inContext {
		let localctx: Bool_expr_multi_inContext = new Bool_expr_multi_inContext(this, this._ctx, this.state);
		this.enterRule(localctx, 374, HiveSql.RULE_bool_expr_multi_in);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2678;
			this.match(HiveSql.T_OPEN_P);
			this.state = 2679;
			this.expr(0);
			this.state = 2684;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===341) {
				{
				{
				this.state = 2680;
				this.match(HiveSql.T_COMMA);
				this.state = 2681;
				this.expr(0);
				}
				}
				this.state = 2686;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2687;
			this.match(HiveSql.T_CLOSE_P);
			this.state = 2689;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===188) {
				{
				this.state = 2688;
				this.match(HiveSql.T_NOT);
				}
			}

			this.state = 2691;
			this.match(HiveSql.T_IN);
			this.state = 2692;
			this.match(HiveSql.T_OPEN_P);
			this.state = 2693;
			this.select_stmt();
			this.state = 2694;
			this.match(HiveSql.T_CLOSE_P);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bool_expr_binary(): Bool_expr_binaryContext {
		let localctx: Bool_expr_binaryContext = new Bool_expr_binaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 376, HiveSql.RULE_bool_expr_binary);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2696;
			this.expr(0);
			this.state = 2697;
			this.bool_expr_binary_operator();
			this.state = 2698;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bool_expr_logical_operator(): Bool_expr_logical_operatorContext {
		let localctx: Bool_expr_logical_operatorContext = new Bool_expr_logical_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 378, HiveSql.RULE_bool_expr_logical_operator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2700;
			_la = this._input.LA(1);
			if(!(_la===6 || _la===198)) {
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
	public bool_expr_binary_operator(): Bool_expr_binary_operatorContext {
		let localctx: Bool_expr_binary_operatorContext = new Bool_expr_binary_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 380, HiveSql.RULE_bool_expr_binary_operator);
		let _la: number;
		try {
			this.state = 2714;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 346:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2702;
				this.match(HiveSql.T_EQUAL);
				}
				break;
			case 347:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2703;
				this.match(HiveSql.T_EQUAL2);
				}
				break;
			case 350:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2704;
				this.match(HiveSql.T_NOTEQUAL);
				}
				break;
			case 351:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2705;
				this.match(HiveSql.T_NOTEQUAL2);
				}
				break;
			case 354:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2706;
				this.match(HiveSql.T_LESS);
				}
				break;
			case 355:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2707;
				this.match(HiveSql.T_LESSEQUAL);
				}
				break;
			case 352:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2708;
				this.match(HiveSql.T_GREATER);
				}
				break;
			case 353:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2709;
				this.match(HiveSql.T_GREATEREQUAL);
				}
				break;
			case 158:
			case 188:
			case 223:
			case 233:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 2711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===188) {
					{
					this.state = 2710;
					this.match(HiveSql.T_NOT);
					}
				}

				this.state = 2713;
				_la = this._input.LA(1);
				if(!(_la===158 || _la===223 || _la===233)) {
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

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 382;
		this.enterRecursionRule(localctx, 382, HiveSql.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2733;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 344, this._ctx) ) {
			case 1:
				{
				this.state = 2717;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2718;
				this.select_stmt();
				this.state = 2719;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 2:
				{
				this.state = 2721;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2722;
				this.expr(0);
				this.state = 2723;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 3:
				{
				this.state = 2725;
				this.expr_interval();
				}
				break;
			case 4:
				{
				this.state = 2726;
				this.expr_concat();
				}
				break;
			case 5:
				{
				this.state = 2727;
				this.expr_case();
				}
				break;
			case 6:
				{
				this.state = 2728;
				this.expr_cursor_attribute();
				}
				break;
			case 7:
				{
				this.state = 2729;
				this.expr_agg_window_func();
				}
				break;
			case 8:
				{
				this.state = 2730;
				this.expr_spec_func();
				}
				break;
			case 9:
				{
				this.state = 2731;
				this.expr_func();
				}
				break;
			case 10:
				{
				this.state = 2732;
				this.expr_atom();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2751;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 346, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2749;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 345, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, HiveSql.RULE_expr);
						this.state = 2735;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 2736;
						this.match(HiveSql.T_MUL);
						this.state = 2737;
						this.expr(15);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, HiveSql.RULE_expr);
						this.state = 2738;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 2739;
						this.match(HiveSql.T_DIV);
						this.state = 2740;
						this.expr(14);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, HiveSql.RULE_expr);
						this.state = 2741;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 2742;
						this.match(HiveSql.T_ADD);
						this.state = 2743;
						this.expr(13);
						}
						break;
					case 4:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, HiveSql.RULE_expr);
						this.state = 2744;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 2745;
						this.match(HiveSql.T_SUB);
						this.state = 2746;
						this.expr(12);
						}
						break;
					case 5:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, HiveSql.RULE_expr);
						this.state = 2747;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 2748;
						this.interval_item();
						}
						break;
					}
					}
				}
				this.state = 2753;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 346, this._ctx);
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
	public expr_atom(): Expr_atomContext {
		let localctx: Expr_atomContext = new Expr_atomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 384, HiveSql.RULE_expr_atom);
		try {
			this.state = 2762;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 347, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2754;
				this.date_literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2755;
				this.timestamp_literal();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2756;
				this.bool_literal();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2757;
				this.ident();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2758;
				this.string_();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2759;
				this.dec_number();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2760;
				this.int_number();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2761;
				this.null_const();
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
	public expr_interval(): Expr_intervalContext {
		let localctx: Expr_intervalContext = new Expr_intervalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 386, HiveSql.RULE_expr_interval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2764;
			this.match(HiveSql.T_INTERVAL);
			this.state = 2765;
			this.expr(0);
			this.state = 2766;
			this.interval_item();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interval_item(): Interval_itemContext {
		let localctx: Interval_itemContext = new Interval_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 388, HiveSql.RULE_interval_item);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2768;
			_la = this._input.LA(1);
			if(!(_la===65 || _la===66 || _la===176 || _la===177 || _la===245 || _la===246)) {
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
	public expr_concat(): Expr_concatContext {
		let localctx: Expr_concatContext = new Expr_concatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 390, HiveSql.RULE_expr_concat);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2770;
			this.expr_concat_item();
			this.state = 2771;
			_la = this._input.LA(1);
			if(!(_la===47 || _la===342)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 2772;
			this.expr_concat_item();
			this.state = 2777;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 348, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2773;
					_la = this._input.LA(1);
					if(!(_la===47 || _la===342)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 2774;
					this.expr_concat_item();
					}
					}
				}
				this.state = 2779;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 348, this._ctx);
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
	public expr_concat_item(): Expr_concat_itemContext {
		let localctx: Expr_concat_itemContext = new Expr_concat_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 392, HiveSql.RULE_expr_concat_item);
		try {
			this.state = 2789;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 349, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2780;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2781;
				this.expr(0);
				this.state = 2782;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2784;
				this.expr_case();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2785;
				this.expr_agg_window_func();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2786;
				this.expr_spec_func();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2787;
				this.expr_func();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2788;
				this.expr_atom();
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
	public expr_case(): Expr_caseContext {
		let localctx: Expr_caseContext = new Expr_caseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 394, HiveSql.RULE_expr_case);
		try {
			this.state = 2793;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 350, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2791;
				this.expr_case_simple();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2792;
				this.expr_case_searched();
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
	public expr_case_simple(): Expr_case_simpleContext {
		let localctx: Expr_case_simpleContext = new Expr_case_simpleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 396, HiveSql.RULE_expr_case_simple);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2795;
			this.match(HiveSql.T_CASE);
			this.state = 2796;
			this.expr(0);
			this.state = 2802;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2797;
				this.match(HiveSql.T_WHEN);
				this.state = 2798;
				this.expr(0);
				this.state = 2799;
				this.match(HiveSql.T_THEN);
				this.state = 2800;
				this.expr(0);
				}
				}
				this.state = 2804;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===306);
			this.state = 2808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===89) {
				{
				this.state = 2806;
				this.match(HiveSql.T_ELSE);
				this.state = 2807;
				this.expr(0);
				}
			}

			this.state = 2810;
			this.match(HiveSql.T_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr_case_searched(): Expr_case_searchedContext {
		let localctx: Expr_case_searchedContext = new Expr_case_searchedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 398, HiveSql.RULE_expr_case_searched);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2812;
			this.match(HiveSql.T_CASE);
			this.state = 2818;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2813;
				this.match(HiveSql.T_WHEN);
				this.state = 2814;
				this.bool_expr(0);
				this.state = 2815;
				this.match(HiveSql.T_THEN);
				this.state = 2816;
				this.expr(0);
				}
				}
				this.state = 2820;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===306);
			this.state = 2824;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===89) {
				{
				this.state = 2822;
				this.match(HiveSql.T_ELSE);
				this.state = 2823;
				this.expr(0);
				}
			}

			this.state = 2826;
			this.match(HiveSql.T_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr_cursor_attribute(): Expr_cursor_attributeContext {
		let localctx: Expr_cursor_attributeContext = new Expr_cursor_attributeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 400, HiveSql.RULE_expr_cursor_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2828;
			this.ident();
			this.state = 2829;
			this.match(HiveSql.T_PRECENT);
			this.state = 2830;
			_la = this._input.LA(1);
			if(!(_la===113 || _la===149 || _la===189)) {
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
	public expr_agg_window_func(): Expr_agg_window_funcContext {
		let localctx: Expr_agg_window_funcContext = new Expr_agg_window_funcContext(this, this._ctx, this.state);
		this.enterRule(localctx, 402, HiveSql.RULE_expr_agg_window_func);
		let _la: number;
		try {
			this.state = 2984;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2832;
				this.match(HiveSql.T_AVG);
				this.state = 2833;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2835;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 355, this._ctx) ) {
				case 1:
					{
					this.state = 2834;
					this.expr_func_all_distinct();
					}
					break;
				}
				this.state = 2837;
				this.expr(0);
				this.state = 2838;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 2840;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 356, this._ctx) ) {
				case 1:
					{
					this.state = 2839;
					this.expr_func_over_clause();
					}
					break;
				}
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2842;
				this.match(HiveSql.T_COUNT);
				this.state = 2843;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2849;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
				case 20:
				case 22:
				case 23:
				case 24:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
				case 30:
				case 31:
				case 32:
				case 33:
				case 34:
				case 35:
				case 36:
				case 37:
				case 38:
				case 39:
				case 40:
				case 41:
				case 42:
				case 43:
				case 44:
				case 45:
				case 46:
				case 47:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 66:
				case 67:
				case 68:
				case 69:
				case 70:
				case 71:
				case 72:
				case 73:
				case 74:
				case 75:
				case 76:
				case 77:
				case 78:
				case 79:
				case 80:
				case 81:
				case 82:
				case 83:
				case 84:
				case 85:
				case 86:
				case 87:
				case 88:
				case 92:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
				case 100:
				case 101:
				case 102:
				case 103:
				case 104:
				case 105:
				case 106:
				case 107:
				case 108:
				case 109:
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
				case 122:
				case 123:
				case 124:
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
				case 141:
				case 142:
				case 143:
				case 144:
				case 145:
				case 146:
				case 147:
				case 148:
				case 149:
				case 150:
				case 151:
				case 152:
				case 153:
				case 154:
				case 155:
				case 156:
				case 157:
				case 158:
				case 159:
				case 160:
				case 161:
				case 162:
				case 163:
				case 164:
				case 165:
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
				case 181:
				case 182:
				case 183:
				case 184:
				case 185:
				case 186:
				case 187:
				case 188:
				case 189:
				case 190:
				case 191:
				case 192:
				case 193:
				case 194:
				case 195:
				case 196:
				case 197:
				case 198:
				case 199:
				case 200:
				case 201:
				case 202:
				case 203:
				case 204:
				case 205:
				case 206:
				case 207:
				case 208:
				case 210:
				case 211:
				case 212:
				case 213:
				case 214:
				case 215:
				case 216:
				case 217:
				case 218:
				case 219:
				case 220:
				case 221:
				case 222:
				case 223:
				case 224:
				case 225:
				case 226:
				case 227:
				case 228:
				case 229:
				case 230:
				case 231:
				case 232:
				case 233:
				case 234:
				case 235:
				case 236:
				case 237:
				case 239:
				case 240:
				case 241:
				case 242:
				case 243:
				case 244:
				case 245:
				case 246:
				case 247:
				case 248:
				case 249:
				case 250:
				case 251:
				case 252:
				case 253:
				case 254:
				case 255:
				case 256:
				case 257:
				case 258:
				case 260:
				case 261:
				case 262:
				case 263:
				case 264:
				case 265:
				case 266:
				case 267:
				case 268:
				case 269:
				case 270:
				case 271:
				case 272:
				case 273:
				case 274:
				case 275:
				case 276:
				case 277:
				case 278:
				case 279:
				case 280:
				case 281:
				case 282:
				case 283:
				case 284:
				case 286:
				case 287:
				case 288:
				case 289:
				case 290:
				case 291:
				case 294:
				case 295:
				case 296:
				case 297:
				case 298:
				case 299:
				case 300:
				case 301:
				case 302:
				case 303:
				case 304:
				case 305:
				case 308:
				case 309:
				case 310:
				case 311:
				case 312:
				case 313:
				case 314:
				case 315:
				case 316:
				case 317:
				case 318:
				case 319:
				case 320:
				case 321:
				case 322:
				case 323:
				case 324:
				case 325:
				case 326:
				case 327:
				case 328:
				case 329:
				case 330:
				case 331:
				case 332:
				case 333:
				case 334:
				case 335:
				case 336:
				case 337:
				case 338:
				case 339:
				case 360:
				case 366:
				case 367:
				case 368:
				case 369:
				case 370:
				case 371:
					{
					{
					this.state = 2845;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 357, this._ctx) ) {
					case 1:
						{
						this.state = 2844;
						this.expr_func_all_distinct();
						}
						break;
					}
					this.state = 2847;
					this.expr(0);
					}
					}
					break;
				case 356:
					{
					this.state = 2848;
					this.match(HiveSql.T_MUL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2851;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 2853;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 359, this._ctx) ) {
				case 1:
					{
					this.state = 2852;
					this.expr_func_over_clause();
					}
					break;
				}
				}
				break;
			case 53:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2855;
				this.match(HiveSql.T_COUNT_BIG);
				this.state = 2856;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2862;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
				case 20:
				case 22:
				case 23:
				case 24:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
				case 30:
				case 31:
				case 32:
				case 33:
				case 34:
				case 35:
				case 36:
				case 37:
				case 38:
				case 39:
				case 40:
				case 41:
				case 42:
				case 43:
				case 44:
				case 45:
				case 46:
				case 47:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 66:
				case 67:
				case 68:
				case 69:
				case 70:
				case 71:
				case 72:
				case 73:
				case 74:
				case 75:
				case 76:
				case 77:
				case 78:
				case 79:
				case 80:
				case 81:
				case 82:
				case 83:
				case 84:
				case 85:
				case 86:
				case 87:
				case 88:
				case 92:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
				case 100:
				case 101:
				case 102:
				case 103:
				case 104:
				case 105:
				case 106:
				case 107:
				case 108:
				case 109:
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
				case 122:
				case 123:
				case 124:
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
				case 141:
				case 142:
				case 143:
				case 144:
				case 145:
				case 146:
				case 147:
				case 148:
				case 149:
				case 150:
				case 151:
				case 152:
				case 153:
				case 154:
				case 155:
				case 156:
				case 157:
				case 158:
				case 159:
				case 160:
				case 161:
				case 162:
				case 163:
				case 164:
				case 165:
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
				case 181:
				case 182:
				case 183:
				case 184:
				case 185:
				case 186:
				case 187:
				case 188:
				case 189:
				case 190:
				case 191:
				case 192:
				case 193:
				case 194:
				case 195:
				case 196:
				case 197:
				case 198:
				case 199:
				case 200:
				case 201:
				case 202:
				case 203:
				case 204:
				case 205:
				case 206:
				case 207:
				case 208:
				case 210:
				case 211:
				case 212:
				case 213:
				case 214:
				case 215:
				case 216:
				case 217:
				case 218:
				case 219:
				case 220:
				case 221:
				case 222:
				case 223:
				case 224:
				case 225:
				case 226:
				case 227:
				case 228:
				case 229:
				case 230:
				case 231:
				case 232:
				case 233:
				case 234:
				case 235:
				case 236:
				case 237:
				case 239:
				case 240:
				case 241:
				case 242:
				case 243:
				case 244:
				case 245:
				case 246:
				case 247:
				case 248:
				case 249:
				case 250:
				case 251:
				case 252:
				case 253:
				case 254:
				case 255:
				case 256:
				case 257:
				case 258:
				case 260:
				case 261:
				case 262:
				case 263:
				case 264:
				case 265:
				case 266:
				case 267:
				case 268:
				case 269:
				case 270:
				case 271:
				case 272:
				case 273:
				case 274:
				case 275:
				case 276:
				case 277:
				case 278:
				case 279:
				case 280:
				case 281:
				case 282:
				case 283:
				case 284:
				case 286:
				case 287:
				case 288:
				case 289:
				case 290:
				case 291:
				case 294:
				case 295:
				case 296:
				case 297:
				case 298:
				case 299:
				case 300:
				case 301:
				case 302:
				case 303:
				case 304:
				case 305:
				case 308:
				case 309:
				case 310:
				case 311:
				case 312:
				case 313:
				case 314:
				case 315:
				case 316:
				case 317:
				case 318:
				case 319:
				case 320:
				case 321:
				case 322:
				case 323:
				case 324:
				case 325:
				case 326:
				case 327:
				case 328:
				case 329:
				case 330:
				case 331:
				case 332:
				case 333:
				case 334:
				case 335:
				case 336:
				case 337:
				case 338:
				case 339:
				case 360:
				case 366:
				case 367:
				case 368:
				case 369:
				case 370:
				case 371:
					{
					{
					this.state = 2858;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 360, this._ctx) ) {
					case 1:
						{
						this.state = 2857;
						this.expr_func_all_distinct();
						}
						break;
					}
					this.state = 2860;
					this.expr(0);
					}
					}
					break;
				case 356:
					{
					this.state = 2861;
					this.match(HiveSql.T_MUL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2864;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 2866;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 362, this._ctx) ) {
				case 1:
					{
					this.state = 2865;
					this.expr_func_over_clause();
					}
					break;
				}
				}
				break;
			case 316:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2868;
				this.match(HiveSql.T_CUME_DIST);
				this.state = 2869;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2870;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 2871;
				this.expr_func_over_clause();
				}
				break;
			case 320:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2872;
				this.match(HiveSql.T_DENSE_RANK);
				this.state = 2873;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2874;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 2875;
				this.expr_func_over_clause();
				}
				break;
			case 321:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2876;
				this.match(HiveSql.T_FIRST_VALUE);
				this.state = 2877;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2878;
				this.expr(0);
				this.state = 2879;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 2880;
				this.expr_func_over_clause();
				}
				break;
			case 322:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2882;
				this.match(HiveSql.T_LAG);
				this.state = 2883;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2884;
				this.expr(0);
				this.state = 2891;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===341) {
					{
					this.state = 2885;
					this.match(HiveSql.T_COMMA);
					this.state = 2886;
					this.expr(0);
					this.state = 2889;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===341) {
						{
						this.state = 2887;
						this.match(HiveSql.T_COMMA);
						this.state = 2888;
						this.expr(0);
						}
					}

					}
				}

				this.state = 2893;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 2894;
				this.expr_func_over_clause();
				}
				break;
			case 323:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2896;
				this.match(HiveSql.T_LAST_VALUE);
				this.state = 2897;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2898;
				this.expr(0);
				this.state = 2899;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 2900;
				this.expr_func_over_clause();
				}
				break;
			case 324:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 2902;
				this.match(HiveSql.T_LEAD);
				this.state = 2903;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2904;
				this.expr(0);
				this.state = 2911;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===341) {
					{
					this.state = 2905;
					this.match(HiveSql.T_COMMA);
					this.state = 2906;
					this.expr(0);
					this.state = 2909;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===341) {
						{
						this.state = 2907;
						this.match(HiveSql.T_COMMA);
						this.state = 2908;
						this.expr(0);
						}
					}

					}
				}

				this.state = 2913;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 2914;
				this.expr_func_over_clause();
				}
				break;
			case 172:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 2916;
				this.match(HiveSql.T_MAX);
				this.state = 2917;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2919;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 367, this._ctx) ) {
				case 1:
					{
					this.state = 2918;
					this.expr_func_all_distinct();
					}
					break;
				}
				this.state = 2921;
				this.expr(0);
				this.state = 2922;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 2924;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 368, this._ctx) ) {
				case 1:
					{
					this.state = 2923;
					this.expr_func_over_clause();
					}
					break;
				}
				}
				break;
			case 178:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 2926;
				this.match(HiveSql.T_MIN);
				this.state = 2927;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2929;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 369, this._ctx) ) {
				case 1:
					{
					this.state = 2928;
					this.expr_func_all_distinct();
					}
					break;
				}
				this.state = 2931;
				this.expr(0);
				this.state = 2932;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 2934;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 370, this._ctx) ) {
				case 1:
					{
					this.state = 2933;
					this.expr_func_over_clause();
					}
					break;
				}
				}
				break;
			case 333:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 2936;
				this.match(HiveSql.T_RANK);
				this.state = 2937;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2938;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 2939;
				this.expr_func_over_clause();
				}
				break;
			case 334:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 2940;
				this.match(HiveSql.T_ROW_NUMBER);
				this.state = 2941;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2942;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 2943;
				this.expr_func_over_clause();
				}
				break;
			case 335:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 2944;
				this.match(HiveSql.T_STDEV);
				this.state = 2945;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2947;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 371, this._ctx) ) {
				case 1:
					{
					this.state = 2946;
					this.expr_func_all_distinct();
					}
					break;
				}
				this.state = 2949;
				this.expr(0);
				this.state = 2950;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 2952;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 372, this._ctx) ) {
				case 1:
					{
					this.state = 2951;
					this.expr_func_over_clause();
					}
					break;
				}
				}
				break;
			case 275:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 2954;
				this.match(HiveSql.T_SUM);
				this.state = 2955;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2957;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 373, this._ctx) ) {
				case 1:
					{
					this.state = 2956;
					this.expr_func_all_distinct();
					}
					break;
				}
				this.state = 2959;
				this.expr(0);
				this.state = 2960;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 2962;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 374, this._ctx) ) {
				case 1:
					{
					this.state = 2961;
					this.expr_func_over_clause();
					}
					break;
				}
				}
				break;
			case 301:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 2964;
				this.match(HiveSql.T_VAR);
				this.state = 2965;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2967;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 375, this._ctx) ) {
				case 1:
					{
					this.state = 2966;
					this.expr_func_all_distinct();
					}
					break;
				}
				this.state = 2969;
				this.expr(0);
				this.state = 2970;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 2972;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 376, this._ctx) ) {
				case 1:
					{
					this.state = 2971;
					this.expr_func_over_clause();
					}
					break;
				}
				}
				break;
			case 337:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 2974;
				this.match(HiveSql.T_VARIANCE);
				this.state = 2975;
				this.match(HiveSql.T_OPEN_P);
				this.state = 2977;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 377, this._ctx) ) {
				case 1:
					{
					this.state = 2976;
					this.expr_func_all_distinct();
					}
					break;
				}
				this.state = 2979;
				this.expr(0);
				this.state = 2980;
				this.match(HiveSql.T_CLOSE_P);
				this.state = 2982;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 378, this._ctx) ) {
				case 1:
					{
					this.state = 2981;
					this.expr_func_over_clause();
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
	public expr_func_all_distinct(): Expr_func_all_distinctContext {
		let localctx: Expr_func_all_distinctContext = new Expr_func_all_distinctContext(this, this._ctx, this.state);
		this.enterRule(localctx, 404, HiveSql.RULE_expr_func_all_distinct);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2986;
			_la = this._input.LA(1);
			if(!(_la===3 || _la===83)) {
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
	public expr_func_over_clause(): Expr_func_over_clauseContext {
		let localctx: Expr_func_over_clauseContext = new Expr_func_over_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 406, HiveSql.RULE_expr_func_over_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2988;
			this.match(HiveSql.T_OVER);
			this.state = 2989;
			this.match(HiveSql.T_OPEN_P);
			this.state = 2991;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===206) {
				{
				this.state = 2990;
				this.expr_func_partition_by_clause();
				}
			}

			this.state = 2994;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===199) {
				{
				this.state = 2993;
				this.order_by_clause();
				}
			}

			this.state = 2996;
			this.match(HiveSql.T_CLOSE_P);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr_func_partition_by_clause(): Expr_func_partition_by_clauseContext {
		let localctx: Expr_func_partition_by_clauseContext = new Expr_func_partition_by_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 408, HiveSql.RULE_expr_func_partition_by_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2998;
			this.match(HiveSql.T_PARTITION);
			this.state = 2999;
			this.match(HiveSql.T_BY);
			this.state = 3000;
			this.expr(0);
			this.state = 3005;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===341) {
				{
				{
				this.state = 3001;
				this.match(HiveSql.T_COMMA);
				this.state = 3002;
				this.expr(0);
				}
				}
				this.state = 3007;
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
	public expr_spec_func(): Expr_spec_funcContext {
		let localctx: Expr_spec_funcContext = new Expr_spec_funcContext(this, this._ctx, this.state);
		this.enterRule(localctx, 410, HiveSql.RULE_expr_spec_func);
		let _la: number;
		try {
			let _alt: number;
			this.state = 3208;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 403, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3008;
				this.match(HiveSql.T_ACTIVITY_COUNT);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3009;
				this.match(HiveSql.T_CAST);
				this.state = 3010;
				this.match(HiveSql.T_OPEN_P);
				this.state = 3011;
				this.expr(0);
				this.state = 3012;
				this.match(HiveSql.T_AS);
				this.state = 3013;
				this.dtype();
				this.state = 3015;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===360) {
					{
					this.state = 3014;
					this.dtype_len();
					}
				}

				this.state = 3017;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 3019;
				this.match(HiveSql.T_COUNT);
				this.state = 3020;
				this.match(HiveSql.T_OPEN_P);
				this.state = 3023;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
				case 20:
				case 22:
				case 23:
				case 24:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
				case 30:
				case 31:
				case 32:
				case 33:
				case 34:
				case 35:
				case 36:
				case 37:
				case 38:
				case 39:
				case 40:
				case 41:
				case 42:
				case 43:
				case 44:
				case 45:
				case 46:
				case 47:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 66:
				case 67:
				case 68:
				case 69:
				case 70:
				case 71:
				case 72:
				case 73:
				case 74:
				case 75:
				case 76:
				case 77:
				case 78:
				case 79:
				case 80:
				case 81:
				case 82:
				case 83:
				case 84:
				case 85:
				case 86:
				case 87:
				case 88:
				case 92:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
				case 100:
				case 101:
				case 102:
				case 103:
				case 104:
				case 105:
				case 106:
				case 107:
				case 108:
				case 109:
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
				case 122:
				case 123:
				case 124:
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
				case 141:
				case 142:
				case 143:
				case 144:
				case 145:
				case 146:
				case 147:
				case 148:
				case 149:
				case 150:
				case 151:
				case 152:
				case 153:
				case 154:
				case 155:
				case 156:
				case 157:
				case 158:
				case 159:
				case 160:
				case 161:
				case 162:
				case 163:
				case 164:
				case 165:
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
				case 181:
				case 182:
				case 183:
				case 184:
				case 185:
				case 186:
				case 187:
				case 188:
				case 189:
				case 190:
				case 191:
				case 192:
				case 193:
				case 194:
				case 195:
				case 196:
				case 197:
				case 198:
				case 199:
				case 200:
				case 201:
				case 202:
				case 203:
				case 204:
				case 205:
				case 206:
				case 207:
				case 208:
				case 210:
				case 211:
				case 212:
				case 213:
				case 214:
				case 215:
				case 216:
				case 217:
				case 218:
				case 219:
				case 220:
				case 221:
				case 222:
				case 223:
				case 224:
				case 225:
				case 226:
				case 227:
				case 228:
				case 229:
				case 230:
				case 231:
				case 232:
				case 233:
				case 234:
				case 235:
				case 236:
				case 237:
				case 239:
				case 240:
				case 241:
				case 242:
				case 243:
				case 244:
				case 245:
				case 246:
				case 247:
				case 248:
				case 249:
				case 250:
				case 251:
				case 252:
				case 253:
				case 254:
				case 255:
				case 256:
				case 257:
				case 258:
				case 260:
				case 261:
				case 262:
				case 263:
				case 264:
				case 265:
				case 266:
				case 267:
				case 268:
				case 269:
				case 270:
				case 271:
				case 272:
				case 273:
				case 274:
				case 275:
				case 276:
				case 277:
				case 278:
				case 279:
				case 280:
				case 281:
				case 282:
				case 283:
				case 284:
				case 286:
				case 287:
				case 288:
				case 289:
				case 290:
				case 291:
				case 294:
				case 295:
				case 296:
				case 297:
				case 298:
				case 299:
				case 300:
				case 301:
				case 302:
				case 303:
				case 304:
				case 305:
				case 308:
				case 309:
				case 310:
				case 311:
				case 312:
				case 313:
				case 314:
				case 315:
				case 316:
				case 317:
				case 318:
				case 319:
				case 320:
				case 321:
				case 322:
				case 323:
				case 324:
				case 325:
				case 326:
				case 327:
				case 328:
				case 329:
				case 330:
				case 331:
				case 332:
				case 333:
				case 334:
				case 335:
				case 336:
				case 337:
				case 338:
				case 339:
				case 360:
				case 366:
				case 367:
				case 368:
				case 369:
				case 370:
				case 371:
					{
					this.state = 3021;
					this.expr(0);
					}
					break;
				case 356:
					{
					this.state = 3022;
					this.match(HiveSql.T_MUL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 3025;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 3026;
				this.match(HiveSql.T_CURRENT_DATE);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 3027;
				this.match(HiveSql.T_CURRENT);
				this.state = 3028;
				this.match(HiveSql.T_DATE);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 3032;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 318:
					{
					this.state = 3029;
					this.match(HiveSql.T_CURRENT_TIMESTAMP);
					}
					break;
				case 58:
					{
					this.state = 3030;
					this.match(HiveSql.T_CURRENT);
					this.state = 3031;
					this.match(HiveSql.T_TIMESTAMP);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 3038;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 386, this._ctx) ) {
				case 1:
					{
					this.state = 3034;
					this.match(HiveSql.T_OPEN_P);
					this.state = 3035;
					this.expr(0);
					this.state = 3036;
					this.match(HiveSql.T_CLOSE_P);
					}
					break;
				}
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 3040;
				this.match(HiveSql.T_CURRENT_USER);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 3041;
				this.match(HiveSql.T_CURRENT);
				this.state = 3042;
				this.match(HiveSql.T_USER);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 3043;
				this.match(HiveSql.T_MAX_PART_STRING);
				this.state = 3044;
				this.match(HiveSql.T_OPEN_P);
				this.state = 3045;
				this.expr(0);
				this.state = 3058;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===341) {
					{
					this.state = 3046;
					this.match(HiveSql.T_COMMA);
					this.state = 3047;
					this.expr(0);
					this.state = 3055;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===341) {
						{
						{
						this.state = 3048;
						this.match(HiveSql.T_COMMA);
						this.state = 3049;
						this.expr(0);
						this.state = 3050;
						this.match(HiveSql.T_EQUAL);
						this.state = 3051;
						this.expr(0);
						}
						}
						this.state = 3057;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 3060;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 3062;
				this.match(HiveSql.T_MIN_PART_STRING);
				this.state = 3063;
				this.match(HiveSql.T_OPEN_P);
				this.state = 3064;
				this.expr(0);
				this.state = 3077;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===341) {
					{
					this.state = 3065;
					this.match(HiveSql.T_COMMA);
					this.state = 3066;
					this.expr(0);
					this.state = 3074;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===341) {
						{
						{
						this.state = 3067;
						this.match(HiveSql.T_COMMA);
						this.state = 3068;
						this.expr(0);
						this.state = 3069;
						this.match(HiveSql.T_EQUAL);
						this.state = 3070;
						this.expr(0);
						}
						}
						this.state = 3076;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 3079;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 3081;
				this.match(HiveSql.T_MAX_PART_INT);
				this.state = 3082;
				this.match(HiveSql.T_OPEN_P);
				this.state = 3083;
				this.expr(0);
				this.state = 3096;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===341) {
					{
					this.state = 3084;
					this.match(HiveSql.T_COMMA);
					this.state = 3085;
					this.expr(0);
					this.state = 3093;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===341) {
						{
						{
						this.state = 3086;
						this.match(HiveSql.T_COMMA);
						this.state = 3087;
						this.expr(0);
						this.state = 3088;
						this.match(HiveSql.T_EQUAL);
						this.state = 3089;
						this.expr(0);
						}
						}
						this.state = 3095;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 3098;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 3100;
				this.match(HiveSql.T_MIN_PART_INT);
				this.state = 3101;
				this.match(HiveSql.T_OPEN_P);
				this.state = 3102;
				this.expr(0);
				this.state = 3115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===341) {
					{
					this.state = 3103;
					this.match(HiveSql.T_COMMA);
					this.state = 3104;
					this.expr(0);
					this.state = 3112;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===341) {
						{
						{
						this.state = 3105;
						this.match(HiveSql.T_COMMA);
						this.state = 3106;
						this.expr(0);
						this.state = 3107;
						this.match(HiveSql.T_EQUAL);
						this.state = 3108;
						this.expr(0);
						}
						}
						this.state = 3114;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 3117;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 3119;
				this.match(HiveSql.T_MAX_PART_DATE);
				this.state = 3120;
				this.match(HiveSql.T_OPEN_P);
				this.state = 3121;
				this.expr(0);
				this.state = 3134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===341) {
					{
					this.state = 3122;
					this.match(HiveSql.T_COMMA);
					this.state = 3123;
					this.expr(0);
					this.state = 3131;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===341) {
						{
						{
						this.state = 3124;
						this.match(HiveSql.T_COMMA);
						this.state = 3125;
						this.expr(0);
						this.state = 3126;
						this.match(HiveSql.T_EQUAL);
						this.state = 3127;
						this.expr(0);
						}
						}
						this.state = 3133;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 3136;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 3138;
				this.match(HiveSql.T_MIN_PART_DATE);
				this.state = 3139;
				this.match(HiveSql.T_OPEN_P);
				this.state = 3140;
				this.expr(0);
				this.state = 3153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===341) {
					{
					this.state = 3141;
					this.match(HiveSql.T_COMMA);
					this.state = 3142;
					this.expr(0);
					this.state = 3150;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===341) {
						{
						{
						this.state = 3143;
						this.match(HiveSql.T_COMMA);
						this.state = 3144;
						this.expr(0);
						this.state = 3145;
						this.match(HiveSql.T_EQUAL);
						this.state = 3146;
						this.expr(0);
						}
						}
						this.state = 3152;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 3155;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 3157;
				this.match(HiveSql.T_PART_COUNT);
				this.state = 3158;
				this.match(HiveSql.T_OPEN_P);
				this.state = 3159;
				this.expr(0);
				this.state = 3167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===341) {
					{
					{
					this.state = 3160;
					this.match(HiveSql.T_COMMA);
					this.state = 3161;
					this.expr(0);
					this.state = 3162;
					this.match(HiveSql.T_EQUAL);
					this.state = 3163;
					this.expr(0);
					}
					}
					this.state = 3169;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 3170;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 3172;
				this.match(HiveSql.T_PART_LOC);
				this.state = 3173;
				this.match(HiveSql.T_OPEN_P);
				this.state = 3174;
				this.expr(0);
				this.state = 3180;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 3175;
						this.match(HiveSql.T_COMMA);
						this.state = 3176;
						this.expr(0);
						this.state = 3177;
						this.match(HiveSql.T_EQUAL);
						this.state = 3178;
						this.expr(0);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 3182;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 400, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 3186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===341) {
					{
					this.state = 3184;
					this.match(HiveSql.T_COMMA);
					this.state = 3185;
					this.expr(0);
					}
				}

				this.state = 3188;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 3190;
				this.match(HiveSql.T_TRIM);
				this.state = 3191;
				this.match(HiveSql.T_OPEN_P);
				this.state = 3192;
				this.expr(0);
				this.state = 3193;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 3195;
				this.match(HiveSql.T_SUBSTRING);
				this.state = 3196;
				this.match(HiveSql.T_OPEN_P);
				this.state = 3197;
				this.expr(0);
				this.state = 3198;
				this.match(HiveSql.T_FROM);
				this.state = 3199;
				this.expr(0);
				this.state = 3202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===110) {
					{
					this.state = 3200;
					this.match(HiveSql.T_FOR);
					this.state = 3201;
					this.expr(0);
					}
				}

				this.state = 3204;
				this.match(HiveSql.T_CLOSE_P);
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 3206;
				this.match(HiveSql.T_SYSDATE);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 3207;
				this.match(HiveSql.T_USER);
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
	public expr_func(): Expr_funcContext {
		let localctx: Expr_funcContext = new Expr_funcContext(this, this._ctx, this.state);
		this.enterRule(localctx, 412, HiveSql.RULE_expr_func);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3210;
			this.ident();
			this.state = 3211;
			this.match(HiveSql.T_OPEN_P);
			this.state = 3213;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 404, this._ctx) ) {
			case 1:
				{
				this.state = 3212;
				this.expr_func_params();
				}
				break;
			}
			this.state = 3215;
			this.match(HiveSql.T_CLOSE_P);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr_func_params(): Expr_func_paramsContext {
		let localctx: Expr_func_paramsContext = new Expr_func_paramsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 414, HiveSql.RULE_expr_func_params);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3217;
			this.func_param();
			this.state = 3222;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 405, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3218;
					this.match(HiveSql.T_COMMA);
					this.state = 3219;
					this.func_param();
					}
					}
				}
				this.state = 3224;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 405, this._ctx);
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
	public func_param(): Func_paramContext {
		let localctx: Func_paramContext = new Func_paramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 416, HiveSql.RULE_func_param);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3225;
			if (!(this._input.LT(1).text.toUpperCase() !== "INTO")) {
				throw this.createFailedPredicateException("this._input.LT(1).text.toUpperCase() !== \"INTO\"");
			}
			this.state = 3231;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 407, this._ctx) ) {
			case 1:
				{
				this.state = 3226;
				this.ident();
				this.state = 3227;
				this.match(HiveSql.T_EQUAL);
				this.state = 3229;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===352) {
					{
					this.state = 3228;
					this.match(HiveSql.T_GREATER);
					}
				}

				}
				break;
			}
			this.state = 3233;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr_select(): Expr_selectContext {
		let localctx: Expr_selectContext = new Expr_selectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 418, HiveSql.RULE_expr_select);
		try {
			this.state = 3237;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 408, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3235;
				this.select_stmt();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3236;
				this.expr(0);
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
	public expr_file(): Expr_fileContext {
		let localctx: Expr_fileContext = new Expr_fileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 420, HiveSql.RULE_expr_file);
		try {
			this.state = 3241;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 409, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3239;
				this.file_name();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3240;
				this.expr(0);
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
	public hive(): HiveContext {
		let localctx: HiveContext = new HiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 422, HiveSql.RULE_hive);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3243;
			this.match(HiveSql.T_HIVE);
			this.state = 3247;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 410, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3244;
					this.hive_item();
					}
					}
				}
				this.state = 3249;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 410, this._ctx);
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
	public hive_item(): Hive_itemContext {
		let localctx: Hive_itemContext = new Hive_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 424, HiveSql.RULE_hive_item);
		try {
			this.state = 3262;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 411, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3250;
				this.match(HiveSql.T_SUB);
				this.state = 3251;
				this.ident();
				this.state = 3252;
				this.expr(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3254;
				this.match(HiveSql.T_SUB);
				this.state = 3255;
				this.ident();
				this.state = 3256;
				this.match(HiveSql.L_ID);
				this.state = 3257;
				this.match(HiveSql.T_EQUAL);
				this.state = 3258;
				this.expr(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 3260;
				this.match(HiveSql.T_SUB);
				this.state = 3261;
				this.ident();
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
	public host(): HostContext {
		let localctx: HostContext = new HostContext(this, this._ctx, this.state);
		this.enterRule(localctx, 426, HiveSql.RULE_host);
		try {
			this.state = 3269;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 349:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3264;
				this.match(HiveSql.T_NOTE);
				this.state = 3265;
				this.host_cmd();
				this.state = 3266;
				this.match(HiveSql.T_SEMICOLON);
				}
				break;
			case 127:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3268;
				this.host_stmt();
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
	public host_cmd(): Host_cmdContext {
		let localctx: Host_cmdContext = new Host_cmdContext(this, this._ctx, this.state);
		this.enterRule(localctx, 428, HiveSql.RULE_host_cmd);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3274;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 413, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 3271;
					this.matchWildcard();
					}
					}
				}
				this.state = 3276;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 413, this._ctx);
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
	public host_stmt(): Host_stmtContext {
		let localctx: Host_stmtContext = new Host_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 430, HiveSql.RULE_host_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3277;
			this.match(HiveSql.T_HOST);
			this.state = 3278;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public file_name(): File_nameContext {
		let localctx: File_nameContext = new File_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 432, HiveSql.RULE_file_name);
		try {
			let _alt: number;
			this.state = 3294;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 375:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3280;
				this.match(HiveSql.L_FILE);
				}
				break;
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 92:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
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
			case 122:
			case 123:
			case 124:
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
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
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
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
			case 200:
			case 201:
			case 202:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 210:
			case 211:
			case 212:
			case 213:
			case 214:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 225:
			case 226:
			case 227:
			case 228:
			case 229:
			case 230:
			case 231:
			case 232:
			case 233:
			case 234:
			case 235:
			case 236:
			case 237:
			case 239:
			case 240:
			case 241:
			case 242:
			case 243:
			case 244:
			case 245:
			case 246:
			case 247:
			case 248:
			case 249:
			case 250:
			case 251:
			case 252:
			case 253:
			case 254:
			case 255:
			case 256:
			case 257:
			case 258:
			case 260:
			case 261:
			case 262:
			case 263:
			case 264:
			case 265:
			case 266:
			case 267:
			case 268:
			case 269:
			case 270:
			case 271:
			case 272:
			case 273:
			case 274:
			case 275:
			case 276:
			case 277:
			case 278:
			case 279:
			case 280:
			case 281:
			case 282:
			case 283:
			case 284:
			case 286:
			case 287:
			case 288:
			case 289:
			case 290:
			case 291:
			case 294:
			case 295:
			case 296:
			case 297:
			case 298:
			case 299:
			case 300:
			case 301:
			case 302:
			case 303:
			case 304:
			case 305:
			case 308:
			case 309:
			case 310:
			case 311:
			case 312:
			case 313:
			case 314:
			case 315:
			case 316:
			case 317:
			case 318:
			case 319:
			case 320:
			case 321:
			case 322:
			case 323:
			case 324:
			case 331:
			case 332:
			case 333:
			case 334:
			case 335:
			case 336:
			case 337:
			case 338:
			case 343:
			case 344:
			case 367:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3284;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 343:
					{
					this.state = 3281;
					this.match(HiveSql.T_DIV);
					}
					break;
				case 344:
					{
					this.state = 3282;
					this.match(HiveSql.T_DOT);
					this.state = 3283;
					this.match(HiveSql.T_DIV);
					}
					break;
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
				case 20:
				case 22:
				case 23:
				case 24:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
				case 30:
				case 31:
				case 32:
				case 33:
				case 34:
				case 35:
				case 36:
				case 37:
				case 38:
				case 39:
				case 40:
				case 41:
				case 42:
				case 43:
				case 44:
				case 45:
				case 46:
				case 47:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 66:
				case 67:
				case 68:
				case 69:
				case 70:
				case 71:
				case 72:
				case 73:
				case 74:
				case 75:
				case 76:
				case 77:
				case 78:
				case 79:
				case 80:
				case 81:
				case 82:
				case 83:
				case 84:
				case 85:
				case 86:
				case 87:
				case 88:
				case 92:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
				case 100:
				case 101:
				case 102:
				case 103:
				case 104:
				case 105:
				case 106:
				case 107:
				case 108:
				case 109:
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
				case 122:
				case 123:
				case 124:
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
				case 141:
				case 142:
				case 143:
				case 144:
				case 145:
				case 146:
				case 147:
				case 148:
				case 149:
				case 150:
				case 151:
				case 152:
				case 153:
				case 154:
				case 155:
				case 156:
				case 157:
				case 158:
				case 159:
				case 160:
				case 161:
				case 162:
				case 163:
				case 164:
				case 165:
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
				case 181:
				case 182:
				case 183:
				case 184:
				case 185:
				case 186:
				case 187:
				case 188:
				case 189:
				case 191:
				case 192:
				case 193:
				case 194:
				case 195:
				case 196:
				case 197:
				case 198:
				case 199:
				case 200:
				case 201:
				case 202:
				case 203:
				case 204:
				case 205:
				case 206:
				case 207:
				case 208:
				case 210:
				case 211:
				case 212:
				case 213:
				case 214:
				case 215:
				case 216:
				case 217:
				case 218:
				case 219:
				case 220:
				case 221:
				case 222:
				case 223:
				case 224:
				case 225:
				case 226:
				case 227:
				case 228:
				case 229:
				case 230:
				case 231:
				case 232:
				case 233:
				case 234:
				case 235:
				case 236:
				case 237:
				case 239:
				case 240:
				case 241:
				case 242:
				case 243:
				case 244:
				case 245:
				case 246:
				case 247:
				case 248:
				case 249:
				case 250:
				case 251:
				case 252:
				case 253:
				case 254:
				case 255:
				case 256:
				case 257:
				case 258:
				case 260:
				case 261:
				case 262:
				case 263:
				case 264:
				case 265:
				case 266:
				case 267:
				case 268:
				case 269:
				case 270:
				case 271:
				case 272:
				case 273:
				case 274:
				case 275:
				case 276:
				case 277:
				case 278:
				case 279:
				case 280:
				case 281:
				case 282:
				case 283:
				case 284:
				case 286:
				case 287:
				case 288:
				case 289:
				case 290:
				case 291:
				case 294:
				case 295:
				case 296:
				case 297:
				case 298:
				case 299:
				case 300:
				case 301:
				case 302:
				case 303:
				case 304:
				case 305:
				case 308:
				case 309:
				case 310:
				case 311:
				case 312:
				case 313:
				case 314:
				case 315:
				case 316:
				case 317:
				case 318:
				case 319:
				case 320:
				case 321:
				case 322:
				case 323:
				case 324:
				case 331:
				case 332:
				case 333:
				case 334:
				case 335:
				case 336:
				case 337:
				case 338:
				case 367:
					break;
				default:
					break;
				}
				this.state = 3286;
				this.ident();
				this.state = 3291;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 415, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 3287;
						this.match(HiveSql.T_DIV);
						this.state = 3288;
						this.ident();
						}
						}
					}
					this.state = 3293;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 415, this._ctx);
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
	public date_literal(): Date_literalContext {
		let localctx: Date_literalContext = new Date_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 434, HiveSql.RULE_date_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3296;
			this.match(HiveSql.T_DATE);
			this.state = 3297;
			this.string_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timestamp_literal(): Timestamp_literalContext {
		let localctx: Timestamp_literalContext = new Timestamp_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 436, HiveSql.RULE_timestamp_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3299;
			this.match(HiveSql.T_TIMESTAMP);
			this.state = 3300;
			this.string_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ident(): IdentContext {
		let localctx: IdentContext = new IdentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 438, HiveSql.RULE_ident);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3304;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 367:
				{
				this.state = 3302;
				this.match(HiveSql.L_ID);
				}
				break;
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 92:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
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
			case 122:
			case 123:
			case 124:
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
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
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
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
			case 200:
			case 201:
			case 202:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 210:
			case 211:
			case 212:
			case 213:
			case 214:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 225:
			case 226:
			case 227:
			case 228:
			case 229:
			case 230:
			case 231:
			case 232:
			case 233:
			case 234:
			case 235:
			case 236:
			case 237:
			case 239:
			case 240:
			case 241:
			case 242:
			case 243:
			case 244:
			case 245:
			case 246:
			case 247:
			case 248:
			case 249:
			case 250:
			case 251:
			case 252:
			case 253:
			case 254:
			case 255:
			case 256:
			case 257:
			case 258:
			case 260:
			case 261:
			case 262:
			case 263:
			case 264:
			case 265:
			case 266:
			case 267:
			case 268:
			case 269:
			case 270:
			case 271:
			case 272:
			case 273:
			case 274:
			case 275:
			case 276:
			case 277:
			case 278:
			case 279:
			case 280:
			case 281:
			case 282:
			case 283:
			case 284:
			case 286:
			case 287:
			case 288:
			case 289:
			case 290:
			case 291:
			case 294:
			case 295:
			case 296:
			case 297:
			case 298:
			case 299:
			case 300:
			case 301:
			case 302:
			case 303:
			case 304:
			case 305:
			case 308:
			case 309:
			case 310:
			case 311:
			case 312:
			case 313:
			case 314:
			case 315:
			case 316:
			case 317:
			case 318:
			case 319:
			case 320:
			case 321:
			case 322:
			case 323:
			case 324:
			case 331:
			case 332:
			case 333:
			case 334:
			case 335:
			case 336:
			case 337:
			case 338:
				{
				this.state = 3303;
				this.non_reserved_words();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 3313;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 419, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3306;
					this.match(HiveSql.T_DOT);
					this.state = 3309;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 367:
						{
						this.state = 3307;
						this.match(HiveSql.L_ID);
						}
						break;
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
					case 8:
					case 9:
					case 10:
					case 11:
					case 12:
					case 13:
					case 14:
					case 15:
					case 16:
					case 17:
					case 18:
					case 19:
					case 20:
					case 22:
					case 23:
					case 24:
					case 25:
					case 26:
					case 27:
					case 28:
					case 29:
					case 30:
					case 31:
					case 32:
					case 33:
					case 34:
					case 35:
					case 36:
					case 37:
					case 38:
					case 39:
					case 40:
					case 41:
					case 42:
					case 43:
					case 44:
					case 45:
					case 46:
					case 47:
					case 48:
					case 49:
					case 50:
					case 51:
					case 52:
					case 53:
					case 54:
					case 55:
					case 56:
					case 57:
					case 58:
					case 59:
					case 60:
					case 61:
					case 62:
					case 63:
					case 64:
					case 65:
					case 66:
					case 67:
					case 68:
					case 69:
					case 70:
					case 71:
					case 72:
					case 73:
					case 74:
					case 75:
					case 76:
					case 77:
					case 78:
					case 79:
					case 80:
					case 81:
					case 82:
					case 83:
					case 84:
					case 85:
					case 86:
					case 87:
					case 88:
					case 92:
					case 94:
					case 95:
					case 96:
					case 97:
					case 98:
					case 99:
					case 100:
					case 101:
					case 102:
					case 103:
					case 104:
					case 105:
					case 106:
					case 107:
					case 108:
					case 109:
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
					case 122:
					case 123:
					case 124:
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
					case 141:
					case 142:
					case 143:
					case 144:
					case 145:
					case 146:
					case 147:
					case 148:
					case 149:
					case 150:
					case 151:
					case 152:
					case 153:
					case 154:
					case 155:
					case 156:
					case 157:
					case 158:
					case 159:
					case 160:
					case 161:
					case 162:
					case 163:
					case 164:
					case 165:
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
					case 181:
					case 182:
					case 183:
					case 184:
					case 185:
					case 186:
					case 187:
					case 188:
					case 189:
					case 191:
					case 192:
					case 193:
					case 194:
					case 195:
					case 196:
					case 197:
					case 198:
					case 199:
					case 200:
					case 201:
					case 202:
					case 203:
					case 204:
					case 205:
					case 206:
					case 207:
					case 208:
					case 210:
					case 211:
					case 212:
					case 213:
					case 214:
					case 215:
					case 216:
					case 217:
					case 218:
					case 219:
					case 220:
					case 221:
					case 222:
					case 223:
					case 224:
					case 225:
					case 226:
					case 227:
					case 228:
					case 229:
					case 230:
					case 231:
					case 232:
					case 233:
					case 234:
					case 235:
					case 236:
					case 237:
					case 239:
					case 240:
					case 241:
					case 242:
					case 243:
					case 244:
					case 245:
					case 246:
					case 247:
					case 248:
					case 249:
					case 250:
					case 251:
					case 252:
					case 253:
					case 254:
					case 255:
					case 256:
					case 257:
					case 258:
					case 260:
					case 261:
					case 262:
					case 263:
					case 264:
					case 265:
					case 266:
					case 267:
					case 268:
					case 269:
					case 270:
					case 271:
					case 272:
					case 273:
					case 274:
					case 275:
					case 276:
					case 277:
					case 278:
					case 279:
					case 280:
					case 281:
					case 282:
					case 283:
					case 284:
					case 286:
					case 287:
					case 288:
					case 289:
					case 290:
					case 291:
					case 294:
					case 295:
					case 296:
					case 297:
					case 298:
					case 299:
					case 300:
					case 301:
					case 302:
					case 303:
					case 304:
					case 305:
					case 308:
					case 309:
					case 310:
					case 311:
					case 312:
					case 313:
					case 314:
					case 315:
					case 316:
					case 317:
					case 318:
					case 319:
					case 320:
					case 321:
					case 322:
					case 323:
					case 324:
					case 331:
					case 332:
					case 333:
					case 334:
					case 335:
					case 336:
					case 337:
					case 338:
						{
						this.state = 3308;
						this.non_reserved_words();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 3315;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 419, this._ctx);
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
	public string_(): StringContext {
		let localctx: StringContext = new StringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 440, HiveSql.RULE_string);
		try {
			this.state = 3318;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 368:
				localctx = new Single_quotedStringContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3316;
				this.match(HiveSql.L_S_STRING);
				}
				break;
			case 369:
				localctx = new Double_quotedStringContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3317;
				this.match(HiveSql.L_D_STRING);
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
	public int_number(): Int_numberContext {
		let localctx: Int_numberContext = new Int_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 442, HiveSql.RULE_int_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===339 || _la===366) {
				{
				this.state = 3320;
				_la = this._input.LA(1);
				if(!(_la===339 || _la===366)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 3323;
			this.match(HiveSql.L_INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dec_number(): Dec_numberContext {
		let localctx: Dec_numberContext = new Dec_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 444, HiveSql.RULE_dec_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===339 || _la===366) {
				{
				this.state = 3325;
				_la = this._input.LA(1);
				if(!(_la===339 || _la===366)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 3328;
			this.match(HiveSql.L_DEC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bool_literal(): Bool_literalContext {
		let localctx: Bool_literalContext = new Bool_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 446, HiveSql.RULE_bool_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3330;
			_la = this._input.LA(1);
			if(!(_la===104 || _la===290)) {
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
	public null_const(): Null_constContext {
		let localctx: Null_constContext = new Null_constContext(this, this._ctx, this.state);
		this.enterRule(localctx, 448, HiveSql.RULE_null_const);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3332;
			this.match(HiveSql.T_NULL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public non_reserved_words(): Non_reserved_wordsContext {
		let localctx: Non_reserved_wordsContext = new Non_reserved_wordsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 450, HiveSql.RULE_non_reserved_words);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3334;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4292870142) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 3523215359) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 3221225471) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 4294836223) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & 4294950911) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & 3758096375) !== 0) || ((((_la - 288)) & ~0x1F) === 0 && ((1 << (_la - 288)) & 4294180815) !== 0) || ((((_la - 320)) & ~0x1F) === 0 && ((1 << (_la - 320)) & 522271) !== 0))) {
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
		case 4:
			return this.block_end_sempred(localctx as Block_endContext, predIndex);
		case 11:
			return this.expr_stmt_sempred(localctx as Expr_stmtContext, predIndex);
		case 74:
			return this.create_routine_params_sempred(localctx as Create_routine_paramsContext, predIndex);
		case 152:
			return this.select_list_alias_sempred(localctx as Select_list_aliasContext, predIndex);
		case 163:
			return this.from_alias_clause_sempred(localctx as From_alias_clauseContext, predIndex);
		case 181:
			return this.delete_alias_sempred(localctx as Delete_aliasContext, predIndex);
		case 183:
			return this.bool_expr_sempred(localctx as Bool_exprContext, predIndex);
		case 191:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		case 208:
			return this.func_param_sempred(localctx as Func_paramContext, predIndex);
		}
		return true;
	}
	private block_end_sempred(localctx: Block_endContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return !this._input.LT(2).text.toUpperCase() === "TRANSACTION";
		}
		return true;
	}
	private expr_stmt_sempred(localctx: Expr_stmtContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this._input.LT(1).text.toUpperCase() !== "GO";
		}
		return true;
	}
	private create_routine_params_sempred(localctx: Create_routine_paramsContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this._input.LT(1).text.toUpperCase() !== "IS" &&
		        this._input.LT(1).text.toUpperCase() !== "AS" &&
		        !(this._input.LT(1).text.toUpperCase() ==="DYNAMIC" && this._input.LT(2).text.toUpperCase() === "RESULT")
		        ;
		}
		return true;
	}
	private select_list_alias_sempred(localctx: Select_list_aliasContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this._input.LT(1).text.toUpperCase() !== "INTO" && this._input.LT(1).text.toUpperCase() !== "FROM";
		}
		return true;
	}
	private from_alias_clause_sempred(localctx: From_alias_clauseContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this._input.LT(1).text.toUpperCase() !== "EXEC" &&
		        this._input.LT(1).text.toUpperCase() !== "EXECUTE" &&
		        this._input.LT(1).text.toUpperCase() !== "INNER" &&
		        this._input.LT(1).text.toUpperCase() !== "LEFT" &&
		        this._input.LT(1).text.toUpperCase() !== "GROUP" &&
		        this._input.LT(1).text.toUpperCase() !== "ORDER" &&
		        this._input.LT(1).text.toUpperCase() !== "LIMIT" &&
		        this._input.LT(1).text.toUpperCase() !== "WITH" &&
		        this._input.LT(1).text.toUpperCase() !== "JOIN";
		}
		return true;
	}
	private delete_alias_sempred(localctx: Delete_aliasContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this._input.LT(1).text.toUpperCase() !== "ALL";
		}
		return true;
	}
	private bool_expr_sempred(localctx: Bool_exprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 14);
		case 8:
			return this.precpred(this._ctx, 13);
		case 9:
			return this.precpred(this._ctx, 12);
		case 10:
			return this.precpred(this._ctx, 11);
		case 11:
			return this.precpred(this._ctx, 15);
		}
		return true;
	}
	private func_param_sempred(localctx: Func_paramContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this._input.LT(1).text.toUpperCase() !== "INTO";
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,376,3337,2,0,7,0,
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
	7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,
	7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,
	7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,
	7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
	7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,2,181,
	7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,7,186,2,187,
	7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,2,192,7,192,2,193,
	7,193,2,194,7,194,2,195,7,195,2,196,7,196,2,197,7,197,2,198,7,198,2,199,
	7,199,2,200,7,200,2,201,7,201,2,202,7,202,2,203,7,203,2,204,7,204,2,205,
	7,205,2,206,7,206,2,207,7,207,2,208,7,208,2,209,7,209,2,210,7,210,2,211,
	7,211,2,212,7,212,2,213,7,213,2,214,7,214,2,215,7,215,2,216,7,216,2,217,
	7,217,2,218,7,218,2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,2,223,
	7,223,2,224,7,224,2,225,7,225,1,0,1,0,1,0,1,1,1,1,3,1,458,8,1,1,1,3,1,461,
	8,1,4,1,463,8,1,11,1,12,1,464,1,2,3,2,468,8,2,1,2,1,2,1,2,3,2,473,8,2,1,
	2,1,2,1,3,1,3,1,3,3,3,480,8,3,1,3,1,3,1,3,1,3,3,3,486,8,3,3,3,488,8,3,1,
	4,1,4,1,4,1,5,1,5,4,5,495,8,5,11,5,12,5,496,1,5,3,5,500,8,5,3,5,502,8,5,
	1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
	1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
	1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
	1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,565,8,6,1,7,1,7,1,8,1,8,4,8,571,8,8,11,
	8,12,8,572,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,
	12,3,12,589,8,12,1,12,1,12,1,12,5,12,594,8,12,10,12,12,12,597,9,12,3,12,
	599,8,12,1,13,1,13,1,13,3,13,604,8,13,1,14,1,14,3,14,608,8,14,1,14,1,14,
	1,14,1,14,1,14,1,14,1,14,3,14,617,8,14,1,14,1,14,1,14,3,14,622,8,14,1,15,
	1,15,1,15,1,15,5,15,628,8,15,10,15,12,15,631,9,15,1,15,1,15,3,15,635,8,
	15,1,15,1,15,1,15,1,15,1,15,5,15,642,8,15,10,15,12,15,645,9,15,1,15,1,15,
	1,16,1,16,1,16,1,16,1,16,5,16,654,8,16,10,16,12,16,657,9,16,1,16,1,16,3,
	16,661,8,16,1,16,3,16,664,8,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,
	1,17,1,17,1,17,1,17,3,17,678,8,17,1,17,1,17,1,18,1,18,1,18,3,18,685,8,18,
	1,18,1,18,1,18,1,18,1,18,5,18,692,8,18,10,18,12,18,695,9,18,1,18,1,18,1,
	18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,21,1,21,1,21,1,21,3,21,711,8,21,
	1,21,1,21,3,21,715,8,21,1,22,1,22,1,22,1,22,5,22,721,8,22,10,22,12,22,724,
	9,22,1,23,1,23,1,23,1,23,1,23,1,23,5,23,732,8,23,10,23,12,23,735,9,23,1,
	24,1,24,1,24,1,24,1,24,5,24,742,8,24,10,24,12,24,745,9,24,1,25,1,25,1,25,
	1,25,1,25,3,25,752,8,25,1,26,1,26,1,26,5,26,757,8,26,10,26,12,26,760,9,
	26,1,26,3,26,763,8,26,1,26,1,26,3,26,767,8,26,1,26,5,26,770,8,26,10,26,
	12,26,773,9,26,1,26,3,26,776,8,26,1,26,1,26,1,26,3,26,781,8,26,1,26,1,26,
	3,26,785,8,26,1,26,1,26,3,26,789,8,26,1,27,1,27,1,27,1,28,1,28,1,28,1,28,
	1,28,3,28,799,8,28,1,28,1,28,3,28,803,8,28,1,28,1,28,1,28,3,28,808,8,28,
	1,29,1,29,1,29,3,29,813,8,29,1,29,1,29,3,29,817,8,29,1,30,1,30,1,30,1,31,
	1,31,1,31,1,31,1,31,1,31,1,31,1,31,3,31,830,8,31,1,31,1,31,1,32,3,32,835,
	8,32,1,32,1,32,1,32,1,32,3,32,841,8,32,1,32,1,32,1,33,1,33,1,33,1,33,1,
	33,3,33,850,8,33,1,33,1,33,3,33,854,8,33,1,33,1,33,1,34,1,34,1,34,1,34,
	3,34,862,8,34,1,34,3,34,865,8,34,1,34,1,34,1,34,3,34,870,8,34,1,34,1,34,
	1,35,3,35,875,8,35,1,35,1,35,1,35,1,35,1,35,3,35,882,8,35,1,35,1,35,1,35,
	1,35,1,35,3,35,889,8,35,1,35,3,35,892,8,35,1,36,1,36,1,36,5,36,897,8,36,
	10,36,12,36,900,9,36,1,37,1,37,1,37,3,37,905,8,37,1,37,5,37,908,8,37,10,
	37,12,37,911,9,37,1,37,5,37,914,8,37,10,37,12,37,917,9,37,1,37,1,37,3,37,
	921,8,37,1,37,3,37,924,8,37,1,38,1,38,1,39,1,39,3,39,930,8,39,1,39,1,39,
	1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,5,39,942,8,39,10,39,12,39,945,9,
	39,1,39,1,39,1,39,1,39,1,39,5,39,952,8,39,10,39,12,39,955,9,39,1,39,1,39,
	1,39,3,39,960,8,39,1,40,1,40,1,40,3,40,965,8,40,1,40,1,40,1,40,3,40,970,
	8,40,1,40,1,40,1,40,3,40,975,8,40,5,40,977,8,40,10,40,12,40,980,9,40,1,
	40,1,40,3,40,984,8,40,1,40,3,40,987,8,40,1,40,1,40,1,40,1,40,1,40,1,40,
	5,40,995,8,40,10,40,12,40,998,9,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,5,
	40,1007,8,40,10,40,12,40,1010,9,40,1,40,1,40,5,40,1014,8,40,10,40,12,40,
	1017,9,40,3,40,1019,8,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,
	41,3,41,1031,8,41,1,42,4,42,1034,8,42,11,42,12,42,1035,1,43,1,43,1,43,3,
	43,1041,8,43,1,44,3,44,1044,8,44,1,44,1,44,1,45,4,45,1049,8,45,11,45,12,
	45,1050,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,3,46,1063,8,46,
	1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,4,47,1076,8,47,11,
	47,12,47,1077,1,47,1,47,1,47,3,47,1083,8,47,1,48,3,48,1086,8,48,1,48,1,
	48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,5,48,1099,8,48,10,48,12,
	48,1102,9,48,1,48,1,48,1,48,3,48,1107,8,48,1,48,1,48,1,48,1,48,1,48,1,48,
	1,48,1,48,1,48,3,48,1118,8,48,1,49,3,49,1121,8,49,1,49,1,49,1,49,1,49,1,
	49,1,49,5,49,1129,8,49,10,49,12,49,1132,9,49,1,49,1,49,1,49,1,49,3,49,1138,
	8,49,1,50,1,50,1,50,1,50,3,50,1144,8,50,1,51,1,51,1,51,1,51,5,51,1150,8,
	51,10,51,12,51,1153,9,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,3,52,1162,8,
	52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,
	1,52,1,52,1,52,1,52,3,52,1182,8,52,1,53,1,53,1,53,1,53,3,53,1188,8,53,1,
	54,1,54,3,54,1192,8,54,1,54,1,54,1,54,3,54,1197,8,54,1,54,1,54,3,54,1201,
	8,54,1,54,1,54,1,54,3,54,1206,8,54,1,54,3,54,1209,8,54,1,54,1,54,1,54,3,
	54,1214,8,54,1,54,3,54,1217,8,54,1,55,1,55,1,55,1,55,1,55,1,56,1,56,1,57,
	1,57,1,57,3,57,1229,8,57,1,57,1,57,1,58,1,58,1,58,3,58,1236,8,58,1,58,1,
	58,1,58,3,58,1241,8,58,1,58,1,58,1,58,3,58,1246,8,58,5,58,1248,8,58,10,
	58,12,58,1251,9,58,1,58,1,58,3,58,1255,8,58,1,58,3,58,1258,8,58,1,58,1,
	58,1,58,1,58,1,58,1,58,5,58,1266,8,58,10,58,12,58,1269,9,58,1,58,1,58,1,
	58,1,58,1,58,1,58,1,58,5,58,1278,8,58,10,58,12,58,1281,9,58,1,58,1,58,5,
	58,1285,8,58,10,58,12,58,1288,9,58,1,58,1,58,1,58,1,58,1,58,3,58,1295,8,
	58,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,1309,
	8,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,
	59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,
	1,59,3,59,1340,8,59,3,59,1342,8,59,1,60,1,60,1,60,3,60,1347,8,60,1,60,1,
	60,3,60,1351,8,60,1,60,1,60,1,61,3,61,1356,8,61,1,61,1,61,1,61,1,61,1,61,
	3,61,1363,8,61,1,61,3,61,1366,8,61,1,62,3,62,1369,8,62,1,62,1,62,1,62,3,
	62,1374,8,62,1,62,1,62,3,62,1378,8,62,3,62,1380,8,62,1,63,1,63,1,63,1,63,
	1,63,3,63,1387,8,63,1,63,1,63,5,63,1391,8,63,10,63,12,63,1394,9,63,1,64,
	1,64,1,64,1,64,3,64,1400,8,64,1,65,1,65,1,65,1,65,3,65,1406,8,65,1,65,3,
	65,1409,8,65,1,65,1,65,1,65,3,65,1414,8,65,1,65,1,65,3,65,1418,8,65,1,65,
	3,65,1421,8,65,1,65,1,65,1,66,1,66,1,66,3,66,1428,8,66,1,67,1,67,1,67,1,
	67,3,67,1434,8,67,1,67,3,67,1437,8,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,
	1,67,3,67,1447,8,67,1,68,1,68,1,68,1,68,1,68,5,68,1454,8,68,10,68,12,68,
	1457,9,68,1,69,1,69,1,69,1,69,3,69,1463,8,69,1,69,1,69,1,69,1,69,1,69,3,
	69,1470,8,69,3,69,1472,8,69,1,70,1,70,1,70,1,70,3,70,1478,8,70,1,70,3,70,
	1481,8,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,3,70,1492,8,70,1,
	71,1,71,1,71,1,71,1,71,5,71,1499,8,71,10,71,12,71,1502,9,71,1,72,1,72,1,
	72,3,72,1507,8,72,1,73,1,73,1,73,1,73,3,73,1513,8,73,1,73,3,73,1516,8,73,
	1,73,1,73,1,73,3,73,1521,8,73,1,73,3,73,1524,8,73,1,73,3,73,1527,8,73,1,
	73,3,73,1530,8,73,1,73,3,73,1533,8,73,1,73,1,73,1,73,1,73,3,73,1539,8,73,
	1,74,1,74,1,74,1,74,1,74,1,74,5,74,1547,8,74,10,74,12,74,1550,9,74,1,74,
	1,74,1,74,1,74,1,74,1,74,5,74,1558,8,74,10,74,12,74,1561,9,74,3,74,1563,
	8,74,1,75,1,75,1,75,1,75,1,75,3,75,1570,8,75,1,75,1,75,1,75,3,75,1575,8,
	75,1,75,5,75,1578,8,75,10,75,12,75,1581,9,75,1,75,3,75,1584,8,75,1,75,1,
	75,1,75,1,75,1,75,1,75,3,75,1592,8,75,1,75,1,75,3,75,1596,8,75,1,75,5,75,
	1599,8,75,10,75,12,75,1602,9,75,1,75,3,75,1605,8,75,3,75,1607,8,75,1,76,
	4,76,1610,8,76,11,76,12,76,1611,1,77,1,77,1,77,1,77,1,77,1,77,3,77,1620,
	8,77,1,77,1,77,1,77,3,77,1625,8,77,1,78,1,78,1,78,1,78,3,78,1631,8,78,1,
	78,1,78,1,78,1,78,1,78,3,78,1638,8,78,1,78,3,78,1641,8,78,1,79,1,79,1,79,
	1,80,1,80,3,80,1648,8,80,1,80,1,80,1,80,1,80,1,80,1,80,3,80,1656,8,80,1,
	80,1,80,1,80,1,80,5,80,1662,8,80,10,80,12,80,1665,9,80,3,80,1667,8,80,1,
	80,3,80,1670,8,80,1,81,1,81,1,81,3,81,1675,8,81,1,82,1,82,1,82,1,82,1,82,
	5,82,1682,8,82,10,82,12,82,1685,9,82,1,82,3,82,1688,8,82,1,82,1,82,1,82,
	1,83,1,83,1,83,1,83,1,83,3,83,1698,8,83,1,84,1,84,1,84,1,84,1,84,1,84,1,
	85,1,85,1,85,1,85,1,85,1,86,1,86,1,86,1,87,1,87,1,87,3,87,1717,8,87,1,88,
	1,88,1,88,1,88,1,88,3,88,1724,8,88,3,88,1726,8,88,1,88,1,88,3,88,1730,8,
	88,1,88,1,88,3,88,1734,8,88,1,89,1,89,1,89,1,89,5,89,1740,8,89,10,89,12,
	89,1743,9,89,1,89,1,89,1,90,1,90,1,90,1,90,5,90,1751,8,90,10,90,12,90,1754,
	9,90,1,91,1,91,1,91,1,91,5,91,1760,8,91,10,91,12,91,1763,9,91,1,91,1,91,
	1,92,1,92,1,92,3,92,1770,8,92,1,92,1,92,1,92,1,92,1,93,1,93,3,93,1778,8,
	93,1,93,1,93,3,93,1782,8,93,1,94,1,94,1,94,1,94,1,95,1,95,3,95,1790,8,95,
	1,96,1,96,1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,97,1,98,1,98,1,98,1,98,5,
	98,1806,8,98,10,98,12,98,1809,9,98,1,98,1,98,1,98,1,98,1,99,1,99,1,99,1,
	99,1,99,1,100,1,100,3,100,1822,8,100,1,101,1,101,1,101,1,101,1,101,3,101,
	1829,8,101,1,101,1,101,3,101,1833,8,101,1,102,1,102,1,102,1,102,1,102,3,
	102,1840,8,102,3,102,1842,8,102,1,103,1,103,3,103,1846,8,103,1,103,1,103,
	1,103,1,103,1,103,5,103,1853,8,103,10,103,12,103,1856,9,103,1,104,1,104,
	1,104,1,104,1,104,3,104,1863,8,104,1,105,1,105,1,105,1,105,1,105,5,105,
	1870,8,105,10,105,12,105,1873,9,105,1,105,1,105,1,106,1,106,1,106,1,107,
	1,107,1,107,1,107,1,107,1,107,1,108,1,108,3,108,1888,8,108,1,108,1,108,
	1,108,1,108,3,108,1894,8,108,1,108,1,108,3,108,1898,8,108,1,109,1,109,1,
	109,1,109,1,109,1,109,5,109,1906,8,109,10,109,12,109,1909,9,109,1,109,1,
	109,1,109,5,109,1914,8,109,10,109,12,109,1917,9,109,1,110,1,110,1,110,1,
	110,1,110,1,110,3,110,1925,8,110,1,110,1,110,3,110,1929,8,110,1,110,1,110,
	5,110,1933,8,110,10,110,12,110,1936,9,110,1,111,1,111,3,111,1940,8,111,
	1,112,1,112,3,112,1944,8,112,1,113,1,113,1,113,1,113,1,113,1,113,1,113,
	1,113,3,113,1954,8,113,1,114,1,114,1,115,1,115,3,115,1960,8,115,1,116,1,
	116,3,116,1964,8,116,1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,116,5,
	116,1974,8,116,10,116,12,116,1977,9,116,1,116,1,116,1,117,1,117,3,117,1983,
	8,117,1,118,1,118,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,
	1,119,5,119,1997,8,119,10,119,12,119,2000,9,119,1,119,1,119,5,119,2004,
	8,119,10,119,12,119,2007,9,119,1,120,1,120,1,120,1,120,1,120,1,120,1,120,
	3,120,2016,8,120,1,121,3,121,2019,8,121,1,121,1,121,3,121,2023,8,121,1,
	122,1,122,1,123,1,123,1,123,3,123,2030,8,123,1,123,1,123,1,123,1,123,1,
	123,3,123,2037,8,123,3,123,2039,8,123,1,124,1,124,3,124,2043,8,124,1,125,
	1,125,3,125,2047,8,125,1,126,1,126,1,126,3,126,2052,8,126,1,127,3,127,2055,
	8,127,1,127,1,127,3,127,2059,8,127,1,127,3,127,2062,8,127,1,127,1,127,1,
	128,1,128,1,128,1,129,1,129,1,129,1,129,3,129,2073,8,129,1,129,3,129,2076,
	8,129,1,129,1,129,1,129,1,130,1,130,1,130,1,131,1,131,1,131,3,131,2087,
	8,131,1,131,1,131,1,131,1,131,3,131,2093,8,131,1,131,1,131,3,131,2097,8,
	131,3,131,2099,8,131,1,132,1,132,3,132,2103,8,132,1,132,1,132,1,133,1,133,
	1,133,1,134,1,134,3,134,2112,8,134,1,134,1,134,1,134,5,134,2117,8,134,10,
	134,12,134,2120,9,134,1,134,3,134,2123,8,134,1,134,1,134,3,134,2127,8,134,
	1,134,1,134,1,134,5,134,2132,8,134,10,134,12,134,2135,9,134,1,134,3,134,
	2138,8,134,1,135,1,135,1,135,1,135,1,135,1,135,3,135,2146,8,135,1,136,1,
	136,1,136,1,136,3,136,2152,8,136,1,136,1,136,3,136,2156,8,136,1,136,1,136,
	1,136,1,136,1,136,1,137,1,137,1,137,1,137,3,137,2167,8,137,1,137,1,137,
	1,137,1,137,1,137,3,137,2174,8,137,1,137,1,137,1,137,1,137,1,137,1,138,
	1,138,1,138,1,138,1,138,1,138,3,138,2187,8,138,1,139,1,139,1,139,1,139,
	5,139,2193,8,139,10,139,12,139,2196,9,139,1,140,3,140,2199,8,140,1,140,
	1,140,1,141,1,141,1,141,1,141,5,141,2207,8,141,10,141,12,141,2210,9,141,
	1,142,1,142,3,142,2214,8,142,1,142,1,142,1,142,1,142,1,142,1,143,1,143,
	1,143,1,143,5,143,2225,8,143,10,143,12,143,2228,9,143,1,143,1,143,1,144,
	1,144,1,144,1,144,5,144,2236,8,144,10,144,12,144,2239,9,144,1,145,1,145,
	1,145,1,145,1,145,3,145,2246,8,145,1,146,1,146,3,146,2250,8,146,1,146,1,
	146,3,146,2254,8,146,1,146,1,146,3,146,2258,8,146,3,146,2260,8,146,1,147,
	1,147,1,147,3,147,2265,8,147,1,147,3,147,2268,8,147,1,147,3,147,2271,8,
	147,1,147,3,147,2274,8,147,1,147,1,147,3,147,2278,8,147,1,147,3,147,2281,
	8,147,1,147,3,147,2284,8,147,1,148,3,148,2287,8,148,1,148,3,148,2290,8,
	148,1,148,1,148,1,148,5,148,2295,8,148,10,148,12,148,2298,9,148,1,149,1,
	149,1,150,1,150,1,150,1,151,1,151,1,151,3,151,2308,8,151,1,151,1,151,3,
	151,2312,8,151,1,151,3,151,2315,8,151,1,152,1,152,3,152,2319,8,152,1,152,
	1,152,1,152,1,152,1,152,3,152,2326,8,152,1,153,1,153,3,153,2330,8,153,1,
	153,1,153,1,154,1,154,1,154,1,154,5,154,2338,8,154,10,154,12,154,2341,9,
	154,1,155,1,155,1,155,5,155,2346,8,155,10,155,12,155,2349,9,155,1,156,1,
	156,1,156,3,156,2354,8,156,1,157,1,157,3,157,2358,8,157,1,158,1,158,1,158,
	1,158,3,158,2364,8,158,1,159,1,159,1,159,1,159,1,159,1,159,1,159,3,159,
	2373,8,159,1,160,3,160,2376,8,160,1,160,1,160,1,160,3,160,2381,8,160,1,
	160,3,160,2384,8,160,1,161,1,161,1,161,1,161,1,161,1,161,5,161,2392,8,161,
	10,161,12,161,2395,9,161,1,161,1,161,3,161,2399,8,161,1,162,1,162,1,162,
	1,162,1,162,5,162,2406,8,162,10,162,12,162,2409,9,162,1,162,1,162,3,162,
	2413,8,162,1,163,1,163,3,163,2417,8,163,1,163,1,163,1,163,1,163,1,163,5,
	163,2424,8,163,10,163,12,163,2427,9,163,1,163,3,163,2430,8,163,1,164,1,
	164,1,165,1,165,1,165,1,166,1,166,1,166,1,166,1,166,5,166,2442,8,166,10,
	166,12,166,2445,9,166,1,167,1,167,1,167,1,168,1,168,1,168,1,169,1,169,1,
	169,1,169,3,169,2457,8,169,1,169,1,169,1,169,3,169,2462,8,169,5,169,2464,
	8,169,10,169,12,169,2467,9,169,1,170,4,170,2470,8,170,11,170,12,170,2471,
	1,171,1,171,1,171,1,171,1,171,1,171,1,171,1,171,1,171,3,171,2483,8,171,
	3,171,2485,8,171,1,172,1,172,1,172,1,172,1,172,3,172,2492,8,172,1,172,3,
	172,2495,8,172,1,173,1,173,1,173,5,173,2500,8,173,10,173,12,173,2503,9,
	173,1,174,1,174,3,174,2507,8,174,1,174,1,174,1,174,1,174,3,174,2513,8,174,
	1,174,3,174,2516,8,174,1,174,3,174,2519,8,174,1,175,1,175,1,175,1,176,1,
	176,1,176,1,176,1,176,1,176,1,176,1,176,4,176,2532,8,176,11,176,12,176,
	2533,1,177,1,177,1,177,1,177,1,177,3,177,2541,8,177,1,177,3,177,2544,8,
	177,1,177,3,177,2547,8,177,1,178,1,178,3,178,2551,8,178,1,178,1,178,1,178,
	3,178,2556,8,178,1,178,1,178,1,178,1,178,3,178,2562,8,178,1,179,1,179,3,
	179,2566,8,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,5,179,2575,8,179,
	10,179,12,179,2578,9,179,1,179,3,179,2581,8,179,1,179,3,179,2584,8,179,
	1,180,1,180,3,180,2588,8,180,1,180,1,180,3,180,2592,8,180,1,180,1,180,3,
	180,2596,8,180,1,181,1,181,3,181,2600,8,181,1,181,1,181,1,182,1,182,3,182,
	2606,8,182,1,182,1,182,1,183,1,183,3,183,2612,8,183,1,183,1,183,1,183,1,
	183,1,183,3,183,2619,8,183,1,183,1,183,1,183,1,183,5,183,2625,8,183,10,
	183,12,183,2628,9,183,1,184,1,184,1,184,3,184,2633,8,184,1,185,1,185,1,
	185,3,185,2638,8,185,1,185,1,185,1,185,1,185,1,185,1,185,1,185,1,185,1,
	185,3,185,2649,8,185,1,185,1,185,1,185,1,185,1,185,1,185,1,185,3,185,2658,
	8,185,1,186,1,186,3,186,2662,8,186,1,186,1,186,1,186,1,186,1,186,5,186,
	2669,8,186,10,186,12,186,2672,9,186,1,186,3,186,2675,8,186,1,186,1,186,
	1,187,1,187,1,187,1,187,5,187,2683,8,187,10,187,12,187,2686,9,187,1,187,
	1,187,3,187,2690,8,187,1,187,1,187,1,187,1,187,1,187,1,188,1,188,1,188,
	1,188,1,189,1,189,1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,190,
	3,190,2712,8,190,1,190,3,190,2715,8,190,1,191,1,191,1,191,1,191,1,191,1,
	191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,3,
	191,2734,8,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,
	191,1,191,1,191,1,191,1,191,5,191,2750,8,191,10,191,12,191,2753,9,191,1,
	192,1,192,1,192,1,192,1,192,1,192,1,192,1,192,3,192,2763,8,192,1,193,1,
	193,1,193,1,193,1,194,1,194,1,195,1,195,1,195,1,195,1,195,5,195,2776,8,
	195,10,195,12,195,2779,9,195,1,196,1,196,1,196,1,196,1,196,1,196,1,196,
	1,196,1,196,3,196,2790,8,196,1,197,1,197,3,197,2794,8,197,1,198,1,198,1,
	198,1,198,1,198,1,198,1,198,4,198,2803,8,198,11,198,12,198,2804,1,198,1,
	198,3,198,2809,8,198,1,198,1,198,1,199,1,199,1,199,1,199,1,199,1,199,4,
	199,2819,8,199,11,199,12,199,2820,1,199,1,199,3,199,2825,8,199,1,199,1,
	199,1,200,1,200,1,200,1,200,1,201,1,201,1,201,3,201,2836,8,201,1,201,1,
	201,1,201,3,201,2841,8,201,1,201,1,201,1,201,3,201,2846,8,201,1,201,1,201,
	3,201,2850,8,201,1,201,1,201,3,201,2854,8,201,1,201,1,201,1,201,3,201,2859,
	8,201,1,201,1,201,3,201,2863,8,201,1,201,1,201,3,201,2867,8,201,1,201,1,
	201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,
	201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,3,201,2890,8,201,3,201,2892,
	8,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,
	1,201,1,201,1,201,1,201,1,201,3,201,2910,8,201,3,201,2912,8,201,1,201,1,
	201,1,201,1,201,1,201,1,201,3,201,2920,8,201,1,201,1,201,1,201,3,201,2925,
	8,201,1,201,1,201,1,201,3,201,2930,8,201,1,201,1,201,1,201,3,201,2935,8,
	201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,3,
	201,2948,8,201,1,201,1,201,1,201,3,201,2953,8,201,1,201,1,201,1,201,3,201,
	2958,8,201,1,201,1,201,1,201,3,201,2963,8,201,1,201,1,201,1,201,3,201,2968,
	8,201,1,201,1,201,1,201,3,201,2973,8,201,1,201,1,201,1,201,3,201,2978,8,
	201,1,201,1,201,1,201,3,201,2983,8,201,3,201,2985,8,201,1,202,1,202,1,203,
	1,203,1,203,3,203,2992,8,203,1,203,3,203,2995,8,203,1,203,1,203,1,204,1,
	204,1,204,1,204,1,204,5,204,3004,8,204,10,204,12,204,3007,9,204,1,205,1,
	205,1,205,1,205,1,205,1,205,1,205,3,205,3016,8,205,1,205,1,205,1,205,1,
	205,1,205,1,205,3,205,3024,8,205,1,205,1,205,1,205,1,205,1,205,1,205,1,
	205,3,205,3033,8,205,1,205,1,205,1,205,1,205,3,205,3039,8,205,1,205,1,205,
	1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,5,205,
	3054,8,205,10,205,12,205,3057,9,205,3,205,3059,8,205,1,205,1,205,1,205,
	1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,5,205,3073,8,205,
	10,205,12,205,3076,9,205,3,205,3078,8,205,1,205,1,205,1,205,1,205,1,205,
	1,205,1,205,1,205,1,205,1,205,1,205,1,205,5,205,3092,8,205,10,205,12,205,
	3095,9,205,3,205,3097,8,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,
	205,1,205,1,205,1,205,1,205,5,205,3111,8,205,10,205,12,205,3114,9,205,3,
	205,3116,8,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,
	205,1,205,1,205,5,205,3130,8,205,10,205,12,205,3133,9,205,3,205,3135,8,
	205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,
	205,5,205,3149,8,205,10,205,12,205,3152,9,205,3,205,3154,8,205,1,205,1,
	205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,5,205,3166,8,205,10,
	205,12,205,3169,9,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,
	205,1,205,4,205,3181,8,205,11,205,12,205,3182,1,205,1,205,3,205,3187,8,
	205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,
	205,1,205,1,205,3,205,3203,8,205,1,205,1,205,1,205,1,205,3,205,3209,8,205,
	1,206,1,206,1,206,3,206,3214,8,206,1,206,1,206,1,207,1,207,1,207,5,207,
	3221,8,207,10,207,12,207,3224,9,207,1,208,1,208,1,208,1,208,3,208,3230,
	8,208,3,208,3232,8,208,1,208,1,208,1,209,1,209,3,209,3238,8,209,1,210,1,
	210,3,210,3242,8,210,1,211,1,211,5,211,3246,8,211,10,211,12,211,3249,9,
	211,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,
	212,3,212,3263,8,212,1,213,1,213,1,213,1,213,1,213,3,213,3270,8,213,1,214,
	5,214,3273,8,214,10,214,12,214,3276,9,214,1,215,1,215,1,215,1,216,1,216,
	1,216,1,216,3,216,3285,8,216,1,216,1,216,1,216,5,216,3290,8,216,10,216,
	12,216,3293,9,216,3,216,3295,8,216,1,217,1,217,1,217,1,218,1,218,1,218,
	1,219,1,219,3,219,3305,8,219,1,219,1,219,1,219,3,219,3310,8,219,5,219,3312,
	8,219,10,219,12,219,3315,9,219,1,220,1,220,3,220,3319,8,220,1,221,3,221,
	3322,8,221,1,221,1,221,1,222,3,222,3327,8,222,1,222,1,222,1,223,1,223,1,
	224,1,224,1,225,1,225,1,225,1,3274,2,366,382,226,0,2,4,6,8,10,12,14,16,
	18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
	66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,
	110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,
	146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,
	182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,
	218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,
	254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,284,286,288,
	290,292,294,296,298,300,302,304,306,308,310,312,314,316,318,320,322,324,
	326,328,330,332,334,336,338,340,342,344,346,348,350,352,354,356,358,360,
	362,364,366,368,370,372,374,376,378,380,382,384,386,388,390,392,394,396,
	398,400,402,404,406,408,410,412,414,416,418,420,422,424,426,428,430,432,
	434,436,438,440,442,444,446,448,450,0,49,4,0,343,343,348,348,358,358,365,
	365,2,0,93,93,306,306,1,0,163,164,3,0,9,9,110,110,148,148,2,0,28,28,36,
	36,2,0,50,50,102,102,2,0,179,179,251,251,2,0,10,10,78,78,2,0,75,75,295,
	295,2,0,103,103,166,166,2,0,75,75,211,211,2,0,71,71,131,131,3,0,135,135,
	173,173,207,208,2,0,168,168,186,186,2,0,183,183,314,314,2,0,238,238,292,
	292,2,0,172,172,370,370,2,0,26,26,33,33,2,0,31,31,57,57,2,0,61,61,244,244,
	2,0,9,9,148,148,1,0,229,230,1,0,214,215,4,0,56,56,73,73,147,147,204,204,
	1,0,97,98,1,0,90,91,1,0,267,268,2,0,239,239,275,275,3,0,75,75,130,130,203,
	203,4,0,7,8,184,184,219,219,312,312,1,0,194,195,2,0,252,252,289,289,4,0,
	16,16,85,85,169,169,283,283,2,0,169,169,308,308,2,0,25,25,269,269,1,0,249,
	250,2,0,3,3,83,83,3,0,115,115,157,157,232,232,3,0,57,57,240,241,296,296,
	3,0,100,100,255,255,295,295,1,0,78,79,2,0,6,6,198,198,3,0,158,158,223,223,
	233,233,3,0,65,66,176,177,245,246,2,0,47,47,342,342,3,0,113,113,149,149,
	189,189,2,0,339,339,366,366,2,0,104,104,290,290,12,0,1,20,22,88,92,92,94,
	189,191,208,210,237,239,258,260,284,286,291,294,305,308,324,331,338,3761,
	0,452,1,0,0,0,2,462,1,0,0,0,4,467,1,0,0,0,6,487,1,0,0,0,8,489,1,0,0,0,10,
	501,1,0,0,0,12,564,1,0,0,0,14,566,1,0,0,0,16,568,1,0,0,0,18,574,1,0,0,0,
	20,580,1,0,0,0,22,582,1,0,0,0,24,598,1,0,0,0,26,603,1,0,0,0,28,621,1,0,
	0,0,30,623,1,0,0,0,32,660,1,0,0,0,34,670,1,0,0,0,36,681,1,0,0,0,38,701,
	1,0,0,0,40,704,1,0,0,0,42,706,1,0,0,0,44,716,1,0,0,0,46,725,1,0,0,0,48,
	736,1,0,0,0,50,751,1,0,0,0,52,788,1,0,0,0,54,790,1,0,0,0,56,798,1,0,0,0,
	58,809,1,0,0,0,60,818,1,0,0,0,62,821,1,0,0,0,64,834,1,0,0,0,66,844,1,0,
	0,0,68,857,1,0,0,0,70,888,1,0,0,0,72,893,1,0,0,0,74,923,1,0,0,0,76,925,
	1,0,0,0,78,959,1,0,0,0,80,1018,1,0,0,0,82,1020,1,0,0,0,84,1033,1,0,0,0,
	86,1040,1,0,0,0,88,1043,1,0,0,0,90,1048,1,0,0,0,92,1062,1,0,0,0,94,1082,
	1,0,0,0,96,1117,1,0,0,0,98,1137,1,0,0,0,100,1143,1,0,0,0,102,1145,1,0,0,
	0,104,1181,1,0,0,0,106,1187,1,0,0,0,108,1216,1,0,0,0,110,1218,1,0,0,0,112,
	1223,1,0,0,0,114,1225,1,0,0,0,116,1294,1,0,0,0,118,1341,1,0,0,0,120,1343,
	1,0,0,0,122,1365,1,0,0,0,124,1379,1,0,0,0,126,1381,1,0,0,0,128,1399,1,0,
	0,0,130,1408,1,0,0,0,132,1424,1,0,0,0,134,1436,1,0,0,0,136,1448,1,0,0,0,
	138,1471,1,0,0,0,140,1480,1,0,0,0,142,1493,1,0,0,0,144,1506,1,0,0,0,146,
	1515,1,0,0,0,148,1562,1,0,0,0,150,1606,1,0,0,0,152,1609,1,0,0,0,154,1624,
	1,0,0,0,156,1640,1,0,0,0,158,1642,1,0,0,0,160,1645,1,0,0,0,162,1674,1,0,
	0,0,164,1676,1,0,0,0,166,1692,1,0,0,0,168,1699,1,0,0,0,170,1705,1,0,0,0,
	172,1710,1,0,0,0,174,1713,1,0,0,0,176,1718,1,0,0,0,178,1735,1,0,0,0,180,
	1746,1,0,0,0,182,1755,1,0,0,0,184,1766,1,0,0,0,186,1775,1,0,0,0,188,1783,
	1,0,0,0,190,1789,1,0,0,0,192,1791,1,0,0,0,194,1797,1,0,0,0,196,1801,1,0,
	0,0,198,1814,1,0,0,0,200,1819,1,0,0,0,202,1823,1,0,0,0,204,1834,1,0,0,0,
	206,1843,1,0,0,0,208,1857,1,0,0,0,210,1864,1,0,0,0,212,1876,1,0,0,0,214,
	1879,1,0,0,0,216,1893,1,0,0,0,218,1899,1,0,0,0,220,1918,1,0,0,0,222,1939,
	1,0,0,0,224,1943,1,0,0,0,226,1953,1,0,0,0,228,1955,1,0,0,0,230,1957,1,0,
	0,0,232,1961,1,0,0,0,234,1980,1,0,0,0,236,1984,1,0,0,0,238,1986,1,0,0,0,
	240,2015,1,0,0,0,242,2018,1,0,0,0,244,2024,1,0,0,0,246,2026,1,0,0,0,248,
	2040,1,0,0,0,250,2044,1,0,0,0,252,2051,1,0,0,0,254,2058,1,0,0,0,256,2065,
	1,0,0,0,258,2068,1,0,0,0,260,2080,1,0,0,0,262,2083,1,0,0,0,264,2100,1,0,
	0,0,266,2106,1,0,0,0,268,2109,1,0,0,0,270,2139,1,0,0,0,272,2147,1,0,0,0,
	274,2162,1,0,0,0,276,2186,1,0,0,0,278,2188,1,0,0,0,280,2198,1,0,0,0,282,
	2202,1,0,0,0,284,2211,1,0,0,0,286,2220,1,0,0,0,288,2231,1,0,0,0,290,2245,
	1,0,0,0,292,2259,1,0,0,0,294,2261,1,0,0,0,296,2286,1,0,0,0,298,2299,1,0,
	0,0,300,2301,1,0,0,0,302,2314,1,0,0,0,304,2325,1,0,0,0,306,2329,1,0,0,0,
	308,2333,1,0,0,0,310,2342,1,0,0,0,312,2353,1,0,0,0,314,2355,1,0,0,0,316,
	2359,1,0,0,0,318,2372,1,0,0,0,320,2383,1,0,0,0,322,2385,1,0,0,0,324,2412,
	1,0,0,0,326,2414,1,0,0,0,328,2431,1,0,0,0,330,2433,1,0,0,0,332,2436,1,0,
	0,0,334,2446,1,0,0,0,336,2449,1,0,0,0,338,2452,1,0,0,0,340,2469,1,0,0,0,
	342,2484,1,0,0,0,344,2486,1,0,0,0,346,2496,1,0,0,0,348,2512,1,0,0,0,350,
	2520,1,0,0,0,352,2523,1,0,0,0,354,2540,1,0,0,0,356,2561,1,0,0,0,358,2583,
	1,0,0,0,360,2585,1,0,0,0,362,2597,1,0,0,0,364,2603,1,0,0,0,366,2618,1,0,
	0,0,368,2632,1,0,0,0,370,2657,1,0,0,0,372,2659,1,0,0,0,374,2678,1,0,0,0,
	376,2696,1,0,0,0,378,2700,1,0,0,0,380,2714,1,0,0,0,382,2733,1,0,0,0,384,
	2762,1,0,0,0,386,2764,1,0,0,0,388,2768,1,0,0,0,390,2770,1,0,0,0,392,2789,
	1,0,0,0,394,2793,1,0,0,0,396,2795,1,0,0,0,398,2812,1,0,0,0,400,2828,1,0,
	0,0,402,2984,1,0,0,0,404,2986,1,0,0,0,406,2988,1,0,0,0,408,2998,1,0,0,0,
	410,3208,1,0,0,0,412,3210,1,0,0,0,414,3217,1,0,0,0,416,3225,1,0,0,0,418,
	3237,1,0,0,0,420,3241,1,0,0,0,422,3243,1,0,0,0,424,3262,1,0,0,0,426,3269,
	1,0,0,0,428,3274,1,0,0,0,430,3277,1,0,0,0,432,3294,1,0,0,0,434,3296,1,0,
	0,0,436,3299,1,0,0,0,438,3304,1,0,0,0,440,3318,1,0,0,0,442,3321,1,0,0,0,
	444,3326,1,0,0,0,446,3330,1,0,0,0,448,3332,1,0,0,0,450,3334,1,0,0,0,452,
	453,3,2,1,0,453,454,5,0,0,1,454,1,1,0,0,0,455,458,3,4,2,0,456,458,3,12,
	6,0,457,455,1,0,0,0,457,456,1,0,0,0,458,460,1,0,0,0,459,461,5,119,0,0,460,
	459,1,0,0,0,460,461,1,0,0,0,461,463,1,0,0,0,462,457,1,0,0,0,463,464,1,0,
	0,0,464,462,1,0,0,0,464,465,1,0,0,0,465,3,1,0,0,0,466,468,3,46,23,0,467,
	466,1,0,0,0,467,468,1,0,0,0,468,469,1,0,0,0,469,470,5,16,0,0,470,472,3,
	2,1,0,471,473,3,16,8,0,472,471,1,0,0,0,472,473,1,0,0,0,473,474,1,0,0,0,
	474,475,3,8,4,0,475,5,1,0,0,0,476,477,5,16,0,0,477,479,3,2,1,0,478,480,
	3,16,8,0,479,478,1,0,0,0,479,480,1,0,0,0,480,481,1,0,0,0,481,482,3,8,4,
	0,482,488,1,0,0,0,483,485,3,12,6,0,484,486,5,365,0,0,485,484,1,0,0,0,485,
	486,1,0,0,0,486,488,1,0,0,0,487,476,1,0,0,0,487,483,1,0,0,0,488,7,1,0,0,
	0,489,490,4,4,0,0,490,491,5,93,0,0,491,9,1,0,0,0,492,502,3,4,2,0,493,495,
	3,12,6,0,494,493,1,0,0,0,495,496,1,0,0,0,496,494,1,0,0,0,496,497,1,0,0,
	0,497,499,1,0,0,0,498,500,5,119,0,0,499,498,1,0,0,0,499,500,1,0,0,0,500,
	502,1,0,0,0,501,492,1,0,0,0,501,494,1,0,0,0,502,11,1,0,0,0,503,565,3,24,
	12,0,504,565,3,34,17,0,505,565,3,110,55,0,506,565,3,36,18,0,507,565,3,38,
	19,0,508,565,3,40,20,0,509,565,3,42,21,0,510,565,3,208,104,0,511,565,3,
	212,106,0,512,565,3,214,107,0,513,565,3,218,109,0,514,565,3,220,110,0,515,
	565,3,230,115,0,516,565,3,126,63,0,517,565,3,130,65,0,518,565,3,232,116,
	0,519,565,3,68,34,0,520,565,3,134,67,0,521,565,3,140,70,0,522,565,3,146,
	73,0,523,565,3,66,33,0,524,565,3,44,22,0,525,565,3,360,180,0,526,565,3,
	364,182,0,527,565,3,156,78,0,528,565,3,158,79,0,529,565,3,160,80,0,530,
	565,3,186,93,0,531,565,3,206,103,0,532,565,3,272,136,0,533,565,3,274,137,
	0,534,565,3,162,81,0,535,565,3,174,87,0,536,565,3,176,88,0,537,565,3,184,
	92,0,538,565,3,188,94,0,539,565,3,196,98,0,540,565,3,200,100,0,541,565,
	3,202,101,0,542,565,3,352,176,0,543,565,3,204,102,0,544,565,3,240,120,0,
	545,565,3,242,121,0,546,565,3,244,122,0,547,565,3,246,123,0,548,565,3,248,
	124,0,549,565,3,250,125,0,550,565,3,280,140,0,551,565,3,260,130,0,552,565,
	3,262,131,0,553,565,3,344,172,0,554,565,3,266,133,0,555,565,3,264,132,0,
	556,565,3,268,134,0,557,565,3,270,135,0,558,565,3,276,138,0,559,565,3,422,
	211,0,560,565,3,426,213,0,561,565,3,20,10,0,562,565,3,22,11,0,563,565,3,
	14,7,0,564,503,1,0,0,0,564,504,1,0,0,0,564,505,1,0,0,0,564,506,1,0,0,0,
	564,507,1,0,0,0,564,508,1,0,0,0,564,509,1,0,0,0,564,510,1,0,0,0,564,511,
	1,0,0,0,564,512,1,0,0,0,564,513,1,0,0,0,564,514,1,0,0,0,564,515,1,0,0,0,
	564,516,1,0,0,0,564,517,1,0,0,0,564,518,1,0,0,0,564,519,1,0,0,0,564,520,
	1,0,0,0,564,521,1,0,0,0,564,522,1,0,0,0,564,523,1,0,0,0,564,524,1,0,0,0,
	564,525,1,0,0,0,564,526,1,0,0,0,564,527,1,0,0,0,564,528,1,0,0,0,564,529,
	1,0,0,0,564,530,1,0,0,0,564,531,1,0,0,0,564,532,1,0,0,0,564,533,1,0,0,0,
	564,534,1,0,0,0,564,535,1,0,0,0,564,536,1,0,0,0,564,537,1,0,0,0,564,538,
	1,0,0,0,564,539,1,0,0,0,564,540,1,0,0,0,564,541,1,0,0,0,564,542,1,0,0,0,
	564,543,1,0,0,0,564,544,1,0,0,0,564,545,1,0,0,0,564,546,1,0,0,0,564,547,
	1,0,0,0,564,548,1,0,0,0,564,549,1,0,0,0,564,550,1,0,0,0,564,551,1,0,0,0,
	564,552,1,0,0,0,564,553,1,0,0,0,564,554,1,0,0,0,564,555,1,0,0,0,564,556,
	1,0,0,0,564,557,1,0,0,0,564,558,1,0,0,0,564,559,1,0,0,0,564,560,1,0,0,0,
	564,561,1,0,0,0,564,562,1,0,0,0,564,563,1,0,0,0,565,13,1,0,0,0,566,567,
	7,0,0,0,567,15,1,0,0,0,568,570,5,99,0,0,569,571,3,18,9,0,570,569,1,0,0,
	0,571,572,1,0,0,0,572,570,1,0,0,0,572,573,1,0,0,0,573,17,1,0,0,0,574,575,
	5,306,0,0,575,576,5,367,0,0,576,577,5,283,0,0,577,578,3,2,1,0,578,579,8,
	1,0,0,579,19,1,0,0,0,580,581,5,190,0,0,581,21,1,0,0,0,582,583,4,11,1,0,
	583,584,3,382,191,0,584,23,1,0,0,0,585,586,5,251,0,0,586,599,3,252,126,
	0,587,589,5,251,0,0,588,587,1,0,0,0,588,589,1,0,0,0,589,590,1,0,0,0,590,
	595,3,26,13,0,591,592,5,341,0,0,592,594,3,26,13,0,593,591,1,0,0,0,594,597,
	1,0,0,0,595,593,1,0,0,0,595,596,1,0,0,0,596,599,1,0,0,0,597,595,1,0,0,0,
	598,585,1,0,0,0,598,588,1,0,0,0,599,25,1,0,0,0,600,604,3,28,14,0,601,604,
	3,30,15,0,602,604,3,32,16,0,603,600,1,0,0,0,603,601,1,0,0,0,603,602,1,0,
	0,0,604,27,1,0,0,0,605,607,3,438,219,0,606,608,5,340,0,0,607,606,1,0,0,
	0,607,608,1,0,0,0,608,609,1,0,0,0,609,610,5,346,0,0,610,611,3,382,191,0,
	611,622,1,0,0,0,612,613,5,360,0,0,613,614,3,438,219,0,614,616,5,363,0,0,
	615,617,5,340,0,0,616,615,1,0,0,0,616,617,1,0,0,0,617,618,1,0,0,0,618,619,
	5,346,0,0,619,620,3,382,191,0,620,622,1,0,0,0,621,605,1,0,0,0,621,612,1,
	0,0,0,622,29,1,0,0,0,623,624,5,360,0,0,624,629,3,438,219,0,625,626,5,341,
	0,0,626,628,3,438,219,0,627,625,1,0,0,0,628,631,1,0,0,0,629,627,1,0,0,0,
	629,630,1,0,0,0,630,632,1,0,0,0,631,629,1,0,0,0,632,634,5,363,0,0,633,635,
	5,340,0,0,634,633,1,0,0,0,634,635,1,0,0,0,635,636,1,0,0,0,636,637,5,346,
	0,0,637,638,5,360,0,0,638,643,3,382,191,0,639,640,5,341,0,0,640,642,3,382,
	191,0,641,639,1,0,0,0,642,645,1,0,0,0,643,641,1,0,0,0,643,644,1,0,0,0,644,
	646,1,0,0,0,645,643,1,0,0,0,646,647,5,363,0,0,647,31,1,0,0,0,648,661,3,
	438,219,0,649,650,5,360,0,0,650,655,3,438,219,0,651,652,5,341,0,0,652,654,
	3,438,219,0,653,651,1,0,0,0,654,657,1,0,0,0,655,653,1,0,0,0,655,656,1,0,
	0,0,656,658,1,0,0,0,657,655,1,0,0,0,658,659,5,363,0,0,659,661,1,0,0,0,660,
	648,1,0,0,0,660,649,1,0,0,0,661,663,1,0,0,0,662,664,5,340,0,0,663,662,1,
	0,0,0,663,664,1,0,0,0,664,665,1,0,0,0,665,666,5,346,0,0,666,667,5,360,0,
	0,667,668,3,280,140,0,668,669,5,363,0,0,669,33,1,0,0,0,670,671,5,4,0,0,
	671,672,3,438,219,0,672,673,5,60,0,0,673,677,5,110,0,0,674,675,5,227,0,
	0,675,678,5,251,0,0,676,678,5,215,0,0,677,674,1,0,0,0,677,676,1,0,0,0,678,
	679,1,0,0,0,679,680,3,438,219,0,680,35,1,0,0,0,681,684,5,11,0,0,682,683,
	5,227,0,0,683,685,5,251,0,0,684,682,1,0,0,0,684,685,1,0,0,0,685,686,1,0,
	0,0,686,687,7,2,0,0,687,688,5,360,0,0,688,693,3,438,219,0,689,690,5,341,
	0,0,690,692,3,438,219,0,691,689,1,0,0,0,692,695,1,0,0,0,693,691,1,0,0,0,
	693,694,1,0,0,0,694,696,1,0,0,0,695,693,1,0,0,0,696,697,5,363,0,0,697,698,
	5,309,0,0,698,699,5,215,0,0,699,700,3,438,219,0,700,37,1,0,0,0,701,702,
	5,16,0,0,702,703,5,289,0,0,703,39,1,0,0,0,704,705,5,24,0,0,705,41,1,0,0,
	0,706,707,5,27,0,0,707,714,3,438,219,0,708,710,5,360,0,0,709,711,3,414,
	207,0,710,709,1,0,0,0,710,711,1,0,0,0,711,712,1,0,0,0,712,715,5,363,0,0,
	713,715,3,414,207,0,714,708,1,0,0,0,714,713,1,0,0,0,714,715,1,0,0,0,715,
	43,1,0,0,0,716,717,5,69,0,0,717,722,3,50,25,0,718,719,5,341,0,0,719,721,
	3,50,25,0,720,718,1,0,0,0,721,724,1,0,0,0,722,720,1,0,0,0,722,723,1,0,0,
	0,723,45,1,0,0,0,724,722,1,0,0,0,725,726,5,69,0,0,726,727,3,50,25,0,727,
	733,5,365,0,0,728,729,3,50,25,0,729,730,5,365,0,0,730,732,1,0,0,0,731,728,
	1,0,0,0,732,735,1,0,0,0,733,731,1,0,0,0,733,734,1,0,0,0,734,47,1,0,0,0,
	735,733,1,0,0,0,736,737,3,50,25,0,737,743,5,365,0,0,738,739,3,50,25,0,739,
	740,5,365,0,0,740,742,1,0,0,0,741,738,1,0,0,0,742,745,1,0,0,0,743,741,1,
	0,0,0,743,744,1,0,0,0,744,49,1,0,0,0,745,743,1,0,0,0,746,752,3,56,28,0,
	747,752,3,54,27,0,748,752,3,62,31,0,749,752,3,52,26,0,750,752,3,64,32,0,
	751,746,1,0,0,0,751,747,1,0,0,0,751,748,1,0,0,0,751,749,1,0,0,0,751,750,
	1,0,0,0,752,51,1,0,0,0,753,758,3,438,219,0,754,755,5,341,0,0,755,757,3,
	438,219,0,756,754,1,0,0,0,757,760,1,0,0,0,758,756,1,0,0,0,758,759,1,0,0,
	0,759,762,1,0,0,0,760,758,1,0,0,0,761,763,5,9,0,0,762,761,1,0,0,0,762,763,
	1,0,0,0,763,764,1,0,0,0,764,766,3,118,59,0,765,767,3,120,60,0,766,765,1,
	0,0,0,766,767,1,0,0,0,767,771,1,0,0,0,768,770,3,122,61,0,769,768,1,0,0,
	0,770,773,1,0,0,0,771,769,1,0,0,0,771,772,1,0,0,0,772,775,1,0,0,0,773,771,
	1,0,0,0,774,776,3,124,62,0,775,774,1,0,0,0,775,776,1,0,0,0,776,789,1,0,
	0,0,777,778,3,438,219,0,778,780,5,44,0,0,779,781,5,9,0,0,780,779,1,0,0,
	0,780,781,1,0,0,0,781,782,1,0,0,0,782,784,3,118,59,0,783,785,3,120,60,0,
	784,783,1,0,0,0,784,785,1,0,0,0,785,786,1,0,0,0,786,787,3,124,62,0,787,
	789,1,0,0,0,788,753,1,0,0,0,788,777,1,0,0,0,789,53,1,0,0,0,790,791,3,438,
	219,0,791,792,5,48,0,0,792,55,1,0,0,0,793,794,5,60,0,0,794,799,3,438,219,
	0,795,796,3,438,219,0,796,797,5,60,0,0,797,799,1,0,0,0,798,793,1,0,0,0,
	798,795,1,0,0,0,799,802,1,0,0,0,800,803,3,58,29,0,801,803,3,60,30,0,802,
	800,1,0,0,0,802,801,1,0,0,0,802,803,1,0,0,0,803,804,1,0,0,0,804,807,7,3,
	0,0,805,808,3,280,140,0,806,808,3,382,191,0,807,805,1,0,0,0,807,806,1,0,
	0,0,808,57,1,0,0,0,809,810,5,309,0,0,810,812,5,229,0,0,811,813,5,196,0,
	0,812,811,1,0,0,0,812,813,1,0,0,0,813,816,1,0,0,0,814,815,5,287,0,0,815,
	817,7,4,0,0,816,814,1,0,0,0,816,817,1,0,0,0,817,59,1,0,0,0,818,819,5,310,
	0,0,819,820,5,229,0,0,820,61,1,0,0,0,821,822,7,5,0,0,822,823,5,122,0,0,
	823,829,5,110,0,0,824,830,5,263,0,0,825,830,5,266,0,0,826,827,5,188,0,0,
	827,830,5,113,0,0,828,830,3,438,219,0,829,824,1,0,0,0,829,825,1,0,0,0,829,
	826,1,0,0,0,829,828,1,0,0,0,830,831,1,0,0,0,831,832,3,6,3,0,832,63,1,0,
	0,0,833,835,5,118,0,0,834,833,1,0,0,0,834,835,1,0,0,0,835,836,1,0,0,0,836,
	837,5,280,0,0,837,838,5,278,0,0,838,840,3,438,219,0,839,841,3,84,42,0,840,
	839,1,0,0,0,840,841,1,0,0,0,841,842,1,0,0,0,842,843,3,70,35,0,843,65,1,
	0,0,0,844,845,5,54,0,0,845,849,5,278,0,0,846,847,5,129,0,0,847,848,5,188,
	0,0,848,850,5,101,0,0,849,846,1,0,0,0,849,850,1,0,0,0,850,851,1,0,0,0,851,
	853,3,328,164,0,852,854,3,84,42,0,853,852,1,0,0,0,853,854,1,0,0,0,854,855,
	1,0,0,0,855,856,3,70,35,0,856,67,1,0,0,0,857,864,5,54,0,0,858,859,5,161,
	0,0,859,865,5,280,0,0,860,862,7,6,0,0,861,860,1,0,0,0,861,862,1,0,0,0,862,
	863,1,0,0,0,863,865,5,305,0,0,864,858,1,0,0,0,864,861,1,0,0,0,865,866,1,
	0,0,0,866,867,5,278,0,0,867,869,3,438,219,0,868,870,3,84,42,0,869,868,1,
	0,0,0,869,870,1,0,0,0,870,871,1,0,0,0,871,872,3,70,35,0,872,69,1,0,0,0,
	873,875,5,9,0,0,874,873,1,0,0,0,874,875,1,0,0,0,875,876,1,0,0,0,876,877,
	5,360,0,0,877,878,3,280,140,0,878,879,5,363,0,0,879,889,1,0,0,0,880,882,
	5,9,0,0,881,880,1,0,0,0,881,882,1,0,0,0,882,883,1,0,0,0,883,889,3,280,140,
	0,884,885,5,360,0,0,885,886,3,72,36,0,886,887,5,363,0,0,887,889,1,0,0,0,
	888,874,1,0,0,0,888,881,1,0,0,0,888,884,1,0,0,0,889,891,1,0,0,0,890,892,
	3,90,45,0,891,890,1,0,0,0,891,892,1,0,0,0,892,71,1,0,0,0,893,898,3,74,37,
	0,894,895,5,341,0,0,895,897,3,74,37,0,896,894,1,0,0,0,897,900,1,0,0,0,898,
	896,1,0,0,0,898,899,1,0,0,0,899,73,1,0,0,0,900,898,1,0,0,0,901,902,3,76,
	38,0,902,904,3,118,59,0,903,905,3,120,60,0,904,903,1,0,0,0,904,905,1,0,
	0,0,905,909,1,0,0,0,906,908,3,122,61,0,907,906,1,0,0,0,908,911,1,0,0,0,
	909,907,1,0,0,0,909,910,1,0,0,0,910,915,1,0,0,0,911,909,1,0,0,0,912,914,
	3,78,39,0,913,912,1,0,0,0,914,917,1,0,0,0,915,913,1,0,0,0,915,916,1,0,0,
	0,916,924,1,0,0,0,917,915,1,0,0,0,918,919,5,49,0,0,919,921,3,438,219,0,
	920,918,1,0,0,0,920,921,1,0,0,0,921,922,1,0,0,0,922,924,3,80,40,0,923,901,
	1,0,0,0,923,920,1,0,0,0,924,75,1,0,0,0,925,926,3,438,219,0,926,77,1,0,0,
	0,927,960,3,124,62,0,928,930,5,188,0,0,929,928,1,0,0,0,929,930,1,0,0,0,
	930,931,1,0,0,0,931,960,5,190,0,0,932,933,5,212,0,0,933,960,5,153,0,0,934,
	960,5,294,0,0,935,936,5,222,0,0,936,937,3,328,164,0,937,938,5,360,0,0,938,
	939,3,438,219,0,939,943,5,363,0,0,940,942,3,82,41,0,941,940,1,0,0,0,942,
	945,1,0,0,0,943,941,1,0,0,0,943,944,1,0,0,0,944,960,1,0,0,0,945,943,1,0,
	0,0,946,947,5,128,0,0,947,948,5,360,0,0,948,953,5,370,0,0,949,950,5,341,
	0,0,950,952,5,370,0,0,951,949,1,0,0,0,952,955,1,0,0,0,953,951,1,0,0,0,953,
	954,1,0,0,0,954,956,1,0,0,0,955,953,1,0,0,0,956,960,5,363,0,0,957,960,5,
	13,0,0,958,960,5,92,0,0,959,927,1,0,0,0,959,929,1,0,0,0,959,932,1,0,0,0,
	959,934,1,0,0,0,959,935,1,0,0,0,959,946,1,0,0,0,959,957,1,0,0,0,959,958,
	1,0,0,0,960,79,1,0,0,0,961,962,5,212,0,0,962,964,5,153,0,0,963,965,5,38,
	0,0,964,963,1,0,0,0,964,965,1,0,0,0,965,966,1,0,0,0,966,967,5,360,0,0,967,
	969,3,438,219,0,968,970,7,7,0,0,969,968,1,0,0,0,969,970,1,0,0,0,970,978,
	1,0,0,0,971,972,5,341,0,0,972,974,3,438,219,0,973,975,7,7,0,0,974,973,1,
	0,0,0,974,975,1,0,0,0,975,977,1,0,0,0,976,971,1,0,0,0,977,980,1,0,0,0,978,
	976,1,0,0,0,978,979,1,0,0,0,979,981,1,0,0,0,980,978,1,0,0,0,981,983,5,363,
	0,0,982,984,5,92,0,0,983,982,1,0,0,0,983,984,1,0,0,0,984,986,1,0,0,0,985,
	987,3,236,118,0,986,985,1,0,0,0,986,987,1,0,0,0,987,1019,1,0,0,0,988,989,
	5,111,0,0,989,990,5,153,0,0,990,991,5,360,0,0,991,996,3,438,219,0,992,993,
	5,341,0,0,993,995,3,438,219,0,994,992,1,0,0,0,995,998,1,0,0,0,996,994,1,
	0,0,0,996,997,1,0,0,0,997,999,1,0,0,0,998,996,1,0,0,0,999,1000,5,363,0,
	0,1000,1001,5,222,0,0,1001,1002,3,328,164,0,1002,1003,5,360,0,0,1003,1008,
	3,438,219,0,1004,1005,5,341,0,0,1005,1007,3,438,219,0,1006,1004,1,0,0,0,
	1007,1010,1,0,0,0,1008,1006,1,0,0,0,1008,1009,1,0,0,0,1009,1011,1,0,0,0,
	1010,1008,1,0,0,0,1011,1015,5,363,0,0,1012,1014,3,82,41,0,1013,1012,1,0,
	0,0,1014,1017,1,0,0,0,1015,1013,1,0,0,0,1015,1016,1,0,0,0,1016,1019,1,0,
	0,0,1017,1015,1,0,0,0,1018,961,1,0,0,0,1018,988,1,0,0,0,1019,81,1,0,0,0,
	1020,1021,5,195,0,0,1021,1030,7,8,0,0,1022,1023,5,183,0,0,1023,1031,5,1,
	0,0,1024,1031,5,226,0,0,1025,1026,5,251,0,0,1026,1031,5,190,0,0,1027,1028,
	5,251,0,0,1028,1031,5,70,0,0,1029,1031,5,29,0,0,1030,1022,1,0,0,0,1030,
	1024,1,0,0,0,1030,1025,1,0,0,0,1030,1027,1,0,0,0,1030,1029,1,0,0,0,1031,
	83,1,0,0,0,1032,1034,3,86,43,0,1033,1032,1,0,0,0,1034,1035,1,0,0,0,1035,
	1033,1,0,0,0,1035,1036,1,0,0,0,1036,85,1,0,0,0,1037,1038,5,341,0,0,1038,
	1041,3,88,44,0,1039,1041,3,100,50,0,1040,1037,1,0,0,0,1040,1039,1,0,0,0,
	1041,87,1,0,0,0,1042,1044,5,183,0,0,1043,1042,1,0,0,0,1043,1044,1,0,0,0,
	1044,1045,1,0,0,0,1045,1046,7,9,0,0,1046,89,1,0,0,0,1047,1049,3,92,46,0,
	1048,1047,1,0,0,0,1049,1050,1,0,0,0,1050,1048,1,0,0,0,1050,1051,1,0,0,0,
	1051,91,1,0,0,0,1052,1053,5,195,0,0,1053,1054,5,45,0,0,1054,1055,7,10,0,
	0,1055,1063,5,237,0,0,1056,1063,3,94,47,0,1057,1063,3,96,48,0,1058,1063,
	3,98,49,0,1059,1063,3,100,50,0,1060,1063,3,106,53,0,1061,1063,3,108,54,
	0,1062,1052,1,0,0,0,1062,1056,1,0,0,0,1062,1057,1,0,0,0,1062,1058,1,0,0,
	0,1062,1059,1,0,0,0,1062,1060,1,0,0,0,1062,1061,1,0,0,0,1063,93,1,0,0,0,
	1064,1065,5,248,0,0,1065,1066,5,55,0,0,1066,1083,7,11,0,0,1067,1068,7,12,
	0,0,1068,1083,5,370,0,0,1069,1083,5,185,0,0,1070,1083,7,13,0,0,1071,1072,
	5,270,0,0,1072,1075,5,360,0,0,1073,1076,3,438,219,0,1074,1076,5,370,0,0,
	1075,1073,1,0,0,0,1075,1074,1,0,0,0,1076,1077,1,0,0,0,1077,1075,1,0,0,0,
	1077,1078,1,0,0,0,1078,1079,1,0,0,0,1079,1083,5,363,0,0,1080,1081,5,279,
	0,0,1081,1083,3,438,219,0,1082,1064,1,0,0,0,1082,1067,1,0,0,0,1082,1069,
	1,0,0,0,1082,1070,1,0,0,0,1082,1071,1,0,0,0,1082,1080,1,0,0,0,1083,95,1,
	0,0,0,1084,1086,5,134,0,0,1085,1084,1,0,0,0,1085,1086,1,0,0,0,1086,1087,
	1,0,0,0,1087,1088,5,132,0,0,1088,1118,3,438,219,0,1089,1090,5,309,0,0,1090,
	1118,5,224,0,0,1091,1092,5,84,0,0,1092,1093,5,25,0,0,1093,1094,5,123,0,
	0,1094,1095,5,360,0,0,1095,1100,3,438,219,0,1096,1097,5,341,0,0,1097,1099,
	3,438,219,0,1098,1096,1,0,0,0,1099,1102,1,0,0,0,1100,1098,1,0,0,0,1100,
	1101,1,0,0,0,1101,1103,1,0,0,0,1102,1100,1,0,0,0,1103,1104,5,363,0,0,1104,
	1118,1,0,0,0,1105,1107,5,188,0,0,1106,1105,1,0,0,0,1106,1107,1,0,0,0,1107,
	1108,1,0,0,0,1108,1118,5,167,0,0,1109,1110,5,46,0,0,1110,1118,7,14,0,0,
	1111,1112,5,74,0,0,1112,1118,5,196,0,0,1113,1114,5,309,0,0,1114,1115,5,
	226,0,0,1115,1116,5,195,0,0,1116,1118,5,87,0,0,1117,1085,1,0,0,0,1117,1089,
	1,0,0,0,1117,1091,1,0,0,0,1117,1106,1,0,0,0,1117,1109,1,0,0,0,1117,1111,
	1,0,0,0,1117,1113,1,0,0,0,1118,97,1,0,0,0,1119,1121,5,294,0,0,1120,1119,
	1,0,0,0,1120,1121,1,0,0,0,1121,1122,1,0,0,0,1122,1123,5,212,0,0,1123,1124,
	5,134,0,0,1124,1125,5,360,0,0,1125,1130,3,438,219,0,1126,1127,5,341,0,0,
	1127,1129,3,438,219,0,1128,1126,1,0,0,0,1129,1132,1,0,0,0,1130,1128,1,0,
	0,0,1130,1131,1,0,0,0,1131,1133,1,0,0,0,1132,1130,1,0,0,0,1133,1134,5,363,
	0,0,1134,1138,1,0,0,0,1135,1136,5,309,0,0,1136,1138,5,62,0,0,1137,1120,
	1,0,0,0,1137,1135,1,0,0,0,1138,99,1,0,0,0,1139,1144,3,102,51,0,1140,1141,
	5,271,0,0,1141,1142,5,9,0,0,1142,1144,3,438,219,0,1143,1139,1,0,0,0,1143,
	1140,1,0,0,0,1144,101,1,0,0,0,1145,1146,5,236,0,0,1146,1147,5,112,0,0,1147,
	1151,5,76,0,0,1148,1150,3,104,52,0,1149,1148,1,0,0,0,1150,1153,1,0,0,0,
	1151,1149,1,0,0,0,1151,1152,1,0,0,0,1152,103,1,0,0,0,1153,1151,1,0,0,0,
	1154,1155,5,106,0,0,1155,1156,5,281,0,0,1156,1157,5,25,0,0,1157,1161,3,
	382,191,0,1158,1159,5,95,0,0,1159,1160,5,25,0,0,1160,1162,3,382,191,0,1161,
	1158,1,0,0,0,1161,1162,1,0,0,0,1162,1182,1,0,0,0,1163,1164,5,41,0,0,1164,
	1165,5,150,0,0,1165,1166,5,281,0,0,1166,1167,5,25,0,0,1167,1182,3,382,191,
	0,1168,1169,5,170,0,0,1169,1170,5,154,0,0,1170,1171,5,281,0,0,1171,1172,
	5,25,0,0,1172,1182,3,382,191,0,1173,1174,5,160,0,0,1174,1175,5,281,0,0,
	1175,1176,5,25,0,0,1176,1182,3,382,191,0,1177,1178,5,190,0,0,1178,1179,
	5,72,0,0,1179,1180,5,9,0,0,1180,1182,3,382,191,0,1181,1154,1,0,0,0,1181,
	1163,1,0,0,0,1181,1168,1,0,0,0,1181,1173,1,0,0,0,1181,1177,1,0,0,0,1182,
	105,1,0,0,0,1183,1184,5,195,0,0,1184,1188,3,438,219,0,1185,1186,5,282,0,
	0,1186,1188,3,438,219,0,1187,1183,1,0,0,0,1187,1185,1,0,0,0,1188,107,1,
	0,0,0,1189,1191,5,13,0,0,1190,1192,5,346,0,0,1191,1190,1,0,0,0,1191,1192,
	1,0,0,0,1192,1193,1,0,0,0,1193,1217,3,382,191,0,1194,1196,5,43,0,0,1195,
	1197,5,346,0,0,1196,1195,1,0,0,0,1196,1197,1,0,0,0,1197,1198,1,0,0,0,1198,
	1217,3,382,191,0,1199,1201,5,70,0,0,1200,1199,1,0,0,0,1200,1201,1,0,0,0,
	1201,1205,1,0,0,0,1202,1203,5,34,0,0,1203,1206,5,251,0,0,1204,1206,5,35,
	0,0,1205,1202,1,0,0,0,1205,1204,1,0,0,0,1206,1208,1,0,0,0,1207,1209,5,346,
	0,0,1208,1207,1,0,0,0,1208,1209,1,0,0,0,1209,1210,1,0,0,0,1210,1217,3,382,
	191,0,1211,1213,5,94,0,0,1212,1214,5,346,0,0,1213,1212,1,0,0,0,1213,1214,
	1,0,0,0,1214,1215,1,0,0,0,1215,1217,3,382,191,0,1216,1189,1,0,0,0,1216,
	1194,1,0,0,0,1216,1200,1,0,0,0,1216,1211,1,0,0,0,1217,109,1,0,0,0,1218,
	1219,5,5,0,0,1219,1220,5,278,0,0,1220,1221,3,328,164,0,1221,1222,3,112,
	56,0,1222,111,1,0,0,0,1223,1224,3,114,57,0,1224,113,1,0,0,0,1225,1228,5,
	2,0,0,1226,1227,5,49,0,0,1227,1229,3,438,219,0,1228,1226,1,0,0,0,1228,1229,
	1,0,0,0,1229,1230,1,0,0,0,1230,1231,3,116,58,0,1231,115,1,0,0,0,1232,1233,
	5,212,0,0,1233,1235,5,153,0,0,1234,1236,5,38,0,0,1235,1234,1,0,0,0,1235,
	1236,1,0,0,0,1236,1237,1,0,0,0,1237,1238,5,360,0,0,1238,1240,3,438,219,
	0,1239,1241,7,7,0,0,1240,1239,1,0,0,0,1240,1241,1,0,0,0,1241,1249,1,0,0,
	0,1242,1243,5,341,0,0,1243,1245,3,438,219,0,1244,1246,7,7,0,0,1245,1244,
	1,0,0,0,1245,1246,1,0,0,0,1246,1248,1,0,0,0,1247,1242,1,0,0,0,1248,1251,
	1,0,0,0,1249,1247,1,0,0,0,1249,1250,1,0,0,0,1250,1252,1,0,0,0,1251,1249,
	1,0,0,0,1252,1254,5,363,0,0,1253,1255,5,92,0,0,1254,1253,1,0,0,0,1254,1255,
	1,0,0,0,1255,1257,1,0,0,0,1256,1258,3,236,118,0,1257,1256,1,0,0,0,1257,
	1258,1,0,0,0,1258,1295,1,0,0,0,1259,1260,5,111,0,0,1260,1261,5,153,0,0,
	1261,1262,5,360,0,0,1262,1267,3,438,219,0,1263,1264,5,341,0,0,1264,1266,
	3,438,219,0,1265,1263,1,0,0,0,1266,1269,1,0,0,0,1267,1265,1,0,0,0,1267,
	1268,1,0,0,0,1268,1270,1,0,0,0,1269,1267,1,0,0,0,1270,1271,5,363,0,0,1271,
	1272,5,222,0,0,1272,1273,3,328,164,0,1273,1274,5,360,0,0,1274,1279,3,438,
	219,0,1275,1276,5,341,0,0,1276,1278,3,438,219,0,1277,1275,1,0,0,0,1278,
	1281,1,0,0,0,1279,1277,1,0,0,0,1279,1280,1,0,0,0,1280,1282,1,0,0,0,1281,
	1279,1,0,0,0,1282,1286,5,363,0,0,1283,1285,3,82,41,0,1284,1283,1,0,0,0,
	1285,1288,1,0,0,0,1286,1284,1,0,0,0,1286,1287,1,0,0,0,1287,1295,1,0,0,0,
	1288,1286,1,0,0,0,1289,1290,5,70,0,0,1290,1291,3,382,191,0,1291,1292,5,
	110,0,0,1292,1293,3,438,219,0,1293,1295,1,0,0,0,1294,1232,1,0,0,0,1294,
	1259,1,0,0,0,1294,1289,1,0,0,0,1295,117,1,0,0,0,1296,1342,5,33,0,0,1297,
	1342,5,18,0,0,1298,1342,5,19,0,0,1299,1342,5,20,0,0,1300,1342,5,21,0,0,
	1301,1342,5,22,0,0,1302,1342,5,63,0,0,1303,1342,5,64,0,0,1304,1342,5,67,
	0,0,1305,1342,5,68,0,0,1306,1308,5,86,0,0,1307,1309,5,210,0,0,1308,1307,
	1,0,0,0,1308,1309,1,0,0,0,1309,1342,1,0,0,0,1310,1342,5,109,0,0,1311,1342,
	5,139,0,0,1312,1342,5,140,0,0,1313,1342,5,141,0,0,1314,1342,5,142,0,0,1315,
	1342,5,143,0,0,1316,1342,5,180,0,0,1317,1342,5,182,0,0,1318,1342,5,192,
	0,0,1319,1342,5,191,0,0,1320,1342,5,209,0,0,1321,1342,5,221,0,0,1322,1323,
	5,228,0,0,1323,1342,5,304,0,0,1324,1342,5,258,0,0,1325,1342,5,257,0,0,1326,
	1342,5,259,0,0,1327,1342,5,261,0,0,1328,1342,5,260,0,0,1329,1342,5,272,
	0,0,1330,1342,5,277,0,0,1331,1342,5,284,0,0,1332,1342,5,285,0,0,1333,1342,
	5,302,0,0,1334,1342,5,303,0,0,1335,1342,5,313,0,0,1336,1339,3,438,219,0,
	1337,1338,5,357,0,0,1338,1340,7,15,0,0,1339,1337,1,0,0,0,1339,1340,1,0,
	0,0,1340,1342,1,0,0,0,1341,1296,1,0,0,0,1341,1297,1,0,0,0,1341,1298,1,0,
	0,0,1341,1299,1,0,0,0,1341,1300,1,0,0,0,1341,1301,1,0,0,0,1341,1302,1,0,
	0,0,1341,1303,1,0,0,0,1341,1304,1,0,0,0,1341,1305,1,0,0,0,1341,1306,1,0,
	0,0,1341,1310,1,0,0,0,1341,1311,1,0,0,0,1341,1312,1,0,0,0,1341,1313,1,0,
	0,0,1341,1314,1,0,0,0,1341,1315,1,0,0,0,1341,1316,1,0,0,0,1341,1317,1,0,
	0,0,1341,1318,1,0,0,0,1341,1319,1,0,0,0,1341,1320,1,0,0,0,1341,1321,1,0,
	0,0,1341,1322,1,0,0,0,1341,1324,1,0,0,0,1341,1325,1,0,0,0,1341,1326,1,0,
	0,0,1341,1327,1,0,0,0,1341,1328,1,0,0,0,1341,1329,1,0,0,0,1341,1330,1,0,
	0,0,1341,1331,1,0,0,0,1341,1332,1,0,0,0,1341,1333,1,0,0,0,1341,1334,1,0,
	0,0,1341,1335,1,0,0,0,1341,1336,1,0,0,0,1342,119,1,0,0,0,1343,1344,5,360,
	0,0,1344,1346,7,16,0,0,1345,1347,7,17,0,0,1346,1345,1,0,0,0,1346,1347,1,
	0,0,0,1347,1350,1,0,0,0,1348,1349,5,341,0,0,1349,1351,5,370,0,0,1350,1348,
	1,0,0,0,1350,1351,1,0,0,0,1351,1352,1,0,0,0,1352,1353,5,363,0,0,1353,121,
	1,0,0,0,1354,1356,5,188,0,0,1355,1354,1,0,0,0,1355,1356,1,0,0,0,1356,1357,
	1,0,0,0,1357,1366,5,190,0,0,1358,1359,5,34,0,0,1359,1360,5,251,0,0,1360,
	1366,3,438,219,0,1361,1363,5,188,0,0,1362,1361,1,0,0,0,1362,1363,1,0,0,
	0,1363,1364,1,0,0,0,1364,1366,7,18,0,0,1365,1355,1,0,0,0,1365,1358,1,0,
	0,0,1365,1362,1,0,0,0,1366,123,1,0,0,0,1367,1369,5,340,0,0,1368,1367,1,
	0,0,0,1368,1369,1,0,0,0,1369,1370,1,0,0,0,1370,1371,5,346,0,0,1371,1380,
	3,382,191,0,1372,1374,5,309,0,0,1373,1372,1,0,0,0,1373,1374,1,0,0,0,1374,
	1375,1,0,0,0,1375,1377,5,70,0,0,1376,1378,3,382,191,0,1377,1376,1,0,0,0,
	1377,1378,1,0,0,0,1378,1380,1,0,0,0,1379,1368,1,0,0,0,1379,1373,1,0,0,0,
	1380,125,1,0,0,0,1381,1382,5,54,0,0,1382,1386,7,19,0,0,1383,1384,5,129,
	0,0,1384,1385,5,188,0,0,1385,1387,5,101,0,0,1386,1383,1,0,0,0,1386,1387,
	1,0,0,0,1387,1388,1,0,0,0,1388,1392,3,382,191,0,1389,1391,3,128,64,0,1390,
	1389,1,0,0,0,1391,1394,1,0,0,0,1392,1390,1,0,0,0,1392,1393,1,0,0,0,1393,
	127,1,0,0,0,1394,1392,1,0,0,0,1395,1396,5,43,0,0,1396,1400,3,382,191,0,
	1397,1398,5,162,0,0,1398,1400,3,382,191,0,1399,1395,1,0,0,0,1399,1397,1,
	0,0,0,1400,129,1,0,0,0,1401,1409,5,5,0,0,1402,1405,5,54,0,0,1403,1404,5,
	198,0,0,1404,1406,5,224,0,0,1405,1403,1,0,0,0,1405,1406,1,0,0,0,1406,1409,
	1,0,0,0,1407,1409,5,224,0,0,1408,1401,1,0,0,0,1408,1402,1,0,0,0,1408,1407,
	1,0,0,0,1408,1409,1,0,0,0,1409,1410,1,0,0,0,1410,1411,5,116,0,0,1411,1413,
	3,438,219,0,1412,1414,3,148,74,0,1413,1412,1,0,0,0,1413,1414,1,0,0,0,1414,
	1415,1,0,0,0,1415,1417,3,132,66,0,1416,1418,7,20,0,0,1417,1416,1,0,0,0,
	1417,1418,1,0,0,0,1418,1420,1,0,0,0,1419,1421,3,48,24,0,1420,1419,1,0,0,
	0,1420,1421,1,0,0,0,1421,1422,1,0,0,0,1422,1423,3,6,3,0,1423,131,1,0,0,
	0,1424,1425,7,21,0,0,1425,1427,3,118,59,0,1426,1428,3,120,60,0,1427,1426,
	1,0,0,0,1427,1428,1,0,0,0,1428,133,1,0,0,0,1429,1437,5,5,0,0,1430,1433,
	5,54,0,0,1431,1432,5,198,0,0,1432,1434,5,224,0,0,1433,1431,1,0,0,0,1433,
	1434,1,0,0,0,1434,1437,1,0,0,0,1435,1437,5,224,0,0,1436,1429,1,0,0,0,1436,
	1430,1,0,0,0,1436,1435,1,0,0,0,1436,1437,1,0,0,0,1437,1438,1,0,0,0,1438,
	1439,5,205,0,0,1439,1440,3,438,219,0,1440,1441,7,20,0,0,1441,1442,3,136,
	68,0,1442,1446,5,93,0,0,1443,1444,3,438,219,0,1444,1445,5,365,0,0,1445,
	1447,1,0,0,0,1446,1443,1,0,0,0,1446,1447,1,0,0,0,1447,135,1,0,0,0,1448,
	1449,3,138,69,0,1449,1455,5,365,0,0,1450,1451,3,138,69,0,1451,1452,5,365,
	0,0,1452,1454,1,0,0,0,1453,1450,1,0,0,0,1454,1457,1,0,0,0,1455,1453,1,0,
	0,0,1455,1456,1,0,0,0,1456,137,1,0,0,0,1457,1455,1,0,0,0,1458,1472,3,50,
	25,0,1459,1460,5,116,0,0,1460,1462,3,438,219,0,1461,1463,3,148,74,0,1462,
	1461,1,0,0,0,1462,1463,1,0,0,0,1463,1464,1,0,0,0,1464,1465,3,132,66,0,1465,
	1472,1,0,0,0,1466,1467,7,22,0,0,1467,1469,3,438,219,0,1468,1470,3,148,74,
	0,1469,1468,1,0,0,0,1469,1470,1,0,0,0,1470,1472,1,0,0,0,1471,1458,1,0,0,
	0,1471,1459,1,0,0,0,1471,1466,1,0,0,0,1472,139,1,0,0,0,1473,1481,5,5,0,
	0,1474,1477,5,54,0,0,1475,1476,5,198,0,0,1476,1478,5,224,0,0,1477,1475,
	1,0,0,0,1477,1478,1,0,0,0,1478,1481,1,0,0,0,1479,1481,5,224,0,0,1480,1473,
	1,0,0,0,1480,1474,1,0,0,0,1480,1479,1,0,0,0,1480,1481,1,0,0,0,1481,1482,
	1,0,0,0,1482,1483,5,205,0,0,1483,1484,5,23,0,0,1484,1485,3,438,219,0,1485,
	1486,7,20,0,0,1486,1487,3,142,71,0,1487,1491,5,93,0,0,1488,1489,3,438,219,
	0,1489,1490,5,365,0,0,1490,1492,1,0,0,0,1491,1488,1,0,0,0,1491,1492,1,0,
	0,0,1492,141,1,0,0,0,1493,1494,3,144,72,0,1494,1500,5,365,0,0,1495,1496,
	3,144,72,0,1496,1497,5,365,0,0,1497,1499,1,0,0,0,1498,1495,1,0,0,0,1499,
	1502,1,0,0,0,1500,1498,1,0,0,0,1500,1501,1,0,0,0,1501,143,1,0,0,0,1502,
	1500,1,0,0,0,1503,1507,3,50,25,0,1504,1507,3,130,65,0,1505,1507,3,146,73,
	0,1506,1503,1,0,0,0,1506,1504,1,0,0,0,1506,1505,1,0,0,0,1507,145,1,0,0,
	0,1508,1516,5,5,0,0,1509,1512,5,54,0,0,1510,1511,5,198,0,0,1511,1513,5,
	224,0,0,1512,1510,1,0,0,0,1512,1513,1,0,0,0,1513,1516,1,0,0,0,1514,1516,
	5,224,0,0,1515,1508,1,0,0,0,1515,1509,1,0,0,0,1515,1514,1,0,0,0,1515,1516,
	1,0,0,0,1516,1517,1,0,0,0,1517,1518,7,22,0,0,1518,1520,3,438,219,0,1519,
	1521,3,148,74,0,1520,1519,1,0,0,0,1520,1521,1,0,0,0,1521,1523,1,0,0,0,1522,
	1524,3,152,76,0,1523,1522,1,0,0,0,1523,1524,1,0,0,0,1524,1526,1,0,0,0,1525,
	1527,7,20,0,0,1526,1525,1,0,0,0,1526,1527,1,0,0,0,1527,1529,1,0,0,0,1528,
	1530,3,48,24,0,1529,1528,1,0,0,0,1529,1530,1,0,0,0,1530,1532,1,0,0,0,1531,
	1533,3,276,138,0,1532,1531,1,0,0,0,1532,1533,1,0,0,0,1533,1534,1,0,0,0,
	1534,1538,3,10,5,0,1535,1536,3,438,219,0,1536,1537,5,365,0,0,1537,1539,
	1,0,0,0,1538,1535,1,0,0,0,1538,1539,1,0,0,0,1539,147,1,0,0,0,1540,1541,
	5,360,0,0,1541,1563,5,363,0,0,1542,1543,5,360,0,0,1543,1548,3,150,75,0,
	1544,1545,5,341,0,0,1545,1547,3,150,75,0,1546,1544,1,0,0,0,1547,1550,1,
	0,0,0,1548,1546,1,0,0,0,1548,1549,1,0,0,0,1549,1551,1,0,0,0,1550,1548,1,
	0,0,0,1551,1552,5,363,0,0,1552,1563,1,0,0,0,1553,1554,4,74,2,0,1554,1559,
	3,150,75,0,1555,1556,5,341,0,0,1556,1558,3,150,75,0,1557,1555,1,0,0,0,1558,
	1561,1,0,0,0,1559,1557,1,0,0,0,1559,1560,1,0,0,0,1560,1563,1,0,0,0,1561,
	1559,1,0,0,0,1562,1540,1,0,0,0,1562,1542,1,0,0,0,1562,1553,1,0,0,0,1563,
	149,1,0,0,0,1564,1570,5,132,0,0,1565,1570,5,200,0,0,1566,1570,5,137,0,0,
	1567,1568,5,132,0,0,1568,1570,5,200,0,0,1569,1564,1,0,0,0,1569,1565,1,0,
	0,0,1569,1566,1,0,0,0,1569,1567,1,0,0,0,1569,1570,1,0,0,0,1570,1571,1,0,
	0,0,1571,1572,3,438,219,0,1572,1574,3,118,59,0,1573,1575,3,120,60,0,1574,
	1573,1,0,0,0,1574,1575,1,0,0,0,1575,1579,1,0,0,0,1576,1578,3,122,61,0,1577,
	1576,1,0,0,0,1578,1581,1,0,0,0,1579,1577,1,0,0,0,1579,1580,1,0,0,0,1580,
	1583,1,0,0,0,1581,1579,1,0,0,0,1582,1584,3,124,62,0,1583,1582,1,0,0,0,1583,
	1584,1,0,0,0,1584,1607,1,0,0,0,1585,1591,3,438,219,0,1586,1592,5,132,0,
	0,1587,1592,5,200,0,0,1588,1592,5,137,0,0,1589,1590,5,132,0,0,1590,1592,
	5,200,0,0,1591,1586,1,0,0,0,1591,1587,1,0,0,0,1591,1588,1,0,0,0,1591,1589,
	1,0,0,0,1591,1592,1,0,0,0,1592,1593,1,0,0,0,1593,1595,3,118,59,0,1594,1596,
	3,120,60,0,1595,1594,1,0,0,0,1595,1596,1,0,0,0,1596,1600,1,0,0,0,1597,1599,
	3,122,61,0,1598,1597,1,0,0,0,1599,1602,1,0,0,0,1600,1598,1,0,0,0,1600,1601,
	1,0,0,0,1601,1604,1,0,0,0,1602,1600,1,0,0,0,1603,1605,3,124,62,0,1604,1603,
	1,0,0,0,1604,1605,1,0,0,0,1605,1607,1,0,0,0,1606,1569,1,0,0,0,1606,1585,
	1,0,0,0,1607,151,1,0,0,0,1608,1610,3,154,77,0,1609,1608,1,0,0,0,1610,1611,
	1,0,0,0,1611,1609,1,0,0,0,1611,1612,1,0,0,0,1612,153,1,0,0,0,1613,1614,
	5,155,0,0,1614,1625,5,262,0,0,1615,1616,5,262,0,0,1616,1617,5,247,0,0,1617,
	1625,7,23,0,0,1618,1620,5,88,0,0,1619,1618,1,0,0,0,1619,1620,1,0,0,0,1620,
	1621,1,0,0,0,1621,1622,5,227,0,0,1622,1623,5,254,0,0,1623,1625,5,370,0,
	0,1624,1613,1,0,0,0,1624,1615,1,0,0,0,1624,1619,1,0,0,0,1625,155,1,0,0,
	0,1626,1627,5,87,0,0,1627,1630,5,278,0,0,1628,1629,5,129,0,0,1629,1631,
	5,101,0,0,1630,1628,1,0,0,0,1630,1631,1,0,0,0,1631,1632,1,0,0,0,1632,1641,
	3,328,164,0,1633,1634,5,87,0,0,1634,1637,7,19,0,0,1635,1636,5,129,0,0,1636,
	1638,5,101,0,0,1637,1635,1,0,0,0,1637,1638,1,0,0,0,1638,1639,1,0,0,0,1639,
	1641,3,382,191,0,1640,1626,1,0,0,0,1640,1633,1,0,0,0,1641,157,1,0,0,0,1642,
	1643,5,93,0,0,1643,1644,5,289,0,0,1644,159,1,0,0,0,1645,1647,7,24,0,0,1646,
	1648,5,131,0,0,1647,1646,1,0,0,0,1647,1648,1,0,0,0,1648,1649,1,0,0,0,1649,
	1655,3,382,191,0,1650,1651,5,360,0,0,1651,1652,3,414,207,0,1652,1653,5,
	363,0,0,1653,1656,1,0,0,0,1654,1656,3,414,207,0,1655,1650,1,0,0,0,1655,
	1654,1,0,0,0,1655,1656,1,0,0,0,1656,1666,1,0,0,0,1657,1658,5,146,0,0,1658,
	1663,5,367,0,0,1659,1660,5,341,0,0,1660,1662,5,367,0,0,1661,1659,1,0,0,
	0,1662,1665,1,0,0,0,1663,1661,1,0,0,0,1663,1664,1,0,0,0,1664,1667,1,0,0,
	0,1665,1663,1,0,0,0,1666,1657,1,0,0,0,1666,1667,1,0,0,0,1667,1669,1,0,0,
	0,1668,1670,3,278,139,0,1669,1668,1,0,0,0,1669,1670,1,0,0,0,1670,161,1,
	0,0,0,1671,1675,3,164,82,0,1672,1675,3,166,83,0,1673,1675,3,168,84,0,1674,
	1671,1,0,0,0,1674,1672,1,0,0,0,1674,1673,1,0,0,0,1675,163,1,0,0,0,1676,
	1677,5,129,0,0,1677,1678,3,366,183,0,1678,1679,5,283,0,0,1679,1683,3,2,
	1,0,1680,1682,3,170,85,0,1681,1680,1,0,0,0,1682,1685,1,0,0,0,1683,1681,
	1,0,0,0,1683,1684,1,0,0,0,1684,1687,1,0,0,0,1685,1683,1,0,0,0,1686,1688,
	3,172,86,0,1687,1686,1,0,0,0,1687,1688,1,0,0,0,1688,1689,1,0,0,0,1689,1690,
	5,93,0,0,1690,1691,5,129,0,0,1691,165,1,0,0,0,1692,1693,5,129,0,0,1693,
	1694,3,366,183,0,1694,1697,3,6,3,0,1695,1696,5,89,0,0,1696,1698,3,6,3,0,
	1697,1695,1,0,0,0,1697,1698,1,0,0,0,1698,167,1,0,0,0,1699,1700,5,344,0,
	0,1700,1701,5,129,0,0,1701,1702,3,366,183,0,1702,1703,5,283,0,0,1703,1704,
	3,6,3,0,1704,169,1,0,0,0,1705,1706,7,25,0,0,1706,1707,3,366,183,0,1707,
	1708,5,283,0,0,1708,1709,3,2,1,0,1709,171,1,0,0,0,1710,1711,5,89,0,0,1711,
	1712,3,2,1,0,1712,173,1,0,0,0,1713,1716,5,133,0,0,1714,1717,3,432,216,0,
	1715,1717,3,382,191,0,1716,1714,1,0,0,0,1716,1715,1,0,0,0,1717,175,1,0,
	0,0,1718,1725,5,138,0,0,1719,1720,5,203,0,0,1720,1726,5,278,0,0,1721,1723,
	5,146,0,0,1722,1724,5,278,0,0,1723,1722,1,0,0,0,1723,1724,1,0,0,0,1724,
	1726,1,0,0,0,1725,1719,1,0,0,0,1725,1721,1,0,0,0,1726,1727,1,0,0,0,1727,
	1729,3,328,164,0,1728,1730,3,178,89,0,1729,1728,1,0,0,0,1729,1730,1,0,0,
	0,1730,1733,1,0,0,0,1731,1734,3,280,140,0,1732,1734,3,180,90,0,1733,1731,
	1,0,0,0,1733,1732,1,0,0,0,1734,177,1,0,0,0,1735,1736,5,360,0,0,1736,1741,
	3,438,219,0,1737,1738,5,341,0,0,1738,1740,3,438,219,0,1739,1737,1,0,0,0,
	1740,1743,1,0,0,0,1741,1739,1,0,0,0,1741,1742,1,0,0,0,1742,1744,1,0,0,0,
	1743,1741,1,0,0,0,1744,1745,5,363,0,0,1745,179,1,0,0,0,1746,1747,5,300,
	0,0,1747,1752,3,182,91,0,1748,1749,5,341,0,0,1749,1751,3,182,91,0,1750,
	1748,1,0,0,0,1751,1754,1,0,0,0,1752,1750,1,0,0,0,1752,1753,1,0,0,0,1753,
	181,1,0,0,0,1754,1752,1,0,0,0,1755,1756,5,360,0,0,1756,1761,3,382,191,0,
	1757,1758,5,341,0,0,1758,1760,3,382,191,0,1759,1757,1,0,0,0,1760,1763,1,
	0,0,0,1761,1759,1,0,0,0,1761,1762,1,0,0,0,1762,1764,1,0,0,0,1763,1761,1,
	0,0,0,1764,1765,5,363,0,0,1765,183,1,0,0,0,1766,1767,5,138,0,0,1767,1769,
	5,203,0,0,1768,1770,5,161,0,0,1769,1768,1,0,0,0,1769,1770,1,0,0,0,1770,
	1771,1,0,0,0,1771,1772,5,82,0,0,1772,1773,3,420,210,0,1773,1774,3,418,209,
	0,1774,185,1,0,0,0,1775,1777,5,102,0,0,1776,1778,5,367,0,0,1777,1776,1,
	0,0,0,1777,1778,1,0,0,0,1778,1781,1,0,0,0,1779,1780,5,306,0,0,1780,1782,
	3,366,183,0,1781,1779,1,0,0,0,1781,1782,1,0,0,0,1782,187,1,0,0,0,1783,1784,
	5,117,0,0,1784,1785,5,80,0,0,1785,1786,3,190,95,0,1786,189,1,0,0,0,1787,
	1790,3,192,96,0,1788,1790,3,194,97,0,1789,1787,1,0,0,0,1789,1788,1,0,0,
	0,1790,191,1,0,0,0,1791,1792,5,99,0,0,1792,1793,5,370,0,0,1793,1794,3,438,
	219,0,1794,1795,5,346,0,0,1795,1796,5,175,0,0,1796,193,1,0,0,0,1797,1798,
	3,438,219,0,1798,1799,5,346,0,0,1799,1800,5,239,0,0,1800,195,1,0,0,0,1801,
	1802,5,120,0,0,1802,1807,3,198,99,0,1803,1804,5,341,0,0,1804,1806,3,198,
	99,0,1805,1803,1,0,0,0,1806,1809,1,0,0,0,1807,1805,1,0,0,0,1807,1808,1,
	0,0,0,1808,1810,1,0,0,0,1809,1807,1,0,0,0,1810,1811,5,287,0,0,1811,1812,
	5,234,0,0,1812,1813,3,438,219,0,1813,197,1,0,0,0,1814,1815,5,98,0,0,1815,
	1816,5,195,0,0,1816,1817,5,215,0,0,1817,1818,3,438,219,0,1818,199,1,0,0,
	0,1819,1821,5,156,0,0,1820,1822,5,367,0,0,1821,1820,1,0,0,0,1821,1822,1,
	0,0,0,1822,201,1,0,0,0,1823,1824,5,170,0,0,1824,1825,5,193,0,0,1825,1828,
	3,382,191,0,1826,1827,5,287,0,0,1827,1829,3,382,191,0,1828,1826,1,0,0,0,
	1828,1829,1,0,0,0,1829,1832,1,0,0,0,1830,1831,5,12,0,0,1831,1833,3,382,
	191,0,1832,1830,1,0,0,0,1832,1833,1,0,0,0,1833,203,1,0,0,0,1834,1835,5,
	197,0,0,1835,1841,5,367,0,0,1836,1839,5,110,0,0,1837,1840,3,280,140,0,1838,
	1840,3,382,191,0,1839,1837,1,0,0,0,1839,1838,1,0,0,0,1840,1842,1,0,0,0,
	1841,1836,1,0,0,0,1841,1842,1,0,0,0,1842,205,1,0,0,0,1843,1845,5,105,0,
	0,1844,1846,5,114,0,0,1845,1844,1,0,0,0,1845,1846,1,0,0,0,1846,1847,1,0,
	0,0,1847,1848,5,367,0,0,1848,1849,5,146,0,0,1849,1854,5,367,0,0,1850,1851,
	5,341,0,0,1851,1853,5,367,0,0,1852,1850,1,0,0,0,1853,1856,1,0,0,0,1854,
	1852,1,0,0,0,1854,1855,1,0,0,0,1855,207,1,0,0,0,1856,1854,1,0,0,0,1857,
	1858,5,40,0,0,1858,1859,7,26,0,0,1859,1860,5,195,0,0,1860,1862,3,328,164,
	0,1861,1863,3,210,105,0,1862,1861,1,0,0,0,1862,1863,1,0,0,0,1863,209,1,
	0,0,0,1864,1865,5,42,0,0,1865,1866,5,360,0,0,1866,1871,3,438,219,0,1867,
	1868,5,341,0,0,1868,1870,3,438,219,0,1869,1867,1,0,0,0,1870,1873,1,0,0,
	0,1871,1869,1,0,0,0,1871,1872,1,0,0,0,1872,1874,1,0,0,0,1873,1871,1,0,0,
	0,1874,1875,5,363,0,0,1875,211,1,0,0,0,1876,1877,5,37,0,0,1877,1878,5,367,
	0,0,1878,213,1,0,0,0,1879,1880,5,39,0,0,1880,1881,7,27,0,0,1881,1882,3,
	216,108,0,1882,1883,5,341,0,0,1883,1884,3,216,108,0,1884,215,1,0,0,0,1885,
	1887,3,328,164,0,1886,1888,3,330,165,0,1887,1886,1,0,0,0,1887,1888,1,0,
	0,0,1888,1894,1,0,0,0,1889,1890,5,360,0,0,1890,1891,3,280,140,0,1891,1892,
	5,363,0,0,1892,1894,1,0,0,0,1893,1885,1,0,0,0,1893,1889,1,0,0,0,1894,1897,
	1,0,0,0,1895,1896,5,12,0,0,1896,1898,3,438,219,0,1897,1895,1,0,0,0,1897,
	1898,1,0,0,0,1898,217,1,0,0,0,1899,1900,5,51,0,0,1900,1901,5,114,0,0,1901,
	1902,5,161,0,0,1902,1907,3,222,111,0,1903,1904,5,341,0,0,1904,1906,3,222,
	111,0,1905,1903,1,0,0,0,1906,1909,1,0,0,0,1907,1905,1,0,0,0,1907,1908,1,
	0,0,0,1908,1910,1,0,0,0,1909,1907,1,0,0,0,1910,1911,5,287,0,0,1911,1915,
	3,224,112,0,1912,1914,3,228,114,0,1913,1912,1,0,0,0,1914,1917,1,0,0,0,1915,
	1913,1,0,0,0,1915,1916,1,0,0,0,1916,219,1,0,0,0,1917,1915,1,0,0,0,1918,
	1924,5,51,0,0,1919,1925,3,328,164,0,1920,1921,5,360,0,0,1921,1922,3,280,
	140,0,1922,1923,5,363,0,0,1923,1925,1,0,0,0,1924,1919,1,0,0,0,1924,1920,
	1,0,0,0,1925,1926,1,0,0,0,1926,1928,5,287,0,0,1927,1929,5,125,0,0,1928,
	1927,1,0,0,0,1928,1929,1,0,0,0,1929,1930,1,0,0,0,1930,1934,3,224,112,0,
	1931,1933,3,226,113,0,1932,1931,1,0,0,0,1933,1936,1,0,0,0,1934,1932,1,0,
	0,0,1934,1935,1,0,0,0,1935,221,1,0,0,0,1936,1934,1,0,0,0,1937,1940,3,432,
	216,0,1938,1940,3,382,191,0,1939,1937,1,0,0,0,1939,1938,1,0,0,0,1940,223,
	1,0,0,0,1941,1944,3,432,216,0,1942,1944,3,382,191,0,1943,1941,1,0,0,0,1943,
	1942,1,0,0,0,1944,225,1,0,0,0,1945,1946,5,12,0,0,1946,1954,3,438,219,0,
	1947,1948,5,15,0,0,1948,1954,3,382,191,0,1949,1950,5,77,0,0,1950,1954,3,
	382,191,0,1951,1952,5,264,0,0,1952,1954,3,438,219,0,1953,1945,1,0,0,0,1953,
	1947,1,0,0,0,1953,1949,1,0,0,0,1953,1951,1,0,0,0,1954,227,1,0,0,0,1955,
	1956,7,28,0,0,1956,229,1,0,0,0,1957,1959,5,45,0,0,1958,1960,5,311,0,0,1959,
	1958,1,0,0,0,1959,1960,1,0,0,0,1960,231,1,0,0,0,1961,1963,5,54,0,0,1962,
	1964,5,294,0,0,1963,1962,1,0,0,0,1963,1964,1,0,0,0,1964,1965,1,0,0,0,1965,
	1966,5,134,0,0,1966,1967,3,438,219,0,1967,1968,5,195,0,0,1968,1969,3,328,
	164,0,1969,1970,5,360,0,0,1970,1975,3,234,117,0,1971,1972,5,341,0,0,1972,
	1974,3,234,117,0,1973,1971,1,0,0,0,1974,1977,1,0,0,0,1975,1973,1,0,0,0,
	1975,1976,1,0,0,0,1976,1978,1,0,0,0,1977,1975,1,0,0,0,1978,1979,5,363,0,
	0,1979,233,1,0,0,0,1980,1982,3,438,219,0,1981,1983,7,7,0,0,1982,1981,1,
	0,0,0,1982,1983,1,0,0,0,1983,235,1,0,0,0,1984,1985,3,238,119,0,1985,237,
	1,0,0,0,1986,1987,5,309,0,0,1987,1988,5,360,0,0,1988,1989,3,438,219,0,1989,
	1990,5,346,0,0,1990,1998,3,438,219,0,1991,1992,5,341,0,0,1992,1993,3,438,
	219,0,1993,1994,5,346,0,0,1994,1995,3,438,219,0,1995,1997,1,0,0,0,1996,
	1991,1,0,0,0,1997,2000,1,0,0,0,1998,1996,1,0,0,0,1998,1999,1,0,0,0,1999,
	2001,1,0,0,0,2000,1998,1,0,0,0,2001,2005,5,363,0,0,2002,2004,3,106,53,0,
	2003,2002,1,0,0,0,2004,2007,1,0,0,0,2005,2003,1,0,0,0,2005,2006,1,0,0,0,
	2006,239,1,0,0,0,2007,2005,1,0,0,0,2008,2009,5,213,0,0,2009,2016,3,382,
	191,0,2010,2011,5,213,0,0,2011,2012,5,360,0,0,2012,2013,3,382,191,0,2013,
	2014,5,363,0,0,2014,2016,1,0,0,0,2015,2008,1,0,0,0,2015,2010,1,0,0,0,2016,
	241,1,0,0,0,2017,2019,5,344,0,0,2018,2017,1,0,0,0,2018,2019,1,0,0,0,2019,
	2020,1,0,0,0,2020,2022,5,218,0,0,2021,2023,3,382,191,0,2022,2021,1,0,0,
	0,2022,2023,1,0,0,0,2023,243,1,0,0,0,2024,2025,5,220,0,0,2025,245,1,0,0,
	0,2026,2038,5,225,0,0,2027,2029,5,265,0,0,2028,2030,5,299,0,0,2029,2028,
	1,0,0,0,2029,2030,1,0,0,0,2030,2031,1,0,0,0,2031,2036,3,382,191,0,2032,
	2033,5,251,0,0,2033,2034,5,175,0,0,2034,2035,5,346,0,0,2035,2037,3,382,
	191,0,2036,2032,1,0,0,0,2036,2037,1,0,0,0,2037,2039,1,0,0,0,2038,2027,1,
	0,0,0,2038,2039,1,0,0,0,2039,247,1,0,0,0,2040,2042,5,229,0,0,2041,2043,
	3,382,191,0,2042,2041,1,0,0,0,2042,2043,1,0,0,0,2043,249,1,0,0,0,2044,2046,
	5,235,0,0,2045,2047,5,311,0,0,2046,2045,1,0,0,0,2046,2047,1,0,0,0,2047,
	251,1,0,0,0,2048,2052,3,254,127,0,2049,2052,3,256,128,0,2050,2052,3,258,
	129,0,2051,2048,1,0,0,0,2051,2049,1,0,0,0,2051,2050,1,0,0,0,2052,253,1,
	0,0,0,2053,2055,5,58,0,0,2054,2053,1,0,0,0,2054,2055,1,0,0,0,2055,2056,
	1,0,0,0,2056,2059,5,244,0,0,2057,2059,5,59,0,0,2058,2054,1,0,0,0,2058,2057,
	1,0,0,0,2059,2061,1,0,0,0,2060,2062,5,346,0,0,2061,2060,1,0,0,0,2061,2062,
	1,0,0,0,2062,2063,1,0,0,0,2063,2064,3,382,191,0,2064,255,1,0,0,0,2065,2066,
	7,29,0,0,2066,2067,7,30,0,0,2067,257,1,0,0,0,2068,2069,5,217,0,0,2069,2072,
	5,346,0,0,2070,2073,3,382,191,0,2071,2073,5,187,0,0,2072,2070,1,0,0,0,2072,
	2071,1,0,0,0,2073,2075,1,0,0,0,2074,2076,5,295,0,0,2075,2074,1,0,0,0,2075,
	2076,1,0,0,0,2076,2077,1,0,0,0,2077,2078,5,110,0,0,2078,2079,7,31,0,0,2079,
	259,1,0,0,0,2080,2081,5,256,0,0,2081,2082,3,438,219,0,2082,261,1,0,0,0,
	2083,2086,5,276,0,0,2084,2085,5,288,0,0,2085,2087,3,382,191,0,2086,2084,
	1,0,0,0,2086,2087,1,0,0,0,2087,2088,1,0,0,0,2088,2098,5,110,0,0,2089,2099,
	3,280,140,0,2090,2092,3,328,164,0,2091,2093,3,330,165,0,2092,2091,1,0,0,
	0,2092,2093,1,0,0,0,2093,2096,1,0,0,0,2094,2095,5,159,0,0,2095,2097,3,382,
	191,0,2096,2094,1,0,0,0,2096,2097,1,0,0,0,2097,2099,1,0,0,0,2098,2089,1,
	0,0,0,2098,2090,1,0,0,0,2099,263,1,0,0,0,2100,2102,5,291,0,0,2101,2103,
	5,278,0,0,2102,2101,1,0,0,0,2102,2103,1,0,0,0,2103,2104,1,0,0,0,2104,2105,
	3,328,164,0,2105,265,1,0,0,0,2106,2107,5,297,0,0,2107,2108,3,382,191,0,
	2108,267,1,0,0,0,2109,2111,5,300,0,0,2110,2112,5,360,0,0,2111,2110,1,0,
	0,0,2111,2112,1,0,0,0,2112,2113,1,0,0,0,2113,2118,3,382,191,0,2114,2115,
	5,341,0,0,2115,2117,3,382,191,0,2116,2114,1,0,0,0,2117,2120,1,0,0,0,2118,
	2116,1,0,0,0,2118,2119,1,0,0,0,2119,2122,1,0,0,0,2120,2118,1,0,0,0,2121,
	2123,5,363,0,0,2122,2121,1,0,0,0,2122,2123,1,0,0,0,2123,2124,1,0,0,0,2124,
	2126,5,146,0,0,2125,2127,5,360,0,0,2126,2125,1,0,0,0,2126,2127,1,0,0,0,
	2127,2128,1,0,0,0,2128,2133,3,438,219,0,2129,2130,5,341,0,0,2130,2132,3,
	438,219,0,2131,2129,1,0,0,0,2132,2135,1,0,0,0,2133,2131,1,0,0,0,2133,2134,
	1,0,0,0,2134,2137,1,0,0,0,2135,2133,1,0,0,0,2136,2138,5,363,0,0,2137,2136,
	1,0,0,0,2137,2138,1,0,0,0,2138,269,1,0,0,0,2139,2140,5,308,0,0,2140,2141,
	3,366,183,0,2141,2142,7,32,0,0,2142,2143,3,2,1,0,2143,2145,5,93,0,0,2144,
	2146,7,33,0,0,2145,2144,1,0,0,0,2145,2146,1,0,0,0,2146,271,1,0,0,0,2147,
	2148,5,110,0,0,2148,2149,5,367,0,0,2149,2151,5,132,0,0,2150,2152,5,360,
	0,0,2151,2150,1,0,0,0,2151,2152,1,0,0,0,2152,2153,1,0,0,0,2153,2155,3,280,
	140,0,2154,2156,5,363,0,0,2155,2154,1,0,0,0,2155,2156,1,0,0,0,2156,2157,
	1,0,0,0,2157,2158,5,169,0,0,2158,2159,3,2,1,0,2159,2160,5,93,0,0,2160,2161,
	5,169,0,0,2161,273,1,0,0,0,2162,2163,5,110,0,0,2163,2164,5,367,0,0,2164,
	2166,5,132,0,0,2165,2167,5,231,0,0,2166,2165,1,0,0,0,2166,2167,1,0,0,0,
	2167,2168,1,0,0,0,2168,2169,3,382,191,0,2169,2170,5,345,0,0,2170,2173,3,
	382,191,0,2171,2172,7,34,0,0,2172,2174,3,382,191,0,2173,2171,1,0,0,0,2173,
	2174,1,0,0,0,2174,2175,1,0,0,0,2175,2176,5,169,0,0,2176,2177,3,2,1,0,2177,
	2178,5,93,0,0,2178,2179,5,169,0,0,2179,275,1,0,0,0,2180,2187,5,376,0,0,
	2181,2182,5,354,0,0,2182,2183,5,354,0,0,2183,2184,5,367,0,0,2184,2185,5,
	352,0,0,2185,2187,5,352,0,0,2186,2180,1,0,0,0,2186,2181,1,0,0,0,2187,277,
	1,0,0,0,2188,2189,5,298,0,0,2189,2194,3,382,191,0,2190,2191,5,341,0,0,2191,
	2193,3,382,191,0,2192,2190,1,0,0,0,2193,2196,1,0,0,0,2194,2192,1,0,0,0,
	2194,2195,1,0,0,0,2195,279,1,0,0,0,2196,2194,1,0,0,0,2197,2199,3,282,141,
	0,2198,2197,1,0,0,0,2198,2199,1,0,0,0,2199,2200,1,0,0,0,2200,2201,3,288,
	144,0,2201,281,1,0,0,0,2202,2203,5,309,0,0,2203,2208,3,284,142,0,2204,2205,
	5,341,0,0,2205,2207,3,284,142,0,2206,2204,1,0,0,0,2207,2210,1,0,0,0,2208,
	2206,1,0,0,0,2208,2209,1,0,0,0,2209,283,1,0,0,0,2210,2208,1,0,0,0,2211,
	2213,3,438,219,0,2212,2214,3,286,143,0,2213,2212,1,0,0,0,2213,2214,1,0,
	0,0,2214,2215,1,0,0,0,2215,2216,5,9,0,0,2216,2217,5,360,0,0,2217,2218,3,
	288,144,0,2218,2219,5,363,0,0,2219,285,1,0,0,0,2220,2221,5,360,0,0,2221,
	2226,3,438,219,0,2222,2223,5,341,0,0,2223,2225,3,438,219,0,2224,2222,1,
	0,0,0,2225,2228,1,0,0,0,2226,2224,1,0,0,0,2226,2227,1,0,0,0,2227,2229,1,
	0,0,0,2228,2226,1,0,0,0,2229,2230,5,363,0,0,2230,287,1,0,0,0,2231,2237,
	3,290,145,0,2232,2233,3,292,146,0,2233,2234,3,290,145,0,2234,2236,1,0,0,
	0,2235,2232,1,0,0,0,2236,2239,1,0,0,0,2237,2235,1,0,0,0,2237,2238,1,0,0,
	0,2238,289,1,0,0,0,2239,2237,1,0,0,0,2240,2246,3,294,147,0,2241,2242,5,
	360,0,0,2242,2243,3,288,144,0,2243,2244,5,363,0,0,2244,2246,1,0,0,0,2245,
	2240,1,0,0,0,2245,2241,1,0,0,0,2246,291,1,0,0,0,2247,2249,5,293,0,0,2248,
	2250,5,3,0,0,2249,2248,1,0,0,0,2249,2250,1,0,0,0,2250,2260,1,0,0,0,2251,
	2253,5,96,0,0,2252,2254,5,3,0,0,2253,2252,1,0,0,0,2253,2254,1,0,0,0,2254,
	2260,1,0,0,0,2255,2257,5,144,0,0,2256,2258,5,3,0,0,2257,2256,1,0,0,0,2257,
	2258,1,0,0,0,2258,2260,1,0,0,0,2259,2247,1,0,0,0,2259,2251,1,0,0,0,2259,
	2255,1,0,0,0,2260,293,1,0,0,0,2261,2262,7,35,0,0,2262,2264,3,296,148,0,
	2263,2265,3,308,154,0,2264,2263,1,0,0,0,2264,2265,1,0,0,0,2265,2267,1,0,
	0,0,2266,2268,3,310,155,0,2267,2266,1,0,0,0,2267,2268,1,0,0,0,2268,2270,
	1,0,0,0,2269,2271,3,330,165,0,2270,2269,1,0,0,0,2270,2271,1,0,0,0,2271,
	2273,1,0,0,0,2272,2274,3,332,166,0,2273,2272,1,0,0,0,2273,2274,1,0,0,0,
	2274,2277,1,0,0,0,2275,2278,3,334,167,0,2276,2278,3,336,168,0,2277,2275,
	1,0,0,0,2277,2276,1,0,0,0,2277,2278,1,0,0,0,2278,2280,1,0,0,0,2279,2281,
	3,338,169,0,2280,2279,1,0,0,0,2280,2281,1,0,0,0,2281,2283,1,0,0,0,2282,
	2284,3,340,170,0,2283,2282,1,0,0,0,2283,2284,1,0,0,0,2284,295,1,0,0,0,2285,
	2287,3,298,149,0,2286,2285,1,0,0,0,2286,2287,1,0,0,0,2287,2289,1,0,0,0,
	2288,2290,3,300,150,0,2289,2288,1,0,0,0,2289,2290,1,0,0,0,2290,2291,1,0,
	0,0,2291,2296,3,302,151,0,2292,2293,5,341,0,0,2293,2295,3,302,151,0,2294,
	2292,1,0,0,0,2295,2298,1,0,0,0,2296,2294,1,0,0,0,2296,2297,1,0,0,0,2297,
	297,1,0,0,0,2298,2296,1,0,0,0,2299,2300,7,36,0,0,2300,299,1,0,0,0,2301,
	2302,5,288,0,0,2302,2303,3,382,191,0,2303,301,1,0,0,0,2304,2305,3,438,219,
	0,2305,2306,5,346,0,0,2306,2308,1,0,0,0,2307,2304,1,0,0,0,2307,2308,1,0,
	0,0,2308,2309,1,0,0,0,2309,2311,3,382,191,0,2310,2312,3,304,152,0,2311,
	2310,1,0,0,0,2311,2312,1,0,0,0,2312,2315,1,0,0,0,2313,2315,3,306,153,0,
	2314,2307,1,0,0,0,2314,2313,1,0,0,0,2315,303,1,0,0,0,2316,2318,4,152,3,
	0,2317,2319,5,9,0,0,2318,2317,1,0,0,0,2318,2319,1,0,0,0,2319,2320,1,0,0,
	0,2320,2326,3,438,219,0,2321,2322,5,360,0,0,2322,2323,5,286,0,0,2323,2324,
	5,368,0,0,2324,2326,5,363,0,0,2325,2316,1,0,0,0,2325,2321,1,0,0,0,2326,
	305,1,0,0,0,2327,2328,5,367,0,0,2328,2330,5,344,0,0,2329,2327,1,0,0,0,2329,
	2330,1,0,0,0,2330,2331,1,0,0,0,2331,2332,5,356,0,0,2332,307,1,0,0,0,2333,
	2334,5,146,0,0,2334,2339,3,438,219,0,2335,2336,5,341,0,0,2336,2338,3,438,
	219,0,2337,2335,1,0,0,0,2338,2341,1,0,0,0,2339,2337,1,0,0,0,2339,2340,1,
	0,0,0,2340,309,1,0,0,0,2341,2339,1,0,0,0,2342,2343,5,114,0,0,2343,2347,
	3,312,156,0,2344,2346,3,318,159,0,2345,2344,1,0,0,0,2346,2349,1,0,0,0,2347,
	2345,1,0,0,0,2347,2348,1,0,0,0,2348,311,1,0,0,0,2349,2347,1,0,0,0,2350,
	2354,3,314,157,0,2351,2354,3,316,158,0,2352,2354,3,322,161,0,2353,2350,
	1,0,0,0,2353,2351,1,0,0,0,2353,2352,1,0,0,0,2354,313,1,0,0,0,2355,2357,
	3,328,164,0,2356,2358,3,326,163,0,2357,2356,1,0,0,0,2357,2358,1,0,0,0,2358,
	315,1,0,0,0,2359,2360,5,360,0,0,2360,2361,3,280,140,0,2361,2363,5,363,0,
	0,2362,2364,3,326,163,0,2363,2362,1,0,0,0,2363,2364,1,0,0,0,2364,317,1,
	0,0,0,2365,2366,5,341,0,0,2366,2373,3,312,156,0,2367,2368,3,320,160,0,2368,
	2369,3,312,156,0,2369,2370,5,195,0,0,2370,2371,3,366,183,0,2371,2373,1,
	0,0,0,2372,2365,1,0,0,0,2372,2367,1,0,0,0,2373,319,1,0,0,0,2374,2376,5,
	136,0,0,2375,2374,1,0,0,0,2375,2376,1,0,0,0,2376,2377,1,0,0,0,2377,2384,
	5,151,0,0,2378,2380,7,37,0,0,2379,2381,5,201,0,0,2380,2379,1,0,0,0,2380,
	2381,1,0,0,0,2381,2382,1,0,0,0,2382,2384,5,151,0,0,2383,2375,1,0,0,0,2383,
	2378,1,0,0,0,2384,321,1,0,0,0,2385,2386,5,278,0,0,2386,2387,5,360,0,0,2387,
	2388,5,300,0,0,2388,2393,3,324,162,0,2389,2390,5,341,0,0,2390,2392,3,324,
	162,0,2391,2389,1,0,0,0,2392,2395,1,0,0,0,2393,2391,1,0,0,0,2393,2394,1,
	0,0,0,2394,2396,1,0,0,0,2395,2393,1,0,0,0,2396,2398,5,363,0,0,2397,2399,
	3,326,163,0,2398,2397,1,0,0,0,2398,2399,1,0,0,0,2399,323,1,0,0,0,2400,2413,
	3,382,191,0,2401,2402,5,360,0,0,2402,2407,3,382,191,0,2403,2404,5,341,0,
	0,2404,2406,3,382,191,0,2405,2403,1,0,0,0,2406,2409,1,0,0,0,2407,2405,1,
	0,0,0,2407,2408,1,0,0,0,2408,2410,1,0,0,0,2409,2407,1,0,0,0,2410,2411,5,
	363,0,0,2411,2413,1,0,0,0,2412,2400,1,0,0,0,2412,2401,1,0,0,0,2413,325,
	1,0,0,0,2414,2416,4,163,4,0,2415,2417,5,9,0,0,2416,2415,1,0,0,0,2416,2417,
	1,0,0,0,2417,2418,1,0,0,0,2418,2429,3,438,219,0,2419,2420,5,360,0,0,2420,
	2425,5,367,0,0,2421,2422,5,341,0,0,2422,2424,5,367,0,0,2423,2421,1,0,0,
	0,2424,2427,1,0,0,0,2425,2423,1,0,0,0,2425,2426,1,0,0,0,2426,2428,1,0,0,
	0,2427,2425,1,0,0,0,2428,2430,5,363,0,0,2429,2419,1,0,0,0,2429,2430,1,0,
	0,0,2430,327,1,0,0,0,2431,2432,3,438,219,0,2432,329,1,0,0,0,2433,2434,5,
	307,0,0,2434,2435,3,366,183,0,2435,331,1,0,0,0,2436,2437,5,121,0,0,2437,
	2438,5,25,0,0,2438,2443,3,382,191,0,2439,2440,5,341,0,0,2440,2442,3,382,
	191,0,2441,2439,1,0,0,0,2442,2445,1,0,0,0,2443,2441,1,0,0,0,2443,2444,1,
	0,0,0,2444,333,1,0,0,0,2445,2443,1,0,0,0,2446,2447,5,124,0,0,2447,2448,
	3,366,183,0,2448,335,1,0,0,0,2449,2450,5,216,0,0,2450,2451,3,366,183,0,
	2451,337,1,0,0,0,2452,2453,5,199,0,0,2453,2454,5,25,0,0,2454,2456,3,382,
	191,0,2455,2457,7,7,0,0,2456,2455,1,0,0,0,2456,2457,1,0,0,0,2457,2465,1,
	0,0,0,2458,2459,5,341,0,0,2459,2461,3,382,191,0,2460,2462,7,7,0,0,2461,
	2460,1,0,0,0,2461,2462,1,0,0,0,2462,2464,1,0,0,0,2463,2458,1,0,0,0,2464,
	2467,1,0,0,0,2465,2463,1,0,0,0,2465,2466,1,0,0,0,2466,339,1,0,0,0,2467,
	2465,1,0,0,0,2468,2470,3,342,171,0,2469,2468,1,0,0,0,2470,2471,1,0,0,0,
	2471,2469,1,0,0,0,2471,2472,1,0,0,0,2472,341,1,0,0,0,2473,2474,5,159,0,
	0,2474,2485,3,382,191,0,2475,2476,5,309,0,0,2476,2482,7,38,0,0,2477,2478,
	5,297,0,0,2478,2479,5,6,0,0,2479,2480,5,152,0,0,2480,2481,7,39,0,0,2481,
	2483,5,165,0,0,2482,2477,1,0,0,0,2482,2483,1,0,0,0,2483,2485,1,0,0,0,2484,
	2473,1,0,0,0,2484,2475,1,0,0,0,2485,343,1,0,0,0,2486,2487,5,295,0,0,2487,
	2488,3,348,174,0,2488,2489,5,251,0,0,2489,2491,3,346,173,0,2490,2492,3,
	330,165,0,2491,2490,1,0,0,0,2491,2492,1,0,0,0,2492,2494,1,0,0,0,2493,2495,
	3,350,175,0,2494,2493,1,0,0,0,2494,2495,1,0,0,0,2495,345,1,0,0,0,2496,2501,
	3,26,13,0,2497,2498,5,341,0,0,2498,2500,3,26,13,0,2499,2497,1,0,0,0,2500,
	2503,1,0,0,0,2501,2499,1,0,0,0,2501,2502,1,0,0,0,2502,347,1,0,0,0,2503,
	2501,1,0,0,0,2504,2506,3,328,164,0,2505,2507,3,310,155,0,2506,2505,1,0,
	0,0,2506,2507,1,0,0,0,2507,2513,1,0,0,0,2508,2509,5,360,0,0,2509,2510,3,
	280,140,0,2510,2511,5,363,0,0,2511,2513,1,0,0,0,2512,2504,1,0,0,0,2512,
	2508,1,0,0,0,2513,2518,1,0,0,0,2514,2516,5,9,0,0,2515,2514,1,0,0,0,2515,
	2516,1,0,0,0,2516,2517,1,0,0,0,2517,2519,3,438,219,0,2518,2515,1,0,0,0,
	2518,2519,1,0,0,0,2519,349,1,0,0,0,2520,2521,5,89,0,0,2521,2522,3,176,88,
	0,2522,351,1,0,0,0,2523,2524,5,174,0,0,2524,2525,5,146,0,0,2525,2526,3,
	354,177,0,2526,2527,5,298,0,0,2527,2528,3,354,177,0,2528,2529,5,195,0,0,
	2529,2531,3,366,183,0,2530,2532,3,356,178,0,2531,2530,1,0,0,0,2532,2533,
	1,0,0,0,2533,2531,1,0,0,0,2533,2534,1,0,0,0,2534,353,1,0,0,0,2535,2541,
	3,328,164,0,2536,2537,5,360,0,0,2537,2538,3,280,140,0,2538,2539,5,363,0,
	0,2539,2541,1,0,0,0,2540,2535,1,0,0,0,2540,2536,1,0,0,0,2541,2546,1,0,0,
	0,2542,2544,5,9,0,0,2543,2542,1,0,0,0,2543,2544,1,0,0,0,2544,2545,1,0,0,
	0,2545,2547,3,438,219,0,2546,2543,1,0,0,0,2546,2547,1,0,0,0,2547,355,1,
	0,0,0,2548,2550,5,306,0,0,2549,2551,5,188,0,0,2550,2549,1,0,0,0,2550,2551,
	1,0,0,0,2551,2552,1,0,0,0,2552,2555,5,171,0,0,2553,2554,5,6,0,0,2554,2556,
	3,366,183,0,2555,2553,1,0,0,0,2555,2556,1,0,0,0,2556,2557,1,0,0,0,2557,
	2558,5,283,0,0,2558,2562,3,358,179,0,2559,2560,5,89,0,0,2560,2562,5,130,
	0,0,2561,2548,1,0,0,0,2561,2559,1,0,0,0,2562,357,1,0,0,0,2563,2565,5,138,
	0,0,2564,2566,3,178,89,0,2565,2564,1,0,0,0,2565,2566,1,0,0,0,2566,2567,
	1,0,0,0,2567,2568,5,300,0,0,2568,2584,3,182,91,0,2569,2570,5,295,0,0,2570,
	2571,5,251,0,0,2571,2576,3,26,13,0,2572,2573,5,341,0,0,2573,2575,3,26,13,
	0,2574,2572,1,0,0,0,2575,2578,1,0,0,0,2576,2574,1,0,0,0,2576,2577,1,0,0,
	0,2577,2580,1,0,0,0,2578,2576,1,0,0,0,2579,2581,3,330,165,0,2580,2579,1,
	0,0,0,2580,2581,1,0,0,0,2581,2584,1,0,0,0,2582,2584,5,75,0,0,2583,2563,
	1,0,0,0,2583,2569,1,0,0,0,2583,2582,1,0,0,0,2584,359,1,0,0,0,2585,2587,
	5,75,0,0,2586,2588,5,114,0,0,2587,2586,1,0,0,0,2587,2588,1,0,0,0,2588,2589,
	1,0,0,0,2589,2591,3,328,164,0,2590,2592,3,362,181,0,2591,2590,1,0,0,0,2591,
	2592,1,0,0,0,2592,2595,1,0,0,0,2593,2596,3,330,165,0,2594,2596,5,3,0,0,
	2595,2593,1,0,0,0,2595,2594,1,0,0,0,2595,2596,1,0,0,0,2596,361,1,0,0,0,
	2597,2599,4,181,5,0,2598,2600,5,9,0,0,2599,2598,1,0,0,0,2599,2600,1,0,0,
	0,2600,2601,1,0,0,0,2601,2602,3,438,219,0,2602,363,1,0,0,0,2603,2605,7,
	40,0,0,2604,2606,5,278,0,0,2605,2604,1,0,0,0,2605,2606,1,0,0,0,2606,2607,
	1,0,0,0,2607,2608,3,328,164,0,2608,365,1,0,0,0,2609,2611,6,183,-1,0,2610,
	2612,5,188,0,0,2611,2610,1,0,0,0,2611,2612,1,0,0,0,2612,2613,1,0,0,0,2613,
	2614,5,360,0,0,2614,2615,3,366,183,0,2615,2616,5,363,0,0,2616,2619,1,0,
	0,0,2617,2619,3,368,184,0,2618,2609,1,0,0,0,2618,2617,1,0,0,0,2619,2626,
	1,0,0,0,2620,2621,10,2,0,0,2621,2622,3,378,189,0,2622,2623,3,366,183,3,
	2623,2625,1,0,0,0,2624,2620,1,0,0,0,2625,2628,1,0,0,0,2626,2624,1,0,0,0,
	2626,2627,1,0,0,0,2627,367,1,0,0,0,2628,2626,1,0,0,0,2629,2633,3,370,185,
	0,2630,2633,3,376,188,0,2631,2633,3,382,191,0,2632,2629,1,0,0,0,2632,2630,
	1,0,0,0,2632,2631,1,0,0,0,2633,369,1,0,0,0,2634,2635,3,382,191,0,2635,2637,
	5,148,0,0,2636,2638,5,188,0,0,2637,2636,1,0,0,0,2637,2638,1,0,0,0,2638,
	2639,1,0,0,0,2639,2640,5,190,0,0,2640,2658,1,0,0,0,2641,2642,3,382,191,
	0,2642,2643,5,17,0,0,2643,2644,3,382,191,0,2644,2645,5,6,0,0,2645,2646,
	3,382,191,0,2646,2658,1,0,0,0,2647,2649,5,188,0,0,2648,2647,1,0,0,0,2648,
	2649,1,0,0,0,2649,2650,1,0,0,0,2650,2651,5,101,0,0,2651,2652,5,360,0,0,
	2652,2653,3,280,140,0,2653,2654,5,363,0,0,2654,2658,1,0,0,0,2655,2658,3,
	372,186,0,2656,2658,3,374,187,0,2657,2634,1,0,0,0,2657,2641,1,0,0,0,2657,
	2648,1,0,0,0,2657,2655,1,0,0,0,2657,2656,1,0,0,0,2658,371,1,0,0,0,2659,
	2661,3,382,191,0,2660,2662,5,188,0,0,2661,2660,1,0,0,0,2661,2662,1,0,0,
	0,2662,2663,1,0,0,0,2663,2664,5,132,0,0,2664,2674,5,360,0,0,2665,2670,3,
	382,191,0,2666,2667,5,341,0,0,2667,2669,3,382,191,0,2668,2666,1,0,0,0,2669,
	2672,1,0,0,0,2670,2668,1,0,0,0,2670,2671,1,0,0,0,2671,2675,1,0,0,0,2672,
	2670,1,0,0,0,2673,2675,3,280,140,0,2674,2665,1,0,0,0,2674,2673,1,0,0,0,
	2675,2676,1,0,0,0,2676,2677,5,363,0,0,2677,373,1,0,0,0,2678,2679,5,360,
	0,0,2679,2684,3,382,191,0,2680,2681,5,341,0,0,2681,2683,3,382,191,0,2682,
	2680,1,0,0,0,2683,2686,1,0,0,0,2684,2682,1,0,0,0,2684,2685,1,0,0,0,2685,
	2687,1,0,0,0,2686,2684,1,0,0,0,2687,2689,5,363,0,0,2688,2690,5,188,0,0,
	2689,2688,1,0,0,0,2689,2690,1,0,0,0,2690,2691,1,0,0,0,2691,2692,5,132,0,
	0,2692,2693,5,360,0,0,2693,2694,3,280,140,0,2694,2695,5,363,0,0,2695,375,
	1,0,0,0,2696,2697,3,382,191,0,2697,2698,3,380,190,0,2698,2699,3,382,191,
	0,2699,377,1,0,0,0,2700,2701,7,41,0,0,2701,379,1,0,0,0,2702,2715,5,346,
	0,0,2703,2715,5,347,0,0,2704,2715,5,350,0,0,2705,2715,5,351,0,0,2706,2715,
	5,354,0,0,2707,2715,5,355,0,0,2708,2715,5,352,0,0,2709,2715,5,353,0,0,2710,
	2712,5,188,0,0,2711,2710,1,0,0,0,2711,2712,1,0,0,0,2712,2713,1,0,0,0,2713,
	2715,7,42,0,0,2714,2702,1,0,0,0,2714,2703,1,0,0,0,2714,2704,1,0,0,0,2714,
	2705,1,0,0,0,2714,2706,1,0,0,0,2714,2707,1,0,0,0,2714,2708,1,0,0,0,2714,
	2709,1,0,0,0,2714,2711,1,0,0,0,2715,381,1,0,0,0,2716,2717,6,191,-1,0,2717,
	2718,5,360,0,0,2718,2719,3,280,140,0,2719,2720,5,363,0,0,2720,2734,1,0,
	0,0,2721,2722,5,360,0,0,2722,2723,3,382,191,0,2723,2724,5,363,0,0,2724,
	2734,1,0,0,0,2725,2734,3,386,193,0,2726,2734,3,390,195,0,2727,2734,3,394,
	197,0,2728,2734,3,400,200,0,2729,2734,3,402,201,0,2730,2734,3,410,205,0,
	2731,2734,3,412,206,0,2732,2734,3,384,192,0,2733,2716,1,0,0,0,2733,2721,
	1,0,0,0,2733,2725,1,0,0,0,2733,2726,1,0,0,0,2733,2727,1,0,0,0,2733,2728,
	1,0,0,0,2733,2729,1,0,0,0,2733,2730,1,0,0,0,2733,2731,1,0,0,0,2733,2732,
	1,0,0,0,2734,2751,1,0,0,0,2735,2736,10,14,0,0,2736,2737,5,356,0,0,2737,
	2750,3,382,191,15,2738,2739,10,13,0,0,2739,2740,5,343,0,0,2740,2750,3,382,
	191,14,2741,2742,10,12,0,0,2742,2743,5,339,0,0,2743,2750,3,382,191,13,2744,
	2745,10,11,0,0,2745,2746,5,366,0,0,2746,2750,3,382,191,12,2747,2748,10,
	15,0,0,2748,2750,3,388,194,0,2749,2735,1,0,0,0,2749,2738,1,0,0,0,2749,2741,
	1,0,0,0,2749,2744,1,0,0,0,2749,2747,1,0,0,0,2750,2753,1,0,0,0,2751,2749,
	1,0,0,0,2751,2752,1,0,0,0,2752,383,1,0,0,0,2753,2751,1,0,0,0,2754,2763,
	3,434,217,0,2755,2763,3,436,218,0,2756,2763,3,446,223,0,2757,2763,3,438,
	219,0,2758,2763,3,440,220,0,2759,2763,3,444,222,0,2760,2763,3,442,221,0,
	2761,2763,3,448,224,0,2762,2754,1,0,0,0,2762,2755,1,0,0,0,2762,2756,1,0,
	0,0,2762,2757,1,0,0,0,2762,2758,1,0,0,0,2762,2759,1,0,0,0,2762,2760,1,0,
	0,0,2762,2761,1,0,0,0,2763,385,1,0,0,0,2764,2765,5,145,0,0,2765,2766,3,
	382,191,0,2766,2767,3,388,194,0,2767,387,1,0,0,0,2768,2769,7,43,0,0,2769,
	389,1,0,0,0,2770,2771,3,392,196,0,2771,2772,7,44,0,0,2772,2777,3,392,196,
	0,2773,2774,7,44,0,0,2774,2776,3,392,196,0,2775,2773,1,0,0,0,2776,2779,
	1,0,0,0,2777,2775,1,0,0,0,2777,2778,1,0,0,0,2778,391,1,0,0,0,2779,2777,
	1,0,0,0,2780,2781,5,360,0,0,2781,2782,3,382,191,0,2782,2783,5,363,0,0,2783,
	2790,1,0,0,0,2784,2790,3,394,197,0,2785,2790,3,402,201,0,2786,2790,3,410,
	205,0,2787,2790,3,412,206,0,2788,2790,3,384,192,0,2789,2780,1,0,0,0,2789,
	2784,1,0,0,0,2789,2785,1,0,0,0,2789,2786,1,0,0,0,2789,2787,1,0,0,0,2789,
	2788,1,0,0,0,2790,393,1,0,0,0,2791,2794,3,396,198,0,2792,2794,3,398,199,
	0,2793,2791,1,0,0,0,2793,2792,1,0,0,0,2794,395,1,0,0,0,2795,2796,5,30,0,
	0,2796,2802,3,382,191,0,2797,2798,5,306,0,0,2798,2799,3,382,191,0,2799,
	2800,5,283,0,0,2800,2801,3,382,191,0,2801,2803,1,0,0,0,2802,2797,1,0,0,
	0,2803,2804,1,0,0,0,2804,2802,1,0,0,0,2804,2805,1,0,0,0,2805,2808,1,0,0,
	0,2806,2807,5,89,0,0,2807,2809,3,382,191,0,2808,2806,1,0,0,0,2808,2809,
	1,0,0,0,2809,2810,1,0,0,0,2810,2811,5,93,0,0,2811,397,1,0,0,0,2812,2818,
	5,30,0,0,2813,2814,5,306,0,0,2814,2815,3,366,183,0,2815,2816,5,283,0,0,
	2816,2817,3,382,191,0,2817,2819,1,0,0,0,2818,2813,1,0,0,0,2819,2820,1,0,
	0,0,2820,2818,1,0,0,0,2820,2821,1,0,0,0,2821,2824,1,0,0,0,2822,2823,5,89,
	0,0,2823,2825,3,382,191,0,2824,2822,1,0,0,0,2824,2825,1,0,0,0,2825,2826,
	1,0,0,0,2826,2827,5,93,0,0,2827,399,1,0,0,0,2828,2829,3,438,219,0,2829,
	2830,5,357,0,0,2830,2831,7,45,0,0,2831,401,1,0,0,0,2832,2833,5,14,0,0,2833,
	2835,5,360,0,0,2834,2836,3,404,202,0,2835,2834,1,0,0,0,2835,2836,1,0,0,
	0,2836,2837,1,0,0,0,2837,2838,3,382,191,0,2838,2840,5,363,0,0,2839,2841,
	3,406,203,0,2840,2839,1,0,0,0,2840,2841,1,0,0,0,2841,2985,1,0,0,0,2842,
	2843,5,52,0,0,2843,2849,5,360,0,0,2844,2846,3,404,202,0,2845,2844,1,0,0,
	0,2845,2846,1,0,0,0,2846,2847,1,0,0,0,2847,2850,3,382,191,0,2848,2850,5,
	356,0,0,2849,2845,1,0,0,0,2849,2848,1,0,0,0,2850,2851,1,0,0,0,2851,2853,
	5,363,0,0,2852,2854,3,406,203,0,2853,2852,1,0,0,0,2853,2854,1,0,0,0,2854,
	2985,1,0,0,0,2855,2856,5,53,0,0,2856,2862,5,360,0,0,2857,2859,3,404,202,
	0,2858,2857,1,0,0,0,2858,2859,1,0,0,0,2859,2860,1,0,0,0,2860,2863,3,382,
	191,0,2861,2863,5,356,0,0,2862,2858,1,0,0,0,2862,2861,1,0,0,0,2863,2864,
	1,0,0,0,2864,2866,5,363,0,0,2865,2867,3,406,203,0,2866,2865,1,0,0,0,2866,
	2867,1,0,0,0,2867,2985,1,0,0,0,2868,2869,5,316,0,0,2869,2870,5,360,0,0,
	2870,2871,5,363,0,0,2871,2985,3,406,203,0,2872,2873,5,320,0,0,2873,2874,
	5,360,0,0,2874,2875,5,363,0,0,2875,2985,3,406,203,0,2876,2877,5,321,0,0,
	2877,2878,5,360,0,0,2878,2879,3,382,191,0,2879,2880,5,363,0,0,2880,2881,
	3,406,203,0,2881,2985,1,0,0,0,2882,2883,5,322,0,0,2883,2884,5,360,0,0,2884,
	2891,3,382,191,0,2885,2886,5,341,0,0,2886,2889,3,382,191,0,2887,2888,5,
	341,0,0,2888,2890,3,382,191,0,2889,2887,1,0,0,0,2889,2890,1,0,0,0,2890,
	2892,1,0,0,0,2891,2885,1,0,0,0,2891,2892,1,0,0,0,2892,2893,1,0,0,0,2893,
	2894,5,363,0,0,2894,2895,3,406,203,0,2895,2985,1,0,0,0,2896,2897,5,323,
	0,0,2897,2898,5,360,0,0,2898,2899,3,382,191,0,2899,2900,5,363,0,0,2900,
	2901,3,406,203,0,2901,2985,1,0,0,0,2902,2903,5,324,0,0,2903,2904,5,360,
	0,0,2904,2911,3,382,191,0,2905,2906,5,341,0,0,2906,2909,3,382,191,0,2907,
	2908,5,341,0,0,2908,2910,3,382,191,0,2909,2907,1,0,0,0,2909,2910,1,0,0,
	0,2910,2912,1,0,0,0,2911,2905,1,0,0,0,2911,2912,1,0,0,0,2912,2913,1,0,0,
	0,2913,2914,5,363,0,0,2914,2915,3,406,203,0,2915,2985,1,0,0,0,2916,2917,
	5,172,0,0,2917,2919,5,360,0,0,2918,2920,3,404,202,0,2919,2918,1,0,0,0,2919,
	2920,1,0,0,0,2920,2921,1,0,0,0,2921,2922,3,382,191,0,2922,2924,5,363,0,
	0,2923,2925,3,406,203,0,2924,2923,1,0,0,0,2924,2925,1,0,0,0,2925,2985,1,
	0,0,0,2926,2927,5,178,0,0,2927,2929,5,360,0,0,2928,2930,3,404,202,0,2929,
	2928,1,0,0,0,2929,2930,1,0,0,0,2930,2931,1,0,0,0,2931,2932,3,382,191,0,
	2932,2934,5,363,0,0,2933,2935,3,406,203,0,2934,2933,1,0,0,0,2934,2935,1,
	0,0,0,2935,2985,1,0,0,0,2936,2937,5,333,0,0,2937,2938,5,360,0,0,2938,2939,
	5,363,0,0,2939,2985,3,406,203,0,2940,2941,5,334,0,0,2941,2942,5,360,0,0,
	2942,2943,5,363,0,0,2943,2985,3,406,203,0,2944,2945,5,335,0,0,2945,2947,
	5,360,0,0,2946,2948,3,404,202,0,2947,2946,1,0,0,0,2947,2948,1,0,0,0,2948,
	2949,1,0,0,0,2949,2950,3,382,191,0,2950,2952,5,363,0,0,2951,2953,3,406,
	203,0,2952,2951,1,0,0,0,2952,2953,1,0,0,0,2953,2985,1,0,0,0,2954,2955,5,
	275,0,0,2955,2957,5,360,0,0,2956,2958,3,404,202,0,2957,2956,1,0,0,0,2957,
	2958,1,0,0,0,2958,2959,1,0,0,0,2959,2960,3,382,191,0,2960,2962,5,363,0,
	0,2961,2963,3,406,203,0,2962,2961,1,0,0,0,2962,2963,1,0,0,0,2963,2985,1,
	0,0,0,2964,2965,5,301,0,0,2965,2967,5,360,0,0,2966,2968,3,404,202,0,2967,
	2966,1,0,0,0,2967,2968,1,0,0,0,2968,2969,1,0,0,0,2969,2970,3,382,191,0,
	2970,2972,5,363,0,0,2971,2973,3,406,203,0,2972,2971,1,0,0,0,2972,2973,1,
	0,0,0,2973,2985,1,0,0,0,2974,2975,5,337,0,0,2975,2977,5,360,0,0,2976,2978,
	3,404,202,0,2977,2976,1,0,0,0,2977,2978,1,0,0,0,2978,2979,1,0,0,0,2979,
	2980,3,382,191,0,2980,2982,5,363,0,0,2981,2983,3,406,203,0,2982,2981,1,
	0,0,0,2982,2983,1,0,0,0,2983,2985,1,0,0,0,2984,2832,1,0,0,0,2984,2842,1,
	0,0,0,2984,2855,1,0,0,0,2984,2868,1,0,0,0,2984,2872,1,0,0,0,2984,2876,1,
	0,0,0,2984,2882,1,0,0,0,2984,2896,1,0,0,0,2984,2902,1,0,0,0,2984,2916,1,
	0,0,0,2984,2926,1,0,0,0,2984,2936,1,0,0,0,2984,2940,1,0,0,0,2984,2944,1,
	0,0,0,2984,2954,1,0,0,0,2984,2964,1,0,0,0,2984,2974,1,0,0,0,2985,403,1,
	0,0,0,2986,2987,7,36,0,0,2987,405,1,0,0,0,2988,2989,5,202,0,0,2989,2991,
	5,360,0,0,2990,2992,3,408,204,0,2991,2990,1,0,0,0,2991,2992,1,0,0,0,2992,
	2994,1,0,0,0,2993,2995,3,338,169,0,2994,2993,1,0,0,0,2994,2995,1,0,0,0,
	2995,2996,1,0,0,0,2996,2997,5,363,0,0,2997,407,1,0,0,0,2998,2999,5,206,
	0,0,2999,3000,5,25,0,0,3000,3005,3,382,191,0,3001,3002,5,341,0,0,3002,3004,
	3,382,191,0,3003,3001,1,0,0,0,3004,3007,1,0,0,0,3005,3003,1,0,0,0,3005,
	3006,1,0,0,0,3006,409,1,0,0,0,3007,3005,1,0,0,0,3008,3209,5,315,0,0,3009,
	3010,5,32,0,0,3010,3011,5,360,0,0,3011,3012,3,382,191,0,3012,3013,5,9,0,
	0,3013,3015,3,118,59,0,3014,3016,3,120,60,0,3015,3014,1,0,0,0,3015,3016,
	1,0,0,0,3016,3017,1,0,0,0,3017,3018,5,363,0,0,3018,3209,1,0,0,0,3019,3020,
	5,52,0,0,3020,3023,5,360,0,0,3021,3024,3,382,191,0,3022,3024,5,356,0,0,
	3023,3021,1,0,0,0,3023,3022,1,0,0,0,3024,3025,1,0,0,0,3025,3209,5,363,0,
	0,3026,3209,5,317,0,0,3027,3028,5,58,0,0,3028,3209,5,63,0,0,3029,3033,5,
	318,0,0,3030,3031,5,58,0,0,3031,3033,5,284,0,0,3032,3029,1,0,0,0,3032,3030,
	1,0,0,0,3033,3038,1,0,0,0,3034,3035,5,360,0,0,3035,3036,3,382,191,0,3036,
	3037,5,363,0,0,3037,3039,1,0,0,0,3038,3034,1,0,0,0,3038,3039,1,0,0,0,3039,
	3209,1,0,0,0,3040,3209,5,319,0,0,3041,3042,5,58,0,0,3042,3209,5,338,0,0,
	3043,3044,5,325,0,0,3044,3045,5,360,0,0,3045,3058,3,382,191,0,3046,3047,
	5,341,0,0,3047,3055,3,382,191,0,3048,3049,5,341,0,0,3049,3050,3,382,191,
	0,3050,3051,5,346,0,0,3051,3052,3,382,191,0,3052,3054,1,0,0,0,3053,3048,
	1,0,0,0,3054,3057,1,0,0,0,3055,3053,1,0,0,0,3055,3056,1,0,0,0,3056,3059,
	1,0,0,0,3057,3055,1,0,0,0,3058,3046,1,0,0,0,3058,3059,1,0,0,0,3059,3060,
	1,0,0,0,3060,3061,5,363,0,0,3061,3209,1,0,0,0,3062,3063,5,326,0,0,3063,
	3064,5,360,0,0,3064,3077,3,382,191,0,3065,3066,5,341,0,0,3066,3074,3,382,
	191,0,3067,3068,5,341,0,0,3068,3069,3,382,191,0,3069,3070,5,346,0,0,3070,
	3071,3,382,191,0,3071,3073,1,0,0,0,3072,3067,1,0,0,0,3073,3076,1,0,0,0,
	3074,3072,1,0,0,0,3074,3075,1,0,0,0,3075,3078,1,0,0,0,3076,3074,1,0,0,0,
	3077,3065,1,0,0,0,3077,3078,1,0,0,0,3078,3079,1,0,0,0,3079,3080,5,363,0,
	0,3080,3209,1,0,0,0,3081,3082,5,327,0,0,3082,3083,5,360,0,0,3083,3096,3,
	382,191,0,3084,3085,5,341,0,0,3085,3093,3,382,191,0,3086,3087,5,341,0,0,
	3087,3088,3,382,191,0,3088,3089,5,346,0,0,3089,3090,3,382,191,0,3090,3092,
	1,0,0,0,3091,3086,1,0,0,0,3092,3095,1,0,0,0,3093,3091,1,0,0,0,3093,3094,
	1,0,0,0,3094,3097,1,0,0,0,3095,3093,1,0,0,0,3096,3084,1,0,0,0,3096,3097,
	1,0,0,0,3097,3098,1,0,0,0,3098,3099,5,363,0,0,3099,3209,1,0,0,0,3100,3101,
	5,328,0,0,3101,3102,5,360,0,0,3102,3115,3,382,191,0,3103,3104,5,341,0,0,
	3104,3112,3,382,191,0,3105,3106,5,341,0,0,3106,3107,3,382,191,0,3107,3108,
	5,346,0,0,3108,3109,3,382,191,0,3109,3111,1,0,0,0,3110,3105,1,0,0,0,3111,
	3114,1,0,0,0,3112,3110,1,0,0,0,3112,3113,1,0,0,0,3113,3116,1,0,0,0,3114,
	3112,1,0,0,0,3115,3103,1,0,0,0,3115,3116,1,0,0,0,3116,3117,1,0,0,0,3117,
	3118,5,363,0,0,3118,3209,1,0,0,0,3119,3120,5,329,0,0,3120,3121,5,360,0,
	0,3121,3134,3,382,191,0,3122,3123,5,341,0,0,3123,3131,3,382,191,0,3124,
	3125,5,341,0,0,3125,3126,3,382,191,0,3126,3127,5,346,0,0,3127,3128,3,382,
	191,0,3128,3130,1,0,0,0,3129,3124,1,0,0,0,3130,3133,1,0,0,0,3131,3129,1,
	0,0,0,3131,3132,1,0,0,0,3132,3135,1,0,0,0,3133,3131,1,0,0,0,3134,3122,1,
	0,0,0,3134,3135,1,0,0,0,3135,3136,1,0,0,0,3136,3137,5,363,0,0,3137,3209,
	1,0,0,0,3138,3139,5,330,0,0,3139,3140,5,360,0,0,3140,3153,3,382,191,0,3141,
	3142,5,341,0,0,3142,3150,3,382,191,0,3143,3144,5,341,0,0,3144,3145,3,382,
	191,0,3145,3146,5,346,0,0,3146,3147,3,382,191,0,3147,3149,1,0,0,0,3148,
	3143,1,0,0,0,3149,3152,1,0,0,0,3150,3148,1,0,0,0,3150,3151,1,0,0,0,3151,
	3154,1,0,0,0,3152,3150,1,0,0,0,3153,3141,1,0,0,0,3153,3154,1,0,0,0,3154,
	3155,1,0,0,0,3155,3156,5,363,0,0,3156,3209,1,0,0,0,3157,3158,5,331,0,0,
	3158,3159,5,360,0,0,3159,3167,3,382,191,0,3160,3161,5,341,0,0,3161,3162,
	3,382,191,0,3162,3163,5,346,0,0,3163,3164,3,382,191,0,3164,3166,1,0,0,0,
	3165,3160,1,0,0,0,3166,3169,1,0,0,0,3167,3165,1,0,0,0,3167,3168,1,0,0,0,
	3168,3170,1,0,0,0,3169,3167,1,0,0,0,3170,3171,5,363,0,0,3171,3209,1,0,0,
	0,3172,3173,5,332,0,0,3173,3174,5,360,0,0,3174,3180,3,382,191,0,3175,3176,
	5,341,0,0,3176,3177,3,382,191,0,3177,3178,5,346,0,0,3178,3179,3,382,191,
	0,3179,3181,1,0,0,0,3180,3175,1,0,0,0,3181,3182,1,0,0,0,3182,3180,1,0,0,
	0,3182,3183,1,0,0,0,3183,3186,1,0,0,0,3184,3185,5,341,0,0,3185,3187,3,382,
	191,0,3186,3184,1,0,0,0,3186,3187,1,0,0,0,3187,3188,1,0,0,0,3188,3189,5,
	363,0,0,3189,3209,1,0,0,0,3190,3191,5,243,0,0,3191,3192,5,360,0,0,3192,
	3193,3,382,191,0,3193,3194,5,363,0,0,3194,3209,1,0,0,0,3195,3196,5,274,
	0,0,3196,3197,5,360,0,0,3197,3198,3,382,191,0,3198,3199,5,114,0,0,3199,
	3202,3,382,191,0,3200,3201,5,110,0,0,3201,3203,3,382,191,0,3202,3200,1,
	0,0,0,3202,3203,1,0,0,0,3203,3204,1,0,0,0,3204,3205,5,363,0,0,3205,3209,
	1,0,0,0,3206,3209,5,336,0,0,3207,3209,5,338,0,0,3208,3008,1,0,0,0,3208,
	3009,1,0,0,0,3208,3019,1,0,0,0,3208,3026,1,0,0,0,3208,3027,1,0,0,0,3208,
	3032,1,0,0,0,3208,3040,1,0,0,0,3208,3041,1,0,0,0,3208,3043,1,0,0,0,3208,
	3062,1,0,0,0,3208,3081,1,0,0,0,3208,3100,1,0,0,0,3208,3119,1,0,0,0,3208,
	3138,1,0,0,0,3208,3157,1,0,0,0,3208,3172,1,0,0,0,3208,3190,1,0,0,0,3208,
	3195,1,0,0,0,3208,3206,1,0,0,0,3208,3207,1,0,0,0,3209,411,1,0,0,0,3210,
	3211,3,438,219,0,3211,3213,5,360,0,0,3212,3214,3,414,207,0,3213,3212,1,
	0,0,0,3213,3214,1,0,0,0,3214,3215,1,0,0,0,3215,3216,5,363,0,0,3216,413,
	1,0,0,0,3217,3222,3,416,208,0,3218,3219,5,341,0,0,3219,3221,3,416,208,0,
	3220,3218,1,0,0,0,3221,3224,1,0,0,0,3222,3220,1,0,0,0,3222,3223,1,0,0,0,
	3223,415,1,0,0,0,3224,3222,1,0,0,0,3225,3231,4,208,12,0,3226,3227,3,438,
	219,0,3227,3229,5,346,0,0,3228,3230,5,352,0,0,3229,3228,1,0,0,0,3229,3230,
	1,0,0,0,3230,3232,1,0,0,0,3231,3226,1,0,0,0,3231,3232,1,0,0,0,3232,3233,
	1,0,0,0,3233,3234,3,382,191,0,3234,417,1,0,0,0,3235,3238,3,280,140,0,3236,
	3238,3,382,191,0,3237,3235,1,0,0,0,3237,3236,1,0,0,0,3238,419,1,0,0,0,3239,
	3242,3,432,216,0,3240,3242,3,382,191,0,3241,3239,1,0,0,0,3241,3240,1,0,
	0,0,3242,421,1,0,0,0,3243,3247,5,126,0,0,3244,3246,3,424,212,0,3245,3244,
	1,0,0,0,3246,3249,1,0,0,0,3247,3245,1,0,0,0,3247,3248,1,0,0,0,3248,423,
	1,0,0,0,3249,3247,1,0,0,0,3250,3251,5,366,0,0,3251,3252,3,438,219,0,3252,
	3253,3,382,191,0,3253,3263,1,0,0,0,3254,3255,5,366,0,0,3255,3256,3,438,
	219,0,3256,3257,5,367,0,0,3257,3258,5,346,0,0,3258,3259,3,382,191,0,3259,
	3263,1,0,0,0,3260,3261,5,366,0,0,3261,3263,3,438,219,0,3262,3250,1,0,0,
	0,3262,3254,1,0,0,0,3262,3260,1,0,0,0,3263,425,1,0,0,0,3264,3265,5,349,
	0,0,3265,3266,3,428,214,0,3266,3267,5,365,0,0,3267,3270,1,0,0,0,3268,3270,
	3,430,215,0,3269,3264,1,0,0,0,3269,3268,1,0,0,0,3270,427,1,0,0,0,3271,3273,
	9,0,0,0,3272,3271,1,0,0,0,3273,3276,1,0,0,0,3274,3275,1,0,0,0,3274,3272,
	1,0,0,0,3275,429,1,0,0,0,3276,3274,1,0,0,0,3277,3278,5,127,0,0,3278,3279,
	3,382,191,0,3279,431,1,0,0,0,3280,3295,5,375,0,0,3281,3285,5,343,0,0,3282,
	3283,5,344,0,0,3283,3285,5,343,0,0,3284,3281,1,0,0,0,3284,3282,1,0,0,0,
	3284,3285,1,0,0,0,3285,3286,1,0,0,0,3286,3291,3,438,219,0,3287,3288,5,343,
	0,0,3288,3290,3,438,219,0,3289,3287,1,0,0,0,3290,3293,1,0,0,0,3291,3289,
	1,0,0,0,3291,3292,1,0,0,0,3292,3295,1,0,0,0,3293,3291,1,0,0,0,3294,3280,
	1,0,0,0,3294,3284,1,0,0,0,3295,433,1,0,0,0,3296,3297,5,63,0,0,3297,3298,
	3,440,220,0,3298,435,1,0,0,0,3299,3300,5,284,0,0,3300,3301,3,440,220,0,
	3301,437,1,0,0,0,3302,3305,5,367,0,0,3303,3305,3,450,225,0,3304,3302,1,
	0,0,0,3304,3303,1,0,0,0,3305,3313,1,0,0,0,3306,3309,5,344,0,0,3307,3310,
	5,367,0,0,3308,3310,3,450,225,0,3309,3307,1,0,0,0,3309,3308,1,0,0,0,3310,
	3312,1,0,0,0,3311,3306,1,0,0,0,3312,3315,1,0,0,0,3313,3311,1,0,0,0,3313,
	3314,1,0,0,0,3314,439,1,0,0,0,3315,3313,1,0,0,0,3316,3319,5,368,0,0,3317,
	3319,5,369,0,0,3318,3316,1,0,0,0,3318,3317,1,0,0,0,3319,441,1,0,0,0,3320,
	3322,7,46,0,0,3321,3320,1,0,0,0,3321,3322,1,0,0,0,3322,3323,1,0,0,0,3323,
	3324,5,370,0,0,3324,443,1,0,0,0,3325,3327,7,46,0,0,3326,3325,1,0,0,0,3326,
	3327,1,0,0,0,3327,3328,1,0,0,0,3328,3329,5,371,0,0,3329,445,1,0,0,0,3330,
	3331,7,47,0,0,3331,447,1,0,0,0,3332,3333,5,190,0,0,3333,449,1,0,0,0,3334,
	3335,7,48,0,0,3335,451,1,0,0,0,423,457,460,464,467,472,479,485,487,496,
	499,501,564,572,588,595,598,603,607,616,621,629,634,643,655,660,663,677,
	684,693,710,714,722,733,743,751,758,762,766,771,775,780,784,788,798,802,
	807,812,816,829,834,840,849,853,861,864,869,874,881,888,891,898,904,909,
	915,920,923,929,943,953,959,964,969,974,978,983,986,996,1008,1015,1018,
	1030,1035,1040,1043,1050,1062,1075,1077,1082,1085,1100,1106,1117,1120,1130,
	1137,1143,1151,1161,1181,1187,1191,1196,1200,1205,1208,1213,1216,1228,1235,
	1240,1245,1249,1254,1257,1267,1279,1286,1294,1308,1339,1341,1346,1350,1355,
	1362,1365,1368,1373,1377,1379,1386,1392,1399,1405,1408,1413,1417,1420,1427,
	1433,1436,1446,1455,1462,1469,1471,1477,1480,1491,1500,1506,1512,1515,1520,
	1523,1526,1529,1532,1538,1548,1559,1562,1569,1574,1579,1583,1591,1595,1600,
	1604,1606,1611,1619,1624,1630,1637,1640,1647,1655,1663,1666,1669,1674,1683,
	1687,1697,1716,1723,1725,1729,1733,1741,1752,1761,1769,1777,1781,1789,1807,
	1821,1828,1832,1839,1841,1845,1854,1862,1871,1887,1893,1897,1907,1915,1924,
	1928,1934,1939,1943,1953,1959,1963,1975,1982,1998,2005,2015,2018,2022,2029,
	2036,2038,2042,2046,2051,2054,2058,2061,2072,2075,2086,2092,2096,2098,2102,
	2111,2118,2122,2126,2133,2137,2145,2151,2155,2166,2173,2186,2194,2198,2208,
	2213,2226,2237,2245,2249,2253,2257,2259,2264,2267,2270,2273,2277,2280,2283,
	2286,2289,2296,2307,2311,2314,2318,2325,2329,2339,2347,2353,2357,2363,2372,
	2375,2380,2383,2393,2398,2407,2412,2416,2425,2429,2443,2456,2461,2465,2471,
	2482,2484,2491,2494,2501,2506,2512,2515,2518,2533,2540,2543,2546,2550,2555,
	2561,2565,2576,2580,2583,2587,2591,2595,2599,2605,2611,2618,2626,2632,2637,
	2648,2657,2661,2670,2674,2684,2689,2711,2714,2733,2749,2751,2762,2777,2789,
	2793,2804,2808,2820,2824,2835,2840,2845,2849,2853,2858,2862,2866,2889,2891,
	2909,2911,2919,2924,2929,2934,2947,2952,2957,2962,2967,2972,2977,2982,2984,
	2991,2994,3005,3015,3023,3032,3038,3055,3058,3074,3077,3093,3096,3112,3115,
	3131,3134,3150,3153,3167,3182,3186,3202,3208,3213,3222,3229,3231,3237,3241,
	3247,3262,3269,3274,3284,3291,3294,3304,3309,3313,3318,3321,3326];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HiveSql.__ATN) {
			HiveSql.__ATN = new ATNDeserializer().deserialize(HiveSql._serializedATN);
		}

		return HiveSql.__ATN;
	}


	static DecisionsToDFA = HiveSql._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(HiveSql.EOF, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_program;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public begin_end_block_list(): Begin_end_blockContext[] {
		return this.getTypedRuleContexts(Begin_end_blockContext) as Begin_end_blockContext[];
	}
	public begin_end_block(i: number): Begin_end_blockContext {
		return this.getTypedRuleContext(Begin_end_blockContext, i) as Begin_end_blockContext;
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
	public T_GO_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_GO);
	}
	public T_GO(i: number): TerminalNode {
		return this.getToken(HiveSql.T_GO, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_block;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Begin_end_blockContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_BEGIN(): TerminalNode {
		return this.getToken(HiveSql.T_BEGIN, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public block_end(): Block_endContext {
		return this.getTypedRuleContext(Block_endContext, 0) as Block_endContext;
	}
	public declare_block(): Declare_blockContext {
		return this.getTypedRuleContext(Declare_blockContext, 0) as Declare_blockContext;
	}
	public exception_block(): Exception_blockContext {
		return this.getTypedRuleContext(Exception_blockContext, 0) as Exception_blockContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_begin_end_block;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterBegin_end_block) {
	 		listener.enterBegin_end_block(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitBegin_end_block) {
	 		listener.exitBegin_end_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitBegin_end_block) {
			return visitor.visitBegin_end_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Single_block_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_BEGIN(): TerminalNode {
		return this.getToken(HiveSql.T_BEGIN, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public block_end(): Block_endContext {
		return this.getTypedRuleContext(Block_endContext, 0) as Block_endContext;
	}
	public exception_block(): Exception_blockContext {
		return this.getTypedRuleContext(Exception_blockContext, 0) as Exception_blockContext;
	}
	public stmt(): StmtContext {
		return this.getTypedRuleContext(StmtContext, 0) as StmtContext;
	}
	public T_SEMICOLON(): TerminalNode {
		return this.getToken(HiveSql.T_SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_single_block_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSingle_block_stmt) {
	 		listener.enterSingle_block_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSingle_block_stmt) {
	 		listener.exitSingle_block_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSingle_block_stmt) {
			return visitor.visitSingle_block_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Block_endContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_END(): TerminalNode {
		return this.getToken(HiveSql.T_END, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_block_end;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterBlock_end) {
	 		listener.enterBlock_end(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitBlock_end) {
	 		listener.exitBlock_end(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitBlock_end) {
			return visitor.visitBlock_end(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Proc_blockContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public begin_end_block(): Begin_end_blockContext {
		return this.getTypedRuleContext(Begin_end_blockContext, 0) as Begin_end_blockContext;
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
	public T_GO(): TerminalNode {
		return this.getToken(HiveSql.T_GO, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_proc_block;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterProc_block) {
	 		listener.enterProc_block(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitProc_block) {
	 		listener.exitProc_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitProc_block) {
			return visitor.visitProc_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignment_stmt(): Assignment_stmtContext {
		return this.getTypedRuleContext(Assignment_stmtContext, 0) as Assignment_stmtContext;
	}
	public allocate_cursor_stmt(): Allocate_cursor_stmtContext {
		return this.getTypedRuleContext(Allocate_cursor_stmtContext, 0) as Allocate_cursor_stmtContext;
	}
	public alter_table_stmt(): Alter_table_stmtContext {
		return this.getTypedRuleContext(Alter_table_stmtContext, 0) as Alter_table_stmtContext;
	}
	public associate_locator_stmt(): Associate_locator_stmtContext {
		return this.getTypedRuleContext(Associate_locator_stmtContext, 0) as Associate_locator_stmtContext;
	}
	public begin_transaction_stmt(): Begin_transaction_stmtContext {
		return this.getTypedRuleContext(Begin_transaction_stmtContext, 0) as Begin_transaction_stmtContext;
	}
	public break_stmt(): Break_stmtContext {
		return this.getTypedRuleContext(Break_stmtContext, 0) as Break_stmtContext;
	}
	public call_stmt(): Call_stmtContext {
		return this.getTypedRuleContext(Call_stmtContext, 0) as Call_stmtContext;
	}
	public collect_stats_stmt(): Collect_stats_stmtContext {
		return this.getTypedRuleContext(Collect_stats_stmtContext, 0) as Collect_stats_stmtContext;
	}
	public close_stmt(): Close_stmtContext {
		return this.getTypedRuleContext(Close_stmtContext, 0) as Close_stmtContext;
	}
	public cmp_stmt(): Cmp_stmtContext {
		return this.getTypedRuleContext(Cmp_stmtContext, 0) as Cmp_stmtContext;
	}
	public copy_from_local_stmt(): Copy_from_local_stmtContext {
		return this.getTypedRuleContext(Copy_from_local_stmtContext, 0) as Copy_from_local_stmtContext;
	}
	public copy_stmt(): Copy_stmtContext {
		return this.getTypedRuleContext(Copy_stmtContext, 0) as Copy_stmtContext;
	}
	public commit_stmt(): Commit_stmtContext {
		return this.getTypedRuleContext(Commit_stmtContext, 0) as Commit_stmtContext;
	}
	public create_database_stmt(): Create_database_stmtContext {
		return this.getTypedRuleContext(Create_database_stmtContext, 0) as Create_database_stmtContext;
	}
	public create_function_stmt(): Create_function_stmtContext {
		return this.getTypedRuleContext(Create_function_stmtContext, 0) as Create_function_stmtContext;
	}
	public create_index_stmt(): Create_index_stmtContext {
		return this.getTypedRuleContext(Create_index_stmtContext, 0) as Create_index_stmtContext;
	}
	public create_local_temp_table_stmt(): Create_local_temp_table_stmtContext {
		return this.getTypedRuleContext(Create_local_temp_table_stmtContext, 0) as Create_local_temp_table_stmtContext;
	}
	public create_package_stmt(): Create_package_stmtContext {
		return this.getTypedRuleContext(Create_package_stmtContext, 0) as Create_package_stmtContext;
	}
	public create_package_body_stmt(): Create_package_body_stmtContext {
		return this.getTypedRuleContext(Create_package_body_stmtContext, 0) as Create_package_body_stmtContext;
	}
	public create_procedure_stmt(): Create_procedure_stmtContext {
		return this.getTypedRuleContext(Create_procedure_stmtContext, 0) as Create_procedure_stmtContext;
	}
	public create_table_stmt(): Create_table_stmtContext {
		return this.getTypedRuleContext(Create_table_stmtContext, 0) as Create_table_stmtContext;
	}
	public declare_stmt(): Declare_stmtContext {
		return this.getTypedRuleContext(Declare_stmtContext, 0) as Declare_stmtContext;
	}
	public delete_stmt(): Delete_stmtContext {
		return this.getTypedRuleContext(Delete_stmtContext, 0) as Delete_stmtContext;
	}
	public describe_stmt(): Describe_stmtContext {
		return this.getTypedRuleContext(Describe_stmtContext, 0) as Describe_stmtContext;
	}
	public drop_stmt(): Drop_stmtContext {
		return this.getTypedRuleContext(Drop_stmtContext, 0) as Drop_stmtContext;
	}
	public end_transaction_stmt(): End_transaction_stmtContext {
		return this.getTypedRuleContext(End_transaction_stmtContext, 0) as End_transaction_stmtContext;
	}
	public exec_stmt(): Exec_stmtContext {
		return this.getTypedRuleContext(Exec_stmtContext, 0) as Exec_stmtContext;
	}
	public exit_stmt(): Exit_stmtContext {
		return this.getTypedRuleContext(Exit_stmtContext, 0) as Exit_stmtContext;
	}
	public fetch_stmt(): Fetch_stmtContext {
		return this.getTypedRuleContext(Fetch_stmtContext, 0) as Fetch_stmtContext;
	}
	public for_cursor_stmt(): For_cursor_stmtContext {
		return this.getTypedRuleContext(For_cursor_stmtContext, 0) as For_cursor_stmtContext;
	}
	public for_range_stmt(): For_range_stmtContext {
		return this.getTypedRuleContext(For_range_stmtContext, 0) as For_range_stmtContext;
	}
	public if_stmt(): If_stmtContext {
		return this.getTypedRuleContext(If_stmtContext, 0) as If_stmtContext;
	}
	public include_stmt(): Include_stmtContext {
		return this.getTypedRuleContext(Include_stmtContext, 0) as Include_stmtContext;
	}
	public insert_stmt(): Insert_stmtContext {
		return this.getTypedRuleContext(Insert_stmtContext, 0) as Insert_stmtContext;
	}
	public insert_directory_stmt(): Insert_directory_stmtContext {
		return this.getTypedRuleContext(Insert_directory_stmtContext, 0) as Insert_directory_stmtContext;
	}
	public get_diag_stmt(): Get_diag_stmtContext {
		return this.getTypedRuleContext(Get_diag_stmtContext, 0) as Get_diag_stmtContext;
	}
	public grant_stmt(): Grant_stmtContext {
		return this.getTypedRuleContext(Grant_stmtContext, 0) as Grant_stmtContext;
	}
	public leave_stmt(): Leave_stmtContext {
		return this.getTypedRuleContext(Leave_stmtContext, 0) as Leave_stmtContext;
	}
	public map_object_stmt(): Map_object_stmtContext {
		return this.getTypedRuleContext(Map_object_stmtContext, 0) as Map_object_stmtContext;
	}
	public merge_stmt(): Merge_stmtContext {
		return this.getTypedRuleContext(Merge_stmtContext, 0) as Merge_stmtContext;
	}
	public open_stmt(): Open_stmtContext {
		return this.getTypedRuleContext(Open_stmtContext, 0) as Open_stmtContext;
	}
	public print_stmt(): Print_stmtContext {
		return this.getTypedRuleContext(Print_stmtContext, 0) as Print_stmtContext;
	}
	public quit_stmt(): Quit_stmtContext {
		return this.getTypedRuleContext(Quit_stmtContext, 0) as Quit_stmtContext;
	}
	public raise_stmt(): Raise_stmtContext {
		return this.getTypedRuleContext(Raise_stmtContext, 0) as Raise_stmtContext;
	}
	public resignal_stmt(): Resignal_stmtContext {
		return this.getTypedRuleContext(Resignal_stmtContext, 0) as Resignal_stmtContext;
	}
	public return_stmt(): Return_stmtContext {
		return this.getTypedRuleContext(Return_stmtContext, 0) as Return_stmtContext;
	}
	public rollback_stmt(): Rollback_stmtContext {
		return this.getTypedRuleContext(Rollback_stmtContext, 0) as Rollback_stmtContext;
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public signal_stmt(): Signal_stmtContext {
		return this.getTypedRuleContext(Signal_stmtContext, 0) as Signal_stmtContext;
	}
	public summary_stmt(): Summary_stmtContext {
		return this.getTypedRuleContext(Summary_stmtContext, 0) as Summary_stmtContext;
	}
	public update_stmt(): Update_stmtContext {
		return this.getTypedRuleContext(Update_stmtContext, 0) as Update_stmtContext;
	}
	public use_stmt(): Use_stmtContext {
		return this.getTypedRuleContext(Use_stmtContext, 0) as Use_stmtContext;
	}
	public truncate_stmt(): Truncate_stmtContext {
		return this.getTypedRuleContext(Truncate_stmtContext, 0) as Truncate_stmtContext;
	}
	public values_into_stmt(): Values_into_stmtContext {
		return this.getTypedRuleContext(Values_into_stmtContext, 0) as Values_into_stmtContext;
	}
	public while_stmt(): While_stmtContext {
		return this.getTypedRuleContext(While_stmtContext, 0) as While_stmtContext;
	}
	public label(): LabelContext {
		return this.getTypedRuleContext(LabelContext, 0) as LabelContext;
	}
	public hive(): HiveContext {
		return this.getTypedRuleContext(HiveContext, 0) as HiveContext;
	}
	public host(): HostContext {
		return this.getTypedRuleContext(HostContext, 0) as HostContext;
	}
	public null_stmt(): Null_stmtContext {
		return this.getTypedRuleContext(Null_stmtContext, 0) as Null_stmtContext;
	}
	public expr_stmt(): Expr_stmtContext {
		return this.getTypedRuleContext(Expr_stmtContext, 0) as Expr_stmtContext;
	}
	public semicolon_stmt(): Semicolon_stmtContext {
		return this.getTypedRuleContext(Semicolon_stmtContext, 0) as Semicolon_stmtContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterStmt) {
	 		listener.enterStmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitStmt) {
	 		listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Semicolon_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_SEMICOLON(): TerminalNode {
		return this.getToken(HiveSql.T_SEMICOLON, 0);
	}
	public T_CALLS(): TerminalNode {
		return this.getToken(HiveSql.T_CALLS, 0);
	}
	public T_SHARP(): TerminalNode {
		return this.getToken(HiveSql.T_SHARP, 0);
	}
	public T_DIV(): TerminalNode {
		return this.getToken(HiveSql.T_DIV, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_semicolon_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSemicolon_stmt) {
	 		listener.enterSemicolon_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSemicolon_stmt) {
	 		listener.exitSemicolon_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSemicolon_stmt) {
			return visitor.visitSemicolon_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exception_blockContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_EXCEPTION(): TerminalNode {
		return this.getToken(HiveSql.T_EXCEPTION, 0);
	}
	public exception_block_item_list(): Exception_block_itemContext[] {
		return this.getTypedRuleContexts(Exception_block_itemContext) as Exception_block_itemContext[];
	}
	public exception_block_item(i: number): Exception_block_itemContext {
		return this.getTypedRuleContext(Exception_block_itemContext, i) as Exception_block_itemContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_exception_block;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterException_block) {
	 		listener.enterException_block(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitException_block) {
	 		listener.exitException_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitException_block) {
			return visitor.visitException_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exception_block_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_WHEN_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_WHEN);
	}
	public T_WHEN(i: number): TerminalNode {
		return this.getToken(HiveSql.T_WHEN, i);
	}
	public L_ID(): TerminalNode {
		return this.getToken(HiveSql.L_ID, 0);
	}
	public T_THEN(): TerminalNode {
		return this.getToken(HiveSql.T_THEN, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public T_END(): TerminalNode {
		return this.getToken(HiveSql.T_END, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_exception_block_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterException_block_item) {
	 		listener.enterException_block_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitException_block_item) {
	 		listener.exitException_block_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitException_block_item) {
			return visitor.visitException_block_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Null_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_NULL(): TerminalNode {
		return this.getToken(HiveSql.T_NULL, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_null_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterNull_stmt) {
	 		listener.enterNull_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitNull_stmt) {
	 		listener.exitNull_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitNull_stmt) {
			return visitor.visitNull_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_stmt) {
	 		listener.enterExpr_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_stmt) {
	 		listener.exitExpr_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_stmt) {
			return visitor.visitExpr_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_SET(): TerminalNode {
		return this.getToken(HiveSql.T_SET, 0);
	}
	public set_session_option(): Set_session_optionContext {
		return this.getTypedRuleContext(Set_session_optionContext, 0) as Set_session_optionContext;
	}
	public assignment_stmt_item_list(): Assignment_stmt_itemContext[] {
		return this.getTypedRuleContexts(Assignment_stmt_itemContext) as Assignment_stmt_itemContext[];
	}
	public assignment_stmt_item(i: number): Assignment_stmt_itemContext {
		return this.getTypedRuleContext(Assignment_stmt_itemContext, i) as Assignment_stmt_itemContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_assignment_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterAssignment_stmt) {
	 		listener.enterAssignment_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitAssignment_stmt) {
	 		listener.exitAssignment_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitAssignment_stmt) {
			return visitor.visitAssignment_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_stmt_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignment_stmt_single_item(): Assignment_stmt_single_itemContext {
		return this.getTypedRuleContext(Assignment_stmt_single_itemContext, 0) as Assignment_stmt_single_itemContext;
	}
	public assignment_stmt_multiple_item(): Assignment_stmt_multiple_itemContext {
		return this.getTypedRuleContext(Assignment_stmt_multiple_itemContext, 0) as Assignment_stmt_multiple_itemContext;
	}
	public assignment_stmt_select_item(): Assignment_stmt_select_itemContext {
		return this.getTypedRuleContext(Assignment_stmt_select_itemContext, 0) as Assignment_stmt_select_itemContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_assignment_stmt_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterAssignment_stmt_item) {
	 		listener.enterAssignment_stmt_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitAssignment_stmt_item) {
	 		listener.exitAssignment_stmt_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitAssignment_stmt_item) {
			return visitor.visitAssignment_stmt_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_stmt_single_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_EQUAL(): TerminalNode {
		return this.getToken(HiveSql.T_EQUAL, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public T_COLON(): TerminalNode {
		return this.getToken(HiveSql.T_COLON, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_assignment_stmt_single_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterAssignment_stmt_single_item) {
	 		listener.enterAssignment_stmt_single_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitAssignment_stmt_single_item) {
	 		listener.exitAssignment_stmt_single_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitAssignment_stmt_single_item) {
			return visitor.visitAssignment_stmt_single_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_stmt_multiple_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_OPEN_P_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_OPEN_P);
	}
	public T_OPEN_P(i: number): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, i);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public T_CLOSE_P_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_CLOSE_P);
	}
	public T_CLOSE_P(i: number): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, i);
	}
	public T_EQUAL(): TerminalNode {
		return this.getToken(HiveSql.T_EQUAL, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
	public T_COLON(): TerminalNode {
		return this.getToken(HiveSql.T_COLON, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_assignment_stmt_multiple_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterAssignment_stmt_multiple_item) {
	 		listener.enterAssignment_stmt_multiple_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitAssignment_stmt_multiple_item) {
	 		listener.exitAssignment_stmt_multiple_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitAssignment_stmt_multiple_item) {
			return visitor.visitAssignment_stmt_multiple_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_stmt_select_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_EQUAL(): TerminalNode {
		return this.getToken(HiveSql.T_EQUAL, 0);
	}
	public T_OPEN_P_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_OPEN_P);
	}
	public T_OPEN_P(i: number): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, i);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public T_CLOSE_P_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_CLOSE_P);
	}
	public T_CLOSE_P(i: number): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, i);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public T_COLON(): TerminalNode {
		return this.getToken(HiveSql.T_COLON, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_assignment_stmt_select_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterAssignment_stmt_select_item) {
	 		listener.enterAssignment_stmt_select_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitAssignment_stmt_select_item) {
	 		listener.exitAssignment_stmt_select_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitAssignment_stmt_select_item) {
			return visitor.visitAssignment_stmt_select_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Allocate_cursor_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_ALLOCATE(): TerminalNode {
		return this.getToken(HiveSql.T_ALLOCATE, 0);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public T_CURSOR(): TerminalNode {
		return this.getToken(HiveSql.T_CURSOR, 0);
	}
	public T_FOR(): TerminalNode {
		return this.getToken(HiveSql.T_FOR, 0);
	}
	public T_PROCEDURE(): TerminalNode {
		return this.getToken(HiveSql.T_PROCEDURE, 0);
	}
	public T_RESULT(): TerminalNode {
		return this.getToken(HiveSql.T_RESULT, 0);
	}
	public T_SET(): TerminalNode {
		return this.getToken(HiveSql.T_SET, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_allocate_cursor_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterAllocate_cursor_stmt) {
	 		listener.enterAllocate_cursor_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitAllocate_cursor_stmt) {
	 		listener.exitAllocate_cursor_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitAllocate_cursor_stmt) {
			return visitor.visitAllocate_cursor_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Associate_locator_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_ASSOCIATE(): TerminalNode {
		return this.getToken(HiveSql.T_ASSOCIATE, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public T_WITH(): TerminalNode {
		return this.getToken(HiveSql.T_WITH, 0);
	}
	public T_PROCEDURE(): TerminalNode {
		return this.getToken(HiveSql.T_PROCEDURE, 0);
	}
	public T_LOCATOR(): TerminalNode {
		return this.getToken(HiveSql.T_LOCATOR, 0);
	}
	public T_LOCATORS(): TerminalNode {
		return this.getToken(HiveSql.T_LOCATORS, 0);
	}
	public T_RESULT(): TerminalNode {
		return this.getToken(HiveSql.T_RESULT, 0);
	}
	public T_SET(): TerminalNode {
		return this.getToken(HiveSql.T_SET, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_associate_locator_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterAssociate_locator_stmt) {
	 		listener.enterAssociate_locator_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitAssociate_locator_stmt) {
	 		listener.exitAssociate_locator_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitAssociate_locator_stmt) {
			return visitor.visitAssociate_locator_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Begin_transaction_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_BEGIN(): TerminalNode {
		return this.getToken(HiveSql.T_BEGIN, 0);
	}
	public T_TRANSACTION(): TerminalNode {
		return this.getToken(HiveSql.T_TRANSACTION, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_begin_transaction_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterBegin_transaction_stmt) {
	 		listener.enterBegin_transaction_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitBegin_transaction_stmt) {
	 		listener.exitBegin_transaction_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitBegin_transaction_stmt) {
			return visitor.visitBegin_transaction_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Break_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_BREAK(): TerminalNode {
		return this.getToken(HiveSql.T_BREAK, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_break_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterBreak_stmt) {
	 		listener.enterBreak_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitBreak_stmt) {
	 		listener.exitBreak_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitBreak_stmt) {
			return visitor.visitBreak_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Call_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_CALL(): TerminalNode {
		return this.getToken(HiveSql.T_CALL, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public expr_func_params(): Expr_func_paramsContext {
		return this.getTypedRuleContext(Expr_func_paramsContext, 0) as Expr_func_paramsContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_call_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCall_stmt) {
	 		listener.enterCall_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCall_stmt) {
	 		listener.exitCall_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCall_stmt) {
			return visitor.visitCall_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declare_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_DECLARE(): TerminalNode {
		return this.getToken(HiveSql.T_DECLARE, 0);
	}
	public declare_stmt_item_list(): Declare_stmt_itemContext[] {
		return this.getTypedRuleContexts(Declare_stmt_itemContext) as Declare_stmt_itemContext[];
	}
	public declare_stmt_item(i: number): Declare_stmt_itemContext {
		return this.getTypedRuleContext(Declare_stmt_itemContext, i) as Declare_stmt_itemContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_declare_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDeclare_stmt) {
	 		listener.enterDeclare_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDeclare_stmt) {
	 		listener.exitDeclare_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDeclare_stmt) {
			return visitor.visitDeclare_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declare_blockContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_DECLARE(): TerminalNode {
		return this.getToken(HiveSql.T_DECLARE, 0);
	}
	public declare_stmt_item_list(): Declare_stmt_itemContext[] {
		return this.getTypedRuleContexts(Declare_stmt_itemContext) as Declare_stmt_itemContext[];
	}
	public declare_stmt_item(i: number): Declare_stmt_itemContext {
		return this.getTypedRuleContext(Declare_stmt_itemContext, i) as Declare_stmt_itemContext;
	}
	public T_SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_SEMICOLON);
	}
	public T_SEMICOLON(i: number): TerminalNode {
		return this.getToken(HiveSql.T_SEMICOLON, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_declare_block;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDeclare_block) {
	 		listener.enterDeclare_block(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDeclare_block) {
	 		listener.exitDeclare_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDeclare_block) {
			return visitor.visitDeclare_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declare_block_inplaceContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declare_stmt_item_list(): Declare_stmt_itemContext[] {
		return this.getTypedRuleContexts(Declare_stmt_itemContext) as Declare_stmt_itemContext[];
	}
	public declare_stmt_item(i: number): Declare_stmt_itemContext {
		return this.getTypedRuleContext(Declare_stmt_itemContext, i) as Declare_stmt_itemContext;
	}
	public T_SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_SEMICOLON);
	}
	public T_SEMICOLON(i: number): TerminalNode {
		return this.getToken(HiveSql.T_SEMICOLON, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_declare_block_inplace;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDeclare_block_inplace) {
	 		listener.enterDeclare_block_inplace(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDeclare_block_inplace) {
	 		listener.exitDeclare_block_inplace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDeclare_block_inplace) {
			return visitor.visitDeclare_block_inplace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declare_stmt_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declare_cursor_item(): Declare_cursor_itemContext {
		return this.getTypedRuleContext(Declare_cursor_itemContext, 0) as Declare_cursor_itemContext;
	}
	public declare_condition_item(): Declare_condition_itemContext {
		return this.getTypedRuleContext(Declare_condition_itemContext, 0) as Declare_condition_itemContext;
	}
	public declare_handler_item(): Declare_handler_itemContext {
		return this.getTypedRuleContext(Declare_handler_itemContext, 0) as Declare_handler_itemContext;
	}
	public declare_var_item(): Declare_var_itemContext {
		return this.getTypedRuleContext(Declare_var_itemContext, 0) as Declare_var_itemContext;
	}
	public declare_temporary_table_item(): Declare_temporary_table_itemContext {
		return this.getTypedRuleContext(Declare_temporary_table_itemContext, 0) as Declare_temporary_table_itemContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_declare_stmt_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDeclare_stmt_item) {
	 		listener.enterDeclare_stmt_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDeclare_stmt_item) {
	 		listener.exitDeclare_stmt_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDeclare_stmt_item) {
			return visitor.visitDeclare_stmt_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declare_var_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public dtype(): DtypeContext {
		return this.getTypedRuleContext(DtypeContext, 0) as DtypeContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
	public T_AS(): TerminalNode {
		return this.getToken(HiveSql.T_AS, 0);
	}
	public dtype_len(): Dtype_lenContext {
		return this.getTypedRuleContext(Dtype_lenContext, 0) as Dtype_lenContext;
	}
	public dtype_attr_list(): Dtype_attrContext[] {
		return this.getTypedRuleContexts(Dtype_attrContext) as Dtype_attrContext[];
	}
	public dtype_attr(i: number): Dtype_attrContext {
		return this.getTypedRuleContext(Dtype_attrContext, i) as Dtype_attrContext;
	}
	public dtype_default(): Dtype_defaultContext {
		return this.getTypedRuleContext(Dtype_defaultContext, 0) as Dtype_defaultContext;
	}
	public T_CONSTANT(): TerminalNode {
		return this.getToken(HiveSql.T_CONSTANT, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_declare_var_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDeclare_var_item) {
	 		listener.enterDeclare_var_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDeclare_var_item) {
	 		listener.exitDeclare_var_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDeclare_var_item) {
			return visitor.visitDeclare_var_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declare_condition_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_CONDITION(): TerminalNode {
		return this.getToken(HiveSql.T_CONDITION, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_declare_condition_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDeclare_condition_item) {
	 		listener.enterDeclare_condition_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDeclare_condition_item) {
	 		listener.exitDeclare_condition_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDeclare_condition_item) {
			return visitor.visitDeclare_condition_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declare_cursor_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_IS(): TerminalNode {
		return this.getToken(HiveSql.T_IS, 0);
	}
	public T_AS(): TerminalNode {
		return this.getToken(HiveSql.T_AS, 0);
	}
	public T_FOR(): TerminalNode {
		return this.getToken(HiveSql.T_FOR, 0);
	}
	public T_CURSOR(): TerminalNode {
		return this.getToken(HiveSql.T_CURSOR, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public cursor_with_return(): Cursor_with_returnContext {
		return this.getTypedRuleContext(Cursor_with_returnContext, 0) as Cursor_with_returnContext;
	}
	public cursor_without_return(): Cursor_without_returnContext {
		return this.getTypedRuleContext(Cursor_without_returnContext, 0) as Cursor_without_returnContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_declare_cursor_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDeclare_cursor_item) {
	 		listener.enterDeclare_cursor_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDeclare_cursor_item) {
	 		listener.exitDeclare_cursor_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDeclare_cursor_item) {
			return visitor.visitDeclare_cursor_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cursor_with_returnContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_WITH(): TerminalNode {
		return this.getToken(HiveSql.T_WITH, 0);
	}
	public T_RETURN(): TerminalNode {
		return this.getToken(HiveSql.T_RETURN, 0);
	}
	public T_ONLY(): TerminalNode {
		return this.getToken(HiveSql.T_ONLY, 0);
	}
	public T_TO(): TerminalNode {
		return this.getToken(HiveSql.T_TO, 0);
	}
	public T_CALLER(): TerminalNode {
		return this.getToken(HiveSql.T_CALLER, 0);
	}
	public T_CLIENT(): TerminalNode {
		return this.getToken(HiveSql.T_CLIENT, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_cursor_with_return;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCursor_with_return) {
	 		listener.enterCursor_with_return(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCursor_with_return) {
	 		listener.exitCursor_with_return(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCursor_with_return) {
			return visitor.visitCursor_with_return(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cursor_without_returnContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_WITHOUT(): TerminalNode {
		return this.getToken(HiveSql.T_WITHOUT, 0);
	}
	public T_RETURN(): TerminalNode {
		return this.getToken(HiveSql.T_RETURN, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_cursor_without_return;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCursor_without_return) {
	 		listener.enterCursor_without_return(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCursor_without_return) {
	 		listener.exitCursor_without_return(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCursor_without_return) {
			return visitor.visitCursor_without_return(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declare_handler_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_HANDLER(): TerminalNode {
		return this.getToken(HiveSql.T_HANDLER, 0);
	}
	public T_FOR(): TerminalNode {
		return this.getToken(HiveSql.T_FOR, 0);
	}
	public single_block_stmt(): Single_block_stmtContext {
		return this.getTypedRuleContext(Single_block_stmtContext, 0) as Single_block_stmtContext;
	}
	public T_CONTINUE(): TerminalNode {
		return this.getToken(HiveSql.T_CONTINUE, 0);
	}
	public T_EXIT(): TerminalNode {
		return this.getToken(HiveSql.T_EXIT, 0);
	}
	public T_SQLEXCEPTION(): TerminalNode {
		return this.getToken(HiveSql.T_SQLEXCEPTION, 0);
	}
	public T_SQLWARNING(): TerminalNode {
		return this.getToken(HiveSql.T_SQLWARNING, 0);
	}
	public T_NOT(): TerminalNode {
		return this.getToken(HiveSql.T_NOT, 0);
	}
	public T_FOUND(): TerminalNode {
		return this.getToken(HiveSql.T_FOUND, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_declare_handler_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDeclare_handler_item) {
	 		listener.enterDeclare_handler_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDeclare_handler_item) {
	 		listener.exitDeclare_handler_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDeclare_handler_item) {
			return visitor.visitDeclare_handler_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declare_temporary_table_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_TEMPORARY(): TerminalNode {
		return this.getToken(HiveSql.T_TEMPORARY, 0);
	}
	public T_TABLE(): TerminalNode {
		return this.getToken(HiveSql.T_TABLE, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public create_table_definition(): Create_table_definitionContext {
		return this.getTypedRuleContext(Create_table_definitionContext, 0) as Create_table_definitionContext;
	}
	public T_GLOBAL(): TerminalNode {
		return this.getToken(HiveSql.T_GLOBAL, 0);
	}
	public create_table_preoptions(): Create_table_preoptionsContext {
		return this.getTypedRuleContext(Create_table_preoptionsContext, 0) as Create_table_preoptionsContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_declare_temporary_table_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDeclare_temporary_table_item) {
	 		listener.enterDeclare_temporary_table_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDeclare_temporary_table_item) {
	 		listener.exitDeclare_temporary_table_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDeclare_temporary_table_item) {
			return visitor.visitDeclare_temporary_table_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_CREATE(): TerminalNode {
		return this.getToken(HiveSql.T_CREATE, 0);
	}
	public T_TABLE(): TerminalNode {
		return this.getToken(HiveSql.T_TABLE, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public create_table_definition(): Create_table_definitionContext {
		return this.getTypedRuleContext(Create_table_definitionContext, 0) as Create_table_definitionContext;
	}
	public T_IF(): TerminalNode {
		return this.getToken(HiveSql.T_IF, 0);
	}
	public T_NOT(): TerminalNode {
		return this.getToken(HiveSql.T_NOT, 0);
	}
	public T_EXISTS(): TerminalNode {
		return this.getToken(HiveSql.T_EXISTS, 0);
	}
	public create_table_preoptions(): Create_table_preoptionsContext {
		return this.getTypedRuleContext(Create_table_preoptionsContext, 0) as Create_table_preoptionsContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_stmt) {
	 		listener.enterCreate_table_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_stmt) {
	 		listener.exitCreate_table_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_stmt) {
			return visitor.visitCreate_table_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_local_temp_table_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_CREATE(): TerminalNode {
		return this.getToken(HiveSql.T_CREATE, 0);
	}
	public T_TABLE(): TerminalNode {
		return this.getToken(HiveSql.T_TABLE, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public create_table_definition(): Create_table_definitionContext {
		return this.getTypedRuleContext(Create_table_definitionContext, 0) as Create_table_definitionContext;
	}
	public T_LOCAL(): TerminalNode {
		return this.getToken(HiveSql.T_LOCAL, 0);
	}
	public T_TEMPORARY(): TerminalNode {
		return this.getToken(HiveSql.T_TEMPORARY, 0);
	}
	public T_VOLATILE(): TerminalNode {
		return this.getToken(HiveSql.T_VOLATILE, 0);
	}
	public create_table_preoptions(): Create_table_preoptionsContext {
		return this.getTypedRuleContext(Create_table_preoptionsContext, 0) as Create_table_preoptionsContext;
	}
	public T_SET(): TerminalNode {
		return this.getToken(HiveSql.T_SET, 0);
	}
	public T_MULTISET(): TerminalNode {
		return this.getToken(HiveSql.T_MULTISET, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_local_temp_table_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_local_temp_table_stmt) {
	 		listener.enterCreate_local_temp_table_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_local_temp_table_stmt) {
	 		listener.exitCreate_local_temp_table_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_local_temp_table_stmt) {
			return visitor.visitCreate_local_temp_table_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_definitionContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public create_table_columns(): Create_table_columnsContext {
		return this.getTypedRuleContext(Create_table_columnsContext, 0) as Create_table_columnsContext;
	}
	public create_table_options(): Create_table_optionsContext {
		return this.getTypedRuleContext(Create_table_optionsContext, 0) as Create_table_optionsContext;
	}
	public T_AS(): TerminalNode {
		return this.getToken(HiveSql.T_AS, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_definition;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_definition) {
	 		listener.enterCreate_table_definition(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_definition) {
	 		listener.exitCreate_table_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_definition) {
			return visitor.visitCreate_table_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_columnsContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public create_table_columns_item_list(): Create_table_columns_itemContext[] {
		return this.getTypedRuleContexts(Create_table_columns_itemContext) as Create_table_columns_itemContext[];
	}
	public create_table_columns_item(i: number): Create_table_columns_itemContext {
		return this.getTypedRuleContext(Create_table_columns_itemContext, i) as Create_table_columns_itemContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_columns;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_columns) {
	 		listener.enterCreate_table_columns(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_columns) {
	 		listener.exitCreate_table_columns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_columns) {
			return visitor.visitCreate_table_columns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_columns_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public column_name(): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, 0) as Column_nameContext;
	}
	public dtype(): DtypeContext {
		return this.getTypedRuleContext(DtypeContext, 0) as DtypeContext;
	}
	public dtype_len(): Dtype_lenContext {
		return this.getTypedRuleContext(Dtype_lenContext, 0) as Dtype_lenContext;
	}
	public dtype_attr_list(): Dtype_attrContext[] {
		return this.getTypedRuleContexts(Dtype_attrContext) as Dtype_attrContext[];
	}
	public dtype_attr(i: number): Dtype_attrContext {
		return this.getTypedRuleContext(Dtype_attrContext, i) as Dtype_attrContext;
	}
	public create_table_column_inline_cons_list(): Create_table_column_inline_consContext[] {
		return this.getTypedRuleContexts(Create_table_column_inline_consContext) as Create_table_column_inline_consContext[];
	}
	public create_table_column_inline_cons(i: number): Create_table_column_inline_consContext {
		return this.getTypedRuleContext(Create_table_column_inline_consContext, i) as Create_table_column_inline_consContext;
	}
	public create_table_column_cons(): Create_table_column_consContext {
		return this.getTypedRuleContext(Create_table_column_consContext, 0) as Create_table_column_consContext;
	}
	public T_CONSTRAINT(): TerminalNode {
		return this.getToken(HiveSql.T_CONSTRAINT, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_columns_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_columns_item) {
	 		listener.enterCreate_table_columns_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_columns_item) {
	 		listener.exitCreate_table_columns_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_columns_item) {
			return visitor.visitCreate_table_columns_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Column_nameContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_column_name;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterColumn_name) {
	 		listener.enterColumn_name(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitColumn_name) {
	 		listener.exitColumn_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitColumn_name) {
			return visitor.visitColumn_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_column_inline_consContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dtype_default(): Dtype_defaultContext {
		return this.getTypedRuleContext(Dtype_defaultContext, 0) as Dtype_defaultContext;
	}
	public T_NULL(): TerminalNode {
		return this.getToken(HiveSql.T_NULL, 0);
	}
	public T_NOT(): TerminalNode {
		return this.getToken(HiveSql.T_NOT, 0);
	}
	public T_PRIMARY(): TerminalNode {
		return this.getToken(HiveSql.T_PRIMARY, 0);
	}
	public T_KEY(): TerminalNode {
		return this.getToken(HiveSql.T_KEY, 0);
	}
	public T_UNIQUE(): TerminalNode {
		return this.getToken(HiveSql.T_UNIQUE, 0);
	}
	public T_REFERENCES(): TerminalNode {
		return this.getToken(HiveSql.T_REFERENCES, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public create_table_fk_action_list(): Create_table_fk_actionContext[] {
		return this.getTypedRuleContexts(Create_table_fk_actionContext) as Create_table_fk_actionContext[];
	}
	public create_table_fk_action(i: number): Create_table_fk_actionContext {
		return this.getTypedRuleContext(Create_table_fk_actionContext, i) as Create_table_fk_actionContext;
	}
	public T_IDENTITY(): TerminalNode {
		return this.getToken(HiveSql.T_IDENTITY, 0);
	}
	public L_INT_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.L_INT);
	}
	public L_INT(i: number): TerminalNode {
		return this.getToken(HiveSql.L_INT, i);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
	public T_AUTO_INCREMENT(): TerminalNode {
		return this.getToken(HiveSql.T_AUTO_INCREMENT, 0);
	}
	public T_ENABLE(): TerminalNode {
		return this.getToken(HiveSql.T_ENABLE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_column_inline_cons;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_column_inline_cons) {
	 		listener.enterCreate_table_column_inline_cons(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_column_inline_cons) {
	 		listener.exitCreate_table_column_inline_cons(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_column_inline_cons) {
			return visitor.visitCreate_table_column_inline_cons(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_column_consContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_PRIMARY(): TerminalNode {
		return this.getToken(HiveSql.T_PRIMARY, 0);
	}
	public T_KEY(): TerminalNode {
		return this.getToken(HiveSql.T_KEY, 0);
	}
	public T_OPEN_P_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_OPEN_P);
	}
	public T_OPEN_P(i: number): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, i);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public T_CLOSE_P_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_CLOSE_P);
	}
	public T_CLOSE_P(i: number): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, i);
	}
	public T_CLUSTERED(): TerminalNode {
		return this.getToken(HiveSql.T_CLUSTERED, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
	public T_ENABLE(): TerminalNode {
		return this.getToken(HiveSql.T_ENABLE, 0);
	}
	public index_storage_clause(): Index_storage_clauseContext {
		return this.getTypedRuleContext(Index_storage_clauseContext, 0) as Index_storage_clauseContext;
	}
	public T_ASC_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_ASC);
	}
	public T_ASC(i: number): TerminalNode {
		return this.getToken(HiveSql.T_ASC, i);
	}
	public T_DESC_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_DESC);
	}
	public T_DESC(i: number): TerminalNode {
		return this.getToken(HiveSql.T_DESC, i);
	}
	public T_FOREIGN(): TerminalNode {
		return this.getToken(HiveSql.T_FOREIGN, 0);
	}
	public T_REFERENCES(): TerminalNode {
		return this.getToken(HiveSql.T_REFERENCES, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public create_table_fk_action_list(): Create_table_fk_actionContext[] {
		return this.getTypedRuleContexts(Create_table_fk_actionContext) as Create_table_fk_actionContext[];
	}
	public create_table_fk_action(i: number): Create_table_fk_actionContext {
		return this.getTypedRuleContext(Create_table_fk_actionContext, i) as Create_table_fk_actionContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_column_cons;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_column_cons) {
	 		listener.enterCreate_table_column_cons(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_column_cons) {
	 		listener.exitCreate_table_column_cons(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_column_cons) {
			return visitor.visitCreate_table_column_cons(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_fk_actionContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_ON(): TerminalNode {
		return this.getToken(HiveSql.T_ON, 0);
	}
	public T_UPDATE(): TerminalNode {
		return this.getToken(HiveSql.T_UPDATE, 0);
	}
	public T_DELETE(): TerminalNode {
		return this.getToken(HiveSql.T_DELETE, 0);
	}
	public T_NO(): TerminalNode {
		return this.getToken(HiveSql.T_NO, 0);
	}
	public T_ACTION(): TerminalNode {
		return this.getToken(HiveSql.T_ACTION, 0);
	}
	public T_RESTRICT(): TerminalNode {
		return this.getToken(HiveSql.T_RESTRICT, 0);
	}
	public T_SET(): TerminalNode {
		return this.getToken(HiveSql.T_SET, 0);
	}
	public T_NULL(): TerminalNode {
		return this.getToken(HiveSql.T_NULL, 0);
	}
	public T_DEFAULT(): TerminalNode {
		return this.getToken(HiveSql.T_DEFAULT, 0);
	}
	public T_CASCADE(): TerminalNode {
		return this.getToken(HiveSql.T_CASCADE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_fk_action;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_fk_action) {
	 		listener.enterCreate_table_fk_action(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_fk_action) {
	 		listener.exitCreate_table_fk_action(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_fk_action) {
			return visitor.visitCreate_table_fk_action(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_preoptionsContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public create_table_preoptions_item_list(): Create_table_preoptions_itemContext[] {
		return this.getTypedRuleContexts(Create_table_preoptions_itemContext) as Create_table_preoptions_itemContext[];
	}
	public create_table_preoptions_item(i: number): Create_table_preoptions_itemContext {
		return this.getTypedRuleContext(Create_table_preoptions_itemContext, i) as Create_table_preoptions_itemContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_preoptions;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_preoptions) {
	 		listener.enterCreate_table_preoptions(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_preoptions) {
	 		listener.exitCreate_table_preoptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_preoptions) {
			return visitor.visitCreate_table_preoptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_preoptions_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_COMMA(): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, 0);
	}
	public create_table_preoptions_td_item(): Create_table_preoptions_td_itemContext {
		return this.getTypedRuleContext(Create_table_preoptions_td_itemContext, 0) as Create_table_preoptions_td_itemContext;
	}
	public create_table_options_hive_item(): Create_table_options_hive_itemContext {
		return this.getTypedRuleContext(Create_table_options_hive_itemContext, 0) as Create_table_options_hive_itemContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_preoptions_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_preoptions_item) {
	 		listener.enterCreate_table_preoptions_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_preoptions_item) {
	 		listener.exitCreate_table_preoptions_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_preoptions_item) {
			return visitor.visitCreate_table_preoptions_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_preoptions_td_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_LOG(): TerminalNode {
		return this.getToken(HiveSql.T_LOG, 0);
	}
	public T_FALLBACK(): TerminalNode {
		return this.getToken(HiveSql.T_FALLBACK, 0);
	}
	public T_NO(): TerminalNode {
		return this.getToken(HiveSql.T_NO, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_preoptions_td_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_preoptions_td_item) {
	 		listener.enterCreate_table_preoptions_td_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_preoptions_td_item) {
	 		listener.exitCreate_table_preoptions_td_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_preoptions_td_item) {
			return visitor.visitCreate_table_preoptions_td_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_optionsContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public create_table_options_item_list(): Create_table_options_itemContext[] {
		return this.getTypedRuleContexts(Create_table_options_itemContext) as Create_table_options_itemContext[];
	}
	public create_table_options_item(i: number): Create_table_options_itemContext {
		return this.getTypedRuleContext(Create_table_options_itemContext, i) as Create_table_options_itemContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_options;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_options) {
	 		listener.enterCreate_table_options(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_options) {
	 		listener.exitCreate_table_options(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_options) {
			return visitor.visitCreate_table_options(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_options_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_ON(): TerminalNode {
		return this.getToken(HiveSql.T_ON, 0);
	}
	public T_COMMIT(): TerminalNode {
		return this.getToken(HiveSql.T_COMMIT, 0);
	}
	public T_ROWS(): TerminalNode {
		return this.getToken(HiveSql.T_ROWS, 0);
	}
	public T_DELETE(): TerminalNode {
		return this.getToken(HiveSql.T_DELETE, 0);
	}
	public T_PRESERVE(): TerminalNode {
		return this.getToken(HiveSql.T_PRESERVE, 0);
	}
	public create_table_options_ora_item(): Create_table_options_ora_itemContext {
		return this.getTypedRuleContext(Create_table_options_ora_itemContext, 0) as Create_table_options_ora_itemContext;
	}
	public create_table_options_db2_item(): Create_table_options_db2_itemContext {
		return this.getTypedRuleContext(Create_table_options_db2_itemContext, 0) as Create_table_options_db2_itemContext;
	}
	public create_table_options_td_item(): Create_table_options_td_itemContext {
		return this.getTypedRuleContext(Create_table_options_td_itemContext, 0) as Create_table_options_td_itemContext;
	}
	public create_table_options_hive_item(): Create_table_options_hive_itemContext {
		return this.getTypedRuleContext(Create_table_options_hive_itemContext, 0) as Create_table_options_hive_itemContext;
	}
	public create_table_options_mssql_item(): Create_table_options_mssql_itemContext {
		return this.getTypedRuleContext(Create_table_options_mssql_itemContext, 0) as Create_table_options_mssql_itemContext;
	}
	public create_table_options_mysql_item(): Create_table_options_mysql_itemContext {
		return this.getTypedRuleContext(Create_table_options_mysql_itemContext, 0) as Create_table_options_mysql_itemContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_options_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_options_item) {
	 		listener.enterCreate_table_options_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_options_item) {
	 		listener.exitCreate_table_options_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_options_item) {
			return visitor.visitCreate_table_options_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_options_ora_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_SEGMENT(): TerminalNode {
		return this.getToken(HiveSql.T_SEGMENT, 0);
	}
	public T_CREATION(): TerminalNode {
		return this.getToken(HiveSql.T_CREATION, 0);
	}
	public T_IMMEDIATE(): TerminalNode {
		return this.getToken(HiveSql.T_IMMEDIATE, 0);
	}
	public T_DEFERRED(): TerminalNode {
		return this.getToken(HiveSql.T_DEFERRED, 0);
	}
	public L_INT_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.L_INT);
	}
	public L_INT(i: number): TerminalNode {
		return this.getToken(HiveSql.L_INT, i);
	}
	public T_PCTFREE(): TerminalNode {
		return this.getToken(HiveSql.T_PCTFREE, 0);
	}
	public T_PCTUSED(): TerminalNode {
		return this.getToken(HiveSql.T_PCTUSED, 0);
	}
	public T_INITRANS(): TerminalNode {
		return this.getToken(HiveSql.T_INITRANS, 0);
	}
	public T_MAXTRANS(): TerminalNode {
		return this.getToken(HiveSql.T_MAXTRANS, 0);
	}
	public T_NOCOMPRESS(): TerminalNode {
		return this.getToken(HiveSql.T_NOCOMPRESS, 0);
	}
	public T_LOGGING(): TerminalNode {
		return this.getToken(HiveSql.T_LOGGING, 0);
	}
	public T_NOLOGGING(): TerminalNode {
		return this.getToken(HiveSql.T_NOLOGGING, 0);
	}
	public T_STORAGE(): TerminalNode {
		return this.getToken(HiveSql.T_STORAGE, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public T_TABLESPACE(): TerminalNode {
		return this.getToken(HiveSql.T_TABLESPACE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_options_ora_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_options_ora_item) {
	 		listener.enterCreate_table_options_ora_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_options_ora_item) {
	 		listener.exitCreate_table_options_ora_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_options_ora_item) {
			return visitor.visitCreate_table_options_ora_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_options_db2_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_IN(): TerminalNode {
		return this.getToken(HiveSql.T_IN, 0);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public T_INDEX(): TerminalNode {
		return this.getToken(HiveSql.T_INDEX, 0);
	}
	public T_WITH(): TerminalNode {
		return this.getToken(HiveSql.T_WITH, 0);
	}
	public T_REPLACE(): TerminalNode {
		return this.getToken(HiveSql.T_REPLACE, 0);
	}
	public T_DISTRIBUTE(): TerminalNode {
		return this.getToken(HiveSql.T_DISTRIBUTE, 0);
	}
	public T_BY(): TerminalNode {
		return this.getToken(HiveSql.T_BY, 0);
	}
	public T_HASH(): TerminalNode {
		return this.getToken(HiveSql.T_HASH, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
	public T_LOGGED(): TerminalNode {
		return this.getToken(HiveSql.T_LOGGED, 0);
	}
	public T_NOT(): TerminalNode {
		return this.getToken(HiveSql.T_NOT, 0);
	}
	public T_COMPRESS(): TerminalNode {
		return this.getToken(HiveSql.T_COMPRESS, 0);
	}
	public T_YES(): TerminalNode {
		return this.getToken(HiveSql.T_YES, 0);
	}
	public T_NO(): TerminalNode {
		return this.getToken(HiveSql.T_NO, 0);
	}
	public T_DEFINITION(): TerminalNode {
		return this.getToken(HiveSql.T_DEFINITION, 0);
	}
	public T_ONLY(): TerminalNode {
		return this.getToken(HiveSql.T_ONLY, 0);
	}
	public T_RESTRICT(): TerminalNode {
		return this.getToken(HiveSql.T_RESTRICT, 0);
	}
	public T_ON(): TerminalNode {
		return this.getToken(HiveSql.T_ON, 0);
	}
	public T_DROP(): TerminalNode {
		return this.getToken(HiveSql.T_DROP, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_options_db2_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_options_db2_item) {
	 		listener.enterCreate_table_options_db2_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_options_db2_item) {
	 		listener.exitCreate_table_options_db2_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_options_db2_item) {
			return visitor.visitCreate_table_options_db2_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_options_td_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_PRIMARY(): TerminalNode {
		return this.getToken(HiveSql.T_PRIMARY, 0);
	}
	public T_INDEX(): TerminalNode {
		return this.getToken(HiveSql.T_INDEX, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public T_UNIQUE(): TerminalNode {
		return this.getToken(HiveSql.T_UNIQUE, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
	public T_WITH(): TerminalNode {
		return this.getToken(HiveSql.T_WITH, 0);
	}
	public T_DATA(): TerminalNode {
		return this.getToken(HiveSql.T_DATA, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_options_td_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_options_td_item) {
	 		listener.enterCreate_table_options_td_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_options_td_item) {
	 		listener.exitCreate_table_options_td_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_options_td_item) {
			return visitor.visitCreate_table_options_td_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_options_hive_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public create_table_hive_row_format(): Create_table_hive_row_formatContext {
		return this.getTypedRuleContext(Create_table_hive_row_formatContext, 0) as Create_table_hive_row_formatContext;
	}
	public T_STORED(): TerminalNode {
		return this.getToken(HiveSql.T_STORED, 0);
	}
	public T_AS(): TerminalNode {
		return this.getToken(HiveSql.T_AS, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_options_hive_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_options_hive_item) {
	 		listener.enterCreate_table_options_hive_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_options_hive_item) {
	 		listener.exitCreate_table_options_hive_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_options_hive_item) {
			return visitor.visitCreate_table_options_hive_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_hive_row_formatContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_ROW(): TerminalNode {
		return this.getToken(HiveSql.T_ROW, 0);
	}
	public T_FORMAT(): TerminalNode {
		return this.getToken(HiveSql.T_FORMAT, 0);
	}
	public T_DELIMITED(): TerminalNode {
		return this.getToken(HiveSql.T_DELIMITED, 0);
	}
	public create_table_hive_row_format_fields_list(): Create_table_hive_row_format_fieldsContext[] {
		return this.getTypedRuleContexts(Create_table_hive_row_format_fieldsContext) as Create_table_hive_row_format_fieldsContext[];
	}
	public create_table_hive_row_format_fields(i: number): Create_table_hive_row_format_fieldsContext {
		return this.getTypedRuleContext(Create_table_hive_row_format_fieldsContext, i) as Create_table_hive_row_format_fieldsContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_hive_row_format;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_hive_row_format) {
	 		listener.enterCreate_table_hive_row_format(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_hive_row_format) {
	 		listener.exitCreate_table_hive_row_format(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_hive_row_format) {
			return visitor.visitCreate_table_hive_row_format(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_hive_row_format_fieldsContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_FIELDS(): TerminalNode {
		return this.getToken(HiveSql.T_FIELDS, 0);
	}
	public T_TERMINATED(): TerminalNode {
		return this.getToken(HiveSql.T_TERMINATED, 0);
	}
	public T_BY_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_BY);
	}
	public T_BY(i: number): TerminalNode {
		return this.getToken(HiveSql.T_BY, i);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_ESCAPED(): TerminalNode {
		return this.getToken(HiveSql.T_ESCAPED, 0);
	}
	public T_COLLECTION(): TerminalNode {
		return this.getToken(HiveSql.T_COLLECTION, 0);
	}
	public T_ITEMS(): TerminalNode {
		return this.getToken(HiveSql.T_ITEMS, 0);
	}
	public T_MAP(): TerminalNode {
		return this.getToken(HiveSql.T_MAP, 0);
	}
	public T_KEYS(): TerminalNode {
		return this.getToken(HiveSql.T_KEYS, 0);
	}
	public T_LINES(): TerminalNode {
		return this.getToken(HiveSql.T_LINES, 0);
	}
	public T_NULL(): TerminalNode {
		return this.getToken(HiveSql.T_NULL, 0);
	}
	public T_DEFINED(): TerminalNode {
		return this.getToken(HiveSql.T_DEFINED, 0);
	}
	public T_AS(): TerminalNode {
		return this.getToken(HiveSql.T_AS, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_hive_row_format_fields;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_hive_row_format_fields) {
	 		listener.enterCreate_table_hive_row_format_fields(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_hive_row_format_fields) {
	 		listener.exitCreate_table_hive_row_format_fields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_hive_row_format_fields) {
			return visitor.visitCreate_table_hive_row_format_fields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_options_mssql_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_ON(): TerminalNode {
		return this.getToken(HiveSql.T_ON, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_TEXTIMAGE_ON(): TerminalNode {
		return this.getToken(HiveSql.T_TEXTIMAGE_ON, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_options_mssql_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_options_mssql_item) {
	 		listener.enterCreate_table_options_mssql_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_options_mssql_item) {
	 		listener.exitCreate_table_options_mssql_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_options_mssql_item) {
			return visitor.visitCreate_table_options_mssql_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_options_mysql_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_AUTO_INCREMENT(): TerminalNode {
		return this.getToken(HiveSql.T_AUTO_INCREMENT, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public T_EQUAL(): TerminalNode {
		return this.getToken(HiveSql.T_EQUAL, 0);
	}
	public T_COMMENT(): TerminalNode {
		return this.getToken(HiveSql.T_COMMENT, 0);
	}
	public T_CHARACTER(): TerminalNode {
		return this.getToken(HiveSql.T_CHARACTER, 0);
	}
	public T_SET(): TerminalNode {
		return this.getToken(HiveSql.T_SET, 0);
	}
	public T_CHARSET(): TerminalNode {
		return this.getToken(HiveSql.T_CHARSET, 0);
	}
	public T_DEFAULT(): TerminalNode {
		return this.getToken(HiveSql.T_DEFAULT, 0);
	}
	public T_ENGINE(): TerminalNode {
		return this.getToken(HiveSql.T_ENGINE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_table_options_mysql_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_table_options_mysql_item) {
	 		listener.enterCreate_table_options_mysql_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_table_options_mysql_item) {
	 		listener.exitCreate_table_options_mysql_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_options_mysql_item) {
			return visitor.visitCreate_table_options_mysql_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Alter_table_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_ALTER(): TerminalNode {
		return this.getToken(HiveSql.T_ALTER, 0);
	}
	public T_TABLE(): TerminalNode {
		return this.getToken(HiveSql.T_TABLE, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public alter_table_item(): Alter_table_itemContext {
		return this.getTypedRuleContext(Alter_table_itemContext, 0) as Alter_table_itemContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_alter_table_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterAlter_table_stmt) {
	 		listener.enterAlter_table_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitAlter_table_stmt) {
	 		listener.exitAlter_table_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitAlter_table_stmt) {
			return visitor.visitAlter_table_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Alter_table_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public alter_table_add_constraint(): Alter_table_add_constraintContext {
		return this.getTypedRuleContext(Alter_table_add_constraintContext, 0) as Alter_table_add_constraintContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_alter_table_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterAlter_table_item) {
	 		listener.enterAlter_table_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitAlter_table_item) {
	 		listener.exitAlter_table_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitAlter_table_item) {
			return visitor.visitAlter_table_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Alter_table_add_constraintContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_ADD2(): TerminalNode {
		return this.getToken(HiveSql.T_ADD2, 0);
	}
	public alter_table_add_constraint_item(): Alter_table_add_constraint_itemContext {
		return this.getTypedRuleContext(Alter_table_add_constraint_itemContext, 0) as Alter_table_add_constraint_itemContext;
	}
	public T_CONSTRAINT(): TerminalNode {
		return this.getToken(HiveSql.T_CONSTRAINT, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_alter_table_add_constraint;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterAlter_table_add_constraint) {
	 		listener.enterAlter_table_add_constraint(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitAlter_table_add_constraint) {
	 		listener.exitAlter_table_add_constraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitAlter_table_add_constraint) {
			return visitor.visitAlter_table_add_constraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Alter_table_add_constraint_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_PRIMARY(): TerminalNode {
		return this.getToken(HiveSql.T_PRIMARY, 0);
	}
	public T_KEY(): TerminalNode {
		return this.getToken(HiveSql.T_KEY, 0);
	}
	public T_OPEN_P_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_OPEN_P);
	}
	public T_OPEN_P(i: number): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, i);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public T_CLOSE_P_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_CLOSE_P);
	}
	public T_CLOSE_P(i: number): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, i);
	}
	public T_CLUSTERED(): TerminalNode {
		return this.getToken(HiveSql.T_CLUSTERED, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
	public T_ENABLE(): TerminalNode {
		return this.getToken(HiveSql.T_ENABLE, 0);
	}
	public index_storage_clause(): Index_storage_clauseContext {
		return this.getTypedRuleContext(Index_storage_clauseContext, 0) as Index_storage_clauseContext;
	}
	public T_ASC_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_ASC);
	}
	public T_ASC(i: number): TerminalNode {
		return this.getToken(HiveSql.T_ASC, i);
	}
	public T_DESC_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_DESC);
	}
	public T_DESC(i: number): TerminalNode {
		return this.getToken(HiveSql.T_DESC, i);
	}
	public T_FOREIGN(): TerminalNode {
		return this.getToken(HiveSql.T_FOREIGN, 0);
	}
	public T_REFERENCES(): TerminalNode {
		return this.getToken(HiveSql.T_REFERENCES, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public create_table_fk_action_list(): Create_table_fk_actionContext[] {
		return this.getTypedRuleContexts(Create_table_fk_actionContext) as Create_table_fk_actionContext[];
	}
	public create_table_fk_action(i: number): Create_table_fk_actionContext {
		return this.getTypedRuleContext(Create_table_fk_actionContext, i) as Create_table_fk_actionContext;
	}
	public T_DEFAULT(): TerminalNode {
		return this.getToken(HiveSql.T_DEFAULT, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public T_FOR(): TerminalNode {
		return this.getToken(HiveSql.T_FOR, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_alter_table_add_constraint_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterAlter_table_add_constraint_item) {
	 		listener.enterAlter_table_add_constraint_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitAlter_table_add_constraint_item) {
	 		listener.exitAlter_table_add_constraint_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitAlter_table_add_constraint_item) {
			return visitor.visitAlter_table_add_constraint_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DtypeContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_CHAR(): TerminalNode {
		return this.getToken(HiveSql.T_CHAR, 0);
	}
	public T_BIGINT(): TerminalNode {
		return this.getToken(HiveSql.T_BIGINT, 0);
	}
	public T_BINARY_DOUBLE(): TerminalNode {
		return this.getToken(HiveSql.T_BINARY_DOUBLE, 0);
	}
	public T_BINARY_FLOAT(): TerminalNode {
		return this.getToken(HiveSql.T_BINARY_FLOAT, 0);
	}
	public T_BINARY_INTEGER(): TerminalNode {
		return this.getToken(HiveSql.T_BINARY_INTEGER, 0);
	}
	public T_BIT(): TerminalNode {
		return this.getToken(HiveSql.T_BIT, 0);
	}
	public T_DATE(): TerminalNode {
		return this.getToken(HiveSql.T_DATE, 0);
	}
	public T_DATETIME(): TerminalNode {
		return this.getToken(HiveSql.T_DATETIME, 0);
	}
	public T_DEC(): TerminalNode {
		return this.getToken(HiveSql.T_DEC, 0);
	}
	public T_DECIMAL(): TerminalNode {
		return this.getToken(HiveSql.T_DECIMAL, 0);
	}
	public T_DOUBLE(): TerminalNode {
		return this.getToken(HiveSql.T_DOUBLE, 0);
	}
	public T_PRECISION(): TerminalNode {
		return this.getToken(HiveSql.T_PRECISION, 0);
	}
	public T_FLOAT(): TerminalNode {
		return this.getToken(HiveSql.T_FLOAT, 0);
	}
	public T_INT(): TerminalNode {
		return this.getToken(HiveSql.T_INT, 0);
	}
	public T_INT2(): TerminalNode {
		return this.getToken(HiveSql.T_INT2, 0);
	}
	public T_INT4(): TerminalNode {
		return this.getToken(HiveSql.T_INT4, 0);
	}
	public T_INT8(): TerminalNode {
		return this.getToken(HiveSql.T_INT8, 0);
	}
	public T_INTEGER(): TerminalNode {
		return this.getToken(HiveSql.T_INTEGER, 0);
	}
	public T_NCHAR(): TerminalNode {
		return this.getToken(HiveSql.T_NCHAR, 0);
	}
	public T_NVARCHAR(): TerminalNode {
		return this.getToken(HiveSql.T_NVARCHAR, 0);
	}
	public T_NUMBER(): TerminalNode {
		return this.getToken(HiveSql.T_NUMBER, 0);
	}
	public T_NUMERIC(): TerminalNode {
		return this.getToken(HiveSql.T_NUMERIC, 0);
	}
	public T_PLS_INTEGER(): TerminalNode {
		return this.getToken(HiveSql.T_PLS_INTEGER, 0);
	}
	public T_REAL(): TerminalNode {
		return this.getToken(HiveSql.T_REAL, 0);
	}
	public T_RESULT_SET_LOCATOR(): TerminalNode {
		return this.getToken(HiveSql.T_RESULT_SET_LOCATOR, 0);
	}
	public T_VARYING(): TerminalNode {
		return this.getToken(HiveSql.T_VARYING, 0);
	}
	public T_SIMPLE_FLOAT(): TerminalNode {
		return this.getToken(HiveSql.T_SIMPLE_FLOAT, 0);
	}
	public T_SIMPLE_DOUBLE(): TerminalNode {
		return this.getToken(HiveSql.T_SIMPLE_DOUBLE, 0);
	}
	public T_SIMPLE_INTEGER(): TerminalNode {
		return this.getToken(HiveSql.T_SIMPLE_INTEGER, 0);
	}
	public T_SMALLINT(): TerminalNode {
		return this.getToken(HiveSql.T_SMALLINT, 0);
	}
	public T_SMALLDATETIME(): TerminalNode {
		return this.getToken(HiveSql.T_SMALLDATETIME, 0);
	}
	public T_STRING(): TerminalNode {
		return this.getToken(HiveSql.T_STRING, 0);
	}
	public T_SYS_REFCURSOR(): TerminalNode {
		return this.getToken(HiveSql.T_SYS_REFCURSOR, 0);
	}
	public T_TIMESTAMP(): TerminalNode {
		return this.getToken(HiveSql.T_TIMESTAMP, 0);
	}
	public T_TINYINT(): TerminalNode {
		return this.getToken(HiveSql.T_TINYINT, 0);
	}
	public T_VARCHAR(): TerminalNode {
		return this.getToken(HiveSql.T_VARCHAR, 0);
	}
	public T_VARCHAR2(): TerminalNode {
		return this.getToken(HiveSql.T_VARCHAR2, 0);
	}
	public T_XML(): TerminalNode {
		return this.getToken(HiveSql.T_XML, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_PRECENT(): TerminalNode {
		return this.getToken(HiveSql.T_PRECENT, 0);
	}
	public T_TYPE(): TerminalNode {
		return this.getToken(HiveSql.T_TYPE, 0);
	}
	public T_ROWTYPE(): TerminalNode {
		return this.getToken(HiveSql.T_ROWTYPE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_dtype;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDtype) {
	 		listener.enterDtype(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDtype) {
	 		listener.exitDtype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDtype) {
			return visitor.visitDtype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dtype_lenContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public L_INT_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.L_INT);
	}
	public L_INT(i: number): TerminalNode {
		return this.getToken(HiveSql.L_INT, i);
	}
	public T_MAX(): TerminalNode {
		return this.getToken(HiveSql.T_MAX, 0);
	}
	public T_COMMA(): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, 0);
	}
	public T_CHAR(): TerminalNode {
		return this.getToken(HiveSql.T_CHAR, 0);
	}
	public T_BYTE(): TerminalNode {
		return this.getToken(HiveSql.T_BYTE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_dtype_len;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDtype_len) {
	 		listener.enterDtype_len(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDtype_len) {
	 		listener.exitDtype_len(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDtype_len) {
			return visitor.visitDtype_len(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dtype_attrContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_NULL(): TerminalNode {
		return this.getToken(HiveSql.T_NULL, 0);
	}
	public T_NOT(): TerminalNode {
		return this.getToken(HiveSql.T_NOT, 0);
	}
	public T_CHARACTER(): TerminalNode {
		return this.getToken(HiveSql.T_CHARACTER, 0);
	}
	public T_SET(): TerminalNode {
		return this.getToken(HiveSql.T_SET, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_CASESPECIFIC(): TerminalNode {
		return this.getToken(HiveSql.T_CASESPECIFIC, 0);
	}
	public T_CS(): TerminalNode {
		return this.getToken(HiveSql.T_CS, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_dtype_attr;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDtype_attr) {
	 		listener.enterDtype_attr(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDtype_attr) {
	 		listener.exitDtype_attr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDtype_attr) {
			return visitor.visitDtype_attr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dtype_defaultContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_EQUAL(): TerminalNode {
		return this.getToken(HiveSql.T_EQUAL, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public T_COLON(): TerminalNode {
		return this.getToken(HiveSql.T_COLON, 0);
	}
	public T_DEFAULT(): TerminalNode {
		return this.getToken(HiveSql.T_DEFAULT, 0);
	}
	public T_WITH(): TerminalNode {
		return this.getToken(HiveSql.T_WITH, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_dtype_default;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDtype_default) {
	 		listener.enterDtype_default(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDtype_default) {
	 		listener.exitDtype_default(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDtype_default) {
			return visitor.visitDtype_default(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_database_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_CREATE(): TerminalNode {
		return this.getToken(HiveSql.T_CREATE, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public T_DATABASE(): TerminalNode {
		return this.getToken(HiveSql.T_DATABASE, 0);
	}
	public T_SCHEMA(): TerminalNode {
		return this.getToken(HiveSql.T_SCHEMA, 0);
	}
	public T_IF(): TerminalNode {
		return this.getToken(HiveSql.T_IF, 0);
	}
	public T_NOT(): TerminalNode {
		return this.getToken(HiveSql.T_NOT, 0);
	}
	public T_EXISTS(): TerminalNode {
		return this.getToken(HiveSql.T_EXISTS, 0);
	}
	public create_database_option_list(): Create_database_optionContext[] {
		return this.getTypedRuleContexts(Create_database_optionContext) as Create_database_optionContext[];
	}
	public create_database_option(i: number): Create_database_optionContext {
		return this.getTypedRuleContext(Create_database_optionContext, i) as Create_database_optionContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_database_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_database_stmt) {
	 		listener.enterCreate_database_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_database_stmt) {
	 		listener.exitCreate_database_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_database_stmt) {
			return visitor.visitCreate_database_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_database_optionContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_COMMENT(): TerminalNode {
		return this.getToken(HiveSql.T_COMMENT, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public T_LOCATION(): TerminalNode {
		return this.getToken(HiveSql.T_LOCATION, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_database_option;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_database_option) {
	 		listener.enterCreate_database_option(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_database_option) {
	 		listener.exitCreate_database_option(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_database_option) {
			return visitor.visitCreate_database_option(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_function_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_FUNCTION(): TerminalNode {
		return this.getToken(HiveSql.T_FUNCTION, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public create_function_return(): Create_function_returnContext {
		return this.getTypedRuleContext(Create_function_returnContext, 0) as Create_function_returnContext;
	}
	public single_block_stmt(): Single_block_stmtContext {
		return this.getTypedRuleContext(Single_block_stmtContext, 0) as Single_block_stmtContext;
	}
	public T_ALTER(): TerminalNode {
		return this.getToken(HiveSql.T_ALTER, 0);
	}
	public T_CREATE(): TerminalNode {
		return this.getToken(HiveSql.T_CREATE, 0);
	}
	public T_REPLACE(): TerminalNode {
		return this.getToken(HiveSql.T_REPLACE, 0);
	}
	public create_routine_params(): Create_routine_paramsContext {
		return this.getTypedRuleContext(Create_routine_paramsContext, 0) as Create_routine_paramsContext;
	}
	public declare_block_inplace(): Declare_block_inplaceContext {
		return this.getTypedRuleContext(Declare_block_inplaceContext, 0) as Declare_block_inplaceContext;
	}
	public T_AS(): TerminalNode {
		return this.getToken(HiveSql.T_AS, 0);
	}
	public T_IS(): TerminalNode {
		return this.getToken(HiveSql.T_IS, 0);
	}
	public T_OR(): TerminalNode {
		return this.getToken(HiveSql.T_OR, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_function_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_function_stmt) {
	 		listener.enterCreate_function_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_function_stmt) {
	 		listener.exitCreate_function_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_function_stmt) {
			return visitor.visitCreate_function_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_function_returnContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dtype(): DtypeContext {
		return this.getTypedRuleContext(DtypeContext, 0) as DtypeContext;
	}
	public T_RETURN(): TerminalNode {
		return this.getToken(HiveSql.T_RETURN, 0);
	}
	public T_RETURNS(): TerminalNode {
		return this.getToken(HiveSql.T_RETURNS, 0);
	}
	public dtype_len(): Dtype_lenContext {
		return this.getTypedRuleContext(Dtype_lenContext, 0) as Dtype_lenContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_function_return;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_function_return) {
	 		listener.enterCreate_function_return(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_function_return) {
	 		listener.exitCreate_function_return(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_function_return) {
			return visitor.visitCreate_function_return(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_package_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_PACKAGE(): TerminalNode {
		return this.getToken(HiveSql.T_PACKAGE, 0);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public package_spec(): Package_specContext {
		return this.getTypedRuleContext(Package_specContext, 0) as Package_specContext;
	}
	public T_END(): TerminalNode {
		return this.getToken(HiveSql.T_END, 0);
	}
	public T_AS(): TerminalNode {
		return this.getToken(HiveSql.T_AS, 0);
	}
	public T_IS(): TerminalNode {
		return this.getToken(HiveSql.T_IS, 0);
	}
	public T_ALTER(): TerminalNode {
		return this.getToken(HiveSql.T_ALTER, 0);
	}
	public T_CREATE(): TerminalNode {
		return this.getToken(HiveSql.T_CREATE, 0);
	}
	public T_REPLACE(): TerminalNode {
		return this.getToken(HiveSql.T_REPLACE, 0);
	}
	public T_SEMICOLON(): TerminalNode {
		return this.getToken(HiveSql.T_SEMICOLON, 0);
	}
	public T_OR(): TerminalNode {
		return this.getToken(HiveSql.T_OR, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_package_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_package_stmt) {
	 		listener.enterCreate_package_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_package_stmt) {
	 		listener.exitCreate_package_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_package_stmt) {
			return visitor.visitCreate_package_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Package_specContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public package_spec_item_list(): Package_spec_itemContext[] {
		return this.getTypedRuleContexts(Package_spec_itemContext) as Package_spec_itemContext[];
	}
	public package_spec_item(i: number): Package_spec_itemContext {
		return this.getTypedRuleContext(Package_spec_itemContext, i) as Package_spec_itemContext;
	}
	public T_SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_SEMICOLON);
	}
	public T_SEMICOLON(i: number): TerminalNode {
		return this.getToken(HiveSql.T_SEMICOLON, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_package_spec;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterPackage_spec) {
	 		listener.enterPackage_spec(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitPackage_spec) {
	 		listener.exitPackage_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitPackage_spec) {
			return visitor.visitPackage_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Package_spec_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declare_stmt_item(): Declare_stmt_itemContext {
		return this.getTypedRuleContext(Declare_stmt_itemContext, 0) as Declare_stmt_itemContext;
	}
	public T_FUNCTION(): TerminalNode {
		return this.getToken(HiveSql.T_FUNCTION, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public create_function_return(): Create_function_returnContext {
		return this.getTypedRuleContext(Create_function_returnContext, 0) as Create_function_returnContext;
	}
	public create_routine_params(): Create_routine_paramsContext {
		return this.getTypedRuleContext(Create_routine_paramsContext, 0) as Create_routine_paramsContext;
	}
	public T_PROCEDURE(): TerminalNode {
		return this.getToken(HiveSql.T_PROCEDURE, 0);
	}
	public T_PROC(): TerminalNode {
		return this.getToken(HiveSql.T_PROC, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_package_spec_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterPackage_spec_item) {
	 		listener.enterPackage_spec_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitPackage_spec_item) {
	 		listener.exitPackage_spec_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitPackage_spec_item) {
			return visitor.visitPackage_spec_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_package_body_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_PACKAGE(): TerminalNode {
		return this.getToken(HiveSql.T_PACKAGE, 0);
	}
	public T_BODY(): TerminalNode {
		return this.getToken(HiveSql.T_BODY, 0);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public package_body(): Package_bodyContext {
		return this.getTypedRuleContext(Package_bodyContext, 0) as Package_bodyContext;
	}
	public T_END(): TerminalNode {
		return this.getToken(HiveSql.T_END, 0);
	}
	public T_AS(): TerminalNode {
		return this.getToken(HiveSql.T_AS, 0);
	}
	public T_IS(): TerminalNode {
		return this.getToken(HiveSql.T_IS, 0);
	}
	public T_ALTER(): TerminalNode {
		return this.getToken(HiveSql.T_ALTER, 0);
	}
	public T_CREATE(): TerminalNode {
		return this.getToken(HiveSql.T_CREATE, 0);
	}
	public T_REPLACE(): TerminalNode {
		return this.getToken(HiveSql.T_REPLACE, 0);
	}
	public T_SEMICOLON(): TerminalNode {
		return this.getToken(HiveSql.T_SEMICOLON, 0);
	}
	public T_OR(): TerminalNode {
		return this.getToken(HiveSql.T_OR, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_package_body_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_package_body_stmt) {
	 		listener.enterCreate_package_body_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_package_body_stmt) {
	 		listener.exitCreate_package_body_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_package_body_stmt) {
			return visitor.visitCreate_package_body_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Package_bodyContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public package_body_item_list(): Package_body_itemContext[] {
		return this.getTypedRuleContexts(Package_body_itemContext) as Package_body_itemContext[];
	}
	public package_body_item(i: number): Package_body_itemContext {
		return this.getTypedRuleContext(Package_body_itemContext, i) as Package_body_itemContext;
	}
	public T_SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_SEMICOLON);
	}
	public T_SEMICOLON(i: number): TerminalNode {
		return this.getToken(HiveSql.T_SEMICOLON, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_package_body;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterPackage_body) {
	 		listener.enterPackage_body(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitPackage_body) {
	 		listener.exitPackage_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitPackage_body) {
			return visitor.visitPackage_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Package_body_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declare_stmt_item(): Declare_stmt_itemContext {
		return this.getTypedRuleContext(Declare_stmt_itemContext, 0) as Declare_stmt_itemContext;
	}
	public create_function_stmt(): Create_function_stmtContext {
		return this.getTypedRuleContext(Create_function_stmtContext, 0) as Create_function_stmtContext;
	}
	public create_procedure_stmt(): Create_procedure_stmtContext {
		return this.getTypedRuleContext(Create_procedure_stmtContext, 0) as Create_procedure_stmtContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_package_body_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterPackage_body_item) {
	 		listener.enterPackage_body_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitPackage_body_item) {
	 		listener.exitPackage_body_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitPackage_body_item) {
			return visitor.visitPackage_body_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_procedure_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public proc_block(): Proc_blockContext {
		return this.getTypedRuleContext(Proc_blockContext, 0) as Proc_blockContext;
	}
	public T_PROCEDURE(): TerminalNode {
		return this.getToken(HiveSql.T_PROCEDURE, 0);
	}
	public T_PROC(): TerminalNode {
		return this.getToken(HiveSql.T_PROC, 0);
	}
	public T_ALTER(): TerminalNode {
		return this.getToken(HiveSql.T_ALTER, 0);
	}
	public T_CREATE(): TerminalNode {
		return this.getToken(HiveSql.T_CREATE, 0);
	}
	public T_REPLACE(): TerminalNode {
		return this.getToken(HiveSql.T_REPLACE, 0);
	}
	public create_routine_params(): Create_routine_paramsContext {
		return this.getTypedRuleContext(Create_routine_paramsContext, 0) as Create_routine_paramsContext;
	}
	public create_routine_options(): Create_routine_optionsContext {
		return this.getTypedRuleContext(Create_routine_optionsContext, 0) as Create_routine_optionsContext;
	}
	public declare_block_inplace(): Declare_block_inplaceContext {
		return this.getTypedRuleContext(Declare_block_inplaceContext, 0) as Declare_block_inplaceContext;
	}
	public label(): LabelContext {
		return this.getTypedRuleContext(LabelContext, 0) as LabelContext;
	}
	public T_SEMICOLON(): TerminalNode {
		return this.getToken(HiveSql.T_SEMICOLON, 0);
	}
	public T_AS(): TerminalNode {
		return this.getToken(HiveSql.T_AS, 0);
	}
	public T_IS(): TerminalNode {
		return this.getToken(HiveSql.T_IS, 0);
	}
	public T_OR(): TerminalNode {
		return this.getToken(HiveSql.T_OR, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_procedure_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_procedure_stmt) {
	 		listener.enterCreate_procedure_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_procedure_stmt) {
	 		listener.exitCreate_procedure_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_procedure_stmt) {
			return visitor.visitCreate_procedure_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_routine_paramsContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public create_routine_param_item_list(): Create_routine_param_itemContext[] {
		return this.getTypedRuleContexts(Create_routine_param_itemContext) as Create_routine_param_itemContext[];
	}
	public create_routine_param_item(i: number): Create_routine_param_itemContext {
		return this.getTypedRuleContext(Create_routine_param_itemContext, i) as Create_routine_param_itemContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_routine_params;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_routine_params) {
	 		listener.enterCreate_routine_params(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_routine_params) {
	 		listener.exitCreate_routine_params(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_routine_params) {
			return visitor.visitCreate_routine_params(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_routine_param_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public dtype(): DtypeContext {
		return this.getTypedRuleContext(DtypeContext, 0) as DtypeContext;
	}
	public T_IN(): TerminalNode {
		return this.getToken(HiveSql.T_IN, 0);
	}
	public T_OUT(): TerminalNode {
		return this.getToken(HiveSql.T_OUT, 0);
	}
	public T_INOUT(): TerminalNode {
		return this.getToken(HiveSql.T_INOUT, 0);
	}
	public dtype_len(): Dtype_lenContext {
		return this.getTypedRuleContext(Dtype_lenContext, 0) as Dtype_lenContext;
	}
	public dtype_attr_list(): Dtype_attrContext[] {
		return this.getTypedRuleContexts(Dtype_attrContext) as Dtype_attrContext[];
	}
	public dtype_attr(i: number): Dtype_attrContext {
		return this.getTypedRuleContext(Dtype_attrContext, i) as Dtype_attrContext;
	}
	public dtype_default(): Dtype_defaultContext {
		return this.getTypedRuleContext(Dtype_defaultContext, 0) as Dtype_defaultContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_routine_param_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_routine_param_item) {
	 		listener.enterCreate_routine_param_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_routine_param_item) {
	 		listener.exitCreate_routine_param_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_routine_param_item) {
			return visitor.visitCreate_routine_param_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_routine_optionsContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public create_routine_option_list(): Create_routine_optionContext[] {
		return this.getTypedRuleContexts(Create_routine_optionContext) as Create_routine_optionContext[];
	}
	public create_routine_option(i: number): Create_routine_optionContext {
		return this.getTypedRuleContext(Create_routine_optionContext, i) as Create_routine_optionContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_routine_options;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_routine_options) {
	 		listener.enterCreate_routine_options(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_routine_options) {
	 		listener.exitCreate_routine_options(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_routine_options) {
			return visitor.visitCreate_routine_options(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_routine_optionContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_LANGUAGE(): TerminalNode {
		return this.getToken(HiveSql.T_LANGUAGE, 0);
	}
	public T_SQL(): TerminalNode {
		return this.getToken(HiveSql.T_SQL, 0);
	}
	public T_SECURITY(): TerminalNode {
		return this.getToken(HiveSql.T_SECURITY, 0);
	}
	public T_CREATOR(): TerminalNode {
		return this.getToken(HiveSql.T_CREATOR, 0);
	}
	public T_DEFINER(): TerminalNode {
		return this.getToken(HiveSql.T_DEFINER, 0);
	}
	public T_INVOKER(): TerminalNode {
		return this.getToken(HiveSql.T_INVOKER, 0);
	}
	public T_OWNER(): TerminalNode {
		return this.getToken(HiveSql.T_OWNER, 0);
	}
	public T_RESULT(): TerminalNode {
		return this.getToken(HiveSql.T_RESULT, 0);
	}
	public T_SETS(): TerminalNode {
		return this.getToken(HiveSql.T_SETS, 0);
	}
	public L_INT(): TerminalNode {
		return this.getToken(HiveSql.L_INT, 0);
	}
	public T_DYNAMIC(): TerminalNode {
		return this.getToken(HiveSql.T_DYNAMIC, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_routine_option;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_routine_option) {
	 		listener.enterCreate_routine_option(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_routine_option) {
	 		listener.exitCreate_routine_option(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_routine_option) {
			return visitor.visitCreate_routine_option(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Drop_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_DROP(): TerminalNode {
		return this.getToken(HiveSql.T_DROP, 0);
	}
	public T_TABLE(): TerminalNode {
		return this.getToken(HiveSql.T_TABLE, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public T_IF(): TerminalNode {
		return this.getToken(HiveSql.T_IF, 0);
	}
	public T_EXISTS(): TerminalNode {
		return this.getToken(HiveSql.T_EXISTS, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public T_DATABASE(): TerminalNode {
		return this.getToken(HiveSql.T_DATABASE, 0);
	}
	public T_SCHEMA(): TerminalNode {
		return this.getToken(HiveSql.T_SCHEMA, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_drop_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDrop_stmt) {
	 		listener.enterDrop_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDrop_stmt) {
	 		listener.exitDrop_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDrop_stmt) {
			return visitor.visitDrop_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class End_transaction_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_END(): TerminalNode {
		return this.getToken(HiveSql.T_END, 0);
	}
	public T_TRANSACTION(): TerminalNode {
		return this.getToken(HiveSql.T_TRANSACTION, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_end_transaction_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterEnd_transaction_stmt) {
	 		listener.enterEnd_transaction_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitEnd_transaction_stmt) {
	 		listener.exitEnd_transaction_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitEnd_transaction_stmt) {
			return visitor.visitEnd_transaction_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exec_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public T_EXEC(): TerminalNode {
		return this.getToken(HiveSql.T_EXEC, 0);
	}
	public T_EXECUTE(): TerminalNode {
		return this.getToken(HiveSql.T_EXECUTE, 0);
	}
	public T_IMMEDIATE(): TerminalNode {
		return this.getToken(HiveSql.T_IMMEDIATE, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public expr_func_params(): Expr_func_paramsContext {
		return this.getTypedRuleContext(Expr_func_paramsContext, 0) as Expr_func_paramsContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public T_INTO(): TerminalNode {
		return this.getToken(HiveSql.T_INTO, 0);
	}
	public L_ID_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.L_ID);
	}
	public L_ID(i: number): TerminalNode {
		return this.getToken(HiveSql.L_ID, i);
	}
	public using_clause(): Using_clauseContext {
		return this.getTypedRuleContext(Using_clauseContext, 0) as Using_clauseContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_exec_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExec_stmt) {
	 		listener.enterExec_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExec_stmt) {
	 		listener.exitExec_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExec_stmt) {
			return visitor.visitExec_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public if_plsql_stmt(): If_plsql_stmtContext {
		return this.getTypedRuleContext(If_plsql_stmtContext, 0) as If_plsql_stmtContext;
	}
	public if_tsql_stmt(): If_tsql_stmtContext {
		return this.getTypedRuleContext(If_tsql_stmtContext, 0) as If_tsql_stmtContext;
	}
	public if_bteq_stmt(): If_bteq_stmtContext {
		return this.getTypedRuleContext(If_bteq_stmtContext, 0) as If_bteq_stmtContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_if_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterIf_stmt) {
	 		listener.enterIf_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitIf_stmt) {
	 		listener.exitIf_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitIf_stmt) {
			return visitor.visitIf_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_plsql_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_IF_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_IF);
	}
	public T_IF(i: number): TerminalNode {
		return this.getToken(HiveSql.T_IF, i);
	}
	public bool_expr(): Bool_exprContext {
		return this.getTypedRuleContext(Bool_exprContext, 0) as Bool_exprContext;
	}
	public T_THEN(): TerminalNode {
		return this.getToken(HiveSql.T_THEN, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public T_END(): TerminalNode {
		return this.getToken(HiveSql.T_END, 0);
	}
	public elseif_block_list(): Elseif_blockContext[] {
		return this.getTypedRuleContexts(Elseif_blockContext) as Elseif_blockContext[];
	}
	public elseif_block(i: number): Elseif_blockContext {
		return this.getTypedRuleContext(Elseif_blockContext, i) as Elseif_blockContext;
	}
	public else_block(): Else_blockContext {
		return this.getTypedRuleContext(Else_blockContext, 0) as Else_blockContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_if_plsql_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterIf_plsql_stmt) {
	 		listener.enterIf_plsql_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitIf_plsql_stmt) {
	 		listener.exitIf_plsql_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitIf_plsql_stmt) {
			return visitor.visitIf_plsql_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_tsql_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_IF(): TerminalNode {
		return this.getToken(HiveSql.T_IF, 0);
	}
	public bool_expr(): Bool_exprContext {
		return this.getTypedRuleContext(Bool_exprContext, 0) as Bool_exprContext;
	}
	public single_block_stmt_list(): Single_block_stmtContext[] {
		return this.getTypedRuleContexts(Single_block_stmtContext) as Single_block_stmtContext[];
	}
	public single_block_stmt(i: number): Single_block_stmtContext {
		return this.getTypedRuleContext(Single_block_stmtContext, i) as Single_block_stmtContext;
	}
	public T_ELSE(): TerminalNode {
		return this.getToken(HiveSql.T_ELSE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_if_tsql_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterIf_tsql_stmt) {
	 		listener.enterIf_tsql_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitIf_tsql_stmt) {
	 		listener.exitIf_tsql_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitIf_tsql_stmt) {
			return visitor.visitIf_tsql_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_bteq_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_DOT(): TerminalNode {
		return this.getToken(HiveSql.T_DOT, 0);
	}
	public T_IF(): TerminalNode {
		return this.getToken(HiveSql.T_IF, 0);
	}
	public bool_expr(): Bool_exprContext {
		return this.getTypedRuleContext(Bool_exprContext, 0) as Bool_exprContext;
	}
	public T_THEN(): TerminalNode {
		return this.getToken(HiveSql.T_THEN, 0);
	}
	public single_block_stmt(): Single_block_stmtContext {
		return this.getTypedRuleContext(Single_block_stmtContext, 0) as Single_block_stmtContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_if_bteq_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterIf_bteq_stmt) {
	 		listener.enterIf_bteq_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitIf_bteq_stmt) {
	 		listener.exitIf_bteq_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitIf_bteq_stmt) {
			return visitor.visitIf_bteq_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Elseif_blockContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public bool_expr(): Bool_exprContext {
		return this.getTypedRuleContext(Bool_exprContext, 0) as Bool_exprContext;
	}
	public T_THEN(): TerminalNode {
		return this.getToken(HiveSql.T_THEN, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public T_ELSIF(): TerminalNode {
		return this.getToken(HiveSql.T_ELSIF, 0);
	}
	public T_ELSEIF(): TerminalNode {
		return this.getToken(HiveSql.T_ELSEIF, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_elseif_block;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterElseif_block) {
	 		listener.enterElseif_block(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitElseif_block) {
	 		listener.exitElseif_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitElseif_block) {
			return visitor.visitElseif_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Else_blockContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_ELSE(): TerminalNode {
		return this.getToken(HiveSql.T_ELSE, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_else_block;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterElse_block) {
	 		listener.enterElse_block(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitElse_block) {
	 		listener.exitElse_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitElse_block) {
			return visitor.visitElse_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Include_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_INCLUDE(): TerminalNode {
		return this.getToken(HiveSql.T_INCLUDE, 0);
	}
	public file_name(): File_nameContext {
		return this.getTypedRuleContext(File_nameContext, 0) as File_nameContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_include_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterInclude_stmt) {
	 		listener.enterInclude_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitInclude_stmt) {
	 		listener.exitInclude_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitInclude_stmt) {
			return visitor.visitInclude_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Insert_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_INSERT(): TerminalNode {
		return this.getToken(HiveSql.T_INSERT, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public T_OVERWRITE(): TerminalNode {
		return this.getToken(HiveSql.T_OVERWRITE, 0);
	}
	public T_TABLE(): TerminalNode {
		return this.getToken(HiveSql.T_TABLE, 0);
	}
	public T_INTO(): TerminalNode {
		return this.getToken(HiveSql.T_INTO, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public insert_stmt_rows(): Insert_stmt_rowsContext {
		return this.getTypedRuleContext(Insert_stmt_rowsContext, 0) as Insert_stmt_rowsContext;
	}
	public insert_stmt_cols(): Insert_stmt_colsContext {
		return this.getTypedRuleContext(Insert_stmt_colsContext, 0) as Insert_stmt_colsContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_insert_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterInsert_stmt) {
	 		listener.enterInsert_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitInsert_stmt) {
	 		listener.exitInsert_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitInsert_stmt) {
			return visitor.visitInsert_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Insert_stmt_colsContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_insert_stmt_cols;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterInsert_stmt_cols) {
	 		listener.enterInsert_stmt_cols(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitInsert_stmt_cols) {
	 		listener.exitInsert_stmt_cols(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitInsert_stmt_cols) {
			return visitor.visitInsert_stmt_cols(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Insert_stmt_rowsContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_VALUES(): TerminalNode {
		return this.getToken(HiveSql.T_VALUES, 0);
	}
	public insert_stmt_row_list(): Insert_stmt_rowContext[] {
		return this.getTypedRuleContexts(Insert_stmt_rowContext) as Insert_stmt_rowContext[];
	}
	public insert_stmt_row(i: number): Insert_stmt_rowContext {
		return this.getTypedRuleContext(Insert_stmt_rowContext, i) as Insert_stmt_rowContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_insert_stmt_rows;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterInsert_stmt_rows) {
	 		listener.enterInsert_stmt_rows(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitInsert_stmt_rows) {
	 		listener.exitInsert_stmt_rows(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitInsert_stmt_rows) {
			return visitor.visitInsert_stmt_rows(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Insert_stmt_rowContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_insert_stmt_row;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterInsert_stmt_row) {
	 		listener.enterInsert_stmt_row(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitInsert_stmt_row) {
	 		listener.exitInsert_stmt_row(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitInsert_stmt_row) {
			return visitor.visitInsert_stmt_row(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Insert_directory_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_INSERT(): TerminalNode {
		return this.getToken(HiveSql.T_INSERT, 0);
	}
	public T_OVERWRITE(): TerminalNode {
		return this.getToken(HiveSql.T_OVERWRITE, 0);
	}
	public T_DIRECTORY(): TerminalNode {
		return this.getToken(HiveSql.T_DIRECTORY, 0);
	}
	public expr_file(): Expr_fileContext {
		return this.getTypedRuleContext(Expr_fileContext, 0) as Expr_fileContext;
	}
	public expr_select(): Expr_selectContext {
		return this.getTypedRuleContext(Expr_selectContext, 0) as Expr_selectContext;
	}
	public T_LOCAL(): TerminalNode {
		return this.getToken(HiveSql.T_LOCAL, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_insert_directory_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterInsert_directory_stmt) {
	 		listener.enterInsert_directory_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitInsert_directory_stmt) {
	 		listener.exitInsert_directory_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitInsert_directory_stmt) {
			return visitor.visitInsert_directory_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exit_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_EXIT(): TerminalNode {
		return this.getToken(HiveSql.T_EXIT, 0);
	}
	public L_ID(): TerminalNode {
		return this.getToken(HiveSql.L_ID, 0);
	}
	public T_WHEN(): TerminalNode {
		return this.getToken(HiveSql.T_WHEN, 0);
	}
	public bool_expr(): Bool_exprContext {
		return this.getTypedRuleContext(Bool_exprContext, 0) as Bool_exprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_exit_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExit_stmt) {
	 		listener.enterExit_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExit_stmt) {
	 		listener.exitExit_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExit_stmt) {
			return visitor.visitExit_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Get_diag_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_GET(): TerminalNode {
		return this.getToken(HiveSql.T_GET, 0);
	}
	public T_DIAGNOSTICS(): TerminalNode {
		return this.getToken(HiveSql.T_DIAGNOSTICS, 0);
	}
	public get_diag_stmt_item(): Get_diag_stmt_itemContext {
		return this.getTypedRuleContext(Get_diag_stmt_itemContext, 0) as Get_diag_stmt_itemContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_get_diag_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterGet_diag_stmt) {
	 		listener.enterGet_diag_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitGet_diag_stmt) {
	 		listener.exitGet_diag_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitGet_diag_stmt) {
			return visitor.visitGet_diag_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Get_diag_stmt_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public get_diag_stmt_exception_item(): Get_diag_stmt_exception_itemContext {
		return this.getTypedRuleContext(Get_diag_stmt_exception_itemContext, 0) as Get_diag_stmt_exception_itemContext;
	}
	public get_diag_stmt_rowcount_item(): Get_diag_stmt_rowcount_itemContext {
		return this.getTypedRuleContext(Get_diag_stmt_rowcount_itemContext, 0) as Get_diag_stmt_rowcount_itemContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_get_diag_stmt_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterGet_diag_stmt_item) {
	 		listener.enterGet_diag_stmt_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitGet_diag_stmt_item) {
	 		listener.exitGet_diag_stmt_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitGet_diag_stmt_item) {
			return visitor.visitGet_diag_stmt_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Get_diag_stmt_exception_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_EXCEPTION(): TerminalNode {
		return this.getToken(HiveSql.T_EXCEPTION, 0);
	}
	public L_INT(): TerminalNode {
		return this.getToken(HiveSql.L_INT, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_EQUAL(): TerminalNode {
		return this.getToken(HiveSql.T_EQUAL, 0);
	}
	public T_MESSAGE_TEXT(): TerminalNode {
		return this.getToken(HiveSql.T_MESSAGE_TEXT, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_get_diag_stmt_exception_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterGet_diag_stmt_exception_item) {
	 		listener.enterGet_diag_stmt_exception_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitGet_diag_stmt_exception_item) {
	 		listener.exitGet_diag_stmt_exception_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitGet_diag_stmt_exception_item) {
			return visitor.visitGet_diag_stmt_exception_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Get_diag_stmt_rowcount_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_EQUAL(): TerminalNode {
		return this.getToken(HiveSql.T_EQUAL, 0);
	}
	public T_ROW_COUNT(): TerminalNode {
		return this.getToken(HiveSql.T_ROW_COUNT, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_get_diag_stmt_rowcount_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterGet_diag_stmt_rowcount_item) {
	 		listener.enterGet_diag_stmt_rowcount_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitGet_diag_stmt_rowcount_item) {
	 		listener.exitGet_diag_stmt_rowcount_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitGet_diag_stmt_rowcount_item) {
			return visitor.visitGet_diag_stmt_rowcount_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Grant_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_GRANT(): TerminalNode {
		return this.getToken(HiveSql.T_GRANT, 0);
	}
	public grant_stmt_item_list(): Grant_stmt_itemContext[] {
		return this.getTypedRuleContexts(Grant_stmt_itemContext) as Grant_stmt_itemContext[];
	}
	public grant_stmt_item(i: number): Grant_stmt_itemContext {
		return this.getTypedRuleContext(Grant_stmt_itemContext, i) as Grant_stmt_itemContext;
	}
	public T_TO(): TerminalNode {
		return this.getToken(HiveSql.T_TO, 0);
	}
	public T_ROLE(): TerminalNode {
		return this.getToken(HiveSql.T_ROLE, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_grant_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterGrant_stmt) {
	 		listener.enterGrant_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitGrant_stmt) {
	 		listener.exitGrant_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitGrant_stmt) {
			return visitor.visitGrant_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Grant_stmt_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_EXECUTE(): TerminalNode {
		return this.getToken(HiveSql.T_EXECUTE, 0);
	}
	public T_ON(): TerminalNode {
		return this.getToken(HiveSql.T_ON, 0);
	}
	public T_PROCEDURE(): TerminalNode {
		return this.getToken(HiveSql.T_PROCEDURE, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_grant_stmt_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterGrant_stmt_item) {
	 		listener.enterGrant_stmt_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitGrant_stmt_item) {
	 		listener.exitGrant_stmt_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitGrant_stmt_item) {
			return visitor.visitGrant_stmt_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Leave_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_LEAVE(): TerminalNode {
		return this.getToken(HiveSql.T_LEAVE, 0);
	}
	public L_ID(): TerminalNode {
		return this.getToken(HiveSql.L_ID, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_leave_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterLeave_stmt) {
	 		listener.enterLeave_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitLeave_stmt) {
	 		listener.exitLeave_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitLeave_stmt) {
			return visitor.visitLeave_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Map_object_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_MAP(): TerminalNode {
		return this.getToken(HiveSql.T_MAP, 0);
	}
	public T_OBJECT(): TerminalNode {
		return this.getToken(HiveSql.T_OBJECT, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_TO(): TerminalNode {
		return this.getToken(HiveSql.T_TO, 0);
	}
	public T_AT(): TerminalNode {
		return this.getToken(HiveSql.T_AT, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_map_object_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterMap_object_stmt) {
	 		listener.enterMap_object_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitMap_object_stmt) {
	 		listener.exitMap_object_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitMap_object_stmt) {
			return visitor.visitMap_object_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Open_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_OPEN(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN, 0);
	}
	public L_ID(): TerminalNode {
		return this.getToken(HiveSql.L_ID, 0);
	}
	public T_FOR(): TerminalNode {
		return this.getToken(HiveSql.T_FOR, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_open_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterOpen_stmt) {
	 		listener.enterOpen_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitOpen_stmt) {
	 		listener.exitOpen_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitOpen_stmt) {
			return visitor.visitOpen_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fetch_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_FETCH(): TerminalNode {
		return this.getToken(HiveSql.T_FETCH, 0);
	}
	public L_ID_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.L_ID);
	}
	public L_ID(i: number): TerminalNode {
		return this.getToken(HiveSql.L_ID, i);
	}
	public T_INTO(): TerminalNode {
		return this.getToken(HiveSql.T_INTO, 0);
	}
	public T_FROM(): TerminalNode {
		return this.getToken(HiveSql.T_FROM, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_fetch_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterFetch_stmt) {
	 		listener.enterFetch_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitFetch_stmt) {
	 		listener.exitFetch_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitFetch_stmt) {
			return visitor.visitFetch_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Collect_stats_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_COLLECT(): TerminalNode {
		return this.getToken(HiveSql.T_COLLECT, 0);
	}
	public T_ON(): TerminalNode {
		return this.getToken(HiveSql.T_ON, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public T_STATISTICS(): TerminalNode {
		return this.getToken(HiveSql.T_STATISTICS, 0);
	}
	public T_STATS(): TerminalNode {
		return this.getToken(HiveSql.T_STATS, 0);
	}
	public collect_stats_clause(): Collect_stats_clauseContext {
		return this.getTypedRuleContext(Collect_stats_clauseContext, 0) as Collect_stats_clauseContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_collect_stats_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCollect_stats_stmt) {
	 		listener.enterCollect_stats_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCollect_stats_stmt) {
	 		listener.exitCollect_stats_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCollect_stats_stmt) {
			return visitor.visitCollect_stats_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Collect_stats_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_COLUMN(): TerminalNode {
		return this.getToken(HiveSql.T_COLUMN, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_collect_stats_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCollect_stats_clause) {
	 		listener.enterCollect_stats_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCollect_stats_clause) {
	 		listener.exitCollect_stats_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCollect_stats_clause) {
			return visitor.visitCollect_stats_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Close_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_CLOSE(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE, 0);
	}
	public L_ID(): TerminalNode {
		return this.getToken(HiveSql.L_ID, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_close_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterClose_stmt) {
	 		listener.enterClose_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitClose_stmt) {
	 		listener.exitClose_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitClose_stmt) {
			return visitor.visitClose_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cmp_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_CMP(): TerminalNode {
		return this.getToken(HiveSql.T_CMP, 0);
	}
	public cmp_source_list(): Cmp_sourceContext[] {
		return this.getTypedRuleContexts(Cmp_sourceContext) as Cmp_sourceContext[];
	}
	public cmp_source(i: number): Cmp_sourceContext {
		return this.getTypedRuleContext(Cmp_sourceContext, i) as Cmp_sourceContext;
	}
	public T_COMMA(): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, 0);
	}
	public T_ROW_COUNT(): TerminalNode {
		return this.getToken(HiveSql.T_ROW_COUNT, 0);
	}
	public T_SUM(): TerminalNode {
		return this.getToken(HiveSql.T_SUM, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_cmp_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCmp_stmt) {
	 		listener.enterCmp_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCmp_stmt) {
	 		listener.exitCmp_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCmp_stmt) {
			return visitor.visitCmp_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cmp_sourceContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public T_AT(): TerminalNode {
		return this.getToken(HiveSql.T_AT, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public where_clause(): Where_clauseContext {
		return this.getTypedRuleContext(Where_clauseContext, 0) as Where_clauseContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_cmp_source;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCmp_source) {
	 		listener.enterCmp_source(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCmp_source) {
	 		listener.exitCmp_source(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCmp_source) {
			return visitor.visitCmp_source(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Copy_from_local_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_COPY(): TerminalNode {
		return this.getToken(HiveSql.T_COPY, 0);
	}
	public T_FROM(): TerminalNode {
		return this.getToken(HiveSql.T_FROM, 0);
	}
	public T_LOCAL(): TerminalNode {
		return this.getToken(HiveSql.T_LOCAL, 0);
	}
	public copy_source_list(): Copy_sourceContext[] {
		return this.getTypedRuleContexts(Copy_sourceContext) as Copy_sourceContext[];
	}
	public copy_source(i: number): Copy_sourceContext {
		return this.getTypedRuleContext(Copy_sourceContext, i) as Copy_sourceContext;
	}
	public T_TO(): TerminalNode {
		return this.getToken(HiveSql.T_TO, 0);
	}
	public copy_target(): Copy_targetContext {
		return this.getTypedRuleContext(Copy_targetContext, 0) as Copy_targetContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
	public copy_file_option_list(): Copy_file_optionContext[] {
		return this.getTypedRuleContexts(Copy_file_optionContext) as Copy_file_optionContext[];
	}
	public copy_file_option(i: number): Copy_file_optionContext {
		return this.getTypedRuleContext(Copy_file_optionContext, i) as Copy_file_optionContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_copy_from_local_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCopy_from_local_stmt) {
	 		listener.enterCopy_from_local_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCopy_from_local_stmt) {
	 		listener.exitCopy_from_local_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCopy_from_local_stmt) {
			return visitor.visitCopy_from_local_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Copy_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_COPY(): TerminalNode {
		return this.getToken(HiveSql.T_COPY, 0);
	}
	public T_TO(): TerminalNode {
		return this.getToken(HiveSql.T_TO, 0);
	}
	public copy_target(): Copy_targetContext {
		return this.getTypedRuleContext(Copy_targetContext, 0) as Copy_targetContext;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public T_HDFS(): TerminalNode {
		return this.getToken(HiveSql.T_HDFS, 0);
	}
	public copy_option_list(): Copy_optionContext[] {
		return this.getTypedRuleContexts(Copy_optionContext) as Copy_optionContext[];
	}
	public copy_option(i: number): Copy_optionContext {
		return this.getTypedRuleContext(Copy_optionContext, i) as Copy_optionContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_copy_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCopy_stmt) {
	 		listener.enterCopy_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCopy_stmt) {
	 		listener.exitCopy_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCopy_stmt) {
			return visitor.visitCopy_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Copy_sourceContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public file_name(): File_nameContext {
		return this.getTypedRuleContext(File_nameContext, 0) as File_nameContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_copy_source;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCopy_source) {
	 		listener.enterCopy_source(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCopy_source) {
	 		listener.exitCopy_source(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCopy_source) {
			return visitor.visitCopy_source(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Copy_targetContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public file_name(): File_nameContext {
		return this.getTypedRuleContext(File_nameContext, 0) as File_nameContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_copy_target;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCopy_target) {
	 		listener.enterCopy_target(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCopy_target) {
	 		listener.exitCopy_target(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCopy_target) {
			return visitor.visitCopy_target(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Copy_optionContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_AT(): TerminalNode {
		return this.getToken(HiveSql.T_AT, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_BATCHSIZE(): TerminalNode {
		return this.getToken(HiveSql.T_BATCHSIZE, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public T_DELIMITER(): TerminalNode {
		return this.getToken(HiveSql.T_DELIMITER, 0);
	}
	public T_SQLINSERT(): TerminalNode {
		return this.getToken(HiveSql.T_SQLINSERT, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_copy_option;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCopy_option) {
	 		listener.enterCopy_option(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCopy_option) {
	 		listener.exitCopy_option(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCopy_option) {
			return visitor.visitCopy_option(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Copy_file_optionContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_DELETE(): TerminalNode {
		return this.getToken(HiveSql.T_DELETE, 0);
	}
	public T_IGNORE(): TerminalNode {
		return this.getToken(HiveSql.T_IGNORE, 0);
	}
	public T_OVERWRITE(): TerminalNode {
		return this.getToken(HiveSql.T_OVERWRITE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_copy_file_option;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCopy_file_option) {
	 		listener.enterCopy_file_option(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCopy_file_option) {
	 		listener.exitCopy_file_option(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCopy_file_option) {
			return visitor.visitCopy_file_option(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Commit_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_COMMIT(): TerminalNode {
		return this.getToken(HiveSql.T_COMMIT, 0);
	}
	public T_WORK(): TerminalNode {
		return this.getToken(HiveSql.T_WORK, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_commit_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCommit_stmt) {
	 		listener.enterCommit_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCommit_stmt) {
	 		listener.exitCommit_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCommit_stmt) {
			return visitor.visitCommit_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_index_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_CREATE(): TerminalNode {
		return this.getToken(HiveSql.T_CREATE, 0);
	}
	public T_INDEX(): TerminalNode {
		return this.getToken(HiveSql.T_INDEX, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_ON(): TerminalNode {
		return this.getToken(HiveSql.T_ON, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public create_index_col_list(): Create_index_colContext[] {
		return this.getTypedRuleContexts(Create_index_colContext) as Create_index_colContext[];
	}
	public create_index_col(i: number): Create_index_colContext {
		return this.getTypedRuleContext(Create_index_colContext, i) as Create_index_colContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public T_UNIQUE(): TerminalNode {
		return this.getToken(HiveSql.T_UNIQUE, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_index_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_index_stmt) {
	 		listener.enterCreate_index_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_index_stmt) {
	 		listener.exitCreate_index_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_index_stmt) {
			return visitor.visitCreate_index_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_index_colContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_ASC(): TerminalNode {
		return this.getToken(HiveSql.T_ASC, 0);
	}
	public T_DESC(): TerminalNode {
		return this.getToken(HiveSql.T_DESC, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_create_index_col;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCreate_index_col) {
	 		listener.enterCreate_index_col(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCreate_index_col) {
	 		listener.exitCreate_index_col(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCreate_index_col) {
			return visitor.visitCreate_index_col(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Index_storage_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public index_mssql_storage_clause(): Index_mssql_storage_clauseContext {
		return this.getTypedRuleContext(Index_mssql_storage_clauseContext, 0) as Index_mssql_storage_clauseContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_index_storage_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterIndex_storage_clause) {
	 		listener.enterIndex_storage_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitIndex_storage_clause) {
	 		listener.exitIndex_storage_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitIndex_storage_clause) {
			return visitor.visitIndex_storage_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Index_mssql_storage_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_WITH(): TerminalNode {
		return this.getToken(HiveSql.T_WITH, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public T_EQUAL_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_EQUAL);
	}
	public T_EQUAL(i: number): TerminalNode {
		return this.getToken(HiveSql.T_EQUAL, i);
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
	public create_table_options_mssql_item_list(): Create_table_options_mssql_itemContext[] {
		return this.getTypedRuleContexts(Create_table_options_mssql_itemContext) as Create_table_options_mssql_itemContext[];
	}
	public create_table_options_mssql_item(i: number): Create_table_options_mssql_itemContext {
		return this.getTypedRuleContext(Create_table_options_mssql_itemContext, i) as Create_table_options_mssql_itemContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_index_mssql_storage_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterIndex_mssql_storage_clause) {
	 		listener.enterIndex_mssql_storage_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitIndex_mssql_storage_clause) {
	 		listener.exitIndex_mssql_storage_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitIndex_mssql_storage_clause) {
			return visitor.visitIndex_mssql_storage_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Print_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_PRINT(): TerminalNode {
		return this.getToken(HiveSql.T_PRINT, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_print_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterPrint_stmt) {
	 		listener.enterPrint_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitPrint_stmt) {
	 		listener.exitPrint_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitPrint_stmt) {
			return visitor.visitPrint_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Quit_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_QUIT(): TerminalNode {
		return this.getToken(HiveSql.T_QUIT, 0);
	}
	public T_DOT(): TerminalNode {
		return this.getToken(HiveSql.T_DOT, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_quit_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterQuit_stmt) {
	 		listener.enterQuit_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitQuit_stmt) {
	 		listener.exitQuit_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitQuit_stmt) {
			return visitor.visitQuit_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raise_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_RAISE(): TerminalNode {
		return this.getToken(HiveSql.T_RAISE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_raise_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterRaise_stmt) {
	 		listener.enterRaise_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitRaise_stmt) {
	 		listener.exitRaise_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitRaise_stmt) {
			return visitor.visitRaise_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Resignal_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_RESIGNAL(): TerminalNode {
		return this.getToken(HiveSql.T_RESIGNAL, 0);
	}
	public T_SQLSTATE(): TerminalNode {
		return this.getToken(HiveSql.T_SQLSTATE, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_VALUE(): TerminalNode {
		return this.getToken(HiveSql.T_VALUE, 0);
	}
	public T_SET(): TerminalNode {
		return this.getToken(HiveSql.T_SET, 0);
	}
	public T_MESSAGE_TEXT(): TerminalNode {
		return this.getToken(HiveSql.T_MESSAGE_TEXT, 0);
	}
	public T_EQUAL(): TerminalNode {
		return this.getToken(HiveSql.T_EQUAL, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_resignal_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterResignal_stmt) {
	 		listener.enterResignal_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitResignal_stmt) {
	 		listener.exitResignal_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitResignal_stmt) {
			return visitor.visitResignal_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_RETURN(): TerminalNode {
		return this.getToken(HiveSql.T_RETURN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_return_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterReturn_stmt) {
	 		listener.enterReturn_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitReturn_stmt) {
	 		listener.exitReturn_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitReturn_stmt) {
			return visitor.visitReturn_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rollback_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_ROLLBACK(): TerminalNode {
		return this.getToken(HiveSql.T_ROLLBACK, 0);
	}
	public T_WORK(): TerminalNode {
		return this.getToken(HiveSql.T_WORK, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_rollback_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterRollback_stmt) {
	 		listener.enterRollback_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitRollback_stmt) {
	 		listener.exitRollback_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitRollback_stmt) {
			return visitor.visitRollback_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Set_session_optionContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public set_current_schema_option(): Set_current_schema_optionContext {
		return this.getTypedRuleContext(Set_current_schema_optionContext, 0) as Set_current_schema_optionContext;
	}
	public set_mssql_session_option(): Set_mssql_session_optionContext {
		return this.getTypedRuleContext(Set_mssql_session_optionContext, 0) as Set_mssql_session_optionContext;
	}
	public set_teradata_session_option(): Set_teradata_session_optionContext {
		return this.getTypedRuleContext(Set_teradata_session_optionContext, 0) as Set_teradata_session_optionContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_set_session_option;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSet_session_option) {
	 		listener.enterSet_session_option(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSet_session_option) {
	 		listener.exitSet_session_option(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSet_session_option) {
			return visitor.visitSet_session_option(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Set_current_schema_optionContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public T_CURRENT_SCHEMA(): TerminalNode {
		return this.getToken(HiveSql.T_CURRENT_SCHEMA, 0);
	}
	public T_EQUAL(): TerminalNode {
		return this.getToken(HiveSql.T_EQUAL, 0);
	}
	public T_SCHEMA(): TerminalNode {
		return this.getToken(HiveSql.T_SCHEMA, 0);
	}
	public T_CURRENT(): TerminalNode {
		return this.getToken(HiveSql.T_CURRENT, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_set_current_schema_option;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSet_current_schema_option) {
	 		listener.enterSet_current_schema_option(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSet_current_schema_option) {
	 		listener.exitSet_current_schema_option(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSet_current_schema_option) {
			return visitor.visitSet_current_schema_option(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Set_mssql_session_optionContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_ANSI_NULLS(): TerminalNode {
		return this.getToken(HiveSql.T_ANSI_NULLS, 0);
	}
	public T_ANSI_PADDING(): TerminalNode {
		return this.getToken(HiveSql.T_ANSI_PADDING, 0);
	}
	public T_NOCOUNT(): TerminalNode {
		return this.getToken(HiveSql.T_NOCOUNT, 0);
	}
	public T_QUOTED_IDENTIFIER(): TerminalNode {
		return this.getToken(HiveSql.T_QUOTED_IDENTIFIER, 0);
	}
	public T_XACT_ABORT(): TerminalNode {
		return this.getToken(HiveSql.T_XACT_ABORT, 0);
	}
	public T_ON(): TerminalNode {
		return this.getToken(HiveSql.T_ON, 0);
	}
	public T_OFF(): TerminalNode {
		return this.getToken(HiveSql.T_OFF, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_set_mssql_session_option;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSet_mssql_session_option) {
	 		listener.enterSet_mssql_session_option(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSet_mssql_session_option) {
	 		listener.exitSet_mssql_session_option(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSet_mssql_session_option) {
			return visitor.visitSet_mssql_session_option(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Set_teradata_session_optionContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_QUERY_BAND(): TerminalNode {
		return this.getToken(HiveSql.T_QUERY_BAND, 0);
	}
	public T_EQUAL(): TerminalNode {
		return this.getToken(HiveSql.T_EQUAL, 0);
	}
	public T_FOR(): TerminalNode {
		return this.getToken(HiveSql.T_FOR, 0);
	}
	public T_TRANSACTION(): TerminalNode {
		return this.getToken(HiveSql.T_TRANSACTION, 0);
	}
	public T_SESSION(): TerminalNode {
		return this.getToken(HiveSql.T_SESSION, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public T_NONE(): TerminalNode {
		return this.getToken(HiveSql.T_NONE, 0);
	}
	public T_UPDATE(): TerminalNode {
		return this.getToken(HiveSql.T_UPDATE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_set_teradata_session_option;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSet_teradata_session_option) {
	 		listener.enterSet_teradata_session_option(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSet_teradata_session_option) {
	 		listener.exitSet_teradata_session_option(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSet_teradata_session_option) {
			return visitor.visitSet_teradata_session_option(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Signal_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_SIGNAL(): TerminalNode {
		return this.getToken(HiveSql.T_SIGNAL, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_signal_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSignal_stmt) {
	 		listener.enterSignal_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSignal_stmt) {
	 		listener.exitSignal_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSignal_stmt) {
			return visitor.visitSignal_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Summary_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_SUMMARY(): TerminalNode {
		return this.getToken(HiveSql.T_SUMMARY, 0);
	}
	public T_FOR(): TerminalNode {
		return this.getToken(HiveSql.T_FOR, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public T_TOP(): TerminalNode {
		return this.getToken(HiveSql.T_TOP, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public where_clause(): Where_clauseContext {
		return this.getTypedRuleContext(Where_clauseContext, 0) as Where_clauseContext;
	}
	public T_LIMIT(): TerminalNode {
		return this.getToken(HiveSql.T_LIMIT, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_summary_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSummary_stmt) {
	 		listener.enterSummary_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSummary_stmt) {
	 		listener.exitSummary_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSummary_stmt) {
			return visitor.visitSummary_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Truncate_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_TRUNCATE(): TerminalNode {
		return this.getToken(HiveSql.T_TRUNCATE, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public T_TABLE(): TerminalNode {
		return this.getToken(HiveSql.T_TABLE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_truncate_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterTruncate_stmt) {
	 		listener.enterTruncate_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitTruncate_stmt) {
	 		listener.exitTruncate_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitTruncate_stmt) {
			return visitor.visitTruncate_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Use_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_USE(): TerminalNode {
		return this.getToken(HiveSql.T_USE, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_use_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterUse_stmt) {
	 		listener.enterUse_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitUse_stmt) {
	 		listener.exitUse_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitUse_stmt) {
			return visitor.visitUse_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Values_into_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_VALUES(): TerminalNode {
		return this.getToken(HiveSql.T_VALUES, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_INTO(): TerminalNode {
		return this.getToken(HiveSql.T_INTO, 0);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public T_OPEN_P_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_OPEN_P);
	}
	public T_OPEN_P(i: number): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, i);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
	public T_CLOSE_P_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_CLOSE_P);
	}
	public T_CLOSE_P(i: number): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_values_into_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterValues_into_stmt) {
	 		listener.enterValues_into_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitValues_into_stmt) {
	 		listener.exitValues_into_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitValues_into_stmt) {
			return visitor.visitValues_into_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class While_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_WHILE_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_WHILE);
	}
	public T_WHILE(i: number): TerminalNode {
		return this.getToken(HiveSql.T_WHILE, i);
	}
	public bool_expr(): Bool_exprContext {
		return this.getTypedRuleContext(Bool_exprContext, 0) as Bool_exprContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public T_END(): TerminalNode {
		return this.getToken(HiveSql.T_END, 0);
	}
	public T_DO(): TerminalNode {
		return this.getToken(HiveSql.T_DO, 0);
	}
	public T_LOOP_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_LOOP);
	}
	public T_LOOP(i: number): TerminalNode {
		return this.getToken(HiveSql.T_LOOP, i);
	}
	public T_THEN(): TerminalNode {
		return this.getToken(HiveSql.T_THEN, 0);
	}
	public T_BEGIN(): TerminalNode {
		return this.getToken(HiveSql.T_BEGIN, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_while_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterWhile_stmt) {
	 		listener.enterWhile_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitWhile_stmt) {
	 		listener.exitWhile_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitWhile_stmt) {
			return visitor.visitWhile_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_cursor_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_FOR(): TerminalNode {
		return this.getToken(HiveSql.T_FOR, 0);
	}
	public L_ID(): TerminalNode {
		return this.getToken(HiveSql.L_ID, 0);
	}
	public T_IN(): TerminalNode {
		return this.getToken(HiveSql.T_IN, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public T_LOOP_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_LOOP);
	}
	public T_LOOP(i: number): TerminalNode {
		return this.getToken(HiveSql.T_LOOP, i);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public T_END(): TerminalNode {
		return this.getToken(HiveSql.T_END, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_for_cursor_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterFor_cursor_stmt) {
	 		listener.enterFor_cursor_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitFor_cursor_stmt) {
	 		listener.exitFor_cursor_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitFor_cursor_stmt) {
			return visitor.visitFor_cursor_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_range_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_FOR(): TerminalNode {
		return this.getToken(HiveSql.T_FOR, 0);
	}
	public L_ID(): TerminalNode {
		return this.getToken(HiveSql.L_ID, 0);
	}
	public T_IN(): TerminalNode {
		return this.getToken(HiveSql.T_IN, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_DOT2(): TerminalNode {
		return this.getToken(HiveSql.T_DOT2, 0);
	}
	public T_LOOP_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_LOOP);
	}
	public T_LOOP(i: number): TerminalNode {
		return this.getToken(HiveSql.T_LOOP, i);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public T_END(): TerminalNode {
		return this.getToken(HiveSql.T_END, 0);
	}
	public T_REVERSE(): TerminalNode {
		return this.getToken(HiveSql.T_REVERSE, 0);
	}
	public T_BY(): TerminalNode {
		return this.getToken(HiveSql.T_BY, 0);
	}
	public T_STEP(): TerminalNode {
		return this.getToken(HiveSql.T_STEP, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_for_range_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterFor_range_stmt) {
	 		listener.enterFor_range_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitFor_range_stmt) {
	 		listener.exitFor_range_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitFor_range_stmt) {
			return visitor.visitFor_range_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_LABEL(): TerminalNode {
		return this.getToken(HiveSql.L_LABEL, 0);
	}
	public T_LESS_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_LESS);
	}
	public T_LESS(i: number): TerminalNode {
		return this.getToken(HiveSql.T_LESS, i);
	}
	public L_ID(): TerminalNode {
		return this.getToken(HiveSql.L_ID, 0);
	}
	public T_GREATER_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_GREATER);
	}
	public T_GREATER(i: number): TerminalNode {
		return this.getToken(HiveSql.T_GREATER, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_label;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterLabel) {
	 		listener.enterLabel(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitLabel) {
	 		listener.exitLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Using_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_USING(): TerminalNode {
		return this.getToken(HiveSql.T_USING, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_using_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterUsing_clause) {
	 		listener.enterUsing_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitUsing_clause) {
	 		listener.exitUsing_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitUsing_clause) {
			return visitor.visitUsing_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fullselect_stmt(): Fullselect_stmtContext {
		return this.getTypedRuleContext(Fullselect_stmtContext, 0) as Fullselect_stmtContext;
	}
	public cte_select_stmt(): Cte_select_stmtContext {
		return this.getTypedRuleContext(Cte_select_stmtContext, 0) as Cte_select_stmtContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_select_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSelect_stmt) {
	 		listener.enterSelect_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSelect_stmt) {
	 		listener.exitSelect_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSelect_stmt) {
			return visitor.visitSelect_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cte_select_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_WITH(): TerminalNode {
		return this.getToken(HiveSql.T_WITH, 0);
	}
	public cte_select_stmt_item_list(): Cte_select_stmt_itemContext[] {
		return this.getTypedRuleContexts(Cte_select_stmt_itemContext) as Cte_select_stmt_itemContext[];
	}
	public cte_select_stmt_item(i: number): Cte_select_stmt_itemContext {
		return this.getTypedRuleContext(Cte_select_stmt_itemContext, i) as Cte_select_stmt_itemContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_cte_select_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCte_select_stmt) {
	 		listener.enterCte_select_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCte_select_stmt) {
	 		listener.exitCte_select_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCte_select_stmt) {
			return visitor.visitCte_select_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cte_select_stmt_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_AS(): TerminalNode {
		return this.getToken(HiveSql.T_AS, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public fullselect_stmt(): Fullselect_stmtContext {
		return this.getTypedRuleContext(Fullselect_stmtContext, 0) as Fullselect_stmtContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public cte_select_cols(): Cte_select_colsContext {
		return this.getTypedRuleContext(Cte_select_colsContext, 0) as Cte_select_colsContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_cte_select_stmt_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCte_select_stmt_item) {
	 		listener.enterCte_select_stmt_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCte_select_stmt_item) {
	 		listener.exitCte_select_stmt_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCte_select_stmt_item) {
			return visitor.visitCte_select_stmt_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cte_select_colsContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_cte_select_cols;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterCte_select_cols) {
	 		listener.enterCte_select_cols(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitCte_select_cols) {
	 		listener.exitCte_select_cols(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitCte_select_cols) {
			return visitor.visitCte_select_cols(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fullselect_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fullselect_stmt_item_list(): Fullselect_stmt_itemContext[] {
		return this.getTypedRuleContexts(Fullselect_stmt_itemContext) as Fullselect_stmt_itemContext[];
	}
	public fullselect_stmt_item(i: number): Fullselect_stmt_itemContext {
		return this.getTypedRuleContext(Fullselect_stmt_itemContext, i) as Fullselect_stmt_itemContext;
	}
	public fullselect_set_clause_list(): Fullselect_set_clauseContext[] {
		return this.getTypedRuleContexts(Fullselect_set_clauseContext) as Fullselect_set_clauseContext[];
	}
	public fullselect_set_clause(i: number): Fullselect_set_clauseContext {
		return this.getTypedRuleContext(Fullselect_set_clauseContext, i) as Fullselect_set_clauseContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_fullselect_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterFullselect_stmt) {
	 		listener.enterFullselect_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitFullselect_stmt) {
	 		listener.exitFullselect_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitFullselect_stmt) {
			return visitor.visitFullselect_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fullselect_stmt_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public subselect_stmt(): Subselect_stmtContext {
		return this.getTypedRuleContext(Subselect_stmtContext, 0) as Subselect_stmtContext;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public fullselect_stmt(): Fullselect_stmtContext {
		return this.getTypedRuleContext(Fullselect_stmtContext, 0) as Fullselect_stmtContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_fullselect_stmt_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterFullselect_stmt_item) {
	 		listener.enterFullselect_stmt_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitFullselect_stmt_item) {
	 		listener.exitFullselect_stmt_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitFullselect_stmt_item) {
			return visitor.visitFullselect_stmt_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fullselect_set_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_UNION(): TerminalNode {
		return this.getToken(HiveSql.T_UNION, 0);
	}
	public T_ALL(): TerminalNode {
		return this.getToken(HiveSql.T_ALL, 0);
	}
	public T_EXCEPT(): TerminalNode {
		return this.getToken(HiveSql.T_EXCEPT, 0);
	}
	public T_INTERSECT(): TerminalNode {
		return this.getToken(HiveSql.T_INTERSECT, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_fullselect_set_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterFullselect_set_clause) {
	 		listener.enterFullselect_set_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitFullselect_set_clause) {
	 		listener.exitFullselect_set_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitFullselect_set_clause) {
			return visitor.visitFullselect_set_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Subselect_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_list(): Select_listContext {
		return this.getTypedRuleContext(Select_listContext, 0) as Select_listContext;
	}
	public T_SELECT(): TerminalNode {
		return this.getToken(HiveSql.T_SELECT, 0);
	}
	public T_SEL(): TerminalNode {
		return this.getToken(HiveSql.T_SEL, 0);
	}
	public into_clause(): Into_clauseContext {
		return this.getTypedRuleContext(Into_clauseContext, 0) as Into_clauseContext;
	}
	public from_clause(): From_clauseContext {
		return this.getTypedRuleContext(From_clauseContext, 0) as From_clauseContext;
	}
	public where_clause(): Where_clauseContext {
		return this.getTypedRuleContext(Where_clauseContext, 0) as Where_clauseContext;
	}
	public group_by_clause(): Group_by_clauseContext {
		return this.getTypedRuleContext(Group_by_clauseContext, 0) as Group_by_clauseContext;
	}
	public having_clause(): Having_clauseContext {
		return this.getTypedRuleContext(Having_clauseContext, 0) as Having_clauseContext;
	}
	public qualify_clause(): Qualify_clauseContext {
		return this.getTypedRuleContext(Qualify_clauseContext, 0) as Qualify_clauseContext;
	}
	public order_by_clause(): Order_by_clauseContext {
		return this.getTypedRuleContext(Order_by_clauseContext, 0) as Order_by_clauseContext;
	}
	public select_options(): Select_optionsContext {
		return this.getTypedRuleContext(Select_optionsContext, 0) as Select_optionsContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_subselect_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSubselect_stmt) {
	 		listener.enterSubselect_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSubselect_stmt) {
	 		listener.exitSubselect_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSubselect_stmt) {
			return visitor.visitSubselect_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_listContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_list_item_list(): Select_list_itemContext[] {
		return this.getTypedRuleContexts(Select_list_itemContext) as Select_list_itemContext[];
	}
	public select_list_item(i: number): Select_list_itemContext {
		return this.getTypedRuleContext(Select_list_itemContext, i) as Select_list_itemContext;
	}
	public select_list_set(): Select_list_setContext {
		return this.getTypedRuleContext(Select_list_setContext, 0) as Select_list_setContext;
	}
	public select_list_limit(): Select_list_limitContext {
		return this.getTypedRuleContext(Select_list_limitContext, 0) as Select_list_limitContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_select_list;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSelect_list) {
	 		listener.enterSelect_list(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSelect_list) {
	 		listener.exitSelect_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSelect_list) {
			return visitor.visitSelect_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_list_setContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_ALL(): TerminalNode {
		return this.getToken(HiveSql.T_ALL, 0);
	}
	public T_DISTINCT(): TerminalNode {
		return this.getToken(HiveSql.T_DISTINCT, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_select_list_set;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSelect_list_set) {
	 		listener.enterSelect_list_set(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSelect_list_set) {
	 		listener.exitSelect_list_set(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSelect_list_set) {
			return visitor.visitSelect_list_set(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_list_limitContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_TOP(): TerminalNode {
		return this.getToken(HiveSql.T_TOP, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_select_list_limit;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSelect_list_limit) {
	 		listener.enterSelect_list_limit(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSelect_list_limit) {
	 		listener.exitSelect_list_limit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSelect_list_limit) {
			return visitor.visitSelect_list_limit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_list_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public select_list_asterisk(): Select_list_asteriskContext {
		return this.getTypedRuleContext(Select_list_asteriskContext, 0) as Select_list_asteriskContext;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_EQUAL(): TerminalNode {
		return this.getToken(HiveSql.T_EQUAL, 0);
	}
	public select_list_alias(): Select_list_aliasContext {
		return this.getTypedRuleContext(Select_list_aliasContext, 0) as Select_list_aliasContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_select_list_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSelect_list_item) {
	 		listener.enterSelect_list_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSelect_list_item) {
	 		listener.exitSelect_list_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSelect_list_item) {
			return visitor.visitSelect_list_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_list_aliasContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_AS(): TerminalNode {
		return this.getToken(HiveSql.T_AS, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public T_TITLE(): TerminalNode {
		return this.getToken(HiveSql.T_TITLE, 0);
	}
	public L_S_STRING(): TerminalNode {
		return this.getToken(HiveSql.L_S_STRING, 0);
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_select_list_alias;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSelect_list_alias) {
	 		listener.enterSelect_list_alias(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSelect_list_alias) {
	 		listener.exitSelect_list_alias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSelect_list_alias) {
			return visitor.visitSelect_list_alias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_list_asteriskContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_MUL(): TerminalNode {
		return this.getToken(HiveSql.T_MUL, 0);
	}
	public L_ID(): TerminalNode {
		return this.getToken(HiveSql.L_ID, 0);
	}
	public T_DOT(): TerminalNode {
		return this.getToken(HiveSql.T_DOT, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_select_list_asterisk;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSelect_list_asterisk) {
	 		listener.enterSelect_list_asterisk(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSelect_list_asterisk) {
	 		listener.exitSelect_list_asterisk(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSelect_list_asterisk) {
			return visitor.visitSelect_list_asterisk(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Into_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_INTO(): TerminalNode {
		return this.getToken(HiveSql.T_INTO, 0);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_into_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterInto_clause) {
	 		listener.enterInto_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitInto_clause) {
	 		listener.exitInto_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitInto_clause) {
			return visitor.visitInto_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class From_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_FROM(): TerminalNode {
		return this.getToken(HiveSql.T_FROM, 0);
	}
	public from_table_clause(): From_table_clauseContext {
		return this.getTypedRuleContext(From_table_clauseContext, 0) as From_table_clauseContext;
	}
	public from_join_clause_list(): From_join_clauseContext[] {
		return this.getTypedRuleContexts(From_join_clauseContext) as From_join_clauseContext[];
	}
	public from_join_clause(i: number): From_join_clauseContext {
		return this.getTypedRuleContext(From_join_clauseContext, i) as From_join_clauseContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_from_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterFrom_clause) {
	 		listener.enterFrom_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitFrom_clause) {
	 		listener.exitFrom_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitFrom_clause) {
			return visitor.visitFrom_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class From_table_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public from_table_name_clause(): From_table_name_clauseContext {
		return this.getTypedRuleContext(From_table_name_clauseContext, 0) as From_table_name_clauseContext;
	}
	public from_subselect_clause(): From_subselect_clauseContext {
		return this.getTypedRuleContext(From_subselect_clauseContext, 0) as From_subselect_clauseContext;
	}
	public from_table_values_clause(): From_table_values_clauseContext {
		return this.getTypedRuleContext(From_table_values_clauseContext, 0) as From_table_values_clauseContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_from_table_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterFrom_table_clause) {
	 		listener.enterFrom_table_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitFrom_table_clause) {
	 		listener.exitFrom_table_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitFrom_table_clause) {
			return visitor.visitFrom_table_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class From_table_name_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public from_alias_clause(): From_alias_clauseContext {
		return this.getTypedRuleContext(From_alias_clauseContext, 0) as From_alias_clauseContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_from_table_name_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterFrom_table_name_clause) {
	 		listener.enterFrom_table_name_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitFrom_table_name_clause) {
	 		listener.exitFrom_table_name_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitFrom_table_name_clause) {
			return visitor.visitFrom_table_name_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class From_subselect_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public from_alias_clause(): From_alias_clauseContext {
		return this.getTypedRuleContext(From_alias_clauseContext, 0) as From_alias_clauseContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_from_subselect_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterFrom_subselect_clause) {
	 		listener.enterFrom_subselect_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitFrom_subselect_clause) {
	 		listener.exitFrom_subselect_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitFrom_subselect_clause) {
			return visitor.visitFrom_subselect_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class From_join_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_COMMA(): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, 0);
	}
	public from_table_clause(): From_table_clauseContext {
		return this.getTypedRuleContext(From_table_clauseContext, 0) as From_table_clauseContext;
	}
	public from_join_type_clause(): From_join_type_clauseContext {
		return this.getTypedRuleContext(From_join_type_clauseContext, 0) as From_join_type_clauseContext;
	}
	public T_ON(): TerminalNode {
		return this.getToken(HiveSql.T_ON, 0);
	}
	public bool_expr(): Bool_exprContext {
		return this.getTypedRuleContext(Bool_exprContext, 0) as Bool_exprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_from_join_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterFrom_join_clause) {
	 		listener.enterFrom_join_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitFrom_join_clause) {
	 		listener.exitFrom_join_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitFrom_join_clause) {
			return visitor.visitFrom_join_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class From_join_type_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_JOIN(): TerminalNode {
		return this.getToken(HiveSql.T_JOIN, 0);
	}
	public T_INNER(): TerminalNode {
		return this.getToken(HiveSql.T_INNER, 0);
	}
	public T_LEFT(): TerminalNode {
		return this.getToken(HiveSql.T_LEFT, 0);
	}
	public T_RIGHT(): TerminalNode {
		return this.getToken(HiveSql.T_RIGHT, 0);
	}
	public T_FULL(): TerminalNode {
		return this.getToken(HiveSql.T_FULL, 0);
	}
	public T_OUTER(): TerminalNode {
		return this.getToken(HiveSql.T_OUTER, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_from_join_type_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterFrom_join_type_clause) {
	 		listener.enterFrom_join_type_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitFrom_join_type_clause) {
	 		listener.exitFrom_join_type_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitFrom_join_type_clause) {
			return visitor.visitFrom_join_type_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class From_table_values_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_TABLE(): TerminalNode {
		return this.getToken(HiveSql.T_TABLE, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public T_VALUES(): TerminalNode {
		return this.getToken(HiveSql.T_VALUES, 0);
	}
	public from_table_values_row_list(): From_table_values_rowContext[] {
		return this.getTypedRuleContexts(From_table_values_rowContext) as From_table_values_rowContext[];
	}
	public from_table_values_row(i: number): From_table_values_rowContext {
		return this.getTypedRuleContext(From_table_values_rowContext, i) as From_table_values_rowContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
	public from_alias_clause(): From_alias_clauseContext {
		return this.getTypedRuleContext(From_alias_clauseContext, 0) as From_alias_clauseContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_from_table_values_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterFrom_table_values_clause) {
	 		listener.enterFrom_table_values_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitFrom_table_values_clause) {
	 		listener.exitFrom_table_values_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitFrom_table_values_clause) {
			return visitor.visitFrom_table_values_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class From_table_values_rowContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_from_table_values_row;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterFrom_table_values_row) {
	 		listener.enterFrom_table_values_row(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitFrom_table_values_row) {
	 		listener.exitFrom_table_values_row(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitFrom_table_values_row) {
			return visitor.visitFrom_table_values_row(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class From_alias_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_AS(): TerminalNode {
		return this.getToken(HiveSql.T_AS, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public L_ID_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.L_ID);
	}
	public L_ID(i: number): TerminalNode {
		return this.getToken(HiveSql.L_ID, i);
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_from_alias_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterFrom_alias_clause) {
	 		listener.enterFrom_alias_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitFrom_alias_clause) {
	 		listener.exitFrom_alias_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitFrom_alias_clause) {
			return visitor.visitFrom_alias_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Table_nameContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_table_name;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterTable_name) {
	 		listener.enterTable_name(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitTable_name) {
	 		listener.exitTable_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitTable_name) {
			return visitor.visitTable_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Where_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_WHERE(): TerminalNode {
		return this.getToken(HiveSql.T_WHERE, 0);
	}
	public bool_expr(): Bool_exprContext {
		return this.getTypedRuleContext(Bool_exprContext, 0) as Bool_exprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_where_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterWhere_clause) {
	 		listener.enterWhere_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitWhere_clause) {
	 		listener.exitWhere_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitWhere_clause) {
			return visitor.visitWhere_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Group_by_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_GROUP(): TerminalNode {
		return this.getToken(HiveSql.T_GROUP, 0);
	}
	public T_BY(): TerminalNode {
		return this.getToken(HiveSql.T_BY, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_group_by_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterGroup_by_clause) {
	 		listener.enterGroup_by_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitGroup_by_clause) {
	 		listener.exitGroup_by_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitGroup_by_clause) {
			return visitor.visitGroup_by_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Having_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_HAVING(): TerminalNode {
		return this.getToken(HiveSql.T_HAVING, 0);
	}
	public bool_expr(): Bool_exprContext {
		return this.getTypedRuleContext(Bool_exprContext, 0) as Bool_exprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_having_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterHaving_clause) {
	 		listener.enterHaving_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitHaving_clause) {
	 		listener.exitHaving_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitHaving_clause) {
			return visitor.visitHaving_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Qualify_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_QUALIFY(): TerminalNode {
		return this.getToken(HiveSql.T_QUALIFY, 0);
	}
	public bool_expr(): Bool_exprContext {
		return this.getTypedRuleContext(Bool_exprContext, 0) as Bool_exprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_qualify_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterQualify_clause) {
	 		listener.enterQualify_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitQualify_clause) {
	 		listener.exitQualify_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitQualify_clause) {
			return visitor.visitQualify_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Order_by_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_ORDER(): TerminalNode {
		return this.getToken(HiveSql.T_ORDER, 0);
	}
	public T_BY(): TerminalNode {
		return this.getToken(HiveSql.T_BY, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
	public T_ASC_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_ASC);
	}
	public T_ASC(i: number): TerminalNode {
		return this.getToken(HiveSql.T_ASC, i);
	}
	public T_DESC_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_DESC);
	}
	public T_DESC(i: number): TerminalNode {
		return this.getToken(HiveSql.T_DESC, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_order_by_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterOrder_by_clause) {
	 		listener.enterOrder_by_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitOrder_by_clause) {
	 		listener.exitOrder_by_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitOrder_by_clause) {
			return visitor.visitOrder_by_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_optionsContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_options_item_list(): Select_options_itemContext[] {
		return this.getTypedRuleContexts(Select_options_itemContext) as Select_options_itemContext[];
	}
	public select_options_item(i: number): Select_options_itemContext {
		return this.getTypedRuleContext(Select_options_itemContext, i) as Select_options_itemContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_select_options;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSelect_options) {
	 		listener.enterSelect_options(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSelect_options) {
	 		listener.exitSelect_options(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSelect_options) {
			return visitor.visitSelect_options(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_options_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_LIMIT(): TerminalNode {
		return this.getToken(HiveSql.T_LIMIT, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public T_WITH(): TerminalNode {
		return this.getToken(HiveSql.T_WITH, 0);
	}
	public T_RR(): TerminalNode {
		return this.getToken(HiveSql.T_RR, 0);
	}
	public T_RS(): TerminalNode {
		return this.getToken(HiveSql.T_RS, 0);
	}
	public T_CS(): TerminalNode {
		return this.getToken(HiveSql.T_CS, 0);
	}
	public T_UR(): TerminalNode {
		return this.getToken(HiveSql.T_UR, 0);
	}
	public T_USE(): TerminalNode {
		return this.getToken(HiveSql.T_USE, 0);
	}
	public T_AND(): TerminalNode {
		return this.getToken(HiveSql.T_AND, 0);
	}
	public T_KEEP(): TerminalNode {
		return this.getToken(HiveSql.T_KEEP, 0);
	}
	public T_LOCKS(): TerminalNode {
		return this.getToken(HiveSql.T_LOCKS, 0);
	}
	public T_EXCLUSIVE(): TerminalNode {
		return this.getToken(HiveSql.T_EXCLUSIVE, 0);
	}
	public T_UPDATE(): TerminalNode {
		return this.getToken(HiveSql.T_UPDATE, 0);
	}
	public T_SHARE(): TerminalNode {
		return this.getToken(HiveSql.T_SHARE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_select_options_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSelect_options_item) {
	 		listener.enterSelect_options_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSelect_options_item) {
	 		listener.exitSelect_options_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSelect_options_item) {
			return visitor.visitSelect_options_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Update_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_UPDATE(): TerminalNode {
		return this.getToken(HiveSql.T_UPDATE, 0);
	}
	public update_table(): Update_tableContext {
		return this.getTypedRuleContext(Update_tableContext, 0) as Update_tableContext;
	}
	public T_SET(): TerminalNode {
		return this.getToken(HiveSql.T_SET, 0);
	}
	public update_assignment(): Update_assignmentContext {
		return this.getTypedRuleContext(Update_assignmentContext, 0) as Update_assignmentContext;
	}
	public where_clause(): Where_clauseContext {
		return this.getTypedRuleContext(Where_clauseContext, 0) as Where_clauseContext;
	}
	public update_upsert(): Update_upsertContext {
		return this.getTypedRuleContext(Update_upsertContext, 0) as Update_upsertContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_update_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterUpdate_stmt) {
	 		listener.enterUpdate_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitUpdate_stmt) {
	 		listener.exitUpdate_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitUpdate_stmt) {
			return visitor.visitUpdate_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Update_assignmentContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignment_stmt_item_list(): Assignment_stmt_itemContext[] {
		return this.getTypedRuleContexts(Assignment_stmt_itemContext) as Assignment_stmt_itemContext[];
	}
	public assignment_stmt_item(i: number): Assignment_stmt_itemContext {
		return this.getTypedRuleContext(Assignment_stmt_itemContext, i) as Assignment_stmt_itemContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_update_assignment;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterUpdate_assignment) {
	 		listener.enterUpdate_assignment(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitUpdate_assignment) {
	 		listener.exitUpdate_assignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitUpdate_assignment) {
			return visitor.visitUpdate_assignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Update_tableContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public from_clause(): From_clauseContext {
		return this.getTypedRuleContext(From_clauseContext, 0) as From_clauseContext;
	}
	public T_AS(): TerminalNode {
		return this.getToken(HiveSql.T_AS, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_update_table;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterUpdate_table) {
	 		listener.enterUpdate_table(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitUpdate_table) {
	 		listener.exitUpdate_table(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitUpdate_table) {
			return visitor.visitUpdate_table(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Update_upsertContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_ELSE(): TerminalNode {
		return this.getToken(HiveSql.T_ELSE, 0);
	}
	public insert_stmt(): Insert_stmtContext {
		return this.getTypedRuleContext(Insert_stmtContext, 0) as Insert_stmtContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_update_upsert;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterUpdate_upsert) {
	 		listener.enterUpdate_upsert(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitUpdate_upsert) {
	 		listener.exitUpdate_upsert(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitUpdate_upsert) {
			return visitor.visitUpdate_upsert(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Merge_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_MERGE(): TerminalNode {
		return this.getToken(HiveSql.T_MERGE, 0);
	}
	public T_INTO(): TerminalNode {
		return this.getToken(HiveSql.T_INTO, 0);
	}
	public merge_table_list(): Merge_tableContext[] {
		return this.getTypedRuleContexts(Merge_tableContext) as Merge_tableContext[];
	}
	public merge_table(i: number): Merge_tableContext {
		return this.getTypedRuleContext(Merge_tableContext, i) as Merge_tableContext;
	}
	public T_USING(): TerminalNode {
		return this.getToken(HiveSql.T_USING, 0);
	}
	public T_ON(): TerminalNode {
		return this.getToken(HiveSql.T_ON, 0);
	}
	public bool_expr(): Bool_exprContext {
		return this.getTypedRuleContext(Bool_exprContext, 0) as Bool_exprContext;
	}
	public merge_condition_list(): Merge_conditionContext[] {
		return this.getTypedRuleContexts(Merge_conditionContext) as Merge_conditionContext[];
	}
	public merge_condition(i: number): Merge_conditionContext {
		return this.getTypedRuleContext(Merge_conditionContext, i) as Merge_conditionContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_merge_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterMerge_stmt) {
	 		listener.enterMerge_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitMerge_stmt) {
	 		listener.exitMerge_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitMerge_stmt) {
			return visitor.visitMerge_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Merge_tableContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public T_AS(): TerminalNode {
		return this.getToken(HiveSql.T_AS, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_merge_table;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterMerge_table) {
	 		listener.enterMerge_table(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitMerge_table) {
	 		listener.exitMerge_table(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitMerge_table) {
			return visitor.visitMerge_table(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Merge_conditionContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_WHEN(): TerminalNode {
		return this.getToken(HiveSql.T_WHEN, 0);
	}
	public T_MATCHED(): TerminalNode {
		return this.getToken(HiveSql.T_MATCHED, 0);
	}
	public T_THEN(): TerminalNode {
		return this.getToken(HiveSql.T_THEN, 0);
	}
	public merge_action(): Merge_actionContext {
		return this.getTypedRuleContext(Merge_actionContext, 0) as Merge_actionContext;
	}
	public T_NOT(): TerminalNode {
		return this.getToken(HiveSql.T_NOT, 0);
	}
	public T_AND(): TerminalNode {
		return this.getToken(HiveSql.T_AND, 0);
	}
	public bool_expr(): Bool_exprContext {
		return this.getTypedRuleContext(Bool_exprContext, 0) as Bool_exprContext;
	}
	public T_ELSE(): TerminalNode {
		return this.getToken(HiveSql.T_ELSE, 0);
	}
	public T_IGNORE(): TerminalNode {
		return this.getToken(HiveSql.T_IGNORE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_merge_condition;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterMerge_condition) {
	 		listener.enterMerge_condition(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitMerge_condition) {
	 		listener.exitMerge_condition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitMerge_condition) {
			return visitor.visitMerge_condition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Merge_actionContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_INSERT(): TerminalNode {
		return this.getToken(HiveSql.T_INSERT, 0);
	}
	public T_VALUES(): TerminalNode {
		return this.getToken(HiveSql.T_VALUES, 0);
	}
	public insert_stmt_row(): Insert_stmt_rowContext {
		return this.getTypedRuleContext(Insert_stmt_rowContext, 0) as Insert_stmt_rowContext;
	}
	public insert_stmt_cols(): Insert_stmt_colsContext {
		return this.getTypedRuleContext(Insert_stmt_colsContext, 0) as Insert_stmt_colsContext;
	}
	public T_UPDATE(): TerminalNode {
		return this.getToken(HiveSql.T_UPDATE, 0);
	}
	public T_SET(): TerminalNode {
		return this.getToken(HiveSql.T_SET, 0);
	}
	public assignment_stmt_item_list(): Assignment_stmt_itemContext[] {
		return this.getTypedRuleContexts(Assignment_stmt_itemContext) as Assignment_stmt_itemContext[];
	}
	public assignment_stmt_item(i: number): Assignment_stmt_itemContext {
		return this.getTypedRuleContext(Assignment_stmt_itemContext, i) as Assignment_stmt_itemContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
	public where_clause(): Where_clauseContext {
		return this.getTypedRuleContext(Where_clauseContext, 0) as Where_clauseContext;
	}
	public T_DELETE(): TerminalNode {
		return this.getToken(HiveSql.T_DELETE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_merge_action;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterMerge_action) {
	 		listener.enterMerge_action(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitMerge_action) {
	 		listener.exitMerge_action(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitMerge_action) {
			return visitor.visitMerge_action(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Delete_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_DELETE(): TerminalNode {
		return this.getToken(HiveSql.T_DELETE, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public T_FROM(): TerminalNode {
		return this.getToken(HiveSql.T_FROM, 0);
	}
	public delete_alias(): Delete_aliasContext {
		return this.getTypedRuleContext(Delete_aliasContext, 0) as Delete_aliasContext;
	}
	public where_clause(): Where_clauseContext {
		return this.getTypedRuleContext(Where_clauseContext, 0) as Where_clauseContext;
	}
	public T_ALL(): TerminalNode {
		return this.getToken(HiveSql.T_ALL, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_delete_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDelete_stmt) {
	 		listener.enterDelete_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDelete_stmt) {
	 		listener.exitDelete_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDelete_stmt) {
			return visitor.visitDelete_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Delete_aliasContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_AS(): TerminalNode {
		return this.getToken(HiveSql.T_AS, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_delete_alias;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDelete_alias) {
	 		listener.enterDelete_alias(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDelete_alias) {
	 		listener.exitDelete_alias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDelete_alias) {
			return visitor.visitDelete_alias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Describe_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public T_DESCRIBE(): TerminalNode {
		return this.getToken(HiveSql.T_DESCRIBE, 0);
	}
	public T_DESC(): TerminalNode {
		return this.getToken(HiveSql.T_DESC, 0);
	}
	public T_TABLE(): TerminalNode {
		return this.getToken(HiveSql.T_TABLE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_describe_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDescribe_stmt) {
	 		listener.enterDescribe_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDescribe_stmt) {
	 		listener.exitDescribe_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDescribe_stmt) {
			return visitor.visitDescribe_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_exprContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public bool_expr_list(): Bool_exprContext[] {
		return this.getTypedRuleContexts(Bool_exprContext) as Bool_exprContext[];
	}
	public bool_expr(i: number): Bool_exprContext {
		return this.getTypedRuleContext(Bool_exprContext, i) as Bool_exprContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public T_NOT(): TerminalNode {
		return this.getToken(HiveSql.T_NOT, 0);
	}
	public bool_expr_atom(): Bool_expr_atomContext {
		return this.getTypedRuleContext(Bool_expr_atomContext, 0) as Bool_expr_atomContext;
	}
	public bool_expr_logical_operator(): Bool_expr_logical_operatorContext {
		return this.getTypedRuleContext(Bool_expr_logical_operatorContext, 0) as Bool_expr_logical_operatorContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_bool_expr;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterBool_expr) {
	 		listener.enterBool_expr(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitBool_expr) {
	 		listener.exitBool_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitBool_expr) {
			return visitor.visitBool_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_expr_atomContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public bool_expr_unary(): Bool_expr_unaryContext {
		return this.getTypedRuleContext(Bool_expr_unaryContext, 0) as Bool_expr_unaryContext;
	}
	public bool_expr_binary(): Bool_expr_binaryContext {
		return this.getTypedRuleContext(Bool_expr_binaryContext, 0) as Bool_expr_binaryContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_bool_expr_atom;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterBool_expr_atom) {
	 		listener.enterBool_expr_atom(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitBool_expr_atom) {
	 		listener.exitBool_expr_atom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitBool_expr_atom) {
			return visitor.visitBool_expr_atom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_expr_unaryContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_IS(): TerminalNode {
		return this.getToken(HiveSql.T_IS, 0);
	}
	public T_NULL(): TerminalNode {
		return this.getToken(HiveSql.T_NULL, 0);
	}
	public T_NOT(): TerminalNode {
		return this.getToken(HiveSql.T_NOT, 0);
	}
	public T_BETWEEN(): TerminalNode {
		return this.getToken(HiveSql.T_BETWEEN, 0);
	}
	public T_AND(): TerminalNode {
		return this.getToken(HiveSql.T_AND, 0);
	}
	public T_EXISTS(): TerminalNode {
		return this.getToken(HiveSql.T_EXISTS, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public bool_expr_single_in(): Bool_expr_single_inContext {
		return this.getTypedRuleContext(Bool_expr_single_inContext, 0) as Bool_expr_single_inContext;
	}
	public bool_expr_multi_in(): Bool_expr_multi_inContext {
		return this.getTypedRuleContext(Bool_expr_multi_inContext, 0) as Bool_expr_multi_inContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_bool_expr_unary;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterBool_expr_unary) {
	 		listener.enterBool_expr_unary(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitBool_expr_unary) {
	 		listener.exitBool_expr_unary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitBool_expr_unary) {
			return visitor.visitBool_expr_unary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_expr_single_inContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_IN(): TerminalNode {
		return this.getToken(HiveSql.T_IN, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public T_NOT(): TerminalNode {
		return this.getToken(HiveSql.T_NOT, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_bool_expr_single_in;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterBool_expr_single_in) {
	 		listener.enterBool_expr_single_in(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitBool_expr_single_in) {
	 		listener.exitBool_expr_single_in(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitBool_expr_single_in) {
			return visitor.visitBool_expr_single_in(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_expr_multi_inContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_OPEN_P_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_OPEN_P);
	}
	public T_OPEN_P(i: number): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, i);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_CLOSE_P_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_CLOSE_P);
	}
	public T_CLOSE_P(i: number): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, i);
	}
	public T_IN(): TerminalNode {
		return this.getToken(HiveSql.T_IN, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
	public T_NOT(): TerminalNode {
		return this.getToken(HiveSql.T_NOT, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_bool_expr_multi_in;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterBool_expr_multi_in) {
	 		listener.enterBool_expr_multi_in(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitBool_expr_multi_in) {
	 		listener.exitBool_expr_multi_in(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitBool_expr_multi_in) {
			return visitor.visitBool_expr_multi_in(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_expr_binaryContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public bool_expr_binary_operator(): Bool_expr_binary_operatorContext {
		return this.getTypedRuleContext(Bool_expr_binary_operatorContext, 0) as Bool_expr_binary_operatorContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_bool_expr_binary;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterBool_expr_binary) {
	 		listener.enterBool_expr_binary(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitBool_expr_binary) {
	 		listener.exitBool_expr_binary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitBool_expr_binary) {
			return visitor.visitBool_expr_binary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_expr_logical_operatorContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_AND(): TerminalNode {
		return this.getToken(HiveSql.T_AND, 0);
	}
	public T_OR(): TerminalNode {
		return this.getToken(HiveSql.T_OR, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_bool_expr_logical_operator;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterBool_expr_logical_operator) {
	 		listener.enterBool_expr_logical_operator(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitBool_expr_logical_operator) {
	 		listener.exitBool_expr_logical_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitBool_expr_logical_operator) {
			return visitor.visitBool_expr_logical_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_expr_binary_operatorContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_EQUAL(): TerminalNode {
		return this.getToken(HiveSql.T_EQUAL, 0);
	}
	public T_EQUAL2(): TerminalNode {
		return this.getToken(HiveSql.T_EQUAL2, 0);
	}
	public T_NOTEQUAL(): TerminalNode {
		return this.getToken(HiveSql.T_NOTEQUAL, 0);
	}
	public T_NOTEQUAL2(): TerminalNode {
		return this.getToken(HiveSql.T_NOTEQUAL2, 0);
	}
	public T_LESS(): TerminalNode {
		return this.getToken(HiveSql.T_LESS, 0);
	}
	public T_LESSEQUAL(): TerminalNode {
		return this.getToken(HiveSql.T_LESSEQUAL, 0);
	}
	public T_GREATER(): TerminalNode {
		return this.getToken(HiveSql.T_GREATER, 0);
	}
	public T_GREATEREQUAL(): TerminalNode {
		return this.getToken(HiveSql.T_GREATEREQUAL, 0);
	}
	public T_LIKE(): TerminalNode {
		return this.getToken(HiveSql.T_LIKE, 0);
	}
	public T_RLIKE(): TerminalNode {
		return this.getToken(HiveSql.T_RLIKE, 0);
	}
	public T_REGEXP(): TerminalNode {
		return this.getToken(HiveSql.T_REGEXP, 0);
	}
	public T_NOT(): TerminalNode {
		return this.getToken(HiveSql.T_NOT, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_bool_expr_binary_operator;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterBool_expr_binary_operator) {
	 		listener.enterBool_expr_binary_operator(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitBool_expr_binary_operator) {
	 		listener.exitBool_expr_binary_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitBool_expr_binary_operator) {
			return visitor.visitBool_expr_binary_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public expr_interval(): Expr_intervalContext {
		return this.getTypedRuleContext(Expr_intervalContext, 0) as Expr_intervalContext;
	}
	public expr_concat(): Expr_concatContext {
		return this.getTypedRuleContext(Expr_concatContext, 0) as Expr_concatContext;
	}
	public expr_case(): Expr_caseContext {
		return this.getTypedRuleContext(Expr_caseContext, 0) as Expr_caseContext;
	}
	public expr_cursor_attribute(): Expr_cursor_attributeContext {
		return this.getTypedRuleContext(Expr_cursor_attributeContext, 0) as Expr_cursor_attributeContext;
	}
	public expr_agg_window_func(): Expr_agg_window_funcContext {
		return this.getTypedRuleContext(Expr_agg_window_funcContext, 0) as Expr_agg_window_funcContext;
	}
	public expr_spec_func(): Expr_spec_funcContext {
		return this.getTypedRuleContext(Expr_spec_funcContext, 0) as Expr_spec_funcContext;
	}
	public expr_func(): Expr_funcContext {
		return this.getTypedRuleContext(Expr_funcContext, 0) as Expr_funcContext;
	}
	public expr_atom(): Expr_atomContext {
		return this.getTypedRuleContext(Expr_atomContext, 0) as Expr_atomContext;
	}
	public T_MUL(): TerminalNode {
		return this.getToken(HiveSql.T_MUL, 0);
	}
	public T_DIV(): TerminalNode {
		return this.getToken(HiveSql.T_DIV, 0);
	}
	public T_ADD(): TerminalNode {
		return this.getToken(HiveSql.T_ADD, 0);
	}
	public T_SUB(): TerminalNode {
		return this.getToken(HiveSql.T_SUB, 0);
	}
	public interval_item(): Interval_itemContext {
		return this.getTypedRuleContext(Interval_itemContext, 0) as Interval_itemContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_atomContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public date_literal(): Date_literalContext {
		return this.getTypedRuleContext(Date_literalContext, 0) as Date_literalContext;
	}
	public timestamp_literal(): Timestamp_literalContext {
		return this.getTypedRuleContext(Timestamp_literalContext, 0) as Timestamp_literalContext;
	}
	public bool_literal(): Bool_literalContext {
		return this.getTypedRuleContext(Bool_literalContext, 0) as Bool_literalContext;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public dec_number(): Dec_numberContext {
		return this.getTypedRuleContext(Dec_numberContext, 0) as Dec_numberContext;
	}
	public int_number(): Int_numberContext {
		return this.getTypedRuleContext(Int_numberContext, 0) as Int_numberContext;
	}
	public null_const(): Null_constContext {
		return this.getTypedRuleContext(Null_constContext, 0) as Null_constContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_atom;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_atom) {
	 		listener.enterExpr_atom(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_atom) {
	 		listener.exitExpr_atom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_atom) {
			return visitor.visitExpr_atom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_intervalContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_INTERVAL(): TerminalNode {
		return this.getToken(HiveSql.T_INTERVAL, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public interval_item(): Interval_itemContext {
		return this.getTypedRuleContext(Interval_itemContext, 0) as Interval_itemContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_interval;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_interval) {
	 		listener.enterExpr_interval(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_interval) {
	 		listener.exitExpr_interval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_interval) {
			return visitor.visitExpr_interval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interval_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_DAY(): TerminalNode {
		return this.getToken(HiveSql.T_DAY, 0);
	}
	public T_DAYS(): TerminalNode {
		return this.getToken(HiveSql.T_DAYS, 0);
	}
	public T_MICROSECOND(): TerminalNode {
		return this.getToken(HiveSql.T_MICROSECOND, 0);
	}
	public T_MICROSECONDS(): TerminalNode {
		return this.getToken(HiveSql.T_MICROSECONDS, 0);
	}
	public T_SECOND(): TerminalNode {
		return this.getToken(HiveSql.T_SECOND, 0);
	}
	public T_SECONDS(): TerminalNode {
		return this.getToken(HiveSql.T_SECONDS, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_interval_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterInterval_item) {
	 		listener.enterInterval_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitInterval_item) {
	 		listener.exitInterval_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitInterval_item) {
			return visitor.visitInterval_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_concatContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_concat_item_list(): Expr_concat_itemContext[] {
		return this.getTypedRuleContexts(Expr_concat_itemContext) as Expr_concat_itemContext[];
	}
	public expr_concat_item(i: number): Expr_concat_itemContext {
		return this.getTypedRuleContext(Expr_concat_itemContext, i) as Expr_concat_itemContext;
	}
	public T_PIPE_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_PIPE);
	}
	public T_PIPE(i: number): TerminalNode {
		return this.getToken(HiveSql.T_PIPE, i);
	}
	public T_CONCAT_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_CONCAT);
	}
	public T_CONCAT(i: number): TerminalNode {
		return this.getToken(HiveSql.T_CONCAT, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_concat;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_concat) {
	 		listener.enterExpr_concat(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_concat) {
	 		listener.exitExpr_concat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_concat) {
			return visitor.visitExpr_concat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_concat_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public expr_case(): Expr_caseContext {
		return this.getTypedRuleContext(Expr_caseContext, 0) as Expr_caseContext;
	}
	public expr_agg_window_func(): Expr_agg_window_funcContext {
		return this.getTypedRuleContext(Expr_agg_window_funcContext, 0) as Expr_agg_window_funcContext;
	}
	public expr_spec_func(): Expr_spec_funcContext {
		return this.getTypedRuleContext(Expr_spec_funcContext, 0) as Expr_spec_funcContext;
	}
	public expr_func(): Expr_funcContext {
		return this.getTypedRuleContext(Expr_funcContext, 0) as Expr_funcContext;
	}
	public expr_atom(): Expr_atomContext {
		return this.getTypedRuleContext(Expr_atomContext, 0) as Expr_atomContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_concat_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_concat_item) {
	 		listener.enterExpr_concat_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_concat_item) {
	 		listener.exitExpr_concat_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_concat_item) {
			return visitor.visitExpr_concat_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_caseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_case_simple(): Expr_case_simpleContext {
		return this.getTypedRuleContext(Expr_case_simpleContext, 0) as Expr_case_simpleContext;
	}
	public expr_case_searched(): Expr_case_searchedContext {
		return this.getTypedRuleContext(Expr_case_searchedContext, 0) as Expr_case_searchedContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_case;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_case) {
	 		listener.enterExpr_case(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_case) {
	 		listener.exitExpr_case(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_case) {
			return visitor.visitExpr_case(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_case_simpleContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_CASE(): TerminalNode {
		return this.getToken(HiveSql.T_CASE, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_END(): TerminalNode {
		return this.getToken(HiveSql.T_END, 0);
	}
	public T_WHEN_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_WHEN);
	}
	public T_WHEN(i: number): TerminalNode {
		return this.getToken(HiveSql.T_WHEN, i);
	}
	public T_THEN_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_THEN);
	}
	public T_THEN(i: number): TerminalNode {
		return this.getToken(HiveSql.T_THEN, i);
	}
	public T_ELSE(): TerminalNode {
		return this.getToken(HiveSql.T_ELSE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_case_simple;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_case_simple) {
	 		listener.enterExpr_case_simple(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_case_simple) {
	 		listener.exitExpr_case_simple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_case_simple) {
			return visitor.visitExpr_case_simple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_case_searchedContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_CASE(): TerminalNode {
		return this.getToken(HiveSql.T_CASE, 0);
	}
	public T_END(): TerminalNode {
		return this.getToken(HiveSql.T_END, 0);
	}
	public T_WHEN_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_WHEN);
	}
	public T_WHEN(i: number): TerminalNode {
		return this.getToken(HiveSql.T_WHEN, i);
	}
	public bool_expr_list(): Bool_exprContext[] {
		return this.getTypedRuleContexts(Bool_exprContext) as Bool_exprContext[];
	}
	public bool_expr(i: number): Bool_exprContext {
		return this.getTypedRuleContext(Bool_exprContext, i) as Bool_exprContext;
	}
	public T_THEN_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_THEN);
	}
	public T_THEN(i: number): TerminalNode {
		return this.getToken(HiveSql.T_THEN, i);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_ELSE(): TerminalNode {
		return this.getToken(HiveSql.T_ELSE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_case_searched;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_case_searched) {
	 		listener.enterExpr_case_searched(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_case_searched) {
	 		listener.exitExpr_case_searched(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_case_searched) {
			return visitor.visitExpr_case_searched(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_cursor_attributeContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_PRECENT(): TerminalNode {
		return this.getToken(HiveSql.T_PRECENT, 0);
	}
	public T_ISOPEN(): TerminalNode {
		return this.getToken(HiveSql.T_ISOPEN, 0);
	}
	public T_FOUND(): TerminalNode {
		return this.getToken(HiveSql.T_FOUND, 0);
	}
	public T_NOTFOUND(): TerminalNode {
		return this.getToken(HiveSql.T_NOTFOUND, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_cursor_attribute;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_cursor_attribute) {
	 		listener.enterExpr_cursor_attribute(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_cursor_attribute) {
	 		listener.exitExpr_cursor_attribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_cursor_attribute) {
			return visitor.visitExpr_cursor_attribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_agg_window_funcContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_AVG(): TerminalNode {
		return this.getToken(HiveSql.T_AVG, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public expr_func_all_distinct(): Expr_func_all_distinctContext {
		return this.getTypedRuleContext(Expr_func_all_distinctContext, 0) as Expr_func_all_distinctContext;
	}
	public expr_func_over_clause(): Expr_func_over_clauseContext {
		return this.getTypedRuleContext(Expr_func_over_clauseContext, 0) as Expr_func_over_clauseContext;
	}
	public T_COUNT(): TerminalNode {
		return this.getToken(HiveSql.T_COUNT, 0);
	}
	public T_MUL(): TerminalNode {
		return this.getToken(HiveSql.T_MUL, 0);
	}
	public T_COUNT_BIG(): TerminalNode {
		return this.getToken(HiveSql.T_COUNT_BIG, 0);
	}
	public T_CUME_DIST(): TerminalNode {
		return this.getToken(HiveSql.T_CUME_DIST, 0);
	}
	public T_DENSE_RANK(): TerminalNode {
		return this.getToken(HiveSql.T_DENSE_RANK, 0);
	}
	public T_FIRST_VALUE(): TerminalNode {
		return this.getToken(HiveSql.T_FIRST_VALUE, 0);
	}
	public T_LAG(): TerminalNode {
		return this.getToken(HiveSql.T_LAG, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
	public T_LAST_VALUE(): TerminalNode {
		return this.getToken(HiveSql.T_LAST_VALUE, 0);
	}
	public T_LEAD(): TerminalNode {
		return this.getToken(HiveSql.T_LEAD, 0);
	}
	public T_MAX(): TerminalNode {
		return this.getToken(HiveSql.T_MAX, 0);
	}
	public T_MIN(): TerminalNode {
		return this.getToken(HiveSql.T_MIN, 0);
	}
	public T_RANK(): TerminalNode {
		return this.getToken(HiveSql.T_RANK, 0);
	}
	public T_ROW_NUMBER(): TerminalNode {
		return this.getToken(HiveSql.T_ROW_NUMBER, 0);
	}
	public T_STDEV(): TerminalNode {
		return this.getToken(HiveSql.T_STDEV, 0);
	}
	public T_SUM(): TerminalNode {
		return this.getToken(HiveSql.T_SUM, 0);
	}
	public T_VAR(): TerminalNode {
		return this.getToken(HiveSql.T_VAR, 0);
	}
	public T_VARIANCE(): TerminalNode {
		return this.getToken(HiveSql.T_VARIANCE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_agg_window_func;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_agg_window_func) {
	 		listener.enterExpr_agg_window_func(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_agg_window_func) {
	 		listener.exitExpr_agg_window_func(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_agg_window_func) {
			return visitor.visitExpr_agg_window_func(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_func_all_distinctContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_ALL(): TerminalNode {
		return this.getToken(HiveSql.T_ALL, 0);
	}
	public T_DISTINCT(): TerminalNode {
		return this.getToken(HiveSql.T_DISTINCT, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_func_all_distinct;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_func_all_distinct) {
	 		listener.enterExpr_func_all_distinct(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_func_all_distinct) {
	 		listener.exitExpr_func_all_distinct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_func_all_distinct) {
			return visitor.visitExpr_func_all_distinct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_func_over_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_OVER(): TerminalNode {
		return this.getToken(HiveSql.T_OVER, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public expr_func_partition_by_clause(): Expr_func_partition_by_clauseContext {
		return this.getTypedRuleContext(Expr_func_partition_by_clauseContext, 0) as Expr_func_partition_by_clauseContext;
	}
	public order_by_clause(): Order_by_clauseContext {
		return this.getTypedRuleContext(Order_by_clauseContext, 0) as Order_by_clauseContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_func_over_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_func_over_clause) {
	 		listener.enterExpr_func_over_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_func_over_clause) {
	 		listener.exitExpr_func_over_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_func_over_clause) {
			return visitor.visitExpr_func_over_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_func_partition_by_clauseContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_PARTITION(): TerminalNode {
		return this.getToken(HiveSql.T_PARTITION, 0);
	}
	public T_BY(): TerminalNode {
		return this.getToken(HiveSql.T_BY, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_func_partition_by_clause;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_func_partition_by_clause) {
	 		listener.enterExpr_func_partition_by_clause(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_func_partition_by_clause) {
	 		listener.exitExpr_func_partition_by_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_func_partition_by_clause) {
			return visitor.visitExpr_func_partition_by_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_spec_funcContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_ACTIVITY_COUNT(): TerminalNode {
		return this.getToken(HiveSql.T_ACTIVITY_COUNT, 0);
	}
	public T_CAST(): TerminalNode {
		return this.getToken(HiveSql.T_CAST, 0);
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public T_AS(): TerminalNode {
		return this.getToken(HiveSql.T_AS, 0);
	}
	public dtype(): DtypeContext {
		return this.getTypedRuleContext(DtypeContext, 0) as DtypeContext;
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public dtype_len(): Dtype_lenContext {
		return this.getTypedRuleContext(Dtype_lenContext, 0) as Dtype_lenContext;
	}
	public T_COUNT(): TerminalNode {
		return this.getToken(HiveSql.T_COUNT, 0);
	}
	public T_MUL(): TerminalNode {
		return this.getToken(HiveSql.T_MUL, 0);
	}
	public T_CURRENT_DATE(): TerminalNode {
		return this.getToken(HiveSql.T_CURRENT_DATE, 0);
	}
	public T_CURRENT(): TerminalNode {
		return this.getToken(HiveSql.T_CURRENT, 0);
	}
	public T_DATE(): TerminalNode {
		return this.getToken(HiveSql.T_DATE, 0);
	}
	public T_CURRENT_TIMESTAMP(): TerminalNode {
		return this.getToken(HiveSql.T_CURRENT_TIMESTAMP, 0);
	}
	public T_TIMESTAMP(): TerminalNode {
		return this.getToken(HiveSql.T_TIMESTAMP, 0);
	}
	public T_CURRENT_USER(): TerminalNode {
		return this.getToken(HiveSql.T_CURRENT_USER, 0);
	}
	public T_USER(): TerminalNode {
		return this.getToken(HiveSql.T_USER, 0);
	}
	public T_MAX_PART_STRING(): TerminalNode {
		return this.getToken(HiveSql.T_MAX_PART_STRING, 0);
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
	public T_EQUAL_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_EQUAL);
	}
	public T_EQUAL(i: number): TerminalNode {
		return this.getToken(HiveSql.T_EQUAL, i);
	}
	public T_MIN_PART_STRING(): TerminalNode {
		return this.getToken(HiveSql.T_MIN_PART_STRING, 0);
	}
	public T_MAX_PART_INT(): TerminalNode {
		return this.getToken(HiveSql.T_MAX_PART_INT, 0);
	}
	public T_MIN_PART_INT(): TerminalNode {
		return this.getToken(HiveSql.T_MIN_PART_INT, 0);
	}
	public T_MAX_PART_DATE(): TerminalNode {
		return this.getToken(HiveSql.T_MAX_PART_DATE, 0);
	}
	public T_MIN_PART_DATE(): TerminalNode {
		return this.getToken(HiveSql.T_MIN_PART_DATE, 0);
	}
	public T_PART_COUNT(): TerminalNode {
		return this.getToken(HiveSql.T_PART_COUNT, 0);
	}
	public T_PART_LOC(): TerminalNode {
		return this.getToken(HiveSql.T_PART_LOC, 0);
	}
	public T_TRIM(): TerminalNode {
		return this.getToken(HiveSql.T_TRIM, 0);
	}
	public T_SUBSTRING(): TerminalNode {
		return this.getToken(HiveSql.T_SUBSTRING, 0);
	}
	public T_FROM(): TerminalNode {
		return this.getToken(HiveSql.T_FROM, 0);
	}
	public T_FOR(): TerminalNode {
		return this.getToken(HiveSql.T_FOR, 0);
	}
	public T_SYSDATE(): TerminalNode {
		return this.getToken(HiveSql.T_SYSDATE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_spec_func;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_spec_func) {
	 		listener.enterExpr_spec_func(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_spec_func) {
	 		listener.exitExpr_spec_func(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_spec_func) {
			return visitor.visitExpr_spec_func(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_funcContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_OPEN_P(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN_P, 0);
	}
	public T_CLOSE_P(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE_P, 0);
	}
	public expr_func_params(): Expr_func_paramsContext {
		return this.getTypedRuleContext(Expr_func_paramsContext, 0) as Expr_func_paramsContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_func;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_func) {
	 		listener.enterExpr_func(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_func) {
	 		listener.exitExpr_func(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_func) {
			return visitor.visitExpr_func(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_func_paramsContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public func_param_list(): Func_paramContext[] {
		return this.getTypedRuleContexts(Func_paramContext) as Func_paramContext[];
	}
	public func_param(i: number): Func_paramContext {
		return this.getTypedRuleContext(Func_paramContext, i) as Func_paramContext;
	}
	public T_COMMA_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_COMMA);
	}
	public T_COMMA(i: number): TerminalNode {
		return this.getToken(HiveSql.T_COMMA, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_func_params;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_func_params) {
	 		listener.enterExpr_func_params(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_func_params) {
	 		listener.exitExpr_func_params(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_func_params) {
			return visitor.visitExpr_func_params(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_paramContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public T_EQUAL(): TerminalNode {
		return this.getToken(HiveSql.T_EQUAL, 0);
	}
	public T_GREATER(): TerminalNode {
		return this.getToken(HiveSql.T_GREATER, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_func_param;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterFunc_param) {
	 		listener.enterFunc_param(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitFunc_param) {
	 		listener.exitFunc_param(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitFunc_param) {
			return visitor.visitFunc_param(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_selectContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_select;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_select) {
	 		listener.enterExpr_select(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_select) {
	 		listener.exitExpr_select(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_select) {
			return visitor.visitExpr_select(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_fileContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public file_name(): File_nameContext {
		return this.getTypedRuleContext(File_nameContext, 0) as File_nameContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_expr_file;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterExpr_file) {
	 		listener.enterExpr_file(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitExpr_file) {
	 		listener.exitExpr_file(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitExpr_file) {
			return visitor.visitExpr_file(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HiveContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_HIVE(): TerminalNode {
		return this.getToken(HiveSql.T_HIVE, 0);
	}
	public hive_item_list(): Hive_itemContext[] {
		return this.getTypedRuleContexts(Hive_itemContext) as Hive_itemContext[];
	}
	public hive_item(i: number): Hive_itemContext {
		return this.getTypedRuleContext(Hive_itemContext, i) as Hive_itemContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_hive;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterHive) {
	 		listener.enterHive(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitHive) {
	 		listener.exitHive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitHive) {
			return visitor.visitHive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Hive_itemContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_SUB(): TerminalNode {
		return this.getToken(HiveSql.T_SUB, 0);
	}
	public ident(): IdentContext {
		return this.getTypedRuleContext(IdentContext, 0) as IdentContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public L_ID(): TerminalNode {
		return this.getToken(HiveSql.L_ID, 0);
	}
	public T_EQUAL(): TerminalNode {
		return this.getToken(HiveSql.T_EQUAL, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_hive_item;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterHive_item) {
	 		listener.enterHive_item(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitHive_item) {
	 		listener.exitHive_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitHive_item) {
			return visitor.visitHive_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HostContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_NOTE(): TerminalNode {
		return this.getToken(HiveSql.T_NOTE, 0);
	}
	public host_cmd(): Host_cmdContext {
		return this.getTypedRuleContext(Host_cmdContext, 0) as Host_cmdContext;
	}
	public T_SEMICOLON(): TerminalNode {
		return this.getToken(HiveSql.T_SEMICOLON, 0);
	}
	public host_stmt(): Host_stmtContext {
		return this.getTypedRuleContext(Host_stmtContext, 0) as Host_stmtContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_host;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterHost) {
	 		listener.enterHost(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitHost) {
	 		listener.exitHost(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitHost) {
			return visitor.visitHost(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Host_cmdContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_host_cmd;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterHost_cmd) {
	 		listener.enterHost_cmd(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitHost_cmd) {
	 		listener.exitHost_cmd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitHost_cmd) {
			return visitor.visitHost_cmd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Host_stmtContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_HOST(): TerminalNode {
		return this.getToken(HiveSql.T_HOST, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_host_stmt;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterHost_stmt) {
	 		listener.enterHost_stmt(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitHost_stmt) {
	 		listener.exitHost_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitHost_stmt) {
			return visitor.visitHost_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class File_nameContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_FILE(): TerminalNode {
		return this.getToken(HiveSql.L_FILE, 0);
	}
	public ident_list(): IdentContext[] {
		return this.getTypedRuleContexts(IdentContext) as IdentContext[];
	}
	public ident(i: number): IdentContext {
		return this.getTypedRuleContext(IdentContext, i) as IdentContext;
	}
	public T_DIV_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_DIV);
	}
	public T_DIV(i: number): TerminalNode {
		return this.getToken(HiveSql.T_DIV, i);
	}
	public T_DOT(): TerminalNode {
		return this.getToken(HiveSql.T_DOT, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_file_name;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterFile_name) {
	 		listener.enterFile_name(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitFile_name) {
	 		listener.exitFile_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitFile_name) {
			return visitor.visitFile_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Date_literalContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_DATE(): TerminalNode {
		return this.getToken(HiveSql.T_DATE, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_date_literal;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDate_literal) {
	 		listener.enterDate_literal(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDate_literal) {
	 		listener.exitDate_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDate_literal) {
			return visitor.visitDate_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Timestamp_literalContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_TIMESTAMP(): TerminalNode {
		return this.getToken(HiveSql.T_TIMESTAMP, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_timestamp_literal;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterTimestamp_literal) {
	 		listener.enterTimestamp_literal(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitTimestamp_literal) {
	 		listener.exitTimestamp_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitTimestamp_literal) {
			return visitor.visitTimestamp_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_ID_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.L_ID);
	}
	public L_ID(i: number): TerminalNode {
		return this.getToken(HiveSql.L_ID, i);
	}
	public non_reserved_words_list(): Non_reserved_wordsContext[] {
		return this.getTypedRuleContexts(Non_reserved_wordsContext) as Non_reserved_wordsContext[];
	}
	public non_reserved_words(i: number): Non_reserved_wordsContext {
		return this.getTypedRuleContext(Non_reserved_wordsContext, i) as Non_reserved_wordsContext;
	}
	public T_DOT_list(): TerminalNode[] {
	    	return this.getTokens(HiveSql.T_DOT);
	}
	public T_DOT(i: number): TerminalNode {
		return this.getToken(HiveSql.T_DOT, i);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_ident;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterIdent) {
	 		listener.enterIdent(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitIdent) {
	 		listener.exitIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitIdent) {
			return visitor.visitIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_string;
	}
	public copyFrom(ctx: StringContext): void {
		super.copyFrom(ctx);
	}
}
export class Double_quotedStringContext extends StringContext {
	constructor(parser: HiveSql, ctx: StringContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public L_D_STRING(): TerminalNode {
		return this.getToken(HiveSql.L_D_STRING, 0);
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDouble_quotedString) {
	 		listener.enterDouble_quotedString(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDouble_quotedString) {
	 		listener.exitDouble_quotedString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDouble_quotedString) {
			return visitor.visitDouble_quotedString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Single_quotedStringContext extends StringContext {
	constructor(parser: HiveSql, ctx: StringContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public L_S_STRING(): TerminalNode {
		return this.getToken(HiveSql.L_S_STRING, 0);
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterSingle_quotedString) {
	 		listener.enterSingle_quotedString(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitSingle_quotedString) {
	 		listener.exitSingle_quotedString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitSingle_quotedString) {
			return visitor.visitSingle_quotedString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Int_numberContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_INT(): TerminalNode {
		return this.getToken(HiveSql.L_INT, 0);
	}
	public T_SUB(): TerminalNode {
		return this.getToken(HiveSql.T_SUB, 0);
	}
	public T_ADD(): TerminalNode {
		return this.getToken(HiveSql.T_ADD, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_int_number;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterInt_number) {
	 		listener.enterInt_number(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitInt_number) {
	 		listener.exitInt_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitInt_number) {
			return visitor.visitInt_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dec_numberContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_DEC(): TerminalNode {
		return this.getToken(HiveSql.L_DEC, 0);
	}
	public T_SUB(): TerminalNode {
		return this.getToken(HiveSql.T_SUB, 0);
	}
	public T_ADD(): TerminalNode {
		return this.getToken(HiveSql.T_ADD, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_dec_number;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterDec_number) {
	 		listener.enterDec_number(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitDec_number) {
	 		listener.exitDec_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitDec_number) {
			return visitor.visitDec_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_literalContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_TRUE(): TerminalNode {
		return this.getToken(HiveSql.T_TRUE, 0);
	}
	public T_FALSE(): TerminalNode {
		return this.getToken(HiveSql.T_FALSE, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_bool_literal;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterBool_literal) {
	 		listener.enterBool_literal(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitBool_literal) {
	 		listener.exitBool_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitBool_literal) {
			return visitor.visitBool_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Null_constContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_NULL(): TerminalNode {
		return this.getToken(HiveSql.T_NULL, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_null_const;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterNull_const) {
	 		listener.enterNull_const(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitNull_const) {
	 		listener.exitNull_const(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitNull_const) {
			return visitor.visitNull_const(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Non_reserved_wordsContext extends ParserRuleContext {
	constructor(parser?: HiveSql, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_ACTION(): TerminalNode {
		return this.getToken(HiveSql.T_ACTION, 0);
	}
	public T_ACTIVITY_COUNT(): TerminalNode {
		return this.getToken(HiveSql.T_ACTIVITY_COUNT, 0);
	}
	public T_ADD2(): TerminalNode {
		return this.getToken(HiveSql.T_ADD2, 0);
	}
	public T_ALL(): TerminalNode {
		return this.getToken(HiveSql.T_ALL, 0);
	}
	public T_ALLOCATE(): TerminalNode {
		return this.getToken(HiveSql.T_ALLOCATE, 0);
	}
	public T_ALTER(): TerminalNode {
		return this.getToken(HiveSql.T_ALTER, 0);
	}
	public T_AND(): TerminalNode {
		return this.getToken(HiveSql.T_AND, 0);
	}
	public T_ANSI_NULLS(): TerminalNode {
		return this.getToken(HiveSql.T_ANSI_NULLS, 0);
	}
	public T_ANSI_PADDING(): TerminalNode {
		return this.getToken(HiveSql.T_ANSI_PADDING, 0);
	}
	public T_AS(): TerminalNode {
		return this.getToken(HiveSql.T_AS, 0);
	}
	public T_ASC(): TerminalNode {
		return this.getToken(HiveSql.T_ASC, 0);
	}
	public T_ASSOCIATE(): TerminalNode {
		return this.getToken(HiveSql.T_ASSOCIATE, 0);
	}
	public T_AT(): TerminalNode {
		return this.getToken(HiveSql.T_AT, 0);
	}
	public T_AUTO_INCREMENT(): TerminalNode {
		return this.getToken(HiveSql.T_AUTO_INCREMENT, 0);
	}
	public T_AVG(): TerminalNode {
		return this.getToken(HiveSql.T_AVG, 0);
	}
	public T_BATCHSIZE(): TerminalNode {
		return this.getToken(HiveSql.T_BATCHSIZE, 0);
	}
	public T_BEGIN(): TerminalNode {
		return this.getToken(HiveSql.T_BEGIN, 0);
	}
	public T_BETWEEN(): TerminalNode {
		return this.getToken(HiveSql.T_BETWEEN, 0);
	}
	public T_BIGINT(): TerminalNode {
		return this.getToken(HiveSql.T_BIGINT, 0);
	}
	public T_BINARY_DOUBLE(): TerminalNode {
		return this.getToken(HiveSql.T_BINARY_DOUBLE, 0);
	}
	public T_BINARY_FLOAT(): TerminalNode {
		return this.getToken(HiveSql.T_BINARY_FLOAT, 0);
	}
	public T_BIT(): TerminalNode {
		return this.getToken(HiveSql.T_BIT, 0);
	}
	public T_BODY(): TerminalNode {
		return this.getToken(HiveSql.T_BODY, 0);
	}
	public T_BREAK(): TerminalNode {
		return this.getToken(HiveSql.T_BREAK, 0);
	}
	public T_BY(): TerminalNode {
		return this.getToken(HiveSql.T_BY, 0);
	}
	public T_BYTE(): TerminalNode {
		return this.getToken(HiveSql.T_BYTE, 0);
	}
	public T_CALL(): TerminalNode {
		return this.getToken(HiveSql.T_CALL, 0);
	}
	public T_CALLER(): TerminalNode {
		return this.getToken(HiveSql.T_CALLER, 0);
	}
	public T_CASCADE(): TerminalNode {
		return this.getToken(HiveSql.T_CASCADE, 0);
	}
	public T_CASE(): TerminalNode {
		return this.getToken(HiveSql.T_CASE, 0);
	}
	public T_CASESPECIFIC(): TerminalNode {
		return this.getToken(HiveSql.T_CASESPECIFIC, 0);
	}
	public T_CAST(): TerminalNode {
		return this.getToken(HiveSql.T_CAST, 0);
	}
	public T_CHAR(): TerminalNode {
		return this.getToken(HiveSql.T_CHAR, 0);
	}
	public T_CHARACTER(): TerminalNode {
		return this.getToken(HiveSql.T_CHARACTER, 0);
	}
	public T_CHARSET(): TerminalNode {
		return this.getToken(HiveSql.T_CHARSET, 0);
	}
	public T_CLIENT(): TerminalNode {
		return this.getToken(HiveSql.T_CLIENT, 0);
	}
	public T_CLOSE(): TerminalNode {
		return this.getToken(HiveSql.T_CLOSE, 0);
	}
	public T_CLUSTERED(): TerminalNode {
		return this.getToken(HiveSql.T_CLUSTERED, 0);
	}
	public T_CMP(): TerminalNode {
		return this.getToken(HiveSql.T_CMP, 0);
	}
	public T_COLLECT(): TerminalNode {
		return this.getToken(HiveSql.T_COLLECT, 0);
	}
	public T_COLLECTION(): TerminalNode {
		return this.getToken(HiveSql.T_COLLECTION, 0);
	}
	public T_COLUMN(): TerminalNode {
		return this.getToken(HiveSql.T_COLUMN, 0);
	}
	public T_COMMENT(): TerminalNode {
		return this.getToken(HiveSql.T_COMMENT, 0);
	}
	public T_COMPRESS(): TerminalNode {
		return this.getToken(HiveSql.T_COMPRESS, 0);
	}
	public T_CONSTANT(): TerminalNode {
		return this.getToken(HiveSql.T_CONSTANT, 0);
	}
	public T_COPY(): TerminalNode {
		return this.getToken(HiveSql.T_COPY, 0);
	}
	public T_COMMIT(): TerminalNode {
		return this.getToken(HiveSql.T_COMMIT, 0);
	}
	public T_CONCAT(): TerminalNode {
		return this.getToken(HiveSql.T_CONCAT, 0);
	}
	public T_CONDITION(): TerminalNode {
		return this.getToken(HiveSql.T_CONDITION, 0);
	}
	public T_CONSTRAINT(): TerminalNode {
		return this.getToken(HiveSql.T_CONSTRAINT, 0);
	}
	public T_CONTINUE(): TerminalNode {
		return this.getToken(HiveSql.T_CONTINUE, 0);
	}
	public T_COUNT(): TerminalNode {
		return this.getToken(HiveSql.T_COUNT, 0);
	}
	public T_COUNT_BIG(): TerminalNode {
		return this.getToken(HiveSql.T_COUNT_BIG, 0);
	}
	public T_CREATE(): TerminalNode {
		return this.getToken(HiveSql.T_CREATE, 0);
	}
	public T_CREATION(): TerminalNode {
		return this.getToken(HiveSql.T_CREATION, 0);
	}
	public T_CREATOR(): TerminalNode {
		return this.getToken(HiveSql.T_CREATOR, 0);
	}
	public T_CS(): TerminalNode {
		return this.getToken(HiveSql.T_CS, 0);
	}
	public T_CUME_DIST(): TerminalNode {
		return this.getToken(HiveSql.T_CUME_DIST, 0);
	}
	public T_CURRENT(): TerminalNode {
		return this.getToken(HiveSql.T_CURRENT, 0);
	}
	public T_CURRENT_DATE(): TerminalNode {
		return this.getToken(HiveSql.T_CURRENT_DATE, 0);
	}
	public T_CURRENT_SCHEMA(): TerminalNode {
		return this.getToken(HiveSql.T_CURRENT_SCHEMA, 0);
	}
	public T_CURRENT_TIMESTAMP(): TerminalNode {
		return this.getToken(HiveSql.T_CURRENT_TIMESTAMP, 0);
	}
	public T_CURRENT_USER(): TerminalNode {
		return this.getToken(HiveSql.T_CURRENT_USER, 0);
	}
	public T_CURSOR(): TerminalNode {
		return this.getToken(HiveSql.T_CURSOR, 0);
	}
	public T_DATA(): TerminalNode {
		return this.getToken(HiveSql.T_DATA, 0);
	}
	public T_DATABASE(): TerminalNode {
		return this.getToken(HiveSql.T_DATABASE, 0);
	}
	public T_DATE(): TerminalNode {
		return this.getToken(HiveSql.T_DATE, 0);
	}
	public T_DATETIME(): TerminalNode {
		return this.getToken(HiveSql.T_DATETIME, 0);
	}
	public T_DAY(): TerminalNode {
		return this.getToken(HiveSql.T_DAY, 0);
	}
	public T_DAYS(): TerminalNode {
		return this.getToken(HiveSql.T_DAYS, 0);
	}
	public T_DEC(): TerminalNode {
		return this.getToken(HiveSql.T_DEC, 0);
	}
	public T_DECIMAL(): TerminalNode {
		return this.getToken(HiveSql.T_DECIMAL, 0);
	}
	public T_DECLARE(): TerminalNode {
		return this.getToken(HiveSql.T_DECLARE, 0);
	}
	public T_DEFAULT(): TerminalNode {
		return this.getToken(HiveSql.T_DEFAULT, 0);
	}
	public T_DEFERRED(): TerminalNode {
		return this.getToken(HiveSql.T_DEFERRED, 0);
	}
	public T_DEFINED(): TerminalNode {
		return this.getToken(HiveSql.T_DEFINED, 0);
	}
	public T_DEFINER(): TerminalNode {
		return this.getToken(HiveSql.T_DEFINER, 0);
	}
	public T_DEFINITION(): TerminalNode {
		return this.getToken(HiveSql.T_DEFINITION, 0);
	}
	public T_DELETE(): TerminalNode {
		return this.getToken(HiveSql.T_DELETE, 0);
	}
	public T_DELIMITED(): TerminalNode {
		return this.getToken(HiveSql.T_DELIMITED, 0);
	}
	public T_DELIMITER(): TerminalNode {
		return this.getToken(HiveSql.T_DELIMITER, 0);
	}
	public T_DENSE_RANK(): TerminalNode {
		return this.getToken(HiveSql.T_DENSE_RANK, 0);
	}
	public T_DESC(): TerminalNode {
		return this.getToken(HiveSql.T_DESC, 0);
	}
	public T_DESCRIBE(): TerminalNode {
		return this.getToken(HiveSql.T_DESCRIBE, 0);
	}
	public T_DIAGNOSTICS(): TerminalNode {
		return this.getToken(HiveSql.T_DIAGNOSTICS, 0);
	}
	public T_DIR(): TerminalNode {
		return this.getToken(HiveSql.T_DIR, 0);
	}
	public T_DIRECTORY(): TerminalNode {
		return this.getToken(HiveSql.T_DIRECTORY, 0);
	}
	public T_DISTINCT(): TerminalNode {
		return this.getToken(HiveSql.T_DISTINCT, 0);
	}
	public T_DISTRIBUTE(): TerminalNode {
		return this.getToken(HiveSql.T_DISTRIBUTE, 0);
	}
	public T_DO(): TerminalNode {
		return this.getToken(HiveSql.T_DO, 0);
	}
	public T_DOUBLE(): TerminalNode {
		return this.getToken(HiveSql.T_DOUBLE, 0);
	}
	public T_DROP(): TerminalNode {
		return this.getToken(HiveSql.T_DROP, 0);
	}
	public T_DYNAMIC(): TerminalNode {
		return this.getToken(HiveSql.T_DYNAMIC, 0);
	}
	public T_ENABLE(): TerminalNode {
		return this.getToken(HiveSql.T_ENABLE, 0);
	}
	public T_ENGINE(): TerminalNode {
		return this.getToken(HiveSql.T_ENGINE, 0);
	}
	public T_ESCAPED(): TerminalNode {
		return this.getToken(HiveSql.T_ESCAPED, 0);
	}
	public T_EXCEPT(): TerminalNode {
		return this.getToken(HiveSql.T_EXCEPT, 0);
	}
	public T_EXEC(): TerminalNode {
		return this.getToken(HiveSql.T_EXEC, 0);
	}
	public T_EXECUTE(): TerminalNode {
		return this.getToken(HiveSql.T_EXECUTE, 0);
	}
	public T_EXCEPTION(): TerminalNode {
		return this.getToken(HiveSql.T_EXCEPTION, 0);
	}
	public T_EXCLUSIVE(): TerminalNode {
		return this.getToken(HiveSql.T_EXCLUSIVE, 0);
	}
	public T_EXISTS(): TerminalNode {
		return this.getToken(HiveSql.T_EXISTS, 0);
	}
	public T_EXIT(): TerminalNode {
		return this.getToken(HiveSql.T_EXIT, 0);
	}
	public T_FALLBACK(): TerminalNode {
		return this.getToken(HiveSql.T_FALLBACK, 0);
	}
	public T_FALSE(): TerminalNode {
		return this.getToken(HiveSql.T_FALSE, 0);
	}
	public T_FETCH(): TerminalNode {
		return this.getToken(HiveSql.T_FETCH, 0);
	}
	public T_FIELDS(): TerminalNode {
		return this.getToken(HiveSql.T_FIELDS, 0);
	}
	public T_FILE(): TerminalNode {
		return this.getToken(HiveSql.T_FILE, 0);
	}
	public T_FILES(): TerminalNode {
		return this.getToken(HiveSql.T_FILES, 0);
	}
	public T_FIRST_VALUE(): TerminalNode {
		return this.getToken(HiveSql.T_FIRST_VALUE, 0);
	}
	public T_FLOAT(): TerminalNode {
		return this.getToken(HiveSql.T_FLOAT, 0);
	}
	public T_FOR(): TerminalNode {
		return this.getToken(HiveSql.T_FOR, 0);
	}
	public T_FOREIGN(): TerminalNode {
		return this.getToken(HiveSql.T_FOREIGN, 0);
	}
	public T_FORMAT(): TerminalNode {
		return this.getToken(HiveSql.T_FORMAT, 0);
	}
	public T_FOUND(): TerminalNode {
		return this.getToken(HiveSql.T_FOUND, 0);
	}
	public T_FROM(): TerminalNode {
		return this.getToken(HiveSql.T_FROM, 0);
	}
	public T_FULL(): TerminalNode {
		return this.getToken(HiveSql.T_FULL, 0);
	}
	public T_FUNCTION(): TerminalNode {
		return this.getToken(HiveSql.T_FUNCTION, 0);
	}
	public T_GET(): TerminalNode {
		return this.getToken(HiveSql.T_GET, 0);
	}
	public T_GLOBAL(): TerminalNode {
		return this.getToken(HiveSql.T_GLOBAL, 0);
	}
	public T_GO(): TerminalNode {
		return this.getToken(HiveSql.T_GO, 0);
	}
	public T_GRANT(): TerminalNode {
		return this.getToken(HiveSql.T_GRANT, 0);
	}
	public T_GROUP(): TerminalNode {
		return this.getToken(HiveSql.T_GROUP, 0);
	}
	public T_HANDLER(): TerminalNode {
		return this.getToken(HiveSql.T_HANDLER, 0);
	}
	public T_HASH(): TerminalNode {
		return this.getToken(HiveSql.T_HASH, 0);
	}
	public T_HAVING(): TerminalNode {
		return this.getToken(HiveSql.T_HAVING, 0);
	}
	public T_HDFS(): TerminalNode {
		return this.getToken(HiveSql.T_HDFS, 0);
	}
	public T_HIVE(): TerminalNode {
		return this.getToken(HiveSql.T_HIVE, 0);
	}
	public T_HOST(): TerminalNode {
		return this.getToken(HiveSql.T_HOST, 0);
	}
	public T_IDENTITY(): TerminalNode {
		return this.getToken(HiveSql.T_IDENTITY, 0);
	}
	public T_IF(): TerminalNode {
		return this.getToken(HiveSql.T_IF, 0);
	}
	public T_IGNORE(): TerminalNode {
		return this.getToken(HiveSql.T_IGNORE, 0);
	}
	public T_IMMEDIATE(): TerminalNode {
		return this.getToken(HiveSql.T_IMMEDIATE, 0);
	}
	public T_IN(): TerminalNode {
		return this.getToken(HiveSql.T_IN, 0);
	}
	public T_INCLUDE(): TerminalNode {
		return this.getToken(HiveSql.T_INCLUDE, 0);
	}
	public T_INDEX(): TerminalNode {
		return this.getToken(HiveSql.T_INDEX, 0);
	}
	public T_INITRANS(): TerminalNode {
		return this.getToken(HiveSql.T_INITRANS, 0);
	}
	public T_INNER(): TerminalNode {
		return this.getToken(HiveSql.T_INNER, 0);
	}
	public T_INOUT(): TerminalNode {
		return this.getToken(HiveSql.T_INOUT, 0);
	}
	public T_INSERT(): TerminalNode {
		return this.getToken(HiveSql.T_INSERT, 0);
	}
	public T_INT(): TerminalNode {
		return this.getToken(HiveSql.T_INT, 0);
	}
	public T_INT2(): TerminalNode {
		return this.getToken(HiveSql.T_INT2, 0);
	}
	public T_INT4(): TerminalNode {
		return this.getToken(HiveSql.T_INT4, 0);
	}
	public T_INT8(): TerminalNode {
		return this.getToken(HiveSql.T_INT8, 0);
	}
	public T_INTEGER(): TerminalNode {
		return this.getToken(HiveSql.T_INTEGER, 0);
	}
	public T_INTERSECT(): TerminalNode {
		return this.getToken(HiveSql.T_INTERSECT, 0);
	}
	public T_INTERVAL(): TerminalNode {
		return this.getToken(HiveSql.T_INTERVAL, 0);
	}
	public T_INTO(): TerminalNode {
		return this.getToken(HiveSql.T_INTO, 0);
	}
	public T_INVOKER(): TerminalNode {
		return this.getToken(HiveSql.T_INVOKER, 0);
	}
	public T_ITEMS(): TerminalNode {
		return this.getToken(HiveSql.T_ITEMS, 0);
	}
	public T_IS(): TerminalNode {
		return this.getToken(HiveSql.T_IS, 0);
	}
	public T_ISOPEN(): TerminalNode {
		return this.getToken(HiveSql.T_ISOPEN, 0);
	}
	public T_JOIN(): TerminalNode {
		return this.getToken(HiveSql.T_JOIN, 0);
	}
	public T_KEEP(): TerminalNode {
		return this.getToken(HiveSql.T_KEEP, 0);
	}
	public T_KEY(): TerminalNode {
		return this.getToken(HiveSql.T_KEY, 0);
	}
	public T_KEYS(): TerminalNode {
		return this.getToken(HiveSql.T_KEYS, 0);
	}
	public T_LAG(): TerminalNode {
		return this.getToken(HiveSql.T_LAG, 0);
	}
	public T_LANGUAGE(): TerminalNode {
		return this.getToken(HiveSql.T_LANGUAGE, 0);
	}
	public T_LAST_VALUE(): TerminalNode {
		return this.getToken(HiveSql.T_LAST_VALUE, 0);
	}
	public T_LEAD(): TerminalNode {
		return this.getToken(HiveSql.T_LEAD, 0);
	}
	public T_LEAVE(): TerminalNode {
		return this.getToken(HiveSql.T_LEAVE, 0);
	}
	public T_LEFT(): TerminalNode {
		return this.getToken(HiveSql.T_LEFT, 0);
	}
	public T_LIKE(): TerminalNode {
		return this.getToken(HiveSql.T_LIKE, 0);
	}
	public T_LIMIT(): TerminalNode {
		return this.getToken(HiveSql.T_LIMIT, 0);
	}
	public T_LINES(): TerminalNode {
		return this.getToken(HiveSql.T_LINES, 0);
	}
	public T_LOCAL(): TerminalNode {
		return this.getToken(HiveSql.T_LOCAL, 0);
	}
	public T_LOCATION(): TerminalNode {
		return this.getToken(HiveSql.T_LOCATION, 0);
	}
	public T_LOCATOR(): TerminalNode {
		return this.getToken(HiveSql.T_LOCATOR, 0);
	}
	public T_LOCATORS(): TerminalNode {
		return this.getToken(HiveSql.T_LOCATORS, 0);
	}
	public T_LOCKS(): TerminalNode {
		return this.getToken(HiveSql.T_LOCKS, 0);
	}
	public T_LOG(): TerminalNode {
		return this.getToken(HiveSql.T_LOG, 0);
	}
	public T_LOGGED(): TerminalNode {
		return this.getToken(HiveSql.T_LOGGED, 0);
	}
	public T_LOGGING(): TerminalNode {
		return this.getToken(HiveSql.T_LOGGING, 0);
	}
	public T_LOOP(): TerminalNode {
		return this.getToken(HiveSql.T_LOOP, 0);
	}
	public T_MAP(): TerminalNode {
		return this.getToken(HiveSql.T_MAP, 0);
	}
	public T_MATCHED(): TerminalNode {
		return this.getToken(HiveSql.T_MATCHED, 0);
	}
	public T_MAX(): TerminalNode {
		return this.getToken(HiveSql.T_MAX, 0);
	}
	public T_MAXTRANS(): TerminalNode {
		return this.getToken(HiveSql.T_MAXTRANS, 0);
	}
	public T_MERGE(): TerminalNode {
		return this.getToken(HiveSql.T_MERGE, 0);
	}
	public T_MESSAGE_TEXT(): TerminalNode {
		return this.getToken(HiveSql.T_MESSAGE_TEXT, 0);
	}
	public T_MICROSECOND(): TerminalNode {
		return this.getToken(HiveSql.T_MICROSECOND, 0);
	}
	public T_MICROSECONDS(): TerminalNode {
		return this.getToken(HiveSql.T_MICROSECONDS, 0);
	}
	public T_MIN(): TerminalNode {
		return this.getToken(HiveSql.T_MIN, 0);
	}
	public T_MULTISET(): TerminalNode {
		return this.getToken(HiveSql.T_MULTISET, 0);
	}
	public T_NCHAR(): TerminalNode {
		return this.getToken(HiveSql.T_NCHAR, 0);
	}
	public T_NEW(): TerminalNode {
		return this.getToken(HiveSql.T_NEW, 0);
	}
	public T_NVARCHAR(): TerminalNode {
		return this.getToken(HiveSql.T_NVARCHAR, 0);
	}
	public T_NO(): TerminalNode {
		return this.getToken(HiveSql.T_NO, 0);
	}
	public T_NOCOMPRESS(): TerminalNode {
		return this.getToken(HiveSql.T_NOCOMPRESS, 0);
	}
	public T_NOCOUNT(): TerminalNode {
		return this.getToken(HiveSql.T_NOCOUNT, 0);
	}
	public T_NOLOGGING(): TerminalNode {
		return this.getToken(HiveSql.T_NOLOGGING, 0);
	}
	public T_NONE(): TerminalNode {
		return this.getToken(HiveSql.T_NONE, 0);
	}
	public T_NOT(): TerminalNode {
		return this.getToken(HiveSql.T_NOT, 0);
	}
	public T_NOTFOUND(): TerminalNode {
		return this.getToken(HiveSql.T_NOTFOUND, 0);
	}
	public T_NUMERIC(): TerminalNode {
		return this.getToken(HiveSql.T_NUMERIC, 0);
	}
	public T_NUMBER(): TerminalNode {
		return this.getToken(HiveSql.T_NUMBER, 0);
	}
	public T_OBJECT(): TerminalNode {
		return this.getToken(HiveSql.T_OBJECT, 0);
	}
	public T_OFF(): TerminalNode {
		return this.getToken(HiveSql.T_OFF, 0);
	}
	public T_ON(): TerminalNode {
		return this.getToken(HiveSql.T_ON, 0);
	}
	public T_ONLY(): TerminalNode {
		return this.getToken(HiveSql.T_ONLY, 0);
	}
	public T_OPEN(): TerminalNode {
		return this.getToken(HiveSql.T_OPEN, 0);
	}
	public T_OR(): TerminalNode {
		return this.getToken(HiveSql.T_OR, 0);
	}
	public T_ORDER(): TerminalNode {
		return this.getToken(HiveSql.T_ORDER, 0);
	}
	public T_OUT(): TerminalNode {
		return this.getToken(HiveSql.T_OUT, 0);
	}
	public T_OUTER(): TerminalNode {
		return this.getToken(HiveSql.T_OUTER, 0);
	}
	public T_OVER(): TerminalNode {
		return this.getToken(HiveSql.T_OVER, 0);
	}
	public T_OVERWRITE(): TerminalNode {
		return this.getToken(HiveSql.T_OVERWRITE, 0);
	}
	public T_OWNER(): TerminalNode {
		return this.getToken(HiveSql.T_OWNER, 0);
	}
	public T_PACKAGE(): TerminalNode {
		return this.getToken(HiveSql.T_PACKAGE, 0);
	}
	public T_PART_COUNT(): TerminalNode {
		return this.getToken(HiveSql.T_PART_COUNT, 0);
	}
	public T_PART_LOC(): TerminalNode {
		return this.getToken(HiveSql.T_PART_LOC, 0);
	}
	public T_PARTITION(): TerminalNode {
		return this.getToken(HiveSql.T_PARTITION, 0);
	}
	public T_PCTFREE(): TerminalNode {
		return this.getToken(HiveSql.T_PCTFREE, 0);
	}
	public T_PCTUSED(): TerminalNode {
		return this.getToken(HiveSql.T_PCTUSED, 0);
	}
	public T_PRECISION(): TerminalNode {
		return this.getToken(HiveSql.T_PRECISION, 0);
	}
	public T_PRESERVE(): TerminalNode {
		return this.getToken(HiveSql.T_PRESERVE, 0);
	}
	public T_PRIMARY(): TerminalNode {
		return this.getToken(HiveSql.T_PRIMARY, 0);
	}
	public T_PRINT(): TerminalNode {
		return this.getToken(HiveSql.T_PRINT, 0);
	}
	public T_PROC(): TerminalNode {
		return this.getToken(HiveSql.T_PROC, 0);
	}
	public T_PROCEDURE(): TerminalNode {
		return this.getToken(HiveSql.T_PROCEDURE, 0);
	}
	public T_PWD(): TerminalNode {
		return this.getToken(HiveSql.T_PWD, 0);
	}
	public T_QUALIFY(): TerminalNode {
		return this.getToken(HiveSql.T_QUALIFY, 0);
	}
	public T_QUERY_BAND(): TerminalNode {
		return this.getToken(HiveSql.T_QUERY_BAND, 0);
	}
	public T_QUIT(): TerminalNode {
		return this.getToken(HiveSql.T_QUIT, 0);
	}
	public T_QUOTED_IDENTIFIER(): TerminalNode {
		return this.getToken(HiveSql.T_QUOTED_IDENTIFIER, 0);
	}
	public T_RAISE(): TerminalNode {
		return this.getToken(HiveSql.T_RAISE, 0);
	}
	public T_RANK(): TerminalNode {
		return this.getToken(HiveSql.T_RANK, 0);
	}
	public T_REAL(): TerminalNode {
		return this.getToken(HiveSql.T_REAL, 0);
	}
	public T_REFERENCES(): TerminalNode {
		return this.getToken(HiveSql.T_REFERENCES, 0);
	}
	public T_REGEXP(): TerminalNode {
		return this.getToken(HiveSql.T_REGEXP, 0);
	}
	public T_RR(): TerminalNode {
		return this.getToken(HiveSql.T_RR, 0);
	}
	public T_REPLACE(): TerminalNode {
		return this.getToken(HiveSql.T_REPLACE, 0);
	}
	public T_RESIGNAL(): TerminalNode {
		return this.getToken(HiveSql.T_RESIGNAL, 0);
	}
	public T_RESTRICT(): TerminalNode {
		return this.getToken(HiveSql.T_RESTRICT, 0);
	}
	public T_RESULT(): TerminalNode {
		return this.getToken(HiveSql.T_RESULT, 0);
	}
	public T_RESULT_SET_LOCATOR(): TerminalNode {
		return this.getToken(HiveSql.T_RESULT_SET_LOCATOR, 0);
	}
	public T_RETURN(): TerminalNode {
		return this.getToken(HiveSql.T_RETURN, 0);
	}
	public T_RETURNS(): TerminalNode {
		return this.getToken(HiveSql.T_RETURNS, 0);
	}
	public T_REVERSE(): TerminalNode {
		return this.getToken(HiveSql.T_REVERSE, 0);
	}
	public T_RIGHT(): TerminalNode {
		return this.getToken(HiveSql.T_RIGHT, 0);
	}
	public T_RLIKE(): TerminalNode {
		return this.getToken(HiveSql.T_RLIKE, 0);
	}
	public T_RS(): TerminalNode {
		return this.getToken(HiveSql.T_RS, 0);
	}
	public T_ROLE(): TerminalNode {
		return this.getToken(HiveSql.T_ROLE, 0);
	}
	public T_ROLLBACK(): TerminalNode {
		return this.getToken(HiveSql.T_ROLLBACK, 0);
	}
	public T_ROW(): TerminalNode {
		return this.getToken(HiveSql.T_ROW, 0);
	}
	public T_ROWS(): TerminalNode {
		return this.getToken(HiveSql.T_ROWS, 0);
	}
	public T_ROW_COUNT(): TerminalNode {
		return this.getToken(HiveSql.T_ROW_COUNT, 0);
	}
	public T_ROW_NUMBER(): TerminalNode {
		return this.getToken(HiveSql.T_ROW_NUMBER, 0);
	}
	public T_SCHEMA(): TerminalNode {
		return this.getToken(HiveSql.T_SCHEMA, 0);
	}
	public T_SECOND(): TerminalNode {
		return this.getToken(HiveSql.T_SECOND, 0);
	}
	public T_SECONDS(): TerminalNode {
		return this.getToken(HiveSql.T_SECONDS, 0);
	}
	public T_SECURITY(): TerminalNode {
		return this.getToken(HiveSql.T_SECURITY, 0);
	}
	public T_SEGMENT(): TerminalNode {
		return this.getToken(HiveSql.T_SEGMENT, 0);
	}
	public T_SEL(): TerminalNode {
		return this.getToken(HiveSql.T_SEL, 0);
	}
	public T_SELECT(): TerminalNode {
		return this.getToken(HiveSql.T_SELECT, 0);
	}
	public T_SESSION(): TerminalNode {
		return this.getToken(HiveSql.T_SESSION, 0);
	}
	public T_SESSIONS(): TerminalNode {
		return this.getToken(HiveSql.T_SESSIONS, 0);
	}
	public T_SET(): TerminalNode {
		return this.getToken(HiveSql.T_SET, 0);
	}
	public T_SETS(): TerminalNode {
		return this.getToken(HiveSql.T_SETS, 0);
	}
	public T_SHARE(): TerminalNode {
		return this.getToken(HiveSql.T_SHARE, 0);
	}
	public T_SIGNAL(): TerminalNode {
		return this.getToken(HiveSql.T_SIGNAL, 0);
	}
	public T_SIMPLE_DOUBLE(): TerminalNode {
		return this.getToken(HiveSql.T_SIMPLE_DOUBLE, 0);
	}
	public T_SIMPLE_FLOAT(): TerminalNode {
		return this.getToken(HiveSql.T_SIMPLE_FLOAT, 0);
	}
	public T_SMALLDATETIME(): TerminalNode {
		return this.getToken(HiveSql.T_SMALLDATETIME, 0);
	}
	public T_SMALLINT(): TerminalNode {
		return this.getToken(HiveSql.T_SMALLINT, 0);
	}
	public T_SQL(): TerminalNode {
		return this.getToken(HiveSql.T_SQL, 0);
	}
	public T_SQLEXCEPTION(): TerminalNode {
		return this.getToken(HiveSql.T_SQLEXCEPTION, 0);
	}
	public T_SQLINSERT(): TerminalNode {
		return this.getToken(HiveSql.T_SQLINSERT, 0);
	}
	public T_SQLSTATE(): TerminalNode {
		return this.getToken(HiveSql.T_SQLSTATE, 0);
	}
	public T_SQLWARNING(): TerminalNode {
		return this.getToken(HiveSql.T_SQLWARNING, 0);
	}
	public T_STATS(): TerminalNode {
		return this.getToken(HiveSql.T_STATS, 0);
	}
	public T_STATISTICS(): TerminalNode {
		return this.getToken(HiveSql.T_STATISTICS, 0);
	}
	public T_STEP(): TerminalNode {
		return this.getToken(HiveSql.T_STEP, 0);
	}
	public T_STDEV(): TerminalNode {
		return this.getToken(HiveSql.T_STDEV, 0);
	}
	public T_STORAGE(): TerminalNode {
		return this.getToken(HiveSql.T_STORAGE, 0);
	}
	public T_STORED(): TerminalNode {
		return this.getToken(HiveSql.T_STORED, 0);
	}
	public T_STRING(): TerminalNode {
		return this.getToken(HiveSql.T_STRING, 0);
	}
	public T_SUBDIR(): TerminalNode {
		return this.getToken(HiveSql.T_SUBDIR, 0);
	}
	public T_SUBSTRING(): TerminalNode {
		return this.getToken(HiveSql.T_SUBSTRING, 0);
	}
	public T_SUM(): TerminalNode {
		return this.getToken(HiveSql.T_SUM, 0);
	}
	public T_SUMMARY(): TerminalNode {
		return this.getToken(HiveSql.T_SUMMARY, 0);
	}
	public T_SYSDATE(): TerminalNode {
		return this.getToken(HiveSql.T_SYSDATE, 0);
	}
	public T_SYS_REFCURSOR(): TerminalNode {
		return this.getToken(HiveSql.T_SYS_REFCURSOR, 0);
	}
	public T_TABLE(): TerminalNode {
		return this.getToken(HiveSql.T_TABLE, 0);
	}
	public T_TABLESPACE(): TerminalNode {
		return this.getToken(HiveSql.T_TABLESPACE, 0);
	}
	public T_TEMPORARY(): TerminalNode {
		return this.getToken(HiveSql.T_TEMPORARY, 0);
	}
	public T_TERMINATED(): TerminalNode {
		return this.getToken(HiveSql.T_TERMINATED, 0);
	}
	public T_TEXTIMAGE_ON(): TerminalNode {
		return this.getToken(HiveSql.T_TEXTIMAGE_ON, 0);
	}
	public T_THEN(): TerminalNode {
		return this.getToken(HiveSql.T_THEN, 0);
	}
	public T_TIMESTAMP(): TerminalNode {
		return this.getToken(HiveSql.T_TIMESTAMP, 0);
	}
	public T_TITLE(): TerminalNode {
		return this.getToken(HiveSql.T_TITLE, 0);
	}
	public T_TO(): TerminalNode {
		return this.getToken(HiveSql.T_TO, 0);
	}
	public T_TOP(): TerminalNode {
		return this.getToken(HiveSql.T_TOP, 0);
	}
	public T_TRANSACTION(): TerminalNode {
		return this.getToken(HiveSql.T_TRANSACTION, 0);
	}
	public T_TRIM(): TerminalNode {
		return this.getToken(HiveSql.T_TRIM, 0);
	}
	public T_TRUE(): TerminalNode {
		return this.getToken(HiveSql.T_TRUE, 0);
	}
	public T_TRUNCATE(): TerminalNode {
		return this.getToken(HiveSql.T_TRUNCATE, 0);
	}
	public T_UNIQUE(): TerminalNode {
		return this.getToken(HiveSql.T_UNIQUE, 0);
	}
	public T_UPDATE(): TerminalNode {
		return this.getToken(HiveSql.T_UPDATE, 0);
	}
	public T_UR(): TerminalNode {
		return this.getToken(HiveSql.T_UR, 0);
	}
	public T_USE(): TerminalNode {
		return this.getToken(HiveSql.T_USE, 0);
	}
	public T_USER(): TerminalNode {
		return this.getToken(HiveSql.T_USER, 0);
	}
	public T_USING(): TerminalNode {
		return this.getToken(HiveSql.T_USING, 0);
	}
	public T_VALUE(): TerminalNode {
		return this.getToken(HiveSql.T_VALUE, 0);
	}
	public T_VALUES(): TerminalNode {
		return this.getToken(HiveSql.T_VALUES, 0);
	}
	public T_VAR(): TerminalNode {
		return this.getToken(HiveSql.T_VAR, 0);
	}
	public T_VARCHAR(): TerminalNode {
		return this.getToken(HiveSql.T_VARCHAR, 0);
	}
	public T_VARCHAR2(): TerminalNode {
		return this.getToken(HiveSql.T_VARCHAR2, 0);
	}
	public T_VARYING(): TerminalNode {
		return this.getToken(HiveSql.T_VARYING, 0);
	}
	public T_VARIANCE(): TerminalNode {
		return this.getToken(HiveSql.T_VARIANCE, 0);
	}
	public T_VOLATILE(): TerminalNode {
		return this.getToken(HiveSql.T_VOLATILE, 0);
	}
	public T_WHILE(): TerminalNode {
		return this.getToken(HiveSql.T_WHILE, 0);
	}
	public T_WITH(): TerminalNode {
		return this.getToken(HiveSql.T_WITH, 0);
	}
	public T_WITHOUT(): TerminalNode {
		return this.getToken(HiveSql.T_WITHOUT, 0);
	}
	public T_WORK(): TerminalNode {
		return this.getToken(HiveSql.T_WORK, 0);
	}
	public T_XACT_ABORT(): TerminalNode {
		return this.getToken(HiveSql.T_XACT_ABORT, 0);
	}
	public T_XML(): TerminalNode {
		return this.getToken(HiveSql.T_XML, 0);
	}
	public T_YES(): TerminalNode {
		return this.getToken(HiveSql.T_YES, 0);
	}
    public get ruleIndex(): number {
    	return HiveSql.RULE_non_reserved_words;
	}
	public enterRule(listener: HiveSqlListener): void {
	    if(listener.enterNon_reserved_words) {
	 		listener.enterNon_reserved_words(this);
		}
	}
	public exitRule(listener: HiveSqlListener): void {
	    if(listener.exitNon_reserved_words) {
	 		listener.exitNon_reserved_words(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HiveSqlVisitor<Result>): Result {
		if (visitor.visitNon_reserved_words) {
			return visitor.visitNon_reserved_words(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
