// dt-sql-parser/src/grammar/hive/HiveSql.g4 by ANTLR 4.12.0

import {ParseTreeVisitor} from 'antlr4';


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
import { Single_quotedStringContext } from "./HiveSql";
import { Double_quotedStringContext } from "./HiveSql";
import { Int_numberContext } from "./HiveSql";
import { Dec_numberContext } from "./HiveSql";
import { Bool_literalContext } from "./HiveSql";
import { Null_constContext } from "./HiveSql";
import { Non_reserved_wordsContext } from "./HiveSql";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `HiveSql`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class HiveSqlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `HiveSql.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.begin_end_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBegin_end_block?: (ctx: Begin_end_blockContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.single_block_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_block_stmt?: (ctx: Single_block_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.block_end`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock_end?: (ctx: Block_endContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.proc_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProc_block?: (ctx: Proc_blockContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.semicolon_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSemicolon_stmt?: (ctx: Semicolon_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.exception_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitException_block?: (ctx: Exception_blockContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.exception_block_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitException_block_item?: (ctx: Exception_block_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.null_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull_stmt?: (ctx: Null_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_stmt?: (ctx: Expr_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.assignment_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_stmt?: (ctx: Assignment_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.assignment_stmt_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_stmt_item?: (ctx: Assignment_stmt_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.assignment_stmt_single_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_stmt_single_item?: (ctx: Assignment_stmt_single_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.assignment_stmt_multiple_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_stmt_multiple_item?: (ctx: Assignment_stmt_multiple_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.assignment_stmt_select_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_stmt_select_item?: (ctx: Assignment_stmt_select_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.allocate_cursor_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAllocate_cursor_stmt?: (ctx: Allocate_cursor_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.associate_locator_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssociate_locator_stmt?: (ctx: Associate_locator_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.begin_transaction_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBegin_transaction_stmt?: (ctx: Begin_transaction_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.break_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreak_stmt?: (ctx: Break_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.call_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall_stmt?: (ctx: Call_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.declare_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclare_stmt?: (ctx: Declare_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.declare_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclare_block?: (ctx: Declare_blockContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.declare_block_inplace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclare_block_inplace?: (ctx: Declare_block_inplaceContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.declare_stmt_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclare_stmt_item?: (ctx: Declare_stmt_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.declare_var_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclare_var_item?: (ctx: Declare_var_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.declare_condition_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclare_condition_item?: (ctx: Declare_condition_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.declare_cursor_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclare_cursor_item?: (ctx: Declare_cursor_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.cursor_with_return`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCursor_with_return?: (ctx: Cursor_with_returnContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.cursor_without_return`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCursor_without_return?: (ctx: Cursor_without_returnContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.declare_handler_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclare_handler_item?: (ctx: Declare_handler_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.declare_temporary_table_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclare_temporary_table_item?: (ctx: Declare_temporary_table_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_stmt?: (ctx: Create_table_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_local_temp_table_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_local_temp_table_stmt?: (ctx: Create_local_temp_table_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_definition?: (ctx: Create_table_definitionContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_columns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_columns?: (ctx: Create_table_columnsContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_columns_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_columns_item?: (ctx: Create_table_columns_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.column_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_name?: (ctx: Column_nameContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_column_inline_cons`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_column_inline_cons?: (ctx: Create_table_column_inline_consContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_column_cons`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_column_cons?: (ctx: Create_table_column_consContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_fk_action`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_fk_action?: (ctx: Create_table_fk_actionContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_preoptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_preoptions?: (ctx: Create_table_preoptionsContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_preoptions_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_preoptions_item?: (ctx: Create_table_preoptions_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_preoptions_td_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_preoptions_td_item?: (ctx: Create_table_preoptions_td_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_options`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_options?: (ctx: Create_table_optionsContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_options_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_options_item?: (ctx: Create_table_options_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_options_ora_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_options_ora_item?: (ctx: Create_table_options_ora_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_options_db2_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_options_db2_item?: (ctx: Create_table_options_db2_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_options_td_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_options_td_item?: (ctx: Create_table_options_td_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_options_hive_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_options_hive_item?: (ctx: Create_table_options_hive_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_hive_row_format`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_hive_row_format?: (ctx: Create_table_hive_row_formatContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_hive_row_format_fields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_hive_row_format_fields?: (ctx: Create_table_hive_row_format_fieldsContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_options_mssql_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_options_mssql_item?: (ctx: Create_table_options_mssql_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_table_options_mysql_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_options_mysql_item?: (ctx: Create_table_options_mysql_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.alter_table_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_table_stmt?: (ctx: Alter_table_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.alter_table_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_table_item?: (ctx: Alter_table_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.alter_table_add_constraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_table_add_constraint?: (ctx: Alter_table_add_constraintContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.alter_table_add_constraint_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_table_add_constraint_item?: (ctx: Alter_table_add_constraint_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.dtype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDtype?: (ctx: DtypeContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.dtype_len`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDtype_len?: (ctx: Dtype_lenContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.dtype_attr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDtype_attr?: (ctx: Dtype_attrContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.dtype_default`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDtype_default?: (ctx: Dtype_defaultContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_database_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_database_stmt?: (ctx: Create_database_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_database_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_database_option?: (ctx: Create_database_optionContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_function_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_function_stmt?: (ctx: Create_function_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_function_return`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_function_return?: (ctx: Create_function_returnContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_package_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_package_stmt?: (ctx: Create_package_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.package_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackage_spec?: (ctx: Package_specContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.package_spec_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackage_spec_item?: (ctx: Package_spec_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_package_body_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_package_body_stmt?: (ctx: Create_package_body_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.package_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackage_body?: (ctx: Package_bodyContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.package_body_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackage_body_item?: (ctx: Package_body_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_procedure_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_procedure_stmt?: (ctx: Create_procedure_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_routine_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_routine_params?: (ctx: Create_routine_paramsContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_routine_param_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_routine_param_item?: (ctx: Create_routine_param_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_routine_options`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_routine_options?: (ctx: Create_routine_optionsContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_routine_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_routine_option?: (ctx: Create_routine_optionContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.drop_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_stmt?: (ctx: Drop_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.end_transaction_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnd_transaction_stmt?: (ctx: End_transaction_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.exec_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExec_stmt?: (ctx: Exec_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.if_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_stmt?: (ctx: If_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.if_plsql_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_plsql_stmt?: (ctx: If_plsql_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.if_tsql_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_tsql_stmt?: (ctx: If_tsql_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.if_bteq_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_bteq_stmt?: (ctx: If_bteq_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.elseif_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseif_block?: (ctx: Elseif_blockContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.else_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse_block?: (ctx: Else_blockContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.include_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclude_stmt?: (ctx: Include_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.insert_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsert_stmt?: (ctx: Insert_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.insert_stmt_cols`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsert_stmt_cols?: (ctx: Insert_stmt_colsContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.insert_stmt_rows`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsert_stmt_rows?: (ctx: Insert_stmt_rowsContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.insert_stmt_row`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsert_stmt_row?: (ctx: Insert_stmt_rowContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.insert_directory_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsert_directory_stmt?: (ctx: Insert_directory_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.exit_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExit_stmt?: (ctx: Exit_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.get_diag_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet_diag_stmt?: (ctx: Get_diag_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.get_diag_stmt_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet_diag_stmt_item?: (ctx: Get_diag_stmt_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.get_diag_stmt_exception_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet_diag_stmt_exception_item?: (ctx: Get_diag_stmt_exception_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.get_diag_stmt_rowcount_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet_diag_stmt_rowcount_item?: (ctx: Get_diag_stmt_rowcount_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.grant_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrant_stmt?: (ctx: Grant_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.grant_stmt_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrant_stmt_item?: (ctx: Grant_stmt_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.leave_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeave_stmt?: (ctx: Leave_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.map_object_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap_object_stmt?: (ctx: Map_object_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.open_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpen_stmt?: (ctx: Open_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.fetch_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFetch_stmt?: (ctx: Fetch_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.collect_stats_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollect_stats_stmt?: (ctx: Collect_stats_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.collect_stats_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollect_stats_clause?: (ctx: Collect_stats_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.close_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClose_stmt?: (ctx: Close_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.cmp_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmp_stmt?: (ctx: Cmp_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.cmp_source`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmp_source?: (ctx: Cmp_sourceContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.copy_from_local_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCopy_from_local_stmt?: (ctx: Copy_from_local_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.copy_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCopy_stmt?: (ctx: Copy_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.copy_source`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCopy_source?: (ctx: Copy_sourceContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.copy_target`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCopy_target?: (ctx: Copy_targetContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.copy_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCopy_option?: (ctx: Copy_optionContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.copy_file_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCopy_file_option?: (ctx: Copy_file_optionContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.commit_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommit_stmt?: (ctx: Commit_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_index_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_index_stmt?: (ctx: Create_index_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.create_index_col`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_index_col?: (ctx: Create_index_colContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.index_storage_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex_storage_clause?: (ctx: Index_storage_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.index_mssql_storage_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex_mssql_storage_clause?: (ctx: Index_mssql_storage_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.print_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrint_stmt?: (ctx: Print_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.quit_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuit_stmt?: (ctx: Quit_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.raise_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaise_stmt?: (ctx: Raise_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.resignal_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResignal_stmt?: (ctx: Resignal_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.return_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_stmt?: (ctx: Return_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.rollback_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollback_stmt?: (ctx: Rollback_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.set_session_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet_session_option?: (ctx: Set_session_optionContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.set_current_schema_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet_current_schema_option?: (ctx: Set_current_schema_optionContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.set_mssql_session_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet_mssql_session_option?: (ctx: Set_mssql_session_optionContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.set_teradata_session_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet_teradata_session_option?: (ctx: Set_teradata_session_optionContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.signal_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignal_stmt?: (ctx: Signal_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.summary_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSummary_stmt?: (ctx: Summary_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.truncate_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTruncate_stmt?: (ctx: Truncate_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.use_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUse_stmt?: (ctx: Use_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.values_into_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValues_into_stmt?: (ctx: Values_into_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.while_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_stmt?: (ctx: While_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.for_cursor_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_cursor_stmt?: (ctx: For_cursor_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.for_range_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_range_stmt?: (ctx: For_range_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.using_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsing_clause?: (ctx: Using_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.select_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_stmt?: (ctx: Select_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.cte_select_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCte_select_stmt?: (ctx: Cte_select_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.cte_select_stmt_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCte_select_stmt_item?: (ctx: Cte_select_stmt_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.cte_select_cols`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCte_select_cols?: (ctx: Cte_select_colsContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.fullselect_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullselect_stmt?: (ctx: Fullselect_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.fullselect_stmt_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullselect_stmt_item?: (ctx: Fullselect_stmt_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.fullselect_set_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullselect_set_clause?: (ctx: Fullselect_set_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.subselect_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubselect_stmt?: (ctx: Subselect_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.select_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_list?: (ctx: Select_listContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.select_list_set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_list_set?: (ctx: Select_list_setContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.select_list_limit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_list_limit?: (ctx: Select_list_limitContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.select_list_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_list_item?: (ctx: Select_list_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.select_list_alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_list_alias?: (ctx: Select_list_aliasContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.select_list_asterisk`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_list_asterisk?: (ctx: Select_list_asteriskContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.into_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInto_clause?: (ctx: Into_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.from_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_clause?: (ctx: From_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.from_table_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_table_clause?: (ctx: From_table_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.from_table_name_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_table_name_clause?: (ctx: From_table_name_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.from_subselect_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_subselect_clause?: (ctx: From_subselect_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.from_join_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_join_clause?: (ctx: From_join_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.from_join_type_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_join_type_clause?: (ctx: From_join_type_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.from_table_values_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_table_values_clause?: (ctx: From_table_values_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.from_table_values_row`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_table_values_row?: (ctx: From_table_values_rowContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.from_alias_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_alias_clause?: (ctx: From_alias_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.table_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_name?: (ctx: Table_nameContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.where_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhere_clause?: (ctx: Where_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.group_by_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup_by_clause?: (ctx: Group_by_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.having_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHaving_clause?: (ctx: Having_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.qualify_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualify_clause?: (ctx: Qualify_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.order_by_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrder_by_clause?: (ctx: Order_by_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.select_options`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_options?: (ctx: Select_optionsContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.select_options_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_options_item?: (ctx: Select_options_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.update_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate_stmt?: (ctx: Update_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.update_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate_assignment?: (ctx: Update_assignmentContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.update_table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate_table?: (ctx: Update_tableContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.update_upsert`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate_upsert?: (ctx: Update_upsertContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.merge_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMerge_stmt?: (ctx: Merge_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.merge_table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMerge_table?: (ctx: Merge_tableContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.merge_condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMerge_condition?: (ctx: Merge_conditionContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.merge_action`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMerge_action?: (ctx: Merge_actionContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.delete_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete_stmt?: (ctx: Delete_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.delete_alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete_alias?: (ctx: Delete_aliasContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.describe_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribe_stmt?: (ctx: Describe_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.bool_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_expr?: (ctx: Bool_exprContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.bool_expr_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_expr_atom?: (ctx: Bool_expr_atomContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.bool_expr_unary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_expr_unary?: (ctx: Bool_expr_unaryContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.bool_expr_single_in`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_expr_single_in?: (ctx: Bool_expr_single_inContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.bool_expr_multi_in`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_expr_multi_in?: (ctx: Bool_expr_multi_inContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.bool_expr_binary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_expr_binary?: (ctx: Bool_expr_binaryContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.bool_expr_logical_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_expr_logical_operator?: (ctx: Bool_expr_logical_operatorContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.bool_expr_binary_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_expr_binary_operator?: (ctx: Bool_expr_binary_operatorContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_atom?: (ctx: Expr_atomContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_interval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_interval?: (ctx: Expr_intervalContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.interval_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterval_item?: (ctx: Interval_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_concat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_concat?: (ctx: Expr_concatContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_concat_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_concat_item?: (ctx: Expr_concat_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_case`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_case?: (ctx: Expr_caseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_case_simple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_case_simple?: (ctx: Expr_case_simpleContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_case_searched`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_case_searched?: (ctx: Expr_case_searchedContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_cursor_attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_cursor_attribute?: (ctx: Expr_cursor_attributeContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_agg_window_func`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_agg_window_func?: (ctx: Expr_agg_window_funcContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_func_all_distinct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_func_all_distinct?: (ctx: Expr_func_all_distinctContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_func_over_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_func_over_clause?: (ctx: Expr_func_over_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_func_partition_by_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_func_partition_by_clause?: (ctx: Expr_func_partition_by_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_spec_func`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_spec_func?: (ctx: Expr_spec_funcContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_func`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_func?: (ctx: Expr_funcContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_func_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_func_params?: (ctx: Expr_func_paramsContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.func_param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_param?: (ctx: Func_paramContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_select`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_select?: (ctx: Expr_selectContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.expr_file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_file?: (ctx: Expr_fileContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.hive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHive?: (ctx: HiveContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.hive_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHive_item?: (ctx: Hive_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.host`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHost?: (ctx: HostContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.host_cmd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHost_cmd?: (ctx: Host_cmdContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.host_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHost_stmt?: (ctx: Host_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.file_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_name?: (ctx: File_nameContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.date_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_literal?: (ctx: Date_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.timestamp_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimestamp_literal?: (ctx: Timestamp_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdent?: (ctx: IdentContext) => Result;
	/**
	 * Visit a parse tree produced by the `single_quotedString`
	 * labeled alternative in `HiveSql.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_quotedString?: (ctx: Single_quotedStringContext) => Result;
	/**
	 * Visit a parse tree produced by the `double_quotedString`
	 * labeled alternative in `HiveSql.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDouble_quotedString?: (ctx: Double_quotedStringContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.int_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt_number?: (ctx: Int_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.dec_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDec_number?: (ctx: Dec_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.bool_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_literal?: (ctx: Bool_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.null_const`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull_const?: (ctx: Null_constContext) => Result;
	/**
	 * Visit a parse tree produced by `HiveSql.non_reserved_words`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNon_reserved_words?: (ctx: Non_reserved_wordsContext) => Result;
}

