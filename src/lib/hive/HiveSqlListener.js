// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/hive/HiveSql.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by HiveSql.
function HiveSqlListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

HiveSqlListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
HiveSqlListener.prototype.constructor = HiveSqlListener;

// Enter a parse tree produced by HiveSql#program.
HiveSqlListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by HiveSql#program.
HiveSqlListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by HiveSql#block.
HiveSqlListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by HiveSql#block.
HiveSqlListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by HiveSql#begin_end_block.
HiveSqlListener.prototype.enterBegin_end_block = function(ctx) {
};

// Exit a parse tree produced by HiveSql#begin_end_block.
HiveSqlListener.prototype.exitBegin_end_block = function(ctx) {
};


// Enter a parse tree produced by HiveSql#single_block_stmt.
HiveSqlListener.prototype.enterSingle_block_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#single_block_stmt.
HiveSqlListener.prototype.exitSingle_block_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#block_end.
HiveSqlListener.prototype.enterBlock_end = function(ctx) {
};

// Exit a parse tree produced by HiveSql#block_end.
HiveSqlListener.prototype.exitBlock_end = function(ctx) {
};


// Enter a parse tree produced by HiveSql#proc_block.
HiveSqlListener.prototype.enterProc_block = function(ctx) {
};

// Exit a parse tree produced by HiveSql#proc_block.
HiveSqlListener.prototype.exitProc_block = function(ctx) {
};


// Enter a parse tree produced by HiveSql#stmt.
HiveSqlListener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#stmt.
HiveSqlListener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#semicolon_stmt.
HiveSqlListener.prototype.enterSemicolon_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#semicolon_stmt.
HiveSqlListener.prototype.exitSemicolon_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#exception_block.
HiveSqlListener.prototype.enterException_block = function(ctx) {
};

// Exit a parse tree produced by HiveSql#exception_block.
HiveSqlListener.prototype.exitException_block = function(ctx) {
};


// Enter a parse tree produced by HiveSql#exception_block_item.
HiveSqlListener.prototype.enterException_block_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#exception_block_item.
HiveSqlListener.prototype.exitException_block_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#null_stmt.
HiveSqlListener.prototype.enterNull_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#null_stmt.
HiveSqlListener.prototype.exitNull_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_stmt.
HiveSqlListener.prototype.enterExpr_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_stmt.
HiveSqlListener.prototype.exitExpr_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#assignment_stmt.
HiveSqlListener.prototype.enterAssignment_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#assignment_stmt.
HiveSqlListener.prototype.exitAssignment_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#assignment_stmt_item.
HiveSqlListener.prototype.enterAssignment_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#assignment_stmt_item.
HiveSqlListener.prototype.exitAssignment_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#assignment_stmt_single_item.
HiveSqlListener.prototype.enterAssignment_stmt_single_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#assignment_stmt_single_item.
HiveSqlListener.prototype.exitAssignment_stmt_single_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#assignment_stmt_multiple_item.
HiveSqlListener.prototype.enterAssignment_stmt_multiple_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#assignment_stmt_multiple_item.
HiveSqlListener.prototype.exitAssignment_stmt_multiple_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#assignment_stmt_select_item.
HiveSqlListener.prototype.enterAssignment_stmt_select_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#assignment_stmt_select_item.
HiveSqlListener.prototype.exitAssignment_stmt_select_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#allocate_cursor_stmt.
HiveSqlListener.prototype.enterAllocate_cursor_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#allocate_cursor_stmt.
HiveSqlListener.prototype.exitAllocate_cursor_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#associate_locator_stmt.
HiveSqlListener.prototype.enterAssociate_locator_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#associate_locator_stmt.
HiveSqlListener.prototype.exitAssociate_locator_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#begin_transaction_stmt.
HiveSqlListener.prototype.enterBegin_transaction_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#begin_transaction_stmt.
HiveSqlListener.prototype.exitBegin_transaction_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#break_stmt.
HiveSqlListener.prototype.enterBreak_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#break_stmt.
HiveSqlListener.prototype.exitBreak_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#call_stmt.
HiveSqlListener.prototype.enterCall_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#call_stmt.
HiveSqlListener.prototype.exitCall_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#declare_stmt.
HiveSqlListener.prototype.enterDeclare_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#declare_stmt.
HiveSqlListener.prototype.exitDeclare_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#declare_block.
HiveSqlListener.prototype.enterDeclare_block = function(ctx) {
};

// Exit a parse tree produced by HiveSql#declare_block.
HiveSqlListener.prototype.exitDeclare_block = function(ctx) {
};


// Enter a parse tree produced by HiveSql#declare_block_inplace.
HiveSqlListener.prototype.enterDeclare_block_inplace = function(ctx) {
};

// Exit a parse tree produced by HiveSql#declare_block_inplace.
HiveSqlListener.prototype.exitDeclare_block_inplace = function(ctx) {
};


// Enter a parse tree produced by HiveSql#declare_stmt_item.
HiveSqlListener.prototype.enterDeclare_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#declare_stmt_item.
HiveSqlListener.prototype.exitDeclare_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#declare_var_item.
HiveSqlListener.prototype.enterDeclare_var_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#declare_var_item.
HiveSqlListener.prototype.exitDeclare_var_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#declare_condition_item.
HiveSqlListener.prototype.enterDeclare_condition_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#declare_condition_item.
HiveSqlListener.prototype.exitDeclare_condition_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#declare_cursor_item.
HiveSqlListener.prototype.enterDeclare_cursor_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#declare_cursor_item.
HiveSqlListener.prototype.exitDeclare_cursor_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#cursor_with_return.
HiveSqlListener.prototype.enterCursor_with_return = function(ctx) {
};

