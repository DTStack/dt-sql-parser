// Generated from /Users/libowen/Desktop/Code/gitlab.prod.dtstack.cn/dt-insight-front/infrastructure/dt-sql-parser/src/grammar/hive/HiveSql.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by HiveSql.

function HiveSqlVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

HiveSqlVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
HiveSqlVisitor.prototype.constructor = HiveSqlVisitor;

// Visit a parse tree produced by HiveSql#program.
HiveSqlVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#block.
HiveSqlVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#begin_end_block.
HiveSqlVisitor.prototype.visitBegin_end_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#single_block_stmt.
HiveSqlVisitor.prototype.visitSingle_block_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#block_end.
HiveSqlVisitor.prototype.visitBlock_end = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#proc_block.
HiveSqlVisitor.prototype.visitProc_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#stmt.
HiveSqlVisitor.prototype.visitStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#semicolon_stmt.
HiveSqlVisitor.prototype.visitSemicolon_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#exception_block.
HiveSqlVisitor.prototype.visitException_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#exception_block_item.
HiveSqlVisitor.prototype.visitException_block_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#null_stmt.
HiveSqlVisitor.prototype.visitNull_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_stmt.
HiveSqlVisitor.prototype.visitExpr_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#assignment_stmt.
HiveSqlVisitor.prototype.visitAssignment_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#assignment_stmt_item.
HiveSqlVisitor.prototype.visitAssignment_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#assignment_stmt_single_item.
HiveSqlVisitor.prototype.visitAssignment_stmt_single_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#assignment_stmt_multiple_item.
HiveSqlVisitor.prototype.visitAssignment_stmt_multiple_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#assignment_stmt_select_item.
HiveSqlVisitor.prototype.visitAssignment_stmt_select_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#allocate_cursor_stmt.
HiveSqlVisitor.prototype.visitAllocate_cursor_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#associate_locator_stmt.
HiveSqlVisitor.prototype.visitAssociate_locator_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#begin_transaction_stmt.
HiveSqlVisitor.prototype.visitBegin_transaction_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#break_stmt.
HiveSqlVisitor.prototype.visitBreak_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#call_stmt.
HiveSqlVisitor.prototype.visitCall_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#declare_stmt.
HiveSqlVisitor.prototype.visitDeclare_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#declare_block.
HiveSqlVisitor.prototype.visitDeclare_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#declare_block_inplace.
HiveSqlVisitor.prototype.visitDeclare_block_inplace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#declare_stmt_item.
HiveSqlVisitor.prototype.visitDeclare_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#declare_var_item.
HiveSqlVisitor.prototype.visitDeclare_var_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#declare_condition_item.
HiveSqlVisitor.prototype.visitDeclare_condition_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#declare_cursor_item.
HiveSqlVisitor.prototype.visitDeclare_cursor_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#cursor_with_return.
HiveSqlVisitor.prototype.visitCursor_with_return = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#cursor_without_return.
HiveSqlVisitor.prototype.visitCursor_without_return = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#declare_handler_item.
HiveSqlVisitor.prototype.visitDeclare_handler_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#declare_temporary_table_item.
HiveSqlVisitor.prototype.visitDeclare_temporary_table_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_stmt.
HiveSqlVisitor.prototype.visitCreate_table_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_local_temp_table_stmt.
HiveSqlVisitor.prototype.visitCreate_local_temp_table_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_definition.
HiveSqlVisitor.prototype.visitCreate_table_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_columns.
HiveSqlVisitor.prototype.visitCreate_table_columns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_columns_item.
HiveSqlVisitor.prototype.visitCreate_table_columns_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#column_name.
HiveSqlVisitor.prototype.visitColumn_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_column_inline_cons.
HiveSqlVisitor.prototype.visitCreate_table_column_inline_cons = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_column_cons.
HiveSqlVisitor.prototype.visitCreate_table_column_cons = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_fk_action.
HiveSqlVisitor.prototype.visitCreate_table_fk_action = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_preoptions.
HiveSqlVisitor.prototype.visitCreate_table_preoptions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_preoptions_item.
HiveSqlVisitor.prototype.visitCreate_table_preoptions_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_preoptions_td_item.
HiveSqlVisitor.prototype.visitCreate_table_preoptions_td_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_options.
HiveSqlVisitor.prototype.visitCreate_table_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_options_item.
HiveSqlVisitor.prototype.visitCreate_table_options_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_options_ora_item.
HiveSqlVisitor.prototype.visitCreate_table_options_ora_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_options_db2_item.
HiveSqlVisitor.prototype.visitCreate_table_options_db2_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_options_td_item.
HiveSqlVisitor.prototype.visitCreate_table_options_td_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_options_hive_item.
HiveSqlVisitor.prototype.visitCreate_table_options_hive_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_hive_row_format.
HiveSqlVisitor.prototype.visitCreate_table_hive_row_format = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_hive_row_format_fields.
HiveSqlVisitor.prototype.visitCreate_table_hive_row_format_fields = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_options_mssql_item.
HiveSqlVisitor.prototype.visitCreate_table_options_mssql_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_table_options_mysql_item.
HiveSqlVisitor.prototype.visitCreate_table_options_mysql_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#alter_table_stmt.
HiveSqlVisitor.prototype.visitAlter_table_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#alter_table_item.
HiveSqlVisitor.prototype.visitAlter_table_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#alter_table_add_constraint.
HiveSqlVisitor.prototype.visitAlter_table_add_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#alter_table_add_constraint_item.
HiveSqlVisitor.prototype.visitAlter_table_add_constraint_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#dtype.
HiveSqlVisitor.prototype.visitDtype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#dtype_len.
HiveSqlVisitor.prototype.visitDtype_len = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#dtype_attr.
HiveSqlVisitor.prototype.visitDtype_attr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#dtype_default.
HiveSqlVisitor.prototype.visitDtype_default = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_database_stmt.
HiveSqlVisitor.prototype.visitCreate_database_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_database_option.
HiveSqlVisitor.prototype.visitCreate_database_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_function_stmt.
HiveSqlVisitor.prototype.visitCreate_function_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_function_return.
HiveSqlVisitor.prototype.visitCreate_function_return = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_package_stmt.
HiveSqlVisitor.prototype.visitCreate_package_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#package_spec.
HiveSqlVisitor.prototype.visitPackage_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#package_spec_item.
HiveSqlVisitor.prototype.visitPackage_spec_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_package_body_stmt.
HiveSqlVisitor.prototype.visitCreate_package_body_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#package_body.
HiveSqlVisitor.prototype.visitPackage_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#package_body_item.
HiveSqlVisitor.prototype.visitPackage_body_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_procedure_stmt.
HiveSqlVisitor.prototype.visitCreate_procedure_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_routine_params.
HiveSqlVisitor.prototype.visitCreate_routine_params = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_routine_param_item.
HiveSqlVisitor.prototype.visitCreate_routine_param_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_routine_options.
HiveSqlVisitor.prototype.visitCreate_routine_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_routine_option.
HiveSqlVisitor.prototype.visitCreate_routine_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#drop_stmt.
HiveSqlVisitor.prototype.visitDrop_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#end_transaction_stmt.
HiveSqlVisitor.prototype.visitEnd_transaction_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#exec_stmt.
HiveSqlVisitor.prototype.visitExec_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#if_stmt.
HiveSqlVisitor.prototype.visitIf_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#if_plsql_stmt.
HiveSqlVisitor.prototype.visitIf_plsql_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#if_tsql_stmt.
HiveSqlVisitor.prototype.visitIf_tsql_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#if_bteq_stmt.
HiveSqlVisitor.prototype.visitIf_bteq_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#elseif_block.
HiveSqlVisitor.prototype.visitElseif_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#else_block.
HiveSqlVisitor.prototype.visitElse_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#include_stmt.
HiveSqlVisitor.prototype.visitInclude_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#insert_stmt.
HiveSqlVisitor.prototype.visitInsert_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#insert_stmt_cols.
HiveSqlVisitor.prototype.visitInsert_stmt_cols = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#insert_stmt_rows.
HiveSqlVisitor.prototype.visitInsert_stmt_rows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#insert_stmt_row.
HiveSqlVisitor.prototype.visitInsert_stmt_row = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#insert_directory_stmt.
HiveSqlVisitor.prototype.visitInsert_directory_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#exit_stmt.
HiveSqlVisitor.prototype.visitExit_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#get_diag_stmt.
HiveSqlVisitor.prototype.visitGet_diag_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#get_diag_stmt_item.
HiveSqlVisitor.prototype.visitGet_diag_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#get_diag_stmt_exception_item.
HiveSqlVisitor.prototype.visitGet_diag_stmt_exception_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#get_diag_stmt_rowcount_item.
HiveSqlVisitor.prototype.visitGet_diag_stmt_rowcount_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#grant_stmt.
HiveSqlVisitor.prototype.visitGrant_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#grant_stmt_item.
HiveSqlVisitor.prototype.visitGrant_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#leave_stmt.
HiveSqlVisitor.prototype.visitLeave_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#map_object_stmt.
HiveSqlVisitor.prototype.visitMap_object_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#open_stmt.
HiveSqlVisitor.prototype.visitOpen_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#fetch_stmt.
HiveSqlVisitor.prototype.visitFetch_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#collect_stats_stmt.
HiveSqlVisitor.prototype.visitCollect_stats_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#collect_stats_clause.
HiveSqlVisitor.prototype.visitCollect_stats_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#close_stmt.
HiveSqlVisitor.prototype.visitClose_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#cmp_stmt.
HiveSqlVisitor.prototype.visitCmp_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#cmp_source.
HiveSqlVisitor.prototype.visitCmp_source = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#copy_from_local_stmt.
HiveSqlVisitor.prototype.visitCopy_from_local_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#copy_stmt.
HiveSqlVisitor.prototype.visitCopy_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#copy_source.
HiveSqlVisitor.prototype.visitCopy_source = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#copy_target.
HiveSqlVisitor.prototype.visitCopy_target = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#copy_option.
HiveSqlVisitor.prototype.visitCopy_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#copy_file_option.
HiveSqlVisitor.prototype.visitCopy_file_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#commit_stmt.
HiveSqlVisitor.prototype.visitCommit_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_index_stmt.
HiveSqlVisitor.prototype.visitCreate_index_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#create_index_col.
HiveSqlVisitor.prototype.visitCreate_index_col = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#index_storage_clause.
HiveSqlVisitor.prototype.visitIndex_storage_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#index_mssql_storage_clause.
HiveSqlVisitor.prototype.visitIndex_mssql_storage_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#print_stmt.
HiveSqlVisitor.prototype.visitPrint_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#quit_stmt.
HiveSqlVisitor.prototype.visitQuit_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#raise_stmt.
HiveSqlVisitor.prototype.visitRaise_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#resignal_stmt.
HiveSqlVisitor.prototype.visitResignal_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#return_stmt.
HiveSqlVisitor.prototype.visitReturn_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#rollback_stmt.
HiveSqlVisitor.prototype.visitRollback_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#set_session_option.
HiveSqlVisitor.prototype.visitSet_session_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#set_current_schema_option.
HiveSqlVisitor.prototype.visitSet_current_schema_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#set_mssql_session_option.
HiveSqlVisitor.prototype.visitSet_mssql_session_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#set_teradata_session_option.
HiveSqlVisitor.prototype.visitSet_teradata_session_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#signal_stmt.
HiveSqlVisitor.prototype.visitSignal_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#summary_stmt.
HiveSqlVisitor.prototype.visitSummary_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#truncate_stmt.
HiveSqlVisitor.prototype.visitTruncate_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#use_stmt.
HiveSqlVisitor.prototype.visitUse_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#values_into_stmt.
HiveSqlVisitor.prototype.visitValues_into_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#while_stmt.
HiveSqlVisitor.prototype.visitWhile_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#for_cursor_stmt.
HiveSqlVisitor.prototype.visitFor_cursor_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#for_range_stmt.
HiveSqlVisitor.prototype.visitFor_range_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#label.
HiveSqlVisitor.prototype.visitLabel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#using_clause.
HiveSqlVisitor.prototype.visitUsing_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#select_stmt.
HiveSqlVisitor.prototype.visitSelect_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#cte_select_stmt.
HiveSqlVisitor.prototype.visitCte_select_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#cte_select_stmt_item.
HiveSqlVisitor.prototype.visitCte_select_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#cte_select_cols.
HiveSqlVisitor.prototype.visitCte_select_cols = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#fullselect_stmt.
HiveSqlVisitor.prototype.visitFullselect_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#fullselect_stmt_item.
HiveSqlVisitor.prototype.visitFullselect_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#fullselect_set_clause.
HiveSqlVisitor.prototype.visitFullselect_set_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#subselect_stmt.
HiveSqlVisitor.prototype.visitSubselect_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#select_list.
HiveSqlVisitor.prototype.visitSelect_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#select_list_set.
HiveSqlVisitor.prototype.visitSelect_list_set = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#select_list_limit.
HiveSqlVisitor.prototype.visitSelect_list_limit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#select_list_item.
HiveSqlVisitor.prototype.visitSelect_list_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#select_list_alias.
HiveSqlVisitor.prototype.visitSelect_list_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#select_list_asterisk.
HiveSqlVisitor.prototype.visitSelect_list_asterisk = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#into_clause.
HiveSqlVisitor.prototype.visitInto_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#from_clause.
HiveSqlVisitor.prototype.visitFrom_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#from_table_clause.
HiveSqlVisitor.prototype.visitFrom_table_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#from_table_name_clause.
HiveSqlVisitor.prototype.visitFrom_table_name_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#from_subselect_clause.
HiveSqlVisitor.prototype.visitFrom_subselect_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#from_join_clause.
HiveSqlVisitor.prototype.visitFrom_join_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#from_join_type_clause.
HiveSqlVisitor.prototype.visitFrom_join_type_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#from_table_values_clause.
HiveSqlVisitor.prototype.visitFrom_table_values_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#from_table_values_row.
HiveSqlVisitor.prototype.visitFrom_table_values_row = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#from_alias_clause.
HiveSqlVisitor.prototype.visitFrom_alias_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#table_name.
HiveSqlVisitor.prototype.visitTable_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#where_clause.
HiveSqlVisitor.prototype.visitWhere_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#group_by_clause.
HiveSqlVisitor.prototype.visitGroup_by_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#having_clause.
HiveSqlVisitor.prototype.visitHaving_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#qualify_clause.
HiveSqlVisitor.prototype.visitQualify_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#order_by_clause.
HiveSqlVisitor.prototype.visitOrder_by_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#select_options.
HiveSqlVisitor.prototype.visitSelect_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#select_options_item.
HiveSqlVisitor.prototype.visitSelect_options_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#update_stmt.
HiveSqlVisitor.prototype.visitUpdate_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#update_assignment.
HiveSqlVisitor.prototype.visitUpdate_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#update_table.
HiveSqlVisitor.prototype.visitUpdate_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#update_upsert.
HiveSqlVisitor.prototype.visitUpdate_upsert = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#merge_stmt.
HiveSqlVisitor.prototype.visitMerge_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#merge_table.
HiveSqlVisitor.prototype.visitMerge_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#merge_condition.
HiveSqlVisitor.prototype.visitMerge_condition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#merge_action.
HiveSqlVisitor.prototype.visitMerge_action = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#delete_stmt.
HiveSqlVisitor.prototype.visitDelete_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#delete_alias.
HiveSqlVisitor.prototype.visitDelete_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#describe_stmt.
HiveSqlVisitor.prototype.visitDescribe_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#bool_expr.
HiveSqlVisitor.prototype.visitBool_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#bool_expr_atom.
HiveSqlVisitor.prototype.visitBool_expr_atom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#bool_expr_unary.
HiveSqlVisitor.prototype.visitBool_expr_unary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#bool_expr_single_in.
HiveSqlVisitor.prototype.visitBool_expr_single_in = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#bool_expr_multi_in.
HiveSqlVisitor.prototype.visitBool_expr_multi_in = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#bool_expr_binary.
HiveSqlVisitor.prototype.visitBool_expr_binary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#bool_expr_logical_operator.
HiveSqlVisitor.prototype.visitBool_expr_logical_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#bool_expr_binary_operator.
HiveSqlVisitor.prototype.visitBool_expr_binary_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr.
HiveSqlVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_atom.
HiveSqlVisitor.prototype.visitExpr_atom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_interval.
HiveSqlVisitor.prototype.visitExpr_interval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#interval_item.
HiveSqlVisitor.prototype.visitInterval_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_concat.
HiveSqlVisitor.prototype.visitExpr_concat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_concat_item.
HiveSqlVisitor.prototype.visitExpr_concat_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_case.
HiveSqlVisitor.prototype.visitExpr_case = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_case_simple.
HiveSqlVisitor.prototype.visitExpr_case_simple = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_case_searched.
HiveSqlVisitor.prototype.visitExpr_case_searched = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_cursor_attribute.
HiveSqlVisitor.prototype.visitExpr_cursor_attribute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_agg_window_func.
HiveSqlVisitor.prototype.visitExpr_agg_window_func = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_func_all_distinct.
HiveSqlVisitor.prototype.visitExpr_func_all_distinct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_func_over_clause.
HiveSqlVisitor.prototype.visitExpr_func_over_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_func_partition_by_clause.
HiveSqlVisitor.prototype.visitExpr_func_partition_by_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_spec_func.
HiveSqlVisitor.prototype.visitExpr_spec_func = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_func.
HiveSqlVisitor.prototype.visitExpr_func = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_func_params.
HiveSqlVisitor.prototype.visitExpr_func_params = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#func_param.
HiveSqlVisitor.prototype.visitFunc_param = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_select.
HiveSqlVisitor.prototype.visitExpr_select = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#expr_file.
HiveSqlVisitor.prototype.visitExpr_file = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#hive.
HiveSqlVisitor.prototype.visitHive = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#hive_item.
HiveSqlVisitor.prototype.visitHive_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#host.
HiveSqlVisitor.prototype.visitHost = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#host_cmd.
HiveSqlVisitor.prototype.visitHost_cmd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#host_stmt.
HiveSqlVisitor.prototype.visitHost_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#file_name.
HiveSqlVisitor.prototype.visitFile_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#date_literal.
HiveSqlVisitor.prototype.visitDate_literal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#timestamp_literal.
HiveSqlVisitor.prototype.visitTimestamp_literal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#ident.
HiveSqlVisitor.prototype.visitIdent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#single_quotedString.
HiveSqlVisitor.prototype.visitSingle_quotedString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#double_quotedString.
HiveSqlVisitor.prototype.visitDouble_quotedString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#int_number.
HiveSqlVisitor.prototype.visitInt_number = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#dec_number.
HiveSqlVisitor.prototype.visitDec_number = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#bool_literal.
HiveSqlVisitor.prototype.visitBool_literal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#null_const.
HiveSqlVisitor.prototype.visitNull_const = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSql#non_reserved_words.
HiveSqlVisitor.prototype.visitNon_reserved_words = function(ctx) {
  return this.visitChildren(ctx);
};



exports.HiveSqlVisitor = HiveSqlVisitor;