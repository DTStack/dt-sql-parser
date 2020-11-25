// Generated from /Users/libowen/Desktop/Code/gitlab.prod.dtstack.cn/dt-insight-front/infrastructure/dt-sql-parser/src/grammar/hive/HiveSqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by HiveSqlParser.

function HiveSqlParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

HiveSqlParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
HiveSqlParserVisitor.prototype.constructor = HiveSqlParserVisitor;

// Visit a parse tree produced by HiveSqlParser#program.
HiveSqlParserVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#block.
HiveSqlParserVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#begin_end_block.
HiveSqlParserVisitor.prototype.visitBegin_end_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#single_block_stmt.
HiveSqlParserVisitor.prototype.visitSingle_block_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#block_end.
HiveSqlParserVisitor.prototype.visitBlock_end = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#proc_block.
HiveSqlParserVisitor.prototype.visitProc_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#stmt.
HiveSqlParserVisitor.prototype.visitStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#semicolon_stmt.
HiveSqlParserVisitor.prototype.visitSemicolon_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#exception_block.
HiveSqlParserVisitor.prototype.visitException_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#exception_block_item.
HiveSqlParserVisitor.prototype.visitException_block_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#null_stmt.
HiveSqlParserVisitor.prototype.visitNull_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_stmt.
HiveSqlParserVisitor.prototype.visitExpr_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#assignment_stmt.
HiveSqlParserVisitor.prototype.visitAssignment_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#assignment_stmt_item.
HiveSqlParserVisitor.prototype.visitAssignment_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#assignment_stmt_single_item.
HiveSqlParserVisitor.prototype.visitAssignment_stmt_single_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#assignment_stmt_multiple_item.
HiveSqlParserVisitor.prototype.visitAssignment_stmt_multiple_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#assignment_stmt_select_item.
HiveSqlParserVisitor.prototype.visitAssignment_stmt_select_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#allocate_cursor_stmt.
HiveSqlParserVisitor.prototype.visitAllocate_cursor_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#associate_locator_stmt.
HiveSqlParserVisitor.prototype.visitAssociate_locator_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#begin_transaction_stmt.
HiveSqlParserVisitor.prototype.visitBegin_transaction_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#break_stmt.
HiveSqlParserVisitor.prototype.visitBreak_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#call_stmt.
HiveSqlParserVisitor.prototype.visitCall_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#declare_stmt.
HiveSqlParserVisitor.prototype.visitDeclare_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#declare_block.
HiveSqlParserVisitor.prototype.visitDeclare_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#declare_block_inplace.
HiveSqlParserVisitor.prototype.visitDeclare_block_inplace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#declare_stmt_item.
HiveSqlParserVisitor.prototype.visitDeclare_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#declare_var_item.
HiveSqlParserVisitor.prototype.visitDeclare_var_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#declare_condition_item.
HiveSqlParserVisitor.prototype.visitDeclare_condition_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#declare_cursor_item.
HiveSqlParserVisitor.prototype.visitDeclare_cursor_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#cursor_with_return.
HiveSqlParserVisitor.prototype.visitCursor_with_return = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#cursor_without_return.
HiveSqlParserVisitor.prototype.visitCursor_without_return = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#declare_handler_item.
HiveSqlParserVisitor.prototype.visitDeclare_handler_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#declare_temporary_table_item.
HiveSqlParserVisitor.prototype.visitDeclare_temporary_table_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_stmt.
HiveSqlParserVisitor.prototype.visitCreate_table_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_local_temp_table_stmt.
HiveSqlParserVisitor.prototype.visitCreate_local_temp_table_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_definition.
HiveSqlParserVisitor.prototype.visitCreate_table_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_columns.
HiveSqlParserVisitor.prototype.visitCreate_table_columns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_columns_item.
HiveSqlParserVisitor.prototype.visitCreate_table_columns_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#column_name.
HiveSqlParserVisitor.prototype.visitColumn_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_column_inline_cons.
HiveSqlParserVisitor.prototype.visitCreate_table_column_inline_cons = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_column_cons.
HiveSqlParserVisitor.prototype.visitCreate_table_column_cons = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_fk_action.
HiveSqlParserVisitor.prototype.visitCreate_table_fk_action = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_preoptions.
HiveSqlParserVisitor.prototype.visitCreate_table_preoptions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_preoptions_item.
HiveSqlParserVisitor.prototype.visitCreate_table_preoptions_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_preoptions_td_item.
HiveSqlParserVisitor.prototype.visitCreate_table_preoptions_td_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_options.
HiveSqlParserVisitor.prototype.visitCreate_table_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_options_item.
HiveSqlParserVisitor.prototype.visitCreate_table_options_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_options_ora_item.
HiveSqlParserVisitor.prototype.visitCreate_table_options_ora_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_options_db2_item.
HiveSqlParserVisitor.prototype.visitCreate_table_options_db2_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_options_td_item.
HiveSqlParserVisitor.prototype.visitCreate_table_options_td_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_options_hive_item.
HiveSqlParserVisitor.prototype.visitCreate_table_options_hive_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_hive_row_format.
HiveSqlParserVisitor.prototype.visitCreate_table_hive_row_format = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_hive_row_format_fields.
HiveSqlParserVisitor.prototype.visitCreate_table_hive_row_format_fields = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_options_mssql_item.
HiveSqlParserVisitor.prototype.visitCreate_table_options_mssql_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_table_options_mysql_item.
HiveSqlParserVisitor.prototype.visitCreate_table_options_mysql_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#alter_table_stmt.
HiveSqlParserVisitor.prototype.visitAlter_table_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#alter_table_item.
HiveSqlParserVisitor.prototype.visitAlter_table_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#alter_table_add_constraint.
HiveSqlParserVisitor.prototype.visitAlter_table_add_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#alter_table_add_constraint_item.
HiveSqlParserVisitor.prototype.visitAlter_table_add_constraint_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#dtype.
HiveSqlParserVisitor.prototype.visitDtype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#dtype_len.
HiveSqlParserVisitor.prototype.visitDtype_len = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#dtype_attr.
HiveSqlParserVisitor.prototype.visitDtype_attr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#dtype_default.
HiveSqlParserVisitor.prototype.visitDtype_default = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_database_stmt.
HiveSqlParserVisitor.prototype.visitCreate_database_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_database_option.
HiveSqlParserVisitor.prototype.visitCreate_database_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_function_stmt.
HiveSqlParserVisitor.prototype.visitCreate_function_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_function_return.
HiveSqlParserVisitor.prototype.visitCreate_function_return = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_package_stmt.
HiveSqlParserVisitor.prototype.visitCreate_package_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#package_spec.
HiveSqlParserVisitor.prototype.visitPackage_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#package_spec_item.
HiveSqlParserVisitor.prototype.visitPackage_spec_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_package_body_stmt.
HiveSqlParserVisitor.prototype.visitCreate_package_body_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#package_body.
HiveSqlParserVisitor.prototype.visitPackage_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#package_body_item.
HiveSqlParserVisitor.prototype.visitPackage_body_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_procedure_stmt.
HiveSqlParserVisitor.prototype.visitCreate_procedure_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_routine_params.
HiveSqlParserVisitor.prototype.visitCreate_routine_params = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_routine_param_item.
HiveSqlParserVisitor.prototype.visitCreate_routine_param_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_routine_options.
HiveSqlParserVisitor.prototype.visitCreate_routine_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_routine_option.
HiveSqlParserVisitor.prototype.visitCreate_routine_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#drop_stmt.
HiveSqlParserVisitor.prototype.visitDrop_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#end_transaction_stmt.
HiveSqlParserVisitor.prototype.visitEnd_transaction_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#exec_stmt.
HiveSqlParserVisitor.prototype.visitExec_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#if_stmt.
HiveSqlParserVisitor.prototype.visitIf_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#if_plsql_stmt.
HiveSqlParserVisitor.prototype.visitIf_plsql_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#if_tsql_stmt.
HiveSqlParserVisitor.prototype.visitIf_tsql_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#if_bteq_stmt.
HiveSqlParserVisitor.prototype.visitIf_bteq_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#elseif_block.
HiveSqlParserVisitor.prototype.visitElseif_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#else_block.
HiveSqlParserVisitor.prototype.visitElse_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#include_stmt.
HiveSqlParserVisitor.prototype.visitInclude_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#insert_stmt.
HiveSqlParserVisitor.prototype.visitInsert_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#insert_stmt_cols.
HiveSqlParserVisitor.prototype.visitInsert_stmt_cols = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#insert_stmt_rows.
HiveSqlParserVisitor.prototype.visitInsert_stmt_rows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#insert_stmt_row.
HiveSqlParserVisitor.prototype.visitInsert_stmt_row = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#insert_directory_stmt.
HiveSqlParserVisitor.prototype.visitInsert_directory_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#exit_stmt.
HiveSqlParserVisitor.prototype.visitExit_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#get_diag_stmt.
HiveSqlParserVisitor.prototype.visitGet_diag_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#get_diag_stmt_item.
HiveSqlParserVisitor.prototype.visitGet_diag_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#get_diag_stmt_exception_item.
HiveSqlParserVisitor.prototype.visitGet_diag_stmt_exception_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#get_diag_stmt_rowcount_item.
HiveSqlParserVisitor.prototype.visitGet_diag_stmt_rowcount_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#grant_stmt.
HiveSqlParserVisitor.prototype.visitGrant_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#grant_stmt_item.
HiveSqlParserVisitor.prototype.visitGrant_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#leave_stmt.
HiveSqlParserVisitor.prototype.visitLeave_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#map_object_stmt.
HiveSqlParserVisitor.prototype.visitMap_object_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#open_stmt.
HiveSqlParserVisitor.prototype.visitOpen_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#fetch_stmt.
HiveSqlParserVisitor.prototype.visitFetch_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#collect_stats_stmt.
HiveSqlParserVisitor.prototype.visitCollect_stats_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#collect_stats_clause.
HiveSqlParserVisitor.prototype.visitCollect_stats_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#close_stmt.
HiveSqlParserVisitor.prototype.visitClose_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#cmp_stmt.
HiveSqlParserVisitor.prototype.visitCmp_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#cmp_source.
HiveSqlParserVisitor.prototype.visitCmp_source = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#copy_from_local_stmt.
HiveSqlParserVisitor.prototype.visitCopy_from_local_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#copy_stmt.
HiveSqlParserVisitor.prototype.visitCopy_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#copy_source.
HiveSqlParserVisitor.prototype.visitCopy_source = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#copy_target.
HiveSqlParserVisitor.prototype.visitCopy_target = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#copy_option.
HiveSqlParserVisitor.prototype.visitCopy_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#copy_file_option.
HiveSqlParserVisitor.prototype.visitCopy_file_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#commit_stmt.
HiveSqlParserVisitor.prototype.visitCommit_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_index_stmt.
HiveSqlParserVisitor.prototype.visitCreate_index_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#create_index_col.
HiveSqlParserVisitor.prototype.visitCreate_index_col = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#index_storage_clause.
HiveSqlParserVisitor.prototype.visitIndex_storage_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#index_mssql_storage_clause.
HiveSqlParserVisitor.prototype.visitIndex_mssql_storage_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#print_stmt.
HiveSqlParserVisitor.prototype.visitPrint_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#quit_stmt.
HiveSqlParserVisitor.prototype.visitQuit_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#raise_stmt.
HiveSqlParserVisitor.prototype.visitRaise_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#resignal_stmt.
HiveSqlParserVisitor.prototype.visitResignal_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#return_stmt.
HiveSqlParserVisitor.prototype.visitReturn_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#rollback_stmt.
HiveSqlParserVisitor.prototype.visitRollback_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#set_session_option.
HiveSqlParserVisitor.prototype.visitSet_session_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#set_current_schema_option.
HiveSqlParserVisitor.prototype.visitSet_current_schema_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#set_mssql_session_option.
HiveSqlParserVisitor.prototype.visitSet_mssql_session_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#set_teradata_session_option.
HiveSqlParserVisitor.prototype.visitSet_teradata_session_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#signal_stmt.
HiveSqlParserVisitor.prototype.visitSignal_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#summary_stmt.
HiveSqlParserVisitor.prototype.visitSummary_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#truncate_stmt.
HiveSqlParserVisitor.prototype.visitTruncate_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#use_stmt.
HiveSqlParserVisitor.prototype.visitUse_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#values_into_stmt.
HiveSqlParserVisitor.prototype.visitValues_into_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#while_stmt.
HiveSqlParserVisitor.prototype.visitWhile_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#for_cursor_stmt.
HiveSqlParserVisitor.prototype.visitFor_cursor_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#for_range_stmt.
HiveSqlParserVisitor.prototype.visitFor_range_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#label.
HiveSqlParserVisitor.prototype.visitLabel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#using_clause.
HiveSqlParserVisitor.prototype.visitUsing_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#select_stmt.
HiveSqlParserVisitor.prototype.visitSelect_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#cte_select_stmt.
HiveSqlParserVisitor.prototype.visitCte_select_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#cte_select_stmt_item.
HiveSqlParserVisitor.prototype.visitCte_select_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#cte_select_cols.
HiveSqlParserVisitor.prototype.visitCte_select_cols = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#fullselect_stmt.
HiveSqlParserVisitor.prototype.visitFullselect_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#fullselect_stmt_item.
HiveSqlParserVisitor.prototype.visitFullselect_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#fullselect_set_clause.
HiveSqlParserVisitor.prototype.visitFullselect_set_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#subselect_stmt.
HiveSqlParserVisitor.prototype.visitSubselect_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#select_list.
HiveSqlParserVisitor.prototype.visitSelect_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#select_list_set.
HiveSqlParserVisitor.prototype.visitSelect_list_set = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#select_list_limit.
HiveSqlParserVisitor.prototype.visitSelect_list_limit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#select_list_item.
HiveSqlParserVisitor.prototype.visitSelect_list_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#select_list_alias.
HiveSqlParserVisitor.prototype.visitSelect_list_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#select_list_asterisk.
HiveSqlParserVisitor.prototype.visitSelect_list_asterisk = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#into_clause.
HiveSqlParserVisitor.prototype.visitInto_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#from_clause.
HiveSqlParserVisitor.prototype.visitFrom_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#from_table_clause.
HiveSqlParserVisitor.prototype.visitFrom_table_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#from_table_name_clause.
HiveSqlParserVisitor.prototype.visitFrom_table_name_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#from_subselect_clause.
HiveSqlParserVisitor.prototype.visitFrom_subselect_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#from_join_clause.
HiveSqlParserVisitor.prototype.visitFrom_join_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#from_join_type_clause.
HiveSqlParserVisitor.prototype.visitFrom_join_type_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#from_table_values_clause.
HiveSqlParserVisitor.prototype.visitFrom_table_values_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#from_table_values_row.
HiveSqlParserVisitor.prototype.visitFrom_table_values_row = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#from_alias_clause.
HiveSqlParserVisitor.prototype.visitFrom_alias_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#table_name.
HiveSqlParserVisitor.prototype.visitTable_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#where_clause.
HiveSqlParserVisitor.prototype.visitWhere_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#group_by_clause.
HiveSqlParserVisitor.prototype.visitGroup_by_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#having_clause.
HiveSqlParserVisitor.prototype.visitHaving_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#qualify_clause.
HiveSqlParserVisitor.prototype.visitQualify_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#order_by_clause.
HiveSqlParserVisitor.prototype.visitOrder_by_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#select_options.
HiveSqlParserVisitor.prototype.visitSelect_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#select_options_item.
HiveSqlParserVisitor.prototype.visitSelect_options_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#update_stmt.
HiveSqlParserVisitor.prototype.visitUpdate_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#update_assignment.
HiveSqlParserVisitor.prototype.visitUpdate_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#update_table.
HiveSqlParserVisitor.prototype.visitUpdate_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#update_upsert.
HiveSqlParserVisitor.prototype.visitUpdate_upsert = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#merge_stmt.
HiveSqlParserVisitor.prototype.visitMerge_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#merge_table.
HiveSqlParserVisitor.prototype.visitMerge_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#merge_condition.
HiveSqlParserVisitor.prototype.visitMerge_condition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#merge_action.
HiveSqlParserVisitor.prototype.visitMerge_action = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#delete_stmt.
HiveSqlParserVisitor.prototype.visitDelete_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#delete_alias.
HiveSqlParserVisitor.prototype.visitDelete_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#describe_stmt.
HiveSqlParserVisitor.prototype.visitDescribe_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#bool_expr.
HiveSqlParserVisitor.prototype.visitBool_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#bool_expr_atom.
HiveSqlParserVisitor.prototype.visitBool_expr_atom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#bool_expr_unary.
HiveSqlParserVisitor.prototype.visitBool_expr_unary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#bool_expr_single_in.
HiveSqlParserVisitor.prototype.visitBool_expr_single_in = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#bool_expr_multi_in.
HiveSqlParserVisitor.prototype.visitBool_expr_multi_in = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#bool_expr_binary.
HiveSqlParserVisitor.prototype.visitBool_expr_binary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#bool_expr_logical_operator.
HiveSqlParserVisitor.prototype.visitBool_expr_logical_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#bool_expr_binary_operator.
HiveSqlParserVisitor.prototype.visitBool_expr_binary_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr.
HiveSqlParserVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_atom.
HiveSqlParserVisitor.prototype.visitExpr_atom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_interval.
HiveSqlParserVisitor.prototype.visitExpr_interval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#interval_item.
HiveSqlParserVisitor.prototype.visitInterval_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_concat.
HiveSqlParserVisitor.prototype.visitExpr_concat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_concat_item.
HiveSqlParserVisitor.prototype.visitExpr_concat_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_case.
HiveSqlParserVisitor.prototype.visitExpr_case = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_case_simple.
HiveSqlParserVisitor.prototype.visitExpr_case_simple = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_case_searched.
HiveSqlParserVisitor.prototype.visitExpr_case_searched = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_cursor_attribute.
HiveSqlParserVisitor.prototype.visitExpr_cursor_attribute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_agg_window_func.
HiveSqlParserVisitor.prototype.visitExpr_agg_window_func = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_func_all_distinct.
HiveSqlParserVisitor.prototype.visitExpr_func_all_distinct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_func_over_clause.
HiveSqlParserVisitor.prototype.visitExpr_func_over_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_func_partition_by_clause.
HiveSqlParserVisitor.prototype.visitExpr_func_partition_by_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_spec_func.
HiveSqlParserVisitor.prototype.visitExpr_spec_func = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_func.
HiveSqlParserVisitor.prototype.visitExpr_func = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_func_params.
HiveSqlParserVisitor.prototype.visitExpr_func_params = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#func_param.
HiveSqlParserVisitor.prototype.visitFunc_param = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_select.
HiveSqlParserVisitor.prototype.visitExpr_select = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#expr_file.
HiveSqlParserVisitor.prototype.visitExpr_file = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#hive.
HiveSqlParserVisitor.prototype.visitHive = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#hive_item.
HiveSqlParserVisitor.prototype.visitHive_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#host.
HiveSqlParserVisitor.prototype.visitHost = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#host_cmd.
HiveSqlParserVisitor.prototype.visitHost_cmd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#host_stmt.
HiveSqlParserVisitor.prototype.visitHost_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#file_name.
HiveSqlParserVisitor.prototype.visitFile_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#date_literal.
HiveSqlParserVisitor.prototype.visitDate_literal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#timestamp_literal.
HiveSqlParserVisitor.prototype.visitTimestamp_literal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#ident.
HiveSqlParserVisitor.prototype.visitIdent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#single_quotedString.
HiveSqlParserVisitor.prototype.visitSingle_quotedString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#double_quotedString.
HiveSqlParserVisitor.prototype.visitDouble_quotedString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#int_number.
HiveSqlParserVisitor.prototype.visitInt_number = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#dec_number.
HiveSqlParserVisitor.prototype.visitDec_number = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#bool_literal.
HiveSqlParserVisitor.prototype.visitBool_literal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#null_const.
HiveSqlParserVisitor.prototype.visitNull_const = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HiveSqlParser#non_reserved_words.
HiveSqlParserVisitor.prototype.visitNon_reserved_words = function(ctx) {
  return this.visitChildren(ctx);
};



exports.HiveSqlParserVisitor = HiveSqlParserVisitor;