// Exit a parse tree produced by HiveSql#cursor_with_return.
HiveSqlListener.prototype.exitCursor_with_return = function(ctx) {
};


// Enter a parse tree produced by HiveSql#cursor_without_return.
HiveSqlListener.prototype.enterCursor_without_return = function(ctx) {
};

// Exit a parse tree produced by HiveSql#cursor_without_return.
HiveSqlListener.prototype.exitCursor_without_return = function(ctx) {
};


// Enter a parse tree produced by HiveSql#declare_handler_item.
HiveSqlListener.prototype.enterDeclare_handler_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#declare_handler_item.
HiveSqlListener.prototype.exitDeclare_handler_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#declare_temporary_table_item.
HiveSqlListener.prototype.enterDeclare_temporary_table_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#declare_temporary_table_item.
HiveSqlListener.prototype.exitDeclare_temporary_table_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_stmt.
HiveSqlListener.prototype.enterCreate_table_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_stmt.
HiveSqlListener.prototype.exitCreate_table_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_local_temp_table_stmt.
HiveSqlListener.prototype.enterCreate_local_temp_table_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_local_temp_table_stmt.
HiveSqlListener.prototype.exitCreate_local_temp_table_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_definition.
HiveSqlListener.prototype.enterCreate_table_definition = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_definition.
HiveSqlListener.prototype.exitCreate_table_definition = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_columns.
HiveSqlListener.prototype.enterCreate_table_columns = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_columns.
HiveSqlListener.prototype.exitCreate_table_columns = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_columns_item.
HiveSqlListener.prototype.enterCreate_table_columns_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_columns_item.
HiveSqlListener.prototype.exitCreate_table_columns_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#column_name.
HiveSqlListener.prototype.enterColumn_name = function(ctx) {
};

// Exit a parse tree produced by HiveSql#column_name.
HiveSqlListener.prototype.exitColumn_name = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_column_inline_cons.
HiveSqlListener.prototype.enterCreate_table_column_inline_cons = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_column_inline_cons.
HiveSqlListener.prototype.exitCreate_table_column_inline_cons = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_column_cons.
HiveSqlListener.prototype.enterCreate_table_column_cons = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_column_cons.
HiveSqlListener.prototype.exitCreate_table_column_cons = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_fk_action.
HiveSqlListener.prototype.enterCreate_table_fk_action = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_fk_action.
HiveSqlListener.prototype.exitCreate_table_fk_action = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_preoptions.
HiveSqlListener.prototype.enterCreate_table_preoptions = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_preoptions.
HiveSqlListener.prototype.exitCreate_table_preoptions = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_preoptions_item.
HiveSqlListener.prototype.enterCreate_table_preoptions_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_preoptions_item.
HiveSqlListener.prototype.exitCreate_table_preoptions_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_preoptions_td_item.
HiveSqlListener.prototype.enterCreate_table_preoptions_td_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_preoptions_td_item.
HiveSqlListener.prototype.exitCreate_table_preoptions_td_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_options.
HiveSqlListener.prototype.enterCreate_table_options = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_options.
HiveSqlListener.prototype.exitCreate_table_options = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_options_item.
HiveSqlListener.prototype.enterCreate_table_options_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_options_item.
HiveSqlListener.prototype.exitCreate_table_options_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_options_ora_item.
HiveSqlListener.prototype.enterCreate_table_options_ora_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_options_ora_item.
HiveSqlListener.prototype.exitCreate_table_options_ora_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_options_db2_item.
HiveSqlListener.prototype.enterCreate_table_options_db2_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_options_db2_item.
HiveSqlListener.prototype.exitCreate_table_options_db2_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_options_td_item.
HiveSqlListener.prototype.enterCreate_table_options_td_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_options_td_item.
HiveSqlListener.prototype.exitCreate_table_options_td_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_options_hive_item.
HiveSqlListener.prototype.enterCreate_table_options_hive_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_options_hive_item.
HiveSqlListener.prototype.exitCreate_table_options_hive_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_hive_row_format.
HiveSqlListener.prototype.enterCreate_table_hive_row_format = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_hive_row_format.
HiveSqlListener.prototype.exitCreate_table_hive_row_format = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_hive_row_format_fields.
HiveSqlListener.prototype.enterCreate_table_hive_row_format_fields = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_hive_row_format_fields.
HiveSqlListener.prototype.exitCreate_table_hive_row_format_fields = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_options_mssql_item.
HiveSqlListener.prototype.enterCreate_table_options_mssql_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_options_mssql_item.
HiveSqlListener.prototype.exitCreate_table_options_mssql_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_table_options_mysql_item.
HiveSqlListener.prototype.enterCreate_table_options_mysql_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_table_options_mysql_item.
HiveSqlListener.prototype.exitCreate_table_options_mysql_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#alter_table_stmt.
HiveSqlListener.prototype.enterAlter_table_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#alter_table_stmt.
HiveSqlListener.prototype.exitAlter_table_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#alter_table_item.
HiveSqlListener.prototype.enterAlter_table_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#alter_table_item.
HiveSqlListener.prototype.exitAlter_table_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#alter_table_add_constraint.
HiveSqlListener.prototype.enterAlter_table_add_constraint = function(ctx) {
};

// Exit a parse tree produced by HiveSql#alter_table_add_constraint.
HiveSqlListener.prototype.exitAlter_table_add_constraint = function(ctx) {
};


// Enter a parse tree produced by HiveSql#alter_table_add_constraint_item.
HiveSqlListener.prototype.enterAlter_table_add_constraint_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#alter_table_add_constraint_item.
HiveSqlListener.prototype.exitAlter_table_add_constraint_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#dtype.
HiveSqlListener.prototype.enterDtype = function(ctx) {
};

// Exit a parse tree produced by HiveSql#dtype.
HiveSqlListener.prototype.exitDtype = function(ctx) {
};


