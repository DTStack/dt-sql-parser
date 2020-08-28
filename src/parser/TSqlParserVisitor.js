// Generated from /Users/ziv/Workspace/dt-sql-parser/src/grammar/tsql/TSqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by TSqlParser.

function TSqlParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

TSqlParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
TSqlParserVisitor.prototype.constructor = TSqlParserVisitor;

// Visit a parse tree produced by TSqlParser#tsql_file.
TSqlParserVisitor.prototype.visitTsql_file = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#batch.
TSqlParserVisitor.prototype.visitBatch = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#sql_clauses.
TSqlParserVisitor.prototype.visitSql_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#sql_clause.
TSqlParserVisitor.prototype.visitSql_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#dml_clause.
TSqlParserVisitor.prototype.visitDml_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#ddl_clause.
TSqlParserVisitor.prototype.visitDdl_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#backup_statement.
TSqlParserVisitor.prototype.visitBackup_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#cfl_statement.
TSqlParserVisitor.prototype.visitCfl_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#block_statement.
TSqlParserVisitor.prototype.visitBlock_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#break_statement.
TSqlParserVisitor.prototype.visitBreak_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#continue_statement.
TSqlParserVisitor.prototype.visitContinue_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#goto_statement.
TSqlParserVisitor.prototype.visitGoto_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#return_statement.
TSqlParserVisitor.prototype.visitReturn_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#if_statement.
TSqlParserVisitor.prototype.visitIf_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#throw_statement.
TSqlParserVisitor.prototype.visitThrow_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#throw_error_number.
TSqlParserVisitor.prototype.visitThrow_error_number = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#throw_message.
TSqlParserVisitor.prototype.visitThrow_message = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#throw_state.
TSqlParserVisitor.prototype.visitThrow_state = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#try_catch_statement.
TSqlParserVisitor.prototype.visitTry_catch_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#waitfor_statement.
TSqlParserVisitor.prototype.visitWaitfor_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#while_statement.
TSqlParserVisitor.prototype.visitWhile_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#print_statement.
TSqlParserVisitor.prototype.visitPrint_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#raiseerror_statement.
TSqlParserVisitor.prototype.visitRaiseerror_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#empty_statement.
TSqlParserVisitor.prototype.visitEmpty_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#another_statement.
TSqlParserVisitor.prototype.visitAnother_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_application_role.
TSqlParserVisitor.prototype.visitAlter_application_role = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_application_role.
TSqlParserVisitor.prototype.visitCreate_application_role = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_aggregate.
TSqlParserVisitor.prototype.visitDrop_aggregate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_application_role.
TSqlParserVisitor.prototype.visitDrop_application_role = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_assembly.
TSqlParserVisitor.prototype.visitAlter_assembly = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_assembly_start.
TSqlParserVisitor.prototype.visitAlter_assembly_start = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_assembly_clause.
TSqlParserVisitor.prototype.visitAlter_assembly_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_assembly_from_clause.
TSqlParserVisitor.prototype.visitAlter_assembly_from_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_assembly_from_clause_start.
TSqlParserVisitor.prototype.visitAlter_assembly_from_clause_start = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_assembly_drop_clause.
TSqlParserVisitor.prototype.visitAlter_assembly_drop_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_assembly_drop_multiple_files.
TSqlParserVisitor.prototype.visitAlter_assembly_drop_multiple_files = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_assembly_drop.
TSqlParserVisitor.prototype.visitAlter_assembly_drop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_assembly_add_clause.
TSqlParserVisitor.prototype.visitAlter_assembly_add_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_asssembly_add_clause_start.
TSqlParserVisitor.prototype.visitAlter_asssembly_add_clause_start = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_assembly_client_file_clause.
TSqlParserVisitor.prototype.visitAlter_assembly_client_file_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_assembly_file_name.
TSqlParserVisitor.prototype.visitAlter_assembly_file_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_assembly_file_bits.
TSqlParserVisitor.prototype.visitAlter_assembly_file_bits = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_assembly_as.
TSqlParserVisitor.prototype.visitAlter_assembly_as = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_assembly_with_clause.
TSqlParserVisitor.prototype.visitAlter_assembly_with_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_assembly_with.
TSqlParserVisitor.prototype.visitAlter_assembly_with = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#client_assembly_specifier.
TSqlParserVisitor.prototype.visitClient_assembly_specifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#assembly_option.
TSqlParserVisitor.prototype.visitAssembly_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#network_file_share.
TSqlParserVisitor.prototype.visitNetwork_file_share = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#network_computer.
TSqlParserVisitor.prototype.visitNetwork_computer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#network_file_start.
TSqlParserVisitor.prototype.visitNetwork_file_start = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#file_path.
TSqlParserVisitor.prototype.visitFile_path = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#file_directory_path_separator.
TSqlParserVisitor.prototype.visitFile_directory_path_separator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#local_file.
TSqlParserVisitor.prototype.visitLocal_file = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#local_drive.
TSqlParserVisitor.prototype.visitLocal_drive = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#multiple_local_files.
TSqlParserVisitor.prototype.visitMultiple_local_files = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#multiple_local_file_start.
TSqlParserVisitor.prototype.visitMultiple_local_file_start = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_assembly.
TSqlParserVisitor.prototype.visitCreate_assembly = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_assembly.
TSqlParserVisitor.prototype.visitDrop_assembly = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_asymmetric_key.
TSqlParserVisitor.prototype.visitAlter_asymmetric_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_asymmetric_key_start.
TSqlParserVisitor.prototype.visitAlter_asymmetric_key_start = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#asymmetric_key_option.
TSqlParserVisitor.prototype.visitAsymmetric_key_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#asymmetric_key_option_start.
TSqlParserVisitor.prototype.visitAsymmetric_key_option_start = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#asymmetric_key_password_change_option.
TSqlParserVisitor.prototype.visitAsymmetric_key_password_change_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_asymmetric_key.
TSqlParserVisitor.prototype.visitCreate_asymmetric_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_asymmetric_key.
TSqlParserVisitor.prototype.visitDrop_asymmetric_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_authorization.
TSqlParserVisitor.prototype.visitAlter_authorization = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#authorization_grantee.
TSqlParserVisitor.prototype.visitAuthorization_grantee = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#entity_to.
TSqlParserVisitor.prototype.visitEntity_to = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#colon_colon.
TSqlParserVisitor.prototype.visitColon_colon = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_authorization_start.
TSqlParserVisitor.prototype.visitAlter_authorization_start = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_authorization_for_sql_database.
TSqlParserVisitor.prototype.visitAlter_authorization_for_sql_database = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_authorization_for_azure_dw.
TSqlParserVisitor.prototype.visitAlter_authorization_for_azure_dw = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_authorization_for_parallel_dw.
TSqlParserVisitor.prototype.visitAlter_authorization_for_parallel_dw = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#class_type.
TSqlParserVisitor.prototype.visitClass_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#class_type_for_sql_database.
TSqlParserVisitor.prototype.visitClass_type_for_sql_database = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#class_type_for_azure_dw.
TSqlParserVisitor.prototype.visitClass_type_for_azure_dw = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#class_type_for_parallel_dw.
TSqlParserVisitor.prototype.visitClass_type_for_parallel_dw = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_availability_group.
TSqlParserVisitor.prototype.visitDrop_availability_group = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_availability_group.
TSqlParserVisitor.prototype.visitAlter_availability_group = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_availability_group_start.
TSqlParserVisitor.prototype.visitAlter_availability_group_start = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_availability_group_options.
TSqlParserVisitor.prototype.visitAlter_availability_group_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_or_alter_broker_priority.
TSqlParserVisitor.prototype.visitCreate_or_alter_broker_priority = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_broker_priority.
TSqlParserVisitor.prototype.visitDrop_broker_priority = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_certificate.
TSqlParserVisitor.prototype.visitAlter_certificate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_column_encryption_key.
TSqlParserVisitor.prototype.visitAlter_column_encryption_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_column_encryption_key.
TSqlParserVisitor.prototype.visitCreate_column_encryption_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_certificate.
TSqlParserVisitor.prototype.visitDrop_certificate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_column_encryption_key.
TSqlParserVisitor.prototype.visitDrop_column_encryption_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_column_master_key.
TSqlParserVisitor.prototype.visitDrop_column_master_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_contract.
TSqlParserVisitor.prototype.visitDrop_contract = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_credential.
TSqlParserVisitor.prototype.visitDrop_credential = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_cryptograhic_provider.
TSqlParserVisitor.prototype.visitDrop_cryptograhic_provider = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_database.
TSqlParserVisitor.prototype.visitDrop_database = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_database_audit_specification.
TSqlParserVisitor.prototype.visitDrop_database_audit_specification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_database_scoped_credential.
TSqlParserVisitor.prototype.visitDrop_database_scoped_credential = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_default.
TSqlParserVisitor.prototype.visitDrop_default = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_endpoint.
TSqlParserVisitor.prototype.visitDrop_endpoint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_external_data_source.
TSqlParserVisitor.prototype.visitDrop_external_data_source = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_external_file_format.
TSqlParserVisitor.prototype.visitDrop_external_file_format = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_external_library.
TSqlParserVisitor.prototype.visitDrop_external_library = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_external_resource_pool.
TSqlParserVisitor.prototype.visitDrop_external_resource_pool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_external_table.
TSqlParserVisitor.prototype.visitDrop_external_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_event_notifications.
TSqlParserVisitor.prototype.visitDrop_event_notifications = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_event_session.
TSqlParserVisitor.prototype.visitDrop_event_session = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_fulltext_catalog.
TSqlParserVisitor.prototype.visitDrop_fulltext_catalog = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_fulltext_index.
TSqlParserVisitor.prototype.visitDrop_fulltext_index = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_fulltext_stoplist.
TSqlParserVisitor.prototype.visitDrop_fulltext_stoplist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_login.
TSqlParserVisitor.prototype.visitDrop_login = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_master_key.
TSqlParserVisitor.prototype.visitDrop_master_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_message_type.
TSqlParserVisitor.prototype.visitDrop_message_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_partition_function.
TSqlParserVisitor.prototype.visitDrop_partition_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_partition_scheme.
TSqlParserVisitor.prototype.visitDrop_partition_scheme = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_queue.
TSqlParserVisitor.prototype.visitDrop_queue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_remote_service_binding.
TSqlParserVisitor.prototype.visitDrop_remote_service_binding = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_resource_pool.
TSqlParserVisitor.prototype.visitDrop_resource_pool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_db_role.
TSqlParserVisitor.prototype.visitDrop_db_role = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_route.
TSqlParserVisitor.prototype.visitDrop_route = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_rule.
TSqlParserVisitor.prototype.visitDrop_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_schema.
TSqlParserVisitor.prototype.visitDrop_schema = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_search_property_list.
TSqlParserVisitor.prototype.visitDrop_search_property_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_security_policy.
TSqlParserVisitor.prototype.visitDrop_security_policy = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_sequence.
TSqlParserVisitor.prototype.visitDrop_sequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_server_audit.
TSqlParserVisitor.prototype.visitDrop_server_audit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_server_audit_specification.
TSqlParserVisitor.prototype.visitDrop_server_audit_specification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_server_role.
TSqlParserVisitor.prototype.visitDrop_server_role = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_service.
TSqlParserVisitor.prototype.visitDrop_service = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_signature.
TSqlParserVisitor.prototype.visitDrop_signature = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_statistics_name_azure_dw_and_pdw.
TSqlParserVisitor.prototype.visitDrop_statistics_name_azure_dw_and_pdw = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_symmetric_key.
TSqlParserVisitor.prototype.visitDrop_symmetric_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_synonym.
TSqlParserVisitor.prototype.visitDrop_synonym = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_user.
TSqlParserVisitor.prototype.visitDrop_user = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_workload_group.
TSqlParserVisitor.prototype.visitDrop_workload_group = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_xml_schema_collection.
TSqlParserVisitor.prototype.visitDrop_xml_schema_collection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#disable_trigger.
TSqlParserVisitor.prototype.visitDisable_trigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#enable_trigger.
TSqlParserVisitor.prototype.visitEnable_trigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#lock_table.
TSqlParserVisitor.prototype.visitLock_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#truncate_table.
TSqlParserVisitor.prototype.visitTruncate_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_column_master_key.
TSqlParserVisitor.prototype.visitCreate_column_master_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_credential.
TSqlParserVisitor.prototype.visitAlter_credential = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_credential.
TSqlParserVisitor.prototype.visitCreate_credential = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_cryptographic_provider.
TSqlParserVisitor.prototype.visitAlter_cryptographic_provider = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_cryptographic_provider.
TSqlParserVisitor.prototype.visitCreate_cryptographic_provider = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_event_notification.
TSqlParserVisitor.prototype.visitCreate_event_notification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_or_alter_event_session.
TSqlParserVisitor.prototype.visitCreate_or_alter_event_session = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#event_session_predicate_expression.
TSqlParserVisitor.prototype.visitEvent_session_predicate_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#event_session_predicate_factor.
TSqlParserVisitor.prototype.visitEvent_session_predicate_factor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#event_session_predicate_leaf.
TSqlParserVisitor.prototype.visitEvent_session_predicate_leaf = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_external_data_source.
TSqlParserVisitor.prototype.visitAlter_external_data_source = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_external_library.
TSqlParserVisitor.prototype.visitAlter_external_library = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_external_library.
TSqlParserVisitor.prototype.visitCreate_external_library = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_external_resource_pool.
TSqlParserVisitor.prototype.visitAlter_external_resource_pool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_external_resource_pool.
TSqlParserVisitor.prototype.visitCreate_external_resource_pool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_fulltext_catalog.
TSqlParserVisitor.prototype.visitAlter_fulltext_catalog = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_fulltext_catalog.
TSqlParserVisitor.prototype.visitCreate_fulltext_catalog = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_fulltext_stoplist.
TSqlParserVisitor.prototype.visitAlter_fulltext_stoplist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_fulltext_stoplist.
TSqlParserVisitor.prototype.visitCreate_fulltext_stoplist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_login_sql_server.
TSqlParserVisitor.prototype.visitAlter_login_sql_server = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_login_sql_server.
TSqlParserVisitor.prototype.visitCreate_login_sql_server = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_login_azure_sql.
TSqlParserVisitor.prototype.visitAlter_login_azure_sql = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_login_azure_sql.
TSqlParserVisitor.prototype.visitCreate_login_azure_sql = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_login_azure_sql_dw_and_pdw.
TSqlParserVisitor.prototype.visitAlter_login_azure_sql_dw_and_pdw = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_login_pdw.
TSqlParserVisitor.prototype.visitCreate_login_pdw = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_master_key_sql_server.
TSqlParserVisitor.prototype.visitAlter_master_key_sql_server = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_master_key_sql_server.
TSqlParserVisitor.prototype.visitCreate_master_key_sql_server = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_master_key_azure_sql.
TSqlParserVisitor.prototype.visitAlter_master_key_azure_sql = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_master_key_azure_sql.
TSqlParserVisitor.prototype.visitCreate_master_key_azure_sql = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_message_type.
TSqlParserVisitor.prototype.visitAlter_message_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_partition_function.
TSqlParserVisitor.prototype.visitAlter_partition_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_partition_scheme.
TSqlParserVisitor.prototype.visitAlter_partition_scheme = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_remote_service_binding.
TSqlParserVisitor.prototype.visitAlter_remote_service_binding = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_remote_service_binding.
TSqlParserVisitor.prototype.visitCreate_remote_service_binding = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_resource_pool.
TSqlParserVisitor.prototype.visitCreate_resource_pool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_resource_governor.
TSqlParserVisitor.prototype.visitAlter_resource_governor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_db_role.
TSqlParserVisitor.prototype.visitAlter_db_role = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_db_role.
TSqlParserVisitor.prototype.visitCreate_db_role = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_route.
TSqlParserVisitor.prototype.visitCreate_route = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_rule.
TSqlParserVisitor.prototype.visitCreate_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_schema_sql.
TSqlParserVisitor.prototype.visitAlter_schema_sql = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_schema.
TSqlParserVisitor.prototype.visitCreate_schema = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_schema_azure_sql_dw_and_pdw.
TSqlParserVisitor.prototype.visitCreate_schema_azure_sql_dw_and_pdw = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_schema_azure_sql_dw_and_pdw.
TSqlParserVisitor.prototype.visitAlter_schema_azure_sql_dw_and_pdw = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_search_property_list.
TSqlParserVisitor.prototype.visitCreate_search_property_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_security_policy.
TSqlParserVisitor.prototype.visitCreate_security_policy = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_sequence.
TSqlParserVisitor.prototype.visitAlter_sequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_sequence.
TSqlParserVisitor.prototype.visitCreate_sequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_server_audit.
TSqlParserVisitor.prototype.visitAlter_server_audit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_server_audit.
TSqlParserVisitor.prototype.visitCreate_server_audit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_server_audit_specification.
TSqlParserVisitor.prototype.visitAlter_server_audit_specification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_server_audit_specification.
TSqlParserVisitor.prototype.visitCreate_server_audit_specification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_server_configuration.
TSqlParserVisitor.prototype.visitAlter_server_configuration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_server_role.
TSqlParserVisitor.prototype.visitAlter_server_role = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_server_role.
TSqlParserVisitor.prototype.visitCreate_server_role = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_server_role_pdw.
TSqlParserVisitor.prototype.visitAlter_server_role_pdw = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_service.
TSqlParserVisitor.prototype.visitAlter_service = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_service.
TSqlParserVisitor.prototype.visitCreate_service = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_service_master_key.
TSqlParserVisitor.prototype.visitAlter_service_master_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_symmetric_key.
TSqlParserVisitor.prototype.visitAlter_symmetric_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_symmetric_key.
TSqlParserVisitor.prototype.visitCreate_symmetric_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_synonym.
TSqlParserVisitor.prototype.visitCreate_synonym = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_user.
TSqlParserVisitor.prototype.visitAlter_user = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_user.
TSqlParserVisitor.prototype.visitCreate_user = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_user_azure_sql_dw.
TSqlParserVisitor.prototype.visitCreate_user_azure_sql_dw = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_user_azure_sql.
TSqlParserVisitor.prototype.visitAlter_user_azure_sql = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_workload_group.
TSqlParserVisitor.prototype.visitAlter_workload_group = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_workload_group.
TSqlParserVisitor.prototype.visitCreate_workload_group = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_xml_schema_collection.
TSqlParserVisitor.prototype.visitCreate_xml_schema_collection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_queue.
TSqlParserVisitor.prototype.visitCreate_queue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#queue_settings.
TSqlParserVisitor.prototype.visitQueue_settings = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_queue.
TSqlParserVisitor.prototype.visitAlter_queue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#queue_action.
TSqlParserVisitor.prototype.visitQueue_action = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#queue_rebuild_options.
TSqlParserVisitor.prototype.visitQueue_rebuild_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_contract.
TSqlParserVisitor.prototype.visitCreate_contract = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#conversation_statement.
TSqlParserVisitor.prototype.visitConversation_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#message_statement.
TSqlParserVisitor.prototype.visitMessage_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#merge_statement.
TSqlParserVisitor.prototype.visitMerge_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#merge_matched.
TSqlParserVisitor.prototype.visitMerge_matched = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#merge_not_matched.
TSqlParserVisitor.prototype.visitMerge_not_matched = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#delete_statement.
TSqlParserVisitor.prototype.visitDelete_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#delete_statement_from.
TSqlParserVisitor.prototype.visitDelete_statement_from = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#insert_statement.
TSqlParserVisitor.prototype.visitInsert_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#insert_statement_value.
TSqlParserVisitor.prototype.visitInsert_statement_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#receive_statement.
TSqlParserVisitor.prototype.visitReceive_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#select_statement.
TSqlParserVisitor.prototype.visitSelect_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#time.
TSqlParserVisitor.prototype.visitTime = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#update_statement.
TSqlParserVisitor.prototype.visitUpdate_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#output_clause.
TSqlParserVisitor.prototype.visitOutput_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#output_dml_list_elem.
TSqlParserVisitor.prototype.visitOutput_dml_list_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#output_column_name.
TSqlParserVisitor.prototype.visitOutput_column_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_database.
TSqlParserVisitor.prototype.visitCreate_database = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_index.
TSqlParserVisitor.prototype.visitCreate_index = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_or_alter_procedure.
TSqlParserVisitor.prototype.visitCreate_or_alter_procedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_or_alter_trigger.
TSqlParserVisitor.prototype.visitCreate_or_alter_trigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_or_alter_dml_trigger.
TSqlParserVisitor.prototype.visitCreate_or_alter_dml_trigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#dml_trigger_option.
TSqlParserVisitor.prototype.visitDml_trigger_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#dml_trigger_operation.
TSqlParserVisitor.prototype.visitDml_trigger_operation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_or_alter_ddl_trigger.
TSqlParserVisitor.prototype.visitCreate_or_alter_ddl_trigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#ddl_trigger_operation.
TSqlParserVisitor.prototype.visitDdl_trigger_operation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_or_alter_function.
TSqlParserVisitor.prototype.visitCreate_or_alter_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#func_body_returns_select.
TSqlParserVisitor.prototype.visitFunc_body_returns_select = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#func_body_returns_table.
TSqlParserVisitor.prototype.visitFunc_body_returns_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#func_body_returns_scalar.
TSqlParserVisitor.prototype.visitFunc_body_returns_scalar = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#procedure_param.
TSqlParserVisitor.prototype.visitProcedure_param = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#procedure_option.
TSqlParserVisitor.prototype.visitProcedure_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#function_option.
TSqlParserVisitor.prototype.visitFunction_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_statistics.
TSqlParserVisitor.prototype.visitCreate_statistics = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#update_statistics.
TSqlParserVisitor.prototype.visitUpdate_statistics = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_table.
TSqlParserVisitor.prototype.visitCreate_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#table_options.
TSqlParserVisitor.prototype.visitTable_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_view.
TSqlParserVisitor.prototype.visitCreate_view = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#view_attribute.
TSqlParserVisitor.prototype.visitView_attribute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_table.
TSqlParserVisitor.prototype.visitAlter_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_database.
TSqlParserVisitor.prototype.visitAlter_database = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#database_optionspec.
TSqlParserVisitor.prototype.visitDatabase_optionspec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#auto_option.
TSqlParserVisitor.prototype.visitAuto_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#change_tracking_option.
TSqlParserVisitor.prototype.visitChange_tracking_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#change_tracking_option_list.
TSqlParserVisitor.prototype.visitChange_tracking_option_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#containment_option.
TSqlParserVisitor.prototype.visitContainment_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#cursor_option.
TSqlParserVisitor.prototype.visitCursor_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#alter_endpoint.
TSqlParserVisitor.prototype.visitAlter_endpoint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#database_mirroring_option.
TSqlParserVisitor.prototype.visitDatabase_mirroring_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#mirroring_set_option.
TSqlParserVisitor.prototype.visitMirroring_set_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#mirroring_partner.
TSqlParserVisitor.prototype.visitMirroring_partner = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#mirroring_witness.
TSqlParserVisitor.prototype.visitMirroring_witness = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#witness_partner_equal.
TSqlParserVisitor.prototype.visitWitness_partner_equal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#partner_option.
TSqlParserVisitor.prototype.visitPartner_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#witness_option.
TSqlParserVisitor.prototype.visitWitness_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#witness_server.
TSqlParserVisitor.prototype.visitWitness_server = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#partner_server.
TSqlParserVisitor.prototype.visitPartner_server = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#mirroring_host_port_seperator.
TSqlParserVisitor.prototype.visitMirroring_host_port_seperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#partner_server_tcp_prefix.
TSqlParserVisitor.prototype.visitPartner_server_tcp_prefix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#port_number.
TSqlParserVisitor.prototype.visitPort_number = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#host.
TSqlParserVisitor.prototype.visitHost = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#date_correlation_optimization_option.
TSqlParserVisitor.prototype.visitDate_correlation_optimization_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#db_encryption_option.
TSqlParserVisitor.prototype.visitDb_encryption_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#db_state_option.
TSqlParserVisitor.prototype.visitDb_state_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#db_update_option.
TSqlParserVisitor.prototype.visitDb_update_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#db_user_access_option.
TSqlParserVisitor.prototype.visitDb_user_access_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#delayed_durability_option.
TSqlParserVisitor.prototype.visitDelayed_durability_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#external_access_option.
TSqlParserVisitor.prototype.visitExternal_access_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#hadr_options.
TSqlParserVisitor.prototype.visitHadr_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#mixed_page_allocation_option.
TSqlParserVisitor.prototype.visitMixed_page_allocation_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#parameterization_option.
TSqlParserVisitor.prototype.visitParameterization_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#recovery_option.
TSqlParserVisitor.prototype.visitRecovery_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#service_broker_option.
TSqlParserVisitor.prototype.visitService_broker_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#snapshot_option.
TSqlParserVisitor.prototype.visitSnapshot_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#sql_option.
TSqlParserVisitor.prototype.visitSql_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#target_recovery_time_option.
TSqlParserVisitor.prototype.visitTarget_recovery_time_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#termination.
TSqlParserVisitor.prototype.visitTermination = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_index.
TSqlParserVisitor.prototype.visitDrop_index = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_relational_or_xml_or_spatial_index.
TSqlParserVisitor.prototype.visitDrop_relational_or_xml_or_spatial_index = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_backward_compatible_index.
TSqlParserVisitor.prototype.visitDrop_backward_compatible_index = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_procedure.
TSqlParserVisitor.prototype.visitDrop_procedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_trigger.
TSqlParserVisitor.prototype.visitDrop_trigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_dml_trigger.
TSqlParserVisitor.prototype.visitDrop_dml_trigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_ddl_trigger.
TSqlParserVisitor.prototype.visitDrop_ddl_trigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_function.
TSqlParserVisitor.prototype.visitDrop_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_statistics.
TSqlParserVisitor.prototype.visitDrop_statistics = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_table.
TSqlParserVisitor.prototype.visitDrop_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_view.
TSqlParserVisitor.prototype.visitDrop_view = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_type.
TSqlParserVisitor.prototype.visitCreate_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#drop_type.
TSqlParserVisitor.prototype.visitDrop_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#rowset_function_limited.
TSqlParserVisitor.prototype.visitRowset_function_limited = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#openquery.
TSqlParserVisitor.prototype.visitOpenquery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#opendatasource.
TSqlParserVisitor.prototype.visitOpendatasource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#declare_statement.
TSqlParserVisitor.prototype.visitDeclare_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#cursor_statement.
TSqlParserVisitor.prototype.visitCursor_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#backup_database.
TSqlParserVisitor.prototype.visitBackup_database = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#backup_log.
TSqlParserVisitor.prototype.visitBackup_log = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#backup_certificate.
TSqlParserVisitor.prototype.visitBackup_certificate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#backup_master_key.
TSqlParserVisitor.prototype.visitBackup_master_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#backup_service_master_key.
TSqlParserVisitor.prototype.visitBackup_service_master_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#kill_statement.
TSqlParserVisitor.prototype.visitKill_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#kill_process.
TSqlParserVisitor.prototype.visitKill_process = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#kill_query_notification.
TSqlParserVisitor.prototype.visitKill_query_notification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#kill_stats_job.
TSqlParserVisitor.prototype.visitKill_stats_job = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#execute_statement.
TSqlParserVisitor.prototype.visitExecute_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#execute_body.
TSqlParserVisitor.prototype.visitExecute_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#execute_statement_arg.
TSqlParserVisitor.prototype.visitExecute_statement_arg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#execute_var_string.
TSqlParserVisitor.prototype.visitExecute_var_string = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#security_statement.
TSqlParserVisitor.prototype.visitSecurity_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_certificate.
TSqlParserVisitor.prototype.visitCreate_certificate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#existing_keys.
TSqlParserVisitor.prototype.visitExisting_keys = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#private_key_options.
TSqlParserVisitor.prototype.visitPrivate_key_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#generate_new_keys.
TSqlParserVisitor.prototype.visitGenerate_new_keys = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#date_options.
TSqlParserVisitor.prototype.visitDate_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#open_key.
TSqlParserVisitor.prototype.visitOpen_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#close_key.
TSqlParserVisitor.prototype.visitClose_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_key.
TSqlParserVisitor.prototype.visitCreate_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#key_options.
TSqlParserVisitor.prototype.visitKey_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#algorithm.
TSqlParserVisitor.prototype.visitAlgorithm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#encryption_mechanism.
TSqlParserVisitor.prototype.visitEncryption_mechanism = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#decryption_mechanism.
TSqlParserVisitor.prototype.visitDecryption_mechanism = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#grant_permission.
TSqlParserVisitor.prototype.visitGrant_permission = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#set_statement.
TSqlParserVisitor.prototype.visitSet_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#transaction_statement.
TSqlParserVisitor.prototype.visitTransaction_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#go_statement.
TSqlParserVisitor.prototype.visitGo_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#use_statement.
TSqlParserVisitor.prototype.visitUse_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#setuser_statement.
TSqlParserVisitor.prototype.visitSetuser_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#reconfigure_statement.
TSqlParserVisitor.prototype.visitReconfigure_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#shutdown_statement.
TSqlParserVisitor.prototype.visitShutdown_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#dbcc_clause.
TSqlParserVisitor.prototype.visitDbcc_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#dbcc_options.
TSqlParserVisitor.prototype.visitDbcc_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#execute_clause.
TSqlParserVisitor.prototype.visitExecute_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#declare_local.
TSqlParserVisitor.prototype.visitDeclare_local = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#table_type_definition.
TSqlParserVisitor.prototype.visitTable_type_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#xml_type_definition.
TSqlParserVisitor.prototype.visitXml_type_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#xml_schema_collection.
TSqlParserVisitor.prototype.visitXml_schema_collection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#column_def_table_constraints.
TSqlParserVisitor.prototype.visitColumn_def_table_constraints = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#column_def_table_constraint.
TSqlParserVisitor.prototype.visitColumn_def_table_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#column_definition.
TSqlParserVisitor.prototype.visitColumn_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#materialized_column_definition.
TSqlParserVisitor.prototype.visitMaterialized_column_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#column_constraint.
TSqlParserVisitor.prototype.visitColumn_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#table_constraint.
TSqlParserVisitor.prototype.visitTable_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#on_delete.
TSqlParserVisitor.prototype.visitOn_delete = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#on_update.
TSqlParserVisitor.prototype.visitOn_update = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#index_options.
TSqlParserVisitor.prototype.visitIndex_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#index_option.
TSqlParserVisitor.prototype.visitIndex_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#declare_cursor.
TSqlParserVisitor.prototype.visitDeclare_cursor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#declare_set_cursor_common.
TSqlParserVisitor.prototype.visitDeclare_set_cursor_common = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#declare_set_cursor_common_partial.
TSqlParserVisitor.prototype.visitDeclare_set_cursor_common_partial = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#fetch_cursor.
TSqlParserVisitor.prototype.visitFetch_cursor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#set_special.
TSqlParserVisitor.prototype.visitSet_special = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#constant_LOCAL_ID.
TSqlParserVisitor.prototype.visitConstant_LOCAL_ID = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#expression.
TSqlParserVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#primitive_expression.
TSqlParserVisitor.prototype.visitPrimitive_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#case_expression.
TSqlParserVisitor.prototype.visitCase_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#unary_operator_expression.
TSqlParserVisitor.prototype.visitUnary_operator_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#bracket_expression.
TSqlParserVisitor.prototype.visitBracket_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#constant_expression.
TSqlParserVisitor.prototype.visitConstant_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#subquery.
TSqlParserVisitor.prototype.visitSubquery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#with_expression.
TSqlParserVisitor.prototype.visitWith_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#common_table_expression.
TSqlParserVisitor.prototype.visitCommon_table_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#update_elem.
TSqlParserVisitor.prototype.visitUpdate_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#search_condition_list.
TSqlParserVisitor.prototype.visitSearch_condition_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#search_condition.
TSqlParserVisitor.prototype.visitSearch_condition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#search_condition_and.
TSqlParserVisitor.prototype.visitSearch_condition_and = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#search_condition_not.
TSqlParserVisitor.prototype.visitSearch_condition_not = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#predicate.
TSqlParserVisitor.prototype.visitPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#query_expression.
TSqlParserVisitor.prototype.visitQuery_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#sql_union.
TSqlParserVisitor.prototype.visitSql_union = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#query_specification.
TSqlParserVisitor.prototype.visitQuery_specification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#top_clause.
TSqlParserVisitor.prototype.visitTop_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#top_percent.
TSqlParserVisitor.prototype.visitTop_percent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#top_count.
TSqlParserVisitor.prototype.visitTop_count = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#order_by_clause.
TSqlParserVisitor.prototype.visitOrder_by_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#for_clause.
TSqlParserVisitor.prototype.visitFor_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#xml_common_directives.
TSqlParserVisitor.prototype.visitXml_common_directives = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#order_by_expression.
TSqlParserVisitor.prototype.visitOrder_by_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#group_by_item.
TSqlParserVisitor.prototype.visitGroup_by_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#option_clause.
TSqlParserVisitor.prototype.visitOption_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#option.
TSqlParserVisitor.prototype.visitOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#optimize_for_arg.
TSqlParserVisitor.prototype.visitOptimize_for_arg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#select_list.
TSqlParserVisitor.prototype.visitSelect_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#udt_method_arguments.
TSqlParserVisitor.prototype.visitUdt_method_arguments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#asterisk.
TSqlParserVisitor.prototype.visitAsterisk = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#column_elem.
TSqlParserVisitor.prototype.visitColumn_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#udt_elem.
TSqlParserVisitor.prototype.visitUdt_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#expression_elem.
TSqlParserVisitor.prototype.visitExpression_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#select_list_elem.
TSqlParserVisitor.prototype.visitSelect_list_elem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#table_sources.
TSqlParserVisitor.prototype.visitTable_sources = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#table_source.
TSqlParserVisitor.prototype.visitTable_source = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#table_source_item_joined.
TSqlParserVisitor.prototype.visitTable_source_item_joined = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#table_source_item.
TSqlParserVisitor.prototype.visitTable_source_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#open_xml.
TSqlParserVisitor.prototype.visitOpen_xml = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#schema_declaration.
TSqlParserVisitor.prototype.visitSchema_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#column_declaration.
TSqlParserVisitor.prototype.visitColumn_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#change_table.
TSqlParserVisitor.prototype.visitChange_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#join_part.
TSqlParserVisitor.prototype.visitJoin_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#pivot_clause.
TSqlParserVisitor.prototype.visitPivot_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#unpivot_clause.
TSqlParserVisitor.prototype.visitUnpivot_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#full_column_name_list.
TSqlParserVisitor.prototype.visitFull_column_name_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#table_name_with_hint.
TSqlParserVisitor.prototype.visitTable_name_with_hint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#rowset_function.
TSqlParserVisitor.prototype.visitRowset_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#bulk_option.
TSqlParserVisitor.prototype.visitBulk_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#derived_table.
TSqlParserVisitor.prototype.visitDerived_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#BINARY_CHECKSUM.
TSqlParserVisitor.prototype.visitBINARY_CHECKSUM = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#CAST.
TSqlParserVisitor.prototype.visitCAST = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#CONVERT.
TSqlParserVisitor.prototype.visitCONVERT = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#CHECKSUM.
TSqlParserVisitor.prototype.visitCHECKSUM = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#COALESCE.
TSqlParserVisitor.prototype.visitCOALESCE = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#CURRENT_TIMESTAMP.
TSqlParserVisitor.prototype.visitCURRENT_TIMESTAMP = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#CURRENT_USER.
TSqlParserVisitor.prototype.visitCURRENT_USER = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#DATEADD.
TSqlParserVisitor.prototype.visitDATEADD = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#DATEDIFF.
TSqlParserVisitor.prototype.visitDATEDIFF = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#DATENAME.
TSqlParserVisitor.prototype.visitDATENAME = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#DATEPART.
TSqlParserVisitor.prototype.visitDATEPART = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#GETDATE.
TSqlParserVisitor.prototype.visitGETDATE = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#GETUTCDATE.
TSqlParserVisitor.prototype.visitGETUTCDATE = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#IDENTITY.
TSqlParserVisitor.prototype.visitIDENTITY = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#MIN_ACTIVE_ROWVERSION.
TSqlParserVisitor.prototype.visitMIN_ACTIVE_ROWVERSION = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#NULLIF.
TSqlParserVisitor.prototype.visitNULLIF = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#STUFF.
TSqlParserVisitor.prototype.visitSTUFF = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#SESSION_USER.
TSqlParserVisitor.prototype.visitSESSION_USER = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#SYSTEM_USER.
TSqlParserVisitor.prototype.visitSYSTEM_USER = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#ISNULL.
TSqlParserVisitor.prototype.visitISNULL = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#XML_DATA_TYPE_FUNC.
TSqlParserVisitor.prototype.visitXML_DATA_TYPE_FUNC = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#IFF.
TSqlParserVisitor.prototype.visitIFF = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#RANKING_WINDOWED_FUNC.
TSqlParserVisitor.prototype.visitRANKING_WINDOWED_FUNC = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#AGGREGATE_WINDOWED_FUNC.
TSqlParserVisitor.prototype.visitAGGREGATE_WINDOWED_FUNC = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#ANALYTIC_WINDOWED_FUNC.
TSqlParserVisitor.prototype.visitANALYTIC_WINDOWED_FUNC = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#SCALAR_FUNCTION.
TSqlParserVisitor.prototype.visitSCALAR_FUNCTION = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#STRINGAGG.
TSqlParserVisitor.prototype.visitSTRINGAGG = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#xml_data_type_methods.
TSqlParserVisitor.prototype.visitXml_data_type_methods = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#value_method.
TSqlParserVisitor.prototype.visitValue_method = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#query_method.
TSqlParserVisitor.prototype.visitQuery_method = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#exist_method.
TSqlParserVisitor.prototype.visitExist_method = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#modify_method.
TSqlParserVisitor.prototype.visitModify_method = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#nodes_method.
TSqlParserVisitor.prototype.visitNodes_method = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#switch_section.
TSqlParserVisitor.prototype.visitSwitch_section = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#switch_search_condition_section.
TSqlParserVisitor.prototype.visitSwitch_search_condition_section = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#as_column_alias.
TSqlParserVisitor.prototype.visitAs_column_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#as_table_alias.
TSqlParserVisitor.prototype.visitAs_table_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#table_alias.
TSqlParserVisitor.prototype.visitTable_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#with_table_hints.
TSqlParserVisitor.prototype.visitWith_table_hints = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#insert_with_table_hints.
TSqlParserVisitor.prototype.visitInsert_with_table_hints = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#table_hint.
TSqlParserVisitor.prototype.visitTable_hint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#index_value.
TSqlParserVisitor.prototype.visitIndex_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#column_alias_list.
TSqlParserVisitor.prototype.visitColumn_alias_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#column_alias.
TSqlParserVisitor.prototype.visitColumn_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#table_value_constructor.
TSqlParserVisitor.prototype.visitTable_value_constructor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#expression_list.
TSqlParserVisitor.prototype.visitExpression_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#ranking_windowed_function.
TSqlParserVisitor.prototype.visitRanking_windowed_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#aggregate_windowed_function.
TSqlParserVisitor.prototype.visitAggregate_windowed_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#analytic_windowed_function.
TSqlParserVisitor.prototype.visitAnalytic_windowed_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#all_distinct_expression.
TSqlParserVisitor.prototype.visitAll_distinct_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#over_clause.
TSqlParserVisitor.prototype.visitOver_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#row_or_range_clause.
TSqlParserVisitor.prototype.visitRow_or_range_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#window_frame_extent.
TSqlParserVisitor.prototype.visitWindow_frame_extent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#window_frame_bound.
TSqlParserVisitor.prototype.visitWindow_frame_bound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#window_frame_preceding.
TSqlParserVisitor.prototype.visitWindow_frame_preceding = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#window_frame_following.
TSqlParserVisitor.prototype.visitWindow_frame_following = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#create_database_option.
TSqlParserVisitor.prototype.visitCreate_database_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#database_filestream_option.
TSqlParserVisitor.prototype.visitDatabase_filestream_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#database_file_spec.
TSqlParserVisitor.prototype.visitDatabase_file_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#file_group.
TSqlParserVisitor.prototype.visitFile_group = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#file_spec.
TSqlParserVisitor.prototype.visitFile_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#entity_name.
TSqlParserVisitor.prototype.visitEntity_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#entity_name_for_azure_dw.
TSqlParserVisitor.prototype.visitEntity_name_for_azure_dw = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#entity_name_for_parallel_dw.
TSqlParserVisitor.prototype.visitEntity_name_for_parallel_dw = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#full_table_name.
TSqlParserVisitor.prototype.visitFull_table_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#table_name.
TSqlParserVisitor.prototype.visitTable_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#simple_name.
TSqlParserVisitor.prototype.visitSimple_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#func_proc_name_schema.
TSqlParserVisitor.prototype.visitFunc_proc_name_schema = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#func_proc_name_database_schema.
TSqlParserVisitor.prototype.visitFunc_proc_name_database_schema = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#func_proc_name_server_database_schema.
TSqlParserVisitor.prototype.visitFunc_proc_name_server_database_schema = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#ddl_object.
TSqlParserVisitor.prototype.visitDdl_object = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#full_column_name.
TSqlParserVisitor.prototype.visitFull_column_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#column_name_list_with_order.
TSqlParserVisitor.prototype.visitColumn_name_list_with_order = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#column_name_list.
TSqlParserVisitor.prototype.visitColumn_name_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#cursor_name.
TSqlParserVisitor.prototype.visitCursor_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#on_off.
TSqlParserVisitor.prototype.visitOn_off = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#clustered.
TSqlParserVisitor.prototype.visitClustered = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#null_notnull.
TSqlParserVisitor.prototype.visitNull_notnull = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#null_or_default.
TSqlParserVisitor.prototype.visitNull_or_default = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#scalar_function_name.
TSqlParserVisitor.prototype.visitScalar_function_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#begin_conversation_timer.
TSqlParserVisitor.prototype.visitBegin_conversation_timer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#begin_conversation_dialog.
TSqlParserVisitor.prototype.visitBegin_conversation_dialog = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#contract_name.
TSqlParserVisitor.prototype.visitContract_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#service_name.
TSqlParserVisitor.prototype.visitService_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#end_conversation.
TSqlParserVisitor.prototype.visitEnd_conversation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#waitfor_conversation.
TSqlParserVisitor.prototype.visitWaitfor_conversation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#get_conversation.
TSqlParserVisitor.prototype.visitGet_conversation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#queue_id.
TSqlParserVisitor.prototype.visitQueue_id = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#send_conversation.
TSqlParserVisitor.prototype.visitSend_conversation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#data_type.
TSqlParserVisitor.prototype.visitData_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#default_value.
TSqlParserVisitor.prototype.visitDefault_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#constant.
TSqlParserVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#sign.
TSqlParserVisitor.prototype.visitSign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#id.
TSqlParserVisitor.prototype.visitId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#simple_id.
TSqlParserVisitor.prototype.visitSimple_id = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#comparison_operator.
TSqlParserVisitor.prototype.visitComparison_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#assignment_operator.
TSqlParserVisitor.prototype.visitAssignment_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TSqlParser#file_size.
TSqlParserVisitor.prototype.visitFile_size = function(ctx) {
  return this.visitChildren(ctx);
};



exports.TSqlParserVisitor = TSqlParserVisitor;