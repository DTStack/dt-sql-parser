// Generated from /Users/libowen/Desktop/Code/gitlab.prod.dtstack.cn/dt-insight-front/infrastructure/dt-sql-parser/src/grammar/hive/HiveSqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by HiveSqlParser.
function HiveSqlParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

HiveSqlParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
HiveSqlParserListener.prototype.constructor = HiveSqlParserListener;

// Enter a parse tree produced by HiveSqlParser#program.
HiveSqlParserListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#program.
HiveSqlParserListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#block.
HiveSqlParserListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#block.
HiveSqlParserListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#begin_end_block.
HiveSqlParserListener.prototype.enterBegin_end_block = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#begin_end_block.
HiveSqlParserListener.prototype.exitBegin_end_block = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#single_block_stmt.
HiveSqlParserListener.prototype.enterSingle_block_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#single_block_stmt.
HiveSqlParserListener.prototype.exitSingle_block_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#block_end.
HiveSqlParserListener.prototype.enterBlock_end = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#block_end.
HiveSqlParserListener.prototype.exitBlock_end = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#proc_block.
HiveSqlParserListener.prototype.enterProc_block = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#proc_block.
HiveSqlParserListener.prototype.exitProc_block = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#stmt.
HiveSqlParserListener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#stmt.
HiveSqlParserListener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#semicolon_stmt.
HiveSqlParserListener.prototype.enterSemicolon_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#semicolon_stmt.
HiveSqlParserListener.prototype.exitSemicolon_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#exception_block.
HiveSqlParserListener.prototype.enterException_block = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#exception_block.
HiveSqlParserListener.prototype.exitException_block = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#exception_block_item.
HiveSqlParserListener.prototype.enterException_block_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#exception_block_item.
HiveSqlParserListener.prototype.exitException_block_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#null_stmt.
HiveSqlParserListener.prototype.enterNull_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#null_stmt.
HiveSqlParserListener.prototype.exitNull_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_stmt.
HiveSqlParserListener.prototype.enterExpr_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_stmt.
HiveSqlParserListener.prototype.exitExpr_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#assignment_stmt.
HiveSqlParserListener.prototype.enterAssignment_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#assignment_stmt.
HiveSqlParserListener.prototype.exitAssignment_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#assignment_stmt_item.
HiveSqlParserListener.prototype.enterAssignment_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#assignment_stmt_item.
HiveSqlParserListener.prototype.exitAssignment_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#assignment_stmt_single_item.
HiveSqlParserListener.prototype.enterAssignment_stmt_single_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#assignment_stmt_single_item.
HiveSqlParserListener.prototype.exitAssignment_stmt_single_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#assignment_stmt_multiple_item.
HiveSqlParserListener.prototype.enterAssignment_stmt_multiple_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#assignment_stmt_multiple_item.
HiveSqlParserListener.prototype.exitAssignment_stmt_multiple_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#assignment_stmt_select_item.
HiveSqlParserListener.prototype.enterAssignment_stmt_select_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#assignment_stmt_select_item.
HiveSqlParserListener.prototype.exitAssignment_stmt_select_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#allocate_cursor_stmt.
HiveSqlParserListener.prototype.enterAllocate_cursor_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#allocate_cursor_stmt.
HiveSqlParserListener.prototype.exitAllocate_cursor_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#associate_locator_stmt.
HiveSqlParserListener.prototype.enterAssociate_locator_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#associate_locator_stmt.
HiveSqlParserListener.prototype.exitAssociate_locator_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#begin_transaction_stmt.
HiveSqlParserListener.prototype.enterBegin_transaction_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#begin_transaction_stmt.
HiveSqlParserListener.prototype.exitBegin_transaction_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#break_stmt.
HiveSqlParserListener.prototype.enterBreak_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#break_stmt.
HiveSqlParserListener.prototype.exitBreak_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#call_stmt.
HiveSqlParserListener.prototype.enterCall_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#call_stmt.
HiveSqlParserListener.prototype.exitCall_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#declare_stmt.
HiveSqlParserListener.prototype.enterDeclare_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#declare_stmt.
HiveSqlParserListener.prototype.exitDeclare_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#declare_block.
HiveSqlParserListener.prototype.enterDeclare_block = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#declare_block.
HiveSqlParserListener.prototype.exitDeclare_block = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#declare_block_inplace.
HiveSqlParserListener.prototype.enterDeclare_block_inplace = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#declare_block_inplace.
HiveSqlParserListener.prototype.exitDeclare_block_inplace = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#declare_stmt_item.
HiveSqlParserListener.prototype.enterDeclare_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#declare_stmt_item.
HiveSqlParserListener.prototype.exitDeclare_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#declare_var_item.
HiveSqlParserListener.prototype.enterDeclare_var_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#declare_var_item.
HiveSqlParserListener.prototype.exitDeclare_var_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#declare_condition_item.
HiveSqlParserListener.prototype.enterDeclare_condition_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#declare_condition_item.
HiveSqlParserListener.prototype.exitDeclare_condition_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#declare_cursor_item.
HiveSqlParserListener.prototype.enterDeclare_cursor_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#declare_cursor_item.
HiveSqlParserListener.prototype.exitDeclare_cursor_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#cursor_with_return.
HiveSqlParserListener.prototype.enterCursor_with_return = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#cursor_with_return.
HiveSqlParserListener.prototype.exitCursor_with_return = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#cursor_without_return.
HiveSqlParserListener.prototype.enterCursor_without_return = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#cursor_without_return.
HiveSqlParserListener.prototype.exitCursor_without_return = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#declare_handler_item.
HiveSqlParserListener.prototype.enterDeclare_handler_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#declare_handler_item.
HiveSqlParserListener.prototype.exitDeclare_handler_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#declare_temporary_table_item.
HiveSqlParserListener.prototype.enterDeclare_temporary_table_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#declare_temporary_table_item.
HiveSqlParserListener.prototype.exitDeclare_temporary_table_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_stmt.
HiveSqlParserListener.prototype.enterCreate_table_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_stmt.
HiveSqlParserListener.prototype.exitCreate_table_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_local_temp_table_stmt.
HiveSqlParserListener.prototype.enterCreate_local_temp_table_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_local_temp_table_stmt.
HiveSqlParserListener.prototype.exitCreate_local_temp_table_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_definition.
HiveSqlParserListener.prototype.enterCreate_table_definition = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_definition.
HiveSqlParserListener.prototype.exitCreate_table_definition = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_columns.
HiveSqlParserListener.prototype.enterCreate_table_columns = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_columns.
HiveSqlParserListener.prototype.exitCreate_table_columns = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_columns_item.
HiveSqlParserListener.prototype.enterCreate_table_columns_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_columns_item.
HiveSqlParserListener.prototype.exitCreate_table_columns_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#column_name.
HiveSqlParserListener.prototype.enterColumn_name = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#column_name.
HiveSqlParserListener.prototype.exitColumn_name = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_column_inline_cons.
HiveSqlParserListener.prototype.enterCreate_table_column_inline_cons = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_column_inline_cons.
HiveSqlParserListener.prototype.exitCreate_table_column_inline_cons = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_column_cons.
HiveSqlParserListener.prototype.enterCreate_table_column_cons = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_column_cons.
HiveSqlParserListener.prototype.exitCreate_table_column_cons = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_fk_action.
HiveSqlParserListener.prototype.enterCreate_table_fk_action = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_fk_action.
HiveSqlParserListener.prototype.exitCreate_table_fk_action = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_preoptions.
HiveSqlParserListener.prototype.enterCreate_table_preoptions = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_preoptions.
HiveSqlParserListener.prototype.exitCreate_table_preoptions = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_preoptions_item.
HiveSqlParserListener.prototype.enterCreate_table_preoptions_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_preoptions_item.
HiveSqlParserListener.prototype.exitCreate_table_preoptions_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_preoptions_td_item.
HiveSqlParserListener.prototype.enterCreate_table_preoptions_td_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_preoptions_td_item.
HiveSqlParserListener.prototype.exitCreate_table_preoptions_td_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_options.
HiveSqlParserListener.prototype.enterCreate_table_options = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_options.
HiveSqlParserListener.prototype.exitCreate_table_options = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_options_item.
HiveSqlParserListener.prototype.enterCreate_table_options_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_options_item.
HiveSqlParserListener.prototype.exitCreate_table_options_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_options_ora_item.
HiveSqlParserListener.prototype.enterCreate_table_options_ora_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_options_ora_item.
HiveSqlParserListener.prototype.exitCreate_table_options_ora_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_options_db2_item.
HiveSqlParserListener.prototype.enterCreate_table_options_db2_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_options_db2_item.
HiveSqlParserListener.prototype.exitCreate_table_options_db2_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_options_td_item.
HiveSqlParserListener.prototype.enterCreate_table_options_td_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_options_td_item.
HiveSqlParserListener.prototype.exitCreate_table_options_td_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_options_hive_item.
HiveSqlParserListener.prototype.enterCreate_table_options_hive_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_options_hive_item.
HiveSqlParserListener.prototype.exitCreate_table_options_hive_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_hive_row_format.
HiveSqlParserListener.prototype.enterCreate_table_hive_row_format = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_hive_row_format.
HiveSqlParserListener.prototype.exitCreate_table_hive_row_format = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_hive_row_format_fields.
HiveSqlParserListener.prototype.enterCreate_table_hive_row_format_fields = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_hive_row_format_fields.
HiveSqlParserListener.prototype.exitCreate_table_hive_row_format_fields = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_options_mssql_item.
HiveSqlParserListener.prototype.enterCreate_table_options_mssql_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_options_mssql_item.
HiveSqlParserListener.prototype.exitCreate_table_options_mssql_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_table_options_mysql_item.
HiveSqlParserListener.prototype.enterCreate_table_options_mysql_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_table_options_mysql_item.
HiveSqlParserListener.prototype.exitCreate_table_options_mysql_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#alter_table_stmt.
HiveSqlParserListener.prototype.enterAlter_table_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#alter_table_stmt.
HiveSqlParserListener.prototype.exitAlter_table_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#alter_table_item.
HiveSqlParserListener.prototype.enterAlter_table_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#alter_table_item.
HiveSqlParserListener.prototype.exitAlter_table_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#alter_table_add_constraint.
HiveSqlParserListener.prototype.enterAlter_table_add_constraint = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#alter_table_add_constraint.
HiveSqlParserListener.prototype.exitAlter_table_add_constraint = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#alter_table_add_constraint_item.
HiveSqlParserListener.prototype.enterAlter_table_add_constraint_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#alter_table_add_constraint_item.
HiveSqlParserListener.prototype.exitAlter_table_add_constraint_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#dtype.
HiveSqlParserListener.prototype.enterDtype = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#dtype.
HiveSqlParserListener.prototype.exitDtype = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#dtype_len.
HiveSqlParserListener.prototype.enterDtype_len = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#dtype_len.
HiveSqlParserListener.prototype.exitDtype_len = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#dtype_attr.
HiveSqlParserListener.prototype.enterDtype_attr = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#dtype_attr.
HiveSqlParserListener.prototype.exitDtype_attr = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#dtype_default.
HiveSqlParserListener.prototype.enterDtype_default = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#dtype_default.
HiveSqlParserListener.prototype.exitDtype_default = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_database_stmt.
HiveSqlParserListener.prototype.enterCreate_database_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_database_stmt.
HiveSqlParserListener.prototype.exitCreate_database_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_database_option.
HiveSqlParserListener.prototype.enterCreate_database_option = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_database_option.
HiveSqlParserListener.prototype.exitCreate_database_option = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_function_stmt.
HiveSqlParserListener.prototype.enterCreate_function_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_function_stmt.
HiveSqlParserListener.prototype.exitCreate_function_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_function_return.
HiveSqlParserListener.prototype.enterCreate_function_return = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_function_return.
HiveSqlParserListener.prototype.exitCreate_function_return = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_package_stmt.
HiveSqlParserListener.prototype.enterCreate_package_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_package_stmt.
HiveSqlParserListener.prototype.exitCreate_package_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#package_spec.
HiveSqlParserListener.prototype.enterPackage_spec = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#package_spec.
HiveSqlParserListener.prototype.exitPackage_spec = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#package_spec_item.
HiveSqlParserListener.prototype.enterPackage_spec_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#package_spec_item.
HiveSqlParserListener.prototype.exitPackage_spec_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_package_body_stmt.
HiveSqlParserListener.prototype.enterCreate_package_body_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_package_body_stmt.
HiveSqlParserListener.prototype.exitCreate_package_body_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#package_body.
HiveSqlParserListener.prototype.enterPackage_body = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#package_body.
HiveSqlParserListener.prototype.exitPackage_body = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#package_body_item.
HiveSqlParserListener.prototype.enterPackage_body_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#package_body_item.
HiveSqlParserListener.prototype.exitPackage_body_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_procedure_stmt.
HiveSqlParserListener.prototype.enterCreate_procedure_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_procedure_stmt.
HiveSqlParserListener.prototype.exitCreate_procedure_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_routine_params.
HiveSqlParserListener.prototype.enterCreate_routine_params = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_routine_params.
HiveSqlParserListener.prototype.exitCreate_routine_params = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_routine_param_item.
HiveSqlParserListener.prototype.enterCreate_routine_param_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_routine_param_item.
HiveSqlParserListener.prototype.exitCreate_routine_param_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_routine_options.
HiveSqlParserListener.prototype.enterCreate_routine_options = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_routine_options.
HiveSqlParserListener.prototype.exitCreate_routine_options = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_routine_option.
HiveSqlParserListener.prototype.enterCreate_routine_option = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_routine_option.
HiveSqlParserListener.prototype.exitCreate_routine_option = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#drop_stmt.
HiveSqlParserListener.prototype.enterDrop_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#drop_stmt.
HiveSqlParserListener.prototype.exitDrop_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#end_transaction_stmt.
HiveSqlParserListener.prototype.enterEnd_transaction_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#end_transaction_stmt.
HiveSqlParserListener.prototype.exitEnd_transaction_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#exec_stmt.
HiveSqlParserListener.prototype.enterExec_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#exec_stmt.
HiveSqlParserListener.prototype.exitExec_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#if_stmt.
HiveSqlParserListener.prototype.enterIf_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#if_stmt.
HiveSqlParserListener.prototype.exitIf_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#if_plsql_stmt.
HiveSqlParserListener.prototype.enterIf_plsql_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#if_plsql_stmt.
HiveSqlParserListener.prototype.exitIf_plsql_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#if_tsql_stmt.
HiveSqlParserListener.prototype.enterIf_tsql_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#if_tsql_stmt.
HiveSqlParserListener.prototype.exitIf_tsql_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#if_bteq_stmt.
HiveSqlParserListener.prototype.enterIf_bteq_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#if_bteq_stmt.
HiveSqlParserListener.prototype.exitIf_bteq_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#elseif_block.
HiveSqlParserListener.prototype.enterElseif_block = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#elseif_block.
HiveSqlParserListener.prototype.exitElseif_block = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#else_block.
HiveSqlParserListener.prototype.enterElse_block = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#else_block.
HiveSqlParserListener.prototype.exitElse_block = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#include_stmt.
HiveSqlParserListener.prototype.enterInclude_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#include_stmt.
HiveSqlParserListener.prototype.exitInclude_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#insert_stmt.
HiveSqlParserListener.prototype.enterInsert_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#insert_stmt.
HiveSqlParserListener.prototype.exitInsert_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#insert_stmt_cols.
HiveSqlParserListener.prototype.enterInsert_stmt_cols = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#insert_stmt_cols.
HiveSqlParserListener.prototype.exitInsert_stmt_cols = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#insert_stmt_rows.
HiveSqlParserListener.prototype.enterInsert_stmt_rows = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#insert_stmt_rows.
HiveSqlParserListener.prototype.exitInsert_stmt_rows = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#insert_stmt_row.
HiveSqlParserListener.prototype.enterInsert_stmt_row = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#insert_stmt_row.
HiveSqlParserListener.prototype.exitInsert_stmt_row = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#insert_directory_stmt.
HiveSqlParserListener.prototype.enterInsert_directory_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#insert_directory_stmt.
HiveSqlParserListener.prototype.exitInsert_directory_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#exit_stmt.
HiveSqlParserListener.prototype.enterExit_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#exit_stmt.
HiveSqlParserListener.prototype.exitExit_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#get_diag_stmt.
HiveSqlParserListener.prototype.enterGet_diag_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#get_diag_stmt.
HiveSqlParserListener.prototype.exitGet_diag_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#get_diag_stmt_item.
HiveSqlParserListener.prototype.enterGet_diag_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#get_diag_stmt_item.
HiveSqlParserListener.prototype.exitGet_diag_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#get_diag_stmt_exception_item.
HiveSqlParserListener.prototype.enterGet_diag_stmt_exception_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#get_diag_stmt_exception_item.
HiveSqlParserListener.prototype.exitGet_diag_stmt_exception_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#get_diag_stmt_rowcount_item.
HiveSqlParserListener.prototype.enterGet_diag_stmt_rowcount_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#get_diag_stmt_rowcount_item.
HiveSqlParserListener.prototype.exitGet_diag_stmt_rowcount_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#grant_stmt.
HiveSqlParserListener.prototype.enterGrant_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#grant_stmt.
HiveSqlParserListener.prototype.exitGrant_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#grant_stmt_item.
HiveSqlParserListener.prototype.enterGrant_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#grant_stmt_item.
HiveSqlParserListener.prototype.exitGrant_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#leave_stmt.
HiveSqlParserListener.prototype.enterLeave_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#leave_stmt.
HiveSqlParserListener.prototype.exitLeave_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#map_object_stmt.
HiveSqlParserListener.prototype.enterMap_object_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#map_object_stmt.
HiveSqlParserListener.prototype.exitMap_object_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#open_stmt.
HiveSqlParserListener.prototype.enterOpen_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#open_stmt.
HiveSqlParserListener.prototype.exitOpen_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#fetch_stmt.
HiveSqlParserListener.prototype.enterFetch_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#fetch_stmt.
HiveSqlParserListener.prototype.exitFetch_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#collect_stats_stmt.
HiveSqlParserListener.prototype.enterCollect_stats_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#collect_stats_stmt.
HiveSqlParserListener.prototype.exitCollect_stats_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#collect_stats_clause.
HiveSqlParserListener.prototype.enterCollect_stats_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#collect_stats_clause.
HiveSqlParserListener.prototype.exitCollect_stats_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#close_stmt.
HiveSqlParserListener.prototype.enterClose_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#close_stmt.
HiveSqlParserListener.prototype.exitClose_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#cmp_stmt.
HiveSqlParserListener.prototype.enterCmp_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#cmp_stmt.
HiveSqlParserListener.prototype.exitCmp_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#cmp_source.
HiveSqlParserListener.prototype.enterCmp_source = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#cmp_source.
HiveSqlParserListener.prototype.exitCmp_source = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#copy_from_local_stmt.
HiveSqlParserListener.prototype.enterCopy_from_local_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#copy_from_local_stmt.
HiveSqlParserListener.prototype.exitCopy_from_local_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#copy_stmt.
HiveSqlParserListener.prototype.enterCopy_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#copy_stmt.
HiveSqlParserListener.prototype.exitCopy_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#copy_source.
HiveSqlParserListener.prototype.enterCopy_source = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#copy_source.
HiveSqlParserListener.prototype.exitCopy_source = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#copy_target.
HiveSqlParserListener.prototype.enterCopy_target = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#copy_target.
HiveSqlParserListener.prototype.exitCopy_target = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#copy_option.
HiveSqlParserListener.prototype.enterCopy_option = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#copy_option.
HiveSqlParserListener.prototype.exitCopy_option = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#copy_file_option.
HiveSqlParserListener.prototype.enterCopy_file_option = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#copy_file_option.
HiveSqlParserListener.prototype.exitCopy_file_option = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#commit_stmt.
HiveSqlParserListener.prototype.enterCommit_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#commit_stmt.
HiveSqlParserListener.prototype.exitCommit_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_index_stmt.
HiveSqlParserListener.prototype.enterCreate_index_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_index_stmt.
HiveSqlParserListener.prototype.exitCreate_index_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#create_index_col.
HiveSqlParserListener.prototype.enterCreate_index_col = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#create_index_col.
HiveSqlParserListener.prototype.exitCreate_index_col = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#index_storage_clause.
HiveSqlParserListener.prototype.enterIndex_storage_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#index_storage_clause.
HiveSqlParserListener.prototype.exitIndex_storage_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#index_mssql_storage_clause.
HiveSqlParserListener.prototype.enterIndex_mssql_storage_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#index_mssql_storage_clause.
HiveSqlParserListener.prototype.exitIndex_mssql_storage_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#print_stmt.
HiveSqlParserListener.prototype.enterPrint_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#print_stmt.
HiveSqlParserListener.prototype.exitPrint_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#quit_stmt.
HiveSqlParserListener.prototype.enterQuit_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#quit_stmt.
HiveSqlParserListener.prototype.exitQuit_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#raise_stmt.
HiveSqlParserListener.prototype.enterRaise_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#raise_stmt.
HiveSqlParserListener.prototype.exitRaise_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#resignal_stmt.
HiveSqlParserListener.prototype.enterResignal_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#resignal_stmt.
HiveSqlParserListener.prototype.exitResignal_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#return_stmt.
HiveSqlParserListener.prototype.enterReturn_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#return_stmt.
HiveSqlParserListener.prototype.exitReturn_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#rollback_stmt.
HiveSqlParserListener.prototype.enterRollback_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#rollback_stmt.
HiveSqlParserListener.prototype.exitRollback_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#set_session_option.
HiveSqlParserListener.prototype.enterSet_session_option = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#set_session_option.
HiveSqlParserListener.prototype.exitSet_session_option = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#set_current_schema_option.
HiveSqlParserListener.prototype.enterSet_current_schema_option = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#set_current_schema_option.
HiveSqlParserListener.prototype.exitSet_current_schema_option = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#set_mssql_session_option.
HiveSqlParserListener.prototype.enterSet_mssql_session_option = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#set_mssql_session_option.
HiveSqlParserListener.prototype.exitSet_mssql_session_option = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#set_teradata_session_option.
HiveSqlParserListener.prototype.enterSet_teradata_session_option = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#set_teradata_session_option.
HiveSqlParserListener.prototype.exitSet_teradata_session_option = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#signal_stmt.
HiveSqlParserListener.prototype.enterSignal_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#signal_stmt.
HiveSqlParserListener.prototype.exitSignal_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#summary_stmt.
HiveSqlParserListener.prototype.enterSummary_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#summary_stmt.
HiveSqlParserListener.prototype.exitSummary_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#truncate_stmt.
HiveSqlParserListener.prototype.enterTruncate_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#truncate_stmt.
HiveSqlParserListener.prototype.exitTruncate_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#use_stmt.
HiveSqlParserListener.prototype.enterUse_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#use_stmt.
HiveSqlParserListener.prototype.exitUse_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#values_into_stmt.
HiveSqlParserListener.prototype.enterValues_into_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#values_into_stmt.
HiveSqlParserListener.prototype.exitValues_into_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#while_stmt.
HiveSqlParserListener.prototype.enterWhile_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#while_stmt.
HiveSqlParserListener.prototype.exitWhile_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#for_cursor_stmt.
HiveSqlParserListener.prototype.enterFor_cursor_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#for_cursor_stmt.
HiveSqlParserListener.prototype.exitFor_cursor_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#for_range_stmt.
HiveSqlParserListener.prototype.enterFor_range_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#for_range_stmt.
HiveSqlParserListener.prototype.exitFor_range_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#label.
HiveSqlParserListener.prototype.enterLabel = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#label.
HiveSqlParserListener.prototype.exitLabel = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#using_clause.
HiveSqlParserListener.prototype.enterUsing_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#using_clause.
HiveSqlParserListener.prototype.exitUsing_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#select_stmt.
HiveSqlParserListener.prototype.enterSelect_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#select_stmt.
HiveSqlParserListener.prototype.exitSelect_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#cte_select_stmt.
HiveSqlParserListener.prototype.enterCte_select_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#cte_select_stmt.
HiveSqlParserListener.prototype.exitCte_select_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#cte_select_stmt_item.
HiveSqlParserListener.prototype.enterCte_select_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#cte_select_stmt_item.
HiveSqlParserListener.prototype.exitCte_select_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#cte_select_cols.
HiveSqlParserListener.prototype.enterCte_select_cols = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#cte_select_cols.
HiveSqlParserListener.prototype.exitCte_select_cols = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#fullselect_stmt.
HiveSqlParserListener.prototype.enterFullselect_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#fullselect_stmt.
HiveSqlParserListener.prototype.exitFullselect_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#fullselect_stmt_item.
HiveSqlParserListener.prototype.enterFullselect_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#fullselect_stmt_item.
HiveSqlParserListener.prototype.exitFullselect_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#fullselect_set_clause.
HiveSqlParserListener.prototype.enterFullselect_set_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#fullselect_set_clause.
HiveSqlParserListener.prototype.exitFullselect_set_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#subselect_stmt.
HiveSqlParserListener.prototype.enterSubselect_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#subselect_stmt.
HiveSqlParserListener.prototype.exitSubselect_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#select_list.
HiveSqlParserListener.prototype.enterSelect_list = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#select_list.
HiveSqlParserListener.prototype.exitSelect_list = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#select_list_set.
HiveSqlParserListener.prototype.enterSelect_list_set = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#select_list_set.
HiveSqlParserListener.prototype.exitSelect_list_set = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#select_list_limit.
HiveSqlParserListener.prototype.enterSelect_list_limit = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#select_list_limit.
HiveSqlParserListener.prototype.exitSelect_list_limit = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#select_list_item.
HiveSqlParserListener.prototype.enterSelect_list_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#select_list_item.
HiveSqlParserListener.prototype.exitSelect_list_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#select_list_alias.
HiveSqlParserListener.prototype.enterSelect_list_alias = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#select_list_alias.
HiveSqlParserListener.prototype.exitSelect_list_alias = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#select_list_asterisk.
HiveSqlParserListener.prototype.enterSelect_list_asterisk = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#select_list_asterisk.
HiveSqlParserListener.prototype.exitSelect_list_asterisk = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#into_clause.
HiveSqlParserListener.prototype.enterInto_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#into_clause.
HiveSqlParserListener.prototype.exitInto_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#from_clause.
HiveSqlParserListener.prototype.enterFrom_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#from_clause.
HiveSqlParserListener.prototype.exitFrom_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#from_table_clause.
HiveSqlParserListener.prototype.enterFrom_table_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#from_table_clause.
HiveSqlParserListener.prototype.exitFrom_table_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#from_table_name_clause.
HiveSqlParserListener.prototype.enterFrom_table_name_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#from_table_name_clause.
HiveSqlParserListener.prototype.exitFrom_table_name_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#from_subselect_clause.
HiveSqlParserListener.prototype.enterFrom_subselect_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#from_subselect_clause.
HiveSqlParserListener.prototype.exitFrom_subselect_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#from_join_clause.
HiveSqlParserListener.prototype.enterFrom_join_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#from_join_clause.
HiveSqlParserListener.prototype.exitFrom_join_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#from_join_type_clause.
HiveSqlParserListener.prototype.enterFrom_join_type_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#from_join_type_clause.
HiveSqlParserListener.prototype.exitFrom_join_type_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#from_table_values_clause.
HiveSqlParserListener.prototype.enterFrom_table_values_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#from_table_values_clause.
HiveSqlParserListener.prototype.exitFrom_table_values_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#from_table_values_row.
HiveSqlParserListener.prototype.enterFrom_table_values_row = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#from_table_values_row.
HiveSqlParserListener.prototype.exitFrom_table_values_row = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#from_alias_clause.
HiveSqlParserListener.prototype.enterFrom_alias_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#from_alias_clause.
HiveSqlParserListener.prototype.exitFrom_alias_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#table_name.
HiveSqlParserListener.prototype.enterTable_name = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#table_name.
HiveSqlParserListener.prototype.exitTable_name = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#where_clause.
HiveSqlParserListener.prototype.enterWhere_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#where_clause.
HiveSqlParserListener.prototype.exitWhere_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#group_by_clause.
HiveSqlParserListener.prototype.enterGroup_by_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#group_by_clause.
HiveSqlParserListener.prototype.exitGroup_by_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#having_clause.
HiveSqlParserListener.prototype.enterHaving_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#having_clause.
HiveSqlParserListener.prototype.exitHaving_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#qualify_clause.
HiveSqlParserListener.prototype.enterQualify_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#qualify_clause.
HiveSqlParserListener.prototype.exitQualify_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#order_by_clause.
HiveSqlParserListener.prototype.enterOrder_by_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#order_by_clause.
HiveSqlParserListener.prototype.exitOrder_by_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#select_options.
HiveSqlParserListener.prototype.enterSelect_options = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#select_options.
HiveSqlParserListener.prototype.exitSelect_options = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#select_options_item.
HiveSqlParserListener.prototype.enterSelect_options_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#select_options_item.
HiveSqlParserListener.prototype.exitSelect_options_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#update_stmt.
HiveSqlParserListener.prototype.enterUpdate_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#update_stmt.
HiveSqlParserListener.prototype.exitUpdate_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#update_assignment.
HiveSqlParserListener.prototype.enterUpdate_assignment = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#update_assignment.
HiveSqlParserListener.prototype.exitUpdate_assignment = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#update_table.
HiveSqlParserListener.prototype.enterUpdate_table = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#update_table.
HiveSqlParserListener.prototype.exitUpdate_table = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#update_upsert.
HiveSqlParserListener.prototype.enterUpdate_upsert = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#update_upsert.
HiveSqlParserListener.prototype.exitUpdate_upsert = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#merge_stmt.
HiveSqlParserListener.prototype.enterMerge_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#merge_stmt.
HiveSqlParserListener.prototype.exitMerge_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#merge_table.
HiveSqlParserListener.prototype.enterMerge_table = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#merge_table.
HiveSqlParserListener.prototype.exitMerge_table = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#merge_condition.
HiveSqlParserListener.prototype.enterMerge_condition = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#merge_condition.
HiveSqlParserListener.prototype.exitMerge_condition = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#merge_action.
HiveSqlParserListener.prototype.enterMerge_action = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#merge_action.
HiveSqlParserListener.prototype.exitMerge_action = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#delete_stmt.
HiveSqlParserListener.prototype.enterDelete_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#delete_stmt.
HiveSqlParserListener.prototype.exitDelete_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#delete_alias.
HiveSqlParserListener.prototype.enterDelete_alias = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#delete_alias.
HiveSqlParserListener.prototype.exitDelete_alias = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#describe_stmt.
HiveSqlParserListener.prototype.enterDescribe_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#describe_stmt.
HiveSqlParserListener.prototype.exitDescribe_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#bool_expr.
HiveSqlParserListener.prototype.enterBool_expr = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#bool_expr.
HiveSqlParserListener.prototype.exitBool_expr = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#bool_expr_atom.
HiveSqlParserListener.prototype.enterBool_expr_atom = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#bool_expr_atom.
HiveSqlParserListener.prototype.exitBool_expr_atom = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#bool_expr_unary.
HiveSqlParserListener.prototype.enterBool_expr_unary = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#bool_expr_unary.
HiveSqlParserListener.prototype.exitBool_expr_unary = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#bool_expr_single_in.
HiveSqlParserListener.prototype.enterBool_expr_single_in = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#bool_expr_single_in.
HiveSqlParserListener.prototype.exitBool_expr_single_in = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#bool_expr_multi_in.
HiveSqlParserListener.prototype.enterBool_expr_multi_in = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#bool_expr_multi_in.
HiveSqlParserListener.prototype.exitBool_expr_multi_in = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#bool_expr_binary.
HiveSqlParserListener.prototype.enterBool_expr_binary = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#bool_expr_binary.
HiveSqlParserListener.prototype.exitBool_expr_binary = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#bool_expr_logical_operator.
HiveSqlParserListener.prototype.enterBool_expr_logical_operator = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#bool_expr_logical_operator.
HiveSqlParserListener.prototype.exitBool_expr_logical_operator = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#bool_expr_binary_operator.
HiveSqlParserListener.prototype.enterBool_expr_binary_operator = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#bool_expr_binary_operator.
HiveSqlParserListener.prototype.exitBool_expr_binary_operator = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr.
HiveSqlParserListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr.
HiveSqlParserListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_atom.
HiveSqlParserListener.prototype.enterExpr_atom = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_atom.
HiveSqlParserListener.prototype.exitExpr_atom = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_interval.
HiveSqlParserListener.prototype.enterExpr_interval = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_interval.
HiveSqlParserListener.prototype.exitExpr_interval = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#interval_item.
HiveSqlParserListener.prototype.enterInterval_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#interval_item.
HiveSqlParserListener.prototype.exitInterval_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_concat.
HiveSqlParserListener.prototype.enterExpr_concat = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_concat.
HiveSqlParserListener.prototype.exitExpr_concat = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_concat_item.
HiveSqlParserListener.prototype.enterExpr_concat_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_concat_item.
HiveSqlParserListener.prototype.exitExpr_concat_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_case.
HiveSqlParserListener.prototype.enterExpr_case = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_case.
HiveSqlParserListener.prototype.exitExpr_case = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_case_simple.
HiveSqlParserListener.prototype.enterExpr_case_simple = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_case_simple.
HiveSqlParserListener.prototype.exitExpr_case_simple = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_case_searched.
HiveSqlParserListener.prototype.enterExpr_case_searched = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_case_searched.
HiveSqlParserListener.prototype.exitExpr_case_searched = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_cursor_attribute.
HiveSqlParserListener.prototype.enterExpr_cursor_attribute = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_cursor_attribute.
HiveSqlParserListener.prototype.exitExpr_cursor_attribute = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_agg_window_func.
HiveSqlParserListener.prototype.enterExpr_agg_window_func = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_agg_window_func.
HiveSqlParserListener.prototype.exitExpr_agg_window_func = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_func_all_distinct.
HiveSqlParserListener.prototype.enterExpr_func_all_distinct = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_func_all_distinct.
HiveSqlParserListener.prototype.exitExpr_func_all_distinct = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_func_over_clause.
HiveSqlParserListener.prototype.enterExpr_func_over_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_func_over_clause.
HiveSqlParserListener.prototype.exitExpr_func_over_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_func_partition_by_clause.
HiveSqlParserListener.prototype.enterExpr_func_partition_by_clause = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_func_partition_by_clause.
HiveSqlParserListener.prototype.exitExpr_func_partition_by_clause = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_spec_func.
HiveSqlParserListener.prototype.enterExpr_spec_func = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_spec_func.
HiveSqlParserListener.prototype.exitExpr_spec_func = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_func.
HiveSqlParserListener.prototype.enterExpr_func = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_func.
HiveSqlParserListener.prototype.exitExpr_func = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_func_params.
HiveSqlParserListener.prototype.enterExpr_func_params = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_func_params.
HiveSqlParserListener.prototype.exitExpr_func_params = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#func_param.
HiveSqlParserListener.prototype.enterFunc_param = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#func_param.
HiveSqlParserListener.prototype.exitFunc_param = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_select.
HiveSqlParserListener.prototype.enterExpr_select = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_select.
HiveSqlParserListener.prototype.exitExpr_select = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#expr_file.
HiveSqlParserListener.prototype.enterExpr_file = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#expr_file.
HiveSqlParserListener.prototype.exitExpr_file = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#hive.
HiveSqlParserListener.prototype.enterHive = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#hive.
HiveSqlParserListener.prototype.exitHive = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#hive_item.
HiveSqlParserListener.prototype.enterHive_item = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#hive_item.
HiveSqlParserListener.prototype.exitHive_item = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#host.
HiveSqlParserListener.prototype.enterHost = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#host.
HiveSqlParserListener.prototype.exitHost = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#host_cmd.
HiveSqlParserListener.prototype.enterHost_cmd = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#host_cmd.
HiveSqlParserListener.prototype.exitHost_cmd = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#host_stmt.
HiveSqlParserListener.prototype.enterHost_stmt = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#host_stmt.
HiveSqlParserListener.prototype.exitHost_stmt = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#file_name.
HiveSqlParserListener.prototype.enterFile_name = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#file_name.
HiveSqlParserListener.prototype.exitFile_name = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#date_literal.
HiveSqlParserListener.prototype.enterDate_literal = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#date_literal.
HiveSqlParserListener.prototype.exitDate_literal = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#timestamp_literal.
HiveSqlParserListener.prototype.enterTimestamp_literal = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#timestamp_literal.
HiveSqlParserListener.prototype.exitTimestamp_literal = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#ident.
HiveSqlParserListener.prototype.enterIdent = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#ident.
HiveSqlParserListener.prototype.exitIdent = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#single_quotedString.
HiveSqlParserListener.prototype.enterSingle_quotedString = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#single_quotedString.
HiveSqlParserListener.prototype.exitSingle_quotedString = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#double_quotedString.
HiveSqlParserListener.prototype.enterDouble_quotedString = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#double_quotedString.
HiveSqlParserListener.prototype.exitDouble_quotedString = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#int_number.
HiveSqlParserListener.prototype.enterInt_number = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#int_number.
HiveSqlParserListener.prototype.exitInt_number = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#dec_number.
HiveSqlParserListener.prototype.enterDec_number = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#dec_number.
HiveSqlParserListener.prototype.exitDec_number = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#bool_literal.
HiveSqlParserListener.prototype.enterBool_literal = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#bool_literal.
HiveSqlParserListener.prototype.exitBool_literal = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#null_const.
HiveSqlParserListener.prototype.enterNull_const = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#null_const.
HiveSqlParserListener.prototype.exitNull_const = function(ctx) {
};


// Enter a parse tree produced by HiveSqlParser#non_reserved_words.
HiveSqlParserListener.prototype.enterNon_reserved_words = function(ctx) {
};

// Exit a parse tree produced by HiveSqlParser#non_reserved_words.
HiveSqlParserListener.prototype.exitNon_reserved_words = function(ctx) {
};



exports.HiveSqlParserListener = HiveSqlParserListener;