// Enter a parse tree produced by HiveSql#dtype_len.
HiveSqlListener.prototype.enterDtype_len = function(ctx) {
};

// Exit a parse tree produced by HiveSql#dtype_len.
HiveSqlListener.prototype.exitDtype_len = function(ctx) {
};


// Enter a parse tree produced by HiveSql#dtype_attr.
HiveSqlListener.prototype.enterDtype_attr = function(ctx) {
};

// Exit a parse tree produced by HiveSql#dtype_attr.
HiveSqlListener.prototype.exitDtype_attr = function(ctx) {
};


// Enter a parse tree produced by HiveSql#dtype_default.
HiveSqlListener.prototype.enterDtype_default = function(ctx) {
};

// Exit a parse tree produced by HiveSql#dtype_default.
HiveSqlListener.prototype.exitDtype_default = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_database_stmt.
HiveSqlListener.prototype.enterCreate_database_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_database_stmt.
HiveSqlListener.prototype.exitCreate_database_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_database_option.
HiveSqlListener.prototype.enterCreate_database_option = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_database_option.
HiveSqlListener.prototype.exitCreate_database_option = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_function_stmt.
HiveSqlListener.prototype.enterCreate_function_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_function_stmt.
HiveSqlListener.prototype.exitCreate_function_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_function_return.
HiveSqlListener.prototype.enterCreate_function_return = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_function_return.
HiveSqlListener.prototype.exitCreate_function_return = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_package_stmt.
HiveSqlListener.prototype.enterCreate_package_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_package_stmt.
HiveSqlListener.prototype.exitCreate_package_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#package_spec.
HiveSqlListener.prototype.enterPackage_spec = function(ctx) {
};

// Exit a parse tree produced by HiveSql#package_spec.
HiveSqlListener.prototype.exitPackage_spec = function(ctx) {
};


// Enter a parse tree produced by HiveSql#package_spec_item.
HiveSqlListener.prototype.enterPackage_spec_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#package_spec_item.
HiveSqlListener.prototype.exitPackage_spec_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_package_body_stmt.
HiveSqlListener.prototype.enterCreate_package_body_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_package_body_stmt.
HiveSqlListener.prototype.exitCreate_package_body_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#package_body.
HiveSqlListener.prototype.enterPackage_body = function(ctx) {
};

// Exit a parse tree produced by HiveSql#package_body.
HiveSqlListener.prototype.exitPackage_body = function(ctx) {
};


// Enter a parse tree produced by HiveSql#package_body_item.
HiveSqlListener.prototype.enterPackage_body_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#package_body_item.
HiveSqlListener.prototype.exitPackage_body_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_procedure_stmt.
HiveSqlListener.prototype.enterCreate_procedure_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_procedure_stmt.
HiveSqlListener.prototype.exitCreate_procedure_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_routine_params.
HiveSqlListener.prototype.enterCreate_routine_params = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_routine_params.
HiveSqlListener.prototype.exitCreate_routine_params = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_routine_param_item.
HiveSqlListener.prototype.enterCreate_routine_param_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_routine_param_item.
HiveSqlListener.prototype.exitCreate_routine_param_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_routine_options.
HiveSqlListener.prototype.enterCreate_routine_options = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_routine_options.
HiveSqlListener.prototype.exitCreate_routine_options = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_routine_option.
HiveSqlListener.prototype.enterCreate_routine_option = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_routine_option.
HiveSqlListener.prototype.exitCreate_routine_option = function(ctx) {
};


// Enter a parse tree produced by HiveSql#drop_stmt.
HiveSqlListener.prototype.enterDrop_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#drop_stmt.
HiveSqlListener.prototype.exitDrop_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#end_transaction_stmt.
HiveSqlListener.prototype.enterEnd_transaction_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#end_transaction_stmt.
HiveSqlListener.prototype.exitEnd_transaction_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#exec_stmt.
HiveSqlListener.prototype.enterExec_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#exec_stmt.
HiveSqlListener.prototype.exitExec_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#if_stmt.
HiveSqlListener.prototype.enterIf_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#if_stmt.
HiveSqlListener.prototype.exitIf_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#if_plsql_stmt.
HiveSqlListener.prototype.enterIf_plsql_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#if_plsql_stmt.
HiveSqlListener.prototype.exitIf_plsql_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#if_tsql_stmt.
HiveSqlListener.prototype.enterIf_tsql_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#if_tsql_stmt.
HiveSqlListener.prototype.exitIf_tsql_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#if_bteq_stmt.
HiveSqlListener.prototype.enterIf_bteq_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#if_bteq_stmt.
HiveSqlListener.prototype.exitIf_bteq_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#elseif_block.
HiveSqlListener.prototype.enterElseif_block = function(ctx) {
};

// Exit a parse tree produced by HiveSql#elseif_block.
HiveSqlListener.prototype.exitElseif_block = function(ctx) {
};


// Enter a parse tree produced by HiveSql#else_block.
HiveSqlListener.prototype.enterElse_block = function(ctx) {
};

// Exit a parse tree produced by HiveSql#else_block.
HiveSqlListener.prototype.exitElse_block = function(ctx) {
};


// Enter a parse tree produced by HiveSql#include_stmt.
HiveSqlListener.prototype.enterInclude_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#include_stmt.
HiveSqlListener.prototype.exitInclude_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#insert_stmt.
HiveSqlListener.prototype.enterInsert_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#insert_stmt.
HiveSqlListener.prototype.exitInsert_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#insert_stmt_cols.
HiveSqlListener.prototype.enterInsert_stmt_cols = function(ctx) {
};

// Exit a parse tree produced by HiveSql#insert_stmt_cols.
HiveSqlListener.prototype.exitInsert_stmt_cols = function(ctx) {
};


