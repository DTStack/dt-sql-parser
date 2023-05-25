// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/hive/HiveSql.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { Single_quotedStringContext } from "./HiveSql";
import { Double_quotedStringContext } from "./HiveSql";
import { ProgramContext } from "./HiveSql";
import { BlockContext } from "./HiveSql";
import { Begin_end_blockContext } from "./HiveSql";
import { Single_block_stmtContext } from "./HiveSql";
import { Block_endContext } from "./HiveSql";
import { Proc_blockContext } from "./HiveSql";
import { StmtContext } from "./HiveSql";
import { Semicolon_stmtContext } from "./HiveSql";
import { Exception_blockContext } from "./HiveSql";
import { Exception_block_itemContext } from "./HiveSql";
import { Null_stmtContext } from "./HiveSql";
import { Expr_stmtContext } from "./HiveSql";
import { Assignment_stmtContext } from "./HiveSql";
import { Assignment_stmt_itemContext } from "./HiveSql";
import { Assignment_stmt_single_itemContext } from "./HiveSql";
import { Assignment_stmt_multiple_itemContext } from "./HiveSql";
import { Assignment_stmt_select_itemContext } from "./HiveSql";
import { Allocate_cursor_stmtContext } from "./HiveSql";
import { Associate_locator_stmtContext } from "./HiveSql";
import { Begin_transaction_stmtContext } from "./HiveSql";
import { Break_stmtContext } from "./HiveSql";
import { Call_stmtContext } from "./HiveSql";
import { Declare_stmtContext } from "./HiveSql";
import { Declare_blockContext } from "./HiveSql";
import { Declare_block_inplaceContext } from "./HiveSql";
import { Declare_stmt_itemContext } from "./HiveSql";
import { Declare_var_itemContext } from "./HiveSql";
import { Declare_condition_itemContext } from "./HiveSql";
import { Declare_cursor_itemContext } from "./HiveSql";
import { Cursor_with_returnContext } from "./HiveSql";
import { Cursor_without_returnContext } from "./HiveSql";
import { Declare_handler_itemContext } from "./HiveSql";
import { Declare_temporary_table_itemContext } from "./HiveSql";
import { Create_table_stmtContext } from "./HiveSql";
import { Create_local_temp_table_stmtContext } from "./HiveSql";
import { Create_table_definitionContext } from "./HiveSql";
import { Create_table_columnsContext } from "./HiveSql";
import { Create_table_columns_itemContext } from "./HiveSql";
import { Column_nameContext } from "./HiveSql";
import { Create_table_column_inline_consContext } from "./HiveSql";
import { Create_table_column_consContext } from "./HiveSql";
import { Create_table_fk_actionContext } from "./HiveSql";
import { Create_table_preoptionsContext } from "./HiveSql";
import { Create_table_preoptions_itemContext } from "./HiveSql";
import { Create_table_preoptions_td_itemContext } from "./HiveSql";
import { Create_table_optionsContext } from "./HiveSql";
import { Create_table_options_itemContext } from "./HiveSql";
import { Create_table_options_ora_itemContext } from "./HiveSql";
import { Create_table_options_db2_itemContext } from "./HiveSql";
import { Create_table_options_td_itemContext } from "./HiveSql";
import { Create_table_options_hive_itemContext } from "./HiveSql";
import { Create_table_hive_row_formatContext } from "./HiveSql";
import { Create_table_hive_row_format_fieldsContext } from "./HiveSql";
import { Create_table_options_mssql_itemContext } from "./HiveSql";
import { Create_table_options_mysql_itemContext } from "./HiveSql";
import { Alter_table_stmtContext } from "./HiveSql";
import { Alter_table_itemContext } from "./HiveSql";
import { Alter_table_add_constraintContext } from "./HiveSql";
import { Alter_table_add_constraint_itemContext } from "./HiveSql";
import { DtypeContext } from "./HiveSql";
import { Dtype_lenContext } from "./HiveSql";
import { Dtype_attrContext } from "./HiveSql";
import { Dtype_defaultContext } from "./HiveSql";
import { Create_database_stmtContext } from "./HiveSql";
import { Create_database_optionContext } from "./HiveSql";
import { Create_function_stmtContext } from "./HiveSql";
import { Create_function_returnContext } from "./HiveSql";
import { Create_package_stmtContext } from "./HiveSql";
import { Package_specContext } from "./HiveSql";
import { Package_spec_itemContext } from "./HiveSql";
import { Create_package_body_stmtContext } from "./HiveSql";
import { Package_bodyContext } from "./HiveSql";
import { Package_body_itemContext } from "./HiveSql";
import { Create_procedure_stmtContext } from "./HiveSql";
import { Create_routine_paramsContext } from "./HiveSql";
import { Create_routine_param_itemContext } from "./HiveSql";
import { Create_routine_optionsContext } from "./HiveSql";
import { Create_routine_optionContext } from "./HiveSql";
import { Drop_stmtContext } from "./HiveSql";
import { End_transaction_stmtContext } from "./HiveSql";
import { Exec_stmtContext } from "./HiveSql";
import { If_stmtContext } from "./HiveSql";
import { If_plsql_stmtContext } from "./HiveSql";
import { If_tsql_stmtContext } from "./HiveSql";
import { If_bteq_stmtContext } from "./HiveSql";
import { Elseif_blockContext } from "./HiveSql";
import { Else_blockContext } from "./HiveSql";
import { Include_stmtContext } from "./HiveSql";
import { Insert_stmtContext } from "./HiveSql";
import { Insert_stmt_colsContext } from "./HiveSql";
import { Insert_stmt_rowsContext } from "./HiveSql";
import { Insert_stmt_rowContext } from "./HiveSql";
import { Insert_directory_stmtContext } from "./HiveSql";
import { Exit_stmtContext } from "./HiveSql";
import { Get_diag_stmtContext } from "./HiveSql";
import { Get_diag_stmt_itemContext } from "./HiveSql";
import { Get_diag_stmt_exception_itemContext } from "./HiveSql";
import { Get_diag_stmt_rowcount_itemContext } from "./HiveSql";
import { Grant_stmtContext } from "./HiveSql";
import { Grant_stmt_itemContext } from "./HiveSql";
import { Leave_stmtContext } from "./HiveSql";
import { Map_object_stmtContext } from "./HiveSql";
import { Open_stmtContext } from "./HiveSql";
import { Fetch_stmtContext } from "./HiveSql";
import { Collect_stats_stmtContext } from "./HiveSql";
import { Collect_stats_clauseContext } from "./HiveSql";
import { Close_stmtContext } from "./HiveSql";
import { Cmp_stmtContext } from "./HiveSql";
import { Cmp_sourceContext } from "./HiveSql";
import { Copy_from_local_stmtContext } from "./HiveSql";
import { Copy_stmtContext } from "./HiveSql";
import { Copy_sourceContext } from "./HiveSql";
import { Copy_targetContext } from "./HiveSql";
import { Copy_optionContext } from "./HiveSql";
import { Copy_file_optionContext } from "./HiveSql";
import { Commit_stmtContext } from "./HiveSql";
import { Create_index_stmtContext } from "./HiveSql";
import { Create_index_colContext } from "./HiveSql";
import { Index_storage_clauseContext } from "./HiveSql";
import { Index_mssql_storage_clauseContext } from "./HiveSql";
import { Print_stmtContext } from "./HiveSql";
import { Quit_stmtContext } from "./HiveSql";
import { Raise_stmtContext } from "./HiveSql";
import { Resignal_stmtContext } from "./HiveSql";
import { Return_stmtContext } from "./HiveSql";
import { Rollback_stmtContext } from "./HiveSql";
import { Set_session_optionContext } from "./HiveSql";
import { Set_current_schema_optionContext } from "./HiveSql";
import { Set_mssql_session_optionContext } from "./HiveSql";
import { Set_teradata_session_optionContext } from "./HiveSql";
import { Signal_stmtContext } from "./HiveSql";
import { Summary_stmtContext } from "./HiveSql";
import { Truncate_stmtContext } from "./HiveSql";
import { Use_stmtContext } from "./HiveSql";
import { Values_into_stmtContext } from "./HiveSql";
import { While_stmtContext } from "./HiveSql";
import { For_cursor_stmtContext } from "./HiveSql";
import { For_range_stmtContext } from "./HiveSql";
import { LabelContext } from "./HiveSql";
import { Using_clauseContext } from "./HiveSql";
import { Select_stmtContext } from "./HiveSql";
import { Cte_select_stmtContext } from "./HiveSql";
import { Cte_select_stmt_itemContext } from "./HiveSql";
import { Cte_select_colsContext } from "./HiveSql";
import { Fullselect_stmtContext } from "./HiveSql";
import { Fullselect_stmt_itemContext } from "./HiveSql";
import { Fullselect_set_clauseContext } from "./HiveSql";
import { Subselect_stmtContext } from "./HiveSql";
import { Select_listContext } from "./HiveSql";
import { Select_list_setContext } from "./HiveSql";
import { Select_list_limitContext } from "./HiveSql";
import { Select_list_itemContext } from "./HiveSql";
import { Select_list_aliasContext } from "./HiveSql";
import { Select_list_asteriskContext } from "./HiveSql";
import { Into_clauseContext } from "./HiveSql";
import { From_clauseContext } from "./HiveSql";
import { From_table_clauseContext } from "./HiveSql";
import { From_table_name_clauseContext } from "./HiveSql";
import { From_subselect_clauseContext } from "./HiveSql";
import { From_join_clauseContext } from "./HiveSql";
import { From_join_type_clauseContext } from "./HiveSql";
import { From_table_values_clauseContext } from "./HiveSql";
import { From_table_values_rowContext } from "./HiveSql";
import { From_alias_clauseContext } from "./HiveSql";
import { Table_nameContext } from "./HiveSql";
import { Where_clauseContext } from "./HiveSql";
import { Group_by_clauseContext } from "./HiveSql";
import { Having_clauseContext } from "./HiveSql";
import { Qualify_clauseContext } from "./HiveSql";
import { Order_by_clauseContext } from "./HiveSql";
import { Select_optionsContext } from "./HiveSql";
import { Select_options_itemContext } from "./HiveSql";
import { Update_stmtContext } from "./HiveSql";
import { Update_assignmentContext } from "./HiveSql";
import { Update_tableContext } from "./HiveSql";
import { Update_upsertContext } from "./HiveSql";
import { Merge_stmtContext } from "./HiveSql";
import { Merge_tableContext } from "./HiveSql";
import { Merge_conditionContext } from "./HiveSql";
import { Merge_actionContext } from "./HiveSql";
import { Delete_stmtContext } from "./HiveSql";
import { Delete_aliasContext } from "./HiveSql";
import { Describe_stmtContext } from "./HiveSql";
import { Bool_exprContext } from "./HiveSql";
import { Bool_expr_atomContext } from "./HiveSql";
import { Bool_expr_unaryContext } from "./HiveSql";
import { Bool_expr_single_inContext } from "./HiveSql";
import { Bool_expr_multi_inContext } from "./HiveSql";
import { Bool_expr_binaryContext } from "./HiveSql";
import { Bool_expr_logical_operatorContext } from "./HiveSql";
import { Bool_expr_binary_operatorContext } from "./HiveSql";
import { ExprContext } from "./HiveSql";
import { Expr_atomContext } from "./HiveSql";
import { Expr_intervalContext } from "./HiveSql";
import { Interval_itemContext } from "./HiveSql";
import { Expr_concatContext } from "./HiveSql";
import { Expr_concat_itemContext } from "./HiveSql";
import { Expr_caseContext } from "./HiveSql";
import { Expr_case_simpleContext } from "./HiveSql";
import { Expr_case_searchedContext } from "./HiveSql";
import { Expr_cursor_attributeContext } from "./HiveSql";
import { Expr_agg_window_funcContext } from "./HiveSql";
import { Expr_func_all_distinctContext } from "./HiveSql";
import { Expr_func_over_clauseContext } from "./HiveSql";
import { Expr_func_partition_by_clauseContext } from "./HiveSql";
import { Expr_spec_funcContext } from "./HiveSql";
import { Expr_funcContext } from "./HiveSql";
import { Expr_func_paramsContext } from "./HiveSql";
import { Func_paramContext } from "./HiveSql";
import { Expr_selectContext } from "./HiveSql";
import { Expr_fileContext } from "./HiveSql";
import { HiveContext } from "./HiveSql";
import { Hive_itemContext } from "./HiveSql";
import { HostContext } from "./HiveSql";
import { Host_cmdContext } from "./HiveSql";
import { Host_stmtContext } from "./HiveSql";
import { File_nameContext } from "./HiveSql";
import { Date_literalContext } from "./HiveSql";
import { Timestamp_literalContext } from "./HiveSql";
import { IdentContext } from "./HiveSql";
import { StringContext } from "./HiveSql";
import { Int_numberContext } from "./HiveSql";
import { Dec_numberContext } from "./HiveSql";
import { Bool_literalContext } from "./HiveSql";
import { Null_constContext } from "./HiveSql";
import { Non_reserved_wordsContext } from "./HiveSql";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HiveSql`.
 */
export interface HiveSqlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `single_quotedString`
	 * labeled alternative in `HiveSql.string`.
	 * @param ctx the parse tree
	 */
	enterSingle_quotedString?: (ctx: Single_quotedStringContext) => void;
	/**
	 * Exit a parse tree produced by the `single_quotedString`
	 * labeled alternative in `HiveSql.string`.
	 * @param ctx the parse tree
	 */
	exitSingle_quotedString?: (ctx: Single_quotedStringContext) => void;

	/**
	 * Enter a parse tree produced by the `double_quotedString`
	 * labeled alternative in `HiveSql.string`.
	 * @param ctx the parse tree
	 */
	enterDouble_quotedString?: (ctx: Double_quotedStringContext) => void;
	/**
	 * Exit a parse tree produced by the `double_quotedString`
	 * labeled alternative in `HiveSql.string`.
	 * @param ctx the parse tree
	 */
	exitDouble_quotedString?: (ctx: Double_quotedStringContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.begin_end_block`.
	 * @param ctx the parse tree
	 */
	enterBegin_end_block?: (ctx: Begin_end_blockContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.begin_end_block`.
	 * @param ctx the parse tree
	 */
	exitBegin_end_block?: (ctx: Begin_end_blockContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.single_block_stmt`.
	 * @param ctx the parse tree
	 */
	enterSingle_block_stmt?: (ctx: Single_block_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.single_block_stmt`.
	 * @param ctx the parse tree
	 */
	exitSingle_block_stmt?: (ctx: Single_block_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.block_end`.
	 * @param ctx the parse tree
	 */
	enterBlock_end?: (ctx: Block_endContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.block_end`.
	 * @param ctx the parse tree
	 */
	exitBlock_end?: (ctx: Block_endContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.proc_block`.
	 * @param ctx the parse tree
	 */
	enterProc_block?: (ctx: Proc_blockContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.proc_block`.
	 * @param ctx the parse tree
	 */
	exitProc_block?: (ctx: Proc_blockContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.semicolon_stmt`.
	 * @param ctx the parse tree
	 */
	enterSemicolon_stmt?: (ctx: Semicolon_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.semicolon_stmt`.
	 * @param ctx the parse tree
	 */
	exitSemicolon_stmt?: (ctx: Semicolon_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.exception_block`.
	 * @param ctx the parse tree
	 */
	enterException_block?: (ctx: Exception_blockContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.exception_block`.
	 * @param ctx the parse tree
	 */
	exitException_block?: (ctx: Exception_blockContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.exception_block_item`.
	 * @param ctx the parse tree
	 */
	enterException_block_item?: (ctx: Exception_block_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.exception_block_item`.
	 * @param ctx the parse tree
	 */
	exitException_block_item?: (ctx: Exception_block_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.null_stmt`.
	 * @param ctx the parse tree
	 */
	enterNull_stmt?: (ctx: Null_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.null_stmt`.
	 * @param ctx the parse tree
	 */
	exitNull_stmt?: (ctx: Null_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_stmt`.
	 * @param ctx the parse tree
	 */
	enterExpr_stmt?: (ctx: Expr_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_stmt`.
	 * @param ctx the parse tree
	 */
	exitExpr_stmt?: (ctx: Expr_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.assignment_stmt`.
	 * @param ctx the parse tree
	 */
	enterAssignment_stmt?: (ctx: Assignment_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.assignment_stmt`.
	 * @param ctx the parse tree
	 */
	exitAssignment_stmt?: (ctx: Assignment_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.assignment_stmt_item`.
	 * @param ctx the parse tree
	 */
	enterAssignment_stmt_item?: (ctx: Assignment_stmt_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.assignment_stmt_item`.
	 * @param ctx the parse tree
	 */
	exitAssignment_stmt_item?: (ctx: Assignment_stmt_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.assignment_stmt_single_item`.
	 * @param ctx the parse tree
	 */
	enterAssignment_stmt_single_item?: (ctx: Assignment_stmt_single_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.assignment_stmt_single_item`.
	 * @param ctx the parse tree
	 */
	exitAssignment_stmt_single_item?: (ctx: Assignment_stmt_single_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.assignment_stmt_multiple_item`.
	 * @param ctx the parse tree
	 */
	enterAssignment_stmt_multiple_item?: (ctx: Assignment_stmt_multiple_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.assignment_stmt_multiple_item`.
	 * @param ctx the parse tree
	 */
	exitAssignment_stmt_multiple_item?: (ctx: Assignment_stmt_multiple_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.assignment_stmt_select_item`.
	 * @param ctx the parse tree
	 */
	enterAssignment_stmt_select_item?: (ctx: Assignment_stmt_select_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.assignment_stmt_select_item`.
	 * @param ctx the parse tree
	 */
	exitAssignment_stmt_select_item?: (ctx: Assignment_stmt_select_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.allocate_cursor_stmt`.
	 * @param ctx the parse tree
	 */
	enterAllocate_cursor_stmt?: (ctx: Allocate_cursor_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.allocate_cursor_stmt`.
	 * @param ctx the parse tree
	 */
	exitAllocate_cursor_stmt?: (ctx: Allocate_cursor_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.associate_locator_stmt`.
	 * @param ctx the parse tree
	 */
	enterAssociate_locator_stmt?: (ctx: Associate_locator_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.associate_locator_stmt`.
	 * @param ctx the parse tree
	 */
	exitAssociate_locator_stmt?: (ctx: Associate_locator_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.begin_transaction_stmt`.
	 * @param ctx the parse tree
	 */
	enterBegin_transaction_stmt?: (ctx: Begin_transaction_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.begin_transaction_stmt`.
	 * @param ctx the parse tree
	 */
	exitBegin_transaction_stmt?: (ctx: Begin_transaction_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.break_stmt`.
	 * @param ctx the parse tree
	 */
	enterBreak_stmt?: (ctx: Break_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.break_stmt`.
	 * @param ctx the parse tree
	 */
	exitBreak_stmt?: (ctx: Break_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.call_stmt`.
	 * @param ctx the parse tree
	 */
	enterCall_stmt?: (ctx: Call_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.call_stmt`.
	 * @param ctx the parse tree
	 */
	exitCall_stmt?: (ctx: Call_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.declare_stmt`.
	 * @param ctx the parse tree
	 */
	enterDeclare_stmt?: (ctx: Declare_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.declare_stmt`.
	 * @param ctx the parse tree
	 */
	exitDeclare_stmt?: (ctx: Declare_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.declare_block`.
	 * @param ctx the parse tree
	 */
	enterDeclare_block?: (ctx: Declare_blockContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.declare_block`.
	 * @param ctx the parse tree
	 */
	exitDeclare_block?: (ctx: Declare_blockContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.declare_block_inplace`.
	 * @param ctx the parse tree
	 */
	enterDeclare_block_inplace?: (ctx: Declare_block_inplaceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.declare_block_inplace`.
	 * @param ctx the parse tree
	 */
	exitDeclare_block_inplace?: (ctx: Declare_block_inplaceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.declare_stmt_item`.
	 * @param ctx the parse tree
	 */
	enterDeclare_stmt_item?: (ctx: Declare_stmt_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.declare_stmt_item`.
	 * @param ctx the parse tree
	 */
	exitDeclare_stmt_item?: (ctx: Declare_stmt_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.declare_var_item`.
	 * @param ctx the parse tree
	 */
	enterDeclare_var_item?: (ctx: Declare_var_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.declare_var_item`.
	 * @param ctx the parse tree
	 */
	exitDeclare_var_item?: (ctx: Declare_var_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.declare_condition_item`.
	 * @param ctx the parse tree
	 */
	enterDeclare_condition_item?: (ctx: Declare_condition_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.declare_condition_item`.
	 * @param ctx the parse tree
	 */
	exitDeclare_condition_item?: (ctx: Declare_condition_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.declare_cursor_item`.
	 * @param ctx the parse tree
	 */
	enterDeclare_cursor_item?: (ctx: Declare_cursor_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.declare_cursor_item`.
	 * @param ctx the parse tree
	 */
	exitDeclare_cursor_item?: (ctx: Declare_cursor_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.cursor_with_return`.
	 * @param ctx the parse tree
	 */
	enterCursor_with_return?: (ctx: Cursor_with_returnContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.cursor_with_return`.
	 * @param ctx the parse tree
	 */
	exitCursor_with_return?: (ctx: Cursor_with_returnContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.cursor_without_return`.
	 * @param ctx the parse tree
	 */
	enterCursor_without_return?: (ctx: Cursor_without_returnContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.cursor_without_return`.
	 * @param ctx the parse tree
	 */
	exitCursor_without_return?: (ctx: Cursor_without_returnContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.declare_handler_item`.
	 * @param ctx the parse tree
	 */
	enterDeclare_handler_item?: (ctx: Declare_handler_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.declare_handler_item`.
	 * @param ctx the parse tree
	 */
	exitDeclare_handler_item?: (ctx: Declare_handler_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.declare_temporary_table_item`.
	 * @param ctx the parse tree
	 */
	enterDeclare_temporary_table_item?: (ctx: Declare_temporary_table_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.declare_temporary_table_item`.
	 * @param ctx the parse tree
	 */
	exitDeclare_temporary_table_item?: (ctx: Declare_temporary_table_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_stmt?: (ctx: Create_table_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_stmt?: (ctx: Create_table_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_local_temp_table_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_local_temp_table_stmt?: (ctx: Create_local_temp_table_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_local_temp_table_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_local_temp_table_stmt?: (ctx: Create_local_temp_table_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_definition`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_definition?: (ctx: Create_table_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_definition`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_definition?: (ctx: Create_table_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_columns`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_columns?: (ctx: Create_table_columnsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_columns`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_columns?: (ctx: Create_table_columnsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_columns_item`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_columns_item?: (ctx: Create_table_columns_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_columns_item`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_columns_item?: (ctx: Create_table_columns_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.column_name`.
	 * @param ctx the parse tree
	 */
	enterColumn_name?: (ctx: Column_nameContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.column_name`.
	 * @param ctx the parse tree
	 */
	exitColumn_name?: (ctx: Column_nameContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_column_inline_cons`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_column_inline_cons?: (ctx: Create_table_column_inline_consContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_column_inline_cons`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_column_inline_cons?: (ctx: Create_table_column_inline_consContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_column_cons`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_column_cons?: (ctx: Create_table_column_consContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_column_cons`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_column_cons?: (ctx: Create_table_column_consContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_fk_action`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_fk_action?: (ctx: Create_table_fk_actionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_fk_action`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_fk_action?: (ctx: Create_table_fk_actionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_preoptions`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_preoptions?: (ctx: Create_table_preoptionsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_preoptions`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_preoptions?: (ctx: Create_table_preoptionsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_preoptions_item`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_preoptions_item?: (ctx: Create_table_preoptions_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_preoptions_item`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_preoptions_item?: (ctx: Create_table_preoptions_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_preoptions_td_item`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_preoptions_td_item?: (ctx: Create_table_preoptions_td_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_preoptions_td_item`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_preoptions_td_item?: (ctx: Create_table_preoptions_td_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_options`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_options?: (ctx: Create_table_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_options`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_options?: (ctx: Create_table_optionsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_options_item`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_options_item?: (ctx: Create_table_options_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_options_item`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_options_item?: (ctx: Create_table_options_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_options_ora_item`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_options_ora_item?: (ctx: Create_table_options_ora_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_options_ora_item`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_options_ora_item?: (ctx: Create_table_options_ora_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_options_db2_item`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_options_db2_item?: (ctx: Create_table_options_db2_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_options_db2_item`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_options_db2_item?: (ctx: Create_table_options_db2_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_options_td_item`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_options_td_item?: (ctx: Create_table_options_td_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_options_td_item`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_options_td_item?: (ctx: Create_table_options_td_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_options_hive_item`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_options_hive_item?: (ctx: Create_table_options_hive_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_options_hive_item`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_options_hive_item?: (ctx: Create_table_options_hive_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_hive_row_format`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_hive_row_format?: (ctx: Create_table_hive_row_formatContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_hive_row_format`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_hive_row_format?: (ctx: Create_table_hive_row_formatContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_hive_row_format_fields`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_hive_row_format_fields?: (ctx: Create_table_hive_row_format_fieldsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_hive_row_format_fields`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_hive_row_format_fields?: (ctx: Create_table_hive_row_format_fieldsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_options_mssql_item`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_options_mssql_item?: (ctx: Create_table_options_mssql_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_options_mssql_item`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_options_mssql_item?: (ctx: Create_table_options_mssql_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_table_options_mysql_item`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_options_mysql_item?: (ctx: Create_table_options_mysql_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_table_options_mysql_item`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_options_mysql_item?: (ctx: Create_table_options_mysql_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alter_table_stmt`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_stmt?: (ctx: Alter_table_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alter_table_stmt`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_stmt?: (ctx: Alter_table_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alter_table_item`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_item?: (ctx: Alter_table_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alter_table_item`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_item?: (ctx: Alter_table_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alter_table_add_constraint`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_add_constraint?: (ctx: Alter_table_add_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alter_table_add_constraint`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_add_constraint?: (ctx: Alter_table_add_constraintContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.alter_table_add_constraint_item`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_add_constraint_item?: (ctx: Alter_table_add_constraint_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.alter_table_add_constraint_item`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_add_constraint_item?: (ctx: Alter_table_add_constraint_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dtype`.
	 * @param ctx the parse tree
	 */
	enterDtype?: (ctx: DtypeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dtype`.
	 * @param ctx the parse tree
	 */
	exitDtype?: (ctx: DtypeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dtype_len`.
	 * @param ctx the parse tree
	 */
	enterDtype_len?: (ctx: Dtype_lenContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dtype_len`.
	 * @param ctx the parse tree
	 */
	exitDtype_len?: (ctx: Dtype_lenContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dtype_attr`.
	 * @param ctx the parse tree
	 */
	enterDtype_attr?: (ctx: Dtype_attrContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dtype_attr`.
	 * @param ctx the parse tree
	 */
	exitDtype_attr?: (ctx: Dtype_attrContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dtype_default`.
	 * @param ctx the parse tree
	 */
	enterDtype_default?: (ctx: Dtype_defaultContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dtype_default`.
	 * @param ctx the parse tree
	 */
	exitDtype_default?: (ctx: Dtype_defaultContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_database_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_database_stmt?: (ctx: Create_database_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_database_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_database_stmt?: (ctx: Create_database_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_database_option`.
	 * @param ctx the parse tree
	 */
	enterCreate_database_option?: (ctx: Create_database_optionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_database_option`.
	 * @param ctx the parse tree
	 */
	exitCreate_database_option?: (ctx: Create_database_optionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_function_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_function_stmt?: (ctx: Create_function_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_function_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_function_stmt?: (ctx: Create_function_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_function_return`.
	 * @param ctx the parse tree
	 */
	enterCreate_function_return?: (ctx: Create_function_returnContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_function_return`.
	 * @param ctx the parse tree
	 */
	exitCreate_function_return?: (ctx: Create_function_returnContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_package_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_package_stmt?: (ctx: Create_package_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_package_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_package_stmt?: (ctx: Create_package_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.package_spec`.
	 * @param ctx the parse tree
	 */
	enterPackage_spec?: (ctx: Package_specContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.package_spec`.
	 * @param ctx the parse tree
	 */
	exitPackage_spec?: (ctx: Package_specContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.package_spec_item`.
	 * @param ctx the parse tree
	 */
	enterPackage_spec_item?: (ctx: Package_spec_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.package_spec_item`.
	 * @param ctx the parse tree
	 */
	exitPackage_spec_item?: (ctx: Package_spec_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_package_body_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_package_body_stmt?: (ctx: Create_package_body_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_package_body_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_package_body_stmt?: (ctx: Create_package_body_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.package_body`.
	 * @param ctx the parse tree
	 */
	enterPackage_body?: (ctx: Package_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.package_body`.
	 * @param ctx the parse tree
	 */
	exitPackage_body?: (ctx: Package_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.package_body_item`.
	 * @param ctx the parse tree
	 */
	enterPackage_body_item?: (ctx: Package_body_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.package_body_item`.
	 * @param ctx the parse tree
	 */
	exitPackage_body_item?: (ctx: Package_body_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_procedure_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_procedure_stmt?: (ctx: Create_procedure_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_procedure_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_procedure_stmt?: (ctx: Create_procedure_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_routine_params`.
	 * @param ctx the parse tree
	 */
	enterCreate_routine_params?: (ctx: Create_routine_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_routine_params`.
	 * @param ctx the parse tree
	 */
	exitCreate_routine_params?: (ctx: Create_routine_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_routine_param_item`.
	 * @param ctx the parse tree
	 */
	enterCreate_routine_param_item?: (ctx: Create_routine_param_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_routine_param_item`.
	 * @param ctx the parse tree
	 */
	exitCreate_routine_param_item?: (ctx: Create_routine_param_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_routine_options`.
	 * @param ctx the parse tree
	 */
	enterCreate_routine_options?: (ctx: Create_routine_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_routine_options`.
	 * @param ctx the parse tree
	 */
	exitCreate_routine_options?: (ctx: Create_routine_optionsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_routine_option`.
	 * @param ctx the parse tree
	 */
	enterCreate_routine_option?: (ctx: Create_routine_optionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_routine_option`.
	 * @param ctx the parse tree
	 */
	exitCreate_routine_option?: (ctx: Create_routine_optionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.drop_stmt`.
	 * @param ctx the parse tree
	 */
	enterDrop_stmt?: (ctx: Drop_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.drop_stmt`.
	 * @param ctx the parse tree
	 */
	exitDrop_stmt?: (ctx: Drop_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.end_transaction_stmt`.
	 * @param ctx the parse tree
	 */
	enterEnd_transaction_stmt?: (ctx: End_transaction_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.end_transaction_stmt`.
	 * @param ctx the parse tree
	 */
	exitEnd_transaction_stmt?: (ctx: End_transaction_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.exec_stmt`.
	 * @param ctx the parse tree
	 */
	enterExec_stmt?: (ctx: Exec_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.exec_stmt`.
	 * @param ctx the parse tree
	 */
	exitExec_stmt?: (ctx: Exec_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.if_stmt`.
	 * @param ctx the parse tree
	 */
	enterIf_stmt?: (ctx: If_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.if_stmt`.
	 * @param ctx the parse tree
	 */
	exitIf_stmt?: (ctx: If_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.if_plsql_stmt`.
	 * @param ctx the parse tree
	 */
	enterIf_plsql_stmt?: (ctx: If_plsql_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.if_plsql_stmt`.
	 * @param ctx the parse tree
	 */
	exitIf_plsql_stmt?: (ctx: If_plsql_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.if_tsql_stmt`.
	 * @param ctx the parse tree
	 */
	enterIf_tsql_stmt?: (ctx: If_tsql_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.if_tsql_stmt`.
	 * @param ctx the parse tree
	 */
	exitIf_tsql_stmt?: (ctx: If_tsql_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.if_bteq_stmt`.
	 * @param ctx the parse tree
	 */
	enterIf_bteq_stmt?: (ctx: If_bteq_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.if_bteq_stmt`.
	 * @param ctx the parse tree
	 */
	exitIf_bteq_stmt?: (ctx: If_bteq_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.elseif_block`.
	 * @param ctx the parse tree
	 */
	enterElseif_block?: (ctx: Elseif_blockContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.elseif_block`.
	 * @param ctx the parse tree
	 */
	exitElseif_block?: (ctx: Elseif_blockContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.else_block`.
	 * @param ctx the parse tree
	 */
	enterElse_block?: (ctx: Else_blockContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.else_block`.
	 * @param ctx the parse tree
	 */
	exitElse_block?: (ctx: Else_blockContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.include_stmt`.
	 * @param ctx the parse tree
	 */
	enterInclude_stmt?: (ctx: Include_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.include_stmt`.
	 * @param ctx the parse tree
	 */
	exitInclude_stmt?: (ctx: Include_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.insert_stmt`.
	 * @param ctx the parse tree
	 */
	enterInsert_stmt?: (ctx: Insert_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.insert_stmt`.
	 * @param ctx the parse tree
	 */
	exitInsert_stmt?: (ctx: Insert_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.insert_stmt_cols`.
	 * @param ctx the parse tree
	 */
	enterInsert_stmt_cols?: (ctx: Insert_stmt_colsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.insert_stmt_cols`.
	 * @param ctx the parse tree
	 */
	exitInsert_stmt_cols?: (ctx: Insert_stmt_colsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.insert_stmt_rows`.
	 * @param ctx the parse tree
	 */
	enterInsert_stmt_rows?: (ctx: Insert_stmt_rowsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.insert_stmt_rows`.
	 * @param ctx the parse tree
	 */
	exitInsert_stmt_rows?: (ctx: Insert_stmt_rowsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.insert_stmt_row`.
	 * @param ctx the parse tree
	 */
	enterInsert_stmt_row?: (ctx: Insert_stmt_rowContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.insert_stmt_row`.
	 * @param ctx the parse tree
	 */
	exitInsert_stmt_row?: (ctx: Insert_stmt_rowContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.insert_directory_stmt`.
	 * @param ctx the parse tree
	 */
	enterInsert_directory_stmt?: (ctx: Insert_directory_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.insert_directory_stmt`.
	 * @param ctx the parse tree
	 */
	exitInsert_directory_stmt?: (ctx: Insert_directory_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.exit_stmt`.
	 * @param ctx the parse tree
	 */
	enterExit_stmt?: (ctx: Exit_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.exit_stmt`.
	 * @param ctx the parse tree
	 */
	exitExit_stmt?: (ctx: Exit_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.get_diag_stmt`.
	 * @param ctx the parse tree
	 */
	enterGet_diag_stmt?: (ctx: Get_diag_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.get_diag_stmt`.
	 * @param ctx the parse tree
	 */
	exitGet_diag_stmt?: (ctx: Get_diag_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.get_diag_stmt_item`.
	 * @param ctx the parse tree
	 */
	enterGet_diag_stmt_item?: (ctx: Get_diag_stmt_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.get_diag_stmt_item`.
	 * @param ctx the parse tree
	 */
	exitGet_diag_stmt_item?: (ctx: Get_diag_stmt_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.get_diag_stmt_exception_item`.
	 * @param ctx the parse tree
	 */
	enterGet_diag_stmt_exception_item?: (ctx: Get_diag_stmt_exception_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.get_diag_stmt_exception_item`.
	 * @param ctx the parse tree
	 */
	exitGet_diag_stmt_exception_item?: (ctx: Get_diag_stmt_exception_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.get_diag_stmt_rowcount_item`.
	 * @param ctx the parse tree
	 */
	enterGet_diag_stmt_rowcount_item?: (ctx: Get_diag_stmt_rowcount_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.get_diag_stmt_rowcount_item`.
	 * @param ctx the parse tree
	 */
	exitGet_diag_stmt_rowcount_item?: (ctx: Get_diag_stmt_rowcount_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.grant_stmt`.
	 * @param ctx the parse tree
	 */
	enterGrant_stmt?: (ctx: Grant_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.grant_stmt`.
	 * @param ctx the parse tree
	 */
	exitGrant_stmt?: (ctx: Grant_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.grant_stmt_item`.
	 * @param ctx the parse tree
	 */
	enterGrant_stmt_item?: (ctx: Grant_stmt_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.grant_stmt_item`.
	 * @param ctx the parse tree
	 */
	exitGrant_stmt_item?: (ctx: Grant_stmt_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.leave_stmt`.
	 * @param ctx the parse tree
	 */
	enterLeave_stmt?: (ctx: Leave_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.leave_stmt`.
	 * @param ctx the parse tree
	 */
	exitLeave_stmt?: (ctx: Leave_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.map_object_stmt`.
	 * @param ctx the parse tree
	 */
	enterMap_object_stmt?: (ctx: Map_object_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.map_object_stmt`.
	 * @param ctx the parse tree
	 */
	exitMap_object_stmt?: (ctx: Map_object_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.open_stmt`.
	 * @param ctx the parse tree
	 */
	enterOpen_stmt?: (ctx: Open_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.open_stmt`.
	 * @param ctx the parse tree
	 */
	exitOpen_stmt?: (ctx: Open_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.fetch_stmt`.
	 * @param ctx the parse tree
	 */
	enterFetch_stmt?: (ctx: Fetch_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.fetch_stmt`.
	 * @param ctx the parse tree
	 */
	exitFetch_stmt?: (ctx: Fetch_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.collect_stats_stmt`.
	 * @param ctx the parse tree
	 */
	enterCollect_stats_stmt?: (ctx: Collect_stats_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.collect_stats_stmt`.
	 * @param ctx the parse tree
	 */
	exitCollect_stats_stmt?: (ctx: Collect_stats_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.collect_stats_clause`.
	 * @param ctx the parse tree
	 */
	enterCollect_stats_clause?: (ctx: Collect_stats_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.collect_stats_clause`.
	 * @param ctx the parse tree
	 */
	exitCollect_stats_clause?: (ctx: Collect_stats_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.close_stmt`.
	 * @param ctx the parse tree
	 */
	enterClose_stmt?: (ctx: Close_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.close_stmt`.
	 * @param ctx the parse tree
	 */
	exitClose_stmt?: (ctx: Close_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.cmp_stmt`.
	 * @param ctx the parse tree
	 */
	enterCmp_stmt?: (ctx: Cmp_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.cmp_stmt`.
	 * @param ctx the parse tree
	 */
	exitCmp_stmt?: (ctx: Cmp_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.cmp_source`.
	 * @param ctx the parse tree
	 */
	enterCmp_source?: (ctx: Cmp_sourceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.cmp_source`.
	 * @param ctx the parse tree
	 */
	exitCmp_source?: (ctx: Cmp_sourceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.copy_from_local_stmt`.
	 * @param ctx the parse tree
	 */
	enterCopy_from_local_stmt?: (ctx: Copy_from_local_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.copy_from_local_stmt`.
	 * @param ctx the parse tree
	 */
	exitCopy_from_local_stmt?: (ctx: Copy_from_local_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.copy_stmt`.
	 * @param ctx the parse tree
	 */
	enterCopy_stmt?: (ctx: Copy_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.copy_stmt`.
	 * @param ctx the parse tree
	 */
	exitCopy_stmt?: (ctx: Copy_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.copy_source`.
	 * @param ctx the parse tree
	 */
	enterCopy_source?: (ctx: Copy_sourceContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.copy_source`.
	 * @param ctx the parse tree
	 */
	exitCopy_source?: (ctx: Copy_sourceContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.copy_target`.
	 * @param ctx the parse tree
	 */
	enterCopy_target?: (ctx: Copy_targetContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.copy_target`.
	 * @param ctx the parse tree
	 */
	exitCopy_target?: (ctx: Copy_targetContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.copy_option`.
	 * @param ctx the parse tree
	 */
	enterCopy_option?: (ctx: Copy_optionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.copy_option`.
	 * @param ctx the parse tree
	 */
	exitCopy_option?: (ctx: Copy_optionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.copy_file_option`.
	 * @param ctx the parse tree
	 */
	enterCopy_file_option?: (ctx: Copy_file_optionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.copy_file_option`.
	 * @param ctx the parse tree
	 */
	exitCopy_file_option?: (ctx: Copy_file_optionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.commit_stmt`.
	 * @param ctx the parse tree
	 */
	enterCommit_stmt?: (ctx: Commit_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.commit_stmt`.
	 * @param ctx the parse tree
	 */
	exitCommit_stmt?: (ctx: Commit_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_index_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_index_stmt?: (ctx: Create_index_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_index_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_index_stmt?: (ctx: Create_index_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.create_index_col`.
	 * @param ctx the parse tree
	 */
	enterCreate_index_col?: (ctx: Create_index_colContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.create_index_col`.
	 * @param ctx the parse tree
	 */
	exitCreate_index_col?: (ctx: Create_index_colContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.index_storage_clause`.
	 * @param ctx the parse tree
	 */
	enterIndex_storage_clause?: (ctx: Index_storage_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.index_storage_clause`.
	 * @param ctx the parse tree
	 */
	exitIndex_storage_clause?: (ctx: Index_storage_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.index_mssql_storage_clause`.
	 * @param ctx the parse tree
	 */
	enterIndex_mssql_storage_clause?: (ctx: Index_mssql_storage_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.index_mssql_storage_clause`.
	 * @param ctx the parse tree
	 */
	exitIndex_mssql_storage_clause?: (ctx: Index_mssql_storage_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.print_stmt`.
	 * @param ctx the parse tree
	 */
	enterPrint_stmt?: (ctx: Print_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.print_stmt`.
	 * @param ctx the parse tree
	 */
	exitPrint_stmt?: (ctx: Print_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.quit_stmt`.
	 * @param ctx the parse tree
	 */
	enterQuit_stmt?: (ctx: Quit_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.quit_stmt`.
	 * @param ctx the parse tree
	 */
	exitQuit_stmt?: (ctx: Quit_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.raise_stmt`.
	 * @param ctx the parse tree
	 */
	enterRaise_stmt?: (ctx: Raise_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.raise_stmt`.
	 * @param ctx the parse tree
	 */
	exitRaise_stmt?: (ctx: Raise_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.resignal_stmt`.
	 * @param ctx the parse tree
	 */
	enterResignal_stmt?: (ctx: Resignal_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.resignal_stmt`.
	 * @param ctx the parse tree
	 */
	exitResignal_stmt?: (ctx: Resignal_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.return_stmt`.
	 * @param ctx the parse tree
	 */
	enterReturn_stmt?: (ctx: Return_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.return_stmt`.
	 * @param ctx the parse tree
	 */
	exitReturn_stmt?: (ctx: Return_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.rollback_stmt`.
	 * @param ctx the parse tree
	 */
	enterRollback_stmt?: (ctx: Rollback_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.rollback_stmt`.
	 * @param ctx the parse tree
	 */
	exitRollback_stmt?: (ctx: Rollback_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.set_session_option`.
	 * @param ctx the parse tree
	 */
	enterSet_session_option?: (ctx: Set_session_optionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.set_session_option`.
	 * @param ctx the parse tree
	 */
	exitSet_session_option?: (ctx: Set_session_optionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.set_current_schema_option`.
	 * @param ctx the parse tree
	 */
	enterSet_current_schema_option?: (ctx: Set_current_schema_optionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.set_current_schema_option`.
	 * @param ctx the parse tree
	 */
	exitSet_current_schema_option?: (ctx: Set_current_schema_optionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.set_mssql_session_option`.
	 * @param ctx the parse tree
	 */
	enterSet_mssql_session_option?: (ctx: Set_mssql_session_optionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.set_mssql_session_option`.
	 * @param ctx the parse tree
	 */
	exitSet_mssql_session_option?: (ctx: Set_mssql_session_optionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.set_teradata_session_option`.
	 * @param ctx the parse tree
	 */
	enterSet_teradata_session_option?: (ctx: Set_teradata_session_optionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.set_teradata_session_option`.
	 * @param ctx the parse tree
	 */
	exitSet_teradata_session_option?: (ctx: Set_teradata_session_optionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.signal_stmt`.
	 * @param ctx the parse tree
	 */
	enterSignal_stmt?: (ctx: Signal_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.signal_stmt`.
	 * @param ctx the parse tree
	 */
	exitSignal_stmt?: (ctx: Signal_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.summary_stmt`.
	 * @param ctx the parse tree
	 */
	enterSummary_stmt?: (ctx: Summary_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.summary_stmt`.
	 * @param ctx the parse tree
	 */
	exitSummary_stmt?: (ctx: Summary_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.truncate_stmt`.
	 * @param ctx the parse tree
	 */
	enterTruncate_stmt?: (ctx: Truncate_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.truncate_stmt`.
	 * @param ctx the parse tree
	 */
	exitTruncate_stmt?: (ctx: Truncate_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.use_stmt`.
	 * @param ctx the parse tree
	 */
	enterUse_stmt?: (ctx: Use_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.use_stmt`.
	 * @param ctx the parse tree
	 */
	exitUse_stmt?: (ctx: Use_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.values_into_stmt`.
	 * @param ctx the parse tree
	 */
	enterValues_into_stmt?: (ctx: Values_into_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.values_into_stmt`.
	 * @param ctx the parse tree
	 */
	exitValues_into_stmt?: (ctx: Values_into_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.while_stmt`.
	 * @param ctx the parse tree
	 */
	enterWhile_stmt?: (ctx: While_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.while_stmt`.
	 * @param ctx the parse tree
	 */
	exitWhile_stmt?: (ctx: While_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.for_cursor_stmt`.
	 * @param ctx the parse tree
	 */
	enterFor_cursor_stmt?: (ctx: For_cursor_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.for_cursor_stmt`.
	 * @param ctx the parse tree
	 */
	exitFor_cursor_stmt?: (ctx: For_cursor_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.for_range_stmt`.
	 * @param ctx the parse tree
	 */
	enterFor_range_stmt?: (ctx: For_range_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.for_range_stmt`.
	 * @param ctx the parse tree
	 */
	exitFor_range_stmt?: (ctx: For_range_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.using_clause`.
	 * @param ctx the parse tree
	 */
	enterUsing_clause?: (ctx: Using_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.using_clause`.
	 * @param ctx the parse tree
	 */
	exitUsing_clause?: (ctx: Using_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.select_stmt`.
	 * @param ctx the parse tree
	 */
	enterSelect_stmt?: (ctx: Select_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.select_stmt`.
	 * @param ctx the parse tree
	 */
	exitSelect_stmt?: (ctx: Select_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.cte_select_stmt`.
	 * @param ctx the parse tree
	 */
	enterCte_select_stmt?: (ctx: Cte_select_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.cte_select_stmt`.
	 * @param ctx the parse tree
	 */
	exitCte_select_stmt?: (ctx: Cte_select_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.cte_select_stmt_item`.
	 * @param ctx the parse tree
	 */
	enterCte_select_stmt_item?: (ctx: Cte_select_stmt_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.cte_select_stmt_item`.
	 * @param ctx the parse tree
	 */
	exitCte_select_stmt_item?: (ctx: Cte_select_stmt_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.cte_select_cols`.
	 * @param ctx the parse tree
	 */
	enterCte_select_cols?: (ctx: Cte_select_colsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.cte_select_cols`.
	 * @param ctx the parse tree
	 */
	exitCte_select_cols?: (ctx: Cte_select_colsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.fullselect_stmt`.
	 * @param ctx the parse tree
	 */
	enterFullselect_stmt?: (ctx: Fullselect_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.fullselect_stmt`.
	 * @param ctx the parse tree
	 */
	exitFullselect_stmt?: (ctx: Fullselect_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.fullselect_stmt_item`.
	 * @param ctx the parse tree
	 */
	enterFullselect_stmt_item?: (ctx: Fullselect_stmt_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.fullselect_stmt_item`.
	 * @param ctx the parse tree
	 */
	exitFullselect_stmt_item?: (ctx: Fullselect_stmt_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.fullselect_set_clause`.
	 * @param ctx the parse tree
	 */
	enterFullselect_set_clause?: (ctx: Fullselect_set_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.fullselect_set_clause`.
	 * @param ctx the parse tree
	 */
	exitFullselect_set_clause?: (ctx: Fullselect_set_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.subselect_stmt`.
	 * @param ctx the parse tree
	 */
	enterSubselect_stmt?: (ctx: Subselect_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.subselect_stmt`.
	 * @param ctx the parse tree
	 */
	exitSubselect_stmt?: (ctx: Subselect_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.select_list`.
	 * @param ctx the parse tree
	 */
	enterSelect_list?: (ctx: Select_listContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.select_list`.
	 * @param ctx the parse tree
	 */
	exitSelect_list?: (ctx: Select_listContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.select_list_set`.
	 * @param ctx the parse tree
	 */
	enterSelect_list_set?: (ctx: Select_list_setContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.select_list_set`.
	 * @param ctx the parse tree
	 */
	exitSelect_list_set?: (ctx: Select_list_setContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.select_list_limit`.
	 * @param ctx the parse tree
	 */
	enterSelect_list_limit?: (ctx: Select_list_limitContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.select_list_limit`.
	 * @param ctx the parse tree
	 */
	exitSelect_list_limit?: (ctx: Select_list_limitContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.select_list_item`.
	 * @param ctx the parse tree
	 */
	enterSelect_list_item?: (ctx: Select_list_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.select_list_item`.
	 * @param ctx the parse tree
	 */
	exitSelect_list_item?: (ctx: Select_list_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.select_list_alias`.
	 * @param ctx the parse tree
	 */
	enterSelect_list_alias?: (ctx: Select_list_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.select_list_alias`.
	 * @param ctx the parse tree
	 */
	exitSelect_list_alias?: (ctx: Select_list_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.select_list_asterisk`.
	 * @param ctx the parse tree
	 */
	enterSelect_list_asterisk?: (ctx: Select_list_asteriskContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.select_list_asterisk`.
	 * @param ctx the parse tree
	 */
	exitSelect_list_asterisk?: (ctx: Select_list_asteriskContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.into_clause`.
	 * @param ctx the parse tree
	 */
	enterInto_clause?: (ctx: Into_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.into_clause`.
	 * @param ctx the parse tree
	 */
	exitInto_clause?: (ctx: Into_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.from_clause`.
	 * @param ctx the parse tree
	 */
	enterFrom_clause?: (ctx: From_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.from_clause`.
	 * @param ctx the parse tree
	 */
	exitFrom_clause?: (ctx: From_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.from_table_clause`.
	 * @param ctx the parse tree
	 */
	enterFrom_table_clause?: (ctx: From_table_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.from_table_clause`.
	 * @param ctx the parse tree
	 */
	exitFrom_table_clause?: (ctx: From_table_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.from_table_name_clause`.
	 * @param ctx the parse tree
	 */
	enterFrom_table_name_clause?: (ctx: From_table_name_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.from_table_name_clause`.
	 * @param ctx the parse tree
	 */
	exitFrom_table_name_clause?: (ctx: From_table_name_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.from_subselect_clause`.
	 * @param ctx the parse tree
	 */
	enterFrom_subselect_clause?: (ctx: From_subselect_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.from_subselect_clause`.
	 * @param ctx the parse tree
	 */
	exitFrom_subselect_clause?: (ctx: From_subselect_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.from_join_clause`.
	 * @param ctx the parse tree
	 */
	enterFrom_join_clause?: (ctx: From_join_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.from_join_clause`.
	 * @param ctx the parse tree
	 */
	exitFrom_join_clause?: (ctx: From_join_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.from_join_type_clause`.
	 * @param ctx the parse tree
	 */
	enterFrom_join_type_clause?: (ctx: From_join_type_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.from_join_type_clause`.
	 * @param ctx the parse tree
	 */
	exitFrom_join_type_clause?: (ctx: From_join_type_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.from_table_values_clause`.
	 * @param ctx the parse tree
	 */
	enterFrom_table_values_clause?: (ctx: From_table_values_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.from_table_values_clause`.
	 * @param ctx the parse tree
	 */
	exitFrom_table_values_clause?: (ctx: From_table_values_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.from_table_values_row`.
	 * @param ctx the parse tree
	 */
	enterFrom_table_values_row?: (ctx: From_table_values_rowContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.from_table_values_row`.
	 * @param ctx the parse tree
	 */
	exitFrom_table_values_row?: (ctx: From_table_values_rowContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.from_alias_clause`.
	 * @param ctx the parse tree
	 */
	enterFrom_alias_clause?: (ctx: From_alias_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.from_alias_clause`.
	 * @param ctx the parse tree
	 */
	exitFrom_alias_clause?: (ctx: From_alias_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.table_name`.
	 * @param ctx the parse tree
	 */
	enterTable_name?: (ctx: Table_nameContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.table_name`.
	 * @param ctx the parse tree
	 */
	exitTable_name?: (ctx: Table_nameContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.where_clause`.
	 * @param ctx the parse tree
	 */
	enterWhere_clause?: (ctx: Where_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.where_clause`.
	 * @param ctx the parse tree
	 */
	exitWhere_clause?: (ctx: Where_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.group_by_clause`.
	 * @param ctx the parse tree
	 */
	enterGroup_by_clause?: (ctx: Group_by_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.group_by_clause`.
	 * @param ctx the parse tree
	 */
	exitGroup_by_clause?: (ctx: Group_by_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.having_clause`.
	 * @param ctx the parse tree
	 */
	enterHaving_clause?: (ctx: Having_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.having_clause`.
	 * @param ctx the parse tree
	 */
	exitHaving_clause?: (ctx: Having_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.qualify_clause`.
	 * @param ctx the parse tree
	 */
	enterQualify_clause?: (ctx: Qualify_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.qualify_clause`.
	 * @param ctx the parse tree
	 */
	exitQualify_clause?: (ctx: Qualify_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.order_by_clause`.
	 * @param ctx the parse tree
	 */
	enterOrder_by_clause?: (ctx: Order_by_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.order_by_clause`.
	 * @param ctx the parse tree
	 */
	exitOrder_by_clause?: (ctx: Order_by_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.select_options`.
	 * @param ctx the parse tree
	 */
	enterSelect_options?: (ctx: Select_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.select_options`.
	 * @param ctx the parse tree
	 */
	exitSelect_options?: (ctx: Select_optionsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.select_options_item`.
	 * @param ctx the parse tree
	 */
	enterSelect_options_item?: (ctx: Select_options_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.select_options_item`.
	 * @param ctx the parse tree
	 */
	exitSelect_options_item?: (ctx: Select_options_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.update_stmt`.
	 * @param ctx the parse tree
	 */
	enterUpdate_stmt?: (ctx: Update_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.update_stmt`.
	 * @param ctx the parse tree
	 */
	exitUpdate_stmt?: (ctx: Update_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.update_assignment`.
	 * @param ctx the parse tree
	 */
	enterUpdate_assignment?: (ctx: Update_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.update_assignment`.
	 * @param ctx the parse tree
	 */
	exitUpdate_assignment?: (ctx: Update_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.update_table`.
	 * @param ctx the parse tree
	 */
	enterUpdate_table?: (ctx: Update_tableContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.update_table`.
	 * @param ctx the parse tree
	 */
	exitUpdate_table?: (ctx: Update_tableContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.update_upsert`.
	 * @param ctx the parse tree
	 */
	enterUpdate_upsert?: (ctx: Update_upsertContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.update_upsert`.
	 * @param ctx the parse tree
	 */
	exitUpdate_upsert?: (ctx: Update_upsertContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.merge_stmt`.
	 * @param ctx the parse tree
	 */
	enterMerge_stmt?: (ctx: Merge_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.merge_stmt`.
	 * @param ctx the parse tree
	 */
	exitMerge_stmt?: (ctx: Merge_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.merge_table`.
	 * @param ctx the parse tree
	 */
	enterMerge_table?: (ctx: Merge_tableContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.merge_table`.
	 * @param ctx the parse tree
	 */
	exitMerge_table?: (ctx: Merge_tableContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.merge_condition`.
	 * @param ctx the parse tree
	 */
	enterMerge_condition?: (ctx: Merge_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.merge_condition`.
	 * @param ctx the parse tree
	 */
	exitMerge_condition?: (ctx: Merge_conditionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.merge_action`.
	 * @param ctx the parse tree
	 */
	enterMerge_action?: (ctx: Merge_actionContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.merge_action`.
	 * @param ctx the parse tree
	 */
	exitMerge_action?: (ctx: Merge_actionContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.delete_stmt`.
	 * @param ctx the parse tree
	 */
	enterDelete_stmt?: (ctx: Delete_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.delete_stmt`.
	 * @param ctx the parse tree
	 */
	exitDelete_stmt?: (ctx: Delete_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.delete_alias`.
	 * @param ctx the parse tree
	 */
	enterDelete_alias?: (ctx: Delete_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.delete_alias`.
	 * @param ctx the parse tree
	 */
	exitDelete_alias?: (ctx: Delete_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.describe_stmt`.
	 * @param ctx the parse tree
	 */
	enterDescribe_stmt?: (ctx: Describe_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.describe_stmt`.
	 * @param ctx the parse tree
	 */
	exitDescribe_stmt?: (ctx: Describe_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.bool_expr`.
	 * @param ctx the parse tree
	 */
	enterBool_expr?: (ctx: Bool_exprContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.bool_expr`.
	 * @param ctx the parse tree
	 */
	exitBool_expr?: (ctx: Bool_exprContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.bool_expr_atom`.
	 * @param ctx the parse tree
	 */
	enterBool_expr_atom?: (ctx: Bool_expr_atomContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.bool_expr_atom`.
	 * @param ctx the parse tree
	 */
	exitBool_expr_atom?: (ctx: Bool_expr_atomContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.bool_expr_unary`.
	 * @param ctx the parse tree
	 */
	enterBool_expr_unary?: (ctx: Bool_expr_unaryContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.bool_expr_unary`.
	 * @param ctx the parse tree
	 */
	exitBool_expr_unary?: (ctx: Bool_expr_unaryContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.bool_expr_single_in`.
	 * @param ctx the parse tree
	 */
	enterBool_expr_single_in?: (ctx: Bool_expr_single_inContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.bool_expr_single_in`.
	 * @param ctx the parse tree
	 */
	exitBool_expr_single_in?: (ctx: Bool_expr_single_inContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.bool_expr_multi_in`.
	 * @param ctx the parse tree
	 */
	enterBool_expr_multi_in?: (ctx: Bool_expr_multi_inContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.bool_expr_multi_in`.
	 * @param ctx the parse tree
	 */
	exitBool_expr_multi_in?: (ctx: Bool_expr_multi_inContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.bool_expr_binary`.
	 * @param ctx the parse tree
	 */
	enterBool_expr_binary?: (ctx: Bool_expr_binaryContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.bool_expr_binary`.
	 * @param ctx the parse tree
	 */
	exitBool_expr_binary?: (ctx: Bool_expr_binaryContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.bool_expr_logical_operator`.
	 * @param ctx the parse tree
	 */
	enterBool_expr_logical_operator?: (ctx: Bool_expr_logical_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.bool_expr_logical_operator`.
	 * @param ctx the parse tree
	 */
	exitBool_expr_logical_operator?: (ctx: Bool_expr_logical_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.bool_expr_binary_operator`.
	 * @param ctx the parse tree
	 */
	enterBool_expr_binary_operator?: (ctx: Bool_expr_binary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.bool_expr_binary_operator`.
	 * @param ctx the parse tree
	 */
	exitBool_expr_binary_operator?: (ctx: Bool_expr_binary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_atom`.
	 * @param ctx the parse tree
	 */
	enterExpr_atom?: (ctx: Expr_atomContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_atom`.
	 * @param ctx the parse tree
	 */
	exitExpr_atom?: (ctx: Expr_atomContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_interval`.
	 * @param ctx the parse tree
	 */
	enterExpr_interval?: (ctx: Expr_intervalContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_interval`.
	 * @param ctx the parse tree
	 */
	exitExpr_interval?: (ctx: Expr_intervalContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.interval_item`.
	 * @param ctx the parse tree
	 */
	enterInterval_item?: (ctx: Interval_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.interval_item`.
	 * @param ctx the parse tree
	 */
	exitInterval_item?: (ctx: Interval_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_concat`.
	 * @param ctx the parse tree
	 */
	enterExpr_concat?: (ctx: Expr_concatContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_concat`.
	 * @param ctx the parse tree
	 */
	exitExpr_concat?: (ctx: Expr_concatContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_concat_item`.
	 * @param ctx the parse tree
	 */
	enterExpr_concat_item?: (ctx: Expr_concat_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_concat_item`.
	 * @param ctx the parse tree
	 */
	exitExpr_concat_item?: (ctx: Expr_concat_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_case`.
	 * @param ctx the parse tree
	 */
	enterExpr_case?: (ctx: Expr_caseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_case`.
	 * @param ctx the parse tree
	 */
	exitExpr_case?: (ctx: Expr_caseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_case_simple`.
	 * @param ctx the parse tree
	 */
	enterExpr_case_simple?: (ctx: Expr_case_simpleContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_case_simple`.
	 * @param ctx the parse tree
	 */
	exitExpr_case_simple?: (ctx: Expr_case_simpleContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_case_searched`.
	 * @param ctx the parse tree
	 */
	enterExpr_case_searched?: (ctx: Expr_case_searchedContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_case_searched`.
	 * @param ctx the parse tree
	 */
	exitExpr_case_searched?: (ctx: Expr_case_searchedContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_cursor_attribute`.
	 * @param ctx the parse tree
	 */
	enterExpr_cursor_attribute?: (ctx: Expr_cursor_attributeContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_cursor_attribute`.
	 * @param ctx the parse tree
	 */
	exitExpr_cursor_attribute?: (ctx: Expr_cursor_attributeContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_agg_window_func`.
	 * @param ctx the parse tree
	 */
	enterExpr_agg_window_func?: (ctx: Expr_agg_window_funcContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_agg_window_func`.
	 * @param ctx the parse tree
	 */
	exitExpr_agg_window_func?: (ctx: Expr_agg_window_funcContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_func_all_distinct`.
	 * @param ctx the parse tree
	 */
	enterExpr_func_all_distinct?: (ctx: Expr_func_all_distinctContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_func_all_distinct`.
	 * @param ctx the parse tree
	 */
	exitExpr_func_all_distinct?: (ctx: Expr_func_all_distinctContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_func_over_clause`.
	 * @param ctx the parse tree
	 */
	enterExpr_func_over_clause?: (ctx: Expr_func_over_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_func_over_clause`.
	 * @param ctx the parse tree
	 */
	exitExpr_func_over_clause?: (ctx: Expr_func_over_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_func_partition_by_clause`.
	 * @param ctx the parse tree
	 */
	enterExpr_func_partition_by_clause?: (ctx: Expr_func_partition_by_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_func_partition_by_clause`.
	 * @param ctx the parse tree
	 */
	exitExpr_func_partition_by_clause?: (ctx: Expr_func_partition_by_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_spec_func`.
	 * @param ctx the parse tree
	 */
	enterExpr_spec_func?: (ctx: Expr_spec_funcContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_spec_func`.
	 * @param ctx the parse tree
	 */
	exitExpr_spec_func?: (ctx: Expr_spec_funcContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_func`.
	 * @param ctx the parse tree
	 */
	enterExpr_func?: (ctx: Expr_funcContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_func`.
	 * @param ctx the parse tree
	 */
	exitExpr_func?: (ctx: Expr_funcContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_func_params`.
	 * @param ctx the parse tree
	 */
	enterExpr_func_params?: (ctx: Expr_func_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_func_params`.
	 * @param ctx the parse tree
	 */
	exitExpr_func_params?: (ctx: Expr_func_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.func_param`.
	 * @param ctx the parse tree
	 */
	enterFunc_param?: (ctx: Func_paramContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.func_param`.
	 * @param ctx the parse tree
	 */
	exitFunc_param?: (ctx: Func_paramContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_select`.
	 * @param ctx the parse tree
	 */
	enterExpr_select?: (ctx: Expr_selectContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_select`.
	 * @param ctx the parse tree
	 */
	exitExpr_select?: (ctx: Expr_selectContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.expr_file`.
	 * @param ctx the parse tree
	 */
	enterExpr_file?: (ctx: Expr_fileContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.expr_file`.
	 * @param ctx the parse tree
	 */
	exitExpr_file?: (ctx: Expr_fileContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.hive`.
	 * @param ctx the parse tree
	 */
	enterHive?: (ctx: HiveContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.hive`.
	 * @param ctx the parse tree
	 */
	exitHive?: (ctx: HiveContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.hive_item`.
	 * @param ctx the parse tree
	 */
	enterHive_item?: (ctx: Hive_itemContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.hive_item`.
	 * @param ctx the parse tree
	 */
	exitHive_item?: (ctx: Hive_itemContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.host`.
	 * @param ctx the parse tree
	 */
	enterHost?: (ctx: HostContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.host`.
	 * @param ctx the parse tree
	 */
	exitHost?: (ctx: HostContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.host_cmd`.
	 * @param ctx the parse tree
	 */
	enterHost_cmd?: (ctx: Host_cmdContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.host_cmd`.
	 * @param ctx the parse tree
	 */
	exitHost_cmd?: (ctx: Host_cmdContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.host_stmt`.
	 * @param ctx the parse tree
	 */
	enterHost_stmt?: (ctx: Host_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.host_stmt`.
	 * @param ctx the parse tree
	 */
	exitHost_stmt?: (ctx: Host_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.file_name`.
	 * @param ctx the parse tree
	 */
	enterFile_name?: (ctx: File_nameContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.file_name`.
	 * @param ctx the parse tree
	 */
	exitFile_name?: (ctx: File_nameContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.date_literal`.
	 * @param ctx the parse tree
	 */
	enterDate_literal?: (ctx: Date_literalContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.date_literal`.
	 * @param ctx the parse tree
	 */
	exitDate_literal?: (ctx: Date_literalContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.timestamp_literal`.
	 * @param ctx the parse tree
	 */
	enterTimestamp_literal?: (ctx: Timestamp_literalContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.timestamp_literal`.
	 * @param ctx the parse tree
	 */
	exitTimestamp_literal?: (ctx: Timestamp_literalContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.ident`.
	 * @param ctx the parse tree
	 */
	enterIdent?: (ctx: IdentContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.ident`.
	 * @param ctx the parse tree
	 */
	exitIdent?: (ctx: IdentContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.int_number`.
	 * @param ctx the parse tree
	 */
	enterInt_number?: (ctx: Int_numberContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.int_number`.
	 * @param ctx the parse tree
	 */
	exitInt_number?: (ctx: Int_numberContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.dec_number`.
	 * @param ctx the parse tree
	 */
	enterDec_number?: (ctx: Dec_numberContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.dec_number`.
	 * @param ctx the parse tree
	 */
	exitDec_number?: (ctx: Dec_numberContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.bool_literal`.
	 * @param ctx the parse tree
	 */
	enterBool_literal?: (ctx: Bool_literalContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.bool_literal`.
	 * @param ctx the parse tree
	 */
	exitBool_literal?: (ctx: Bool_literalContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.null_const`.
	 * @param ctx the parse tree
	 */
	enterNull_const?: (ctx: Null_constContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.null_const`.
	 * @param ctx the parse tree
	 */
	exitNull_const?: (ctx: Null_constContext) => void;

	/**
	 * Enter a parse tree produced by `HiveSql.non_reserved_words`.
	 * @param ctx the parse tree
	 */
	enterNon_reserved_words?: (ctx: Non_reserved_wordsContext) => void;
	/**
	 * Exit a parse tree produced by `HiveSql.non_reserved_words`.
	 * @param ctx the parse tree
	 */
	exitNon_reserved_words?: (ctx: Non_reserved_wordsContext) => void;
}

