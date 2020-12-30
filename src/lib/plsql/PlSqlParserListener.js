// Generated from /Users/ziv/Workspace/dt-sql-parser/src/grammar/plsql/PlSqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by PlSqlParser.
function PlSqlParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

PlSqlParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
PlSqlParserListener.prototype.constructor = PlSqlParserListener;

// Enter a parse tree produced by PlSqlParser#program.
PlSqlParserListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#program.
PlSqlParserListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sql_script.
PlSqlParserListener.prototype.enterSql_script = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sql_script.
PlSqlParserListener.prototype.exitSql_script = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unit_statement.
PlSqlParserListener.prototype.enterUnit_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unit_statement.
PlSqlParserListener.prototype.exitUnit_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_function.
PlSqlParserListener.prototype.enterDrop_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_function.
PlSqlParserListener.prototype.exitDrop_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_function.
PlSqlParserListener.prototype.enterAlter_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_function.
PlSqlParserListener.prototype.exitAlter_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_function_body.
PlSqlParserListener.prototype.enterCreate_function_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_function_body.
PlSqlParserListener.prototype.exitCreate_function_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#parallel_enable_clause.
PlSqlParserListener.prototype.enterParallel_enable_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#parallel_enable_clause.
PlSqlParserListener.prototype.exitParallel_enable_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partition_by_clause.
PlSqlParserListener.prototype.enterPartition_by_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partition_by_clause.
PlSqlParserListener.prototype.exitPartition_by_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#result_cache_clause.
PlSqlParserListener.prototype.enterResult_cache_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#result_cache_clause.
PlSqlParserListener.prototype.exitResult_cache_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#relies_on_part.
PlSqlParserListener.prototype.enterRelies_on_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#relies_on_part.
PlSqlParserListener.prototype.exitRelies_on_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#streaming_clause.
PlSqlParserListener.prototype.enterStreaming_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#streaming_clause.
PlSqlParserListener.prototype.exitStreaming_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_package.
PlSqlParserListener.prototype.enterDrop_package = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_package.
PlSqlParserListener.prototype.exitDrop_package = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_package.
PlSqlParserListener.prototype.enterAlter_package = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_package.
PlSqlParserListener.prototype.exitAlter_package = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_package.
PlSqlParserListener.prototype.enterCreate_package = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_package.
PlSqlParserListener.prototype.exitCreate_package = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_package_body.
PlSqlParserListener.prototype.enterCreate_package_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_package_body.
PlSqlParserListener.prototype.exitCreate_package_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#package_obj_spec.
PlSqlParserListener.prototype.enterPackage_obj_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#package_obj_spec.
PlSqlParserListener.prototype.exitPackage_obj_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#procedure_spec.
PlSqlParserListener.prototype.enterProcedure_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#procedure_spec.
PlSqlParserListener.prototype.exitProcedure_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_spec.
PlSqlParserListener.prototype.enterFunction_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_spec.
PlSqlParserListener.prototype.exitFunction_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#package_obj_body.
PlSqlParserListener.prototype.enterPackage_obj_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#package_obj_body.
PlSqlParserListener.prototype.exitPackage_obj_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_procedure.
PlSqlParserListener.prototype.enterDrop_procedure = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_procedure.
PlSqlParserListener.prototype.exitDrop_procedure = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_procedure.
PlSqlParserListener.prototype.enterAlter_procedure = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_procedure.
PlSqlParserListener.prototype.exitAlter_procedure = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_body.
PlSqlParserListener.prototype.enterFunction_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_body.
PlSqlParserListener.prototype.exitFunction_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#procedure_body.
PlSqlParserListener.prototype.enterProcedure_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#procedure_body.
PlSqlParserListener.prototype.exitProcedure_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_procedure_body.
PlSqlParserListener.prototype.enterCreate_procedure_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_procedure_body.
PlSqlParserListener.prototype.exitCreate_procedure_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_trigger.
PlSqlParserListener.prototype.enterDrop_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_trigger.
PlSqlParserListener.prototype.exitDrop_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_trigger.
PlSqlParserListener.prototype.enterAlter_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_trigger.
PlSqlParserListener.prototype.exitAlter_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_trigger.
PlSqlParserListener.prototype.enterCreate_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_trigger.
PlSqlParserListener.prototype.exitCreate_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#trigger_follows_clause.
PlSqlParserListener.prototype.enterTrigger_follows_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#trigger_follows_clause.
PlSqlParserListener.prototype.exitTrigger_follows_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#trigger_when_clause.
PlSqlParserListener.prototype.enterTrigger_when_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#trigger_when_clause.
PlSqlParserListener.prototype.exitTrigger_when_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#simple_dml_trigger.
PlSqlParserListener.prototype.enterSimple_dml_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#simple_dml_trigger.
PlSqlParserListener.prototype.exitSimple_dml_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#for_each_row.
PlSqlParserListener.prototype.enterFor_each_row = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#for_each_row.
PlSqlParserListener.prototype.exitFor_each_row = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#compound_dml_trigger.
PlSqlParserListener.prototype.enterCompound_dml_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#compound_dml_trigger.
PlSqlParserListener.prototype.exitCompound_dml_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#non_dml_trigger.
PlSqlParserListener.prototype.enterNon_dml_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#non_dml_trigger.
PlSqlParserListener.prototype.exitNon_dml_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#trigger_body.
PlSqlParserListener.prototype.enterTrigger_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#trigger_body.
PlSqlParserListener.prototype.exitTrigger_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#routine_clause.
PlSqlParserListener.prototype.enterRoutine_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#routine_clause.
PlSqlParserListener.prototype.exitRoutine_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#compound_trigger_block.
PlSqlParserListener.prototype.enterCompound_trigger_block = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#compound_trigger_block.
PlSqlParserListener.prototype.exitCompound_trigger_block = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#timing_point_section.
PlSqlParserListener.prototype.enterTiming_point_section = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#timing_point_section.
PlSqlParserListener.prototype.exitTiming_point_section = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#non_dml_event.
PlSqlParserListener.prototype.enterNon_dml_event = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#non_dml_event.
PlSqlParserListener.prototype.exitNon_dml_event = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dml_event_clause.
PlSqlParserListener.prototype.enterDml_event_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dml_event_clause.
PlSqlParserListener.prototype.exitDml_event_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dml_event_element.
PlSqlParserListener.prototype.enterDml_event_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dml_event_element.
PlSqlParserListener.prototype.exitDml_event_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dml_event_nested_clause.
PlSqlParserListener.prototype.enterDml_event_nested_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dml_event_nested_clause.
PlSqlParserListener.prototype.exitDml_event_nested_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#referencing_clause.
PlSqlParserListener.prototype.enterReferencing_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#referencing_clause.
PlSqlParserListener.prototype.exitReferencing_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#referencing_element.
PlSqlParserListener.prototype.enterReferencing_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#referencing_element.
PlSqlParserListener.prototype.exitReferencing_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_type.
PlSqlParserListener.prototype.enterDrop_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_type.
PlSqlParserListener.prototype.exitDrop_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_type.
PlSqlParserListener.prototype.enterAlter_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_type.
PlSqlParserListener.prototype.exitAlter_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#compile_type_clause.
PlSqlParserListener.prototype.enterCompile_type_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#compile_type_clause.
PlSqlParserListener.prototype.exitCompile_type_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#replace_type_clause.
PlSqlParserListener.prototype.enterReplace_type_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#replace_type_clause.
PlSqlParserListener.prototype.exitReplace_type_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_method_spec.
PlSqlParserListener.prototype.enterAlter_method_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_method_spec.
PlSqlParserListener.prototype.exitAlter_method_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_method_element.
PlSqlParserListener.prototype.enterAlter_method_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_method_element.
PlSqlParserListener.prototype.exitAlter_method_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_attribute_definition.
PlSqlParserListener.prototype.enterAlter_attribute_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_attribute_definition.
PlSqlParserListener.prototype.exitAlter_attribute_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#attribute_definition.
PlSqlParserListener.prototype.enterAttribute_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#attribute_definition.
PlSqlParserListener.prototype.exitAttribute_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_collection_clauses.
PlSqlParserListener.prototype.enterAlter_collection_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_collection_clauses.
PlSqlParserListener.prototype.exitAlter_collection_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dependent_handling_clause.
PlSqlParserListener.prototype.enterDependent_handling_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dependent_handling_clause.
PlSqlParserListener.prototype.exitDependent_handling_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dependent_exceptions_part.
PlSqlParserListener.prototype.enterDependent_exceptions_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dependent_exceptions_part.
PlSqlParserListener.prototype.exitDependent_exceptions_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_type.
PlSqlParserListener.prototype.enterCreate_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_type.
PlSqlParserListener.prototype.exitCreate_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_definition.
PlSqlParserListener.prototype.enterType_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_definition.
PlSqlParserListener.prototype.exitType_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_type_def.
PlSqlParserListener.prototype.enterObject_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_type_def.
PlSqlParserListener.prototype.exitObject_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_as_part.
PlSqlParserListener.prototype.enterObject_as_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_as_part.
PlSqlParserListener.prototype.exitObject_as_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_under_part.
PlSqlParserListener.prototype.enterObject_under_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_under_part.
PlSqlParserListener.prototype.exitObject_under_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#nested_table_type_def.
PlSqlParserListener.prototype.enterNested_table_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#nested_table_type_def.
PlSqlParserListener.prototype.exitNested_table_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sqlj_object_type.
PlSqlParserListener.prototype.enterSqlj_object_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sqlj_object_type.
PlSqlParserListener.prototype.exitSqlj_object_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_body.
PlSqlParserListener.prototype.enterType_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_body.
PlSqlParserListener.prototype.exitType_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_body_elements.
PlSqlParserListener.prototype.enterType_body_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_body_elements.
PlSqlParserListener.prototype.exitType_body_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#map_order_func_declaration.
PlSqlParserListener.prototype.enterMap_order_func_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#map_order_func_declaration.
PlSqlParserListener.prototype.exitMap_order_func_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subprog_decl_in_type.
PlSqlParserListener.prototype.enterSubprog_decl_in_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subprog_decl_in_type.
PlSqlParserListener.prototype.exitSubprog_decl_in_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#proc_decl_in_type.
PlSqlParserListener.prototype.enterProc_decl_in_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#proc_decl_in_type.
PlSqlParserListener.prototype.exitProc_decl_in_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#func_decl_in_type.
PlSqlParserListener.prototype.enterFunc_decl_in_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#func_decl_in_type.
PlSqlParserListener.prototype.exitFunc_decl_in_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#constructor_declaration.
PlSqlParserListener.prototype.enterConstructor_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#constructor_declaration.
PlSqlParserListener.prototype.exitConstructor_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modifier_clause.
PlSqlParserListener.prototype.enterModifier_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modifier_clause.
PlSqlParserListener.prototype.exitModifier_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_member_spec.
PlSqlParserListener.prototype.enterObject_member_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_member_spec.
PlSqlParserListener.prototype.exitObject_member_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sqlj_object_type_attr.
PlSqlParserListener.prototype.enterSqlj_object_type_attr = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sqlj_object_type_attr.
PlSqlParserListener.prototype.exitSqlj_object_type_attr = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#element_spec.
PlSqlParserListener.prototype.enterElement_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#element_spec.
PlSqlParserListener.prototype.exitElement_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#element_spec_options.
PlSqlParserListener.prototype.enterElement_spec_options = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#element_spec_options.
PlSqlParserListener.prototype.exitElement_spec_options = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subprogram_spec.
PlSqlParserListener.prototype.enterSubprogram_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subprogram_spec.
PlSqlParserListener.prototype.exitSubprogram_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#overriding_subprogram_spec.
PlSqlParserListener.prototype.enterOverriding_subprogram_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#overriding_subprogram_spec.
PlSqlParserListener.prototype.exitOverriding_subprogram_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#overriding_function_spec.
PlSqlParserListener.prototype.enterOverriding_function_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#overriding_function_spec.
PlSqlParserListener.prototype.exitOverriding_function_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_procedure_spec.
PlSqlParserListener.prototype.enterType_procedure_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_procedure_spec.
PlSqlParserListener.prototype.exitType_procedure_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_function_spec.
PlSqlParserListener.prototype.enterType_function_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_function_spec.
PlSqlParserListener.prototype.exitType_function_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#constructor_spec.
PlSqlParserListener.prototype.enterConstructor_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#constructor_spec.
PlSqlParserListener.prototype.exitConstructor_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#map_order_function_spec.
PlSqlParserListener.prototype.enterMap_order_function_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#map_order_function_spec.
PlSqlParserListener.prototype.exitMap_order_function_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pragma_clause.
PlSqlParserListener.prototype.enterPragma_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pragma_clause.
PlSqlParserListener.prototype.exitPragma_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pragma_elements.
PlSqlParserListener.prototype.enterPragma_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pragma_elements.
PlSqlParserListener.prototype.exitPragma_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_elements_parameter.
PlSqlParserListener.prototype.enterType_elements_parameter = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_elements_parameter.
PlSqlParserListener.prototype.exitType_elements_parameter = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_sequence.
PlSqlParserListener.prototype.enterDrop_sequence = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_sequence.
PlSqlParserListener.prototype.exitDrop_sequence = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_sequence.
PlSqlParserListener.prototype.enterAlter_sequence = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_sequence.
PlSqlParserListener.prototype.exitAlter_sequence = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_session.
PlSqlParserListener.prototype.enterAlter_session = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_session.
PlSqlParserListener.prototype.exitAlter_session = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_session_set_clause.
PlSqlParserListener.prototype.enterAlter_session_set_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_session_set_clause.
PlSqlParserListener.prototype.exitAlter_session_set_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_sequence.
PlSqlParserListener.prototype.enterCreate_sequence = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_sequence.
PlSqlParserListener.prototype.exitCreate_sequence = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sequence_spec.
PlSqlParserListener.prototype.enterSequence_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sequence_spec.
PlSqlParserListener.prototype.exitSequence_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sequence_start_clause.
PlSqlParserListener.prototype.enterSequence_start_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sequence_start_clause.
PlSqlParserListener.prototype.exitSequence_start_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_index.
PlSqlParserListener.prototype.enterCreate_index = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_index.
PlSqlParserListener.prototype.exitCreate_index = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cluster_index_clause.
PlSqlParserListener.prototype.enterCluster_index_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cluster_index_clause.
PlSqlParserListener.prototype.exitCluster_index_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cluster_name.
PlSqlParserListener.prototype.enterCluster_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cluster_name.
PlSqlParserListener.prototype.exitCluster_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_index_clause.
PlSqlParserListener.prototype.enterTable_index_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_index_clause.
PlSqlParserListener.prototype.exitTable_index_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#bitmap_join_index_clause.
PlSqlParserListener.prototype.enterBitmap_join_index_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#bitmap_join_index_clause.
PlSqlParserListener.prototype.exitBitmap_join_index_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_expr.
PlSqlParserListener.prototype.enterIndex_expr = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_expr.
PlSqlParserListener.prototype.exitIndex_expr = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_properties.
PlSqlParserListener.prototype.enterIndex_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_properties.
PlSqlParserListener.prototype.exitIndex_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#domain_index_clause.
PlSqlParserListener.prototype.enterDomain_index_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#domain_index_clause.
PlSqlParserListener.prototype.exitDomain_index_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#local_domain_index_clause.
PlSqlParserListener.prototype.enterLocal_domain_index_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#local_domain_index_clause.
PlSqlParserListener.prototype.exitLocal_domain_index_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlindex_clause.
PlSqlParserListener.prototype.enterXmlindex_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlindex_clause.
PlSqlParserListener.prototype.exitXmlindex_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#local_xmlindex_clause.
PlSqlParserListener.prototype.enterLocal_xmlindex_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#local_xmlindex_clause.
PlSqlParserListener.prototype.exitLocal_xmlindex_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#global_partitioned_index.
PlSqlParserListener.prototype.enterGlobal_partitioned_index = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#global_partitioned_index.
PlSqlParserListener.prototype.exitGlobal_partitioned_index = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_partitioning_clause.
PlSqlParserListener.prototype.enterIndex_partitioning_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_partitioning_clause.
PlSqlParserListener.prototype.exitIndex_partitioning_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#local_partitioned_index.
PlSqlParserListener.prototype.enterLocal_partitioned_index = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#local_partitioned_index.
PlSqlParserListener.prototype.exitLocal_partitioned_index = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#on_range_partitioned_table.
PlSqlParserListener.prototype.enterOn_range_partitioned_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#on_range_partitioned_table.
PlSqlParserListener.prototype.exitOn_range_partitioned_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#on_list_partitioned_table.
PlSqlParserListener.prototype.enterOn_list_partitioned_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#on_list_partitioned_table.
PlSqlParserListener.prototype.exitOn_list_partitioned_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partitioned_table.
PlSqlParserListener.prototype.enterPartitioned_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partitioned_table.
PlSqlParserListener.prototype.exitPartitioned_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#on_hash_partitioned_table.
PlSqlParserListener.prototype.enterOn_hash_partitioned_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#on_hash_partitioned_table.
PlSqlParserListener.prototype.exitOn_hash_partitioned_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#on_hash_partitioned_clause.
PlSqlParserListener.prototype.enterOn_hash_partitioned_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#on_hash_partitioned_clause.
PlSqlParserListener.prototype.exitOn_hash_partitioned_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#on_comp_partitioned_table.
PlSqlParserListener.prototype.enterOn_comp_partitioned_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#on_comp_partitioned_table.
PlSqlParserListener.prototype.exitOn_comp_partitioned_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#on_comp_partitioned_clause.
PlSqlParserListener.prototype.enterOn_comp_partitioned_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#on_comp_partitioned_clause.
PlSqlParserListener.prototype.exitOn_comp_partitioned_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_subpartition_clause.
PlSqlParserListener.prototype.enterIndex_subpartition_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_subpartition_clause.
PlSqlParserListener.prototype.exitIndex_subpartition_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_subpartition_subclause.
PlSqlParserListener.prototype.enterIndex_subpartition_subclause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_subpartition_subclause.
PlSqlParserListener.prototype.exitIndex_subpartition_subclause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#odci_parameters.
PlSqlParserListener.prototype.enterOdci_parameters = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#odci_parameters.
PlSqlParserListener.prototype.exitOdci_parameters = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#indextype.
PlSqlParserListener.prototype.enterIndextype = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#indextype.
PlSqlParserListener.prototype.exitIndextype = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_index.
PlSqlParserListener.prototype.enterAlter_index = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_index.
PlSqlParserListener.prototype.exitAlter_index = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_index_ops_set1.
PlSqlParserListener.prototype.enterAlter_index_ops_set1 = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_index_ops_set1.
PlSqlParserListener.prototype.exitAlter_index_ops_set1 = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_index_ops_set2.
PlSqlParserListener.prototype.enterAlter_index_ops_set2 = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_index_ops_set2.
PlSqlParserListener.prototype.exitAlter_index_ops_set2 = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#visible_or_invisible.
PlSqlParserListener.prototype.enterVisible_or_invisible = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#visible_or_invisible.
PlSqlParserListener.prototype.exitVisible_or_invisible = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#monitoring_nomonitoring.
PlSqlParserListener.prototype.enterMonitoring_nomonitoring = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#monitoring_nomonitoring.
PlSqlParserListener.prototype.exitMonitoring_nomonitoring = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rebuild_clause.
PlSqlParserListener.prototype.enterRebuild_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rebuild_clause.
PlSqlParserListener.prototype.exitRebuild_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_index_partitioning.
PlSqlParserListener.prototype.enterAlter_index_partitioning = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_index_partitioning.
PlSqlParserListener.prototype.exitAlter_index_partitioning = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_index_default_attrs.
PlSqlParserListener.prototype.enterModify_index_default_attrs = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_index_default_attrs.
PlSqlParserListener.prototype.exitModify_index_default_attrs = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_hash_index_partition.
PlSqlParserListener.prototype.enterAdd_hash_index_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_hash_index_partition.
PlSqlParserListener.prototype.exitAdd_hash_index_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#coalesce_index_partition.
PlSqlParserListener.prototype.enterCoalesce_index_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#coalesce_index_partition.
PlSqlParserListener.prototype.exitCoalesce_index_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_index_partition.
PlSqlParserListener.prototype.enterModify_index_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_index_partition.
PlSqlParserListener.prototype.exitModify_index_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_index_partitions_ops.
PlSqlParserListener.prototype.enterModify_index_partitions_ops = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_index_partitions_ops.
PlSqlParserListener.prototype.exitModify_index_partitions_ops = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rename_index_partition.
PlSqlParserListener.prototype.enterRename_index_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rename_index_partition.
PlSqlParserListener.prototype.exitRename_index_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_index_partition.
PlSqlParserListener.prototype.enterDrop_index_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_index_partition.
PlSqlParserListener.prototype.exitDrop_index_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#split_index_partition.
PlSqlParserListener.prototype.enterSplit_index_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#split_index_partition.
PlSqlParserListener.prototype.exitSplit_index_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_partition_description.
PlSqlParserListener.prototype.enterIndex_partition_description = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_partition_description.
PlSqlParserListener.prototype.exitIndex_partition_description = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_index_subpartition.
PlSqlParserListener.prototype.enterModify_index_subpartition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_index_subpartition.
PlSqlParserListener.prototype.exitModify_index_subpartition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partition_name_old.
PlSqlParserListener.prototype.enterPartition_name_old = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partition_name_old.
PlSqlParserListener.prototype.exitPartition_name_old = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#new_partition_name.
PlSqlParserListener.prototype.enterNew_partition_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#new_partition_name.
PlSqlParserListener.prototype.exitNew_partition_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#new_index_name.
PlSqlParserListener.prototype.enterNew_index_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#new_index_name.
PlSqlParserListener.prototype.exitNew_index_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_user.
PlSqlParserListener.prototype.enterCreate_user = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_user.
PlSqlParserListener.prototype.exitCreate_user = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_user.
PlSqlParserListener.prototype.enterAlter_user = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_user.
PlSqlParserListener.prototype.exitAlter_user = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_identified_by.
PlSqlParserListener.prototype.enterAlter_identified_by = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_identified_by.
PlSqlParserListener.prototype.exitAlter_identified_by = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#identified_by.
PlSqlParserListener.prototype.enterIdentified_by = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#identified_by.
PlSqlParserListener.prototype.exitIdentified_by = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#identified_other_clause.
PlSqlParserListener.prototype.enterIdentified_other_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#identified_other_clause.
PlSqlParserListener.prototype.exitIdentified_other_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#user_tablespace_clause.
PlSqlParserListener.prototype.enterUser_tablespace_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#user_tablespace_clause.
PlSqlParserListener.prototype.exitUser_tablespace_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#quota_clause.
PlSqlParserListener.prototype.enterQuota_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#quota_clause.
PlSqlParserListener.prototype.exitQuota_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#profile_clause.
PlSqlParserListener.prototype.enterProfile_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#profile_clause.
PlSqlParserListener.prototype.exitProfile_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#role_clause.
PlSqlParserListener.prototype.enterRole_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#role_clause.
PlSqlParserListener.prototype.exitRole_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#user_default_role_clause.
PlSqlParserListener.prototype.enterUser_default_role_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#user_default_role_clause.
PlSqlParserListener.prototype.exitUser_default_role_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#password_expire_clause.
PlSqlParserListener.prototype.enterPassword_expire_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#password_expire_clause.
PlSqlParserListener.prototype.exitPassword_expire_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#user_lock_clause.
PlSqlParserListener.prototype.enterUser_lock_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#user_lock_clause.
PlSqlParserListener.prototype.exitUser_lock_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#user_editions_clause.
PlSqlParserListener.prototype.enterUser_editions_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#user_editions_clause.
PlSqlParserListener.prototype.exitUser_editions_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_user_editions_clause.
PlSqlParserListener.prototype.enterAlter_user_editions_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_user_editions_clause.
PlSqlParserListener.prototype.exitAlter_user_editions_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#proxy_clause.
PlSqlParserListener.prototype.enterProxy_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#proxy_clause.
PlSqlParserListener.prototype.exitProxy_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#container_names.
PlSqlParserListener.prototype.enterContainer_names = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#container_names.
PlSqlParserListener.prototype.exitContainer_names = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#set_container_data.
PlSqlParserListener.prototype.enterSet_container_data = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#set_container_data.
PlSqlParserListener.prototype.exitSet_container_data = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_rem_container_data.
PlSqlParserListener.prototype.enterAdd_rem_container_data = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_rem_container_data.
PlSqlParserListener.prototype.exitAdd_rem_container_data = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#container_data_clause.
PlSqlParserListener.prototype.enterContainer_data_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#container_data_clause.
PlSqlParserListener.prototype.exitContainer_data_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#analyze.
PlSqlParserListener.prototype.enterAnalyze = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#analyze.
PlSqlParserListener.prototype.exitAnalyze = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partition_extention_clause.
PlSqlParserListener.prototype.enterPartition_extention_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partition_extention_clause.
PlSqlParserListener.prototype.exitPartition_extention_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#validation_clauses.
PlSqlParserListener.prototype.enterValidation_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#validation_clauses.
PlSqlParserListener.prototype.exitValidation_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#online_or_offline.
PlSqlParserListener.prototype.enterOnline_or_offline = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#online_or_offline.
PlSqlParserListener.prototype.exitOnline_or_offline = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#into_clause1.
PlSqlParserListener.prototype.enterInto_clause1 = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#into_clause1.
PlSqlParserListener.prototype.exitInto_clause1 = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partition_key_value.
PlSqlParserListener.prototype.enterPartition_key_value = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partition_key_value.
PlSqlParserListener.prototype.exitPartition_key_value = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subpartition_key_value.
PlSqlParserListener.prototype.enterSubpartition_key_value = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subpartition_key_value.
PlSqlParserListener.prototype.exitSubpartition_key_value = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#associate_statistics.
PlSqlParserListener.prototype.enterAssociate_statistics = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#associate_statistics.
PlSqlParserListener.prototype.exitAssociate_statistics = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_association.
PlSqlParserListener.prototype.enterColumn_association = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_association.
PlSqlParserListener.prototype.exitColumn_association = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_association.
PlSqlParserListener.prototype.enterFunction_association = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_association.
PlSqlParserListener.prototype.exitFunction_association = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#indextype_name.
PlSqlParserListener.prototype.enterIndextype_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#indextype_name.
PlSqlParserListener.prototype.exitIndextype_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#using_statistics_type.
PlSqlParserListener.prototype.enterUsing_statistics_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#using_statistics_type.
PlSqlParserListener.prototype.exitUsing_statistics_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#statistics_type_name.
PlSqlParserListener.prototype.enterStatistics_type_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#statistics_type_name.
PlSqlParserListener.prototype.exitStatistics_type_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_cost_clause.
PlSqlParserListener.prototype.enterDefault_cost_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_cost_clause.
PlSqlParserListener.prototype.exitDefault_cost_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cpu_cost.
PlSqlParserListener.prototype.enterCpu_cost = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cpu_cost.
PlSqlParserListener.prototype.exitCpu_cost = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#io_cost.
PlSqlParserListener.prototype.enterIo_cost = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#io_cost.
PlSqlParserListener.prototype.exitIo_cost = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#network_cost.
PlSqlParserListener.prototype.enterNetwork_cost = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#network_cost.
PlSqlParserListener.prototype.exitNetwork_cost = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_selectivity_clause.
PlSqlParserListener.prototype.enterDefault_selectivity_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_selectivity_clause.
PlSqlParserListener.prototype.exitDefault_selectivity_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_selectivity.
PlSqlParserListener.prototype.enterDefault_selectivity = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_selectivity.
PlSqlParserListener.prototype.exitDefault_selectivity = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#storage_table_clause.
PlSqlParserListener.prototype.enterStorage_table_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#storage_table_clause.
PlSqlParserListener.prototype.exitStorage_table_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unified_auditing.
PlSqlParserListener.prototype.enterUnified_auditing = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unified_auditing.
PlSqlParserListener.prototype.exitUnified_auditing = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#policy_name.
PlSqlParserListener.prototype.enterPolicy_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#policy_name.
PlSqlParserListener.prototype.exitPolicy_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#audit_traditional.
PlSqlParserListener.prototype.enterAudit_traditional = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#audit_traditional.
PlSqlParserListener.prototype.exitAudit_traditional = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#audit_direct_path.
PlSqlParserListener.prototype.enterAudit_direct_path = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#audit_direct_path.
PlSqlParserListener.prototype.exitAudit_direct_path = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#audit_container_clause.
PlSqlParserListener.prototype.enterAudit_container_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#audit_container_clause.
PlSqlParserListener.prototype.exitAudit_container_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#audit_operation_clause.
PlSqlParserListener.prototype.enterAudit_operation_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#audit_operation_clause.
PlSqlParserListener.prototype.exitAudit_operation_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#auditing_by_clause.
PlSqlParserListener.prototype.enterAuditing_by_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#auditing_by_clause.
PlSqlParserListener.prototype.exitAuditing_by_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#audit_user.
PlSqlParserListener.prototype.enterAudit_user = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#audit_user.
PlSqlParserListener.prototype.exitAudit_user = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#audit_schema_object_clause.
PlSqlParserListener.prototype.enterAudit_schema_object_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#audit_schema_object_clause.
PlSqlParserListener.prototype.exitAudit_schema_object_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sql_operation.
PlSqlParserListener.prototype.enterSql_operation = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sql_operation.
PlSqlParserListener.prototype.exitSql_operation = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#auditing_on_clause.
PlSqlParserListener.prototype.enterAuditing_on_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#auditing_on_clause.
PlSqlParserListener.prototype.exitAuditing_on_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_name.
PlSqlParserListener.prototype.enterModel_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_name.
PlSqlParserListener.prototype.exitModel_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_name.
PlSqlParserListener.prototype.enterObject_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_name.
PlSqlParserListener.prototype.exitObject_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#profile_name.
PlSqlParserListener.prototype.enterProfile_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#profile_name.
PlSqlParserListener.prototype.exitProfile_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sql_statement_shortcut.
PlSqlParserListener.prototype.enterSql_statement_shortcut = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sql_statement_shortcut.
PlSqlParserListener.prototype.exitSql_statement_shortcut = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_index.
PlSqlParserListener.prototype.enterDrop_index = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_index.
PlSqlParserListener.prototype.exitDrop_index = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rename_object.
PlSqlParserListener.prototype.enterRename_object = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rename_object.
PlSqlParserListener.prototype.exitRename_object = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#grant_statement.
PlSqlParserListener.prototype.enterGrant_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#grant_statement.
PlSqlParserListener.prototype.exitGrant_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#container_clause.
PlSqlParserListener.prototype.enterContainer_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#container_clause.
PlSqlParserListener.prototype.exitContainer_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_directory.
PlSqlParserListener.prototype.enterCreate_directory = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_directory.
PlSqlParserListener.prototype.exitCreate_directory = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#directory_name.
PlSqlParserListener.prototype.enterDirectory_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#directory_name.
PlSqlParserListener.prototype.exitDirectory_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#directory_path.
PlSqlParserListener.prototype.enterDirectory_path = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#directory_path.
PlSqlParserListener.prototype.exitDirectory_path = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_library.
PlSqlParserListener.prototype.enterAlter_library = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_library.
PlSqlParserListener.prototype.exitAlter_library = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#library_editionable.
PlSqlParserListener.prototype.enterLibrary_editionable = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#library_editionable.
PlSqlParserListener.prototype.exitLibrary_editionable = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#library_debug.
PlSqlParserListener.prototype.enterLibrary_debug = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#library_debug.
PlSqlParserListener.prototype.exitLibrary_debug = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#compiler_parameters_clause.
PlSqlParserListener.prototype.enterCompiler_parameters_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#compiler_parameters_clause.
PlSqlParserListener.prototype.exitCompiler_parameters_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#parameter_value.
PlSqlParserListener.prototype.enterParameter_value = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#parameter_value.
PlSqlParserListener.prototype.exitParameter_value = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#library_name.
PlSqlParserListener.prototype.enterLibrary_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#library_name.
PlSqlParserListener.prototype.exitLibrary_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_view.
PlSqlParserListener.prototype.enterAlter_view = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_view.
PlSqlParserListener.prototype.exitAlter_view = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_view_editionable.
PlSqlParserListener.prototype.enterAlter_view_editionable = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_view_editionable.
PlSqlParserListener.prototype.exitAlter_view_editionable = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_view.
PlSqlParserListener.prototype.enterCreate_view = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_view.
PlSqlParserListener.prototype.exitCreate_view = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#view_options.
PlSqlParserListener.prototype.enterView_options = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#view_options.
PlSqlParserListener.prototype.exitView_options = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#view_alias_constraint.
PlSqlParserListener.prototype.enterView_alias_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#view_alias_constraint.
PlSqlParserListener.prototype.exitView_alias_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_view_clause.
PlSqlParserListener.prototype.enterObject_view_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_view_clause.
PlSqlParserListener.prototype.exitObject_view_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#inline_constraint.
PlSqlParserListener.prototype.enterInline_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#inline_constraint.
PlSqlParserListener.prototype.exitInline_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#inline_ref_constraint.
PlSqlParserListener.prototype.enterInline_ref_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#inline_ref_constraint.
PlSqlParserListener.prototype.exitInline_ref_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#out_of_line_ref_constraint.
PlSqlParserListener.prototype.enterOut_of_line_ref_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#out_of_line_ref_constraint.
PlSqlParserListener.prototype.exitOut_of_line_ref_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#out_of_line_constraint.
PlSqlParserListener.prototype.enterOut_of_line_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#out_of_line_constraint.
PlSqlParserListener.prototype.exitOut_of_line_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#constraint_state.
PlSqlParserListener.prototype.enterConstraint_state = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#constraint_state.
PlSqlParserListener.prototype.exitConstraint_state = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_tablespace.
PlSqlParserListener.prototype.enterAlter_tablespace = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_tablespace.
PlSqlParserListener.prototype.exitAlter_tablespace = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#datafile_tempfile_clauses.
PlSqlParserListener.prototype.enterDatafile_tempfile_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#datafile_tempfile_clauses.
PlSqlParserListener.prototype.exitDatafile_tempfile_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tablespace_logging_clauses.
PlSqlParserListener.prototype.enterTablespace_logging_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tablespace_logging_clauses.
PlSqlParserListener.prototype.exitTablespace_logging_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tablespace_group_clause.
PlSqlParserListener.prototype.enterTablespace_group_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tablespace_group_clause.
PlSqlParserListener.prototype.exitTablespace_group_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tablespace_group_name.
PlSqlParserListener.prototype.enterTablespace_group_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tablespace_group_name.
PlSqlParserListener.prototype.exitTablespace_group_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tablespace_state_clauses.
PlSqlParserListener.prototype.enterTablespace_state_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tablespace_state_clauses.
PlSqlParserListener.prototype.exitTablespace_state_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#flashback_mode_clause.
PlSqlParserListener.prototype.enterFlashback_mode_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#flashback_mode_clause.
PlSqlParserListener.prototype.exitFlashback_mode_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#new_tablespace_name.
PlSqlParserListener.prototype.enterNew_tablespace_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#new_tablespace_name.
PlSqlParserListener.prototype.exitNew_tablespace_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_tablespace.
PlSqlParserListener.prototype.enterCreate_tablespace = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_tablespace.
PlSqlParserListener.prototype.exitCreate_tablespace = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#permanent_tablespace_clause.
PlSqlParserListener.prototype.enterPermanent_tablespace_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#permanent_tablespace_clause.
PlSqlParserListener.prototype.exitPermanent_tablespace_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tablespace_encryption_spec.
PlSqlParserListener.prototype.enterTablespace_encryption_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tablespace_encryption_spec.
PlSqlParserListener.prototype.exitTablespace_encryption_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#logging_clause.
PlSqlParserListener.prototype.enterLogging_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#logging_clause.
PlSqlParserListener.prototype.exitLogging_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#extent_management_clause.
PlSqlParserListener.prototype.enterExtent_management_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#extent_management_clause.
PlSqlParserListener.prototype.exitExtent_management_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#segment_management_clause.
PlSqlParserListener.prototype.enterSegment_management_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#segment_management_clause.
PlSqlParserListener.prototype.exitSegment_management_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#temporary_tablespace_clause.
PlSqlParserListener.prototype.enterTemporary_tablespace_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#temporary_tablespace_clause.
PlSqlParserListener.prototype.exitTemporary_tablespace_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#undo_tablespace_clause.
PlSqlParserListener.prototype.enterUndo_tablespace_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#undo_tablespace_clause.
PlSqlParserListener.prototype.exitUndo_tablespace_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tablespace_retention_clause.
PlSqlParserListener.prototype.enterTablespace_retention_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tablespace_retention_clause.
PlSqlParserListener.prototype.exitTablespace_retention_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#datafile_specification.
PlSqlParserListener.prototype.enterDatafile_specification = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#datafile_specification.
PlSqlParserListener.prototype.exitDatafile_specification = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tempfile_specification.
PlSqlParserListener.prototype.enterTempfile_specification = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tempfile_specification.
PlSqlParserListener.prototype.exitTempfile_specification = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#datafile_tempfile_spec.
PlSqlParserListener.prototype.enterDatafile_tempfile_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#datafile_tempfile_spec.
PlSqlParserListener.prototype.exitDatafile_tempfile_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#redo_log_file_spec.
PlSqlParserListener.prototype.enterRedo_log_file_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#redo_log_file_spec.
PlSqlParserListener.prototype.exitRedo_log_file_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#autoextend_clause.
PlSqlParserListener.prototype.enterAutoextend_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#autoextend_clause.
PlSqlParserListener.prototype.exitAutoextend_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#maxsize_clause.
PlSqlParserListener.prototype.enterMaxsize_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#maxsize_clause.
PlSqlParserListener.prototype.exitMaxsize_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#build_clause.
PlSqlParserListener.prototype.enterBuild_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#build_clause.
PlSqlParserListener.prototype.exitBuild_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#parallel_clause.
PlSqlParserListener.prototype.enterParallel_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#parallel_clause.
PlSqlParserListener.prototype.exitParallel_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_materialized_view.
PlSqlParserListener.prototype.enterAlter_materialized_view = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_materialized_view.
PlSqlParserListener.prototype.exitAlter_materialized_view = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_mv_option1.
PlSqlParserListener.prototype.enterAlter_mv_option1 = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_mv_option1.
PlSqlParserListener.prototype.exitAlter_mv_option1 = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_mv_refresh.
PlSqlParserListener.prototype.enterAlter_mv_refresh = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_mv_refresh.
PlSqlParserListener.prototype.exitAlter_mv_refresh = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rollback_segment.
PlSqlParserListener.prototype.enterRollback_segment = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rollback_segment.
PlSqlParserListener.prototype.exitRollback_segment = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_mv_column_clause.
PlSqlParserListener.prototype.enterModify_mv_column_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_mv_column_clause.
PlSqlParserListener.prototype.exitModify_mv_column_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_materialized_view_log.
PlSqlParserListener.prototype.enterAlter_materialized_view_log = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_materialized_view_log.
PlSqlParserListener.prototype.exitAlter_materialized_view_log = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_mv_log_column_clause.
PlSqlParserListener.prototype.enterAdd_mv_log_column_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_mv_log_column_clause.
PlSqlParserListener.prototype.exitAdd_mv_log_column_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#move_mv_log_clause.
PlSqlParserListener.prototype.enterMove_mv_log_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#move_mv_log_clause.
PlSqlParserListener.prototype.exitMove_mv_log_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#mv_log_augmentation.
PlSqlParserListener.prototype.enterMv_log_augmentation = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#mv_log_augmentation.
PlSqlParserListener.prototype.exitMv_log_augmentation = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#datetime_expr.
PlSqlParserListener.prototype.enterDatetime_expr = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#datetime_expr.
PlSqlParserListener.prototype.exitDatetime_expr = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#interval_expr.
PlSqlParserListener.prototype.enterInterval_expr = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#interval_expr.
PlSqlParserListener.prototype.exitInterval_expr = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#synchronous_or_asynchronous.
PlSqlParserListener.prototype.enterSynchronous_or_asynchronous = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#synchronous_or_asynchronous.
PlSqlParserListener.prototype.exitSynchronous_or_asynchronous = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#including_or_excluding.
PlSqlParserListener.prototype.enterIncluding_or_excluding = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#including_or_excluding.
PlSqlParserListener.prototype.exitIncluding_or_excluding = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_materialized_view_log.
PlSqlParserListener.prototype.enterCreate_materialized_view_log = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_materialized_view_log.
PlSqlParserListener.prototype.exitCreate_materialized_view_log = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#new_values_clause.
PlSqlParserListener.prototype.enterNew_values_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#new_values_clause.
PlSqlParserListener.prototype.exitNew_values_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#mv_log_purge_clause.
PlSqlParserListener.prototype.enterMv_log_purge_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#mv_log_purge_clause.
PlSqlParserListener.prototype.exitMv_log_purge_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_materialized_view.
PlSqlParserListener.prototype.enterCreate_materialized_view = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_materialized_view.
PlSqlParserListener.prototype.exitCreate_materialized_view = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_mv_refresh.
PlSqlParserListener.prototype.enterCreate_mv_refresh = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_mv_refresh.
PlSqlParserListener.prototype.exitCreate_mv_refresh = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_context.
PlSqlParserListener.prototype.enterCreate_context = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_context.
PlSqlParserListener.prototype.exitCreate_context = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#oracle_namespace.
PlSqlParserListener.prototype.enterOracle_namespace = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#oracle_namespace.
PlSqlParserListener.prototype.exitOracle_namespace = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_cluster.
PlSqlParserListener.prototype.enterCreate_cluster = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_cluster.
PlSqlParserListener.prototype.exitCreate_cluster = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_table.
PlSqlParserListener.prototype.enterCreate_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_table.
PlSqlParserListener.prototype.exitCreate_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmltype_table.
PlSqlParserListener.prototype.enterXmltype_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmltype_table.
PlSqlParserListener.prototype.exitXmltype_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmltype_virtual_columns.
PlSqlParserListener.prototype.enterXmltype_virtual_columns = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmltype_virtual_columns.
PlSqlParserListener.prototype.exitXmltype_virtual_columns = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmltype_column_properties.
PlSqlParserListener.prototype.enterXmltype_column_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmltype_column_properties.
PlSqlParserListener.prototype.exitXmltype_column_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmltype_storage.
PlSqlParserListener.prototype.enterXmltype_storage = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmltype_storage.
PlSqlParserListener.prototype.exitXmltype_storage = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlschema_spec.
PlSqlParserListener.prototype.enterXmlschema_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlschema_spec.
PlSqlParserListener.prototype.exitXmlschema_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_table.
PlSqlParserListener.prototype.enterObject_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_table.
PlSqlParserListener.prototype.exitObject_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#oid_index_clause.
PlSqlParserListener.prototype.enterOid_index_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#oid_index_clause.
PlSqlParserListener.prototype.exitOid_index_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#oid_clause.
PlSqlParserListener.prototype.enterOid_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#oid_clause.
PlSqlParserListener.prototype.exitOid_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_properties.
PlSqlParserListener.prototype.enterObject_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_properties.
PlSqlParserListener.prototype.exitObject_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_table_substitution.
PlSqlParserListener.prototype.enterObject_table_substitution = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_table_substitution.
PlSqlParserListener.prototype.exitObject_table_substitution = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#relational_table.
PlSqlParserListener.prototype.enterRelational_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#relational_table.
PlSqlParserListener.prototype.exitRelational_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#relational_property.
PlSqlParserListener.prototype.enterRelational_property = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#relational_property.
PlSqlParserListener.prototype.exitRelational_property = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_partitioning_clauses.
PlSqlParserListener.prototype.enterTable_partitioning_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_partitioning_clauses.
PlSqlParserListener.prototype.exitTable_partitioning_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#range_partitions.
PlSqlParserListener.prototype.enterRange_partitions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#range_partitions.
PlSqlParserListener.prototype.exitRange_partitions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#list_partitions.
PlSqlParserListener.prototype.enterList_partitions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#list_partitions.
PlSqlParserListener.prototype.exitList_partitions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hash_partitions.
PlSqlParserListener.prototype.enterHash_partitions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hash_partitions.
PlSqlParserListener.prototype.exitHash_partitions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#individual_hash_partitions.
PlSqlParserListener.prototype.enterIndividual_hash_partitions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#individual_hash_partitions.
PlSqlParserListener.prototype.exitIndividual_hash_partitions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hash_partitions_by_quantity.
PlSqlParserListener.prototype.enterHash_partitions_by_quantity = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hash_partitions_by_quantity.
PlSqlParserListener.prototype.exitHash_partitions_by_quantity = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hash_partition_quantity.
PlSqlParserListener.prototype.enterHash_partition_quantity = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hash_partition_quantity.
PlSqlParserListener.prototype.exitHash_partition_quantity = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#composite_range_partitions.
PlSqlParserListener.prototype.enterComposite_range_partitions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#composite_range_partitions.
PlSqlParserListener.prototype.exitComposite_range_partitions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#composite_list_partitions.
PlSqlParserListener.prototype.enterComposite_list_partitions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#composite_list_partitions.
PlSqlParserListener.prototype.exitComposite_list_partitions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#composite_hash_partitions.
PlSqlParserListener.prototype.enterComposite_hash_partitions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#composite_hash_partitions.
PlSqlParserListener.prototype.exitComposite_hash_partitions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#reference_partitioning.
PlSqlParserListener.prototype.enterReference_partitioning = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#reference_partitioning.
PlSqlParserListener.prototype.exitReference_partitioning = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#reference_partition_desc.
PlSqlParserListener.prototype.enterReference_partition_desc = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#reference_partition_desc.
PlSqlParserListener.prototype.exitReference_partition_desc = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#system_partitioning.
PlSqlParserListener.prototype.enterSystem_partitioning = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#system_partitioning.
PlSqlParserListener.prototype.exitSystem_partitioning = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#range_partition_desc.
PlSqlParserListener.prototype.enterRange_partition_desc = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#range_partition_desc.
PlSqlParserListener.prototype.exitRange_partition_desc = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#list_partition_desc.
PlSqlParserListener.prototype.enterList_partition_desc = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#list_partition_desc.
PlSqlParserListener.prototype.exitList_partition_desc = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subpartition_template.
PlSqlParserListener.prototype.enterSubpartition_template = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subpartition_template.
PlSqlParserListener.prototype.exitSubpartition_template = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hash_subpartition_quantity.
PlSqlParserListener.prototype.enterHash_subpartition_quantity = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hash_subpartition_quantity.
PlSqlParserListener.prototype.exitHash_subpartition_quantity = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subpartition_by_range.
PlSqlParserListener.prototype.enterSubpartition_by_range = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subpartition_by_range.
PlSqlParserListener.prototype.exitSubpartition_by_range = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subpartition_by_list.
PlSqlParserListener.prototype.enterSubpartition_by_list = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subpartition_by_list.
PlSqlParserListener.prototype.exitSubpartition_by_list = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subpartition_by_hash.
PlSqlParserListener.prototype.enterSubpartition_by_hash = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subpartition_by_hash.
PlSqlParserListener.prototype.exitSubpartition_by_hash = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subpartition_name.
PlSqlParserListener.prototype.enterSubpartition_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subpartition_name.
PlSqlParserListener.prototype.exitSubpartition_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#range_subpartition_desc.
PlSqlParserListener.prototype.enterRange_subpartition_desc = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#range_subpartition_desc.
PlSqlParserListener.prototype.exitRange_subpartition_desc = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#list_subpartition_desc.
PlSqlParserListener.prototype.enterList_subpartition_desc = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#list_subpartition_desc.
PlSqlParserListener.prototype.exitList_subpartition_desc = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#individual_hash_subparts.
PlSqlParserListener.prototype.enterIndividual_hash_subparts = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#individual_hash_subparts.
PlSqlParserListener.prototype.exitIndividual_hash_subparts = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hash_subparts_by_quantity.
PlSqlParserListener.prototype.enterHash_subparts_by_quantity = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hash_subparts_by_quantity.
PlSqlParserListener.prototype.exitHash_subparts_by_quantity = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#range_values_clause.
PlSqlParserListener.prototype.enterRange_values_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#range_values_clause.
PlSqlParserListener.prototype.exitRange_values_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#list_values_clause.
PlSqlParserListener.prototype.enterList_values_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#list_values_clause.
PlSqlParserListener.prototype.exitList_values_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_partition_description.
PlSqlParserListener.prototype.enterTable_partition_description = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_partition_description.
PlSqlParserListener.prototype.exitTable_partition_description = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partitioning_storage_clause.
PlSqlParserListener.prototype.enterPartitioning_storage_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partitioning_storage_clause.
PlSqlParserListener.prototype.exitPartitioning_storage_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_partitioning_storage.
PlSqlParserListener.prototype.enterLob_partitioning_storage = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_partitioning_storage.
PlSqlParserListener.prototype.exitLob_partitioning_storage = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#datatype_null_enable.
PlSqlParserListener.prototype.enterDatatype_null_enable = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#datatype_null_enable.
PlSqlParserListener.prototype.exitDatatype_null_enable = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#size_clause.
PlSqlParserListener.prototype.enterSize_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#size_clause.
PlSqlParserListener.prototype.exitSize_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_compression.
PlSqlParserListener.prototype.enterTable_compression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_compression.
PlSqlParserListener.prototype.exitTable_compression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#physical_attributes_clause.
PlSqlParserListener.prototype.enterPhysical_attributes_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#physical_attributes_clause.
PlSqlParserListener.prototype.exitPhysical_attributes_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#storage_clause.
PlSqlParserListener.prototype.enterStorage_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#storage_clause.
PlSqlParserListener.prototype.exitStorage_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#deferred_segment_creation.
PlSqlParserListener.prototype.enterDeferred_segment_creation = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#deferred_segment_creation.
PlSqlParserListener.prototype.exitDeferred_segment_creation = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#segment_attributes_clause.
PlSqlParserListener.prototype.enterSegment_attributes_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#segment_attributes_clause.
PlSqlParserListener.prototype.exitSegment_attributes_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#physical_properties.
PlSqlParserListener.prototype.enterPhysical_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#physical_properties.
PlSqlParserListener.prototype.exitPhysical_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#row_movement_clause.
PlSqlParserListener.prototype.enterRow_movement_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#row_movement_clause.
PlSqlParserListener.prototype.exitRow_movement_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#flashback_archive_clause.
PlSqlParserListener.prototype.enterFlashback_archive_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#flashback_archive_clause.
PlSqlParserListener.prototype.exitFlashback_archive_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#log_grp.
PlSqlParserListener.prototype.enterLog_grp = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#log_grp.
PlSqlParserListener.prototype.exitLog_grp = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#supplemental_table_logging.
PlSqlParserListener.prototype.enterSupplemental_table_logging = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#supplemental_table_logging.
PlSqlParserListener.prototype.exitSupplemental_table_logging = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#supplemental_log_grp_clause.
PlSqlParserListener.prototype.enterSupplemental_log_grp_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#supplemental_log_grp_clause.
PlSqlParserListener.prototype.exitSupplemental_log_grp_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#supplemental_id_key_clause.
PlSqlParserListener.prototype.enterSupplemental_id_key_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#supplemental_id_key_clause.
PlSqlParserListener.prototype.exitSupplemental_id_key_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#allocate_extent_clause.
PlSqlParserListener.prototype.enterAllocate_extent_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#allocate_extent_clause.
PlSqlParserListener.prototype.exitAllocate_extent_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#deallocate_unused_clause.
PlSqlParserListener.prototype.enterDeallocate_unused_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#deallocate_unused_clause.
PlSqlParserListener.prototype.exitDeallocate_unused_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#shrink_clause.
PlSqlParserListener.prototype.enterShrink_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#shrink_clause.
PlSqlParserListener.prototype.exitShrink_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#records_per_block_clause.
PlSqlParserListener.prototype.enterRecords_per_block_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#records_per_block_clause.
PlSqlParserListener.prototype.exitRecords_per_block_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#upgrade_table_clause.
PlSqlParserListener.prototype.enterUpgrade_table_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#upgrade_table_clause.
PlSqlParserListener.prototype.exitUpgrade_table_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_table.
PlSqlParserListener.prototype.enterDrop_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_table.
PlSqlParserListener.prototype.exitDrop_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_view.
PlSqlParserListener.prototype.enterDrop_view = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_view.
PlSqlParserListener.prototype.exitDrop_view = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#comment_on_column.
PlSqlParserListener.prototype.enterComment_on_column = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#comment_on_column.
PlSqlParserListener.prototype.exitComment_on_column = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#enable_or_disable.
PlSqlParserListener.prototype.enterEnable_or_disable = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#enable_or_disable.
PlSqlParserListener.prototype.exitEnable_or_disable = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#allow_or_disallow.
PlSqlParserListener.prototype.enterAllow_or_disallow = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#allow_or_disallow.
PlSqlParserListener.prototype.exitAllow_or_disallow = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_synonym.
PlSqlParserListener.prototype.enterCreate_synonym = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_synonym.
PlSqlParserListener.prototype.exitCreate_synonym = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#comment_on_table.
PlSqlParserListener.prototype.enterComment_on_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#comment_on_table.
PlSqlParserListener.prototype.exitComment_on_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_cluster.
PlSqlParserListener.prototype.enterAlter_cluster = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_cluster.
PlSqlParserListener.prototype.exitAlter_cluster = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cache_or_nocache.
PlSqlParserListener.prototype.enterCache_or_nocache = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cache_or_nocache.
PlSqlParserListener.prototype.exitCache_or_nocache = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#database_name.
PlSqlParserListener.prototype.enterDatabase_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#database_name.
PlSqlParserListener.prototype.exitDatabase_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_database.
PlSqlParserListener.prototype.enterAlter_database = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_database.
PlSqlParserListener.prototype.exitAlter_database = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#startup_clauses.
PlSqlParserListener.prototype.enterStartup_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#startup_clauses.
PlSqlParserListener.prototype.exitStartup_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#resetlogs_or_noresetlogs.
PlSqlParserListener.prototype.enterResetlogs_or_noresetlogs = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#resetlogs_or_noresetlogs.
PlSqlParserListener.prototype.exitResetlogs_or_noresetlogs = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#upgrade_or_downgrade.
PlSqlParserListener.prototype.enterUpgrade_or_downgrade = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#upgrade_or_downgrade.
PlSqlParserListener.prototype.exitUpgrade_or_downgrade = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#recovery_clauses.
PlSqlParserListener.prototype.enterRecovery_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#recovery_clauses.
PlSqlParserListener.prototype.exitRecovery_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#begin_or_end.
PlSqlParserListener.prototype.enterBegin_or_end = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#begin_or_end.
PlSqlParserListener.prototype.exitBegin_or_end = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#general_recovery.
PlSqlParserListener.prototype.enterGeneral_recovery = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#general_recovery.
PlSqlParserListener.prototype.exitGeneral_recovery = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#full_database_recovery.
PlSqlParserListener.prototype.enterFull_database_recovery = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#full_database_recovery.
PlSqlParserListener.prototype.exitFull_database_recovery = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partial_database_recovery.
PlSqlParserListener.prototype.enterPartial_database_recovery = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partial_database_recovery.
PlSqlParserListener.prototype.exitPartial_database_recovery = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partial_database_recovery_10g.
PlSqlParserListener.prototype.enterPartial_database_recovery_10g = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partial_database_recovery_10g.
PlSqlParserListener.prototype.exitPartial_database_recovery_10g = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#managed_standby_recovery.
PlSqlParserListener.prototype.enterManaged_standby_recovery = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#managed_standby_recovery.
PlSqlParserListener.prototype.exitManaged_standby_recovery = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#db_name.
PlSqlParserListener.prototype.enterDb_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#db_name.
PlSqlParserListener.prototype.exitDb_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#database_file_clauses.
PlSqlParserListener.prototype.enterDatabase_file_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#database_file_clauses.
PlSqlParserListener.prototype.exitDatabase_file_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_datafile_clause.
PlSqlParserListener.prototype.enterCreate_datafile_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_datafile_clause.
PlSqlParserListener.prototype.exitCreate_datafile_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_datafile_clause.
PlSqlParserListener.prototype.enterAlter_datafile_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_datafile_clause.
PlSqlParserListener.prototype.exitAlter_datafile_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_tempfile_clause.
PlSqlParserListener.prototype.enterAlter_tempfile_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_tempfile_clause.
PlSqlParserListener.prototype.exitAlter_tempfile_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#logfile_clauses.
PlSqlParserListener.prototype.enterLogfile_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#logfile_clauses.
PlSqlParserListener.prototype.exitLogfile_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_logfile_clauses.
PlSqlParserListener.prototype.enterAdd_logfile_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_logfile_clauses.
PlSqlParserListener.prototype.exitAdd_logfile_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#log_file_group.
PlSqlParserListener.prototype.enterLog_file_group = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#log_file_group.
PlSqlParserListener.prototype.exitLog_file_group = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_logfile_clauses.
PlSqlParserListener.prototype.enterDrop_logfile_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_logfile_clauses.
PlSqlParserListener.prototype.exitDrop_logfile_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#switch_logfile_clause.
PlSqlParserListener.prototype.enterSwitch_logfile_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#switch_logfile_clause.
PlSqlParserListener.prototype.exitSwitch_logfile_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#supplemental_db_logging.
PlSqlParserListener.prototype.enterSupplemental_db_logging = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#supplemental_db_logging.
PlSqlParserListener.prototype.exitSupplemental_db_logging = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_or_drop.
PlSqlParserListener.prototype.enterAdd_or_drop = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_or_drop.
PlSqlParserListener.prototype.exitAdd_or_drop = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#supplemental_plsql_clause.
PlSqlParserListener.prototype.enterSupplemental_plsql_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#supplemental_plsql_clause.
PlSqlParserListener.prototype.exitSupplemental_plsql_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#logfile_descriptor.
PlSqlParserListener.prototype.enterLogfile_descriptor = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#logfile_descriptor.
PlSqlParserListener.prototype.exitLogfile_descriptor = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#controlfile_clauses.
PlSqlParserListener.prototype.enterControlfile_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#controlfile_clauses.
PlSqlParserListener.prototype.exitControlfile_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#trace_file_clause.
PlSqlParserListener.prototype.enterTrace_file_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#trace_file_clause.
PlSqlParserListener.prototype.exitTrace_file_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#standby_database_clauses.
PlSqlParserListener.prototype.enterStandby_database_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#standby_database_clauses.
PlSqlParserListener.prototype.exitStandby_database_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#activate_standby_db_clause.
PlSqlParserListener.prototype.enterActivate_standby_db_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#activate_standby_db_clause.
PlSqlParserListener.prototype.exitActivate_standby_db_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#maximize_standby_db_clause.
PlSqlParserListener.prototype.enterMaximize_standby_db_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#maximize_standby_db_clause.
PlSqlParserListener.prototype.exitMaximize_standby_db_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#register_logfile_clause.
PlSqlParserListener.prototype.enterRegister_logfile_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#register_logfile_clause.
PlSqlParserListener.prototype.exitRegister_logfile_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#commit_switchover_clause.
PlSqlParserListener.prototype.enterCommit_switchover_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#commit_switchover_clause.
PlSqlParserListener.prototype.exitCommit_switchover_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#start_standby_clause.
PlSqlParserListener.prototype.enterStart_standby_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#start_standby_clause.
PlSqlParserListener.prototype.exitStart_standby_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#stop_standby_clause.
PlSqlParserListener.prototype.enterStop_standby_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#stop_standby_clause.
PlSqlParserListener.prototype.exitStop_standby_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#convert_database_clause.
PlSqlParserListener.prototype.enterConvert_database_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#convert_database_clause.
PlSqlParserListener.prototype.exitConvert_database_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_settings_clause.
PlSqlParserListener.prototype.enterDefault_settings_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_settings_clause.
PlSqlParserListener.prototype.exitDefault_settings_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#set_time_zone_clause.
PlSqlParserListener.prototype.enterSet_time_zone_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#set_time_zone_clause.
PlSqlParserListener.prototype.exitSet_time_zone_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#instance_clauses.
PlSqlParserListener.prototype.enterInstance_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#instance_clauses.
PlSqlParserListener.prototype.exitInstance_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#security_clause.
PlSqlParserListener.prototype.enterSecurity_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#security_clause.
PlSqlParserListener.prototype.exitSecurity_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#domain.
PlSqlParserListener.prototype.enterDomain = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#domain.
PlSqlParserListener.prototype.exitDomain = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#database.
PlSqlParserListener.prototype.enterDatabase = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#database.
PlSqlParserListener.prototype.exitDatabase = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#edition_name.
PlSqlParserListener.prototype.enterEdition_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#edition_name.
PlSqlParserListener.prototype.exitEdition_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#filenumber.
PlSqlParserListener.prototype.enterFilenumber = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#filenumber.
PlSqlParserListener.prototype.exitFilenumber = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#filename.
PlSqlParserListener.prototype.enterFilename = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#filename.
PlSqlParserListener.prototype.exitFilename = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_table.
PlSqlParserListener.prototype.enterAlter_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_table.
PlSqlParserListener.prototype.exitAlter_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_table_properties.
PlSqlParserListener.prototype.enterAlter_table_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_table_properties.
PlSqlParserListener.prototype.exitAlter_table_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_table_properties_1.
PlSqlParserListener.prototype.enterAlter_table_properties_1 = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_table_properties_1.
PlSqlParserListener.prototype.exitAlter_table_properties_1 = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_iot_clauses.
PlSqlParserListener.prototype.enterAlter_iot_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_iot_clauses.
PlSqlParserListener.prototype.exitAlter_iot_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_mapping_table_clause.
PlSqlParserListener.prototype.enterAlter_mapping_table_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_mapping_table_clause.
PlSqlParserListener.prototype.exitAlter_mapping_table_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_overflow_clause.
PlSqlParserListener.prototype.enterAlter_overflow_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_overflow_clause.
PlSqlParserListener.prototype.exitAlter_overflow_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_overflow_clause.
PlSqlParserListener.prototype.enterAdd_overflow_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_overflow_clause.
PlSqlParserListener.prototype.exitAdd_overflow_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#enable_disable_clause.
PlSqlParserListener.prototype.enterEnable_disable_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#enable_disable_clause.
PlSqlParserListener.prototype.exitEnable_disable_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#using_index_clause.
PlSqlParserListener.prototype.enterUsing_index_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#using_index_clause.
PlSqlParserListener.prototype.exitUsing_index_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_attributes.
PlSqlParserListener.prototype.enterIndex_attributes = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_attributes.
PlSqlParserListener.prototype.exitIndex_attributes = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sort_or_nosort.
PlSqlParserListener.prototype.enterSort_or_nosort = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sort_or_nosort.
PlSqlParserListener.prototype.exitSort_or_nosort = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#exceptions_clause.
PlSqlParserListener.prototype.enterExceptions_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#exceptions_clause.
PlSqlParserListener.prototype.exitExceptions_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#move_table_clause.
PlSqlParserListener.prototype.enterMove_table_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#move_table_clause.
PlSqlParserListener.prototype.exitMove_table_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_org_table_clause.
PlSqlParserListener.prototype.enterIndex_org_table_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_org_table_clause.
PlSqlParserListener.prototype.exitIndex_org_table_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#mapping_table_clause.
PlSqlParserListener.prototype.enterMapping_table_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#mapping_table_clause.
PlSqlParserListener.prototype.exitMapping_table_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#key_compression.
PlSqlParserListener.prototype.enterKey_compression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#key_compression.
PlSqlParserListener.prototype.exitKey_compression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_org_overflow_clause.
PlSqlParserListener.prototype.enterIndex_org_overflow_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_org_overflow_clause.
PlSqlParserListener.prototype.exitIndex_org_overflow_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_clauses.
PlSqlParserListener.prototype.enterColumn_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_clauses.
PlSqlParserListener.prototype.exitColumn_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_collection_retrieval.
PlSqlParserListener.prototype.enterModify_collection_retrieval = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_collection_retrieval.
PlSqlParserListener.prototype.exitModify_collection_retrieval = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#collection_item.
PlSqlParserListener.prototype.enterCollection_item = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#collection_item.
PlSqlParserListener.prototype.exitCollection_item = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rename_column_clause.
PlSqlParserListener.prototype.enterRename_column_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rename_column_clause.
PlSqlParserListener.prototype.exitRename_column_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#old_column_name.
PlSqlParserListener.prototype.enterOld_column_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#old_column_name.
PlSqlParserListener.prototype.exitOld_column_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#new_column_name.
PlSqlParserListener.prototype.enterNew_column_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#new_column_name.
PlSqlParserListener.prototype.exitNew_column_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_modify_drop_column_clauses.
PlSqlParserListener.prototype.enterAdd_modify_drop_column_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_modify_drop_column_clauses.
PlSqlParserListener.prototype.exitAdd_modify_drop_column_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_column_clause.
PlSqlParserListener.prototype.enterDrop_column_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_column_clause.
PlSqlParserListener.prototype.exitDrop_column_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_column_clauses.
PlSqlParserListener.prototype.enterModify_column_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_column_clauses.
PlSqlParserListener.prototype.exitModify_column_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_col_properties.
PlSqlParserListener.prototype.enterModify_col_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_col_properties.
PlSqlParserListener.prototype.exitModify_col_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_col_substitutable.
PlSqlParserListener.prototype.enterModify_col_substitutable = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_col_substitutable.
PlSqlParserListener.prototype.exitModify_col_substitutable = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_column_clause.
PlSqlParserListener.prototype.enterAdd_column_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_column_clause.
PlSqlParserListener.prototype.exitAdd_column_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_varray_col_properties.
PlSqlParserListener.prototype.enterAlter_varray_col_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_varray_col_properties.
PlSqlParserListener.prototype.exitAlter_varray_col_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#varray_col_properties.
PlSqlParserListener.prototype.enterVarray_col_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#varray_col_properties.
PlSqlParserListener.prototype.exitVarray_col_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#varray_storage_clause.
PlSqlParserListener.prototype.enterVarray_storage_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#varray_storage_clause.
PlSqlParserListener.prototype.exitVarray_storage_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_segname.
PlSqlParserListener.prototype.enterLob_segname = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_segname.
PlSqlParserListener.prototype.exitLob_segname = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_item.
PlSqlParserListener.prototype.enterLob_item = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_item.
PlSqlParserListener.prototype.exitLob_item = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_storage_parameters.
PlSqlParserListener.prototype.enterLob_storage_parameters = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_storage_parameters.
PlSqlParserListener.prototype.exitLob_storage_parameters = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_storage_clause.
PlSqlParserListener.prototype.enterLob_storage_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_storage_clause.
PlSqlParserListener.prototype.exitLob_storage_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_lob_storage_clause.
PlSqlParserListener.prototype.enterModify_lob_storage_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_lob_storage_clause.
PlSqlParserListener.prototype.exitModify_lob_storage_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_lob_parameters.
PlSqlParserListener.prototype.enterModify_lob_parameters = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_lob_parameters.
PlSqlParserListener.prototype.exitModify_lob_parameters = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_parameters.
PlSqlParserListener.prototype.enterLob_parameters = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_parameters.
PlSqlParserListener.prototype.exitLob_parameters = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_deduplicate_clause.
PlSqlParserListener.prototype.enterLob_deduplicate_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_deduplicate_clause.
PlSqlParserListener.prototype.exitLob_deduplicate_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_compression_clause.
PlSqlParserListener.prototype.enterLob_compression_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_compression_clause.
PlSqlParserListener.prototype.exitLob_compression_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_retention_clause.
PlSqlParserListener.prototype.enterLob_retention_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_retention_clause.
PlSqlParserListener.prototype.exitLob_retention_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#encryption_spec.
PlSqlParserListener.prototype.enterEncryption_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#encryption_spec.
PlSqlParserListener.prototype.exitEncryption_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tablespace.
PlSqlParserListener.prototype.enterTablespace = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tablespace.
PlSqlParserListener.prototype.exitTablespace = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#varray_item.
PlSqlParserListener.prototype.enterVarray_item = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#varray_item.
PlSqlParserListener.prototype.exitVarray_item = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_properties.
PlSqlParserListener.prototype.enterColumn_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_properties.
PlSqlParserListener.prototype.exitColumn_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#period_definition.
PlSqlParserListener.prototype.enterPeriod_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#period_definition.
PlSqlParserListener.prototype.exitPeriod_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#start_time_column.
PlSqlParserListener.prototype.enterStart_time_column = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#start_time_column.
PlSqlParserListener.prototype.exitStart_time_column = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#end_time_column.
PlSqlParserListener.prototype.enterEnd_time_column = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#end_time_column.
PlSqlParserListener.prototype.exitEnd_time_column = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_definition.
PlSqlParserListener.prototype.enterColumn_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_definition.
PlSqlParserListener.prototype.exitColumn_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#virtual_column_definition.
PlSqlParserListener.prototype.enterVirtual_column_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#virtual_column_definition.
PlSqlParserListener.prototype.exitVirtual_column_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#autogenerated_sequence_definition.
PlSqlParserListener.prototype.enterAutogenerated_sequence_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#autogenerated_sequence_definition.
PlSqlParserListener.prototype.exitAutogenerated_sequence_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#out_of_line_part_storage.
PlSqlParserListener.prototype.enterOut_of_line_part_storage = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#out_of_line_part_storage.
PlSqlParserListener.prototype.exitOut_of_line_part_storage = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#nested_table_col_properties.
PlSqlParserListener.prototype.enterNested_table_col_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#nested_table_col_properties.
PlSqlParserListener.prototype.exitNested_table_col_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#nested_item.
PlSqlParserListener.prototype.enterNested_item = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#nested_item.
PlSqlParserListener.prototype.exitNested_item = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#substitutable_column_clause.
PlSqlParserListener.prototype.enterSubstitutable_column_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#substitutable_column_clause.
PlSqlParserListener.prototype.exitSubstitutable_column_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partition_name.
PlSqlParserListener.prototype.enterPartition_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partition_name.
PlSqlParserListener.prototype.exitPartition_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#supplemental_logging_props.
PlSqlParserListener.prototype.enterSupplemental_logging_props = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#supplemental_logging_props.
PlSqlParserListener.prototype.exitSupplemental_logging_props = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_or_attribute.
PlSqlParserListener.prototype.enterColumn_or_attribute = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_or_attribute.
PlSqlParserListener.prototype.exitColumn_or_attribute = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_type_col_properties.
PlSqlParserListener.prototype.enterObject_type_col_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_type_col_properties.
PlSqlParserListener.prototype.exitObject_type_col_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#constraint_clauses.
PlSqlParserListener.prototype.enterConstraint_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#constraint_clauses.
PlSqlParserListener.prototype.exitConstraint_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#old_constraint_name.
PlSqlParserListener.prototype.enterOld_constraint_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#old_constraint_name.
PlSqlParserListener.prototype.exitOld_constraint_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#new_constraint_name.
PlSqlParserListener.prototype.enterNew_constraint_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#new_constraint_name.
PlSqlParserListener.prototype.exitNew_constraint_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_constraint_clause.
PlSqlParserListener.prototype.enterDrop_constraint_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_constraint_clause.
PlSqlParserListener.prototype.exitDrop_constraint_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_primary_key_or_unique_or_generic_clause.
PlSqlParserListener.prototype.enterDrop_primary_key_or_unique_or_generic_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_primary_key_or_unique_or_generic_clause.
PlSqlParserListener.prototype.exitDrop_primary_key_or_unique_or_generic_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_constraint.
PlSqlParserListener.prototype.enterAdd_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_constraint.
PlSqlParserListener.prototype.exitAdd_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_constraint_clause.
PlSqlParserListener.prototype.enterAdd_constraint_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_constraint_clause.
PlSqlParserListener.prototype.exitAdd_constraint_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#check_constraint.
PlSqlParserListener.prototype.enterCheck_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#check_constraint.
PlSqlParserListener.prototype.exitCheck_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_constraint.
PlSqlParserListener.prototype.enterDrop_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_constraint.
PlSqlParserListener.prototype.exitDrop_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#enable_constraint.
PlSqlParserListener.prototype.enterEnable_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#enable_constraint.
PlSqlParserListener.prototype.exitEnable_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#disable_constraint.
PlSqlParserListener.prototype.enterDisable_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#disable_constraint.
PlSqlParserListener.prototype.exitDisable_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#foreign_key_clause.
PlSqlParserListener.prototype.enterForeign_key_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#foreign_key_clause.
PlSqlParserListener.prototype.exitForeign_key_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#references_clause.
PlSqlParserListener.prototype.enterReferences_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#references_clause.
PlSqlParserListener.prototype.exitReferences_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#on_delete_clause.
PlSqlParserListener.prototype.enterOn_delete_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#on_delete_clause.
PlSqlParserListener.prototype.exitOn_delete_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unique_key_clause.
PlSqlParserListener.prototype.enterUnique_key_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unique_key_clause.
PlSqlParserListener.prototype.exitUnique_key_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#primary_key_clause.
PlSqlParserListener.prototype.enterPrimary_key_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#primary_key_clause.
PlSqlParserListener.prototype.exitPrimary_key_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#anonymous_block.
PlSqlParserListener.prototype.enterAnonymous_block = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#anonymous_block.
PlSqlParserListener.prototype.exitAnonymous_block = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#invoker_rights_clause.
PlSqlParserListener.prototype.enterInvoker_rights_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#invoker_rights_clause.
PlSqlParserListener.prototype.exitInvoker_rights_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#call_spec.
PlSqlParserListener.prototype.enterCall_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#call_spec.
PlSqlParserListener.prototype.exitCall_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#java_spec.
PlSqlParserListener.prototype.enterJava_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#java_spec.
PlSqlParserListener.prototype.exitJava_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#c_spec.
PlSqlParserListener.prototype.enterC_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#c_spec.
PlSqlParserListener.prototype.exitC_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#c_agent_in_clause.
PlSqlParserListener.prototype.enterC_agent_in_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#c_agent_in_clause.
PlSqlParserListener.prototype.exitC_agent_in_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#c_parameters_clause.
PlSqlParserListener.prototype.enterC_parameters_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#c_parameters_clause.
PlSqlParserListener.prototype.exitC_parameters_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#parameter.
PlSqlParserListener.prototype.enterParameter = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#parameter.
PlSqlParserListener.prototype.exitParameter = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_value_part.
PlSqlParserListener.prototype.enterDefault_value_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_value_part.
PlSqlParserListener.prototype.exitDefault_value_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#seq_of_declare_specs.
PlSqlParserListener.prototype.enterSeq_of_declare_specs = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#seq_of_declare_specs.
PlSqlParserListener.prototype.exitSeq_of_declare_specs = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#declare_spec.
PlSqlParserListener.prototype.enterDeclare_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#declare_spec.
PlSqlParserListener.prototype.exitDeclare_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#variable_declaration.
PlSqlParserListener.prototype.enterVariable_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#variable_declaration.
PlSqlParserListener.prototype.exitVariable_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subtype_declaration.
PlSqlParserListener.prototype.enterSubtype_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subtype_declaration.
PlSqlParserListener.prototype.exitSubtype_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cursor_declaration.
PlSqlParserListener.prototype.enterCursor_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cursor_declaration.
PlSqlParserListener.prototype.exitCursor_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#parameter_spec.
PlSqlParserListener.prototype.enterParameter_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#parameter_spec.
PlSqlParserListener.prototype.exitParameter_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#exception_declaration.
PlSqlParserListener.prototype.enterException_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#exception_declaration.
PlSqlParserListener.prototype.exitException_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pragma_declaration.
PlSqlParserListener.prototype.enterPragma_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pragma_declaration.
PlSqlParserListener.prototype.exitPragma_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#record_type_def.
PlSqlParserListener.prototype.enterRecord_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#record_type_def.
PlSqlParserListener.prototype.exitRecord_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#field_spec.
PlSqlParserListener.prototype.enterField_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#field_spec.
PlSqlParserListener.prototype.exitField_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#ref_cursor_type_def.
PlSqlParserListener.prototype.enterRef_cursor_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#ref_cursor_type_def.
PlSqlParserListener.prototype.exitRef_cursor_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_declaration.
PlSqlParserListener.prototype.enterType_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_declaration.
PlSqlParserListener.prototype.exitType_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_type_def.
PlSqlParserListener.prototype.enterTable_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_type_def.
PlSqlParserListener.prototype.exitTable_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_indexed_by_part.
PlSqlParserListener.prototype.enterTable_indexed_by_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_indexed_by_part.
PlSqlParserListener.prototype.exitTable_indexed_by_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#varray_type_def.
PlSqlParserListener.prototype.enterVarray_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#varray_type_def.
PlSqlParserListener.prototype.exitVarray_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#seq_of_statements.
PlSqlParserListener.prototype.enterSeq_of_statements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#seq_of_statements.
PlSqlParserListener.prototype.exitSeq_of_statements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#label_declaration.
PlSqlParserListener.prototype.enterLabel_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#label_declaration.
PlSqlParserListener.prototype.exitLabel_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#statement.
PlSqlParserListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#statement.
PlSqlParserListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#swallow_to_semi.
PlSqlParserListener.prototype.enterSwallow_to_semi = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#swallow_to_semi.
PlSqlParserListener.prototype.exitSwallow_to_semi = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#assignment_statement.
PlSqlParserListener.prototype.enterAssignment_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#assignment_statement.
PlSqlParserListener.prototype.exitAssignment_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#continue_statement.
PlSqlParserListener.prototype.enterContinue_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#continue_statement.
PlSqlParserListener.prototype.exitContinue_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#exit_statement.
PlSqlParserListener.prototype.enterExit_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#exit_statement.
PlSqlParserListener.prototype.exitExit_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#goto_statement.
PlSqlParserListener.prototype.enterGoto_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#goto_statement.
PlSqlParserListener.prototype.exitGoto_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#if_statement.
PlSqlParserListener.prototype.enterIf_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#if_statement.
PlSqlParserListener.prototype.exitIf_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#elsif_part.
PlSqlParserListener.prototype.enterElsif_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#elsif_part.
PlSqlParserListener.prototype.exitElsif_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#else_part.
PlSqlParserListener.prototype.enterElse_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#else_part.
PlSqlParserListener.prototype.exitElse_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#loop_statement.
PlSqlParserListener.prototype.enterLoop_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#loop_statement.
PlSqlParserListener.prototype.exitLoop_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cursor_loop_param.
PlSqlParserListener.prototype.enterCursor_loop_param = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cursor_loop_param.
PlSqlParserListener.prototype.exitCursor_loop_param = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#forall_statement.
PlSqlParserListener.prototype.enterForall_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#forall_statement.
PlSqlParserListener.prototype.exitForall_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#bounds_clause.
PlSqlParserListener.prototype.enterBounds_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#bounds_clause.
PlSqlParserListener.prototype.exitBounds_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#between_bound.
PlSqlParserListener.prototype.enterBetween_bound = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#between_bound.
PlSqlParserListener.prototype.exitBetween_bound = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lower_bound.
PlSqlParserListener.prototype.enterLower_bound = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lower_bound.
PlSqlParserListener.prototype.exitLower_bound = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#upper_bound.
PlSqlParserListener.prototype.enterUpper_bound = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#upper_bound.
PlSqlParserListener.prototype.exitUpper_bound = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#null_statement.
PlSqlParserListener.prototype.enterNull_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#null_statement.
PlSqlParserListener.prototype.exitNull_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#raise_statement.
PlSqlParserListener.prototype.enterRaise_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#raise_statement.
PlSqlParserListener.prototype.exitRaise_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#return_statement.
PlSqlParserListener.prototype.enterReturn_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#return_statement.
PlSqlParserListener.prototype.exitReturn_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_call.
PlSqlParserListener.prototype.enterFunction_call = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_call.
PlSqlParserListener.prototype.exitFunction_call = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#procedure_call.
PlSqlParserListener.prototype.enterProcedure_call = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#procedure_call.
PlSqlParserListener.prototype.exitProcedure_call = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pipe_row_statement.
PlSqlParserListener.prototype.enterPipe_row_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pipe_row_statement.
PlSqlParserListener.prototype.exitPipe_row_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#body.
PlSqlParserListener.prototype.enterBody = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#body.
PlSqlParserListener.prototype.exitBody = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#exception_handler.
PlSqlParserListener.prototype.enterException_handler = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#exception_handler.
PlSqlParserListener.prototype.exitException_handler = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#trigger_block.
PlSqlParserListener.prototype.enterTrigger_block = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#trigger_block.
PlSqlParserListener.prototype.exitTrigger_block = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#block.
PlSqlParserListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#block.
PlSqlParserListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sql_statement.
PlSqlParserListener.prototype.enterSql_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sql_statement.
PlSqlParserListener.prototype.exitSql_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#execute_immediate.
PlSqlParserListener.prototype.enterExecute_immediate = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#execute_immediate.
PlSqlParserListener.prototype.exitExecute_immediate = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dynamic_returning_clause.
PlSqlParserListener.prototype.enterDynamic_returning_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dynamic_returning_clause.
PlSqlParserListener.prototype.exitDynamic_returning_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#data_manipulation_language_statements.
PlSqlParserListener.prototype.enterData_manipulation_language_statements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#data_manipulation_language_statements.
PlSqlParserListener.prototype.exitData_manipulation_language_statements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cursor_manipulation_statements.
PlSqlParserListener.prototype.enterCursor_manipulation_statements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cursor_manipulation_statements.
PlSqlParserListener.prototype.exitCursor_manipulation_statements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#close_statement.
PlSqlParserListener.prototype.enterClose_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#close_statement.
PlSqlParserListener.prototype.exitClose_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#open_statement.
PlSqlParserListener.prototype.enterOpen_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#open_statement.
PlSqlParserListener.prototype.exitOpen_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#fetch_statement.
PlSqlParserListener.prototype.enterFetch_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#fetch_statement.
PlSqlParserListener.prototype.exitFetch_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#open_for_statement.
PlSqlParserListener.prototype.enterOpen_for_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#open_for_statement.
PlSqlParserListener.prototype.exitOpen_for_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#transaction_control_statements.
PlSqlParserListener.prototype.enterTransaction_control_statements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#transaction_control_statements.
PlSqlParserListener.prototype.exitTransaction_control_statements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#set_transaction_command.
PlSqlParserListener.prototype.enterSet_transaction_command = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#set_transaction_command.
PlSqlParserListener.prototype.exitSet_transaction_command = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#set_constraint_command.
PlSqlParserListener.prototype.enterSet_constraint_command = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#set_constraint_command.
PlSqlParserListener.prototype.exitSet_constraint_command = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#commit_statement.
PlSqlParserListener.prototype.enterCommit_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#commit_statement.
PlSqlParserListener.prototype.exitCommit_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#write_clause.
PlSqlParserListener.prototype.enterWrite_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#write_clause.
PlSqlParserListener.prototype.exitWrite_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rollback_statement.
PlSqlParserListener.prototype.enterRollback_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rollback_statement.
PlSqlParserListener.prototype.exitRollback_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#savepoint_statement.
PlSqlParserListener.prototype.enterSavepoint_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#savepoint_statement.
PlSqlParserListener.prototype.exitSavepoint_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#explain_statement.
PlSqlParserListener.prototype.enterExplain_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#explain_statement.
PlSqlParserListener.prototype.exitExplain_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#select_only_statement.
PlSqlParserListener.prototype.enterSelect_only_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#select_only_statement.
PlSqlParserListener.prototype.exitSelect_only_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#select_statement.
PlSqlParserListener.prototype.enterSelect_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#select_statement.
PlSqlParserListener.prototype.exitSelect_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subquery_factoring_clause.
PlSqlParserListener.prototype.enterSubquery_factoring_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subquery_factoring_clause.
PlSqlParserListener.prototype.exitSubquery_factoring_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#factoring_element.
PlSqlParserListener.prototype.enterFactoring_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#factoring_element.
PlSqlParserListener.prototype.exitFactoring_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#search_clause.
PlSqlParserListener.prototype.enterSearch_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#search_clause.
PlSqlParserListener.prototype.exitSearch_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cycle_clause.
PlSqlParserListener.prototype.enterCycle_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cycle_clause.
PlSqlParserListener.prototype.exitCycle_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subquery.
PlSqlParserListener.prototype.enterSubquery = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subquery.
PlSqlParserListener.prototype.exitSubquery = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subquery_basic_elements.
PlSqlParserListener.prototype.enterSubquery_basic_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subquery_basic_elements.
PlSqlParserListener.prototype.exitSubquery_basic_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subquery_operation_part.
PlSqlParserListener.prototype.enterSubquery_operation_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subquery_operation_part.
PlSqlParserListener.prototype.exitSubquery_operation_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#query_block.
PlSqlParserListener.prototype.enterQuery_block = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#query_block.
PlSqlParserListener.prototype.exitQuery_block = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#selected_list.
PlSqlParserListener.prototype.enterSelected_list = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#selected_list.
PlSqlParserListener.prototype.exitSelected_list = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#from_clause.
PlSqlParserListener.prototype.enterFrom_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#from_clause.
PlSqlParserListener.prototype.exitFrom_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#select_list_elements.
PlSqlParserListener.prototype.enterSelect_list_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#select_list_elements.
PlSqlParserListener.prototype.exitSelect_list_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref_list.
PlSqlParserListener.prototype.enterTable_ref_list = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref_list.
PlSqlParserListener.prototype.exitTable_ref_list = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref.
PlSqlParserListener.prototype.enterTable_ref = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref.
PlSqlParserListener.prototype.exitTable_ref = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref_aux.
PlSqlParserListener.prototype.enterTable_ref_aux = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref_aux.
PlSqlParserListener.prototype.exitTable_ref_aux = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref_aux_internal_one.
PlSqlParserListener.prototype.enterTable_ref_aux_internal_one = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref_aux_internal_one.
PlSqlParserListener.prototype.exitTable_ref_aux_internal_one = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref_aux_internal_two.
PlSqlParserListener.prototype.enterTable_ref_aux_internal_two = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref_aux_internal_two.
PlSqlParserListener.prototype.exitTable_ref_aux_internal_two = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref_aux_internal_three.
PlSqlParserListener.prototype.enterTable_ref_aux_internal_three = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref_aux_internal_three.
PlSqlParserListener.prototype.exitTable_ref_aux_internal_three = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#join_clause.
PlSqlParserListener.prototype.enterJoin_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#join_clause.
PlSqlParserListener.prototype.exitJoin_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#join_on_part.
PlSqlParserListener.prototype.enterJoin_on_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#join_on_part.
PlSqlParserListener.prototype.exitJoin_on_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#join_using_part.
PlSqlParserListener.prototype.enterJoin_using_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#join_using_part.
PlSqlParserListener.prototype.exitJoin_using_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#outer_join_type.
PlSqlParserListener.prototype.enterOuter_join_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#outer_join_type.
PlSqlParserListener.prototype.exitOuter_join_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#query_partition_clause.
PlSqlParserListener.prototype.enterQuery_partition_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#query_partition_clause.
PlSqlParserListener.prototype.exitQuery_partition_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#flashback_query_clause.
PlSqlParserListener.prototype.enterFlashback_query_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#flashback_query_clause.
PlSqlParserListener.prototype.exitFlashback_query_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_clause.
PlSqlParserListener.prototype.enterPivot_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_clause.
PlSqlParserListener.prototype.exitPivot_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_element.
PlSqlParserListener.prototype.enterPivot_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_element.
PlSqlParserListener.prototype.exitPivot_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_for_clause.
PlSqlParserListener.prototype.enterPivot_for_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_for_clause.
PlSqlParserListener.prototype.exitPivot_for_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_in_clause.
PlSqlParserListener.prototype.enterPivot_in_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_in_clause.
PlSqlParserListener.prototype.exitPivot_in_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_in_clause_element.
PlSqlParserListener.prototype.enterPivot_in_clause_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_in_clause_element.
PlSqlParserListener.prototype.exitPivot_in_clause_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_in_clause_elements.
PlSqlParserListener.prototype.enterPivot_in_clause_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_in_clause_elements.
PlSqlParserListener.prototype.exitPivot_in_clause_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unpivot_clause.
PlSqlParserListener.prototype.enterUnpivot_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unpivot_clause.
PlSqlParserListener.prototype.exitUnpivot_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unpivot_in_clause.
PlSqlParserListener.prototype.enterUnpivot_in_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unpivot_in_clause.
PlSqlParserListener.prototype.exitUnpivot_in_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unpivot_in_elements.
PlSqlParserListener.prototype.enterUnpivot_in_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unpivot_in_elements.
PlSqlParserListener.prototype.exitUnpivot_in_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hierarchical_query_clause.
PlSqlParserListener.prototype.enterHierarchical_query_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hierarchical_query_clause.
PlSqlParserListener.prototype.exitHierarchical_query_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#start_part.
PlSqlParserListener.prototype.enterStart_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#start_part.
PlSqlParserListener.prototype.exitStart_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#group_by_clause.
PlSqlParserListener.prototype.enterGroup_by_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#group_by_clause.
PlSqlParserListener.prototype.exitGroup_by_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#group_by_elements.
PlSqlParserListener.prototype.enterGroup_by_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#group_by_elements.
PlSqlParserListener.prototype.exitGroup_by_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rollup_cube_clause.
PlSqlParserListener.prototype.enterRollup_cube_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rollup_cube_clause.
PlSqlParserListener.prototype.exitRollup_cube_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#grouping_sets_clause.
PlSqlParserListener.prototype.enterGrouping_sets_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#grouping_sets_clause.
PlSqlParserListener.prototype.exitGrouping_sets_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#grouping_sets_elements.
PlSqlParserListener.prototype.enterGrouping_sets_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#grouping_sets_elements.
PlSqlParserListener.prototype.exitGrouping_sets_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#having_clause.
PlSqlParserListener.prototype.enterHaving_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#having_clause.
PlSqlParserListener.prototype.exitHaving_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_clause.
PlSqlParserListener.prototype.enterModel_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_clause.
PlSqlParserListener.prototype.exitModel_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cell_reference_options.
PlSqlParserListener.prototype.enterCell_reference_options = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cell_reference_options.
PlSqlParserListener.prototype.exitCell_reference_options = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#return_rows_clause.
PlSqlParserListener.prototype.enterReturn_rows_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#return_rows_clause.
PlSqlParserListener.prototype.exitReturn_rows_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#reference_model.
PlSqlParserListener.prototype.enterReference_model = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#reference_model.
PlSqlParserListener.prototype.exitReference_model = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#main_model.
PlSqlParserListener.prototype.enterMain_model = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#main_model.
PlSqlParserListener.prototype.exitMain_model = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_column_clauses.
PlSqlParserListener.prototype.enterModel_column_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_column_clauses.
PlSqlParserListener.prototype.exitModel_column_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_column_partition_part.
PlSqlParserListener.prototype.enterModel_column_partition_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_column_partition_part.
PlSqlParserListener.prototype.exitModel_column_partition_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_column_list.
PlSqlParserListener.prototype.enterModel_column_list = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_column_list.
PlSqlParserListener.prototype.exitModel_column_list = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_column.
PlSqlParserListener.prototype.enterModel_column = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_column.
PlSqlParserListener.prototype.exitModel_column = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_rules_clause.
PlSqlParserListener.prototype.enterModel_rules_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_rules_clause.
PlSqlParserListener.prototype.exitModel_rules_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_rules_part.
PlSqlParserListener.prototype.enterModel_rules_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_rules_part.
PlSqlParserListener.prototype.exitModel_rules_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_rules_element.
PlSqlParserListener.prototype.enterModel_rules_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_rules_element.
PlSqlParserListener.prototype.exitModel_rules_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cell_assignment.
PlSqlParserListener.prototype.enterCell_assignment = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cell_assignment.
PlSqlParserListener.prototype.exitCell_assignment = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_iterate_clause.
PlSqlParserListener.prototype.enterModel_iterate_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_iterate_clause.
PlSqlParserListener.prototype.exitModel_iterate_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#until_part.
PlSqlParserListener.prototype.enterUntil_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#until_part.
PlSqlParserListener.prototype.exitUntil_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#order_by_clause.
PlSqlParserListener.prototype.enterOrder_by_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#order_by_clause.
PlSqlParserListener.prototype.exitOrder_by_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#order_by_elements.
PlSqlParserListener.prototype.enterOrder_by_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#order_by_elements.
PlSqlParserListener.prototype.exitOrder_by_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#offset_clause.
PlSqlParserListener.prototype.enterOffset_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#offset_clause.
PlSqlParserListener.prototype.exitOffset_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#fetch_clause.
PlSqlParserListener.prototype.enterFetch_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#fetch_clause.
PlSqlParserListener.prototype.exitFetch_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#for_update_clause.
PlSqlParserListener.prototype.enterFor_update_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#for_update_clause.
PlSqlParserListener.prototype.exitFor_update_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#for_update_of_part.
PlSqlParserListener.prototype.enterFor_update_of_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#for_update_of_part.
PlSqlParserListener.prototype.exitFor_update_of_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#for_update_options.
PlSqlParserListener.prototype.enterFor_update_options = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#for_update_options.
PlSqlParserListener.prototype.exitFor_update_options = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#update_statement.
PlSqlParserListener.prototype.enterUpdate_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#update_statement.
PlSqlParserListener.prototype.exitUpdate_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#update_set_clause.
PlSqlParserListener.prototype.enterUpdate_set_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#update_set_clause.
PlSqlParserListener.prototype.exitUpdate_set_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_based_update_set_clause.
PlSqlParserListener.prototype.enterColumn_based_update_set_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_based_update_set_clause.
PlSqlParserListener.prototype.exitColumn_based_update_set_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#delete_statement.
PlSqlParserListener.prototype.enterDelete_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#delete_statement.
PlSqlParserListener.prototype.exitDelete_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#insert_statement.
PlSqlParserListener.prototype.enterInsert_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#insert_statement.
PlSqlParserListener.prototype.exitInsert_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#single_table_insert.
PlSqlParserListener.prototype.enterSingle_table_insert = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#single_table_insert.
PlSqlParserListener.prototype.exitSingle_table_insert = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#multi_table_insert.
PlSqlParserListener.prototype.enterMulti_table_insert = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#multi_table_insert.
PlSqlParserListener.prototype.exitMulti_table_insert = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#multi_table_element.
PlSqlParserListener.prototype.enterMulti_table_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#multi_table_element.
PlSqlParserListener.prototype.exitMulti_table_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#conditional_insert_clause.
PlSqlParserListener.prototype.enterConditional_insert_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#conditional_insert_clause.
PlSqlParserListener.prototype.exitConditional_insert_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#conditional_insert_when_part.
PlSqlParserListener.prototype.enterConditional_insert_when_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#conditional_insert_when_part.
PlSqlParserListener.prototype.exitConditional_insert_when_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#conditional_insert_else_part.
PlSqlParserListener.prototype.enterConditional_insert_else_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#conditional_insert_else_part.
PlSqlParserListener.prototype.exitConditional_insert_else_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#insert_into_clause.
PlSqlParserListener.prototype.enterInsert_into_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#insert_into_clause.
PlSqlParserListener.prototype.exitInsert_into_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#values_clause.
PlSqlParserListener.prototype.enterValues_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#values_clause.
PlSqlParserListener.prototype.exitValues_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_statement.
PlSqlParserListener.prototype.enterMerge_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_statement.
PlSqlParserListener.prototype.exitMerge_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_update_clause.
PlSqlParserListener.prototype.enterMerge_update_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_update_clause.
PlSqlParserListener.prototype.exitMerge_update_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_element.
PlSqlParserListener.prototype.enterMerge_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_element.
PlSqlParserListener.prototype.exitMerge_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_update_delete_part.
PlSqlParserListener.prototype.enterMerge_update_delete_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_update_delete_part.
PlSqlParserListener.prototype.exitMerge_update_delete_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_insert_clause.
PlSqlParserListener.prototype.enterMerge_insert_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_insert_clause.
PlSqlParserListener.prototype.exitMerge_insert_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#selected_tableview.
PlSqlParserListener.prototype.enterSelected_tableview = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#selected_tableview.
PlSqlParserListener.prototype.exitSelected_tableview = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lock_table_statement.
PlSqlParserListener.prototype.enterLock_table_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lock_table_statement.
PlSqlParserListener.prototype.exitLock_table_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#wait_nowait_part.
PlSqlParserListener.prototype.enterWait_nowait_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#wait_nowait_part.
PlSqlParserListener.prototype.exitWait_nowait_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lock_table_element.
PlSqlParserListener.prototype.enterLock_table_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lock_table_element.
PlSqlParserListener.prototype.exitLock_table_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lock_mode.
PlSqlParserListener.prototype.enterLock_mode = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lock_mode.
PlSqlParserListener.prototype.exitLock_mode = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#general_table_ref.
PlSqlParserListener.prototype.enterGeneral_table_ref = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#general_table_ref.
PlSqlParserListener.prototype.exitGeneral_table_ref = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#static_returning_clause.
PlSqlParserListener.prototype.enterStatic_returning_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#static_returning_clause.
PlSqlParserListener.prototype.exitStatic_returning_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#error_logging_clause.
PlSqlParserListener.prototype.enterError_logging_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#error_logging_clause.
PlSqlParserListener.prototype.exitError_logging_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#error_logging_into_part.
PlSqlParserListener.prototype.enterError_logging_into_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#error_logging_into_part.
PlSqlParserListener.prototype.exitError_logging_into_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#error_logging_reject_part.
PlSqlParserListener.prototype.enterError_logging_reject_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#error_logging_reject_part.
PlSqlParserListener.prototype.exitError_logging_reject_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dml_table_expression_clause.
PlSqlParserListener.prototype.enterDml_table_expression_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dml_table_expression_clause.
PlSqlParserListener.prototype.exitDml_table_expression_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_collection_expression.
PlSqlParserListener.prototype.enterTable_collection_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_collection_expression.
PlSqlParserListener.prototype.exitTable_collection_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subquery_restriction_clause.
PlSqlParserListener.prototype.enterSubquery_restriction_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subquery_restriction_clause.
PlSqlParserListener.prototype.exitSubquery_restriction_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sample_clause.
PlSqlParserListener.prototype.enterSample_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sample_clause.
PlSqlParserListener.prototype.exitSample_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#seed_part.
PlSqlParserListener.prototype.enterSeed_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#seed_part.
PlSqlParserListener.prototype.exitSeed_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#condition.
PlSqlParserListener.prototype.enterCondition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#condition.
PlSqlParserListener.prototype.exitCondition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#expressions.
PlSqlParserListener.prototype.enterExpressions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#expressions.
PlSqlParserListener.prototype.exitExpressions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#expression.
PlSqlParserListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#expression.
PlSqlParserListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cursor_expression.
PlSqlParserListener.prototype.enterCursor_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cursor_expression.
PlSqlParserListener.prototype.exitCursor_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#logical_expression.
PlSqlParserListener.prototype.enterLogical_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#logical_expression.
PlSqlParserListener.prototype.exitLogical_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unary_logical_expression.
PlSqlParserListener.prototype.enterUnary_logical_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unary_logical_expression.
PlSqlParserListener.prototype.exitUnary_logical_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#logical_operation.
PlSqlParserListener.prototype.enterLogical_operation = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#logical_operation.
PlSqlParserListener.prototype.exitLogical_operation = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#multiset_expression.
PlSqlParserListener.prototype.enterMultiset_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#multiset_expression.
PlSqlParserListener.prototype.exitMultiset_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#relational_expression.
PlSqlParserListener.prototype.enterRelational_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#relational_expression.
PlSqlParserListener.prototype.exitRelational_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#compound_expression.
PlSqlParserListener.prototype.enterCompound_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#compound_expression.
PlSqlParserListener.prototype.exitCompound_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#relational_operator.
PlSqlParserListener.prototype.enterRelational_operator = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#relational_operator.
PlSqlParserListener.prototype.exitRelational_operator = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#in_elements.
PlSqlParserListener.prototype.enterIn_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#in_elements.
PlSqlParserListener.prototype.exitIn_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#between_elements.
PlSqlParserListener.prototype.enterBetween_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#between_elements.
PlSqlParserListener.prototype.exitBetween_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#concatenation.
PlSqlParserListener.prototype.enterConcatenation = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#concatenation.
PlSqlParserListener.prototype.exitConcatenation = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#interval_expression.
PlSqlParserListener.prototype.enterInterval_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#interval_expression.
PlSqlParserListener.prototype.exitInterval_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_expression.
PlSqlParserListener.prototype.enterModel_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_expression.
PlSqlParserListener.prototype.exitModel_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_expression_element.
PlSqlParserListener.prototype.enterModel_expression_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_expression_element.
PlSqlParserListener.prototype.exitModel_expression_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#single_column_for_loop.
PlSqlParserListener.prototype.enterSingle_column_for_loop = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#single_column_for_loop.
PlSqlParserListener.prototype.exitSingle_column_for_loop = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#multi_column_for_loop.
PlSqlParserListener.prototype.enterMulti_column_for_loop = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#multi_column_for_loop.
PlSqlParserListener.prototype.exitMulti_column_for_loop = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unary_expression.
PlSqlParserListener.prototype.enterUnary_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unary_expression.
PlSqlParserListener.prototype.exitUnary_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#case_statement.
PlSqlParserListener.prototype.enterCase_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#case_statement.
PlSqlParserListener.prototype.exitCase_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#simple_case_statement.
PlSqlParserListener.prototype.enterSimple_case_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#simple_case_statement.
PlSqlParserListener.prototype.exitSimple_case_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#simple_case_when_part.
PlSqlParserListener.prototype.enterSimple_case_when_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#simple_case_when_part.
PlSqlParserListener.prototype.exitSimple_case_when_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#searched_case_statement.
PlSqlParserListener.prototype.enterSearched_case_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#searched_case_statement.
PlSqlParserListener.prototype.exitSearched_case_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#searched_case_when_part.
PlSqlParserListener.prototype.enterSearched_case_when_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#searched_case_when_part.
PlSqlParserListener.prototype.exitSearched_case_when_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#case_else_part.
PlSqlParserListener.prototype.enterCase_else_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#case_else_part.
PlSqlParserListener.prototype.exitCase_else_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#atom.
PlSqlParserListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#atom.
PlSqlParserListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#quantified_expression.
PlSqlParserListener.prototype.enterQuantified_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#quantified_expression.
PlSqlParserListener.prototype.exitQuantified_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#string_function.
PlSqlParserListener.prototype.enterString_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#string_function.
PlSqlParserListener.prototype.exitString_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#standard_function.
PlSqlParserListener.prototype.enterStandard_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#standard_function.
PlSqlParserListener.prototype.exitStandard_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#literal.
PlSqlParserListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#literal.
PlSqlParserListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#numeric_function_wrapper.
PlSqlParserListener.prototype.enterNumeric_function_wrapper = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#numeric_function_wrapper.
PlSqlParserListener.prototype.exitNumeric_function_wrapper = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#numeric_function.
PlSqlParserListener.prototype.enterNumeric_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#numeric_function.
PlSqlParserListener.prototype.exitNumeric_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#other_function.
PlSqlParserListener.prototype.enterOther_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#other_function.
PlSqlParserListener.prototype.exitOther_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#over_clause_keyword.
PlSqlParserListener.prototype.enterOver_clause_keyword = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#over_clause_keyword.
PlSqlParserListener.prototype.exitOver_clause_keyword = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#within_or_over_clause_keyword.
PlSqlParserListener.prototype.enterWithin_or_over_clause_keyword = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#within_or_over_clause_keyword.
PlSqlParserListener.prototype.exitWithin_or_over_clause_keyword = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#standard_prediction_function_keyword.
PlSqlParserListener.prototype.enterStandard_prediction_function_keyword = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#standard_prediction_function_keyword.
PlSqlParserListener.prototype.exitStandard_prediction_function_keyword = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#over_clause.
PlSqlParserListener.prototype.enterOver_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#over_clause.
PlSqlParserListener.prototype.exitOver_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#windowing_clause.
PlSqlParserListener.prototype.enterWindowing_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#windowing_clause.
PlSqlParserListener.prototype.exitWindowing_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#windowing_type.
PlSqlParserListener.prototype.enterWindowing_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#windowing_type.
PlSqlParserListener.prototype.exitWindowing_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#windowing_elements.
PlSqlParserListener.prototype.enterWindowing_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#windowing_elements.
PlSqlParserListener.prototype.exitWindowing_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#using_clause.
PlSqlParserListener.prototype.enterUsing_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#using_clause.
PlSqlParserListener.prototype.exitUsing_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#using_element.
PlSqlParserListener.prototype.enterUsing_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#using_element.
PlSqlParserListener.prototype.exitUsing_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#collect_order_by_part.
PlSqlParserListener.prototype.enterCollect_order_by_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#collect_order_by_part.
PlSqlParserListener.prototype.exitCollect_order_by_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#within_or_over_part.
PlSqlParserListener.prototype.enterWithin_or_over_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#within_or_over_part.
PlSqlParserListener.prototype.exitWithin_or_over_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cost_matrix_clause.
PlSqlParserListener.prototype.enterCost_matrix_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cost_matrix_clause.
PlSqlParserListener.prototype.exitCost_matrix_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_passing_clause.
PlSqlParserListener.prototype.enterXml_passing_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_passing_clause.
PlSqlParserListener.prototype.exitXml_passing_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_attributes_clause.
PlSqlParserListener.prototype.enterXml_attributes_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_attributes_clause.
PlSqlParserListener.prototype.exitXml_attributes_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_namespaces_clause.
PlSqlParserListener.prototype.enterXml_namespaces_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_namespaces_clause.
PlSqlParserListener.prototype.exitXml_namespaces_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_table_column.
PlSqlParserListener.prototype.enterXml_table_column = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_table_column.
PlSqlParserListener.prototype.exitXml_table_column = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_general_default_part.
PlSqlParserListener.prototype.enterXml_general_default_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_general_default_part.
PlSqlParserListener.prototype.exitXml_general_default_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_multiuse_expression_element.
PlSqlParserListener.prototype.enterXml_multiuse_expression_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_multiuse_expression_element.
PlSqlParserListener.prototype.exitXml_multiuse_expression_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlroot_param_version_part.
PlSqlParserListener.prototype.enterXmlroot_param_version_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlroot_param_version_part.
PlSqlParserListener.prototype.exitXmlroot_param_version_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlroot_param_standalone_part.
PlSqlParserListener.prototype.enterXmlroot_param_standalone_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlroot_param_standalone_part.
PlSqlParserListener.prototype.exitXmlroot_param_standalone_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlserialize_param_enconding_part.
PlSqlParserListener.prototype.enterXmlserialize_param_enconding_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlserialize_param_enconding_part.
PlSqlParserListener.prototype.exitXmlserialize_param_enconding_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlserialize_param_version_part.
PlSqlParserListener.prototype.enterXmlserialize_param_version_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlserialize_param_version_part.
PlSqlParserListener.prototype.exitXmlserialize_param_version_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlserialize_param_ident_part.
PlSqlParserListener.prototype.enterXmlserialize_param_ident_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlserialize_param_ident_part.
PlSqlParserListener.prototype.exitXmlserialize_param_ident_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sql_plus_command.
PlSqlParserListener.prototype.enterSql_plus_command = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sql_plus_command.
PlSqlParserListener.prototype.exitSql_plus_command = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#whenever_command.
PlSqlParserListener.prototype.enterWhenever_command = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#whenever_command.
PlSqlParserListener.prototype.exitWhenever_command = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#set_command.
PlSqlParserListener.prototype.enterSet_command = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#set_command.
PlSqlParserListener.prototype.exitSet_command = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partition_extension_clause.
PlSqlParserListener.prototype.enterPartition_extension_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partition_extension_clause.
PlSqlParserListener.prototype.exitPartition_extension_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_alias.
PlSqlParserListener.prototype.enterColumn_alias = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_alias.
PlSqlParserListener.prototype.exitColumn_alias = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_alias.
PlSqlParserListener.prototype.enterTable_alias = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_alias.
PlSqlParserListener.prototype.exitTable_alias = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#where_clause.
PlSqlParserListener.prototype.enterWhere_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#where_clause.
PlSqlParserListener.prototype.exitWhere_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#into_clause.
PlSqlParserListener.prototype.enterInto_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#into_clause.
PlSqlParserListener.prototype.exitInto_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_column_name.
PlSqlParserListener.prototype.enterXml_column_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_column_name.
PlSqlParserListener.prototype.exitXml_column_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cost_class_name.
PlSqlParserListener.prototype.enterCost_class_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cost_class_name.
PlSqlParserListener.prototype.exitCost_class_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#attribute_name.
PlSqlParserListener.prototype.enterAttribute_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#attribute_name.
PlSqlParserListener.prototype.exitAttribute_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#savepoint_name.
PlSqlParserListener.prototype.enterSavepoint_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#savepoint_name.
PlSqlParserListener.prototype.exitSavepoint_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rollback_segment_name.
PlSqlParserListener.prototype.enterRollback_segment_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rollback_segment_name.
PlSqlParserListener.prototype.exitRollback_segment_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_var_name.
PlSqlParserListener.prototype.enterTable_var_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_var_name.
PlSqlParserListener.prototype.exitTable_var_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#schema_name.
PlSqlParserListener.prototype.enterSchema_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#schema_name.
PlSqlParserListener.prototype.exitSchema_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#routine_name.
PlSqlParserListener.prototype.enterRoutine_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#routine_name.
PlSqlParserListener.prototype.exitRoutine_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#package_name.
PlSqlParserListener.prototype.enterPackage_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#package_name.
PlSqlParserListener.prototype.exitPackage_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#implementation_type_name.
PlSqlParserListener.prototype.enterImplementation_type_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#implementation_type_name.
PlSqlParserListener.prototype.exitImplementation_type_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#parameter_name.
PlSqlParserListener.prototype.enterParameter_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#parameter_name.
PlSqlParserListener.prototype.exitParameter_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#reference_model_name.
PlSqlParserListener.prototype.enterReference_model_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#reference_model_name.
PlSqlParserListener.prototype.exitReference_model_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#main_model_name.
PlSqlParserListener.prototype.enterMain_model_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#main_model_name.
PlSqlParserListener.prototype.exitMain_model_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#container_tableview_name.
PlSqlParserListener.prototype.enterContainer_tableview_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#container_tableview_name.
PlSqlParserListener.prototype.exitContainer_tableview_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#aggregate_function_name.
PlSqlParserListener.prototype.enterAggregate_function_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#aggregate_function_name.
PlSqlParserListener.prototype.exitAggregate_function_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#query_name.
PlSqlParserListener.prototype.enterQuery_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#query_name.
PlSqlParserListener.prototype.exitQuery_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#grantee_name.
PlSqlParserListener.prototype.enterGrantee_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#grantee_name.
PlSqlParserListener.prototype.exitGrantee_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#role_name.
PlSqlParserListener.prototype.enterRole_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#role_name.
PlSqlParserListener.prototype.exitRole_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#constraint_name.
PlSqlParserListener.prototype.enterConstraint_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#constraint_name.
PlSqlParserListener.prototype.exitConstraint_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#label_name.
PlSqlParserListener.prototype.enterLabel_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#label_name.
PlSqlParserListener.prototype.exitLabel_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_name.
PlSqlParserListener.prototype.enterType_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_name.
PlSqlParserListener.prototype.exitType_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sequence_name.
PlSqlParserListener.prototype.enterSequence_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sequence_name.
PlSqlParserListener.prototype.exitSequence_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#exception_name.
PlSqlParserListener.prototype.enterException_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#exception_name.
PlSqlParserListener.prototype.exitException_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_name.
PlSqlParserListener.prototype.enterFunction_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_name.
PlSqlParserListener.prototype.exitFunction_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#procedure_name.
PlSqlParserListener.prototype.enterProcedure_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#procedure_name.
PlSqlParserListener.prototype.exitProcedure_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#trigger_name.
PlSqlParserListener.prototype.enterTrigger_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#trigger_name.
PlSqlParserListener.prototype.exitTrigger_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#variable_name.
PlSqlParserListener.prototype.enterVariable_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#variable_name.
PlSqlParserListener.prototype.exitVariable_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_name.
PlSqlParserListener.prototype.enterIndex_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_name.
PlSqlParserListener.prototype.exitIndex_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cursor_name.
PlSqlParserListener.prototype.enterCursor_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cursor_name.
PlSqlParserListener.prototype.exitCursor_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#record_name.
PlSqlParserListener.prototype.enterRecord_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#record_name.
PlSqlParserListener.prototype.exitRecord_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#collection_name.
PlSqlParserListener.prototype.enterCollection_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#collection_name.
PlSqlParserListener.prototype.exitCollection_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#link_name.
PlSqlParserListener.prototype.enterLink_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#link_name.
PlSqlParserListener.prototype.exitLink_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_name.
PlSqlParserListener.prototype.enterColumn_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_name.
PlSqlParserListener.prototype.exitColumn_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tableview_name.
PlSqlParserListener.prototype.enterTableview_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tableview_name.
PlSqlParserListener.prototype.exitTableview_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmltable.
PlSqlParserListener.prototype.enterXmltable = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmltable.
PlSqlParserListener.prototype.exitXmltable = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#char_set_name.
PlSqlParserListener.prototype.enterChar_set_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#char_set_name.
PlSqlParserListener.prototype.exitChar_set_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#synonym_name.
PlSqlParserListener.prototype.enterSynonym_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#synonym_name.
PlSqlParserListener.prototype.exitSynonym_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#schema_object_name.
PlSqlParserListener.prototype.enterSchema_object_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#schema_object_name.
PlSqlParserListener.prototype.exitSchema_object_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dir_object_name.
PlSqlParserListener.prototype.enterDir_object_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dir_object_name.
PlSqlParserListener.prototype.exitDir_object_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#user_object_name.
PlSqlParserListener.prototype.enterUser_object_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#user_object_name.
PlSqlParserListener.prototype.exitUser_object_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#grant_object_name.
PlSqlParserListener.prototype.enterGrant_object_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#grant_object_name.
PlSqlParserListener.prototype.exitGrant_object_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_list.
PlSqlParserListener.prototype.enterColumn_list = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_list.
PlSqlParserListener.prototype.exitColumn_list = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#paren_column_list.
PlSqlParserListener.prototype.enterParen_column_list = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#paren_column_list.
PlSqlParserListener.prototype.exitParen_column_list = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#keep_clause.
PlSqlParserListener.prototype.enterKeep_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#keep_clause.
PlSqlParserListener.prototype.exitKeep_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_argument.
PlSqlParserListener.prototype.enterFunction_argument = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_argument.
PlSqlParserListener.prototype.exitFunction_argument = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_argument_analytic.
PlSqlParserListener.prototype.enterFunction_argument_analytic = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_argument_analytic.
PlSqlParserListener.prototype.exitFunction_argument_analytic = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_argument_modeling.
PlSqlParserListener.prototype.enterFunction_argument_modeling = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_argument_modeling.
PlSqlParserListener.prototype.exitFunction_argument_modeling = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#respect_or_ignore_nulls.
PlSqlParserListener.prototype.enterRespect_or_ignore_nulls = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#respect_or_ignore_nulls.
PlSqlParserListener.prototype.exitRespect_or_ignore_nulls = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#argument.
PlSqlParserListener.prototype.enterArgument = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#argument.
PlSqlParserListener.prototype.exitArgument = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_spec.
PlSqlParserListener.prototype.enterType_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_spec.
PlSqlParserListener.prototype.exitType_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#datatype.
PlSqlParserListener.prototype.enterDatatype = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#datatype.
PlSqlParserListener.prototype.exitDatatype = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#precision_part.
PlSqlParserListener.prototype.enterPrecision_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#precision_part.
PlSqlParserListener.prototype.exitPrecision_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#native_datatype_element.
PlSqlParserListener.prototype.enterNative_datatype_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#native_datatype_element.
PlSqlParserListener.prototype.exitNative_datatype_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#bind_variable.
PlSqlParserListener.prototype.enterBind_variable = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#bind_variable.
PlSqlParserListener.prototype.exitBind_variable = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#general_element.
PlSqlParserListener.prototype.enterGeneral_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#general_element.
PlSqlParserListener.prototype.exitGeneral_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#general_element_part.
PlSqlParserListener.prototype.enterGeneral_element_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#general_element_part.
PlSqlParserListener.prototype.exitGeneral_element_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_element.
PlSqlParserListener.prototype.enterTable_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_element.
PlSqlParserListener.prototype.exitTable_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_privilege.
PlSqlParserListener.prototype.enterObject_privilege = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_privilege.
PlSqlParserListener.prototype.exitObject_privilege = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#system_privilege.
PlSqlParserListener.prototype.enterSystem_privilege = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#system_privilege.
PlSqlParserListener.prototype.exitSystem_privilege = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#constant.
PlSqlParserListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#constant.
PlSqlParserListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#numeric.
PlSqlParserListener.prototype.enterNumeric = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#numeric.
PlSqlParserListener.prototype.exitNumeric = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#numeric_negative.
PlSqlParserListener.prototype.enterNumeric_negative = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#numeric_negative.
PlSqlParserListener.prototype.exitNumeric_negative = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#quoted_string.
PlSqlParserListener.prototype.enterQuoted_string = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#quoted_string.
PlSqlParserListener.prototype.exitQuoted_string = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#identifier.
PlSqlParserListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#identifier.
PlSqlParserListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#id_expression.
PlSqlParserListener.prototype.enterId_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#id_expression.
PlSqlParserListener.prototype.exitId_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#outer_join_sign.
PlSqlParserListener.prototype.enterOuter_join_sign = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#outer_join_sign.
PlSqlParserListener.prototype.exitOuter_join_sign = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#regular_id.
PlSqlParserListener.prototype.enterRegular_id = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#regular_id.
PlSqlParserListener.prototype.exitRegular_id = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#non_reserved_keywords_in_12c.
PlSqlParserListener.prototype.enterNon_reserved_keywords_in_12c = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#non_reserved_keywords_in_12c.
PlSqlParserListener.prototype.exitNon_reserved_keywords_in_12c = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#non_reserved_keywords_pre12c.
PlSqlParserListener.prototype.enterNon_reserved_keywords_pre12c = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#non_reserved_keywords_pre12c.
PlSqlParserListener.prototype.exitNon_reserved_keywords_pre12c = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#string_function_name.
PlSqlParserListener.prototype.enterString_function_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#string_function_name.
PlSqlParserListener.prototype.exitString_function_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#numeric_function_name.
PlSqlParserListener.prototype.enterNumeric_function_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#numeric_function_name.
PlSqlParserListener.prototype.exitNumeric_function_name = function(ctx) {
};



exports.PlSqlParserListener = PlSqlParserListener;