// Enter a parse tree produced by HiveSql#insert_stmt_rows.
HiveSqlListener.prototype.enterInsert_stmt_rows = function(ctx) {
};

// Exit a parse tree produced by HiveSql#insert_stmt_rows.
HiveSqlListener.prototype.exitInsert_stmt_rows = function(ctx) {
};


// Enter a parse tree produced by HiveSql#insert_stmt_row.
HiveSqlListener.prototype.enterInsert_stmt_row = function(ctx) {
};

// Exit a parse tree produced by HiveSql#insert_stmt_row.
HiveSqlListener.prototype.exitInsert_stmt_row = function(ctx) {
};


// Enter a parse tree produced by HiveSql#insert_directory_stmt.
HiveSqlListener.prototype.enterInsert_directory_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#insert_directory_stmt.
HiveSqlListener.prototype.exitInsert_directory_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#exit_stmt.
HiveSqlListener.prototype.enterExit_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#exit_stmt.
HiveSqlListener.prototype.exitExit_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#get_diag_stmt.
HiveSqlListener.prototype.enterGet_diag_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#get_diag_stmt.
HiveSqlListener.prototype.exitGet_diag_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#get_diag_stmt_item.
HiveSqlListener.prototype.enterGet_diag_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#get_diag_stmt_item.
HiveSqlListener.prototype.exitGet_diag_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#get_diag_stmt_exception_item.
HiveSqlListener.prototype.enterGet_diag_stmt_exception_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#get_diag_stmt_exception_item.
HiveSqlListener.prototype.exitGet_diag_stmt_exception_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#get_diag_stmt_rowcount_item.
HiveSqlListener.prototype.enterGet_diag_stmt_rowcount_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#get_diag_stmt_rowcount_item.
HiveSqlListener.prototype.exitGet_diag_stmt_rowcount_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#grant_stmt.
HiveSqlListener.prototype.enterGrant_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#grant_stmt.
HiveSqlListener.prototype.exitGrant_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#grant_stmt_item.
HiveSqlListener.prototype.enterGrant_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#grant_stmt_item.
HiveSqlListener.prototype.exitGrant_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#leave_stmt.
HiveSqlListener.prototype.enterLeave_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#leave_stmt.
HiveSqlListener.prototype.exitLeave_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#map_object_stmt.
HiveSqlListener.prototype.enterMap_object_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#map_object_stmt.
HiveSqlListener.prototype.exitMap_object_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#open_stmt.
HiveSqlListener.prototype.enterOpen_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#open_stmt.
HiveSqlListener.prototype.exitOpen_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#fetch_stmt.
HiveSqlListener.prototype.enterFetch_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#fetch_stmt.
HiveSqlListener.prototype.exitFetch_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#collect_stats_stmt.
HiveSqlListener.prototype.enterCollect_stats_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#collect_stats_stmt.
HiveSqlListener.prototype.exitCollect_stats_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#collect_stats_clause.
HiveSqlListener.prototype.enterCollect_stats_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#collect_stats_clause.
HiveSqlListener.prototype.exitCollect_stats_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#close_stmt.
HiveSqlListener.prototype.enterClose_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#close_stmt.
HiveSqlListener.prototype.exitClose_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#cmp_stmt.
HiveSqlListener.prototype.enterCmp_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#cmp_stmt.
HiveSqlListener.prototype.exitCmp_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#cmp_source.
HiveSqlListener.prototype.enterCmp_source = function(ctx) {
};

// Exit a parse tree produced by HiveSql#cmp_source.
HiveSqlListener.prototype.exitCmp_source = function(ctx) {
};


// Enter a parse tree produced by HiveSql#copy_from_local_stmt.
HiveSqlListener.prototype.enterCopy_from_local_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#copy_from_local_stmt.
HiveSqlListener.prototype.exitCopy_from_local_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#copy_stmt.
HiveSqlListener.prototype.enterCopy_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#copy_stmt.
HiveSqlListener.prototype.exitCopy_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#copy_source.
HiveSqlListener.prototype.enterCopy_source = function(ctx) {
};

// Exit a parse tree produced by HiveSql#copy_source.
HiveSqlListener.prototype.exitCopy_source = function(ctx) {
};


// Enter a parse tree produced by HiveSql#copy_target.
HiveSqlListener.prototype.enterCopy_target = function(ctx) {
};

// Exit a parse tree produced by HiveSql#copy_target.
HiveSqlListener.prototype.exitCopy_target = function(ctx) {
};


// Enter a parse tree produced by HiveSql#copy_option.
HiveSqlListener.prototype.enterCopy_option = function(ctx) {
};

// Exit a parse tree produced by HiveSql#copy_option.
HiveSqlListener.prototype.exitCopy_option = function(ctx) {
};


// Enter a parse tree produced by HiveSql#copy_file_option.
HiveSqlListener.prototype.enterCopy_file_option = function(ctx) {
};

// Exit a parse tree produced by HiveSql#copy_file_option.
HiveSqlListener.prototype.exitCopy_file_option = function(ctx) {
};


// Enter a parse tree produced by HiveSql#commit_stmt.
HiveSqlListener.prototype.enterCommit_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#commit_stmt.
HiveSqlListener.prototype.exitCommit_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_index_stmt.
HiveSqlListener.prototype.enterCreate_index_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_index_stmt.
HiveSqlListener.prototype.exitCreate_index_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#create_index_col.
HiveSqlListener.prototype.enterCreate_index_col = function(ctx) {
};

// Exit a parse tree produced by HiveSql#create_index_col.
HiveSqlListener.prototype.exitCreate_index_col = function(ctx) {
};


