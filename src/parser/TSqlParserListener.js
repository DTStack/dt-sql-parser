// Generated from /Users/ziv/Workspace/dt-sql-parser/src/grammar/tsql/TSqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by TSqlParser.
function TSqlParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

TSqlParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
TSqlParserListener.prototype.constructor = TSqlParserListener;

// Enter a parse tree produced by TSqlParser#tsql_file.
TSqlParserListener.prototype.enterTsql_file = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#tsql_file.
TSqlParserListener.prototype.exitTsql_file = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#batch.
TSqlParserListener.prototype.enterBatch = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#batch.
TSqlParserListener.prototype.exitBatch = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#sql_clauses.
TSqlParserListener.prototype.enterSql_clauses = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#sql_clauses.
TSqlParserListener.prototype.exitSql_clauses = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#sql_clause.
TSqlParserListener.prototype.enterSql_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#sql_clause.
TSqlParserListener.prototype.exitSql_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#dml_clause.
TSqlParserListener.prototype.enterDml_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#dml_clause.
TSqlParserListener.prototype.exitDml_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#ddl_clause.
TSqlParserListener.prototype.enterDdl_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#ddl_clause.
TSqlParserListener.prototype.exitDdl_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#backup_statement.
TSqlParserListener.prototype.enterBackup_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#backup_statement.
TSqlParserListener.prototype.exitBackup_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#cfl_statement.
TSqlParserListener.prototype.enterCfl_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#cfl_statement.
TSqlParserListener.prototype.exitCfl_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#block_statement.
TSqlParserListener.prototype.enterBlock_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#block_statement.
TSqlParserListener.prototype.exitBlock_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#break_statement.
TSqlParserListener.prototype.enterBreak_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#break_statement.
TSqlParserListener.prototype.exitBreak_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#continue_statement.
TSqlParserListener.prototype.enterContinue_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#continue_statement.
TSqlParserListener.prototype.exitContinue_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#goto_statement.
TSqlParserListener.prototype.enterGoto_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#goto_statement.
TSqlParserListener.prototype.exitGoto_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#return_statement.
TSqlParserListener.prototype.enterReturn_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#return_statement.
TSqlParserListener.prototype.exitReturn_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#if_statement.
TSqlParserListener.prototype.enterIf_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#if_statement.
TSqlParserListener.prototype.exitIf_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#throw_statement.
TSqlParserListener.prototype.enterThrow_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#throw_statement.
TSqlParserListener.prototype.exitThrow_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#throw_error_number.
TSqlParserListener.prototype.enterThrow_error_number = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#throw_error_number.
TSqlParserListener.prototype.exitThrow_error_number = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#throw_message.
TSqlParserListener.prototype.enterThrow_message = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#throw_message.
TSqlParserListener.prototype.exitThrow_message = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#throw_state.
TSqlParserListener.prototype.enterThrow_state = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#throw_state.
TSqlParserListener.prototype.exitThrow_state = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#try_catch_statement.
TSqlParserListener.prototype.enterTry_catch_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#try_catch_statement.
TSqlParserListener.prototype.exitTry_catch_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#waitfor_statement.
TSqlParserListener.prototype.enterWaitfor_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#waitfor_statement.
TSqlParserListener.prototype.exitWaitfor_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#while_statement.
TSqlParserListener.prototype.enterWhile_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#while_statement.
TSqlParserListener.prototype.exitWhile_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#print_statement.
TSqlParserListener.prototype.enterPrint_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#print_statement.
TSqlParserListener.prototype.exitPrint_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#raiseerror_statement.
TSqlParserListener.prototype.enterRaiseerror_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#raiseerror_statement.
TSqlParserListener.prototype.exitRaiseerror_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#empty_statement.
TSqlParserListener.prototype.enterEmpty_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#empty_statement.
TSqlParserListener.prototype.exitEmpty_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#another_statement.
TSqlParserListener.prototype.enterAnother_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#another_statement.
TSqlParserListener.prototype.exitAnother_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_application_role.
TSqlParserListener.prototype.enterAlter_application_role = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_application_role.
TSqlParserListener.prototype.exitAlter_application_role = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_application_role.
TSqlParserListener.prototype.enterCreate_application_role = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_application_role.
TSqlParserListener.prototype.exitCreate_application_role = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_aggregate.
TSqlParserListener.prototype.enterDrop_aggregate = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_aggregate.
TSqlParserListener.prototype.exitDrop_aggregate = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_application_role.
TSqlParserListener.prototype.enterDrop_application_role = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_application_role.
TSqlParserListener.prototype.exitDrop_application_role = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_assembly.
TSqlParserListener.prototype.enterAlter_assembly = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_assembly.
TSqlParserListener.prototype.exitAlter_assembly = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_assembly_start.
TSqlParserListener.prototype.enterAlter_assembly_start = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_assembly_start.
TSqlParserListener.prototype.exitAlter_assembly_start = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_assembly_clause.
TSqlParserListener.prototype.enterAlter_assembly_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_assembly_clause.
TSqlParserListener.prototype.exitAlter_assembly_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_assembly_from_clause.
TSqlParserListener.prototype.enterAlter_assembly_from_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_assembly_from_clause.
TSqlParserListener.prototype.exitAlter_assembly_from_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_assembly_from_clause_start.
TSqlParserListener.prototype.enterAlter_assembly_from_clause_start = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_assembly_from_clause_start.
TSqlParserListener.prototype.exitAlter_assembly_from_clause_start = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_assembly_drop_clause.
TSqlParserListener.prototype.enterAlter_assembly_drop_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_assembly_drop_clause.
TSqlParserListener.prototype.exitAlter_assembly_drop_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_assembly_drop_multiple_files.
TSqlParserListener.prototype.enterAlter_assembly_drop_multiple_files = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_assembly_drop_multiple_files.
TSqlParserListener.prototype.exitAlter_assembly_drop_multiple_files = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_assembly_drop.
TSqlParserListener.prototype.enterAlter_assembly_drop = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_assembly_drop.
TSqlParserListener.prototype.exitAlter_assembly_drop = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_assembly_add_clause.
TSqlParserListener.prototype.enterAlter_assembly_add_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_assembly_add_clause.
TSqlParserListener.prototype.exitAlter_assembly_add_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_asssembly_add_clause_start.
TSqlParserListener.prototype.enterAlter_asssembly_add_clause_start = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_asssembly_add_clause_start.
TSqlParserListener.prototype.exitAlter_asssembly_add_clause_start = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_assembly_client_file_clause.
TSqlParserListener.prototype.enterAlter_assembly_client_file_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_assembly_client_file_clause.
TSqlParserListener.prototype.exitAlter_assembly_client_file_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_assembly_file_name.
TSqlParserListener.prototype.enterAlter_assembly_file_name = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_assembly_file_name.
TSqlParserListener.prototype.exitAlter_assembly_file_name = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_assembly_file_bits.
TSqlParserListener.prototype.enterAlter_assembly_file_bits = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_assembly_file_bits.
TSqlParserListener.prototype.exitAlter_assembly_file_bits = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_assembly_as.
TSqlParserListener.prototype.enterAlter_assembly_as = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_assembly_as.
TSqlParserListener.prototype.exitAlter_assembly_as = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_assembly_with_clause.
TSqlParserListener.prototype.enterAlter_assembly_with_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_assembly_with_clause.
TSqlParserListener.prototype.exitAlter_assembly_with_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_assembly_with.
TSqlParserListener.prototype.enterAlter_assembly_with = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_assembly_with.
TSqlParserListener.prototype.exitAlter_assembly_with = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#client_assembly_specifier.
TSqlParserListener.prototype.enterClient_assembly_specifier = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#client_assembly_specifier.
TSqlParserListener.prototype.exitClient_assembly_specifier = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#assembly_option.
TSqlParserListener.prototype.enterAssembly_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#assembly_option.
TSqlParserListener.prototype.exitAssembly_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#network_file_share.
TSqlParserListener.prototype.enterNetwork_file_share = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#network_file_share.
TSqlParserListener.prototype.exitNetwork_file_share = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#network_computer.
TSqlParserListener.prototype.enterNetwork_computer = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#network_computer.
TSqlParserListener.prototype.exitNetwork_computer = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#network_file_start.
TSqlParserListener.prototype.enterNetwork_file_start = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#network_file_start.
TSqlParserListener.prototype.exitNetwork_file_start = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#file_path.
TSqlParserListener.prototype.enterFile_path = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#file_path.
TSqlParserListener.prototype.exitFile_path = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#file_directory_path_separator.
TSqlParserListener.prototype.enterFile_directory_path_separator = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#file_directory_path_separator.
TSqlParserListener.prototype.exitFile_directory_path_separator = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#local_file.
TSqlParserListener.prototype.enterLocal_file = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#local_file.
TSqlParserListener.prototype.exitLocal_file = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#local_drive.
TSqlParserListener.prototype.enterLocal_drive = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#local_drive.
TSqlParserListener.prototype.exitLocal_drive = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#multiple_local_files.
TSqlParserListener.prototype.enterMultiple_local_files = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#multiple_local_files.
TSqlParserListener.prototype.exitMultiple_local_files = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#multiple_local_file_start.
TSqlParserListener.prototype.enterMultiple_local_file_start = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#multiple_local_file_start.
TSqlParserListener.prototype.exitMultiple_local_file_start = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_assembly.
TSqlParserListener.prototype.enterCreate_assembly = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_assembly.
TSqlParserListener.prototype.exitCreate_assembly = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_assembly.
TSqlParserListener.prototype.enterDrop_assembly = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_assembly.
TSqlParserListener.prototype.exitDrop_assembly = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_asymmetric_key.
TSqlParserListener.prototype.enterAlter_asymmetric_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_asymmetric_key.
TSqlParserListener.prototype.exitAlter_asymmetric_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_asymmetric_key_start.
TSqlParserListener.prototype.enterAlter_asymmetric_key_start = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_asymmetric_key_start.
TSqlParserListener.prototype.exitAlter_asymmetric_key_start = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#asymmetric_key_option.
TSqlParserListener.prototype.enterAsymmetric_key_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#asymmetric_key_option.
TSqlParserListener.prototype.exitAsymmetric_key_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#asymmetric_key_option_start.
TSqlParserListener.prototype.enterAsymmetric_key_option_start = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#asymmetric_key_option_start.
TSqlParserListener.prototype.exitAsymmetric_key_option_start = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#asymmetric_key_password_change_option.
TSqlParserListener.prototype.enterAsymmetric_key_password_change_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#asymmetric_key_password_change_option.
TSqlParserListener.prototype.exitAsymmetric_key_password_change_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_asymmetric_key.
TSqlParserListener.prototype.enterCreate_asymmetric_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_asymmetric_key.
TSqlParserListener.prototype.exitCreate_asymmetric_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_asymmetric_key.
TSqlParserListener.prototype.enterDrop_asymmetric_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_asymmetric_key.
TSqlParserListener.prototype.exitDrop_asymmetric_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_authorization.
TSqlParserListener.prototype.enterAlter_authorization = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_authorization.
TSqlParserListener.prototype.exitAlter_authorization = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#authorization_grantee.
TSqlParserListener.prototype.enterAuthorization_grantee = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#authorization_grantee.
TSqlParserListener.prototype.exitAuthorization_grantee = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#entity_to.
TSqlParserListener.prototype.enterEntity_to = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#entity_to.
TSqlParserListener.prototype.exitEntity_to = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#colon_colon.
TSqlParserListener.prototype.enterColon_colon = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#colon_colon.
TSqlParserListener.prototype.exitColon_colon = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_authorization_start.
TSqlParserListener.prototype.enterAlter_authorization_start = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_authorization_start.
TSqlParserListener.prototype.exitAlter_authorization_start = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_authorization_for_sql_database.
TSqlParserListener.prototype.enterAlter_authorization_for_sql_database = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_authorization_for_sql_database.
TSqlParserListener.prototype.exitAlter_authorization_for_sql_database = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_authorization_for_azure_dw.
TSqlParserListener.prototype.enterAlter_authorization_for_azure_dw = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_authorization_for_azure_dw.
TSqlParserListener.prototype.exitAlter_authorization_for_azure_dw = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_authorization_for_parallel_dw.
TSqlParserListener.prototype.enterAlter_authorization_for_parallel_dw = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_authorization_for_parallel_dw.
TSqlParserListener.prototype.exitAlter_authorization_for_parallel_dw = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#class_type.
TSqlParserListener.prototype.enterClass_type = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#class_type.
TSqlParserListener.prototype.exitClass_type = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#class_type_for_sql_database.
TSqlParserListener.prototype.enterClass_type_for_sql_database = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#class_type_for_sql_database.
TSqlParserListener.prototype.exitClass_type_for_sql_database = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#class_type_for_azure_dw.
TSqlParserListener.prototype.enterClass_type_for_azure_dw = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#class_type_for_azure_dw.
TSqlParserListener.prototype.exitClass_type_for_azure_dw = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#class_type_for_parallel_dw.
TSqlParserListener.prototype.enterClass_type_for_parallel_dw = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#class_type_for_parallel_dw.
TSqlParserListener.prototype.exitClass_type_for_parallel_dw = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_availability_group.
TSqlParserListener.prototype.enterDrop_availability_group = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_availability_group.
TSqlParserListener.prototype.exitDrop_availability_group = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_availability_group.
TSqlParserListener.prototype.enterAlter_availability_group = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_availability_group.
TSqlParserListener.prototype.exitAlter_availability_group = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_availability_group_start.
TSqlParserListener.prototype.enterAlter_availability_group_start = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_availability_group_start.
TSqlParserListener.prototype.exitAlter_availability_group_start = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_availability_group_options.
TSqlParserListener.prototype.enterAlter_availability_group_options = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_availability_group_options.
TSqlParserListener.prototype.exitAlter_availability_group_options = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_or_alter_broker_priority.
TSqlParserListener.prototype.enterCreate_or_alter_broker_priority = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_or_alter_broker_priority.
TSqlParserListener.prototype.exitCreate_or_alter_broker_priority = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_broker_priority.
TSqlParserListener.prototype.enterDrop_broker_priority = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_broker_priority.
TSqlParserListener.prototype.exitDrop_broker_priority = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_certificate.
TSqlParserListener.prototype.enterAlter_certificate = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_certificate.
TSqlParserListener.prototype.exitAlter_certificate = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_column_encryption_key.
TSqlParserListener.prototype.enterAlter_column_encryption_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_column_encryption_key.
TSqlParserListener.prototype.exitAlter_column_encryption_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_column_encryption_key.
TSqlParserListener.prototype.enterCreate_column_encryption_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_column_encryption_key.
TSqlParserListener.prototype.exitCreate_column_encryption_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_certificate.
TSqlParserListener.prototype.enterDrop_certificate = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_certificate.
TSqlParserListener.prototype.exitDrop_certificate = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_column_encryption_key.
TSqlParserListener.prototype.enterDrop_column_encryption_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_column_encryption_key.
TSqlParserListener.prototype.exitDrop_column_encryption_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_column_master_key.
TSqlParserListener.prototype.enterDrop_column_master_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_column_master_key.
TSqlParserListener.prototype.exitDrop_column_master_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_contract.
TSqlParserListener.prototype.enterDrop_contract = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_contract.
TSqlParserListener.prototype.exitDrop_contract = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_credential.
TSqlParserListener.prototype.enterDrop_credential = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_credential.
TSqlParserListener.prototype.exitDrop_credential = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_cryptograhic_provider.
TSqlParserListener.prototype.enterDrop_cryptograhic_provider = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_cryptograhic_provider.
TSqlParserListener.prototype.exitDrop_cryptograhic_provider = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_database.
TSqlParserListener.prototype.enterDrop_database = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_database.
TSqlParserListener.prototype.exitDrop_database = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_database_audit_specification.
TSqlParserListener.prototype.enterDrop_database_audit_specification = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_database_audit_specification.
TSqlParserListener.prototype.exitDrop_database_audit_specification = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_database_scoped_credential.
TSqlParserListener.prototype.enterDrop_database_scoped_credential = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_database_scoped_credential.
TSqlParserListener.prototype.exitDrop_database_scoped_credential = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_default.
TSqlParserListener.prototype.enterDrop_default = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_default.
TSqlParserListener.prototype.exitDrop_default = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_endpoint.
TSqlParserListener.prototype.enterDrop_endpoint = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_endpoint.
TSqlParserListener.prototype.exitDrop_endpoint = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_external_data_source.
TSqlParserListener.prototype.enterDrop_external_data_source = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_external_data_source.
TSqlParserListener.prototype.exitDrop_external_data_source = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_external_file_format.
TSqlParserListener.prototype.enterDrop_external_file_format = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_external_file_format.
TSqlParserListener.prototype.exitDrop_external_file_format = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_external_library.
TSqlParserListener.prototype.enterDrop_external_library = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_external_library.
TSqlParserListener.prototype.exitDrop_external_library = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_external_resource_pool.
TSqlParserListener.prototype.enterDrop_external_resource_pool = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_external_resource_pool.
TSqlParserListener.prototype.exitDrop_external_resource_pool = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_external_table.
TSqlParserListener.prototype.enterDrop_external_table = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_external_table.
TSqlParserListener.prototype.exitDrop_external_table = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_event_notifications.
TSqlParserListener.prototype.enterDrop_event_notifications = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_event_notifications.
TSqlParserListener.prototype.exitDrop_event_notifications = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_event_session.
TSqlParserListener.prototype.enterDrop_event_session = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_event_session.
TSqlParserListener.prototype.exitDrop_event_session = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_fulltext_catalog.
TSqlParserListener.prototype.enterDrop_fulltext_catalog = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_fulltext_catalog.
TSqlParserListener.prototype.exitDrop_fulltext_catalog = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_fulltext_index.
TSqlParserListener.prototype.enterDrop_fulltext_index = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_fulltext_index.
TSqlParserListener.prototype.exitDrop_fulltext_index = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_fulltext_stoplist.
TSqlParserListener.prototype.enterDrop_fulltext_stoplist = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_fulltext_stoplist.
TSqlParserListener.prototype.exitDrop_fulltext_stoplist = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_login.
TSqlParserListener.prototype.enterDrop_login = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_login.
TSqlParserListener.prototype.exitDrop_login = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_master_key.
TSqlParserListener.prototype.enterDrop_master_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_master_key.
TSqlParserListener.prototype.exitDrop_master_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_message_type.
TSqlParserListener.prototype.enterDrop_message_type = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_message_type.
TSqlParserListener.prototype.exitDrop_message_type = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_partition_function.
TSqlParserListener.prototype.enterDrop_partition_function = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_partition_function.
TSqlParserListener.prototype.exitDrop_partition_function = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_partition_scheme.
TSqlParserListener.prototype.enterDrop_partition_scheme = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_partition_scheme.
TSqlParserListener.prototype.exitDrop_partition_scheme = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_queue.
TSqlParserListener.prototype.enterDrop_queue = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_queue.
TSqlParserListener.prototype.exitDrop_queue = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_remote_service_binding.
TSqlParserListener.prototype.enterDrop_remote_service_binding = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_remote_service_binding.
TSqlParserListener.prototype.exitDrop_remote_service_binding = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_resource_pool.
TSqlParserListener.prototype.enterDrop_resource_pool = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_resource_pool.
TSqlParserListener.prototype.exitDrop_resource_pool = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_db_role.
TSqlParserListener.prototype.enterDrop_db_role = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_db_role.
TSqlParserListener.prototype.exitDrop_db_role = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_route.
TSqlParserListener.prototype.enterDrop_route = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_route.
TSqlParserListener.prototype.exitDrop_route = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_rule.
TSqlParserListener.prototype.enterDrop_rule = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_rule.
TSqlParserListener.prototype.exitDrop_rule = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_schema.
TSqlParserListener.prototype.enterDrop_schema = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_schema.
TSqlParserListener.prototype.exitDrop_schema = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_search_property_list.
TSqlParserListener.prototype.enterDrop_search_property_list = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_search_property_list.
TSqlParserListener.prototype.exitDrop_search_property_list = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_security_policy.
TSqlParserListener.prototype.enterDrop_security_policy = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_security_policy.
TSqlParserListener.prototype.exitDrop_security_policy = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_sequence.
TSqlParserListener.prototype.enterDrop_sequence = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_sequence.
TSqlParserListener.prototype.exitDrop_sequence = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_server_audit.
TSqlParserListener.prototype.enterDrop_server_audit = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_server_audit.
TSqlParserListener.prototype.exitDrop_server_audit = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_server_audit_specification.
TSqlParserListener.prototype.enterDrop_server_audit_specification = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_server_audit_specification.
TSqlParserListener.prototype.exitDrop_server_audit_specification = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_server_role.
TSqlParserListener.prototype.enterDrop_server_role = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_server_role.
TSqlParserListener.prototype.exitDrop_server_role = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_service.
TSqlParserListener.prototype.enterDrop_service = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_service.
TSqlParserListener.prototype.exitDrop_service = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_signature.
TSqlParserListener.prototype.enterDrop_signature = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_signature.
TSqlParserListener.prototype.exitDrop_signature = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_statistics_name_azure_dw_and_pdw.
TSqlParserListener.prototype.enterDrop_statistics_name_azure_dw_and_pdw = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_statistics_name_azure_dw_and_pdw.
TSqlParserListener.prototype.exitDrop_statistics_name_azure_dw_and_pdw = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_symmetric_key.
TSqlParserListener.prototype.enterDrop_symmetric_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_symmetric_key.
TSqlParserListener.prototype.exitDrop_symmetric_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_synonym.
TSqlParserListener.prototype.enterDrop_synonym = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_synonym.
TSqlParserListener.prototype.exitDrop_synonym = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_user.
TSqlParserListener.prototype.enterDrop_user = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_user.
TSqlParserListener.prototype.exitDrop_user = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_workload_group.
TSqlParserListener.prototype.enterDrop_workload_group = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_workload_group.
TSqlParserListener.prototype.exitDrop_workload_group = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_xml_schema_collection.
TSqlParserListener.prototype.enterDrop_xml_schema_collection = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_xml_schema_collection.
TSqlParserListener.prototype.exitDrop_xml_schema_collection = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#disable_trigger.
TSqlParserListener.prototype.enterDisable_trigger = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#disable_trigger.
TSqlParserListener.prototype.exitDisable_trigger = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#enable_trigger.
TSqlParserListener.prototype.enterEnable_trigger = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#enable_trigger.
TSqlParserListener.prototype.exitEnable_trigger = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#lock_table.
TSqlParserListener.prototype.enterLock_table = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#lock_table.
TSqlParserListener.prototype.exitLock_table = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#truncate_table.
TSqlParserListener.prototype.enterTruncate_table = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#truncate_table.
TSqlParserListener.prototype.exitTruncate_table = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_column_master_key.
TSqlParserListener.prototype.enterCreate_column_master_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_column_master_key.
TSqlParserListener.prototype.exitCreate_column_master_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_credential.
TSqlParserListener.prototype.enterAlter_credential = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_credential.
TSqlParserListener.prototype.exitAlter_credential = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_credential.
TSqlParserListener.prototype.enterCreate_credential = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_credential.
TSqlParserListener.prototype.exitCreate_credential = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_cryptographic_provider.
TSqlParserListener.prototype.enterAlter_cryptographic_provider = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_cryptographic_provider.
TSqlParserListener.prototype.exitAlter_cryptographic_provider = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_cryptographic_provider.
TSqlParserListener.prototype.enterCreate_cryptographic_provider = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_cryptographic_provider.
TSqlParserListener.prototype.exitCreate_cryptographic_provider = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_event_notification.
TSqlParserListener.prototype.enterCreate_event_notification = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_event_notification.
TSqlParserListener.prototype.exitCreate_event_notification = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_or_alter_event_session.
TSqlParserListener.prototype.enterCreate_or_alter_event_session = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_or_alter_event_session.
TSqlParserListener.prototype.exitCreate_or_alter_event_session = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#event_session_predicate_expression.
TSqlParserListener.prototype.enterEvent_session_predicate_expression = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#event_session_predicate_expression.
TSqlParserListener.prototype.exitEvent_session_predicate_expression = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#event_session_predicate_factor.
TSqlParserListener.prototype.enterEvent_session_predicate_factor = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#event_session_predicate_factor.
TSqlParserListener.prototype.exitEvent_session_predicate_factor = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#event_session_predicate_leaf.
TSqlParserListener.prototype.enterEvent_session_predicate_leaf = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#event_session_predicate_leaf.
TSqlParserListener.prototype.exitEvent_session_predicate_leaf = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_external_data_source.
TSqlParserListener.prototype.enterAlter_external_data_source = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_external_data_source.
TSqlParserListener.prototype.exitAlter_external_data_source = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_external_library.
TSqlParserListener.prototype.enterAlter_external_library = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_external_library.
TSqlParserListener.prototype.exitAlter_external_library = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_external_library.
TSqlParserListener.prototype.enterCreate_external_library = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_external_library.
TSqlParserListener.prototype.exitCreate_external_library = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_external_resource_pool.
TSqlParserListener.prototype.enterAlter_external_resource_pool = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_external_resource_pool.
TSqlParserListener.prototype.exitAlter_external_resource_pool = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_external_resource_pool.
TSqlParserListener.prototype.enterCreate_external_resource_pool = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_external_resource_pool.
TSqlParserListener.prototype.exitCreate_external_resource_pool = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_fulltext_catalog.
TSqlParserListener.prototype.enterAlter_fulltext_catalog = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_fulltext_catalog.
TSqlParserListener.prototype.exitAlter_fulltext_catalog = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_fulltext_catalog.
TSqlParserListener.prototype.enterCreate_fulltext_catalog = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_fulltext_catalog.
TSqlParserListener.prototype.exitCreate_fulltext_catalog = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_fulltext_stoplist.
TSqlParserListener.prototype.enterAlter_fulltext_stoplist = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_fulltext_stoplist.
TSqlParserListener.prototype.exitAlter_fulltext_stoplist = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_fulltext_stoplist.
TSqlParserListener.prototype.enterCreate_fulltext_stoplist = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_fulltext_stoplist.
TSqlParserListener.prototype.exitCreate_fulltext_stoplist = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_login_sql_server.
TSqlParserListener.prototype.enterAlter_login_sql_server = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_login_sql_server.
TSqlParserListener.prototype.exitAlter_login_sql_server = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_login_sql_server.
TSqlParserListener.prototype.enterCreate_login_sql_server = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_login_sql_server.
TSqlParserListener.prototype.exitCreate_login_sql_server = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_login_azure_sql.
TSqlParserListener.prototype.enterAlter_login_azure_sql = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_login_azure_sql.
TSqlParserListener.prototype.exitAlter_login_azure_sql = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_login_azure_sql.
TSqlParserListener.prototype.enterCreate_login_azure_sql = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_login_azure_sql.
TSqlParserListener.prototype.exitCreate_login_azure_sql = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_login_azure_sql_dw_and_pdw.
TSqlParserListener.prototype.enterAlter_login_azure_sql_dw_and_pdw = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_login_azure_sql_dw_and_pdw.
TSqlParserListener.prototype.exitAlter_login_azure_sql_dw_and_pdw = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_login_pdw.
TSqlParserListener.prototype.enterCreate_login_pdw = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_login_pdw.
TSqlParserListener.prototype.exitCreate_login_pdw = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_master_key_sql_server.
TSqlParserListener.prototype.enterAlter_master_key_sql_server = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_master_key_sql_server.
TSqlParserListener.prototype.exitAlter_master_key_sql_server = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_master_key_sql_server.
TSqlParserListener.prototype.enterCreate_master_key_sql_server = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_master_key_sql_server.
TSqlParserListener.prototype.exitCreate_master_key_sql_server = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_master_key_azure_sql.
TSqlParserListener.prototype.enterAlter_master_key_azure_sql = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_master_key_azure_sql.
TSqlParserListener.prototype.exitAlter_master_key_azure_sql = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_master_key_azure_sql.
TSqlParserListener.prototype.enterCreate_master_key_azure_sql = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_master_key_azure_sql.
TSqlParserListener.prototype.exitCreate_master_key_azure_sql = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_message_type.
TSqlParserListener.prototype.enterAlter_message_type = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_message_type.
TSqlParserListener.prototype.exitAlter_message_type = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_partition_function.
TSqlParserListener.prototype.enterAlter_partition_function = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_partition_function.
TSqlParserListener.prototype.exitAlter_partition_function = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_partition_scheme.
TSqlParserListener.prototype.enterAlter_partition_scheme = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_partition_scheme.
TSqlParserListener.prototype.exitAlter_partition_scheme = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_remote_service_binding.
TSqlParserListener.prototype.enterAlter_remote_service_binding = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_remote_service_binding.
TSqlParserListener.prototype.exitAlter_remote_service_binding = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_remote_service_binding.
TSqlParserListener.prototype.enterCreate_remote_service_binding = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_remote_service_binding.
TSqlParserListener.prototype.exitCreate_remote_service_binding = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_resource_pool.
TSqlParserListener.prototype.enterCreate_resource_pool = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_resource_pool.
TSqlParserListener.prototype.exitCreate_resource_pool = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_resource_governor.
TSqlParserListener.prototype.enterAlter_resource_governor = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_resource_governor.
TSqlParserListener.prototype.exitAlter_resource_governor = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_db_role.
TSqlParserListener.prototype.enterAlter_db_role = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_db_role.
TSqlParserListener.prototype.exitAlter_db_role = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_db_role.
TSqlParserListener.prototype.enterCreate_db_role = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_db_role.
TSqlParserListener.prototype.exitCreate_db_role = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_route.
TSqlParserListener.prototype.enterCreate_route = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_route.
TSqlParserListener.prototype.exitCreate_route = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_rule.
TSqlParserListener.prototype.enterCreate_rule = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_rule.
TSqlParserListener.prototype.exitCreate_rule = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_schema_sql.
TSqlParserListener.prototype.enterAlter_schema_sql = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_schema_sql.
TSqlParserListener.prototype.exitAlter_schema_sql = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_schema.
TSqlParserListener.prototype.enterCreate_schema = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_schema.
TSqlParserListener.prototype.exitCreate_schema = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_schema_azure_sql_dw_and_pdw.
TSqlParserListener.prototype.enterCreate_schema_azure_sql_dw_and_pdw = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_schema_azure_sql_dw_and_pdw.
TSqlParserListener.prototype.exitCreate_schema_azure_sql_dw_and_pdw = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_schema_azure_sql_dw_and_pdw.
TSqlParserListener.prototype.enterAlter_schema_azure_sql_dw_and_pdw = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_schema_azure_sql_dw_and_pdw.
TSqlParserListener.prototype.exitAlter_schema_azure_sql_dw_and_pdw = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_search_property_list.
TSqlParserListener.prototype.enterCreate_search_property_list = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_search_property_list.
TSqlParserListener.prototype.exitCreate_search_property_list = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_security_policy.
TSqlParserListener.prototype.enterCreate_security_policy = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_security_policy.
TSqlParserListener.prototype.exitCreate_security_policy = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_sequence.
TSqlParserListener.prototype.enterAlter_sequence = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_sequence.
TSqlParserListener.prototype.exitAlter_sequence = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_sequence.
TSqlParserListener.prototype.enterCreate_sequence = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_sequence.
TSqlParserListener.prototype.exitCreate_sequence = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_server_audit.
TSqlParserListener.prototype.enterAlter_server_audit = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_server_audit.
TSqlParserListener.prototype.exitAlter_server_audit = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_server_audit.
TSqlParserListener.prototype.enterCreate_server_audit = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_server_audit.
TSqlParserListener.prototype.exitCreate_server_audit = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_server_audit_specification.
TSqlParserListener.prototype.enterAlter_server_audit_specification = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_server_audit_specification.
TSqlParserListener.prototype.exitAlter_server_audit_specification = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_server_audit_specification.
TSqlParserListener.prototype.enterCreate_server_audit_specification = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_server_audit_specification.
TSqlParserListener.prototype.exitCreate_server_audit_specification = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_server_configuration.
TSqlParserListener.prototype.enterAlter_server_configuration = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_server_configuration.
TSqlParserListener.prototype.exitAlter_server_configuration = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_server_role.
TSqlParserListener.prototype.enterAlter_server_role = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_server_role.
TSqlParserListener.prototype.exitAlter_server_role = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_server_role.
TSqlParserListener.prototype.enterCreate_server_role = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_server_role.
TSqlParserListener.prototype.exitCreate_server_role = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_server_role_pdw.
TSqlParserListener.prototype.enterAlter_server_role_pdw = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_server_role_pdw.
TSqlParserListener.prototype.exitAlter_server_role_pdw = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_service.
TSqlParserListener.prototype.enterAlter_service = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_service.
TSqlParserListener.prototype.exitAlter_service = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_service.
TSqlParserListener.prototype.enterCreate_service = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_service.
TSqlParserListener.prototype.exitCreate_service = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_service_master_key.
TSqlParserListener.prototype.enterAlter_service_master_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_service_master_key.
TSqlParserListener.prototype.exitAlter_service_master_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_symmetric_key.
TSqlParserListener.prototype.enterAlter_symmetric_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_symmetric_key.
TSqlParserListener.prototype.exitAlter_symmetric_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_symmetric_key.
TSqlParserListener.prototype.enterCreate_symmetric_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_symmetric_key.
TSqlParserListener.prototype.exitCreate_symmetric_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_synonym.
TSqlParserListener.prototype.enterCreate_synonym = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_synonym.
TSqlParserListener.prototype.exitCreate_synonym = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_user.
TSqlParserListener.prototype.enterAlter_user = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_user.
TSqlParserListener.prototype.exitAlter_user = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_user.
TSqlParserListener.prototype.enterCreate_user = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_user.
TSqlParserListener.prototype.exitCreate_user = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_user_azure_sql_dw.
TSqlParserListener.prototype.enterCreate_user_azure_sql_dw = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_user_azure_sql_dw.
TSqlParserListener.prototype.exitCreate_user_azure_sql_dw = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_user_azure_sql.
TSqlParserListener.prototype.enterAlter_user_azure_sql = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_user_azure_sql.
TSqlParserListener.prototype.exitAlter_user_azure_sql = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_workload_group.
TSqlParserListener.prototype.enterAlter_workload_group = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_workload_group.
TSqlParserListener.prototype.exitAlter_workload_group = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_workload_group.
TSqlParserListener.prototype.enterCreate_workload_group = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_workload_group.
TSqlParserListener.prototype.exitCreate_workload_group = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_xml_schema_collection.
TSqlParserListener.prototype.enterCreate_xml_schema_collection = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_xml_schema_collection.
TSqlParserListener.prototype.exitCreate_xml_schema_collection = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_queue.
TSqlParserListener.prototype.enterCreate_queue = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_queue.
TSqlParserListener.prototype.exitCreate_queue = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#queue_settings.
TSqlParserListener.prototype.enterQueue_settings = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#queue_settings.
TSqlParserListener.prototype.exitQueue_settings = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_queue.
TSqlParserListener.prototype.enterAlter_queue = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_queue.
TSqlParserListener.prototype.exitAlter_queue = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#queue_action.
TSqlParserListener.prototype.enterQueue_action = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#queue_action.
TSqlParserListener.prototype.exitQueue_action = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#queue_rebuild_options.
TSqlParserListener.prototype.enterQueue_rebuild_options = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#queue_rebuild_options.
TSqlParserListener.prototype.exitQueue_rebuild_options = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_contract.
TSqlParserListener.prototype.enterCreate_contract = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_contract.
TSqlParserListener.prototype.exitCreate_contract = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#conversation_statement.
TSqlParserListener.prototype.enterConversation_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#conversation_statement.
TSqlParserListener.prototype.exitConversation_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#message_statement.
TSqlParserListener.prototype.enterMessage_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#message_statement.
TSqlParserListener.prototype.exitMessage_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#merge_statement.
TSqlParserListener.prototype.enterMerge_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#merge_statement.
TSqlParserListener.prototype.exitMerge_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#merge_matched.
TSqlParserListener.prototype.enterMerge_matched = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#merge_matched.
TSqlParserListener.prototype.exitMerge_matched = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#merge_not_matched.
TSqlParserListener.prototype.enterMerge_not_matched = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#merge_not_matched.
TSqlParserListener.prototype.exitMerge_not_matched = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#delete_statement.
TSqlParserListener.prototype.enterDelete_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#delete_statement.
TSqlParserListener.prototype.exitDelete_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#delete_statement_from.
TSqlParserListener.prototype.enterDelete_statement_from = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#delete_statement_from.
TSqlParserListener.prototype.exitDelete_statement_from = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#insert_statement.
TSqlParserListener.prototype.enterInsert_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#insert_statement.
TSqlParserListener.prototype.exitInsert_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#insert_statement_value.
TSqlParserListener.prototype.enterInsert_statement_value = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#insert_statement_value.
TSqlParserListener.prototype.exitInsert_statement_value = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#receive_statement.
TSqlParserListener.prototype.enterReceive_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#receive_statement.
TSqlParserListener.prototype.exitReceive_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#select_statement.
TSqlParserListener.prototype.enterSelect_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#select_statement.
TSqlParserListener.prototype.exitSelect_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#time.
TSqlParserListener.prototype.enterTime = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#time.
TSqlParserListener.prototype.exitTime = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#update_statement.
TSqlParserListener.prototype.enterUpdate_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#update_statement.
TSqlParserListener.prototype.exitUpdate_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#output_clause.
TSqlParserListener.prototype.enterOutput_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#output_clause.
TSqlParserListener.prototype.exitOutput_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#output_dml_list_elem.
TSqlParserListener.prototype.enterOutput_dml_list_elem = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#output_dml_list_elem.
TSqlParserListener.prototype.exitOutput_dml_list_elem = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#output_column_name.
TSqlParserListener.prototype.enterOutput_column_name = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#output_column_name.
TSqlParserListener.prototype.exitOutput_column_name = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_database.
TSqlParserListener.prototype.enterCreate_database = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_database.
TSqlParserListener.prototype.exitCreate_database = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_index.
TSqlParserListener.prototype.enterCreate_index = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_index.
TSqlParserListener.prototype.exitCreate_index = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_or_alter_procedure.
TSqlParserListener.prototype.enterCreate_or_alter_procedure = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_or_alter_procedure.
TSqlParserListener.prototype.exitCreate_or_alter_procedure = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_or_alter_trigger.
TSqlParserListener.prototype.enterCreate_or_alter_trigger = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_or_alter_trigger.
TSqlParserListener.prototype.exitCreate_or_alter_trigger = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_or_alter_dml_trigger.
TSqlParserListener.prototype.enterCreate_or_alter_dml_trigger = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_or_alter_dml_trigger.
TSqlParserListener.prototype.exitCreate_or_alter_dml_trigger = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#dml_trigger_option.
TSqlParserListener.prototype.enterDml_trigger_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#dml_trigger_option.
TSqlParserListener.prototype.exitDml_trigger_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#dml_trigger_operation.
TSqlParserListener.prototype.enterDml_trigger_operation = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#dml_trigger_operation.
TSqlParserListener.prototype.exitDml_trigger_operation = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_or_alter_ddl_trigger.
TSqlParserListener.prototype.enterCreate_or_alter_ddl_trigger = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_or_alter_ddl_trigger.
TSqlParserListener.prototype.exitCreate_or_alter_ddl_trigger = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#ddl_trigger_operation.
TSqlParserListener.prototype.enterDdl_trigger_operation = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#ddl_trigger_operation.
TSqlParserListener.prototype.exitDdl_trigger_operation = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_or_alter_function.
TSqlParserListener.prototype.enterCreate_or_alter_function = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_or_alter_function.
TSqlParserListener.prototype.exitCreate_or_alter_function = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#func_body_returns_select.
TSqlParserListener.prototype.enterFunc_body_returns_select = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#func_body_returns_select.
TSqlParserListener.prototype.exitFunc_body_returns_select = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#func_body_returns_table.
TSqlParserListener.prototype.enterFunc_body_returns_table = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#func_body_returns_table.
TSqlParserListener.prototype.exitFunc_body_returns_table = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#func_body_returns_scalar.
TSqlParserListener.prototype.enterFunc_body_returns_scalar = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#func_body_returns_scalar.
TSqlParserListener.prototype.exitFunc_body_returns_scalar = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#procedure_param.
TSqlParserListener.prototype.enterProcedure_param = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#procedure_param.
TSqlParserListener.prototype.exitProcedure_param = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#procedure_option.
TSqlParserListener.prototype.enterProcedure_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#procedure_option.
TSqlParserListener.prototype.exitProcedure_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#function_option.
TSqlParserListener.prototype.enterFunction_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#function_option.
TSqlParserListener.prototype.exitFunction_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_statistics.
TSqlParserListener.prototype.enterCreate_statistics = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_statistics.
TSqlParserListener.prototype.exitCreate_statistics = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#update_statistics.
TSqlParserListener.prototype.enterUpdate_statistics = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#update_statistics.
TSqlParserListener.prototype.exitUpdate_statistics = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_table.
TSqlParserListener.prototype.enterCreate_table = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_table.
TSqlParserListener.prototype.exitCreate_table = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#table_options.
TSqlParserListener.prototype.enterTable_options = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#table_options.
TSqlParserListener.prototype.exitTable_options = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_view.
TSqlParserListener.prototype.enterCreate_view = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_view.
TSqlParserListener.prototype.exitCreate_view = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#view_attribute.
TSqlParserListener.prototype.enterView_attribute = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#view_attribute.
TSqlParserListener.prototype.exitView_attribute = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_table.
TSqlParserListener.prototype.enterAlter_table = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_table.
TSqlParserListener.prototype.exitAlter_table = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_database.
TSqlParserListener.prototype.enterAlter_database = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_database.
TSqlParserListener.prototype.exitAlter_database = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#database_optionspec.
TSqlParserListener.prototype.enterDatabase_optionspec = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#database_optionspec.
TSqlParserListener.prototype.exitDatabase_optionspec = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#auto_option.
TSqlParserListener.prototype.enterAuto_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#auto_option.
TSqlParserListener.prototype.exitAuto_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#change_tracking_option.
TSqlParserListener.prototype.enterChange_tracking_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#change_tracking_option.
TSqlParserListener.prototype.exitChange_tracking_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#change_tracking_option_list.
TSqlParserListener.prototype.enterChange_tracking_option_list = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#change_tracking_option_list.
TSqlParserListener.prototype.exitChange_tracking_option_list = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#containment_option.
TSqlParserListener.prototype.enterContainment_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#containment_option.
TSqlParserListener.prototype.exitContainment_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#cursor_option.
TSqlParserListener.prototype.enterCursor_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#cursor_option.
TSqlParserListener.prototype.exitCursor_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#alter_endpoint.
TSqlParserListener.prototype.enterAlter_endpoint = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#alter_endpoint.
TSqlParserListener.prototype.exitAlter_endpoint = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#database_mirroring_option.
TSqlParserListener.prototype.enterDatabase_mirroring_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#database_mirroring_option.
TSqlParserListener.prototype.exitDatabase_mirroring_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#mirroring_set_option.
TSqlParserListener.prototype.enterMirroring_set_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#mirroring_set_option.
TSqlParserListener.prototype.exitMirroring_set_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#mirroring_partner.
TSqlParserListener.prototype.enterMirroring_partner = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#mirroring_partner.
TSqlParserListener.prototype.exitMirroring_partner = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#mirroring_witness.
TSqlParserListener.prototype.enterMirroring_witness = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#mirroring_witness.
TSqlParserListener.prototype.exitMirroring_witness = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#witness_partner_equal.
TSqlParserListener.prototype.enterWitness_partner_equal = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#witness_partner_equal.
TSqlParserListener.prototype.exitWitness_partner_equal = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#partner_option.
TSqlParserListener.prototype.enterPartner_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#partner_option.
TSqlParserListener.prototype.exitPartner_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#witness_option.
TSqlParserListener.prototype.enterWitness_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#witness_option.
TSqlParserListener.prototype.exitWitness_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#witness_server.
TSqlParserListener.prototype.enterWitness_server = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#witness_server.
TSqlParserListener.prototype.exitWitness_server = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#partner_server.
TSqlParserListener.prototype.enterPartner_server = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#partner_server.
TSqlParserListener.prototype.exitPartner_server = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#mirroring_host_port_seperator.
TSqlParserListener.prototype.enterMirroring_host_port_seperator = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#mirroring_host_port_seperator.
TSqlParserListener.prototype.exitMirroring_host_port_seperator = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#partner_server_tcp_prefix.
TSqlParserListener.prototype.enterPartner_server_tcp_prefix = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#partner_server_tcp_prefix.
TSqlParserListener.prototype.exitPartner_server_tcp_prefix = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#port_number.
TSqlParserListener.prototype.enterPort_number = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#port_number.
TSqlParserListener.prototype.exitPort_number = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#host.
TSqlParserListener.prototype.enterHost = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#host.
TSqlParserListener.prototype.exitHost = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#date_correlation_optimization_option.
TSqlParserListener.prototype.enterDate_correlation_optimization_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#date_correlation_optimization_option.
TSqlParserListener.prototype.exitDate_correlation_optimization_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#db_encryption_option.
TSqlParserListener.prototype.enterDb_encryption_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#db_encryption_option.
TSqlParserListener.prototype.exitDb_encryption_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#db_state_option.
TSqlParserListener.prototype.enterDb_state_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#db_state_option.
TSqlParserListener.prototype.exitDb_state_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#db_update_option.
TSqlParserListener.prototype.enterDb_update_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#db_update_option.
TSqlParserListener.prototype.exitDb_update_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#db_user_access_option.
TSqlParserListener.prototype.enterDb_user_access_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#db_user_access_option.
TSqlParserListener.prototype.exitDb_user_access_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#delayed_durability_option.
TSqlParserListener.prototype.enterDelayed_durability_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#delayed_durability_option.
TSqlParserListener.prototype.exitDelayed_durability_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#external_access_option.
TSqlParserListener.prototype.enterExternal_access_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#external_access_option.
TSqlParserListener.prototype.exitExternal_access_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#hadr_options.
TSqlParserListener.prototype.enterHadr_options = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#hadr_options.
TSqlParserListener.prototype.exitHadr_options = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#mixed_page_allocation_option.
TSqlParserListener.prototype.enterMixed_page_allocation_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#mixed_page_allocation_option.
TSqlParserListener.prototype.exitMixed_page_allocation_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#parameterization_option.
TSqlParserListener.prototype.enterParameterization_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#parameterization_option.
TSqlParserListener.prototype.exitParameterization_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#recovery_option.
TSqlParserListener.prototype.enterRecovery_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#recovery_option.
TSqlParserListener.prototype.exitRecovery_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#service_broker_option.
TSqlParserListener.prototype.enterService_broker_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#service_broker_option.
TSqlParserListener.prototype.exitService_broker_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#snapshot_option.
TSqlParserListener.prototype.enterSnapshot_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#snapshot_option.
TSqlParserListener.prototype.exitSnapshot_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#sql_option.
TSqlParserListener.prototype.enterSql_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#sql_option.
TSqlParserListener.prototype.exitSql_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#target_recovery_time_option.
TSqlParserListener.prototype.enterTarget_recovery_time_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#target_recovery_time_option.
TSqlParserListener.prototype.exitTarget_recovery_time_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#termination.
TSqlParserListener.prototype.enterTermination = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#termination.
TSqlParserListener.prototype.exitTermination = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_index.
TSqlParserListener.prototype.enterDrop_index = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_index.
TSqlParserListener.prototype.exitDrop_index = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_relational_or_xml_or_spatial_index.
TSqlParserListener.prototype.enterDrop_relational_or_xml_or_spatial_index = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_relational_or_xml_or_spatial_index.
TSqlParserListener.prototype.exitDrop_relational_or_xml_or_spatial_index = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_backward_compatible_index.
TSqlParserListener.prototype.enterDrop_backward_compatible_index = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_backward_compatible_index.
TSqlParserListener.prototype.exitDrop_backward_compatible_index = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_procedure.
TSqlParserListener.prototype.enterDrop_procedure = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_procedure.
TSqlParserListener.prototype.exitDrop_procedure = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_trigger.
TSqlParserListener.prototype.enterDrop_trigger = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_trigger.
TSqlParserListener.prototype.exitDrop_trigger = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_dml_trigger.
TSqlParserListener.prototype.enterDrop_dml_trigger = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_dml_trigger.
TSqlParserListener.prototype.exitDrop_dml_trigger = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_ddl_trigger.
TSqlParserListener.prototype.enterDrop_ddl_trigger = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_ddl_trigger.
TSqlParserListener.prototype.exitDrop_ddl_trigger = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_function.
TSqlParserListener.prototype.enterDrop_function = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_function.
TSqlParserListener.prototype.exitDrop_function = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_statistics.
TSqlParserListener.prototype.enterDrop_statistics = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_statistics.
TSqlParserListener.prototype.exitDrop_statistics = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_table.
TSqlParserListener.prototype.enterDrop_table = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_table.
TSqlParserListener.prototype.exitDrop_table = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_view.
TSqlParserListener.prototype.enterDrop_view = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_view.
TSqlParserListener.prototype.exitDrop_view = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_type.
TSqlParserListener.prototype.enterCreate_type = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_type.
TSqlParserListener.prototype.exitCreate_type = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#drop_type.
TSqlParserListener.prototype.enterDrop_type = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#drop_type.
TSqlParserListener.prototype.exitDrop_type = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#rowset_function_limited.
TSqlParserListener.prototype.enterRowset_function_limited = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#rowset_function_limited.
TSqlParserListener.prototype.exitRowset_function_limited = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#openquery.
TSqlParserListener.prototype.enterOpenquery = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#openquery.
TSqlParserListener.prototype.exitOpenquery = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#opendatasource.
TSqlParserListener.prototype.enterOpendatasource = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#opendatasource.
TSqlParserListener.prototype.exitOpendatasource = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#declare_statement.
TSqlParserListener.prototype.enterDeclare_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#declare_statement.
TSqlParserListener.prototype.exitDeclare_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#cursor_statement.
TSqlParserListener.prototype.enterCursor_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#cursor_statement.
TSqlParserListener.prototype.exitCursor_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#backup_database.
TSqlParserListener.prototype.enterBackup_database = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#backup_database.
TSqlParserListener.prototype.exitBackup_database = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#backup_log.
TSqlParserListener.prototype.enterBackup_log = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#backup_log.
TSqlParserListener.prototype.exitBackup_log = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#backup_certificate.
TSqlParserListener.prototype.enterBackup_certificate = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#backup_certificate.
TSqlParserListener.prototype.exitBackup_certificate = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#backup_master_key.
TSqlParserListener.prototype.enterBackup_master_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#backup_master_key.
TSqlParserListener.prototype.exitBackup_master_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#backup_service_master_key.
TSqlParserListener.prototype.enterBackup_service_master_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#backup_service_master_key.
TSqlParserListener.prototype.exitBackup_service_master_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#kill_statement.
TSqlParserListener.prototype.enterKill_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#kill_statement.
TSqlParserListener.prototype.exitKill_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#kill_process.
TSqlParserListener.prototype.enterKill_process = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#kill_process.
TSqlParserListener.prototype.exitKill_process = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#kill_query_notification.
TSqlParserListener.prototype.enterKill_query_notification = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#kill_query_notification.
TSqlParserListener.prototype.exitKill_query_notification = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#kill_stats_job.
TSqlParserListener.prototype.enterKill_stats_job = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#kill_stats_job.
TSqlParserListener.prototype.exitKill_stats_job = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#execute_statement.
TSqlParserListener.prototype.enterExecute_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#execute_statement.
TSqlParserListener.prototype.exitExecute_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#execute_body.
TSqlParserListener.prototype.enterExecute_body = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#execute_body.
TSqlParserListener.prototype.exitExecute_body = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#execute_statement_arg.
TSqlParserListener.prototype.enterExecute_statement_arg = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#execute_statement_arg.
TSqlParserListener.prototype.exitExecute_statement_arg = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#execute_var_string.
TSqlParserListener.prototype.enterExecute_var_string = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#execute_var_string.
TSqlParserListener.prototype.exitExecute_var_string = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#security_statement.
TSqlParserListener.prototype.enterSecurity_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#security_statement.
TSqlParserListener.prototype.exitSecurity_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_certificate.
TSqlParserListener.prototype.enterCreate_certificate = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_certificate.
TSqlParserListener.prototype.exitCreate_certificate = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#existing_keys.
TSqlParserListener.prototype.enterExisting_keys = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#existing_keys.
TSqlParserListener.prototype.exitExisting_keys = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#private_key_options.
TSqlParserListener.prototype.enterPrivate_key_options = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#private_key_options.
TSqlParserListener.prototype.exitPrivate_key_options = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#generate_new_keys.
TSqlParserListener.prototype.enterGenerate_new_keys = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#generate_new_keys.
TSqlParserListener.prototype.exitGenerate_new_keys = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#date_options.
TSqlParserListener.prototype.enterDate_options = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#date_options.
TSqlParserListener.prototype.exitDate_options = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#open_key.
TSqlParserListener.prototype.enterOpen_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#open_key.
TSqlParserListener.prototype.exitOpen_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#close_key.
TSqlParserListener.prototype.enterClose_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#close_key.
TSqlParserListener.prototype.exitClose_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_key.
TSqlParserListener.prototype.enterCreate_key = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_key.
TSqlParserListener.prototype.exitCreate_key = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#key_options.
TSqlParserListener.prototype.enterKey_options = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#key_options.
TSqlParserListener.prototype.exitKey_options = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#algorithm.
TSqlParserListener.prototype.enterAlgorithm = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#algorithm.
TSqlParserListener.prototype.exitAlgorithm = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#encryption_mechanism.
TSqlParserListener.prototype.enterEncryption_mechanism = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#encryption_mechanism.
TSqlParserListener.prototype.exitEncryption_mechanism = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#decryption_mechanism.
TSqlParserListener.prototype.enterDecryption_mechanism = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#decryption_mechanism.
TSqlParserListener.prototype.exitDecryption_mechanism = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#grant_permission.
TSqlParserListener.prototype.enterGrant_permission = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#grant_permission.
TSqlParserListener.prototype.exitGrant_permission = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#set_statement.
TSqlParserListener.prototype.enterSet_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#set_statement.
TSqlParserListener.prototype.exitSet_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#transaction_statement.
TSqlParserListener.prototype.enterTransaction_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#transaction_statement.
TSqlParserListener.prototype.exitTransaction_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#go_statement.
TSqlParserListener.prototype.enterGo_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#go_statement.
TSqlParserListener.prototype.exitGo_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#use_statement.
TSqlParserListener.prototype.enterUse_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#use_statement.
TSqlParserListener.prototype.exitUse_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#setuser_statement.
TSqlParserListener.prototype.enterSetuser_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#setuser_statement.
TSqlParserListener.prototype.exitSetuser_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#reconfigure_statement.
TSqlParserListener.prototype.enterReconfigure_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#reconfigure_statement.
TSqlParserListener.prototype.exitReconfigure_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#shutdown_statement.
TSqlParserListener.prototype.enterShutdown_statement = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#shutdown_statement.
TSqlParserListener.prototype.exitShutdown_statement = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#dbcc_clause.
TSqlParserListener.prototype.enterDbcc_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#dbcc_clause.
TSqlParserListener.prototype.exitDbcc_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#dbcc_options.
TSqlParserListener.prototype.enterDbcc_options = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#dbcc_options.
TSqlParserListener.prototype.exitDbcc_options = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#execute_clause.
TSqlParserListener.prototype.enterExecute_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#execute_clause.
TSqlParserListener.prototype.exitExecute_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#declare_local.
TSqlParserListener.prototype.enterDeclare_local = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#declare_local.
TSqlParserListener.prototype.exitDeclare_local = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#table_type_definition.
TSqlParserListener.prototype.enterTable_type_definition = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#table_type_definition.
TSqlParserListener.prototype.exitTable_type_definition = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#xml_type_definition.
TSqlParserListener.prototype.enterXml_type_definition = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#xml_type_definition.
TSqlParserListener.prototype.exitXml_type_definition = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#xml_schema_collection.
TSqlParserListener.prototype.enterXml_schema_collection = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#xml_schema_collection.
TSqlParserListener.prototype.exitXml_schema_collection = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#column_def_table_constraints.
TSqlParserListener.prototype.enterColumn_def_table_constraints = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#column_def_table_constraints.
TSqlParserListener.prototype.exitColumn_def_table_constraints = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#column_def_table_constraint.
TSqlParserListener.prototype.enterColumn_def_table_constraint = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#column_def_table_constraint.
TSqlParserListener.prototype.exitColumn_def_table_constraint = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#column_definition.
TSqlParserListener.prototype.enterColumn_definition = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#column_definition.
TSqlParserListener.prototype.exitColumn_definition = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#materialized_column_definition.
TSqlParserListener.prototype.enterMaterialized_column_definition = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#materialized_column_definition.
TSqlParserListener.prototype.exitMaterialized_column_definition = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#column_constraint.
TSqlParserListener.prototype.enterColumn_constraint = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#column_constraint.
TSqlParserListener.prototype.exitColumn_constraint = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#table_constraint.
TSqlParserListener.prototype.enterTable_constraint = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#table_constraint.
TSqlParserListener.prototype.exitTable_constraint = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#on_delete.
TSqlParserListener.prototype.enterOn_delete = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#on_delete.
TSqlParserListener.prototype.exitOn_delete = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#on_update.
TSqlParserListener.prototype.enterOn_update = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#on_update.
TSqlParserListener.prototype.exitOn_update = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#index_options.
TSqlParserListener.prototype.enterIndex_options = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#index_options.
TSqlParserListener.prototype.exitIndex_options = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#index_option.
TSqlParserListener.prototype.enterIndex_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#index_option.
TSqlParserListener.prototype.exitIndex_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#declare_cursor.
TSqlParserListener.prototype.enterDeclare_cursor = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#declare_cursor.
TSqlParserListener.prototype.exitDeclare_cursor = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#declare_set_cursor_common.
TSqlParserListener.prototype.enterDeclare_set_cursor_common = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#declare_set_cursor_common.
TSqlParserListener.prototype.exitDeclare_set_cursor_common = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#declare_set_cursor_common_partial.
TSqlParserListener.prototype.enterDeclare_set_cursor_common_partial = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#declare_set_cursor_common_partial.
TSqlParserListener.prototype.exitDeclare_set_cursor_common_partial = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#fetch_cursor.
TSqlParserListener.prototype.enterFetch_cursor = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#fetch_cursor.
TSqlParserListener.prototype.exitFetch_cursor = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#set_special.
TSqlParserListener.prototype.enterSet_special = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#set_special.
TSqlParserListener.prototype.exitSet_special = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#constant_LOCAL_ID.
TSqlParserListener.prototype.enterConstant_LOCAL_ID = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#constant_LOCAL_ID.
TSqlParserListener.prototype.exitConstant_LOCAL_ID = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#expression.
TSqlParserListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#expression.
TSqlParserListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#primitive_expression.
TSqlParserListener.prototype.enterPrimitive_expression = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#primitive_expression.
TSqlParserListener.prototype.exitPrimitive_expression = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#case_expression.
TSqlParserListener.prototype.enterCase_expression = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#case_expression.
TSqlParserListener.prototype.exitCase_expression = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#unary_operator_expression.
TSqlParserListener.prototype.enterUnary_operator_expression = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#unary_operator_expression.
TSqlParserListener.prototype.exitUnary_operator_expression = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#bracket_expression.
TSqlParserListener.prototype.enterBracket_expression = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#bracket_expression.
TSqlParserListener.prototype.exitBracket_expression = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#constant_expression.
TSqlParserListener.prototype.enterConstant_expression = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#constant_expression.
TSqlParserListener.prototype.exitConstant_expression = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#subquery.
TSqlParserListener.prototype.enterSubquery = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#subquery.
TSqlParserListener.prototype.exitSubquery = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#with_expression.
TSqlParserListener.prototype.enterWith_expression = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#with_expression.
TSqlParserListener.prototype.exitWith_expression = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#common_table_expression.
TSqlParserListener.prototype.enterCommon_table_expression = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#common_table_expression.
TSqlParserListener.prototype.exitCommon_table_expression = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#update_elem.
TSqlParserListener.prototype.enterUpdate_elem = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#update_elem.
TSqlParserListener.prototype.exitUpdate_elem = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#search_condition_list.
TSqlParserListener.prototype.enterSearch_condition_list = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#search_condition_list.
TSqlParserListener.prototype.exitSearch_condition_list = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#search_condition.
TSqlParserListener.prototype.enterSearch_condition = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#search_condition.
TSqlParserListener.prototype.exitSearch_condition = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#search_condition_and.
TSqlParserListener.prototype.enterSearch_condition_and = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#search_condition_and.
TSqlParserListener.prototype.exitSearch_condition_and = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#search_condition_not.
TSqlParserListener.prototype.enterSearch_condition_not = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#search_condition_not.
TSqlParserListener.prototype.exitSearch_condition_not = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#predicate.
TSqlParserListener.prototype.enterPredicate = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#predicate.
TSqlParserListener.prototype.exitPredicate = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#query_expression.
TSqlParserListener.prototype.enterQuery_expression = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#query_expression.
TSqlParserListener.prototype.exitQuery_expression = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#sql_union.
TSqlParserListener.prototype.enterSql_union = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#sql_union.
TSqlParserListener.prototype.exitSql_union = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#query_specification.
TSqlParserListener.prototype.enterQuery_specification = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#query_specification.
TSqlParserListener.prototype.exitQuery_specification = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#top_clause.
TSqlParserListener.prototype.enterTop_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#top_clause.
TSqlParserListener.prototype.exitTop_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#top_percent.
TSqlParserListener.prototype.enterTop_percent = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#top_percent.
TSqlParserListener.prototype.exitTop_percent = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#top_count.
TSqlParserListener.prototype.enterTop_count = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#top_count.
TSqlParserListener.prototype.exitTop_count = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#order_by_clause.
TSqlParserListener.prototype.enterOrder_by_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#order_by_clause.
TSqlParserListener.prototype.exitOrder_by_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#for_clause.
TSqlParserListener.prototype.enterFor_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#for_clause.
TSqlParserListener.prototype.exitFor_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#xml_common_directives.
TSqlParserListener.prototype.enterXml_common_directives = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#xml_common_directives.
TSqlParserListener.prototype.exitXml_common_directives = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#order_by_expression.
TSqlParserListener.prototype.enterOrder_by_expression = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#order_by_expression.
TSqlParserListener.prototype.exitOrder_by_expression = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#group_by_item.
TSqlParserListener.prototype.enterGroup_by_item = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#group_by_item.
TSqlParserListener.prototype.exitGroup_by_item = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#option_clause.
TSqlParserListener.prototype.enterOption_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#option_clause.
TSqlParserListener.prototype.exitOption_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#option.
TSqlParserListener.prototype.enterOption = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#option.
TSqlParserListener.prototype.exitOption = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#optimize_for_arg.
TSqlParserListener.prototype.enterOptimize_for_arg = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#optimize_for_arg.
TSqlParserListener.prototype.exitOptimize_for_arg = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#select_list.
TSqlParserListener.prototype.enterSelect_list = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#select_list.
TSqlParserListener.prototype.exitSelect_list = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#udt_method_arguments.
TSqlParserListener.prototype.enterUdt_method_arguments = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#udt_method_arguments.
TSqlParserListener.prototype.exitUdt_method_arguments = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#asterisk.
TSqlParserListener.prototype.enterAsterisk = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#asterisk.
TSqlParserListener.prototype.exitAsterisk = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#column_elem.
TSqlParserListener.prototype.enterColumn_elem = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#column_elem.
TSqlParserListener.prototype.exitColumn_elem = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#udt_elem.
TSqlParserListener.prototype.enterUdt_elem = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#udt_elem.
TSqlParserListener.prototype.exitUdt_elem = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#expression_elem.
TSqlParserListener.prototype.enterExpression_elem = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#expression_elem.
TSqlParserListener.prototype.exitExpression_elem = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#select_list_elem.
TSqlParserListener.prototype.enterSelect_list_elem = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#select_list_elem.
TSqlParserListener.prototype.exitSelect_list_elem = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#table_sources.
TSqlParserListener.prototype.enterTable_sources = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#table_sources.
TSqlParserListener.prototype.exitTable_sources = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#table_source.
TSqlParserListener.prototype.enterTable_source = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#table_source.
TSqlParserListener.prototype.exitTable_source = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#table_source_item_joined.
TSqlParserListener.prototype.enterTable_source_item_joined = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#table_source_item_joined.
TSqlParserListener.prototype.exitTable_source_item_joined = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#table_source_item.
TSqlParserListener.prototype.enterTable_source_item = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#table_source_item.
TSqlParserListener.prototype.exitTable_source_item = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#open_xml.
TSqlParserListener.prototype.enterOpen_xml = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#open_xml.
TSqlParserListener.prototype.exitOpen_xml = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#schema_declaration.
TSqlParserListener.prototype.enterSchema_declaration = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#schema_declaration.
TSqlParserListener.prototype.exitSchema_declaration = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#column_declaration.
TSqlParserListener.prototype.enterColumn_declaration = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#column_declaration.
TSqlParserListener.prototype.exitColumn_declaration = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#change_table.
TSqlParserListener.prototype.enterChange_table = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#change_table.
TSqlParserListener.prototype.exitChange_table = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#join_part.
TSqlParserListener.prototype.enterJoin_part = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#join_part.
TSqlParserListener.prototype.exitJoin_part = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#pivot_clause.
TSqlParserListener.prototype.enterPivot_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#pivot_clause.
TSqlParserListener.prototype.exitPivot_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#unpivot_clause.
TSqlParserListener.prototype.enterUnpivot_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#unpivot_clause.
TSqlParserListener.prototype.exitUnpivot_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#full_column_name_list.
TSqlParserListener.prototype.enterFull_column_name_list = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#full_column_name_list.
TSqlParserListener.prototype.exitFull_column_name_list = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#table_name_with_hint.
TSqlParserListener.prototype.enterTable_name_with_hint = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#table_name_with_hint.
TSqlParserListener.prototype.exitTable_name_with_hint = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#rowset_function.
TSqlParserListener.prototype.enterRowset_function = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#rowset_function.
TSqlParserListener.prototype.exitRowset_function = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#bulk_option.
TSqlParserListener.prototype.enterBulk_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#bulk_option.
TSqlParserListener.prototype.exitBulk_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#derived_table.
TSqlParserListener.prototype.enterDerived_table = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#derived_table.
TSqlParserListener.prototype.exitDerived_table = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#BINARY_CHECKSUM.
TSqlParserListener.prototype.enterBINARY_CHECKSUM = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#BINARY_CHECKSUM.
TSqlParserListener.prototype.exitBINARY_CHECKSUM = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#CAST.
TSqlParserListener.prototype.enterCAST = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#CAST.
TSqlParserListener.prototype.exitCAST = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#CONVERT.
TSqlParserListener.prototype.enterCONVERT = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#CONVERT.
TSqlParserListener.prototype.exitCONVERT = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#CHECKSUM.
TSqlParserListener.prototype.enterCHECKSUM = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#CHECKSUM.
TSqlParserListener.prototype.exitCHECKSUM = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#COALESCE.
TSqlParserListener.prototype.enterCOALESCE = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#COALESCE.
TSqlParserListener.prototype.exitCOALESCE = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#CURRENT_TIMESTAMP.
TSqlParserListener.prototype.enterCURRENT_TIMESTAMP = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#CURRENT_TIMESTAMP.
TSqlParserListener.prototype.exitCURRENT_TIMESTAMP = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#CURRENT_USER.
TSqlParserListener.prototype.enterCURRENT_USER = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#CURRENT_USER.
TSqlParserListener.prototype.exitCURRENT_USER = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#DATEADD.
TSqlParserListener.prototype.enterDATEADD = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#DATEADD.
TSqlParserListener.prototype.exitDATEADD = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#DATEDIFF.
TSqlParserListener.prototype.enterDATEDIFF = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#DATEDIFF.
TSqlParserListener.prototype.exitDATEDIFF = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#DATENAME.
TSqlParserListener.prototype.enterDATENAME = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#DATENAME.
TSqlParserListener.prototype.exitDATENAME = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#DATEPART.
TSqlParserListener.prototype.enterDATEPART = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#DATEPART.
TSqlParserListener.prototype.exitDATEPART = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#GETDATE.
TSqlParserListener.prototype.enterGETDATE = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#GETDATE.
TSqlParserListener.prototype.exitGETDATE = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#GETUTCDATE.
TSqlParserListener.prototype.enterGETUTCDATE = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#GETUTCDATE.
TSqlParserListener.prototype.exitGETUTCDATE = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#IDENTITY.
TSqlParserListener.prototype.enterIDENTITY = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#IDENTITY.
TSqlParserListener.prototype.exitIDENTITY = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#MIN_ACTIVE_ROWVERSION.
TSqlParserListener.prototype.enterMIN_ACTIVE_ROWVERSION = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#MIN_ACTIVE_ROWVERSION.
TSqlParserListener.prototype.exitMIN_ACTIVE_ROWVERSION = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#NULLIF.
TSqlParserListener.prototype.enterNULLIF = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#NULLIF.
TSqlParserListener.prototype.exitNULLIF = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#STUFF.
TSqlParserListener.prototype.enterSTUFF = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#STUFF.
TSqlParserListener.prototype.exitSTUFF = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#SESSION_USER.
TSqlParserListener.prototype.enterSESSION_USER = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#SESSION_USER.
TSqlParserListener.prototype.exitSESSION_USER = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#SYSTEM_USER.
TSqlParserListener.prototype.enterSYSTEM_USER = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#SYSTEM_USER.
TSqlParserListener.prototype.exitSYSTEM_USER = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#ISNULL.
TSqlParserListener.prototype.enterISNULL = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#ISNULL.
TSqlParserListener.prototype.exitISNULL = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#XML_DATA_TYPE_FUNC.
TSqlParserListener.prototype.enterXML_DATA_TYPE_FUNC = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#XML_DATA_TYPE_FUNC.
TSqlParserListener.prototype.exitXML_DATA_TYPE_FUNC = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#IFF.
TSqlParserListener.prototype.enterIFF = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#IFF.
TSqlParserListener.prototype.exitIFF = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#RANKING_WINDOWED_FUNC.
TSqlParserListener.prototype.enterRANKING_WINDOWED_FUNC = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#RANKING_WINDOWED_FUNC.
TSqlParserListener.prototype.exitRANKING_WINDOWED_FUNC = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#AGGREGATE_WINDOWED_FUNC.
TSqlParserListener.prototype.enterAGGREGATE_WINDOWED_FUNC = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#AGGREGATE_WINDOWED_FUNC.
TSqlParserListener.prototype.exitAGGREGATE_WINDOWED_FUNC = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#ANALYTIC_WINDOWED_FUNC.
TSqlParserListener.prototype.enterANALYTIC_WINDOWED_FUNC = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#ANALYTIC_WINDOWED_FUNC.
TSqlParserListener.prototype.exitANALYTIC_WINDOWED_FUNC = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#SCALAR_FUNCTION.
TSqlParserListener.prototype.enterSCALAR_FUNCTION = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#SCALAR_FUNCTION.
TSqlParserListener.prototype.exitSCALAR_FUNCTION = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#STRINGAGG.
TSqlParserListener.prototype.enterSTRINGAGG = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#STRINGAGG.
TSqlParserListener.prototype.exitSTRINGAGG = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#xml_data_type_methods.
TSqlParserListener.prototype.enterXml_data_type_methods = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#xml_data_type_methods.
TSqlParserListener.prototype.exitXml_data_type_methods = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#value_method.
TSqlParserListener.prototype.enterValue_method = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#value_method.
TSqlParserListener.prototype.exitValue_method = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#query_method.
TSqlParserListener.prototype.enterQuery_method = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#query_method.
TSqlParserListener.prototype.exitQuery_method = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#exist_method.
TSqlParserListener.prototype.enterExist_method = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#exist_method.
TSqlParserListener.prototype.exitExist_method = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#modify_method.
TSqlParserListener.prototype.enterModify_method = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#modify_method.
TSqlParserListener.prototype.exitModify_method = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#nodes_method.
TSqlParserListener.prototype.enterNodes_method = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#nodes_method.
TSqlParserListener.prototype.exitNodes_method = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#switch_section.
TSqlParserListener.prototype.enterSwitch_section = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#switch_section.
TSqlParserListener.prototype.exitSwitch_section = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#switch_search_condition_section.
TSqlParserListener.prototype.enterSwitch_search_condition_section = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#switch_search_condition_section.
TSqlParserListener.prototype.exitSwitch_search_condition_section = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#as_column_alias.
TSqlParserListener.prototype.enterAs_column_alias = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#as_column_alias.
TSqlParserListener.prototype.exitAs_column_alias = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#as_table_alias.
TSqlParserListener.prototype.enterAs_table_alias = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#as_table_alias.
TSqlParserListener.prototype.exitAs_table_alias = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#table_alias.
TSqlParserListener.prototype.enterTable_alias = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#table_alias.
TSqlParserListener.prototype.exitTable_alias = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#with_table_hints.
TSqlParserListener.prototype.enterWith_table_hints = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#with_table_hints.
TSqlParserListener.prototype.exitWith_table_hints = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#insert_with_table_hints.
TSqlParserListener.prototype.enterInsert_with_table_hints = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#insert_with_table_hints.
TSqlParserListener.prototype.exitInsert_with_table_hints = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#table_hint.
TSqlParserListener.prototype.enterTable_hint = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#table_hint.
TSqlParserListener.prototype.exitTable_hint = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#index_value.
TSqlParserListener.prototype.enterIndex_value = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#index_value.
TSqlParserListener.prototype.exitIndex_value = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#column_alias_list.
TSqlParserListener.prototype.enterColumn_alias_list = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#column_alias_list.
TSqlParserListener.prototype.exitColumn_alias_list = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#column_alias.
TSqlParserListener.prototype.enterColumn_alias = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#column_alias.
TSqlParserListener.prototype.exitColumn_alias = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#table_value_constructor.
TSqlParserListener.prototype.enterTable_value_constructor = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#table_value_constructor.
TSqlParserListener.prototype.exitTable_value_constructor = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#expression_list.
TSqlParserListener.prototype.enterExpression_list = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#expression_list.
TSqlParserListener.prototype.exitExpression_list = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#ranking_windowed_function.
TSqlParserListener.prototype.enterRanking_windowed_function = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#ranking_windowed_function.
TSqlParserListener.prototype.exitRanking_windowed_function = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#aggregate_windowed_function.
TSqlParserListener.prototype.enterAggregate_windowed_function = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#aggregate_windowed_function.
TSqlParserListener.prototype.exitAggregate_windowed_function = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#analytic_windowed_function.
TSqlParserListener.prototype.enterAnalytic_windowed_function = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#analytic_windowed_function.
TSqlParserListener.prototype.exitAnalytic_windowed_function = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#all_distinct_expression.
TSqlParserListener.prototype.enterAll_distinct_expression = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#all_distinct_expression.
TSqlParserListener.prototype.exitAll_distinct_expression = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#over_clause.
TSqlParserListener.prototype.enterOver_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#over_clause.
TSqlParserListener.prototype.exitOver_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#row_or_range_clause.
TSqlParserListener.prototype.enterRow_or_range_clause = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#row_or_range_clause.
TSqlParserListener.prototype.exitRow_or_range_clause = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#window_frame_extent.
TSqlParserListener.prototype.enterWindow_frame_extent = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#window_frame_extent.
TSqlParserListener.prototype.exitWindow_frame_extent = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#window_frame_bound.
TSqlParserListener.prototype.enterWindow_frame_bound = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#window_frame_bound.
TSqlParserListener.prototype.exitWindow_frame_bound = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#window_frame_preceding.
TSqlParserListener.prototype.enterWindow_frame_preceding = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#window_frame_preceding.
TSqlParserListener.prototype.exitWindow_frame_preceding = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#window_frame_following.
TSqlParserListener.prototype.enterWindow_frame_following = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#window_frame_following.
TSqlParserListener.prototype.exitWindow_frame_following = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#create_database_option.
TSqlParserListener.prototype.enterCreate_database_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#create_database_option.
TSqlParserListener.prototype.exitCreate_database_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#database_filestream_option.
TSqlParserListener.prototype.enterDatabase_filestream_option = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#database_filestream_option.
TSqlParserListener.prototype.exitDatabase_filestream_option = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#database_file_spec.
TSqlParserListener.prototype.enterDatabase_file_spec = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#database_file_spec.
TSqlParserListener.prototype.exitDatabase_file_spec = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#file_group.
TSqlParserListener.prototype.enterFile_group = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#file_group.
TSqlParserListener.prototype.exitFile_group = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#file_spec.
TSqlParserListener.prototype.enterFile_spec = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#file_spec.
TSqlParserListener.prototype.exitFile_spec = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#entity_name.
TSqlParserListener.prototype.enterEntity_name = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#entity_name.
TSqlParserListener.prototype.exitEntity_name = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#entity_name_for_azure_dw.
TSqlParserListener.prototype.enterEntity_name_for_azure_dw = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#entity_name_for_azure_dw.
TSqlParserListener.prototype.exitEntity_name_for_azure_dw = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#entity_name_for_parallel_dw.
TSqlParserListener.prototype.enterEntity_name_for_parallel_dw = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#entity_name_for_parallel_dw.
TSqlParserListener.prototype.exitEntity_name_for_parallel_dw = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#full_table_name.
TSqlParserListener.prototype.enterFull_table_name = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#full_table_name.
TSqlParserListener.prototype.exitFull_table_name = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#table_name.
TSqlParserListener.prototype.enterTable_name = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#table_name.
TSqlParserListener.prototype.exitTable_name = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#simple_name.
TSqlParserListener.prototype.enterSimple_name = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#simple_name.
TSqlParserListener.prototype.exitSimple_name = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#func_proc_name_schema.
TSqlParserListener.prototype.enterFunc_proc_name_schema = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#func_proc_name_schema.
TSqlParserListener.prototype.exitFunc_proc_name_schema = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#func_proc_name_database_schema.
TSqlParserListener.prototype.enterFunc_proc_name_database_schema = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#func_proc_name_database_schema.
TSqlParserListener.prototype.exitFunc_proc_name_database_schema = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#func_proc_name_server_database_schema.
TSqlParserListener.prototype.enterFunc_proc_name_server_database_schema = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#func_proc_name_server_database_schema.
TSqlParserListener.prototype.exitFunc_proc_name_server_database_schema = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#ddl_object.
TSqlParserListener.prototype.enterDdl_object = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#ddl_object.
TSqlParserListener.prototype.exitDdl_object = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#full_column_name.
TSqlParserListener.prototype.enterFull_column_name = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#full_column_name.
TSqlParserListener.prototype.exitFull_column_name = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#column_name_list_with_order.
TSqlParserListener.prototype.enterColumn_name_list_with_order = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#column_name_list_with_order.
TSqlParserListener.prototype.exitColumn_name_list_with_order = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#column_name_list.
TSqlParserListener.prototype.enterColumn_name_list = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#column_name_list.
TSqlParserListener.prototype.exitColumn_name_list = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#cursor_name.
TSqlParserListener.prototype.enterCursor_name = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#cursor_name.
TSqlParserListener.prototype.exitCursor_name = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#on_off.
TSqlParserListener.prototype.enterOn_off = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#on_off.
TSqlParserListener.prototype.exitOn_off = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#clustered.
TSqlParserListener.prototype.enterClustered = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#clustered.
TSqlParserListener.prototype.exitClustered = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#null_notnull.
TSqlParserListener.prototype.enterNull_notnull = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#null_notnull.
TSqlParserListener.prototype.exitNull_notnull = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#null_or_default.
TSqlParserListener.prototype.enterNull_or_default = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#null_or_default.
TSqlParserListener.prototype.exitNull_or_default = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#scalar_function_name.
TSqlParserListener.prototype.enterScalar_function_name = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#scalar_function_name.
TSqlParserListener.prototype.exitScalar_function_name = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#begin_conversation_timer.
TSqlParserListener.prototype.enterBegin_conversation_timer = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#begin_conversation_timer.
TSqlParserListener.prototype.exitBegin_conversation_timer = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#begin_conversation_dialog.
TSqlParserListener.prototype.enterBegin_conversation_dialog = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#begin_conversation_dialog.
TSqlParserListener.prototype.exitBegin_conversation_dialog = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#contract_name.
TSqlParserListener.prototype.enterContract_name = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#contract_name.
TSqlParserListener.prototype.exitContract_name = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#service_name.
TSqlParserListener.prototype.enterService_name = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#service_name.
TSqlParserListener.prototype.exitService_name = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#end_conversation.
TSqlParserListener.prototype.enterEnd_conversation = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#end_conversation.
TSqlParserListener.prototype.exitEnd_conversation = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#waitfor_conversation.
TSqlParserListener.prototype.enterWaitfor_conversation = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#waitfor_conversation.
TSqlParserListener.prototype.exitWaitfor_conversation = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#get_conversation.
TSqlParserListener.prototype.enterGet_conversation = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#get_conversation.
TSqlParserListener.prototype.exitGet_conversation = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#queue_id.
TSqlParserListener.prototype.enterQueue_id = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#queue_id.
TSqlParserListener.prototype.exitQueue_id = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#send_conversation.
TSqlParserListener.prototype.enterSend_conversation = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#send_conversation.
TSqlParserListener.prototype.exitSend_conversation = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#data_type.
TSqlParserListener.prototype.enterData_type = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#data_type.
TSqlParserListener.prototype.exitData_type = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#default_value.
TSqlParserListener.prototype.enterDefault_value = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#default_value.
TSqlParserListener.prototype.exitDefault_value = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#constant.
TSqlParserListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#constant.
TSqlParserListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#sign.
TSqlParserListener.prototype.enterSign = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#sign.
TSqlParserListener.prototype.exitSign = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#id.
TSqlParserListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#id.
TSqlParserListener.prototype.exitId = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#simple_id.
TSqlParserListener.prototype.enterSimple_id = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#simple_id.
TSqlParserListener.prototype.exitSimple_id = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#comparison_operator.
TSqlParserListener.prototype.enterComparison_operator = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#comparison_operator.
TSqlParserListener.prototype.exitComparison_operator = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#assignment_operator.
TSqlParserListener.prototype.enterAssignment_operator = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#assignment_operator.
TSqlParserListener.prototype.exitAssignment_operator = function(ctx) {
};


// Enter a parse tree produced by TSqlParser#file_size.
TSqlParserListener.prototype.enterFile_size = function(ctx) {
};

// Exit a parse tree produced by TSqlParser#file_size.
TSqlParserListener.prototype.exitFile_size = function(ctx) {
};



exports.TSqlParserListener = TSqlParserListener;