// Enter a parse tree produced by HiveSql#index_storage_clause.
HiveSqlListener.prototype.enterIndex_storage_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#index_storage_clause.
HiveSqlListener.prototype.exitIndex_storage_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#index_mssql_storage_clause.
HiveSqlListener.prototype.enterIndex_mssql_storage_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#index_mssql_storage_clause.
HiveSqlListener.prototype.exitIndex_mssql_storage_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#print_stmt.
HiveSqlListener.prototype.enterPrint_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#print_stmt.
HiveSqlListener.prototype.exitPrint_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#quit_stmt.
HiveSqlListener.prototype.enterQuit_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#quit_stmt.
HiveSqlListener.prototype.exitQuit_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#raise_stmt.
HiveSqlListener.prototype.enterRaise_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#raise_stmt.
HiveSqlListener.prototype.exitRaise_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#resignal_stmt.
HiveSqlListener.prototype.enterResignal_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#resignal_stmt.
HiveSqlListener.prototype.exitResignal_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#return_stmt.
HiveSqlListener.prototype.enterReturn_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#return_stmt.
HiveSqlListener.prototype.exitReturn_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#rollback_stmt.
HiveSqlListener.prototype.enterRollback_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#rollback_stmt.
HiveSqlListener.prototype.exitRollback_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#set_session_option.
HiveSqlListener.prototype.enterSet_session_option = function(ctx) {
};

// Exit a parse tree produced by HiveSql#set_session_option.
HiveSqlListener.prototype.exitSet_session_option = function(ctx) {
};


// Enter a parse tree produced by HiveSql#set_current_schema_option.
HiveSqlListener.prototype.enterSet_current_schema_option = function(ctx) {
};

// Exit a parse tree produced by HiveSql#set_current_schema_option.
HiveSqlListener.prototype.exitSet_current_schema_option = function(ctx) {
};


// Enter a parse tree produced by HiveSql#set_mssql_session_option.
HiveSqlListener.prototype.enterSet_mssql_session_option = function(ctx) {
};

// Exit a parse tree produced by HiveSql#set_mssql_session_option.
HiveSqlListener.prototype.exitSet_mssql_session_option = function(ctx) {
};


// Enter a parse tree produced by HiveSql#set_teradata_session_option.
HiveSqlListener.prototype.enterSet_teradata_session_option = function(ctx) {
};

// Exit a parse tree produced by HiveSql#set_teradata_session_option.
HiveSqlListener.prototype.exitSet_teradata_session_option = function(ctx) {
};


// Enter a parse tree produced by HiveSql#signal_stmt.
HiveSqlListener.prototype.enterSignal_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#signal_stmt.
HiveSqlListener.prototype.exitSignal_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#summary_stmt.
HiveSqlListener.prototype.enterSummary_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#summary_stmt.
HiveSqlListener.prototype.exitSummary_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#truncate_stmt.
HiveSqlListener.prototype.enterTruncate_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#truncate_stmt.
HiveSqlListener.prototype.exitTruncate_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#use_stmt.
HiveSqlListener.prototype.enterUse_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#use_stmt.
HiveSqlListener.prototype.exitUse_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#values_into_stmt.
HiveSqlListener.prototype.enterValues_into_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#values_into_stmt.
HiveSqlListener.prototype.exitValues_into_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#while_stmt.
HiveSqlListener.prototype.enterWhile_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#while_stmt.
HiveSqlListener.prototype.exitWhile_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#for_cursor_stmt.
HiveSqlListener.prototype.enterFor_cursor_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#for_cursor_stmt.
HiveSqlListener.prototype.exitFor_cursor_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#for_range_stmt.
HiveSqlListener.prototype.enterFor_range_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#for_range_stmt.
HiveSqlListener.prototype.exitFor_range_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#label.
HiveSqlListener.prototype.enterLabel = function(ctx) {
};

// Exit a parse tree produced by HiveSql#label.
HiveSqlListener.prototype.exitLabel = function(ctx) {
};


// Enter a parse tree produced by HiveSql#using_clause.
HiveSqlListener.prototype.enterUsing_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#using_clause.
HiveSqlListener.prototype.exitUsing_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#select_stmt.
HiveSqlListener.prototype.enterSelect_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#select_stmt.
HiveSqlListener.prototype.exitSelect_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#cte_select_stmt.
HiveSqlListener.prototype.enterCte_select_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#cte_select_stmt.
HiveSqlListener.prototype.exitCte_select_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#cte_select_stmt_item.
HiveSqlListener.prototype.enterCte_select_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#cte_select_stmt_item.
HiveSqlListener.prototype.exitCte_select_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#cte_select_cols.
HiveSqlListener.prototype.enterCte_select_cols = function(ctx) {
};

// Exit a parse tree produced by HiveSql#cte_select_cols.
HiveSqlListener.prototype.exitCte_select_cols = function(ctx) {
};


// Enter a parse tree produced by HiveSql#fullselect_stmt.
HiveSqlListener.prototype.enterFullselect_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#fullselect_stmt.
HiveSqlListener.prototype.exitFullselect_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#fullselect_stmt_item.
HiveSqlListener.prototype.enterFullselect_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#fullselect_stmt_item.
HiveSqlListener.prototype.exitFullselect_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#fullselect_set_clause.
HiveSqlListener.prototype.enterFullselect_set_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#fullselect_set_clause.
HiveSqlListener.prototype.exitFullselect_set_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#subselect_stmt.
HiveSqlListener.prototype.enterSubselect_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#subselect_stmt.
HiveSqlListener.prototype.exitSubselect_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#select_list.
HiveSqlListener.prototype.enterSelect_list = function(ctx) {
};

// Exit a parse tree produced by HiveSql#select_list.
HiveSqlListener.prototype.exitSelect_list = function(ctx) {
};


// Enter a parse tree produced by HiveSql#select_list_set.
HiveSqlListener.prototype.enterSelect_list_set = function(ctx) {
};

// Exit a parse tree produced by HiveSql#select_list_set.
HiveSqlListener.prototype.exitSelect_list_set = function(ctx) {
};


// Enter a parse tree produced by HiveSql#select_list_limit.
HiveSqlListener.prototype.enterSelect_list_limit = function(ctx) {
};

// Exit a parse tree produced by HiveSql#select_list_limit.
HiveSqlListener.prototype.exitSelect_list_limit = function(ctx) {
};


// Enter a parse tree produced by HiveSql#select_list_item.
HiveSqlListener.prototype.enterSelect_list_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#select_list_item.
HiveSqlListener.prototype.exitSelect_list_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#select_list_alias.
HiveSqlListener.prototype.enterSelect_list_alias = function(ctx) {
};

// Exit a parse tree produced by HiveSql#select_list_alias.
HiveSqlListener.prototype.exitSelect_list_alias = function(ctx) {
};


// Enter a parse tree produced by HiveSql#select_list_asterisk.
HiveSqlListener.prototype.enterSelect_list_asterisk = function(ctx) {
};

// Exit a parse tree produced by HiveSql#select_list_asterisk.
HiveSqlListener.prototype.exitSelect_list_asterisk = function(ctx) {
};


// Enter a parse tree produced by HiveSql#into_clause.
HiveSqlListener.prototype.enterInto_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#into_clause.
HiveSqlListener.prototype.exitInto_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#from_clause.
HiveSqlListener.prototype.enterFrom_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#from_clause.
HiveSqlListener.prototype.exitFrom_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#from_table_clause.
HiveSqlListener.prototype.enterFrom_table_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#from_table_clause.
HiveSqlListener.prototype.exitFrom_table_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#from_table_name_clause.
HiveSqlListener.prototype.enterFrom_table_name_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#from_table_name_clause.
HiveSqlListener.prototype.exitFrom_table_name_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#from_subselect_clause.
HiveSqlListener.prototype.enterFrom_subselect_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#from_subselect_clause.
HiveSqlListener.prototype.exitFrom_subselect_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#from_join_clause.
HiveSqlListener.prototype.enterFrom_join_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#from_join_clause.
HiveSqlListener.prototype.exitFrom_join_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#from_join_type_clause.
HiveSqlListener.prototype.enterFrom_join_type_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#from_join_type_clause.
HiveSqlListener.prototype.exitFrom_join_type_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#from_table_values_clause.
HiveSqlListener.prototype.enterFrom_table_values_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#from_table_values_clause.
HiveSqlListener.prototype.exitFrom_table_values_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#from_table_values_row.
HiveSqlListener.prototype.enterFrom_table_values_row = function(ctx) {
};

// Exit a parse tree produced by HiveSql#from_table_values_row.
HiveSqlListener.prototype.exitFrom_table_values_row = function(ctx) {
};


// Enter a parse tree produced by HiveSql#from_alias_clause.
HiveSqlListener.prototype.enterFrom_alias_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#from_alias_clause.
HiveSqlListener.prototype.exitFrom_alias_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#table_name.
HiveSqlListener.prototype.enterTable_name = function(ctx) {
};

// Exit a parse tree produced by HiveSql#table_name.
HiveSqlListener.prototype.exitTable_name = function(ctx) {
};


// Enter a parse tree produced by HiveSql#where_clause.
HiveSqlListener.prototype.enterWhere_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#where_clause.
HiveSqlListener.prototype.exitWhere_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#group_by_clause.
HiveSqlListener.prototype.enterGroup_by_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#group_by_clause.
HiveSqlListener.prototype.exitGroup_by_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#having_clause.
HiveSqlListener.prototype.enterHaving_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#having_clause.
HiveSqlListener.prototype.exitHaving_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#qualify_clause.
HiveSqlListener.prototype.enterQualify_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#qualify_clause.
HiveSqlListener.prototype.exitQualify_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#order_by_clause.
HiveSqlListener.prototype.enterOrder_by_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#order_by_clause.
HiveSqlListener.prototype.exitOrder_by_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#select_options.
HiveSqlListener.prototype.enterSelect_options = function(ctx) {
};

// Exit a parse tree produced by HiveSql#select_options.
HiveSqlListener.prototype.exitSelect_options = function(ctx) {
};


// Enter a parse tree produced by HiveSql#select_options_item.
HiveSqlListener.prototype.enterSelect_options_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#select_options_item.
HiveSqlListener.prototype.exitSelect_options_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#update_stmt.
HiveSqlListener.prototype.enterUpdate_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#update_stmt.
HiveSqlListener.prototype.exitUpdate_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#update_assignment.
HiveSqlListener.prototype.enterUpdate_assignment = function(ctx) {
};

// Exit a parse tree produced by HiveSql#update_assignment.
HiveSqlListener.prototype.exitUpdate_assignment = function(ctx) {
};


// Enter a parse tree produced by HiveSql#update_table.
HiveSqlListener.prototype.enterUpdate_table = function(ctx) {
};

// Exit a parse tree produced by HiveSql#update_table.
HiveSqlListener.prototype.exitUpdate_table = function(ctx) {
};


// Enter a parse tree produced by HiveSql#update_upsert.
HiveSqlListener.prototype.enterUpdate_upsert = function(ctx) {
};

// Exit a parse tree produced by HiveSql#update_upsert.
HiveSqlListener.prototype.exitUpdate_upsert = function(ctx) {
};


// Enter a parse tree produced by HiveSql#merge_stmt.
HiveSqlListener.prototype.enterMerge_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#merge_stmt.
HiveSqlListener.prototype.exitMerge_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#merge_table.
HiveSqlListener.prototype.enterMerge_table = function(ctx) {
};

// Exit a parse tree produced by HiveSql#merge_table.
HiveSqlListener.prototype.exitMerge_table = function(ctx) {
};


// Enter a parse tree produced by HiveSql#merge_condition.
HiveSqlListener.prototype.enterMerge_condition = function(ctx) {
};

// Exit a parse tree produced by HiveSql#merge_condition.
HiveSqlListener.prototype.exitMerge_condition = function(ctx) {
};


// Enter a parse tree produced by HiveSql#merge_action.
HiveSqlListener.prototype.enterMerge_action = function(ctx) {
};

// Exit a parse tree produced by HiveSql#merge_action.
HiveSqlListener.prototype.exitMerge_action = function(ctx) {
};


// Enter a parse tree produced by HiveSql#delete_stmt.
HiveSqlListener.prototype.enterDelete_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#delete_stmt.
HiveSqlListener.prototype.exitDelete_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#delete_alias.
HiveSqlListener.prototype.enterDelete_alias = function(ctx) {
};

// Exit a parse tree produced by HiveSql#delete_alias.
HiveSqlListener.prototype.exitDelete_alias = function(ctx) {
};


// Enter a parse tree produced by HiveSql#describe_stmt.
HiveSqlListener.prototype.enterDescribe_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#describe_stmt.
HiveSqlListener.prototype.exitDescribe_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#bool_expr.
HiveSqlListener.prototype.enterBool_expr = function(ctx) {
};

// Exit a parse tree produced by HiveSql#bool_expr.
HiveSqlListener.prototype.exitBool_expr = function(ctx) {
};


// Enter a parse tree produced by HiveSql#bool_expr_atom.
HiveSqlListener.prototype.enterBool_expr_atom = function(ctx) {
};

// Exit a parse tree produced by HiveSql#bool_expr_atom.
HiveSqlListener.prototype.exitBool_expr_atom = function(ctx) {
};


// Enter a parse tree produced by HiveSql#bool_expr_unary.
HiveSqlListener.prototype.enterBool_expr_unary = function(ctx) {
};

// Exit a parse tree produced by HiveSql#bool_expr_unary.
HiveSqlListener.prototype.exitBool_expr_unary = function(ctx) {
};


// Enter a parse tree produced by HiveSql#bool_expr_single_in.
HiveSqlListener.prototype.enterBool_expr_single_in = function(ctx) {
};

// Exit a parse tree produced by HiveSql#bool_expr_single_in.
HiveSqlListener.prototype.exitBool_expr_single_in = function(ctx) {
};


// Enter a parse tree produced by HiveSql#bool_expr_multi_in.
HiveSqlListener.prototype.enterBool_expr_multi_in = function(ctx) {
};

// Exit a parse tree produced by HiveSql#bool_expr_multi_in.
HiveSqlListener.prototype.exitBool_expr_multi_in = function(ctx) {
};


// Enter a parse tree produced by HiveSql#bool_expr_binary.
HiveSqlListener.prototype.enterBool_expr_binary = function(ctx) {
};

// Exit a parse tree produced by HiveSql#bool_expr_binary.
HiveSqlListener.prototype.exitBool_expr_binary = function(ctx) {
};


// Enter a parse tree produced by HiveSql#bool_expr_logical_operator.
HiveSqlListener.prototype.enterBool_expr_logical_operator = function(ctx) {
};

// Exit a parse tree produced by HiveSql#bool_expr_logical_operator.
HiveSqlListener.prototype.exitBool_expr_logical_operator = function(ctx) {
};


// Enter a parse tree produced by HiveSql#bool_expr_binary_operator.
HiveSqlListener.prototype.enterBool_expr_binary_operator = function(ctx) {
};

// Exit a parse tree produced by HiveSql#bool_expr_binary_operator.
HiveSqlListener.prototype.exitBool_expr_binary_operator = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr.
HiveSqlListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr.
HiveSqlListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_atom.
HiveSqlListener.prototype.enterExpr_atom = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_atom.
HiveSqlListener.prototype.exitExpr_atom = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_interval.
HiveSqlListener.prototype.enterExpr_interval = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_interval.
HiveSqlListener.prototype.exitExpr_interval = function(ctx) {
};


// Enter a parse tree produced by HiveSql#interval_item.
HiveSqlListener.prototype.enterInterval_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#interval_item.
HiveSqlListener.prototype.exitInterval_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_concat.
HiveSqlListener.prototype.enterExpr_concat = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_concat.
HiveSqlListener.prototype.exitExpr_concat = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_concat_item.
HiveSqlListener.prototype.enterExpr_concat_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_concat_item.
HiveSqlListener.prototype.exitExpr_concat_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_case.
HiveSqlListener.prototype.enterExpr_case = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_case.
HiveSqlListener.prototype.exitExpr_case = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_case_simple.
HiveSqlListener.prototype.enterExpr_case_simple = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_case_simple.
HiveSqlListener.prototype.exitExpr_case_simple = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_case_searched.
HiveSqlListener.prototype.enterExpr_case_searched = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_case_searched.
HiveSqlListener.prototype.exitExpr_case_searched = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_cursor_attribute.
HiveSqlListener.prototype.enterExpr_cursor_attribute = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_cursor_attribute.
HiveSqlListener.prototype.exitExpr_cursor_attribute = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_agg_window_func.
HiveSqlListener.prototype.enterExpr_agg_window_func = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_agg_window_func.
HiveSqlListener.prototype.exitExpr_agg_window_func = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_func_all_distinct.
HiveSqlListener.prototype.enterExpr_func_all_distinct = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_func_all_distinct.
HiveSqlListener.prototype.exitExpr_func_all_distinct = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_func_over_clause.
HiveSqlListener.prototype.enterExpr_func_over_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_func_over_clause.
HiveSqlListener.prototype.exitExpr_func_over_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_func_partition_by_clause.
HiveSqlListener.prototype.enterExpr_func_partition_by_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_func_partition_by_clause.
HiveSqlListener.prototype.exitExpr_func_partition_by_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_spec_func.
HiveSqlListener.prototype.enterExpr_spec_func = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_spec_func.
HiveSqlListener.prototype.exitExpr_spec_func = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_func.
HiveSqlListener.prototype.enterExpr_func = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_func.
HiveSqlListener.prototype.exitExpr_func = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_func_params.
HiveSqlListener.prototype.enterExpr_func_params = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_func_params.
HiveSqlListener.prototype.exitExpr_func_params = function(ctx) {
};


// Enter a parse tree produced by HiveSql#func_param.
HiveSqlListener.prototype.enterFunc_param = function(ctx) {
};

// Exit a parse tree produced by HiveSql#func_param.
HiveSqlListener.prototype.exitFunc_param = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_select.
HiveSqlListener.prototype.enterExpr_select = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_select.
HiveSqlListener.prototype.exitExpr_select = function(ctx) {
};


// Enter a parse tree produced by HiveSql#expr_file.
HiveSqlListener.prototype.enterExpr_file = function(ctx) {
};

// Exit a parse tree produced by HiveSql#expr_file.
HiveSqlListener.prototype.exitExpr_file = function(ctx) {
};


// Enter a parse tree produced by HiveSql#hive.
HiveSqlListener.prototype.enterHive = function(ctx) {
};

// Exit a parse tree produced by HiveSql#hive.
HiveSqlListener.prototype.exitHive = function(ctx) {
};


// Enter a parse tree produced by HiveSql#hive_item.
HiveSqlListener.prototype.enterHive_item = function(ctx) {
};

// Exit a parse tree produced by HiveSql#hive_item.
HiveSqlListener.prototype.exitHive_item = function(ctx) {
};


// Enter a parse tree produced by HiveSql#host.
HiveSqlListener.prototype.enterHost = function(ctx) {
};

// Exit a parse tree produced by HiveSql#host.
HiveSqlListener.prototype.exitHost = function(ctx) {
};


// Enter a parse tree produced by HiveSql#host_cmd.
HiveSqlListener.prototype.enterHost_cmd = function(ctx) {
};

// Exit a parse tree produced by HiveSql#host_cmd.
HiveSqlListener.prototype.exitHost_cmd = function(ctx) {
};


// Enter a parse tree produced by HiveSql#host_stmt.
HiveSqlListener.prototype.enterHost_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSql#host_stmt.
HiveSqlListener.prototype.exitHost_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSql#file_name.
HiveSqlListener.prototype.enterFile_name = function(ctx) {
};

// Exit a parse tree produced by HiveSql#file_name.
HiveSqlListener.prototype.exitFile_name = function(ctx) {
};


// Enter a parse tree produced by HiveSql#date_literal.
HiveSqlListener.prototype.enterDate_literal = function(ctx) {
};

// Exit a parse tree produced by HiveSql#date_literal.
HiveSqlListener.prototype.exitDate_literal = function(ctx) {
};


// Enter a parse tree produced by HiveSql#timestamp_literal.
HiveSqlListener.prototype.enterTimestamp_literal = function(ctx) {
};

// Exit a parse tree produced by HiveSql#timestamp_literal.
HiveSqlListener.prototype.exitTimestamp_literal = function(ctx) {
};


// Enter a parse tree produced by HiveSql#ident.
HiveSqlListener.prototype.enterIdent = function(ctx) {
};

// Exit a parse tree produced by HiveSql#ident.
HiveSqlListener.prototype.exitIdent = function(ctx) {
};


// Enter a parse tree produced by HiveSql#single_quotedString.
HiveSqlListener.prototype.enterSingle_quotedString = function(ctx) {
};

// Exit a parse tree produced by HiveSql#single_quotedString.
HiveSqlListener.prototype.exitSingle_quotedString = function(ctx) {
};


// Enter a parse tree produced by HiveSql#double_quotedString.
HiveSqlListener.prototype.enterDouble_quotedString = function(ctx) {
};

// Exit a parse tree produced by HiveSql#double_quotedString.
HiveSqlListener.prototype.exitDouble_quotedString = function(ctx) {
};


// Enter a parse tree produced by HiveSql#int_number.
HiveSqlListener.prototype.enterInt_number = function(ctx) {
};

// Exit a parse tree produced by HiveSql#int_number.
HiveSqlListener.prototype.exitInt_number = function(ctx) {
};


// Enter a parse tree produced by HiveSql#dec_number.
HiveSqlListener.prototype.enterDec_number = function(ctx) {
};

// Exit a parse tree produced by HiveSql#dec_number.
HiveSqlListener.prototype.exitDec_number = function(ctx) {
};


// Enter a parse tree produced by HiveSql#bool_literal.
HiveSqlListener.prototype.enterBool_literal = function(ctx) {
};

// Exit a parse tree produced by HiveSql#bool_literal.
HiveSqlListener.prototype.exitBool_literal = function(ctx) {
};


// Enter a parse tree produced by HiveSql#null_const.
HiveSqlListener.prototype.enterNull_const = function(ctx) {
};

// Exit a parse tree produced by HiveSql#null_const.
HiveSqlListener.prototype.exitNull_const = function(ctx) {
};


// Enter a parse tree produced by HiveSql#non_reserved_words.
HiveSqlListener.prototype.enterNon_reserved_words = function(ctx) {
};

// Exit a parse tree produced by HiveSql#non_reserved_words.
HiveSqlListener.prototype.exitNon_reserved_words = function(ctx) {
};



exports.HiveSqlListener = HiveSqlListener;